// Leerpad: Romeinse cijfers — groep 7-8 PO.
// Doorstroomtoets-onderdeel rekenen. Symbolen I V X L C M, optellen, aftrekken,
// en lezen van jaartallen/eeuwen/hoofdstukken/klok.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "De symbolen", emoji: "🔠", from: 0, to: 0 },
  { letter: "B", title: "Optellen", emoji: "➕", from: 1, to: 1 },
  { letter: "C", title: "Aftrekken", emoji: "➖", from: 2, to: 2 },
  { letter: "D", title: "In het echt: jaartallen & eeuwen", emoji: "📅", from: 3, to: 3 },
];

const steps = [
  // ─── A. Symbolen ──────────────────────────────────────────
  {
    title: "De Romeinse symbolen",
    explanation:
      "De Romeinen schreven getallen met **letters**. Deze moet je kennen:\n\n" +
      "| Symbool | Waarde |\n" +
      "|---|---|\n" +
      "| **I** | 1 |\n" +
      "| **V** | 5 |\n" +
      "| **X** | 10 |\n" +
      "| **L** | 50 |\n" +
      "| **C** | 100 |\n" +
      "| **D** | 500 |\n" +
      "| **M** | 1000 |\n\n" +
      "**Ezelsbruggetje:** I Vond Xander Leuk, C(see) Da Man (I-V-X-L-C-D-M).\n\n" +
      "Je leest Romeinse getallen van **links naar rechts** en telt de waarden op — behalve bij een paar aftrek-uitzonderingen (volgende hoofdstukken).",
    checks: [
      {
        q: "Welk getal is **X**?",
        options: ["10", "5", "100", "50"],
        answer: 0,
        wrongHints: [null, "Dat is V.", "Dat is C.", "Dat is L."],
        uitlegPad: {
          stappen: [{ titel: "X = 10", tekst: "De letter X staat voor 10." }],
          niveaus: {
            basis: "X is het symbool voor 10.",
            simpeler: "Denk aan X in de rij I-V-X: 1, 5, 10.",
            nogSimpeler: "Welke waarde hoort bij X?",
          },
        },
      },
      {
        q: "Welk getal is **V**?",
        options: ["5", "10", "1", "50"],
        answer: 0,
        wrongHints: [null, "Dat is X.", "Dat is I.", "Dat is L."],
        uitlegPad: {
          stappen: [{ titel: "V = 5", tekst: "De letter V staat voor 5." }],
          niveaus: {
            basis: "V is het symbool voor 5.",
            simpeler: "In de rij I-V-X: 1, 5, 10. V is de middelste.",
            nogSimpeler: "Welke waarde hoort bij V?",
          },
        },
      },
      {
        q: "Hoe schrijf je **100** in Romeinse cijfers?",
        options: ["C", "M", "L", "D"],
        answer: 0,
        wrongHints: [null, "Dat is 1000.", "Dat is 50.", "Dat is 500."],
        uitlegPad: {
          stappen: [{ titel: "C = 100", tekst: "De letter C (van 'centum', honderd) staat voor 100." }],
          niveaus: {
            basis: "100 schrijf je als C.",
            simpeler: "C lijkt op 'cent' / honderd.",
            nogSimpeler: "Welke letter hoort bij 100?",
          },
        },
      },
      {
        q: "Welk symbool is **50**?",
        options: ["L", "C", "X", "V"],
        answer: 0,
        wrongHints: [null, "Dat is 100.", "Dat is 10.", "Dat is 5."],
        uitlegPad: {
          stappen: [{ titel: "L = 50", tekst: "De letter L staat voor 50." }],
          niveaus: {
            basis: "50 schrijf je als L.",
            simpeler: "Tussen X (10) en C (100) zit L (50).",
            nogSimpeler: "Welke letter hoort bij 50?",
          },
        },
      },
    ],
  },

  // ─── B. Optellen ──────────────────────────────────────────
  {
    title: "Optellen — kleiner ná groter",
    explanation:
      "Staat er een **kleiner symbool ná een groter** (of dezelfde)? Dan tel je de waarden **op**.\n\n" +
      "• **VI** = 5 + 1 = **6**\n" +
      "• **XV** = 10 + 5 = **15**\n" +
      "• **XII** = 10 + 1 + 1 = **12**\n" +
      "• **LX** = 50 + 10 = **60**\n\n" +
      "Je mag een symbool **maximaal 3 keer** achter elkaar zetten: III = 3, maar 4 schrijf je niet als IIII (dat doe je met aftrekken — volgende hoofdstuk).",
    checks: [
      {
        q: "Wat is **VI**?",
        options: ["6", "4", "7", "11"],
        answer: 0,
        wrongHints: [null, "Dat zou aftrekken zijn (I vóór V).", "Reken nog eens: 5 + 1.", "Dat zou twee X'en zijn."],
        uitlegPad: {
          stappen: [{ titel: "5 + 1", tekst: "I staat ná V, dus optellen: 5 + 1 = 6." }],
          niveaus: {
            basis: "V = 5, I = 1, samen 6.",
            simpeler: "De I staat achter de V, dus erbij optellen.",
            nogSimpeler: "5 + 1 = ?",
          },
        },
      },
      {
        q: "Wat is **XV**?",
        options: ["15", "5", "20", "115"],
        answer: 0,
        wrongHints: [null, "Vergeet de X niet (10).", "Dat zou XX zijn.", "Plak de getallen niet aan elkaar."],
        uitlegPad: {
          stappen: [{ titel: "10 + 5", tekst: "X = 10, V = 5. V staat erachter, dus 10 + 5 = 15." }],
          niveaus: {
            basis: "X = 10, V = 5, samen 15.",
            simpeler: "Tel de twee symbolen op.",
            nogSimpeler: "10 + 5 = ?",
          },
        },
      },
      {
        q: "Hoe schrijf je **12** in Romeinse cijfers?",
        options: ["XII", "IIX", "XX", "VVII"],
        answer: 0,
        wrongHints: [null, "Kleiner vóór groter is aftrekken; dat klopt hier niet.", "Dat is 20.", "Twee keer V mag niet — gebruik X."],
        uitlegPad: {
          stappen: [{ titel: "10 + 1 + 1", tekst: "12 = 10 + 1 + 1 = X + I + I = XII." }],
          niveaus: {
            basis: "12 = X (10) + II (2) = XII.",
            simpeler: "Eerst de 10 (X), dan twee keer 1 (II).",
            nogSimpeler: "Welke begint met X en dan twee I'tjes?",
          },
        },
      },
      {
        q: "Wat is **LX**?",
        options: ["60", "40", "55", "15"],
        answer: 0,
        wrongHints: [null, "X staat ná L, dus optellen, niet aftrekken.", "Reken: 50 + 10.", "Dat zou XV zijn."],
        uitlegPad: {
          stappen: [{ titel: "50 + 10", tekst: "L = 50, X = 10. X staat erachter, dus 50 + 10 = 60." }],
          niveaus: {
            basis: "L = 50, X = 10, samen 60.",
            simpeler: "De X staat achter de L → optellen.",
            nogSimpeler: "50 + 10 = ?",
          },
        },
      },
    ],
  },

  // ─── C. Aftrekken ─────────────────────────────────────────
  {
    title: "Aftrekken — kleiner vóór groter",
    explanation:
      "Staat er een **kleiner symbool vóór een groter**? Dan **trek je af**. Zo voorkom je vier dezelfde letters.\n\n" +
      "• **IV** = 5 − 1 = **4**\n" +
      "• **IX** = 10 − 1 = **9**\n" +
      "• **XL** = 50 − 10 = **40**\n" +
      "• **XC** = 100 − 10 = **90**\n\n" +
      "**Truc:** zie je een kleine letter links van een grote? Trek de kleine eraf. Staat de kleine rechts? Tel hem erbij.",
    checks: [
      {
        q: "Wat is **IV**?",
        options: ["4", "6", "1", "9"],
        answer: 0,
        wrongHints: [null, "Dat is VI (I ná V = optellen).", "Vergeet de V niet.", "Dat is IX."],
        uitlegPad: {
          stappen: [{ titel: "5 − 1", tekst: "I staat vóór V, dus aftrekken: 5 − 1 = 4." }],
          niveaus: {
            basis: "I vóór V betekent 5 − 1 = 4.",
            simpeler: "De kleine I staat links van de V → eraf halen.",
            nogSimpeler: "5 − 1 = ?",
          },
        },
      },
      {
        q: "Wat is **IX**?",
        options: ["9", "11", "6", "4"],
        answer: 0,
        wrongHints: [null, "Dat zou XI zijn (optellen).", "Dat is met V, niet X.", "Dat is IV."],
        uitlegPad: {
          stappen: [{ titel: "10 − 1", tekst: "I staat vóór X, dus aftrekken: 10 − 1 = 9." }],
          niveaus: {
            basis: "I vóór X betekent 10 − 1 = 9.",
            simpeler: "Kleine I links van de X → eraf halen.",
            nogSimpeler: "10 − 1 = ?",
          },
        },
      },
      {
        q: "Hoe schrijf je **40** in Romeinse cijfers?",
        options: ["XL", "LX", "XXXX", "VL"],
        answer: 0,
        wrongHints: [null, "Dat is 60 (optellen).", "Vier dezelfde letters mag niet.", "Zo werkt aftrekken niet — gebruik X vóór L."],
        uitlegPad: {
          stappen: [{ titel: "50 − 10", tekst: "40 = 50 − 10 = X vóór L = XL." }],
          niveaus: {
            basis: "40 = XL (X vóór L = 50 − 10).",
            simpeler: "Zet de kleine X links van de L om af te trekken.",
            nogSimpeler: "Welke heeft X vóór L?",
          },
        },
      },
      {
        q: "Wat is **XC**?",
        options: ["90", "110", "40", "85"],
        answer: 0,
        wrongHints: [null, "Dat zou CX zijn (optellen).", "Dat is XL.", "Zo werkt het niet — het is 100 − 10."],
        uitlegPad: {
          stappen: [{ titel: "100 − 10", tekst: "X staat vóór C, dus aftrekken: 100 − 10 = 90." }],
          niveaus: {
            basis: "X vóór C betekent 100 − 10 = 90.",
            simpeler: "Kleine X links van de C → eraf halen.",
            nogSimpeler: "100 − 10 = ?",
          },
        },
      },
    ],
  },

  // ─── D. In het echt ───────────────────────────────────────
  {
    title: "In het echt — jaartallen, eeuwen & klok",
    explanation:
      "Je komt Romeinse cijfers tegen op **klokken**, bij **eeuwen** (de 20e eeuw), in **hoofdstuknummers** en op oude **gebouwen** (bouwjaar).\n\n" +
      "Lees ze stuk voor stuk: kijk per symbool of je moet **optellen** (kleiner rechts) of **aftrekken** (kleiner links), en tel alles bij elkaar.\n\n" +
      "• **MM** = 1000 + 1000 = 2000\n" +
      "• **XIV** = 10 + (5 − 1) = 14\n" +
      "• Op een klok: **IV** = 4 uur.",
    checks: [
      {
        q: "Wat is **MM**?",
        options: ["2000", "1000", "2200", "3000"],
        answer: 0,
        wrongHints: [null, "Dat is maar één M.", "Plak de getallen niet aan elkaar.", "Dat zou MMM zijn."],
        uitlegPad: {
          stappen: [{ titel: "1000 + 1000", tekst: "M = 1000. Twee M'en achter elkaar: 1000 + 1000 = 2000." }],
          niveaus: {
            basis: "M = 1000, dus MM = 2000.",
            simpeler: "Tel twee keer 1000 op.",
            nogSimpeler: "1000 + 1000 = ?",
          },
        },
      },
      {
        q: "Een boek heeft hoofdstuk **XIV**. Welk hoofdstuk is dat?",
        options: ["14", "16", "11", "9"],
        answer: 0,
        wrongHints: [null, "Let op: IV is 4, niet 6.", "Dat zou XVI zijn.", "Dat zou IX zijn."],
        uitlegPad: {
          stappen: [{ titel: "10 + 4", tekst: "X = 10, IV = 4 (5 − 1). Samen 10 + 4 = 14." }],
          niveaus: {
            basis: "XIV = X (10) + IV (4) = 14.",
            simpeler: "Eerst de X (10), dan IV (4). Tel op.",
            nogSimpeler: "10 + 4 = ?",
          },
        },
      },
      {
        q: "Op een ouderwetse klok staat bij het cijfer 4 het symbool **IV**. Hoe laat wijst de wijzer als hij daar staat?",
        options: ["4 uur", "6 uur", "9 uur", "1 uur"],
        answer: 0,
        wrongHints: [null, "VI zou 6 zijn; hier staat IV.", "Dat is IX.", "Dat is I."],
        uitlegPad: {
          stappen: [{ titel: "IV = 4", tekst: "IV betekent 5 − 1 = 4. De wijzer staat dus op 4 uur." }],
          niveaus: {
            basis: "IV = 4, dus 4 uur.",
            simpeler: "Kleine I links van V → 5 − 1.",
            nogSimpeler: "Wat is 5 − 1?",
          },
        },
      },
      {
        q: "In welke eeuw leven we nu, geschreven in Romeinse cijfers (de 21e eeuw)?",
        options: ["XXI", "XIX", "XXe", "IXX"],
        answer: 0,
        wrongHints: [null, "Dat is 19.", "Dat is geen Romeins cijfer (gewoon getal + e).", "Zo schrijf je 21 niet."],
        uitlegPad: {
          stappen: [{ titel: "20 + 1", tekst: "21 = XX (20) + I (1) = XXI." }],
          niveaus: {
            basis: "21 = XXI (twee keer X = 20, plus I = 1).",
            simpeler: "Eerst 20 (XX), dan 1 (I) erbij.",
            nogSimpeler: "Welke is XX gevolgd door I?",
          },
        },
      },
    ],
  },
];

export default {
  id: "romeinse-cijfers-po",
  title: "Romeinse cijfers",
  subject: "rekenen",
  level: "groep7-8",
  sloThema: "rekenen-romeinse-cijfers",
  chapters,
  steps,
  prerequisites: [],
};
