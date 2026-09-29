import { GROEP_SETS } from "./groepen/index.js";

// Concept-naar-leerpad mapping voor de Kwartiercheck.
// Elk concept heeft een ID, label (ouder-friendly), vak, en een leerpad-deeplink.
// Bij oordeel "gedeeltelijk" of "nog niet" → stuur naar dit pad.

export const CONCEPTEN = [
  // ─── REKENEN ───────────────────────────────────────────────────
  {
    id: "tafels",
    label: "Tafels & vermenigvuldigen",
    vak: "rekenen",
    leerpadId: "tafels-po",
    leerpadTitel: "Tafels & vermenigvuldigen",
  },
  {
    id: "breuken",
    label: "Breuken begrijpen",
    vak: "rekenen",
    leerpadId: "breuken-po",
    leerpadTitel: "Breuken",
  },
  {
    id: "procenten",
    label: "Procenten & kortingen",
    vak: "rekenen",
    leerpadId: "procenten-po",
    leerpadTitel: "Procenten",
  },
  {
    id: "maten",
    label: "Maten & eenheden omzetten",
    vak: "rekenen",
    leerpadId: "maten-eenheden",
    leerpadTitel: "Maten & eenheden",
  },
  {
    id: "verhoudingen",
    label: "Verhoudingen & schaal",
    vak: "rekenen",
    leerpadId: "verhoudingen-po",
    leerpadTitel: "Verhoudingen",
  },

  // ─── TAAL ──────────────────────────────────────────────────────
  {
    id: "spelling",
    label: "Spelling (woorden)",
    vak: "taal",
    leerpadId: "spelling-overige-po",
    leerpadTitel: "Spelling",
  },
  {
    id: "woordsoorten",
    label: "Woordsoorten herkennen",
    vak: "taal",
    leerpadId: "woordsoorten-po",
    leerpadTitel: "Woordsoorten herkennen",
  },
  {
    id: "werkwoordtijden",
    label: "Werkwoordtijden (o.t./v.t.)",
    vak: "taal",
    leerpadId: "werkwoord-tijden-po",
    leerpadTitel: "Werkwoordtijden",
  },
  {
    id: "woordenschat",
    label: "Woordenschat & betekenis",
    vak: "taal",
    leerpadId: "woordenschat-po",
    leerpadTitel: "Woordenschat",
  },

  // ─── BEGRIJPEND LEZEN ──────────────────────────────────────────
  {
    id: "hoofdgedachte",
    label: "Hoofdgedachte & samenvatten",
    vak: "begrijpend-lezen",
    leerpadId: "samenvatten-hoofdgedachte-po",
    leerpadTitel: "Samenvatten & hoofdgedachte",
  },
  {
    id: "tekstbegrip",
    label: "Informatie opzoeken in een tekst",
    vak: "begrijpend-lezen",
    leerpadId: "begrijpend-lezen-strategie",
    leerpadTitel: "Leer eerst de aanpak",
  },
  {
    id: "oorzaakgevolg",
    label: "Oorzaak en gevolg herkennen",
    vak: "begrijpend-lezen",
    leerpadId: "tekstverbanden-oorzaak-gevolg-po",
    leerpadTitel: "Oorzaak en gevolg",
  },
];

// Volgorde per vak voor de rapportage
export const VAK_VOLGORDE = ["rekenen", "taal", "lezen", "begrijpend-lezen"]; // "lezen" = technisch lezen (groep 3)

export const VAK_LABELS = {
  "rekenen": "Rekenen & Wiskunde",
  "taal": "Taal",
  "lezen": "Lezen",
  "begrijpend-lezen": "Begrijpend Lezen",
};

// ── Per groep (29 sep 2026) ─────────────────────────────────────────
// De vaste set hierboven past bij groep 7-8; groep 3 t/m 8 kunnen een eigen set krijgen (groepen/).
export function getConceptenVoorGroep(groep) {
  return GROEP_SETS[String(groep)]?.concepten || CONCEPTEN;
}
// Alle concepten van alle groepen (voor de mail en de wekelijkse vervolgmails: die krijgen alleen ids).
export const ALLE_CONCEPTEN = (() => {
  const gezien = new Set(); const uit = [];
  for (const c of [...CONCEPTEN, ...Object.values(GROEP_SETS).flatMap((s) => s.concepten || [])]) {
    if (!gezien.has(c.id)) { gezien.add(c.id); uit.push(c); }
  }
  return uit;
})();
export function conceptVan(id) { return ALLE_CONCEPTEN.find((c) => c.id === id) || null; }
