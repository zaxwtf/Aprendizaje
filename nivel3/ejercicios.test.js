import { describe, it, expect } from "vitest";
import {
  nombreCompleto,
  esMayorDeEdad,
  presentacion,
  disponible,
  precioRebajado,
  nombres,
  mayoresDeEdad,
  buscarPorId,
  totalCarrito,
  nombresEnOferta,
} from "./ejercicios.js";

// Nivel 3: objetos y arrays de objetos (la forma de los datos de Mongo).
// Cada describe es un peldaño.

describe("1 · nombreCompleto", () => {
  it.each([
    [{ nombre: "Ada", apellido: "Lovelace" }, "Ada Lovelace"],
    [{ nombre: "Alan", apellido: "Turing" }, "Alan Turing"],
    [{ nombre: "Grace", apellido: "Hopper" }, "Grace Hopper"],
  ])("nombreCompleto(%o) === %p", (persona, esperado) => {
    expect(nombreCompleto(persona)).toBe(esperado);
  });
});

describe("2 · esMayorDeEdad", () => {
  it.each([
    [{ nombre: "Ana", edad: 18 }, true], // frontera
    [{ nombre: "Leo", edad: 17 }, false], // frontera
    [{ nombre: "Sara", edad: 40 }, true],
    [{ nombre: "Tim", edad: 0 }, false],
  ])("esMayorDeEdad(%o) === %p", (persona, esperado) => {
    expect(esMayorDeEdad(persona)).toBe(esperado);
  });
});

describe("3 · presentacion", () => {
  it.each([
    [{ nombre: "Ada", edad: 36 }, "Hola, soy Ada y tengo 36 años"],
    [{ nombre: "Leo", edad: 10 }, "Hola, soy Leo y tengo 10 años"],
  ])("presentacion(%o) === %p", (persona, esperado) => {
    expect(presentacion(persona)).toBe(esperado);
  });
});

describe("4 · disponible", () => {
  it.each([
    [{ nombre: "Camiseta", activo: true, stock: 5 }, true],
    [{ nombre: "Gorra", activo: true, stock: 0 }, false], // sin stock
    [{ nombre: "Bufanda", activo: false, stock: 5 }, false], // inactivo
    [{ nombre: "Guante", activo: true, stock: 1 }, true],
  ])("disponible(%o) === %p", (producto, esperado) => {
    expect(disponible(producto)).toBe(esperado);
  });
});

describe("5 · precioRebajado", () => {
  it.each([
    [{ precio: 100, oferta: true }, 90], // 10 de descuento
    [{ precio: 100, oferta: false }, 100],
    [{ precio: 50, oferta: true }, 40],
    [{ precio: 20, oferta: false }, 20],
  ])("precioRebajado(%o) === %p", (producto, esperado) => {
    expect(precioRebajado(producto)).toBe(esperado);
  });
});

describe("6 · nombres", () => {
  it.each([
    [[{ nombre: "Ada" }, { nombre: "Leo" }], ["Ada", "Leo"]],
    [[], []],
    [[{ nombre: "Sara" }], ["Sara"]],
  ])("nombres(%o) -> %p", (personas, esperado) => {
    expect(nombres(personas)).toEqual(esperado);
  });
});

describe("7 · mayoresDeEdad", () => {
  it.each([
    [
      [{ nombre: "Ada", edad: 30 }, { nombre: "Leo", edad: 15 }],
      [{ nombre: "Ada", edad: 30 }],
    ],
    [[{ nombre: "Sara", edad: 18 }], [{ nombre: "Sara", edad: 18 }]], // frontera 18
    [[{ nombre: "Tim", edad: 10 }], []],
    [[], []],
  ])("mayoresDeEdad(%o) -> %p", (personas, esperado) => {
    expect(mayoresDeEdad(personas)).toEqual(esperado);
  });
});

describe("8 · buscarPorId", () => {
  const productos = [
    { id: 1, nombre: "A" },
    { id: 2, nombre: "B" },
  ];

  // El caso "no existe" va junto a uno que sí existe, en el mismo test,
  // para que una función vacía (que devuelve undefined) no lo pase de chiripa.
  it("encuentra el producto con ese id, y devuelve undefined si no está", () => {
    expect(buscarPorId(productos, 2)).toEqual({ id: 2, nombre: "B" });
    expect(buscarPorId(productos, 99)).toBe(undefined);
  });

  it("encuentra el único producto de la lista", () => {
    expect(buscarPorId([{ id: 5, nombre: "X" }], 5)).toEqual({ id: 5, nombre: "X" });
  });
});

describe("9 · totalCarrito", () => {
  it.each([
    [[{ precio: 10 }, { precio: 20 }, { precio: 5 }], 35],
    [[], 0], // carrito vacío
    [[{ precio: 100 }], 100],
  ])("totalCarrito(%o) === %p", (productos, esperado) => {
    expect(totalCarrito(productos)).toBe(esperado);
  });
});

describe("10 · nombresEnOferta", () => {
  it.each([
    [
      [
        { nombre: "A", oferta: true },
        { nombre: "B", oferta: false },
        { nombre: "C", oferta: true },
      ],
      ["A", "C"],
    ],
    [[{ nombre: "X", oferta: false }], []],
    [[], []],
  ])("nombresEnOferta(%o) -> %p", (productos, esperado) => {
    expect(nombresEnOferta(productos)).toEqual(esperado);
  });
});
