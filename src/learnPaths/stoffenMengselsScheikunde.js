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
      "**Alle materie** is opgebouwd uit **stoffen**. Maar je hebt 2 hoofdsoorten:\n\n**1. Pure stof (enkelvoudige stof)** ⚛️\n• Bevat **maar 1 type deeltje**.\n• Heeft **vaste eigenschappen** *(smeltpunt, kookpunt, dichtheid altijd hetzelfde)*.\n• Kan **element** zijn *(koper, zuurstof, ijzer)* of **verbinding** *(water, zout, suiker)*.\n\n**Voorbeelden pure stof**:\n• **IJzer (Fe)** — element.\n• **Zuurstof (O₂)** — element.\n• **Water (H₂O)** — verbinding van H en O.\n• **Zout (NaCl)** — verbinding van Na en Cl.\n• **Suiker (C₁₂H₂₂O₁₁)** — verbinding van C, H, O.\n\n**2. Mengsel** 🥗\n• Bevat **2 of meer pure stoffen** door elkaar.\n• **Geen vaste verhouding** — kun je meer of minder van iets doen.\n• **Geen vast smelt-/kookpunt**.\n• De afzonderlijke stoffen behouden hun eigenschappen.\n\n**Voorbeelden mengsel**:\n• **Zoutwater** — water + zout (kun je meer/minder zout doen).\n• **Lucht** — N₂ + O₂ + CO₂ + edelgassen.\n• **Brons** — mengsel van koper + tin.\n• **Soep** — water + groente + zout + ...\n• **Bloed** — water + cellen + eiwitten.\n\n**Hoe weet je of iets een mengsel is?**\n• Je kunt het meestal **scheiden** in verschillende stoffen.\n• Lucht → afkoelen → verschillende gassen apart.\n• Zoutwater → laten verdampen → zout blijft achter.\n\n**Hoe weet je of het een pure stof is?**\n• Heeft **één smeltpunt + één kookpunt**.\n• Bv. water altijd kookt op 100°C en bevriest op 0°C *(bij 1 atm druk)*.\n\n**Element vs verbinding**:\n• **Element** = simpelste pure stof, kan **niet verder ontleed** worden chemisch *(ijzer, goud, koper, zuurstof)*.\n• **Verbinding** = 2+ elementen aan elkaar gebonden in vaste verhouding *(water = H + O in verhouding 2:1)*.\n\n**Periodiek systeem**:\n• Lijst van **~118 elementen**.\n• Elk element heeft een symbool *(Fe = ijzer, O = zuurstof)*.\n• Belangrijk: **eerste 20 elementen** zijn het meest voorkomend.\n\n**Cito-truc — onderscheid mengsel/pure stof**:\n• Bestaat uit 1 ding → pure stof.\n• Door elkaar van verschillende → mengsel.\n• Kun je weer scheiden? → mengsel.",
    svg: pureMengselSvg(),
    checks: [
      {
        q: "Wat is een **pure stof**?",
        options: ["Bevat 1 type deeltje, vaste eigenschappen", "Mengsel van veel dingen", "Vloeistof altijd", "Onbekend"],
        answer: 0,
        wrongHints: [null, "Dat is mengsel.", "Pure stof kan ook vast of gas zijn.", "Wel bekend."],
      },
      {
        q: "Welke is een **pure stof**?",
        options: ["Water (H₂O)", "Soep", "Lucht", "Brons"],
        answer: 0,
        wrongHints: [null, "Mengsel veel dingen.", "Mengsel gassen.", "Mengsel metalen."],
      },
      {
        q: "Welke is een **mengsel**?",
        options: ["Zoutwater", "Goud", "Zuurstof", "Koper"],
        answer: 0,
        wrongHints: [null, "Element = pure stof.", "Element.", "Element."],
      },
      {
        q: "Verschil **element** en **verbinding**?",
        options: ["Element = niet ontleed, verbinding = 2+ elementen samen", "Geen verschil", "Verbinding is kleiner", "Element is groter"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Andersom soms.", "Niet over grootte."],
      },
    ],
  },

  // STAP 2: Soorten mengsels
  {
    title: "Soorten mengsels",
    explanation:
      "Mengsels zijn er in **verschillende soorten**, afhankelijk van wat er gemengd is.\n\n**1. Oplossing** *(opgelost in vloeistof, helder)*:\n• 1 stof **opgelost** in een ander.\n• **Niet zichtbaar** als 2 lagen.\n• **Helder/transparant**.\n• Voorbeeld: **zoutwater, suiker in thee, ijzeren in lucht**.\n\nTermen:\n• **Oplosmiddel** = de vloeistof waarin opgelost wordt *(water)*.\n• **Opgeloste stof** = wat opgelost wordt *(zout, suiker)*.\n• **Oplosbaarheid** = hoeveel je kunt oplossen *(beperkt)*.\n\n**2. Suspensie** *(vaste deeltjes in vloeistof, troebel)*:\n• Kleine deeltjes **zweven** in vloeistof.\n• **Troebel** uiterlijk.\n• Zinkt na verloop van tijd.\n• Voorbeeld: **modderwater, sinaasappelsap met vruchtvlees, verf**.\n\n**3. Emulsie** *(vloeistof in vloeistof, melkachtig)*:\n• Twee **vloeistoffen** die niet mengen *(olie + water)*.\n• Klein druppels van een in de ander.\n• Voorbeeld: **melk** *(vet-druppels in water)*, **mayonaise** *(olie in eigeel)*.\n\n**4. Schuim** *(gas in vloeistof)*:\n• Belletjes gas vast in vloeistof.\n• Voorbeeld: **slagroom, bierschuim, zeepschuim, brood-deeg**.\n\n**5. Aerosol** *(deeltjes in gas)*:\n• Kleine deeltjes zwevend in lucht.\n• Voorbeeld: **mist** *(water in lucht)*, **rook** *(roetdeeltjes in lucht)*, **deodorant-spray**.\n\n**6. Legering** *(metalen door elkaar)*:\n• Mengsel van metalen.\n• Voorbeeld: **brons** (koper+tin), **staal** (ijzer+koolstof), **messing** (koper+zink).\n\n**Homogeen vs heterogeen**:\n• **Homogeen mengsel** = ziet er overal hetzelfde uit *(zoutwater)*.\n• **Heterogeen mengsel** = ziet er verschillend uit op verschillende plekken *(modderwater, soep)*.\n\n**Cito-vraag**:\n*'Welk soort mengsel is melk?'* → emulsie *(vet in water)*.\n*'Welk soort mengsel is mist?'* → aerosol *(water-druppels in lucht)*.\n*'Welk soort mengsel is zoutwater?'* → oplossing *(zout opgelost in water)*.\n\n**Verzadigde oplossing**:\nWanneer je **maximum hoeveelheid** stof hebt opgelost — meer kan niet *(zout blijft op bodem liggen)*.\n\n**Oplosbaarheid** hangt af van:\n• **Temperatuur** *(warmer water lost meer suiker op)*.\n• **Aard van stof** *(zout lost makkelijk op, zand niet)*.",
    checks: [
      {
        q: "Wat is een **oplossing**?",
        options: ["Stof helemaal opgelost in vloeistof (helder)", "Vaste deeltjes zweven", "Twee vloeistoffen", "Gas in vloeistof"],
        answer: 0,
        wrongHints: [null, "Dat is suspensie.", "Dat is emulsie.", "Dat is schuim."],
      },
      {
        q: "Melk is een ... ?",
        options: ["Emulsie (vet in water)", "Oplossing", "Suspensie", "Pure stof"],
        answer: 0,
        wrongHints: [null, "Niet — melk niet helder.", "Wel troebel, maar specifiek emulsie.", "Mengsel, geen pure stof."],
      },
      {
        q: "Wat is **brons**?",
        options: ["Legering (mengsel metalen)", "Pure stof", "Emulsie", "Schuim"],
        answer: 0,
        wrongHints: [null, "Mengsel.", "Niet vloeibaar normaal.", "Niet schuim."],
      },
      {
        q: "Wat is **mist**?",
        options: ["Aerosol (water-druppels in lucht)", "Oplossing", "Emulsie", "Schuim"],
        answer: 0,
        wrongHints: [null, "Niet vloeibaar primair.", "Niet 2 vloeistoffen.", "Niet gas in vloeistof."],
      },
    ],
  },

  // STAP 3: Scheidingsmethoden
  {
    title: "Scheidingsmethoden — hoe haal je stoffen uit elkaar?",
    explanation:
      "Om mengsels te **scheiden** in pure stoffen, gebruik je een **scheidingsmethode** die past bij de **eigenschappen** van de stoffen.\n\n**1. Filtreren** 🪟\n• Voor mengsels van **vaste stof in vloeistof** *(suspensie)*.\n• Door **filterpapier** of zeef.\n• Kleine deeltjes gaan door, grote blijven achter.\n• Voorbeeld: **koffie zetten** *(koffiedik blijft in filter, koffie loopt door)*.\n\n**2. Bezinken** ⬇️\n• Voor mengsels waar **vast deeltje zwaarder** is dan vloeistof.\n• Even **laten staan** → vaste deeltjes zakken naar onder.\n• Bovenste vloeistof afschenken.\n• Voorbeeld: **modderwater laten staan**, klei zinkt.\n\n**3. Centrifugeren** ⚪\n• Snel **ronddraaien** in een centrifuge.\n• Zwaardere stoffen gaan naar buiten *(bodem)*.\n• Versneld bezinken.\n• Voorbeeld: **bloed scheiden** *(rode bloedcellen onder, plasma boven)*.\n\n**4. Verdampen / indampen** ☀️\n• Voor **opgeloste vaste stof in vloeistof**.\n• Vloeistof **verdampt** weg → vaste stof blijft achter.\n• Voorbeeld: **zout uit zeewater halen** *(zonnebadkuipen in Frankrijk, Israël)*.\n\n**5. Destilleren** 🔥\n• Voor mengsels van **vloeistoffen** met verschillende kookpunten.\n• Verwarm — laagst kokende stof verdampt eerst.\n• Damp leiden door koele buis → condenseert.\n• Voorbeeld: **alcohol uit wijn**, **whisky maken**, **water zuiveren** uit zeewater *(omgekeerde osmose ook)*.\n\n**6. Extractie** 🌿\n• Een stof uit een mengsel **'trekken'** met oplosmiddel.\n• Voorbeeld: **thee zetten** *(theeblaadjes geven smaakstoffen af aan water)*.\n• **Caffeïne uit koffie**.\n\n**7. Chromatografie** 🌈\n• Voor scheiden van **kleurstoffen** of moleculen.\n• Inkt op papier zetten + water erlangs laten lopen.\n• Verschillende kleurstoffen lopen verschillende afstanden.\n• Voorbeeld: zwarte inkt blijkt mengsel van kleuren *(rood + blauw + ...)*.\n\n**Hoe kies je de methode?**\n• Vaste in vloeistof + niet opgelost → **filtreren / bezinken**.\n• Vaste opgelost in vloeistof → **indampen**.\n• 2 vloeistoffen → **destilleren**.\n• Stof uit groep halen → **extractie**.\n• Kleur-mengsels → **chromatografie**.\n\n**Cito-vraag**:\n*'Hoe haal je zand uit water?'* → filtreren.\n*'Hoe haal je zout uit zeewater?'* → indampen.\n*'Hoe haal je alcohol uit wijn?'* → destilleren.\n\n**Belangrijke termen**:\n• **Residu** = wat achterblijft in filter.\n• **Filtraat** = wat door filter loopt.\n• **Destillaat** = wat in opvangbak komt na destilleren.",
    checks: [
      {
        q: "Hoe haal je **zand uit water**?",
        options: ["Filtreren", "Indampen", "Destilleren", "Chromatografie"],
        answer: 0,
        wrongHints: [null, "Dan blijft zand én iets uit water; veel verlies.", "Voor 2 vloeistoffen.", "Voor kleurstoffen."],
      },
      {
        q: "Hoe haal je **zout uit zeewater**?",
        options: ["Indampen (verdampen)", "Filtreren", "Bezinken", "Chromatografie"],
        answer: 0,
        wrongHints: [null, "Zout zit opgelost.", "Zout niet zwaarder dan water.", "Geen kleuren."],
      },
      {
        q: "Hoe haal je **alcohol uit wijn**?",
        options: ["Destilleren", "Indampen", "Filtreren", "Bezinken"],
        answer: 0,
        wrongHints: [null, "Verkeerde manier voor 2 vloeistoffen.", "Geen vaste stof.", "Geen vaste stof."],
        uitlegPad: {
          stappen: [
            { titel: "Destillatie werkt op kookpunt", tekst: "Alcohol kookt bij 78°C, water bij 100°C. Verwarm tot ~80°C: alcohol verdampt eerst, water blijft." },
            { titel: "Condensatie", tekst: "Alcohol-damp door koude buis → wordt weer vloeibaar (destillaat). Pure alcohol in opvangbak." },
          ],
          woorden: [{ woord: "destillatie", uitleg: "Scheidingsmethode op basis van verschillende kookpunten." }, { woord: "kookpunt", uitleg: "Temperatuur waarbij vloeistof gas wordt." }],
          theorie: "Destilleren werkt als 2 vloeistoffen verschillende kookpunten hebben.",
          voorbeelden: [{ type: "stap", tekst: "Alcohol-water: alcohol kookt op 78°C, water op 100°C. Verschil van 22°C is genoeg." }],
          basiskennis: [{ onderwerp: "Niet voor zelf-thuis", uitleg: "Alcohol distilleren thuis is verboden — vergunning nodig." }],
          niveaus: {
            basis: "Destilleren. A.",
            simpeler: "Alcohol kookt eerder dan water (78°C vs 100°C). Verwarmen → alcohol-damp eerst → opvangen → pure alcohol. = A.",
            nogSimpeler: "Destilleren = A.",
          },
        },
      },
      {
        q: "Wat is **chromatografie** voor?",
        options: ["Kleurstoffen scheiden", "Zout uit water halen", "Alcohol distilleren", "Vaste stof filteren"],
        answer: 0,
        wrongHints: [null, "Indampen.", "Destilleren.", "Filtreren."],
      },
    ],
  },

  // STAP 4: Eigenschappen
  {
    title: "Eigenschappen van stoffen",
    explanation:
      "Elke pure stof heeft **vaste eigenschappen** die je kunt meten.\n\n**Fysische eigenschappen** *(zonder stof te veranderen)*:\n\n**1. Smeltpunt** — temperatuur waarbij vast → vloeibaar.\n• IJs/water: 0°C.\n• IJzer: 1538°C.\n• Goud: 1064°C.\n• Suiker: ~186°C.\n\n**2. Kookpunt** — temperatuur waarbij vloeibaar → gas.\n• Water: 100°C *(bij 1 atm)*.\n• Alcohol (ethanol): 78°C.\n• Olie: ~300°C.\n\n**3. Dichtheid** = massa per volume.\n• Eenheid: **g/cm³** of **kg/m³**.\n• Water: **1 g/cm³** = 1000 kg/m³.\n• IJzer: 7,9 g/cm³ *(zwaarder dan water → zinkt)*.\n• Olie: ~0,9 g/cm³ *(lichter dan water → drijft)*.\n• Kwik: 13,5 g/cm³.\n\n**4. Kleur** — bv. goud is geel, koper is roodbruin.\n\n**5. Geur** — bv. ammonia stinkt, suiker geurloos.\n\n**6. Hardheid** — diamant is hardst, kalksteen zacht.\n\n**7. Geleidbaarheid**:\n• Metalen geleiden goed elektriciteit + warmte.\n• Plastic + hout: slechte geleiders *(isolatoren)*.\n\n**8. Oplosbaarheid** — hoeveel oplost in 100 ml water.\n• Zout: ~36 g/100 ml.\n• Suiker: ~200 g/100 ml *(meer)*.\n• Zand: bijna 0.\n\n**Cito-truc — eigenschappen meten**:\n• **Dichtheid** = massa ÷ volume.\n• Voorbeeld: 50 g stof neemt 25 cm³ in → dichtheid = 50/25 = 2 g/cm³.\n\n**Chemische eigenschappen** *(stof wordt anders)*:\n• **Brandbaarheid** — papier brandt, water niet.\n• **Roesten** — ijzer roest in vochtige lucht.\n• **Zuur-base** — citroensap is zuur, zeep base.\n• **Reageren** — stoffen reageren met andere stoffen.\n\n**Fasen-overgangen** *(zie ook 'toestand-stoffen' pad)*:\n• Smelten: vast → vloeibaar.\n• Stollen: vloeibaar → vast.\n• Verdampen: vloeibaar → gas.\n• Condenseren: gas → vloeibaar.\n• Sublimatie: vast → gas direct *(zonder vloeibaar)*.\n\n**Cito-vraag**:\n*'Hoe weet je of iets ijzer is?'*\n→ Magnetisch (alleen ijzer + cobalt + nikkel) + dichtheid 7,9 g/cm³.\n\n*'Olie drijft op water — waarom?'*\n→ Olie heeft lagere dichtheid.\n\n**Cito-vraag voorbeeld**:\n*'Stof X: smeltpunt 78°C, geur alcohol-achtig, brandt makkelijk. Welke stof?'*\n→ Ethanol (alcohol).\n\n*'Stof Y: zwaar metalen, smeltpunt 1538°C, magnetisch.'*\n→ IJzer.",
    checks: [
      {
        q: "Wat is **dichtheid**?",
        options: ["Massa per volume (g/cm³)", "Hoogte van stof", "Kleur", "Smeltpunt"],
        answer: 0,
        wrongHints: [null, "Niet dichtheid.", "Niet dichtheid.", "Niet dichtheid."],
      },
      {
        q: "Dichtheid water = ?",
        options: ["1 g/cm³", "7,9 g/cm³", "0,5 g/cm³", "10 g/cm³"],
        answer: 0,
        wrongHints: [null, "IJzer.", "Olie ongeveer.", "Te veel."],
      },
      {
        q: "Olie drijft op water omdat ... ?",
        options: ["Olie lagere dichtheid heeft", "Olie warmer is", "Olie heller is", "Toeval"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet primair.", "Geen toeval — natuurwet."],
      },
      {
        q: "Welke is een **chemische** eigenschap?",
        options: ["Brandbaarheid", "Dichtheid", "Smeltpunt", "Kleur"],
        answer: 0,
        wrongHints: [null, "Fysisch.", "Fysisch.", "Fysisch."],
      },
    ],
  },

  // STAP 5: Pictogrammen
  {
    title: "Pictogrammen + chemische veiligheid",
    explanation:
      "Bij scheikundige stoffen zie je **gevaarssymbolen** *(pictogrammen)*. Belangrijk om te kennen voor veiligheid.\n\n**De 9 gevaarssymbolen (GHS — wereldwijd)**:\n\n**1. 💥 Explosief** *(explosion)*\n• Stof kan exploderen.\n• Voorbeeld: vuurwerk, sommige zuren.\n\n**2. 🔥 Ontvlambaar** *(flame)*\n• Brandt makkelijk.\n• Voorbeeld: benzine, alcohol, gas.\n\n**3. 🟢🔥 Brandbevorderend** *(oxidizing)*\n• Maakt brand sneller.\n• Voorbeeld: zuurstof in fles, sommige peroxides.\n\n**4. 🫧 Gasdruk** *(gas cylinder)*\n• Gas onder druk.\n• Voorbeeld: gasfles, spray-bus.\n\n**5. ☠️ Acuut giftig** *(skull and crossbones)*\n• Klein beetje al dodelijk.\n• Voorbeeld: cyanide, kwik.\n\n**6. ⚠️ Irriterend / schadelijk** *(uitroepteken)*\n• Niet acuut dodelijk maar wel schadelijk.\n• Voorbeeld: schoonmaakmiddelen, bleekmiddel-licht.\n\n**7. ⚠️🫁 Schadelijk lange termijn** *(person)*\n• Kanker-verwekkend, vergroeing.\n• Voorbeeld: asbest, sommige verfstoffen.\n\n**8. 🧪 Corrosief** *(corrosion)*\n• Vreet huid/materiaal weg.\n• Voorbeeld: zoutzuur, gootsteenontstopper, accuzuur.\n\n**9. 🐟 Milieugevaarlijk** *(dead fish/tree)*\n• Schadelijk voor water/dier/plant.\n• Voorbeeld: pesticiden.\n\n**Veiligheidsregels in lab**:\n• **Veiligheidsbril** dragen.\n• **Witte jas** *(beschermt kleren)*.\n• Geen eten/drinken in lab.\n• Bij gemorste stof: handen wassen.\n• Lees **etiket** voor je iets pakt.\n• **Zuurkast** voor giftige dampen.\n\n**Eerste hulp**:\n• **Spatten in oog** → 15 min spoelen met water.\n• **Inademen damp** → frisse lucht.\n• **Brand** → branddeken of zandvuurblusser *(niet water op brandende olie!)*.\n\n**Bekendste in NL — etikettering**:\n• Producten in supermarkt hebben **gevaarssymbolen** op verpakking.\n• Bv. **bleekmiddel** = corrosief.\n• **Pleksterksoda** = corrosief.\n• **Lampolie** = ontvlambaar.\n\n**Cito-vraag**:\n*'Welk symbool voor benzine?'* → vlam (ontvlambaar).\n*'Welk symbool voor zoutzuur?'* → corrosief.\n*'Wat doe je bij gemorste base in oog?'* → 15 min spoelen.\n\n**Pas op — kinderen veilig**:\n• Veel huishoud-chemicaliën hebben gevaarssymbolen.\n• Bewaar buiten bereik van kleine kinderen.\n• Mengen nooit producten *(bleek + ammoniak = giftige damp)*.",
    checks: [
      {
        q: "Wat betekent het **vlam-symbool**?",
        options: ["Ontvlambaar (brandt makkelijk)", "Giftig", "Corrosief", "Milieu"],
        answer: 0,
        wrongHints: [null, "Andere symbool (schedel).", "Andere symbool.", "Andere symbool."],
      },
      {
        q: "Symbool voor **zoutzuur**?",
        options: ["Corrosief (vreet weg)", "Ontvlambaar", "Explosief", "Milieu"],
        answer: 0,
        wrongHints: [null, "Brandt niet.", "Explodeert niet.", "Niet primair milieu."],
      },
      {
        q: "Wat doe je bij **chemicalie in oog**?",
        options: ["15 minuten spoelen met water", "Drogen", "Afvegen", "Wachten"],
        answer: 0,
        wrongHints: [null, "Maakt erger.", "Maakt erger.", "Wachten gevaarlijk."],
      },
      {
        q: "Mag je **bleekmiddel + ammoniak** mengen?",
        options: ["Nee — vormt giftig gas", "Ja, geen probleem", "Soms", "Maakt sterker"],
        answer: 0,
        wrongHints: [null, "Heel gevaarlijk.", "Altijd nee.", "Tegenovergesteld — gevaarlijk."],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — stoffen mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: pure stof/mengsel, soorten mengsels, scheidingsmethoden, eigenschappen, pictogrammen.\n\nVeel succes!",
    checks: [
      {
        q: "Welk is een **pure stof**?",
        options: ["Zuur citroenzuur (1 stof)", "Soep", "Lucht", "Brons"],
        answer: 0,
        wrongHints: [null, "Mengsel.", "Mengsel gassen.", "Mengsel metalen."],
      },
      {
        q: "Hoe haal je **alcohol uit wijn**?",
        options: ["Destilleren", "Filtreren", "Bezinken", "Chromatografie"],
        answer: 0,
        wrongHints: [null, "Voor vaste stof.", "Geen vaste deeltjes.", "Voor kleuren."],
      },
      {
        q: "Mayonaise is een ... ?",
        options: ["Emulsie (olie in eigeel)", "Oplossing", "Pure stof", "Schuim"],
        answer: 0,
        wrongHints: [null, "Niet helder.", "Mengsel.", "Geen gas."],
      },
      {
        q: "Dichtheid water?",
        options: ["1 g/cm³", "7,9 g/cm³", "0,1 g/cm³", "10 g/cm³"],
        answer: 0,
        wrongHints: [null, "IJzer.", "Te weinig.", "Te veel."],
      },
      {
        q: "Welk gevaarssymbool voor **benzine**?",
        options: ["Vlam (ontvlambaar)", "Schedel", "Corrosief", "Milieu"],
        answer: 0,
        wrongHints: [null, "Niet acuut giftig.", "Niet corrosief.", "Niet primair milieu."],
      },
      {
        q: "Hoeveel **elementen** in periodiek systeem?",
        options: ["~118", "~50", "~10", "~1000"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Te veel."],
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
