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
