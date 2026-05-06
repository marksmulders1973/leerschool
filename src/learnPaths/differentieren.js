// Leerpad: Differentiëren — Wiskunde havo 4-5
// 14 stappen in 5 hoofdstukken (A t/m E).
// Voorbouw: lineaire-formules + parabolen + machten.
// Examenstof havo wis A én B.

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

const baseAxes = (xMin = -3, xMax = 5, yMin = -2, yMax = 8) => {
  const sx = 200 / (xMax - xMin);
  const sy = 180 / (yMax - yMin);
  const ox = -xMin * sx;
  const oy = 180 - (-yMin * sy);
  return { ox, oy, sx, sy, toX: (x) => ox + x * sx, toY: (y) => oy - y * sy };
};

const stepEmojis = [
  "📐", "📈", "🎯",                    // A. Helling + raaklijn
  "f'", "📋", "✏️",                    // B. Afgeleide
  "🔢", "➕", "✖️",                     // C. Regels
  "🏔️", "🎯",                            // D. Toepassingen
  "🎯", "📝", "🏆",                    // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Helling en raaklijn", emoji: "📐", from: 0, to: 2 },
  { letter: "B", title: "Wat is een afgeleide?", emoji: "f'", from: 3, to: 5 },
  { letter: "C", title: "Regels van differentiëren", emoji: "✖️", from: 6, to: 8 },
  { letter: "D", title: "Toepassingen", emoji: "🏔️", from: 9, to: 10 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 11, to: 13 },
];

const steps = [
  // ─── A. Helling en raaklijn ───────────────────────────
  {
    title: "Helling van een rechte lijn",
    explanation: "Dit ken je al van **lineaire formules**: een rechte lijn y = ax + b heeft een **helling** = a.\n\n**Helling = stijging / horizontale verschuiving**\n\nOf wiskundig: helling = Δy / Δx (= 'verandering in y' delen door 'verandering in x').\n\n**Voorbeelden**:\n• y = 2x + 1 → helling = 2 (per 1 stap rechts gaat de lijn 2 omhoog).\n• y = -x + 3 → helling = -1 (per 1 stap rechts gaat de lijn 1 omlaag).\n• y = 5 (constante) → helling = 0 (geen stijging).\n\n**Bij een rechte lijn**: de helling is **overal hetzelfde** — in elk punt op de lijn.\n\n**Bij een kromme** (zoals een parabool): de helling is **per punt verschillend** — in elk punt is de helling anders. Op het hoogste punt van een berg: helling = 0 (vlak). Op de stijgende helling: positieve helling. Aan de andere kant: negatieve helling.\n\n**Dat is het beginpunt van differentiëren**: een manier om de helling van een kromme **in elk punt** te berekenen.\n\nHet begrip dat we daarvoor invoeren is de **raaklijn** — een rechte lijn die de kromme **net raakt** in één punt. De helling van die raaklijn = de helling van de kromme in dat punt.",
    svg: (() => {
      const { toX, toY } = baseAxes(-1, 5, -1, 8);
      // Rechte lijn y = 2x - 1
      const x1 = -1, y1 = -3;
      const x2 = 5, y2 = 9;
      return `<svg viewBox="0 0 200 200">
<line x1="0" y1="${toY(0)}" x2="200" y2="${toY(0)}" stroke="${COLORS.axis}" stroke-width="1.2"/>
<line x1="${toX(0)}" y1="0" x2="${toX(0)}" y2="200" stroke="${COLORS.axis}" stroke-width="1.2"/>
<line x1="${toX(x1)}" y1="${toY(y1)}" x2="${toX(x2)}" y2="${toY(y2)}" stroke="${COLORS.good}" stroke-width="2"/>
<line x1="${toX(1)}" y1="${toY(1)}" x2="${toX(2)}" y2="${toY(1)}" stroke="${COLORS.warm}" stroke-width="1.5" stroke-dasharray="3 2"/>
<line x1="${toX(2)}" y1="${toY(1)}" x2="${toX(2)}" y2="${toY(3)}" stroke="${COLORS.warm}" stroke-width="1.5" stroke-dasharray="3 2"/>
<text x="${toX(1.5) - 8}" y="${toY(1) - 4}" fill="${COLORS.warm}" font-size="9" font-family="Arial">Δx=1</text>
<text x="${toX(2) + 4}" y="${toY(2)}" fill="${COLORS.warm}" font-size="9" font-family="Arial">Δy=2</text>
<text x="${toX(3.5)}" y="${toY(7) + 5}" fill="${COLORS.good}" font-size="10" font-family="Arial" font-weight="bold">y = 2x - 1</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">helling = Δy/Δx = 2</text>
</svg>`;
    })(),
    checks: [
      {
        q: "*Wat is de helling van de rechte lijn y = 7x + 3?*",
        options: ["7", "3", "10", "1/7"],
        answer: 0,
        wrongHints: [
          null,
          "3 is het y-snijpunt (waar de lijn de y-as snijdt), niet de helling.",
          "10 = 7 + 3 — geen logische berekening voor helling.",
          "1/7 zou de helling van de loodrechte lijn zijn.",
        ],
      },
    ],
  },
  {
    title: "Helling van een kromme — verschilt per punt",
    explanation: "Bij een **kromme** (zoals een parabool y = x²) is de helling **niet overal hetzelfde**.\n\n**Voorbeeld parabool y = x²**:\n• Bij x = -2: lijn helt steil omlaag.\n• Bij x = -1: minder steil.\n• Bij x = 0: helemaal vlak (top van de U).\n• Bij x = 1: weer stijgend.\n• Bij x = 2: steiler stijgend.\n\nDe helling **verandert** afhankelijk van waar je bent op de kromme.\n\n**Hoe meet je de helling in één specifiek punt?**\n\nOp het oog: teken een rechte lijn die de kromme **alleen in dat ene punt raakt** (= **raaklijn**). De helling van die raaklijn = de helling van de kromme in dat punt.\n\n**Voorbeeld** bij parabool y = x², punt (1, 1):\n• Teken een rechte lijn die de parabool alleen raakt bij (1, 1).\n• Die lijn heeft helling 2 (zo blijkt uit berekening).\n• Dus: helling van y = x² in het punt (1, 1) = **2**.\n\n**Notatie**: de helling in een punt heet ook **'instanteneous slope'** (Engels) of in NL **'helling op dat moment'**.\n\n**Differentiëren** is het proces waarmee je voor elke x de bijbehorende helling kunt berekenen — als formule. Voor y = x² blijkt de helling op punt x altijd **2x** te zijn.",
    svg: (() => {
      const { toX, toY } = baseAxes(-3, 4, -1, 9);
      // Parabool y = x²
      const points = [];
      for (let x = -2.5; x <= 3.5; x += 0.2) points.push({ x, y: x * x });
      const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');
      // Raaklijn bij x=1: y = 2x - 1 (helling 2, gaat door (1,1))
      return `<svg viewBox="0 0 200 200">
<line x1="0" y1="${toY(0)}" x2="200" y2="${toY(0)}" stroke="${COLORS.axis}" stroke-width="1.2"/>
<line x1="${toX(0)}" y1="0" x2="${toX(0)}" y2="200" stroke="${COLORS.axis}" stroke-width="1.2"/>
<path d="${path}" stroke="${COLORS.good}" stroke-width="2" fill="none"/>
<line x1="${toX(-0.5)}" y1="${toY(-2)}" x2="${toX(2.5)}" y2="${toY(4)}" stroke="${COLORS.alt}" stroke-width="1.5" stroke-dasharray="3 2"/>
<circle cx="${toX(1)}" cy="${toY(1)}" r="4" fill="${COLORS.warm}" stroke="#000" stroke-width="0.5"/>
<text x="${toX(1) + 6}" y="${toY(1) + 4}" fill="${COLORS.warm}" font-size="9" font-family="Arial">(1,1)</text>
<text x="${toX(2) + 6}" y="${toY(3)}" fill="${COLORS.alt}" font-size="9" font-family="Arial">raaklijn</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">y = x² · helling in (1,1) = 2</text>
</svg>`;
    })(),
    checks: [
      {
        q: "*Bij welke parabool y = x², in welk punt is de helling 0?*",
        options: ["(0, 0) — de top", "(1, 1)", "(-1, 1)", "(2, 4)"],
        answer: 0,
        wrongHints: [
          null,
          "Bij (1, 1) is de helling juist 2 — de parabool stijgt daar.",
          "Bij (-1, 1) helt de parabool omlaag (helling -2).",
          "Bij (2, 4) is de helling 4 — steile stijging.",
        ],
      },
    ],
  },
  {
    title: "De raaklijn als helling-meter",
    explanation: "Een **raaklijn** in een punt is een rechte lijn die de kromme alleen in dat ene punt **raakt** (en niet snijdt).\n\nDe **helling** van de raaklijn = de helling van de kromme in dat punt.\n\n**Voorbeeld bij y = x²**:\n• Bij (1, 1): raaklijn heeft helling 2 → kromme-helling = 2 hier.\n• Bij (2, 4): raaklijn heeft helling 4 → kromme-helling = 4 hier.\n• Bij (-1, 1): raaklijn heeft helling -2 → kromme daalt hier met helling -2.\n• Bij (0, 0): raaklijn is horizontaal → kromme-helling = 0 (top).\n\n**Patroon**: voor y = x² is de helling in punt x altijd **2x**. Dat is een **regel**.\n\n**Algemene regel** voor machten (komt later in dit pad):\n• y = x^n → helling-formule = n·x^(n-1)\n• y = x² → helling = 2·x¹ = 2x\n• y = x³ → helling = 3·x²\n• y = x⁴ → helling = 4·x³\n\nDat is wat **differentiëren** doet: van een functie f(x) maak je de **afgeleide** functie f'(x) die in elk punt de helling geeft.\n\nIn de volgende stappen leer je:\n• De **notatie** f'(x).\n• Hoe je de afgeleide berekent voor allerlei functies.\n• Hoe je 'm gebruikt om problemen op te lossen (toppen vinden, raaklijn-vergelijking).",
    svg: (() => {
      const { toX, toY } = baseAxes(-2, 4, -1, 9);
      const points = [];
      for (let x = -1.5; x <= 3; x += 0.2) points.push({ x, y: x * x });
      const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');
      return `<svg viewBox="0 0 200 200">
<line x1="0" y1="${toY(0)}" x2="200" y2="${toY(0)}" stroke="${COLORS.axis}" stroke-width="1.2"/>
<line x1="${toX(0)}" y1="0" x2="${toX(0)}" y2="200" stroke="${COLORS.axis}" stroke-width="1.2"/>
<path d="${path}" stroke="${COLORS.good}" stroke-width="2" fill="none"/>
<!-- Raaklijn bij (-1,1): helling -2, dus y = -2x - 1 -->
<line x1="${toX(-1.5)}" y1="${toY(2)}" x2="${toX(0.5)}" y2="${toY(-2)}" stroke="${COLORS.alt}" stroke-width="1" stroke-dasharray="2 2"/>
<circle cx="${toX(-1)}" cy="${toY(1)}" r="3" fill="${COLORS.alt}"/>
<text x="${toX(-1) - 22}" y="${toY(1) + 4}" fill="${COLORS.alt}" font-size="8" font-family="Arial">h=-2</text>
<!-- Raaklijn bij (0,0): horizontaal -->
<line x1="${toX(-1)}" y1="${toY(0)}" x2="${toX(1)}" y2="${toY(0)}" stroke="${COLORS.warm}" stroke-width="1" stroke-dasharray="2 2"/>
<circle cx="${toX(0)}" cy="${toY(0)}" r="3" fill="${COLORS.warm}"/>
<text x="${toX(0.5) + 4}" y="${toY(0) + 12}" fill="${COLORS.warm}" font-size="8" font-family="Arial">h=0</text>
<!-- Raaklijn bij (2, 4): helling 4 -->
<line x1="${toX(1)}" y1="${toY(0)}" x2="${toX(3)}" y2="${toY(8)}" stroke="${COLORS.blue}" stroke-width="1" stroke-dasharray="2 2"/>
<circle cx="${toX(2)}" cy="${toY(4)}" r="3" fill="${COLORS.blue}"/>
<text x="${toX(2) + 4}" y="${toY(4)}" fill="${COLORS.blue}" font-size="8" font-family="Arial">h=4</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">y = x² → helling-formule: 2x</text>
</svg>`;
    })(),
    checks: [
      {
        q: "*Bij y = x², wat is de helling in punt (3, 9)?*",
        options: ["6", "9", "3", "0"],
        answer: 0,
        wrongHints: [
          null,
          "9 is de y-waarde van het punt, niet de helling.",
          "3 is de x-waarde, maar de helling is 2x = 2·3 = 6.",
          "Helling 0 is alleen op de top (x = 0).",
        ],
      },
    ],
  },

  // ─── B. Wat is een afgeleide? ─────────────────────────
  {
    title: "Notatie f'(x) — de afgeleide",
    explanation: "De **afgeleide** van een functie f(x) is een **nieuwe functie** die in elk punt de helling geeft van de oorspronkelijke functie.\n\n**Notatie**: schrijf het als **f'(x)** (uitspraak: 'f-accent van x').\n\n**Voorbeeld**:\n• f(x) = x² → afgeleide is f'(x) = 2x\n• f(x) = x³ → f'(x) = 3x²\n• f(x) = 5x → f'(x) = 5\n• f(x) = 7 → f'(x) = 0\n\n**Wat zegt f'(x)**?\nVul een x in en je krijgt de helling van f in dat punt.\n\n• f'(2) = 2·2 = 4 → helling van f(x) = x² bij x = 2 is 4.\n• f'(0) = 2·0 = 0 → helling bij x = 0 is 0 (= de top van de parabool).\n\n**Andere notaties** (komt soms voor):\n• **dy/dx** — Leibniz-notatie. Dezelfde betekenis als f'(x).\n• **df/dx** — variant.\n\nVoor havo: meestal f'(x), soms dy/dx. Beide zijn correct.\n\n**Belangrijk onderscheid**:\n• f(x) zegt **wat de y-waarde is** in punt x.\n• f'(x) zegt **wat de helling is** in punt x.\n• Verschillende getallen, verschillende betekenis.\n\n**Voorbeeld**: f(x) = x², bij x = 3:\n• f(3) = 9 (de y-waarde — het punt op de parabool is (3, 9)).\n• f'(3) = 6 (de helling op dat punt — de parabool stijgt daar met helling 6).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">f(x) → f'(x) — afgeleide</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.text}" font-size="12" font-family="monospace">f(x) = x²</text>
<text x="155" y="76" fill="${COLORS.alt}" font-size="13" font-family="monospace">→</text>
<text x="180" y="76" fill="${COLORS.text}" font-size="12" font-family="monospace">f'(x) = 2x</text>
<text x="35" y="94" fill="${COLORS.text}" font-size="12" font-family="monospace">f(x) = x³</text>
<text x="155" y="94" fill="${COLORS.alt}" font-size="13" font-family="monospace">→</text>
<text x="180" y="94" fill="${COLORS.text}" font-size="12" font-family="monospace">f'(x) = 3x²</text>
<line x1="30" y1="105" x2="270" y2="105" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="126" fill="${COLORS.muted}" font-size="11" font-family="Arial">f(3) = 9 → y-waarde</text>
<text x="35" y="144" fill="${COLORS.muted}" font-size="11" font-family="Arial">f'(3) = 6 → helling daar</text>
<text x="35" y="168" fill="${COLORS.text}" font-size="10" font-family="Arial" font-style="italic">notatie ook: dy/dx</text>
</svg>`,
    checks: [
      {
        q: "*Voor f(x) = x², wat is f'(4)?*",
        options: ["8", "16", "4", "12"],
        answer: 0,
        wrongHints: [
          null,
          "16 = f(4) = 4² (de y-waarde, niet de helling).",
          "4 is de x-waarde. De helling in dat punt is f'(4) = 2·4 = 8.",
          "12 is geen logische berekening hier.",
        ],
      },
    ],
  },
  {
    title: "Differentiëren van een macht: regel n·x^(n-1)",
    explanation: "**Hoofdregel** voor het differentiëren van een macht:\n\n**Als f(x) = x^n, dan f'(x) = n · x^(n-1)**\n\nVerlaag de exponent met 1, en zet de oude exponent als coëfficiënt vooraan.\n\n**Voorbeelden**:\n• f(x) = x → x¹ → f'(x) = 1·x⁰ = **1** (omdat x⁰ = 1)\n• f(x) = x² → f'(x) = 2·x¹ = **2x**\n• f(x) = x³ → f'(x) = 3·x²\n• f(x) = x⁴ → f'(x) = 4·x³\n• f(x) = x⁵ → f'(x) = 5·x⁴\n• f(x) = x¹⁰⁰ → f'(x) = 100·x⁹⁹\n\n**Bewijs (intuïtief)**:\nAls je de definitie van helling toepast op x^n en de limiet neemt voor heel kleine stappen, krijg je n·x^(n-1). De afleiding zelf is voor wisB-niveau, maar de regel werkt altijd.\n\n**Speciale gevallen**:\n• **Constante**: f(x) = 5 → f'(x) = **0** (een rechte lijn op hoogte 5 heeft overal helling 0)\n• **Constante × x**: f(x) = 7x → f'(x) = **7** (rechte lijn met helling 7)\n• **x⁰**: f(x) = x⁰ = 1 → f'(x) = 0 (constante)\n\n**Negatieve exponenten**:\n• f(x) = x⁻¹ = 1/x → f'(x) = -1·x⁻² = -1/x²\n• f(x) = x⁻² → f'(x) = -2·x⁻³\n\n**Wortels** (= machten met breuk-exponent):\n• f(x) = √x = x^(1/2) → f'(x) = (1/2)·x^(-1/2) = 1/(2√x)",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">f(x) = x^n → f'(x) = n·x^(n-1)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="12" font-family="monospace">x¹  → 1</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="12" font-family="monospace">x²  → 2x</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="12" font-family="monospace">x³  → 3x²</text>
<text x="35" y="128" fill="${COLORS.text}" font-size="12" font-family="monospace">x⁵  → 5x⁴</text>
<text x="155" y="74" fill="${COLORS.muted}" font-size="11" font-family="Arial">7   → 0</text>
<text x="155" y="92" fill="${COLORS.muted}" font-size="11" font-family="Arial">7x  → 7</text>
<text x="155" y="110" fill="${COLORS.muted}" font-size="11" font-family="Arial">x⁻¹ → -x⁻²</text>
<text x="155" y="128" fill="${COLORS.muted}" font-size="11" font-family="Arial">√x  → 1/(2√x)</text>
<text x="150" y="166" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">verlaag exponent · zet oude vooraan</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de afgeleide van f(x) = x⁵?*",
        options: ["5x⁴", "5x⁶", "x⁴", "5x⁵"],
        answer: 0,
        wrongHints: [
          null,
          "Verkeerd om — exponent moet **lager**, niet hoger. Regel: x^n → n·x^(n-1).",
          "Vergeet de coëfficiënt niet — de oude exponent (5) komt vooraan.",
          "Verlaag de exponent. x⁵ → 5x⁴.",
        ],
      },
      {
        q: "*Wat is de afgeleide van f(x) = 12?*",
        options: ["0", "12", "12x", "1"],
        answer: 0,
        wrongHints: [
          null,
          "f(x) = 12 is een constante (rechte lijn op hoogte 12). Helling van een vlakke lijn = 0.",
          "12x heeft helling 12. Maar f(x) = 12 is een vlakke lijn, helling 0.",
          "1 zou de afgeleide zijn van x. Hier is f een constante.",
        ],
      },
    ],
  },
  {
    title: "Constante coëfficiënt voor de macht",
    explanation: "Wat als er een **getal** voor de macht staat? Bijvoorbeeld f(x) = 5x³ of f(x) = 7x².\n\n**Regel**: het getal blijft staan, de macht wordt gedifferentieerd.\n\n**Algemeen**: f(x) = a · x^n → f'(x) = a · n · x^(n-1)\n\n**Voorbeelden**:\n• f(x) = 5x³ → f'(x) = 5 · 3x² = **15x²**\n• f(x) = 7x² → f'(x) = 7 · 2x = **14x**\n• f(x) = 3x → f'(x) = 3 · 1 = **3** (helling van rechte lijn)\n• f(x) = -2x⁴ → f'(x) = -2 · 4x³ = **-8x³**\n• f(x) = (1/2)x² → f'(x) = (1/2) · 2x = **x**\n\n**Truc**: het getal vooraan is gewoon een 'meeloper' — je vermenigvuldigt het met de afgeleide van de macht.\n\n**Voorbeeld berekening**:\nf(x) = 4x³\n• Differentieer x³: 3x²\n• Vermenigvuldig met 4: 4 · 3x² = **12x²**\n• Dus f'(x) = 12x²\n\n**Belangrijk**: vergeet de **coëfficiënt** niet. Veelgemaakte fout: alleen de macht differentiëren en de 4 vergeten.\n\n**Voor lineaire termen specifiek**:\n• 3x → 3\n• -7x → -7\n• 12x → 12\n• ax → a (= de helling)\n\nDit klopt met wat we al wisten van lineaire formules y = ax + b: helling = a.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">f(x) = a·x^n → f'(x) = a·n·x^(n-1)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="12" font-family="monospace">5x³  → 15x²</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="12" font-family="monospace">7x²  → 14x</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="12" font-family="monospace">3x   → 3</text>
<text x="35" y="128" fill="${COLORS.text}" font-size="12" font-family="monospace">-2x⁴ → -8x³</text>
<text x="35" y="146" fill="${COLORS.text}" font-size="12" font-family="monospace">½x²  → x</text>
<text x="150" y="176" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">vergeet coëfficiënt nooit!</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de afgeleide van f(x) = 6x⁴?*",
        options: ["24x³", "10x³", "6x³", "24x⁵"],
        answer: 0,
        wrongHints: [
          null,
          "10 = 6 + 4 (optellen). Maar je moet vermenigvuldigen: 6·4 = 24.",
          "De coëfficiënt 6 blijft, maar je vermenigvuldigt 'm met de exponent (4): 6·4 = 24.",
          "Verlaag de exponent (4-1=3), niet verhoog.",
        ],
      },
    ],
  },

  // ─── C. Regels van differentiëren ─────────────────────
  {
    title: "Som-regel — termen apart differentiëren",
    explanation: "**Som-regel**: bij een functie met meerdere termen differentiëer je **elke term apart** en tel je de afgeleides bij elkaar op.\n\n**Algemeen**: (f + g)' = f' + g'\n\n**Voorbeeld**: f(x) = x³ + 5x² − 7x + 2\n\n• Differentieer x³: 3x²\n• Differentieer 5x²: 10x\n• Differentieer -7x: -7\n• Differentieer 2: 0\n\n**f'(x) = 3x² + 10x − 7**\n\nDe constante (2) verdwijnt — die heeft helling 0.\n\n**Andere voorbeelden**:\n\n**f(x) = 2x³ + x² − 4x + 9**\n• 2x³ → 6x²\n• x² → 2x\n• -4x → -4\n• 9 → 0\n• **f'(x) = 6x² + 2x − 4**\n\n**f(x) = x⁴ − 3x³ + 2x − 5**\n• x⁴ → 4x³\n• -3x³ → -9x²\n• 2x → 2\n• -5 → 0\n• **f'(x) = 4x³ − 9x² + 2**\n\n**Tip**: ga **van links naar rechts** door de termen, differentieer elke apart, en zet de uitkomsten netjes achter elkaar (met de juiste tekens).\n\n**Aftrek-regel** is hetzelfde als som met negatieve coëfficiënt — werkt automatisch via tekens.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">som-regel: (f + g)' = f' + g'</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.text}" font-size="11" font-family="monospace">f(x) = x³ + 5x² − 7x + 2</text>
<line x1="35" y1="86" x2="245" y2="86" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="35" y="104" fill="${COLORS.alt}" font-size="11" font-family="monospace">x³  → 3x²</text>
<text x="35" y="120" fill="${COLORS.alt}" font-size="11" font-family="monospace">5x² → 10x</text>
<text x="35" y="136" fill="${COLORS.alt}" font-size="11" font-family="monospace">-7x → -7</text>
<text x="35" y="152" fill="${COLORS.alt}" font-size="11" font-family="monospace">2   → 0</text>
<text x="35" y="172" fill="${COLORS.good}" font-size="12" font-family="monospace" font-weight="bold">f'(x) = 3x² + 10x − 7</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de afgeleide van f(x) = x³ + 4x²?*",
        options: ["3x² + 8x", "3x² + 4x", "x² + 8x", "3x³ + 8x²"],
        answer: 0,
        wrongHints: [
          null,
          "Differentiëer beide termen: x³ → 3x², 4x² → 4·2x = 8x.",
          "Vergeet de coëfficiënt 4 niet — 4x² → 4·2x = 8x, niet 8x zonder de 8.",
          "Verlaag de exponenten in plaats van te verhogen.",
        ],
      },
    ],
  },
  {
    title: "Differentiëren — voorbeeld stap voor stap",
    explanation: "Volledig voorbeeld van een typische examen-vraag.\n\n**Opgave**: differentieer f(x) = 2x⁴ − 3x³ + 5x² − 6x + 8.\n\n**Stap 1** — termen los zetten:\n• 2x⁴\n• -3x³\n• 5x²\n• -6x\n• +8\n\n**Stap 2** — elke term apart differentiëren:\n• 2x⁴ → 2·4·x³ = **8x³**\n• -3x³ → -3·3·x² = **-9x²**\n• 5x² → 5·2·x = **10x**\n• -6x → -6·1 = **-6**\n• 8 → **0**\n\n**Stap 3** — alles samenvoegen:\n**f'(x) = 8x³ − 9x² + 10x − 6**\n\n**Check**: tel het aantal termen — uitgangsfunctie had 5 termen, afgeleide heeft 4 termen (de constante 8 verdwijnt).\n\n**Volgorde-tip**: schrijf altijd in **dalende exponent**:\n• Eerst de hoogste macht (8x³)\n• Dan lager (-9x²)\n• Dan lineair (+10x)\n• Tot slot constante (-6)\n\n**Veelvoorkomende foutjes**:\n• Coëfficiënt vergeten te vermenigvuldigen met de exponent.\n• Verkeerde nieuwe exponent (+1 ipv -1).\n• Constanten vergeten te verwijderen (8 → 0, niet 8 laten staan).\n• Tekens fout (-3x³ → -9x², let op het minteken).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">stap voor stap differentiëren</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="monospace">f(x) = 2x⁴ − 3x³ + 5x² − 6x + 8</text>
<text x="35" y="94" fill="${COLORS.alt}" font-size="11" font-family="monospace">2x⁴ → 8x³</text>
<text x="35" y="108" fill="${COLORS.alt}" font-size="11" font-family="monospace">-3x³ → -9x²</text>
<text x="35" y="122" fill="${COLORS.alt}" font-size="11" font-family="monospace">5x² → 10x</text>
<text x="35" y="136" fill="${COLORS.alt}" font-size="11" font-family="monospace">-6x → -6</text>
<text x="35" y="150" fill="${COLORS.alt}" font-size="11" font-family="monospace">8 → 0</text>
<line x1="30" y1="158" x2="270" y2="158" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="178" fill="${COLORS.good}" font-size="12" font-family="monospace" font-weight="bold">f'(x) = 8x³ − 9x² + 10x − 6</text>
</svg>`,
    checks: [
      {
        q: "*Differentiëer f(x) = 3x³ − 2x² + 7.*",
        options: [
          "f'(x) = 9x² − 4x",
          "f'(x) = 9x² − 4x + 7",
          "f'(x) = 9x³ − 4x² + 7",
          "f'(x) = x³ − x² + 7",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De constante (7) verdwijnt bij differentiëren — die heeft helling 0.",
          "Verlaag de exponent (3-1=2), niet ze hetzelfde houden.",
          "Vergeet de coëfficiënt 3 en 2 niet vermenigvuldigen met de exponent.",
        ],
      },
    ],
  },
  {
    title: "Helling-uitrekenen voor specifiek punt",
    explanation: "Vaak is de vraag: \"wat is de helling van f(x) op het punt x = ...?\"\n\n**Stappenplan**:\n1. Bereken de afgeleide f'(x).\n2. Vul de gegeven x-waarde in f'(x).\n3. Het resultaat is de helling.\n\n**Voorbeeld**: bereken de helling van f(x) = x³ − 2x in punt x = 2.\n\n**Stap 1**: f'(x) = 3x² − 2.\n\n**Stap 2**: vul x = 2 in: f'(2) = 3·4 − 2 = 12 − 2 = **10**.\n\n**Stap 3**: helling op x = 2 is **10** (steile stijging).\n\n**Voorbeeld 2**: voor welke x is de helling van f(x) = x² − 4x gelijk aan 0?\n\n• f'(x) = 2x − 4\n• Stel f'(x) = 0: 2x − 4 = 0 → 2x = 4 → x = 2.\n• Bij x = 2 is de helling 0 — dat is de **top** (of dal) van de parabool.\n\n**Helling = 0 vinden** is een belangrijke techniek voor:\n• **Toppen vinden** (parabool, hogere graad polynomen).\n• **Maximum/minimum** problemen.\n\n**Voorbeeld toepassing**: stel een raket vliegt met hoogte h(t) = -5t² + 30t. Wat is de tijd waarop de hoogste hoogte bereikt wordt?\n\n• h'(t) = -10t + 30\n• Stel = 0: -10t + 30 = 0 → t = 3 sec.\n• Hoogte op t = 3: h(3) = -5·9 + 30·3 = -45 + 90 = **45 meter** (maximum).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">helling in een punt: f'(x_0)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.text}" font-size="11" font-family="monospace">f(x) = x³ − 2x</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="monospace">f'(x) = 3x² − 2</text>
<text x="35" y="112" fill="${COLORS.alt}" font-size="11" font-family="monospace">f'(2) = 3·4 − 2 = 10</text>
<line x1="30" y1="125" x2="270" y2="125" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="146" fill="${COLORS.muted}" font-size="11" font-family="Arial">Voor top: zet f'(x) = 0</text>
<text x="35" y="164" fill="${COLORS.muted}" font-size="11" font-family="Arial">Voor max raket: h'(t) = 0</text>
</svg>`,
    checks: [
      {
        q: "*f(x) = x² + 3x. Wat is de helling in x = 1?*",
        options: ["5", "4", "1", "3"],
        answer: 0,
        wrongHints: [
          null,
          "f'(x) = 2x + 3. Vul x = 1 in: 2·1 + 3 = 5, niet 4.",
          "Dat is x zelf, niet f'(x).",
          "Dat is de constante 3 in f'(x), maar je moet de hele 2x + 3 invullen voor x = 1.",
        ],
      },
    ],
  },

  // ─── D. Toepassingen ──────────────────────────────────
  {
    title: "Extreme waarden — toppen en dalen vinden",
    explanation: "Een **extreme waarde** is een **maximum** of **minimum** van een functie. Op zo'n punt is de **helling 0** (raaklijn is horizontaal).\n\n**Stappenplan om extreme waarden te vinden**:\n1. Bereken f'(x).\n2. Stel f'(x) = 0 → vergelijking oplossen.\n3. De x-waarde(s) zijn de mogelijke extreme punten.\n4. Vul terug in f(x) om de y-waarde te krijgen.\n5. Bepaal of het een maximum of minimum is (volgende stap).\n\n**Voorbeeld**: vind het maximum van f(x) = -x² + 6x − 5.\n\n**Stap 1**: f'(x) = -2x + 6.\n\n**Stap 2**: -2x + 6 = 0 → -2x = -6 → x = 3.\n\n**Stap 3**: x = 3 is mogelijk extreme.\n\n**Stap 4**: f(3) = -9 + 18 − 5 = 4. Dus het extreme punt is **(3, 4)**.\n\n**Stap 5**: dit is een maximum (parabool met negatieve a opent omlaag → top is max).\n\n**Voorbeeld 2**: vind toppen van f(x) = x³ − 3x.\n\n• f'(x) = 3x² − 3 = 0 → 3x² = 3 → x² = 1 → x = ±1.\n• Twee mogelijke extreme: x = 1 en x = -1.\n• f(1) = 1 − 3 = -2 → punt (1, -2).\n• f(-1) = -1 + 3 = 2 → punt (-1, 2).\n\nGrafiek: (-1, 2) is een **maximum** (locale top), (1, -2) is een **minimum** (locale dal).\n\n**Toepassing in echt leven**: optimaliseren — wanneer is iets het hoogst, het laagst, het meest efficiënt?\n• Maximum winst.\n• Minimum kosten.\n• Hoogste punt van een raket.\n• Diepste punt in een geluidsgolf.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">extreme waarden — f'(x) = 0</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="monospace">f(x) = -x² + 6x − 5</text>
<text x="35" y="92" fill="${COLORS.alt}" font-size="11" font-family="monospace">f'(x) = -2x + 6 = 0</text>
<text x="35" y="108" fill="${COLORS.alt}" font-size="11" font-family="monospace">→ x = 3</text>
<text x="35" y="126" fill="${COLORS.alt}" font-size="11" font-family="monospace">f(3) = 4 → top (3, 4)</text>
<line x1="30" y1="138" x2="270" y2="138" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="158" fill="${COLORS.good}" font-size="12" font-family="monospace" font-weight="bold">maximum bij (3, 4)</text>
<text x="35" y="176" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">a < 0 → bergparabool → top is max</text>
</svg>`,
    checks: [
      {
        q: "*Voor f(x) = x² − 6x + 8 — welk x heeft de minimum?*",
        options: ["x = 3", "x = 6", "x = 8", "x = 0"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de coëfficiënt voor x in f. Je moet f'(x) = 0 oplossen: 2x - 6 = 0.",
          "Dat is de constante in f. Voor minimum: f'(x) = 0 → x = 3.",
          "Bij x = 0 is f' = -6, niet 0.",
        ],
      },
    ],
  },
  {
    title: "Vergelijking van een raaklijn",
    explanation: "Een **raaklijn** in een punt heeft een vergelijking van de vorm y = ax + b waarbij:\n• **a** = helling op dat punt = f'(x_0)\n• **b** = zo gekozen dat de lijn door (x_0, f(x_0)) gaat\n\n**Stappenplan voor raaklijn-vergelijking**:\n1. Bereken f(x_0) = de y-waarde van het raakpunt.\n2. Bereken f'(x_0) = de helling op dat punt.\n3. Vorm de vergelijking y = a·x + b waar a = f'(x_0).\n4. Vul (x_0, f(x_0)) in om b te bepalen.\n\n**Voorbeeld**: vind de vergelijking van de raaklijn aan f(x) = x² in punt (2, 4).\n\n**Stap 1**: x_0 = 2, f(2) = 4.\n\n**Stap 2**: f'(x) = 2x → f'(2) = 4. Helling = 4.\n\n**Stap 3**: y = 4x + b.\n\n**Stap 4**: punt (2, 4) op de lijn → 4 = 4·2 + b → b = 4 − 8 = -4.\n\n**Antwoord**: raaklijn = **y = 4x − 4**.\n\n**Check**: punt (2, 4) op de lijn? 4 = 4·2 − 4 = 4. ✓\n\n**Voorbeeld 2**: raaklijn aan f(x) = x³ − x in punt waar x = 1.\n\n• x_0 = 1, f(1) = 1 − 1 = 0. Punt: (1, 0).\n• f'(x) = 3x² − 1 → f'(1) = 3 − 1 = 2. Helling = 2.\n• y = 2x + b. Door (1, 0): 0 = 2·1 + b → b = -2.\n• **Raaklijn: y = 2x − 2**.\n\n**Toepassing**: raaklijn-vergelijkingen worden gebruikt bij optimalisatie, foutschatting en geometrische problemen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">raaklijn: y = ax + b</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="monospace">f(x) = x², punt (2, 4)</text>
<text x="35" y="92" fill="${COLORS.alt}" font-size="11" font-family="monospace">a = f'(2) = 4</text>
<text x="35" y="108" fill="${COLORS.alt}" font-size="11" font-family="monospace">y = 4x + b</text>
<text x="35" y="124" fill="${COLORS.alt}" font-size="11" font-family="monospace">door (2,4): 4 = 8 + b</text>
<text x="35" y="140" fill="${COLORS.alt}" font-size="11" font-family="monospace">→ b = -4</text>
<line x1="30" y1="150" x2="270" y2="150" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="170" fill="${COLORS.good}" font-size="12" font-family="monospace" font-weight="bold">y = 4x − 4</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de raaklijn aan f(x) = x² in punt (1, 1)?*",
        options: ["y = 2x − 1", "y = 2x", "y = x + 0", "y = x²"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna goed — vergeet de b niet. f'(1) = 2, en door (1,1): 1 = 2·1 + b → b = -1.",
          "Helling klopt (a=2 of a=1)? f'(1) = 2·1 = 2, niet 1. Plus de b ontbreekt.",
          "Een raaklijn is een rechte lijn (y = ax + b), geen kromme.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Mixed — alle regels samen",
    explanation: "Vier vragen die alle hoofdstukken combineren.\n\n**Examen-tip**: schrijf altijd:\n1. Eerst de afgeleide-formule f'(x).\n2. Dan vul je in waar nodig.\n3. Controleer het antwoord (logica-check: heeft de uitkomst zin?).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">f'(x)</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">helling per punt 🏆</text>
</svg>`,
    checks: [
      {
        q: "*Differentieer f(x) = 4x³ − 6x² + 2x.*",
        options: [
          "f'(x) = 12x² − 12x + 2",
          "f'(x) = 12x² − 12x",
          "f'(x) = 12x³ − 12x² + 2",
          "f'(x) = 4x² − 6x",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vergeet de afgeleide van 2x niet — die is 2.",
          "Verlaag de exponenten (n-1), niet houden.",
          "Vergeet coëfficiënten niet — 4·3 = 12 (niet 4), 6·2 = 12 (niet 6).",
        ],
      },
      {
        q: "*Bij f(x) = x³ + x, wat is f'(2)?*",
        options: ["13", "9", "10", "12"],
        answer: 0,
        wrongHints: [
          null,
          "f'(x) = 3x² + 1. f'(2) = 3·4 + 1 = 13, niet 9.",
          "Vergeet de +1 niet (afgeleide van x).",
          "f'(x) = 3x² + 1, niet 3x² + 0.",
        ],
      },
      {
        q: "*Voor welk x heeft f(x) = x² − 8x + 12 een minimum?*",
        options: ["x = 4", "x = 8", "x = 12", "x = 0"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de coëfficiënt vóór x. Voor minimum: f'(x) = 0 → 2x - 8 = 0 → x = 4.",
          "Dat is de constante in f. Voor minimum: f'(x) = 0.",
          "Bij x = 0 is f' = -8, niet 0.",
        ],
      },
      {
        q: "*Wat is de raaklijn aan f(x) = x² in punt (3, 9)?*",
        options: [
          "y = 6x − 9",
          "y = 6x",
          "y = 3x + 9",
          "y = x² + 9",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vergeet de b niet — door (3, 9): 9 = 6·3 + b → b = -9.",
          "Helling klopt niet — f'(3) = 6, niet 3.",
          "Een raaklijn is een rechte lijn (y = ax + b), geen parabool.",
        ],
      },
    ],
  },
  {
    title: "Examen-stijl",
    explanation: "Drie examen-vragen.\n\n**Tip**: bij 'extreme waarden' altijd:\n1. f'(x) = 0\n2. los op voor x\n3. vul terug in f(x) voor y-waarde\n4. label als max of min op basis van vorm (parabool, kubische, etc.)",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.good}" font-size="32" font-family="Arial" font-weight="bold">examen</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">stijl</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">f'(x) = 0 → top 🎯</text>
</svg>`,
    checks: [
      {
        q: "*Voor de winst W(x) = -2x² + 40x − 50 (in euro's, x in stuks). Voor welk aantal stuks is de winst maximaal?*",
        options: ["x = 10", "x = 5", "x = 20", "x = 40"],
        answer: 0,
        wrongHints: [
          null,
          "W'(x) = -4x + 40 = 0 → x = 10, niet 5.",
          "Bij x = 20: W' = -40, ver van 0. Voor max: W' = 0.",
          "x = 40 zou W' = -120 geven. Te ver van max.",
        ],
      },
      {
        q: "*De hoogte van een bal (in m) is h(t) = -5t² + 20t. Op welk moment is de bal het hoogst?*",
        options: ["t = 2 s", "t = 4 s", "t = 5 s", "t = 0 s"],
        answer: 0,
        wrongHints: [
          null,
          "h'(t) = -10t + 20 = 0 → t = 2, niet 4.",
          "Bij t = 5: h' = -30. Hoogste punt is bij h' = 0.",
          "Bij t = 0 stijgt de bal nog (h' = 20). Hoogste punt = waar h' = 0.",
        ],
      },
      {
        q: "*Wat is de afgeleide van f(x) = 5x⁻²?*",
        options: [
          "f'(x) = -10x⁻³",
          "f'(x) = -10x⁻¹",
          "f'(x) = 10x⁻³",
          "f'(x) = -2x⁻³",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verlaag exponent: -2 → -3, niet -1.",
          "Coëfficiënt: 5·(-2) = -10 (negatief vanwege de -2). Hier hoort een minteken.",
          "Vergeet de coëfficiënt 5 niet — 5·(-2) = -10.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht — alles samen",
    explanation: "Twee laatste vragen — examen-niveau havo 4-5.\n\n**Klaar?** Dan beheers je de basis van differentiëren — voldoende voor:\n• Wis A: optimalisatie-vraagstukken (winst/kosten)\n• Wis B: helling-vraagstukken (raaklijn, extrema, integreren komt daarna)",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(160,96,255,0.15)" stroke="${COLORS.paars}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.paars}" font-size="32" font-family="Arial" font-weight="bold">d/dx</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.paars}" font-size="22" font-family="Arial" font-weight="bold">📐</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">je beheerst het 🎓</text>
</svg>`,
    checks: [
      {
        q: "*f(x) = 2x³ − 12x² + 18x. Wat zijn de x-coördinaten van de extreme waarden?*",
        options: [
          "x = 1 en x = 3",
          "x = 2 en x = 6",
          "x = 0 en x = 6",
          "Geen extrema",
        ],
        answer: 0,
        wrongHints: [
          null,
          "f'(x) = 6x² - 24x + 18 = 0 → x² - 4x + 3 = 0 → (x-1)(x-3) = 0 → x=1 of x=3.",
          "Onjuiste oplossing van de afgeleide.",
          "Een derdegraads functie heeft meestal twee extrema (een max en een min).",
        ],
      },
      {
        q: "*Wat is de helling van f(x) = -3x² + 12x − 5 in het punt waar x = 1?*",
        options: ["6", "4", "9", "12"],
        answer: 0,
        wrongHints: [
          null,
          "f'(x) = -6x + 12. f'(1) = -6 + 12 = 6, niet 4.",
          "Dat is f(1), niet f'(1).",
          "12 is de constante in f'(x), maar je moet -6x + 12 = -6·1 + 12 = 6 berekenen.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const differentieren = {
  id: "differentieren",
  title: "Differentiëren",
  emoji: "📐",
  level: "havo4-5-vwo",
  subject: "wiskunde",
  topics: ["WI.algebra.machten"],
  intro:
    "Differentiëren voor havo 4-5: helling-concept, raaklijn, afgeleide functie f'(x), regels voor machten, som-regel, en toepassingen — extreme waarden vinden en raaklijn-vergelijkingen opstellen. Examenstof havo wis A en B.",
  triggerKeywords: [
    "differentiëren", "differentieren", "afgeleide", "f'(x)",
    "helling", "raaklijn", "extreme waarden", "minimum maximum",
    "dy/dx", "afleiden", "n·x^(n-1)",
  ],
  chapters,
  steps,
};

export default differentieren;
