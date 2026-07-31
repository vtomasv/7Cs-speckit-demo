/speckit.plan

# Entrega E1 — contexto técnico dado por la organización

> GATE: no ejecutar este comando hasta cerrar las dudas de `/speckit.clarify`. Este archivo preserva decisiones dadas; no autoriza completar configuraciones, versiones, periodicidades, esquemas ni permisos ausentes.

## Contexto Architectural dado por la organización (ACC)

- PLAN-ACC-01 — «El área de sistemas mantiene el control total de la operacion». ← ACC / Technology standards & policies `E1-TSP-01`
- PLAN-ACC-02 — «Servidores de tipo Linux». ← ACC / Technology standards & policies `E1-TSP-02`
- PLAN-ACC-03 — «Proxy Nginx». ← ACC / Technology standards & policies `E1-TSP-03`
- PLAN-ACC-04 — «BD relacionales PostgreSQL». ← ACC / Technology standards & policies `E1-TSP-04`
- PLAN-ACC-05 — «Autenticación a traves del sistema u-pasaporte». En `spec` se anonimiza como sistema institucional de identidad. ← ACC / Technology standards & policies `E1-TSP-05`
- PLAN-ACC-06 — «Disponibilidad de contenedores Docker». ← ACC / Technology standards & policies `E1-TSP-06`
- PLAN-ACC-07 — «Infraestructura on-premise». ← ACC / Situational constraints `E1-SC-01`
- PLAN-ACC-08 — «Sistema u-papers no expone API». ← ACC / Situational constraints `E1-SC-02`

## Contrapartes y nombres concretos (SCC)

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

## Arquitectura en capas y censo (Structural)

### Arquitectura en capas

#### Presentación

Bundles:

- `PRES-B-01` — «CMS Web Backoffice UI». El perfil concreto que atiende no está asociado explícitamente en el COM.  
  ← Structural / Frontend bundles / `E1-FB-01` «CMS Web Backoffice UI»
- `PRES-B-02` — «Portal Web Público UI». El perfil concreto que atiende no está asociado explícitamente en el COM.  
  ← Structural / Frontend bundles / `E1-FB-02` «Portal Web Público UI»

Contratos de entrada de la capa:

- `PRES-IN-01` — «UI para Público general».  
  ← Structural / Data input interfaces to frontend bundles / `E1-DIFB-01` «UI para Público general»
- `PRES-IN-02` — «UI para Periodistas».  
  ← Structural / Data input interfaces to frontend bundles / `E1-DIFB-02` «UI para Periodistas»
- `PRES-IN-03` — «UI para Académicos y Colaboradores».  
  ← Structural / Data input interfaces to frontend bundles / `E1-DIFB-03` «UI para Académicos y Colaboradores»
- `PRES-IN-04` — «UI para Funcionarios».  
  ← Structural / Data input interfaces to frontend bundles / `E1-DIFB-04` «UI para Funcionarios»

Contratos de salida de la capa:

- `PRES-OUT-01` — «UI hacia pantallas de los usuarios».  
  ← Structural / Data output interfaces from frontend bundles / `E1-DOFFB-01` «UI hacia pantallas de los usuarios»
- `PRES-OUT-02` — «UI Panel de consultas de las peticiones de datos».  
  ← Structural / Data output interfaces from frontend bundles / `E1-DOFFB-02` «UI Panel de consultas de las peticiones de datos»

La capa declara cuatro perfiles de entrada, dos bundles y dos salidas, pero no declara qué entrada o salida pertenece a cada bundle.

#### Servicios

Bundles:

- `SERV-B-01` — «Integracion consumidor de APIs».  
  ← Structural / Backend bundles / `E1-BB-01` «Integracion consumidor de APIs»
- `SERV-B-02` — «Ingestor Worker (u-papers)».  
  ← Structural / Backend bundles / `E1-BB-02` «Ingestor Worker (u-papers)»
- `SERV-B-03` — «CMS Gestor API».  
  ← Structural / Backend bundles / `E1-BB-03` «CMS Gestor API»

Contratos de entrada de la capa:

- `SERV-IN-01` — «Peticiones de datos».  
  ← Structural / Data input interfaces to backend bundles / `E1-DIBB-01` «Peticiones de datos»
- `SERV-IN-02` — «Respuestas de datos JSON».  
  ← Structural / Data input interfaces to backend bundles / `E1-DIBB-02` «Respuestas de datos JSON»

Contratos de salida de la capa:

- `SERV-OUT-01` — «Comandos de lectura/escritura a la BD».  
  ← Structural / Data output interfaces from backend bundles / `E1-DOBB-01` «Comandos de lectura/escritura a la BD»
- `SERV-OUT-02` — «Requests a APIs externas».  
  ← Structural / Data output interfaces from backend bundles / `E1-DOBB-02` «Requests a APIs externas»

Los contratos se asignan a la capa de servicios; el COM no permite asignarlos de forma inequívoca a uno de los tres bundles.

#### Persistencia

Bundles:

- `PERS-B-01` — «PostgreSQL (Local)», almacén relacional local.  
  ← Structural / Repository bundles / `E1-RB-01` «PostgreSQL (Local)»
- `PERS-B-02` — «Multimedia Storage (File System)», almacén de archivos multimedia mediante sistema de archivos.  
  ← Structural / Repository bundles / `E1-RB-02` «Multimedia Storage (File System)»

Contrato de entrada declarado:

- `PERS-IN-01` — «Lectura/Escritura de archivos (File I/O)».  
  ← Structural / Data input interfaces to repository bundles / `E1-DIRB-01` «Lectura/Escritura de archivos (File I/O)»

Contratos de salida declarados:

- `PERS-OUT-01` — «Respuestas filas/registros desde la BD».  
  ← Structural / Data output interfaces from repository bundles / `E1-DORB-01` «Respuestas filas/registros desde la BD»
- `PERS-OUT-02` — «Consultas de archivos multimedia».  
  ← Structural / Data output interfaces from repository bundles / `E1-DORB-02` «Consultas de archivos multimedia»

El COM no declara una interfaz de entrada propia de la capa para los comandos dirigidos al almacén relacional; sólo declara el contrato de File I/O y, en la capa anterior, los comandos de lectura/escritura a BD.

#### Plataforma e infraestructura

Bundles:

- `PLAT-B-01` — «Configuracion de reverse proxy mediante Nginx».  
  ← Structural / Platform & Infrastructure bundles / `E1-PIB-01` «Configuracion de reverse proxy mediante Nginx»
- `PLAT-B-02` — «Configuracion de contenedores en Docker».  
  ← Structural / Platform & Infrastructure bundles / `E1-PIB-02` «Configuracion de contenedores en Docker»

Contratos de entrada de la capa:

- `PLAT-IN-01` — «Interfaces de red TCP/IP».  
  ← Structural / Data input interfaces to platform & infrastructure bundles / `E1-DIPI-01` «Interfaces de red TCP/IP»
- `PLAT-IN-02` — «Docker CLI».  
  ← Structural / Data input interfaces to platform & infrastructure bundles / `E1-DIPI-02` «Docker CLI»
- `PLAT-IN-03` — «Consola de Administracion».  
  ← Structural / Data input interfaces to platform & infrastructure bundles / `E1-DIPI-03` «Consola de Administracion»

Contratos de salida de la capa:

- `PLAT-OUT-01` — «Gestión de tráfico y balanceo».  
  ← Structural / Data output interfaces from platform & infrastructure bundles / `E1-DOPI-01` «Gestión de tráfico y balanceo»
- `PLAT-OUT-02` — «Logs del sistema».  
  ← Structural / Data output interfaces from platform & infrastructure bundles / `E1-DOPI-02` «Logs del sistema»

No se declaran puertos, rutas, topología de contenedores, algoritmo de balanceo, formato de logs ni asignación de cada contrato a un bundle.

#### Dispositivo

No existen bundles ni interfaces de entrada o salida en esta capa. Se registra como decisión del equipo: **sin software desplegado en dispositivo**, no como un componente omitido.

Secciones vacías:

- `Data input interfaces to device bundles`.
- `Device bundles`.
- `Data output interfaces from device bundles`.

### Restricciones de arquitectura

- `STR-CON-01` — La solución se despliega bajo la restricción «Despliegue On-premise». Es consistente con `R-ACC-03` / «Infraestructura on-premise» del Architectural Context.  
  ← Structural / Constraints / `E1-SCON-01` «Despliegue On-premise»
- `STR-CON-02` — La arquitectura queda sujeta a «Licenciamiento». Como el Structural no detalla la política, prevalecen `R-ACC-02` («Adopción exclusiva de herramientas Open-Source y académicas») y `P-ACC-07` («Uso de software gratuito»).  
  ← Structural / Constraints / `E1-SCON-02` «Licenciamiento»
- `STR-CON-03` — La arquitectura queda sujeta a «Restricciones de integracion externas». Como el Structural no identifica los límites, prevalece la restricción más específica `R-ACC-04`, derivada de «Sistema u-papers no expone API».  
  ← Structural / Constraints / `E1-SCON-03` «Restricciones de integracion externas»

### Cotejo con Architectural Context

| Decisión Structural | Referencia Architectural Context | Resultado |
|---|---|---|
| «PostgreSQL (Local)» | `LIM-ACC-03` — «BD relacionales PostgreSQL» | Consistente; “Local” también es compatible con `R-ACC-03`. |
| «Configuracion de reverse proxy mediante Nginx» | `LIM-ACC-02` — «Proxy Nginx» | Consistente. |
| «Configuracion de contenedores en Docker» | `LIM-ACC-04` — «Disponibilidad de contenedores Docker» | Consistente. |
| «Despliegue On-premise» | `R-ACC-03` — «Infraestructura on-premise» | Consistente. |
| «Licenciamiento» | `R-ACC-02` y `P-ACC-07` | Structural es incompleto; prevalece la política específica del Architectural Context. |
| «Restricciones de integracion externas» | `R-ACC-04` | Structural es incompleto; prevalece el límite específico del Architectural Context. |

No se detectan contradicciones explícitas.

### Censo de bundles

Censo total: **9 bundles**.

| # | Capa | Bundle exacto | Functional correspondiente |
|---|---|---|---|
| 1 | Presentación | «CMS Web Backoffice UI» | No identificado |
| 2 | Presentación | «Portal Web Público UI» | No identificado |
| 3 | Servicios | «Integracion consumidor de APIs» | `com/E1-functional-p7.json`; coincidencia literal en `E1-F7-BC-01` |
| 4 | Servicios | «Ingestor Worker (u-papers)» | `com/E1-functional-p9.json`; coincidencia literal en `E1-F9-BC-01` |
| 5 | Servicios | «CMS Gestor API» | `com/E1-functional-p10.json`; coincidencia literal en `E1-F10-BC-01` |
| 6 | Persistencia | «PostgreSQL (Local)» | No identificado |
| 7 | Persistencia | «Multimedia Storage (File System)» | No identificado |
| 8 | Plataforma | «Configuracion de reverse proxy mediante Nginx» | No identificado |
| 9 | Plataforma | «Configuracion de contenedores en Docker» | No identificado |

Cobertura Functional identificable: **3/9 bundles**.

`[NEEDS CLARIFICATION: falta detalle funcional de los bundles «CMS Web Backoffice UI», «Portal Web Público UI», «PostgreSQL (Local)», «Multimedia Storage (File System)», «Configuracion de reverse proxy mediante Nginx» y «Configuracion de contenedores en Docker».]`

## Contexto del bundle INT (Functional)

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

## Contexto del bundle ETL (Functional)

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

## Contexto del bundle CMS (Functional)

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

## Infraestructura y operación (Deployment)

### Infraestructura y operación — contexto dado

#### Entornos

- `PLAN-DEP-ENV-01` — «Entorno de Produccion». Es el único entorno declarado.  
  ← Deployment / Environments / `E1-ENV-01`

#### Unidades desplegables declaradas

- `DEP-BUN-01` — «Portal Web Publico UI».  
  ← Deployment / Bundles / `E1-BUN-01` «Portal Web Publico UI»
- `DEP-BUN-02` — «Ingestor Worker (u-papers)».  
  ← Deployment / Bundles / `E1-BUN-02` «Ingestor Worker (u-papers)»
- `DEP-BUN-03` — «CMS Gestor API».  
  ← Deployment / Bundles / `E1-BUN-03` «CMS Gestor API»
- `DEP-BUN-04` — «CMS Web Backoffice UI».  
  ← Deployment / Bundles / `E1-BUN-04` «CMS Web Backoffice UI»
- `DEP-BUN-05` — «Integracion consumidor de APIs».  
  ← Deployment / Bundles / `E1-BUN-05` «Integracion consumidor de APIs»

#### Middleware y runtimes

- `DEP-MID-01` — «Nginx».  
  ← Deployment / Middleware / `E1-MID-01` «Nginx»
- `DEP-MID-02` — «PostgreSQL».  
  ← Deployment / Middleware / `E1-MID-02` «PostgreSQL»
- `DEP-RUN-01` — «JRE/OpenJDK».  
  ← Deployment / Runtime / `E1-RUN-01` «JRE/OpenJDK»
- `DEP-RUN-02` — «Python runtime».  
  ← Deployment / Runtime / `E1-RUN-02` «Python runtime»
- `DEP-RUN-03` — «Node.js».  
  ← Deployment / Runtime / `E1-RUN-03` «Node.js»

El COM no asigna middleware ni runtimes a unidades desplegables concretas ni declara versiones.

#### Empaquetado y orquestación

- `DEP-ORCH-01` — «Docker Swarm».  
  ← Deployment / Orchestration & scheduling / `E1-ORCH-01` «Docker Swarm»
- `DEP-CR-01` — «Docker».  
  ← Deployment / Container runtimes / `E1-CR-01` «Docker»

No se declaran topología del clúster, réplicas, reglas de scheduling, actualización ni recuperación.

#### Sistema operativo y virtualización

- `DEP-OS-01` — «Linux».  
  ← Deployment / Operating systems / `E1-OS-01` «Linux»
- `DEP-VE-01` — «Plataforma de virtualización institucional».  
  ← Deployment / Virtualization engines / `E1-VE-01` «Plataforma de virtualización institucional»

`Cloud abstractions` está vacía. El vacío es coherente con la restricción local «Infraestructura On-Premise» y se registra como decisión, no como omisión silenciosa.

#### Topología física y de red

- `DEP-HW-01` — Hardware: «Servidores del DCC».  
  ← Deployment / Hardware / `E1-HW-01` «Servidores del DCC»
- `DEP-LOC-01` — Ubicación: «Dependencias de la Facultad».  
  ← Deployment / Locations / `E1-LOC-01` «Dependencias de la Facultad»
- `DEP-NET-01` — Red: «Red Interna de la Facultad».  
  ← Deployment / Networks / `E1-NET-01` «Red Interna de la Facultad»
- `DEP-NET-02` — Red: «Internet Pública».  
  ← Deployment / Networks / `E1-NET-02` «Internet Pública»
- `DEP-NET-03` — Red: «Red Institucional de la Universidad».  
  ← Deployment / Networks / `E1-NET-03` «Red Institucional de la Universidad»

No se declaran cantidades o capacidades de servidores, segmentos, rutas, puertos, reglas de acceso ni relación entre las tres redes.

#### Instalación y operación

- `PLAN-DEP-INST-01` — Responsable: «A cargo del Area de Sistemas».  
  ← Deployment / Installation / `E1-INST-01`
- `PLAN-DEP-INST-02` — Mecanismo: «Despliegue automatizado mediante Docker».  
  ← Deployment / Installation / `E1-INST-02` «Despliegue automatizado mediante Docker»
- `PLAN-DEP-INST-03` — Destino: «En nodos especificos de los servidores».  
  ← Deployment / Installation / `E1-INST-03`
- `PLAN-DEP-INST-04` — Verificación: «Verificación de ejecución en variantes de Linux».  
  ← Deployment / Installation / `E1-INST-04` «Verificación de ejecución en variantes de Linux»
- `PLAN-DEP-OP-01` — Operador: «Area de Sistemas».  
  ← Deployment / Operation / `E1-OP-01`

#### Restricciones

- `DEP-CON-01` — «Autenticación via u-pasaporte».  
  ← Deployment / Constraints / `E1-DCON-01` «Autenticación via u-pasaporte»
- `DEP-CON-02` — «Restricciones de licenciamiento».  
  ← Deployment / Constraints / `E1-DCON-02` «Restricciones de licenciamiento»
- `DEP-CON-03` — «Reutilizacion de plataforma».  
  ← Deployment / Constraints / `E1-DCON-03` «Reutilizacion de plataforma»
- `DEP-CON-04` — «Infraestructura On-Premise».  
  ← Deployment / Constraints / `E1-DCON-04` «Infraestructura On-Premise»
- `DEP-CON-05` — «Gobierno de la operacion».  
  ← Deployment / Constraints / `E1-DCON-05` «Gobierno de la operacion»

### Chequeo cruzado de bundles con Structural

| Unidad Deployment | Bundle Structural | Resultado |
|---|---|---|
| «Ingestor Worker (u-papers)» | «Ingestor Worker (u-papers)» | Coincidencia exacta |
| «CMS Gestor API» | «CMS Gestor API» | Coincidencia exacta |
| «CMS Web Backoffice UI» | «CMS Web Backoffice UI» | Coincidencia exacta |
| «Integracion consumidor de APIs» | «Integracion consumidor de APIs» | Coincidencia exacta |
| «Portal Web Publico UI» | «Portal Web Público UI» | Coincidencia probable; diferencia ortográfica de tilde, requiere confirmación |

Bundles del censo Structural ausentes de la sección `Bundles` de Deployment:

- «PostgreSQL (Local)».
- «Multimedia Storage (File System)».
- «Configuracion de reverse proxy mediante Nginx».
- «Configuracion de contenedores en Docker».

Las tecnologías PostgreSQL, Nginx y Docker aparecen en otras secciones del Deployment, pero eso no demuestra que las cuatro entradas anteriores sean unidades desplegables equivalentes. No se corrige la diferencia en silencio.

Resultado estricto:

- Censo Structural: `9`.
- Bundles Deployment: `5`.
- Coincidencias literales: `4`.
- Coincidencias probables por normalización ortográfica: `1`.
- Bundles Structural sin contraparte explícita en `Bundles`: `4`, más la variante ortográfica pendiente.
- Bundles genuinamente nuevos en Deployment después de normalizar la tilde: `0`.

### Ausencias operacionales esperables

El Deployment Canvas no declara:

- política, periodicidad, retención ni prueba de restauración de respaldos;
- monitoreo, métricas, umbrales o alertas de infraestructura;
- objetivo de disponibilidad, ventanas de mantenimiento o recuperación.

Estas ausencias se reportan para aclaración; no se inventan objetivos.
