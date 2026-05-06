// Leerpad: Rekenen met letters (algebra-basis)
// Conceptueel — werkt voor elk wiskundeboek.
// 15 stappen, 5 hoofdstukken. Op basisniveau.

const COLORS = {
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const stepEmojis = [
  "🔤", "🧩", "✂️",                  // A. Termen
  "📤", "🧮", "➖",                  // B. Haakjes
  "²", "🔻", "✖️",                   // C. Merkwaardige producten
  "🔢", "➗", "🔁",                  // D. Machten
  "🧹", "🏁", "🏆",                  // E. Eindopdrachten
];

const chapters = [
  { letter: "A", title: "Termen en herleiden", emoji: "🔤", from: 0, to: 2 },
  { letter: "B", title: "Haakjes wegwerken", emoji: "📤", from: 3, to: 5 },
  { letter: "C", title: "Merkwaardige producten", emoji: "²", from: 6, to: 8 },
  { letter: "D", title: "Rekenen met machten", emoji: "🔢", from: 9, to: 11 },
  { letter: "E", title: "Vereenvoudigen + eindopdrachten", emoji: "🏁", from: 12, to: 14 },
];

const steps = [
  // ─── A. Termen en herleiden ────────────────────────────
  {
    title: "Wat is een term?",
    explanation: "Een **term** is een stukje van een wiskundige uitdrukking, gescheiden door **+** of **−**.\n\n**Voorbeelden** in 3x + 2y − 5:\n• Term 1: **3x**\n• Term 2: **2y**\n• Term 3: **−5**\n\nDus drie termen.\n\nElke term heeft twee delen:\n• Een **getal** (de coëfficiënt) — bv. de **3** in 3x\n• Soms een **letter** (variabele) — bv. de **x** in 3x\n\nSoms staat er geen getal voor de letter — dan is het stilzwijgend **1**:\n• **x** = 1·x (de coëfficiënt is 1)\n• **−x** = −1·x\n\nEn een term zonder letter heet een **constante** — bv. de **−5** in 3x + 2y − 5.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="40" width="220" height="44" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="68" text-anchor="middle" fill="${COLORS.text}" font-size="20" font-family="Arial">3x + 2y − 5</text>
<text x="73" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">term 1</text>
<text x="148" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">term 2</text>
<text x="220" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">term 3</text>
<line x1="55" y1="84" x2="100" y2="100" stroke="${COLORS.point}" stroke-width="1"/>
<line x1="130" y1="84" x2="148" y2="100" stroke="${COLORS.point}" stroke-width="1"/>
<line x1="195" y1="84" x2="220" y2="100" stroke="${COLORS.point}" stroke-width="1"/>
<text x="150" y="150" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">3 = coëfficiënt    ·    x = variabele</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">termen worden gescheiden door + of −</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel termen zitten in: 4x − 3y + 7?",
        options: ["3", "4", "2", "7"],
        answer: 0,
        wrongHints: [
          null,
          "4 zou tellen als de losse 4 in 4x ook een term zou zijn. Maar 4x is samen één term.",
          "Vergeet niet de constante (de losse 7) als derde term.",
          "7 is een getal binnen één term — niet het aantal termen.",
        ],
      },
    ],
  },
  {
    title: "Soortgelijke termen",
    explanation: "Twee termen zijn **soortgelijk** als ze **dezelfde letter** hebben (en dezelfde macht). Bv:\n\n• 3x en 7x → **soortgelijk** (allebei x)\n• 5y en -2y → **soortgelijk** (allebei y)\n• 4x en 3y → **niet** soortgelijk (verschillende letters)\n• 2x en 5x² → **niet** soortgelijk (verschillende machten)\n• Een constante (zoals 7) is alleen soortgelijk met andere constanten.\n\n**Soortgelijke termen kun je optellen of aftrekken**:\n• 3x + 7x = **10x** (3 + 7 = 10, x blijft)\n• 8y − 5y = **3y**\n• Maar 3x + 2y = **3x + 2y** (kan niet eenvoudiger, niet soortgelijk)\n\n**Trucje**: alleen de coëfficiënten (de getallen) optellen of aftrekken. De letter blijft hetzelfde.",
    svg: `<svg viewBox="0 0 300 200">
<text x="80" y="35" text-anchor="middle" fill="${COLORS.curve}" font-size="12" font-family="Arial" font-weight="bold">soortgelijk ✓</text>
<text x="220" y="35" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="12" font-family="Arial" font-weight="bold">niet soortgelijk ✗</text>
<line x1="150" y1="20" x2="150" y2="190" stroke="${COLORS.text}" stroke-width="1" opacity="0.3"/>
<text x="80" y="65" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">3x  en  7x</text>
<text x="80" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">5y  en  -2y</text>
<text x="80" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">8  en  -3</text>
<text x="220" y="65" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">3x  en  2y</text>
<text x="220" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">x  en  x²</text>
<text x="220" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">5  en  3x</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">3x + 7x = 10x</text>
<text x="150" y="182" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">alleen coëfficiënten optellen, letter blijft</text>
</svg>`,
    checks: [
      {
        q: "Welke twee termen zijn soortgelijk?",
        options: ["4a en 9a", "3x en 3y", "x en x²", "5 en 5y"],
        answer: 0,
        wrongHints: [
          null,
          "Verschillende letters (x vs y) → niet soortgelijk.",
          "x en x² hebben verschillende machten → niet soortgelijk.",
          "5 is constante, 5y heeft een variabele → niet soortgelijk.",
        ],
      },
    ],
  },
  {
    title: "Herleiden — vereenvoudigen door soortgelijke termen samen te trekken",
    explanation: "**Herleiden** = een uitdrukking zo eenvoudig mogelijk schrijven door **soortgelijke termen samen te trekken**.\n\n**Voorbeeld 1**: 3x + 5x − 2x\n• Allemaal x-termen → optellen/aftrekken: 3 + 5 − 2 = **6**\n• Resultaat: **6x**\n\n**Voorbeeld 2**: 2x + 5y − 3x + 2y\n• x-termen: 2x − 3x = **−x**\n• y-termen: 5y + 2y = **7y**\n• Resultaat: **−x + 7y**\n\n**Voorbeeld 3**: 4a + 6 − 2a − 9\n• a-termen: 4a − 2a = **2a**\n• constanten: 6 − 9 = **−3**\n• Resultaat: **2a − 3**\n\n**Stappenplan**:\n1. Groepeer soortgelijke termen (mentaal of op papier)\n2. Tel/trek de coëfficiënten op/af\n3. Schrijf het resultaat netjes",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="36" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="44" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">2x + 5y − 3x + 2y</text>
<text x="65" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">x: 2x − 3x = −x</text>
<text x="65" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial">y: 5y + 2y = 7y</text>
<line x1="50" y1="115" x2="200" y2="115" stroke="${COLORS.curve}" stroke-width="0.7"/>
<rect x="55" y="130" width="180" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="145" y="154" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">−x + 7y</text>
<text x="150" y="186" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">soortgelijke termen samen trekken</text>
</svg>`,
    checks: [
      {
        q: "Herleid: 5x + 3 − 2x + 4.",
        options: [
          "3x + 7",
          "10x",
          "5x + 7",
          "12x",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt alle getallen en x'en als één gegroepeerd. Maar x-termen en constanten zijn niet soortgelijk.",
          "Je bent vergeten 2x af te trekken: 5x − 2x = 3x.",
          "Je hebt alles bij elkaar opgeteld zonder rekening te houden met de letters.",
        ],
      },
    ],
  },

  // ─── B. Haakjes wegwerken ────────────────────────────
  {
    title: "a(b + c) = ab + ac",
    explanation: "**Haakjes wegwerken** = een uitdrukking met haakjes ompschrijven naar één zonder haakjes.\n\n**Hoofdregel**: a · (b + c) = a·b + a·c\n\nIn woorden: vermenigvuldig **elk** ding binnen de haakjes met wat ervoor staat.\n\n**Voorbeelden**:\n• 3(x + 5) = 3·x + 3·5 = **3x + 15**\n• 4(2y − 3) = 4·2y − 4·3 = **8y − 12**\n• 5(a + b) = **5a + 5b**\n• x(x + 4) = x·x + x·4 = **x² + 4x**\n\n**Tip**: vergeet **niet** de tweede vermenigvuldiging. Veel leerlingen schrijven 3(x + 5) = 3x + 5 (fout). Je moet 3 ook keer 5 doen!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="40" width="220" height="50" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="8"/>
<text x="80" y="73" text-anchor="middle" fill="${COLORS.text}" font-size="20" font-family="Arial">3</text>
<text x="115" y="73" text-anchor="middle" fill="${COLORS.text}" font-size="20" font-family="Arial">·</text>
<text x="180" y="73" text-anchor="middle" fill="${COLORS.text}" font-size="20" font-family="Arial">(x + 5)</text>
<line x1="80" y1="84" x2="155" y2="105" stroke="${COLORS.point}" stroke-width="1.5"/>
<line x1="80" y1="84" x2="220" y2="105" stroke="${COLORS.point}" stroke-width="1.5"/>
<text x="150" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-family="Arial">= 3·x + 3·5</text>
<rect x="80" y="150" width="140" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 3x + 15</text>
</svg>`,
    checks: [
      {
        q: "Werk de haakjes weg: 4(x + 7).",
        options: ["4x + 28", "4x + 7", "x + 28", "11x"],
        answer: 0,
        wrongHints: [
          null,
          "Je bent de 4 vergeten te vermenigvuldigen met 7. 4·7 = 28.",
          "Je hebt alleen de + 7 overgenomen. Maar je moet ook 4·x = 4x doen.",
          "11x = 4 + 7 keer x. Maar haakjes wegwerken: 4·x én 4·7 apart.",
        ],
      },
      {
        q: "Werk weg: 5(2x − 3).",
        options: ["10x − 15", "10x − 3", "7x − 8", "5x − 15"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt de 5 niet keer 3 gedaan. 5·3 = 15.",
          "Je hebt de 2 niet meegenomen. 5·2x = 10x.",
          "Je hebt de 5 niet vermenigvuldigd met 2x. Het is 5·2x = 10x.",
        ],
      },
    ],
  },
  {
    title: "Min vóór de haakjes",
    explanation: "Pas op als er een **minteken** vóór de haakjes staat. Dan **draaien alle tekens** binnen de haakjes om.\n\n**Voorbeeld**: −(x + 5)\n\nDit is hetzelfde als −1 · (x + 5):\n• −1 · x = −x\n• −1 · 5 = −5\n• Totaal: **−x − 5**\n\nDus: −(x + 5) = **−x − 5** (allebei minteken).\n\n**Voorbeeld 2**: −(3y − 4)\n• −1 · 3y = −3y\n• −1 · (−4) = +4 (min × min = plus!)\n• Totaal: **−3y + 4**\n\n**Vuistregel**: bij min vóór de haakjes verandert élk teken binnen:\n• plus wordt min\n• min wordt plus\n\nVeelgemaakte fout: alleen de eerste term draaien en de tweede vergeten. Pas op!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="30" width="220" height="40" fill="rgba(255,112,67,0.15)" stroke="${COLORS.curveAlt}" stroke-width="2" rx="6"/>
<text x="150" y="57" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-family="Arial">−(3y − 4)</text>
<text x="55" y="100" fill="${COLORS.text}" font-size="13" font-family="Arial">−1 · 3y = −3y</text>
<text x="55" y="125" fill="${COLORS.text}" font-size="13" font-family="Arial">−1 · (−4) = +4</text>
<text x="200" y="115" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-style="italic">(min × min)</text>
<rect x="55" y="140" width="180" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="145" y="164" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">−3y + 4</text>
<text x="150" y="192" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">alle tekens draaien om</text>
</svg>`,
    checks: [
      {
        q: "Werk weg: −(x − 3).",
        options: ["−x + 3", "−x − 3", "x + 3", "x − 3"],
        answer: 0,
        wrongHints: [
          null,
          "De min draait beide tekens om. −x is goed, maar −3 wordt **+3** (min × min).",
          "De min draait elk teken om: x → −x én −3 → +3.",
          "Je hebt het minteken weggelaten. Het maakt wél uit voor het resultaat.",
        ],
      },
    ],
  },
  {
    title: "Combineren: haakjes + soortgelijke termen",
    explanation: "Vaak zijn de twee technieken samen nodig: eerst haakjes weg, dan herleiden.\n\n**Voorbeeld**: 3(x + 2) + 2(x − 1)\n\n**Stap 1**: haakjes wegwerken:\n• 3(x + 2) = 3x + 6\n• 2(x − 1) = 2x − 2\n• Totaal: **3x + 6 + 2x − 2**\n\n**Stap 2**: soortgelijke termen samentrekken:\n• x-termen: 3x + 2x = 5x\n• constanten: 6 − 2 = 4\n• Resultaat: **5x + 4**\n\n**Voorbeeld 2**: 4(a + 3) − 2(a + 5)\n• 4(a + 3) = 4a + 12\n• −2(a + 5) = −2a − 10 (let op: minteken!)\n• Som: 4a + 12 − 2a − 10 = (4a − 2a) + (12 − 10) = **2a + 2**\n\nAltijd: **eerst haakjes, dan herleiden**.",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="32" fill="${COLORS.text}" font-size="13" font-family="Arial">3(x + 2) + 2(x − 1)</text>
<line x1="50" y1="42" x2="220" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="60" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">stap 1: haakjes</text>
<text x="55" y="82" fill="${COLORS.text}" font-size="13" font-family="Arial">3x + 6 + 2x − 2</text>
<text x="55" y="108" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">stap 2: soortgelijke</text>
<text x="55" y="130" fill="${COLORS.text}" font-size="13" font-family="Arial">5x + 4</text>
<rect x="55" y="144" width="120" height="34" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="115" y="167" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">5x + 4</text>
</svg>`,
    checks: [
      {
        q: "Werk uit: 2(x + 4) + 3(x − 2).",
        options: ["5x + 2", "5x + 14", "5x − 2", "6x + 6"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 8 + 6 gedaan ipv 8 − 6. Reken: 2(x+4) = 2x+8, 3(x−2) = 3x−6. Samen: 5x + 2.",
          "−2 zou kloppen als 2(x+4) iets anders gaf. Reken: 2x+8 + 3x−6 = 5x+2.",
          "6x = 2 + 4. Maar 2(x+4) = 2x+8, niet (2+4)x. Vermenigvuldig wél de coëfficiënt met de x.",
        ],
      },
    ],
  },

  // ─── C. Merkwaardige producten ────────────────────────────
  {
    title: "(a + b)² — wat is het?",
    explanation: "Een speciaal geval: **(a + b)²** = (a + b)(a + b) — een uitdrukking in het kwadraat.\n\n**Hoe werk je dit uit?**\n\n(a + b)² = (a + b) · (a + b)\n         = a·a + a·b + b·a + b·b\n         = a² + 2ab + b²\n\n**De regel**:\n\n**(a + b)² = a² + 2ab + b²**\n\nDit heet een **merkwaardig product**.\n\n**Voorbeelden**:\n• (x + 3)² = x² + 2·x·3 + 3² = **x² + 6x + 9**\n• (y + 5)² = y² + 10y + 25\n• (2x + 1)² = (2x)² + 2·2x·1 + 1² = **4x² + 4x + 1**\n\n**Veelgemaakte fout**: denken dat (a + b)² = a² + b². **Fout!** De middelste term **2ab** vergeten — niet doen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="47" text-anchor="middle" fill="${COLORS.text}" font-size="18" font-family="Arial">(a + b)² = a² + 2ab + b²</text>
<text x="55" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">(x + 3)² = x² + 6x + 9</text>
<text x="55" y="115" fill="${COLORS.text}" font-size="13" font-family="Arial">(y + 5)² = y² + 10y + 25</text>
<rect x="40" y="135" width="220" height="40" fill="rgba(255,112,67,0.15)" stroke="${COLORS.curveAlt}" stroke-width="1.5" rx="6"/>
<text x="150" y="152" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">veelgemaakt: (a+b)² ≠ a² + b²</text>
<text x="150" y="168" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vergeet de middelste term 2ab niet!</text>
</svg>`,
    checks: [
      {
        q: "Werk uit: (x + 4)².",
        options: [
          "x² + 8x + 16",
          "x² + 16",
          "x² + 4x + 16",
          "x² + 4x + 4",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Je bent de middelste term vergeten. (a+b)² = a² + **2ab** + b². Hier 2·x·4 = 8x.",
          "Middelste term klopt niet. 2·x·4 = 8x, niet 4x.",
          "Bij b = 4 is b² = 16, niet 4. Reken b² als laatste term.",
        ],
      },
    ],
  },
  {
    title: "(a − b)² — met een min",
    explanation: "Bij **(a − b)²** verandert er weinig — alleen de middelste term wordt **min**:\n\n**(a − b)² = a² − 2ab + b²**\n\nWaarom blijft b² positief? Omdat (−b)² = b² (kwadraat van een negatief is positief, zie H5).\n\n**Voorbeelden**:\n• (x − 3)² = x² − 6x + 9\n• (y − 5)² = y² − 10y + 25\n• (2x − 1)² = 4x² − 4x + 1\n\n**Schema** voor zowel + als −:\n• Eerste term² (a²)\n• ± middelste term (2ab) — teken volgt de ± in de haakjes\n• Tweede term² (b²) — altijd plus\n\n**Tip**: schrijf altijd alle drie de termen op. Vergeet de middelste niet.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="47" text-anchor="middle" fill="${COLORS.text}" font-size="18" font-family="Arial">(a − b)² = a² − 2ab + b²</text>
<text x="55" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">(x − 3)² = x² − 6x + 9</text>
<text x="55" y="115" fill="${COLORS.text}" font-size="13" font-family="Arial">(y − 5)² = y² − 10y + 25</text>
<text x="55" y="150" fill="${COLORS.muted}" font-size="11" font-family="Arial">middelste term volgt het teken (− bij −b)</text>
<text x="55" y="170" fill="${COLORS.muted}" font-size="11" font-family="Arial">b² blijft altijd positief (kwadraat!)</text>
</svg>`,
    checks: [
      {
        q: "Werk uit: (x − 5)².",
        options: [
          "x² − 10x + 25",
          "x² + 25",
          "x² − 25",
          "x² − 10x − 25",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Middelste term vergeten. (a−b)² = a² − **2ab** + b². 2·x·5 = 10x.",
          "Dat zou (x²)·(−5) of zoiets zijn. (x−5)² geeft een uitdrukking met **drie** termen.",
          "Het eindterm b² is altijd positief, ook als de oorspronkelijke b negatief was. (−5)² = +25.",
        ],
      },
    ],
  },
  {
    title: "(a + b)(a − b) = a² − b²",
    explanation: "Een derde merkwaardig product: **plus en min combineren**.\n\n**(a + b)(a − b) = a² − b²**\n\nDit is verrassend simpel — alleen twee termen, geen middelste term.\n\n**Waarom?** Werk uit:\n(a + b)(a − b) = a·a + a·(−b) + b·a + b·(−b)\n               = a² − ab + ba − b²\n               = a² − b² (de middelste termen heffen elkaar op!)\n\n**Voorbeelden**:\n• (x + 3)(x − 3) = x² − 9\n• (y + 7)(y − 7) = y² − 49\n• (2x + 5)(2x − 5) = 4x² − 25\n\nDeze regel is heel handig — soms kun je 'm omkeerd gebruiken om snel een uitdrukking te factoriseren:\n\n• x² − 16 = (x + 4)(x − 4)\n• x² − 100 = (x + 10)(x − 10)\n\nDat heet **factoriseren met merkwaardige producten**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="47" text-anchor="middle" fill="${COLORS.text}" font-size="18" font-family="Arial">(a + b)(a − b) = a² − b²</text>
<text x="55" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">(x + 3)(x − 3) = x² − 9</text>
<text x="55" y="115" fill="${COLORS.text}" font-size="13" font-family="Arial">(y + 7)(y − 7) = y² − 49</text>
<line x1="40" y1="135" x2="260" y2="135" stroke="${COLORS.curve}" stroke-width="0.7" opacity="0.5"/>
<text x="55" y="155" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">andersom (factoriseren):</text>
<text x="55" y="175" fill="${COLORS.text}" font-size="13" font-family="Arial">x² − 16 = (x + 4)(x − 4)</text>
</svg>`,
    checks: [
      {
        q: "Werk uit: (y + 6)(y − 6).",
        options: ["y² − 36", "y² + 36", "y² − 12y + 36", "y² + 12y − 36"],
        answer: 0,
        wrongHints: [
          null,
          "Bij +/− merkwaardig product is het a² − b². Hier −36 (min, niet plus).",
          "Geen middelste term bij (a+b)(a−b) — die heffen elkaar op.",
          "Geen middelste term hier; alleen y² − b².",
        ],
      },
    ],
  },

  // ─── D. Rekenen met machten ────────────────────────────
  {
    title: "Vermenigvuldigen: x³ · x² = x⁵",
    explanation: "Bij **vermenigvuldigen** van machten met **dezelfde basis** (zelfde letter): **exponenten optellen**.\n\n**Regel**: xⁿ · xᵐ = x^(n+m)\n\n**Voorbeelden**:\n• x³ · x² = x^(3+2) = **x⁵**\n• x⁴ · x = x⁴ · x¹ = **x⁵**\n• y² · y⁵ = **y⁷**\n• a · a · a = a³\n\n**Waarom?** Bekijk eens:\n• x³ = x·x·x (3 keer x)\n• x² = x·x (2 keer x)\n• x³ · x² = (x·x·x)·(x·x) = x·x·x·x·x = x⁵ (5 keer x totaal)\n\n**Pas op**: dit werkt **alleen** met dezelfde basis. x³ · y² blijft gewoon x³y² — niet samen te voegen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="47" text-anchor="middle" fill="${COLORS.text}" font-size="18" font-family="Arial">xⁿ · xᵐ = x^(n+m)</text>
<text x="55" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">x³ · x² = x⁵</text>
<text x="180" y="90" fill="${COLORS.muted}" font-size="11" font-family="Arial">(3 + 2 = 5)</text>
<text x="55" y="115" fill="${COLORS.text}" font-size="13" font-family="Arial">y · y⁴ = y⁵</text>
<text x="180" y="115" fill="${COLORS.muted}" font-size="11" font-family="Arial">(1 + 4 = 5)</text>
<text x="55" y="140" fill="${COLORS.text}" font-size="13" font-family="Arial">a² · a³ · a = a⁶</text>
<text x="180" y="140" fill="${COLORS.muted}" font-size="11" font-family="Arial">(2+3+1 = 6)</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-style="italic">alleen bij gelijke basis (zelfde letter)</text>
</svg>`,
    checks: [
      {
        q: "Wat is x⁴ · x³?",
        options: ["x⁷", "x¹²", "x⁴³", "2x⁷"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 4 · 3 = 12 gedaan. Maar de regel is **optellen** van exponenten.",
          "Niet de cijfers naast elkaar zetten. 4 + 3 = 7.",
          "Geen 2 ervoor. Bij vermenigvuldigen van machten verdubbel je niet — exponenten optellen, basis blijft.",
        ],
      },
    ],
  },
  {
    title: "Delen: x⁵ / x² = x³",
    explanation: "Bij **delen** van machten met **dezelfde basis**: **exponenten aftrekken**.\n\n**Regel**: xⁿ / xᵐ = x^(n−m)\n\n**Voorbeelden**:\n• x⁵ / x² = x^(5−2) = **x³**\n• y⁷ / y³ = **y⁴**\n• a⁶ / a = a⁶ / a¹ = **a⁵**\n\n**Waarom?** \n• x⁵ / x² = (x·x·x·x·x) / (x·x) = x·x·x = x³ (twee x'en wegstrepen tegen die in de noemer)\n\n**Bijzondere gevallen**:\n• x⁴ / x⁴ = x⁰ = **1** (alles delen door zichzelf is 1)\n• x³ / x⁵ = x^(3−5) = x⁻² = **1/x²** (komt later in andere hoofdstukken)\n\nVoor nu: gewoon de exponent in de teller min de exponent in de noemer.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="47" text-anchor="middle" fill="${COLORS.text}" font-size="18" font-family="Arial">xⁿ / xᵐ = x^(n−m)</text>
<text x="55" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">x⁵ / x² = x³</text>
<text x="180" y="90" fill="${COLORS.muted}" font-size="11" font-family="Arial">(5 − 2 = 3)</text>
<text x="55" y="115" fill="${COLORS.text}" font-size="13" font-family="Arial">y⁷ / y³ = y⁴</text>
<text x="180" y="115" fill="${COLORS.muted}" font-size="11" font-family="Arial">(7 − 3 = 4)</text>
<text x="55" y="140" fill="${COLORS.text}" font-size="13" font-family="Arial">a⁴ / a⁴ = a⁰ = 1</text>
<text x="55" y="175" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-style="italic">x⁰ = 1 (elk getal tot de macht 0 = 1)</text>
</svg>`,
    checks: [
      {
        q: "Wat is x⁸ / x³?",
        options: ["x⁵", "x²⁴", "x¹¹", "x²"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 8 · 3 = 24 gedaan. Maar bij delen: **aftrekken** van exponenten.",
          "Je hebt opgeteld (8+3=11). Bij delen: aftrekken (8−3=5).",
          "Bij delen reken je teller − noemer = 8 − 3 = 5.",
        ],
      },
    ],
  },
  {
    title: "Macht van een macht: (x²)³ = x⁶",
    explanation: "Wat als je een macht **nogmaals** kwadrateert (of tot een andere macht verheft)? Dan **vermenigvuldig** je de exponenten:\n\n**Regel**: (xⁿ)ᵐ = x^(n·m)\n\n**Voorbeelden**:\n• (x²)³ = x^(2·3) = **x⁶**\n• (y³)⁴ = y¹²\n• (a⁵)² = a¹⁰\n\n**Waarom?**\n(x²)³ = x² · x² · x² (drie keer x² met elkaar vermenigvuldigen)\n      = x^(2+2+2) = x⁶\n\n**Samenvatting van de drie regels**:\n• xⁿ · xᵐ = x^(n+m) — vermenigvuldigen → optellen\n• xⁿ / xᵐ = x^(n−m) — delen → aftrekken\n• (xⁿ)ᵐ = x^(n·m) — macht van macht → vermenigvuldigen\n\n**Pas op**: deze regels werken alleen met dezelfde basis. Voor verschillende bases (x³ en y²) gelden ze niet.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="47" text-anchor="middle" fill="${COLORS.text}" font-size="18" font-family="Arial">(xⁿ)ᵐ = x^(n·m)</text>
<text x="55" y="85" fill="${COLORS.text}" font-size="13" font-family="Arial">(x²)³ = x⁶</text>
<text x="180" y="85" fill="${COLORS.muted}" font-size="11" font-family="Arial">(2·3 = 6)</text>
<text x="55" y="108" fill="${COLORS.text}" font-size="13" font-family="Arial">(y³)⁴ = y¹²</text>
<text x="180" y="108" fill="${COLORS.muted}" font-size="11" font-family="Arial">(3·4 = 12)</text>
<line x1="40" y1="125" x2="260" y2="125" stroke="${COLORS.curve}" stroke-width="0.7" opacity="0.5"/>
<text x="55" y="145" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">3 regels samen:</text>
<text x="55" y="163" fill="${COLORS.text}" font-size="11" font-family="Arial">·  vermenigvuldigen → +</text>
<text x="55" y="180" fill="${COLORS.text}" font-size="11" font-family="Arial">·  delen → −  ·  macht van macht → ×</text>
</svg>`,
    checks: [
      {
        q: "Wat is (x³)⁴?",
        options: ["x¹²", "x⁷", "x⁸¹", "x²⁷"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 3 + 4 = 7 gedaan (regel voor vermenigvuldigen van machten). Maar dit is macht **van** macht: 3 · 4 = 12.",
          "81 = 3⁴, maar dat geldt voor de exponent zelf in een rekenfeit. De regel is: exponenten **vermenigvuldigen**.",
          "27 = 3³. Nee, hier is x basis en (3)·(4) = 12 de nieuwe exponent.",
        ],
      },
    ],
  },

  // ─── E. Vereenvoudigen + eindopdrachten ────────────────────────────
  {
    title: "Vereenvoudig een hele uitdrukking",
    explanation: "**Mengelmoes**: vaak combineer je alle technieken in één opgave.\n\n**Voorbeeld**: 3x · 2x² + 5x³\n\n**Stap 1**: vermenigvuldiging eerst (machten + coëfficiënten):\n• 3x · 2x² = 3·2 · x · x² = 6 · x^(1+2) = 6x³\n\n**Stap 2**: nu staat er 6x³ + 5x³. Soortgelijk → samen: **11x³**\n\nResultaat: **11x³**.\n\n**Voorbeeld 2**: (2a)³ \n• = 2³ · a³ = **8a³** (de macht werkt op zowel het getal als de letter)\n\n**Voorbeeld 3**: 2x²·3x − 4x²·x\n• 2x² · 3x = 6x³\n• 4x² · x = 4x³\n• 6x³ − 4x³ = **2x³**\n\n**Stappenplan voor algemene vereenvoudiging**:\n1. Haakjes wegwerken (binnenste eerst)\n2. Machten en vermenigvuldigingen uitwerken\n3. Soortgelijke termen samentrekken",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="32" fill="${COLORS.text}" font-size="13" font-family="Arial">3x · 2x² + 5x³</text>
<text x="55" y="60" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">stap 1: vermenigvuldiging</text>
<text x="55" y="82" fill="${COLORS.text}" font-size="13" font-family="Arial">6x³ + 5x³</text>
<text x="55" y="108" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">stap 2: soortgelijke samen</text>
<rect x="55" y="125" width="100" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="105" y="149" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">11x³</text>
<text x="55" y="180" fill="${COLORS.muted}" font-size="10" font-family="Arial">altijd: machten → soortgelijken</text>
</svg>`,
    checks: [
      {
        q: "Vereenvoudig: 4x² + 3x · 2x.",
        options: [
          "10x²",
          "9x²",
          "10x⁴",
          "14x²",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Reken eerst 3x · 2x = 6x², dan 4x² + 6x² = 10x². Niet 9x².",
          "x² + x² = x², niet x⁴. Bij optellen blijft de macht gelijk (alleen coëfficiënten optellen).",
          "Reken: 3x · 2x = 6x² (niet 10x²). Dus 4x² + 6x² = 10x² (niet 14x²).",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht 1",
    explanation: "**Vraag**: vereenvoudig 2(x + 3) − (x − 5).\n\n**Stappen**:\n\n1. Haakjes wegwerken:\n   • 2(x + 3) = 2x + 6\n   • −(x − 5) = −x + 5 (let op: minteken draait beide tekens)\n\n2. Bij elkaar:\n   • 2x + 6 − x + 5\n\n3. Soortgelijke termen samen:\n   • x-termen: 2x − x = **x**\n   • constanten: 6 + 5 = **11**\n\n**Antwoord**: x + 11.\n\n**Check** met x = 2:\n• Origineel: 2(2+3) − (2−5) = 10 − (−3) = 13\n• Vereenvoudigd: 2 + 11 = 13 ✓\n\n**Algemene tips**:\n- Werk altijd binnenste haakjes eerst.\n- Pas op met mintekens — zet ze er meteen bij elke term.\n- Schrijf elke stap netjes onder elkaar.",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="32" fill="${COLORS.text}" font-size="13" font-family="Arial">2(x + 3) − (x − 5)</text>
<line x1="50" y1="42" x2="220" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="62" fill="${COLORS.text}" font-size="13" font-family="Arial">2x + 6 − x + 5</text>
<text x="55" y="85" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">x: 2x − x = x</text>
<text x="55" y="105" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">constanten: 6 + 5 = 11</text>
<rect x="55" y="120" width="120" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="115" y="144" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">x + 11</text>
<text x="55" y="175" fill="${COLORS.curve}" font-size="11" font-family="Arial">check x=2: 13 ✓</text>
</svg>`,
    checks: [
      {
        q: "Vereenvoudig: 3(x + 2) − 2(x − 1).",
        options: [
          "x + 8",
          "x + 4",
          "5x + 4",
          "x − 4",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Reken: 3(x+2) = 3x+6. −2(x−1) = −2x+2. Samen: x + 8 (constanten 6+2 = 8).",
          "Coëfficiënten van x kloppen niet. 3 − 2 = 1, dus 1·x = x. Niet 5x.",
          "−4 zou kloppen als je de mintekens verkeerd verwerkte. Reken: 6 + 2 = 8, niet −4.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht 2: merkwaardig product",
    explanation: "**Vraag**: werk uit (2x + 3)² − (x − 1)(x + 1).\n\n**Stappen**:\n\n**Eerste deel** — (2x + 3)² is (a + b)²:\n• a = 2x, b = 3\n• (2x)² = 4x²\n• 2·2x·3 = 12x\n• 3² = 9\n• Resultaat: **4x² + 12x + 9**\n\n**Tweede deel** — (x − 1)(x + 1) is (a − b)(a + b):\n• Resultaat: x² − 1² = **x² − 1**\n\n**Bij elkaar**:\n• (4x² + 12x + 9) − (x² − 1)\n• = 4x² + 12x + 9 − x² + 1 (let op: minteken draait beide termen!)\n• = 3x² + 12x + 10\n\n**Antwoord**: 3x² + 12x + 10.\n\nHiermee heb je alle technieken in één opgave gebruikt:\n• Merkwaardige producten ✓\n• Haakjes wegwerken ✓\n• Min vóór haakjes ✓\n• Soortgelijke termen samentrekken ✓\n\nGoed gedaan — je hebt het algebra-basis-leerpad doorlopen!",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="30" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">(2x + 3)² − (x − 1)(x + 1)</text>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="62" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">(2x+3)² = 4x² + 12x + 9</text>
<text x="55" y="82" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">(x−1)(x+1) = x² − 1</text>
<text x="55" y="108" fill="${COLORS.text}" font-size="13" font-family="Arial">4x² + 12x + 9 − x² + 1</text>
<rect x="55" y="130" width="200" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="155" y="154" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">3x² + 12x + 10</text>
<text x="150" y="188" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">algebra-basis: gehaald 🏆</text>
</svg>`,
    checks: [
      {
        q: "Werk uit: (x + 2)² + (x + 2)(x − 2).",
        options: [
          "2x² + 4x",
          "2x² + 4x + 8",
          "2x² + 4x + 4",
          "x² + 4x + 4",
        ],
        answer: 0,
        wrongHints: [
          null,
          "(x+2)² = x² + 4x + 4. (x+2)(x−2) = x² − 4. Samen: 2x² + 4x + 0 = 2x² + 4x.",
          "Constanten heffen elkaar op: +4 (uit eerste) + (−4) (uit tweede) = 0. Geen +4 over.",
          "Je hebt alleen één van de twee uitgewerkt. Combineer beide: 2x² ipv x² (twee x²-termen).",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const rekenenMetLetters = {
  id: "rekenen-met-letters",
  title: "Rekenen met letters (algebra-basis)",
  emoji: "🔤",
  level: "klas1-vwo",
  subject: "wiskunde",
  topics: ["WI.algebra.basis"],
  intro: "Algebra-basis: hoe reken je met letters? Termen herleiden, haakjes wegwerken, merkwaardige producten ((a+b)², (a−b)², (a+b)(a−b)) en rekenen met machten. Fundament voor élke wiskunde later.",
  triggerKeywords: ["herleiden", "haakjes wegwerken", "merkwaardig product", "machten", "termen", "soortgelijke termen", "(a+b)²"],
  chapters,
  steps,
};

export default rekenenMetLetters;
