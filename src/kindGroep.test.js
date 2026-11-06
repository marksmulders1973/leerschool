import { describe, it, expect } from "vitest";
import { maakKindGroep, kindGroepUitInhoud } from "./utils.js";

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

describe("kindGroepUitInhoud (6 nov 2026: meetgat — groep uit de gekozen toets/quiz)", () => {
  it("één groep of klas → kind_groep", () => {
    expect(kindGroepUitInhoud("groep 8")).toBe("groep8");
    expect(kindGroepUitInhoud("groep8")).toBe("groep8");
    expect(kindGroepUitInhoud("8")).toBe("groep8");
    expect(kindGroepUitInhoud("klas 2")).toBe("klas2");
    expect(kindGroepUitInhoud("2", "havo")).toBe("klas2");
  });
  it("bereiken en VO-niveaus zonder klas → null (geen gok)", () => {
    expect(kindGroepUitInhoud("groep6-8")).toBe(null);
    expect(kindGroepUitInhoud("groep 7-8")).toBe(null);
    expect(kindGroepUitInhoud("havo4-5-vwo")).toBe(null);
    expect(kindGroepUitInhoud("vmbo-gt-4")).toBe(null);
    expect(kindGroepUitInhoud("")).toBe(null);
    expect(kindGroepUitInhoud(null)).toBe(null);
  });
});
