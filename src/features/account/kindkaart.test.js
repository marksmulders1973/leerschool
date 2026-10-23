import { describe, it, expect } from "vitest";
import { weekSamenvatting, wanneerTekst, sterkEnZwak, tipVoorVanavond, vakNaam } from "./kindkaart.js";

const NU = new Date(2026, 9, 23, 20, 0); // vr 23 okt 2026 20:00
const dagen = (n, uur = 19) => new Date(2026, 9, 23 - n, uur, 20);

describe("weekSamenvatting", () => {
  it("telt actieve dagen uit toetsjes én lesstappen, vandaag als laatste", () => {
    const scores = [{ completed_at: dagen(0).toISOString(), time_taken: 120 }, { completed_at: dagen(2).toISOString(), time_taken: 300 }];
    const perPad = { a: { perStap: { 0: { wanneer: dagen(2) }, 1: { wanneer: dagen(5) } } } };
    const w = weekSamenvatting(scores, perPad, NU);
    expect(w.dagen).toHaveLength(7);
    expect(w.dagen[6]).toEqual({ naam: "vr", actief: true, vandaag: true });
    expect(w.actieveDagen).toBe(3);
    expect(w.toetsjes).toBe(2);
    expect(w.stappen).toBe(2);
    expect(w.toetsMinuten).toBe(7);
    expect(w.laatste.getDate()).toBe(23);
  });
  it("ouder dan 7 dagen telt niet mee in de week, wel als 'laatst geoefend'", () => {
    const w = weekSamenvatting([{ completed_at: dagen(10).toISOString() }], {}, NU);
    expect(w.actieveDagen).toBe(0);
    expect(w.toetsjes).toBe(0);
    expect(w.laatste.getDate()).toBe(13);
  });
  it("lege of rare invoer crasht niet", () => {
    expect(weekSamenvatting(undefined, undefined, NU).actieveDagen).toBe(0);
    expect(weekSamenvatting([{ completed_at: "kapot" }, null], { x: null }, NU).laatste).toBe(null);
  });
});

describe("wanneerTekst", () => {
  it("vandaag, gisteren, weekdag, datum", () => {
    expect(wanneerTekst(dagen(0), NU)).toBe("vandaag 19:20");
    expect(wanneerTekst(dagen(1), NU)).toBe("gisteren 19:20");
    expect(wanneerTekst(dagen(3), NU)).toBe("dinsdag");
    expect(wanneerTekst(dagen(11), NU)).toBe("12 okt");
    expect(wanneerTekst(null, NU)).toBe("");
  });
});

describe("sterkEnZwak + tip", () => {
  const scores = [
    { subject: "rekenen", percentage: 40 }, { subject: "rekenen", percentage: 50 },
    { subject: "taal", percentage: 90 }, { subject: "cito", percentage: 30 },
  ];
  it("zwak pas na 2 toetsjes; sterk vanaf 75%", () => {
    const { sterk, zwak } = sterkEnZwak(scores);
    expect(sterk.map((x) => x.naam)).toEqual(["Nederlands"]);
    expect(zwak.map((x) => x.naam)).toEqual(["Rekenen"]);
  });
  it("tip past bij het zwakste vak, met de naam van het kind", () => {
    const { zwak } = sterkEnZwak(scores);
    expect(tipVoorVanavond("Olivia", zwak)).toMatch(/Olivia/);
    expect(tipVoorVanavond("Olivia", zwak)).toMatch(/boodschappen/);
    expect(tipVoorVanavond("Olivia", [], { actieveDagen: 0 })).toMatch(/vast moment/);
  });
  it("vaknamen in gewone woorden", () => {
    expect(vakNaam("cito")).toBe("Doorstroomtoets");
    expect(vakNaam("begrijpend-lezen")).toMatch(/^Begrijpend l/i);
    expect(vakNaam("taal")).toBe("Nederlands");
  });
});

import { doorstroomMeter, oordeel, onderdeelVoorPad, MIN_VRAGEN } from "./kindkaart.js";
describe("doorstroomMeter", () => {
  const PADEN = {
    "procenten-po": { id: "procenten-po", title: "Procenten — groep 5-8, Doorstroomtoets-stof", subject: "rekenen", level: "groep5-8", emoji: "💯" },
    "spelling-po": { id: "spelling-po", title: "Werkwoordspelling (groep 7-8)", subject: "taal", level: "groep7-8" },
    "schemas-po": { id: "schemas-po", title: "Schema's", subject: "taal", level: "groep6-8", sloThema: "Studievaardigheden — schema's" },
    "examen-vmbo": { id: "examen-vmbo", subject: "economie", level: "vmbo" },
  };
  const padVoor = (id) => PADEN[id];
  const rij = (items, dagenTerug = 1) => ({ completed_at: new Date(NU.getTime() - dagenTerug * 86400000).toISOString(), detail: items });
  it("telt per onderdeel, vmbo en onbekende paden tellen niet mee, oud valt weg", () => {
    const scores = [
      rij([{ pad: "procenten-po", goed: false }, { pad: "procenten-po", goed: true }, { pad: "spelling-po", goed: true }, { pad: "schemas-po", goed: true }, { pad: "examen-vmbo", goed: true }, { pad: "bestaat-niet", goed: true }]),
      rij([{ pad: "procenten-po", goed: true }], 90),
      { completed_at: NU.toISOString(), detail: JSON.stringify([{ pad: "procenten-po", goed: false }]) },
    ];
    const m = doorstroomMeter(scores, padVoor, NU);
    const r = m.onderdelen.find((o) => o.key === "rekenen");
    expect(r).toMatchObject({ goed: 1, aantal: 3, pct: 33 });
    expect(r.gemist[0]).toMatchObject({ id: "procenten-po", fout: 2, titel: "Procenten", emoji: "💯" });
    expect(m.onderdelen.find((o) => o.key === "taal").aantal).toBe(1);
    expect(m.onderdelen.find((o) => o.key === "studievaardigheden").aantal).toBe(1);
    expect(m.totaal).toBe(5);
  });
  it("oordeel: te weinig, oefenen, op weg, sterk", () => {
    expect(oordeel(90, MIN_VRAGEN - 1).key).toBe("weinig");
    expect(oordeel(40, 20).key).toBe("oefenen");
    expect(oordeel(60, 20).key).toBe("opweg");
    expect(oordeel(80, 20).key).toBe("sterk");
  });
  it("onderdeelVoorPad: alleen basisschool", () => {
    expect(onderdeelVoorPad(PADEN["examen-vmbo"])).toBe(null);
    expect(onderdeelVoorPad(PADEN["schemas-po"])).toBe("studievaardigheden");
    expect(onderdeelVoorPad(undefined)).toBe(null);
  });
});
