import { describe, it, expect } from "vitest";
import {
  getMasteryLevel,
  recommendNextTopic,
  MASTERY_LABELS,
  nextReviewIntervalDays,
  nextSpacedRepetitionState,
} from "./mastery.js";

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

describe("recommendNextTopic — spaced-rep due-prioriteit", () => {
  const fixed = new Date("2026-04-29T10:00:00Z");
  const past = "2026-04-25T10:00:00Z";
  const future = "2026-05-30T10:00:00Z";

  it("kiest een due-record boven een niet-due-record", () => {
    const records = [
      { pathId: "niet-due", level: "bronze", lastSeen: past, attempts: 5, correct: 2, nextDueAt: future },
      { pathId: "wel-due", level: "silver", lastSeen: past, attempts: 8, correct: 6, nextDueAt: past },
    ];
    const r = recommendNextTopic(records, fixed);
    expect(r.pathId).toBe("wel-due");
    expect(r.reason).toBe("due");
  });

  it("kiest oudste due bij meerdere due-records", () => {
    const olderDue = "2026-04-20T10:00:00Z";
    const newerDue = "2026-04-27T10:00:00Z";
    const records = [
      { pathId: "newer", level: "bronze", lastSeen: past, attempts: 5, correct: 2, nextDueAt: newerDue },
      { pathId: "older", level: "silver", lastSeen: past, attempts: 8, correct: 6, nextDueAt: olderDue },
    ];
    const r = recommendNextTopic(records, fixed);
    expect(r.pathId).toBe("older");
  });

  it("een goud onderwerp dat due is komt óók terug (forgetting curve)", () => {
    const records = [
      { pathId: "goud-vergeten", level: "gold", lastSeen: past, attempts: 12, correct: 12, nextDueAt: past },
    ];
    const r = recommendNextTopic(records, fixed);
    expect(r.pathId).toBe("goud-vergeten");
    expect(r.reason).toBe("due");
  });

  it("zonder due-records valt het terug op niveau-basis", () => {
    const records = [
      { pathId: "silver", level: "silver", lastSeen: past, attempts: 8, correct: 6, nextDueAt: future },
      { pathId: "bronze", level: "bronze", lastSeen: past, attempts: 5, correct: 2, nextDueAt: future },
    ];
    const r = recommendNextTopic(records, fixed);
    expect(r.pathId).toBe("bronze");
    expect(r.reason).toBe("level");
  });
});

describe("nextReviewIntervalDays", () => {
  it("fout antwoord → altijd 1 dag, ongeacht streak", () => {
    expect(nextReviewIntervalDays(0, false)).toBe(1);
    expect(nextReviewIntervalDays(5, false)).toBe(1);
    expect(nextReviewIntervalDays(100, false)).toBe(1);
  });

  it("goed antwoord schaalt op streak: 1, 3, 7, 21, 60, 120", () => {
    expect(nextReviewIntervalDays(0, true)).toBe(1);
    expect(nextReviewIntervalDays(1, true)).toBe(3);
    expect(nextReviewIntervalDays(2, true)).toBe(7);
    expect(nextReviewIntervalDays(3, true)).toBe(21);
    expect(nextReviewIntervalDays(4, true)).toBe(60);
    expect(nextReviewIntervalDays(5, true)).toBe(120);
  });

  it("clipt op maximum (5+ streak blijft 120 dagen)", () => {
    expect(nextReviewIntervalDays(10, true)).toBe(120);
    expect(nextReviewIntervalDays(50, true)).toBe(120);
  });
});

describe("nextSpacedRepetitionState", () => {
  it("correct antwoord verhoogt streak, fout reset naar 0", () => {
    const a = nextSpacedRepetitionState({ prevStreak: 3, isCorrect: true });
    expect(a.streak).toBe(4);

    const b = nextSpacedRepetitionState({ prevStreak: 5, isCorrect: false });
    expect(b.streak).toBe(0);
  });

  it("nextDueAt is now + intervalDays (eerste correct → streak 1 = 3 dagen)", () => {
    const fixed = new Date("2026-04-29T10:00:00Z");
    const r = nextSpacedRepetitionState({ prevStreak: 0, isCorrect: true, now: fixed });
    // prevStreak 0 + correct → nieuwe streak 1 → REVIEW_INTERVALS_DAYS[1] = 3 dagen.
    expect(r.intervalDays).toBe(3);
    const expected = new Date(fixed);
    expected.setDate(expected.getDate() + 3);
    expect(r.nextDueAt.toISOString()).toBe(expected.toISOString());
  });

  it("fout antwoord met hoge streak resets naar 1 dag (zonder prevInterval)", () => {
    const fixed = new Date("2026-04-29T10:00:00Z");
    const r = nextSpacedRepetitionState({ prevStreak: 4, isCorrect: false, now: fixed });
    expect(r.streak).toBe(0);
    expect(r.intervalDays).toBe(1);
  });
});

describe("nextSpacedRepetitionState — easeFactor (audit 2 M1)", () => {
  it("default easeFactor is 1.0 als niet meegegeven", () => {
    const r = nextSpacedRepetitionState({ isCorrect: true });
    // prevEase 1.0 + 0.1 = 1.1
    expect(r.easeFactor).toBeCloseTo(1.1, 5);
  });

  it("correct antwoord verhoogt easeFactor met +0.1, cap op 2.5", () => {
    const r1 = nextSpacedRepetitionState({ prevEaseFactor: 1.5, isCorrect: true });
    expect(r1.easeFactor).toBeCloseTo(1.6, 5);
    const r2 = nextSpacedRepetitionState({ prevEaseFactor: 2.5, isCorrect: true });
    expect(r2.easeFactor).toBeCloseTo(2.5, 5); // cap
    const r3 = nextSpacedRepetitionState({ prevEaseFactor: 2.45, isCorrect: true });
    expect(r3.easeFactor).toBeCloseTo(2.5, 5); // cap (want 2.45+0.1=2.55 → 2.5)
  });

  it("fout antwoord verlaagt easeFactor met ×0.85, floor op 0.5", () => {
    const r1 = nextSpacedRepetitionState({ prevEaseFactor: 1.0, isCorrect: false });
    expect(r1.easeFactor).toBeCloseTo(0.85, 5);
    const r2 = nextSpacedRepetitionState({ prevEaseFactor: 0.5, isCorrect: false });
    expect(r2.easeFactor).toBeCloseTo(0.5, 5); // floor
    const r3 = nextSpacedRepetitionState({ prevEaseFactor: 0.55, isCorrect: false });
    expect(r3.easeFactor).toBeCloseTo(0.5, 5); // floor (0.55*0.85=0.4675 → 0.5)
  });

  it("interval schaalt met easeFactor bij correct antwoord", () => {
    // prevStreak 0 + correct → nieuwe streak 1 → base interval 3 dagen
    // ease 2.0 → 3*2 = 6 dagen
    const r = nextSpacedRepetitionState({ prevStreak: 0, prevEaseFactor: 2.0, isCorrect: true });
    expect(r.intervalDays).toBe(6);
  });

  it("zachte fout-reset: bij prevIntervalDays > 1 wordt het gehalveerd ipv terug naar 1", () => {
    const r = nextSpacedRepetitionState({
      prevStreak: 4,
      prevEaseFactor: 1.5,
      prevIntervalDays: 60,
      isCorrect: false,
    });
    expect(r.streak).toBe(0);
    expect(r.intervalDays).toBe(30); // 60 * 0.5
    // ease verlaagd: 1.5 * 0.85 = 1.275
    expect(r.easeFactor).toBeCloseTo(1.275, 3);
  });
});
