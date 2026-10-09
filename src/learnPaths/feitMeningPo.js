// Leerpad: Feit & mening — groep 7-8 PO.
// Doorstroomtoets-onderdeel taal (begrijpend lezen / kritisch lezen).
// Feit vs. mening onderscheiden, mening herkennen aan signaalwoorden.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Wat is een feit?", emoji: "📏", from: 0, to: 0 },
  { letter: "B", title: "Wat is een mening?", emoji: "💭", from: 1, to: 1 },
  { letter: "C", title: "Mening herkennen aan signaalwoorden", emoji: "🔍", from: 2, to: 2 },
  { letter: "D", title: "In de tekst: feit of mening?", emoji: "📰", from: 3, to: 3 },
];

const steps = [
  // ─── A. Feit ──────────────────────────────────────────────
  {
    title: "Wat is een feit?",
    explanation:
      "Een **feit** is iets dat **waar is voor iedereen** en dat je kunt **controleren** of nakijken. Of je het nu leuk vindt of niet, een feit blijft hetzelfde.\n\n" +
      "Voorbeelden van feiten:\n" +
      "• *Water kookt bij 100 graden.*\n" +
      "• *Nederland heeft 12 provincies.*\n" +
      "• *Een week heeft zeven dagen.*\n\n" +
      "Je kunt een feit opzoeken, meten of tellen. Iedereen komt dan op hetzelfde antwoord. Daarom is een feit niet 'van jou' — het is gewoon zo.",
    checks: [
      {
        q: "Welke zin is een feit?",
        options: [
          "Water kookt bij 100 graden.",
          "Soep is lekkerder dan water.",
          "Iedereen houdt van zwemmen.",
          "De zomer is het mooiste seizoen.",
        ],
        answer: 0,
        wrongHints: [null, "Lekkerder vinden verschilt per persoon — dat is een mening.", "Niet iedereen vindt dat; dat kun je niet controleren.", "Het mooiste? Dat vindt niet iedereen."],
        uitlegPad: {
          stappen: [{ titel: "Te controleren = feit", tekst: "Dat water bij 100 graden kookt kun je opzoeken en meten — het is voor iedereen waar. De andere zinnen zijn meningen." }],
          niveaus: {
            basis: "Een feit kun je controleren en is voor iedereen waar: water kookt bij 100 graden.",
            simpeler: "Welke zin kun je nameten of opzoeken?",
            nogSimpeler: "Welke zin is voor iedereen hetzelfde, of je 't nu leuk vindt of niet?",
          },
        },
      },
      {
        q: "Wat kun je met een feit doen?",
        options: ["het controleren of nakijken", "het nooit bewijzen", "het alleen voelen", "het zelf verzinnen"],
        answer: 0,
        wrongHints: [null, "Juist wél — een feit is te bewijzen.", "Een feit gaat niet over een gevoel.", "Dan zou het geen feit meer zijn."],
        uitlegPad: {
          stappen: [{ titel: "Feit = controleerbaar", tekst: "Een feit kun je opzoeken, meten of tellen. Daarom is het voor iedereen hetzelfde." }],
          niveaus: {
            basis: "Een feit kun je controleren (opzoeken, meten, tellen).",
            simpeler: "Kun je een feit nakijken om te zien of het klopt? Ja.",
            nogSimpeler: "Kun je opzoeken of een feit waar is?",
          },
        },
      },
      {
        q: "Welke zin is een feit?",
        options: [
          "Amsterdam is de hoofdstad van Nederland.",
          "Amsterdam is de leukste stad van Nederland.",
          "Amsterdam is veel te druk.",
          "Iedereen zou Amsterdam moeten bezoeken.",
        ],
        answer: 0,
        wrongHints: [null, "'Leukste' verschilt per persoon — mening.", "'Te druk' is wat iemand vindt — mening.", "'Zou moeten' is een mening."],
        uitlegPad: {
          stappen: [{ titel: "Op te zoeken = feit", tekst: "Dat Amsterdam de hoofdstad is, kun je opzoeken — het is voor iedereen waar. De rest zijn meningen." }],
          niveaus: {
            basis: "De hoofdstad kun je opzoeken → feit. De andere zinnen zijn meningen.",
            simpeler: "Welke zin kun je nakijken in een boek of op een kaart?",
            nogSimpeler: "Welke zin is gewoon zo, los van wat je ervan vindt?",
          },
        },
      },
      {
        q: "Feit of mening? *Een jaar heeft twaalf maanden.*",
        options: ["feit", "mening", "geen van beide", "allebei"],
        answer: 0,
        wrongHints: [null, "Het is voor iedereen waar en te controleren.", "Het is duidelijk waar of niet waar.", "Een zin is óf feit óf mening."],
        uitlegPad: {
          stappen: [{ titel: "Te tellen = feit", tekst: "Je kunt de maanden tellen: het zijn er twaalf, voor iedereen. Dat is een feit." }],
          niveaus: {
            basis: "Te tellen en voor iedereen waar → feit.",
            simpeler: "Kun je de maanden tellen? Dan is het een feit.",
            nogSimpeler: "Is het aantal maanden voor iedereen gelijk?",
          },
        },
      },
      {
        q: "Welke zin is een feit?",
        options: [
          "De aarde draait om de zon.",
          "De aarde is een prachtige planeet.",
          "Ruimtereizen zijn veel te duur.",
          "Iedereen zou naar de sterren moeten kijken.",
        ],
        answer: 0,
        wrongHints: [null, "'Prachtig' is een oordeel — mening.", "'Te duur' is wat iemand vindt.", "'Zou moeten' is een mening."],
        uitlegPad: {
          stappen: [{ titel: "Wetenschappelijk te controleren", tekst: "Dat de aarde om de zon draait kun je opzoeken en is voor iedereen waar. De rest zijn meningen." }],
          niveaus: {
            basis: "Wetenschappelijk vastgesteld = feit. Oordelen zijn meningen.",
            simpeler: "Welke zin kun je in een boek of encyclopedie nakijken?",
            nogSimpeler: "Welke zin is voor iedereen waar, ook als je er niets van vindt?",
          },
        },
      },
      {
        q: "Feit of mening? *De fiets is uitgevonden in de negentiende eeuw.*",
        options: ["feit", "mening", "geen van beide", "allebei"],
        answer: 0,
        wrongHints: [null, "Dit kun je opzoeken in een geschiedenisboek.", "Het is te controleren — dan is het niet ‘geen van beide’.", "Een zin is óf feit óf mening."],
        uitlegPad: {
          stappen: [{ titel: "Opzoekbaar in de geschiedenis", tekst: "Wanneer de fiets is uitgevonden staat in boeken. Dat is te controleren, dus een feit." }],
          niveaus: {
            basis: "Historische feiten kun je opzoeken → feit.",
            simpeler: "Kun je de uitvinding van de fiets nakijken? Ja → feit.",
            nogSimpeler: "Is het voor iedereen hetzelfde wanneer de fiets is uitgevonden?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke zin over spinnen is een feit?",
        options: [
          "Een spin heeft acht poten.",
          "Spinnen zijn de engste dieren die er zijn.",
          "Een spin in huis is vreselijk.",
          "Iedereen zou spinnen met rust moeten laten.",
        ],
        answer: 0,
        wrongHints: [null, "'De engste' vindt niet iedereen.", null, "'Zou moeten' zegt wat iemand vindt."],
        uitlegPad: {
          stappen: [
            {
              titel: "Te tellen = feit",
              tekst: "De poten van een spin kun je tellen: het zijn er acht, voor iedereen. De andere zinnen zeggen wat iemand vindt.",
            },
          ],
          niveaus: {
            basis: "Poten kun je tellen → feit. 'Engste', 'vreselijk' en 'zou moeten' zijn meningen.",
            simpeler: "Welke zin kun je nakijken door te tellen?",
            nogSimpeler: "Welke zin is voor iedereen hetzelfde, of je spinnen nu leuk vindt of niet?",
          },
        },
      },
      {
        q: "Waarom is *'Een uur heeft zestig minuten'* een feit?",
        options: [
          "omdat iedereen het kan nakijken",
          "omdat veel mensen het fijn vinden",
          "omdat iemand het hard roept",
          "omdat het een mooie zin is",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Gaat een feit over wat mensen fijn vinden?",
          null,
          "Of een zin mooi is, maakt niet uit.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Na te kijken = feit",
              tekst: "Op een klok of in een boek kun je nakijken dat een uur zestig minuten heeft. Iedereen komt op hetzelfde antwoord.",
            },
          ],
          niveaus: {
            basis: "Een feit kun je nakijken en is voor iedereen hetzelfde.",
            simpeler: "Kun je op een klok of in een boek zien of het klopt?",
            nogSimpeler: "Komt iedereen op hetzelfde antwoord als hij het nakijkt?",
          },
        },
      },
      {
        q: "Welke manier hoort **niet** bij het controleren van een feit?",
        options: [
          "vragen wat je vriend ervan vindt",
          "het opzoeken in een boek",
          "het meten met een liniaal",
          "het natellen",
        ],
        answer: 0,
        wrongHints: [null, null, "Met meten kun je juist iets nakijken.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Controleren = opzoeken, meten, tellen",
              tekst: "Een feit controleer je door het op te zoeken, te meten of te tellen. Wat je vriend ervan vindt, is zijn mening — daarmee controleer je niets.",
            },
          ],
          niveaus: {
            basis: "Opzoeken, meten en tellen horen bij een feit. Vragen wat iemand vindt niet.",
            simpeler: "Welke manier gaat over wat iemand vindt?",
            nogSimpeler: "Welke manier geeft een mening in plaats van een antwoord dat voor iedereen klopt?",
          },
        },
      },
    ],
  },

  // ─── B. Mening ────────────────────────────────────────────
  {
    title: "Wat is een mening?",
    explanation:
      "Een **mening** is **wat iemand ervan vindt**. Een ander kan er heel anders over denken. Je kunt een mening niet nameten of opzoeken — het is geen 'waar of niet waar', het is een gevoel of oordeel.\n\n" +
      "Voorbeelden van meningen:\n" +
      "• *Pizza is het lekkerste eten.*\n" +
      "• *Deze film is veel te lang.*\n" +
      "• *Honden zijn liever dan katten.*\n\n" +
      "Het verschil met een feit: bij een mening kunnen twee mensen het oneens zijn en hebben ze allebei 'gelijk' — het is immers hun eigen mening.",
    checks: [
      {
        q: "Welke zin is een mening?",
        options: [
          "Pizza is het lekkerste eten dat er is.",
          "Pizza komt oorspronkelijk uit Italië.",
          "Een pizza is rond.",
          "Op een pizza zit vaak kaas.",
        ],
        answer: 0,
        wrongHints: [null, "Waar pizza vandaan komt kun je opzoeken — feit.", "De vorm kun je zien — feit.", "Dat kun je controleren — feit."],
        uitlegPad: {
          stappen: [{ titel: "'Lekkerste' = mening", tekst: "Of pizza het lekkerste is, vindt niet iedereen. Het is een mening. De rest kun je controleren." }],
          niveaus: {
            basis: "'Lekkerste' verschilt per persoon → mening.",
            simpeler: "Welke zin gaat over wat iemand vindt?",
            nogSimpeler: "Welke zin kan voor de een waar en voor de ander niet waar zijn?",
          },
        },
      },
      {
        q: "Een mening is...",
        options: ["wat iemand ergens van vindt", "altijd waar voor iedereen", "altijd te controleren", "altijd een getal"],
        answer: 0,
        wrongHints: [null, "Nee, dat is juist een feit.", "Een mening kun je juist niet nameten.", "Een getal is meestal een feit."],
        uitlegPad: {
          stappen: [{ titel: "Mening = oordeel/gevoel", tekst: "Een mening is wat iemand vindt. Een ander mag er anders over denken." }],
          niveaus: {
            basis: "Een mening is wat iemand ergens van vindt.",
            simpeler: "Gaat een mening over feiten of over wat je vindt?",
            nogSimpeler: "Wat is een mening: een gevoel/oordeel of een gemeten getal?",
          },
        },
      },
      {
        q: "Welke zin is een mening?",
        options: [
          "Deze film is veel te lang.",
          "Deze film duurt twee uur.",
          "De film begint om acht uur.",
          "De film is in het Engels.",
        ],
        answer: 0,
        wrongHints: [null, "De duur kun je meten — feit.", "De begintijd kun je nakijken — feit.", "De taal kun je horen — feit."],
        uitlegPad: {
          stappen: [{ titel: "'Te lang' = oordeel", tekst: "'Te lang' is wat iemand vindt; een ander vindt 'm misschien precies goed. Dat maakt het een mening." }],
          niveaus: {
            basis: "'Te lang' is een oordeel → mening. De rest is te controleren.",
            simpeler: "Welke zin zegt wat iemand van de film vindt?",
            nogSimpeler: "Welke zin heeft het woordje 'te' (te lang)?",
          },
        },
      },
      {
        q: "Feit of mening? *Honden zijn liever dan katten.*",
        options: ["mening", "feit", "geen van beide", "allebei"],
        answer: 0,
        wrongHints: [null, "Dat verschilt per persoon — niet te controleren.", "Het is geen 'waar of niet waar'.", "Een zin is óf feit óf mening."],
        uitlegPad: {
          stappen: [{ titel: "Niet iedereen is het eens", tekst: "Of honden liever zijn dan katten, vindt niet iedereen. Het is een mening." }],
          niveaus: {
            basis: "Mensen denken hier verschillend over → mening.",
            simpeler: "Kun je dit nameten? Nee. Dan is het een mening.",
            nogSimpeler: "Vindt iedereen honden liever? Nee — dus mening.",
          },
        },
      },
      {
        q: "Welke zin is een mening?",
        options: [
          "Basketbal is veel spannender dan zwemmen.",
          "Een basketbalring hangt op een hoogte van 3,05 meter.",
          "Het WK basketbal wordt om de vier jaar gespeeld.",
          "Basketbal is een balspel.",
        ],
        answer: 0,
        wrongHints: [null, "De hoogte kun je meten — feit.", "Het speelschema kun je opzoeken — feit.", "Dat kun je controleren — feit."],
        uitlegPad: {
          stappen: [{ titel: "'Spannender' = oordeel", tekst: "Of basketbal spannender is dan zwemmen, vindt niet iedereen. 'Spannender' is een vergelijkend oordeel — dat maakt het een mening." }],
          niveaus: {
            basis: "'Spannender' is een oordeel → mening. De rest is te controleren.",
            simpeler: "Welke zin zegt wat iemand van een sport vindt?",
            nogSimpeler: "Welke zin vergelijkt wat iemand leuker vindt?",
          },
        },
      },
      {
        q: "Waarom is *'Kaas is het lekkerste broodbeleg'* een mening?",
        options: [
          "omdat niet iedereen dat vindt",
          "omdat kaas een echt product is",
          "omdat je kaas kunt kopen",
          "omdat het in een reclamefolder staat",
        ],
        answer: 0,
        wrongHints: [null, "Dat kaas een product is, klopt — maar dat maakt de zin nog geen feit.", "Dat kaas te koop is kun je controleren, maar 'lekkerste' is een oordeel.", "Waar iets staat doet er niet toe."],
        uitlegPad: {
          stappen: [{ titel: "Oordeel = mening", tekst: "De een vindt kaas lekker, de ander pindakaas. Omdat mensen er anders over denken, is het een mening." }],
          niveaus: {
            basis: "'Lekkerste' is wat iemand vindt — niet voor iedereen hetzelfde → mening.",
            simpeler: "Kan een ander er anders over denken? Ja → mening.",
            nogSimpeler: "Vindt iedereen kaas het lekkerst? Nee — mening.",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Sanne zegt: *'Spruitjes zijn vies.'* Haar opa zegt: *'Spruitjes zijn heerlijk.'* Wat is waar?",
        options: [
          "Ze geven allebei hun eigen mening.",
          "Sanne geeft een feit, opa een mening.",
          "Opa geeft een feit, Sanne een mening.",
          "Ze geven allebei een feit.",
        ],
        answer: 0,
        wrongHints: [null, "Kun je meten of spruitjes vies zijn?", null, "Kun je opzoeken of iets heerlijk is?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Allebei een mening",
              tekst: "'Vies' en 'heerlijk' zeggen wat iemand vindt. Sanne en opa denken er anders over, en het is allebei hun eigen mening.",
            },
          ],
          niveaus: {
            basis: "Vies en heerlijk zijn oordelen → allebei een mening.",
            simpeler: "Gaat het hier over wat iemand vindt of over iets wat je kunt meten?",
            nogSimpeler: "Kunnen Sanne en opa het oneens zijn en toch allebei hun mening geven?",
          },
        },
      },
      {
        q: "Wat kun je **niet** doen met een mening?",
        options: [
          "hem nameten of opzoeken",
          "hem aan iemand vertellen",
          "er anders over denken dan een ander",
          "hem uitleggen met een reden",
        ],
        answer: 0,
        wrongHints: [null, "Mag je je mening aan iemand vertellen?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Een mening is niet te meten",
              tekst: "Je kunt je mening vertellen en uitleggen, en een ander mag er anders over denken. Maar nameten of opzoeken kan niet: het is wat iemand vindt.",
            },
          ],
          niveaus: {
            basis: "Een mening kun je niet nameten of opzoeken.",
            simpeler: "Kun je met een liniaal meten wat iemand vindt?",
            nogSimpeler: "Kun je in een boek opzoeken wat jij lekker vindt?",
          },
        },
      },
      {
        q: "Welke zin over de dierentuin is een mening?",
        options: [
          "Een dagje dierentuin is het fijnste uitje.",
          "In een dierentuin wonen dieren.",
          "Een giraf heeft een lange nek.",
          "Een olifant heeft een slurf.",
        ],
        answer: 0,
        wrongHints: [null, "Dat kun je zien als je er bent.", null, "Dat kun je zien en nakijken."],
        uitlegPad: {
          stappen: [
            {
              titel: "'Het fijnste' = mening",
              tekst: "Of de dierentuin het fijnste uitje is, vindt niet iedereen. De andere zinnen kun je zien en nakijken.",
            },
          ],
          niveaus: {
            basis: "'Het fijnste' is wat iemand vindt → mening.",
            simpeler: "Welke zin zegt wat iemand van een uitje vindt?",
            nogSimpeler: "Vindt iedereen de dierentuin het fijnst?",
          },
        },
      },
      {
        q: "Waaraan herken je een mening?",
        options: [
          "Een ander kan er heel anders over denken.",
          "Je kunt het opzoeken in een boek.",
          "Iedereen komt op hetzelfde antwoord.",
          "Je kunt het tellen of meten.",
        ],
        answer: 0,
        wrongHints: [null, "Wat je kunt opzoeken, is een feit.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Mensen kunnen het oneens zijn",
              tekst: "Bij een mening kunnen twee mensen er heel anders over denken. Opzoeken, tellen en meten horen bij een feit.",
            },
          ],
          niveaus: {
            basis: "Bij een mening kan een ander er anders over denken.",
            simpeler: "Hoort opzoeken, tellen en meten bij een feit of bij een mening?",
            nogSimpeler: "Kunnen twee mensen bij een mening iets anders vinden?",
          },
        },
      },
    ],
  },

  // ─── C. Signaalwoorden ────────────────────────────────────
  {
    title: "Mening herkennen aan signaalwoorden",
    explanation:
      "Vaak **verraadt een woord** dat het om een mening gaat. Let op deze signaalwoorden:\n\n" +
      "• **Gevoel/oordeel**: prachtig, vreselijk, saai, geweldig, lekker, lelijk.\n" +
      "• **'Ik vind / volgens mij / misschien / waarschijnlijk'.**\n" +
      "• **'Te' + iets**: te duur, te lang, te druk.\n" +
      "• **'Zou moeten / de beste / het mooiste'.**\n\n" +
      "Zie je zo'n woord? Dan is het meestal een mening, geen feit. Een feit gebruikt zulke woorden niet — dat geeft gewoon de gemeten of opgezochte werkelijkheid.",
    checks: [
      {
        q: "Welk woord verraadt vaak een **mening**?",
        options: ["prachtig", "drie", "maandag", "meter"],
        answer: 0,
        wrongHints: [null, "Een getal is meestal een feit.", "Een dag is een feit.", "Een maat is een feit."],
        uitlegPad: {
          stappen: [{ titel: "'Prachtig' = oordeel", tekst: "'Prachtig' zegt wat iemand mooi vindt — een mening. Getallen, dagen en maten zijn feiten." }],
          niveaus: {
            basis: "'Prachtig' is een oordeel → mening-signaalwoord.",
            simpeler: "Welk woord gaat over mooi/lelijk vinden?",
            nogSimpeler: "Welk woord zegt dat iets mooi is?",
          },
        },
      },
      {
        q: "Welke zin bevat een mening-signaalwoord?",
        options: [
          "Volgens mij wordt het morgen mooi weer.",
          "Het is nu 18 graden.",
          "De zon komt om 6 uur op.",
          "Het regent op dit moment.",
        ],
        answer: 0,
        wrongHints: [null, "De temperatuur is een feit.", "De zonsopkomst is op te zoeken — feit.", "Dat kun je zien — feit."],
        uitlegPad: {
          stappen: [{ titel: "'Volgens mij' = mening", tekst: "'Volgens mij' zegt: dit is wat ik denk/vind. Dat maakt het een mening, geen zeker feit." }],
          niveaus: {
            basis: "'Volgens mij' verraadt een mening.",
            simpeler: "Welke zin begint met wat iemand zelf denkt?",
            nogSimpeler: "Welke zin heeft de woorden 'volgens mij'?",
          },
        },
      },
      {
        q: "De woorden 'ik vind dat...' wijzen op...",
        options: ["een mening", "een feit", "een telling", "een meting"],
        answer: 0,
        wrongHints: [null, "Een feit zeg je niet met 'ik vind'.", "Tellen levert een feit op.", "Meten levert een feit op."],
        uitlegPad: {
          stappen: [{ titel: "'Ik vind' = jouw oordeel", tekst: "Met 'ik vind dat...' geef je je eigen oordeel — dat is altijd een mening." }],
          niveaus: {
            basis: "'Ik vind dat...' leidt altijd een mening in.",
            simpeler: "Geef je met 'ik vind' een feit of je eigen mening?",
            nogSimpeler: "Is 'ik vind' van jou persoonlijk, of voor iedereen waar?",
          },
        },
      },
      {
        q: "Welke zin is een mening?",
        options: [
          "Die jas is veel te duur.",
          "Die jas kost 40 euro.",
          "Die jas is blauw.",
          "Die jas heeft een capuchon.",
        ],
        answer: 0,
        wrongHints: [null, "De prijs kun je aflezen — feit.", "De kleur kun je zien — feit.", "Dat kun je controleren — feit."],
        uitlegPad: {
          stappen: [{ titel: "'Te duur' = oordeel", tekst: "Of 40 euro 'te duur' is, vindt niet iedereen. Het woordje 'te' verraadt de mening." }],
          niveaus: {
            basis: "'Te duur' is een oordeel → mening. De prijs zelf is een feit.",
            simpeler: "Welke zin zegt wat iemand van de prijs vindt?",
            nogSimpeler: "Welke zin heeft 'te' (te duur) erin?",
          },
        },
      },
      {
        q: "Welk woord in de zin *'Wiskunde is een supermoeilijk vak'* verraadt dat het een mening is?",
        options: ["supermoeilijk", "wiskunde", "een", "vak"],
        answer: 0,
        wrongHints: [null, "Wiskunde is gewoon de naam van het vak — geen oordeel.", "'Een' is een lidwoord — zegt niets over mening of feit.", "'Vak' is een gewoon woord."],
        uitlegPad: {
          stappen: [{ titel: "'Supermoeilijk' = oordeel", tekst: "'Supermoeilijk' zegt wat iemand van wiskunde vindt. Dat vinden niet alle kinderen — het is een mening." }],
          niveaus: {
            basis: "'Supermoeilijk' is een oordeel → signaalwoord voor mening.",
            simpeler: "Welk woord zegt hoe iemand wiskunde beleeft?",
            nogSimpeler: "Welk woord laat zien wat iemand van wiskunde vindt?",
          },
        },
      },
      {
        q: "Waarschijnlijk wordt het morgen droog. — Welk woord wijst op een mening?",
        options: ["Waarschijnlijk", "morgen", "droog", "het"],
        answer: 0,
        wrongHints: [null, "'Morgen' is een tijdaanduiding — feit.", "Of het droog is, kun je morgen gewoon zien — dat is te controleren.", "'Het' is een gewoon woordje, geen oordeel."],
        uitlegPad: {
          stappen: [{ titel: "'Waarschijnlijk' = onzekerheid/mening", tekst: "'Waarschijnlijk' geeft aan dat iemand dit denkt maar niet zeker weet. Dat is een mening-signaalwoord." }],
          niveaus: {
            basis: "'Waarschijnlijk' zegt dat iemand iets denkt, niet dat het zeker is → mening.",
            simpeler: "Welk woord zegt dat iemand het niet zeker weet?",
            nogSimpeler: "Welk woord betekent 'ik denk van wel, maar weet het niet zeker'?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk woord in de zin *'Die tekenfilm was echt geweldig'* verraadt een mening?",
        options: ["geweldig", "tekenfilm", "die", "was"],
        answer: 0,
        wrongHints: [null, "'Tekenfilm' zegt alleen wat voor film het is.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "'Geweldig' = oordeel",
              tekst: "'Geweldig' zegt wat iemand van de tekenfilm vond. Een ander vond hem misschien saai. Het is een signaalwoord voor een mening.",
            },
          ],
          niveaus: {
            basis: "'Geweldig' is een oordeel → signaalwoord.",
            simpeler: "Welk woord zegt hoe goed iemand de film vond?",
            nogSimpeler: "Welk woord zou een ander kunnen vervangen door 'saai'?",
          },
        },
      },
      {
        q: "Welke zin over de bibliotheek is een mening?",
        options: [
          "Bibliotheekboeken zijn saai.",
          "In de bibliotheek kun je boeken lenen.",
          "In de bibliotheek staan boeken.",
          "Een bibliotheekboek breng je na een tijdje terug.",
        ],
        answer: 0,
        wrongHints: [null, "Dat kun je gewoon nakijken.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "'Saai' = signaalwoord",
              tekst: "'Saai' is een oordeel: niet iedereen vindt bibliotheekboeken saai. De andere zinnen kun je nakijken.",
            },
          ],
          niveaus: {
            basis: "'Saai' verraadt een mening.",
            simpeler: "Welke zin heeft een woord dat zegt wat iemand vindt?",
            nogSimpeler: "Vindt iedereen bibliotheekboeken saai?",
          },
        },
      },
      {
        q: "Een rugzak weegt 3 kilo. Welke zin over die rugzak is een mening?",
        options: [
          "De rugzak is veel te zwaar.",
          "De rugzak weegt 3000 gram.",
          "De rugzak weegt meer dan 2 kilo.",
          "De rugzak weegt minder dan 4 kilo.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Reken 3 kilo om naar gram. Klopt het?",
          null,
          "Kun je dit nakijken met een weegschaal?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "'Te zwaar' = oordeel",
              tekst: "3000 gram, meer dan 2 kilo en minder dan 4 kilo kun je allemaal nakijken met een weegschaal. 'Te zwaar' is wat iemand vindt: het woordje 'te' verraadt de mening.",
            },
          ],
          niveaus: {
            basis: "'Te' + iets (te zwaar) is een signaalwoord → mening.",
            simpeler: "Welke zin kun je NIET nakijken met een weegschaal?",
            nogSimpeler: "Welke zin heeft het woordje 'te' erin?",
          },
        },
      },
      {
        q: "Welke zin heeft **geen** mening-signaalwoord?",
        options: [
          "De bus vertrekt om tien over acht.",
          "Ik vind de bus altijd te vol.",
          "Volgens mij is de bus vandaag laat.",
          "De bus is een vreselijk vervoermiddel.",
        ],
        answer: 0,
        wrongHints: [null, "Kijk naar 'ik vind' en 'te'.", null, "Zegt 'vreselijk' wat iemand vindt?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Geen signaalwoord = feit",
              tekst: "Een vertrektijd kun je nakijken op een bord of in een app. De andere zinnen hebben signaalwoorden: 'ik vind', 'te', 'volgens mij', 'vreselijk'.",
            },
          ],
          niveaus: {
            basis: "Een feit gebruikt geen signaalwoorden: de vertrektijd kun je nakijken.",
            simpeler: "In welke zin staat geen 'ik vind', 'volgens mij', 'te' of 'vreselijk'?",
            nogSimpeler: "Welke zin kun je controleren op het bord bij de bushalte?",
          },
        },
      },
    ],
  },

  // ─── D. In de tekst ───────────────────────────────────────
  {
    title: "In de tekst — feit of mening?",
    explanation:
      "Bij de Doorstroomtoets moet je in een tekst aanwijzen wat een **feit** is en wat een **mening**. Vraag je bij elke zin twee dingen af:\n\n" +
      "1. **Kan ik dit controleren** (opzoeken, meten, tellen)? → feit.\n" +
      "2. **Gaat het over wat iemand vindt** (mooi, te duur, de beste)? → mening.\n\n" +
      "Let op signaalwoorden (prachtig, te lang, ik vind) — die wijzen bijna altijd op een mening.",
    checks: [
      {
        q: "Feit of mening? *De Eiffeltoren staat in Parijs.*",
        options: ["feit", "mening", "geen van beide", "allebei"],
        answer: 0,
        wrongHints: [null, "Je kunt opzoeken waar de toren staat.", "Het is duidelijk te controleren.", "Een zin is óf feit óf mening."],
        uitlegPad: {
          stappen: [{ titel: "Op te zoeken", tekst: "Waar de Eiffeltoren staat kun je opzoeken op een kaart — voor iedereen hetzelfde. Dat is een feit." }],
          niveaus: {
            basis: "Te controleren op een kaart → feit.",
            simpeler: "Kun je opzoeken waar de toren staat? Dan is het een feit.",
            nogSimpeler: "Is dit voor iedereen waar?",
          },
        },
      },
      {
        q: "Feit of mening? *De Eiffeltoren is het mooiste bouwwerk ter wereld.*",
        options: ["mening", "feit", "geen van beide", "allebei"],
        answer: 0,
        wrongHints: [null, "'Mooiste' kun je niet nameten; niet iedereen vindt dat.", "Het is geen te controleren gegeven.", "Een zin is óf feit óf mening."],
        uitlegPad: {
          stappen: [{ titel: "'Mooiste' = oordeel", tekst: "Of het het mooiste bouwwerk is, vindt niet iedereen. 'Mooiste' verraadt de mening." }],
          niveaus: {
            basis: "'Mooiste' is een oordeel → mening.",
            simpeler: "Vindt iedereen dit het mooiste? Nee → mening.",
            nogSimpeler: "Welk woord zegt dat iemand het 't mooist vindt?",
          },
        },
      },
      {
        q: "In een tekst staat: *Ons dorp heeft 4.000 inwoners. Het is het gezelligste dorp van de streek.* Welk deel is een mening?",
        options: [
          "Het is het gezelligste dorp van de streek.",
          "Ons dorp heeft 4.000 inwoners.",
          "Allebei zijn meningen.",
          "Allebei zijn feiten.",
        ],
        answer: 0,
        wrongHints: [null, "Het aantal inwoners kun je tellen — dat is juist een feit.", "Het inwoneraantal is een feit.", "'Gezelligste' is geen feit."],
        uitlegPad: {
          stappen: [{ titel: "Tel vs. oordeel", tekst: "4.000 inwoners kun je tellen (feit). 'Het gezelligste dorp' is wat iemand vindt (mening)." }],
          niveaus: {
            basis: "Het inwoneraantal = feit; 'het gezelligste' = mening.",
            simpeler: "Welk deel zegt wat iemand vindt?",
            nogSimpeler: "Welke zin heeft 'gezelligste' erin?",
          },
        },
      },
      {
        q: "Waarom is *'Voetbal is een saaie sport'* een mening?",
        options: [
          "omdat niet iedereen dat vindt",
          "omdat je het kunt opzoeken",
          "omdat er een getal in staat",
          "omdat het altijd waar is",
        ],
        answer: 0,
        wrongHints: [null, "Juist niet — je kunt het niet opzoeken.", "Er staat geen getal in.", "Het is niet voor iedereen waar."],
        uitlegPad: {
          stappen: [{ titel: "Mensen denken er verschillend over", tekst: "De een vindt voetbal saai, de ander spannend. Omdat het per persoon verschilt, is het een mening." }],
          niveaus: {
            basis: "Niet iedereen vindt voetbal saai → mening.",
            simpeler: "Kunnen mensen het hier oneens over zijn? Ja → mening.",
            nogSimpeler: "Vindt iedereen voetbal saai? Nee — dus mening.",
          },
        },
      },
      {
        q: "In een tekst staat: *'Nederland heeft 18 miljoen inwoners. Het is het fijnste land van Europa.'* Welk deel is een feit?",
        options: [
          "Nederland heeft 18 miljoen inwoners.",
          "Het is het fijnste land van Europa.",
          "Allebei zijn feiten.",
          "Allebei zijn meningen.",
        ],
        answer: 0,
        wrongHints: [null, "'Fijnste' is een oordeel — dat is geen feit.", "Eén van de twee is een mening.", "Het inwoneraantal is te tellen — dat is geen mening."],
        uitlegPad: {
          stappen: [{ titel: "Tellen vs. oordelen", tekst: "18 miljoen inwoners kun je tellen (feit). 'Het fijnste land' is een oordeel — niet iedereen is het daarmee eens (mening)." }],
          niveaus: {
            basis: "Inwoneraantal = feit; 'fijnste' = mening.",
            simpeler: "Welk deel is te controleren?",
            nogSimpeler: "Welke zin heeft een getal erin dat je kunt tellen?",
          },
        },
      },
      {
        q: "Feit of mening? *De Tweede Wereldoorlog eindigde in 1945.*",
        options: ["feit", "mening", "geen van beide", "allebei"],
        answer: 0,
        wrongHints: [null, "Dit is te controleren in een geschiedenisboek.", "Het is duidelijk waar of niet waar.", "Een zin is óf feit óf mening."],
        uitlegPad: {
          stappen: [{ titel: "Datum is te controleren", tekst: "Wanneer de oorlog eindigde staat in boeken. Dat is voor iedereen hetzelfde — een feit." }],
          niveaus: {
            basis: "Een historische datum kun je nakijken → feit.",
            simpeler: "Kun je het jaar opzoeken in een boek? Ja → feit.",
            nogSimpeler: "Is het voor iedereen waar dat de oorlog in 1945 eindigde?",
          },
        },
      },
      {
        q: "Feit of mening? *Dit boek is veel te moeilijk voor groep 7.*",
        options: ["mening", "feit", "geen van beide", "allebei"],
        answer: 0,
        wrongHints: [null, "Of een boek 'te moeilijk' is, kan een leerkracht anders beoordelen dan een leerling.", "Het is wel een oordeel — dus het is feit of mening.", "Een zin is óf feit óf mening."],
        uitlegPad: {
          stappen: [{ titel: "'Te moeilijk' = oordeel", tekst: "Of een boek te moeilijk is, vindt niet iedereen hetzelfde. 'Te moeilijk' is een beoordeling — dat is een mening." }],
          niveaus: {
            basis: "'Te moeilijk' is een oordeel → mening.",
            simpeler: "Kunnen twee mensen hier anders over denken? Ja → mening.",
            nogSimpeler: "Welk woord laat zien dat iemand iets vindt?",
          },
        },
      },
      {
        q: "Welke zin is een feit?",
        options: [
          "Een mens heeft twee ogen.",
          "Bruine ogen zijn mooier dan blauwe.",
          "Grote ogen staan beter.",
          "Iedereen kijkt graag naar blauwe ogen.",
        ],
        answer: 0,
        wrongHints: [null, "'Mooier' is een oordeel — mening.", "'Beter staan' is een mening.", "Niet iedereen vindt dat — mening."],
        uitlegPad: {
          stappen: [{ titel: "Te tellen = feit", tekst: "Dat een mens twee ogen heeft kun je tellen en controleren. De andere zinnen zijn oordelen — meningen." }],
          niveaus: {
            basis: "Te tellen en voor iedereen waar → feit.",
            simpeler: "Welke zin kun je nameten of controleren?",
            nogSimpeler: "Welke zin is voor iedereen waar?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "In een tekst staat: *Onze school heeft acht groepen. De les begint om half negen. Het schoolplein is het leukste van de stad. Op het plein staan twee bankjes.* Welke zin is een mening?",
        options: [
          "Het schoolplein is het leukste van de stad.",
          "Onze school heeft acht groepen.",
          "De les begint om half negen.",
          "Op het plein staan twee bankjes.",
        ],
        answer: 0,
        wrongHints: [null, "De groepen kun je tellen.", null, "De bankjes kun je tellen."],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek het oordeel",
              tekst: "Groepen en bankjes kun je tellen, de begintijd kun je nakijken. 'Het leukste' is wat iemand vindt — dat is de mening.",
            },
          ],
          niveaus: {
            basis: "'Het leukste' is een oordeel → mening. De rest kun je tellen of nakijken.",
            simpeler: "Welke zin kun je niet tellen of nakijken?",
            nogSimpeler: "Welke zin heeft 'het leukste' erin?",
          },
        },
      },
      {
        q: "In een tekst staat: *De Waddenzee ligt in het noorden van Nederland. Het is het mooiste natuurgebied dat er bestaat.* Wat doet de schrijver in de tweede zin?",
        options: [
          "Hij geeft zijn mening.",
          "Hij noemt een meting.",
          "Hij noemt een feit.",
          "Hij telt iets na.",
        ],
        answer: 0,
        wrongHints: [null, "Wordt er in die zin iets gemeten?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "'Het mooiste' = mening",
              tekst: "Waar de Waddenzee ligt, kun je op een kaart opzoeken (feit). 'Het mooiste natuurgebied' is wat de schrijver vindt — een mening.",
            },
          ],
          niveaus: {
            basis: "Zin 1 = feit, zin 2 = mening ('het mooiste').",
            simpeler: "Welk woord in de tweede zin zegt wat de schrijver vindt?",
            nogSimpeler: "Vindt iedereen de Waddenzee het mooiste natuurgebied?",
          },
        },
      },
    ],
  },
];

export default {
  id: "feit-mening-po",
  title: "Feit & mening",
  subject: "taal",
  level: "groep7-8",
  sloThema: "taal-feit-mening",
  chapters,
  steps,
  prerequisites: [],
};
