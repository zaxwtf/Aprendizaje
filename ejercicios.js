// Diagnóstico de lógica JS
//
// Implementa cada función para que su test pase (verde).
// Hazlas en orden, de la 1 a la 10. Si una se te atasca del todo, déjala
// vacía y pasa a la siguiente: es mejor dato que no perder media hora.
//
// Lee el README.md antes de empezar.

// 1 · doble(n)
// Devuelve el doble de n.
// Ejemplos: doble(4) -> 8,  doble(-3) -> -6
export const doble = (n) => {
  return (n) * 2
};

// 2 · esMayorDeEdad(edad)
// Devuelve true si la edad es 18 o más; si no, false.
// Ejemplos: esMayorDeEdad(18) -> true,  esMayorDeEdad(17) -> false
export const esMayorDeEdad = (edad) => {
  return edad >= 18 ? true : false
};

// 3 · esPasswordSegura(password)
// Devuelve true si la contraseña tiene AL MENOS 6 caracteres.
// Ejemplos: esPasswordSegura("123456") -> true,  esPasswordSegura("12345") -> false
export const esPasswordSegura = (password) => {
  return password.length >= 6 ? true : false
};

// 4 · clasificaTemp(grados)
// Devuelve "frío" si los grados son menos de 20, y "calor" si son 20 o más.
// Ejemplos: clasificaTemp(10) -> "frío",  clasificaTemp(25) -> "calor"
export const clasificaTemp = (grados) => {
  return grados >= 20 ? "calor" : "frío"
};

// 5 · esAdolescente(edad)
// Devuelve true si la edad está entre 13 y 17, ambos incluidos.
// Ejemplos: esAdolescente(15) -> true,  esAdolescente(18) -> false,  esAdolescente(12) -> false
export const esAdolescente = (edad) => {
  return (edad >= 13 && edad <= 17) ? true : false
};

// 6 · nota(puntos)
// Recibe una puntuación de 0 a 10 y devuelve:
//   menos de 5            -> "suspenso"
//   de 5 a menos de 7     -> "aprobado"
//   de 7 a menos de 9     -> "notable"
//   9 o más               -> "sobresaliente"
// Ejemplos: nota(4) -> "suspenso",  nota(7) -> "notable",  nota(10) -> "sobresaliente"
export const nota = (puntos) => {
  if (puntos >= 9){
    return "sobresaliente"
  } else if (puntos >= 7){
    return "notable"
  } else if (puntos >= 5){
    return "aprobado"
  } else {
    return "suspenso"
  }
};

// 7 · tieneArroba(email)
// Devuelve true si el texto contiene el carácter "@".
// Ejemplos: tieneArroba("a@b.com") -> true,  tieneArroba("hola") -> false
export const tieneArroba = (email) => {
  return email.includes("@") ? true : false

};

// 8 · cuentaPares(numeros)
// Recibe un array de números y devuelve CUÁNTOS son pares.
// Ejemplos: cuentaPares([1, 2, 3, 4]) -> 2,  cuentaPares([1, 3, 5]) -> 0
export const cuentaPares = (numeros) => {
  let pares = 0
  numeros.map(n =>{
    if (n % 2 === 0){
      pares += 1
    }
    })
    return pares
};

// 9 · sumaArray(numeros)
// Recibe un array de números y devuelve la suma de todos.
// Un array vacío suma 0.
// Ejemplos: sumaArray([1, 2, 3]) -> 6,  sumaArray([]) -> 0
export const sumaArray = (numeros) => {
  let suma = 0
  for (let i = 0; i < numeros.length; i++){
    suma = suma + numeros[i]
  }
  return suma
};

// 10 · todosPositivos(numeros)
// Devuelve true si TODOS los números del array son positivos (mayores que 0).
// Un array vacío devuelve true (ninguno incumple la regla).
// Ejemplos: todosPositivos([1, 2, 3]) -> true,  todosPositivos([1, -2, 3]) -> false
export const todosPositivos = (numeros) => {
  const negativoCheck = numeros.every(numero => numero > 0)
  console.log(negativoCheck)
  if(negativoCheck){
    return true
  }else{
    return false
  }
};

