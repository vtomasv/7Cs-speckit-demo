# Demo 7Cs → SDD con Spec Kit

Este repositorio demuestra cómo convertir una entrega de **canvas del framework 7Cs** en insumos trazables para **Specification-Driven Development (SDD)** usando skills especializados y **Spec Kit**.

La idea central es tratar cada post-it como evidencia: primero se transcribe a un modelo intermedio, después se transforma mediante reglas explícitas y, finalmente, se audita antes de generar diseño, tareas o código. El objetivo no es que un modelo “interprete creativamente” los canvas, sino producir una especificación reproducible, refutable y conectada con su fuente.

## Qué demuestra este repositorio

La entrega de ejemplo `E1` parte del PDF:

```text
resources/DIS 2026 _ AS _ Equipo 1.pdf
```

El pipeline reconoce seis tipos de canvas:

1. **Business Context**: propósito, actores, perfiles, objetos y áreas funcionales.
2. **Architectural Context**: principios, objetivos, restricciones y estándares.
3. **System Context**: frontera, usuarios, sistemas, dispositivos e integraciones.
4. **Structural**: capas, bundles, interfaces y decisiones de solución.
5. **Functional**: comportamiento detallado de cada bundle.
6. **Deployment**: entornos, runtimes, topología, instalación y operación.

En esta demo existen ocho instancias procesadas porque hay tres Functional Canvas distintos.

## Pipeline experimental

```mermaid
flowchart LR
    PDF[PDF 7Cs] --> ING[Canvas Ingest]
    ING --> COM[Canvas Object Models]
    COM --> MAP[Skills de mapeo]
    MAP --> CMP[Spec Compose]
    CMP --> AUD[Spec Audit]
    AUD --> SPEC[/speckit.specify]
    SPEC --> CLARIFY[/speckit.clarify]
    CLARIFY --> PLAN[/speckit.plan]
    PLAN --> TASKS[/speckit.tasks]
    TASKS --> CODE[Implementación SDD]
```

### A. Ingesta

`$7cs-canvas-ingest` clasifica las páginas y genera archivos JSON en `com/`. El **Canvas Object Model (COM)** conserva:

- texto literal, incluidos errores ortográficos;
- sección y tipo de canvas;
- coordenadas `bbox`;
- agrupadores y relaciones padre-hijo;
- secciones vacías;
- campos de cabecera ausentes.

El COM es la única fuente de verdad para los mapeos posteriores. Los skills no vuelven al PDF para completar información.

### B. Mapeo por canvas

Cada skill aplica reglas específicas y emite trazas `post-it → destino`:

```text
$7cs-business-context
$7cs-architectural-context
$7cs-system-context
$7cs-structural
$7cs-functional
$7cs-deployment
```

Los resultados quedan en `mapping/`. La separación entre **qué debe hacer el sistema** y **cómo se implementará** es estricta:

- negocio, alcance, entidades, FR, criterios y NFR observables → `spec`;
- frameworks, bases de datos, contenedores, redes y runtimes → `plan`;
- datos faltantes → `[NEEDS CLARIFICATION]`.

### C. Composición y auditoría

`$7cs-spec-compose` ensambla los fragmentos, deduplica entidades y requisitos por trazabilidad y genera los comandos listos para Spec Kit en `composed/`.

`$7cs-spec-audit` vuelve a contar todo desde los COM. No confía en los balances declarados por los mapeos. Sus resultados quedan en `audit/`.

## Métricas científicas

La auditoría usa cuatro métricas:

| Métrica | Definición | Criterio |
|---|---|---|
| **C · Cobertura** | post-its con una traza válida / total de post-its | Debe ser `1,00` |
| **A · Ambigüedad** | dudas abiertas / obligaciones emitidas | Se informa; no invalida por sí sola |
| **T · Contaminación técnica** | menciones de productos o frameworks en `specify` | Debe ser `0` |
| **V · Verificabilidad** | FR con escenario Dado/Cuando/Entonces / total de FR | Objetivo `1,00` |

Resultados actuales de E1:

```text
C = 262/262 = 1,00
A = 94/87  ≈ 1,080
T = 0
V = 50/50 = 1,00
```

La corrida es formalmente **válida** porque alcanza cobertura total y contaminación cero. Sin embargo, no está cerrada para implementación: las 94 dudas muestran que los canvas describen bien **qué existe**, pero dejan abiertos contratos, permisos, esquemas, periodicidades y métricas.

La auditoría también incluye una prueba de falsabilidad: elimina una traza sólo en memoria. La cobertura cae a `261/262 ≈ 0,9962` y el auditor rechaza correctamente la corrida.

## Estructura del repositorio

```text
resources/    PDF original
evidence/     imágenes renderizadas de cada página
com/          modelos intermedios JSON
mapping/      transformación de cada canvas
composed/     prompts finales y anexo de trazabilidad
audit/        métricas, veredicto, clarify y checklist
scripts/      composición y auditoría deterministas
.agents/      skills 7Cs y Spec Kit
.specify/     plantillas y workflows de Spec Kit
```

Los identificadores son estables. Algunos ejemplos:

```text
E1-F9-J-01       post-it de un job Functional
FR-ETL-006      requisito del bundle ETL
NFR-OP-003      requisito operacional
E1-functional-p9.json
```

## Cómo reproducir la demo

No existe un build de aplicación ni dependencias npm. Se requiere Node.js y, para inspección manual, `jq` y `rg`.

```bash
node scripts/compose-e1.mjs
node scripts/audit-e1.mjs
```

El primer comando regenera `composed/`. El segundo genera:

- `audit/E1-audit-report.md`;
- `audit/E1-clarify.audit-input.md`;
- `audit/E1-checklist.input.md`;
- `audit/E1-audit.json`.

Comprobaciones rápidas:

```bash
jq . com/E1-system_context-p3.json
rg -c '^\| E1-' composed/E1-trace-annex.md
```

El segundo comando debe devolver `262`.

## Secuencia de skills usada

```text
$7cs-canvas-ingest "resources/DIS 2026 _ AS _ Equipo 1.pdf"
$7cs-business-context com/E1-business_context-p1.json
$7cs-architectural-context com/E1-architectural_context-p2.json
$7cs-system-context com/E1-system_context-p3.json
$7cs-structural com/E1-structural-p6.json
$7cs-functional com/E1-functional-p7.json
$7cs-functional com/E1-functional-p9.json
$7cs-functional com/E1-functional-p10.json
$7cs-deployment com/E1-deployment-p8.json
$7cs-spec-compose
$7cs-spec-audit
```

Para otra entrega se debe conservar el prefijo, por ejemplo `E2-*`, y generar una traza exactamente una vez por cada post-it.

## Uso con Spec Kit

Los archivos compuestos comienzan con el comando que deben alimentar:

1. `composed/E1-constitution.prompt.md` → `/speckit.constitution`
2. `composed/E1-specify.prompt.md` → `/speckit.specify`
3. `audit/E1-clarify.audit-input.md` → `/speckit.clarify`
4. `audit/E1-checklist.input.md` → `/speckit.checklist`
5. `composed/E1-plan.input.md` → `/speckit.plan`

Después continúan `/speckit.tasks`, `/speckit.analyze` y `/speckit.implement`.

La regla de seguridad metodológica más importante es:

> No ejecutar `/speckit.plan` mientras existan dudas que puedan fijar periodicidades, esquemas, permisos, contratos o métricas.

Planificar antes de aclarar hace que decisiones no declaradas terminen convertidas en arquitectura, tareas y código.

## Hallazgos de la demo

El Structural Canvas declara nueve bundles; Deployment enumera cinco unidades y sólo tres bundles tienen Functional Canvas. El pipeline no inventa los seis detalles funcionales faltantes: conserva la inconsistencia como pregunta.

También se detectaron:

- una diferencia ortográfica en el nombre del portal;
- ausencia de políticas completas de monitoreo, disponibilidad y restauración;
- preguntas pendientes de seguridad y accesibilidad;
- 24 FR de frontera con `debe` en minúscula, una desviación formal que no reduce su verificabilidad.

Estos hallazgos son parte del resultado. Una auditoría útil no oculta la incertidumbre: la cuantifica antes de escribir código.

## Principios para contribuir

- No editar el PDF ni “corregir” silenciosamente textos del COM.
- No inventar atributos, frecuencias, contratos o permisos.
- Mantener tecnología fuera de `specify`.
- Preservar IDs y trazas al modificar mapeos.
- Regenerar composición y auditoría después de cualquier cambio.
- Exigir siempre `C = 1,00`, `T = 0` y una prueba de sanidad exitosa.

Consulta también [AGENTS.md](AGENTS.md) para las convenciones operativas del repositorio.
