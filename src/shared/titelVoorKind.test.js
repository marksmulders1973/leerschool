import { describe, it, expect } from "vitest";
import { titelVoorKind } from "./titelVoorKind.js";

describe("titelVoorKind", () => {
  it("vervangt een bereik door de groep van het kind", () => {
    expect(titelVoorKind("Tijdvakken Nederland — geschiedenis groep 6-8", 8)).toBe("Tijdvakken Nederland — geschiedenis groep 8");
    expect(titelVoorKind("Breuken — groep 5-8, Doorstroomtoets-stof", 7)).toBe("Breuken — groep 7, Doorstroomtoets-stof");
    expect(titelVoorKind("Werelddelen + landen (groep 6-8, Doorstroomtoets-stof)", 6)).toBe("Werelddelen + landen (groep 6, Doorstroomtoets-stof)");
    expect(titelVoorKind("Klokkijken (groep 3 t/m 5)", 4)).toBe("Klokkijken (groep 4)");
  });
  it("laat het bereik staan als het kind erbuiten valt of geen groep heeft", () => {
    expect(titelVoorKind("Tafels (groep 4-5)", 7)).toBe("Tafels (groep 4-5)");
    expect(titelVoorKind("Tafels (groep 4-5)", null)).toBe("Tafels (groep 4-5)");
    expect(titelVoorKind("Tafels (groep 4-5)", "klas2")).toBe("Tafels (groep 4-5)");
  });
  it("raakt titels zonder bereik niet aan", () => {
    expect(titelVoorKind("Geschiedenis — vroeger en nu (groep 5)", 5)).toBe("Geschiedenis — vroeger en nu (groep 5)");
    expect(titelVoorKind("", 5)).toBe("");
    expect(titelVoorKind(undefined, 5)).toBe("");
  });
});
