// 16 okt 2026: na een 🚩-melding uit groep 6 op de vraag over het laagste land.
// Bewaakt dat de herschreven vraag compleet is: elk fout antwoord heeft een hint,
// het goede antwoord heeft er geen, en de foute opties gaan niet twee keer over hetzelfde gebied.
import { describe, it, expect } from "vitest";
import topografieNederland from "./topografieNederland.js";

function vindCheck(zoek) {
  for (const step of topografieNederland.steps || []) {
    for (const c of step.checks || []) {
      if (String(c.q).includes(zoek)) return c;
    }
  }
  return null;
}

describe("topografie — vraag over het laagste land", () => {
  const check = vindCheck("ligt het land het **laagst**");

  it("bestaat en heeft 4 antwoorden met west en noord als goed antwoord", () => {
    expect(check).not.toBeNull();
    expect(check.options).toHaveLength(4);
    expect(check.options[check.answer]).toBe("In het westen en noorden");
  });

  it("geeft bij elk fout antwoord een hint en bij het goede antwoord geen", () => {
    check.options.forEach((_, i) => {
      if (i === check.answer) expect(check.wrongHints[i]).toBeNull();
      else expect(typeof check.wrongHints[i] === "string" && check.wrongHints[i].length > 10).toBe(true);
    });
  });

  it("heeft 'oost en zuid' als echte tegenhanger en noemt Limburg maar één keer", () => {
    expect(check.options).toContain("In het oosten en zuiden");
    expect(check.options.filter((o) => /limburg|vaalserberg/i.test(o))).toHaveLength(1);
  });
});
