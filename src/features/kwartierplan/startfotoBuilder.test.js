import { describe, it, expect } from "vitest";
import { buildStartfoto, aanbevolenPaden, PIJLERS, weekplanUitFoto } from "./startfotoBuilder.js";
import pathManifest from "../../learnPaths/pathManifest.generated.json";

describe("buildStartfoto", () => {
  it("levert 4 vragen per pijler, gegroepeerd, met geldig antwoord", async () => {
    const vragen = await buildStartfoto();
    expect(vragen.length).toBe(12);
    for (const p of PIJLERS) {
      expect(vragen.filter((v) => v.pijler === p.id).length).toBe(4);
    }
    // Gegroepeerd: pijler-volgorde is aaneengesloten (taal → rekenen → studie).
    const volgorde = vragen.map((v) => v.pijler);
    expect(volgorde.slice(0, 4).every((x) => x === PIJLERS[0].id)).toBe(true);
    for (const v of vragen) {
      expect(Array.isArray(v.options)).toBe(true);
      expect(v.answer).toBeGreaterThanOrEqual(0);
      expect(v.answer).toBeLessThan(v.options.length);
      // Startfoto is een foto, geen les: geen uitlegPad/wrongHints meesturen.
      expect(v.uitlegPad).toBeUndefined();
      expect(v.wrongHints).toBeUndefined();
    }
  });
});

describe("aanbevolenPaden", () => {
  it("adviseert max 5 bestaande paden, zwakste pijler eerst", () => {
    const paden = aanbevolenPaden({
      taal: { correct: 4, total: 4 },
      rekenen: { correct: 0, total: 4 },
      studievaardigheden: { correct: 2, total: 4 },
    });
    expect(paden.length).toBeGreaterThan(0);
    expect(paden.length).toBeLessThanOrEqual(5);
    // Zwakste pijler (rekenen) levert de eerste aanbevelingen.
    expect(paden[0].pijler).toBe("rekenen");
    // Elk advies verwijst naar een écht pad (kern-loop-regel).
    const ids = new Set(pathManifest.map((p) => p.id));
    for (const p of paden) {
      expect(ids.has(p.id)).toBe(true);
      expect(String(p.id).startsWith("doorstroomtoets-")).toBe(false);
    }
  });
});

describe("weekplanUitFoto", () => {
  it("maakt ma-vr uit de aanbevolen paden, zwakste eerst", () => {
    const paden = aanbevolenPaden({ taal: { correct: 1, total: 4 }, rekenen: { correct: 4, total: 4 }, studievaardigheden: { correct: 2, total: 4 } });
    const plan = weekplanUitFoto({ recommended_paths: paden });
    expect(plan.length).toBe(Math.min(5, paden.length));
    expect(plan[0].dag).toBe("Ma");
    expect(plan[0].id).toBe(paden[0].id);
    const ids = new Set(pathManifest.map((p) => p.id));
    plan.forEach((d) => expect(ids.has(d.id)).toBe(true));
  });
  it("geeft een leeg plan zonder startfoto", () => {
    expect(weekplanUitFoto(null)).toEqual([]);
    expect(weekplanUitFoto({ recommended_paths: [null, {}] })).toEqual([]);
  });
});
