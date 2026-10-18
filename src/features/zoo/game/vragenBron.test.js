import { describe, it, expect } from "vitest";
import { maakLotingSom, geschiktVoorLoting, bouwGameVragen } from "./vragenBron.js";

// 18 okt 2026 (Mark): "ALTIJD dezelfde vraag" → "ik wil een som, 100+ sommen".
const reken = (q) => { const m = q.match(/^Wat is (.+)\?$/)[1].replace(/,/g, "."); const p = m.match(/^([\d.]+)% van ([\d.]+)$/); if (p) return (+p[1] * +p[2]) / 100; return Function(`return (${m.replace(/×/g, "*").replace(/ : /g, "/").replace(/−/g, "-")})`)(); };
describe("maakLotingSom — loting in de Bedrieger-kamer", () => {
  for (const g of ["groep3", "groep4", "groep5", "groep6", "groep7", "groep8"]) {
    it(`${g}: altijd een kloppende som met 4 verschillende antwoorden`, () => {
      for (let i = 0; i < 300; i++) {
        const v = maakLotingSom(g);
        expect(geschiktVoorLoting(v)).toBe(true);
        expect(Math.abs(+v.options[v.answer].replace(",", ".") - reken(v.q))).toBeLessThan(1e-9);
        expect(v.options.every((o) => +o.replace(",", ".") >= 0)).toBe(true);
      }
    });
  }
  it("ruim 100 verschillende sommen per groep", () => {
    const set = new Set(); for (let i = 0; i < 1000; i++) set.add(maakLotingSom("groep6").q);
    expect(set.size).toBeGreaterThan(100);
  });
  it("geen herhaling binnen 30 keer", () => {
    const l = []; for (let i = 0; i < 30; i++) l.push(maakLotingSom("groep6").q);
    expect(new Set(l).size).toBe(30);
  });
});

describe("bouwGameVragen 'alles' — taken in het park", () => {
  it("begint niet meer elke keer met dezelfde opwarmvraag", async () => {
    const eerste = new Set();
    for (let i = 0; i < 6; i++) { const v = await bouwGameVragen({ vak: "alles", level: "6", n: 3 }); expect(v.length).toBe(3); eerste.add(v[0].q); }
    expect(eerste.size).toBeGreaterThan(1);
  }, 60000);
});
