// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk 8 (Ontwikkelingslanden)
// Uitgebreide versie 2026-05-09: 7 stappen voor compleet examen-blok.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  geld: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  vraag: "#42a5f5",
  aanbod: "#ef5350",
  rood: "#ff5252",
  oranje: "#ffa040",
  grijs: "#90a4ae",
};

const stepEmojis = ["🌏", "📊", "🔄", "🤲", "🌱", "🌍", "🎯"];

const chapters = [
  { letter: "A", title: "Verschillen meten", emoji: "🌏", from: 0, to: 1 },
  { letter: "B", title: "Oorzaken + globalisering", emoji: "🔄", from: 2, to: 3 },
  { letter: "C", title: "Hulp en duurzaamheid", emoji: "🤲", from: 4, to: 5 },
  { letter: "D", title: "Toekomst", emoji: "🎯", from: 6, to: 6 },
];

const steps = [
  // ─── Stap 1: Verschillen rijke en arme landen ──────
  {
    title: "Verschillen tussen rijke en arme landen",
    explanation: "**Ontwikkelingslanden** = landen met een laag inkomen per inwoner, vaak onvoldoende basisvoorzieningen.\n\n**Categorieën** (Wereldbank-classificatie):\n• **Hoge-inkomenslanden** (>$13.845 BBP/hoofd): NL, DE, USA, Japan\n• **Hoog-middeninkomen**: China, Brazilië, Mexico, Turkije\n• **Laag-middeninkomen**: India, Indonesië, Egypte\n• **Lage-inkomen** (<$1.135 BBP/hoofd): veel landen Sub-Sahara Afrika\n\n**Indicatoren voor welvaart van een land**:\n\n**1. BBP per hoofd**\n• Totaal nationaal inkomen / aantal inwoners\n• NL: ~$56.000 / Mali: ~$900\n• Hoger = rijker\n• MAAR: zegt niets over verdeling (Saoedi-Arabië hoog gemiddeld, maar veel ongelijkheid)\n\n**2. HDI (Human Development Index)**\n• 0-1 schaal\n• Combineert: inkomen, levensverwachting, onderwijs (jaren scholing)\n• Bredere maat dan BBP alleen\n• NL HDI ~0,94 (top 10) / Niger HDI ~0,40 (laagste)\n\n**3. Levensverwachting**\n• Rijke landen: ~80 jaar\n• Arme landen: 50-65 jaar\n• Verschil door zorg, voeding, hygiëne, oorlog\n\n**4. Kindersterfte (onder 5 jaar per 1000)**\n• Rijke landen: <5 per 1000\n• Armste landen: >50 per 1000\n• Belangrijke graadmeter ontwikkeling\n\n**5. Toegang tot basisvoorzieningen**\n• Schoon water (in NL: 100%)\n• Elektriciteit\n• Sanitair\n• Internet (groeit overal snel)\n\n**6. Gini-coëfficiënt** (ongelijkheid binnen land)\n• 0 = perfect gelijk, 1 = volledig ongelijk\n• NL: 0,28 / Zuid-Afrika: 0,63\n\n**Wereldwijde voortgang**:\n• Aantal mensen in extreme armoede daalde van ~1,9 mrd (1990) naar ~700 mln (2020)\n• Door China + India vooral\n• Sub-Sahara Afrika blijft achter\n• Corona en oorlog Oekraïne sloegen terug (vorig 2 jaar)\n\n**Welvaart in ruime zin** (zie ook h1):\n• Rijk land kan slecht scoren op milieu of geluk\n• Bhutan meet 'Gross National Happiness' — geluk-index\n\n**Belangrijke bronnen**:\n• Wereldbank, IMF, UNDP (UN Development Program), OESO\n• 'Human Development Report' — jaarlijks UN-rapport",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">RIJK vs ARM</text>
<rect x="20" y="40" width="80" height="100" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="60" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">RIJK</text>
<text x="60" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">BBP/hoofd hoog</text>
<text x="60" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">HDI 0,9+</text>
<text x="60" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">leef ~80jr</text>
<text x="60" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">kind &lt;5 per 1000</text>
<rect x="110" y="40" width="80" height="100" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="150" y="58" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">MIDDEN</text>
<text x="150" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">groeiend</text>
<text x="150" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">HDI 0,7</text>
<text x="150" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">leef ~70jr</text>
<text x="150" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">China · BR</text>
<rect x="200" y="40" width="80" height="100" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="240" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">ARM</text>
<text x="240" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">BBP/hoofd laag</text>
<text x="240" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">HDI &lt;0,5</text>
<text x="240" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">leef ~60jr</text>
<text x="240" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">Sub-Sahara</text>
<text x="160" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">extreme armoede daalde 1990: 1,9 mrd → 2020: 700 mln</text>
</svg>`,
    checks: [
      {
        q: "Wat meet de **HDI** (Human Development Index)?",
        options: ["Combinatie inkomen + levensverwachting + onderwijs", "Alleen inkomen", "Aantal toeristen", "Auto's per inwoner"],
        answer: 0,
        wrongHints: [null, "BBP/hoofd is alleen inkomen.", "Toerisme apart.", "Niet HDI."],
        uitlegPad: {
          stappen: [{ titel: "HDI = bredere maat dan BBP", tekst: "HDI (Human Development Index) is een 0-1 schaal die 3 zaken samen meet: (1) inkomen per hoofd, (2) levensverwachting, (3) onderwijs (jaren scholing). Maakt het mogelijk landen breed te vergelijken. Niet alleen 'rijk' tellen — ook of mensen lang + opgeleid leven." }],
          woorden: [{ woord: "HDI", uitleg: "Human Development Index. UN-index 0-1. Hoger = beter ontwikkeld." }, { woord: "UNDP", uitleg: "United Nations Development Programme. Publiceert jaarlijks HDI-rapport." }],
          theorie: "Voorbeeld: NL HDI ~0,94 (top 10) / Niger HDI ~0,40 (laagste). HDI is bredere maat dan alleen BBP/hoofd. Saoedi-Arabië heeft hoog BBP maar lagere HDI (door onderwijs/gender-issues). HDI corrigeert hiervoor.",
          voorbeelden: [{ type: "vergelijk", tekst: "BBP/hoofd: VS hoger dan NL. HDI: NL hoger dan VS. Reden: NL betere gezondheidszorg + onderwijs + minder ongelijkheid. HDI dekt dit." }],
          basiskennis: [{ onderwerp: "Niet alleen geld", uitleg: "BBP/hoofd = alleen inkomen. Toerisme = los. Auto's = bezit-indicator. HDI combineert 3 factoren." }],
          niveaus: { basis: "Inkomen+levensverwachting+onderwijs. A.", simpeler: "HDI = 3 dingen samen: geld + leeftijd + scholing. = A.", nogSimpeler: "3 dingen = A." },
        },
      },
      {
        q: "**Levensverwachting** in een arm land ligt vaak rond:",
        options: ["50-65 jaar", "~80 jaar", "~100 jaar", "~30 jaar"],
        answer: 0,
        wrongHints: [null, "Rijk-niveau.", "Uitzondering.", "Te laag."],
        uitlegPad: {
          stappen: [{ titel: "Arm = 50-65 / Rijk = ~80", tekst: "Levensverwachting = gemiddeld aantal jaren dat baby kan verwachten te leven bij geboorte. Sterk gekoppeld aan welvaart: arme landen 50-65, rijke landen ~80. Verschil door: voeding, zorg, hygiëne, oorlog, ziekte. Mooie ontwikkelingsindicator." }],
          woorden: [{ woord: "levensverwachting", uitleg: "Gemiddelde aantal levensjaren bij geboorte, statistisch verwacht in bepaald jaar." }, { woord: "kindersterfte", uitleg: "Aantal kinderen dat sterft voor 5e jaar. Drukt levensverwachting fors omlaag." }],
          theorie: "Wereldwijd gemiddelde 73 jaar (was 50 in 1950). Snelste stijging in geschiedenis. Door vaccinaties, antibiotica, betere voeding. Maar grote spreiding: Sub-Sahara Afrika 60, Japan 84.",
          voorbeelden: [{ type: "landen", tekst: "Japan 84 / NL 82 / VS 77 / India 70 / Nigeria 54 / Tsjaad 53. Sterke link met welvaart + zorg." }],
          basiskennis: [{ onderwerp: "Niet andere getallen", uitleg: "80 = rijk-niveau. 100 = uitzondering. 30 = veel te laag (zelfs middeleeuwen niet)." }],
          niveaus: { basis: "50-65 jaar. A.", simpeler: "Arm land levensverwachting = 50-65 jaar. Rijk ~80. = A.", nogSimpeler: "50-65 = A." },
        },
      },
      {
        q: "Welk land scoort verwacht **HOOGST** op HDI?",
        options: ["Nederland", "Mali", "Bangladesh", "Niger"],
        answer: 0,
        wrongHints: [null, "Mali laag.", "Bangladesh middel.", "Niger heel laag."],
        uitlegPad: {
          stappen: [{ titel: "NL is West-Europees ontwikkeld", tekst: "NL HDI ~0,94 (top 10 wereldwijd). Combineert hoog inkomen + lange levensverwachting + goed onderwijs. Andere optie-landen: Mali 0,43, Bangladesh 0,66, Niger 0,40 (laagste wereld). NL ontwikkeld land = hoge HDI gegarandeerd." }],
          woorden: [{ woord: "HDI-categorieën", uitleg: "UNDP: zeer hoog (>0,80) / hoog (0,70-0,80) / midden (0,55-0,70) / laag (<0,55)." }],
          theorie: "Top HDI-landen: Noorwegen, Zwitserland, Ierland, Duitsland, NL, Australië. Laagste: Niger, Tsjaad, Centraal-Afrikaanse Rep. Sterke correlatie met geografie + politiek + onderwijs-investeringen.",
          voorbeelden: [{ type: "cijfers", tekst: "NL 0,941 (10e wereld). Mali 0,428 (186e). Bangladesh 0,661 (129e). Niger 0,400 (189e van 191)." }],
          basiskennis: [{ onderwerp: "Niet andere landen", uitleg: "Mali + Niger = Sub-Sahara Afrika, laagste HDI. Bangladesh = ontwikkelend Zuid-Azië, midden." }],
          niveaus: { basis: "Nederland. A.", simpeler: "NL = West-Europa, hoge HDI ~0,94. Andere opties = arme landen. = A.", nogSimpeler: "NL = A." },
        },
      },
      {
        q: "Hoeveel mensen in **extreme armoede** wereldwijd (~2020)?",
        options: ["~700 miljoen", "~10 miljoen", "~5 miljard", "Niemand"],
        answer: 0,
        wrongHints: [null, "Te laag — dat is groep 8 van Amsterdam.", "Veel te hoog.", "Helaas wel veel."],
        uitlegPad: {
          stappen: [{ titel: "700 mln in extreme armoede", tekst: "Extreme armoede = leven van <$2,15/dag (Wereldbank-definitie 2022). In 1990: 1,9 miljard mensen. In 2020: ~700 miljoen. Sterke daling vooral door China + India. Sub-Sahara Afrika blijft achter. SDG-doel: 0 in 2030 (waarschijnlijk niet haalbaar)." }],
          woorden: [{ woord: "extreme armoede", uitleg: "Wereldbank: <$2,15/dag/persoon (in koopkracht-pariteit). Onder dit niveau kan basisbehoeften niet." }, { woord: "Wereldbank", uitleg: "Internationale ontwikkelingsbank. Hoofdkwartier Washington. Definieert armoede-grenzen." }],
          theorie: "Daling 1,9 mrd → 700 mln in 30 jaar = grootste armoede-daling in geschiedenis. Vooral China: ~800 mln Chinezen uit armoede (1980-2020). India ook fors. Corona + Oekraïne-oorlog veroorzaken recente terugval.",
          voorbeelden: [{ type: "trend", tekst: "1990: 36% wereldbevolking extreem arm. 2020: 9%. Spectaculair. Maar nog steeds = 1 op 11 mensen leeft van <€2/dag." }],
          basiskennis: [{ onderwerp: "Niet andere getallen", uitleg: "10 mln = te laag. 5 mrd = bijna hele wereld, onmogelijk. Niemand = ook niet (nog 700 mln)." }],
          niveaus: { basis: "~700 miljoen. A.", simpeler: "Extreme armoede 2020 = ~700 miljoen. Daalde van 1,9 mrd (1990). = A.", nogSimpeler: "700 mln = A." },
        },
      },
      {
        q: "**Kindersterfte** is goede graadmeter omdat:",
        options: ["Reflecteert toegang zorg, voeding, hygiëne breed", "Het is onbelangrijk", "Alleen relevant voor moeders", "Geen verband met welvaart"],
        answer: 0,
        wrongHints: [null, "Wel belangrijk.", "Voor iedereen.", "Wel direct verband."],
        uitlegPad: {
          stappen: [{ titel: "Kindersterfte = breedste indicator", tekst: "Aantal kinderen dat sterft voor 5e jaar per 1000 geboortes. In rijke landen: <5/1000. In armste landen: 50+/1000. Goede indicator omdat alle onderdelen van welvaart erin samenkomen: zorg (vaccinaties), voeding (groei), hygiëne (water/sanitair), onderwijs moeders, woonomstandigheden." }],
          woorden: [{ woord: "kindersterfte", uitleg: "Aantal kinderen onder 5 jaar dat overlijdt, per 1000 levend-geborenen." }, { woord: "vaccinaties", uitleg: "Inenting tegen ziektes (mazelen, polio, DKTP). Voorkomt veel kinderdoden." }, { woord: "ondervoeding", uitleg: "Te weinig voedsel of verkeerde voeding. Hoofdoorzaak van veel kinderdoden in arme landen." }],
          theorie: "Daling wereldwijd: 1990 = 12,5 mln kinderdoden, 2020 = 5 mln. Vooral door vaccinatie-campagnes (rotavirus, mazelen). Maar nog veel: 5 miljoen = 1 kind per 6 seconden. Sub-Sahara Afrika hoogste cijfers.",
          voorbeelden: [{ type: "cijfers", tekst: "NL <4 per 1000. Tsjaad 110 per 1000 (=11%!). Verschil enorm. Een Tsjaads kind 25x meer kans op overlijden voor 5e." }],
          basiskennis: [{ onderwerp: "Wel belangrijk", uitleg: "Niet onbelangrijk. Voor hele samenleving (toekomst!). Sterk verband met welvaart, niet geen." }],
          niveaus: { basis: "Reflecteert zorg+voeding+hygiëne. A.", simpeler: "Kindersterfte raakt 4 dingen tegelijk: zorg + voeding + hygiëne + woon. Goede maat. = A.", nogSimpeler: "Alles tegelijk = A." },
        },
      },
      {
        q: "Wereldbank-categorie 'lage-inkomen-land':",
        options: ["BBP/hoofd onder $1.135/jaar", "Iedereen onder €30k", "Geen automaat", "Geen categorie"],
        answer: 0,
        wrongHints: [null, "Per land, niet per persoon.", "Wel automatisch.", "Wel categorie."],
        uitlegPad: {
          stappen: [{ titel: "4 Wereldbank-categorieën", tekst: "Wereldbank-classificatie (per land BBP/hoofd in dollars): (1) Lage-inkomen <$1.135. (2) Laag-midden $1.135-$4.465. (3) Hoog-midden $4.466-$13.845. (4) Hoge-inkomen >$13.845. Per jaar herzien." }],
          woorden: [{ woord: "BBP/hoofd", uitleg: "Bruto Binnenlands Product per inwoner. Totaal nationaal inkomen / aantal mensen." }, { woord: "Wereldbank-classificatie", uitleg: "Officiële indeling landen in 4 inkomenscategorieën. Gebaseerd op gemiddeld inkomen per hoofd." }],
          theorie: "Voor: arme landen kunnen leningen + hulp krijgen tegen voordeligere voorwaarden. Status verandert: China was laag-midden, nu hoog-midden. Doel: landen klimmen op. NL = hoge-inkomen ($56k/hoofd).",
          voorbeelden: [{ type: "categorisatie", tekst: "Hoge-inkomen: NL, DE, USA, Japan. Hoog-midden: China, Brazilië, Mexico. Laag-midden: India, Indonesië. Lage-inkomen: Mali, Niger, Tsjaad, DR Congo." }],
          basiskennis: [{ onderwerp: "Per LAND niet persoon", uitleg: "€30k/persoon = ander begrip (persoonlijk inkomen). Classificatie automatisch op jaar-data. Wel categorie." }],
          niveaus: { basis: "<$1.135/jaar BBP/hoofd. A.", simpeler: "Lage-inkomen-land = gemiddelde inkomen <$1.135/jaar/persoon. = A.", nogSimpeler: "$1.135 = A." },
        },
      },
    ],
  },
  // ─── Stap 2: Welvaart en welzijn ─────────────────
  {
    title: "Welvaart vs welzijn — meer dan alleen geld",
    explanation: "**Welvaart** = materieel, in geld uitdrukbaar (BBP, inkomen, bezit).\n**Welzijn** = bredere kwaliteit van leven (gezondheid, geluk, vrije tijd, milieu, sociale relaties, veiligheid).\n\nEen rijk land kan slecht scoren op welzijn als:\n• Mensen veel werken, weinig tijd voor familie\n• Hoge stress\n• Slecht milieu\n• Veel ongelijkheid (relatief arm voelen)\n\nEen 'minder rijk' land kan goed welzijn hebben:\n• Sterke gemeenschap\n• Beter klimaat\n• Minder stress\n\n**Indices die welzijn meten**:\n\n**1. Better Life Index** (OESO)\n• 11 dimensies: huisvesting, inkomen, banen, gemeenschap, onderwijs, milieu, civiele rechten, gezondheid, tevredenheid, veiligheid, werk-privé-balans\n• Alle landen kunnen vergelijken\n• NL scoort hoog op werk-privé balans\n\n**2. World Happiness Report** (UN)\n• Jaarlijks rapport, gelukscores per land\n• Top: Finland, Denemarken, Noorwegen, IJsland, Nederland\n• Belangrijke factoren: vertrouwen, sociaal vangnet, vrijheid\n\n**3. Gross National Happiness** (Bhutan)\n• Bhutan meet ipv BBP\n• 9 domeinen: psychologisch welzijn, gezondheid, onderwijs, cultuur, etc.\n\n**4. Sustainable Development Index** (SDI)\n• Combineert ontwikkeling + ecologische voetafdruk\n• Meet of land 'duurzaam' welvarend is\n\n**Voorbeeld 2 landen vergelijken**:\n• **Land A** (rijk westers): BBP/hoofd $50k, gelukscore 6,5/10, leeftijd 80, milieu slecht, 2x salaris-ongelijkheid\n• **Land B** (Costa Rica): BBP/hoofd $13k, gelukscore 7,3/10, leeftijd 80, milieu goed, gemeenschap sterk\n\nLand A 'rijker', maar Costa Rica heeft mogelijk meer **welzijn**.\n\n**Easterlin-paradox** (1974):\n• Boven $20-30k inkomen/hoofd: extra inkomen levert nauwelijks meer geluk\n• 'Geld kan kort geluk kopen, maar wordt het nieuwe normaal'\n• Sociale vergelijking matters\n\n**Wat maakt mensen écht gelukkig?**\n• Sociale relaties (familie, vrienden)\n• Gezondheid\n• Doel hebben (zinvol werk)\n• Autonomie (eigen keuzes)\n• Vertrouwen in samenleving\n\n**Voor jou als toekomstige werker**:\n• Salaris is belangrijk (basisbehoefte)\n• Maar werk-privé-balans, collega's, doel ook\n• 'Maximaal salaris' = vaak niet maximaal geluk\n\n**Kritisch denken**:\n• BBP-fixatie kan leiden tot verkeerde beleidskeuzes (niet duurzaam)\n• Welzijns-meting is ook subjectief (wat IS geluk?)\n• Sommigen vinden materieel toch belangrijker",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">WELVAART vs WELZIJN</text>
<rect x="20" y="40" width="135" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">WELVAART</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">materieel</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">BBP, inkomen</text>
<text x="87" y="98" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">in geld</text>
<rect x="165" y="40" width="135" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">WELZIJN</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">geluk · gezondheid</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">milieu · vrije tijd</text>
<text x="232" y="98" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">subjectief</text>
<text x="160" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Indices: HDI · Better Life · GNH</text>
<text x="160" y="155" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">EASTERLIN-PARADOX</text>
<text x="160" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">boven $20-30k: extra geld ≠ meer geluk</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">top geluk: Finland · Denemarken · NL</text>
</svg>`,
    checks: [
      {
        q: "Wat is **welvaart in enge zin**?",
        options: ["Alleen materiële zaken (geld, spullen)", "Alleen geluk", "Alleen gezondheid", "Alles"],
        answer: 0,
        wrongHints: [null, "Geluk = ruime zin.", "Gezondheid = ruime zin.", "Te breed."],
        uitlegPad: {
          stappen: [{ titel: "Eng vs ruim", tekst: "Welvaart in ENGE zin = alleen materiële zaken in geld uit te drukken: inkomen, spaargeld, bezit. Welvaart in RUIME zin = ook welzijn: gezondheid, geluk, milieu, sociale relaties. Onderscheid belangrijk: rijk land = welvaart-enge-zin hoog, maar welvaart-ruime-zin niet automatisch." }],
          woorden: [{ woord: "welvaart-enge-zin", uitleg: "Alleen materiële welvaart. Meetbaar in BBP." }, { woord: "welvaart-ruime-zin", uitleg: "Materiële + immateriële welvaart. Brengt welzijn erbij." }, { woord: "welzijn", uitleg: "Niet-materiële zaken: gezondheid, geluk, sociale relaties, milieu." }],
          theorie: "Examenval: 'welvaart' alleen = engesm zin (standaard). 'Welvaart in ruime zin' = expliciet inclusief welzijn. Toets-vraag toetst dit onderscheid. NL: hoge welvaart enge-zin, ook redelijk hoog ruime-zin (top 10 geluksindex).",
          voorbeelden: [{ type: "voorbeeld", tekst: "Saoedi-Arabië = welvaart enge zin hoog (olie-rijk), maar ruime zin lager (gender-issues, weinig vrijheid). Costa Rica = welvaart enge zin midden, ruime zin top." }],
          basiskennis: [{ onderwerp: "Niet andere zaken", uitleg: "Geluk + gezondheid = ruime zin onderdelen. Welvaart-eng = alleen materieel. Niet 'alles' (te breed)." }],
          niveaus: { basis: "Alleen materieel. A.", simpeler: "Welvaart enge zin = alleen geld + spullen. Ruime zin = ook welzijn erbij. = A.", nogSimpeler: "Materieel = A." },
        },
      },
      {
        q: "Welke landen scoren typisch **hoog op geluksindex**?",
        options: ["Finland, Denemarken, Noorwegen, NL", "Saoedi-Arabië", "Rusland", "Noord-Korea"],
        answer: 0,
        wrongHints: [null, "Niet automatisch met olierijkdom.", "Politieke onrust drukt geluk.", "Geen vrijheid → geen geluk-meting."],
        uitlegPad: {
          stappen: [{ titel: "Noord-Europa top geluk", tekst: "World Happiness Report (UN) publiceert jaarlijks geluk-ranglijst. Top 10 al jaren: Finland, Denemarken, IJsland, Zwitserland, Nederland, Zweden, Noorwegen. Reden: sterk sociaal vangnet, vertrouwen overheid, vrijheid, goed onderwijs, weinig corruptie, mooi natuur." }],
          woorden: [{ woord: "World Happiness Report", uitleg: "Jaarlijks UN-rapport. Meet geluk per land op 1-10 schaal. Top: Noord-Europa." }, { woord: "sociaal vangnet", uitleg: "Voorzieningen voor mensen in moeilijkheden: bijstand, zorg, werkloosheidsuitkering." }],
          theorie: "Geluk-factoren volgens onderzoek: (1) sociale relaties, (2) gezondheid, (3) vrijheid keuze, (4) vertrouwen overheid, (5) genereus zijn, (6) inkomen. Niet alleen geld — Noord-Europese mix wint.",
          voorbeelden: [{ type: "ranglijst", tekst: "Finland nr. 1. NL meestal nr. 5-6. VS rond 15. Saoedi-Arabië rond 30. Afghanistan/Libanon/Sierra Leone laagst." }],
          basiskennis: [{ onderwerp: "Niet andere landen", uitleg: "Olie-rijkdom = niet automatisch geluk (vrijheid+sociaal vangnet matter meer). Rusland = politieke onrust. NK = dictatuur, geen vrije meting." }],
          niveaus: { basis: "Noord-Europa. A.", simpeler: "Hoogste geluk = Finland, Denemarken, NL. Noord-Europese mix. = A.", nogSimpeler: "Scandinavië+NL = A." },
        },
      },
      {
        q: "**Easterlin-paradox** zegt:",
        options: ["Boven ~$20-30k extra geld levert nauwelijks meer geluk", "Geld kan altijd geluk kopen", "Geluk is niet meetbaar", "Iedereen wil meer geld"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Wel ruwweg meetbaar.", "Niet wat het zegt."],
        uitlegPad: {
          stappen: [{ titel: "Geld koopt geluk — tot een punt", tekst: "Richard Easterlin (1974, econoom) ontdekte: tot ~$20-30k/hoofd LEVERT extra inkomen geluk op. Daarboven: nauwelijks. Reden: basisbehoeften vervuld, daarna sociale vergelijking + andere zaken belangrijker. Meer geld wordt 'nieuwe normaal'." }],
          woorden: [{ woord: "Easterlin-paradox", uitleg: "Boven bepaald inkomen levert extra geld nauwelijks meer geluk op. Eerst gerapporteerd 1974." }, { woord: "sociale vergelijking", uitleg: "Mensen voelen zich niet rijk in absolute zin, maar t.o.v. buren/vrienden." }, { woord: "hedonische adaptatie", uitleg: "Mensen gewenden aan hogere welvaart. Nieuwe auto = blijdschap, maar na 6 maanden 'normaal'." }],
          theorie: "Implicatie: na basisbehoeften focus op andere zaken voor geluk. Onderzoek update: drempel ~$75k (Kahneman/Deaton 2010), maar moderne studies (Killingsworth 2021) zien wel verdere stijging. Discussie nog gaande.",
          voorbeelden: [{ type: "vergelijk", tekst: "Iemand van €25k naar €50k = grote sprong geluk. Van €100k naar €200k = nauwelijks meer geluk. Diminishing returns." }],
          basiskennis: [{ onderwerp: "Niet tegendeel", uitleg: "Tegendeel = 'altijd kopen'. Easterlin zegt JUIST 'niet altijd'. Geluk wel ruwweg meetbaar. Niet over wat mensen willen." }],
          niveaus: { basis: "Boven drempel geen extra geluk. A.", simpeler: "Easterlin = boven ~$20-30k levert extra geld nauwelijks meer geluk. Drempelwaarde. = A.", nogSimpeler: "Genoeg=genoeg = A." },
        },
      },
      {
        q: "Wat meet de **Better Life Index** (OESO)?",
        options: ["11 dimensies van kwaliteit van leven", "Alleen BBP", "Aantal banen", "Kosten levensonderhoud"],
        answer: 0,
        wrongHints: [null, "Veel breder.", "1 dimensie.", "1 dimensie."],
        uitlegPad: {
          stappen: [{ titel: "OESO meet 11 levensaspecten", tekst: "Better Life Index van OESO (organisatie westerse welvarende landen) meet 11 dimensies: huisvesting, inkomen, banen, gemeenschap, onderwijs, milieu, civiele rechten, gezondheid, tevredenheid, veiligheid, werk-privé-balans. Veel breder dan BBP. Burger kan zelf gewichten kiezen op website." }],
          woorden: [{ woord: "Better Life Index", uitleg: "OESO-index sinds 2011. Vergelijkt 40 landen op 11 dimensies." }, { woord: "OESO", uitleg: "Organisatie voor Economische Samenwerking + Ontwikkeling. 38 landen vooral rijk westers." }],
          theorie: "Bedoeling: BBP-fixatie doorbreken. Beleidsmakers kunnen zien waar land achterloopt. NL scoort hoog op werk-privé balans + onderwijs + inkomen, gemiddeld op milieu, lager op huisvesting (woningnood).",
          voorbeelden: [{ type: "dimensies", tekst: "NL hoge score: werk-privé balans (1e wereld!), tevredenheid, onderwijs. NL lagere score: milieu, huisvesting. Top algemeen: Noorwegen, Australië, IJsland." }],
          basiskennis: [{ onderwerp: "Niet alleen 1 ding", uitleg: "BBP = 1 dimensie. Banen = 1 dimensie. Kosten = 1 dimensie. Better Life = 11 samen, breed beeld." }],
          niveaus: { basis: "11 dimensies. A.", simpeler: "Better Life Index meet 11 aspecten kwaliteit leven (OESO). = A.", nogSimpeler: "11 dimensies = A." },
        },
      },
      {
        q: "Bhutan meet **Gross National Happiness** (GNH) ipv:",
        options: ["BBP — om welzijn ipv welvaart te benadrukken", "Inflatie", "Belasting", "Niets"],
        answer: 0,
        wrongHints: [null, "Inflatie meet nog steeds.", "Wel belasting.", "Wel iets."],
        uitlegPad: {
          stappen: [{ titel: "Bhutan koos welzijn boven BBP", tekst: "Bhutan (klein Himalaya-koninkrijk, ~800.000 inwoners) verving in 1972 BBP als hoofdmaatstaf door GNH (Gross National Happiness). Meet 9 domeinen: psychologisch welzijn, gezondheid, onderwijs, tijdsgebruik, cultuur, goed bestuur, gemeenschap, ecologische diversiteit, levensstandaard. Iconisch alternatief." }],
          woorden: [{ woord: "GNH", uitleg: "Gross National Happiness. Bhutan's welzijns-index sinds 1972. 9 domeinen, 33 indicatoren." }, { woord: "Bhutan", uitleg: "Land in Himalaya tussen India en China. Boeddhistisch koninkrijk. Pionier alternatieve welvaart-meting." }],
          theorie: "Inspireert wereldwijd discussies over BBP-alternatieven. VN-Algemene Vergadering nam 2011 resolutie aan: landen moeten geluk meer betrekken in beleid. Maar Bhutan ZELF blijft economisch arm — laat zien dat 'geluk niet alles is' kritiek.",
          voorbeelden: [{ type: "domeinen", tekst: "9 domeinen GNH: psychologisch welzijn, gezondheid, onderwijs, tijdsgebruik, cultuur, goed bestuur, gemeenschap, ecologie, levensstandaard. Wereld kijkt mee." }],
          basiskennis: [{ onderwerp: "Niet andere zaken", uitleg: "Inflatie + belasting blijven gewoon meten. GNH komt ipv BBP. Wel iets (geluksstrategie)." }],
          niveaus: { basis: "BBP. A.", simpeler: "Bhutan vervangt BBP door GNH = geluksmeting. = A.", nogSimpeler: "BBP = A." },
        },
      },
      {
        q: "Wat maakt mensen vooral **gelukkig** (volgens onderzoek)?",
        options: ["Sociale relaties + gezondheid + doel + autonomie", "Alleen geld", "Alleen vakantie", "Alleen status"],
        answer: 0,
        wrongHints: [null, "Boven basis-niveau geen sterke link.", "1 onderdeel.", "1 onderdeel."],
        uitlegPad: {
          stappen: [{ titel: "4 kernpijlers geluk", tekst: "Decennia geluksonderzoek (vooral Harvard Study Adult Development, 80+ jaar gevolgd) wijzen 4 pijlers aan: (1) Sociale relaties — familie, vrienden, gemeenschap. (2) Gezondheid — fysiek + mentaal. (3) Doel — zinvol werk + missie. (4) Autonomie — eigen keuzes maken. Geld helpt tot basis, daarna deze 4." }],
          woorden: [{ woord: "Harvard Study of Adult Development", uitleg: "Langste geluksonderzoek ooit (1938-nu). 700+ mannen levenslang gevolgd. Conclusie: relaties belangrijkst." }, { woord: "autonomie", uitleg: "Zelf kunnen kiezen wat je doet. Voorspelt geluk sterker dan inkomen." }, { woord: "purpose/doel", uitleg: "Gevoel dat je leven betekenis heeft. Geeft veerkracht bij tegenslagen." }],
          theorie: "Geld levert geluk tot basisniveau. Bovenop: relaties + gezondheid > inkomen. Sociale eenzaamheid even ongezond als roken 15 sigaretten/dag (volgens onderzoek). Voor jongeren: kies werk + woonplek met goede sociale infrastructuur, niet alleen hoogste salaris.",
          voorbeelden: [{ type: "praktisch", tekst: "Concreet: investeer in vriendschappen (kost tijd). Eet gezond + beweeg (preventie). Doe werk waar je achter staat. Maak eigen keuzes (niet alleen wat anderen verwachten)." }],
          basiskennis: [{ onderwerp: "Niet 1 ding", uitleg: "Geld alleen = niet (boven basis). Vakantie alleen = kort. Status alleen = leeg. 4 pijlers samen." }],
          niveaus: { basis: "4 pijlers. A.", simpeler: "Gelukkig maakt: sociale relaties + gezondheid + doel + autonomie. = A.", nogSimpeler: "4 dingen = A." },
        },
      },
    ],
  },
  // ─── Stap 3: Oorzaken armoede ────────────────────
  {
    title: "Oorzaken van armoede",
    explanation: "Waarom blijven sommige landen arm? **Geen enkel antwoord** — combinatie van factoren:\n\n**1. Slechte landbouw**\n• Droogte / klimaatverandering\n• Geen mest/technieken\n• Lage opbrengst per hectare\n• Veel mensen zijn boer maar verdienen weinig\n\n**2. Weinig industrie**\n• Land exporteert vooral grondstoffen (cacao, koffie, olie)\n• Verwerking gebeurt elders → buitenland verdient meer\n• Bv. cacaoboer in Ghana krijgt 6% van de prijs van een chocoladereep in NL\n\n**3. Slecht onderwijs**\n• Niet alle kinderen naar school\n• Lage gemiddelde scholingsjaren (2-5 jaar)\n• → Lage productiviteit\n• → Lage lonen\n\n**4. Slechte gezondheid**\n• Hoge ziekte (malaria, hiv, TBC, ondervoeding)\n• → Mensen kunnen niet werken\n• Geen goede zorg → meer doden\n\n**5. Politiek**\n• **Corruptie**: hulp + belasting verdwijnt in zakken leiders\n• **Oorlog en conflicten**: onveiligheid voor bedrijven\n• **Slecht bestuur**: onvoorspelbare wetten, geen rechtszekerheid\n• **Dictatuur**: weinig vrijheid → weinig innovatie\n\n**6. Schulden**\n• Land leende veel in het verleden\n• Rente eet inkomen op — geen geld voor scholen / wegen\n• 'Schuldenval' van arme landen\n\n**7. Kolonisatie-erfenis**\n• Grenzen door koloniale machten getrokken zonder oog voor volkeren → conflicten\n• Economie afhankelijk gemaakt van 1 product (mono-cultuur)\n• Brain drain (slimste mensen vertrokken)\n\n**8. Klimaat en geografie**\n• Hete tropen: ziektes, droogtes\n• Geen havens (binnenlandse landen)\n• Ver van handelsroutes\n\n**Vicieuze cirkel armoede**:\n→ Geen geld voor scholen\n→ Geen opgeleide werkers\n→ Geen industrie\n→ Geen belastinginkomsten\n→ Geen geld voor scholen ...\n\nMoeilijk te doorbreken zonder externe hulp of ENORME inspanning.\n\n**Voorbeelden van succesverhalen**:\n• **Zuid-Korea** (1960 armer dan Ghana, nu rijk land — onderwijs + export)\n• **China** (sinds 1980 800 mln mensen uit armoede gehaald)\n• **Singapore** (van haven naar globaal financieel centrum)\n• **India** (groeiende middenklasse, nog veel armoede maar daling)\n\n**En tegenvallers**:\n• **Argentinië** (1900 een van rijkste landen, nu middel — instabiel)\n• **Venezuela** (olie-rijk maar sinds 2014 ineenstorting door slechte beleid)",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">OORZAKEN ARMOEDE</text>
<rect x="20" y="40" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="87" y="60" text-anchor="middle" fill="${COLORS.aanbod}" font-size="10" font-family="Arial">slechte landbouw</text>
<rect x="165" y="40" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="232" y="60" text-anchor="middle" fill="${COLORS.aanbod}" font-size="10" font-family="Arial">weinig industrie</text>
<rect x="20" y="80" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.oranje}" font-size="10" font-family="Arial">slecht onderwijs</text>
<rect x="165" y="80" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="232" y="100" text-anchor="middle" fill="${COLORS.oranje}" font-size="10" font-family="Arial">corruptie · oorlog</text>
<rect x="20" y="120" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="87" y="140" text-anchor="middle" fill="${COLORS.rood}" font-size="10" font-family="Arial">schulden</text>
<rect x="165" y="120" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="232" y="140" text-anchor="middle" fill="${COLORS.rood}" font-size="10" font-family="Arial">kolonisatie</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vicieuze cirkel: arm → geen scholen → geen industrie</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.geld}" font-size="10" font-family="Arial" font-weight="bold">success: ZK · China · Singapore</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **vicieuze cirkel van armoede**?",
        options: ["Armoede veroorzaakt zichzelf — bv. geen geld voor scholen, dus geen opgeleide werkers", "Willekeurige situatie", "Alleen externe oorzaken", "Iedereen gelijk arm"],
        answer: 0,
        wrongHints: [null, "Vicieuze cirkel ≠ willekeurig.", "Interne feedback-loop.", "Geen gelijkheid-claim."],
        uitlegPad: {
          stappen: [{ titel: "Cirkel die zichzelf voedt", tekst: "Vicieuze cirkel armoede: arm land → weinig belastinginkomsten → geen geld voor scholen → geen opgeleide werkers → geen industrie → geen banen → mensen blijven arm → cyclus herhaalt zich. Het stuk dat arm BLIJVEN verklaart, niet alleen dat ze arm ZIJN. Moeilijk te doorbreken zonder externe inbreng." }],
          woorden: [{ woord: "vicieuze cirkel", uitleg: "Latijn 'vitium' = fout/gebrek. Zelf-versterkende negatieve cyclus." }, { woord: "feedback-loop", uitleg: "Systeem waar gevolg weer oorzaak wordt. Hier: armoede → effect → meer armoede." }, { woord: "doorbreken", uitleg: "Cirkel doorbreken vraagt grote interventie: hulp, hervormingen, technologie, onderwijs-massa." }],
          theorie: "Hoe doorbreken? (1) Grote investering in onderwijs (China deed dit). (2) Externe hulp + technologie-import (Zuid-Korea). (3) Stabiel bestuur + anti-corruptie. (4) Open handel. Zelden 1 ding — combinatie. Niet onmogelijk: in 50 jaar uit armoede mogelijk (ZK, Singapore).",
          voorbeelden: [{ type: "cyclus", tekst: "Bv. boer Mali → te weinig opbrengst → kinderen helpen op land → niet naar school → ongeschoold → blijven boer met lage opbrengst → kinderen ook → cyclus blijft." }],
          basiskennis: [{ onderwerp: "Niet andere uitleg", uitleg: "Niet willekeurig (heeft structuur). Niet alleen extern (vooral interne loop). Niet over gelijkheid (over zichzelf-voeden)." }],
          niveaus: { basis: "Armoede voedt zichzelf. A.", simpeler: "Vicieuze cirkel = arm → geen scholen → ongeschoolde werkers → blijft arm. = A.", nogSimpeler: "Voedt zichzelf = A." },
        },
      },
      {
        q: "Waarom kan **export van alleen grondstoffen** een land arm houden?",
        options: ["Verwerking (waar geld in zit) gebeurt elders", "Grondstoffen altijd schaars", "Geen havens", "Vervuiling"],
        answer: 0,
        wrongHints: [null, "Sommige grondstoffen overvloedig.", "Veel landen hebben havens.", "Vervuiling kan issue zijn maar niet hoofdreden."],
        uitlegPad: {
          stappen: [{ titel: "Waarde-toevoeging zit in verwerking", tekst: "Cacao-boer Ghana krijgt ~6% van prijs chocoladereep. De rest gaat naar verwerking (chocolade maken), branding (Tony's, Verkade), retail (supermarkt) — allemaal in het Westen. Land dat alleen ruwe grondstof exporteert, mist 90%+ van waarde-keten. Genoemd 'grondstoffenval'." }],
          woorden: [{ woord: "waarde-keten", uitleg: "Stappen van grondstof tot eindproduct. Elke stap voegt waarde toe + creëert winst." }, { woord: "grondstoffenval", uitleg: "Land afhankelijk van 1-2 grondstof-exports. Kwetsbaar + mist verwerking-winst." }, { woord: "verticale integratie", uitleg: "Land verwerkt grondstof zelf tot eindproduct. Houdt meer waarde in eigen land." }],
          theorie: "Oplossing: opklimmen waarde-keten. Indonesië verbiedt sinds 2020 export ruwe nikkel — dwong bedrijven verwerking lokaal te doen. Werkt. Africa probeert dit nu ook (Ghana wil zelf chocolade maken). Trager + duurder voor consumenten Westen, maar eerlijker.",
          voorbeelden: [{ type: "chocolade", tekst: "Tony's Chocolonely-reep €3,50. Ghanese boer krijgt €0,20 (6%). Cacao-export-broker, verscheper, fabrikant, distributeur, supermarkt → samen 94%." }],
          basiskennis: [{ onderwerp: "Niet andere reden", uitleg: "Grondstoffen niet altijd schaars (cacao+olie+soja overvloedig). Havens hebben velen wel. Vervuiling = bijkomstig probleem." }],
          niveaus: { basis: "Verwerking elders. A.", simpeler: "Ruwe export = land mist verwerking-winst (90%+ waarde). = A.", nogSimpeler: "Verwerking elders = A." },
        },
      },
      {
        q: "Welk land is een **succesverhaal** van armoede naar welvaart?",
        options: ["Zuid-Korea (1960 armer dan Ghana, nu rijk)", "Niger", "Tsjaad", "Mali"],
        answer: 0,
        wrongHints: [null, "Niger is nog arm.", "Tsjaad is nog arm.", "Mali is nog arm."],
        uitlegPad: {
          stappen: [{ titel: "Zuid-Korea 1960→nu", tekst: "1960: Zuid-Korea BBP/hoofd ~$80 (lager dan Ghana, Egypte). Verwoest na Koreaanse Oorlog. Nu: ~$35.000 BBP/hoofd, OESO-lid, Samsung+Hyundai wereldmerken. Hoe? Massale onderwijs-investering (binnen 30 jaar geletterdheid 30%→95%). Industrieel beleid: chaebols (grote conglomeraten). Export-georiënteerd. Stabiele bestuur." }],
          woorden: [{ woord: "Zuid-Korea", uitleg: "Land op Koreaans schiereiland. Pakte na 1953 (oorlog) razendsnel op. Voorbeeld successful development." }, { woord: "chaebols", uitleg: "Zuid-Koreaanse familiebedrijven die groot werden: Samsung, Hyundai, LG, SK." }, { woord: "ontwikkelingsstaat", uitleg: "Overheid stuurt actief economie aan, kiest winnaars, investeert in industrie. Werkte voor Oost-Azië." }],
          theorie: "Zuid-Korea + Taiwan + Singapore + Hong Kong = 'Aziatische Tijgers' (1960-1990 spectaculaire groei). Recept: onderwijs + export + spaarzaam + stabiel bestuur. China kopieerde dit recept sinds 1980. Niger/Tsjaad/Mali = nog niet gelukt.",
          voorbeelden: [{ type: "vergelijking", tekst: "1960: ZK $80/hoofd, Ghana $180. 2023: ZK $35.000, Ghana $2.500. Voor 14x verschil in 60 jaar. Niet 'natuurlijk' — beleid + keuzes." }],
          basiskennis: [{ onderwerp: "Niet anderen", uitleg: "Niger BBP/hoofd $600. Tsjaad $750. Mali $900. Allemaal nog veel armer dan ZK." }],
          niveaus: { basis: "Zuid-Korea. A.", simpeler: "ZK was 1960 armer dan Ghana, nu top-rijk. Door onderwijs + export. = A.", nogSimpeler: "ZK = A." },
        },
      },
      {
        q: "**Kolonisatie-erfenis** als oorzaak armoede betekent:",
        options: ["Grenzen + economische structuur door koloniale machten gemaakt zonder oog voor volkeren", "Te veel kolonies", "Een soort belasting", "Niet relevant"],
        answer: 0,
        wrongHints: [null, "Niet aantal.", "Geen belasting.", "Wel relevant."],
        uitlegPad: {
          stappen: [{ titel: "Erfenis: kunstmatige grenzen + mono-cultuur", tekst: "Europese koloniale machten (UK/FR/NL/BE) trokken in 19e eeuw landgrenzen door Afrika willekeurig op kaart — geen rekening met volkeren/talen. Bv. Nigeria heeft 250+ etnische groepen samen. Economie gericht op 1 grondstof voor moederland (cacao Ghana, koffie Ivoorkust, koper Zambia, olie Nigeria). Bij onafhankelijkheid 1960s: erfde landen problemen." }],
          woorden: [{ woord: "kolonisatie", uitleg: "Land neemt vreemd gebied in voor eigen voordeel. Westerse mogendheden deden dit massaal 16e-20e eeuw." }, { woord: "mono-cultuur", uitleg: "Land hangt van 1 product af. Kwetsbaar bij prijsdaling." }, { woord: "Scramble for Africa", uitleg: "1881-1914. Europese mogendheden verdeelden Afrika in 30 jaar. Grenzen nu nog steeds koloniaal." }],
          theorie: "Gevolgen vandaag: (1) etnische conflicten door slechte grenzen (Rwanda 1994). (2) afhankelijkheid 1 grondstof = economisch wankel. (3) zwakke staatsinstituties (kolonialen bouwden uit, voor zichzelf, niet voor land). (4) brain drain — slimste mensen gingen naar Europa.",
          voorbeelden: [{ type: "concreet", tekst: "Rwanda-Burundi-grenzen door Belgen getrokken. Stam Tutsi-Hutu door kolonialen op identiteitskaarten gezet. Leidde tot genocide 1994 (~800.000 doden in 100 dagen)." }],
          basiskennis: [{ onderwerp: "Wel relevant", uitleg: "Niet 'aantal kolonies'. Geen belasting (geen geld-overdracht meer). Wel zeer relevant nu (60 jaar na onafhankelijkheid)." }],
          niveaus: { basis: "Slechte grenzen + mono-cultuur. A.", simpeler: "Kolonisatie-erfenis = grenzen + economie door Westen gemaakt voor zichzelf. = A.", nogSimpeler: "Slechte grenzen = A." },
        },
      },
      {
        q: "Waarom zijn **schulden** zo slecht voor arme landen?",
        options: ["Rente eet jaarlijks geld op dat anders naar onderwijs/zorg ging", "Schulden zijn altijd te groot", "Rente is altijd 0%", "Schulden bestaan niet"],
        answer: 0,
        wrongHints: [null, "Soms haalbaar — opofferingen wel.", "Rente is juist hoog.", "Wel reëel."],
        uitlegPad: {
          stappen: [{ titel: "Rente vreet onderwijs-budget op", tekst: "Veel arme landen leenden in jaren '70-'80 bij Wereldbank + IMF (vaak gepusht). Door hoge rentes + crisissen werden schulden onbetaalbaar. Voorbeeld: Mozambique besteedde in 1995 25%+ overheidsbudget aan rente. Geld dat NIET naar scholen + ziekenhuizen + wegen ging. 'Schuldenval'." }],
          woorden: [{ woord: "staatsschuld", uitleg: "Wat overheid schuldig is aan binnen- of buitenland." }, { woord: "Schuldenval", uitleg: "Rente jaarlijks zo hoog dat land niet kan investeren in ontwikkeling. Vicieuze cyclus." }, { woord: "Highly Indebted Poor Countries (HIPC)", uitleg: "IMF/Wereldbank-programma 1996+ dat 36 armste landen schuld kwijtschold mits hervormingen." }],
          theorie: "Schuldverlichtings-programma's (HIPC, Jubilee 2000) hielpen veel landen weer ademen. Maar nieuwe schulden komen op door corona + China-leningen (Belt and Road). 2020s opnieuw schuldencrisis Zambia, Sri Lanka, Pakistan.",
          voorbeelden: [{ type: "cijfers", tekst: "Mozambique 1995: rente = 25% budget. NL ter vergelijking: rente ~2% budget. Verschil enorm. Met 25% rente kun je niets opbouwen." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Schulden niet automatisch te groot (sommige beheersbaar). Rente vaak HOOG (5-15% voor arme landen). Schulden wel reëel." }],
          niveaus: { basis: "Rente eet budget op. A.", simpeler: "Schulden = rente eet jaarlijks geld op, niet meer voor onderwijs/zorg. = A.", nogSimpeler: "Rente eet = A." },
        },
      },
      {
        q: "Wat verklaart het **succes van China sinds 1980**?",
        options: ["Hervormingen, openheid, exportgroei, ~800 mln uit armoede", "Toeval", "Geen verandering", "Communisme onveranderd"],
        answer: 0,
        wrongHints: [null, "Niet toeval — beleid.", "Wel verandering.", "Communistisch label maar markteconomie."],
        uitlegPad: {
          stappen: [{ titel: "Deng Xiaoping 1978 — hervormingen", tekst: "China was tot 1976 (dood Mao) gesloten communistisch + arm. Deng Xiaoping vanaf 1978: hervormingen + opening naar buiten. Stappen: (1) Boeren mochten weer eigen land + winst behouden. (2) Speciale Economische Zones (Shenzhen) voor buitenlands kapitaal. (3) Export-industrie opbouwen. Resultaat: ~800 miljoen Chinezen uit armoede 1980-2020. Grootste reductie ooit." }],
          woorden: [{ woord: "Deng Xiaoping", uitleg: "Chinees leider 1978-1992. Architect van China's hervormingen. Beroemd: 'Het maakt niet uit of de kat zwart of wit is, als hij maar muizen vangt.'" }, { woord: "Speciale Economische Zones", uitleg: "Gebieden in China waar marktregels golden + buitenlandse bedrijven welkom waren. Bv. Shenzhen." }, { woord: "wereldfabriek", uitleg: "China's rol sinds 2000: produceert goedkoop voor wereldmarkt. Wereldwijde productie verschoof naar daar." }],
          theorie: "Recept China: communistisch politiek systeem MAAR markt-economie. Goedkope arbeid + massale investeringen in onderwijs + infrastructuur + export = jarenlang 8-10% groei/jaar. China haalde 2010 Japan in als 2e economie wereld. Nu rivaal VS.",
          voorbeelden: [{ type: "cijfers", tekst: "1980: 88% Chinezen in armoede (>700 mln). 2020: <1% (<5 mln). 40 jaar = 800 mln uit armoede. Grootste reductie in geschiedenis." }],
          basiskennis: [{ onderwerp: "Niet onveranderd", uitleg: "Wel toeval (beleid-keuze). Wel verandering (radicaal). Communistisch label bleef, markt-praktijk veranderde alles." }],
          niveaus: { basis: "Hervormingen + export. A.", simpeler: "China success = Deng hervormingen 1978, opening + export, 800 mln uit armoede. = A.", nogSimpeler: "Hervormingen = A." },
        },
      },
    ],
  },
  // ─── Stap 4: Ontwikkelingshulp ────────────────────
  {
    title: "Ontwikkelingshulp — werkt het?",
    explanation: "**Ontwikkelingshulp** = rijkere landen helpen armere landen vooruit.\n\n**Soorten hulp**:\n\n**1. Bilaterale hulp**\n• Rechtstreeks van NL naar bv. Mali\n• Vaak met voorwaarden (NL bedrijf moet leveren)\n\n**2. Multilaterale hulp**\n• Via VN, EU, Wereldbank — meerdere landen samen\n• Vermijdt politieke beïnvloeding\n• Bv. UNICEF, WHO, UNDP, World Bank\n\n**3. Particuliere hulp**\n• NGO's: Oxfam Novib, Cordaid, Artsen zonder Grenzen, Save the Children\n• Donaties van burgers + bedrijven\n• Vaak directer naar projecten\n\n**4. Noodhulp**\n• Bij rampen — voedsel, medicijnen, tenten\n• Bv. aardbeving, oorlog, droogte\n• Snel, kort\n\n**5. Structurele hulp**\n• Lange termijn — scholen, ziekenhuizen, watervoorzieningen\n• Vaak meerjarige projecten\n• Effect na 10-20 jaar\n\n**NL-bijdrage**:\n• ~€5 miljard/jaar (~0,5% van BBP)\n• Doel: 0,7% van BBP (UN-norm), maar daar zit NL onder\n• Recent verlaagd door Rutte IV en daarna\n\n**Voor- en nadelen hulp**:\n\n**Voor**:\n• ✓ Helpt bij rampen, vermindert directe nood\n• ✓ Investeringen in onderwijs/zorg leveren lange termijn winst op\n• ✓ Stabiliteit voorkomt migratie en conflict\n• ✓ Eigen markt op termijn (NL-bedrijven kunnen aan deze landen verkopen)\n\n**Tegen**:\n• ✗ Soms verdwijnt het in corruptie\n• ✗ Kan **afhankelijkheid** creëren — lokale producent kan niet concurreren met gratis hulp\n• ✗ Verkeerde prioriteiten (donor besluit, niet ontvanger)\n• ✗ Kortetermijn-projecten zonder duurzaam effect\n\n**Modern denken** (Easterly, Banerjee/Duflo):\n• 'Big push' (massale hulp): vaak teleurstellend\n• 'Randomized controlled trials': test wat WERKELIJK werkt\n• Voorbeeld: muskietennetten gratis = redt levens, kosten laag\n• Voorbeeld: cashtransfers (direct geld geven) = vaak beter dan goederen\n\n**Eerlijke handel (Fair Trade)**:\n• Kopers betalen een eerlijke prijs aan boeren, niet de laagst mogelijke\n• Logo's: Max Havelaar, Fairtrade, UTZ, Rainforest Alliance\n• Voor: koffie, thee, cacao, bananen, bloemen\n• Iets duurder voor consument, beter voor producent\n\n**Beste vorm hulp?**\nGeen consensus. Meeste effectief lijkt: **investering in onderwijs + zorg + infrastructuur** + **handel** + **stabiliteit**.\n\n**Migratie als 'hulp'**:\n• Gastarbeiders sturen geld terug naar familie ('remittances')\n• Wereldwijd ~$700 mrd/jaar — 3x zo groot als alle ontwikkelingshulp\n• Maar: brain drain ook risico",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">ONTWIKKELINGSHULP</text>
<rect x="20" y="40" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="60" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">noodhulp</text>
<rect x="165" y="40" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="232" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">structurele hulp</text>
<rect x="20" y="85" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="105" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">bilateraal</text>
<rect x="165" y="85" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="232" y="105" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">multilateraal</text>
<text x="160" y="145" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">NL: ~€5 mrd / 0,5% BBP</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">UN-norm: 0,7%</text>
<text x="160" y="185" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">remittances: $700 mrd/jaar (3× hulp)</text>
</svg>`,
    checks: [
      {
        q: "**Multilaterale hulp** is:",
        options: ["Via VN, EU, Wereldbank — meerdere landen samen", "Direct van NL naar Mali", "Particuliere hulp", "Noodhulp"],
        answer: 0,
        wrongHints: [null, "Dat is bilateraal.", "Particulier = NGO.", "Noodhulp = bij rampen."],
        uitlegPad: {
          stappen: [{ titel: "Multi = meerdere landen samen", tekst: "Multilaterale hulp = via internationale organisaties waar veel landen geld in stoppen. Bv. VN, EU, Wereldbank, IMF, UNICEF. Ontvanger weet niet welk land precies betaalde. Voordeel: minder politieke beïnvloeding. Nadeel: meer overhead + bureaucratie. Tegenpool: bilateraal = NL → Mali direct." }],
          woorden: [{ woord: "multilateraal", uitleg: "'Veel-zijdig'. Meerdere landen samen via organisatie." }, { woord: "bilateraal", uitleg: "'Twee-zijdig'. Land A geeft direct aan land B." }, { woord: "UNICEF", uitleg: "VN-organisatie voor kinderen. Wereldwijd actief. Multilateraal." }],
          theorie: "NL doneert via beide kanalen. Multilateraal: NL → EU → ontwikkelingsfonds. Bilateraal: NL → Mali direct. Voordeel multi: NL kan met andere landen samen schaal maken. Nadeel: NL minder controle waar geld heen gaat.",
          voorbeelden: [{ type: "voorbeelden", tekst: "VN-fonds = multi. UNICEF = multi. Wereldbank = multi. NL-ambassade Ghana met direct project = bilateraal. Oxfam = particulier." }],
          basiskennis: [{ onderwerp: "Niet andere vormen", uitleg: "Bilateraal = direct (NL→Mali). Particulier = NGO's (Oxfam etc). Noodhulp = doel (rampen), niet kanaal." }],
          niveaus: { basis: "Meerdere landen samen. A.", simpeler: "Multilateraal = via VN/EU/Wereldbank, meerdere landen samen. = A.", nogSimpeler: "Samen = A." },
        },
      },
      {
        q: "Welke NGO is bekend van **noodhulp bij rampen**?",
        options: ["Artsen zonder Grenzen", "Belastingdienst", "Wereldbank", "Rabobank"],
        answer: 0,
        wrongHints: [null, "Geen hulp.", "Wereldbank is multilateraal.", "Bank, geen NGO."],
        uitlegPad: {
          stappen: [{ titel: "Médecins Sans Frontières — 1971", tekst: "Artsen zonder Grenzen (AzG / MSF — Médecins Sans Frontières) = NGO opgericht in 1971 door Franse artsen. Sturen medische teams naar rampen, oorlogen, epidemieën — onafhankelijk van overheden. Werken in ~70 landen. Nobelprijs Vrede 1999. Bekend door snelle inzet bij aardbevingen + Ebola-uitbraken." }],
          woorden: [{ woord: "NGO", uitleg: "Non-Governmental Organisation. Niet-overheids hulporganisatie. Vaak privaat gefinancierd door donaties." }, { woord: "Artsen zonder Grenzen", uitleg: "Internationale medische NGO. Specialiteit: noodhulp bij rampen/oorlogen." }, { woord: "noodhulp", uitleg: "Korte termijn hulp bij rampen: voedsel, medicijnen, tenten. Anders dan structurele hulp." }],
          theorie: "Andere bekende NL-NGO's: Oxfam Novib (armoede), Cordaid (ontwikkeling), Save the Children (kinderen), Stichting Vluchteling. Allemaal niet-overheid, gefinancierd door donaties + soms overheidssubsidies.",
          voorbeelden: [{ type: "inzet", tekst: "AzG na aardbeving Haïti 2010, Ebola-uitbraak West-Afrika 2014, Syrische oorlog vanaf 2011. Snelle inzet + medische expertise op moeilijke plekken." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Belastingdienst = NL-overheid (geen hulp). Wereldbank = multilateraal. Rabobank = commerciële bank." }],
          niveaus: { basis: "Artsen zonder Grenzen. A.", simpeler: "Noodhulp-NGO = Artsen zonder Grenzen (AzG). Medische rampenhulp. = A.", nogSimpeler: "AzG = A." },
        },
      },
      {
        q: "Wat is een **risico van gratis hulp**?",
        options: ["Lokale producenten kunnen niet concurreren met gratis goederen", "Gratis is altijd goed", "Mensen ondankbaar", "Te duur"],
        answer: 0,
        wrongHints: [null, "Soms wel risico.", "Niet relevant.", "Gratis ≠ duur voor ontvanger."],
        uitlegPad: {
          stappen: [{ titel: "Gratis hulp kan lokale economie ondermijnen", tekst: "Voorbeeld: VS dumpt gratis voedsel (rijst, graan) in Haïti na rampen. Goed bedoeld — maar Haïtiaanse boeren konden hun rijst niet meer verkopen (wie koopt geld-rijst als gratis ligt?). Boeren gingen failliet. Land werd MEER afhankelijk van import + hulp. 'Hulp die hulp veroorzaakt'." }],
          woorden: [{ woord: "afhankelijkheid", uitleg: "Land kan niet zonder hulp meer. Lokale economie verzwakt." }, { woord: "marktverstoring", uitleg: "Gratis goederen drukken prijzen, lokale aanbieders konden niet concurreren." }, { woord: "dignity", uitleg: "'Waardigheid'. Modern hulpdenken: liever cash + werk dan gratis goederen die mensen passief maken." }],
          theorie: "Modern hulpdenken: hulp werkt beter als (1) cash-transfers in plaats van goederen, (2) tijdelijk + uitfasering, (3) lokale producten inkopen waar mogelijk, (4) capaciteit opbouwen ipv afhankelijkheid. Easterly/Banerjee/Duflo schreven hier veel over.",
          voorbeelden: [{ type: "concreet", tekst: "VS Food for Peace-programma: kreeg kritiek voor schaden Afrikaanse boeren in jaren '80-'90. Veranderd nu naar lokaal voedsel inkopen + cash-vouchers." }],
          basiskennis: [{ onderwerp: "Niet ander", uitleg: "Niet 'altijd goed' (soms slecht effect). Niet 'ondankbaar' (geen oorzaak). Voor gever duur, voor ontvanger niet." }],
          niveaus: { basis: "Lokale producenten verliezen. A.", simpeler: "Gratis hulp = lokale producent kan niet concurreren, gaat failliet. = A.", nogSimpeler: "Lokaal verliest = A." },
        },
      },
      {
        q: "Wat is **NL ontwikkelingsbudget** als % BBP?",
        options: ["~0,5% (onder de UN-norm van 0,7%)", "~5%", "~50%", "~10%"],
        answer: 0,
        wrongHints: [null, "Te hoog.", "Veel te hoog.", "Te hoog."],
        uitlegPad: {
          stappen: [{ titel: "NL onder UN-norm sinds Rutte IV", tekst: "VN-norm sinds 1970: rijke landen besteden 0,7% BBP aan ontwikkelingshulp. NL haalde dit lang (was internationaal voorbeeld). Sinds Rutte IV (2022+) verlaagd naar ~0,5% BBP = ~€5 miljard/jaar. Alleen 5 landen halen 0,7%: Zweden, Noorwegen, Luxemburg, Duitsland, Denemarken. NL viel uit deze top." }],
          woorden: [{ woord: "0,7%-norm", uitleg: "VN-doelstelling sinds 1970. Rijke landen 0,7% BBP aan ODA (officiële ontwikkelingshulp)." }, { woord: "ODA", uitleg: "Official Development Assistance. Officiële ontwikkelingshulp, gemeten door OESO." }],
          theorie: "NL bezuinigde op hulp vanaf 2010, accenten verschoven naar 'handel' + 'opvang in regio'. Veel NGO's kritiek hierop. Wereldgemiddelde rijke landen: ~0,3% BBP. Dus NL nog steeds boven gemiddelde, maar onder UN-norm.",
          voorbeelden: [{ type: "vergelijk", tekst: "Top: Zweden 0,99%, Noorwegen 0,86%, Denemarken 0,71%. NL 0,5%. VS 0,2%. Wereldgemiddelde ~0,35%." }],
          basiskennis: [{ onderwerp: "Niet hogere", uitleg: "5% = te hoog (zou ~€55 mrd zijn). 50% = onmogelijk. 10% = te hoog." }],
          niveaus: { basis: "~0,5%. A.", simpeler: "NL ontwikkelingsbudget = ~0,5% BBP, onder UN-norm 0,7%. = A.", nogSimpeler: "0,5% = A." },
        },
      },
      {
        q: "Wat is **Fair Trade**?",
        options: ["Eerlijke prijs voor boeren in arme landen, hoger dan minimum", "Gratis producten", "Geen handel", "Alleen Europese handel"],
        answer: 0,
        wrongHints: [null, "Wel handel, eerlijker.", "Tegendeel.", "Wereldwijd."],
        uitlegPad: {
          stappen: [{ titel: "Boeren krijgen eerlijke + minimum-prijs", tekst: "Fair Trade = systeem waar consumenten in rijke landen iets meer betalen, zodat boeren in arme landen een EERLIJKE prijs krijgen — niet de absoluut laagste die wereldmarkt vraagt. Plus: minimumprijs gegarandeerd (ook als wereldprijs daalt). Plus: premie voor sociale projecten (school, kliniek dorp). Keurmerken: Max Havelaar, Fairtrade, UTZ." }],
          woorden: [{ woord: "Fair Trade", uitleg: "'Eerlijke handel'. Systeem voor eerlijkere prijzen boeren arme landen." }, { woord: "Max Havelaar", uitleg: "Eerste Fair Trade-keurmerk in NL (1988). Genoemd naar boek Multatuli (1860, anti-koloniaal)." }, { woord: "minimum-prijs", uitleg: "Vaste vloer onder prijs. Boer weet zeker inkomen, ook bij wereldmarkt-crash." }],
          theorie: "Werkt voor: koffie, thee, cacao, bananen, bloemen. Consument betaalt ~10-20% extra. Bedrijven moeten audit doorstaan om keurmerk te krijgen. Critici: niet alle boeren kunnen meedoen (organisatie-eisen). Voorstanders: alternatief voor commodity-exploitatie.",
          voorbeelden: [{ type: "koffie", tekst: "Reguliere koffie: boer Ethiopië krijgt $0,02/kop. Fair Trade: $0,08 (4x). Voor consument 10 cent meer per kop. Voor boer = dubbel salaris." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Niet gratis (consument betaalt nog). Wel handel (juist!). Wereldwijd, niet alleen EU." }],
          niveaus: { basis: "Eerlijke boerenprijs. A.", simpeler: "Fair Trade = boer arme land krijgt eerlijke + minimum-prijs. Keurmerk. = A.", nogSimpeler: "Eerlijke prijs = A." },
        },
      },
      {
        q: "**Remittances** — wat zijn dat?",
        options: ["Geld dat migranten naar familie thuis sturen — wereldwijd $700 mrd/jaar", "Een soort belasting", "Toeristisch geld", "Ontwikkelingshulp van overheden"],
        answer: 0,
        wrongHints: [null, "Niet belasting.", "Niet toerisme.", "Niet overheid."],
        uitlegPad: {
          stappen: [{ titel: "Migranten-geld = 3x alle hulp samen", tekst: "Remittances = geld dat migranten in rijke landen periodiek terugsturen naar familie in thuisland. Per Western Union, MoneyGram, of moderne apps (Wise, Remitly). Wereldwijd ~$700 miljard/jaar. Dat is 3x meer dan alle officiële ontwikkelingshulp samen. Voor sommige landen (Filipijnen, Mexico, Bangladesh) = 5-10% BBP." }],
          woorden: [{ woord: "remittances", uitleg: "Engelse term voor 'overmakingen'. In ontwikkelingscontext: migranten-geld naar thuisland." }, { woord: "diaspora", uitleg: "Gemeenschap van migranten in vreemd land die band met thuisland houdt." }, { woord: "brain drain", uitleg: "Slimste mensen verlaten arm land. Negatief gevolg migratie. Maar remittances = positief deel." }],
          theorie: "Remittances zijn DIRECT geld naar gezinnen: ze gaan naar voedsel, school, woning, niet via overheid (geen corruptie-risico). Voor families enorm. Voor land: macro-stabilisatie. Critici: kan ook luiheid stimuleren (gezin wacht op geld in plaats van werk).",
          voorbeelden: [{ type: "cijfers", tekst: "Filipijnen ontvangt $35 mrd/jaar remittances = 10% BBP. India $100 mrd (1e wereld). Mexico $60 mrd. Vergelijk: alle officiële hulp wereldwijd ~$200 mrd. Remittances >> hulp." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Geen belasting (vrijwillig). Geen toerisme. Geen overheid (privaat-privaat tussen mensen)." }],
          niveaus: { basis: "Migranten-geld. A.", simpeler: "Remittances = geld dat migranten naar familie thuis sturen. $700 mrd/jaar wereld. = A.", nogSimpeler: "Geld naar familie = A." },
        },
      },
    ],
  },
  // ─── Stap 5: Duurzame ontwikkeling + SDGs ───────
  {
    title: "Duurzame ontwikkeling en SDG's",
    explanation: "**Duurzame ontwikkeling** = ontwikkeling die voorziet in behoeften van NU zonder die van toekomstige generaties in gevaar te brengen (Brundtland 1987).\n\n**Drie pijlers** (3P's):\n• **People** (mensen): sociale gerechtigheid, gezondheid\n• **Planet** (planeet): milieu, klimaat, biodiversiteit\n• **Profit** (winst): economische ontwikkeling\n\nVerwarringssvalkuil: 'duurzaam' wordt vaak gebruikt voor 'milieuvriendelijk', maar het breder.\n\n**Sustainable Development Goals (SDG's)** — 17 VN-doelen voor 2030:\n\n1. Geen armoede\n2. Geen honger\n3. Goede gezondheid en welzijn\n4. Kwaliteitsonderwijs\n5. Gendergelijkheid\n6. Schoon water en sanitair\n7. Betaalbare en duurzame energie\n8. Eerlijk werk en economische groei\n9. Industrie, innovatie en infrastructuur\n10. Verminderde ongelijkheid\n11. Duurzame steden\n12. Verantwoorde consumptie en productie\n13. Klimaatactie\n14. Leven onder water\n15. Leven op land (biodiversiteit)\n16. Vrede, gerechtigheid, sterke instellingen\n17. Partnerschap voor doelen\n\n**Voor élk land** — ook NL heeft hier nog werk aan (klimaat, ongelijkheid, stikstof).\n\n**Microkrediet**:\n• Kleine leningen (€50-€500) voor ondernemers in arme landen\n• **Muhammad Yunus** (Bangladesh, Nobelprijs 2006) — Grameen Bank\n• Vaak voor vrouwen (terugbetaalt beter, investeren in gezin)\n• Werkt: kleine investering → eigen bedrijfje → uit armoede\n• Critici: ook risico op schuldenval bij hoge rentes\n\n**Klimaat en arme landen**:\n• Veroorzaken weinig CO2 maar lijden meeste\n• Droogtes, stijgende zeespiegel, extreme weer\n• 'Loss and damage'-fonds: rijke landen betalen aan arme voor klimaatschade\n\n**Tech als hefboom**:\n• Mobiele telefoon: 90%+ heeft er een, ook in arme landen\n• Mobiel bankieren (M-Pesa Kenya): voor wie geen bankrekening kan\n• Online onderwijs (Khan Academy etc.)\n• Solar panels worden goedkoop genoeg voor afgelegen dorpen\n\n**'Leapfrogging'**:\n• Arme landen slaan stappen over\n• Bv. geen vaste telefoon → direct mobiel\n• Geen kolencentrales → direct zon/wind\n\n**Kritiek op SDG's**:\n• Te veel doelen (17!) → moeilijk focus\n• Geen sterke handhaving\n• Voortgang is gemengd: sommige doelen halen, andere niet\n\n**Wat KUN je doen**:\n• Bewust kopen (Fair Trade)\n• Minder verspillen\n• Doneren aan goede doelen\n• Stem op partijen met sterk ontwikkelings-/klimaat-beleid\n• Carrière met impact",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">DUURZAME ONTWIKKELING</text>
<rect x="20" y="40" width="280" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="160" y="60" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">3P's: PEOPLE · PLANET · PROFIT</text>
<text x="160" y="72" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Brundtland 1987</text>
<rect x="20" y="85" width="280" height="50" rx="6" fill="rgba(255,213,79,0.10)" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="160" y="103" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">17 SDG's voor 2030</text>
<text x="160" y="118" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">geen armoede · gezond · onderwijs · klimaat</text>
<text x="160" y="130" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">voor élk land</text>
<rect x="20" y="145" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="87" y="163" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">MICROKREDIET</text>
<text x="87" y="177" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">€50-500 voor ondernemers</text>
<rect x="165" y="145" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="232" y="163" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">LEAPFROGGING</text>
<text x="232" y="177" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">stappen overslaan</text>
<text x="160" y="208" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">M-Pesa · Khan Academy · solar</text>
</svg>`,
    checks: [
      {
        q: "Wat zijn **SDG's**?",
        options: ["Sustainable Development Goals — 17 VN-doelen voor 2030", "Sociale Druk Geld", "Schoolse Doelen Groep", "Subsidie Donatie Geld"],
        answer: 0,
        wrongHints: [null, "Internationale Engelse afkorting.", "Niet onderwijs-specifiek.", "Geen donaties."],
        uitlegPad: {
          stappen: [{ titel: "17 doelen voor 2030", tekst: "SDG = Sustainable Development Goals. 17 doelen door VN vastgesteld in 2015. Voor 2030 te behalen door ALLE landen. Bv. geen armoede (1), geen honger (2), gezondheid (3), onderwijs (4), gendergelijkheid (5), klimaatactie (13), enz." }],
          woorden: [{ woord: "SDG", uitleg: "Sustainable Development Goals. Engels voor 'Duurzame Ontwikkelingsdoelen'." }, { woord: "VN", uitleg: "Verenigde Naties. 193 landen samenwerkend voor wereldvrede + ontwikkeling." }, { woord: "2030", uitleg: "Deadline voor SDG's. Halverwege nu — voortgang gemengd." }],
          theorie: "SDG's opvolger van Millennium Goals (2000-2015). Verschil: SDG's voor ALLE landen (ook NL!), MDG's alleen ontwikkelingslanden. NL heeft SDG-werk: klimaat, ongelijkheid, stikstof, etc.",
          voorbeelden: [{ type: "top-5", tekst: "SDG1: geen armoede. SDG2: geen honger. SDG3: gezondheid. SDG4: onderwijs. SDG13: klimaatactie. Allemaal voor 2030." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Engelse afkorting (internationale standaard). Niet onderwijs-specifiek (17 brede thema's). Geen donaties (= doelen)." }],
          niveaus: { basis: "17 VN-doelen 2030. A.", simpeler: "SDG = Sustainable Development Goals = 17 VN-doelen voor 2030. = A.", nogSimpeler: "17 doelen = A." },
        },
      },
      {
        q: "Wat zijn de **3 P's** van duurzaamheid?",
        options: ["People, Planet, Profit", "Pro, Plus, Premium", "Plant, Plant, Plant", "Plan, Pay, Promote"],
        answer: 0,
        wrongHints: [null, "Onzin.", "Onzin.", "Niet 3 P's."],
        uitlegPad: {
          stappen: [{ titel: "Mensen + planeet + winst", tekst: "3 P's = People (mensen — sociaal goed), Planet (planeet — milieu/klimaat), Profit (winst — economisch duurzaam). Concept van John Elkington (1994). Bedrijven moeten op ALLE drie scoren, niet alleen winst." }],
          woorden: [{ woord: "Triple Bottom Line", uitleg: "Engels voor '3 P's'. Bedrijven meten succes op 3 lijnen: sociaal + ecologisch + economisch." }, { woord: "Brundtland", uitleg: "Noors politica (1987). Definieerde duurzame ontwikkeling: 'voldoen aan behoeften NU zonder toekomstige generaties te belasten'." }],
          theorie: "Voor 1990: bedrijven keken alleen naar winst. Na 1990: ook milieu + sociaal. Modern denken: zonder People + Planet OOK falen op Profit op lange termijn (klimaat-schade kost geld).",
          voorbeelden: [{ type: "voorbeeld", tekst: "Tony's Chocolonely: People (eerlijke prijs cacaoboeren), Planet (geen ontbossing), Profit (winst). Alle 3 P's." }],
          basiskennis: [{ onderwerp: "Engels", uitleg: "P's zijn Engels: People/Planet/Profit. Vandaar onthouden makkelijk. Soms vertaald als Mensen/Milieu/Munten." }],
          niveaus: { basis: "People+Planet+Profit. A.", simpeler: "3 P's duurzaamheid = People (mensen) + Planet (milieu) + Profit (winst). = A.", nogSimpeler: "3 P's = A." },
        },
      },
      {
        q: "**Microkrediet** werkt vooral voor:",
        options: ["Beginnende kleine ondernemers in arme landen", "Internationale grote bedrijven", "NL-studenten", "Hele dorpen tegelijk"],
        answer: 0,
        wrongHints: [null, "Grote bedrijven hebben gewone leningen.", "DUO doet dat in NL.", "Per persoon."],
        uitlegPad: {
          stappen: [{ titel: "Kleine lening = grote impact", tekst: "Microkrediet = mini-lening (€50-€500) voor mensen die nooit bij gewone bank kunnen lenen (geen onderpand, geen baan). Vooral vrouwen in arme landen. Doel: eigen bedrijfje starten (kraampje, naaiwerk, kleine winkel) en uit armoede komen." }],
          woorden: [{ woord: "microkrediet", uitleg: "Kleine lening voor arme ondernemers. Vaak <€500. Korte looptijd." }, { woord: "Grameen Bank", uitleg: "Eerste microkrediet-bank. Opgericht door Yunus in Bangladesh 1976." }],
          theorie: "Werkt omdat: (1) klein bedrag = haalbare terugbetaling, (2) vrouwen-focus (terugbetalen beter, investeren in gezin), (3) groep-borging (5-tal vrouwen samen verantwoordelijk). Terugbetalingspercentage 95%+ — beter dan rijke banken.",
          voorbeelden: [{ type: "verhaal", tekst: "Bangladesh-vrouw leent €100, koopt naaimachine, naait kleding, verkoopt op markt, betaalt lening in 1 jaar terug, heeft eigen inkomen voor gezin." }],
          basiskennis: [{ onderwerp: "Critici", uitleg: "Microkrediet niet perfect: soms hoge rente, soms schuldenval. Maar groot effect op individueel niveau." }],
          niveaus: { basis: "Kleine ondernemers arme landen. A.", simpeler: "Microkrediet = mini-lening (€50-500) voor beginnende ondernemer arm land. = A.", nogSimpeler: "Kleine lening = A." },
        },
      },
      {
        q: "Wie won de **Nobelprijs** voor microkrediet (2006)?",
        options: ["Muhammad Yunus", "Mark Rutte", "Donald Trump", "Christine Lagarde"],
        answer: 0,
        wrongHints: [null, "Geen Nobelprijs.", "Geen Nobelprijs.", "ECB-president."],
        uitlegPad: {
          stappen: [{ titel: "Vader microkrediet", tekst: "Muhammad Yunus (Bangladesh, geboren 1940). Econoom. Begon 1976 met €27-leningen aan 42 vrouwen in dorp Jobra. Werd Grameen Bank. Won Nobelprijs Vrede 2006 (samen met Grameen Bank) — 'voor opbouw economische + sociale ontwikkeling van onderaf'." }],
          woorden: [{ woord: "Muhammad Yunus", uitleg: "Bangladeshi econoom + ondernemer. Vader van microkrediet. Nobelprijs 2006." }, { woord: "Grameen Bank", uitleg: "Bangladesh microkrediet-bank. Opgericht 1976. Inmiddels 9 miljoen leden." }],
          theorie: "Yunus' inzicht: arme mensen hebben WEL ondernemerschap, alleen geen toegang tot kapitaal. Geef ze kleine lening + ze betalen prima terug + komen uit armoede. Concept inmiddels wereldwijd toegepast.",
          voorbeelden: [{ type: "schaal", tekst: "Grameen Bank: 9 miljoen leden, 97% vrouwen, $30 miljard uitgeleend sinds 1976. Terugbetalingspercentage 95%+." }],
          basiskennis: [{ onderwerp: "Andere winnaars", uitleg: "Nobelprijs Vrede 2006 = Yunus. Mark Rutte/Trump/Lagarde geen Nobelprijs gewonnen." }],
          niveaus: { basis: "Muhammad Yunus. A.", simpeler: "Microkrediet Nobelprijs 2006 = Muhammad Yunus (Grameen Bank Bangladesh). = A.", nogSimpeler: "Yunus = A." },
        },
      },
      {
        q: "**Leapfrogging** is:",
        options: ["Arme landen slaan stappen over (geen vaste tel → mobiel)", "Een kinderspel", "Belastingontwijking", "Soort hulp"],
        answer: 0,
        wrongHints: [null, "Niet relevant hier.", "Niet hetzelfde.", "Geen specifieke hulpvorm."],
        uitlegPad: {
          stappen: [{ titel: "Generatie overslaan", tekst: "Leapfrogging = letterlijk 'haasje-over springen'. Arme landen slaan ontwikkelings-stappen over. Voorbeeld: nooit vaste telefoonlijn aangelegd → direct mobiel. Geen kolencentrales gebouwd → direct zonne-energie. Schoolboeken overgeslagen → direct tablet/internet." }],
          woorden: [{ woord: "leapfrogging", uitleg: "Ontwikkelings-stappen overslaan, direct naar nieuwste technologie." }, { woord: "M-Pesa", uitleg: "Keniaans mobiel-bankieren systeem. Sinds 2007. Mensen zonder bankrekening kunnen geld sturen via SMS." }],
          theorie: "Voordeel: arme landen hoeven niet 50 jaar wachten om Westen in te halen. Kunnen sprong maken via nieuwe tech. Vooral mobiel + internet + zonne-energie maken dit mogelijk.",
          voorbeelden: [{ type: "Afrika", tekst: "Kenia: 80% volwassenen gebruikt M-Pesa, slechts 30% heeft bankrekening. Indonesië: 60% smartphone-gebruikers, slechts 25% PC-gebruikers. Direct mobiel zonder PC-tijdperk." }],
          basiskennis: [{ onderwerp: "Engels", uitleg: "Niet kinderspel (haasje-over voor kinderen). Niet belastingontwijking. Specifieke ontwikkelings-term." }],
          niveaus: { basis: "Stappen overslaan. A.", simpeler: "Leapfrogging = arme landen slaan tech-stappen over (vaste tel → direct mobiel). = A.", nogSimpeler: "Overslaan = A." },
        },
      },
      {
        q: "**Klimaat en arme landen**:",
        options: ["Veroorzaken weinig CO2 maar lijden meest (droogtes, zeespiegel)", "Geen verband", "Profiteren van klimaat", "Weten van niets"],
        answer: 0,
        wrongHints: [null, "Wel sterk verband.", "Tegendeel.", "Velen weten goed."],
        uitlegPad: {
          stappen: [{ titel: "Onrechtvaardige verdeling", tekst: "Klimaat-paradox: rijke landen (VS, EU, China) veroorzaakten 80% historische CO2-uitstoot. Maar arme landen lijden meeste klimaatschade: droogtes (Sahel), overstromingen (Bangladesh), zeespiegel-stijging (eilandstaten zoals Maladiven, Tuvalu)." }],
          woorden: [{ woord: "klimaat-rechtvaardigheid", uitleg: "Idee dat veroorzakers (rijke landen) moeten betalen voor schade in slachtoffer-landen (arme)." }, { woord: "loss and damage", uitleg: "VN-fonds (sinds 2022) waarin rijke landen geld storten voor klimaatschade arme landen." }],
          theorie: "Vraagstukken: (1) rijke landen wilen niet allemaal extra betalen. (2) arme landen willen zelf nu ook industrie + groei = meer CO2. Spanning tussen ontwikkeling NU vs klimaat LATER. Klimaatconferenties (COP) onderhandelen hierover.",
          voorbeelden: [{ type: "cijfers", tekst: "Sub-Sahara Afrika: 4% wereldbevolking, <1% CO2. Maar Sahel woestijnt 50 km/jaar verder. Bangladesh: 165 miljoen mensen, 1/3 land onder zeespiegel-bedreiging." }],
          basiskennis: [{ onderwerp: "Niet ander", uitleg: "Wel sterk verband (CO2 → opwarming → droogte/storm). Tegendeel van profiteren (juist lijden). Velen weten goed (onderwerp leeft sterk)." }],
          niveaus: { basis: "Weinig CO2, veel schade. A.", simpeler: "Arme landen veroorzaken weinig CO2 maar lijden meeste klimaatschade. Onrechtvaardig. = A.", nogSimpeler: "Slachtoffer = A." },
        },
      },
    ],
  },
  // ─── Stap 6: Eerlijke handel en consumeer-keuzes ──────
  {
    title: "Eerlijke handel en jouw keuzes als consument",
    explanation: "Als consument heb je **macht**. Wat je koopt, beïnvloedt wat geproduceerd wordt en hoe.\n\n**Eerlijke handel (Fair Trade)** in detail:\n\n**Hoe het werkt**:\n• Boeren in arme landen organiseren in coöperatie\n• Kopers (Westerse bedrijven) betalen **hogere prijs** + **vaste minimumprijs** (zelfs als wereldprijs laag)\n• Extra premie voor sociale projecten in dorp (school, kliniek)\n• Garantie geen kinderarbeid + veilig werk\n\n**Belangrijkste keurmerken**:\n• **Max Havelaar** / **Fairtrade** — koffie, thee, cacao, fruit\n• **UTZ** (nu Rainforest Alliance) — koffie, thee, cacao\n• **Rainforest Alliance** — milieu + sociaal\n• **GOTS** — duurzame textiel\n• **MSC** — visserij\n• **EU-bio** — biologisch\n• **B-Corp** — bedrijven die hele organisatie sociaal+milieu doen\n\n**Voorbeeld koffie**:\n• Reguliere koffie: boer in Ethiopië krijgt $0,02 per kop (1%!)\n• Fair Trade: $0,08 (4%)\n• Verschil voor jou: ~10 cent per kop. Voor boer: dubbel salaris.\n\n**Kritiek op Fair Trade**:\n• Niet alle boeren kunnen meedoen (organisatie-eisen)\n• Hogere prijs leidt soms tot OVERPRODUCTIE\n• Marketing > daadwerkelijk effect (sommige bedrijven 'fair-washing')\n\n**Andere bewuste keuzes**:\n\n**1. Lokaal kopen**\n• Minder transport-CO2\n• Steun lokale economie\n• Maar: niet alles kan lokaal (koffie, banaan)\n\n**2. Tweedehands**\n• Vinted, Marktplaats, kringloop\n• Minder grondstof-gebruik\n• Goedkoper\n\n**3. Repareren in plaats van weggooien**\n• Repair Café\n• Right to Repair (EU-wetgeving in maak)\n• Spullen langer gebruiken\n\n**4. Minder vlees**\n• Vlees-productie veel CO2 + water + ruimte\n• 1 kg rundvlees ~15.000 liter water\n• 'Flexitariër': minder, niet geen\n\n**5. Energie besparen**\n• Verwarming 1°C lager = 6% minder gas\n• LED-lampen\n• Beter geïsoleerd huis\n\n**'Stem met je portemonnee'**:\n• Bedrijven volgen consumenten\n• Massa-keuzes maken verschil\n• Maar: niet ALLES op individu — beleid + bedrijven hebben grootste impact\n\n**Greenwashing**:\n• Bedrijven die zich groener voordoen dan ze zijn\n• Bv. olie-bedrijven met 'duurzaam'-reclames\n• Wees kritisch — kijk naar ACTIES, niet woorden\n\n**Voor jouw dagelijks leven**:\n• Koffie/thee: kies Fair Trade als je het kan betalen\n• Kleren: koop minder, beter kwaliteit, tweedehands\n• Eten: minder vlees, minder verspillen\n• Reizen: trein > vliegtuig\n• Spullen: lang gebruiken, repareren",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">JOUW MACHT ALS CONSUMENT</text>
<rect x="20" y="40" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="60" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">FAIR TRADE</text>
<text x="87" y="72" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Max Havelaar · UTZ</text>
<rect x="165" y="40" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="232" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">LOKAAL</text>
<text x="232" y="72" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">minder transport</text>
<rect x="20" y="85" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="105" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">2EHANDS</text>
<text x="87" y="117" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Vinted · Marktplaats</text>
<rect x="165" y="85" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="232" y="105" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">REPAREREN</text>
<text x="232" y="117" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Repair Café</text>
<text x="160" y="155" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">⚠ pas op greenwashing</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">stem met je portemonnee — én met je stem</text>
</svg>`,
    checks: [
      {
        q: "Wat doet **Fair Trade** voor boeren?",
        options: ["Eerlijke prijs (hoger dan minimum) + premie voor sociale projecten", "Gratis goederen", "Korting voor consument", "Belasting"],
        answer: 0,
        wrongHints: [null, "Niet gratis.", "Tegendeel.", "Geen belasting."],
        uitlegPad: {
          stappen: [{ titel: "Eerlijke prijs + premie", tekst: "Fair Trade geeft boeren in arme landen TWEE voordelen: (1) eerlijke prijs voor product, hoger dan wereldmarkt-minimum, gegarandeerd ook als marktprijs daalt. (2) Plus 'premie' (extra geld) voor sociale projecten in de dorp — school, kliniek, drinkwater." }],
          woorden: [{ woord: "Fair Trade", uitleg: "Eerlijke handel. Garanties voor boeren in arme landen." }, { woord: "premie", uitleg: "Extra bedrag bovenop normale prijs. Bij Fair Trade ~$0,20 per pond koffie." }],
          theorie: "Voordeel: boer kan plannen. Wereldmarktprijs koffie schommelt sterk (in 2001 zo laag dat boeren €0,30/kilo kregen — kosten zelfs niet). Fair Trade-minimum was toen €1,40 — bescherming.",
          voorbeelden: [{ type: "school", tekst: "Cacao-coöperatie Ghana ontvangt Fair Trade-premie. Dorp besluit samen: school bouwen, of waterput, of medicijn-kliniek. Coöperatie stemt." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Niet gratis (boer krijgt geld). Tegenovergestelde van korting (consument betaalt iets meer). Geen belasting (vrijwillig)." }],
          niveaus: { basis: "Eerlijke prijs + premie. A.", simpeler: "Fair Trade = eerlijke (hogere) prijs voor boer + extra geld voor dorp-projecten. = A.", nogSimpeler: "Eerlijke prijs = A." },
        },
      },
      {
        q: "Welk **keurmerk** gaat over koffie/cacao?",
        options: ["Max Havelaar / Fairtrade / UTZ", "EU-bio", "MSC", "Energy Star"],
        answer: 0,
        wrongHints: [null, "EU-bio = biologisch.", "MSC = vis.", "Niet voedsel."],
        uitlegPad: {
          stappen: [{ titel: "Logo's koffie/cacao", tekst: "Op koffie/cacao-pakken zie je vaak: Max Havelaar (NL, sinds 1988), Fairtrade (internationaal), UTZ (eerlijk + duurzaam). Soms gecombineerd met Rainforest Alliance (geen ontbossing). Allemaal Fair Trade-achtige labels voor cacao/koffie/thee/bananen." }],
          woorden: [{ woord: "Max Havelaar", uitleg: "Eerste NL Fair Trade-keurmerk (1988). Naam verwijst naar Multatuli's anti-koloniale boek." }, { woord: "UTZ", uitleg: "Engels 'Utz Kapeh' (Maya: 'goede koffie'). Sinds 2002. Focus duurzaamheid + eerlijke handel. Fuseerde 2018 met Rainforest Alliance." }],
          theorie: "Andere keurmerken voor ANDERE producten: EU-bio = biologisch eten (alle voedsel), MSC = duurzame vis, FSC = duurzame houten/papier, GOTS = bio-textiel. Pas op: keurmerk past bij PRODUCT-categorie.",
          voorbeelden: [{ type: "supermarkt", tekst: "Tony's Chocolonely-reep heeft Fairtrade + Rainforest Alliance-keurmerk. AH-huismerk koffie heeft UTZ. Verkade-chocolade heeft Rainforest Alliance." }],
          basiskennis: [{ onderwerp: "Niet andere keurmerken", uitleg: "EU-bio = bio voedsel algemeen. MSC = vis. Energy Star = energiezuinige apparaten. Allemaal andere categorieën." }],
          niveaus: { basis: "Max Havelaar/Fairtrade/UTZ. A.", simpeler: "Koffie/cacao-keurmerk = Max Havelaar + Fairtrade + UTZ. EU-bio = ander (alle bio-eten). = A.", nogSimpeler: "Max Havelaar = A." },
        },
      },
      {
        q: "Wat is **greenwashing**?",
        options: ["Bedrijven doen zich groener voor dan ze zijn", "Wassen met groen wasmiddel", "Een soort belasting", "Echt duurzaam beleid"],
        answer: 0,
        wrongHints: [null, "Niet letterlijk wassen.", "Geen belasting.", "Tegendeel."],
        uitlegPad: {
          stappen: [{ titel: "Vals duurzaam-imago", tekst: "Greenwashing = bedrijven gebruiken DUURZAAMHEIDS-marketing terwijl ze niet echt duurzaam zijn. Bv. olie-bedrijven met 'wij investeren in groene energie!'-reclames (terwijl 95% nog steeds olie is). Of supermarkt met 'duurzaam!'-stempel op product dat amper verschilt." }],
          woorden: [{ woord: "greenwashing", uitleg: "Letterlijk 'groen-wassen'. Misleidende duurzaamheids-claims." }, { woord: "Shell-paradox", uitleg: "Shell-reclame benadrukt zonne-energie, terwijl ~95% van haar omzet uit fossiele brandstoffen komt. Klassiek voorbeeld greenwashing." }],
          theorie: "Hoe herkennen: (1) Vage claims ('milieuvriendelijk' zonder cijfers). (2) Geen onafhankelijk keurmerk. (3) Klein duurzaam stuk versterkt voor groot vies stuk. (4) Beelden van groen blad/bos/zonnebloem zonder cijfer-bewijs. Wees kritisch.",
          voorbeelden: [{ type: "voorbeelden", tekst: "Plastic fles met '50% gerecycled'-tekst (terwijl het normaal allang is). 'CO2-neutraal'-vlucht (door compensatie kopen, niet echt CO2-loos). 'Natuurlijk'-shampoo (woord betekent niets juridisch)." }],
          basiskennis: [{ onderwerp: "Niet letterlijk", uitleg: "Niet wasmiddel (figuurlijk). Niet belasting. Tegendeel van echt duurzaam beleid." }],
          niveaus: { basis: "Vals duurzaam imago. A.", simpeler: "Greenwashing = bedrijven doen groener dan ze zijn, voor marketing. = A.", nogSimpeler: "Nep-groen = A." },
        },
      },
      {
        q: "Wat is een **flexitariër**?",
        options: ["Iemand die minder vlees eet, maar niet helemaal geen", "Veganist", "Vleeseter", "Iemand die alleen vis eet"],
        answer: 0,
        wrongHints: [null, "Veganist eet helemaal geen dierlijk.", "Niet hetzelfde.", "Pescatarier."],
        uitlegPad: {
          stappen: [{ titel: "Tussen vleeseter en vegetariër", tekst: "Flexitariër = letterlijk 'flexibele vegetariër'. Eet WEL vlees, maar BEWUST minder (bv. 2-3× per week ipv elke dag). Doel: milieu-impact verlagen + gezondheid + dierenwelzijn — zonder rigoureus alle vlees op te geven. Populairste 'duurzame eet-stijl' in NL." }],
          woorden: [{ woord: "flexitariër", uitleg: "Eet minder vlees, niet helemaal geen. Compromis." }, { woord: "vegetariër", uitleg: "Eet GEEN vlees + GEEN vis. Wel zuivel + eieren." }, { woord: "veganist", uitleg: "Eet GEEN dierlijke producten. Geen vlees/vis/zuivel/eieren/honing." }, { woord: "pescatariër", uitleg: "Eet WEL vis, GEEN vlees. Tussen vegetariër + vleeseter." }],
          theorie: "In NL ~50% noemt zich flexitariër. Maar onderzoek: meeste eten nog steeds 4-5x per week vlees. Term 'flexitariër' is populair, gedrag verandert langzamer.",
          voorbeelden: [{ type: "schaal", tekst: "Hardcore vleeseter (vlees elke dag) → flexitariër (2-3x/week) → vegetariër (geen vlees) → veganist (geen dierlijk). Schaal van afnemend dierlijk consumptie." }],
          basiskennis: [{ onderwerp: "Niet andere groepen", uitleg: "Veganist = strenger (geen dierlijk). Vleeseter = elke dag. Pescatariër = alleen vis." }],
          niveaus: { basis: "Minder vlees, niet geen. A.", simpeler: "Flexitariër = eet minder vlees (2-3×/week) maar niet helemaal geen. = A.", nogSimpeler: "Beetje vlees = A." },
        },
      },
      {
        q: "Hoeveel water kost **1 kg rundvlees** ongeveer?",
        options: ["~15.000 liter", "~10 liter", "~100 liter", "~1 miljoen liter"],
        answer: 0,
        wrongHints: [null, "Veel te weinig.", "Veel te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Waterspoor rundvlees", tekst: "1 kg rundvlees kost ~15.000 liter water om te produceren. Inclusief: water voor koe-drinken, water voor verbouwen van veevoer (mais, soja), water voor stallenreiniging. Vergelijk: 1 kg tarwe = 1500 L. 1 kg appels = 800 L. 1 kg groente = 200-300 L." }],
          woorden: [{ woord: "waterspoor", uitleg: "Hoeveelheid water nodig om iets te produceren. Engels: water footprint." }, { woord: "veevoer", uitleg: "Eten voor dieren (gras, mais, soja). Grootste verbruiker bij vlees-productie." }],
          theorie: "Vlees-productie veel zwaarder voor milieu dan plantaardig: water (15.000 L vs 1500 L tarwe), CO2 (60 kg vs 1 kg), grondgebruik (50 m² vs 2 m²). Vandaar 'minder vlees' = eenvoudigste milieu-actie.",
          voorbeelden: [{ type: "vergelijk", tekst: "1 hamburger (150g rund) = 2.250 L water. Een mens drinkt 2 L/dag. 1 burger = wat 1 mens in 3 jaar drinkt." }],
          basiskennis: [{ onderwerp: "Schaal", uitleg: "15.000 L = vol kuipbad ~150 keer. Echt veel — vandaar zware milieu-impact rundvlees." }],
          niveaus: { basis: "~15.000 L. A.", simpeler: "1 kg rundvlees ≈ 15.000 liter water (drinkbaar+veevoer+stal). = A.", nogSimpeler: "15.000 = A." },
        },
      },
      {
        q: "**'Stem met je portemonnee'** betekent:",
        options: ["Wat je koopt beïnvloedt wat bedrijven produceren", "Letterlijk stemmen met geld", "Onzin", "Niets"],
        answer: 0,
        wrongHints: [null, "Metafoor.", "Wel betekenis.", "Wel betekenis."],
        uitlegPad: {
          stappen: [{ titel: "Consument heeft macht", tekst: "'Stem met je portemonnee' = elke aankoop is een keuze. Wie koopt, bepaalt indirect wat bedrijven maken. Koop je Fair Trade-koffie → bedrijven zien vraag → meer Fair Trade-aanbod. Koop je goedkope vlees → bedrijven zien vraag → meer goedkope vlees. Geld = invloed." }],
          woorden: [{ woord: "consumenten-macht", uitleg: "Invloed die kopers samen hebben op markt. Bedrijven volgen wat verkoopt." }, { woord: "boycot", uitleg: "Bewust NIET kopen van bedrijf/product om druk uit te oefenen. Sterke vorm consumenten-actie." }],
          theorie: "Werkt vooral bij massa: 1 persoon doet weinig, miljoenen mensen samen verschil. Limietswan: niet ALLES op individu — overheidsregelgeving + bedrijfsbeleid hebben grootste impact. Maar individuele keuzes optellen + signaleren.",
          voorbeelden: [{ type: "voorbeelden", tekst: "Plantaardige melk-boom in NL: van 2% (2010) naar 20% (2024). Door consumenten-keuze. Supermarkten zagen vraag → meer aanbod → meer keuze." }],
          basiskennis: [{ onderwerp: "Niet letterlijk", uitleg: "Geen letterlijk stemmen (geen verkiezing). Metafoor. Wel echte betekenis (consumenten-invloed)." }],
          niveaus: { basis: "Kopen = invloed. A.", simpeler: "'Stem met je portemonnee' = wat je koopt beïnvloedt wat bedrijven maken. Macht consument. = A.", nogSimpeler: "Kopen = stemmen = A." },
        },
      },
    ],
  },
  // ─── Stap 7: Toekomst ─────────────────────────
  {
    title: "Toekomst — wat brengt de komende decennia?",
    explanation: "Hoe kan ontwikkeling de komende 30 jaar gaan? Geen kristallen bol, maar trends + uitdagingen:\n\n**Positieve trends**:\n\n**1. Aantal mensen in extreme armoede blijft dalen**\n• Van 1,9 mrd (1990) naar ~700 mln (2020)\n• Doel SDG: nul in 2030\n• Realistisch: nog wel honderden miljoenen, maar steeds minder\n\n**2. Gezondheidswinst**\n• Levensverwachting wereldwijd ~73 jaar (was 50 in 1950)\n• Kindersterfte halveerde\n• Vaccinaties bereiken meer kinderen\n\n**3. Technologie democratiseert**\n• Mobiele telefoon overal\n• Online onderwijs (Khan Academy, Coursera, YouTube)\n• Solar wordt goedkoop genoeg voor dorpen\n\n**4. Onderwijs groeit**\n• Vooral meisjes-onderwijs (was decennialang achter)\n• Geletterdheid stijgt wereldwijd\n\n**Uitdagingen**:\n\n**1. Klimaatverandering**\n• Arme landen lijden het meest (droogte, overstromingen)\n• Migratie zal groter worden\n• Energietransitie nodig (van kolen → zon/wind)\n• 'Just transition': niemand achterlaten\n\n**2. Ongelijkheid stijgt vaak**\n• Binnen landen vaak groter\n• 1% rijksten heeft veel groter aandeel sinds 1980\n• Tussen landen wel gedaald (China inhalen)\n\n**3. Demografie**\n• Afrika: jonge bevolking, snel groeiend (van 1,4 mrd nu naar 2,5 mrd in 2050)\n• Westen + Azië: vergrijzing\n• Migratie en arbeidsmarkt-shifts\n\n**4. Geopolitiek**\n• China-VS spanning\n• Rusland-Oekraïne oorlog impact wereldwijd\n• Globalisering wordt 'reshoring' (productie terug)\n\n**5. Schulden**\n• Veel arme landen post-corona zwaar in schuld\n• Risico op nieuwe schuldencrisis\n\n**6. Pandemieën**\n• Covid showed kwetsbaarheid\n• Volgende kan nog erger\n\n**7. AI en automatisering**\n• Veel banen verdwijnen door AI\n• Vooral routinematige administratie + kassa's\n• Maar ook nieuwe banen erbij\n\n**Wat KAN écht helpen?**\n• **Onderwijs voor meisjes** (#1 effect op ontwikkeling)\n• **Cash-transfers** (direct geld geven, mensen weten zelf wat ze nodig hebben)\n• **Investering in zorg** (basisgezondheid)\n• **Stabiliteit + goede instituties** (rechtvaardigheid, anti-corruptie)\n• **Open handel** (wel met eerlijke regels)\n• **Klimaatactie** wereldwijd\n\n**Voor jou als toekomstige burger/werker**:\n• Wereld is veranderlijker dan ooit\n• Levenslang leren is cruciaal\n• Internationaal denken (problemen + oplossingen grenzen-overschrijdend)\n• Bewuste consumenten-keuzes maken verschil\n• Stem op politici met visie + ethiek\n• Eventueel werk met impact (development, klimaat, gezondheid)\n\n**Hoopvol**: laatste 50 jaar is wereldwijd bijna alles beter geworden — armoede, gezondheid, onderwijs. Vaak vergeten in nieuws (slechte gebeurtenissen krijgen aandacht).",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">DE TOEKOMST</text>
<rect x="20" y="40" width="135" height="55" rx="6" fill="rgba(105,240,174,0.10)" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">+ TRENDS</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">armoede daalt</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">gezondheid · tech</text>
<rect x="165" y="40" width="135" height="55" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">− UITDAGINGEN</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">klimaat · oorlog</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">ongelijkheid · AI</text>
<text x="160" y="120" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">WAT WERKT</text>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">onderwijs (vooral meisjes)</text>
<text x="160" y="152" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">cash-transfers · zorg · stabiliteit</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">de wereld is beter dan we denken</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">levenslang leren · internationaal denken</text>
</svg>`,
    checks: [
      {
        q: "Wat zal in arme landen vooral het **MEEST** helpen?",
        options: ["Onderwijs (vooral voor meisjes)", "Meer wapens", "Meer luxe-import", "Geen verandering"],
        answer: 0,
        wrongHints: [null, "Wapens vergroten conflict.", "Luxe-import niet basis.", "Wel verandering nodig."],
        uitlegPad: {
          stappen: [{ titel: "Onderwijs vrouwen = #1 effect", tekst: "Onderzoek (Wereldbank, UNESCO) wijst aan: onderwijs is de KRACHTIGSTE ontwikkelings-hefboom. Vooral voor meisjes. Een meisje met 12 jaar scholing krijgt later: minder kinderen, latere zwangerschap, gezondere kinderen, hoger inkomen, meer politieke participatie. Effect strekt 2 generaties." }],
          woorden: [{ woord: "demografische dividend", uitleg: "Economische bonus van betere onderwijs + kleinere gezinnen + meer werkende vrouwen." }, { woord: "Malala", uitleg: "Pakistaanse meisje (geb. 1997). Werd neergeschoten door Taliban (2012) omdat ze naar school ging. Won Nobelprijs Vrede 2014. Symbool meisjes-onderwijs." }],
          theorie: "Andere effectieve interventies: vaccinaties (kosten <€1, redt levens), cash-transfers (direct geld), microkrediet. Maar onderwijs blijft #1 multiplicator omdat het ALLES anders maakt op lange termijn.",
          voorbeelden: [{ type: "cijfers", tekst: "Onderzoek: elk extra jaar scholing voor meisje = 10% hoger toekomstig inkomen. 1 jaar extra = 5% lager kindersterfte." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Wapens vergroten conflict, niet ontwikkeling. Luxe-import lost geen basisproblemen op. Wel verandering nodig (status quo is armoede)." }],
          niveaus: { basis: "Onderwijs meisjes. A.", simpeler: "Meest effectief = onderwijs, vooral voor meisjes. Levenslang multiplicator. = A.", nogSimpeler: "Scholing meisjes = A." },
        },
      },
      {
        q: "Wereldwijde **levensverwachting** is nu ongeveer:",
        options: ["~73 jaar", "~30 jaar", "~50 jaar", "~100 jaar"],
        answer: 0,
        wrongHints: [null, "Te laag.", "Was 1950-niveau.", "Uitzonderlijk."],
        uitlegPad: {
          stappen: [{ titel: "73 jaar = wereldwijd gemiddelde", tekst: "Wereldwijde levensverwachting nu (2023) = ~73 jaar. In 1900 was het ~32 jaar! In 1950 = ~50 jaar. Spectaculaire stijging dankzij: vaccinaties, antibiotica, schoon water, betere voeding, minder oorlog. Onbekend in de geschiedenis." }],
          woorden: [{ woord: "levensverwachting", uitleg: "Gemiddelde aantal jaren dat baby bij geboorte kan verwachten te leven." }, { woord: "gezondheids-revolutie", uitleg: "Periode 1900-nu waarin levensverwachting verdubbelde door tech + zorg." }],
          theorie: "Maar grote spreiding: rijke landen 80-84 jaar (Japan 84, NL 82, VS 77). Arme landen 55-65 (Sub-Sahara Afrika 60, Tsjaad 53). Verschil van 30+ jaar tussen land — onrechtvaardig.",
          voorbeelden: [{ type: "tijdlijn", tekst: "1900: ~32 jaar. 1950: ~50 jaar. 1980: ~62 jaar. 2000: ~67 jaar. 2020: ~73 jaar. Stijging vooral door minder kindersterfte." }],
          basiskennis: [{ onderwerp: "Niet andere getallen", uitleg: "30 jaar = middeleeuwen-niveau. 50 jaar = wereldwijd 1950. 100 jaar = uitzonderlijke individuen, geen gemiddelde." }],
          niveaus: { basis: "~73 jaar. A.", simpeler: "Wereldwijd levensverwachting nu ~73 jaar (was 32 in 1900). = A.", nogSimpeler: "73 = A." },
        },
      },
      {
        q: "Welke regio heeft **snelste bevolkingsgroei** komende decennia?",
        options: ["Afrika", "Europa", "Japan", "Noord-Amerika"],
        answer: 0,
        wrongHints: [null, "Krimp/vergrijzing.", "Krimp.", "Stagnatie."],
        uitlegPad: {
          stappen: [{ titel: "Afrika verdubbelt", tekst: "Afrika: 1,4 miljard mensen nu (2024). Verwacht 2050: 2,5 miljard (verdubbelt). 2100: 4 miljard. Reden: nog hoge geboortecijfers (~4 kinderen/vrouw vs Europa 1,5), dalende kindersterfte, jonge bevolking. Andere regio's krimpen of stagneren." }],
          woorden: [{ woord: "demografie", uitleg: "Studie van bevolkings-aantallen + samenstelling." }, { woord: "vergrijzing", uitleg: "Bevolking wordt gemiddeld ouder. Westen + Japan + China." }],
          theorie: "Demografische transitie: alle landen volgen pad van 'veel geboortes + veel sterfte' → 'veel geboortes + weinig sterfte' (=groei) → 'weinig geboortes + weinig sterfte' (stabiel). Afrika in middenfase. Westen al in 3e fase.",
          voorbeelden: [{ type: "cijfers", tekst: "Nigeria: 220 mln nu, 400 mln in 2050 (groter dan VS). Niger: hoogste geboortecijfer wereld (6,8 kinderen/vrouw). Japan + Italië + Zuid-Korea: krimpen al." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Europa = krimp (geboortes < sterfte). Japan = sterkst vergrijzend. Noord-Amerika = stabiel/lichte groei door migratie." }],
          niveaus: { basis: "Afrika. A.", simpeler: "Afrika groeit het snelst: 1,4 → 2,5 miljard tegen 2050. = A.", nogSimpeler: "Afrika = A." },
        },
      },
      {
        q: "Hoeveel mensen leefden in **extreme armoede** in 1990 vs 2020?",
        options: ["1,9 mrd → ~700 mln (sterke daling)", "Geen verandering", "Toename", "Onbekend"],
        answer: 0,
        wrongHints: [null, "Wel verandering.", "Tegendeel.", "Wel cijfers."],
        uitlegPad: {
          stappen: [{ titel: "Daling van 1,9 mrd naar 700 mln", tekst: "In 1990: 1,9 miljard mensen extreem arm (37% wereldbevolking). In 2020: ~700 miljoen (9%). DALING van 1,2 miljard mensen in 30 jaar. Grootste reductie in geschiedenis. Vooral door China (800 mln uit armoede) + India (~200 mln). Sub-Sahara Afrika blijft achter." }],
          woorden: [{ woord: "extreme armoede", uitleg: "Wereldbank: <$2,15/dag/persoon. Onder dit kan basisbehoeften niet." }, { woord: "Wereldbank", uitleg: "Internationale organisatie die armoede meet + monitort." }],
          theorie: "SDG1-doel: 0 extreme armoede in 2030. Niet haalbaar — recente schattingen 500-600 mln in 2030. Corona + Oekraïne-oorlog hebben terugval veroorzaakt (eerste stijging in 25 jaar in 2020-2022).",
          voorbeelden: [{ type: "context", tekst: "Hoewel veel mensen denken 'armoede stijgt', daalt het al 30 jaar. Nieuws negeert vaak goede ontwikkelingen. Boek 'Factfulness' (Hans Rosling) wijst hierop." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Wel verandering (sterke daling). Tegendeel van toename (daling). Cijfers WEL bekend (Wereldbank-data)." }],
          niveaus: { basis: "1,9 mrd → 700 mln. A.", simpeler: "Extreme armoede daalde 1990 (1,9 mrd) naar 2020 (700 mln). Sterke daling. = A.", nogSimpeler: "Sterke daling = A." },
        },
      },
      {
        q: "Een **uitdaging** voor de toekomst is:",
        options: ["Klimaatverandering — arme landen meest geraakt", "Te weinig technologie", "Geen ongelijkheid meer", "Geen problemen"],
        answer: 0,
        wrongHints: [null, "Tech overal.", "Ongelijkheid bestaat.", "Wel uitdagingen."],
        uitlegPad: {
          stappen: [{ titel: "Klimaat = #1 uitdaging", tekst: "Komende decennia grootste ontwikkelings-uitdaging: klimaatverandering. Treft arme landen MEER dan rijke (zie eerdere check). Droogtes Sahel, overstromingen Bangladesh, zeespiegel-stijging eilandstaten. Migratie-druk: 100+ miljoen klimaat-vluchtelingen verwacht 2050." }],
          woorden: [{ woord: "klimaat-vluchteling", uitleg: "Iemand die thuisland verlaat door klimaatschade (droogte, overstroming, zeespiegel)." }, { woord: "energietransitie", uitleg: "Overschakeling van fossiele brandstoffen (kolen/olie/gas) naar duurzame (zon/wind/water)." }],
          theorie: "Andere uitdagingen: ongelijkheid stijgt binnen landen (1% rijksten heeft groter aandeel sinds 1980). AI-automatisering bedreigt banen. Demografie (vergrijzing Westen, jong Afrika). Pandemierisico's. Geopolitiek (China-VS, Rusland).",
          voorbeelden: [{ type: "context", tekst: "Bangladesh: 1/3 land onder zeespiegel-bedreiging, 165 mln mensen. Sahel: woestijn rukt 50 km/jaar op. Maladiven: gemiddeld 1,5 m boven zeeniveau — kan verdwijnen." }],
          basiskennis: [{ onderwerp: "Niet onzin", uitleg: "Tech alom (smartphones overal). Ongelijkheid bestaat zeker (groeit zelfs). Uitdagingen bestaan absoluut." }],
          niveaus: { basis: "Klimaatverandering. A.", simpeler: "#1 uitdaging = klimaat. Arme landen geraakt door droogte/zeespiegel/storm. = A.", nogSimpeler: "Klimaat = A." },
        },
      },
      {
        q: "Wat is een tip voor jouw **rol als toekomstige burger**?",
        options: ["Levenslang leren + internationaal denken + bewuste keuzes", "Niet stemmen", "Niet werken", "Geen interesse"],
        answer: 0,
        wrongHints: [null, "Stemmen heeft impact.", "Werken levert bijdrage.", "Interesse helpt."],
        uitlegPad: {
          stappen: [{ titel: "3 vaardigheden voor 21e eeuw", tekst: "Voor de wereld van 2030-2080: (1) Levenslang leren — tech verandert te snel voor 1 opleiding-voor-leven. (2) Internationaal denken — problemen overschrijden grenzen (klimaat, AI, pandemie). (3) Bewuste keuzes — als consument, kiezer, professional." }],
          woorden: [{ woord: "levenslang leren", uitleg: "Nooit stoppen met nieuwe kennis opdoen. Nodig in snel veranderende wereld." }, { woord: "wereldburger", uitleg: "Iemand die zich verantwoordelijk voelt voor wereldwijde problemen, niet alleen eigen land." }],
          theorie: "Concrete acties: bewust kopen (Fair Trade), minder vlees, minder vliegen, stemmen op visie-partijen, baan met impact zoeken, doneren aan goede doelen, online leren (Khan Academy/Coursera/YouTube — gratis).",
          voorbeelden: [{ type: "praktisch", tekst: "Vandaag: doe je hand omhoog in klas om vraag. Volgend jaar: blijf nieuwsgierig. 10 jaar: stem op partij met klimaat-visie. 20 jaar: kies werk met betekenis. 30 jaar: leer een nieuwe vaardigheid bij." }],
          basiskennis: [{ onderwerp: "Niet passief", uitleg: "Stemmen = invloed (kies wie regels maakt). Werken = bijdrage (creëert waarde). Interesse = begin van actie." }],
          niveaus: { basis: "Leren+internationaal+bewust. A.", simpeler: "Toekomst-burger: levenslang leren + globaal denken + bewuste keuzes maken. = A.", nogSimpeler: "Doorgaan leren = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeOntwikkelingslanden = {
  id: "pincode-ontwikkelingslanden",
  title: "Ontwikkelingslanden",
  emoji: "🌏",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk 8",
  prerequisites: [
    { id: "pincode-buitenland-eu", title: "Pincode — buitenland + EU", niveau: "vmbo-onderbouw" },
    { id: "pincode-inkomen-welvaart", title: "Pincode — inkomen + welvaart", niveau: "vmbo-onderbouw" },
  ],
  intro:
    "Hoofdstuk 8 van Pincode 7e ed. VMBO-GT 4: rijk vs arm, welvaart vs welzijn, oorzaken armoede, ontwikkelingshulp + Fair Trade, duurzame ontwikkeling + 17 SDG's, microkrediet, en de toekomst. 7 stappen examenvoorbereiding.",
  triggerKeywords: [
    "ontwikkelingsland", "ontwikkelingslanden", "arme landen", "rijke landen",
    "hdi", "human development index", "bbp per hoofd",
    "wereldbank", "imf", "undp", "wto",
    "levensverwachting", "kindersterfte", "extreme armoede",
    "welvaart in ruime zin", "welvaart in enge zin", "welzijn", "geluk",
    "better life index", "world happiness report", "easterlin",
    "vicieuze cirkel", "armoede",
    "kolonisatie", "kolonisatie-erfenis", "corruptie", "schuldenval", "brain drain",
    "zuid-korea", "china", "singapore", "venezuela",
    "ontwikkelingshulp", "bilateraal", "multilateraal", "noodhulp", "structurele hulp",
    "ngo", "oxfam", "artsen zonder grenzen", "unicef", "remittances",
    "fair trade", "max havelaar", "utz", "rainforest alliance", "msc", "gots",
    "duurzame ontwikkeling", "brundtland", "people planet profit",
    "sdg", "sustainable development goals", "millennium goals",
    "microkrediet", "yunus", "grameen bank",
    "klimaat", "klimaatverandering", "loss and damage",
    "leapfrogging", "m-pesa", "khan academy",
    "tweedehands", "vinted", "repair cafe", "right to repair",
    "greenwashing", "flexitariër", "vegan",
    "pincode hoofdstuk 8", "pincode hoofdstuk h",
  ],
  chapters,
  steps,
};

export default pincodeOntwikkelingslanden;
