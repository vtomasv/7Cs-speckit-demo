# Mapeo de System Context — Equipo 1

Fuente exclusiva: `com/E1-system_context-p3.json` (`system_context`, página 3, plantilla `v1.1`). Este artefacto normaliza el COM sin reabrir ni reinterpretar el PDF.

## Fragmento para `/speckit.specify`

### Alcance

El sistema permite que actores de la comunidad, académicos, el área de comunicaciones y el comité editorial aporten información mediante interfaces de entrada. También publica información para la comunidad, académicos y colaboradores, futuros estudiantes, prensa/medios, industria y empresas.

Actores de origen declarados:

- `ACT-O-01`: «Comunidad».
- `ACT-O-02`: «Académicos».
- `ACT-O-03`: «Área de comunicaciones».
- `ACT-O-04`: «Comite editorial».
- `ACT-O-05`: «Futuros estudiantes», dentro del agrupador «Público general».
- `ACT-O-06`: «Prensa / Medios», dentro del agrupador «Público general».
- `ACT-O-07`: «Industria y Empresas», dentro del agrupador «Público general».

Actores de destino declarados:

- `ACT-D-01`: «Comunidad».
- `ACT-D-02`: «Academicos y colaboradores».
- `ACT-D-03`: «Futuros estudiantes», dentro del agrupador «Público general».
- `ACT-D-04`: «Prensa / Medios», dentro del agrupador «Público general».
- `ACT-D-05`: «Industria y Empresas», dentro del agrupador «Público general».

Dispositivos de origen declarados:

- `DEV-O-01`: «Computadores area comunicaciones».
- `DEV-O-02`: «Computadores academicos».

Dispositivos de destino declarados:

- `DEV-D-01`: «Computadores personales».
- `DEV-D-02`: «dispositivos moviles».
- `DEV-D-03`: «Monitores en pasillos».

Consumidores sistémicos declarados:

- `CONS-01`: «Monitores de los pasillos».
- `CONS-02`: «Navegadores web».

La asignación exacta entre cada actor, interfaz de entrada, interfaz de salida y destinatario no está expresada por el COM y queda pendiente de aclaración.

### Integraciones

| ID | Contraparte anonimizada | Dirección respecto del sistema | Interfaz o mecanismo declarado |
|---|---|---|---|
| `INT-SCC-01` | Fuente externa de noticias | Entrada: la fuente → el sistema | API de lectura y consulta asíncrona |
| `INT-SCC-02` | Fuente institucional académica | Entrada: la fuente → el sistema | API de lectura y consulta asíncrona |
| `INT-SCC-03` | Fuente externa de proyectos | Entrada: la fuente → el sistema | API y consulta asíncrona |
| `INT-SCC-04` | Proveedor institucional de identidad | Salida: el sistema → el proveedor mediante redirección; entrada: el proveedor → el sistema mediante callback | Redirección de inicio de sesión y endpoint de callback |
| `INT-SCC-05` | Fuente externa de publicaciones | Entrada: la fuente → el sistema | Carga manual de archivos CSV |

No se declara una contraparte de repositorio de origen ni de destino, aunque sí se declaran interfaces de subida y publicación de archivos. Esta integración queda registrada como incompleta y no se le asigna una contraparte inventada.

### Requisitos funcionales de frontera

#### Entradas de usuarios

- `FR-SCC-001` — El sistema debe permitir ingresar una «Galeria de fotos».
  - ← SCC / User data input interfaces / `E1-UDII-01` «Galeria de fotos»
  - Escenario: Dado un actor autorizado y archivos aceptables, cuando confirma la carga, entonces el sistema registra la galería e informa el resultado.
  - Error: dado un archivo no aceptable o una carga fallida, cuando el sistema intenta procesarlo, entonces rechaza la operación e informa la causa sin registrar una carga parcial como completa.

- `FR-SCC-002` — El sistema debe permitir ingresar «Apariciones en prensa».
  - ← SCC / User data input interfaces / `E1-UDII-02` «Apariciones en prensa»
  - Escenario: Dado un actor autorizado y datos válidos, cuando confirma el ingreso, entonces el sistema registra la aparición e informa el resultado.
  - Error: dado un ingreso inválido o incompleto, cuando se solicita guardarlo, entonces el sistema lo rechaza e identifica los datos que requieren corrección.

- `FR-SCC-003` — El sistema debe permitir ingresar «Comentarios para visitantes».
  - ← SCC / User data input interfaces / `E1-UDII-03` «Comentarios para visitantes»
  - Escenario: Dado un actor autorizado y un comentario válido, cuando confirma el ingreso, entonces el sistema lo registra e informa el resultado.
  - Error: dado un comentario inválido o una falla de registro, cuando se intenta guardarlo, entonces el sistema no lo presenta como registrado e informa el error.

- `FR-SCC-004` — El sistema debe ofrecer una interfaz de «Redaccion de Blog».
  - ← SCC / User data input interfaces / `E1-UDII-04` «Redaccion de Blog»
  - Escenario: Dado un actor autorizado y contenido válido, cuando confirma la redacción, entonces el sistema registra el contenido e informa el resultado.
  - Error: dado contenido inválido o una falla de persistencia, cuando se intenta guardarlo, entonces el sistema conserva un estado coherente e informa el error.

- `FR-SCC-005` — El sistema debe admitir una entrada denominada «Consumo de API».
  - ← SCC / User data input interfaces / `E1-UDII-05` «Consumo de API»
  - Escenario: Dado un consumidor autorizado y una solicitud conforme al contrato, cuando invoca la interfaz, entonces el sistema procesa la solicitud y devuelve un resultado explícito.
  - Error: dada una solicitud no autorizada, inválida o no procesable, cuando invoca la interfaz, entonces el sistema la rechaza y devuelve un error explícito.
  - Pendiente: el COM no define actor consumidor, operación, contrato ni datos intercambiados.

- `FR-SCC-006` — El sistema debe permitir iniciar el flujo de acceso mediante redirección al proveedor institucional de identidad.
  - ← SCC / User data input interfaces / `E1-UDII-06`; texto literal preservado en el contexto de plan de `INT-SCC-04`
  - Escenario: Dado que existe una solicitud de acceso, cuando el usuario inicia sesión, entonces el sistema lo redirige al proveedor configurado.
  - Error: si no es posible iniciar la redirección, entonces el sistema informa el fallo y no representa al usuario como autenticado.

- `FR-SCC-007` — El sistema debe ofrecer una interfaz de carga manual de archivos CSV asociados a la fuente externa de publicaciones.
  - ← SCC / User data input interfaces / `E1-UDII-07`; texto literal preservado en el contexto de plan de `INT-SCC-05`
  - Escenario: Dado un actor autorizado y un archivo aceptable, cuando confirma la carga, entonces el sistema procesa el archivo e informa el resultado.
  - Error: dado un archivo inválido, no autorizado o no procesable, cuando se intenta cargarlo, entonces el sistema lo rechaza, informa la causa y no presenta una importación parcial como completa.

#### Salidas para usuarios

- `FR-SCC-008` — El sistema debe presentar sus salidas mediante «Interfaces Web» a los destinatarios autorizados.
  - ← SCC / User data output interfaces / `E1-UDOI-01` «Interfaces Web»
  - Escenario: Dado un destinatario autorizado y contenido disponible, cuando solicita una interfaz web, entonces el sistema presenta el contenido o informa explícitamente que no está disponible.
- `FR-SCC-009` — El sistema debe publicar el «Blog del departamento» para los destinatarios definidos.
  - ← SCC / User data output interfaces / `E1-UDOI-02` «Blog del departamento»
  - Escenario: Dado contenido de blog disponible, cuando un destinatario definido solicita su publicación, entonces el sistema presenta el blog o informa explícitamente que no está disponible.

#### Entradas desde sistemas externos

- `FR-SCC-010` — El sistema debe leer información desde la API de la fuente externa de noticias.
  - ← SCC / System data input interfaces / `E1-SDII-01`; texto literal preservado en el contexto de plan de `INT-SCC-01`
  - Escenario: Dado que la fuente devuelve una respuesta válida, cuando el sistema la consulta, entonces incorpora el resultado e informa o registra el desenlace.
  - Error: ante indisponibilidad, rechazo o respuesta inválida, el sistema no debe representar la lectura como exitosa y debe registrar un resultado diagnosticable.

- `FR-SCC-011` — El sistema debe leer información desde la API de lectura de la fuente institucional académica.
  - ← SCC / System data input interfaces / `E1-SDII-02`; texto literal preservado en el contexto de plan de `INT-SCC-02`
  - Escenario: Dado que la fuente devuelve una respuesta válida, cuando el sistema la consulta, entonces incorpora el resultado e informa o registra el desenlace.
  - Error: ante indisponibilidad, rechazo o respuesta inválida, el sistema no debe representar la lectura como exitosa y debe registrar un resultado diagnosticable.

- `FR-SCC-012` — El sistema debe leer información desde la API de la fuente externa de proyectos.
  - ← SCC / System data input interfaces / `E1-SDII-03`; texto literal preservado en el contexto de plan de `INT-SCC-03`
  - Escenario: Dado que la fuente devuelve una respuesta válida, cuando el sistema la consulta, entonces incorpora el resultado e informa o registra el desenlace.
  - Error: ante indisponibilidad, rechazo o respuesta inválida, el sistema no debe representar la lectura como exitosa y debe registrar un resultado diagnosticable.

- `FR-SCC-013` — El sistema debe ejecutar consultas asíncronas en segundo plano contra las tres fuentes externas declaradas para noticias, información académica y proyectos.
  - ← SCC / System data input interfaces / `E1-SDII-04`; texto literal preservado en el contexto de plan de `FR-SCC-013`
  - Escenario: Dado que una consulta fue aceptada, cuando finaliza el procesamiento, entonces el sistema registra un desenlace inequívoco.
  - Error: ante una consulta fallida, el sistema debe registrar el fallo sin marcar la ingesta como exitosa.
  - Pendiente: no se declaran frecuencia, reintentos, idempotencia ni tratamiento de resultados parciales.

- `FR-SCC-014` — El sistema debe recibir el callback del proveedor institucional de identidad después de la redirección de acceso.
  - ← SCC / System data input interfaces / `E1-SDII-05`; texto literal preservado en el contexto de plan de `INT-SCC-04`
  - Escenario: Dado un callback válido, cuando el sistema lo recibe, entonces procesa el resultado de autenticación e informa el desenlace.
  - Error: dado un callback inválido, rechazado o fallido, entonces el sistema no establece una sesión autenticada e informa el fallo.

#### Salidas hacia sistemas externos

- `FR-SCC-015` — El sistema debe entregar su salida a servidores de publicación.
  - ← SCC / System data output interfaces / `E1-SDOI-01`; texto literal preservado en el contexto de plan de `FR-SCC-015`
  - Escenario: Dado que una salida está lista para publicación, cuando el sistema la entrega a los servidores designados, entonces registra un desenlace inequívoco de entrega.
- `FR-SCC-016` — El sistema debe emitir la redirección de inicio de sesión hacia el proveedor institucional de identidad.
  - ← SCC / System data output interfaces / `E1-SDOI-02`; texto literal preservado en el contexto de plan de `INT-SCC-04`
  - Escenario: Dado que existe una solicitud de inicio de sesión, cuando el sistema inicia el flujo, entonces emite la redirección o informa explícitamente que no pudo generarla.
- `FR-SCC-017` — El sistema debe entregar contenido consumible por los monitores de pasillos declarados.
  - ← SCC / Target systems / `E1-TS-01` «Monitores de los pasillos»
  - Escenario: Dado contenido disponible para monitores, cuando el consumidor solicita la salida, entonces el sistema entrega el contenido o un resultado explícito de indisponibilidad.
- `FR-SCC-018` — El sistema debe entregar contenido consumible por navegadores web.
  - ← SCC / Target systems / `E1-TS-02` «Navegadores web»
  - Escenario: Dado contenido disponible para navegación web, cuando un navegador lo solicita, entonces el sistema entrega el contenido o un resultado explícito de indisponibilidad.

#### Frontera de repositorios

- `FR-SCC-019` — El sistema debe aceptar archivos mediante «Protocolos de subida de archivos».
  - ← SCC / Repository data input interfaces / `E1-RDII-01` «Protocolos de subida de archivos»
  - Escenario: Dado un archivo aceptable, cuando se completa la subida, entonces el sistema informa un resultado inequívoco.
  - Error: ante una subida inválida, incompleta o fallida, el sistema no debe representarla como completa y debe informar la causa.
  - Pendiente: no se declaran contraparte, protocolo concreto, autenticación, límites ni formato.

- `FR-SCC-020` — El sistema debe publicar archivos estáticos mediante un «Servidor de archivos estáticos».
  - ← SCC / Repository data output interfaces / `E1-RDOI-01` «Servidor de archivos estáticos»
  - Escenario: Dado un archivo estático disponible, cuando un consumidor autorizado lo solicita, entonces el sistema entrega el archivo o informa explícitamente su ausencia.
  - Pendiente: no se declara el repositorio de origen ni el repositorio de destino.

#### Frontera de dispositivos

- `FR-SCC-021` — El sistema debe admitir un canal de entrada denominado «BDD».
  - ← SCC / Device data input interfaces / `E1-DDII-01` «BDD»
  - Escenario: Dado un dato conforme al contrato pendiente del canal, cuando el sistema lo recibe, entonces registra un desenlace explícito de aceptación o rechazo.
  - Pendiente: no se declara qué datos ingresan, la dirección física del intercambio, el contrato ni el dispositivo que lo utiliza.

- `FR-SCC-022` — El sistema debe admitir entradas mediante «distintas APIS».
  - ← SCC / Device data input interfaces / `E1-DDII-02` «distintas APIS»
  - Escenario: Dado que una entrada cumple el contrato de una API declarada, cuando el sistema la recibe, entonces registra un desenlace explícito de aceptación o rechazo.
  - Pendiente: no se declaran las APIs, los datos, los contratos ni la asociación con los dispositivos de origen.

- `FR-SCC-023` — El sistema debe admitir interacción de entrada mediante «Navegador Web».
  - ← SCC / Device data input interfaces / `E1-DDII-03` «Navegador Web»
  - Escenario: Dado que existe una interacción válida desde un navegador, cuando el sistema la recibe, entonces procesa la entrada y devuelve un resultado explícito.
- `FR-SCC-024` — El sistema debe presentar salida mediante «Navegador Web».
  - ← SCC / Device data output interfaces / `E1-DDOI-01` «Navegador Web»
  - Escenario: Dado contenido disponible para un navegador, cuando se solicita la salida, entonces el sistema la presenta o informa explícitamente su indisponibilidad.
- `FR-SCC-025` — El sistema debe presentar salida mediante «Monitores de los pasillos».
  - ← SCC / Device data output interfaces / `E1-DDOI-02` «Monitores de los pasillos»
  - Escenario: Dado contenido disponible para monitores, cuando se solicita la salida, entonces el sistema la presenta o informa explícitamente su indisponibilidad.

### Requisito no funcional observable

- `NFR-SCC-001` — Las interfaces web destinadas a `DEV-D-02` deben ser utilizables en «dispositivos moviles». Los tamaños de pantalla y criterios medibles de adaptabilidad quedan pendientes de aclaración.
  - ← SCC / Target devices / `E1-TD-02` «dispositivos moviles»

### Escenarios de frontera

- Dado que una fuente externa de lectura devuelve datos válidos, cuando el sistema ejecuta una consulta, entonces registra el resultado como exitoso y deja los datos disponibles para el comportamiento correspondiente.
- Dado que una fuente externa de lectura está indisponible o devuelve datos inválidos, cuando el sistema ejecuta una consulta, entonces registra el fallo y no lo representa como una ingesta exitosa.
- Dado que el proveedor institucional de identidad acepta el flujo, cuando el usuario vuelve mediante el callback válido, entonces el sistema procesa el resultado de autenticación.
- Dado que el proveedor institucional de identidad rechaza o invalida el flujo, cuando el sistema recibe el callback, entonces no establece una sesión autenticada y comunica el error.
- Dado que un destinatario usa una interfaz web desde un dispositivo admitido, cuando solicita contenido disponible, entonces el sistema lo presenta por el canal correspondiente.

### Fuera de alcance (por complemento)

- Escribir o modificar información en las tres fuentes externas declaradas sólo como entradas de lectura.
- Integrar sistemas, APIs, repositorios, dispositivos o destinatarios distintos de los declarados en este COM.
- Inventar repositorios de origen o destino para las interfaces de archivos mientras ambas celdas permanezcan vacías.
- Definir esquemas, columnas CSV, contratos de API, credenciales, protocolos, límites de archivo, frecuencias, reintentos o tiempos de espera no presentes en el COM.
- Desarrollar aplicaciones móviles nativas; el COM sólo declara dispositivos móviles como destino de interfaces.
- Instalar o administrar software en computadores personales, computadores del área de comunicaciones o computadores académicos.
- Asociar automáticamente actores con interfaces o destinatarios cuando el COM no declara esa correspondencia.
- Añadir canales de salida diferentes de interfaces web, blog, servidores de publicación, navegadores y monitores declarados.

## Contexto técnico y nombres concretos para `/speckit.plan`

Esta sección preserva literalmente los nombres concretos que el fragmento de especificación anonimiza.

| Alias en `spec` | Nombre o interfaz literal del COM |
|---|---|
| `INT-SCC-01` | Sistema: «u-noticias». Interfaz: «API de u-noticias». |
| `INT-SCC-02` | Sistema: «u-campus». Interfaz: «API de lectura de u-campus». |
| `INT-SCC-03` | Sistema: «u-proyectos». Interfaz: «API de u-proyectos». |
| `INT-SCC-04` | Sistema: «u-pasaporte». Entradas/salidas: «Auth Callback Endpoint (Redireccionamiento u-pasaporte)», «Page Redirect (Login) (u-pasaporte)» y «Redireccionamiento a upasaporte». |
| `INT-SCC-05` | Sistema: «u-papers». Interfaz: «UI Carga manual archivos CSV (u-papers)». |
| `FR-SCC-013` | «Async API Query (Worker) (Conectado a las fuentes u-campus, u-noticias y u-proyectos para la ingesta en segundo plano).» |
| `FR-SCC-015` | «Servidores Linux». |

La presencia de nombres en esta sección no autoriza a deducir tecnologías, versiones, contratos o capacidades adicionales.

## Dudas `[NEEDS CLARIFICATION]`

1. `[NEEDS CLARIFICATION]` Los cinco campos de cabecera (`system_name`, `system_purpose`, `system_version`, `organization`, `date`) están vacíos. Confirmar sus valores o declarar que no aplican.
2. `[NEEDS CLARIFICATION]` Indicar qué actor de origen utiliza cada interfaz de entrada de usuario y qué actor de destino recibe cada salida; la grilla no define asociaciones uno-a-uno.
3. `[NEEDS CLARIFICATION]` Definir autorización, campos obligatorios, validaciones y comportamiento de error para galería, apariciones en prensa, comentarios y redacción de blog.
4. `[NEEDS CLARIFICATION]` Precisar actor, dirección, operaciones, datos y contrato de «Consumo de API».
5. `[NEEDS CLARIFICATION]` Definir esquema, codificación, tamaño máximo, validaciones y tratamiento de errores/parciales de la carga CSV.
6. `[NEEDS CLARIFICATION]` Definir contratos, autenticación, paginación, tiempos de espera y respuestas de error de las tres APIs de entrada.
7. `[NEEDS CLARIFICATION]` Definir disparador o frecuencia, reintentos, idempotencia y tratamiento de resultados parciales de la consulta asíncrona.
8. `[NEEDS CLARIFICATION]` Definir datos del callback de identidad, correlación con la redirección, creación de sesión y manejo de rechazo o expiración.
9. `[NEEDS CLARIFICATION]` Precisar la relación entre servidores de publicación, monitores de pasillos y navegadores web; el COM no define la cadena exacta de entrega.
10. `[NEEDS CLARIFICATION]` Identificar los repositorios de origen y destino o confirmar que las dos celdas vacías son intencionales.
11. `[NEEDS CLARIFICATION]` Especificar los protocolos de subida y el contrato del servidor de archivos estáticos.
12. `[NEEDS CLARIFICATION]` Mapear computadores de origen, interfaces de dispositivo y dispositivos de destino; sus cardinalidades no determinan asociaciones.
13. `[NEEDS CLARIFICATION]` Definir navegadores soportados, tamaños de pantalla y criterios medibles de uso en dispositivos móviles.
14. `[NEEDS CLARIFICATION]` Definir contenido, resolución y frecuencia de actualización requerida para los monitores de pasillos.
15. `[NEEDS CLARIFICATION]` Precisar significado, dirección, datos y contrato de «BDD» y «distintas APIS».

## Anexo de trazabilidad

| Post-it | Texto literal | Destino |
|---|---|---|
| `E1-SU-01` | Comunidad | `ACT-O-01` |
| `E1-SU-02` | Académicos | `ACT-O-02` |
| `E1-SU-03` | Área de comunicaciones | `ACT-O-03` |
| `E1-SU-04` | Comite editorial | `ACT-O-04` |
| `E1-SU-05` | Futuros estudiantes | `ACT-O-05` |
| `E1-SU-06` | Prensa / Medios | `ACT-O-06` |
| `E1-SU-07` | Industria y Empresas | `ACT-O-07` |
| `E1-UDII-01` | Galeria de fotos | `FR-SCC-001` |
| `E1-UDII-02` | Apariciones en prensa | `FR-SCC-002` |
| `E1-UDII-03` | Comentarios para visitantes | `FR-SCC-003` |
| `E1-UDII-04` | Redaccion de Blog | `FR-SCC-004` |
| `E1-UDII-05` | Consumo de API | `FR-SCC-005` |
| `E1-UDII-06` | Redireccionamiento a upasaporte | `FR-SCC-006` |
| `E1-UDII-07` | UI Carga manual archivos CSV (u-papers) | `FR-SCC-007` |
| `E1-UDOI-01` | Interfaces Web | `FR-SCC-008` |
| `E1-UDOI-02` | Blog del departamento | `FR-SCC-009` |
| `E1-TU-01` | Comunidad | `ACT-D-01` |
| `E1-TU-02` | Academicos y colaboradores | `ACT-D-02` |
| `E1-TU-03` | Futuros estudiantes | `ACT-D-03` |
| `E1-TU-04` | Prensa / Medios | `ACT-D-04` |
| `E1-TU-05` | Industria y Empresas | `ACT-D-05` |
| `E1-SS-01` | u-noticias | `INT-SCC-01` |
| `E1-SS-02` | u-campus | `INT-SCC-02` |
| `E1-SS-03` | u-proyectos | `INT-SCC-03` |
| `E1-SS-04` | u-pasaporte | `INT-SCC-04` |
| `E1-SS-05` | u-papers | `INT-SCC-05` |
| `E1-SDII-01` | API de u-noticias | `FR-SCC-010` |
| `E1-SDII-02` | API de lectura de u-campus | `FR-SCC-011` |
| `E1-SDII-03` | API de u-proyectos | `FR-SCC-012` |
| `E1-SDII-04` | Async API Query (Worker) (Conectado a las fuentes u-campus, u-noticias y u-proyectos para la ingesta en segundo plano). | `FR-SCC-013` |
| `E1-SDII-05` | Auth Callback Endpoint (Redireccionamiento u-pasaporte) | `FR-SCC-014` |
| `E1-SDOI-01` | Servidores Linux | `FR-SCC-015` |
| `E1-SDOI-02` | Page Redirect (Login) (u-pasaporte) | `FR-SCC-016` |
| `E1-TS-01` | Monitores de los pasillos | `FR-SCC-017` |
| `E1-TS-02` | Navegadores web | `FR-SCC-018` |
| `E1-RDII-01` | Protocolos de subida de archivos | `FR-SCC-019` |
| `E1-RDOI-01` | Servidor de archivos estáticos | `FR-SCC-020` |
| `E1-SD-01` | Computadores area comunicaciones | `DEV-O-01` |
| `E1-SD-02` | Computadores academicos | `DEV-O-02` |
| `E1-DDII-01` | BDD | `FR-SCC-021` |
| `E1-DDII-02` | distintas APIS | `FR-SCC-022` |
| `E1-DDII-03` | Navegador Web | `FR-SCC-023` |
| `E1-DDOI-01` | Navegador Web | `FR-SCC-024` |
| `E1-DDOI-02` | Monitores de los pasillos | `FR-SCC-025` |
| `E1-TD-01` | Computadores personales | `DEV-D-01` |
| `E1-TD-02` | dispositivos moviles | `NFR-SCC-001` |
| `E1-TD-03` | Monitores en pasillos | `DEV-D-03` |

## Balance y controles

- Celdas verificadas: `16/16`.
- Celdas vacías: `2` — `Source repositories` y `Target repositories`.
- Post-its del COM: `47`.
- Trazas emitidas: `47`.
- Integraciones externas declaradas: `5`; todas tienen dirección explícita.
- Requisitos funcionales de frontera: `25`.
- Requisitos no funcionales observables: `1`.
- Dudas `[NEEDS CLARIFICATION]`: `15`.
- Sección «Fuera de alcance (por complemento)»: presente.
- Nombres concretos de productos en el fragmento de `spec`: `0`; se conservan en el contexto para `plan` y en la trazabilidad literal.
