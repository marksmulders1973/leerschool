// De AI mag bij "Scan je huiswerk" alleen verwijzen naar lessen die echt bestaan.
// controleerAntwoord() is de poort tussen het AI-antwoord en het kinderscherm.
import { describe, it, expect } from "vitest";
import { controleerAntwoord } from "../../../api/scan-huiswerk.js";
import pad from "../../learnPaths/rekenenBlok1Groep8.js";

const basis = { schoolwerk: true, vak: "rekenen", groep: 8, titel: "Doelen blok 1" };

describe("scan-huiswerk: controleerAntwoord", () => {
  it("geen schoolwerk of onzin → lege uitkomst", () => {
    for (const ruw of [null, "tekst", {}, { schoolwerk: "ja", doelen: [{ doel: "Schatten", les: pad.id, onderdeel: 1 }] }]) {
      expect(controleerAntwoord(ruw)).toEqual({ schoolwerk: false, vak: "", groep: null, titel: "", doelen: [] });
    }
  });

  it("een bestaande les blijft staan, met de titel van het onderdeel uit onze eigen lijst", () => {
    const uit = controleerAntwoord({ ...basis, doelen: [{ doel: "Een lijndiagram aflezen", les: pad.id, onderdeel: 4 }] });
    expect(uit.doelen).toEqual([{ doel: "Een lijndiagram aflezen", les: pad.id, onderdeel: 4, lesTitel: pad.title, onderdeelTitel: pad.steps[3].title }]);
  });

  it("een verzonnen les wordt 'nog geen les', een onderdeel buiten bereik wordt onderdeel 1", () => {
    const uit = controleerAntwoord({ ...basis, doelen: [
      { doel: "Iets wat wij niet hebben", les: "verzonnen-les", onderdeel: 2 },
      { doel: "Schatten met ronde getallen", les: pad.id, onderdeel: 99 },
    ] });
    expect(uit.doelen[0]).toEqual({ doel: "Iets wat wij niet hebben", les: null, onderdeel: null });
    expect(uit.doelen[1].onderdeel).toBe(1);
  });

  it("hooguit zes doelen, geen dubbele, geen HTML en geen grove woorden", () => {
    const veel = Array.from({ length: 9 }, (_, i) => ({ doel: `Doel nummer ${i + 1}`, les: null, onderdeel: null }));
    expect(controleerAntwoord({ ...basis, doelen: veel }).doelen.length).toBe(6);
    const uit = controleerAntwoord({ ...basis, titel: "<b>Blad</b>", groep: 12, doelen: [
      { doel: "Schatten", les: pad.id, onderdeel: 1 },
      { doel: "Nog eens schatten", les: pad.id, onderdeel: 1 },
      { doel: "kut sommen maken", les: null, onderdeel: null },
      { doel: "<script>alert(1)</script> breuken", les: null, onderdeel: null },
    ] });
    expect(uit.doelen.map((d) => d.doel)).toEqual(["Schatten", "script alert(1) /script breuken"]);
    expect(uit.titel).toBe("b Blad /b");
    expect(uit.groep).toBeNull();
  });
});
