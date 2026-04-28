// Leerpad: Machten en machtsregels — Wiskunde klas 2-3
// 14 stappen in 5 hoofdstukken (A t/m E).
// Bouwt voort op kwadraten-wortels; voorbereiding op exponentiële functies.

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
  "🔢", "1️⃣", "📋",                    // A. Wat is een macht?
  "➕", "➖", "✖️",                      // B. Machtsregels
  "📦", "🔪", "🔄",                     // C. Producten/quotiënten/negatief
  "🔟", "🔬",                            // D. Machten van 10 + wet. notatie
  "🎯", "📝", "🏆",                    // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat is een macht?", emoji: "🔢", from: 0, to: 2 },
  { letter: "B", title: "Drie machtsregels", emoji: "📋", from: 3, to: 5 },
  { letter: "C", title: "Producten, quotiënten en negatieve exp.", emoji: "📦", from: 6, to: 8 },
  { letter: "D", title: "Machten van 10 + wet. notatie", emoji: "🔟", from: 9, to: 10 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 11, to: 13 },
];

const steps = [
  // ─── A. Wat is een macht? ─────────────────────────────
  {
    title: "Notatie en uitspraak",
    explanation: "Een **macht** is een korte schrijfwijze voor herhaaldelijk vermenigvuldigen.\n\n**Notatie**: a^n (uitgesproken als 'a tot de macht n').\n• **a** = het **grondtal** (welk getal vermenigvuldigen we?)\n• **n** = de **exponent** (hoeveel keer?)\n\n**Voorbeelden**:\n• 3² = 3 · 3 = 9 (\"3 in het kwadraat\" of \"3 tot de tweede\")\n• 2³ = 2 · 2 · 2 = 8 (\"2 tot de derde\" of \"2 in de derde macht\")\n• 5⁴ = 5 · 5 · 5 · 5 = 625\n• 10⁵ = 10 · 10 · 10 · 10 · 10 = 100.000\n\n**Speciale namen**:\n• a² = 'kwadraat' (bekend van vlakke meetkunde)\n• a³ = 'derdemacht' of 'kubus' (bij ruimte-meetkunde)\n• a^4, a^5, ... = gewoon 'tot de vierde', 'tot de vijfde'\n\n**Let op de notatie op papier vs computer**:\n• Op papier: 3² (hoog kleine 2)\n• Computer/calculator: 3^2 of 3 ** 2\n• Beide betekenen hetzelfde.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">a^n = a · a · ... · a (n keer)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="80" y "100" text-anchor="middle" fill="${COLORS.text}" font-size="42" font-family="Arial" font-weight="bold">3<tspan font-size="24" baseline-shift="super">2</tspan></text>
<text x="155" y "100" text-anchor="middle" fill="${COLORS.alt}" font-size="22" font-family="Arial">=</text>
<text x="220" y "100" text-anchor="middle" fill="${COLORS.text}" font-size="22" font-family="Arial">3 · 3 = 9</text>
<text x="80" y "130" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">grondtal · exponent</text>
<line x1="30" y1="148" x2="270" y2="148" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "170" fill="${COLORS.text}" font-size="11" font-family="Arial">2³ = 8 · 5⁴ = 625 · 10⁵ = 100.000</text>
</svg>`,
    checks: [
      {
        q: "*Wat is 4³?*",
        options: ["64", "12", "81", "16"],
        answer: 0,
        wrongHints: [
          null,
          "12 = 4 · 3 (vermenigvuldigen). Maar 4³ = 4 · 4 · 4.",
          "81 = 3⁴ (verkeerd om — grondtal en exponent verwisseld).",
          "16 = 4² = 4 · 4. Maar 4³ heeft nog één 4 erbij.",
        ],
      },
      {
        q: "*Hoe spreek je 5² uit?*",
        options: [
          "Vijf in het kwadraat (of: vijf tot de tweede)",
          "Twee tot de vijfde",
          "Vijf maal twee",
          "Tweederde van vijf",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — grondtal komt eerst. 2⁵ zou 'twee tot de vijfde' zijn.",
          "Vijf maal twee = 10. Maar 5² = 25.",
          "Onzin-uitspraak. 5² = 5 · 5 = 25.",
        ],
      },
    ],
  },
  {
    title: "Machten van 1, 0 en negatief grondtal",
    explanation: "**Wat als de exponent 0 is?**\n\nA-ha-trick: **a⁰ = 1** (voor elke a die niet 0 is).\n\nWaarom? Een goede uitleg: a^n / a^n = 1 (iets door zichzelf). Maar volgens de machtsregel: a^n / a^n = a^(n−n) = a⁰. Dus a⁰ = 1.\n\n**Voorbeelden**:\n• 5⁰ = 1\n• 17⁰ = 1\n• 999⁰ = 1\n• (-3)⁰ = 1\n• 0⁰ = onbepaald (laat dit aan wiskundigen over)\n\n**Wat als de exponent 1 is?**\n\nGewoon zichzelf: **a¹ = a**.\n• 5¹ = 5\n• 100¹ = 100\n\n**Negatief grondtal**:\n• (-2)² = (-2) · (-2) = +4 (twee minnen → plus)\n• (-2)³ = (-2) · (-2) · (-2) = -8 (drie minnen → min)\n• (-2)⁴ = +16\n• (-2)⁵ = -32\n\n**Regel**: even exponent → positief resultaat. Oneven exponent → behoudt teken van grondtal.\n\n**Verschil tussen -2² en (-2)²**:\n• -2² = -(2²) = -4 (eerst kwadrateren, dan minteken)\n• (-2)² = +4 (haakjes maken het verschil — eerst minteken, dan kwadrateren)\n\nOp examens vergeten leerlingen dit verschil regelmatig. Let op de **haakjes**!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">speciale exponenten</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "78" fill="${COLORS.good}" font-size="13" font-family="monospace" font-weight="bold">a⁰ = 1</text>
<text x="120" y "78" fill="${COLORS.muted}" font-size="11" font-family="Arial">(elke a ≠ 0)</text>
<text x="35" y "100" fill="${COLORS.good}" font-size="13" font-family="monospace" font-weight="bold">a¹ = a</text>
<text x="120" y "100" fill="${COLORS.muted}" font-size="11" font-family="Arial">(zichzelf)</text>
<line x1="30" y1="115" x2="270" y2="115" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "138" fill="${COLORS.text}" font-size="11" font-family="Arial">(-2)² = +4 (even = +)</text>
<text x="35" y "156" fill="${COLORS.text}" font-size="11" font-family="Arial">(-2)³ = -8 (oneven = teken)</text>
<text x="35" y "176" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">-2² = -4 ≠ (-2)² = +4</text>
</svg>`,
    checks: [
      {
        q: "*Wat is 7⁰?*",
        options: ["1", "0", "7", "Onbepaald"],
        answer: 0,
        wrongHints: [
          null,
          "Iets tot de macht 0 is altijd 1 (behalve 0⁰).",
          "7¹ = 7. Maar 7⁰ = 1.",
          "0⁰ is onbepaald, maar 7⁰ = 1.",
        ],
      },
      {
        q: "*Wat is (-3)²?*",
        options: ["9", "-9", "-6", "6"],
        answer: 0,
        wrongHints: [
          null,
          "Bij even exponent wordt het positief. (-3) · (-3) = +9.",
          "-6 = -3 · 2 (vermenigvuldigen). Maar (-3)² = (-3) · (-3) = +9.",
          "6 = 3 · 2 (vermenigvuldigen). Maar machten = herhaaldelijk vermenigvuldigen met zichzelf.",
        ],
      },
    ],
  },
  {
    title: "Volgorde — machten vóór × en ÷",
    explanation: "Bij rekenen met machten gelden **specifieke voorrangsregels**:\n\n**Volgorde** (van eerst naar laatst):\n1. **Haakjes** — ( )\n2. **Machten** — a^n\n3. **Vermenigvuldigen / delen** — × en ÷\n4. **Optellen / aftrekken** — + en −\n\n**Geheugensteun**: H-M-VD-OA (Haakjes-Machten-VermenigvuldigenDelen-OptellenAftrekken).\n\n**Voorbeelden**:\n\n**3 + 2² · 5**\n→ Eerst macht: 2² = 4\n→ Dan vermenigvuldigen: 4 · 5 = 20\n→ Dan optellen: 3 + 20 = **23**\n\nNiet: (3 + 2)² · 5 → dat zou 5² · 5 = 125 zijn. Verkeerd.\n\n**(3 + 2)²**\n→ Eerst haakjes: 3 + 2 = 5\n→ Dan macht: 5² = **25**\n\n**4 · 3² − 6 ÷ 2**\n→ Macht: 3² = 9\n→ Vermenigvuldigen: 4 · 9 = 36\n→ Delen: 6 ÷ 2 = 3\n→ Aftrekken: 36 − 3 = **33**\n\n**Tip**: bij twijfel — gebruik haakjes. Te veel haakjes is niet erg, te weinig wel.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">volgorde van bewerkingen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Haakjes</text>
<text x="35" y "92" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">2. Machten ←</text>
<text x="35" y "110" fill="${COLORS.text}" font-size="11" font-family="Arial">3. × en ÷</text>
<text x="35" y "128" fill="${COLORS.text}" font-size="11" font-family="Arial">4. + en −</text>
<line x1="30" y1="142" x2="270" y2="142" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "162" fill="${COLORS.muted}" font-size="11" font-family="Arial">3 + 2² · 5 = 3 + 4 · 5 = 23</text>
<text x="35" y "180" fill="${COLORS.muted}" font-size="11" font-family="Arial">(3 + 2)² = 5² = 25</text>
</svg>`,
    checks: [
      {
        q: "*Wat is 2 + 3²?*",
        options: ["11", "25", "13", "10"],
        answer: 0,
        wrongHints: [
          null,
          "25 = 5² = (2+3)². Maar zonder haakjes: eerst macht, dan optellen.",
          "Onjuist. Bereken eerst 3² = 9, dan 2 + 9.",
          "Onjuist. Eerst 3² = 9 berekenen, dan 2 erbij.",
        ],
      },
      {
        q: "*Wat is (3 + 1)² · 2?*",
        options: ["32", "10", "17", "16"],
        answer: 0,
        wrongHints: [
          null,
          "10 = 4 · 2 + 2 (verkeerde berekening). Doe (3+1)² = 16, dan · 2.",
          "Onjuist — eerst haakjes, dan macht, dan ·.",
          "16 = (3+1)² zonder de · 2 te doen. Vergeet niet de · 2.",
        ],
      },
    ],
  },

  // ─── B. Drie machtsregels ─────────────────────────────
  {
    title: "Regel 1: vermenigvuldigen → exponenten optellen",
    explanation: "**Regel 1**: bij **vermenigvuldigen van machten met hetzelfde grondtal** worden de exponenten **opgeteld**.\n\n**Formule**: **a^m · a^n = a^(m+n)**\n\n**Bewijs (intuïtief)**:\n• 2² · 2³ = (2·2) · (2·2·2) = 2·2·2·2·2 = 2⁵\n• Inderdaad: 2 + 3 = 5.\n\n**Voorbeelden**:\n• 3² · 3⁴ = 3⁶ (= 729)\n• x³ · x⁵ = x⁸\n• 5 · 5⁷ = 5¹ · 5⁷ = 5⁸\n• a^2 · a^7 · a^3 = a^12 (alle exponenten optellen)\n\n**Belangrijke voorwaarde**: het grondtal moet **gelijk** zijn. \n• 2² · 3² ≠ 6² (zie volgende stap voor wat er wel mag).\n• 2² · 3² = 4 · 9 = 36, en 6² = 36 — toevallig gelijk hier maar dat is een ander principe.\n\n**Veel toegepast in formules**:\n• Oppervlakte van een vierkant met zijde x²: (x²)² = x⁴ (zie regel 3).\n• Volume van een kubus met ribbe x: x · x · x = x³.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">a^m · a^n = a^(m+n)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "78" fill="${COLORS.text}" font-size="14" font-family="monospace">2² · 2³ = 2⁵</text>
<text x="160" y "78" fill="${COLORS.muted}" font-size="11" font-family="Arial">(want 2+3=5)</text>
<text x="35" y "100" fill="${COLORS.text}" font-size="13" font-family="monospace">x³ · x⁵ = x⁸</text>
<text x="35" y "120" fill="${COLORS.text}" font-size="13" font-family="monospace">5 · 5⁷ = 5⁸</text>
<line x1="30" y1="135" x2="270" y2="135" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "156" fill="${COLORS.alt}" font-size="11" font-family="Arial">⚠ alleen bij ZELFDE grondtal:</text>
<text x="35" y "174" fill="${COLORS.alt}" font-size="11" font-family="Arial">2² · 3² ≠ 5² (regel werkt niet hier)</text>
</svg>`,
    checks: [
      {
        q: "*Versimpel: x⁴ · x⁶.*",
        options: ["x¹⁰", "x²⁴", "x²", "x⁵"],
        answer: 0,
        wrongHints: [
          null,
          "x²⁴ = (x⁴)⁶ — dat is regel 3 (machtsmacht), niet vermenigvuldiging van twee machten.",
          "x² = x⁶ : x⁴ — dat is regel 2 (delen), niet vermenigvuldiging.",
          "Bij vermenigvuldigen tellen we exponenten op (4+6), niet gemiddelde.",
        ],
      },
    ],
  },
  {
    title: "Regel 2: delen → exponenten aftrekken",
    explanation: "**Regel 2**: bij **delen van machten met hetzelfde grondtal** worden de exponenten **afgetrokken**.\n\n**Formule**: **a^m / a^n = a^(m−n)** (voor a ≠ 0)\n\n**Bewijs (intuïtief)**:\n• 2⁵ / 2³ = (2·2·2·2·2) / (2·2·2) = 2·2 = 2²\n• Inderdaad: 5 − 3 = 2.\n\n**Voorbeelden**:\n• 5⁷ / 5² = 5⁵\n• x⁹ / x⁴ = x⁵\n• 3¹⁰ / 3⁵ = 3⁵\n• y⁶ / y = y⁶ / y¹ = y⁵\n\n**Wat als m = n?**\n• 5³ / 5³ = 5⁰ = 1 (wat klopt: iets door zichzelf is 1).\n\n**Wat als m < n?**\n• 5² / 5⁵ = 5⁻³ = 1/5³ = 1/125\n• Dit komt verderop bij negatieve exponenten — voor nu: het mag.\n\n**Belangrijke voorwaarde**: weer hetzelfde grondtal. Bij 2³ / 3² werkt deze regel niet — dan reken je gewoon uit: 8/9.\n\n**Combinatie van regel 1 en 2**:\n• (x³ · x⁵) / x² = x⁸ / x² = x⁶",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">a^m / a^n = a^(m−n)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "78" fill="${COLORS.text}" font-size="14" font-family="monospace">2⁵ / 2³ = 2²</text>
<text x="160" y "78" fill="${COLORS.muted}" font-size="11" font-family="Arial">(want 5-3=2)</text>
<text x="35" y "100" fill="${COLORS.text}" font-size="13" font-family="monospace">x⁹ / x⁴ = x⁵</text>
<text x="35" y "120" fill="${COLORS.text}" font-size="13" font-family="monospace">5³ / 5³ = 5⁰ = 1</text>
<line x1="30" y1="135" x2="270" y2="135" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "156" fill="${COLORS.alt}" font-size="11" font-family="Arial">m &lt; n → negatieve exponent</text>
<text x="35" y "174" fill="${COLORS.muted}" font-size="11" font-family="Arial">5² / 5⁵ = 5⁻³ = 1/125</text>
</svg>`,
    checks: [
      {
        q: "*Versimpel: y⁸ / y³.*",
        options: ["y⁵", "y¹¹", "y², ²⁶⁶⁷", "y²⁴"],
        answer: 0,
        wrongHints: [
          null,
          "Bij DELEN trekken we af (8-3=5), niet optellen (8+3=11).",
          "Geen correcte uitkomst. Trek de exponenten af: 8 − 3 = 5.",
          "y²⁴ = (y⁸)³ — dat is machtsmacht. Hier delen we, dus aftrekken.",
        ],
      },
    ],
  },
  {
    title: "Regel 3: macht van een macht → exponenten vermenigvuldigen",
    explanation: "**Regel 3**: bij **een macht van een macht** worden de exponenten **vermenigvuldigd**.\n\n**Formule**: **(a^m)^n = a^(m·n)**\n\n**Bewijs (intuïtief)**:\n• (2³)² = 2³ · 2³ = 2^(3+3) = 2⁶\n• Inderdaad: 3 · 2 = 6.\n\n**Voorbeelden**:\n• (5²)³ = 5⁶\n• (x⁴)⁵ = x²⁰\n• (a^3)^2 = a^6\n• ((y²)³)² = y¹² (alle exponenten vermenigvuldigen: 2 · 3 · 2 = 12)\n\n**Let goed op het verschil met regel 1**:\n• Regel 1: a³ · a² = a^(3+2) = a⁵ (vermenigvuldigen → exp +)\n• Regel 3: (a³)² = a^(3·2) = a⁶ (macht-van-macht → exp ·)\n\n**Veel gemaakte fout**: (a³)² verwarren met a³ · a². Pas op met de notatie!\n\n**Toepassing in formules**:\n• Oppervlakte van een vierkant met zijde a² is (a²)² = a⁴.\n• Volume van een kubus met ribbe x³: (x³)³ = x⁹.\n\n**Samenvatting van de drie regels**:\n| Wat | Doe met exponenten |\n|---|---|\n| a^m · a^n | optellen → a^(m+n) |\n| a^m / a^n | aftrekken → a^(m−n) |\n| (a^m)^n | vermenigvuldigen → a^(m·n) |",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">(a^m)^n = a^(m·n)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "78" fill="${COLORS.text}" font-size="14" font-family="monospace">(2³)² = 2⁶</text>
<text x="155" y "78" fill="${COLORS.muted}" font-size="11" font-family="Arial">(want 3·2=6)</text>
<text x="35" y "100" fill="${COLORS.text}" font-size="13" font-family="monospace">(x⁴)⁵ = x²⁰</text>
<line x1="30" y1="115" x2="270" y2="115" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "138" fill="${COLORS.good}" font-size="11" font-family="Arial">samenvatting:</text>
<text x="35" y "156" fill="${COLORS.text}" font-size="11" font-family="Arial">· : exp + ·  / : exp − ·  ()^ : exp ·</text>
<text x="35" y "176" fill="${COLORS.muted}" font-size="11" font-family="Arial">a^m·a^n / a^m÷a^n / (a^m)^n</text>
</svg>`,
    checks: [
      {
        q: "*Versimpel: (x²)⁵.*",
        options: ["x¹⁰", "x⁷", "x², ⁵", "x³²"],
        answer: 0,
        wrongHints: [
          null,
          "x⁷ = x² · x⁵ (regel 1, optellen). Maar (x²)⁵ is macht-van-macht: 2 · 5.",
          "Geen geldige notatie.",
          "x³² is veel te groot. (x²)⁵ = x^(2·5) = x¹⁰.",
        ],
      },
      {
        q: "*Versimpel: 2³ · 2⁴.*",
        options: ["2⁷", "2¹²", "4⁷", "8⁷"],
        answer: 0,
        wrongHints: [
          null,
          "2¹² = (2³)⁴ (regel 3). Maar 2³ · 2⁴ is regel 1: exp +.",
          "4⁷ klopt niet: het grondtal blijft 2, niet 4.",
          "8⁷ klopt niet: het grondtal blijft 2.",
        ],
      },
    ],
  },

  // ─── C. Producten, quotiënten, negatieve exp. ─────────
  {
    title: "Macht van een product (a·b)^n",
    explanation: "**Regel**: een **macht van een product** is gelijk aan het **product van de machten**.\n\n**Formule**: **(a·b)^n = a^n · b^n**\n\n**Bewijs (intuïtief)**:\n• (2·3)² = (2·3) · (2·3) = 2·3·2·3 = (2·2) · (3·3) = 2² · 3² = 4 · 9 = 36\n• En direct: (2·3)² = 6² = 36 ✓\n\n**Voorbeelden**:\n• (3·5)² = 3² · 5² = 9 · 25 = 225 (controle: 15² = 225 ✓)\n• (2x)³ = 2³ · x³ = 8x³\n• (5a)² = 25a²\n• (-2y)⁴ = (-2)⁴ · y⁴ = 16y⁴\n\n**Pas op met haakjes**:\n• (2x)³ = 8x³ (haakjes om alles)\n• 2x³ = 2 · x³ (alleen x heeft de macht — let op!)\n\n**Toepassing**: bij vergelijkingen herleiden, of bij oppervlakte-formules. Bijvoorbeeld: oppervlakte cirkel met straal 2r is π(2r)² = π · 4r² = 4πr².\n\n**Veelvoorkomende fout**: (a + b)² ≠ a² + b². Dat geldt **niet** voor +/− tussen a en b (alleen voor · en /).\n• (a + b)² = a² + 2ab + b² (= het 'kwadraat van twee termen', geen onderdeel van dit pad).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">(a·b)^n = a^n · b^n</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "78" fill="${COLORS.text}" font-size="14" font-family="monospace">(2·3)² = 2²·3² = 4·9 = 36</text>
<text x="35" y "100" fill="${COLORS.text}" font-size="13" font-family="monospace">(2x)³ = 8x³</text>
<text x="35" y "120" fill="${COLORS.text}" font-size="13" font-family="monospace">(5a)² = 25a²</text>
<line x1="30" y1="135" x2="270" y2="135" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "156" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">⚠ NIET bij +/-:</text>
<text x="35" y "174" fill="${COLORS.alt}" font-size="11" font-family="Arial">(a+b)² ≠ a² + b² (= a²+2ab+b²)</text>
</svg>`,
    checks: [
      {
        q: "*Versimpel: (3x)².*",
        options: ["9x²", "6x²", "3x²", "9x"],
        answer: 0,
        wrongHints: [
          null,
          "6x² = 2·3·x² (verkeerde berekening). Het grondtal 3 wordt ook gekwadrateerd.",
          "3x² zou 3 · x² zijn (geen haakjes om de 3). Maar (3x)² heeft haakjes.",
          "Vergeet de macht op de x niet — die wordt ook gekwadrateerd.",
        ],
      },
    ],
  },
  {
    title: "Macht van een breuk (a/b)^n",
    explanation: "**Regel**: een **macht van een breuk** is gelijk aan **breuk van de machten**.\n\n**Formule**: **(a/b)^n = a^n / b^n** (voor b ≠ 0)\n\n**Voorbeelden**:\n• (2/3)² = 2² / 3² = 4/9\n• (x/5)³ = x³ / 5³ = x³ / 125\n• (a/b)⁴ = a⁴ / b⁴\n\n**Toepassing**: handig bij wetenschappelijke berekeningen, kansrekening (kans op iets gebeurt n keer = (kans)^n), en exponentiële groei (komt later).\n\n**Voorbeeld kansrekening**: \n*\"Kans op kop bij muntworp = 1/2. Wat is de kans op 3x kop achter elkaar?\"*\n→ (1/2)³ = 1³ / 2³ = 1/8.\n\n**Gecombineerd voorbeeld**: (2x/3y)² = (2x)² / (3y)² = 4x² / 9y².\n\n**Belangrijke check**: deze regel werkt **alleen voor breuken** (deling). Dus voor een uitdrukking als (a + b/c)^n moet je eerst kijken wat onder de macht staat.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">(a/b)^n = a^n / b^n</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "78" fill="${COLORS.text}" font-size="14" font-family="monospace">(2/3)² = 4/9</text>
<text x="35" y "100" fill="${COLORS.text}" font-size="13" font-family="monospace">(x/5)³ = x³/125</text>
<text x="35" y "120" fill="${COLORS.text}" font-size="13" font-family="monospace">(2x/3y)² = 4x²/9y²</text>
<line x1="30" y1="135" x2="270" y2="135" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "156" fill="${COLORS.muted}" font-size="11" font-family="Arial">kans 3x kop: (1/2)³ = 1/8</text>
<text x="35" y "174" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">handig in kansrekening + exp. groei</text>
</svg>`,
    checks: [
      {
        q: "*Versimpel: (3/4)².*",
        options: ["9/16", "6/8", "3/16", "9/4"],
        answer: 0,
        wrongHints: [
          null,
          "6/8 = 3/4 · 2/2 = niet goed. Bereken 3² / 4² = 9 / 16.",
          "3/16 = 3 / 4² (alleen noemer gekwadrateerd). De teller wordt ook gekwadrateerd.",
          "9/4 = 3² / 4 (alleen teller gekwadrateerd). De noemer wordt ook gekwadrateerd.",
        ],
      },
    ],
  },
  {
    title: "Negatieve exponenten — a^(−n) = 1/a^n",
    explanation: "Wat betekent een **negatieve exponent**?\n\n**Definitie**: **a^(−n) = 1 / a^n** (voor a ≠ 0)\n\n**Bewijs (intuïtief)**:\nVolgens regel 2 (delen): a⁰ / a^n = a^(0−n) = a^(−n).\nMaar a⁰ = 1, dus a^(−n) = 1 / a^n.\n\n**Voorbeelden**:\n• 2⁻¹ = 1/2¹ = 1/2 = 0.5\n• 5⁻² = 1/5² = 1/25 = 0.04\n• 10⁻³ = 1/1000 = 0.001\n• x⁻⁴ = 1/x⁴\n\n**Vuistregel**: een minteken in de exponent = de macht naar de **andere kant** van een breuk verhuizen.\n• 2⁻¹ = 1/2¹ = 1/2\n• 1/3⁻² = 3² = 9\n• x⁻³ / y⁻² = y² / x³\n\n**Combinatie met de andere machtsregels werkt gewoon**:\n• a³ · a⁻⁵ = a^(3+(-5)) = a⁻² = 1/a²\n• a² / a⁻³ = a^(2−(-3)) = a⁵\n\n**Vraag uit examen**: \"Schrijf 1/4 als macht van 2.\"\n• 1/4 = 1/2² = 2⁻²\n\n**Negatieve exponent in praktijk**:\n• Bij wetenschap: 10⁻⁹ m = 0,000000001 m (nano)\n• Bij zwaartekracht: kracht ~ 1/r² oftewel r⁻²\n• Bij verval: aantal radioactieve deeltjes per seconde halveert exponentieel.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">a⁻ⁿ = 1 / aⁿ</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "78" fill="${COLORS.text}" font-size="14" font-family="monospace">2⁻¹ = 1/2 = 0.5</text>
<text x="35" y "100" fill="${COLORS.text}" font-size="13" font-family="monospace">5⁻² = 1/25 = 0.04</text>
<text x="35" y "120" fill="${COLORS.text}" font-size="13" font-family="monospace">10⁻³ = 0.001</text>
<text x="35" y "140" fill="${COLORS.text}" font-size="13" font-family="monospace">x⁻⁴ = 1/x⁴</text>
<line x1="30" y1="155" x2="270" y2="155" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="150" y "178" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">minteken = de macht naar andere kant van breuk</text>
</svg>`,
    checks: [
      {
        q: "*Wat is 4⁻¹?*",
        options: ["1/4", "-4", "0", "-1/4"],
        answer: 0,
        wrongHints: [
          null,
          "Een negatieve exponent maakt het getal niet negatief, maar een breuk: 1/aⁿ.",
          "4⁰ = 1, niet 0. En 4⁻¹ ≠ 0.",
          "Geen minteken voor de breuk. 4⁻¹ = +1/4.",
        ],
      },
      {
        q: "*Versimpel: x³ · x⁻⁵.*",
        options: ["x⁻²", "x⁻¹⁵", "x⁸", "x²"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is regel 3 (vermenigvuldigen exponenten). Hier is regel 1 (optellen): 3 + (-5) = -2.",
          "x⁸ = x³ · x⁵ (zonder minteken). Maar het minteken hoort erbij.",
          "Bij vermenigvuldigen tellen we exponenten op (3 + (-5) = -2), niet absolute waarde.",
        ],
      },
    ],
  },

  // ─── D. Machten van 10 + wet. notatie ─────────────────
  {
    title: "Machten van 10",
    explanation: "Machten van 10 zijn handig omdat het **decimale getalsysteem** in tienen werkt.\n\n**Positieve exponenten = grote getallen**:\n• 10¹ = 10\n• 10² = 100\n• 10³ = 1.000 (duizend)\n• 10⁶ = 1.000.000 (miljoen)\n• 10⁹ = 1.000.000.000 (miljard)\n\nVuistregel: **n nullen** achter de 1 (10^n).\n\n**Negatieve exponenten = kleine getallen**:\n• 10⁻¹ = 0,1\n• 10⁻² = 0,01\n• 10⁻³ = 0,001\n• 10⁻⁶ = 0,000001\n\nVuistregel: **n nullen** vóór de 1 (inclusief de 0 vóór de komma).\n\n**Voorvoegsels in eenheden** (heel veel gebruikt in natuurkunde/scheikunde):\n• kilo (k) = 10³ = 1000 (kilometer = 1000 m)\n• mega (M) = 10⁶ (megabyte)\n• giga (G) = 10⁹ (gigabyte)\n• tera (T) = 10¹²\n• milli (m) = 10⁻³ (millimeter = 0,001 m)\n• micro (µ) = 10⁻⁶\n• nano (n) = 10⁻⁹\n\n**Vermenigvuldigen met machten van 10 = komma verschuiven**:\n• 5 · 10² = 500 (komma 2 plekken naar rechts)\n• 5 · 10⁻² = 0,05 (komma 2 plekken naar links)",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">machten van 10</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.good}" font-size="11" font-family="monospace">10³ = 1.000</text>
<text x="155" y "74" fill="${COLORS.muted}" font-size="11" font-family="Arial">(kilo)</text>
<text x="35" y "92" fill="${COLORS.good}" font-size="11" font-family="monospace">10⁶ = 1.000.000</text>
<text x="155" y "92" fill="${COLORS.muted}" font-size="11" font-family="Arial">(mega)</text>
<text x="35" y "110" fill="${COLORS.good}" font-size="11" font-family="monospace">10⁹ = 1.000.000.000</text>
<text x="180" y "110" fill="${COLORS.muted}" font-size="11" font-family="Arial">(giga)</text>
<line x1="30" y1="124" x2="270" y2="124" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "144" fill="${COLORS.alt}" font-size="11" font-family="monospace">10⁻³ = 0,001</text>
<text x="155" y "144" fill="${COLORS.muted}" font-size="11" font-family="Arial">(milli)</text>
<text x="35" y "162" fill="${COLORS.alt}" font-size="11" font-family="monospace">10⁻⁶ = 0,000001</text>
<text x="170" y "162" fill="${COLORS.muted}" font-size="11" font-family="Arial">(micro)</text>
<text x="35" y "180" fill="${COLORS.alt}" font-size="11" font-family="monospace">10⁻⁹</text>
<text x="100" y "180" fill="${COLORS.muted}" font-size="11" font-family="Arial">(nano)</text>
</svg>`,
    checks: [
      {
        q: "*Hoeveel is 10⁵?*",
        options: ["100.000", "10.000", "1.000.000", "50"],
        answer: 0,
        wrongHints: [
          null,
          "10.000 = 10⁴. Maar 10⁵ heeft 5 nullen.",
          "1.000.000 = 10⁶. Eén nul te veel.",
          "50 = 10 · 5 (vermenigvuldigen). Maar 10⁵ = 10 · 10 · 10 · 10 · 10.",
        ],
      },
    ],
  },
  {
    title: "Wetenschappelijke notatie",
    explanation: "**Wetenschappelijke notatie** schrijft heel grote of kleine getallen kort: **a · 10^n**, waarbij a tussen 1 en 10 ligt (1 ≤ a < 10).\n\n**Voorbeelden grote getallen**:\n• 7.500 = 7,5 · 10³\n• 326.000 = 3,26 · 10⁵\n• 1.000.000.000 = 1 · 10⁹\n• 6.022 · 10²³ = getal van Avogadro (~aantal moleculen in 1 mol)\n\n**Voorbeelden kleine getallen**:\n• 0,005 = 5 · 10⁻³\n• 0,000042 = 4,2 · 10⁻⁵\n• 0,0000001 = 1 · 10⁻⁷\n\n**Hoe omzetten naar wetenschappelijke notatie**:\n1. Verschuif de komma zo dat er **één cijfer** vóór de komma staat (1-9).\n2. Tel het aantal **plekken** dat je verschoven hebt = de exponent.\n3. Verschoof je naar **links**? → positieve exponent (groot getal).\n4. Verschoof je naar **rechts**? → negatieve exponent (klein getal).\n\n**Voorbeeld**: 326.000 → 3,26 (komma 5 plekken naar links) → 3,26 · 10⁵ ✓\n**Voorbeeld**: 0,000042 → 4,2 (komma 5 plekken naar rechts) → 4,2 · 10⁻⁵ ✓\n\n**Waarom gebruiken we het?**\n• Compact bij grote/kleine getallen.\n• Vermijdt fouten in nullen tellen.\n• Standard in wetenschap, natuurkunde, scheikunde.\n\n**Op je rekenmachine**: vaak getoond als **3,26E5** (de E = · 10).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">wetenschappelijke notatie: a · 10^n</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.text}" font-size="11" font-family="monospace">326.000 = 3,26 · 10⁵</text>
<text x="35" y "94" fill="${COLORS.text}" font-size="11" font-family="monospace">7.500 = 7,5 · 10³</text>
<text x="35" y "112" fill="${COLORS.text}" font-size="11" font-family="monospace">0,005 = 5 · 10⁻³</text>
<text x="35" y "130" fill="${COLORS.text}" font-size="11" font-family="monospace">0,000042 = 4,2 · 10⁻⁵</text>
<line x1="30" y1="142" x2="270" y2="142" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "162" fill="${COLORS.muted}" font-size="10" font-family="Arial">verschuif komma naar 1-9 vóór komma</text>
<text x="35" y "178" fill="${COLORS.muted}" font-size="10" font-family="Arial">links→ + exp · rechts → - exp</text>
</svg>`,
    checks: [
      {
        q: "*Schrijf 45.000 in wetenschappelijke notatie.*",
        options: ["4,5 · 10⁴", "45 · 10³", "4,5 · 10³", "4500 · 10¹"],
        answer: 0,
        wrongHints: [
          null,
          "Bij wet. notatie staat 1 cijfer vóór de komma (1-9). 45 heeft 2 cijfers.",
          "Te kleine exponent. 4,5 · 10³ = 4500, niet 45.000. Verschuif komma 4 plekken.",
          "Bij wet. notatie staat 1 cijfer vóór de komma. 4500 heeft 4 cijfers.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Mixed — alle machtsregels samen",
    explanation: "Vier vragen die alle hoofdstukken combineren.\n\n**Tip**: bij een ingewikkelde uitdrukking zoals (2x³)² · x⁻¹, herleid stap voor stap:\n1. (2x³)² = 4x⁶ (regel 'macht van product')\n2. 4x⁶ · x⁻¹ = 4x⁵ (regel 1: optellen exponenten)\n\nDoor systematisch elke regel toe te passen kom je tot de oplossing.\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">a^n</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">stap voor stap herleiden 🏆</text>
</svg>`,
    checks: [
      {
        q: "*Versimpel: a⁵ · a² / a³.*",
        options: ["a⁴", "a¹⁰", "a⁰", "a²"],
        answer: 0,
        wrongHints: [
          null,
          "a¹⁰ = (a⁵ · a²)² (verkeerde regel). Hier: 5 + 2 - 3 = 4.",
          "a⁰ = 1 — alleen als alle exponenten elkaar opheffen. Hier: 5 + 2 - 3 = 4.",
          "Reken: 5 + 2 = 7, dan 7 - 3 = 4. Niet 2.",
        ],
      },
      {
        q: "*Versimpel: (2x²)³.*",
        options: ["8x⁶", "6x⁵", "8x⁵", "2x⁶"],
        answer: 0,
        wrongHints: [
          null,
          "6x⁵ = 2·3 · x²⁺³ — verkeerde berekening. (2x²)³ = 2³ · (x²)³.",
          "8x⁵ = 2³ · x²⁺³ — combineert verkeerd. Bij (a^m)^n vermenigvuldig je: 2·3 = 6.",
          "2x⁶ = (haakjes vergeten op 2). De 2 wordt ook gekubbeerd: 2³ = 8.",
        ],
      },
      {
        q: "*Wat is 3⁻²?*",
        options: ["1/9", "-9", "-1/9", "-6"],
        answer: 0,
        wrongHints: [
          null,
          "Negatieve exponent maakt geen negatief getal — wel een breuk.",
          "Negatief teken hoort niet voor de breuk. 3⁻² = +1/9.",
          "-6 = -3 · 2 (vermenigvuldigen). Onjuist gebruik van macht-notatie.",
        ],
      },
      {
        q: "*Schrijf in wetenschappelijke notatie: 0,00067.*",
        options: ["6,7 · 10⁻⁴", "67 · 10⁻⁵", "6,7 · 10⁻⁵", "0,67 · 10⁻³"],
        answer: 0,
        wrongHints: [
          null,
          "67 heeft 2 cijfers vóór de komma. Wet. notatie eist 1 cijfer (1-9).",
          "6,7 · 10⁻⁵ = 0,000067 (één 0 te veel). Tel komma-plekken: 0,00067 → 6,7 = 4 plekken.",
          "0,67 heeft 0 vóór de komma — moet 1-9 zijn.",
        ],
      },
    ],
  },
  {
    title: "Examen-stijl — combinatie-vragen",
    explanation: "Vier examen-style vragen die machtsregels combineren met andere algebra.\n\n**Tip**: schrijf elke stap netjes op. Bij combinatie-vragen ontstaan fouten meestal door één regel over te slaan in het hoofd.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.good}" font-size="32" font-family="Arial" font-weight="bold">examen</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">stijl</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">stap voor stap 🎯</text>
</svg>`,
    checks: [
      {
        q: "*Versimpel: (3x⁴)² / (3x²)³.*",
        options: ["x²/3", "9x²", "3x²", "x⁵"],
        answer: 0,
        wrongHints: [
          null,
          "Reken eerst (3x⁴)² = 9x⁸, dan (3x²)³ = 27x⁶. Dan delen: 9/27 = 1/3, en x⁸/x⁶ = x². Antwoord: x²/3.",
          "Kijk naar de 9/27. Dat versimpelt tot 1/3, niet 3.",
          "Geen 5 als exponent. Reken systematisch: (3x⁴)² = 9x⁸, (3x²)³ = 27x⁶. Dan delen.",
        ],
      },
      {
        q: "*Wat is (2 · 10³) · (4 · 10⁵)?*",
        options: ["8 · 10⁸", "8 · 10¹⁵", "6 · 10⁸", "8 · 10⁻²"],
        answer: 0,
        wrongHints: [
          null,
          "10³ · 10⁵ = 10^(3+5) = 10⁸, niet 10¹⁵.",
          "2 · 4 = 8, niet 6. (Optellen ipv vermenigvuldigen).",
          "Bij vermenigvuldigen tellen we exponenten op (positief blijft positief).",
        ],
      },
      {
        q: "*Schrijf 1/16 als macht van 2.*",
        options: ["2⁻⁴", "-2⁴", "2⁻²", "2¹⁶"],
        answer: 0,
        wrongHints: [
          null,
          "Een negatief teken vóór 2 maakt het getal -16, niet 1/16.",
          "2⁻² = 1/4, niet 1/16.",
          "2¹⁶ = 65536, niet 1/16. We zoeken een negatieve exponent.",
        ],
      },
      {
        q: "*Versimpel: (a²b³)⁴.*",
        options: ["a⁸b¹²", "a⁶b⁷", "a⁸b¹²a", "a²b³⁴"],
        answer: 0,
        wrongHints: [
          null,
          "Bij macht-van-product wordt elk vermenigvuldigd, niet opgeteld. (a²)⁴ = a⁸ en (b³)⁴ = b¹².",
          "Onzin-notatie.",
          "Geen Ari-notatie. Pas regels stap voor stap toe.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const machten = {
  id: "machten",
  title: "Machten en machtsregels",
  emoji: "🔢",
  level: "klas2-3-vmbo-vwo",
  subject: "wiskunde",
  topics: ["WI.algebra.machten"],
  intro:
    "Machten in wiskunde — van notatie (a^n) tot de drie machtsregels (·, /, ()ⁿ), via macht-van-product en negatieve exponenten, naar machten van 10 en wetenschappelijke notatie. Voorbereiding op exponentiële functies (komt later) en heel veel praktische toepassingen.",
  triggerKeywords: [
    "machten", "macht", "exponent", "machtsregels",
    "kwadraat", "tot de macht", "wetenschappelijke notatie",
    "10 tot de macht", "nano", "mega", "kilo", "negatieve exponent",
  ],
  chapters,
  steps,
};

export default machten;
