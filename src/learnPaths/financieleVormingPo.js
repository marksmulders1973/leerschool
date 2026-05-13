// Leerpad: Financiële vorming — groep 6-8 PO.
// Onderdeel Cito-rekenen + leefwereld. Referentieniveau 1F.
// 6 stappen met uitlegPad. Sluit op geldRekenen (groep 5-8).

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  spaar: "#66bb6a",
  uitgaaf: "#ff7043",
  belang: "#ffd54f",
  lenen: "#ef5350",
  highlight: "#42a5f5",
};

const stepEmojis = ["💶", "💰", "🏦", "📊", "⚠️", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is geld?", emoji: "💶", from: 0, to: 0 },
  { letter: "B", title: "Zakgeld + verdienen", emoji: "💰", from: 1, to: 1 },
  { letter: "C", title: "Sparen + rente", emoji: "🏦", from: 2, to: 2 },
  { letter: "D", title: "Begroten (50/30/20)", emoji: "📊", from: 3, to: 3 },
  { letter: "E", title: "Lenen + reclame-trucs", emoji: "⚠️", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function begrotingSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">50/30/20-regel — €100 zakgeld</text>

<rect x="20" y="50" width="140" height="40" rx="6" fill="rgba(255,112,67,0.18)" stroke="${COLORS.uitgaaf}" stroke-width="1.5"/>
<text x="90" y="68" text-anchor="middle" fill="${COLORS.uitgaaf}" font-size="11" font-family="Arial" font-weight="bold">50% NODIG</text>
<text x="90" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">€50 — eten, school</text>

<rect x="170" y="50" width="80" height="40" rx="6" fill="rgba(255,213,79,0.18)" stroke="${COLORS.belang}" stroke-width="1.5"/>
<text x="210" y="68" text-anchor="middle" fill="${COLORS.belang}" font-size="11" font-family="Arial" font-weight="bold">30% LEUK</text>
<text x="210" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">€30 — uitstapje</text>

<rect x="260" y="50" width="40" height="40" rx="6" fill="rgba(102,187,106,0.18)" stroke="${COLORS.spaar}" stroke-width="1.5"/>
<text x="280" y="68" text-anchor="middle" fill="${COLORS.spaar}" font-size="10" font-family="Arial" font-weight="bold">20%</text>
<text x="280" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">SPAAR</text>

<text x="160" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">💡 50% nodig + 30% leuk + 20% sparen = gezonde verdeling</text>
<text x="160" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Werkt voor zakgeld, salaris, of weekgeld</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is geld?
  {
    title: "Wat is geld + waarom?",
    explanation:
      "**Geld** is iets dat we gebruiken om dingen te kopen of te verkopen.\n\n**Drie functies van geld** *(uit het hoofd!)*:\n\n**1. Ruilmiddel** 🔄\n• Vroeger ruilden mensen direct *(boer ruilt 1 koe voor 10 zakken graan)*.\n• Probleem: wat als boer geen graan wil maar wel schoenen?\n• Geld lost dit op: alles heeft een **prijs in geld**, en met geld koop je wat je wil.\n\n**2. Rekeneenheid** 📏\n• Met geld kun je **prijzen vergelijken**.\n• 'Deze fiets kost €200, die andere €150 — verschil €50.'\n• Zonder geld moeilijk vergelijken.\n\n**3. Spaarmiddel** 🏦\n• Geld kun je **bewaren** voor later.\n• Een koe kan vandaag €1000 waard zijn, maar geeft je geen rente en kan ziek worden.\n• Geld op spaarrekening krijg je rente over.\n\n**Soorten geld in Nederland**:\n\n**1. Munten** 🪙\n• 1 cent, 2 cent (zelden), 5 cent, 10 cent, 20 cent, 50 cent.\n• 1 euro, 2 euro.\n• In NL worden 1+2 cent vrijwel niet gebruikt → afronden op 5 cent.\n\n**2. Biljetten** 💵\n• €5, €10, €20, €50, €100, €200, €500.\n• €500 wordt steeds minder uitgegeven *(witwas-risico)*.\n\n**3. Digitaal geld** 📱\n• Op bankrekening *(saldo, niet munten/biljetten)*.\n• Pinpas / creditcard.\n• Smartphone (Tikkie, Apple Pay).\n• 95% van geld in NL is digitaal.\n\n**4. Crypto-valuta** 🪙\n• Bitcoin, Ethereum.\n• **Niet erkend** als officiële munt in NL.\n• Heel volatiele waarde — kan in dag 20% stijgen of dalen.\n• Geen jaar-niveau geld voor kinderen aanbevolen.\n\n**Euro — waar betaal je mee?**\nDe **euro** is munt in **20 landen** in EU *(eurozone)*:\nNederland, België, Duitsland, Frankrijk, Italië, Spanje, Portugal, Oostenrijk, Ierland, Finland, Letland, Litouwen, Estland, Slowakije, Slovenië, Malta, Cyprus, Griekenland, Luxemburg, Kroatië *(sinds 2023)*.\n\n**Niet-euro EU**: Zweden, Denemarken, Polen, Tsjechië, Hongarije, Roemenië, Bulgarije.\n**Buiten EU**: Pond *(UK)*, Dollar *(VS)*, Yen *(Japan)*, etc.\n\n**Wisselkoersen** *(als je naar buitenland gaat)*:\n• €1 ≈ $1,08 *(varieert)*.\n• €1 ≈ £0,85.\n• €100 → ongeveer $108 of £85.\n\n**Cito-feitje**:\nVóór de euro had Nederland de **gulden** (1814-2002). 1 euro = 2,20371 gulden.\n\n**Cito-vragen**:\n*'Wat is een ruilmiddel?'* → iets om mee te ruilen, zoals geld.\n*'Welke landen gebruiken euro?'* → 20 landen in eurozone.\n*'Wat is digitaal geld?'* → geld op bank, pinpas, telefoon.",
    checks: [
      {
        q: "Wat zijn de **3 functies** van geld?",
        options: ["Ruilmiddel + rekeneenheid + spaarmiddel", "Munt + biljet + digitaal", "Sparen + lenen + uitgeven", "Bank + crypto + cash"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Dat zijn soorten geld.", "Dat zijn acties.", "Geen functies."],
        uitlegPad: {
          stappen: [
            { titel: "Waarom hebben we geld?", tekst: "Geld vervult 3 functies tegelijk. Daardoor is het zo handig in het dagelijks leven." },
            { titel: "1) Ruilmiddel", tekst: "Vroeger ruilden mensen direct (koe voor graan). Met geld kun je ALLES kopen met hetzelfde middel. Veel makkelijker." },
            { titel: "2) Rekeneenheid", tekst: "Met geld kun je prijzen vergelijken. 'Deze fiets €200, die €150' — je ziet meteen welke goedkoper is." },
            { titel: "3) Spaarmiddel", tekst: "Geld kun je BEWAREN voor later. Een koe wordt ouder, geld op de bank groeit door rente." },
          ],
          woorden: [
            { woord: "ruilmiddel", uitleg: "Voor uitwisseling van goederen/diensten." },
            { woord: "rekeneenheid", uitleg: "Om prijzen te vergelijken." },
            { woord: "spaarmiddel", uitleg: "Om waarde te bewaren." },
          ],
          theorie: "Cito-tip: onthoud de 3 R's: Ruilen, Rekenen, (op)spaRen (sparen). Drie functies, drie woorden die met R beginnen.",
          voorbeelden: [
            { type: "stap", tekst: "Je koopt een boek met €10 = ruilen. Je vergelijkt prijs van 2 boeken = rekenen. Je legt €10 opzij = sparen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "3 functies = Ruilmiddel + Rekeneenheid + Spaarmiddel. Munten/biljetten/digitaal = soorten, geen functies." }],
          niveaus: {
            basis: "Geld doet 3 dingen: ruilen, rekenen, sparen.",
            simpeler: "Kopen + prijzen vergelijken + bewaren voor later.",
            nogSimpeler: "Ruilen, rekenen, sparen.",
          },
        },
      },
      {
        q: "Hoeveel **landen** gebruiken de euro?",
        options: ["20 (eurozone)", "5", "27 (alle EU = Europese Unie)", "50"],
        answer: 0,
        wrongHints: [null, "Klopt — niet elk EU-land heeft euro.", "Te weinig.", "EU = 27 landen, eurozone = 20 met euro.", "Veel te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Twee verschillende dingen", tekst: "Let op: EU (Europese Unie) en eurozone zijn NIET hetzelfde." },
            { titel: "EU = 27 landen", tekst: "De EU is een samenwerking van **27 landen** in Europa. Daar horen ze allemaal bij." },
            { titel: "Eurozone = 20 landen met euro", tekst: "Van die 27 EU-landen gebruiken **20** ook de euro als geld. De andere 7 (Zweden, Denemarken, Polen, Tsjechië, Hongarije, Roemenië, Bulgarije) hebben nog eigen munt." },
          ],
          woorden: [
            { woord: "EU", uitleg: "Europese Unie — 27 landen die samenwerken." },
            { woord: "eurozone", uitleg: "20 landen in EU die de euro gebruiken." },
          ],
          theorie: "Cito-truc: EU = 27 LANDEN (politiek). Eurozone = 20 met EURO (geld). Verschillende dingen. Sinds 2023: Kroatië is laatste die euro invoerde.",
          voorbeelden: [
            { type: "stap", tekst: "Zweden: WEL in EU, NIET in eurozone (gebruikt Zweedse kroon)." },
            { type: "stap", tekst: "Frankrijk: WEL in EU, WEL in eurozone (gebruikt euro)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eurozone is een KLEINERE groep BINNEN de EU." }],
          niveaus: {
            basis: "20 landen gebruiken euro (eurozone).",
            simpeler: "EU heeft 27 landen. Maar slechts 20 daarvan gebruiken euro.",
            nogSimpeler: "20 met euro!",
          },
        },
      },
      {
        q: "**Vóór de euro** in Nederland?",
        options: ["Gulden", "Dollar", "Pond", "Frank"],
        answer: 0,
        wrongHints: [null, "Klopt — tot 2002.", "VS.", "UK.", "België (vroeger)."],
      },
      {
        q: "Welk geld is **digitaal**?",
        options: ["Pinpas-saldo + Apple Pay", "Munten", "Biljetten", "Goud"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Fysiek.", "Fysiek.", "Niet geld."],
      },
    ],
  },

  // STAP 2: Zakgeld
  {
    title: "Zakgeld + zelf verdienen",
    explanation:
      "**Zakgeld** is geld dat je ouders je geven om zelf te beheren.\n\n**Wat is gewoon in NL?**\n• **Groep 5** *(8-9 jr)*: ~€2,50-5 per week.\n• **Groep 6**: ~€3-5 per week.\n• **Groep 7**: ~€4-7 per week.\n• **Groep 8**: ~€5-10 per week.\n• Per familie verschillend — niet stressen of vergelijken!\n\n**Waarom zakgeld?**\n• Leren **kiezen** *(wel/niet kopen)*.\n• Leren **wachten** *(sparen voor groter)*.\n• Leren **prioriteit** *(wat is echt belangrijk?)*.\n• Verantwoordelijkheid.\n\n**Soms gekoppeld aan klusjes**:\n• Stofzuigen.\n• Vaatwasser uit.\n• Hond uitlaten.\n• Tafel dekken.\n\n**Pas op — niet té veel klusjes verplicht**:\nSommige ouders willen dat zakgeld 'altijd verdiend' wordt. Voordeel: leert werken. Nadeel: alledaagse hulp lijkt op betaald werk.\n\n**Zelf verdienen op latere leeftijd**:\n\n**Wat mag in NL (qua leeftijd)?**\n• **13-14 jaar**: licht werk voor familie/buren *(oppassen, hondje uitlaten)*. Geen 'echte baan'.\n• **15 jaar**: **vakantiewerk** *(max 7 uur per dag, geen avond)*.\n• **16-17 jaar**: weekend + avondwerk *(max 9 uur/dag, geen na 11 uur 's avonds)*.\n• **18+**: alle banen, volwassen werknemer.\n\n**Klusjes voor extra zakgeld**:\n• **Oppassen op buurkinderen**: ~€5-8 per uur.\n• **Hond uitlaten**: ~€3-5 per keer.\n• **Krant bezorgen** *(13+ in NL)*: ~€30-50 per week.\n• **Folders/reclames bezorgen**: ~€20-30 per zaterdag.\n• **Auto wassen** voor opa/oma: ~€5-10.\n• **Gras maaien** voor buren: ~€10-15.\n\n**Statiegeld** 🍾\n• Lege flessen + blikjes inleveren = geld terug.\n• Statiegeld plastic fles 0,5L = €0,15.\n• Statiegeld glas-fles = €0,25-1,00.\n• Statiegeld blikje = €0,15.\n• Bij Albert Heijn + Jumbo via automaat.\n\n**Tip — geld leren beheren**:\n• Houd een **boekje** bij: wat krijg je + waar geef je het uit?\n• **Doelen** stellen: 'Ik spaar voor een speelconsole van €300'.\n• **Niet impulsief** kopen: wacht 1 dag, wil je het dan nog?\n\n**Cito-feitje**:\nVolgens NIBUD *(Nationaal Instituut voor Budgetvoorlichting)* sparen kinderen die zakgeld krijgen vaker dan kinderen die alles vragen.\n\n**Cito-vragen**:\n*'Vanaf welke leeftijd vakantiewerk?'* → 15 jaar.\n*'Wat is statiegeld?'* → geld dat je terugkrijgt bij inleveren flessen/blikjes.\n*'Hoe leer je geld beheren?'* → boekje bijhouden, doelen stellen, niet impulsief.",
    checks: [
      {
        q: "Vanaf welke leeftijd **vakantiewerk** in NL?",
        options: ["15 jaar", "12 jaar", "18 jaar", "16 jaar"],
        answer: 0,
        wrongHints: [null, "Klopt — max 7 uur/dag.", "Te jong.", "Te oud.", "Iets later."],
      },
      {
        q: "Wat is **statiegeld**?",
        options: ["Geld terug bij flessen inleveren", "Belasting op cola", "Spaargeld bank", "Bonus"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet statiegeld.", "Niet hetzelfde.", "Geen statiegeld."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is statiegeld?", tekst: "Statiegeld is een **extra bedrag** dat je betaalt bij aankoop van een fles of blikje. Je krijgt dit geld TERUG als je de lege verpakking inlevert." },
            { titel: "Waarom?", tekst: "Statiegeld stimuleert mensen om flessen + blikjes IN TE LEVEREN (niet weg te gooien). Zo recycle je beter en minder zwerfafval." },
            { titel: "Hoeveel?", tekst: "Plastic fles 0,5L = €0,15. Plastic fles 1L+ = €0,25. Glasfles bier/limonade = €0,25-1,00. Blikje (sinds 2023) = €0,15." },
          ],
          woorden: [
            { woord: "statiegeld", uitleg: "Bedrag op fles/blikje dat je terug krijgt." },
            { woord: "recyclen", uitleg: "Hergebruiken van materiaal in nieuwe producten." },
          ],
          theorie: "Cito-feit: statiegeld is geen belasting, geen winst voor de winkel. Het is gewoon TIJDELIJK je eigen geld dat je terugkrijgt bij inleveren. Bij Albert Heijn / Jumbo via automaat.",
          voorbeelden: [
            { type: "stap", tekst: "Je koopt cola van €2. Daar zit €0,15 statiegeld in. Je betaalt €2 + €0,15 = €2,15. Lege fles inleveren = €0,15 terug." },
            { type: "stap", tekst: "Schoolfeest met 20 flessen frisdrank = €0,15 × 20 = €3 statiegeld om terug te halen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Statiegeld = jouw eigen geld in bewaring. Niet vergeten in te leveren!" }],
          niveaus: {
            basis: "Statiegeld = geld terug bij inleveren fles/blikje.",
            simpeler: "Je betaalt extra, krijgt terug bij inleveren = goed voor milieu.",
            nogSimpeler: "Inleveren = geld terug.",
          },
        },
      },
      {
        q: "**€0,25** statiegeld is voor:",
        options: ["Grote glazen fles", "Kleine plastic fles", "Blikje", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt — €0,25 voor glas.", "0,15 voor plastic 0,5L.", "0,15 voor blikje.", "Wel iets."],
      },
      {
        q: "Hoe leer je **geld beheren**?",
        options: ["Boekje bijhouden + doelen stellen", "Alles uitgeven", "Bij ouders vragen", "Niet leren"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenovergesteld.", "Leer juist zelf.", "Wel leerbaar."],
      },
    ],
  },

  // STAP 3: Sparen
  {
    title: "Sparen + rente",
    explanation:
      "**Sparen** = geld bewaren voor later in plaats van meteen uitgeven.\n\n**Waarom sparen?**\n• Voor **groot doel** *(speelconsole, fiets, reis)*.\n• Voor **noodgeval** *(als iets stuk gaat)*.\n• Voor **toekomst** *(later studeren, eigen huis)*.\n\n**Hoe sparen?**\n\n**1. Spaarpot** 🐷\n• Munten + biljetten thuis.\n• Geen rente.\n• Maar wel voelbaar — zien hoe het groeit.\n• Risico: diefstal of verlies.\n\n**2. Kinderspaarrekening** 🏦\n• Bij bank *(ouders openen voor jou)*.\n• Krijgt **rente** *(klein percentage extra per jaar)*.\n• Veiliger dan thuis.\n• Niet impulsief uit te geven — moet via bank.\n\n**Banken in NL met kinderspaarrekening**:\n• ING — Oranje Spaarrekening.\n• Rabobank — JeugdSparen.\n• ABN AMRO — Jongerenrekening.\n• Knab, ASN, SNS, andere.\n\n**Wat is rente?**\n• **Rente** = beloning voor sparen. Bank gebruikt jouw geld om uit te lenen aan anderen.\n• In ruil krijg je een **percentage** *(%)*.\n\n**Rente-voorbeeld**:\n• Je hebt **€100** op spaarrekening.\n• Rente: **2% per jaar**.\n• Na 1 jaar: €100 + 2% = **€102**.\n• Na 10 jaar: ongeveer **€121,90** *(samengestelde rente)*.\n\n**Samengestelde rente** 📈 *(belangrijk!)*:\n• Je krijgt rente over rente.\n• Voorbeeld: €100 met 5% rente per jaar.\n  - Jaar 1: €100 + 5 = €105.\n  - Jaar 2: €105 + 5% van €105 = €110,25.\n  - Jaar 3: €110,25 + 5% = €115,76.\n• **Het 'sneeuwbal-effect'** — geld groeit steeds harder.\n• Albert Einstein zou hebben gezegd: 'Samengestelde rente is het achtste wereldwonder.'\n\n**Tip — sparen vroeg beginnen**:\nAls je elke maand €20 spaart vanaf je 10e tot je 18e *(8 jaar)* heb je €1.920 + rente. Dat kan je goed gebruiken voor scooter, studie of reis.\n\n**Spaardoel**:\nMaak een **plan**:\n1. Wat wil je *(bv. game-console €300)*.\n2. Hoeveel kun je per week sparen *(bv. €5)*.\n3. Hoe lang duurt het *(€300 ÷ €5 = 60 weken = ~14 maanden)*.\n4. Begin + houd vol.\n\n**Verleidingen vermijden**:\n• Reclame *(kinderkanaal Nickelodeon zit vol)*.\n• Vrienden die altijd nieuwe spullen kopen.\n• 'Impulsaankopen' bij supermarkt-kassa *(snoep)*.\n\n**Cito-tip — beste momenten voor sparen**:\n• **Direct bij ontvangst** — voor je het kunt uitgeven.\n• **Vooraf overschrijven** naar spaarrekening *(autoschrijving)*.\n• 'Hoor wat blijft over aan eind' werkt zelden — meestal niets.\n\n**Cito-vragen**:\n*'Wat is rente?'* → percentage extra geld over je spaargeld.\n*'Wat is samengestelde rente?'* → rente over rente, sneeuwbal-effect.\n*'Hoe spaar je het beste?'* → vooraf opzij zetten, niet eind-maand-hopen.",
    checks: [
      {
        q: "Wat is **rente**?",
        options: ["Extra geld dat je krijgt over je spaargeld", "Belasting", "Boete", "Korting"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Belasting is iets anders.", "Niet boete.", "Niet korting."],
        uitlegPad: {
          stappen: [
            { titel: "Rente = beloning voor sparen", tekst: "**Rente** is een **percentage extra geld** dat je krijgt van de **bank** als jij geld bij hen bewaart. Een soort 'bedankje' voor je vertrouwen." },
            { titel: "Waarom geeft de bank rente?", tekst: "De bank gebruikt jouw spaargeld om **uit te lenen** aan andere mensen (bv. voor een huis-hypotheek). Die mensen betalen MEER rente aan de bank dan jij krijgt. Verschil = winst voor de bank." },
            { titel: "Verschillende soorten rente", tekst: "• **Spaarrente** = krijg je over spaargeld (laag, bv. 2%).\n• **Hypotheekrente** = betaal je voor lening (bv. 4%).\n• **Negatieve rente** = soms moet je BETALEN om geld op bank te zetten (zeldzaam)." },
          ],
          woorden: [
            { woord: "rente", uitleg: "Percentage extra geld over een bedrag (op spaargeld of lening)." },
            { woord: "spaarrente", uitleg: "Wat je KRIJGT van bank over je spaargeld." },
            { woord: "hypotheekrente", uitleg: "Wat je BETAALT voor een lening (bv. huis kopen)." },
          ],
          theorie: "Cito-feit rente:\n• KRIJG je over spaargeld.\n• BETAAL je over lening.\n• Wordt jaarlijks uitgekeerd (vaak in januari).\n• Hoger % = meer geld na jaar.",
          voorbeelden: [
            { type: "stap", tekst: "Spaarrekening met 3% rente, €1000 spaargeld → na jaar €1030 (€30 rente)." },
            { type: "stap", tekst: "Niet verwarren: belasting = geld AF (overheid). Rente = geld erbij (bij sparen) of erafаф (bij lening)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Rente = % extra. Bij sparen = krijgen. Bij lenen = betalen. Een procent (%) op een bedrag." }],
          niveaus: {
            basis: "Rente = extra geld over je spaargeld. = A.",
            simpeler: "De bank betaalt jou rente omdat jij geld bij hen bewaart. = A.",
            nogSimpeler: "Extra geld = A.",
          },
        },
      },
      {
        q: "**€100** met **2% rente** per jaar — na 1 jaar?",
        options: ["€102", "€2", "€20", "€200"],
        answer: 0,
        wrongHints: [null, "Klopt — 100 + 2.", "Alleen rente, niet totaal.", "Te veel.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Rente berekenen: 2 stappen", tekst: "1) Reken de **rente** uit: 2% van €100.\n2) **Tel die rente op** bij het oorspronkelijke bedrag." },
            { titel: "Stap 1: 2% van €100", tekst: "2% = 2 per 100 = 2/100 = 0,02.\n0,02 × €100 = **€2** rente.\n(Truc: bij 100 is het % gelijk aan het rente-bedrag in euro's.)" },
            { titel: "Stap 2: totaal", tekst: "Spaargeld + rente = €100 + €2 = **€102**.\nDus na 1 jaar heb je €102 op je rekening." },
          ],
          woorden: [
            { woord: "rente-bedrag", uitleg: "Hoeveel euro extra je krijgt." },
            { woord: "eindbedrag", uitleg: "Spaargeld + rente samen." },
          ],
          theorie: "Cito-formule rente: **Eindbedrag = Begin × (1 + rente%/100)**. Bij €100 + 2%: 100 × 1,02 = 102. Slim om uit te rekenen: × 1,02 is precies hetzelfde als +2%.",
          voorbeelden: [
            { type: "stap", tekst: "€500 met 4% = €500 × 1,04 = €520 (of: €500 + €20 rente)." },
            { type: "stap", tekst: "€200 met 5% = €200 × 1,05 = €210." },
            { type: "stap", tekst: "Cito-fout: alleen 'rente' = €2 zonder oorspronkelijk bedrag. De vraag vraagt 'na 1 jaar' = totaal-bedrag." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Rente komt BOVENOP je spaargeld. Niet alleen 'de rente' is antwoord, maar TOTAAL (oud + rente)." }],
          niveaus: {
            basis: "€102 (€100 + €2 rente). = A.",
            simpeler: "2% van €100 = €2. Totaal = €100 + €2 = €102. = A.",
            nogSimpeler: "€102 = A.",
          },
        },
      },
      {
        q: "Wat is **samengestelde rente**?",
        options: ["Rente over rente (sneeuwbal-effect)", "Eenmalige bonus", "Belasting", "Korting"],
        answer: 0,
        wrongHints: [null, "Klopt — Einstein-quote.", "Wel jaarlijks meer.", "Niet belasting.", "Niet korting."],
      },
      {
        q: "Beste moment om **te sparen**?",
        options: ["Vooraf opzij zetten, niet wachten", "Aan het einde van maand", "Alleen als er over is", "Nooit"],
        answer: 0,
        wrongHints: [null, "Klopt — werkt het beste.", "Vaak niets over.", "Vaak niets over.", "Wel goed om te doen."],
        uitlegPad: {
          stappen: [
            { titel: "Sparen-strategie: 'Pay yourself first'", tekst: "De **beste manier om te sparen** is: zet geld **DIRECT** opzij zodra je het krijgt. **Vóórdat** je iets uitgeeft. Dat heet 'pay yourself first' (eerst jezelf betalen)." },
            { titel: "Waarom werkt 'eind van maand' niet?", tekst: "Mensen die wachten tot eind van maand om te sparen merken vaak: er is **niets over**. Uitgaven vullen elke euro die je hebt — zo werkt het brein. Vooraf opzij zetten = veilig." },
            { titel: "Praktisch", tekst: "Bij **zakgeld**: zodra je €5 krijgt, doe €1 in spaarpot. Bij **werkenden volwassenen**: automatische overschrijving op de 1e van maand naar spaarrekening. Dan blijft de rest voor uitgaven over." },
          ],
          woorden: [
            { woord: "pay yourself first", uitleg: "Engelse term voor 'eerst jezelf betalen' — eerst sparen, dan uitgeven." },
            { woord: "automatische overschrijving", uitleg: "Bank schuift maandelijks automatisch een bedrag." },
          ],
          theorie: "Cito-tip sparen-gewoonte: vaste regel = 'eerst sparen, dan uitgeven'. Werkt voor zakgeld, salaris en familie-budget. Hoe vroeger je begint, hoe sterker het wordt door samengestelde rente.",
          voorbeelden: [
            { type: "stap", tekst: "Krijg je €10 zakgeld? Doe direct €2 in spaarpot. €8 over voor uitgeven." },
            { type: "stap", tekst: "Bij volwassenen: salaris komt 25e binnen → 26e gaat €100 automatisch naar spaarrekening." },
            { type: "stap", tekst: "Vergelijk: wachten tot 30e en hopen dat er nog €100 over is = werkt zelden." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "VOORAF opzij = werkt. ACHTERAF hopen = werkt niet. Volgorde maakt alles verschil." }],
          niveaus: {
            basis: "Vooraf opzij zetten, niet wachten. = A.",
            simpeler: "Krijg je geld? Direct deel in spaarpot. Rest blijft voor uitgaven. = A.",
            nogSimpeler: "Direct opzij = A.",
          },
        },
      },
    ],
  },

  // STAP 4: Begroten
  {
    title: "Begroten — de 50/30/20-regel",
    explanation:
      "**Begroten** = vooraf bedenken hoeveel je waar aan uitgeeft.\n\n**De 50/30/20-regel** *(uit het hoofd!)*:\nVerdeel je geld in **3 groepen**:\n\n**50% — NODIG** *(must-have)* 🍞\n• Eten + drinken.\n• Schoolspullen.\n• Reisgeld *(bus, fiets)*.\n• Kleding *(basis)*.\n• Telefoon-abonnement.\n\n**30% — LEUK** *(want-to-have)* 🎮\n• Uitstapjes.\n• Bioscoop, pretpark.\n• Snoep, friet, ijs.\n• Spelletjes, games.\n• Extra kleding *(niet basis)*.\n\n**20% — SPAREN** 💰\n• Voor grote dingen later.\n• Noodgeval.\n• Toekomst.\n\n**Voorbeeld €100 zakgeld/maand**:\n• **NODIG**: €50 *(eten, school)*.\n• **LEUK**: €30 *(uitstapjes, snoep)*.\n• **SPAREN**: €20.\n\nOok werkt het voor latere salaris:\n• **€2000 salaris**: €1000 nodig + €600 leuk + €400 sparen.\n\n**Belangrijk — flexibel**:\nVoor kinderen + tieners werkt het niet altijd zo strikt:\n• Soms is 'nodig' wat ouders betalen *(eten)* en is **alle zakgeld 'leuk + sparen'**.\n• Dan verdeel: **50% leuk + 50% sparen** of **30/70-spaar**.\n\n**Begroting voor 1 week**:\n```\nInkomsten:\n• Zakgeld: €5\n• Klusje hondje: €2\n• TOTAAL: €7\n\nUitgaven:\n• Snoep: €1\n• Bioscoop met vrienden: €3\n• Sparen: €3\n• TOTAAL: €7 ✓\n```\n\n**Tips voor begroten**:\n\n**1. Schrijf op**:\n• In schriftje, app *(Spending Sniffer, etc.)*, of Excel.\n• Per dag of week — wat in + wat uit.\n\n**2. Categoriseer**:\n• Eten + drinken.\n• Uitgaan.\n• Sparen.\n• Kado's *(verjaardagen)*.\n\n**3. Check eind van maand**:\n• Klopt je begroting?\n• Geld over? → meer sparen!\n• Tekort? → minder leuk uitgeven volgende maand.\n\n**Geldwijsheid-tips voor kinderen**:\n\n**1. Wachten loont**:\nWil je iets bezit op €50? **Wacht 1 week**. Wil je het dan nog steeds? Dan koop. Vaak zakt de wens.\n\n**2. Vergelijken**:\nDezelfde spelletje op AH, Hema, Bart Smit, online — kijk waar goedkoopst.\n\n**3. Spaar voor doel, niet 'gewoon'**:\nGericht sparen voor X is leuker dan 'oneindig sparen voor niets'.\n\n**4. Reclame is niet eerlijk**:\nReclame wil dat je koopt. **Niet alle 'aanbiedingen' zijn echt.**\n\n**5. Tweede-hands kan**:\nVintage kleding, gebruikte boeken, marktplaats-spullen — vaak veel goedkoper en oké kwaliteit.\n\n**Cito-vragen**:\n*'Wat is de 50/30/20-regel?'* → 50% nodig, 30% leuk, 20% sparen.\n*'Begroting — wat houden bij?'* → inkomsten + uitgaven per categorie.\n*'Hoe wachten met kopen?'* → 1 week wachten, willen je het dan nog?",
    svg: begrotingSvg(),
    checks: [
      {
        q: "Wat is **50/30/20-regel**?",
        options: ["50% nodig, 30% leuk, 20% sparen", "50% sparen, 30% leuk, 20% nodig", "Geen regel", "Iets anders"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Andersom.", "Wel echte regel.", "Wel dit."],
      },
      {
        q: "Bij **€100 zakgeld** met 50/30/20 — hoeveel sparen?",
        options: ["€20", "€50", "€30", "€100"],
        answer: 0,
        wrongHints: [null, "Klopt — 20%.", "Dat is 'nodig'.", "Dat is 'leuk'.", "Alles sparen niet realistisch."],
      },
      {
        q: "Wat is **'wachten'** als geldwijsheid-tip?",
        options: ["1 week wachten — wil je het dan nog?", "Nooit kopen", "Snel kopen", "Geen tip"],
        answer: 0,
        wrongHints: [null, "Klopt — voorkomt impulsaankopen.", "Geen geldwijsheid.", "Tegenovergesteld.", "Wel tip."],
      },
      {
        q: "Wat hoort in **'NODIG'**-categorie?",
        options: ["Eten + schoolspullen", "Snoep + bioscoop", "Spaargeld", "Games"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Dat is 'leuk'.", "Apart.", "Dat is 'leuk'."],
      },
    ],
  },

  // STAP 5: Lenen + reclame
  {
    title: "Lenen + reclame-trucs",
    explanation:
      "**Lenen** = geld krijgen dat je later moet **terugbetalen**.\n\n**Waarom lenen?**\n• Voor **groot iets** dat je nu niet kunt betalen *(auto, huis)*.\n• Maar: lenen **kost geld** *(rente)*.\n• Daarom: **alleen lenen voor lange-termijn nodige dingen**.\n\n**Soorten lenen** *(voor volwassenen — kinderen lenen meestal niet)*:\n\n**1. Persoonlijke lening** 💵\n• Vast bedrag *(bv. €5.000)*.\n• Vaste rente.\n• Vaste looptijd *(2-5 jaar)*.\n• Voor: auto, verbouwing.\n\n**2. Hypotheek** 🏠\n• Lening voor **huis**.\n• Looptijd 20-30 jaar.\n• Huis = **onderpand** *(kun je niet betalen → bank pakt huis)*.\n\n**3. Krediet / rood staan** 💳\n• Op de bank **negatief**.\n• Heel duur — 10-15% rente.\n• **Vermijden**.\n\n**4. Studielening (DUO)** 📚\n• Voor universiteit / hbo.\n• Lage rente.\n• Terugbetalen na afstuderen.\n\n**Pas op — verleidingen**:\n\n**A. 'Koop nu, betaal later' (BNPL)**:\n• Klarna, Afterpay, Riverty, Tinka.\n• 14-30 dagen om te betalen — lijkt fijn.\n• Maar: te laat = boete + rente.\n• Veel jongeren komen in schulden door BNPL.\n• Eigenlijk **gewoon lenen**, vermomd als 'gratis'.\n\n**B. Reclame voor 'kleine leningen'**:\n• 'Snel €500 op je rekening!'\n• Hoge rente *(soms 15-20% per jaar)*.\n• Voor noodgevallen → wegblijven.\n\n**C. Credit cards**:\n• In NL minder gebruikt dan VS.\n• Als je niet maandelijks betaalt → hoge rente.\n\n**Reclame-trucs herkennen** *(voor kinderen + volwassenen)*:\n\n**1. 'Vandaag korting!'**\n• Vaak nep-druk — geen echte korting.\n• Vergelijk prijs met andere winkels.\n\n**2. 'Iedereen heeft 't'**\n• Druk om bij groep te horen.\n• Niet altijd waar.\n\n**3. 'Speciaal voor jou!'**\n• Niet echt voor jou — iedereen krijgt dezelfde 'persoonlijke' mail.\n\n**4. Influencers + sociale media**\n• Krijgen geld om iets aan te prijzen.\n• Niet hun echte mening.\n\n**5. Gratis = niet altijd gratis**\n• Gratis app vraagt later om premium.\n• Gratis proefles = abonnement opzeggen lastig.\n\n**6. Verlies-aversie**\n• 'Mis dit aanbod niet!'\n• Mensen kopen om verlies te voorkomen, niet omdat ze willen.\n\n**Schulden vermijden**:\n• **Niet lenen** voor 'leuke dingen' *(reis, nieuwe telefoon)*.\n• **Eerst sparen**, dan kopen.\n• **Bij twijfel**: vraag ouders / volwassene om advies.\n• Bij echte problemen: **schuldhulpverlening** *(Hulplijn van NIBUD, sociale dienst)*.\n\n**Tip — vragen om geld bij ouders**:\n• Eerlijk uitleggen waarvoor je het wilt.\n• Tonen dat je al iets gespaard hebt.\n• Voorstellen om iets terug te doen *(klusjes, deel zelf)*.\n\n**Cito-feitje**:\nVolgens NIBUD heeft **1 op 5 jongeren tussen 18-25** schulden, vaak door BNPL of slimme reclame. Daarom is **financiële educatie** belangrijk.\n\n**Cito-vragen**:\n*'Wat is BNPL?'* → buy now pay later — uitgesteld betalen.\n*'Hoe schulden vermijden?'* → niet lenen voor 'leuke dingen', eerst sparen.\n*'Welke reclame-truc?'* → 'iedereen heeft 't' / 'mis dit niet!' / influencer-pushen.",
    checks: [
      {
        q: "Wat is **BNPL**?",
        options: ["Buy Now Pay Later — uitgesteld betalen", "Bank Naast Park Lijn", "Belasting", "Spaarproduct"],
        answer: 0,
        wrongHints: [null, "Klopt — Klarna, Afterpay, etc.", "Bestaat niet.", "Geen belasting.", "Tegenovergesteld."],
      },
      {
        q: "Hoe **schulden vermijden**?",
        options: ["Eerst sparen, dan kopen", "Lenen voor alles leuks", "Veel BNPL gebruiken", "Niet betalen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Schulden-risico.", "Risico.", "Maakt problemen erger."],
      },
      {
        q: "Welke is een **reclame-truc**?",
        options: ["'Iedereen heeft 't!'", "'Spaar voor doel'", "Spaarrekening", "Boekje bijhouden"],
        answer: 0,
        wrongHints: [null, "Klopt — sociale druk.", "Goed advies.", "Geen truc.", "Geen truc."],
      },
      {
        q: "Wat is een **hypotheek**?",
        options: ["Lening voor huis (20-30 jr)", "Spaarrekening", "Belasting", "Lening voor auto"],
        answer: 0,
        wrongHints: [null, "Klopt — huis = onderpand.", "Niet lenen.", "Niet hypotheek.", "Persoonlijke lening."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — geldwijsheid mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: geld-functies, zakgeld, sparen, begroten, lenen.\n\nVeel succes!",
    checks: [
      {
        q: "Hoeveel **landen** gebruiken de euro?",
        options: ["20", "5", "27", "10"],
        answer: 0,
        wrongHints: [null, "Klopt — eurozone.", "Te weinig.", "Hele EU.", "Te weinig."],
      },
      {
        q: "**€200** met **5% rente** na 1 jaar?",
        options: ["€210", "€205", "€220", "€250"],
        answer: 0,
        wrongHints: [null, "Klopt — 200 + 10.", "Verkeerd berekend.", "Te veel.", "Te veel."],
      },
      {
        q: "Wat is **rente**?",
        options: ["Beloning voor sparen (%)", "Belasting", "Korting", "Boete"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet hetzelfde.", "Niet hetzelfde.", "Niet rente."],
      },
      {
        q: "**50/30/20** — wat is **30%** voor?",
        options: ["Leuk (uitgaan, snoep)", "Nodig", "Sparen", "Belasting"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Dat is 50%.", "Dat is 20%.", "Niet in regel."],
      },
      {
        q: "Wat is een **statiegeld**?",
        options: ["Geld terug bij flessen", "Spaarrekening", "Lening", "Belasting"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Iets anders.", "Tegenovergesteld.", "Niet hetzelfde."],
      },
      {
        q: "Hoe vermijd je **impulsaankopen**?",
        options: ["1 week wachten — wil je het dan nog?", "Snel kopen voor korting", "Lenen om te betalen", "Vrienden vragen"],
        answer: 0,
        wrongHints: [null, "Klopt — voorkomt spijt.", "Reclame-truc.", "Schulden.", "Niet primair."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const financieleVormingPo = {
  id: "financiele-vorming-po",
  title: "Geldwijsheid + sparen (groep 6-8)",
  emoji: "💶",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Rekenen + leefwereld — financiële educatie",
  prerequisites: [
    { id: "geld-rekenen", title: "Geld rekenen", niveau: "po-1F" },
  ],
  intro:
    "Geldwijsheid voor groep 6-8 — 3 functies geld (ruil/reken/spaar), zakgeld + zelf verdienen, sparen + rente + samengestelde rente, 50/30/20-begrotingsregel, lenen + reclame-trucs (BNPL, influencers). ~15 min.",
  triggerKeywords: [
    "zakgeld", "sparen", "rente", "geldwijsheid",
    "begroten", "50/30/20",
    "lenen", "BNPL", "schulden",
    "reclame trucs",
  ],
  chapters,
  steps,
};

export default financieleVormingPo;
