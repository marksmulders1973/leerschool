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
    expect(b).toMatchObject({ soort: "vragen", pathId: "tijdvakken-nederland-po", stapIndexen: [3], n: 5, groep: 8, school: true });
    expect(b.titel).toMatch(/Nu op school: Wereldoorlogen/);
    expect(schoolBlok(null)).toBeNull();
  });
});
