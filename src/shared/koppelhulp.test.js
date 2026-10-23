import { describe, it, expect, vi } from "vitest";
vi.mock("../supabase.js", () => ({ default: { rpc: vi.fn() } }));
import { foutUitDiagnose, verbodenTekens } from "./koppelcode.js";

describe("koppelhulp — foutUitDiagnose (Mark 23 okt 2026)", () => {
  it("gebruikt door deze naam, hier al gekoppeld → niets te doen", () => {
    expect(foutUitDiagnose({ status: "gebruikt", zelfde_naam: true }, true)).toBe("alGekoppeld");
  });
  it("gebruikt door deze naam, maar hier niet gekoppeld → ander toestel", () => {
    expect(foutUitDiagnose({ status: "gebruikt", zelfde_naam: true }, false)).toBe("gebruiktAnderToestel");
  });
  it("gebruikt door een andere naam → nieuwe code, ook als dit toestel al iets gekoppeld heeft (2e ouder)", () => {
    expect(foutUitDiagnose({ status: "gebruikt", zelfde_naam: false }, true)).toBe("gebruiktAnder");
    expect(foutUitDiagnose({ status: "gebruikt", zelfde_naam: false }, false)).toBe("gebruiktAnder");
  });
  it("typfout met suggestie, of bestaat niet", () => {
    expect(foutUitDiagnose({ status: "onbekend", suggestie: "V8N9AU" })).toBe("typfout");
    expect(foutUitDiagnose({ status: "onbekend", suggestie: null })).toBe("bestaatNiet");
  });
  it("oud, geldig-maar-mislukt, en geen diagnose", () => {
    expect(foutUitDiagnose({ status: "verlopen" })).toBe("verlopen");
    expect(foutUitDiagnose({ status: "geldig" })).toBe("geenVerbinding");
    expect(foutUitDiagnose(null, false)).toBe("verlopen");
    expect(foutUitDiagnose(null, true)).toBe("alGekoppeld");
  });
});

describe("verbodenTekens", () => {
  it("vindt 0, O, 1, I en L (ook kleine letters), elk één keer", () => {
    expect(verbodenTekens("h7kp2q")).toEqual([]);
    expect(verbodenTekens("H0KP1Q")).toEqual(["0", "1"]);
    expect(verbodenTekens("lol-ok")).toEqual(["L", "O"]);
  });
});
