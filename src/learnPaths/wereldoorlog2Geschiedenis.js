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
        options: [
          "Schuld bekennen, herstelbetalingen + klein leger",
          "Sovjet-Unie binnenvallen",
          "Een muur bouwen door Berlijn",
          "Atoomwapens ontwikkelen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — pas in 1941 viel Duitsland de Sovjet-Unie binnen.",
          "De muur werd pas in 1961 gebouwd — veel later.",
          "Atoomwapens kwamen pas later (door de VS, 1945).",
        ],
      },
      {
        q: "Hoe ervoeren veel Duitsers het Verdrag van Versailles?",
        options: [
          "Als een vernedering",
          "Als een eerlijke oplossing",
          "Als bevrijding",
          "Als overwinning",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De voorwaarden waren bewust hard — niet bedoeld als compromis.",
          "Duitsland verloor juist gebied en moest betalen.",
          "Duitsland had de oorlog verloren, niet gewonnen.",
        ],
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
        options: [
          "De beurs in New York crashte → wereldwijde crisis",
          "Hitler werd Duits leider",
          "WO2 begon",
          "Nederland werd bezet",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Hitler werd later kanselier (1933).",
          "WO2 begon in 1939.",
          "Bezetting NL was 1940.",
        ],
      },
      {
        q: "Waarom groeide de NSDAP zo snel tussen 1928 en 1932?",
        options: [
          "Door werkloosheid + armoede zochten mensen extreme oplossingen",
          "De regering verbood alle andere partijen",
          "Duitsland werd binnengevallen door Frankrijk",
          "De koning steunde Hitler",
        ],
        answer: 0,
        wrongHints: [
          null,
          "In 1932 waren er nog gewoon vrije verkiezingen.",
          "Frankrijk viel Duitsland niet binnen in deze periode.",
          "Duitsland was sinds 1918 een republiek — geen koning meer.",
        ],
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
        options: [
          "Duitsland nam Oostenrijk in zonder oorlog",
          "Een verdrag met de Sovjet-Unie",
          "Een kamp voor politieke gevangenen",
          "Een Duitse uitvinding",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verdrag met USSR komt pas in 1939 (Molotov-Ribbentrop).",
          "Kamp = concentratiekamp, ander begrip.",
          "Anschluss is een politieke gebeurtenis, geen uitvinding.",
        ],
      },
      {
        q: "Wat was **appeasement-politiek**?",
        options: [
          "Hitler toegevingen doen om oorlog te voorkomen",
          "Hitler aanvallen voordat hij groter werd",
          "Een Duits sportfeest",
          "Het verbieden van de NSDAP",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — Engeland/Frankrijk durfden juist niet te confronteren.",
          "Geen sport, maar diplomatie.",
          "NSDAP werd niet verboden — werd juist de enige partij.",
        ],
      },
      {
        q: "Welke 3 oorzaken samen leidden tot WO2?",
        options: [
          "Versailles + crisis '29 + Hitler aan de macht",
          "Atoombom + televisie + EU",
          "Pest + kruistochten + Romeinen",
          "Boekdrukkunst + VOC + Napoleon",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat zijn allemaal dingen van ná WO2 of niet-relevant.",
          "Veel te oud — middeleeuwen en oudheid.",
          "16e-19e eeuw — eerdere tijdvakken.",
        ],
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
        wrongHints: [
          null,
          "Frankrijk werd pas in mei 1940 aangevallen.",
          "NL werd 8 maanden later bezet (mei 1940).",
          "USSR pas in juni 1941 (Operatie Barbarossa).",
        ],
      },
      {
        q: "Wat is **Blitzkrieg**?",
        options: [
          "Snelle oorlog: tanks + luchtmacht in één gecoördineerde aanval",
          "Een soort schuilkelder",
          "Het Duitse leger op de fiets",
          "Een vredesverdrag",
        ],
        answer: 0,
        wrongHints: [
          null,
          "'Blitz' = bliksem (snelheid), niet schuilen.",
          "Tanks en motorvoertuigen, niet fietsen.",
          "Het tegendeel — geen vrede.",
        ],
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
        wrongHints: [
          null,
          "Dat is het begin van WO2 in Polen — nog geen NL.",
          "Dat is juist de bevrijding van NL.",
          "Dat is D-Day in Normandië — niet NL.",
        ],
      },
      {
        q: "Wie sprak via **Radio Oranje** vanuit Londen?",
        options: ["Koningin Wilhelmina", "Willem van Oranje", "Anne Frank", "Adolf Hitler"],
        answer: 0,
        wrongHints: [
          null,
          "Hij leefde in de 16e eeuw — Tachtigjarige Oorlog.",
          "Anne Frank was een joods meisje in onderduik, geen omroepster.",
          "Hitler was juist de tegenstander.",
        ],
      },
      {
        q: "Hoeveel dagen duurde het gevecht in mei 1940 in Nederland?",
        options: ["5 dagen", "5 weken", "5 maanden", "5 jaar"],
        answer: 0,
        wrongHints: [
          null,
          "Te lang — capitulatie was al op 15 mei.",
          "Veel te lang.",
          "Dat is de hele bezettingsduur, niet het gevecht zelf.",
        ],
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
        options: [
          "Nederlandse pro-Duitse partij die met bezetters samenwerkte",
          "Een Nederlands verzetsblad",
          "Naam van een concentratiekamp",
          "Een Engels leger",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verzetsbladen waren *Het Parool*, *Trouw*, *Vrij Nederland*.",
          "Nederlandse kampen heetten Westerbork, Vught.",
          "NSB was juist Nederlands en pro-Duits.",
        ],
      },
      {
        q: "Wat was bijzonder aan de **Februaristaking** (1941)?",
        options: [
          "Het was de enige openlijke massastaking tegen jodenvervolging in bezet Europa",
          "Het was de eerste vakbondsstaking in NL",
          "Het lukte de Duitsers volledig te verdrijven",
          "Het was een staking in Duitsland zelf",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vakbondsstakingen waren er al lang vóór WO2.",
          "Helaas niet — Duitsers bleven nog 4 jaar.",
          "Ging om Amsterdam, niet Duitsland.",
        ],
      },
      {
        q: "Wat betekent **collaboratie** in deze context?",
        options: [
          "Samenwerken met de vijand (bezetter)",
          "Verzet plegen",
          "Onderduiken",
          "Bevrijden",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Het tegenovergestelde — verzet was juist vechten tegen.",
          "Dat is niet hetzelfde — onderduikers waren slachtoffer/verzet, geen collaborateurs.",
          "Bevrijding kwam pas in 1944-45 door geallieerden.",
        ],
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
        options: [
          "Geallieerde landing in Normandië, Frankrijk",
          "Het einde van WO2",
          "Het bombardement op Rotterdam",
          "Hitlers verjaardag",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Einde was 5/8 mei 1945 — bijna een jaar later.",
          "Rotterdam-bombardement was 14 mei 1940.",
          "Verkeerd onderwerp — D-Day is een militaire operatie.",
        ],
      },
      {
        q: "Waar ging de slag bij **Stalingrad** over?",
        options: [
          "Duitse stoot naar de Sovjet-Unie raakt vast → keerpunt op het oostfront",
          "Een aanval op Engeland",
          "Een poging Nederland te bevrijden",
          "Een atoombomtest",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Stalingrad ligt in Rusland, ver van Engeland.",
          "Bevrijding NL was D-Day en Market Garden.",
          "Atoombommen kwamen pas in 1945, in Japan.",
        ],
      },
      {
        q: "Wat was de **Hongerwinter** in NL?",
        options: [
          "Voedseltekort in bezet noord-NL, winter 1944-1945",
          "Een Duitse hongerstaking",
          "Een feestdag op 5 mei",
          "Een militair plan",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet de Duitsers leden honger — de bezette NL bevolking.",
          "5 mei is bevrijdingsdag, geen hongerwinter.",
          "Het was een gevolg van blokkades, geen militair plan op zich.",
        ],
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
        wrongHints: [
          null,
          "Dat is officiële Duitse capitulatie in heel Europa, 3 dagen na NL.",
          "Dat is einde oorlog in Azië (Japan).",
          "Dat is D-Day in Normandië.",
        ],
      },
      {
        q: "Waarom herdenkt NL ook **15 augustus**?",
        options: [
          "Einde van de oorlog in voormalig Nederlands-Indië (Japan capituleert)",
          "Hitler pleegt zelfmoord",
          "D-Day vindt plaats",
          "Begin van WO2",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Hitler stierf 30 april 1945 — niet 15 augustus.",
          "D-Day was 6 juni 1944.",
          "WO2 begon op 1 september 1939.",
        ],
      },
      {
        q: "Wat is het verschil tussen **4 mei** en **5 mei**?",
        options: [
          "4 mei = herdenken (doden); 5 mei = vieren (vrijheid)",
          "4 mei = vieren; 5 mei = herdenken",
          "Beide hetzelfde — twee dagen vrij",
          "4 mei = oorlog begint; 5 mei = oorlog eindigt",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — eerst herdenken, dan vieren.",
          "Ze hebben elk hun eigen betekenis.",
          "Geen — die data zijn allemaal in 1945.",
        ],
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
        options: [
          "Stelselmatige moord op ~6 miljoen joden door nazi-Duitsland",
          "Een militair plan voor de invasie van Engeland",
          "Een Duitse propagandafilm",
          "Een naoorlogs herdenkingsmonument",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Plan voor invasie Engeland heette *Operatie Seelöwe* — niet uitgevoerd.",
          "Niet één film maar een georganiseerde misdaad.",
          "Een herdenking kwam pas ná de oorlog — Holocaust is de gebeurtenis zelf.",
        ],
      },
      {
        q: "Wat was **Westerbork**?",
        options: [
          "Doorgangskamp in Drenthe waar NL-joden naartoe werden gebracht voor transport",
          "Een verzetsorganisatie",
          "Een Duits eindkamp",
          "Een Engels vliegveld",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Westerbork was een gevangenkamp, geen verzetsgroep.",
          "Bijna — maar Westerbork was juist het *doorgangs*kamp; vermoord werd vooral in Auschwitz/Sobibor in Polen.",
          "Westerbork lag in Drenthe (NL), geen Engels vliegveld.",
        ],
      },
      {
        q: "Wanneer is de **internationale Holocaust-herdenkingsdag**?",
        options: [
          "27 januari (bevrijding Auschwitz, 1945)",
          "5 mei (bevrijding NL)",
          "4 mei (NL Dodenherdenking)",
          "11 november (einde WO1)",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is Bevrijdingsdag NL, niet Holocaust-herdenking specifiek.",
          "Dichtbij — Dodenherdenking herdenkt álle slachtoffers van WO2 + latere conflicten, niet specifiek de Holocaust.",
          "Dat is einde WO1, andere oorlog.",
        ],
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
        options: [
          "Berechting van top-nazi's na de oorlog (oorlogsmisdaden + misdaden tegen menselijkheid)",
          "De rassenwetten van Hitler",
          "Een Duits sportevenement",
          "De toespraken van Hitler op partijbijeenkomsten",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat zijn de **Neurenberg-wetten** (1935), let op het verschil met de **Neurenberg-processen** (1945-46).",
          "Wel een sportevenement in Neurenberg geweest, maar daar gaat deze vraag niet over.",
          "De partijbijeenkomsten waren propaganda — geen rechtszaken.",
        ],
      },
      {
        q: "Wat is de **Koude Oorlog**?",
        options: [
          "Spanning tussen VS (Westen) en Sovjet-Unie (Oosten) na WO2 — geen open oorlog",
          "Een oorlog op de Noordpool",
          "De oorlog van Napoleon tegen Rusland",
          "Een oorlog tussen Nederland en Duitsland",
        ],
        answer: 0,
        wrongHints: [
          null,
          "'Koud' is figuurlijk — niet de temperatuur.",
          "Napoleon = ~1812, ander tijdperk.",
          "NL en Duitsland waren juist samen onderdeel van het Westen (NAVO).",
        ],
      },
      {
        q: "Welk land werd in **1949** onafhankelijk van Nederland?",
        options: ["Indonesië", "India", "Suriname", "België"],
        answer: 0,
        wrongHints: [
          null,
          "India werd onafhankelijk van Engeland (1947), niet NL.",
          "Suriname werd pas in 1975 onafhankelijk.",
          "België was sinds 1830 al onafhankelijk.",
        ],
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
        wrongHints: [
          null,
          "Hitler werd toen Duits leider — wel een oorzaak, maar nog geen oorlog.",
          "Beurscrash — 10 jaar te vroeg.",
          "Dat is juist het einde.",
        ],
      },
      {
        q: "Wat was er **eerst**: Anne Frank in onderduik óf D-Day?",
        options: [
          "Anne Frank in onderduik (vanaf 1942) — D-Day was juni 1944",
          "D-Day eerst — Anne Frank dook later onder",
          "Tegelijk in 1944",
          "Beide kort na de oorlog",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — onderduik 1942, D-Day 1944.",
          "Onderduik begon al in 1942, eerder.",
          "Beide tijdens de oorlog, niet erna.",
        ],
      },
      {
        q: "Wat is een **direct gevolg** van WO2 voor Nederland?",
        options: [
          "Verlies Nederlands-Indië → Indonesië onafhankelijk (1949)",
          "Nederland werd onderdeel van Duitsland",
          "Nederland werd communistisch",
          "Nederland kreeg een keizer",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Het tegendeel — NL was juist bevrijd, niet ingelijfd.",
          "NL kwam aan westelijke kant van het IJzeren Gordijn.",
          "NL is sinds 1815 een koninkrijk, geen keizerrijk.",
        ],
      },
      {
        q: "Welke **drie hoofdoorzaken** zorgden samen voor WO2?",
        options: [
          "Versailles-verdrag + crisis 1929 + Hitler/NSDAP",
          "Atoombom + Pearl Harbor + Stalingrad",
          "Holocaust + Anne Frank + Hongerwinter",
          "VN + EU + NAVO",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat zijn juist gebeurtenissen *tijdens* WO2, geen oorzaken.",
          "Dat zijn gevolgen + onderdelen van WO2, geen oorzaken vooraf.",
          "Dat zijn allemaal organisaties van *na* WO2.",
        ],
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
