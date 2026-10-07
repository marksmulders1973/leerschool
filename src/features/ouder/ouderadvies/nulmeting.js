// 🧭 Nulmeting in drie blokken van vijf minuten (prototype ouderadvies, 7 okt 2026).
//
// Waarom: ouders haken af als ze zelf uit veel moeten kiezen. De app stelt
// daarom eerst een korte basistest voor. Die is opgeknipt in drie blokken van
// vijf minuten, elk één vak, zodat het kind na elk blok mag stoppen en het
// resultaat van dat blok al bewaard is.
//
//   blok 1 = rekenen
//   blok 2 = lezen (groep 3: technisch lezen; groep 4 en hoger: begrijpend lezen)
//   blok 3 = groep 7, 8 en brugklas: studievaardigheden; lagere groepen: taal
//            (spelling en woordenschat)
//
// De vragen komen uit de bestaande Kwartiercheck-sets per groep
// (src/features/kwartiercheck/groepen). Groep 7 heeft daar geen
// studievaardigheden-vragen, dus blok 3 haalt die uit bestaande leerpaden
// (alfabet-woordenboek-po, kaartlezen-po) plus de Kwartiercheck-vragen over
// tabellen en grafieken. De brugklas heeft geen eigen Kwartiercheck-set en
// gebruikt de set van groep 8 (eerlijk benoemd in de teksten).
//
// Eerlijkheid: vijf minuten zegt per vak alleen "gaat goed / wankel / nog niet".
// Geen cijfer, geen niveau. Deze module rekent dus ook nooit een cijfer uit.
//
// Puur (geen React, geen Supabase): de vraaglader voor leerpad-vragen wordt
// meegegeven, zodat dit bestand in vitest te testen is.

import { GROEP_SETS } from "../../kwartiercheck/groepen/index.js";
import { CONCEPTEN, conceptVan } from "../../kwartiercheck/conceptMapping.js";
import { KWARTIERCHECK_VRAGEN } from "../../kwartiercheck/questions.js";

export const BLOK_DUUR_SEC = 5 * 60;
export const MAX_CONCEPTEN_PER_BLOK = 3;
// Zelfde drempel als de Kwartiercheck: alles binnen 3 s goed = waarschijnlijk gegokt.
export const GOK_MS = 3000;
export const WEET_NIET = -1;

export const UITSLAG = { goed: "goed", wankel: "wankel", nogniet: "nog-niet", onbekend: "onbekend" };
export const UITSLAG_TEKST = {
  goed: "gaat goed",
  wankel: "wankel",
  "nog-niet": "nog niet",
  onbekend: "niet aan toegekomen",
};

export const GROEPEN = ["3", "4", "5", "6", "7", "8", "brugklas"];

/** "brugklas" → set van groep 8; "7" → "7". Onbekend → "8". */
export function setGroep(groep) {
  const g = String(groep || "").trim().toLowerCase();
  if (g === "brugklas" || g === "1") return "8";
  return GROEP_SETS[g] ? g : "8";
}

const concepten = (groep) => GROEP_SETS[setGroep(groep)]?.concepten || CONCEPTEN;
const vanVak = (groep, vakken) => concepten(groep).filter((c) => vakken.includes(c.vak));

// Studievaardigheden (groep 7-8, brugklas). Twee soorten bronnen:
//  - "kwartiercheck": vragen staan in de Kwartiercheck-sets;
//  - "leerpad": vragen zijn de checks van een bestaand leerpad (lazy geladen).
const STUDIEVAARDIGHEDEN = [
  { id: "g8-tabellen-grafieken", label: "Tabellen en grafieken lezen", vak: "studievaardigheden", leerpadId: "tabellen-grafieken", leerpadTitel: "Tabellen en grafieken", bron: "kwartiercheck" },
  { id: "sv-alfabet-woordenboek", label: "Opzoeken op alfabet", vak: "studievaardigheden", leerpadId: "alfabet-woordenboek-po", leerpadTitel: "Alfabetisch opzoeken & woordenboek", bron: "leerpad" },
  { id: "sv-kaartlezen", label: "Kaartlezen", vak: "studievaardigheden", leerpadId: "kaartlezen-po", leerpadTitel: "Kaartlezen", bron: "leerpad" },
];

export const VAK_NAAM = {
  rekenen: "rekenen",
  lezen: "lezen",
  "begrijpend-lezen": "begrijpend lezen",
  taal: "taal (spelling en woordenschat)",
  studievaardigheden: "studievaardigheden",
};

/**
 * De drie blokken voor deze groep.
 * → [{ nr, vak, naam, concepten: [{ id, label, vak, leerpadId, leerpadTitel, bron }], reserve: [...] }]
 * `reserve` = concepten van hetzelfde vak die niet in de vijf minuten passen;
 * die gebruikt het advies als alternatief.
 */
export function blokkenVoorGroep(groep) {
  const g = String(groep || "").trim().toLowerCase();
  const sg = setGroep(g);
  const rekenen = vanVak(g, ["rekenen"]).filter((c) => c.id !== "g8-tabellen-grafieken");
  const lezen = sg === "3" ? vanVak(g, ["lezen"]) : vanVak(g, ["begrijpend-lezen"]);
  const derde = ["7", "8"].includes(sg)
    ? STUDIEVAARDIGHEDEN
    : vanVak(g, ["taal"]);
  const maak = (nr, vak, lijst) => ({
    nr,
    vak,
    naam: VAK_NAAM[vak] || vak,
    concepten: lijst.slice(0, MAX_CONCEPTEN_PER_BLOK).map((c) => ({ bron: "kwartiercheck", ...c })),
    reserve: lijst.slice(MAX_CONCEPTEN_PER_BLOK).map((c) => ({ bron: "kwartiercheck", ...c })),
  });
  return [
    maak(1, "rekenen", rekenen),
    maak(2, sg === "3" ? "lezen" : "begrijpend-lezen", lezen),
    maak(3, ["7", "8"].includes(sg) ? "studievaardigheden" : "taal", derde),
  ];
}

const ALLE_KC_VRAGEN = [...KWARTIERCHECK_VRAGEN, ...Object.values(GROEP_SETS).flatMap((s) => s.vragen || [])];

/** Kwartiercheck-vragen van één concept, per niveau: { 1: [...], 2: [...] }. */
export function kwartiercheckVragen(conceptId) {
  const eigen = ALLE_KC_VRAGEN.filter((v) => v.concept === conceptId);
  return {
    1: eigen.filter((v) => v.niveau === 1).map((v) => ({ id: v.id, vraag: v.vraag, opties: v.opties, correct: v.correct })),
    2: eigen.filter((v) => v.niveau >= 2).map((v) => ({ id: v.id, vraag: v.vraag, opties: v.opties, correct: v.correct })),
  };
}

/** Leerpad-checks als nulmeting-vragen: hoofdstuk 1 = niveau 1, de rest = niveau 2.
 *  Leerpad-checks hebben het goede antwoord vaak op plek 0; de opties worden
 *  daarom geschud (met `rnd` voor testbaarheid). */
export function leerpadVragen(pad, rnd = Math.random) {
  const uit = { 1: [], 2: [] };
  const chapters = Array.isArray(pad?.chapters) ? pad.chapters : [];
  const steps = Array.isArray(pad?.steps) ? pad.steps : [];
  // Hoofdstukken geven een stap-bereik (from/to); zonder hoofdstukken is stap 0 niveau 1.
  const eersteTot = typeof chapters[0]?.to === "number" ? chapters[0].to : 0;
  steps.forEach((s, si) => {
    const niveau = si <= eersteTot ? 1 : 2;
    (s.checks || []).forEach((c, ci) => {
      if (!Array.isArray(c.options) || typeof c.answer !== "number") return;
      const idx = c.options.map((_, i) => i);
      for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
      uit[niveau].push({ id: `${pad.id}-${si}-${ci}`, vraag: c.q, opties: idx.map((i) => c.options[i]), correct: idx.indexOf(c.answer) });
    });
  });
  if (!chapters.length && !uit[1].length && uit[2].length) uit[1] = uit[2].splice(0, 1);
  return uit;
}

/** Oordeel voor één concept uit zijn antwoorden (max 2: niveau 1, dan niveau 2).
 *  antwoord = { niveau, goed, ms, weetNiet } */
export function oordeelConcept(antwoorden) {
  const n1 = antwoorden.find((a) => a.niveau === 1);
  const n2 = antwoorden.find((a) => a.niveau === 2);
  if (!n1) return UITSLAG.onbekend;
  if (!n1.goed) return UITSLAG.nogniet;
  if (!n2) return UITSLAG.wankel; // één goede vraag is te weinig om "gaat goed" te zeggen
  if (!n2.goed) return UITSLAG.wankel;
  const snel = [n1, n2].every((a) => typeof a.ms === "number" && a.ms < GOK_MS);
  return snel ? UITSLAG.wankel : UITSLAG.goed;
}

/** Eén woord voor het hele vak, uit de concept-oordelen. */
export function uitslagVak(oordelen) {
  const gemeten = oordelen.filter((o) => o && o !== UITSLAG.onbekend);
  if (!gemeten.length) return UITSLAG.onbekend;
  const goed = gemeten.filter((o) => o === UITSLAG.goed).length;
  const nog = gemeten.filter((o) => o === UITSLAG.nogniet).length;
  if (goed === gemeten.length) return UITSLAG.goed;
  if (goed === 0 && nog * 2 >= gemeten.length) return UITSLAG.nogniet;
  return UITSLAG.wankel;
}

/**
 * Loop-logica van één blok, zonder UI. Houdt bij welk concept en welk niveau
 * aan de beurt is. De UI vraagt `volgende()` en geeft het antwoord terug.
 */
export function maakBlokSessie(blok, vragenPerConcept, { startMs = Date.now(), nu = () => Date.now() } = {}) {
  const concepten = blok.concepten.filter((c) => (vragenPerConcept[c.id]?.[1] || []).length > 0);
  const antwoorden = Object.fromEntries(concepten.map((c) => [c.id, []]));
  let ci = 0;
  let niveau = 1;
  let gestopt = false;
  const gebruikt = new Set();

  const tijdOp = () => (nu() - startMs) / 1000 >= BLOK_DUUR_SEC;

  function huidigeVraag() {
    if (gestopt || ci >= concepten.length) return null;
    const c = concepten[ci];
    const pool = (vragenPerConcept[c.id]?.[niveau] || []).filter((v) => !gebruikt.has(v.id));
    if (!pool.length) return null;
    return { concept: c, niveau, vraag: pool[0], nr: ci + 1, van: concepten.length };
  }

  function volgendConcept() { ci += 1; niveau = 1; }

  return {
    concepten,
    volgende() {
      if (tijdOp()) { gestopt = true; return null; }
      let v = huidigeVraag();
      // Geen niveau-2-vraag over? Dan is het concept klaar.
      while (!v && !gestopt && ci < concepten.length) { volgendConcept(); v = huidigeVraag(); }
      return v;
    },
    antwoord({ concept, niveau: nv, vraag }, gekozen, ms) {
      gebruikt.add(vraag.id);
      const weetNiet = gekozen === WEET_NIET;
      const goed = !weetNiet && gekozen === vraag.correct;
      antwoorden[concept.id].push({ niveau: nv, goed, ms, weetNiet, vraagId: vraag.id });
      if (nv === 1 && goed && (vragenPerConcept[concept.id]?.[2] || []).length) niveau = 2;
      else volgendConcept();
      return goed;
    },
    stop() { gestopt = true; },
    klaar() { return gestopt || ci >= concepten.length || tijdOp(); },
    resultaat({ groep }) {
      const per = blok.concepten.map((c) => ({
        id: c.id,
        label: c.label,
        leerpadId: c.leerpadId,
        oordeel: oordeelConcept(antwoorden[c.id] || []),
      }));
      const alle = Object.values(antwoorden).flat();
      return {
        blok: blok.nr,
        vak: blok.vak,
        groep: String(groep || ""),
        uitslag: uitslagVak(per.map((p) => p.oordeel)),
        concepten: per,
        vragen: alle.length,
        goed: alle.filter((a) => a.goed).length,
        sec: Math.round((nu() - startMs) / 1000),
        klaarOp: new Date(nu()).toISOString(),
      };
    },
  };
}

/** Welk blok staat nog open? 1, 2, 3 of null (alles af). */
export function volgendBlok(blokken) {
  for (const nr of [1, 2, 3]) if (!blokken?.[nr]) return nr;
  return null;
}

/** Hoeveel blokken zijn vandaag (lokale datum) afgerond? */
export function blokkenVandaag(blokken, nu = new Date()) {
  const d = (x) => { const t = new Date(x); return `${t.getFullYear()}-${t.getMonth()}-${t.getDate()}`; };
  const vandaag = d(nu);
  return Object.values(blokken || {}).filter((b) => b?.klaarOp && d(b.klaarOp) === vandaag).length;
}

export { conceptVan };
