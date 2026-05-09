// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk 1 (Inkomen en welvaart)
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

const stepEmojis = ["🍞", "🛠️", "💼", "📊", "📈", "🌍", "⚖️"];

const chapters = [
  { letter: "A", title: "Schaarste en productie", emoji: "🍞", from: 0, to: 1 },
  { letter: "B", title: "Inkomen", emoji: "💼", from: 2, to: 3 },
  { letter: "C", title: "Welvaart", emoji: "📈", from: 4, to: 6 },
];

const steps = [
  // ─── Stap 1: Schaarste, behoeften en goederen ─────────────
  {
    title: "Schaarste, behoeften en goederen",
    explanation: "**Economie** gaat over keuzes maken bij **schaarste** — er is altijd meer gewenst dan beschikbaar.\n\n**Behoeften**: dingen die je nodig hebt of wil. Verdeling:\n• **Primaire behoeften**: noodzakelijk om te leven (eten, drinken, onderdak, kleding)\n• **Secundaire behoeften**: aangenaam maar niet noodzakelijk (smartphone, vakantie, sneakers)\n\nWat primair of secundair is, kan **per persoon en tijd verschillen**. Voor jou is een telefoon misschien gevoelsmatig essentieel, voor je opa niet.\n\n**Goederen** vervullen behoeften:\n• **Vrije goederen**: gratis, in overvloed beschikbaar (lucht, zonlicht, zeewater)\n• **Schaarse goederen**: kosten geld of moeite (alles in de winkel)\n• **Consumptiegoederen**: voor direct gebruik door consumenten (brood, kleding)\n• **Kapitaalgoederen**: gebruikt om iets ANDERS te maken (oven van de bakker, vrachtauto)\n\n**Productiefactoren** zijn nodig om iets te maken — komt in volgende stap diepgaand.\n\n**Kies-dwang**: bij schaarste moet je kiezen. **Opportunity cost** = wat je opgeeft door iets anders niet te doen. Voorbeeld: je kiest voor een avond uit (€40) → je kunt die €40 niet sparen voor je rijbewijs.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">SCHAARSTE = KIEZEN</text>
<rect x="40" y="42" width="100" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="90" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">behoeften</text>
<text x="90" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">groot</text>
<text x="155" y="68" text-anchor="middle" fill="${COLORS.warm}" font-size="18" font-family="Arial" font-weight="bold">&gt;</text>
<rect x="170" y="42" width="100" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="220" y="60" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">middelen</text>
<text x="220" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">beperkt</text>
<text x="160" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">→ je moet kiezen</text>
<rect x="20" y="130" width="135" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="148" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">primair</text>
<text x="87" y="163" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">eten · drinken · onderdak</text>
<text x="87" y="174" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">noodzakelijk</text>
<rect x="165" y="130" width="135" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="232" y="148" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">secundair</text>
<text x="232" y="163" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">smartphone · vakantie</text>
<text x="232" y="174" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">aangenaam</text>
</svg>`,
    checks: [
      {
        q: "Een **smartphone** voor een 16-jarige is een ... behoefte.",
        options: ["Secundaire behoefte", "Primaire behoefte", "Vrije behoefte", "Geen behoefte"],
        answer: 0,
        wrongHints: [null, "Primair = nodig om te leven (eten/onderdak).", "'Vrij' is een goederentype, geen behoeftetype.", "Er is wel behoefte — anders zou je hem niet willen."],
      },
      {
        q: "**Lucht** is een voorbeeld van:",
        options: ["Vrij goed", "Schaars goed", "Kapitaalgoed", "Consumptiegoed"],
        answer: 0,
        wrongHints: [null, "Lucht is gratis en in overvloed.", "Kapitaalgoed maakt je iets anders mee.", "Consumptie kan, maar 'vrij' is specifieker."],
      },
      {
        q: "Brood dat je in de winkel koopt om vandaag op te eten:",
        options: ["Consumptiegoed", "Kapitaalgoed", "Vrij goed", "Productiegoed"],
        answer: 0,
        wrongHints: [null, "Kapitaalgoed = waarmee je iets ANDERS maakt.", "Brood kost geld, dus niet vrij.", "Geen standaardterm in Pincode."],
      },
      {
        q: "Wat is **opportunity cost** (offerkost)?",
        options: ["Wat je opgeeft door voor iets anders te kiezen", "De prijs in de winkel", "Belasting over een aankoop", "Wat een ondernemer betaalt voor reclame"],
        answer: 0,
        wrongHints: [null, "Dat is gewoon de prijs.", "Belasting is iets anders.", "Reclamekosten ook iets anders."],
      },
      {
        q: "Wanneer is iets **schaars** in economische zin?",
        options: ["De vraag is groter dan het beschikbare aanbod", "Het is helemaal op", "Het is duur", "Het is mooi"],
        answer: 0,
        wrongHints: [null, "Niet 'op' — er is iets, alleen niet genoeg.", "Duur is een gevolg, geen definitie.", "Schoonheid heeft niets met schaarste te maken."],
      },
      {
        q: "De **oven van een bakker** is een voorbeeld van een:",
        options: ["Kapitaalgoed", "Consumptiegoed", "Vrij goed", "Primaire behoefte"],
        answer: 0,
        wrongHints: [null, "Bakker eet de oven niet zelf op.", "Een oven is niet gratis of in overvloed.", "Een goed is geen behoefte."],
      },
    ],
  },
  // ─── Stap 2: Productiefactoren ─────────────────────────────
  {
    title: "Productiefactoren — wat heb je nodig om te maken?",
    explanation: "Om iets te produceren heb je **vier productiefactoren** nodig:\n\n**1. Arbeid** — werk dat mensen leveren\n• Bij een bakker: het werk van bakker, verkoper, schoonmaker\n• Beloning: **loon** (of voor zelfstandige: arbeidsinkomen)\n\n**2. Natuur** — alles wat de natuur biedt\n• Grond, lucht, water, grondstoffen (graan, hout, olie)\n• Beloning: **pacht** (huur voor grond) of **rente op natuurproducten**\n\n**3. Kapitaal** — geld én apparatuur waarmee je produceert\n• **Vast kapitaal**: gebouwen, machines, vrachtwagens (gaan jaren mee)\n• **Vlottend kapitaal**: voorraden, geld om in te kopen (verbruikt zich)\n• Beloning: **rente** (op geleend geld) of **dividend** (winstuitkering aan aandeelhouders)\n\n**4. Ondernemerschap** — het organiseren, risico nemen\n• Combineert de eerste drie productiefactoren\n• Neemt beslissingen, draagt risico\n• Beloning: **winst** (of verlies)\n\n**Voorbeeld bakker De Korenbloem**:\n• **Arbeid**: 2 bakkers + 1 verkoper\n• **Natuur**: graan, water\n• **Kapitaal**: oven, winkel, bakvormen, voorraad meel\n• **Ondernemerschap**: de bakker zelf, die alles plant\n\n**Beloningsoverzicht** (komt elk examen voor!):\n| Productiefactor | Beloning |\n|---|---|\n| Arbeid | Loon |\n| Natuur | Pacht |\n| Kapitaal | Rente / Dividend |\n| Ondernemerschap | Winst |",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">4 PRODUCTIEFACTOREN</text>
<rect x="20" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="35" y="60" fill="${COLORS.vraag}" font-size="20" font-family="Arial">👷</text>
<text x="60" y="58" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">ARBEID</text>
<text x="60" y="75" fill="${COLORS.text}" font-size="9" font-family="Arial">werk van mensen</text>
<text x="60" y="88" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">→ loon</text>
<rect x="165" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="180" y="60" fill="${COLORS.geld}" font-size="20" font-family="Arial">🌾</text>
<text x="205" y="58" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">NATUUR</text>
<text x="205" y="75" fill="${COLORS.text}" font-size="9" font-family="Arial">grond, grondstof</text>
<text x="205" y="88" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">→ pacht</text>
<rect x="20" y="105" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="35" y="125" fill="${COLORS.warm}" font-size="20" font-family="Arial">🏭</text>
<text x="60" y="123" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">KAPITAAL</text>
<text x="60" y="140" fill="${COLORS.text}" font-size="9" font-family="Arial">geld, machines</text>
<text x="60" y="153" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">→ rente/dividend</text>
<rect x="165" y="105" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="180" y="125" fill="${COLORS.alt}" font-size="20" font-family="Arial">🚀</text>
<text x="205" y="123" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">ONDERNEMER</text>
<text x="205" y="140" fill="${COLORS.text}" font-size="9" font-family="Arial">organiseren, risico</text>
<text x="205" y="153" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">→ winst</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">elke productie heeft alle 4 nodig</text>
<text x="160" y="205" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">kapitaal: vast (gebouw) + vlottend (voorraad)</text>
</svg>`,
    checks: [
      {
        q: "Welke beloning hoort bij **arbeid**?",
        options: ["Loon", "Pacht", "Rente", "Winst"],
        answer: 0,
        wrongHints: [null, "Pacht hoort bij natuur (grond).", "Rente hoort bij kapitaal.", "Winst hoort bij ondernemerschap."],
      },
      {
        q: "Een **vrachtauto** van een transportbedrijf is welke productiefactor?",
        options: ["Kapitaal (vast kapitaal)", "Arbeid", "Natuur", "Ondernemerschap"],
        answer: 0,
        wrongHints: [null, "Arbeid = werk van mensen.", "Natuur = grondstoffen, niet voertuigen.", "Ondernemerschap = beslissingen, niet voertuigen."],
      },
      {
        q: "Een boer **verhuurt land** aan een tomatenkweker en krijgt **€500/mnd**. Hoe heet dit inkomen?",
        options: ["Pacht", "Loon", "Winst", "Rente"],
        answer: 0,
        wrongHints: [null, "Loon = voor arbeid.", "Winst = voor ondernemerschap.", "Rente = voor uitlenen van geld."],
      },
      {
        q: "Wat is **vlottend kapitaal**?",
        options: ["Voorraden en kasgeld die snel vervangen worden", "Een gebouw", "Een vrachtauto", "De bakker zelf"],
        answer: 0,
        wrongHints: [null, "Gebouw = vast kapitaal.", "Vrachtauto = vast kapitaal.", "De ondernemer is geen kapitaal."],
      },
      {
        q: "De ondernemer **draagt risico**. Wat is daarvoor de beloning?",
        options: ["Winst (of verlies)", "Loon", "Pacht", "Niets"],
        answer: 0,
        wrongHints: [null, "Loon = voor arbeid van werknemer.", "Pacht = voor natuur (grond).", "Risico nemen levert in geld iets op (of kost iets)."],
      },
      {
        q: "Welke productiefactor levert een **mijnbouwbedrijf vooral**?",
        options: ["Natuur (grondstoffen)", "Arbeid alleen", "Kapitaal alleen", "Ondernemerschap alleen"],
        answer: 0,
        wrongHints: [null, "Mijnbouw heeft alle 4 nodig — maar de output IS natuur.", "Idem.", "Idem."],
      },
    ],
  },
  // ─── Stap 3: Soorten inkomen ───────────────────────────────
  {
    title: "Soorten inkomen — bruto, netto, primair, secundair",
    explanation: "**Inkomen** = geld dat je ontvangt. Belangrijke termen voor je examen:\n\n**Brutoloon**: wat de werkgever betaalt — vóór belasting en premies.\n**Nettoloon**: wat er op je rekening komt — ná aftrek van loonheffing en sociale premies.\n\n**Voorbeeld**: bruto €2.500 → werkgever houdt €600 in (loonheffing + premies) → netto €1.900.\n\n**Primair inkomen** — verdiend door een productiefactor te leveren:\n• **Loon** (arbeid)\n• **Pacht** (natuur — verhuren van land)\n• **Rente** (kapitaal — geld uitlenen)\n• **Winst** (ondernemerschap)\n\n**Secundair inkomen** — ontvangen ZONDER een productiefactor te leveren:\n• **Uitkeringen** (AOW, bijstand, WW, WIA)\n• **Toeslagen** (huurtoeslag, zorgtoeslag, kinderbijslag, kindgebonden budget)\n• **Studiefinanciering**\n\nSecundair inkomen komt vooral van de overheid en wordt gefinancierd uit belastingen.\n\n**Besteedbaar inkomen** = nettoloon + ontvangen toeslagen − betaalde lasten (bv. huur, hypotheek).\n\n**Voorbeeld huishouden**:\n• Netto loon: €2.000\n• Zorgtoeslag: €100\n• Huurtoeslag: €150\n• Huur: €900\n• → Besteedbaar inkomen: €2.000 + €100 + €150 - €900 = **€1.350**\n\n**Persoonlijk inkomen** vs **gezinsinkomen**:\n• Persoonlijk = van 1 persoon\n• Gezinsinkomen = alle inkomens van gezinsleden samen",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BRUTO → NETTO → BESTEEDBAAR</text>
<rect x="40" y="40" width="240" height="28" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="160" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="13" font-family="Arial" font-weight="bold">BRUTO €2500</text>
<text x="160" y="84" text-anchor="middle" fill="${COLORS.aanbod}" font-size="10" font-family="Arial">− €600 (loonheffing + premies)</text>
<rect x="60" y="92" width="200" height="28" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="160" y="110" text-anchor="middle" fill="${COLORS.geld}" font-size="13" font-family="Arial" font-weight="bold">NETTO €1900</text>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">+ toeslagen (zorg, huur)</text>
<text x="160" y="152" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">− vaste lasten (huur, hypotheek)</text>
<rect x="80" y="160" width="160" height="28" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="160" y="178" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BESTEEDBAAR</text>
</svg>`,
    checks: [
      {
        q: "Iemand verhuurt een appartement en ontvangt **€1200 huur**. Welk soort inkomen is dat?",
        options: ["Primair (uit kapitaal/natuur)", "Secundair", "Brutoloon", "Toeslag"],
        answer: 0,
        wrongHints: [null, "Secundair = zonder productiefactor te leveren.", "Loon = voor arbeid.", "Toeslag krijg je van de overheid."],
      },
      {
        q: "Bij wie hoort de **zorgtoeslag** thuis?",
        options: ["Secundair inkomen", "Primair inkomen", "Loon", "Winst"],
        answer: 0,
        wrongHints: [null, "Toeslag is geen primair inkomen.", "Loon krijg je voor arbeid.", "Winst = voor ondernemers."],
      },
      {
        q: "Brutoloon **€3.000**, loonheffing en premies samen **€750**. Wat is het **nettoloon**?",
        options: ["€2.250", "€3.750", "€2.750", "€2.000"],
        answer: 0,
        wrongHints: [null, "Bij netto haal je inhoudingen ER AF.", "Net niet — alle €750 moet eraf.", "Te veel afgetrokken."],
      },
      {
        q: "Een gezin: netto €2.500, zorgtoeslag €120, huurtoeslag €200, huur €1.000. **Besteedbaar inkomen**?",
        options: ["€1.820", "€2.500", "€3.820", "€820"],
        answer: 0,
        wrongHints: [null, "Vergeet de toeslagen + huur niet.", "Te veel — huur is min.", "Te weinig — toeslagen zijn plus."],
      },
      {
        q: "Wat is een voorbeeld van **primair inkomen**?",
        options: ["Loon van een baan", "AOW-uitkering", "Huurtoeslag", "Studiefinanciering"],
        answer: 0,
        wrongHints: [null, "AOW = secundair (zonder werk).", "Toeslag = secundair.", "Studiefin. = secundair."],
      },
      {
        q: "Wat is het verschil tussen **bruto** en **netto**?",
        options: ["Bruto = vóór inhoudingen, netto = ná inhoudingen", "Hetzelfde", "Bruto is minder dan netto", "Bruto is voor zzp'ers"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Bruto is altijd MEER.", "Geldt voor iedereen."],
      },
    
      {
        q: "🎓 _Echt examen VMBO-GL en TL 2023 tijdvak 1, vraag 4_\n\nDe gemeente Zonhoven wil het gebruik van zonne-energie stimuleren en verleent subsidies op de aanschaf van zonnepanelen door huishoudens. Hoe worden deze subsidies die de huishoudens van de gemeente ontvangen genoemd?",
        options: ["inkomen uit arbeid", "inkomen uit bezit", "inkomen uit overdrachten", "inkomen uit vermogen Volgens de informatiebrochure van de gemeente is er een regeling omtrent asbestdaken en zonnepanelen. De familie De Gaaijer uit Zonhoven wil het oude asbestdak van 300 m2 vervange"],
        answer: 2,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 _Echt examen VMBO-GL en TL 2023 tijdvak 1, vraag 4_",
      },
    ],
  },
  // ─── Stap 4: Inkomensverdeling ───────────────────────────
  {
    title: "Inkomensverdeling — eerlijk of ongelijk?",
    explanation: "Niet iedereen verdient evenveel. **Inkomensverdeling** = hoe inkomen verdeeld is over de bevolking.\n\n**Gemiddelde** vs **mediaan**:\n• Gemiddelde inkomen NL ~€42.000/jaar\n• Mediaan inkomen NL ~€36.000/jaar\nVerschil ontstaat door enkele zeer hoge inkomens (CEO's) die het gemiddelde optrekken. **Mediaan** zegt vaak meer over 'de meeste Nederlanders'.\n\n**Lorenz-curve** — visualiseert ongelijkheid:\n• X-as: % van de bevolking (oplopend van arm naar rijk)\n• Y-as: % van het totale inkomen\n• Bij **perfecte gelijkheid**: rechte diagonaal (10% mensen = 10% inkomen)\n• Bij **ongelijkheid**: curve buigt naar onderen-rechts (10% mensen = 3% inkomen, etc.)\n\nHoe verder de curve van de diagonaal afwijkt → hoe **schevere inkomensverdeling**.\n\n**Gini-coëfficient**:\n• 0 = perfect gelijk\n• 1 = volledig ongelijk (1 persoon heeft alles)\n• Nederland: ~0,28 (relatief gelijk)\n• VS: ~0,40 (ongelijker)\n• Zuid-Afrika: ~0,63 (zeer ongelijk)\n\n**Waarom verdienen mensen verschillend?**\n• Opleiding (hoger opgeleid → hoger loon)\n• Schaarste (verpleegkundige nu schaars → hoger loon)\n• Sector (IT > horeca)\n• Ervaring + leeftijd\n• Verantwoordelijkheid (CEO > administratief medewerker)\n• Geluk + netwerk\n\n**Inkomensverdeling beleid** (door overheid):\n• **Progressieve belasting**: rijken betalen verhoudingsgewijs meer\n• **Toeslagen**: mensen met laag inkomen krijgen meer steun\n• **Minimumloon**: niemand mag onder €X verdienen\n• **AOW**: iedereen krijgt een basis-pensioen",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">LORENZ-CURVE</text>
<line x1="50" y1="40" x2="50" y2="180" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="50" y1="180" x2="280" y2="180" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="30" y="50" fill="${COLORS.text}" font-size="9" font-family="Arial">% inkomen</text>
<text x="240" y="195" fill="${COLORS.text}" font-size="9" font-family="Arial">% bevolking</text>
<line x1="50" y1="180" x2="280" y2="40" stroke="${COLORS.geld}" stroke-width="2" stroke-dasharray="3 2"/>
<text x="270" y="50" fill="${COLORS.geld}" font-size="9" font-family="Arial">gelijk</text>
<path d="M 50,180 Q 130,170 170,150 T 280,40" fill="none" stroke="${COLORS.aanbod}" stroke-width="2.5"/>
<text x="200" y="155" fill="${COLORS.aanbod}" font-size="10" font-family="Arial" font-weight="bold">werkelijk</text>
<text x="160" y="208" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Gini = 0 (gelijk) → 1 (ongelijk). NL ~0,28</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **mediaan**-inkomen?",
        options: ["Het middelste inkomen — helft verdient meer, helft minder", "Het hoogste inkomen", "Gemiddelde inkomen", "Minimumloon"],
        answer: 0,
        wrongHints: [null, "Mediaan = midden, niet hoogste.", "Gemiddelde wordt door extremen vertekend.", "Minimum is wettelijke ondergrens."],
      },
      {
        q: "Een **Lorenz-curve** dichtbij de diagonaal betekent:",
        options: ["Inkomens zijn relatief gelijk verdeeld", "Inkomens zijn zeer ongelijk", "Niemand verdient iets", "Alle inkomens zijn gelijk"],
        answer: 0,
        wrongHints: [null, "Hoe schever, hoe ongelijker.", "Gemiddeld is wel positief.", "Op de diagonaal = perfect gelijk; dichtbij = bijna gelijk."],
      },
      {
        q: "Een land heeft **Gini = 0,55**. Wat zegt dat?",
        options: ["Aanzienlijke ongelijkheid", "Perfect gelijk", "Iedereen heeft hetzelfde", "Geen mensen meer"],
        answer: 0,
        wrongHints: [null, "Gini 0 = perfect gelijk.", "Tegenovergesteld.", "Onzin-antwoord."],
      },
      {
        q: "Welke maatregel **vermindert inkomensongelijkheid**?",
        options: ["Progressieve belasting + toeslagen voor lage inkomens", "Belasting verlagen voor rijken", "Minimumloon afschaffen", "Geen toeslagen meer"],
        answer: 0,
        wrongHints: [null, "Vergroot ongelijkheid.", "Vergroot ongelijkheid.", "Vergroot ongelijkheid."],
      },
      {
        q: "Waarom verdient een **arts** vaak meer dan een **verkoper**?",
        options: ["Schaarste van vaardigheden + lange opleiding", "Toeval", "Artsen werken minder", "Verkopers willen niet meer"],
        answer: 0,
        wrongHints: [null, "Niet toeval — markt-mechanisme.", "Vaak juist meer uren.", "Loon wordt door markt + werkgever bepaald."],
      },
      {
        q: "Wat is het verschil tussen **gemiddelde** en **mediane** inkomen?",
        options: ["Gemiddelde wordt door enkele extremen omhoog getrokken", "Geen verschil", "Mediaan is altijd hoger", "Gemiddelde is voor mannen, mediaan voor vrouwen"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Gemiddelde is meestal hoger.", "Geen geslacht-onderscheid."],
      },
    
      {
        q: "🎓 _Echt examen VMBO-GL en TL 2025 tijdvak 2, vraag 39_\n\nWat wordt bedoelt met het begrip modaal inkomen?",
        options: ["Het afgesproken minimum inkomen als je werkt in loondienst.", "Het gemiddelde inkomen in Nederland.", "Het inkomen dat in Nederland het meeste voorkomt.", "Het netto inkomen dat je verdient als je werkt in loondienst. Jan en zijn gezin stonden symbool voor de `gewone burger'. Veel burgers konden zich hierin herkennen en begrepen de informatie daardoor be"],
        answer: 2,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 _Echt examen VMBO-GL en TL 2025 tijdvak 2, vraag 39_",
      },
    ],
  },
  // ─── Stap 5: Welvaart, inflatie en koopkracht ─────────────
  {
    title: "Welvaart, inflatie en koopkracht",
    explanation: "**Welvaart** = in hoeverre kun je behoeften vervullen.\n• **Welvaart in enge zin**: alleen materiële zaken (geld, spullen)\n• **Welvaart in ruime zin**: ook gezondheid, milieu, vrije tijd, veiligheid, geluk\n\n**Inflatie** = prijzen stijgen gemiddeld. Het CBS meet dit met de **Consumentenprijsindex (CPI)**:\n• 2023 = basisjaar → CPI = 100\n• 2024: CPI = 104 → 4% inflatie\n• 2025: CPI = 108 → 8% sinds basisjaar\n\n**Koopkracht** = hoeveel je kunt kopen voor je inkomen.\n• Loon stijgt 2%, prijzen stijgen 4% → koopkracht **daalt** ~2%\n• Loon stijgt 5%, prijzen stijgen 2% → koopkracht **stijgt** ~3%\n\n**Reële vs nominale loonstijging**:\n• Nominaal = wat in euro's op je strookje verandert (bv. +3%)\n• Reëel = je echte koopkracht (bv. nominaal +3% min inflatie 2% = +1% reëel)\n\n**Voorbeelden CPI per consumptiepost**:\n• Energie steeg in 2022 met +50% → grote impact op huishoudens\n• Voedsel: ~10% in 2023\n• Diensten (kapper, restaurant): ~5%/jaar gemiddeld\n\n**Waarom inflatie?**\n• Energieprijzen (gas, olie) stijgen\n• Te veel geld in omloop\n• Krapte arbeidsmarkt → hogere lonen → hogere prijzen\n• Verstoring aanbod (oorlog, pandemie)\n\n**Deflatie** = prijzen dalen. Klinkt goed, maar mensen stellen aankopen uit (wachten tot het goedkoper is) → economie krimpt.\n\n**ECB-doel**: inflatie ~2% per jaar (gezond niveau).",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">PRIJS BROOD DOOR DE TIJD</text>
<rect x="50" y="40" width="40" height="100" fill="${COLORS.geld}" opacity="0.5"/>
<text x="70" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2010</text>
<text x="70" y="170" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">€1,50</text>
<rect x="120" y="55" width="40" height="85" fill="${COLORS.warm}" opacity="0.5"/>
<text x="140" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2018</text>
<text x="140" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">€2,00</text>
<rect x="190" y="65" width="40" height="75" fill="${COLORS.oranje}" opacity="0.5"/>
<text x="210" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2023</text>
<text x="210" y="170" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial" font-weight="bold">€2,50</text>
<rect x="260" y="55" width="40" height="85" fill="${COLORS.aanbod}" opacity="0.6"/>
<text x="280" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2026</text>
<text x="280" y="170" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">€2,80</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">+87% in 16 jaar = inflatie</text>
</svg>`,
    checks: [
      {
        q: "Je inkomen stijgt **3%**, prijzen stijgen **5%**. Wat gebeurt met je koopkracht?",
        options: ["Daalt met ongeveer 2%", "Stijgt met 3%", "Stijgt met 8%", "Blijft gelijk"],
        answer: 0,
        wrongHints: [null, "Loon wel hoger, maar prijzen sneller.", "Niet optellen.", "Alleen gelijk als beide percentages gelijk zijn."],
      },
      {
        q: "Wat meet het **CPI**?",
        options: ["De gemiddelde prijsstijging van consumentengoederen", "De koopkracht per persoon", "Het totaal inkomen in NL", "Werkloosheidscijfer"],
        answer: 0,
        wrongHints: [null, "Koopkracht volgt UIT CPI.", "Dat is BBP.", "Werkloosheid is iets anders."],
      },
      {
        q: "**CPI 2025 = 108** (basis 2023 = 100). Hoeveel zijn de prijzen gestegen sinds 2023?",
        options: ["8%", "108%", "0,8%", "1,08%"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te klein.", "Dat is de factor (1,08), niet het percentage."],
      },
      {
        q: "Wat is **welvaart in ruime zin**?",
        options: ["Inkomen + gezondheid + milieu + vrije tijd", "Alleen inkomen", "Alleen gezondheid", "Alleen vakantiedagen"],
        answer: 0,
        wrongHints: [null, "Inkomen alleen = enge zin.", "Gezondheid is onderdeel.", "Vrije tijd is onderdeel."],
      },
      {
        q: "Wat is **deflatie**?",
        options: ["Prijzen dalen gemiddeld", "Prijzen stijgen", "Lonen dalen", "Geen prijsverandering"],
        answer: 0,
        wrongHints: [null, "Dat is inflatie.", "Lonen ≠ prijzen.", "Dan zou inflatie 0 zijn."],
      },
      {
        q: "Wat is het verschil tussen **nominale** en **reële** loonstijging?",
        options: ["Reëel = nominale stijging min inflatie (echte koopkracht)", "Geen verschil", "Nominaal is altijd hoger dan reëel", "Reëel is voor mannen"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Nominaal kan ook lager zijn (bij hoge inflatie).", "Geen geslacht-onderscheid."],
      },
    
      {
        q: "🎓 _Echt examen VMBO-GL en TL 2023 tijdvak 2, vraag 26_\n\nInflatie kan ook gevolgen hebben voor de koopkracht van de familie Sitalsing. In welke situatie zal de koopkracht van de familie Sitalsing stijgen ten opzichte van het vorige jaar?",
        options: ["als de nominale loondaling in procenten hoger is dan de inflatie", "als de nominale loonstijging in procenten hoger is dan de inflatie", "als de nominale loonstijging in procenten lager is dan de inflatie"],
        answer: 1,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 _Echt examen VMBO-GL en TL 2023 tijdvak 2, vraag 26_",
      },
    
      {
        q: "🎓 _Echt examen VMBO-GL en TL 2025 tijdvak 1, vraag 2_\n\nDe welvaart van een land kan worden gemeten door het nationaal inkomen te berekenen. Waarmee moet je rekening houden als je het re'le nationale inkomen berekent?",
        options: ["de belastingen", "de inkomensverdeling", "de veranderde prijzen", "zelfvoorziening Gebruik informatiebron 1."],
        answer: 2,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 _Echt examen VMBO-GL en TL 2025 tijdvak 1, vraag 2_",
      },
    
      {
        q: "🎓 _Echt examen VMBO-GL en TL 2025 tijdvak 2, vraag 43_\n\nHet modale inkomen wordt nog vaak gebruikt om de koopkracht te onderzoeken. Waar moet rekening mee gehouden worden bij het bepalen van de koopkracht?",
        options: ["De inflatie van het land.", "De inkomensverdeling in het land.", "De oppervlakte van het land.", "Het aantal inwoners in het land."],
        answer: 0,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 _Echt examen VMBO-GL en TL 2025 tijdvak 2, vraag 43_",
      },
    ],
  },
  // ─── Stap 6: BBP en welvaart vs welzijn ─────────────────
  {
    title: "BBP — meet welvaart, niet welzijn",
    explanation: "**BBP (Bruto Binnenlands Product)** = totale waarde van alles wat in een jaar in Nederland wordt geproduceerd.\n\nNL BBP ~€1.000 miljard/jaar.\n\nBBP is dé maatstaf voor **economische welvaart**.\n\n**BBP per hoofd** = BBP / aantal inwoners.\nNL: ~€56.000 per persoon.\nMonaco: ~€200.000 per persoon (extreem hoog).\nEthiopië: ~€1.000 per persoon.\n\n**Hoe wordt BBP gemeten?** Drie kanten — geven hetzelfde antwoord:\n• **Productie**: alle toegevoegde waarde\n• **Inkomen**: alle lonen, winsten, rentes\n• **Bestedingen**: consumptie + investeringen + overheid + (export-import)\n\n**Beperkingen van BBP**:\n• ✗ **Vrijwilligerswerk** telt niet mee (geen geldstroom)\n• ✗ **Huishoudwerk** telt niet (oma die op kleinkinderen past)\n• ✗ **Zwart geld** telt niet (informele economie)\n• ✗ **Milieuschade** telt niet (vervuiling = geen aftrek)\n• ✗ **Geluk en gezondheid** komen er niet in voor\n\n**Welvaart vs welzijn**:\n• **Welvaart** = materieel, in geld uitdrukbaar (wat BBP meet)\n• **Welzijn** = bredere kwaliteit van leven (hoe je je voelt)\n\n**Alternatieve indices**:\n• **HDI** (Human Development Index): inkomen + onderwijs + levensverwachting\n• **Better Life Index** (OESO): 11 dimensies, ook werk-privé balans\n• **Gross National Happiness** (Bhutan): geluk-meting\n\n**Voorbeeld 2 landen vergelijken**:\n• Land A: BBP/hoofd €40.000, levensverwachting 75, gelukscore 6/10\n• Land B: BBP/hoofd €30.000, levensverwachting 82, gelukscore 8/10\n→ Land A 'rijker', maar B heeft mogelijk meer **welzijn**.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">WAT MEET BBP?</text>
<rect x="20" y="40" width="280" height="32" rx="6" fill="rgba(105,240,174,0.15)" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="160" y="59" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">✓ WAT BBP MEET</text>
<text x="160" y="69" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">betaalde productie · loon · winst · belasting</text>
<rect x="20" y="80" width="280" height="65" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="160" y="98" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">✗ WAT BBP NIET MEET</text>
<text x="160" y="113" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vrijwilligerswerk · huishoudwerk · zwart geld</text>
<text x="160" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">milieuschade · geluk · gezondheid</text>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">→ welvaart ≠ welzijn</text>
<text x="160" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">Alternatief: HDI, Better Life Index</text>
</svg>`,
    checks: [
      {
        q: "Wat is **BBP** in eenvoudige bewoording?",
        options: ["Totale waarde van alle productie in NL in 1 jaar", "Belasting per Nederlander", "Bijbaan + Pensioen Beleid", "Brutoloon van iedereen samen"],
        answer: 0,
        wrongHints: [null, "Geen belasting-term.", "Geen Nederlandse term.", "Bruto loon is een onderdeel, maar BBP omvat ook winst, belasting, etc."],
      },
      {
        q: "Wat telt **NIET mee** in het BBP?",
        options: ["Vrijwilligerswerk in een buurthuis", "Loon van een leraar", "Huur van een woning", "Verkoop van een auto"],
        answer: 0,
        wrongHints: [null, "Loon = inkomen, telt mee.", "Huur = vermogensinkomen, telt mee.", "Verkoop = transactie, telt mee."],
      },
      {
        q: "**BBP per hoofd** vergelijkt:",
        options: ["Welvaart tussen landen (totaal BBP / aantal inwoners)", "Inkomen van rijken", "Belasting per persoon", "Aantal banen per persoon"],
        answer: 0,
        wrongHints: [null, "Niet specifiek rijken.", "Niet belasting.", "Geen banen-cijfer."],
      },
      {
        q: "Wat is het verschil tussen **welvaart en welzijn**?",
        options: ["Welvaart = materieel, welzijn = bredere kwaliteit van leven", "Geen verschil", "Welvaart is voor rijken", "Welzijn is alleen gezondheid"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Welvaart geldt voor iedereen.", "Welzijn is breder."],
      },
      {
        q: "Wat meet de **HDI**?",
        options: ["Inkomen + onderwijs + levensverwachting", "Alleen BBP", "Aantal toeristen", "Hoeveel auto's er rijden"],
        answer: 0,
        wrongHints: [null, "BBP is enkel inkomen — HDI breder.", "Toerisme is aparte indicator.", "Niet HDI."],
      },
      {
        q: "Een land heeft **hoog BBP** maar veel milieuvervuiling. Wat zegt dat?",
        options: ["Welvaart is hoog, maar welzijn lager dan BBP suggereert", "Welzijn is automatisch hoog", "Het BBP is fout gemeten", "Milieu telt niet voor welvaart"],
        answer: 0,
        wrongHints: [null, "Hoog BBP geeft niet automatisch welzijn.", "BBP-meting is consistent — welzijn is breder.", "Milieu telt wel voor welzijn, niet voor BBP."],
      },
    ],
  },
  // ─── Stap 7: Inkomensbeleid ──────────────────────────────
  {
    title: "Inkomensbeleid — minimumloon, toeslagen, AOW",
    explanation: "De overheid grijpt in om inkomens **rechtvaardiger** te verdelen. Dit heet **inkomensbeleid**.\n\n**Minimumloon** (per 2026 ~€1.900/mnd bruto voor 21+):\n• Wettelijk laagste loon\n• Voorkomt dat werkgevers extreem lage lonen betalen\n• Geldt vanaf 21 jaar; lager voor jongeren (jeugd-minimumloon)\n\n**Toeslagen** (Belastingdienst):\n• **Zorgtoeslag**: voor zorgverzekeringspremie als inkomen laag is\n• **Huurtoeslag**: bij sociale huurwoning + laag inkomen\n• **Kinderopvangtoeslag**: voor crèche-kosten\n• **Kindgebonden budget**: extra geld voor kinderen\n• **Kinderbijslag**: vast bedrag per kind, ongeacht inkomen\n\n**Uitkeringen** (UWV/gemeente):\n• **AOW**: vanaf pensioenleeftijd (~67), basis-pensioen voor iedereen die in NL gewoond heeft\n• **WW** (Werkloosheidswet): tijdelijk, na ontslag, ~70% van laatste loon\n• **WIA/WGA**: bij arbeidsongeschiktheid\n• **Bijstand**: vangnet als je geen ander inkomen hebt\n\n**Pensioen — 3 pijlers**:\n1. **AOW** (overheid) — basis voor iedereen\n2. **Aanvullend pensioen** (werkgever) — opgebouwd via pensioenfonds tijdens werk\n3. **Eigen pensioenpotje** (zelf sparen, lijfrente)\n\n**Progressieve belasting** als inkomensherverdeler:\n• Lager inkomen → lager percentage belasting\n• Hoger inkomen → hoger percentage\n• → Verschil tussen rijk en arm wordt kleiner\n\n**Effect inkomensbeleid**:\n• NL heeft een van de **meest gelijke inkomensverdelingen** ter wereld (Gini ~0,28)\n• Mede dankzij sterk uitkeringssysteem en progressieve belasting\n• Tradeoff: hogere belasting = minder netto voor wie veel verdient",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">INKOMENSBELEID</text>
<rect x="20" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">MINIMUMLOON</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">~€1900 bruto/mnd</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">vanaf 21 jaar</text>
<rect x="165" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">TOESLAGEN</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">zorg · huur · kinderopvang</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">inkomensafhankelijk</text>
<rect x="20" y="105" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="123" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">UITKERINGEN</text>
<text x="87" y="139" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">AOW · WW · bijstand</text>
<text x="87" y="151" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">UWV / gemeente</text>
<rect x="165" y="105" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="232" y="123" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">PENSIOEN 3 PIJLERS</text>
<text x="232" y="139" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">AOW · werkgever · eigen</text>
<text x="232" y="151" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">na ~67 jaar</text>
<text x="160" y="195" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">+ progressieve belasting</text>
<text x="160" y="208" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">NL: relatief gelijke verdeling, Gini ~0,28</text>
</svg>`,
    checks: [
      {
        q: "Wat is **minimumloon**?",
        options: ["Wettelijk vastgelegd laagste loon dat werkgevers mogen betalen", "Het gemiddelde loon", "Loon van een directeur", "Pensioen-basisbedrag"],
        answer: 0,
        wrongHints: [null, "Gemiddelde is veel hoger.", "Directeur = hoog loon.", "Pensioen is iets anders (AOW)."],
      },
      {
        q: "Wie krijgt **AOW**?",
        options: ["Iedereen vanaf pensioenleeftijd (~67) die in NL heeft gewoond", "Alleen mensen die werken", "Alleen ondernemers", "Alleen wie geen vermogen heeft"],
        answer: 0,
        wrongHints: [null, "Niet vereiste werk-status.", "AOW geldt voor iedereen.", "Vermogen geen vereiste."],
      },
      {
        q: "Welke toeslag krijg je bij **huur in een sociale woning + laag inkomen**?",
        options: ["Huurtoeslag", "Zorgtoeslag", "Kinderbijslag", "Geen toeslag"],
        answer: 0,
        wrongHints: [null, "Zorgtoeslag is voor zorgkosten.", "Kinderbijslag is voor kinderen.", "Wel toeslag mogelijk."],
      },
      {
        q: "Wat zijn de **3 pijlers van pensioen**?",
        options: ["AOW + werkgevers-pensioen + eigen pensioenpotje", "Brutoloon, nettoloon, vakantiegeld", "Belasting, premie, toeslag", "Werk, vrije tijd, slaap"],
        answer: 0,
        wrongHints: [null, "Geen pensioen-componenten.", "Geen pensioen-componenten.", "Geen economische termen."],
      },
      {
        q: "Een student verliest haar bijbaan en heeft geen ander inkomen. Welke uitkering?",
        options: ["Bijstand (vangnet via gemeente)", "AOW", "WW (werkloosheidswet)", "WIA"],
        answer: 0,
        wrongHints: [null, "AOW pas vanaf 67.", "WW vereist eerder werkverleden + minimum aantal weken.", "WIA = arbeidsongeschiktheid."],
      },
      {
        q: "Hoe maakt **progressieve belasting** inkomens gelijker?",
        options: ["Hoger inkomen → hoger percentage belasting → minder verschil netto", "Iedereen betaalt hetzelfde", "Lagere inkomens betalen meer", "Geen invloed"],
        answer: 0,
        wrongHints: [null, "Dat is vlaktaks.", "Tegenovergesteld.", "Wel grote invloed."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeInkomenWelvaart = {
  id: "pincode-inkomen-welvaart",
  title: "Inkomen en welvaart",
  emoji: "🍞",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk 1",
  intro:
    "Hoofdstuk 1 van Pincode 7e ed. VMBO-GT 4: schaarste, productiefactoren, inkomen, inkomensverdeling, welvaart/inflatie, BBP, en inkomensbeleid (minimumloon/toeslagen/AOW). 7 stappen examenvoorbereiding.",
  triggerKeywords: [
    "inkomen", "welvaart", "schaarste", "behoeften", "primaire behoefte", "secundaire behoefte",
    "vrije goederen", "schaarse goederen", "consumptiegoederen", "kapitaalgoederen",
    "productiefactoren", "arbeid", "natuur", "kapitaal", "ondernemerschap", "vast kapitaal", "vlottend kapitaal",
    "loon", "pacht", "rente", "winst", "dividend",
    "bruto", "netto", "primair inkomen", "secundair inkomen", "besteedbaar inkomen",
    "lorenz", "gini", "mediaan", "inkomensverdeling", "ongelijkheid",
    "inflatie", "koopkracht", "cpi", "consumentenprijsindex", "deflatie", "reëel loon", "nominaal loon",
    "bbp", "bruto binnenlands product", "welzijn", "hdi", "better life",
    "minimumloon", "aow", "ww", "bijstand", "wia",
    "toeslag", "zorgtoeslag", "huurtoeslag", "kinderbijslag", "kindgebonden budget",
    "pensioen", "pensioenfonds", "lijfrente",
    "progressieve belasting", "vlaktaks", "inkomensbeleid",
    "pincode hoofdstuk 1", "pincode hoofdstuk a",
  ],
  chapters,
  steps,
};

export default pincodeInkomenWelvaart;
