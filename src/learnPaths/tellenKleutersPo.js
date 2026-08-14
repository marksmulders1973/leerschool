// Leerpad: Tellen en vormen — groep 1-2 PO (kleuters, 4-6 jaar).
// Beginnende gecijferdheid (kerndoelen groep 1-2): tellen tot ~20, hoeveelheden,
// vormen, meten, ruimtelijk inzicht. Spelend leren — nog geen aparte vakken.
// Doelgroep kan niet lezen: emoji dragen de vraag visueel, de 🔊-voorleesknop
// doet de rest. 4 lesstappen × ~5 checks + speelronde (jong-modus).

import { makeRekenOefenRonde } from "../components/learn/RekenOefenRonde.jsx";

const stepEmojis = ["🍎", "🐥", "🔺", "🐘", "🎈"];

const chapters = [
  { letter: "A", title: "Tellen tot 10", emoji: "🍎", from: 0, to: 0 },
  { letter: "B", title: "Meer, minder en evenveel", emoji: "🐥", from: 1, to: 1 },
  { letter: "C", title: "Vormen", emoji: "🔺", from: 2, to: 2 },
  { letter: "D", title: "Groot, klein en waar is het?", emoji: "🐘", from: 3, to: 3 },
  { letter: "E", title: "Tel-feestje!", emoji: "🎈", from: 4, to: 4 },
];

const steps = [
  // ─── A. Tellen tot 10 ─────────────────────────────────────
  {
    title: "Tellen tot 10",
    explanation:
      "Tellen is net een liedje: **1, 2, 3, 4, 5, 6, 7, 8, 9, 10!** 🎶\n\nWijs bij het tellen elk ding aan met je vinger 👉 — bij elk ding zeg je één getal.\n\nHet láátste getal dat je zegt, zegt hoevéél er zijn:\n\n🍎🍎🍎 → één, twee, **drie** → drie appels!\n\nTel maar mee! 😄",
    checks: [
      {
        q: "Hoeveel appels? 🍎🍎🍎",
        options: ["3", "2", "4", "5"],
        answer: 0,
        wrongHints: [null, "Tel nog eens met je vinger: één... twee... en dan?", "Dat is er eentje te veel — wijs elke appel maar één keer aan.", "Dat zijn er te veel — tel rustig, één voor één."],
        uitlegPad: {
          stappen: [{ titel: "Wijs en tel", tekst: "Wijs elke appel aan: één 🍎, twee 🍎, drie 🍎. Het laatste getal is het antwoord: **3**." }],
          niveaus: { basis: "Drie appels: 1, 2, 3.", simpeler: "Tel mee: 1... 2... 3!", nogSimpeler: "3" },
        },
      },
      {
        q: "Hoeveel eendjes? 🐥🐥🐥🐥🐥",
        options: ["5", "4", "6", "3"],
        answer: 0,
        wrongHints: [null, "Bijna! Je bent er eentje vergeten — tel nog eens.", "Dat is er eentje te veel — wijs elk eendje maar één keer aan.", "Er zijn er meer — tel ze allemaal, één voor één."],
        uitlegPad: {
          stappen: [{ titel: "Eendjes tellen", tekst: "Wijs elk eendje aan: 1, 2, 3, 4, **5**. Vijf eendjes! 🐥" }],
          niveaus: { basis: "Vijf eendjes: 1, 2, 3, 4, 5.", simpeler: "Tel mee: 1-2-3-4-5!", nogSimpeler: "5" },
        },
      },
      {
        q: "Tel maar: 1, 2, 3... Welk getal komt erna?",
        options: ["4", "2", "5", "6"],
        answer: 0,
        wrongHints: [null, "Dat getal had je al gehad — we tellen vooruit!", "Je slaat er eentje over — tel rustig verder vanaf 3.", "Dat komt pas veel later in het liedje."],
        uitlegPad: {
          stappen: [{ titel: "Het tel-liedje", tekst: "Zing maar mee: 1, 2, 3, **4**, 5! Na de 3 komt de 4." }],
          niveaus: { basis: "Na 3 komt 4.", simpeler: "1, 2, 3... 4!", nogSimpeler: "4" },
        },
      },
      {
        q: "Hoeveel ballonnen? 🎈🎈🎈🎈🎈🎈🎈",
        options: ["7", "6", "8", "5"],
        answer: 0,
        wrongHints: [null, "Bijna! Je bent er eentje vergeten — tel nog eens rustig.", "Dat is er eentje te veel — wijs elke ballon maar één keer aan.", "Er zijn er meer — tel ze allemaal, met je vinger erbij."],
        uitlegPad: {
          stappen: [{ titel: "Ballonnen tellen", tekst: "Wijs elke ballon aan: 1, 2, 3, 4, 5, 6, **7**. Zeven ballonnen! 🎈" }],
          niveaus: { basis: "Zeven ballonnen.", simpeler: "Tel mee: 1-2-3-4-5-6-7!", nogSimpeler: "7" },
        },
      },
      {
        q: "Tel maar: 7, 8, 9... Welk getal komt erna?",
        options: ["10", "8", "11", "6"],
        answer: 0,
        wrongHints: [null, "Dat getal had je al gehad — we tellen vooruit!", "Je slaat er eentje over — wat komt er meteen na 9?", "Dat is teruggeteld — we gaan juist verder omhoog."],
        uitlegPad: {
          stappen: [{ titel: "Tot tien!", tekst: "7, 8, 9, **10**! Na de 9 komt de 10. Dan heb je het hele liedje tot tien gezongen! 🎉" }],
          niveaus: { basis: "Na 9 komt 10.", simpeler: "8, 9... 10!", nogSimpeler: "10" },
        },
      },
    ],
  },

  // ─── B. Meer, minder en evenveel ──────────────────────────
  {
    title: "Meer, minder en evenveel",
    explanation:
      "Soms heeft iemand **meer** en soms **minder**. 🐥\n\nHoe weet je dat? **Tellen!**\n\n🍎🍎🍎 en 🍐🍐 → drie appels, twee peren. Drie is meer dan twee!\n\nZijn twee groepjes precies even groot? Dan zeg je **evenveel**. 🤝\n\nEn wist je dat het tel-liedje na 10 gewoon doorgaat? **11, 12, 13...** helemaal tot 20! 🎶",
    checks: [
      {
        q: "Waar zijn er méér? 🍎🍎🍎🍎 of 🍐🍐",
        options: ["🍎", "🍐", "evenveel"],
        answer: 0,
        wrongHints: [null, "Tel allebei de groepjes: hoeveel appels, hoeveel peren? Welk getal is groter?", "Tel nog eens — zijn de groepjes echt even groot?"],
        uitlegPad: {
          stappen: [{ titel: "Tel allebei", tekst: "Appels: 1, 2, 3, **4**. Peren: 1, **2**. Vier is meer dan twee — dus de appels winnen! 🍎" }],
          niveaus: { basis: "4 appels, 2 peren — 4 is meer.", simpeler: "Vier is meer dan twee.", nogSimpeler: "🍎" },
        },
      },
      {
        q: "Waar zijn er mínder? 🐥🐥 of 🐟🐟🐟🐟🐟",
        options: ["🐥", "🐟", "evenveel"],
        answer: 0,
        wrongHints: [null, "Tel allebei: hoeveel eendjes, hoeveel visjes? Minder = het kleinste getal.", "Tel nog eens — zijn de groepjes echt even groot?"],
        uitlegPad: {
          stappen: [{ titel: "Tel allebei", tekst: "Eendjes: 1, **2**. Visjes: 1, 2, 3, 4, **5**. Twee is minder dan vijf — de eendjes zijn met minder. 🐥" }],
          niveaus: { basis: "2 eendjes, 5 visjes — 2 is minder.", simpeler: "Twee is minder dan vijf.", nogSimpeler: "🐥" },
        },
      },
      {
        q: "🧸🧸🧸 en 🎈🎈🎈 — zijn dat er evenveel?",
        options: ["ja", "nee"],
        answer: 0,
        wrongHints: [null, "Tel allebei de groepjes nog eens — kom je twee keer op hetzelfde getal uit?"],
        uitlegPad: {
          stappen: [{ titel: "Tel allebei", tekst: "Knuffels: 1, 2, **3**. Ballonnen: 1, 2, **3**. Allebei drie — dat is **evenveel**! 🤝" }],
          niveaus: { basis: "Allebei 3 — evenveel.", simpeler: "Drie en drie is evenveel.", nogSimpeler: "ja" },
        },
      },
      {
        q: "Je hebt 🍓🍓 en je krijgt er één aardbei bij. Hoeveel nu?",
        options: ["3", "2", "4"],
        answer: 0,
        wrongHints: [null, "Dat had je al — maar er kwam er nog eentje bíj!", "Dat is er eentje te veel — tel maar: twee, en dan één erbij."],
        uitlegPad: {
          stappen: [{ titel: "Eentje erbij", tekst: "Je had 🍓🍓 — twee. Er komt er één bij → tel gewoon verder: **drie**! Eentje erbij is altijd het volgende getal in het liedje." }],
          niveaus: { basis: "2 en 1 erbij = 3.", simpeler: "Twee... en nog eentje: drie!", nogSimpeler: "3" },
        },
      },
      {
        q: "Tel maar verder: 8, 9, 10... Welk getal komt na 10?",
        options: ["11", "12", "9", "20"],
        answer: 0,
        wrongHints: [null, "Je slaat er eentje over — wat komt er metéén na 10?", "Dat getal had je al gehad — we tellen vooruit!", "Dat komt pas helemaal aan het einde van het liedje."],
        uitlegPad: {
          stappen: [{ titel: "Verder dan tien", tekst: "Het liedje gaat gewoon door: 9, 10, **11**, 12, 13... helemaal tot 20! Na 10 komt 11." }],
          niveaus: { basis: "Na 10 komt 11.", simpeler: "9, 10... 11!", nogSimpeler: "11" },
        },
      },
    ],
  },

  // ─── C. Vormen ────────────────────────────────────────────
  {
    title: "Vormen",
    explanation:
      "Overal om je heen zijn **vormen**! 👀\n\n⚪ Een **cirkel** is helemaal rond — als een bal of de zon. 🌞\n\n⬜ Een **vierkant** heeft 4 rechte kanten en 4 hoeken — als een blokje.\n\n🔺 Een **driehoek** heeft 3 punten — als het dak van een huisje. 🏠\n\nKijk maar eens rond: welke vormen zie jij thuis?",
    checks: [
      {
        q: "Welke vorm is dit? ⚪",
        options: ["cirkel", "vierkant", "driehoek"],
        answer: 0,
        wrongHints: [null, "Voel maar met je vinger: zijn er rechte kanten of is hij helemaal rond?", "Tel de punten maar — heeft deze vorm wel punten?"],
        uitlegPad: {
          stappen: [{ titel: "Helemaal rond", tekst: "⚪ is helemaal rond, zonder hoeken. Dat heet een **cirkel** — net als een bal of een koekje. 🍪" }],
          niveaus: { basis: "Rond zonder hoeken = cirkel.", simpeler: "Rond is een cirkel.", nogSimpeler: "cirkel" },
        },
      },
      {
        q: "Welke vorm is dit? 🔺",
        options: ["driehoek", "cirkel", "vierkant"],
        answer: 0,
        wrongHints: [null, "Kijk goed: deze vorm heeft punten — is hij dan rond?", "Tel de punten maar met je vinger: hoeveel zijn het er?"],
        uitlegPad: {
          stappen: [{ titel: "Drie punten", tekst: "🔺 heeft **drie** punten. Drie hoeken = **driehoek**! Het woord zegt het zelf: drie-hoek." }],
          niveaus: { basis: "3 punten = driehoek.", simpeler: "Tel de punten: 1, 2, 3 — driehoek!", nogSimpeler: "driehoek" },
        },
      },
      {
        q: "Hoeveel hoeken heeft een vierkant? ⬜",
        options: ["4", "3", "5"],
        answer: 0,
        wrongHints: [null, "Bijna! Wijs elke hoek aan met je vinger en tel nog eens.", "Dat zijn er te veel — wijs elke hoek maar één keer aan."],
        uitlegPad: {
          stappen: [{ titel: "Hoeken tellen", tekst: "Wijs de hoeken van ⬜ aan: 1, 2, 3, **4**. Een vierkant heeft 4 hoeken en 4 rechte kanten. Het woord helpt je: **vier**-kant!" }],
          niveaus: { basis: "Een vierkant heeft 4 hoeken.", simpeler: "Vier-kant... vier hoeken!", nogSimpeler: "4" },
        },
      },
      {
        q: "Een bal ⚽ is rond. Welke vorm hoort daarbij?",
        options: ["cirkel", "driehoek", "vierkant"],
        answer: 0,
        wrongHints: [null, "Heeft een bal punten? Kan hij dan wel rollen?", "Heeft een bal rechte kanten? Kan hij dan wel rollen?"],
        uitlegPad: {
          stappen: [{ titel: "Rond rolt", tekst: "Een bal is helemaal rond — dat is de vorm van een **cirkel** ⚪. Rond kan rollen; een vorm met hoeken blijft liggen!" }],
          niveaus: { basis: "Rond = cirkel.", simpeler: "Een bal is rond, net als een cirkel.", nogSimpeler: "cirkel" },
        },
      },
      {
        q: "Het dak van dit huisje 🏠 heeft een punt. Welke vorm lijkt dat?",
        options: ["driehoek", "cirkel", "vierkant"],
        answer: 0,
        wrongHints: [null, "Is een dak met een punt rond?", "Kijk naar de punt bovenaan — welke vorm heeft ook zo'n punt?"],
        uitlegPad: {
          stappen: [{ titel: "Puntdak", tekst: "Een dak met een punt lijkt op een **driehoek** 🔺: schuin omhoog, punt erop! Zoek maar eens driehoeken buiten — daken, vlaggetjes, een stuk pizza. 🍕" }],
          niveaus: { basis: "Puntdak = driehoek.", simpeler: "Punt erop, net als 🔺.", nogSimpeler: "driehoek" },
        },
      },
    ],
  },

  // ─── D. Groot, klein en waar is het? ──────────────────────
  {
    title: "Groot, klein en waar is het?",
    explanation:
      "Dingen kunnen **groot** of **klein** zijn: een olifant 🐘 is groot, een muisje 🐭 is klein.\n\nDingen kunnen **lang** of **kort** zijn: een trein 🚂 is lang, een potlood is kort.\n\nEn waar iets ís, heeft ook een woord: **boven** ⬆️ of **onder** ⬇️, **vooraan** of **achteraan**, **in**, **op**...\n\nKijk goed en wijs maar aan!",
    checks: [
      {
        q: "Wat is gróót? 🐘 of 🐭",
        options: ["🐘", "🐭"],
        answer: 0,
        wrongHints: [null, "Denk maar: past een muisje op je hand? En een olifant?"],
        uitlegPad: {
          stappen: [{ titel: "Groot en klein", tekst: "Een olifant 🐘 is heel **groot** — groter dan een auto! Een muisje 🐭 is heel **klein** — het past op je hand." }],
          niveaus: { basis: "De olifant is groot, de muis is klein.", simpeler: "De olifant is het grootst.", nogSimpeler: "🐘" },
        },
      },
      {
        q: "Welke rij blokken is het lángst?",
        options: ["🟦🟦🟦🟦🟦", "🟦🟦"],
        answer: 0,
        wrongHints: [null, "Tel de blokken van allebei de rijen — welke rij heeft er meer?"],
        uitlegPad: {
          stappen: [{ titel: "Rijen vergelijken", tekst: "Tel maar: 🟦🟦🟦🟦🟦 zijn er vijf, 🟦🟦 zijn er twee. Meer blokken achter elkaar = een **langere** rij!" }],
          niveaus: { basis: "5 blokken is een langere rij dan 2.", simpeler: "De rij met de meeste blokken is het langst.", nogSimpeler: "🟦🟦🟦🟦🟦" },
        },
      },
      {
        q: "🚂🚃🚃 Wat rijdt er vóóraan bij de trein?",
        options: ["🚂", "🚃"],
        answer: 0,
        wrongHints: [null, "Kijk naar het begin van de trein — wie trekt alle wagons mee?"],
        uitlegPad: {
          stappen: [{ titel: "Vooraan en achteraan", tekst: "De locomotief 🚂 rijdt **vooraan** — die trekt de trein. De wagons 🚃🚃 komen **achteraan**, die rijden mee." }],
          niveaus: { basis: "De locomotief rijdt vooraan.", simpeler: "🚂 is het begin van de trein.", nogSimpeler: "🚂" },
        },
      },
      {
        q: "Een sok 🧦 gaat áán je voet. Wat gaat er óp je hoofd?",
        options: ["🎩", "🧦", "🧤"],
        answer: 0,
        wrongHints: [null, "Die is voor je voet — wat zet je bóven op je hoofd?", "Die is voor je handen — wat zet je bóven op je hoofd?"],
        uitlegPad: {
          stappen: [{ titel: "Op = bovenop", tekst: "**Op** je hoofd betekent: er bovenop. Een hoed 🎩 zet je óp je hoofd. Sokken gaan aan je voeten, wanten aan je handen." }],
          niveaus: { basis: "Een hoed gaat op je hoofd.", simpeler: "Bovenop je hoofd: een hoed!", nogSimpeler: "🎩" },
        },
      },
      {
        q: "De vogel 🐦 vliegt hoog in de lucht. De vis 🐟 zwemt in het water. Wie is er bóven?",
        options: ["🐦", "🐟"],
        answer: 0,
        wrongHints: [null, "Kijk omhoog naar de lucht — wie zie je daar? Het water is juist laag, onder."],
        uitlegPad: {
          stappen: [{ titel: "Boven en onder", tekst: "De lucht is **boven** ⬆️ — daar vliegt de vogel 🐦. Het water is **onder** ⬇️ — daar zwemt de vis 🐟." }],
          niveaus: { basis: "De vogel in de lucht is boven.", simpeler: "De lucht is boven — daar vliegt de vogel.", nogSimpeler: "🐦" },
        },
      },
    ],
  },

  // ─── E. Tel-feestje! (speelronde, jong-modus) ─────────────
  {
    title: "Tel-feestje!",
    explanation:
      "Je kunt al tellen — feestje! 🎉\n\nNu komen er **kleine telsommetjes** met plaatjes:\n\n• Tel de ballonnen op het scherm maar mee! 🎈\n• Druk op **🔊** en het sommetje wordt voorgelezen.\n• Goed? Dan is er een klein feestje! Mis? Dan komt hij straks nog een keertje terug.\n\nGenoeg gedaan? Stoppen mag altijd.",
    interactiveComponent: makeRekenOefenRonde({ soort: "optellen", aantal: 8, totMax: 8, emoji: "🎈", meervoud: "sommen", jong: true }),
    checks: [
      {
        q: "2 + 1 = ? 🎈🎈 en 🎈",
        options: ["3", "2", "4"],
        answer: 0,
        wrongHints: [null, "Dat had je al — maar er komt er nog eentje bíj!", "Dat is er eentje te veel — tel alle ballonnen nog eens rustig."],
        uitlegPad: {
          stappen: [{ titel: "Tel ze allemaal", tekst: "Eerst 🎈🎈 — twee. Daar komt 🎈 bij. Tel alles: 1, 2, **3** ballonnen!" }],
          niveaus: { basis: "2 en 1 erbij = 3.", simpeler: "Twee... en nog eentje: drie!", nogSimpeler: "3" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tellenKleutersPo = {
  id: "tellen-kleuters-po",
  title: "Tellen en vormen (groep 1-2)",
  emoji: "🧸",
  level: "groep1-2",
  subject: "rekenen",
  sloThema: "Rekenen — beginnende gecijferdheid: tellen, hoeveelheden, vormen, meten en ruimtelijk inzicht (groep 1-2)",
  prerequisites: [],
  intro:
    "Samen tellen, vormen zoeken en spelen — voor kleuters in groep 1 en 2. Druk op 🔊 om alles voor te laten lezen; samen doen met een ouder of verzorger mag natuurlijk ook. ~15 min.",
  triggerKeywords: [
    "tellen", "kleuters", "groep 1", "groep 2", "vormen",
    "tellen tot 10", "tellen tot 20", "meer minder evenveel",
    "groot klein", "cirkel vierkant driehoek",
    "beginnende gecijferdheid", "rekenen kleuters",
  ],
  chapters,
  steps,
};

export default tellenKleutersPo;
