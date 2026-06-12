---
title: "Crear skill: Nueva asignación (update-config.js)"
description: |
  Guía para crear una `SKILL.md` que automatice o documente el flujo de trabajo usado
  para añadir/actualizar una asignación y ejecutar el script
  `.github/skills/new-assignment/scripts/update-config.js`.
applyTo: 
  - ".github/skills/new-assignment/**"
---

# Objetivo

Proveer una skill reproducible y accionable que capture el flujo seguido en la conversación
para crear y validar archivos de asignación (`README.md`) siguiendo las instrucciones del
repositorio y ejecutar o documentar el script `update-config.js` cuando corresponda.

# Alcance

- Esta skill está pensada para uso a nivel de workspace (archivos y convenciones locales).
- No ejecuta comandos por sí misma; guía al desarrollador en pasos claros y verificables.

# Cuando usarla

- Crear o actualizar la documentación de una skill que automatice la creación de asignaciones.
- Documentar y estandarizar el flujo para ejecutar `update-config.js` tras cambios en asignaciones.

# Flujo extraído (paso a paso)

1. Revisar la conversación y los archivos relevantes (`templates/assignment-template.md`,
   `.github/instructions/assignments.instructions.md`, y el script objetivo).
2. Extraer la secuencia de acciones repetible: crear `README.md` siguiendo la plantilla,
   validar secciones obligatorias y formateo.
3. Determinar si `update-config.js` debe ejecutarse (por ejemplo, cuando cambia `config.json`
   o se añade nueva asignación).
4. Redactar la `SKILL.md` con pasos claros, comprobaciones y ejemplos de prompts.
5. Guardar la skill en `.github/skills/new-assignment/SKILL.md` y probar la guía manualmente.

# Puntos de decisión y lógica de ramificación

- Si el cambio es solo contenido (README) => seguir validación de plantilla.
- Si el cambio modifica `config.json` o añade rutas nuevas => ejecutar o documentar
  `update-config.js` como paso adicional.
- Si faltan secciones obligatorias en la asignación => rechazar y pedir correcciones.

# Criterios de calidad / comprobaciones de finalización

- `README.md` existe en la carpeta de la asignación.
- `README.md` sigue la estructura de `templates/assignment-template.md` y contiene:
  - Título con icono
  - Sección `Objective` (1-2 frases)
  - Al menos una `Task` con `Description` y `Requirements` en bullets
- Si aplica, `config.json` actualizado y `update-config.js` invocado o instrucciones para invocarlo.
- Mensajes claros para el estudiante (lenguaje amigable y orientado al aprendizaje).

# Preguntas de clarificación (si no hay consenso)

- ¿Esta skill debe ejecutar `update-config.js` automáticamente o solo documentar cuándo
  hacerlo manualmente?
- ¿El alcance es solo la plantilla de asignaciones o también debemos incluir validaciones
  automáticas (linter, pruebas simples)?

# Ejemplo de prompts para usar la skill

- "Genera una `SKILL.md` para `.github/skills/new-assignment/scripts/update-config.js` que
  describa el flujo para crear `assignments/<name>/README.md` a partir de la plantilla."
- "¿Debo ejecutar `update-config.js` después de añadir `assignments/new-assignment/README.md`?"

# Iteración y entrega

1. Draft inicial (este archivo).
2. Revisar con el equipo/propietario del repositorio para aclarar ejecución automática vs manual.
3. Incorporar cambios y añadir ejemplos concretos de uso del script (comandos para ejecutar).

# Sugerencias de personalización futura

- Añadir una sección `checks` que incluya un pequeño script de validación (por ejemplo,
  un `node` o `python` que confirme la presencia de secciones requeridas).
- Crear una `agent` o helper que proponga el commit y PR con cambios validados.

---
Resumen: esta `SKILL.md` captura el proceso repetible para crear y validar asignaciones y
documenta cuándo y cómo usar `update-config.js`. Después de confirmar las preguntas de
clarificación, se pueden añadir pasos automáticos o scripts de validación.
