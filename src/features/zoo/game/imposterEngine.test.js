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
