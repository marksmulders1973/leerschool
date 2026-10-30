// Leerpad: Synoniemen + tegenstellingen — groep 5-7 PO.
// Toets-onderdeel woordenschat. Referentieniveau 1F.
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
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
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
      "Een **synoniem** is een woord dat **bijna hetzelfde betekent** als een ander woord.\n\n**Voorbeelden**:\n• **blij** = vrolijk = gelukkig.\n• **enorm** = heel groot = reusachtig.\n• **mooi** = prachtig = schitterend.\n• **rennen** = hard lopen = sprinten.\n• **gauw** = snel = vlug.\n\n**Waarom zijn synoniemen handig?**\n• Je tekst wordt **leuker om te lezen**. Anders herhaal je elk woord.\n• Je kunt **precieser zijn** *(een 'mooie' bloem is iets anders dan een 'prachtige' bloem)*.\n• Bij de Doorstroomtoets moet je vaak een synoniem **herkennen** in meerkeuze-vragen.\n\n**Toets-truc — het juiste woord kiezen**:\nLees de zin met de optie erin. Past het natuurlijk? Soms zijn meerdere woorden synoniem maar past één beter in de context.\n\nBijvoorbeeld:\n*'De jongen rende ___ naar huis.'*\n• Synoniemen van 'snel': vlug, gauw, hard.\n• Maar 'hard' past hier — 'hard rennen' is gangbaar.\n\n**Pas op — niet altijd 100% hetzelfde**:\n• 'Goed' en 'lekker' zijn synoniem in *'lekker eten'* = 'goed eten'. \n• Maar *'lekker weer'* zou je niet snel 'goed weer' noemen — verschillende nuance.\n\nSynoniemen lijken op elkaar maar zijn niet identiek.",
    svg: woordkaartSvg(),
    checks: [
      {
        q: "Wat is een **synoniem**?",
        options: ["Een woord met bijna dezelfde betekenis", "Een woord met tegengestelde betekenis", "Een woord met dezelfde uitspraak", "Een woord uit een vreemde taal"],
        answer: 0,
        wrongHints: [null, "Dat is een tegenstelling (antoniem) — precies omgekeerd.", "Dat is een homoniem — bv. 'bank' (zit) en 'bank' (geld).", "Dat is een leenwoord — bv. 'computer' (Engels) of 'paraplu' (Frans)."],
        uitlegPad: {
          stappen: [
            { titel: "Synoniem = (bijna) hetzelfde", tekst: "Een **synoniem** is een ander woord dat (bijna) dezelfde betekenis heeft. Bv. blij = vrolijk = gelukkig. Drie woorden, één gevoel." },
            { titel: "Waarom 'bijna' hetzelfde?", tekst: "Synoniemen zijn niet altijd 100% identiek. *'Lekker'* en *'goed'* zijn synoniem bij **eten** ('lekker eten' = 'goed eten'), maar niet bij **weer** ('lekker weer' klinkt natuurlijker dan 'goed weer'). Nuance-verschil." },
            { titel: "Waarom belangrijk?", tekst: "Schrijven met synoniemen voorkomt saaie herhaling. Op de Doorstroomtoets krijg je vaak: 'welk woord betekent (bijna) hetzelfde als X?'. Dat is een synoniem-vraag." },
          ],
          woorden: [
            { woord: "synoniem", uitleg: "Ander woord met (bijna) dezelfde betekenis." },
            { woord: "antoniem", uitleg: "Tegenovergesteld woord (de tegenstelling)." },
            { woord: "homoniem", uitleg: "Woord met meerdere betekenissen — bv. 'bank'." },
          ],
          theorie: "Toets-truc: zoek bij synoniem-vragen het woord dat in dezelfde zin hetzelfde gevoel/idee oproept als het oorspronkelijke woord.",
          voorbeelden: [
            { type: "stap", tekst: "**blij = vrolijk** — beide positieve gevoelens, kunnen elkaar vervangen." },
            { type: "stap", tekst: "**blij ≠ boos** — tegenovergesteld gevoel, dus geen synoniem maar een antoniem." },
          ],
          basiskennis: [{ onderwerp: "Eenvoudige check", uitleg: "Kun je het ene woord vervangen door het andere zonder dat de zin van betekenis verandert? Ja = synoniem. Nee = geen synoniem." }],
          niveaus: {
            basis: "Synoniem = woord met bijna dezelfde betekenis.",
            simpeler: "Twee woorden die hetzelfde betekenen, bv. blij en vrolijk. Dat zijn synoniemen.",
            nogSimpeler: "Synoniem = twee woorden die hetzelfde zeggen.",
          },
        },
      },
      {
        q: "Welk woord is een **synoniem** van **'blij'**?",
        options: ["Vrolijk", "Trots", "Verdrietig", "Rustig"],
        answer: 0,
        wrongHints: [null, "Trots ben je als je iets goed hebt gedaan. Is dat hetzelfde als blij?", "Verdrietig is juist het omgekeerde van blij.", "Rustig betekent kalm. Betekent dat hetzelfde als blij?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent 'blij'?", tekst: "**Blij** = een fijn gevoel, gelukkig, vrolijk. Iemand die net een cadeau kreeg, is blij." },
            { titel: "Welk woord lijkt erop?", tekst: "**Vrolijk** = óók een fijn gevoel, met een glimlach, lachen. Klassiek synoniem van blij." },
            { titel: "Andere opties?", tekst: "Trots = blij om iets wat je zelf goed deed, maar niet hetzelfde. Verdrietig = huilen, het tegenovergestelde van blij. Rustig = kalm, een ander gevoel. Allemaal geen synoniemen." },
          ],
          woorden: [
            { woord: "blij", uitleg: "Een fijn, positief gevoel." },
            { woord: "vrolijk", uitleg: "Hetzelfde — fijn gevoel, vaak met lachen erbij." },
          ],
          theorie: "Bij gevoels-synoniemen: zoek het woord met dezelfde 'kleur' van gevoel (positief/negatief).",
          voorbeelden: [
            { type: "stap", tekst: "Andere blij-synoniemen: gelukkig, opgewekt, in een goed humeur." },
            { type: "stap", tekst: "Blij-antoniemen (tegenstellingen): verdrietig, boos, somber, neerslachtig." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Zet elke optie in een zin: 'Ik ben blij met mijn cadeau.' Welk woord kun je in de plaats van 'blij' zetten zonder dat de zin iets anders betekent?" }],
          niveaus: {
            basis: "Vrolijk = synoniem van blij.",
            simpeler: "Blij en vrolijk zijn allebei een fijn gevoel. Daarom zijn het synoniemen.",
            nogSimpeler: "Vrolijk",
          },
        },
      },
      {
        q: "Welk woord betekent hetzelfde als **'enorm'**?",
        options: ["Reusachtig", "Minuscuul", "Gewichtig", "Langgerekt"],
        answer: 0,
        wrongHints: [null, "Minuscuul betekent piepklein. Is dat hetzelfde als enorm?", "Gewichtig gaat over zwaar of belangrijk zijn. Betekent het hetzelfde als enorm?", "Langgerekt is lang en smal. Is dat hetzelfde als enorm?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent 'enorm'?", tekst: "**Enorm** = heel erg groot. *'Een enorme taart'* = een heel grote taart. Het is een sterker woord dan gewoon 'groot'." },
            { titel: "Welk woord lijkt erop?", tekst: "**Reusachtig** komt van het woord *reus* (een heel grote figuur uit sprookjes). Een reusachtige taart = even groot als wat een reus zou eten. Dus reusachtig = enorm = heel groot." },
            { titel: "Andere synoniemen van 'enorm'", tekst: "Gigantisch, kolossaal, immens, geweldig groot. Allemaal woorden voor 'heel erg groot'. **Minuscuul** (piepklein) = tegenstelling, geen synoniem. **Gewichtig** en **langgerekt** = over gewicht en vorm, niet over hoe groot iets is." },
          ],
          woorden: [
            { woord: "enorm", uitleg: "Heel erg groot." },
            { woord: "reusachtig", uitleg: "Zo groot als een reus = enorm." },
          ],
          theorie: "Toets-truc: zoek bij synoniemen-vragen het woord dat **dezelfde categorie + dezelfde richting** heeft. Enorm = grootte + groot. Dus zoek ander grootte-woord dat ook 'groot' betekent → reusachtig.",
          voorbeelden: [
            { type: "stap", tekst: "*'Hij heeft een enorme hond.'* = *'Hij heeft een reusachtige hond.'* Beide zinnen betekenen hetzelfde." },
            { type: "stap", tekst: "*'Een kleine hond'* = tegenstelling. *'Een snelle hond'* = ander kenmerk (snelheid, niet grootte)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Synoniem = zelfde betekenis. Vraag jezelf: 'Kan ik het ene woord vervangen door het andere zonder dat de zin van betekenis verandert?' Bij enorm ↔ reusachtig: ja. Bij enorm ↔ klein: nee, betekenis draait om." }],
          niveaus: {
            basis: "Reusachtig = synoniem van enorm (allebei 'heel groot').",
            simpeler: "Enorm = heel groot. Reusachtig = even groot als een reus = heel groot. Hetzelfde.",
            nogSimpeler: "Reusachtig",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk woord is een synoniem van **'gauw'**?",
        options: ["Vlug", "Laat", "Traag", "Lang"],
        answer: 0,
        wrongHints: [null, "Laat gaat over de tijd op de klok. Betekent gauw dat?", "Traag is juist het omgekeerde.", "Als iets lang duurt, komt het dan gauw?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat betekent 'gauw'?",
              tekst: "**Gauw** betekent: snel, in korte tijd.",
            },
            {
              titel: "Zet het in een zin",
              tekst: "*'Kom gauw binnen!'* Vervang het woord door 'vlug': *'Kom vlug binnen!'* De zin betekent nog steeds hetzelfde.",
            },
            {
              titel: "Synoniem gevonden",
              tekst: "'Vlug' is dus een **synoniem** van 'gauw'. Snel betekent ook hetzelfde.",
            },
          ],
          woorden: [
            {
              woord: "synoniem",
              uitleg: "Woord dat bijna hetzelfde betekent als een ander woord.",
            },
            {
              woord: "gauw",
              uitleg: "Snel, in korte tijd.",
            },
          ],
          theorie: "Synoniem zoeken: zet elke optie in een zin. Blijft de betekenis hetzelfde? Dan heb je het synoniem.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "*'Kom gauw binnen!'* = *'Kom vlug binnen!'*",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Let op: een tegenstelling is precies omgekeerd. Die zoek je bij een synoniem-vraag dus niet.",
            },
          ],
          niveaus: {
            basis: "'Vlug' is een synoniem van 'gauw'.",
            simpeler: "'Gauw' en 'vlug' betekenen bijna hetzelfde.",
            nogSimpeler: "Vlug",
          },
        },
      },
      {
        q: "Welk woord betekent bijna hetzelfde als **'schitterend'**?",
        options: ["Prachtig", "Lelijk", "Saai", "Gewoon"],
        answer: 0,
        wrongHints: [null, "Dat is juist het omgekeerde.", "Saai betekent niet leuk. Past dat bij schitterend?", "Gewoon is niets bijzonders. Schitterend is veel meer dan dat."],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat betekent 'schitterend'?",
              tekst: "**Schitterend** betekent: heel erg mooi.",
            },
            {
              titel: "Zet het in een zin",
              tekst: "*'Wat een schitterend schilderij!'* Vervang het woord door 'prachtig': *'Wat een prachtig schilderij!'* De zin betekent nog steeds hetzelfde.",
            },
            {
              titel: "Synoniem gevonden",
              tekst: "'Prachtig' is dus een **synoniem** van 'schitterend'. Mooi, prachtig en schitterend horen bij elkaar.",
            },
          ],
          woorden: [
            {
              woord: "synoniem",
              uitleg: "Woord dat bijna hetzelfde betekent als een ander woord.",
            },
            {
              woord: "schitterend",
              uitleg: "Heel erg mooi.",
            },
          ],
          theorie: "Synoniem zoeken: zet elke optie in een zin. Blijft de betekenis hetzelfde? Dan heb je het synoniem.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "*'Wat een schitterend schilderij!'* = *'Wat een prachtig schilderij!'*",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Let op: een tegenstelling is precies omgekeerd. Die zoek je bij een synoniem-vraag dus niet.",
            },
          ],
          niveaus: {
            basis: "'Prachtig' is een synoniem van 'schitterend'.",
            simpeler: "'Schitterend' en 'prachtig' betekenen bijna hetzelfde.",
            nogSimpeler: "Prachtig",
          },
        },
      },
      {
        q: "Welk woord is een synoniem van **'sprinten'**?",
        options: ["Rennen", "Wandelen", "Fietsen", "Springen"],
        answer: 0,
        wrongHints: [null, "Wandelen gaat rustig. Is sprinten rustig?", "Bij fietsen zit je op een fiets. Doe je dat bij sprinten?", "Dat lijkt op elkaar qua klank, maar betekent het hetzelfde?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat betekent 'sprinten'?",
              tekst: "**Sprinten** betekent: heel hard lopen.",
            },
            {
              titel: "Zet het in een zin",
              tekst: "*'Hij sprintte naar de finish.'* Vervang het woord door 'rennen': *'Hij rende naar de finish.'* De zin betekent nog steeds hetzelfde.",
            },
            {
              titel: "Synoniem gevonden",
              tekst: "'Rennen' is dus een **synoniem** van 'sprinten'. Hard lopen betekent ook hetzelfde.",
            },
          ],
          woorden: [
            {
              woord: "synoniem",
              uitleg: "Woord dat bijna hetzelfde betekent als een ander woord.",
            },
            {
              woord: "sprinten",
              uitleg: "Heel hard lopen.",
            },
          ],
          theorie: "Synoniem zoeken: zet elke optie in een zin. Blijft de betekenis hetzelfde? Dan heb je het synoniem.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "*'Hij sprintte naar de finish.'* = *'Hij rende naar de finish.'*",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Let op: een tegenstelling is precies omgekeerd. Die zoek je bij een synoniem-vraag dus niet.",
            },
          ],
          niveaus: {
            basis: "'Rennen' is een synoniem van 'sprinten'.",
            simpeler: "'Sprinten' en 'rennen' betekenen bijna hetzelfde.",
            nogSimpeler: "Rennen",
          },
        },
      },
      {
        q: "Waarom gebruik je synoniemen in een tekst?",
        options: [
          "Zodat je niet steeds hetzelfde woord herhaalt",
          "Zodat je tekst korter wordt",
          "Zodat je minder spelfouten maakt",
          "Zodat je tekst over meer onderwerpen gaat",
        ],
        answer: 0,
        wrongHints: [null, "Een synoniem vervangt één woord door een ander. Wordt de tekst daar korter van?", "Het gaat om de betekenis, niet om de spelling.", "Een synoniem betekent bijna hetzelfde. Krijg je dan een nieuw onderwerp?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Steeds hetzelfde woord",
              tekst: "Stel: 'Het was een mooie dag. We zagen een mooie bloem en een mooi huis.' Drie keer 'mooi' is saai om te lezen.",
            },
            {
              titel: "Wissel af",
              tekst: "Met synoniemen wordt het: 'Het was een mooie dag. We zagen een prachtige bloem en een schitterend huis.'",
            },
            {
              titel: "Waarom handig",
              tekst: "Zo wordt je tekst **leuker om te lezen**, en je kunt preciezer zeggen wat je bedoelt.",
            },
          ],
          woorden: [
            {
              woord: "synoniem",
              uitleg: "Woord dat bijna hetzelfde betekent als een ander woord.",
            },
            {
              woord: "herhalen",
              uitleg: "Iets nog een keer doen of zeggen.",
            },
          ],
          theorie: "Synoniemen maken je tekst afwisselender: je hoeft niet elk woord te herhalen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "blij → vrolijk → gelukkig",
            },
            {
              type: "stap",
              tekst: "mooi → prachtig → schitterend",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Gebruik je een woord voor de derde keer? Zoek dan een synoniem.",
            },
          ],
          niveaus: {
            basis: "Zodat je niet steeds hetzelfde woord herhaalt.",
            simpeler: "Afwisseling maakt je tekst leuker.",
            nogSimpeler: "Niet herhalen.",
          },
        },
      },
      {
        q: "Welk rijtje bestaat helemaal uit synoniemen?",
        options: [
          "blij – vrolijk – gelukkig",
          "blij – boos – bang",
          "groot – klein – enorm",
          "snel – traag – vlug",
        ],
        answer: 0,
        wrongHints: [null, "Betekenen alle drie de gevoelens hetzelfde?", "Is 'klein' hetzelfde als 'groot'?", "Is 'traag' hetzelfde als 'snel'?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat moet je zoeken?",
              tekst: "Een rijtje synoniemen: **alle** woorden betekenen bijna hetzelfde.",
            },
            {
              titel: "Controleer elk rijtje",
              tekst: "groot – klein: omgekeerd. snel – traag: omgekeerd. blij – boos – bang: drie verschillende gevoelens.",
            },
            {
              titel: "Het goede rijtje",
              tekst: "blij – vrolijk – gelukkig: alle drie betekenen een fijn, vrolijk gevoel.",
            },
          ],
          woorden: [
            {
              woord: "synoniem",
              uitleg: "Woord dat bijna hetzelfde betekent als een ander woord.",
            },
            {
              woord: "tegenstelling",
              uitleg: "Woord met de omgekeerde betekenis.",
            },
          ],
          theorie: "Eén woord dat niet past, maakt het hele rijtje fout.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "mooi – prachtig – schitterend = rijtje synoniemen.",
            },
            {
              type: "stap",
              tekst: "groot – enorm – reusachtig = rijtje synoniemen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Check elk woord in het rijtje. Past er één niet? Dan valt het rijtje af.",
            },
          ],
          niveaus: {
            basis: "blij – vrolijk – gelukkig",
            simpeler: "Alle drie: een fijn gevoel.",
            nogSimpeler: "blij – vrolijk – gelukkig",
          },
        },
      },
    ],
  },

  // STAP 2: Synoniemen-paren
  {
    title: "Veel-gebruikte synoniemen-paren",
    explanation:
      "Hier zijn **synoniem-paren** die je vaak op de Doorstroomtoets ziet *(uit je hoofd!)*:\n\n**Gevoelens**:\n• blij = vrolijk / gelukkig\n• boos = kwaad / nijdig\n• bang = angstig\n• verdrietig = bedroefd\n• verbaasd = stomverbaasd / verrast\n\n**Grootte**:\n• groot = enorm / reusachtig\n• klein = minuscuul / piepklein\n• veel = talloos / massa's\n• weinig = schaars / beperkt\n\n**Snelheid**:\n• snel = vlug / gauw / rap\n• langzaam = traag / sloom\n\n**Eigenschappen**:\n• mooi = prachtig / schitterend / oogverblindend\n• lelijk = onaantrekkelijk\n• slim = intelligent / pienter / knap (bij denken)\n• dom = stom / onnozel\n• gemeen = vals / hatelijk\n• aardig = vriendelijk / lief\n\n**Werkwoorden**:\n• zien = aanschouwen / opmerken\n• zeggen = vertellen / spreken\n• lopen = wandelen / gaan\n• rennen = sprinten / hollen\n• eten = nuttigen / opeten / verorberen\n• maken = creëren / vervaardigen\n\n**Plekken**:\n• huis = woning / verblijf\n• school = leerinstelling / onderwijsplek\n• tuin = hof\n\n**Tijd**:\n• vandaag = heden\n• gisteren = de dag ervoor\n• morgen = de dag erna\n\n**Toets-truc** — kies de optie die het **dichtst** bij de oorspronkelijke betekenis ligt. Bij twijfel: probeer in een zin in te vullen.",
    checks: [
      {
        q: "Welk woord is een synoniem van **'snel'**?",
        options: ["Vlug", "Traag", "Vroeg", "Druk"],
        answer: 0,
        wrongHints: [null, "Traag = het tegenovergestelde van snel.", "Vroeg gaat over de tijd op de klok, niet over hoe snel iets gaat.", "Druk gaat over veel mensen of veel te doen. Is dat hetzelfde als snel?"],
        uitlegPad: {
          stappen: [
            { titel: "Snel betekent...", tekst: "**Snel** = hoge snelheid, in korte tijd. Een snelle auto, snel rennen, snel praten." },
            { titel: "Welk woord lijkt op snel?", tekst: "**Vlug** is een Nederlands woord dat exact hetzelfde betekent als snel. *'Vlug naar binnen!'* = *'Snel naar binnen!'*" },
            { titel: "Andere synoniemen", tekst: "Gauw, rap, kwiek, in een flits. Allemaal woorden voor hoge snelheid." },
          ],
          woorden: [
            { woord: "snel", uitleg: "Hoge snelheid." },
            { woord: "vlug", uitleg: "Synoniem voor snel, vooral in beweging." },
            { woord: "traag", uitleg: "Antoniem (tegenstelling): lage snelheid." },
          ],
          theorie: "Toets-truc: bij snelheids-woorden vraag jezelf — gaat het snel of langzaam? Synoniem = zelfde 'kant' (snel of langzaam).",
          voorbeelden: [{ type: "stap", tekst: "Snel-synoniemen sorteren op stijl: vlug (alledaags), gauw (informeel), rap (informeel), kwiek (literair). Allemaal snelheid + positief." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Snel ↔ traag is een klassiek antoniem-paar. Twee andere klassieke paren: groot↔klein, mooi↔lelijk." }],
          niveaus: {
            basis: "Vlug = synoniem van snel.",
            simpeler: "Snel + vlug = beide hoge snelheid. Hetzelfde.",
            nogSimpeler: "Vlug",
          },
        },
      },
      {
        q: "Welk woord is een synoniem van **'aardig'**?",
        options: ["Vriendelijk", "Nieuwsgierig", "Grappig", "Eerlijk"],
        answer: 0,
        wrongHints: [null, "Nieuwsgierig ben je als je alles wilt weten. Is dat hetzelfde als aardig?", "Grappig is iemand die je laat lachen. Is dat hetzelfde als aardig?", "Eerlijk is iemand die de waarheid zegt. Betekent dat aardig?"],
        uitlegPad: {
          stappen: [
            { titel: "Aardig betekent...", tekst: "**Aardig** = lief, vriendelijk, helpend. Een aardige juf, een aardige buurman. Positief karakter-woord." },
            { titel: "Welk woord lijkt erop?", tekst: "**Vriendelijk** = bijna identiek. Een vriendelijke groet, een vriendelijke buur. Allebei positief karakter." },
            { titel: "Andere synoniemen aardig", tekst: "Lief, sympathiek, beleefd, behulpzaam, hartelijk. Allemaal positieve karakter-woorden." },
          ],
          woorden: [{ woord: "aardig", uitleg: "Lief en vriendelijk in karakter." }, { woord: "vriendelijk", uitleg: "Lief en aardig — synoniem." }],
          theorie: "Karakter-synoniemen sorteren: positief (aardig, lief, vriendelijk, hartelijk) vs negatief (boos, gemeen, vals).",
          voorbeelden: [{ type: "stap", tekst: "*'De aardige man hielp mij.'* = *'De vriendelijke man hielp mij.'* Beide zinnen hetzelfde." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij karakter-vragen: pos vs neg sorteren. Aardig = positief. Vriendelijk ook positief = synoniem." }],
          niveaus: {
            basis: "Vriendelijk = synoniem van aardig.",
            simpeler: "Beide positief karakter.",
            nogSimpeler: "Vriendelijk",
          },
        },
      },
      {
        q: "Welk paar zijn synoniemen?",
        options: ["prachtig + mooi", "groot + klein", "blij + verdrietig", "snel + langzaam"],
        answer: 0,
        wrongHints: [null, "Groot + klein zijn tegenstellingen — niet hetzelfde maar omgekeerd.", "Blij + verdrietig zijn tegenstellingen.", "Snel + langzaam zijn tegenstellingen."],
        uitlegPad: {
          stappen: [
            { titel: "Lees elke optie", tekst: "Per paar: betekenen ze hetzelfde (= synoniem) of omgekeerd (= tegenstelling)? Synoniem zoek je hier." },
            { titel: "Prachtig + mooi", tekst: "**Prachtig** = heel mooi. **Mooi** = aantrekkelijk, goed om te zien. Beide positief over uiterlijk. Synoniem!" },
            { titel: "De andere paren", tekst: "Groot ↔ klein = grootte omgedraaid. Blij ↔ verdrietig = gevoel omgedraaid. Snel ↔ langzaam = snelheid omgedraaid. Alle 3 tegenstellingen, geen synoniemen." },
          ],
          woorden: [
            { woord: "prachtig", uitleg: "Heel erg mooi." },
            { woord: "mooi", uitleg: "Aantrekkelijk om te zien." },
          ],
          theorie: "Toets-truc paren-vraag: lees beide woorden van elk paar. Vraag: zeggen ze hetzelfde? Ja → synoniem. Tegengesteld → antoniem.",
          voorbeelden: [{ type: "stap", tekst: "Synoniem-paren: blij+vrolijk, snel+vlug, klein+minuscuul. Antoniem-paren: dag+nacht, jong+oud." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij paren: 'kunnen ze elkaar vervangen in een zin?' Ja → synoniem. Nee, betekenis wordt omgekeerd → antoniem." }],
          niveaus: {
            basis: "prachtig + mooi = beide aantrekkelijk = synoniem.",
            simpeler: "Andere paren zijn tegenstellingen. Alleen prachtig+mooi = hetzelfde.",
            nogSimpeler: "prachtig + mooi",
          },
        },
      },
      {
        q: "Welk woord is GEEN synoniem van 'rennen'?",
        options: ["Wandelen", "Sprinten", "Hollen", "Snel lopen"],
        answer: 0,
        wrongHints: [null, "Sprinten = heel snel rennen — wel synoniem.", "Hollen = ander woord voor rennen — wel synoniem.", "Snel lopen ≈ rennen — wel synoniem."],
        uitlegPad: {
          stappen: [
            { titel: "Let op de vraag — GEEN!", tekst: "Bij de Doorstroomtoets staat soms het woord **GEEN** (vaak met hoofdletters) in de vraag. Dat draait de vraag om: je zoekt niet het woord dat hetzelfde betekent, maar het woord dat **anders** betekent." },
            { titel: "Wat is 'rennen'?", tekst: "**Rennen** = heel hard lopen, snel voortbewegen. Een atleet die de 100 meter doet, rent. Synoniemen: sprinten, hollen, snel lopen — allemaal snel-bewegen." },
            { titel: "Welk woord past NIET?", tekst: "**Wandelen** = rustig lopen, voor je plezier of om ergens te komen. Niet snel. Dus wandelen is GEEN synoniem van rennen — dat is het antwoord op de GEEN-vraag." },
          ],
          woorden: [
            { woord: "rennen", uitleg: "Heel hard lopen, snel." },
            { woord: "wandelen", uitleg: "Rustig lopen, niet snel." },
          ],
          theorie: "Toets-truc bij GEEN-vragen: lees de vraag 2x. Onderstreep het woord 'GEEN'. Zoek dan het ene woord dat NIET in het rijtje past. Vaak zijn 3 opties synoniemen + 1 is iets anders (de tegenstelling, of een ander concept).",
          voorbeelden: [
            { type: "stap", tekst: "*'Welk woord is GEEN synoniem van blij?'* Opties: vrolijk, gelukkig, **boos**, opgewekt. Antwoord = boos (tegenstelling)." },
            { type: "stap", tekst: "*'Welk woord is GEEN synoniem van groot?'* Opties: enorm, reusachtig, **klein**, gigantisch. Antwoord = klein." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vind het 'vreemde eend in de bijt' = de optie die niet bij de andere drie past. Vaak is dat de tegenstelling van het hoofdwoord." }],
          niveaus: {
            basis: "Wandelen = rustig lopen, niet snel. Rennen = snel. Dus wandelen is GEEN synoniem van rennen.",
            simpeler: "Sprinten, hollen, snel lopen = allemaal snel = synoniemen van rennen. Wandelen = rustig = past niet.",
            nogSimpeler: "Wandelen (rustig, geen rennen).",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk woord is een synoniem van **'traag'**?",
        options: ["Langzaam", "Snel", "Laat", "Vermoeid"],
        answer: 0,
        wrongHints: [null, "Dat is juist het omgekeerde.", "Laat gaat over de tijd op de klok. Traag gaat over hoe snel iets gaat.", "Als je vermoeid bent, ga je misschien traag. Betekent vermoeid hetzelfde?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat betekent 'traag'?",
              tekst: "**Traag** betekent: niet snel, met lage snelheid.",
            },
            {
              titel: "Zet het in een zin",
              tekst: "*'De slak kroop traag over de stoep.'* Vervang het woord door 'langzaam': *'De slak kroop langzaam over de stoep.'* De zin betekent nog steeds hetzelfde.",
            },
            {
              titel: "Synoniem gevonden",
              tekst: "'Langzaam' is dus een **synoniem** van 'traag'. Sloom hoort er ook bij.",
            },
          ],
          woorden: [
            {
              woord: "synoniem",
              uitleg: "Woord dat bijna hetzelfde betekent als een ander woord.",
            },
            {
              woord: "traag",
              uitleg: "Niet snel, met lage snelheid.",
            },
          ],
          theorie: "Synoniem zoeken: zet elke optie in een zin. Blijft de betekenis hetzelfde? Dan heb je het synoniem.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "*'De slak kroop traag over de stoep.'* = *'De slak kroop langzaam over de stoep.'*",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Let op: een tegenstelling is precies omgekeerd. Die zoek je bij een synoniem-vraag dus niet.",
            },
          ],
          niveaus: {
            basis: "'Langzaam' is een synoniem van 'traag'.",
            simpeler: "'Traag' en 'langzaam' betekenen bijna hetzelfde.",
            nogSimpeler: "Langzaam",
          },
        },
      },
      {
        q: "Welk woord betekent hetzelfde als **'woning'**?",
        options: ["Huis", "Tuin", "Straat", "Winkel"],
        answer: 0,
        wrongHints: [null, "Een tuin hoort bij een huis. Woon je ín de tuin?", "Aan een straat staan huizen. Woon je óp de straat?", "In een winkel koop je iets. Woon je er ook?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat betekent 'woning'?",
              tekst: "**Woning** betekent: de plek waar je woont.",
            },
            {
              titel: "Zet het in een zin",
              tekst: "*'Ze kochten een nieuwe woning.'* Vervang het woord door 'huis': *'Ze kochten een nieuw huis.'* De zin betekent nog steeds hetzelfde.",
            },
            {
              titel: "Synoniem gevonden",
              tekst: "'Huis' is dus een **synoniem** van 'woning'. Woning is wat deftiger, huis is het gewone woord.",
            },
          ],
          woorden: [
            {
              woord: "synoniem",
              uitleg: "Woord dat bijna hetzelfde betekent als een ander woord.",
            },
            {
              woord: "woning",
              uitleg: "De plek waar je woont.",
            },
          ],
          theorie: "Synoniem zoeken: zet elke optie in een zin. Blijft de betekenis hetzelfde? Dan heb je het synoniem.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "*'Ze kochten een nieuwe woning.'* = *'Ze kochten een nieuw huis.'*",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Let op: een tegenstelling is precies omgekeerd. Die zoek je bij een synoniem-vraag dus niet.",
            },
          ],
          niveaus: {
            basis: "'Huis' is een synoniem van 'woning'.",
            simpeler: "'Woning' en 'huis' betekenen bijna hetzelfde.",
            nogSimpeler: "Huis",
          },
        },
      },
      {
        q: "Welk woord hoort als synoniem bij **'verbaasd'**?",
        options: ["Verrast", "Verveeld", "Verdrietig", "Vergeten"],
        answer: 0,
        wrongHints: [null, "Verveeld ben je als er niets te doen is. Is dat verbaasd?", "Verdrietig ben je als er iets naars gebeurt. Is dat verbaasd?", "Ze beginnen allemaal met 'ver-', maar kijk naar de betekenis."],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat betekent 'verbaasd'?",
              tekst: "**Verbaasd** betekent: je had iets niet verwacht.",
            },
            {
              titel: "Zet het in een zin",
              tekst: "*'Tim keek verbaasd op toen hij het cadeau zag.'* Vervang het woord door 'verrast': *'Tim keek verrast op toen hij het cadeau zag.'* De zin betekent nog steeds hetzelfde.",
            },
            {
              titel: "Synoniem gevonden",
              tekst: "'Verrast' is dus een **synoniem** van 'verbaasd'. Stomverbaasd is nog sterker.",
            },
          ],
          woorden: [
            {
              woord: "synoniem",
              uitleg: "Woord dat bijna hetzelfde betekent als een ander woord.",
            },
            {
              woord: "verbaasd",
              uitleg: "Je had iets niet verwacht.",
            },
          ],
          theorie: "Synoniem zoeken: zet elke optie in een zin. Blijft de betekenis hetzelfde? Dan heb je het synoniem.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "*'Tim keek verbaasd op toen hij het cadeau zag.'* = *'Tim keek verrast op toen hij het cadeau zag.'*",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Let op: een tegenstelling is precies omgekeerd. Die zoek je bij een synoniem-vraag dus niet.",
            },
          ],
          niveaus: {
            basis: "'Verrast' is een synoniem van 'verbaasd'.",
            simpeler: "'Verbaasd' en 'verrast' betekenen bijna hetzelfde.",
            nogSimpeler: "Verrast",
          },
        },
      },
      {
        q: "Welk woord is een synoniem van **'gemeen'**?",
        options: ["Vals", "Lief", "Boos", "Streng"],
        answer: 0,
        wrongHints: [null, "Dat is juist het omgekeerde.", "Boos ben je als je kwaad bent. Betekent dat hetzelfde als gemeen?", "Een strenge juf houdt zich aan de regels. Is dat gemeen?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat betekent 'gemeen'?",
              tekst: "**Gemeen** betekent: expres naar of onaardig doen.",
            },
            {
              titel: "Zet het in een zin",
              tekst: "*'Pas op, dat is een gemene hond!'* Vervang het woord door 'vals': *'Pas op, dat is een valse hond!'* De zin betekent nog steeds hetzelfde.",
            },
            {
              titel: "Synoniem gevonden",
              tekst: "'Vals' is dus een **synoniem** van 'gemeen'. Hatelijk betekent ook hetzelfde.",
            },
          ],
          woorden: [
            {
              woord: "synoniem",
              uitleg: "Woord dat bijna hetzelfde betekent als een ander woord.",
            },
            {
              woord: "gemeen",
              uitleg: "Expres naar of onaardig doen.",
            },
          ],
          theorie: "Synoniem zoeken: zet elke optie in een zin. Blijft de betekenis hetzelfde? Dan heb je het synoniem.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "*'Pas op, dat is een gemene hond!'* = *'Pas op, dat is een valse hond!'*",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Let op: een tegenstelling is precies omgekeerd. Die zoek je bij een synoniem-vraag dus niet.",
            },
          ],
          niveaus: {
            basis: "'Vals' is een synoniem van 'gemeen'.",
            simpeler: "'Gemeen' en 'vals' betekenen bijna hetzelfde.",
            nogSimpeler: "Vals",
          },
        },
      },
    ],
  },

  // STAP 3: Tegenstellingen
  {
    title: "Tegenstellingen (antoniem)",
    explanation:
      "Een **tegenstelling** *(of antoniem)* is een woord met de **omgekeerde** betekenis.\n\n**Voorbeelden**:\n• groot ↔ klein\n• blij ↔ verdrietig\n• snel ↔ langzaam\n• mooi ↔ lelijk\n• rijk ↔ arm\n• warm ↔ koud\n• licht ↔ donker / zwaar\n• boven ↔ onder\n• binnen ↔ buiten\n• voor ↔ achter / na\n• vroeg ↔ laat\n• jong ↔ oud\n• ja ↔ nee\n• altijd ↔ nooit\n• alles ↔ niets\n• veel ↔ weinig\n• beginnen ↔ stoppen / eindigen\n• komen ↔ gaan\n• openen ↔ sluiten\n\n**'On-' truc**:\nVeel tegenstellingen worden gemaakt door **on-** voor het woord te zetten:\n• vriendelijk ↔ **on**vriendelijk\n• zichtbaar ↔ **on**zichtbaar\n• mogelijk ↔ **on**mogelijk\n• gelukkig ↔ **on**gelukkig\n• voorzichtig ↔ **on**voorzichtig\n\n**Maar pas op** — niet altijd:\n• **on**weer = niet 'geen weer', maar donder en bliksem.\n• **on**kruid = ongewenste planten, niet 'geen kruid'.\n\n**'Niet-' is ook tegenstelling**:\n• rokers ↔ **niet**-rokers\n• zwemmers ↔ **niet**-zwemmers\n\n**Toets-truc — herken het woord 'tegenovergestelde'**:\nAls de vraag *'tegenovergestelde'* zegt, zoek **niet** een synoniem maar een **tegenstelling**.",
    checks: [
      {
        q: "Wat is het **tegenovergestelde** van **'groot'**?",
        options: ["Klein", "Enorm", "Reusachtig", "Hoog"],
        answer: 0,
        wrongHints: [null, "Dat is een synoniem van groot.", "Dat is een synoniem.", "Hoog is iets anders (richting), niet grootte."],
      },
      {
        q: "Wat is het **tegenovergestelde** van **'snel'**?",
        options: ["Langzaam", "Vlug", "Haastig", "Gauw"],
        answer: 0,
        wrongHints: [null, "Vlug betekent ook snel. Wat is het omgekeerde?", "Haastig betekent dat je haast hebt, dus snel. Wat is het omgekeerde?", "Gauw betekent ook snel. Wat is het omgekeerde?"],
      },
      {
        q: "Wat is het tegenovergestelde van **'mogelijk'**?",
        options: ["Onmogelijk", "Mogelijkheid", "Mogen", "Soms mogelijk"],
        answer: 0,
        wrongHints: [null, "Dat is hetzelfde woord, nu zelfstandig.", "Mogen is een werkwoord: iets wel mogen doen. Is dat het omgekeerde van mogelijk?", "Niet helemaal het tegenovergestelde."],
        uitlegPad: {
          stappen: [
            { titel: "On-truc", tekst: "Voor veel woorden geldt: voeg 'on-' toe → tegenstelling. Mogelijk → onmogelijk." },
          ],
          woorden: [{ woord: "on-", uitleg: "Voorvoegsel dat betekent 'niet'." }],
          theorie: "Met 'on-' voor een woord krijg je vaak de tegenstelling.",
          voorbeelden: [{ type: "stap", tekst: "Vriendelijk → onvriendelijk. Zichtbaar → onzichtbaar. Mogelijk → onmogelijk." }],
          basiskennis: [{ onderwerp: "Niet altijd", uitleg: "On-weer en on-kruid zijn specifieke woorden, niet zomaar 'geen weer/kruid'." }],
          niveaus: {
            basis: "Onmogelijk.",
            simpeler: "Mogelijk → met 'on-' voor → onmogelijk = het tegenovergestelde.",
            nogSimpeler: "Onmogelijk",
          },
        },
      },
      {
        q: "Welk paar zijn **tegenstellingen**?",
        options: ["jong + oud", "klein + minuscuul", "blij + vrolijk", "snel + vlug"],
        answer: 0,
        wrongHints: [null, "Klein/minuscuul = bijna hetzelfde — synoniemen.", "Blij/vrolijk = bijna hetzelfde — synoniemen.", "Snel/vlug = bijna hetzelfde — synoniemen."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is het **tegenovergestelde** van **'vroeg'**?",
        options: ["Laat", "Snel", "Vandaag", "Ochtend"],
        answer: 0,
        wrongHints: [null, "Snel gaat over vaart, niet over de tijd op de klok.", "Vandaag is een dag. Wat is het omgekeerde van vroeg zijn?", "De ochtend is vroeg op de dag — is dat het omgekeerde?"],
      },
      {
        q: "Wat is het **tegenovergestelde** van **'altijd'**?",
        options: ["Nooit", "Vaak", "Soms", "Meestal"],
        answer: 0,
        wrongHints: [null, "Vaak is bijna altijd. Wat is precies omgekeerd?", "Soms ligt ertussenin — wat is precies omgekeerd?", "Meestal ligt dicht bij altijd. Wat is precies omgekeerd?"],
      },
      {
        q: "Wat is het **tegenovergestelde** van **'openen'**?",
        options: ["Sluiten", "Openmaken", "Trekken", "Beginnen"],
        answer: 0,
        wrongHints: [null, "Dat betekent hetzelfde als openen.", "Aan een deur trek je soms. Is trekken het omgekeerde van openen?", "Lijkt beginnen op openen, of is het het omgekeerde?"],
      },
      {
        q: "Wat betekent het woord **'onweer'**?",
        options: ["Donder en bliksem", "Weer dat niet goed is", "Een dikke mist", "Harde wind met regen"],
        answer: 0,
        wrongHints: [null, "Pas op: 'on-' betekent hier niet 'niet'. Wat hoor en zie je bij onweer?", "Bij mist zie je weinig. Hoor je dan gerommel in de lucht?", "Dat is een storm. Wat hoor en zie je bij onweer?"],
      },
      {
        q: "Welk paar is **geen** tegenstelling?",
        options: ["rennen + hollen", "komen + gaan", "licht + donker", "alles + niets"],
        answer: 0,
        wrongHints: [null, "Is komen het omgekeerde van gaan?", "Is licht het omgekeerde van donker?", "Is alles het omgekeerde van niets?"],
      },
    ],
  },

  // STAP 4: Welk woord past in een zin?
  {
    title: "Welk woord past in een zin?",
    explanation:
      "De toets stelt vaak: *'Welk woord past het beste in deze zin?'*\n\nDe **truc**: lees de hele zin met elke optie. Welke past natuurlijk?\n\n**Voorbeeld 1**:\n*'De auto reed ___ door de bocht.'*\nOpties: snel / blauw / koud / luid.\n• Snel — past *(snelheid bij bocht)*.\n• Blauw — kleur, past niet bij 'reed door bocht'.\n• Koud — temperatuur, past niet bij bocht.\n• Luid — geluid, kan maar 'snel' past beter bij 'reed door'.\n→ **Snel** is het beste antwoord.\n\n**Voorbeeld 2**:\n*'Anna voelde zich ___ na het slechte cijfer.'*\nOpties: vrolijk / verdrietig / hongerig / klein.\n• Vrolijk past niet bij 'slecht cijfer'.\n• Verdrietig past wel.\n• Hongerig heeft niets met cijfer te maken.\n• Klein verwijst naar grootte.\n→ **Verdrietig** is het beste antwoord.\n\n**Toets-stappenplan**:\n1. Lees de hele zin *(niet alleen het stuk eromheen)*.\n2. Bedenk welk **gevoel/onderwerp** centraal staat.\n3. Lees elke optie in de zin.\n4. Welke past natuurlijk + houdt logisch verband?\n5. Streep onzinnige opties door — kies de overgebleven beste.\n\n**Pas op — meerdere kunnen 'kloppen'**:\nSoms kunnen 2 woorden technisch passen, maar 1 is **natuurlijker**. Kies degene die het meest gangbaar is in normaal Nederlands.",
    checks: [
      {
        q: "Welk woord past hier? *'De jongen rende zo ___ dat hij de bus nog haalde.'*",
        options: ["snel", "langzaam", "stil", "voorzichtig"],
        answer: 0,
        wrongHints: [null, "Haal je de bus als je langzaam rent?", "Haal je de bus omdat je stil bent?", "Haal je de bus omdat je voorzichtig bent?"],
      },
      {
        q: "Welk woord past? *'De ___ soep brandde mijn tong.'*",
        options: ["hete", "koude", "lauwe", "dikke"],
        answer: 0,
        wrongHints: [null, "Koude soep brandt niet — hoe moet soep zijn om je tong te branden?", "Lauw is maar een beetje warm. Brand je daar je tong aan?", "Dik gaat over hoe de soep eruitziet. Waardoor brand je je tong?"],
      },
      {
        q: "Welk woord past? *'Lisa was ___ omdat haar huisdier weg was.'*",
        options: ["verdrietig", "vrolijk", "verveeld", "trots"],
        answer: 0,
        wrongHints: [null, "Vrolijk past niet bij een huisdier dat weg is.", "Verveeld ben je als er niets te doen is. Past dat als je huisdier weg is?", "Trots ben je als iets goed gaat. Past dat hier?"],
      },
      {
        q: "Welk woord past het **best**? *'De ___ man stak langzaam en voorzichtig de straat over.'*",
        options: ["oude", "snelle", "sportieve", "drukke"],
        answer: 0,
        wrongHints: [null, "Lees de hele zin: hij steekt lángzaam over — past 'snel' daarbij?", "Een sportieve man beweegt vlot. Past dat het best bij langzaam en voorzichtig?", "Een druk iemand beweegt en praat veel. Past dat bij voorzichtig?"],
        uitlegPad: {
          stappen: [
            { titel: "Welke woorden zijn 'normaal' bij 'man'?", tekst: "Bij een persoon zoals 'man' zijn sommige bijvoeglijke naamwoorden veel gangbaarder dan andere. Denk aan: **oude/jonge man**, **lange/kleine man**, **dikke/dunne man**. Maar de rest van de zin beslist welke het best past." },
            { titel: "Lees de hele zin", tekst: "*'De ___ man stak langzaam en voorzichtig de straat over.'* — wat doet die man? Hij steekt LANGZAAM en VOORZICHTIG over. Daarom past 'oude' het beste — denk aan een oudere meneer die rustig oversteekt." },
            { titel: "Waarom niet de andere opties?", tekst: "• **Snelle** — botst met 'langzaam en voorzichtig' in dezelfde zin. \n• **Sportieve** en **drukke** — zo'n man beweegt juist vlot en veel. Dat past minder bij langzaam en voorzichtig." },
          ],
          woorden: [
            { woord: "gangbaar", uitleg: "Wat normaal of vaak wordt gezegd in het Nederlands." },
            { woord: "bijvoeglijk naamwoord", uitleg: "Woord dat iets vertelt over een ander woord (mooi huis, oude man)." },
          ],
          theorie: "Toets-truc 'past het beste': bedenk welke combi je het vaakst in een boek of krant zou lezen. *'Oude man'* = duizenden boeken. *'Drukke man'* die voorzichtig oversteekt = vreemd. Kies de natuurlijkste, niet de meest letterlijk-kloppende.",
          voorbeelden: [
            { type: "stap", tekst: "*'De ___ kat sliep op de bank.'* Opties: dikke / boze / snelle / luide. **Dikke** past het beste — dat is een gangbaar beeld bij slapende kat." },
            { type: "stap", tekst: "*'Het was een ___ feest.'* Opties: gezellig / koud / klein / vies. **Gezellig** past het beste — typisch woord bij een feest." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lees in je hoofd elke optie in de zin. Klinkt het natuurlijk — alsof je het zo in een verhaal zou kunnen vertellen? Kies die optie." }],
          niveaus: {
            basis: "Oude man = gangbaar beeld bij oversteken.",
            simpeler: "Welke past in een echt verhaal? 'Oude man steekt straat over' = ja, vaak. De andere: zelden of nooit.",
            nogSimpeler: "Oude",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk woord past? *'Het was zo ___ in de bibliotheek dat je niemand hoorde praten.'*",
        options: ["stil", "warm", "donker", "vol"],
        answer: 0,
        wrongHints: [null, "Warm voel je. Gaat de zin over voelen of over horen?", "Donker zie je. Gaat de zin over zien of over horen?", "Als het vol is, zijn er veel mensen. Hoor je dan niemand praten?"],
      },
      {
        q: "Welk woord past? *'Na de lange wandeling waren mijn benen heel ___.'*",
        options: ["moe", "fit", "snel", "sterk"],
        answer: 0,
        wrongHints: [null, "Ben je fit na een lange wandeling, of juist niet?", "Worden je benen sneller van een lange wandeling?", "Worden je benen meteen sterk van één wandeling? Hoe voelen ze na afloop?"],
      },
      {
        q: "Welk woord past? *'De zon ging onder en het werd ___.'*",
        options: ["donker", "licht", "warm", "vroeg"],
        answer: 0,
        wrongHints: [null, "Wat gebeurt er als de zon weg is?", "Wordt het warmer als de zon weg is?", "Is het vroeg als de zon ondergaat? Kijk wat je dan ziet."],
      },
      {
        q: "Welk woord past? *'Tim moest hard lachen om de ___ film.'*",
        options: ["grappige", "saaie", "verdrietige", "enge"],
        answer: 0,
        wrongHints: [null, "Lach je hard om iets saais?", "Lach je hard om iets verdrietigs?", "Lach je hard om een enge film?"],
      },
      {
        q: "Welk woord past? *'Een muis is een ___ dier.'*",
        options: ["klein", "reusachtig", "langzaam", "zwaar"],
        answer: 0,
        wrongHints: [null, "Denk aan hoe groot een muis is.", "Een muis rent juist heel vlug weg.", "Kun je een muis makkelijk optillen?"],
      },
      {
        q: "Welk woord past? *'Mijn zusje schrok en was ___ voor het harde onweer.'*",
        options: ["bang", "verdrietig", "trots", "nieuwsgierig"],
        answer: 0,
        wrongHints: [null, "Je schrikt van onweer. Word je dan verdrietig, of iets anders?", "Lees de hele zin: ze schrok. Past trots daarbij?", "Als je schrikt van onweer, ben je dan nieuwsgierig?"],
      },
    ],
  },

  // STAP 5: Doorstroomtoets-mix
  {
    title: "Eindopdracht — synoniem + tegenstelling mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: synoniemen, tegenstellingen, woord-in-zin.\n\nVeel succes!",
    checks: [
      {
        q: "Welk woord is een synoniem van **'verdrietig'**?",
        options: ["Bedroefd", "Vrolijk", "Boos", "Moe"],
        answer: 0,
        wrongHints: [null, "Vrolijk is juist het omgekeerde.", "Boos ben je als iets oneerlijk is. Is dat hetzelfde als verdrietig?", "Moe ben je als je slaap nodig hebt. Betekent dat verdrietig?"],
      },
      {
        q: "Wat is de tegenstelling van **'binnen'**?",
        options: ["Buiten", "Naast", "Over", "Tussen"],
        answer: 0,
        wrongHints: [null, "Niet het tegenovergestelde — naast is een plek-aanduiding.", "Over is boven iets langs. Is dat het omgekeerde van binnen?", "Tussen is in het midden van twee dingen. Is dat het omgekeerde?"],
      },
      {
        q: "Welk woord past? *'Het was ___ vandaag, dus geen jas nodig.'*",
        options: ["warm", "koud", "nat", "winderig"],
        answer: 0,
        wrongHints: [null, "Tegenstelling — dan zou je wél een jas nodig hebben.", "Als het nat is, laat je dan je jas thuis?", "Als het hard waait, laat je dan je jas thuis?"],
      },
      {
        q: "Welk woord is een synoniem van **'lopen'**?",
        options: ["Wandelen", "Rennen", "Springen", "Kruipen"],
        answer: 0,
        wrongHints: [null, "Rennen is veel sneller dan lopen.", "Bij springen kom je los van de grond. Is dat lopen?", "Bij kruipen ga je op handen en knieën. Is dat lopen?"],
      },
      {
        q: "Wat is de tegenstelling van **'beginnen'**?",
        options: ["Stoppen", "Doorgaan", "Starten", "Aanvang"],
        answer: 0,
        wrongHints: [null, "Doorgaan is voortzetten, geen tegenstelling.", "Starten = synoniem van beginnen.", "Aanvang = synoniem van beginnen (zelfstandig naamwoord)."],
      },
      {
        q: "Welk woord past het beste? *'Anna voelde zich ___ na haar uitstekende cijfer.'*",
        options: ["trots", "boos", "teleurgesteld", "bang"],
        answer: 0,
        wrongHints: [null, "Word je boos van een uitstekend cijfer?", "Ben je teleurgesteld als je cijfer heel goed is?", "Ben je bang na een goed cijfer?"],
      },
      { q: "Welk woord is een synoniem van **groot**?", options: ["enorm","klein","zwaar","breed"], answer: 0, wrongHints: [null, "Klein is juist het omgekeerde.", "Zwaar gaat over gewicht. Een grote ballon is niet zwaar.", "Breed gaat alleen over hoe wijd iets is."] },
      { q: "Wat is de tegenstelling van **snel**?", options: ["langzaam","vlug","direct","laat"], answer: 0, wrongHints: [null, "Vlug betekent juist ook snel.", "Direct = meteen, niet het tegenovergestelde.", "Laat gaat over de tijd op de klok, niet over hoe snel iets gaat."] },
      { q: "Welk woord is een synoniem van **mooi**?", options: ["prachtig","lelijk","gewoon","duur"], answer: 0, wrongHints: [null, "Lelijk is juist het omgekeerde.", "Gewoon is niets bijzonders. Is dat mooi?", "Is iets wat duur is altijd mooi?"] },
      { q: "Wat is de tegenstelling van **vol**?", options: ["leeg","gevuld","volop","zwaar"], answer: 0, wrongHints: [null, "Gevuld betekent juist hetzelfde als vol.", "Volop = heel veel, niet het tegenovergestelde.", "Een tas kan zwaar zijn, ook met maar één ding erin. Is zwaar het omgekeerde van vol?"] },
      { q: "Welk woord betekent hetzelfde als **hard** in *'de muziek staat hard'*?", options: ["luid","zacht","snel","hoog"], answer: 0, wrongHints: [null, "Zacht is juist het omgekeerde.", "Hard rijden is snel rijden. Maar gaat het hier over muziek?", "Hoog gaat over een toon, zoals bij een fluitje. Is dat hetzelfde als hard?"] },
      { q: "Wat is de tegenstelling van **rijk**?", options: ["arm","duur","zuinig","goedkoop"], answer: 0, wrongHints: [null, "Duur gaat over de prijs van iets, niet over hoeveel geld iemand heeft.", "Een zuinig mens geeft weinig uit, maar kan toch veel geld hebben.", "Goedkoop gaat over de prijs van iets. Wat is het omgekeerde van veel geld hebben?"] },
      { q: "Welk woord is een synoniem van **belangrijk**?", options: ["essentieel","onbelangrijk","eenvoudig","bekend"], answer: 0, wrongHints: [null, "Onbelangrijk is juist het omgekeerde.", "Eenvoudig betekent makkelijk. Is dat hetzelfde als belangrijk?", "Iets kan bekend zijn en toch niet belangrijk. Betekent het hetzelfde?"] },
      { q: "Wat is de tegenstelling van **dag**?", options: ["nacht","ochtend","middag","week"], answer: 0, wrongHints: [null, "De ochtend is een deel van de dag. Wat is het omgekeerde?", "De middag is een deel van de dag. Wat is het omgekeerde?", "Een week bestaat uit zeven dagen. Is dat het omgekeerde?"] },
      { q: "Welk woord is een synoniem van **vrolijk**?", options: ["blij","boos","trots","rustig"], answer: 0, wrongHints: [null, "Boos is juist een heel ander gevoel.", "Trots ben je als je iets goed hebt gedaan. Is dat hetzelfde als vrolijk?", "Rustig betekent kalm. Betekent dat hetzelfde als vrolijk?"] },
      { q: "Wat is de tegenstelling van **jong**?", options: ["oud","klein","groot","nieuw"], answer: 0, wrongHints: [null, "Klein gaat over de maat, niet over leeftijd.", "Een groot kind is nog steeds jong. Gaat groot over leeftijd?", "Nieuw gaat over spullen, niet over hoe oud iemand is."] },
      { q: "Welk woord is een synoniem van **eenvoudig**?", options: ["makkelijk","moeilijk","kort","rustig"], answer: 0, wrongHints: [null, "Moeilijk is juist het omgekeerde.", "Een korte som kan toch moeilijk zijn. Betekent kort hetzelfde?", "Rustig gaat over kalm zijn. Betekent dat eenvoudig?"] },
      { q: "Wat is de tegenstelling van **schoon**?", options: ["vies","mooi","nat","kapot"], answer: 0, wrongHints: [null, "Mooi gaat over hoe iets eruitziet, niet over vuil.", "Na een bad ben je nat én schoon. Is nat dan het omgekeerde?", "Kapot gaat over heel of niet, niet over vuil."] },
      { q: "Welk woord is een synoniem van **bang**?", options: ["angstig","verdrietig","stoer","sterk"], answer: 0, wrongHints: [null, "Verdrietig ben je als er iets naars gebeurt. Is dat hetzelfde als bang?", "Stoer is juist bijna het omgekeerde.", "Sterk gaat over kracht. Betekent het hetzelfde als bang?"] },
      { q: "Wat is de tegenstelling van **boven**?", options: ["onder","naast","achter","voor"], answer: 0, wrongHints: [null, "Naast is opzij van iets. Boven gaat over hoog of laag.", "Achter gaat over vóór of achter iets, niet over hoog of laag.", "Voor gaat over de voorkant van iets. Wat is het omgekeerde van boven?"] },
      { q: "Welk woord is een synoniem van **veel**?", options: ["talloos","weinig","genoeg","groot"], answer: 0, wrongHints: [null, "Weinig is juist het omgekeerde.", "Genoeg is zoveel als nodig is. Is dat hetzelfde als veel?", "Groot gaat over de maat van iets, niet over hoeveel er zijn."] },
      { q: "Wat is de tegenstelling van **warm**?", options: ["koud","heet","lauw","nat"], answer: 0, wrongHints: [null, "Heet is juist nóg warmer.", "Lauw zit tussen warm en koud in. Wat is precies omgekeerd?", "Nat gaat over water, niet over warm of niet."] },
      { q: "Welk woord is een synoniem van **slim**?", options: ["intelligent","dom","grappig","nieuwsgierig"], answer: 0, wrongHints: [null, "Dom is juist het omgekeerde.", "Iemand kan grappig zijn zonder slim te zijn. Betekent het hetzelfde?", "Nieuwsgierig ben je als je iets wilt weten. Is dat hetzelfde als slim?"] },
      { q: "Wat is de tegenstelling van **leeg**?", options: ["vol","half","zwaar","open"], answer: 0, wrongHints: [null, "Half zit er tussenin. Wat is precies omgekeerd?", "Een doos kan zwaar zijn, ook met weinig erin. Gaat zwaar over leeg of niet?", "Een doos kan open en leeg zijn. Is open het omgekeerde?"] },
      { q: "Welk woord is een synoniem van **stil**?", options: ["rustig","luid","moe","langzaam"], answer: 0, wrongHints: [null, "Luid is juist het omgekeerde.", "Als je moe bent, ben je misschien stil. Betekent moe hetzelfde?", "Langzaam gaat over hoe snel iets gaat, niet over geluid."] },
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
