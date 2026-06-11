import { describe, it, expect } from "vitest";
import {
  triple,
  esNegativo,
  esNombreLargo,
  clasificaEdad,
  enHorarioLaboral,
  tallaCamiseta,
  tieneEspacios,
  cuentaImpares,
  productoArray,
  todosPares,
} from "./ejercicios.js";

// Mismo nivel que el nivel 1, otros enunciados. Cada describe es un peldaño:
// el número de tests en verde te dice dónde se atasca cada alumno.

describe("1 · triple", () => {
  it.each([
    [2, 6],
    [0, 0],
    [-3, -9],
    [5, 15],
  ])("triple(%p) === %p", (entrada, esperado) => {
    expect(triple(entrada)).toBe(esperado);
  });
});

describe("2 · esNegativo", () => {
  it.each([
    [-1, true],
    [0, false], // frontera: 0 no es negativo
    [5, false],
    [-100, true],
  ])("esNegativo(%p) === %p", (entrada, esperado) => {
    expect(esNegativo(entrada)).toBe(esperado);
  });
});

describe("3 · esNombreLargo", () => {
  it.each([
    ["Maximiliano", true], // 11
    ["Ana", false], // 3
    ["12345678", false], // 8, frontera (más de 8)
    ["123456789", true], // 9, frontera
  ])("esNombreLargo(%p) === %p", (entrada, esperado) => {
    expect(esNombreLargo(entrada)).toBe(esperado);
  });
});

describe("4 · clasificaEdad", () => {
  it.each([
    [10, "menor"],
    [17, "menor"], // frontera
    [18, "adulto"], // frontera
    [40, "adulto"],
  ])("clasificaEdad(%p) === %p", (entrada, esperado) => {
    expect(clasificaEdad(entrada)).toBe(esperado);
  });
});

describe("5 · enHorarioLaboral", () => {
  it.each([
    [9, true], // frontera inferior
    [17, true], // frontera superior
    [8, false], // frontera inferior
    [18, false], // frontera superior
    [12, true],
  ])("enHorarioLaboral(%p) === %p", (entrada, esperado) => {
    expect(enHorarioLaboral(entrada)).toBe(esperado);
  });
});

describe("6 · tallaCamiseta", () => {
  it.each([
    [159, "S"],
    [160, "M"], // frontera
    [174, "M"],
    [175, "L"], // frontera
    [189, "L"],
    [190, "XL"], // frontera
  ])("tallaCamiseta(%p) === %p", (entrada, esperado) => {
    expect(tallaCamiseta(entrada)).toBe(esperado);
  });
});

describe("7 · tieneEspacios", () => {
  it.each([
    ["hola mundo", true],
    ["hola", false],
    [" ", true],
    ["", false],
  ])("tieneEspacios(%p) === %p", (entrada, esperado) => {
    expect(tieneEspacios(entrada)).toBe(esperado);
  });
});

describe("8 · cuentaImpares", () => {
  it.each([
    [[1, 2, 3, 4], 2],
    [[2, 4, 6], 0],
    [[1, 3, 5], 3],
    [[], 0],
  ])("cuentaImpares(%p) === %p", (entrada, esperado) => {
    expect(cuentaImpares(entrada)).toBe(esperado);
  });
});

describe("9 · productoArray", () => {
  it.each([
    [[2, 3, 4], 24],
    [[5], 5],
    [[], 1], // array vacío: el producto vacío es 1
    [[2, 0, 9], 0],
  ])("productoArray(%p) === %p", (entrada, esperado) => {
    expect(productoArray(entrada)).toBe(esperado);
  });
});

describe("10 · todosPares", () => {
  it.each([
    [[2, 4, 6], true],
    [[2, 3, 4], false],
    [[1], false],
    [[], true], // vacío: ninguno incumple
  ])("todosPares(%p) === %p", (entrada, esperado) => {
    expect(todosPares(entrada)).toBe(esperado);
  });
});
