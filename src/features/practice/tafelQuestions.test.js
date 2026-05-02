import { describe, it, expect } from "vitest";
import { generateTafelQuestions, TAFEL_VIDEOS } from "./tafelQuestions.js";

describe("generateTafelQuestions", () => {
  it("produceert 4 opties per vraag waarvan precies één juist", () => {
    const qs = generateTafelQuestions(7, 5);
    for (const q of qs) {
      expect(q.options).toHaveLength(4);
      const correct = Number(q.options[q.answer]);
      const [n, t] = q.q.match(/(\d+) × (\d+)/).slice(1).map(Number);
      expect(correct).toBe(n * t);
    }
  });

  it("genereert het gevraagde aantal vragen voor een vaste tafel (max 12)", () => {
    expect(generateTafelQuestions(3, 10)).toHaveLength(10);
    expect(generateTafelQuestions(3, 12)).toHaveLength(12);
    expect(generateTafelQuestions(3, 100)).toHaveLength(12);
  });

  it("alle vragen voor tafel 5 bevatten ' × 5 = '", () => {
    const qs = generateTafelQuestions(5, 12);
    for (const q of qs) {
      expect(q.q).toMatch(/× 5 =/);
    }
  });

  it("mix-modus levert vragen uit verschillende tafels", () => {
    const qs = generateTafelQuestions("mix", 30);
    expect(qs).toHaveLength(30);
    const tafels = new Set(qs.map((q) => Number(q.q.match(/× (\d+) =/)[1])));
    expect(tafels.size).toBeGreaterThan(1);
  });

  it("wrong-answers verschillen van het juiste antwoord en zijn positief", () => {
    const qs = generateTafelQuestions(8, 5);
    for (const q of qs) {
      const nums = q.options.map(Number);
      const correct = nums[q.answer];
      const wrongs = nums.filter((_, i) => i !== q.answer);
      for (const w of wrongs) {
        expect(w).not.toBe(correct);
        expect(w).toBeGreaterThan(0);
      }
    }
  });

  it("koppelt YouTube-link uit TAFEL_VIDEOS aan elke vraag", () => {
    const qs = generateTafelQuestions(4, 3);
    for (const q of qs) {
      expect(q.youtubeUrl).toBe(TAFEL_VIDEOS[4]);
    }
  });
});
