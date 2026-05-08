import { describe, it, expect } from "vitest";
import { shuffleOptions } from "./shuffleOptions.js";

// Deterministische RNG voor reproduceerbare tests.
function makeRng(seq) {
  let i = 0;
  return () => seq[i++ % seq.length];
}

describe("shuffleOptions", () => {
  it("behoudt aantal en inhoud van opties", () => {
    const c = {
      q: "?",
      options: ["A", "B", "C", "D"],
      answer: 0,
      wrongHints: [null, "h1", "h2", "h3"],
    };
    const out = shuffleOptions(c);
    expect(out.options).toHaveLength(4);
    expect(out.options.sort()).toEqual(["A", "B", "C", "D"]);
  });

  it("answer-index volgt het correcte antwoord (A blijft correct na shuffle)", () => {
    const c = { options: ["A", "B", "C", "D"], answer: 0 };
    const out = shuffleOptions(c);
    expect(out.options[out.answer]).toBe("A");
  });

  it("wrongHints volgen de opties (B's hint blijft bij B)", () => {
    const c = {
      options: ["A", "B", "C"],
      answer: 0,
      wrongHints: [null, "B-hint", "C-hint"],
    };
    const out = shuffleOptions(c);
    const idxB = out.options.indexOf("B");
    const idxC = out.options.indexOf("C");
    expect(out.wrongHints[idxB]).toBe("B-hint");
    expect(out.wrongHints[idxC]).toBe("C-hint");
  });

  it("voegt extra velden door (q, explanation, etc.)", () => {
    const c = {
      q: "Vraag X?",
      explanation: "Uitleg.",
      options: ["A", "B"],
      answer: 0,
    };
    const out = shuffleOptions(c);
    expect(out.q).toBe("Vraag X?");
    expect(out.explanation).toBe("Uitleg.");
  });

  it("ontbrekende wrongHints → array van nulls", () => {
    const c = { options: ["A", "B", "C"], answer: 1 };
    const out = shuffleOptions(c);
    expect(out.wrongHints).toHaveLength(3);
    expect(out.wrongHints.every((h) => h === null)).toBe(true);
  });

  it("returnt input ongewijzigd bij ontbrekende options", () => {
    expect(shuffleOptions(null)).toBe(null);
    expect(shuffleOptions({ q: "?" })).toEqual({ q: "?" });
  });

  it("werkt met deterministische RNG (reproduceerbaar)", () => {
    const c = { options: ["A", "B", "C", "D"], answer: 0 };
    const a = shuffleOptions(c, makeRng([0.1, 0.5, 0.9]));
    const b = shuffleOptions(c, makeRng([0.1, 0.5, 0.9]));
    expect(a.options).toEqual(b.options);
  });
});
