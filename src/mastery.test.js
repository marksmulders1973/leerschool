import { describe, it, expect } from "vitest";
import { getMasteryLevel, recommendNextTopic, MASTERY_LABELS } from "./mastery.js";

describe("getMasteryLevel", () => {
  it("geeft 'unmeasured' bij 0 pogingen", () => {
    expect(getMasteryLevel(0, 0)).toBe("unmeasured");
  });

  it("geeft 'unmeasured' onder de drempel van 5 pogingen", () => {
    expect(getMasteryLevel(4, 4)).toBe("unmeasured");
    expect(getMasteryLevel(3, 0)).toBe("unmeasured");
  });

  it("geeft 'bronze' bij 5+ pogingen en <70% goed", () => {
    expect(getMasteryLevel(5, 3)).toBe("bronze"); // 60%
    expect(getMasteryLevel(10, 6)).toBe("bronze"); // 60%
    expect(getMasteryLevel(8, 0)).toBe("bronze"); // 0%
  });

  it("geeft 'silver' bij 5+ pogingen en 70-89% goed", () => {
    expect(getMasteryLevel(5, 4)).toBe("silver"); // 80%
    expect(getMasteryLevel(10, 7)).toBe("silver"); // 70%
    expect(getMasteryLevel(10, 8)).toBe("silver"); // 80%
  });

  it("geeft 'gold' bij 10+ pogingen en >=90% goed", () => {
    expect(getMasteryLevel(10, 9)).toBe("gold"); // 90%
    expect(getMasteryLevel(10, 10)).toBe("gold"); // 100%
    expect(getMasteryLevel(20, 19)).toBe("gold");
  });

  it("blijft 'silver' bij 9 pogingen ook al is 100% goed (gold vereist 10+)", () => {
    expect(getMasteryLevel(9, 9)).toBe("silver");
  });
});

describe("MASTERY_LABELS", () => {
  it("heeft labels voor alle 4 niveaus", () => {
    expect(MASTERY_LABELS.unmeasured).toBeDefined();
    expect(MASTERY_LABELS.bronze).toBeDefined();
    expect(MASTERY_LABELS.silver).toBeDefined();
    expect(MASTERY_LABELS.gold).toBeDefined();
  });

  it("heeft per niveau een label, emoji en color", () => {
    for (const lvl of ["unmeasured", "bronze", "silver", "gold"]) {
      expect(MASTERY_LABELS[lvl]).toMatchObject({
        label: expect.any(String),
        emoji: expect.any(String),
        color: expect.any(String),
      });
    }
  });
});

describe("recommendNextTopic", () => {
  const oud = "2026-01-01T00:00:00Z";
  const nieuw = "2026-04-29T00:00:00Z";

  it("returnt null bij lege lijst", () => {
    expect(recommendNextTopic([])).toBeNull();
    expect(recommendNextTopic(null)).toBeNull();
  });

  it("returnt null als alle records 'gold' zijn", () => {
    const records = [
      { pathId: "a", level: "gold", lastSeen: nieuw, attempts: 10, correct: 10 },
      { pathId: "b", level: "gold", lastSeen: oud, attempts: 12, correct: 11 },
    ];
    expect(recommendNextTopic(records)).toBeNull();
  });

  it("kiest 'unmeasured' boven 'bronze'", () => {
    const records = [
      { pathId: "a", level: "bronze", lastSeen: oud, attempts: 5, correct: 2 },
      { pathId: "b", level: "unmeasured", lastSeen: nieuw, attempts: 1, correct: 0 },
    ];
    expect(recommendNextTopic(records).pathId).toBe("b");
  });

  it("kiest 'bronze' boven 'silver'", () => {
    const records = [
      { pathId: "a", level: "silver", lastSeen: oud, attempts: 8, correct: 6 },
      { pathId: "b", level: "bronze", lastSeen: nieuw, attempts: 5, correct: 2 },
    ];
    expect(recommendNextTopic(records).pathId).toBe("b");
  });

  it("bij gelijke niveaus kiest oudste 'lastSeen' eerst", () => {
    const records = [
      { pathId: "a", level: "bronze", lastSeen: nieuw, attempts: 5, correct: 2 },
      { pathId: "b", level: "bronze", lastSeen: oud, attempts: 6, correct: 3 },
    ];
    expect(recommendNextTopic(records).pathId).toBe("b");
  });
});
