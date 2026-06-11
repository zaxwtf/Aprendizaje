// Diagnóstico de lógica JS · Nivel 3 (objetos y arrays de objetos)
//
// Implementa cada función para que su test pase (verde).
// Hazlas en orden, de la 1 a la 10. Si una se te atasca, déjala vacía y sigue.
//
// Lee el README.md antes de empezar (ahí está cómo acceder a un objeto).

// 1 · nombreCompleto(persona)
// persona es un objeto como { nombre: "Ada", apellido: "Lovelace" }.
// Devuelve "nombre apellido" (con un espacio en medio).
// Ejemplo: nombreCompleto({ nombre: "Ada", apellido: "Lovelace" }) -> "Ada Lovelace"
export const nombreCompleto = (persona) => {
  return `${persona.nombre} ${persona.apellido}`
};

// 2 · esMayorDeEdad(persona)
// persona es como { nombre: "Ana", edad: 18 }.
// Devuelve true si su edad es 18 o más.
// Ejemplos: esMayorDeEdad({ nombre: "Ana", edad: 18 }) -> true
//           esMayorDeEdad({ nombre: "Leo", edad: 17 }) -> false
export const esMayorDeEdad = (persona) => {
  return persona.edad >= 18 ? true : false
};

// 3 · presentacion(persona)
// persona es como { nombre: "Ada", edad: 36 }.
// Devuelve EXACTAMENTE el texto: "Hola, soy Ada y tengo 36 años"
// Ejemplo: presentacion({ nombre: "Leo", edad: 10 }) -> "Hola, soy Leo y tengo 10 años"
export const presentacion = (persona) => {
  return `Hola, soy ${persona.nombre} y tengo ${persona.edad} años`
};

// 4 · disponible(producto)
// producto es como { nombre: "Camiseta", activo: true, stock: 5 }.
// Devuelve true solo si está activo Y además tiene stock (stock mayor que 0).
// Ejemplos: disponible({ activo: true, stock: 5 }) -> true
//           disponible({ activo: true, stock: 0 }) -> false
export const disponible = (producto) => {
  return producto.activo === true && producto.stock > 0 ? true : false
};

// 5 · precioRebajado(producto)
// producto es como { precio: 100, oferta: true }.
// Si está en oferta, devuelve el precio con 10 de descuento. Si no, el precio tal cual.
// Ejemplos: precioRebajado({ precio: 100, oferta: true }) -> 90
//           precioRebajado({ precio: 100, oferta: false }) -> 100
export const precioRebajado = (producto) => {
  return producto.oferta === true ? (producto.precio) - 10 : producto.precio
};

precioRebajado({precio: 50, oferta: true})

// 6 · nombres(personas)
// personas es un ARRAY de objetos como [{ nombre: "Ada" }, { nombre: "Leo" }].
// Devuelve un array con SOLO los nombres.
// Ejemplo: nombres([{ nombre: "Ada" }, { nombre: "Leo" }]) -> ["Ada", "Leo"]
export const nombres = (personas) => {
  
};

// 7 · mayoresDeEdad(personas)
// personas es un array de objetos con su edad.
// Devuelve un array NUEVO solo con las personas de 18 años o más (los objetos enteros).
// Ejemplo: mayoresDeEdad([{ nombre: "Ada", edad: 30 }, { nombre: "Leo", edad: 15 }])
//          -> [{ nombre: "Ada", edad: 30 }]
export const mayoresDeEdad = (personas) => {
  // TODO
};

// 8 · buscarPorId(productos, id)
// Recibe un array de productos (cada uno con su id) y un id.
// Devuelve el primer producto cuyo id coincida. Si no hay ninguno, devuelve undefined.
// Ejemplo: buscarPorId([{ id: 1 }, { id: 2 }], 2) -> { id: 2 }
export const buscarPorId = (productos, id) => {
  // TODO
};

// 9 · totalCarrito(productos)
// productos es un array de objetos como [{ precio: 10 }, { precio: 20 }].
// Devuelve la suma de todos los precios. Un carrito vacío suma 0.
// Ejemplo: totalCarrito([{ precio: 10 }, { precio: 20 }, { precio: 5 }]) -> 35
export const totalCarrito = (productos) => {
  // TODO
};

// 10 · nombresEnOferta(productos)
// productos es un array como [{ nombre: "A", oferta: true }, { nombre: "B", oferta: false }].
// Devuelve un array con los nombres SOLO de los que están en oferta.
// Ejemplo: nombresEnOferta([{ nombre: "A", oferta: true }, { nombre: "B", oferta: false }]) -> ["A"]
export const nombresEnOferta = (productos) => {
  // TODO
};
