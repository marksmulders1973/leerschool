import { describe, it, expect } from "vitest";
import pathManifest from "../../../learnPaths/pathManifest.generated.json";
import { blokkenVoorGroep, kwartiercheckVragen, maakBlokSessie, oordeelConcept, uitslagVak, volgendBlok, blokkenVandaag, leerpadVragen, GROEPEN, WEET_NIET, BLOK_DUUR_SEC } from "./nulmeting.js";
import { drietal, voorstelVoorBlok, wissel, weekVervolg, niveauPast, padBestaat } from "./advies.js";
import { teksten } from "./teksten.js";
import { maakSom } from "./drempel.js";
import { normaliseerKoppelcode, lijktKoppelcode } from "../../../shared/koppelcode.js";

const IDS = new Set(pathManifest.map((p) => p.id));

describe("nulmeting: blokken per groep", () => {
  it.each(GROEPEN)("groep %s heeft 3 blokken met vragen en bestaande leerpaden", (g) => {
    const b = blokkenVoorGroep(g);
    expect(b.map((x) => x.nr)).toEqual([1, 2, 3]);
    expect(b[0].vak).toBe("rekenen");
    for (const blok of b) {
      expect(blok.concepten.length).toBeGreaterThan(0);
      expect(blok.concepten.length).toBeLessThanOrEqual(3);
      for (const c of blok.concepten) {
        expect(IDS.has(c.leerpadId), `${c.leerpadId} bestaat niet`).toBe(true);
        if (c.bron !== "leerpad") expect(kwartiercheckVragen(c.id)[1].length, `${c.id} heeft geen niveau-1-vragen`).toBeGreaterThan(0);
      }
    }
  });
  it("blok 3 is studievaardigheden in groep 7, 8 en brugklas, en taal in groep 3-6", () => {
    for (const g of ["7", "8", "brugklas"]) expect(blokkenVoorGroep(g)[2].vak).toBe("studievaardigheden");
    for (const g of ["3", "4", "5", "6"]) expect(blokkenVoorGroep(g)[2].vak).toBe("taal");
  });
  it("blok 2 is technisch lezen in groep 3 en begrijpend lezen daarna", () => {
    expect(blokkenVoorGroep("3")[1].vak).toBe("lezen");
    expect(blokkenVoorGroep("6")[1].vak).toBe("begrijpend-lezen");
  });
});

describe("nulmeting: oordeel (geen cijfer)", () => {
  it("niveau 1 fout = nog niet; n1 goed + n2 fout = wankel; beide goed (rustig) = goed", () => {
    expect(oordeelConcept([{ niveau: 1, goed: false, ms: 9000 }])).toBe("nog-niet");
    expect(oordeelConcept([{ niveau: 1, goed: true, ms: 9000 }, { niveau: 2, goed: false, ms: 9000 }])).toBe("wankel");
    expect(oordeelConcept([{ niveau: 1, goed: true, ms: 9000 }, { niveau: 2, goed: true, ms: 9000 }])).toBe("goed");
  });
  it("alles binnen 3 s goed telt als wankel (waarschijnlijk gegokt)", () => {
    expect(oordeelConcept([{ niveau: 1, goed: true, ms: 1000 }, { niveau: 2, goed: true, ms: 1200 }])).toBe("wankel");
  });
  it("vak-uitslag", () => {
    expect(uitslagVak(["goed", "goed"])).toBe("goed");
    expect(uitslagVak(["nog-niet", "nog-niet", "wankel"])).toBe("nog-niet");
    expect(uitslagVak(["goed", "nog-niet"])).toBe("wankel");
    expect(uitslagVak(["onbekend"])).toBe("onbekend");
  });
});

describe("nulmeting: blok-sessie", () => {
  const blok = blokkenVoorGroep("7")[0];
  const vragen = Object.fromEntries(blok.concepten.map((c) => [c.id, kwartiercheckVragen(c.id)]));
  it("loopt alle concepten af en geeft een uitslag zonder cijfer", () => {
    let t = 0;
    const s = maakBlokSessie(blok, vragen, { startMs: 0, nu: () => t });
    let v; let n = 0;
    while ((v = s.volgende())) { t += 10000; s.antwoord(v, v.vraag.correct, 10000); n++; }
    const r = s.resultaat({ groep: "7" });
    expect(n).toBe(blok.concepten.length * 2);
    expect(r.uitslag).toBe("goed");
    expect(r).not.toHaveProperty("cijfer");
    expect(r.concepten.every((c) => c.oordeel === "goed")).toBe(true);
  });
  it("stopt na vijf minuten; niet gemeten onderdelen heten 'onbekend'", () => {
    let t = 0;
    const s = maakBlokSessie(blok, vragen, { startMs: 0, nu: () => t });
    const v = s.volgende();
    s.antwoord(v, WEET_NIET, 1000);
    t = BLOK_DUUR_SEC * 1000;
    expect(s.volgende()).toBeNull();
    const r = s.resultaat({ groep: "7" });
    expect(r.concepten[0].oordeel).toBe("nog-niet");
    expect(r.concepten.slice(1).every((c) => c.oordeel === "onbekend")).toBe(true);
  });
  it("volgend blok en blokken vandaag", () => {
    expect(volgendBlok({})).toBe(1);
    expect(volgendBlok({ 1: {} })).toBe(2);
    expect(volgendBlok({ 1: {}, 3: {} })).toBe(2);
    expect(volgendBlok({ 1: {}, 2: {}, 3: {} })).toBeNull();
    const nu = new Date("2026-10-07T12:00:00");
    expect(blokkenVandaag({ 1: { klaarOp: "2026-10-07T08:00:00" }, 2: { klaarOp: "2026-10-06T08:00:00" } }, nu)).toBe(1);
  });
  it("leerpad-checks worden vragen met geschudde opties en een kloppend antwoord", () => {
    const pad = { id: "x", chapters: [{ from: 0, to: 0 }], steps: [{ checks: [{ q: "a?", options: ["goed", "f1", "f2"], answer: 0 }] }, { checks: [{ q: "b?", options: ["goed", "f"], answer: 0 }] }] };
    const v = leerpadVragen(pad, () => 0.0);
    expect(v[1]).toHaveLength(1);
    expect(v[2]).toHaveLength(1);
    expect(v[1][0].opties[v[1][0].correct]).toBe("goed");
    expect(v[2][0].opties[v[2][0].correct]).toBe("goed");
  });
});

const blokUitslag = (nr, vak, concepten) => ({ blok: nr, vak, uitslag: "wankel", concepten });

describe("advies: voorstellen", () => {
  it("niveauPast", () => {
    expect(niveauPast("groep6-8", "7")).toBe(true);
    expect(niveauPast("groep6-8", "5")).toBe(false);
    expect(niveauPast("groep8", "8")).toBe(true);
    expect(niveauPast("klas1-2", "brugklas")).toBe(true);
    expect(niveauPast("vmbo-gt-4", "8")).toBe(false);
  });
  it("na blok 1: één voorstel voor het zwakste onderdeel, met twee echte alternatieven", () => {
    const b1 = blokUitslag(1, "rekenen", [{ id: "g7-breuken", oordeel: "goed" }, { id: "g7-kommagetallen", oordeel: "wankel" }, { id: "g7-procenten", oordeel: "nog-niet" }]);
    const v = voorstelVoorBlok("7", b1);
    expect(v.padId).toBe("procenten-po");
    expect(v.reden).toBe("nog-niet");
    expect(v.alternatieven).toHaveLength(2);
    expect(v.alternatieven[0].padId).toBe("kommagetallen-po");
    for (const a of [v, ...v.alternatieven]) expect(padBestaat(a.padId)).toBe(true);
  });
  it.each(GROEPEN)("groep %s: drietal na 3 blokken = 3 verschillende, bestaande paden met 2 alternatieven", (g) => {
    const blokken = Object.fromEntries(blokkenVoorGroep(g).map((b) => [b.nr, blokUitslag(b.nr, b.vak, b.concepten.map((c, i) => ({ id: c.id, oordeel: i === 0 ? "nog-niet" : "goed" })))]));
    const d = drietal(g, blokken);
    expect(d).toHaveLength(3);
    expect(new Set(d.map((x) => x.padId)).size).toBe(3);
    for (const v of d) {
      expect(IDS.has(v.padId)).toBe(true);
      expect(v.alternatieven.length).toBe(2);
      expect(v.alternatieven.every((a) => IDS.has(a.padId) && !/nieuwkomers/.test(a.padId))).toBe(true);
    }
  });
  it("alles goed: dan een stapje verder, niet nog eens hetzelfde", () => {
    const b = blokkenVoorGroep("7")[0];
    const v = voorstelVoorBlok("7", blokUitslag(1, "rekenen", b.concepten.map((c) => ({ id: c.id, oordeel: "goed" }))));
    expect(b.concepten.map((c) => c.leerpadId)).not.toContain(v.padId);
  });
  it("wisselen: één tik zet het alternatief vooraan en het oude komt bij de alternatieven", () => {
    const b1 = blokUitslag(1, "rekenen", [{ id: "g7-breuken", oordeel: "goed" }, { id: "g7-kommagetallen", oordeel: "wankel" }, { id: "g7-procenten", oordeel: "nog-niet" }]);
    const v = voorstelVoorBlok("7", b1);
    const w = wissel("7", b1, v, v.alternatieven[1].padId);
    expect(w.padId).toBe(v.alternatieven[1].padId);
    expect(w.alternatieven[0].padId).toBe(v.padId);
    expect(w.alternatieven).toHaveLength(2);
  });
});

describe("advies: wekelijks vervolg", () => {
  const blokken = { 1: blokUitslag(1, "rekenen", [{ id: "g7-procenten", oordeel: "nog-niet" }]), 2: blokUitslag(2, "begrijpend-lezen", [{ id: "g7-hoofdgedachte-verbanden", oordeel: "wankel" }]) };
  const keuzes = [{ padId: "procenten-po", blok: 1 }, { padId: "samenvatten-hoofdgedachte-po", blok: 2 }, { padId: "breuken-po", blok: 1 }];
  it("goed / nog niet / niet begonnen en een voorstel voor volgende week", () => {
    const stappen = pathManifest.find((p) => p.id === "samenvatten-hoofdgedachte-po").stepCount;
    const w = weekVervolg("7", keuzes, { "procenten-po": { stappenGedaan: 1, goed: 1, fout: 3 }, "samenvatten-hoofdgedachte-po": { stappenGedaan: stappen, goed: 9, fout: 1 } }, blokken);
    expect(w.nogNiet.map((x) => x.padId)).toEqual(["procenten-po"]);
    expect(w.goed.map((x) => x.padId)).toEqual(["samenvatten-hoofdgedachte-po"]);
    expect(w.nietBegonnen.map((x) => x.padId)).toEqual(["breuken-po"]);
    expect(w.volgende).toHaveLength(3);
    const nieuw = w.volgende.find((x) => x.waarom === "stap-verder");
    expect(nieuw && IDS.has(nieuw.padId)).toBe(true);
    expect(keuzes.map((k) => k.padId)).not.toContain(nieuw.padId);
  });
});

describe("teksten", () => {
  it.each(GROEPEN)("groep %s: B1-regels (geen cijfer-belofte, geen 'altijd gratis', contact klopt)", (g) => {
    const t = JSON.stringify(teksten(g, "Sam"), (k, v) => (typeof v === "function" ? v(1, 3) : v));
    expect(t).not.toMatch(/altijd gratis/i);
    expect(t).not.toMatch(/squla|junior einstein|wrts|examenbundel/i);
    expect(t).toContain("hallo@leerkwartier.app");
    expect(t).toContain("2031");
    expect(t).toContain("Ik adviseer je om Sam te laten beginnen met een korte basistest, een nulmeting. Dan weten we ongeveer hoe het gaat.");
    expect(t).toContain("Op basis van de nulmeting stel ik deze drie dingen voor. Goed zo, of wil je iets wisselen?");
  });
});

describe("drempel en koppelcode", () => {
  it("de som is altijd twee getallen van twee cijfers", () => {
    for (const r of [0, 0.5, 0.999]) {
      const s = maakSom(() => r);
      const [a, b] = s.vraag.split(" × ").map(Number);
      expect(a).toBeGreaterThanOrEqual(12); expect(b).toBeGreaterThanOrEqual(12);
      expect(s.antwoord).toBe(a * b);
    }
  });
  it("koppelcode met spatie, streepje of kleine letters wordt herkend", () => {
    expect(normaliseerKoppelcode(" abc 123 ")).toBe("ABC123");
    expect(normaliseerKoppelcode("ABC-123")).toBe("ABC123");
    expect(lijktKoppelcode("ab c-12.3")).toBe(true);
    expect(lijktKoppelcode("ab")).toBe(false);
  });
});
