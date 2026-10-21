import { describe, it, expect } from "vitest";
import manifest from "../learnPaths/pathManifest.generated.json";
import { korteTitel, groepBereik, weekIndex, isoWeek, maakWeektaak, kandidaten, WEEKTAAK_GROEPEN } from "./weektaak.js";

describe("weektaak", () => {
  it("leest groep-niveaus", () => {
    expect(groepBereik("groep6-8")).toEqual([6, 8]);
    expect(groepBereik("groep8")).toEqual([8, 8]);
    expect(groepBereik("klas1-2")).toBeNull();
    expect(groepBereik("po")).toBeNull();
  });

  it("telt weken vanaf maandag 5 jan 2026, ma t/m zo hetzelfde", () => {
    expect(weekIndex(new Date(2026, 0, 5))).toBe(0);
    expect(weekIndex(new Date(2026, 0, 11))).toBe(0);
    expect(weekIndex(new Date(2026, 0, 12))).toBe(1);
    expect(weekIndex(new Date(2026, 9, 19))).toBe(weekIndex(new Date(2026, 9, 25)));
    expect(isoWeek(new Date(2026, 9, 21))).toBe(43);
  });

  it("geeft voor elke groep 3 taken (rekenen, taal, lezen) met bestaande paden", () => {
    const ids = new Set(manifest.map((p) => p.id));
    for (const g of WEEKTAAK_GROEPEN) {
      const w = maakWeektaak(g, new Date(2026, 9, 21));
      expect(w.type).toBe("takenlijst");
      if (g >= 4) expect(w.taken.map((t) => t.vak)).toEqual(["rekenen", "taal", "lezen"]);
      else expect(w.taken.map((t) => t.vak)).toEqual(["rekenen", "taal"]);
      expect(w.taken.some((t) => /nieuwkomers/.test(t.pathId))).toBe(false);
      for (const t of w.taken) {
        expect(ids.has(t.pathId)).toBe(true);
        expect(t.stepCount).toBeGreaterThan(0);
      }
    }
  });

  it("is in dezelfde week overal gelijk (ook over de wintertijd) en wisselt de week erna", () => {
    const a = maakWeektaak(6, new Date(2026, 9, 19));
    const b = maakWeektaak(6, new Date(2026, 9, 25));
    const c = maakWeektaak(6, new Date(2026, 9, 26));
    expect(a.taken).toEqual(b.taken);
    expect(c.taken.map((t) => t.pathId)).not.toEqual(a.taken.map((t) => t.pathId));
  });

  it("past bij de groep: elk pad dekt de groep", () => {
    for (const g of WEEKTAAK_GROEPEN) {
      for (const p of kandidaten(g, ["rekenen", "taal", "spelling", "begrijpend-lezen", "studievaardigheden"])) {
        const [van, tot] = groepBereik(p.level);
        expect(g >= van && g <= tot).toBe(true);
      }
    }
  });

  it("maakt korte titels zonder groep-aanduiding", () => {
    expect(korteTitel("Breuken — groep 5-8, Doorstroomtoets-stof")).toBe("Breuken");
    expect(korteTitel("Dichten + poëzie + rijm (groep 5-8, Doorstroomtoets-stof)")).toBe("Dichten + poëzie + rijm");
    for (const g of WEEKTAAK_GROEPEN) for (let w = 0; w < 30; w++)
      for (const t of maakWeektaak(g, new Date(2026, 9, 19 + 7 * w)).taken) expect(t.title).not.toMatch(/groep \d|—/i);
  });

  it("weigert onbekende groepen", () => {
    expect(maakWeektaak(2)).toBeNull();
    expect(maakWeektaak("x")).toBeNull();
  });
});
