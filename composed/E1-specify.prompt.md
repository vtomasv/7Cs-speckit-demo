/speckit.specify

# Entrega E1 — 7Cs v1.1 June 2026

(BCC) Construir un «Sitio web de contenido dinámico y centralizado» para la «Proyección de identidad y prestigio institucional» y la «Difusión de contenidos para la comunidad». [NEEDS CLARIFICATION: el canvas no declara qué sistema o proceso existente reemplaza.]

## CONTEXTO (BCC)

El contexto de negocio declara «Proyección de identidad y prestigio institucional», «Difusión de contenidos para la comunidad» y «Sitio web de contenido dinámico y centralizado» como productos y servicios de referencia.

← BCC / Business products & services (3 post-it)

Actores organizacionales:

- «Área de Sistemas». ← BCC / Business units & actors `E1-BUA-01`
- «Área de Desarrollo». ← BCC / Business units & actors `E1-BUA-02`
- «Área de Comunicaciones». ← BCC / Business units & actors `E1-BUA-03`
- «Dirección del Departamento». ← BCC / Business units & actors `E1-BUA-04`
- «Comunidad Universitaria». ← BCC / Business units & actors `E1-BUA-05`
- «Público general»:
  - «Futuros estudiantes». ← BCC / Business units & actors `E1-BUA-06`, hijo de `E1-BUA-G1`
  - «Prensa / Medios». ← BCC / Business units & actors `E1-BUA-07`, hijo de `E1-BUA-G1`
  - «Industria y Empresas». ← BCC / Business units & actors `E1-BUA-08`, hijo de `E1-BUA-G1`

← BCC / Business units & actors (8 post-it; agrupador «Público general» conservado)

Canales y dispositivos declarados:

- «Monitores instalados en los pasillos». ← BCC / Business infrastructure & equipment `E1-BIE-01`
- «Dispositivos del público general». ← BCC / Business infrastructure & equipment `E1-BIE-02`

← BCC / Business infrastructure & equipment (2 post-it)

Contextos de uso declarados, sin convertirlos aquí en requisitos:

- «Dependencias de la facultad». ← BCC / Business locations `E1-BL-01`
- «Facultades de la Universidad de Chile». ← BCC / Business locations `E1-BL-02`
- «Entorno web donde interactua el publico general». ← BCC / Business locations `E1-BL-03`
- «Oficinas del DCC». ← BCC / Business facilities `E1-BFA-01`
- «Pasillos del departamento». ← BCC / Business facilities `E1-BFA-02`

← BCC / Business locations + Business facilities (5 post-it)

## PERFILES (BCC / Business roles)

- PER-01 — «Coordinador académico». Permisos por confirmar. ← BCC / Business roles `E1-BR-01`
- PER-02 — «Comité editorial». Permisos por confirmar. ← BCC / Business roles `E1-BR-02`
- PER-03 — «Periodista». Permisos por confirmar. ← BCC / Business roles `E1-BR-03`
- PER-04 — «Diseñador grafico». Permisos por confirmar. ← BCC / Business roles `E1-BR-04`
- PER-05 — «Estudiantes,memoristas,tesistas,expertos». Permisos y cardinalidad del perfil por confirmar. ← BCC / Business roles `E1-BR-05`
- PER-06 — «Académicos e Investigadores». Permisos y cardinalidad del perfil por confirmar. ← BCC / Business roles `E1-BR-06`

[NEEDS CLARIFICATION: permisos de cada perfil no declarados en el canvas]

← BCC / Business roles (6 post-it)

## ALCANCE (BCC + SCC + Functional)

### Agrupadores de requisitos (BCC)

- EP-01 — «Gestión de noticias y eventos». ← BCC / Business functions `E1-BF-01`
- EP-02 — «Gestión de fotos, videos y prensa». ← BCC / Business functions `E1-BF-02`
- EP-03 — «Gestión de blog y entradas». ← BCC / Business functions `E1-BF-03`
- EP-04 — «Gestión de informacion de funcionarios». ← BCC / Business functions `E1-BF-04`
- EP-05 — «Vinculación con el medio». ← BCC / Business functions `E1-BF-05`
- EP-06 — «Atracción de talento». ← BCC / Business functions `E1-BF-06`

Estos nombres estructuran requisitos posteriores; por sí solos no crean obligaciones.

← BCC / Business functions (6 post-it)

### Índice de áreas (BCC)

Todo requisito funcional posterior debe pertenecer a una de estas áreas o justificar una nueva:

1. AREA-01 — «Difusión de noticias y eventos». ← BCC / System's functional areas `E1-SFA-01`
2. AREA-02 — «Interacciones del blog». ← BCC / System's functional areas `E1-SFA-02`
3. AREA-03 — «Gestión de fotos, videos y apariciones en prensa». ← BCC / System's functional areas `E1-SFA-03`
4. AREA-04 — «Indicadores de rendimiento del DCC». ← BCC / System's functional areas `E1-SFA-04`
5. AREA-05 — «Información de funcionarios». ← BCC / System's functional areas `E1-SFA-05`

← BCC / System's functional areas (5 post-it)

### Frontera del sistema (SCC)

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

### Coherencia de secciones vacías (Functional p.7 / INT)

- `User inputs` y `UI-processing inputs`: vacías y coherentes con un bundle sin interacción humana directa.
- `User visualizations, reports & notifications` y `UI-processing outputs`: vacías y coherentes con un bundle que no declara interfaz de usuario.
- `API outputs`: vacía; no se declara un contrato de salida API. La dirección y el resultado de las solicitudes requieren aclaración.
- `Event handlers` y `Event triggers`: vacías; no se declara comportamiento reactivo, incluso ante los fallos mencionados en la restricción local.

### Coherencia de secciones vacías (Functional p.9 / ETL)

- `User inputs` y `UI-processing inputs`: vacías y coherentes con un ingestor programado sin interacción humana directa.
- `API inputs`: vacía; el canvas declara lectura de archivos, no recepción mediante API.
- `UI-processing outputs` y `API outputs`: vacías y coherentes con un bundle que persiste resultados en almacenes.
- `User visualizations, reports & notifications`: vacía, pero existe una alerta por fallo; destinatario y canal deben aclararse.
- `Helpers`: vacía; no se declara validación, transformación auxiliar ni regla de calidad separada.

### Coherencia de secciones vacías (Functional p.10 / CMS)

- `User inputs` y `UI-processing inputs`: vacías y coherentes con un servicio API sin interacción humana directa.
- `UI-processing outputs`: vacía y coherente con un servicio que entrega resultados mediante endpoints.
- `User visualizations, reports & notifications`: vacía, aunque existe un trigger de notificación; canal y destinatarios requieren aclaración.
- `Helpers`: vacía; no se declaran reglas auxiliares separadas.

### Fuera de alcance por complemento (SCC)

- Escribir o modificar información en las tres fuentes externas declaradas sólo como entradas de lectura.
- Integrar sistemas, APIs, repositorios, dispositivos o destinatarios distintos de los declarados en este COM.
- Inventar repositorios de origen o destino para las interfaces de archivos mientras ambas celdas permanezcan vacías.
- Definir esquemas, columnas CSV, contratos de API, credenciales, protocolos, límites de archivo, frecuencias, reintentos o tiempos de espera no presentes en el COM.
- Desarrollar aplicaciones móviles nativas; el COM sólo declara dispositivos móviles como destino de interfaces.
- Instalar o administrar software en computadores personales, computadores del área de comunicaciones o computadores académicos.
- Asociar automáticamente actores con interfaces o destinatarios cuando el COM no declara esa correspondencia.
- Añadir canales de salida diferentes de interfaces web, blog, servidores de publicación, navegadores y monitores declarados.

## ENTIDADES (BCC + Functional)

### Entidades canónicas (BCC)

- ENT-01 — «Noticias y Eventos»; atributos abiertos. ← BCC / Business objects `E1-BO-01`
- ENT-02 — «Fotos y videos»; atributos abiertos. ← BCC / Business objects `E1-BO-02`
- ENT-03 — «Apariciones en prensa»; atributos abiertos. ← BCC / Business objects `E1-BO-03`
- ENT-04 — «Entradas de blog»; atributos abiertos. ← BCC / Business objects `E1-BO-04`
- ENT-05 — «Indicadores de rendimiento»; atributos abiertos. ← BCC / Business objects `E1-BO-05`
- ENT-06 — «Información de colaboradores y académicos»; atributos abiertos. ← BCC / Business objects `E1-BO-06`
- ENT-07 — «Proyectos de investigación»; atributos abiertos. ← BCC / Business objects `E1-BO-07`
- ENT-08 — «Publicaciones científicas (Papers)»; atributos abiertos. ← BCC / Business objects `E1-BO-08`

[NEEDS CLARIFICATION: atributos e identidad individual o compuesta de las ocho entidades no declarados en el canvas]

← BCC / Business objects (8 post-it; sin atributos declarados)

### Entidades adicionales no duplicadas (Functional)

- `ENT-INT-004` — **Información académica institucional**; atributos por confirmar.  
  ← Functional p.7 / Data objects / `E1-F7-DO-04`; el texto literal y el nombre concreto se preservan en el contexto de plan.
- `ENT-ETL-002` — **Documento de publicación**; atributos por confirmar.  
  ← Functional p.9 / Data objects / `E1-F9-DO-02` «Documento publicación»
- `ENT-ETL-003` — **Log de extracción**; atributos y retención por confirmar.  
  ← Functional p.9 / Data objects / `E1-F9-DO-03` «Log Extracciones»
- `ENT-CMS-001` — **Token de persona/sesión**; atributos por confirmar.  
  ← Functional p.10 / Data objects / `E1-F10-DO-01` «Token_Persona (Sesion)»
- `ENT-CMS-005` — **Archivo multimedia**; atributos por confirmar.  
  ← Functional p.10 / Data objects / `E1-F10-DO-05` «Archivos Multimedia»
- `ENT-CMS-007` — **Comentario de blog**; atributos por confirmar.  
  ← Functional p.10 / Data objects / `E1-F10-DO-07` «Comentario Blog»

### Unificación por trazabilidad (BCC + Functional)

| Post-it Functional | Entidad canónica BCC | Motivo de deduplicación |
|---|---|---|
| `E1-F7-DO-01` «Proyecto» | `ENT-07` «Proyectos de investigación» | Misma entidad de proyecto; conservar ambas trazas |
| `E1-F7-DO-02` «Noticia» | `ENT-01` «Noticias y Eventos» | Especialización ya contenida |
| `E1-F7-DO-03` «Evento» | `ENT-01` «Noticias y Eventos» | Especialización ya contenida |
| `E1-F9-DO-01` «Publicación (Paper)» | `ENT-08` «Publicaciones científicas (Papers)» | Misma entidad de publicación |
| `E1-F10-DO-02` «Proyecto» | `ENT-07` «Proyectos de investigación» | Misma entidad de proyecto |
| `E1-F10-DO-03` «Noticia / Evento» | `ENT-01` «Noticias y Eventos» | Misma entidad compuesta |
| `E1-F10-DO-04` «Indicador» | `ENT-05` «Indicadores de rendimiento» | Misma entidad de indicador |
| `E1-F10-DO-06` «Entrada Blog» | `ENT-04` «Entradas de blog» | Misma entidad de entrada |

## INTEGRACIONES (SCC)

| ID | Contraparte anonimizada | Dirección respecto del sistema | Interfaz o mecanismo declarado |
|---|---|---|---|
| `INT-SCC-01` | Fuente externa de noticias | Entrada: la fuente → el sistema | API de lectura y consulta asíncrona |
| `INT-SCC-02` | Fuente institucional académica | Entrada: la fuente → el sistema | API de lectura y consulta asíncrona |
| `INT-SCC-03` | Fuente externa de proyectos | Entrada: la fuente → el sistema | API y consulta asíncrona |
| `INT-SCC-04` | Proveedor institucional de identidad | Salida: el sistema → el proveedor mediante redirección; entrada: el proveedor → el sistema mediante callback | Redirección de inicio de sesión y endpoint de callback |
| `INT-SCC-05` | Fuente externa de publicaciones | Entrada: la fuente → el sistema | Carga manual de archivos CSV |

No se declara una contraparte de repositorio de origen ni de destino, aunque sí se declaran interfaces de subida y publicación de archivos. Esta integración queda registrada como incompleta y no se le asigna una contraparte inventada.

## REQUISITOS (BCC + SCC + Functional)

### Escenarios de negocio (BCC)

Estos escenarios estructuran el comportamiento esperado, pero no constituyen requisitos funcionales numerados.

#### ESC-01 — Redacción de entradas

Dado `{rol}` y una entrada de blog, cuando se ejecuta «Redactar entradas de blog», entonces el proceso concluye con una entrada redactada.

← BCC / Business processes `E1-BP-01` «Redactar entradas de blog»

#### ESC-02 — Extracción de contenido e indicadores

Dado `{rol}` y las fuentes por confirmar, cuando se ejecuta «Extraer noticias, eventos e indicadores», entonces el proceso concluye con noticias, eventos e indicadores extraídos.

← BCC / Business processes `E1-BP-02` «Extraer noticias, eventos e indicadores»

#### ESC-03 — Diagramación

Dado `{rol}` y una noticia, cuando se ejecuta «Diagramar noticias en nuevo formato», entonces el proceso concluye con la noticia diagramada en el nuevo formato.

← BCC / Business processes `E1-BP-03` «Diagramar noticias en nuevo formato»

#### ESC-04 — Publicación en monitores

Dado `{rol}` y contenido, cuando se ejecuta «Publicar contenido en monitores», entonces el contenido queda publicado en los monitores.

← BCC / Business processes `E1-BP-04` «Publicar contenido en monitores»

#### ESC-05 — Publicación de galerías

Dado `{rol}` y fotos o videos, cuando se ejecuta «Publicar galerias de fotos y videos», entonces la galería queda publicada.

← BCC / Business processes `E1-BP-05` «Publicar galerias de fotos y videos»

#### ESC-06 — Publicación de apariciones

Dado `{rol}` y una aparición en prensa, cuando se ejecuta «Publicar apariciones de prensa», entonces la aparición queda publicada.

← BCC / Business processes `E1-BP-06` «Publicar apariciones de prensa»

#### ESC-07 — Lectura de entradas

Dado `{rol}` y una entrada de blog disponible, cuando se ejecuta «Leer entradas de blog», entonces la entrada queda presentada para lectura.

← BCC / Business processes `E1-BP-07` «Leer entradas de blog»

[NEEDS CLARIFICATION: perfil responsable, precondiciones, resultado verificable y comportamiento de error de cada proceso no declarados en el canvas]

← BCC / Business processes (7 post-it; 7 escenarios, 0 requisitos funcionales numerados)

### Requisitos de frontera (SCC)

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

### NFR observable y escenarios de frontera (SCC)

- `NFR-SCC-001` — Las interfaces web destinadas a `DEV-D-02` deben ser utilizables en «dispositivos moviles». Los tamaños de pantalla y criterios medibles de adaptabilidad quedan pendientes de aclaración.
  - ← SCC / Target devices / `E1-TD-02` «dispositivos moviles»

### Escenarios de frontera

- Dado que una fuente externa de lectura devuelve datos válidos, cuando el sistema ejecuta una consulta, entonces registra el resultado como exitoso y deja los datos disponibles para el comportamiento correspondiente.
- Dado que una fuente externa de lectura está indisponible o devuelve datos inválidos, cuando el sistema ejecuta una consulta, entonces registra el fallo y no lo representa como una ingesta exitosa.
- Dado que el proveedor institucional de identidad acepta el flujo, cuando el usuario vuelve mediante el callback válido, entonces el sistema procesa el resultado de autenticación.
- Dado que el proveedor institucional de identidad rechaza o invalida el flujo, cuando el sistema recibe el callback, entonces no establece una sesión autenticada y comunica el error.
- Dado que un destinatario usa una interfaz web desde un dispositivo admitido, cuando solicita contenido disponible, entonces el sistema lo presenta por el canal correspondiente.

### Bundle INT (Functional p.7)

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

### Bundle ETL (Functional p.9)

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

### Bundle CMS (Functional p.10)

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

### Deduplicaciones de requisitos (SCC + Functional + ACC + Deployment)

- `FR-CMS-001` absorbe `FR-SCC-014`: conservar las trazas `E1-F10-APII-01` y `E1-SDII-05` en un único requisito de callback del proveedor institucional de identidad.
- `NFR-OP-006` absorbe `NFR-ACC-02`: conservar las trazas `E1-OP-01` y `E1-TSP-01` en una única obligación de gobierno operativo por el área responsable de sistemas.

## VALIDADORES DE ACEPTACIÓN (ACC)

- VAL-01 — «Dirección del DCC». ← ACC / Stakeholders `E1-SH-01`
- VAL-02 — «Área de Comunicaciones». ← ACC / Stakeholders `E1-SH-02`
- VAL-03 — «Académicos». ← ACC / Stakeholders `E1-SH-03`
- VAL-04 — «Funcionarios». ← ACC / Stakeholders `E1-SH-04`
- VAL-05 — «Estudiantes». ← ACC / Stakeholders `E1-SH-05`
- VAL-06 — «Memoristas/Tesistas». ← ACC / Stakeholders `E1-SH-06`
- VAL-07 — «Área de Sistemas». ← ACC / Stakeholders `E1-SH-07`
- VAL-08 — «Área de Desarrollo». ← ACC / Stakeholders `E1-SH-08`
- VAL-09 — «Público general» / «Futuros estudiantes». ← ACC / Stakeholders `E1-SH-09`, hijo de `E1-SH-G1`
- VAL-10 — «Público general» / «Prensa / Medios». ← ACC / Stakeholders `E1-SH-10`, hijo de `E1-SH-G1`
- VAL-11 — «Público general» / «Industria y Empresas». ← ACC / Stakeholders `E1-SH-11`, hijo de `E1-SH-G1`

[NEEDS CLARIFICATION: asignar qué validadores aceptan cada requisito; el canvas sólo declara la lista.]

← ACC / Stakeholders (11 post-it; agrupador «Público general» conservado)

## CRITERIOS DE ÉXITO (ACC)

#### CE-ACC-01 — Centralización de la gestión

El éxito DEBE reflejar «Centralización de la gestión».

[NEEDS CLARIFICATION: definir métrica, unidad, línea base, valor objetivo y método de medición.]

← ACC / Business goals & drivers `E1-BGD-01` «Centralización de la gestión»

#### CE-ACC-02 — Acceso y navegación

El éxito DEBE reflejar «Facilitar el acceso y mejorar la experiencia de navegación».

[NEEDS CLARIFICATION: definir métricas y líneas base separadas para acceso y experiencia de navegación.]

← ACC / Business goals & drivers `E1-BGD-02` «Facilitar el acceso y mejorar la experiencia de navegación»

#### CE-ACC-03 — Duplicidad

El éxito DEBE reflejar «Reducir duplicidad».

[NEEDS CLARIFICATION: definir qué se considera duplicidad, métrica, línea base y valor objetivo.]

← ACC / Business goals & drivers `E1-BGD-03` «Reducir duplicidad»

#### CE-ACC-04 — Procesos manuales

El éxito DEBE reflejar una disminución de la «Dependencia de procesos manuales».

[NEEDS CLARIFICATION: definir procesos incluidos, métrica, línea base y valor objetivo.]

← ACC / Business goals & drivers `E1-BGD-04` «Dependencia de procesos manuales»

#### CE-ACC-05 — Consistencia de información

El éxito DEBE reflejar una disminución de la «Inconsistencia de información».

[NEEDS CLARIFICATION: definir qué constituye una inconsistencia, métrica, línea base y valor objetivo.]

← ACC / Business goals & drivers `E1-BGD-05` «Inconsistencia de información»

#### CE-ACC-06 — Visibilidad

El éxito DEBE reflejar «Mejorar la visibilidad».

[NEEDS CLARIFICATION: definir qué debe hacerse visible, para quién, métrica, línea base y valor objetivo.]

← ACC / Business goals & drivers `E1-BGD-06` «Mejorar la visibilidad»

#### CE-ACC-07 — Integración del ecosistema

El éxito DEBE reflejar «Reducir la baja integración del ecosistema».

[NEEDS CLARIFICATION: definir alcance del ecosistema, métrica de integración, línea base y valor objetivo.]

← ACC / Technology goals & drivers `E1-TGD-01` «Reducir la baja integración del ecosistema»

## RESTRICCIONES Y NFR (ACC + Structural)

### NFR de arquitectura observables (ACC)

#### NFR-ACC-01 — Estandarización tecnológica observable

El ecosistema DEBE aplicar criterios de estandarización verificables a sus integraciones.

[NEEDS CLARIFICATION: estándares aplicables, componentes cubiertos y evidencia de conformidad no declarados.]

← ACC / Technology goals & drivers `E1-TGD-02` «Solucionar la falta de estandarizacion tecnológica»

#### NFR-ACC-03 — Identidad institucional

La autenticación DEBE realizarse mediante el sistema institucional de identidad.

[NEEDS CLARIFICATION: perfiles obligados a autenticarse, flujos cubiertos y comportamiento ante indisponibilidad.]

← ACC / Technology standards & policies `E1-TSP-05`; texto literal y producto concreto preservados en el contexto para `/speckit.plan`

### Restricciones (ACC)

#### R-ACC-01 — Equipos de desarrollo

Los «Equipos de desarrollo» DEBEN permanecer «inalterables».

[NEEDS CLARIFICATION: confirmar si “equipos” significa personas, hardware u otra unidad, además del período y cambios permitidos.]

← ACC / Business standards & policies `E1-BSP-01` «Equipos de desarrollo inalterables»

#### R-ACC-02 — Herramientas permitidas

El proyecto DEBE adoptar exclusivamente herramientas abiertas o con licencias académicas.

← ACC / Business standards & policies `E1-BSP-02` «Adopción exclusiva de herramientas Open-Source y académicas»

#### R-ACC-03 — Infraestructura administrada localmente

La solución DEBE operar en infraestructura administrada localmente por la organización.

← ACC / Situational constraints `E1-SC-01`; texto literal preservado en el contexto para `/speckit.plan`

#### R-ACC-04 — Integración sin interfaz programática

La integración con el repositorio externo identificado en el contexto técnico no puede depender de una interfaz programática inexistente.

[NEEDS CLARIFICATION: mecanismo compensatorio, formato de intercambio, responsable y frecuencia no declarados. Esta restricción será causa `ACC/R-ACC-04` del comportamiento correspondiente en el Functional Canvas, sin duplicarlo aquí.]

← ACC / Situational constraints `E1-SC-02`; texto literal y producto concreto preservados en el contexto para `/speckit.plan`

### Refuerzos deduplicados (Structural)

| Restricción canónica | Traza Structural que la refuerza |
|---|---|
| `R-ACC-03` — infraestructura administrada localmente | Structural / Constraints / `E1-SCON-01` |
| `R-ACC-02` — herramientas permitidas | Structural / Constraints / `E1-SCON-02` |
| `R-ACC-04` — integración sin interfaz programática | Structural / Constraints / `E1-SCON-03` |

## NFR DE OPERACIÓN (Deployment)

#### `NFR-OP-001` — Entorno de producción

La organización DEBE disponer de un «Entorno de Produccion» en el que operar el sistema.

← Deployment / Environments / `E1-ENV-01` «Entorno de Produccion»

`[NEEDS CLARIFICATION: sólo se declara producción; confirmar entornos de desarrollo, integración, prueba o preproducción y el proceso de promoción.]`

#### `NFR-OP-002` — Responsable de instalación

La instalación DEBE quedar a cargo del «Area de Sistemas».

← Deployment / Installation / `E1-INST-01` «A cargo del Area de Sistemas»

`[NEEDS CLARIFICATION: definir responsabilidades, permisos, evidencia de instalación y traspaso desde desarrollo.]`

#### `NFR-OP-003` — Despliegue automatizado

La instalación DEBE ejecutarse mediante un proceso de despliegue automatizado.

← Deployment / Installation / `E1-INST-02`; texto literal y producto concreto preservados en `PLAN-DEP-INST-02`.

`[NEEDS CLARIFICATION: definir artefactos de entrada, validaciones, rollback, idempotencia y evidencia verificable de automatización.]`

#### `NFR-OP-004` — Nodos designados

La instalación DEBE ejecutarse únicamente en los nodos de servidor específicamente designados.

← Deployment / Installation / `E1-INST-03` «En nodos especificos de los servidores»

`[NEEDS CLARIFICATION: identificar nodos, criterios de selección y proceso autorizado para cambiarlos.]`

#### `NFR-OP-005` — Verificación por variantes de sistema operativo

La instalación DEBE verificar la ejecución en cada variante de sistema operativo declarada como admitida.

← Deployment / Installation / `E1-INST-04`; texto literal y sistema operativo concreto preservados en `PLAN-DEP-INST-04`.

`[NEEDS CLARIFICATION: definir variantes, versiones y evidencia de verificación.]`

#### `NFR-OP-006` — Responsable de operación

La operación del sistema DEBE quedar a cargo del «Area de Sistemas».

← Deployment / Operation / `E1-OP-01` «Area de Sistemas»

`[NEEDS CLARIFICATION: definir funciones operativas, permisos, horario de cobertura y escalamiento.]`

NO incluir decisiones de tecnología en esta especificación: el contexto técnico se entrega por separado en /speckit.plan.
