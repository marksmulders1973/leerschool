// Leerpad: Geschiedenis — vroeger en nu (groep 5).
// Mark 12 aug 2026: laatste "hieraan bouwen we"-tegels wegwerken — groep 5
// had géén geschiedenis-pad (alles start bij groep 6+). Dit is de start van
// het vak: wat is geschiedenis, de tijdbalk (eerst/later, eeuw), wonen en
// school vroeger, en de eerste echte periode: ridders en kastelen.

const stepEmojis = ["⏳", "📜", "🏠", "🏰", "🏆"];

const chapters = [
  { letter: "A", title: "Vroeger en nu", emoji: "⏳", from: 0, to: 0 },
  { letter: "B", title: "De tijdbalk", emoji: "📜", from: 1, to: 1 },
  { letter: "C", title: "Leven en school vroeger", emoji: "🏠", from: 2, to: 2 },
  { letter: "D", title: "Ridders en kastelen", emoji: "🏰", from: 3, to: 3 },
  { letter: "E", title: "Eindronde", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Vroeger en nu ─────────────────────────────────────
  {
    title: "Vroeger en nu — wat is geschiedenis?",
    explanation:
      "**Geschiedenis** is alles wat **vroeger** is gebeurd.\n\nVroeger kan van alles zijn:\n• Gisteren (een beetje vroeger)\n• Toen je opa en oma kind waren (best lang geleden)\n• De tijd van de ridders (heel lang geleden)\n\nHoe weten we wat er vroeger gebeurde? Door **sporen** uit het verleden:\n• oude **foto's** en brieven\n• oude **spullen** en gebouwen\n• **verhalen** van mensen die het meemaakten\n\nWie geschiedenis bestudeert, is een soort speurneus in de tijd!",
    checks: [
      {
        q: "Wat is **geschiedenis**?",
        options: ["alles wat vroeger is gebeurd", "alles wat morgen gebeurt", "alleen verhaaltjes die verzonnen zijn", "alleen wat in de krant staat"],
        answer: 0,
        wrongHints: [null, "Morgen moet nog komen — is dat vroeger?", "Geschiedenis gaat over dingen die écht gebeurd zijn.", "De krant is maar één van de plekken waar je iets terugvindt."],
        uitlegPad: {
          stappen: [{ titel: "Vroeger", tekst: "Geschiedenis = alles wat **vroeger echt gebeurd is**. Van gisteren tot duizenden jaren geleden." }],
          niveaus: { basis: "Geschiedenis gaat over vroeger.", simpeler: "Vroeger gebeurd = geschiedenis.", nogSimpeler: "vroeger" },
        },
      },
      {
        q: "Hoe kunnen we weten hoe mensen **honderd jaar geleden** leefden?",
        options: ["door oude foto's, spullen en verhalen", "dat kan niemand weten", "door heel hard na te denken", "door naar de toekomst te kijken"],
        answer: 0,
        wrongHints: [null, "Jawel — er zijn dingen uit die tijd bewaard gebleven.", "Alleen denken is niet genoeg — je hebt bewijs nodig.", "De toekomst vertelt niets over vroeger."],
        uitlegPad: {
          stappen: [{ titel: "Sporen uit het verleden", tekst: "Oude **foto's**, **spullen**, **gebouwen** en **verhalen** vertellen ons hoe het vroeger was. Dat zijn sporen uit het verleden." }],
          woorden: [{ woord: "verleden", uitleg: "Een ander woord voor vroeger — de tijd die voorbij is." }],
          niveaus: { basis: "Oude foto's en spullen vertellen over vroeger.", simpeler: "We kijken naar wat bewaard is gebleven.", nogSimpeler: "oude foto's en spullen" },
        },
      },
      {
        q: "Wat bestond er **nog niet** toen jouw opa en oma kind waren?",
        options: ["mobiele telefoons met apps", "fietsen", "boeken", "treinen"],
        answer: 0,
        wrongHints: [null, "Fietsen bestaan al meer dan honderd jaar.", "Boeken bestaan al honderden jaren.", "Treinen rijden al heel lang door Nederland."],
        uitlegPad: {
          stappen: [{ titel: "Nieuw en oud", tekst: "Mobiele telefoons met apps bestaan pas kort. Fietsen, boeken en treinen zijn veel ouder — die kenden opa en oma als kind al." }],
          niveaus: { basis: "Mobieltjes zijn nog vrij nieuw.", simpeler: "Wat is het nieuwste ding van de vier?", nogSimpeler: "mobiele telefoons" },
        },
      },
      {
        q: "Welk ding is een **spoor uit het verleden**?",
        options: ["een oude foto van je overgrootmoeder", "een boodschappenlijstje voor morgen", "een droom over later", "het weerbericht van volgende week"],
        answer: 0,
        wrongHints: [null, "Morgen is nog niet gebeurd.", "Een droom over later gaat over de toekomst.", "Volgende week moet nog komen."],
        uitlegPad: {
          stappen: [{ titel: "Uit het verleden", tekst: "Een **oude foto** komt uit vroeger tijd — een echt spoor uit het verleden. De rest gaat over de toekomst." }],
          niveaus: { basis: "Een oude foto komt uit het verleden.", simpeler: "Wat is er al lang geleden gemaakt?", nogSimpeler: "de oude foto" },
        },
      },
    ],
  },

  // ─── B. Tijdbalk ──────────────────────────────────────────
  {
    title: "De tijdbalk — de tijd op een rijtje",
    explanation:
      "Een **tijdbalk** is een lange lijn waarop je de tijd tekent.\n\n• **Links** staat wat het langst geleden is.\n• **Rechts** staat wat het kortst geleden is — en helemaal rechts: **nu**.\n\nZo zie je in één oogopslag wat eerst kwam en wat later.\n\nHandig woord: een **eeuw** = **100 jaar**. Jouw overgrootouders werden ongeveer een eeuw geleden geboren!",
    checks: [
      {
        q: "Waar staat op een tijdbalk wat het **langst geleden** is?",
        options: ["helemaal links", "helemaal rechts", "in het midden", "dat wisselt steeds"],
        answer: 0,
        wrongHints: [null, "Daar staat juist 'nu'.", "Het midden zit tussen oud en nieuw in.", "Nee, er is een vaste afspraak."],
        uitlegPad: {
          stappen: [{ titel: "Van links naar rechts", tekst: "Een tijdbalk lees je als een zin: van **links** (lang geleden) naar **rechts** (nu)." }],
          niveaus: { basis: "Links = lang geleden, rechts = nu.", simpeler: "Oud staat vooraan de lijn.", nogSimpeler: "links" },
        },
      },
      {
        q: "Hoeveel jaar is een **eeuw**?",
        options: ["100 jaar", "10 jaar", "1000 jaar", "50 jaar"],
        answer: 0,
        wrongHints: [null, "Dat is korter — dat heet een decennium.", "Dat is véél langer — dat heet een millennium.", "Dat is een halve eeuw."],
        uitlegPad: {
          stappen: [{ titel: "Eeuw = 100", tekst: "Een **eeuw** duurt **100 jaar**. Van 1900 tot 2000 is precies één eeuw." }],
          woorden: [{ woord: "eeuw", uitleg: "Een tijd van honderd jaar." }],
          niveaus: { basis: "Een eeuw is 100 jaar.", simpeler: "Eeuw = honderd.", nogSimpeler: "100" },
        },
      },
      {
        q: "Zet in de goede volgorde, van **lang geleden** naar **nu**:",
        options: ["ridders → opa als kind → jij nu", "jij nu → ridders → opa als kind", "opa als kind → jij nu → ridders", "ridders → jij nu → opa als kind"],
        answer: 0,
        wrongHints: [null, "Jij leeft nú — dat hoort achteraan.", "De ridders leefden het langst geleden — die horen vooraan.", "Was opa eerder een kind dan jij, of later?"],
        uitlegPad: {
          stappen: [{ titel: "Op de tijdbalk", tekst: "Ridders: honderden jaren geleden. Opa als kind: tientallen jaren geleden. Jij: **nu**. Dus: ridders → opa → jij." }],
          niveaus: { basis: "Ridders eerst, dan opa, dan jij.", simpeler: "Wie leefde het langst geleden?", nogSimpeler: "ridders eerst" },
        },
      },
      {
        q: "Wat gebeurde **eerder**: de tijd van de ridders of de uitvinding van de auto?",
        options: ["de tijd van de ridders", "de uitvinding van de auto", "dat was tegelijk", "dat weet niemand"],
        answer: 0,
        wrongHints: [null, "Reden ridders in auto's? Nee toch — wat zegt dat?", "Er zitten honderden jaren tussen.", "Jawel — dit weten we heel goed."],
        uitlegPad: {
          stappen: [{ titel: "Even rekenen", tekst: "Ridders leefden in de **middeleeuwen**, honderden jaren geleden. De auto is ruim honderd jaar oud. De ridders waren dus véél eerder." }],
          woorden: [{ woord: "middeleeuwen", uitleg: "De tijd van ridders en kastelen, ongeveer 500 tot 1500." }],
          niveaus: { basis: "Ridders waren er lang vóór de auto.", simpeler: "Ridders reden paard, geen auto!", nogSimpeler: "de ridders" },
        },
      },
    ],
  },

  // ─── C. Leven vroeger ─────────────────────────────────────
  {
    title: "Leven en school vroeger — geen licht-knopje!",
    explanation:
      "Zo'n **honderd jaar geleden** was het leven heel anders:\n\n• Veel huizen hadden **geen elektriciteit**: 's avonds brandde een olielamp of kaars.\n• **Water** kwam vaak uit een pomp, niet uit de kraan.\n• Kleren werden met de **hand gewassen**.\n\nEn op school?\n• Kinderen schreven op een **lei** met een **griffel** (een soort krijtpennetje op een zwart plankje).\n• Klassen waren groot en de meester of juf was vaak streng.\n• Veel kinderen moesten na school **meehelpen** thuis of op het land.",
    checks: [
      {
        q: "Waarop schreven kinderen ongeveer honderd jaar geleden op school?",
        options: ["op een lei met een griffel", "op een tablet", "op een laptop", "op een whiteboard met stift"],
        answer: 0,
        wrongHints: [null, "Bestond er toen al een tablet?", "Bestond er toen al een laptop?", "Whiteboards kwamen veel later."],
        uitlegPad: {
          stappen: [{ titel: "Lei en griffel", tekst: "Een **lei** is een zwart plankje, een **griffel** een schrijfstokje. Schrijven, uitvegen, opnieuw — een soort ouderwetse tablet zonder stroom!" }],
          niveaus: { basis: "Vroeger schreef je op een lei met een griffel.", simpeler: "Een zwart plankje + schrijfstokje.", nogSimpeler: "lei en griffel" },
        },
      },
      {
        q: "Wat hadden veel huizen honderd jaar geleden **niet**?",
        options: ["elektriciteit", "een dak", "ramen", "een deur"],
        answer: 0,
        wrongHints: [null, "Zonder dak word je nat — dat had elk huis.", "Ramen bestaan al heel lang.", "Deuren bestaan al heel lang."],
        uitlegPad: {
          stappen: [{ titel: "Zonder stroom", tekst: "Veel huizen hadden **geen elektriciteit**. Dus: geen lampen aan de muur, geen koelkast, geen televisie. 's Avonds brandde een olielamp of kaars." }],
          niveaus: { basis: "Vroeger was er vaak geen elektriciteit.", simpeler: "Geen stroom = geen lampje aanknippen.", nogSimpeler: "elektriciteit" },
        },
      },
      {
        q: "Hoe kwamen veel mensen vroeger aan **water**?",
        options: ["uit een pomp op straat of op het erf", "uit flesjes van de winkel", "uit de regenpijp drinken", "water bestond nog niet"],
        answer: 0,
        wrongHints: [null, "Flesjes water in de winkel zijn juist heel nieuw.", "Regenwater dronk je niet zomaar.", "Water bestaat natuurlijk al altijd!"],
        uitlegPad: {
          stappen: [{ titel: "De pomp", tekst: "Zonder kraan haalde je water bij een **pomp** — op het erf of midden in de straat. Emmer mee, pompen maar!" }],
          niveaus: { basis: "Water haalde je bij de pomp.", simpeler: "Niet uit de kraan, maar uit de pomp.", nogSimpeler: "uit een pomp" },
        },
      },
      {
        q: "Wat deden veel kinderen vroeger **na school**?",
        options: ["thuis of op het land meehelpen", "gamen", "tv kijken", "naar zwemles met de bus"],
        answer: 0,
        wrongHints: [null, "Bestonden er toen al games?", "Bestond er toen al tv?", "Denk aan wat een gezin toen nodig had."],
        uitlegPad: {
          stappen: [{ titel: "Meehelpen", tekst: "Veel gezinnen hadden de hulp van kinderen nodig: **op het land**, in de winkel of in huis. Spelen kwam daarna pas." }],
          niveaus: { basis: "Kinderen hielpen veel mee.", simpeler: "Na school: eerst helpen, dan spelen.", nogSimpeler: "meehelpen" },
        },
      },
    ],
  },

  // ─── D. Ridders en kastelen ───────────────────────────────
  {
    title: "Ridders en kastelen — de middeleeuwen",
    explanation:
      "Heel lang geleden — in de **middeleeuwen** — leefden de ridders.\n\n**Ridders**:\n• waren soldaten te **paard**\n• droegen een **harnas**: een pak van metaal dat hen beschermde\n• vochten met zwaard, schild en lans\n\n**Kastelen**:\n• waren gebouwd van **steen**, met dikke, hoge muren\n• hadden vaak een **gracht** (water rondom) en een **ophaalbrug**\n• beschermden de mensen die er woonden tegen vijanden\n\nEen kasteel was dus eigenlijk één groot veilig fort om in te wonen.",
    checks: [
      {
        q: "Wat is een **harnas**?",
        options: ["een metalen pak dat de ridder beschermt", "het paard van de ridder", "het zwaard van de ridder", "de vlag op het kasteel"],
        answer: 0,
        wrongHints: [null, "Het paard heeft een eigen naam — dit trok de ridder áán.", "Dat is een wapen, geen kleding.", "Die wappert op de toren."],
        uitlegPad: {
          stappen: [{ titel: "IJzeren pak", tekst: "Een **harnas** is een pak van metalen platen. Het beschermde de ridder tegen zwaarden en pijlen — als een superstevige jas." }],
          niveaus: { basis: "Een harnas is een beschermend metalen pak.", simpeler: "Een ijzeren pak voor de ridder.", nogSimpeler: "metalen pak" },
        },
      },
      {
        q: "Waarom hadden kastelen **dikke muren**?",
        options: ["om de mensen binnen te beschermen tegen vijanden", "omdat dat mooier stond", "om de warmte binnen te houden", "omdat dunne stenen niet bestonden"],
        answer: 0,
        wrongHints: [null, "Mooi was meegenomen — maar er was een belangrijkere reden.", "Warm werd het er nooit echt.", "Dunne muren konden ze best bouwen — maar wilden ze dat?"],
        uitlegPad: {
          stappen: [{ titel: "Een veilig fort", tekst: "Een kasteel was een **verdedigingsgebouw**. Dikke, hoge muren hielden vijanden buiten. Hoe dikker de muur, hoe veiliger de mensen erachter." }],
          niveaus: { basis: "Dikke muren = bescherming tegen vijanden.", simpeler: "Dikke muur, vijand komt er niet door.", nogSimpeler: "bescherming" },
        },
      },
      {
        q: "Wat is een **gracht** bij een kasteel?",
        options: ["water rondom het kasteel", "de grote eetzaal", "de hoogste toren", "de stal voor de paarden"],
        answer: 0,
        wrongHints: [null, "Daar werd gegeten — dat is binnen.", "Die stak de lucht in — een gracht ligt juist laag.", "Daar stonden de paarden."],
        uitlegPad: {
          stappen: [{ titel: "Water als bescherming", tekst: "Een **gracht** is een brede sloot vol water rondom het kasteel. Vijanden konden er niet zomaar overheen — alleen via de **ophaalbrug**, en die kon omhoog!" }],
          niveaus: { basis: "Een gracht is water om het kasteel.", simpeler: "Een sloot rondom, tegen vijanden.", nogSimpeler: "water rondom" },
        },
      },
      {
        q: "Waarop reed een ridder?",
        options: ["op een paard", "op een fiets", "in een auto", "op een olifant"],
        answer: 0,
        wrongHints: [null, "Bestond de fiets al in de middeleeuwen?", "Bestond de auto al in de middeleeuwen?", "Die leefden hier niet."],
        uitlegPad: {
          stappen: [{ titel: "Ridder te paard", tekst: "Ridders reden op een **paard** — sterk genoeg om een man in harnas te dragen. Fietsen en auto's werden pas eeuwen later uitgevonden." }],
          niveaus: { basis: "Een ridder reed op een paard.", simpeler: "Klip klop — een paard!", nogSimpeler: "paard" },
        },
      },
    ],
  },

  // ─── E. Eindronde ─────────────────────────────────────────
  {
    title: "Eindronde — jij bent nu een tijd-speurneus!",
    explanation:
      "Laatste ronde! Alles komt nog één keer voorbij:\n\n• Geschiedenis = wat vroeger echt gebeurd is\n• Tijdbalk: links = lang geleden, rechts = nu; een eeuw = 100 jaar\n• Vroeger: lei en griffel, geen stroom, water uit de pomp\n• Middeleeuwen: ridders, harnassen, kastelen met grachten\n\nLaat maar zien wat je allemaal weet!",
    checks: [
      {
        q: "Wat hoort bij de **middeleeuwen**?",
        options: ["ridders en kastelen", "vliegtuigen", "computers", "treinen"],
        answer: 0,
        wrongHints: [null, "Die vlogen pas honderden jaren later.", "Die kwamen nog veel later.", "Die reden pas eeuwen na de ridders."],
        uitlegPad: {
          stappen: [{ titel: "Terugdenken", tekst: "De middeleeuwen = de tijd van **ridders en kastelen**. Vliegtuigen, computers en treinen bestonden toen nog lang niet." }],
          niveaus: { basis: "Middeleeuwen = ridders en kastelen.", simpeler: "Denk aan harnassen en ophaalbruggen.", nogSimpeler: "ridders" },
        },
      },
      {
        q: "Van 1925 tot 2025 is precies…",
        options: ["één eeuw (100 jaar)", "tien jaar", "duizend jaar", "een maand"],
        answer: 0,
        wrongHints: [null, "Reken maar: 2025 min 1925.", "Reken maar: 2025 min 1925.", "Dat is véél te kort."],
        uitlegPad: {
          stappen: [{ titel: "Rekenen met jaren", tekst: "2025 − 1925 = **100 jaar** = één **eeuw**." }],
          niveaus: { basis: "100 jaar = een eeuw.", simpeler: "2025 min 1925 = 100.", nogSimpeler: "een eeuw" },
        },
      },
      {
        q: "Welke bron vertelt het **meest** over hoe jouw overgrootouders leefden?",
        options: ["oude foto's en verhalen van de familie", "een striptekening over de toekomst", "het journaal van vandaag", "een spelletjes-app"],
        answer: 0,
        wrongHints: [null, "De toekomst zegt niets over vroeger.", "Vandaag is niet de tijd van je overgrootouders.", "Wat kan een spelletje jou over vroeger vertellen?"],
        uitlegPad: {
          stappen: [{ titel: "Bronnen", tekst: "**Oude foto's** en **familieverhalen** komen echt uit die tijd — dat zijn de beste sporen uit het verleden." }],
          woorden: [{ woord: "bron", uitleg: "Iets waaruit je informatie haalt: een foto, brief, verhaal of voorwerp." }],
          niveaus: { basis: "Oude foto's en verhalen zijn echte bronnen.", simpeler: "Wat komt écht uit die oude tijd?", nogSimpeler: "oude foto's" },
        },
      },
      {
        q: "Wat kwam **het eerst**?",
        options: ["kastelen met ridders", "de eerste auto", "de eerste computer", "de eerste mobiele telefoon"],
        answer: 0,
        wrongHints: [null, "De auto is ruim honderd jaar oud — ridders zijn veel ouder.", "Computers zijn nog jonger dan auto's.", "Mobieltjes zijn het nieuwst van alles."],
        uitlegPad: {
          stappen: [{ titel: "Op de tijdbalk", tekst: "Kastelen: middeleeuwen, honderden jaren geleden. Auto: ruim 100 jaar. Computer: ~80 jaar. Mobieltje: nog nieuwer. **Kastelen** staan het meest links op de tijdbalk." }],
          niveaus: { basis: "Kastelen zijn het oudst van dit rijtje.", simpeler: "Wat is het állerlangst geleden?", nogSimpeler: "kastelen" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const geschiedenisVroegerEnNuG5 = {
  id: "geschiedenis-vroeger-en-nu-g5",
  title: "Geschiedenis — vroeger en nu (groep 5)",
  emoji: "⏳",
  level: "groep5-6",
  subject: "geschiedenis",
  referentieNiveau: "po-1F",
  sloThema: "Geschiedenis — tijdsbesef: vroeger/nu, tijdbalk, leven vroeger, middeleeuwen (groep 5)",
  prerequisites: [],
  intro:
    "Je eerste geschiedenisles: wat is vroeger, hoe werkt een tijdbalk (en wat is een eeuw?), hoe leefden kinderen honderd jaar geleden — en natuurlijk: ridders en kastelen. Voor groep 5. ~15 min.",
  triggerKeywords: [
    "geschiedenis", "vroeger en nu", "tijdbalk", "eeuw", "middeleeuwen",
    "ridders", "kastelen", "groep 5", "vroeger",
  ],
  chapters,
  steps,
};

export default geschiedenisVroegerEnNuG5;
