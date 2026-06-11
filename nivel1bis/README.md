# Diagnóstico de lógica JS · Nivel 1-bis

Mismo nivel que el primero, **otros enunciados**. La idea no es que sea más difícil, sino darte más práctica con lo mismo: leer lo que se pide y escribir la función. Cuanto más lo repites, menos cuesta arrancar.

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

- **Individual.** Sin copiar de un compañero ni de una IA. Esto mide qué controlas tú, para saber dónde ayudarte.
- **En orden, de la 1 a la 10.**
- **No te bloquees.** Si no sabes ni arrancar una, déjala vacía y pasa a la siguiente.

## Antes de escribir un `if`, hazte estas 4 preguntas

1. ¿Qué **entra**? (¿un número, un texto, un array?)
2. ¿Qué **sale**, y de qué tipo? (¿un número, `true`/`false`, un texto?)
3. ¿Cuál es la **regla**, en una frase de español?
4. ¿Cómo se **mide** esa frase en JS?

Muchas veces, cuando la respuesta a la 2 es `true`/`false`, **ni siquiera necesitas un `if`**: la comparación ya es la respuesta (`return edad >= 18`).
