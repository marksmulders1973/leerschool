import { describe, it, expect, beforeEach } from "vitest";
import { gatherPoChecks, sampleCitoMix, scoreCitoMix } from "./citoMixVragen.js";
import { recordWrong, clearAll } from "./adaptiveStore.js";

beforeEach(() => {
  clearAll();
});

describe("gatherPoChecks", () => {
  it("retourneert alleen PO-vragen met geldige meerkeuze-structuur", async () => {
    const all = await gatherPoChecks();
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

  it("classificeert schemas-stappenplannen-po als studievaardigheden", async () => {
    const all = await gatherPoChecks();
    const fromSchemas = all.filter((v) => v.pathId === "schemas-stappenplannen-po");
    expect(fromSchemas.length).toBeGreaterThan(0);
    expect(fromSchemas.every((v) => v.subject === "studievaardigheden")).toBe(true);
  });

  it("classificeert kaartlezen-po als studievaardigheden (via aardrijkskunde-fallback)", async () => {
    const all = await gatherPoChecks();
    const fromKaart = all.filter((v) => v.pathId === "kaartlezen-po");
    expect(fromKaart.length).toBeGreaterThan(0);
    expect(fromKaart.every((v) => v.subject === "studievaardigheden")).toBe(true);
  });
});

describe("sampleCitoMix", () => {
  it("retourneert exact `count` vragen", async () => {
    const sample = await sampleCitoMix(20);
    expect(sample.length).toBe(20);
  });

  it("respecteert globale rekenen-meerderheid in default mix", async () => {
    const sample = await sampleCitoMix(50);
    const rekenen = sample.filter((v) => v.subject === "rekenen").length;
    expect(rekenen).toBeGreaterThanOrEqual(15); // minstens ~30% (geeft ruimte voor pool-tekort)
  });

  it("vult tekort aan uit andere pijlers als 1 pool leeg is", async () => {
    // mix met onbekend-pijler "natuurkunde" → moet alsnog count vragen geven
    const sample = await sampleCitoMix(10, { natuurkunde: 1.0 });
    expect(sample.length).toBe(10);
  });

  it("geen duplicate vragen-id's in 1 sample", async () => {
    const sample = await sampleCitoMix(30);
    const ids = new Set(sample.map((v) => v.id));
    expect(ids.size).toBe(sample.length);
  });

  it("adaptive mode geeft voorrang aan eerder-foute vragen", async () => {
    // Markeer 3 specifieke checks als fout
    recordWrong("procenten-po", 0, 0);
    recordWrong("procenten-po", 0, 1);
    recordWrong("procenten-po", 0, 2);
    const sample = await sampleCitoMix(10);
    const fromWrong = sample.filter(
      (v) => v.pathId === "procenten-po" && v.stepIdx === 0
        && [0, 1, 2].includes(Number(v.id.split("::")[2]))
    );
    // 30% van 10 = 3 — alle 3 foute moeten in sample zitten
    expect(fromWrong.length).toBe(3);
  });

  it("subjectFilter beperkt pool tot één pijler", async () => {
    const sample = await sampleCitoMix(15, null, Math.random, { subjectFilter: "rekenen", adaptive: false });
    expect(sample.length).toBe(15);
    expect(sample.every((v) => v.subject === "rekenen")).toBe(true);
  });

  it("subjectFilter accepteert array van pijlers", async () => {
    const sample = await sampleCitoMix(15, null, Math.random, { subjectFilter: ["taal", "studievaardigheden"], adaptive: false });
    expect(sample.length).toBe(15);
    expect(sample.every((v) => ["taal", "studievaardigheden"].includes(v.subject))).toBe(true);
  });

  it("adaptive mode kan worden uitgeschakeld via opts", async () => {
    recordWrong("procenten-po", 0, 0);
    recordWrong("procenten-po", 0, 1);
    recordWrong("procenten-po", 0, 2);
    const samples = [];
    for (let i = 0; i < 5; i++) {
      samples.push(await sampleCitoMix(10, null, Math.random, { adaptive: false }));
    }
    // Met adaptive=false is het GROTENDEELS toeval; minstens één van 5 samples
    // mag de 3 markedchecks niet allemaal hebben.
    const someSampleMistFout = samples.some((s) => {
      const fromWrong = s.filter(
        (v) => v.pathId === "procenten-po" && v.stepIdx === 0
          && [0, 1, 2].includes(Number(v.id.split("::")[2]))
      );
      return fromWrong.length < 3;
    });
    expect(someSampleMistFout).toBe(true);
  });
});

describe("scoreCitoMix", () => {
  it("berekent totaal en per-pijler correct", async () => {
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

  it("0 vragen = 0%", async () => {
    const r = scoreCitoMix([], []);
    expect(r.total.pct).toBe(0);
  });
});
