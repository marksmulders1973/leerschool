import { describe, it, expect } from "vitest";
import { formatTime, formatDurationVerbose, scoreColor } from "./format.js";

describe("formatTime", () => {
  it("formatteert m:ss", () => {
    expect(formatTime(0)).toBe("0:00");
    expect(formatTime(5)).toBe("0:05");
    expect(formatTime(60)).toBe("1:00");
    expect(formatTime(125)).toBe("2:05");
    expect(formatTime(3661)).toBe("61:01");
  });

  it("clamped negatieve waarden naar 0", () => {
    expect(formatTime(-10)).toBe("0:00");
  });

  it("rondt af op hele seconden", () => {
    expect(formatTime(5.7)).toBe("0:05");
  });

  it("non-numeric input → 0:00", () => {
    expect(formatTime("abc")).toBe("0:00");
    expect(formatTime(null)).toBe("0:00");
  });
});

describe("formatDurationVerbose", () => {
  it("toont alleen seconden bij <1min", () => {
    expect(formatDurationVerbose(0)).toBe("0s");
    expect(formatDurationVerbose(45)).toBe("45s");
  });

  it("toont m + s bij >=1min", () => {
    expect(formatDurationVerbose(60)).toBe("1m 0s");
    expect(formatDurationVerbose(125)).toBe("2m 5s");
  });
});

describe("scoreColor", () => {
  it("groen bij >=80%", () => {
    expect(scoreColor(80)).toBe("#00c853");
    expect(scoreColor(100)).toBe("#00c853");
  });

  it("warm bij 60-79%", () => {
    expect(scoreColor(60)).toBe("#ffd54f");
    expect(scoreColor(79)).toBe("#ffd54f");
  });

  it("rood bij <60%", () => {
    expect(scoreColor(0)).toBe("#ff5252");
    expect(scoreColor(59)).toBe("#ff5252");
  });

  it("non-numeric → rood", () => {
    expect(scoreColor("abc")).toBe("#ff5252");
    expect(scoreColor(NaN)).toBe("#ff5252");
  });

  it("custom thresholds + paletten", () => {
    expect(scoreColor(70, { goodThreshold: 70, warmThreshold: 50 })).toBe("#00c853");
    expect(scoreColor(85, { good: "#abc" })).toBe("#abc");
  });
});
