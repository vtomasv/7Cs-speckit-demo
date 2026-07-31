# Mapeo 7Cs — Deployment Canvas — E1

Fuente única: `com/E1-deployment-p8.json` (`deployment`, página 8, plantilla `7Cs v1.1 June 2026`).

## Fragmento para `/speckit.specify`

Sólo se incluyen condiciones operacionales observables. Los productos, runtimes, redes, hardware y decisiones de topología permanecen en `/speckit.plan`.

### Requisitos no funcionales de operación

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

## Fragmento para `/speckit.plan`

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

## Dudas `[NEEDS CLARIFICATION]`

1. `[NEEDS CLARIFICATION]` Los cinco campos de cabecera (`System`, `Organization`, `Canvas`, `Version` y `Date`) están vacíos; confirmar identificación y versión.
2. `[NEEDS CLARIFICATION: entornos de prueba]` Sólo se declara producción; definir entornos adicionales y proceso de promoción.
3. `[NEEDS CLARIFICATION]` Confirmar si «Portal Web Publico UI» y «Portal Web Público UI» son el mismo bundle.
4. `[NEEDS CLARIFICATION]` Explicar por qué cuatro bundles Structural no aparecen como unidades desplegables: «PostgreSQL (Local)», «Multimedia Storage (File System)», «Configuracion de reverse proxy mediante Nginx» y «Configuracion de contenedores en Docker».
5. `[NEEDS CLARIFICATION]` Asignar middleware y runtimes a cada unidad desplegable y declarar versiones admitidas.
6. `[NEEDS CLARIFICATION]` Definir nodos, réplicas, scheduling, actualización y recuperación de la orquestación y los contenedores.
7. `[NEEDS CLARIFICATION]` Definir variantes y versiones del sistema operativo que deben verificarse.
8. `[NEEDS CLARIFICATION]` Identificar la plataforma de virtualización institucional y sus límites relevantes.
9. `[NEEDS CLARIFICATION]` Definir nodos específicos, cantidades, capacidades y criterios autorizados para cambiarlos.
10. `[NEEDS CLARIFICATION]` Definir segmentos, rutas, puertos, reglas de acceso y relación entre las tres redes.
11. `[NEEDS CLARIFICATION]` Definir artefactos, validaciones, rollback, idempotencia y evidencia del despliegue automatizado.
12. `[NEEDS CLARIFICATION]` Definir responsabilidades, permisos, cobertura y escalamiento del Área de Sistemas para instalación y operación.
13. `[NEEDS CLARIFICATION]` Precisar restricciones de licenciamiento, alcance de reutilización de plataforma y reglas de gobierno de la operación.
14. `[NEEDS CLARIFICATION]` Definir perfiles cubiertos y comportamiento ante indisponibilidad de la autenticación institucional.
15. `[NEEDS CLARIFICATION]` Definir política, periodicidad, retención y pruebas de restauración de respaldos.
16. `[NEEDS CLARIFICATION]` Definir monitoreo, métricas, umbrales y alertas de infraestructura.
17. `[NEEDS CLARIFICATION]` Definir objetivo de disponibilidad, ventanas de mantenimiento y recuperación.

## Anexo de trazabilidad

| sticky_id | section | target_id |
|---|---|---|
| `E1-ENV-01` | Environments | `spec.NFR-OP-001` |
| `E1-BUN-01` | Bundles | `plan.bundles.DEP-BUN-01` |
| `E1-BUN-02` | Bundles | `plan.bundles.DEP-BUN-02` |
| `E1-BUN-03` | Bundles | `plan.bundles.DEP-BUN-03` |
| `E1-BUN-04` | Bundles | `plan.bundles.DEP-BUN-04` |
| `E1-BUN-05` | Bundles | `plan.bundles.DEP-BUN-05` |
| `E1-MID-01` | Middleware | `plan.middleware.DEP-MID-01` |
| `E1-MID-02` | Middleware | `plan.middleware.DEP-MID-02` |
| `E1-RUN-01` | Runtime | `plan.runtime.DEP-RUN-01` |
| `E1-RUN-02` | Runtime | `plan.runtime.DEP-RUN-02` |
| `E1-RUN-03` | Runtime | `plan.runtime.DEP-RUN-03` |
| `E1-ORCH-01` | Orchestration & scheduling | `plan.orchestration.DEP-ORCH-01` |
| `E1-CR-01` | Container runtimes | `plan.containers.DEP-CR-01` |
| `E1-OS-01` | Operating systems | `plan.os.DEP-OS-01` |
| `E1-VE-01` | Virtualization engines | `plan.virtualization.DEP-VE-01` |
| `E1-HW-01` | Hardware | `plan.topology.DEP-HW-01` |
| `E1-LOC-01` | Locations | `plan.topology.DEP-LOC-01` |
| `E1-NET-01` | Networks | `plan.topology.DEP-NET-01` |
| `E1-NET-02` | Networks | `plan.topology.DEP-NET-02` |
| `E1-NET-03` | Networks | `plan.topology.DEP-NET-03` |
| `E1-INST-01` | Installation | `spec.NFR-OP-002` |
| `E1-INST-02` | Installation | `spec.NFR-OP-003` |
| `E1-INST-03` | Installation | `spec.NFR-OP-004` |
| `E1-INST-04` | Installation | `spec.NFR-OP-005` |
| `E1-OP-01` | Operation | `spec.NFR-OP-006` |
| `E1-DCON-01` | Constraints | `plan.constraints.DEP-CON-01` |
| `E1-DCON-02` | Constraints | `plan.constraints.DEP-CON-02` |
| `E1-DCON-03` | Constraints | `plan.constraints.DEP-CON-03` |
| `E1-DCON-04` | Constraints | `plan.constraints.DEP-CON-04` |
| `E1-DCON-05` | Constraints | `plan.constraints.DEP-CON-05` |

## Balance

- Secciones esperadas verificadas: `15/15`.
- Post-its del COM: `30`.
- Trazas emitidas: `30`.
- Destinos principales en `/speckit.plan`: `24`.
- NFR operacionales en `/speckit.specify`: `6`.
- Nombres de producto en el fragmento de `spec`: `0`.
- Secciones vacías: `1` — `Cloud abstractions`, coherente con on-premise.
- Coincidencias exactas Deployment ↔ Structural: `4`; una probable por tilde.
- Bundles Structural sin contraparte explícita: `4`, más la variante ortográfica pendiente.
- Ausencias operacionales reportadas: respaldo, monitoreo y disponibilidad.
- Dudas `[NEEDS CLARIFICATION]`: `17`.
