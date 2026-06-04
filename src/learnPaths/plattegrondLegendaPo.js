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
        wrongHints: [null, "De apen liggen op weg naar het restaurant, niet de uitgang.", "Daar liggen de apen niet tussenin.", "Je hoeft niet terug — de apen zijn vóór je."],
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
