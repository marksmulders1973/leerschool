// Leerpad: Plattegrond & legenda lezen — groep 7-8 PO.
// Doorstroomtoets-onderdeel STUDIEVAARDIGHEDEN (sloThema-prefix bepaalt pijler).
// Plattegrond (bovenaanzicht), legenda/symbolen, route & windrichting.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Wat is een plattegrond?", emoji: "🗺️", from: 0, to: 0 },
  { letter: "B", title: "De legenda (symbolen)", emoji: "🔣", from: 1, to: 1 },
  { letter: "C", title: "Route & windrichting", emoji: "🧭", from: 2, to: 2 },
  { letter: "D", title: "In het echt: zoek de weg", emoji: "🛍️", from: 3, to: 3 },
];

const steps = [
  // ─── A. Wat is een plattegrond ────────────────────────────
  {
    title: "Wat is een plattegrond?",
    explanation:
      "Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt).\n\n" +
      "Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin.\n\n" +
      "Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.",
    checks: [
      {
        q: "Wat is een plattegrond?",
        options: [
          "een tekening van een gebouw of gebied, van bovenaf",
          "een foto van de voorkant",
          "een lijst met namen",
          "een verhaal over een gebouw",
        ],
        answer: 0,
        wrongHints: [null, "Een plattegrond kijk je van bovenaf, niet van voren.", "Het is een tekening, geen namenlijst.", "Het is geen verhaal maar een tekening."],
        uitlegPad: {
          stappen: [{ titel: "Bovenaanzicht", tekst: "Een plattegrond is een tekening van bovenaf, waarop je ziet waar alles ligt." }],
          niveaus: {
            basis: "Een plattegrond is een tekening van bovenaf van een gebouw/gebied.",
            simpeler: "Kijk je bij een plattegrond van voren of van boven?",
            nogSimpeler: "Is een plattegrond een tekening van bovenaf?",
          },
        },
      },
      {
        q: "Vanaf welke kant bekijk je een plattegrond?",
        options: ["van bovenaf", "van de zijkant", "van voren", "van onderen"],
        answer: 0,
        wrongHints: [null, "Van de zijkant zie je niet hoe alles ligt.", "Van voren is een foto, geen plattegrond.", "Van onderen kun je niet kijken."],
        uitlegPad: {
          stappen: [{ titel: "Van boven", tekst: "Je bekijkt een plattegrond van bovenaf, zodat je de indeling ziet." }],
          niveaus: {
            basis: "Een plattegrond bekijk je van bovenaf.",
            simpeler: "Alsof je met een drone erboven hangt — welke kant is dat?",
            nogSimpeler: "Van boven of van de zijkant?",
          },
        },
      },
      {
        q: "Waarvoor gebruik je een plattegrond?",
        options: [
          "om de weg te vinden en te zien waar iets is",
          "om te weten hoe laat het is",
          "om het weer te voorspellen",
          "om een verhaal te lezen",
        ],
        answer: 0,
        wrongHints: [null, "Daar gebruik je een klok voor.", "Daar gebruik je een weerbericht voor.", "Een plattegrond is geen verhaal."],
        uitlegPad: {
          stappen: [{ titel: "De weg vinden", tekst: "Met een plattegrond vind je de weg en zie je waar de dingen liggen." }],
          niveaus: {
            basis: "Een plattegrond helpt je de weg vinden.",
            simpeler: "Gebruik je een plattegrond om iets te vinden of om de tijd te weten?",
            nogSimpeler: "Helpt een plattegrond je de weg te vinden?",
          },
        },
      },
      {
        q: "Op een plattegrond staat een stip met 'je bent hier'. Wat betekent dat?",
        options: ["waar jij nu staat", "waar de uitgang is", "waar het toilet is", "waar je naartoe moet"],
        answer: 0,
        wrongHints: [null, "De uitgang heeft een eigen teken.", "Het toilet heeft een eigen symbool.", "Het is je startplek, niet je doel."],
        uitlegPad: {
          stappen: [{ titel: "Jouw startplek", tekst: "De 'je bent hier'-stip laat zien waar jij op dit moment staat. Vanaf daar plan je je route." }],
          niveaus: {
            basis: "De stip toont waar jij nu bent.",
            simpeler: "'Je bent hier' = jouw eigen plek of je doel?",
            nogSimpeler: "Waar sta jij volgens de stip?",
          },
        },
      },
      {
        q: "Wat kun je doen met een plattegrond van een dierentuin?",
        options: [
          "zien waar de dieren en de uitgang liggen",
          "horen welke geluiden de dieren maken",
          "weten hoe oud de dieren zijn",
          "de dieren voeren",
        ],
        answer: 0,
        wrongHints: [null, "Geluiden hoor je niet op een tekening.", "Leeftijden staan niet op een plattegrond.", "Voeren doe je niet via een kaart."],
        uitlegPad: {
          stappen: [{ titel: "Zien waar alles ligt", tekst: "Op de plattegrond zie je waar de dieren, de ingang en de uitgang liggen, zodat je de weg vindt." }],
          niveaus: {
            basis: "Een plattegrond laat zien waar alles ligt.",
            simpeler: "Wat laat een plattegrond zien: waar dingen zijn of hoe oud dieren zijn?",
            nogSimpeler: "Zie je op een plattegrond waar de dieren liggen?",
          },
        },
      },
      {
        q: "Een plattegrond lijkt nog het meest op...",
        options: [
          "een foto recht van bovenaf (vanuit een drone)",
          "een selfie",
          "een filmpje",
          "een geschilderd portret",
        ],
        answer: 0,
        wrongHints: [null, "Een selfie is van voren, niet van boven.", "Een plattegrond beweegt niet.", "Een portret toont een gezicht, geen indeling."],
        uitlegPad: {
          stappen: [{ titel: "Bovenaanzicht", tekst: "Een plattegrond is als een foto recht van bovenaf: je ziet de indeling van boven." }],
          niveaus: {
            basis: "Een plattegrond is een bovenaanzicht, als een drone-foto.",
            simpeler: "Vanaf welke kant kijk je: van boven of van voren?",
            nogSimpeler: "Is een plattegrond van bovenaf?",
          },
        },
      },
    ],
  },

  // ─── B. Legenda ───────────────────────────────────────────
  {
    title: "De legenda — wat betekenen de symbolen?",
    explanation:
      "Op een plattegrond staan **symbolen** (kleine tekentjes) in plaats van woorden. De **legenda** is het kadertje dat uitlegt wat elk symbool betekent.\n\n" +
      "Voorbeelden:\n" +
      "• 🚻 = toilet\n" +
      "• 🍴 (mes en vork) = restaurant / eetplek\n" +
      "• 🅿️ = parkeerplaats\n" +
      "• ➡️ = ingang / richting\n\n" +
      "Zonder legenda weet je niet wat de tekens betekenen. Dus: zie je een symbool dat je niet kent? Kijk in de legenda.",
    checks: [
      {
        q: "Wat is een legenda?",
        options: [
          "de uitleg van de symbolen op de kaart",
          "de titel van de kaart",
          "de naam van de tekenaar",
          "een lijst met openingstijden",
        ],
        answer: 0,
        wrongHints: [null, "De titel staat los van de legenda.", "De maker staat er soms bij, maar dat is niet de legenda.", "Openingstijden staan ergens anders."],
        uitlegPad: {
          stappen: [{ titel: "Legenda = uitleg symbolen", tekst: "De legenda legt uit wat elk tekentje op de plattegrond betekent." }],
          niveaus: {
            basis: "De legenda verklaart de symbolen op de kaart.",
            simpeler: "Waar zoek je op wat een tekentje betekent?",
            nogSimpeler: "Legt de legenda de symbolen uit?",
          },
        },
      },
      {
        q: "In de legenda staat 🍴 = restaurant. Je ziet 🍴 op de plattegrond. Wat is daar?",
        options: ["een eetplek/restaurant", "een toilet", "de uitgang", "een parkeerplaats"],
        answer: 0,
        wrongHints: [null, "Het toilet heeft een ander symbool (🚻).", "De uitgang heeft een eigen teken.", "Parkeren heeft het 🅿️-teken."],
        uitlegPad: {
          stappen: [{ titel: "Symbool opzoeken in de legenda", tekst: "🍴 betekent volgens de legenda 'restaurant'. Waar je dat symbool ziet, is dus een eetplek." }],
          niveaus: {
            basis: "🍴 = restaurant, dus daar kun je eten.",
            simpeler: "Wat betekent het mes-en-vork-teken volgens de legenda?",
            nogSimpeler: "Mes en vork — waar denk je aan?",
          },
        },
      },
      {
        q: "Waarom is een legenda handig?",
        options: [
          "zonder uitleg weet je niet wat de tekens betekenen",
          "het maakt de kaart kleurrijker",
          "het vertelt hoe laat het is",
          "het is verplicht maar nutteloos",
        ],
        answer: 0,
        wrongHints: [null, "Het gaat om begrijpen, niet om kleur.", "Een legenda zegt niets over de tijd.", "Een legenda is juist heel nuttig."],
        uitlegPad: {
          stappen: [{ titel: "Tekens begrijpen", tekst: "Met de legenda begrijp je de symbolen; zonder zou je niet weten wat ze betekenen." }],
          niveaus: {
            basis: "De legenda is nodig om de symbolen te kunnen lezen.",
            simpeler: "Snap je de tekentjes zonder uitleg? Daarom de legenda.",
            nogSimpeler: "Helpt de legenda je de symbolen begrijpen?",
          },
        },
      },
      {
        q: "Een symbool van een 🅿️ op een plattegrond betekent meestal...",
        options: ["een parkeerplaats", "een speeltuin", "een ziekenhuis", "een school"],
        answer: 0,
        wrongHints: [null, "Een speeltuin heeft een ander teken.", "Een ziekenhuis heeft vaak een kruis-teken.", "Een school heeft een eigen symbool."],
        uitlegPad: {
          stappen: [{ titel: "P = parkeren", tekst: "De P staat voor parkeren: een parkeerplaats." }],
          niveaus: {
            basis: "🅿️ betekent parkeerplaats.",
            simpeler: "Waar staat de letter P meestal voor?",
            nogSimpeler: "P van … parkeren?",
          },
        },
      },
      {
        q: "In de legenda staat 🚻 = toilet. Je ziet 🚻 op de plattegrond. Wat is daar?",
        options: ["een toilet", "een restaurant", "de ingang", "een parkeerplaats"],
        answer: 0,
        wrongHints: [null, "Een restaurant heeft het mes-en-vork-teken.", "De ingang heeft een eigen pijl.", "Parkeren heeft het 🅿️-teken."],
        uitlegPad: {
          stappen: [{ titel: "Symbool opzoeken", tekst: "🚻 betekent volgens de legenda 'toilet'. Waar je dat teken ziet, is dus een toilet." }],
          niveaus: {
            basis: "🚻 = toilet volgens de legenda.",
            simpeler: "Wat betekent het 🚻-teken volgens de legenda?",
            nogSimpeler: "Hoort 🚻 bij het toilet?",
          },
        },
      },
      {
        q: "Je ziet op de plattegrond een symbool dat je niet kent. Wat doe je?",
        options: [
          "in de legenda kijken wat het betekent",
          "het symbool maar negeren",
          "de plattegrond weggooien",
          "zomaar wat raden en doorlopen",
        ],
        answer: 0,
        wrongHints: [null, "Negeren helpt je niet verder.", "Juist de legenda heb je nu nodig.", "Raden kan je de verkeerde kant op sturen."],
        uitlegPad: {
          stappen: [{ titel: "Legenda raadplegen", tekst: "Ken je een symbool niet? Kijk in de legenda; daar staat wat het betekent." }],
          niveaus: {
            basis: "Onbekend symbool → kijk in de legenda.",
            simpeler: "Waar zoek je op wat een onbekend teken betekent?",
            nogSimpeler: "Helpt de legenda bij een onbekend symbool?",
          },
        },
      },
    ],
  },

  // ─── C. Route & windrichting ──────────────────────────────
  {
    title: "Route & windrichting",
    explanation:
      "Op veel plattegronden staat een **windroos** of een pijl met de letter **N** (noorden). Meestal wijst het **noorden naar boven**. Dan geldt:\n\n" +
      "• **Noord** = boven · **Zuid** = onder · **Oost** = rechts · **West** = links.\n\n" +
      "Ezelsbruggetje voor de klok rond: **N**ooit **Z**onder **O**ntbijt naar **W**erk (boven → onder, of: Noord-Oost-Zuid-West met de klok mee).\n\n" +
      "Een **route** lees je vanaf de 'je bent hier'-stip: rechtdoor, links, rechts — stap voor stap.",
    checks: [
      {
        q: "Op een plattegrond wijst de pijl met de N naar boven. Welke windrichting is 'boven'?",
        options: ["het noorden", "het zuiden", "het oosten", "het westen"],
        answer: 0,
        wrongHints: [null, "Het zuiden is juist onder.", "Het oosten is rechts.", "Het westen is links."],
        uitlegPad: {
          stappen: [{ titel: "N = noorden", tekst: "De N staat voor het noorden. Als de pijl naar boven wijst, is boven het noorden." }],
          niveaus: {
            basis: "N = noorden, en die wijst naar boven.",
            simpeler: "Waar staat de letter N voor?",
            nogSimpeler: "N van … noord?",
          },
        },
      },
      {
        q: "Het noorden is boven. Je moet naar het oosten. Welke kant op de kaart is dat?",
        options: ["naar rechts", "naar links", "naar boven", "naar onderen"],
        answer: 0,
        wrongHints: [null, "Links is het westen.", "Boven is het noorden.", "Onderen is het zuiden."],
        uitlegPad: {
          stappen: [{ titel: "Oost = rechts", tekst: "Met het noorden boven, is het oosten rechts (N boven, O rechts, Z onder, W links)." }],
          niveaus: {
            basis: "Noord boven → oost is rechts.",
            simpeler: "N boven, O rechts, Z onder, W links. Waar is oost?",
            nogSimpeler: "Met noord boven: is oost links of rechts?",
          },
        },
      },
      {
        q: "Je staat bij de ingang. Het winkeltje ligt eerst rechtdoor, dan linksaf. Welke kant ga je als allereerste op?",
        options: ["rechtdoor", "linksaf", "rechtsaf", "terug"],
        answer: 0,
        wrongHints: [null, "Dat is de tweede stap, niet de eerste.", "Daar staat niets over in de route.", "Je gaat juist vooruit, niet terug."],
        uitlegPad: {
          stappen: [{ titel: "Stap voor stap", tekst: "De route zegt: eerst rechtdoor, dán linksaf. De eerste stap is dus rechtdoor." }],
          niveaus: {
            basis: "De eerste stap van de route is rechtdoor.",
            simpeler: "Wat staat er als eerste in de route: rechtdoor of linksaf?",
            nogSimpeler: "Wat doe je als állereerst?",
          },
        },
      },
      {
        q: "Het noorden is boven. Je loopt op de kaart naar beneden. Welke richting ga je dan?",
        options: ["naar het zuiden", "naar het noorden", "naar het oosten", "naar het westen"],
        answer: 0,
        wrongHints: [null, "Het noorden is juist boven.", "Oost is rechts, niet onder.", "West is links, niet onder."],
        uitlegPad: {
          stappen: [{ titel: "Onder = zuiden", tekst: "Met het noorden boven is onder het zuiden. Naar beneden lopen = naar het zuiden." }],
          niveaus: {
            basis: "Noord boven → onder is zuid.",
            simpeler: "Tegenover het noorden (boven) ligt het zuiden (onder).",
            nogSimpeler: "Boven is noord, onder is …?",
          },
        },
      },
      {
        q: "Het noorden is boven. Je moet naar het westen. Welke kant op de kaart is dat?",
        options: ["naar links", "naar rechts", "naar boven", "naar onderen"],
        answer: 0,
        wrongHints: [null, "Rechts is het oosten.", "Boven is het noorden.", "Onderen is het zuiden."],
        uitlegPad: {
          stappen: [{ titel: "West = links", tekst: "Met het noorden boven is het westen links (N boven, O rechts, Z onder, W links)." }],
          niveaus: {
            basis: "Noord boven → west is links.",
            simpeler: "N boven, O rechts, Z onder, W links. Waar is west?",
            nogSimpeler: "Met noord boven: is west links of rechts?",
          },
        },
      },
      {
        q: "De route is: ga rechtdoor, dan rechtsaf, en dan ben je er. Wat is de laatste stap vóór je doel?",
        options: ["rechtsaf", "rechtdoor", "linksaf", "terug"],
        answer: 0,
        wrongHints: [null, "Dat is de eerste stap, niet de laatste.", "Linksaf staat niet in de route.", "Je gaat vooruit, niet terug."],
        uitlegPad: {
          stappen: [{ titel: "Stap voor stap", tekst: "De route is rechtdoor (1) en dan rechtsaf (2). De laatste stap is dus rechtsaf." }],
          niveaus: {
            basis: "De laatste stap van de route is rechtsaf.",
            simpeler: "Wat staat er als tweede/laatste in de route?",
            nogSimpeler: "Wat doe je als láátste?",
          },
        },
      },
    ],
  },

  // ─── D. In het echt ───────────────────────────────────────
  {
    title: "In het echt — zoek de weg",
    explanation:
      "In een winkelcentrum, dierentuin of pretpark gebruik je de plattegrond om iets te vinden. Werk zo:\n\n" +
      "1. **Zoek de 'je bent hier'-stip** — je startplek.\n" +
      "2. **Zoek je doel** met behulp van de **legenda** (welk symbool hoort erbij?).\n" +
      "3. **Bepaal de route**: welke kant op vanaf de stip?\n\n" +
      "Zo kom je snel waar je wilt zijn, zonder te verdwalen.",
    checks: [
      {
        q: "Je zoekt de kapper in een groot winkelcentrum. Wat gebruik je het best?",
        options: [
          "de plattegrond met de legenda",
          "het weerbericht",
          "een klok",
          "een woordenboek",
        ],
        answer: 0,
        wrongHints: [null, "Het weer helpt je niet de kapper te vinden.", "Een klok zegt niet waar de kapper is.", "Een woordenboek geeft betekenissen, geen plekken."],
        uitlegPad: {
          stappen: [{ titel: "Plattegrond + legenda", tekst: "Met de plattegrond en de legenda vind je waar de kapper zit." }],
          niveaus: {
            basis: "Gebruik de plattegrond met legenda om de kapper te vinden.",
            simpeler: "Waarmee vind je een plek in een gebouw?",
            nogSimpeler: "Helpt een plattegrond je de kapper te vinden?",
          },
        },
      },
      {
        q: "In een dierentuin liggen de apen tussen de ingang en het restaurant. Je staat bij de ingang. Je loopt richting...",
        options: ["het restaurant", "de uitgang", "de parkeerplaats", "terug naar buiten"],
        answer: 0,
        wrongHints: [null, "De apen liggen niet richting de uitgang.", "Daar liggen de apen niet tussenin.", "Je hoeft niet terug — de apen zijn vóór je."],
        uitlegPad: {
          stappen: [{ titel: "Tussen ingang en restaurant", tekst: "De apen liggen tussen de ingang (waar jij staat) en het restaurant, dus je loopt richting het restaurant." }],
          niveaus: {
            basis: "Loop van de ingang richting het restaurant; de apen liggen ertussen.",
            simpeler: "Tussen welke twee plekken liggen de apen? Loop die kant op.",
            nogSimpeler: "De apen zijn op weg naar het restaurant — welke kant dus?",
          },
        },
      },
      {
        q: "Je hebt je doel gevonden op de kaart, maar je weet niet waar je zelf staat. Wat zoek je eerst?",
        options: [
          "de 'je bent hier'-stip",
          "de titel van de kaart",
          "de naam van de tekenaar",
          "de schaal",
        ],
        answer: 0,
        wrongHints: [null, "De titel zegt niet waar jij staat.", "De maker helpt je niet met je positie.", "De schaal gaat over afstanden, niet je plek."],
        uitlegPad: {
          stappen: [{ titel: "Eerst je startplek", tekst: "Zonder te weten waar je zelf staat, kun je geen route bepalen. Zoek dus eerst de 'je bent hier'-stip." }],
          niveaus: {
            basis: "Zoek eerst de 'je bent hier'-stip (je eigen plek).",
            simpeler: "Wat moet je weten voor je een route kunt lopen: waar je staat.",
            nogSimpeler: "Waar begin je je route? Bij je eigen plek.",
          },
        },
      },
      {
        q: "Op de legenda: 🚻 = toilet. Je moet snel naar het toilet. Wat doe je?",
        options: [
          "het 🚻-symbool op de plattegrond opzoeken",
          "de plattegrond omdraaien",
          "de legenda weggooien",
          "naar de uitgang lopen",
        ],
        answer: 0,
        wrongHints: [null, "Omdraaien helpt je niet vinden.", "Juist de legenda heb je nodig.", "De uitgang is niet het toilet."],
        uitlegPad: {
          stappen: [{ titel: "Symbool op de kaart vinden", tekst: "Je weet uit de legenda dat 🚻 het toilet is. Zoek dat symbool op de plattegrond en loop ernaartoe." }],
          niveaus: {
            basis: "Zoek het 🚻-teken op de kaart om het toilet te vinden.",
            simpeler: "Welk teken hoort bij het toilet, en waar staat dat op de kaart?",
            nogSimpeler: "Zoek je het toilet via het 🚻-symbool?",
          },
        },
      },
      {
        q: "Je zoekt de speeltuin in een park. In de legenda staat een glijbaan-symbool. Wat doe je?",
        options: [
          "het glijbaan-symbool op de kaart opzoeken",
          "naar de uitgang lopen",
          "de legenda overslaan",
          "bij de ingang blijven wachten",
        ],
        answer: 0,
        wrongHints: [null, "De uitgang is niet de speeltuin.", "Juist de legenda wijst je het symbool.", "Wachten brengt je niet bij de speeltuin."],
        uitlegPad: {
          stappen: [{ titel: "Symbool → plek", tekst: "Je weet uit de legenda welk teken bij de speeltuin hoort. Zoek dat teken op de kaart en loop ernaartoe." }],
          niveaus: {
            basis: "Zoek het glijbaan-teken op de kaart om de speeltuin te vinden.",
            simpeler: "Welk teken hoort bij de speeltuin, en waar staat dat op de kaart?",
            nogSimpeler: "Gebruik je het glijbaan-symbool om de speeltuin te vinden?",
          },
        },
      },
      {
        q: "Het noorden is boven. De uitgang ligt in het zuiden van het gebouw. Waar op de kaart zoek je 'm?",
        options: ["onderaan", "bovenaan", "links", "rechts"],
        answer: 0,
        wrongHints: [null, "Bovenaan is het noorden.", "Links is het westen.", "Rechts is het oosten."],
        uitlegPad: {
          stappen: [{ titel: "Zuid = onder", tekst: "Met het noorden boven ligt het zuiden onderaan. De uitgang in het zuiden zoek je dus onderaan de kaart." }],
          niveaus: {
            basis: "Noord boven → zuiden is onderaan.",
            simpeler: "Waar ligt het zuiden als het noorden boven is?",
            nogSimpeler: "Noord = boven, zuid = …?",
          },
        },
      },
      {
        q: "Wat zijn de 3 slimme stappen om iets te vinden op een plattegrond?",
        options: [
          "je startplek zoeken, je doel via de legenda, dan de route bepalen",
          "de kaart omdraaien en gokken",
          "alleen de titel lezen",
          "de schaal opmeten",
        ],
        answer: 0,
        wrongHints: [null, "Omdraaien en gokken is geen plan.", "De titel helpt je niet de weg te vinden.", "De schaal gaat over afstanden, niet over de route."],
        uitlegPad: {
          stappen: [{ titel: "Start → doel → route", tekst: "1) Zoek de 'je bent hier'-stip. 2) Zoek je doel met de legenda. 3) Bepaal de route ernaartoe." }],
          niveaus: {
            basis: "Eerst je plek, dan je doel (via legenda), dan de route.",
            simpeler: "Begin je bij je eigen plek, je doel en de route — of bij de titel?",
            nogSimpeler: "Zoek je eerst waar je staat?",
          },
        },
      },
    ],
  },
];

export default {
  id: "plattegrond-legenda-po",
  title: "Plattegrond & legenda lezen",
  subject: "studievaardigheden",
  level: "groep7-8",
  sloThema: "studievaardigheden-plattegrond",
  chapters,
  steps,
  prerequisites: [],
};
