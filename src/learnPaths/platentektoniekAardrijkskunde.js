// Leerpad: Platentektoniek + vulkanen + aardbevingen
// 11 stappen in 6 hoofdstukken (A t/m F).
// Doelgroep: klas 2-3 onderbouw VO. Visueel sterke stof, CSE-relevant.
//
// Gebruikt SVG-illustraties voor: aardlagen-doorsnede, plaatgrenzen-types,
// wereldkaart met platen, vulkaan-doorsnede.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  // aard-tinten
  korst: "#5d4037",      // bruin
  mantel: "#ef6c00",     // oranje
  buitenkern: "#ff7043", // licht-oranje
  binnenkern: "#ffd54f", // geel
  oceaan: "#1976d2",     // blauw
  plaat: "#8d6e63",      // licht-bruin
  magma: "#d32f2f",      // donker-rood
  lava: "#ff5722",       // fel-oranje
};

const stepEmojis = [
  "🌍",   // A1. intro
  "🥚",   // B1. aardlagen
  "🧩",   // B2. platen
  "↔️",   // C1. uit elkaar
  "💥",   // C2. tegen elkaar
  "↕️",   // C3. langs elkaar
  "📳",   // D1. aardbevingen
  "🌋",   // E1. vulkanen
  "🔥",   // E2. beroemde voorbeelden
  "🌊",   // F1. tsunami's
  "🏆",   // G. eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat is platentektoniek?", emoji: "🌍", from: 0, to: 0 },
  { letter: "B", title: "De aarde van binnen", emoji: "🥚", from: 1, to: 2 },
  { letter: "C", title: "De drie soorten plaatgrenzen", emoji: "🧩", from: 3, to: 5 },
  { letter: "D", title: "Aardbevingen", emoji: "📳", from: 6, to: 6 },
  { letter: "E", title: "Vulkanen", emoji: "🌋", from: 7, to: 8 },
  { letter: "F", title: "Tsunami's + eindopdracht", emoji: "🏆", from: 9, to: 10 },
];

// Doorsnede van de aarde — concentrische cirkels met de 4 lagen.
function aardlagenSvg(highlight = null) {
  const isHL = (l) => highlight === l;
  return `<svg viewBox="0 0 220 220">
<rect x="0" y="0" width="220" height="220" fill="${COLORS.paper}"/>
<circle cx="110" cy="110" r="100" fill="${COLORS.korst}" opacity="${isHL("korst") ? 1 : 0.85}" stroke="${isHL("korst") ? "#fff" : "transparent"}" stroke-width="2"/>
<circle cx="110" cy="110" r="92" fill="${COLORS.mantel}" opacity="${isHL("mantel") ? 1 : 0.8}" stroke="${isHL("mantel") ? "#fff" : "transparent"}" stroke-width="2"/>
<circle cx="110" cy="110" r="55" fill="${COLORS.buitenkern}" opacity="${isHL("buitenkern") ? 1 : 0.9}" stroke="${isHL("buitenkern") ? "#fff" : "transparent"}" stroke-width="2"/>
<circle cx="110" cy="110" r="22" fill="${COLORS.binnenkern}" opacity="${isHL("binnenkern") ? 1 : 1}" stroke="${isHL("binnenkern") ? "#fff" : "transparent"}" stroke-width="2"/>
<text x="110" y="113" text-anchor="middle" fill="#000" font-size="9" font-family="Arial" font-weight="bold">binnenkern</text>
<text x="110" y="80" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">buitenkern</text>
<text x="110" y="35" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">mantel</text>
<text x="110" y="17" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">korst</text>
<line x1="180" y1="40" x2="200" y2="20" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="195" y="14" text-anchor="end" fill="${COLORS.muted}" font-size="8" font-family="Arial">~6.371 km</text>
</svg>`;
}

// Drie types plaatgrenzen schematisch.
function plaatgrenzenSvg(activeType = null) {
  const opacity = (t) => activeType === null || activeType === t ? 1 : 0.35;
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Drie typen plaatgrenzen</text>

<!-- Type 1: divergent (uit elkaar) -->
<g opacity="${opacity("divergent")}">
  <text x="55" y="36" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial" font-weight="bold">Uit elkaar</text>
  <rect x="10" y="50" width="40" height="20" fill="${COLORS.plaat}" stroke="${COLORS.muted}" stroke-width="0.5"/>
  <rect x="62" y="50" width="40" height="20" fill="${COLORS.plaat}" stroke="${COLORS.muted}" stroke-width="0.5"/>
  <path d="M 50 60 L 62 60" stroke="${COLORS.lava}" stroke-width="2" fill="none"/>
  <text x="20" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">←</text>
  <text x="92" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">→</text>
  <text x="55" y="105" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">Atlantische Oceaan</text>
  <text x="55" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">midoceanische rug</text>
</g>

<!-- Type 2: convergent (tegen elkaar) -->
<g opacity="${opacity("convergent")}">
  <text x="160" y="36" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial" font-weight="bold">Tegen elkaar</text>
  <polygon points="115,70 165,55 165,70" fill="${COLORS.plaat}" stroke="${COLORS.muted}" stroke-width="0.5"/>
  <rect x="167" y="50" width="40" height="20" fill="${COLORS.plaat}" stroke="${COLORS.muted}" stroke-width="0.5"/>
  <text x="125" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">→</text>
  <text x="195" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">←</text>
  <text x="160" y="105" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">Himalaya</text>
  <text x="160" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">bergvorming + subductie</text>
</g>

<!-- Type 3: transform (langs elkaar) -->
<g opacity="${opacity("transform")}">
  <text x="265" y="36" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial" font-weight="bold">Langs elkaar</text>
  <rect x="222" y="50" width="40" height="20" fill="${COLORS.plaat}" stroke="${COLORS.muted}" stroke-width="0.5"/>
  <rect x="265" y="50" width="40" height="20" fill="${COLORS.plaat}" stroke="${COLORS.muted}" stroke-width="0.5"/>
  <line x1="262" y1="48" x2="262" y2="72" stroke="${COLORS.warm}" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="232" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">↑</text>
  <text x="295" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">↓</text>
  <text x="265" y="105" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">San Andreas</text>
  <text x="265" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">aardbevingen</text>
</g>

<!-- Resultaten-rij -->
<g>
  <text x="55" y="145" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold" opacity="${opacity("divergent")}">→ nieuwe oceaan</text>
  <text x="160" y="145" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold" opacity="${opacity("convergent")}">→ bergketen</text>
  <text x="265" y="145" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold" opacity="${opacity("transform")}">→ aardbevingen</text>
</g>

<!-- Wereldkaart-strook met drie iconen -->
<g>
  <text x="160" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Voorbeelden op aarde</text>
  <text x="55" y="190" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">🌊 IJsland</text>
  <text x="160" y="190" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">⛰ Himalaya</text>
  <text x="265" y="190" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">⚡ Californië</text>
</g>
</svg>`;
}

// Vulkaan-doorsnede met magmakamer, schoorsteen, krater en lava.
function vulkaanSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>

<!-- Bergvorm -->
<polygon points="60,180 110,80 145,90 180,75 220,180" fill="${COLORS.korst}" opacity="0.8"/>
<polygon points="115,80 145,90 175,75 165,55 130,55" fill="${COLORS.lava}" opacity="0.85"/>

<!-- Krater bovenop -->
<ellipse cx="145" cy="68" rx="14" ry="4" fill="${COLORS.magma}"/>

<!-- Magma-pijp -->
<path d="M 145 70 Q 142 120 140 165 Q 138 175 145 180 Q 152 175 150 165 Q 148 120 145 70 Z" fill="${COLORS.magma}" opacity="0.9"/>

<!-- Magmakamer onderaan -->
<ellipse cx="145" cy="195" rx="55" ry="14" fill="${COLORS.magma}" opacity="0.85"/>

<!-- Lava-stroom over zijkant -->
<path d="M 130 60 Q 128 80 100 110 Q 90 130 80 165" stroke="${COLORS.lava}" stroke-width="3" fill="none" opacity="0.75"/>

<!-- As-wolk boven -->
<ellipse cx="145" cy="35" rx="38" ry="14" fill="${COLORS.muted}" opacity="0.5"/>
<ellipse cx="160" cy="22" rx="22" ry="10" fill="${COLORS.muted}" opacity="0.45"/>

<!-- Labels -->
<line x1="160" y1="22" x2="240" y2="20" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="245" y="22" fill="${COLORS.text}" font-size="9" font-family="Arial">aswolk</text>

<line x1="159" y1="68" x2="240" y2="50" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="245" y="52" fill="${COLORS.text}" font-size="9" font-family="Arial">krater</text>

<line x1="125" y1="115" x2="50" y2="100" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="48" y="102" text-anchor="end" fill="${COLORS.text}" font-size="9" font-family="Arial">schoorsteen</text>

<line x1="100" y1="195" x2="40" y2="195" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="38" y="197" text-anchor="end" fill="${COLORS.text}" font-size="9" font-family="Arial">magmakamer</text>

<line x1="100" y1="115" x2="40" y2="135" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="38" y="137" text-anchor="end" fill="${COLORS.lava}" font-size="9" font-family="Arial" font-weight="bold">lava-stroom</text>

<!-- Bodem-streep -->
<line x1="40" y1="180" x2="280" y2="180" stroke="${COLORS.muted}" stroke-width="0.5" stroke-dasharray="3,2"/>
<text x="285" y="183" fill="${COLORS.muted}" font-size="8" font-family="Arial">aardoppervlak</text>
</svg>`;
}

// Wereld-overzicht met de Pacific Ring of Fire (concentratie van vulkanen).
function ringOfFireSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">De 'Ring of Fire' rond de Stille Oceaan</text>

<!-- Continenten (zeer schematisch) -->
<polygon points="40,60 110,55 130,90 100,140 50,135 30,90" fill="${COLORS.plaat}" opacity="0.6"/>
<text x="80" y="100" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">N.Amerika</text>

<polygon points="190,60 280,55 290,90 260,135 200,140 175,90" fill="${COLORS.plaat}" opacity="0.6"/>
<text x="232" y="100" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">Azië/Australië</text>

<polygon points="60,150 100,145 105,180 70,180" fill="${COLORS.plaat}" opacity="0.6"/>
<text x="80" y="170" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">Z.Amerika</text>

<!-- Stille Oceaan in het midden -->
<rect x="135" y="55" width="40" height="125" fill="${COLORS.oceaan}" opacity="0.35"/>
<text x="155" y="120" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">Stille</text>
<text x="155" y="132" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">Oceaan</text>

<!-- Vulkanen (rode driehoekjes) langs de ring -->
${[[110, 60], [128, 95], [125, 135], [105, 165], [95, 175], [140, 178], [165, 175], [180, 160], [195, 130], [185, 95], [180, 65], [160, 55], [140, 50]].map(([x, y]) => `
<polygon points="${x - 4},${y + 4} ${x + 4},${y + 4} ${x},${y - 5}" fill="${COLORS.lava}"/>`).join("")}

<!-- Legenda -->
<polygon points="20,188 28,188 24,179" fill="${COLORS.lava}"/>
<text x="34" y="190" fill="${COLORS.text}" font-size="9" font-family="Arial">vulkaan</text>
<text x="100" y="190" fill="${COLORS.muted}" font-size="9" font-family="Arial">→ rond 75% van alle actieve vulkanen ligt hier</text>
</svg>`;
}

const steps = [
  // ─── A. Intro ───────────────
  {
    title: "Wat is platentektoniek?",
    explanation: "De aarde lijkt vast en stabiel — maar in werkelijkheid is de buitenkant opgedeeld in **grote stukken** die heel langzaam **bewegen**. Die stukken heten **tektonische platen**, en de leer over hun beweging heet **platentektoniek**.\n\n**Hoe weten we dat ze bewegen?**\n• De vorm van **Zuid-Amerika** en **Afrika** lijkt op een puzzel die past — alsof ze ooit aan elkaar zaten.\n• De duitse wetenschapper **Alfred Wegener** stelde dit al in **1912** voor (theorie van de continentendrift).\n• Pas in de jaren '60 werd bewezen dat hij gelijk had: er zit smeltend gesteente onder de platen, dat ze meedraagt.\n\n**Hoe snel bewegen ze?**\nOngeveer **2 tot 10 cm per jaar** — even snel als je vingernagels groeien. Lijkt weinig, maar in **miljoenen jaren** rijgen continenten zo flink op.\n\n**Wat veroorzaakt het?**\nDe beweging komt van **convectiestromen** in de hete mantel onder de platen: warm gesteente stijgt, koelt af aan de oppervlakte, en zinkt weer. Net zoals water in een kookpan kookt, alleen dan veel langzamer.\n\n**Waarom belangrijk?**\nDoor plaatbewegingen ontstaan **bergen, oceanen, aardbevingen en vulkanen** — het hele 'gezicht' van de aarde.",
    svg: aardlagenSvg(),
    checks: [
      {
        q: "Wie stelde in 1912 voor het eerst voor dat de continenten bewegen?",
        options: ["Alfred Wegener", "Charles Darwin", "Albert Einstein", "Galileo Galilei"],
        answer: 0,
        wrongHints: [
          null,
          "Darwin schreef over evolutie — biologie, niet aardrijkskunde.",
          "Einstein ging over natuurkunde (relativiteit), niet aardlagen.",
          "Galileo (16e eeuw) ging over de stand van planeten.",
        ],
      },
      {
        q: "Hoe snel bewegen tektonische platen ongeveer?",
        options: [
          "2-10 cm per jaar (vergelijkbaar met vingernagels)",
          "1 km per dag",
          "100 m per jaar",
          "Helemaal niet — ze staan stil",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Veel te snel — dan zou Europa al lang in Amerika zitten.",
          "Te snel — in miljoenen jaren wordt dat onmogelijk veel.",
          "Andersom — ze bewegen zeker, alleen heel langzaam.",
        ],
      },
    ],
  },

  // ─── B. Aardlagen + platen ───────────────
  {
    title: "De aardlagen — opbouw van binnen naar buiten",
    explanation: "De aarde is opgebouwd uit **vier hoofdlagen**, als de schillen van een ui:\n\n**1. Binnenkern** *(vast, ~5.000 °C)*\n• Een bal van **vast ijzer en nikkel**.\n• Ondanks de extreme temperatuur **vast** door de gigantische druk.\n• Diameter: ~2.400 km.\n\n**2. Buitenkern** *(vloeibaar, 4.000-5.000 °C)*\n• Bestaat uit **vloeibaar ijzer en nikkel**.\n• De beweging hier wekt het **aardmagnetisch veld** op (waardoor je kompas werkt).\n• Dikte: ~2.300 km.\n\n**3. Mantel** *(stroperig, 1.000-3.700 °C)*\n• Dit is het dikst: ~2.900 km dik — vrijwel alle 'inhoud' van de aarde.\n• Niet vast en niet echt vloeibaar — meer als **stroperig gesteente** dat héél langzaam stroomt.\n• Hier ontstaan **convectiestromen** die de platen meeslepen.\n\n**4. Korst** *(vast, dun)*\n• Het 'velletje' waar wij op leven.\n• Dikte verschilt: **5-10 km** onder oceanen, **30-70 km** onder bergen.\n• Onderverdeeld in de tektonische platen.\n\n**Een simpele vergelijking:** denk aan een **gekookt ei** — schaal = korst, eiwit = mantel, dooier = kern.",
    svg: aardlagenSvg("mantel"),
    checks: [
      {
        q: "Welke laag is **vloeibaar** en wekt het aardmagnetisch veld op?",
        options: ["Buitenkern", "Binnenkern", "Mantel", "Korst"],
        answer: 0,
        wrongHints: [
          null,
          "De binnenkern is juist **vast** door de druk, ondanks de hitte.",
          "De mantel is stroperig, niet echt vloeibaar.",
          "De korst is dun en hard — wij staan erop.",
        ],
      },
      {
        q: "Hoe dik is de aardkorst onder oceanen?",
        options: ["5-10 km", "100-200 km", "1.000 km", "Geen — er is geen korst onder oceanen"],
        answer: 0,
        wrongHints: [
          null,
          "Te dik — onder bergen kan 'ie 70 km zijn, dat is het max.",
          "Veel te dik. Dat is meer dan de mantel.",
          "Er IS korst onder oceanen, alleen dunner dan onder land.",
        ],
      },
    ],
  },
  {
    title: "Tektonische platen — de puzzelstukken",
    explanation: "De aardkorst is **niet één stuk**. Hij bestaat uit ongeveer **15 grote** en een paar kleinere **tektonische platen**, die als puzzelstukken op de mantel drijven.\n\n**De zeven grootste platen**:\n• **Pacifische Plaat** (grootste — bijna de hele Stille Oceaan)\n• **Noord-Amerikaanse Plaat**\n• **Zuid-Amerikaanse Plaat**\n• **Euraziatische Plaat** (Europa + Azië)\n• **Afrikaanse Plaat**\n• **Indo-Australische Plaat**\n• **Antarctische Plaat**\n\n**Twee soorten platen**:\n\n**A. Continentale platen** — *dik en licht*\n• Dragen de continenten.\n• Dikte ~30-70 km.\n• Voornamelijk graniet (lichter gesteente).\n\n**B. Oceanische platen** — *dun en zwaar*\n• Liggen onder oceanen.\n• Dikte ~5-10 km.\n• Voornamelijk basalt (zwaarder gesteente).\n\n**Belangrijk verschil**: oceanische platen zijn zwaarder. Daarom **duiken ze onder** continentale platen wanneer twee platen botsen — dat heet **subductie**, een proces dat we straks tegenkomen.\n\n**Wat gebeurt er aan de randen?**\nDe randen van platen zijn de **interessante zones** — daar gebeurt bijna alle aardbevings- en vulkanische activiteit. In het midden van een plaat is er weinig activiteit.\n\n**Nederland**: ligt midden op de Euraziatische Plaat — vandaar dat we vrijwel geen aardbevingen of vulkanen hebben. Wel kunnen er door **gaswinning** kunstmatige bevinkjes optreden in Groningen.",
    svg: ringOfFireSvg(),
    checks: [
      {
        q: "Wat gebeurt er als een **oceanische** en een **continentale** plaat botsen?",
        options: [
          "De zwaardere oceanische plaat duikt eronder (subductie)",
          "Ze stoppen allebei — kunnen niet bewegen",
          "De continentale plaat duikt eronder",
          "Ze versmelten tot één plaat",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Ze blijven bewegen, maar één moet wel onder de ander.",
          "Andersom — de oceanische is zwaarder en zinkt onder.",
          "Niet versmelten, maar de zwaardere zinkt eronder.",
        ],
      },
      {
        q: "Op welke plaat ligt Nederland?",
        options: ["Euraziatische Plaat", "Pacifische Plaat", "Afrikaanse Plaat", "Noord-Amerikaanse Plaat"],
        answer: 0,
        wrongHints: [
          null,
          "Die ligt aan de andere kant van de wereld (Stille Oceaan).",
          "Die ligt onder Afrika; NL is in Europa.",
          "Die plaat ligt onder Noord-Amerika.",
        ],
      },
    ],
  },

  // ─── C. Plaatgrenzen ───────────────
  {
    title: "Plaatgrenzen 1 — Uit elkaar (divergent)",
    explanation: "Als twee platen **uit elkaar** bewegen, ontstaat er ruimte daartussen. Vanuit de hete mantel **stroomt magma omhoog**, koelt af en vormt nieuwe korst.\n\n**Waar vind je dat?**\n• **Midoceanische ruggen** — onderzeese bergketens midden in oceanen.\n• Beroemd: de **Mid-Atlantische Rug** die door de hele Atlantische Oceaan loopt.\n\n**Wat gebeurt daar?**\n• Aan beide zijden ontstaat **nieuwe oceaanbodem**.\n• De Atlantische Oceaan wordt elk jaar **2-4 cm breder**.\n• Vanaf de tijd van de dinosauriërs (~200 miljoen jaar geleden) is hij hiermee duizenden kilometers breed geworden.\n\n**Op het land — riftvalleien**\nSoms scheurt een continent uiteen. Dan ontstaat een **riftvallei**:\n• De **Oost-Afrikaanse Rift** is de bekendste — Afrika scheurt langzaam in twee delen. Over miljoenen jaren wordt het oostelijk deel een nieuw eiland.\n\n**IJsland — zichtbaar verschijnsel**\n• IJsland is een uniek land: het ligt **precies op** de Mid-Atlantische Rug.\n• Daar zie je de plaatgrens **boven water** — toeristen kunnen letterlijk tussen de Noord-Amerikaanse en Euraziatische Plaat staan.\n• Verklaart waarom IJsland zoveel **vulkanen en geisers** heeft.\n\n**Onthoud**: uit elkaar = nieuwe korst + vulkanen + (vooral) oceanen die groeien.",
    svg: plaatgrenzenSvg("divergent"),
    checks: [
      {
        q: "Wat is een **midoceanische rug**?",
        options: [
          "Onderzeese bergketen waar nieuwe korst ontstaat",
          "Diepe geul waar platen onder elkaar duiken",
          "Een grote berg op land",
          "Een soort gletsjer",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Diepe geul = juist het tegenovergestelde (subductie-zone, convergent).",
          "Op land bestaat dit ook (rift) maar de term 'midoceanische' geeft 'onderzees' aan.",
          "Niets met ijs te maken — dit is gesteente.",
        ],
      },
      {
        q: "Welk land ligt **op** de Mid-Atlantische Rug en heeft daarom veel vulkanen?",
        options: ["IJsland", "Italië", "Japan", "Marokko"],
        answer: 0,
        wrongHints: [
          null,
          "Italië heeft wel vulkanen, maar die liggen op een andere plaatgrens (convergent, Afrikaanse-Euraziatische).",
          "Japan ligt op de Pacifische Ring of Fire (convergent).",
          "Marokko ligt niet op een actieve rug.",
        ],
      },
    ],
  },
  {
    title: "Plaatgrenzen 2 — Tegen elkaar (convergent)",
    explanation: "Als twee platen **tegen elkaar** bewegen, gebeurt iets dramatisch. Wat precies hangt af van de soort platen:\n\n**A. Oceanisch + Continentaal — subductie**\n• De **zwaardere** oceanische plaat **duikt onder** de continentale plaat.\n• Diep in de aarde **smelt** de oceanische plaat → magma omhoog → **vulkanen** op het land.\n• De continentale plaat wordt opgeduwd → **bergen**.\n• **Voorbeeld**: de **Andes** in Zuid-Amerika — gevormd door de Nazca-plaat (oceanisch) die onder de Zuid-Amerikaanse Plaat duikt.\n\n**B. Continentaal + Continentaal — bergvorming zonder subductie**\n• Beide platen zijn even licht — geen van beide duikt onder.\n• Ze **frommelen** in elkaar als twee tafels die je tegen elkaar duwt.\n• Resultaat: **enorme bergketens** zonder vulkanen.\n• **Voorbeeld**: de **Himalaya** — gevormd doordat de Indische Plaat tegen de Euraziatische Plaat botst (al ~50 miljoen jaar). De Mount Everest wordt nog elk jaar **~5 mm hoger**.\n\n**C. Oceanisch + Oceanisch — eilandenboog**\n• Eén oceanische plaat duikt onder de ander → vulkanen onderzee → vormen **eilandenboog**.\n• **Voorbeeld**: **Japan** en de **Filipijnen**.\n\n**Diepe oceaantroggen**\nDaar waar oceanische platen onder duiken ontstaan **oceaantroggen** — de diepste plekken op aarde:\n• **Marianentrog** in de Stille Oceaan: 11.034 m diep — meer dan de Mount Everest hoog is.\n\n**Onthoud**: tegen elkaar = bergen + diepe troggen + vulkanen (bij subductie).",
    svg: plaatgrenzenSvg("convergent"),
    checks: [
      {
        q: "Hoe is de **Himalaya** ontstaan?",
        options: [
          "Indische Plaat botst tegen Euraziatische Plaat",
          "Een grote vulkaanuitbarsting",
          "Erosie van een hoogvlakte",
          "Door een meteoriet",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen vulkanen in de Himalaya — twee continentale platen, geen subductie.",
          "Erosie maakt bergen kleiner, niet groter.",
          "Meteoriet zou een krater geven, geen bergketen.",
        ],
      },
      {
        q: "Wat is **subductie**?",
        options: [
          "De zwaardere plaat duikt onder de lichtere",
          "Twee platen breken volledig",
          "Een plaat splitst in tweeën",
          "Vulkanen die uitbarsten",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Platen breken niet — ze schuiven.",
          "Splitsen gebeurt bij divergent (uit elkaar).",
          "Vulkanen zijn een gevolg van subductie, niet de definitie.",
        ],
      },
      {
        q: "Wat is de **Marianentrog**?",
        options: [
          "De diepste plek op aarde — 11 km diep, ontstaan door subductie",
          "Een actieve vulkaan in Italië",
          "Een bergketen in Azië",
          "Een gletsjer op de Noordpool",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Italiaanse vulkanen zijn Etna en Vesuvius — geen trog.",
          "Bergketen is het tegenovergestelde — een trog gaat naar beneden.",
          "Niets met ijs te maken.",
        ],
      },
    ],
  },
  {
    title: "Plaatgrenzen 3 — Langs elkaar (transform)",
    explanation: "Soms bewegen platen niet uit elkaar én niet tegen elkaar, maar **langs elkaar**. Dan schuiven ze als twee auto's die elkaar passeren — alleen veel langzamer en met flink wat **wrijving**.\n\n**Wat gebeurt daar?**\n• Geen nieuwe korst (zoals bij divergent).\n• Geen bergen of subductie (zoals bij convergent).\n• **Wel: aardbevingen** — door de wrijving blijven platen vaak een tijdje 'vastzitten', en breken dan los met een schok.\n\n**Het bekendste voorbeeld: San Andreas-breuk**\n• Ligt in **Californië**, VS.\n• Hier schuift de **Pacifische Plaat** noordwaarts langs de **Noord-Amerikaanse Plaat**.\n• Snelheid: ~5 cm per jaar — over 16 miljoen jaar zal Los Angeles op de hoogte van San Francisco liggen.\n• Veroorzaakt regelmatig grote aardbevingen (1906 San Francisco, 1989 Loma Prieta, 1994 Northridge).\n\n**Geen vulkanen**\n• Bij langs-elkaar-glijdende platen smelt geen gesteente → **geen vulkanen**.\n• Alleen schuif-bewegingen.\n\n**Andere voorbeelden**:\n• **Noord-Anatolische Breuk** in Turkije — bron van de zware aardbevingen daar.\n• **Alpine Fault** in Nieuw-Zeeland.\n\n**Samenvatting van de drie typen**:\n\n| Type | Wat gebeurt | Wat ontstaat | Voorbeeld |\n|---|---|---|---|\n| Divergent | Uit elkaar | Nieuwe oceaan, vulkanen | Mid-Atlantische Rug |\n| Convergent | Tegen elkaar | Bergen, vulkanen, troggen | Himalaya, Andes |\n| Transform | Langs elkaar | Aardbevingen | San Andreas |",
    svg: plaatgrenzenSvg("transform"),
    checks: [
      {
        q: "Wat ontstaat er **vooral** aan een transform-grens?",
        options: ["Aardbevingen", "Vulkanen", "Bergketens", "Nieuwe oceaanbodem"],
        answer: 0,
        wrongHints: [
          null,
          "Vulkanen ontstaan vooral bij divergent of subductie — niet bij langs-elkaar.",
          "Bergketens ontstaan bij convergent (tegen elkaar).",
          "Nieuwe oceaanbodem ontstaat bij divergent (uit elkaar).",
        ],
      },
      {
        q: "Welke breuk veroorzaakt regelmatig grote aardbevingen in Californië?",
        options: ["San Andreas", "Mid-Atlantische Rug", "Noord-Anatolische Breuk", "Mariana-trog"],
        answer: 0,
        wrongHints: [
          null,
          "Die ligt in de Atlantische Oceaan, niet in Californië.",
          "Die ligt in Turkije.",
          "Dat is een trog (diep) onder zee, geen breuk in Californië.",
        ],
      },
    ],
  },

  // ─── D. Aardbevingen ───────────────
  {
    title: "Aardbevingen — hoe ze ontstaan en gemeten worden",
    explanation: "Een **aardbeving** is een plotselinge schok in de aardkorst, veroorzaakt door **opgehoopte spanning** die in één keer vrijkomt.\n\n**Hoe werkt het?**\n1. Twee platen drukken/schuiven tegen elkaar maar de **wrijving** houdt ze vast.\n2. Spanning bouwt zich op (jaren tot eeuwen).\n3. De spanning wordt te groot → de platen **schieten los** met een ruk → schok.\n\n**Belangrijke begrippen**:\n• **Hypocentrum** (focus) = punt onder de grond waar de schok ontstaat.\n• **Epicentrum** = het punt aan het oppervlak **recht boven** het hypocentrum. Daar is de schok het sterkst voelbaar.\n• **Schokgolven** verspreiden zich vandaaruit door alle richtingen.\n\n**Hoe sterk?** — De Schaal van Richter\nVan **1 (niet voelbaar)** tot **10 (catastrofaal)**:\n• 1-3: niet of nauwelijks voelbaar (alleen seismografen)\n• 4: voelbaar, geen schade\n• 5: lichte schade aan oude gebouwen\n• 6: gebouwen kunnen instorten\n• 7+: zware schade over grote gebieden\n• 9+: catastrofale beving (zeldzaam)\n\nElke punt op de schaal is **10× sterker** dan de vorige! Een 7 is dus geen 'iets meer' dan een 6, maar **10× sterker**.\n\n**Aardbevingen in Nederland**\n• Door plaatbeweging vrijwel nooit (wij zitten in het rustige midden van de Euraziatische Plaat).\n• Wél **kunstmatige bevinkjes in Groningen** door **gaswinning** sinds de jaren '80. Daardoor schade aan honderden huizen en kabinetscrisis.\n• De gaswinning is daarom afgebouwd en grotendeels gestopt in 2024.\n\n**Tsunami's**\nAls een onderzeese aardbeving plaatsvindt, kan die enorme **vloedgolven** veroorzaken — tsunami's. Bij Japan-2011 (magnitude 9,1) ontstond een tsunami van wel 40 m hoog → kerncentrale Fukushima beschadigd.",
    svg: plaatgrenzenSvg(),
    checks: [
      {
        q: "Wat is het **epicentrum** van een aardbeving?",
        options: [
          "Het punt aan het oppervlak boven de bron",
          "Het diepste punt onder de grond",
          "Een soort vulkaan",
          "De totale schade-zone",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Het diepste punt heet hypocentrum (of focus). Epicentrum ligt aan het oppervlak.",
          "Een vulkaan is iets anders.",
          "De schade-zone is het gevolg, niet de definitie.",
        ],
      },
      {
        q: "Hoeveel sterker is een 7,0 op de Schaal van Richter dan een 6,0?",
        options: ["10×", "Iets sterker", "100×", "2×"],
        answer: 0,
        wrongHints: [
          null,
          "Het is logaritmisch — geen kleine stap maar een hele schaal.",
          "Te veel — elke punt is 10× (niet 100×).",
          "Veel meer dan 2× — denk aan logaritmische schaal.",
        ],
      },
      {
        q: "Waarom zijn er in Groningen kunstmatige bevinkjes?",
        options: [
          "Door gaswinning is de bodem verzakt en spanning ontstaat",
          "Door een actieve vulkaan",
          "Door zware regenval",
          "Door het verkeer",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen vulkanen in NL.",
          "Regenval veroorzaakt geen aardbevingen.",
          "Verkeer geeft trillingen, geen echte bevinkjes onder de grond.",
        ],
      },
    ],
  },

  // ─── E. Vulkanen ───────────────
  {
    title: "Vulkanen — bouw en uitbarstingen",
    explanation: "Een **vulkaan** is een opening in de aardkorst waar **magma** (heet gesmolten gesteente) naar boven komt.\n\n**Belangrijke termen**:\n• **Magma**: gesmolten gesteente **onder de grond**.\n• **Lava**: hetzelfde gesmolten gesteente **boven de grond** (na uitbarsting).\n• **Magmakamer**: grote ruimte onder de vulkaan vol magma.\n• **Schoorsteen** (of pijp): kanaal waardoor magma omhoog stijgt.\n• **Krater**: opening bovenop waar de uitbarsting plaatsvindt.\n• **As-wolk**: fijne stofjes hoog de lucht in geschoten.\n\n**Twee hoofdtypen vulkanen**:\n\n**A. Schildvulkaan** *(rustig)*\n• Lava is **dun en vloeibaar** → stroomt ver weg.\n• Berg is **flauw en breed** (als een schild op de grond).\n• Uitbarstingen zijn niet explosief.\n• **Voorbeeld**: vulkanen op **Hawaii** (Mauna Loa).\n\n**B. Stratovulkaan** *(explosief)*\n• Lava is **dik en stroperig** → barst uit met druk.\n• Berg is **hoog en steil**, kegelvormig.\n• Uitbarstingen kunnen catastrofaal zijn.\n• **Voorbeeld**: **Vesuvius** (Italië), **Mount St. Helens** (VS).\n\n**Levenscyclus van een vulkaan**:\n• **Actief**: barst regelmatig uit (Etna, Stromboli)\n• **Slapend**: niet recent maar kan nog (Vesuvius — laatste uitbarsting 1944)\n• **Uitgedoofd**: nooit meer actief (de meeste oude vulkaankegels)\n\n**Goede en slechte gevolgen**:\n*+* **Zeer vruchtbare grond** rond vulkanen → goede landbouw (zuid-Italië, Java).\n*+* **Geothermische energie** (warmte uit de aarde) — IJsland verwarmt veel huizen ermee.\n*−* **Aswolken** kunnen luchtverkeer dagen lang stilleggen (IJsland 2010 — Eyjafjallajökull).\n*−* **Pyroklastische stromen** (gloeiend hete gas-as-mengsels die met 700 km/u afdalen) zijn dodelijk.",
    svg: vulkaanSvg(),
    checks: [
      {
        q: "Wat is het verschil tussen **magma** en **lava**?",
        options: [
          "Magma = onder de grond, lava = boven de grond",
          "Hetzelfde — gewoon twee namen",
          "Magma is heter dan lava",
          "Lava is een soort steen, magma is gas",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet helemaal — er is een echt verschil.",
          "Beide zijn gesmolten gesteente met dezelfde temperatuur.",
          "Beide zijn vloeibaar gesteente.",
        ],
      },
      {
        q: "Welk type vulkaan barst **explosief** uit?",
        options: [
          "Stratovulkaan (zoals Vesuvius)",
          "Schildvulkaan (zoals Hawaii)",
          "Ze barsten allemaal even hard uit",
          "Geen enkele — vulkanen zijn altijd rustig",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Schildvulkanen zijn juist rustig — dunne lava stroomt gewoon weg.",
          "Er is duidelijk verschil tussen de twee typen.",
          "Vulkanen kunnen heftig uitbarsten — denk aan Pompeï.",
        ],
      },
    ],
  },
  {
    title: "Beroemde vulkaanuitbarstingen + de Ring of Fire",
    explanation: "**De Pacific Ring of Fire**\nRond de Stille Oceaan ligt een hoefijzer-vormige zone waar veel vulkanen en aardbevingen zijn — de **Ring of Fire**:\n• **75% van alle actieve vulkanen** op aarde liggen hier.\n• **90% van alle aardbevingen** vinden hier plaats.\n• Loopt langs: Chili, Peru, west-VS, Alaska, Japan, Filipijnen, Indonesië, Nieuw-Zeeland.\n• Ontstaan door subductie aan de randen van de Pacifische Plaat.\n\n**Beroemde uitbarstingen**:\n\n**1. Vesuvius — 79 n.Chr.** *(Italië)*\nDe stratovulkaan barstte uit en bedolf de Romeinse stad **Pompeï** onder een dikke laag as. ~16.000 doden. Ironisch: door die as zijn de stad en lichamen perfect bewaard gebleven — nu een UNESCO Werelderfgoed.\n\n**2. Krakatau — 1883** *(Indonesië)*\nEen van de heftigste uitbarstingen ooit. Knal hoorbaar tot 4.800 km afstand. Veroorzaakte een tsunami van 35 m hoog, ~36.000 doden. Aswolk koelde wereldwijd het klimaat 1°C voor jaren.\n\n**3. Mount St. Helens — 1980** *(VS)*\nVerwoestte 600 km² bos. 57 doden. Top van de berg blies eraf — werd 400 m lager.\n\n**4. Eyjafjallajökull — 2010** *(IJsland)*\nGeen doden, maar de aswolk legde **8 dagen lang het luchtverkeer in heel Europa stil**. Miljoenen reizigers gestrand.\n\n**5. Mount Tambora — 1815** *(Indonesië)*\nDe heftigste uitbarsting in de geschiedenis. Veroorzaakte het '**jaar zonder zomer**' (1816) — gewassen wereldwijd mislukten, hongersnood, 100.000+ doden.\n\n**Vulkanen in Europa**\n• **Etna** (Sicilië, Italië) — actiefste vulkaan in Europa, barst regelmatig uit.\n• **Stromboli** (Italië) — barst al duizenden jaren bijna continu uit (mini-uitbarstingen).\n• **Hekla** + **Eyjafjallajökull** (IJsland) — actief.\n\n**Voorspellen?** Wetenschappers gebruiken seismografen, GPS-meters en gas-metingen om uitbarstingen te voorspellen. Vaak weten ze dagen tot weken van tevoren dat een vulkaan actief wordt — niet alle, maar veel uitbarstingen worden zo voorspeld.",
    svg: ringOfFireSvg(),
    checks: [
      {
        q: "Welk percentage van alle actieve vulkanen ligt in de **Ring of Fire**?",
        options: ["~75%", "~10%", "~50%", "~99%"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — de Ring is wereld-dominant.",
          "Te weinig — meer dan de helft.",
          "Te veel — ook elders zijn vulkanen (Italië, IJsland, Hawaii in oceanmidden).",
        ],
      },
      {
        q: "Welke vulkaan bedolf in 79 n.Chr. de stad Pompeï?",
        options: ["Vesuvius", "Etna", "Mount St. Helens", "Krakatau"],
        answer: 0,
        wrongHints: [
          null,
          "Etna is op Sicilië, niet bij Pompeï. Pompeï ligt bij Napels.",
          "Mount St. Helens is in de VS — barstte uit in 1980.",
          "Krakatau is in Indonesië, barstte uit in 1883.",
        ],
      },
      {
        q: "Wat veroorzaakte het 'jaar zonder zomer' (1816)?",
        options: [
          "De Tambora-uitbarsting (1815) — aswolk koelde de hele aarde",
          "Een grote oorlog",
          "Een ijstijd",
          "Een meteoriet-inslag",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen wereldoorlog in die tijd op die schaal.",
          "Een ijstijd duurt duizenden jaren, niet één jaar.",
          "Geen meteoriet — wel een vulkaan.",
        ],
      },
    ],
  },

  // ─── F. Tsunami's + eindopdracht ───────────────
  {
    title: "Tsunami's — gigantische zeegolven",
    explanation: "Een **tsunami** is een **gigantische golf** in de zee, veroorzaakt door een onderwater-aardbeving, vulkaanuitbarsting of onderzeese aardverschuiving.\n\n**Hoe werkt het?**\n1. Onderwater **verschuiving** verplaatst plotseling enorme hoeveelheid water.\n2. Op **open zee** is de golf nog laag (~1 m hoog) maar verschrikkelijk **lang** (~100-500 km tussen toppen) en snel (**800 km/u**, vergelijkbaar met een vliegtuig).\n3. Bij de **kust** wordt de zee ondieper → de golf **stuwt op** tot wel **30+ m hoog**.\n4. Het water trekt eerst soms ver terug (zee 'verdwijnt'), daarna **slaat de muur van water het land in**.\n\n**Verschil met gewone golf**:\n• Een **stormgolf**: enkele meters hoog, snel voorbij.\n• Een **tsunami**: kan tientallen meters zijn, 'duurt' lang (water blijft binnenstromen) — verwoestend over kilometers landinwaarts.\n\n**Beroemde tsunami's**:\n\n**Indische Oceaan — 2004**\n• Aardbeving van magnitude 9,1 voor de kust van Sumatra (Indonesië).\n• Tsunami trof Indonesië, Thailand, Sri Lanka, India, Maldiven.\n• ~230.000 doden — de zwaarste natuurramp van deze eeuw tot nu toe.\n\n**Japan — 2011** (Tōhoku)\n• Aardbeving magnitude 9,1.\n• Tsunami tot 40 m hoog op sommige plaatsen.\n• Beschadigde de **kerncentrale Fukushima** → kernramp.\n• ~20.000 doden + miljarden schade.\n\n**Waarschuwingssystemen**\nNa 2004 zijn er **internationale waarschuwingssystemen** opgezet. Zodra een onderzeese aardbeving wordt gemeten, gaan binnen minuten alarm-meldingen naar kustgebieden. Mensen krijgen ~10-30 minuten waarschuwing voordat de golf aanlandt.\n\n**Wat te doen bij een tsunami?**\n• Direct **landinwaarts** vluchten naar **hoger gelegen gebied**.\n• Niet wachten op verdere waarschuwingen — als je de zee plotseling ver ziet teruglopen, vluchten.\n• Niet terugkeren tot het sein 'veilig' is — vaak komen meerdere golven achter elkaar.",
    svg: ringOfFireSvg(),
    checks: [
      {
        q: "Hoe snel reist een tsunami over open zee?",
        options: ["~800 km/u (vergelijkbaar met een vliegtuig)", "~10 km/u", "~100 km/u", "~5.000 km/u"],
        answer: 0,
        wrongHints: [
          null,
          "Veel te langzaam — dan zou er ruim tijd voor evacuatie zijn over zee.",
          "Te langzaam.",
          "Sneller dan het geluid — onmogelijk.",
        ],
      },
      {
        q: "Wat moet je doen als je merkt dat de zee plotseling **ver wegtrekt**?",
        options: [
          "Direct landinwaarts naar hoger gebied vluchten",
          "Naar de strand-rand lopen om te kijken",
          "In het water gaan liggen tot het voorbij is",
          "Niets — gewoon een eb-effect",
        ],
        answer: 0,
        wrongHints: [
          null,
          "GEEN tijd voor kijken — dat kan je leven kosten.",
          "Levensgevaarlijk — de golf raakt land binnen minuten.",
          "Het is GEEN normaal eb-effect — het is een waarschuwingsteken.",
        ],
      },
    ],
  },

  // ─── G. Eindopdracht ───────────────
  {
    title: "Eindopdracht — koppel gebeurtenis aan plaatbeweging",
    explanation: "Tijd om te combineren! Bij elke gebeurtenis: welke **plaatbeweging** of **plaattype** hoort erbij?\n\n**Korte samenvatting**:\n\n| Type plaatgrens | Wat er gebeurt | Resultaten |\n|---|---|---|\n| Divergent (uit elkaar) | Magma vult de scheur | Nieuwe oceaan, riftvallei, vulkanen op de rug |\n| Convergent (tegen elkaar) | Een plaat duikt onder of beide frommelen | Bergen, vulkanen, oceaantroggen |\n| Transform (langs elkaar) | Schuiven met wrijving | Aardbevingen |\n\n**Beroemde voorbeelden om te onthouden**:\n• **Mid-Atlantische Rug + IJsland** → divergent\n• **Himalaya** → convergent (continentaal-continentaal)\n• **Andes** → convergent (oceanisch-continentaal subductie)\n• **San Andreas (Californië)** → transform\n• **Marianentrog** → convergent (subductie)\n• **Pacific Ring of Fire** → grotendeels convergent\n\n**Veel succes!**",
    svg: plaatgrenzenSvg(),
    checks: [
      {
        q: "Bij welke plaatbeweging hoort de **Himalaya**?",
        options: [
          "Convergent (continentale platen tegen elkaar)",
          "Divergent (uit elkaar)",
          "Transform (langs elkaar)",
          "Geen — gewoon erosie",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij divergent ontstaan oceanen, niet bergen.",
          "Transform geeft aardbevingen, geen bergen.",
          "Erosie maakt bergen kleiner — Himalaya wordt nog hoger.",
        ],
      },
      {
        q: "Bij welke plaatgrens hoort **IJsland** met z'n vulkanen?",
        options: [
          "Divergent — Mid-Atlantische Rug",
          "Convergent — subductie",
          "Transform — schuif",
          "Helemaal geen plaatgrens",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Subductie is convergent — IJsland ligt op een rug, niet trog.",
          "Geen schuif — twee platen gaan juist uit elkaar.",
          "Wel degelijk een plaatgrens — daarom de vulkanen.",
        ],
      },
      {
        q: "De **San Andreas-breuk** in Californië is een voorbeeld van wat?",
        options: [
          "Transform-grens (platen schuiven langs elkaar)",
          "Divergent-grens",
          "Subductie-zone",
          "Een vulkanische eilandenboog",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen oceaan-vorming bij San Andreas, alleen schuif.",
          "Geen subductie — geen plaat duikt eronder.",
          "Geen vulkanen aan San Andreas.",
        ],
      },
      {
        q: "Welke ramp in 2004 was een gevolg van een onderzeese aardbeving?",
        options: [
          "Tsunami in de Indische Oceaan",
          "Vulkaanuitbarsting Eyjafjallajökull",
          "Aardbeving Christchurch",
          "Pompeï-uitbarsting",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Eyjafjallajökull was 2010 + IJsland (vulkanisch, niet tsunami).",
          "Christchurch was een land-aardbeving in 2010-11.",
          "Pompeï was 79 n.Chr. — heel ver weg in tijd.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const platentektoniekAardrijkskunde = {
  id: "platentektoniek-aardrijkskunde",
  title: "Platentektoniek — aardplaten, vulkanen en aardbevingen",
  emoji: "🌋",
  level: "klas2-3",
  subject: "aardrijkskunde",
  intro:
    "Hoe de aardlagen zijn opgebouwd, hoe tektonische platen bewegen langs de drie grenstypen (uit elkaar / tegen elkaar / langs elkaar) en wat dat oplevert: bergen, oceanen, aardbevingen en vulkanen. Met beroemde voorbeelden zoals de Himalaya, Andes, IJsland, San Andreas en de Ring of Fire. CSE-relevant onderbouw.",
  triggerKeywords: [
    "platentektoniek", "tektonische platen", "tektoniek",
    "aardplaten", "aardplaat",
    "aardlagen", "aardkorst", "mantel", "buitenkern", "binnenkern",
    "wegener", "continentendrift",
    "midoceanische rug", "mid-atlantische rug", "mid atlantische rug",
    "divergent", "convergent", "transform",
    "subductie", "subductiezone", "oceaantrog",
    "marianentrog", "diepste plek",
    "san andreas", "noord-anatolische breuk",
    "himalaya", "andes", "alpen-vorming",
    "vulkaan", "vulkanen", "magma", "lava", "krater", "magmakamer",
    "schildvulkaan", "stratovulkaan",
    "vesuvius", "etna", "pompei", "krakatau", "tambora", "mount st helens",
    "eyjafjallajokull", "ijsland",
    "ring of fire", "pacific ring", "pacifische plaat",
    "aardbeving", "aardbevingen", "schaal van richter", "richter",
    "epicentrum", "hypocentrum", "seismograaf",
    "tsunami", "tsunamis", "vloedgolf", "fukushima",
    "groningen aardbeving", "gaswinning",
  ],
  chapters,
  steps,
};

export default platentektoniekAardrijkskunde;
