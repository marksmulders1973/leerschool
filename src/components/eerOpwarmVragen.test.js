import { describe, it, expect } from "vitest";
import { EER_OPWARM } from "./eerOpwarmVragen.js";

describe("Opwarmset ere-scherm", () => {
  for (const taal of ["nl", "en"]) {
    it(`${taal}: vijf vragen, vier opties, geldig antwoord, hint en uitleg`, () => {
      const set = EER_OPWARM[taal];
      expect(set).toHaveLength(5);
      for (const v of set) {
        expect(v.q.length).toBeGreaterThan(5);
        expect(v.opties).toHaveLength(4);
        expect(new Set(v.opties).size).toBe(4);
        expect(v.goed).toBeGreaterThanOrEqual(0);
        expect(v.goed).toBeLessThan(4);
        expect(v.hint.length).toBeGreaterThan(5);
        expect(v.uitleg.length).toBeGreaterThan(5);
      }
      // niet steeds hetzelfde antwoordvakje
      expect(new Set(set.map((v) => v.goed)).size).toBeGreaterThan(1);
    });
  }
});
