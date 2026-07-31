/speckit.checklist

# Checklist de calidad — Entrega E1

Validar la especificación compuesta y registrar evidencia para cada punto:

- [x] Cobertura atómica: 262/262 post-it con una fila y destino no vacío.
- [x] Contaminación técnica en specify: 0.
- [x] Verificabilidad: 50/50 FR con escenario Dado/Cuando/Entonces.
- [x] Trazas `←`: 70/70 obligaciones de specify y 17/17 de constitution.
- [x] Prefijos de bundle: 26/26 FR `INT`, `ETL` o `CMS` válidos.
- [x] Colisiones de IDs: 0.
- [x] Verbos prohibidos sin objeto detectados: 0.
- [ ] Normalizar la forma estricta `El sistema DEBE …` en 24 FR SCC que usan `debe` en minúscula, sin cambiar su significado.
- [ ] Resolver las 94 dudas de `E1-clarify.audit-input.md`.
- [ ] Confirmar el cruce 9 bundles Structural ↔ 5 Deployment ↔ 3 Functional, incluida la variante ortográfica del portal.
- [ ] Cerrar preguntas de respaldo, monitoreo, disponibilidad, seguridad y accesibilidad.
- [ ] Tras `/speckit.tasks`, completar la columna `tarea` del anexo y volver a ejecutar esta auditoría.

No ejecutar `/speckit.plan` mientras haya dudas que fijen periodicidades, esquemas, permisos, contratos o métricas.
