import { describe, it, expect } from "vitest";
import { multiplierFor, pointsFor, applyEvent, initialScoreState } from "./score.js";

describe("multiplierFor", () => {
  it("trapsgewijs op combo: 1 → 2 → 3 → 5 → 8", () => {
    expect(multiplierFor(0).mult).toBe(1);
    expect(multiplierFor(4).mult).toBe(1);
    expect(multiplierFor(5).mult).toBe(2);
    expect(multiplierFor(9).mult).toBe(2);
    expect(multiplierFor(10).mult).toBe(3);
    expect(multiplierFor(24).mult).toBe(3);
    expect(multiplierFor(25).mult).toBe(5);
    expect(multiplierFor(49).mult).toBe(5);
    expect(multiplierFor(50).mult).toBe(8);
    expect(multiplierFor(999).mult).toBe(8);
  });

  it("LEGEND-label vanaf combo 50", () => {
    expect(multiplierFor(50).label).toBe("×8 LEGEND");
  });
});

describe("pointsFor", () => {
  it("obliterate basis 50, jump 10, collect 5, powerup 25", () => {
    expect(pointsFor("obliterate", 0)).toBe(50);
    expect(pointsFor("jump", 0)).toBe(10);
    expect(pointsFor("collect", 0)).toBe(5);
    expect(pointsFor("powerup", 0)).toBe(25);
  });

  it("schaalt met multiplier", () => {
    expect(pointsFor("obliterate", 25)).toBe(50 * 5); // 250
    expect(pointsFor("jump", 50)).toBe(10 * 8); // 80
  });

  it("onbekende actie → 0", () => {
    expect(pointsFor("onzin", 100)).toBe(0);
  });
});

describe("applyEvent", () => {
  it("obliterate verhoogt score + combo +2 + bestCombo", () => {
    const s = applyEvent(initialScoreState, { type: "obliterate" });
    expect(s.combo).toBe(2);
    expect(s.bestCombo).toBe(2);
    expect(s.score).toBe(50);
  });

  it("jump verhoogt score met basis × multiplier op huidige combo", () => {
    let s = { ...initialScoreState, combo: 5 };
    s = applyEvent(s, { type: "jump" });
    // multiplier op combo=5 → ×2, basis 10 → 20 punten
    expect(s.score).toBe(20);
    expect(s.combo).toBe(6);
  });

  it("hit reset combo naar 0 en levens -1", () => {
    let s = { ...initialScoreState, combo: 12, lives: 3 };
    s = applyEvent(s, { type: "hit" });
    expect(s.combo).toBe(0);
    expect(s.lives).toBe(2);
  });

  it("hit kan levens niet onder 0 brengen", () => {
    let s = { ...initialScoreState, lives: 0 };
    s = applyEvent(s, { type: "hit" });
    expect(s.lives).toBe(0);
  });

  it("onbekend event laat state intact", () => {
    const s = applyEvent(initialScoreState, { type: "onzin" });
    expect(s).toEqual(initialScoreState);
  });
});
