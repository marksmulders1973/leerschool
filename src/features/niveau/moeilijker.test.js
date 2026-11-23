// Idee 90 (23 nov 2026): "te makkelijk" onthouden.
import { describe, it, expect } from "vitest";
import { wilMoeilijker } from "./signalen.js";
import { buildTopicQuiz } from "../practice/buildTopicQuiz.js";

const DAG = 86400000;
const nu = 1795430000000;
const g = (gevoel, dagenGeleden) => ({ t: nu - dagenGeleden * DAG, gevoel });

describe("wilMoeilijker", () => {
  it("niets gezegd of één keer = niet", () => {
    expect(wilMoeilijker(nu, {})).toBe(false);
    expect(wilMoeilijker(nu, { gevoel: [g("te makkelijk", 1)] })).toBe(false);
  });
  it("twee keer te makkelijk = wel, ook met 'goed' ertussen", () => {
    expect(wilMoeilijker(nu, { gevoel: [g("te makkelijk", 9), g("goed", 5), g("te makkelijk", 1)] })).toBe(true);
  });
  it("te moeilijk daarna zet het terug", () => {
    expect(wilMoeilijker(nu, { gevoel: [g("te makkelijk", 9), g("te makkelijk", 5), g("te moeilijk", 1)] })).toBe(false);
    expect(wilMoeilijker(nu, { gevoel: [g("te moeilijk", 9), g("te makkelijk", 5), g("te makkelijk", 1)] })).toBe(true);
  });
  it("ouder dan 28 dagen telt niet", () => {
    expect(wilMoeilijker(nu, { gevoel: [g("te makkelijk", 40), g("te makkelijk", 1)] })).toBe(false);
  });
});

describe("buildTopicQuiz moeilijker", () => {
  it("kiest alleen vragen uit de tweede helft van de delen", async () => {
    const gewoon = await buildTopicQuiz({ pathId: "breuken-po", shuffleQuestions: false });
    const delen = Math.max(...gewoon.questions.map((q) => q.stapIdx)) + 1;
    const { quiz, questions } = await buildTopicQuiz({ pathId: "breuken-po", aantal: 5, moeilijker: true });
    expect(quiz.moeilijker).toBe(true);
    expect(questions).toHaveLength(5);
    for (const q of questions) expect(q.stapIdx).toBeGreaterThanOrEqual(Math.ceil(delen / 2));
  });
  it("zonder de vlag verandert er niets", async () => {
    const { quiz } = await buildTopicQuiz({ pathId: "breuken-po", aantal: 5 });
    expect(quiz.moeilijker).toBe(false);
  });
});
