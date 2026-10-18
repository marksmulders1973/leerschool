import { describe, it, expect } from "vitest";
import { maakSpel, maakStations, zetRollen, checkEinde, TAKEN_PER_BOUWER } from "./imposterEngine.js";

// 18 okt 2026: aantal bedriegers instelbaar in de Bedrieger-kamer (1 t/m 3).
const spel = (opts = {}) => maakSpel({ spelerId: "ik", spelerNaam: "Jij", nBots: 7, stations: maakStations(), ...opts });
const nImp = (st) => st.spelers.filter((s) => s.rol === "imposter").length;

describe("zetRollen — rollen uit de kamer", () => {
  it("zet zoveel bots op bedrieger als er bots wonnen", () => {
    for (const n of [1, 2, 3]) {
      const st = zetRollen(spel(), {}, n);
      expect(nImp(st)).toBe(n);
      expect(st.spelers.filter((s) => s.rol === "imposter").every((s) => s.bot)).toBe(true);
      expect(st.nImp).toBe(n);
    }
  });
  it("combineert een echte bedrieger met bot-bedriegers", () => {
    const st = zetRollen(spel(), { ik: "imposter" }, 2);
    expect(st.spelers.find((s) => s.id === "ik").rol).toBe("imposter");
    expect(nImp(st)).toBe(3);
    expect(st.takenTotaal).toBe(5 * TAKEN_PER_BOUWER);
  });
  it("oud formaat: true = één bot-bedrieger", () => {
    expect(nImp(zetRollen(spel(), {}, true))).toBe(1);
  });
  it("nooit nul bedriegers", () => {
    expect(nImp(zetRollen(spel(), {}, 0))).toBe(1);
  });
});

describe("maakSpel — solo vanuit de kamer", () => {
  it("bedrieger + 2 extra: ik en 2 anderen", () => {
    const st = spel({ spelerRolKeuze: "imposter", nImposters: 3 });
    expect(st.spelers.find((s) => s.id === "ik").rol).toBe("imposter");
    expect(nImp(st)).toBe(3);
  });
  it("bouwer met 2 bedriegers: ik niet, 2 bots wel", () => {
    const st = spel({ spelerRolKeuze: "bouwer", nImposters: 2 });
    expect(st.spelers.find((s) => s.id === "ik").rol).toBe("bouwer");
    expect(nImp(st)).toBe(2);
  });
});

describe("einde met meerdere bedriegers", () => {
  it("bouwers winnen pas als álle bedriegers uitgestemd zijn", () => {
    const st = zetRollen(spel(), {}, 2);
    st.fase = "spel";
    const [a, b] = st.spelers.filter((s) => s.rol === "imposter");
    a.uitgestemd = true; a.af = true;
    expect(checkEinde(st)).toBe(null);
    b.uitgestemd = true; b.af = true;
    expect(checkEinde(st)).toMatchObject({ gewonnen: "bouwers", reden: "Alle bedriegers zijn uitgestemd!" });
  });
});

// 18 okt 2026: taakposten zijn kapotte attracties — repareren met een som, na HERSTEL_S weer kapot.
import { taakKlaar, magTaak, tick, HERSTEL_S } from "./imposterEngine.js";
describe("kapotte attracties", () => {
  const start = () => { const st = zetRollen(spel(), {}, 1); st.fase = "spel"; return st; };
  it("alle attracties beginnen kapot en hebben een soort", () => {
    const st = start();
    expect(st.stations.length).toBe(6);
    expect(st.stations.every((s) => s.kapot === true && ["draaimolen", "reuzenrad", "zweefmolen"].includes(s.soort))).toBe(true);
  });
  it("een bouwer repareert: attractie heel, taak telt, daarna niet nog eens", () => {
    const st = start(); const b = st.spelers.find((s) => s.rol === "bouwer"); const stn = st.stations[0];
    expect(magTaak(st, b, stn)).toBe(true);
    taakKlaar(st, b.id, stn.id, 1, 1);
    expect(stn.kapot).toBe(false); expect(stn.gemaaktDoor).toBe(b.naam); expect(st.takenKlaar).toBe(1);
    const ander = st.spelers.find((s) => s.rol === "bouwer" && s.id !== b.id);
    expect(magTaak(st, ander, stn)).toBe(false);
    taakKlaar(st, ander.id, stn.id, 1, 1);
    expect(st.takenKlaar).toBe(1);
  });
  it("een bedrieger repareert niet echt", () => {
    const st = start(); const imp = st.spelers.find((s) => s.rol === "imposter");
    taakKlaar(st, imp.id, st.stations[1].id, 1, 1);
    expect(st.stations[1].kapot).toBe(true); expect(st.takenKlaar).toBe(0);
  });
  it("fout antwoord: blijft kapot", () => {
    const st = start(); const b = st.spelers.find((s) => s.rol === "bouwer");
    taakKlaar(st, b.id, st.stations[2].id, 0, 1);
    expect(st.stations[2].kapot).toBe(true);
  });
  it(`na ${HERSTEL_S} s weer kapot`, () => {
    const st = start(); const b = st.spelers.find((s) => s.rol === "bouwer"); const stn = st.stations[0];
    taakKlaar(st, b.id, stn.id, 1, 1);
    for (const sp of st.spelers) if (sp.bot) sp.bevroren = 999; // bots stilzetten zodat alleen de klok telt
    for (let t = 0; t < HERSTEL_S - 1; t++) tick(st, 1, null);
    expect(stn.kapot).toBe(false);
    tick(st, 1.5, null);
    expect(stn.kapot).toBe(true);
  });
  it("bouwer-bots gaan naar een kapotte attractie", () => {
    const st = start(); st.stations.forEach((s, i) => { if (i > 0) { s.kapot = false; s.gemaaktOp = 0; } });
    tick(st, 0.05, null);
    for (const b of st.spelers.filter((s) => s.bot && s.rol === "bouwer" && s.doel)) expect(b.doel.id).toBe(st.stations[0].id);
  });
});
