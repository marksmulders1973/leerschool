// Leerpad: Chemische reacties balanceren — kloppend maken van reactie-vergelijkingen
// 9 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: klas 3 onderbouw VO. Examenstof scheikunde CSE.
// Bouwt voort op atoombouwScheikunde (klas 1-2).

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  reactant: "#5d9cec", // blauw
  product: "#69f0ae",  // groen
  catalyst: "#b388ff", // paars
  arrow: "#ffd54f",
};

const stepEmojis = [
  "🧪",   // A1. wat is een reactie
  "⚖️",   // A2. behoud van massa
  "🔢",   // B1. molecuulformules
  "✏️",   // B2. reactievergelijking schrijven
  "🧮",   // C1. balanceren stap voor stap
  "🔍",   // C2. moeilijkere voorbeelden
  "🔥",   // D1. types reacties
  "🌡️",  // D2. exotherm + endotherm
  "🏆",   // E. eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat is een chemische reactie?", emoji: "🧪", from: 0, to: 1 },
  { letter: "B", title: "Reactievergelijkingen schrijven", emoji: "✏️", from: 2, to: 3 },
  { letter: "C", title: "Balanceren — kloppend maken", emoji: "🧮", from: 4, to: 5 },
  { letter: "D", title: "Types reacties + energie", emoji: "🔥", from: 6, to: 7 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 8, to: 8 },
];

// Reactie-vergelijking visueel met links + rechts.
function reactieSvg(reactants = "2 H₂ + O₂", products = "2 H₂O", balanced = true) {
  return `<svg viewBox="0 0 320 140">
<rect x="0" y="0" width="320" height="140" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Een chemische reactie</text>

<!-- Links: reactanten -->
<rect x="20" y="40" width="120" height="50" rx="6" fill="${COLORS.reactant}" opacity="0.55"/>
<text x="80" y="60" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">REACTANTEN</text>
<text x="80" y="80" text-anchor="middle" fill="#fff" font-size="13" font-family="Arial" font-weight="bold">${reactants}</text>

<!-- Pijl -->
<line x1="148" y1="65" x2="180" y2="65" stroke="${COLORS.arrow}" stroke-width="2.5"/>
<polygon points="180,60 188,65 180,70" fill="${COLORS.arrow}"/>
<text x="164" y="55" text-anchor="middle" fill="${COLORS.arrow}" font-size="9" font-family="Arial">→</text>

<!-- Rechts: producten -->
<rect x="195" y="40" width="105" height="50" rx="6" fill="${COLORS.product}" opacity="0.55"/>
<text x="247" y="60" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">PRODUCTEN</text>
<text x="247" y="80" text-anchor="middle" fill="#fff" font-size="13" font-family="Arial" font-weight="bold">${products}</text>

<!-- Status onderaan -->
<text x="160" y="115" text-anchor="middle" fill="${balanced ? COLORS.good : COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">${balanced ? "✓ Aantal atomen klopt links = rechts" : "✗ Aantal atomen klopt nog NIET — moet kloppend gemaakt"}</text>
</svg>`;
}

// Atoomtelling-tabel.
function atoomtellingSvg(left, right, balanced) {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="18" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Tellen van atomen — links vs rechts</text>

<!-- Header -->
<rect x="20" y="30" width="280" height="22" fill="rgba(255,255,255,0.06)"/>
<text x="60" y="46" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial" font-weight="bold">Atoom</text>
<text x="160" y="46" text-anchor="middle" fill="${COLORS.reactant}" font-size="10" font-family="Arial" font-weight="bold">Links (reactanten)</text>
<text x="260" y="46" text-anchor="middle" fill="${COLORS.product}" font-size="10" font-family="Arial" font-weight="bold">Rechts (producten)</text>

<!-- Rows -->
${left.map((row, i) => {
    const y = 60 + i * 30;
    const ok = row.left === right[i].right;
    return `
<line x1="20" y1="${y - 5}" x2="300" y2="${y - 5}" stroke="${COLORS.muted}" stroke-width="0.5" opacity="0.3"/>
<text x="60" y="${y + 8}" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">${row.label}</text>
<text x="160" y="${y + 8}" text-anchor="middle" fill="${COLORS.reactant}" font-size="13" font-family="Arial" font-weight="bold">${row.left}</text>
<text x="260" y="${y + 8}" text-anchor="middle" fill="${COLORS.product}" font-size="13" font-family="Arial" font-weight="bold">${right[i].right}</text>
<text x="295" y="${y + 8}" text-anchor="middle" fill="${ok ? COLORS.good : COLORS.alt}" font-size="14" font-family="Arial" font-weight="bold">${ok ? "✓" : "✗"}</text>`;
  }).join("")}

<!-- Status -->
<text x="160" y="${60 + left.length * 30 + 25}" text-anchor="middle" fill="${balanced ? COLORS.good : COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">${balanced ? "✓ KLOPT — gebalanceerd" : "✗ Klopt nog niet"}</text>
</svg>`;
}

const steps = [
  // ─── A. Wat is een chemische reactie ───────────────
  {
    title: "Wat is een chemische reactie?",
    explanation: "Een **chemische reactie** is een proces waarbij **stoffen veranderen in andere stoffen**. De atomen blijven dezelfde, maar ze schuiven naar nieuwe combinaties.\n\n**Vergelijk met legoblokjes**: je breekt een huis af (uitgangsstoffen) en bouwt er een auto van (eindstoffen). Geen blokjes worden vernietigd, ze worden opnieuw gerangschikt.\n\n**Termen**:\n• **Reactanten** (uitgangsstoffen) = de stoffen die je begint mee.\n• **Producten** (eindstoffen) = de stoffen die er uit komen.\n• **→** = 'gaat over in'.\n\n**Voorbeeld**:\nAls je waterstofgas (H₂) verbrandt in zuurstof (O₂), krijg je water:\n\n**2 H₂ + O₂ → 2 H₂O**\n\n**Hoe herken je dat er een reactie is gebeurd?**\n• Kleurverandering.\n• Gasvorming (bubbeltjes).\n• Neerslag (vaste stof komt uit oplossing).\n• Warmte vrijkomen of opgenomen.\n• Geur ontstaat.\n\n**Geen reactie maar oplossen**: zout in water → zout lost op, maar het zout zelf is nog gewoon zout. Geen nieuwe stof. Wel een **fysisch verschijnsel**, geen scheikundige reactie.\n\n**Reacties zijn overal**:\n• Verbranding (vuur).\n• Fotosynthese in planten.\n• Roesten van ijzer.\n• Spijsvertering in je lichaam.\n• Cement uitharden.",
    svg: reactieSvg(),
    checks: [
      {
        q: "Wat zijn **reactanten** in een reactievergelijking?",
        options: [
          "De uitgangsstoffen (links van de pijl)",
          "De eindstoffen (rechts van de pijl)",
          "Stoffen die niet reageren",
          "De pijl zelf",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat zijn juist de producten.",
          "Reactanten reageren wél — ze worden iets nieuws.",
          "De pijl is een symbool, geen stof.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Reactanten = startstoffen", tekst: "Reactanten staan links van de pijl, producten rechts." }],
          woorden: [{ woord: "reactanten", uitleg: "stoffen vóór de pijl" }],
          theorie: "Reactanten → producten.",
          voorbeelden: [{ type: "voorbeeld", tekst: "CH₄ + O₂ → CO₂ + H₂O: CH₄, O₂ = reactanten" }],
          basiskennis: [{ onderwerp: "pijl", uitleg: "scheiding voor/na" }],
          niveaus: { basis: "Reactanten = links.", simpeler: "Voor de pijl.", nogSimpeler: "Links." },
        },
      },
      {
        q: "Welk verschijnsel is **geen** chemische reactie?",
        options: [
          "Suiker oplossen in koffie",
          "Hout verbranden",
          "IJzer roesten",
          "Magnesiumlint branden",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verbranding is een reactie.",
          "Roesten is reactie van ijzer met zuurstof.",
          "Verbranden is reactie.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Oplossen = geen reactie", tekst: "Suiker oplossen in koffie = fysisch proces. Het is nog suiker, alleen verdeeld." }],
          woorden: [{ woord: "fysisch", uitleg: "vorm verandert, stof blijft" }],
          theorie: "Chemische reactie = nieuwe stof. Oplossen ≠ reactie.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Suiker oplossen / smelten ijs = fysisch" }],
          basiskennis: [{ onderwerp: "test", uitleg: "kan je het terugkrijgen door verdamping?" }],
          niveaus: { basis: "Oplossen = geen reactie.", simpeler: "Fysisch.", nogSimpeler: "Geen reactie." },
        },
      },
    ],
  },
  {
    title: "Wet van Behoud van Massa",
    explanation: "**Antoine Lavoisier** (Frans, eind 18e eeuw) ontdekte dat tijdens een chemische reactie **geen atomen verloren gaan of erbij komen** — ze worden alleen anders gerangschikt.\n\n**Wet van Behoud van Massa**: in een gesloten systeem is de **totale massa van de producten = totale massa van de reactanten**.\n\n**Voorbeeld**: 1 g waterstof + 8 g zuurstof → 9 g water. Niets verdwenen, niets erbij.\n\n**Wat betekent dit voor reactievergelijkingen?**\nLinks (reactanten) en rechts (producten) moeten **evenveel atomen van elke soort** hebben.\n\n**Voorbeeld klopt**:\n**2 H₂ + O₂ → 2 H₂O**\n• Links: 4 H + 2 O.\n• Rechts: 4 H + 2 O.\n• Klopt! ✓\n\n**Voorbeeld klopt NIET (nog te kloppend maken)**:\n**H₂ + O₂ → H₂O**\n• Links: 2 H + 2 O.\n• Rechts: 2 H + 1 O.\n• Klopt niet ✗ — er is een O-atoom 'verdwenen' wat onmogelijk is.\n\n**Daarom**: bij reactievergelijkingen moeten we soms **coëfficiënten** voor moleculen zetten — getallen voor het molecuul.\n\n**Coëfficiënten**: '2' in '2 H₂' betekent: er zijn 2 H₂-moleculen. Dat is in totaal 4 H-atomen.\n\n**Indices** (klein cijfertje achter): de '2' in 'H₂' betekent: 2 H-atomen per molecuul. **Indices mag je nooit veranderen** bij balanceren — alleen coëfficiënten.\n\n**Belangrijk**: de stoffen blijven dezelfde — alleen veranderen we hun aantallen door coëfficiënten ervoor te zetten.",
    svg: reactieSvg("H₂ + O₂", "H₂O", false),
    checks: [
      {
        q: "Wat zegt de Wet van Behoud van Massa?",
        options: [
          "Massa van producten = massa van reactanten",
          "Massa neemt altijd toe",
          "Massa verdwijnt bij verbranding",
          "Massa is altijd 1 gram",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet altijd toe — blijft gelijk.",
          "Andersom — massa blijft.",
          "Niet één bepaald getal — totaal blijft gelijk.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Massa blijft", tekst: "Atomen verdwijnen niet — totale massa blijft gelijk." }],
          woorden: [{ woord: "behoud van massa", uitleg: "Lavoisier (1789)" }],
          theorie: "Massa van producten = massa van reactanten.",
          voorbeelden: [{ type: "voorbeeld", tekst: "1g H + 8g O = 9g H₂O" }],
          basiskennis: [{ onderwerp: "wet", uitleg: "fundamenteel principe scheikunde" }],
          niveaus: { basis: "Massa blijft gelijk.", simpeler: "Geen verlies.", nogSimpeler: "Massa = massa." },
        },
      },
      {
        q: "Welk getal mag je **nooit** veranderen bij balanceren?",
        options: [
          "De index (klein cijfertje achter element, zoals de 2 in H₂)",
          "De coëfficiënt (groot getal vóór molecuul)",
          "Allebei",
          "Geen van beide",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Coëfficiënten mag je juist veranderen om te balanceren.",
          "Coëfficiënten mag je wél veranderen.",
          "Indices mag je niet veranderen.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Index = vast", tekst: "De kleine cijfertjes (zoals 2 in H₂) horen bij het molecuul zelf en mag je nooit veranderen." }],
          woorden: [{ woord: "index", uitleg: "klein cijfertje achter element" }],
          theorie: "Coëfficiënten (vóór) wel veranderen, indices (achter) nooit.",
          voorbeelden: [{ type: "voorbeeld", tekst: "2 H₂ = mag je veranderen naar 3 H₂. Maar H₂ → H₃ NIET." }],
          basiskennis: [{ onderwerp: "ander molecuul", uitleg: "index veranderen = andere stof" }],
          niveaus: { basis: "Index niet veranderen.", simpeler: "Klein cijfer vast.", nogSimpeler: "Index = vast." },
        },
      },
    ],
  },

  // ─── B. Reactievergelijkingen ───────────────
  {
    title: "Molecuulformules — wat staat er in een formule?",
    explanation: "Elke chemische stof heeft een **molecuulformule** die zegt **welke atomen** en **hoeveel** er in één molecuul zitten.\n\n**Voorbeelden**:\n• **H₂O** = water = 2 waterstof-atomen + 1 zuurstof-atoom\n• **CO₂** = kooldioxide = 1 koolstof + 2 zuurstof\n• **NaCl** = keukenzout = 1 natrium + 1 chloor\n• **C₆H₁₂O₆** = glucose = 6 koolstof + 12 waterstof + 6 zuurstof\n• **CH₄** = methaan (aardgas) = 1 koolstof + 4 waterstof\n• **NH₃** = ammoniak = 1 stikstof + 3 waterstof\n\n**Indices** (klein cijfertje achter, vaak onderaan):\n• Geen index → 1 atoom (bijv. de N in NH₃ = 1 N).\n• '2', '3', etc. → meer atomen.\n\n**Coëfficiënten** (groot getal voor):\n• Geen coëfficiënt → 1 molecuul.\n• '2 H₂O' = 2 watermoleculen = 4 H + 2 O totaal.\n• '3 CO₂' = 3 kooldioxide-moleculen = 3 C + 6 O totaal.\n\n**Belangrijke 'twee-atomige moleculen'** (di-atomic) — komen ALTIJD als pair:\n• **H₂** (waterstofgas)\n• **O₂** (zuurstofgas)\n• **N₂** (stikstofgas)\n• **Cl₂** (chloorgas)\n• **Br₂** (broom)\n• **I₂** (jood)\n• **F₂** (fluor)\n\nGeheugenezel: **'HONClBrIF'** — \"Has Old Nelson Cleared Boring Issues Forever?\"\n\nAls je deze atoom alleen gebruikt in een reactie, gebruik dan altijd de di-atomische vorm (bijvoorbeeld H₂, niet H).\n\n**Atoom tellen — voorbeeld**\n**3 H₂SO₄** = 3 zwavelzuur-moleculen.\n• H: 3 × 2 = 6.\n• S: 3 × 1 = 3.\n• O: 3 × 4 = 12.\n• Totaal in 3 moleculen: 6 H + 3 S + 12 O.",
    svg: reactieSvg("CH₄ + 2 O₂", "CO₂ + 2 H₂O", true),
    checks: [
      {
        q: "Hoeveel atomen zitten er in **H₂SO₄**?",
        options: ["7 (2 H + 1 S + 4 O)", "3", "10", "8"],
        answer: 0,
        wrongHints: [
          null,
          "Veel meer — tel alle indices op.",
          "Te veel — alleen 7.",
          "Bijna goed maar niet 8 — controleer 2+1+4.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Tel alle indices op", tekst: "H₂SO₄: 2 H + 1 S + 4 O = 7 atomen." }],
          woorden: [{ woord: "tellen", uitleg: "index achter element" }],
          theorie: "Geen index = 1. Som van indices = totaal.",
          voorbeelden: [{ type: "voorbeeld", tekst: "H₂SO₄ = 2+1+4 = 7" }],
          basiskennis: [{ onderwerp: "S zonder index", uitleg: "S = 1 zwavel-atoom" }],
          niveaus: { basis: "7.", simpeler: "2 + 1 + 4 = 7.", nogSimpeler: "2 + 1 + 4 = 7. → 7." },
        },
      },
      {
        q: "Hoeveel waterstof-atomen zitten er totaal in **3 H₂O**?",
        options: ["6", "2", "3", "9"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is 1 H₂O — er zijn er 3.",
          "Dat is het aantal moleculen, geen atomen.",
          "Te veel — 3 × 2 = 6, niet 9.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Coëfficiënt × index", tekst: "3 H₂O: 3 moleculen × 2 H = 6 waterstof-atomen." }],
          woorden: [{ woord: "coëfficiënt × index", uitleg: "vermenigvuldigen voor totaal" }],
          theorie: "Aantal atomen = coëfficiënt × index per element.",
          voorbeelden: [{ type: "voorbeeld", tekst: "2 H₂SO₄ = 2×2=4 H + 2×1=2 S + 2×4=8 O" }],
          basiskennis: [{ onderwerp: "verdeel per element", uitleg: "tel per soort apart" }],
          niveaus: { basis: "6 H-atomen.", simpeler: "3 × 2 = 6.", nogSimpeler: "3 × 2 = 6. → 6." },
        },
      },
      {
        q: "Welke vorm gebruik je voor zuurstof in een reactievergelijking?",
        options: ["O₂ (di-atomic)", "O", "O₃", "O₄"],
        answer: 0,
        wrongHints: [
          null,
          "Zuurstof komt als pair voor in de natuur — O₂.",
          "O₃ is ozon (speciaal), niet de gewone vorm.",
          "Bestaat niet als gewone vorm.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Zuurstof = O₂ (pair)", tekst: "Zuurstofgas komt altijd als 2 atomen samen → O₂ (di-atomic)." }],
          woorden: [{ woord: "di-atomic", uitleg: "2 atomen vormen samen molecuul" }],
          theorie: "HONClBrIF-regel: H₂, O₂, N₂, Cl₂, Br₂, I₂, F₂ komen als pair voor.",
          voorbeelden: [{ type: "voorbeeld", tekst: "lucht: O₂ en N₂, geen losse O of N" }],
          basiskennis: [{ onderwerp: "O₃ vs O₂", uitleg: "O₂ normaal, O₃ = ozon (zeldzaam)" }],
          niveaus: { basis: "O₂.", simpeler: "Twee-atomig.", nogSimpeler: "Twee-atomig. → O₂." },
        },
      },
    ],
  },
  {
    title: "Reactievergelijking schrijven",
    explanation: "Om een reactie als formule op te schrijven volg je een paar stappen:\n\n**Stap 1**: schrijf op welke stoffen reageren (links) en welke ontstaan (rechts), met een **pijl** ertussen.\n\n**Stap 2**: schrijf elke stof als **molecuulformule**.\n\n**Stap 3**: maak het **kloppend** door coëfficiënten ervoor te zetten (zie volgende stap).\n\n**Voorbeeld 1**: methaan (aardgas) + zuurstof → kooldioxide + water\n• Stap 1: methaan + zuurstof → kooldioxide + water\n• Stap 2: CH₄ + O₂ → CO₂ + H₂O (klopt nog niet)\n• Stap 3: CH₄ + 2 O₂ → CO₂ + 2 H₂O (klopt nu wel)\n\n**Voorbeeld 2**: ijzer + zuurstof → ijzeroxide (roest)\n• Stap 1: ijzer + zuurstof → ijzeroxide\n• Stap 2: Fe + O₂ → Fe₂O₃ (klopt niet)\n• Stap 3: 4 Fe + 3 O₂ → 2 Fe₂O₃ (klopt)\n\n**Letters voor faseaanduiding (optioneel)**:\nSoms zie je extra letters tussen haakjes:\n• **(s)** = solid (vast).\n• **(l)** = liquid (vloeibaar).\n• **(g)** = gas.\n• **(aq)** = aqueous (in water opgelost).\n\nVoorbeeld: NaCl(s) + H₂O(l) → NaCl(aq) — keukenzout oplossen in water.\n\n**Bij CSE-vragen**: niet altijd verplicht. Vraag goed lezen.",
    svg: reactieSvg("CH₄ + 2 O₂", "CO₂ + 2 H₂O", true),
    checks: [
      {
        q: "Wat is de juiste formule voor **methaan**?",
        options: ["CH₄", "C₄H", "CH₂", "C₄"],
        answer: 0,
        wrongHints: [
          null,
          "Volgorde fout — element-symbool eerst, dan index.",
          "Te weinig waterstof — CH₂ is iets anders.",
          "Te weinig informatie — methaan heeft H atomen.",
        ],
        uitlegPad: {
          stappen: [{ titel: "CH₄ = 1 C + 4 H", tekst: "Methaan = koolstof omringd door 4 waterstof." }],
          woorden: [{ woord: "CH₄", uitleg: "aardgas, hoofdbestanddeel" }],
          theorie: "Element-symbool eerst, dan index achter.",
          voorbeelden: [{ type: "voorbeeld", tekst: "CH₄ niet HC4 of CH2" }],
          basiskennis: [{ onderwerp: "ruimtelijk", uitleg: "tetrahedron-vorm" }],
          niveaus: { basis: "CH₄.", simpeler: "1 C + 4 H.", nogSimpeler: "1 C + 4 H. → CH₄." },
        },
      },
      {
        q: "Wat betekent **(g)** achter een formule?",
        options: ["Gas", "Goud", "Gewicht", "Gewone temperatuur"],
        answer: 0,
        wrongHints: [
          null,
          "Goud is Au, niet (g).",
          "Geen gewicht — fase.",
          "Niet over temperatuur — fase.",
        ],
        uitlegPad: {
          stappen: [{ titel: "(s)(l)(g)(aq) = fase", tekst: "Letters tussen haakjes geven de fase aan: vast, vloeibaar, gas, opgelost." }],
          woorden: [{ woord: "fase", uitleg: "vorm waarin stof is" }],
          theorie: "(s)olid / (l)iquid / (g)as / (aq)ueous.",
          voorbeelden: [{ type: "voorbeeld", tekst: "H₂O(l) = vloeibaar water, H₂O(g) = waterdamp" }],
          basiskennis: [{ onderwerp: "optioneel", uitleg: "niet altijd verplicht bij examen" }],
          niveaus: { basis: "Fase.", simpeler: "Vast/vloeibaar/gas.", nogSimpeler: "Fase." },
        },
      },
    ],
  },

  // ─── C. Balanceren ───────────────
  {
    title: "Balanceren — stap voor stap",
    explanation: "**Balanceren** = de coëfficiënten zo aanpassen dat aan beide kanten van de pijl evenveel atomen van elke soort staan.\n\n**Strategie (standaard-trucje)**:\n1. **Tel** atomen aan beide kanten.\n2. **Begin met het ingewikkelde element** (meestal niet H of O).\n3. **H en O als laatste** (omdat ze in vele moleculen voorkomen).\n4. **Controleer** door alles opnieuw te tellen.\n\n**Voorbeeld stap-voor-stap**: methaan-verbranding\n\n**Begin**: CH₄ + O₂ → CO₂ + H₂O\n\n**Stap 1: tellen**\n• Links: 1 C, 4 H, 2 O.\n• Rechts: 1 C, 2 H, 3 O.\n• C klopt al. H niet. O ook niet.\n\n**Stap 2: H balanceren**\nLinks 4 H, rechts 2 H. Plaats coëfficiënt 2 voor H₂O:\n→ CH₄ + O₂ → CO₂ + **2** H₂O\n• Links: 1 C, 4 H, 2 O.\n• Rechts: 1 C, 4 H, 4 O.\n• H klopt nu.\n\n**Stap 3: O balanceren**\nLinks 2 O, rechts 4 O. Plaats coëfficiënt 2 voor O₂:\n→ CH₄ + **2** O₂ → CO₂ + 2 H₂O\n• Links: 1 C, 4 H, 4 O.\n• Rechts: 1 C, 4 H, 4 O.\n• Alles klopt! ✓\n\n**Eindresultaat**: **CH₄ + 2 O₂ → CO₂ + 2 H₂O**\n\n**Tweede voorbeeld**: ijzer-verbranding\n\n**Begin**: Fe + O₂ → Fe₂O₃\n\n**Tellen**: links 1 Fe, 2 O. Rechts 2 Fe, 3 O. Beide niet kloppend.\n\n**Trucje voor moeilijke gevallen**: zoek een **kleinste-gemeen-veelvoud (KGV)** van het probleem-element. Hier voor O: links 2, rechts 3 → KGV = 6. Dus 6 O links én rechts:\n→ 3 O₂ aan links (= 6 O), 2 Fe₂O₃ aan rechts (= 6 O). \n\nNu Fe: links 1 Fe, rechts 4 Fe (2 × Fe₂). Plaats 4 voor Fe links:\n→ **4 Fe + 3 O₂ → 2 Fe₂O₃** ✓\n\n**Tip: gebruik geen breuken in eindantwoord**\nAls je tijdens berekenen een breuk krijgt (bv. coëfficiënt 1,5), vermenigvuldig alle coëfficiënten met 2 om hele getallen te krijgen.",
    svg: atoomtellingSvg(
      [{ label: "C", left: 1 }, { label: "H", left: 4 }, { label: "O", left: 4 }],
      [{ right: 1 }, { right: 4 }, { right: 4 }],
      true
    ),
    checks: [
      {
        q: "Welke coëfficiënten balanceren H₂ + O₂ → H₂O?",
        options: [
          "2 H₂ + O₂ → 2 H₂O",
          "H₂ + 2 O₂ → 2 H₂O",
          "2 H₂ + 2 O₂ → H₂O",
          "Geen — het klopt al",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Controleer: links 2 H, 4 O. Rechts 4 H, 2 O. Klopt niet.",
          "Links 4 H, 4 O. Rechts 2 H, 1 O. Klopt niet.",
          "Klopt zeker niet — links 2 H, 2 O; rechts 2 H, 1 O.",
        ],
        uitlegPad: {
          stappen: [{ titel: "2 H₂ + O₂ → 2 H₂O", tekst: "Links: 4 H + 2 O. Rechts: 4 H + 2 O. Kloppend!" }],
          woorden: [{ woord: "balanceren", uitleg: "links = rechts in atomen" }],
          theorie: "Wet van behoud van massa: zelfde atomen links/rechts.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Tel per element: H links = H rechts" }],
          basiskennis: [{ onderwerp: "coëfficiënt toevoegen", uitleg: "vóór molecuul" }],
          niveaus: { basis: "2 H₂ + O₂ → 2 H₂O.", simpeler: "Beide kanten 4 H, 2 O.", nogSimpeler: "Kloppend." },
        },
      },
      {
        q: "Bij balanceren: wat doe je **eerst**?",
        options: [
          "Tellen van atomen aan beide kanten",
          "H en O balanceren",
          "Indices veranderen",
          "Alle coëfficiënten op 1 zetten",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — H en O als laatste.",
          "Indices mag je nóóit veranderen.",
          "Coëfficiënten zijn al 1 als er niets staat.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Stappenplan balanceren", tekst: "1. Tel atomen per element. 2. Pas coëfficiënten aan. 3. Begin met meest complexe molecuul, bewaar O/H voor laatst." }],
          woorden: [{ woord: "balanceer-volgorde", uitleg: "complex eerst, H/O laatst" }],
          theorie: "Indices niet veranderen, alleen coëfficiënten.",
          voorbeelden: [{ type: "voorbeeld", tekst: "CH₄ + O₂ → CO₂ + H₂O: eerst C en H, dan O" }],
          basiskennis: [{ onderwerp: "geen coëfficiënt = 1", uitleg: "default '1' voor molecuul" }],
          niveaus: { basis: "Coëfficiënten aanpassen.", simpeler: "Indices laten.", nogSimpeler: "Vóór, niet achter." },
        },
      },
    ],
  },
  {
    title: "Moeilijkere voorbeelden + complete reactie",
    explanation: "**Voorbeeld 3**: glucose verbranding (cellulaire ademhaling)\n\n**Begin**: C₆H₁₂O₆ + O₂ → CO₂ + H₂O\n\n**Tellen**:\n• Links: 6 C, 12 H, 8 O (6 in glucose + 2 in O₂).\n• Rechts: 1 C, 2 H, 3 O.\n\n**Stap 1: balanceer C**\nLinks 6, rechts 1. Coëfficiënt 6 voor CO₂:\n→ C₆H₁₂O₆ + O₂ → 6 CO₂ + H₂O\n• Rechts: 6 C, 2 H, 13 O.\n\n**Stap 2: balanceer H**\nLinks 12 H, rechts 2 H. Coëfficiënt 6 voor H₂O:\n→ C₆H₁₂O₆ + O₂ → 6 CO₂ + 6 H₂O\n• Rechts: 6 C, 12 H, 18 O.\n\n**Stap 3: balanceer O**\nLinks: 6 O (glucose) + ? O₂. Rechts: 18 O totaal.\n6 + 2x = 18 → x = 6.\nDus 6 O₂:\n→ **C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O** ✓\n\n**Voorbeeld 4**: ammoniak-vorming (Haber-proces, belangrijke industriële reactie voor kunstmest)\n\n**Begin**: N₂ + H₂ → NH₃\n\n**Tellen**: links 2 N, 2 H. Rechts 1 N, 3 H. Niet kloppend.\n\n**Trucje: KGV voor H** is 6 (KGV van 2 en 3).\n→ N₂ + 3 H₂ → 2 NH₃\n• Links: 2 N, 6 H.\n• Rechts: 2 N, 6 H.\n• ✓\n\n**Voorbeeld 5**: ontleding (decompositie) van waterstofperoxide\n\n**Begin**: H₂O₂ → H₂O + O₂\n\n**Tellen**: links 2 H, 2 O. Rechts 2 H, 3 O. H klopt, O niet.\n\n**Trucje**: KGV van 2 en 3 is 6.\n→ 2 H₂O₂ → 2 H₂O + O₂\n• Links: 4 H, 4 O.\n• Rechts: 4 H, 4 O.\n• ✓\n\n**Tips voor lastige reacties**:\n• **Werk met fractie als nodig** en vermenigvuldig daarna alle coëfficiënten met 2.\n• **Controleer altijd opnieuw** — fouten gebeuren snel.\n• **Schrijf de tellen-tabel uit** als je het lastig vindt.",
    svg: reactieSvg("C₆H₁₂O₆ + 6 O₂", "6 CO₂ + 6 H₂O", true),
    checks: [
      {
        q: "Balanceer: N₂ + H₂ → NH₃. Wat zijn de coëfficiënten?",
        options: [
          "1, 3, 2 (N₂ + 3 H₂ → 2 NH₃)",
          "1, 2, 1",
          "2, 6, 4",
          "1, 1, 1",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Tel: links 2 N, 4 H. Rechts 1 N, 3 H. Niet kloppend.",
          "Wel kloppend, maar niet kleinste — deel door 2.",
          "Links 2 N, 2 H. Rechts 1 N, 3 H. Niet kloppend.",
        ],
        uitlegPad: {
          stappen: [{ titel: "N₂ + 3 H₂ → 2 NH₃", tekst: "Zoek KGV van H: 2 (in H₂) en 3 (in NH₃) → 6. Dan: 3 H₂ links, 2 NH₃ rechts." }],
          woorden: [{ woord: "KGV", uitleg: "kleinste gemene veelvoud" }],
          theorie: "Bij balanceren: zoek KGV voor het element dat niet klopt.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Links: 2 N, 6 H. Rechts: 2 N, 6 H. ✓" }],
          basiskennis: [{ onderwerp: "kleinste set", uitleg: "altijd kleinste hele getallen" }],
          niveaus: { basis: "1, 3, 2.", simpeler: "KGV van 2 en 3 is 6.", nogSimpeler: "Haber-proces." },
        },
      },
      {
        q: "Wat betekent het Haber-proces?",
        options: [
          "Industrieel maken van ammoniak voor kunstmest",
          "Een reactie van koolstof",
          "Een methode om water te ontleden",
          "Een soort katalysator",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet over koolstof — over stikstof + waterstof.",
          "Niet water-ontleding.",
          "Niet een katalysator zelf, wel een proces.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Haber-proces", tekst: "N₂ + 3 H₂ → 2 NH₃. Maakt ammoniak (NH₃) voor kunstmest. Bedacht door Fritz Haber rond 1909." }],
          woorden: [{ woord: "ammoniak", uitleg: "NH₃, basis voor kunstmest" }],
          theorie: "Industrieel proces dat stikstof uit lucht omzet in kunstmest.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Zonder Haber-proces: geen wereldwijde voedselproductie zoals nu" }],
          basiskennis: [{ onderwerp: "kunstmest", uitleg: "voedt planten met N" }],
          niveaus: { basis: "Maakt ammoniak voor kunstmest.", simpeler: "N₂ + H₂ → NH₃.", nogSimpeler: "Belangrijk voor voedsel." },
        },
      },
    ],
  },

  // ─── D. Types reacties + energie ───────────────
  {
    title: "Types chemische reacties",
    explanation: "Reacties komen in verschillende soorten — handig om te herkennen welk type je hebt.\n\n**1. Synthese-reactie (samenvoeging)**\nTwee of meer stoffen → één nieuwe stof.\nFormule: **A + B → AB**\nVoorbeeld: 2 H₂ + O₂ → 2 H₂O\n\n**2. Ontledings-reactie (decompositie)**\nEén stof → twee of meer nieuwe stoffen.\nFormule: **AB → A + B**\nVoorbeeld: 2 H₂O₂ → 2 H₂O + O₂ (waterstofperoxide ontleedt)\nVoorbeeld: CaCO₃ → CaO + CO₂ (kalk wordt gebrand)\n\n**3. Verbranding (oxidatie)**\nReageren met zuurstof, vaak met vrijkomen van licht en warmte.\nVoorbeeld: CH₄ + 2 O₂ → CO₂ + 2 H₂O (gasverbranding)\nVoorbeeld: C + O₂ → CO₂ (kool verbranden)\n\n**4. Verdringings-reactie (substitutie)**\nEen element verdringt een ander uit een verbinding.\nFormule: **A + BC → AC + B**\nVoorbeeld: Fe + CuSO₄ → FeSO₄ + Cu (ijzer verdringt koper).\n\n**5. Dubbele verdringing (omzetting)**\nTwee stoffen wisselen partner uit.\nFormule: **AB + CD → AD + CB**\nVoorbeeld: NaCl + AgNO₃ → NaNO₃ + AgCl (zilverchloride slaat neer als witte vlokken).\n\n**6. Zuur-base reactie (neutralisatie)**\nZuur + base → zout + water.\nVoorbeeld: HCl + NaOH → NaCl + H₂O.\n\n**Wat herkent je een type aan?**\n• Aantal reactanten + producten.\n• Of er O₂ bij zit (waarschijnlijk verbranding).\n• Wat er ontstaat (gas, neerslag, water).",
    svg: reactieSvg("Fe + CuSO₄", "FeSO₄ + Cu", true),
    checks: [
      {
        q: "Bij welk type reactie ontleed één stof in meerdere?",
        options: [
          "Ontledings-reactie (decompositie)",
          "Synthese-reactie",
          "Verdringings-reactie",
          "Verbranding",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — synthese is samenvoegen.",
          "Verdringing wisselt partners — geen ontleding.",
          "Verbranding is reageren met O₂.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Ontleding (decompositie)", tekst: "AB → A + B. Eén stof valt uit elkaar in twee of meer stoffen." }],
          woorden: [{ woord: "decompositie", uitleg: "ontleding, uit elkaar vallen" }],
          theorie: "Tegenovergestelde van synthese. Meestal energie nodig.",
          voorbeelden: [{ type: "voorbeeld", tekst: "2 H₂O₂ → 2 H₂O + O₂" }],
          basiskennis: [{ onderwerp: "1 → meer", uitleg: "links 1 reactant, rechts 2+ producten" }],
          niveaus: { basis: "Eén stof → meerdere.", simpeler: "AB → A + B.", nogSimpeler: "Uit elkaar vallen." },
        },
      },
      {
        q: "Wat is een verbrandingsreactie?",
        options: [
          "Reactie met O₂, vaak met warmte/licht",
          "Een ontleding zonder O₂",
          "Stof oplossen",
          "Twee stoffen wisselen partner",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verbranding heeft O₂ nodig.",
          "Oplossen is geen reactie.",
          "Dat is dubbele verdringing.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Verbranding", tekst: "Reactie met zuurstof (O₂), vaak met warmte en licht (vlam)." }],
          woorden: [{ woord: "oxidatie", uitleg: "reageren met O₂" }],
          theorie: "Verbranding = exotherm: warmte komt vrij.",
          voorbeelden: [{ type: "voorbeeld", tekst: "CH₄ + 2 O₂ → CO₂ + 2 H₂O + warmte" }],
          basiskennis: [{ onderwerp: "O₂ nodig", uitleg: "zonder zuurstof geen vuur" }],
          niveaus: { basis: "Reactie met O₂.", simpeler: "Vuur is verbranding.", nogSimpeler: "Brandstof + zuurstof." },
        },
      },
    ],
  },
  {
    title: "Exotherm vs endotherm — energie bij reacties",
    explanation: "Bij reacties komt vaak **energie** vrij of wordt **energie nodig**.\n\n**Exotherme reactie** (exo = naar buiten)\n• **Energie komt vrij** als warmte (en/of licht).\n• Reactanten hebben **meer energie** dan producten.\n• Het verschil komt vrij als warmte.\n• Voorbeelden:\n  - Verbranding (vuur, gasvlam, kachel).\n  - Roesten (langzame oxidatie, weinig warmte).\n  - Lichaam-stofwisseling.\n  - Beton uitharden.\n\n**Endotherme reactie** (endo = naar binnen)\n• **Energie wordt opgenomen** uit de omgeving (vaak: omgeving wordt kouder).\n• Reactanten hebben **minder energie** dan producten.\n• Energie van buiten nodig om reactie te laten gebeuren.\n• Voorbeelden:\n  - Fotosynthese (licht-energie nodig om suikers te maken).\n  - Smelten van ijs (eigenlijk fysisch, maar zelfde principe).\n  - Cold-pack (NH₄NO₃ + water — sportblessure-koeling).\n  - Bakken van brood — warmte van oven nodig.\n\n**Hoe herken je het?**\n• Vat warm bij reactie → exotherm.\n• Vat koud bij reactie → endotherm.\n\n**Energiediagram**:\nReactanten en producten op verschillende hoogtes:\n• **Exotherm**: producten lager → energie 'naar beneden' → komt vrij.\n• **Endotherm**: producten hoger → energie 'naar boven' → opgenomen.\n\n**Activerings-energie**\nElke reactie heeft een **drempel**: een berg die de reactanten over moeten. Daarom moet je een lucifer ontsteken voor een vlam (anders blijft het vat papier-en-zuurstof gewoon liggen). De activeringsenergie is de minimale energie nodig om de reactie te starten.\n\n**Katalysator**\nEen **katalysator** is een stof die de reactie sneller laat gaan zonder zelf opgebruikt te worden. Verlaagt de activerings-energie.\n• In je auto: **katalysator** maakt schone uitlaatgassen.\n• In je lichaam: **enzymen** = biologische katalysatoren.",
    svg: reactieSvg("CH₄ + 2 O₂", "CO₂ + 2 H₂O + warmte", true),
    checks: [
      {
        q: "Wat is een **exotherme** reactie?",
        options: [
          "Energie komt vrij (warmte/licht)",
          "Energie wordt opgenomen",
          "Geen energie verandering",
          "Reactie gaat heel snel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — dat is endotherm.",
          "Wel verandering, energie komt vrij.",
          "Snelheid is iets anders dan energie-verandering.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Exotherm", tekst: "exo = naar buiten. Reactie geeft energie af aan de omgeving (warmte/licht)." }],
          woorden: [{ woord: "exo-", uitleg: "naar buiten" }],
          theorie: "Reactanten hebben meer energie dan producten. Verschil komt vrij als warmte.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Vlam, vuur, roesten, lichaamsstofwisseling" }],
          basiskennis: [{ onderwerp: "vat wordt warm", uitleg: "voelt warm aan" }],
          niveaus: { basis: "Energie komt vrij.", simpeler: "Warm bij reactie.", nogSimpeler: "Exo = uit." },
        },
      },
      {
        q: "Wat doet een **katalysator**?",
        options: [
          "Maakt reactie sneller zonder zelf op te raken",
          "Maakt reactie warmer",
          "Stopt de reactie",
          "Verandert de reactanten",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet vooral over warmte.",
          "Andersom — versnelt.",
          "Katalysator zelf raakt niet veranderd.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Katalysator", tekst: "Versnelt reactie zonder zelf op te raken. Verlaagt activerings-energie." }],
          woorden: [{ woord: "activerings-energie", uitleg: "drempel om reactie te starten" }],
          theorie: "Enzymen = biologische katalysatoren. Auto-katalysator = chemische uitlaat-reiniger.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Speeksel-enzymen splitsen zetmeel in suiker" }],
          basiskennis: [{ onderwerp: "raakt niet op", uitleg: "blijft over na reactie" }],
          niveaus: { basis: "Versnelt zonder op te raken.", simpeler: "Helpt reactie sneller.", nogSimpeler: "Aanjager." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ───────────────
  {
    title: "Eindopdracht — oefen balanceren + types",
    explanation: "Tijd om alles te combineren. Bij elke reactie: balanceer + benoem het type.\n\n**Snelle samenvatting**:\n\n| Type | Patroon | Voorbeeld |\n|---|---|---|\n| Synthese | A + B → AB | 2 H₂ + O₂ → 2 H₂O |\n| Ontleding | AB → A + B | 2 H₂O₂ → 2 H₂O + O₂ |\n| Verbranding | brandstof + O₂ → CO₂ + H₂O | CH₄ + 2 O₂ → CO₂ + 2 H₂O |\n| Verdringing | A + BC → AC + B | Fe + CuSO₄ → FeSO₄ + Cu |\n| Zuur-base | zuur + base → zout + water | HCl + NaOH → NaCl + H₂O |\n\n**Stappen voor balanceren**:\n1. Tel atomen aan beide kanten.\n2. Begin met grootste molecuul (meestal C of metalen).\n3. H en O als laatste.\n4. Bij breuken: vermenigvuldig alles met 2.\n5. Controleer.\n\n**Veel succes!**",
    svg: reactieSvg("4 Fe + 3 O₂", "2 Fe₂O₃", true),
    checks: [
      {
        q: "Balanceer: Mg + O₂ → MgO. Wat zijn de coëfficiënten?",
        options: [
          "2, 1, 2 (2 Mg + O₂ → 2 MgO)",
          "1, 1, 1",
          "1, 2, 2",
          "2, 2, 1",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Links 1 Mg, 2 O. Rechts 1 Mg, 1 O. Niet kloppend.",
          "Links 1 Mg, 4 O. Rechts 2 Mg, 2 O. Niet kloppend.",
          "Links 2 Mg, 4 O. Rechts 1 Mg, 1 O. Niet kloppend.",
        ],
        uitlegPad: {
          stappen: [{ titel: "2 Mg + O₂ → 2 MgO", tekst: "Links: 2 Mg, 2 O. Rechts: 2 Mg, 2 O. Klopt!" }],
          woorden: [{ woord: "magnesium-oxide", uitleg: "MgO, witte vlam bij verbranding" }],
          theorie: "Bij verbranding van magnesium: zeer fel wit licht.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Magnesium-lint brandt fel wit (vroeger flits-fotografie)" }],
          basiskennis: [{ onderwerp: "O₂ is di-atomic", uitleg: "altijd O₂" }],
          niveaus: { basis: "2, 1, 2.", simpeler: "Links 2 O, rechts 2 O.", nogSimpeler: "Mg+O₂ → MgO." },
        },
      },
      {
        q: "Welk type reactie is **2 H₂O₂ → 2 H₂O + O₂**?",
        options: [
          "Ontleding (decompositie)",
          "Synthese",
          "Verdringing",
          "Zuur-base",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — synthese is 1 nieuwe stof maken.",
          "Geen partner-wisseling — 1 stof gaat in tweeën.",
          "Geen zuur of base — alleen H₂O₂.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Ontleding", tekst: "1 stof (H₂O₂) → 2 stoffen (H₂O + O₂). Dat is decompositie." }],
          woorden: [{ woord: "H₂O₂", uitleg: "waterstofperoxide" }],
          theorie: "Patroon: AB → A + B. Eén reactant, meerdere producten.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Waterstofperoxide ontleedt langzaam in fles → daarom donker glas" }],
          basiskennis: [{ onderwerp: "1 reactant", uitleg: "links 1 stof" }],
          niveaus: { basis: "Ontleding.", simpeler: "1 → 2.", nogSimpeler: "Uit elkaar vallen." },
        },
      },
      {
        q: "Een reactie waarbij energie vrijkomt heet:",
        options: [
          "Exotherm",
          "Endotherm",
          "Symmetrisch",
          "Reversibel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — energie wordt opgenomen.",
          "Niet een chemisch begrip.",
          "Reversibel = omkeerbaar, andere term.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Exotherm = energie eruit", tekst: "exo = naar buiten. Reactie geeft warmte/licht af." }],
          woorden: [{ woord: "endotherm", uitleg: "tegenovergestelde: neemt op" }],
          theorie: "Exo (uit) vs endo (in). Onthoud: exo-thermisch = warmte naar buiten.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Vuur, kachel, brandende kaars" }],
          basiskennis: [{ onderwerp: "thermisch", uitleg: "met warmte" }],
          niveaus: { basis: "Exotherm.", simpeler: "Exo = uit.", nogSimpeler: "Warmte vrij." },
        },
      },
      {
        q: "Wat is de juiste vorm voor zuurstof in een reactie?",
        options: ["O₂", "O", "O₃", "Geen — gewoon weglaten"],
        answer: 0,
        wrongHints: [
          null,
          "Niet als enkel atoom — als pair.",
          "O₃ is ozon, speciaal geval.",
          "Wel degelijk in de formule.",
        ],
        uitlegPad: {
          stappen: [{ titel: "O₂ — di-atomic", tekst: "Zuurstof komt in de natuur altijd als O₂ voor (twee atomen aan elkaar). Schrijf nooit alleen 'O'." }],
          woorden: [{ woord: "di-atomic", uitleg: "twee-atomig: molecuul met 2 atomen aaneengeplakt" }],
          theorie: "Sommige gassen komen als paar: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Lucht bevat O₂ (zuurstof) en N₂ (stikstof) — beide pairs" }],
          basiskennis: [{ onderwerp: "gas-elementen", uitleg: "gassen op zichzelf zijn vaak di-atomic" }],
          niveaus: { basis: "O₂.", simpeler: "Altijd als pair.", nogSimpeler: "Twee aan elkaar." },
        },
      },
      {
        q: "Wat is een **chemische reactie**?",
        options: ["Stoffen veranderen in andere stoffen","Stoffen worden warm","Verkleurd","Volume verandert"],
        answer: 0,
        wrongHints: [null,"Klopt — atomen rangschikken anders → nieuwe stof.","Niet primair — soms wel maar niet definitie.","Niet primair — gevolg, geen definitie.","Niet primair — natuurkunde, geen chemie."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is chemische reactie?", tekst: "**Chemische reactie** = proces waarbij **stoffen veranderen in andere stoffen** met nieuwe eigenschappen. Atomen blijven hetzelfde, maar hun rangschikking verandert.\n\nVoorbeelden:\n• IJzer + zuurstof → roest\n• Hout + zuurstof → as + CO₂ + water (verbranding)\n• Magnesium + zuurstof → magnesiumoxide (felle witte flits)\n• Maagzuur + voedsel → vertering" },
            { titel: "Hoe herken je chemische reactie?", tekst: "**Signalen** dat chemische reactie plaatsvond:\n• **Kleurverandering** (zilver → zwart)\n• **Temperatuur** stijgt of daalt\n• **Gas** vrijkomt (bruiseend)\n• **Vaste stof** vormt zich (precipitatie)\n• **Geur** verandert\n• **Licht** geeft (vuur, vuurwerk)\n\nLet op: smelten of verdampen is GEEN chemische reactie (zelfde stof, alleen andere toestand)." },
            { titel: "Cito-feit: Wet van Behoud van Massa", tekst: "**Antoine Lavoisier** (Frans, 1789): de **totale massa** vóór + ná reactie is GELIJK. Atomen verdwijnen niet, alleen rangschikking verandert.\n\nVoorbeeld: 12 g koolstof + 32 g zuurstof = 44 g CO₂. (geen 30 g, geen 50 g — exact 44).\n\nDit principe is basis van alle scheikunde-berekeningen + reactievergelijkingen." },
          ],
          woorden: [
            { woord: "chemische reactie", uitleg: "Proces waarbij stoffen veranderen in andere stoffen." },
            { woord: "reactant", uitleg: "Stof waarmee je start (links van pijl in vergelijking)." },
            { woord: "product", uitleg: "Stof die ontstaat (rechts van pijl)." },
            { woord: "Wet van Behoud van Massa", uitleg: "Totale massa blijft gelijk in chemische reactie." },
          ],
          theorie: "Reactievergelijking-notatie:\n• Reactanten → Producten\n• Bv: 2H₂ + O₂ → 2H₂O\n• Aantal atomen LINKS = RECHTS (kloppend maken)\n• Hoge cijfers = molecule-aantal\n• Lage cijfers = atomen binnen molecule",
          voorbeelden: [
            { type: "feit", tekst: "Verbranden hout: hout + O₂ → CO₂ + H₂O + as. Zelfde aantal atomen, andere stoffen." },
          ],
          basiskennis: [{ onderwerp: "Niet alle reacties zichtbaar", uitleg: "Sommige reacties subtiel (vertering, oxidatie metaal). Belangrijk weten: het GEBEURT, ook al zie je niet veel." }],
          niveaus: { basis: "Stoffen veranderen. = A.", simpeler: "Chemische reactie = stoffen veranderen in andere stoffen met nieuwe eigenschappen. Atomen blijven, rangschikking nieuw. = A.", nogSimpeler: "Nieuwe stof = A." },
        },
      },
      {
        q: "Welke **3 fasen** kan een stof hebben?",
        options: ["Vast, vloeibaar, gas","Klein, middel, groot","Koud, lauw, heet","Kleurloos, helder, donker"],
        answer: 0,
        wrongHints: [null,"Klopt — drie basis-aggregatietoestanden + soms 4e (plasma).","Niet — grootte is geen fase.","Niet — temperatuur is geen fase (wel oorzaak overgang).","Niet — kleur niet relevant voor fase."],
        uitlegPad: {
          stappen: [
            { titel: "3 hoofdfasen", tekst: "Een stof kan in **3 fasen** (toestanden) bestaan:\n• **Vast** (s = solid): atomen vast op plek, vorm + volume vast (ijs, hout, metaal)\n• **Vloeibaar** (l = liquid): atomen kunnen bewegen, vorm aanpassen aan vat, volume vast (water, olie)\n• **Gas** (g): atomen bewegen vrij, vorm + volume vullen vat (lucht, stoom)\n\n4e fase: **plasma** (g) — geïoniseerd gas, in zon + bliksem + neon-lampen." },
            { titel: "Faseovergangen", tekst: "Tussen fasen 6 overgangen:\n• Vast → Vloeibaar = **smelten**\n• Vloeibaar → Vast = **stollen/vriezen**\n• Vloeibaar → Gas = **verdampen/koken**\n• Gas → Vloeibaar = **condenseren**\n• Vast → Gas = **sublimeren** (droog ijs CO₂)\n• Gas → Vast = **rijp/depositie** (waterdamp → ijskristal)" },
            { titel: "Cito-tip: water", tekst: "Water = enige veel-voorkomende stof die natuurlijk in **alle 3 fasen** op aarde voorkomt:\n• **IJs** (gletsjers, ijsklontjes, sneeuw)\n• **Water** (oceaan, regen)\n• **Damp** (wolken, stoom)\n\nDaarom waterkringloop continue: zon verdampt → wolk → regen → terug." },
          ],
          woorden: [
            { woord: "aggregatietoestand", uitleg: "Fase (vast/vloeibaar/gas) van een stof." },
            { woord: "smelten", uitleg: "Vast → vloeibaar (door verwarmen)." },
            { woord: "condenseren", uitleg: "Gas → vloeibaar (door afkoelen)." },
          ],
          theorie: "Atomen-beweging per fase:\n• Vast: trillen op plek (vast rooster)\n• Vloeibaar: schuiven langs elkaar\n• Gas: vrij door ruimte\n\nDaarom volume:\n• Vast = vast\n• Vloeibaar = vast (maar aanpasbare vorm)\n• Gas = vult alles",
          voorbeelden: [
            { type: "stap", tekst: "Verwarmen ijs (vast) → smelt naar water (vloeibaar) → kookt naar stoom (gas). Drie fasen door verwarming." },
          ],
          basiskennis: [{ onderwerp: "Plasma 4e fase", uitleg: "Geavanceerd: plasma = 4e fase, geïoniseerd gas. Cito-Po vraagt meestal alleen 3 hoofdfasen." }],
          niveaus: { basis: "Vast, vloeibaar, gas. = A.", simpeler: "3 fasen: vast (ijs), vloeibaar (water), gas (damp). Overgangen mogelijk door warmte. = A.", nogSimpeler: "3 fasen = A." },
        },
      },
      {
        q: "Wat is een **molecuul**?",
        options: ["Groep atomen samen verbonden","Klein metaal","Een type cel","Atoomkern"],
        answer: 0,
        wrongHints: [null,"Klopt — bv H₂O = 1 zuurstof + 2 waterstof atomen.","Niet — molecuul kan elk type atoom bevatten.","Niet — cellen zijn biologisch, moleculen scheikundig.","Niet — kern = onderdeel atoom, niet molecuul."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een molecuul?", tekst: "Een **molecuul** is een **groep atomen** die **chemisch verbonden** zijn (via electronen). Vormen kleinste eenheid van een chemische verbinding.\n\nVoorbeelden moleculen:\n• **H₂O** = water (2 H + 1 O)\n• **CO₂** = koolstofdioxide (1 C + 2 O)\n• **O₂** = zuurstof-gas (2 O)\n• **CH₄** = methaan (1 C + 4 H)\n• **NaCl** = keukenzout (1 Na + 1 Cl)" },
            { titel: "Atoom vs molecuul vs stof", tekst: "**Hiërarchie**:\n• **Atoom** = kleinste deel element (H, O, Fe, Au)\n• **Molecuul** = 2+ atomen verbonden (H₂, H₂O, glucose)\n• **Stof** = veel moleculen samen (1 glas water = ~10²⁴ H₂O-moleculen)\n\nVergelijking: atoom = letter. Molecuul = woord. Stof = boek." },
            { titel: "Cito-feit: zichtbaar?", tekst: "Moleculen zijn **onzichtbaar** voor blote oog (en zelfs gewone microscoop). Pas zichtbaar met **elektronenmicroscoop** of **STM** (scanning tunneling microscope, 1981 Nobelprijs).\n\nGrote moleculen zoals DNA = 'lang' (2 m als uitgerold!) maar dun (~2 nanometer). Zichtbaar via speciale technieken." },
          ],
          woorden: [
            { woord: "molecuul", uitleg: "Groep atomen chemisch verbonden. Kleinste eenheid verbinding." },
            { woord: "molecuulformule", uitleg: "Aanduiding hoeveel atomen per molecuul. H₂O = 2 H + 1 O." },
            { woord: "verbinding", uitleg: "Chemische combinatie van 2+ elementen via moleculen of ionen." },
          ],
          theorie: "Soorten verbindingen:\n• **Molecuul-verbinding**: atomen delen elektronen (water, suiker)\n• **Ion-verbinding**: atomen geven/nemen elektronen (zout NaCl)\n• **Metaal-binding**: vrije elektronen tussen atomen (ijzer, koper)",
          voorbeelden: [
            { type: "stap", tekst: "Water-molecuul H₂O: één centraal zuurstof-atoom met 2 waterstof-atomen 'armen'. ~104° hoek." },
          ],
          basiskennis: [{ onderwerp: "Cito-VMBO basis", uitleg: "Onderscheid atoom/molecuul/verbinding moeten kunnen maken." }],
          niveaus: { basis: "Atomen verbonden. = A.", simpeler: "Molecuul = groep atomen chemisch aaneengeplakt. Bv water H₂O = 2 waterstof + 1 zuurstof. = A.", nogSimpeler: "Atomen-groep = A." },
        },
      },
      {
        q: "Wat is een **pH-waarde**?",
        options: ["Mate van zuur/base (schaal 0-14)","Temperatuur","Gewicht","Druk"],
        answer: 0,
        wrongHints: [null,"Klopt — pH 0 = sterk zuur, pH 7 = neutraal, pH 14 = sterk base.","Niet — temperatuur is Celsius.","Niet — gewicht is gram/kg.","Niet — druk is Pascal/bar."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is pH?", tekst: "**pH** = maat voor **zuur of base** van een oplossing. Schaal:\n• **0-6** = zuur (lager = zuurder)\n• **7** = neutraal (zuiver water)\n• **8-14** = base (hoger = basischer)\n\nLogaritmisch: elke stap = 10× verschil. pH 5 is 10× zuurder dan pH 6." },
            { titel: "Voorbeelden", tekst: "**Zure stoffen** (pH <7):\n• Maagzuur: pH 1-2\n• Citroensap: pH 2\n• Cola: pH 2-3\n• Tomaten: pH 4\n• Koffie: pH 5\n\n**Neutraal**: pH 7 (zuiver water)\n\n**Basische stoffen** (pH >7):\n• Bloed mens: pH 7,4\n• Zeewater: pH 8\n• Bakpoeder oplossing: pH 9\n• Bleekwater: pH 12-13\n• Gootsteenontstopper: pH 14" },
            { titel: "Cito-feit: lakmoespapier + pH-meter", tekst: "**Meten van pH**:\n• **Lakmoespapier**: rood = zuur, blauw = base. Snel + simpel\n• **Universeel indicator**: kleurverloop alle pH-waarden (rood→geel→groen→blauw→paars)\n• **Digitale pH-meter**: precies (decimalen)\n\nBekend in: zwembad-onderhoud, aquarium-water, tuinaarde-test, voedingsindustrie." },
          ],
          woorden: [
            { woord: "pH", uitleg: "Maat voor zuur/base. Schaal 0-14. 7 = neutraal." },
            { woord: "zuur", uitleg: "Stof die H⁺-ionen afgeeft. pH <7." },
            { woord: "base", uitleg: "Stof die OH⁻-ionen afgeeft. pH >7." },
            { woord: "lakmoes", uitleg: "Indicator-papier dat verkleurt bij zuur/base." },
          ],
          theorie: "Belangrijke pH-feiten:\n• Bloed mens MOET tussen pH 7,35-7,45 zijn — anders ziek\n• Mond pH ~6,5 (lichte zuur)\n• Maagzuur pH 1-2 = zo zuur dat het bacteriën doodt\n• Regen normaal pH 5,6 (CO₂ in lucht). Zure regen pH <5",
          voorbeelden: [
            { type: "feit", tekst: "Bij brandend maagzuur: maagzuur lekt naar slokdarm. Anti-zuur-pillen (Rennies) = base = neutraliseert zuur tot pH ~7." },
          ],
          basiskennis: [{ onderwerp: "Cito-VMBO scheikunde", uitleg: "pH-vragen vaak in examen-stof. Onthoud schaal + 7 = neutraal." }],
          niveaus: { basis: "Zuur/base maat 0-14. = A.", simpeler: "pH = maat voor zuur of base. 0 = sterk zuur (maagzuur), 7 = neutraal (water), 14 = sterk base (gootsteenontstopper). = A.", nogSimpeler: "Zuur/base = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const chemischeReactiesScheikunde = {
  id: "chemische-reacties-scheikunde",
  title: "Chemische reacties balanceren",
  emoji: "⚗️",
  level: "klas3",
  subject: "scheikunde",
  referentieNiveau: "onderbouw",
  sloThema: "Scheikunde — chemische reacties",
  prerequisites: [
    { id: "atoombouw-scheikunde", title: "Atoombouw", niveau: "vmbo-2F/3F" },
    { id: "stoffen-mengsels-scheikunde", title: "Stoffen + mengsels", niveau: "vmbo-2F" },
  ],
  intro:
    "Hoe je reactievergelijkingen schrijft en kloppend maakt: van molecuulformules en de Wet van Behoud van Massa, via balanceren stap-voor-stap, tot de zes hoofdtypen reacties (synthese, ontleding, verbranding, verdringing, dubbele verdringing, zuur-base) en het verschil tussen exotherm en endotherm. CSE-stof scheikunde.",
  triggerKeywords: [
    "chemische reactie", "reactievergelijking", "balanceren",
    "kloppend maken", "atoomtelling",
    "wet behoud massa", "lavoisier",
    "molecuulformule", "indices", "coefficient", "coëfficiënt",
    "reactanten", "uitgangsstoffen",
    "producten", "eindstoffen",
    "synthese", "ontleding", "decompositie",
    "verbranding", "oxidatie",
    "verdringing", "substitutie",
    "zuur base", "neutralisatie",
    "exotherm", "endotherm", "energie reactie",
    "katalysator", "enzym", "activeringsenergie",
    "haber proces", "ammoniak",
    "h2so4", "ch4", "co2", "h2o", "fe2o3",
  ],
  chapters,
  steps,
};

export default chemischeReactiesScheikunde;
