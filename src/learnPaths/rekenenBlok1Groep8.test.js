// Rekent de antwoorden van het pad "Rekenen groep 8 · blok 1" na.
// Waarom: dit pad is het sjabloon voor de foto-functie (blad fotograferen → uitleg + overhoring).
// Daar geldt de regel "elk reken-antwoord wordt door code nagerekend voordat een kind het ziet".
// Deze test doet dat voor de vaste les: som uit de vraagtekst halen, zelf uitrekenen, vergelijken.
import { describe, it, expect } from "vitest";
import pad, { ZWEMBAD, FIETSTOCHT } from "./rekenenBlok1Groep8.js";

const nlGetal = (t) => Number(String(t).replace(/[€\s]/g, "").replace(",", "."));
const goed = (c) => c.options[c.answer];
const alleChecks = pad.steps.flatMap((s, si) => s.checks.map((c, ci) => ({ c, plek: `stap ${si + 1} vraag ${ci + 1}` })));
const BREUK = { "½": 0.5, "¼": 0.25, "¾": 0.75 };
// "4¼" → 4.25 · "3 1/5" → 3.2 · "2/5" → 0.4 · "4,03" → 4.03
function waarde(t) {
  const s = String(t).trim();
  let m = s.match(/^(\d+)?\s*([½¼¾])$/);
  if (m) return Number(m[1] || 0) + BREUK[m[2]];
  m = s.match(/^(?:(\d+)\s+)?(\d+)\/(\d+)$/);
  if (m) return Number(m[1] || 0) + Number(m[2]) / Number(m[3]);
  return nlGetal(s);
}
const zonderKomma = (t) => t.replace(",", "").replace(/^0+/, "");

describe("rekenen-blok1-groep8 — vorm", () => {
  it("vijf stappen, elk met genoeg vragen, en hoofdstukken die kloppen", () => {
    expect(pad.steps.length).toBe(5);
    pad.steps.forEach((s) => expect(s.checks.length).toBeGreaterThanOrEqual(8));
    expect(pad.chapters.map((h) => [h.from, h.to])).toEqual([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]]);
  });

  it("elke vraag: 4 verschillende opties, goed antwoord op plek 0, hint bij elk fout antwoord", () => {
    for (const { c, plek } of alleChecks) {
      expect(c.options.length, plek).toBe(4);
      expect(new Set(c.options).size, `${plek}: dubbele optie`).toBe(4);
      expect(c.answer, plek).toBe(0);
      expect(c.wrongHints.length, plek).toBe(4);
      expect(c.wrongHints[0], plek).toBeNull();
      c.wrongHints.slice(1).forEach((h) => expect(typeof h === "string" && h.length > 10, `${plek}: hint ontbreekt`).toBe(true));
    }
  });

  it("geen hint verklapt het goede antwoord letterlijk", () => {
    for (const { c, plek } of alleChecks) {
      const antwoord = goed(c);
      // Alleen bij antwoorden van ≥ 5 tekens; een kort getal kan toevallig in een terugreken-hint staan.
      if (antwoord.length < 5) continue;
      c.wrongHints.slice(1).forEach((h) => expect(h.includes(antwoord), `${plek}: hint bevat het antwoord`).toBe(false));
    }
  });

  it("uitlegPad (waar aanwezig) is compleet en eindigt op het goede antwoord", () => {
    const met = alleChecks.filter(({ c }) => c.uitlegPad);
    expect(met.length).toBeGreaterThanOrEqual(8);
    for (const { c, plek } of met) {
      const u = c.uitlegPad;
      for (const veld of ["stappen", "woorden", "voorbeelden", "basiskennis"]) expect(u[veld].length, `${plek}: ${veld}`).toBeGreaterThan(0);
      expect(u.theorie, plek).toBeTruthy();
      expect(u.niveaus.basis && u.niveaus.simpeler, plek).toBeTruthy();
      expect(u.niveaus.nogSimpeler, `${plek}: nogSimpeler is niet het goede antwoord`).toBe(goed(c));
      expect(u.niveaus.basis.includes(goed(c)), `${plek}: basis-niveau verklapt het antwoord`).toBe(false);
    }
  });
});

describe("rekenen-blok1-groep8 — antwoorden nagerekend", () => {
  it("komma plaatsen: de som zonder komma's klopt en het antwoord is A × B", () => {
    const re = /\*\*([\d,]+) × ([\d,]+)\*\*\. Zonder komma's: (\d+) × (\d+) = (\d+)\./;
    const sommen = alleChecks.filter(({ c }) => re.test(c.q));
    expect(sommen.length).toBeGreaterThanOrEqual(9);
    for (const { c, plek } of sommen) {
      const [, A, B, a, b, uit] = c.q.match(re);
      expect(Number(a) * Number(b), `${plek}: som zonder komma's`).toBe(Number(uit));
      expect(a, plek).toBe(zonderKomma(A));
      expect(b, plek).toBe(zonderKomma(B));
      expect(nlGetal(goed(c)), `${plek}: antwoord`).toBeCloseTo(nlGetal(A) * nlGetal(B), 6);
      // De foute opties hebben dezelfde cijfers met de komma op een andere plek (of geen komma).
      c.options.forEach((o) => expect(zonderKomma(o), `${plek}: optie ${o}`).toBe(uit));
    }
  });

  it("schatten: het goede antwoord ligt het dichtst bij de precieze uitkomst", () => {
    const re = /Hoeveel is \*\*(.+?)\*\* ongeveer\?/;
    const sommen = alleChecks.filter(({ c }) => re.test(c.q));
    expect(sommen.length).toBeGreaterThanOrEqual(7);
    for (const { c, plek } of sommen) {
      const som = c.q.match(re)[1].replace(/€/g, "").replace(/\s/g, "");
      let precies;
      if (som.includes("×")) precies = som.split("×").map(nlGetal).reduce((x, y) => x * y);
      else if (som.includes(":")) {
        const [x, y] = som.split(":").map(nlGetal);
        precies = x / y;
      } else precies = som.split("+").map(nlGetal).reduce((x, y) => x + y);
      const afstand = c.options.map((o) => Math.abs(nlGetal(o) - precies));
      expect(afstand.indexOf(Math.min(...afstand)), `${plek}: ${som} = ${precies}`).toBe(0);
      expect(afstand[0] / precies, `${plek}: schatting te ver van ${precies}`).toBeLessThan(0.06);
    }
  });

  it("op volgorde zetten: echt van klein naar groot, met dezelfde getallen als in de vraag", () => {
    const sommen = alleChecks.filter(({ c }) => c.q.startsWith("Zet van **klein naar groot**"));
    expect(sommen.length).toBe(3);
    for (const { c, plek } of sommen) {
      const gevraagd = c.q.split(":")[1].split("–").map((x) => x.trim());
      const antwoord = goed(c).split("–").map((x) => x.trim());
      expect([...antwoord].sort(), plek).toEqual([...gevraagd].sort());
      const w = antwoord.map(waarde);
      expect(w, plek).toEqual([...w].sort((x, y) => x - y));
      expect(new Set(w).size, `${plek}: twee even grote getallen`).toBe(4);
    }
  });

  it("omzetten breuk ↔ kommagetal klopt, en geen foute optie is stiekem ook goed", () => {
    const sommen = alleChecks.filter(({ c }) => /^Schrijf \*\*(.+?)\*\* als (kommagetal|breuk)\.$/.test(c.q));
    expect(sommen.length).toBe(6);
    for (const { c, plek } of sommen) {
      const bron = c.q.match(/\*\*(.+?)\*\*/)[1];
      expect(waarde(goed(c)), `${plek}: ${bron}`).toBeCloseTo(waarde(bron), 9);
      c.options.slice(1).forEach((o) => expect(Math.abs(waarde(o) - waarde(bron)) > 1e-9, `${plek}: foute optie ${o} is ook goed`).toBe(true));
    }
  });

  it("lijndiagram zwembad: aflezen, verschil, totaal en steilste stuk kloppen met de gegevens", () => {
    const { maanden, ochtend, middag } = ZWEMBAD;
    const i = (m) => maanden.indexOf(m);
    const vraag = (begin) => goed(alleChecks.find(({ c }) => c.q.startsWith(begin)).c);
    expect(vraag("Hoeveel bezoekers kwamen er in **september** in de **ochtend**")).toBe(String(ochtend[i("sep")] * 100));
    expect(vraag("Hoeveel bezoekers kwamen er in **juli** in de **ochtend**")).toBe(String(ochtend[i("jul")] * 100));
    expect(ochtend[i("jul")] % 2, "juli-ochtend moet tussen twee lijntjes (van 2) liggen").toBe(1);
    expect(vraag("Hoeveel bezoekers kwamen er in **augustus**")).toBe(String((middag[i("aug")] - ochtend[i("aug")]) * 100));
    expect(vraag("Hoeveel bezoekers kwamen er in **december** in **totaal**")).toBe(String((ochtend[i("dec")] + middag[i("dec")]) * 100));
    expect(vraag("Hoeveel bezoekers kwamen er in **oktober** in de **middag**")).toBe(String(middag[i("okt")] * 100));
    // Sterkste stijging groen: precies één grootste sprong, tussen okt en nov.
    const sprong = ochtend.slice(1).map((v, k) => v - ochtend[k]);
    const max = Math.max(...sprong);
    expect(sprong.filter((s) => s === max).length).toBe(1);
    expect([maanden[sprong.indexOf(max)], maanden[sprong.indexOf(max) + 1]]).toEqual(["okt", "nov"]);
    expect(vraag("Tussen welke maanden **stijgt**")).toBe("Tussen oktober en november");
    // Eerste maand met ochtend > middag.
    expect(maanden[ochtend.findIndex((v, k) => v > middag[k])]).toBe("nov");
    expect(vraag("In welke maand kwamen er voor het eerst")).toBe("November");
    // 4600 in de ochtend komt precies één keer voor.
    expect(ochtend.filter((v) => v === 46).length).toBe(1);
    expect(maanden[ochtend.indexOf(46)]).toBe("nov");
    expect(vraag("In welke maand kwamen er in de **ochtend 4600**")).toBe("November");
  });

  it("lijndiagram fietstocht: afstand, pauze, snelheid en snelste uur kloppen met de gegevens", () => {
    const { km } = FIETSTOCHT;
    const vraag = (begin) => goed(alleChecks.find(({ c }) => c.q.startsWith(begin)).c);
    expect(vraag("Noor fietst een tocht")).toBe(`${km[2]} km`);
    expect(km[3] - km[2], "tussen 2 en 3 uur staat ze stil").toBe(0);
    expect(vraag("Hoe **snel** fietste Noor")).toBe(`${km[2] / 2} km per uur`);
    const perUur = km.slice(1).map((v, k) => v - km[k]);
    const max = Math.max(...perUur);
    expect(perUur.filter((s) => s === max).length).toBe(1);
    expect(perUur.indexOf(max)).toBe(3);
    expect(vraag("In welk uur fietste Noor het **snelst**")).toBe("Tussen 3 uur en 4 uur");
  });

  it("losse sommen uit de uitleg kloppen", () => {
    expect(48 * 61).toBe(2928);
    expect(4.8 * 6.1).toBeCloseTo(29.28, 9);
    expect(32 * 48).toBe(1536);
    expect(32 * 0.48).toBeCloseTo(15.36, 9);
    expect(21 * 98).toBe(2058);
    expect(5 * 19.75).toBeLessThan(100);
    expect(5 * 19.75).toBeGreaterThan(95);
  });
});
