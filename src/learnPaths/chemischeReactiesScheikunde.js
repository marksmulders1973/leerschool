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
