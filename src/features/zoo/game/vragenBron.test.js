import { describe, it, expect } from "vitest";
import { bouwLotingVraag, geschiktVoorLoting, bouwGameVragen } from "./vragenBron.js";

// 18 okt 2026 (Mark): "als je drukt op start spel krijg je ALTIJD dezelfde vraag".
describe("bouwLotingVraag — loting in de Bedrieger-kamer", () => {
  it("geeft telkens een andere, korte vraag zonder tekst of plaatje", async () => {
    const vragen = [];
    for (let i = 0; i < 25; i++) vragen.push(await bouwLotingVraag("groep6"));
    expect(vragen.every(geschiktVoorLoting)).toBe(true);
    expect(new Set(vragen.map((v) => v.q)).size).toBe(25);
    expect(new Set(vragen.map((v) => v.padTitel)).size).toBeGreaterThan(5);
  }, 60000);
  it("werkt ook voor groep 4 en 8", async () => {
    for (const g of ["groep4", "groep8"]) expect(geschiktVoorLoting(await bouwLotingVraag(g))).toBe(true);
  }, 30000);
});

describe("bouwGameVragen 'alles' — taken in het park", () => {
  it("begint niet meer elke keer met dezelfde opwarmvraag", async () => {
    const eerste = new Set();
    for (let i = 0; i < 6; i++) { const v = await bouwGameVragen({ vak: "alles", level: "6", n: 3 }); expect(v.length).toBe(3); eerste.add(v[0].q); }
    expect(eerste.size).toBeGreaterThan(1);
  }, 60000);
});
