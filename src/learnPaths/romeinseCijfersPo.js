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
      {
        q: "Welk getal is **M**?",
        options: ["1000", "500", "100", "2000"],
        answer: 0,
        wrongHints: [null, "Dat is D.", "Dat is C.", "Dat zouden twee M'en zijn: MM."],
        uitlegPad: {
          stappen: [{ titel: "M = 1000", tekst: "De letter M (van 'mille', duizend) staat voor 1.000." }],
          niveaus: {
            basis: "M is het symbool voor 1.000.",
            simpeler: "Denk aan 'millennium': 1.000 jaar. M = 1.000.",
            nogSimpeler: "Welke waarde hoort bij M?",
          },
        },
      },
      {
        q: "Welk symbool is **500**?",
        options: ["D", "M", "C", "L"],
        answer: 0,
        wrongHints: [null, "Dat is 1.000.", "Dat is 100.", "Dat is 50."],
        uitlegPad: {
          stappen: [{ titel: "D = 500", tekst: "De letter D staat voor 500." }],
          niveaus: {
            basis: "500 schrijf je als D.",
            simpeler: "Tussen C (100) en M (1.000) zit D (500).",
            nogSimpeler: "Welke letter hoort bij 500?",
          },
        },
      },
      {
        q: "Welk getal is **I**?",
        options: ["1", "10", "5", "100"],
        answer: 0,
        wrongHints: [null, "Dat is X.", "Dat is V.", "Dat is C."],
        uitlegPad: {
          stappen: [{ titel: "I = 1", tekst: "De letter I staat voor 1. Net als een streepje op een krijtbord." }],
          niveaus: {
            basis: "I is het symbool voor 1.",
            simpeler: "I is de eerste in de rij I-V-X: 1, 5, 10.",
            nogSimpeler: "Welke waarde hoort bij I?",
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
      {
        q: "Wat is **VIII**?",
        options: ["8", "9", "3", "7"],
        answer: 0,
        wrongHints: [null, "Dat zou IX zijn.", "Dat zijn drie I'tjes alleen.", "Reken: 5 + 1 + 1 + 1."],
        uitlegPad: {
          stappen: [{ titel: "5 + 3", tekst: "V = 5, III = 3. V staat links van de I's, dus optellen: 5 + 3 = 8." }],
          niveaus: {
            basis: "VIII = V (5) + III (3) = 8.",
            simpeler: "Tel: 5 + 1 + 1 + 1 = ?",
            nogSimpeler: "5 + 3 = ?",
          },
        },
      },
      {
        q: "Hoe schrijf je **25** in Romeinse cijfers?",
        options: ["XXV", "XXVII", "VXX", "XVXX"],
        answer: 0,
        wrongHints: [null, "Dat is 27.", "V staat nooit vóór X als je optelt — gebruik X'en voor de tientallen.", "Dat is geen geldig Romeins getal."],
        uitlegPad: {
          stappen: [{ titel: "20 + 5", tekst: "25 = 20 + 5 = XX (20) + V (5) = XXV." }],
          niveaus: {
            basis: "25 = XX (20) + V (5) = XXV.",
            simpeler: "Eerst twee X'en (20), dan een V (5).",
            nogSimpeler: "Welke begint met XX en dan een V?",
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
      {
        q: "Hoe schrijf je **9** in Romeinse cijfers?",
        options: ["IX", "VIIII", "XI", "IIX"],
        answer: 0,
        wrongHints: [null, "Vier I'tjes achter elkaar mag niet — gebruik aftrekken.", "Dat is 11 (X + I).", "Zo werkt aftrekken niet — I staat voor X, niet vóór een grotere letter dan X."],
        uitlegPad: {
          stappen: [{ titel: "10 − 1", tekst: "9 = 10 − 1 = I vóór X = IX." }],
          niveaus: {
            basis: "9 = IX (I vóór X = 10 − 1).",
            simpeler: "Zet de kleine I links van de X om af te trekken.",
            nogSimpeler: "Welke heeft I vóór X?",
          },
        },
      },
      {
        q: "Wat is **CD**?",
        options: ["400", "600", "100", "440"],
        answer: 0,
        wrongHints: [null, "Dat zou DC zijn (optellen: 500 + 100).", "Dat is alleen een C.", "Reken: 500 − 100."],
        uitlegPad: {
          stappen: [{ titel: "500 − 100", tekst: "C staat vóór D (C is kleiner dan D), dus aftrekken: 500 − 100 = 400." }],
          niveaus: {
            basis: "C vóór D betekent 500 − 100 = 400.",
            simpeler: "Kleine C links van de D → eraf halen.",
            nogSimpeler: "500 − 100 = ?",
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
            nogSimpeler: "Hoeveel is 5 − 1?",
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
      {
        q: "Op een gebouw staat **MCMXCIX**. Dat is het bouwjaar. Welk jaar is dat?",
        options: ["1999", "1899", "2009", "1909"],
        answer: 0,
        wrongHints: [null, "Splits het van links naar rechts op. Let op: een kleiner teken vóór een groter teken betekent aftrekken (zoals CM en IX).", "Reken de stukjes één voor één uit.", "CM is 900, niet 800."],
        uitlegPad: {
          stappen: [{ titel: "Stukje voor stukje", tekst: "M (1000) + CM (900) + XC (90) + IX (9) = 1.999." }],
          niveaus: {
            basis: "1000 + 900 + 90 + 9 = 1999.",
            simpeler: "CM = 900, XC = 90, IX = 9. Tel op bij M (1000).",
            nogSimpeler: "1000 + 900 + 90 + 9 = ?",
          },
        },
      },
      {
        q: "Welk getal wordt geschreven als **XLVII**?",
        options: ["47", "57", "37", "97"],
        answer: 0,
        wrongHints: [null, "XL is 40, niet 50.", "X is 10, niet 30.", "XC zou 90 zijn, niet XL."],
        uitlegPad: {
          stappen: [{ titel: "Stukje voor stukje", tekst: "XL (40) + V (5) + II (2) = 47." }],
          niveaus: {
            basis: "XL = 40, VII = 7. Samen 47.",
            simpeler: "XL = 40 (aftrekken). Dan V (5) en II (2) optellen.",
            nogSimpeler: "40 + 5 + 2 = ?",
          },
        },
      },
      {
        q: "Hoe schrijf je **2024** in Romeinse cijfers?",
        options: ["MMXXIV", "MMXXIIII", "MCMXXIV", "MMXIV"],
        answer: 0,
        wrongHints: [null, "Vier I'tjes achter elkaar mag niet — gebruik IV voor 4.", "MCMXXIV is 1924, niet 2024.", "MMXIV is 2014, niet 2024."],
        uitlegPad: {
          stappen: [{ titel: "2000 + 20 + 4", tekst: "2024 = MM (2000) + XX (20) + IV (4) = MMXXIV." }],
          niveaus: {
            basis: "MM = 2000, XX = 20, IV = 4. Samen MMXXIV.",
            simpeler: "Splits: 2000 (MM), 20 (XX), 4 (IV). Plak aan elkaar.",
            nogSimpeler: "Wat zijn de Romeinse symbolen voor 2000, 20 en 4?",
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
