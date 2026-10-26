// 🎯 Elke startset moet precies 20 geldige vragen opleveren; de test schrijft ze uit naar
// docs/audit/STARTSET-<groep>-<vak>.md zodat ze met de hand nagekeken kunnen worden.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { STARTSETS, STARTSET_N, startsetSleutel, startsetBlok } from "./startsetsData.js";
import { startsetVragen } from "./startsets.js";

describe("startsets", () => {
  it("sleutel en blokje", () => {
    expect(startsetSleutel(5, "rekenen")).toBe("5|rekenen");
    expect(startsetSleutel(5, "wiskunde")).toBe("5|rekenen");
    expect(startsetSleutel(9, "rekenen")).toBeNull();
    expect(startsetBlok("5|rekenen", 5)).toMatchObject({ soort: "vragen", startset: "5|rekenen", n: 5 });
    expect(startsetBlok("5|engels", 5)).toBeNull();
  });

  for (const sleutel of Object.keys(STARTSETS)) {
    it(`${sleutel} levert ${STARTSET_N} geldige vragen op, zonder dubbele`, async () => {
      const set = await startsetVragen(sleutel);
      // Eerst uitschrijven (ook als de set niet klopt: dan zie je wat er wél kwam), dan controleren.
      {
        const [groep, vak] = sleutel.split("|");
        const regels = [`# Startset ${STARTSETS[sleutel].titel} — de eerste ${STARTSET_N} vragen`, "", `Gegenereerd door src/features/learn/startsets.test.js op ${new Date().toISOString().slice(0, 10)}. Bron: startsetsData.js. Aantal: ${set.length}.`, ""];
        set.forEach((q, i) => {
          regels.push(`## ${i + 1}. ${q.padTitel} (${q.pathId}, stap ${(q.stapIdx ?? 0) + 1})${q.stapTekst ? " ⚠️ hoort bij een leestekst in de stap" : ""}${q.svg ? " 🖼️ met plaatje" : ""}`);
          if (q.leesTekst) regels.push(`> Leestekst bij deze vraag: ${String(q.leesTekst).replace(/\s*\n\s*/g, " ")}`, "");
          regels.push(`Vraag: ${String(q.q).replace(/\n/g, " ")}`);
          q.options.forEach((o, k) => regels.push(`- ${k === q.answer ? "✅" : "▫️"} ${String(o).replace(/\n/g, " ")}`));
          regels.push("");
        });
        try {
          const map = path.resolve(process.cwd(), "docs/audit");
          fs.mkdirSync(map, { recursive: true });
          fs.writeFileSync(path.join(map, `STARTSET-${groep}-${vak}.md`), regels.join("\n"), "utf8");
        } catch { /* geen schrijfrechten in CI: de controle hieronder telt */ }
      }
      const beoogd = STARTSETS[sleutel].items.reduce((s, it) => s + it.n, 0);
      expect(beoogd).toBe(STARTSET_N);
      expect(set.length).toBe(STARTSET_N);
      const sleutels = new Set();
      for (const q of set) {
        expect(typeof q.q).toBe("string");
        expect(q.q.length).toBeGreaterThan(3);
        expect(Array.isArray(q.options) && q.options.length >= 2).toBe(true);
        expect(typeof q.answer).toBe("number");
        expect(q.options[q.answer]).toBeDefined();
        expect(q.pathId).toBeTruthy();
        expect(q.geziensleutel).toBeTruthy();
        // Hoort de vraag bij een leestekst in de stap, dan moet die tekst meekomen (VraagKaart toont q.leesTekst).
        if (q.stapTekst) expect(q.leesTekst, `${sleutel} vraag "${q.q.slice(0, 50)}" hoort bij een leestekst maar heeft er geen`).toBeTruthy();
        sleutels.add(q.geziensleutel);
      }
      expect(sleutels.size).toBe(STARTSET_N);
    }, 60000);
  }
});
