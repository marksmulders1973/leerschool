// Leerpad: Kwadratische vergelijkingen — H7 Wiskunde Flex deel 2 (klas 2)
// 12 stappen, 4 hoofdstukken. Voor klas 2: x² = c en factoriseren (geen ABC nog).

const COLORS = {
  axis: "#e0e6f0",
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const stepEmojis = [
  "❓", "📐", "🎯",                  // A. Wat is een kwadratische vergelijking
  "🟰", "🚫",                        // B. Eenvoudig x² = c
  "✂️", "0️⃣", "🧮",                  // C. Factoriseren
  "📊", "🏗️", "🏁", "🏆",            // D. Toepassingen
];

const chapters = [
  { letter: "A", title: "Wat is een kwadratische vergelijking?", emoji: "❓", from: 0, to: 2 },
  { letter: "B", title: "Eenvoudig: x² = c", emoji: "🟰", from: 3, to: 4 },
  { letter: "C", title: "Factoriseren: x(x + a) = 0", emoji: "✂️", from: 5, to: 7 },
  { letter: "D", title: "Toepassingen + eindopdracht", emoji: "🏁", from: 8, to: 11 },
];

const steps = [
  // ─── A. Wat is een kwadratische vergelijking? ────────────────────────────
  {
    title: "Een vergelijking met x² erin",
    explanation: "Een **kwadratische vergelijking** is een vergelijking waarin **x²** voorkomt. Voorbeelden:\n\n• **x² = 9**\n• **x² + 3 = 12**\n• **x² − 4x = 0**\n• **2x² + 5x − 3 = 0**\n\nEr mag van alles bij staan: een gewone x, een los getal — als er maar **ergens een x²** in zit.\n\n**Verschil met lineaire vergelijking** (die kennen we al):\n• **lineair**: alleen x, geen kwadraat (bv. 2x + 3 = 7)\n• **kwadratisch**: bevat x² (bv. x² + 2x = 8)\n\nLineaire vergelijkingen hebben meestal **één** oplossing. Kwadratische vergelijkingen hebben er vaak **twee** (of soms één, of geen). Dat zien we straks.",
    svg: `<svg viewBox="0 0 300 200">
<text x="60" y="40" fill="${COLORS.muted}" font-size="11" font-family="Arial">lineair (gewoon x):</text>
<rect x="40" y="50" width="220" height="34" fill="rgba(105,240,174,0.10)" stroke="${COLORS.curve2}" stroke-width="1.5" rx="6"/>
<text x="150" y="73" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">2x + 3 = 7</text>
<text x="60" y="115" fill="${COLORS.point}" font-size="11" font-family="Arial">kwadratisch (met x²):</text>
<rect x="40" y="125" width="220" height="34" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="150" y="148" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">x² + 2x = 8</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">overal waar x² in voorkomt → kwadratisch</text>
</svg>`,
    checks: [
      {
        q: "Welke is een kwadratische vergelijking?",
        options: [
          "x² − 2x = 5",
          "3x + 7 = 10",
          "x = 4",
          "5 + 5 = 10",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen x² in zicht — dit is een gewone (lineaire) vergelijking.",
          "Gewoon een waarde — er is geen kwadraat-term.",
          "Geen onbekende, geen x². Dit is gewoon een rekenfeit.",
        ],
      },
    ],
  },
  {
    title: "De standaardvorm: ax² + bx + c = 0",
    explanation: "Wiskundigen schrijven elke kwadratische vergelijking in een vaste vorm:\n\n**ax² + bx + c = 0**\n\nDrie getallen: a, b, c. Het rechterlid is **altijd 0** in de standaardvorm.\n\nVoorbeelden:\n• **x² + 5x + 6 = 0** → a = 1, b = 5, c = 6\n• **2x² − 3x − 1 = 0** → a = 2, b = −3, c = −1\n• **x² − 9 = 0** → a = 1, b = 0, c = −9 (geen x-term)\n• **x² + 4x = 0** → a = 1, b = 4, c = 0 (geen los getal)\n\n**Belangrijke regel**: a mag **niet 0** zijn (want dan is er geen x², en dus geen kwadratische vergelijking meer). a kan wel negatief zijn (bv. −x²).\n\nAls de vergelijking niet in standaardvorm staat, breng je 'm er eerst naar toe — alles naar links, 0 aan de rechterkant.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="46" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-family="Arial">ax² + bx + c = 0</text>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">drie getallen: a, b, c — rechterlid altijd 0</text>
<text x="55" y="115" fill="${COLORS.text}" font-size="13" font-family="Arial">x² + 5x + 6 = 0</text>
<text x="200" y="115" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">a=1, b=5, c=6</text>
<text x="55" y="140" fill="${COLORS.text}" font-size="13" font-family="Arial">2x² − 3x − 1 = 0</text>
<text x="200" y="140" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">a=2, b=−3, c=−1</text>
<text x="55" y="165" fill="${COLORS.text}" font-size="13" font-family="Arial">x² − 9 = 0</text>
<text x="200" y="165" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">a=1, b=0, c=−9</text>
</svg>`,
    checks: [
      {
        q: "In de vergelijking 3x² − 7x + 4 = 0, wat is b?",
        options: ["−7", "3", "4", "0"],
        answer: 0,
        wrongHints: [
          null,
          "3 is a (het getal vóór x²). De b is het getal vóór x.",
          "4 is c (het losse getal). De b zit bij x.",
          "0 zou betekenen geen x-term. Maar er staat duidelijk −7x in.",
        ],
      },
    ],
  },
  {
    title: "Wat betekent 'oplossen'?",
    explanation: "Een vergelijking **oplossen** = de waarde(s) van x vinden die de vergelijking **kloppend** maken.\n\nVoor de kwadratische vergelijking **x² + 2x − 8 = 0** zijn er twee oplossingen: **x = 2** en **x = −4**.\n\n**Check**:\n• Voor x = 2: 2² + 2·2 − 8 = 4 + 4 − 8 = 0 ✓\n• Voor x = −4: (−4)² + 2·(−4) − 8 = 16 − 8 − 8 = 0 ✓\n\nBeide kloppen — beide zijn dus oplossingen.\n\n**Aantal oplossingen** voor een kwadratische vergelijking:\n• meestal **2** oplossingen\n• soms **1** (als de twee oplossingen toevallig gelijk zijn)\n• soms **0** (geen oplossing, als x² = negatief getal eruit komt)\n\nIn dit hoofdstuk leren we **twee** manieren om kwadratische vergelijkingen op te lossen: via **x² = c** (al bekend) en via **factoriseren** (nieuw).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="22" width="180" height="36" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="46" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">x² + 2x − 8 = 0</text>
<line x1="150" y1="62" x2="150" y2="84" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="145,79 150,89 155,79" fill="${COLORS.point}"/>
<text x="150" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">welke x maken dit waar?</text>
<rect x="50" y="120" width="80" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="90" y="144" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">x = 2</text>
<rect x="170" y="120" width="80" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="210" y="144" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">x = −4</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">een kwadratische vergelijking heeft vaak twee oplossingen</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel oplossingen heeft een kwadratische vergelijking meestal?",
        options: ["2", "1", "0", "Oneindig"],
        answer: 0,
        wrongHints: [
          null,
          "1 oplossing kan voorkomen, maar dat is een speciaal geval. Meestal zijn het er **twee**.",
          "0 oplossingen is alleen als x² = negatief eruit komt — uitzondering, geen regel.",
          "Een vergelijking heeft hooguit een paar oplossingen, niet eindeloos veel.",
        ],
      },
    ],
  },

  // ─── B. Eenvoudig: x² = c ────────────────────────────
  {
    title: "Methode 1: x² = c (herhaling)",
    explanation: "Als de vergelijking de vorm **x² = c** heeft (waarbij c een getal is), pas je rechtstreeks de wortel toe:\n\n**x = ±√c**\n\nDeze methode kennen we al uit H5.\n\n**Voorbeeld**: x² − 16 = 0\n1. Verplaats: x² = 16\n2. Wortel: x = ±√16\n3. Oplossing: **x = 4** of **x = −4**\n\n**Voorbeeld**: 2x² = 50\n1. Deel door 2: x² = 25\n2. Wortel: x = ±√25\n3. **x = 5** of **x = −5**\n\nDeze methode werkt **als er geen losse x-term** in de vergelijking zit (dus b = 0). Zodra er ax² + **bx** + c staat, moet je een andere methode gebruiken.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="80" y="22" width="140" height="36" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="46" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">x² − 16 = 0</text>
<text x="150" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">x² = 16</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">x = ±√16</text>
<rect x="50" y="125" width="80" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="90" y="149" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">x = 4</text>
<rect x="170" y="125" width="80" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="210" y="149" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">x = −4</text>
<text x="150" y="185" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">werkt alleen zonder bx-term</text>
</svg>`,
    checks: [
      {
        q: "Los op: x² − 49 = 0.",
        options: ["x = ±7", "x = 7", "x = ±49", "x = 24,5"],
        answer: 0,
        wrongHints: [
          null,
          "7 klopt, maar er is ook een **negatieve**: (−7)² = 49 ook. Dus twee oplossingen.",
          "Je hebt 49 zelf overgenomen. Pas √ toe: √49 = 7 (en −7).",
          "24,5 = 49 / 2. Maar bij x² = c gebruik je √c.",
        ],
      },
    ],
  },
  {
    title: "Wanneer geen oplossing?",
    explanation: "Niet elke kwadratische vergelijking heeft oplossingen. Als x² = **negatief getal** eruit komt, is er **geen** oplossing.\n\n**Voorbeeld**: x² + 4 = 0\n• Verplaats: x² = −4\n• Maar een kwadraat is **nooit negatief** (zie H5)\n• Dus **geen oplossing**\n\n**Andere voorbeelden zonder oplossing**:\n• x² + 7 = 0 → x² = −7 → geen oplossing\n• 2x² + 3 = 1 → 2x² = −2 → x² = −1 → geen oplossing\n\n**Trucje** om snel te zien: als je x² alleen krijgt en het rechter getal is **negatief**, is er geen oplossing. Bij positief: 2 oplossingen. Bij 0: 1 oplossing (x = 0).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="80" y="22" width="140" height="36" fill="rgba(255,112,67,0.15)" stroke="${COLORS.curveAlt}" stroke-width="2" rx="6"/>
<text x="150" y="46" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">x² + 4 = 0</text>
<text x="150" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">x² = −4</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-style="italic">een kwadraat kan nooit negatief zijn</text>
<rect x="80" y="130" width="140" height="40" fill="rgba(255,112,67,0.18)" stroke="${COLORS.curveAlt}" stroke-width="2" rx="6"/>
<text x="150" y="156" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="14" font-family="Arial" font-weight="bold">geen oplossing</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel oplossingen heeft x² + 9 = 0?",
        options: ["0", "1", "2", "Oneindig"],
        answer: 0,
        wrongHints: [
          null,
          "1 oplossing zou betekenen x² = 0. Hier is x² = −9 — onmogelijk.",
          "2 oplossingen krijg je bij x² = positief getal. Hier is het negatief.",
          "Vergelijkingen hebben hooguit een paar oplossingen, niet eindeloos.",
        ],
      },
    ],
  },

  // ─── C. Factoriseren ────────────────────────────
  {
    title: "Methode 2: factoriseren — wat is het?",
    explanation: "Bij vergelijkingen met een **bx-term** werkt x² = c niet meer. Dan gebruiken we **factoriseren**.\n\n**Wat betekent factoriseren?** Een uitdrukking schrijven als **product** van twee delen.\n\nVoorbeeld:\n• Uit **6** kun je factoren halen: 6 = **2 · 3**\n• Uit **x² + 5x** kun je factoren halen: x² + 5x = **x · (x + 5)**\n\nIn de tweede regel hebben we **x buiten haakjes** gehaald — een gemeenschappelijke factor.\n\n**Hoe?** Kijk welke variabele in **alle termen** voorkomt. In x² + 5x staat x in beide termen (x² = x·x, en 5x = 5·x). Dus haal x buiten:\n\n• x² + 5x = x · (x + 5)\n\n**Tip**: bij elke kwadratische vergelijking zonder los getal (c = 0) kun je deze truc toepassen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="40" width="100" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="90" y="65" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">x² + 5x</text>
<text x="155" y="65" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">=</text>
<rect x="180" y="40" width="100" height="40" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="230" y="65" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">x · (x + 5)</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">x staat in beide termen → buiten haakjes</text>
<rect x="40" y="115" width="220" height="2" fill="${COLORS.curve}" opacity="0.4"/>
<text x="60" y="138" fill="${COLORS.text}" font-size="12" font-family="Arial">x² + 3x = x(x + 3)</text>
<text x="60" y="158" fill="${COLORS.text}" font-size="12" font-family="Arial">x² − 7x = x(x − 7)</text>
<text x="60" y="178" fill="${COLORS.text}" font-size="12" font-family="Arial">2x² + 6x = 2x(x + 3)</text>
</svg>`,
    checks: [
      {
        q: "Factoriseer x² + 4x.",
        options: ["x(x + 4)", "x² · 4x", "(x + 2)²", "4x(x + 1)"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is geen factoriseren — gewoon vermenigvuldigen geeft niet x² + 4x.",
          "(x+2)² = x² + 4x + 4. Het extra +4 hoort hier niet.",
          "Werk uit: 4x(x+1) = 4x² + 4x. Dat heeft 4x², niet x².",
        ],
      },
    ],
  },
  {
    title: "Een product = 0 → één factor = 0",
    explanation: "Hier komt de magie. Als een **product** van twee dingen gelijk is aan **0**, dan moet **minstens één** van die dingen 0 zijn.\n\n**Logisch**: 5 · 0 = 0. 0 · 7 = 0. Maar 3 · 4 ≠ 0.\n\nWiskundig: als **A · B = 0**, dan **A = 0** of **B = 0** (of allebei).\n\nDit is **de** truc voor het oplossen van kwadratische vergelijkingen via factoriseren.\n\n**Voorbeeld**: x · (x + 5) = 0\n\nDit is een product van **x** en **(x + 5)**. Volgens de regel:\n• x = 0, **of**\n• x + 5 = 0 → x = −5\n\nTwee oplossingen: **x = 0** of **x = −5**.\n\n**Check**:\n• Voor x = 0: 0 · (0+5) = 0 · 5 = 0 ✓\n• Voor x = −5: (−5) · (−5+5) = (−5) · 0 = 0 ✓\n\nAllebei kloppen.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="30" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">A · B = 0  →  A = 0  óf  B = 0</text>
<rect x="40" y="48" width="220" height="2" fill="${COLORS.curve}" opacity="0.4"/>
<rect x="80" y="65" width="140" height="36" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="89" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">x · (x + 5) = 0</text>
<line x1="100" y1="105" x2="100" y2="125" stroke="${COLORS.point}" stroke-width="2"/>
<line x1="200" y1="105" x2="200" y2="125" stroke="${COLORS.point}" stroke-width="2"/>
<text x="100" y="143" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">x = 0</text>
<text x="200" y="143" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">x + 5 = 0</text>
<rect x="60" y="155" width="80" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="100" y="177" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">x = 0</text>
<rect x="160" y="155" width="80" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="200" y="177" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">x = −5</text>
</svg>`,
    checks: [
      {
        q: "Los op: x · (x − 7) = 0.",
        options: ["x = 0 of x = 7", "x = 7", "x = 0", "x = −7"],
        answer: 0,
        wrongHints: [
          null,
          "7 is één oplossing. Maar er is ook x = 0 (dan is de eerste factor 0).",
          "0 is één oplossing. Maar er is ook x = 7 (dan is x − 7 = 0).",
          "−7 zou kloppen bij x · (x + 7) = 0. Hier staat x − 7 = 0, dus x = 7.",
        ],
      },
    ],
  },
  {
    title: "Volledige methode: factoriseren + oplossen",
    explanation: "Combineer de twee stappen tot één methode voor vergelijkingen waarin **c = 0** (geen los getal):\n\n**Stappenplan voor x² + bx = 0**:\n\n1. Schrijf in standaardvorm (alles links, 0 rechts).\n2. Haal **x buiten haakjes**.\n3. Pas de regel toe: één van de factoren = 0.\n4. Los elke factor op.\n\n**Voorbeeld**: x² − 3x = 0\n\n```\n  x² − 3x = 0\n  x(x − 3) = 0          (x buiten haakjes)\n  x = 0  of  x − 3 = 0\n  x = 0  of  x = 3\n```\n\n**Twee oplossingen**: x = 0 en x = 3.\n\n**Voorbeeld 2**: 2x² + 8x = 0\n\n```\n  2x² + 8x = 0\n  2x(x + 4) = 0         (2x buiten haakjes)\n  2x = 0  of  x + 4 = 0\n   x = 0  of  x = −4\n```",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<text x="55" y="42" fill="${COLORS.text}" font-size="13" font-family="Arial">x² − 3x = 0</text>
<text x="55" y="65" fill="${COLORS.text}" font-size="13" font-family="Arial">x(x − 3) = 0</text>
<text x="55" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">x = 0  of  x − 3 = 0</text>
<rect x="55" y="105" width="90" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="100" y="127" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">x = 0</text>
<rect x="155" y="105" width="90" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="200" y="127" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">x = 3</text>
<text x="55" y="160" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">altijd: factoriseren → één factor = 0</text>
</svg>`,
    checks: [
      {
        q: "Los op: x² + 6x = 0.",
        options: [
          "x = 0 of x = −6",
          "x = 0 of x = 6",
          "x = ±6",
          "x = −6",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bijna! x(x+6) = 0 geeft x = 0 of x+6 = 0, dus x = **−6** (let op het minteken).",
          "x² = c regel is voor zonder x-term. Hier is een +6x — gebruik factoriseren.",
          "Eén oplossing vergeten: ook x = 0 hoort erbij.",
        ],
      },
    ],
  },

  // ─── D. Toepassingen + eindopdracht ────────────────────────────
  {
    title: "Toepassing: nulpunten van een parabool",
    explanation: "Kwadratische vergelijkingen hangen direct samen met **parabolen** (zie het andere leerpad).\n\nDe vergelijking **y = x² + bx + c** geeft een parabool. Wil je de **nulpunten** weten (waar de parabool de x-as snijdt)? Vraag je af: voor welke x is **y = 0**?\n\nDus los op: **x² + bx + c = 0**. Een kwadratische vergelijking!\n\n**Voorbeeld**: parabool y = x² − 4x. Waar snijdt hij de x-as?\n\n• Stel y = 0: x² − 4x = 0\n• Factoriseer: x(x − 4) = 0\n• x = 0 of x = 4\n\nDus de parabool snijdt de x-as bij **x = 0** en **x = 4**.\n\nKwadratische vergelijkingen oplossen = nulpunten zoeken. Praktische manier om grafiek te begrijpen.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="20" y1="100" x2="280" y2="100" stroke="${COLORS.axis}" stroke-width="1"/>
<line x1="80" y1="20" x2="80" y2="180" stroke="${COLORS.axis}" stroke-width="1"/>
<path d="M 80 100 Q 130 220 200 100" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<circle cx="80" cy="100" r="6" fill="${COLORS.point}"/>
<text x="60" y="92" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">x = 0</text>
<circle cx="200" cy="100" r="6" fill="${COLORS.point}"/>
<text x="195" y="92" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">x = 4</text>
<text x="220" y="60" fill="${COLORS.curve}" font-size="11" font-family="Arial">y = x² − 4x</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">nulpunten = oplossingen van x² − 4x = 0</text>
</svg>`,
    checks: [
      {
        q: "Wat zijn de nulpunten van y = x² + 5x?",
        options: [
          "x = 0 en x = −5",
          "x = 0 en x = 5",
          "x = ±5",
          "Geen nulpunten",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bijna! Stel y = 0: x² + 5x = 0 → x(x+5) = 0 → x = 0 of x = **−5** (niet +5).",
          "Bij x² + 5x is er geen − teken — dus geen ±-vorm. Gebruik factoriseren: x(x+5).",
          "Er zijn wel nulpunten: x = 0 is altijd een nulpunt als c = 0.",
        ],
      },
    ],
  },
  {
    title: "Toepassing: oppervlakte-vraagstuk",
    explanation: "**Praktisch voorbeeld**. Een rechthoek heeft een **lengte** die 3 m langer is dan de **breedte**. De oppervlakte is 28 m². Wat zijn de afmetingen?\n\n**Stappen**:\n\n1. Noem de breedte **x**. Dan is de lengte **x + 3**.\n2. Oppervlakte: x · (x + 3) = 28\n3. Werk uit: x² + 3x = 28\n4. In standaardvorm: x² + 3x − 28 = 0\n\nNu oplossen — maar deze heeft **geen factor x** te halen (door de −28). We moeten andere tactiek (factoriseren naar twee haakjes).\n\nVoor klas 2 zou je deze kunnen oplossen door slim **proberen**: welke twee getallen geven samen 3 (= b) én vermenigvuldigd −28 (= c)?\n\n• 7 en −4: 7 + (−4) = 3 ✓ en 7 · (−4) = −28 ✓\n\nDus: x² + 3x − 28 = (x + 7)(x − 4) = 0\nOplossingen: x = −7 of x = 4.\n\nMaar breedte kan niet negatief zijn — dus **x = 4 m** (breedte). Lengte = 4 + 3 = **7 m**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="60" width="160" height="80" fill="rgba(0,200,83,0.18)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="140" y="50" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">lengte = x + 3</text>
<text x="35" y="103" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">x</text>
<text x="140" y="105" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">opp = 28 m²</text>
<text x="60" y="170" fill="${COLORS.text}" font-size="12" font-family="Arial">x · (x + 3) = 28</text>
<rect x="60" y="178" width="180" height="2" fill="${COLORS.point}" opacity="0.5"/>
<text x="60" y="195" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">x = 4 m  ·  lengte = 7 m</text>
</svg>`,
    checks: [
      {
        q: "Welk paar getallen geeft som 5 én product 6?",
        options: ["2 en 3", "5 en 1", "−2 en 3", "1 en 5"],
        answer: 0,
        wrongHints: [
          null,
          "5+1 = 6, niet 5. En 5·1 = 5, niet 6. Beide kloppen niet.",
          "−2+3 = 1, niet 5. Klopt niet.",
          "1+5 = 6, niet 5. En 1·5 = 5, niet 6.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht 1: x² − 5x = 0",
    explanation: "Tijd om alles bij elkaar te zetten. Los op: **x² − 5x = 0**.\n\n**Stappen**:\n\n```\n  x² − 5x = 0\n  x(x − 5) = 0          (x buiten haakjes)\n  x = 0  of  x − 5 = 0\n  x = 0  of  x = 5\n```\n\n**Twee oplossingen**: **x = 0** of **x = 5**.\n\n**Check beide**:\n• Voor x = 0: 0² − 5·0 = 0 − 0 = 0 ✓\n• Voor x = 5: 5² − 5·5 = 25 − 25 = 0 ✓\n\nAllebei kloppen.\n\n**Belangrijk**: vergeet nooit dat **x = 0** ook een oplossing is bij dit type. Veel leerlingen schrijven alleen x = 5 en vergeten de eerste oplossing.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<text x="55" y="42" fill="${COLORS.text}" font-size="13" font-family="Arial">x² − 5x = 0</text>
<text x="55" y="65" fill="${COLORS.text}" font-size="13" font-family="Arial">x(x − 5) = 0</text>
<text x="55" y="88" fill="${COLORS.text}" font-size="13" font-family="Arial">x = 0  of  x − 5 = 0</text>
<rect x="55" y="105" width="90" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="100" y="127" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">x = 0</text>
<rect x="160" y="105" width="90" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="205" y="127" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">x = 5</text>
<text x="55" y="165" fill="${COLORS.curve}" font-size="11" font-family="Arial">check: 0² − 5·0 = 0 ✓</text>
<text x="55" y="180" fill="${COLORS.curve}" font-size="11" font-family="Arial">check: 5² − 5·5 = 0 ✓</text>
</svg>`,
    checks: [
      {
        q: "Los op: x² − 8x = 0.",
        options: [
          "x = 0 of x = 8",
          "x = 8",
          "x = 0",
          "x = ±8",
        ],
        answer: 0,
        wrongHints: [
          null,
          "8 is één oplossing maar je vergeet x = 0 (dan is x · (x − 8) ook 0).",
          "0 is één oplossing maar je vergeet x = 8 (dan is x − 8 = 0).",
          "x² = c regel is alleen zonder x-term. Hier wel een x-term — factoriseren werkt.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht 2: gemengd",
    explanation: "**Drie korte vraagstukken** waar je beide methodes voor nodig hebt.\n\n**A** — Los op: x² − 36 = 0 (geen x-term)\n• x² = 36 → x = ±√36 → **x = 6** of **x = −6**\n\n**B** — Los op: x² + 7x = 0 (geen los getal)\n• x(x + 7) = 0 → x = 0 of x + 7 = 0 → **x = 0** of **x = −7**\n\n**C** — Een vierkant heeft oppervlakte 64 m². Wat is de zijde?\n• zijde² = 64 → zijde = √64 = **8 m** (alleen positief, want zijde kan niet negatief)\n\n**Trucje voor het type herkennen**:\n• **Geen x-term** (alleen x² en getal): gebruik **x² = c** methode.\n• **Geen los getal** (alleen x² en x): gebruik **factoriseren** (x buiten haakjes).\n• **Beide aanwezig**: factoriseren naar twee haakjes (zoals oppervlakte-voorbeeld).",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="35" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">A.  x² − 36 = 0</text>
<rect x="180" y="20" width="80" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="220" y="40" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">x = ±6</text>
<text x="55" y="85" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">B.  x² + 7x = 0</text>
<rect x="170" y="70" width="100" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="220" y="90" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">x = 0, x = −7</text>
<text x="55" y="135" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">C.  zijde² = 64</text>
<rect x="180" y="120" width="80" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="220" y="140" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">z = 8</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">je hebt H7 onder de knie 🎓</text>
</svg>`,
    checks: [
      {
        q: "Los op: x² + 9x = 0.",
        options: [
          "x = 0 of x = −9",
          "x = 0 of x = 9",
          "x = ±9",
          "x = −9",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bijna! Bij x(x + 9) = 0 → x + 9 = 0 → x = **−9** (let op: minteken).",
          "x² = c regel is voor zonder x-term. Hier wél een x-term — gebruik factoriseren.",
          "Vergeet x = 0 niet als oplossing.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kwadratischeVergelijkingen = {
  id: "kwadratische-vergelijkingen",
  title: "Kwadratische vergelijkingen",
  emoji: "🟰",
  level: "klas1-vwo",
  subject: "wiskunde",
  intro: "H7 uit Wiskunde Flex deel 2: hoe los je een vergelijking met x² erin op? Twee methodes: rechtstreeks via x² = c, en factoriseren via x buiten haakjes. Met praktische toepassingen.",
  triggerKeywords: ["kwadratische vergelijking", "factoriseren", "x² = ", "buiten haakjes", "x² + bx", "ax² + bx + c"],
  chapters,
  steps,
};

export default kwadratischeVergelijkingen;
