// Leerpad: Lineaire formules en vergelijkingen
// Conceptueel — werkt voor elk boek waar dit onderwerp voorkomt
// (G&R FLEX 2 H3, Moderne Wiskunde, Nieuwe Wiskunde, etc.)
// 16 stappen, 5 hoofdstukken, op basisniveau.

const COLORS = {
  axis: "#e0e6f0",
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const baseAxes = `<line x1="20" y1="100" x2="280" y2="100" stroke="${COLORS.axis}" stroke-width="1"/>
<line x1="150" y1="20" x2="150" y2="180" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="270" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">x</text>
<text x="155" y="28" fill="${COLORS.text}" font-size="11" font-family="Arial">y</text>`;

const stepEmojis = [
  "📈", "🔢", "📋",                 // A. Wat is een lineaire formule
  "📐", "🅱️", "🔀",                 // B. y = ax + b
  "🎯", "📍", "✏️",                  // C. Lijn tekenen / formule opstellen
  "⚖️", "🔄", "🧮",                  // D. Vergelijkingen oplossen
  "🚗", "💰", "🏁", "🏆",            // E. Toepassingen + eind
  "📝",                              // F. Examenstijl
];

const chapters = [
  { letter: "A", title: "Wat is een lineaire formule?", emoji: "📈", from: 0, to: 2 },
  { letter: "B", title: "y = ax + b — helling en snijpunt", emoji: "📐", from: 3, to: 5 },
  { letter: "C", title: "Lijn tekenen + formule opstellen", emoji: "✏️", from: 6, to: 8 },
  { letter: "D", title: "Vergelijkingen oplossen — balansmethode", emoji: "⚖️", from: 9, to: 11 },
  { letter: "E", title: "Toepassingen + eindopdrachten", emoji: "🏁", from: 12, to: 15 },
  { letter: "F", title: "Examenstijl — VMBO-GT CSE", emoji: "📝", from: 16, to: 16 },
];

const steps = [
  // ─── A. Wat is een lineaire formule? ────────────────────────────
  {
    title: "Wat is een lineaire formule?",
    explanation: "Een **lineaire formule** is een formule waarin de uitkomst (y) **rechtevenredig** stijgt of daalt met x. Bij elke stap +1 in x verandert y met een **vast** bedrag.\n\nVoorbeelden:\n• **y = x + 3** (bij elke +1 in x, +1 in y)\n• **y = 2x** (bij elke +1 in x, +2 in y)\n• **y = -x + 5** (bij elke +1 in x, -1 in y)\n• **y = ½x + 1** (bij elke +1 in x, +½ in y)\n\n**Wat 'lineair' betekent**: als je punten van zo'n formule plot op een assenstelsel, krijg je een **rechte lijn** (Latijn: linea = lijn).\n\nKwadratische formules (y = x²) gaven ons een **bocht** (parabool). Lineaire formules geven ons altijd een **rechte lijn** — geen bocht, geen knik.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<line x1="60" y1="160" x2="240" y2="40" stroke="${COLORS.curve}" stroke-width="2.5"/>
<text x="200" y="50" fill="${COLORS.curve}" font-size="11" font-family="Arial" font-weight="bold">y = x + 1</text>
<circle cx="120" cy="120" r="3" fill="${COLORS.point}"/>
<circle cx="150" cy="100" r="3" fill="${COLORS.point}"/>
<circle cx="180" cy="80" r="3" fill="${COLORS.point}"/>
<circle cx="210" cy="60" r="3" fill="${COLORS.point}"/>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">lineair = rechte lijn (geen bocht)</text>
</svg>`,
    checks: [
      {
        q: "Welke formule is **lineair**?",
        options: [
          "y = 2x + 3",
          "y = x²",
          "y = √x",
          "y = x³",
        ],
        answer: 0,
        wrongHints: [
          null,
          "x² geeft een **parabool**, geen rechte lijn. Geen lineaire formule.",
          "√x geeft een gebogen lijn (een wortelfunctie). Niet lineair.",
          "x³ geeft een S-vorm. Ook niet lineair.",
        ],
      },
    ],
  },
  {
    title: "Tabel maken voor y = 2x + 1",
    explanation: "Net als bij andere formules: vul x in, reken y uit.\n\n**Voorbeeld** y = 2x + 1:\n\n| x | 2x | 2x + 1 |\n|---|----|---------|\n| 0 | 0 | 1 |\n| 1 | 2 | 3 |\n| 2 | 4 | 5 |\n| 3 | 6 | 7 |\n| 4 | 8 | 9 |\n\n**Patroon**: bij elke stap +1 in x, +**2** in y. Altijd dezelfde sprong — dat is de essentie van 'lineair'.\n\nDie sprong-grootte is hier **2**. Als de formule y = 5x + 3 was, zou de sprong **5** zijn.\n\nDeze sprong heeft een naam: **helling** (of richtingscoëfficiënt). Daar gaan we mee verder.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="100" y1="20" x2="100" y2="190" stroke="${COLORS.curve}" stroke-width="1"/>
<line x1="180" y1="20" x2="180" y2="190" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="70" y="36" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">x</text>
<text x="140" y="36" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">2x</text>
<text x="220" y="36" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">y = 2x+1</text>
<text x="70" y="63" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">0</text><text x="140" y="63" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">0</text><text x="220" y="63" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">1</text>
<text x="70" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">1</text><text x="140" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">2</text><text x="220" y="86" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">3</text>
<text x="70" y="109" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">2</text><text x="140" y="109" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">4</text><text x="220" y="109" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">5</text>
<text x="70" y="132" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">3</text><text x="140" y="132" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">6</text><text x="220" y="132" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">7</text>
<text x="70" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">4</text><text x="140" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">8</text><text x="220" y="155" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">9</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-style="italic">elke stap: y stijgt met +2</text>
</svg>`,
    checks: [
      {
        q: "Bij y = 3x + 2, wat is y als x = 4?",
        options: ["14", "12", "9", "24"],
        answer: 0,
        wrongHints: [
          null,
          "Je bent de + 2 vergeten. Reken: 3·4 + 2.",
          "Je hebt 3 + 4 + 2 gedaan (optellen). Maar 3x betekent 3 keer x.",
          "Je hebt 3 · 4 · 2 gedaan. Maar de formule is 3x **+** 2 (plus, niet keer).",
        ],
      },
    ],
  },
  {
    title: "Lineair vs niet-lineair — herkennen aan tabel",
    explanation: "Hoe weet je vanuit een **tabel** of de formule lineair is?\n\n**Trucje**: tel hoeveel y verandert bij elke stap +1 in x. Als dit telkens **dezelfde sprong** is, is de formule lineair.\n\n**Lineair voorbeeld**:\n\n| x | y |\n|---|---|\n| 0 | 5 |\n| 1 | 8 |\n| 2 | 11 |\n| 3 | 14 |\n\nVerschillen: 8−5=3, 11−8=3, 14−11=3. Telkens **+3**. → **Lineair**.\n\n**Niet-lineair voorbeeld** (kwadratisch):\n\n| x | y |\n|---|---|\n| 0 | 0 |\n| 1 | 1 |\n| 2 | 4 |\n| 3 | 9 |\n\nVerschillen: 1−0=1, 4−1=3, 9−4=5. Niet gelijk! → **Niet lineair** (parabool).\n\nDus: gelijke sprongen = lineair.",
    svg: `<svg viewBox="0 0 300 200">
<text x="80" y="30" text-anchor="middle" fill="${COLORS.curve}" font-size="12" font-family="Arial" font-weight="bold">lineair</text>
<text x="220" y="30" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="12" font-family="Arial" font-weight="bold">niet lineair</text>
<line x1="150" y1="20" x2="150" y2="190" stroke="${COLORS.text}" stroke-width="1" opacity="0.3"/>
<text x="50" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">5</text><text x="100" y="55" fill="${COLORS.curve2}" font-size="10" font-family="Arial">+3 →</text>
<text x="50" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">8</text><text x="100" y="75" fill="${COLORS.curve2}" font-size="10" font-family="Arial">+3 →</text>
<text x="50" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">11</text><text x="100" y="95" fill="${COLORS.curve2}" font-size="10" font-family="Arial">+3 →</text>
<text x="50" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">14</text>
<text x="50" y="145" fill="${COLORS.point}" font-size="10" font-family="Arial">gelijke sprongen ✓</text>
<text x="190" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">0</text><text x="240" y="55" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">+1 →</text>
<text x="190" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">1</text><text x="240" y="75" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">+3 →</text>
<text x="190" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">4</text><text x="240" y="95" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">+5 →</text>
<text x="190" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">9</text>
<text x="190" y="145" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">ongelijke sprongen ✗</text>
</svg>`,
    checks: [
      {
        q: "Welke tabel is lineair? (sprongen tussen y-waardes)",
        options: [
          "y = 2, 5, 8, 11 (sprong +3 telkens)",
          "y = 1, 2, 4, 8 (sprong verdubbelt)",
          "y = 0, 1, 4, 9 (sprong groeit)",
          "y = 1, 1, 1, 1 (geen verandering)",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verdubbeling is exponentieel, niet lineair. Bij lineair zijn de sprongen telkens **gelijk**.",
          "Bij lineair zijn alle sprongen even groot. 0→1→4→9 heeft sprongen +1, +3, +5 — niet gelijk.",
          "Geen verandering is een speciaal geval (y = constant). Wel lineair, maar het 'gewone' antwoord met sprong +3 is duidelijker.",
        ],
      },
    ],
  },

  // ─── B. y = ax + b ────────────────────────────
  {
    title: "De algemene vorm: y = ax + b",
    explanation: "Elke lineaire formule kun je schrijven in deze **standaardvorm**:\n\n**y = ax + b**\n\nTwee belangrijke getallen:\n• **a** = de **helling** (richtingscoëfficiënt)\n• **b** = het **snijpunt met de y-as** (waar de lijn de y-as kruist)\n\nVoorbeelden:\n• **y = 3x + 2** → a = 3, b = 2\n• **y = -x + 5** → a = -1, b = 5\n• **y = ½x − 4** → a = ½, b = -4\n• **y = 7x** → a = 7, b = 0 (geen los getal)\n• **y = 6** → a = 0, b = 6 (constante, dus horizontale lijn)\n\nKlinkt bekend? De a en b doen iets vergelijkbaars als bij parabolen y = ax² + bx + c, maar nu zonder x².",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="46" text-anchor="middle" fill="${COLORS.text}" font-size="18" font-family="Arial">y = ax + b</text>
<text x="80" y="90" text-anchor="middle" fill="${COLORS.curve}" font-size="11" font-family="Arial" font-weight="bold">a</text>
<text x="80" y="105" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">helling</text>
<text x="80" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">(stijgt of daalt)</text>
<text x="220" y="90" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">b</text>
<text x="220" y="105" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">snijpunt y-as</text>
<text x="220" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">(start-waarde)</text>
<text x="60" y="155" fill="${COLORS.text}" font-size="12" font-family="Arial">y = 3x + 2 →</text>
<text x="200" y="155" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">a=3, b=2</text>
<text x="60" y="180" fill="${COLORS.text}" font-size="12" font-family="Arial">y = ½x − 4 →</text>
<text x="200" y="180" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">a=½, b=−4</text>
</svg>`,
    checks: [
      {
        q: "In y = -2x + 7, wat is b?",
        options: ["7", "-2", "0", "x"],
        answer: 0,
        wrongHints: [
          null,
          "−2 is **a** (de helling). De b is het losse getal achteraan.",
          "0 zou zijn als er geen los getal is. Maar er staat +7.",
          "x is de variabele. b is een getal, namelijk de y-waarde waar de lijn de y-as snijdt.",
        ],
      },
      {
        q: "In y = 4x, wat is b?",
        options: ["0", "4", "x", "1"],
        answer: 0,
        wrongHints: [
          null,
          "4 is a (helling). Er is geen los getal — dus b = 0.",
          "x is geen getal. b is een getal.",
          "Niet 1. Als er geen los getal staat, is b = 0 (de lijn gaat dan door de oorsprong).",
        ],
      },
    ],
  },
  {
    title: "De helling a — wat doet die?",
    explanation: "De **helling a** vertelt je hoe **steil** de lijn loopt:\n\n• **a > 0** (positief) → lijn **stijgt** (van linksonder naar rechtsboven)\n• **a < 0** (negatief) → lijn **daalt** (van linksboven naar rechtsonder)\n• **a = 0** → lijn is **horizontaal** (constant)\n• **a groot** (zoals 3 of 5) → steil\n• **a klein** (zoals ½ of 0,1) → flauw\n\nIn cijfers: helling a = **'hoeveel y stijgt per +1 in x'**.\n• Bij y = 2x + 1 stijgt y met **2** per stap (helling 2)\n• Bij y = -3x + 5 daalt y met **3** per stap (helling -3)\n\nGrafisch: hoe **steiler** de lijn, hoe **groter** |a|.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<line x1="100" y1="170" x2="200" y2="30" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="105" y="35" fill="${COLORS.curve}" font-size="10" font-family="Arial">a = 3 (steil)</text>
<line x1="50" y1="160" x2="270" y2="40" stroke="${COLORS.curve2}" stroke-width="2"/>
<text x="200" y="55" fill="${COLORS.curve2}" font-size="10" font-family="Arial">a = ½ (flauw)</text>
<line x1="60" y1="50" x2="240" y2="170" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="60" y="45" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">a = -1 (daalt)</text>
<line x1="40" y1="100" x2="260" y2="100" stroke="${COLORS.point}" stroke-width="2"/>
<text x="200" y="115" fill="${COLORS.point}" font-size="10" font-family="Arial">a = 0 (horizontaal)</text>
</svg>`,
    checks: [
      {
        q: "Welke formule heeft de **steilste** stijging?",
        options: [
          "y = 5x",
          "y = 2x",
          "y = ½x",
          "y = 0,1x",
        ],
        answer: 0,
        wrongHints: [
          null,
          "2 is steiler dan ½ of 0,1, maar 5 is nog steiler.",
          "½ is een flauwe helling (helft van standaard). 5 is veel steiler.",
          "0,1 is heel flauw. Hoe groter de helling, hoe steiler — kies de grootste a.",
        ],
      },
      {
        q: "Welke formule **daalt**?",
        options: [
          "y = -3x + 1",
          "y = 3x + 1",
          "y = x − 1",
          "y = 5",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Positieve a = stijging. Voor dalen heb je een negatieve helling nodig.",
          "Positieve a (=1) = stijging. De −1 is de b, niet de helling.",
          "a = 0 betekent horizontaal — niet dalen, niet stijgen.",
        ],
      },
    ],
  },
  {
    title: "Het snijpunt b",
    explanation: "**b** is de **start-waarde**, ofwel waar de lijn de y-as snijdt.\n\nBij **x = 0** is **y = b**. Want: y = a·0 + b = 0 + b = **b**.\n\nDus als je de y-as wilt vinden, kijk naar **(0, b)**.\n\nVoorbeelden:\n• y = 2x + **3** → snijpunt y-as is (0, 3)\n• y = -x + **5** → snijpunt y-as is (0, 5)\n• y = 4x − **2** → snijpunt y-as is (0, -2)\n• y = 3x → snijpunt y-as is (0, 0) — door de oorsprong\n\n**Praktisch nut**: in een verhaaltje is b vaak de 'startwaarde' bij tijd 0. Bv. 'beginbedrag op spaarrekening', 'temperatuur bij start', 'beginstand op de meter'.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<line x1="60" y1="160" x2="240" y2="40" stroke="${COLORS.curve}" stroke-width="2.5"/>
<circle cx="150" cy="70" r="6" fill="${COLORS.point}"/>
<text x="160" y="68" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">(0, b)</text>
<text x="160" y="83" fill="${COLORS.muted}" font-size="10" font-family="Arial">snijpunt y-as</text>
<text x="200" y="50" fill="${COLORS.curve}" font-size="11" font-family="Arial">y = ax + b</text>
<text x="155" y="138" fill="${COLORS.muted}" font-size="10" font-family="Arial">x = 0</text>
</svg>`,
    checks: [
      {
        q: "Bij y = 2x + 7, waar snijdt de lijn de y-as?",
        options: ["(0, 7)", "(7, 0)", "(0, 2)", "(2, 7)"],
        answer: 0,
        wrongHints: [
          null,
          "(7, 0) is op de x-as, niet de y-as. b is de y-coördinaat van het snijpunt met de y-as.",
          "(0, 2) zou betekenen b = 2. Maar de b in y = 2x + **7** is 7.",
          "(2, 7) is gewoon een willekeurig punt. Het snijpunt y-as heeft altijd x = 0.",
        ],
      },
    ],
  },

  // ─── C. Lijn tekenen + formule opstellen ────────────────────────────
  {
    title: "Een lijn tekenen vanuit y = ax + b",
    explanation: "Hoe teken je een lineaire lijn?\n\n**Methode**: bereken **2 punten** (verbind die twee = de hele lijn).\n\nVoorbeeld y = 2x + 1:\n• Pak x = 0: y = 2·0 + 1 = **1** → punt **(0, 1)**\n• Pak x = 3: y = 2·3 + 1 = **7** → punt **(3, 7)**\n\nZet (0, 1) en (3, 7) op het assenstelsel, trek een rechte lijn ertussen — klaar.\n\n**Tip**: kies x-waardes die makkelijke berekeningen geven. x = 0 is altijd handig (geeft direct b). x = 1 of 2 of een mooi rond getal voor het tweede punt.\n\n**Met de helling a**: een tweede manier:\n1. Begin op (0, b) — het snijpunt y-as\n2. Vanuit dat punt: ga **1 naar rechts** en **a omhoog** (of omlaag bij negatieve a)\n3. Daar zit het volgende punt\n\nZo loop je 'm trapsgewijs uit.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<line x1="60" y1="156" x2="240" y2="42" stroke="${COLORS.curve}" stroke-width="2.5"/>
<circle cx="150" cy="120" r="5" fill="${COLORS.point}"/>
<text x="160" y="118" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">(0, 1)</text>
<circle cx="222" cy="60" r="5" fill="${COLORS.point}"/>
<text x="232" y="58" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">(3, 7)</text>
<text x="50" y="40" fill="${COLORS.curve}" font-size="11" font-family="Arial" font-weight="bold">y = 2x + 1</text>
<text x="50" y="190" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">2 punten → rechte lijn ertussen</text>
</svg>`,
    checks: [
      {
        q: "Bij y = 3x − 2, welk punt ligt op de lijn?",
        options: ["(2, 4)", "(2, 6)", "(2, -6)", "(0, 2)"],
        answer: 0,
        wrongHints: [
          null,
          "Bij x = 2: y = 3·2 − 2 = 6 − 2 = **4**, niet 6. Vergeet de −2 niet.",
          "Je hebt de + 2 of een ander teken vergeten. Reken opnieuw: 3·2 − 2.",
          "(0, 2) zou betekenen b = 2. Maar in y = 3x − 2 is b = −2, dus (0, -2) is op de lijn.",
        ],
      },
    ],
  },
  {
    title: "Helling uitrekenen vanuit twee punten",
    explanation: "Heb je **twee punten** en wil je weten wat de helling is? Gebruik deze formule:\n\n**a = (y₂ − y₁) / (x₂ − x₁)**\n\nIn woorden: het **verschil in y** delen door het **verschil in x**.\n\n**Voorbeeld**: punten (1, 3) en (4, 9).\n• Verschil in y: 9 − 3 = 6\n• Verschil in x: 4 − 1 = 3\n• Helling a = 6 / 3 = **2**\n\nNog een: punten (0, 5) en (2, 1).\n• Verschil y: 1 − 5 = -4\n• Verschil x: 2 − 0 = 2\n• Helling = -4 / 2 = **-2** (lijn daalt)\n\n**Trucje**: hetzelfde principe als 'hoeveel y stijgt per +1 in x' — alleen nu met twee willekeurige punten.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<line x1="80" y1="155" x2="240" y2="55" stroke="${COLORS.curve}" stroke-width="2.5"/>
<circle cx="100" cy="140" r="5" fill="${COLORS.point}"/>
<text x="55" y="135" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">(1, 3)</text>
<circle cx="220" cy="65" r="5" fill="${COLORS.point}"/>
<text x="225" y="60" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">(4, 9)</text>
<line x1="100" y1="140" x2="220" y2="140" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="3 3"/>
<line x1="220" y1="140" x2="220" y2="65" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="3 3"/>
<text x="160" y="155" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">Δx = 3</text>
<text x="232" y="105" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">Δy = 6</text>
<text x="55" y="35" fill="${COLORS.text}" font-size="11" font-family="Arial">a = Δy/Δx = 6/3 =</text>
<text x="220" y="35" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">2</text>
</svg>`,
    checks: [
      {
        q: "Helling van de lijn door (2, 5) en (5, 11)?",
        options: ["2", "3", "6", "1/2"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt het verschil in x of y verkeerd berekend. Δy = 11−5 = 6, Δx = 5−2 = 3, dus 6/3 = 2.",
          "6 is alleen Δy. Je moet nog delen door Δx (=3).",
          "Je hebt Δx / Δy gedaan. Andersom: Δy / Δx = 6 / 3 = 2.",
        ],
      },
    ],
  },
  {
    title: "Formule opstellen — gegeven helling en snijpunt",
    explanation: "Andersom: heb je **helling a** en **snijpunt b** gegeven? Dan stel je direct de formule op:\n\n**y = ax + b**\n\nVul in.\n\n**Voorbeeld 1**: helling 4, snijpunt y-as op (0, -3).\n• a = 4, b = -3\n• Formule: **y = 4x − 3**\n\n**Voorbeeld 2**: helling -2, gaat door oorsprong.\n• a = -2, b = 0 (oorsprong = (0, 0))\n• Formule: **y = -2x**\n\n**Wat als je twee punten hebt** (geen helling/snijpunt direct)?\n1. Bereken eerst de helling (vorige stap)\n2. Gebruik één van de punten + de helling om b uit te rekenen: y = ax + b → b = y − ax\n\nVoorbeeld: punten (1, 3) en (4, 9).\n• Stap 1: a = (9-3)/(4-1) = 2\n• Stap 2: vul (1, 3) in: 3 = 2·1 + b → b = 1\n• Formule: **y = 2x + 1**",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<text x="55" y="42" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">gegeven 2 punten:</text>
<text x="55" y="62" fill="${COLORS.text}" font-size="12" font-family="Arial">(1, 3) en (4, 9)</text>
<text x="55" y="90" fill="${COLORS.text}" font-size="12" font-family="Arial">stap 1: a = 6/3 = 2</text>
<text x="55" y="115" fill="${COLORS.text}" font-size="12" font-family="Arial">stap 2: b uit (1, 3):</text>
<text x="55" y="135" fill="${COLORS.text}" font-size="12" font-family="Arial">         3 = 2·1 + b → b = 1</text>
<rect x="55" y="148" width="200" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="155" y="170" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">y = 2x + 1</text>
</svg>`,
    checks: [
      {
        q: "Formule opstellen: helling 3, snijpunt y-as op (0, -5).",
        options: ["y = 3x − 5", "y = -5x + 3", "y = 3x + 5", "y = -3x + 5"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt a en b verwisseld. a is de helling (3), b is het snijpunt (-5).",
          "Het snijpunt is op (0, -5), dus b = **−5** (niet +5).",
          "De helling is +3 (niet -3). Lijn stijgt, dus a is positief.",
        ],
      },
    ],
  },

  // ─── D. Vergelijkingen oplossen — balansmethode ────────────────────────────
  {
    title: "De balansmethode",
    explanation: "Een **lineaire vergelijking** is een vergelijking als 3x + 5 = 17 (geen x²). Je lost 'm op door **stap voor stap** beide kanten gelijk te bewerken — alsof het een **weegschaal in balans** is.\n\n**Regel**: wat je links doet, doe je rechts ook. Anders verlies je de balans.\n\n**Voorbeeld**: 3x + 5 = 17\n\n```\n  3x + 5 = 17\n -    5 =  - 5     (van beide kanten 5 afhalen)\n     3x = 12\n   ÷ 3 = ÷ 3        (door 3 delen aan beide kanten)\n      x = 4\n```\n\nCheck: 3·4 + 5 = 12 + 5 = 17 ✓.\n\n**Twee acties** die je gebruikt:\n1. **Plus/min een getal** (om te ontdoen van losse getallen)\n2. **Vermenigvuldigen/delen** (om x alleen over te houden)\n\nAltijd aan **beide** kanten — dat is de essentie van 'in balans'.",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="40" fill="${COLORS.text}" font-size="14" font-family="Arial">3x + 5 = 17</text>
<text x="180" y="40" fill="${COLORS.muted}" font-size="11" font-family="Arial">| − 5</text>
<line x1="55" y1="50" x2="220" y2="50" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="75" fill="${COLORS.text}" font-size="14" font-family="Arial">3x = 12</text>
<text x="180" y="75" fill="${COLORS.muted}" font-size="11" font-family="Arial">| ÷ 3</text>
<line x1="55" y1="85" x2="220" y2="85" stroke="${COLORS.curve}" stroke-width="0.7"/>
<rect x="55" y="100" width="100" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="105" y="124" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">x = 4</text>
<text x="55" y="165" fill="${COLORS.curve}" font-size="11" font-family="Arial">check: 3·4 + 5 = 17 ✓</text>
<text x="180" y="115" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">altijd</text>
<text x="180" y="128" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">beide kanten</text>
<text x="180" y="141" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">tegelijk</text>
</svg>`,
    checks: [
      {
        q: "Los op: 2x + 3 = 11.",
        options: ["x = 4", "x = 7", "x = 14", "x = 11/2"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 11 − 3 = 8 gedaan, maar dan ben je vergeten te delen door 2. 8/2 = 4.",
          "Je hebt 11 + 3 = 14 gedaan. Maar je moet de +3 wegwerken door **af** te trekken: 11 − 3 = 8.",
          "Je hebt 11/2 gedaan zonder de 3 weg te werken. Eerst: 2x = 11 − 3 = 8, dan x = 8/2 = 4.",
        ],
      },
    ],
  },
  {
    title: "x aan beide kanten",
    explanation: "Soms staat **x aan beide kanten** van het gelijkteken. Dan haal je eerst alle x-en naar één kant.\n\n**Voorbeeld**: 5x + 2 = 2x + 11\n\n```\n  5x + 2 = 2x + 11\n  − 2x       − 2x      (2x van beide kanten)\n  3x + 2 = 11\n     − 2     − 2       (de 2 aan beide kanten)\n     3x = 9\n     ÷ 3   ÷ 3         (door 3 delen)\n      x = 3\n```\n\n**Tactiek**: haal de **kleinste x-coëfficiënt** weg (hier 2x). Dan wordt het rechterlid simpeler.\n\nCheck: 5·3 + 2 = 17 én 2·3 + 11 = 17 ✓.",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="38" fill="${COLORS.text}" font-size="13" font-family="Arial">5x + 2 = 2x + 11</text>
<text x="220" y="38" fill="${COLORS.muted}" font-size="11" font-family="Arial">| − 2x</text>
<text x="55" y="63" fill="${COLORS.text}" font-size="13" font-family="Arial">3x + 2 = 11</text>
<text x="220" y="63" fill="${COLORS.muted}" font-size="11" font-family="Arial">| − 2</text>
<text x="55" y="88" fill="${COLORS.text}" font-size="13" font-family="Arial">3x = 9</text>
<text x="220" y="88" fill="${COLORS.muted}" font-size="11" font-family="Arial">| ÷ 3</text>
<rect x="55" y="105" width="100" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="105" y="129" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">x = 3</text>
<text x="55" y="170" fill="${COLORS.curve}" font-size="11" font-family="Arial">check: 5·3 + 2 = 17  ·  2·3 + 11 = 17 ✓</text>
</svg>`,
    checks: [
      {
        q: "Los op: 7x − 4 = 3x + 8.",
        options: ["x = 3", "x = 4", "x = 1", "x = 12"],
        answer: 0,
        wrongHints: [
          null,
          "Je rekent verkeerd. Probeer: −3x van beide → 4x − 4 = 8 → 4x = 12 → x = 3.",
          "Je hebt + 4 gedaan, maar de constanten vereenvoudigen anders: na 4x = 12 is x = 3.",
          "12 = 4x. Maar daarna nog delen door 4: x = 12/4 = 3.",
        ],
      },
    ],
  },
  {
    title: "Vergelijking met haakjes",
    explanation: "Soms staan er haakjes in de vergelijking. **Eerst haakjes wegwerken**, dan oplossen.\n\n**Voorbeeld**: 2(x + 3) = 14\n\nHaakjes wegwerken: 2(x + 3) = 2·x + 2·3 = **2x + 6**.\n\nDus de vergelijking wordt:\n```\n  2x + 6 = 14\n     − 6   − 6\n     2x = 8\n      ÷ 2   ÷ 2\n      x = 4\n```\n\nCheck: 2·(4+3) = 2·7 = 14 ✓.\n\n**Regel haakjes wegwerken**: a(b + c) = ab + ac. Vermenigvuldig de a met **elk** ding binnen de haakjes.\n\nMeer over haakjes wegwerken zit in het 'Rekenen met letters'-leerpad.",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="38" fill="${COLORS.text}" font-size="13" font-family="Arial">2(x + 3) = 14</text>
<text x="220" y="38" fill="${COLORS.muted}" font-size="11" font-family="Arial">| haakjes</text>
<text x="55" y="63" fill="${COLORS.text}" font-size="13" font-family="Arial">2x + 6 = 14</text>
<text x="220" y="63" fill="${COLORS.muted}" font-size="11" font-family="Arial">| − 6</text>
<text x="55" y="88" fill="${COLORS.text}" font-size="13" font-family="Arial">2x = 8</text>
<text x="220" y="88" fill="${COLORS.muted}" font-size="11" font-family="Arial">| ÷ 2</text>
<rect x="55" y="105" width="100" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="105" y="129" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">x = 4</text>
<text x="55" y="175" fill="${COLORS.curve}" font-size="11" font-family="Arial">a·(b + c) = a·b + a·c</text>
</svg>`,
    checks: [
      {
        q: "Los op: 3(x − 2) = 9.",
        options: ["x = 5", "x = 3", "x = 7", "x = 11"],
        answer: 0,
        wrongHints: [
          null,
          "Werk eerst haakjes weg: 3(x−2) = 3x − 6. Dan: 3x − 6 = 9 → 3x = 15 → x = 5.",
          "Je rekent ergens verkeerd. Probeer: 3x − 6 = 9, dan +6 → 3x = 15, dan ÷3 → x = 5.",
          "11 = 9 + 2. Maar je moet de hele balans-methode toepassen, niet getallen optellen.",
        ],
      },
    ],
  },

  // ─── E. Toepassingen + eind ────────────────────────────
  {
    title: "Toepassing: taxi-rit",
    explanation: "**Praktisch**. Een taxi rekent **€ 2,50 instaptarief** plus **€ 1,80 per kilometer**.\n\nDe **lineaire formule** voor de kosten:\n\n**y = 1,80x + 2,50**\n\nWaarbij y = totaal in euro, x = aantal km.\n\nTwee vragen:\n\n**A**: Hoeveel kost 5 km?\n• y = 1,80·5 + 2,50 = 9 + 2,50 = **€ 11,50**\n\n**B**: Voor welke afstand betaal je € 20?\n• 20 = 1,80x + 2,50\n• 17,50 = 1,80x\n• x = 17,50 / 1,80 ≈ **9,7 km**\n\nDit is een typische lineaire-formule-toepassing: **vaste kosten** (b) + **variabele kosten** (a per eenheid).",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<line x1="50" y1="135" x2="250" y2="35" stroke="${COLORS.curve}" stroke-width="2.5"/>
<circle cx="150" cy="85" r="5" fill="${COLORS.point}"/>
<text x="160" y="83" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">5 km, €11,50</text>
<text x="50" y="155" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial">€ 2,50 instap (b)</text>
<text x="200" y="55" fill="${COLORS.curve}" font-size="11" font-family="Arial">y = 1,80x + 2,50</text>
<line x1="155" y1="135" x2="155" y2="155" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<polygon points="150,150 155,158 160,150" fill="${COLORS.curveAlt}"/>
<text x="50" y="190" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">snijpunt y-as = startbedrag · helling = prijs per km</text>
</svg>`,
    checks: [
      {
        q: "Een telefoonabonnement: €10 per maand + €0,20 per minuut. Welke formule?",
        options: [
          "y = 0,20x + 10",
          "y = 10x + 0,20",
          "y = 10 + 0,20",
          "y = 10x · 0,20",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt a en b verwisseld. €10 is de **vaste** maandprijs (b). €0,20 is **per minuut** (a — vermenigvuldigt met x).",
          "Geen x — dan kun je de variabele kosten (per minuut) niet uitrekenen.",
          "Vermenigvuldigen ipv optellen — maar de €10 is een vaste prijs, geen factor.",
        ],
      },
    ],
  },
  {
    title: "Toepassing: spaarrekening",
    explanation: "**Tweede praktisch voorbeeld**. Op een spaarrekening staat **€ 50** (begin). Elke week komt er **€ 8** bij.\n\n**Formule**: y = 8x + 50 (y = saldo in €, x = weken)\n\nVragen:\n\n**A**: Hoeveel staat er na 6 weken?\n• y = 8·6 + 50 = 48 + 50 = **€ 98**\n\n**B**: Wanneer staat er € 200 op de rekening?\n• 200 = 8x + 50\n• 150 = 8x\n• x = 150 / 8 = **18,75 weken**\n\n**C**: Teken de grafiek.\n• Snijpunt y-as: (0, 50)\n• Helling: 8 (per week stijgt het saldo met 8)\n• Stijgende rechte lijn vanaf (0, 50)\n\n**Algemeen patroon** voor 'sparen', 'lengte van een plant', 'meterstand': **start + groei per tijdseenheid**.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<line x1="50" y1="120" x2="250" y2="40" stroke="${COLORS.curve}" stroke-width="2.5"/>
<circle cx="150" cy="80" r="5" fill="${COLORS.point}"/>
<text x="160" y="78" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">(0, 50)</text>
<text x="195" y="50" fill="${COLORS.curve}" font-size="11" font-family="Arial">y = 8x + 50</text>
<text x="60" y="155" fill="${COLORS.muted}" font-size="11" font-family="Arial">begin: €50</text>
<text x="60" y="172" fill="${COLORS.muted}" font-size="11" font-family="Arial">groei: €8 per week</text>
<text x="180" y="155" fill="${COLORS.point}" font-size="11" font-family="Arial">na 6 weken:</text>
<text x="180" y="172" fill="${COLORS.point}" font-weight="bold" font-size="12" font-family="Arial">€ 98</text>
</svg>`,
    checks: [
      {
        q: "Een plant is 12 cm en groeit 3 cm per week. Lengte na 5 weken?",
        options: ["27 cm", "60 cm", "15 cm", "12 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 12 · 5 gedaan. Maar de groei is 3 cm/week. Reken: 3·5 + 12 = 15 + 12 = 27.",
          "Je hebt alleen de groei (3·5=15) of alleen de start (12). Je moet beide optellen.",
          "12 is de start, maar er groeit ook bij. 3·5 = 15 erbij, dus 27 cm.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht 1: balansmethode",
    explanation: "**Vraag**: los op: 4(x − 1) = 2x + 6.\n\n**Stap voor stap**:\n\n```\n  4(x − 1) = 2x + 6\n  4x − 4 = 2x + 6        (haakjes wegwerken)\n  − 2x      − 2x          (2x van beide kanten)\n  2x − 4 = 6\n     + 4    + 4           (4 erbij)\n     2x = 10\n      ÷ 2   ÷ 2            (door 2 delen)\n      x = 5\n```\n\n**Check**: 4·(5−1) = 4·4 = 16 én 2·5 + 6 = 16 ✓.\n\nAlle stappen netjes onder elkaar opschrijven — dat is hoe leerkrachten het willen zien, en helpt jezelf om geen fout te maken.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<text x="55" y="42" fill="${COLORS.text}" font-size="12" font-family="Arial">4(x − 1) = 2x + 6</text>
<text x="55" y="62" fill="${COLORS.text}" font-size="12" font-family="Arial">4x − 4 = 2x + 6</text>
<text x="55" y="82" fill="${COLORS.text}" font-size="12" font-family="Arial">2x − 4 = 6</text>
<text x="55" y="102" fill="${COLORS.text}" font-size="12" font-family="Arial">2x = 10</text>
<rect x="55" y="115" width="100" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="105" y="137" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">x = 5</text>
<text x="55" y="170" fill="${COLORS.curve}" font-size="11" font-family="Arial">4·4 = 16  ·  2·5+6 = 16 ✓</text>
</svg>`,
    checks: [
      {
        q: "Los op: 5x − 3 = 2x + 9.",
        options: ["x = 4", "x = 6", "x = 12", "x = 2"],
        answer: 0,
        wrongHints: [
          null,
          "Reken: −2x → 3x − 3 = 9, +3 → 3x = 12, ÷3 → x = 4.",
          "Je hebt niet beide kanten 'op orde' gebracht. Probeer stap-voor-stap balans.",
          "Zonder de balansmethode te volgen kom je hier niet aan x = 2.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht 2: formule opstellen + grafiek",
    explanation: "**Vraag**: een lijn gaat door de punten **(0, 4)** en **(3, 13)**.\n\n**A** Wat is de helling a?\n• a = (13 − 4) / (3 − 0) = 9 / 3 = **3**\n\n**B** Wat is b?\n• b = y-coördinaat bij x = 0 = **4** (geluk: het eerste punt is direct het snijpunt y-as)\n\n**C** Formule?\n• **y = 3x + 4**\n\n**D** Ligt punt (5, 19) op deze lijn?\n• Vul in: 3·5 + 4 = 15 + 4 = 19 ✓ → **ja**\n\nMet één lineaire formule kun je álle punten op de lijn beschrijven. Dat is de kracht van een formule.\n\n**Recap**: lineaire formule = rechte lijn = formule y = ax + b. Helling a, snijpunt b. Vergelijking oplossen via balansmethode.\n\nJe hebt het hele leerpad doorlopen — gefeliciteerd!",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<line x1="60" y1="155" x2="240" y2="35" stroke="${COLORS.curve}" stroke-width="2.5"/>
<circle cx="150" cy="100" r="5" fill="${COLORS.point}"/>
<text x="100" y="92" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">(0, 4)</text>
<circle cx="220" cy="48" r="5" fill="${COLORS.point}"/>
<text x="195" y="42" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">(3, 13)</text>
<rect x="55" y="170" width="190" height="22" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="150" y="186" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">y = 3x + 4</text>
</svg>`,
    checks: [
      {
        q: "Lijn door (0, 2) en (4, 14). Wat is de formule?",
        options: ["y = 3x + 2", "y = 2x + 3", "y = 3x − 2", "y = 4x + 2"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt a en b verwisseld. a = (14−2)/(4−0) = 12/4 = 3. b = 2 (het y-coord bij x=0).",
          "−2 zou kloppen als (0, -2). Maar het eerste punt is (0, **2**), dus b = 2.",
          "4 is Δx, niet de helling. Helling = Δy/Δx = 12/4 = 3.",
        ],
      },
    ],
  },
  // ─── F. Examenstijl — VMBO-GT CSE ─────────────────────────
  {
    title: "CSE-vraag — taxi-tarief",
    explanation: "Klassieke CSE-context: een tarief met **startbedrag + per-eenheid-prijs**. De lineaire formule beschrijft de prijs perfect.\n\n> **Een taxibedrijf rekent €4,00 startbedrag plus €1,80 per gereden kilometer.**\n\n**Aanpak in 3 stappen:**\n1. **Formule opstellen**: prijs `p` = startbedrag + tarief × aantal km. Dus **p = 1,80k + 4**.\n2. **Prijs uitrekenen**: bij 12 km → p = 1,80 × 12 + 4 = 21,60 + 4 = **€25,60**.\n3. **Andersom — aantal km bij gegeven prijs**: bij €31 → 31 = 1,80k + 4 → 1,80k = 27 → k = **15 km**.\n\n**Examen-tips**:\n• Lees goed: wat is de **constante** (b, het startbedrag) en wat is per-eenheid (a, het km-tarief)?\n• Eenheden bij elk getal (€, km).\n• Bij omgekeerde vraag: balansmethode of `(p − b) / a`.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<text x="155" y="38" fill="${COLORS.text}" font-size="11" font-family="Arial">prijs €</text>
<text x="270" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">km</text>
<line x1="150" y1="120" x2="270" y2="40" stroke="${COLORS.curve}" stroke-width="2.5"/>
<circle cx="150" cy="120" r="4" fill="${COLORS.point}"/>
<text x="125" y="135" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">(0; 4)</text>
<circle cx="225" cy="70" r="4" fill="${COLORS.point}"/>
<text x="230" y="68" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">(12; 25,60)</text>
<rect x="40" y="170" width="220" height="22" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="150" y="186" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">p = 1,80 · k + 4</text>
</svg>`,
    checks: [
      {
        q: "Welke **formule** hoort bij dit taxi-tarief (€4 start + €1,80 per km)?",
        options: ["p = 1,80k + 4", "p = 4k + 1,80", "p = 1,80 + 4k", "p = 5,80k"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt a en b verwisseld. Het start-bedrag is €4 (vast = b), per km is €1,80 (a).",
          "Verwarrend genoteerd — feitelijk is dit p = 4k + 1,80, en dat klopt niet (4 is geen tarief per km).",
          "Je hebt 4 + 1,80 opgeteld — niet doen, het zijn verschillende rollen.",
        ],
      },
      {
        q: "Wat kost een rit van **12 km**?",
        options: ["€25,60", "€21,60", "€69,60", "€16,00"],
        answer: 0,
        wrongHints: [
          null,
          "Je bent het startbedrag (€4) vergeten op te tellen. 1,80 × 12 = 21,60, plus 4 = 25,60.",
          "Je hebt 5,80 × 12 gedaan (a en b opgeteld). Niet — gebruik de formule.",
          "Je hebt 12 + 4 = 16. Maar 1,80 × 12 ≠ 12.",
        ],
      },
      {
        q: "Hoeveel km is een rit als de **prijs €31** is?",
        options: ["15 km", "17 km", "19 km", "12 km"],
        answer: 0,
        wrongHints: [
          null,
          "Je bent het startbedrag vergeten af te trekken. 31 − 4 = 27, dan 27 / 1,80 = 15.",
          "Je hebt direct 31 / 1,80 ≈ 17 gedaan zonder de €4 af te trekken.",
          "Net niet. Reken: (31 − 4) / 1,80 = 27 / 1,80 = 15.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const lineaireFormules = {
  id: "lineaire-formules",
  title: "Lineaire formules",
  emoji: "📈",
  level: "klas1-vwo",
  subject: "wiskunde",
  topics: ["WI.algebra.lineair"],
  intro: "Lineaire formules — de meest gebruikte wiskundige basis. y = ax + b is overal: bij taxi-tarieven, spaarrekeningen, telefoonabonnementen, plantengroei. Hier leer je wat de getallen a en b doen, hoe je de grafiek tekent, formules opstelt en lineaire vergelijkingen oplost via de balansmethode.",
  triggerKeywords: ["lineair", "lineaire formule", "y = ax", "helling", "richtingscoëfficiënt", "balansmethode", "rechte lijn"],
  chapters,
  steps,
};

export default lineaireFormules;
