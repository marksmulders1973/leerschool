// Leerpad: Elektriciteit — stroom, spanning, weerstand, Wet van Ohm
// 11 stappen in 6 hoofdstukken (A t/m F).
// Doelgroep: klas 3 onderbouw VO. Examenstof natuurkunde CSE.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  // schakeling-tinten
  draad: "#5d9cec",
  batterij: "#ff7043",
  lamp: "#ffd54f",
  weerstand: "#9be069",
  schakelaar: "#b388ff",
};

const stepEmojis = [
  "⚡",   // A1. wat is elektriciteit
  "🔄",   // A2. stroomkring
  "🔋",   // B1. spanning
  "💧",   // B2. stroomsterkte
  "🚧",   // B3. weerstand
  "🧮",   // C1. wet van Ohm
  "🔗",   // D1. serie + parallel
  "💡",   // D2. vermogen
  "🛡️",  // E1. veiligheid
  "💶",   // E2. energie + kosten
  "🏆",   // F. eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat is elektriciteit?", emoji: "⚡", from: 0, to: 1 },
  { letter: "B", title: "U, I en R", emoji: "🔋", from: 2, to: 4 },
  { letter: "C", title: "Wet van Ohm", emoji: "🧮", from: 5, to: 5 },
  { letter: "D", title: "Schakelingen + vermogen", emoji: "🔗", from: 6, to: 7 },
  { letter: "E", title: "Veiligheid + energie", emoji: "🛡️", from: 8, to: 9 },
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 10, to: 10 },
];

// Eenvoudig schakelschema: batterij + lamp + schakelaar in een kring.
function basisSchakelingSvg(closed = true) {
  return `<svg viewBox="0 0 280 200">
<rect x="0" y="0" width="280" height="200" fill="${COLORS.paper}"/>
<text x="140" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Eenvoudige stroomkring</text>

<!-- Buitenste rechthoek (draden) -->
<line x1="60" y1="50" x2="220" y2="50" stroke="${COLORS.draad}" stroke-width="2.5"/>
<line x1="220" y1="50" x2="220" y2="160" stroke="${COLORS.draad}" stroke-width="2.5"/>
<line x1="60" y1="50" x2="60" y2="160" stroke="${COLORS.draad}" stroke-width="2.5"/>
<line x1="60" y1="160" x2="120" y2="160" stroke="${COLORS.draad}" stroke-width="2.5"/>
<line x1="160" y1="160" x2="220" y2="160" stroke="${COLORS.draad}" stroke-width="2.5"/>

<!-- Batterij links -->
<line x1="60" y1="100" x2="50" y2="100" stroke="${COLORS.batterij}" stroke-width="3"/>
<line x1="60" y1="110" x2="40" y2="110" stroke="${COLORS.batterij}" stroke-width="3"/>
<line x1="60" y1="50" x2="60" y2="100" stroke="${COLORS.draad}" stroke-width="2.5"/>
<line x1="60" y1="110" x2="60" y2="160" stroke="${COLORS.draad}" stroke-width="2.5"/>
<text x="35" y="100" text-anchor="end" fill="${COLORS.text}" font-size="9" font-family="Arial">+</text>
<text x="35" y="113" text-anchor="end" fill="${COLORS.text}" font-size="9" font-family="Arial">−</text>
<text x="55" y="135" text-anchor="middle" fill="${COLORS.batterij}" font-size="9" font-family="Arial" font-weight="bold">batterij</text>

<!-- Lamp boven -->
<circle cx="140" cy="50" r="13" fill="${closed ? COLORS.lamp : "rgba(255,213,79,0.20)"}" opacity="${closed ? 0.95 : 0.4}" stroke="${COLORS.lamp}" stroke-width="1.5"/>
<line x1="131" y1="41" x2="149" y2="59" stroke="${COLORS.lamp}" stroke-width="1"/>
<line x1="131" y1="59" x2="149" y2="41" stroke="${COLORS.lamp}" stroke-width="1"/>
<text x="140" y="29" text-anchor="middle" fill="${COLORS.lamp}" font-size="9" font-family="Arial" font-weight="bold">${closed ? "💡 brandt" : "💡 uit"}</text>

<!-- Schakelaar onder -->
<circle cx="120" cy="160" r="3" fill="${COLORS.schakelaar}"/>
<circle cx="160" cy="160" r="3" fill="${COLORS.schakelaar}"/>
${closed
    ? `<line x1="120" y1="160" x2="160" y2="160" stroke="${COLORS.schakelaar}" stroke-width="3"/>`
    : `<line x1="120" y1="160" x2="155" y2="148" stroke="${COLORS.schakelaar}" stroke-width="3"/>`}
<text x="140" y="180" text-anchor="middle" fill="${COLORS.schakelaar}" font-size="9" font-family="Arial">schakelaar (${closed ? "dicht" : "open"})</text>

<!-- Pijlen voor stroomrichting (alleen als gesloten) -->
${closed ? `
<polygon points="115,46 122,50 115,54" fill="${COLORS.warm}"/>
<polygon points="170,46 177,50 170,54" fill="${COLORS.warm}"/>
<polygon points="216,90 220,97 224,90" fill="${COLORS.warm}"/>
<polygon points="216,128 220,135 224,128" fill="${COLORS.warm}"/>
<text x="190" y="98" fill="${COLORS.warm}" font-size="9" font-family="Arial">→ stroom</text>
` : ""}
</svg>`;
}

// Driehoek-formule U = I × R (memo-techniek).
function ohmFormuleSvg() {
  return `<svg viewBox="0 0 280 200">
<rect x="0" y="0" width="280" height="200" fill="${COLORS.paper}"/>
<text x="140" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Wet van Ohm: U = I × R (driehoek-trucje)</text>

<!-- Driehoek -->
<polygon points="140,40 200,150 80,150" fill="rgba(255,213,79,0.10)" stroke="${COLORS.warm}" stroke-width="2"/>
<line x1="80" y1="100" x2="200" y2="100" stroke="${COLORS.warm}" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="140" y1="100" x2="140" y2="150" stroke="${COLORS.warm}" stroke-width="1.5" stroke-dasharray="4,3"/>

<!-- U bovenaan -->
<text x="140" y="78" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial" font-weight="bold">U</text>
<text x="140" y="92" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">spanning (V)</text>

<!-- I linksonder -->
<text x="110" y="135" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial" font-weight="bold">I</text>
<text x="110" y="148" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">stroom (A)</text>

<!-- R rechtsonder -->
<text x="170" y="135" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial" font-weight="bold">R</text>
<text x="170" y="148" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">weerstand (Ω)</text>

<!-- Tekst rechts -->
<text x="220" y="60" fill="${COLORS.text}" font-size="11" font-family="Arial">Bedek wat je</text>
<text x="220" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">zoekt:</text>
<text x="220" y="100" fill="${COLORS.good}" font-size="10" font-family="Arial">U → I × R</text>
<text x="220" y="118" fill="${COLORS.good}" font-size="10" font-family="Arial">I → U / R</text>
<text x="220" y="136" fill="${COLORS.good}" font-size="10" font-family="Arial">R → U / I</text>
</svg>`;
}

// Serie vs parallel.
function serieParallelSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Serie vs Parallel — twee lampjes in een kring</text>

<!-- SERIE links -->
<text x="80" y="32" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Serie</text>

<!-- Batterij -->
<line x1="20" y1="60" x2="20" y2="80" stroke="${COLORS.draad}" stroke-width="2"/>
<line x1="14" y1="60" x2="26" y2="60" stroke="${COLORS.batterij}" stroke-width="2.5"/>
<line x1="11" y1="65" x2="29" y2="65" stroke="${COLORS.batterij}" stroke-width="2.5"/>

<!-- bovenste draad + 2 lampen in serie -->
<line x1="20" y1="60" x2="40" y2="60" stroke="${COLORS.draad}" stroke-width="2"/>
<circle cx="55" cy="60" r="9" fill="${COLORS.lamp}" opacity="0.7"/>
<line x1="64" y1="60" x2="90" y2="60" stroke="${COLORS.draad}" stroke-width="2"/>
<circle cx="105" cy="60" r="9" fill="${COLORS.lamp}" opacity="0.7"/>
<line x1="114" y1="60" x2="135" y2="60" stroke="${COLORS.draad}" stroke-width="2"/>
<line x1="135" y1="60" x2="135" y2="100" stroke="${COLORS.draad}" stroke-width="2"/>
<line x1="135" y1="100" x2="20" y2="100" stroke="${COLORS.draad}" stroke-width="2"/>
<line x1="20" y1="80" x2="20" y2="100" stroke="${COLORS.draad}" stroke-width="2"/>

<text x="80" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">Eén pad: stroom door beide</text>
<text x="80" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">→ I overal gelijk</text>
<text x="80" y="151" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">→ R-totaal = R₁ + R₂</text>
<text x="80" y="166" text-anchor="middle" fill="${COLORS.alt}" font-size="9" font-family="Arial" font-weight="bold">⚠ als 1 lamp stuk → beide uit</text>

<!-- PARALLEL rechts -->
<text x="240" y="32" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Parallel</text>

<!-- Batterij -->
<line x1="180" y1="60" x2="180" y2="100" stroke="${COLORS.draad}" stroke-width="2"/>
<line x1="174" y1="70" x2="186" y2="70" stroke="${COLORS.batterij}" stroke-width="2.5"/>
<line x1="171" y1="75" x2="189" y2="75" stroke="${COLORS.batterij}" stroke-width="2.5"/>

<!-- twee lampen parallel -->
<line x1="180" y1="60" x2="300" y2="60" stroke="${COLORS.draad}" stroke-width="2"/>
<line x1="180" y1="100" x2="300" y2="100" stroke="${COLORS.draad}" stroke-width="2"/>

<!-- lamp 1 -->
<line x1="220" y1="60" x2="220" y2="73" stroke="${COLORS.draad}" stroke-width="2"/>
<circle cx="220" cy="80" r="9" fill="${COLORS.lamp}" opacity="0.85"/>
<line x1="220" y1="87" x2="220" y2="100" stroke="${COLORS.draad}" stroke-width="2"/>

<!-- lamp 2 -->
<line x1="270" y1="60" x2="270" y2="73" stroke="${COLORS.draad}" stroke-width="2"/>
<circle cx="270" cy="80" r="9" fill="${COLORS.lamp}" opacity="0.85"/>
<line x1="270" y1="87" x2="270" y2="100" stroke="${COLORS.draad}" stroke-width="2"/>

<text x="240" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">Twee paden: stroom splitst</text>
<text x="240" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">→ U over elk gelijk</text>
<text x="240" y="151" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">→ I-totaal = I₁ + I₂</text>
<text x="240" y="166" text-anchor="middle" fill="${COLORS.good}" font-size="9" font-family="Arial" font-weight="bold">✓ als 1 stuk → ander brandt door</text>
</svg>`;
}

const steps = [
  // ─── A. Wat is elektriciteit ───────────────
  {
    title: "Wat is elektriciteit?",
    explanation: "**Elektriciteit** is de stroom van **kleine geladen deeltjes** (meestal **elektronen**) door een geleider zoals een metalen draad.\n\n**Drie soorten lading**:\n• **Positief** (+) — protonen.\n• **Negatief** (−) — elektronen.\n• **Neutraal** — gelijke aantallen + en −.\n\n**Regel: gelijke ladingen stoten af, ongelijke trekken aan**.\n• Twee + : duwen elkaar weg.\n• Twee − : duwen elkaar weg.\n• + en − : trekken elkaar aan.\n\n**Elektronen lopen 'gemakkelijk' door metalen**\nIn metalen draden zijn elektronen los gebonden — ze kunnen vrij bewegen. Daarom zijn metalen **goede geleiders**.\n\n**Geleiders en isolatoren**:\n• **Geleiders**: laten stroom door — koper, aluminium, ijzer, water, je lichaam.\n• **Isolatoren**: laten geen stroom door — plastic, rubber, glas, droog hout.\n\n**Statische elektriciteit**\nAls je over een tapijt loopt en metaal aanraakt: schok. Dit is **statische elektriciteit** — door wrijving zijn elektronen overgesprongen tussen je voeten en het tapijt. Bij contact met metaal vloeien ze snel weg.\n\n**Bliksem** = enorme statische ontlading tussen wolk en grond, miljarden volt.\n\n**Stromend (lopend) elektriciteit**\nIn een stopcontact, batterij of accu: continue stroom van elektronen die je apparaten laat werken. Daar gaat dit hele leerpad over.",
    svg: basisSchakelingSvg(true),
    checks: [
      {
        q: "Welke deeltjes lopen meestal door een elektrische draad?",
        options: ["Elektronen", "Protonen", "Neutronen", "Atomen"],
        answer: 0,
        wrongHints: [
          null,
          "Protonen zitten vast in de kern van het atoom — bewegen niet.",
          "Neutronen hebben geen lading.",
          "Hele atomen bewegen niet door een draad — alleen elektronen.",
        ],
      },
      {
        q: "Welk materiaal is een **isolator**?",
        options: ["Plastic", "Koper", "IJzer", "Aluminium"],
        answer: 0,
        wrongHints: [
          null,
          "Koper is juist een goede geleider (kabels van rood-koper).",
          "IJzer geleidt ook stroom.",
          "Aluminium geleidt stroom (hoogspanningskabels).",
        ],
      },
    ],
  },
  {
    title: "De stroomkring — gesloten kring nodig",
    explanation: "Voor elektriciteit door een apparaat zoals een lamp moet de **stroomkring gesloten** zijn — een rondgaande baan voor de elektronen.\n\n**Een eenvoudige kring bevat**:\n• **Spanningsbron** (batterij, stopcontact) — duwt elektronen rond.\n• **Geleidende draden** — pad voor de elektronen.\n• **Verbruiker** (lamp, motor, weerstand) — gebruikt de energie.\n• **Schakelaar** — maakt of breekt de kring.\n\n**Schakelaar dicht (gesloten)** → kring rond → stroom loopt → lamp brandt.\n**Schakelaar open** → kring onderbroken → geen stroom → lamp uit.\n\n**Stroomrichting: een afspraak**\nIn schakelschema's tekenen we de stroomrichting **van + naar −** (de '**conventionele stroomrichting**'). \n\nIn werkelijkheid bewegen elektronen juist andersom (van − naar +) — maar in de 19e eeuw wisten geleerden dat nog niet, en ze hebben de afspraak nooit veranderd. We tekenen dus van + naar −.\n\n**Schakel-symbolen** (basics)\n• **Batterij**: lange streep (+) en korte streep (−).\n• **Lamp**: cirkel met kruis erin (⊗).\n• **Weerstand**: rechthoekig kastje (Europa) of zigzag (USA).\n• **Schakelaar**: hellend lijntje tussen twee puntjes.\n• **Draad**: rechte lijn.\n\n**Open vs kortsluiting**\n• **Open kring**: ergens onderbroken (bv. door open schakelaar of stuk gegane draad) → geen stroom.\n• **Kortsluiting**: stroom kan zonder verbruiker terug naar de bron — extra dunne weg, weinig weerstand → stroom wordt **enorm groot** → draden heet → brand-risico! Daarom hebben elektrische installaties **smeltveiligheden** of **stoppen**.",
    svg: basisSchakelingSvg(false),
    checks: [
      {
        q: "Wat moet er gebeuren om een lamp te laten branden?",
        options: [
          "De stroomkring moet gesloten zijn",
          "De lamp moet warm zijn",
          "Er moet een isolator in zitten",
          "De spanning moet 0 zijn",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Lamp wordt vanzelf warm door stroom — niet andersom.",
          "Isolator stopt stroom juist.",
          "Geen spanning → geen stroom → geen licht.",
        ],
      },
      {
        q: "Wat is **kortsluiting**?",
        options: [
          "Stroom kan terug naar de bron zonder verbruiker → hele grote stroom",
          "Een stroomkring zonder spanningsbron",
          "Een hele lange draad",
          "Een lamp die kapot is",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen spanningsbron = open kring, niet kortsluiting.",
          "Lengte van draad heeft niets met kortsluiting te maken.",
          "Een kapotte lamp geeft alleen open kring.",
        ],
      },
    ],
  },

  // ─── B. U, I, R ───────────────
  {
    title: "Spanning (U) — de 'duwkracht'",
    explanation: "**Spanning** is de **'duwkracht'** die elektronen door een draad voortduwt. Symbool: **U**. Eenheid: **volt (V)**.\n\n**Vergelijking met water**:\n• Water in een leiding heeft **drukverschil** nodig om te stromen.\n• Elektronen in een draad hebben **spanningsverschil** nodig om te lopen.\n\n**Hoe ontstaat spanning?**\nDoor een **spanningsbron** — een ding dat lading scheidt: + aan de ene kant, − aan de andere. De aantrekking + en − is de spanning.\n\n**Voorbeelden van spanningsbronnen**:\n• **Batterij** AA: 1,5 V\n• **Knoopcel** (in een horloge): 3 V\n• **Auto-accu**: 12 V\n• **Stopcontact NL**: **230 V** (wisselspanning)\n• **Hoogspanningskabel**: 50.000-380.000 V\n\n**Hoe meet je spanning?**\nMet een **spanningsmeter** (voltmeter), die je **parallel** plaatst over het onderdeel — *naast* de verbruiker, niet in de kring.\n\n**Belangrijk verschil**: gelijkspanning vs wisselspanning\n• **Gelijkspanning (DC)**: + en − blijven dezelfde kant. Batterijen, accu's.\n• **Wisselspanning (AC)**: + en − wisselen 50 keer per seconde (in NL). Stopcontacten.\n\n**Spanning is geen 'hoeveelheid'**\nSpanning is een **verschil tussen twee punten**. Daarom kun je niet zeggen 'er staat 5 V op punt X' zonder te zeggen *ten opzichte van wat*. Vaak is dat 'aarde' of de massa van het systeem.\n\n**Levensgevaarlijk?**\n• Spanning lager dan ~50 V is meestal veilig — je voelt 'm hooguit.\n• 230 V (stopcontact) is **levensgevaarlijk** — kan hartstilstand veroorzaken.\n• Hoogspanning: dodelijk.\n• **Vuistregel**: lage spanning + droge huid = relatief veilig. Hoge spanning + natte huid = gevaarlijk.",
    svg: basisSchakelingSvg(true),
    checks: [
      {
        q: "Wat is de eenheid van spanning?",
        options: ["Volt (V)", "Ampère (A)", "Ohm (Ω)", "Watt (W)"],
        answer: 0,
        wrongHints: [
          null,
          "Ampère is voor stroomsterkte (I).",
          "Ohm is voor weerstand (R).",
          "Watt is voor vermogen (P).",
        ],
      },
      {
        q: "Welke spanning heeft een gewoon stopcontact in Nederland?",
        options: ["230 V", "12 V", "1,5 V", "1.000 V"],
        answer: 0,
        wrongHints: [
          null,
          "12 V is een auto-accu, geen stopcontact.",
          "1,5 V is een AA-batterij.",
          "Te hoog — dat zou hoogspanning zijn.",
        ],
      },
    ],
  },
  {
    title: "Stroomsterkte (I) — hoeveel elektronen per seconde",
    explanation: "**Stroomsterkte** is hoeveel elektronen er **per seconde** door een doorsnede van de draad gaan. Symbool: **I** (van het Franse 'intensité'). Eenheid: **ampère (A)**.\n\n**Vergelijking met water**:\n• Water-stroming: liter per seconde (door een leiding).\n• Elektronen-stroming: coulomb per seconde (door een draad).\n\nElke 1 A = ongeveer **6 × 10¹⁸ elektronen** per seconde — een gigantisch aantal.\n\n**Voorbeelden van stroomsterktes**:\n• Zaklampje: ~0,1 A\n• Telefoonoplader: ~1 A\n• Kettingzaag: ~10 A\n• Wasmachine bij opwarmen: ~10 A\n• Aardlek-grens (stoppenkast NL): 16 A\n• Bliksem: 30.000 A (heel kortstondig!)\n\n**Hoe meet je stroomsterkte?**\nMet een **stroomsterktemeter** (ampèremeter), die je **in serie** plaatst — **in** de kring, alle stroom moet erdoor.\n\n**Belangrijk verschil met spanning**:\n• **Spanning** = verschil tussen 2 punten → meet je *parallel* (ernaast).\n• **Stroomsterkte** = doorvoer door 1 punt → meet je *in serie* (erin).\n\n**Vergelijkingstrucje**: parallel = paar (twee punten); in serie = één draadje door waar de stroom doorheen moet.\n\n**Wat bepaalt I?**\nDe stroomsterkte hangt af van:\n• De **spanning U** (hoe hoger, hoe meer stroom).\n• De **weerstand R** (hoe hoger, hoe minder stroom).\n• Verband: **I = U / R** (Wet van Ohm — komt straks).\n\n**Veiligheid: stroom kan dodelijk zijn**\nNiet de spanning maar de **stroom door je hart** doodt:\n• 1 mA: voelbaar.\n• 10 mA: spieren krimpen samen, kun je niet meer loslaten.\n• 100 mA (= 0,1 A): hartstilstand mogelijk.\n• Het stopcontact thuis kan tot 16 A leveren — meer dan genoeg om dodelijk te zijn.",
    svg: basisSchakelingSvg(true),
    checks: [
      {
        q: "Hoe meet je **stroomsterkte**?",
        options: [
          "Met een ampèremeter in serie (in de kring)",
          "Met een voltmeter parallel",
          "Met een thermometer",
          "Met een liniaal",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Voltmeter meet spanning (parallel), niet stroomsterkte.",
          "Thermometer meet temperatuur, niet stroom.",
          "Liniaal meet lengte, niet stroom.",
        ],
      },
      {
        q: "Wat is de eenheid van stroomsterkte?",
        options: ["Ampère (A)", "Volt (V)", "Watt (W)", "Joule (J)"],
        answer: 0,
        wrongHints: [
          null,
          "Volt is voor spanning (U).",
          "Watt is voor vermogen (P).",
          "Joule is voor energie (E).",
        ],
      },
    ],
  },
  {
    title: "Weerstand (R) — wat tegenstand biedt",
    explanation: "**Weerstand** is een maat voor hoe sterk een onderdeel **tegenwerkt** tegen elektrische stroom. Symbool: **R**. Eenheid: **ohm (Ω)**.\n\n**Hoe hoger de weerstand, hoe minder stroom er bij dezelfde spanning vloeit**.\n\n**Wat bepaalt de weerstand?**\nVan een draad of voorwerp hangt het af van:\n• **Materiaal**: zilver < koper < ijzer < grafiet < (vaste stoffen) < plastic. Zilver geeft minst weerstand.\n• **Lengte**: dubbele lengte → dubbele weerstand.\n• **Doorsnede**: dubbele doorsnede (dikker) → halve weerstand.\n• **Temperatuur**: warmere geleiders hebben meestal *meer* weerstand. Bij heel koude metalen kan weerstand wel naar 0 zakken (**supergeleiding**).\n\n**Onthoud**: lange dunne draad = hoge weerstand. Korte dikke draad = lage weerstand. Daarom zijn hoogspanningskabels **dik** — minder weerstand → minder energieverlies.\n\n**Verbruikers met weerstand**\n• **Gloeilamp**: het draadje binnenin heeft hoge weerstand → wordt heet → gaat licht uitstralen.\n• **Toaster**: zelfde principe — weerstandsdraad wordt heet, brood toast.\n• **Elektrische kachel, waterkoker**: ook weerstandsverwarming.\n\n**Speciale onderdelen**\n• **Vaste weerstand**: gewoon een rechthoekje met vaste waarde (bv. 100 Ω).\n• **Schuifweerstand / regelbare weerstand**: kun je varieren (bv. dimmer).\n• **NTC**: weerstand daalt als 'ie warmer wordt — voor temperatuur-sensoren.\n• **LDR**: weerstand daalt als er licht op valt — voor licht-sensoren (lantaarnpalen).\n\n**Hoe meet je weerstand?**\nMet een **ohmmeter** — je sluit 'm aan op de uiteinden van het onderdeel terwijl die NIET op spanning staat.\n\n**Voorbeelden van weerstand**:\n• Korte koperdraad: ~0,01 Ω (te verwaarlozen).\n• Lampje 6 V: ~50 Ω.\n• Mens (van vinger tot vinger): ~10.000-100.000 Ω (hoger als huid droog is).\n• Goede isolator: > 1.000.000.000 Ω.",
    svg: ohmFormuleSvg(),
    checks: [
      {
        q: "Wat is de eenheid van weerstand?",
        options: ["Ohm (Ω)", "Volt (V)", "Watt (W)", "Newton (N)"],
        answer: 0,
        wrongHints: [
          null,
          "Volt is spanning.",
          "Watt is vermogen.",
          "Newton is voor kracht (mechanica).",
        ],
      },
      {
        q: "Wat **verlaagt** de weerstand van een draad?",
        options: [
          "Een dikkere doorsnede",
          "Langer maken",
          "Een dunnere doorsnede",
          "Vergulden met goud",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Langer = méér weerstand.",
          "Dunner = méér weerstand.",
          "Goud werkt wel goed maar het is niet de manier.",
        ],
      },
    ],
  },

  // ─── C. Wet van Ohm ───────────────
  {
    title: "Wet van Ohm — U = I × R",
    explanation: "De **Wet van Ohm** koppelt de drie grootheden — spanning, stroom en weerstand — in één simpele formule:\n\n**U = I × R**\n\nWaarbij:\n• **U** = spanning in volt (V)\n• **I** = stroomsterkte in ampère (A)\n• **R** = weerstand in ohm (Ω)\n\n**Driehoekstrucje**\nMaak een driehoek met U bovenaan, I en R onderaan:\n```\n     U\n    ───\n   I × R\n```\nBedek wat je zoekt:\n• Bedek **U** → U = I × R\n• Bedek **I** → I = U / R\n• Bedek **R** → R = U / I\n\n**Voorbeelden**:\n\n**Voorbeeld 1**: een lampje van 50 Ω op een 6 V batterij. Hoeveel stroom?\n• Gegeven: U = 6 V, R = 50 Ω.\n• Gevraagd: I.\n• I = U / R = 6 / 50 = **0,12 A** (= 120 mA).\n\n**Voorbeeld 2**: stopcontact 230 V, lamp trekt 0,5 A. Wat is de weerstand?\n• U = 230, I = 0,5.\n• R = U / I = 230 / 0,5 = **460 Ω**.\n\n**Voorbeeld 3**: een weerstand van 100 Ω wordt door 0,2 A doorlopen. Wat is de spanning?\n• I = 0,2, R = 100.\n• U = I × R = 0,2 × 100 = **20 V**.\n\n**Belangrijk: eenheden controleren**\n• Als U in volt en R in ohm: I komt in ampère.\n• Als spanning in **mV** (millivolt) of stroom in **mA** (milliampère): omrekenen naar V en A!\n• 1 mA = 0,001 A. 1 mV = 0,001 V.\n\n**De wet werkt niet altijd**\nDe Wet van Ohm geldt voor **ohmse weerstanden** — onderdelen waar R niet verandert. Bij gloeilampjes (waar het draadje warmer wordt en R verandert) klopt 'ie niet exact, maar wel ongeveer.",
    svg: ohmFormuleSvg(),
    checks: [
      {
        q: "Een lamp van 100 Ω op een 12 V batterij. Wat is de stroomsterkte?",
        options: ["0,12 A", "1.200 A", "12 A", "100 A"],
        answer: 0,
        wrongHints: [
          null,
          "Veel te veel — bij die spanning + weerstand is het minder.",
          "Te veel — dan zou de batterij ontploffen.",
          "Bedoel je de weerstand? Dan ja, maar de vraag is naar I.",
        ],
      },
      {
        q: "Welke formule **klopt** uit de Wet van Ohm?",
        options: ["U = I × R", "U = I + R", "U = I − R", "I = U × R"],
        answer: 0,
        wrongHints: [
          null,
          "Plus is fout — de wet is een vermenigvuldiging.",
          "Min is fout — vermenigvuldigen.",
          "Andersom — als je I berekent: I = U / R.",
        ],
      },
      {
        q: "Bij U = 230 V en I = 2 A — wat is R?",
        options: ["115 Ω", "460 Ω", "232 Ω", "1.150 Ω"],
        answer: 0,
        wrongHints: [
          null,
          "U × I, dat is vermogen — geen weerstand.",
          "U + I — de wet werkt met delen.",
          "Te groot — controleer met U = I × R = 2 × 1.150 = 2.300, klopt niet.",
        ],
      },
    ],
  },

  // ─── D. Schakelingen + vermogen ───────────────
  {
    title: "Serieschakeling vs parallelschakeling",
    explanation: "Twee of meer verbruikers in een kring kun je op twee manieren aansluiten: **in serie** of **parallel**.\n\n**A. Serieschakeling — alles op één rij**\n• Alle verbruikers liggen achter elkaar in **één pad**.\n• De stroom gaat **door alle verbruikers heen**.\n• **Stroomsterkte I is overal gelijk**.\n• Spanning verdeelt zich: de spanning van de bron splitst over de verbruikers.\n• Totale weerstand: **R-totaal = R₁ + R₂ + R₃ + ...**\n\n**Nadeel**: als één verbruiker stuk gaat, breekt de hele kring → alles uit. Oude kerstverlichting was zo gemaakt — als 1 lampje stuk → alle lampjes uit.\n\n**Voorbeeld**: twee lampjes van 50 Ω in serie op een 12 V batterij.\n• R-totaal = 50 + 50 = 100 Ω.\n• I = U / R = 12 / 100 = 0,12 A.\n• Spanning over elk lampje: 0,12 × 50 = 6 V (dus 6 V + 6 V = 12 V, klopt).\n\n**B. Parallelschakeling — naast elkaar**\n• Verbruikers liggen elk op een eigen 'tak' tussen + en −.\n• Stroom **splitst** zich.\n• **Spanning U is over elke tak gelijk** (= bron-spanning).\n• Stroomsterkte verdeelt zich: I-totaal = I₁ + I₂ + ...\n• Totale weerstand: **1/R-totaal = 1/R₁ + 1/R₂ + ...** (lager dan individueel!).\n\n**Voordeel**: als 1 verbruiker stuk gaat, blijft de rest werken (eigen tak).\n\n**Voorbeeld**: twee lampjes van 50 Ω parallel op een 12 V batterij.\n• Spanning over elk lampje: 12 V.\n• I door elk lampje: 12 / 50 = 0,24 A.\n• I-totaal van bron: 0,24 + 0,24 = 0,48 A.\n• R-totaal: 1/R = 1/50 + 1/50 = 2/50 → R = 25 Ω.\n\n**Thuisinstallatie**\nIn je huis zijn alle stopcontacten + lampen **parallel** geschakeld:\n• Elke aansluiting krijgt 230 V.\n• Als één lamp stukgaat, blijft de rest het doen.\n• Schakelaars en stoppen onderbreken hun eigen tak.",
    svg: serieParallelSvg(),
    checks: [
      {
        q: "Wat is **gelijk** voor alle verbruikers in een **serieschakeling**?",
        options: ["Stroomsterkte I", "Spanning U", "Weerstand R", "Niets"],
        answer: 0,
        wrongHints: [
          null,
          "Spanning splitst juist over de verbruikers.",
          "Weerstand kan per onderdeel verschillen.",
          "Wel degelijk iets — de stroom door elk is gelijk.",
        ],
      },
      {
        q: "Wat is **gelijk** voor alle verbruikers in een **parallelschakeling**?",
        options: ["Spanning U", "Stroomsterkte I", "Weerstand R", "Niets"],
        answer: 0,
        wrongHints: [
          null,
          "Stroomsterkte splitst juist.",
          "Weerstand kan per tak verschillen.",
          "Wel — de spanning over elke tak is gelijk aan de bron.",
        ],
      },
      {
        q: "Bij een **serieschakeling**: als 1 lamp stukgaat, wat gebeurt er met de rest?",
        options: [
          "Alle lampen gaan uit (kring is verbroken)",
          "Niks, ze blijven branden",
          "Alleen de 2e lamp gaat uit",
          "De batterij ontploft",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij parallel zou dit kloppen, maar in serie...",
          "De kring is gebroken — alles ligt stil.",
          "Geen ontploffing — gewoon stilstand.",
        ],
      },
    ],
  },
  {
    title: "Vermogen P = U × I — hoeveel energie per seconde",
    explanation: "**Vermogen** is hoeveel **energie per seconde** een verbruiker gebruikt (of een bron levert). Symbool: **P**. Eenheid: **watt (W)**.\n\n**Formule**:\n\n**P = U × I**\n\n• **P** = vermogen (W)\n• **U** = spanning (V)\n• **I** = stroomsterkte (A)\n\n**Voorbeelden**:\n• Spaarlamp: ~10 W.\n• Gloeilamp: ~60-100 W.\n• Laptop: ~50 W.\n• Waterkoker: ~2.000 W.\n• Wasmachine: ~2.000 W.\n• Auto-startmotor: ~2.000 W (gedurende kort moment).\n\n**Voorbeeld**:\nEen lamp aan stopcontact 230 V trekt 0,5 A stroom. Wat is het vermogen?\n• P = U × I = 230 × 0,5 = **115 W**.\n\n**Combineren met Wet van Ohm**\nAls je R weet maar geen U of I, kun je ook:\n• **P = I² × R** (vermogen via stroom + weerstand)\n• **P = U² / R** (vermogen via spanning + weerstand)\n\n**Voorbeeld**: een waterkoker van 2.000 W aan 230 V — wat is de stroom + weerstand?\n• I = P / U = 2000 / 230 ≈ **8,7 A**.\n• R = U / I = 230 / 8,7 ≈ **26,5 Ω**.\n\n**Waarom is vermogen belangrijk?**\n• **Vergelijken van apparaten**: een 1.000 W stofzuiger zuigt sterker dan een 600 W stofzuiger (ongeveer).\n• **Stroomverbruik bepalen**: P × tijd = energie (in joule of kilowattuur).\n• **Veiligheid**: een te zwaar apparaat (hoog P) op een te dunne draad → draad wordt heet → brandgevaar.\n\n**De stoppenkast (groep) thuis**\nElke groep in een stoppenkast kan max ~3.680 W aan (bij 230 V × 16 A). Sluit je meer dan dat aan, dan **slaat de stop eruit** (of de smeltveiligheid brandt door) → veiligheidsmechanisme tegen brand.",
    svg: ohmFormuleSvg(),
    checks: [
      {
        q: "Wat is de formule voor vermogen?",
        options: ["P = U × I", "P = U + I", "P = U / R", "P = R × I"],
        answer: 0,
        wrongHints: [
          null,
          "Plus is fout — vermenigvuldigen.",
          "Dat is een variant op Wet van Ohm voor I, niet voor P.",
          "Variatie kan maar net niet — let op de eenheden.",
        ],
      },
      {
        q: "Een lamp aan 230 V verbruikt 100 W. Wat is de stroom?",
        options: ["~0,43 A", "~23.000 A", "~2,3 A", "~10 A"],
        answer: 0,
        wrongHints: [
          null,
          "Veel te veel — controleer P = U × I.",
          "Te veel — dat zou een waterkoker zijn.",
          "Te veel — dan zou P = 230 × 10 = 2.300 W.",
        ],
      },
    ],
  },

  // ─── E. Veiligheid + energie ───────────────
  {
    title: "Veiligheid — aarding, smeltveiligheid, aardlek",
    explanation: "Elektriciteit is handig maar ook **gevaarlijk**. Daarom hebben elektrische installaties veiligheidsmechanismen.\n\n**1. Smeltveiligheid (klassieke 'stop')**\n• Een dun draadje dat **smelt** als de stroom te hoog wordt.\n• Smelt → kring onderbroken → veilig.\n• Eenmaal door, **vervangen** met nieuwe smeltveiligheid.\n\n**2. Automaten (moderne stoppen)**\n• Elektrische schakelaar die zichzelf uitschakelt bij overstroom.\n• Na het probleem op te lossen kun je 'm gewoon **terug-zetten**.\n• Vervangt geleidelijk de oude smeltveiligheden.\n\n**3. Aardlekschakelaar (aardlek)**\n• Detecteert als stroom 'weglekt' naar buiten de kring (bv. door een persoon naar de aarde).\n• Schakelt binnen **30 milliseconden** uit als er ~30 mA verschil is.\n• Redt levens — verplicht in nieuwe NL-installaties sinds jaren '70.\n\n**4. Aarding (groene/gele draad)**\n• Verbindt de **metalen behuizing** van apparaten met de aarde via een aparte draad.\n• Als er binnenin een sluiting is en het metalen omhulsel onder spanning komt → de stroom gaat via de aarding direct weg → aardlek detecteert lekstroom → schakelt uit.\n• Bescherming tegen schokken.\n\n**Stopcontact NL**\nEen normaal stopcontact heeft 3 aansluitingen:\n• **Fase**: brengt de spanning (230 V).\n• **Nul**: retour-pad voor de stroom.\n• **Aarde**: veiligheidsverbinding.\n\n**Wat te doen bij een schok?**\n• **NIET** zelf de persoon aanraken zolang die nog onder spanning staat — anders krijg jij óók de stroom.\n• Eerst **stroom uitschakelen** (stop trekken, stekker eruit).\n• Daarna pas helpen + 112 bellen.\n\n**Vuistregels veiligheid**:\n• Geen elektrische apparaten in/bij water.\n• Geen kabels onder tapijten of meubelen (overhitting).\n• Stekkerdoos niet overbelasten (max ~3.680 W per groep).\n• Bij beschadigde kabel: niet gebruiken, vervangen.\n• Bij twijfel: een **erkende elektricien** inschakelen.",
    svg: basisSchakelingSvg(true),
    checks: [
      {
        q: "Wat doet een **aardlekschakelaar**?",
        options: [
          "Schakelt razendsnel uit als stroom weglekt naar de aarde (bv. via een mens)",
          "Filtert vuile stroom",
          "Verlaagt de spanning",
          "Maakt de stroom sterker",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen filter — een schakelaar.",
          "Verlaagt niet de spanning, wel kan 'ie 'm uitschakelen.",
          "Andersom — schakelt juist uit.",
        ],
      },
      {
        q: "Waarom hebben metalen apparaten een **aardingdraad**?",
        options: [
          "Veiligheid: bij interne sluiting gaat stroom via aarde weg ipv via de gebruiker",
          "Het maakt het apparaat sneller",
          "Voor de geluidskwaliteit",
          "Om kortsluiting te veroorzaken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen invloed op snelheid.",
          "Geluidskwaliteit komt elders vandaan.",
          "Andersom — voorkomt juist gevaar.",
        ],
      },
    ],
  },
  {
    title: "Energie + kosten — kilowattuur (kWh)",
    explanation: "**Energie** is **vermogen × tijd** — het totaal dat een apparaat gebruikt.\n\n**Formule**:\n\n**E = P × t**\n\n• **E** = energie (joule of kWh)\n• **P** = vermogen (W of kW)\n• **t** = tijd (s of u)\n\n**Officiële eenheid**: joule (J). Maar voor stroom thuis gebruiken we **kilowattuur (kWh)**.\n\n**Wat is 1 kWh?**\nEen apparaat van **1.000 watt (1 kW)** dat **1 uur** aan staat verbruikt **1 kWh**.\n\n**Voorbeelden**:\n• Spaarlamp 10 W, 10 uur aan: 10 × 10 = 100 Wh = **0,1 kWh**.\n• Waterkoker 2.000 W, 5 minuten (= 1/12 uur): 2.000 × 1/12 ≈ 167 Wh = **0,17 kWh**.\n• Wasmachine 2.000 W, 2 uur warm wassen: 2.000 × 2 = 4.000 Wh = **4 kWh**.\n\n**Wat kost het?**\nIn 2026 in NL: **stroomprijs ~0,30 € per kWh** (varieert per leverancier en jaar — was eerder ~0,22 €, ging in energiecrisis 2022 omhoog).\n\n**Voorbeelden kosten**:\n• Wasmachine 4 kWh × 0,30 € = **€ 1,20** per wasbeurt.\n• Vriezer 365 dagen × 24u × 100 W = ~876 kWh per jaar × 0,30 € = **~€ 263 per jaar**.\n• Tv 100 W, 5 uur per dag, 365 dagen = 182,5 kWh × 0,30 € = **~€ 55 per jaar**.\n\n**Energie besparen**\n• **Vervang gloeilampen door LED** — een LED van 8 W geeft evenveel licht als gloeilamp 60 W. Bespaart ~85%.\n• **Apparaten echt uit, niet stand-by** — stand-by-modus blijft watts trekken.\n• **A++++-apparaten kopen** (energielabel) — gebruiken minder dan oude apparaten.\n• **Was op 30 °C** ipv 60 °C — bespaart de helft van de stroom (verwarmen kost het meeste).\n\n**De stroommeter**\nIn elke woning hangt een **slimme meter** die het kWh-verbruik per kwartier doorgeeft aan de leverancier. Daarop is je rekening gebaseerd.",
    svg: basisSchakelingSvg(true),
    checks: [
      {
        q: "Wat is **1 kWh**?",
        options: [
          "Een apparaat van 1 kW dat 1 uur aan staat",
          "Een apparaat dat 1 km/u beweegt",
          "1 kilometer per uur",
          "1.000 watt vermogen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niets met snelheid — dit is energie.",
          "Niets met snelheid.",
          "Dat is 1 kW (vermogen), niet kWh (energie).",
        ],
      },
      {
        q: "Een waterkoker van 2.000 W staat 30 minuten aan. Hoeveel kWh?",
        options: ["1 kWh", "60 kWh", "2 kWh", "0,06 kWh"],
        answer: 0,
        wrongHints: [
          null,
          "Veel te veel — controleer: 2.000 × 0,5 uur = 1.000 Wh = 1 kWh.",
          "Te veel — dan zou de waterkoker 2u draaien.",
          "Te weinig — controleer met 2.000 × 0,5.",
        ],
      },
    ],
  },

  // ─── F. Eindopdracht ───────────────
  {
    title: "Eindopdracht — pas alles toe",
    explanation: "Tijd om alles te combineren! Bij elke vraag: gebruik de juiste formule.\n\n**Snelle samenvatting**:\n\n| Grootheid | Symbool | Eenheid | Hoe meten |\n|---|---|---|---|\n| Spanning | U | volt (V) | voltmeter parallel |\n| Stroomsterkte | I | ampère (A) | ampèremeter in serie |\n| Weerstand | R | ohm (Ω) | ohmmeter (zonder spanning) |\n| Vermogen | P | watt (W) | uit U × I |\n| Energie | E | kilowattuur (kWh) | uit P × t |\n\n**Formules om te onthouden**:\n• **U = I × R** (Wet van Ohm)\n• **P = U × I** (vermogen)\n• **E = P × t** (energie = vermogen × tijd)\n\n**Schakelingen**:\n| | Serie | Parallel |\n|---|---|---|\n| Stroom I | overal gelijk | totaal = som van takken |\n| Spanning U | totaal = som | over elke tak gelijk |\n| Weerstand R | R-totaal = R₁ + R₂ | 1/R-totaal = 1/R₁ + 1/R₂ |\n\nVeel succes!",
    svg: ohmFormuleSvg(),
    checks: [
      {
        q: "Een lamp van 200 Ω op 230 V. Hoeveel stroom?",
        options: ["1,15 A", "230 A", "0,01 A", "46 A"],
        answer: 0,
        wrongHints: [
          null,
          "Veel te veel — controleer: I = U/R = 230/200.",
          "Te weinig — controleer.",
          "Te veel.",
        ],
      },
      {
        q: "Een apparaat van 1.500 W staat 4 uur aan. Hoeveel kWh?",
        options: ["6 kWh", "375 kWh", "0,375 kWh", "60 kWh"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — denk in kW: 1,5 kW × 4 uur = 6 kWh.",
          "Te weinig — controleer eenheden.",
          "Te veel.",
        ],
      },
      {
        q: "Twee weerstanden van 100 Ω in serie. Wat is R-totaal?",
        options: ["200 Ω", "50 Ω", "100 Ω", "10.000 Ω"],
        answer: 0,
        wrongHints: [
          null,
          "Dat zou parallel geven (R-totaal lager dan elk).",
          "In serie tellen ze op.",
          "Te veel — wel uitgebreid maar 100 + 100 is gewoon 200.",
        ],
      },
      {
        q: "Welke formule is **fout**?",
        options: [
          "P = U + I",
          "U = I × R",
          "P = U × I",
          "E = P × t",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Klopt — Wet van Ohm.",
          "Klopt — vermogen-formule.",
          "Klopt — energie-formule.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const elektriciteitNatuurkunde = {
  id: "elektriciteit-natuurkunde",
  title: "Elektriciteit — stroom, spanning, weerstand",
  emoji: "⚡",
  level: "klas3",
  subject: "natuurkunde",
  intro:
    "Hoe elektriciteit werkt: van geladen deeltjes en stroomkringen tot de Wet van Ohm (U = I × R), serie- en parallelschakelingen, vermogen (P = U × I), veiligheid (aardlek + smeltveiligheid) en hoe je je stroomverbruik berekent in kWh. Examenstof natuurkunde CSE.",
  triggerKeywords: [
    "elektriciteit", "elektriciteit natuurkunde",
    "stroom", "stroomsterkte", "ampere", "ampère",
    "spanning", "volt",
    "weerstand", "ohm",
    "wet van ohm", "u=i*r", "u = i x r",
    "vermogen", "watt",
    "stroomkring", "schakeling", "schakelschema",
    "serie", "parallel", "serieschakeling", "parallelschakeling",
    "aardlek", "aardlekschakelaar", "aarding", "aardingdraad",
    "smeltveiligheid", "stop", "stoppenkast",
    "kortsluiting", "kortgesloten",
    "isolator", "geleider",
    "elektron", "elektronen", "lading",
    "gelijkspanning", "wisselspanning", "ac dc",
    "kwh", "kilowattuur", "stroomverbruik",
    "ldr", "ntc", "weerstandstype",
    "bliksem", "statische elektriciteit",
  ],
  chapters,
  steps,
};

export default elektriciteitNatuurkunde;
