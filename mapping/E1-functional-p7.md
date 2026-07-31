# Mapeo 7Cs — Functional Canvas p. 7 — E1

Fuente única: `com/E1-functional-p7.json` (`functional`, página 7, plantilla `7Cs v1.1 June 2026`).

## Fragmento para `/speckit.specify`

### Bundle: Integración consumidora de APIs (`INT`)

El bundle corresponde por coincidencia literal a `SERV-B-01` del censo Structural. Sus componentes concretos y nombres de productos se preservan exclusivamente en el contexto para `/speckit.plan`.

### Key Entities

Los atributos, identificadores, relaciones y reglas de validación de todas las entidades quedan abiertos.

- `ENT-INT-001` — **Proyecto**; atributos por confirmar.  
  ← Functional / Data objects / `E1-F7-DO-01` «Proyecto»
- `ENT-INT-002` — **Noticia**; atributos por confirmar.  
  ← Functional / Data objects / `E1-F7-DO-02` «Noticia»
- `ENT-INT-003` — **Evento**; atributos por confirmar.  
  ← Functional / Data objects / `E1-F7-DO-03` «Evento»
- `ENT-INT-004` — **Información académica institucional**; atributos por confirmar.  
  ← Functional / Data objects / `E1-F7-DO-04`; el texto literal y el nombre concreto se preservan en `PLAN-INT-ENT-01`.

### Requisitos funcionales

#### Solicitudes por contrato

##### `FR-INT-001` — Consulta a la fuente externa de noticias

El sistema DEBE recibir y procesar por contrato una solicitud de consulta destinada a la fuente externa de noticias.

← Functional / API inputs / `E1-F7-APII-01`; texto literal y contraparte concreta preservados en `PLAN-INT-SRC-01`.

Escenario: Dado que existe una solicitud de consulta válida, cuando el bundle la recibe, entonces inicia la consulta a la fuente de noticias y deja un resultado de procesamiento inequívoco.

`[NEEDS CLARIFICATION: definir iniciador, contrato, datos de entrada, autorización y resultado observable de la solicitud.]`

##### `FR-INT-002` — Consulta a la fuente externa de proyectos

El sistema DEBE recibir y procesar por contrato una solicitud de consulta destinada a la fuente externa de proyectos.

← Functional / API inputs / `E1-F7-APII-02`; texto literal y contraparte concreta preservados en `PLAN-INT-SRC-02`.

Escenario: Dado que existe una solicitud de consulta válida, cuando el bundle la recibe, entonces inicia la consulta a la fuente de proyectos y deja un resultado de procesamiento inequívoco.

`[NEEDS CLARIFICATION: definir iniciador, contrato, datos de entrada, autorización y resultado observable de la solicitud.]`

##### `FR-INT-003` — Consulta a la fuente institucional académica

El sistema DEBE recibir y procesar por contrato una solicitud de consulta destinada a la fuente institucional académica.

← Functional / API inputs / `E1-F7-APII-03`; texto literal y contraparte concreta preservados en `PLAN-INT-SRC-03`.

Escenario: Dado que existe una solicitud de consulta válida, cuando el bundle la recibe, entonces inicia la consulta a la fuente académica y deja un resultado de procesamiento inequívoco.

`[NEEDS CLARIFICATION: definir iniciador, contrato, datos de entrada, autorización y resultado observable de la solicitud.]`

#### Importación y persistencia

##### `FR-INT-004` — Lectura desde persistencia

El sistema DEBE leer desde el almacén relacional los datos requeridos por el bundle.

← Functional / Data imports / `E1-F7-DI-01`; texto literal y tecnología concreta preservados en `PLAN-INT-DATA-01`.

Escenario: Dados datos existentes y una solicitud de lectura válida, cuando el bundle consulta el almacén, entonces obtiene el resultado de lectura o un desenlace explícito de ausencia.

`[NEEDS CLARIFICATION: definir entidades leídas, criterios de selección y comportamiento ante ausencia o error.]`

##### `FR-INT-005` — Persistencia en almacén relacional

El sistema DEBE persistir en el almacén relacional los datos producidos por el bundle.

← Functional / Data exports / `E1-F7-DE-01`; texto literal y tecnología concreta preservados en `PLAN-INT-DATA-02`.

Escenario: Dados datos aceptables producidos por el bundle, cuando solicita su persistencia, entonces el almacén confirma un resultado inequívoco de escritura.

`[NEEDS CLARIFICATION: definir entidades escritas, reglas de actualización, atomicidad y comportamiento ante conflicto o error.]`

#### Calidad y transformación de datos

##### `FR-INT-006` — Validación posterior a la ingesta

El sistema DEBE validar el contenido posterior a la ingesta contra el esquema declarado antes de tratarlo como íntegro.

← Functional / Helpers / `E1-F7-H-01`; texto literal y mecanismo concreto preservados en `PLAN-INT-HELP-01`.

Escenario: Dado contenido recién ingerido y un esquema aplicable, cuando el sistema lo valida, entonces registra un resultado válido o inválido sin aceptar silenciosamente contenido que no cumple el esquema.

`[NEEDS CLARIFICATION: definir esquemas, versiones, severidades y tratamiento de contenido inválido.]`

##### `FR-INT-007` — Cálculo de indicadores

El sistema DEBE calcular los indicadores declarados a partir de los datos disponibles.

← Functional / Helpers / `E1-F7-H-02` «Cálculo de indicadores»

Escenario: Dados datos de entrada suficientes y una definición de indicador, cuando el sistema ejecuta el cálculo, entonces produce un resultado reproducible o informa que los datos son insuficientes.

`[NEEDS CLARIFICATION: definir indicadores, fórmulas, entradas, precisión y resultado esperado.]`

#### Jobs

##### `FR-INT-008` — Consulta automatizada de noticias

El sistema DEBE ejecutar automáticamente la consulta a la fuente externa de noticias cuando se active el disparador temporal configurado.

← Functional / Jobs / `E1-F7-J-01`; texto literal y contraparte concreta preservados en `PLAN-INT-JOB-01`.

Escenario: Dado que llega el instante configurado, cuando se activa el job, entonces el sistema ejecuta la consulta y registra un desenlace inequívoco.

`[NEEDS CLARIFICATION: periodicidad no declarada en el canvas; definir además ventana de ejecución y comportamiento ante fallo.]`

##### `FR-INT-009` — Consulta automatizada de proyectos

El sistema DEBE ejecutar automáticamente la consulta a la fuente externa de proyectos cuando se active el disparador temporal configurado.

← Functional / Jobs / `E1-F7-J-02`; texto literal y contraparte concreta preservados en `PLAN-INT-JOB-02`.

Escenario: Dado que llega el instante configurado, cuando se activa el job, entonces el sistema ejecuta la consulta y registra un desenlace inequívoco.

`[NEEDS CLARIFICATION: periodicidad no declarada en el canvas; definir además ventana de ejecución y comportamiento ante fallo.]`

##### `FR-INT-010` — Consulta automatizada de información académica

El sistema DEBE ejecutar automáticamente la consulta a la fuente institucional académica cuando se active el disparador temporal configurado.

← Functional / Jobs / `E1-F7-J-03`; texto literal y contraparte concreta preservados en `PLAN-INT-JOB-03`.

Escenario: Dado que llega el instante configurado, cuando se activa el job, entonces el sistema ejecuta la consulta y registra un desenlace inequívoco.

`[NEEDS CLARIFICATION: periodicidad no declarada en el canvas; definir además ventana de ejecución y comportamiento ante fallo.]`

### Secciones vacías y coherencia

- `User inputs` y `UI-processing inputs`: vacías y coherentes con un bundle sin interacción humana directa.
- `User visualizations, reports & notifications` y `UI-processing outputs`: vacías y coherentes con un bundle que no declara interfaz de usuario.
- `API outputs`: vacía; no se declara un contrato de salida API. La dirección y el resultado de las solicitudes requieren aclaración.
- `Event handlers` y `Event triggers`: vacías; no se declara comportamiento reactivo, incluso ante los fallos mencionados en la restricción local.

## Contexto para `/speckit.plan` — bundle `INT`

### Bundle y componentes dados

- `PLAN-INT-BUNDLE-01` — Bundle: «Integracion consumidor de APIs», enlazado con `SERV-B-01`.  
  ← Functional / Bundles & components / `E1-F7-BC-01` «Integracion consumidor de APIs»
- `PLAN-INT-COMP-01` — Componente: «Cliente API u-noticias y u-proyectos».  
  ← Functional / Bundles & components / `E1-F7-BC-02` «Cliente API u-noticias y u-proyectos»
- `PLAN-INT-COMP-02` — Componente: «Cliente API u-campus».  
  ← Functional / Bundles & components / `E1-F7-BC-03` «Cliente API u-campus»
- `PLAN-INT-COMP-03` — Componente: «Normalizador de contenido JSON».  
  ← Functional / Bundles & components / `E1-F7-BC-04` «Normalizador de contenido JSON»

### Contrapartes y mecanismos concretos

- `PLAN-INT-SRC-01` — «Query request a u-noticias». Corresponde a la contraparte anonimizada como fuente externa de noticias.  
  ← Functional / API inputs / `E1-F7-APII-01`
- `PLAN-INT-SRC-02` — «Query request a u-proyectos». Corresponde a la contraparte anonimizada como fuente externa de proyectos.  
  ← Functional / API inputs / `E1-F7-APII-02`
- `PLAN-INT-SRC-03` — «Query request a u-campus». Corresponde a la contraparte anonimizada como fuente institucional académica.  
  ← Functional / API inputs / `E1-F7-APII-03`
- `PLAN-INT-ENT-01` — Entidad literal: «Información de Ucampus».  
  ← Functional / Data objects / `E1-F7-DO-04`
- `PLAN-INT-DATA-01` — «Lectura en BD PostgreSQL».  
  ← Functional / Data imports / `E1-F7-DI-01`
- `PLAN-INT-DATA-02` — «Escritura en BD PostgreSQL».  
  ← Functional / Data exports / `E1-F7-DE-01`
- `PLAN-INT-HELP-01` — «Data-Validator: Librería de validación de esquemas (JSON Schema) para asegurar la integridad post-ingesta».  
  ← Functional / Helpers / `E1-F7-H-01`
- `PLAN-INT-JOB-01` — «Consulta automatizada a API u-noticias».  
  ← Functional / Jobs / `E1-F7-J-01`
- `PLAN-INT-JOB-02` — «Consulta automatizada a API u-proyectos».  
  ← Functional / Jobs / `E1-F7-J-02`
- `PLAN-INT-JOB-03` — «Consulta automatizada a API u-campus».  
  ← Functional / Jobs / `E1-F7-J-03`

### Stack y restricciones locales

- `STACK-INT-01` — Stack declarado: «Java Spring». Es contexto técnico dado, no contenido de `spec.md`.  
  ← Functional / Technology stack / `E1-F7-TS-01` «Java Spring»
- `CON-INT-01` — «Despliegue on-premise con software gratuito». Es consistente con `R-ACC-02`, `R-ACC-03` y `P-ACC-07`.  
  ← Functional / Constraints / `E1-F7-CON-01` «Despliegue on-premise con software gratuito»
- `CON-INT-02` — «Tolerancia a fallos en caso de APIs caidas». El COM no define umbral, recuperación, reintentos ni degradación.  
  ← Functional / Constraints / `E1-F7-CON-02` «Tolerancia a fallos en caso de APIs caidas»

## Dudas `[NEEDS CLARIFICATION]`

1. `[NEEDS CLARIFICATION]` Los cinco campos de cabecera (`System`, `Organization`, `Canvas`, `Version` y `Date`) están vacíos; confirmar la identificación y versión del artefacto.
2. `[NEEDS CLARIFICATION]` Confirmar la dirección de las tres entradas «Query request»: quién inicia cada solicitud, qué recibe el bundle y qué salida observable produce.
3. `[NEEDS CLARIFICATION]` Definir contratos, datos, autenticación, paginación y errores de las tres fuentes externas.
4. `[NEEDS CLARIFICATION]` Definir atributos, identificadores y relaciones de Proyecto, Noticia, Evento e Información académica institucional.
5. `[NEEDS CLARIFICATION]` Definir entidades, criterios, atomicidad y comportamiento de error para lectura y escritura en persistencia.
6. `[NEEDS CLARIFICATION]` Definir esquemas, versiones y tratamiento de contenido inválido para la validación posterior a la ingesta.
7. `[NEEDS CLARIFICATION]` Definir indicadores, fórmulas, entradas, precisión y resultados esperados.
8. `[NEEDS CLARIFICATION: periodicidad no declarada en el canvas]` para «Consulta automatizada a API u-noticias»; definir además ventana y comportamiento ante fallo.
9. `[NEEDS CLARIFICATION: periodicidad no declarada en el canvas]` para «Consulta automatizada a API u-proyectos»; definir además ventana y comportamiento ante fallo.
10. `[NEEDS CLARIFICATION: periodicidad no declarada en el canvas]` para «Consulta automatizada a API u-campus»; definir además ventana y comportamiento ante fallo.
11. `[NEEDS CLARIFICATION]` Definir el nivel de tolerancia a fallos, reintentos, recuperación, degradación y evidencia verificable ante APIs caídas.
12. `[NEEDS CLARIFICATION]` Confirmar si la ausencia de `API outputs` es intencional y dónde se declara el resultado de cada solicitud.
13. `[NEEDS CLARIFICATION]` Confirmar cómo se activan los jobs y cómo se notifican o tratan sus fallos, dado que `Event handlers` y `Event triggers` están vacíos.
14. `[NEEDS CLARIFICATION]` Faltan Functional identificables para seis bundles del censo Structural: «CMS Web Backoffice UI», «Portal Web Público UI», «PostgreSQL (Local)», «Multimedia Storage (File System)», «Configuracion de reverse proxy mediante Nginx» y «Configuracion de contenedores en Docker».

## Anexo de trazabilidad

| sticky_id | section | target_id |
|---|---|---|
| `E1-F7-BC-01` | Bundles & components | `plan.PLAN-INT-BUNDLE-01` |
| `E1-F7-BC-02` | Bundles & components | `plan.PLAN-INT-COMP-01` |
| `E1-F7-BC-03` | Bundles & components | `plan.PLAN-INT-COMP-02` |
| `E1-F7-BC-04` | Bundles & components | `plan.PLAN-INT-COMP-03` |
| `E1-F7-APII-01` | API inputs | `spec.FR-INT-001` |
| `E1-F7-APII-02` | API inputs | `spec.FR-INT-002` |
| `E1-F7-APII-03` | API inputs | `spec.FR-INT-003` |
| `E1-F7-DO-01` | Data objects | `spec.entities.ENT-INT-001` |
| `E1-F7-DO-02` | Data objects | `spec.entities.ENT-INT-002` |
| `E1-F7-DO-03` | Data objects | `spec.entities.ENT-INT-003` |
| `E1-F7-DO-04` | Data objects | `spec.entities.ENT-INT-004` |
| `E1-F7-TS-01` | Technology stack | `plan.STACK-INT-01` |
| `E1-F7-CON-01` | Constraints | `plan.CON-INT-01` |
| `E1-F7-CON-02` | Constraints | `plan.CON-INT-02` |
| `E1-F7-DI-01` | Data imports | `spec.FR-INT-004` |
| `E1-F7-DE-01` | Data exports | `spec.FR-INT-005` |
| `E1-F7-H-01` | Helpers | `spec.FR-INT-006` |
| `E1-F7-H-02` | Helpers | `spec.FR-INT-007` |
| `E1-F7-J-01` | Jobs | `spec.FR-INT-008` |
| `E1-F7-J-02` | Jobs | `spec.FR-INT-009` |
| `E1-F7-J-03` | Jobs | `spec.FR-INT-010` |

## Balance

- Secciones esperadas verificadas: `16/16`.
- Post-its del canvas: `21`.
- Trazas emitidas: `21`.
- FR emitidos: `10`, todos con prefijo `INT` y escenario Dado/Cuando/Entonces.
- Entidades: `4`, todas con atributos por confirmar.
- Stack declarado: `1` tecnología, sólo en contexto para `plan`.
- Restricciones locales: `2`, sólo en contexto para `plan`.
- Secciones vacías: `7`; cuatro de interfaz humana coherentes, una de salida API y dos de eventos pendientes de confirmación.
- Dudas `[NEEDS CLARIFICATION]`: `14`.
- Censo Structural de la entrega: `9` bundles; `3` Functional identificables y `6` faltantes.
