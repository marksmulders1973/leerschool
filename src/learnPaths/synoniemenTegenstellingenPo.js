// Leerpad: Synoniemen + tegenstellingen — groep 5-7 PO.
// Cito-onderdeel woordenschat. Referentieniveau 1F.
// 5 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  syn: "#69f0ae",
  ant: "#ff7043",
  highlight: "#ffd54f",
};

const stepEmojis = ["📚", "🔁", "⚖️", "🎯", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een synoniem?", emoji: "📚", from: 0, to: 0 },
  { letter: "B", title: "Synoniemen-paren", emoji: "🔁", from: 1, to: 1 },
  { letter: "C", title: "Wat zijn tegenstellingen?", emoji: "⚖️", from: 2, to: 2 },
  { letter: "D", title: "Welk woord past?", emoji: "🎯", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

function woordkaartSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Synoniem = bijna hetzelfde · Tegenstelling = juist het tegenovergestelde</text>

<rect x="20" y="45" width="130" height="50" rx="6" fill="rgba(105,240,174,0.18)" stroke="${COLORS.syn}" stroke-width="1.5"/>
<text x="85" y="65" text-anchor="middle" fill="${COLORS.syn}" font-size="12" font-family="Arial" font-weight="bold">SYNONIEM</text>
<text x="85" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">enorm = heel groot</text>

<rect x="170" y="45" width="130" height="50" rx="6" fill="rgba(255,112,67,0.18)" stroke="${COLORS.ant}" stroke-width="1.5"/>
<text x="235" y="65" text-anchor="middle" fill="${COLORS.ant}" font-size="12" font-family="Arial" font-weight="bold">TEGENSTELLING</text>
<text x="235" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">groot ↔ klein</text>

<rect x="20" y="110" width="280" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.highlight}" stroke-width="1"/>
<text x="160" y="130" text-anchor="middle" fill="${COLORS.highlight}" font-size="11" font-family="Arial" font-weight="bold">CITO-VRAAG</text>
<text x="160" y="148" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">"Welk woord betekent hetzelfde als 'blij'?" → vrolijk</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">"Wat is het tegenovergestelde van 'snel'?" → langzaam</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is een synoniem?
  {
    title: "Wat is een synoniem?",
    explanation:
      "Een **synoniem** is een woord dat **bijna hetzelfde betekent** als een ander woord.\n\n**Voorbeelden**:\n• **blij** = vrolijk = gelukkig.\n• **enorm** = heel groot = reusachtig.\n• **mooi** = prachtig = schitterend.\n• **rennen** = hard lopen = sprinten.\n• **gauw** = snel = vlug.\n\n**Waarom zijn synoniemen handig?**\n• Je tekst wordt **leuker om te lezen**. Anders herhaal je elk woord.\n• Je kunt **precieser zijn** *(een 'mooie' bloem is iets anders dan een 'prachtige' bloem)*.\n• Bij Cito moet je vaak een synoniem **herkennen** in meerkeuze-vragen.\n\n**Cito-truc — het juiste woord kiezen**:\nLees de zin met de optie erin. Past het natuurlijk? Soms zijn meerdere woorden synoniem maar past één beter in de context.\n\nBijvoorbeeld:\n*'De jongen rende ___ naar huis.'*\n• Synoniemen van 'snel': vlug, gauw, hard.\n• Maar 'hard' past hier — 'hard rennen' is gangbaar.\n\n**Pas op — niet altijd 100% hetzelfde**:\n• 'Goed' en 'lekker' zijn synoniem in *'lekker eten'* = 'goed eten'. \n• Maar *'lekker weer'* zou je niet snel 'goed weer' noemen — verschillende nuance.\n\nSynoniemen lijken op elkaar maar zijn niet identiek.",
    svg: woordkaartSvg(),
    checks: [
      {
        q: "Wat is een **synoniem**?",
        options: ["Een woord met bijna dezelfde betekenis", "Een woord met tegengestelde betekenis", "Een woord met dezelfde uitspraak", "Een woord uit een vreemde taal"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Dat is een tegenstelling.", "Dat is een homoniem.", "Dat is een leenwoord."],
      },
      {
        q: "Welk woord is een **synoniem** van **'blij'**?",
        options: ["Vrolijk", "Boos", "Verdrietig", "Bang"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenstelling.", "Tegenstelling.", "Niet hetzelfde."],
      },
      {
        q: "Welk woord betekent hetzelfde als **'enorm'**?",
        options: ["Reusachtig", "Klein", "Beetje", "Snel"],
        answer: 0,
        wrongHints: [null, "Klopt — beide betekenen 'heel groot'.", "Tegenstelling.", "Tegenstelling.", "Geen synoniem."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent 'enorm'?", tekst: "**Enorm** = heel erg groot. *'Een enorme taart'* = een hele grote taart. Het is een sterker woord dan gewoon 'groot'." },
            { titel: "Welk woord lijkt erop?", tekst: "**Reusachtig** komt van het woord *reus* (een hele grote figuur uit sprookjes). Een reusachtige taart = even groot als wat een reus zou eten. Dus reusachtig = enorm = heel groot." },
            { titel: "Andere synoniemen van 'enorm'", tekst: "Gigantisch, kolossaal, immens, geweldig groot. Allemaal woorden voor 'heel erg groot'. **Klein, beetje** = tegenstellingen, geen synoniemen. **Snel** = over snelheid, niets met grootte." },
          ],
          woorden: [
            { woord: "enorm", uitleg: "Heel erg groot." },
            { woord: "reusachtig", uitleg: "Zo groot als een reus = enorm." },
          ],
          theorie: "Cito-truc: zoek bij synoniemen-vragen het woord dat **dezelfde categorie + dezelfde richting** heeft. Enorm = grootte + groot. Dus zoek ander grootte-woord dat ook 'groot' betekent → reusachtig.",
          voorbeelden: [
            { type: "stap", tekst: "*'Hij heeft een enorme hond.'* = *'Hij heeft een reusachtige hond.'* Beide zinnen betekenen hetzelfde." },
            { type: "stap", tekst: "*'Een kleine hond'* = tegenstelling. *'Een snelle hond'* = ander kenmerk (snelheid, niet grootte)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Synoniem = zelfde betekenis. Vraag jezelf: 'Kan ik het ene woord vervangen door het andere zonder dat de zin van betekenis verandert?' Bij enorm ↔ reusachtig: ja. Bij enorm ↔ klein: nee, betekenis draait om." }],
          niveaus: {
            basis: "Reusachtig = synoniem van enorm (allebei 'heel groot'). = A.",
            simpeler: "Enorm = heel groot. Reusachtig = even groot als een reus = heel groot. Hetzelfde. = A.",
            nogSimpeler: "Reusachtig = A.",
          },
        },
      },
    ],
  },

  // STAP 2: Synoniemen-paren
  {
    title: "Veel-gebruikte synoniemen-paren",
    explanation:
      "Hier zijn **synoniem-paren** die je vaak op Cito ziet *(uit je hoofd!)*:\n\n**Gevoelens**:\n• blij = vrolijk / gelukkig\n• boos = kwaad / nijdig\n• bang = angstig\n• verdrietig = bedroefd\n• verbaasd = stomverbaasd / verrast\n\n**Grootte**:\n• groot = enorm / reusachtig\n• klein = minuscuul / piepklein\n• veel = talloos / massa's\n• weinig = schaars / beperkt\n\n**Snelheid**:\n• snel = vlug / gauw / rap\n• langzaam = traag / sloom\n\n**Eigenschappen**:\n• mooi = prachtig / schitterend / oogverblindend\n• lelijk = onaantrekkelijk\n• slim = intelligent / pienter / knap (bij denken)\n• dom = stom / onnozel\n• gemeen = vals / hatelijk\n• aardig = vriendelijk / lief\n\n**Werkwoorden**:\n• zien = aanschouwen / opmerken\n• zeggen = vertellen / spreken\n• lopen = wandelen / gaan\n• rennen = sprinten / hollen\n• eten = nuttigen / opeten / verorberen\n• maken = creëren / vervaardigen\n\n**Plekken**:\n• huis = woning / verblijf\n• school = leerinstelling / onderwijsplek\n• tuin = hof\n\n**Tijd**:\n• vandaag = heden\n• gisteren = de dag ervoor\n• morgen = de dag erna\n\n**Cito-truc** — kies de optie die het **dichtst** bij de oorspronkelijke betekenis ligt. Bij twijfel: probeer in een zin in te vullen.",
    checks: [
      {
        q: "Synoniem van **'snel'**?",
        options: ["Vlug", "Traag", "Bang", "Klein"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenstelling.", "Geen synoniem.", "Geen synoniem."],
      },
      {
        q: "Synoniem van **'aardig'**?",
        options: ["Vriendelijk", "Boos", "Klein", "Snel"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenstelling.", "Iets anders.", "Iets anders."],
      },
      {
        q: "Welk paar zijn synoniemen?",
        options: ["prachtig + mooi", "groot + klein", "blij + verdrietig", "snel + langzaam"],
        answer: 0,
        wrongHints: [null, "Klopt — beide betekenen 'mooi'.", "Tegenstelling.", "Tegenstelling.", "Tegenstelling."],
      },
      {
        q: "Welk woord is GEEN synoniem van 'rennen'?",
        options: ["Wandelen", "Sprinten", "Hollen", "Snel lopen"],
        answer: 0,
        wrongHints: [null, "Klopt — wandelen is rustig lopen, geen synoniem van rennen.", "Wel synoniem.", "Wel synoniem.", "Wel synoniem."],
        uitlegPad: {
          stappen: [
            { titel: "Let op de vraag — GEEN!", tekst: "Bij Cito staat soms het woord **GEEN** (vaak met hoofdletters) in de vraag. Dat draait de vraag om: je zoekt niet het woord dat hetzelfde betekent, maar het woord dat **anders** betekent." },
            { titel: "Wat is 'rennen'?", tekst: "**Rennen** = heel hard lopen, snel voortbewegen. Een atleet die de 100 meter doet, rent. Synoniemen: sprinten, hollen, snel lopen — allemaal snel-bewegen." },
            { titel: "Welk woord past NIET?", tekst: "**Wandelen** = rustig lopen, voor je plezier of om ergens te komen. Niet snel. Dus wandelen is GEEN synoniem van rennen — dat is het antwoord op de GEEN-vraag." },
          ],
          woorden: [
            { woord: "rennen", uitleg: "Heel hard lopen, snel." },
            { woord: "wandelen", uitleg: "Rustig lopen, niet snel." },
          ],
          theorie: "Cito-truc bij GEEN-vragen: lees de vraag 2x. Onderstreep het woord 'GEEN'. Zoek dan het ene woord dat NIET in het rijtje past. Vaak zijn 3 opties synoniemen + 1 is iets anders (de tegenstelling, of een ander concept).",
          voorbeelden: [
            { type: "stap", tekst: "*'Welk woord is GEEN synoniem van blij?'* Opties: vrolijk, gelukkig, **boos**, opgewekt. Antwoord = boos (tegenstelling)." },
            { type: "stap", tekst: "*'Welk woord is GEEN synoniem van groot?'* Opties: enorm, reusachtig, **klein**, gigantisch. Antwoord = klein." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vind het 'vreemde eend in de bijt' = de optie die niet bij de andere drie past. Vaak is dat de tegenstelling van het hoofdwoord." }],
          niveaus: {
            basis: "Wandelen = rustig lopen, niet snel. Rennen = snel. Dus wandelen is GEEN synoniem van rennen. = A.",
            simpeler: "Sprinten, hollen, snel lopen = allemaal snel = synoniemen van rennen. Wandelen = rustig = past niet. = A.",
            nogSimpeler: "Wandelen = A (rustig, geen rennen).",
          },
        },
      },
    ],
  },

  // STAP 3: Tegenstellingen
  {
    title: "Tegenstellingen (antoniem)",
    explanation:
      "Een **tegenstelling** *(of antoniem)* is een woord met de **omgekeerde** betekenis.\n\n**Voorbeelden**:\n• groot ↔ klein\n• blij ↔ verdrietig\n• snel ↔ langzaam\n• mooi ↔ lelijk\n• rijk ↔ arm\n• warm ↔ koud\n• licht ↔ donker / zwaar\n• boven ↔ onder\n• binnen ↔ buiten\n• voor ↔ achter / na\n• vroeg ↔ laat\n• jong ↔ oud\n• ja ↔ nee\n• altijd ↔ nooit\n• alles ↔ niets\n• veel ↔ weinig\n• beginnen ↔ stoppen / eindigen\n• komen ↔ gaan\n• openen ↔ sluiten\n\n**'On-' truc**:\nVeel tegenstellingen worden gemaakt door **on-** voor het woord te zetten:\n• vriendelijk ↔ **on**vriendelijk\n• zichtbaar ↔ **on**zichtbaar\n• mogelijk ↔ **on**mogelijk\n• gelukkig ↔ **on**gelukkig\n• voorzichtig ↔ **on**voorzichtig\n\n**Maar pas op** — niet altijd:\n• **on**weer = niet 'geen weer', maar specifiek storm.\n• **on**kruid = wild gras, niet 'geen kruid'.\n\n**'Niet-' is ook tegenstelling**:\n• rokers ↔ **niet**-rokers\n• zwemmers ↔ **niet**-zwemmers\n\n**Cito-truc — herken het woord 'tegenovergestelde'**:\nAls de vraag zegt *'tegenovergestelde'* of *'precies het tegenoverde'*, zoek **niet** een synoniem maar een **tegenstelling**.",
    checks: [
      {
        q: "Wat is het **tegenovergestelde** van **'groot'**?",
        options: ["Klein", "Enorm", "Reusachtig", "Hoog"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Dat is een synoniem van groot.", "Dat is een synoniem.", "Hoog is iets anders (richting), niet grootte."],
      },
      {
        q: "Wat is het **tegenovergestelde** van **'snel'**?",
        options: ["Langzaam", "Vlug", "Rap", "Gauw"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Synoniem van snel.", "Synoniem.", "Synoniem."],
      },
      {
        q: "Wat is het tegenovergestelde van **'mogelijk'**?",
        options: ["Onmogelijk", "Mogelijkheid", "Mogen", "Soms mogelijk"],
        answer: 0,
        wrongHints: [null, "Klopt — 'on-' truc.", "Dat is hetzelfde woord, nu zelfstandig.", "Werkwoord van iets anders.", "Niet helemaal het tegenovergestelde."],
        uitlegPad: {
          stappen: [
            { titel: "On-truc", tekst: "Voor veel woorden geldt: voeg 'on-' toe → tegenstelling. Mogelijk → onmogelijk." },
          ],
          woorden: [{ woord: "on-", uitleg: "Voorvoegsel dat betekent 'niet'." }],
          theorie: "Met 'on-' voor een woord krijg je vaak de tegenstelling.",
          voorbeelden: [{ type: "stap", tekst: "Vriendelijk → onvriendelijk. Zichtbaar → onzichtbaar. Mogelijk → onmogelijk." }],
          basiskennis: [{ onderwerp: "Niet altijd", uitleg: "On-weer en on-kruid zijn specifieke woorden, niet zomaar 'geen weer/kruid'." }],
          niveaus: {
            basis: "Onmogelijk. A.",
            simpeler: "Mogelijk → met 'on-' voor → onmogelijk = het tegenovergestelde. = A.",
            nogSimpeler: "Onmogelijk = A.",
          },
        },
      },
      {
        q: "Welk paar zijn **tegenstellingen**?",
        options: ["jong + oud", "klein + minuscuul", "blij + vrolijk", "snel + vlug"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Synoniemen.", "Synoniemen.", "Synoniemen."],
      },
    ],
  },

  // STAP 4: Welk woord past in een zin?
  {
    title: "Welk woord past in een zin?",
    explanation:
      "Cito stelt vaak: *'Welk woord past het beste in deze zin?'*\n\nDe **truc**: lees de hele zin met elke optie. Welke past natuurlijk?\n\n**Voorbeeld 1**:\n*'De auto reed ___ door de bocht.'*\nOpties: snel / blauw / koud / luid.\n• Snel — past *(snelheid bij bocht)*.\n• Blauw — kleur, past niet bij 'reden door bocht'.\n• Koud — temperatuur, past niet bij bocht.\n• Luid — geluid, kan maar 'snel' past beter bij 'reden door'.\n→ **Snel** is het beste antwoord.\n\n**Voorbeeld 2**:\n*'Anna voelde zich ___ na het slechte cijfer.'*\nOpties: vrolijk / verdrietig / hongerig / klein.\n• Vrolijk past niet bij 'slecht cijfer'.\n• Verdrietig past wel.\n• Hongerig heeft niets met cijfer te maken.\n• Klein verwijst naar grootte.\n→ **Verdrietig** is het beste antwoord.\n\n**Cito-stappenplan**:\n1. Lees de hele zin *(niet alleen het stuk eromheen)*.\n2. Bedenk welk **gevoel/onderwerp** centraal staat.\n3. Lees elke optie in de zin.\n4. Welke past natuurlijk + houdt logisch verband?\n5. Streep onzinnige opties door — kies de overgebleven beste.\n\n**Pas op — meerdere kunnen 'kloppen'**:\nSoms kunnen 2 woorden technisch passen, maar 1 is **natuurlijker**. Kies degene die het meest gangbaar is in normaal Nederlands.",
    checks: [
      {
        q: "Welk woord past hier? *'De jongen rende ___ naar huis.'*",
        options: ["snel", "blauw", "koud", "klein"],
        answer: 0,
        wrongHints: [null, "Klopt — past bij rennen.", "Kleur, past niet.", "Temperatuur, past niet.", "Grootte, past niet."],
      },
      {
        q: "Welk woord past? *'Het ___ ijsje smolt in de zon.'*",
        options: ["koude", "boze", "snelle", "blauwe"],
        answer: 0,
        wrongHints: [null, "Klopt — ijsje is koud.", "Geen gevoel.", "Snelheid past niet bij ijsje smelten.", "Kleur kan, maar 'koude' is logischer."],
      },
      {
        q: "Welk woord past? *'Lisa was ___ omdat haar huisdier weg was.'*",
        options: ["verdrietig", "vrolijk", "gehaast", "rijk"],
        answer: 0,
        wrongHints: [null, "Klopt — bij verlies hoort verdriet.", "Tegenstelling — vrolijk past niet bij 'huisdier weg'.", "Past niet bij gevoel over verlies.", "Past niet bij verlies."],
      },
      {
        q: "Welk woord past het **best**? *'De ___ man stak de straat over.'*",
        options: ["oude", "snelle", "kleine", "blauwe"],
        answer: 0,
        wrongHints: [null, "Klopt — vaak 'oude man'-zinnetje.", "Kan, maar 'oude' is gangbaarder.", "Kan, maar 'oude' is gangbaarder.", "Mensen krijgen niet vaak kleur-adjectief."],
        uitlegPad: {
          stappen: [
            { titel: "Welke woorden zijn 'normaal' bij 'man'?", tekst: "Bij een persoon zoals 'man' zijn sommige bijvoeglijke naamwoorden veel gangbaarder dan andere. Denk aan: **oude/jonge man**, **lange/kleine man**, **dikke/dunne man**. **Snelle man** of **blauwe man** zijn raar." },
            { titel: "Lees de hele zin", tekst: "*'De ___ man stak de straat over.'* — wat doet die man? Hij STEEKT DE STRAAT OVER. Dat is een rustige activiteit, geen sport. Daarom past 'oude' het beste — denk aan een oudere meneer die voorzichtig oversteekt." },
            { titel: "Waarom niet de andere opties?", tekst: "• **Snelle** — kan, maar 'snel een straat oversteken' is geen vast beeld. Hardlopers zijn op de baan, niet op straat. \n• **Kleine** — bestaat ('kleine man'), maar veel minder gangbaar dan 'oude man'. \n• **Blauwe** — kleur bij persoon? Zelden ('blauwe Smurf' misschien). Onnatuurlijk." },
          ],
          woorden: [
            { woord: "gangbaar", uitleg: "Wat normaal of vaak wordt gezegd in het Nederlands." },
            { woord: "bijvoeglijk naamwoord", uitleg: "Woord dat iets vertelt over een ander woord (mooi huis, oude man)." },
          ],
          theorie: "Cito-truc 'past het beste': bedenk welke combi je het vaakst in een boek of krant zou lezen. *'Oude man'* = duizenden boeken. *'Blauwe man'* = bijna nooit. Kies de natuurlijkste, niet de meest letterlijk-kloppende.",
          voorbeelden: [
            { type: "stap", tekst: "*'De ___ kat sliep op de bank.'* Opties: dikke / boze / snelle / luide. **Dikke** past het beste — dat is een gangbaar beeld bij slapende kat." },
            { type: "stap", tekst: "*'Het was een ___ feest.'* Opties: gezellig / koud / klein / vies. **Gezellig** past het beste — typisch woord bij een feest." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lees in je hoofd elke optie in de zin. Klinkt het natuurlijk — alsof je het zo in een verhaal zou kunnen vertellen? Kies die optie." }],
          niveaus: {
            basis: "Oude man = gangbaar beeld bij oversteken. = A.",
            simpeler: "Welke past in een echt verhaal? 'Oude man steekt straat over' = ja, vaak. De andere: zelden of nooit. = A.",
            nogSimpeler: "Oude = A.",
          },
        },
      },
    ],
  },

  // STAP 5: Cito-mix
  {
    title: "Cito-eindopdracht — synoniem + tegenstelling mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: synoniemen, tegenstellingen, woord-in-zin.\n\nVeel succes!",
    checks: [
      {
        q: "Synoniem van **'verdrietig'**?",
        options: ["Bedroefd", "Vrolijk", "Snel", "Klein"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenstelling.", "Geen synoniem.", "Geen synoniem."],
      },
      {
        q: "Tegenstelling van **'binnen'**?",
        options: ["Buiten", "Naast", "Over", "Tussen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet het tegenovergestelde — naast is een plek-aanduiding.", "Iets anders.", "Iets anders."],
      },
      {
        q: "Welk woord past? *'Het was ___ vandaag, dus geen jas nodig.'*",
        options: ["warm", "koud", "verdrietig", "klein"],
        answer: 0,
        wrongHints: [null, "Klopt — geen jas = niet koud = warm.", "Tegenstelling — dan zou je wél een jas nodig hebben.", "Geen weer-woord.", "Geen weer-woord."],
      },
      {
        q: "Synoniem van **'lopen'**?",
        options: ["Wandelen", "Rennen", "Slapen", "Eten"],
        answer: 0,
        wrongHints: [null, "Klopt — beide rustig voortbewegen.", "Niet — rennen is veel sneller dan lopen.", "Heel andere activiteit.", "Heel andere activiteit."],
      },
      {
        q: "Tegenstelling van **'beginnen'**?",
        options: ["Stoppen", "Doorgaan", "Starten", "Aanvang"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Doorgaan is voortzetten, niet stoppen.", "Synoniem van beginnen.", "Synoniem van beginnen."],
      },
      {
        q: "Welk woord past het beste? *'Anna voelde zich ___ na haar uitstekend cijfer.'*",
        options: ["trots", "boos", "klein", "bang"],
        answer: 0,
        wrongHints: [null, "Klopt — bij goed cijfer hoort trots/blij.", "Past niet bij goed cijfer.", "Past niet bij gevoel.", "Past niet bij goed nieuws."],
      },
      { q: "Synoniem van **groot**?", options: ["enorm","klein","leeg","laag"], answer: 0, wrongHints: [null,"Klopt.","Tegenstelling.","Niet over grootte.","Anders."] },
      { q: "Tegenstelling van **snel**?", options: ["langzaam","vlug","direct","kort"], answer: 0, wrongHints: [null,"Klopt.","Synoniem.","Synoniem.","Niet snelheid."] },
      { q: "Synoniem van **mooi**?", options: ["prachtig","lelijk","klein","oud"], answer: 0, wrongHints: [null,"Klopt.","Tegenstelling.","Niets met mooi.","Niets met mooi."] },
      { q: "Tegenstelling van **vol**?", options: ["leeg","gevuld","volop","ruim"], answer: 0, wrongHints: [null,"Klopt.","Synoniem.","Synoniem.","Andere betekenis."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const synoniemenTegenstellingenPo = {
  id: "synoniemen-tegenstellingen-po",
  title: "Synoniemen + tegenstellingen (groep 5-7)",
  emoji: "📚",
  level: "groep5-7",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taal — woordenschat (synoniemen en tegenstellingen)",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
  ],
  intro:
    "Synoniemen + tegenstellingen voor groep 5-7 — bijna-gelijke woorden, tegenovergestelde betekenis, welk woord past het beste in een zin. ~15 min.",
  triggerKeywords: [
    "synoniem", "tegenstelling", "antoniem", "tegenovergesteld",
    "betekenis", "woord betekent", "hetzelfde", "tegengesteld",
  ],
  chapters,
  steps,
};

export default synoniemenTegenstellingenPo;
