// Leerpad: De cel — bouwsteen van het leven (Biologie onderbouw VO)
// 11 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: klas 1-3 mavo/havo/vwo. Eerste biologie-leerpad.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  goodSoft: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  altSoft: "#ffab91",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  // celdelen
  membrane: "#80deea",
  cyto: "rgba(255,213,79,0.18)",
  nucleus: "#ce93d8",
  mito: "#ff7043",
  chloro: "#69f0ae",
  wall: "#a1887f",
  vacuole: "#90caf9",
};

const stepEmojis = [
  "🔬", "🧬",                        // A. Intro
  "🎯", "🟡", "🔋", "🌿",            // B. Organellen
  "🪴", "🐾",                        // C. Plant vs dier
  "🦠",                              // C. Bacterie
  "✂️",                              // D. Celdeling
  "🏆",                              // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat is een cel?", emoji: "🔬", from: 0, to: 1 },
  { letter: "B", title: "De delen van een cel", emoji: "🎯", from: 2, to: 5 },
  { letter: "C", title: "Plantcel, dierlijke cel & bacterie", emoji: "🪴", from: 6, to: 8 },
  { letter: "D", title: "Hoe groeit een organisme?", emoji: "✂️", from: 9, to: 9 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 10, to: 10 },
];

const steps = [
  // ─── A. Wat is een cel? ───────────────
  {
    title: "Wat is een cel?",
    explanation: "Een **cel** is de **kleinste levende bouwsteen** van een organisme. Alles wat leeft — bacteriën, planten, dieren, mensen — bestaat uit cellen.\n\n**Belangrijke feiten**:\n• Cellen zijn meestal te klein om met het blote oog te zien — je hebt een **microscoop** nodig.\n• Een cel kan zélf leven: voeden, groeien, afval afgeven, zich delen.\n• Eén volwassen mens bestaat uit ongeveer **30 biljoen cellen** (30.000.000.000.000).\n\nDe naam 'cel' werd in 1665 bedacht door **Robert Hooke**, die door een microscoop naar kurk keek en dacht aan kleine kamers (in het Latijn: *cellulae*).\n\nKortom: cel = bouwsteen + functioneel zelfstandig + leeft.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">cel = bouwsteen van het leven</text>
<ellipse cx="80" cy="110" rx="40" ry="32" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="2"/>
<circle cx="80" cy="110" r="12" fill="${COLORS.nucleus}" opacity="0.6"/>
<text x="80" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">één cel</text>
<text x="180" y="60" fill="${COLORS.text}" font-size="11" font-family="Arial">→ veel cellen samen</text>
<g>
${[0, 1, 2].map(r => [0, 1, 2].map(c => `<ellipse cx="${175 + c * 22}" cy="${85 + r * 18}" rx="9" ry="7" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1"/>`).join("")).join("")}
</g>
<text x="200" y="180" fill="${COLORS.text}" font-size="11" font-family="Arial">= weefsel / orgaan</text>
</svg>`,
    checks: [
      {
        q: "Wat is een cel?",
        options: [
          "De kleinste levende bouwsteen van een organisme",
          "Een soort virus",
          "Een orgaan van het lichaam",
          "Een molecuul met DNA",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een virus is veel kleiner én wordt niet als 'levend' gezien (heeft een gastcel nodig). Cellen leven zélf.",
          "Een orgaan bestaat uit veel cellen samen. Eén cel is veel kleiner.",
          "Een cel bevat DNA (in de kern), maar is meer dan alleen DNA.",
        ],
      },
      {
        q: "Wat heb je nodig om de meeste cellen te zien?",
        options: ["Een microscoop", "Een vergrootglas", "Niets, je ziet ze gewoon", "Een telescoop"],
        answer: 0,
        wrongHints: [
          null,
          "Een vergrootglas vergroot ~5×. Te weinig voor de meeste cellen.",
          "Cellen zijn meestal microscopisch klein — je ziet ze niet zomaar.",
          "Een telescoop is voor verre dingen (sterren), niet voor kleine.",
        ],
      },
    ],
  },
  {
    title: "Eencellig of meercellig?",
    explanation: "Niet elk organisme is groot. Sommige bestaan uit **één cel** (eencellig), andere uit **veel cellen** (meercellig).\n\n**Eencellig** *(unicellulair)*:\n• Bacteriën\n• Pantoffeldiertjes (Paramecium)\n• Algen (zoals Chlamydomonas)\n• Gisten *(de paddenstoel-soort die brood doet rijzen)*\n\nDeze organismen zijn complete wezens in één cel — ze eten, bewegen en planten zich voort.\n\n**Meercellig** *(multicellulair)*:\n• Planten (van mos tot eikenboom)\n• Dieren (van slak tot olifant)\n• Schimmels (paddenstoelen)\n• Mensen — ~30 biljoen cellen\n\nIn meercellige organismen specialiseren cellen zich: spiercellen kunnen samentrekken, zenuwcellen geleiden signalen, huidcellen beschermen. Samen vormen ze **weefsels**, die op hun beurt **organen** vormen.",
    svg: `<svg viewBox="0 0 300 180">
<text x="80" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">eencellig</text>
<ellipse cx="80" cy="80" rx="38" ry="28" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="2"/>
<circle cx="80" cy="80" r="10" fill="${COLORS.nucleus}" opacity="0.6"/>
<text x="80" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">bacterie • alg</text>
<text x="80" y="146" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">gist</text>
<text x="220" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">meercellig</text>
<g>
${Array.from({ length: 5 }, (_, i) => Array.from({ length: 4 }, (_, j) => `<ellipse cx="${178 + j * 18}" cy="${52 + i * 14}" rx="7" ry="5" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1"/>`).join("")).join("")}
</g>
<text x="220" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">plant • dier</text>
<text x="220" y="146" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">mens • paddenstoel</text>
</svg>`,
    checks: [
      {
        q: "Welke is **eencellig**?",
        options: ["Bacterie", "Mier", "Mos", "Eikenboom"],
        answer: 0,
        wrongHints: [
          null,
          "Een mier is klein, maar bestaat uit miljarden cellen.",
          "Mos is meercellig — je ziet zelfs de blaadjes.",
          "Een boom heeft veel meer dan één cel.",
        ],
      },
      {
        q: "Wat klopt over een meercellig organisme?",
        options: [
          "Cellen specialiseren zich in verschillende functies",
          "Elke cel doet alles zelf, net als bij eencelligen",
          "Het bestaat uit precies twee cellen",
          "Het kan niet groeien",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij meercelligen is dat juist niet zo — daar verdelen cellen het werk.",
          "'Meercellig' = veel cellen, niet precies twee.",
          "Meercelligen groeien juist door celdeling.",
        ],
      },
    ],
  },

  // ─── B. De delen van een cel ───────────────
  {
    title: "Celkern — het hoofdkantoor",
    explanation: "Bijna elke cel heeft een **celkern** *(nucleus)*. Daarin zit het **DNA** — het erfelijk materiaal dat alle informatie bevat over hoe de cel moet werken.\n\n**Functies van de kern**:\n• Bewaart het DNA veilig\n• Geeft instructies door (welke eiwitten moet de cel maken?)\n• Controleert celdeling\n\nDe kern is meestal een ronde of ovale 'bal' middenin de cel, omgeven door een eigen membraan (de **kernmembraan**).\n\nUitzondering: **bacteriecellen** hebben géén kern. Hun DNA zweeft los in de cel. Dit verschil is groot: cellen *met* kern noemen we **eukaryoot**, cellen *zonder* kern **prokaryoot**.",
    svg: `<svg viewBox="0 0 300 200">
<ellipse cx="150" cy="100" rx="120" ry="80" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="3"/>
<circle cx="150" cy="100" r="32" fill="${COLORS.nucleus}" opacity="0.55" stroke="${COLORS.nucleus}" stroke-width="2"/>
<text x="150" y="98" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">kern</text>
<text x="150" y="112" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">(DNA)</text>
<text x="35" y="35" fill="${COLORS.membrane}" font-size="11" font-family="Arial">celmembraan</text>
<text x="55" y="180" fill="${COLORS.warm}" font-size="11" font-family="Arial">cytoplasma</text>
</svg>`,
    checks: [
      {
        q: "Wat zit er in de celkern?",
        options: ["DNA", "Bloed", "Suiker", "Lucht"],
        answer: 0,
        wrongHints: [
          null,
          "Bloed is een vloeistof in dieren, niet in een cel.",
          "Suiker (glucose) zit eerder in cytoplasma als brandstof — niet in de kern.",
          "Lucht heeft niets te maken met de kern.",
        ],
      },
      {
        q: "Welke cel heeft géén kern?",
        options: ["Bacteriecel", "Plantcel", "Spiercel", "Bloedplaatje (uitzondering)"],
        answer: 0,
        wrongHints: [
          null,
          "Plantcellen hebben wél een kern.",
          "Spiercellen zijn dierlijke cellen — die hebben een kern.",
          "Klopt dat bloedplaatjes geen kern hebben — maar dat is een speciale uitzondering bij dieren. Welke hele groep cellen heeft systematisch geen kern?",
        ],
      },
    ],
  },
  {
    title: "Cytoplasma & celmembraan",
    explanation: "**Cytoplasma** is de **gel-achtige vloeistof** binnenin de cel. Hierin zweven alle celdelen (organellen). Het cytoplasma vervoert stoffen en is de plek waar veel reacties gebeuren.\n\n**Celmembraan** *(plasmamembraan)* is het **buitenste vliesje** dat de cel bij elkaar houdt. Het is heel **selectief**: het laat sommige stoffen doorlaten (zuurstof, water, glucose) en houdt andere tegen (afval, vergif).\n\nEen handig beeld: \n• Cytoplasma = de soep binnenin\n• Celmembraan = de huid eromheen\n• Organellen = de stukjes groente in de soep\n\n**Plantcel-bonus**: planten hebben naast het celmembraan ook nog een stevige **celwand** (van cellulose) eromheen. Dat geeft de plant zijn vorm en stevigheid.",
    svg: `<svg viewBox="0 0 300 200">
<ellipse cx="150" cy="100" rx="115" ry="78" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="4"/>
<text x="150" y="32" text-anchor="middle" fill="${COLORS.membrane}" font-size="12" font-family="Arial" font-weight="bold">celmembraan</text>
<text x="245" y="58" fill="${COLORS.membrane}" font-size="10" font-family="Arial">↘</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">cytoplasma (vloeistof)</text>
<circle cx="105" cy="92" r="14" fill="${COLORS.nucleus}" opacity="0.5"/>
<ellipse cx="180" cy="80" rx="14" ry="7" fill="${COLORS.mito}" opacity="0.6"/>
<ellipse cx="195" cy="125" rx="14" ry="7" fill="${COLORS.mito}" opacity="0.6"/>
<text x="106" y="96" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">kern</text>
</svg>`,
    checks: [
      {
        q: "Wat doet het celmembraan?",
        options: [
          "Bepaalt welke stoffen de cel in en uit gaan",
          "Maakt energie",
          "Bevat het DNA",
          "Verteert voedsel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Energie maken doen mitochondriën, niet het membraan.",
          "Het DNA zit in de kern.",
          "Verteren doen lysosomen / het maagdarmstelsel — niet het membraan zelf.",
        ],
      },
      {
        q: "Wat is cytoplasma?",
        options: [
          "De vloeistof binnenin de cel waarin organellen zweven",
          "Het vlies om de cel",
          "Het DNA",
          "Een soort cel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het celmembraan. Cytoplasma zit *binnenin*.",
          "DNA zit in de kern, niet in cytoplasma als geheel.",
          "Een soort cel? Cytoplasma is een onderdeel van een cel.",
        ],
      },
    ],
  },
  {
    title: "Mitochondriën — energiefabriekjes",
    explanation: "**Mitochondriën** *(mitos = draad, chondros = korrel — \"draadkorrels\")* zijn de **energiefabriekjes** van de cel. Ze verbranden glucose (suiker) met behulp van zuurstof, en daar komt **energie** uit waarmee de cel werkt.\n\n**Reactie**: glucose + zuurstof → energie + koolstofdioxide + water.\n\n**Hoe meer energie een cel nodig heeft, hoe meer mitochondriën hij heeft**:\n• Spiercellen → veel mitochondriën\n• Hartspiercellen → héél veel mitochondriën\n• Botcellen → minder\n\nMitochondriën hebben hun eigen kleine ringvormige DNA — een van de bewijzen dat ze ooit zelfstandige bacteriën waren die in andere cellen zijn gaan samenleven (de **endosymbiose-theorie**).\n\nVorm: ovale structuren met dubbele wand en plooien binnenin (zodat er meer oppervlak is voor de energiereacties).",
    svg: `<svg viewBox="0 0 300 200">
<ellipse cx="150" cy="100" rx="120" ry="80" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="2"/>
<g>
<ellipse cx="100" cy="80" rx="20" ry="10" fill="${COLORS.mito}" opacity="0.5" stroke="${COLORS.mito}" stroke-width="1.5"/>
<path d="M 85 80 Q 92 75 100 80 Q 108 85 115 80" stroke="${COLORS.mito}" stroke-width="0.7" fill="none"/>
<ellipse cx="195" cy="120" rx="20" ry="10" fill="${COLORS.mito}" opacity="0.5" stroke="${COLORS.mito}" stroke-width="1.5"/>
<path d="M 180 120 Q 187 115 195 120 Q 203 125 210 120" stroke="${COLORS.mito}" stroke-width="0.7" fill="none"/>
<ellipse cx="155" cy="60" rx="18" ry="9" fill="${COLORS.mito}" opacity="0.5" stroke="${COLORS.mito}" stroke-width="1.5"/>
</g>
<circle cx="155" cy="120" r="14" fill="${COLORS.nucleus}" opacity="0.4"/>
<text x="155" y="190" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">mitochondriën = energie 🔋</text>
</svg>`,
    checks: [
      {
        q: "Wat doen mitochondriën?",
        options: [
          "Energie maken (verbranding van glucose)",
          "DNA bewaren",
          "Voedsel verteren",
          "Foto-synthese (zonlicht omzetten)",
        ],
        answer: 0,
        wrongHints: [
          null,
          "DNA zit in de kern, niet in mitochondriën (al hebben mitochondriën ook eigen kleinere DNA).",
          "Verteren doen lysosomen.",
          "Fotosynthese doen chloroplasten — alleen in plantcellen.",
        ],
      },
      {
        q: "Welke cel heeft de **meeste** mitochondriën?",
        options: ["Hartspiercel", "Huidcel", "Vetcel", "Bacterie"],
        answer: 0,
        wrongHints: [
          null,
          "Een huidcel heeft niet veel energie nodig — beschermt vooral.",
          "Vetcellen slaan energie op, maar verbruiken weinig.",
          "Bacteriën hebben helemaal geen mitochondriën.",
        ],
      },
    ],
  },
  {
    title: "Chloroplasten — alleen in plantcellen",
    explanation: "**Chloroplasten** zijn de **groene fabriekjes** van plantcellen. Hierin gebeurt **fotosynthese**: zonlicht wordt gebruikt om water + koolstofdioxide om te zetten in **glucose** (suiker) en **zuurstof**.\n\n**Reactie fotosynthese**:\n• water + CO₂ + zonlicht → glucose + O₂\n\nChloroplasten bevatten **bladgroen** *(chlorofyl)* — dat is de stof die zonlicht opvangt en planten hun groene kleur geeft.\n\n**Belangrijk**:\n• Alleen **plantcellen** en algen hebben chloroplasten.\n• Dieren (en mensen) krijgen hun energie uit voedsel — wij hebben geen chloroplasten.\n• De zuurstof die wij inademen, is grotendeels door chloroplasten gemaakt.\n\nNet als mitochondriën hebben chloroplasten eigen DNA en zijn ze waarschijnlijk ooit zelfstandige bacteriën geweest.",
    svg: `<svg viewBox="0 0 300 200">
<ellipse cx="150" cy="100" rx="120" ry="80" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="2"/>
<rect x="60" y="20" width="180" height="160" rx="20" fill="none" stroke="${COLORS.wall}" stroke-width="3" opacity="0.4"/>
<g>
<ellipse cx="100" cy="80" rx="22" ry="11" fill="${COLORS.chloro}" opacity="0.55" stroke="${COLORS.chloro}" stroke-width="1.5"/>
<circle cx="92" cy="80" r="2.5" fill="#1b5e20"/>
<circle cx="100" cy="78" r="2.5" fill="#1b5e20"/>
<circle cx="108" cy="80" r="2.5" fill="#1b5e20"/>
<ellipse cx="195" cy="120" rx="22" ry="11" fill="${COLORS.chloro}" opacity="0.55" stroke="${COLORS.chloro}" stroke-width="1.5"/>
<circle cx="187" cy="120" r="2.5" fill="#1b5e20"/>
<circle cx="195" cy="118" r="2.5" fill="#1b5e20"/>
<circle cx="203" cy="120" r="2.5" fill="#1b5e20"/>
</g>
<circle cx="155" cy="100" r="16" fill="${COLORS.nucleus}" opacity="0.4"/>
<text x="155" y="195" text-anchor="middle" fill="${COLORS.chloro}" font-size="11" font-family="Arial" font-weight="bold">chloroplasten = fotosynthese ☀️</text>
</svg>`,
    checks: [
      {
        q: "Wat gebeurt er in chloroplasten?",
        options: [
          "Fotosynthese — zonlicht omzetten in suiker",
          "Energie verbranden",
          "DNA verdubbelen",
          "Voedsel verteren",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verbranden doen mitochondriën. Chloroplasten *maken* juist suiker.",
          "DNA verdubbelen gebeurt in de kern, vlak voor celdeling.",
          "Verteren doen lysosomen.",
        ],
      },
      {
        q: "Welke cel heeft chloroplasten?",
        options: ["Plantcel", "Huidcel", "Spiercel", "Zenuwcel"],
        answer: 0,
        wrongHints: [
          null,
          "Een huidcel zit op een dier — geen chloroplasten.",
          "Spiercellen zijn dierlijk.",
          "Zenuwcellen zijn dierlijk.",
        ],
      },
    ],
  },

  // ─── C. Plantcel, dierlijke cel & bacterie ───────────────
  {
    title: "Plantcel vs dierlijke cel — drie verschillen",
    explanation: "Plant- en dierlijke cellen lijken erg op elkaar (beide hebben kern, mitochondriën, cytoplasma, celmembraan), maar er zijn **drie grote verschillen**:\n\n| | Plantcel | Dierlijke cel |\n|---|---|---|\n| Celwand (cellulose) | ✅ | ❌ |\n| Chloroplasten | ✅ | ❌ |\n| Grote vacuole | ✅ (één grote) | ❌ (kleine of geen) |\n\n**Celwand** = stevige buitenwand van cellulose. Geeft de plant zijn vorm — daarom kan een boomstam staan. Dieren bewegen, dus zij hebben een flexibel celmembraan zonder stevige wand.\n\n**Chloroplasten** = plantcellen maken hun eigen voedsel via fotosynthese. Dieren eten andere organismen, dus hebben dat niet nodig.\n\n**Vacuole** = grote vloeistofzak in de plantcel die het cytoplasma 'opspant' tegen de celwand (zodat de plant rechtop staat). Wanneer een plant verlept, is de vacuole leeg.\n\n**Geheugentruc**: \"PCV is plant\" — Plantcel = Celwand + Chloroplasten + Vacuole.",
    svg: `<svg viewBox="0 0 320 200">
<text x="80" y="20" text-anchor="middle" fill="${COLORS.chloro}" font-size="12" font-family="Arial" font-weight="bold">plantcel</text>
<rect x="20" y="30" width="120" height="150" rx="6" fill="none" stroke="${COLORS.wall}" stroke-width="3"/>
<rect x="24" y="34" width="112" height="142" rx="3" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1.5"/>
<rect x="34" y="80" width="92" height="60" rx="6" fill="${COLORS.vacuole}" opacity="0.35" stroke="${COLORS.vacuole}" stroke-width="1"/>
<text x="80" y="115" text-anchor="middle" fill="${COLORS.vacuole}" font-size="10" font-family="Arial">vacuole</text>
<circle cx="60" cy="55" r="10" fill="${COLORS.nucleus}" opacity="0.55"/>
<ellipse cx="106" cy="55" rx="13" ry="6" fill="${COLORS.chloro}" opacity="0.55"/>
<ellipse cx="65" cy="160" rx="13" ry="6" fill="${COLORS.chloro}" opacity="0.55"/>
<text x="240" y="20" text-anchor="middle" fill="${COLORS.altSoft}" font-size="12" font-family="Arial" font-weight="bold">dierlijke cel</text>
<ellipse cx="240" cy="105" rx="60" ry="68" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="2"/>
<circle cx="225" cy="90" r="13" fill="${COLORS.nucleus}" opacity="0.55"/>
<ellipse cx="265" cy="120" rx="13" ry="6" fill="${COLORS.mito}" opacity="0.55"/>
<ellipse cx="225" cy="135" rx="13" ry="6" fill="${COLORS.mito}" opacity="0.55"/>
</svg>`,
    checks: [
      {
        q: "Welk celdeel heeft een **plantcel** wél maar een **dierlijke cel** niet?",
        options: ["Celwand", "Celkern", "Mitochondriën", "Celmembraan"],
        answer: 0,
        wrongHints: [
          null,
          "Beide hebben een celkern.",
          "Beide hebben mitochondriën.",
          "Beide hebben een celmembraan.",
        ],
      },
      {
        q: "Een plant verwelkt. Wat is er gebeurd?",
        options: [
          "De vacuole is leeg, de cellen zijn niet meer opgespannen",
          "De celkern is verdwenen",
          "Er zijn geen mitochondriën meer",
          "De celwand is afgebroken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De cel zou dan dood zijn. Verlepte planten herstellen vaak nog met water.",
          "Dan zou de cel dood zijn — verwelken is omkeerbaar.",
          "Dan zou de plant uit elkaar vallen.",
        ],
      },
    ],
  },
  {
    title: "Twee cellen vergelijken — overzicht",
    explanation: "Tijd om alle celdelen op een rij te zetten. Dit zijn de **organellen** die je tot nu toe geleerd hebt:\n\n| Onderdeel | Plantcel | Dierlijke cel | Functie |\n|---|---|---|---|\n| Celkern | ✅ | ✅ | Bevat DNA |\n| Cytoplasma | ✅ | ✅ | Vloeistof binnenin |\n| Celmembraan | ✅ | ✅ | Selectief vlies |\n| Mitochondriën | ✅ | ✅ | Energie maken |\n| Celwand | ✅ | ❌ | Stevigheid (cellulose) |\n| Chloroplasten | ✅ | ❌ | Fotosynthese (suiker) |\n| Grote vacuole | ✅ | ❌ | Plant overeind houden |\n\n**Manier om het te onthouden**: alles wat boven 'celwand' staat = bij beide. De drie onderaan = alleen plant.\n\n**Bonus-organellen** (kort, voor verdieping):\n• **Ribosomen** — maken eiwitten (in beide cellen).\n• **Endoplasmatisch reticulum** — netwerk waar eiwitten worden vervoerd.\n• **Lysosomen** — verteren afval (vooral in dierlijke cellen).\n• **Vacuole klein** — opslag (in dierlijke cellen).",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">overzicht: PCV = alleen plant</text>
<text x="20" y="50" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">Plant + Dier:</text>
<text x="20" y="70" fill="${COLORS.text}" font-size="11" font-family="Arial">• kern, cytoplasma, celmembraan</text>
<text x="20" y="86" fill="${COLORS.text}" font-size="11" font-family="Arial">• mitochondriën, ribosomen</text>
<line x1="20" y1="100" x2="280" y2="100" stroke="${COLORS.muted}" stroke-width="0.5" stroke-dasharray="3"/>
<text x="20" y="124" fill="${COLORS.chloro}" font-size="12" font-family="Arial" font-weight="bold">Alleen plant (PCV):</text>
<text x="20" y="144" fill="${COLORS.chloro}" font-size="11" font-family="Arial">• Celwand</text>
<text x="20" y="160" fill="${COLORS.chloro}" font-size="11" font-family="Arial">• Chloroplasten</text>
<text x="20" y="176" fill="${COLORS.chloro}" font-size="11" font-family="Arial">• grote Vacuole</text>
</svg>`,
    checks: [
      {
        q: "Welke combinatie hoort *alléén* bij plantcellen?",
        options: [
          "Celwand, chloroplasten, grote vacuole",
          "Celkern, mitochondriën, celmembraan",
          "Cytoplasma, celkern, ribosomen",
          "Lysosomen, mitochondriën, kern",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Die hebben dierlijke cellen óók.",
          "Die hebben dierlijke cellen óók.",
          "Lysosomen zitten juist vooral in dierlijke cellen.",
        ],
      },
      {
        q: "Welke functie hoort bij **mitochondriën**?",
        options: [
          "Energie maken (verbranding)",
          "Stevigheid (cellulose)",
          "Fotosynthese (zonlicht)",
          "DNA bewaren",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Stevigheid = celwand.",
          "Fotosynthese = chloroplasten.",
          "DNA = celkern.",
        ],
      },
    ],
  },
  {
    title: "Bacteriecel — de kernloze",
    explanation: "**Bacteriën** zijn een aparte groep. Ze zijn **eencellig** en hun cel is anders dan plant/dier:\n\n**Verschillen**:\n• **Geen celkern** — DNA zweeft los in een gebied dat *nucleoïde* heet.\n• **Geen mitochondriën** — energie wordt in het celmembraan gemaakt.\n• **Geen chloroplasten** (uitgezonderd cyanobacteriën, die kunnen wel fotosynthese).\n• **Geen 'echte' organellen met membraan**.\n• Wel: een **celwand** (van peptidoglycaan, niet cellulose), **celmembraan**, **cytoplasma**, **ribosomen** (kleiner dan in plant/dier).\n\nWegens dat ontbreken van een kern noemen we bacteriën **prokaryoot** *(\"voor-kern\")*. Plant en dier zijn **eukaryoot** *(\"echte kern\")*.\n\n**Goede bacteriën**: in je darmen, in yoghurt, in compostbakken.\n**Slechte bacteriën**: salmonella, bacteriën die infecties veroorzaken.\n\nGrootte: een bacterie is ~10× kleiner dan een dierlijke cel.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="60" y="50" width="180" height="80" rx="40" fill="${COLORS.cyto}" stroke="${COLORS.wall}" stroke-width="3"/>
<rect x="65" y="55" width="170" height="70" rx="35" fill="none" stroke="${COLORS.membrane}" stroke-width="1.5"/>
<path d="M 110 80 Q 130 70 150 88 Q 170 100 190 82" stroke="${COLORS.nucleus}" stroke-width="2" fill="none" stroke-dasharray="2"/>
<text x="150" y="105" text-anchor="middle" fill="${COLORS.nucleus}" font-size="10" font-family="Arial" font-style="italic">DNA (geen kern)</text>
<line x1="60" y1="90" x2="40" y2="90" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="40" y1="90" x2="40" y2="100" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="40" y1="100" x2="20" y2="100" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="20" y1="100" x2="20" y2="110" stroke="${COLORS.text}" stroke-width="1"/>
<text x="150" y="158" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">bacterie = prokaryoot</text>
<text x="150" y="174" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">geen kern, geen mitochondriën</text>
</svg>`,
    checks: [
      {
        q: "Wat heeft een bacteriecel **niet**?",
        options: ["Een celkern", "Een celmembraan", "Cytoplasma", "DNA"],
        answer: 0,
        wrongHints: [
          null,
          "Bacteriën hebben wél een celmembraan.",
          "Cytoplasma is de vloeistof binnenin — die heeft elke cel.",
          "DNA hebben bacteriën wel — alleen niet in een afgesloten kern.",
        ],
      },
      {
        q: "Welke groep is **prokaryoot**?",
        options: ["Bacteriën", "Planten", "Dieren", "Schimmels"],
        answer: 0,
        wrongHints: [
          null,
          "Planten zijn eukaryoot — ze hebben een celkern.",
          "Dieren zijn eukaryoot.",
          "Schimmels zijn eukaryoot.",
        ],
      },
    ],
  },

  // ─── D. Hoe groeit een organisme? ───────────────
  {
    title: "Celdeling — zo groeit een organisme",
    explanation: "Een baby is bij geboorte ongeveer 50 cm. Een volwassene is ~1,70 m. Hoe wordt iemand groter? Door **celdeling**: één cel splitst in twee, die twee delen weer in vier, enzovoort.\n\n**Stappen van een eenvoudige celdeling (mitose)**:\n1. **DNA verdubbelt** — er komen twee identieke kopieën in de kern.\n2. **DNA wordt verdeeld** — elke helft gaat naar een andere kant van de cel.\n3. **Cel knijpt zich af** — middenin ontstaat een scheidingswand.\n4. **Twee dochtercellen** — beide hebben dezelfde DNA als de moedercel.\n\n**Wanneer gebeurt het?**\n• Groei: kind wordt groter\n• Herstel: na een wond worden nieuwe huidcellen gemaakt\n• Vervanging: huidcellen, bloedcellen worden voortdurend vernieuwd\n\n**Belangrijk**: bij mitose krijg je **twee identieke** cellen. Bij voortplanting (mens) gaat het anders — daar krijg je geslachtscellen via *meiose*. Maar dat is voor later.",
    svg: `<svg viewBox="0 0 320 180">
<ellipse cx="50" cy="90" rx="30" ry="32" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1.5"/>
<circle cx="50" cy="90" r="10" fill="${COLORS.nucleus}" opacity="0.7"/>
<text x="50" y="150" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">moedercel</text>
<text x="100" y="92" fill="${COLORS.alt}" font-size="14" font-family="Arial">→</text>
<ellipse cx="155" cy="90" rx="38" ry="32" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1.5"/>
<circle cx="140" cy="90" r="10" fill="${COLORS.nucleus}" opacity="0.7"/>
<circle cx="170" cy="90" r="10" fill="${COLORS.nucleus}" opacity="0.7"/>
<text x="155" y="150" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">DNA verdeeld</text>
<text x="210" y="92" fill="${COLORS.alt}" font-size="14" font-family="Arial">→</text>
<ellipse cx="245" cy="90" rx="20" ry="28" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1.5"/>
<circle cx="245" cy="90" r="9" fill="${COLORS.nucleus}" opacity="0.7"/>
<ellipse cx="285" cy="90" rx="20" ry="28" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1.5"/>
<circle cx="285" cy="90" r="9" fill="${COLORS.nucleus}" opacity="0.7"/>
<text x="265" y="150" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">2 dochtercellen</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel cellen krijg je na één celdeling, als je begint met één cel?",
        options: ["2", "1", "4", "8"],
        answer: 0,
        wrongHints: [
          null,
          "Één cel splitst in twee. Eindigen op één betekent dat er niets gebeurd is.",
          "Vier krijg je pas na twee delingen achter elkaar.",
          "Acht krijg je pas na drie delingen.",
        ],
      },
      {
        q: "Wat moet er **vóór** celdeling gebeuren?",
        options: [
          "Het DNA wordt verdubbeld",
          "De cel groeit tot 2× zo groot",
          "Het DNA wordt afgebroken",
          "Het celmembraan verdwijnt",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De cel groeit ook, maar dat is niet het belangrijkste — de twee dochtercellen moeten allebei volledig DNA krijgen.",
          "Dan krijgen de dochtercellen geen DNA. Dat is fataal voor de cel.",
          "Het celmembraan blijft juist bestaan.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ───────────────
  {
    title: "Eindopdracht — alles op een rij",
    explanation: "Tijd om alles te combineren! Bij elke vraag: bedenk welk type cel het is en welk celdeel het hoort.\n\n**Snelle checklist**:\n• Heeft het een celwand? → plant of bacterie.\n• Heeft het chloroplasten? → plant.\n• Heeft het géén kern? → bacterie.\n• Maakt het zelf voedsel met zonlicht? → plant (chloroplast).\n• Verbrandt het glucose voor energie? → mitochondriën.\n• Slaat DNA op? → kern.\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="24" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">eindopdracht — combineer alles</text>
<text x="20" y="58" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Welk type cel?</text>
<text x="20" y="78" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Welk organel hoort bij welke functie?</text>
<text x="20" y="98" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Plant of dier?</text>
<text x="20" y="118" fill="${COLORS.text}" font-size="11" font-family="Arial">4. Eencellig of meercellig?</text>
<text x="150" y="178" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "Een cel zonder kern, met een celwand van peptidoglycaan. Wat is het?",
        options: ["Bacterie", "Plantcel", "Dierlijke cel", "Schimmel"],
        answer: 0,
        wrongHints: [
          null,
          "Plantcellen hebben wél een kern, en hun celwand is van cellulose, niet peptidoglycaan.",
          "Dierlijke cellen hebben helemaal geen celwand.",
          "Schimmels zijn eukaryoot — ze hebben een kern.",
        ],
      },
      {
        q: "Welk organel maakt suiker uit zonlicht?",
        options: ["Chloroplast", "Mitochondrium", "Kern", "Lysosoom"],
        answer: 0,
        wrongHints: [
          null,
          "Mitochondriën *verbranden* suiker, ze *maken* die niet.",
          "De kern slaat DNA op — geen voedsel.",
          "Een lysosoom verteert afval — niet maakt voedsel.",
        ],
      },
      {
        q: "Een cel heeft géén celwand maar wél een celkern en mitochondriën. Wat is het?",
        options: ["Dierlijke cel", "Plantcel", "Bacterie", "Virus"],
        answer: 0,
        wrongHints: [
          null,
          "Plantcellen hebben juist wél een celwand.",
          "Bacteriën hebben wél een celwand én geen kern.",
          "Een virus is geen cel.",
        ],
      },
      {
        q: "Welke beweringen klopt over **mitochondriën**?",
        options: [
          "Ze zitten in zowel plant- als dierlijke cellen en maken energie",
          "Ze zitten alleen in plantcellen",
          "Ze maken zuurstof",
          "Ze zijn hetzelfde als de celkern",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Mitochondriën zitten in beide. Chloroplasten zijn alleen in planten.",
          "Mitochondriën *gebruiken* juist zuurstof. Chloroplasten *maken* zuurstof.",
          "Kern en mitochondrium zijn verschillende organellen.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const celBiologie = {
  id: "cel-biologie",
  title: "De cel — bouwsteen van het leven",
  emoji: "🔬",
  level: "klas1-3",
  subject: "biologie",
  intro:
    "Wat is een cel, en waar bestaat hij uit? Van eencelligen tot mensen, van celkern tot mitochondriën, plus de drie verschillen tussen plant- en dierlijke cellen. Eerste leerpad biologie onderbouw.",
  triggerKeywords: [
    "cel", "cellen", "organel", "organellen",
    "celkern", "kern", "nucleus", "dna in de cel",
    "cytoplasma", "celmembraan", "celwand",
    "mitochondrium", "mitochondrien", "mitochondriën",
    "chloroplast", "chloroplasten", "fotosynthese",
    "vacuole", "ribosoom",
    "plantcel", "dierlijke cel", "bacteriecel",
    "eukaryoot", "prokaryoot",
    "celdeling", "mitose",
    "biologie cel", "bouwsteen leven",
  ],
  chapters,
  steps,
};

export default celBiologie;
