// Leerpad: Parabolen — vanaf de basis
// 32 stappen in 9 hoofdstukken (A t/m I).
// Tone: alsof tegen iemand die net kan rekenen — geen wiskundetermen
// zonder definitie, veel concrete voorbeelden.

const COLORS = {
  axis: "#e0e6f0",
  grid: "#2a3f5f",
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  curveAlt2: "#ffab91",
  point: "#ffd54f",
  text: "#e0e6f0",
};

const baseAxes = `<line x1="20" y1="100" x2="280" y2="100" stroke="${COLORS.axis}" stroke-width="1"/>
<line x1="150" y1="20" x2="150" y2="180" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="270" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">x</text>
<text x="155" y="28" fill="${COLORS.text}" font-size="11" font-family="Arial">y</text>`;

// Hulp om een gridje (5 vakjes per kant) te tekenen
const gridSvg = (() => {
  let lines = "";
  for (let i = 1; i <= 6; i++) {
    const x = 150 + i * 20; const xn = 150 - i * 20;
    if (x <= 280) lines += `<line x1="${x}" y1="98" x2="${x}" y2="102" stroke="${COLORS.axis}"/>`;
    if (xn >= 20) lines += `<line x1="${xn}" y1="98" x2="${xn}" y2="102" stroke="${COLORS.axis}"/>`;
    const y = 100 + i * 13; const yn = 100 - i * 13;
    if (y <= 180) lines += `<line x1="148" y1="${y}" x2="152" y2="${y}" stroke="${COLORS.axis}"/>`;
    if (yn >= 20) lines += `<line x1="148" y1="${yn}" x2="152" y2="${yn}" stroke="${COLORS.axis}"/>`;
  }
  return lines;
})();

// Mini-emoji per stap (zelfde volgorde als steps[])
const stepEmojis = [
  "📦", "²", "📋", "📊",                          // A. Helemaal het begin
  "➕", "📍", "📈",                                // B. Assenstelsel
  "🧮", "✨", "🌊", "📐",                          // C. Parabool ontdekken
  "🥣", "⛰️", "🔍",                                 // D. Dal/berg
  "🅰️", "✖️", "↔️", "〰️",                            // E. De a
  "⬆️", "⬇️", "🆑",                                  // F. Schuiven
  "🎯", "📌", "🅱️", "🧮",                            // G. Top vinden
  "⚓", "✂️", "🚫",                                  // H. Nulpunten
  "⚽", "⛲", "🎓", "🏆",                             // I. Toepassingen + eindopdrachten
];

const chapters = [
  { letter: "A", title: "Helemaal het begin", emoji: "🌱", from: 0, to: 3 },
  { letter: "B", title: "Tekenen op een assenstelsel", emoji: "📊", from: 4, to: 6 },
  { letter: "C", title: "De parabool ontdekken", emoji: "📈", from: 7, to: 10 },
  { letter: "D", title: "Dal of berg?", emoji: "⛰️", from: 11, to: 13 },
  { letter: "E", title: 'De "a" in y = ax²', emoji: "🔢", from: 14, to: 17 },
  { letter: "F", title: "Omhoog en omlaag schuiven", emoji: "↕️", from: 18, to: 20 },
  { letter: "G", title: "De top vinden", emoji: "🎯", from: 21, to: 24 },
  { letter: "H", title: "Nulpunten", emoji: "⚓", from: 25, to: 27 },
  { letter: "I", title: "Toepassingen + eindopdracht", emoji: "🏁", from: 28, to: 31 },
];

const steps = [
  // ─── A. Helemaal het begin ────────────────────────────
  {
    title: "Wat is een variabele?",
    explanation: "In wiskunde gebruiken we soms een **letter** in plaats van een getal. Vaak is dat de letter **x**. Die x staat voor *een getal dat we (nog) niet weten*, of een getal dat **kan veranderen**.\n\nVoorbeelden:\n• Stel x = 5. Dan is **x + 2** gewoon **5 + 2 = 7**.\n• Stel x = 10. Dan is **x + 2** = **10 + 2 = 12**.\n\nDe letter is dus een soort **doosje** waar je een getal in kunt stoppen. Pas als je weet wat erin zit, kun je rekenen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="100" y="60" width="100" height="80" rx="14" stroke="${COLORS.curve}" stroke-width="3" fill="rgba(0,200,83,0.08)"/>
<text x="150" y="115" text-anchor="middle" fill="${COLORS.curve}" font-size="42" font-family="Arial" font-weight="bold">x</text>
<text x="150" y="40" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">een doosje met een getal erin</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">we weten niet welk getal</text>
</svg>`,
    checks: [
      {
        q: "Stel x = 6. Wat is x + 3?",
        options: ["9", "63", "3", "6"],
        answer: 0,
        wrongHints: [
          null,
          "Niet de cijfers naast elkaar zetten. Je moet 6 en 3 bij elkaar **optellen**.",
          "Je hebt alleen het tweede getal genomen. Maar wat staat er voor het plus-teken?",
          "Je hebt alleen het eerste getal genomen. Maar wat staat er na het plus-teken?",
        ],
      },
    ],
  },
  {
    title: "Wat betekent x²?",
    explanation: "Soms zie je een klein **2**-tje boven een getal of letter staan, zoals **3²** of **x²**. Dat 2-tje heet een **macht**. Het betekent: *vermenigvuldig met zichzelf*.\n\nDus:\n• **3²** = 3 · 3 = **9**\n• **5²** = 5 · 5 = **25**\n• **10²** = 10 · 10 = **100**\n\nBij **x²** doe je hetzelfde: x² betekent **x · x**. Vul een getal in voor x:\n• Als x = 4, dan x² = 4 · 4 = **16**\n• Als x = 7, dan x² = 7 · 7 = **49**\n\n**Waarom heet het 'kwadraat'?**\n\nKwadraat is een oud woord voor **vierkant**. En dat slaat ergens op: x² is namelijk de **oppervlakte van een vierkant** waarvan elke zijde lengte x heeft.\n\nKijk naar het plaatje hieronder: een vierkantje van 1 bij 1 heeft 1 hokje. Een vierkantje van 2 bij 2 heeft 2·2 = 4 hokjes. Een vierkantje van 5 bij 5 heeft al 25 hokjes. Hoe groter de zijde x, hoe **veel sneller** het aantal hokjes (de oppervlakte) groeit.",
    svg: `<svg viewBox="0 0 300 200">
<defs>
<pattern id="cell" width="8" height="8" patternUnits="userSpaceOnUse">
<rect width="8" height="8" fill="rgba(0,200,83,0.28)" stroke="${COLORS.curve}" stroke-width="0.7"/>
</pattern>
</defs>
<text x="150" y="20" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">x² = oppervlakte van een vierkant met zijde x</text>
<rect x="38" y="132" width="8" height="8" fill="url(#cell)"/>
<text x="42" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">1²</text>
<text x="42" y="178" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">= 1</text>
<rect x="78" y="124" width="16" height="16" fill="url(#cell)"/>
<text x="86" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">2²</text>
<text x="86" y="178" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">= 4</text>
<rect x="120" y="116" width="24" height="24" fill="url(#cell)"/>
<text x="132" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">3²</text>
<text x="132" y="178" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">= 9</text>
<rect x="170" y="108" width="32" height="32" fill="url(#cell)"/>
<text x="186" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">4²</text>
<text x="186" y="178" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">= 16</text>
<rect x="220" y="100" width="40" height="40" fill="url(#cell)"/>
<text x="240" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">5²</text>
<text x="240" y="178" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">= 25</text>
</svg>`,
    checks: [
      {
        q: "Stel x = 4. Wat is x²?",
        options: ["16", "8", "6", "44"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 4 + 4 gedaan. Maar x² betekent **vermenigvuldigen** met zichzelf, niet optellen.",
          "Je hebt 4 + 2 gedaan. Het kleine 2-tje is geen getal om bij op te tellen — het zegt: doe de macht.",
          "Niet de cijfers naast elkaar zetten. 4² is 4 · 4. Hoeveel is 4 keer 4?",
        ],
      },
      {
        q: "Stel x = 6. Wat is x²?",
        options: ["36", "12", "8", "62"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 6 · 2 gedaan. Maar het 2-tje is geen vermenigvuldiger — het betekent: vermenigvuldig met **zichzelf**.",
          "Hoe kom je aan 8? Probeer nog eens: 6 keer 6.",
          "Niet de cijfers naast elkaar plakken. Reken: 6 · 6.",
        ],
      },
    ],
  },
  {
    title: "Een tabel: bij elke x een y",
    explanation: "We gaan nu **tabellen** maken. Een tabel laat in twee rijtjes zien: links een **x**, en daarnaast de **y** die daarbij hoort volgens een **regel**.\n\n**Regel**: y = x + 1\n\n| x | y |\n|---|---|\n| 0 | 1 |\n| 1 | 2 |\n| 2 | 3 |\n| 3 | 4 |\n\nKijk: bij elke x doen we +1 om y te krijgen. Simpel.\n\nMet een andere regel — bijvoorbeeld **y = x + 5** — krijg je weer andere y-waardes:\n\n| x | y |\n|---|---|\n| 0 | 5 |\n| 1 | 6 |\n| 2 | 7 |\n\nOnthoud: de regel zegt wat je met x moet doen om y te krijgen.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">Regel:  y = x + 1</text>
<rect x="80" y="38" width="140" height="148" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="80" y1="65" x2="220" y2="65" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="150" y1="38" x2="150" y2="186" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="115" y="58" text-anchor="middle" fill="${COLORS.text}" font-family="Arial" font-weight="bold" font-size="14">x</text>
<text x="185" y="58" text-anchor="middle" fill="${COLORS.text}" font-family="Arial" font-weight="bold" font-size="14">y</text>
<text x="115" y="87" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">0</text>
<text x="185" y="87" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">1</text>
<text x="115" y="112" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">1</text>
<text x="185" y="112" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">2</text>
<text x="115" y="137" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">2</text>
<text x="185" y="137" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">3</text>
<text x="115" y="162" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">3</text>
<text x="185" y="162" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">4</text>
<text x="115" y="183" text-anchor="middle" fill="${COLORS.muted || '#8899aa'}" font-size="11" font-family="Arial">→ +1</text>
</svg>`,
    checks: [
      {
        q: "Regel: y = x + 5. Als x = 3, wat is y?",
        options: ["8", "35", "5", "3"],
        answer: 0,
        wrongHints: [
          null,
          "Niet de cijfers naast elkaar zetten. Doe gewoon: 3 + 5.",
          "5 is een deel van het antwoord. Wat moet je nog bij 5 optellen?",
          "Je hebt alleen x gegeven. Maar volgens de regel moet je nog +5 doen.",
        ],
      },
    ],
  },
  {
    title: "Een tabel met y = x²",
    explanation: "Nu doen we hetzelfde als de vorige stap, maar met de regel **y = x²**.\n\nVoor elke x rekenen we x · x uit:\n\n| x | y = x² |\n|---|--------|\n| 0 | 0 · 0 = 0 |\n| 1 | 1 · 1 = 1 |\n| 2 | 2 · 2 = 4 |\n| 3 | 3 · 3 = 9 |\n| 4 | 4 · 4 = 16 |\n| 5 | 5 · 5 = 25 |\n\nValt je iets op? De y-waardes worden **steeds sneller groter**:\n• Van 0 naar 1: stap van **1**\n• Van 1 naar 4: stap van **3**\n• Van 4 naar 9: stap van **5**\n• Van 9 naar 16: stap van **7**\n• Van 16 naar 25: stap van **9**\n\nIn het plaatje hieronder zie je dat ook: elke staaf is een stuk **groter** dan de vorige. Bij gewone optellen (zoals y = x + 1) zou elke staaf even veel hoger zijn — hier niet. Y = x² **schiet weg**. Onthoud dit, want het is precies wat de parabool zijn U-vorm geeft.",
    svg: `<svg viewBox="0 0 300 210">
<line x1="20" y1="155" x2="280" y2="155" stroke="${COLORS.axis}" stroke-width="1"/>
<rect x="40" y="155" width="30" height="0" fill="${COLORS.curve}" opacity="0.85"/>
<text x="55" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=0</text>
<text x="55" y="150" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">0</text>
<rect x="78" y="150" width="30" height="5" fill="${COLORS.curve}" opacity="0.85"/>
<text x="93" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=1</text>
<text x="93" y="145" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">1</text>
<rect x="116" y="135" width="30" height="20" fill="${COLORS.curve}" opacity="0.85"/>
<text x="131" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=2</text>
<text x="131" y="130" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">4</text>
<rect x="154" y="110" width="30" height="45" fill="${COLORS.curve}" opacity="0.85"/>
<text x="169" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=3</text>
<text x="169" y="105" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">9</text>
<rect x="192" y="75" width="30" height="80" fill="${COLORS.curve}" opacity="0.85"/>
<text x="207" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=4</text>
<text x="207" y="70" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">16</text>
<rect x="230" y="30" width="30" height="125" fill="${COLORS.curve}" opacity="0.85"/>
<text x="245" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=5</text>
<text x="245" y="25" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">25</text>
<text x="150" y="195" text-anchor="middle" fill="#8899aa" font-size="10" font-family="Arial" font-style="italic">staven groeien steeds sneller — niet met gelijke stappen</text>
</svg>`,
    checks: [
      {
        q: "Regel: y = x². Als x = 7, wat is y?",
        options: ["49", "14", "9", "77"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 7 · 2 gedaan. Maar bij x² doe je x · **x**, dus 7 · 7.",
          "Hoe kom je aan 9? Reken nog eens: 7 keer 7.",
          "Niet de cijfers plakken. 7² is gewoon 7 · 7. Hoeveel is dat?",
        ],
      },
    ],
  },

  // ─── B. Tekenen op een assenstelsel ────────────────────────────
  {
    title: "Het assenstelsel",
    explanation: "Een **assenstelsel** is een manier om getallen te tekenen op papier. Het bestaat uit twee lijnen die elkaar kruisen:\n\n• De **x-as**: de horizontale lijn (links-rechts)\n• De **y-as**: de verticale lijn (omhoog-omlaag)\n\nWaar de twee lijnen elkaar kruisen heet de **oorsprong**: dat is het punt **(0, 0)**.\n\nOp de x-as staan getallen: rechts van de oorsprong zijn ze **positief** (1, 2, 3...), links zijn ze **negatief** (-1, -2, -3...).\n\nOp de y-as net zo: boven de oorsprong is positief, onder is negatief.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<text x="195" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">→ positief</text>
<text x="35" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">negatief ←</text>
<text x="155" y="50" fill="${COLORS.text}" font-size="11" font-family="Arial">↑ positief</text>
<text x="155" y="160" fill="${COLORS.text}" font-size="11" font-family="Arial">↓ negatief</text>
<circle cx="150" cy="100" r="3" fill="${COLORS.point}"/>
<text x="135" y="120" fill="${COLORS.point}" font-size="10" font-family="Arial">(0,0)</text>
</svg>`,
    checks: [
      {
        q: "Hoe heet de horizontale lijn in een assenstelsel?",
        options: ["De x-as", "De y-as", "De oorsprong", "De rechte"],
        answer: 0,
        wrongHints: [
          null,
          "De y-as gaat de andere kant op. Welke richting is horizontaal?",
          "De oorsprong is een **punt** (waar de lijnen kruisen), geen lijn.",
          "Een 'rechte' is geen vaste naam in een assenstelsel. We hebben twee assen — welke is horizontaal?",
        ],
      },
    ],
  },
  {
    title: "Een punt tekenen: coördinaten",
    explanation: "Een **punt** op het assenstelsel beschrijven we met **twee getallen** tussen haakjes: bijvoorbeeld **(3, 4)**.\n\nDe regel is altijd: **eerst x, dan y**.\n\nDus (3, 4) betekent:\n• **3 naar rechts** (op de x-as)\n• Dan vandaar **4 omhoog** (langs de y-as)\n\nDaar zet je een punt.\n\nNog een voorbeeld: **(2, -1)** betekent: 2 naar rechts, dan 1 **omlaag** (want -1 is negatief).\n\nHet punt **(0, 0)** is gewoon de oorsprong: niets naar rechts, niets omhoog.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<line x1="150" y1="100" x2="210" y2="100" stroke="${COLORS.curve2}" stroke-width="2" stroke-dasharray="3 3"/>
<line x1="210" y1="100" x2="210" y2="48" stroke="${COLORS.curve2}" stroke-width="2" stroke-dasharray="3 3"/>
<circle cx="210" cy="48" r="5" fill="${COLORS.point}"/>
<text x="218" y="44" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">(3, 4)</text>
<text x="170" y="93" fill="${COLORS.curve2}" font-size="10" font-family="Arial">3 →</text>
<text x="215" y="80" fill="${COLORS.curve2}" font-size="10" font-family="Arial">↑ 4</text>
</svg>`,
    checks: [
      {
        q: "Bij het punt (5, 2): hoe ver naar rechts ga je vanaf de oorsprong?",
        options: ["5", "2", "7", "3"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt het tweede getal gepakt. Maar de regel is: eerst x (rechts), dan y (omhoog). Welke staat **eerst**?",
          "Je hebt 5 + 2 gedaan. Maar het zijn geen getallen om op te tellen — het zijn twee aparte richtingen.",
          "Hoe kom je aan 3? Het eerste getal in (5, 2) is gewoon de stap naar rechts.",
        ],
      },
    ],
  },
  {
    title: "Een rechte lijn: y = x",
    explanation: "Met een **regel** kun je een hele groep punten op het assenstelsel zetten.\n\nDe simpelste regel is **y = x**. Dat betekent: y is **gelijk** aan x. Voor elke x krijg je dus dezelfde waarde voor y:\n\n| x | y |\n|---|---|\n| 0 | 0 |\n| 1 | 1 |\n| 2 | 2 |\n| 3 | 3 |\n\nAls je elk paar (x, y) als punt op het assenstelsel zet en ze met elkaar verbindt, krijg je een **schuine rechte lijn**.\n\nDeze lijn gaat door de oorsprong (0, 0) en stijgt netjes met 1 omhoog voor elke 1 naar rechts.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<line x1="80" y1="170" x2="220" y2="30" stroke="${COLORS.curve}" stroke-width="2.5"/>
<circle cx="150" cy="100" r="3" fill="${COLORS.point}"/>
<circle cx="170" cy="80" r="3" fill="${COLORS.point}"/>
<circle cx="190" cy="60" r="3" fill="${COLORS.point}"/>
<circle cx="130" cy="120" r="3" fill="${COLORS.point}"/>
<text x="225" y="35" fill="${COLORS.curve}" font-size="11" font-family="Arial">y = x</text>
</svg>`,
    checks: [
      {
        q: "Bij regel y = x: ligt het punt (5, 5) op de lijn?",
        options: ["Ja", "Nee"],
        answer: 0,
        wrongHints: [
          null,
          "Bij (5, 5) is x = 5 en y = 5. De regel zegt: y moet gelijk zijn aan x. Geldt dat?",
        ],
      },
    ],
  },

  // ─── C. De parabool ontdekken ────────────────────────────
  {
    title: "Tabel uitrekenen: y = x²",
    explanation: "Hetzelfde als bij y = x doen we nu, maar met de regel **y = x²** (dus y = x · x).\n\nWe nemen ook **negatieve** x-en mee, want -2 · -2 = 4 (twee keer een minteken geeft een plus).\n\n| x | y = x² |\n|---|--------|\n| -3 | 9 |\n| -2 | 4 |\n| -1 | 1 |\n| 0 | 0 |\n| 1 | 1 |\n| 2 | 4 |\n| 3 | 9 |\n\nKijk wat er opvalt: **de y-waardes zijn nooit negatief**. Want een getal maal zichzelf is altijd positief (of 0).\n\nOok zie je dat de tabel **symmetrisch** is — links en rechts van x=0 staan dezelfde y-waardes. In het plaatje hieronder zie je dat heel goed: het is een **U-patroon**, gespiegeld in het midden. Dit is de eerste keer dat we de parabool écht zien doorschemeren.",
    svg: `<svg viewBox="0 0 300 210">
<line x1="20" y1="155" x2="280" y2="155" stroke="${COLORS.axis}" stroke-width="1"/>
<line x1="150" y1="20" x2="150" y2="170" stroke="#69f0ae" stroke-width="1" stroke-dasharray="3 3"/>
<rect x="47" y="47" width="25" height="108" fill="${COLORS.curve}" opacity="0.85"/>
<text x="60" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=-3</text>
<text x="60" y="42" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">9</text>
<rect x="77" y="107" width="25" height="48" fill="${COLORS.curve}" opacity="0.85"/>
<text x="90" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=-2</text>
<text x="90" y="102" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">4</text>
<rect x="107" y="143" width="25" height="12" fill="${COLORS.curve}" opacity="0.85"/>
<text x="120" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=-1</text>
<text x="120" y="138" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">1</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=0</text>
<text x="150" y="150" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">0</text>
<rect x="167" y="143" width="25" height="12" fill="${COLORS.curve}" opacity="0.85"/>
<text x="180" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=1</text>
<text x="180" y="138" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">1</text>
<rect x="197" y="107" width="25" height="48" fill="${COLORS.curve}" opacity="0.85"/>
<text x="210" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=2</text>
<text x="210" y="102" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">4</text>
<rect x="227" y="47" width="25" height="108" fill="${COLORS.curve}" opacity="0.85"/>
<text x="240" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">x=3</text>
<text x="240" y="42" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">9</text>
<text x="160" y="40" fill="#69f0ae" font-size="10" font-family="Arial" font-style="italic">spiegel-as</text>
<text x="150" y="195" text-anchor="middle" fill="#8899aa" font-size="10" font-family="Arial" font-style="italic">links en rechts gelijk: de U-vorm van de parabool</text>
</svg>`,
    checks: [
      {
        q: "Bij regel y = x²: als x = -2, wat is y?",
        options: ["4", "-4", "-2", "2"],
        answer: 0,
        wrongHints: [
          null,
          "Pas op: -2 · -2 geeft een **plus**, niet een min. Twee minnen heffen elkaar op.",
          "Je hebt alleen het minteken overgenomen. Maar je moet ook nog **kwadrateren** (vermenigvuldigen met zichzelf).",
          "Je hebt het minteken weggehaald, maar daarna nog niet gekwadrateerd. -2 · -2 = ?",
        ],
      },
    ],
  },
  {
    title: "De punten plotten",
    explanation: "Nu zetten we elk **paar (x, y)** uit de tabel als een punt op het assenstelsel. Dat heet **plotten**.\n\nUit de tabel y = x²:\n• (-3, 9) → 3 naar links, 9 omhoog\n• (-2, 4) → 2 naar links, 4 omhoog\n• (-1, 1) → 1 naar links, 1 omhoog\n• (0, 0) → de oorsprong\n• (1, 1) → 1 naar rechts, 1 omhoog\n• (2, 4) → 2 naar rechts, 4 omhoog\n• (3, 9) → 3 naar rechts, 9 omhoog\n\nKijk goed: het punt midden onderaan (de oorsprong) is het laagste, en aan de zijkanten gaan de punten **steeds hoger**.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<circle cx="90" cy="44" r="4" fill="${COLORS.point}"/>
<circle cx="110" cy="76" r="4" fill="${COLORS.point}"/>
<circle cx="130" cy="92" r="4" fill="${COLORS.point}"/>
<circle cx="150" cy="100" r="4" fill="${COLORS.point}"/>
<circle cx="170" cy="92" r="4" fill="${COLORS.point}"/>
<circle cx="190" cy="76" r="4" fill="${COLORS.point}"/>
<circle cx="210" cy="44" r="4" fill="${COLORS.point}"/>
</svg>`,
    checks: [
      {
        q: "Hoeveel punten heb je in deze tabel (x van -3 tot 3)?",
        options: ["7", "6", "8", "3"],
        answer: 0,
        wrongHints: [
          null,
          "Vergeet niet de oorsprong: x = 0 is ook een punt. Tel ze allemaal.",
          "Reken na: -3, -2, -1, 0, 1, 2, 3. Hoeveel waardes zijn dat?",
          "Je hebt alleen de positieve x-en geteld. De negatieve tellen ook mee.",
        ],
      },
    ],
  },
  {
    title: "Verbinden: de parabool ontstaat",
    explanation: "Als we de punten verbinden — niet met rechte lijntjes, maar met een **vloeiende kromme** — ontstaat een mooie **U-vorm**.\n\nDeze vorm heeft een speciale naam: een **parabool**.\n\nDe parabool van **y = x²** ziet er zo uit:\n• In het midden (x = 0) zit het laagste punt\n• Aan de zijkanten gaat hij steeds hoger\n• Hij is **symmetrisch** (links en rechts spiegelbeeld)\n• Hij gaat oneindig door — hoe verder van het midden, hoe hoger\n\nGefeliciteerd: je hebt zojuist je eerste parabool getekend.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 90 44 Q 150 156 210 44" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<circle cx="90" cy="44" r="3" fill="${COLORS.point}"/>
<circle cx="110" cy="76" r="3" fill="${COLORS.point}"/>
<circle cx="130" cy="92" r="3" fill="${COLORS.point}"/>
<circle cx="150" cy="100" r="3" fill="${COLORS.point}"/>
<circle cx="170" cy="92" r="3" fill="${COLORS.point}"/>
<circle cx="190" cy="76" r="3" fill="${COLORS.point}"/>
<circle cx="210" cy="44" r="3" fill="${COLORS.point}"/>
<text x="215" y="50" fill="${COLORS.curve}" font-size="11" font-family="Arial">y = x²</text>
</svg>`,
    checks: [
      {
        q: "Welke vorm krijg je als je de punten verbindt met een vloeiende lijn?",
        options: ["Een U-vorm (parabool)", "Een rechte lijn", "Een cirkel", "Een driehoek"],
        answer: 0,
        wrongHints: [
          null,
          "Een rechte lijn krijg je bij y = x. Hier hadden we y = x² — en de y-waardes stegen sneller.",
          "Een cirkel sluit zich. Loopt de kromme terug naar het beginpunt?",
          "Een driehoek heeft hoeken. Heeft een vloeiende kromme hoeken?",
        ],
      },
    ],
  },
  {
    title: "Wat is een parabool?",
    explanation: "Even samenvatten wat we tot nu toe weten over de **parabool**:\n\n• Het is een **vloeiende U-vorm** — geen hoeken, geen knikken.\n• Hij is **symmetrisch**: als je een denkbeeldige spiegel-as door het midden tekent, is links en rechts precies gelijk.\n• Hij heeft één **top**: het hoogste of laagste punt.\n• Hij gaat oneindig door — hoe verder je gaat, hoe sneller hij stijgt of daalt.\n\nIn de echte wereld kom je de parabool tegen bij:\n• De baan van een gegooide bal\n• Water uit een fontein\n• De vorm van een satellietschotel\n• De vorm van koplampen in een auto",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<path d="M 80 40 Q 150 240 220 40" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<line x1="150" y1="40" x2="150" y2="170" stroke="${COLORS.curve2}" stroke-width="1" stroke-dasharray="3 3"/>
<text x="158" y="60" fill="${COLORS.curve2}" font-size="10" font-family="Arial">spiegel-as</text>
<circle cx="150" cy="100" r="4" fill="${COLORS.point}"/>
<text x="158" y="118" fill="${COLORS.point}" font-size="10" font-family="Arial">top</text>
</svg>`,
    checks: [
      {
        q: "Heeft een parabool hoeken of knikken?",
        options: ["Nee, hij is vloeiend", "Ja, één hoek", "Ja, twee hoeken"],
        answer: 0,
        wrongHints: [
          null,
          "Bij een hoek zou de lijn ineens van richting veranderen. Gebeurt dat in een parabool?",
          "Een parabool heeft geen knikken — denk aan de U-vorm die we tekenden, dat ging vloeiend.",
        ],
      },
    ],
  },

  // ─── D. Dal of berg? ────────────────────────────
  {
    title: "Een dalparabool — y = x²",
    explanation: "De parabool die we al getekend hebben — **y = x²** — heet een **dalparabool**.\n\nWaarom *dal*? Omdat hij eruitziet als een dal in een landschap: hij gaat eerst naar **beneden**, raakt het **laagste punt** in het midden, en gaat dan weer **omhoog**.\n\nDe vorm is een **U** — denk aan een soepkom, of de letter U.\n\nKenmerken van een dalparabool:\n• Vorm: **U**\n• Heeft een **laagste punt** (de top zit onderaan)\n• Opent **naar boven** — de armen wijzen omhoog",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 90 44 Q 150 156 210 44" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<circle cx="150" cy="100" r="5" fill="${COLORS.point}"/>
<text x="158" y="118" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">laagste punt</text>
<text x="215" y="50" fill="${COLORS.curve}" font-size="11" font-family="Arial">y = x²</text>
</svg>`,
    checks: [
      {
        q: "Waar zit de top van een dalparabool?",
        options: ["Onderaan (laagste punt)", "Bovenaan (hoogste punt)", "In het midden van de armen", "Op de y-as"],
        answer: 0,
        wrongHints: [
          null,
          "Bovenaan zit de top bij een **berg**parabool. Bij een dal — wat doet een dal in een landschap?",
          "Vaag — bekijk het plaatje: waar markeer ik de top?",
          "De top van y = x² zit toevallig wel op de y-as, maar de **kenmerkende** plek is: hoog of laag?",
        ],
      },
    ],
  },
  {
    title: "Een bergparabool — y = -x²",
    explanation: "Als we een **minteken** voor de x² zetten — **y = -x²** — gebeurt er iets bijzonders.\n\nMaak even een tabel:\n\n| x | y = -x² |\n|---|---------|\n| -2 | -(-2·-2) = -4 |\n| -1 | -(1) = -1 |\n| 0 | 0 |\n| 1 | -1 |\n| 2 | -4 |\n\nDe y-waardes zijn nu allemaal **negatief** (of 0). Dus de hele parabool zit **onder** de x-as.\n\nDeze vorm heet een **bergparabool**: hij ziet eruit als een berg, een omgekeerde U (∩-vorm). Hij heeft een **hoogste punt** in het midden.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 90 156 Q 150 44 210 156" stroke="${COLORS.curveAlt}" stroke-width="2.5" fill="none"/>
<circle cx="150" cy="100" r="5" fill="${COLORS.point}"/>
<text x="158" y="92" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">hoogste punt</text>
<text x="215" y="155" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial">y = -x²</text>
</svg>`,
    checks: [
      {
        q: "Bij regel y = -x²: als x = 3, wat is y?",
        options: ["-9", "9", "-6", "-3"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna! Het minteken vóór x² geeft uiteindelijk een **negatief** getal als x² positief is. 3·3 = 9, en dan dat -1 keer.",
          "Je hebt 3·-2 of zoiets gedaan. Reken: -1 · (3 · 3).",
          "Alleen het minteken pakken is niet genoeg — je moet ook nog 3·3 doen.",
        ],
      },
    ],
  },
  {
    title: "Hoe herken je dal of berg?",
    explanation: "Je hoeft geen tabel te maken om te zien of een parabool een **dal** of **berg** is. Kijk gewoon naar het **teken vóór x²**:\n\n• **Plus** vóór x² (of geen teken, dan is het stiekem +) → **dal**parabool (U)\n• **Min** vóór x² → **berg**parabool (∩)\n\nVoorbeelden:\n• y = x² → **dal** (geen teken = +)\n• y = 5x² → **dal** (5 is positief)\n• y = -x² → **berg** (min)\n• y = -3x² → **berg** (min)\n• y = ½x² → **dal** (½ is positief)\n\nKortom: alleen kijken naar het teken vóór x² — meer hoef je niet te doen.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="10" y1="100" x2="290" y2="100" stroke="${COLORS.axis}" stroke-width="1"/>
<path d="M 30 30 Q 80 200 130 30" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<text x="58" y="195" fill="${COLORS.curve}" font-size="11" font-family="Arial">dal (+)</text>
<text x="78" y="50" fill="${COLORS.curve}" font-size="10" font-family="Arial">y = x²</text>
<path d="M 170 170 Q 220 0 270 170" stroke="${COLORS.curveAlt}" stroke-width="2.5" fill="none"/>
<text x="195" y="195" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial">berg (-)</text>
<text x="210" y="155" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">y = -x²</text>
</svg>`,
    checks: [
      {
        q: "y = -7x². Dal of berg?",
        options: ["Berg", "Dal"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar het teken vóór x². Plus betekent dal, min betekent... wat?",
        ],
      },
      {
        q: "y = 4x². Dal of berg?",
        options: ["Dal", "Berg"],
        answer: 0,
        wrongHints: [
          null,
          "Bergparabool herken je aan een **min**-teken. Staat hier een min vóór x²?",
        ],
      },
    ],
  },

  // ─── E. De "a" in y = ax² ────────────────────────────
  {
    title: 'Wat is "a" in y = ax²?',
    explanation: "Wiskundigen schrijven vaak een **algemene vorm** met een letter, zoals **y = ax²**.\n\nDe letter **a** staat voor *het getal dat vóór x² staat*. Net zoals x een doosje is voor een onbekend getal, is **a** een doosje voor het getal vóór x².\n\nVoorbeelden:\n• y = **4**x² → hier is **a = 4**\n• y = **½**x² → hier is **a = ½**\n• y = **−2**x² → hier is **a = −2**\n• y = x² → hier is **a = 1** (de 1 schrijven we niet op, maar staat er stiekem)\n\nDe **a** is dus gewoon een getal — alleen weet je niet altijd vooraf welk. In een opgave staat 'm meestal er gewoon (zoals de 4 in y = 4x²).",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="50" text-anchor="middle" fill="${COLORS.text}" font-size="22" font-family="Arial">y = a · x²</text>
<text x="135" y="48" text-anchor="middle" fill="${COLORS.curve}" font-size="22" font-family="Arial" font-weight="bold">a</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.curve2}" font-size="16" font-family="Arial">y = 4x²    →    a = 4</text>
<text x="150" y="128" text-anchor="middle" fill="${COLORS.curve2}" font-size="16" font-family="Arial">y = ½x²   →    a = ½</text>
<text x="150" y="156" text-anchor="middle" fill="${COLORS.curve2}" font-size="16" font-family="Arial">y = x²    →    a = 1</text>
<text x="150" y="184" text-anchor="middle" fill="${COLORS.curve2}" font-size="16" font-family="Arial">y = -2x²  →    a = -2</text>
</svg>`,
    checks: [
      {
        q: "In y = 7x², wat is a?",
        options: ["7", "1", "2", "x"],
        answer: 0,
        wrongHints: [
          null,
          "1 is de a als er **geen getal** voor x² staat (zoals y = x²). Maar hier staat wel een getal.",
          "Het kleine 2-tje is de macht (kwadraat) — geen aparte letter. De a is het getal dat voor x² staat.",
          "x is de variabele in het kwadraat zelf. De a is het getal dat **vóór** x² staat.",
        ],
      },
      {
        q: "In y = x², wat is a?",
        options: ["1", "0", "x", "2"],
        answer: 0,
        wrongHints: [
          null,
          "Als a = 0 zou er helemaal geen x² over zijn (0 keer iets is 0). De parabool zou dan verdwijnen.",
          "x is het doosje voor de invoer. De a is een ander doosje — voor het getal vóór x².",
          "2 is de macht (het kleine 2-tje). De a is iets anders.",
        ],
      },
    ],
  },
  {
    title: "y = 2x² uitrekenen en vergelijken",
    explanation: "Tijd om te zien wat **a = 2** doet. Pak weer een tabel, met x = 0, 1, 2, 3.\n\n**Regel y = 2x²** → eerst x² uitrekenen, dan **maal 2**:\n\n| x | x² | y = 2x² |\n|---|----|---------|\n| 0 | 0 | 0 |\n| 1 | 1 | 2 |\n| 2 | 4 | 8 |\n| 3 | 9 | 18 |\n\nVergelijk met y = x²:\n\n| x | y = x² | y = 2x² |\n|---|--------|---------|\n| 1 | 1 | 2 |\n| 2 | 4 | 8 |\n| 3 | 9 | 18 |\n\nIn het plaatje hieronder zie je het direct: de oranje staaf is bij **elke x precies twee keer zo hoog** als de groene. De parabool stijgt dus 2× zo snel — hij wordt **smaller en steiler**.",
    svg: `<svg viewBox="0 0 300 210">
<line x1="20" y1="170" x2="280" y2="170" stroke="${COLORS.axis}" stroke-width="1"/>
<rect x="40" y="20" width="14" height="0" fill="${COLORS.curve}" opacity="0.85"/>
<rect x="56" y="20" width="14" height="0" fill="${COLORS.curveAlt}" opacity="0.85"/>
<text x="55" y="185" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">x=0</text>
<text x="47" y="165" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">0</text>
<text x="63" y="165" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">0</text>
<rect x="100" y="163" width="14" height="7" fill="${COLORS.curve}" opacity="0.85"/>
<rect x="116" y="156" width="14" height="14" fill="${COLORS.curveAlt}" opacity="0.85"/>
<text x="115" y="185" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">x=1</text>
<text x="107" y="158" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">1</text>
<text x="123" y="151" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">2</text>
<rect x="160" y="142" width="14" height="28" fill="${COLORS.curve}" opacity="0.85"/>
<rect x="176" y="114" width="14" height="56" fill="${COLORS.curveAlt}" opacity="0.85"/>
<text x="175" y="185" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">x=2</text>
<text x="167" y="137" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">4</text>
<text x="183" y="109" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">8</text>
<rect x="220" y="107" width="14" height="63" fill="${COLORS.curve}" opacity="0.85"/>
<rect x="236" y="44" width="14" height="126" fill="${COLORS.curveAlt}" opacity="0.85"/>
<text x="235" y="185" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">x=3</text>
<text x="227" y="102" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">9</text>
<text x="243" y="39" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">18</text>
<rect x="40" y="200" width="10" height="6" fill="${COLORS.curve}" opacity="0.85"/>
<text x="55" y="206" fill="${COLORS.text}" font-size="10" font-family="Arial">y = x²</text>
<rect x="160" y="200" width="10" height="6" fill="${COLORS.curveAlt}" opacity="0.85"/>
<text x="175" y="206" fill="${COLORS.text}" font-size="10" font-family="Arial">y = 2x²  (telkens 2× zo hoog)</text>
</svg>`,
    checks: [
      {
        q: "Bij y = 2x²: als x = 4, wat is y?",
        options: ["32", "16", "8", "64"],
        answer: 0,
        wrongHints: [
          null,
          "Je bent de stap vergeten. Eerst 4² = 16. Maar dan moet je nog **maal 2**.",
          "Je hebt 4·2 gedaan. Maar de regel zegt 2 maal x², dus eerst x² uitrekenen.",
          "Hoe kom je aan 64? Reken: x = 4 → 4·4 = 16 → 16·2 = ?",
        ],
      },
    ],
  },
  {
    title: "Hoe groter a, hoe smaller",
    explanation: "Bij **y = ax²** geldt deze regel:\n\n• **a > 1** (groter dan 1) → smal, steile parabool\n• **a = 1** → de standaard y = x²\n• **0 < a < 1** (tussen 0 en 1, zoals ½) → breed, flauwe parabool\n\nKijk maar naar de getallen bij dezelfde x:\n\n| x | y = ½x² | y = x² | y = 3x² |\n|---|---------|--------|---------|\n| 1 | 0,5 | 1 | 3 |\n| 2 | 2 | 4 | 12 |\n| 3 | 4,5 | 9 | 27 |\n\nBij x = 3 zit je bij y = 3x² al op **27**, terwijl y = ½x² nog maar op **4,5** staat. Dezelfde x — heel andere y. Daarom ziet 3x² er smal en steil uit, en ½x² breed en flauw.\n\nIn het plaatje hieronder zie je de drie krommes naast elkaar, met hun a-waardes erbij.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 130 30 Q 150 170 170 30" stroke="${COLORS.curveAlt}" stroke-width="2" fill="none"/>
<text x="105" y="22" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">y = 3x² (a=3, smal)</text>
<path d="M 90 44 Q 150 156 210 44" stroke="${COLORS.curve}" stroke-width="2" fill="none"/>
<text x="220" y="50" fill="${COLORS.curve}" font-size="10" font-family="Arial">y = x² (a=1)</text>
<path d="M 30 70 Q 150 130 270 70" stroke="${COLORS.curve2}" stroke-width="2" fill="none"/>
<text x="35" y="80" fill="${COLORS.curve2}" font-size="10" font-family="Arial">y = ½x² (a=½, breed)</text>
</svg>`,
    checks: [
      {
        q: "Welke is het smalst: y = 4x², y = x² of y = ½x²?",
        options: ["y = 4x²", "y = x²", "y = ½x²"],
        answer: 0,
        wrongHints: [
          null,
          "y = x² is de standaard. Welk getal in de lijst is groter dan 1? Een grotere a maakt smaller.",
          "½ is **kleiner** dan 1. Maakt dat smaller of breder?",
        ],
      },
      {
        q: "Welke is het breedst: y = 2x², y = x² of y = ⅓x²?",
        options: ["y = ⅓x²", "y = x²", "y = 2x²"],
        answer: 0,
        wrongHints: [
          null,
          "y = x² is de standaard. Welk getal in de lijst is **kleiner** dan 1?",
          "y = 2x² is steiler dan y = x², dus juist smaller.",
        ],
      },
    ],
  },
  {
    title: "y = ½x² uitrekenen",
    explanation: "Voor de zekerheid even een **brede** parabool uitrekenen. **Regel y = ½x²** → eerst x², dan delen door 2 (of: maal ½):\n\n| x | x² | y = ½x² |\n|---|----|---------|\n| 0 | 0 | 0 |\n| 2 | 4 | 2 |\n| 4 | 16 | 8 |\n| 6 | 36 | 18 |\n\nVergelijk: bij x = 6 was y = 36 voor y = x², maar nu **y = 18**. De helft.\n\nIn het plaatje hieronder zie je dat ook: de oranje staaf (y = ½x²) is bij elke x precies **half zo hoog** als de groene (y = x²). Daarom is deze parabool flauwer en breder — hij stijgt langzamer.",
    svg: `<svg viewBox="0 0 300 210">
<line x1="20" y1="170" x2="280" y2="170" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="55" y="185" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">x=0</text>
<text x="47" y="165" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">0</text>
<text x="63" y="165" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">0</text>
<rect x="100" y="158" width="14" height="12" fill="${COLORS.curve}" opacity="0.85"/>
<rect x="116" y="164" width="14" height="6" fill="${COLORS.curveAlt}" opacity="0.85"/>
<text x="115" y="185" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">x=2</text>
<text x="107" y="153" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">4</text>
<text x="123" y="159" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">2</text>
<rect x="160" y="122" width="14" height="48" fill="${COLORS.curve}" opacity="0.85"/>
<rect x="176" y="146" width="14" height="24" fill="${COLORS.curveAlt}" opacity="0.85"/>
<text x="175" y="185" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">x=4</text>
<text x="167" y="117" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">16</text>
<text x="183" y="141" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">8</text>
<rect x="220" y="62" width="14" height="108" fill="${COLORS.curve}" opacity="0.85"/>
<rect x="236" y="116" width="14" height="54" fill="${COLORS.curveAlt}" opacity="0.85"/>
<text x="235" y="185" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">x=6</text>
<text x="227" y="57" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">36</text>
<text x="243" y="111" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">18</text>
<rect x="40" y="200" width="10" height="6" fill="${COLORS.curve}" opacity="0.85"/>
<text x="55" y="206" fill="${COLORS.text}" font-size="10" font-family="Arial">y = x²</text>
<rect x="160" y="200" width="10" height="6" fill="${COLORS.curveAlt}" opacity="0.85"/>
<text x="175" y="206" fill="${COLORS.text}" font-size="10" font-family="Arial">y = ½x²  (telkens half zo hoog)</text>
</svg>`,
    checks: [
      {
        q: "Bij y = ½x²: als x = 8, wat is y?",
        options: ["32", "64", "16", "4"],
        answer: 0,
        wrongHints: [
          null,
          "Je bent de tweede stap vergeten. Eerst 8² = 64. Maar dan nog **delen door 2**.",
          "Je hebt 8 · 2 gedaan. De regel is anders: eerst kwadrateren, dan halveren.",
          "Je hebt 8 / 2 gedaan. Maar de regel zegt: eerst **kwadrateren**, dan halveren.",
        ],
      },
    ],
  },

  // ─── F. Omhoog en omlaag schuiven ────────────────────────────
  {
    title: "Verschuiven omhoog: y = x² + 2",
    explanation: "Als je **+ 2** toevoegt aan y = x², schuif je de hele parabool **2 omhoog**.\n\nWaarom? Bekijk de tabel:\n\n| x | y = x² | y = x² + 2 |\n|---|--------|------------|\n| 0 | 0 | 2 |\n| 1 | 1 | 3 |\n| 2 | 4 | 6 |\n| 3 | 9 | 11 |\n\nElke y is gewoon **2 hoger**. De vorm verandert niet — alleen de hoogte.\n\nWaar zat de top van y = x²? Op (0, 0). Bij y = x² + 2 zit de top dus op **(0, 2)**.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 90 18 Q 150 130 210 18" stroke="${COLORS.curve2}" stroke-width="2" fill="none"/>
<text x="200" y="35" fill="${COLORS.curve2}" font-size="10" font-family="Arial">y = x² + 2</text>
<path d="M 90 44 Q 150 156 210 44" stroke="${COLORS.curve}" stroke-width="2" fill="none"/>
<text x="215" y="50" fill="${COLORS.curve}" font-size="10" font-family="Arial">y = x²</text>
<circle cx="150" cy="100" r="3.5" fill="${COLORS.point}"/>
<circle cx="150" cy="74" r="3.5" fill="${COLORS.point}"/>
<line x1="168" y1="100" x2="168" y2="78" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="168,73 164,82 172,82" fill="${COLORS.point}"/>
<text x="174" y="92" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">+2 omhoog</text>
</svg>`,
    checks: [
      {
        q: "Bij y = x² + 5: als x = 0, wat is y?",
        options: ["5", "0", "25", "10"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt alleen x² uitgerekend. Maar er staat **+ 5** achter — dat moet je ook nog optellen.",
          "Je hebt 5² gedaan. Maar het 2-tje hoort bij **x**, niet bij de 5.",
          "Hoe kom je aan 10? Reken: 0² = 0, en dan +5 = ?",
        ],
      },
    ],
  },
  {
    title: "Verschuiven omlaag: y = x² − 3",
    explanation: "Hetzelfde idee, maar nu met **min 3**: de parabool schuift **3 omlaag**.\n\nTabel:\n\n| x | y = x² | y = x² − 3 |\n|---|--------|------------|\n| 0 | 0 | -3 |\n| 1 | 1 | -2 |\n| 2 | 4 | 1 |\n| 3 | 9 | 6 |\n\nDe top zat op (0, 0); is nu op **(0, -3)** — onder de x-as.\n\nDus: een **plus** duwt omhoog, een **min** duwt omlaag. Nooit naar links of rechts (dat doet iets anders, daar komen we later op).",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 90 44 Q 150 156 210 44" stroke="${COLORS.curve}" stroke-width="2" fill="none"/>
<text x="215" y="50" fill="${COLORS.curve}" font-size="10" font-family="Arial">y = x²</text>
<path d="M 90 84 Q 150 196 210 84" stroke="${COLORS.curveAlt}" stroke-width="2" fill="none"/>
<text x="200" y="170" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">y = x² − 3</text>
<circle cx="150" cy="100" r="3.5" fill="${COLORS.point}"/>
<circle cx="150" cy="139" r="3.5" fill="${COLORS.point}"/>
<line x1="168" y1="102" x2="168" y2="135" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="164,131 172,131 168,140" fill="${COLORS.point}"/>
<text x="174" y="124" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">−3 omlaag</text>
</svg>`,
    checks: [
      {
        q: "Bij y = x² − 4: als x = 0, wat is y?",
        options: ["-4", "4", "0", "16"],
        answer: 0,
        wrongHints: [
          null,
          "Het minteken vergeten? Reken: 0² = 0, en dan **min** 4.",
          "Je hebt alleen x² uitgerekend. Maar er staat ook nog **− 4** achter.",
          "Je hebt 4² of 16 gepakt. Maar de 4 is geen kwadraat — het is de waarde die je aftrekt.",
        ],
      },
    ],
  },
  {
    title: 'De "c" in y = x² + c',
    explanation: 'Wiskundigen geven dat verschuifgetal weer een eigen letter: **c**. De algemene vorm is dan **y = x² + c**.\n\n• Bij y = x² **+ 7**, is c = 7\n• Bij y = x² **− 4**, is c = -4 (let op: het minteken hoort bij de c!)\n• Bij y = x² zonder iets, is c = 0\n\nWat doet de c?\n\n• **c > 0** (positief) → parabool schuift **omhoog**\n• **c < 0** (negatief) → parabool schuift **omlaag**\n• **c = 0** → geen verschuiving\n\nEn de **top** zit altijd op **(0, c)**. Eenvoudig.',
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 90 14 Q 150 122 210 14" stroke="${COLORS.curve2}" stroke-width="2" fill="none"/>
<text x="200" y="30" fill="${COLORS.curve2}" font-size="10" font-family="Arial">y = x² + 5</text>
<path d="M 90 44 Q 150 156 210 44" stroke="${COLORS.curve}" stroke-width="2" fill="none"/>
<text x="215" y="50" fill="${COLORS.curve}" font-size="10" font-family="Arial">y = x²</text>
<path d="M 90 74 Q 150 186 210 74" stroke="${COLORS.curveAlt}" stroke-width="2" fill="none"/>
<text x="200" y="160" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">y = x² − 3</text>
<circle cx="150" cy="70" r="4" fill="${COLORS.point}"/>
<text x="160" y="73" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">(0, 5)</text>
<circle cx="150" cy="100" r="4" fill="${COLORS.point}"/>
<text x="160" y="103" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">(0, 0)</text>
<circle cx="150" cy="130" r="4" fill="${COLORS.point}"/>
<text x="160" y="133" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">(0, -3)</text>
</svg>`,
    checks: [
      {
        q: "Bij y = x² − 6, wat is c?",
        options: ["-6", "6", "0", "x"],
        answer: 0,
        wrongHints: [
          null,
          "Het minteken hoort erbij. -6 is iets anders dan +6.",
          "0 is c als er geen verschuiving is. Maar er staat hier wel iets achter x².",
          "x is de variabele. c is het verschuifgetal — het getal dat los achter x² staat.",
        ],
      },
      {
        q: "Bij y = x² + 9: waar zit de top?",
        options: ["(0, 9)", "(9, 0)", "(0, 0)", "(0, -9)"],
        answer: 0,
        wrongHints: [
          null,
          "(9, 0) is 9 naar rechts. Maar +c verschuift **verticaal** (omhoog), niet horizontaal.",
          "(0, 0) is de top zonder verschuiving. Maar er staat +9 — dus omhoog!",
          "+9 verschuift omhoog (positief), niet omlaag.",
        ],
      },
    ],
  },

  // ─── G. De top vinden ────────────────────────────
  {
    title: "Wat is 'de top'?",
    explanation: "De **top** van een parabool is het **uiterste punt** — het laagste of hoogste.\n\n• Bij een **dal**parabool is de top het **laagste** punt (onderaan de U)\n• Bij een **berg**parabool is de top het **hoogste** punt (bovenaan de ∩)\n\nDe top is het belangrijkste punt van een parabool. Bij veel opgaves moet je 'm vinden.\n\nDe top zit altijd op de **spiegel-as** — de denkbeeldige verticale lijn die de parabool in twee gelijke helften deelt.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 90 44 Q 150 156 210 44" stroke="${COLORS.curve}" stroke-width="2" fill="none"/>
<line x1="150" y1="44" x2="150" y2="170" stroke="${COLORS.curve2}" stroke-width="1" stroke-dasharray="3 3"/>
<circle cx="150" cy="100" r="6" fill="${COLORS.point}"/>
<text x="160" y="118" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">TOP</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel toppen heeft een parabool?",
        options: ["1", "2", "0", "Oneindig veel"],
        answer: 0,
        wrongHints: [
          null,
          "Bij een parabool is er maar één uiterste punt. Hoe vaak zie je in het plaatje een hoogste/laagste punt?",
          "0 zou betekenen dat de parabool nergens een uiterste heeft. Maar elke parabool heeft een laagste of hoogste punt.",
          "Oneindig veel zou betekenen dat overal hetzelfde is. Maar we zien duidelijk één punt waar het kantelt.",
        ],
      },
    ],
  },
  {
    title: "De top bij y = x² + c",
    explanation: "Voor de eenvoudige vorm **y = x² + c** zit de top altijd op **(0, c)**.\n\nWaarom? Omdat het laagste punt van y = x² op (0, 0) zat, en de + c-verschuiving alleen verticaal werkt — de top schuift dus mee.\n\nVoorbeelden:\n• y = x² + 4 → top is **(0, 4)**\n• y = x² − 5 → top is **(0, -5)**\n• y = x² → top is **(0, 0)**\n\nDit werkt ook met een **a** ervoor:\n• y = 3x² + 2 → top is **(0, 2)**\n• y = -x² − 7 → top is **(0, -7)** (let op: dit is een berg, dus de top is het **hoogste** punt)",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 100 30 Q 150 130 200 30" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<line x1="150" y1="40" x2="150" y2="180" stroke="#69f0ae" stroke-width="1" stroke-dasharray="4 3"/>
<circle cx="150" cy="80" r="6" fill="${COLORS.point}"/>
<text x="160" y="78" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">top: (0, c)</text>
<text x="160" y="93" fill="${COLORS.muted || '#8899aa'}" font-size="10" font-family="Arial">altijd op de y-as</text>
<text x="155" y="138" fill="${COLORS.muted || '#8899aa'}" font-size="10" font-family="Arial">x = 0</text>
<text x="225" y="35" fill="${COLORS.curve}" font-size="11" font-family="Arial">y = x² + c</text>
</svg>`,
    checks: [
      {
        q: "Wat is de top van y = x² − 8?",
        options: ["(0, -8)", "(0, 8)", "(-8, 0)", "(0, 0)"],
        answer: 0,
        wrongHints: [
          null,
          "Het min-teken vergeten? -8 is iets anders dan +8.",
          "(-8, 0) is 8 naar links. Maar de c verschuift verticaal, niet horizontaal.",
          "(0, 0) is de top als c = 0. Maar hier staat -8 — dus de top is verschoven.",
        ],
      },
    ],
  },
  {
    title: 'Een nieuwe term: de "b"',
    explanation: "Tot nu zagen we **y = ax² + c**. Nu voegen we een term toe die de top **horizontaal** kan verschuiven: **bx**.\n\nDe volledige algemene vorm is dan:\n\n**y = ax² + bx + c**\n\nDrie letters dus:\n• **a** = getal vóór x²\n• **b** = getal vóór x (zonder kwadraat)\n• **c** = los getal\n\nVoorbeelden:\n• y = x² + 4x → a = 1, b = 4, c = 0\n• y = 2x² − 6x + 1 → a = 2, b = -6, c = 1\n• y = x² + 5 → a = 1, b = 0 (geen x-term), c = 5\n\nDe **bx**-term zorgt dat de top niet meer netjes op de y-as zit, maar naar **links of rechts** schuift. Kijk naar het plaatje: drie parabolen, allemaal a = 1, maar met verschillende b. De top verspringt horizontaal.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 126 100 Q 138 140 150 100" stroke="${COLORS.curve2}" stroke-width="2" fill="none"/>
<path d="M 138 80 Q 150 120 162 80" stroke="${COLORS.curve}" stroke-width="2" fill="none"/>
<path d="M 150 100 Q 162 140 174 100" stroke="${COLORS.curveAlt}" stroke-width="2" fill="none"/>
<circle cx="150" cy="100" r="4" fill="${COLORS.curve}"/>
<text x="155" y="93" fill="${COLORS.curve}" font-size="9" font-family="Arial" font-weight="bold">(0, 0)</text>
<circle cx="138" cy="120" r="4" fill="${COLORS.curve2}"/>
<text x="92" y="135" fill="${COLORS.curve2}" font-size="9" font-family="Arial" font-weight="bold">(-2, -4)</text>
<circle cx="162" cy="120" r="4" fill="${COLORS.curveAlt}"/>
<text x="170" y="135" fill="${COLORS.curveAlt}" font-size="9" font-family="Arial" font-weight="bold">(2, -4)</text>
<rect x="20" y="28" width="10" height="6" fill="${COLORS.curve2}" opacity="0.85"/>
<text x="34" y="34" fill="${COLORS.text}" font-size="10" font-family="Arial">y = x² + 4x  (b = +4 → top naar links)</text>
<rect x="20" y="44" width="10" height="6" fill="${COLORS.curve}" opacity="0.85"/>
<text x="34" y="50" fill="${COLORS.text}" font-size="10" font-family="Arial">y = x²  (b = 0 → top in het midden)</text>
<rect x="20" y="60" width="10" height="6" fill="${COLORS.curveAlt}" opacity="0.85"/>
<text x="34" y="66" fill="${COLORS.text}" font-size="10" font-family="Arial">y = x² − 4x  (b = -4 → top naar rechts)</text>
</svg>`,
    checks: [
      {
        q: "In y = 2x² + 6x + 1, wat is b?",
        options: ["6", "2", "1", "0"],
        answer: 0,
        wrongHints: [
          null,
          "2 is a (het getal vóór x²). De b is het getal vóór x **zonder** kwadraat.",
          "1 is c (het losse getal achteraan). De b is het getal vóór x.",
          "0 zou betekenen geen x-term. Maar er staat duidelijk +6x in.",
        ],
      },
      {
        q: "In y = x² + 5, wat is b?",
        options: ["0", "1", "5", "x"],
        answer: 0,
        wrongHints: [
          null,
          "1 is a (het onzichtbare getal vóór x²). Maar er is geen losse x-term — dus b is...?",
          "5 is c (het losse getal). Voor b kijken we naar het getal vóór x — maar die staat hier niet.",
          "x is de variabele zelf, geen getal. De b zoeken we voor de x-term.",
        ],
      },
    ],
  },
  {
    title: "De topformule x_top = -b/(2a)",
    explanation: "Om de **x-coördinaat van de top** te vinden bij y = ax² + bx + c, gebruik je deze formule:\n\n**x_top = −b / (2·a)**\n\nIn woorden: tegengesteld teken van b, gedeeld door 2 maal a.\n\nVoorbeeld 1: **y = x² + 4x**\n• a = 1, b = 4\n• x_top = −4 / (2·1) = **−2**\n• Vul x = −2 in: y = (−2)² + 4·(−2) = 4 − 8 = **−4**\n• Top = **(−2, −4)**\n\nVoorbeeld 2: **y = 2x² − 8x + 3**\n• a = 2, b = −8\n• x_top = −(−8) / (2·2) = 8 / 4 = **2**\n• Vul x = 2 in: y = 2·(2²) − 8·2 + 3 = 8 − 16 + 3 = **−5**\n• Top = **(2, −5)**\n\nLet op die dubbele min in voorbeeld 2: −(−8) wordt **+8**.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">y = 2x² − 8x + 3</text>
<text x="150" y="40" text-anchor="middle" fill="${COLORS.muted || '#8899aa'}" font-size="11" font-family="Arial">a = 2,  b = −8,  c = 3</text>
<line x1="40" y1="55" x2="260" y2="55" stroke="${COLORS.curve}" stroke-width="1" opacity="0.4"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">x_top  =  −b / (2·a)</text>
<text x="150" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">=  −(−8) / (2·2)</text>
<text x="150" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">=  8 / 4</text>
<rect x="100" y="150" width="100" height="34" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="150" y="173" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">x_top = 2</text>
</svg>`,
    checks: [
      {
        q: "y = x² + 6x. Wat is x_top?",
        options: ["-3", "3", "-6", "6"],
        answer: 0,
        wrongHints: [
          null,
          "Vergeet het minteken vóór de formule niet: x_top = **−**b/(2a). b = 6, dus −b = −6.",
          "Je bent vergeten te delen door 2a. b = 6, 2a = 2, dus x_top = −6/2 = ?",
          "6 is alleen b zelf. Pas eerst de hele formule toe: −b / (2a).",
        ],
      },
      {
        q: "y = x² − 4x + 1. Wat is x_top?",
        options: ["2", "-2", "-4", "4"],
        answer: 0,
        wrongHints: [
          null,
          "b is hier −4 (mét minteken). Wat doet **−b** dan? Tegengesteld teken!",
          "Pas op met de tekens. −b betekent: tegengesteld teken van b. Wat is het tegengestelde van −4?",
          "4 was bijna goed: je had 'm gedeeld door 1 in plaats van 2a = 2. Reken nog: 4/2 = ?",
        ],
      },
    ],
  },

  // ─── H. Nulpunten ────────────────────────────
  {
    title: "Wat zijn nulpunten?",
    explanation: "**Nulpunten** zijn de plekken waar de parabool de **x-as** snijdt of raakt.\n\nOp de x-as is **y altijd 0**. Dus om nulpunten te vinden, vraag je: voor welke x is y = 0?\n\nEen parabool kan:\n• **2 nulpunten** hebben — hij snijdt de x-as op twee plekken\n• **1 nulpunt** — hij raakt de x-as precies op één punt (de top zit dan op de x-as)\n• **0 nulpunten** — hij zweeft helemaal boven of onder de x-as en raakt 'm niet\n\nNulpunten zijn vaak handig: ze vertellen je waar iets 'op nul' staat in een echt probleem (bv. wanneer een gegooide bal de grond raakt).",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 60 40 Q 150 220 240 40" stroke="${COLORS.curve}" stroke-width="2" fill="none"/>
<circle cx="106" cy="100" r="5" fill="${COLORS.point}"/>
<circle cx="194" cy="100" r="5" fill="${COLORS.point}"/>
<text x="80" y="125" fill="${COLORS.point}" font-size="10" font-family="Arial">nulpunt</text>
<text x="172" y="125" fill="${COLORS.point}" font-size="10" font-family="Arial">nulpunt</text>
</svg>`,
    checks: [
      {
        q: "Bij een nulpunt: welke waarde heeft y?",
        options: ["0", "1", "x", "Hangt ervan af"],
        answer: 0,
        wrongHints: [
          null,
          "1 is geen speciale waarde voor de x-as. De x-as is de lijn waar y altijd dezelfde vaste waarde heeft — welke?",
          "x is geen y-waarde. De vraag is: wat is y bij een nulpunt?",
          "Het is altijd hetzelfde — daarom heet het ook **nul**punt.",
        ],
      },
    ],
  },
  {
    title: "Nulpunten van y = x² − 9",
    explanation: "Om de nulpunten te vinden, **stel y = 0** in en los op:\n\n**Voorbeeld**: y = x² − 9\n\n1. Stel y = 0: **x² − 9 = 0**\n2. Zet de 9 naar de andere kant: **x² = 9**\n3. Welke x maakt dat x² = 9? Dat zijn er **twee**: x = 3 of x = −3 (want 3·3 = 9 én −3·−3 = 9)\n\nDe nulpunten zijn dus **x = 3** en **x = −3**.\n\nIn het plaatje hieronder zie je het direct: de parabool zakt naar zijn top op (0, −9), en snijdt de x-as op precies twee plekken — die gele puntjes zijn de nulpunten.\n\n**Vuistregel** voor y = x² − getal: de nulpunten zijn ± de wortel van het getal.\n• y = x² − 16 → x² = 16 → x = ±4\n• y = x² − 25 → x² = 25 → x = ±5",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 126 79 Q 150 175 174 79" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<circle cx="132" cy="100" r="6" fill="${COLORS.point}"/>
<text x="98" y="92" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">x = -3</text>
<circle cx="168" cy="100" r="6" fill="${COLORS.point}"/>
<text x="172" y="92" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">x = 3</text>
<circle cx="150" cy="127" r="4" fill="${COLORS.curveAlt}"/>
<text x="156" y="142" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">top (0, -9)</text>
<text x="180" y="60" fill="${COLORS.curve}" font-size="11" font-family="Arial" font-weight="bold">y = x² − 9</text>
<text x="40" y="190" fill="#8899aa" font-size="9" font-family="Arial" font-style="italic">de parabool snijdt de x-as twee keer — daar zijn de nulpunten</text>
</svg>`,
    checks: [
      {
        q: "Wat zijn de nulpunten van y = x² − 16?",
        options: ["x = -4 en x = 4", "x = -16 en x = 16", "x = 4 (alleen)", "Geen nulpunten"],
        answer: 0,
        wrongHints: [
          null,
          "x² = 16 vraagt: welk getal kwadraat is 16? Probeer: 16 · 16 = 256, te veel. Welk kleiner getal?",
          "Het zijn er twee: positief én negatief. Want zowel 4·4 als −4·−4 geeft 16.",
          "y = x² − 16 = 0 betekent x² = 16. Heeft dat een oplossing? Ja, zelfs twee.",
        ],
      },
    ],
  },
  {
    title: "Soms zijn er geen nulpunten",
    explanation: "Niet elke parabool snijdt de x-as. Soms zweeft hij helemaal **boven** (of onder) de x-as.\n\n**Voorbeeld**: y = x² + 4\n\n1. Stel y = 0: **x² + 4 = 0**\n2. x² = −4\n\nMaar... x² is **nooit negatief** (want x · x is altijd 0 of positief). Dus er bestaat **geen x** waarvoor x² = −4.\n\nDe parabool y = x² + 4 heeft dus **geen nulpunten** — hij raakt de x-as nergens.\n\n**Vuistregel** (alleen voor y = x² + getal of y = x² − getal):\n• y = x² **+** getal → geen nulpunten (zweeft boven x-as)\n• y = x² **−** getal → twee nulpunten (snijdt x-as twee keer)\n\nVoor parabolen met een bx-term moeten we wat anders doen — daar komen we in een verder hoofdstuk op terug.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 90 18 Q 150 130 210 18" stroke="${COLORS.curve2}" stroke-width="2.5" fill="none"/>
<text x="200" y="35" fill="${COLORS.curve2}" font-size="10" font-family="Arial">y = x² + 4</text>
<text x="80" y="170" fill="${COLORS.text}" font-size="11" font-family="Arial">parabool zweeft boven x-as</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel nulpunten heeft y = x² + 1?",
        options: ["0", "1", "2", "Oneindig"],
        answer: 0,
        wrongHints: [
          null,
          "x² + 1 = 0 betekent x² = -1. Kan een kwadraat negatief zijn?",
          "2 nulpunten heb je bij y = x² **−** een getal. Hier staat een **plus**.",
          "Een parabool snijdt een lijn (x-as) hooguit een paar keer, niet eindeloos.",
        ],
      },
      {
        q: "Hoeveel nulpunten heeft y = x² − 36?",
        options: ["2", "1", "0", "36"],
        answer: 0,
        wrongHints: [
          null,
          "Dat zou alleen kunnen als de top precies op de x-as zit (raken). Maar y = x² − 36 ligt 36 omlaag — hij snijdt twee keer.",
          "0 zou kloppen bij y = x² + iets (zwevend). Maar hier is een **min** — dus hij snijdt wel.",
          "36 is het getal in de vergelijking, niet het aantal nulpunten.",
        ],
      },
    ],
  },

  // ─── I. Toepassingen + eindopdracht ────────────────────────────
  {
    title: "Toepassing: een gegooide bal",
    explanation: "Parabolen zitten verstopt in alledaagse dingen. Een mooi voorbeeld: **een bal die je gooit**.\n\nGooi een bal schuin omhoog. Zijn baan ziet er zo uit:\n• Eerst gaat hij **omhoog en vooruit**\n• Bovenaan vertraagt hij\n• Daarna valt hij **omlaag en vooruit**\n\nDe vorm van die baan is een **bergparabool** (∩-vorm). Zijn hoogtepunt is de **top**.\n\nNatuurkundigen gebruiken een vergelijking als **h(t) = -5t² + vt + h₀** om de hoogte van een bal te berekenen op tijd t. Dat is gewoon een parabool — alleen met andere letters (h voor hoogte, t voor tijd).",
    svg: `<svg viewBox="0 0 300 200">
<line x1="20" y1="170" x2="280" y2="170" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="20" y="185" fill="${COLORS.text}" font-size="11" font-family="Arial">grond</text>
<path d="M 40 170 Q 150 -20 260 170" stroke="${COLORS.curveAlt}" stroke-width="2.5" fill="none"/>
<circle cx="150" cy="75" r="6" fill="${COLORS.point}"/>
<text x="160" y="68" fill="${COLORS.point}" font-size="11" font-family="Arial">top</text>
<text x="35" y="160" fill="${COLORS.curveAlt}" font-size="14" font-family="Arial">🤾</text>
<text x="262" y="160" fill="${COLORS.curveAlt}" font-size="14" font-family="Arial">⚽</text>
</svg>`,
    checks: [
      {
        q: "Welke vorm parabool past bij de baan van een bal?",
        options: ["Bergparabool (∩)", "Dalparabool (U)", "Rechte lijn", "Cirkel"],
        answer: 0,
        wrongHints: [
          null,
          "Een dalparabool zou betekenen dat de bal eerst **omlaag** gaat en dan weer omhoog. Maar gooi je 'm zo?",
          "Een bal volgt geen rechte lijn — hij vertraagt en valt door de zwaartekracht.",
          "Een cirkel sluit zich. Komt de bal weer terug bij waar je 'm gooide?",
        ],
      },
    ],
  },
  {
    title: "Toepassing: een fontein en een satellietschotel",
    explanation: "Nog twee plekken waar je parabolen ziet:\n\n**Fontein** — water spuit omhoog en valt weer terug. De vorm van de waterstraal is een **bergparabool**.\n\n**Satellietschotel** — die is geen *kromme* maar een hele schaal met een dwarsdoorsnede in de vorm van een **dalparabool**. Waarom? Omdat een parabool een handige eigenschap heeft: alle stralen die er recht in vallen, komen samen op één punt — het brandpunt. Daar zit het ontvanger-puntje van de schotel.\n\nDezelfde eigenschap zit in:\n• **Koplampen** van een auto (lichtstralen vanuit één punt komen er recht uit)\n• **Telescoopspiegels**\n• **Zonnekookers**\n\nParabolen zijn dus niet alleen wiskunde — ze zijn praktisch nuttig.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="20" y1="170" x2="280" y2="170" stroke="${COLORS.axis}" stroke-width="1"/>
<path d="M 35 170 Q 80 30 125 170" stroke="${COLORS.curve2}" stroke-width="2" fill="none"/>
<text x="55" y="185" fill="${COLORS.curve2}" font-size="11" font-family="Arial">⛲ fontein</text>
<path d="M 175 30 Q 220 200 265 30" stroke="${COLORS.curve}" stroke-width="3" fill="rgba(0,200,83,0.1)"/>
<line x1="175" y1="30" x2="265" y2="30" stroke="${COLORS.curve}" stroke-width="3"/>
<text x="180" y="185" fill="${COLORS.curve}" font-size="11" font-family="Arial">📡 schotel</text>
<line x1="195" y1="20" x2="195" y2="100" stroke="${COLORS.point}" stroke-width="1" stroke-dasharray="2 2"/>
<line x1="220" y1="20" x2="220" y2="100" stroke="${COLORS.point}" stroke-width="1" stroke-dasharray="2 2"/>
<line x1="245" y1="20" x2="245" y2="100" stroke="${COLORS.point}" stroke-width="1" stroke-dasharray="2 2"/>
<circle cx="220" cy="100" r="3" fill="${COLORS.point}"/>
</svg>`,
    checks: [
      {
        q: "Een satellietschotel heeft de vorm van een...",
        options: ["Dalparabool (U)", "Bergparabool (∩)", "Cirkel", "Rechte lijn"],
        answer: 0,
        wrongHints: [
          null,
          "Een schotel vangt iets op — denk aan een kommetje. Bergparabool (∩) is omgekeerd.",
          "Een cirkel zou alle kanten op buigen. Een schotel buigt maar één kant op — als een schaal.",
          "Een schotel is geen platte plaat, anders zou hij niets kunnen 'verzamelen' op één punt.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht 1: y = x² − 4",
    explanation: "Tijd om alles bij elkaar te zetten. Pak de parabool **y = x² − 4** en beantwoord drie dingen:\n\n**1. Dal of berg?**\nKijk naar het teken vóór x²: er staat geen min, dus +. **Dalparabool**.\n\n**2. Top?**\nDit is van de vorm y = x² + c, met c = −4.\nTop zit op (0, c) = **(0, −4)**.\n\n**3. Nulpunten?**\nStel y = 0: x² − 4 = 0 → x² = 4 → x = ±2.\nNulpunten: **x = −2** en **x = 2**.\n\nKijk naar het plaatje: de top zit 4 onder de x-as, en de parabool snijdt de x-as bij −2 en 2. Klopt allemaal.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 60 30 Q 150 240 240 30" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<circle cx="106" cy="100" r="4" fill="${COLORS.point}"/>
<text x="80" y="92" fill="${COLORS.point}" font-size="10" font-family="Arial">(-2, 0)</text>
<circle cx="194" cy="100" r="4" fill="${COLORS.point}"/>
<text x="200" y="92" fill="${COLORS.point}" font-size="10" font-family="Arial">(2, 0)</text>
<circle cx="150" cy="152" r="5" fill="${COLORS.curveAlt}"/>
<text x="158" y="170" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">top (0, -4)</text>
</svg>`,
    checks: [
      {
        q: "Welke beschrijving past bij y = x² − 4?",
        options: [
          "Dalparabool, top (0, -4), nulpunten -2 en 2",
          "Bergparabool, top (0, -4), nulpunten -2 en 2",
          "Dalparabool, top (0, 4), nulpunten -2 en 2",
          "Dalparabool, top (0, -4), geen nulpunten",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Soort klopt niet: er staat geen min vóór x², dus geen berg.",
          "Top klopt niet: bij −4 schuift de top **omlaag**, niet omhoog.",
          "Geen nulpunten klopt niet: bij y = x² − iets zijn er altijd 2 nulpunten. Reken: x² = 4 → ?",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht 2: y = x² + 6x",
    explanation: "Een lastiger eindopdracht: **y = x² + 6x** (met een bx-term, dus de top zit niet op de y-as).\n\n**1. Dal of berg?** Geen min vóór x² → **dal**.\n\n**2. Top?** Gebruik de formule x_top = −b/(2a):\n• a = 1, b = 6\n• x_top = −6 / (2·1) = **−3**\n• y_top = (−3)² + 6·(−3) = 9 − 18 = **−9**\n• Top = **(−3, −9)**\n\n**3. Nulpunten?** Stel y = 0: x² + 6x = 0.\nKun je x **buiten haakjes** halen: x · (x + 6) = 0.\nDit is 0 als x = 0 of (x + 6) = 0 → x = −6.\nNulpunten: **x = 0** en **x = −6**.\n\nNotice: de top zit precies in het midden tussen de twee nulpunten (-3 ligt midden tussen 0 en -6). Dat is altijd zo bij een parabool — de top ligt op de spiegel-as, halfweg tussen de nulpunten.",
    svg: `<svg viewBox="0 0 300 200">
${baseAxes}
${gridSvg}
<path d="M 30 -50 Q 90 240 150 100 Q 210 -40 270 100" stroke="${COLORS.curve}" stroke-width="2" fill="none" opacity="0.3"/>
<path d="M 60 -10 Q 90 200 150 100" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<path d="M 90 200 Q 90 200 90 200" />
<circle cx="150" cy="100" r="4" fill="${COLORS.point}"/>
<text x="155" y="92" fill="${COLORS.point}" font-size="10" font-family="Arial">(0, 0)</text>
<circle cx="30" cy="100" r="4" fill="${COLORS.point}"/>
<text x="35" y="92" fill="${COLORS.point}" font-size="10" font-family="Arial">(-6, 0)</text>
<circle cx="90" cy="217" r="5" fill="${COLORS.curveAlt}"/>
<text x="100" y="222" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">top (-3, -9)</text>
</svg>`,
    checks: [
      {
        q: "Wat is de top van y = x² + 6x?",
        options: ["(-3, -9)", "(3, -9)", "(-3, 9)", "(6, 0)"],
        answer: 0,
        wrongHints: [
          null,
          "Pas op met het minteken in x_top = **−**b/(2a). b = 6, dus −b = -6. Wat geeft -6/2?",
          "x_top klopt zou (-3) moeten zijn. Voor y_top vul x = -3 in: (-3)² + 6·(-3). Wat is dat?",
          "6 is alleen b. De top vind je via de hele formule: x_top = -b/(2a) = ?",
        ],
      },
      {
        q: "Wat zijn de nulpunten van y = x² + 6x?",
        options: [
          "x = 0 en x = -6",
          "x = 0 en x = 6",
          "x = -3 (alleen)",
          "Geen nulpunten",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bijna! Haal x buiten haakjes: x(x + 6) = 0. Dit is 0 als x = 0 of x + 6 = 0. Wat is x in dat tweede geval?",
          "-3 is x_top, niet een nulpunt. De top zit niet op de x-as bij deze parabool.",
          "Er zijn wel nulpunten: probeer y = 0 in te vullen. Bij x = 0 wordt y = 0 + 0 = 0 — dus x = 0 is al één nulpunt!",
        ],
      },
    ],
  },
];

// Koppel emoji aan elke stap
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const parabolen = {
  id: "parabolen",
  title: "Parabolen begrijpen",
  emoji: "📐",
  level: "klas1-vwo",
  subject: "wiskunde",
  intro: "In 32 stapjes ontdek je wat een parabool is — vanaf de allereerste basis (wat is x²?) tot het uitrekenen van de top en de nulpunten. Geen voorkennis nodig.",
  triggerKeywords: ["parabool", "parabolen", "dalparabool", "bergparabool", "y=x²", "y = x²", "kwadratische functie"],
  chapters,
  steps,
};

export default parabolen;

export const ALL_LEARN_PATHS = {
  parabolen,
};

export function findLearnPathForQuestion(questionText) {
  if (!questionText) return null;
  const lower = questionText.toLowerCase();
  for (const path of Object.values(ALL_LEARN_PATHS)) {
    if (path.triggerKeywords?.some((kw) => lower.includes(kw.toLowerCase()))) {
      return path.id;
    }
  }
  return null;
}
