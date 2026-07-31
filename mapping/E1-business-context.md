# Mapeo 7Cs — Business Context — E1

Fuente única: `com/E1-business_context-p1.json`

## Fragmento para `/speckit.constitution`

Propósito: «Proyección de identidad y prestigio institucional» mediante la «Difusión de contenidos para la comunidad» en un «Sitio web de contenido dinámico y centralizado».

← BCC / Business products & services (3 post-it: `E1-BPS-01`, `E1-BPS-02`, `E1-BPS-03`)

## Fragmento para `/speckit.specify`

### Contexto

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

### Perfiles de usuario

- PER-01 — «Coordinador académico». Permisos por confirmar. ← BCC / Business roles `E1-BR-01`
- PER-02 — «Comité editorial». Permisos por confirmar. ← BCC / Business roles `E1-BR-02`
- PER-03 — «Periodista». Permisos por confirmar. ← BCC / Business roles `E1-BR-03`
- PER-04 — «Diseñador grafico». Permisos por confirmar. ← BCC / Business roles `E1-BR-04`
- PER-05 — «Estudiantes,memoristas,tesistas,expertos». Permisos y cardinalidad del perfil por confirmar. ← BCC / Business roles `E1-BR-05`
- PER-06 — «Académicos e Investigadores». Permisos y cardinalidad del perfil por confirmar. ← BCC / Business roles `E1-BR-06`

[NEEDS CLARIFICATION: permisos de cada perfil no declarados en el canvas]

← BCC / Business roles (6 post-it)

### Entidades clave

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

### Escenarios de usuario derivados de procesos de negocio

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

### Agrupadores de requisitos

- EP-01 — «Gestión de noticias y eventos». ← BCC / Business functions `E1-BF-01`
- EP-02 — «Gestión de fotos, videos y prensa». ← BCC / Business functions `E1-BF-02`
- EP-03 — «Gestión de blog y entradas». ← BCC / Business functions `E1-BF-03`
- EP-04 — «Gestión de informacion de funcionarios». ← BCC / Business functions `E1-BF-04`
- EP-05 — «Vinculación con el medio». ← BCC / Business functions `E1-BF-05`
- EP-06 — «Atracción de talento». ← BCC / Business functions `E1-BF-06`

Estos nombres estructuran requisitos posteriores; por sí solos no crean obligaciones.

← BCC / Business functions (6 post-it)

### Índice de requisitos

Todo requisito funcional posterior debe pertenecer a una de estas áreas o justificar una nueva:

1. AREA-01 — «Difusión de noticias y eventos». ← BCC / System's functional areas `E1-SFA-01`
2. AREA-02 — «Interacciones del blog». ← BCC / System's functional areas `E1-SFA-02`
3. AREA-03 — «Gestión de fotos, videos y apariciones en prensa». ← BCC / System's functional areas `E1-SFA-03`
4. AREA-04 — «Indicadores de rendimiento del DCC». ← BCC / System's functional areas `E1-SFA-04`
5. AREA-05 — «Información de funcionarios». ← BCC / System's functional areas `E1-SFA-05`

← BCC / System's functional areas (5 post-it)

## Aclaraciones

1. [NEEDS CLARIFICATION: System, Organization, Canvas, Version y Date están vacíos; confirmar la identificación y versión del artefacto.]
2. [NEEDS CLARIFICATION: permisos de PER-01 a PER-06 no declarados.]
3. [NEEDS CLARIFICATION: confirmar si «Estudiantes,memoristas,tesistas,expertos» representa un perfil compuesto o perfiles separados.]
4. [NEEDS CLARIFICATION: confirmar si «Académicos e Investigadores» representa un perfil compuesto o perfiles separados.]
5. [NEEDS CLARIFICATION: atributos e identidad individual o compuesta de ENT-01 a ENT-08 no declarados.]
6. [NEEDS CLARIFICATION: perfil responsable, precondiciones, resultados verificables y comportamiento de error de ESC-01 a ESC-07 no declarados.]

## Trazas

| sticky_id | section | target_id |
|---|---|---|
| E1-BPS-01 | Business products & services | constitution.propósito + spec.contexto.propósito |
| E1-BPS-02 | Business products & services | constitution.propósito + spec.contexto.propósito |
| E1-BPS-03 | Business products & services | constitution.propósito + spec.contexto.propósito |
| E1-BUA-01 | Business units & actors | spec.contexto.actores.ACT-01 |
| E1-BUA-02 | Business units & actors | spec.contexto.actores.ACT-02 |
| E1-BUA-03 | Business units & actors | spec.contexto.actores.ACT-03 |
| E1-BUA-04 | Business units & actors | spec.contexto.actores.ACT-04 |
| E1-BUA-05 | Business units & actors | spec.contexto.actores.ACT-05 |
| E1-BUA-06 | Business units & actors | spec.contexto.actores.Público-general.ACT-06 |
| E1-BUA-07 | Business units & actors | spec.contexto.actores.Público-general.ACT-07 |
| E1-BUA-08 | Business units & actors | spec.contexto.actores.Público-general.ACT-08 |
| E1-BR-01 | Business roles | spec.perfiles.PER-01 |
| E1-BR-02 | Business roles | spec.perfiles.PER-02 |
| E1-BR-03 | Business roles | spec.perfiles.PER-03 |
| E1-BR-04 | Business roles | spec.perfiles.PER-04 |
| E1-BR-05 | Business roles | spec.perfiles.PER-05 |
| E1-BR-06 | Business roles | spec.perfiles.PER-06 |
| E1-BO-01 | Business objects | spec.entidades.ENT-01 |
| E1-BO-02 | Business objects | spec.entidades.ENT-02 |
| E1-BO-03 | Business objects | spec.entidades.ENT-03 |
| E1-BO-04 | Business objects | spec.entidades.ENT-04 |
| E1-BO-05 | Business objects | spec.entidades.ENT-05 |
| E1-BO-06 | Business objects | spec.entidades.ENT-06 |
| E1-BO-07 | Business objects | spec.entidades.ENT-07 |
| E1-BO-08 | Business objects | spec.entidades.ENT-08 |
| E1-BP-01 | Business processes | spec.escenarios.ESC-01 |
| E1-BP-02 | Business processes | spec.escenarios.ESC-02 |
| E1-BP-03 | Business processes | spec.escenarios.ESC-03 |
| E1-BP-04 | Business processes | spec.escenarios.ESC-04 |
| E1-BP-05 | Business processes | spec.escenarios.ESC-05 |
| E1-BP-06 | Business processes | spec.escenarios.ESC-06 |
| E1-BP-07 | Business processes | spec.escenarios.ESC-07 |
| E1-BF-01 | Business functions | spec.agrupadores.EP-01 |
| E1-BF-02 | Business functions | spec.agrupadores.EP-02 |
| E1-BF-03 | Business functions | spec.agrupadores.EP-03 |
| E1-BF-04 | Business functions | spec.agrupadores.EP-04 |
| E1-BF-05 | Business functions | spec.agrupadores.EP-05 |
| E1-BF-06 | Business functions | spec.agrupadores.EP-06 |
| E1-BIE-01 | Business infrastructure & equipment | spec.contexto.canales.CAN-01 |
| E1-BIE-02 | Business infrastructure & equipment | spec.contexto.canales.CAN-02 |
| E1-BL-01 | Business locations | spec.contexto.ubicaciones.UBI-01 |
| E1-BL-02 | Business locations | spec.contexto.ubicaciones.UBI-02 |
| E1-BL-03 | Business locations | spec.contexto.ubicaciones.UBI-03 |
| E1-BFA-01 | Business facilities | spec.contexto.instalaciones.FAC-01 |
| E1-BFA-02 | Business facilities | spec.contexto.instalaciones.FAC-02 |
| E1-SFA-01 | System's functional areas | spec.indice-requisitos.AREA-01 |
| E1-SFA-02 | System's functional areas | spec.indice-requisitos.AREA-02 |
| E1-SFA-03 | System's functional areas | spec.indice-requisitos.AREA-03 |
| E1-SFA-04 | System's functional areas | spec.indice-requisitos.AREA-04 |
| E1-SFA-05 | System's functional areas | spec.indice-requisitos.AREA-05 |

## Balance

50 post-it · 10 rótulos físicos en 9 destinos conceptuales · 7 escenarios · 8 entidades · 6 perfiles · 5 áreas del índice · 6 aclaraciones · 50 trazas · 0 requisitos funcionales numerados.
