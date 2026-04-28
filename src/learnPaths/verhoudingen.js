// Leerpad: Verhoudingen en evenredigheid (klas 1+)
// 10 stappen, 4 hoofdstukken.

const COLORS = {
  curve: "#00c853",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const stepEmojis = ["⚖️", "✏️", "🟰", "📋", "🔍", "🗺️", "📐", "🍳", "🚗", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een verhouding?", emoji: "⚖️", from: 0, to: 2 },
  { letter: "B", title: "Verhoudingstabellen", emoji: "📋", from: 3, to: 5 },
  { letter: "C", title: "Schaal", emoji: "🗺️", from: 6, to: 7 },
  { letter: "D", title: "Toepassingen", emoji: "🏆", from: 8, to: 9 },
];

const steps = [
  {
    title: "Wat is een verhouding?",
    explanation: "Een **verhouding** zegt hoe twee (of meer) hoeveelheden zich tot elkaar verhouden. **Niet** de absolute getallen, maar de **verhouding** ertussen.\n\n**Voorbeelden**:\n• Een kan limonadesiroop: **1 deel siroop op 4 delen water**. Verhouding: **1 : 4**.\n• In een klas: **8 jongens en 12 meisjes**. Verhouding: **8 : 12** (kun je vereenvoudigen tot 2 : 3).\n• Maatbeker meel/water: **3 : 2** (3 maatjes meel op 2 maatjes water).\n\n**Notatie**: we schrijven verhoudingen met een **dubbelpunt**: **a : b** (lees: 'a tot b').\n\n**Verschil met breuk**: \n• ⅖ = 2 deel van een totaal van 5 (breuk).\n• 2 : 3 = 2 deel naast 3 deel (verhouding) — totaal 5 delen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="60" width="50" height="80" fill="rgba(255,213,79,0.40)" stroke="${COLORS.point}" stroke-width="2"/>
<text x="65" y "108" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">1</text>
<text x="65" y "160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">siroop</text>
<text x="105" y "108" text-anchor="middle" fill="${COLORS.text}" font-size="20" font-family="Arial" font-weight="bold">:</text>
<rect x="120" y="60" width="140" height="80" fill="rgba(0,168,200,0.25)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="190" y "108" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">4</text>
<text x="190" y "160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">water</text>
<text x="150" y "190" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">verhouding 1 : 4</text>
</svg>`,
    checks: [
      {
        q: "In een klas: 12 jongens en 18 meisjes. Wat is de verhouding (vereenvoudigd)?",
        options: ["2 : 3", "12 : 18", "3 : 2", "1 : 1"],
        answer: 0,
        wrongHints: [
          null,
          "Klopt — maar je kunt vereenvoudigen door beide te delen door 6: 2 : 3.",
          "Andersom: 12 jongens en 18 meisjes geeft jongens : meisjes = 12 : 18 = 2 : 3.",
          "1 : 1 zou betekenen evenveel. Maar er zijn meer meisjes dan jongens.",
        ],
      },
    ],
  },
  {
    title: "Verhoudingen vereenvoudigen",
    explanation: "Net als breuken kun je een verhouding **vereenvoudigen** door beide getallen door **hetzelfde getal** te delen.\n\n**Voorbeelden**:\n• 6 : 9 = (÷3) **2 : 3**\n• 10 : 15 = (÷5) **2 : 3**\n• 20 : 30 = (÷10) **2 : 3**\n• 4 : 6 : 8 = (÷2) **2 : 3 : 4** (kan ook met meer delen)\n\nDe vereenvoudigde vorm zegt **dezelfde** verhouding — alleen met kleinere getallen.\n\n**Volledig vereenvoudigd** als de getallen geen gemeenschappelijke deler meer hebben.",
    svg: `<svg viewBox="0 0 300 200">
<text x="80" y "55" text-anchor="middle" fill="${COLORS.text}" font-size="22" font-family="Arial" font-weight="bold">6 : 9</text>
<text x="150" y "85" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial">↓ ÷ 3</text>
<text x="80" y "120" text-anchor="middle" fill="${COLORS.point}" font-size="22" font-family="Arial" font-weight="bold">2 : 3</text>
<text x="200" y "100" fill="${COLORS.text}" font-size="13" font-family="Arial">10 : 15 = 2 : 3</text>
<text x="200" y "125" fill="${COLORS.text}" font-size="13" font-family="Arial">20 : 30 = 2 : 3</text>
<text x="200" y "150" fill="${COLORS.text}" font-size="13" font-family="Arial">8 : 12 = 2 : 3</text>
<text x="150" y "185" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">allemaal dezelfde verhouding</text>
</svg>`,
    checks: [
      {
        q: "Vereenvoudig 16 : 24.",
        options: ["2 : 3", "8 : 12", "4 : 6", "16 : 24"],
        answer: 0,
        wrongHints: [
          null,
          "8 : 12 is een tussenstap (÷2). Maar je kunt nog door 4 delen: 2 : 3.",
          "4 : 6 is een tussenstap (÷4). Verder vereenvoudigen: 2 : 3.",
          "16 : 24 is de oorspronkelijke. Beide zijn deelbaar door 8: → 2 : 3.",
        ],
      },
    ],
  },
  {
    title: "Verhouding ↔ breuk ↔ percentage",
    explanation: "Een verhouding kun je omschrijven naar een **breuk** of **percentage**.\n\n**Voorbeeld**: 3 jongens : 7 meisjes (totaal 10 leerlingen).\n• Jongens-deel als breuk: **³⁄₁₀** = 0,3 = **30%**\n• Meisjes-deel: **⁷⁄₁₀** = 0,7 = **70%**\n\n**Truc**: tel eerst de **delen samen** (= het totaal). Dan is elk deel een **breuk** van dat totaal.\n\n**Voorbeeld 2**: verhouding suiker:meel:boter = 1 : 3 : 4.\n• Totaal: 1 + 3 + 4 = 8 delen.\n• Suiker: ⅛ = 12,5%\n• Meel: ⅜ = 37,5%\n• Boter: ⁴⁄₈ = 50%",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="60" width="60" height="60" fill="rgba(0,200,83,0.40)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="70" y "95" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">3</text>
<rect x="100" y="60" width="140" height="60" fill="rgba(255,112,67,0.30)" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="170" y "95" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">7</text>
<text x="70" y "140" text-anchor="middle" fill="${COLORS.curve}" font-size="11" font-family="Arial" font-weight="bold">³⁄₁₀ = 30%</text>
<text x="170" y "140" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">⁷⁄₁₀ = 70%</text>
<text x="150" y "180" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">3 : 7 (totaal 10 delen)</text>
</svg>`,
    checks: [
      {
        q: "Verhouding 1 : 4. Welk percentage is het kleine deel?",
        options: ["20%", "25%", "10%", "40%"],
        answer: 0,
        wrongHints: [
          null,
          "25% = ¼, dat zou bij verhouding 1:3 horen. Bij 1:4 is totaal 5 delen, dus 1/5 = 20%.",
          "Je hebt te klein gerekend. Reken: totaal 1+4 = 5. Dus 1/5 = 20%.",
          "40% = 2/5. Maar 1 : 4 betekent 1 op 5 totaal = 20%.",
        ],
      },
    ],
  },
  {
    title: "Verhoudingstabel",
    explanation: "Een **verhoudingstabel** is een tabel waar de twee hoeveelheden in een vaste verhouding tot elkaar staan. Je kunt 'm gebruiken om onbekende waardes uit te rekenen.\n\n**Voorbeeld**: 3 appels kosten €1,50. Hoeveel kosten 7 appels?\n\n| appels | euro |\n|--------|------|\n| 3 | 1,50 |\n| 1 | 0,50 |\n| 7 | 3,50 |\n\n**Stappen**:\n1. Eerst naar 1 appel: €1,50 ÷ 3 = **€0,50**\n2. Dan naar 7 appels: 7 × €0,50 = **€3,50**\n\nDeze techniek heet 'het terugrekenen naar 1' — werkt altijd.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="40" y1="48" x2="260" y2="48" stroke="${COLORS.curve}" stroke-width="1"/>
<line x1="150" y1="20" x2="150" y2="190" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="95" y "40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">appels</text>
<text x="205" y "40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">euro</text>
<text x="95" y "75" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">3</text>
<text x="205" y "75" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">1,50</text>
<text x="95" y "110" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="14" font-family="Arial">1</text>
<text x="205" y "110" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="14" font-family="Arial">0,50</text>
<text x="95" y "155" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">7</text>
<text x="205" y "155" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">3,50</text>
<text x="270" y "75" fill="${COLORS.muted}" font-size="9" font-family="Arial">÷3</text>
<text x="270" y "110" fill="${COLORS.muted}" font-size="9" font-family="Arial">×7</text>
</svg>`,
    checks: [
      {
        q: "5 boterhammen kosten €2,50. Hoeveel kosten 8 boterhammen?",
        options: ["€4,00", "€5,00", "€2,00", "€10,00"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel. Reken: 1 boterham = 2,50 ÷ 5 = €0,50. Dan 8 × 0,50 = €4,00.",
          "Te weinig. Reken via 1 boterham (€0,50): 8 × 0,50 = €4,00.",
          "Te veel. Een boterham is €0,50, dus 8 boterhammen = €4,00.",
        ],
      },
    ],
  },
  {
    title: "Onbekende invullen — kruisproduct",
    explanation: "Een snellere manier voor verhoudingstabellen: het **kruisproduct** (of 'kruisvermenigvuldigen').\n\n**Voorbeeld**: 4 ballonnen kosten €3. Hoeveel kosten 10 ballonnen?\n\n| 4 | 3 |\n| 10 | x |\n\n**Kruisproduct**: 4 · x = 10 · 3, dus 4x = 30, dus **x = 7,50**.\n\n**Regel**: bij twee verhoudingen die gelijk zijn (a : b = c : d), geldt:\n\n**a · d = b · c**\n\nDit heet het kruisproduct. Werkt altijd.\n\n**Voorbeeld 2**: 6 : 9 = 4 : x. Dan 6x = 36, dus **x = 6**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="40" width="220" height="120" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="40" y1="80" x2="260" y2="80" stroke="${COLORS.curve}" stroke-width="1"/>
<line x1="150" y1="40" x2="150" y2="160" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="95" y "70" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-family="Arial">4</text>
<text x="205" y "70" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-family="Arial">3</text>
<text x="95" y "120" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-family="Arial">10</text>
<text x="205" y "120" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">x</text>
<line x1="80" y1="60" x2="220" y2="130" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="3 3"/>
<line x1="220" y1="60" x2="80" y2="130" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="3 3"/>
<text x="150" y "180" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">4 · x = 10 · 3 → x = 7,50</text>
</svg>`,
    checks: [
      {
        q: "5 : 8 = 15 : x. Wat is x?",
        options: ["24", "12", "20", "40"],
        answer: 0,
        wrongHints: [
          null,
          "Reken kruisproduct: 5x = 15·8 = 120, dus x = 24.",
          "Te klein. 5x = 120, dus x = 24.",
          "Te groot. Reken: 5x = 15 · 8 = 120, dus x = 120/5 = 24.",
        ],
      },
    ],
  },
  {
    title: "Recept verhouden",
    explanation: "**Praktisch voorbeeld**: een recept voor pannenkoeken voor 4 personen heeft:\n• 200 g meel\n• 500 ml melk\n• 2 eieren\n\nVoor **6 personen** moet je het recept met factor **6/4 = 1,5** vermenigvuldigen:\n• Meel: 200 × 1,5 = **300 g**\n• Melk: 500 × 1,5 = **750 ml**\n• Eieren: 2 × 1,5 = **3 eieren**\n\nVoor **10 personen** factor 10/4 = 2,5:\n• Meel: 500 g\n• Melk: 1250 ml\n• Eieren: 5\n\n**Truc**: bereken eerst voor 1 persoon (deel door oorspronkelijk aantal), dan vermenigvuldig met nieuw aantal.",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y "32" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">recept × factor 1,5</text>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y "65" fill="${COLORS.text}" font-size="12" font-family="Arial">4 pers:</text>
<text x="120" y "65" fill="${COLORS.text}" font-size="12" font-family="Arial">200 g meel</text>
<text x="55" y "85" fill="${COLORS.text}" font-size="12" font-family="Arial">6 pers:</text>
<text x="120" y "85" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">300 g meel</text>
<text x="55" y "118" fill="${COLORS.text}" font-size="12" font-family="Arial">4 pers:</text>
<text x="120" y "118" fill="${COLORS.text}" font-size="12" font-family="Arial">500 ml melk</text>
<text x="55" y "138" fill="${COLORS.text}" font-size="12" font-family="Arial">6 pers:</text>
<text x="120" y "138" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">750 ml melk</text>
<text x="150" y "180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">factor: nieuw / oud = 6/4 = 1,5</text>
</svg>`,
    checks: [
      {
        q: "Recept voor 3 personen: 150g rijst. Hoeveel voor 8 personen?",
        options: ["400 g", "250 g", "300 g", "600 g"],
        answer: 0,
        wrongHints: [
          null,
          "250g klopt niet. Reken: per persoon 50g (150÷3). Voor 8 personen: 8×50 = 400g.",
          "300g zou voor 6 personen zijn. Voor 8: 8 × 50g = 400g.",
          "Te veel. Per persoon 50g, dus 8 × 50 = 400g.",
        ],
      },
    ],
  },
  {
    title: "Schaal — kleinere of grotere weergave",
    explanation: "Een **schaal** is een verhouding tussen **afbeelding** en **werkelijkheid**.\n\n**Voorbeelden**:\n• Schaal **1 : 100** → 1 cm op kaart = 100 cm in echt = 1 m.\n• Schaal **1 : 50** → 1 cm op tekening = 50 cm in echt.\n• Schaal **2 : 1** → afbeelding is 2× zo groot als werkelijk (vergroting).\n\n**Notatie**: links = afbeelding, rechts = werkelijkheid.\n\n**Voorbeeld**: een plattegrond op schaal 1 : 200. Een kamer is 4 cm op de plattegrond. Hoeveel meter in het echt?\n• 1 cm op plattegrond = 200 cm in echt\n• 4 cm op plattegrond = 4 × 200 = 800 cm = **8 meter**\n\n**Andersom**: in het echt 12 m, hoe groot op kaart 1:200?\n• 12 m = 1200 cm\n• 1200 ÷ 200 = **6 cm** op de kaart",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="60" width="60" height="40" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="70" y "85" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">4 cm</text>
<text x="70" y "120" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">plattegrond</text>
<text x="120" y "85" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">×200</text>
<rect x="150" y="40" width="120" height="80" fill="rgba(255,112,67,0.18)" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="210" y "85" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">800 cm</text>
<text x="210" y "100" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">= 8 m</text>
<text x="210" y "140" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">werkelijk</text>
<text x="150" y "180" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">schaal 1 : 200</text>
</svg>`,
    checks: [
      {
        q: "Schaal 1 : 50. Iets is 6 cm op de kaart. Hoe groot in het echt?",
        options: ["3 m", "300 m", "30 cm", "60 m"],
        answer: 0,
        wrongHints: [
          null,
          "Te groot. 6 × 50 = 300 cm = 3 m.",
          "Niet rekenen: 6 × 5 = 30. Reken: 6 × 50 = 300 cm = 3 m.",
          "Te veel. 6 cm × 50 = 300 cm = 3 m.",
        ],
      },
    ],
  },
  {
    title: "Schaal toepassingen",
    explanation: "**Veel voorkomende schalen**:\n• **Wegenkaart**: 1 : 100 000 of 1 : 200 000 (1 cm = 1 of 2 km).\n• **Stadsplattegrond**: 1 : 10 000 (1 cm = 100 m).\n• **Bouwtekening**: 1 : 50 of 1 : 100.\n• **Maquette**: 1 : 87 (modelspoor) of 1 : 50.\n\n**Trucs**:\n• Bij schaal 1 : 100 000 → 1 cm = 100 000 cm = **1 km**.\n• Bij schaal 1 : 1 000 000 → 1 cm = 10 km.\n\n**Vergrotende schaal** (eerste getal > tweede):\n• Schaal 5 : 1 → afbeelding 5× groter dan werkelijk (microscoop, mier-tekening).\n\n**Algemene formule**:\n• werkelijke afstand = afstand op kaart × schaalfactor\n• afstand op kaart = werkelijke afstand ÷ schaalfactor",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y "35" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">schaal-typen</text>
<line x1="40" y1="45" x2="260" y2="45" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y "65" fill="${COLORS.text}" font-size="11" font-family="Arial">wegenkaart   1 : 100 000  → 1 cm = 1 km</text>
<text x="55" y "88" fill="${COLORS.text}" font-size="11" font-family="Arial">plattegrond  1 : 10 000  → 1 cm = 100 m</text>
<text x="55" y "111" fill="${COLORS.text}" font-size="11" font-family="Arial">bouwtekening 1 : 50      → 1 cm = 50 cm</text>
<text x="55" y "134" fill="${COLORS.text}" font-size="11" font-family="Arial">microscoop   100 : 1     → 100× vergroot</text>
<text x="150" y "175" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">werkelijk = kaart × schaal</text>
</svg>`,
    checks: [
      {
        q: "Op een kaart 1 : 100 000 zijn 2 plaatsen 7 cm uit elkaar. Echte afstand?",
        options: ["7 km", "700 m", "70 km", "7 m"],
        answer: 0,
        wrongHints: [
          null,
          "Te kort. Reken: 7 × 100 000 = 700 000 cm = 7 km.",
          "Te ver. 7 × 100 000 = 700 000 cm = 7000 m = 7 km.",
          "Te kort. Bij 1 : 100 000 is 1 cm = 1 km, dus 7 cm = 7 km.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht: gemengd",
    explanation: "**Drie korte vragen**:\n\n**A**: Vereenvoudig 24 : 36.\n• Beide deelbaar door 12: **2 : 3**\n\n**B**: 4 boekjes kosten €18. Hoeveel kosten 7 boekjes?\n• Per boekje: 18 ÷ 4 = €4,50\n• 7 × 4,50 = **€31,50**\n\n**C**: Schaal 1 : 25 000. Op de kaart 8 cm tussen twee dorpen. Werkelijke afstand?\n• 8 × 25 000 = 200 000 cm = 2000 m = **2 km**\n\n**Recap**:\n- Verhouding = a : b\n- Vereenvoudigen door beide te delen\n- Tabel of kruisproduct voor onbekende\n- Schaal = verhouding kaart : werkelijk\n\nGoed gedaan!",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y "32" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">A. 24 : 36 vereenvoudigd</text>
<rect x="200" y "18" width="60" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="230" y "37" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">2 : 3</text>
<text x="55" y "82" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">B. 7 boekjes kosten</text>
<rect x="200" y "68" width="60" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="230" y "87" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">€31,50</text>
<text x="55" y "132" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">C. werkelijke afstand</text>
<rect x="200" y "118" width="60" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="230" y "137" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">2 km</text>
<text x="150" y "180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">verhoudingen onder de knie 🏆</text>
</svg>`,
    checks: [
      {
        q: "Verhouding 2 : 5. In een groep van 35 personen — hoeveel zijn van het kleine deel?",
        options: ["10", "14", "5", "20"],
        answer: 0,
        wrongHints: [
          null,
          "14 = 2/5 × 35? Nee, 14 = ⅖ × 35 = 70/5 = 14. Wacht, dat is wel 14, maar... totaal delen = 2+5 = 7. Per deel = 35/7 = 5. Dus 2 delen = 10.",
          "5 = 35/7 = waarde van 1 deel. Maar je hebt 2 delen → 10.",
          "20 zou kloppen als verhouding 4:3 was. Hier 2:5 → totaal 7 delen, dus per deel 5, en 2 delen = 10.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const verhoudingen = {
  id: "verhoudingen",
  title: "Verhoudingen",
  emoji: "⚖️",
  level: "klas1-vwo",
  subject: "wiskunde",
  topics: ["WI.rekenen.verhoudingen"],
  intro: "Verhoudingen vergelijken hoeveelheden — bij recepten, schaalmodellen, kortingen, mengen. Hier leer je: notatie a : b, vereenvoudigen, verhoudingstabellen, kruisproduct, schaalmodellen en recepten omrekenen.",
  triggerKeywords: ["verhouding", "verhoudingen", "schaal", "evenredig", "kruisproduct", "verhoudingstabel"],
  chapters,
  steps,
};

export default verhoudingen;
