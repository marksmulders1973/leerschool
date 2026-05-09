// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk 2 (Geld genoeg?)
// Uitgebreide versie 2026-05-09: 7 stappen voor compleet examen-blok.
// Concrete voorbeelden uit de leefwereld van een 15-16-jarige.

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

const stepEmojis = ["💰", "💳", "🏦", "📈", "🔄", "📉", "📊", "💸", "🏠"];

const chapters = [
  { letter: "A", title: "Wat is geld?", emoji: "💰", from: 0, to: 1 },
  { letter: "B", title: "Sparen of beleggen?", emoji: "🏦", from: 2, to: 3 },
  { letter: "C", title: "Geld rolt + inflatie + begroten", emoji: "🔄", from: 4, to: 6 },
  { letter: "D", title: "Lenen", emoji: "💸", from: 7, to: 8 },
];

const steps = [
  // ─── Stap 1: Functies en soorten geld ──────────────────────
  {
    title: "Wat is geld eigenlijk?",
    explanation: "Vroeger ruilden mensen direct (**ruilhandel**): jij geeft een schaap, ik geef brood. Nadelen: misschien wil de bakker geen schaap, en hoeveel brood is een schaap waard?\n\nGeld lost dit op. Het heeft **drie functies**:\n\n**1. Ruilmiddel**: je betaalt met geld, geen ingewikkelde ruil meer.\n**2. Rekenmiddel**: alles heeft een prijs in euro's, dus je kunt makkelijk vergelijken (€20 vs €15).\n**3. Spaarmiddel (oppotmiddel)**: je kunt geld bewaren voor later — een schaap zou doodgaan, geld niet.\n\n**Soorten geld**:\n• **Chartaal geld**: munten en bankbiljetten — geld dat je kunt vasthouden.\n• **Giraal geld**: tegoed op een rekening — bijna alle betalingen tegenwoordig (pinnen, overschrijven, Tikkie).\n\n**Eigenschappen van goed geld**:\n• Algemeen geaccepteerd (iedereen wil het aannemen)\n• Schaars (anders wordt het niets waard)\n• Duurzaam (gaat niet snel kapot)\n• Deelbaar (kun je in stukken verdelen — €1 is 100 cent)",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">3 FUNCTIES VAN GELD</text>
<rect x="20" y="40" width="90" height="68" rx="8" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="65" y="68" text-anchor="middle" fill="${COLORS.geld}" font-size="22" font-family="Arial">💱</text>
<text x="65" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">ruilmiddel</text>
<text x="65" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">betalen</text>
<rect x="115" y="40" width="90" height="68" rx="8" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="160" y="68" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial">🧮</text>
<text x="160" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">rekenmiddel</text>
<text x="160" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">vergelijken</text>
<rect x="210" y="40" width="90" height="68" rx="8" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="255" y="68" text-anchor="middle" fill="${COLORS.vraag}" font-size="22" font-family="Arial">🐷</text>
<text x="255" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">spaarmiddel</text>
<text x="255" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">bewaren</text>
<text x="160" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Soorten:</text>
<text x="100" y="155" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">CHARTAAL</text>
<text x="100" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">munten + biljetten</text>
<text x="220" y="155" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">GIRAAL</text>
<text x="220" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">op de rekening</text>
</svg>`,
    checks: [
      {
        q: "Je vergelijkt een nieuwe sneaker van €110 met een ander paar van €85. Welke functie van geld gebruik je hier?",
        options: ["Rekenmiddel", "Ruilmiddel", "Spaarmiddel", "Productiemiddel"],
        answer: 0,
        wrongHints: [null, "Ruilen doe je bij de kassa, niet bij vergelijken.", "Sparen = bewaren voor later.", "Productiemiddel is geen geldfunctie."],
      },
      {
        q: "Wat is **giraal geld**?",
        options: ["Geld op je bankrekening", "Munten en biljetten", "Goud", "Een lening"],
        answer: 0,
        wrongHints: [null, "Dat is chartaal.", "Goud is een waardeobject, geen modern geld.", "Een lening is een product, geen soort geld."],
      },
      {
        q: "Waarom is **ruilhandel** lastig?",
        options: ["Je moet iemand vinden die jouw spullen wil EN heeft wat jij wilt", "Het is verboden", "Spullen zijn duur", "Internet is nodig"],
        answer: 0,
        wrongHints: [null, "Niet verboden, alleen onhandig.", "Prijs heeft niets met ruilen te maken.", "Ruilhandel was er ver vóór internet."],
      },
      {
        q: "Welke eigenschap moet **goed geld** zeker hebben?",
        options: ["Algemeen geaccepteerd zijn", "Heel mooi zijn", "Goud bevatten", "Door één persoon gemaakt zijn"],
        answer: 0,
        wrongHints: [null, "Uiterlijk maakt geld niet bruikbaar als betaalmiddel.", "Vroeger wel, nu niet meer (chartaal geld is fiat).", "Tegenovergesteld — moet door iedereen geaccepteerd."],
      },
      {
        q: "Een Tikkie is een voorbeeld van **welk type geld**?",
        options: ["Giraal", "Chartaal", "Ruilhandel", "Spaargeld"],
        answer: 0,
        wrongHints: [null, "Chartaal = munten/biljetten, Tikkie is digitaal.", "Tikkie is geen ruilhandel — gewoon een betaling.", "Spaargeld is een doel, geen vorm."],
      },
    ],
  },
  // ─── Stap 2: Betaalmiddelen anno nu ──────────────────────────
  {
    title: "Hoe betaal je in 2026? Pin, contactloos en achteraf",
    explanation: "**Pinnen**: kaart in apparaat, pincode invoeren — geld gaat direct van jouw rekening af.\n**Contactloos**: kaart of telefoon (Apple Pay, Google Pay) tegen het apparaat. Onder €50 meestal zonder pincode.\n**Creditcard**: je betaalt nu, geld wordt 1 keer per maand van je rekening gehaald. **Risico**: je kunt makkelijk meer uitgeven dan je hebt.\n**Achteraf betalen (Klarna, Afterpay, in3)**: nu kopen, later betalen. **Lijkt gratis**, maar als je te laat betaalt komen er hoge boetes en kosten bij. Veel jongeren komen zo in de schulden.\n\n**Voor- en nadelen**:\n• **Pin**: veilig, direct, geen extra kosten\n• **Contactloos**: snel, maar makkelijk per ongeluk te dubbel-tikken\n• **Creditcard**: handig in buitenland/online, maar zonder controle gevaarlijk\n• **Achteraf**: lijkt gratis maar vaak schuld-instinker\n\n**Belangrijk voor jou**: alles wat je 'achteraf' betaalt is een lening. Stel jezelf altijd de vraag: **kan ik dit nu betalen?** Zo niet → niet kopen.",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BETAALMIDDELEN</text>
<rect x="20" y="40" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="35" y="60" fill="${COLORS.geld}" font-size="16" font-family="Arial">📲</text>
<text x="60" y="58" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">CONTACTLOOS</text>
<text x="60" y="73" fill="${COLORS.text}" font-size="9" font-family="Arial">snel, &lt;€50 vrij</text>
<rect x="165" y="40" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="180" y="60" fill="${COLORS.vraag}" font-size="16" font-family="Arial">💳</text>
<text x="205" y="58" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">PIN</text>
<text x="205" y="73" fill="${COLORS.text}" font-size="9" font-family="Arial">veilig, direct</text>
<rect x="20" y="90" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="35" y="110" fill="${COLORS.oranje}" font-size="16" font-family="Arial">💰</text>
<text x="60" y="108" fill="${COLORS.oranje}" font-size="11" font-family="Arial" font-weight="bold">CREDITCARD</text>
<text x="60" y="123" fill="${COLORS.text}" font-size="9" font-family="Arial">1x/maand afgeschr.</text>
<rect x="165" y="90" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="180" y="110" fill="${COLORS.rood}" font-size="16" font-family="Arial">⚠️</text>
<text x="205" y="108" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">ACHTERAF</text>
<text x="205" y="123" fill="${COLORS.text}" font-size="9" font-family="Arial">Klarna, Afterpay</text>
<rect x="20" y="148" width="280" height="55" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.rood}" stroke-width="1.2" stroke-dasharray="4 3"/>
<text x="160" y="167" text-anchor="middle" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">⚠ ACHTERAF = LENING</text>
<text x="160" y="183" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Vraag jezelf altijd: kan ik dit NU betalen?</text>
<text x="160" y="197" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Zo niet → niet kopen.</text>
</svg>`,
    checks: [
      {
        q: "Je koopt een hoodie van €60 via **Klarna 'achteraf betalen'**. Wat gebeurt er economisch gezien?",
        options: ["Je hebt een lening van €60 die je over 14-30 dagen moet terugbetalen", "Je krijgt korting", "Je hoeft nooit meer te betalen", "Klarna betaalt het voor je als cadeau"],
        answer: 0,
        wrongHints: [null, "Korting krijg je niet — alleen uitstel.", "Niet betalen = boete, deurwaarder, BKR-registratie.", "Klarna verdient eraan, dat is geen cadeau."],
      },
      {
        q: "Welke betaalwijze is **direct** geld van je rekening af?",
        options: ["Pinnen", "Creditcard", "Achteraf betalen", "Geen van deze"],
        answer: 0,
        wrongHints: [null, "Creditcard wordt pas later afgeschreven.", "Achteraf is letterlijk later betalen.", "Pinnen is meteen — controleer je app."],
      },
      {
        q: "Waarom is contactloos onder €50 'gevaarlijker' dan pinnen?",
        options: ["Geen pincode nodig — bij verlies kan iemand makkelijk uitgeven", "Het werkt niet altijd", "Het is duurder", "Je bent verplicht extra fooi te geven"],
        answer: 0,
        wrongHints: [null, "Werkt juist heel betrouwbaar.", "Zelfde prijs als pinnen.", "Fooi is geen onderdeel van de betaling."],
      },
      {
        q: "Wanneer kun je een creditcard echt nuttig vinden?",
        options: ["Online of in het buitenland — extra zekerheid en aankoop-bescherming", "Voor dagelijkse boodschappen want het is veiliger", "Als je geen pinpas hebt", "Om gratis geld te krijgen"],
        answer: 0,
        wrongHints: [null, "Voor dagelijks gebruik is pin veiliger en goedkoper.", "Iedereen heeft wel een pinpas via je bank.", "Creditcard geeft GEEN gratis geld — je betaalt het terug."],
      },
      {
        q: "Marie ziet een €200 jas en denkt: 'oh, met Klarna betaal ik pas later.' Wat is het beste financiële advies?",
        options: ["Vraag jezelf af: kan ik €200 nu missen? Zo niet, niet kopen.", "Altijd Klarna gebruiken want het is gratis", "Drie keer Klarna nemen, dan is het pas €600 over een jaar", "Het maakt niet uit, alles loopt los"],
        answer: 0,
        wrongHints: [null, "Klarna lijkt gratis maar als je te laat bent komen er kosten bij.", "Drie leningen tegelijk = drie keer schuld + drie keer risico.", "Zo komen veel jongeren in de schulden."],
      },
    ],
  },
  // ─── Stap 3: Banken — sparen en rente ─────────────────────────
  {
    title: "Sparen en rente — laat je geld werken",
    explanation: "**Banken** doen drie dingen:\n1. **Geld bewaren** (betaal- en spaarrekening)\n2. **Geld lenen** (hypotheek, persoonlijke lening)\n3. **Betalingen regelen** (overschrijvingen, pinnen)\n\n**Sparen**: je geeft de bank tijdelijk je geld. De bank betaalt je **rente** als beloning, omdat zij het geld weer kan uitlenen aan anderen.\n\n**Voorbeeld**: je zet €1000 op een spaarrekening met 2% rente per jaar.\n• Na 1 jaar: €1000 × 1,02 = **€1020** (€20 rente)\n• Na 2 jaar: €1020 × 1,02 = **€1040,40** (€20,40 rente)\n• Na 5 jaar: ongeveer **€1104**\n\nDe rente over rente heet **samengestelde rente** — het wordt elk jaar groter. Je 'verdient over je verdiensten'.\n\n**Reden om te sparen**:\n• **Buffer** voor onverwachte uitgaven (telefoon stuk, fiets gestolen)\n• **Doel**: rijbewijs (~€2.500), reis (~€1.500), eerste auto, uit huis\n• **Pensioen** later in je leven\n\n**Spaarrekening** vs **betaalrekening**:\n• Betaalrekening: dagelijkse uitgaven, vaak geen rente\n• Spaarrekening: opzij zetten, beetje rente",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">SAMENGESTELDE RENTE</text>
<line x1="40" y1="40" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="290" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="20" y="50" fill="${COLORS.text}" font-size="9" font-family="Arial">€</text>
<text x="270" y="175" fill="${COLORS.text}" font-size="9" font-family="Arial">jaar</text>
<text x="55" y="175" fill="${COLORS.muted}" font-size="9" font-family="Arial">0</text>
<text x="155" y="175" fill="${COLORS.muted}" font-size="9" font-family="Arial">5</text>
<text x="255" y="175" fill="${COLORS.muted}" font-size="9" font-family="Arial">10</text>
<polyline points="55,140 80,135 105,128 130,121 155,113 180,105 205,96 230,87 255,77 280,67" fill="none" stroke="${COLORS.geld}" stroke-width="3"/>
<circle cx="55" cy="140" r="4" fill="${COLORS.warm}"/>
<text x="55" y="135" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial">€1000</text>
<circle cx="155" cy="113" r="4" fill="${COLORS.warm}"/>
<text x="160" y="108" fill="${COLORS.warm}" font-size="9" font-family="Arial">€1104</text>
<circle cx="280" cy="67" r="4" fill="${COLORS.warm}"/>
<text x="265" y="62" fill="${COLORS.warm}" font-size="9" font-family="Arial">€1219</text>
<text x="160" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">€1000 sparen, 2% rente per jaar</text>
</svg>`,
    checks: [
      {
        q: "Je zet **€500** op een spaarrekening met **3% rente** per jaar. Hoeveel staat er na 1 jaar?",
        options: ["€515", "€503", "€530", "€553"],
        answer: 0,
        wrongHints: [null, "3% van €500 = €15, niet €3.", "Dat zou 6% rente zijn.", "Te veel — controleer 3% × €500."],
      },
      {
        q: "Wat is **samengestelde rente**?",
        options: ["Rente over de eerder ontvangen rente", "Een speciaal soort lening", "Hogere rente voor zakelijke klanten", "Belasting op spaargeld"],
        answer: 0,
        wrongHints: [null, "Lening is een ander product.", "Niet specifiek aan zakelijk gebonden.", "Dat is vermogensbelasting."],
      },
      {
        q: "Waarom betaalt een bank jou rente op je spaargeld?",
        options: ["De bank kan jouw geld weer uitlenen aan anderen, daar verdient zij aan", "Uit dankbaarheid", "Het is verplicht door de wet", "Geld is duurder geworden"],
        answer: 0,
        wrongHints: [null, "Bank doet het uit eigenbelang.", "Hoogte van rente is geen wettelijke plicht.", "Geld 'duurder worden' is geen reden — bank verdient aan uitlenen."],
      },
      {
        q: "Anna spaart **€2.500 voor haar rijbewijs**. Welk type rekening is geschikt?",
        options: ["Een spaarrekening — ze haalt het er pas later af", "Een hypotheekrekening", "Een creditcard-rekening", "Een doorlopend krediet"],
        answer: 0,
        wrongHints: [null, "Hypotheek is voor een huis kopen.", "Creditcard is voor uitgeven, niet sparen.", "Doorlopend krediet is een lening, niet een spaarrekening."],
      },
      {
        q: "Een bank biedt een spaarrekening met **0% rente**. Waarom is sparen dan nóg steeds zinvol?",
        options: ["Je houdt geld apart voor doelen of buffers", "Het is verplicht", "Je krijgt korting in winkels", "Het levert toch geld op"],
        answer: 0,
        wrongHints: [null, "Sparen is geen plicht.", "Geen winkelvoordeel verbonden aan sparen.", "Bij 0% levert het juist niets op — maar gestructureerd sparen helpt wel."],
      },
      {
        q: "Wat gebeurt er bij een **negatieve rente** op je spaargeld?",
        options: ["Je betaalt de bank in plaats van andersom", "Je krijgt extra geld", "De bank gaat failliet", "Niets"],
        answer: 0,
        wrongHints: [null, "Negatief = bank krijgt iets van jou.", "Betekent dat de bank failliet gaat is iets anders (DGS).", "Het heeft wel impact op je tegoed."],
      },
    ],
  },
  // ─── Stap 4: Sparen of beleggen ───────────────────────────
  {
    title: "Sparen of beleggen — risico vs rendement",
    explanation: "Sparen geeft weinig rente maar je geld is veilig. **Beleggen** kan meer opleveren — maar je kunt ook verlies maken. Dit is de kern van Pincode H2.2.\n\n**Sparen** (stap 3 herhaling):\n• Geld op de bank, lage rente (~1-2%)\n• Veilig: gegarandeerd tot €100.000 per bank (DGS)\n• Snel beschikbaar\n• Bij hoge inflatie verlies je toch koopkracht\n\n**Beleggen** = je geld in iets stoppen dat (hopelijk) in waarde stijgt.\n\n**Belangrijkste vormen**:\n\n**1. Aandelen**\n• Stukje eigendom in een bedrijf (Shell, ASML, Apple)\n• Verdien je via: koerswinst (waarde stijgt) + dividend (winstuitkering)\n• Kan ook DALEN — soms tot €0 (bedrijf failliet)\n• Lange termijn: ~7%/jaar gemiddeld\n\n**2. Obligaties**\n• Lening AAN een bedrijf of overheid\n• Krijg je rente over (bv. 3-4%/jaar)\n• Veiliger dan aandelen, lager rendement\n\n**3. Beleggingsfondsen / ETF's**\n• Verzameling van veel aandelen tegelijk (bv. 'wereld-ETF')\n• Spreiding = minder risico (1 bedrijf failliet → fonds heeft nog 499 anderen)\n• Voor beginners: vaak beste keuze\n\n**4. Vastgoed**\n• Huis kopen om te verhuren\n• Veel kapitaal nodig, niet snel verkoopbaar\n\n**5. Crypto**\n• Bitcoin, Ethereum etc.\n• Heel risicovol, kan 50-90% in een jaar dalen of stijgen\n• Geen onderliggende waarde, geen DGS-garantie\n• Niet voor sparen of pensioen\n\n**Risico-rendement-curve**:\n• Hoog rendement = hoog risico (altijd)\n• Wie 'gegarandeerd hoog rendement' belooft → **OPLICHTING**\n\n**Vuistregels**:\n• **Spaar eerst** een buffer (3-6 mnd lasten)\n• **Beleg pas** met geld dat je 5+ jaar kunt missen\n• **Spreid** over verschillende beleggingen\n• **Lange termijn**: aandelen leveren historisch ~7%/jaar (nominaal)\n• **Korte termijn** (< 3 jaar): te risico-vol — kies sparen\n\n**Voorbeeld 'effect van rendement'**:\n• €1.000, 30 jaar, 2% rente (sparen) → €1.811\n• €1.000, 30 jaar, 7% rendement (aandelen) → €7.612\n• Verschil door samengestelde rente — wordt enorm op lange termijn\n\n**Risico's bij beleggen**:\n• **Marktrisico**: beurs daalt (corona 2020: -30%)\n• **Bedrijfsrisico**: 1 bedrijf failliet\n• **Inflatierisico**: rendement < inflatie = verlies in koopkracht\n• **Liquiditeitsrisico**: je geld zit vast, kun je niet snel weghalen\n\n**Belasting op vermogen**:\n• Box 3: spaargeld + beleggingen boven ~€57.000 (vrijstelling 2024)\n• Belasting wordt geschat op fictief rendement → regels veranderen vaak\n\n**Voor jou als 16-jarige**:\n• Beginnen kan vanaf 18 (rekening) of jonger met ouders\n• Kleine bedragen via DEGIRO, BUX, eToro\n• **Eerst leren** — niet meteen veel inleggen\n• Lange termijn = jouw voordeel (decennia tijd voor compounding)",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">SPAREN vs BELEGGEN</text>
<rect x="20" y="40" width="135" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">SPAREN</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">~1-2% rente</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">veilig (DGS €100k)</text>
<text x="87" y="98" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">snel beschikbaar</text>
<rect x="165" y="40" width="135" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">BELEGGEN</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">~7% gemiddeld</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.aanbod}" font-size="9" font-family="Arial">⚠ kan dalen</text>
<text x="232" y="98" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">lange termijn 5+ jr</text>
<text x="160" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€1.000, 30 jaar:</text>
<text x="87" y="148" text-anchor="middle" fill="${COLORS.geld}" font-size="13" font-family="Arial" font-weight="bold">€1.811</text>
<text x="87" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">2% sparen</text>
<text x="232" y="148" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">€7.612</text>
<text x="232" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">7% beleggen</text>
<text x="160" y="185" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">aandelen · obligaties · ETF · vastgoed</text>
<text x="160" y="205" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">eerst spaarbuffer, daarna beleggen</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **aandeel**?",
        options: ["Stukje eigendom in een bedrijf", "Een lening aan een bedrijf", "Een spaarrekening", "Een soort BTW"],
        answer: 0,
        wrongHints: [null, "Dat is een obligatie.", "Spaarrekening = bank.", "Geen belasting."],
      },
      {
        q: "Wat is het **verschil tussen sparen en beleggen**?",
        options: ["Sparen is veilig met lage rente; beleggen kan meer opleveren maar ook verlies", "Geen verschil", "Beleggen is altijd veiliger", "Sparen levert altijd verlies"],
        answer: 0,
        wrongHints: [null, "Wel groot verschil.", "Tegendeel.", "Sparen is veilig."],
      },
      {
        q: "Bij **hoog rendement** hoort meestal:",
        options: ["Hoog risico", "Geen risico", "Gegarandeerd geld", "Kortere wachttijd"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Garanties bestaan zelden bij hoge rendementen.", "Niets met tijd."],
      },
      {
        q: "Iemand belooft **gegarandeerd 30% rendement per jaar**. Wat denk je?",
        options: ["Vrijwel zeker oplichting — bestaat niet", "Geweldig, meteen instappen", "Standaard rendement", "Dat hoort bij de bank"],
        answer: 0,
        wrongHints: [null, "Klassieke fraude-tactiek.", "Niet gemiddeld.", "Banken bieden veel lager."],
      },
      {
        q: "Wat is een **ETF** (beleggingsfonds)?",
        options: ["Verzameling van veel aandelen tegelijk → spreiding", "Een spaarrekening", "Een hypotheek", "Een belasting"],
        answer: 0,
        wrongHints: [null, "Beleggingsproduct, geen spaar.", "Niet hetzelfde.", "Geen belasting."],
      },
      {
        q: "**Vuistregel** voordat je gaat beleggen:",
        options: ["Eerst een buffer sparen (3-6 mnd lasten)", "Direct alles inleggen", "Crypto is altijd eerst", "Lenen om te beleggen"],
        answer: 0,
        wrongHints: [null, "Te risicovol zonder buffer.", "Crypto is hoog risico.", "Heel risicovol — beter niet."],
      },
      {
        q: "**Crypto** als belegging:",
        options: ["Heel hoog risico, kan 50-90% dalen, geen DGS-garantie", "Veilig en gegarandeerd", "Levert vast 10% per jaar", "Wettelijk verzekerd"],
        answer: 0,
        wrongHints: [null, "Tegendeel — heel volatiel.", "Geen garantie.", "Geen verzekering."],
      },
    ],
  },

  // ─── Stap 5: Geld moet rollen — circulatie en banken ──────
  {
    title: "Geld moet rollen — hoe geld door de economie stroomt",
    explanation: "**Pincode 2.4: Geld moet rollen!** Geld dat stilstaat doet niets. Pas als het rondgaat — van consument naar bedrijf naar werknemer naar consument — komt de economie in beweging.\n\n**De geldkringloop**:\nJij koopt brood (€2,50) → bakker betaalt zijn werknemer (loon) → werknemer koopt zijn boodschappen → en zo verder. **Hetzelfde geld** wisselt vele keren van eigenaar.\n\n**Welke rol spelen banken hierin?**\n\n**1. Geld bewaren** — betaal- en spaarrekening\n**2. Geld lenen aan anderen** — uit jouw spaargeld\n**3. Betalingen regelen** — Tikkie, overschrijven, pinnen\n\n**Dit is het belangrijkste stuk** — banken zijn niet alleen 'kluis voor jouw geld'. Zij **lenen jouw spaargeld uit** aan iemand anders die het wil lenen voor een hypotheek of bedrijfslening.\n\n**Voorbeeld**: jij stort €1.000 op je spaarrekening.\n• De bank houdt een klein deel achter (kasreserve, ~5% — €50)\n• De rest (€950) leent ze uit aan iemand anders\n• Die persoon betaalt ermee (bv. fiets) → fietsenwinkel stort dat geld op háár bank\n• Die bank houdt 5% achter en leent de rest weer uit\n• → Het geld 'vermenigvuldigt' zich door de economie\n\nDit heet **geldschepping door banken**. Het is veilig zolang banken niet allemaal tegelijk geld nodig hebben.\n\n**Wat als veel mensen tegelijk geld willen?**\n• Heet **bank run** — paniek\n• Bank heeft niet genoeg cash → kan failliet gaan\n• Voorbeeld: SVB-bank USA 2023, 1 dag €40 mrd opgenomen\n• Daarom: **DGS** (Depositogarantiestelsel) — €100k per spaarder gegarandeerd\n\n**Geldhoeveelheid**:\n• **M0** — alleen contant geld (chartaal)\n• **M1** — M0 + direct beschikbaar girale geld (betaalrekeningen)\n• **M2** — M1 + spaarrekeningen\n• **M3** — M2 + langer vastliggende deposito's\n\n**Voor jou belangrijk**:\n• Door uitlenen wordt elke euro 'meer waard' voor de economie\n• Centrale banken (ECB) bewaken hoe snel dit gaat — anders inflatie\n• Vertrouwen is cruciaal — daarom regelgeving DNB op banken\n\n**Geld 'rolt' ook via**:\n• **Belasting** — overheid pakt deel, geeft uit aan zorg/onderwijs/uitkeringen\n• **Sparen + beleggen** — geld helpt bedrijven groeien\n• **Internationale handel** — geld stroomt over grenzen\n\n**Snelheid van rollen** = hoe snel hetzelfde geld van eigenaar wisselt.\n• Hoge snelheid = veel activiteit, economie groeit\n• Lage snelheid = mensen sparen + geven niet uit, recessie\n\n**Quote economen**: 'Geld is als bloed in een lichaam — niet hoeveel je hebt is belangrijk, maar hoe het stroomt.'",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">GELDKRINGLOOP</text>
<circle cx="80" cy="80" r="28" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="80" y="76" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">JIJ</text>
<text x="80" y="89" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">koopt brood</text>
<circle cx="240" cy="80" r="28" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="240" y="76" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">BAKKER</text>
<text x="240" y="89" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">krijgt €2,50</text>
<line x1="110" y1="75" x2="210" y2="75" stroke="${COLORS.warm}" stroke-width="2" marker-end="url(#a)"/>
<line x1="210" y1="90" x2="110" y2="90" stroke="${COLORS.aanbod}" stroke-width="2" marker-end="url(#a)"/>
<defs><marker id="a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="${COLORS.warm}"/></marker></defs>
<text x="160" y="68" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial">€</text>
<text x="160" y="103" text-anchor="middle" fill="${COLORS.aanbod}" font-size="9" font-family="Arial">brood</text>
<circle cx="160" cy="155" r="28" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="160" y="151" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">WERKNEMER</text>
<text x="160" y="164" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">krijgt loon</text>
<line x1="225" y1="105" x2="180" y2="135" stroke="${COLORS.warm}" stroke-width="2" marker-end="url(#a)"/>
<line x1="135" y1="135" x2="100" y2="105" stroke="${COLORS.warm}" stroke-width="2" marker-end="url(#a)"/>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">geld blijft rollen — banken lenen ook uit</text>
</svg>`,
    checks: [
      {
        q: "Wat doet een bank met **jouw spaargeld**?",
        options: ["Klein deel houdt ze in kas, rest leent ze uit aan anderen", "Bewaart het in een kluis", "Geeft het terug bij vraag", "Belegt alles in aandelen"],
        answer: 0,
        wrongHints: [null, "Niet meer in kluis — modern bankieren leent uit.", "Klein deel ja, niet alles.", "Banken beleggen sommig wel, maar voornamelijk uitlenen."],
      },
      {
        q: "Wat is **geldschepping door banken**?",
        options: ["Door uitlenen + opnieuw storten neemt geldhoeveelheid in economie toe", "Banken drukken geld bij", "Belastingdienst maakt geld", "Niemand kan geld scheppen"],
        answer: 0,
        wrongHints: [null, "Drukt ECB, niet commerciële banken.", "Belastingdienst int.", "Centrale + commerciële banken kunnen dat wel."],
      },
      {
        q: "Wat is een **bank run**?",
        options: ["Veel klanten halen tegelijk hun geld op — bank kan failliet gaan", "Bank organiseert een hardloopevenement", "Bank heeft promotie", "Klanten lopen weg uit boosheid"],
        answer: 0,
        wrongHints: [null, "Letterlijke betekenis is verkeerd hier.", "Geen reclame.", "Niet figuurlijk weglopen — geld weghalen."],
      },
      {
        q: "Hoeveel garandeert het **DGS** per spaarder per bank?",
        options: ["€100.000", "€10.000", "€1 miljoen", "Niets"],
        answer: 0,
        wrongHints: [null, "Te laag.", "Te veel.", "Wel garantie."],
      },
      {
        q: "Wat is **M1** geldhoeveelheid?",
        options: ["Contant geld (M0) + giraal geld op betaalrekeningen", "Alleen contant geld", "Alle spaargeld + beleggingen", "Buitenlandse munten"],
        answer: 0,
        wrongHints: [null, "Dat is M0.", "Dat is M2/M3.", "Niet relevant hier."],
      },
      {
        q: "Wanneer **'rolt' geld snel** door de economie?",
        options: ["Bij hoogconjunctuur — mensen geven uit, bedrijven investeren", "Bij recessie", "Wanneer geen geld bestaat", "Altijd even snel"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Onzin.", "Verschilt per economie."],
      },
      {
        q: "Stort jij **€1.000** op de bank. Wat gebeurt er ongeveer?",
        options: ["Bank houdt ~5% (€50) als reserve, leent ~€950 uit", "Geld blijft op jouw rekening, niets gebeurt", "Bank betaalt je vraagprijs", "Bank kan jouw geld nooit aanraken"],
        answer: 0,
        wrongHints: [null, "Niet 'niets' — bank verdient eraan.", "Geen vraagprijs.", "Bank gebruikt het wel — dat is hun businessmodel."],
      },
    ],
  },

  // ─── Stap 6: Inflatie en koopkracht ─────────────────────────
  {
    title: "Inflatie — waarom geld minder waard wordt",
    explanation: "**Inflatie**: prijzen stijgen gemiddeld. Een brood dat in 2010 €1,50 kostte, kost nu rond de €2,80. Dezelfde euro koopt **minder** dan vroeger.\n\nHet **CBS** meet inflatie met de **Consumentenprijsindex (CPI)**:\n• 2023 = basisjaar → CPI = 100\n• 2024: CPI = 104 → 4% inflatie\n• 2025: CPI = 108 → 8% sinds basisjaar\n\n**Koopkracht**: hoeveel je kunt kopen voor je geld.\n• Loon stijgt 2%, prijzen stijgen 4% → koopkracht **daalt** met ~2%.\n• Loon stijgt 5%, prijzen stijgen 2% → koopkracht **stijgt** met ~3%.\n\n**Waarom belangrijk voor sparen?**\nAls je 1% rente krijgt, maar inflatie is 3%, dan **verlies** je effectief 2% per jaar aan koopkracht. Je geld op de bank wordt minder waard.\n\n**Hyperinflatie** (zeldzaam): prijzen verdubbelen elke maand. In Duitsland 1923 kostte een brood miljarden mark. In Venezuela 2018 hetzelfde verhaal. Geld werd onbruikbaar.\n\n**Wat veroorzaakt inflatie?**\n• Energieprijzen stijgen (gas, olie)\n• Te veel geld in omloop\n• Krapte op de markt (vraag &gt; aanbod)",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">PRIJS VAN EEN BROOD</text>
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
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">+87% in 16 jaar — dat is inflatie</text>
</svg>`,
    checks: [
      {
        q: "**CPI 2025 = 108** (basis 2023 = 100). Hoeveel zijn de prijzen gestegen sinds 2023?",
        options: ["8%", "108%", "0,8%", "1,08%"],
        answer: 0,
        wrongHints: [null, "Dat zou betekenen dat een brood van €1 nu €2,08 kost — te veel.", "Te klein.", "Dat is de factor (1,08) niet het percentage."],
      },
      {
        q: "Je loon stijgt **2%**, prijzen stijgen **5%**. Wat gebeurt met je koopkracht?",
        options: ["Daalt met ongeveer 3%", "Stijgt met 2%", "Stijgt met 7%", "Blijft gelijk"],
        answer: 0,
        wrongHints: [null, "Loon stijgt wel, maar prijzen sneller.", "Niet optellen.", "Alleen gelijk als beide percentages gelijk zijn."],
      },
      {
        q: "Je krijgt **1% rente** op spaargeld, inflatie is **3%**. Wat doet je koopkracht?",
        options: ["Daalt met ongeveer 2% per jaar", "Stijgt met 1%", "Blijft precies gelijk", "Stijgt met 4%"],
        answer: 0,
        wrongHints: [null, "Rente alleen is geen winst — vergelijk met inflatie.", "Inflatie is hoger dan rente, dus daling.", "Niet optellen — vergelijk."],
      },
      {
        q: "Wat zou inflatie kunnen **veroorzaken**?",
        options: ["Energieprijzen stijgen sterk (gas, olie)", "Iedereen krijgt meer salaris", "Belastingen worden afgeschaft", "Het regent veel"],
        answer: 0,
        wrongHints: [null, "Hogere lonen kunnen inflatie wel versterken, maar zijn het gevolg eerder dan oorzaak.", "Belasting heeft directer effect via kosten.", "Weer is geen economische factor."],
      },
      {
        q: "Wat is **hyperinflatie**?",
        options: ["Prijzen verdubbelen extreem snel — bv. elke maand", "Prijzen dalen", "Lonen verdubbelen", "Geen inflatie"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — dat is deflatie.", "Lonen kunnen ook stijgen maar nooit zo snel als hyperinflatie-prijzen.", "Hyper = veel meer dan normaal."],
      },
    ],
  },
  // ─── Stap 7: Begroten ──────────────────────────────────────────
  {
    title: "Begroten — heb ik geld over aan het einde van de maand?",
    explanation: "Een **begroting** = overzicht van wat erin komt en uit gaat per maand. Dat helpt je doelen halen (rijbewijs, vakantie) en voorkomen dat je rood staat.\n\n**Inkomsten**: alles wat binnenkomt.\n• Zakgeld\n• Bijbaan-loon (bv. vakkenvuller €60-€200/mnd)\n• Studiefinanciering (later)\n• Toeslagen\n\n**Uitgaven**: opgesplitst in **vast** en **variabel**.\n\n**Vaste uitgaven** (komen elke maand terug):\n• Telefoon abonnement (€10-€25)\n• Streamingdiensten (Spotify, Netflix)\n• Sport-abonnement\n• Verzekeringen\n\n**Variabele uitgaven** (anders elke maand):\n• Boodschappen, uit eten\n• Kleding\n• Uitgaan, bioscoop\n• Vervoer (OV-chipkaart, benzine)\n\n**Sparen** = zet apart vóórdat je uitgeeft (de '50/30/20-regel'):\n• 50% noodzaak\n• 30% leuke dingen\n• 20% sparen\n\n**Voorbeeld**: bijbaan-loon €240/mnd.\n• 50% = €120 → telefoon, OV, basis\n• 30% = €72 → uitgaan, kleding\n• 20% = €48 → sparen voor rijbewijs\n\n**Overschot/tekort**:\n• Inkomsten &gt; uitgaven → **overschot** (kan sparen)\n• Inkomsten &lt; uitgaven → **tekort** (rood staan, schulden)",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BEGROTEN — €240/mnd bijbaan</text>
<rect x="40" y="40" width="240" height="40" rx="6" fill="${COLORS.geld}" opacity="0.3" stroke="${COLORS.geld}"/>
<text x="160" y="65" text-anchor="middle" fill="${COLORS.geld}" font-size="14" font-family="Arial" font-weight="bold">INKOMSTEN €240</text>
<rect x="40" y="100" width="120" height="35" rx="6" fill="${COLORS.vraag}" opacity="0.3" stroke="${COLORS.vraag}"/>
<text x="100" y="118" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">50% NOODZAAK</text>
<text x="100" y="131" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€120</text>
<rect x="170" y="100" width="72" height="35" rx="6" fill="${COLORS.warm}" opacity="0.3" stroke="${COLORS.warm}"/>
<text x="206" y="118" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">30% LEUK</text>
<text x="206" y="131" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€72</text>
<rect x="252" y="100" width="48" height="35" rx="6" fill="${COLORS.alt}" opacity="0.3" stroke="${COLORS.alt}"/>
<text x="276" y="118" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">20% SPAAR</text>
<text x="276" y="131" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€48</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€48 × 12 mnd = €576/jaar</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">In 4 jaar: rijbewijs! 🚗</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">de 50/30/20-regel</text>
</svg>`,
    checks: [
      {
        q: "Welke uitgave is een **vaste uitgave**?",
        options: ["Spotify-abonnement (elke maand zelfde bedrag)", "Boodschappen", "Een nieuwe broek", "Bioscoop-bezoek"],
        answer: 0,
        wrongHints: [null, "Boodschappen wisselen per maand → variabel.", "Een broek is incidenteel, niet maandelijks.", "Bioscoop wisselt — niet elke maand precies hetzelfde."],
      },
      {
        q: "Inkomsten **€350**, uitgaven **€420** in een maand. Wat is je situatie?",
        options: ["Tekort van €70 — je teert in op spaargeld of staat rood", "Overschot van €70", "Het maakt niet uit", "Je krijgt €70 toeslag"],
        answer: 0,
        wrongHints: [null, "Andersom — uitgaven zijn hoger.", "Het maakt heel veel uit — kan tot schulden leiden.", "Toeslagen krijg je niet automatisch bij tekort."],
      },
      {
        q: "Volgens de **50/30/20-regel**: bij €400 inkomsten — hoeveel sparen?",
        options: ["€80", "€200", "€120", "€40"],
        answer: 0,
        wrongHints: [null, "Dat is 50% — noodzaak.", "Dat is 30% — leuke dingen.", "Dat is 10% — wel sparen, maar minder dan de regel."],
      },
      {
        q: "Waarom is **eerst sparen, dan uitgeven** beter dan andersom?",
        options: ["Anders blijft er aan het einde van de maand niets over", "Sparen kost belasting", "Spaarrente is altijd 0%", "Banken sluiten je rekening anders"],
        answer: 0,
        wrongHints: [null, "Sparen kost niet meer belasting.", "Rente kan ook hoger zijn dan 0%.", "Banken sluiten geen rekeningen omdat je niet spaart."],
      },
      {
        q: "Anna heeft **€60 zakgeld** + **€80 bijbaan**. Streaming **€10**, telefoon **€15**, OV **€20**, uitgaan **€60**. Hoeveel kan zij sparen?",
        options: ["€35", "€10", "€60", "€105"],
        answer: 0,
        wrongHints: [null, "Te weinig — tel inkomsten + trek uitgaven af.", "Dat zou alleen uitgaan zijn.", "Te veel — uitgaven niet vergeten."],
      },
      {
        q: "Wat is een **buffer** op je spaarrekening?",
        options: ["Geld voor onverwachte uitgaven (telefoon stuk, fiets gestolen)", "Verplicht door de bank", "Een soort lening", "Cashback van Klarna"],
        answer: 0,
        wrongHints: [null, "Niet verplicht maar verstandig.", "Geen lening — eigen geld.", "Geen cadeau — spaargeld is van jou."],
      },
    ],
  },
  // ─── Stap 8: Lenen — kredietvormen ─────────────────────────
  {
    title: "Lenen — wanneer wel, wanneer niet",
    explanation: "**Lenen** = geld krijgen dat je **later moet terugbetalen**, vaak met **rente**. De bank verdient aan rente.\n\n**Soorten leningen** (van laag naar hoog risico voor jou):\n\n**1. Hypotheek** — voor een huis (looptijd 20-30 jaar). Het huis is **onderpand**: kun je niet betalen, dan wordt het huis verkocht. Lage rente want de bank loopt weinig risico.\n\n**2. Studielening (DUO)** — voor studenten. Lage rente, terugbetalen pas als je verdient. Geen BKR-registratie.\n\n**3. Persoonlijke lening** — vast bedrag, vaste maandlasten over 1-5 jaar. Voor bv. auto, verbouwing.\n\n**4. Doorlopend krediet** — kredietruimte tot een limiet. Flexibel, maar **hoge rente** en risico op groeiende schuld.\n\n**5. Rood staan** — tijdelijk negatief op je betaalrekening. **Heel hoge rente** (10-15%/jaar).\n\n**6. Achteraf betalen / Klarna** — populair maar bij niet betalen: hoge boetes, deurwaarder, BKR-registratie. Je staat dan jaren bekend als 'wanbetaler' en krijgt later geen hypotheek.\n\n**Voor leningen kijkt de bank naar**:\n• **Inkomen**: kun je het terugbetalen?\n• **BKR-registratie**: heb je nu al schulden?\n• **Onderpand**: huis, auto?\n\n**Vuistregel**: je vaste maandlasten (huur + leningen) moeten **maximaal 30% van je netto-inkomen** zijn.\n\n**Wanneer is lenen OK?**\n• Voor iets dat **lang meegaat** (huis, opleiding) en/of geld oplevert.\n\n**Wanneer NIET?**\n• Voor een vakantie, kleren, telefoon → eerst sparen.",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">LENINGEN — RENTE-NIVEAU</text>
<rect x="20" y="40" width="280" height="22" rx="4" fill="${COLORS.geld}" opacity="0.3"/>
<text x="30" y="56" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">HYPOTHEEK</text>
<text x="270" y="56" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">~4%</text>
<rect x="20" y="65" width="280" height="22" rx="4" fill="${COLORS.geld}" opacity="0.3"/>
<text x="30" y="81" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">STUDIELENING</text>
<text x="270" y="81" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">~3%</text>
<rect x="20" y="90" width="280" height="22" rx="4" fill="${COLORS.warm}" opacity="0.3"/>
<text x="30" y="106" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">PERSOONLIJK</text>
<text x="270" y="106" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">~7%</text>
<rect x="20" y="115" width="280" height="22" rx="4" fill="${COLORS.oranje}" opacity="0.3"/>
<text x="30" y="131" fill="${COLORS.oranje}" font-size="11" font-family="Arial" font-weight="bold">DOORLOPEND</text>
<text x="270" y="131" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">~10%</text>
<rect x="20" y="140" width="280" height="22" rx="4" fill="${COLORS.aanbod}" opacity="0.3"/>
<text x="30" y="156" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">ROOD STAAN</text>
<text x="270" y="156" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">~12%</text>
<rect x="20" y="165" width="280" height="22" rx="4" fill="${COLORS.rood}" opacity="0.4"/>
<text x="30" y="181" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">KLARNA TE LAAT</text>
<text x="270" y="181" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">+ boetes!</text>
<text x="160" y="208" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vuistregel: max 30% netto-inkomen aan lasten</text>
</svg>`,
    checks: [
      {
        q: "Welke lening heeft een **huis als onderpand**?",
        options: ["Hypotheek", "Persoonlijke lening", "Rood staan", "Doorlopend krediet"],
        answer: 0,
        wrongHints: [null, "Geen onderpand — daarom hogere rente.", "Voor kortdurend tekort, geen onderpand.", "Geen vast onderpand."],
      },
      {
        q: "Waarom heeft **rood staan** een hoge rente?",
        options: ["Geen onderpand, kort termijn — bank loopt risico", "Banken willen klanten straffen", "Het is illegaal", "Door de overheid bepaald"],
        answer: 0,
        wrongHints: [null, "Niet om te straffen — risico-prijs.", "Rood staan is wel legaal binnen je limiet.", "Rente bepaalt de bank."],
      },
      {
        q: "Wat is een **BKR-toets**?",
        options: ["Check of je al andere schulden of betalingsproblemen hebt", "Examen voor bankmedewerkers", "Belastingaanslag", "Spaarrekening met bonus"],
        answer: 0,
        wrongHints: [null, "BKR is een register, geen opleiding.", "Niets met belasting.", "Geen spaarproduct."],
      },
      {
        q: "Bij netto inkomen **€2.000/mnd**: welk maximum aan vaste maandlasten volgt uit de 30%-regel?",
        options: ["€600", "€2.000", "€300", "€1.000"],
        answer: 0,
        wrongHints: [null, "Dat zou je hele inkomen zijn.", "Te weinig — dat is 15%.", "Net te veel — dat is 50%."],
      },
      {
        q: "Wanneer is lenen meestal **zinvol**?",
        options: ["Voor een huis of opleiding (lang meegaan, leveren waarde op)", "Voor een vakantie", "Voor een nieuwe telefoon", "Voor kleren"],
        answer: 0,
        wrongHints: [null, "Vakantie levert geen geld op — eerst sparen.", "Telefoon: spaar liever.", "Kleren: niet lenen."],
      },
      {
        q: "Wat gebeurt er als je **Klarna 'achteraf' niet op tijd betaalt**?",
        options: ["Hoge boetes, daarna deurwaarder + BKR-registratie", "Klarna scheldt het kwijt", "Je krijgt extra tijd zonder kosten", "Klarna betaalt het zelf"],
        answer: 0,
        wrongHints: [null, "Klarna scheldt niets kwijt — schuld blijft bestaan.", "Extra tijd kost geld — boetes lopen op.", "Klarna verdient eraan, betaalt niets zelf."],
      },
    ],
  },
  // ─── Stap 9: Hypotheek in detail ───────────────────────────
  {
    title: "Hypotheek — een huis kopen",
    explanation: "Een **hypotheek** is een lange lening om een huis te kopen. Je leent vaak het overgrote deel van de huisprijs van een bank. Het huis is **onderpand** — kun je niet betalen, dan verkoopt de bank het huis.\n\n**Looptijd**: meestal **30 jaar**.\n\n**Twee veelvoorkomende vormen**:\n\n**1. Annuïteitenhypotheek**\n• **Vaste maandlast** elk jaar (gemiddeld over de looptijd).\n• Eerst betaal je veel rente, weinig aflossing.\n• Aan het eind: weinig rente, veel aflossing.\n• Populair bij starters.\n\n**2. Lineaire hypotheek**\n• **Vaste aflossing** elke maand.\n• Eerst hoge maandlast (rente over hele bedrag).\n• Wordt elk jaar lager.\n• Goedkoper over de hele looptijd, maar in begin hoger.\n\n**Voorbeeld**: huis kost €350.000.\n• Eigen geld: €30.000.\n• Hypotheek: €320.000 over 30 jaar.\n• Rente 4% → maandlast ongeveer **€1.530**.\n\n**Maximale hypotheek** = afhankelijk van je inkomen (bruto). Vuistregel: ongeveer 4-5× je bruto jaarsalaris.\n\n**Bijkomende kosten** (komen bovenop de huisprijs):\n• **Overdrachtsbelasting** (2% voor starters tot 35 jaar: 0%)\n• **Notaris** (~€2.000)\n• **Taxatie** (~€500)\n• **Hypotheekadvies** (~€2.500)\n\n**Aandachtspunten**:\n• Werkloos worden = inkomen weg = hypotheek niet betalen = huis kwijt\n• Daarom **buffer** op spaarrekening (minimaal 3-6 maanden lasten)\n• Verzekering: arbeidsongeschiktheid, overlijdensrisico",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">HYPOTHEEK €320.000 / 30 jr / 4%</text>
<text x="160" y="42" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">maandlast ongeveer €1.530</text>
<rect x="20" y="60" width="135" height="80" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="87" y="78" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">ANNUÏTEIT</text>
<text x="87" y="95" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vaste maandlast</text>
<text x="87" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">veel rente eerst</text>
<text x="87" y="121" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">weinig aflossing</text>
<text x="87" y="134" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">populair bij starters</text>
<rect x="165" y="60" width="135" height="80" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="232" y="78" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">LINEAIR</text>
<text x="232" y="95" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vaste aflossing</text>
<text x="232" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">hoog begin</text>
<text x="232" y="121" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">daalt elk jaar</text>
<text x="232" y="134" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">goedkoper totaal</text>
<rect x="40" y="155" width="240" height="50" rx="6" fill="rgba(255,213,79,0.10)" stroke="${COLORS.warm}" stroke-width="1.2" stroke-dasharray="3 2"/>
<text x="160" y="173" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">+ EXTRA KOSTEN</text>
<text x="160" y="187" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">notaris €2.000 · taxatie €500</text>
<text x="160" y="199" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">advies €2.500 · overdrachtsbel.</text>
</svg>`,
    checks: [
      {
        q: "Wat is het belangrijkste verschil tussen **annuïteit** en **lineaire** hypotheek?",
        options: ["Annuïteit heeft vaste maandlast, lineair heeft vaste aflossing", "Annuïteit is voor huurders", "Lineair is alleen voor BV's", "Geen verschil"],
        answer: 0,
        wrongHints: [null, "Hypotheek is altijd voor kopers, niet huurders.", "Niet bedrijfs-specifiek.", "Echte verschillen in maandlast en totale kosten."],
      },
      {
        q: "Wat is **onderpand** bij een hypotheek?",
        options: ["Het huis — bij niet betalen verkoopt de bank het", "Een spaarrekening", "Een verzekering", "Een toeslag"],
        answer: 0,
        wrongHints: [null, "Spaarrekening is iets anders.", "Verzekering kan helpen, maar onderpand = het huis zelf.", "Toeslagen hebben hier niets mee te maken."],
      },
      {
        q: "Een huis kost **€350.000**, je hebt **€30.000** eigen geld. Hoeveel hypotheek heb je nodig?",
        options: ["€320.000", "€380.000", "€350.000", "€30.000"],
        answer: 0,
        wrongHints: [null, "Eigen geld haal je af, niet erbij.", "Je hebt eigen geld — minder lenen.", "Dat is alleen je eigen inbreng, niet de lening."],
      },
      {
        q: "Maximale hypotheek hangt vooral af van:",
        options: ["Je bruto-inkomen", "Je leeftijd alleen", "De prijs van het huis alleen", "Hoe blij je bent"],
        answer: 0,
        wrongHints: [null, "Leeftijd speelt mee, maar inkomen is hoofdfactor.", "Hoge prijs ≠ automatisch grote hypotheek mogelijk.", "Geen economische factor."],
      },
      {
        q: "Welke kosten komen **bovenop** de huisprijs bij koop?",
        options: ["Notaris, taxatie, advies en eventueel overdrachtsbelasting", "Alleen extra rente", "Niets", "Een huis-cadeau"],
        answer: 0,
        wrongHints: [null, "Rente is wel kost, maar niet bij koop — gedurende lening.", "Echt veel bijkomende kosten — denk €5.000 startersregel.", "Geen cadeau — koop is duur."],
      },
      {
        q: "Waarom is een **buffer** op de spaarrekening nuttig als je een hypotheek hebt?",
        options: ["Bij werkloosheid of ziekte kun je nog enkele maanden de hypotheek betalen", "Banken eisen het", "Spaargeld levert hypotheek-korting op", "Het is verboden om geen buffer te hebben"],
        answer: 0,
        wrongHints: [null, "Banken adviseren het wel, eisen meestal niet.", "Geen automatische korting.", "Geen verbod, wel verstandig."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeGeldSparenLenen = {
  id: "pincode-geld-sparen-lenen",
  title: "Geld, sparen en lenen",
  emoji: "💱",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk 2",
  intro:
    "Hoofdstuk 2 van Pincode 7e ed. VMBO-GT 4 (en andere methodes): geld + betaalmiddelen, sparen of beleggen, geldcirculatie, inflatie, begroten, lenen + hypotheek. 9 stappen, concrete voorbeelden voor tieners. Volledige Pincode-paragraaf 2.1-2.4 dekking + examen-voorbereiding compleet.",
  triggerKeywords: [
    "geld",
    "ruilhandel",
    "ruilmiddel",
    "rekenmiddel",
    "spaarmiddel",
    "chartaal",
    "giraal",
    "betaalmiddel",
    "pin",
    "contactloos",
    "creditcard",
    "klarna",
    "afterpay",
    "achteraf betalen",
    "bank",
    "sparen",
    "rente",
    "samengestelde rente",
    "spaarrekening",
    "betaalrekening",
    "beleggen",
    "belegging",
    "aandeel",
    "aandelen",
    "obligatie",
    "obligaties",
    "etf",
    "beleggingsfonds",
    "rendement",
    "risico",
    "spreiden",
    "spreiding",
    "vastgoed",
    "crypto",
    "bitcoin",
    "dividend",
    "koerswinst",
    "beurs",
    "degiro",
    "sparen of beleggen",
    "geld moet rollen",
    "geldcirculatie",
    "geldkringloop",
    "geldschepping",
    "geldhoeveelheid",
    "m0", "m1", "m2", "m3",
    "kasreserve",
    "bank run",
    "dgs",
    "depositogarantiestelsel",
    "kringloop",
    "inflatie",
    "koopkracht",
    "cpi",
    "consumentenprijsindex",
    "hyperinflatie",
    "begroten",
    "begroting",
    "vaste uitgaven",
    "variabele uitgaven",
    "50/30/20",
    "buffer",
    "lenen",
    "krediet",
    "hypotheek",
    "annuiteit",
    "lineaire hypotheek",
    "persoonlijke lening",
    "doorlopend krediet",
    "rood staan",
    "bkr",
    "onderpand",
    "studielening",
    "duo",
    "pincode hoofdstuk 2",
    "pincode hoofdstuk b",
  ],
  chapters,
  steps,
};

export default pincodeGeldSparenLenen;
