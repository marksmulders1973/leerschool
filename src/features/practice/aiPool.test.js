import { describe, it, expect } from "vitest";
import {
  normalizePoolText,
  computeQHash,
  buildTextbookKey,
  poolRowToQuestion,
} from "./aiPool.js";

describe("normalizePoolText", () => {
  it("verwijdert hoofdletters en collapseert whitespace", () => {
    expect(normalizePoolText("  Hoeveel  is\t2 +  2?\n")).toBe("hoeveel is 2 + 2?");
  });

  it("returnt lege string voor null/undefined", () => {
    expect(normalizePoolText(null)).toBe("");
    expect(normalizePoolText(undefined)).toBe("");
  });
});

describe("computeQHash", () => {
  it("combineert subject|level|genormaliseerde-vraag", () => {
    expect(computeQHash("Wat is 2+2?", "rekenen", "groep5")).toBe(
      "rekenen|groep5|wat is 2+2?"
    );
  });

  it("kapt af op 240 tekens", () => {
    const long = "a".repeat(500);
    const h = computeQHash(long, "x", "y");
    expect(h.length).toBe(240);
  });

  it("zelfde vraag-verschillen in casing/spaties geeft zelfde hash", () => {
    expect(computeQHash("WAT  is 2+2?", "x", "y")).toBe(computeQHash("wat is 2+2?", "x", "y"));
  });
});

describe("buildTextbookKey", () => {
  it("returnt null als bookName ontbreekt", () => {
    expect(buildTextbookKey(null)).toBeNull();
    expect(buildTextbookKey({})).toBeNull();
    expect(buildTextbookKey({ chapter: "1" })).toBeNull();
  });

  it("bouwt sleutel uit bookName|chapter|paragraph", () => {
    expect(buildTextbookKey({ bookName: "Wiskunde", chapter: "H1", paragraph: "1.2" })).toBe(
      "Wiskunde|H1|1.2"
    );
  });

  it("topic valt terug op paragraph-positie als paragraph leeg is", () => {
    expect(buildTextbookKey({ bookName: "B", chapter: "C", topic: "T" })).toBe("B|C|T");
  });

  it("kapt af op 240 tekens", () => {
    const k = buildTextbookKey({ bookName: "x".repeat(500) });
    expect(k.length).toBe(240);
  });
});

describe("poolRowToQuestion", () => {
  it("mapt DB-row naar quiz-vraag-shape", () => {
    const row = {
      question: "Wat?",
      options: ["a", "b"],
      answer: 0,
      explanation: "uitleg",
      svg: "<svg/>",
      youtube_url: "https://yt/x",
    };
    expect(poolRowToQuestion(row)).toEqual({
      q: "Wat?",
      options: ["a", "b"],
      answer: 0,
      explanation: "uitleg",
      svg: "<svg/>",
      youtubeUrl: "https://yt/x",
    });
  });

  it("zet lege optionele velden om naar undefined", () => {
    const row = { question: "Q", options: ["a"], answer: 0, explanation: null, svg: null, youtube_url: null };
    const out = poolRowToQuestion(row);
    expect(out.explanation).toBeUndefined();
    expect(out.svg).toBeUndefined();
    expect(out.youtubeUrl).toBeUndefined();
  });
});
