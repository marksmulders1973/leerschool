// Leerpad: Genetica + erfelijkheid
// 9 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: klas 3 onderbouw VO. Examenstof biologie CSE.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  dna_a: "#5d9cec",
  dna_b: "#ec407a",
  domA: "#ef6c00",  // dominant allel
  domA_b: "#ffd54f",
  recA: "#69f0ae",  // recessief allel
  man: "#5d9cec",   // vierkant
  vrouw: "#ec407a", // cirkel
};

const stepEmojis = [
  "🧬",   // A1. wat is genetica
  "🔢",   // B1. chromosomen + 23 paren
  "🎲",   // B2. genen + allelen
  "🧮",   // C1. Mendel + dominant/recessief
  "♀♂",   // C2. geslachtsbepaling
  "👨‍👩‍👧",  // D1. stamboom
  "❌",   // D2. erfelijke ziekten
  "🔬",   // E1. moderne genetica
  "🏆",   // F. eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat is erfelijkheid?", emoji: "🧬", from: 0, to: 0 },
  { letter: "B", title: "Bouwstenen — chromosomen + genen", emoji: "🔢", from: 1, to: 2 },
  { letter: "C", title: "Mendel — dominant/recessief", emoji: "🧮", from: 3, to: 4 },
  { letter: "D", title: "Stambomen + erfelijke ziektes", emoji: "👨‍👩‍👧", from: 5, to: 6 },
  { letter: "E", title: "Moderne genetica + eindopdracht", emoji: "🔬", from: 7, to: 8 },
];

// Mendel-kruisings-tabel (Punnett square).
function punnettSvg(parent1 = "Aa", parent2 = "Aa", domLabel = "A", recLabel = "a") {
  const p1 = [parent1[0], parent1[1]];
  const p2 = [parent2[0], parent2[1]];
  const cells = [
    p1[0] + p2[0], p1[0] + p2[1],
    p1[1] + p2[0], p1[1] + p2[1],
  ];
  return `<svg viewBox="0 0 280 220">
<rect x="0" y="0" width="280" height="220" fill="${COLORS.paper}"/>
<text x="140" y="18" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">Kruising-tabel (Punnett square)</text>
<text x="140" y="36" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Ouder 1: ${parent1} × Ouder 2: ${parent2}</text>

<!-- Headers -->
<rect x="100" y="50" width="60" height="30" fill="${COLORS.dna_a}" opacity="0.55"/>
<text x="130" y="70" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial" font-weight="bold">${p2[0]}</text>
<rect x="160" y="50" width="60" height="30" fill="${COLORS.dna_a}" opacity="0.55"/>
<text x="190" y="70" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial" font-weight="bold">${p2[1]}</text>

<rect x="40" y="80" width="60" height="60" fill="${COLORS.dna_b}" opacity="0.55"/>
<text x="70" y="115" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial" font-weight="bold">${p1[0]}</text>
<rect x="40" y="140" width="60" height="60" fill="${COLORS.dna_b}" opacity="0.55"/>
<text x="70" y="175" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial" font-weight="bold">${p1[1]}</text>

<!-- Result cells -->
${cells.map((c, i) => {
    const x = 100 + (i % 2) * 60;
    const y = 80 + Math.floor(i / 2) * 60;
    const isHomDom = c === domLabel + domLabel;
    const isHomRec = c === recLabel + recLabel;
    const isHet = !isHomDom && !isHomRec;
    const fill = isHomDom ? COLORS.domA : isHomRec ? COLORS.recA : COLORS.domA_b;
    return `
<rect x="${x}" y="${y}" width="60" height="60" fill="${fill}" opacity="0.55" stroke="#fff" stroke-width="1"/>
<text x="${x + 30}" y="${y + 32}" text-anchor="middle" fill="#fff" font-size="16" font-family="Arial" font-weight="bold">${c[0] === recLabel && c[1] === domLabel ? domLabel + recLabel : c}</text>
<text x="${x + 30}" y="${y + 48}" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">${isHomDom ? "homozygoot dom." : isHomRec ? "homozygoot rec." : "heterozygoot"}</text>`;
  }).join("")}

<text x="140" y="215" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">Verhouding ${domLabel}_ : ${recLabel}${recLabel} = 3 : 1 (bij Aa × Aa)</text>
</svg>`;
}

// DNA-helix schematisch.
function dnaSvg() {
  return `<svg viewBox="0 0 280 200">
<rect x="0" y="0" width="280" height="200" fill="${COLORS.paper}"/>
<text x="140" y="18" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">DNA — een dubbele helix</text>

<!-- Twee golvende strengen -->
<path d="M 50 40 Q 110 60 50 80 Q -10 100 50 120 Q 110 140 50 160 Q -10 180 50 195" stroke="${COLORS.dna_a}" stroke-width="3" fill="none"/>
<path d="M 50 40 Q -10 60 50 80 Q 110 100 50 120 Q -10 140 50 160 Q 110 180 50 195" stroke="${COLORS.dna_b}" stroke-width="3" fill="none"/>

<!-- Basenparen-streepjes -->
${[55, 80, 105, 130, 155, 180].map((y) => `
<line x1="40" y1="${y}" x2="60" y2="${y}" stroke="${COLORS.warm}" stroke-width="1.5"/>`).join("")}

<!-- Annotatie rechts -->
<text x="120" y="50" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">DNA bevat:</text>
<text x="120" y="68" fill="${COLORS.text}" font-size="10" font-family="Arial">• 4 basen: A, T, C, G</text>
<text x="120" y="82" fill="${COLORS.text}" font-size="10" font-family="Arial">• A pairt altijd met T</text>
<text x="120" y="96" fill="${COLORS.text}" font-size="10" font-family="Arial">• C pairt altijd met G</text>
<text x="120" y="110" fill="${COLORS.text}" font-size="10" font-family="Arial">• Mens: ~3 miljard letters</text>

<text x="120" y="135" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">In elke cel:</text>
<text x="120" y="151" fill="${COLORS.text}" font-size="10" font-family="Arial">• 23 chromosoomparen</text>
<text x="120" y="165" fill="${COLORS.text}" font-size="10" font-family="Arial">• ~20.000 genen</text>
<text x="120" y="179" fill="${COLORS.text}" font-size="10" font-family="Arial">• Bevat ALLE bouwinfo</text>
<text x="120" y="193" fill="${COLORS.text}" font-size="10" font-family="Arial">  voor jouw lichaam</text>
</svg>`;
}

const steps = [
  // ─── A. Wat is erfelijkheid ───────────────
  {
    title: "Wat is erfelijkheid?",
    explanation: "**Erfelijkheid** is hoe **eigenschappen** van ouders aan kinderen doorgegeven worden. Dat je oogkleur, haarkleur en zelfs sommige karaktereigenschappen lijken op die van je ouders — dat komt door erfelijkheid.\n\n**Voorbeelden van erfelijke eigenschappen**:\n• Oogkleur (blauw, bruin, groen)\n• Haarkleur en -type\n• Lengte (deels — voeding speelt ook mee)\n• Bloedgroep (A, B, AB, O)\n• Of je tong kunt rollen\n• Wel/niet sproeten\n• Sommige ziektes (sikkelcelanemie, hemofilie)\n\n**Niet erfelijk** (komt door omgeving/leefstijl):\n• Welke taal je spreekt\n• Of je goed bent in voetbal\n• Wat je gewicht is (deels — genen geven aanleg)\n• Een gebroken been\n• Of je rookt\n\n**Hoe wordt erfelijke informatie doorgegeven?**\nVia **DNA** in de **eicel** van je moeder en de **zaadcel** van je vader. Bij bevruchting versmelten die twee → een nieuwe combinatie.\n\nDaarom ben je voor de helft 'mama' en voor de helft 'papa' qua DNA. Niet 50/50 op uiterlijk omdat dominant/recessief speelt — daar gaan we straks naar kijken.\n\n**Genetica** = de wetenschap die erfelijkheid bestudeert.\n**Genoom** = al het DNA van een organisme (= ~3 miljard letters bij de mens).\n**Stamboom** = schema van familieleden, vaak gebruikt om erfelijke ziektes te traceren.",
    svg: dnaSvg(),
    checks: [
      {
        q: "Wat is **erfelijkheid**?",
        options: [
          "Doorgeven van eigenschappen via genen van ouders aan kinderen",
          "Een ziekte",
          "De kleur van je haar",
          "Hoe lang je leeft",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Sommige ziektes zijn erfelijk maar erfelijkheid zelf is geen ziekte.",
          "Haarkleur is een gevolg van erfelijkheid.",
          "Levensduur deels erfelijk, maar dat is geen definitie.",
        ],
      },
      {
        q: "Welke eigenschap is **niet erfelijk**?",
        options: [
          "Welke taal je spreekt",
          "Oogkleur",
          "Bloedgroep",
          "Of je tong kunt rollen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Oogkleur wordt geërfd via genen.",
          "Bloedgroep is bekend erfelijke eigenschap.",
          "Tong-rollen volgt een dominant/recessief patroon.",
        ],
      },
    ],
  },

  // ─── B. Chromosomen + genen ───────────────
  {
    title: "DNA, chromosomen en genen — de bouwstenen",
    explanation: "**DNA** *(deoxyribonucleïnezuur)* is het molecuul dat **alle erfelijke informatie** bevat. Het zit in de **celkern** van bijna elke cel.\n\n**Hoe ziet DNA eruit?**\n• Een **dubbele helix** — twee strengen die om elkaar gedraaid zijn (als een spiraal-trap).\n• Tussen de strengen zitten **basenparen** (de 'treden').\n• Vier soorten basen: **A, T, C, G** (Adenine, Thymine, Cytosine, Guanine).\n• A en T vormen altijd een paar; C en G vormen altijd een paar.\n• De volgorde van die letters bepaalt alle erfelijke informatie.\n\n**Bij de mens**: ~3 miljard basenparen, opgerold in 46 stukken — de **chromosomen**.\n\n**Chromosomen**\n• Mens: **46 chromosomen** = **23 paren**.\n• Elk paar bestaat uit één chromosoom van mama + één van papa.\n• 22 paren zijn 'gewone' chromosomen (autosomen).\n• 1 paar bepaalt het **geslacht** (X en Y).\n\n**Genen**\n• Een **gen** is een stukje DNA dat een **specifieke eigenschap** bepaalt.\n• Mens heeft ~20.000 genen verspreid over de 46 chromosomen.\n• Elk gen 'codeert' voor een eiwit dat iets doet in je lichaam.\n• Voorbeeld: gen voor oogkleur, gen voor bloedgroep, gen voor lengte.\n\n**Allelen** — verschillende vormen van een gen\n• Voor één gen kunnen verschillende **versies** bestaan, **allelen** genoemd.\n• Voorbeeld: gen voor oogkleur heeft een 'blauw'-allel en een 'bruin'-allel.\n• Iedereen heeft 2 allelen voor elk gen — één van mama, één van papa.\n\n**Hiërarchie** van klein naar groot:\n• Basenpaar (A-T of C-G).\n• Gen = stukje DNA met info voor één eigenschap.\n• Chromosoom = lange streng met veel genen.\n• Genoom = al je DNA (= 23 chromosoomparen samen).",
    svg: dnaSvg(),
    checks: [
      {
        q: "Hoeveel chromosomen heeft een mens?",
        options: ["46 (= 23 paren)", "23", "92", "100"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het aantal paren — totaal is 2 × 23 = 46.",
          "Te veel — verdubbel paren zou 46 zijn.",
          "Te veel.",
        ],
      },
      {
        q: "Wat is een **gen**?",
        options: [
          "Stukje DNA dat een eigenschap bepaalt",
          "Een hele cel",
          "Een chromosoompaar",
          "Een eiwit",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Cel is veel groter — bevat alle DNA.",
          "Chromosoompaar bevat veel genen.",
          "Genen coderen voor eiwitten, maar zijn zelf DNA-stukjes.",
        ],
      },
      {
        q: "Welke 4 basen vormen DNA?",
        options: ["A, T, C, G", "A, B, C, D", "X, Y, Z, W", "1, 2, 3, 4"],
        answer: 0,
        wrongHints: [
          null,
          "Geen letters van het alfabet — basen.",
          "Geen.",
          "Niet getallen — letters.",
        ],
      },
    ],
  },
  {
    title: "Allelen — homozygoot en heterozygoot",
    explanation: "Voor elk gen heb je **twee allelen** — één van je vader, één van je moeder. Die twee allelen kunnen **gelijk of verschillend** zijn.\n\n**Homozygoot** *(beide allelen gelijk)*\n• AA = beide dominante allelen.\n• aa = beide recessieve allelen.\n• 'Pure' lijn voor die eigenschap.\n\n**Heterozygoot** *(allelen verschillend)*\n• Aa = één dominant, één recessief.\n• 'Gemengd'.\n\n**Notatie**:\n• **Hoofdletter** (A) = dominant allel.\n• **Kleine letter** (a) = recessief allel.\n• Beide letters samen = **genotype** (welke allelen je hebt).\n• Wat je ZIET = **fenotype**.\n\n**Voorbeeld: oogkleur (vereenvoudigd)**\n• Allel B = bruin (dominant).\n• Allel b = blauw (recessief).\n\n| Genotype | Fenotype |\n|---|---|\n| BB | bruine ogen (homozygoot dominant) |\n| Bb | bruine ogen (heterozygoot — bruin wint) |\n| bb | blauwe ogen (homozygoot recessief) |\n\n**Belangrijk**: Bb LOOKS hetzelfde als BB (beide bruine ogen), maar Bb kan **wel** een blauw-allel doorgeven aan kinderen. BB niet.\n\n**Daarom**: twee bruine ogen-ouders kunnen tóch een blauwogig kind krijgen — als beide ouders Bb zijn, en het kind toevallig allel b van beide krijgt = bb.\n\n**Onthoud**:\n• **Genotype** = je DNA-letters (BB / Bb / bb).\n• **Fenotype** = wat je ziet of meet (bruin/blauw).\n• Hetzelfde fenotype kan twee genotypes hebben (BB en Bb zijn allebei bruin).",
    svg: dnaSvg(),
    checks: [
      {
        q: "Iemand met genotype **Bb** heeft welk fenotype? *(B = bruin dominant, b = blauw recessief)*",
        options: ["Bruine ogen", "Blauwe ogen", "Groene ogen", "Geen ogen"],
        answer: 0,
        wrongHints: [
          null,
          "B is dominant — die bepaalt het fenotype.",
          "Niet relevant in dit gen.",
          "Iedereen heeft ogen, jij hebt humor.",
        ],
      },
      {
        q: "Wat betekent **homozygoot**?",
        options: [
          "Beide allelen voor een gen zijn hetzelfde (AA of aa)",
          "Beide allelen zijn verschillend",
          "Je hebt 1 allel",
          "Je hebt geen genen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — dat is heterozygoot.",
          "Iedereen heeft 2 allelen per gen.",
          "Iedereen heeft genen.",
        ],
      },
    ],
  },

  // ─── C. Mendel ───────────────
  {
    title: "Mendel + dominant/recessief",
    explanation: "**Gregor Mendel** was een Oostenrijkse monnik die rond 1860 door erwten te kruisen de **basisregels van erfelijkheid** ontdekte. Hij deed dit voordat we DNA kenden — geniaal werk!\n\n**Mendel's experimenten**\nMendel kruiste **erwten** met verschillende eigenschappen (groene vs gele zaden, gerimpeld vs glad, etc.). Hij hield generaties bij.\n\n**Belangrijke ontdekkingen**:\n\n**1. Gen heeft twee allelen**\nElke eigenschap wordt door 2 'erfeenheden' (= allelen) bepaald — één van elke ouder.\n\n**2. Eén allel kan dominant zijn over de ander**\n• Dominant allel (groot letter) overheerst.\n• Recessief allel (klein letter) wordt onderdrukt — komt alleen voor bij homozygoot recessief (aa).\n\n**3. Allelen splitsen bij voortplanting**\nIn eicellen + zaadcellen zit per gen maar **één allel** (geen 2). Bij bevruchting komen ze weer samen.\n\n**De kruising-tabel (Punnett square)**\n\nAls beide ouders heterozygoot zijn (Bb × Bb), wat krijgen kinderen?\n\n```\n         B    b\n      ┌────┬────┐\n   B  │ BB │ Bb │\n      ├────┼────┤\n   b  │ Bb │ bb │\n      └────┴────┘\n```\n\nResultaat: 1 BB + 2 Bb + 1 bb.\n\nFenotypes:\n• BB = bruin (1 deel)\n• Bb = bruin (2 delen)\n• bb = blauw (1 deel)\n\nVerhouding: **3 bruin : 1 blauw** (de beroemde **3:1 verhouding** van Mendel).\n\n**Voorbeeld**: twee bruinogige ouders, beide heterozygoot (Bb), krijgen 4 kinderen. Statistisch: 3 hebben bruine ogen, 1 heeft blauwe ogen. Dat is een **kans**, geen exacte verhouding.\n\n**Andere combinaties**:\n• AA × aa → alle kinderen Aa (heterozygoot, fenotype dominant)\n• AA × Aa → 1 AA + 1 Aa = alle dominant fenotype\n• Aa × aa → 1 Aa + 1 aa = 50% dominant, 50% recessief fenotype",
    svg: punnettSvg("Aa", "Aa", "A", "a"),
    checks: [
      {
        q: "Bij een kruising **Aa × Aa**: welke verhouding fenotype krijg je?",
        options: ["3 dominant : 1 recessief", "1 dominant : 1 recessief", "Allemaal dominant", "Allemaal recessief"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is bij Aa × aa.",
          "Dat is bij AA × Aa of AA × aa.",
          "Recessief alleen bij aa, en dat is 1 op 4.",
        ],
      },
      {
        q: "Wie ontdekte de basisregels van erfelijkheid (~1860)?",
        options: ["Gregor Mendel", "Charles Darwin", "Albert Einstein", "Marie Curie"],
        answer: 0,
        wrongHints: [
          null,
          "Darwin onderzocht evolutie, niet erfelijkheid direct.",
          "Einstein was natuurkundige.",
          "Curie deed onderzoek naar straling.",
        ],
      },
      {
        q: "Twee bruinogige ouders krijgen een blauwogig kind. Wat moet wel zo zijn?",
        options: [
          "Beide ouders zijn heterozygoot (Bb)",
          "Eén ouder heeft blauwe ogen",
          "Het kind heeft een mutatie",
          "Onmogelijk — moet bruin zijn",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet nodig — Bb-ouders kunnen ook bb-kind krijgen.",
          "Geen mutatie nodig — gewone genetica.",
          "Wel mogelijk via heterozygote ouders.",
        ],
      },
    ],
  },
  {
    title: "Geslachtsbepaling — X en Y chromosomen",
    explanation: "**Eén** van de 23 chromosoomparen bepaalt het **geslacht** (man of vrouw). Dat zijn de **geslachtschromosomen X en Y**.\n\n**Vrouw**: XX (twee X-chromosomen)\n**Man**: XY (één X, één Y)\n\n**Hoe wordt het geslacht bepaald?**\n• De **moeder** geeft altijd een **X** door (zij heeft alleen X's).\n• De **vader** geeft een **X of Y** door (hij heeft beide).\n• Dus: **de vader bepaalt het geslacht** van het kind.\n\n```\n       Vader (XY)\n     X         Y\n   ┌────┬────┐\nX  │ XX │ XY │\nM  │ ♀  │ ♂  │\no  ├────┼────┤\ne  │ XX │ XY │\nd  │ ♀  │ ♂  │\ne  └────┴────┘\nr (XX)\n```\n\nKans: **50% XX (meisje) + 50% XY (jongen)**. Voor elk kind is het opnieuw 50/50.\n\n**Geslachtsgebonden eigenschappen**\nSommige genen zitten op het **X-chromosoom**. Omdat mannen maar **één X** hebben, krijgen ze sneller te maken met X-gebonden ziektes.\n\n**Voorbeelden van X-gebonden ziektes**:\n• **Hemofilie** (bloed stolt niet — komt vooral bij mannen voor).\n• **Kleurenblindheid** (vooral bij mannen).\n• **Spierziekte van Duchenne**.\n\n**Waarom vaker bij mannen?**\nVrouwen hebben twee X-chromosomen. Als één een 'kapotte' versie heeft, kan de andere X dat compenseren (dragen ze het wel maar zijn geen patiënt).\n\nMannen hebben maar één X. Geen back-up. Als die X een ziekte-allel heeft, zijn ze ziek.\n\n**Voorbeeld stamboom hemofilie**:\n• Moeder is draagster (X^h X) — niet ziek zelf.\n• Vader gezond (XY).\n• Zonen: 50% kans op hemofilie (X^h Y).\n• Dochters: 50% kans op draagster (X^h X), 50% normaal (XX).",
    svg: punnettSvg("XX", "XY", "X", "Y"),
    checks: [
      {
        q: "Wie bepaalt het geslacht van het kind?",
        options: [
          "De vader (geeft X of Y door)",
          "De moeder (geeft X of Y door)",
          "Beiden gelijk",
          "Toeval",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Moeder geeft alleen X — heeft geen Y.",
          "Andersom — vader bepaalt.",
          "Het is determined door het allel dat vader doorgeeft, niet zomaar toeval.",
        ],
      },
      {
        q: "Waarom komt **kleurenblindheid** vaker voor bij mannen?",
        options: [
          "Mannen hebben maar 1 X-chromosoom (geen back-up)",
          "Mannen hebben slechtere ogen",
          "Het is door testosteron",
          "Mannen kijken meer schermen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen verschil in ogen-kwaliteit — over genetica.",
          "Niet door hormonen.",
          "Niet door schermen.",
        ],
      },
    ],
  },

  // ─── D. Stambomen + ziektes ───────────────
  {
    title: "Stambomen lezen + erfelijkheidsdiagrammen",
    explanation: "Een **stamboom** in de genetica is een schema dat laat zien hoe een eigenschap of ziekte door een familie wordt doorgegeven.\n\n**Standaard symbolen**:\n• **Vierkant** = man\n• **Cirkel** = vrouw\n• **Volledig gevuld** = heeft de eigenschap/ziekte\n• **Half gevuld** of geprikt = drager (heeft 1 recessief allel maar geen ziekte)\n• **Leeg** = geen drager\n\n**Lijnen**:\n• **Horizontale lijn** tussen man + vrouw = ouderpaar.\n• **Verticale lijn** vanaf paar = naar kinderen.\n\n**Voorbeeld: stamboom recessieve ziekte (zoals cystische fibrose)**\n\n```\nGen: F = gezond (dominant), f = ziek (recessief)\n\n   Opa (Ff)  ──  Oma (Ff)\n          │\n        ┌─┴─┐  ┌────┐\n     Vader   Tante (ff = ziek)\n     (Ff)  ──  Moeder (Ff)\n              │\n        ┌─────┼─────┐\n     Zoon   Dochter   Zoon\n     (FF)    (Ff)     (ff = ziek)\n```\n\n**Hoe analyseer je een stamboom?**\n1. **Is de eigenschap dominant of recessief?**\n   - Als zieke ouder + gezonde ouder een gezond kind krijgen → recessief is mogelijk\n   - Als 2 gezonde ouders een ziek kind krijgen → moet recessief zijn (beiden dragers)\n\n2. **Zit het op het X-chromosoom?**\n   - Vooral mannen aangedaan → X-gebonden recessief waarschijnlijk\n   - Geen overdracht van vader naar zoon → X-gebonden\n\n3. **Welke kans op ziekte voor volgende kind?**\n   - Twee dragers (Ff × Ff) → 25% kans op ziek kind (ff)\n\n**Genetica counseling**\nVoor stellen die zich zorgen maken over erfelijke ziektes is er **genetisch advies** beschikbaar — een gespecialiseerde arts berekent kansen en bespreekt opties.",
    svg: punnettSvg("Ff", "Ff", "F", "f"),
    checks: [
      {
        q: "In een stamboom: wat betekent een **vierkant** symbool?",
        options: ["Man", "Vrouw", "Drager", "Onbekend"],
        answer: 0,
        wrongHints: [
          null,
          "Vrouw is een cirkel.",
          "Drager wordt aangegeven met half-gevuld.",
          "Onbekend wordt vaak met '?' aangegeven.",
        ],
      },
      {
        q: "Twee gezonde ouders krijgen een kind met cystische fibrose (recessieve ziekte). Welke conclusie?",
        options: [
          "Beide ouders zijn dragers (Ff)",
          "Eén ouder is patiënt zonder dat te weten",
          "Het kind heeft een mutatie",
          "Onmogelijk — kan niet",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Patiënten zonder symptomen bestaat bijna niet voor deze ziekte.",
          "Geen mutatie nodig.",
          "Wel degelijk mogelijk via dragers.",
        ],
      },
    ],
  },
  {
    title: "Erfelijke ziektes — wat zijn ze en wat eraan te doen",
    explanation: "**Erfelijke ziektes** zijn ziektes die door **kapotte genen** ontstaan en doorgegeven kunnen worden via DNA.\n\n**Drie hoofdtypen erfelijke ziektes**:\n\n**1. Autosomaal recessief**\n• Allel op gewoon chromosoom (niet X/Y).\n• Beide ouders moeten drager zijn voor zieke kind.\n• Voorbeelden:\n  - **Cystische fibrose (CF)**: taai slijm in longen → ademhalingsproblemen.\n  - **Sikkelcelanemie**: misvormde rode bloedcellen — vooral bij Afrikaanse afkomst.\n  - **Tay-Sachs**: zenuwafwijking — vooral bij Asjkenazische joden.\n  - **Fenylketonurie (PKU)**: kan eiwit niet verwerken — wordt nu standaard getest bij baby's.\n\n**2. Autosomaal dominant**\n• Eén ziek allel is genoeg → 50% kans op overdracht aan kind.\n• Vaak zichtbaar in elke generatie.\n• Voorbeelden:\n  - **Ziekte van Huntington**: hersenen takelen langzaam af, treedt op rond 40+.\n  - **Marfan-syndroom**: lange dunne ledematen, hartproblemen.\n\n**3. X-gebonden recessief** (komt vaker bij mannen voor)\n• Allel op X-chromosoom.\n• Mannen vaak ziek; vrouwen vaak draagster.\n• Voorbeelden:\n  - **Hemofilie**: bloed stolt niet (beroemd: koningshuis Europa, Tsaar Nicolaas II).\n  - **Spierziekte van Duchenne**: spierverval bij jongens.\n  - **Kleurenblindheid**: rood-groen verwisselen.\n\n**Wat is er aan te doen?**\n\n*Genezing meestal niet mogelijk* (genen kun je niet zomaar veranderen). Maar wel:\n• **Symptomen verlichten**: medicijnen, fysiotherapie, dieet.\n• **Vroeg ontdekken**: babyhielprik test op 19 ziektes in NL.\n• **Genetisch advies** voor stellen die kinderwens hebben.\n• **Pre-implantatie diagnostiek** (PGD): bij IVF kunnen embryo's gescreend worden.\n• **Gentherapie** (nieuw, experimenteel): kapotte genen vervangen.\n\n**Erfelijk vs aangeboren vs verworven**\n• **Erfelijk** = via DNA van ouders.\n• **Aangeboren** = vanaf geboorte aanwezig (kan erfelijk OF door zwangerschap, bv. door alcohol).\n• **Verworven** = ontstaat tijdens leven (bv. infectie, ongeluk).\n\nDus elke erfelijke ziekte is aangeboren, maar niet elke aangeboren ziekte is erfelijk.",
    svg: punnettSvg("Ff", "Ff", "F", "f"),
    checks: [
      {
        q: "Welke ziekte is **X-gebonden** (komt vaker bij mannen voor)?",
        options: [
          "Hemofilie",
          "Cystische fibrose",
          "Ziekte van Huntington",
          "Marfan-syndroom",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Cystische fibrose is autosomaal recessief.",
          "Huntington is autosomaal dominant.",
          "Marfan is autosomaal dominant.",
        ],
      },
      {
        q: "Wat is het verschil tussen **erfelijk** en **aangeboren**?",
        options: [
          "Erfelijk = via DNA van ouders; aangeboren = vanaf geboorte (kan ook door zwangerschap)",
          "Synoniem — geen verschil",
          "Erfelijk komt later, aangeboren bij geboorte",
          "Erfelijk is zwaarder dan aangeboren",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Wel verschil — niet alle aangeboren is erfelijk.",
          "Erfelijk is bij geboorte al aanwezig (in DNA).",
          "Geen verschil in zwaarte — verschillende oorzaken.",
        ],
      },
    ],
  },

  // ─── E. Moderne genetica ───────────────
  {
    title: "Moderne genetica — DNA-onderzoek + ethiek",
    explanation: "Sinds Mendel (~1860) is er enorm veel ontwikkeld. De **moderne genetica** kan veel — maar roept ook **ethische vragen** op.\n\n**Belangrijke ontdekkingen**:\n\n**1953 — Watson + Crick** ontdekken de **dubbele helix-structuur** van DNA. Belangrijk: ze deden dit met **röntgenfoto's gemaakt door Rosalind Franklin**, die zelf nooit erkenning kreeg in haar leven.\n\n**1990-2003 — Human Genome Project**: het volledige menselijke DNA wordt **uitgelezen** (~3 miljard letters). Internationaal project.\n\n**Wat kunnen we nu?**\n\n*1. DNA-test voor identificatie*\n• Forensisch onderzoek (vingerafdruk-DNA bij plaats delict).\n• Vaderschapstest.\n• Verwantschap aantonen (zoek je biologische ouders).\n\n*2. Erfelijke ziektes voorspellen*\n• Bloed of speeksel afnemen → screening op honderden genen.\n• Risico's bepalen voor borstkanker (BRCA-genen), Huntington, etc.\n• **Ethisch dilemma**: wil je weten dat je over 30 jaar Huntington krijgt?\n\n*3. Embryo-screening (PGD)*\n• Bij IVF kunnen embryo's worden gescreend op erfelijke ziektes.\n• In NL toegestaan voor zware erfelijke ziektes.\n• Niet voor 'designer-baby's' (oogkleur, IQ kiezen) — verboden.\n\n*4. Gentherapie* (nieuw, experimenteel)\n• Kapotte genen worden vervangen of gerepareerd.\n• Eerste therapie goedgekeurd in 2017.\n• Hoop voor ziektes als sikkelcelanemie en spinale spieratrofie.\n\n*5. CRISPR-Cas9* (vanaf ~2012)\n• Revolutionaire 'genetische schaar' om DNA precies te knippen + plakken.\n• Nobelprijs 2020 voor Charpentier + Doudna.\n• Toepassingen: ziekte-genezing, gewassen verbeteren, mogelijk preventie van erfelijke ziektes.\n\n**6. Genetisch gemodificeerde organismen (GMO)**\n• Planten/dieren met aangepast DNA.\n• Voorbeelden: gouden rijst (vitamine A), insectresistente mais.\n• Veel debat over voedselveiligheid + ethiek.\n\n**Ethische vragen**\n• Mag je embryo's selecteren op uiterlijk?\n• Wat als alleen rijke mensen genetische verbeteringen kunnen betalen?\n• Wat met privacy als je DNA gepubliceerd wordt?\n• Mogen we genen van kinderen aanpassen — generaties later voelen ze de gevolgen?\n\nGeen makkelijke antwoorden — vandaar dat de overheid wetten maakt en bio-ethici advies geven.",
    svg: dnaSvg(),
    checks: [
      {
        q: "Wie ontdekten in 1953 de dubbele helix-structuur van DNA?",
        options: [
          "Watson + Crick (op basis van foto's van Rosalind Franklin)",
          "Mendel + Darwin",
          "Marie Curie",
          "Albert Einstein",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Mendel was een eeuw eerder; Darwin ook (~1860).",
          "Curie deed onderzoek naar straling.",
          "Einstein was natuurkundige.",
        ],
      },
      {
        q: "Wat is **CRISPR**?",
        options: [
          "Een 'genetische schaar' om DNA precies te bewerken",
          "Een soort virus",
          "Een DNA-test van Apple",
          "Een ziekte",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen virus — een molecuul-systeem.",
          "Niet van een bedrijf — een wetenschappelijke ontdekking.",
          "Geen ziekte — een tool.",
        ],
      },
    ],
  },

  // ─── F. Eindopdracht ───────────────
  {
    title: "Eindopdracht — combineer wat je weet",
    explanation: "Tijd om alles toe te passen!\n\n**Snelle samenvatting**:\n\n| Begrip | Wat het betekent |\n|---|---|\n| DNA | Molecuul met erfelijke info, dubbele helix |\n| Chromosoom | Lange DNA-streng — 23 paren bij mens |\n| Gen | Stukje DNA met info voor 1 eigenschap |\n| Allel | Versie van een gen (BB / Bb / bb) |\n| Genotype | Welke allelen je hebt (BB/Bb/bb) |\n| Fenotype | Wat je ziet/meet (bruin/blauw) |\n| Homozygoot | 2 gelijke allelen (BB of bb) |\n| Heterozygoot | 2 verschillende allelen (Bb) |\n| Dominant | Allel dat overheerst (hoofdletter) |\n| Recessief | Allel dat onderdrukt wordt (kleine letter) |\n\n**Mendel-verhouding bij Aa × Aa**: 3 dominant : 1 recessief fenotype.\n\n**Geslachtsbepaling**: vader (XY) bepaalt — 50/50 X of Y.\n\n**Veel succes!**",
    svg: punnettSvg("Aa", "Aa", "A", "a"),
    checks: [
      {
        q: "Bij **Aa × aa** kruising: welke verhouding fenotype krijg je?",
        options: [
          "50% dominant : 50% recessief",
          "100% dominant",
          "100% recessief",
          "75% dominant : 25% recessief",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is bij AA × Aa.",
          "Dat is bij aa × aa.",
          "Dat is Aa × Aa.",
        ],
      },
      {
        q: "Iemand met genotype **Bb** wat is het fenotype? *(B dominant bruin, b recessief blauw)*",
        options: ["Bruin", "Blauw", "Half bruin half blauw", "Geen kleur"],
        answer: 0,
        wrongHints: [
          null,
          "B is dominant — overheerst.",
          "Bij dominant/recessief is er geen 'mengen' meestal.",
          "Iedereen heeft een oogkleur.",
        ],
      },
      {
        q: "Wie heeft de hoogste kans op **kleurenblindheid**?",
        options: [
          "Mannen — slechts 1 X-chromosoom",
          "Vrouwen — 2 X-chromosomen",
          "Even hoog",
          "Mensen met blauwe ogen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — vrouwen hebben 'back-up' X.",
          "Verschil door aantal X-chromosomen.",
          "Geen verband met oogkleur.",
        ],
      },
      {
        q: "Hoeveel chromosoomparen heeft een mens?",
        options: ["23", "46", "92", "100"],
        answer: 0,
        wrongHints: [
          null,
          "46 is het totaal aantal chromosomen — paren is helft.",
          "Te veel.",
          "Te veel.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const geneticaErfelijkheidBiologie = {
  id: "genetica-erfelijkheid-biologie",
  title: "Genetica + erfelijkheid",
  emoji: "🧬",
  level: "klas3",
  subject: "biologie",
  intro:
    "Hoe eigenschappen van ouders aan kinderen worden doorgegeven via DNA. Van basisbouw (chromosomen + genen + allelen) via Mendel's wetten (dominant/recessief, Punnett-tabellen) tot geslachtsbepaling, stambomen, erfelijke ziektes en moderne technieken (DNA-tests, gentherapie, CRISPR). Examenstof biologie CSE.",
  triggerKeywords: [
    "genetica", "erfelijkheid", "erfelijke",
    "dna", "chromosoom", "chromosomen", "gen", "genen",
    "allel", "allelen",
    "homozygoot", "heterozygoot",
    "dominant", "recessief",
    "genotype", "fenotype",
    "mendel", "punnett",
    "x-gebonden", "geslachtschromosoom",
    "stamboom",
    "cystische fibrose", "hemofilie", "huntington",
    "sikkelcel", "kleurenblindheid",
    "watson crick", "rosalind franklin",
    "human genome project",
    "crispr", "gentherapie", "gmo",
  ],
  chapters,
  steps,
};

export default geneticaErfelijkheidBiologie;
