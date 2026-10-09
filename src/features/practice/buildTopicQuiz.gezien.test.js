import { describe, it, expect, beforeEach } from "vitest";
import { buildTopicQuiz } from "./buildTopicQuiz.js";
import { markeerGezien } from "../../shared/geziendeVragen.js";

beforeEach(() => {
  localStorage.clear();
});

// Mark 8 okt 2026: een terugkerend kind kreeg steeds dezelfde vragen. Nieuwe vragen eerst.
describe("buildTopicQuiz — ongeziene vragen eerst", () => {
  it("elke vraag krijgt een geziensleutel", async () => {
    const { questions } = await buildTopicQuiz({ pathId: "dieren-seizoenen-natuur", aantal: 5 });
    expect(questions.length).toBe(5);
    for (const q of questions) expect(typeof q.geziensleutel).toBe("string");
  });
  it("na het beantwoorden komen eerst andere vragen, tot alles gezien is", async () => {
    const alle = (await buildTopicQuiz({ pathId: "dieren-seizoenen-natuur", groep: 5 })).questions;
    const totaal = alle.length;
    expect(totaal).toBeGreaterThan(10);
    const gezien = new Set();
    for (let ronde = 0; ronde * 5 < totaal; ronde++) {
      const { questions } = await buildTopicQuiz({ pathId: "dieren-seizoenen-natuur", aantal: 5, groep: 5 });
      const nogNieuw = totaal - gezien.size;
      const nieuwInRonde = questions.filter((q) => !gezien.has(q.geziensleutel)).length;
      expect(nieuwInRonde).toBe(Math.min(5, nogNieuw));
      for (const q of questions) { gezien.add(q.geziensleutel); markeerGezien(q.geziensleutel); }
    }
    expect(gezien.size).toBe(new Set(alle.map((q) => q.geziensleutel)).size);
  });
  it("groepsfilter blijft gelden", async () => {
    const { questions } = await buildTopicQuiz({ pathId: "dieren-seizoenen-natuur", groep: 5 });
    for (const q of questions) expect([3, 4, 8, 9]).not.toContain(q.stapIdx);
  });
});
