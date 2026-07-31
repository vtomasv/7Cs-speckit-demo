# Mapeo 7Cs — Functional Canvas p. 10 — E1

Fuente única: `com/E1-functional-p10.json` (`functional`, página 10, plantilla `7Cs v1.1 June 2026`).

## Fragmento para `/speckit.specify`

### Bundle: Gestor de contenidos y servicios (`CMS`)

El bundle corresponde por coincidencia literal a `SERV-B-03` del censo Structural. Sus componentes, nombres concretos de interfaces, stack y restricciones locales se preservan en el contexto para `/speckit.plan`.

### Key Entities

Los atributos, identificadores, relaciones y reglas de validación quedan abiertos.

- `ENT-CMS-001` — **Token de persona/sesión**; atributos por confirmar.  
  ← Functional / Data objects / `E1-F10-DO-01` «Token_Persona (Sesion)»
- `ENT-CMS-002` — **Proyecto**; atributos por confirmar.  
  ← Functional / Data objects / `E1-F10-DO-02` «Proyecto»
- `ENT-CMS-003` — **Noticia/Evento**; confirmar si corresponde a una entidad compuesta o a dos entidades.  
  ← Functional / Data objects / `E1-F10-DO-03` «Noticia / Evento»
- `ENT-CMS-004` — **Indicador**; atributos por confirmar.  
  ← Functional / Data objects / `E1-F10-DO-04` «Indicador»
- `ENT-CMS-005` — **Archivo multimedia**; atributos por confirmar.  
  ← Functional / Data objects / `E1-F10-DO-05` «Archivos Multimedia»
- `ENT-CMS-006` — **Entrada de blog**; atributos por confirmar.  
  ← Functional / Data objects / `E1-F10-DO-06` «Entrada Blog»
- `ENT-CMS-007` — **Comentario de blog**; atributos por confirmar.  
  ← Functional / Data objects / `E1-F10-DO-07` «Comentario Blog»

### Requisitos funcionales

#### Entradas por contrato

##### `FR-CMS-001` — Callback de identidad institucional

El sistema DEBE recibir y validar el callback del proveedor institucional de identidad después de la redirección de acceso.

← Functional / API inputs / `E1-F10-APII-01`; texto literal y contraparte concreta preservados en `PLAN-CMS-API-01`.

Escenario: Dado que el proveedor devuelve un callback válido, cuando el bundle lo recibe, entonces procesa el resultado de validación y deja un desenlace de autenticación inequívoco.

`[NEEDS CLARIFICATION: definir contrato, correlación con la redirección, expiración, creación de sesión y respuestas ante rechazo o error.]`

##### `FR-CMS-002` — Comandos desde la interfaz administrativa

El sistema DEBE recibir por contrato comandos procedentes de la interfaz administrativa.

← Functional / API inputs / `E1-F10-APII-02`; texto literal y nombre concreto preservados en `PLAN-CMS-API-02`.

Escenario: Dado que llega un comando autorizado y válido, cuando el bundle lo recibe, entonces ejecuta la operación correspondiente y devuelve un desenlace explícito.

`[NEEDS CLARIFICATION: definir operaciones, payloads, autorización, idempotencia y catálogo de errores.]`

##### `FR-CMS-003` — Comandos desde la interfaz pública

El sistema DEBE recibir por contrato comandos procedentes de la interfaz pública.

← Functional / API inputs / `E1-F10-APII-03`; texto literal y nombre concreto preservados en `PLAN-CMS-API-03`.

Escenario: Dado que llega un comando autorizado y válido, cuando el bundle lo recibe, entonces ejecuta la operación correspondiente y devuelve un desenlace explícito.

`[NEEDS CLARIFICATION: definir operaciones públicas permitidas, payloads, autorización, idempotencia y catálogo de errores.]`

#### Salidas por contrato

##### `FR-CMS-004` — Consultas

El sistema DEBE exponer «Query endpoints» para consultar la información admitida por el bundle.

← Functional / API outputs / `E1-F10-APIO-01` «Query endpoints»

Escenario: Dado que un consumidor autorizado envía una consulta válida, cuando el endpoint la procesa, entonces devuelve el resultado o una respuesta explícita de ausencia.

`[NEEDS CLARIFICATION: definir consultas, filtros, paginación, autorización, formato de respuesta y errores.]`

#### Importación y persistencia

##### `FR-CMS-005` — Lectura de persistencia

El sistema DEBE realizar la «Lectura de BBDD» requerida por las operaciones del bundle.

← Functional / Data imports / `E1-F10-DI-01` «Lectura de BBDD»

Escenario: Dado que existen datos y una solicitud de lectura válida, cuando el bundle consulta la persistencia, entonces obtiene los datos o un desenlace explícito de ausencia.

`[NEEDS CLARIFICATION: definir entidades leídas, criterios de selección y comportamiento ante error.]`

##### `FR-CMS-006` — Escritura mediante repositorio

El sistema DEBE persistir mediante el repositorio los datos producidos por las operaciones del bundle.

← Functional / Data exports / `E1-F10-DE-01` «Write repository en BD»

Escenario: Dado que una operación produce datos aceptables, cuando el bundle solicita su escritura, entonces el repositorio confirma un resultado inequívoco.

`[NEEDS CLARIFICATION: definir entidades escritas, reglas de inserción/actualización, atomicidad y conflictos.]`

#### Eventos y notificaciones

##### `FR-CMS-007` — Solicitudes de sesión

El sistema DEBE procesar los eventos de solicitudes de sesión.

← Functional / Event handlers / `E1-F10-EH-01` «Eventos de solicitudes de sesion»

Escenario: Dado que se recibe una solicitud de sesión conforme al contrato, cuando el bundle procesa el evento, entonces registra un desenlace explícito de aceptación o rechazo.

`[NEEDS CLARIFICATION: definir emisor, payload, correlación con el callback y efecto sobre la sesión.]`

##### `FR-CMS-008` — Notificaciones al usuario

El sistema DEBE activar una notificación al usuario cuando ocurra la condición configurada.

← Functional / Event triggers / `E1-F10-ET-01` «Trigger de notificaciones al usuario»

Escenario: Dado que ocurre una condición notificable, cuando se activa el trigger, entonces el sistema entrega la notificación o registra explícitamente el fallo de entrega.

`[NEEDS CLARIFICATION: definir condiciones, destinatarios, canal, contenido, severidad y reintentos.]`

#### Jobs

##### `FR-CMS-009` — Respaldo automático

El sistema DEBE respaldar automáticamente el almacén relacional y los archivos multimedia cuando se active el disparador temporal configurado.

← Functional / Jobs / `E1-F10-J-01`; texto literal y tecnologías concretas preservados en `PLAN-CMS-JOB-01`.

Escenario: Dado que llega el instante configurado, cuando se activa el job, entonces el sistema respalda ambos almacenes y registra un desenlace verificable.

`[NEEDS CLARIFICATION: periodicidad no declarada en el canvas; definir ventana, consistencia entre almacenes, retención, restauración y comportamiento ante fallo.]`

##### `FR-CMS-010` — Compresión de imágenes

El sistema DEBE comprimir una imagen cuando sea subida.

← Functional / Jobs / `E1-F10-J-02` «Compresion de imagenes al subirse»

Escenario: Dado que se sube una imagen aceptable, cuando se activa el job, entonces el sistema produce el resultado comprimido o registra explícitamente el fallo.

`[NEEDS CLARIFICATION: periodicidad no declarada en el canvas; confirmar si el job se activa sólo por el evento de subida o también por programación, y definir formatos, calidad, límites y conservación del original.]`

### Secciones vacías y coherencia

- `User inputs` y `UI-processing inputs`: vacías y coherentes con un servicio API sin interacción humana directa.
- `UI-processing outputs`: vacía y coherente con un servicio que entrega resultados mediante endpoints.
- `User visualizations, reports & notifications`: vacía, aunque existe un trigger de notificación; canal y destinatarios requieren aclaración.
- `Helpers`: vacía; no se declaran reglas auxiliares separadas.

## Contexto para `/speckit.plan` — bundle `CMS`

### Bundle y componentes dados

- `PLAN-CMS-BUNDLE-01` — Bundle: «CMS Gestor API», enlazado con `SERV-B-03`.  
  ← Functional / Bundles & components / `E1-F10-BC-01` «CMS Gestor API»
- `PLAN-CMS-COMP-01` — Componente: «Gestor de autenticacion».  
  ← Functional / Bundles & components / `E1-F10-BC-02` «Gestor de autenticacion»
- `PLAN-CMS-COMP-02` — Componente: «Gestor de blogs y comentarios».  
  ← Functional / Bundles & components / `E1-F10-BC-03` «Gestor de blogs y comentarios»
- `PLAN-CMS-COMP-03` — Componente: «Gestor Multimedia».  
  ← Functional / Bundles & components / `E1-F10-BC-04` «Gestor Multimedia»

### Interfaces y mecanismos concretos

- `PLAN-CMS-API-01` — «Callback de validación (Redirección) desde UPasaporte».  
  ← Functional / API inputs / `E1-F10-APII-01`
- `PLAN-CMS-API-02` — «Command endpoints para Backoffice».  
  ← Functional / API inputs / `E1-F10-APII-02`
- `PLAN-CMS-API-03` — «Command endpoints para Portal Web Público UI».  
  ← Functional / API inputs / `E1-F10-APII-03`
- `PLAN-CMS-JOB-01` — «Respaldo automático de la base de datos PostgreSQL y archivos en Multimedia Storage».  
  ← Functional / Jobs / `E1-F10-J-01`

### Stack y restricciones locales

- `STACK-CMS-01` — «Python».  
  ← Functional / Technology stack / `E1-F10-TS-01` «Python»
- `STACK-CMS-02` — «Node.js».  
  ← Functional / Technology stack / `E1-F10-TS-02` «Node.js»
- `STACK-CMS-03` — «PostgreSQL».  
  ← Functional / Technology stack / `E1-F10-TS-03` «PostgreSQL»
- `CON-CMS-01` — «Uso exclusivo de software gratuito o con licencias académicas».  
  ← Functional / Constraints / `E1-F10-CON-01` «Uso exclusivo de software gratuito o con licencias académicas»
- `CON-CMS-02` — «Integración obligatoria con UPasaporte (SSO institucional)».  
  ← Functional / Constraints / `E1-F10-CON-02` «Integración obligatoria con UPasaporte (SSO institucional)»
- `CON-CMS-03` — «Despliegue sobre infraestructura propia».  
  ← Functional / Constraints / `E1-F10-CON-03` «Despliegue sobre infraestructura propia»

Las versiones, configuraciones y reparto de responsabilidades entre las tecnologías no están declarados.

## Dudas `[NEEDS CLARIFICATION]`

1. `[NEEDS CLARIFICATION]` Los cinco campos de cabecera (`System`, `Organization`, `Canvas`, `Version` y `Date`) están vacíos; confirmar la identificación y versión del artefacto.
2. `[NEEDS CLARIFICATION]` Definir atributos, identificadores y relaciones de las siete entidades; confirmar si «Noticia / Evento» es una entidad compuesta o dos entidades.
3. `[NEEDS CLARIFICATION]` Definir contrato del callback, correlación con la redirección, expiración, creación de sesión y respuestas de rechazo/error.
4. `[NEEDS CLARIFICATION]` Definir operaciones, payloads, autorización, idempotencia y errores de los comandos administrativos.
5. `[NEEDS CLARIFICATION]` Definir operaciones, payloads, autorización, idempotencia y errores de los comandos públicos.
6. `[NEEDS CLARIFICATION]` Definir consultas, filtros, paginación, autorización, respuestas y errores de los query endpoints.
7. `[NEEDS CLARIFICATION]` Definir entidades, criterios, atomicidad y comportamiento de error para lectura y escritura en persistencia.
8. `[NEEDS CLARIFICATION]` Definir emisor, payload y relación de los eventos de solicitudes de sesión con el callback institucional.
9. `[NEEDS CLARIFICATION]` Definir condiciones, destinatarios, canal, contenido, severidad y reintentos de las notificaciones.
10. `[NEEDS CLARIFICATION: periodicidad no declarada en el canvas]` para el respaldo automático; definir ventana, consistencia, retención, restauración y fallos.
11. `[NEEDS CLARIFICATION: periodicidad no declarada en el canvas]` para la compresión; confirmar si se activa exclusivamente por subida o también por programación y definir formatos, calidad, límites y conservación del original.
12. `[NEEDS CLARIFICATION]` Confirmar si `User visualizations, reports & notifications` vacío es compatible con el trigger de notificaciones o si falta una interfaz.
13. `[NEEDS CLARIFICATION]` Definir perfiles obligados a usar identidad institucional y comportamiento ante indisponibilidad.
14. `[NEEDS CLARIFICATION]` Definir versiones, configuraciones y reparto de responsabilidades del stack.
15. `[NEEDS CLARIFICATION]` Faltan Functional identificables para seis bundles del censo Structural: «CMS Web Backoffice UI», «Portal Web Público UI», «PostgreSQL (Local)», «Multimedia Storage (File System)», «Configuracion de reverse proxy mediante Nginx» y «Configuracion de contenedores en Docker».

## Anexo de trazabilidad

| sticky_id | section | target_id |
|---|---|---|
| `E1-F10-BC-01` | Bundles & components | `plan.PLAN-CMS-BUNDLE-01` |
| `E1-F10-BC-02` | Bundles & components | `plan.PLAN-CMS-COMP-01` |
| `E1-F10-BC-03` | Bundles & components | `plan.PLAN-CMS-COMP-02` |
| `E1-F10-BC-04` | Bundles & components | `plan.PLAN-CMS-COMP-03` |
| `E1-F10-APII-01` | API inputs | `spec.FR-CMS-001` |
| `E1-F10-APII-02` | API inputs | `spec.FR-CMS-002` |
| `E1-F10-APII-03` | API inputs | `spec.FR-CMS-003` |
| `E1-F10-DO-01` | Data objects | `spec.entities.ENT-CMS-001` |
| `E1-F10-DO-02` | Data objects | `spec.entities.ENT-CMS-002` |
| `E1-F10-DO-03` | Data objects | `spec.entities.ENT-CMS-003` |
| `E1-F10-DO-04` | Data objects | `spec.entities.ENT-CMS-004` |
| `E1-F10-DO-05` | Data objects | `spec.entities.ENT-CMS-005` |
| `E1-F10-DO-06` | Data objects | `spec.entities.ENT-CMS-006` |
| `E1-F10-DO-07` | Data objects | `spec.entities.ENT-CMS-007` |
| `E1-F10-APIO-01` | API outputs | `spec.FR-CMS-004` |
| `E1-F10-TS-01` | Technology stack | `plan.STACK-CMS-01` |
| `E1-F10-TS-02` | Technology stack | `plan.STACK-CMS-02` |
| `E1-F10-TS-03` | Technology stack | `plan.STACK-CMS-03` |
| `E1-F10-CON-01` | Constraints | `plan.CON-CMS-01` |
| `E1-F10-CON-02` | Constraints | `plan.CON-CMS-02` |
| `E1-F10-CON-03` | Constraints | `plan.CON-CMS-03` |
| `E1-F10-DI-01` | Data imports | `spec.FR-CMS-005` |
| `E1-F10-DE-01` | Data exports | `spec.FR-CMS-006` |
| `E1-F10-EH-01` | Event handlers | `spec.FR-CMS-007` |
| `E1-F10-ET-01` | Event triggers | `spec.FR-CMS-008` |
| `E1-F10-J-01` | Jobs | `spec.FR-CMS-009` |
| `E1-F10-J-02` | Jobs | `spec.FR-CMS-010` |

## Balance

- Secciones esperadas verificadas: `16/16`.
- Post-its del canvas: `27`.
- Trazas emitidas: `27`.
- FR emitidos: `10`, todos con prefijo `CMS` y escenario Dado/Cuando/Entonces.
- Entidades: `7`, todas con atributos por confirmar.
- Stack declarado: `3` tecnologías, sólo en contexto para `plan`.
- Restricciones locales: `3`, sólo en contexto para `plan`.
- Secciones vacías: `5`; cuatro coherentes con un servicio API y una interfaz de notificación pendiente de confirmación.
- Dudas `[NEEDS CLARIFICATION]`: `15`.
- Functional disponibles de la entrega mapeados: `3/3`.
- Censo Structural de la entrega: `9` bundles; `3` Functional identificables y `6` faltantes.
