// Leerpad: Werkwoordsvervoeging — d/t in Nederlands (klas 1-2)
// 14 stappen in 5 hoofdstukken (A t/m E).
// Tone: praktisch, met heel veel voorbeelden uit gewone zinnen.

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
};

const stepEmojis = [
  "📖", "🌱", "🔍",                // A. Werkwoord & stam
  "🙋", "👉", "👥",                // B. Tegenwoordige tijd
  "💪", "⛵", "🎁",                // C. 't Kofschip
  "🤔", "⚖️", "🧩",                // D. Beruchte instinkers
  "🎓", "🏆",                       // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Werkwoord & stam", emoji: "🌱", from: 0, to: 2 },
  { letter: "B", title: "Tegenwoordige tijd", emoji: "🗓️", from: 3, to: 5 },
  { letter: "C", title: "Verleden tijd & voltooid: 't kofschip", emoji: "⛵", from: 6, to: 8 },
  { letter: "D", title: "Beruchte instinkers", emoji: "🤔", from: 9, to: 11 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 12, to: 13 },
];

const steps = [
  // ─── A. Werkwoord & stam ──────────────────────────────
  {
    title: "Wat is een werkwoord?",
    explanation: "Een **werkwoord** is een woord dat zegt **wat iemand of iets doet** — of **is** of **wordt**.\n\n**Voorbeelden** (de werkwoorden zijn dik gedrukt):\n• Ik **fiets** naar school.\n• Sara **leest** een boek.\n• De hond **slaapt**.\n• Wij **zijn** thuis.\n• Het **wordt** koud.\n\nWerkwoorden veranderen van vorm — afhankelijk van **wie** iets doet en **wanneer** het gebeurt. Daarom moeten we ze leren **vervoegen**.\n\nDe **hele werkwoord** (de naam ervan) eindigt meestal op **-en**: lopen, fietsen, lezen, slapen, koken.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="260" height="40" rx="8" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="40" y="65" fill="${COLORS.text}" font-size="14" font-family="Arial">Sara</text>
<rect x="78" y="48" width="58" height="26" rx="6" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="107" y="66" text-anchor="middle" fill="${COLORS.good}" font-size="14" font-family="Arial" font-weight="bold">leest</text>
<text x="148" y="65" fill="${COLORS.text}" font-size="14" font-family="Arial">een boek.</text>
<rect x="20" y="100" width="260" height="40" rx="8" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="40" y="125" fill="${COLORS.text}" font-size="14" font-family="Arial">De hond</text>
<rect x="106" y="108" width="68" height="26" rx="6" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="140" y="126" text-anchor="middle" fill="${COLORS.good}" font-size="14" font-family="Arial" font-weight="bold">slaapt</text>
<text x="186" y="125" fill="${COLORS.text}" font-size="14" font-family="Arial">.</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">het werkwoord = wat iemand doet</text>
</svg>`,
    checks: [
      {
        q: "Welk woord in deze zin is het werkwoord? — *De kat drinkt melk.*",
        options: ["drinkt", "kat", "melk", "de"],
        answer: 0,
        wrongHints: [
          null,
          "Een kat is iets, geen actie. Welk woord vertelt wat de kat *doet*?",
          "Melk is een ding. Wat doet de kat met de melk?",
          "Een lidwoord. Zoek het woord dat een **actie** beschrijft.",
        ],
      },
      {
        q: "Welk woord is hier het werkwoord? — *Mijn broertje wordt zes jaar.*",
        options: ["wordt", "broertje", "zes", "jaar"],
        answer: 0,
        wrongHints: [
          null,
          "Broertje is een persoon. Welk woord beschrijft wat er met hem **gebeurt**?",
          "Een getal. Werkwoorden zijn nooit getallen — zoek het woord dat een **verandering** aangeeft.",
          "Een tijdsaanduiding. Welk woord zegt wat er verandert?",
        ],
      },
    ],
  },
  {
    title: "De stam — basis van de vervoeging",
    explanation: "De **stam** is het basisdeel van een werkwoord — zonder uitgang. Bijna alle d/t-regels werken vanuit de stam.\n\n**Hoe vind je de stam?**\n1. Neem het hele werkwoord (lopen, werken, fietsen, koken).\n2. Haal **-en** eraf.\n3. Wat overblijft is de stam.\n\n**Voorbeelden**:\n• lop**en** → stam = **loop** *(let op: dubbele o, want de o moet lang blijven klinken)*\n• werk**en** → stam = **werk**\n• fiets**en** → stam = **fiets**\n• kok**en** → stam = **kook**\n• red**den** → stam = **red** *(dubbele d wordt enkel)*\n\n**Truc**: de stam is meestal hetzelfde als de **ik-vorm**:\n• \"ik loop\", \"ik werk\", \"ik fiets\", \"ik kook\", \"ik red\".",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="40" fill="${COLORS.text}" font-size="14" font-family="Arial">hele werkwoord:</text>
<rect x="160" y="22" width="100" height="28" rx="6" fill="rgba(255,213,79,0.18)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="210" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="15" font-family="Arial" font-weight="bold">werken</text>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.alt}" font-size="14" font-family="Arial">↓ haal -en eraf</text>
<text x="55" y="120" fill="${COLORS.text}" font-size="14" font-family="Arial">stam:</text>
<rect x="160" y="102" width="100" height="28" rx="6" fill="rgba(0,200,83,0.20)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="210" y="122" text-anchor="middle" fill="${COLORS.good}" font-size="15" font-family="Arial" font-weight="bold">werk</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">stam = ik-vorm = werk</text>
</svg>`,
    checks: [
      {
        q: "Wat is de stam van **fietsen**?",
        options: ["fiets", "fietst", "fietsen", "fie"],
        answer: 0,
        wrongHints: [
          null,
          "Daar zit een -t bij. Bij de stam haal je alleen -en eraf — geen letters toevoegen.",
          "Dat is het hele werkwoord. Haal -en eraf.",
          "Te kort. Haal alleen -en eraf, niet meer.",
        ],
      },
      {
        q: "Wat is de stam van **koken**?",
        options: ["kook", "kok", "koken", "kookt"],
        answer: 0,
        wrongHints: [
          null,
          "De o moet lang blijven klinken. Wat moet je dan met de o doen als je -en eraf haalt?",
          "Dat is het hele werkwoord. Haal -en eraf — denk aan de klank van de o.",
          "Bij de stam komt nooit een -t. Die hoort bij de vervoeging.",
        ],
      },
    ],
  },
  {
    title: "Persoonsvorm vinden in een zin",
    explanation: "De **persoonsvorm** (afgekort: pv) is het werkwoord dat **vervoegd** is — dus dat past bij wie het doet (ik / jij / hij / wij...).\n\n**Drie trucs om de pv te vinden**:\n\n**Truc 1 — Maak van de zin een vraag**: het werkwoord dat naar voren springt is de pv.\n• Sara **leest** een boek. → *Leest Sara een boek?* → **leest** = pv.\n• De hond is gevlucht. → *Is de hond gevlucht?* → **is** = pv.\n\n**Truc 2 — Verander de tijd**: het werkwoord dat verandert is de pv.\n• Hij werkt hard. → Hij **werkte** hard. → **werkt/werkte** = pv.\n\n**Truc 3 — Verander het getal** (1 → meer): het werkwoord dat verandert is de pv.\n• De jongen **rent**. → De jongens **rennen**. → **rent** = pv.\n\nDe persoonsvorm is dus het werkwoord dat *meebeweegt* met wie/wanneer/hoeveel.",
    svg: `<svg viewBox="0 0 300 200">
<text x="20" y="40" fill="${COLORS.text}" font-size="13" font-family="Arial">Sara leest een boek.</text>
<text x="20" y="65" fill="${COLORS.alt}" font-size="13" font-family="Arial">↓ vraag maken</text>
<text x="20" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">
<tspan fill="${COLORS.good}" font-weight="bold">Leest</tspan> Sara een boek?
</text>
<line x1="20" y1="105" x2="280" y2="105" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="20" y="130" fill="${COLORS.text}" font-size="13" font-family="Arial">Hij werkt hard.</text>
<text x="20" y="155" fill="${COLORS.alt}" font-size="13" font-family="Arial">↓ tijd veranderen</text>
<text x="20" y="180" fill="${COLORS.text}" font-size="13" font-family="Arial">
Hij <tspan fill="${COLORS.good}" font-weight="bold">werkte</tspan> hard.
</text>
</svg>`,
    checks: [
      {
        q: "Wat is de persoonsvorm? — *Mijn vader bakt elke zondag pannenkoeken.*",
        options: ["bakt", "vader", "pannenkoeken", "zondag"],
        answer: 0,
        wrongHints: [
          null,
          "Vader is een persoon, niet een werkwoord. Welk woord verandert als je de zin in vraagvorm zet?",
          "Pannenkoeken zijn dingen. Zoek het woord dat een actie aangeeft én verandert per persoon.",
          "Dit is een tijdsaanduiding. Doe de truc: maak er een vraag van — welk woord springt naar voren?",
        ],
      },
    ],
  },

  // ─── B. Tegenwoordige tijd ────────────────────────────
  {
    title: "Ik — de stam, zonder t",
    explanation: "Bij **ik** in de tegenwoordige tijd schrijf je **alleen de stam**. Geen t. Geen extra letters.\n\n**Voorbeelden**:\n• ik **werk** (stam = werk)\n• ik **fiets** (stam = fiets — eindigt al op t van zichzelf!)\n• ik **antwoord** (stam = antwoord — eindigt al op d!)\n• ik **vind** (stam = vind)\n• ik **word** (stam = word)\n\n**Let op de instinker**: bij \"ik fiets\" is die -t **niet** de t-uitgang, maar gewoon onderdeel van het woord zelf.\n\nVergelijk:\n• ik fiets / jij fiets**t** — hier zie je het verschil: de jij-vorm krijgt de t **erbij**.\n• ik antwoord / jij antwoord**t** — zelfde idee.\n\n**Regel**: bij **ik** = altijd de stam. Niets toevoegen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="30" width="260" height="50" rx="8" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.good}" font-size="16" font-family="Arial" font-weight="bold">ik = stam</text>
<text x="150" y="73" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">geen t toevoegen</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="13" font-family="Arial">ik werk</text>
<text x="40" y "130" fill="${COLORS.text}" font-size="13" font-family="Arial">ik fiets</text>
<text x="40" y="150" fill="${COLORS.text}" font-size="13" font-family="Arial">ik antwoord</text>
<text x="40" y="170" fill="${COLORS.text}" font-size="13" font-family="Arial">ik vind</text>
<text x="180" y="110" fill="${COLORS.alt}" font-size="11" font-family="Arial">stam: werk</text>
<text x="180" y="130" fill="${COLORS.alt}" font-size="11" font-family="Arial">stam: fiets ← al -t</text>
<text x="180" y="150" fill="${COLORS.alt}" font-size="11" font-family="Arial">stam: antwoord ← al -d</text>
<text x="180" y="170" fill="${COLORS.alt}" font-size="11" font-family="Arial">stam: vind</text>
</svg>`,
    checks: [
      {
        q: "Welke vorm is correct? — *Ik ___ elke dag naar school.*  (werkwoord: lopen)",
        options: ["loop", "loopt", "loopen", "lopen"],
        answer: 0,
        wrongHints: [
          null,
          "De -t hoort bij jij/hij/zij. Bij **ik** komt er **geen** uitgang bij de stam.",
          "Een dubbele -oo plus -en is geen vorm. Bedenk: stam = lop**en** → ?",
          "Dat is het hele werkwoord. Bij ik gebruik je alleen de stam.",
        ],
      },
      {
        q: "Welke vorm is correct? — *Ik ___ je bericht net binnen.*  (werkwoord: krijgen)",
        options: ["krijg", "krijgt", "krijgen", "krijgd"],
        answer: 0,
        wrongHints: [
          null,
          "Bij **ik** komt er nooit -t bij. Wat is de stam van krijgen?",
          "Hele werkwoord = niet bij \"ik\" gebruiken. Haal -en eraf.",
          "-d achter de stam bestaat niet bij ik in de tegenwoordige tijd. Stam alleen!",
        ],
      },
    ],
  },
  {
    title: "Jij / hij / zij / het — stam + t",
    explanation: "Bij **jij**, **u**, **hij**, **zij**, **het** (één persoon, niet ik) krijgt het werkwoord een **-t** achter de stam.\n\n**Formule**: stam + **t**\n\n**Voorbeelden**:\n• jij **werkt** (stam werk + t)\n• hij **loopt** (stam loop + t)\n• zij **kookt** (stam kook + t)\n• het **regent** (stam regen + t)\n\n**Belangrijke uitzondering — als de stam al op een t eindigt**: geen extra -t!\n• jij fiets**t**? → stam = fiets, eindigt al op t. Maar je schrijft toch fietst! Eigenlijk is de regel: stam **klinkt** met t aan het eind, dus je voegt geen tweede -t toe.\n\nWacht — je ziet hier wél fiets**t** met een t. Dat klopt: bij \"jij fiets\" zou je geen verschil horen tussen ik-vorm en jij-vorm. Het Nederlands schrijft daarom toch fiets**t** (één t per stam-eind, geen dubbele).\n\n**Nog beter te onthouden**:\n• stam eindigt op andere letter → +t (werk → werkt, loop → loopt)\n• stam eindigt op -t → blijft één t (fiets → fietst, weet → weet, eet → eet)\n\n**Vraag-omkering** (de pv komt vóór de jij): dan **geen** -t achter de stam.\n• Jij werkt. → **Werk** jij?\n• Jij loopt. → **Loop** jij?",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="20" width="260" height="40" rx="8" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="150" y="45" text-anchor="middle" fill="${COLORS.good}" font-size="16" font-family="Arial" font-weight="bold">jij/hij/zij/het = stam + t</text>
<text x="40" y="85" fill="${COLORS.text}" font-size="13" font-family="Arial">jij werk + t</text>
<text x="200" y="85" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">→ werkt</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="13" font-family="Arial">hij loop + t</text>
<text x="200" y="110" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">→ loopt</text>
<text x="40" y="135" fill="${COLORS.text}" font-size="13" font-family="Arial">zij fiets (al -t)</text>
<text x="200" y="135" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">→ fietst</text>
<text x="20" y="170" fill="${COLORS.alt}" font-size="11" font-family="Arial">vraag-omkering: Werk jij? (geen -t)</text>
</svg>`,
    checks: [
      {
        q: "Welke vorm? — *Hij ___ in de tuin.*  (werkwoord: spelen)",
        options: ["speelt", "speel", "spelen", "speeld"],
        answer: 0,
        wrongHints: [
          null,
          "Bij **hij** komt er een -t bij de stam. Welke letter mist nog?",
          "Dat is het hele werkwoord. Bij hij/zij/het: stam + ?",
          "Bij tegenwoordige tijd komt er nooit een -d. Dat hoort bij verleden tijd.",
        ],
      },
      {
        q: "Welke vorm? — *___ jij ook mee?*  (werkwoord: gaan)",
        options: ["Ga", "Gaat", "Gaan", "Gaad"],
        answer: 0,
        wrongHints: [
          null,
          "Bij **vraag-omkering** (pv vóór 'jij') geldt: geen -t achter de stam!",
          "Hele werkwoord past niet hier. En bij vraag-omkering: stam zonder uitgang.",
          "-d in tegenwoordige tijd bestaat niet. En bij omkering: alleen de stam.",
        ],
      },
    ],
  },
  {
    title: "Wij / jullie / zij — hele werkwoord",
    explanation: "Bij **wij**, **jullie**, **zij** (meervoud) gebruik je het **hele werkwoord** — gewoon de infinitief, eindigend op -en.\n\n**Voorbeelden**:\n• wij **werken**\n• jullie **lopen**\n• zij **koken**\n• wij **fietsen**\n• jullie **antwoorden**\n\n**Compleet schema tegenwoordige tijd** (werkwoord: werken):\n\n| persoon | vorm |\n|---------|------|\n| ik | werk |\n| jij / u / hij / zij / het | werkt |\n| wij / jullie / zij (mv) | werken |\n\n**Geheugensteun**: alleen bij **één persoon, niet ik** komt er een -t bij. In alle andere gevallen: stam (ik) of hele werkwoord (meervoud).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="44" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">tegenwoordige tijd: werken</text>
<line x1="30" y1="55" x2="270" y2="55" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="40" y="80" fill="${COLORS.text}" font-size="13" font-family="Arial">ik</text>
<text x="180" y="80" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">werk</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="13" font-family="Arial">jij / hij / zij / het</text>
<text x="180" y="110" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">werkt</text>
<text x="40" y="140" fill="${COLORS.text}" font-size="13" font-family="Arial">wij / jullie / zij</text>
<text x="180" y="140" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">werken</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">alleen 1 persoon (niet ik) krijgt -t</text>
</svg>`,
    checks: [
      {
        q: "Welke vorm? — *Wij ___ vanavond pizza.*  (werkwoord: bestellen)",
        options: ["bestellen", "bestelt", "bestel", "besteld"],
        answer: 0,
        wrongHints: [
          null,
          "-t hoort bij één persoon. \"Wij\" is meervoud — wat gebruik je dan?",
          "Dat is de ik-vorm. Bij \"wij\" gebruik je niet de stam.",
          "-d is een verleden-tijd-letter. Hier staat tegenwoordige tijd, en het is meervoud.",
        ],
      },
    ],
  },

  // ─── C. 't Kofschip ──────────────────────────────────
  {
    title: "Sterke en zwakke werkwoorden",
    explanation: "Werkwoorden komen in twee soorten:\n\n**Zwakke werkwoorden** — vervoegen volgens vaste regels, met -de of -te in de verleden tijd.\n• werken → werk**te**\n• fietsen → fiets**te**\n• horen → hoor**de**\n• spelen → speel**de**\n\n**Sterke werkwoorden** — veranderen van klinker (geen vaste regel, je moet ze leren).\n• lopen → **liep**\n• zingen → **zong**\n• eten → **at**\n• zien → **zag**\n• rijden → **reed**\n\n**Dit hoofdstuk gaat over zwakke werkwoorden** — daar speelt de d/t-vraag. Bij sterke werkwoorden is er geen d/t-keuze: je leert het gewoon.\n\n**Test of een werkwoord zwak is**: kun je er -de of -te achter zetten zonder dat het raar klinkt? Zo ja → zwak. Zo nee → sterk.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="30" width="125" height="140" rx="8" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="82" y="50" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">ZWAK</text>
<text x="82" y="68" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">+ de of te</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">werken → werkte</text>
<text x="35" y="111" fill="${COLORS.text}" font-size="11" font-family="Arial">horen → hoorde</text>
<text x="35" y="130" fill="${COLORS.text}" font-size="11" font-family="Arial">spelen → speelde</text>
<text x="35" y "149" fill="${COLORS.text}" font-size="11" font-family="Arial">fietsen → fietste</text>
<rect x="155" y="30" width="125" height="140" rx="8" fill="rgba(255,112,67,0.10)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="217" y="50" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">STERK</text>
<text x="217" y="68" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">klinker verandert</text>
<text x="170" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">lopen → liep</text>
<text x="170" y="111" fill="${COLORS.text}" font-size="11" font-family="Arial">zingen → zong</text>
<text x="170" y="130" fill="${COLORS.text}" font-size="11" font-family="Arial">eten → at</text>
<text x="170" y "149" fill="${COLORS.text}" font-size="11" font-family="Arial">zien → zag</text>
</svg>`,
    checks: [
      {
        q: "Welk werkwoord is **sterk**?",
        options: ["zingen", "werken", "fietsen", "koken"],
        answer: 0,
        wrongHints: [
          null,
          "Werken → werkte. Past -te erachter? Dan is het zwak.",
          "Fietsen → fietste. Past dat? Dan is het niet sterk.",
          "Koken → kookte. Past -te erachter? Dan is het zwak. Zoek het woord waar de klinker verandert.",
        ],
      },
    ],
  },
  {
    title: "Het 't kofschip — wanneer t, wanneer d?",
    explanation: "Voor de **verleden tijd** van zwakke werkwoorden moet je weten: krijgt het stam + **te(n)** of stam + **de(n)**?\n\n**Het 't kofschip** geeft je het antwoord. Onthoud dit ezelsbruggetje:\n\n## **'t k o f s ch p**\n\nDit zijn de letters: **t, k, f, s, ch, p**.\n\n**Regel**: eindigt de stam op één van deze letters? → **te(n)**. Anders → **de(n)**.\n\n**Voorbeelden** (verleden tijd, ik-vorm):\n• werken → stam = wer**k** → k zit in 't kofschip → wer**kte**\n• kloppen → stam = klo**p** → p zit erin → klo**pte**\n• fietsen → stam = fiet**s** → s zit erin → fiet**ste**\n• lachen → stam = lac**h** (klank: ch) → ch zit erin → lac**hte**\n• horen → stam = hoo**r** → r zit **niet** in 't kofschip → hoor**de**\n• spelen → stam = spee**l** → l zit er niet in → speel**de**\n\n**Truc om te onthouden**: noem de zes letters **hardop** voordat je beslist.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="20" width="260" height="50" rx="8" fill="rgba(255,213,79,0.18)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="45" text-anchor="middle" fill="${COLORS.warm}" font-size="20" font-family="Arial" font-weight="bold">'t  k  o  f  s  ch  p</text>
<text x="150" y="62" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ stam eindigt op één hiervan? → +te</text>
<text x="35" y="100" fill="${COLORS.text}" font-size="12" font-family="Arial">werken → wer<tspan fill="${COLORS.good}" font-weight="bold">k</tspan> → werk<tspan fill="${COLORS.good}" font-weight="bold">te</tspan></text>
<text x="35" y "120" fill="${COLORS.text}" font-size="12" font-family="Arial">fietsen → fiet<tspan fill="${COLORS.good}" font-weight="bold">s</tspan> → fiets<tspan fill="${COLORS.good}" font-weight="bold">te</tspan></text>
<text x="35" y="140" fill="${COLORS.text}" font-size="12" font-family="Arial">horen → hoo<tspan fill="${COLORS.alt}" font-weight="bold">r</tspan> → hoor<tspan fill="${COLORS.alt}" font-weight="bold">de</tspan></text>
<text x="35" y "160" fill="${COLORS.text}" font-size="12" font-family="Arial">spelen → spee<tspan fill="${COLORS.alt}" font-weight="bold">l</tspan> → speel<tspan fill="${COLORS.alt}" font-weight="bold">de</tspan></text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">letter in kofschip → te · niet erin → de</text>
</svg>`,
    checks: [
      {
        q: "Verleden tijd van **kloppen** (ik-vorm)?",
        options: ["klopte", "klopde", "klopt", "kloppen"],
        answer: 0,
        wrongHints: [
          null,
          "Stam = klop. Zit de **p** in 't kofschip? Toets: 't k o f s ch ___.",
          "Dat is tegenwoordige tijd. Verleden tijd krijgt -te of -de.",
          "Dat is het hele werkwoord. Verleden tijd ik-vorm: stam + ?",
        ],
      },
      {
        q: "Verleden tijd van **horen** (ik-vorm)?",
        options: ["hoorde", "hoorte", "hoort", "horen"],
        answer: 0,
        wrongHints: [
          null,
          "Stam = hoor. Zit de **r** in 't kofschip? Loop het rijtje langs.",
          "Tegenwoordige tijd, niet verleden. En r zit niet in 't kofschip.",
          "Hele werkwoord, niet vervoegd. Stam + uitgang voor de verleden tijd.",
        ],
      },
      {
        q: "Verleden tijd van **lachen** (ik-vorm)?",
        options: ["lachte", "lachde", "lachten", "lachde"],
        answer: 0,
        wrongHints: [
          null,
          "De stam eindigt op de klank **ch**. Staat ch in 't kofschip?",
          "Dit is meervoud. Vraag is naar ik-vorm.",
          "Twee keer dezelfde optie zou kunnen verwarren — kijk goed naar de letter na lach. Toets aan 't kofschip.",
        ],
      },
    ],
  },
  {
    title: "Voltooid deelwoord — ge- + stam + d/t",
    explanation: "Het **voltooid deelwoord** gebruik je na **hebben** of **zijn**: \"ik **heb** gewerkt\", \"hij **is** gefietst\".\n\n**Vorm**: **ge-** + stam + **d** of **t**.\n\n**Welke letter?** Weer 't kofschip!\n• Stam eindigt op letter uit kofschip → **t**\n• Stam eindigt op andere letter → **d**\n\n**Voorbeelden**:\n• werken → ge + werk + **t** → ik heb **gewerkt** (k zit in kofschip)\n• fietsen → ge + fiets + **t** → ik heb **gefietst** (s zit erin) — *let op: stam eindigt op t, dus geen dubbele t. Het wordt gewoon \"gefietst\".*\n• horen → ge + hoor + **d** → ik heb **gehoord** (r zit er niet in)\n• spelen → ge + speel + **d** → ik heb **gespeeld**\n• maken → ge + maak + **t** → ik heb **gemaakt** (k zit erin)\n\n**Onregelmatige werkwoorden**: krijgen meestal **ge- + ...-en**. Geen d/t-keuze nodig — leer ze los.\n• eten → **gegeten**\n• lopen → **gelopen**\n• zien → **gezien**\n• zijn → **geweest**\n\n**Stappenplan voor voltooid deelwoord van een zwak werkwoord**:\n1. Stam vinden\n2. **ge-** ervoor\n3. Stam-eindletter toetsen aan 't kofschip → t of d?\n4. Plakken!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="20" width="260" height="40" rx="8" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="150" y="45" text-anchor="middle" fill="${COLORS.good}" font-size="14" font-family="Arial" font-weight="bold">ge- + stam + d/t (kofschip)</text>
<text x="40" y="85" fill="${COLORS.text}" font-size="12" font-family="Arial">werken</text>
<text x="120" y="85" fill="${COLORS.muted}" font-size="12" font-family="Arial">→ ge + werk + </text>
<text x="220" y="85" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">t</text>
<text x="240" y="85" fill="${COLORS.muted}" font-size="12" font-family="Arial">(k!)</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="12" font-family="Arial">horen</text>
<text x="120" y="110" fill="${COLORS.muted}" font-size="12" font-family="Arial">→ ge + hoor + </text>
<text x="220" y="110" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">d</text>
<text x="240" y="110" fill="${COLORS.muted}" font-size="12" font-family="Arial">(r)</text>
<text x="40" y "135" fill="${COLORS.text}" font-size="12" font-family="Arial">maken</text>
<text x="120" y "135" fill="${COLORS.muted}" font-size="12" font-family="Arial">→ ge + maak + </text>
<text x="220" y="135" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">t</text>
<text x="240" y="135" fill="${COLORS.muted}" font-size="12" font-family="Arial">(k!)</text>
<text x="40" y "160" fill="${COLORS.text}" font-size="12" font-family="Arial">spelen</text>
<text x="120" y "160" fill="${COLORS.muted}" font-size="12" font-family="Arial">→ ge + speel + </text>
<text x="220" y="160" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">d</text>
<text x="240" y="160" fill="${COLORS.muted}" font-size="12" font-family="Arial">(l)</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">altijd: stam-eindletter ↔ kofschip</text>
</svg>`,
    checks: [
      {
        q: "Voltooid deelwoord van **maken**: ik heb het ___.",
        options: ["gemaakt", "gemaakd", "gemaak", "maakte"],
        answer: 0,
        wrongHints: [
          null,
          "Stam = maak, eindigt op **k**. Zit k in 't kofschip?",
          "Eerst toetsen aan 't kofschip. Welke letter is dat?",
          "Dat is verleden tijd, niet voltooid deelwoord. Voltooid begint met ge-.",
        ],
      },
      {
        q: "Voltooid deelwoord van **wonen**: ik heb in Utrecht ___.",
        options: ["gewoond", "gewoont", "gewond", "woonde"],
        answer: 0,
        wrongHints: [
          null,
          "Stam = woon. Zit de **n** in 't kofschip?",
          "Toets: 't k o f s ch p. Zit n erbij?",
          "Dat lijkt op een ander woord (gewond = verwond). Goed kijken naar de stam: woon → ge + woon + ?",
        ],
      },
    ],
  },

  // ─── D. Beruchte instinkers ───────────────────────────
  {
    title: "Worden / wordt — tegenwoordige tijd",
    explanation: "**worden** is heel vaak de bron van d/t-fouten. Toets gewoon de regels:\n\n**Stam van worden** = **word** (haal -en eraf).\n\n**Tegenwoordige tijd**:\n• ik **word** (stam, geen t)\n• jij **wordt** (stam + t)\n• hij/zij/het **wordt** (stam + t)\n• wij/jullie/zij **worden** (hele werkwoord)\n\n**Veelgemaakte fout**: \"ik wordt\" — fout! Bij ik komt **nooit** een -t. Het is altijd **ik word**.\n\n**Geheugensteun**: doe het truukje met \"lopen\":\n• ik loop / ik word ✓ (geen t)\n• hij loopt / hij wordt ✓ (met t)\n\nAls je twijfelt: vervang \"worden\" tijdelijk door **lopen** in dezelfde zin. Hoor je dan \"loop\" of \"loopt\"? Datzelfde patroon (geen t / wel t) geldt voor worden.\n\n**Voorbeelden**:\n• Ik **word** morgen 12. *(ik loop → ik word)*\n• Hij **wordt** morgen 12. *(hij loopt → hij wordt)*\n• **Word** ik nu boos? *(loop ik → word ik — vraag-omkering, geen t)*",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="20" width="260" height="40" rx="8" fill="rgba(255,213,79,0.18)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="40" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">truc: vervang door lopen</text>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">loop = word · loopt = wordt</text>
<text x="40" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">ik loop  →  ik </text>
<text x="160" y="90" fill="${COLORS.good}" font-size="14" font-family="Arial" font-weight="bold">word</text>
<text x="40" y "115" fill="${COLORS.text}" font-size="13" font-family="Arial">jij loopt → jij </text>
<text x="160" y="115" fill="${COLORS.good}" font-size="14" font-family="Arial" font-weight="bold">wordt</text>
<text x="40" y="140" fill="${COLORS.text}" font-size="13" font-family="Arial">hij loopt → hij </text>
<text x="160" y="140" fill="${COLORS.good}" font-size="14" font-family="Arial" font-weight="bold">wordt</text>
<text x="40" y "165" fill="${COLORS.text}" font-size="13" font-family="Arial">loop ik? → </text>
<text x="160" y="165" fill="${COLORS.good}" font-size="14" font-family="Arial" font-weight="bold">word</text>
<text x="200" y="165" fill="${COLORS.text}" font-size="13" font-family="Arial"> ik?</text>
</svg>`,
    checks: [
      {
        q: "*Ik ___ morgen 13 jaar.*",
        options: ["word", "wordt", "wort", "worden"],
        answer: 0,
        wrongHints: [
          null,
          "Bij **ik** komt er nooit een -t. Doe de truc: \"ik loop\"... met t of zonder?",
          "Niet bestaand woord. Toets: bij ik = stam zonder uitgang.",
          "Hele werkwoord. Bij \"ik\" gebruik je de stam.",
        ],
      },
      {
        q: "*Hij ___ steeds bozer.*",
        options: ["wordt", "word", "worden", "werd"],
        answer: 0,
        wrongHints: [
          null,
          "Bij **hij** komt er een -t bij de stam. Welke letter mist?",
          "Dat is meervoud. Hier gaat het om één persoon (hij).",
          "Verleden tijd — kan, maar de zin is in de tegenwoordige tijd (\"steeds\").",
        ],
      },
    ],
  },
  {
    title: "Gebeurt vs gebeurd — context bepaalt",
    explanation: "**gebeurt** en **gebeurd** klinken hetzelfde, maar betekenen iets anders.\n\n**gebeurt** (met -t) = tegenwoordige tijd, hij/zij/het + stam + t.\n• Stam = gebeur. \"hij/het gebeurt\".\n• Het **gebeurt** elke dag.\n• Wat **gebeurt** er?\n\n**gebeurd** (met -d) = voltooid deelwoord. Komt na een vorm van **zijn** (niet hebben).\n• Het is **gebeurd**.\n• Er is iets ergs **gebeurd**.\n\n**Hoe kies je?** Vervang \"gebeurt/gebeurd\" tijdelijk door **werkt / gewerkt**:\n• \"Wat gebeurt er?\" → \"Wat werkt er?\" → tegenwoordige tijd → **gebeurt** ✓\n• \"Het is gebeurd.\" → \"Het is gewerkt.\" → voltooid → **gebeurd** ✓\n\nHetzelfde geldt voor:\n• **vindt** vs **gevonden** — vindt = pv tt, gevonden = voltooid\n• **antwoordt** vs **geantwoord** — antwoordt = pv tt, geantwoord = voltooid\n• **gebeurt** vs **gebeurd**\n\n**Belangrijk**: een voltooid deelwoord staat **bijna altijd** na een vorm van *hebben*, *zijn* of *worden*. Geen hulpwerkwoord in de buurt? Dan is het meestal de pv (tegenwoordige tijd).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="125" height="55" rx="8" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="82" y "44" text-anchor="middle" fill="${COLORS.good}" font-size="14" font-family="Arial" font-weight="bold">gebeurt</text>
<text x="82" y="60" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">tegenw. tijd</text>
<text x="82" y "73" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">het + stam + t</text>
<rect x="155" y="22" width="125" height="55" rx="8" fill="rgba(255,112,67,0.10)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="217" y="44" text-anchor="middle" fill="${COLORS.alt}" font-size="14" font-family="Arial" font-weight="bold">gebeurd</text>
<text x="217" y "60" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">voltooid deelw.</text>
<text x="217" y="73" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">na is/heeft</text>
<text x="20" y "100" fill="${COLORS.text}" font-size="11" font-family="Arial">truc: vervang door werkt / gewerkt</text>
<text x="20" y "125" fill="${COLORS.text}" font-size="11" font-family="Arial">"Het ___ vaak."   →   het werkt → gebeurt</text>
<text x="20" y="145" fill="${COLORS.text}" font-size="11" font-family="Arial">"Het is ___."     →   het is gewerkt → gebeurd</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">na is/heeft → voltooid (-d)</text>
</svg>`,
    checks: [
      {
        q: "*Wat ___ er nu allemaal?*",
        options: ["gebeurt", "gebeurd", "gebeurde", "gebeuren"],
        answer: 0,
        wrongHints: [
          null,
          "Doe de truc: vervang door werkt of gewerkt. \"Wat werkt er?\" of \"Wat gewerkt er?\" — wat klinkt als tegenwoordige tijd?",
          "Verleden tijd — maar de zin zegt \"nu\". Toets de tijd!",
          "Hele werkwoord — past niet bij \"wat\" als pv. Zoek de tegenwoordige tijd ik-vorm-+-t.",
        ],
      },
      {
        q: "*Er is iets vreemds ___.*",
        options: ["gebeurd", "gebeurt", "gebeurde", "gebeur"],
        answer: 0,
        wrongHints: [
          null,
          "Truc: vervang door werkt / gewerkt. \"Er is iets vreemds gewerkt\" — is dat tegenwoordige tijd of voltooid?",
          "Tegenwoordige tijd — maar de zin gebruikt \"is\". Wat hoort er na \"is\"?",
          "Verleden tijd. Maar \"is + ___\" → wat past?",
        ],
      },
    ],
  },
  {
    title: "Vindt / gevonden / antwoordt / geantwoord",
    explanation: "Dezelfde valkuil bij **vinden** en **antwoorden** — én de stam eindigt al op een d, wat extra verwarring geeft.\n\n**Stam van vinden** = **vind**.\n\n| persoon | vorm | uitleg |\n|---------|------|--------|\n| ik | vind | stam, geen t |\n| jij | vindt | stam + t |\n| hij/zij/het | vindt | stam + t |\n| wij/jullie/zij | vinden | hele werkwoord |\n| voltooid | gevonden | onregelmatig (sterk!) |\n\n**Belangrijk**: \"vinden\" is een **sterk** werkwoord. Voltooid = **gevonden**, niet \"gevind\" of \"gevindt\".\n\n**Antwoorden** is **zwak**. Stam = antwoord (eindigt al op d).\n• ik **antwoord** (stam, geen extra t)\n• jij/hij **antwoordt** (stam + t — \"antwoord\" + t = antwoordt)\n• voltooid: ge + antwoord + d → \"geantwoord\" *(d zit niet in 't kofschip → +d → maar de d aan het eind van de stam is al een d, dus blijft enkel: geantwoord)*\n\n**Truc bij twijfel**: gebruik altijd de **lopen-test**:\n• Bij ik: \"ik loop\" → \"ik vind\", \"ik antwoord\" (geen t)\n• Bij hij: \"hij loopt\" → \"hij vindt\", \"hij antwoordt\" (met t)\n• Voltooid: \"hij heeft gelopen\" → \"hij heeft gevonden / geantwoord\"",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">vinden — overzicht</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="40" y="76" fill="${COLORS.text}" font-size="12" font-family="Arial">ik</text>
<text x="180" y="76" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">vind</text>
<text x="40" y="98" fill="${COLORS.text}" font-size="12" font-family="Arial">jij / hij / zij</text>
<text x="180" y="98" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">vindt</text>
<text x="40" y "120" fill="${COLORS.text}" font-size="12" font-family="Arial">wij / jullie / zij</text>
<text x="180" y="120" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">vinden</text>
<text x="40" y="142" fill="${COLORS.text}" font-size="12" font-family="Arial">verleden tijd</text>
<text x="180" y="142" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">vond</text>
<text x="40" y="164" fill="${COLORS.text}" font-size="12" font-family="Arial">voltooid</text>
<text x="180" y="164" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">gevonden</text>
</svg>`,
    checks: [
      {
        q: "*Ik ___ dit een goed plan.*  (werkwoord: vinden)",
        options: ["vind", "vindt", "vond", "gevonden"],
        answer: 0,
        wrongHints: [
          null,
          "Bij **ik** = nooit een -t. Doe de loop-test: ik loop → ik ?",
          "Verleden tijd. Maar de zin is in tegenwoordige tijd.",
          "Voltooid deelwoord. Maar er staat geen \"heb\" of \"is\" in de zin.",
        ],
      },
      {
        q: "*Hij ___ altijd het juiste woord.*  (werkwoord: vinden)",
        options: ["vindt", "vind", "vond", "vinden"],
        answer: 0,
        wrongHints: [
          null,
          "Bij **hij** = stam + t. Wat is de stam van vinden?",
          "Dat is de ik-vorm. Bij hij komt er een -t bij.",
          "Verleden tijd, maar de zin staat in tegenwoordige tijd (\"altijd\").",
        ],
      },
      {
        q: "*Hij heeft het al lang ___.*  (werkwoord: vinden)",
        options: ["gevonden", "gevindt", "vindt", "vind"],
        answer: 0,
        wrongHints: [
          null,
          "Vinden is sterk. Wat is de voltooide vorm? Denk aan: hij heeft ge___.",
          "Niet bestaand woord. Vinden is sterk: gebruik niet ge + stam + d/t.",
          "Tegenwoordige tijd. Maar er staat \"heeft\" — dan moet er een voltooid deelwoord komen.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Mixed — alle regels samen",
    explanation: "Een klein gemixt setje om alles te combineren.\n\n**Recap van de regels**:\n\n**Tegenwoordige tijd**:\n• ik = stam (geen t)\n• jij/hij/zij/het = stam + t\n• wij/jullie/zij = hele werkwoord\n• vraag-omkering: geen t bij stam\n\n**Verleden tijd zwak**:\n• stam + te(n) als laatste letter in 't kofschip ('t k o f s ch p)\n• stam + de(n) als niet\n\n**Voltooid deelwoord zwak**:\n• ge- + stam + t/d (kofschip)\n• Onregelmatig (sterk): leer ze los — gegeten, gelopen, gevonden, gezien, geweest...\n\n**Twijfelt? Doe de lopen-test**:\n• Vervang het werkwoord door \"lopen\" in dezelfde vorm. Hoor je loop, loopt, of gelopen? Datzelfde patroon volgt jouw werkwoord.\n\nKlaar voor wat oefenvragen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="20" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">samenvatting d/t</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.text}" font-size="11" font-family="Arial">tt: ik (stam) / jij·hij (stam+t) / wij (heel)</text>
<text x="35" y "98" fill="${COLORS.text}" font-size="11" font-family="Arial">vt zwak: stam + te / de (kofschip)</text>
<text x="35" y "120" fill="${COLORS.text}" font-size="11" font-family="Arial">voltooid: ge- + stam + t / d (kofschip)</text>
<text x="35" y "142" fill="${COLORS.text}" font-size="11" font-family="Arial">sterk: leer los (gegeten, gevonden...)</text>
<text x="150" y "172" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">altijd: lopen-test bij twijfel</text>
</svg>`,
    checks: [
      {
        q: "*Wij ___ samen naar de film.*  (werkwoord: gaan)",
        options: ["gaan", "gaat", "ga", "gegaan"],
        answer: 0,
        wrongHints: [
          null,
          "Bij **wij** = meervoud. Wat gebruik je dan?",
          "Dat is jij/hij-vorm. Hier is het meervoud.",
          "Voltooid deelwoord, maar er staat geen hulpwerkwoord in de zin.",
        ],
      },
      {
        q: "*Hij ___ vroeger in Amsterdam.*  (werkwoord: wonen, verleden tijd)",
        options: ["woonde", "woonte", "wond", "gewoond"],
        answer: 0,
        wrongHints: [
          null,
          "Stam = woon. Zit n in 't kofschip ('t k o f s ch p)? Welke uitgang dan?",
          "Verkeerde uitgang. Toets de stam-eindletter aan 't kofschip.",
          "Voltooid deelwoord, maar er staat geen \"heeft\" in de zin.",
        ],
      },
      {
        q: "*Zij heeft het hele boek ___.*  (werkwoord: lezen)",
        options: ["gelezen", "geleesd", "geleest", "leesde"],
        answer: 0,
        wrongHints: [
          null,
          "Lezen is sterk. Geen ge + stam + d/t. Hoe vervoeg je het wel?",
          "Niet bestaand woord. Sterke werkwoorden krijgen geen d/t.",
          "Verleden tijd, maar er staat \"heeft\" — dat vraagt om voltooid.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht — vier zinnen achter elkaar",
    explanation: "Laatste ronde — vier vragen, alle regels door elkaar. Als je deze haalt, beheers je de basis van d/t.\n\n**Tip**: lees iedere zin **hardop**. Bedenk:\n1. Wie doet het? (ik / jij / hij / wij / zij / jullie)\n2. Welke tijd? (nu = tegenwoordig · vroeger = verleden · met heeft/is = voltooid)\n3. Lopen-test bij twijfel.\n\nSucces!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="38" font-family="Arial" font-weight="bold">d/t</text>
<text x="150" y="110" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">je kunt het 🏆</text>
</svg>`,
    checks: [
      {
        q: "*Jij ___ de groente klein.*  (werkwoord: snijden, tegenwoordige tijd)",
        options: ["snijdt", "snijd", "snijden", "sneed"],
        answer: 0,
        wrongHints: [
          null,
          "Bij **jij** komt er een -t bij. Stam = snijd, dan?",
          "Hele werkwoord. Bij \"jij\" gebruik je stam + t.",
          "Verleden tijd, maar de zin is tegenwoordig.",
        ],
      },
      {
        q: "*Het is heel snel ___.*  (werkwoord: gebeuren)",
        options: ["gebeurd", "gebeurt", "gebeurde", "gebeuren"],
        answer: 0,
        wrongHints: [
          null,
          "Na \"is\" komt een voltooid deelwoord. Welke uitgang krijgt dat?",
          "Tegenwoordige tijd. Maar er staat \"is\" — wat hoort daar achter?",
          "Verleden tijd, maar bij \"is\" hoort een voltooid deelwoord.",
        ],
      },
      {
        q: "*Ik ___ steeds groter.*  (werkwoord: worden)",
        options: ["word", "wordt", "wort", "werd"],
        answer: 0,
        wrongHints: [
          null,
          "Bij **ik** komt nooit een -t. Doe de lopen-test.",
          "Niet bestaand woord. Ik = stam alleen.",
          "Verleden tijd, maar de zin is tegenwoordig (\"steeds\").",
        ],
      },
      {
        q: "*Hij ___ gisteren niets verkeerds.*  (werkwoord: doen, verleden tijd)",
        options: ["deed", "doet", "deedt", "gedaan"],
        answer: 0,
        wrongHints: [
          null,
          "Doen is sterk. Wat is de verleden tijd? Denk aan: gisteren ___.",
          "Tegenwoordige tijd. Maar de zin zegt \"gisteren\".",
          "Niet bestaand woord. Sterke werkwoorden krijgen geen extra t.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const werkwoordsvervoeging = {
  id: "werkwoordsvervoeging",
  title: "Werkwoordsvervoeging (d/t)",
  emoji: "📝",
  level: "klas1-vmbo-vwo",
  subject: "taal",
  intro:
    "De d/t-regels van het Nederlands — vanaf de stam tot voltooid deelwoord. Met 't kofschip, de lopen-test en de beruchte instinkers (worden/wordt, gebeurt/gebeurd, vindt/gevonden).",
  triggerKeywords: [
    "werkwoord", "vervoeging", "vervoegen", "stam", "persoonsvorm",
    "kofschip", "voltooid deelwoord", "tegenwoordige tijd", "verleden tijd",
    "wordt", "word", "gebeurt", "gebeurd", "vindt", "gevonden",
    "d of t", "dt", "spelling werkwoord",
  ],
  chapters,
  steps,
};

export default werkwoordsvervoeging;
