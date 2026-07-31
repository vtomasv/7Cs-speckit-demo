# Mapeo 7Cs — Architectural Context — E1

Fuente única: `com/E1-architectural_context-p2.json`

## Fragmento para `/speckit.constitution`

### Objetivos y principios

- P-ACC-01 — La identidad digital DEBE alinearse con el «prestigio académico real». ← ACC / Business strategy `E1-BS-01` «Alinear la identidad digital con el prestigio académico real»
- P-ACC-02 — La organización DEBE perseguir «Mejorar la difusión institucional». [NEEDS CLARIFICATION: ¿medido cómo?, indicar métrica y línea base.] ← ACC / Business strategy `E1-BS-02` «Mejorar la difusión institucional»
- P-ACC-03 — Los contenidos DEBEN administrarse de forma centralizada y eficiente. ← ACC / Business strategy `E1-BS-03` «Gestionar contenidos de manera centralizada y eficiente»
- P-ACC-04 — La plataforma DEBE ser tecnológicamente centralizada. ← ACC / IT strategy `E1-ITS-01` «Proveer una plataforma tecnológica centralizada»
- P-ACC-05 — El control de la arquitectura DEBE mantenerse centralizado. ← ACC / IT strategy `E1-ITS-02` «Gestionar el control sobre la arquitectura»
- P-ACC-06 — La plataforma DEBE facilitar la operación y la gestión proactiva. ← ACC / IT strategy `E1-ITS-03` «La plataforma facilite la operación y la gestión proactiva»
- P-ACC-07 — El proyecto DEBE preservar el «Uso de software gratuito». ← ACC / Business principles `E1-BPR-01` «Uso de software gratuito»
- P-ACC-08 — La proyección digital DEBE ser dinámica y centralizada. ← ACC / Business principles `E1-BPR-02` «Proyección digital dinámica y centralizada»
- P-ACC-09 — El desarrollo DEBE seguir el principio «Desarrollo Global». [NEEDS CLARIFICATION: alcance y significado operativo de “Global”.] ← ACC / Technical principles `E1-TPR-01` «Desarrollo Global»
- P-ACC-10 — El desarrollo DEBE ser incremental. ← ACC / Technical principles `E1-TPR-02` «Desarrollo Incremental»
- P-ACC-11 — El equipo DEBE conservar libertad para elegir la metodología de desarrollo. ← ACC / Technical principles `E1-TPR-03` «Libertad en la metodologia a utilizar en el desarrollo de aplicaciones»
- P-ACC-12 — El gobierno de las aplicaciones DEBE permanecer centralizado. ← ACC / Technical principles `E1-TPR-04` «Gobierno centralizado de aplicaciones»
- P-ACC-13 — Las lecturas rápidas DEBEN apoyarse en «Consistencia eventual (Decoupling)». ← ACC / Technical principles `E1-TPR-05` «Consistencia eventual (Decoupling) para lectura rápida»

### Límites técnicos no negociables

- LIM-ACC-01 — «Servidores de tipo Linux». ← ACC / Technology standards & policies `E1-TSP-02`
- LIM-ACC-02 — «Proxy Nginx». ← ACC / Technology standards & policies `E1-TSP-03`
- LIM-ACC-03 — «BD relacionales PostgreSQL». ← ACC / Technology standards & policies `E1-TSP-04`
- LIM-ACC-04 — «Disponibilidad de contenedores Docker». ← ACC / Technology standards & policies `E1-TSP-06`

Estos límites son contexto impuesto por la organización; no se trasladan al fragmento de especificación.

## Fragmento para `/speckit.specify`

### Validadores de aceptación

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

### Criterios de éxito

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

### Requisitos no funcionales

#### NFR-ACC-01 — Estandarización tecnológica observable

El ecosistema DEBE aplicar criterios de estandarización verificables a sus integraciones.

[NEEDS CLARIFICATION: estándares aplicables, componentes cubiertos y evidencia de conformidad no declarados.]

← ACC / Technology goals & drivers `E1-TGD-02` «Solucionar la falta de estandarizacion tecnológica»

#### NFR-ACC-02 — Gobierno de la operación

La operación DEBE permanecer bajo control del área organizacional responsable de sistemas.

← ACC / Technology standards & policies `E1-TSP-01` «El área de sistemas mantiene el control total de la operacion»

#### NFR-ACC-03 — Identidad institucional

La autenticación DEBE realizarse mediante el sistema institucional de identidad.

[NEEDS CLARIFICATION: perfiles obligados a autenticarse, flujos cubiertos y comportamiento ante indisponibilidad.]

← ACC / Technology standards & policies `E1-TSP-05`; texto literal y producto concreto preservados en el contexto para `/speckit.plan`

### Restricciones

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

## Contexto para `/speckit.plan` — dado por la organización

- PLAN-ACC-01 — «El área de sistemas mantiene el control total de la operacion». ← ACC / Technology standards & policies `E1-TSP-01`
- PLAN-ACC-02 — «Servidores de tipo Linux». ← ACC / Technology standards & policies `E1-TSP-02`
- PLAN-ACC-03 — «Proxy Nginx». ← ACC / Technology standards & policies `E1-TSP-03`
- PLAN-ACC-04 — «BD relacionales PostgreSQL». ← ACC / Technology standards & policies `E1-TSP-04`
- PLAN-ACC-05 — «Autenticación a traves del sistema u-pasaporte». En `spec` se anonimiza como sistema institucional de identidad. ← ACC / Technology standards & policies `E1-TSP-05`
- PLAN-ACC-06 — «Disponibilidad de contenedores Docker». ← ACC / Technology standards & policies `E1-TSP-06`
- PLAN-ACC-07 — «Infraestructura on-premise». ← ACC / Situational constraints `E1-SC-01`
- PLAN-ACC-08 — «Sistema u-papers no expone API». ← ACC / Situational constraints `E1-SC-02`

## Aclaraciones

1. [NEEDS CLARIFICATION: System, Organization, Canvas, Version y Date están vacíos; confirmar identificación y versión del artefacto.]
2. [NEEDS CLARIFICATION: asignar qué stakeholders validan cada requisito.]
3. [NEEDS CLARIFICATION: métrica y línea base de «Mejorar la difusión institucional».]
4. [NEEDS CLARIFICATION: métrica, línea base y objetivo de CE-ACC-01.]
5. [NEEDS CLARIFICATION: métricas, líneas base y objetivos de acceso y navegación para CE-ACC-02.]
6. [NEEDS CLARIFICATION: definición, métrica, línea base y objetivo de duplicidad para CE-ACC-03.]
7. [NEEDS CLARIFICATION: procesos incluidos, métrica, línea base y objetivo para CE-ACC-04.]
8. [NEEDS CLARIFICATION: definición, métrica, línea base y objetivo de inconsistencia para CE-ACC-05.]
9. [NEEDS CLARIFICATION: objeto, audiencia, métrica, línea base y objetivo de visibilidad para CE-ACC-06.]
10. [NEEDS CLARIFICATION: alcance, métrica, línea base y objetivo de integración para CE-ACC-07.]
11. [NEEDS CLARIFICATION: estándares, alcance y evidencia de conformidad para NFR-ACC-01.]
12. [NEEDS CLARIFICATION: perfiles, flujos y comportamiento ante indisponibilidad del sistema institucional de identidad.]
13. [NEEDS CLARIFICATION: significado, período y cambios permitidos de «Equipos de desarrollo inalterables».]
14. [NEEDS CLARIFICATION: mecanismo compensatorio, formato, responsable y frecuencia para R-ACC-04.]
15. [NEEDS CLARIFICATION: alcance y significado operativo de «Desarrollo Global».]

## Trazas

| sticky_id | section | target_id |
|---|---|---|
| E1-SH-01 | Stakeholders | spec.validadores.VAL-01 |
| E1-SH-02 | Stakeholders | spec.validadores.VAL-02 |
| E1-SH-03 | Stakeholders | spec.validadores.VAL-03 |
| E1-SH-04 | Stakeholders | spec.validadores.VAL-04 |
| E1-SH-05 | Stakeholders | spec.validadores.VAL-05 |
| E1-SH-06 | Stakeholders | spec.validadores.VAL-06 |
| E1-SH-07 | Stakeholders | spec.validadores.VAL-07 |
| E1-SH-08 | Stakeholders | spec.validadores.VAL-08 |
| E1-SH-09 | Stakeholders | spec.validadores.Público-general.VAL-09 |
| E1-SH-10 | Stakeholders | spec.validadores.Público-general.VAL-10 |
| E1-SH-11 | Stakeholders | spec.validadores.Público-general.VAL-11 |
| E1-BS-01 | Business strategy | constitution.P-ACC-01 |
| E1-BS-02 | Business strategy | constitution.P-ACC-02 |
| E1-BS-03 | Business strategy | constitution.P-ACC-03 |
| E1-ITS-01 | IT strategy | constitution.P-ACC-04 |
| E1-ITS-02 | IT strategy | constitution.P-ACC-05 |
| E1-ITS-03 | IT strategy | constitution.P-ACC-06 |
| E1-BGD-01 | Business goals & drivers | spec.criterios-exito.CE-ACC-01 |
| E1-BGD-02 | Business goals & drivers | spec.criterios-exito.CE-ACC-02 |
| E1-BGD-03 | Business goals & drivers | spec.criterios-exito.CE-ACC-03 |
| E1-BGD-04 | Business goals & drivers | spec.criterios-exito.CE-ACC-04 |
| E1-BGD-05 | Business goals & drivers | spec.criterios-exito.CE-ACC-05 |
| E1-BGD-06 | Business goals & drivers | spec.criterios-exito.CE-ACC-06 |
| E1-TGD-01 | Technology goals & drivers | spec.criterios-exito.CE-ACC-07 |
| E1-TGD-02 | Technology goals & drivers | spec.nfr.NFR-ACC-01 |
| E1-BSP-01 | Business standards & policies | spec.restricciones.R-ACC-01 |
| E1-BSP-02 | Business standards & policies | spec.restricciones.R-ACC-02 |
| E1-TSP-01 | Technology standards & policies | spec.nfr.NFR-ACC-02 + plan.PLAN-ACC-01 |
| E1-TSP-02 | Technology standards & policies | constitution.LIM-ACC-01 + plan.PLAN-ACC-02 |
| E1-TSP-03 | Technology standards & policies | constitution.LIM-ACC-02 + plan.PLAN-ACC-03 |
| E1-TSP-04 | Technology standards & policies | constitution.LIM-ACC-03 + plan.PLAN-ACC-04 |
| E1-TSP-05 | Technology standards & policies | spec.nfr.NFR-ACC-03 + plan.PLAN-ACC-05 |
| E1-TSP-06 | Technology standards & policies | constitution.LIM-ACC-04 + plan.PLAN-ACC-06 |
| E1-SC-01 | Situational constraints | spec.restricciones.R-ACC-03 + plan.PLAN-ACC-07 |
| E1-SC-02 | Situational constraints | spec.restricciones.R-ACC-04 + plan.PLAN-ACC-08 |
| E1-BPR-01 | Business principles | constitution.P-ACC-07 |
| E1-BPR-02 | Business principles | constitution.P-ACC-08 |
| E1-TPR-01 | Technical principles | constitution.P-ACC-09 |
| E1-TPR-02 | Technical principles | constitution.P-ACC-10 |
| E1-TPR-03 | Technical principles | constitution.P-ACC-11 |
| E1-TPR-04 | Technical principles | constitution.P-ACC-12 |
| E1-TPR-05 | Technical principles | constitution.P-ACC-13 |

## Balance

13 principios · 4 límites técnicos constitucionales · 7 criterios de éxito · 3 NFR · 4 restricciones · 8 entradas de contexto para plan · 15 aclaraciones · 42 post-it en 10 secciones · 42 trazas.
