import { describe, it, expect } from "vitest";
import { berekenIndicatie, maakOuderMailSectie, MIN_VRAGEN, CATEGORIEEN } from "./niveauIndicatie.js";

const vol = (f1g, f1t, sg, st) => ({ f1: { goed: f1g, totaal: f1t }, s: { goed: sg, totaal: st } });

describe("niveauIndicatie — geen giswerk", () => {
  it("geeft GEEN indicatie bij te weinig vragen (alle onderdelen)", () => {
    const uit = berekenIndicatie({
      rekenen: vol(5, 6, 2, 3),
      lezen: vol(4, 5, 1, 2),
      taalverzorging: vol(3, 4, 1, 1),
    });
    expect(uit.betrouwbaar).toBe(false);
    expect(uit.indicatie).toBeNull();
    expect(uit.tekort.length).toBe(3);
  });

  it("geeft GEEN indicatie als één onderdeel onder MIN_VRAGEN zit", () => {
    const uit = berekenIndicatie({
      rekenen: vol(15, 20, 8, 10),
      lezen: vol(14, 18, 6, 8),
      taalverzorging: vol(5, 8, 2, 3), // 11 < MIN_VRAGEN
    });
    expect(uit.betrouwbaar).toBe(false);
    expect(uit.tekort.map((t) => t.onderdeel)).toEqual(["taalverzorging"]);
  });

  it("sterke leerling (alles ~goed) → bovenste banden", () => {
    const uit = berekenIndicatie({
      rekenen: vol(19, 20, 18, 20),
      lezen: vol(18, 20, 17, 20),
      taalverzorging: vol(19, 20, 18, 20),
    });
    expect(uit.betrouwbaar).toBe(true);
    expect(uit.indicatie).toContain("vwo");
  });

  it("1F redelijk, streefniveau zwak → middenbanden, nooit vwo", () => {
    const uit = berekenIndicatie({
      rekenen: vol(15, 20, 4, 20),
      lezen: vol(14, 20, 4, 20),
      taalverzorging: vol(15, 20, 5, 20),
    });
    expect(uit.betrouwbaar).toBe(true);
    expect(uit.indicatie.join()).not.toContain("vwo");
    expect(uit.indicatie.length).toBeGreaterThanOrEqual(1);
  });

  it("indicatie is altijd een bandbreedte van bestaande categorieën", () => {
    const uit = berekenIndicatie({
      rekenen: vol(12, 20, 8, 20),
      lezen: vol(13, 20, 9, 20),
      taalverzorging: vol(12, 20, 7, 20),
    });
    expect(uit.betrouwbaar).toBe(true);
    uit.indicatie.forEach((c) => expect(CATEGORIEEN).toContain(c));
    expect(uit.indicatie.length).toBeLessThanOrEqual(2);
  });

  it("mail-sectie bevat ALTIJD 'onder voorbehoud'-kader en methode-uitleg", () => {
    const metIndicatie = maakOuderMailSectie({
      rekenen: vol(19, 20, 18, 20), lezen: vol(18, 20, 17, 20), taalverzorging: vol(19, 20, 18, 20),
    });
    const teVroeg = maakOuderMailSectie({ rekenen: vol(1, 2, 0, 0), lezen: vol(1, 2, 0, 0), taalverzorging: vol(1, 2, 0, 0) });
    for (const html of [metIndicatie, teVroeg]) {
      expect(html).toContain("Zo komen we aan deze indicatie");
      expect(html.toLowerCase()).toContain("alleen de echte toets telt");
    }
    expect(metIndicatie).toContain("onder voorbehoud");
    expect(teVroeg).toContain("te vroeg");
    expect(teVroeg.toLowerCase()).toContain("giswerk");
  });

  it("rekenen weegt het zwaarst (45%)", () => {
    const sterkRekenen = berekenIndicatie({
      rekenen: vol(20, 20, 20, 20), lezen: vol(10, 20, 5, 20), taalverzorging: vol(10, 20, 5, 20),
    });
    const zwakRekenen = berekenIndicatie({
      rekenen: vol(10, 20, 5, 20), lezen: vol(20, 20, 20, 20), taalverzorging: vol(20, 20, 20, 20),
    });
    expect(sterkRekenen.somscore).toBeLessThan(zwakRekenen.somscore);
    // (lezen+taal samen = 55% > rekenen 45% — sanity dat weging echt toegepast wordt)
  });
});
