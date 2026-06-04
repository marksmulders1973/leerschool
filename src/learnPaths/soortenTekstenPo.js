// Leerpad: Soorten teksten herkennen — groep 7-8 PO.
// Doorstroomtoets-onderdeel taal (begrijpend lezen). Doel van een tekst:
// informeren, instrueren, vermaken (verhalend) of overtuigen (betogend).
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Informatieve tekst", emoji: "📚", from: 0, to: 0 },
  { letter: "B", title: "Instructieve tekst", emoji: "🔧", from: 1, to: 1 },
  { letter: "C", title: "Verhalend & betogend", emoji: "📖", from: 2, to: 2 },
  { letter: "D", title: "In het echt: welk soort tekst?", emoji: "🔍", from: 3, to: 3 },
];

const steps = [
  // ─── A. Informatief ───────────────────────────────────────
  {
    title: "Informatieve tekst — om iets te weten te komen",
    explanation:
      "Elke tekst heeft een **doel**: waarom is hij geschreven? Als je het doel kent, begrijp je de tekst beter.\n\n" +
      "Een **informatieve tekst** wil je iets **laten weten** of uitleggen. Je leest 'm om iets te begrijpen of op te zoeken.\n\n" +
      "Voorbeelden: een nieuwsbericht, een artikel over dieren, een schoolboek-tekst, een encyclopedie.\n\n" +
      "Kenmerken: feiten, uitleg, geen verhaal of mening. Het antwoord op 'waarom lees ik dit?' is: *om iets te wéten.*",
    checks: [
      {
        q: "Een tekst die je iets wil uitleggen of laten weten, heet een...",
        options: ["informatieve tekst", "instructieve tekst", "verhalende tekst", "betogende tekst"],
        answer: 0,
        wrongHints: [null, "Die zegt wat je moet dóén (stappen).", "Die vertelt een verzonnen verhaal.", "Die wil je van een mening overtuigen."],
        uitlegPad: {
          stappen: [{ titel: "Informeren = laten weten", tekst: "Een informatieve tekst geeft je informatie: hij wil je iets laten weten of uitleggen." }],
          niveaus: {
            basis: "Een tekst die uitlegt/informeert = informatieve tekst.",
            simpeler: "Lees je het om iets te wéten of om iets te dóén? Om te weten → informatief.",
            nogSimpeler: "Welk woord lijkt op 'informatie'?",
          },
        },
      },
      {
        q: "Welke van deze is een informatieve tekst?",
        options: [
          "een nieuwsbericht over het weer van morgen",
          "een recept voor pannenkoeken",
          "een sprookje over een draak",
          "een advertentie voor sportschoenen",
        ],
        answer: 0,
        wrongHints: [null, "Een recept zegt wat je moet doen → instructief.", "Een sprookje is een verhaal → verhalend.", "Een advertentie wil je iets laten kopen → betogend."],
        uitlegPad: {
          stappen: [{ titel: "Welke geeft alleen informatie?", tekst: "Een nieuwsbericht over het weer geeft je informatie. De andere willen je iets láten doen, vermaken of overtuigen." }],
          niveaus: {
            basis: "Het nieuwsbericht informeert je over het weer.",
            simpeler: "Welke tekst is er gewoon om je iets te laten weten?",
            nogSimpeler: "Welke gaat over feiten/nieuws?",
          },
        },
      },
      {
        q: "Wat is het doel van een informatieve tekst?",
        options: ["je iets laten weten", "je laten lachen", "je iets laten kopen", "je laten schrikken"],
        answer: 0,
        wrongHints: [null, "Dat hoort meer bij een grappig verhaal.", "Dat is het doel van reclame.", "Dat hoort bij een spannend verhaal."],
        uitlegPad: {
          stappen: [{ titel: "Doel = informeren", tekst: "Een informatieve tekst is bedoeld om je kennis te geven: je iets laten weten." }],
          niveaus: {
            basis: "Het doel is je informeren (iets laten weten).",
            simpeler: "Lees je een informatieve tekst om iets te weten of om te lachen?",
            nogSimpeler: "Waar is 'informatie' voor?",
          },
        },
      },
      {
        q: "Een tekst met de titel 'Hoe leven pinguïns?' vol feiten over pinguïns is...",
        options: ["informatief", "instructief", "verhalend", "betogend"],
        answer: 0,
        wrongHints: [null, "Het zegt niet wat jíj moet doen.", "Het is geen verzonnen verhaal.", "Het probeert je niet te overtuigen."],
        uitlegPad: {
          stappen: [{ titel: "Feiten = informeren", tekst: "De tekst geeft feiten over pinguïns om je iets te leren → informatief." }],
          niveaus: {
            basis: "Feiten die je iets leren → informatieve tekst.",
            simpeler: "Geeft de tekst je kennis over pinguïns?",
            nogSimpeler: "Leer je hier iets, of moet je iets doen?",
          },
        },
      },
    ],
  },

  // ─── B. Instructief ───────────────────────────────────────
  {
    title: "Instructieve tekst — om iets te doen",
    explanation:
      "Een **instructieve tekst** legt uit **hoe je iets doet**. Je voert de stappen uit terwijl je leest.\n\n" +
      "Voorbeelden: een recept, een handleiding, een gebruiksaanwijzing, een knutsel-stappenplan, spelregels.\n\n" +
      "**Kenmerken die je herkent:**\n" +
      "• **Stappen** of nummers (1, 2, 3…).\n" +
      "• Werkwoorden die een opdracht geven: *pak, meng, knip, druk op…* (gebiedende wijs).\n\n" +
      "Het antwoord op 'waarom lees ik dit?' is: *om iets te kunnen dóén.*",
    checks: [
      {
        q: "Een recept of een handleiding is een...",
        options: ["instructieve tekst", "informatieve tekst", "verhalende tekst", "betogende tekst"],
        answer: 0,
        wrongHints: [null, "Die geeft alleen kennis, geen stappen om te doen.", "Die vertelt een verhaal.", "Die wil je overtuigen."],
        uitlegPad: {
          stappen: [{ titel: "Stappen om te doen", tekst: "Een recept/handleiding vertelt stap voor stap hoe je iets doet → instructieve tekst." }],
          niveaus: {
            basis: "Stappen om iets te doen → instructieve tekst.",
            simpeler: "Moet je iets dóén terwijl je leest? Dan is het instructief.",
            nogSimpeler: "Welk woord lijkt op 'instructie' (opdracht)?",
          },
        },
      },
      {
        q: "Wat herken je vaak in een instructieve tekst?",
        options: ["genummerde stappen die je uitvoert", "een spannend einde", "een mening van de schrijver", "het laatste nieuws"],
        answer: 0,
        wrongHints: [null, "Een spannend einde hoort bij een verhaal.", "Een mening hoort bij een betogende tekst.", "Nieuws hoort bij een informatieve tekst."],
        uitlegPad: {
          stappen: [{ titel: "Stappen", tekst: "Instructieve teksten staan vol stappen en opdracht-werkwoorden (pak, meng, knip)." }],
          niveaus: {
            basis: "Genummerde stappen om uit te voeren = kenmerk van instructie.",
            simpeler: "Staan er stappen in die je moet doen?",
            nogSimpeler: "Wat hoort bij een recept: stappen of een spannend einde?",
          },
        },
      },
      {
        q: "Welke is een instructieve tekst?",
        options: [
          "Zo maak je een vlieger: pak een vel papier en vouw het dubbel...",
          "Er was eens een vlieger die kon praten...",
          "Vliegers werden vroeger in China uitgevonden.",
          "De mooiste vlieger die ik ooit zag, was rood.",
        ],
        answer: 0,
        wrongHints: [null, "Dat begint als een verhaal.", "Dat is een feit → informatief.", "Dat is een mening."],
        uitlegPad: {
          stappen: [{ titel: "'Zo maak je...' + stappen", tekst: "'Zo maak je een vlieger: pak..., vouw...' geeft stappen om te doen → instructief." }],
          niveaus: {
            basis: "De tekst met stappen om een vlieger te maken is instructief.",
            simpeler: "Welke tekst zegt wat je moet doen, stap voor stap?",
            nogSimpeler: "Welke begint met 'Zo maak je...'?",
          },
        },
      },
      {
        q: "De spelregels van een bordspel zijn een... tekst.",
        options: ["instructieve", "informatieve", "verhalende", "betogende"],
        answer: 0,
        wrongHints: [null, "Ze geven niet alleen kennis — ze zeggen wat je moet doen.", "Het is geen verhaal.", "Ze willen je niet overtuigen."],
        uitlegPad: {
          stappen: [{ titel: "Regels = doen", tekst: "Spelregels vertellen hoe je het spel speelt, stap voor stap → instructief." }],
          niveaus: {
            basis: "Spelregels zeggen wat je moet doen → instructief.",
            simpeler: "Leg je spelregels uit om te spelen (doen) of om te weten?",
            nogSimpeler: "Vertel je met spelregels hoe je iets dóét?",
          },
        },
      },
    ],
  },

  // ─── C. Verhalend & betogend ──────────────────────────────
  {
    title: "Verhalend & betogend",
    explanation:
      "**Verhalende tekst** — om je te **vermaken**. Een verzonnen (of na-verteld) verhaal: een spannend, grappig of mooi verhaal.\n" +
      "Voorbeelden: een sprookje, een spannend boek, een strip. Kenmerken: personages, een gebeurtenis, vaak 'er was eens'.\n\n" +
      "**Betogende tekst** — om je te **overtuigen** van een mening. De schrijver wil dat jij iets gaat vinden of doen.\n" +
      "Voorbeelden: een advertentie, een ingezonden brief, een poster 'stem op...'. Kenmerken: een mening + argumenten ('want', 'daarom moet je...').",
    checks: [
      {
        q: "Een verzonnen verhaal dat je wil vermaken, is een...",
        options: ["verhalende tekst", "informatieve tekst", "instructieve tekst", "betogende tekst"],
        answer: 0,
        wrongHints: [null, "Die geeft feiten, geen verhaal.", "Die geeft stappen om iets te doen.", "Die wil je overtuigen."],
        uitlegPad: {
          stappen: [{ titel: "Vermaken = verhaal", tekst: "Een tekst om je te vermaken met een verhaal is een verhalende tekst." }],
          niveaus: {
            basis: "Een verhaal om te vermaken = verhalende tekst.",
            simpeler: "Lees je het voor de lol (een verhaal) of om iets te weten?",
            nogSimpeler: "Welk woord lijkt op 'verhaal'?",
          },
        },
      },
      {
        q: "Een tekst die je wil overtuigen van een mening, is een...",
        options: ["betogende tekst", "verhalende tekst", "instructieve tekst", "informatieve tekst"],
        answer: 0,
        wrongHints: [null, "Die wil je vermaken, niet overtuigen.", "Die geeft stappen.", "Die geeft alleen feiten."],
        uitlegPad: {
          stappen: [{ titel: "Overtuigen = betogen", tekst: "Een betogende tekst wil je overtuigen van een mening, met argumenten." }],
          niveaus: {
            basis: "Overtuigen van een mening = betogende tekst.",
            simpeler: "Wil de tekst dat jij iets gáát vinden? Dan is het betogend.",
            nogSimpeler: "Welke tekst wil je mening veranderen?",
          },
        },
      },
      {
        q: "Welke is een betogende tekst?",
        options: [
          "Iedereen zou moeten recyclen, want plastic vervuilt de zee.",
          "Recyclen is het hergebruiken van afval.",
          "Zo scheid je je afval: doe glas in de glasbak...",
          "Er was eens een dorp zonder afval.",
        ],
        answer: 0,
        wrongHints: [null, "Dat is een feit/uitleg → informatief.", "Dat zijn stappen → instructief.", "Dat begint als een verhaal."],
        uitlegPad: {
          stappen: [{ titel: "Mening + argument", tekst: "'Iedereen zou moeten recyclen, want...' geeft een mening met een argument → betogend." }],
          niveaus: {
            basis: "De zin met 'zou moeten' + 'want' wil je overtuigen → betogend.",
            simpeler: "Welke tekst geeft een mening en wil je overhalen?",
            nogSimpeler: "Welke zin zegt wat jij zou móéten doen?",
          },
        },
      },
      {
        q: "'Er was eens een prinses die niet kon slapen...' Dit is een... tekst.",
        options: ["verhalende", "informatieve", "instructieve", "betogende"],
        answer: 0,
        wrongHints: [null, "Het geeft geen feiten om te leren.", "Het geeft geen stappen.", "Het wil je niet overtuigen."],
        uitlegPad: {
          stappen: [{ titel: "'Er was eens' = verhaal", tekst: "'Er was eens...' is de start van een verzonnen verhaal → verhalende tekst." }],
          niveaus: {
            basis: "'Er was eens' hoort bij een verhaal → verhalend.",
            simpeler: "Begint dit als een sprookje/verhaal?",
            nogSimpeler: "Is dit een verhaal of een lijst met feiten?",
          },
        },
      },
    ],
  },

  // ─── D. In het echt ───────────────────────────────────────
  {
    title: "In het echt — welk soort tekst?",
    explanation:
      "Bij de Doorstroomtoets moet je het **soort tekst** of het **doel** herkennen. Vraag je steeds af: *waarom is deze tekst geschreven?*\n\n" +
      "• Om je iets te **laten weten** → informatief.\n" +
      "• Om je iets te **laten doen** (stappen) → instructief.\n" +
      "• Om je te **vermaken** (verhaal) → verhalend.\n" +
      "• Om je te **overtuigen** (mening + argumenten) → betogend.\n\n" +
      "Kijk naar kenmerken: stappen → instructief, 'er was eens' → verhalend, 'je moet… want…' → betogend, feiten → informatief.",
    checks: [
      {
        q: "Een folder die je een nieuwe telefoon wil laten kopen — welk soort tekst?",
        options: ["betogend (overtuigen)", "informatief (laten weten)", "instructief (laten doen)", "verhalend (vermaken)"],
        answer: 0,
        wrongHints: [null, "Een folder wil je niet alleen informeren maar overhalen tot kopen.", "Er staan geen stappen in.", "Het is geen verhaal."],
        uitlegPad: {
          stappen: [{ titel: "Laten kopen = overtuigen", tekst: "Een folder wil je overhalen iets te kopen → betogende (overtuigende) tekst." }],
          niveaus: {
            basis: "Reclame/folder = overtuigen → betogend.",
            simpeler: "Wil de folder je overhalen om te kopen?",
            nogSimpeler: "Is een folder bedoeld om je iets te laten kopen?",
          },
        },
      },
      {
        q: "De gebruiksaanwijzing bij een nieuwe lamp — welk soort tekst?",
        options: ["instructief (laten doen)", "informatief (laten weten)", "betogend (overtuigen)", "verhalend (vermaken)"],
        answer: 0,
        wrongHints: [null, "Het geeft niet alleen kennis, maar stappen om te doen.", "Het wil je niet overtuigen van een mening.", "Het is geen verzonnen verhaal."],
        uitlegPad: {
          stappen: [{ titel: "Hoe-doe-je-dat = instructief", tekst: "Een gebruiksaanwijzing legt stap voor stap uit hoe je de lamp gebruikt → instructief." }],
          niveaus: {
            basis: "Een gebruiksaanwijzing geeft stappen → instructief.",
            simpeler: "Moet je iets dóén met de lamp volgens de tekst?",
            nogSimpeler: "Legt het uit hóé je iets doet?",
          },
        },
      },
      {
        q: "Een artikel met feiten over hoe een vulkaan werkt — welk soort tekst?",
        options: ["informatief (laten weten)", "instructief (laten doen)", "betogend (overtuigen)", "verhalend (vermaken)"],
        answer: 0,
        wrongHints: [null, "Je hoeft zelf niks te doen.", "Het geeft geen mening.", "Het is geen verzonnen verhaal."],
        uitlegPad: {
          stappen: [{ titel: "Feiten = informeren", tekst: "Een artikel met feiten over vulkanen wil je iets laten weten → informatief." }],
          niveaus: {
            basis: "Feiten om iets te leren → informatief.",
            simpeler: "Leer je hier iets over vulkanen?",
            nogSimpeler: "Geeft de tekst kennis of een mening?",
          },
        },
      },
      {
        q: "Hoe weet je dat een tekst instructief is?",
        options: [
          "hij vertelt stap voor stap wat je moet doen",
          "hij geeft de mening van de schrijver",
          "hij vertelt een verzonnen verhaal",
          "hij geeft het laatste nieuws",
        ],
        answer: 0,
        wrongHints: [null, "Dat hoort bij een betogende tekst.", "Dat hoort bij een verhalende tekst.", "Dat hoort bij een informatieve tekst."],
        uitlegPad: {
          stappen: [{ titel: "Stappen = instructief", tekst: "Een instructieve tekst herken je aan de stappen/opdrachten die je moet uitvoeren." }],
          niveaus: {
            basis: "Stap-voor-stap wat je moet doen → instructief.",
            simpeler: "Welk kenmerk hoort bij instructie: stappen of een mening?",
            nogSimpeler: "Wat staat er in een recept: stappen of nieuws?",
          },
        },
      },
    ],
  },
];

export default {
  id: "soorten-teksten-po",
  title: "Soorten teksten herkennen",
  subject: "taal",
  level: "groep7-8",
  sloThema: "taal-soorten-teksten",
  chapters,
  steps,
  prerequisites: [],
};
