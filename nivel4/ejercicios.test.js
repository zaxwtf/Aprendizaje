import { describe, it, expect } from "vitest";
import {
  nombresActivos,
  ordenarPorEdad,
  nombresActivosOrdenados,
  usuarioMasJoven,
  precioMaximo,
  hayMenores,
  totalEnOferta,
  subirPrecios,
  cuentaPorCategoria,
  nombresPorPrecioDesc,
} from "./ejercicios.js";

// Nivel 4: cadenas de operaciones sobre arrays de objetos (media query de Mongo).
// Cada describe es un peldaño.

describe("1 · nombresActivos", () => {
  it.each([
    [
      [
        { nombre: "Ana", activo: true },
        { nombre: "Leo", activo: false },
        { nombre: "Sara", activo: true },
      ],
      ["Ana", "Sara"],
    ],
    [[{ nombre: "Tim", activo: false }], []],
    [[], []],
  ])("nombresActivos(%o) -> %p", (usuarios, esperado) => {
    expect(nombresActivos(usuarios)).toEqual(esperado);
  });
});

describe("2 · ordenarPorEdad", () => {
  it.each([
    [
      [
        { nombre: "Ana", edad: 30 },
        { nombre: "Leo", edad: 18 },
        { nombre: "Sara", edad: 25 },
      ],
      [
        { nombre: "Leo", edad: 18 },
        { nombre: "Sara", edad: 25 },
        { nombre: "Ana", edad: 30 },
      ],
    ],
    [[{ nombre: "Solo", edad: 40 }], [{ nombre: "Solo", edad: 40 }]],
    [[], []],
  ])("ordenarPorEdad(%o) -> %p", (usuarios, esperado) => {
    expect(ordenarPorEdad(usuarios)).toEqual(esperado);
  });
});

describe("3 · nombresActivosOrdenados", () => {
  it.each([
    [
      [
        { nombre: "Sara", activo: true },
        { nombre: "Ana", activo: true },
        { nombre: "Leo", activo: false },
      ],
      ["Ana", "Sara"],
    ],
    [
      [
        { nombre: "Zoe", activo: true },
        { nombre: "Ada", activo: true },
      ],
      ["Ada", "Zoe"],
    ],
    [[], []],
  ])("nombresActivosOrdenados(%o) -> %p", (usuarios, esperado) => {
    expect(nombresActivosOrdenados(usuarios)).toEqual(esperado);
  });
});

describe("4 · usuarioMasJoven", () => {
  // Siempre hay al menos un usuario.
  it.each([
    [
      [
        { nombre: "Ana", edad: 30 },
        { nombre: "Leo", edad: 18 },
        { nombre: "Sara", edad: 25 },
      ],
      { nombre: "Leo", edad: 18 },
    ],
    [[{ nombre: "Uno", edad: 50 }], { nombre: "Uno", edad: 50 }],
  ])("usuarioMasJoven(%o) -> %o", (usuarios, esperado) => {
    expect(usuarioMasJoven(usuarios)).toEqual(esperado);
  });
});

describe("5 · precioMaximo", () => {
  // Siempre hay al menos un producto.
  it.each([
    [
      [
        { nombre: "A", precio: 10 },
        { nombre: "B", precio: 30 },
        { nombre: "C", precio: 20 },
      ],
      30,
    ],
    [[{ nombre: "Solo", precio: 5 }], 5],
  ])("precioMaximo(%o) === %p", (productos, esperado) => {
    expect(precioMaximo(productos)).toBe(esperado);
  });
});

describe("6 · hayMenores", () => {
  it.each([
    [[{ edad: 30 }, { edad: 15 }, { edad: 40 }], true],
    [[{ edad: 30 }, { edad: 18 }], false], // 18 no es menor
    [[], false],
  ])("hayMenores(%o) === %p", (usuarios, esperado) => {
    expect(hayMenores(usuarios)).toBe(esperado);
  });
});

describe("7 · totalEnOferta", () => {
  it.each([
    [
      [
        { precio: 10, oferta: true },
        { precio: 20, oferta: false },
        { precio: 5, oferta: true },
      ],
      15,
    ],
    [[{ precio: 100, oferta: false }], 0],
    [[], 0],
  ])("totalEnOferta(%o) === %p", (productos, esperado) => {
    expect(totalEnOferta(productos)).toBe(esperado);
  });
});

describe("8 · subirPrecios", () => {
  it.each([
    [
      [
        { nombre: "A", precio: 10 },
        { nombre: "B", precio: 20 },
      ],
      5,
      [
        { nombre: "A", precio: 15 },
        { nombre: "B", precio: 25 },
      ],
    ],
    [[{ nombre: "C", precio: 0 }], 10, [{ nombre: "C", precio: 10 }]],
    [[], 5, []],
  ])("subirPrecios(%o, %p) -> %o", (productos, cantidad, esperado) => {
    expect(subirPrecios(productos, cantidad)).toEqual(esperado);
  });
});

describe("9 · cuentaPorCategoria", () => {
  it("agrupa y cuenta por categoría", () => {
    const productos = [
      { nombre: "A", categoria: "ropa" },
      { nombre: "B", categoria: "hogar" },
      { nombre: "C", categoria: "ropa" },
    ];
    expect(cuentaPorCategoria(productos)).toEqual({ ropa: 2, hogar: 1 });
  });

  it("una sola categoría", () => {
    expect(cuentaPorCategoria([{ nombre: "X", categoria: "libros" }])).toEqual({
      libros: 1,
    });
  });

  it("array vacío -> objeto vacío", () => {
    expect(cuentaPorCategoria([])).toEqual({});
  });
});

describe("10 · nombresPorPrecioDesc", () => {
  it.each([
    [
      [
        { nombre: "A", precio: 10, activo: true },
        { nombre: "B", precio: 30, activo: true },
        { nombre: "C", precio: 20, activo: false },
      ],
      ["B", "A"], // C fuera (inactivo); B(30) antes que A(10)
    ],
    [
      [
        { nombre: "X", precio: 5, activo: true },
        { nombre: "Y", precio: 50, activo: true },
      ],
      ["Y", "X"],
    ],
    [[], []],
  ])("nombresPorPrecioDesc(%o) -> %p", (productos, esperado) => {
    expect(nombresPorPrecioDesc(productos)).toEqual(esperado);
  });
});
