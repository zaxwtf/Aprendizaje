// Diagnóstico de lógica JS · Nivel 4 (cadenas de operaciones sobre arrays de objetos)
//
// Implementa cada función para que su test pase (verde).
// Hazlas en orden, de la 1 a la 10. Si una se te atasca, déjala vacía y sigue.
//
// Lee el README.md antes de empezar (ahí está cómo encadenar métodos).

// 1 · nombresActivos(usuarios)
// usuarios es un array como [{ nombre: "Ana", activo: true }, { nombre: "Leo", activo: false }].
// Devuelve un array con los nombres SOLO de los usuarios activos.
// Ejemplo: nombresActivos([{ nombre: "Ana", activo: true }, { nombre: "Leo", activo: false }]) -> ["Ana"]
export const nombresActivos = (usuarios) => {
  return usuarios.filter(usuario => usuario.activo === true).map(usuario => usuario.nombre)
};

// 2 · ordenarPorEdad(usuarios)
// Devuelve un array con los usuarios ordenados de MENOR a MAYOR edad.
// Pista: array.sort((a, b) => a.edad - b.edad)
// Ejemplo: ordenarPorEdad([{ nombre: "Ana", edad: 30 }, { nombre: "Leo", edad: 18 }])
//          -> [{ nombre: "Leo", edad: 18 }, { nombre: "Ana", edad: 30 }]
export const ordenarPorEdad = (usuarios) => {
  return usuarios.sort((a, b) => a.edad - b.edad)
};

// 3 · nombresActivosOrdenados(usuarios)
// Devuelve los nombres de los usuarios activos, ORDENADOS alfabéticamente.
// (Encadena tres pasos: filtra los activos, quédate con el nombre, y ordena.)
// Ejemplo: nombresActivosOrdenados([{ nombre: "Sara", activo: true }, { nombre: "Ana", activo: true }])
//          -> ["Ana", "Sara"]
export const nombresActivosOrdenados = (usuarios) => {
  return usuarios.filter(usuario => usuario.activo === true).map(usuario => usuario.nombre).sort()
};


// 4 · usuarioMasJoven(usuarios)
// Devuelve el objeto del usuario con menor edad. (Siempre hay al menos uno.)
// Ejemplo: usuarioMasJoven([{ nombre: "Ana", edad: 30 }, { nombre: "Leo", edad: 18 }])
//          -> { nombre: "Leo", edad: 18 }
export const usuarioMasJoven = (usuarios) => {
  return usuarios.sort((a, b) => a.edad - b.edad)[0]
};

// 5 · precioMaximo(productos)
// Devuelve el precio más alto de todos los productos. (Siempre hay al menos uno.)
// Pista: Math.max(...listaDeNumeros)
// Ejemplo: precioMaximo([{ precio: 10 }, { precio: 30 }, { precio: 20 }]) -> 30
export const precioMaximo = (productos) => {
  return Math.max(...productos.map(producto => producto.precio))
};

// 6 · hayMenores(usuarios)
// Devuelve true si AL MENOS UN usuario es menor de edad (edad menor que 18).
// Ejemplo: hayMenores([{ edad: 30 }, { edad: 15 }]) -> true,  hayMenores([{ edad: 30 }]) -> false
export const hayMenores = (usuarios) => {
  return usuarios.some(usuario => usuario.edad < 18)
};

// 7 · totalEnOferta(productos)
// Devuelve la suma de los precios SOLO de los productos en oferta.
// Ejemplo: totalEnOferta([{ precio: 10, oferta: true }, { precio: 20, oferta: false }, { precio: 5, oferta: true }]) -> 15
export const totalEnOferta = (productos) => {
  return productos.filter(producto => producto.oferta === true).reduce((acc, producto) =>{
    return acc = acc + producto.precio
  }, 0)
};

totalEnOferta([{ precio: 10, oferta: true }, { precio: 20, oferta: false }, { precio: 5, oferta: true }])
// 8 · subirPrecios(productos, cantidad)
// Devuelve un array NUEVO de productos, cada uno con su precio sumado en 'cantidad'.
// Pista: para copiar un objeto cambiando un campo -> { ...producto, precio: nuevoPrecio }
// Ejemplo: subirPrecios([{ nombre: "A", precio: 10 }], 5) -> [{ nombre: "A", precio: 15 }]
export const subirPrecios = (productos, cantidad) => {
  // TODO
};

// 9 · cuentaPorCategoria(productos)
// Devuelve un OBJETO que cuenta cuántos productos hay de cada categoría.
// Ejemplo: cuentaPorCategoria([{ categoria: "ropa" }, { categoria: "hogar" }, { categoria: "ropa" }])
//          -> { ropa: 2, hogar: 1 }
export const cuentaPorCategoria = (productos) => {
  // TODO
};

// 10 · nombresPorPrecioDesc(productos)
// Devuelve los nombres de los productos ACTIVOS, ordenados del MÁS CARO al más barato.
// (Encadena: filtra activos, ordena por precio descendente, quédate con el nombre.)
// Ejemplo: nombresPorPrecioDesc([{ nombre: "A", precio: 10, activo: true }, { nombre: "B", precio: 30, activo: true }])
//          -> ["B", "A"]
export const nombresPorPrecioDesc = (productos) => {
  // TODO
};
