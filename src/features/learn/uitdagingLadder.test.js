import { describe, it, expect } from "vitest";
import { losBruikbaar, bouwTreden, naTrede, MAX_TREDEN } from "./uitdagingLadder.js";

const mc = (q) => ({ q, options: ["8", "27", "21", "72"], answer: 0 });
const pad = {
  steps: [
    { title: "Deel 1", checks: [mc("6 ÷ 2 = ?")] },
    { title: "Deel 2", checks: [mc("24 ÷ 3 = ?")] },
    { title: "Alleen met tekst", checks: [{ ...mc("Wat staat er?"), bronTekst: "Een verhaal" }] },
    { title: "Deel 4", checks: [mc("25 ÷ 4 = ? rest ?")] },
    { title: "Deel 5", checks: [mc("Prijs per stuk?")] },
  ],
};

describe("losBruikbaar", () => {
  it("gewone meerkeuzevraag mag", () => expect(losBruikbaar(mc("24 ÷ 3 = ?"))).toBe(true));
  it("vraag met leestekst, plaatje of verwijzing naar 'hierboven' niet", () => {
    expect(losBruikbaar({ ...mc("x"), bronTekst: "t" })).toBe(false);
    expect(losBruikbaar({ ...mc("x"), svg: "<svg/>" })).toBe(false);
    expect(losBruikbaar(mc("Kijk naar de tabel. Hoeveel?"))).toBe(false);
  });
  it("kapotte vraag niet", () => {
    expect(losBruikbaar({ q: "x", options: ["a"], answer: 0 })).toBe(false);
    expect(losBruikbaar({ q: "x", options: ["a", "b"], answer: 5 })).toBe(false);
  });
});

describe("bouwTreden", () => {
  it("één vraag per volgend deel, delen zonder losse vraag overgeslagen", () => {
    const t = bouwTreden(pad, 0, { rng: () => 0 });
    expect(t.map((x) => x.stapIdx)).toEqual([1, 3, 4]);
  });
  it("laatste deel: geen treden", () => expect(bouwTreden(pad, 4)).toEqual([]));
  it("hoogstens MAX_TREDEN", () => {
    const lang = { steps: Array.from({ length: 12 }, (_, i) => ({ title: `D${i}`, checks: [mc(`v${i}`)] })) };
    expect(bouwTreden(lang, 0)).toHaveLength(MAX_TREDEN);
  });
  it("zonder stap (heel leerpad af): geen treden", () => expect(bouwTreden(pad, null)).toEqual([]));
});

describe("naTrede", () => {
  it("fout = grens hier", () => expect(naTrede({ trede: 1, aantal: 3, goed: false })).toEqual({ klaar: true, reden: "fout", grens: 1 }));
  it("te makkelijk = hoger", () => expect(naTrede({ trede: 0, aantal: 3, goed: true, gevoel: "te-makkelijk" })).toEqual({ klaar: false, volgende: 1 }));
  it("te makkelijk op de bovenste tree = top", () => expect(naTrede({ trede: 2, aantal: 3, goed: true, gevoel: "te-makkelijk" })).toEqual({ klaar: true, reden: "top", grens: null }));
  it("precies goed en te moeilijk = grens hier", () => {
    expect(naTrede({ trede: 1, aantal: 3, goed: true, gevoel: "goed" })).toEqual({ klaar: true, reden: "goed", grens: 1 });
    expect(naTrede({ trede: 1, aantal: 3, goed: true, gevoel: "te-moeilijk" })).toEqual({ klaar: true, reden: "te-moeilijk", grens: 1 });
  });
});
