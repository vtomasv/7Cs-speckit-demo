# Mapeo 7Cs — Structural Canvas — E1

Fuente única: `com/E1-structural-p6.json` (`structural`, página 6, plantilla `7Cs v1.1 June 2026`).

## Fragmento para `/speckit.plan` — contexto dado, no elegido

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

## Control de destino

Este canvas produce exclusivamente contexto para `/speckit.plan`. **No se emite ningún fragmento para `spec.md` ni se convierte ninguna tecnología en requisito funcional o no funcional.**

## Dudas `[NEEDS CLARIFICATION]`

1. `[NEEDS CLARIFICATION]` Los cinco campos de cabecera (`System`, `Organization`, `Canvas`, `Version` y `Date`) están vacíos; confirmar la identificación y versión del artefacto.
2. `[NEEDS CLARIFICATION]` Asignar cada perfil de entrada y cada salida de presentación a «CMS Web Backoffice UI» o «Portal Web Público UI».
3. `[NEEDS CLARIFICATION]` Asignar las entradas y salidas de servicios a cada backend bundle y aclarar por qué «Respuestas de datos JSON» figura como entrada de backend.
4. `[NEEDS CLARIFICATION]` Definir la interfaz de entrada al almacén relacional y confirmar la asociación de cada contrato de persistencia con PostgreSQL o el sistema de archivos.
5. `[NEEDS CLARIFICATION]` Definir puertos, rutas, topología de contenedores, balanceo, formato/retención de logs y asociación de interfaces a los bundles de plataforma.
6. `[NEEDS CLARIFICATION]` Precisar «Licenciamiento»; mientras tanto prevalecen las herramientas abiertas, académicas o gratuitas exigidas por Architectural Context.
7. `[NEEDS CLARIFICATION]` Precisar «Restricciones de integracion externas»; mientras tanto prevalece la limitación concreta de `R-ACC-04`.
8. `[NEEDS CLARIFICATION]` Falta un Functional identificable para seis bundles: «CMS Web Backoffice UI», «Portal Web Público UI», «PostgreSQL (Local)», «Multimedia Storage (File System)», «Configuracion de reverse proxy mediante Nginx» y «Configuracion de contenedores en Docker».

## Anexo de trazabilidad

| sticky_id | section | target_id |
|---|---|---|
| `E1-DIFB-01` | Data input interfaces to frontend bundles | `plan.presentation.inputs.PRES-IN-01` |
| `E1-DIFB-02` | Data input interfaces to frontend bundles | `plan.presentation.inputs.PRES-IN-02` |
| `E1-DIFB-03` | Data input interfaces to frontend bundles | `plan.presentation.inputs.PRES-IN-03` |
| `E1-DIFB-04` | Data input interfaces to frontend bundles | `plan.presentation.inputs.PRES-IN-04` |
| `E1-FB-01` | Frontend bundles | `plan.presentation.bundles.PRES-B-01` |
| `E1-FB-02` | Frontend bundles | `plan.presentation.bundles.PRES-B-02` |
| `E1-DOFFB-01` | Data output interfaces from frontend bundles | `plan.presentation.outputs.PRES-OUT-01` |
| `E1-DOFFB-02` | Data output interfaces from frontend bundles | `plan.presentation.outputs.PRES-OUT-02` |
| `E1-DIBB-01` | Data input interfaces to backend bundles | `plan.services.inputs.SERV-IN-01` |
| `E1-DIBB-02` | Data input interfaces to backend bundles | `plan.services.inputs.SERV-IN-02` |
| `E1-BB-01` | Backend bundles | `plan.services.bundles.SERV-B-01` |
| `E1-BB-02` | Backend bundles | `plan.services.bundles.SERV-B-02` |
| `E1-BB-03` | Backend bundles | `plan.services.bundles.SERV-B-03` |
| `E1-DOBB-01` | Data output interfaces from backend bundles | `plan.services.outputs.SERV-OUT-01` |
| `E1-DOBB-02` | Data output interfaces from backend bundles | `plan.services.outputs.SERV-OUT-02` |
| `E1-DIRB-01` | Data input interfaces to repository bundles | `plan.persistence.inputs.PERS-IN-01` |
| `E1-RB-01` | Repository bundles | `plan.persistence.bundles.PERS-B-01` |
| `E1-RB-02` | Repository bundles | `plan.persistence.bundles.PERS-B-02` |
| `E1-DORB-01` | Data output interfaces from repository bundles | `plan.persistence.outputs.PERS-OUT-01` |
| `E1-DORB-02` | Data output interfaces from repository bundles | `plan.persistence.outputs.PERS-OUT-02` |
| `E1-DIPI-01` | Data input interfaces to platform & infrastructure bundles | `plan.platform.inputs.PLAT-IN-01` |
| `E1-DIPI-02` | Data input interfaces to platform & infrastructure bundles | `plan.platform.inputs.PLAT-IN-02` |
| `E1-DIPI-03` | Data input interfaces to platform & infrastructure bundles | `plan.platform.inputs.PLAT-IN-03` |
| `E1-PIB-01` | Platform & Infrastructure bundles | `plan.platform.bundles.PLAT-B-01` |
| `E1-PIB-02` | Platform & Infrastructure bundles | `plan.platform.bundles.PLAT-B-02` |
| `E1-DOPI-01` | Data output interfaces from platform & infrastructure bundles | `plan.platform.outputs.PLAT-OUT-01` |
| `E1-DOPI-02` | Data output interfaces from platform & infrastructure bundles | `plan.platform.outputs.PLAT-OUT-02` |
| `E1-SCON-01` | Constraints | `plan.constraints.STR-CON-01` |
| `E1-SCON-02` | Constraints | `plan.constraints.STR-CON-02` |
| `E1-SCON-03` | Constraints | `plan.constraints.STR-CON-03` |

## Balance

- Filas esperadas verificadas: `16/16` (5 capas × entrada/bundle/salida, más `Constraints`).
- Post-its del COM: `30`.
- Trazas emitidas: `30`.
- Bundles censados: `9` — presentación `2`, servicios `3`, persistencia `2`, plataforma `2`, dispositivo `0`.
- Functional identificables: `3/9`.
- Bundles sin Functional identificable: `6`.
- Secciones vacías: `3`, todas pertenecientes a la capa de dispositivo y agrupadas como una decisión.
- Contradicciones con Architectural Context: `0`.
- Dudas `[NEEDS CLARIFICATION]`: `8`.
- Contenido emitido para `spec.md`: `0`.
