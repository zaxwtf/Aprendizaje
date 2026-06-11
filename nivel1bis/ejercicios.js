// Diagnóstico de lógica JS · Nivel 1-bis
//
// Implementa cada función para que su test pase (verde).
// Hazlas en orden, de la 1 a la 10. Si una se te atasca, déjala vacía y sigue.
//
// Lee el README.md antes de empezar.

// 1 · triple(n)
// Devuelve el triple de n.
// Ejemplos: triple(2) -> 6,  triple(-3) -> -9
export const triple = (n) => {
  return n * 3
};

// 2 · esNegativo(n)
// Devuelve true si el número es negativo (menor que 0); si no, false.
// Ejemplos: esNegativo(-1) -> true,  esNegativo(0) -> false
export const esNegativo = (n) => {
  return n < 0 ? true : false
};

// 3 · esNombreLargo(nombre)
// Devuelve true si el nombre tiene MÁS de 8 caracteres.
// Ejemplos: esNombreLargo("Maximiliano") -> true,  esNombreLargo("Ana") -> false
export const esNombreLargo = (nombre) => {
  return nombre.length > 8 ? true : false
};

// 4 · clasificaEdad(edad)
// Devuelve "menor" si la edad es menor de 18, y "adulto" si es 18 o más.
// Ejemplos: clasificaEdad(10) -> "menor",  clasificaEdad(18) -> "adulto"
export const clasificaEdad = (edad) => {
  return edad >= 18 ? "adulto" : "menor"
};

// 5 · enHorarioLaboral(hora)
// Devuelve true si la hora está entre 9 y 17, ambas incluidas.
// Ejemplos: enHorarioLaboral(9) -> true,  enHorarioLaboral(18) -> false
export const enHorarioLaboral = (hora) => {
  return (hora >= 9 && hora <= 17) ? true : false
};

// 6 · tallaCamiseta(altura)
// Recibe una altura en cm y devuelve la talla:
//   menos de 160        -> "S"
//   de 160 a menos de 175 -> "M"
//   de 175 a menos de 190 -> "L"
//   190 o más           -> "XL"
// Ejemplos: tallaCamiseta(150) -> "S",  tallaCamiseta(180) -> "L"
export const tallaCamiseta = (altura) => {
  if (altura < 160){
    return "S"
  } else if (altura >= 160 && altura < 175){
    return "M"
  } else if (altura >= 175 && altura < 190){
    return "L"
  } else if (altura >= 190){
    return "XL"
  }
};

// 7 · tieneEspacios(texto)
// Devuelve true si el texto contiene al menos un espacio " ".
// Ejemplos: tieneEspacios("hola mundo") -> true,  tieneEspacios("hola") -> false
export const tieneEspacios = (texto) => {
  return texto.includes(" ") ? true : false
};

// 8 · cuentaImpares(numeros)
// Recibe un array de números y devuelve CUÁNTOS son impares.
// Ejemplos: cuentaImpares([1, 2, 3, 4]) -> 2,  cuentaImpares([2, 4, 6]) -> 0
export const cuentaImpares = (numeros) => {
  let impares = 0
  numeros.forEach(numero => {
    if (numero % 2 !== 0){
        return impares += 1
    }
});
  return impares
};

// 9 · productoArray(numeros)
// Recibe un array de números y devuelve el resultado de multiplicarlos todos.
// Un array vacío devuelve 1.
// Ejemplos: productoArray([2, 3, 4]) -> 24,  productoArray([]) -> 1
export const productoArray = (numeros) => {
  let numerosMultiplicados = 1
  for (let i = 0; i < numeros.length; i++){
    numerosMultiplicados = numeros[i] * numerosMultiplicados
  }
  return numerosMultiplicados
};

// 10 · todosPares(numeros)
// Devuelve true si TODOS los números del array son pares.
// Un array vacío devuelve true (ninguno incumple).
// Ejemplos: todosPares([2, 4, 6]) -> true,  todosPares([2, 3, 4]) -> false
export const todosPares = (numeros) => {
  return numeros.every(numero => numero % 2 === 0) ? true : false
};
