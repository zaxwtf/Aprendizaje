// Diagnóstico de lógica JS · Nivel 2
//
// Implementa cada función para que su test pase (verde).
// Hazlas en orden, de la 1 a la 10. Si una se te atasca del todo, déjala
// vacía y pasa a la siguiente.
//
// Lee el README.md antes de empezar.

// 1 · esPar(n)
// Devuelve true si el número es par; si no, false.
// Pista: un número es par si el resto de dividirlo entre 2 es 0  ->  n % 2
// Ejemplos: esPar(4) -> true,  esPar(7) -> false
export const esPar = (n) => {
  return n % 2 === 0 ? true : false
};

// 2 · puedeVotar(edad, esCiudadano)
// Recibe DOS datos. Devuelve true solo si la edad es 18 o más Y además es ciudadano.
// Ejemplos: puedeVotar(18, true) -> true,  puedeVotar(18, false) -> false,  puedeVotar(17, true) -> false
export const puedeVotar = (edad, esCiudadano) => {
  return esCiudadano === true && edad >= 18 ? true : false
};

// 3 · esFinDeSemana(dia)
// Recibe el nombre de un día en minúsculas. Devuelve true si es "sábado" o "domingo".
// Ejemplos: esFinDeSemana("sábado") -> true,  esFinDeSemana("lunes") -> false
export const esFinDeSemana = (dia) => {
  // TODO
};

// 4 · nombreValido(nombre)
// Devuelve true si el nombre tiene entre 3 y 15 caracteres, ambos incluidos.
// Ejemplos: nombreValido("ana") -> true,  nombreValido("al") -> false
export const nombreValido = (nombre) => {
  // TODO
};

// 5 · precioEnvio(total)
// Devuelve el coste de envío: 0 si el total es 50 o más (envío gratis), y 5 si es menos.
// Ejemplos: precioEnvio(50) -> 0,  precioEnvio(49) -> 5
export const precioEnvio = (total) => {
  // TODO
};

// 6 · totalCarrito(precio, cantidad)
// Calcula precio * cantidad (el subtotal) y devuelve el total a pagar:
//   si el subtotal es 50 o más  -> el subtotal tal cual (envío gratis)
//   si es menos                 -> el subtotal + 5 de envío
// Ejemplos: totalCarrito(20, 2) -> 45,  totalCarrito(20, 3) -> 60
export const totalCarrito = (precio, cantidad) => {
  // TODO
};

// 7 · inicialMayuscula(palabra)
// Devuelve la palabra con la primera letra en mayúscula y el resto igual.
// Pista: la primera letra es palabra[0]; el resto es palabra.slice(1)
// Ejemplos: inicialMayuscula("ada") -> "Ada",  inicialMayuscula("juan") -> "Juan"
export const inicialMayuscula = (palabra) => {
  // TODO
};

// 8 · soloPares(numeros)
// Recibe un array de números y devuelve un ARRAY NUEVO solo con los pares.
// Ejemplos: soloPares([1, 2, 3, 4]) -> [2, 4],  soloPares([1, 3, 5]) -> []
export const soloPares = (numeros) => {
  // TODO
};

// 9 · dobles(numeros)
// Recibe un array de números y devuelve un ARRAY NUEVO con cada número multiplicado por 2.
// Ejemplos: dobles([1, 2, 3]) -> [2, 4, 6],  dobles([]) -> []
export const dobles = (numeros) => {
  // TODO
};

// 10 · cuentaAprobados(notas)
// Recibe un array de notas (0 a 10) y devuelve CUÁNTAS son 5 o más.
// Ejemplos: cuentaAprobados([4, 5, 6, 9, 2]) -> 3,  cuentaAprobados([1, 2, 3]) -> 0
export const cuentaAprobados = (notas) => {
  // TODO
};
