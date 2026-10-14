import { describe, it, expect } from "vitest";
import { leesGastVoortgang, ymdVan } from "./gastVoortgang.js";

const manifest = [
  { id: "breuken-po", title: "Breuken", emoji: "🍕", subject: "rekenen", stepCount: 7 },
  { id: "spelling-ei-ij-au-ou", title: "ei/ij", emoji: "✍️", subject: "taal", stepCount: 2 },
];
const opslag = (obj) => ({ getItem: (k) => (k in obj ? obj[k] : null) });
const nu = new Date(2026, 9, 14, 12, 0);

describe("leesGastVoortgang", () => {
  it("niets bewaard = niets te tonen", () => {
    const v = leesGastVoortgang(manifest, opslag({}), nu);
    expect(v.heeftIets).toBe(false); expect(v.paden).toEqual([]);
  });
  it("telt vragen per pad uit lk_gezien en delen uit lk_lp_klaar", () => {
    const v = leesGastVoortgang(manifest, opslag({
      lk_gezien_v1: JSON.stringify({ "breuken-po|a1": 1, "breuken-po|b2": 1, "breuken-po|c3": 1, "spelling-ei-ij-au-ou|x": 1, "onbekend-pad|y": 1 }),
      lk_lp_klaar: JSON.stringify({ "breuken-po": [0, 1, 1], "spelling-ei-ij-au-ou": [0, 1] }),
      [`lk_leertijd_${ymdVan(nu)}`]: "540",
    }), nu);
    expect(v.heeftIets).toBe(true);
    expect(v.vragen).toBe(4); // onbekend pad telt niet mee
    expect(v.delenAf).toBe(4); // dubbele deel-index maar één keer
    expect(v.paden[0]).toMatchObject({ id: "breuken-po", vragen: 3, delenAf: 2, stepCount: 7, af: false });
    expect(v.padenAf.map((p) => p.id)).toEqual(["spelling-ei-ij-au-ou"]);
    expect(v.perVak.map((x) => [x.subj, x.vragen, x.delenAf])).toEqual([["rekenen", 3, 2], ["taal", 1, 2]]);
    expect(v.minutenVandaag).toBe(9);
  });
  it("kapotte opslag breekt niet", () => {
    const v = leesGastVoortgang(manifest, opslag({ lk_gezien_v1: "{niet json", lk_lp_klaar: "[1,2]" }), nu);
    expect(v.heeftIets).toBe(false);
  });
  it("alleen minuten vandaag is ook iets", () => {
    const v = leesGastVoortgang(manifest, opslag({ [`lk_leertijd_${ymdVan(nu)}`]: "120" }), nu);
    expect(v.heeftIets).toBe(true); expect(v.minutenVandaag).toBe(2);
  });
});
