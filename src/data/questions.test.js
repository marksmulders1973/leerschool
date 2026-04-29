import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock supabase BEFORE importing module-under-test
vi.mock("../supabase.js", () => ({
  default: {
    from: vi.fn(),
  },
}));

import supabase from "../supabase.js";
import {
  fetchQuestions,
  clearQuestionsCache,
  setCacheEnabled,
  cacheSize,
} from "./questions.js";

function makeChain(result) {
  // Bouw een fluent chain die op elk niveau zelfde object retourneert,
  // alleen .limit() resolveert met de meegegeven data/error.
  const chain = {
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    ilike: vi.fn().mockReturnThis(),
    limit: vi.fn().mockResolvedValue(result),
  };
  return chain;
}

describe("fetchQuestions", () => {
  beforeEach(() => {
    clearQuestionsCache();
    setCacheEnabled(true);
    vi.clearAllMocks();
  });

  it("returnt rijen uit Supabase als die er zijn", async () => {
    const fakeRows = [
      {
        q: "Wat is 1+1?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "Twee.",
        svg: null,
        image_in_explanation: false,
        question_source: null,
        path_id: null,
        step_idx: null,
      },
    ];
    supabase.from.mockReturnValue(makeChain({ data: fakeRows, error: null }));

    const result = await fetchQuestions({ subject: "wiskunde", level: "klas1", limit: 5 });
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      q: "Wat is 1+1?",
      answer: 1,
      explanation: "Twee.",
    });
  });

  it("cached identieke calls — geen tweede netwerk-call", async () => {
    supabase.from.mockReturnValue(makeChain({ data: [{ q: "x", options: [], answer: 0 }], error: null }));

    await fetchQuestions({ subject: "wiskunde", level: "klas1" });
    await fetchQuestions({ subject: "wiskunde", level: "klas1" });

    expect(supabase.from).toHaveBeenCalledTimes(1);
    expect(cacheSize()).toBe(1);
  });

  it("verschillende opties hebben aparte cache-entries", async () => {
    supabase.from.mockReturnValue(makeChain({ data: [{ q: "x", options: [], answer: 0 }], error: null }));

    await fetchQuestions({ subject: "wiskunde" });
    await fetchQuestions({ subject: "engels" });

    expect(supabase.from).toHaveBeenCalledTimes(2);
    expect(cacheSize()).toBe(2);
  });

  it("bij Supabase-error valt terug op constants.js", async () => {
    supabase.from.mockReturnValue(makeChain({ data: null, error: { message: "boom" } }));

    const result = await fetchQuestions({ subject: "rekenen", level: "groep12", limit: 3 });
    // constants.js heeft echte rekenen-vragen voor groep12
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it("bij lege Supabase-response valt terug op constants.js", async () => {
    supabase.from.mockReturnValue(makeChain({ data: [], error: null }));

    const result = await fetchQuestions({ subject: "rekenen", level: "groep12", limit: 3 });
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it("clearQuestionsCache leegt de cache", async () => {
    supabase.from.mockReturnValue(makeChain({ data: [{ q: "x", options: [], answer: 0 }], error: null }));

    await fetchQuestions({ subject: "wiskunde" });
    expect(cacheSize()).toBe(1);
    clearQuestionsCache();
    expect(cacheSize()).toBe(0);
  });

  it("setCacheEnabled(false) schakelt cache uit", async () => {
    supabase.from.mockReturnValue(makeChain({ data: [{ q: "x", options: [], answer: 0 }], error: null }));
    setCacheEnabled(false);

    await fetchQuestions({ subject: "wiskunde" });
    await fetchQuestions({ subject: "wiskunde" });

    expect(supabase.from).toHaveBeenCalledTimes(2);
    expect(cacheSize()).toBe(0);
  });
});
