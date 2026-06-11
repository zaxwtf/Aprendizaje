# Diagnóstico de lógica JS · Nivel 2

Mismo formato que el nivel 1: diez funciones, de menos a más, y tu trabajo es **hacer que pasen los tests**. Verde = hecho.

Los primeros peldaños te sonarán al nivel 1 (es a propósito: repaso). A partir de la mitad se sube un poco: dos parámetros, cálculos dentro de una condición, cortar strings y transformar arrays. **Llega tan arriba como puedas.**

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

- **Individual.** Sin copiar de un compañero ni de una IA. Esto mide qué controlas tú, para saber dónde ayudarte. Si copias, el único que pierde información útil eres tú.
- **En orden, de la 1 a la 10.**
- **No te bloquees.** Si no sabes ni arrancar una, déjala vacía y pasa a la siguiente.

## Dos pistas nuevas para este nivel

- Hay funciones que **devuelven un array** (no un número ni un booleano). Para esas, fíjate en los ejemplos: la salida es algo como `[2, 4]`.
- Algunas reciben **dos datos** (dos parámetros entre los paréntesis), no uno. Úsalos los dos.
