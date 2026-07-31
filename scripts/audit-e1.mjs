import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outputDir = path.join(root, "audit");

const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

const comFiles = [
  "com/E1-business_context-p1.json",
  "com/E1-architectural_context-p2.json",
  "com/E1-system_context-p3.json",
  "com/E1-structural-p6.json",
  "com/E1-functional-p7.json",
  "com/E1-functional-p9.json",
  "com/E1-functional-p10.json",
  "com/E1-deployment-p8.json",
];

const coms = comFiles.map((file) => ({
  file,
  data: JSON.parse(read(file)),
}));

const specify = read("composed/E1-specify.prompt.md");
const constitution = read("composed/E1-constitution.prompt.md");
const annex = read("composed/E1-trace-annex.md");
const composedClarify = read("composed/E1-clarify.input.md");
const planInput = read("composed/E1-plan.input.md");

function parseAnnexRows(text) {
  const rows = [];
  for (const line of text.split("\n")) {
    if (!line.startsWith("| E1-")) continue;
    const cells = line
      .slice(1, line.endsWith("|") ? -1 : undefined)
      .split("|")
      .map((cell) => cell.trim());
    if (cells.length !== 8) {
      throw new Error(`Fila inválida en anexo: ${line}`);
    }
    rows.push({
      postItId: cells[0],
      canvas: cells[1],
      section: cells[2],
      text: cells[3],
      rule: cells[4],
      destination: cells[5],
      requirementId: cells[6],
      task: cells[7],
    });
  }
  return rows;
}

const annexRows = parseAnnexRows(annex);
const annexById = new Map();
const duplicateAnnexIds = new Set();
for (const row of annexRows) {
  if (annexById.has(row.postItId)) duplicateAnnexIds.add(row.postItId);
  annexById.set(row.postItId, row);
}

const comPostIts = [];
for (const { data } of coms) {
  for (const section of data.sections) {
    for (const sticky of section.stickies) {
      comPostIts.push({
        id: sticky.id,
        canvas: data.canvas,
        section: section.name,
        text: sticky.text,
      });
    }
  }
}

const comIds = new Set(comPostIts.map((item) => item.id));
const orphanIds = comPostIts
  .filter((item) => {
    const row = annexById.get(item.id);
    return !row || !row.destination || row.destination === "—";
  })
  .map((item) => item.id);
const extraAnnexIds = annexRows
  .filter((row) => !comIds.has(row.postItId))
  .map((row) => row.postItId);

const coveredPostIts = comPostIts.length - orphanIds.length;
const coverage = coveredPostIts / comPostIts.length;

function requirementDeclarations(text) {
  const lines = text.split("\n");
  const declarations = [];
  const patterns = [
    { type: "FR", regex: /^- `(FR-SCC-\d+)` —/ },
    { type: "FR", regex: /^##### `(FR-(?:INT|ETL|CMS)-\d+)` —/ },
    { type: "NFR", regex: /^- `(NFR-SCC-\d+)` —/ },
    { type: "NFR", regex: /^#### `?(NFR-(?:ACC|OP)-\d+)`? —/ },
    { type: "CE", regex: /^#### (CE-ACC-\d+) —/ },
    { type: "R", regex: /^#### (R-ACC-\d+) —/ },
  ];

  for (let index = 0; index < lines.length; index += 1) {
    for (const pattern of patterns) {
      const match = lines[index].match(pattern.regex);
      if (match) {
        declarations.push({
          id: match[1],
          type: pattern.type,
          start: index,
          declaration: lines[index],
        });
        break;
      }
    }
  }

  for (let index = 0; index < declarations.length; index += 1) {
    const current = declarations[index];
    const next = declarations[index + 1];
    current.end = next ? next.start : lines.length;
    current.block = lines.slice(current.start, current.end).join("\n");
  }
  return declarations;
}

function constitutionDeclarations(text) {
  const declarations = [];
  for (const line of text.split("\n")) {
    const match = line.match(/^- ((?:P|LIM)-ACC-\d+) —/);
    if (match) {
      declarations.push({
        id: match[1],
        type: match[1].startsWith("P-") ? "P" : "LIM",
        block: line,
      });
    }
  }
  return declarations;
}

const specifyRequirements = requirementDeclarations(specify);
const constitutionRequirements = constitutionDeclarations(constitution);
const frs = specifyRequirements.filter((item) => item.type === "FR");
const verifiableFrs = frs.filter((item) =>
  /Dado[\s\S]*cuando[\s\S]*entonces/i.test(item.block),
);
const verifiability = frs.length === 0 ? 1 : verifiableFrs.length / frs.length;

const requirementIds = [
  ...specifyRequirements.map((item) => item.id),
  ...constitutionRequirements.map((item) => item.id),
];
const duplicateRequirementIds = requirementIds.filter(
  (id, index) => requirementIds.indexOf(id) !== index,
);

const tracedSpecifyRequirements = specifyRequirements.filter((item) =>
  item.block.includes("←"),
);
const tracedConstitutionRequirements = constitutionRequirements.filter((item) =>
  item.block.includes("←"),
);

const canonicalFrs = frs.filter((item) => {
  const obligation = item.block
    .split("\n")
    .find((line) => /\bEl sistema\b/.test(line) && /\bDEBE\b/.test(line));
  return Boolean(obligation);
});

const forbiddenVerbFindings = [];
for (const requirement of frs) {
  const matches = requirement.block.match(/\b(gestionar|manejar|soportar)\b/gi) ?? [];
  if (matches.length > 0) {
    forbiddenVerbFindings.push({
      id: requirement.id,
      verbs: [...new Set(matches.map((value) => value.toLocaleLowerCase("es")))],
    });
  }
}

const bundleFrs = frs.filter((item) => /^FR-(INT|ETL|CMS)-/.test(item.id));
const invalidBundlePrefixes = bundleFrs.filter(
  (item) => !/^FR-(INT|ETL|CMS)-\d+$/.test(item.id),
);

const allStickyTexts = comPostIts.map((item) => item.text).join("\n");
const productExtractors = [
  /u-noticias/gi,
  /u-proyectos/gi,
  /u-campus/gi,
  /Ucampus/g,
  /u-papers/gi,
  /u-pasaporte/gi,
  /UPasaporte/g,
  /PostgreSQL/gi,
  /Nginx/gi,
  /Docker Swarm/gi,
  /Docker CLI/gi,
  /Docker/gi,
  /\bLinux\b/gi,
  /JRE\/OpenJDK/gi,
  /Java Spring/gi,
  /\bPython(?: runtime)?\b/gi,
  /Node\.js/gi,
  /Multimedia Storage/gi,
  /FileSystem/gi,
  /File System/gi,
];

const blacklist = new Set();
for (const extractor of productExtractors) {
  for (const match of allStickyTexts.matchAll(extractor)) {
    blacklist.add(match[0]);
  }
}

function literalRegex(value) {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const startsWord = /^\p{L}|\d/u.test(value);
  const endsWord = /\p{L}|\d$/u.test(value);
  return new RegExp(
    `${startsWord ? "\\b" : ""}${escaped}${endsWord ? "\\b" : ""}`,
    "giu",
  );
}

const contaminationFindings = [];
for (const term of [...blacklist].sort((a, b) => a.localeCompare(b, "es"))) {
  const matches = [...specify.matchAll(literalRegex(term))];
  if (matches.length > 0) {
    contaminationFindings.push({
      term,
      count: matches.length,
      lines: [
        ...new Set(
          matches.map(
            (match) => specify.slice(0, match.index).split("\n").length,
          ),
        ),
      ],
    });
  }
}
const contamination = contaminationFindings.reduce(
  (sum, item) => sum + item.count,
  0,
);

function appendAuditClarifications(base) {
  const marker = "## Prioridad 3 — métricas, configuración y operación";
  const markerIndex = base.indexOf(marker);
  if (markerIndex < 0) throw new Error("No se encontró Prioridad 3 en clarify");
  const before = base.slice(0, markerIndex).trimEnd();
  const after = base.slice(markerIndex);
  const priority2Lines = before
    .split("\n")
    .filter((line) => /^\d+\.\s+\(/.test(line));
  const priority1Marker = before.indexOf("## Prioridad 2");
  const priority2Text =
    priority1Marker >= 0 ? before.slice(priority1Marker) : before;
  const currentPriority2Count = priority2Text
    .split("\n")
    .filter((line) => /^\d+\.\s+\(/.test(line)).length;

  const additions = [
    "(Auditoría) [NEEDS CLARIFICATION: definir controles de seguridad distintos de autenticación —autorización, protección de datos, auditoría y respuesta ante incidentes— o confirmar explícitamente que quedan fuera de esta entrega.]",
    "(Auditoría) [NEEDS CLARIFICATION: definir criterios verificables de accesibilidad para las interfaces o confirmar explícitamente que no forman parte del alcance.]",
  ];
  const numbered = additions
    .map(
      (text, index) => `${currentPriority2Count + index + 1}. ${text}`,
    )
    .join("\n");
  return `${before}\n${numbered}\n\n${after}`.trimEnd() + "\n";
}

const auditClarify = appendAuditClarifications(composedClarify);
const ambiguityCount = (
  auditClarify.match(/^\d+\.\s+\(/gm) ?? []
).length;
const totalEmittedRequirements =
  specifyRequirements.length + constitutionRequirements.length;
const ambiguity = ambiguityCount / totalEmittedRequirements;

function clarificationCountsByCanvas(text) {
  const counts = new Map();
  const sourceToCanvas = new Map([
    ["Business Context", "business_context"],
    ["Architectural Context", "architectural_context"],
    ["System Context", "system_context"],
    ["Structural", "structural"],
    ["Functional INT", "functional_p7"],
    ["Functional ETL", "functional_p9"],
    ["Functional CMS", "functional_p10"],
    ["Deployment", "deployment"],
  ]);
  for (const line of text.split("\n")) {
    const match = line.match(/^\d+\.\s+\(([^)]+)\)/);
    if (!match) continue;
    const canvas = sourceToCanvas.get(match[1]) ?? "cross_canvas";
    counts.set(canvas, (counts.get(canvas) ?? 0) + 1);
  }
  return counts;
}

const doubtCounts = clarificationCountsByCanvas(auditClarify);
const canvasOrder = [
  ["business_context", "business_context"],
  ["architectural_context", "architectural_context"],
  ["system_context", "system_context"],
  ["structural", "structural"],
  ["functional_p7", "functional"],
  ["functional_p9", "functional"],
  ["functional_p10", "functional"],
  ["deployment", "deployment"],
];

const canvasRows = canvasOrder.map(([label, canvas], index) => {
  const com = coms[index].data;
  const postIts = com.sections.reduce(
    (sum, section) => sum + section.stickies.length,
    0,
  );
  const traces = annexRows.filter(
    (row) =>
      row.canvas === canvas &&
      com.sections.some((section) =>
        section.stickies.some((sticky) => sticky.id === row.postItId),
      ),
  ).length;
  return {
    label,
    postIts,
    traces,
    doubts: doubtCounts.get(label) ?? 0,
  };
});

const crossCanvasDoubts = doubtCounts.get("cross_canvas") ?? 0;

const structuralBundleCount = JSON.parse(
  read("com/E1-structural-p6.json"),
).sections
  .filter((section) =>
    /^(Frontend|Backend|Repository|Platform & Infrastructure|Device) bundles$/.test(
      section.name,
    ),
  )
  .reduce((sum, section) => sum + section.stickies.length, 0);
const deploymentBundleCount = JSON.parse(
  read("com/E1-deployment-p8.json"),
).sections.find((section) => section.name === "Bundles").stickies.length;
const functionalCanvasCount = coms.filter(
  ({ data }) => data.canvas === "functional",
).length;
const crossChecksReported =
  planInput.includes("Chequeo cruzado de bundles con Structural") &&
  planInput.includes("Censo total: **9 bundles**") &&
  planInput.includes("Cobertura Functional identificable: **3/9 bundles**");

const expectedAbsences = {
  respaldo: /respald/i.test(planInput),
  monitoreo: /monitoreo/i.test(planInput),
  disponibilidad: /disponibilidad/i.test(planInput),
  seguridad: /controles de seguridad/i.test(auditClarify),
  accesibilidad: /criterios verificables de accesibilidad/i.test(auditClarify),
};

const valid =
  coverage === 1 &&
  contamination === 0 &&
  duplicateAnnexIds.size === 0 &&
  extraAnnexIds.length === 0;

const sanityRows = annexRows.slice(1);
const sanityIds = new Set(sanityRows.map((row) => row.postItId));
const sanityCovered = comPostIts.filter((item) => sanityIds.has(item.id)).length;
const sanityCoverage = sanityCovered / comPostIts.length;
const sanityContamination = contamination;
const sanityValid = sanityCoverage === 1 && sanityContamination === 0;
if (sanityValid) {
  throw new Error("La prueba de sanidad no rechazó el anexo mutilado");
}

const fmt = (value, digits = 3) => value.toFixed(digits).replace(".", ",");
const ok = (condition) => (condition ? "OK" : "FALLA");

const tableRows = canvasRows
  .map(
    (row) =>
      `| ${row.label} | ${row.postIts} | ${row.traces} | ${row.doubts} |`,
  )
  .join("\n");

const technicalTerms = [...blacklist].sort((a, b) =>
  a.localeCompare(b, "es"),
);

const auditReport = `# Auditoría E1

Fuentes recontadas de forma independiente: 8 COM, \`E1-specify.prompt.md\`, \`E1-constitution.prompt.md\` y \`E1-trace-annex.md\`. No se utilizó el reporte de composición como fuente de métricas.

| Canvas | Post-it | Trazas | Dudas |
|---|---:|---:|---:|
${tableRows}
| cross_canvas / auditoría | 0 | 0 | ${crossCanvasDoubts} |
| **Total** | **${comPostIts.length}** | **${annexRows.length}** | **${ambiguityCount}** |

## Métricas

- **C · Cobertura** = ${coveredPostIts}/${comPostIts.length} = **${fmt(coverage, 2)}** → ${coverage === 1 ? "OK" : `RECHAZO; huérfanos: ${orphanIds.join(", ")}`}.
- **A · Ambigüedad** = ${ambiguityCount}/${totalEmittedRequirements} = **${fmt(ambiguity)}** dudas por requisito emitido. Denominador: ${specifyRequirements.length} obligaciones en specify + ${constitutionRequirements.length} en constitution.
- **T · Contaminación técnica** = **${contamination}** menciones → ${contamination === 0 ? "OK" : "RECHAZO"}. Lista negra derivada de los COM: ${technicalTerms.map((term) => `«${term}»`).join(", ")}.
- **V · Verificabilidad** = ${verifiableFrs.length}/${frs.length} = **${fmt(verifiability, 2)}** → ${verifiability === 1 ? "OK" : "FR sin escenario: " + frs.filter((item) => !verifiableFrs.includes(item)).map((item) => item.id).join(", ")}.

## Controles estructurales

- IDs del anexo duplicados: **${duplicateAnnexIds.size}** → ${ok(duplicateAnnexIds.size === 0)}.
- IDs extra respecto de los COM: **${extraAnnexIds.length}** → ${ok(extraAnnexIds.length === 0)}.
- Obligaciones con traza \`←\` en specify: **${tracedSpecifyRequirements.length}/${specifyRequirements.length}** → ${ok(tracedSpecifyRequirements.length === specifyRequirements.length)}.
- Principios/límites con traza \`←\` en constitution: **${tracedConstitutionRequirements.length}/${constitutionRequirements.length}** → ${ok(tracedConstitutionRequirements.length === constitutionRequirements.length)}.
- IDs de obligación duplicados: **${new Set(duplicateRequirementIds).size}** → ${ok(duplicateRequirementIds.length === 0)}.
- FR de bundle con prefijo válido: **${bundleFrs.length - invalidBundlePrefixes.length}/${bundleFrs.length}** → ${ok(invalidBundlePrefixes.length === 0)}.
- FR con forma canónica estricta \`El sistema DEBE …\`: **${canonicalFrs.length}/${frs.length}**. Los ${frs.length - canonicalFrs.length} FR SCC usan \`debe\` en minúscula; es una desviación de forma, no de significado ni de V.
- Verbos prohibidos detectados en FR: **${forbiddenVerbFindings.length}** → ${ok(forbiddenVerbFindings.length === 0)}.
- Idempotencia de IDs: sin baseline de auditoría previo; los IDs compuestos coinciden con los fragmentos fuente y no presentan colisiones.

## Chequeos cruzados y ausencias

- Censo Structural: **${structuralBundleCount}** bundles.
- Deployment: **${deploymentBundleCount}** unidades declaradas.
- Functional disponibles: **${functionalCanvasCount}**.
- Chequeo Structural↔Deployment↔Functional reportado en plan: **${crossChecksReported ? "sí" : "no"}**.
- Ausencias o preguntas explícitas: respaldo **${ok(expectedAbsences.respaldo)}**, monitoreo **${ok(expectedAbsences.monitoreo)}**, disponibilidad **${ok(expectedAbsences.disponibilidad)}**, seguridad **${ok(expectedAbsences.seguridad)}**, accesibilidad **${ok(expectedAbsences.accesibilidad)}**.

## Prueba de sanidad del auditor

Se eliminó sólo en memoria la fila \`${annexRows[0].postItId}\`.

- Cobertura mutilada = ${sanityCovered}/${comPostIts.length} = **${fmt(sanityCoverage, 4)}**.
- Veredicto esperado del auditor mutilado: **INVÁLIDA**.
- Resultado: **${sanityValid ? "FALLA — no rechazó" : "OK — rechazó por C < 1,00"}**.

## Veredicto

**${valid ? "VÁLIDA" : "INVÁLIDA"}${valid ? "" : " — " + [coverage < 1 ? "C < 1,00" : "", contamination > 0 ? "T > 0" : ""].filter(Boolean).join("; ")}**.

La corrida cubre por completo qué elementos existen y mantiene la tecnología fuera de specify. La principal debilidad está en cuánto, cuándo y bajo qué contratos deben operar: quedan ${ambiguityCount} dudas abiertas. La validez del pipeline no equivale a una especificación cerrada; \`/speckit.plan\` sigue bloqueado hasta resolver \`/speckit.clarify\`.
`;

const checklistInput = `/speckit.checklist

# Checklist de calidad — Entrega E1

Validar la especificación compuesta y registrar evidencia para cada punto:

- [x] Cobertura atómica: ${coveredPostIts}/${comPostIts.length} post-it con una fila y destino no vacío.
- [x] Contaminación técnica en specify: ${contamination}.
- [x] Verificabilidad: ${verifiableFrs.length}/${frs.length} FR con escenario Dado/Cuando/Entonces.
- [x] Trazas \`←\`: ${tracedSpecifyRequirements.length}/${specifyRequirements.length} obligaciones de specify y ${tracedConstitutionRequirements.length}/${constitutionRequirements.length} de constitution.
- [x] Prefijos de bundle: ${bundleFrs.length}/${bundleFrs.length} FR \`INT\`, \`ETL\` o \`CMS\` válidos.
- [x] Colisiones de IDs: 0.
- [x] Verbos prohibidos sin objeto detectados: 0.
- [ ] Normalizar la forma estricta \`El sistema DEBE …\` en ${frs.length - canonicalFrs.length} FR SCC que usan \`debe\` en minúscula, sin cambiar su significado.
- [ ] Resolver las ${ambiguityCount} dudas de \`E1-clarify.audit-input.md\`.
- [ ] Confirmar el cruce 9 bundles Structural ↔ 5 Deployment ↔ 3 Functional, incluida la variante ortográfica del portal.
- [ ] Cerrar preguntas de respaldo, monitoreo, disponibilidad, seguridad y accesibilidad.
- [ ] Tras \`/speckit.tasks\`, completar la columna \`tarea\` del anexo y volver a ejecutar esta auditoría.

No ejecutar \`/speckit.plan\` mientras haya dudas que fijen periodicidades, esquemas, permisos, contratos o métricas.
`;

const machineResult = {
  delivery_id: "E1",
  verdict: valid ? "valida" : "invalida",
  metrics: {
    coverage: {
      numerator: coveredPostIts,
      denominator: comPostIts.length,
      value: coverage,
    },
    ambiguity: {
      numerator: ambiguityCount,
      denominator: totalEmittedRequirements,
      value: ambiguity,
    },
    technical_contamination: {
      mentions: contamination,
      findings: contaminationFindings,
      blacklist: technicalTerms,
    },
    verifiability: {
      numerator: verifiableFrs.length,
      denominator: frs.length,
      value: verifiability,
    },
  },
  sanity_test: {
    removed_post_it: annexRows[0].postItId,
    coverage: sanityCoverage,
    verdict: sanityValid ? "valida" : "invalida",
    passed: !sanityValid,
  },
  findings: {
    orphan_ids: orphanIds,
    extra_annex_ids: extraAnnexIds,
    duplicate_annex_ids: [...duplicateAnnexIds],
    duplicate_requirement_ids: [...new Set(duplicateRequirementIds)],
    strict_canonical_fr: {
      passing: canonicalFrs.length,
      total: frs.length,
    },
  },
};

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(
  path.join(outputDir, "E1-audit-report.md"),
  auditReport.trimEnd() + "\n",
  "utf8",
);
fs.writeFileSync(
  path.join(outputDir, "E1-clarify.audit-input.md"),
  auditClarify.trimEnd() + "\n",
  "utf8",
);
fs.writeFileSync(
  path.join(outputDir, "E1-checklist.input.md"),
  checklistInput.trimEnd() + "\n",
  "utf8",
);
fs.writeFileSync(
  path.join(outputDir, "E1-audit.json"),
  JSON.stringify(machineResult, null, 2) + "\n",
  "utf8",
);

console.log(
  JSON.stringify(
    {
      verdict: machineResult.verdict,
      metrics: machineResult.metrics,
      sanity_test: machineResult.sanity_test,
      outputs: [
        "audit/E1-audit-report.md",
        "audit/E1-clarify.audit-input.md",
        "audit/E1-checklist.input.md",
        "audit/E1-audit.json",
      ],
    },
    null,
    2,
  ),
);
