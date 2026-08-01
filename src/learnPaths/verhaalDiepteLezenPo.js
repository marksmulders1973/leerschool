// Leerpad: Verhalen en gedichten dieper lezen — literaire vragen op de
// Doorstroomtoets. Kinderen leren: gevoelens en bedoelingen afleiden uit
// gedrag ("tussen de regels lezen"), perspectief herkennen (ik- vs
// hij/zij-verhaal), beeldspraak begrijpen en de sfeer van een tekst benoemen.
//
// Alle fragmenten en het gedicht zijn 100% eigen werk. 4 stappen, 17 checks.

const stepEmojis = ["🕵️", "🤿", "🌙", "🏆"];

const chapters = [
  { letter: "A", title: "Tussen de regels lezen", emoji: "🕵️", from: 0, to: 0 },
  { letter: "B", title: "Door wiens ogen?", emoji: "🤿", from: 1, to: 1 },
  { letter: "C", title: "Beeldspraak en sfeer", emoji: "🌙", from: 2, to: 2 },
  { letter: "D", title: "Doorstroomtoets-oefening", emoji: "🏆", from: 3, to: 3 },
];

// ── Fragment 1 voor stap 2: ik-perspectief (~150 woorden) ───────────
const tekstDuik = `**De eerste duik**

Ik sta boven op de hoge duikplank. Mijn tenen krullen om de rand. Beneden lijkt het water wel kilometers ver weg. Het bord bij de trap zei: drie meter. Het voelt als dertig.

"Kom op, Noa!" roept mijn broer Milan vanaf de kant. Hij hangt lui over de rand van het bad, alsof het niks is. Voor hem is het ook niks: hij springt hier al jaren vanaf.

Mijn handen zijn nat, en dat komt niet door het zwembad. Achter me staat een jongetje te zuchten. "Schiet eens op," moppert hij. Ik doe een stapje naar voren. Dan nog één.

"Je hoeft niet, hoor!" roept Milan nu. Maar dat is niet waar. Ik moet wél. Niet van hem, niet van de badmeester — van mezelf. Ik heb het de hele week aan iedereen verteld: vandaag spring ik.

Ik haal diep adem, knijp mijn ogen dicht en zet af.`;

// ── Gedicht voor stap 3: eigen werk, 6 regels ───────────────────────
const gedichtAvondtuin = `**Avond in de tuin**

De zon zakt als een gloeiende munt
langzaam in de spaarpot van de nacht.
De schommel hangt te slapen aan zijn touwen,
het gras houdt zijn adem in en wacht.
Ergens gaapt een deur, dan wordt het stil.
De tuin trekt een deken van schaduw over zich heen.`;

// ── Fragment 2 voor stap 4: hij/zij-perspectief (~200 woorden) ──────
const tekstCadeau = `**Het cadeau voor juf Karin**

Juf Karin ging na dit schooljaar verhuizen naar de andere kant van het land. De klas had wekenlang gespaard voor een afscheidscadeau: een vaas met daarop de namen van alle kinderen.

Op de laatste schooldag mocht Ties de vaas naar school brengen. Hij liep extra langzaam en hield de doos met twee handen vast, alsof er een baby'tje in zat. Bij het hek stond Fleur al te zwaaien. "Voorzichtig!" riep ze, terwijl ze op en neer sprong.

In de klas zette Ties de doos op tafel. Zijn vingers trilden toen hij het deksel optilde. Iedereen boog naar voren. Toen werd het doodstil. Onder in de doos lagen scherven.

Fleur sloeg haar hand voor haar mond. Ties staarde naar de grond. Zijn wangen gloeiden als kacheltjes.

Juf Karin kwam erbij. Ze keek in de doos, pakte toen één scherf en hield hem omhoog. Op het stukje stond precies één naam: die van Ties. "Weet je," zei ze zacht, "ik krijg zo tweeëndertig cadeautjes in plaats van één. Ik neem alle scherven mee, van iedereen één."

Toen Ties opkeek, lachte de juf naar hem.`;

const steps = [
  // ── Stap 1 ──────────────────────────────────────────────────────
  {
    title: "Tussen de regels lezen",
    explanation: `Lees deze zin: *"Rik zei niets. Hij sloeg de deur keihard achter zich dicht."*

Nergens staat hoe Rik zich voelt. En tóch weet jij het meteen. Hoe kan dat? Omdat schrijvers gevoelens vaak niet **opschrijven**, maar **laten zien**. Dat heet **tussen de regels lezen**: je gebruikt wat een personage *doet* en *zegt* om te snappen wat het *voelt*.

Op de Doorstroomtoets krijg je hier vaak vragen over: *"Hoe voelt ... zich in regel 12?"* — terwijl er in regel 12 geen enkel gevoels-woord staat. Gebruik dan deze strategie:

1. **Zoek het gedrag**: wat doet het personage met zijn lijf, zijn stem, zijn spullen? (deur dichtslaan, friemelen, fluisteren, wegkijken...)
2. **Vergelijk met jezelf**: wanneer doe jíj zoiets? Wat voel je dan?
3. **Kies het gevoels-woord** dat daarbij past: boos, bang, zenuwachtig, trots, opgelucht...

Let op één valkuil: haal het **gevoel** niet door de war met de **gebeurtenis**. Dat het licht uitvalt, is iets dat *gebeurt*. Wat een personage daarbij *voelt*, is iets anders — en daar vraagt de toets naar.

Oefen maar met de zinnen hieronder. Bij elke zin geldt: het gevoel staat er niet, maar het staat er wél. Tussen de regels.`,
    checks: [
      {
        q: "*\"Saar smeet haar tas in de hoek, stampte de trap op en sloeg haar slaapkamerdeur dicht.\"* — Hoe voelt Saar zich, denk je?",
        options: ["Boos", "Vrolijk", "Verlegen", "Moe"],
        answer: 0,
        evidence: "Saar smeet haar tas in de hoek, stampte de trap op en sloeg haar slaapkamerdeur dicht.",
        wrongHints: [
          null,
          "Let op de werkwoorden: smijten, stampen, dichtslaan. Doe jij dat na een fijne dag?",
          null,
          "Iemand die alleen moe is, ploft rustig op de bank. Wat zeggen smijten en stampen over Saar van binnen?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het gedrag", tekst: "Er staat geen gevoels-woord in de zin. Kijk dus naar wat Saar dóét: ze smijt, stampt en slaat met de deur. Drie keer wild en hard gedrag." },
            { titel: "Vergelijk met jezelf", tekst: "Wanneer smijt jij met je tas en knal je een deur dicht? Niet als je blij bent, niet als je moe bent — maar als er iets flink is misgegaan." },
            { titel: "Kies het gevoels-woord", tekst: "Wild, hard, met veel lawaai — dat gedrag past bij één gevoel uit de lijst. Controleer: past dat gevoel bij álle drie de dingen die Saar doet? Dan zit je goed." },
          ],
          woorden: [
            { woord: "tussen de regels lezen", uitleg: "Iets begrijpen dat er niet letterlijk staat, door goed te kijken naar wat er wél staat." },
            { woord: "gedrag", uitleg: "Wat iemand doet: lopen, gooien, zuchten, lachen. Gedrag verraadt vaak een gevoel." },
          ],
          theorie: "**Laten zien in plaats van opschrijven**\n\nEen schrijver kan twee dingen doen:\n\n- Opschrijven: 'Saar was boos.' (saai, en je vergeet het meteen)\n- Laten zien: 'Saar smeet haar tas in de hoek.' (je zíét het voor je)\n\nGoede schrijvers kiezen bijna altijd voor laten zien. Daarom moet jij als lezer een klein beetje detective spelen: het gedrag is het spoor, het gevoel is de oplossing.\n\nHandige spoortjes: wat doet iemand met **deuren en spullen** (hard = heftig gevoel), met zijn **stem** (schreeuwen, fluisteren, trillen) en met zijn **ogen** (wegkijken, stralen, knijpen)?",
          voorbeelden: [
            { type: "laten-zien", tekst: "'Jesse kwam binnen met een rapport in zijn hand. Hij hield het omhoog en draaide een rondje door de kamer.' → er staat geen gevoels-woord, maar je weet: Jesse is hartstikke trots en blij." },
            { type: "laten-zien", tekst: "'Oma keek lang naar de oude foto. Toen veegde ze snel iets van haar wang.' → verdriet, zonder dat het woord ergens staat." },
          ],
          basiskennis: [
            { onderwerp: "Gedrag = spoor", uitleg: "Staat er geen gevoels-woord? Zoek dan wat het personage doet en zegt — daar zit het gevoel in verstopt." },
          ],
          niveaus: {
            basis: "Er staat geen gevoels-woord in de zin. Kijk naar wat Saar dóét: smijten, stampen, een deur dichtslaan. Bij welk gevoel hoort dat gedrag?",
            simpeler: "Stel je voor dat jíj je tas in de hoek smijt en de deur keihard dichtknalt. Hoe voel jij je op zo'n moment?",
            nogSimpeler: "Denk aan de laatste keer dat er iets gebeurde waar je flink van baalde — wat deed jij toen met deuren en spullen?",
          },
        },
      },
      {
        q: "*\"Op het podium friemelde Ravi aan zijn mouw. Hij keek naar zijn schoenen en zijn stem was bijna niet te horen.\"* — Hoe voelt Ravi zich?",
        options: ["Zenuwachtig", "Woedend", "Trots", "Uitgelaten"],
        answer: 0,
        evidence: "Op het podium friemelde Ravi aan zijn mouw. Hij keek naar zijn schoenen en zijn stem was bijna niet te horen.",
        wrongHints: [
          null,
          "Iemand die woedend is, praat meestal juist hard. Wat zegt zo'n piepklein stemmetje over Ravi?",
          "Iemand die trots is, staat rechtop en kijkt de zaal in. Waar kijkt Ravi naar?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Verzamel de spoortjes", tekst: "Drie stukjes gedrag: friemelen aan zijn mouw, naar zijn schoenen kijken, heel zachtjes praten. Elk spoortje apart zegt al iets — samen zeggen ze het heel duidelijk." },
            { titel: "Denk aan de plek", tekst: "Ravi staat op een podium. Iedereen kijkt naar hem. Dat is voor veel mensen een spannend moment — en zijn lijf laat dat zien." },
            { titel: "Controleer je antwoord", tekst: "Past je gevoels-woord bij álle drie de spoortjes? Friemelen ✓, wegkijken ✓, zacht praten ✓. Dan heb je het juiste gevoel te pakken." },
          ],
          woorden: [
            { woord: "friemelen", uitleg: "Zenuwachtig met je vingers ergens aan plukken of draaien, vaak zonder dat je het doorhebt." },
            { woord: "podium", uitleg: "De verhoging waarop je staat bij een optreden of spreekbeurt — iedereen kan je zien." },
          ],
          theorie: "**Het lijf praat mee**\n\nGevoelens zie je vaak aan het líjf van een personage:\n\n| Gedrag | Past vaak bij |\n|---|---|\n| friemelen, wiebelen, nagelbijten | spanning |\n| naar de grond kijken | spanning of schaamte |\n| stralen, rondje draaien, armen omhoog | blijdschap of trots |\n| stampen, smijten, ballen van vuisten | boosheid |\n| wegkruipen, klein maken | angst |\n\nJe hoeft dit rijtje niet te leren. Vraag je gewoon af: *wanneer doet míjn lijf dit?* Dan voel je het antwoord vanzelf.",
          voorbeelden: [
            { type: "lijf-taal", tekst: "'Voor de wedstrijd liep Lente wel tien keer naar de wc.' → geen gevoels-woord, toch weet je: ze vindt het spannend." },
          ],
          basiskennis: [
            { onderwerp: "Meer spoortjes = zekerder", uitleg: "Eén stukje gedrag kan toeval zijn. Zoek twee of drie spoortjes die naar hetzelfde gevoel wijzen — dan weet je het zeker." },
          ],
          niveaus: {
            basis: "Friemelen, naar je schoenen kijken en heel zachtjes praten — wanneer doen mensen die drie dingen tegelijk?",
            simpeler: "Stel je voor: jij staat op een podium en de hele zaal kijkt naar jou. Wat doet je lijf op zo'n moment?",
            nogSimpeler: "Denk aan een spreekbeurt die je heel spannend vond — wat deden je handen en je stem toen?",
          },
        },
      },
      {
        q: "*\"'Dat lukt jou toch nooit,' zei haar zus lachend.\"* — Welk woord verandert de betekenis van wat de zus zegt?",
        options: [
          "'Lachend' — ze zegt het als grap, niet om te kwetsen",
          "'Nooit' — het is een absolute uitspraak",
          "'Toch' — dat klinkt zeker",
          "'Jou' — ze bedoelt het persoonlijk",
        ],
        answer: 0,
        wrongHints: [
          null,
          "'Nooit' zegt iets over de kans — maar 'lachend' bepaalt de toon. Wat voelt anders als iemand lacht bij wat ze zegt?",
          null,
          "Wie ze aanspreekt zegt iets over het doelwit, niet over de bedoeling. Kijk hoe het gezegd wordt.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Hoe wordt het gezegd?", tekst: "'Lachend' is een manier-woord: het vertelt hoe de zin wordt uitgesproken. Lachend = vrolijk, niet kwaad." },
            { titel: "Vergelijk: zacht vs hard", tekst: "Zonder 'lachend': 'dat lukt jou toch nooit' klinkt gemeen. Mét 'lachend' klinkt het als een plagend grapje tussen zussen." },
            { titel: "Conclusie", tekst: "Het woordje 'lachend' verandert de sfeer van de zin — van aanval naar pesterij die niet echt kwetst." },
          ],
          niveaus: {
            basis: "Hoe kun je iets zeggen dat gemeen lijkt maar eigenlijk niet zo bedoeld is? Wat verandert het als iemand lacht?",
            simpeler: "Stel je voor: je zus zegt datzelfde terwijl ze heel serieus kijkt. Voelt dat anders dan wanneer ze lacht?",
            nogSimpeler: "Als iemand lacht terwijl ze iets zegt, is het dan een echte aanval of meer een grap?",
          },
        },
      },
      {
        q: "*\"Lotte keek naar haar schrift en begon opnieuw. Ze gooide het papier in de prullenbak.\"* — Hoe voelt Lotte zich?",
        options: ["Gefrustreerd", "Blij", "Slaperig", "Verlegen"],
        answer: 0,
        wrongHints: [
          null,
          "Iemand die blij is, gooit dingen niet in de prullenbak. Wat zeggen opnieuw beginnen en weggooien over Lotte?",
          null,
          "Verlegen gedrag zie je in gezelschap — Lotte is hier in haar eentje aan het werk. Kijk naar haar acties.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het gedrag", tekst: "Lotte begint opnieuw én gooit haar papier weg. Dat zijn twee stukjes gedrag die samen iets vertellen." },
            { titel: "Vergelijk met jezelf", tekst: "Wanneer begin jij opnieuw en gooi je je werk weg? Als het niet goed genoeg is, en je er baal van." },
            { titel: "Kies het gevoels-woord", tekst: "Niet tevreden, steeds opnieuw — dat past bij frustration: je wil iets maar het lukt niet." },
          ],
          niveaus: {
            basis: "Twee keer opnieuw beginnen én weggooien — wanneer doe jij dat bij je schoolwerk?",
            simpeler: "Als iets niet lukt en je gooit het weg — voel je je dan blij of juist niet tevreden?",
            nogSimpeler: "Hoe voelt het als je iets steeds opnieuw moet doen en het lukt maar niet?",
          },
        },
      },
      {
        q: "In een verhaal staat nergens hoe een personage zich voelt. Hoe kom je er dan tóch achter?",
        options: [
          "Kijk goed naar wat het personage doet en zegt",
          "Sla dat stuk over — je kunt het niet weten",
          "Kies het gevoel dat je zelf vandaag hebt",
          "Tel hoe vaak de naam van het personage voorkomt",
        ],
        answer: 0,
        evidence: "Rik zei niets. Hij sloeg de deur keihard achter zich dicht.",
        wrongHints: [
          null,
          "Toetsvragen gaan juist vaak over gevoelens die er níét letterlijk staan — er is altijd een spoor. Waar zou dat spoor zitten?",
          "Gaat de vraag over jouw gevoel of over dat van het personage? Waar vind je aanwijzingen over het personage?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Denk terug aan Rik", tekst: "'Rik zei niets. Hij sloeg de deur keihard achter zich dicht.' Er stond geen gevoels-woord — en toch wist je precies hoe Rik zich voelde. Hoe wist je dat?" },
            { titel: "Het spoor zit in de zin", tekst: "Je gebruikte wat Rik dééd. Zijn gedrag was het spoor. De schrijver heeft dat spoor er express in gestopt, zodat jij het gevoel zelf kunt ontdekken." },
            { titel: "Zo werkt het altijd", tekst: "Bij elke gevoels-vraag zonder gevoels-woord: zoek het gedrag, vergelijk met jezelf, kies het passende woord. Die drie stappen werken bij elk verhaal." },
          ],
          woorden: [
            { woord: "personage", uitleg: "Iemand die in een verhaal leeft: de hoofdpersoon, een vriend, een juf. Verzonnen door de schrijver." },
            { woord: "aanwijzing", uitleg: "Een spoor in de tekst dat je helpt iets te ontdekken dat er niet letterlijk staat." },
          ],
          theorie: "**Detective-lezen in drie stappen**\n\n1. **Zoek het gedrag** — wat doet en zegt het personage? (lijf, stem, spullen)\n2. **Vergelijk met jezelf** — wanneer doe jij zoiets?\n3. **Kies het gevoels-woord** — en controleer of het bij ál het gedrag past.\n\nDit werkt omdat schrijvers gevoelens liever láten zien dan opschrijven. De toets test of jij die verstopte gevoelens kunt vinden. Je eigen humeur doet er niet toe — het gaat om de sporen in de tékst.",
          voorbeelden: [
            { type: "drie-stappen", tekst: "'Bo schoof haar bord weg en staarde uit het raam.' → gedrag: niet eten, wegstaren. Vergelijk: wanneer heb jij geen trek en staar je weg? → er zit Bo iets dwars." },
          ],
          basiskennis: [
            { onderwerp: "Altijd een spoor", uitleg: "Als de toets naar een gevoel vraagt, heeft de schrijver er een spoor voor achtergelaten. Niet gokken — zoeken." },
          ],
          niveaus: {
            basis: "Denk aan Rik en de deur: er stond nérgens een gevoels-woord, en tóch wist je hoe hij zich voelde. Hoe kwam je daarachter?",
            simpeler: "Een schrijver láát gevoelens zien in plaats van ze op te schrijven. Waar kun je als lezer dan naar speuren?",
            nogSimpeler: "Denk terug aan Saar en haar tas: waardoor wist jij hoe zij zich voelde?",
          },
        },
      },
      {
        q: "*\"Hij liep extra langzaam en hield de doos met twee handen vast, alsof er een baby'tje in zat.\"* — Waarom loopt Ties zo langzaam?",
        options: [
          "Hij wil de vaas beschermen en niets laten vallen",
          "Hij is moe van het lopen",
          "Hij wil te laat op school aankomen",
          "De doos is te zwaar om snel te dragen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Staat er iets over vermoeidheid? Kijk naar wat er in de doos zit en hoe waardevol dat is.",
          null,
          "De doos wordt vergeleken met een baby'tje — is een baby zwaar, of eerder kwetsbaar?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Lees de vergelijking", tekst: "'Alsof er een baby'tje in zat' — baby'tjes zijn kwetsbaar. Je loopt langzaam en voorzichtig om ze niet te laten vallen." },
            { titel: "Koppel aan de situatie", tekst: "In de doos zit de vaas: het cadeau waarvoor de hele klas gespaard heeft. Als die breekt, is het voor niets geweest." },
            { titel: "Conclusie", tekst: "Ties loopt langzaam om de vaas veilig te houden — zorgzaam, niet moe of te laat." },
          ],
          niveaus: {
            basis: "Waarom loop je langzaam als je iets kwetsbaars draagt — om te rusten of om het te beschermen?",
            simpeler: "De vergelijking met een baby'tje zegt iets over hoe voorzichtig Ties is. Waarvoor is hij zo voorzichtig?",
            nogSimpeler: "Wat zou er kunnen gebeuren als Ties te hard loopt met de doos?",
          },
        },
      },
      {
        q: "*\"Kai hield de envelop al een kwartier vast zonder hem open te maken.\"* — Hoe voelt Kai zich waarschijnlijk?",
        options: ["Zenuwachtig", "Vrolijk", "Hongerig", "Boos"],
        answer: 0,
        wrongHints: [
          null,
          "Een blij iemand scheurt zo'n envelop open. Waarom maakt Kai hem niet open?",
          null,
          "Er is geen aanwijzing voor boosheid — Kai doet gewoon niets. Waaróm doe je dat?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het gedrag", tekst: "Kai wacht een kwartier lang — hij durft de envelop niet open te maken. Dat is het spoor." },
            { titel: "Vergelijk met jezelf", tekst: "Wanneer maak jij iets niet open? Als je bang bent voor wat er in zit." },
            { titel: "Conclusie", tekst: "Lang wachten + niet durven = spanning van binnen. Dat heet zenuwachtig zijn." },
          ],
          niveaus: {
            basis: "Kai maakt de envelop al een kwartier niet open. Wanneer doe jij dat bij iets belangrijks?",
            simpeler: "Denk aan een rapport of een toets-uitslag: wat doe je als je bang bent voor het resultaat?",
            nogSimpeler: "Als je ergens bang voor bent, pak je het dan meteen op of wacht je lang?",
          },
        },
      },
      {
        q: "*\"Toen het licht uitviel, kroop Mila diep onder haar dekbed en riep om haar vader.\"* — Wat weet je nu over Mila's **gevoel**?",
        options: [
          "Ze is bang",
          "Het licht viel uit",
          "Ze ligt in bed",
          "Ze is dol op haar dekbed",
        ],
        answer: 0,
        evidence: "Toen het licht uitviel, kroop Mila diep onder haar dekbed en riep om haar vader.",
        wrongHints: [
          null,
          "Dat gebeurt er inderdaad — maar is dat een gevóél? De vraag gaat over wat Mila van binnen voelt.",
          "Dat is een plek, geen gevoel. Wat vertellen het wegkruipen en het roepen over Mila van binnen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Gebeurtenis of gevoel?", tekst: "Eerst sorteren: 'het licht viel uit' is iets dat gebéúrt. 'In bed liggen' is een plek. De vraag gaat over wat Mila vóélt — dat is iets van binnen." },
            { titel: "Zoek het gedrag", tekst: "Wat doet Mila? Ze kruipt diep weg onder haar dekbed én ze roept om haar vader. Twee spoortjes die allebei dezelfde kant op wijzen." },
            { titel: "Vergelijk met jezelf", tekst: "Wanneer kruip jij weg en roep je om hulp? Precies op zo'n donker, griezelig moment. Dát gevoel zoekt de vraag." },
          ],
          woorden: [
            { woord: "gebeurtenis", uitleg: "Iets dat gebeurt in het verhaal: het licht valt uit, de bel gaat, het gaat regenen." },
            { woord: "gevoel", uitleg: "Wat een personage van binnen voelt: blij, bang, boos, trots, jaloers." },
          ],
          theorie: "**De gebeurtenis-valkuil**\n\nToetsenmakers zetten graag een gebeurtenis tussen de antwoorden bij een gevoels-vraag. Veel kinderen kiezen die, omdat het 'klopt met de tekst'. Maar kloppen is niet genoeg — het moet ook **antwoord geven op de vraag**.\n\nZo check je het: een gevoel kun je invullen in de zin *'Mila voelt zich ...'*\n\n- 'Mila voelt zich het-licht-viel-uit' → onzin, dus gebeurtenis.\n- 'Mila voelt zich in-bed' → onzin, dus plek.\n\nAlleen een écht gevoels-woord past in dat zinnetje. Gebruik die invul-truc bij elke gevoels-vraag.",
          voorbeelden: [
            { type: "invul-truc", tekst: "Vraag: hoe voelt Daan zich als zijn team verliest? Optie 'de wedstrijd is voorbij' → vul in: 'Daan voelt zich de-wedstrijd-is-voorbij'? Onzin. Zoek een woord dat wél past." },
          ],
          basiskennis: [
            { onderwerp: "Vraag goed lezen", uitleg: "Vraagt de toets naar een gevoel? Streep dan eerst alle antwoorden weg die een gebeurtenis of een plek zijn." },
          ],
          niveaus: {
            basis: "Let op het verschil tussen wat er gebéúrt (het licht) en wat Mila daarbij vóélt. De vraag gaat over dat tweede.",
            simpeler: "Wegkruipen onder je dekbed en om je vader roepen — wanneer doe jij dat 's avonds in het donker?",
            nogSimpeler: "Wat voel jij als het opeens pikkedonker is en je om hulp roept?",
          },
        },
      },
    ],
  },

  // ── Stap 2 ──────────────────────────────────────────────────────
  {
    title: "Door wiens ogen? — perspectief",
    explanation: tekstDuik + `

Dit verhaal is een **ik-verhaal**: je leest steeds 'ik' en 'mijn'. Dat betekent dat je het verhaal beleeft **door de ogen van één personage** — hier Noa, die boven op de duikplank staat. Dat noemen we het **perspectief**: de bril waardoor jij als lezer meekijkt.

Een ik-verhaal heeft een bijzonder gevolg. Je zit in het **hoofd** van de ik-persoon: je leest wat Noa denkt, voelt en van plan is. Maar van alle ándere personages zie je alleen de **buitenkant**. Wat Milan écht denkt? Dat weet je niet — je weet alleen wat Noa ziet en gokt ('alsof het niks is').

Op de Doorstroomtoets krijg je hier vragen over als: *"Door wiens ogen beleef je dit verhaal?"* en *"Wat weet de lezer niet?"*

En pas op voor de bekendste valkuil: de **ik-persoon is niet de schrijver**. De schrijver heeft het verhaal bedacht, maar de 'ik' is een verzonnen personage — net zoals een schrijver een ik-verhaal kan schrijven over een ridder, een muis of een meisje op een duikplank, zonder dat zelf te zijn.

Beantwoord nu de vragen over het verhaal hierboven.`,
    checks: [
      {
        q: "Door wiens ogen beleef je dit verhaal?",
        options: ["Noa", "Milan", "Het jongetje achter Noa", "De badmeester"],
        answer: 0,
        evidence: "Ik sta boven op de hoge duikplank. Mijn tenen krullen om de rand. \"Kom op, Noa!\" roept mijn broer Milan vanaf de kant.",
        wrongHints: [
          null,
          "Milan wordt van een afstandje beschreven ('hij hangt lui over de rand'). Wie zegt er de hele tijd 'ik' en 'mijn'?",
          null,
          "De badmeester wordt maar één keer kort genoemd. Wiens gedachten lees je van begin tot eind?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek 'ik' en 'mijn'", tekst: "Het verhaal staat vol met 'ik sta', 'mijn tenen', 'mijn handen'. Dat betekent: één personage vertelt het zelf. Door die ogen kijk jij mee." },
            { titel: "Wie is die 'ik'?", tekst: "Let op wat anderen roepen. Milan roept een naam naar boven, naar degene op de duikplank. Die naam hoort bij de ik-persoon." },
            { titel: "Controleer", tekst: "Klopt het? De 'ik' staat op de plank, is bang en wil springen — en tegen die persoon wordt de naam geroepen. Alles past bij elkaar." },
          ],
          woorden: [
            { woord: "perspectief", uitleg: "Door wiens ogen je het verhaal beleeft. De bril waarmee je meekijkt." },
            { woord: "ik-verhaal", uitleg: "Een verhaal waarin één personage zelf vertelt, met 'ik' en 'mijn'. Je zit in het hoofd van die persoon." },
          ],
          theorie: "**Ik-verhaal herkennen — zo doe je dat**\n\n1. Zoek de woordjes **ik, mij, mijn** buiten de gesproken zinnen (dus niet tussen aanhalingstekens).\n2. Vind je ze? Dan is het een ik-verhaal en beleef je alles door de ogen van die 'ik'.\n3. De naam van de 'ik' ontdek je vaak doordat ándere personages die naam roepen of zeggen.\n\nLet op: in gespróken zinnen zegt iedereen weleens 'ik' (\"Ik heb honger,\" zei Milan). Kijk daarom altijd naar de vertel-zinnen erómheen.",
          voorbeelden: [
            { type: "naam-vinden", tekst: "'Ik pakte mijn jas. \"Wacht even, Samir!\" riep mama.' → mama roept de naam naar de ik-persoon: de 'ik' heet Samir." },
          ],
          basiskennis: [
            { onderwerp: "Aanhalingstekens tellen niet mee", uitleg: "Voor het perspectief kijk je naar de vertel-zinnen, niet naar wat personages hardop tegen elkaar zeggen." },
          ],
          niveaus: {
            basis: "Zoek de woordjes 'ik' en 'mijn'. Wie wordt er met die 'ik' bedoeld — welke naam roept de broer naar boven?",
            simpeler: "Je leest gedachten als 'Ik moet wél — van mezelf.' In wiens hoofd zit je dan?",
            nogSimpeler: "Wie staat er boven op de duikplank en vertelt alles zelf?",
          },
        },
      },
      {
        q: "Welk woordje in de zin *\"Milan hangt lui over de rand, alsof het niks is\"* verklapt dat Noa raadt?",
        options: ["Alsof", "Lui", "Over", "Niks"],
        answer: 0,
        wrongHints: [
          null,
          "'Lui' beschrijft de houding van Milan zoals Noa die ziet — dat is een observatie, geen gok-woordje.",
          null,
          "'Niks' is wat er gesuggereerd wordt. Welk woordje maakt het duidelijk dat het een veronderstelling is?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat doet 'alsof'?", tekst: "'Alsof' betekent: het lijkt erop, maar het is misschien niet echt zo. Noa gokket dat het voor Milan niks is — ze weet het niet zeker." },
            { titel: "In een ik-verhaal", tekst: "In een ik-verhaal kent de verteller alleen zijn eigen hoofd. Van anderen weet hij alleen wat hij ziet. 'Alsof' is het teken van een gok." },
            { titel: "Conclusie", tekst: "'Alsof' verraadt: dit is de mening van Noa, geen feit. De lezer weet net zo weinig als Noa." },
          ],
          niveaus: {
            basis: "Welk woord geeft aan dat Noa iets veronderstelt in plaats van zeker weet?",
            simpeler: "Als jij 'alsof' zegt, weet je het dan zeker, of denk je het alleen maar?",
            nogSimpeler: "Kan Noa in het hoofd van Milan kijken? Welk woordje laat zien dat ze raadt?",
          },
        },
      },
      {
        q: "Wat weet de lezer in dit verhaal NIET?",
        options: [
          "Wat Milan écht denkt en voelt",
          "Wat Noa denkt en voelt",
          "Waar Noa staat",
          "Wat Noa deze week aan iedereen heeft verteld",
        ],
        answer: 0,
        evidence: "Hij hangt lui over de rand van het bad, alsof het niks is.",
        wrongHints: [
          null,
          "Daar lees je juist héél veel over — het hele verhaal zit vol met die gedachten. Wiens binnenkant blijft verborgen?",
          null,
          "Dat staat er letterlijk: 'Ik heb het de hele week aan iedereen verteld.' Zoek iets dat je alleen kunt gókken.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat weet je wél?", tekst: "Je kent Noa's gedachten ('ik moet wél'), Noa's gevoel (natte handen) en Noa's plek (de duikplank). Alles wat in Noa's hoofd zit, staat open voor jou." },
            { titel: "Wat blijft dicht?", tekst: "Van Milan zie je alleen de buitenkant: hij hangt over de rand en roept iets. Het woordje 'alsof' verraadt het: 'alsof het niks is' — dat is Noa's gok, geen zekerheid." },
            { titel: "Zo werkt een ik-verhaal", tekst: "Eén hoofd open, alle andere hoofden dicht. De lezer weet precies evenveel als de ik-persoon — niet meer." },
          ],
          woorden: [
            { woord: "alsof", uitleg: "Een gok-woordje: het lijkt zo, maar je weet het niet zeker. 'Alsof het niks is' = zo ziet het eruit." },
          ],
          theorie: "**Eén hoofd open, de rest dicht**\n\nIn een ik-verhaal is de lezer aan de ik-persoon 'vastgeplakt':\n\n- **Wél weten**: alles wat de ik-persoon denkt, voelt, ziet en hoort.\n- **Niet weten**: wat andere personages van binnen denken en voelen. Daarvan zie je alleen gedrag — en moet je (net als de ik-persoon) gokken.\n\nGok-woordjes als **alsof, misschien, vast, lijkt** verklappen waar de ik-persoon zelf ook maar raadt. Op de toets is 'wat weet de lezer niet?' bijna altijd: de binnenkant van een ander personage.",
          voorbeelden: [
            { type: "gok-woordje", tekst: "'Juf keek streng. Ze was vast boos op mij.' → 'vast' = de ik-persoon gokt. Misschien dacht juf gewoon aan iets anders. De lezer weet het óók niet." },
          ],
          basiskennis: [
            { onderwerp: "Lezer = ik-persoon", uitleg: "In een ik-verhaal weet jij als lezer precies evenveel als de ik-persoon. Niet meer en niet minder." },
          ],
          niveaus: {
            basis: "In een ik-verhaal zit je in één hoofd. Van wie ken je in dit verhaal alleen de búítenkant?",
            simpeler: "Noa gokt: 'alsof het niks is'. Waarom moet Noa dat gokken, denk je? Wat kan Noa niet zien?",
            nogSimpeler: "Wiens gedachten kun jij in dit verhaal nérgens lezen?",
          },
        },
      },
      {
        q: "*\"Mijn handen zijn nat, en dat komt niet door het zwembad.\"* — Wat bedoelt Noa hiermee?",
        options: [
          "Ze zweet van de spanning",
          "Ze heeft haar handen net gewassen",
          "Het regent boven het zwembad",
          "Ze heeft net in het water gelegen",
        ],
        answer: 0,
        evidence: "Mijn handen zijn nat, en dat komt niet door het zwembad.",
        wrongHints: [
          null,
          "Zou de zin dan zo geheimzinnig klinken? Waaróm vertelt Noa erbij dat het niet door het zwembad komt?",
          "Staat er ergens iets over het weer? Zoek de aanwijzing in Noa zelf, niet erbuiten.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Lees precies", tekst: "Noa's handen zijn nat, maar níét door het zwembad. Het water moet dus ergens anders vandaan komen — uit Noa zelf." },
            { titel: "Koppel aan de situatie", tekst: "Noa staat drie meter boven het water, durft bijna niet, en moet zo springen. Wat doet zo'n eng moment met je lijf — ook met je handen?" },
            { titel: "Lees tussen de regels", tekst: "De schrijver zegt het niet rechtstreeks. Maar 'natte handen die niet van het water komen' is een bekend teken van hoe gespannen iemand is. Dát bedoelt Noa." },
          ],
          woorden: [
            { woord: "zweten", uitleg: "Vocht dat uit je huid komt — als je het warm hebt, maar óók als je iets heel spannend vindt." },
          ],
          theorie: "**Het lijf verklapt het gevoel — ook in ik-verhalen**\n\nEen ik-persoon zegt zelden letterlijk 'ik ben zenuwachtig'. Vaker beschrijft hij wat zijn lijf doet:\n\n- natte of trillende handen\n- een bonkend hart, een droge mond\n- knikkende knieën, kriebels in de buik\n\nDe zin heeft hier zelfs een knipoog: 'en dat komt niet door het zwembad'. Daarmee zegt Noa eigenlijk: *let op, dit betekent iets*. Zo'n half-verstopte opmerking is precies waar toets-vragen graag naar vragen: 'wat bedoelt de schrijver met...?'",
          voorbeelden: [
            { type: "lijf-teken", tekst: "'Mijn hart bonkte tot in mijn oren toen ik mijn hand opstak.' → niemand zegt 'zenuwachtig', maar het lijf schreeuwt het." },
          ],
          basiskennis: [
            { onderwerp: "Rare opmerking = aanwijzing", uitleg: "Zegt een personage iets geks of geheimzinnigs ('en dat komt niet door...')? Dan wil de schrijver dat jij even nadenkt over de echte betekenis." },
          ],
          niveaus: {
            basis: "Noa staat hoog boven het water en durft bijna niet. Wat gebeurt er op zo'n moment soms met je handen?",
            simpeler: "Er staat 'niet door het zwembad' — het vocht komt dus uit Noa zelf. Wanneer krijg jij natte handen zonder water aan te raken?",
            nogSimpeler: "Denk aan een moment dat je iets heel eng vond — wat voelde je toen in je handen?",
          },
        },
      },
      {
        q: "*\"Je hoeft niet, hoor!\" roept Milan nu. Maar dat is niet waar.\"* — Wat weet de lezer hierdoor over Noa?",
        options: [
          "Noa voelt een sterke innerlijke drang om te springen",
          "Noa is bang voor Milan",
          "Noa denkt dat de badmeester het zegt",
          "Noa wil het zwembad verlaten",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Is er enig bewijs dat Noa bang is voor Milan? Wat zegt de tekst over haar eigen motivatie?",
          null,
          "Lees de zinnen erna goed: Noa wil iets bewíjzen. Aan wie, en wat?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Lees wat Noa zegt", tekst: "Noa zegt: 'Ik moet wél. Niet van hem, niet van de badmeester — van mezelf.' Ze pusht zichzelf." },
            { titel: "Koppel aan de context", tekst: "Noa heeft de hele week aan iedereen verteld dat ze vandaag gaat springen. Ze kan niet meer terug zonder gezichtsverlies." },
            { titel: "Leid de drang af", tekst: "Die combinatie — eigen belofte + trots — geeft een sterke innerlijke drang. Dat is meer dan angst of druk van buiten." },
          ],
          niveaus: {
            basis: "Noa zegt 'ik moet wél — van mezelf'. Wat zegt dat over wat ze van zichzelf verwacht?",
            simpeler: "Noa heeft het aan iedereen beloofd. Hoe voel jij je dan als je bijna terugkrabbelt?",
            nogSimpeler: "Van wie 'moet' Noa springen: van Milan, of van zichzelf?",
          },
        },
      },
      {
        q: "De 'ik' in dit verhaal — wie is dat eigenlijk?",
        options: [
          "Noa, een verzonnen personage",
          "De schrijver van het verhaal",
          "De lezer",
          "Milan",
        ],
        answer: 0,
        evidence: "\"Kom op, Noa!\" roept mijn broer Milan vanaf de kant.",
        wrongHints: [
          null,
          "De schrijver heeft dit verhaal vérzonnen — heeft de schrijver zelf een broer Milan? Wie leeft er ín het verhaal?",
          "Jij leest mee, maar sta jij zelf op die duikplank?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "De naam van de 'ik'", tekst: "Milan roept 'Kom op, Noa!' naar boven — naar degene op de plank. De ik-persoon heeft dus een eigen naam en een eigen leven ín het verhaal." },
            { titel: "Schrijver ≠ ik-persoon", tekst: "De schrijver zit thuis achter een bureau en bedenkt alles. De 'ik' staat op een duikplank in het verhaal. Dat zijn twee verschillende 'personen': een echte en een verzonnen." },
            { titel: "Waarom dit een valkuil is", tekst: "Omdat 'ik' zo dichtbij voelt, denken veel kinderen dat de schrijver over zichzelf vertelt. Meestal niet! Een schrijver kan een ik-verhaal schrijven over iedereen — zelfs over een draak." },
          ],
          woorden: [
            { woord: "schrijver", uitleg: "De echte persoon die het verhaal bedacht en opgeschreven heeft. Staat búíten het verhaal." },
            { woord: "verzonnen", uitleg: "Bedacht, niet echt gebeurd. Personages in een verhaal zijn bijna altijd verzonnen." },
          ],
          theorie: "**Drie verschillende rollen — haal ze niet door elkaar**\n\n| Rol | Wie | Waar |\n|---|---|---|\n| Schrijver | echte persoon die het bedacht | buiten het verhaal |\n| Ik-persoon | verzonnen personage dat vertelt | ín het verhaal |\n| Lezer | jij | buiten het verhaal, kijkt mee |\n\nToets-vragen testen dit graag: *\"Wie vertelt het verhaal?\"* Het antwoord is dan een personage-naam of 'de ik-persoon' — bijna nooit de schrijver. Alleen bij een echt dagboek of een waargebeurde tekst kán de schrijver de 'ik' zijn.",
          voorbeelden: [
            { type: "verzonnen-ik", tekst: "Een volwassen schrijfster schrijft: 'Ik ben Kai en ik zit in groep 8.' → de schrijfster zit natuurlijk niet in groep 8; Kai is verzonnen." },
          ],
          basiskennis: [
            { onderwerp: "Ik-persoon leeft in het verhaal", uitleg: "De 'ik' doet mee aan de gebeurtenissen van het verhaal. De schrijver niet — die heeft ze alleen bedacht." },
          ],
          niveaus: {
            basis: "De 'ik' heeft een naam die in het verhaal geroepen wordt. Hoort die naam bij iemand ín het verhaal, of bij degene die het bedacht heeft?",
            simpeler: "Een schrijver kan ook een ik-verhaal schrijven over een ridder of een muis. Is de schrijver dan zelf die ridder?",
            nogSimpeler: "Naar wie roept Milan 'Kom op!' aan het begin van het verhaal?",
          },
        },
      },
    ],
  },

  // ── Stap 3 ──────────────────────────────────────────────────────
  {
    title: "Beeldspraak en sfeer",
    explanation: `Lees deze zin: *"Juf las voor. Haar stem was honing: iedereen werd er rustig van."*

Was haar stem écht van honing? Natuurlijk niet — dan zou het plakken! Dit is **beeldspraak**: de schrijver vergelijkt de stem met honing, omdat ze iets gemeen hebben. Honing is zacht, zoet en vloeit langzaam — en zo klónk die stem ook.

Zo pak je beeldspraak aan:
1. **Herken het beeld** — er staat iets dat letterlijk niet kan (een stem van honing, een slapende schommel). Vaak helpt het woordje **als**: "zo snel als de wind".
2. **Vraag je af: wat hebben de twee dingen gemeen?** Dat gemeenschappelijke is de echte betekenis.
3. **Neem het nooit letterlijk** — dat is dé valkuil op de toets.

Bij gedichten hoort nog iets: de **sfeer**. Dat is het gevoel dat de hele tekst je geeft: rustig, spannend, vrolijk, treurig. Sfeer proef je aan de woordkeuze: 'slapen', 'stil' en 'deken' geven een heel ander gevoel dan 'knallen', 'rennen' en 'gillen'.

Lees nu dit gedicht — hardop mag, dan hoor je de sfeer beter:

${gedichtAvondtuin.replace("**Avond in de tuin**", "**Avond in de tuin**")}

Beantwoord daarna de vragen. Denk steeds: wat betekent het écht, en wat voel ik erbij?`,
    checks: [
      {
        q: "*\"De zon zakt als een gloeiende munt / langzaam in de spaarpot van de nacht.\"* — Wat wordt hier met elkaar vergeleken?",
        options: [
          "De ondergaande zon met een munt die in een spaarpot glijdt",
          "Een munt met een spaarpot",
          "De nacht met de zon",
          "Geld verdienen met slapen gaan",
        ],
        answer: 0,
        evidence: "De zon zakt als een gloeiende munt / langzaam in de spaarpot van de nacht.",
        wrongHints: [
          null,
          "De munt en de spaarpot horen allebei bij het bééld. Wat uit de echte wereld wordt met die munt vergeleken?",
          null,
          "Gaat dit gedicht over geld? Kijk waarvóór het beeld gebruikt wordt: wat doet de zon 's avonds?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het als-woordje", tekst: "'De zon zakt als een gloeiende munt' — het woordje 'als' verklapt een vergelijking. Links van 'als' staat het echte ding (de zon), rechts het beeld (de munt)." },
            { titel: "Wat hebben ze gemeen?", tekst: "Een zon bij zonsondergang: rond, oranje-goud, zakt langzaam omlaag. Een munt: rond, goudkleurig, glijdt langzaam in de gleuf. Ze lijken op elkaar in vorm, kleur én beweging." },
            { titel: "Maak het beeld af", tekst: "Waar 'valt' de zon in? In de nacht — en die noemt de dichter de spaarpot. De hele vergelijking is dus: zonsondergang = munt die in een spaarpot glijdt." },
          ],
          woorden: [
            { woord: "vergelijking", uitleg: "Beeldspraak waarbij twee dingen naast elkaar worden gezet, vaak met 'als': zo sterk als een beer." },
            { woord: "beeld", uitleg: "Het verzonnen ding waarmee vergeleken wordt (de munt). Het echte ding is waar het gedicht over gaat (de zon)." },
          ],
          theorie: "**Vergelijking = echt ding + beeld**\n\nElke vergelijking heeft twee kanten:\n\n- het **echte ding** — waar de tekst over gaat (de zon)\n- het **beeld** — waarmee het vergeleken wordt (de munt)\n\nDe toets-vraag 'wat wordt vergeleken?' vraagt naar **allebei de kanten samen**. Alleen het beeld noemen (munt + spaarpot) is niet genoeg: dan mis je het echte ding.\n\nSignaal-woorden voor een vergelijking: **als, zoals, net, lijkt op**. Soms ontbreekt het signaal-woord ('haar stem was honing') — dan zie je het aan iets dat letterlijk niet kan.",
          voorbeelden: [
            { type: "twee-kanten", tekst: "'De sneeuw lag als een witte deken over het dorp.' → echt ding: de sneeuw. Beeld: een deken. Gemeen: allebei bedekken ze alles zacht en helemaal." },
          ],
          basiskennis: [
            { onderwerp: "'Als' = vergelijk-signaal", uitleg: "Zie je 'als' of 'zoals' tussen twee dingen die niet echt bij elkaar horen? Grote kans dat het beeldspraak is." },
          ],
          niveaus: {
            basis: "Bij een vergelijking horen twee kanten: iets échts en een beeld. Het beeld is hier de munt — welk echt ding zakt er langzaam omlaag?",
            simpeler: "Het woordje 'als' verklapt de vergelijking: 'de zon zakt als...'. Wat doet de zon 's avonds, en wat doet een munt bij een spaarpot? Wat lijkt daaraan op elkaar?",
            nogSimpeler: "Wat zie je 's avonds langzaam omlaag zakken aan de lucht?",
          },
        },
      },
      {
        q: "*\"De schommel hangt te slapen aan zijn touwen.\"* — Wat betekent dit écht?",
        options: [
          "De schommel hangt stil; er speelt niemand meer",
          "De schommel heeft zijn ogen dicht",
          "Er ligt een kind op de schommel te slapen",
          "De schommel is kapot en moet gemaakt worden",
        ],
        answer: 0,
        evidence: "De schommel hangt te slapen aan zijn touwen,",
        wrongHints: [
          null,
          "Heeft een schommel ogen? De dichter doet alsof de schommel een levend wezen is — wat wil hij daarmee laten zíén?",
          "Staat er ergens een kind in deze regel? Kijk wat de schommel zélf 'doet'.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken: dit kan niet letterlijk", tekst: "Een schommel is een ding. Dingen kunnen niet slapen. Dus: beeldspraak! De dichter doet alsof de schommel leeft." },
            { titel: "Wat doet iets dat slaapt?", tekst: "Iets dat slaapt, beweegt niet en maakt geen geluid. Vertaal dat naar de schommel: hoe hangt die er 's avonds bij, zonder spelende kinderen?" },
            { titel: "Koppel aan het gedicht", tekst: "Het hele gedicht gaat over de avond: de zon is weg, de deur gaat dicht. De 'slapende' schommel past daarbij — de speeldag is voorbij." },
          ],
          woorden: [
            { woord: "personificatie", uitleg: "Beeldspraak waarbij een ding iets menselijks doet: de schommel slaapt, de deur gaapt, de tuin trekt een deken over zich heen." },
          ],
          theorie: "**Dingen die mensen-dingen doen**\n\nDichters laten dingen graag leven: de wind fluistert, de zee slikt schepen in, een deur gaapt. Dat heet **personificatie** (van 'persoon': de dichter maakt er even een persoon van).\n\nZo vertaal je het terug:\n1. Wat doet het ding volgens de dichter? (slapen)\n2. Wat betekent die mensen-actie? (stil zijn, niet bewegen, rusten)\n3. Vertaal naar het ding: een schommel die 'rust' = een schommel waar niemand op speelt.\n\nDit gedicht zit er vol mee: de deur gaapt (piept langzaam open of dicht, zoals iemand die gaapt van moeheid), het gras houdt zijn adem in (alles is doodstil).",
          voorbeelden: [
            { type: "personificatie", tekst: "'De oude auto kuchte en viel toen stil.' → een auto kan niet kuchen: de motor hapert en slaat af." },
            { type: "personificatie", tekst: "'De zon kietelde mijn neus wakker.' → zonlicht scheen op mijn gezicht en ik werd ervan wakker." },
          ],
          basiskennis: [
            { onderwerp: "Terugvertalen", uitleg: "Doet een ding iets dat alleen mensen of dieren kunnen? Vraag je af wat die actie betekent en vertaal het terug naar het ding." },
          ],
          niveaus: {
            basis: "Een schommel kan niet écht slapen. Wat doet iets dat slaapt: beweegt het veel of weinig? Vertaal dat naar de schommel.",
            simpeler: "Denk aan de avondtuin: alle kinderen zijn naar binnen. Hoe hangt de schommel er dan bij?",
            nogSimpeler: "Stel je de tuin 's avonds laat voor. Wat 'doet' de schommel dan nog?",
          },
        },
      },
      {
        q: "Welke sfeer past het best bij dit gedicht?",
        options: [
          "Rustig en slaperig",
          "Spannend en eng",
          "Druk en vrolijk",
          "Boos en onstuimig",
        ],
        answer: 0,
        evidence: "Ergens gaapt een deur, dan wordt het stil. / De tuin trekt een deken van schaduw over zich heen.",
        wrongHints: [
          null,
          "Er gebeurt niets engs: geen monster, geen gevaar. Lees de laatste regel nog eens — wat voor gevoel geeft die deken van schaduw?",
          null,
          "Zoek eens boze of wilde woorden in het gedicht — vind je die ergens?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Verzamel sfeer-woorden", tekst: "Loop het gedicht langs en pak de gevoels-geladen woorden: 'langzaam', 'slapen', 'adem in', 'stil', 'deken'. Schrijf ze desnoods even op een rijtje." },
            { titel: "Wat hebben ze gemeen?", tekst: "Al die woorden horen bij hetzelfde soort moment: bedtijd, langzaam, zacht, geluidloos. Geen enkel woord knalt, rent of schreeuwt." },
            { titel: "Kies de sfeer die past", tekst: "De sfeer is het gevoel dat ál die woorden samen geven. Vraag jezelf: welke muziek zou onder dit gedicht passen? Dat wijst je naar het goede antwoord." },
          ],
          woorden: [
            { woord: "sfeer", uitleg: "Het gevoel dat een tekst of gedicht je geeft: gezellig, griezelig, treurig, feestelijk. Je proeft het aan de woordkeuze." },
            { woord: "woordkeuze", uitleg: "Welke woorden de schrijver kiest. 'Sluipen' geeft een andere sfeer dan 'huppelen'." },
          ],
          theorie: "**Sfeer proeven in drie stappen**\n\n1. **Verzamel** de woorden die een gevoel oproepen.\n2. **Kijk wat ze gemeen hebben** — wijzen ze naar zacht en stil, of naar hard en wild?\n3. **Kies het sfeer-woord** dat bij de hele verzameling past.\n\nLet op: één los woord kan je foppen. 'Het gras houdt zijn adem in' klinkt even spannend — maar in dit gedicht wacht het gras gewoon rustig op de nacht. Kijk daarom altijd naar het **geheel**, niet naar één regel.\n\nVergelijk: *'De takken grepen naar mijn jas. Iets kraakte achter me.'* — zelfde tijd van de dag, totaal andere sfeer. Het verschil zit puur in de woordkeuze.",
          voorbeelden: [
            { type: "sfeer-contrast", tekst: "'Slingers! Taart! Iedereen gilde door elkaar.' → korte zinnen, uitroeptekens, feest-woorden: een drukke, vrolijke sfeer." },
          ],
          basiskennis: [
            { onderwerp: "Sfeer = som van de woorden", uitleg: "Niet één woord bepaalt de sfeer, maar de hele verzameling. Tel als het ware op wat de meeste woorden uitstralen." },
          ],
          niveaus: {
            basis: "Sfeer proef je aan de woorden. Verzamel er een paar uit het gedicht ('langzaam', 'stil', 'deken'...) en vraag je af: welk gevoel geven die samen?",
            simpeler: "Stel je het gedicht voor als een filmpje: de zon zakt, een deur gaat dicht, de schaduw komt. Welke muziek past daarbij — harde drums of een zacht slaapliedje?",
            nogSimpeler: "Hoe voelt een tuin 's avonds laat, als iedereen naar binnen is?",
          },
        },
      },
      {
        q: "*\"Het gras houdt zijn adem in en wacht.\"* — Wat betekent dit?",
        options: [
          "Het is volkomen stil in de tuin",
          "Het gras heeft last van de warmte",
          "Er waait een sterke wind",
          "Het gras groeit snel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Staat er iets over warmte in dit deel van het gedicht? Kijk wat 'adem inhouden' betekent.",
          "Wie adem inhoudt, beweegt niet. Past dat bij wind?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken de personificatie", tekst: "Gras kan niet ademen — dit is beeldspraak: de dichter doet alsof het gras een levend wezen is." },
            { titel: "Wat betekent 'adem inhouden'?", tekst: "Als jij je adem inhoudt, beweeg je niet, maak je geen geluid en wacht je op iets. Vertaal dat naar het gras." },
            { titel: "Koppel aan de sfeer", tekst: "Het hele gedicht gaat over de avond, stilte, slapen. Gras dat 'zijn adem inhoudt' = gras dat roerloos stilstaat — doodstil." },
          ],
          niveaus: {
            basis: "Wat doe jij als je je adem inhoudt: beweeg je, of sta je heel stil?",
            simpeler: "Vertaal het naar de tuin: als het gras 'zijn adem inhoudt', beweegt het dan veel of weinig?",
            nogSimpeler: "Hoe ziet de tuin eruit op een stille avond zonder wind?",
          },
        },
      },
      {
        q: "*\"Ergens gaapt een deur, dan wordt het stil.\"* — Wat is de betekenis van 'een deur gaapt'?",
        options: [
          "Een deur gaat langzaam piepend open of dicht",
          "Een deur is erg groot en breed",
          "Iemand gooit een deur dicht",
          "Een deur is kapot",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De dichter vergelijkt de beweging van de deur met gapen. Wat heeft gapen met bewegen te maken?",
          "Iemand die zijn deur keihard dichtgooit gaapt niet. Gapen is langzaam en sloom.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken de personificatie", tekst: "Een deur kan niet echt gapen — de dichter doet alsof de deur een mens is die geeuwt." },
            { titel: "Wat heeft gapen gemeen met een deur?", tekst: "Gapen: mond gaat langzaam wijd open en valt daarna dicht. Een deur die langzaam openzwaait of dichtvalt, doet precies hetzelfde." },
            { titel: "Past het bij de sfeer?", tekst: "Gapen hoort bij slaperigheid, einde van de dag. Perfect bij dit gedicht over een avondtuin die tot rust komt." },
          ],
          niveaus: {
            basis: "Wat doet je mond als je gaapt — gaat die snel of langzaam open? Vertaal dat naar een deur.",
            simpeler: "Denk aan iemand die slaperig gaapt: langzaam en groot. Wat doet een deur die hetzelfde 'doet'?",
            nogSimpeler: "Hoe klinkt een deur die langzaam, piepend opengaat op een stille avond?",
          },
        },
      },
      {
        q: "*\"Juf las voor. Haar stem was honing: iedereen werd er rustig van.\"* — Wat bedoelt de schrijver met 'haar stem was honing'?",
        options: [
          "Haar stem klonk zacht en lief",
          "Ze had honing gegeten en haar mond plakte",
          "Haar stem was geel van kleur",
          "Ze las een verhaal over bijen voor",
        ],
        answer: 0,
        evidence: "Haar stem was honing: iedereen werd er rustig van.",
        wrongHints: [
          null,
          "Neem je de zin dan niet te letterlijk? Denk aan hoe honing vóélt en smaakt — wat heeft dat met een stem te maken?",
          "Kun je een stem zíén? Beeldspraak gaat over wat twee dingen met elkaar gemeen hebben.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken de beeldspraak", tekst: "Een stem kan niet echt van honing zijn — dat kan letterlijk niet. Dus de schrijver bedoelt iets anders: dit is een beeld." },
            { titel: "Wat is er fijn aan honing?", tekst: "Honing is zoet, warm-goud en vloeit langzaam en soepel. Allemaal aangename, kalme eigenschappen." },
            { titel: "Vertaal naar de stem", tekst: "Zoek de eigenschappen die een stém ook kan hebben: warm, soepel, aangenaam om naar te luisteren. De rest van de zin bevestigt het: 'iedereen werd er rustig van'." },
          ],
          woorden: [
            { woord: "letterlijk", uitleg: "Precies zoals het er staat. Beeldspraak moet je juist níét letterlijk nemen." },
            { woord: "figuurlijk", uitleg: "Niet echt, maar als beeld bedoeld. 'Ik heb een olifantenhonger' = figuurlijk: heel veel honger." },
          ],
          theorie: "**De letterlijk-nemen-valkuil**\n\nDé klassieke fout bij beeldspraak-vragen: het beeld letterlijk nemen. De toets zet zulke letterlijke antwoorden er express tussen ('haar mond plakte', 'geel van kleur').\n\nZo ontwijk je de valkuil:\n1. **Kan het letterlijk?** Een stem van honing — nee. Dus beeldspraak.\n2. **Zoek de gemeenschappelijke eigenschap** tussen beeld en echt ding.\n3. **Check met de rest van de zin**: 'iedereen werd er rustig van' — welk antwoord past dáárbij?\n\nDe zin er direct omheen geeft bijna altijd gratis bewijs voor de juiste betekenis. Gebruik dat!",
          voorbeelden: [
            { type: "check-de-context", tekst: "'Opa is een wandelende encyclopedie: vraag hem alles over vroeger.' → het tweede stuk verklapt de betekenis: opa wéét heel veel." },
            { type: "letterlijk-fout", tekst: "'Het regende katten en honden' betekent níét dat er dieren vielen — het goot enorm. Engels leenbeeld, zelfde valkuil." },
          ],
          basiskennis: [
            { onderwerp: "Context is gratis bewijs", uitleg: "De woorden vlak vóór of ná de beeldspraak vertellen bijna altijd wat er echt bedoeld wordt. Lees dus één zin extra." },
          ],
          niveaus: {
            basis: "Vraag je bij beeldspraak af: wat hebben de twee dingen gemeen? Wat is er fijn aan honing — en wat kan er net zo fijn zijn aan een stem?",
            simpeler: "Honing is zoet en warm en vloeit langzaam. Welke manier van praten past daarbij? De rest van de zin helpt: iedereen werd er rustig van.",
            nogSimpeler: "Denk aan iemand die zó fijn voorleest dat de hele klas stil wordt — zo'n stem bedoelt de schrijver.",
          },
        },
      },
    ],
  },

  // ── Stap 4 ──────────────────────────────────────────────────────
  {
    title: "Doorstroomtoets-oefening — de mix",
    explanation: tekstCadeau + `

Dit is de eindoefening: een verhaal met vragen zoals je ze écht op de Doorstroomtoets krijgt. Alles wat je geleerd hebt komt terug — door elkaar, net als op de toets:

- **Tussen de regels**: gevoelens die er niet staan, maar die je afleidt uit gedrag.
- **Perspectief**: wie vertelt dit verhaal, en wat weet de lezer wel en niet?
- **Beeldspraak**: een vergelijking die je niet letterlijk moet nemen.
- **Bedoeling**: waaróm zegt een personage iets — wat wil het bereiken?
- **Sfeer**: hoe de stemming in het verhaal omslaat.

Pak bij elke vraag de vaste aanpak: lees de vraag goed, zoek de juiste zin op in het verhaal, en kies het antwoord dat het **best bij de tekst past** — niet het antwoord dat alleen maar 'zou kunnen'. Neem de tijd om terug te lezen; dat opzoeken hoort erbij. Succes!`,
    checks: [
      {
        q: "Is dit een ik-verhaal of een hij/zij-verhaal?",
        options: [
          "Een hij/zij-verhaal: een verteller buiten het verhaal vertelt over Ties en de anderen",
          "Een ik-verhaal: Ties vertelt het zelf",
          "Een ik-verhaal: juf Karin vertelt het zelf",
          "Een hij/zij-verhaal: Fleur vertelt alles wat zij denkt",
        ],
        answer: 0,
        evidence: "Op de laatste schooldag mocht Ties de vaas naar school brengen. Hij liep extra langzaam en hield de doos met twee handen vast",
        wrongHints: [
          null,
          "Zoek de woordjes 'ik' en 'mijn' buiten de gesproken zinnen — vind je ze? Wie noemt Ties steeds bij zijn naam?",
          null,
          "Lees je ergens wat Fleur van bínnen denkt, of zie je alleen wat ze doet en roept?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek naar 'ik'", tekst: "Loop de vertel-zinnen langs (alles buiten de aanhalingstekens). Je vindt 'Ties', 'hij', 'zijn vingers', 'ze' — maar nergens 'ik' of 'mijn'. Dat zegt genoeg." },
            { titel: "Waar staat de verteller?", tekst: "De verteller doet zelf niet mee: hij is geen kind in de klas en geen juf. Hij kijkt van buitenaf toe en vertelt wat er gebeurt — over iedereen." },
            { titel: "Vergelijk met het duikplank-verhaal", tekst: "Daar las je 'ik sta', 'mijn tenen' — je zat in één hoofd. Hier lees je namen en 'hij/ze' — je kijkt van een afstandje mee. Twee verschillende soorten verhalen." },
          ],
          woorden: [
            { woord: "hij/zij-verhaal", uitleg: "Een verhaal waarin een verteller over de personages vertelt met namen en 'hij' of 'zij'. De verteller doet zelf niet mee." },
            { woord: "verteller", uitleg: "De 'stem' die het verhaal vertelt. Kan een personage zijn (ik-verhaal) of iemand buiten het verhaal (hij/zij-verhaal)." },
          ],
          theorie: "**Ik-verhaal of hij/zij-verhaal? De snelle check**\n\n1. Kijk alléén naar de vertel-zinnen (niet naar wat personages hardop zeggen).\n2. Staat daar 'ik/mij/mijn'? → ik-verhaal.\n3. Staan daar namen en 'hij/zij/ze'? → hij/zij-verhaal.\n\nWat betekent dat voor jou als lezer?\n\n- **Ik-verhaal**: je zit in één hoofd; van de rest zie je alleen de buitenkant.\n- **Hij/zij-verhaal**: de verteller kan meer laten zien — soms zelfs de gevoelens van meerdere personages. Maar let op: óók hier moet je vaak tussen de regels lezen (trillende vingers, gloeiende wangen...).",
          voorbeelden: [
            { type: "snelle-check", tekst: "'Lina pakte haar fiets. Ze was te laat.' → naam + 'ze' in de vertel-zin: hij/zij-verhaal. 'Ik pakte mijn fiets.' → ik-verhaal." },
          ],
          basiskennis: [
            { onderwerp: "Gesproken zinnen tellen niet", uitleg: "In \"'Ik doe het wel!' riep Fleur\" hoort de 'ik' bij het práten van Fleur — niet bij de verteller. Kijk altijd buiten de aanhalingstekens." },
          ],
          niveaus: {
            basis: "Let op het verschil tussen de gesproken zinnen (tussen aanhalingstekens) en de rest. Wie is er in de rest van de tekst aan het woord?",
            simpeler: "Vergelijk met het duikplank-verhaal: daar las je 'ik sta' en 'mijn tenen'. Zie je zulke woordjes hier ook, buiten wat mensen hardop zeggen?",
            nogSimpeler: "Zoek in de vertel-zinnen naar het woordje 'ik'. Wat valt je op?",
          },
        },
      },
      {
        q: "*\"Zijn vingers trilden toen hij het deksel optilde.\"* — Wat voelt Ties op dit moment?",
        options: [
          "Hij is gespannen: als de vaas maar heel is gebleven",
          "Hij heeft het koud in de klas",
          "Hij is boos op Fleur",
          "Hij vindt het deksel te zwaar",
        ],
        answer: 0,
        evidence: "In de klas zette Ties de doos op tafel. Zijn vingers trilden toen hij het deksel optilde.",
        wrongHints: [
          null,
          "Staat er ergens iets over de temperatuur? Denk aan wat er in die doos zit en hoe belangrijk dat is.",
          "Heeft Fleur iets verkeerd gedaan dan? Lees terug wat zij bij het hek riep.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het gedrag", tekst: "Trillende vingers — dat is het spoor. Nu de vraag: wáárom trillen ze? Zoek de reden in het verhaal eromheen." },
            { titel: "Kijk wat eraan voorafging", tekst: "Ties droeg de doos 'alsof er een baby'tje in zat' en liep extra langzaam. De vaas is kostbaar: de hele klas heeft ervoor gespaard. Dit moment is belangrijk voor hem." },
            { titel: "Combineer", tekst: "Belangrijk moment + trillende vingers = een lijf dat verraadt hoe veel er voor Ties op het spel staat. Zo lees je het gevoel dat er niet letterlijk staat." },
          ],
          woorden: [
            { woord: "kostbaar", uitleg: "Veel waard — door geld, of doordat het belangrijk is voor iemand." },
            { woord: "op het spel staan", uitleg: "Er kan iets belangrijks misgaan. Hoe meer er op het spel staat, hoe spannender een moment voelt." },
          ],
          theorie: "**Gevoel afleiden = gedrag + situatie**\n\nGedrag alleen is soms niet genoeg. Trillende vingers kunnen óók bij kou horen! Daarom combineer je altijd twee dingen:\n\n1. **Het gedrag**: wat doet het lijf? (trillen)\n2. **De situatie**: wat is er aan de hand? (een kostbaar cadeau, hij droeg het als een baby'tje, iedereen kijkt mee)\n\nDe situatie vertelt je wélke betekenis van het gedrag hier klopt. Er staat nergens iets over kou — maar wel drie aanwijzingen dat dit moment enorm belangrijk is voor Ties. Kies dus altijd het antwoord waar de tekst het meeste bewijs voor geeft.",
          voorbeelden: [
            { type: "gedrag-plus-situatie", tekst: "'Met trillende handen scheurde Julie de envelop met de uitslag open.' → zelfde trillen, en ook hier wijst de situatie (een belangrijke uitslag) naar spanning." },
          ],
          basiskennis: [
            { onderwerp: "Bewijs tellen", uitleg: "Twijfel je tussen twee gevoelens? Tel de aanwijzingen in de tekst. Het gevoel met het meeste bewijs wint." },
          ],
          niveaus: {
            basis: "Waarom trillen iemands vingers bij het openen van een doos met iets kostbaars erin?",
            simpeler: "Ties droeg de doos 'alsof er een baby'tje in zat'. Wat zegt dat over hoe belangrijk de vaas voor hem is — en wat doet dat met hem bij het openmaken?",
            nogSimpeler: "Wat voel jij vlak voordat je kijkt of iets kostbaars nog heel is?",
          },
        },
      },
      {
        q: "*\"Zijn wangen gloeiden als kacheltjes.\"* — Wat betekent dit?",
        options: [
          "Ties krijgt een rood, warm hoofd omdat hij zich schaamt",
          "Er staan kacheltjes naast Ties aan",
          "Ties heeft koorts en moet naar huis",
          "Ties heeft het warm van het rennen",
        ],
        answer: 0,
        evidence: "Ties staarde naar de grond. Zijn wangen gloeiden als kacheltjes.",
        wrongHints: [
          null,
          "Neem je de vergelijking niet te letterlijk? Er staat 'als' — het is een beeld. Wat is er net gebeurd met de vaas?",
          null,
          "Heeft Ties gerend? Lees terug hoe hij naar school liep — en wat er daarna misging.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken de vergelijking", tekst: "Het woordje 'als' verklapt: dit is beeldspraak. Wangen zijn geen echte kacheltjes — ze delen alleen een eigenschap: ze worden heet en rood-gloeiend." },
            { titel: "Zoek de oorzaak in het verhaal", tekst: "Wat is er net gebeurd? De vaas ligt in scherven, de hele klas kijkt, en Ties staart naar de grond. Hij droeg de doos — hij voelt zich verantwoordelijk." },
            { titel: "Combineer beeld + situatie", tekst: "Hete, rode wangen op het moment dat iedereen naar jouw mislukking kijkt — het staren naar de grond ernaast bevestigt welk gevoel hier bedoeld wordt." },
          ],
          woorden: [
            { woord: "gloeien", uitleg: "Heet en rood worden, zoals kolen in een vuur. Wangen kunnen 'gloeien' van schaamte of inspanning." },
            { woord: "verantwoordelijk", uitleg: "Degene zijn die ergens voor moet zorgen. Gaat het mis, dan voelt het als jouw schuld." },
          ],
          theorie: "**Beeldspraak in verhalen werkt net als in gedichten**\n\nOok in gewone verhalen gebruiken schrijvers beeldspraak — vooral bij gevoelens. Dezelfde aanpak:\n\n1. Kan het letterlijk? (kachel-wangen: nee)\n2. Welke eigenschap delen ze? (heet en rood worden)\n3. Wat betekent dat gevoel híér? Kijk naar de situatie én naar het gedrag ernaast: 'Ties staarde naar de grond.'\n\nWegkijken + rode wangen + iedereen ziet je fout = een klassieke combinatie in verhalen. De toets zet er graag een letterlijk antwoord tussen (echte kacheltjes, koorts) — die streep je nu meteen weg.",
          voorbeelden: [
            { type: "gevoel-beeld", tekst: "'Er zat een steen in mijn maag toen ik het moest opbiechten.' → geen echte steen: een zwaar, naar gevoel van binnen." },
          ],
          basiskennis: [
            { onderwerp: "Beeld + gedrag samen lezen", uitleg: "Beeldspraak over een gevoel staat zelden alleen. Het gedrag ernaast (wegkijken, zwijgen) bevestigt welk gevoel bedoeld wordt." },
          ],
          niveaus: {
            basis: "Twee stapjes: het is beeldspraak (dus geen echte kachel), én er is net iets misgegaan waar de hele klas bij was. Wat doet zo'n moment met je gezicht?",
            simpeler: "Denk aan een moment dat er iets misging waar iedereen bij stond te kijken. Wat voelde je toen in je wangen?",
            nogSimpeler: "Wat gebeurt er met je gezicht als iedereen kijkt en jij het liefst wilt wegkruipen?",
          },
        },
      },
      {
        q: "Waarom zegt juf Karin dat ze 'tweeëndertig cadeautjes in plaats van één' krijgt?",
        options: [
          "Ze wil Ties troosten en laten merken dat het niet erg is",
          "Ze wil tweeëndertig nieuwe vazen bestellen",
          "Ze vindt scherven echt mooier dan een hele vaas",
          "Ze is boos en zegt het spottend",
        ],
        answer: 0,
        evidence: "\"Weet je,\" zei ze zacht, \"ik krijg zo tweeëndertig cadeautjes in plaats van één. Ik neem alle scherven mee, van iedereen één.\"",
        wrongHints: [
          null,
          null,
          "Zou iemand dat écht vinden — of zégt ze het met een bedoeling? Let op het woordje 'zacht' en naar wie ze daarna lacht.",
          "Boze mensen praten zelden 'zacht' en lachen er niet bij. Wat wil juf bij Ties bereiken?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar het hoe", tekst: "Niet alleen wát iemand zegt telt, maar ook hóé: juf zegt het 'zacht', ze pakt de scherf met Ties' naam, en ze lacht daarna naar hem. Allemaal vriendelijke signalen." },
            { titel: "Kijk naar het moment", tekst: "Wanneer zegt ze het? Precies als Ties naar de grond staart en zich vreselijk voelt. Haar woorden zijn dus een reactie op zíjn verdriet." },
            { titel: "Leid de bedoeling af", tekst: "Ze maakt van de ramp iets positiefs: van één kapot cadeau tweeëndertig kleine cadeautjes. En het werkt — kijk maar naar de laatste zin: Ties kijkt weer op." },
          ],
          woorden: [
            { woord: "bedoeling", uitleg: "Wat iemand met zijn woorden of daden wil bereiken. Vaak iets anders dan wat er letterlijk gezegd wordt." },
            { woord: "spottend", uitleg: "Iets zeggen om iemand uit te lachen of belachelijk te maken. Het tegenovergestelde van vriendelijk bedoeld." },
          ],
          theorie: "**Bedoelingen achter woorden — de waarom-vraag**\n\nOp de toets: *\"Waarom zegt ... dit?\"* Dan zoek je niet wat er letterlijk staat, maar wat het personage wil beréíken. Zo pak je het aan:\n\n1. **Hoe** wordt het gezegd? (zacht/hard, lachend/snauwend)\n2. **Wanneer** wordt het gezegd? (wat gebeurde er vlak ervoor?)\n3. **Wat gebeurt erna?** (heeft het effect?)\n\nHier: zacht gezegd + precies op het dieptepunt van Ties + daarna kijkt Ties weer op. Alle drie de checks wijzen dezelfde kant op. Meent juf letterlijk dat scherven fijner zijn dan een vaas? Vast niet — maar dat hoeft ook niet. Haar woorden hebben een doel, en dat doel is het antwoord.",
          voorbeelden: [
            { type: "bedoeling", tekst: "'\"Lekker weertje,\" bromde papa, terwijl de regen langs de ruiten sloeg.' → hij meent het omgekeerde; de bedoeling is een grapje over het slechte weer." },
          ],
          basiskennis: [
            { onderwerp: "Letterlijk ≠ bedoeld", uitleg: "Mensen zeggen vaak iets anders dan ze letterlijk bedoelen. Kijk naar hoe, wanneer en met welk effect iets gezegd wordt." },
          ],
          niveaus: {
            basis: "Kijk naar hóé juf het zegt ('zacht') en wat ze daarna doet (lachen naar Ties). Wat wil ze dat Ties gaat voelen?",
            simpeler: "Ties staart naar de grond en baalt vreselijk. Dan maakt juf van de scherven iets moois. Waarom zou ze dat doen, denk je?",
            nogSimpeler: "Wat zeg jij tegen een vriend die per ongeluk iets kapotmaakte en heel verdrietig kijkt?",
          },
        },
      },
      {
        q: "*\"Op de laatste schooldag mocht Ties de vaas naar school brengen.\"* — Wat zegt het woord 'mocht' over hoe de klas dit besliste?",
        options: [
          "De klas koos Ties speciaal uit voor die taak",
          "Ties dwong de klas om hem de vaas te laten brengen",
          "Ties kocht de vaas zelf",
          "Ties had de vaas per ongeluk mee",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Staat er iets over dwingen in de tekst? Kijk ook naar het woord 'mocht' — geeft dat dwang aan?",
          null,
          "De klas had wekenlang gespaard voor de vaas — die was van alle kinderen samen.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Let op het woordje 'mocht'", tekst: "'Mocht' betekent: hij kreeg toestemming. Iemand anders koos hem uit. Het was niet vanzelfsprekend — het was een gunst." },
            { titel: "Welke conclusie kun je trekken?", tekst: "De klas besliste wie de vaas mocht brengen. Ze kozen Ties — dat is een soort eer." },
            { titel: "Check met de context", tekst: "Ties loopt extra langzaam en voorzichtig. Hij voelt dat hij iets belangrijks te dragen heeft. Dat past bij iemand die speciaal gekozen is." },
          ],
          niveaus: {
            basis: "Wat betekent 'mogen' in de zin — krijg je dan toestemming, of doe je het zomaar?",
            simpeler: "Als jij iets 'mag' doen, wie besliste dat dan? Wat zegt dat over Ties?",
            nogSimpeler: "Wie koos er wie de vaas mee mocht nemen — Ties zelf of de klas?",
          },
        },
      },
      {
        q: "*\"Iedereen boog naar voren. Toen werd het doodstil.\"* — Wat gebeurt hier met de sfeer in de klas?",
        options: [
          "De sfeer slaat om: van verwachtingsvol naar geschrokken",
          "Het blijft de hele tijd even gezellig",
          "De kinderen vallen in slaap",
          "Iedereen wordt boos op juf Karin",
        ],
        answer: 0,
        evidence: "Iedereen boog naar voren. Toen werd het doodstil. Onder in de doos lagen scherven.",
        wrongHints: [
          null,
          "Lees wat er ónder in de doos ligt — blijft het dan gezellig?",
          "Betekent 'doodstil' dat iedereen slaapt, midden op een schooldag? Waaróm zegt niemand opeens meer iets?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "De sfeer vóór dit moment", tekst: "Fleur springt op en neer bij het hek, iedereen buigt nieuwsgierig naar voren. De klas kan niet wachten om het cadeau te zien: een blije, gespannen verwachting." },
            { titel: "Het kantelpunt", tekst: "'Toen werd het doodstil.' Dat ene zinnetje ís de omslag. Waarom valt iedereen stil? De volgende zin geeft het antwoord: scherven." },
            { titel: "De sfeer ná dit moment", tekst: "Hand voor de mond, staren naar de grond. De blijdschap is in één klap weg. Zo laat een schrijver een sfeer-omslag zien — zonder ooit het woord 'geschrokken' te gebruiken." },
          ],
          woorden: [
            { woord: "doodstil", uitleg: "Zó stil dat je helemaal niets meer hoort. Vaak een teken dat er iets heftigs is gebeurd." },
            { woord: "omslaan", uitleg: "Plotseling veranderen. De sfeer slaat om = de stemming verandert in één keer." },
          ],
          theorie: "**Sfeer-omslag herkennen**\n\nIn verhalen verandert de sfeer vaak op één duidelijk punt. Zo vind je dat punt:\n\n1. **Vergelijk** het gedrag vóór en ná een gebeurtenis: springen en naar voren buigen (opgewonden) tegenover zwijgen en wegkijken (geschrokken).\n2. **Zoek het signaal-zinnetje**: vaak kort en kaal — 'Toen werd het doodstil.' Korte zinnen op een spannend moment = de schrijver drukt op de pauzeknop.\n3. **Benoem beide sferen**: de toets vraagt vaak niet één sfeer, maar de verándering. Het beste antwoord noemt dus hoe het wás én hoe het wórdt.",
          voorbeelden: [
            { type: "signaal-zinnetje", tekst: "'We zongen mee met de radio. Toen ging de telefoon. Mama's gezicht werd wit.' → drie zinnen, en de sfeer kantelt van vrolijk naar ongerust." },
          ],
          basiskennis: [
            { onderwerp: "Korte zin = pauzeknop", uitleg: "Een opvallend kort zinnetje midden in een verhaal markeert vaak precies het moment waarop alles verandert." },
          ],
          niveaus: {
            basis: "Vergelijk het moment vóór het optillen van het deksel (iedereen buigt nieuwsgierig naar voren) met het moment erná. Wat verandert er?",
            simpeler: "Eerst is iedereen reuze benieuwd naar het cadeau. Dan zien ze wat er onder in de doos ligt. Wat doet dat met de stemming in de klas?",
            nogSimpeler: "Waarom wordt een hele klas opeens muisstil, denk je?",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const verhaalDiepteLezenPo = {
  id: "verhaal-diepte-lezen-po",
  title: "Verhalen en gedichten dieper lezen",
  emoji: "🎭",
  level: "groep7-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — interpreteren van verhalen en gedichten (fictie)",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
  ],
  intro:
    "\"Hoe voelt Ties zich?\" — terwijl dat nergens staat. Op de Doorstroomtoets krijg je vragen over verhalen en gedichten waarbij het antwoord tussen de regels zit. Leer gevoelens afleiden uit gedrag, ontdek door wiens ogen je een verhaal beleeft, en prik door beeldspraak heen ('haar stem was honing'). Met eigen verhaalfragmenten, een gedicht en een toets-stijl eindoefening.",
  triggerKeywords: [
    "verhaal begrijpen", "verhalen lezen", "gedicht", "gedichten", "poëzie",
    "beeldspraak", "vergelijking", "figuurlijk", "letterlijk en figuurlijk",
    "perspectief", "ik-verhaal", "verteller", "door wiens ogen",
    "gevoelens personage", "tussen de regels lezen", "sfeer",
    "fictie lezen", "begrijpend lezen", "doorstroomtoets lezen", "cito begrijpend lezen",
  ],
  chapters,
  steps,
};

export default verhaalDiepteLezenPo;
