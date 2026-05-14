import { describe, it, expect, beforeEach } from "vitest";
import {
  recordWrong, recordRight, getWrongChecks,
  buildCheckOrder, countPathWrong, pathWrongMap,
  clearPath, clearAll, getCheckStreak, STREAK_TO_MASTER,
} from "./adaptiveStore.js";

beforeEach(() => {
  localStorage.clear();
});

describe("adaptiveStore", () => {
  it("recordWrong + getWrongChecks: voegt unieke checks toe", () => {
    recordWrong("p1", 0, 2);
    recordWrong("p1", 0, 5);
    recordWrong("p1", 0, 2); // dubbel mag niet
    expect(getWrongChecks("p1", 0)).toEqual([2, 5]);
  });

  it("recordRight: verwijdert specifieke checkIdx na STREAK_TO_MASTER × goed", () => {
    recordWrong("p1", 0, 2);
    recordWrong("p1", 0, 5);
    for (let i = 0; i < STREAK_TO_MASTER; i++) recordRight("p1", 0, 2);
    expect(getWrongChecks("p1", 0)).toEqual([5]);
  });

  it("recordRight: 1× goed = blijft in fout-set (streak-progressie)", () => {
    recordWrong("p1", 0, 2);
    recordRight("p1", 0, 2);
    expect(getWrongChecks("p1", 0)).toEqual([2]);
    expect(getCheckStreak("p1", 0, 2)).toBe(1);
  });

  it("recordRight: laatste check leegt step na STREAK_TO_MASTER × goed", () => {
    recordWrong("p1", 0, 2);
    for (let i = 0; i < STREAK_TO_MASTER; i++) recordRight("p1", 0, 2);
    expect(getWrongChecks("p1", 0)).toEqual([]);
  });

  it("recordWrong reset streak naar 0", () => {
    recordWrong("p1", 0, 2);
    recordRight("p1", 0, 2);
    recordRight("p1", 0, 2);
    expect(getCheckStreak("p1", 0, 2)).toBe(2);
    recordWrong("p1", 0, 2);
    expect(getCheckStreak("p1", 0, 2)).toBe(0);
  });

  it("recordRight op niet-foute check: no-op", () => {
    recordRight("p1", 0, 99);
    expect(getWrongChecks("p1", 0)).toEqual([]);
  });

  it("buildCheckOrder: foute eerst, rest in originele volgorde", () => {
    recordWrong("p1", 0, 3);
    recordWrong("p1", 0, 1);
    expect(buildCheckOrder("p1", 0, 5)).toEqual([3, 1, 0, 2, 4]);
  });

  it("buildCheckOrder: zonder fouten = [0,1,...,n-1]", () => {
    expect(buildCheckOrder("p1", 0, 4)).toEqual([0, 1, 2, 3]);
  });

  it("buildCheckOrder: filtert ongeldige indexen (oude data, gewijzigde stappen)", () => {
    recordWrong("p1", 0, 99); // out of range
    recordWrong("p1", 0, 1);
    expect(buildCheckOrder("p1", 0, 3)).toEqual([1, 0, 2]);
  });

  it("countPathWrong: telt over alle stappen", () => {
    recordWrong("p1", 0, 1);
    recordWrong("p1", 0, 2);
    recordWrong("p1", 1, 0);
    recordWrong("p2", 0, 5); // ander pad telt niet mee
    expect(countPathWrong("p1")).toBe(3);
    expect(countPathWrong("p2")).toBe(1);
  });

  it("pathWrongMap: returnt {stepIdx: count}", () => {
    recordWrong("p1", 0, 1);
    recordWrong("p1", 0, 2);
    recordWrong("p1", 3, 0);
    expect(pathWrongMap("p1")).toEqual({ 0: 2, 3: 1 });
  });

  it("clearPath: wist alleen dat pad", () => {
    recordWrong("p1", 0, 1);
    recordWrong("p2", 0, 1);
    clearPath("p1");
    expect(getWrongChecks("p1", 0)).toEqual([]);
    expect(getWrongChecks("p2", 0)).toEqual([1]);
  });

  it("clearAll: wist alles", () => {
    recordWrong("p1", 0, 1);
    recordWrong("p2", 0, 1);
    clearAll();
    expect(getWrongChecks("p1", 0)).toEqual([]);
    expect(getWrongChecks("p2", 0)).toEqual([]);
  });

  it("guard-clauses: ongeldige input doet niets", () => {
    recordWrong(null, 0, 1);
    recordWrong("p1", null, 1);
    recordWrong("p1", 0, null);
    expect(getWrongChecks("p1", 0)).toEqual([]);
  });
});
