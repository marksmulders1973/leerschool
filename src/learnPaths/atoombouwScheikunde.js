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
      },
      {
        q: "Waar zit de kern van een atoom?",
        options: ["In het midden", "Aan de buitenkant", "Verspreid door het atoom", "Boven op het atoom"],
        answer: 0,
        wrongHints: [null, "Aan de buitenkant zitten de elektronen.", "De kern zit op één plek.", "Het atoom heeft geen 'boven' of 'onder' — het is rond."],
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
        wrongHints: [null, "Zuurstof = 8 protonen.", "Waterstof = 1 proton.", "IJzer = 26 protonen."],
      },
      {
        q: "Wat heet het aantal protonen in een atoom?",
        options: ["Atoomnummer", "Massagetal", "Lading", "Elektronenaantal"],
        answer: 0,
        wrongHints: [null, "Massagetal = protonen + neutronen.", "Lading = + of − van het hele atoom.", "Aantal elektronen is wel hetzelfde, maar dat is een ander begrip."],
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
      },
      {
        q: "Welke groep zijn de **edelgassen**?",
        options: ["Groep 18", "Groep 1", "Groep 7", "Groep 17"],
        answer: 0,
        wrongHints: [null, "Groep 1 = alkalimetalen.", "In oude indeling stonden edelgassen wel in 'groep VIII A', maar nu groep 18.", "Groep 17 = halogenen."],
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
      },
      {
        q: "Welk element is een **niet-metaal**?",
        options: ["Zuurstof (O)", "IJzer (Fe)", "Koper (Cu)", "Goud (Au)"],
        answer: 0,
        wrongHints: [null, "IJzer is een metaal.", "Koper is een metaal.", "Goud is een metaal."],
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
      },
      {
        q: "Welk metaal vormt vaak Na⁺?",
        options: ["Natrium", "Goud", "Chloor", "Stikstof"],
        answer: 0,
        wrongHints: [null, "Goud vormt Au⁺ of Au³⁺.", "Chloor is geen metaal — wordt Cl⁻.", "Stikstof is niet-metaal."],
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
      },
      {
        q: "Hoeveel waterstof-atomen zitten in **H₂SO₄**?",
        options: ["2", "1", "4", "7"],
        answer: 0,
        wrongHints: [null, "Het 'getal 1' geldt voor S, niet voor H.", "Dat is het aantal zuurstof.", "Dat is het totaal van alle atomen."],
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
      },
      {
        q: "Hoeveel atomen telt het molecuul C₆H₁₂O₆ (glucose)?",
        options: ["24", "6", "12", "18"],
        answer: 0,
        wrongHints: [null, "Dat is alleen de C of de O.", "Dat is alleen de H.", "Optellen: 6 + 12 + 6 = 24."],
      },
      {
        q: "Een atoom geeft een elektron af. Wat is de lading?",
        options: ["+1", "−1", "0", "−2"],
        answer: 0,
        wrongHints: [null, "Bij afgeven verlies je een minlading → wordt positiever.", "Bij afgeven verandert de lading wél.", "Maar één elektron weg = +1."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const atoombouwScheikunde = {
  id: "atoombouw-scheikunde",
  title: "Atoombouw en periodiek systeem",
  emoji: "🧪",
  level: "klas3-4",
  subject: "scheikunde",
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
