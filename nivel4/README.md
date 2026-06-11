# Diagnóstico de lógica JS · Nivel 4

En el nivel 3 hacías **una** operación sobre un array de objetos. Aquí vas a **encadenar varias**: filtrar y además ordenar, filtrar y sumar, agrupar y contar… Esto es ya, casi tal cual, lo que pide una query: "dame los nombres de los usuarios activos, ordenados" o "el total de lo que está en oferta".

## Cómo se hace

```bash
npm install      # solo la primera vez: instala Vitest
npm test         # ejecuta los tests
```

Al arrancar, **todo estará en rojo** (las funciones están vacías). Tu objetivo es ir poniéndolas en verde.

1. Abre **`ejercicios.js`**. Cada función tiene arriba la regla y un par de ejemplos.
2. Escribe el cuerpo de la función.
3. Guarda y mira `npm test`.
4. Siguiente.

## Reglas del juego

- **Individual.** Sin copiar de un compañero ni de una IA.
- **En orden, de la 1 a la 10.**
- **No te bloquees.** Si no sabes ni arrancar una, déjala vacía y pasa a la siguiente.

## La idea clave: encadenar

Los métodos de array **se pueden enganchar uno detrás de otro**, porque cada uno devuelve un array nuevo:

```js
usuarios
  .filter((u) => u.activo)   // 1) me quedo con los activos
  .map((u) => u.nombre)      // 2) de cada uno, solo el nombre
  .sort();                   // 3) los ordeno
```

Léelo de arriba abajo como una receta: cada línea recibe lo que dejó la anterior. Herramientas que vas a usar:

- `.filter` / `.map` / `.reduce` (ya los conoces del nivel 3),
- `.sort((a, b) => a.edad - b.edad)` ordena de menor a mayor por un campo (al revés: `b.edad - a.edad`),
- `.some((u) => u.edad < 18)` devuelve `true` si **al menos uno** cumple,
- `Math.max(...lista)` te da el mayor de una lista de números.
