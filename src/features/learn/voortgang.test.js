import { describe, it, expect } from "vitest";
import { voortgangPct, beantwoordInDeel } from "./voortgang.js";

describe("voortgangPct", () => {
  it("nul bij start", () => {
    expect(voortgangPct({ afgerondeDelen: 0, totaalDelen: 7, deelIsAf: false, beantwoord: 0, vragenInDeel: 5 })).toBe(0);
  });
  it("beweegt na de eerste vraag (de klacht van 14 okt)", () => {
    expect(voortgangPct({ afgerondeDelen: 0, totaalDelen: 7, deelIsAf: false, beantwoord: 1, vragenInDeel: 5 })).toBe(3);
    expect(voortgangPct({ afgerondeDelen: 0, totaalDelen: 7, deelIsAf: false, beantwoord: 3, vragenInDeel: 5 })).toBe(9);
  });
  it("afgerond deel telt vol, lopend deel naar rato", () => {
    expect(voortgangPct({ afgerondeDelen: 1, totaalDelen: 4, deelIsAf: false, beantwoord: 2, vragenInDeel: 4 })).toBe(38);
  });
  it("afgerond deel niet dubbel tellen", () => {
    expect(voortgangPct({ afgerondeDelen: 1, totaalDelen: 4, deelIsAf: true, beantwoord: 4, vragenInDeel: 4 })).toBe(25);
  });
  it("alles af = 100, nooit erboven", () => {
    expect(voortgangPct({ afgerondeDelen: 4, totaalDelen: 4, deelIsAf: true, beantwoord: 9, vragenInDeel: 4 })).toBe(100);
    expect(voortgangPct({ afgerondeDelen: 3, totaalDelen: 4, deelIsAf: false, beantwoord: 9, vragenInDeel: 4 })).toBe(100);
  });
  it("deel zonder vragen of leeg pad breekt niet", () => {
    expect(voortgangPct({ afgerondeDelen: 0, totaalDelen: 3, deelIsAf: false, beantwoord: 2, vragenInDeel: 0 })).toBe(0);
    expect(voortgangPct({ afgerondeDelen: 0, totaalDelen: 0, deelIsAf: false, beantwoord: 0, vragenInDeel: 0 })).toBe(0);
  });
});

describe("beantwoordInDeel", () => {
  it("huidige vraag telt pas na een antwoord", () => {
    expect(beantwoordInDeel(2, "checking")).toBe(2);
    expect(beantwoordInDeel(2, "wrong")).toBe(3);
    expect(beantwoordInDeel(2, "correctEvidence")).toBe(3);
  });
});
