import { describe, it, expect } from "vitest";
import { kiesZwakkeConcepten, verdeelItems } from "./opMaat.js";

const rec = (pathId, attempts, correct, extra = {}) => ({
  pathId,
  attempts,
  correct,
  path: { id: pathId, title: extra.title || pathId, subject: extra.subject || "rekenen" },
});

describe("kiesZwakkeConcepten", () => {
  it("lege of ongeldige input → lege lijst", () => {
    expect(kiesZwakkeConcepten([])).toEqual([]);
    expect(kiesZwakkeConcepten(null)).toEqual([]);
    expect(kiesZwakkeConcepten(undefined)).toEqual([]);
  });

  it("negeert concepten met te weinig pogingen", () => {
    // 1/3 = 33% maar slechts 3 pogingen (< minPogingen 4) → valt af.
    expect(kiesZwakkeConcepten([rec("breuken-po", 3, 1)])).toEqual([]);
  });

  it("negeert sterke concepten (>= drempel) en houdt zwakke over", () => {
    const recs = [
      rec("delen-po", 20, 19), // 95% → sterk, valt af
      rec("breuken-po", 20, 10), // 50% → zwak, blijft
    ];
    const zwak = kiesZwakkeConcepten(recs);
    expect(zwak.map((z) => z.id)).toEqual(["breuken-po"]);
    expect(zwak[0].pct).toBe(50);
  });

  it("sorteert zwakste (laagste %) eerst en respecteert maxConcepten", () => {
    const recs = [
      rec("a", 10, 6), // 60%
      rec("b", 10, 3), // 30%
      rec("c", 10, 5), // 50%
      rec("d", 10, 4), // 40%
      rec("e", 10, 2), // 20%
    ];
    const zwak = kiesZwakkeConcepten(recs, { maxConcepten: 3 });
    expect(zwak.map((z) => z.id)).toEqual(["e", "b", "d"]); // 20,30,40
  });

  it("sluit examen-paden uit (authentieke bron)", () => {
    expect(kiesZwakkeConcepten([rec("examen-economie-2024", 20, 5)])).toEqual([]);
  });
});

describe("verdeelItems", () => {
  it("verdeelt eerlijk en geeft de rest aan de eerste (zwakste)", () => {
    expect(verdeelItems(0)).toEqual([]);
    expect(verdeelItems(1, 12)).toEqual([12]);
    expect(verdeelItems(4, 12)).toEqual([3, 3, 3, 3]);
    expect(verdeelItems(5, 12)).toEqual([3, 3, 2, 2, 2]); // 12/5=2, rest 2 → eerste twee +1
    expect(verdeelItems(3, 10)).toEqual([4, 3, 3]);
  });
});
