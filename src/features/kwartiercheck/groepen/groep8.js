// Kwartiercheck — groep 8 (medio groep 8, rond de Doorstroomtoets).
// Ontwerp: docs/kwartiercheck/CONCEPTEN-PER-GROEP.md § 7.
// Groep 8 hergebruikt de bestaande concepten + vragen uit conceptMapping.js / questions.js.
// De concept-objecten staan hier letterlijk gekopieerd (NIET importeren uit ../conceptMapping.js:
// die importeert groepen/index.js → import-cyclus).
// Nieuw: g8-tabellen-grafieken voor het Doorstroomtoets-domein "verbanden" (twijfel 8 in het doc).
// `vragen` bevat alleen de vragen voor het nieuwe concept; de hergebruikte ids hebben al
// genoeg vragen in questions.js (elk 2 × niveau 1 + 2 × niveau 2 + 1 × niveau 3).

const concepten = [
  // ─── REKENEN ───────────────────────────────────────────────────
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
    id: "verhoudingen",
    label: "Verhoudingen & schaal",
    vak: "rekenen",
    leerpadId: "verhoudingen-po",
    leerpadTitel: "Verhoudingen",
  },
  {
    id: "maten",
    label: "Maten & eenheden omzetten",
    vak: "rekenen",
    leerpadId: "maten-eenheden",
    leerpadTitel: "Maten & eenheden",
  },
  {
    id: "g8-tabellen-grafieken",
    label: "Tabellen en grafieken lezen",
    vak: "rekenen",
    leerpadId: "tabellen-grafieken",
    leerpadTitel: "Tabellen en grafieken",
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
];

const vragen = [
  // ─── TABELLEN & GRAFIEKEN ──────────────────────────────────────
  // Niveau 1: een waarde aflezen of een paar waarden combineren.
  {
    id: "g8-tabellen-grafieken-1a", concept: "g8-tabellen-grafieken", niveau: 1,
    vraag: "Tabel — verkochte ijsjes bij de strandtent: ma 45 · di 38 · wo 52 · do 41 · vr 60. Op welke dag werden de minste ijsjes verkocht?",
    opties: ["donderdag", "dinsdag", "woensdag", "maandag"],
    correct: 1,
  },
  {
    id: "g8-tabellen-grafieken-1b", concept: "g8-tabellen-grafieken", niveau: 1,
    vraag: "Staafdiagram — zo komen de kinderen van groep 8 naar school: lopen 8 · fiets 14 · auto 5 · bus 3. Hoeveel kinderen komen lopend of met de fiets?",
    opties: ["22", "14", "19", "30"],
    correct: 0,
  },
  {
    id: "g8-tabellen-grafieken-1c", concept: "g8-tabellen-grafieken", niveau: 1,
    vraag: "Tabel — temperatuur om 12 uur: ma 14 °C · di 17 °C · wo 11 °C · do 15 °C · vr 19 °C. Op hoeveel dagen was het warmer dan 15 °C?",
    opties: ["1", "3", "2", "4"],
    correct: 2,
  },
  // Niveau 2: een verschil, trend of gemiddelde; of redeneren met de tabel.
  {
    id: "g8-tabellen-grafieken-2a", concept: "g8-tabellen-grafieken", niveau: 2,
    vraag: "Dienstregeling — de bus van Station Oost naar het Centrum vertrekt om 08.12 · 08.42 · 09.12 · 09.42. De rit duurt 18 minuten. Je moet uiterlijk om 09.15 in het Centrum zijn. Wat is de laatste bus waarmee je op tijd bent?",
    opties: ["08.12", "08.42", "09.12", "09.42"],
    correct: 1,
  },
  {
    id: "g8-tabellen-grafieken-2b", concept: "g8-tabellen-grafieken", niveau: 2,
    vraag: "Tabel — zoveel bladzijden las Fleur: ma 24 · di 30 · wo 18 · do 36 · vr 42. Hoeveel bladzijden las Fleur gemiddeld per dag?",
    opties: ["150", "37,5", "24", "30"],
    correct: 3,
  },
  {
    id: "g8-tabellen-grafieken-2c", concept: "g8-tabellen-grafieken", niveau: 2,
    vraag: "Lijndiagram — de lengte van een zonnebloem: week 1: 10 cm · week 2: 25 cm · week 3: 45 cm · week 4: 70 cm · week 5: 80 cm. Tussen welke twee weken groeide de zonnebloem het meest?",
    opties: [
      "tussen week 1 en 2",
      "tussen week 2 en 3",
      "tussen week 3 en 4",
      "tussen week 4 en 5",
    ],
    correct: 2,
  },
];

export default { concepten, vragen };
