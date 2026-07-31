import { describe, it, expect } from "vitest";
import { berekenParaatheid, onderdeelVoorSubject, DEMO_RECORDS } from "./paraatheid.js";

describe("onderdeelVoorSubject", () => {
  it("mapt vakken naar de drie Doorstroomtoets-onderdelen", () => {
    expect(onderdeelVoorSubject("rekenen")).toBe("rekenen");
    expect(onderdeelVoorSubject("wiskunde")).toBe("rekenen");
    expect(onderdeelVoorSubject("spelling")).toBe("taal");
    expect(onderdeelVoorSubject("begrijpend-lezen")).toBe("taal");
    expect(onderdeelVoorSubject("aardrijkskunde")).toBe("studievaardigheden");
    expect(onderdeelVoorSubject("onbekend-vak")).toBe(null);
  });
});

describe("berekenParaatheid", () => {
  it("geeft drie onderdelen terug", () => {
    const r = berekenParaatheid([]);
    expect(r.onderdelen).toHaveLength(3);
    expect(r.onderdelen.map((o) => o.key)).toEqual(["rekenen", "taal", "studievaardigheden"]);
  });

  it("lege input → alles 'in opbouw', geen NaN", () => {
    const r = berekenParaatheid([]);
    for (const o of r.onderdelen) {
      expect(o.status).toBe("inopbouw");
      expect(o.pct).toBe(null);
      expect(o.pogingen).toBe(0);
    }
  });

  it("demo-records → rekenen groen, taal oranje, studievaardigheden rood", () => {
    const { onderdelen } = berekenParaatheid(DEMO_RECORDS);
    const byKey = Object.fromEntries(onderdelen.map((o) => [o.key, o]));
    expect(byKey.rekenen.status).toBe("groen");
    expect(byKey.taal.status).toBe("oranje");
    expect(byKey.studievaardigheden.status).toBe("rood");
  });

  it("te weinig pogingen blijft 'in opbouw' ook bij 100% goed", () => {
    const { onderdelen } = berekenParaatheid([
      { attempts: 3, correct: 3, path: { subject: "rekenen" } },
    ]);
    expect(onderdelen.find((o) => o.key === "rekenen").status).toBe("inopbouw");
  });

  it("percentage klopt en is nooit NaN bij nul pogingen", () => {
    const { onderdelen } = berekenParaatheid([
      { attempts: 40, correct: 34, path: { subject: "rekenen" } },
    ]);
    const rek = onderdelen.find((o) => o.key === "rekenen");
    expect(rek.pct).toBe(85);
    // Slechts één onderwerp → wel sterk %, maar te weinig breedte voor 'groen'.
    expect(rek.status).toBe("oranje");
    const taal = onderdelen.find((o) => o.key === "taal");
    expect(taal.pct).toBe(null);
    expect(Number.isNaN(taal.pct)).toBe(false);
  });

  it("hoog % over meerdere onderwerpen → groen (breedte + diepte)", () => {
    const { onderdelen } = berekenParaatheid([
      { attempts: 12, correct: 11, path: { subject: "rekenen" } },
      { attempts: 12, correct: 10, path: { subject: "rekenen" } },
      { attempts: 12, correct: 10, path: { subject: "wiskunde" } },
    ]);
    expect(onderdelen.find((o) => o.key === "rekenen").status).toBe("groen");
  });
});
