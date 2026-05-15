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
        options: ["y = 2x + 3","y = x²","y = √x","y = x³"],
        answer: 0,
        wrongHints: [null, "x² geeft een **parabool**, geen rechte lijn. Geen lineaire formule.", "√x geeft een gebogen lijn (een wortelfunctie). Niet lineair.", "x³ geeft een S-vorm. Ook niet lineair."],
        uitlegPad: {
          stappen: [{ titel: "Alleen x, geen x²", tekst: "Lineair = formule met alleen x (eerste macht), geen x², √x, x³. y = 2x+3 heeft alleen x → lineair → rechte lijn." }],
          woorden: [{ woord: "lineair", uitleg: "Latijn 'linea' = lijn. Formule die rechte lijn geeft." }],
          theorie: "Test: enkele x (geen exponenten, geen wortels) → lineair. x² → parabool. √x → wortelkromme. x³ → S-vorm.",
          voorbeelden: [{ type: "lineair", tekst: "y = 5x. y = x − 3. y = -2x + 1. Allemaal rechte lijnen." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "x² = bocht. √x = kromme. x³ = S-curve. Niet rechte lijn." }],
          niveaus: { basis: "y=2x+3. A.", simpeler: "Lineair = alleen x. y=2x+3 wel. = A.", nogSimpeler: "y=2x+3 = A." },
        },
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
        wrongHints: [null, "Je bent de + 2 vergeten. Reken: 3·4 + 2.", "Je hebt 3 + 4 + 2 gedaan (optellen). Maar 3x betekent 3 keer x.", "Je hebt 3 · 4 · 2 gedaan. Maar de formule is 3x **+** 2 (plus, niet keer)."],
        uitlegPad: {
          stappen: [{ titel: "Invullen + uitrekenen", tekst: "y = 3x + 2. Vul x=4: y = 3·4 + 2 = 12 + 2 = 14. Volgorde: × eerst, dan +." }],
          woorden: [{ woord: "invullen", uitleg: "Variabele x vervangen door getal." }],
          theorie: "Volgorde bewerkingen: × en ÷ vóór + en − (BODMAS/ezelsbruggetje 'Hoe Moet Ik Van Die Sommen Af').",
          voorbeelden: [{ type: "vergelijk", tekst: "x=0: y=2. x=1: y=5. x=2: y=8. x=3: y=11. x=4: y=14. Stappen +3." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "12 = 3·4 zonder +2. 9 = 3+4+2 (optellen). 24 = 3·4·2 (vermenigvuldigen alles)." }],
          niveaus: { basis: "14. A.", simpeler: "3·4+2 = 12+2 = 14. = A.", nogSimpeler: "14 = A." },
        },
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
        options: ["y = 2, 5, 8, 11 (sprong +3 telkens)","y = 1, 2, 4, 8 (sprong verdubbelt)","y = 0, 1, 4, 9 (sprong groeit)","y = 1, 1, 1, 1 (geen verandering)"],
        answer: 0,
        wrongHints: [null, "Verdubbeling is exponentieel — bij lineair zijn de sprongen telkens **gelijk**, niet groter en groter.", "Bij lineair zijn alle sprongen even groot. Reken de verschillen tussen opeenvolgende getallen — zijn ze gelijk?", "'Geen verandering' is een speciaal geval (y = constant). Lineair betekent gewoonlijk een constante stijging of daling."],
        uitlegPad: {
          stappen: [{ titel: "Constante sprongen = lineair", tekst: "Tabel-test lineair: verschillen tussen y-waardes telkens GELIJK? 2,5,8,11 verschilt +3,+3,+3 → constant → lineair." }],
          woorden: [{ woord: "Δy", uitleg: "Verschil in y tussen 2 punten." }, { woord: "exponentieel", uitleg: "Verdubbeling per stap (1,2,4,8...). Andere formule-soort." }],
          theorie: "Tabel-types: constante Δy → lineair. Verdubbeling/halvering → exponentieel. Δy van Δy constant → kwadratisch (parabool). Geen verandering → constante.",
          voorbeelden: [{ type: "rij", tekst: "Lineair y=3x: 0,3,6,9,12 (+3 telkens). Exponentieel y=2ˣ: 1,2,4,8,16 (×2). Kwadratisch y=x²: 0,1,4,9,16 (+1,+3,+5,+7)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Verdubbeling/groei niet constant → niet lineair. Constante (1,1,1) = speciaal geval, helling 0." }],
          niveaus: { basis: "2,5,8,11. A.", simpeler: "Sprong +3 elke keer = constant = lineair. = A.", nogSimpeler: "+3 = A." },
        },
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
        wrongHints: [null, "−2 is **a** (de helling). De b is het losse getal achteraan.", "0 zou zijn als er geen los getal is. Maar er staat +7.", "x is de variabele. b is een getal, namelijk de y-waarde waar de lijn de y-as snijdt."],
        uitlegPad: {
          stappen: [{ titel: "b = los getal", tekst: "Formule y = ax + b. b = getal zonder x. In y = -2x + 7: −2 staat bij x (=a), 7 los achter (=b)." }],
          woorden: [{ woord: "b", uitleg: "Snijpunt y-as. Constante in y=ax+b." }],
          theorie: "Identificeren: a = getal VÓÓR x. b = los getal (constante). Teken hoort bij coëfficiënt.",
          voorbeelden: [{ type: "andere", tekst: "y=3x+5: a=3, b=5. y=x−2: a=1, b=−2. y=−4x+1: a=−4, b=1." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "−2 = a. 0 = geen los getal (klopt niet, er staat +7). x = variabele." }],
          niveaus: { basis: "7. A.", simpeler: "y=−2x+7: b=7 (los getal). = A.", nogSimpeler: "7 = A." },
        },
      },
      {
        q: "In y = 4x, wat is b?",
        options: ["0", "4", "x", "1"],
        answer: 0,
        wrongHints: [null, "Dat is de helling, niet b. Welke letter is het y-snijpunt in y = ax + b?", "x is een variabele, geen getal. b moet een getal zijn.", "Wat is b als er geen los getal achter de x staat? Door welk punt gaat de lijn dan?"],
        uitlegPad: {
          stappen: [{ titel: "Geen los getal → b=0", tekst: "y = 4x kan geschreven worden als y = 4x + 0. Dus b = 0. Lijn gaat door oorsprong (0, 0)." }],
          woorden: [{ woord: "y door oorsprong", uitleg: "Als b=0: lijn snijdt y-as in (0,0)." }],
          theorie: "Standaard y=ax+b kan a=0 of b=0 hebben. b=0 → door (0,0). a=0 → horizontale lijn op hoogte b.",
          voorbeelden: [{ type: "andere", tekst: "y=2x: a=2, b=0. y=−3x: a=−3, b=0. y=5: a=0, b=5." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "4 = a (helling). x = variabele. 1 = niet, er staat geen +1." }],
          niveaus: { basis: "0. A.", simpeler: "y=4x = y=4x+0. b=0. = A.", nogSimpeler: "0 = A." },
        },
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
        options: ["y = 5x","y = 2x","y = ½x","y = 0,1x"],
        answer: 0,
        wrongHints: [null, "2 is steiler dan ½ of 0,1, maar 5 is nog steiler.", "½ is een flauwe helling (helft van standaard). 5 is veel steiler.", "0,1 is heel flauw. Hoe groter de helling, hoe steiler — kies de grootste a."],
        uitlegPad: {
          stappen: [{ titel: "Grootste |a| = steilst", tekst: "Helling a bepaalt steilheid. Groter absoluut → steiler. 5 > 2 > ½ > 0,1. Dus y=5x het steilst." }],
          woorden: [{ woord: "steilheid", uitleg: "Hoe sterk de lijn stijgt. Groot |a| = veel verticaal per horizontaal." }],
          theorie: "a = 5: per +1 x stijgt y met 5. a = 0,1: per +1 x stijgt y met 0,1. Veel verschil!",
          voorbeelden: [{ type: "vergelijk", tekst: "y=5x bij x=1: y=5. y=½x bij x=1: y=0,5. Tienvoudig verschil." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Alleen bij positieve a is 'steilste stijging' relevant. Negatieve a → daling." }],
          niveaus: { basis: "y=5x. A.", simpeler: "Grootste a = steilst. 5 wint. = A.", nogSimpeler: "5 = A." },
        },
      },
      {
        q: "Welke formule **daalt**?",
        options: ["y = -3x + 1","y = 3x + 1","y = x − 1","y = 5"],
        answer: 0,
        wrongHints: [null, "Positieve a = stijging. Voor dalen heb je een negatieve helling nodig.", "Positieve a (=1) = stijging. De −1 is de b, niet de helling.", "a = 0 betekent horizontaal — niet dalen, niet stijgen."],
        uitlegPad: {
          stappen: [{ titel: "Negatieve a = dalend", tekst: "Lijn daalt als a < 0. y = -3x+1: a=−3 (negatief) → lijn DAALT. Hoe groter |a|, hoe sneller dalend." }],
          woorden: [{ woord: "dalend", uitleg: "y wordt kleiner als x groter wordt. Lijn naar rechtsonder." }],
          theorie: "Regels: a > 0 stijgend. a < 0 dalend. a = 0 horizontaal. a is sleutel voor lijn-gedrag.",
          voorbeelden: [{ type: "tekens", tekst: "y=3x+1 (stijgend). y=−3x+1 (dalend). y=x−1 (stijgend, b=−1 maakt niet uit). y=5 (horizontaal)." }],
          basiskennis: [{ onderwerp: "Niet b", uitleg: "Examenval: b kijken voor stijg/daal. Maar het is a die bepaalt. b verschuift alleen verticaal." }],
          niveaus: { basis: "y=−3x+1. A.", simpeler: "a=−3 negatief → daalt. = A.", nogSimpeler: "Negatief a = A." },
        },
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
        wrongHints: [null, "(7, 0) is op de x-as, niet de y-as. b is de y-coördinaat van het snijpunt met de y-as.", "(0, 2) zou betekenen b = 2. Maar de b in y = 2x + **7** is 7.", "(2, 7) is gewoon een willekeurig punt. Het snijpunt y-as heeft altijd x = 0."],
        uitlegPad: {
          stappen: [{ titel: "Y-as: x=0", tekst: "Op y-as is x=0 (altijd). Invullen: y = 2·0 + 7 = 7. Snijpunt = (0, 7). Snel: b is altijd de y-waarde op snijpunt y-as." }],
          woorden: [{ woord: "snijpunt y-as", uitleg: "Punt waar lijn de y-as raakt. Altijd (0, b)." }],
          theorie: "Algemeen: voor y=ax+b is snijpunt y-as altijd (0, b). Voor snijpunt x-as: stel y=0, los x op.",
          voorbeelden: [{ type: "andere", tekst: "y=3x+5: (0,5). y=−2x+1: (0,1). y=4x: (0,0). Steeds (0,b)." }],
          basiskennis: [{ onderwerp: "Notatie", uitleg: "Altijd x EERST: (0, b). Niet (b, 0) — dat is x-as." }],
          niveaus: { basis: "(0,7). A.", simpeler: "y=2x+7: snijpunt y-as = (0, b) = (0,7). = A.", nogSimpeler: "(0,7) = A." },
        },
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
        wrongHints: [null, "Bij x = 2: y = 3·2 − 2 = 6 − 2 = **4**, niet 6. Vergeet de −2 niet.", "Je hebt de + 2 of een ander teken vergeten. Reken opnieuw: 3·2 − 2.", "(0, 2) zou betekenen b = 2. Maar in y = 3x − 2 is b = −2, dus (0, -2) is op de lijn."],
        uitlegPad: {
          stappen: [{ titel: "Invullen + checken", tekst: "Welk punt (x,y) ligt op y=3x−2? Test (2,4): 3·2−2 = 6−2 = 4. Komt overeen met y=4. Dus (2,4) ligt op lijn." }],
          woorden: [{ woord: "op de lijn", uitleg: "Punt (x,y) ligt op lijn als invullen klopt." }],
          theorie: "Punt-test: vul x in formule, vergelijk uitkomst met gegeven y. Match → punt op lijn. Niet match → niet op lijn.",
          voorbeelden: [{ type: "andere punten", tekst: "y=3x−2. Test (0,−2): 0−2=−2 ✓. Test (1,1): 3−2=1 ✓. Test (3,7): 9−2=7 ✓. Alle ander goede x-en geven punten op lijn." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "(2,6) = vergeten −2. (2,−6) = teken-fout. (0,2) = b verwisseld (b=−2 dus (0,−2))." }],
          niveaus: { basis: "(2,4). A.", simpeler: "x=2: y=3·2−2=4 → (2,4). = A.", nogSimpeler: "(2,4) = A." },
        },
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
        wrongHints: [null, "Je hebt het verschil in x of y verkeerd berekend. Δy = 11−5 = 6, Δx = 5−2 = 3, dus 6/3 = 2.", "6 is alleen Δy. Je moet nog delen door Δx (=3).", "Je hebt Δx / Δy gedaan. Andersom: Δy / Δx = 6 / 3 = 2."],
        uitlegPad: {
          stappen: [
            { titel: "Δy en Δx", tekst: "Δy = 11 − 5 = 6. Δx = 5 − 2 = 3." },
            { titel: "Delen", tekst: "Helling a = Δy/Δx = 6/3 = 2." },
          ],
          woorden: [{ woord: "Δ (delta)", uitleg: "Verschil. Δy = verschil y-waardes. Δx = verschil x-waardes." }],
          theorie: "Standaardformule: a = (y₂−y₁)/(x₂−x₁). Werkt voor elke twee punten op rechte lijn. Volgorde maakt niet uit (mits consistent).",
          voorbeelden: [{ type: "andere", tekst: "(0,1) en (3,7): Δy=6, Δx=3, a=2. (1,5) en (5,9): Δy=4, Δx=4, a=1." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "3 = Δx (alleen). 6 = Δy (alleen). ½ = Δx/Δy (omgekeerd). Antwoord = Δy/Δx = 2." }],
          niveaus: { basis: "2 (6÷3). A.", simpeler: "a = Δy/Δx = 6/3 = 2. = A.", nogSimpeler: "2 = A." },
        },
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
        wrongHints: [null, "Je hebt a en b verwisseld. a is de helling (3), b is het snijpunt (-5).", "Het snijpunt is op (0, -5), dus b = **−5** (niet +5).", "De helling is +3 (niet -3). Lijn stijgt, dus a is positief."],
        uitlegPad: {
          stappen: [{ titel: "Vul a en b in", tekst: "Standaardvorm: y = ax + b. Helling 3 → a=3. Snijpunt (0,−5) → b=−5. Dus y = 3x + (−5) = y = 3x − 5." }],
          woorden: [{ woord: "snijpunt y-as", uitleg: "Punt (0,b). y-waarde is b." }],
          theorie: "Vlot-aanpak: identificeer a (helling) en b (y-snijpunt) → schrijf y = ax + b. Teken bij b meenemen!",
          voorbeelden: [{ type: "andere", tekst: "Helling 2, (0,7): y=2x+7. Helling −1, (0,3): y=−x+3. Helling ½, (0,−2): y=½x−2." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "y=−5x+3 verwisseld a en b. +5 fout teken. −3x fout helling-teken." }],
          niveaus: { basis: "y=3x−5. A.", simpeler: "a=3, b=−5 → y=3x−5. = A.", nogSimpeler: "3x−5 = A." },
        },
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
        wrongHints: [null, "Je hebt 11 − 3 = 8 gedaan, maar dan ben je vergeten te delen door 2. 8/2 = 4.", "Je hebt 11 + 3 = 14 gedaan. Maar je moet de +3 wegwerken door **af** te trekken: 11 − 3 = 8.", "Je hebt 11/2 gedaan zonder de 3 weg te werken. Eerst: 2x = 11 − 3 = 8, dan x = 8/2 = 4."],
        uitlegPad: {
          stappen: [
            { titel: "Min 3", tekst: "2x + 3 = 11. Beide kanten −3: 2x = 8." },
            { titel: "Delen door 2", tekst: "2x = 8 → x = 8/2 = 4." },
          ],
          woorden: [{ woord: "balansmethode", uitleg: "Beide kanten dezelfde bewerking. Houdt vergelijking gelijk." }],
          theorie: "Stappenplan: (1) los getallen wegwerken (+/−). (2) Coëfficiënt wegwerken (×/÷). x staat alleen → klaar.",
          voorbeelden: [{ type: "check", tekst: "x=4: 2·4+3 = 8+3 = 11 ✓. Klopt." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "7 = 11−4 (gokken). 14 = 11+3 (verkeerde kant). 11/2 = ÷2 zonder eerst 3 af te halen." }],
          niveaus: { basis: "x=4. A.", simpeler: "2x=8 → x=4. = A.", nogSimpeler: "4 = A." },
        },
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
        wrongHints: [null, "Je rekent verkeerd. Probeer: −3x van beide → 4x − 4 = 8 → 4x = 12 → x = 3.", "Je hebt + 4 gedaan, maar de constanten vereenvoudigen anders: na 4x = 12 is x = 3.", "12 = 4x. Maar daarna nog delen door 4: x = 12/4 = 3."],
        uitlegPad: {
          stappen: [
            { titel: "−3x van beide", tekst: "7x − 4 = 3x + 8 → 4x − 4 = 8." },
            { titel: "+4 dan ÷4", tekst: "4x = 12 → x = 3." },
          ],
          woorden: [{ woord: "x naar één kant", uitleg: "Bij x aan beide kanten: trek kleinste x-deel van beide af." }],
          theorie: "Stappen: (1) alle x'en naar één kant (−3x). (2) Losse getallen naar andere kant (+4). (3) Deel door coëfficiënt (÷4).",
          voorbeelden: [{ type: "check", tekst: "x=3: 7·3−4 = 17. 3·3+8 = 17. Beide kanten = 17 ✓." }],
          basiskennis: [{ onderwerp: "Niet stoppen", uitleg: "Werk tot x ALLEEN. 4x=12 is niet eindantwoord — nog ÷4." }],
          niveaus: { basis: "x=3. A.", simpeler: "4x=12 → x=3. = A.", nogSimpeler: "3 = A." },
        },
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
        wrongHints: [null, "Werk eerst haakjes weg: 3(x−2) = 3x − 6. Dan: 3x − 6 = 9 → 3x = 15 → x = 5.", "Je rekent ergens verkeerd. Probeer: 3x − 6 = 9, dan +6 → 3x = 15, dan ÷3 → x = 5.", "11 = 9 + 2. Maar je moet de hele balans-methode toepassen, niet getallen optellen."],
        uitlegPad: {
          stappen: [
            { titel: "Haakjes wegwerken", tekst: "3(x − 2) = 3x − 6. Vermenigvuldig 3 met elk deel binnen haakje." },
            { titel: "Oplossen", tekst: "3x − 6 = 9 → 3x = 15 → x = 5." },
          ],
          woorden: [{ woord: "haakjes wegwerken", uitleg: "Distributieve eigenschap: a(b+c) = ab + ac." }],
          theorie: "Stap 1: haakjes uitwerken. Stap 2: getallen wegwerken. Stap 3: delen door coëfficiënt. Klassiek 3-stappen.",
          voorbeelden: [{ type: "check", tekst: "x=5: 3·(5−2) = 3·3 = 9 ✓. Klopt." }],
          basiskennis: [{ onderwerp: "Niet stoppen", uitleg: "Haakjes EERST. Niet 9÷3=3 of 9+2=11. Volg stappen." }],
          niveaus: { basis: "x=5. A.", simpeler: "3x−6=9 → 3x=15 → x=5. = A.", nogSimpeler: "5 = A." },
        },
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
        options: ["y = 0,20x + 10","y = 10x + 0,20","y = 10 + 0,20","y = 10x · 0,20"],
        answer: 0,
        wrongHints: [null, "Je hebt a en b verwisseld. €10 is de **vaste** maandprijs (b). €0,20 is **per minuut** (a — vermenigvuldigt met x).", "Geen x — dan kun je de variabele kosten (per minuut) niet uitrekenen.", "Vermenigvuldigen ipv optellen — maar de €10 is een vaste prijs, geen factor."],
        uitlegPad: {
          stappen: [{ titel: "Vast + variabel", tekst: "€10/maand = VAST (b). €0,20/minuut = PER eenheid (a vermenigvuldigt met x=minuten). Dus y = 0,20x + 10. y=totaal, x=minuten." }],
          woorden: [{ woord: "vaste kosten", uitleg: "Bedrag dat je altijd betaalt, los van gebruik." }, { woord: "variabele kosten", uitleg: "Bedrag dat afhangt van gebruik. Per eenheid (per minuut/km/uur)." }],
          theorie: "Patroon: y = (per_eenheid × x) + vaste_kosten. Net als taxi: €1,80×km + €4 startbedrag. Steeds zelfde principe.",
          voorbeelden: [{ type: "andere", tekst: "Sportschool €20 inschrijving + €5/bezoek: y = 5x + 20. Streamingdienst €8/mnd flat: y = 8 (geen x). Pizza €3 + €0,50/extra topping: y = 0,50x + 3." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "y=10x+0,20: a en b verwisseld. y=10+0,20: geen x. y=10x·0,20: vermenigvuldigen (=2x), niet plus." }],
          niveaus: { basis: "y=0,20x+10. A.", simpeler: "Per minuut €0,20 (=a). Vast €10 (=b). y=0,20x+10. = A.", nogSimpeler: "0,20x+10 = A." },
        },
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
        wrongHints: [null, "Je hebt 12 · 5 gedaan. Maar de groei is 3 cm/week. Reken: 3·5 + 12 = 15 + 12 = 27.", "Je hebt alleen de groei (3·5=15) of alleen de start (12). Je moet beide optellen.", "12 is de start, maar er groeit ook bij. 3·5 = 15 erbij, dus 27 cm."],
        uitlegPad: {
          stappen: [
            { titel: "Formule", tekst: "Start 12, groei 3/week. y = 3x + 12 (y=lengte, x=weken)." },
            { titel: "Invullen", tekst: "x=5: y = 3·5 + 12 = 15 + 12 = 27 cm." },
          ],
          woorden: [{ woord: "begin + groei", uitleg: "Lineair gedrag: vast beginpunt + constante toename." }],
          theorie: "Klassieke toepassing lineaire formules. Vergelijk taxi, abonnement, sparen: zelfde patroon. Som b + (a × tijd).",
          voorbeelden: [{ type: "andere weken", tekst: "Na 1 wk: 3+12=15. Na 2: 6+12=18. Na 5: 15+12=27. Per week +3." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "60 = 12·5 (alleen × start). 15 = 3·5 (alleen groei). 12 = start zonder groei." }],
          niveaus: { basis: "27 cm. A.", simpeler: "y=3x+12. x=5: y=15+12=27. = A.", nogSimpeler: "27 = A." },
        },
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
        wrongHints: [null, "Reken: −2x → 3x − 3 = 9, +3 → 3x = 12, ÷3 → x = 4.", "Je hebt niet beide kanten 'op orde' gebracht. Probeer stap-voor-stap balans.", "Zonder de balansmethode te volgen kom je hier niet aan x = 2."],
        uitlegPad: {
          stappen: [
            { titel: "−2x van beide", tekst: "5x − 3 = 2x + 9 → 3x − 3 = 9." },
            { titel: "+3 dan ÷3", tekst: "3x = 12 → x = 4." },
          ],
          woorden: [{ woord: "balansmethode-stappen", uitleg: "x-en samen, getallen samen, delen voor x." }],
          theorie: "Standaard 3-stappen: (1) x-en bij elkaar. (2) Constanten bij elkaar. (3) Delen door coëfficiënt. Klassiek.",
          voorbeelden: [{ type: "check", tekst: "x=4: 5·4−3 = 17. 2·4+9 = 17. ✓" }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "6, 12, 2 = niet via balansmethode. Volg stappenplan." }],
          niveaus: { basis: "x=4. A.", simpeler: "3x=12 → x=4. = A.", nogSimpeler: "4 = A." },
        },
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
        wrongHints: [null, "Je hebt a en b verwisseld. a = (14−2)/(4−0) = 12/4 = 3. b = 2 (het y-coord bij x=0).", "−2 zou kloppen als (0, -2). Maar het eerste punt is (0, **2**), dus b = 2.", "4 is Δx, niet de helling. Helling = Δy/Δx = 12/4 = 3."],
        uitlegPad: {
          stappen: [
            { titel: "Helling", tekst: "a = (14−2)/(4−0) = 12/4 = 3." },
            { titel: "Snijpunt + formule", tekst: "Eerste punt (0,2) is precies y-as snijpunt. b=2. Dus y = 3x + 2." },
          ],
          woorden: [{ woord: "geluk-punt (0,b)", uitleg: "Als één gegeven punt op y-as ligt: b direct af te lezen." }],
          theorie: "Combineer 2 vaardigheden: helling uitrekenen + snijpunt vinden. Beide opzoeken → formule samen.",
          voorbeelden: [{ type: "check", tekst: "y=3x+2. x=0: 2 ✓. x=4: 14 ✓. Beide punten op lijn." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "y=2x+3: a en b verwisseld. y=3x−2: b verkeerd teken. y=4x+2: Δx ipv helling." }],
          niveaus: { basis: "y=3x+2. A.", simpeler: "a=3, b=2 → y=3x+2. = A.", nogSimpeler: "3x+2 = A." },
        },
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
        options: ["p = 1,80k + 4","p = 4k + 1,80","p = 1,80 + 4k","p = 5,80k"],
        answer: 0,
        wrongHints: [null, "Je hebt a en b verwisseld. Het start-bedrag is €4 (vast = b), per km is €1,80 (a).", "Verwarrend genoteerd — feitelijk is dit p = 4k + 1,80, en dat klopt niet (4 is geen tarief per km).", "Je hebt 4 + 1,80 opgeteld — niet doen, het zijn verschillende rollen."],
        uitlegPad: {
          stappen: [{ titel: "€4 vast, €1,80/km", tekst: "Start €4 = vaste kosten (b=4). €1,80/km = tarief per eenheid (a=1,80). Variabele = km (x=k). Formule: p = 1,80k + 4." }],
          woorden: [{ woord: "k", uitleg: "Kilometers. Variabele (zoals x)." }],
          theorie: "Standaard model 'startbedrag + per stuk': formule altijd y = a·x + b. Hier p = 1,80·k + 4.",
          voorbeelden: [{ type: "patroon", tekst: "Net als taxi-, abonnement-, sportschool-modellen. Steeds 'vast + per eenheid'." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "p=4k+1,80: verwisseld. p=5,80k: optellen verkeerd. Geen onderscheid vast/variabel." }],
          niveaus: { basis: "p=1,80k+4. A.", simpeler: "Vast €4 (=b), per km €1,80 (=a). p=1,80k+4. = A.", nogSimpeler: "1,80k+4 = A." },
        },
      },
      {
        q: "Wat kost een rit van **12 km**?",
        options: ["€25,60", "€21,60", "€69,60", "€16,00"],
        answer: 0,
        wrongHints: [null, "Je bent het startbedrag (€4) vergeten op te tellen. 1,80 × 12 = 21,60, plus 4 = 25,60.", "Je hebt 5,80 × 12 gedaan (a en b opgeteld). Niet — gebruik de formule.", "Je hebt 12 + 4 = 16. Maar 1,80 × 12 ≠ 12."],
        uitlegPad: {
          stappen: [
            { titel: "Invullen", tekst: "p = 1,80·k + 4. k=12: p = 1,80·12 + 4." },
            { titel: "Berekenen", tekst: "1,80·12 = 21,60. + 4 = 25,60. Dus €25,60." },
          ],
          woorden: [{ woord: "totaal", uitleg: "Variabele kosten + vaste kosten = totaalprijs." }],
          theorie: "Standaardstap. Invullen + uitrekenen. Vergeet vaste kosten niet (klassieke val: alleen variabel rekenen).",
          voorbeelden: [{ type: "andere afstanden", tekst: "5 km: 9+4=13. 10 km: 18+4=22. 20 km: 36+4=40." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "21,60 = vergeten start €4. 69,60 = 5,80×12 (verkeerd geteld). 16 = 12+4 zonder ×1,80." }],
          niveaus: { basis: "€25,60. A.", simpeler: "1,80·12+4 = 21,60+4 = 25,60. = A.", nogSimpeler: "€25,60 = A." },
        },
      },
      {
        q: "Hoeveel km is een rit als de **prijs €31** is?",
        options: ["15 km", "17 km", "19 km", "12 km"],
        answer: 0,
        wrongHints: [null, "Welk bedrag betaal je sowieso, los van de afstand? Trek dat eerst af voor je deelt.", "Heb je het startbedrag al meegenomen? Eerst aftrekken, dán delen.", "Bijna — heb je het juiste startbedrag afgetrokken voor je gaat delen?"],
        uitlegPad: {
          stappen: [
            { titel: "Balansmethode", tekst: "31 = 1,80k + 4. Min 4: 27 = 1,80k." },
            { titel: "Delen", tekst: "k = 27 / 1,80 = 15 km." },
          ],
          woorden: [{ woord: "vergelijking", uitleg: "Bij gegeven y (prijs), zoek x (km). Andersom als vorige vraag." }],
          theorie: "Klassieke andersom-vraag. Stappen: (1) trek vaste kosten af. (2) Deel door tarief. Antwoord = aantal eenheden.",
          voorbeelden: [{ type: "check", tekst: "k=15: 1,80·15+4 = 27+4 = 31 ✓. Klopt." }],
          basiskennis: [{ onderwerp: "Volgorde", uitleg: "Vergeet niet eerst −4 doen. 31/1,80 ≈ 17 = fout (zonder vast af te trekken)." }],
          niveaus: { basis: "15 km. A.", simpeler: "31−4=27. 27/1,80=15. = A.", nogSimpeler: "15 = A." },
        },
      },
      { q: "Formule y = 2x + 3. Wat is y als x=4?", options: ["11","8","7","5"], answer: 0, wrongHints: [null, "Niet — +3 vergeten.", "Niet.", "Niet."] },
      { q: "Bij y = 3x + 5: wat is **helling**?", options: ["3","5","8","15"], answer: 0, wrongHints: [null, "Dat is constante (start).", "Niet.", "Niet."] },
      { q: "Bij y = ax + b: wat is **b**?", options: ["Y-startwaarde (waar lijn x-as snijdt)","Helling","Aantal x-waarden","Onbekende"], answer: 0, wrongHints: [null, "Dat is a.", "Niet.", "Niet."] },
      { q: "Los op: 3x + 4 = 19", options: ["x = 5","x = 7","x = 4","x = 15"], answer: 0, wrongHints: [null, "Niet — vergeet niet −4 eerst.", "Niet.", "Te hoog."] },
      { q: "Een **horizontale lijn** y = 5 heeft welke helling?", options: ["0","5","1","Niet bepaald"], answer: 0, wrongHints: [null,"Dat is y-waarde.","Schuin omhoog.","Wel bepaald."] },
      { q: "Snijpunt **y-as** van y = 2x − 7 is op?", options: ["(0, −7)","(0, 7)","(7, 0)","(2, 0)"], answer: 0, wrongHints: [null,"Plus i.p.v. min.","Op x-as.","Niet snijpunt y-as."] },
      { q: "Bij y = ax + b: **b > 0** betekent?", options: ["Lijn snijdt y-as BOVEN oorsprong","Onder oorsprong","Door oorsprong","Niet relevant"], answer: 0, wrongHints: [null,"Dat is b<0.","Dat is b=0.","Wel relevant."] },
      { q: "Punten (1, 5) en (3, 11) — wat is **helling**?", options: ["3","2","6","½"], answer: 0, wrongHints: [null,"x-verschil.","y-verschil totaal.","Andersom."] },
      { q: "**Lineaire functies** hebben in een grafiek altijd?", options: ["Rechte lijn","Parabool","Cirkel","Knik"], answer: 0, wrongHints: [null,"Kwadratisch.","Geen functie.","Geen lineair."] },
      { q: "**y = 4** is een ___?", options: ["Horizontale lijn","Verticale lijn","Parabool","Punt"], answer: 0, wrongHints: [null,"x=4 is verticaal.","Niet.","Lijn, niet punt."] },
      { q: "**Stelsel** van 2 lineaire vergelijkingen heeft meestal?", options: ["1 snijpunt","Geen snijpunt","Oneindig veel","Niet bepaald"], answer: 0, wrongHints: [null,"Bij evenwijdige.","Bij identieke.","Wel bepaald."] },
      { q: "**Open vraag**: bereken y bij x=10 voor y=2x+5. Typ getal.", kind: "open", acceptedAnswers: ["25"], numericTolerance: 0, explanation: "y = 2·10 + 5 = 25." },
      { q: "**Open vraag**: helling van lijn door (0,0) en (4,8) — typ getal.", kind: "open", acceptedAnswers: ["2"], numericTolerance: 0, explanation: "(8−0)/(4−0) = 8/4 = 2." },
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
  referentieNiveau: "2F",
  sloThema: "Verbanden — lineaire formules",
  topics: ["WI.algebra.lineair"],
  prerequisites: [
    { id: "coordinatenstelsel", title: "Coördinatenstelsel", niveau: "vmbo-2F" },
    { id: "rekenen-met-letters", title: "Rekenen met letters", niveau: "vmbo-2F" },
  ],
  intro: "Lineaire formules — de meest gebruikte wiskundige basis. y = ax + b is overal: bij taxi-tarieven, spaarrekeningen, telefoonabonnementen, plantengroei. Hier leer je wat de getallen a en b doen, hoe je de grafiek tekent, formules opstelt en lineaire vergelijkingen oplost via de balansmethode.",
  triggerKeywords: ["lineair", "lineaire formule", "y = ax", "helling", "richtingscoëfficiënt", "balansmethode", "rechte lijn"],
  chapters,
  steps,
};

export default lineaireFormules;
