// Leerpad: BBP, conjunctuur, inflatie, werkloosheid — klas 4-5 economie.
// Bovenbouw HAVO/VWO + VMBO-GT verdieping. Referentieniveau 3F.
// 6 stappen met uitlegPad. Sluit op pincode-economie-paden.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  groei: "#66bb6a",
  recessie: "#ef5350",
  inflatie: "#ff8a65",
  rente: "#42a5f5",
  highlight: "#ffd54f",
};

const stepEmojis = ["📊", "📈", "💸", "👥", "🏦", "🏆"];

const chapters = [
  { letter: "A", title: "BBP — wat is het?", emoji: "📊", from: 0, to: 0 },
  { letter: "B", title: "Conjunctuur — golfbeweging", emoji: "📈", from: 1, to: 1 },
  { letter: "C", title: "Inflatie + koopkracht", emoji: "💸", from: 2, to: 2 },
  { letter: "D", title: "Werkloosheid — 4 soorten", emoji: "👥", from: 3, to: 3 },
  { letter: "E", title: "Overheid + ECB-rente", emoji: "🏦", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function conjunctuurSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Conjunctuur — economische golf</text>
<line x1="20" y1="100" x2="300" y2="100" stroke="${COLORS.muted}" stroke-width="1" stroke-dasharray="3,2"/>
<text x="305" y="105" fill="${COLORS.muted}" font-size="9" font-family="Arial">trend</text>

<path d="M 20 100 Q 70 60 110 70 Q 150 80 170 130 Q 200 160 230 140 Q 260 110 300 70" fill="none" stroke="${COLORS.curve2}" stroke-width="2.5"/>

<circle cx="90" cy="65" r="4" fill="${COLORS.groei}"/>
<text x="90" y="55" text-anchor="middle" fill="${COLORS.groei}" font-size="10" font-family="Arial" font-weight="bold">piek</text>

<circle cx="200" cy="155" r="4" fill="${COLORS.recessie}"/>
<text x="200" y="172" text-anchor="middle" fill="${COLORS.recessie}" font-size="10" font-family="Arial" font-weight="bold">dal</text>

<text x="50" y="135" fill="${COLORS.text}" font-size="9" font-family="Arial">opgang</text>
<text x="150" y="105" fill="${COLORS.text}" font-size="9" font-family="Arial">neergang</text>
<text x="245" y="125" fill="${COLORS.text}" font-size="9" font-family="Arial">opgang</text>
</svg>`;
}

const steps = [
  // STAP 1: BBP
  {
    title: "BBP — Bruto Binnenlands Product",
    explanation:
      "Het **BBP** *(Bruto Binnenlands Product)* meet de **totale waarde** van alle producten en diensten die binnen 1 land in 1 jaar worden geproduceerd.\n\n**Engelse afkorting**: **GDP** *(Gross Domestic Product)*.\n\n**Wat BBP wel + niet meet**:\n\n**Wel**:\n• Auto's die in NL gemaakt worden.\n• Een knipbeurt bij de kapper.\n• Een restaurant-bezoek.\n• Onderwijs van een leraar.\n• Een nieuw gebouwd huis.\n\n**Niet**:\n• **Zwart werk** *(onbetaald + niet geregistreerd)*.\n• **Vrijwilligerswerk**.\n• **Huishoudelijk werk** *(thuis koken, schoonmaken voor jezelf)*.\n• **Vervuiling + milieuschade** *(zelfs negatief voor welzijn maar telt niet)*.\n\n**BBP per hoofd van de bevolking** = BBP ÷ aantal inwoners.\n• Maakt landen vergelijkbaar.\n• NL BBP per hoofd: ~€55.000 *(2024)*.\n• VS BBP per hoofd: ~€70.000.\n• India BBP per hoofd: ~€2.500.\n\n**Hoe BBP berekenen?**\nDrie methodes — geven hetzelfde resultaat:\n\n**1. Productie-methode**: tel alle **toegevoegde waarde** op.\n• Toegevoegde waarde = verkoopprijs − kosten van grondstoffen.\n\n**2. Bestedings-methode**: tel alle **uitgaven** op.\n• **C** (consumptie) + **I** (investeringen) + **O** (overheidsuitgaven) + (**E** − **M**) *(uitvoer − invoer)*.\n\n**3. Inkomensmethode**: tel alle **inkomens** op.\n• Loon + winst + huur + rente.\n\n**Nominaal vs reëel BBP**:\n• **Nominaal BBP** = met huidige prijzen (inflatie meegerekend).\n• **Reëel BBP** = gecorrigeerd voor inflatie. **Toont echte groei**.\n• Voorbeeld: BBP groeit nominaal 5% maar inflatie is 3% → reëel maar 2% groei.\n\n**BBP-groei**:\n• **Economische groei** = stijging reëel BBP.\n• NL gemiddeld: ~1-2% per jaar.\n• Bij **groei**: meer welvaart, meer banen, hogere lonen.\n• Bij **krimp**: minder banen, faillissementen, recessie.\n\n**Kritiek op BBP**:\nBBP meet **economische activiteit**, niet **welzijn**:\n• Een autoaccident verhoogt BBP (auto repareren, ziekenhuis...) maar maakt mensen ongelukkig.\n• Vervuiling vermindert welzijn maar niet BBP.\n• **Alternatieven**: HDI *(Human Development Index)*, Doughnut-economie, Brede Welvaart.\n\n**Cito-vraag**:\n*'Wat is BBP?'* → totale waarde producten + diensten in 1 land per jaar.\n*'Wat is BBP per hoofd?'* → BBP ÷ inwoners.\n*'Wat is reëel BBP?'* → BBP gecorrigeerd voor inflatie.",
    checks: [
      {
        q: "Wat staat **BBP** voor?",
        options: ["Bruto Binnenlands Product", "Belasting Bedrijf Particulieren", "Bank Bestuur Persoon", "Begin Buiten Politiek"],
        answer: 0,
        wrongHints: [null, "Bestaat niet.", "Bestaat niet.", "Bestaat niet."],
      },
      {
        q: "Wat wordt **NIET** in BBP gerekend?",
        options: ["Huishoudelijk werk + vrijwilligers", "Auto-fabricage", "Restaurant-bezoek", "Knipbeurt bij kapper"],
        answer: 0,
        wrongHints: [null, "Wel — betaald.", "Wel — betaald.", "Wel — betaald."],
      },
      {
        q: "Wat is **reëel** BBP?",
        options: ["BBP gecorrigeerd voor inflatie", "BBP zonder belasting", "BBP per huishouden", "BBP van vorig jaar"],
        answer: 0,
        wrongHints: [null, "Niet de definitie.", "Niet correct.", "Niet hetzelfde."],
      },
      {
        q: "**5% nominale BBP-groei**, **3% inflatie** → reële groei?",
        options: ["~2%", "8%", "5%", "3%"],
        answer: 0,
        wrongHints: [null, "Onlogisch.", "Nominaal.", "Inflatie alleen."],
      },
      {
        q: "Wat is **BBP per hoofd**?",
        options: ["BBP gedeeld door inwoneraantal", "BBP × inwoners", "BBP plus inwoners", "BBP min belasting"],
        answer: 0,
        wrongHints: [null, "Niet — geen vermenigvuldiging.", "Niet relevant.", "Niet primair."],
      },
      {
        q: "Welk land heeft een **hoger BBP**: NL (€1.000 mld) of Duitsland (€4.000 mld)?",
        options: ["Duitsland", "Nederland", "Gelijk", "Niet te zeggen"],
        answer: 0,
        wrongHints: [null, "Lager getal.", "Verschillende getallen.", "Wel te zeggen."],
      },
    ],
  },

  // STAP 2: Conjunctuur
  {
    title: "Conjunctuur — de economische golfbeweging",
    explanation:
      "**Conjunctuur** = de **golfbeweging** van de economie rondom een lange-termijn-trend.\n\nEconomie gaat **niet** rechtlijnig omhoog. Het schommelt:\n\n**4 fasen van conjunctuur** *(uit het hoofd!)*:\n\n**1. Opgang (expansion)** 📈\n• BBP groeit boven gemiddeld.\n• Werkloosheid daalt.\n• Lonen + prijzen stijgen.\n• Bedrijven investeren.\n• Consumenten kopen meer.\n\n**2. Piek (peak)** 🎯\n• Hoogste punt.\n• Economie 'oververhit' — inflatie risico.\n• Hier draait de economie om.\n\n**3. Neergang (recession)** 📉\n• BBP daalt **2 kwartalen achter elkaar** = officiële **recessie**.\n• Werkloosheid stijgt.\n• Faillissementen.\n• Consumenten besparen, kopen minder.\n• Bij **lange + diepe** recessie = **depressie**.\n\n**4. Dal (trough)** ⬇️\n• Laagste punt.\n• Begin van herstel.\n• Bedrijven snijden in kosten.\n\nDaarna: nieuwe **opgang**, en de cyclus herhaalt.\n\n**Hoe lang duurt een cyclus?**\n• Gemiddeld **7-10 jaar** in NL/EU.\n• Maar onvoorspelbaar — kan sneller of langzamer.\n\n**Beroemde recessies**:\n• **Great Depression (1929-1939)**: na beurskrach Wall Street. Diepste depressie 20e eeuw.\n• **1973 oliecrisis**: olieprijs verviervoudigde door OPEC-embargo.\n• **Dot-com bubble (2000-2002)**: internet-bedrijven crashen.\n• **Financiële crisis 2008**: bankcrisis (Lehman Brothers) → mondiale recessie.\n• **COVID-19 (2020)**: lockdown → BBP −3,8% NL.\n• **Energie-crisis 2022**: gas-prijs door oorlog Oekraïne.\n\n**Hoe meten?**\n• **BBP-groei** per kwartaal.\n• **Werkloosheidscijfer**.\n• **Consumentenvertrouwen**.\n• **Producentenvertrouwen**.\n• **Inflatie**.\n• **Beurskoersen** (vooruitlopend, maar instabiel).\n\n**Pro-cyclisch vs anti-cyclisch**:\n• **Pro-cyclisch**: dingen die meebewegen met conjunctuur.\n  - Inkomsten overheid (belastingen) stijgen bij opgang.\n  - Werkgelegenheid.\n  - Bedrijfsinvesteringen.\n\n• **Anti-cyclisch / contra-cyclisch**: dingen die tegen-bewegen.\n  - Werkloosheidsuitkeringen stijgen bij neergang.\n  - Overheid investeert in neergang (Keynesiaans beleid).\n\n**Cito-feitje**:\n2 **achtereenvolgende kwartalen** met **negatieve BBP-groei** = officiële **recessie** *(technische definitie)*. Soms is de economie kort 1 kwartaal in min en dan weer omhoog — geen recessie.",
    svg: conjunctuurSvg(),
    checks: [
      {
        q: "Wat is **conjunctuur**?",
        options: ["Golfbeweging economie", "Belasting van bedrijf", "Soort munt", "BBP per hoofd"],
        answer: 0,
        wrongHints: [null, "Iets anders.", "Niet relevant.", "Iets anders."],
      },
      {
        q: "Wanneer is er officieel **recessie**?",
        options: ["2 kwartalen negatieve BBP-groei", "1 jaar negatief", "1 kwartaal negatief", "BBP onder 0"],
        answer: 0,
        wrongHints: [null, "Te streng.", "Te kort.", "Niet de definitie."],
      },
      {
        q: "Wat gebeurt bij **opgang**?",
        options: ["Lonen + prijzen stijgen, werkloosheid daalt", "Lonen dalen", "BBP daalt", "Bedrijven failliet"],
        answer: 0,
        wrongHints: [null, "Bij neergang.", "Bij neergang.", "Bij depressie."],
      },
      {
        q: "Welke crisis was in **2008**?",
        options: ["Financiële (bank-)crisis (Lehman)", "Olie-crisis", "COVID", "Dot-com"],
        answer: 0,
        wrongHints: [null, "1973.", "2020.", "2000-2002."],
      },
    ],
  },

  // STAP 3: Inflatie
  {
    title: "Inflatie + koopkracht",
    explanation:
      "**Inflatie** = **prijzen stijgen** in de economie. Eenheid: **% per jaar**.\n\n**Voorbeeld**:\n• 2023 inflatie NL: ~10% *(door energie-crisis)*.\n• 2024 inflatie NL: ~3%.\n• ECB-doel: **~2% per jaar** *(stabiel + lichte groei)*.\n\n**3 soorten inflatie** *(uit het hoofd!)*:\n\n**1. Vraag-inflatie** *(demand-pull)*:\n• Te veel **vraag** voor het aanbod.\n• Mensen willen kopen, voorraad raakt op → prijzen stijgen.\n• Bv. tijdens COVID-herstel: iedereen wilde reizen weer.\n\n**2. Kosten-inflatie** *(cost-push)*:\n• **Kosten** stijgen voor bedrijven → prijzen omhoog.\n• Bv. gas duurder → energie duurder → alles duurder.\n• Bv. lonen omhoog → producten omhoog.\n\n**3. Geïmporteerde inflatie**:\n• **Buitenland** wordt duurder → wij betalen meer voor invoer.\n• Bv. olie wereldwijd omhoog → benzine NL omhoog.\n\n**Koopkracht**:\n• **Koopkracht** = wat je voor je geld kunt kopen.\n• **Reële inkomen** = je loon **gecorrigeerd voor inflatie**.\n\nVoorbeeld:\n• Je loon stijgt 4%.\n• Inflatie is 3%.\n• **Koopkracht stijgt 1%** *(je kunt iets meer kopen)*.\n\n• Loon stijgt 2%, inflatie 5% → **koopkracht daalt 3%** *(armer in praktijk)*.\n\n**Hyperinflatie** *(>50% per maand)*:\nExtreme inflatie waarbij **geld bijna waardeloos** wordt.\n• **Duitsland 1923** (Weimar): brood kostte miljarden mark.\n• **Zimbabwe 2008**: 89,7 sextiljoen % inflatie per maand.\n• **Venezuela 2018**: 1.000.000% per jaar.\n• Oorzaak vaak: **geld bijdrukken** door overheid om schulden te betalen.\n\n**Deflatie** *(tegenovergesteld)*:\nPrijzen **dalen** → klinkt goed maar is **gevaarlijk**:\n• Mensen wachten met kopen (volgende maand goedkoper).\n• Bedrijven verkopen minder → failliet.\n• **Spiraal omlaag** mogelijk.\n• Japan kampt al decennia met deflatie.\n\n**Hoe inflatie meten?**\n**CPI** *(Consumer Price Index — Consumenten-prijsindex)*:\n• Mandje van **gebruikelijke producten** *(brood, melk, benzine, etc.)*.\n• Vergelijk prijs nu vs prijs jaar terug.\n• % verschil = inflatie.\n\nIn NL meet **CBS** dit maandelijks.\n\n**Cito-vragen**:\n*'Loon 5%, inflatie 3% — koopkracht?'* → +2%.\n*'Wat is hyperinflatie?'* → extreme inflatie >50% per maand.\n*'Wat is deflatie?'* → prijzen dalen.",
    checks: [
      {
        q: "Wat is **inflatie**?",
        options: ["Prijzen stijgen", "Prijzen dalen", "BBP daalt", "Lonen dalen"],
        answer: 0,
        wrongHints: [null, "Dat is deflatie.", "Niet inflatie.", "Niet inflatie."],
      },
      {
        q: "Welke is **vraag-inflatie**?",
        options: ["Te veel vraag, te weinig aanbod", "Hoge productiekosten", "Buitenland duurder", "Te veel geld"],
        answer: 0,
        wrongHints: [null, "Dat is kosten-inflatie.", "Dat is geïmporteerd.", "Indirect."],
      },
      {
        q: "**Loon 3%, inflatie 5%** — koopkracht?",
        options: ["Daalt 2%", "Stijgt 2%", "Gelijk", "Daalt 8%"],
        answer: 0,
        wrongHints: [null, "Verkeerde kant.", "Niet gelijk.", "Niet zo veel."],
      },
      {
        q: "Wat is **hyperinflatie**?",
        options: ["Extreme inflatie (>50% per maand)", "Beetje inflatie", "Deflatie", "Geen inflatie"],
        answer: 0,
        wrongHints: [null, "Te mild.", "Tegenovergesteld.", "Niet."],
      },
    ],
  },

  // STAP 4: Werkloosheid
  {
    title: "Werkloosheid — 4 soorten",
    explanation:
      "**Werkloos** = je hebt geen baan maar zoekt er wel een.\n\n**Werkloosheids-percentage** = werklozen ÷ beroepsbevolking × 100%.\n• NL meestal **3-5%** *(laag)*.\n• Crisis-periodes kan 8-10% worden.\n• Spanje had ~25% in 2013 *(crisis)*.\n\n**4 soorten werkloosheid** *(uit het hoofd!)*:\n\n**1. Frictiewerkloosheid** 🔄\n• **Tijdelijk** tussen 2 banen.\n• Bv. iemand stopt met baan A om B te zoeken; even tussen jobs.\n• **Normaal + niet zorgwekkend**.\n• Komt altijd voor (~1-2%).\n\n**2. Conjuncturele werkloosheid** 📉\n• Door **slechte economie** *(recessie)*.\n• Bedrijven ontslaan mensen omdat vraag wegvalt.\n• **Tijdelijk** — verdwijnt bij opgang.\n• Bv. 2008-2010 in NL na bankencrisis.\n\n**3. Structurele werkloosheid** 🏭\n• **Langdurig** door veranderingen in economie.\n• **Banen verdwijnen blijvend** — bv. door automatisering of verschuiving van industrieën.\n• Bv. kolenmijnen sluiten in Limburg (jaren '60-'70) — mijnwerkers werden structureel werkloos.\n• Bv. typistes werden vervangen door computers.\n• **Oplossing**: omscholing.\n\n**4. Seizoenswerkloosheid** ⛱️\n• **Seizoensgebonden** werk.\n• Bv. ijsverkopers 's winters werkloos.\n• Bv. seizoenswerkers landbouw.\n• Bv. ski-instructeurs in zomer.\n\n**Plus: verborgen werkloosheid**:\n• Mensen die **niet meer zoeken** *(ontmoedigd)*.\n• Niet in officiële cijfers maar wel feitelijk werkloos.\n\n**Hoe werkloosheid meten?**\n**CBS** in NL meet maandelijks via **enquête**.\n• Definitie: werkloos als je in afgelopen 4 weken hebt gezocht naar werk + kan binnen 2 weken beginnen.\n• Onder 12-uurs-bedrijfje? → werkloos volgens CBS.\n\n**WW-uitkering** *(werkloosheidsuitkering)*:\n• Recht op WW als je **onvrijwillig** werkloos bent + voldoende gewerkt.\n• Duur: 3-24 maanden afhankelijk van arbeidsverleden.\n• Hoogte: ~75% van laatste loon *(eerste 2 mnd)* en daarna 70%.\n• **Sociale zekerheid** — premies uit lonen.\n\n**Werkloosheid + samenleving**:\n• **Persoonlijk**: minder inkomen, minder zelfvertrouwen, mentale stress.\n• **Maatschappelijk**: minder belasting binnen, meer uitkeringen → overheid in min.\n• **Onderkomst**: meer mensen in armoede.\n\n**Vacatures vs werkloosheid**:\nSoms zijn er **veel vacatures + werkloosheid tegelijk** — mismatching:\n• Vacatures voor **techneuten + zorg** *(NL 2024: tekort)*.\n• Werklozen vooral lager opgeleid.\n• → **omscholing nodig**.\n\n**Cito-vragen**:\n*'Iemand die net stopt met baan A en zoekt baan B — welke werkloosheid?'* → frictie.\n*'Mijnwerkers nadat de mijnen sluiten — welke?'* → structureel.\n*'Ijsverkoper in januari — welke?'* → seizoens.\n*'Werkloosheid door recessie — welke?'* → conjunctureel.",
    checks: [
      {
        q: "**4 soorten werkloosheid** zijn?",
        options: ["Frictie / conjunctureel / structureel / seizoen", "Hoog / midden / laag / nul", "1F / 2F / 3F / 4F", "Geen 4 soorten"],
        answer: 0,
        wrongHints: [null, "Niet de classificatie.", "Niet werkloosheid.", "Wel 4 hoofdsoorten."],
      },
      {
        q: "Werkloosheid van **mijnwerkers nadat mijnen sluiten** — welke?",
        options: ["Structureel", "Frictie", "Conjunctureel", "Seizoen"],
        answer: 0,
        wrongHints: [null, "Frictie = tijdelijk tussen banen.", "Niet door recessie.", "Niet seizoens."],
      },
      {
        q: "Werkloosheid door **recessie** — welke?",
        options: ["Conjunctureel", "Frictie", "Structureel", "Seizoen"],
        answer: 0,
        wrongHints: [null, "Niet tussen banen.", "Niet blijvend.", "Niet seizoens."],
      },
      {
        q: "**WW-uitkering** is voor wie?",
        options: ["Onvrijwillig werklozen met arbeidsverleden", "Iedereen", "Studenten", "Pensionado's"],
        answer: 0,
        wrongHints: [null, "Niet iedereen.", "Studenten apart.", "Pensioen apart."],
      },
    ],
  },

  // STAP 5: Overheid + ECB
  {
    title: "Overheid + ECB — wat doen ze?",
    explanation:
      "Overheid + centrale banken kunnen **economisch beleid** voeren om conjunctuur of inflatie bij te sturen.\n\n**2 hoofdsoorten beleid**:\n\n**1. Begrotingsbeleid (fiscaal)** — door **overheid (regering)**:\n• **Belastingen** verhogen of verlagen.\n• **Uitgaven** verhogen of verlagen.\n\n**2. Monetair beleid** — door **centrale bank (ECB voor euro-zone)**:\n• **Rente** verhogen of verlagen.\n• **Geld bijdrukken** (Quantitative Easing) of geld inhouden.\n\n**Bij recessie (anti-cyclisch)**:\n• **Overheid**: belastingen omlaag + uitgaven omhoog *(infrastructuur, sociale zekerheid)* → mensen meer geld → meer consumeren → bedrijven verkopen meer.\n• **ECB**: rente omlaag → goedkoper lenen → meer investeren + kopen.\n• Risico: **staatsschuld** stijgt + inflatie kan komen.\n\n**Bij oververhitting (anti-cyclisch)**:\n• **Overheid**: belastingen omhoog + uitgaven omlaag → minder consumeren.\n• **ECB**: rente omhoog → lenen duurder → minder uitgeven.\n• Risico: kan recessie veroorzaken.\n\n**Pro-cyclisch beleid** *(meebewegend, vermijden!)*:\nAls overheid in recessie ook nog gaat besparen → versterkt de recessie. **Slecht idee**, hoewel soms politiek nodig (Griekenland 2010s — bezuinigingen tijdens crisis = meer ellende).\n\n**Keynesiaans beleid**:\nVernoemd naar **John Maynard Keynes** *(econoom 1883-1946)*:\n• In recessie: overheid moet **uitgeven** om vraag te creëren.\n• In opgang: overheid moet **sparen** om buffer op te bouwen.\n• Anti-cyclisch beleid is Keynesiaans.\n\n**ECB — Europese Centrale Bank**:\n• Hoofdzetel: **Frankfurt**.\n• Verantwoordelijk voor: **euro + monetair beleid** in eurozone (20 landen).\n• **President** (2024): **Christine Lagarde** *(Frans)*.\n• Hoofd-doel: **prijsstabiliteit** *(inflatie rond 2%)*.\n• **Onafhankelijk** van politiek → geen overheid die haar zin kan doordrukken.\n\n**ECB-rente**:\n• De rente die ECB rekent aan banken voor leningen.\n• Banken passen daarmee hun eigen rente aan voor consumenten.\n• 2021-2022: rente 0% → goedkoop lenen → veel inflatie kwam.\n• 2023: rente naar 4-4,5% om inflatie te remmen.\n• 2024: rente weer omlaag.\n\n**Quantitative Easing (QE)**:\n• ECB koopt **staatsschulden** op → drukt zo geld in de economie.\n• Tijdens financiële crisis + COVID gebruikt.\n• Risico: hoge inflatie als overdaad.\n\n**Cito-stappenplan — wat doet overheid bij...**:\n*'... recessie?'* → belastingen omlaag + uitgaven omhoog.\n*'... oververhitting?'* → belastingen omhoog + uitgaven omlaag.\n*'... hoge inflatie?'* → ECB-rente omhoog.\n*'... deflatie?'* → ECB-rente omlaag, QE.\n\n**Begrotingstekort + staatsschuld**:\n• **Tekort** = jaar waarin overheid meer uitgeeft dan binnen krijgt.\n• **Staatsschuld** = totaal van alle tekorten samen.\n• **EU-norm**: tekort max 3% BBP. Staatsschuld max 60% BBP *(Maastricht-criteria)*.\n• NL in 2024: tekort ~2%, schuld ~45% — binnen norm.\n• Veel landen overschrijden: Italië (135%), Frankrijk (110%), Griekenland (160%).\n\n**Cito-feitje**:\nDe **ECB-president** wordt voor 8 jaar benoemd, NIET herkozen. Onafhankelijkheid groot. Eerste was **Wim Duisenberg** *(NL)*.",
    checks: [
      {
        q: "Wat is **monetair beleid**?",
        options: ["Door centrale bank — rente + geld", "Door overheid — belasting", "Door bedrijven", "Particulier"],
        answer: 0,
        wrongHints: [null, "Dat is begrotingsbeleid.", "Niet beleid-makers.", "Niet beleid."],
      },
      {
        q: "Wat doet overheid bij **recessie**?",
        options: ["Belasting omlaag + uitgaven omhoog", "Belasting omhoog", "Beide omlaag", "Niets"],
        answer: 0,
        wrongHints: [null, "Verkeerde richting.", "Helpt niet.", "Wel iets — anti-cyclisch."],
      },
      {
        q: "Welke is **Keynesiaans**?",
        options: ["Anti-cyclisch (regering springt in bij recessie)", "Geen overheid", "Pro-cyclisch", "Alleen rente"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Anti-Keynesiaans.", "Niet alleen rente."],
      },
      {
        q: "Wat is **EU-norm** voor staatsschuld?",
        options: ["Max 60% BBP", "Max 30%", "Max 100%", "Geen norm"],
        answer: 0,
        wrongHints: [null, "Te streng.", "Te ruim.", "Wel norm."],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — macro-economie mix",
    explanation:
      "Mix-toets in CSE-stijl. Door elkaar: BBP, conjunctuur, inflatie, werkloosheid, beleid.\n\nVeel succes!",
    checks: [
      {
        q: "BBP staat voor?",
        options: ["Bruto Binnenlands Product", "Bedrijfs Beleid Plan", "Begroting Boek Politie", "Bank Bank Product"],
        answer: 0,
        wrongHints: [null, "Bestaat niet.", "Bestaat niet.", "Bestaat niet."],
      },
      {
        q: "Welke is een **conjunctuurfase**?",
        options: ["Piek", "Inflatie", "Werkloosheid", "Belasting"],
        answer: 0,
        wrongHints: [null, "Andersoortig fenomeen.", "Andersoortig.", "Andersoortig."],
      },
      {
        q: "**ECB-doel** voor inflatie?",
        options: ["~2%", "0%", "5%", "10%"],
        answer: 0,
        wrongHints: [null, "Deflatie risico.", "Te hoog.", "Veel te hoog."],
      },
      {
        q: "Werkloosheid van **ijsverkoper in januari** — welk soort?",
        options: ["Seizoens", "Frictie", "Conjunctureel", "Structureel"],
        answer: 0,
        wrongHints: [null, "Niet tussen banen.", "Niet door recessie.", "Niet blijvend weg."],
      },
      {
        q: "Bij **hoge inflatie** wat doet ECB?",
        options: ["Rente omhoog", "Rente omlaag", "Geld bijdrukken", "Niets"],
        answer: 0,
        wrongHints: [null, "Andersom.", "Verergert inflatie.", "Wel iets."],
      },
      {
        q: "**Loon 4%, inflatie 6%** — koopkracht?",
        options: ["Daalt 2%", "Stijgt 2%", "Gelijk", "Daalt 10%"],
        answer: 0,
        wrongHints: [null, "Verkeerde kant.", "Niet gelijk.", "Niet zo veel."],
      },
      {
        q: "Welke organisatie meet **inflatie in NL**?",
        options: ["CBS (Centraal Bureau voor Statistiek)", "ECB", "Tweede Kamer", "ANWB"],
        answer: 0,
        wrongHints: [null, "Eurozone-bank.", "Politiek.", "Auto-club."],
      },
      {
        q: "Wat is **deflatie**?",
        options: ["Prijzen dalen", "Prijzen stijgen", "Prijzen gelijk", "Hyperinflatie"],
        answer: 0,
        wrongHints: [null, "Inflatie.", "Geen verandering.", "Extreem stijgen."],
      },
      {
        q: "**Werkloosheid door bankcrisis 2008** — welke?",
        options: ["Conjunctureel", "Structureel", "Frictie", "Seizoens"],
        answer: 0,
        wrongHints: [null, "Niet blijvend weg.", "Niet tussen banen.", "Niet seizoensgebonden."],
      },
      {
        q: "**Mijnwerker na sluiting mijnen** — welke werkloosheid?",
        options: ["Structureel", "Conjunctureel", "Frictie", "Seizoens"],
        answer: 0,
        wrongHints: [null, "Niet tijdelijk.", "Niet tussen banen.", "Niet seizoensgebonden."],
      },
      {
        q: "Bij **recessie** wat doet de overheid vaak (Keynesiaans)?",
        options: ["Meer uitgeven", "Minder uitgeven", "Niets", "Bedrijven sluiten"],
        answer: 0,
        wrongHints: [null, "Verergert.", "Geen actie helpt niet.", "Niet."],
      },
      {
        q: "**ECB-rente verhogen** — gevolg?",
        options: ["Lenen duurder, inflatie remmen", "Lenen goedkoper", "Inflatie omhoog", "Niets"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Wel iets."],
      },
      {
        q: "Een **stijgende lijn op BBP-grafiek over jaar 2024-2025** wijst op?",
        options: ["Hoogconjunctuur / herstel", "Recessie", "Inflatie", "Werkloosheid"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Andersoortig.", "Andersoortig."],
      },
      {
        q: "Wat is **stagflatie**?",
        options: ["Hoge inflatie + lage groei + werkloosheid tegelijk", "Hoge groei", "Lage rente", "Recessie alleen"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Geen relevant.", "Geen volledige term."],
      },
      {
        q: "Wat is een **kerncijfer voor economische gezondheid**?",
        options: ["BBP-groei + inflatie + werkloosheid", "Alleen BBP", "Alleen inflatie", "Alleen bevolkingsaantal"],
        answer: 0,
        wrongHints: [null, "Incomplete.", "Incomplete.", "Niet primair economisch."],
      },
      {
        q: "**Hyperinflatie 1923 Duitsland** — wat gebeurde er?",
        options: ["Geld werd bijna waardeloos", "Inflatie was laag", "Iedereen rijk", "Geen relevant"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Wel relevant."],
      },
      {
        q: "**Krimp BBP 2 kwartalen achter elkaar** = ___?",
        options: ["Recessie", "Hoogconjunctuur", "Stabiliteit", "Boom"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — daling.", "Tegenovergesteld."],
      },
      {
        q: "Een **rente-verlaging** door ECB wordt vaak gedaan bij ___?",
        options: ["Recessie / lage groei", "Hoge inflatie", "Hoogconjunctuur", "Geen reden"],
        answer: 0,
        wrongHints: [null, "Andersom.", "Andersom.", "Wel reden."],
      },
      {
        q: "**Conjunctuur-cyclus** duurt typisch ___?",
        options: ["7-10 jaar", "1 jaar", "100 jaar", "Geen vaste lengte"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Te lang.", "Wel typische lengte."],
      },
      {
        q: "**Open vraag**: hoeveel % is **3% nominale loongroei − 5% inflatie** voor koopkracht?",
        kind: "open",
        acceptedAnswers: ["-2", "-2%", "−2", "−2%"],
        explanation: "3% − 5% = −2%. Koopkracht daalt 2%.",
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const bbpConjunctuurEconomie = {
  id: "bbp-conjunctuur-economie",
  title: "BBP, conjunctuur, inflatie (klas 4-5)",
  emoji: "📊",
  level: "klas4-5",
  subject: "economie",
  referentieNiveau: "3F",
  sloThema: "Economie — macro-economie",
  prerequisites: [
    { id: "pincode-inkomen-welvaart", title: "Inkomen + welvaart", niveau: "2F" },
    { id: "pincode-overheid", title: "Overheid + economie", niveau: "2F" },
  ],
  intro:
    "Macro-economie voor klas 4-5 — BBP (totale productie, nominaal vs reëel), conjunctuur (opgang/piek/recessie/dal, 2 kwartalen rule), inflatie (vraag/kosten, hyperinflatie Weimar/Zimbabwe, koopkracht), werkloosheid (4 soorten frictie/conjunctureel/structureel/seizoens), beleid (Keynes anti-cyclisch, ECB-rente, Maastricht-normen). ~15 min.",
  triggerKeywords: [
    "BBP", "GDP", "conjunctuur", "recessie", "depressie",
    "inflatie", "deflatie", "hyperinflatie", "koopkracht",
    "werkloosheid", "frictie", "structureel", "seizoens",
    "ECB", "monetair beleid", "Keynes",
  ],
  chapters,
  steps,
};

export default bbpConjunctuurEconomie;
