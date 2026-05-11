// Leerpad: Tweede Wereldoorlog — oorzaken, verloop, gevolgen
// 11 stappen in 6 hoofdstukken (A t/m F).
// Doelgroep: klas 3-4 onderbouw VO. Centrale examenstof CSE Geschiedenis.
//
// Toon: feitelijk en respectvol. Holocaust wordt benoemd als het grootste
// misdaad-onderdeel van de oorlog, niet uit de weg gegaan, maar zonder beelden
// of details die niet passen bij deze leeftijd.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  // periode-tinten voor de tijdlijn
  pre: "#5d4037",   // aanloop (1919-1939) — donkerbruin
  war: "#c62828",   // oorlog (1939-1945) — rood
  post: "#37474f",  // gevolgen (1945+) — donkergrijs
  axis1: "#42a5f5", // geallieerden — blauw
  axis2: "#7e57c2", // as-mogendheden — paars
};

const stepEmojis = [
  "📜",   // A1. Versailles
  "📉",   // A2. Crisis + NSDAP
  "🏛️",  // A3. Hitler aan de macht
  "⚡",   // B1. Oorlog begint
  "🇳🇱",  // B2. Bezetting NL
  "🚷",   // C1. Bezet leven + verzet
  "🔄",   // D1. Keerpunten
  "🕊️",  // D2. Bevrijding
  "🕯️",  // E1. Holocaust
  "🌍",   // F1. Gevolgen
  "🏆",   // F2. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Aanloop (1919-1939)", emoji: "📜", from: 0, to: 2 },
  { letter: "B", title: "De oorlog breekt uit", emoji: "⚡", from: 3, to: 4 },
  { letter: "C", title: "Bezetting + verzet", emoji: "🚷", from: 5, to: 5 },
  { letter: "D", title: "Keerpunten + bevrijding", emoji: "🕊️", from: 6, to: 7 },
  { letter: "E", title: "De Holocaust", emoji: "🕯️", from: 8, to: 8 },
  { letter: "F", title: "Gevolgen + eindopdracht", emoji: "🏆", from: 9, to: 10 },
];

// Tijdlijn-SVG: 1919-1950, met markers voor sleuteljaren.
// `activeYear` = jaar dat opgelicht moet worden (of null voor alleen overzicht).
function tijdlijnSvg(activeYear = null) {
  const startYear = 1919;
  const endYear = 1950;
  const span = endYear - startYear;
  const xFor = (y) => 20 + ((y - startYear) / span) * 270;
  const events = [
    { y: 1919, label: "Versailles" },
    { y: 1929, label: "Crisis" },
    { y: 1933, label: "Hitler" },
    { y: 1939, label: "WO2" },
    { y: 1940, label: "NL bezet" },
    { y: 1944, label: "D-Day" },
    { y: 1945, label: "Bevrijding" },
  ];
  const periodFill = (y) => (y < 1939 ? COLORS.pre : y < 1945 ? COLORS.war : COLORS.post);
  return `<svg viewBox="0 0 310 110">
<rect x="20" y="44" width="${xFor(1939) - 20}" height="14" fill="${COLORS.pre}" opacity="0.55"/>
<rect x="${xFor(1939)}" y="44" width="${xFor(1945) - xFor(1939)}" height="14" fill="${COLORS.war}" opacity="0.65"/>
<rect x="${xFor(1945)}" y="44" width="${xFor(endYear) - xFor(1945)}" height="14" fill="${COLORS.post}" opacity="0.55"/>
${events.map((e) => {
  const x = xFor(e.y);
  const active = activeYear === e.y;
  const r = active ? 6 : 4;
  return `
<circle cx="${x}" cy="51" r="${r}" fill="${active ? "#fff" : periodFill(e.y)}" stroke="${active ? periodFill(e.y) : "#fff"}" stroke-width="2"/>
<text x="${x}" y="36" text-anchor="middle" fill="${active ? "#fff" : COLORS.muted}" font-size="9" font-family="Arial" font-weight="${active ? "bold" : "normal"}">${e.y}</text>
<text x="${x}" y="76" text-anchor="middle" fill="${active ? "#fff" : COLORS.muted}" font-size="9" font-family="Arial" font-weight="${active ? "bold" : "normal"}">${e.label}</text>`;
}).join("")}
<text x="20" y="98" fill="${COLORS.muted}" font-size="9" font-family="Arial">Aanloop</text>
<text x="${xFor(1942) - 12}" y="98" fill="${COLORS.muted}" font-size="9" font-family="Arial">Oorlog</text>
<text x="${xFor(1948) - 12}" y="98" fill="${COLORS.muted}" font-size="9" font-family="Arial">Gevolgen</text>
</svg>`;
}

// Eenvoudige Europa-kaart: omtrek + bezet/neutraal/geallieerd in 1942.
function europaKaartSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Europa rond 1942 (vereenvoudigd)</text>

<!-- Duitsland + bezet gebied (paars/rood) -->
<polygon points="150,60 175,55 200,70 215,90 200,115 170,125 145,115 135,90" fill="${COLORS.axis2}" opacity="0.75"/>
<text x="170" y="92" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">Duitsland</text>

<!-- Bezet gebied: NL/BE/FR -->
<polygon points="100,80 135,90 145,115 130,135 100,135 85,115 90,95" fill="${COLORS.war}" opacity="0.55"/>
<text x="113" y="115" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">Frankrijk</text>
<polygon points="135,75 150,60 145,80 135,85" fill="${COLORS.war}" opacity="0.55"/>
<text x="143" y="73" text-anchor="middle" fill="#fff" font-size="6" font-family="Arial">NL</text>

<!-- Bondgenoten Duitsland: Italië -->
<polygon points="160,130 185,135 175,170 165,165 158,145" fill="${COLORS.axis2}" opacity="0.55"/>
<text x="170" y="150" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">Italië</text>

<!-- Geallieerd: Engeland -->
<polygon points="60,75 80,75 85,95 75,110 60,105 55,90" fill="${COLORS.axis1}" opacity="0.7"/>
<text x="70" y="92" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">UK</text>

<!-- Geallieerd: Sovjet-Unie -->
<polygon points="220,55 305,50 310,90 290,140 230,130 215,90" fill="${COLORS.axis1}" opacity="0.55"/>
<text x="265" y="92" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">Sovjet-Unie</text>

<!-- Neutraal: Zweden, Spanje, Zwitserland -->
<polygon points="155,30 175,25 180,55 160,55" fill="${COLORS.muted}" opacity="0.4"/>
<text x="167" y="42" text-anchor="middle" fill="#fff" font-size="7" font-family="Arial">Zweden</text>
<polygon points="65,135 100,135 105,165 70,170" fill="${COLORS.muted}" opacity="0.4"/>
<text x="85" y="153" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">Spanje</text>

<!-- Legenda -->
<rect x="10" y="178" width="10" height="8" fill="${COLORS.axis2}" opacity="0.75"/>
<text x="24" y="185" fill="${COLORS.text}" font-size="8" font-family="Arial">As-mogendheden</text>
<rect x="115" y="178" width="10" height="8" fill="${COLORS.war}" opacity="0.55"/>
<text x="129" y="185" fill="${COLORS.text}" font-size="8" font-family="Arial">Bezet</text>
<rect x="160" y="178" width="10" height="8" fill="${COLORS.axis1}" opacity="0.7"/>
<text x="174" y="185" fill="${COLORS.text}" font-size="8" font-family="Arial">Geallieerden</text>
<rect x="240" y="178" width="10" height="8" fill="${COLORS.muted}" opacity="0.4"/>
<text x="254" y="185" fill="${COLORS.text}" font-size="8" font-family="Arial">Neutraal</text>
</svg>`;
}

// Driehoek-diagram: aanleidingen → oorlog (oorzaken-pijl-gevolg).
function oorzakenSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="16" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Drie hoofdoorzaken — leidden samen tot WO2</text>

<rect x="20" y="40" width="80" height="50" rx="6" fill="${COLORS.pre}" opacity="0.7"/>
<text x="60" y="60" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">1. Versailles</text>
<text x="60" y="74" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">vernedering</text>
<text x="60" y="84" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">+ herstelbetalingen</text>

<rect x="120" y="40" width="80" height="50" rx="6" fill="${COLORS.pre}" opacity="0.7"/>
<text x="160" y="60" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">2. Crisis 1929</text>
<text x="160" y="74" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">werkloosheid</text>
<text x="160" y="84" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">+ armoede</text>

<rect x="220" y="40" width="80" height="50" rx="6" fill="${COLORS.pre}" opacity="0.7"/>
<text x="260" y="60" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">3. Hitler/NSDAP</text>
<text x="260" y="74" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">extreem-nationalisme</text>
<text x="260" y="84" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">+ revanche</text>

<line x1="60" y1="95" x2="155" y2="135" stroke="${COLORS.warm}" stroke-width="2" marker-end="url(#arrow)"/>
<line x1="160" y1="95" x2="160" y2="135" stroke="${COLORS.warm}" stroke-width="2" marker-end="url(#arrow)"/>
<line x1="260" y1="95" x2="165" y2="135" stroke="${COLORS.warm}" stroke-width="2" marker-end="url(#arrow)"/>

<defs>
  <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
    <path d="M 0 0 L 6 3 L 0 6 z" fill="${COLORS.warm}"/>
  </marker>
</defs>

<rect x="100" y="140" width="120" height="42" rx="6" fill="${COLORS.war}" opacity="0.85"/>
<text x="160" y="158" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">Tweede Wereldoorlog</text>
<text x="160" y="172" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">1939 – 1945</text>
</svg>`;
}

const steps = [
  // ─── A. Aanloop ───────────────
  {
    title: "Na WO1 — het Verdrag van Versailles (1919)",
    explanation: "De Tweede Wereldoorlog begin je niet bij 1939, maar 20 jaar eerder. Na de **Eerste Wereldoorlog** (1914-1918) had Duitsland verloren. De winnaars (Frankrijk, Engeland, VS) tekenden in **1919** het **Verdrag van Versailles** — en dat was hard voor Duitsland.\n\n**Wat moest Duitsland?**\n• **Schuld bekennen** voor de hele oorlog (de zogeheten *oorlogsschuldclausule*).\n• **Herstelbetalingen** doen: enorme bedragen aan Frankrijk en België.\n• Gebied **inleveren** (Elzas-Lotharingen aan Frankrijk, stukken aan Polen).\n• Een **klein leger** houden: maximaal 100.000 soldaten, geen tanks, geen luchtmacht.\n• Het **Rijnland** (gebied bij de Franse grens) werd ontwapend.\n\n**Gevolgen voor de Duitsers**:\n• Veel Duitsers voelden het verdrag als een **vernedering** (een 'Diktat').\n• De Duitse economie raakte zwaar in de min door de herstelbetalingen.\n• In de jaren '20 ontstond een gevaarlijk soort denken: *'wij zijn onterecht gestraft, ooit nemen we wraak'*.\n\nDit is **oorzaak 1** voor WO2: de boosheid en armoede die Versailles in Duitsland achterliet.",
    svg: tijdlijnSvg(1919),
    checks: [
      {
        q: "Wat eiste het **Verdrag van Versailles** van Duitsland?",
        options: ["Schuld bekennen, herstelbetalingen + klein leger", "Sovjet-Unie binnenvallen", "Een muur bouwen door Berlijn", "Atoomwapens ontwikkelen"],
        answer: 0,
        wrongHints: [null, "Andersom — pas in 1941 viel Duitsland de Sovjet-Unie binnen.", "De muur werd pas in 1961 gebouwd — veel later.", "Atoomwapens kwamen pas later (door de VS, 1945)."],
        uitlegPad: {
          stappen: [{ titel: "Versailles — 3 zware eisen", tekst: "Verdrag van Versailles (28 juni 1919) was de vredesregeling NA WO1. Duitsland MOEST: (1) schuld bekennen voor de hele oorlog, (2) enorme herstelbetalingen doen aan Frankrijk + België, (3) leger inkrimpen tot 100.000 man, geen tanks/luchtmacht. Plus gebied inleveren." }],
          woorden: [{ woord: "Verdrag van Versailles", uitleg: "Vredesverdrag 1919 dat WO1 officieel beëindigde. Bekend om harde eisen voor Duitsland." }, { woord: "herstelbetalingen", uitleg: "Geld dat verliezer aan winnaars moet betalen voor oorlogsschade. Voor Duitsland: 132 miljard goudmark." }],
          theorie: "Doel verdrag: Duitsland zo verzwakken dat het nooit meer oorlog kan beginnen. Gevolg: dit werkte averechts — Duitse boosheid + economische ellende voedde later opkomst Hitler. Belangrijkste oorzaak-keten voor WO2.",
          voorbeelden: [{ type: "concreet", tekst: "Elzas-Lotharingen ging terug naar Frankrijk. Stukken Oost-Duitsland naar Polen. Rijnland (bij Franse grens) werd ontwapend. Duitsland verloor 13% gebied + 10% bevolking." }],
          basiskennis: [{ onderwerp: "Niet andere zaken", uitleg: "Sovjet-Unie aanvallen = 1941 (Barbarossa). Berlijnse Muur = 1961. Atoomwapens = VS 1945. Allemaal LATER dan Versailles." }],
          niveaus: { basis: "Schuld + betalen + klein leger. A.", simpeler: "Versailles dwong Duitsland tot: schuld bekennen, betalen, klein leger. = A.", nogSimpeler: "Straf voor Duitsland = A." },
        },
      },
      {
        q: "Hoe ervoeren veel Duitsers het Verdrag van Versailles?",
        options: ["Als een vernedering", "Als een eerlijke oplossing", "Als bevrijding", "Als overwinning"],
        answer: 0,
        wrongHints: [null, "De voorwaarden waren bewust hard — niet bedoeld als compromis.", "Duitsland verloor juist gebied en moest betalen.", "Duitsland had de oorlog verloren, niet gewonnen."],
        uitlegPad: {
          stappen: [{ titel: "'Diktat' — gedwongen verdrag", tekst: "Duitsers noemden Versailles een 'Diktat' (= gedicteerde tekst). Ze mochten niet meeonderhandelen, alleen tekenen. Schuld-clausule was vooral pijnlijk: alléén Duitsland kreeg de schuld voor heel WO1. Gevoel van vernedering + onrecht bleef 20 jaar broeden." }],
          woorden: [{ woord: "vernedering", uitleg: "Gevoel publiek klein gemaakt te worden. Hier: gedwongen tekenen + alleen schuld krijgen." }, { woord: "Diktat", uitleg: "Duitse term voor Versailles-verdrag — wordt opgelegd, niet onderhandeld." }, { woord: "Dolkstootlegende", uitleg: "Mythe dat Duits leger niet verloren had op slagveld, maar door verraad thuis. Voer voor extreemrechts." }],
          theorie: "Dit gevoel werd politiek gif: extreemrechts (NSDAP) beloofde 'wraak op Versailles'. Hitler maakte het tot kernpunt zijn campagne. Verdrag schiep emotionele bodem waar WO2 op kon groeien.",
          voorbeelden: [{ type: "campagne", tekst: "Hitler-toespraken jaren '20: 'Versailles moet kapot.' Steeds dezelfde boodschap, raakte gevoelige snaar bij Duitsers." }],
          basiskennis: [{ onderwerp: "Niet positief", uitleg: "Eerlijk/bevrijding/overwinning zijn allemaal positief — past niet bij hoe verliezer dwang ervaart." }],
          niveaus: { basis: "Vernedering. A.", simpeler: "Duitsers voelden Versailles als vernedering — dwang + schuld alleen op hen. = A.", nogSimpeler: "Schaamte = A." },
        },
      },
    ],
  },
  {
    title: "Crisis van 1929 + opkomst van de NSDAP",
    explanation: "**Oorzaak 2: een wereldwijde economische ramp.**\n\nIn oktober **1929** stortte de beurs in **New York** in (*Black Thursday*). Bedrijven gingen failliet, banken kwamen in problemen, mensen verloren hun baan. De crisis sloeg over naar Europa.\n\n**Duitsland werd extra hard geraakt** — het was nog niet hersteld van Versailles, en leunde voor leningen op de VS. Toen die leningen werden opgeëist:\n• 6 miljoen werklozen in Duitsland (1932).\n• Veel mensen kwamen in zware armoede.\n• Vertrouwen in de regering verdween.\n\n**De NSDAP** *(Nationaal-Socialistische Duitse Arbeiderspartij)*\nIn deze chaos groeide een kleine partij snel: de NSDAP, met **Adolf Hitler** als leider. De partij beloofde:\n• Herstel van **Duitse trots** (verzet tegen Versailles).\n• Werk voor iedereen.\n• Een sterke leider die Duitsland weer 'groot' zou maken.\n• Maar ook: hard tegen joden, communisten en andere groepen die zij als 'vijand' zagen.\n\n**Verkiezingsresultaten NSDAP**:\n• 1928: 2,6%\n• 1930: 18%\n• 1932: 37% (grootste partij)\n\nMensen in nood stemden op extreme oplossingen — ook al wisten ze niet altijd waar dat heen leidde.",
    svg: tijdlijnSvg(1929),
    checks: [
      {
        q: "Wat gebeurde er in **oktober 1929**?",
        options: ["De beurs in New York crashte → wereldwijde crisis", "Hitler werd Duits leider", "WO2 begon", "Nederland werd bezet"],
        answer: 0,
        wrongHints: [null, "Hitler werd later kanselier (1933).", "WO2 begon in 1939.", "Bezetting NL was 1940."],
        uitlegPad: {
          stappen: [{ titel: "Black Thursday — 24 oktober 1929", tekst: "Beurs van New York (Wall Street) crashte op 24 oktober 1929 (Zwarte Donderdag). Aandelen kelderden in waarde. Banken gingen failliet. Bedrijven sloten. Wereldwijde economische crisis volgde — bekend als 'Grote Depressie' (1929-1939)." }],
          woorden: [{ woord: "beurs", uitleg: "Plek waar aandelen verhandeld worden. Aandelenprijzen weerspiegelen verwachte waarde bedrijf." }, { woord: "Grote Depressie", uitleg: "Wereldwijde economische crisis 1929-1939. Veel werkloosheid, armoede, deflatie." }, { woord: "Wall Street", uitleg: "Straat in New York met grootste effectenbeurs ter wereld." }],
          theorie: "Crisis sloeg over van VS naar Europa. Duitsland werd extra hard geraakt — leunde op Amerikaanse leningen. 6 miljoen Duitse werklozen in 1932. Armoede + wanhoop → mensen zochten radicale oplossingen → NSDAP groeide.",
          voorbeelden: [{ type: "cijfers", tekst: "VS-aandelen daalden in 3 jaar 89% in waarde. 25% Amerikanen werkloos. Duitsland: 30% beroepsbevolking zonder baan." }],
          basiskennis: [{ onderwerp: "Niet andere jaartallen", uitleg: "Hitler kanselier = 1933. WO2 begin = 1939. NL bezet = 1940. Allemaal NA 1929." }],
          niveaus: { basis: "Beurscrash. A.", simpeler: "Oktober 1929 = beurs NY crashte, begin wereldcrisis. = A.", nogSimpeler: "Crisis = A." },
        },
      },
      {
        q: "Waarom groeide de NSDAP zo snel tussen 1928 en 1932?",
        options: ["Door werkloosheid + armoede zochten mensen extreme oplossingen", "De regering verbood alle andere partijen", "Duitsland werd binnengevallen door Frankrijk", "De koning steunde Hitler"],
        answer: 0,
        wrongHints: [null, "In 1932 waren er nog gewoon vrije verkiezingen.", "Frankrijk viel Duitsland niet binnen in deze periode.", "Duitsland was sinds 1918 een republiek — geen koning meer."],
        uitlegPad: {
          stappen: [{ titel: "Crisis → extreme keuzes", tekst: "1928: NSDAP slechts 2,6% van stemmen (kleine partij). 1932: 37% (grootste partij). De crisis maakte mensen wanhopig — 6 miljoen werklozen, honger, verloren spaargeld. Hitler beloofde werk, trots, sterke leider. Wanhopige mensen stemden voor extremen." }],
          woorden: [{ woord: "NSDAP", uitleg: "Nationaal-Socialistische Duitse Arbeiderspartij. Hitlers partij. Combineerde extreem-nationalisme + antisemitisme + sociaal beloven." }, { woord: "extreme oplossingen", uitleg: "Drastische beloftes (sterke leider, 1 partij, vijandbeeld) die mensen aantrekken in crisistijd." }],
          theorie: "Patroon: bij economische crisis → vertrouwen in gevestigde politiek daalt → extremen winnen. Niet alleen Duitsland — ook Italië had Mussolini (eerder, 1922). Democratie kwetsbaar als bevolking lijdt.",
          voorbeelden: [{ type: "cijfers", tekst: "NSDAP-stem-percentages: 1928=2,6% / 1930=18% / 1932=37%. Komt EXACT overeen met stijgende werkloosheidscijfers." }],
          basiskennis: [{ onderwerp: "Niet andere oorzaken", uitleg: "Andere partijen werden pas verboden NA Hitler aan macht (juli 1933). Geen Frans-Duitse oorlog. Geen koning sinds 1918 (Weimar-Republiek)." }],
          niveaus: { basis: "Armoede + werkloosheid. A.", simpeler: "NSDAP groeide door crisis: werkloos + arm volk zocht extreme oplossingen. = A.", nogSimpeler: "Wanhoop = A." },
        },
      },
    ],
  },
  {
    title: "Hitler aan de macht — 1933 tot 1939",
    explanation: "**Oorzaak 3: Hitler bouwt een dictatuur en bereidt oorlog voor.**\n\nIn **januari 1933** werd Hitler benoemd tot **rijkskanselier** (= ongeveer minister-president). Vanaf dat moment ging het in een paar maanden razendsnel:\n\n**Van democratie naar dictatuur** (1933)\n• Februari: brand in de Rijksdag (parlement). Hitler gaf de communisten de schuld. Noodwet → grondrechten geschorst.\n• Maart: *Ermächtigungsgesetz* — Hitler mag wetten zonder parlement maken.\n• Juli: alle andere partijen verboden. NSDAP is enige partij.\n• Politieke tegenstanders worden in **concentratiekampen** gestopt (eerste: Dachau, 1933).\n\n**Vervolging van joden** (vanaf 1933)\n• Joodse winkels geboycot.\n• Joden uit overheidsbanen ontslagen.\n• **Neurenberg-wetten** (1935): joden zijn geen 'volwaardige' burgers meer, mogen niet trouwen met niet-joden.\n• **Kristallnacht** (9-10 november 1938): synagogen platgebrand, joodse winkels vernield, ~30.000 joden naar kamp.\n\n**Voorbereiding op oorlog** (1935-1939)\n• Leger werd uitgebreid (in strijd met Versailles).\n• 1936: Hitler bezet het Rijnland — geen reactie van Frankrijk/Engeland.\n• 1938: **Anschluss** — Oostenrijk wordt onderdeel van Duitsland.\n• 1938: München-conferentie — Engeland en Frankrijk staan het Sudetenland (deel van Tsjechoslowakije) toe aan Duitsland in ruil voor 'vrede' (= **appeasement-politiek**, achteraf zwaar bekritiseerd).\n• 1939: Hitler bezet de rest van Tsjechoslowakije.",
    svg: oorzakenSvg(),
    checks: [
      {
        q: "Wat was de **Anschluss** (1938)?",
        options: ["Duitsland nam Oostenrijk in zonder oorlog", "Een verdrag met de Sovjet-Unie", "Een kamp voor politieke gevangenen", "Een Duitse uitvinding"],
        answer: 0,
        wrongHints: [null, "Verdrag met USSR komt pas in 1939 (Molotov-Ribbentrop).", "Kamp = concentratiekamp, ander begrip.", "Anschluss is een politieke gebeurtenis, geen uitvinding."],
        uitlegPad: {
          stappen: [{ titel: "Maart 1938 — Oostenrijk ingelijfd", tekst: "12 maart 1938: Duits leger marcheerde Oostenrijk binnen. Geen schot gelost — werd ontvangen door juichende menigte (veel Oostenrijkers wilden dit). Hitler (zelf geboren in Oostenrijk) sprak in Wenen. Oostenrijk hield op te bestaan als land, werd Duitse provincie 'Ostmark'." }],
          woorden: [{ woord: "Anschluss", uitleg: "Duits voor 'aansluiting'. Inlijving van Oostenrijk bij Duitsland in 1938." }, { woord: "annexatie", uitleg: "Een gebied opslokken zonder formele oorlog." }],
          theorie: "Anschluss was eerste grote stap Hitler buiten Duitse grenzen. Schond Versailles-verdrag dat Anschluss verbood. Europa keek toe, deed niets — appeasement-politiek. Voer voor Hitler om volgende stap (Sudetenland september 1938) te zetten.",
          voorbeelden: [{ type: "tijdlijn", tekst: "1935: leger uitgebreid → 1936: Rijnland bezet → 1938 maart: Anschluss → 1938 september: München-conferentie + Sudetenland → 1939 maart: rest Tsjechoslowakije → 1939 september: Polen → WO2." }],
          basiskennis: [{ onderwerp: "Niet andere zaken", uitleg: "Molotov-Ribbentrop-pact (USSR-verdrag) = augustus 1939. Concentratiekamp = ander begrip. Anschluss = politieke gebeurtenis." }],
          niveaus: { basis: "Oostenrijk ingenomen. A.", simpeler: "Anschluss 1938 = Duitsland lijfde Oostenrijk in zonder oorlog. = A.", nogSimpeler: "Oostenrijk = Duitsland = A." },
        },
      },
      {
        q: "Wat was **appeasement-politiek**?",
        options: ["Hitler toegevingen doen om oorlog te voorkomen", "Hitler aanvallen voordat hij groter werd", "Een Duits sportfeest", "Het verbieden van de NSDAP"],
        answer: 0,
        wrongHints: [null, "Andersom — Engeland/Frankrijk durfden juist niet te confronteren.", "Geen sport, maar diplomatie.", "NSDAP werd niet verboden — werd juist de enige partij."],
        uitlegPad: {
          stappen: [{ titel: "München 1938 — toegeven om vrede", tekst: "Brits PM Chamberlain + Frans PM Daladier gingen naar München (september 1938). Stonden Hitler het Sudetenland toe (Duits-sprekend deel Tsjechoslowakije). In ruil: belofte van Hitler 'geen verdere eisen'. Chamberlain riep bij thuiskomst: 'Peace for our time!' — 1 jaar later begon WO2." }],
          woorden: [{ woord: "appeasement", uitleg: "Engels voor 'tot bedaren brengen'. Politiek van toegeven aan agressor om grotere oorlog te voorkomen." }, { woord: "Chamberlain", uitleg: "Brits premier 1937-1940. Symbool van appeasement. Volgde Churchill op (1940)." }, { woord: "München-conferentie", uitleg: "29-30 september 1938. Engeland + Frankrijk + Duitsland + Italië. Tsjechoslowakije niet uitgenodigd, kreeg het op te slikken." }],
          theorie: "Appeasement faalde omdat Hitler nooit echt vrede wilde — elke toegeving moedigde hem aan tot volgende stap. Les voor de geschiedenis: agressieve dictators stoppen niet vanzelf. Vandaar later: NAVO + krachtig optreden tegen agressie.",
          voorbeelden: [{ type: "fout-denken", tekst: "Engelse + Franse leiders dachten: Versailles WAS te hard, dus geef Hitler iets terug, dan is hij tevreden. Misrekening: dictators willen altijd meer." }],
          basiskennis: [{ onderwerp: "Niet andere acties", uitleg: "Andersom = pre-emptive aanval (Engeland/Frankrijk deden dit JUIST NIET). Sport = onzin. NSDAP-verbod ging om binnenlandse politiek Duitsland." }],
          niveaus: { basis: "Toegeven aan Hitler. A.", simpeler: "Appeasement = Engeland/Frankrijk gaven Hitler steeds iets om oorlog te voorkomen. Mislukte. = A.", nogSimpeler: "Toegeven = A." },
        },
      },
      {
        q: "Welke 3 oorzaken samen leidden tot WO2?",
        options: ["Versailles + crisis '29 + Hitler aan de macht", "Atoombom + televisie + EU", "Pest + kruistochten + Romeinen", "Boekdrukkunst + VOC + Napoleon"],
        answer: 0,
        wrongHints: [null, "Dat zijn allemaal dingen van ná WO2 of niet-relevant.", "Veel te oud — middeleeuwen en oudheid.", "16e-19e eeuw — eerdere tijdvakken."],
        uitlegPad: {
          stappen: [{ titel: "3 oorzaken combineren", tekst: "WO2 had niet 1 oorzaak — 3 dingen werkten SAMEN. (1) Versailles (1919): Duitse boosheid + armoede. (2) Crisis 1929: armoede explodeerde → mensen wanhopig. (3) Hitler/NSDAP: extreme leider beloofde wraak + werk. Zonder een van de 3 was WO2 misschien niet gebeurd." }],
          woorden: [{ woord: "oorzaak-keten", uitleg: "Volgorde van gebeurtenissen die samen tot iets leiden. Zonder schakel A geen B." }, { woord: "structurele oorzaak", uitleg: "Diepe oorzaak (Versailles + crisis = systeem). Tegenover: aanleiding (direct triggerpunt)." }],
          theorie: "Op examens komt vaak: 'Welke oorzaken leidden tot WO2?' Antwoord altijd 3-delig: Versailles + crisis + Hitler. Niet 'Hitler was boos' (te smal). Niet 'WO1 was niet afgemaakt' (te breed).",
          voorbeelden: [{ type: "schema", tekst: "Versailles (1919) → 20 jaar boosheid → crisis (1929) → wanhoop → Hitler wint stemmen (1932) → Hitler kanselier (1933) → oorlogsvoorbereiding → Polen (1939)." }],
          basiskennis: [{ onderwerp: "Niet andere combinaties", uitleg: "Atoombom + tv + EU = NA WO2. Pest + kruistochten + Romeinen = middeleeuwen + oudheid. Boekdrukkunst + VOC + Napoleon = eerdere tijdvakken." }],
          niveaus: { basis: "Versailles + crisis + Hitler. A.", simpeler: "3 oorzaken: Versailles → boos. Crisis → arm. Hitler → extreem. Samen = WO2. = A.", nogSimpeler: "3 dingen samen = A." },
        },
      },
    ],
  },

  // ─── B. Oorlog breekt uit ───────────────
  {
    title: "1 september 1939 — oorlog breekt uit (Blitzkrieg)",
    explanation: "**1 september 1939**: Duitse troepen vallen **Polen** binnen. Twee dagen later verklaren **Engeland en Frankrijk** de oorlog aan Duitsland. **WO2 is begonnen.**\n\n**Vlak ervoor** (augustus 1939): Duitsland en de Sovjet-Unie tekenen het **Molotov-Ribbentrop-pact** — een geheim verdrag waarin ze Polen samen verdelen. Ongelooflijk: twee aartsvijanden die afspreken niet te vechten en samen buit te delen.\n\n**Blitzkrieg = bliksemoorlog**\nDe Duitse aanval was van een nieuwe soort:\n• **Snelheid**: tanks (panzers) reden razendsnel door, niet meer als WO1-loopgraven.\n• **Coördinatie**: luchtmacht (Luftwaffe) bombardeerde steden en wegen vóór de tanks aankwamen.\n• **Verrassing**: vijand had geen tijd om zich te verdedigen.\n\n**Waarom werkte dit?**\n• Polen viel binnen 5 weken.\n• Daarna (april 1940): Denemarken en Noorwegen.\n• Mei 1940: **Nederland, België, Luxemburg, Frankrijk** — allemaal binnen 6 weken bezet.\n\nFrankrijk capituleerde op 22 juni 1940. Hitler stond op de Champs-Élysées in Parijs. Dit was zijn hoogtepunt.\n\n**Engeland alleen**\nNa de val van Frankrijk stond Engeland er alleen voor. **Winston Churchill** (Brits premier) hield het vol. De Duitse luchtaanvallen op Engeland (*Battle of Britain*) lukten niet — Hitler kreeg geen luchtoverwicht en het invasieplan voor Engeland werd afgeblazen.",
    svg: tijdlijnSvg(1939),
    checks: [
      {
        q: "Welk land viel Duitsland op **1 september 1939** binnen?",
        options: ["Polen", "Frankrijk", "Nederland", "Sovjet-Unie"],
        answer: 0,
        wrongHints: [null, "Frankrijk werd pas in mei 1940 aangevallen.", "NL werd 8 maanden later bezet (mei 1940).", "USSR pas in juni 1941 (Operatie Barbarossa)."],
        uitlegPad: {
          stappen: [{ titel: "1 september 1939 — WO2 begint", tekst: "Bij dageraad 1 september 1939 vielen Duitse troepen Polen binnen — onverwacht, zonder oorlogsverklaring. 2 dagen later verklaarden Engeland + Frankrijk Duitsland de oorlog. Officieel BEGIN van WO2. Vlak ervoor (23 augustus) sloot Hitler heimelijk pact met Sovjet-Unie om Polen samen te verdelen." }],
          woorden: [{ woord: "Molotov-Ribbentrop-pact", uitleg: "Geheim niet-aanvalsverdrag Duitsland + USSR (augustus 1939). Verdeelden Polen in geheime bijlage." }, { woord: "casus belli", uitleg: "Reden om oorlog te verklaren. Hier: Engeland/Frankrijk hadden Polen garanties gegeven." }],
          theorie: "Polen is officieel WO2-startpunt. Vóór deze datum: alleen lokale annexaties (Anschluss, Sudetenland). Vanaf 1 september = wereldoorlog want grote mogendheden trokken zich erin. Examenvraag-klassieker: 'Wanneer begon WO2?' → 1 september 1939.",
          voorbeelden: [{ type: "snelheid", tekst: "Polen viel binnen 5 weken. Duitse tanks (panzers) trokken razendsnel door, luchtmacht (Stuka's) bombardeerden tegelijkertijd. Polen had geen kans." }],
          basiskennis: [{ onderwerp: "Niet andere landen", uitleg: "Frankrijk + NL = mei 1940 (8 maanden later). Sovjet-Unie = juni 1941 (Operatie Barbarossa). Alleen Polen = 1 september 1939." }],
          niveaus: { basis: "Polen. A.", simpeler: "1 september 1939 = Duitsland viel Polen binnen. WO2 begon. = A.", nogSimpeler: "Polen = A." },
        },
      },
      {
        q: "Wat is **Blitzkrieg**?",
        options: ["Snelle oorlog: tanks + luchtmacht in één gecoördineerde aanval", "Een soort schuilkelder", "Het Duitse leger op de fiets", "Een vredesverdrag"],
        answer: 0,
        wrongHints: [null, "'Blitz' = bliksem (snelheid), niet schuilen.", "Tanks en motorvoertuigen, niet fietsen.", "Het tegendeel — geen vrede."],
        uitlegPad: {
          stappen: [{ titel: "Bliksemoorlog — nieuwe tactiek", tekst: "Blitzkrieg = letterlijk 'bliksemoorlog'. Duitse uitvinding voor WO2. Combineerde 3 zaken: (1) tanks reden snel door — geen loopgravenoorlog meer. (2) Luchtmacht (Luftwaffe) bombardeerde steden + wegen VOOR tanks aankwamen. (3) Razendsnel — vijand kon zich niet verdedigen." }],
          woorden: [{ woord: "Blitzkrieg", uitleg: "Duits: 'bliksem-oorlog'. Snelle gecoördineerde aanval met tanks + luchtmacht." }, { woord: "panzer", uitleg: "Duitse term voor tank/pantservoertuig." }, { woord: "Luftwaffe", uitleg: "Duitse luchtmacht. Belangrijk wapen in Blitzkrieg." }],
          theorie: "Werkte vooral in begin WO2: Polen 5 weken, Frankrijk 6 weken, NL 5 dagen. Niets vergelijkbaars in WO1 (was loopgravenoorlog). Pas in 1941 (winter Rusland) en 1942 (Stalingrad) liep Blitzkrieg vast: te grote afstanden, slecht weer, sterk verzet.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Mei 1940: Duitsers reden 350 km in 1 week dwars door Frankrijk. Frans leger kon nauwelijks reageren. Compleet anders dan WO1 waar fronten 4 jaar nauwelijks bewogen." }],
          basiskennis: [{ onderwerp: "Niet andere zaken", uitleg: "'Blitz' = bliksem (snelheid). Niet schuilkelder. Niet fietsen. Niet vrede." }],
          niveaus: { basis: "Tanks + luchtmacht samen. A.", simpeler: "Blitzkrieg = razendsnel + tanks + luchtmacht tegelijk. Vijand had geen tijd. = A.", nogSimpeler: "Snel = A." },
        },
      },
    ],
  },
  {
    title: "Mei 1940 — Nederland bezet",
    explanation: "Nederland had na WO1 ervoor gekozen **neutraal** te blijven, net als toen. De regering hoopte zo buiten een oorlog te blijven. Dat lukte deze keer niet.\n\n**10 mei 1940**: Duitse troepen vallen Nederland onverwacht binnen — zonder oorlogsverklaring. Tegelijk vallen ze ook België, Luxemburg en uiteindelijk Frankrijk aan. Doel: snel naar het westen, om Frankrijk te omsingelen.\n\n**Vier dagen vechten**\nHet Nederlandse leger was **klein en slecht uitgerust** — verwachtte geen oorlog. Toch werd er stevig tegengevochten, vooral bij de **Grebbeberg** (bij Wageningen). Maar:\n\n**14 mei 1940**: Duitse luchtmacht **bombardeert Rotterdam**. Het centrum brandt af, ~900 doden. Hitler dreigt: óf Nederland geeft op, óf ook Utrecht wordt platgebombardeerd.\n\n**15 mei 1940**: Nederland **capituleert**. De oorlog in NL had **5 dagen** geduurd.\n\n**Koningin Wilhelmina vlucht naar Engeland** met de regering. Vanuit Londen blijft ze toespraken houden via **Radio Oranje** — een belangrijke morele steun voor de bezette Nederlanders.\n\n**Wat zegden Duitsers tegen Nederlanders?**\nIn het begin probeerden de Duitse bezetters 'mild' over te komen. Nederland was 'broederland' (Germaans). Zwarte hand werd geleidelijk getoond:\n• Geleidelijk werd anti-joods beleid ingevoerd.\n• Studenten en arbeiders moesten verklaringen tekenen.\n• Tegenstand werd zwaarder gestraft.",
    svg: europaKaartSvg(),
    checks: [
      {
        q: "Wanneer werd **Rotterdam** gebombardeerd?",
        options: ["14 mei 1940", "1 september 1939", "5 mei 1945", "6 juni 1944"],
        answer: 0,
        wrongHints: [null, "Dat is het begin van WO2 in Polen — nog geen NL.", "Dat is juist de bevrijding van NL.", "Dat is D-Day in Normandië — niet NL."],
        uitlegPad: {
          stappen: [{ titel: "14 mei 1940 — centrum platgebombardeerd", tekst: "14 mei 1940, 13:30: Duitse Heinkel-bommenwerpers wierpen ~100 ton bommen op Rotterdam-centrum. Doel: Nederland forceren tot capitulatie. Resultaat: centrum brandde volledig af, ~900 doden, ~25.000 huizen verwoest. Hitler dreigde: óf NL geeft op, óf Utrecht is volgende. 15 mei: NL capituleerde." }],
          woorden: [{ woord: "bombardement", uitleg: "Aanval uit de lucht met bommen. WO2 standaard-tactiek tegen steden." }, { woord: "capitulatie", uitleg: "Overgave — leger geeft zich officieel over aan vijand." }],
          theorie: "Rotterdam-bombardement was eerste grote terreurbombardement op Europese stad in WO2. Veranderde oorlogvoering: burgers werden expliciet doelwit. NL leger had wel 4 dagen flink tegengevochten (vooral Grebbeberg), maar dit brak de wil. Belangrijke examen-datum.",
          voorbeelden: [{ type: "context", tekst: "Andere data om niet door elkaar te halen: 10 mei 1940 = inval NL. 14 mei 1940 = bombardement. 15 mei 1940 = capitulatie. 5 mei 1945 = bevrijding NL." }],
          basiskennis: [{ onderwerp: "Niet andere data", uitleg: "1 sept 1939 = Polen. 5 mei 1945 = bevrijding NL. 6 juni 1944 = D-Day Normandië. Allemaal andere gebeurtenissen." }],
          niveaus: { basis: "14 mei 1940. A.", simpeler: "Rotterdam-bombardement = 14 mei 1940, Duitsers braken NL-verzet. = A.", nogSimpeler: "14 mei 1940 = A." },
        },
      },
      {
        q: "Wie sprak via **Radio Oranje** vanuit Londen?",
        options: ["Koningin Wilhelmina", "Willem van Oranje", "Anne Frank", "Adolf Hitler"],
        answer: 0,
        wrongHints: [null, "Hij leefde in de 16e eeuw — Tachtigjarige Oorlog.", "Anne Frank was een joods meisje in onderduik, geen omroepster.", "Hitler was juist de tegenstander."],
        uitlegPad: {
          stappen: [{ titel: "Radio Oranje — stem vanuit Londen", tekst: "Koningin Wilhelmina vluchtte 13 mei 1940 met regering naar Londen (Engeland was nog vrij). Vanaf juli 1940 sprak ze via 'Radio Oranje' van de BBC tot bezet Nederland. Toespraken werden in het geheim beluisterd (Duitsers verboden het, namen radio's in beslag). Belangrijke morele steun." }],
          woorden: [{ woord: "Radio Oranje", uitleg: "BBC-zender in Londen die Nederlandstalige uitzendingen verzorgde voor bezet NL." }, { woord: "Koningin Wilhelmina", uitleg: "Koningin der Nederlanden 1898-1948. Werd symbool van verzet vanuit ballingschap." }, { woord: "regering in ballingschap", uitleg: "NL-regering werkte vanuit Londen 1940-1945. Hielden NL officieel als zelfstandig land in stand." }],
          theorie: "Wilhelmina noemde Hitler in toespraken 'de aartsvijand'. Was niet 'neutrale' koningin meer — gaf duidelijke verzets-boodschap. Na de oorlog werd ze sterk geliefd om deze rol. Cruciale figuur voor moreel van bezet NL.",
          voorbeelden: [{ type: "stem", tekst: "Beroemde uitspraken: 'De vijand zal weten dat de Nederlandse vlag op vele wijzen kan wapperen.' Mensen kropen bij elkaar bij kraakradio's om haar te horen." }],
          basiskennis: [{ onderwerp: "Niet anderen", uitleg: "Willem van Oranje = 16e eeuw (Tachtigjarige Oorlog). Anne Frank = onderduikend meisje. Hitler = tegenstander, niet NL-stem." }],
          niveaus: { basis: "Koningin Wilhelmina. A.", simpeler: "Radio Oranje = stem koningin Wilhelmina vanuit Londen voor bezet NL. = A.", nogSimpeler: "Koningin = A." },
        },
      },
      {
        q: "Hoeveel dagen duurde het gevecht in mei 1940 in Nederland?",
        options: ["5 dagen", "5 weken", "5 maanden", "5 jaar"],
        answer: 0,
        wrongHints: [null, "Te lang — capitulatie was al op 15 mei.", "Veel te lang.", "Dat is de hele bezettingsduur, niet het gevecht zelf."],
        uitlegPad: {
          stappen: [{ titel: "10-15 mei 1940 — vijf dagen", tekst: "10 mei 1940: Duitsers vielen onverwacht NL binnen, samen met BE/LU/FR. NL had klein, slecht uitgerust leger (NL was 'neutraal' sinds 1830). Toch fel verzet (Grebbeberg). 14 mei: Rotterdam gebombardeerd + dreiging Utrecht. 15 mei: NL capituleerde. Totaal: 5 dagen. Vergelijk: Polen 5 weken, Frankrijk 6 weken, België 18 dagen." }],
          woorden: [{ woord: "Grebbeberg", uitleg: "Hoogte bij Wageningen waar NL leger fel verzet bood 11-13 mei 1940. ~400 NL-doden." }, { woord: "neutraliteit", uitleg: "Niet kiezen tussen oorlogvoerende partijen. NL deed dit ook in WO1 (lukte toen). In WO2 lukte het niet." }],
          theorie: "NL viel sneller dan verwacht. Reden: leger te klein, geen tanks/luchtmacht (Versailles-achtige zelfbeperking + bezuinigingen), parachutist-inval bij Den Haag verraste, en Rotterdam-bombardement brak de wil. Capitulatie 15 mei — 5 dagen na inval. Hele bezetting duurde wel 5 jaar (tot mei 1945).",
          voorbeelden: [{ type: "vergelijking", tekst: "5 dagen NL = razendsnel. Veel mensen waren in 1940 verbaasd dat het zo snel ging. WO1: NL was 4 jaar neutraal gebleven en niets gebeurd." }],
          basiskennis: [{ onderwerp: "Niet langer", uitleg: "5 weken = Polen. 5 jaar = hele bezettingsduur NL (10 mei 1940 - 5 mei 1945), niet het GEVECHT zelf." }],
          niveaus: { basis: "5 dagen. A.", simpeler: "Gevecht mei 1940 NL = 5 dagen (10-15 mei). Daarna 5 JAAR bezetting. = A.", nogSimpeler: "5 dagen = A." },
        },
      },
    ],
  },

  // ─── C. Bezetting + verzet ───────────────
  {
    title: "Bezet leven: NSB, jodenvervolging, februaristaking, verzet",
    explanation: "Tussen 1940 en 1945 leefde Nederland onder **Duitse bezetting**. Eerst leek het op gewoon doorgaan; later werd het steeds donkerder.\n\n**De NSB**\nDe **Nationaal-Socialistische Beweging** was een Nederlandse pro-Duitse partij onder leiding van **Anton Mussert**. NSB-leden werkten samen met de bezetters. Na de oorlog werden zij berecht voor **collaboratie** ('heulen met de vijand').\n\n**Jodenvervolging in NL**\nStapsgewijs werden joden uit het gewone leven gehaald:\n• 1940: joden uit overheidsbanen.\n• 1941: registratie van alle joden, joden mogen niet meer in cafés/bibliotheken.\n• 1942: dragen van **Jodenster** verplicht. Begin van **deportaties** naar kampen — eerst Westerbork (NL), dan Auschwitz/Sobibor (Polen).\n• Van de ~140.000 joden in NL werden er **ongeveer 102.000 vermoord**. Procentueel het hoogste cijfer van West-Europa.\n\n**Februaristaking** (25-26 februari 1941)\nNa razzia's tegen joden in Amsterdam riepen communisten op tot **staking**. Duizenden Amsterdammers (havenarbeiders, trams, fabrieken) legden het werk neer. Het was de **enige openlijke massastaking tegen jodenvervolging** in heel bezet Europa. Duitsers sloegen de staking hard neer, maar het bleef een belangrijk symbool.\n\n**Verzet**\nNiet iedereen onderging de bezetting passief:\n• **Onderduikers**: joden + verzetsmensen verstopten zich, vaak op zolders of boerderijen. *Anne Frank* schreef in een Amsterdams achterhuis.\n• **Illegale kranten**: *Het Parool*, *Trouw*, *Vrij Nederland*.\n• **Verzetsgroepen**: bijv. de LO (Landelijke Organisatie voor hulp aan Onderduikers) en gewapend verzet.\n• Risico was groot: verzet betekende vaak gevangenschap of executie.",
    svg: europaKaartSvg(),
    checks: [
      {
        q: "Wat was de **NSB**?",
        options: ["Nederlandse pro-Duitse partij die met bezetters samenwerkte", "Een Nederlands verzetsblad", "Naam van een concentratiekamp", "Een Engels leger"],
        answer: 0,
        wrongHints: [null, "Verzetsbladen waren *Het Parool*, *Trouw*, *Vrij Nederland*.", "Nederlandse kampen heetten Westerbork, Vught.", "NSB was juist Nederlands en pro-Duits."],
        uitlegPad: {
          stappen: [{ titel: "NSB — Nederlandse nazi-partij", tekst: "NSB = Nationaal-Socialistische Beweging. Opgericht 1931 door Anton Mussert. Geïnspireerd op Duitse NSDAP (Hitler). Voor de bezetting: kleine partij (~50.000 leden). Tijdens bezetting: groeide tot ~100.000 leden, werd ENIGE toegestane partij in bezet NL. Werkten openlijk samen met Duitsers." }],
          woorden: [{ woord: "NSB", uitleg: "Nationaal-Socialistische Beweging. NL nazi-partij 1931-1945. Leider: Anton Mussert." }, { woord: "Mussert", uitleg: "Anton Mussert (1894-1946). NSB-leider. Na oorlog berecht en geëxecuteerd 1946." }, { woord: "collaborateur", uitleg: "Iemand die met bezetter samenwerkte. NSB-leden golden als collaborateurs." }],
          theorie: "NSB'ers gaven joden aan, hielpen razzia's, werkten in NL-SS (Waffen-SS). Na bevrijding: ~150.000 NL'ers berecht voor 'foute' rol — niet alleen NSB. NSB-leden werden bespot ('NSB-er ben je voor 't leven, je gat hangt aan de buitenkant').",
          voorbeelden: [{ type: "context", tekst: "Bevrijdingstijd: NSB-vrouwen werden kaalgeknipt + door straten geleid. Symbool van publieke wraak. Mussert berecht in Tribunaal Den Haag, geëxecuteerd Waalsdorpervlakte 7 mei 1946." }],
          basiskennis: [{ onderwerp: "Niet andere zaken", uitleg: "Verzetsbladen = Parool/Trouw/Vrij Nederland (TEGEN bezetters). Concentratiekampen = Westerbork/Vught (kampen, geen partij). Engels leger = geallieerden." }],
          niveaus: { basis: "Pro-Duitse NL-partij. A.", simpeler: "NSB = NL-nazi-partij van Mussert, werkte samen met Duitse bezetters. = A.", nogSimpeler: "NL-nazi's = A." },
        },
      },
      {
        q: "Wat was bijzonder aan de **Februaristaking** (1941)?",
        options: ["Het was de enige openlijke massastaking tegen jodenvervolging in bezet Europa", "Het was de eerste vakbondsstaking in NL", "Het lukte de Duitsers volledig te verdrijven", "Het was een staking in Duitsland zelf"],
        answer: 0,
        wrongHints: [null, "Vakbondsstakingen waren er al lang vóór WO2.", "Helaas niet — Duitsers bleven nog 4 jaar.", "Ging om Amsterdam, niet Duitsland."],
        uitlegPad: {
          stappen: [{ titel: "25-26 februari 1941", tekst: "Na razzia's tegen 425 joodse mannen in Amsterdam (22 februari, opgepakt + naar Mauthausen) riepen NL-communisten op tot massastaking. 25 februari: tram-personeel staakte, havenarbeiders sloten aan, fabrieken legden werk neer. Duizenden Amsterdammers de straat op uit solidariteit met joden. UNIEK in heel bezet Europa." }],
          woorden: [{ woord: "Februaristaking", uitleg: "Massastaking Amsterdam 25-26 februari 1941 tegen jodenvervolging. Hard neergeslagen." }, { woord: "razzia", uitleg: "Plotselinge politie-operatie om groep mensen op te pakken. Duitsers gebruikten dit voor joden, verzet, werklozen." }, { woord: "solidariteit", uitleg: "Gevoel/actie van saamhorigheid met groep in nood. Hier: niet-joden voor joden." }],
          theorie: "Duitsers sloegen staking neer: 9 doden, honderden opgepakt. Maar symboliek bleef: 'wij Amsterdammers stonden op voor onze joden'. Sinds 1946 jaarlijks herdacht bij Dokwerker-standbeeld op het Jonas Daniël Meijerplein. Examen-vraag-klassieker over verzet NL.",
          voorbeelden: [{ type: "context", tekst: "Vergelijk: in andere bezette landen (Polen, Frankrijk, België) waren er ook protesten tegen jodenvervolging, maar NOOIT een algemene openlijke staking. Daarom uniek." }],
          basiskennis: [{ onderwerp: "Niet andere zaken", uitleg: "Vakbondsstakingen ANDERE zaak (eerder). Duitsers werden NIET verdreven (bleven tot 1945). Vond plaats in Amsterdam, niet Duitsland." }],
          niveaus: { basis: "Enige tegen jodenvervolging in Europa. A.", simpeler: "Februaristaking 1941 = enige openlijke staking tegen jodenvervolging in heel bezet Europa. = A.", nogSimpeler: "Enige in Europa = A." },
        },
      },
      {
        q: "Wat betekent **collaboratie** in deze context?",
        options: ["Samenwerken met de vijand (bezetter)", "Verzet plegen", "Onderduiken", "Bevrijden"],
        answer: 0,
        wrongHints: [null, "Het tegenovergestelde — verzet was juist vechten tegen.", "Dat is niet hetzelfde — onderduikers waren slachtoffer/verzet, geen collaborateurs.", "Bevrijding kwam pas in 1944-45 door geallieerden."],
        uitlegPad: {
          stappen: [{ titel: "Collaboratie — heulen met vijand", tekst: "Collaboratie = bewust samenwerken met bezetters tegen je eigen land/bevolking. In NL: NSB-leden, NL-SS'ers, joden-jagers, ambtenaren die deportaties hielpen organiseren. Tegenovergestelde van verzet. Na bevrijding: zwaarste taboe, vaak zwaar bestraft." }],
          woorden: [{ woord: "collaboratie", uitleg: "Frans: 'samenwerken'. In WO2-context altijd negatief: heulen met bezetter." }, { woord: "Bijzondere Rechtspleging", uitleg: "Naoorlogse NL-rechtsgang voor collaborateurs. ~150.000 mensen vervolgd, ~40 geëxecuteerd." }, { woord: "fout', goed'", uitleg: "Naoorlogse termen. 'Fout' = collaborateur. 'Goed' = verzet/passief/slachtoffer." }],
          theorie: "Lastig dilemma achteraf: waar liep de grens? Een ambtenaar die loonlijsten doorgaf hielp deportaties — was die 'fout'? Discussie nog steeds. Punt examen: collaboratie = ACTIEF samenwerken, niet passief leven onder bezetting.",
          voorbeelden: [{ type: "voorbeelden", tekst: "Mussert (NSB-leider) = duidelijk collaborateur. Een aardappelboer die ondergedoken joden voedde = juist verzet. Burgemeester die jodenlijsten ondertekende = grijs gebied." }],
          basiskennis: [{ onderwerp: "Niet andere acties", uitleg: "Verzet = TEGEN bezetter. Onderduiken = zich verstoppen (slachtoffer/verzet). Bevrijden = door geallieerden, niet door collaborateurs." }],
          niveaus: { basis: "Samenwerken met vijand. A.", simpeler: "Collaboratie = met bezetter samenwerken, tegen eigen land. NSB deed dit. = A.", nogSimpeler: "Heulen met vijand = A." },
        },
      },
    ],
  },

  // ─── D. Keerpunten + bevrijding ───────────────
  {
    title: "Keerpunten: Stalingrad, D-Day, Market Garden",
    explanation: "Tot eind 1942 leek Duitsland niet te stoppen. Daarna draait alles. Drie **keerpunten**:\n\n**1. Stalingrad (1942-1943)** — *het oostfront*\nIn juni 1941 had Hitler de Sovjet-Unie verraderlijk aangevallen (*Operatie Barbarossa*) — het pact van 1939 was niet meer waard. Duitse legers trokken duizenden kilometers naar het oosten, maar bij **Stalingrad** raakten ze vast. De winter, de nood aan brandstof én Sovjet-tegenaanvallen kapseisten het Duitse leger.\n\n• **Februari 1943**: Duitse leger geeft zich over bij Stalingrad. Duitse stoot naar het oosten is gebroken.\n• Vanaf nu: Sovjet-Unie schuift langzaam westwaarts richting Berlijn.\n\n**2. D-Day (6 juni 1944)** — *het westfront*\nDe Amerikanen, Engelsen en Canadezen openen een **tweede front** in West-Europa.\n\n• Bij **Normandië** (Frankrijk) landen ~150.000 soldaten op één dag — de grootste landing ooit.\n• Code: *Operation Overlord*.\n• Vanaf hier rukken de geallieerden door Frankrijk, België → richting Duitsland.\n\n**3. Operatie Market Garden (september 1944)** — *NL gedeeltelijk bevrijd*\nGeallieerden proberen via een snelle stoot door Nederland Duitsland te bereiken — door bruggen bij Eindhoven, Nijmegen en **Arnhem** in te nemen.\n\n• Eindhoven en Nijmegen: gelukt.\n• **Arnhem**: mislukt — *'A Bridge Too Far'*. Brug niet veroverd, slag verloren.\n• Gevolg: **zuid-NL bevrijd**, **noord-NL nog bezet** voor de winter van '44-'45.\n\n**De Hongerwinter** (1944-1945)\nIn bezet noord-NL: spoorwegstaking → Duitsers blokkeren voedseltransport → grote hongersnood in West-Nederland (Amsterdam, Den Haag, Rotterdam, Utrecht).\n• ~20.000 mensen sterven van honger.\n• Mensen eten tulpenbollen om te overleven.\n• Pas eind april 1945 voedseldroppings door Engelse vliegtuigen (*Operation Manna*).",
    svg: tijdlijnSvg(1944),
    checks: [
      {
        q: "Wat was **D-Day** (6 juni 1944)?",
        options: ["Geallieerde landing in Normandië, Frankrijk", "Het einde van WO2", "Het bombardement op Rotterdam", "Hitlers verjaardag"],
        answer: 0,
        wrongHints: [null, "Einde was 5/8 mei 1945 — bijna een jaar later.", "Rotterdam-bombardement was 14 mei 1940.", "Verkeerd onderwerp — D-Day is een militaire operatie."],
        uitlegPad: {
          stappen: [{ titel: "6 juni 1944 — grootste landing ooit", tekst: "D-Day = 'Decision Day' (beslissingsdag). 6 juni 1944: ~156.000 geallieerde soldaten (VS, UK, Canada) landden op 5 stranden in Normandië, Frankrijk. Operatienaam: Overlord. Doel: tweede front openen tegen Duitsland naast oostelijke USSR-front. Gelukt — vanaf hier rolden geallieerden door Frankrijk + België → Duitsland." }],
          woorden: [{ woord: "D-Day", uitleg: "6 juni 1944. Geallieerde landing Normandië. Begin einde Duitse bezetting West-Europa." }, { woord: "Operation Overlord", uitleg: "Codenaam voor totale geallieerde operatie waar D-Day onderdeel van was." }, { woord: "tweede front", uitleg: "Nieuw oorlogsfront naast bestaande. Sovjet-Unie smeekte hierom omdat zij alléén tegen Duitsers vochten in oosten." }],
          theorie: "D-Day = KEERPUNT west-front. Sovjet-Unie had al sinds 1943 (Stalingrad) gewonnen in oost. D-Day opende west. Duitsland nu gevangen TUSSEN twee oprukkende fronten. WO2 niet meer te winnen voor Hitler. Tot 11 maanden later (8 mei 1945) volhield, maar uitkomst stond vast.",
          voorbeelden: [{ type: "schaal", tekst: "5 stranden codenamen: Utah, Omaha, Gold, Juno, Sword. 6.939 schepen. 11.590 vliegtuigen. 156.000 soldaten op 1 dag. ~10.000 doden eerste dag." }],
          basiskennis: [{ onderwerp: "Niet andere data", uitleg: "Einde WO2 = mei 1945. Rotterdam-bombardement = 14 mei 1940. Hitler's verjaardag = 20 april (geen oorlogsfeit)." }],
          niveaus: { basis: "Landing Normandië. A.", simpeler: "D-Day = 6 juni 1944, geallieerde landing in Frankrijk. Keerpunt. = A.", nogSimpeler: "Landing = A." },
        },
      },
      {
        q: "Waar ging de slag bij **Stalingrad** over?",
        options: ["Duitse stoot naar de Sovjet-Unie raakt vast → keerpunt op het oostfront", "Een aanval op Engeland", "Een poging Nederland te bevrijden", "Een atoombomtest"],
        answer: 0,
        wrongHints: [null, "Stalingrad ligt in Rusland, ver van Engeland.", "Bevrijding NL was D-Day en Market Garden.", "Atoombommen kwamen pas in 1945, in Japan."],
        uitlegPad: {
          stappen: [{ titel: "Augustus 1942 - februari 1943", tekst: "Stalingrad (Russische industriestad aan Wolga, nu Volgograd). Duitsers wilden olie in Kaukasus, moesten Stalingrad nemen onderweg. Half jaar bloedig stadgevecht. Duitsers omsingeld door Sovjet-tegenaanval (november 1942). Brandstof + voedsel op, vechten in -30°C. 2 februari 1943: 90.000 Duitsers gaven zich over." }],
          woorden: [{ woord: "Stalingrad", uitleg: "Russische stad. Slag aug 1942 - feb 1943. ~2 miljoen doden totaal. Grootste slag in geschiedenis." }, { woord: "Operatie Barbarossa", uitleg: "Duitse inval Sovjet-Unie juni 1941. Brak Molotov-Ribbentrop-pact. Leidde tot oostfront." }, { woord: "oostfront", uitleg: "Oorlogsfront Duitsland vs Sovjet-Unie 1941-1945. ~80% Duitse verliezen WO2 op dit front." }],
          theorie: "Stalingrad = KEERPUNT oost-front. Voor: Duitsers wonnen op oostfront. Na: Sovjet-Unie won. Eindigde mei 1945 met val Berlijn. Cruciale slag — historici denken: zonder Stalingrad-nederlaag had Duitsland WO2 misschien gewonnen.",
          voorbeelden: [{ type: "context", tekst: "Hitler verbood overgave Stalingrad — soldaten moesten 'doorvechten tot dood'. Generaal Paulus negeerde dit en gaf zich over. Hitler woedend, beschuldigde Paulus van verraad." }],
          basiskennis: [{ onderwerp: "Niet andere zaken", uitleg: "Stalingrad ligt in Rusland (ver van Engeland). Bevrijding NL = D-Day + Market Garden (1944). Atoombommen = Japan 1945." }],
          niveaus: { basis: "Keerpunt oostfront. A.", simpeler: "Stalingrad = slag in USSR waar Duitse opmars stopte. Keerpunt oostfront. = A.", nogSimpeler: "Keerpunt = A." },
        },
      },
      {
        q: "Wat was de **Hongerwinter** in NL?",
        options: ["Voedseltekort in bezet noord-NL, winter 1944-1945", "Een Duitse hongerstaking", "Een feestdag op 5 mei", "Een militair plan"],
        answer: 0,
        wrongHints: [null, "Niet de Duitsers leden honger — de bezette NL bevolking.", "5 mei is bevrijdingsdag, geen hongerwinter.", "Het was een gevolg van blokkades, geen militair plan op zich."],
        uitlegPad: {
          stappen: [{ titel: "Winter 1944-1945 — uithongering west-NL", tekst: "September 1944: spoorwegstaking in bezet NL (op verzoek regering in Londen) om Duitsers te dwarsbomen. Duitsers wraak: blokkeerden voedsel- en brandstoftransport naar West-NL (Amsterdam, Den Haag, Rotterdam, Utrecht). Resultaat: ~20.000 doden door honger + kou tot bevrijding mei 1945." }],
          woorden: [{ woord: "Hongerwinter", uitleg: "Winter 1944-1945 in bezet noord/west NL. Honger, kou, hongertochten op platteland." }, { woord: "hongertocht", uitleg: "Stedelingen liepen/fietsten naar boeren op platteland om eten te ruilen (lakens, tapijten voor aardappelen)." }, { woord: "Operation Manna", uitleg: "April 1945: Engelse vliegtuigen dropten 11.000 ton voedsel op West-NL. Duitsers stonden dit toe (oorlog bijna afgelopen)." }],
          theorie: "Oorzaak: spoorwegstaking + Duitse blokkade + barre winter + zuid-NL al bevrijd (transport vanaf zuiden onmogelijk). Mensen aten tulpenbollen, suikerbieten. Audrey Hepburn (later Hollywood-ster, toen kind in Arnhem) overleefde Hongerwinter. Voer voor latere onderzoek naar effecten honger op ongeboren kinderen.",
          voorbeelden: [{ type: "menu", tekst: "Dagelijks rantsoen Amsterdam februari 1945: 400 calorieën (= ~1 boterham). Volwassene heeft 2000 nodig. Mensen vermagerden, ouderen + baby's stierven eerst." }],
          basiskennis: [{ onderwerp: "Niet andere zaken", uitleg: "NL-bevolking leed, niet Duitsers. 5 mei = bevrijdingsdag NL. Geen militair plan — gevolg van blokkades." }],
          niveaus: { basis: "Voedseltekort west-NL. A.", simpeler: "Hongerwinter 1944-1945 = honger in bezet west-NL door Duitse blokkade. ~20.000 doden. = A.", nogSimpeler: "Honger NL = A." },
        },
      },
    ],
  },
  {
    title: "Bevrijding (5 mei 1945) + einde oorlog",
    explanation: "Na een loodzware winter komt het einde:\n\n**De val van Berlijn**\n• Sovjettroepen rukken vanuit het oosten op naar **Berlijn**.\n• Amerikanen en Britten komen vanuit het westen.\n• **30 april 1945**: Hitler **pleegt zelfmoord** in zijn bunker in Berlijn.\n• **2 mei 1945**: Berlijn valt.\n\n**Bevrijding Nederland**\n• April-mei 1945: Canadezen rukken op door Nederland.\n• **5 mei 1945**: Duitsers in NL **capituleren** in Hotel De Wereld in Wageningen — door generaal Blaskowitz tegenover de Canadese generaal Foulkes.\n• Vanaf dan vieren we elk jaar **Bevrijdingsdag**.\n\n**Einde oorlog in Europa** — *V-E Day*\n• **8 mei 1945**: officiële Duitse capitulatie. Oorlog in Europa voorbij.\n\n**De oorlog tegen Japan duurt nog door**\nIn Azië/Pacific vocht **Japan** sinds 1941 (na hun aanval op de Amerikaanse vlootbasis **Pearl Harbor**) tegen de VS. Ook Nederlands-Indië (nu Indonesië) was bezet door Japan.\n\n• Augustus 1945: VS gooit **atoombommen** op **Hiroshima** (6 aug.) en **Nagasaki** (9 aug.) — tienduizenden direct dood, vele meer aan straling.\n• **15 augustus 1945**: Japan capituleert. **Einde WO2**.\n• In Nederland wordt 15 augustus jaarlijks herdacht als einde van de oorlog in **Nederlands-Indië** — voor velen pas dán was de oorlog écht voorbij.\n\n**4 mei + 5 mei**\n• **4 mei**: Dodenherdenking — wie sneuvelden of werden vermoord tijdens de oorlog.\n• **5 mei**: Bevrijdingsdag — vieren van vrijheid.",
    svg: tijdlijnSvg(1945),
    checks: [
      {
        q: "Wanneer werd **Nederland bevrijd**?",
        options: ["5 mei 1945", "8 mei 1945", "15 augustus 1945", "6 juni 1944"],
        answer: 0,
        wrongHints: [null, "Dat is officiële Duitse capitulatie in heel Europa, 3 dagen na NL.", "Dat is einde oorlog in Azië (Japan).", "Dat is D-Day in Normandië."],
        uitlegPad: {
          stappen: [{ titel: "5 mei 1945 — Wageningen", tekst: "5 mei 1945 in Hotel De Wereld in Wageningen: Duitse generaal Blaskowitz tekende capitulatie tegenover Canadese generaal Foulkes. Vanaf dat moment was Nederland VRIJ. Bevrijding gebeurde geleidelijk: zuid-NL al september 1944 (Market Garden), noord-NL pas mei 1945 na Hongerwinter. Wereldoorlog ging in Azië nog tot 15 augustus 1945." }],
          woorden: [{ woord: "Bevrijdingsdag", uitleg: "5 mei — Nederlandse nationale feestdag van de vrijheid. Elke 5 jaar nationale viering, anders provinciaal/regionaal." }, { woord: "Hotel De Wereld", uitleg: "Hotel in Wageningen waar Duitse capitulatie in NL werd getekend." }, { woord: "Canadese bevrijders", uitleg: "Vooral Canadese troepen bevrijdden noord-NL. Daarom 'Canada' nog steeds bijzonder in NL." }],
          theorie: "Bevrijdingsdag 5 mei = officieel Nationale Feestdag sinds 1990 (voor 1990 om de 5 jaar). Vlag uit. Bevrijdingsfestivals in alle provinciehoofdsteden. Vergelijk: 4 mei = herdenken (stil), 5 mei = vieren (feest). Andere data om niet door elkaar te halen.",
          voorbeelden: [{ type: "tijdlijn", tekst: "September 1944: Market Garden → zuid-NL bevrijd. Winter 1944-45: Hongerwinter west-NL. April 1945: Canadezen rukken op. 5 mei: capitulatie Wageningen. 7 mei: koningin Wilhelmina keert terug." }],
          basiskennis: [{ onderwerp: "Niet andere data", uitleg: "8 mei = officiële capitulatie Europa-wijd (3 dagen later). 15 aug = Japan capitulatie. 6 juni 1944 = D-Day." }],
          niveaus: { basis: "5 mei 1945. A.", simpeler: "NL bevrijd = 5 mei 1945, capitulatie Wageningen. = A.", nogSimpeler: "5 mei = A." },
        },
      },
      {
        q: "Waarom herdenkt NL ook **15 augustus**?",
        options: ["Einde van de oorlog in voormalig Nederlands-Indië (Japan capituleert)", "Hitler pleegt zelfmoord", "D-Day vindt plaats", "Begin van WO2"],
        answer: 0,
        wrongHints: [null, "Hitler stierf 30 april 1945 — niet 15 augustus.", "D-Day was 6 juni 1944.", "WO2 begon op 1 september 1939."],
        uitlegPad: {
          stappen: [{ titel: "15 augustus 1945 — Japan capituleert", tekst: "Na atoombommen Hiroshima (6 aug) + Nagasaki (9 aug) tekende Japan op 15 augustus 1945 capitulatie. Dit beëindigde WO2 in heel Azië. Ook Nederlands-Indië (huidig Indonesië) werd weer 'NL', maar Indonesische nationalisten riepen 2 dagen later (17 aug 1945) onafhankelijkheid uit. Voor NL-veteranen + nabestaanden Indië: pas DAN was oorlog écht voorbij." }],
          woorden: [{ woord: "Nederlands-Indië", uitleg: "NL-kolonie in Azië 1602-1949. Nu Indonesië. Was bezet door Japan 1942-1945." }, { woord: "Indiëgangers", uitleg: "NL'ers (vooral militairen) die in Indië gewerkt/gevochten hebben. Hun verhaal anders dan Europese oorlog." }, { woord: "Jappenkampen", uitleg: "Japanse interneringskampen voor NL'ers in Indië. Zware omstandigheden, veel doden." }],
          theorie: "15 augustus = 'tweede bevrijdingsdag' voor NL. Voor lang ondergewaardeerd — focus lag op Europa. Sinds 1980 jaarlijkse herdenking bij Indisch Monument Den Haag. Belangrijk voor +/- 300.000 Nederlanders met Indische roots.",
          voorbeelden: [{ type: "context", tekst: "Voor mensen uit Jappenkampen was 5 mei 1945 GEEN bevrijding — ze zaten nog 3 maanden vast onder Japans bewind. 15 aug = hun moment." }],
          basiskennis: [{ onderwerp: "Niet andere zaken", uitleg: "Hitler dood = 30 april 1945. D-Day = 6 juni 1944. Begin WO2 = 1 september 1939. Alleen 15 aug = Japan-capitulatie." }],
          niveaus: { basis: "Japan capituleert. A.", simpeler: "15 augustus = einde WO2 Azië, Japan gaf zich over. Belangrijk voor Indië-NL'ers. = A.", nogSimpeler: "Japan klaar = A." },
        },
      },
      {
        q: "Wat is het verschil tussen **4 mei** en **5 mei**?",
        options: ["4 mei = herdenken (doden); 5 mei = vieren (vrijheid)", "4 mei = vieren; 5 mei = herdenken", "Beide hetzelfde — twee dagen vrij", "4 mei = oorlog begint; 5 mei = oorlog eindigt"],
        answer: 0,
        wrongHints: [null, "Andersom — eerst herdenken, dan vieren.", "Ze hebben elk hun eigen betekenis.", "Geen — die data zijn allemaal in 1945."],
        uitlegPad: {
          stappen: [{ titel: "4 mei = stil, 5 mei = feest", tekst: "4 mei = NL Dodenherdenking. 20:00-20:02 twee minuten stilte voor doden van WO2 + latere conflicten (waaronder VN-missies). Vlag halfstok. Plechtig. 5 mei = Bevrijdingsdag. Vlag in top. Festivals in elke provincie, oranje, feest. Vandaag bewust achter elkaar: eerst pijn benoemen, dan vieren." }],
          woorden: [{ woord: "Dodenherdenking", uitleg: "4 mei. NL-traditie sinds 1946. Centrale plechtigheid op De Dam Amsterdam met koninklijk paar." }, { woord: "Bevrijdingsdag", uitleg: "5 mei. Sinds 1990 jaarlijkse nationale feestdag. Voor: om de 5 jaar." }, { woord: "twee minuten stilte", uitleg: "20:00-20:02 op 4 mei. Heel NL stopt: treinen rijden niet, tv stil, mensen op straat staan stil." }],
          theorie: "Bewuste volgorde: 4 mei stilte → 5 mei feest. 'Eerst de doden eer doen, dan vrijheid vieren.' Sterke NL-traditie. Sommige andere landen doen 1 dag of geen onderscheid. Examen-vraag: weet welk dag wat doet.",
          voorbeelden: [{ type: "rituelen", tekst: "4 mei De Dam: koning legt krans, twee minuten stilte, Wilhelmus. 5 mei: koning(in) opent bevrijdingsfestival in 1 stad, 14 bevrijdingsfestivals door land." }],
          basiskennis: [{ onderwerp: "Niet andersom", uitleg: "4 mei = herdenken (eerst). 5 mei = vieren (daarna). Niet andersom. Niet hetzelfde. Niet over begin/einde oorlog (data 1939/1945 ander)." }],
          niveaus: { basis: "4=herdenken / 5=vieren. A.", simpeler: "4 mei = doden herdenken (stil). 5 mei = vrijheid vieren (feest). = A.", nogSimpeler: "4=stil 5=feest = A." },
        },
      },
    ],
  },

  // ─── E. Holocaust ───────────────
  {
    title: "De Holocaust",
    explanation: "De **Holocaust** (ook wel **Shoah** genoemd) is de stelselmatige moord op ongeveer **6 miljoen joden** door het naziregime tijdens WO2. Naast joden werden ook Roma/Sinti, gehandicapten, homoseksuelen, politieke tegenstanders en anderen vermoord. Het is **de grootste georganiseerde massamoord van de moderne geschiedenis**.\n\n**Hoe ging het stap voor stap?**\n\n*1. Uitsluiting* (vanaf 1933)\nJoden werden uit banen gezet, hun rechten ingeperkt (Neurenberg-wetten 1935).\n\n*2. Geweld + vlucht* (1938-1941)\nKristallnacht (1938). Veel joden proberen weg te komen, maar veel landen sluiten hun grenzen.\n\n*3. Ghetto's* (vanaf 1939)\nNa de Duitse inval in Polen worden joden in afgesloten wijken gepropt — bijv. het beruchte **Warschau-ghetto**. Honger, ziekte, geweld.\n\n*4. Massamoorden* (vanaf 1941)\nNa Operatie Barbarossa (1941): speciale doodseskaders (*Einsatzgruppen*) schieten in Sovjet-gebied honderdduizenden joden dood.\n\n*5. 'Endlösung' — vernietigingskampen* (vanaf januari 1942)\nOp de **Wannsee-conferentie** (jan. 1942) bespreken nazi's de '*Endlösung der Judenfrage*' (definitieve oplossing). Vanaf nu: industriële moord in vernietigingskampen — vooral in bezet Polen.\n\n• **Auschwitz-Birkenau** — meest beruchte kamp.\n• **Sobibor**, **Treblinka**, **Bełżec**.\n• Mensen werden in gaskamers vermoord; lichamen verbrand in crematoria.\n\n**In Nederland**\n• Joden eerst geregistreerd, dan ster, dan via doorgangskamp **Westerbork** (Drenthe) op transport.\n• De meesten kwamen in **Auschwitz** of **Sobibor** terecht.\n• Anne Frank schreef haar dagboek in onderduik in Amsterdam (1942-44). Verraden in 1944, gestorven in concentratiekamp Bergen-Belsen, begin 1945.\n\n**Waarom belangrijk om te onthouden?**\n• Het toont waar **uitsluiting + propaganda + zwijgen** toe kunnen leiden.\n• 'Nooit meer Auschwitz' is sindsdien de leuze.\n• Op 27 januari (bevrijding van Auschwitz, 1945) is **internationale Holocaust-herdenkingsdag**.",
    svg: europaKaartSvg(),
    checks: [
      {
        q: "Wat is de **Holocaust**?",
        options: ["Stelselmatige moord op ~6 miljoen joden door nazi-Duitsland", "Een militair plan voor de invasie van Engeland", "Een Duitse propagandafilm", "Een naoorlogs herdenkingsmonument"],
        answer: 0,
        wrongHints: [null, "Plan voor invasie Engeland heette *Operatie Seelöwe* — niet uitgevoerd.", "Niet één film maar een georganiseerde misdaad.", "Een herdenking kwam pas ná de oorlog — Holocaust is de gebeurtenis zelf."],
        uitlegPad: {
          stappen: [{ titel: "Holocaust — 6 miljoen vermoord", tekst: "Holocaust (= 'brandoffer' in Grieks; Hebreeuws: Shoah = ramp) = stelselmatige industriële moord op ~6 miljoen joden door nazi-Duitsland 1941-1945. Ook ~3 miljoen anderen vermoord: Roma/Sinti, gehandicapten, homoseksuelen, politieke gevangenen, krijgsgevangenen. Grootste georganiseerde massamoord in moderne geschiedenis." }],
          woorden: [{ woord: "Holocaust", uitleg: "Genocide op joden door nazi's WO2. ~6 miljoen joden vermoord (= 2/3 van Europese joden)." }, { woord: "Shoah", uitleg: "Hebreeuws woord voor Holocaust. Betekent 'ramp/catastrofe'. Sommigen prefereren dit boven 'Holocaust'." }, { woord: "genocide", uitleg: "Stelselmatige moord op heel volk/groep. Begrip ontstaan na Holocaust (1948 VN-conventie)." }],
          theorie: "Hoe gebeurde het: (1) uitsluiting wetten 1933-1938. (2) ghetto's 1939-1941. (3) doodseskaders 1941-1942. (4) vernietigingskampen 1942-1945 (Wannsee-conferentie jan 1942). Industrieel proces: gaskamers + crematoria. Belangrijkste les: hoe normale samenleving tot massamoord kan komen door propaganda + uitsluiting + zwijgen.",
          voorbeelden: [{ type: "kampen", tekst: "Auschwitz-Birkenau (1,1 miljoen vermoord). Sobibor (170.000). Treblinka (900.000). Bełżec (435.000). Allemaal in bezet Polen. Bevrijd door Sovjets (27 jan 1945 Auschwitz)." }],
          basiskennis: [{ onderwerp: "Niet andere zaken", uitleg: "Invasie Engeland-plan = Seelöwe (niet uitgevoerd). Niet één film. Niet een monument (= NA Holocaust)." }],
          niveaus: { basis: "Moord op 6 miljoen joden. A.", simpeler: "Holocaust = nazi-moord op ~6 miljoen joden 1941-1945. Industrieel in kampen. = A.", nogSimpeler: "Joden vermoord = A." },
        },
      },
      {
        q: "Wat was **Westerbork**?",
        options: ["Doorgangskamp in Drenthe waar NL-joden naartoe werden gebracht voor transport", "Een verzetsorganisatie", "Een Duits eindkamp", "Een Engels vliegveld"],
        answer: 0,
        wrongHints: [null, "Westerbork was een gevangenkamp, geen verzetsgroep.", "Bijna — maar Westerbork was juist het *doorgangs*kamp; vermoord werd vooral in Auschwitz/Sobibor in Polen.", "Westerbork lag in Drenthe (NL), geen Engels vliegveld."],
        uitlegPad: {
          stappen: [{ titel: "Westerbork — laatste halte NL-joden", tekst: "Kamp Westerbork lag in Drenthe (NL). Oorspronkelijk gebouwd 1939 voor Duits-joodse vluchtelingen. Vanaf juli 1942: Duitsers maakten het 'Polizeiliches Durchgangslager' = doorgangskamp. Elke dinsdag vertrok trein vol joden + Sinti naar Auschwitz of Sobibor. Totaal: ~107.000 NL-joden via Westerbork gedeporteerd, ~5.000 overleefden." }],
          woorden: [{ woord: "Westerbork", uitleg: "Doorgangskamp Drenthe 1942-1945. Anne Frank verbleef hier 5 weken voordat ze naar Auschwitz ging." }, { woord: "doorgangskamp", uitleg: "Tijdelijk kamp voor transport naar elders. Niet zelf 'eindkamp' — moord vond elders plaats." }, { woord: "deportatie", uitleg: "Gedwongen wegvoeren van mensen, vaak per trein." }],
          theorie: "Westerbork ≠ vernietigingskamp. Het was 'verzamelpunt'. Eigenlijke moord vond plaats in Polen (Auschwitz/Sobibor). Maar voor NL-joden was Westerbork laatste plek op NL-bodem. Bevrijd 12 april 1945 door Canadezen, 876 mensen nog levend. Nu Herinneringscentrum.",
          voorbeelden: [{ type: "Anne Frank", tekst: "Anne Frank werd 4 augustus 1944 in Amsterdam opgepakt. Eerst Westerbork (5 weken), dan 3 september 1944 op laatste trein naar Auschwitz. Stierf februari 1945 in Bergen-Belsen." }],
          basiskennis: [{ onderwerp: "Niet andere zaken", uitleg: "Geen verzetsorganisatie. Geen Duits eindkamp (lag in NL, doorgangs). Geen Engels vliegveld." }],
          niveaus: { basis: "Doorgangskamp NL. A.", simpeler: "Westerbork = doorgangskamp Drenthe waar NL-joden verzameld werden voor trein naar Auschwitz. = A.", nogSimpeler: "Doorgang = A." },
        },
      },
      {
        q: "Wanneer is de **internationale Holocaust-herdenkingsdag**?",
        options: ["27 januari (bevrijding Auschwitz, 1945)", "5 mei (bevrijding NL)", "4 mei (NL Dodenherdenking)", "11 november (einde WO1)"],
        answer: 0,
        wrongHints: [null, "Dat is Bevrijdingsdag NL, niet Holocaust-herdenking specifiek.", "Dichtbij — Dodenherdenking herdenkt álle slachtoffers van WO2 + latere conflicten, niet specifiek de Holocaust.", "Dat is einde WO1, andere oorlog."],
        uitlegPad: {
          stappen: [{ titel: "27 januari — Auschwitz bevrijd", tekst: "27 januari 1945: Sovjet-troepen bereikten Auschwitz-Birkenau. Vonden 7.000 uitgemergelde gevangenen die te ziek waren om mee te lopen op Duitse 'dodenmars'. Bevrijdingsdatum werd in 2005 door VN uitgeroepen tot internationale Holocaust-herdenkingsdag. Wordt overal ter wereld herdacht: tv-programma's, school-aandacht, kransleggingen." }],
          woorden: [{ woord: "Holocaust-herdenkingsdag", uitleg: "27 januari sinds 2005. VN-besluit. Wereldwijd herdacht." }, { woord: "dodenmarsen", uitleg: "Eind WO2: Duitsers dwongen gevangenen vanuit kampen te voet weg te trekken voor oprukkende geallieerden. Velen overleden onderweg." }, { woord: "Yom HaShoah", uitleg: "Joodse Holocaust-herdenkingsdag (april). Anders dan 27 januari (internationaal)." }],
          theorie: "Waarom 27 januari? Bevrijding Auschwitz = symbool wereld kreeg ogen open. Sovjet-soldaten filmden wat ze vonden — beelden werden later getoond op Neurenberg-processen. VN-resolutie 2005 wereldwijd. Niet door elkaar halen met NL-herdenkingsdagen.",
          voorbeelden: [{ type: "vergelijk", tekst: "27 jan = INTERNATIONAAL Holocaust. 4 mei = NL alle WO2-doden. 5 mei = NL bevrijding. 8 mei = Europa-bevrijding. 15 aug = NL/Indië. Allemaal verschillende datums." }],
          basiskennis: [{ onderwerp: "Niet andere dagen", uitleg: "5 mei = NL-bevrijding (algemeen). 4 mei = NL-Dodenherdenking (alle slachtoffers). 11 november = einde WO1." }],
          niveaus: { basis: "27 januari. A.", simpeler: "Internationale Holocaust-herdenking = 27 januari (Auschwitz bevrijd 1945). = A.", nogSimpeler: "27 jan = A." },
        },
      },
    ],
  },

  // ─── F. Gevolgen + eindopdracht ───────────────
  {
    title: "Gevolgen: Neurenberg, VN, Koude Oorlog, dekolonisatie",
    explanation: "WO2 veranderde de wereld blijvend. Vier grote gevolgen:\n\n**1. Neurenberg-processen (1945-1946)**\n• Internationaal tribunaal in **Neurenberg** berechtte de hoogste nazi's.\n• Aanklachten: misdaden tegen de vrede + oorlogsmisdaden + **misdaden tegen de menselijkheid** (= nieuw begrip!).\n• 12 doodstraffen, andere lange gevangenisstraffen.\n• Idee: 'het volgen van bevelen' is geen excuus voor wreedheid.\n\n**2. Verenigde Naties** (24 oktober 1945)\n• Opvolger van de mislukte Volkenbond (na WO1).\n• Doel: oorlogen voorkomen via overleg en samenwerking.\n• Veiligheidsraad met 5 permanente leden (VS, USSR, China, UK, Frankrijk) — de oorlogswinnaars.\n• 1948: **Universele Verklaring van de Rechten van de Mens**.\n\n**3. Koude Oorlog (1947-1989)**\n• De twee grote winnaars (VS + Sovjet-Unie) werden ineens **vijanden**.\n• Europa werd verdeeld door het '**IJzeren Gordijn**':\n  • **West**: kapitalistisch, democratisch, geleid door VS.\n  • **Oost**: communistisch, Sovjet-invloed.\n• **Berlijn** verdeeld in 4 bezettingszones → later West-Berlijn vs Oost-Berlijn.\n• 1949: **NAVO** (West) opgericht. 1955: **Warschaupact** (Oost).\n• Geen open oorlog, wel: wapenwedloop (atoombommen!), spionage, ruimtevaart.\n\n**4. Dekolonisatie**\nEuropese landen waren verzwakt en konden hun koloniën niet meer goed besturen:\n• **Nederlands-Indië** → **Indonesië** onafhankelijk in **1949** (na 4 jaar gevechten + politionele acties).\n• India onafhankelijk van Engeland (1947).\n• In de jaren '50-'60: bijna heel Afrika onafhankelijk.\n\n**Europa zelf**: leerde lessen → in 1957 wordt de **EEG** opgericht, voorloper van de huidige **EU**. Kerngedachte: economische samenwerking maakt oorlog onmogelijk.\n\n**Kernfeit voor het examen**: WO2 luidt het einde in van Europa als wereldmacht, en het begin van de Koude Oorlog tussen VS en Sovjet-Unie.",
    svg: tijdlijnSvg(),
    checks: [
      {
        q: "Wat waren de **Neurenberg-processen**?",
        options: ["Berechting van top-nazi's na de oorlog (oorlogsmisdaden + misdaden tegen menselijkheid)", "De rassenwetten van Hitler", "Een Duits sportevenement", "De toespraken van Hitler op partijbijeenkomsten"],
        answer: 0,
        wrongHints: [null, "Dat zijn de **Neurenberg-wetten** (1935), let op het verschil met de **Neurenberg-processen** (1945-46).", "Wel een sportevenement in Neurenberg geweest, maar daar gaat deze vraag niet over.", "De partijbijeenkomsten waren propaganda — geen rechtszaken."],
        uitlegPad: {
          stappen: [{ titel: "1945-1946 — top-nazi's berecht", tekst: "Internationaal tribunaal in Neurenberg (Duitsland) berechtte 22 top-nazi's. Rechters: VS, UK, USSR, Frankrijk. Aanklachten: (1) misdaden tegen vrede (= oorlog beginnen), (2) oorlogsmisdaden, (3) MISDADEN TEGEN MENSELIJKHEID (= nieuw begrip!). Resultaat: 12 doodstraffen, 7 gevangenisstraffen, 3 vrijspraken." }],
          woorden: [{ woord: "Neurenberg-processen", uitleg: "Rechtszaken 1945-46 tegen top-nazi's. Eerste internationale strafrecht-tribunaal." }, { woord: "misdaden tegen menselijkheid", uitleg: "Nieuw begrip Neurenberg: stelselmatige wreedheid tegen burgers (genocide, marteling, slavernij). Basis modern internationaal strafrecht." }, { woord: "Internationaal Strafhof (ICC)", uitleg: "Den Haag, sinds 2002. Vervolger van Neurenberg-idee. Berecht hedendaagse oorlogsmisdadigers." }],
          theorie: "Belangrijkste principe: 'ik volgde alleen bevelen' is GEEN excuus. Individuele verantwoordelijkheid. Basis voor: Joegoslavië-tribunaal (1993), Rwanda-tribunaal (1994), Internationaal Strafhof Den Haag (2002). Kruislings: Neurenberg = processen (1945-46). Neurenberg-WETTEN = rassenwetten (1935). Niet verwarren!",
          voorbeelden: [{ type: "veroordeelden", tekst: "Hermann Göring (Hitler's 2e man) = doodstraf, pleegde zelfmoord in cel. Rudolf Hess = levenslang. Albert Speer (architect) = 20 jaar. Top-naziel Goebbels + Himmler + Hitler waren al dood (zelfmoord)." }],
          basiskennis: [{ onderwerp: "Niet verwarren", uitleg: "Neurenberg-WETTEN (1935) = rassenwetten. Neurenberg-PROCESSEN (1945-46) = rechtszaken. Niet hetzelfde, examenval!" }],
          niveaus: { basis: "Berechting nazi's. A.", simpeler: "Neurenberg-processen 1945-46 = rechtszaken tegen top-nazi's. Eerste internationale strafrecht. = A.", nogSimpeler: "Nazi-rechtszaken = A." },
        },
      },
      {
        q: "Wat is de **Koude Oorlog**?",
        options: ["Spanning tussen VS (Westen) en Sovjet-Unie (Oosten) na WO2 — geen open oorlog", "Een oorlog op de Noordpool", "De oorlog van Napoleon tegen Rusland", "Een oorlog tussen Nederland en Duitsland"],
        answer: 0,
        wrongHints: [null, "'Koud' is figuurlijk — niet de temperatuur.", "Napoleon = ~1812, ander tijdperk.", "NL en Duitsland waren juist samen onderdeel van het Westen (NAVO)."],
        uitlegPad: {
          stappen: [{ titel: "1945-1989 — twee blokken", tekst: "Na WO2 stonden 2 supermachten tegenover elkaar: VS (kapitalisme/democratie) en Sovjet-Unie (communisme/dictatuur). Géén directe oorlog tussen hen (vandaar 'koud'), maar wel wapenwedloop, kernwapens, spionage, ruimterace, proxy-oorlogen (Korea, Vietnam, Afghanistan). Europa verdeeld door 'IJzeren Gordijn'." }],
          woorden: [{ woord: "Koude Oorlog", uitleg: "1945-1989. Spanning VS↔USSR zonder open militair conflict tussen hen direct." }, { woord: "IJzeren Gordijn", uitleg: "Term Churchill 1946. Scheidslijn democratisch West-Europa vs communistisch Oost-Europa." }, { woord: "NAVO", uitleg: "1949. Militair bondgenootschap West (incl. NL). Reactie op communistische dreiging." }, { woord: "Warschaupact", uitleg: "1955. Sovjet-militair pact Oost-Europa. Reactie op NAVO." }],
          theorie: "Sleutelmomenten: Berlijnse Muur (1961), Cubacrisis (1962 dichtst bij WO3), Maan-landing (1969 VS wint ruimterace), val Muur (1989), val Sovjet-Unie (1991). NL koos kant West (NAVO 1949). Eindigde door econ. zwakte USSR + Gorbatsjov-hervormingen.",
          voorbeelden: [{ type: "fase", tekst: "1962 Cubacrisis = VS ontdekt Sovjet-raketten op Cuba (90 km van VS-kust). 13 dagen op rand van kernoorlog. Kennedy + Chroesjtsjov sloten compromis." }],
          basiskennis: [{ onderwerp: "Niet letterlijk", uitleg: "'Koud' = figuurlijk (geen warm/heet conflict). Niet temperatuur. Niet Napoleon (eerder, ander). Niet NL vs Duitsland (samen West)." }],
          niveaus: { basis: "VS vs USSR. A.", simpeler: "Koude Oorlog = spanning VS↔Sovjet-Unie zonder echt vechten. 1945-1989. = A.", nogSimpeler: "VS vs Rusland = A." },
        },
      },
      {
        q: "Welk land werd in **1949** onafhankelijk van Nederland?",
        options: ["Indonesië", "India", "Suriname", "België"],
        answer: 0,
        wrongHints: [null, "India werd onafhankelijk van Engeland (1947), niet NL.", "Suriname werd pas in 1975 onafhankelijk.", "België was sinds 1830 al onafhankelijk."],
        uitlegPad: {
          stappen: [{ titel: "1945-1949 — Indonesische onafhankelijkheid", tekst: "17 augustus 1945 (2 dagen na Japanse capitulatie): Soekarno + Hatta riepen onafhankelijkheid Indonesië uit. NL erkende dit niet, stuurde leger ('politionele acties' 1947+1948-49). VN-druk + internationale veroordeling dwongen NL: 27 december 1949 erkende NL de onafhankelijkheid. Einde 350 jaar VOC/koloniale heerschappij." }],
          woorden: [{ woord: "Indonesië", uitleg: "Voorheen Nederlands-Indië (VOC 1602, kolonie 1816-1949). Onafhankelijk sinds 27 dec 1949." }, { woord: "Soekarno", uitleg: "Eerste president Indonesië. Leider onafhankelijkheidsbeweging." }, { woord: "politionele acties", uitleg: "NL-militaire operaties 1947+1948-49 om Indonesische onafhankelijkheid te onderdrukken. Achteraf zwaar bekritiseerd." }],
          theorie: "Dekolonisatie was groot WO2-gevolg: Europese landen verzwakt, koloniën grepen kans. India 1947 (van UK). Indonesië 1949 (van NL). Vietnam 1954 (van Fr). Heel Afrika in jaren '50-'60. WO2 = einde Europees imperium.",
          voorbeelden: [{ type: "context", tekst: "NL dacht eerst dat ze konden 'doorgaan' na bevrijding 1945. Indonesiërs hadden Japanse bezetting + onafhankelijkheidsbeweging meegemaakt — wilden geen NL meer. Bittere oorlog ~150.000 doden." }],
          basiskennis: [{ onderwerp: "Niet andere landen", uitleg: "India = van Engeland (1947), niet NL. Suriname = NL-kolonie, maar onafhankelijk 1975. België = 1830 (al lang eerder)." }],
          niveaus: { basis: "Indonesië. A.", simpeler: "1949 = Indonesië onafhankelijk van NL. Einde Nederlands-Indië. = A.", nogSimpeler: "Indonesië = A." },
        },
      },
    ],
  },

  // ─── F2. Eindopdracht ───────────────
  {
    title: "Eindopdracht — gebeurtenissen op de tijdlijn",
    explanation: "Tijd om alles toe te passen! Plaats elke gebeurtenis in de juiste fase.\n\n**Snelle samenvatting**:\n\n| Jaartal | Gebeurtenis |\n|---|---|\n| 1919 | Verdrag van Versailles |\n| 1929 | Beurscrash New York |\n| 1933 | Hitler aan de macht |\n| 1935 | Neurenberg-wetten |\n| 1938 | Anschluss + Kristallnacht |\n| 1 sep 1939 | Duitsland valt Polen binnen — WO2 begint |\n| 10 mei 1940 | NL bezet |\n| 14 mei 1940 | Bombardement Rotterdam |\n| 25-26 feb 1941 | Februaristaking |\n| jun 1941 | Operatie Barbarossa (USSR) |\n| dec 1941 | Pearl Harbor — VS in oorlog |\n| jan 1942 | Wannsee-conferentie |\n| feb 1943 | Stalingrad — keerpunt oost |\n| 6 jun 1944 | D-Day |\n| sep 1944 | Market Garden — zuid-NL bevrijd |\n| '44-'45 | Hongerwinter |\n| 27 jan 1945 | Bevrijding Auschwitz |\n| 30 apr 1945 | Hitler zelfmoord |\n| 5 mei 1945 | Bevrijding NL |\n| 8 mei 1945 | V-E Day |\n| 6 + 9 aug 1945 | Atoombommen Hiroshima + Nagasaki |\n| 15 aug 1945 | Japan capituleert — einde WO2 |\n| 1945-46 | Neurenberg-processen |\n| 1949 | Indonesië onafhankelijk |\n\nVeel succes!",
    svg: tijdlijnSvg(),
    checks: [
      {
        q: "Welk jaar wordt vaak gezien als **direct begin** van WO2?",
        options: ["1939", "1933", "1929", "1945"],
        answer: 0,
        wrongHints: [null, "Hitler werd toen Duits leider — wel een oorzaak, maar nog geen oorlog.", "Beurscrash — 10 jaar te vroeg.", "Dat is juist het einde."],
        uitlegPad: {
          stappen: [{ titel: "1 september 1939 = officieel begin", tekst: "WO2 begon op 1 september 1939 toen Duitsland Polen binnenviel. 3 september: Engeland + Frankrijk verklaarden Duitsland oorlog. Dat maakte het 'wereldoorlog' — grote mogendheden betrokken. Eerdere jaartallen waren oorzaken (1933 Hitler, 1929 crisis) of einde (1945), niet begin." }],
          woorden: [{ woord: "oorzaak vs aanleiding", uitleg: "Oorzaak = lange-termijn (Versailles, crisis, Hitler). Aanleiding = directe trigger (Polen-inval)." }, { woord: "casus belli", uitleg: "Reden om oorlog te verklaren. Hier: Polen-belofte UK+FR." }],
          theorie: "Klassieke examenvraag. Niet 1933 (Hitler-macht, oorzaak). Niet 1929 (crisis, oorzaak). Niet 1945 (einde). 1939 = officieel begin. Sommige historici zeggen 1937 (Japan-China) of 1941 (Pearl Harbor) als 'echt wereldoorlog', maar standaardantwoord is 1939.",
          voorbeelden: [{ type: "tijdlijn", tekst: "23 aug 1939: Molotov-Ribbentrop. 1 sept 1939: Polen-inval. 3 sept 1939: UK+FR verklaren oorlog. 17 sept 1939: USSR valt Polen ook binnen. 28 sept 1939: Polen verdeeld." }],
          basiskennis: [{ onderwerp: "Niet andere jaartallen", uitleg: "1933 = Hitler kanselier (oorzaak, geen oorlog). 1929 = crisis (oorzaak). 1945 = einde." }],
          niveaus: { basis: "1939. A.", simpeler: "WO2 begon 1 september 1939 (Polen-inval). = A.", nogSimpeler: "1939 = A." },
        },
      },
      {
        q: "Wat was er **eerst**: Anne Frank in onderduik óf D-Day?",
        options: ["Anne Frank in onderduik (vanaf 1942) — D-Day was juni 1944", "D-Day eerst — Anne Frank dook later onder", "Tegelijk in 1944", "Beide kort na de oorlog"],
        answer: 0,
        wrongHints: [null, "Andersom — onderduik 1942, D-Day 1944.", "Onderduik begon al in 1942, eerder.", "Beide tijdens de oorlog, niet erna."],
        uitlegPad: {
          stappen: [{ titel: "Volgorde: Anne 1942 → D-Day 1944", tekst: "Anne Frank dook 6 juli 1942 onder in het Achterhuis Prinsengracht 263 Amsterdam. D-Day was 6 juni 1944. Verschil: bijna 2 jaar. Anne werd 4 augustus 1944 ontdekt — toen liepen geallieerden net Frankrijk in na D-Day. Te laat voor haar." }],
          woorden: [{ woord: "Achterhuis", uitleg: "Verborgen ruimte achter Otto Frank's kantoor. Anne + 7 anderen woonden er 25 maanden." }, { woord: "tijdsverband", uitleg: "Volgorde van gebeurtenissen vaststellen. Standaard-examen-vaardigheid geschiedenis." }],
          theorie: "Examenvragen testen tijdslijn-kennis. Truc: koppel jaartal aan gebeurtenis. Anne Frank → 1942 (onderduik) / 1944 (oppakken) / 1945 (dood). D-Day → ALLEEN 6 juni 1944. Anne dook 2 jaar VOOR D-Day onder.",
          voorbeelden: [{ type: "samenval", tekst: "Anne werd 4 augustus 1944 opgepakt — dat is 2 maanden NA D-Day (juni 1944). Geallieerden waren al in Frankrijk maar nog niet in NL. Mensen hoopten op snelle bevrijding, maar Amsterdam moest nog 9 maanden wachten." }],
          basiskennis: [{ onderwerp: "Niet andersom", uitleg: "Onderduik = 1942. D-Day = 1944. Tussenliggend 2 jaar. Niet tegelijk. Niet na de oorlog (beide tijdens)." }],
          niveaus: { basis: "Anne eerst (1942). A.", simpeler: "Anne dook onder 1942 → D-Day juni 1944. Anne eerst, 2 jaar verschil. = A.", nogSimpeler: "Anne eerst = A." },
        },
      },
      {
        q: "Wat is een **direct gevolg** van WO2 voor Nederland?",
        options: ["Verlies Nederlands-Indië → Indonesië onafhankelijk (1949)", "Nederland werd onderdeel van Duitsland", "Nederland werd communistisch", "Nederland kreeg een keizer"],
        answer: 0,
        wrongHints: [null, "Het tegendeel — NL was juist bevrijd, niet ingelijfd.", "NL kwam aan westelijke kant van het IJzeren Gordijn.", "NL is sinds 1815 een koninkrijk, geen keizerrijk."],
        uitlegPad: {
          stappen: [{ titel: "Verlies kolonie = grootste NL-gevolg", tekst: "Belangrijkste WO2-gevolgen NL: (1) verlies Nederlands-Indië → Indonesië onafhankelijk 1949. (2) Wederopbouw (1945-1955), schade Rotterdam + Hongerwinter. (3) NL koos kant West (NAVO 1949). (4) EU-pionier (EEG 1957). (5) Marshall-hulp (1948-1952): VS-geld voor wederopbouw." }],
          woorden: [{ woord: "wederopbouw", uitleg: "Periode 1945-1955: herstel van WO2-schade. Sober leven, hard werken, woningnood." }, { woord: "Marshall-hulp", uitleg: "Amerikaans geld voor herstel West-Europa 1948-1952. NL kreeg ~1,1 miljard dollar." }],
          theorie: "Indonesië-verlies = grootste imperiale verlies NL ooit. Verandering: van koloniaal middelmacht naar middelgroot Europees land. Andere gevolgen ook belangrijk, maar dekolonisatie was DIRECTE en GROOTSTE breuk met verleden.",
          voorbeelden: [{ type: "tijd", tekst: "1949: Indonesië los. 1957: EEG (=EU). 1957: Marshall-hulp af. 1960s: gastarbeiders uit Spanje + Turkije + Marokko. Geleidelijk NL-transformatie tot modern Europees land." }],
          basiskennis: [{ onderwerp: "Niet andere uitkomsten", uitleg: "NL werd JUIST bevrijd, niet bij Duitsland. NL ging westkant IJzeren Gordijn (niet communistisch). Geen keizer (sinds 1815 koninkrijk)." }],
          niveaus: { basis: "Indonesië onafhankelijk. A.", simpeler: "Direct NL-gevolg WO2 = verlies Nederlands-Indië, Indonesië onafhankelijk 1949. = A.", nogSimpeler: "Indonesië weg = A." },
        },
      },
      {
        q: "Welke **drie hoofdoorzaken** zorgden samen voor WO2?",
        options: ["Versailles-verdrag + crisis 1929 + Hitler/NSDAP", "Atoombom + Pearl Harbor + Stalingrad", "Holocaust + Anne Frank + Hongerwinter", "VN + EU + NAVO"],
        answer: 0,
        wrongHints: [null, "Dat zijn juist gebeurtenissen *tijdens* WO2, geen oorzaken.", "Dat zijn gevolgen + onderdelen van WO2, geen oorzaken vooraf.", "Dat zijn allemaal organisaties van *na* WO2."],
        uitlegPad: {
          stappen: [{ titel: "Versailles + Crisis + Hitler", tekst: "Klassieke examen-3-vragen. (1) Versailles (1919): Duitse boosheid + armoede. (2) Crisis 1929: armoede explodeerde → wanhoop. (3) Hitler/NSDAP: extreme leider beloofde wraak. Zonder een van de 3 was WO2 misschien niet gebeurd. Onthoud: 1919 → 1929 → 1933 → 1939." }],
          woorden: [{ woord: "structurele oorzaken", uitleg: "Lange-termijn factoren die situatie mogelijk maakten (Versailles, crisis)." }, { woord: "directe oorzaak", uitleg: "Persoon/gebeurtenis die het in beweging zette (Hitler/NSDAP)." }, { woord: "aanleiding", uitleg: "Trigger-moment (Polen-inval 1 sept 1939). Niet hetzelfde als oorzaak!" }],
          theorie: "Op examen vaak gevraagd in deze 3-deling. Niet 'Hitler was kwaad' (te smal). Niet 'WO1 leidde tot WO2' (te breed). 3 dingen samen, in volgorde + samenhang. Let op woord 'samen' — wijst op meervoudige oorzakelijkheid.",
          voorbeelden: [{ type: "schema", tekst: "Versailles 1919 → 20 jaar Duitse boosheid → Crisis 1929 → wanhoop + werkloos → Hitler-stemmen 1932 → Hitler kanselier 1933 → oorlogsvoorbereiding 1935-1939 → Polen 1939 → WO2." }],
          basiskennis: [{ onderwerp: "Niet andere combinaties", uitleg: "Atoombom + Pearl Harbor + Stalingrad = TIJDENS WO2, geen oorzaken. Holocaust + Anne Frank + Hongerwinter = onderdelen/gevolgen. VN + EU + NAVO = NA WO2." }],
          niveaus: { basis: "Versailles + crisis + Hitler. A.", simpeler: "3 oorzaken WO2: Versailles (boos) + crisis (arm) + Hitler (extreem). = A.", nogSimpeler: "3 dingen samen = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const wereldoorlog2Geschiedenis = {
  id: "wereldoorlog2-geschiedenis",
  title: "Tweede Wereldoorlog — oorzaken, verloop, gevolgen",
  emoji: "🕊️",
  level: "klas3-4",
  subject: "geschiedenis",
  referentieNiveau: "VO-onderbouw/bovenbouw",
  sloThema: "Geschiedenis — Tijd van Wereldoorlogen (WO II)",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F" },
    { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "po-1F" },
  ],
  intro:
    "Van het Verdrag van Versailles tot de bevrijding van Nederland en de Koude Oorlog. De drie hoofdoorzaken, het verloop van de oorlog in Europa en in Nederland, de Holocaust, en de gevolgen die de moderne wereld vormden. Examenstof CSE Geschiedenis.",
  triggerKeywords: [
    "wo2", "wereldoorlog 2", "tweede wereldoorlog", "ww2",
    "hitler", "nazi", "nazis", "nsdap", "duitsland 1940",
    "versailles", "verdrag van versailles",
    "crisis 1929", "beurskrach", "weimar",
    "anschluss", "appeasement", "munchen",
    "blitzkrieg", "polen 1939",
    "rotterdam bombardement", "mei 1940", "wilhelmina", "radio oranje",
    "nsb", "mussert", "februaristaking", "westerbork", "anne frank",
    "verzet", "onderduiken", "het parool", "trouw",
    "stalingrad", "barbarossa", "oostfront",
    "d-day", "normandie", "market garden", "arnhem",
    "hongerwinter", "operatie manna",
    "bevrijding", "5 mei 1945", "8 mei", "v-e day",
    "hiroshima", "nagasaki", "atoombom", "japan capitulatie", "15 augustus",
    "holocaust", "shoah", "auschwitz", "sobibor", "wannsee", "endlosung",
    "neurenberg processen", "neurenberg wetten",
    "verenigde naties", "vn", "navo", "warschaupact",
    "koude oorlog", "ijzeren gordijn",
    "dekolonisatie", "nederlands-indie", "indonesie 1949",
  ],
  chapters,
  steps,
};

export default wereldoorlog2Geschiedenis;
