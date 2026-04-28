// Leerpad: Logaritmen — Wiskunde havo 4-5
// 14 stappen in 5 hoofdstukken (A t/m E).
// Voorbouw: machten + exponentieel.
// Examenstof havo wis A en B.

const COLORS = {
  axis: "#e0e6f0",
  grid: "#2a3f5f",
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
  "🔁", "📋", "🔟",                    // A. Wat is een log?
  "🧮", "📱", "1️⃣",                   // B. Berekenen
  "✖️", "➗", "⬆️",                     // C. Eigenschappen
  "🎯", "📊",                            // D. Toepassing
  "🎯", "📝", "🏆",                    // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat is een logaritme?", emoji: "🔁", from: 0, to: 2 },
  { letter: "B", title: "Logaritme berekenen", emoji: "🧮", from: 3, to: 5 },
  { letter: "C", title: "Log-eigenschappen", emoji: "✖️", from: 6, to: 8 },
  { letter: "D", title: "Exp. vergelijkingen oplossen", emoji: "🎯", from: 9, to: 10 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 11, to: 13 },
];

const steps = [
  // ─── A. Wat is een logaritme? ─────────────────────────
  {
    title: "Log als omkering van een macht",
    explanation: "Een **logaritme** is de **omkering** van een macht.\n\nBij een macht vraag je: \"Wat is 2 tot de macht 5?\" Antwoord: 32.\n\nBij een logaritme vraag je: \"Tot de hoeveelste macht moet ik 2 verheffen om 32 te krijgen?\" Antwoord: 5.\n\n**Notatie**: **log₂(32) = 5**.\n\nLees als: \"de logaritme van 32 in grondtal 2 is 5\".\n\n**Andere voorbeelden**:\n• log₂(8) = 3 (want 2³ = 8)\n• log₂(16) = 4 (want 2⁴ = 16)\n• log₂(64) = 6 (want 2⁶ = 64)\n• log₃(27) = 3 (want 3³ = 27)\n• log₁₀(100) = 2 (want 10² = 100)\n• log₁₀(1000) = 3 (want 10³ = 1000)\n\n**Vuistregel**: log_a(b) = c betekent **a^c = b**.\n\n**Drie woorden voor de drie getallen**:\n• **Grondtal** (a) = wat onder de log staat als kleine letter\n• **Argument** (b) = waar je de log van neemt\n• **Logaritme** (c) = het antwoord\n\nDeze omkering werkt alleen voor **a > 0, a ≠ 1** en **b > 0**.\n• log van een negatief getal bestaat niet (in reële getallen).\n• log van 0 bestaat niet (oneindig).\n• grondtal 1 zou geen unieke uitkomst geven (1 tot welke macht is altijd 1).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">log = omkering van macht</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.text}" font-size="13" font-family="monospace">2⁵ = 32</text>
<text x="155" y "76" fill="${COLORS.alt}" font-size="13" font-family="monospace">↔</text>
<text x="180" y "76" fill="${COLORS.text}" font-size="13" font-family="monospace">log₂(32) = 5</text>
<text x="35" y "100" fill="${COLORS.text}" font-size="12" font-family="monospace">log₂(8) = 3 (2³ = 8)</text>
<text x="35" y "118" fill="${COLORS.text}" font-size="12" font-family="monospace">log₃(27) = 3 (3³ = 27)</text>
<text x="35" y "136" fill="${COLORS.text}" font-size="12" font-family="monospace">log₁₀(100) = 2</text>
<line x1="30" y1="148" x2="270" y2="148" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="150" y "172" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">log_a(b) = c ↔ a^c = b</text>
</svg>`,
    checks: [
      {
        q: "*Wat is log₂(16)?*",
        options: ["4", "8", "2", "16"],
        answer: 0,
        wrongHints: [
          null,
          "8 = 2³, niet 2⁴. Vraag: tot welke macht moet 2 om 16 te worden?",
          "2 = log₂(4), want 2² = 4. Hier zoeken we voor 16.",
          "16 zelf is het argument, niet het antwoord. Het antwoord is de exponent.",
        ],
      },
      {
        q: "*Welke vergelijking volgt uit log₅(125) = 3?*",
        options: [
          "5³ = 125",
          "3⁵ = 125",
          "125³ = 5",
          "5 + 3 = 125",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verkeerde grondtal. Bij log_a(b) = c geldt: a^c = b.",
          "Grondtal en argument verwisseld.",
          "Logaritme is geen som — het is een macht-relatie.",
        ],
      },
    ],
  },
  {
    title: "Notatie en veelvoorkomende grondtallen",
    explanation: "Het **grondtal** van een logaritme is essentieel. Drie veelvoorkomende notaties:\n\n**1. log₁₀(x)** — gewone logaritme (basis 10)\n• Vaak geschreven als alleen **log(x)** zonder grondtal-getal.\n• Op rekenmachine: knop \"log\".\n• Voorbeelden: log(100) = 2, log(1000) = 3, log(0.01) = -2.\n\n**2. log_e(x)** — natuurlijke logaritme\n• Speciale notatie: **ln(x)**.\n• e ≈ 2.71828 (getal van Euler).\n• Op rekenmachine: knop \"ln\".\n• Komt vaak voor in continue groei (rente, biologie, natuurkunde).\n\n**3. log₂(x)** — binaire logaritme\n• Vooral in informatica (bits, bytes).\n• Soms geschreven als **lg(x)** of **lb(x)**.\n\n**Belangrijke eigenschappen om te onthouden**:\n• **log_a(1) = 0** voor elk grondtal (a⁰ = 1).\n• **log_a(a) = 1** (a¹ = a).\n• **log_a(a^n) = n** (logaritme 'eet' de exponent).\n\n**Voorbeelden**:\n• log(1) = 0\n• log(10) = 1\n• log(10⁵) = 5\n• ln(1) = 0\n• ln(e) = 1\n• ln(e³) = 3\n• log₂(1) = 0\n• log₂(2) = 1\n• log₂(2⁸) = 8\n\n**Tip**: als je een log ziet zonder grondtal — meestal is het log₁₀. Maar in havo wis B is ln vaker dan log.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">drie veelvoorkomende grondtallen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">log(x)</text>
<text x="115" y "76" fill="${COLORS.muted}" font-size="11" font-family="Arial">= log₁₀(x) — basis 10</text>
<text x="35" y "94" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">ln(x)</text>
<text x="115" y "94" fill="${COLORS.muted}" font-size="11" font-family="Arial">= log_e(x) — natuurlijk</text>
<text x="35" y "112" fill="${COLORS.blue}" font-size="11" font-family="Arial" font-weight="bold">log₂(x)</text>
<text x="115" y "112" fill="${COLORS.muted}" font-size="11" font-family="Arial">— informatica (bits)</text>
<line x1="30" y1="125" x2="270" y2="125" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "146" fill="${COLORS.text}" font-size="11" font-family="monospace">log_a(1) = 0</text>
<text x="35" y "164" fill="${COLORS.text}" font-size="11" font-family="monospace">log_a(a) = 1</text>
<text x="35" y "180" fill="${COLORS.text}" font-size="11" font-family="monospace">log_a(a^n) = n</text>
</svg>`,
    checks: [
      {
        q: "*Wat is log(10)?*",
        options: ["1", "10", "0", "100"],
        answer: 0,
        wrongHints: [
          null,
          "10 is het argument, niet het antwoord. Vraag: 10 tot welke macht is 10?",
          "log(1) = 0. Maar log(10) = 1.",
          "Bij log(100) = 2. Hier hebben we 10, niet 100.",
        ],
      },
      {
        q: "*Wat is ln(1)?*",
        options: ["0", "1", "e", "Onbepaald"],
        answer: 0,
        wrongHints: [
          null,
          "Verkeerd. ln(e) = 1, maar ln(1) = 0.",
          "Geen logische uitkomst.",
          "ln(1) is wel bepaald: 0. ln(0) zou onbepaald (of -oneindig) zijn.",
        ],
      },
    ],
  },
  {
    title: "Log-grafiek — kromme die langzaam stijgt",
    explanation: "De **grafiek van y = log(x)** heeft een herkenbare vorm:\n• Begint bij x = 1 op y = 0.\n• Stijgt langzaam — heel veel langzamer dan een rechte of een macht.\n• Bestaat alleen voor **x > 0** (verticale asymptoot bij x = 0).\n• Snijdt nooit de y-as.\n\n**Tabel van log(x)** = log₁₀(x):\n\n| x | log(x) |\n|---|---|\n| 0.01 | -2 |\n| 0.1 | -1 |\n| 1 | 0 |\n| 10 | 1 |\n| 100 | 2 |\n| 1000 | 3 |\n| 10000 | 4 |\n\n**Interessant**: bij **elke vermenigvuldiging × 10** stijgt log met **+1**. Dat is het kenmerk van een logaritmische schaal.\n\n**Toepassingen — waar zie je log-schaal?**\n• **pH** (chemie) = -log₁₀ van de waterstofconcentratie.\n• **Decibel** (geluid) = 10·log₁₀ van de geluidsverhouding.\n• **Magnitude** (aardbevingen, Richter-schaal) = log₁₀.\n• **Groeicurves** (in biologie en business) — vaak op log-schaal getekend zodat exponentiële groei een rechte lijn wordt.\n\n**Belangrijke eigenschap**: log is de **omkering** van een macht-functie. Als f(x) = aˣ en g(x) = log_a(x), dan is g(f(x)) = x en f(g(x)) = x.\n\nDit is precies waarom log gebruikt wordt om **exponentiële vergelijkingen op te lossen** (komt later in dit pad).",
    svg: (() => {
      const sx = 200 / 11;
      const sy = 180 / 4;
      const ox = sx;
      const oy = 180 - 2 * sy;
      const toX = (x) => ox + x * sx;
      const toY = (y) => oy - y * sy;
      const points = [];
      for (let x = 0.2; x <= 10; x += 0.2) {
        points.push({ x, y: Math.log10(x) });
      }
      const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');
      return `<svg viewBox="0 0 200 200">
<line x1="0" y1="${toY(0)}" x2="200" y2="${toY(0)}" stroke="${COLORS.axis}" stroke-width="1.2"/>
<line x1="${toX(0)}" y1="0" x2="${toX(0)}" y2="200" stroke="${COLORS.axis}" stroke-width="1.2"/>
<path d="${path}" stroke="${COLORS.good}" stroke-width="2" fill="none"/>
<circle cx="${toX(1)}" cy="${toY(0)}" r="3" fill="${COLORS.warm}"/>
<text x="${toX(1) + 4}" y="${toY(0) + 12}" fill="${COLORS.warm}" font-size="9" font-family="Arial">(1, 0)</text>
<circle cx="${toX(10)}" cy="${toY(1)}" r="3" fill="${COLORS.warm}"/>
<text x="${toX(10) - 26}" y="${toY(1) - 4}" fill="${COLORS.warm}" font-size="9" font-family="Arial">(10, 1)</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">y = log(x) — langzaam stijgend</text>
</svg>`;
    })(),
    checks: [
      {
        q: "*Wat is log(0.001)?*",
        options: ["-3", "3", "0.001", "0"],
        answer: 0,
        wrongHints: [
          null,
          "Bij log(1000) = 3. Maar 0.001 = 10⁻³, dus log(0.001) = -3.",
          "Geen logische uitkomst.",
          "Bij log(1) = 0. Maar 0.001 ≠ 1.",
        ],
      },
    ],
  },

  // ─── B. Berekenen ─────────────────────────────────────
  {
    title: "Eenvoudige logs uit het hoofd",
    explanation: "Veel logs kun je **uit het hoofd** uitrekenen door de macht-tabellen te kennen.\n\n**Machten van 2 om te onthouden**:\n• 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64, 2⁷ = 128, 2⁸ = 256, 2⁹ = 512, 2¹⁰ = 1024.\n\n**Machten van 10**:\n• 10¹ = 10, 10² = 100, 10³ = 1000, 10⁶ = 1 miljoen.\n\n**Machten van 3**:\n• 3¹ = 3, 3² = 9, 3³ = 27, 3⁴ = 81.\n\n**Machten van 5**:\n• 5¹ = 5, 5² = 25, 5³ = 125, 5⁴ = 625.\n\n**Hoe los je een log uit het hoofd op?**\n\nVraag: \"log_a(b) = ?\" → \"Tot welke macht moet ik a verheffen om b te krijgen?\"\n\n**Voorbeelden**:\n• log₂(64) = ? → 64 = 2⁶ → **6**\n• log₃(81) = ? → 81 = 3⁴ → **4**\n• log₅(125) = ? → 125 = 5³ → **3**\n• log₁₀(10000) = ? → 10000 = 10⁴ → **4**\n• log₂(1) = ? → 1 = 2⁰ → **0**\n• log₂(2) = ? → 2 = 2¹ → **1**\n\n**Lastiger** (log van breuk):\n• log₂(1/8) = ? → 1/8 = 2⁻³ → **-3**\n• log₁₀(0.01) = ? → 0.01 = 10⁻² → **-2**\n\n**Tip**: schrijf altijd het argument als een macht van het grondtal. Dan is de log gewoon de exponent.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">logs uit het hoofd</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.text}" font-size="12" font-family="monospace">log₂(64) = 6</text>
<text x="35" y "92" fill="${COLORS.text}" font-size="12" font-family="monospace">log₃(81) = 4</text>
<text x="35" y "110" fill="${COLORS.text}" font-size="12" font-family="monospace">log₅(125) = 3</text>
<text x="35" y "128" fill="${COLORS.text}" font-size="12" font-family="monospace">log(10000) = 4</text>
<line x1="30" y1="138" x2="270" y2="138" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "158" fill="${COLORS.alt}" font-size="11" font-family="monospace">log₂(1/8) = -3</text>
<text x="35" y "176" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">tip: schrijf b als a^iets</text>
</svg>`,
    checks: [
      {
        q: "*Wat is log₃(9)?*",
        options: ["2", "3", "9", "1"],
        answer: 0,
        wrongHints: [
          null,
          "Bij log_3(27) = 3. Hier 9 = 3².",
          "9 is het argument, niet het antwoord.",
          "log_3(3) = 1, maar log_3(9) = 2.",
        ],
      },
    ],
  },
  {
    title: "Logaritme op de rekenmachine",
    explanation: "Op de rekenmachine zitten twee log-knoppen:\n\n**\"log\"** — gewone logaritme (basis 10)\n• Toets in: log + getal + =\n• Voorbeeld: log(50) ≈ 1.699 (want 10^1.699 ≈ 50)\n\n**\"ln\"** — natuurlijke logaritme (basis e)\n• Toets in: ln + getal + =\n• Voorbeeld: ln(50) ≈ 3.912\n\n**Wat als het grondtal anders is dan 10 of e?**\n\nGebruik de **grondtal-omschakelregel**:\n\n**log_a(b) = log(b) / log(a)**\n\nOf met ln: log_a(b) = ln(b) / ln(a). Beide werken.\n\n**Voorbeeld**: bereken log₂(50).\n• log₂(50) = log(50) / log(2)\n• Op rekenmachine: log(50) ≈ 1.699, log(2) ≈ 0.301\n• 1.699 / 0.301 ≈ **5.643**\n\n**Check**: 2^5.643 ≈ 50. ✓\n\n**Andere voorbeelden**:\n• log₃(15) = log(15) / log(3) ≈ 1.176 / 0.477 ≈ 2.465\n• log₂(1000) = log(1000) / log(2) = 3 / 0.301 ≈ 9.966\n\n**Tip**: gebruik altijd de grondtal-omschakelregel als je een log met een ander grondtal dan 10 of e hebt en de uitkomst niet 'mooi' is.\n\n**Mooie' uitkomsten** (= gehele getallen of eenvoudige breuken) komen alleen voor als het argument een **machten** is van het grondtal — anders wordt het een decimaal.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">log op rekenmachine</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">log-knop:</text>
<text x="115" y "74" fill="${COLORS.text}" font-size="11" font-family="monospace">log(50) ≈ 1.699</text>
<text x="35" y "92" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">ln-knop:</text>
<text x="115" y "92" fill="${COLORS.text}" font-size="11" font-family="monospace">ln(50) ≈ 3.912</text>
<line x1="30" y1="105" x2="270" y2="105" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "126" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">grondtal-omschakeling:</text>
<text x="35" y "144" fill="${COLORS.text}" font-size="12" font-family="monospace">log_a(b) = log(b) / log(a)</text>
<text x="35" y "164" fill="${COLORS.muted}" font-size="11" font-family="monospace">log₂(50) = log(50)/log(2)</text>
<text x="35" y "180" fill="${COLORS.muted}" font-size="11" font-family="monospace">≈ 1.699 / 0.301 ≈ 5.643</text>
</svg>`,
    checks: [
      {
        q: "*Hoe bereken je log₂(20) op een rekenmachine zonder log_2 knop?*",
        options: [
          "log(20) / log(2)",
          "log(20) − log(2)",
          "20 / 2",
          "log(20 · 2)",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Aftrekken werkt voor andere logo-eigenschappen, niet voor grondtal-omschakeling.",
          "Te simpel — log is geen deling.",
          "Optellen of vermenigvuldigen in het argument heeft geen direct verband met basis-omschakeling.",
        ],
      },
    ],
  },
  {
    title: "Speciale waarden — log(1) = 0, log(grondtal) = 1",
    explanation: "Drie waarden die je altijd snel moet kunnen herkennen:\n\n**1. log_a(1) = 0** — voor elk grondtal a.\n• Want a⁰ = 1 voor elke a (behalve a=0).\n• log(1) = 0, ln(1) = 0, log₂(1) = 0.\n\n**2. log_a(a) = 1** — een logaritme van het grondtal zelf is altijd 1.\n• Want a¹ = a.\n• log(10) = 1, ln(e) = 1, log₂(2) = 1.\n\n**3. log_a(a^n) = n** — logaritme van een macht van het grondtal is de exponent.\n• Want a^n is precies a tot de macht n.\n• log(10^5) = 5, ln(e^4) = 4, log₂(2^7) = 7.\n\n**Aanvullend nuttig**:\n• **log_a(0)** = onbepaald (of: -∞ in de limiet).\n• **log_a(b)** voor b < 0 bestaat niet (in reële getallen).\n\n**Examen-tip**: deze drie regels herken je heel snel. Tijd-besparend bij toetsen.\n\n**Voorbeeld-check**:\n• log(1) → 0 ✓\n• ln(e²) → 2 ✓\n• log₅(1) → 0 ✓\n• log₅(5) → 1 ✓\n• log₅(125) → 3 (want 125 = 5³) ✓\n\n**Truc**: bij elke log-vraag — vraag eerst:\n1. Is het argument 1? → antwoord 0.\n2. Is het argument het grondtal zelf? → antwoord 1.\n3. Is het argument een macht van het grondtal? → antwoord = die exponent.\n4. Anders → rekenmachine of grondtal-omschakeling.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">drie speciale waarden</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.good}" font-size="13" font-family="monospace" font-weight="bold">log_a(1) = 0</text>
<text x="35" y "98" fill="${COLORS.good}" font-size="13" font-family="monospace" font-weight="bold">log_a(a) = 1</text>
<text x="35" y "120" fill="${COLORS.good}" font-size="13" font-family="monospace" font-weight="bold">log_a(a^n) = n</text>
<line x1="30" y1="135" x2="270" y2="135" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "156" fill="${COLORS.muted}" font-size="11" font-family="monospace">log(1) = 0  · ln(e) = 1</text>
<text x="35" y "172" fill="${COLORS.muted}" font-size="11" font-family="monospace">log₂(2⁵) = 5 · log(10⁴) = 4</text>
</svg>`,
    checks: [
      {
        q: "*Wat is log(1) (basis 10)?*",
        options: ["0", "1", "10", "Onbepaald"],
        answer: 0,
        wrongHints: [
          null,
          "log(10) = 1. Maar log(1) = 0.",
          "10 is het grondtal, niet de uitkomst.",
          "log(1) is wel bepaald — namelijk 0. Onbepaald geldt voor log(0).",
        ],
      },
      {
        q: "*Wat is log₂(2⁹)?*",
        options: ["9", "2", "18", "11"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het grondtal. Maar de log van a^n in basis a is gewoon n.",
          "18 = 2 · 9 (vermenigvuldigen). Maar de regel zegt: log_a(a^n) = n.",
          "11 = 2 + 9 (optellen). Maar log_a(a^n) = n zonder rekening houden met het grondtal.",
        ],
      },
    ],
  },

  // ─── C. Log-eigenschappen ─────────────────────────────
  {
    title: "Eigenschap 1: log(ab) = log(a) + log(b)",
    explanation: "**Eerste log-eigenschap**: de logaritme van een **product** is de **som** van de logaritmen.\n\n**Formule**: **log(ab) = log(a) + log(b)**\n\n(Geldt voor elk grondtal — log, ln, log₂, etc.)\n\n**Bewijs (intuïtief)**:\nAls log(a) = m en log(b) = n, dan is a = 10^m en b = 10^n.\nDus ab = 10^m · 10^n = 10^(m+n) → log(ab) = m + n = log(a) + log(b). ✓\n\n**Voorbeelden**:\n\n**log(2 · 5) = log(2) + log(5)**\n• log(2) ≈ 0.301, log(5) ≈ 0.699 → som ≈ 1.000.\n• Direct: log(10) = 1. ✓\n\n**log(8) = log(2³) = log(2 · 2 · 2) = 3·log(2)**\n• Volgens deze regel: log(2) + log(2) + log(2) = 3·log(2). ✓\n• Of via formule 3 (volgende stap): log(2³) = 3·log(2). ✓\n\n**log₂(8 · 4) = log₂(8) + log₂(4) = 3 + 2 = 5**\n• Check: 8 · 4 = 32 = 2⁵. ✓\n\n**Toepassing**: ingewikkelde producten omzetten naar simpeler sommen.\n\n• log(36) = log(6²) = log(6 · 6) = 2·log(6) = 2·(log(2) + log(3))\n\n**Veel-gemaakte fout**:\n• log(a + b) ≠ log(a) + log(b) (deze regel werkt alleen voor product, niet voor som!)\n• log(2 + 3) = log(5), niet log(2) + log(3).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">log(ab) = log(a) + log(b)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.text}" font-size="12" font-family="monospace">log(2·5) = log(2) + log(5)</text>
<text x="35" y "94" fill="${COLORS.text}" font-size="12" font-family="monospace">log₂(8·4) = log₂(8) + log₂(4)</text>
<text x="35" y "112" fill="${COLORS.text}" font-size="12" font-family="monospace">       = 3 + 2 = 5</text>
<line x1="30" y1="125" x2="270" y2="125" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "146" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">⚠ alleen voor PRODUCT, niet som:</text>
<text x="35" y "164" fill="${COLORS.alt}" font-size="11" font-family="monospace">log(a + b) ≠ log(a) + log(b)</text>
</svg>`,
    checks: [
      {
        q: "*Versimpel: log(3) + log(7).*",
        options: [
          "log(21)",
          "log(10)",
          "log(3+7)",
          "log(3·log(7))",
        ],
        answer: 0,
        wrongHints: [
          null,
          "log(3) + log(7) ≠ log(3 + 7). De regel zegt: som van logs = log van product.",
          "Eigen woorden — som van logs = log van product, niet log van som.",
          "Geen logische bewerking. log(a) + log(b) = log(a·b).",
        ],
      },
    ],
  },
  {
    title: "Eigenschap 2: log(a/b) = log(a) − log(b)",
    explanation: "**Tweede log-eigenschap**: de logaritme van een **deling** is het **verschil** van de logaritmen.\n\n**Formule**: **log(a/b) = log(a) − log(b)**\n\n**Bewijs (intuïtief)**:\na/b = 10^m / 10^n = 10^(m-n) → log(a/b) = m - n = log(a) - log(b). ✓\n\n**Voorbeelden**:\n\n**log(100/10) = log(100) − log(10) = 2 − 1 = 1**\n• Check: 100/10 = 10, en log(10) = 1. ✓\n\n**log₂(32/4) = log₂(32) − log₂(4) = 5 − 2 = 3**\n• Check: 32/4 = 8 = 2³, dus log₂(8) = 3. ✓\n\n**log₃(81/3) = log₃(81) − log₃(3) = 4 − 1 = 3**\n• Check: 81/3 = 27 = 3³. ✓\n\n**Toepassing**:\n\n**log(0.5) = log(1/2) = log(1) − log(2) = 0 − log(2) = -log(2) ≈ -0.301**\n\nDus: een log van een breuk kleiner dan 1 wordt automatisch negatief — maar deze regel maakt het overzichtelijk.\n\n**Combinatie van regels 1 en 2**:\n\n**log((a · b) / c) = log(a) + log(b) − log(c)**\n\n**Voorbeeld**:\n• log((6 · 4) / 8) = log(6) + log(4) − log(8) = log(3) + log(2) + log(4) − log(8)\n\nMaar simpeler: 6·4/8 = 24/8 = 3, dus log(3) direct.\n\n**Veel gemaakte fout**:\n• log(a − b) ≠ log(a) − log(b). (Werkt alleen voor deling, niet voor aftrek!)",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">log(a/b) = log(a) − log(b)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.text}" font-size="12" font-family="monospace">log(100/10) = 2 − 1 = 1</text>
<text x="35" y "94" fill="${COLORS.text}" font-size="12" font-family="monospace">log₂(32/4) = 5 − 2 = 3</text>
<text x="35" y "112" fill="${COLORS.text}" font-size="12" font-family="monospace">log(0.5) = log(1) − log(2)</text>
<text x="35" y "128" fill="${COLORS.text}" font-size="12" font-family="monospace">       = -log(2)</text>
<line x1="30" y1="140" x2="270" y2="140" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "160" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">⚠ alleen voor DELING:</text>
<text x="35" y "176" fill="${COLORS.alt}" font-size="11" font-family="monospace">log(a − b) ≠ log(a) − log(b)</text>
</svg>`,
    checks: [
      {
        q: "*Versimpel: log₂(64) − log₂(8).*",
        options: [
          "log₂(8) = 3",
          "log₂(56)",
          "log₂(72)",
          "5",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Aftrekken in argument werkt niet zo. Regel: verschil van logs = log van deling. 64/8 = 8.",
          "Optellen klopt ook niet. log_a − log_b = log(a/b), niet log(a + b).",
          "log_2(64) - log_2(8) = 6 - 3 = 3. Maar het antwoord vraagt om de uitdrukking — log_2(8) = 3.",
        ],
      },
    ],
  },
  {
    title: "Eigenschap 3: log(a^n) = n · log(a)",
    explanation: "**Derde log-eigenschap**: de logaritme van een **macht** kun je naar voren halen als **factor**.\n\n**Formule**: **log(a^n) = n · log(a)**\n\n**Bewijs (intuïtief)**:\na^n = a · a · a · ... (n keer)\nlog(a^n) = log(a · a · ... · a) = log(a) + log(a) + ... + log(a) = n · log(a).\n\n**Voorbeelden**:\n\n**log(2³) = 3 · log(2)** ≈ 3 · 0.301 ≈ 0.903\n• Check: 2³ = 8, log(8) ≈ 0.903. ✓\n\n**log₂(2⁵) = 5 · log₂(2) = 5 · 1 = 5** ✓ (komt overeen met de speciale regel)\n\n**log(1000) = log(10³) = 3 · log(10) = 3 · 1 = 3** ✓\n\n**Toepassing — exponent 'naar beneden halen'**:\n\nDeze regel is **cruciaal** voor het oplossen van exponentiële vergelijkingen (komt in volgende hoofdstuk).\n\n**Voorbeeld**: 2^x = 50.\n• Neem log van beide kanten: log(2^x) = log(50)\n• Pas regel 3 toe: x · log(2) = log(50)\n• Los op: x = log(50) / log(2) ≈ 1.699 / 0.301 ≈ 5.643. ✓\n\n**Andere voorbeelden**:\n• log(36) = log(6²) = 2 · log(6).\n• log_a(b^n) = n · log_a(b).\n\n**Combinaties** van alle 3 regels:\n\n**log((x² · y) / z³) = log(x²) + log(y) − log(z³) = 2·log(x) + log(y) − 3·log(z)**\n\nDeze is examen-niveau havo wis A en wis B.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">log(a^n) = n · log(a)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.text}" font-size="12" font-family="monospace">log(2³) = 3 · log(2)</text>
<text x="35" y "94" fill="${COLORS.text}" font-size="12" font-family="monospace">log(1000) = 3 · log(10) = 3</text>
<text x="35" y "112" fill="${COLORS.text}" font-size="12" font-family="monospace">log(36) = 2 · log(6)</text>
<line x1="30" y1="124" x2="270" y2="124" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "144" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">cruciaal voor:</text>
<text x="35" y "162" fill="${COLORS.muted}" font-size="11" font-family="monospace">2^x = 50 → x · log(2) = log(50)</text>
<text x="35" y "178" fill="${COLORS.muted}" font-size="11" font-family="monospace">→ x = log(50)/log(2) ≈ 5.64</text>
</svg>`,
    checks: [
      {
        q: "*Versimpel: log(2⁴).*",
        options: [
          "4 · log(2)",
          "log(8)",
          "2 · log(4)",
          "log(2) · log(4)",
        ],
        answer: 0,
        wrongHints: [
          null,
          "log(8) = log(2³), niet log(2⁴) = log(16).",
          "2·log(4) = 2·log(2²) = 2·2·log(2) = 4·log(2). Toevallig gelijk! Maar de directe formule is 4·log(2).",
          "Geen geldige eigenschap. log(a^n) = n·log(a), geen vermenigvuldiging van logs.",
        ],
      },
    ],
  },

  // ─── D. Toepassing ────────────────────────────────────
  {
    title: "Exponentiële vergelijkingen oplossen",
    explanation: "Logaritmen worden vaak gebruikt om **exponentiële vergelijkingen** op te lossen — vergelijkingen waar x in de exponent staat.\n\n**Voorbeeld**: los op: **2^x = 100**.\n\n**Stappenplan**:\n1. Neem log (of ln) van beide kanten: log(2^x) = log(100).\n2. Pas regel 3 toe: x · log(2) = log(100).\n3. Los op: x = log(100) / log(2).\n4. Bereken: x = 2 / 0.301 ≈ **6.644**.\n5. Check: 2^6.644 ≈ 100. ✓\n\n**Welke log neem je?** \n• Meestal log (basis 10) of ln (basis e) — beide werken.\n• Als grondtal van macht is 10 → neem log (eenvoudiger).\n• Als grondtal van macht is e → neem ln (eenvoudiger).\n• Andere grondtallen → log of ln, maakt niet uit.\n\n**Voorbeeld 2**: los op: **3^x = 200**.\n• log(3^x) = log(200)\n• x · log(3) = log(200)\n• x = log(200) / log(3) ≈ 2.301 / 0.477 ≈ **4.823**.\n\n**Voorbeeld 3 (havo wisB)**: los op: **5 · 2^x = 80**.\n• Eerst delen door 5: 2^x = 16.\n• 2^x = 2⁴ → x = 4. (Direct, geen log nodig — argument is een macht van het grondtal.)\n\n**Voorbeeld 4** (echt-leven): bevolking groeit met 3% per jaar (g = 1.03). Na hoeveel jaar is de bevolking verdubbeld?\n• N(t) = N₀ · 1.03^t = 2·N₀ → 1.03^t = 2.\n• t · log(1.03) = log(2)\n• t = log(2) / log(1.03) ≈ 0.301 / 0.0128 ≈ **23.4 jaar**.\n\nDat is de **verdubbelingstijd** voor 3% groei: ongeveer 23 jaar.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">2^x = 100 oplossen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.text}" font-size="12" font-family="monospace">2^x = 100         | log</text>
<text x="35" y "92" fill="${COLORS.text}" font-size="12" font-family="monospace">log(2^x) = log(100)</text>
<text x="35" y "110" fill="${COLORS.alt}" font-size="12" font-family="monospace">x · log(2) = log(100)</text>
<text x="35" y "128" fill="${COLORS.text}" font-size="12" font-family="monospace">x = log(100)/log(2)</text>
<text x="35" y "146" fill="${COLORS.good}" font-size="13" font-family="monospace" font-weight="bold">x ≈ 6.644</text>
<text x="150" y "176" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">controleer: 2^6.644 ≈ 100 ✓</text>
</svg>`,
    checks: [
      {
        q: "*Los op: 5^x = 100. Wat is x ongeveer?*",
        options: [
          "x ≈ 2.86 (= log(100)/log(5))",
          "x = 20 (= 100/5)",
          "x = 95",
          "x = 5",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Delen werkt niet — x staat in de exponent. Gebruik log: x = log(100)/log(5).",
          "95 = 100 - 5, geen logische berekening voor exponent.",
          "5⁵ = 3125, niet 100. Te groot.",
        ],
      },
    ],
  },
  {
    title: "Halveringstijd / verdubbelingstijd berekenen",
    explanation: "Bij **halveringstijd** of **verdubbelingstijd** gebruik je log om de tijd uit te rekenen waarin iets halveert of verdubbelt.\n\n**Halveringstijd berekenen**:\n\n**Voorbeeld**: een radioactief element heeft groeifactor 0.97 per jaar (3% afname). Wat is de halveringstijd T?\n\nWe willen: N(T) = ½·N₀.\n• N₀ · 0.97^T = ½ · N₀\n• 0.97^T = 0.5\n• Neem log: T · log(0.97) = log(0.5)\n• T = log(0.5) / log(0.97) ≈ -0.301 / -0.0132 ≈ **22.8 jaar**\n\nElke 22.8 jaar halveert dus de hoeveelheid.\n\n**Verdubbelingstijd berekenen**:\n\n**Voorbeeld**: bevolking groeit 5% per jaar (g = 1.05). Verdubbelingstijd?\n\nWe willen: N(T) = 2·N₀.\n• 1.05^T = 2\n• T · log(1.05) = log(2)\n• T = log(2) / log(1.05) ≈ 0.301 / 0.0212 ≈ **14.2 jaar**\n\n**Vuistregel — regel van 70**: voor kleine groei-percentages r% per jaar is verdubbelingstijd ≈ 70/r.\n• 5% groei → 70/5 = 14 jaar (klopt ongeveer met onze 14.2).\n• 7% groei → 70/7 = 10 jaar.\n• 10% groei → 70/10 = 7 jaar.\n\nDeze vuistregel is een handige snelle schatting — exact via logs.\n\n**Andere toepassingen**:\n• Wanneer is de spaarrekening verdubbeld?\n• Wanneer is de medicijn-concentratie nog 10% van de begin?\n• Wanneer is de auto nog €5000 waard?\n\nAllemaal: zet de uiteindelijke waarde gelijk aan een veelvoud van de begin, dan log toepassen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">verdubbelings- / halveringstijd</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.text}" font-size="11" font-family="monospace">groei 5%/jaar → verdubbelt:</text>
<text x="35" y "92" fill="${COLORS.alt}" font-size="11" font-family="monospace">1.05^T = 2 → T ≈ 14.2 jaar</text>
<text x="35" y "112" fill="${COLORS.text}" font-size="11" font-family="monospace">afname 3%/jaar → halveert:</text>
<text x="35" y "130" fill="${COLORS.alt}" font-size="11" font-family="monospace">0.97^T = ½ → T ≈ 22.8 jaar</text>
<line x1="30" y1="142" x2="270" y2="142" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "162" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">vuistregel van 70:</text>
<text x="35" y "180" fill="${COLORS.muted}" font-size="11" font-family="monospace">verdubbelingstijd ≈ 70 / r%</text>
</svg>`,
    checks: [
      {
        q: "*Een belegging groeit 7% per jaar. Verdubbelingstijd? (gebruik regel van 70)*",
        options: [
          "ongeveer 10 jaar",
          "ongeveer 7 jaar",
          "ongeveer 70 jaar",
          "ongeveer 100 jaar",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het percentage zelf. Regel van 70: T = 70 / r%.",
          "Dat is de regel-constante zelf, niet de uitkomst.",
          "Te lang. Bij 7% groei verdubbelt het binnen ~10 jaar.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Mixed — log-vragen door elkaar",
    explanation: "Vier vragen die alle hoofdstukken combineren.\n\n**Examen-tip**: schrijf elke stap netjes op. Bij eigenschappen-vragen — denk: product → som, deling → verschil, macht → factor.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">log</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">3 eigenschappen 🏆</text>
</svg>`,
    checks: [
      {
        q: "*Wat is log₃(81)?*",
        options: ["4", "27", "3", "81"],
        answer: 0,
        wrongHints: [
          null,
          "27 = 3³. Maar 81 = 3⁴.",
          "log_3(3) = 1. Hier hebben we 81.",
          "81 is het argument, niet de uitkomst. log_3(81) = 4.",
        ],
      },
      {
        q: "*Versimpel: log(50) − log(5).*",
        options: [
          "log(10) = 1",
          "log(45)",
          "log(55)",
          "log(50/log(5))",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Aftrekken in argument werkt niet zo. Regel: verschil van logs = log van deling. 50/5 = 10.",
          "Optellen werkt niet. log(a) - log(b) = log(a/b).",
          "Geen logische bewerking.",
        ],
      },
      {
        q: "*Los op: 2^x = 32. Wat is x?*",
        options: ["5", "16", "30", "0.5"],
        answer: 0,
        wrongHints: [
          null,
          "16 = 32/2 (delen). x staat in exponent — gebruik log of herken: 32 = 2⁵.",
          "30 = 32 - 2 (aftrekken). Geen exponent-berekening.",
          "0.5 zou 2^0.5 = √2 ≈ 1.4 zijn, niet 32.",
        ],
      },
      {
        q: "*Versimpel: log(x³).*",
        options: [
          "3 · log(x)",
          "log(3x)",
          "log(x) + 3",
          "log(x)³",
        ],
        answer: 0,
        wrongHints: [
          null,
          "log(3x) = log(3) + log(x). Maar log(x³) heeft een macht, geen factor.",
          "log(x) + 3 = log(x · 1000). Maar x³ ≠ 1000x.",
          "Geen geldige notatie. log(x)³ = (log(x))³ — anders dan log(x³).",
        ],
      },
    ],
  },
  {
    title: "Examen-stijl",
    explanation: "Drie examen-vragen.\n\n**Tip**: bij ingewikkelde uitdrukkingen — pas eerst de eigenschappen toe (om naar enkele logs te komen), daarna pas getallen invullen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.good}" font-size="32" font-family="Arial" font-weight="bold">examen</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">stijl</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">log-eigenschappen 🎯</text>
</svg>`,
    checks: [
      {
        q: "*Versimpel: 2 · log(3) + log(5).*",
        options: [
          "log(45)",
          "log(11)",
          "log(15)",
          "log(35)",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verkeerde berekening. 2·log(3) = log(9), dan + log(5) = log(9·5) = log(45).",
          "Dat zou 1·log(3) + log(5) = log(15) zijn. Hier hebben we 2·log(3) = log(9).",
          "Verkeerde berekening — log(35) = log(5·7), maar hier rekenen we 9·5 = 45.",
        ],
      },
      {
        q: "*Een populatie groeit met 4% per jaar. Hoeveel jaar duurt het tot ze verdubbeld is? (Gebruik log; antwoord op 1 decimaal)*",
        options: [
          "≈ 17.7 jaar (= log(2)/log(1.04))",
          "≈ 25 jaar",
          "≈ 50 jaar",
          "≈ 4 jaar",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Te lang. Reken: log(2)/log(1.04) ≈ 0.301/0.017 ≈ 17.7.",
          "Veel te lang. Bij 4% groei verdubbelt het binnen ~18 jaar.",
          "Te snel. Bij 4% groei is het na 4 jaar ongeveer 1.17× zoveel, niet verdubbeld.",
        ],
      },
      {
        q: "*Wat is log₂(0.25)?*",
        options: ["-2", "2", "0.25", "-4"],
        answer: 0,
        wrongHints: [
          null,
          "log_2(4) = 2, want 4 = 2². Maar 0.25 = 1/4 = 2⁻².",
          "0.25 is het argument, niet het antwoord.",
          "log_2(1/16) = -4, niet 1/4.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht — alles samen",
    explanation: "Twee laatste vragen, examen-niveau havo 4-5.\n\n**Klaar?** Dan beheers je de basis van logaritmen — voldoende voor:\n• Wis A: groei + financiële wiskunde + log-schalen\n• Wis B: differentiëren van log-functies, integralen met log",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(160,96,255,0.15)" stroke="${COLORS.paars}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.paars}" font-size="32" font-family="Arial" font-weight="bold">log</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.paars}" font-size="22" font-family="Arial" font-weight="bold">📊</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">je beheerst het 🎓</text>
</svg>`,
    checks: [
      {
        q: "*Versimpel: log(x²·y) − log(z).*",
        options: [
          "2·log(x) + log(y) − log(z)",
          "log(x²·y/z)",
          "log(x²) + log(y/z)",
          "Beide: 2·log(x) + log(y) − log(z) én log(x²·y/z)",
        ],
        answer: 3,
        wrongHints: [
          "Gedeeltelijk goed maar er is een nog complete versie. Beide opties zijn wiskundig gelijk.",
          "Gedeeltelijk goed — dit is de gecompacte vorm. Maar er is ook een uitgesplitste versie.",
          "Gedeeltelijk goed — maar een nog completere versie split de log(y/z).",
          null,
        ],
      },
      {
        q: "*Een medicijn-concentratie heeft halveringstijd 4 uur. Na hoeveel uur is er nog 10% over?*",
        options: [
          "≈ 13.3 uur (= 4·log(0.1)/log(0.5))",
          "≈ 8 uur",
          "≈ 40 uur",
          "≈ 16 uur",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Te kort. Na 8 uur (= 2 halveringstijden) is er nog 25% over, niet 10%.",
          "Veel te lang.",
          "Na 16 uur (= 4 halveringstijden) is er nog 6.25% over. Te weinig — 10% komt eerder.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const logaritmen = {
  id: "logaritmen",
  title: "Logaritmen",
  emoji: "🔁",
  level: "havo4-5-vwo",
  subject: "wiskunde",
  topics: ["WI.algebra.machten"],
  intro:
    "Logaritmen voor havo 4-5: log als omkering van macht, log/ln-notatie, drie eigenschappen (log(ab)=log(a)+log(b), log(a/b)=log(a)−log(b), log(aⁿ)=n·log(a)), exponentiële vergelijkingen oplossen, halverings-/verdubbelingstijd. Voorbouw op machten + exponentieel.",
  triggerKeywords: [
    "logaritme", "logaritmen", "log", "ln",
    "log eigenschappen", "log(ab)", "exponentiële vergelijking",
    "verdubbelingstijd berekenen", "halveringstijd berekenen",
    "regel van 70", "log basis 10", "natuurlijke logaritme",
  ],
  chapters,
  steps,
};

export default logaritmen;
