import { describe, it, expect } from "vitest";
import { bepaalPlan, planSamenvatting, dagenTotToets } from "./vandaagPlan.js";

const rec = (id, attempts, correct, title = id, subject = "rekenen") => ({ pathId: id, attempts, correct, path: { id, title, subject } });

describe("Vandaag-motor — ladder", () => {
  it("1. klaargezet gaat altijd voor", () => {
    const p = bepaalPlan({ level: "8", klaargezet: [{ path_id: "breuken-po", titel: "Breuken", gedaan: false, bron: "leraar" }], mastery: [rec("tafels-po", 10, 2)] });
    expect(p.reden).toBe("klaargezet");
    expect(p.blokjes[0].soort).toBe("klaargezet");
    expect(p.uitleg).toMatch(/juf of meester/);
  });
  it("2. groep 8 binnen 8 weken voor de toets → toets-stijl", () => {
    const p = bepaalPlan({ level: "8", vandaag: new Date(2027, 0, 5), mastery: [rec("tafels-po", 10, 2)] });
    expect(p.reden).toBe("toets");
    expect(p.blokjes.map((b) => b.soort)).toEqual(["vragen", "vragen", "werkwoorden"]);
  });
  it("3. weekschema: maandag het lastigste, vrijdag wat al goed gaat", () => {
    const mastery = [rec("tafels-po", 10, 2, "Tafels"), rec("breuken-po", 10, 9, "Breuken"), rec("procenten-po", 10, 5, "Procenten")];
    const ma = bepaalPlan({ level: "7", vandaag: new Date(2026, 8, 14), mastery }); // maandag 14 sep 2026
    expect(ma.reden).toBe("weekschema");
    expect(ma.blokjes[0]).toMatchObject({ soort: "vragen", pathId: "tafels-po" });
    const vr = bepaalPlan({ level: "7", vandaag: new Date(2026, 8, 18), mastery });
    expect(vr.blokjes[0].pathId).toBe("breuken-po");
    expect(vr.blokjes.map((b) => b.soort)).toEqual(["vragen", "werkwoorden", "dictee"]);
  });
  it("5. zonder meting: mix per groep, groep 5 krijgt dictee i.p.v. werkwoorden", () => {
    const p = bepaalPlan({ level: "5", vandaag: new Date(2026, 8, 10) });
    expect(p.reden).toBe("mix");
    expect(p.blokjes.map((b) => b.soort)).toEqual(["vragen", "vragen", "dictee"]);
    expect(p.blokjes[2].groep).toBe(5);
  });
  it("VO-leerling krijgt geen dictee/werkwoorden", () => {
    const p = bepaalPlan({ level: "2", metSchoolvakken: true });
    expect(p.blokjes.every((b) => b.soort === "vragen")).toBe(true);
  });
  it("samenvatting en toets-aftelling", () => {
    const p = bepaalPlan({ level: "6", vandaag: new Date(2026, 8, 10) });
    expect(planSamenvatting(p)).toMatch(/5 vragen/);
    expect(dagenTotToets(new Date(2026, 8, 10))).toBe(137);
  });
});

describe("Vandaag-motor — middelbare school (Noa, 8 okt 2026)", () => {
  const klasPaden = ["aardobservatie-risico-havo-vwo", "algebra-vergelijkingen-havo-vwo", "argumentatieleer", "bbp-conjunctuur-economie", "atmosfeer-klimaat-havo-vwo"];
  it("klas 5 krijgt nooit basisschoolpaden, ook niet met PO-meetgegevens", () => {
    const p = bepaalPlan({ level: "klas5", metSchoolvakken: true, klasPaden, vandaag: new Date(2026, 9, 8), mastery: [rec("dieren-seizoenen-natuur", 10, 2, "Dieren", "wereld")] });
    const ids = p.blokjes.map((b) => b.pathId);
    expect(ids.length).toBeGreaterThanOrEqual(2);
    for (const id of ids) expect(klasPaden).toContain(id);
  });
  it("klas 5 met een zwak eigen-klas-pad: dat eerst, daarna andere vakken", () => {
    const p = bepaalPlan({ level: "klas5", metSchoolvakken: true, klasPaden, vandaag: new Date(2026, 9, 5), mastery: [rec("bbp-conjunctuur-economie", 10, 2, "BBP", "economie")] });
    expect(p.blokjes[0].pathId).toBe("bbp-conjunctuur-economie");
    expect(p.blokjes.length).toBeGreaterThanOrEqual(2);
    const vakken = p.blokjes.map((b) => b.pathId);
    expect(new Set(vakken).size).toBe(vakken.length);
  });
  // 16 okt 2026: melding "ik had niet voor Duits gekozen" — vakkeuze gold op de middelbare school niet.
  const klasMetTalen = ["naamvallen-duits", "werkwoordsvervoeging-duits", "algebra-vergelijkingen-havo-vwo", "bbp-conjunctuur-economie", "argumentatieleer"];
  const vandaagVk = new Date(2026, 9, 16);
  it("vakkeuze wiskunde + economie: geen Duits, alleen gekozen vakken", () => {
    const voorkeur = { vakken: ["wiskunde", "economie"], tot: "2026-12-16" };
    for (let d = 12; d <= 18; d++) {
      const p = bepaalPlan({ level: "klas2", metSchoolvakken: true, klasPaden: klasMetTalen, vandaag: new Date(2026, 9, d), voorkeur });
      const ids = p.blokjes.map((b) => b.pathId);
      expect(ids.length).toBeGreaterThanOrEqual(2);
      for (const id of ids) expect(["algebra-vergelijkingen-havo-vwo", "bbp-conjunctuur-economie"]).toContain(id);
    }
  });
  it("één gekozen vak: aangevuld met andere paden van dat vak", () => {
    const voorkeur = { vakken: ["duits"], tot: "2026-12-16" };
    const p = bepaalPlan({ level: "klas2", metSchoolvakken: true, klasPaden: klasMetTalen, vandaag: vandaagVk, voorkeur });
    const ids = p.blokjes.map((b) => b.pathId);
    expect(ids.sort()).toEqual(["naamvallen-duits", "werkwoordsvervoeging-duits"]);
  });
  it("zwak pad buiten de keuze komt niet terug", () => {
    const voorkeur = { vakken: ["wiskunde"], tot: "2026-12-16" };
    const p = bepaalPlan({ level: "klas2", metSchoolvakken: true, klasPaden: klasMetTalen, vandaag: new Date(2026, 9, 12), voorkeur, mastery: [rec("naamvallen-duits", 10, 2, "Naamvallen", "duits")] });
    for (const b of p.blokjes) expect(b.pathId).not.toMatch(/duits/);
  });
  it("geen keuze of verlopen keuze: alle vakken van de klas (zoals voorheen)", () => {
    const zonder = bepaalPlan({ level: "klas2", metSchoolvakken: true, klasPaden: klasMetTalen, vandaag: vandaagVk });
    const verlopen = bepaalPlan({ level: "klas2", metSchoolvakken: true, klasPaden: klasMetTalen, vandaag: vandaagVk, voorkeur: { vakken: ["wiskunde"], tot: "2026-10-01" } });
    expect(verlopen.blokjes.map((b) => b.pathId)).toEqual(zonder.blokjes.map((b) => b.pathId));
    expect(zonder.uitleg).toMatch(/jouw klas/);
  });
});
