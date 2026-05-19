// Leerpad: Atoombouw en periodiek systeem — Scheikunde onderbouw VO
// 10 stappen in 4 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  proton: "#e53935", neutron: "#9e9e9e", electron: "#42a5f5",
  good: "#00c853", metal: "#ff9800", nonmetal: "#7e57c2", gas: "#26a69a",
};

const stepEmojis = ["⚛️", "🔴", "🔵", "💫", "🔢", "📊", "🪙", "💧", "🧪", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een atoom?", emoji: "⚛️", from: 0, to: 3 },
  { letter: "B", title: "Periodiek systeem", emoji: "📊", from: 4, to: 6 },
  { letter: "C", title: "Moleculen & verbindingen", emoji: "🧪", from: 7, to: 8 },
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 9, to: 9 },
];

const steps = [
  {
    title: "Wat is een atoom?",
    explanation: "Alles om je heen — water, lucht, je lichaam, je telefoon — bestaat uit **atomen**. Een atoom is de **kleinste bouwsteen** van een stof, zo klein dat je hem niet kunt zien (~0,0000001 mm).\n\nEen atoom heeft twee delen:\n• De **kern** in het midden — heel klein, maar bevat bijna alle massa.\n• Een **wolk van elektronen** die om de kern beweegt.\n\nIn de kern zitten:\n• **Protonen** — positief geladen (+).\n• **Neutronen** — geen lading (neutraal).\n\nDe **elektronen** om de kern zijn negatief geladen (−).\n\n**Goed nieuws**: een atoom is **neutraal** als er evenveel protonen als elektronen zijn — de + en − heffen elkaar dan op.\n\n**Geheugentruc**: \nProton = Positief\nNeutron = Neutraal\nElektron = − (negatief)",
    svg: `<svg viewBox="0 0 300 200">
<circle cx="150" cy="100" r="80" fill="none" stroke="${COLORS.electron}" stroke-width="0.5" stroke-dasharray="3"/>
<circle cx="150" cy="100" r="50" fill="none" stroke="${COLORS.electron}" stroke-width="0.5" stroke-dasharray="3"/>
<circle cx="150" cy="100" r="14" fill="${COLORS.warm}" opacity="0.7"/>
<text x="150" y="105" text-anchor="middle" fill="#1a1a1a" font-size="11" font-family="Arial" font-weight="bold">kern</text>
<circle cx="150" cy="20" r="6" fill="${COLORS.electron}"/>
<circle cx="230" cy="100" r="6" fill="${COLORS.electron}"/>
<circle cx="150" cy="180" r="6" fill="${COLORS.electron}"/>
<circle cx="70" cy="100" r="6" fill="${COLORS.electron}"/>
<text x="240" y="100" fill="${COLORS.electron}" font-size="10" font-family="Arial">e⁻</text>
<text x="240" y="130" fill="${COLORS.muted}" font-size="9" font-family="Arial">elektronen</text>
</svg>`,
    checks: [
      {
        q: "Welk deeltje is **positief** geladen?",
        options: ["Proton", "Elektron", "Neutron", "Atoom"],
        answer: 0,
        wrongHints: [null, "Elektron is negatief.", "Neutron heeft geen lading.", "Een atoom als geheel is meestal neutraal."],
        uitlegPad: {
          stappen: [{ titel: "Proton = +", tekst: "Proton zit in kern en is positief geladen." }],
          woorden: [{ woord: "proton", uitleg: "P van Positief" }],
          theorie: "P+ / N(neutraal) / e- (negatief).",
          voorbeelden: [{ type: "voorbeeld", tekst: "kern = protonen + neutronen, e- buiten" }],
          basiskennis: [{ onderwerp: "geheugentruc", uitleg: "P=Positief, N=Neutraal, e=negatief" }],
          niveaus: { basis: "Proton.", simpeler: "P = +.", nogSimpeler: "Proton." },
        },
      },
      {
        q: "Waar zit de kern van een atoom?",
        options: ["In het midden", "Aan de buitenkant", "Verspreid door het atoom", "Boven op het atoom"],
        answer: 0,
        wrongHints: [null, "Aan de buitenkant zitten de elektronen.", "De kern zit op één plek.", "Het atoom heeft geen 'boven' of 'onder' — het is rond."],
        uitlegPad: {
          stappen: [{ titel: "Kern = in het midden", tekst: "Protonen + neutronen zitten samen in de kern, midden in het atoom." }],
          woorden: [{ woord: "kern", uitleg: "midden van atoom, klein maar zwaar" }],
          theorie: "Kern in midden, elektronen-wolk eromheen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "kern << atoom (1/100000)" }],
          basiskennis: [{ onderwerp: "bijna leeg", uitleg: "meeste atoom is lege ruimte" }],
          niveaus: { basis: "In het midden.", simpeler: "Midden van atoom.", nogSimpeler: "Midden." },
        },
      },
    ],
  },
  {
    title: "Protonen — wie ben je?",
    explanation: "Het **aantal protonen** in de kern bepaalt om welk **element** het gaat. Dit is het **atoomnummer** (Z).\n\n**Voorbeelden**:\n• 1 proton = **waterstof (H)**\n• 6 protonen = **koolstof (C)**\n• 8 protonen = **zuurstof (O)**\n• 11 protonen = **natrium (Na)**\n• 26 protonen = **ijzer (Fe)**\n• 79 protonen = **goud (Au)**\n\nVerander je het aantal protonen, dan verandert het element. Dit gebeurt bijna nooit — alleen bij kernreacties (zoals in de zon of een kernreactor).\n\n**In het periodiek systeem** staan de elementen geordend op atoomnummer: H heeft #1, He #2, Li #3, enzovoort.\n\n**Symbolen**: elk element heeft een afkorting van 1 of 2 letters. Soms uit het Latijn (Au = aurum = goud, Fe = ferrum = ijzer).",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="80" height="100" rx="8" fill="${COLORS.paper}" stroke="${COLORS.text}" stroke-width="1"/>
<text x="60" y="55" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">1</text>
<text x="60" y="90" text-anchor="middle" fill="#fff" font-size="20" font-family="Arial" font-weight="bold">H</text>
<text x="60" y="115" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">waterstof</text>
<rect x="110" y="30" width="80" height="100" rx="8" fill="${COLORS.paper}" stroke="${COLORS.text}" stroke-width="1"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">8</text>
<text x="150" y="90" text-anchor="middle" fill="#fff" font-size="20" font-family="Arial" font-weight="bold">O</text>
<text x="150" y="115" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">zuurstof</text>
<rect x="200" y="30" width="80" height="100" rx="8" fill="${COLORS.paper}" stroke="${COLORS.text}" stroke-width="1"/>
<text x="240" y="55" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">79</text>
<text x="240" y="90" text-anchor="middle" fill="#fff" font-size="20" font-family="Arial" font-weight="bold">Au</text>
<text x="240" y="115" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">goud</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">aantal protonen = atoomnummer</text>
</svg>`,
    checks: [
      {
        q: "Een atoom heeft 6 protonen. Welk element is het?",
        options: ["Koolstof (C)", "Zuurstof (O)", "Waterstof (H)", "IJzer (Fe)"],
        answer: 0,
        wrongHints: [null, "Reken na: atoomnummer Z = aantal protonen.", "Reken na: atoomnummer Z = aantal protonen.", "Reken na: atoomnummer Z = aantal protonen."],
        uitlegPad: {
          stappen: [{ titel: "6 protonen = koolstof", tekst: "Aantal protonen = atoomnummer = welk element. 6 = C." }],
          woorden: [{ woord: "atoomnummer Z", uitleg: "= aantal protonen" }],
          theorie: "Elk element heeft unieke aantal protonen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "H=1, O=8, Na=11, C=6, Fe=26" }],
          basiskennis: [{ onderwerp: "in periodiek systeem", uitleg: "elementen op Z geordend" }],
          niveaus: { basis: "Koolstof.", simpeler: "6 = C.", nogSimpeler: "6 = C. → C." },
        },
      },
      {
        q: "Wat heet het aantal protonen in een atoom?",
        options: ["Atoomnummer", "Massagetal", "Lading", "Elektronenaantal"],
        answer: 0,
        wrongHints: [null, "Massagetal = protonen + neutronen.", "Lading = + of − van het hele atoom.", "Aantal elektronen is wel hetzelfde, maar dat is een ander begrip."],
        uitlegPad: {
          stappen: [{ titel: "Atoomnummer Z", tekst: "Aantal protonen = atoomnummer Z." }],
          woorden: [{ woord: "atoomnummer", uitleg: "uniek per element" }],
          theorie: "Z = protonen. A = protonen + neutronen (massagetal).",
          voorbeelden: [{ type: "voorbeeld", tekst: "Z=6 voor koolstof" }],
          basiskennis: [{ onderwerp: "ordening", uitleg: "Z bepaalt plek in tabel" }],
          niveaus: { basis: "Atoomnummer.", simpeler: "Aantal protonen.", nogSimpeler: "Aantal protonen. → Z." },
        },
      },
    ],
  },
  {
    title: "Massagetal & isotopen",
    explanation: "**Massagetal (A)** = aantal **protonen + neutronen** in de kern. Dit is bijna alle massa van het atoom (elektronen zijn 1800× lichter).\n\n• Atoomnummer (Z) = aantal protonen.\n• Massagetal (A) = protonen + neutronen.\n• Aantal neutronen = A − Z.\n\n**Voorbeeld**: koolstof-12 (¹²C):\n• Z = 6 (protonen, want koolstof)\n• A = 12\n• Neutronen = 12 − 6 = 6.\n\n**Isotopen**: atomen van hetzelfde element met **verschillend aantal neutronen**.\n• ¹²C (gewone koolstof, 6n) — meeste in de natuur.\n• ¹⁴C (radioactief, 8n) — wordt gebruikt voor C14-datering van fossielen.\n\nIsotopen hebben hetzelfde aantal protonen → zelfde element → bijna gelijk gedrag, alleen iets ander gewicht.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">¹²C en ¹⁴C — beide koolstof</text>
<circle cx="80" cy="100" r="35" fill="${COLORS.paper}" stroke="${COLORS.text}" stroke-width="1"/>
<g>
${[0, 1, 2, 3, 4, 5].map(i => {
  const angle = (i * 60) * Math.PI / 180;
  const x = 80 + 12 * Math.cos(angle);
  const y = 100 + 12 * Math.sin(angle);
  return `<circle cx="${x}" cy="${y}" r="5" fill="${i % 2 === 0 ? COLORS.proton : COLORS.neutron}"/>`;
}).join("")}
</g>
<text x="80" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">¹²C: 6p + 6n</text>
<circle cx="220" cy="100" r="35" fill="${COLORS.paper}" stroke="${COLORS.text}" stroke-width="1"/>
<g>
${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].slice(0, 14).map((_, i) => {
  const angle = (i * 360 / 14) * Math.PI / 180;
  const x = 220 + 16 * Math.cos(angle);
  const y = 100 + 16 * Math.sin(angle);
  const isP = i < 6;
  return `<circle cx="${x}" cy="${y}" r="4" fill="${isP ? COLORS.proton : COLORS.neutron}"/>`;
}).join("")}
</g>
<text x="220" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">¹⁴C: 6p + 8n</text>
</svg>`,
    checks: [
      {
        q: "Een atoom heeft Z = 8 en A = 16. Hoeveel neutronen?",
        options: ["8", "16", "24", "0"],
        answer: 0,
        wrongHints: [null, "Dat is het massagetal A, je moet er Z van aftrekken.", "Optellen i.p.v. aftrekken.", "Niet 0 — A = p + n, dus n = A − Z = 16−8."],
        uitlegPad: {
          stappen: [{ titel: "n = A − Z", tekst: "16 − 8 = 8 neutronen." }],
          woorden: [{ woord: "massagetal A", uitleg: "= p + n" }],
          theorie: "n = A − Z (aftrekken om neutronen te krijgen).",
          voorbeelden: [{ type: "voorbeeld", tekst: "¹²C: A=12, Z=6, n=6" }],
          basiskennis: [{ onderwerp: "Z=8 → zuurstof", uitleg: "8 protonen = O" }],
          niveaus: { basis: "8 neutronen.", simpeler: "16 - 8 = 8.", nogSimpeler: "16 - 8 = 8. → 8." },
        },
      },
      {
        q: "Wat zijn isotopen?",
        options: [
          "Atomen van hetzelfde element met verschillend aantal neutronen",
          "Twee verschillende elementen",
          "Atomen zonder elektronen",
          "Nieuwe stoffen",
        ],
        answer: 0,
        wrongHints: [null, "Twee verschillende elementen = verschillend aantal protonen.", "Atomen zonder elektronen heten ionen (en dat geldt niet altijd voor isotopen).", "Geen nieuwe stof — zelfde element."],
        uitlegPad: {
          stappen: [{ titel: "Zelfde Z, andere A", tekst: "Isotopen: hetzelfde element, ander aantal neutronen." }],
          woorden: [{ woord: "isotoop", uitleg: "= variant van element" }],
          theorie: "Zelfde aantal protonen = zelfde element, verschil zit in neutronen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "¹²C (6p+6n) vs ¹⁴C (6p+8n, radioactief)" }],
          basiskennis: [{ onderwerp: "gebruik", uitleg: "¹⁴C-datering van fossielen" }],
          niveaus: { basis: "Andere neutronen.", simpeler: "Zelfde Z, andere A.", nogSimpeler: "Isotopen." },
        },
      },
    ],
  },
  {
    title: "Elektronen in schillen",
    explanation: "Elektronen bewegen rond de kern in **schillen** (energieniveaus). Elke schil kan maximaal een bepaald aantal elektronen kwijt:\n\n• Schil 1 (K-schil): max **2** elektronen.\n• Schil 2 (L-schil): max **8** elektronen.\n• Schil 3 (M-schil): max **8** elektronen (in basis schoolwerk; eigenlijk 18, maar dat komt later).\n• Schil 4 (N-schil): max 8 (basis).\n\n**Vullen van schillen**: van binnen naar buiten — eerst K vol, dan L, dan M.\n\n**Voorbeelden**:\n• Waterstof (1 elektron): 1 in K — schil 1 niet vol.\n• Helium (2 e⁻): 2 in K — vol! Daarom is helium stabiel.\n• Koolstof (6 e⁻): 2 in K, 4 in L.\n• Natrium (11 e⁻): 2-8-1.\n\n**Belangrijk**: een atoom is **chemisch stabiel** als de **buitenste schil vol** is (8 elektronen, behalve K met 2). Edelgassen (helium, neon, argon) hebben dat — daarom reageren ze bijna nooit.",
    svg: `<svg viewBox="0 0 300 200">
<circle cx="150" cy="100" r="14" fill="${COLORS.warm}" opacity="0.7"/>
<text x="150" y="105" text-anchor="middle" fill="#1a1a1a" font-size="9" font-family="Arial" font-weight="bold">Na</text>
<circle cx="150" cy="100" r="35" fill="none" stroke="${COLORS.electron}" stroke-width="1"/>
<circle cx="150" cy="100" r="60" fill="none" stroke="${COLORS.electron}" stroke-width="1"/>
<circle cx="150" cy="100" r="85" fill="none" stroke="${COLORS.electron}" stroke-width="1"/>
${[0, 1].map(i => `<circle cx="${150 + 35 * Math.cos(i * Math.PI)}" cy="${100 + 35 * Math.sin(i * Math.PI)}" r="4" fill="${COLORS.electron}"/>`).join("")}
${[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
  const a = i * 45 * Math.PI / 180;
  return `<circle cx="${150 + 60 * Math.cos(a)}" cy="${100 + 60 * Math.sin(a)}" r="4" fill="${COLORS.electron}"/>`;
}).join("")}
<circle cx="${150 + 85}" cy="100" r="4" fill="${COLORS.alt}"/>
<text x="40" y="160" fill="${COLORS.text}" font-size="10" font-family="Arial">Natrium: 2-8-1</text>
<text x="40" y="178" fill="${COLORS.muted}" font-size="9" font-family="Arial">3 schillen, 1 alleen op buitenste</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel elektronen passen er maximaal op de eerste schil (K)?",
        options: ["2", "8", "10", "18"],
        answer: 0,
        wrongHints: [null, "Dat is de tweede schil (L).", "Geen schil heeft 10 als maximum.", "Dat is wel een mogelijke waarde voor de derde schil, maar bij basis schoolwerk werken we met 8."],
        uitlegPad: {
          stappen: [{ titel: "K = max 2", tekst: "Eerste schil (K) kan max 2 elektronen bevatten." }],
          woorden: [{ woord: "K-schil", uitleg: "binnenste schil" }],
          theorie: "K=2, L=8, M=8 (basis), N=8.",
          voorbeelden: [{ type: "voorbeeld", tekst: "He: 2 e- (K vol = stabiel)" }],
          basiskennis: [{ onderwerp: "vullen", uitleg: "van binnen naar buiten" }],
          niveaus: { basis: "2.", simpeler: "K = 2.", nogSimpeler: "K = 2. → 2." },
        },
      },
      {
        q: "Waarom is helium stabiel?",
        options: [
          "Schil 1 (K) is vol met 2 elektronen",
          "Het heeft geen elektronen",
          "Het heeft veel protonen",
          "Helium is een metaal",
        ],
        answer: 0,
        wrongHints: [null, "Helium heeft 2 elektronen, niet 0.", "Heeft maar 2 protonen.", "Helium is een edelgas, geen metaal."],
        uitlegPad: {
          stappen: [{ titel: "Buitenste schil vol = stabiel", tekst: "Helium heeft 2 e- en K-schil is vol → reageert niet." }],
          woorden: [{ woord: "edelgas", uitleg: "stabiel, niet-reactief" }],
          theorie: "Volle buitenste schil = chemisch stabiel.",
          voorbeelden: [{ type: "voorbeeld", tekst: "He, Ne, Ar, Kr = edelgassen" }],
          basiskennis: [{ onderwerp: "groep 18", uitleg: "alle edelgassen in 1 kolom" }],
          niveaus: { basis: "K-schil vol.", simpeler: "Buitenste schil vol.", nogSimpeler: "Stabiel." },
        },
      },
    ],
  },

  // B
  {
    title: "Periodiek systeem — overzicht",
    explanation: "Het **periodiek systeem** is een tabel met alle ~118 elementen, geordend op **atoomnummer**.\n\n**Indeling**:\n• **Periodes** (rijen): 7 rijen. Een periode = aantal schillen dat het atoom heeft.\n• **Groepen** (kolommen): 18 kolommen. Elementen in dezelfde groep hebben hetzelfde aantal **buitenste elektronen** → vergelijkbare eigenschappen.\n\n**Belangrijke groepen**:\n• Groep 1: **alkalimetalen** (Li, Na, K) — heel reactief, 1 buitenste elektron.\n• Groep 2: **aardalkalimetalen** (Be, Mg, Ca) — 2 buitenste e⁻.\n• Groep 17: **halogenen** (F, Cl, Br, I) — heel reactief, 7 buitenste e⁻.\n• Groep 18: **edelgassen** (He, Ne, Ar, Kr) — buitenste schil vol → niet reactief.\n\n**Drie hoofdgroepen**:\n• **Metalen** (links + midden): glanzend, geleidend (Fe, Cu, Au).\n• **Niet-metalen** (rechts): vaak gas of zacht (O, N, C, S).\n• **Halfmetalen** (trapje rond Si, Ge): tussenvorm.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="20" width="40" height="40" rx="4" fill="${COLORS.metal}" opacity="0.55"/>
<text x="40" y="42" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">H</text>
<text x="40" y="55" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">1</text>
<rect x="240" y="20" width="40" height="40" rx="4" fill="${COLORS.gas}" opacity="0.55"/>
<text x="260" y="42" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">He</text>
<text x="260" y="55" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">2</text>
${[0, 1, 2, 3, 4, 5, 6].map(i => `<rect x="${20 + i * 30}" y="80" width="28" height="28" rx="3" fill="${i < 2 ? COLORS.metal : COLORS.nonmetal}" opacity="0.5"/>`).join("")}
<rect x="${20 + 7 * 30}" y="80" width="28" height="28" rx="3" fill="${COLORS.gas}" opacity="0.55"/>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.metal}" font-size="11" font-family="Arial" font-weight="bold">metalen | niet-metalen | edelgassen</text>
</svg>`,
    checks: [
      {
        q: "Wat hebben elementen in dezelfde **groep** gemeen?",
        options: [
          "Aantal buitenste elektronen",
          "Aantal protonen",
          "Massa",
          "Aantal schillen",
        ],
        answer: 0,
        wrongHints: [null, "Elementen hebben juist verschillende aantal protonen.", "Massa verschilt zeker.", "Aantal schillen = periode (rij), niet groep."],
        uitlegPad: {
          stappen: [{ titel: "Groep = kolom = buitenste e-", tekst: "Elementen in dezelfde groep hebben hetzelfde aantal buitenste elektronen → vergelijkbaar gedrag." }],
          woorden: [{ woord: "groep", uitleg: "kolom in periodiek systeem" }],
          theorie: "18 groepen. Groep 1 = 1 buitenste e-, etc.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Li, Na, K in groep 1: alkalimetalen" }],
          basiskennis: [{ onderwerp: "vs periode", uitleg: "rij = aantal schillen" }],
          niveaus: { basis: "Buitenste elektronen.", simpeler: "Zelfde buitenste laag.", nogSimpeler: "Buitenste e-." },
        },
      },
      {
        q: "Welke groep zijn de **edelgassen**?",
        options: ["Groep 18", "Groep 1", "Groep 7", "Groep 17"],
        answer: 0,
        wrongHints: [null, "Groep 1 = alkalimetalen.", "In oude indeling stonden edelgassen wel in 'groep VIII A', maar nu groep 18.", "Groep 17 = halogenen."],
        uitlegPad: {
          stappen: [{ titel: "Edelgassen = groep 18", tekst: "Laatste kolom rechts: He, Ne, Ar, Kr, Xe, Rn." }],
          woorden: [{ woord: "groep 18", uitleg: "edelgassen, niet-reactief" }],
          theorie: "Buitenste schil vol → reageren nauwelijks.",
          voorbeelden: [{ type: "voorbeeld", tekst: "He = 2 e- (vol K), Ne = 10 e- (vol L)" }],
          basiskennis: [{ onderwerp: "nut", uitleg: "ballonnen (He), lampen (Ar/Ne)" }],
          niveaus: { basis: "Groep 18.", simpeler: "Laatste kolom.", nogSimpeler: "Laatste kolom. → 18." },
        },
      },
    ],
  },
  {
    title: "Metalen vs niet-metalen",
    explanation: "Het verschil is groot, en bepaalt veel van hoe een element gedraagt.\n\n**METALEN** (links + midden tabel)\n• Glanzend en stevig.\n• Geleiden warmte en elektriciteit.\n• Vaak vast bij kamertemperatuur (uitzondering: kwik = vloeibaar).\n• Geven gemakkelijk elektronen af → vormen positieve ionen.\n• Voorbeelden: ijzer (Fe), koper (Cu), goud (Au), aluminium (Al), natrium (Na).\n\n**NIET-METALEN** (rechts in tabel, rond zuurstof)\n• Vaak gas of zacht.\n• Geleiden geen elektriciteit (uitzondering: koolstof in grafiet).\n• Geven of nemen elektronen op → kunnen ook negatief geladen worden.\n• Voorbeelden: zuurstof (O), stikstof (N), koolstof (C), zwavel (S), chloor (Cl).\n\n**HALFMETALEN** zijn het tussending — silicium (Si) wordt in zonnepanelen + chips gebruikt.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="120" height="100" rx="10" fill="${COLORS.metal}" opacity="0.20" stroke="${COLORS.metal}" stroke-width="2"/>
<text x="80" y="65" text-anchor="middle" fill="${COLORS.metal}" font-size="13" font-family="Arial" font-weight="bold">METALEN</text>
<text x="80" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">glanzend</text>
<text x="80" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">geleidt stroom</text>
<text x="80" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Fe, Cu, Au</text>
<rect x="160" y="40" width="120" height="100" rx="10" fill="${COLORS.nonmetal}" opacity="0.20" stroke="${COLORS.nonmetal}" stroke-width="2"/>
<text x="220" y="65" text-anchor="middle" fill="${COLORS.nonmetal}" font-size="13" font-family="Arial" font-weight="bold">NIET-METAAL</text>
<text x="220" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vaak gas/zacht</text>
<text x="220" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">geen stroom</text>
<text x="220" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">O, N, C, Cl</text>
</svg>`,
    checks: [
      {
        q: "Welk kenmerk heeft een metaal?",
        options: [
          "Geleidt elektriciteit",
          "Is altijd gasvormig",
          "Is altijd vloeibaar",
          "Geleidt geen warmte",
        ],
        answer: 0,
        wrongHints: [null, "Metalen zijn meestal vast.", "Alleen kwik is vloeibaar.", "Metalen geleiden juist goed warmte."],
        uitlegPad: {
          stappen: [{ titel: "Metaal = geleider", tekst: "Metalen geleiden elektriciteit en warmte goed (vrije elektronen)." }],
          woorden: [{ woord: "metaal", uitleg: "glanzend, geleidend, vast (meestal)" }],
          theorie: "Metalen geven elektronen makkelijk af → goede geleider.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Fe, Cu, Au, Al, Ag" }],
          basiskennis: [{ onderwerp: "kwik", uitleg: "uitzondering: vloeibaar bij kamertemp" }],
          niveaus: { basis: "Geleidt stroom.", simpeler: "Stroom door metaal.", nogSimpeler: "Geleider." },
        },
      },
      {
        q: "Welk element is een **niet-metaal**?",
        options: ["Zuurstof (O)", "IJzer (Fe)", "Koper (Cu)", "Goud (Au)"],
        answer: 0,
        wrongHints: [null, "Denk: wat geleidt stroom (metaal) vs wat niet (gas/niet-metaal)?", "Denk: wat geleidt stroom (metaal) vs wat niet (gas/niet-metaal)?", "Denk: wat geleidt stroom (metaal) vs wat niet (gas/niet-metaal)?"],
        uitlegPad: {
          stappen: [{ titel: "O = niet-metaal", tekst: "Zuurstof is gas, geen metaal." }],
          woorden: [{ woord: "niet-metaal", uitleg: "rechts in tabel, vaak gas" }],
          theorie: "Niet-metalen geleiden geen stroom (uitz: grafiet).",
          voorbeelden: [{ type: "voorbeeld", tekst: "O, N, C, S, Cl = niet-metalen" }],
          basiskennis: [{ onderwerp: "vs metaal", uitleg: "metalen links + midden" }],
          niveaus: { basis: "Zuurstof.", simpeler: "O = niet-metaal.", nogSimpeler: "O = niet-metaal. → O." },
        },
      },
    ],
  },
  {
    title: "Ionen — atomen met lading",
    explanation: "Een normaal atoom is **neutraal** — evenveel + (protonen) als − (elektronen).\n\nEen **ion** is een atoom dat **elektronen heeft afgegeven of opgenomen**, en daardoor **geladen** is.\n\n**Positief ion** (kation): atoom dat een elektron afgeeft. Komt vooral bij **metalen** voor.\n• Na geeft 1 e⁻ af → Na⁺ (natriumion)\n• Mg geeft 2 e⁻ af → Mg²⁺\n• Fe kan Fe²⁺ of Fe³⁺ worden.\n\n**Negatief ion** (anion): atoom dat een elektron opneemt. Komt vooral bij **niet-metalen** voor.\n• Cl neemt 1 e⁻ op → Cl⁻ (chloride)\n• O neemt 2 e⁻ op → O²⁻\n\n**Waarom?** Atomen 'willen' graag een **volle buitenste schil** (8 elektronen). Door e⁻ af te geven of op te nemen, bereiken ze die.\n\n**Toepassing**: zout (NaCl) bestaat uit Na⁺ + Cl⁻. Die trekken elkaar aan (+ en −) en vormen samen het zoutkristal.",
    svg: `<svg viewBox="0 0 300 180">
<circle cx="80" cy="80" r="30" fill="${COLORS.metal}" opacity="0.4" stroke="${COLORS.metal}" stroke-width="2"/>
<text x="80" y="78" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial" font-weight="bold">Na⁺</text>
<text x="80" y="95" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">+1</text>
<text x="80" y="135" text-anchor="middle" fill="${COLORS.metal}" font-size="10" font-family="Arial">geeft 1 e⁻ af</text>
<text x="150" y="83" text-anchor="middle" fill="${COLORS.warm}" font-size="20" font-family="Arial">+</text>
<circle cx="220" cy="80" r="30" fill="${COLORS.nonmetal}" opacity="0.4" stroke="${COLORS.nonmetal}" stroke-width="2"/>
<text x="220" y="78" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial" font-weight="bold">Cl⁻</text>
<text x="220" y="95" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">−1</text>
<text x="220" y="135" text-anchor="middle" fill="${COLORS.nonmetal}" font-size="10" font-family="Arial">neemt 1 e⁻ op</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">→ NaCl (keukenzout)</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **positief ion**?",
        options: [
          "Atoom dat elektronen heeft afgegeven",
          "Atoom dat elektronen heeft opgenomen",
          "Atoom met meer protonen",
          "Atoom met meer neutronen",
        ],
        answer: 0,
        wrongHints: [null, "Dat is een negatief ion.", "Aantal protonen verandert niet — alleen elektronen.", "Neutronen veranderen niet."],
        uitlegPad: {
          stappen: [{ titel: "Kation = geeft e- af", tekst: "Atoom dat elektron verliest wordt positief: + lading." }],
          woorden: [{ woord: "kation", uitleg: "positief ion, +" }],
          theorie: "Minder e- = positiever. Metalen geven e- af.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Na → Na⁺, Mg → Mg²⁺" }],
          basiskennis: [{ onderwerp: "stabiel willen worden", uitleg: "volle buitenste schil" }],
          niveaus: { basis: "E- afgeven.", simpeler: "Verliest e-.", nogSimpeler: "Min e- = +." },
        },
      },
      {
        q: "Welk metaal vormt vaak Na⁺?",
        options: ["Natrium", "Goud", "Chloor", "Stikstof"],
        answer: 0,
        wrongHints: [null, "Goud vormt Au⁺ of Au³⁺.", "Chloor is geen metaal — wordt Cl⁻.", "Stikstof is niet-metaal."],
        uitlegPad: {
          stappen: [{ titel: "Na → Na⁺", tekst: "Natrium geeft 1 e- af → vormt Na⁺ (positief ion)." }],
          woorden: [{ woord: "Na+", uitleg: "natriumion in keukenzout" }],
          theorie: "Alkalimetalen (groep 1) geven 1 e- af.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Li⁺, Na⁺, K⁺" }],
          basiskennis: [{ onderwerp: "NaCl", uitleg: "Na⁺ + Cl⁻ = keukenzout" }],
          niveaus: { basis: "Natrium.", simpeler: "Na = +.", nogSimpeler: "Natrium." },
        },
      },
    ],
  },

  // C
  {
    title: "Moleculen — atomen die binden",
    explanation: "Een **molecuul** is een groep atomen die met elkaar verbonden zijn door **chemische bindingen**.\n\nEnkele bekende moleculen:\n• **H₂O** — water (2 waterstof + 1 zuurstof).\n• **O₂** — zuurstofgas (2 zuurstof).\n• **CO₂** — koolstofdioxide (1 koolstof + 2 zuurstof).\n• **NH₃** — ammoniak (1 stikstof + 3 waterstof).\n• **CH₄** — methaan (1 koolstof + 4 waterstof).\n• **C₆H₁₂O₆** — glucose (suiker).\n\n**Hoe lees je een formule?**\n• De **letter** is het symbool van het element.\n• Het **kleine getal** rechts is het aantal atomen.\n• Geen getal = 1 atoom.\n\nVoorbeeld H₂SO₄ (zwavelzuur):\n• 2 waterstof (H)\n• 1 zwavel (S)\n• 4 zuurstof (O)\n\n**Belangrijk**: in een molecuul zitten atomen door middel van **gedeelde elektronen** (covalente binding) — meestal niet als ionen.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">H₂O — water</text>
<circle cx="150" cy="90" r="22" fill="${COLORS.alt}" opacity="0.6"/>
<text x="150" y="95" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial" font-weight="bold">O</text>
<circle cx="100" cy="120" r="14" fill="${COLORS.electron}" opacity="0.7"/>
<text x="100" y="124" text-anchor="middle" fill="#fff" font-size="10" font-family="Arial">H</text>
<circle cx="200" cy="120" r="14" fill="${COLORS.electron}" opacity="0.7"/>
<text x="200" y="124" text-anchor="middle" fill="#fff" font-size="10" font-family="Arial">H</text>
<line x1="135" y1="105" x2="110" y2="115" stroke="${COLORS.text}" stroke-width="2"/>
<line x1="165" y1="105" x2="190" y2="115" stroke="${COLORS.text}" stroke-width="2"/>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">2× H + 1× O</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel atomen heeft het molecuul **CO₂**?",
        options: ["3", "2", "1", "5"],
        answer: 0,
        wrongHints: [null, "Vergeet de C niet.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "CO₂ = 1+2 = 3 atomen", tekst: "1 koolstof + 2 zuurstof = 3 atomen totaal." }],
          woorden: [{ woord: "molecuul-formule", uitleg: "klein getal = aantal atomen" }],
          theorie: "Geen getal = 1. Klein getal achteraf = aantal atomen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "H₂O = 2H + 1O = 3 atomen" }],
          basiskennis: [{ onderwerp: "tellen", uitleg: "ga letter voor letter af" }],
          niveaus: { basis: "3.", simpeler: "1+2 = 3.", nogSimpeler: "1+2 = 3. → 3." },
        },
      },
      {
        q: "Hoeveel waterstof-atomen zitten in **H₂SO₄**?",
        options: ["2", "1", "4", "7"],
        answer: 0,
        wrongHints: [null, "Het 'getal 1' geldt voor S, niet voor H.", "Dat is het aantal zuurstof.", "Dat is het totaal van alle atomen."],
        uitlegPad: {
          stappen: [{ titel: "H₂SO₄ = 2H + 1S + 4O", tekst: "Het getal 2 staat achter de H → 2 waterstof." }],
          woorden: [{ woord: "zwavelzuur", uitleg: "H₂SO₄" }],
          theorie: "Getal staat ACHTER het element waar het bij hoort.",
          voorbeelden: [{ type: "voorbeeld", tekst: "H₂ = 2H, O₄ = 4O" }],
          basiskennis: [{ onderwerp: "geen getal = 1", uitleg: "S zonder getal = 1 zwavel" }],
          niveaus: { basis: "2.", simpeler: "H met 2 erachter.", nogSimpeler: "H met 2 erachter. → 2." },
        },
      },
    ],
  },
  {
    title: "Reacties — atomen wisselen",
    explanation: "Bij een **chemische reactie** veranderen stoffen in andere stoffen. Atomen blijven dezelfde, maar gaan **andere bindingen** aan.\n\n**Voorbeeld 1 — verbranding van methaan** (kookgas):\n• CH₄ + 2 O₂ → CO₂ + 2 H₂O\n• Methaan + zuurstof → koolstofdioxide + water (+ energie/warmte)\n\n**Voorbeeld 2 — vorming van water**:\n• 2 H₂ + O₂ → 2 H₂O\n\n**Wet van behoud van atomen**: het aantal atomen van elke soort moet **links en rechts gelijk** zijn. Dat heet 'kloppen' van een reactievergelijking.\n\n**Soorten reacties** (basis):\n• **Verbranding**: stof + zuurstof → reactieproducten + warmte.\n• **Ontleding**: 1 stof valt uiteen in meerdere stoffen.\n• **Synthese**: meerdere stoffen vormen 1 stof.\n\n**Belangrijk**: massa blijft behouden. Bij een reactie wordt geen massa gemaakt of vernietigd — alleen omgezet.",
    svg: `<svg viewBox="0 0 300 180">
<text x="80" y="60" text-anchor="middle" fill="${COLORS.electron}" font-size="14" font-family="Arial" font-weight="bold">CH₄ + 2 O₂</text>
<text x="80" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">methaan + zuurstof</text>
<text x="150" y="105" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial">→</text>
<text x="220" y="60" text-anchor="middle" fill="${COLORS.alt}" font-size="14" font-family="Arial" font-weight="bold">CO₂ + 2 H₂O</text>
<text x="220" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">+ warmte</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">aantal atomen links = rechts</text>
</svg>`,
    checks: [
      {
        q: "Wat is **wet van behoud van atomen**?",
        options: [
          "Aantal atomen links en rechts is gelijk",
          "Atomen verdwijnen tijdens reactie",
          "Massa wordt gemaakt",
          "Bij reacties verdwijnen alle atomen",
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — atomen verdwijnen niet.", "Massa wordt niet gemaakt.", "Onjuist — massa blijft behouden."],
        uitlegPad: {
          stappen: [{ titel: "Atomen tellen", tekst: "Links en rechts dezelfde atomen — alleen in andere combinaties." }],
          woorden: [{ woord: "wet van behoud", uitleg: "Lavoisier, ~1789" }],
          theorie: "Atomen verdwijnen niet, ze hergroeperen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "CH₄ + 2 O₂ → CO₂ + 2 H₂O (C en H en O kloppen)" }],
          basiskennis: [{ onderwerp: "kloppen", uitleg: "reactievergelijking moet 'kloppen'" }],
          niveaus: { basis: "Atomen blijven.", simpeler: "Aantal blijft gelijk.", nogSimpeler: "Behoud." },
        },
      },
      {
        q: "Wat ontstaat bij verbranding van methaan?",
        options: [
          "CO₂ en water + warmte",
          "Alleen rook",
          "Goud",
          "Niets",
        ],
        answer: 0,
        wrongHints: [null, "Rook bestaat uit deeltjes — bij volledig verbranding krijg je CO₂ + H₂O.", "Goud kan niet zomaar ontstaan.", "Er gebeurt zeker iets — verbranding."],
        uitlegPad: {
          stappen: [{ titel: "Verbranding methaan", tekst: "CH₄ + 2 O₂ → CO₂ + 2 H₂O + warmte." }],
          woorden: [{ woord: "verbranding", uitleg: "stof + O₂ + warmte" }],
          theorie: "Methaan + zuurstof → CO₂ + water + energie.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Gasfornuis: CH₄ wordt verbrand voor warmte" }],
          basiskennis: [{ onderwerp: "broeikasgas", uitleg: "CO₂ ontstaat bij verbranding" }],
          niveaus: { basis: "CO₂ + H₂O + warmte.", simpeler: "Koolstofdioxide + water.", nogSimpeler: "CO₂ + water." },
        },
      },
    ],
  },

  // D
  {
    title: "Eindopdracht — alles bij elkaar",
    explanation: "Tijd om alles toe te passen!\n\n**Snelle samenvatting**:\n\n| Term | Wat | Voorbeeld |\n|---|---|---|\n| Atoomnummer (Z) | aantal protonen | C heeft Z = 6 |\n| Massagetal (A) | protonen + neutronen | ¹²C heeft A = 12 |\n| Element | bepaald door Z | Na = 11 protonen |\n| Isotopen | zelfde Z, andere A | ¹²C en ¹⁴C |\n| Ion | atoom met lading | Na⁺, Cl⁻ |\n| Molecuul | atomen verbonden | H₂O, CO₂ |\n| Metaal | links in tabel | Fe, Cu, Au |\n| Niet-metaal | rechts in tabel | O, N, Cl |\n| Edelgas | groep 18, stabiel | He, Ne, Ar |\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="24" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">checklist</text>
<text x="20" y="50" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Hoeveel protonen → welk element?</text>
<text x="20" y="70" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Aantal e⁻ in buitenste schil?</text>
<text x="20" y="90" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Metaal of niet-metaal?</text>
<text x="20" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">4. Atoom of ion (lading)?</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "Atoom met 11 protonen — welk element?",
        options: ["Natrium (Na)", "Koolstof (C)", "IJzer (Fe)", "Helium (He)"],
        answer: 0,
        wrongHints: [null, "Koolstof = 6.", "IJzer = 26.", "Helium = 2."],
        uitlegPad: {
          stappen: [{ titel: "11 protonen = Na", tekst: "Element met Z = 11 is natrium." }],
          woorden: [{ woord: "Na", uitleg: "natrium, in keukenzout" }],
          theorie: "Aantal protonen = atoomnummer = element.",
          voorbeelden: [{ type: "voorbeeld", tekst: "1=H, 2=He, 6=C, 8=O, 11=Na" }],
          basiskennis: [{ onderwerp: "tabel", uitleg: "kennis van eerste 20 elementen handig" }],
          niveaus: { basis: "Natrium.", simpeler: "11 = Na.", nogSimpeler: "11 = Na. → Na." },
        },
      },
      {
        q: "Wat klopt over **edelgassen**?",
        options: [
          "Buitenste schil is vol → zeer stabiel, reageert nauwelijks",
          "Heel reactief",
          "Allemaal metalen",
          "Komen niet voor in lucht",
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — bijna geen reactie.", "Niet-metalen.", "Argon zit in lucht (~1%)."],
        uitlegPad: {
          stappen: [{ titel: "Volle buitenste schil", tekst: "Edelgassen hebben volle buitenste schil → stabiel, geen reactie." }],
          woorden: [{ woord: "stabiel", uitleg: "wil niets veranderen" }],
          theorie: "Volle schil = perfecte staat → geen reactie nodig.",
          voorbeelden: [{ type: "voorbeeld", tekst: "He, Ne, Ar gebruikt in lampen — veilig" }],
          basiskennis: [{ onderwerp: "alle andere atomen", uitleg: "willen ook volle schil bereiken" }],
          niveaus: { basis: "Buitenste schil vol.", simpeler: "Stabiel, niet-reactief.", nogSimpeler: "Stabiel." },
        },
      },
      {
        q: "Hoeveel atomen telt het molecuul C₆H₁₂O₆ (glucose)?",
        options: ["24", "6", "12", "18"],
        answer: 0,
        wrongHints: [null, "Dat is alleen de C of de O.", "Dat is alleen de H.", "Optellen: 6 + 12 + 6 = 24."],
        uitlegPad: {
          stappen: [{ titel: "C₆H₁₂O₆ = 6+12+6 = 24", tekst: "Tel atomen op: 6 C + 12 H + 6 O = 24 atomen totaal." }],
          woorden: [{ woord: "glucose", uitleg: "suikermolecuul" }],
          theorie: "Som alle getallen achter de elementen op.",
          voorbeelden: [{ type: "voorbeeld", tekst: "C₆H₁₂O₆ = glucose = 24 atomen" }],
          basiskennis: [{ onderwerp: "biologie", uitleg: "glucose = energie voor cellen" }],
          niveaus: { basis: "24.", simpeler: "6+12+6.", nogSimpeler: "6+12+6. → 24." },
        },
      },
      {
        q: "Een atoom geeft een elektron af. Wat is de lading?",
        options: ["+1", "−1", "0", "−2"],
        answer: 0,
        wrongHints: [null, "Bij afgeven verlies je een minlading → wordt positiever.", "Bij afgeven verandert de lading wél.", "Maar één elektron weg = +1."],
        uitlegPad: {
          stappen: [{ titel: "E- afgeven = +1", tekst: "Verlies van 1 e- (negatief) → +1 lading." }],
          woorden: [{ woord: "lading", uitleg: "verschil tussen + en - in atoom" }],
          theorie: "Atoom met evenveel p en e = neutraal. E- weg = + meer.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Na (11p, 11e, 0) → Na⁺ (11p, 10e, +1)" }],
          basiskennis: [{ onderwerp: "tellen", uitleg: "lading = aantal protonen − aantal elektronen" }],
          niveaus: { basis: "+1.", simpeler: "Min e- = +.", nogSimpeler: "Min e- = +. → +1." },
        },
      },
      {
        q: "Wat is een **atoomkern**?",
        options: ["Centrum atoom met protonen + neutronen","Buitenste laag","Elektron-wolk","Niets"],
        answer: 0,
        wrongHints: [null, "Niet — buitenste laag = elektronen-wolk.", "Niet — elektronen zitten BUITEN de kern.", "Niet — kern bestaat zeker."],
        uitlegPad: {
          stappen: [
            { titel: "Atoom-structuur", tekst: "Een atoom bestaat uit **3 onderdelen**:\n• **Proton** (+) — in kern, positief geladen\n• **Neutron** (0) — in kern, geen lading\n• **Electron** (−) — buiten kern, negatief geladen\n\n**Kern** = centrum waarin protonen + neutronen zitten. Heel klein (1/10.000 van atoom-doorsnee) maar **99,9% van massa**." },
            { titel: "Voorbeeld koolstof (C)", tekst: "Koolstof-atoom (C-12):\n• **6 protonen** in kern\n• **6 neutronen** in kern\n• **6 elektronen** in 2 schalen rond kern\n• Atoomnummer = 6 (aantal protonen)\n• Massagetal = 12 (protonen + neutronen)" },
            { titel: "Cito-feit: Rutherford-experiment 1911", tekst: "**Ernest Rutherford** (1911) ontdekte de **kern** met beroemd experiment:\n• Schoot positieve deeltjes op dunne goudfolie\n• Verwachtte: rechtdoor (atoom = pudding)\n• Vond: meeste rechtdoor, MAAR enkele kaatsten terug\n• Conclusie: atoom heeft **dichte positieve kern** + lege ruimte\n\nDit gaf modern atoom-model. Voor Rutherford = pudding-model (Thomson). Na = planeet-model (Bohr)." },
          ],
          woorden: [
            { woord: "atoomkern", uitleg: "Centrum atoom met protonen + neutronen. Klein maar zwaar." },
            { woord: "proton", uitleg: "Positief geladen deeltje in kern." },
            { woord: "neutron", uitleg: "Ongeladen deeltje in kern." },
            { woord: "elektron", uitleg: "Negatief geladen deeltje buiten kern (in schalen)." },
          ],
          theorie: "Atoom-structuur-feiten:\n• Kern = 99,9% massa\n• Doorsnee atoom: ~0,1 nanometer\n• Doorsnee kern: ~0,00001 nanometer (10⁻⁵ nm)\n• Vergelijking: als kern voetbal is, atoom = voetbalstadion\n• Lege ruimte: bijna 100% van atoom is leeg",
          voorbeelden: [
            { type: "feit", tekst: "Aantal protonen = atoomnummer. Periodiek systeem op atoomnummer gesorteerd: H(1), He(2), Li(3), ... C(6), N(7), O(8)." },
          ],
          basiskennis: [{ onderwerp: "Cito-stof", uitleg: "Atoom-structuur is basis-scheikunde. Kern + elektronen onderscheid moeten kunnen maken." }],
          niveaus: { basis: "Centrum met p+n. = A.", simpeler: "Atoomkern = centrum atoom. Bevat protonen (+) + neutronen (0). Heel klein maar bevat bijna alle massa. Elektronen draaien eromheen. = A.", nogSimpeler: "Centrum atoom = A." },
        },
      },
      {
        q: "Wat is het **periodiek systeem**?",
        options: ["Tabel met alle ~118 elementen geordend","Klok","Soort grafiek","Wetboek"],
        answer: 0,
        wrongHints: [null, "Niet — geen tijd-meting.", "Niet — wel TABEL maar geen gewone grafiek.", "Niet — geen juridisch document."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is periodiek systeem?", tekst: "Het **periodiek systeem der elementen** is een **tabel** met alle bekende **chemische elementen** (atomen) gerangschikt op:\n• **Rijen (periodes)** — toenemend atoomnummer\n• **Kolommen (groepen)** — gelijkende eigenschappen\n\nIn totaal ~**118 elementen** (2024). Eerste 92 in natuur, rest in lab gemaakt." },
            { titel: "Geschiedenis: Mendeleev 1869", tekst: "**Dmitri Mendeleev** (Russisch chemist, 1834-1907) bedacht in **1869** het systeem. Geniaal aan zijn werk: hij **liet lege plekken open** voor onbekende elementen + voorspelde hun eigenschappen.\n\nVoorspellingen klopten later (Gallium 1875, Germanium 1886). Bewees dat de logica klopte." },
            { titel: "Cito-feit: belangrijke groepen", tekst: "**Eerste kolom**: alkalimetalen (Na, K) — reactief, glanzend\n**Laatste kolom**: edelgassen (He, Ne, Ar) — niet reactief\n**Tussen**: metalen (Fe, Cu, Au, Ag)\n**Rechts**: niet-metalen (C, N, O, S)\n\nElk element heeft **symbool** (1-2 letters):\n• H = Waterstof\n• O = Zuurstof\n• C = Koolstof\n• Fe = IJzer (van 'ferrum')\n• Au = Goud (van 'aurum')" },
          ],
          woorden: [
            { woord: "element", uitleg: "Zuiver chemisch deel — alle atomen identiek (alle koolstof-atomen zelfde)." },
            { woord: "atoomnummer", uitleg: "Aantal protonen — uniek per element. H=1, He=2." },
            { woord: "atoomsymbool", uitleg: "1-2 letters voor element. H, O, Fe, Au." },
          ],
          theorie: "Belangrijke elementen Cito:\n• H (1) - waterstof\n• C (6) - koolstof (basis leven)\n• N (7) - stikstof (78% lucht)\n• O (8) - zuurstof (21% lucht)\n• Na (11) - natrium (zout)\n• Cl (17) - chloor\n• Fe (26) - ijzer\n• Cu (29) - koper\n• Ag (47) - zilver\n• Au (79) - goud",
          voorbeelden: [
            { type: "feit", tekst: "Element 117 (Tennessine) werd in 2010 gemaakt + bestond slechts ~50 milliseconden voor het vervalde. Moeilijker maken hoe verder je gaat." },
          ],
          basiskennis: [{ onderwerp: "VMBO-stof", uitleg: "Periodiek systeem inzicht = examen-stof VMBO scheikunde. Mendeleev + werking onthouden." }],
          niveaus: { basis: "Tabel elementen. = A.", simpeler: "Periodiek systeem = tabel met alle ~118 chemische elementen, gerangschikt op atoomnummer + eigenschappen. Mendeleev 1869. = A.", nogSimpeler: "Element-tabel = A." },
        },
      },
      {
        q: "Wat is een **isotoop**?",
        options: ["Atoom met zelfde protonen maar ander aantal neutronen","Heel groot atoom","Negatief geladen","Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Niet — isotopen ≠ groot/klein per se.", "Niet — neutronen zijn neutraal.", "Niet — wel echt fenomeen."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een isotoop?", tekst: "**Isotopen** zijn atomen van **HETZELFDE element** met **DIFFERENT aantal neutronen**. Aantal protonen blijft gelijk (anders ander element).\n\nVoorbeeld koolstof:\n• **C-12** (6 p + 6 n) — meest voorkomend, stabiel\n• **C-13** (6 p + 7 n) — stabiel, ~1% van koolstof\n• **C-14** (6 p + 8 n) — radioactief, vervalt over tijd" },
            { titel: "Waarom interessant?", tekst: "**Radioactieve isotopen** vervallen + zenden straling uit. Toepassingen:\n• **Koolstof-14-datering**: bepalen ouderdom van organisch materiaal (mummies, fossielen). Halveringstijd 5.730 jaar.\n• **Medische diagnose**: bv jodium-131 voor schildklier-test\n• **Kernreactoren**: uranium-235 (splijtbaar)\n• **Bestraling**: kanker-therapie met cobalt-60" },
            { titel: "Cito-feit: ouderdom-bepalen", tekst: "**Koolstof-14-datering** werkt zo:\n1. Levende dieren/planten nemen C-14 op (kleine deel)\n2. Bij dood stopt opname\n3. C-14 vervalt naar N-14 (halveringstijd 5.730 jaar)\n4. Meet hoeveel C-14 over is → bereken ouderdom\n\nBerucht voorbeeld: **Tutankhamun mummie** ~3.300 jaar oud. **Otzi de IJsman** (Alpen) ~5.300 jaar. Werkt voor 50.000 jaar max." },
          ],
          woorden: [
            { woord: "isotoop", uitleg: "Variant van element met ander aantal neutronen." },
            { woord: "radioactief", uitleg: "Vervalt over tijd + zendt straling uit." },
            { woord: "halveringstijd", uitleg: "Tijd waarin helft van isotoop vervalt." },
          ],
          theorie: "Notatie isotopen:\n• Massagetal-Symbool: C-14, U-235\n• Of hooggeplaatste schrijfwijze: ¹⁴C, ²³⁵U\n• Bovenste cijfer = massagetal (p+n)\n• Onderste cijfer = atoomnummer (alleen p)\n\nAlle isotopen van zelfde element hebben zelfde chemische eigenschappen — alleen MASSA verschilt.",
          voorbeelden: [
            { type: "feit", tekst: "Waterstof heeft 3 isotopen: protium (1p, 0n), deuterium (1p, 1n), tritium (1p, 2n)." },
          ],
          basiskennis: [{ onderwerp: "Niet ander element", uitleg: "Isotopen = ZELFDE element, andere massa. Bij verandering protonen = NIEUW element (koolstof → stikstof bij C-14 verval)." }],
          niveaus: { basis: "Zelfde protonen, andere neutronen. = A.", simpeler: "Isotoop = atoom met zelfde aantal protonen maar verschillend aantal neutronen. Bv C-12 + C-14. C-14 radioactief voor datering. = A.", nogSimpeler: "Ander neutron-aantal = A." },
        },
      },
      { q: "Wat is de **lading** van een **proton**?", options: ["+1","-1","0","+2"], answer: 0, wrongHints: [null, "Elektron.", "Neutron.", "Niet."] },
      { q: "Wat is de **lading** van een **neutron**?", options: ["0","+1","-1","+2"], answer: 0, wrongHints: [null, "Proton.", "Elektron.", "Niet."] },
      { q: "Wat is de **lading** van een **elektron**?", options: ["-1","+1","0","+2"], answer: 0, wrongHints: [null, "Proton.", "Neutron.", "Niet."] },
      { q: "Welk deeltje bevindt zich in de **kern** van het atoom?", options: ["Proton + neutron","Alleen elektron","Alleen proton","Alle drie"], answer: 0, wrongHints: [null, "Elektronen zijn in schillen.", "Onvolledig.", "Onjuist."] },
      { q: "Het **atoomnummer** = aantal ___?", options: ["protonen","neutronen","elektronen","atomen"], answer: 0, wrongHints: [null, "Massagetal − atoomnummer.", "Bij neutraal atoom = aantal protonen.", "Niet."] },
      { q: "Het **massagetal** = ?", options: ["protonen + neutronen","alleen protonen","alleen elektronen","protonen × neutronen"], answer: 0, wrongHints: [null, "Atoomnummer.", "Niet.", "Niet primair."] },
      { q: "Hoeveel **elektronen** passen in de **eerste schil** (K)?", options: ["2","8","18","32"], answer: 0, wrongHints: [null, "Tweede schil.", "Derde schil.", "Vierde schil."] },
      { q: "Hoeveel **elektronen** passen in de **tweede schil** (L)?", options: ["8","2","18","32"], answer: 0, wrongHints: [null, "Eerste.", "Derde.", "Vierde."] },
      { q: "**Open vraag**: hoeveel protonen heeft koolstof (C)?", kind: "open", acceptedAnswers: ["6"], numericTolerance: 0, explanation: "Koolstof = C = atoomnummer 6 = 6 protonen." },
      { q: "**Open vraag**: wat is de chemische naam voor H?", kind: "open", acceptedAnswers: ["waterstof", "hydrogen"], explanation: "H = waterstof (hydrogen in Engels), atoomnummer 1." },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const atoombouwScheikunde = {
  id: "atoombouw-scheikunde",
  title: "Atoombouw en periodiek systeem",
  emoji: "🧪",
  level: "klas3-4",
  // SLO-kerndoelen scheikunde (G4 batch 3): atoombouw + periodiek systeem.
  referentieNiveau: "2F/3F",
  sloThema: "Scheikunde — atoombouw",
  subject: "scheikunde",
  prerequisites: [
    { id: "stoffen-mengsels-scheikunde", title: "Stoffen + mengsels", niveau: "vmbo-2F" },
    { id: "toestand-stoffen-po", title: "Toestanden van stoffen", niveau: "po-1F" },
  ],
  intro:
    "De bouw van atomen — kern (proton + neutron) + elektronen in schillen, atoomnummer en massagetal, isotopen, ionen, het periodiek systeem (metaal/niet-metaal/edelgas), moleculen en chemische reacties met behoud van atomen. Eerste pad scheikunde onderbouw.",
  triggerKeywords: [
    "atoom", "atomen", "proton", "neutron", "elektron",
    "atoomnummer", "massagetal", "isotoop",
    "schil", "schillen", "elektronenschil",
    "periodiek systeem", "elementen",
    "metaal", "niet-metaal", "edelgas",
    "ion", "ionen", "kation", "anion",
    "molecuul", "moleculen",
    "chemische reactie", "verbranding", "behoud atomen",
    "scheikunde",
  ],
  chapters,
  steps,
};

export default atoombouwScheikunde;
