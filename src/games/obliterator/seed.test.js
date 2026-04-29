import { describe, it, expect } from "vitest";
import { makeRng, todayUtcString, hashString, dailySeed } from "./seed.js";

describe("makeRng", () => {
  it("zelfde seed levert dezelfde sequentie", () => {
    const a = makeRng(12345);
    const b = makeRng(12345);
    for (let i = 0; i < 100; i++) {
      expect(a()).toBeCloseTo(b(), 10);
    }
  });

  it("verschillende seeds leveren verschillende sequenties", () => {
    const a = makeRng(1);
    const b = makeRng(2);
    let differences = 0;
    for (let i = 0; i < 50; i++) {
      if (a() !== b()) differences++;
    }
    expect(differences).toBeGreaterThan(45);
  });

  it("waarden vallen in [0, 1)", () => {
    const r = makeRng(7);
    for (let i = 0; i < 1000; i++) {
      const v = r();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });

  it("verdeling is redelijk uniform", () => {
    const r = makeRng(42);
    const buckets = [0, 0, 0, 0];
    for (let i = 0; i < 10000; i++) {
      buckets[Math.floor(r() * 4)]++;
    }
    // Elk bucket zou rond 2500 moeten zitten — toleranter dan strikt
    for (const b of buckets) {
      expect(b).toBeGreaterThan(2200);
      expect(b).toBeLessThan(2800);
    }
  });
});

describe("todayUtcString", () => {
  it("formatteert YYYY-MM-DD", () => {
    const fixed = new Date("2026-04-29T15:30:00Z");
    expect(todayUtcString(fixed)).toBe("2026-04-29");
  });

  it("padding op enkelvoudige maand/dag", () => {
    const fixed = new Date("2026-01-05T00:00:00Z");
    expect(todayUtcString(fixed)).toBe("2026-01-05");
  });

  it("UTC, niet lokaal", () => {
    // 23:30 UTC op 29-04 is 01:30 lokaal in NL op 30-04, maar UTC-string blijft 29-04
    const fixed = new Date("2026-04-29T23:30:00Z");
    expect(todayUtcString(fixed)).toBe("2026-04-29");
  });
});

describe("hashString + dailySeed", () => {
  it("zelfde input = zelfde hash", () => {
    expect(hashString("test")).toBe(hashString("test"));
    expect(hashString("2026-04-29")).toBe(hashString("2026-04-29"));
  });

  it("verschillende input = (zo goed als altijd) verschillende hash", () => {
    expect(hashString("2026-04-29")).not.toBe(hashString("2026-04-30"));
    expect(hashString("a")).not.toBe(hashString("b"));
  });

  it("dailySeed is consistent voor zelfde dag", () => {
    const morning = new Date("2026-04-29T08:00:00Z");
    const evening = new Date("2026-04-29T22:00:00Z");
    expect(dailySeed(morning)).toBe(dailySeed(evening));
  });

  it("dailySeed wisselt per dag", () => {
    expect(dailySeed(new Date("2026-04-29T12:00:00Z")))
      .not.toBe(dailySeed(new Date("2026-04-30T12:00:00Z")));
  });
});
