# Diagnóstico de lógica JS · Nivel 3

Aquí dejamos de trabajar con datos sueltos (un número, un texto) y pasamos a **objetos** y **arrays de objetos** — que es exactamente la forma que tienen los datos que devuelve la base de datos. Si dominas esto, las queries de Mongo te van a resultar mucho más fáciles.

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

## Lo nuevo de este nivel

- **Acceder a un dato de un objeto** se hace con el punto: si `persona = { nombre: "Ada", edad: 36 }`, entonces `persona.nombre` es `"Ada"` y `persona.edad` es `36`.
- A partir de la mitad trabajas con **arrays de objetos** (`[{...}, {...}]`). Ahí te valen los mismos métodos del nivel 2, pero mirando un campo de cada objeto:
  - `.map(p => p.nombre)` saca un array con un campo de cada uno.
  - `.filter(p => p.edad >= 18)` se queda con los objetos que cumplen.
  - `.find(p => p.id === id)` devuelve **el primer** objeto que cumple (o `undefined`).
  - `.reduce((acc, p) => acc + p.precio, 0)` suma un campo de todos.
