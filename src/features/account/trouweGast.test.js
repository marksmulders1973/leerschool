import { describe, it, expect, beforeEach } from "vitest";
import {
  noteerBezoekdag, aantalBezoekdagen, isGast, trouweGastKaartTonen,
  trouweGastOvergeslagen, trouweGastKlaar, resetTrouweGast, DREMPEL_DAGEN,
} from "./trouweGast.js";

// Zet N bezoekdagen (vandaag + N-1 eerdere dagen) rechtstreeks in de opslag.
function zetDagen(n) {
  const dagen = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    dagen.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`);
  }
  localStorage.setItem("lk_bezoekdagen", JSON.stringify({ dagen }));
}
function kwartierGehaald() {
  localStorage.setItem("lk_day_streak_v1", JSON.stringify({ lastCompletedDate: "2026-09-10", current: 1, best: 1 }));
}

describe("Trouwe gast — bezoekdagen", () => {
  beforeEach(() => { localStorage.clear(); resetTrouweGast(); });

  it("noteert vandaag één keer, ook bij herhaald aanroepen", () => {
    expect(noteerBezoekdag()).toBe(1);
    expect(noteerBezoekdag()).toBe(1);
    expect(aantalBezoekdagen()).toBe(1);
  });

  it("telt eerdere dagen mee", () => {
    zetDagen(3);
    expect(aantalBezoekdagen()).toBe(3);
    expect(noteerBezoekdag()).toBe(3); // vandaag zat er al in
  });

  it("gast = geen naam of 'Speler'", () => {
    expect(isGast("")).toBe(true);
    expect(isGast("  ")).toBe(true);
    expect(isGast("Speler")).toBe(true);
    expect(isGast("speler")).toBe(true);
    expect(isGast("Noor")).toBe(false);
  });
});

describe("Trouwe gast — kaartje tonen", () => {
  beforeEach(() => { localStorage.clear(); resetTrouweGast(); });

  it("niet onder de drempel", () => {
    zetDagen(DREMPEL_DAGEN - 1); kwartierGehaald();
    expect(trouweGastKaartTonen("").tonen).toBe(false);
  });

  it("niet zonder een gehaald kwartier", () => {
    zetDagen(DREMPEL_DAGEN);
    expect(trouweGastKaartTonen("").tonen).toBe(false);
  });

  it("niet voor een kind mét naam", () => {
    zetDagen(DREMPEL_DAGEN); kwartierGehaald();
    expect(trouweGastKaartTonen("Noor").tonen).toBe(false);
  });

  it("wél voor een gast met 5 dagen en een kwartier — ook als hij 'Speler' heet", () => {
    zetDagen(DREMPEL_DAGEN); kwartierGehaald();
    expect(trouweGastKaartTonen("").tonen).toBe(true);
    expect(trouweGastKaartTonen("Speler").tonen).toBe(true);
    expect(trouweGastKaartTonen("").dagen).toBe(DREMPEL_DAGEN);
  });

  it("na overslaan pas weer na 5 nieuwe bezoekdagen", () => {
    zetDagen(6); kwartierGehaald();
    expect(trouweGastKaartTonen("").tonen).toBe(true);
    trouweGastOvergeslagen();
    expect(trouweGastKaartTonen("").tonen).toBe(false);
    zetDagen(10);
    expect(trouweGastKaartTonen("").tonen).toBe(false);
    zetDagen(11);
    expect(trouweGastKaartTonen("").tonen).toBe(true);
  });

  it("na een gekozen naam nooit meer", () => {
    zetDagen(9); kwartierGehaald();
    trouweGastKlaar();
    expect(trouweGastKaartTonen("").tonen).toBe(false);
    zetDagen(40);
    expect(trouweGastKaartTonen("").tonen).toBe(false);
  });

  it("vandaag voltooid kwartier telt ook zonder streak", () => {
    zetDagen(5);
    localStorage.setItem("lk_daily_goal_v1", JSON.stringify({ date: new Date().toISOString().slice(0, 10), seconds: 900, target: 900, completed: true }));
    expect(trouweGastKaartTonen("").tonen).toBe(true);
  });
});
