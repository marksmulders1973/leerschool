// Leerpad: Negatieve getallen — vanaf de basis (klas 1)
// 10 stappen, 4 hoofdstukken.

const COLORS = {
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const stepEmojis = ["🌡️", "📏", "🔄", "➕", "➖", "🔀", "✖️", "🧮", "❄️", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een negatief getal?", emoji: "🌡️", from: 0, to: 2 },
  { letter: "B", title: "Optellen en aftrekken", emoji: "➕", from: 3, to: 5 },
  { letter: "C", title: "Vermenigvuldigen en delen", emoji: "✖️", from: 6, to: 7 },
  { letter: "D", title: "Toepassingen", emoji: "🏆", from: 8, to: 9 },
];

const steps = [
  {
    title: "Negatieve getallen in het echte leven",
    explanation: "Tot nu had je vooral te maken met **positieve** getallen (1, 2, 3, ...). Maar in het echt zie je vaak ook **negatieve** getallen.\n\n**Voorbeelden**:\n• **Temperatuur**: −5°C is 5 graden onder nul (vriespunt). Heel koud!\n• **Geld**: een schuld van €20 schrijven we als −€20. Je bent dat geld kwijt.\n• **Hoogte**: een duiker is op −15 meter (15 meter onder zeeniveau).\n• **Liftknop**: −1 of −2 voor parkeerverdiepingen onder de begane grond.\n\nEen negatief getal heeft een **min-teken** (−) ervoor. Het betekent: **lager dan nul**.\n\nNul (**0**) is het **midden**: niet positief, niet negatief.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="50" y="40" width="40" height="120" fill="rgba(0,168,200,0.15)" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="50" y1="100" x2="90" y2="100" stroke="${COLORS.point}" stroke-width="2"/>
<text x="100" y "104" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">0°C</text>
<line x1="50" y1="60" x2="90" y2="60" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<text x="100" y "64" fill="${COLORS.curveAlt}" font-size="12" font-family="Arial">+30°C ☀️</text>
<line x1="50" y1="140" x2="90" y2="140" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="100" y "144" fill="${COLORS.curve}" font-size="12" font-family="Arial">−10°C ❄️</text>
<text x="150" y "190" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">negatieve getallen: lager dan nul</text>
</svg>`,
    checks: [
      {
        q: "Welk getal is het laagst?",
        options: ["−10", "−3", "0", "5"],
        answer: 0,
        wrongHints: [
          null,
          "−3 is laag, maar −10 is **nog lager**. Hoe meer naar links op de getallenlijn, hoe lager.",
          "0 is hoger dan elk negatief getal.",
          "5 is positief, dus hoger dan 0 en alle negatieve getallen.",
        ],
      },
    ],
  },
  {
    title: "De getallenlijn met negatieve getallen",
    explanation: "Op de **getallenlijn** staan getallen op volgorde, van klein naar groot. Negatieve getallen staan **links van 0**, positieve staan **rechts van 0**.\n\n**−5  −4  −3  −2  −1   0   1   2   3   4   5**\n\nHoe verder **links**, hoe **kleiner**. Dus:\n• **−5 < −2** (−5 staat links van −2)\n• **−1 < 0** (−1 ligt links van 0)\n• **−3 < 1** (negatief is altijd kleiner dan positief)\n\nBelangrijk: bij negatieve getallen is **een grotere absolute waarde juist kleiner**. −10 is kleiner dan −2 (al ziet 10 er groot uit, met een min ervoor is het verder van nul af in de negatieve richting).",
    svg: `<svg viewBox="0 0 300 200">
<line x1="20" y1="100" x2="280" y2="100" stroke="${COLORS.text}" stroke-width="2"/>
<polygon points="270,95 280,100 270,105" fill="${COLORS.text}"/>
<polygon points="30,95 20,100 30,105" fill="${COLORS.text}"/>
<line x1="50" y1="95" x2="50" y2="105" stroke="${COLORS.text}" stroke-width="2"/>
<text x="50" y "120" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">−5</text>
<line x1="100" y1="95" x2="100" y2="105" stroke="${COLORS.text}" stroke-width="2"/>
<text x="100" y "120" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">−2</text>
<line x1="150" y1="95" x2="150" y2="105" stroke="${COLORS.text}" stroke-width="3"/>
<text x="150" y "125" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">0</text>
<line x1="200" y1="95" x2="200" y2="105" stroke="${COLORS.text}" stroke-width="2"/>
<text x="200" y "120" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="13" font-family="Arial" font-weight="bold">2</text>
<line x1="250" y1="95" x2="250" y2="105" stroke="${COLORS.text}" stroke-width="2"/>
<text x="250" y "120" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="13" font-family="Arial" font-weight="bold">5</text>
<text x="60" y "70" fill="${COLORS.curve}" font-size="11" font-family="Arial">← kleiner</text>
<text x="220" y "70" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial">groter →</text>
<text x="150" y "180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">links = kleiner, rechts = groter</text>
</svg>`,
    checks: [
      {
        q: "Wat is groter: −7 of −2?",
        options: ["−2", "−7", "Even groot", "Hangt ervan af"],
        answer: 0,
        wrongHints: [
          null,
          "−7 ziet er met '7' groot uit, maar bij negatieve getallen is verder van nul juist kleiner. −2 staat dichter bij 0.",
          "Verschillende getallen op de getallenlijn.",
          "Wiskunde is hier eenduidig: −2 staat rechts van −7, dus is groter.",
        ],
      },
    ],
  },
  {
    title: "Tegengestelde getallen",
    explanation: "Elk getal heeft een **tegengestelde** — het getal even ver van 0 maar aan de andere kant.\n\n• Tegengestelde van **5** is **−5**\n• Tegengestelde van **−3** is **3**\n• Tegengestelde van **0** is **0** zelf\n\n**Truc**: zet een minteken voor het getal (of haal de min weg).\n\nTegengestelde getallen tellen samen op tot **0**:\n• 5 + (−5) = 0\n• −3 + 3 = 0\n• 100 + (−100) = 0\n\n**Visualisatie**: op de getallenlijn liggen tegengestelde getallen als spiegelbeeld om de 0.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="20" y1="100" x2="280" y2="100" stroke="${COLORS.text}" stroke-width="2"/>
<line x1="150" y1="40" x2="150" y2="160" stroke="${COLORS.point}" stroke-width="1" stroke-dasharray="3 3"/>
<text x="150" y "35" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">spiegel</text>
<circle cx="80" cy="100" r="6" fill="${COLORS.curve}"/>
<text x="80" y "125" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">−4</text>
<circle cx="220" cy="100" r="6" fill="${COLORS.curveAlt}"/>
<text x="220" y "125" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="13" font-family="Arial" font-weight="bold">4</text>
<text x="150" y "180" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">−4 + 4 = 0</text>
</svg>`,
    checks: [
      {
        q: "Wat is het tegengestelde van −7?",
        options: ["7", "−7", "0", "14"],
        answer: 0,
        wrongHints: [
          null,
          "Het tegengestelde is het andere teken. Voor −7 is dat +7.",
          "0 is alleen het tegengestelde van 0 zelf.",
          "Het tegengestelde verandert alleen het teken, niet de grootte.",
        ],
      },
    ],
  },
  {
    title: "Optellen met negatieve getallen",
    explanation: "**+ negatief getal** = aftrekken.\n\n**Voorbeelden**:\n• 5 + (−3) = 5 − 3 = **2**\n• 8 + (−10) = 8 − 10 = **−2**\n• 4 + (−4) = **0**\n\n**Regel**: een plus en een min naast elkaar werkt als één **min**.\n\n**Visualisatie op de getallenlijn**: bij +3 ga je 3 stappen naar **rechts**. Bij +(−3) ga je 3 stappen naar **links**.\n\n**Negatief + negatief** geeft een nóg meer negatief getal:\n• −3 + (−5) = −8 (twee minnen samen → 8 stappen naar links vanaf 0)\n\n**Trucje**: bij + (−x) doe je gewoon − x. Schrap de + en de haakjes.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="20" y1="100" x2="280" y2="100" stroke="${COLORS.text}" stroke-width="2"/>
<text x="50" y "120" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">−4</text>
<text x="100" y "120" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">−2</text>
<text x="150" y "120" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">0</text>
<text x="200" y "120" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">2</text>
<text x="250" y "120" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">4</text>
<circle cx="200" cy="100" r="5" fill="${COLORS.curveAlt}"/>
<line x1="200" y1="80" x2="125" y2="80" stroke="${COLORS.curve}" stroke-width="2"/>
<polygon points="125,75 115,80 125,85" fill="${COLORS.curve}"/>
<text x="160" y "70" text-anchor="middle" fill="${COLORS.curve}" font-size="11" font-family="Arial">+ (−3)</text>
<circle cx="125" cy="100" r="5" fill="${COLORS.point}"/>
<text x="150" y "175" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">2 + (−3) = −1</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: 6 + (−9).",
        options: ["−3", "−15", "3", "15"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld i.p.v. afgetrokken. + (−9) = − 9, dus 6 − 9 = −3.",
          "Je bent het minteken kwijt. 6 − 9 geeft een negatief antwoord (omdat 9 > 6).",
          "Je hebt + 9 gedaan. Maar het is + (−9) = − 9.",
        ],
      },
    ],
  },
  {
    title: "Aftrekken met negatieve getallen",
    explanation: "**− negatief getal** = optellen!\n\n**Voorbeelden**:\n• 5 − (−3) = 5 + 3 = **8**\n• −2 − (−7) = −2 + 7 = **5**\n• 0 − (−4) = 0 + 4 = **4**\n\n**Regel**: twee minnen naast elkaar worden een **plus**.\n\n**Truc**: − (−x) = + x. Schrap allebei de mintekens, dan staat er een plus.\n\n**Waarom?** 'Het tegenovergestelde van iets aftrekken' = 'iets toevoegen'.\n\n**Voorbeeld in het echt**: schuld van −5 minder hebben = 5 erbij in je portemonnee.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y "47" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-family="Arial" font-weight="bold">a − (−b) = a + b</text>
<text x="55" y "85" fill="${COLORS.text}" font-size="13" font-family="Arial">5 − (−3) = 5 + 3 = 8</text>
<text x="55" y "108" fill="${COLORS.text}" font-size="13" font-family="Arial">−2 − (−7) = −2 + 7 = 5</text>
<text x="55" y "131" fill="${COLORS.text}" font-size="13" font-family="Arial">0 − (−4) = 0 + 4 = 4</text>
<text x="150" y "175" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">twee minnen → plus</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: 8 − (−5).",
        options: ["13", "3", "−13", "−3"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 8 − 5 = 3 gedaan. Maar het is 8 − (−5). Twee minnen → plus: 8 + 5 = 13.",
          "Niet negatief. 8 − (−5) = 8 + 5 = 13.",
          "Klopt niet. Twee minnen heffen elkaar op: 8 + 5 = 13.",
        ],
      },
    ],
  },
  {
    title: "Plus en min combineren — schema",
    explanation: "Onthoud dit schema voor combineerde plussen en minnen:\n\n| Combinatie | Wordt |\n|-----------|-------|\n| **+ +** | + |\n| **+ −** | − |\n| **− +** | − |\n| **− −** | + |\n\nIn woorden:\n• **Twee gelijke tekens** (++ of −−) → **plus**\n• **Twee verschillende tekens** (+− of −+) → **min**\n\n**Voorbeelden**:\n• 5 + +3 = 5 + 3 = **8**\n• 5 + −3 = 5 − 3 = **2**\n• 5 − +3 = 5 − 3 = **2**\n• 5 − −3 = 5 + 3 = **8**\n\n**Trucje**: tel de mintekens. **Even** aantal minnen → uitkomst plus. **Oneven** aantal → uitkomst min.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<line x1="40" y1="48" x2="260" y2="48" stroke="${COLORS.curve}" stroke-width="1"/>
<line x1="150" y1="20" x2="150" y2="190" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="95" y "40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">tekens</text>
<text x="205" y "40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">wordt</text>
<text x="95" y "75" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-family="Arial">+ +</text>
<text x="205" y "75" text-anchor="middle" fill="${COLORS.point}" font-size="20" font-family="Arial" font-weight="bold">+</text>
<text x="95" y "110" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-family="Arial">+ −</text>
<text x="205" y "110" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="20" font-family="Arial" font-weight="bold">−</text>
<text x="95" y "145" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-family="Arial">− +</text>
<text x="205" y "145" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="20" font-family="Arial" font-weight="bold">−</text>
<text x="95" y "180" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-family="Arial">− −</text>
<text x="205" y "180" text-anchor="middle" fill="${COLORS.point}" font-size="20" font-family="Arial" font-weight="bold">+</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: 4 − +6.",
        options: ["−2", "10", "2", "−10"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld. Maar − + = −, dus 4 − 6 = −2.",
          "Klopt niet — 4 − 6 = −2 (4 < 6, dus negatief).",
          "Te negatief. Reken: − + = −, dus 4 − 6 = −2.",
        ],
      },
    ],
  },
  {
    title: "Vermenigvuldigen — min × min = plus",
    explanation: "Bij **vermenigvuldigen** met negatieve getallen geldt:\n\n• **plus × plus = plus**\n• **plus × min = min**\n• **min × plus = min**\n• **min × min = plus** (twee minnen heffen elkaar op!)\n\n**Voorbeelden**:\n• 4 × 3 = **12**\n• 4 × (−3) = **−12**\n• (−4) × 3 = **−12**\n• (−4) × (−3) = **12** ← min × min = plus\n\n**Regel om te onthouden**: tel de minnen. Even aantal → plus. Oneven → min.\n\n**Voorbeelden met meerdere tekens**:\n• (−2) × (−3) × 4 = +24 (2 minnen → plus, dan × 4)\n• 5 × (−2) × (−3) × (−1) = −30 (3 minnen → min)",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<line x1="40" y1="48" x2="260" y2="48" stroke="${COLORS.curve}" stroke-width="1"/>
<line x1="150" y1="20" x2="150" y2="190" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="95" y "40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">×</text>
<text x="205" y "40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">resultaat</text>
<text x="95" y "75" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">+  ×  +</text>
<text x="205" y "75" text-anchor="middle" fill="${COLORS.point}" font-size="18" font-family="Arial" font-weight="bold">+</text>
<text x="95" y "110" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">+  ×  −</text>
<text x="205" y "110" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="18" font-family="Arial" font-weight="bold">−</text>
<text x="95" y "145" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">−  ×  +</text>
<text x="205" y "145" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="18" font-family="Arial" font-weight="bold">−</text>
<text x="95" y "180" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">−  ×  −</text>
<text x="205" y "180" text-anchor="middle" fill="${COLORS.point}" font-size="18" font-family="Arial" font-weight="bold">+</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: (−6) × (−4).",
        options: ["24", "−24", "10", "−10"],
        answer: 0,
        wrongHints: [
          null,
          "Min × min = **plus**. Twee minnen heffen elkaar op.",
          "Je hebt opgeteld of zoiets. Vermenigvuldigen: 6 × 4 = 24, en min × min = plus, dus +24.",
          "Niet aftrekken. Reken: 6 × 4 = 24, en de twee minnen worden plus.",
        ],
      },
    ],
  },
  {
    title: "Delen — zelfde regels als vermenigvuldigen",
    explanation: "**Delen** met negatieve getallen gaat hetzelfde als vermenigvuldigen:\n\n• **plus ÷ plus = plus**\n• **plus ÷ min = min**\n• **min ÷ plus = min**\n• **min ÷ min = plus**\n\n**Voorbeelden**:\n• 12 ÷ 4 = **3**\n• 12 ÷ (−4) = **−3**\n• (−12) ÷ 4 = **−3**\n• (−12) ÷ (−4) = **3** ← min ÷ min = plus\n\n**Onthoud**: verschillende tekens → min. Gelijke tekens → plus.\n\nDit geldt ook voor **breuken** met negatieve tekens:\n• −⁶⁄₂ = −3 (min boven, plus onder → min)\n• ⁻¹⁰⁄−₅ = 2 (min boven, min onder → plus)",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y "30" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">delen werkt net als vermenigvuldigen</text>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y "70" fill="${COLORS.text}" font-size="13" font-family="Arial">12 ÷ 4 = 3</text>
<text x="55" y "92" fill="${COLORS.text}" font-size="13" font-family="Arial">12 ÷ (−4) = −3</text>
<text x="55" y "114" fill="${COLORS.text}" font-size="13" font-family="Arial">(−12) ÷ 4 = −3</text>
<text x="55" y "136" fill="${COLORS.text}" font-size="13" font-family="Arial">(−12) ÷ (−4) = 3</text>
<text x="150" y "175" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">gelijke tekens → +  ·  verschillende → −</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: (−20) ÷ (−5).",
        options: ["4", "−4", "25", "−25"],
        answer: 0,
        wrongHints: [
          null,
          "Min ÷ min = plus. 20 ÷ 5 = 4, met min/min wordt het +4.",
          "Je hebt opgeteld of vermenigvuldigd. Reken delen: 20 ÷ 5 = 4.",
          "Niet vermenigvuldigen. 20 ÷ 5 = 4, en min/min wordt plus.",
        ],
      },
    ],
  },
  {
    title: "Toepassing: temperatuur",
    explanation: "Een typisch toepassingsvraagstuk: **temperatuur**.\n\n**Vraag**: 's morgens is het −8°C. Tegen de middag is het 13°C warmer. Wat is de temperatuur dan?\n\n**Reken**:\n• −8 + 13 = **5°C**\n\n**Vraag 2**: het was eerst 5°C. Dan daalt de temperatuur met 12°C. Hoe koud is het nu?\n• 5 − 12 = **−7°C**\n\n**Vraag 3**: gisteren −10°C, vandaag −3°C. Hoeveel warmer is het?\n• Verschil: −3 − (−10) = −3 + 10 = **7°C** warmer.\n\n**Tip**: bij temperatuur of hoogte werk je altijd met negatieve getallen. Optellen voor 'warmer' of 'omhoog', aftrekken voor 'kouder' of 'omlaag'.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="100" y="40" width="40" height="120" fill="rgba(0,168,200,0.15)" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="100" y1="80" x2="140" y2="80" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="150" y "84" fill="${COLORS.curveAlt}" font-size="13" font-family="Arial" font-weight="bold">5°C ← middag</text>
<line x1="100" y1="140" x2="140" y2="140" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="150" y "144" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">−8°C ← ochtend</text>
<line x1="80" y1="80" x2="80" y2="140" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="75,85 80,75 85,85" fill="${COLORS.point}"/>
<text x="55" y "115" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">+13</text>
<text x="150" y "190" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">−8 + 13 = 5°C</text>
</svg>`,
    checks: [
      {
        q: "Vannacht was het −12°C. Overdag 8°C warmer. Wat is de dagtemperatuur?",
        options: ["−4°C", "−20°C", "20°C", "4°C"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt afgetrokken in plaats van opgeteld. 'Warmer' = +. −12 + 8 = −4.",
          "Te warm. Reken: −12 + 8 = −4 (nog onder nul, maar minder koud).",
          "+4 zou kloppen als startpunt 0 was. Maar −12 + 8 = −4.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht: gemengd",
    explanation: "**Drie korte vragen** die alles bij elkaar zetten:\n\n**A**: Reken uit: −5 + 8 − (−3).\n• Stap 1: −5 + 8 = 3\n• Stap 2: 3 − (−3) = 3 + 3 = **6**\n\n**B**: Reken uit: (−6) × 2 ÷ (−4).\n• Stap 1: (−6) × 2 = −12\n• Stap 2: −12 ÷ (−4) = **3** (min ÷ min = plus)\n\n**C**: Een duiker is op −18 m. Hij stijgt 12 m, dan zakt hij weer 7 m. Op welke diepte zit hij nu?\n• −18 + 12 − 7 = −6 + −7 = **−13 m** (dus 13 m onder zeeniveau).\n\nGoed gedaan — je hebt het negatieve-getallen-leerpad doorlopen!",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y "32" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">A. −5 + 8 − (−3) =</text>
<rect x="200" y "18" width="60" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="230" y "37" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">6</text>
<text x="55" y "82" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">B. (−6)×2÷(−4) =</text>
<rect x="200" y "68" width="60" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="230" y "87" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">3</text>
<text x="55" y "132" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">C. duiker eindigt op</text>
<rect x="200" y "118" width="60" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="230" y "137" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">−13 m</text>
<text x="150" y "180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">negatieve getallen onder de knie 🏆</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: (−3) × (−4) − 5.",
        options: ["7", "−17", "12", "−7"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld in plaats van afgetrokken. (−3)×(−4) = 12, daarna − 5 = 7.",
          "12 is de tussenstap. Vergeet niet de − 5 op het einde.",
          "Je hebt − op de tussenstap gezet. (−3)×(−4) = +12 (min × min). Dan 12 − 5 = 7.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const negatieveGetallen = {
  id: "negatieve-getallen",
  title: "Negatieve getallen",
  emoji: "🌡️",
  level: "klas1-vwo",
  subject: "wiskunde",
  topics: ["WI.rekenen.negatief"],
  intro: "Negatieve getallen zijn getallen kleiner dan nul. Je ziet ze bij temperaturen onder nul, schulden, hoogtes onder zeeniveau. Hier leer je: getallenlijn, optellen/aftrekken/vermenigvuldigen met negatieve getallen, en de regels voor plus-min combinaties.",
  triggerKeywords: ["negatief", "negatieve getallen", "−", "min × min", "tegengestelde", "getallenlijn"],
  chapters,
  steps,
};

export default negatieveGetallen;
