/speckit.clarify

# Entrega E1 — dudas abiertas ordenadas por impacto

No resolver por inferencia. Registrar cada respuesta en la especificación y volver a ejecutar la auditoría antes de `/speckit.plan`.

## Prioridad 1 — alcance, identidad y cobertura

1. (Architectural Context) [NEEDS CLARIFICATION: asignar qué stakeholders validan cada requisito.]
2. (Architectural Context) [NEEDS CLARIFICATION: alcance, métrica, línea base y objetivo de integración para CE-ACC-07.]
3. (Architectural Context) [NEEDS CLARIFICATION: estándares, alcance y evidencia de conformidad para NFR-ACC-01.]
4. (Architectural Context) [NEEDS CLARIFICATION: perfiles, flujos y comportamiento ante indisponibilidad del sistema institucional de identidad.]
5. (Architectural Context) [NEEDS CLARIFICATION: alcance y significado operativo de «Desarrollo Global».]
6. (Business Context) [NEEDS CLARIFICATION: confirmar si «Estudiantes,memoristas,tesistas,expertos» representa un perfil compuesto o perfiles separados.]
7. (Business Context) [NEEDS CLARIFICATION: confirmar si «Académicos e Investigadores» representa un perfil compuesto o perfiles separados.]
8. (Business Context) [NEEDS CLARIFICATION: perfil responsable, precondiciones, resultados verificables y comportamiento de error de ESC-01 a ESC-07 no declarados.]
9. (Composición / BCC) [NEEDS CLARIFICATION: el canvas no declara qué sistema o proceso existente reemplaza.]
10. (Deployment) `[NEEDS CLARIFICATION: entornos de prueba]` Sólo se declara producción; definir entornos adicionales y proceso de promoción.
11. (Deployment) `[NEEDS CLARIFICATION]` Confirmar si «Portal Web Publico UI» y «Portal Web Público UI» son el mismo bundle.
12. (Deployment) `[NEEDS CLARIFICATION]` Explicar por qué cuatro bundles Structural no aparecen como unidades desplegables: «PostgreSQL (Local)», «Multimedia Storage (File System)», «Configuracion de reverse proxy mediante Nginx» y «Configuracion de contenedores en Docker».
13. (Deployment) `[NEEDS CLARIFICATION]` Asignar middleware y runtimes a cada unidad desplegable y declarar versiones admitidas.
14. (Deployment) `[NEEDS CLARIFICATION]` Precisar restricciones de licenciamiento, alcance de reutilización de plataforma y reglas de gobierno de la operación.
15. (Deployment) `[NEEDS CLARIFICATION]` Definir perfiles cubiertos y comportamiento ante indisponibilidad de la autenticación institucional.
16. (Functional CMS) `[NEEDS CLARIFICATION]` Definir contrato del callback, correlación con la redirección, expiración, creación de sesión y respuestas de rechazo/error.
17. (Functional CMS) `[NEEDS CLARIFICATION]` Definir perfiles obligados a usar identidad institucional y comportamiento ante indisponibilidad.
18. (Functional INT) `[NEEDS CLARIFICATION]` Confirmar la dirección de las tres entradas «Query request»: quién inicia cada solicitud, qué recibe el bundle y qué salida observable produce.
19. (Structural) `[NEEDS CLARIFICATION]` Asignar cada perfil de entrada y cada salida de presentación a «CMS Web Backoffice UI» o «Portal Web Público UI».
20. (Structural) `[NEEDS CLARIFICATION]` Asignar las entradas y salidas de servicios a cada backend bundle y aclarar por qué «Respuestas de datos JSON» figura como entrada de backend.
21. (Structural) `[NEEDS CLARIFICATION]` Definir puertos, rutas, topología de contenedores, balanceo, formato/retención de logs y asociación de interfaces a los bundles de plataforma.
22. (Structural + Functional) [NEEDS CLARIFICATION: falta detalle funcional de los bundles «CMS Web Backoffice UI», «Portal Web Público UI», «PostgreSQL (Local)», «Multimedia Storage (File System)», «Configuracion de reverse proxy mediante Nginx» y «Configuracion de contenedores en Docker».]
23. (System Context) `[NEEDS CLARIFICATION]` Indicar qué actor de origen utiliza cada interfaz de entrada de usuario y qué actor de destino recibe cada salida; la grilla no define asociaciones uno-a-uno.
24. (System Context) `[NEEDS CLARIFICATION]` Precisar actor, dirección, operaciones, datos y contrato de «Consumo de API».
25. (System Context) `[NEEDS CLARIFICATION]` Definir datos del callback de identidad, correlación con la redirección, creación de sesión y manejo de rechazo o expiración.
26. (System Context) `[NEEDS CLARIFICATION]` Identificar los repositorios de origen y destino o confirmar que las dos celdas vacías son intencionales.
27. (System Context) `[NEEDS CLARIFICATION]` Mapear computadores de origen, interfaces de dispositivo y dispositivos de destino; sus cardinalidades no determinan asociaciones.
28. (System Context) `[NEEDS CLARIFICATION]` Precisar significado, dirección, datos y contrato de «BDD» y «distintas APIS».

## Prioridad 2 — contratos, datos y comportamiento

1. (Business Context) [NEEDS CLARIFICATION: permisos de PER-01 a PER-06 no declarados.]
2. (Business Context) [NEEDS CLARIFICATION: atributos e identidad individual o compuesta de ENT-01 a ENT-08 no declarados.]
3. (Deployment) `[NEEDS CLARIFICATION]` Definir responsabilidades, permisos, cobertura y escalamiento del Área de Sistemas para instalación y operación.
4. (Deployment) `[NEEDS CLARIFICATION]` Definir política, periodicidad, retención y pruebas de restauración de respaldos.
5. (Functional CMS) `[NEEDS CLARIFICATION]` Definir atributos, identificadores y relaciones de las siete entidades; confirmar si «Noticia / Evento» es una entidad compuesta o dos entidades.
6. (Functional CMS) `[NEEDS CLARIFICATION]` Definir emisor, payload y relación de los eventos de solicitudes de sesión con el callback institucional.
7. (Functional CMS) `[NEEDS CLARIFICATION]` Definir condiciones, destinatarios, canal, contenido, severidad y reintentos de las notificaciones.
8. (Functional CMS) `[NEEDS CLARIFICATION: periodicidad no declarada en el canvas]` para el respaldo automático; definir ventana, consistencia, retención, restauración y fallos.
9. (Functional CMS) `[NEEDS CLARIFICATION: periodicidad no declarada en el canvas]` para la compresión; confirmar si se activa exclusivamente por subida o también por programación y definir formatos, calidad, límites y conservación del original.
10. (Functional CMS) `[NEEDS CLARIFICATION]` Confirmar si `User visualizations, reports & notifications` vacío es compatible con el trigger de notificaciones o si falta una interfaz.
11. (Functional ETL) `[NEEDS CLARIFICATION]` Definir atributos, identificadores y relaciones de Publicación, Documento de publicación y Log de extracción, incluida la retención del log.
12. (Functional ETL) `[NEEDS CLARIFICATION]` Definir ubicación, esquema, codificación, límites, validaciones y tratamiento de archivos CSV parciales o inválidos.
13. (Functional ETL) `[NEEDS CLARIFICATION]` Definir entidades, reglas de inserción/actualización, atomicidad y conflictos de la persistencia relacional.
14. (Functional ETL) `[NEEDS CLARIFICATION]` Definir archivos, rutas, nombres, reemplazo, atomicidad y duplicados de la persistencia en archivos.
15. (Functional ETL) `[NEEDS CLARIFICATION]` Precisar nombre, emisor, payload, condición y efecto de «Trigger event», además de su relación con el job de ingesta.
16. (Functional ETL) `[NEEDS CLARIFICATION: periodicidad no declarada en el canvas]` para «Ejecucion de ingesta programada»; definir ventana, concurrencia, idempotencia y comportamiento ante fallo.
17. (Functional ETL) `[NEEDS CLARIFICATION]` Confirmar cómo se relacionan el evento, el job, el fallo de ingesta y la alerta; el COM no declara sus aristas.
18. (Functional ETL) `[NEEDS CLARIFICATION]` Confirmar si `User visualizations, reports & notifications` vacío es compatible con la alerta o si falta una interfaz de notificación.
19. (Functional INT) `[NEEDS CLARIFICATION]` Definir contratos, datos, autenticación, paginación y errores de las tres fuentes externas.
20. (Functional INT) `[NEEDS CLARIFICATION]` Definir atributos, identificadores y relaciones de Proyecto, Noticia, Evento e Información académica institucional.
21. (Functional INT) `[NEEDS CLARIFICATION]` Definir entidades, criterios, atomicidad y comportamiento de error para lectura y escritura en persistencia.
22. (Functional INT) `[NEEDS CLARIFICATION]` Definir esquemas, versiones y tratamiento de contenido inválido para la validación posterior a la ingesta.
23. (Functional INT) `[NEEDS CLARIFICATION]` Definir indicadores, fórmulas, entradas, precisión y resultados esperados.
24. (Functional INT) `[NEEDS CLARIFICATION: periodicidad no declarada en el canvas]` para «Consulta automatizada a API u-noticias»; definir además ventana y comportamiento ante fallo.
25. (Functional INT) `[NEEDS CLARIFICATION: periodicidad no declarada en el canvas]` para «Consulta automatizada a API u-proyectos»; definir además ventana y comportamiento ante fallo.
26. (Functional INT) `[NEEDS CLARIFICATION: periodicidad no declarada en el canvas]` para «Consulta automatizada a API u-campus»; definir además ventana y comportamiento ante fallo.
27. (Functional INT) `[NEEDS CLARIFICATION]` Definir el nivel de tolerancia a fallos, reintentos, recuperación, degradación y evidencia verificable ante APIs caídas.
28. (Functional INT) `[NEEDS CLARIFICATION]` Confirmar si la ausencia de `API outputs` es intencional y dónde se declara el resultado de cada solicitud.
29. (Functional INT) `[NEEDS CLARIFICATION]` Confirmar cómo se activan los jobs y cómo se notifican o tratan sus fallos, dado que `Event handlers` y `Event triggers` están vacíos.
30. (Structural) `[NEEDS CLARIFICATION]` Definir la interfaz de entrada al almacén relacional y confirmar la asociación de cada contrato de persistencia con PostgreSQL o el sistema de archivos.
31. (System Context) `[NEEDS CLARIFICATION]` Definir esquema, codificación, tamaño máximo, validaciones y tratamiento de errores/parciales de la carga CSV.
32. (System Context) `[NEEDS CLARIFICATION]` Definir contratos, autenticación, paginación, tiempos de espera y respuestas de error de las tres APIs de entrada.
33. (System Context) `[NEEDS CLARIFICATION]` Especificar los protocolos de subida y el contrato del servidor de archivos estáticos.

## Prioridad 3 — métricas, configuración y operación

1. (Architectural Context) [NEEDS CLARIFICATION: métrica y línea base de «Mejorar la difusión institucional».]
2. (Architectural Context) [NEEDS CLARIFICATION: métrica, línea base y objetivo de CE-ACC-01.]
3. (Architectural Context) [NEEDS CLARIFICATION: métricas, líneas base y objetivos de acceso y navegación para CE-ACC-02.]
4. (Architectural Context) [NEEDS CLARIFICATION: definición, métrica, línea base y objetivo de duplicidad para CE-ACC-03.]
5. (Architectural Context) [NEEDS CLARIFICATION: procesos incluidos, métrica, línea base y objetivo para CE-ACC-04.]
6. (Architectural Context) [NEEDS CLARIFICATION: definición, métrica, línea base y objetivo de inconsistencia para CE-ACC-05.]
7. (Architectural Context) [NEEDS CLARIFICATION: objeto, audiencia, métrica, línea base y objetivo de visibilidad para CE-ACC-06.]
8. (Architectural Context) [NEEDS CLARIFICATION: significado, período y cambios permitidos de «Equipos de desarrollo inalterables».]
9. (Architectural Context) [NEEDS CLARIFICATION: mecanismo compensatorio, formato, responsable y frecuencia para R-ACC-04.]
10. (Deployment) `[NEEDS CLARIFICATION]` Definir nodos, réplicas, scheduling, actualización y recuperación de la orquestación y los contenedores.
11. (Deployment) `[NEEDS CLARIFICATION]` Definir variantes y versiones del sistema operativo que deben verificarse.
12. (Deployment) `[NEEDS CLARIFICATION]` Identificar la plataforma de virtualización institucional y sus límites relevantes.
13. (Deployment) `[NEEDS CLARIFICATION]` Definir nodos específicos, cantidades, capacidades y criterios autorizados para cambiarlos.
14. (Deployment) `[NEEDS CLARIFICATION]` Definir segmentos, rutas, puertos, reglas de acceso y relación entre las tres redes.
15. (Deployment) `[NEEDS CLARIFICATION]` Definir artefactos, validaciones, rollback, idempotencia y evidencia del despliegue automatizado.
16. (Deployment) `[NEEDS CLARIFICATION]` Definir monitoreo, métricas, umbrales y alertas de infraestructura.
17. (Deployment) `[NEEDS CLARIFICATION]` Definir objetivo de disponibilidad, ventanas de mantenimiento y recuperación.
18. (Functional CMS) `[NEEDS CLARIFICATION]` Definir operaciones, payloads, autorización, idempotencia y errores de los comandos administrativos.
19. (Functional CMS) `[NEEDS CLARIFICATION]` Definir operaciones, payloads, autorización, idempotencia y errores de los comandos públicos.
20. (Functional CMS) `[NEEDS CLARIFICATION]` Definir consultas, filtros, paginación, autorización, respuestas y errores de los query endpoints.
21. (Functional CMS) `[NEEDS CLARIFICATION]` Definir versiones, configuraciones y reparto de responsabilidades del stack.
22. (Functional ETL) `[NEEDS CLARIFICATION]` Definir destinatarios, canal, contenido, severidad, reintentos y escalamiento de la alerta por fallo.
23. (Functional ETL) `[NEEDS CLARIFICATION]` Definir versiones y configuraciones obligatorias del stack declarado.
24. (Structural) `[NEEDS CLARIFICATION]` Precisar «Licenciamiento»; mientras tanto prevalecen las herramientas abiertas, académicas o gratuitas exigidas por Architectural Context.
25. (Structural) `[NEEDS CLARIFICATION]` Precisar «Restricciones de integracion externas»; mientras tanto prevalece la limitación concreta de `R-ACC-04`.
26. (System Context) `[NEEDS CLARIFICATION]` Definir autorización, campos obligatorios, validaciones y comportamiento de error para galería, apariciones en prensa, comentarios y redacción de blog.
27. (System Context) `[NEEDS CLARIFICATION]` Definir disparador o frecuencia, reintentos, idempotencia y tratamiento de resultados parciales de la consulta asíncrona.
28. (System Context) `[NEEDS CLARIFICATION]` Precisar la relación entre servidores de publicación, monitores de pasillos y navegadores web; el COM no define la cadena exacta de entrega.
29. (System Context) `[NEEDS CLARIFICATION]` Definir navegadores soportados, tamaños de pantalla y criterios medibles de uso en dispositivos móviles.
30. (System Context) `[NEEDS CLARIFICATION]` Definir contenido, resolución y frecuencia de actualización requerida para los monitores de pasillos.
31. (Todos los canvas) [NEEDS CLARIFICATION: System, Organization, Canvas, Version y Date están vacíos; confirmar la identificación y versión de los artefactos.]
