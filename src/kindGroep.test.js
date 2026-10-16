import { describe, it, expect } from "vitest";
import { maakKindGroep } from "./utils.js";

describe("maakKindGroep (16 okt 2026: groep meesturen voor de norm per groep)", () => {
  it("basisschool: los cijfer zonder schooltype", () => {
    expect(maakKindGroep("6")).toBe("groep6");
    expect(maakKindGroep(8, "")).toBe("groep8");
  });
  it("middelbare school: cijfer mét schooltype", () => expect(maakKindGroep("2", "havo")).toBe("klas2"));
  it("al voluit geschreven", () => {
    expect(maakKindGroep("groep7")).toBe("groep7");
    expect(maakKindGroep("klas3|havo")).toBe("klas3");
    expect(maakKindGroep("Klas 4")).toBe("klas4");
  });
  it("onbekend of leeg: niets meesturen", () => {
    expect(maakKindGroep("")).toBe(null);
    expect(maakKindGroep(null)).toBe(null);
    expect(maakKindGroep("vwo")).toBe(null);
  });
});
