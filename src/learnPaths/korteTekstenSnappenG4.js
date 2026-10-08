// Leerpad: Begrijpend lezen — korte teksten snappen (groep 4).
// Mark 12 aug 2026: "alles met 'hieraan bouwen we' oppakken" — groep 4 had
// nog géén begrijpend-lezen-pad (alles start bij groep 5+). Dit pad volgt de
// tekstlengte-ladder (memory: begrijpend lezen opbouwend): van één zin naar
// een tekstje van zes zinnen. Vragen: wie/wat/waar → volgorde → waarom.

const stepEmojis = ["👀", "📖", "🕵️", "🔢", "🏆"];

const chapters = [
  { letter: "A", title: "Eén zin goed lezen", emoji: "👀", from: 0, to: 0 },
  { letter: "B", title: "Drie zinnen — wie, wat, waar", emoji: "📖", from: 1, to: 1 },
  { letter: "C", title: "Het antwoord staat in de tekst", emoji: "🕵️", from: 2, to: 2 },
  { letter: "D", title: "Wat gebeurde eerst?", emoji: "🔢", from: 3, to: 3 },
  { letter: "E", title: "Een echt tekstje", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Eén zin ───────────────────────────────────────────
  {
    title: "Eén zin goed lezen — wie doet wat?",
    explanation:
      "Goed lezen begint met **één zin echt snappen**.\n\nStel jezelf twee vragen:\n• **Wie** gaat de zin over?\n• **Wat** doet die?\n\nVoorbeeld: *Opa plukt appels in de tuin.*\n• Wie? → Opa.\n• Wat doet hij? → Appels plukken.\n• Waar? → In de tuin.\n\nLees rustig. Lees de zin nog een keer als je twijfelt. Dat is niet dom — dat is juist slim!",
    checks: [
      {
        q: "*De poes slaapt op de bank.*\n\n**Wie** gaat deze zin over?",
        options: ["de poes", "de bank", "het slapen", "de kamer"],
        answer: 0,
        wrongHints: [null, "Daar ligt iemand óp — maar wie?", "Dat is wat er gebeurt, niet wie het doet.", "Die staat niet in de zin."],
        uitlegPad: {
          stappen: [{ titel: "Wie-vraag", tekst: "Vraag: wie slaapt er? **De poes.** De zin gaat over de poes." }],
          niveaus: { basis: "De zin gaat over de poes.", simpeler: "Wie slaapt er? De…", nogSimpeler: "de poes" },
        },
      },
      {
        q: "*Noor fietst naar de bakker.*\n\n**Waar** gaat Noor naartoe?",
        options: ["naar de bakker", "naar school", "naar huis", "naar de winkel voor speelgoed"],
        answer: 0,
        wrongHints: [null, "Lees de zin nog eens — staat dat er echt?", "Lees de zin nog eens — staat dat er echt?", "Er staat wel een winkel, maar welke?"],
        uitlegPad: {
          stappen: [{ titel: "Waar-vraag", tekst: "Er staat: *naar de bakker*. Dus daar gaat Noor naartoe. Het antwoord staat gewoon in de zin!" }],
          niveaus: { basis: "Noor fietst naar de bakker.", simpeler: "Lees: Noor fietst naar de…", nogSimpeler: "naar de bakker" },
        },
      },
      {
        q: "*In de winter draagt Tim een dikke jas.*\n\n**Wanneer** draagt Tim die jas?",
        options: ["in de winter", "in de zomer", "elke dag", "op zijn verjaardag"],
        answer: 0,
        wrongHints: [null, "Lees nog eens — welk seizoen staat er?", "Staat dat er echt? Kijk goed.", "Daar zegt de zin niets over."],
        uitlegPad: {
          stappen: [{ titel: "Wanneer-vraag", tekst: "De zin begint met: *In de winter*. Dat is het antwoord op de wanneer-vraag." }],
          woorden: [{ woord: "seizoen", uitleg: "Een deel van het jaar: lente, zomer, herfst of winter." }],
          niveaus: { basis: "In de winter.", simpeler: "De zin begint ermee: In de…", nogSimpeler: "in de winter" },
        },
      },
      {
        q: "*Sam geeft de vissen elke ochtend eten.*\n\n**Wat** doet Sam?",
        options: ["de vissen eten geven", "zelf ontbijten", "de vissen tellen", "het water verversen"],
        answer: 0,
        wrongHints: [null, "Wie krijgt er eten in de zin?", "Staat dat er echt?", "Staat dat er echt?"],
        uitlegPad: {
          stappen: [{ titel: "Wat-vraag", tekst: "Sam **geeft de vissen eten**. Dat staat precies zo in de zin." }],
          niveaus: { basis: "Sam geeft de vissen eten.", simpeler: "Sam geeft de vissen…", nogSimpeler: "eten geven" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*Papa leest een boek in de tuin.*\n\n**Wat** doet papa?",
        options: ["een boek lezen", "in de tuin werken", "de krant lezen", "een dutje doen"],
        answer: 0,
        wrongHints: [null, "Hij is wel in de tuin — maar wat doet hij daar?", "Lees goed: wát leest hij?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat-vraag",
              tekst: "Papa **leest een boek**. Dat staat precies zo in de zin. *In de tuin* zegt alleen waar hij is.",
            },
          ],
          niveaus: {
            basis: "Papa leest een boek.",
            simpeler: "Papa leest een…",
            nogSimpeler: "een boek lezen",
          },
        },
      },
      {
        q: "*De juf schrijft een woord op het bord.*\n\n**Wie** schrijft er op het bord?",
        options: ["de juf", "de meester", "een kind", "het bord"],
        answer: 0,
        wrongHints: [null, null, "Staat die in de zin?", "Daar schrijft iemand óp — maar wie schrijft?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Wie-vraag",
              tekst: "Vraag: wie schrijft er? **De juf.** Het bord is de plek waar ze op schrijft.",
            },
          ],
          niveaus: {
            basis: "De juf schrijft op het bord.",
            simpeler: "Wie schrijft er? De…",
            nogSimpeler: "de juf",
          },
        },
      },
      {
        q: "*Ali bouwt een toren van blokken.*\n\n**Wat** doet Ali?",
        options: ["een toren bouwen", "de blokken opruimen", "een tekening maken", "buiten spelen"],
        answer: 0,
        wrongHints: [
          null,
          "Er staan wel blokken in de zin — maar wat doet hij ermee?",
          null,
          "Staat dat er echt?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat-vraag",
              tekst: "Ali **bouwt een toren**. Dat staat precies zo in de zin. De blokken zijn waar hij mee bouwt.",
            },
          ],
          niveaus: {
            basis: "Ali bouwt een toren.",
            simpeler: "Ali bouwt een…",
            nogSimpeler: "een toren bouwen",
          },
        },
      },
    ],
  },

  // ─── B. Drie zinnen ───────────────────────────────────────
  {
    title: "Drie zinnen — wie, wat, waar",
    explanation:
      "Nu een stapje hoger: **drie zinnen achter elkaar**.\n\nDe zinnen horen bij elkaar. Samen vertellen ze een mini-verhaaltje.\n\nVoorbeeld:\n*Lot heeft een hond. De hond heet Max. Max kan heel hoog springen.*\n\n• Wie? → Lot en haar hond Max.\n• Wat kan Max? → Heel hoog springen.\n\n**Tip**: lees eerst alles rustig. Beantwoord de vraag pas daarna. Het antwoord staat bijna altijd gewoon in de tekst.",
    checks: [
      {
        q: "*Jip gaat naar het zwembad. Hij neemt zijn zwemband mee. In het water speelt hij met zijn vriend Daan.*\n\n**Waar** is Jip?",
        options: ["in het zwembad", "op school", "bij Daan thuis", "in bad"],
        answer: 0,
        wrongHints: [null, "Lees de eerste zin nog eens.", "Daan is er wél — maar waar zijn ze samen?", "Bijna — maar het is groter dan een bad."],
        uitlegPad: {
          stappen: [{ titel: "Zoek in de tekst", tekst: "Eerste zin: *Jip gaat naar het zwembad.* Daar is hij dus." }],
          niveaus: { basis: "Jip is in het zwembad.", simpeler: "Zin 1 zegt waar hij heen gaat.", nogSimpeler: "in het zwembad" },
        },
      },
      {
        q: "*Jip gaat naar het zwembad. Hij neemt zijn zwemband mee. In het water speelt hij met zijn vriend Daan.*\n\n**Met wie** speelt Jip?",
        options: ["met Daan", "met zijn zus", "met de badmeester", "alleen"],
        answer: 0,
        wrongHints: [null, "Lees de laatste zin nog eens — welke naam staat er?", "Die staat niet in de tekst.", "Er staat wél iemand bij hem."],
        uitlegPad: {
          stappen: [{ titel: "Zoek de naam", tekst: "Laatste zin: *speelt hij met zijn vriend **Daan**.* Daar staat het antwoord." }],
          niveaus: { basis: "Jip speelt met Daan.", simpeler: "Welke naam staat in de laatste zin?", nogSimpeler: "met Daan" },
        },
      },
      {
        q: "*Oma bakt pannenkoeken. Ze doet er appel in. De hele keuken ruikt lekker.*\n\n**Wat** bakt oma?",
        options: ["pannenkoeken", "koekjes", "appeltaart", "brood"],
        answer: 0,
        wrongHints: [null, "Lees de eerste zin nog eens.", "Er zit wel appel in — maar waarin?", "Staat dat er echt?"],
        uitlegPad: {
          stappen: [{ titel: "Niet in de war raken", tekst: "Er staat *appel* in de tekst, maar oma bakt geen appeltaart. Zin 1 zegt het echte antwoord: **pannenkoeken** (met appel erin)." }],
          theorie: "Let op: een fout antwoord lijkt vaak op een woord uit de tekst. Lees daarom altijd de hele zin, niet één los woord.",
          niveaus: { basis: "Oma bakt pannenkoeken met appel.", simpeler: "Zin 1: Oma bakt…", nogSimpeler: "pannenkoeken" },
        },
      },
      {
        q: "*Milan zoekt zijn schoen. Hij kijkt onder zijn bed. Daar ligt de schoen, naast een oude sok.*\n\n**Waar** vindt Milan zijn schoen?",
        options: ["onder zijn bed", "in de kast", "naast de deur", "in de sok"],
        answer: 0,
        wrongHints: [null, "Lees zin 2 en 3 nog eens.", "Staat dat er echt?", "De sok ligt er wel — maar waar liggen ze allebei?"],
        uitlegPad: {
          stappen: [{ titel: "Twee zinnen samen", tekst: "Zin 2: hij kijkt **onder zijn bed**. Zin 3: **daar** ligt de schoen. 'Daar' wijst terug naar: onder het bed." }],
          woorden: [{ woord: "daar", uitleg: "Een woord dat terugwijst naar een plek die al genoemd is." }],
          niveaus: { basis: "De schoen ligt onder het bed.", simpeler: "'Daar' = de plek uit zin 2.", nogSimpeler: "onder zijn bed" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*Sara heeft een konijn. Het konijn heet Snuf. Snuf eet graag wortels.*\n\n**Hoe heet** het konijn?",
        options: ["Snuf", "Sara", "Max", "Wortel"],
        answer: 0,
        wrongHints: [
          null,
          "Zij heeft het konijn — maar hoe heet het konijn zelf?",
          "Lees zin 2 nog eens.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek de naam",
              tekst: "Zin 2: *Het konijn heet **Snuf**.* Daar staat het antwoord.",
            },
          ],
          niveaus: {
            basis: "Het konijn heet Snuf.",
            simpeler: "Zin 2: Het konijn heet…",
            nogSimpeler: "Snuf",
          },
          theorie: "Pas op: in de tekst staan twee namen. Sara is van wie het konijn is. Lees de hele zin, dan weet je welke naam bij het konijn hoort.",
        },
      },
      {
        q: "*Sara heeft een konijn. Het konijn heet Snuf. Snuf eet graag wortels.*\n\n**Wat** eet Snuf graag?",
        options: ["wortels", "appels", "sla", "gras"],
        answer: 0,
        wrongHints: [null, "Lees de laatste zin nog eens.", null, "Staat dat er echt?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek in de tekst",
              tekst: "Laatste zin: *Snuf eet graag **wortels**.* Daar staat het antwoord.",
            },
          ],
          niveaus: {
            basis: "Snuf eet graag wortels.",
            simpeler: "Zin 3: Snuf eet graag…",
            nogSimpeler: "wortels",
          },
        },
      },
      {
        q: "*Het is mooi weer. Ravi gaat met papa naar het strand. Daar bouwen ze een groot zandkasteel.*\n\n**Wat** bouwen Ravi en papa?",
        options: ["een zandkasteel", "een hut", "een toren van blokken", "een sneeuwpop"],
        answer: 0,
        wrongHints: [null, "Lees de laatste zin nog eens.", null, "Is het daar wel koud genoeg voor?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Twee zinnen samen",
              tekst: "Zin 2: ze gaan naar het strand. Zin 3: **daar** bouwen ze een groot **zandkasteel**.",
            },
          ],
          niveaus: {
            basis: "Ze bouwen een zandkasteel.",
            simpeler: "Zin 3: Daar bouwen ze een groot…",
            nogSimpeler: "een zandkasteel",
          },
        },
      },
      {
        q: "*Juf Anne heeft een verrassing. Ze leest een spannend boek voor. De kinderen luisteren heel stil.*\n\n**Wie** leest het boek voor?",
        options: ["juf Anne", "de kinderen", "de meester", "een kind uit de klas"],
        answer: 0,
        wrongHints: [null, "Die luisteren juist — wie leest er dan?", null, "Staat dat er echt?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Wie is 'ze'?",
              tekst: "Zin 1 gaat over **juf Anne**. Zin 2 zegt: *Ze leest een spannend boek voor.* 'Ze' wijst terug naar juf Anne.",
            },
          ],
          niveaus: {
            basis: "Juf Anne leest voor.",
            simpeler: "'Ze' in zin 2 = de juf uit zin 1.",
            nogSimpeler: "juf Anne",
          },
          woorden: [
            {
              woord: "ze",
              uitleg: "Een woordje dat terugwijst naar iemand die al genoemd is.",
            },
          ],
        },
      },
      {
        q: "*Juf Anne heeft een verrassing. Ze leest een spannend boek voor. De kinderen luisteren heel stil.*\n\n**Wat** doen de kinderen?",
        options: ["heel stil luisteren", "hard lachen", "zelf een boek lezen", "buiten spelen"],
        answer: 0,
        wrongHints: [null, "Lees de laatste zin nog eens.", "Wie leest het boek eigenlijk?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek in de tekst",
              tekst: "Laatste zin: *De kinderen **luisteren heel stil**.* Daar staat het antwoord.",
            },
          ],
          niveaus: {
            basis: "De kinderen luisteren heel stil.",
            simpeler: "Zin 3: De kinderen luisteren…",
            nogSimpeler: "stil luisteren",
          },
        },
      },
    ],
  },

  // ─── C. Antwoord opzoeken ─────────────────────────────────
  {
    title: "Het antwoord staat in de tekst — zoek maar!",
    explanation:
      "Op de toets krijg je een tekst met vragen. Het grote geheim: **het antwoord staat bijna altijd in de tekst**.\n\nZo doe je het:\n1. Lees de **vraag** goed. Welk woord is belangrijk?\n2. **Zoek** dat woord (of een woord dat erop lijkt) in de tekst.\n3. Lees die zin **helemaal**.\n4. Kies het antwoord dat er echt staat.\n\nNiet gokken uit je hoofd — terugkijken in de tekst mag altijd. Dat is precies wat goede lezers doen!",
    checks: [
      {
        q: "*De egel slaapt de hele winter. Dat heet een winterslaap. In de lente wordt hij weer wakker. Dan zoekt hij meteen eten.*\n\nHoe heet het als een egel de hele winter slaapt?",
        options: ["een winterslaap", "een middagdutje", "een nachtrust", "een lenteslaap"],
        answer: 0,
        wrongHints: [null, "Dat is kort slapen op de dag — dit duurt véél langer.", "Dit duurt langer dan één nacht.", "Kijk goed: in welk seizoen slaapt hij?"],
        uitlegPad: {
          stappen: [{ titel: "Zoek het woord", tekst: "De vraag gaat over *de hele winter slapen*. Zin 2 zegt: *Dat heet een **winterslaap**.* Daar staat het antwoord letterlijk." }],
          niveaus: { basis: "Het heet een winterslaap.", simpeler: "Zin 2 begint met: Dat heet een…", nogSimpeler: "winterslaap" },
        },
      },
      {
        q: "*De egel slaapt de hele winter. Dat heet een winterslaap. In de lente wordt hij weer wakker. Dan zoekt hij meteen eten.*\n\nWat doet de egel als hij wakker wordt?",
        options: ["eten zoeken", "verder slapen", "een nest bouwen", "zwemmen"],
        answer: 0,
        wrongHints: [null, "Hij is net wakker — lees de laatste zin.", "Staat dat in de tekst?", "Staat dat in de tekst?"],
        uitlegPad: {
          stappen: [{ titel: "Laatste zin lezen", tekst: "*Dan zoekt hij meteen eten.* 'Dan' = als hij wakker is. Antwoord: eten zoeken." }],
          niveaus: { basis: "Hij zoekt meteen eten.", simpeler: "De laatste zin zegt wat hij doet.", nogSimpeler: "eten zoeken" },
        },
      },
      {
        q: "*Bij de bibliotheek mag je boeken lenen. Dat is gratis voor kinderen. Je mag een boek drie weken houden. Dan breng je het terug.*\n\nHoe lang mag je een boek houden?",
        options: ["drie weken", "drie dagen", "één week", "zo lang je wilt"],
        answer: 0,
        wrongHints: [null, "Kijk goed: weken of dagen?", "Lees het getal in de tekst nog eens.", "Er staat wél een tijd in de tekst."],
        uitlegPad: {
          stappen: [{ titel: "Zoek het getal", tekst: "In de tekst staat: *drie **weken** houden*. Let goed op: weken, geen dagen. Zulke woordjes zijn belangrijk!" }],
          niveaus: { basis: "Drie weken.", simpeler: "Zoek de zin met 'houden' erin.", nogSimpeler: "drie weken" },
        },
      },
      {
        q: "*Bij de bibliotheek mag je boeken lenen. Dat is gratis voor kinderen. Je mag een boek drie weken houden. Dan breng je het terug.*\n\nWat kost het lenen voor kinderen?",
        options: ["niets, het is gratis", "één euro", "drie euro", "dat staat niet in de tekst"],
        answer: 0,
        wrongHints: [null, "Er staat een woord in de tekst dat 'niets betalen' betekent.", "Staat er ergens een bedrag?", "Jawel — lees zin 2 nog eens."],
        uitlegPad: {
          stappen: [{ titel: "Moeilijk woord", tekst: "Zin 2: *Dat is **gratis** voor kinderen.* Gratis betekent: je hoeft niets te betalen." }],
          woorden: [{ woord: "gratis", uitleg: "Je hoeft er geen geld voor te betalen." }],
          niveaus: { basis: "Gratis = niets betalen.", simpeler: "Wat betekent 'gratis'?", nogSimpeler: "niets" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*Een slak draagt zijn huisje op zijn rug. Als het gevaarlijk is, kruipt hij erin. Slakken houden van nat weer. Daarom zie je ze vaak na een regenbui.*\n\nWat doet een slak als het **gevaarlijk** is?",
        options: [
          "in zijn huisje kruipen",
          "heel hard wegrennen",
          "onder een steen kruipen",
          "zijn huisje achterlaten",
        ],
        answer: 0,
        wrongHints: [null, "Zoek het woord 'gevaarlijk' in de tekst.", null, "Staat dat in de tekst?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek het woord",
              tekst: "De vraag gaat over *gevaarlijk*. Zin 2 zegt: *Als het gevaarlijk is, **kruipt hij erin**.* 'Erin' = in zijn huisje.",
            },
          ],
          niveaus: {
            basis: "Hij kruipt in zijn huisje.",
            simpeler: "Zoek de zin met 'gevaarlijk'.",
            nogSimpeler: "in zijn huisje",
          },
          woorden: [
            {
              woord: "gevaarlijk",
              uitleg: "Als er iets kan gebeuren waardoor je pijn krijgt of schade.",
            },
          ],
        },
      },
      {
        q: "*Op woensdag gaat Yara naar zwemles. De les begint om drie uur. Ze moet haar badpak en een handdoek meenemen.*\n\nWat moet Yara **meenemen**?",
        options: [
          "een badpak en een handdoek",
          "een badpak en een zwembril",
          "een handdoek en een bal",
          "een zwembril en een bal",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Lees de laatste zin nog eens — wat staat er naast het badpak?",
          null,
          "Staat dat in de tekst?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek het woord",
              tekst: "De vraag gaat over *meenemen*. De laatste zin zegt: *haar **badpak** en een **handdoek** meenemen*. Let op: allebei moeten kloppen!",
            },
          ],
          niveaus: {
            basis: "Een badpak en een handdoek.",
            simpeler: "Zoek de zin met 'meenemen'.",
            nogSimpeler: "badpak en handdoek",
          },
        },
      },
    ],
  },

  // ─── D. Volgorde ──────────────────────────────────────────
  {
    title: "Wat gebeurde eerst? — de volgorde",
    explanation:
      "In een verhaal gebeuren dingen **na elkaar**: eerst dit, dan dat.\n\nWoorden die je helpen:\n• **eerst** — dit gebeurt als eerste\n• **dan** / **daarna** — dit komt later\n• **ten slotte** — dit komt op het laatst\n\nVoorbeeld:\n*Eerst pak ik mijn tas. Daarna doe ik mijn jas aan. Dan stap ik op de fiets.*\n\nVraag: wat doe ik het eerst? → Mijn tas pakken. Het woordje **eerst** verklapt het.",
    checks: [
      {
        q: "*Eerst was het ei. Toen kwam er een kuiken uit. Het kuiken groeide en werd een kip.*\n\nWat was er het **eerst**?",
        options: ["het ei", "het kuiken", "de kip", "het nest"],
        answer: 0,
        wrongHints: [null, "Die kwam ergens úít — waaruit?", "Die was er op het laatst.", "Die staat niet in de tekst."],
        uitlegPad: {
          stappen: [{ titel: "Zoek 'eerst'", tekst: "*Eerst was het ei.* Het woordje **eerst** zegt: dit was het begin." }],
          niveaus: { basis: "Het ei was er het eerst.", simpeler: "Welke zin begint met 'Eerst'?", nogSimpeler: "het ei" },
        },
      },
      {
        q: "*Roos maakt limonade. Eerst pakt ze een glas. Dan doet ze er siroop in. Daarna vult ze het glas met water.*\n\nWat doet Roos **na** de siroop?",
        options: ["water in het glas doen", "een glas pakken", "de limonade opdrinken", "een rietje pakken"],
        answer: 0,
        wrongHints: [null, "Dat deed ze al vóór de siroop.", "Staat dat in de tekst?", "Staat dat in de tekst?"],
        uitlegPad: {
          stappen: [{ titel: "Stapjes volgen", tekst: "1. glas pakken → 2. siroop erin → 3. **water erbij**. Het woord *daarna* zegt: dit komt na de siroop." }],
          niveaus: { basis: "Na de siroop komt het water.", simpeler: "Glas → siroop → …?", nogSimpeler: "water" },
        },
      },
      {
        q: "*Het regende hard. Daarom deed Finn zijn laarzen aan. Toen sprong hij in alle plassen.*\n\nWat gebeurde er het **laatst**?",
        options: ["Finn sprong in de plassen", "het begon te regenen", "Finn deed zijn laarzen aan", "Finn ging naar binnen"],
        answer: 0,
        wrongHints: [null, "Daar begon het juist mee.", "Dat deed hij daarvóór al.", "Staat dat in de tekst?"],
        uitlegPad: {
          stappen: [{ titel: "Op een rijtje", tekst: "1. regen → 2. laarzen aan → 3. **in de plassen springen**. Het woordje *toen* zegt: dit kwam daarna." }],
          niveaus: { basis: "Het laatst: in de plassen springen.", simpeler: "Regen → laarzen → …?", nogSimpeler: "springen" },
        },
      },
      {
        q: "Welk woordje vertelt dat iets **op het laatst** gebeurt?",
        options: ["ten slotte", "eerst", "gisteren", "misschien"],
        answer: 0,
        wrongHints: [null, "Dat is juist het begin.", "Dat zegt wanneer, niet in welke volgorde.", "Dat zegt dat iets niet zeker is."],
        uitlegPad: {
          stappen: [{ titel: "Volgorde-woorden", tekst: "**eerst** = begin, **daarna/dan** = midden, **ten slotte** = einde." }],
          niveaus: { basis: "'Ten slotte' hoort bij het einde.", simpeler: "Eerst… daarna… ten slotte!", nogSimpeler: "ten slotte" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*Eerst giet Bas water in de gieter. Daarna geeft hij de plant water. Ten slotte zet hij de gieter weg.*\n\nWat doet Bas **ten slotte**?",
        options: [
          "de gieter wegzetten",
          "de plant water geven",
          "water in de gieter gieten",
          "de plant in de zon zetten",
        ],
        answer: 0,
        wrongHints: [null, "Dat komt in het midden.", "Dat deed hij als eerste.", "Staat dat in de tekst?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek 'ten slotte'",
              tekst: "*Ten slotte zet hij de gieter weg.* **Ten slotte** = op het laatst.",
            },
          ],
          niveaus: {
            basis: "Op het laatst zet Bas de gieter weg.",
            simpeler: "Welke zin begint met 'Ten slotte'?",
            nogSimpeler: "gieter wegzetten",
          },
        },
      },
      {
        q: "*Fleur poetst eerst haar tanden. Dan trekt ze haar pyjama aan. Daarna kruipt ze in bed.*\n\nWat doet Fleur het **eerst**?",
        options: ["haar tanden poetsen", "haar pyjama aantrekken", "in bed kruipen", "een boek lezen"],
        answer: 0,
        wrongHints: [
          null,
          "Het woordje 'dan' staat in die zin — is dat het begin?",
          null,
          "Staat dat in de tekst?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek 'eerst'",
              tekst: "Het woordje **eerst** staat hier midden in de zin: *Fleur poetst **eerst** haar tanden.* Dus dat doet ze als eerste.",
            },
          ],
          niveaus: {
            basis: "Eerst poetst Fleur haar tanden.",
            simpeler: "In welke zin staat 'eerst'?",
            nogSimpeler: "tanden poetsen",
          },
        },
      },
      {
        q: "*Het zaadje ligt in de grond. Dan komt er een klein plantje uit. Daarna groeit er een mooie bloem.*\n\nWat komt er **na** het kleine plantje?",
        options: ["een mooie bloem", "het zaadje", "een hoge boom", "een appel"],
        answer: 0,
        wrongHints: [null, null, "Dat was er juist vóór het plantje.", "Staat dat in de tekst?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Stapjes volgen",
              tekst: "1. zaadje → 2. klein plantje → 3. **mooie bloem**. Het woord *daarna* zegt: dit komt na het plantje.",
            },
          ],
          niveaus: {
            basis: "Na het plantje komt de bloem.",
            simpeler: "Zaadje → plantje → …?",
            nogSimpeler: "een bloem",
          },
        },
      },
      {
        q: "*Eerst pakt Kim een boterham. Dan smeert ze er boter op. Daarna doet ze er kaas op. Ten slotte eet ze hem op.*\n\nWat doet Kim het **laatst**?",
        options: [
          "de boterham opeten",
          "kaas op de boterham doen",
          "boter op de boterham smeren",
          "een boterham pakken",
        ],
        answer: 0,
        wrongHints: [null, "Dat komt net daarvóór.", null, "Daar begint het juist mee."],
        uitlegPad: {
          stappen: [
            {
              titel: "Op een rijtje",
              tekst: "1. boterham pakken → 2. boter → 3. kaas → 4. **opeten**. Het woordje *ten slotte* zegt: dit is het laatst.",
            },
          ],
          niveaus: {
            basis: "Het laatst eet Kim de boterham op.",
            simpeler: "Welke zin begint met 'Ten slotte'?",
            nogSimpeler: "opeten",
          },
        },
      },
      {
        q: "*Het begon te sneeuwen. Toen maakten Ali en Noa een sneeuwpop. Daarna gaven ze hem een wortel als neus.*\n\nWat gebeurde er **na** het maken van de sneeuwpop?",
        options: [
          "de sneeuwpop kreeg een wortel als neus",
          "het begon te sneeuwen",
          "Ali en Noa gingen sleeën",
          "Ali en Noa gingen naar binnen",
        ],
        answer: 0,
        wrongHints: [null, "Daar begon het juist mee.", "Staat dat in de tekst?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Op een rijtje",
              tekst: "1. sneeuw → 2. sneeuwpop maken → 3. **wortel als neus**. Het woordje *daarna* zegt: dit kwam na de sneeuwpop.",
            },
          ],
          niveaus: {
            basis: "Daarna kreeg de sneeuwpop een neus.",
            simpeler: "Sneeuw → sneeuwpop → …?",
            nogSimpeler: "een wortel als neus",
          },
        },
      },
      {
        q: "*Eerst doet Tom zijn sokken aan. Daarna doet hij zijn schoenen aan. Ten slotte strikt hij zijn veters.*\n\nWat doet Tom **vóór** hij zijn schoenen aandoet?",
        options: ["zijn sokken aandoen", "zijn veters strikken", "zijn jas aandoen", "zijn tas pakken"],
        answer: 0,
        wrongHints: [null, "Dat doet hij juist ná de schoenen.", null, "Staat dat in de tekst?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Stapjes volgen",
              tekst: "1. **sokken** → 2. schoenen → 3. veters. Vóór de schoenen komen de sokken. Het woordje *eerst* verklapt het.",
            },
          ],
          niveaus: {
            basis: "Vóór de schoenen: sokken aan.",
            simpeler: "… → schoenen → veters. Wat staat vooraan?",
            nogSimpeler: "sokken",
          },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — een echt tekstje",
    explanation:
      "Nu alles samen! Je leest een **echt tekstje** van zes zinnen — net zo lang als op school.\n\nWeet je nog?\n• Lees eerst rustig de hele tekst.\n• Het antwoord staat in de tekst — zoek het op.\n• Let op volgorde-woorden: eerst, daarna, ten slotte.\n• Twijfel je? Lees de zin nog een keer.\n\nHier komt de tekst — hij komt bij elke vraag terug:\n\n*Vandaag is de schoolreis. Eerst rijdt de bus naar de dierentuin. Daar ziet groep 4 de apen en de olifanten. Lena vindt de apen het leukst, want ze doen gek. Daarna eet iedereen een broodje in het gras. Ten slotte rijdt de bus weer terug naar school.*",
    checks: [
      {
        q: "*Vandaag is de schoolreis. Eerst rijdt de bus naar de dierentuin. Daar ziet groep 4 de apen en de olifanten. Lena vindt de apen het leukst, want ze doen gek. Daarna eet iedereen een broodje in het gras. Ten slotte rijdt de bus weer terug naar school.*\n\n**Waar** gaat de schoolreis naartoe?",
        options: ["naar de dierentuin", "naar het zwembad", "naar het bos", "naar een speeltuin"],
        answer: 0,
        wrongHints: [null, "Lees zin 2 nog eens.", "Staat dat in de tekst?", "Staat dat in de tekst?"],
        uitlegPad: {
          stappen: [{ titel: "Zoek de plek", tekst: "Zin 2: *de bus rijdt naar de **dierentuin**.* Daar gaat de schoolreis heen." }],
          niveaus: { basis: "Naar de dierentuin.", simpeler: "Waar rijdt de bus heen?", nogSimpeler: "de dierentuin" },
        },
      },
      {
        q: "*Vandaag is de schoolreis. Eerst rijdt de bus naar de dierentuin. Daar ziet groep 4 de apen en de olifanten. Lena vindt de apen het leukst, want ze doen gek. Daarna eet iedereen een broodje in het gras. Ten slotte rijdt de bus weer terug naar school.*\n\n**Waarom** vindt Lena de apen het leukst?",
        options: ["omdat ze gek doen", "omdat ze groot zijn", "omdat ze kunnen vliegen", "dat staat niet in de tekst"],
        answer: 0,
        wrongHints: [null, "Dat past beter bij de olifanten.", "Kunnen apen dat?", "Jawel — kijk naar het woordje 'want'."],
        uitlegPad: {
          stappen: [{ titel: "Het woordje 'want'", tekst: "*Lena vindt de apen het leukst, **want** ze doen gek.* Na 'want' komt de reden. Waarom-vraag? Zoek 'want' of 'omdat'!" }],
          woorden: [{ woord: "want", uitleg: "Na dit woordje komt de reden waarom iets zo is." }],
          niveaus: { basis: "De reden staat na 'want': ze doen gek.", simpeler: "…want ze doen…?", nogSimpeler: "gek" },
        },
      },
      {
        q: "*Vandaag is de schoolreis. Eerst rijdt de bus naar de dierentuin. Daar ziet groep 4 de apen en de olifanten. Lena vindt de apen het leukst, want ze doen gek. Daarna eet iedereen een broodje in het gras. Ten slotte rijdt de bus weer terug naar school.*\n\nWat doet groep 4 **ná** het kijken naar de dieren?",
        options: ["een broodje eten", "naar huis gaan", "zwemmen", "nog een keer naar de apen"],
        answer: 0,
        wrongHints: [null, "Staat dat er echt? Kijk wat er na de dieren komt.", "Staat dat in de tekst?", "Staat dat in de tekst?"],
        uitlegPad: {
          stappen: [{ titel: "Volgorde-woord 'daarna'", tekst: "*Daarna eet iedereen een broodje.* Het woordje **daarna** zegt: dit komt na de dieren." }],
          niveaus: { basis: "Na de dieren: broodje eten.", simpeler: "Welke zin begint met 'Daarna'?", nogSimpeler: "broodje eten" },
        },
      },
      {
        q: "*Vandaag is de schoolreis. Eerst rijdt de bus naar de dierentuin. Daar ziet groep 4 de apen en de olifanten. Lena vindt de apen het leukst, want ze doen gek. Daarna eet iedereen een broodje in het gras. Ten slotte rijdt de bus weer terug naar school.*\n\nHoe **eindigt** de schoolreis?",
        options: ["de bus rijdt terug naar school", "iedereen blijft slapen", "ze gaan nog naar het zwembad", "Lena koopt een knuffelaap"],
        answer: 0,
        wrongHints: [null, "Staat dat in de tekst?", "Staat dat in de tekst?", "Leuk bedacht — maar staat het er?"],
        uitlegPad: {
          stappen: [{ titel: "'Ten slotte' = het einde", tekst: "*Ten slotte rijdt de bus weer terug naar school.* 'Ten slotte' verklapt: dit is het einde." }],
          theorie: "Kies nooit een antwoord omdat het leuk klinkt — kies wat er écht in de tekst staat.",
          niveaus: { basis: "Het einde: terug naar school.", simpeler: "Welke zin begint met 'Ten slotte'?", nogSimpeler: "terug naar school" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*Vandaag is de schoolreis. Eerst rijdt de bus naar de dierentuin. Daar ziet groep 4 de apen en de olifanten. Lena vindt de apen het leukst, want ze doen gek. Daarna eet iedereen een broodje in het gras. Ten slotte rijdt de bus weer terug naar school.*\n\n**Waarmee** gaat groep 4 naar de dierentuin?",
        options: ["met de bus", "met de trein", "met de fiets", "lopend"],
        answer: 0,
        wrongHints: [null, "Lees zin 2 nog eens.", null, "Staat dat in de tekst?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek de dierentuin",
              tekst: "Zin 2: *Eerst rijdt de **bus** naar de dierentuin.* Ze gaan dus met de bus.",
            },
          ],
          niveaus: {
            basis: "Met de bus.",
            simpeler: "Zin 2: Eerst rijdt de… naar de dierentuin.",
            nogSimpeler: "de bus",
          },
          woorden: [
            {
              woord: "waarmee",
              uitleg: "Een vraagwoord: met welk ding? Bijvoorbeeld met de fiets of met de auto.",
            },
          ],
          theorie: "Het antwoord staat in de tekst. Zoek de zin waarin de dierentuin voor het eerst genoemd wordt.",
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const korteTekstenSnappenG4 = {
  id: "korte-teksten-snappen-g4",
  title: "Korte teksten snappen (groep 4)",
  emoji: "📖",
  level: "groep4-5",
  subject: "begrijpend-lezen",
  referentieNiveau: "po-1F",
  sloThema: "Begrijpend lezen — start: korte teksten, wie/wat/waar, volgorde, reden (groep 4)",
  prerequisites: [],
  intro:
    "Eerste stappen begrijpend lezen: van één zin naar een echt tekstje. Wie, wat, waar — het antwoord opzoeken — en wat gebeurde eerst? Voor groep 4. ~15 min.",
  triggerKeywords: [
    "begrijpend lezen", "korte teksten", "tekst snappen", "wie wat waar",
    "volgorde", "eerst daarna", "groep 4", "lezen groep 4",
  ],
  chapters,
  steps,
};

export default korteTekstenSnappenG4;
