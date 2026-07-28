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
    label: "Spelling & werkwoorden",
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
export const VAK_VOLGORDE = ["rekenen", "taal", "begrijpend-lezen"];

export const VAK_LABELS = {
  "rekenen": "Rekenen & Wiskunde",
  "taal": "Taal",
  "begrijpend-lezen": "Begrijpend Lezen",
};
