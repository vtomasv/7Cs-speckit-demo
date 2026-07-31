# Mapeo 7Cs — Functional Canvas p. 9 — E1

Fuente única: `com/E1-functional-p9.json` (`functional`, página 9, plantilla `7Cs v1.1 June 2026`).

## Fragmento para `/speckit.specify`

### Bundle: Ingestor programado de publicaciones (`ETL`)

El bundle corresponde por coincidencia literal a `SERV-B-02` del censo Structural. Su nombre de producto, componentes, stack y restricciones de despliegue se preservan exclusivamente en el contexto para `/speckit.plan`.

### Key Entities

Los atributos, identificadores, relaciones y reglas de validación quedan abiertos.

- `ENT-ETL-001` — **Publicación**; atributos por confirmar.  
  ← Functional / Data objects / `E1-F9-DO-01` «Publicación (Paper)»
- `ENT-ETL-002` — **Documento de publicación**; atributos por confirmar.  
  ← Functional / Data objects / `E1-F9-DO-02` «Documento publicación»
- `ENT-ETL-003` — **Log de extracción**; atributos y retención por confirmar.  
  ← Functional / Data objects / `E1-F9-DO-03` «Log Extracciones»

### Requisitos funcionales

#### Importación y persistencia

##### `FR-ETL-001` — Lectura de archivos de publicaciones

El sistema DEBE leer archivos CSV desde el almacén de archivos declarado para iniciar su procesamiento.

← Functional / Data imports / `E1-F9-DI-01`; texto literal y mecanismo concreto preservados en `PLAN-ETL-DATA-01`.

Escenario: Dado que existe un archivo CSV accesible, cuando el bundle inicia su lectura, entonces obtiene el contenido o registra un desenlace explícito de fallo.

`[NEEDS CLARIFICATION: definir ubicación, esquema, codificación, límites, validaciones y tratamiento de archivos parciales o inválidos.]`

##### `FR-ETL-002` — Persistencia relacional

El sistema DEBE persistir en el almacén relacional los datos producidos por la ingesta.

← Functional / Data exports / `E1-F9-DE-01`; texto literal y tecnología concreta preservados en `PLAN-ETL-DATA-02`.

Escenario: Dado que la ingesta produce datos aceptables, cuando el bundle solicita su escritura, entonces el almacén confirma un resultado inequívoco de persistencia.

`[NEEDS CLARIFICATION: definir entidades escritas, reglas de inserción o actualización, atomicidad y comportamiento ante conflictos.]`

##### `FR-ETL-003` — Persistencia de archivos

El sistema DEBE escribir en el almacén de archivos los documentos producidos por la ingesta.

← Functional / Data exports / `E1-F9-DE-02`; texto literal y mecanismo concreto preservados en `PLAN-ETL-DATA-03`.

Escenario: Dado que existe un documento aceptable, cuando el bundle solicita su escritura, entonces el almacén confirma el archivo persistido o informa un fallo.

`[NEEDS CLARIFICATION: definir archivos escritos, rutas, nombres, reemplazo, atomicidad y comportamiento ante duplicados.]`

#### Eventos y notificaciones

##### `FR-ETL-004` — Procesamiento del evento declarado

El sistema DEBE recibir y procesar el evento identificado para este bundle.

← Functional / Event handlers / `E1-F9-EH-01` «Trigger event»

Escenario: Dado que se recibe un evento conforme al contrato, cuando el bundle lo procesa, entonces registra un desenlace explícito de aceptación o rechazo.

`[NEEDS CLARIFICATION: definir nombre, emisor, payload, condición de activación y efecto del evento; “Trigger event” no especifica comportamiento observable.]`

##### `FR-ETL-005` — Alerta por fallo de ingesta

El sistema DEBE emitir una notificación de alerta cuando falle la ingesta de datos.

← Functional / Event triggers / `E1-F9-ET-01` «Notificaciones de alerta (si falla la ingesta de datos)»

Escenario: Dado que una ejecución de ingesta termina con fallo, cuando el sistema registra ese desenlace, entonces emite la alerta o registra explícitamente que no pudo entregarla.

`[NEEDS CLARIFICATION: definir destinatarios, canal, contenido, severidad, reintentos y escalamiento.]`

#### Job programado

##### `FR-ETL-006` — Ejecución programada de ingesta

El sistema DEBE ejecutar la ingesta cuando se active el disparador temporal configurado.

← Functional / Jobs / `E1-F9-J-01` «Ejecucion de ingesta programada»

Escenario: Dado que llega el instante configurado, cuando se activa el job, entonces el sistema ejecuta la ingesta y registra un desenlace inequívoco.

`[NEEDS CLARIFICATION: periodicidad no declarada en el canvas; definir además ventana de ejecución, concurrencia, idempotencia y comportamiento ante fallo.]`

### Secciones vacías y coherencia

- `User inputs` y `UI-processing inputs`: vacías y coherentes con un ingestor programado sin interacción humana directa.
- `API inputs`: vacía; el canvas declara lectura de archivos, no recepción mediante API.
- `UI-processing outputs` y `API outputs`: vacías y coherentes con un bundle que persiste resultados en almacenes.
- `User visualizations, reports & notifications`: vacía, pero existe una alerta por fallo; destinatario y canal deben aclararse.
- `Helpers`: vacía; no se declara validación, transformación auxiliar ni regla de calidad separada.

## Contexto para `/speckit.plan` — bundle `ETL`

### Bundle y componente dados

- `PLAN-ETL-BUNDLE-01` — Bundle: «Ingestor Worker (u-papers)», enlazado con `SERV-B-02`.  
  ← Functional / Bundles & components / `E1-F9-BC-01` «Ingestor Worker (u-papers)»
- `PLAN-ETL-COMP-01` — Componente: «Modulo ETL».  
  ← Functional / Bundles & components / `E1-F9-BC-02` «Modulo ETL»

### Mecanismos concretos de datos

- `PLAN-ETL-DATA-01` — «Lectura de archivos CSV desde Storage».  
  ← Functional / Data imports / `E1-F9-DI-01`
- `PLAN-ETL-DATA-02` — «Escritura en BBDD de PostgreSQL».  
  ← Functional / Data exports / `E1-F9-DE-01`
- `PLAN-ETL-DATA-03` — «Escritura en FileSystem».  
  ← Functional / Data exports / `E1-F9-DE-02`

### Stack y restricciones locales

- `STACK-ETL-01` — «Python para procesar datos».  
  ← Functional / Technology stack / `E1-F9-TS-01` «Python para procesar datos»
- `STACK-ETL-02` — «PostgreSQL».  
  ← Functional / Technology stack / `E1-F9-TS-02` «PostgreSQL»
- `CON-ETL-01` — «Uso exclusivo de software gratuito o con licencias académicas».  
  ← Functional / Constraints / `E1-F9-CON-01` «Uso exclusivo de software gratuito o con licencias académicas»
- `CON-ETL-02` — «Ejecutarse On-premise en servidores Linux».  
  ← Functional / Constraints / `E1-F9-CON-02` «Ejecutarse On-premise en servidores Linux»

Las versiones, distribuciones y configuraciones no están declaradas.

## Dudas `[NEEDS CLARIFICATION]`

1. `[NEEDS CLARIFICATION]` Los cinco campos de cabecera (`System`, `Organization`, `Canvas`, `Version` y `Date`) están vacíos; confirmar la identificación y versión del artefacto.
2. `[NEEDS CLARIFICATION]` Definir atributos, identificadores y relaciones de Publicación, Documento de publicación y Log de extracción, incluida la retención del log.
3. `[NEEDS CLARIFICATION]` Definir ubicación, esquema, codificación, límites, validaciones y tratamiento de archivos CSV parciales o inválidos.
4. `[NEEDS CLARIFICATION]` Definir entidades, reglas de inserción/actualización, atomicidad y conflictos de la persistencia relacional.
5. `[NEEDS CLARIFICATION]` Definir archivos, rutas, nombres, reemplazo, atomicidad y duplicados de la persistencia en archivos.
6. `[NEEDS CLARIFICATION]` Precisar nombre, emisor, payload, condición y efecto de «Trigger event», además de su relación con el job de ingesta.
7. `[NEEDS CLARIFICATION]` Definir destinatarios, canal, contenido, severidad, reintentos y escalamiento de la alerta por fallo.
8. `[NEEDS CLARIFICATION: periodicidad no declarada en el canvas]` para «Ejecucion de ingesta programada»; definir ventana, concurrencia, idempotencia y comportamiento ante fallo.
9. `[NEEDS CLARIFICATION]` Confirmar cómo se relacionan el evento, el job, el fallo de ingesta y la alerta; el COM no declara sus aristas.
10. `[NEEDS CLARIFICATION]` Confirmar si `User visualizations, reports & notifications` vacío es compatible con la alerta o si falta una interfaz de notificación.
11. `[NEEDS CLARIFICATION]` Definir versiones y configuraciones obligatorias del stack declarado.
12. `[NEEDS CLARIFICATION]` Faltan Functional identificables para seis bundles del censo Structural: «CMS Web Backoffice UI», «Portal Web Público UI», «PostgreSQL (Local)», «Multimedia Storage (File System)», «Configuracion de reverse proxy mediante Nginx» y «Configuracion de contenedores en Docker».

## Anexo de trazabilidad

| sticky_id | section | target_id |
|---|---|---|
| `E1-F9-BC-01` | Bundles & components | `plan.PLAN-ETL-BUNDLE-01` |
| `E1-F9-BC-02` | Bundles & components | `plan.PLAN-ETL-COMP-01` |
| `E1-F9-DO-01` | Data objects | `spec.entities.ENT-ETL-001` |
| `E1-F9-DO-02` | Data objects | `spec.entities.ENT-ETL-002` |
| `E1-F9-DO-03` | Data objects | `spec.entities.ENT-ETL-003` |
| `E1-F9-TS-01` | Technology stack | `plan.STACK-ETL-01` |
| `E1-F9-TS-02` | Technology stack | `plan.STACK-ETL-02` |
| `E1-F9-CON-01` | Constraints | `plan.CON-ETL-01` |
| `E1-F9-CON-02` | Constraints | `plan.CON-ETL-02` |
| `E1-F9-DI-01` | Data imports | `spec.FR-ETL-001` |
| `E1-F9-DE-01` | Data exports | `spec.FR-ETL-002` |
| `E1-F9-DE-02` | Data exports | `spec.FR-ETL-003` |
| `E1-F9-EH-01` | Event handlers | `spec.FR-ETL-004` |
| `E1-F9-ET-01` | Event triggers | `spec.FR-ETL-005` |
| `E1-F9-J-01` | Jobs | `spec.FR-ETL-006` |

## Balance

- Secciones esperadas verificadas: `16/16`.
- Post-its del canvas: `15`.
- Trazas emitidas: `15`.
- FR emitidos: `6`, todos con prefijo `ETL` y escenario Dado/Cuando/Entonces.
- Entidades: `3`, todas con atributos por confirmar.
- Stack declarado: `2` tecnologías, sólo en contexto para `plan`.
- Restricciones locales: `2`, sólo en contexto para `plan`.
- Secciones vacías: `7`; seis coherentes con el ingestor y una interfaz de notificación pendiente de confirmación.
- Dudas `[NEEDS CLARIFICATION]`: `12`.
- Censo Structural de la entrega: `9` bundles; `3` Functional identificables y `6` faltantes.
