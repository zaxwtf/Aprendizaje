import { describe, it, expect } from "vitest";
import {
  esPar,
  puedeVotar,
  esFinDeSemana,
  nombreValido,
  precioEnvio,
  totalCarrito,
  inicialMayuscula,
  soloPares,
  dobles,
  cuentaAprobados,
} from "./ejercicios.js";

// Cada describe es un peldaño. El número de tests en verde por peldaño
// te dice exactamente dónde se atasca cada alumno y con qué caso.

describe("1 · esPar", () => {
  it.each([
    [4, true],
    [7, false],
    [0, true], // 0 es par
    [-2, true],
  ])("esPar(%p) === %p", (entrada, esperado) => {
    expect(esPar(entrada)).toBe(esperado);
  });
});

describe("2 · puedeVotar", () => {
  it.each([
    [18, true, true], // frontera de edad
    [17, true, false], // frontera de edad
    [18, false, false], // mayor de edad pero no ciudadano
    [40, true, true],
  ])("puedeVotar(%p, %p) === %p", (edad, esCiudadano, esperado) => {
    expect(puedeVotar(edad, esCiudadano)).toBe(esperado);
  });
});

describe("3 · esFinDeSemana", () => {
  it.each([
    ["sábado", true],
    ["domingo", true],
    ["lunes", false],
    ["viernes", false],
  ])("esFinDeSemana(%p) === %p", (entrada, esperado) => {
    expect(esFinDeSemana(entrada)).toBe(esperado);
  });
});

describe("4 · nombreValido", () => {
  it.each([
    ["ana", true], // 3, frontera inferior
    ["al", false], // 2, frontera inferior
    ["abcdefghijklmno", true], // 15, frontera superior
    ["abcdefghijklmnop", false], // 16, frontera superior
    ["juan", true],
  ])("nombreValido(%p) === %p", (entrada, esperado) => {
    expect(nombreValido(entrada)).toBe(esperado);
  });
});

describe("5 · precioEnvio", () => {
  it.each([
    [50, 0], // frontera: envío gratis desde 50
    [49, 5], // frontera
    [100, 0],
    [0, 5],
  ])("precioEnvio(%p) === %p", (entrada, esperado) => {
    expect(precioEnvio(entrada)).toBe(esperado);
  });
});

describe("6 · totalCarrito", () => {
  it.each([
    [20, 2, 45], // subtotal 40 -> +5 de envío
    [20, 3, 60], // subtotal 60 -> envío gratis
    [50, 1, 50], // subtotal 50 -> frontera, gratis
    [10, 2, 25], // subtotal 20 -> +5
  ])("totalCarrito(%p, %p) === %p", (precio, cantidad, esperado) => {
    expect(totalCarrito(precio, cantidad)).toBe(esperado);
  });
});

describe("7 · inicialMayuscula", () => {
  it.each([
    ["ada", "Ada"],
    ["juan", "Juan"],
    ["a", "A"], // una sola letra
    ["lovelace", "Lovelace"],
  ])("inicialMayuscula(%p) === %p", (entrada, esperado) => {
    expect(inicialMayuscula(entrada)).toBe(esperado);
  });
});

describe("8 · soloPares", () => {
  it.each([
    [[1, 2, 3, 4], [2, 4]],
    [[1, 3, 5], []],
    [[2, 4], [2, 4]],
    [[], []],
  ])("soloPares(%p) -> %p", (entrada, esperado) => {
    expect(soloPares(entrada)).toEqual(esperado);
  });
});

describe("9 · dobles", () => {
  it.each([
    [[1, 2, 3], [2, 4, 6]],
    [[], []],
    [[-1, 0, 1], [-2, 0, 2]],
    [[5], [10]],
  ])("dobles(%p) -> %p", (entrada, esperado) => {
    expect(dobles(entrada)).toEqual(esperado);
  });
});

describe("10 · cuentaAprobados", () => {
  it.each([
    [[4, 5, 6, 9, 2], 3], // 5 es aprobado (frontera)
    [[1, 2, 3], 0],
    [[5, 5, 5], 3],
    [[], 0],
  ])("cuentaAprobados(%p) === %p", (entrada, esperado) => {
    expect(cuentaAprobados(entrada)).toBe(esperado);
  });
});
