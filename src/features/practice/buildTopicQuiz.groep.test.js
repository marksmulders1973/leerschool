import { describe, it, expect } from "vitest";
import { buildTopicQuiz } from "./buildTopicQuiz.js";

// Mark 8 okt 2026: "zit je in groep 5, dan alleen groep-5-stof" (Noa vond groep-7-stof in het kwartier van groep 5).
describe("buildTopicQuiz — vanafGroep-filter", () => {
  it("groep 5 krijgt geen stappen of vragen met vanafGroep 6 of 7", async () => {
    const { questions } = await buildTopicQuiz({ pathId: "dieren-seizoenen-natuur", groep: 5 });
    expect(questions.length).toBeGreaterThan(10);
    for (const q of questions) {
      expect([3, 4, 8, 9]).not.toContain(q.stapIdx);
      expect(q.q).not.toMatch(/zomer warmer/);
    }
  });
  it("groep 7 krijgt alles, ook de aardas-vraag", async () => {
    const { questions } = await buildTopicQuiz({ pathId: "dieren-seizoenen-natuur", groep: 7 });
    expect(questions.some((q) => /zomer warmer/.test(q.q))).toBe(true);
    expect(questions.some((q) => q.stapIdx === 8)).toBe(true);
  });
  it("zonder groep (middelbare school) blijft alles staan", async () => {
    const a = await buildTopicQuiz({ pathId: "dieren-seizoenen-natuur" });
    const b = await buildTopicQuiz({ pathId: "dieren-seizoenen-natuur", groep: 7 });
    expect(a.questions.length).toBe(b.questions.length);
  });
});
