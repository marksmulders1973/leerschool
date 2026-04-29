import { describe, it, expect } from "vitest";
import {
  levelFromScore,
  speedFor,
  spawnIntervalFor,
  obstacleVarietyFor,
  powerupChanceFor,
} from "./difficulty.js";

describe("levelFromScore", () => {
  it("0 score = level 1", () => {
    expect(levelFromScore(0)).toBe(1);
  });

  it("1000 score = level 2, 4500 = level 5", () => {
    expect(levelFromScore(1000)).toBe(2);
    expect(levelFromScore(4500)).toBe(5);
  });

  it("clipped op level 10", () => {
    expect(levelFromScore(50000)).toBe(10);
  });
});

describe("speedFor", () => {
  it("level 1 = 4 px/frame, monotone stijgend", () => {
    expect(speedFor(1)).toBe(4);
    expect(speedFor(2)).toBeGreaterThan(speedFor(1));
    expect(speedFor(10)).toBeGreaterThan(speedFor(5));
  });
});

describe("spawnIntervalFor", () => {
  it("hoger level = korter interval, met cap op 700ms", () => {
    expect(spawnIntervalFor(1)).toBeGreaterThanOrEqual(spawnIntervalFor(5));
    expect(spawnIntervalFor(10)).toBeGreaterThanOrEqual(700);
  });
});

describe("obstacleVarietyFor", () => {
  it("level 1 → alleen block + spike", () => {
    expect(obstacleVarietyFor(1)).toEqual(["block", "spike"]);
  });

  it("level 2 voegt wall toe", () => {
    expect(obstacleVarietyFor(2)).toContain("wall");
  });

  it("level 4 voegt moving toe", () => {
    expect(obstacleVarietyFor(4)).toContain("moving");
  });

  it("level 7 voegt double toe", () => {
    expect(obstacleVarietyFor(7)).toContain("double");
  });
});

describe("powerupChanceFor", () => {
  it("klein bij level 1, cap 18% bij hoog level", () => {
    expect(powerupChanceFor(1)).toBeCloseTo(0.05);
    expect(powerupChanceFor(10)).toBeLessThanOrEqual(0.18);
    expect(powerupChanceFor(10)).toBeGreaterThan(powerupChanceFor(1));
  });
});
