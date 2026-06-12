---
title: "Crear skill: Añadir attachment (add-attachment.js)"
description: |
  Guía para crear una `SKILL.md` que documente o automatice el flujo de trabajo
  relacionado con el script `.github/skills/new-assignment/scripts/add-attachment.js`.
applyTo:
  - ".github/skills/new-assignment/add-attachment/**"
---

# Objetivo

Documentar el proceso repetible para añadir attachments (imágenes, archivos) a una
asignación y definir cuándo y cómo usar `add-attachment.js` para actualizar metadatos
o subir recursos relacionados con las entregas.

# Alcance

- Esta skill está orientada al uso en el workspace y describe pasos manuales y
  las condiciones para ejecutar `add-attachment.js`.
- No asume permisos externos (p. ej. acceso a APIs externas) a menos que se indique.

# Flujo extraído (paso a paso)

1. Revisar la carpeta de la asignación y confirmar que existe `README.md` que cumple la plantilla.
2. Añadir los archivos de attachment a la carpeta `assets/` o a la carpeta de la asignación.
3. Ejecutar `add-attachment.js` cuando sea necesario para actualizar referencias en `config.json`
   o registrar attachments en metadatos del proyecto.
4. Verificar que los enlaces en la `README.md` apuntan correctamente a los attachments.
5. Hacer commit y abrir PR con la descripción de los cambios e incluir notas sobre attachments.

# Puntos de decisión y lógica de ramificación

- Si el attachment es solo una imagen local usada en la `README.md` => NO es necesario ejecutar
  el script, solo actualizar la ruta relativa.
- Si el cambio requiere modificar `config.json` o indexación centralizada => ejecutar `add-attachment.js`.
- Si el attachment necesita subida a un servicio externo => documentar credenciales y pasos
  separados; la skill puede pedir confirmación manual antes de proceder.

# Criterios de calidad / comprobaciones de finalización

- El attachment existe en la ruta indicada y se sirve correctamente desde el repositorio.
- La `README.md` referencia el attachment con una ruta relativa funcional.
- Si corresponde, `config.json` o archivos de índice se actualizan con la nueva entrada.
- Mensajes en el PR describen claramente qué attachments fueron añadidos y por qué.

# Preguntas de clarificación

- ¿Deseas que la skill ejecute `add-attachment.js` automáticamente (p. ej. como paso
  final dentro de la skill) o que solo documente cuándo debe ejecutarse manualmente?
- ¿Los attachments deben almacenarse siempre dentro de la carpeta de la asignación,
  o prefieres centralizar en `assets/`?

# Ejemplos de prompts para usar la skill

- "Genera una guía para añadir una imagen a `assignments/game/README.md` y cuándo ejecutar `add-attachment.js`."
- "¿Debo ejecutar `add-attachment.js` si subo un PDF a `assignments/data-analysis/`?"

# Iteración y entrega

1. Draft inicial (este archivo).
2. Confirmar las preguntas de clarificación con el propietario del repositorio.
3. Añadir ejemplos de comandos concretos para ejecutar `add-attachment.js` si se decide
   permitir ejecución desde la skill.

# Sugerencias futuras

- Añadir un pequeño script de validación que compruebe rutas relativas en `README.md`.
- Integrar la ejecución del script en un workflow de CI si se desea automatizar indexaciones.

---
Resumen: esta skill documenta el flujo para añadir attachments y define cuándo `add-attachment.js`
debe usarse; tras confirmar alcance se pueden añadir pasos automáticos y ejemplos de ejecución.
