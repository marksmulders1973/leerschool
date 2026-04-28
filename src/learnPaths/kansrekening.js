// Leerpad: Kansrekening — Wiskunde klas 2-3
// 14 stappen in 5 hoofdstukken (A t/m E).
// Examenonderdeel havo wiskunde A. Basis voor verdere statistiek + combinatoriek.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  goodSoft: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  blue: "#5b86b8",
  paars: "#a060ff",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = [
  "🎲", "📊", "🔢",                    // A. Wat is een kans?
  "🎰", "🪙", "🃏",                    // B. Eenvoudige kansen
  "🌳", "✖️", "🔁",                     // C. Kansboom
  "➕", "🚫",                            // D. Optellen + complement
  "🎯", "📝", "🏆",                    // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat is een kans?", emoji: "🎲", from: 0, to: 2 },
  { letter: "B", title: "Eenvoudige kansen", emoji: "🪙", from: 3, to: 5 },
  { letter: "C", title: "Kansboom + vermenigvuldigen", emoji: "🌳", from: 6, to: 8 },
  { letter: "D", title: "Optellen + complement", emoji: "➕", from: 9, to: 10 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 11, to: 13 },
];

const steps = [
  // ─── A. Wat is een kans? ──────────────────────────────
  {
    title: "Kans = gunstig / totaal",
    explanation: "Een **kans** is een getal dat zegt **hoe waarschijnlijk** iets gebeurt. Wiskundig gedefinieerd als:\n\n**Kans = aantal gunstige uitkomsten / aantal mogelijke uitkomsten**\n\n**Voorbeelden**:\n\n**Dobbelsteen**: kans op een 6.\n• Gunstig: 1 (alleen de 6).\n• Mogelijk: 6 (alle vlakjes 1-6).\n• Kans = 1/6.\n\n**Munt**: kans op kop.\n• Gunstig: 1 (kop).\n• Mogelijk: 2 (kop, munt).\n• Kans = 1/2.\n\n**Kaartspel**: kans op een hartenkaart uit een gewoon kaartspel (52 kaarten, 13 harten).\n• Gunstig: 13.\n• Mogelijk: 52.\n• Kans = 13/52 = 1/4.\n\n**Voorwaarde**: alle uitkomsten moeten **even waarschijnlijk** zijn (eerlijke dobbelsteen, faire munt, geschud kaartspel).\n\n**Belangrijk om te onthouden**:\n• Kans heeft altijd een waarde tussen **0 en 1** (of 0% en 100%).\n• Kans = 0 → onmogelijk.\n• Kans = 1 → zeker.\n• Kans tussen 0 en 1 → ergens tussenin.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">P = gunstig / totaal</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "78" fill="${COLORS.text}" font-size="12" font-family="Arial">🎲 P(6) = 1/6</text>
<text x="155" y "78" fill="${COLORS.muted}" font-size="11" font-family="Arial">(1 van 6)</text>
<text x="35" y "98" fill="${COLORS.text}" font-size="12" font-family="Arial">🪙 P(kop) = 1/2</text>
<text x="155" y "98" fill="${COLORS.muted}" font-size="11" font-family="Arial">(1 van 2)</text>
<text x="35" y "118" fill="${COLORS.text}" font-size="12" font-family="Arial">🃏 P(harten) = 13/52 = 1/4</text>
<line x1="30" y1="132" x2="270" y2="132" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "152" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">0 ≤ P ≤ 1</text>
<text x="35" y "170" fill="${COLORS.muted}" font-size="10" font-family="Arial">0 = onmogelijk · 1 = zeker</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de kans op een 4 bij een eerlijke dobbelsteen?*",
        options: ["1/6", "4/6", "1/4", "1/2"],
        answer: 0,
        wrongHints: [
          null,
          "4/6 zou betekenen 4 gunstige uitkomsten. Maar een 4 is maar 1 gunstige uitkomst.",
          "1/4 = 25% — geen logische kans bij een dobbelsteen met 6 vlakken.",
          "1/2 zou betekenen 50% — maar er zijn 6 mogelijke uitkomsten, niet 2.",
        ],
      },
      {
        q: "*Een zak met 10 knikkers: 3 rode, 7 blauwe. Wat is de kans op een rode?*",
        options: ["3/10", "7/10", "1/3", "3/7"],
        answer: 0,
        wrongHints: [
          null,
          "7/10 is de kans op blauw — niet rood.",
          "1/3 = 33% — gevormd door 3 rode te delen door alleen 7 + 3? Nee — totaal is 10.",
          "3/7 zou ratio rood:blauw zijn. Kans = gunstig/totaal = 3/10.",
        ],
      },
    ],
  },
  {
    title: "Notatie P(A) — schrijven van kansen",
    explanation: "**Notatie**: kansen schrijf je als **P(uitkomst)** of **P(gebeurtenis)**. P komt van het Engelse \"Probability\".\n\n**Voorbeelden**:\n• P(6) = 1/6 (kans op 6 bij dobbelsteen)\n• P(kop) = 1/2 (kans op kop bij munt)\n• P(rood) = 3/10 (kans op rode knikker)\n• P(harten en aas) = 1/52 (kans op de hartenaas uit kaartspel)\n\n**Wat is een 'gebeurtenis'?**\nEen gebeurtenis is een **deelverzameling van mogelijke uitkomsten**. Je bent vrij hoe je 'm definieert.\n\n**Voorbeelden bij een dobbelsteen**:\n• A = \"je gooit een 6\" → P(A) = 1/6\n• B = \"je gooit een even getal\" (= 2, 4, of 6) → P(B) = 3/6 = 1/2\n• C = \"je gooit een getal kleiner dan 4\" (= 1, 2, of 3) → P(C) = 3/6 = 1/2\n\n**Drie schrijfwijzen voor dezelfde kans**:\n• Breuk: 1/4\n• Decimaal: 0.25\n• Percentage: 25%\n\nAlle drie betekenen hetzelfde. Op de wiskunde-toets gebruik je vaak **breuk** (exact) of **decimaal** (rekenmachine-vriendelijk).\n\n**Vereenvoudigen**: 13/52 → 1/4. Schrijf altijd in vereenvoudigde vorm op een examen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">notatie P(A)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.text}" font-size="12" font-family="monospace">P(6) = 1/6</text>
<text x="35" y "94" fill="${COLORS.text}" font-size="12" font-family="monospace">P(even) = 3/6 = 1/2</text>
<text x="35" y "112" fill="${COLORS.text}" font-size="12" font-family="monospace">P(kop) = 1/2 = 0.5 = 50%</text>
<line x1="30" y1="125" x2="270" y2="125" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "146" fill="${COLORS.muted}" font-size="11" font-family="Arial">drie vormen voor zelfde kans:</text>
<text x="35" y "164" fill="${COLORS.text}" font-size="11" font-family="Arial">breuk · decimaal · percentage</text>
<text x="35" y "180" fill="${COLORS.alt}" font-size="10" font-family="Arial" font-style="italic">examen: vereenvoudig altijd (13/52 → 1/4)</text>
</svg>`,
    checks: [
      {
        q: "*Bij een dobbelsteen: P(even getal) = ?*",
        options: ["1/2", "1/3", "2/3", "1/6"],
        answer: 0,
        wrongHints: [
          null,
          "1/3 = 2/6 — maar er zijn 3 even getallen (2, 4, 6), niet 2.",
          "2/3 = 4/6 — maar er zijn 3 even getallen, niet 4.",
          "1/6 zou kans op één specifiek getal zijn, niet alle even.",
        ],
      },
    ],
  },
  {
    title: "Schaal van kansen — 0% tot 100%",
    explanation: "Kansen liggen altijd tussen **0 en 1** (= 0% en 100%).\n\n**Speciale waardes**:\n\n**P = 0** → **onmogelijk**\n• \"Kans op een 7 bij een gewone dobbelsteen\" = 0 (er is geen 7).\n• \"Kans dat de zon morgen niet opkomt\" = (praktisch) 0.\n\n**P = 1** → **zeker**\n• \"Kans op een getal tussen 1 en 6 bij dobbelsteen\" = 1.\n• \"Kans dat 1 + 1 = 2\" = 1.\n\n**P = 1/2** → **even waarschijnlijk wel of niet** (= 50/50).\n• \"Kans op kop bij munt\" = 1/2.\n• \"Kans op rood bij roulette (zonder 0)\" = 1/2.\n\n**Klein** (P < 0.1): zelden, maar mogelijk.\n• \"Kans op 4× kop bij 4× munt-werpen\" = 1/16 ≈ 6%.\n\n**Groot** (P > 0.9): bijna zeker.\n• \"Kans dat een gegooide dobbelsteen géén 6 wordt\" = 5/6 ≈ 83%.\n\n**Tip om in te schatten**: vraag jezelf af: *uit hoeveel pogingen verwacht ik 1 succes?*\n• Als je 1 keer per 6 pogingen succes verwacht → P = 1/6.\n• Als je 1 keer per 100 pogingen succes verwacht → P = 1/100 = 1%.\n\n**Rekenen met percentages**:\n• 1/4 → 100/4 = 25%\n• 1/3 → 100/3 ≈ 33.3%\n• 1/8 → 100/8 = 12.5%",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">schaal van kansen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<line x1="40" y1="100" x2="260" y2="100" stroke="${COLORS.muted}" stroke-width="2"/>
<circle cx="40" cy="100" r="5" fill="${COLORS.alt}"/>
<text x="40" y "120" fill="${COLORS.alt}" font-size="11" font-family="Arial" text-anchor="middle">0 (nooit)</text>
<circle cx="150" cy="100" r="5" fill="${COLORS.warm}"/>
<text x="150" y "120" fill="${COLORS.warm}" font-size="11" font-family="Arial" text-anchor="middle">1/2 (50/50)</text>
<circle cx="260" cy="100" r="5" fill="${COLORS.good}"/>
<text x="260" y "120" fill="${COLORS.good}" font-size="11" font-family="Arial" text-anchor="middle">1 (zeker)</text>
<text x="150" y "85" fill="${COLORS.muted}" font-size="10" font-family="Arial" text-anchor="middle">→ groter = waarschijnlijker →</text>
<text x="150" y "160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">1/4 = 25% · 1/3 ≈ 33% · 1/8 = 12.5%</text>
</svg>`,
    checks: [
      {
        q: "*Een evenement heeft kans 1. Wat betekent dat?*",
        options: [
          "Het is zeker — gebeurt altijd",
          "Het gebeurt nooit",
          "50% kans",
          "Onbepaald",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kans 1 betekent zeker. Kans 0 zou 'nooit' zijn.",
          "50% = 1/2, niet 1.",
          "Kans 1 is een duidelijke waarde: zeker.",
        ],
      },
      {
        q: "*Wat is 1/5 als percentage?*",
        options: ["20%", "5%", "15%", "25%"],
        answer: 0,
        wrongHints: [
          null,
          "5% = 1/20, niet 1/5.",
          "15% = 3/20, niet 1/5.",
          "25% = 1/4, niet 1/5.",
        ],
      },
    ],
  },

  // ─── B. Eenvoudige kansen ─────────────────────────────
  {
    title: "Dobbelsteen — alle kansen",
    explanation: "Een eerlijke **dobbelsteen** heeft 6 vlakken: 1, 2, 3, 4, 5, 6. Elke uitkomst is **even waarschijnlijk**: P = 1/6.\n\n**Verschillende vragen, verschillende kansen**:\n\n**Specifiek getal**: P(3) = 1/6\n\n**Reeks getallen**:\n• P(even) = P(2 of 4 of 6) = 3/6 = 1/2\n• P(oneven) = P(1 of 3 of 5) = 3/6 = 1/2\n• P(groter dan 4) = P(5 of 6) = 2/6 = 1/3\n• P(kleiner dan 3) = P(1 of 2) = 2/6 = 1/3\n• P(deelbaar door 3) = P(3 of 6) = 2/6 = 1/3\n• P(priem) = P(2 of 3 of 5) = 3/6 = 1/2\n\n**Onmogelijke uitkomst**:\n• P(7) = 0 (een dobbelsteen heeft geen 7)\n• P(nul) = 0\n\n**Zekere uitkomst**:\n• P(getal tussen 1 en 6) = 1\n• P(positief getal) = 1\n\n**Truc voor reeksen**: tel hoeveel uitkomsten **gunstig** zijn, deel door 6 (totaal mogelijk). Vereenvoudig de breuk.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">dobbelsteen — kansen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.text}" font-size="12" font-family="monospace">P(3)         = 1/6</text>
<text x="35" y "94" fill="${COLORS.text}" font-size="12" font-family="monospace">P(even)      = 3/6 = 1/2</text>
<text x="35" y "112" fill="${COLORS.text}" font-size="12" font-family="monospace">P(>4)        = 2/6 = 1/3</text>
<text x="35" y "130" fill="${COLORS.text}" font-size="12" font-family="monospace">P(deelb. 3)  = 2/6 = 1/3</text>
<line x1="30" y1="142" x2="270" y2="142" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "162" fill="${COLORS.alt}" font-size="11" font-family="Arial">P(7) = 0    P(getal 1-6) = 1</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de kans op een getal kleiner dan 5 bij een dobbelsteen?*",
        options: ["4/6 = 2/3", "5/6", "1/5", "5/12"],
        answer: 0,
        wrongHints: [
          null,
          "5/6 zou kleiner dan 6 zijn (= 1, 2, 3, 4, 5). Maar de vraag is kleiner dan 5 (= 1, 2, 3, 4).",
          "1/5 — 1 op 5? Maar er zijn 6 vlakken op de dobbelsteen, niet 5.",
          "5/12 is geen logische dobbelsteen-kans (12 is geen vlak-aantal).",
        ],
      },
    ],
  },
  {
    title: "Munt-werpen — alleen 2 uitkomsten",
    explanation: "Een eerlijke **munt** heeft 2 uitkomsten: **kop** of **munt**. Elke kant heeft kans 1/2.\n\n**Eén worp**:\n• P(kop) = 1/2\n• P(munt) = 1/2\n\n**Twee worpen achter elkaar** — dan zijn er **4 mogelijke uitkomsten**:\n• KK (kop, kop)\n• KM (kop, munt)\n• MK (munt, kop)\n• MM (munt, munt)\n\nElk paar heeft kans 1/4.\n\n**Vragen over twee worpen**:\n• P(2× kop) = 1/4 (alleen KK)\n• P(2× munt) = 1/4 (alleen MM)\n• P(precies 1× kop) = 2/4 = 1/2 (KM of MK)\n• P(minstens 1× kop) = 3/4 (KK, KM, MK — alles behalve MM)\n\n**Drie worpen** — 8 mogelijke uitkomsten:\nKKK, KKM, KMK, KMM, MKK, MKM, MMK, MMM\n\n• P(3× kop) = 1/8\n• P(precies 2× kop) = 3/8 (KKM, KMK, MKK)\n• P(minstens 1× kop) = 7/8 (alles behalve MMM)\n\n**Algemene regel** voor n onafhankelijke munt-worpen:\n• Aantal mogelijke uitkomsten = 2^n.\n• P(specifieke combinatie zoals KKKK...) = 1 / 2^n.\n\n**Voorbeeld**: P(4× kop achter elkaar) = 1/2^4 = 1/16 ≈ 6.25%.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">munt — 2 uitkomsten</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.text}" font-size="12" font-family="monospace">1 worp:  P(K) = 1/2</text>
<text x="35" y "94" fill="${COLORS.text}" font-size="12" font-family="monospace">2 worpen: 4 uitkomsten</text>
<text x="35" y "112" fill="${COLORS.muted}" font-size="11" font-family="Arial">  KK, KM, MK, MM (elk 1/4)</text>
<text x="35" y "130" fill="${COLORS.text}" font-size="11" font-family="monospace">P(2× K) = 1/4</text>
<text x="35" y "148" fill="${COLORS.text}" font-size="11" font-family="monospace">P(min. 1× K) = 3/4</text>
<text x="35" y "172" fill="${COLORS.alt}" font-size="11" font-family="Arial">n worpen → 2^n uitkomsten</text>
</svg>`,
    checks: [
      {
        q: "*Bij 3 muntworpen — wat is de kans op precies 2× kop?*",
        options: ["3/8", "1/8", "1/3", "2/8"],
        answer: 0,
        wrongHints: [
          null,
          "1/8 zou betekenen één specifieke combinatie. Maar precies 2× kop kan op 3 manieren: KKM, KMK, MKK.",
          "1/3 is geen logische kans bij munten (deler 8).",
          "2/8 = 1/4. Maar er zijn 3 manieren om precies 2× kop te krijgen, niet 2.",
        ],
      },
    ],
  },
  {
    title: "Knikkers, kaarten, mensen — kans uit grotere groepen",
    explanation: "Bij **grotere groepen** is de aanpak hetzelfde: gunstig/totaal.\n\n**Knikkers**:\nEen zak met 5 rode, 8 blauwe en 7 gele knikkers (totaal 20).\n• P(rood) = 5/20 = 1/4\n• P(blauw) = 8/20 = 2/5\n• P(geel) = 7/20\n• P(rood of blauw) = (5+8)/20 = 13/20 (alle rode én blauwe gunstig)\n• P(niet geel) = (5+8)/20 = 13/20 (alles behalve geel)\n\n**Kaartspel** (52 kaarten, 4 kleuren à 13):\n• P(harten) = 13/52 = 1/4\n• P(aas) = 4/52 = 1/13\n• P(rode kaart) = 26/52 = 1/2\n• P(boer of vrouw of heer) = 12/52 = 3/13\n\n**Klas met 30 leerlingen, 14 jongens, 16 meisjes**:\n• P(jongen) = 14/30 = 7/15\n• P(meisje) = 16/30 = 8/15\n\n**Tip — herken het patroon**:\n1. Tel alle uitkomsten (= totaal).\n2. Tel de gunstige uitkomsten.\n3. Deel.\n4. Vereenvoudig.\n\n**Veelgemaakte fout**: vergeten dat **gunstig kan combinaties** bevatten. \"Kans op rood OF blauw\" telt rode + blauwe knikkers samen op.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">grotere groepen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.muted}" font-size="11" font-family="Arial">zak: 5 rood + 8 blauw + 7 geel = 20</text>
<text x="35" y "92" fill="${COLORS.text}" font-size="11" font-family="monospace">P(rood) = 5/20 = 1/4</text>
<text x="35" y "108" fill="${COLORS.text}" font-size="11" font-family="monospace">P(rood of blauw) = 13/20</text>
<line x1="30" y1="120" x2="270" y2="120" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "140" fill="${COLORS.muted}" font-size="11" font-family="Arial">52 kaarten, 4 kleuren à 13:</text>
<text x="35" y "156" fill="${COLORS.text}" font-size="11" font-family="monospace">P(harten) = 13/52 = 1/4</text>
<text x="35" y "172" fill="${COLORS.text}" font-size="11" font-family="monospace">P(aas) = 4/52 = 1/13</text>
</svg>`,
    checks: [
      {
        q: "*Klas: 12 jongens, 18 meisjes. Eén leerling wordt willekeurig gekozen. P(jongen)?*",
        options: ["12/30 = 2/5", "12/18 = 2/3", "1/12", "18/30"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de ratio jongens:meisjes, niet kans. Kans = gunstig/totaal.",
          "Onlogisch — 1/12 zou betekenen 1 op 12 kans, maar de klas heeft 30 leerlingen.",
          "18/30 = kans op meisje, niet jongen.",
        ],
      },
    ],
  },

  // ─── C. Kansboom + vermenigvuldigen ───────────────────
  {
    title: "Kansboom — opeenvolgende gebeurtenissen",
    explanation: "Een **kansboom** is een diagram waarmee je opeenvolgende gebeurtenissen visueel uitwerkt. Vooral handig bij twee of meer worpen.\n\n**Voorbeeld**: 2× munt-worp.\n\nEerste worp splitst in twee takken (K of M). Elke tak splitst weer in twee. Dat geeft 4 paden — KK, KM, MK, MM.\n\nElke tak krijgt z'n eigen **kans** (hier: 1/2). Op elke pad **vermenigvuldig** je de kansen om de pad-kans te krijgen:\n• KK: 1/2 · 1/2 = 1/4\n• KM: 1/2 · 1/2 = 1/4\n• MK: 1/2 · 1/2 = 1/4\n• MM: 1/2 · 1/2 = 1/4\n\nSomma van alle paden = 1 (zeker dat één pad gebeurt).\n\n**Voorbeeld 2**: Eerst dobbelsteen, dan munt.\n\nEerste worp: 6 takken (1 t/m 6), elk kans 1/6. Daarna elke tak splitst in 2 (K of M), elk 1/2.\n\nP(3 én kop) = 1/6 · 1/2 = 1/12.\n\n**Algemene regel**: bij **opeenvolgende, onafhankelijke** gebeurtenissen = **kansen vermenigvuldigen** langs het pad.\n\n**Wanneer is een kansboom handig?**\n• 2 of 3 stappen achter elkaar.\n• Verschillende soorten objecten/uitkomsten.\n• Wanneer je de kans op een specifieke combinatie wilt.\n\n**Niet handig** bij grote aantallen (zoals 100 worpen) — daar gebruik je formules.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">kansboom — 2× munt</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<circle cx="80" cy="100" r="6" fill="${COLORS.warm}"/>
<text x="80" y "120" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">start</text>
<line x1="86" y1="100" x2="140" y2="75" stroke="${COLORS.muted}"/>
<line x1="86" y1="100" x2="140" y2="125" stroke="${COLORS.muted}"/>
<text x="105" y "85" fill="${COLORS.good}" font-size="9" font-family="Arial">K (½)</text>
<text x="105" y "120" fill="${COLORS.alt}" font-size="9" font-family="Arial">M (½)</text>
<text x="148" y "75" fill="${COLORS.text}" font-size="11" font-family="monospace">K → KK (1/4)</text>
<text x="148" y "95" fill="${COLORS.text}" font-size="11" font-family="monospace">M → KM (1/4)</text>
<text x="148" y "120" fill="${COLORS.text}" font-size="11" font-family="monospace">K → MK (1/4)</text>
<text x="148" y "140" fill="${COLORS.text}" font-size="11" font-family="monospace">M → MM (1/4)</text>
<text x="150" y "175" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vermenigvuldig kansen langs het pad</text>
</svg>`,
    checks: [
      {
        q: "*In een kansboom: hoe bereken je de kans op een specifiek pad?*",
        options: [
          "Vermenigvuldig de kansen langs dat pad",
          "Tel de kansen op",
          "Trek de kansen af",
          "Pak de grootste kans",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Optellen geldt voor verschillende paden (of-kans). Bij één pad = vermenigvuldigen.",
          "Aftrekken hoort niet in standaard kansrekening met bomen.",
          "De grootste kans zegt niets over een pad. Pad-kans = product van takken.",
        ],
      },
    ],
  },
  {
    title: "Vermenigvuldigen bij onafhankelijke gebeurtenissen",
    explanation: "**Twee gebeurtenissen zijn onafhankelijk** als de uitkomst van de ene **geen invloed** heeft op de andere.\n\n**Voorbeelden van onafhankelijke gebeurtenissen**:\n• 2 dobbelstenen rollen — uitkomst eerste beïnvloedt tweede niet.\n• Munt 5× werpen — elke worp staat los van de vorige.\n• Een knikker pakken, **terugleggen**, weer pakken — eerste pakje beïnvloedt tweede niet.\n\n**Bij onafhankelijke gebeurtenissen**:\n**P(A en B) = P(A) · P(B)**\n\n**Voorbeelden**:\n\n**P(eerst kop, dan munt)** = P(K) · P(M) = 1/2 · 1/2 = 1/4.\n\n**P(eerst 6, dan 5)** bij twee dobbelstenen = 1/6 · 1/6 = 1/36.\n\n**P(3× kop achter elkaar)** = 1/2 · 1/2 · 1/2 = 1/8.\n\n**P(eerst rood, terugleggen, dan blauw)** uit zak met 3 rood + 7 blauw:\n= 3/10 · 7/10 = 21/100.\n\n**Voorbeelden van afhankelijke gebeurtenissen** (komt later):\n• Twee kaarten **zonder** terugleggen — bij eerste pakken verandert het totaal aantal.\n• Twee knikkers achter elkaar **zonder** terugleggen.\n\nVoor afhankelijke gebeurtenissen: pas de tweede kans aan op basis van wat er nog over is.\n\n**Voorbeeld**: P(eerst rood, dan blauw, **zonder** terugleggen) uit 3 rood + 7 blauw:\n= 3/10 · 7/9 = 21/90.\n(De tweede pak heeft nog 9 knikkers totaal, want we hebben er één weggehaald.)",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">P(A en B) = P(A) · P(B)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.muted}" font-size="11" font-family="Arial">(bij onafhankelijke gebeurtenissen)</text>
<text x="35" y "96" fill="${COLORS.text}" font-size="11" font-family="monospace">2× kop: 1/2 · 1/2 = 1/4</text>
<text x="35" y "114" fill="${COLORS.text}" font-size="11" font-family="monospace">2× 6:   1/6 · 1/6 = 1/36</text>
<text x="35" y "132" fill="${COLORS.text}" font-size="11" font-family="monospace">3× kop: (1/2)³ = 1/8</text>
<line x1="30" y1="142" x2="270" y2="142" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "162" fill="${COLORS.alt}" font-size="11" font-family="Arial">zonder terugleggen → afhankelijk</text>
<text x="35" y "178" fill="${COLORS.muted}" font-size="10" font-family="Arial">→ 2e kans aanpassen op rest</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de kans op 2× kop bij 2 munten?*",
        options: ["1/4", "1/2", "1/8", "2/2"],
        answer: 0,
        wrongHints: [
          null,
          "1/2 is kans op kop bij ÉÉN worp. Bij twee: vermenigvuldig.",
          "1/8 zou bij 3 worpen zijn (1/2)³.",
          "2/2 = 1 = zekerheid. Maar 2× kop is niet zeker.",
        ],
      },
      {
        q: "*Twee dobbelstenen — kans op (3, 5)?*",
        options: ["1/36", "1/12", "2/6", "1/6"],
        answer: 0,
        wrongHints: [
          null,
          "1/12 = 1/(6+6). Maar voor product moet je 6·6 = 36 hebben.",
          "2/6 = optellen — maar voor en-kans vermenigvuldig je: 1/6 · 1/6.",
          "1/6 zou kans op één getal bij één dobbelsteen zijn.",
        ],
      },
    ],
  },
  {
    title: "Combinaties tellen — meerdere paden",
    explanation: "Soms is een gebeurtenis op **meerdere manieren** te bereiken. Dan tel je de kansen van alle paden op.\n\n**Voorbeeld**: Wat is P(precies 2× kop bij 3 muntworpen)?\n\nEr zijn drie paden die geven 'precies 2× kop':\n• KKM (kop, kop, munt) — kans (1/2)³ = 1/8\n• KMK — kans 1/8\n• MKK — kans 1/8\n\nP(precies 2× kop) = 1/8 + 1/8 + 1/8 = **3/8**.\n\n**Algemeen patroon**:\n1. Bepaal alle gunstige paden via een kansboom of opsomming.\n2. Bereken de kans per pad (vermenigvuldigen langs pad).\n3. Tel de pad-kansen op.\n\n**Voorbeeld 2**: Een dobbelsteen + een munt.\n\n**P(even getal én kop)** = P(2,K) + P(4,K) + P(6,K) = 3 paden, elk kans 1/6 · 1/2 = 1/12.\n• Totaal = 3 · 1/12 = 3/12 = 1/4.\n\n**Of korter**: P(even) · P(kop) = 1/2 · 1/2 = 1/4. ✓\n\n**Voorbeeld 3**: Bij 4 worpen — kans op precies 2× kop.\n• Aantal manieren om 2 koppen te kiezen uit 4 worpen: 6 (KKMM, KMKM, KMMK, MKKM, MKMK, MMKK).\n• Elke pad-kans: (1/2)⁴ = 1/16.\n• Totaal: 6 · 1/16 = 6/16 = 3/8.\n\nDit is voorbereiding voor **binomiale verdeling** (komt op havo 4-5).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">meerdere paden → optellen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.muted}" font-size="11" font-family="Arial">3 muntworpen — 'precies 2× K':</text>
<text x="35" y "92" fill="${COLORS.text}" font-size="11" font-family="monospace">KKM: 1/8</text>
<text x="35" y "108" fill="${COLORS.text}" font-size="11" font-family="monospace">KMK: 1/8</text>
<text x="35" y "124" fill="${COLORS.text}" font-size="11" font-family="monospace">MKK: 1/8</text>
<line x1="30" y1="135" x2="270" y2="135" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "156" fill="${COLORS.good}" font-size="13" font-family="monospace" font-weight="bold">→ 3 · 1/8 = 3/8</text>
<text x="35" y "176" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">tel pad-kansen op</text>
</svg>`,
    checks: [
      {
        q: "*Bij 4 muntworpen — wat is de kans op precies 1× kop?*",
        options: ["4/16 = 1/4", "1/16", "1/4 (zonder berekening)", "4/4 = 1"],
        answer: 0,
        wrongHints: [
          null,
          "1/16 = één specifieke combinatie. Maar 'precies 1× kop' kan op 4 manieren (KMMM, MKMM, MMKM, MMMK).",
          "Toevallig wel 1/4, maar via berekening: 4 paden · (1/2)⁴ = 4/16.",
          "4/4 = 1 = zeker. Maar precies 1× kop is niet zeker.",
        ],
      },
    ],
  },

  // ─── D. Optellen + complement ─────────────────────────
  {
    title: "Of-kans bij uitsluitende gebeurtenissen",
    explanation: "Twee gebeurtenissen zijn **uitsluitend** als ze **niet tegelijk** kunnen gebeuren.\n\n**Bij een dobbelsteen**:\n• Een 3 én een 5 in één worp = onmogelijk (niet tegelijk).\n• Een even getal én een 4 = wel mogelijk (4 is even). Dus niet uitsluitend.\n\n**Bij twee uitsluitende gebeurtenissen** geldt:\n**P(A of B) = P(A) + P(B)**\n\n**Voorbeelden**:\n\n**Dobbelsteen — P(3 of 5)**:\n• Allebei zijn één uitkomst (1/6 elk) — uitsluitend (niet tegelijk).\n• P(3 of 5) = 1/6 + 1/6 = 2/6 = 1/3.\n\n**Knikker — P(rood of blauw)** uit 3 rood + 7 blauw + 5 geel (totaal 15):\n• P(rood) = 3/15, P(blauw) = 7/15.\n• P(rood of blauw) = 3/15 + 7/15 = 10/15 = 2/3.\n\n**Bij niet-uitsluitende gebeurtenissen** (overlap mogelijk):\n**P(A of B) = P(A) + P(B) − P(A en B)**\n\n• P(A en B) wordt afgetrokken zodat we 'm niet dubbel tellen.\n\n**Voorbeeld**: Dobbelsteen — P(even of >3)\n• Even: 2, 4, 6 → 3 uitkomsten\n• > 3: 4, 5, 6 → 3 uitkomsten\n• Beide: 4 en 6 → 2 uitkomsten (overlap)\n• P(even) + P(>3) − P(beide) = 3/6 + 3/6 − 2/6 = 4/6 = 2/3.\n\n**Examen-tip**: bij 'of'-vragen — check eerst of er overlap is. Geen overlap → simpel optellen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">P(A of B) = P(A) + P(B)</text>
<text x="150" y "60" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">(bij uitsluitende gebeurtenissen)</text>
<line x1="30" y1="68" x2="270" y2="68" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "90" fill="${COLORS.text}" font-size="11" font-family="monospace">P(3 of 5) = 1/6 + 1/6 = 2/6</text>
<text x="35" y "108" fill="${COLORS.text}" font-size="11" font-family="monospace">P(rood of blauw) = 3/15+7/15</text>
<line x1="30" y1="120" x2="270" y2="120" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "140" fill="${COLORS.alt}" font-size="11" font-family="Arial">bij overlap (niet uitsluitend):</text>
<text x="35" y "158" fill="${COLORS.text}" font-size="11" font-family="monospace">P(A of B) = P(A)+P(B)−P(A en B)</text>
<text x="35" y "178" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">aftrekken om dubbel-telling te voorkomen</text>
</svg>`,
    checks: [
      {
        q: "*Bij dobbelsteen: P(2 of 4 of 6)?*",
        options: ["3/6 = 1/2", "1/6", "2/6", "3/3"],
        answer: 0,
        wrongHints: [
          null,
          "1/6 zou kans op één getal zijn. Hier zijn er drie uitsluitende uitkomsten.",
          "2/6 = twee uitkomsten. Hier zijn er drie (2, 4, 6).",
          "3/3 = 1 = zeker. Maar 'precies één van 2/4/6' is niet zeker.",
        ],
      },
    ],
  },
  {
    title: "Complement — P(niet A) = 1 − P(A)",
    explanation: "Het **complement** van een gebeurtenis A is *niet A* — alle uitkomsten **buiten** A.\n\n**Formule**: **P(niet A) = 1 − P(A)**\n\n**Voorbeelden**:\n\n**Dobbelsteen**:\n• P(6) = 1/6.\n• P(niet 6) = 1 − 1/6 = 5/6.\n\n**Munt — minstens 1× kop bij 3 worpen**:\n• Direct berekenen lastig (= KKK + KKM + KMK + KMM + MKK + MKM + MMK = 7/8).\n• Slimmer: P(minstens 1× K) = 1 − P(geen kop) = 1 − P(MMM) = 1 − 1/8 = **7/8**.\n\n**Beslis-truc**: als de vraag 'minstens 1' bevat, denk aan **complement**. Vaak veel sneller.\n\n**Knikker — niet rood**:\nUit 3 rood + 7 blauw (totaal 10): P(rood) = 3/10. P(niet rood) = 1 − 3/10 = 7/10. ✓\n\n**Algemene regel**: P(A) + P(niet A) = 1.\n\nMet andere woorden: of A gebeurt, of niet — er is geen derde optie.\n\n**Voorbeeld 4**: examen-vraag — *\"Bij vier muntworpen, wat is de kans op minstens 1× munt?\"*\n• P(geen munt) = P(KKKK) = (1/2)⁴ = 1/16.\n• P(minstens 1× munt) = 1 − 1/16 = **15/16**.\n\nVeel sneller dan alle 15 andere combinaties uitwerken!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">P(niet A) = 1 − P(A)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.text}" font-size="12" font-family="monospace">P(6) = 1/6</text>
<text x="35" y "94" fill="${COLORS.text}" font-size="12" font-family="monospace">P(niet 6) = 5/6</text>
<line x1="30" y1="106" x2="270" y2="106" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "128" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">truc: 'minstens 1' → complement!</text>
<text x="35" y "148" fill="${COLORS.text}" font-size="11" font-family="monospace">P(min. 1× K, 4 worpen) =</text>
<text x="35" y "164" fill="${COLORS.text}" font-size="11" font-family="monospace">1 − P(0× K) = 1 − 1/16 = 15/16</text>
<text x="35" y "182" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">veel sneller dan alle 15 paden!</text>
</svg>`,
    checks: [
      {
        q: "*Bij 5 muntworpen — wat is de kans op minstens 1× kop?*",
        options: ["31/32", "1/32", "1/2", "5/32"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is P(precies 0× kop) = (1/2)⁵. Maar je wilt het complement: 1 − 1/32 = 31/32.",
          "1/2 is kans bij 1 worp. Bij 5 worpen verandert de kans op 'minstens 1'.",
          "5/32 zou een specifieke combinatie zijn. Truc: 1 − P(0 K).",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Mixed — kans-vragen door elkaar",
    explanation: "Vier vragen die alle hoofdstukken combineren.\n\n**Examen-tip**: lees iedere vraag rustig. Bij \"of\"-vragen → optellen (let op overlap). Bij \"en\"-vragen → vermenigvuldigen. Bij \"minstens\"-vragen → denk aan complement (1 − P(...)).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">P</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">en/of/minstens 🏆</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de kans op 2× zes bij 2 dobbelstenen?*",
        options: ["1/36", "1/12", "2/6", "1/6"],
        answer: 0,
        wrongHints: [
          null,
          "Geen logische berekening — voor en-kans: 1/6 · 1/6 = 1/36.",
          "Optellen ipv vermenigvuldigen — bij twee onafhankelijke worpen vermenigvuldig je.",
          "Dat is kans op één 6 bij één worp.",
        ],
      },
      {
        q: "*Zak: 4 rood + 6 blauw. Twee knikkers met terugleggen. Kans 2× rood?*",
        options: ["16/100 = 4/25", "4/10", "8/100", "1/25"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is kans op één rode. Voor twee: vermenigvuldig.",
          "8/100 = 2 · 4/100 (optellen). Maar voor en-kans: 4/10 · 4/10 = 16/100.",
          "1/25 zou (1/5)² zijn — maar 4/10 = 2/5, niet 1/5.",
        ],
      },
      {
        q: "*Bij 3 muntworpen — kans op precies 1× kop?*",
        options: ["3/8", "1/8", "1/3", "1/2"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is één pad (zoals KMM). Maar 1× kop kan op 3 manieren: KMM, MKM, MMK.",
          "1/3 = 33% — geen logische munt-kans (deler 8).",
          "Te grof. Reken: 3 paden · (1/2)³ = 3/8 = 37.5%.",
        ],
      },
      {
        q: "*Dobbelsteen: P(niet 1)?*",
        options: ["5/6", "1/6", "5/5", "0"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is kans OP 1. Het complement is 1 − 1/6.",
          "5/5 = 1 = zekerheid. Maar 'niet 1' is niet zeker.",
          "P = 0 zou onmogelijk betekenen. Maar 'niet 1' kan wel — namelijk 2, 3, 4, 5 of 6.",
        ],
      },
    ],
  },
  {
    title: "Examen-stijl",
    explanation: "Drie examen-style vragen.\n\n**Tip**: bij ingewikkelde vragen — teken een kansboom of maak een tabel. Visueel maakt fouten zichtbaar.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.good}" font-size="32" font-family="Arial" font-weight="bold">examen</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">stijl</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">visueel = duidelijk 🎯</text>
</svg>`,
    checks: [
      {
        q: "*\"Een doos: 5 chocolade en 3 noten-bonbons. Pak willekeurig 2 zonder terugleggen. Kans dat beide chocolade zijn?\"*",
        options: [
          "5/8 · 4/7 = 20/56 = 5/14",
          "5/8 · 5/8 = 25/64",
          "5/8 + 4/7 = 67/56",
          "Niet te bepalen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Met terugleggen zou dat zijn. Maar 'zonder terugleggen' = na de eerste pak heb je nog 4 chocolade en 7 totaal.",
          "Optellen ipv vermenigvuldigen — voor en-kans: vermenigvuldig.",
          "Wel goed te bepalen — gewoon stap voor stap (eerste 5/8, daarna 4/7).",
        ],
      },
      {
        q: "*\"Een loterij: 1 op 100 lootjes wint. Je koopt 3 lootjes. Kans dat je geen prijs wint?\"*",
        options: [
          "(99/100)³",
          "1 − 3/100 = 97/100",
          "3/100",
          "100/103",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet 'niet 3 keer' = 'minstens 1 verlies'. Voor 'geen prijs winnen' = 'alle 3 verloren'.",
          "Dat is kans op precies 3 winnende lootjes (waarschijnlijk verkeerd ook). Voor 'geen prijs' = (99/100)³.",
          "100/103 is geen logische berekening voor deze setup.",
        ],
      },
      {
        q: "*\"Bij 4 muntworpen — kans op minstens 2× kop?\"*",
        options: [
          "11/16",
          "1/2",
          "1/4",
          "5/16",
        ],
        answer: 0,
        wrongHints: [
          null,
          "1/2 is een ruwe schatting maar niet exact. Bereken via complement: 1 − P(0 K) − P(1 K) = 1 − 1/16 − 4/16 = 11/16.",
          "1/4 zou kans op precies 2 zijn (= 6/16). Maar 'minstens 2' = 6/16 + 4/16 + 1/16 = 11/16.",
          "5/16 = P(precies 1 K). Maar 'minstens 2' is 1 − P(0 of 1) = 11/16.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht — alles samen",
    explanation: "Laatste twee vragen op examen-niveau.\n\n**Klaar?** Dan beheers je de basis van kansrekening — voldoende voor klas 3 en de eerste hoofdstukken van havo wiskunde A.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(160,96,255,0.15)" stroke="${COLORS.paars}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.paars}" font-size="28" font-family="Arial" font-weight="bold">kans</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.paars}" font-size="22" font-family="Arial" font-weight="bold">⚄</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">je beheerst het 🎓</text>
</svg>`,
    checks: [
      {
        q: "*\"Een dobbelsteen 3× rollen — kans op minstens één 6?\"*",
        options: [
          "1 − (5/6)³ = 91/216",
          "(1/6)³ = 1/216",
          "3 · 1/6 = 1/2",
          "1/6",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is kans op 3× zes — heel klein.",
          "Optellen werkt niet bij overlappende gebeurtenissen. Gebruik complement: 1 − P(0× zes) = 1 − (5/6)³.",
          "1/6 is kans bij één worp. Bij 3 worpen verandert het.",
        ],
      },
      {
        q: "*\"Een klas heeft 30 leerlingen. P(jongen) = 12/30. Wat is P(meisje)?\"*",
        options: [
          "18/30 = 3/5",
          "1 − 12/30 = 12/30",
          "12/18 = 2/3",
          "30/12 = 5/2",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verkeerd berekend complement — 1 − 12/30 = 18/30, niet 12/30.",
          "Dat is een ratio. Kans = gunstig/totaal. P(meisje) = 18/30 = 3/5.",
          "Onlogisch — kans kan nooit > 1.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kansrekening = {
  id: "kansrekening",
  title: "Kansrekening",
  emoji: "🎲",
  level: "klas2-3-vmbo-vwo",
  subject: "wiskunde",
  topics: ["WI.statistiek.beschrijven"],
  intro:
    "Basis van kansrekening voor klas 2-3: kans als breuk/percentage, dobbelsteen + munt + knikker, kansboom voor opeenvolgende gebeurtenissen, vermenigvuldigen bij onafhankelijk en optellen bij uitsluitend, plus de complement-truc voor 'minstens'-vragen. Voorbereiding op havo wiskunde A.",
  triggerKeywords: [
    "kans", "kansrekening", "P(A)",
    "dobbelsteen", "munt", "knikker", "kaart",
    "kansboom", "onafhankelijk", "uitsluitend",
    "complement", "minstens", "vermenigvuldigen kans",
  ],
  chapters,
  steps,
};

export default kansrekening;
