// Leerpad: Stoffen + mengsels + scheidingsmethoden — klas 1-2 scheikunde.
// Onderdeel scheikunde-basis. Referentieniveau 2F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  zuiver: "#80cbc4",
  mengsel: "#ffd54f",
  filter: "#ff8a65",
  pictogram: "#ef5350",
  highlight: "#42a5f5",
};

const stepEmojis = ["⚗️", "💧", "🔬", "📊", "⚠️", "🏆"];

const chapters = [
  { letter: "A", title: "Pure stof vs mengsel", emoji: "⚗️", from: 0, to: 0 },
  { letter: "B", title: "Soorten mengsels", emoji: "💧", from: 1, to: 1 },
  { letter: "C", title: "Scheidingsmethoden", emoji: "🔬", from: 2, to: 2 },
  { letter: "D", title: "Eigenschappen van stoffen", emoji: "📊", from: 3, to: 3 },
  { letter: "E", title: "Pictogrammen + veiligheid", emoji: "⚠️", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function pureMengselSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Pure stof versus mengsel</text>

<rect x="20" y="45" width="130" height="105" rx="8" fill="rgba(128,203,196,0.15)" stroke="${COLORS.zuiver}" stroke-width="1.5"/>
<text x="85" y="65" text-anchor="middle" fill="${COLORS.zuiver}" font-size="12" font-family="Arial" font-weight="bold">PURE STOF</text>
${[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
    const x = 35 + (i % 3) * 30;
    const y = 80 + Math.floor(i / 3) * 22;
    return `<circle cx="${x}" cy="${y}" r="7" fill="${COLORS.zuiver}"/>`;
  }).join("")}
<text x="85" y="142" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">alle deeltjes gelijk</text>

<rect x="170" y="45" width="130" height="105" rx="8" fill="rgba(255,213,79,0.15)" stroke="${COLORS.mengsel}" stroke-width="1.5"/>
<text x="235" y="65" text-anchor="middle" fill="${COLORS.mengsel}" font-size="12" font-family="Arial" font-weight="bold">MENGSEL</text>
${[
    { x: 185, y: 80, c: COLORS.mengsel },
    { x: 215, y: 80, c: COLORS.curve2 },
    { x: 245, y: 80, c: COLORS.mengsel },
    { x: 275, y: 80, c: COLORS.filter },
    { x: 200, y: 102, c: COLORS.curve2 },
    { x: 230, y: 102, c: COLORS.filter },
    { x: 260, y: 102, c: COLORS.mengsel },
    { x: 215, y: 124, c: COLORS.filter },
    { x: 245, y: 124, c: COLORS.curve2 },
  ].map((d) => `<circle cx="${d.x}" cy="${d.y}" r="7" fill="${d.c}"/>`).join("")}
<text x="235" y="142" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">verschillende deeltjes</text>

<text x="160" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Pure stof = 1 type · Mengsel = 2+ types door elkaar</text>
</svg>`;
}

const steps = [
  // STAP 1: Pure stof vs mengsel
  {
    title: "Pure stof vs mengsel",
    explanation:
      "**Alle materie** is opgebouwd uit **stoffen**. Maar je hebt 2 hoofdsoorten:\n\n**1. Pure stof (zuivere stof)** ⚛️\n• Bevat **maar 1 type deeltje**.\n• Heeft **vaste eigenschappen** *(smeltpunt, kookpunt, dichtheid altijd hetzelfde)*.\n• Kan **element** zijn *(koper, zuurstof, ijzer)* of **verbinding** *(water, zout, suiker)*.\n\n**Voorbeelden pure stof**:\n• **IJzer (Fe)** — element.\n• **Zuurstof (O₂)** — element.\n• **Water (H₂O)** — verbinding van H en O.\n• **Zout (NaCl)** — verbinding van Na en Cl.\n• **Suiker (C₁₂H₂₂O₁₁)** — verbinding van C, H, O.\n\n**2. Mengsel** 🥗\n• Bevat **2 of meer pure stoffen** door elkaar.\n• **Geen vaste verhouding** — kun je meer of minder van iets doen.\n• **Geen vast smelt-/kookpunt**.\n• De afzonderlijke stoffen behouden hun eigenschappen.\n\n**Voorbeelden mengsel**:\n• **Zoutwater** — water + zout (kun je meer/minder zout doen).\n• **Lucht** — N₂ + O₂ + CO₂ + edelgassen.\n• **Brons** — mengsel van koper + tin.\n• **Soep** — water + groente + zout + ...\n• **Bloed** — water + cellen + eiwitten.\n\n**Hoe weet je of iets een mengsel is?**\n• Je kunt het meestal **scheiden** in verschillende stoffen.\n• Lucht → afkoelen → verschillende gassen apart.\n• Zoutwater → laten verdampen → zout blijft achter.\n\n**Hoe weet je of het een pure stof is?**\n• Heeft **één smeltpunt + één kookpunt**.\n• Bv. water kookt altijd op 100°C en bevriest op 0°C *(bij 1 atm druk)*.\n\n**Element vs verbinding**:\n• **Element** = simpelste pure stof, kan chemisch **niet verder ontleed** worden *(ijzer, goud, koper, zuurstof)*.\n• **Verbinding** = 2+ elementen aan elkaar gebonden in vaste verhouding *(water = H + O in verhouding 2:1)*.\n\n**Periodiek systeem**:\n• Lijst van **~118 elementen**.\n• Elk element heeft een symbool *(Fe = ijzer, O = zuurstof)*.\n• De **eerste 20 elementen** leer je vaak als eerste.\n\n**Toets-truc — onderscheid mengsel/pure stof**:\n• Bestaat uit 1 ding → pure stof.\n• Door elkaar van verschillende → mengsel.\n• Kun je weer scheiden? → mengsel.",
    svg: pureMengselSvg(),
    checks: [
      {
        q: "Wat is een **pure stof**?",
        options: ["Bevat maar 1 soort deeltje", "Mengsel van veel dingen", "Bestaat uit maar 1 soort atoom", "Is helder en kleurloos"],
        answer: 0,
        wrongHints: [null, "Een mengsel bevat meerdere soorten deeltjes door elkaar. Is dat puur?", "Water bestaat uit H en O en is toch een pure stof. Gaat het om soorten atomen of om soorten deeltjes?", "Zoutwater is helder maar een mengsel, en koper is niet kleurloos. Waar gaat het dan om?"],
      },
      {
        q: "Welke is een **pure stof**?",
        options: ["Gedestilleerd water", "Kraanwater", "Lucht", "Brons"],
        answer: 0,
        wrongHints: [null, "In kraanwater zitten opgeloste kalk en zouten. Is dat één soort deeltje?", "Lucht bestaat uit stikstof, zuurstof en nog meer gassen. Is dat één stof?", "Brons bevat koperatomen en tinatomen door elkaar. Is dat één soort deeltje?"],
      },
      {
        q: "Welke is een **mengsel**?",
        options: ["Zoutwater", "Keukenzout", "Zuiver water", "Koolzuurgas"],
        answer: 0,
        wrongHints: [null, "In keukenzout zitten natrium en chloor vast aan elkaar in één stof. Is dat een mengsel?", "Zuiver water bevat alleen H₂O-moleculen. Is dat een mengsel?", "Koolzuurgas is CO₂: één soort molecuul. Is dat een mengsel?"],
      },
      {
        q: "Verschil **element** en **verbinding**?",
        options: ["Element kun je niet ontleden, verbinding wel", "Element is een mengsel, verbinding niet", "Element is vloeibaar, verbinding vast", "Element is groter dan een verbinding"],
        answer: 0,
        wrongHints: [null, "Elementen en verbindingen zijn allebei zuivere stoffen. Een mengsel bestaat uit meerdere stoffen.", "Niet — het gaat niet om vast of vloeibaar.", "Een goudklompje kan groot of klein zijn. Zegt grootte iets over wat voor stof het is?"],
      },
    ],
  },

  // STAP 2: Soorten mengsels
  {
    title: "Soorten mengsels",
    explanation:
      "Mengsels zijn er in **verschillende soorten**, afhankelijk van wat er gemengd is.\n\n**1. Oplossing** *(opgelost in vloeistof, helder)*:\n• 1 stof **opgelost** in een andere.\n• **Niet zichtbaar** als 2 lagen.\n• **Helder/transparant**.\n• Voorbeeld: **zoutwater, suiker in thee, koolzuur in frisdrank**.\n\nTermen:\n• **Oplosmiddel** = de vloeistof waarin opgelost wordt *(water)*.\n• **Opgeloste stof** = wat opgelost wordt *(zout, suiker)*.\n• **Oplosbaarheid** = hoeveel je kunt oplossen *(beperkt)*.\n\n**2. Suspensie** *(vaste deeltjes in vloeistof, troebel)*:\n• Kleine deeltjes **zweven** in vloeistof.\n• **Troebel** uiterlijk.\n• Zinkt na verloop van tijd.\n• Voorbeeld: **modderwater, sinaasappelsap met vruchtvlees, verf**.\n\n**3. Emulsie** *(vloeistof in vloeistof, melkachtig)*:\n• Twee **vloeistoffen** die niet mengen *(olie + water)*.\n• Kleine druppels van de een in de ander.\n• Voorbeeld: **melk** *(vet-druppels in water)*, **mayonaise** *(olie in eigeel)*.\n\n**4. Schuim** *(gas in vloeistof)*:\n• Belletjes gas vast in vloeistof.\n• Voorbeeld: **slagroom, bierschuim, zeepschuim, brood-deeg**.\n\n**5. Aerosol** *(deeltjes in gas)*:\n• Kleine deeltjes zwevend in lucht.\n• Voorbeeld: **mist** *(water in lucht)*, **rook** *(roetdeeltjes in lucht)*, **deodorant-spray**.\n\n**6. Legering** *(metalen door elkaar)*:\n• Mengsel van metalen.\n• Voorbeeld: **brons** (koper+tin), **staal** (ijzer+koolstof), **messing** (koper+zink).\n\n**Homogeen vs heterogeen**:\n• **Homogeen mengsel** = ziet er overal hetzelfde uit *(zoutwater)*.\n• **Heterogeen mengsel** = ziet er verschillend uit op verschillende plekken *(modderwater, soep)*.\n\n**toetsvraag**:\n*'Welk soort mengsel is melk?'* → emulsie *(vet in water)*.\n*'Welk soort mengsel is mist?'* → aerosol *(water-druppels in lucht)*.\n*'Welk soort mengsel is zoutwater?'* → oplossing *(zout opgelost in water)*.\n\n**Verzadigde oplossing**:\nAls je de **maximale hoeveelheid** stof hebt opgelost — meer kan niet *(zout blijft op bodem liggen)*.\n\n**Oplosbaarheid** hangt af van:\n• **Temperatuur** *(warmer water lost meer suiker op)*.\n• **Aard van stof** *(zout lost makkelijk op, zand niet)*.",
    checks: [
      {
        q: "Wat is een **oplossing**?",
        options: ["Deeltjes onzichtbaar verdeeld in vloeistof", "Vaste deeltjes zweven in vloeistof", "Twee vloeistoffen die niet mengen", "Gasbelletjes in een vloeistof"],
        answer: 0,
        wrongHints: [null, "Zwevende vaste deeltjes maken een vloeistof troebel. Is suikerwater troebel of helder?", "Vloeistoffen die niet mengen vormen druppels, zoals olie in water. Zie je druppels in suikerwater?", "Gasbelletjes in een vloeistof maken schuim. Is suikerwater schuimig?"],
      },
      {
        q: "Melk is een ... ?",
        options: ["Emulsie", "Oplossing", "Suspensie", "Pure stof"],
        answer: 0,
        wrongHints: [null, "Een oplossing is helder. Kun je door melk heen kijken?", "Niet — zweven er vaste deeltjes of vetdruppels in melk?", "In melk zitten water, vet en eiwit. Is dat één soort deeltje?"],
      },
      {
        q: "Wat is **brons**?",
        options: ["Legering", "Pure stof", "Emulsie", "Verbinding"],
        answer: 0,
        wrongHints: [null, "Brons maak je van koper en tin. Is dat één soort deeltje?", "Een emulsie bestaat uit twee vloeistoffen. Is brons vloeibaar?", "In een verbinding zitten atomen vast in een vaste verhouding. Kun je bij brons de hoeveelheid tin vrij kiezen?"],
      },
      {
        q: "Wat is **mist**?",
        options: ["Aerosol", "Oplossing", "Emulsie", "Schuim"],
        answer: 0,
        wrongHints: [null, "Een oplossing is een helder mengsel in een vloeistof. Is mist een vloeistof, of lucht met druppeltjes?", "Een emulsie bestaat uit twee vloeistoffen. Waar zweven de druppeltjes van mist in?", "Bij schuim zit gas in een vloeistof. Is het bij mist zo, of juist andersom?"],
      },
    ],
  },

  // STAP 3: Scheidingsmethoden
  {
    title: "Scheidingsmethoden — hoe haal je stoffen uit elkaar?",
    explanation:
      "Om mengsels te **scheiden** in pure stoffen, gebruik je een **scheidingsmethode** die past bij de **eigenschappen** van de stoffen.\n\n**1. Filtreren** 🪟\n• Voor mengsels van **vaste stof in vloeistof** *(suspensie)*.\n• Door **filterpapier** of zeef.\n• Kleine deeltjes gaan door, grote blijven achter.\n• Voorbeeld: **koffie zetten** *(koffiedik blijft in filter, koffie loopt door)*.\n\n**2. Bezinken** ⬇️\n• Voor mengsels waar **vast deeltje zwaarder** is dan vloeistof.\n• Even **laten staan** → vaste deeltjes zakken naar onder.\n• Bovenste vloeistof afschenken.\n• Voorbeeld: **modderwater laten staan**, klei zinkt.\n\n**3. Centrifugeren** ⚪\n• Snel **ronddraaien** in een centrifuge.\n• Zwaardere stoffen gaan naar buiten *(bodem)*.\n• Versneld bezinken.\n• Voorbeeld: **bloed scheiden** *(rode bloedcellen onder, plasma boven)*.\n\n**4. Verdampen / indampen** ☀️\n• Voor **opgeloste vaste stof in vloeistof**.\n• Vloeistof **verdampt** weg → vaste stof blijft achter.\n• Voorbeeld: **zout uit zeewater halen** *(zoutpannen in Frankrijk, Israël)*.\n\n**5. Destilleren** 🔥\n• Voor mengsels van **vloeistoffen** met verschillende kookpunten.\n• Verwarm — laagst kokende stof verdampt eerst.\n• Damp leiden door koele buis → condenseert.\n• Voorbeeld: **alcohol uit wijn**, **whisky maken**, **water zuiveren** uit zeewater *(omgekeerde osmose ook)*.\n\n**6. Extractie** 🌿\n• Een stof uit een mengsel **'trekken'** met oplosmiddel.\n• Voorbeeld: **thee zetten** *(theeblaadjes geven smaakstoffen af aan water)*.\n• **Cafeïne uit koffie**.\n\n**7. Chromatografie** 🌈\n• Voor scheiden van **kleurstoffen** of moleculen.\n• Inkt op papier zetten + water erlangs laten lopen.\n• Verschillende kleurstoffen lopen verschillende afstanden.\n• Voorbeeld: zwarte inkt blijkt mengsel van kleuren *(rood + blauw + ...)*.\n\n**Hoe kies je de methode?**\n• Vaste in vloeistof + niet opgelost → **filtreren / bezinken**.\n• Vaste opgelost in vloeistof → **indampen**.\n• 2 vloeistoffen → **destilleren**.\n• Stof uit groep halen → **extractie**.\n• Kleur-mengsels → **chromatografie**.\n\n**toetsvraag**:\n*'Hoe haal je zand uit water?'* → filtreren.\n*'Hoe haal je zout uit zeewater?'* → indampen.\n*'Hoe haal je alcohol uit wijn?'* → destilleren.\n\n**Belangrijke termen**:\n• **Residu** = wat achterblijft in filter.\n• **Filtraat** = wat door filter loopt.\n• **Destillaat** = wat in opvangbak komt na destilleren.",
    checks: [
      {
        q: "Hoe haal je **zand uit water**?",
        options: ["Filtreren", "Indampen", "Destilleren", "Chromatografie"],
        answer: 0,
        wrongHints: [null, "Bij indampen moet al het water verdampen, en het opgeloste zout blijft bij het zand. Kan het sneller en schoner?", "Bij destilleren verhit je tot de vloeistof kookt. Is dat nodig voor korrels die je kunt tegenhouden?", "Chromatografie werkt met papier en heel kleine hoeveelheden. Is dat handig voor een emmer zand en water?"],
      },
      {
        q: "Hoe haal je **zout uit zeewater**?",
        options: ["Indampen", "Filtreren", "Bezinken", "Chromatografie"],
        answer: 0,
        wrongHints: [null, "Opgelost zout gaat dwars door een filter. Wat moet er weg om het zout over te houden?", "Opgelost zout zakt niet vanzelf naar de bodem.", "Met chromatografie haal je kleine beetjes stof uit elkaar op papier. Krijg je zo een zak zout?"],
      },
      {
        q: "Hoe haal je **alcohol uit wijn**?",
        options: ["Destilleren", "Indampen", "Filtreren", "Bezinken"],
        answer: 0,
        wrongHints: [null, "Bij indampen verdwijnt de alcohol gewoon de lucht in. Hoe vang je die damp op?", "Alcohol is opgelost in de wijn. Houdt een filter opgeloste stoffen tegen?", "Zakt alcohol vanzelf naar de bodem van een fles wijn?"],
        uitlegPad: {
          stappen: [
            { titel: "Destillatie werkt op kookpunt", tekst: "Alcohol kookt bij 78°C, water bij 100°C. Verwarm tot ~80°C: alcohol verdampt eerst, water blijft." },
            { titel: "Condensatie", tekst: "Alcohol-damp door koude buis → wordt weer vloeibaar (destillaat). Veel sterkere alcohol in opvangbak." },
          ],
          woorden: [{ woord: "destillatie", uitleg: "Scheidingsmethode op basis van verschillende kookpunten." }, { woord: "kookpunt", uitleg: "Temperatuur waarbij vloeistof gas wordt." }],
          theorie: "Destilleren werkt als 2 vloeistoffen verschillende kookpunten hebben.",
          voorbeelden: [{ type: "stap", tekst: "Alcohol-water: alcohol kookt op 78°C, water op 100°C. Verschil van 22°C is genoeg." }],
          basiskennis: [{ onderwerp: "Niet voor zelf-thuis", uitleg: "Alcohol distilleren thuis is verboden — vergunning nodig." }],
          niveaus: {
            basis: "Destilleren.",
            simpeler: "Alcohol kookt eerder dan water (78°C vs 100°C). Verwarmen → alcohol-damp eerst → opvangen → sterke alcohol.",
            nogSimpeler: "Destilleren",
          },
        },
      },
      {
        q: "Wat is **chromatografie** voor?",
        options: ["Kleurstoffen scheiden", "Zout uit water halen", "Alcohol destilleren", "Vaste stof filteren"],
        answer: 0,
        wrongHints: [null, "Voor zout uit water heb je geen papier en loopvloeistof nodig. Wat zie je als banden op het papier verschijnen?", "Alcohol uit wijn haal je met verhitten. Gebruik je bij chromatografie warmte?", "Korrels tegenhouden lukt met een eenvoudiger middel. Wat schuift er bij chromatografie over het papier omhoog?"],
      },
    ],
  },

  // STAP 4: Eigenschappen
  {
    title: "Eigenschappen van stoffen",
    explanation:
      "Elke pure stof heeft **vaste eigenschappen** die je kunt meten.\n\n**Fysische eigenschappen** *(zonder stof te veranderen)*:\n\n**1. Smeltpunt** — temperatuur waarbij vast → vloeibaar.\n• IJs/water: 0°C.\n• IJzer: 1538°C.\n• Goud: 1064°C.\n• Suiker: ~186°C.\n\n**2. Kookpunt** — temperatuur waarbij vloeibaar → gas.\n• Water: 100°C *(bij 1 atm)*.\n• Alcohol (ethanol): 78°C.\n• Olie: ~300°C.\n\n**3. Dichtheid** = massa per volume.\n• Eenheid: **g/cm³** of **kg/m³**.\n• Water: **1 g/cm³** = 1000 kg/m³.\n• IJzer: 7,9 g/cm³ *(zwaarder dan water → zinkt)*.\n• Olie: ~0,9 g/cm³ *(lichter dan water → drijft)*.\n• Kwik: 13,5 g/cm³.\n\n**4. Kleur** — bv. goud is geel, koper is roodbruin.\n\n**5. Geur** — bv. ammonia stinkt, suiker geurloos.\n\n**6. Hardheid** — diamant is hardst, kalksteen zacht.\n\n**7. Geleidbaarheid**:\n• Metalen geleiden goed elektriciteit + warmte.\n• Plastic + hout: slechte geleiders *(isolatoren)*.\n\n**8. Oplosbaarheid** — hoeveel oplost in 100 ml water.\n• Zout: ~36 g/100 ml.\n• Suiker: ~200 g/100 ml *(meer)*.\n• Zand: bijna 0.\n\n**Toets-truc — eigenschappen meten**:\n• **Dichtheid** = massa ÷ volume.\n• Voorbeeld: 50 g stof neemt 25 cm³ in → dichtheid = 50/25 = 2 g/cm³.\n\n**Chemische eigenschappen** *(stof wordt anders)*:\n• **Brandbaarheid** — papier brandt, water niet.\n• **Roesten** — ijzer roest in vochtige lucht.\n• **Zuur-base** — citroensap is zuur, zeep base.\n• **Reageren** — stoffen reageren met andere stoffen.\n\n**Fasen-overgangen** *(zie ook 'toestand-stoffen' pad)*:\n• Smelten: vast → vloeibaar.\n• Stollen: vloeibaar → vast.\n• Verdampen: vloeibaar → gas.\n• Condenseren: gas → vloeibaar.\n• Sublimatie: vast → gas direct *(zonder vloeibaar)*.\n\n**toetsvraag**:\n*'Hoe weet je of iets ijzer is?'*\n→ Magnetisch (alleen ijzer + kobalt + nikkel) + dichtheid 7,9 g/cm³.\n\n*'Olie drijft op water — waarom?'*\n→ Olie heeft lagere dichtheid.\n\n**toetsvraag voorbeeld**:\n*'Stof X: kookpunt 78°C, geur alcohol-achtig, brandt makkelijk. Welke stof?'*\n→ Ethanol (alcohol).\n\n*'Stof Y: zwaar metaal, smeltpunt 1538°C, magnetisch.'*\n→ IJzer.",
    checks: [
      {
        q: "Wat is **dichtheid**?",
        options: ["Massa per volume", "Massa van een voorwerp", "Volume van een voorwerp", "Volume per massa"],
        answer: 0,
        wrongHints: [null, "Een grote en een kleine ijzeren spijker hebben een andere massa, maar dezelfde dichtheid. Waardoor deel je nog?", "Een groot blok kurk is lichter dan een klein blokje lood. Is volume alleen dan genoeg?", "Je deelt wel, maar welke kant op? Wat staat er boven de deelstreep in g/cm³?"],
      },
      {
        q: "Dichtheid water = ?",
        options: ["1 g/cm³", "7,9 g/cm³", "0,5 g/cm³", "10 g/cm³"],
        answer: 0,
        wrongHints: [null, "7,9 g/cm³ hoort bij ijzer. Is water net zo zwaar als ijzer?", "Olie heeft ongeveer 0,9 g/cm³ en drijft op water. Kan water dan lichter zijn dan olie?", "10 g/cm³ is zwaarder dan ijzer. Hoeveel weegt een liter (1000 cm³) water ongeveer?"],
      },
      {
        q: "Olie drijft op water omdat ... ?",
        options: ["Olie een lagere dichtheid heeft", "Olie dikker en stroperiger is", "Olie meer luchtbelletjes bevat", "Olie een hoger kookpunt heeft"],
        answer: 0,
        wrongHints: [null, "Stroop is ook dik, maar zakt naar de bodem. Gaat het om dikte?", "Ook olie zonder belletjes drijft. Vergelijk eens wat 1 cm³ olie en 1 cm³ water wegen.", "Het kookpunt zegt iets over verwarmen. Wat zegt het over drijven of zinken?"],
      },
      {
        q: "Welke is een **chemische** eigenschap?",
        options: ["Brandbaarheid", "Dichtheid", "Smeltpunt", "Kleur"],
        answer: 0,
        wrongHints: [null, "Dichtheid meet je zonder de stof te veranderen — bij welke eigenschap ontstaat een níéuwe stof?", "Na smelten is het nog dezelfde stof (ijs → water) — bij welke eigenschap verandert de stof zelf?", "Kleur zie je zonder iets te doen — chemisch = de stof verandert erbij. Welke eigenschap merk je pas als de stof verandert in een andere stof?"],
      },
    ],
  },

  // STAP 5: Pictogrammen
  {
    title: "Pictogrammen + chemische veiligheid",
    explanation:
      "Bij scheikundige stoffen zie je **gevaarssymbolen** *(pictogrammen)*. Belangrijk om te kennen voor veiligheid.\n\n**De 9 gevaarssymbolen (GHS — wereldwijd)**:\n\n**1. 💥 Explosief** *(explosion)*\n• Stof kan exploderen.\n• Voorbeeld: vuurwerk, springstof.\n\n**2. 🔥 Ontvlambaar** *(flame)*\n• Brandt makkelijk.\n• Voorbeeld: benzine, alcohol, gas.\n\n**3. 🟢🔥 Brandbevorderend** *(oxidizing)*\n• Maakt brand sneller.\n• Voorbeeld: zuurstof in fles, sommige peroxides.\n\n**4. 🫧 Gasdruk** *(gas cylinder)*\n• Gas onder druk.\n• Voorbeeld: gasfles, spray-bus.\n\n**5. ☠️ Acuut giftig** *(skull and crossbones)*\n• Klein beetje al dodelijk.\n• Voorbeeld: cyanide, kwik.\n\n**6. ⚠️ Irriterend / schadelijk** *(uitroepteken)*\n• Niet acuut dodelijk maar wel schadelijk.\n• Voorbeeld: schoonmaakmiddelen, bleekmiddel-licht.\n\n**7. ⚠️🫁 Schadelijk lange termijn** *(person)*\n• Kanker-verwekkend, vergroeing.\n• Voorbeeld: asbest, sommige verfstoffen.\n\n**8. 🧪 Corrosief** *(corrosion)*\n• Vreet huid/materiaal weg.\n• Voorbeeld: zoutzuur, gootsteenontstopper, accuzuur.\n\n**9. 🐟 Milieugevaarlijk** *(dead fish/tree)*\n• Schadelijk voor water/dier/plant.\n• Voorbeeld: pesticiden.\n\n**Veiligheidsregels in lab**:\n• **Veiligheidsbril** dragen.\n• **Witte jas** *(beschermt kleren)*.\n• Geen eten/drinken in lab.\n• Bij gemorste stof: handen wassen.\n• Lees **etiket** voor je iets pakt.\n• **Zuurkast** voor giftige dampen.\n\n**Eerste hulp**:\n• **Spatten in oog** → 15 min spoelen met water.\n• **Inademen damp** → frisse lucht.\n• **Brand** → branddeken of zandvuurblusser *(niet water op brandende olie!)*.\n\n**Bekendste in NL — etikettering**:\n• Producten in supermarkt hebben **gevaarssymbolen** op verpakking.\n• Bv. **bleekmiddel** = corrosief.\n• **Ontstopper** = corrosief.\n• **Lampolie** = ontvlambaar.\n\n**toetsvraag**:\n*'Welk symbool voor benzine?'* → vlam (ontvlambaar).\n*'Welk symbool voor zoutzuur?'* → corrosief.\n*'Wat doe je bij gespatte base in oog?'* → 15 min spoelen.\n\n**Pas op — kinderen veilig**:\n• Veel huishoud-chemicaliën hebben gevaarssymbolen.\n• Bewaar buiten bereik van kleine kinderen.\n• Meng nooit producten *(bleek + ammoniak = giftige damp)*.",
    checks: [
      {
        q: "Wat betekent het **vlam-symbool**?",
        options: ["Ontvlambaar", "Giftig", "Corrosief", "Milieu"],
        answer: 0,
        wrongHints: [null, "Voor giftige stoffen gebruik je een doodshoofd. Waar zou een vlam voor waarschuwen?", "Bij bijtende stoffen zie je druppels die een hand en metaal aantasten. Waar zou een vlam voor waarschuwen?", "Bij milieugevaar zie je een dode boom en vis. Waar zou een vlam voor waarschuwen?"],
      },
      {
        q: "Symbool voor **zoutzuur**?",
        options: ["Corrosief", "Ontvlambaar", "Explosief", "Milieu"],
        answer: 0,
        wrongHints: [null, "Gaat zoutzuur branden als je er een vlam bij houdt? Wat doet het wel met je huid?", "Zoutzuur ontploft niet. Wat doet het met je huid of met metaal?", "Zoutzuur kan het milieu schaden, maar wat is het grootste gevaar als het op je huid komt?"],
      },
      {
        q: "Wat doe je als er een **chemische stof in je oog** spat?",
        options: ["15 minuten spoelen met water", "1 minuut spoelen en dan droogdeppen", "Spoelen met melk om te neutraliseren", "Oogdruppels erin en goed knipperen"],
        answer: 0,
        wrongHints: [null, "Na een minuut spoelen zit er nog stof in je oog. Hoe lang moet je spoelen?", "Melk is niet steriel en neutraliseert niet betrouwbaar. Waarmee spoel je bij de oogdouche op school?", "Een paar druppels verdunnen de stof nauwelijks. Hoeveel vloeistof is nodig om alles weg te spoelen?"],
      },
      {
        q: "Mag je **bleekmiddel + ammoniak** mengen?",
        options: ["Nee, nooit", "Alleen met de ramen open", "Alleen als je ze eerst verdunt", "Ja, dan maakt het beter schoon"],
        answer: 0,
        wrongHints: [null, "Ook met open ramen ontstaan giftige dampen in de ruimte waar je staat. Is ventileren dan genoeg?", "Ook verdund ontstaan er giftige dampen. Helpt water dan echt?", "Schoonmaakmiddelen werken niet beter als je ze mengt. Wat kan er wel ontstaan?"],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — stoffen mix",
    explanation:
      "Mix-toets. Door elkaar: pure stof/mengsel, soorten mengsels, scheidingsmethoden, eigenschappen, pictogrammen.\n\nVeel succes!",
    checks: [
      {
        q: "Welke is een **pure stof**?",
        options: ["Citroenzuur", "Soep", "Lucht", "Brons"],
        answer: 0,
        wrongHints: [null, "Soep bevat groente, zout en water. Is dat één soort deeltje?", "Lucht bevat stikstof, zuurstof en andere gassen. Is dat één stof?", "In brons zitten twee soorten metaalatomen door elkaar. Is dat één soort deeltje?"],
      },
      {
        q: "Hoe haal je **alcohol uit wijn**?",
        options: ["Destilleren", "Filtreren", "Bezinken", "Chromatografie"],
        answer: 0,
        wrongHints: [null, "Alcohol is opgelost in de wijn. Houdt een filter opgeloste stoffen tegen?", "Zakt alcohol vanzelf naar de bodem van een fles wijn?", "Chromatografie haalt kleine beetjes stof uit elkaar op papier. Krijg je zo een fles alcohol?"],
      },
      {
        q: "Mayonaise is een ... ?",
        options: ["Emulsie", "Oplossing", "Pure stof", "Schuim"],
        answer: 0,
        wrongHints: [null, "Een oplossing is helder. Kun je door mayonaise heen kijken?", "Mayonaise maak je van olie, ei en azijn. Is dat één soort deeltje?", "Schuim zit vol gasbelletjes. Is mayonaise luchtig als slagroom, of zijn het druppels olie?"],
      },
      {
        q: "Dichtheid water?",
        options: ["1 g/cm³", "7,9 g/cm³", "0,1 g/cm³", "10 g/cm³"],
        answer: 0,
        wrongHints: [null, "7,9 g/cm³ hoort bij ijzer. Is water net zo zwaar als ijzer?", "Dat is lichter dan hout en kurk. Drijft hout op water of zinkt het?", "10 g/cm³ is zwaarder dan ijzer. Hoeveel weegt een liter (1000 cm³) water ongeveer?"],
      },
      {
        q: "Welk gevaarssymbool voor **benzine**?",
        options: ["Vlam", "Schedel", "Corrosief", "Gasfles"],
        answer: 0,
        wrongHints: [null, "Benzine is schadelijk, maar wat mag je bij een tankstation absoluut niet doen?", "Tast benzine je huid aan zoals een sterk zuur? Wat is het grootste gevaar bij een tankstation?", "Niet — benzine is een vloeistof, geen gas onder druk."],
      },
      {
        q: "Hoeveel **elementen** in periodiek systeem?",
        options: ["~118", "~50", "~10", "~1000"],
        answer: 0,
        wrongHints: [null, "Het periodiek systeem heeft 7 rijen en 18 kolommen. Past ~50 daarbij?", "Noem eens tien elementen uit je hoofd. Is het periodiek systeem echt zo klein?", "Er bestaan duizenden stoffen, maar hoeveel vakjes telt het periodiek systeem ongeveer?"],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const stoffenMengselsScheikunde = {
  id: "stoffen-mengsels-scheikunde",
  title: "Stoffen + mengsels + scheiden (klas 1-2)",
  emoji: "⚗️",
  level: "klas1-2",
  subject: "scheikunde",
  referentieNiveau: "2F",
  sloThema: "Scheikunde — stoffen + mengsels + scheidingsmethoden",
  prerequisites: [
    { id: "toestand-stoffen-po", title: "Vast/vloeibaar/gas", niveau: "po-1F" },
  ],
  intro:
    "Stoffen + mengsels voor klas 1-2 scheikunde — pure stof vs mengsel, soorten (oplossing/emulsie/suspensie/schuim), scheidingsmethoden (filtreren/destilleren/chromatografie), eigenschappen (dichtheid, smelt-/kookpunt) en gevaarssymbolen. ~15 min.",
  triggerKeywords: [
    "scheikunde", "stof", "mengsel", "oplossing", "emulsie",
    "filtreren", "destilleren", "chromatografie",
    "dichtheid", "smeltpunt", "kookpunt",
    "pictogram", "ontvlambaar", "corrosief", "veiligheid",
  ],
  chapters,
  steps,
};

export default stoffenMengselsScheikunde;
