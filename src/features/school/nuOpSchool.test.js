import { describe, it, expect, beforeEach } from "vitest";
import pathManifest from "../../learnPaths/pathManifest.generated.json";
import { leesNuOpSchool, zetNuOpSchool, isVerlopen, actieveKeuzes, onderwerpenVoorVak, TIJDVAKKEN, schoolBlok, GELDIG_DAGEN, korteTitel } from "./nuOpSchool.js";

const ids = new Set(pathManifest.map((p) => p.id));

describe("nuOpSchool", () => {
  beforeEach(() => { try { localStorage.clear(); } catch { /* */ } });

  it("tijdvakken: 10 kaartjes, elk met een bestaand pad", () => {
    expect(TIJDVAKKEN).toHaveLength(10);
    for (const t of TIJDVAKKEN) expect(ids.has(t.pathId), t.pathId).toBe(true);
    expect(onderwerpenVoorVak("geschiedenis", 8)).toBe(TIJDVAKKEN);
  });

  it("andere vakken: de paden van dat vak voor die groep, korte labels", () => {
    const rek5 = onderwerpenVoorVak("rekenen", 5);
    expect(rek5.length).toBeGreaterThan(5);
    expect(rek5.some((o) => o.pathId === "breuken-po")).toBe(true);
    expect(rek5.some((o) => o.pathId === "cijferend-rekenen")).toBe(false); // groep 6-8
    for (const o of rek5) { expect(o.label).not.toMatch(/groep/i); expect(o.label.length).toBeGreaterThan(2); }
    expect(onderwerpenVoorVak("wiskunde", 6).some((o) => o.pathId === "kommagetallen-po")).toBe(true);
    expect(onderwerpenVoorVak("taal", 3).length).toBeGreaterThan(0);
  });

  it("korteTitel haalt bereik en toets-label weg", () => {
    expect(korteTitel("Breuken — groep 5-8, Doorstroomtoets-stof")).toBe("Breuken");
    expect(korteTitel("Werelddelen + landen (groep 6-8, Doorstroomtoets-stof)")).toBe("Werelddelen en landen");
  });

  it("zetten, lezen, weghalen en verlopen", () => {
    const k = TIJDVAKKEN[2];
    zetNuOpSchool("Sam", "geschiedenis", k);
    const alles = leesNuOpSchool("Sam");
    expect(alles.geschiedenis.pathId).toBe("tijdvakken-nederland-po");
    expect(isVerlopen(alles.geschiedenis)).toBe(false);
    expect(isVerlopen(alles.geschiedenis, Date.now() + (GELDIG_DAGEN + 1) * 86400000)).toBe(true);
    expect(actieveKeuzes(alles).map((x) => x.vak)).toEqual(["geschiedenis"]);
    expect(actieveKeuzes(alles, Date.now() + 50 * 86400000)).toEqual([]);
    zetNuOpSchool("Sam", "geschiedenis", null);
    expect(leesNuOpSchool("Sam").geschiedenis).toBeUndefined();
    expect(leesNuOpSchool("Anders")).toEqual({});
  });

  it("schoolBlok is een vragen-blokje met titel, stappen en groep", () => {
    const b = schoolBlok({ ...TIJDVAKKEN[8], sinds: Date.now() }, 5, 8);
    // 27 okt 2026: Wereldoorlogen = stap 3 + tijdlijn-mix, gefilterd op oorlogs-vragen (`zoek`).
    expect(b).toMatchObject({ soort: "vragen", pathId: "tijdvakken-nederland-po", stapIndexen: [3, 4], n: 5, groep: 8, school: true });
    expect(b.zoek).toMatch(/oorlog/);
    expect(b.titel).toMatch(/Nu op school: Wereldoorlogen/);
    expect(schoolBlok(null)).toBeNull();
  });
});

// 27 okt 2026 — vakscherm: onderwerpnamen zonder het vak ervoor, alleen paden van die groep.
import { onderwerpLabel, padenVoorVak } from "./nuOpSchool.js";
describe("vakscherm-onderwerpen", () => {
  it("laat het vak weg als de titel ermee begint", () => {
    expect(onderwerpLabel("Engels — eerste woorden en zinnetjes (groep 5)", "engels")).toBe("Eerste woorden en zinnetjes");
    expect(onderwerpLabel("Natuur — seizoenen, dieren en planten (groep 4)", "natuur")).toBe("Seizoenen, dieren en planten");
    expect(onderwerpLabel("Kaartlezen — groep 5-8, Doorstroomtoets-stof", "aardrijkskunde")).toBe("Kaartlezen");
    expect(onderwerpLabel("Klokkijken — analoog + digitaal", "rekenen")).toBe("Klokkijken");
    expect(onderwerpLabel("Breuken (groep 6-8)", "rekenen")).toBe("Breuken");
  });
  it("geeft alleen paden van die groep, zonder nieuwkomers-paden", () => {
    const g5 = padenVoorVak("rekenen", 5);
    expect(g5.length).toBeGreaterThan(5);
    expect(g5.every((o) => !/-nieuwkomers$/.test(o.pathId))).toBe(true);
    expect(padenVoorVak("engels", 5).map((o) => o.pathId)).toContain("engels-eerste-woorden-g5");
    expect(padenVoorVak("engels", 3)).toEqual([]);
    expect(padenVoorVak("geschiedenis", 8).length).toBeGreaterThan(3);
  });
});
