import { describe, it, expect } from "vitest";
import {
  doble,
  esMayorDeEdad,
  esPasswordSegura,
  clasificaTemp,
  esAdolescente,
  nota,
  tieneArroba,
  cuentaPares,
  sumaArray,
  todosPositivos,
} from "./ejercicios.js";

// Cada describe es un peldaño. El número de tests en verde por peldaño
// te dice exactamente dónde se atasca cada alumno y con qué caso.

describe("1 · doble", () => {
  it.each([
    [4, 8],
    [0, 0],
    [-3, -6],
    [10, 20],
  ])("doble(%p) === %p", (entrada, esperado) => {
    expect(doble(entrada)).toBe(esperado);
  });
});

describe("2 · esMayorDeEdad", () => {
  it.each([
    [18, true], // frontera
    [17, false], // frontera
    [25, true],
    [0, false],
  ])("esMayorDeEdad(%p) === %p", (entrada, esperado) => {
    expect(esMayorDeEdad(entrada)).toBe(esperado);
  });
});

describe("3 · esPasswordSegura", () => {
  it.each([
    ["123456", true], // 6 caracteres, frontera
    ["12345", false], // 5 caracteres, frontera
    ["abcdefgh", true],
    ["", false],
  ])("esPasswordSegura(%p) === %p", (entrada, esperado) => {
    expect(esPasswordSegura(entrada)).toBe(esperado);
  });
});

describe("4 · clasificaTemp", () => {
  it.each([
    [10, "frío"],
    [19, "frío"], // frontera
    [20, "calor"], // frontera
    [25, "calor"],
  ])("clasificaTemp(%p) === %p", (entrada, esperado) => {
    expect(clasificaTemp(entrada)).toBe(esperado);
  });
});

describe("5 · esAdolescente", () => {
  it.each([
    [13, true], // frontera inferior
    [17, true], // frontera superior
    [12, false], // frontera inferior
    [18, false], // frontera superior
    [15, true],
    [0, false],
  ])("esAdolescente(%p) === %p", (entrada, esperado) => {
    expect(esAdolescente(entrada)).toBe(esperado);
  });
});

describe("6 · nota", () => {
  it.each([
    [0, "suspenso"],
    [4, "suspenso"], // frontera
    [5, "aprobado"], // frontera
    [6, "aprobado"],
    [7, "notable"], // frontera
    [8, "notable"],
    [9, "sobresaliente"], // frontera
    [10, "sobresaliente"],
  ])("nota(%p) === %p", (entrada, esperado) => {
    expect(nota(entrada)).toBe(esperado);
  });
});

describe("7 · tieneArroba", () => {
  it.each([
    ["a@b.com", true],
    ["hola", false],
    ["@", true],
    ["", false],
  ])("tieneArroba(%p) === %p", (entrada, esperado) => {
    expect(tieneArroba(entrada)).toBe(esperado);
  });
});

describe("8 · cuentaPares", () => {
  it.each([
    [[1, 2, 3, 4], 2],
    [[1, 3, 5], 0],
    [[2, 4, 6], 3],
    [[], 0],
  ])("cuentaPares(%p) === %p", (entrada, esperado) => {
    expect(cuentaPares(entrada)).toBe(esperado);
  });
});

describe("9 · sumaArray", () => {
  it.each([
    [[1, 2, 3], 6],
    [[], 0], // array vacío
    [[10], 10],
    [[-1, 1], 0],
  ])("sumaArray(%p) === %p", (entrada, esperado) => {
    expect(sumaArray(entrada)).toBe(esperado);
  });
});

describe("10 · todosPositivos", () => {
  it.each([
    [[1, 2, 3], true],
    [[1, -2, 3], false],
    [[0, 1], false], // 0 no es positivo
    [[], true], // vacío: ninguno incumple
  ])("todosPositivos(%p) === %p", (entrada, esperado) => {
    expect(todosPositivos(entrada)).toBe(esperado);
  });
});
