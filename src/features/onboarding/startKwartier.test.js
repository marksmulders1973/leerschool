import { describe, it, expect } from "vitest";
import pathManifest from "../../learnPaths/pathManifest.generated.json";
import { parseGroep, kiesStartPaden, verweefVragen } from "./startKwartier.js";

describe("parseGroep", () => {
  it("leest losse cijfers en groep-strings", () => {
    expect(parseGroep("5")).toBe(5);
    expect(parseGroep(8)).toBe(8);
    expect(parseGroep("groep3")).toBe(3);
    expect(parseGroep("groep 7")).toBe(7);
  });
  it("geeft null voor VO en onzin", () => {
    expect(parseGroep("klas2")).toBeNull();
    expect(parseGroep("havo3")).toBeNull();
    expect(parseGroep("")).toBeNull();
    expect(parseGroep(null)).toBeNull();
    expect(parseGroep("groep12")).toBeNull();
  });
});

describe("kiesStartPaden", () => {
  const ids = new Set(pathManifest.map((p) => p.id));
  it("kiest voor elke groep alleen bestaande paden", () => {
    for (let g = 1; g <= 8; g++) {
      const paden = kiesStartPaden(String(g));
      expect(paden.length).toBeGreaterThanOrEqual(2);
      for (const id of paden) expect(ids.has(id), `${id} (groep ${g}) ontbreekt in manifest`).toBe(true);
    }
  });
  it("valt terug op groep 6 bij onbekend niveau", () => {
    expect(kiesStartPaden(undefined)).toEqual(kiesStartPaden("6"));
  });
});

describe("verweefVragen", () => {
  it("wisselt om-en-om per pad tot het aantal", () => {
    const r = verweefVragen([["r1", "r2"], ["t1", "t2"], ["l1"]], 5);
    expect(r).toEqual(["r1", "t1", "l1", "r2", "t2"]);
  });
  it("stopt netjes als paden leeg zijn", () => {
    expect(verweefVragen([[], ["t1"]], 5)).toEqual(["t1"]);
    expect(verweefVragen([[], []], 5)).toEqual([]);
  });
});
