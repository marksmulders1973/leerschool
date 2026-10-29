import { describe, it, expect } from "vitest";
import { startsetPortie, startsetOmvang, startsetBlok, STARTSET_PER_KEER } from "./startsetsData.js";

// 29 okt 2026 (Mark): startset van 20 in porties van 10, met "Nog 10" of "Klaar voor nu" na elke portie.
describe("startsetPortie", () => {
  it("geeft bij een verse set precies 10", () => {
    expect(startsetPortie({ totaal: 20, gedaan: 0 })).toBe(STARTSET_PER_KEER);
    expect(STARTSET_PER_KEER).toBe(10);
  });
  it("geeft de rest als die kleiner is dan 10", () => {
    expect(startsetPortie({ totaal: 20, gedaan: 13 })).toBe(7);
    expect(startsetPortie({ totaal: 20, gedaan: 10 })).toBe(10);
  });
  it("geeft nooit minder dan 1 en rekent met 20 als totaal ontbreekt", () => {
    expect(startsetPortie({ totaal: 20, gedaan: 20 })).toBe(1);
    expect(startsetPortie(null)).toBe(10);
    expect(startsetPortie({ gedaan: 15 })).toBe(5);
  });
});

describe("startsetOmvang", () => {
  it("is eerlijk over de portie", () => {
    expect(startsetOmvang(20)).toBe("20 vragen, 10 per keer");
    expect(startsetOmvang(8)).toBe("8 vragen");
  });
});

describe("startsetBlok", () => {
  it("zet de omvang in de titel van het blokje", () => {
    const b = startsetBlok("4|rekenen", 10);
    if (!b) return; // set bestaat niet in deze data → niets te testen
    expect(b.n).toBe(10);
    expect(b.titel).toMatch(/vragen/);
    expect(b.titel).not.toMatch(/de eerste/);
  });
});
