# Auditoría E1

Fuentes recontadas de forma independiente: 8 COM, `E1-specify.prompt.md`, `E1-constitution.prompt.md` y `E1-trace-annex.md`. No se utilizó el reporte de composición como fuente de métricas.

| Canvas | Post-it | Trazas | Dudas |
|---|---:|---:|---:|
| business_context | 50 | 50 | 5 |
| architectural_context | 42 | 42 | 14 |
| system_context | 47 | 47 | 14 |
| structural | 30 | 30 | 6 |
| functional_p7 | 21 | 21 | 12 |
| functional_p9 | 15 | 15 | 10 |
| functional_p10 | 27 | 27 | 12 |
| deployment | 30 | 30 | 16 |
| cross_canvas / auditoría | 0 | 0 | 5 |
| **Total** | **262** | **262** | **94** |

## Métricas

- **C · Cobertura** = 262/262 = **1,00** → OK.
- **A · Ambigüedad** = 94/87 = **1,080** dudas por requisito emitido. Denominador: 70 obligaciones en specify + 17 en constitution.
- **T · Contaminación técnica** = **0** menciones → OK. Lista negra derivada de los COM: «Docker», «Docker CLI», «Docker Swarm», «File System», «FileSystem», «Java Spring», «JRE/OpenJDK», «Linux», «Multimedia Storage», «Nginx», «Node.js», «PostgreSQL», «Python», «Python runtime», «u-campus», «u-noticias», «u-papers», «u-pasaporte», «u-proyectos», «Ucampus», «UPasaporte».
- **V · Verificabilidad** = 50/50 = **1,00** → OK.

## Controles estructurales

- IDs del anexo duplicados: **0** → OK.
- IDs extra respecto de los COM: **0** → OK.
- Obligaciones con traza `←` en specify: **70/70** → OK.
- Principios/límites con traza `←` en constitution: **17/17** → OK.
- IDs de obligación duplicados: **0** → OK.
- FR de bundle con prefijo válido: **26/26** → OK.
- FR con forma canónica estricta `El sistema DEBE …`: **26/50**. Los 24 FR SCC usan `debe` en minúscula; es una desviación de forma, no de significado ni de V.
- Verbos prohibidos detectados en FR: **0** → OK.
- Idempotencia de IDs: sin baseline de auditoría previo; los IDs compuestos coinciden con los fragmentos fuente y no presentan colisiones.

## Chequeos cruzados y ausencias

- Censo Structural: **9** bundles.
- Deployment: **5** unidades declaradas.
- Functional disponibles: **3**.
- Chequeo Structural↔Deployment↔Functional reportado en plan: **sí**.
- Ausencias o preguntas explícitas: respaldo **OK**, monitoreo **OK**, disponibilidad **OK**, seguridad **OK**, accesibilidad **OK**.

## Prueba de sanidad del auditor

Se eliminó sólo en memoria la fila `E1-BPS-01`.

- Cobertura mutilada = 261/262 = **0,9962**.
- Veredicto esperado del auditor mutilado: **INVÁLIDA**.
- Resultado: **OK — rechazó por C < 1,00**.

## Veredicto

**VÁLIDA**.

La corrida cubre por completo qué elementos existen y mantiene la tecnología fuera de specify. La principal debilidad está en cuánto, cuándo y bajo qué contratos deben operar: quedan 94 dudas abiertas. La validez del pipeline no equivale a una especificación cerrada; `/speckit.plan` sigue bloqueado hasta resolver `/speckit.clarify`.
