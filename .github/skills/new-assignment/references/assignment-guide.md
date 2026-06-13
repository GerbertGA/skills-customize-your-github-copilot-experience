# Assignment Guide

Este documento contiene la guía principal para crear y mantener asignaciones dentro del repositorio.

## Estructura de las asignaciones

- Cada asignación debe estar en una carpeta bajo `assignments/`.
- Cada carpeta de asignación debe incluir un `README.md` que siga la plantilla de `templates/assignment-template.md`.
- Las asignaciones pueden incluir archivos adicionales como `starter-code.py`, `requirements.txt`, `data.csv`, etc.

## Reglas generales

- Usa siempre el formato de plantilla y no omitas secciones obligatorias.
- Asegura que el `README.md` tenga:
  - Título con icono
  - Sección `Objective`
  - Sección `Tasks` con al menos una tarea completa
  - `Description` y `Requirements` claros y medibles
- Si agregas una nueva asignación, registra su metadata en `config.json`.

## Scripts relacionados

- `scripts/update-config.js`: se usa para agregar o actualizar entradas de asignaciones en `config.json`.
- `scripts/add-attachment.js`: se usa para adjuntar archivos a una asignación y actualizar metadatos si es necesario.

## Recomendaciones de plantilla

- Mantén los requisitos enfocados en resultados ejecutables.
- Proporciona ejemplos de comandos si el ejercicio incluye una API o servicio.
- Documenta cómo ejecutar y probar la asignación localmente.
