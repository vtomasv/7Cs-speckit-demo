import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const mappingDir = path.join(root, "mapping");
const comDir = path.join(root, "com");
const outputDir = path.join(root, "composed");

const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

const mappings = {
  business: read("mapping/E1-business-context.md"),
  architectural: read("mapping/E1-architectural-context.md"),
  system: read("mapping/E1-system-context.md"),
  structural: read("mapping/E1-structural.md"),
  functional7: read("mapping/E1-functional-p7.md"),
  functional9: read("mapping/E1-functional-p9.md"),
  functional10: read("mapping/E1-functional-p10.md"),
  deployment: read("mapping/E1-deployment.md"),
};

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

function between(text, startHeading, endHeading) {
  const start = text.indexOf(startHeading);
  if (start < 0) throw new Error(`No se encontró encabezado: ${startHeading}`);
  const contentStart = text.indexOf("\n", start) + 1;
  const end = endHeading ? text.indexOf(endHeading, contentStart) : text.length;
  if (endHeading && end < 0) {
    throw new Error(`No se encontró encabezado final: ${endHeading}`);
  }
  return text.slice(contentStart, end).trim();
}

function removeRange(text, startToken, endToken) {
  const start = text.indexOf(startToken);
  if (start < 0) throw new Error(`No se encontró bloque a deduplicar: ${startToken}`);
  const end = text.indexOf(endToken, start);
  if (end < 0) throw new Error(`No se encontró fin de bloque: ${endToken}`);
  return `${text.slice(0, start).trimEnd()}\n\n${text.slice(end).trimStart()}`.trim();
}

const bccContext = between(
  mappings.business,
  "### Contexto",
  "### Perfiles de usuario",
);
const bccProfiles = between(
  mappings.business,
  "### Perfiles de usuario",
  "### Entidades clave",
);
const bccEntities = between(
  mappings.business,
  "### Entidades clave",
  "### Escenarios de usuario derivados de procesos de negocio",
);
const bccScenarios = between(
  mappings.business,
  "### Escenarios de usuario derivados de procesos de negocio",
  "### Agrupadores de requisitos",
);
const bccGroups = between(
  mappings.business,
  "### Agrupadores de requisitos",
  "### Índice de requisitos",
);
const bccAreas = between(
  mappings.business,
  "### Índice de requisitos",
  "## Aclaraciones",
);

const accConstitution = between(
  mappings.architectural,
  "## Fragmento para `/speckit.constitution`",
  "## Fragmento para `/speckit.specify`",
);
const accValidators = between(
  mappings.architectural,
  "### Validadores de aceptación",
  "### Criterios de éxito",
);
const accSuccess = between(
  mappings.architectural,
  "### Criterios de éxito",
  "### Requisitos no funcionales",
);
const accNfrRaw = between(
  mappings.architectural,
  "### Requisitos no funcionales",
  "### Restricciones",
);
const accNfr = removeRange(
  accNfrRaw,
  "#### NFR-ACC-02 — Gobierno de la operación",
  "#### NFR-ACC-03 — Identidad institucional",
);
const accRestrictions = between(
  mappings.architectural,
  "### Restricciones",
  "## Contexto para `/speckit.plan`",
);

const sccScope = between(
  mappings.system,
  "### Alcance",
  "### Integraciones",
);
const sccIntegrations = between(
  mappings.system,
  "### Integraciones",
  "### Requisitos funcionales de frontera",
);
const sccRequirementsRaw = between(
  mappings.system,
  "### Requisitos funcionales de frontera",
  "### Requisito no funcional observable",
);
const sccRequirements = removeRange(
  sccRequirementsRaw,
  "- `FR-SCC-014`",
  "#### Salidas hacia sistemas externos",
);
const sccNfrAndScenarios = between(
  mappings.system,
  "### Requisito no funcional observable",
  "### Fuera de alcance (por complemento)",
);
const sccOutOfScope = between(
  mappings.system,
  "### Fuera de alcance (por complemento)",
  "## Contexto técnico y nombres concretos para `/speckit.plan`",
);

const functionalParts = [
  {
    page: 7,
    prefix: "INT",
    text: mappings.functional7,
    planEnd: "## Dudas `[NEEDS CLARIFICATION]`",
  },
  {
    page: 9,
    prefix: "ETL",
    text: mappings.functional9,
    planEnd: "## Dudas `[NEEDS CLARIFICATION]`",
  },
  {
    page: 10,
    prefix: "CMS",
    text: mappings.functional10,
    planEnd: "## Dudas `[NEEDS CLARIFICATION]`",
  },
].map((item) => ({
  ...item,
  requirements: between(
    item.text,
    "### Requisitos funcionales",
    "### Secciones vacías y coherencia",
  ),
  emptySections: between(
    item.text,
    "### Secciones vacías y coherencia",
    "## Contexto para `/speckit.plan`",
  ),
}));

const deploymentNfr = between(
  mappings.deployment,
  "### Requisitos no funcionales de operación",
  "## Fragmento para `/speckit.plan`",
);

const constitutionPrompt = `/speckit.constitution

# Entrega E1 — 7Cs v1.1 June 2026

## Misión (BCC)

${between(
  mappings.business,
  "## Fragmento para `/speckit.constitution`",
  "## Fragmento para `/speckit.specify`",
)}

## Principios y límites (ACC)

${accConstitution}
`;

const additionalEntities = `- \`ENT-INT-004\` — **Información académica institucional**; atributos por confirmar.  
  ← Functional p.7 / Data objects / \`E1-F7-DO-04\`; el texto literal y el nombre concreto se preservan en el contexto de plan.
- \`ENT-ETL-002\` — **Documento de publicación**; atributos por confirmar.  
  ← Functional p.9 / Data objects / \`E1-F9-DO-02\` «Documento publicación»
- \`ENT-ETL-003\` — **Log de extracción**; atributos y retención por confirmar.  
  ← Functional p.9 / Data objects / \`E1-F9-DO-03\` «Log Extracciones»
- \`ENT-CMS-001\` — **Token de persona/sesión**; atributos por confirmar.  
  ← Functional p.10 / Data objects / \`E1-F10-DO-01\` «Token_Persona (Sesion)»
- \`ENT-CMS-005\` — **Archivo multimedia**; atributos por confirmar.  
  ← Functional p.10 / Data objects / \`E1-F10-DO-05\` «Archivos Multimedia»
- \`ENT-CMS-007\` — **Comentario de blog**; atributos por confirmar.  
  ← Functional p.10 / Data objects / \`E1-F10-DO-07\` «Comentario Blog»`;

const entityAliases = `| Post-it Functional | Entidad canónica BCC | Motivo de deduplicación |
|---|---|---|
| \`E1-F7-DO-01\` «Proyecto» | \`ENT-07\` «Proyectos de investigación» | Misma entidad de proyecto; conservar ambas trazas |
| \`E1-F7-DO-02\` «Noticia» | \`ENT-01\` «Noticias y Eventos» | Especialización ya contenida |
| \`E1-F7-DO-03\` «Evento» | \`ENT-01\` «Noticias y Eventos» | Especialización ya contenida |
| \`E1-F9-DO-01\` «Publicación (Paper)» | \`ENT-08\` «Publicaciones científicas (Papers)» | Misma entidad de publicación |
| \`E1-F10-DO-02\` «Proyecto» | \`ENT-07\` «Proyectos de investigación» | Misma entidad de proyecto |
| \`E1-F10-DO-03\` «Noticia / Evento» | \`ENT-01\` «Noticias y Eventos» | Misma entidad compuesta |
| \`E1-F10-DO-04\` «Indicador» | \`ENT-05\` «Indicadores de rendimiento» | Misma entidad de indicador |
| \`E1-F10-DO-06\` «Entrada Blog» | \`ENT-04\` «Entradas de blog» | Misma entidad de entrada |`;

const functionalEmptySections = functionalParts
  .map(
    (item) =>
      `### Coherencia de secciones vacías (Functional p.${item.page} / ${item.prefix})\n\n${item.emptySections}`,
  )
  .join("\n\n");

const functionalRequirements = functionalParts
  .map(
    (item) =>
      `### Bundle ${item.prefix} (Functional p.${item.page})\n\n${item.requirements}`,
  )
  .join("\n\n");

const specifyPrompt = `/speckit.specify

# Entrega E1 — 7Cs v1.1 June 2026

(BCC) Construir un «Sitio web de contenido dinámico y centralizado» para la «Proyección de identidad y prestigio institucional» y la «Difusión de contenidos para la comunidad». [NEEDS CLARIFICATION: el canvas no declara qué sistema o proceso existente reemplaza.]

## CONTEXTO (BCC)

${bccContext}

## PERFILES (BCC / Business roles)

${bccProfiles}

## ALCANCE (BCC + SCC + Functional)

### Agrupadores de requisitos (BCC)

${bccGroups}

### Índice de áreas (BCC)

${bccAreas}

### Frontera del sistema (SCC)

${sccScope}

${functionalEmptySections}

### Fuera de alcance por complemento (SCC)

${sccOutOfScope}

## ENTIDADES (BCC + Functional)

### Entidades canónicas (BCC)

${bccEntities}

### Entidades adicionales no duplicadas (Functional)

${additionalEntities}

### Unificación por trazabilidad (BCC + Functional)

${entityAliases}

## INTEGRACIONES (SCC)

${sccIntegrations}

## REQUISITOS (BCC + SCC + Functional)

### Escenarios de negocio (BCC)

${bccScenarios}

### Requisitos de frontera (SCC)

${sccRequirements}

### NFR observable y escenarios de frontera (SCC)

${sccNfrAndScenarios}

${functionalRequirements}

### Deduplicaciones de requisitos (SCC + Functional + ACC + Deployment)

- \`FR-CMS-001\` absorbe \`FR-SCC-014\`: conservar las trazas \`E1-F10-APII-01\` y \`E1-SDII-05\` en un único requisito de callback del proveedor institucional de identidad.
- \`NFR-OP-006\` absorbe \`NFR-ACC-02\`: conservar las trazas \`E1-OP-01\` y \`E1-TSP-01\` en una única obligación de gobierno operativo por el área responsable de sistemas.

## VALIDADORES DE ACEPTACIÓN (ACC)

${accValidators}

## CRITERIOS DE ÉXITO (ACC)

${accSuccess}

## RESTRICCIONES Y NFR (ACC + Structural)

### NFR de arquitectura observables (ACC)

${accNfr}

### Restricciones (ACC)

${accRestrictions}

### Refuerzos deduplicados (Structural)

| Restricción canónica | Traza Structural que la refuerza |
|---|---|
| \`R-ACC-03\` — infraestructura administrada localmente | Structural / Constraints / \`E1-SCON-01\` |
| \`R-ACC-02\` — herramientas permitidas | Structural / Constraints / \`E1-SCON-02\` |
| \`R-ACC-04\` — integración sin interfaz programática | Structural / Constraints / \`E1-SCON-03\` |

## NFR DE OPERACIÓN (Deployment)

${deploymentNfr}

NO incluir decisiones de tecnología en esta especificación: el contexto técnico se entrega por separado en /speckit.plan.
`;

const planSections = [
  {
    title: "Contexto Architectural dado por la organización (ACC)",
    body: between(
      mappings.architectural,
      "## Contexto para `/speckit.plan` — dado por la organización",
      "## Aclaraciones",
    ),
  },
  {
    title: "Contrapartes y nombres concretos (SCC)",
    body: between(
      mappings.system,
      "## Contexto técnico y nombres concretos para `/speckit.plan`",
      "## Dudas `[NEEDS CLARIFICATION]`",
    ),
  },
  {
    title: "Arquitectura en capas y censo (Structural)",
    body: between(
      mappings.structural,
      "## Fragmento para `/speckit.plan` — contexto dado, no elegido",
      "## Control de destino",
    ),
  },
  ...[
    ["INT", mappings.functional7],
    ["ETL", mappings.functional9],
    ["CMS", mappings.functional10],
  ].map(([prefix, text]) => ({
    title: `Contexto del bundle ${prefix} (Functional)`,
    body: between(
      text,
      `## Contexto para \`/speckit.plan\` — bundle \`${prefix}\``,
      "## Dudas `[NEEDS CLARIFICATION]`",
    ),
  })),
  {
    title: "Infraestructura y operación (Deployment)",
    body: between(
      mappings.deployment,
      "## Fragmento para `/speckit.plan`",
      "## Dudas `[NEEDS CLARIFICATION]`",
    ),
  },
];

const planPrompt = `/speckit.plan

# Entrega E1 — contexto técnico dado por la organización

> GATE: no ejecutar este comando hasta cerrar las dudas de \`/speckit.clarify\`. Este archivo preserva decisiones dadas; no autoriza completar configuraciones, versiones, periodicidades, esquemas ni permisos ausentes.

${planSections
  .map((section) => `## ${section.title}\n\n${section.body}`)
  .join("\n\n")}
`;

const clarificationSources = [
  ["Structural", mappings.structural, "## Dudas `[NEEDS CLARIFICATION]`", "## Anexo de trazabilidad"],
  ["Deployment", mappings.deployment, "## Dudas `[NEEDS CLARIFICATION]`", "## Anexo de trazabilidad"],
  ["System Context", mappings.system, "## Dudas `[NEEDS CLARIFICATION]`", "## Anexo de trazabilidad"],
  ["Functional INT", mappings.functional7, "## Dudas `[NEEDS CLARIFICATION]`", "## Anexo de trazabilidad"],
  ["Functional ETL", mappings.functional9, "## Dudas `[NEEDS CLARIFICATION]`", "## Anexo de trazabilidad"],
  ["Functional CMS", mappings.functional10, "## Dudas `[NEEDS CLARIFICATION]`", "## Anexo de trazabilidad"],
  ["Business Context", mappings.business, "## Aclaraciones", "## Trazas"],
  ["Architectural Context", mappings.architectural, "## Aclaraciones", "## Trazas"],
];

function parseClarifications(source, text, start, end) {
  return between(text, start, end)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^\d+\.\s+/.test(line))
    .map((line) => ({
      source,
      text: line.replace(/^\d+\.\s+/, ""),
    }));
}

const rawClarifications = clarificationSources.flatMap(([source, text, start, end]) =>
  parseClarifications(source, text, start, end),
);

const consolidated = [
  {
    source: "Composición / BCC",
    text: "[NEEDS CLARIFICATION: el canvas no declara qué sistema o proceso existente reemplaza.]",
  },
  {
    source: "Todos los canvas",
    text: "[NEEDS CLARIFICATION: System, Organization, Canvas, Version y Date están vacíos; confirmar la identificación y versión de los artefactos.]",
  },
  {
    source: "Structural + Functional",
    text: "[NEEDS CLARIFICATION: falta detalle funcional de los bundles «CMS Web Backoffice UI», «Portal Web Público UI», «PostgreSQL (Local)», «Multimedia Storage (File System)», «Configuracion de reverse proxy mediante Nginx» y «Configuracion de contenedores en Docker».]",
  },
];

const filteredClarifications = rawClarifications.filter(({ text }) => {
  const normalized = text.toLocaleLowerCase("es");
  if (
    normalized.includes("cinco campos de cabecera") ||
    (normalized.includes("system") &&
      normalized.includes("organization") &&
      normalized.includes("canvas") &&
      normalized.includes("version") &&
      normalized.includes("date"))
  ) {
    return false;
  }
  if (
    normalized.includes("faltan functional") ||
    normalized.includes("falta un functional") ||
    normalized.includes("falta detalle funcional")
  ) {
    return false;
  }
  return true;
});

const uniqueClarifications = [];
const seenClarifications = new Set();
for (const item of [...consolidated, ...filteredClarifications]) {
  const key = item.text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("es")
    .replace(/\s+/g, " ")
    .trim();
  if (!seenClarifications.has(key)) {
    seenClarifications.add(key);
    uniqueClarifications.push(item);
  }
}

function clarificationPriority(text) {
  const value = text.toLocaleLowerCase("es");
  if (
    /(reemplaza|bundle|functional|alcance|contraparte|repositorio|mape|asignar|direcci[oó]n|actor|perfil|entornos de prueba|portal web)/.test(
      value,
    )
  ) {
    return 1;
  }
  if (
    /(contrato|callback|api|csv|esquema|atribut|entidad|persist|evento|notific|job|periodicidad|autentic|permiso|indicador|f[oó]rmula|trigger|sesion|sesi[oó]n)/.test(
      value,
    )
  ) {
    return 2;
  }
  return 3;
}

uniqueClarifications.sort((a, b) => {
  const priority = clarificationPriority(a.text) - clarificationPriority(b.text);
  if (priority !== 0) return priority;
  return a.source.localeCompare(b.source, "es");
});

const clarifyGroups = [1, 2, 3]
  .map((priority) => {
    const labels = {
      1: "Prioridad 1 — alcance, identidad y cobertura",
      2: "Prioridad 2 — contratos, datos y comportamiento",
      3: "Prioridad 3 — métricas, configuración y operación",
    };
    const items = uniqueClarifications.filter(
      (item) => clarificationPriority(item.text) === priority,
    );
    return `## ${labels[priority]}\n\n${items
      .map((item, index) => `${index + 1}. (${item.source}) ${item.text}`)
      .join("\n")}`;
  })
  .join("\n\n");

const clarifyInput = `/speckit.clarify

# Entrega E1 — dudas abiertas ordenadas por impacto

No resolver por inferencia. Registrar cada respuesta en la especificación y volver a ejecutar la auditoría antes de \`/speckit.plan\`.

${clarifyGroups}
`;

function parseTraceTargets(mappingText, mappingName) {
  const result = new Map();
  for (const line of mappingText.split("\n")) {
    if (!line.startsWith("|")) continue;
    const cells = line
      .slice(1, line.endsWith("|") ? -1 : undefined)
      .split("|")
      .map((cell) => cell.trim().replace(/^`|`$/g, ""));
    if (cells.length < 3 || !/^E1-[A-Z0-9-]+$/.test(cells[0])) continue;
    if (result.has(cells[0])) {
      throw new Error(`Traza duplicada en ${mappingName}: ${cells[0]}`);
    }
    result.set(cells[0], cells[2]);
  }
  return result;
}

const targetMaps = [
  ["business", mappings.business],
  ["architectural", mappings.architectural],
  ["system", mappings.system],
  ["structural", mappings.structural],
  ["functional7", mappings.functional7],
  ["functional9", mappings.functional9],
  ["functional10", mappings.functional10],
  ["deployment", mappings.deployment],
].map(([name, text]) => parseTraceTargets(text, name));

const traceTargets = new Map();
for (const targetMap of targetMaps) {
  for (const [id, target] of targetMap) {
    if (traceTargets.has(id)) throw new Error(`ID de traza repetido: ${id}`);
    traceTargets.set(id, target);
  }
}

const composedTargetOverrides = new Map([
  ["E1-F7-DO-01", "spec.entities.ENT-07"],
  ["E1-F7-DO-02", "spec.entities.ENT-01"],
  ["E1-F7-DO-03", "spec.entities.ENT-01"],
  ["E1-F9-DO-01", "spec.entities.ENT-08"],
  ["E1-F10-DO-02", "spec.entities.ENT-07"],
  ["E1-F10-DO-03", "spec.entities.ENT-01"],
  ["E1-F10-DO-04", "spec.entities.ENT-05"],
  ["E1-F10-DO-06", "spec.entities.ENT-04"],
  ["E1-SDII-05", "spec.FR-CMS-001"],
  ["E1-TSP-01", "spec.NFR-OP-006 + plan.PLAN-ACC-01"],
  [
    "E1-SCON-01",
    "spec.restricciones.R-ACC-03 + plan.constraints.STR-CON-01",
  ],
  [
    "E1-SCON-02",
    "spec.restricciones.R-ACC-02 + plan.constraints.STR-CON-02",
  ],
  [
    "E1-SCON-03",
    "spec.restricciones.R-ACC-04 + plan.constraints.STR-CON-03",
  ],
]);

for (const [id, target] of composedTargetOverrides) {
  if (!traceTargets.has(id)) {
    throw new Error(`No existe traza para aplicar override compuesto: ${id}`);
  }
  traceTargets.set(id, target);
}

function classifyRule(canvas, section, text) {
  const normalized = text.toLocaleLowerCase("es");
  if (/no expone api|imposibilidad|no puede/.test(normalized)) return "R7";
  if (section === "Jobs") return "R4";
  if (
    /interfaces?|api inputs|api outputs/.test(section.toLocaleLowerCase("es")) ||
    /endpoint|callback/.test(normalized)
  ) {
    return "R3";
  }
  if (/^(reducir|mejorar|facilitar|solucionar)/.test(normalized)) return "R5";
  if (
    /technology stack|middleware|runtime|orchestration|container|operating systems|virtualization|hardware|networks|platform|repository bundles|frontend bundles|backend bundles|device bundles/.test(
      section.toLocaleLowerCase("es"),
    ) ||
    (canvas === "structural" && section === "Constraints")
  ) {
    return "R6";
  }
  if (
    /business processes|data imports|data exports|event handlers|event triggers|helpers|installation/.test(
      section.toLocaleLowerCase("es"),
    )
  ) {
    return "R2";
  }
  if (
    /u-noticias|u-proyectos|u-campus|ucampus|u-papers|u-pasaporte|upasaporte|postgresql|nginx|docker|linux|openjdk|node\.js|python runtime|on-premise/.test(
      normalized,
    ) ||
    /^bundles$/i.test(section)
  ) {
    return "R6";
  }
  return "R1";
}

function destinationFor(target) {
  const destinations = [];
  if (/constitution/i.test(target)) destinations.push("constitution.md");
  if (/spec/i.test(target)) destinations.push("spec.md");
  if (/plan/i.test(target)) destinations.push("plan.md");
  return destinations.length > 0 ? destinations.join(" + ") : target;
}

function requirementIds(target) {
  const ids =
    target.match(
      /(?:FR|NFR|ENT|PER|CE|R|P|LIM|VAL|ESC|AREA|EP|PLAN|STACK|CON|DEP|PRES|SERV|PERS|PLAT|STR|ACT|DEV|CONS|INT)-[A-Z0-9-]+/g,
    ) ?? [];
  return [...new Set(ids)].join(", ") || target;
}

const escapeCell = (value) =>
  String(value).replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();

const traceRows = [];
for (const { data } of coms) {
  for (const section of data.sections) {
    for (const sticky of section.stickies) {
      const target = traceTargets.get(sticky.id);
      if (!target) throw new Error(`Falta destino para ${sticky.id}`);
      traceRows.push({
        postItId: sticky.id,
        canvas: data.canvas,
        section: section.name,
        text: sticky.text,
        rule: classifyRule(data.canvas, section.name, sticky.text),
        destination: destinationFor(target),
        requirementId: requirementIds(target),
        task: "PENDIENTE",
      });
    }
  }
}

if (traceRows.length !== 262) {
  throw new Error(`Balance de trazas inválido: ${traceRows.length}, esperado 262`);
}
if (traceTargets.size !== 262) {
  throw new Error(
    `Las tablas de mapeo contienen ${traceTargets.size} trazas, esperado 262`,
  );
}

const traceAnnex = `# Anexo de trazabilidad — Entrega E1

Plantilla: \`7Cs v1.1 June 2026\`. Una fila por post-it. La columna \`tarea\` permanece pendiente hasta ejecutar \`/speckit.tasks\`.

| post_it_id | canvas | seccion | texto | regla | destino | id_req | tarea |
|---|---|---|---|---|---|---|---|
${traceRows
  .map(
    (row) =>
      `| ${escapeCell(row.postItId)} | ${escapeCell(row.canvas)} | ${escapeCell(row.section)} | «${escapeCell(row.text)}» | ${row.rule} | ${escapeCell(row.destination)} | ${escapeCell(row.requirementId)} | ${row.task} |`,
  )
  .join("\n")}
`;

const productPatterns = [
  /u-noticias/i,
  /u-proyectos/i,
  /u-campus/i,
  /ucampus/i,
  /u-papers/i,
  /u-pasaporte/i,
  /upasaporte/i,
  /postgresql/i,
  /nginx/i,
  /docker/i,
  /\blinux\b/i,
  /java spring/i,
  /\bpython\b/i,
  /node\.js/i,
  /jre\/openjdk/i,
  /multimedia storage/i,
  /filesystem/i,
];

const productLeaks = productPatterns
  .filter((pattern) => pattern.test(specifyPrompt))
  .map((pattern) => pattern.toString());
if (productLeaks.length > 0) {
  throw new Error(
    `Nombres técnicos detectados en specify: ${productLeaks.join(", ")}`,
  );
}

const sccRequirementIds = [
  ...sccRequirements.matchAll(/`(FR-SCC-\d+)`/g),
].map((match) => match[1]);
const sccScenarioCount = (
  sccRequirements.match(/(?:Éxito:|Escenario:)/g) ?? []
).length;

const composeReport = `# Reporte de composición — E1

- Plantilla: \`7Cs v1.1 June 2026\`.
- Fragmentos de entrada: \`8\`.
- Post-its de entrada: \`262\`.
- Filas del anexo: \`${traceRows.length}\`.
- Dudas consolidadas y ordenadas: \`${uniqueClarifications.length}\`.
- Nombres de producto/framework detectados en \`E1-specify.prompt.md\`: \`0\`.
- Functional disponibles mapeados: \`3/3\`.
- Cobertura Functional respecto del censo Structural: \`3/9\`; faltan \`6\`.
- Deduplicaciones explícitas de requisitos: \`2\`.
- Alias de entidades deduplicadas: \`8\`.
- FR SCC conservados después de deduplicar callback: \`${new Set(sccRequirementIds).size}\`.
- Marcadores de escenario/éxito en esos FR SCC: \`${sccScenarioCount}\`.
- Gate: cerrar \`E1-clarify.input.md\` antes de ejecutar \`E1-plan.input.md\`.

Estado: composición lista para \`7cs-spec-audit\`.
`;

fs.mkdirSync(outputDir, { recursive: true });

const outputs = {
  "E1-constitution.prompt.md": constitutionPrompt,
  "E1-specify.prompt.md": specifyPrompt,
  "E1-clarify.input.md": clarifyInput,
  "E1-plan.input.md": planPrompt,
  "E1-trace-annex.md": traceAnnex,
  "E1-compose-report.md": composeReport,
};

for (const [name, content] of Object.entries(outputs)) {
  fs.writeFileSync(path.join(outputDir, name), content.trimEnd() + "\n", "utf8");
}

console.log(
  JSON.stringify(
    {
      outputDir,
      outputs: Object.keys(outputs),
      traceRows: traceRows.length,
      clarifications: uniqueClarifications.length,
      productLeaks: productLeaks.length,
    },
    null,
    2,
  ),
);
