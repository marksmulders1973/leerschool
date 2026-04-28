// Leerpad: Periodieke functies / Sinusoïden — Wiskunde havo 4-5
// 14 stappen in 5 hoofdstukken (A t/m E).
// Voorbouw: goniometrie + parabolen + lineaire-formules.
// Examenstof havo wis B (en deels wis A).
// Conventie in dit pad: graden (niet radialen) — past bij havo-niveau.

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

// SVG-helper voor sinus-grafiek
const sinusGraph = ({ a = 1, b = 1, c = 0, d = 0, color = COLORS.good, xMin = 0, xMax = 360 }) => {
  const sx = 200 / (xMax - xMin);
  const sy = 60;
  const ox = -xMin * sx;
  const oy = 100;
  let path = "";
  for (let x = xMin; x <= xMax; x += 4) {
    const rad = ((x - d) * b * Math.PI) / 180;
    const y = a * Math.sin(rad) + c;
    const px = ox + (x - xMin) * sx;
    const py = oy - y * sy;
    path += `${path === '' ? 'M' : 'L'}${px.toFixed(1)},${py.toFixed(1)} `;
  }
  return `<path d="${path}" stroke="${color}" stroke-width="2" fill="none"/>`;
};

const baseAxesPeriodic = (xMin = 0, xMax = 360) => {
  const sx = 200 / (xMax - xMin);
  const oy = 100;
  let ticks = "";
  for (let x = xMin; x <= xMax; x += 90) {
    const px = -xMin * sx + (x - xMin) * sx;
    ticks += `<line x1="${px}" y1="${oy - 3}" x2="${px}" y2="${oy + 3}" stroke="${COLORS.axis}"/>`;
    ticks += `<text x="${px}" y="${oy + 14}" fill="${COLORS.muted}" font-size="9" font-family="Arial" text-anchor="middle">${x}°</text>`;
  }
  return `
    <line x1="0" y1="${oy}" x2="200" y2="${oy}" stroke="${COLORS.axis}" stroke-width="1.2"/>
    <line x1="${-xMin * sx}" y1="20" x2="${-xMin * sx}" y2="180" stroke="${COLORS.axis}" stroke-width="1.2"/>
    ${ticks}
  `;
};

const stepEmojis = [
  "🌊", "📈", "📉",                    // A. Wat is een periodieke functie?
  "↔️", "↕️", "📏",                    // B. Karakteristieken
  "🅰️", "🅱️", "©",                    // C. Algemene vorm
  "↗️", "🌐",                            // D. Faseverschuiving + toepassingen
  "🎯", "📝", "🏆",                    // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Sinus en cosinus", emoji: "🌊", from: 0, to: 2 },
  { letter: "B", title: "Periode + amplitude + evenwicht", emoji: "📏", from: 3, to: 5 },
  { letter: "C", title: "Algemene vorm y = a·sin(b·x) + c", emoji: "🅰️", from: 6, to: 8 },
  { letter: "D", title: "Faseverschuiving + toepassingen", emoji: "🌐", from: 9, to: 10 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 11, to: 13 },
];

const steps = [
  // ─── A. Sinus en cosinus ──────────────────────────────
  {
    title: "Sinus uit de eenheidscirkel",
    explanation: "Bij **goniometrie** heb je sin(α), cos(α) en tan(α) leren kennen voor hoeken in een rechthoekige driehoek. Daar geldt:\n\n**sin(α) = overstaand / schuin**\n\nMaar sin en cos zijn ook gedefinieerd voor **alle** hoeken (niet alleen 0-90°), via de **eenheidscirkel** (cirkel met straal 1):\n\n• Plot een hoek α vanuit de positieve x-as (tegen de klok in).\n• Het punt op de cirkel heeft coördinaten **(cos(α), sin(α))**.\n\n**Voorbeelden**:\n• α = 0°: punt = (1, 0). Dus cos(0°) = 1, sin(0°) = 0.\n• α = 90°: punt = (0, 1). Dus cos(90°) = 0, sin(90°) = 1.\n• α = 180°: punt = (-1, 0). Dus cos(180°) = -1, sin(180°) = 0.\n• α = 270°: punt = (0, -1). Dus cos(270°) = 0, sin(270°) = -1.\n• α = 360°: terug bij begin. Dus cos(360°) = 1, sin(360°) = 0.\n\n**Sinus en cosinus herhalen** zich elke 360° — dat noemen we een **periodieke functie**.\n\n**Range**: -1 ≤ sin(α) ≤ 1 en -1 ≤ cos(α) ≤ 1 — sin en cos zitten altijd tussen -1 en 1.\n\nIn dit leerpad bekijken we hoe deze functies eruitzien als **grafiek** en hoe je ze kunt aanpassen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">eenheidscirkel — punt = (cos α, sin α)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<circle cx="150" cy="120" r="50" fill="none" stroke="${COLORS.muted}" stroke-width="1"/>
<line x1="100" y1="120" x2="200" y2="120" stroke="${COLORS.muted}" stroke-width="0.5"/>
<line x1="150" y1="70" x2="150" y2="170" stroke="${COLORS.muted}" stroke-width="0.5"/>
<line x1="150" y1="120" x2="190" y2="90" stroke="${COLORS.alt}" stroke-width="2"/>
<circle cx="190" cy="90" r="3" fill="${COLORS.warm}"/>
<text x="195" y="88" fill="${COLORS.warm}" font-size="9" font-family="Arial">(cos α, sin α)</text>
<path d="M 175 120 A 25 25 0 0 0 184 100" fill="none" stroke="${COLORS.alt}" stroke-width="1"/>
<text x="170" y="115" fill="${COLORS.alt}" font-size="10" font-family="Arial">α</text>
</svg>`,
    checks: [
      {
        q: "*Wat is sin(90°)?*",
        options: ["1", "0", "-1", "90"],
        answer: 0,
        wrongHints: [
          null,
          "sin(0°) = 0, niet sin(90°).",
          "sin(270°) = -1, niet sin(90°).",
          "Sin geeft een getal tussen -1 en 1, niet 90 zelf.",
        ],
      },
    ],
  },
  {
    title: "De sinus-grafiek",
    explanation: "De **grafiek van y = sin(x)** ziet er als volgt uit (met x in graden van 0° tot 360°):\n\n• Begint bij **(0°, 0)** — sin(0) = 0.\n• Stijgt tot **(90°, 1)** — maximum.\n• Gaat door **(180°, 0)** — terug op nul.\n• Daalt tot **(270°, -1)** — minimum.\n• Eindigt op **(360°, 0)** — weer terug op nul.\n\nDaarna **herhaalt** de grafiek zich oneindig (periodiek): elke 360° dezelfde vorm.\n\n**Karakteristieke punten**:\n• Maxima: (90°, 1), (450°, 1), (810°, 1), ...\n• Minima: (270°, -1), (630°, -1), ...\n• Nulpunten: (0°, 0), (180°, 0), (360°, 0), ...\n\n**Symmetrie**: sin(x) is **puntsymmetrisch** rondom de oorsprong — sin(-x) = -sin(x).\n\n**Vorm wordt vaak \"sinusoïde\" genoemd** — een vloeiende slingerende curve.\n\n**Toepassingen** waar de sinus-vorm voorkomt:\n• Geluidsgolven\n• Lichtgolven\n• Wisselspanning (elektriciteit)\n• Getijden\n• Slinger-bewegingen\n• Trillingen in de natuurkunde",
    svg: `<svg viewBox="0 0 200 200">
${baseAxesPeriodic()}
${sinusGraph({ a: 1, b: 1, c: 0, color: COLORS.good })}
<circle cx="${100}" cy="${40}" r="3" fill="${COLORS.warm}"/>
<text x="${105}" y="${38}" fill="${COLORS.warm}" font-size="8" font-family="Arial">max</text>
<circle cx="${100 + 100}" cy="${160}" r="3" fill="${COLORS.alt}"/>
<text x="${85 + 100}" y="${158}" fill="${COLORS.alt}" font-size="8" font-family="Arial">min</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">y = sin(x), 0° ≤ x ≤ 360°</text>
</svg>`,
    checks: [
      {
        q: "*Bij welke x is sin(x) maximaal (= 1)?*",
        options: ["x = 90°", "x = 0°", "x = 180°", "x = 360°"],
        answer: 0,
        wrongHints: [
          null,
          "sin(0°) = 0 — beginpunt, niet maximum.",
          "sin(180°) = 0 — terug op nul-lijn.",
          "sin(360°) = 0 — weer terug op nul.",
        ],
      },
    ],
  },
  {
    title: "De cosinus-grafiek (= sinus verschoven)",
    explanation: "**y = cos(x)** lijkt sterk op de sinus-grafiek, maar is **90° eerder** begonnen.\n\n**Karakteristieke punten cosinus**:\n• Begint bij **(0°, 1)** — maximum.\n• Daalt tot **(90°, 0)** — eerste nulpunt.\n• Bereikt minimum bij **(180°, -1)**.\n• Stijgt door **(270°, 0)** — tweede nulpunt.\n• Eindigt op **(360°, 1)** — weer maximum.\n\nGrafisch: cos(x) = sin(x + 90°). De cosinus is **90° naar links verschoven** ten opzichte van sinus.\n\n**Symmetrie**: cos(x) is **lijnsymmetrisch** in de y-as — cos(-x) = cos(x).\n\n**Verschil sin/cos in formule**:\n• sin(0°) = 0, cos(0°) = 1\n• sin(90°) = 1, cos(90°) = 0\n• sin(180°) = 0, cos(180°) = -1\n• sin(270°) = -1, cos(270°) = 0\n\n**Geheugensteun**: 'C' van cosinus en 'C' van constante = begint op een max-waarde (cos(0) = 1, niet 0). Sinus begint op nul.\n\n**Praktisch**: voor veel toepassingen zijn sin en cos uitwisselbaar — de keuze hangt af van het beginmoment van het verschijnsel. In de praktijk zie je ze beide vaak voorbij komen.",
    svg: `<svg viewBox="0 0 200 200">
${baseAxesPeriodic()}
${sinusGraph({ a: 1, b: 1, c: 0, d: -90, color: COLORS.alt })}
<circle cx="0" cy="40" r="3" fill="${COLORS.alt}"/>
<text x="5" y="38" fill="${COLORS.alt}" font-size="8" font-family="Arial">cos(0)=1</text>
<circle cx="100" cy="160" r="3" fill="${COLORS.alt}"/>
<text x="60" y="172" fill="${COLORS.alt}" font-size="8" font-family="Arial">cos(180)=-1</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">y = cos(x) — begint op max (1)</text>
</svg>`,
    checks: [
      {
        q: "*Wat is cos(0°)?*",
        options: ["1", "0", "-1", "90"],
        answer: 0,
        wrongHints: [
          null,
          "Sin(0°) = 0. Maar cos begint op een max-waarde.",
          "cos(180°) = -1. Maar cos(0°) = 1.",
          "Cos geeft een getal tussen -1 en 1.",
        ],
      },
    ],
  },

  // ─── B. Karakteristieken ──────────────────────────────
  {
    title: "Periode (T)",
    explanation: "De **periode** van een periodieke functie is de **lengte** waarna de grafiek zich herhaalt.\n\n**Voor sinus en cosinus**:\n• Periode = **360°** (in graden)\n• Of: 2π in radialen\n\n**Notatie**: vaak geschreven als **T**.\n\n**Voorbeelden**:\n• y = sin(x): periode T = 360°.\n• y = cos(x): periode T = 360°.\n• y = sin(2x): periode T = **180°** (twee keer zo snel).\n• y = sin(½x): periode T = **720°** (twee keer zo langzaam).\n\n**Algemene formule**: voor y = sin(b·x), de periode is **T = 360° / b**.\n\n• b = 1 → T = 360°\n• b = 2 → T = 180°\n• b = 3 → T = 120°\n• b = ½ → T = 720°\n\n**Voorbeeld toepassing**: een hartslag-meter laat een sinusvormige curve zien met periode T = 1 seconde (= 60 slagen per minuut).\n\n**Lezen uit grafiek**: kijk waar de grafiek **één volledige cyclus** heeft afgelegd. Van top tot top, of van nul-stijgend tot volgend nul-stijgend.\n\n**Verband met frequentie**: f = 1/T. Hoe korter de periode, hoe hoger de frequentie.\n• Hoge tonen → korte periode → hoge frequentie.\n• Lage tonen → lange periode → lage frequentie.",
    svg: `<svg viewBox="0 0 200 200">
${baseAxesPeriodic(0, 720)}
${sinusGraph({ a: 1, b: 1, c: 0, color: COLORS.good, xMin: 0, xMax: 720 })}
<line x1="0" y1="100" x2="200" y2="100" stroke="${COLORS.axis}" stroke-width="0.5"/>
<line x1="0" y1="40" x2="55" y2="40" stroke="${COLORS.warm}" stroke-width="1" stroke-dasharray="2 2"/>
<line x1="100" y1="40" x2="100" y2="100" stroke="${COLORS.warm}" stroke-width="1" stroke-dasharray="2 2"/>
<text x="50" y="38" fill="${COLORS.warm}" font-size="9" font-family="Arial" text-anchor="middle">T = 360°</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">y = sin(x) — periode 360°</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de periode van y = sin(2x)?*",
        options: ["180°", "360°", "720°", "90°"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de periode van sin(x). Bij sin(2x): T = 360°/2 = 180°.",
          "Dat zou bij sin(½x) zijn (T = 360°/0.5 = 720°).",
          "Te kort. Reken: T = 360°/b, met b = 2.",
        ],
      },
    ],
  },
  {
    title: "Amplitude (a)",
    explanation: "De **amplitude** is de **maximale uitslag** van een periodieke functie vanaf de evenwichtslijn.\n\n**Voor y = sin(x)** (basis): amplitude = **1**.\n• Maximum: 1, minimum: -1, evenwicht: 0.\n• Verschil tussen evenwicht en max = 1.\n\n**Voor y = a · sin(x)**: amplitude = **|a|** (absolute waarde).\n\n**Voorbeelden**:\n• y = 2·sin(x): amplitude = 2 (max +2, min -2).\n• y = 5·sin(x): amplitude = 5 (max +5, min -5).\n• y = 0.5·sin(x): amplitude = 0.5 (max +0.5, min -0.5).\n• y = -3·sin(x): amplitude = 3 (max +3, min -3 — minteken keert de grafiek om).\n\n**Lezen uit grafiek**: meet de **halve afstand** tussen het hoogste en het laagste punt:\n\n**Amplitude = (max − min) / 2**\n\n• Max = 5, min = -5 → amplitude = (5 - (-5))/2 = 5.\n• Max = 8, min = 2 → amplitude = (8 - 2)/2 = 3 (en evenwicht ligt op 5).\n\n**Toepassing**: bij geluidsgolven hangt de **luidheid** samen met de amplitude — grote amplitude = harde toon, kleine amplitude = zachte toon.\n\nBij **golven in water**: amplitude is de hoogte van een golftop boven het rustige wateroppervlak.\n\n**Belangrijk**: amplitude is altijd **positief** (er kan geen \"negatieve uitslag\" zijn). Een negatieve coëfficiënt -a kantelt de grafiek, maar de amplitude blijft |a|.",
    svg: `<svg viewBox="0 0 200 200">
${baseAxesPeriodic()}
${sinusGraph({ a: 0.6, b: 1, c: 0, color: COLORS.good })}
${sinusGraph({ a: 1, b: 1, c: 0, color: COLORS.warm })}
<line x1="170" y1="60" x2="170" y2="100" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="175" y="80" fill="${COLORS.warm}" font-size="9" font-family="Arial">a=1</text>
<line x1="180" y1="76" x2="180" y2="100" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="185" y="92" fill="${COLORS.good}" font-size="9" font-family="Arial">a=0.6</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">amplitude = uitslag vanaf evenwicht</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de amplitude van y = 4·sin(x)?*",
        options: ["4", "8", "2", "1"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is max - min = 4 - (-4) = 8 (de totale uitslag), niet de amplitude.",
          "2 zou bij y = 2·sin(x) zijn.",
          "1 is de amplitude van y = sin(x). Hier vermenigvuldigen we met 4.",
        ],
      },
    ],
  },
  {
    title: "Evenwichtslijn (c)",
    explanation: "De **evenwichtslijn** is de **horizontale lijn** waar de sinusoïde rondom slingert (= het gemiddelde).\n\n**Voor y = sin(x)** (basis): evenwichtslijn = **y = 0** (de x-as).\n\n**Voor y = sin(x) + c**: evenwichtslijn = **y = c**.\n\n**Voorbeelden**:\n• y = sin(x) + 3: evenwichtslijn = 3 (max = 4, min = 2).\n• y = sin(x) - 2: evenwichtslijn = -2 (max = -1, min = -3).\n• y = 2·sin(x) + 5: evenwichtslijn = 5 (max = 7, min = 3).\n\n**Lezen uit grafiek**: het **gemiddelde** van max en min.\n\n**Evenwichtslijn = (max + min) / 2**\n\n• Max = 7, min = 3 → evenwicht = 5.\n• Max = 1, min = -5 → evenwicht = -2.\n\n**Toepassingen**:\n• Een slinger heeft als evenwichtslijn de **rustpositie**.\n• Een wisselspanning heeft als evenwichtslijn meestal 0V.\n• Bij getijden is de evenwichtslijn het **gemiddelde zee-niveau**.\n• Een dier-populatie kan ook periodiek zijn (groei in de zomer, krimp in de winter) met evenwichtslijn als gemiddeld jaarlijks aantal.\n\n**Voorbeeld**: temperatuur in Amsterdam over een jaar kun je modelleren als sinusoïde:\n• Periode T = 365 dagen.\n• Amplitude a = ~10°C (verschil zomer/winter).\n• Evenwichtslijn c = ~10°C (jaargemiddelde).\n• Formule: temp(d) = 10·sin(...) + 10.",
    svg: `<svg viewBox="0 0 200 200">
${baseAxesPeriodic()}
<line x1="0" y1="${100 - 30}" x2="200" y2="${100 - 30}" stroke="${COLORS.alt}" stroke-width="1.5" stroke-dasharray="4 3"/>
${sinusGraph({ a: 1, b: 1, c: 0.5, color: COLORS.good })}
<text x="170" y="${100 - 33}" fill="${COLORS.alt}" font-size="9" font-family="Arial">y=c</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">evenwicht = (max + min) / 2</text>
</svg>`,
    checks: [
      {
        q: "*Een sinusoïde heeft max = 8 en min = -2. Wat is de evenwichtslijn?*",
        options: ["y = 3", "y = 0", "y = 6", "y = 5"],
        answer: 0,
        wrongHints: [
          null,
          "0 zou alleen kloppen als max en min symmetrisch zijn rond 0. Hier: (8 + -2)/2 = 3.",
          "Verschil/2 = (8 - (-2))/2 = 5 — dat is de amplitude, niet evenwicht.",
          "5 = amplitude, niet evenwicht. Evenwicht = gemiddelde = (max + min)/2 = 3.",
        ],
      },
    ],
  },

  // ─── C. Algemene vorm ─────────────────────────────────
  {
    title: "Algemene vorm: y = a·sin(b·x) + c",
    explanation: "De **algemene vorm** van een sinusoïde is:\n\n**y = a · sin(b · x) + c**\n\nMet drie parameters die je kunt variëren:\n• **a** = amplitude (uitslag)\n• **b** = bepaalt de periode (T = 360°/b)\n• **c** = evenwichtslijn (verticale verschuiving)\n\n**Voorbeeld**: y = 3·sin(2x) + 4\n• a = 3 → amplitude 3 (max 7, min 1)\n• b = 2 → periode T = 360/2 = 180°\n• c = 4 → evenwicht op y = 4\n\n**Stappenplan om grafiek te schetsen**:\n1. Teken de evenwichtslijn y = c.\n2. Bepaal max (= c + a) en min (= c - a) — teken horizontale stippellijnen.\n3. Bepaal de periode T = 360°/b.\n4. Teken één periode: van (0, c), stijgend naar (T/4, c + a) (max), naar (T/2, c) (terug), naar (3T/4, c - a) (min), terug naar (T, c).\n5. Herhaal voor meer perioden.\n\n**Voor cos**: zelfde formule, maar y = a·cos(b·x) + c. Verschil: cos begint op max in plaats van op de evenwichtslijn.\n\n**Lezen van grafiek naar formule** — examen-vraag:\n1. Kijk naar max en min → bereken c (gemiddelde) en a (verschil/2).\n2. Meet één volledige periode → b = 360°/T.\n3. Schrijf y = a·sin(b·x) + c.\n\n**Voorbeeld**: grafiek met max = 5, min = 1, periode = 90°.\n• c = (5+1)/2 = 3, a = (5-1)/2 = 2.\n• T = 90° → b = 360/90 = 4.\n• Formule: y = 2·sin(4x) + 3.",
    svg: `<svg viewBox="0 0 200 200">
${baseAxesPeriodic()}
${sinusGraph({ a: 0.5, b: 2, c: 0.3, color: COLORS.good })}
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">y = a·sin(b·x) + c</text>
</svg>`,
    checks: [
      {
        q: "*Welke parameter bepaalt de amplitude in y = a·sin(b·x) + c?*",
        options: ["a", "b", "c", "x"],
        answer: 0,
        wrongHints: [
          null,
          "b bepaalt de periode (T = 360°/b).",
          "c bepaalt de evenwichtslijn (verticale verschuiving).",
          "x is de variabele, geen parameter.",
        ],
      },
    ],
  },
  {
    title: "Effect van de parameter b (periode)",
    explanation: "De parameter **b** bepaalt **hoe vaak** de sinusoïde herhaalt — dat noemen we de **periode**.\n\n**Periode T = 360° / b**\n\n**Voorbeelden**:\n• y = sin(x) → b = 1 → T = 360°\n• y = sin(2x) → b = 2 → T = 180° (twee keer zo snel)\n• y = sin(3x) → b = 3 → T = 120° (drie keer zo snel)\n• y = sin(½x) → b = 0.5 → T = 720° (twee keer zo langzaam)\n• y = sin(0.1x) → b = 0.1 → T = 3600° (heel langzaam)\n\n**Grafiek-effect**:\n• **b > 1**: grafiek wordt **horizontaal samengedrukt** — méér slingertjes per 360°.\n• **b < 1**: grafiek wordt **horizontaal uitgerekt** — minder slingertjes.\n• **b = 1**: standaard sinus.\n\n**Hoe vind ik b uit grafiek?**\n1. Meet de periode T (van top tot top, of van nul-stijgend tot volgende nul-stijgend).\n2. Bereken: **b = 360° / T**.\n\n**Voorbeeld**: een grafiek heeft top op 30°, volgende top op 90°.\n• Periode T = 90 - 30 = 60°.\n• b = 360 / 60 = 6.\n• Functie: y = sin(6x).\n\n**Toepassing in echt leven**:\n• Geluidsgolven: hogere toon = grotere b = kortere periode = hogere frequentie.\n• Wisselspanning Nederland: 50 Hz = 50 perioden per seconde. Bij T-meting in graden: b = 50 · 360 = 18 000 (per seconde).",
    svg: `<svg viewBox="0 0 200 200">
${baseAxesPeriodic()}
${sinusGraph({ a: 0.6, b: 1, c: 0, color: COLORS.good })}
${sinusGraph({ a: 0.6, b: 2, c: 0, color: COLORS.alt })}
<text x="170" y="35" fill="${COLORS.good}" font-size="9" font-family="Arial">b=1</text>
<text x="170" y="48" fill="${COLORS.alt}" font-size="9" font-family="Arial">b=2</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">b groter → periode korter (sneller)</text>
</svg>`,
    checks: [
      {
        q: "*Een sinusoïde heeft een periode van 60°. Wat is b?*",
        options: ["6", "60", "1/6", "180"],
        answer: 0,
        wrongHints: [
          null,
          "60 is de periode, niet b. Reken: b = 360°/T.",
          "1/6 zou bij periode 2160° horen. Hier: b = 360/60 = 6.",
          "180 is geen logische b-waarde.",
        ],
      },
    ],
  },
  {
    title: "Effect van parameter c (verticale verschuiving)",
    explanation: "De parameter **c** verschuift de hele grafiek **verticaal** omhoog of omlaag.\n\n**y = sin(x) + c**: evenwichtslijn ligt op **y = c** (in plaats van op y = 0).\n\n**Voorbeelden**:\n• y = sin(x) + 3: evenwicht op y = 3 (grafiek 3 omhoog).\n• y = sin(x) - 2: evenwicht op y = -2 (grafiek 2 omlaag).\n• y = sin(x) + 0: standaard (c = 0).\n\n**Visueel effect**:\n• c > 0: grafiek omhoog.\n• c < 0: grafiek omlaag.\n• c = 0: rond de x-as.\n\n**Combinatie met a en b**:\n\n**y = a·sin(b·x) + c**\n\n• **a** verandert de uitslag (amplitude)\n• **b** verandert de snelheid (periode)\n• **c** verschuift verticaal (evenwicht)\n\n**Voorbeeld combinatie**: y = 2·sin(x) + 3\n• Amplitude 2, evenwicht 3.\n• Max = 3 + 2 = 5.\n• Min = 3 - 2 = 1.\n• Periode 360° (b = 1).\n\n**Toepassing**: gemiddelde temperatuur ergens.\n• Amsterdam: ongeveer 10°C jaargemiddelde.\n• Amplitude ~10°C (zomer 20°C, winter 0°C).\n• Periode 365 dagen.\n• Formule: T(d) = 10·sin(b·d - φ) + 10 (waarbij we faseverschuiving negeren voor nu).\n\n**Voorbeeld grafiek-lezing**:\n• Max = 12, min = 4, periode = 360°.\n• c = (12 + 4)/2 = 8.\n• a = (12 - 4)/2 = 4.\n• b = 1.\n• Formule: y = 4·sin(x) + 8.",
    svg: `<svg viewBox="0 0 200 200">
${baseAxesPeriodic()}
<line x1="0" y1="${100 - 25}" x2="200" y2="${100 - 25}" stroke="${COLORS.alt}" stroke-width="1" stroke-dasharray="3 2"/>
${sinusGraph({ a: 0.6, b: 1, c: 0.4, color: COLORS.good })}
<text x="170" y="${100 - 28}" fill="${COLORS.alt}" font-size="9" font-family="Arial">y=c</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">c verschuift verticaal</text>
</svg>`,
    checks: [
      {
        q: "*Een grafiek heeft max = 9 en min = 1. Wat is c?*",
        options: ["5", "4", "8", "9"],
        answer: 0,
        wrongHints: [
          null,
          "4 is de amplitude (= (max-min)/2). Maar evenwicht = (max+min)/2 = 5.",
          "8 = max - 1 of min + 7 — geen logische berekening.",
          "9 is de max-waarde, niet het evenwicht.",
        ],
      },
    ],
  },

  // ─── D. Faseverschuiving + toepassingen ───────────────
  {
    title: "Faseverschuiving — y = a·sin(b·(x − d)) + c",
    explanation: "Tot nu toe konden we de grafiek **vertikaal** verschuiven (met c) en **rekken** (met a, b). Nu de **horizontale verschuiving**: de **faseverschuiving**.\n\n**Algemene vorm**:\n\n**y = a · sin(b · (x − d)) + c**\n\nDe parameter **d** verschuift de grafiek **horizontaal** met d eenheden naar **rechts** (als d > 0) of naar **links** (als d < 0).\n\n**Voorbeelden**:\n• y = sin(x − 90°): grafiek 90° naar **rechts** verschoven. Begint dus pas op 90° met stijgen.\n• y = sin(x + 60°): grafiek 60° naar **links** verschoven.\n\n**Speciaal**: y = cos(x) = sin(x + 90°) = sin(x − (-90°)).\nDus cos is sin met d = -90°.\n\n**Hoe lees je d uit grafiek?**\n1. Kijk waar de grafiek **vanuit het evenwicht stijgend** start.\n2. Vergelijk met sin(x), die start daar bij x = 0.\n3. Als jouw grafiek daar pas bij x = d start: faseverschuiving = d.\n\n**Voorbeeld**: een grafiek heeft de eerste opwaartse nuldoorgang bij x = 60°. Periode = 360°.\n• Sin start zo bij x = 0, maar deze pas bij x = 60.\n• d = 60°.\n• Formule: y = sin(x - 60°).\n\n**Voor sin/cos volledig samenvatten**:\n\n**y = a · sin(b · (x − d)) + c**\n\n• a = amplitude\n• b = bepaalt periode (T = 360°/b)\n• d = horizontale verschuiving (faseverschuiving)\n• c = verticale verschuiving (evenwicht)\n\nMet deze formule kun je **elke** sinusoïde precies beschrijven.",
    svg: `<svg viewBox="0 0 200 200">
${baseAxesPeriodic()}
${sinusGraph({ a: 0.6, b: 1, c: 0, color: COLORS.muted })}
${sinusGraph({ a: 0.6, b: 1, c: 0, d: 60, color: COLORS.alt })}
<text x="170" y="35" fill="${COLORS.muted}" font-size="9" font-family="Arial">d=0</text>
<text x="170" y="48" fill="${COLORS.alt}" font-size="9" font-family="Arial">d=60°</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">d > 0 → naar rechts</text>
</svg>`,
    checks: [
      {
        q: "*y = sin(x − 90°) — wat doet de -90°?*",
        options: [
          "Grafiek 90° naar rechts verschoven",
          "Grafiek 90° naar links",
          "Grafiek omgekeerd",
          "Grafiek hoger",
        ],
        answer: 0,
        wrongHints: [
          null,
          "(x - d) met positieve d schuift naar rechts, niet links.",
          "Omkering zou een minteken voor de hele functie zijn.",
          "Verticale verschuiving zou bij c zitten, niet bij d.",
        ],
      },
    ],
  },
  {
    title: "Toepassingen — geluid, getij, slinger",
    explanation: "Sinusoïden komen overal in de natuur en techniek voor.\n\n**1. Geluidsgolven**\n• Een **toon** = sinusoïde van luchtdruk in de tijd.\n• Amplitude = luidheid (in dB).\n• Periode = toonhoogte (440 Hz = de A van een stemvork).\n• Een **akkoord** = som van meerdere sinusoïden.\n\n**2. Getijden** (eb en vloed)\n• Periode ≈ 12 uur 25 minuten (twee keer per dag).\n• Amplitude varieert per locatie (Nederland: ~1-2 m, Bay of Fundy: 16 m).\n• Evenwichtslijn = gemiddeld zee-niveau.\n• Faseverschuiving hangt af van locatie en tijd.\n\n**3. Slinger**\n• Een slinger swing-t periodiek.\n• Periode T = 2π·√(L/g) (formule, waarbij L = lengte, g = zwaartekracht).\n• Amplitude = maximale uitslag vanuit rust.\n\n**4. Wisselspanning** (elektriciteit)\n• Stopcontact in NL: 230V wisselspanning, 50Hz.\n• Periode = 1/50 sec = 20 milliseconden.\n• Amplitude = 325V (= 230 · √2, want 230V is de \"effectieve\" waarde).\n\n**5. Biologische cycli**\n• Hartslag (~60 BPM = periode 1 sec).\n• Slaap-waak ritme (24h periode = circadiaan).\n• Menstruatiecyclus (~28 dagen).\n• Seizoenen in dier-populaties.\n\n**6. Trillingen**\n• Een vleugel die trilt → sinusoïdale beweging.\n• Een snaar van een gitaar → sinusoïdale luchtdruk.\n• Aardbevingen → sinusoïdale schok-golven (in eerste benadering).\n\n**Voorbeeld berekening**: temperatuur in Maastricht over een jaar.\n• Gemiddelde: ~10°C → c = 10\n• Verschil zomer/winter: ~20°C → amplitude a = 10\n• Periode: 365 dagen → b = 360°/365 ≈ 0.987° per dag\n• Faseverschuiving: warmste dag rond 21 juli ≈ dag 202 → d = 202\n• Formule: T(dag) = 10·sin(0.987·(dag − 202 − 91)) + 10\n  *(de extra -91 corrigeert zodat warmste dag de top is, niet de eerste opgaande nuldoorgang)*\n\nIngewikkeld? Ja — daarom geven examenvragen meestal de formule, en moet je 'm interpreteren of er een vraag mee oplossen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">sinusoïden in echt leven</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.text}" font-size="11" font-family="Arial">🔊 geluid (toonhoogte = freq)</text>
<text x="35" y "92" fill="${COLORS.text}" font-size="11" font-family="Arial">🌊 getij (~12.5h periode)</text>
<text x="35" y "108" fill="${COLORS.text}" font-size="11" font-family="Arial">⏰ slinger (T = 2π·√(L/g))</text>
<text x="35" y "124" fill="${COLORS.text}" font-size="11" font-family="Arial">⚡ stopcontact (50Hz)</text>
<text x="35" y "140" fill="${COLORS.text}" font-size="11" font-family="Arial">❤️ hartslag, slaap-cyclus</text>
<text x="35" y "156" fill="${COLORS.text}" font-size="11" font-family="Arial">🌡️ seizoenen-temperatuur</text>
<text x="150" y "180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">overal waar iets periodiek herhaalt</text>
</svg>`,
    checks: [
      {
        q: "*Een hartslag van 60 slagen per minuut — wat is de periode in seconden?*",
        options: [
          "1 seconde",
          "60 seconden",
          "0.5 seconden",
          "30 seconden",
        ],
        answer: 0,
        wrongHints: [
          null,
          "60 is per minuut. Periode = tijd voor 1 slag = 1/60 minuut = 1 seconde.",
          "0.5 seconde = 120 BPM, niet 60.",
          "30 seconden zou 2 slagen per minuut zijn — heel traag.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Mixed — alles samen",
    explanation: "Vier vragen die alle hoofdstukken combineren.\n\n**Examen-tip**: bij grafiek-vragen — bepaal eerst de drie waarden (a, b, c), dan stel je de formule op.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">sin x</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">a · b · c · d 🏆</text>
</svg>`,
    checks: [
      {
        q: "*y = 5·sin(x) + 2 — wat is de maximum-waarde?*",
        options: ["7", "5", "10", "2"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is alleen de amplitude. Max = c + a = 2 + 5 = 7.",
          "10 zou 2·5 zijn, geen logische berekening.",
          "2 is de evenwichtslijn. Max = 2 + 5 = 7.",
        ],
      },
      {
        q: "*Wat is de periode van y = 3·sin(4x)?*",
        options: ["90°", "360°", "180°", "1440°"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is bij b = 1. Hier b = 4: T = 360°/4 = 90°.",
          "Dat zou bij b = 2 zijn. Hier b = 4 → T = 90°.",
          "1440° = 4 · 360°. Maar de regel is T = 360°/b, niet T = b·360°.",
        ],
      },
      {
        q: "*Een sinusoïde heeft max = 6 en min = -4. Wat is de amplitude?*",
        options: ["5", "10", "1", "6"],
        answer: 0,
        wrongHints: [
          null,
          "10 = max - min = totale uitslag. Amplitude = (max - min)/2 = 5.",
          "1 = (max + min)/2 = evenwicht, niet amplitude.",
          "6 = max-waarde. Amplitude is uitslag vanaf evenwicht: (6 - (-4))/2 = 5.",
        ],
      },
      {
        q: "*Welke parameter in y = a·sin(b·x) + c verschuift de grafiek omhoog?*",
        options: ["c", "a", "b", "x"],
        answer: 0,
        wrongHints: [
          null,
          "a verandert de uitslag (amplitude), niet de positie.",
          "b verandert de periode (snelheid).",
          "x is de variabele, geen parameter.",
        ],
      },
    ],
  },
  {
    title: "Examen-stijl",
    explanation: "Drie examen-vragen.\n\n**Tip**: bij periode-berekeningen — let op of het b is, of een coëfficiënt voor x in de hoek (bv. 2x). T = 360°/b waarbij b de coëfficiënt voor x is.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.good}" font-size="32" font-family="Arial" font-weight="bold">examen</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">stijl</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">a, b, c, d 🎯</text>
</svg>`,
    checks: [
      {
        q: "*\"De temperatuur in een loods volgt y = 5·sin(b·t) + 18 met b = 15° per uur. Wat is de periode in uren?\"*",
        options: [
          "T = 24 uur",
          "T = 15 uur",
          "T = 360 uur",
          "T = 5 uur",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verkeerd berekend. T = 360°/b = 360/15 = 24.",
          "Veel te lang. Reken: T = 360/b waar b = 15°/uur → T = 24.",
          "5 is de amplitude. Periode = 24.",
        ],
      },
      {
        q: "*\"Geluidsgolf: y = 2·sin(360·x). x in seconden. Wat is de frequentie?\"*",
        options: [
          "1 Hz",
          "360 Hz",
          "2 Hz",
          "0.001 Hz",
        ],
        answer: 0,
        wrongHints: [
          null,
          "360 is de coëfficiënt b (graden per seconde). Frequentie = 1/T = b/360 = 1 Hz.",
          "2 is de amplitude (luidheid).",
          "0.001 zou de periode in milliseconden zijn (verkeerd geconverteerd).",
        ],
      },
      {
        q: "*\"y = 2·cos(x − 90°). Wat is een gelijkwaardige sin-vorm?\"*",
        options: [
          "y = 2·sin(x)",
          "y = 2·sin(x − 90°)",
          "y = 2·cos(x + 90°)",
          "y = -2·sin(x)",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat zou cos(x - 90°) ≠ sin(x - 90°). cos(x-90°) = sin(x).",
          "cos(x+90°) = -sin(x), niet hetzelfde als cos(x-90°).",
          "Niet juist — een minteken keert de grafiek om.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht — alles samen",
    explanation: "Twee laatste vragen, examen-niveau havo 4-5.\n\n**Klaar?** Dan beheers je de basis van periodieke functies — voldoende voor:\n• Wis B: sinusoïden, vergelijkingen oplossen, differentiëren van sin/cos.\n• Wis A: praktische toepassingen (geluid, getij, biologische cycli).\n• Natuurkunde: trillingen, golven, wisselspanning.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(160,96,255,0.15)" stroke="${COLORS.paars}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.paars}" font-size="32" font-family="Arial" font-weight="bold">~~~</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.paars}" font-size="22" font-family="Arial" font-weight="bold">🌊</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">je beheerst het 🎓</text>
</svg>`,
    checks: [
      {
        q: "*Een sinusoïde heeft amplitude 4, periode 180°, evenwicht 7. Welke formule?*",
        options: [
          "y = 4·sin(2x) + 7",
          "y = 7·sin(180x) + 4",
          "y = 4·sin(x) + 7",
          "y = 2·sin(180x) + 7",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verkeerd geplaatst. Amplitude = a = 4, evenwicht = c = 7. Periode 180° → b = 360/180 = 2.",
          "Bij T = 360° (= b = 1). Hier T = 180° dus b = 2.",
          "a en b verwisseld.",
        ],
      },
      {
        q: "*\"Een slinger met periode 2 seconden. Wat is b in de sinus-formule (in graden per seconde)?\"*",
        options: [
          "b = 180 (graden per sec)",
          "b = 2",
          "b = 360",
          "b = 0.5",
        ],
        answer: 0,
        wrongHints: [
          null,
          "2 is de periode, niet b. Reken: b = 360°/T = 360/2 = 180.",
          "Bij T = 1 sec is b = 360. Maar T = 2 → b = 180.",
          "0.5 = 1/T = frequentie in Hz, niet b in graden/sec.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const periodiek = {
  id: "periodiek",
  title: "Periodieke functies (sinusoïden)",
  emoji: "🌊",
  level: "havo4-5-vwo",
  subject: "wiskunde",
  topics: ["WI.meetkunde.gonio"],
  intro:
    "Sinusoïden voor havo 4-5: sin/cos uit eenheidscirkel, grafiek-vorm, periode + amplitude + evenwicht + faseverschuiving, algemene vorm y = a·sin(b·(x-d)) + c, met praktische toepassingen — geluid, getij, slinger, wisselspanning, biologische cycli. Voorbouw op goniometrie. Examenstof havo wis B en deels wis A.",
  triggerKeywords: [
    "periodieke functie", "sinusoide", "sinusoïde",
    "sinus grafiek", "cosinus grafiek",
    "periode", "amplitude", "evenwichtslijn", "faseverschuiving",
    "y = a sin(bx) + c", "wisselspanning", "getij sinus",
  ],
  chapters,
  steps,
};

export default periodiek;
