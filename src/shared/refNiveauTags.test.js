// Bewaakt de B6-belofte "geen giswerk": de niveau-indicatie mag alleen
// draaien op vragen met een geldige referentieniveau-tag, en elk meetellend
// onderdeel moet genoeg getagde vragen hebben (MIN_VRAGEN).
import { describe, it, expect } from "vitest";
import { MIN_VRAGEN } from "./niveauIndicatie.js";
import rekenen from "../learnPaths/doorstroomtoetsRekenenG8.js";
import taal from "../learnPaths/doorstroomtoetsTaalG8.js";
import studie from "../learnPaths/doorstroomtoetsStudievaardighedenG8.js";

const GELDIGE_REF = ["1F", "S"];
const GELDIGE_ONDERDELEN = ["rekenen", "lezen", "taalverzorging", "geen"];

const telPerOnderdeel = () => {
  const telling = {};
  for (const pad of [rekenen, taal, studie]) {
    for (const step of pad.steps || []) {
      for (const check of step.checks || []) {
        if (check.ref == null) continue;
        expect(GELDIGE_REF).toContain(check.ref);
        // een getagde vraag moet in een stap met onderdeel-mapping staan
        expect(GELDIGE_ONDERDELEN).toContain(step.refOnderdeel);
        const key = step.refOnderdeel + ":" + check.ref;
        telling[key] = (telling[key] || 0) + 1;
        telling[step.refOnderdeel] = (telling[step.refOnderdeel] || 0) + 1;
      }
    }
  }
  return telling;
};

describe("refNiveau-tags (B6)", () => {
  it("alle trio-stappen hebben een refOnderdeel", () => {
    for (const pad of [rekenen, taal, studie]) {
      for (const step of pad.steps || []) {
        expect(GELDIGE_ONDERDELEN, pad.id + " / " + step.title).toContain(step.refOnderdeel);
      }
    }
  });

  it("elk meetellend onderdeel heeft >= MIN_VRAGEN getagde vragen", () => {
    const telling = telPerOnderdeel();
    for (const o of ["rekenen", "lezen", "taalverzorging"]) {
      expect(telling[o] || 0, o).toBeGreaterThanOrEqual(MIN_VRAGEN);
    }
  });

  it("elk meetellend onderdeel heeft zowel 1F- als S-vragen", () => {
    const telling = telPerOnderdeel();
    for (const o of ["rekenen", "lezen", "taalverzorging"]) {
      expect(telling[o + ":1F"] || 0, o + " 1F").toBeGreaterThan(0);
      expect(telling[o + ":S"] || 0, o + " S").toBeGreaterThan(0);
    }
  });

  it("studievaardigheden telt niet mee (alleen refOnderdeel 'geen')", () => {
    for (const step of studie.steps || []) {
      expect(step.refOnderdeel).toBe("geen");
    }
  });
});
