import { describe, it, expect, vi } from "vitest";

vi.mock("../supabase.js", () => ({ default: {} }));
vi.mock("../utils.js", () => ({ track: () => {} }));

import { mergeDailyGoalStates, DEFAULT_TARGET_SECONDS, addSeconds, kwartierVolVoor } from "./dailyGoal.js";
import { meldLeermoment } from "./leermoment.js";

const VANDAAG = "2026-07-15";
const GISTEREN = "2026-07-14";

const lokaalLeeg = {
  goal: { date: VANDAAG, seconds: 0, target: DEFAULT_TARGET_SECONDS, completed: false, celebratedAt: null },
  streak: { lastCompletedDate: null, current: 0, best: 0 },
};

describe("mergeDailyGoalStates (A8.3 cross-device)", () => {
  it("zonder cloud-data blijft lokaal ongewijzigd", () => {
    const m = mergeDailyGoalStates(lokaalLeeg, null, VANDAAG);
    expect(m.goal.seconds).toBe(0);
    expect(m.streak.current).toBe(0);
  });

  it("neemt cloud-seconden over als de telefoon vandaag al oefende", () => {
    const cloud = { goal_day: VANDAAG, goal_seconds: 600, kwartier_streak: 3, kwartier_streak_best: 5, kwartier_last_day: GISTEREN };
    const m = mergeDailyGoalStates(lokaalLeeg, cloud, VANDAAG);
    expect(m.goal.seconds).toBe(600);
    expect(m.goal.completed).toBe(false);
    expect(m.streak.current).toBe(3);
    expect(m.streak.best).toBe(5);
  });

  it("zelfde dag op beide apparaten → hoogste seconden wint", () => {
    const lokaal = { ...lokaalLeeg, goal: { ...lokaalLeeg.goal, seconds: 700 } };
    const cloud = { goal_day: VANDAAG, goal_seconds: 300, kwartier_streak: 0, kwartier_streak_best: 0, kwartier_last_day: null };
    const m = mergeDailyGoalStates(lokaal, cloud, VANDAAG);
    expect(m.goal.seconds).toBe(700);
  });

  it("oude cloud-dag telt niet mee voor vandaag", () => {
    const cloud = { goal_day: GISTEREN, goal_seconds: 900, kwartier_streak: 0, kwartier_streak_best: 0, kwartier_last_day: null };
    const m = mergeDailyGoalStates(lokaalLeeg, cloud, VANDAAG);
    expect(m.goal.seconds).toBe(0);
  });

  it("cloud-seconden boven target → completed true (streak-bump-guard vangt dubbel tellen af)", () => {
    const cloud = { goal_day: VANDAAG, goal_seconds: DEFAULT_TARGET_SECONDS + 60, kwartier_streak: 4, kwartier_streak_best: 4, kwartier_last_day: VANDAAG };
    const m = mergeDailyGoalStates(lokaalLeeg, cloud, VANDAAG);
    expect(m.goal.completed).toBe(true);
    expect(m.streak.current).toBe(4);
    expect(m.streak.lastCompletedDate).toBe(VANDAAG);
  });

  it("recentste streak-datum wint; zelfde datum → hoogste teller", () => {
    const lokaal = { ...lokaalLeeg, streak: { lastCompletedDate: GISTEREN, current: 2, best: 2 } };
    const cloudNieuwer = { goal_day: null, goal_seconds: 0, kwartier_streak: 6, kwartier_streak_best: 6, kwartier_last_day: VANDAAG };
    expect(mergeDailyGoalStates(lokaal, cloudNieuwer, VANDAAG).streak.current).toBe(6);

    const cloudOuder = { goal_day: null, goal_seconds: 0, kwartier_streak: 9, kwartier_streak_best: 9, kwartier_last_day: "2026-07-01" };
    const m2 = mergeDailyGoalStates(lokaal, cloudOuder, VANDAAG);
    expect(m2.streak.current).toBe(2);        // lokaal is recenter
    expect(m2.streak.best).toBe(9);           // maar best blijft het maximum

    const cloudZelfde = { goal_day: null, goal_seconds: 0, kwartier_streak: 5, kwartier_streak_best: 5, kwartier_last_day: GISTEREN };
    expect(mergeDailyGoalStates(lokaal, cloudZelfde, VANDAAG).streak.current).toBe(5);
  });
});

describe("kwartier per kind (weekplanner, 9 nov 2026)", () => {
  const profiel = (name) => localStorage.setItem("ls_user", JSON.stringify({ name }));
  it("twee kinderen op een tablet: alleen wie zelf een kwartier oefende telt", () => {
    localStorage.clear();
    profiel("Testkind A");
    addSeconds(600);
    profiel("Testkind B");
    addSeconds(600); // het toestel staat nu op 20 min, geen van beiden op 15
    meldLeermoment();
    expect(kwartierVolVoor("Testkind A")).toBe(false);
    expect(kwartierVolVoor("Testkind B")).toBe(false);
    addSeconds(300);
    expect(kwartierVolVoor("testkind b")).toBe(true);
    expect(kwartierVolVoor("Testkind A")).toBe(false);
    expect(kwartierVolVoor("")).toBe(false);
  });
  it("zonder leermoment geen kwartier, ook niet na 15 minuten", () => {
    localStorage.clear();
    profiel("Testkind C");
    addSeconds(900);
    expect(kwartierVolVoor("Testkind C")).toBe(false);
    meldLeermoment();
    expect(kwartierVolVoor("Testkind C")).toBe(true);
  });
  it("de per-kind-telling overleeft het samenvoegen met de cloud-stand", () => {
    const lokaal = { goal: { date: VANDAAG, seconds: 300, target: DEFAULT_TARGET_SECONDS, completed: false, celebratedAt: null, perNaam: { a: 300 } }, streak: { lastCompletedDate: null, current: 0, best: 0 } };
    const m = mergeDailyGoalStates(lokaal, { goal_day: VANDAAG, goal_seconds: 700 }, VANDAAG);
    expect(m.goal.seconds).toBe(700);
    expect(m.goal.perNaam).toEqual({ a: 300 });
  });
});
