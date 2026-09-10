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
