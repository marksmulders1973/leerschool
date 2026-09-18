import { describe, it, expect, beforeEach, vi } from "vitest";

// Soepele kwartier-telling (18 sep 2026). De klok loopt breed door — zoeken en
// navigeren telt mee als leertijd — maar het meet-event `kwartier_reached`
// vuurt alleen op een dag waarop er écht iets van leren gebeurde.

const sporen = [];
vi.mock("../utils.js", () => ({
  track: (naam, props) => sporen.push({ naam, props }),
}));
vi.mock("../supabase.js", () => ({ default: { from: () => ({ update: () => ({ eq: async () => ({}) }) }) } }));

const { leermomentVandaag, meldLeermoment } = await import("./leermoment.js");
const { addSeconds, getDailyGoal, DEFAULT_TARGET_SECONDS } = await import("./dailyGoal.js");

beforeEach(() => {
  localStorage.clear();
  sporen.length = 0;
});

describe("leermoment-vlag", () => {
  it("staat leeg zonder leermoment", () => {
    expect(leermomentVandaag()).toBe(false);
  });

  it("staat aan na een leermoment", () => {
    meldLeermoment();
    expect(leermomentVandaag()).toBe(true);
  });

  it("telt een leermoment van gisteren niet mee", () => {
    localStorage.setItem("lk_leermoment_v1", JSON.stringify({ date: "2020-01-01", count: 9 }));
    expect(leermomentVandaag()).toBe(false);
  });
});

describe("kwartier_reached vuurt soepel", () => {
  it("vuurt NIET na een kwartier zonder één leermoment", () => {
    addSeconds(DEFAULT_TARGET_SECONDS + 5);
    expect(getDailyGoal().completed).toBe(true); // het kind ziet en viert het kwartier gewoon
    expect(sporen.filter((s) => s.naam === "kwartier_reached")).toHaveLength(0);
  });

  it("vuurt WEL als er die dag geleerd is", () => {
    meldLeermoment();
    addSeconds(DEFAULT_TARGET_SECONDS + 5);
    expect(sporen.filter((s) => s.naam === "kwartier_reached")).toHaveLength(1);
  });

  it("vuurt alsnog als het leermoment pas ná de vijftien minuten komt", () => {
    addSeconds(DEFAULT_TARGET_SECONDS + 5);
    expect(sporen.filter((s) => s.naam === "kwartier_reached")).toHaveLength(0);
    meldLeermoment();
    expect(sporen.filter((s) => s.naam === "kwartier_reached")).toHaveLength(1);
  });

  it("vuurt hooguit één keer per dag", () => {
    meldLeermoment();
    addSeconds(DEFAULT_TARGET_SECONDS + 5);
    meldLeermoment();
    addSeconds(120);
    expect(sporen.filter((s) => s.naam === "kwartier_reached")).toHaveLength(1);
  });

  it("laat de treden-events ongemoeid — die blijven puur op tijd lopen", () => {
    addSeconds(5 * 60 + 2);
    expect(sporen.filter((s) => s.naam === "kwartier_deel")).toHaveLength(1);
  });
});
