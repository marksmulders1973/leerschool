import { describe, it, expect } from "vitest";
import { gatherPoChecks, sampleCitoMix, scoreCitoMix } from "./citoMixVragen.js";

describe("gatherPoChecks", () => {
  it("retourneert alleen PO-vragen met geldige meerkeuze-structuur", () => {
    const all = gatherPoChecks();
    expect(all.length).toBeGreaterThan(50); // we hebben 18+ paden, ~5-7 stappen, 3-6 checks
    for (const v of all) {
      expect(v.id).toBeTruthy();
      expect(v.question).toBeTruthy();
      expect(Array.isArray(v.options)).toBe(true);
      expect(v.options.length).toBeGreaterThanOrEqual(2);
      expect(typeof v.answer).toBe("number");
      expect(v.answer).toBeGreaterThanOrEqual(0);
      expect(v.answer).toBeLessThan(v.options.length);
      expect(["rekenen", "taal", "studievaardigheden"]).toContain(v.subject);
    }
  });

  it("classificeert schemas-stappenplannen-po als studievaardigheden", () => {
    const all = gatherPoChecks();
    const fromSchemas = all.filter((v) => v.pathId === "schemas-stappenplannen-po");
    expect(fromSchemas.length).toBeGreaterThan(0);
    expect(fromSchemas.every((v) => v.subject === "studievaardigheden")).toBe(true);
  });

  it("classificeert kaartlezen-po als studievaardigheden (via aardrijkskunde-fallback)", () => {
    const all = gatherPoChecks();
    const fromKaart = all.filter((v) => v.pathId === "kaartlezen-po");
    expect(fromKaart.length).toBeGreaterThan(0);
    expect(fromKaart.every((v) => v.subject === "studievaardigheden")).toBe(true);
  });
});

describe("sampleCitoMix", () => {
  it("retourneert exact `count` vragen", () => {
    const sample = sampleCitoMix(20);
    expect(sample.length).toBe(20);
  });

  it("respecteert globale rekenen-meerderheid in default mix", () => {
    const sample = sampleCitoMix(50);
    const rekenen = sample.filter((v) => v.subject === "rekenen").length;
    expect(rekenen).toBeGreaterThanOrEqual(15); // minstens ~30% (geeft ruimte voor pool-tekort)
  });

  it("vult tekort aan uit andere pijlers als 1 pool leeg is", () => {
    // mix met onbekend-pijler "natuurkunde" → moet alsnog count vragen geven
    const sample = sampleCitoMix(10, { natuurkunde: 1.0 });
    expect(sample.length).toBe(10);
  });

  it("geen duplicate vragen-id's in 1 sample", () => {
    const sample = sampleCitoMix(30);
    const ids = new Set(sample.map((v) => v.id));
    expect(ids.size).toBe(sample.length);
  });
});

describe("scoreCitoMix", () => {
  it("berekent totaal en per-pijler correct", () => {
    const questions = [
      { id: "a", subject: "rekenen", answer: 0, options: ["x","y"] },
      { id: "b", subject: "rekenen", answer: 1, options: ["x","y"] },
      { id: "c", subject: "taal", answer: 0, options: ["x","y"] },
      { id: "d", subject: "taal", answer: 1, options: ["x","y"] },
    ];
    const answers = [0, 0, 0, 1]; // 3/4 goed
    const r = scoreCitoMix(questions, answers);
    expect(r.total.correct).toBe(3);
    expect(r.total.total).toBe(4);
    expect(r.total.pct).toBe(75);
    expect(r.perPijler.rekenen).toEqual({ correct: 1, total: 2, pct: 50 });
    expect(r.perPijler.taal).toEqual({ correct: 2, total: 2, pct: 100 });
  });

  it("0 vragen = 0%", () => {
    const r = scoreCitoMix([], []);
    expect(r.total.pct).toBe(0);
  });
});
