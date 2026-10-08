import { describe, it, expect, beforeEach } from "vitest";
import {
  vraagSleutel, markeerGezien, isGezien, aantalGezien, ongezienEerst,
  kiesStapVragen, bewaardeStapVragen, vergeetStapVragen, vragenPerBezoek, MAX_SLEUTELS,
} from "./geziendeVragen.js";

beforeEach(() => {
  localStorage.clear();
});

const maakChecks = (n) => Array.from({ length: n }, (_, i) => ({ q: `Vraag nummer ${i}?`, options: ["a", "b", "c", "d"], answer: 0 }));

describe("vraagSleutel", () => {
  it("is stabiel en hangt af van pad + tekst, niet van witruimte", () => {
    expect(vraagSleutel("p", "Hoeveel is 2 + 2?")).toBe(vraagSleutel("p", "  Hoeveel is  2 + 2? "));
    expect(vraagSleutel("p", "A?")).not.toBe(vraagSleutel("p", "B?"));
    expect(vraagSleutel("p1", "A?")).not.toBe(vraagSleutel("p2", "A?"));
  });
});

describe("markeerGezien", () => {
  it("onthoudt gezien en begrenst op MAX_SLEUTELS (oudste eruit)", () => {
    markeerGezien("x");
    expect(isGezien("x")).toBe(true);
    expect(isGezien("y")).toBe(false);
    const veel = {};
    for (let i = 0; i < MAX_SLEUTELS; i++) veel[`k${i}`] = 1;
    localStorage.setItem("lk_gezien_v1", JSON.stringify(veel));
    markeerGezien("nieuw");
    expect(aantalGezien()).toBe(MAX_SLEUTELS);
    expect(isGezien("k0")).toBe(false); // oudste weg
    expect(isGezien("nieuw")).toBe(true);
  });
  it("valt niet om bij kapotte opslag", () => {
    localStorage.setItem("lk_gezien_v1", "{kapot");
    expect(() => markeerGezien("a")).not.toThrow();
    expect(isGezien("a")).toBe(true);
  });
});

describe("ongezienEerst", () => {
  it("zet nooit geziene vragen vooraan, daarna langst geleden gezien", () => {
    const items = ["a", "b", "c", "d"];
    markeerGezien("c");
    markeerGezien("a"); // a is het laatst gezien
    expect(ongezienEerst(items, (x) => x)).toEqual(["b", "d", "c", "a"]);
  });
  it("opnieuw zien schuift naar achteren", () => {
    markeerGezien("a");
    markeerGezien("b");
    markeerGezien("a");
    expect(ongezienEerst(["a", "b"], (x) => x)).toEqual(["b", "a"]);
  });
});

describe("kiesStapVragen", () => {
  it("≤ 5 vragen: allemaal, fout eerst", () => {
    const checks = maakChecks(4);
    expect(kiesStapVragen({ pathId: "p", stepIdx: 0, checks, fouteIdx: [2] })).toEqual([2, 0, 1, 3]);
  });
  it("> 5 vragen: hoogstens 5, eerst nieuwe; volgend bezoek andere vragen", () => {
    const checks = maakChecks(12);
    const eerste = kiesStapVragen({ pathId: "p", stepIdx: 1, checks });
    expect(eerste).toEqual([0, 1, 2, 3, 4]);
    eerste.forEach((i) => markeerGezien(vraagSleutel("p", checks[i].q)));
    vergeetStapVragen("p", 1); // stap af
    const tweede = kiesStapVragen({ pathId: "p", stepIdx: 1, checks });
    expect(tweede).toEqual([5, 6, 7, 8, 9]);
    tweede.forEach((i) => markeerGezien(vraagSleutel("p", checks[i].q)));
    vergeetStapVragen("p", 1);
    // nog 2 nieuwe (10, 11), dan de langst geleden geziene (0, 1, 2)
    expect(kiesStapVragen({ pathId: "p", stepIdx: 1, checks })).toEqual([10, 11, 0, 1, 2]);
  });
  it("foute vragen van vorige keer gaan vóór nieuwe", () => {
    const checks = maakChecks(10);
    [0, 1, 2].forEach((i) => markeerGezien(vraagSleutel("p", checks[i].q)));
    expect(kiesStapVragen({ pathId: "p", stepIdx: 0, checks, fouteIdx: [1] })).toEqual([1, 3, 4, 5, 6]);
  });
  it("meer dan 5 foute: alleen 5 foute", () => {
    const checks = maakChecks(10);
    expect(kiesStapVragen({ pathId: "p", stepIdx: 0, checks, fouteIdx: [9, 8, 7, 6, 5, 4] })).toEqual([9, 8, 7, 6, 5]);
  });
  it("keuze blijft bewaard tot de stap af is (hervatten wijst naar dezelfde vraag)", () => {
    const checks = maakChecks(12);
    const a = kiesStapVragen({ pathId: "p", stepIdx: 2, checks });
    markeerGezien(vraagSleutel("p", checks[a[0]].q)); // halverwege gestopt
    expect(bewaardeStapVragen("p", 2)).toEqual(a);
    expect(kiesStapVragen({ pathId: "p", stepIdx: 2, checks })).toEqual(a);
    vergeetStapVragen("p", 2);
    expect(bewaardeStapVragen("p", 2)).toBe(null);
  });
  it("bewaarde keuze vervalt als het aantal vragen veranderde", () => {
    kiesStapVragen({ pathId: "p", stepIdx: 0, checks: maakChecks(8) });
    const nieuw = kiesStapVragen({ pathId: "p", stepIdx: 0, checks: maakChecks(12) });
    expect(nieuw.length).toBe(5);
    expect(bewaardeStapVragen("p", 0)).toEqual(nieuw);
  });
  it("max Infinity (examens): alle vragen", () => {
    expect(kiesStapVragen({ pathId: "examen-x", stepIdx: 0, checks: maakChecks(8), max: Infinity }).length).toBe(8);
  });
  it("geen vragen: lege keuze, niets bewaard", () => {
    expect(kiesStapVragen({ pathId: "p", stepIdx: 0, checks: [] })).toEqual([]);
    expect(bewaardeStapVragen("p", 0)).toBe(null);
  });
});

describe("vragenPerBezoek", () => {
  it("min(aantal, 5)", () => {
    expect(vragenPerBezoek(3)).toBe(3);
    expect(vragenPerBezoek(12)).toBe(5);
    expect(vragenPerBezoek(0)).toBe(0);
    expect(vragenPerBezoek(12, Infinity)).toBe(12);
  });
});
