// Leerpad: Topografie Wereld — landen, hoofdsteden & wereldwonderen (groep 7-8).
// Hergebruikt dezelfde draaiende wereldbol (Wereldbol.jsx) in drie "modi":
// landen, hoofdsteden en bezienswaardigheden. Mark-wens 17 jun 2026: één bol
// voor verschillende vragen.

import { makeWereldbol } from "../components/learn/geo/Wereldbol.jsx";

const chapters = [
  { letter: "A", title: "Landen op de bol", emoji: "🌍", from: 0, to: 0 },
  { letter: "B", title: "Hoofdsteden", emoji: "🏛️", from: 1, to: 2 },
  { letter: "C", title: "Wereldwonderen", emoji: "🗼", from: 3, to: 4 },
];

const steps = [
  {
    title: "Tik op een land 🌍",
    explanation:
      "Dit is de échte **aarde** als draaiende **wereldbol**. Draai met je muis of vinger, **zoom** in met je muiswiel of door met 2 vingers te knijpen.\n\n" +
      "Op de bol staan **gekleurde prikkers** op bekende landen. Tik op een prikker en raad **welk land** het is. Zo leer je waar landen liggen — niet uit je hoofd, maar door te kijken.",
    interactiveComponent: makeWereldbol("landen"),
    checks: [
      {
        q: "In welk werelddeel ligt het land **Brazilië**?",
        options: ["Zuid-Amerika", "Noord-Amerika", "Afrika", "Azië"],
        answer: 0,
        wrongHints: [null, "Dat ligt erboven, met de VS en Canada.", "Ander werelddeel, aan de overkant.", "Dat ligt veel verder naar het oosten."],
        uitlegPad: { stappen: [{ titel: "Brazilië = Zuid-Amerika", tekst: "Brazilië is het grootste land van Zuid-Amerika, met het Amazone-regenwoud." }],
          niveaus: { basis: "Brazilië ligt in Zuid-Amerika.", simpeler: "Boven of onder in Amerika? Brazilië ligt in het zuiden.", nogSimpeler: "Zuid-Amerika." } },
      },
    ],
  },
  {
    title: "Wat is een hoofdstad?",
    explanation:
      "Elk land heeft één **hoofdstad**: de stad waar meestal de regering zit. Het is vaak een bekende, grote stad — maar niet altijd de allergrootste.\n\n" +
      "Zet de bol op **hoofdsteden**: nu staan er **gouden prikkers** op de hoofdsteden. Tik erop en raad welke stad het is. Welke hoofdstad ligt er in Frankrijk?",
    interactiveComponent: makeWereldbol("hoofdsteden"),
    checks: [
      {
        q: "Wat is de hoofdstad van **Frankrijk**?",
        options: ["Parijs", "Londen", "Berlijn", "Madrid"],
        answer: 0,
        wrongHints: [null, "Dat is de hoofdstad van Engeland.", "Dat is de hoofdstad van Duitsland.", "Dat is de hoofdstad van Spanje."],
        uitlegPad: { stappen: [{ titel: "Frankrijk → Parijs", tekst: "De hoofdstad van Frankrijk is Parijs, bekend van de Eiffeltoren." }],
          niveaus: { basis: "De hoofdstad van Frankrijk is Parijs.", simpeler: "Welke stad hoort bij de Eiffeltoren?", nogSimpeler: "Begint met Par…?" } },
      },
    ],
  },
  {
    title: "Hoofdsteden dichtbij huis",
    explanation:
      "Ook onze buurlanden hebben hoofdsteden. **Nederland → Amsterdam**, **België → Brussel**, **Duitsland → Berlijn**.\n\n" +
      "Draai de bol naar Europa, zoom in en tik op de gouden prikkers. Welke hoofdstad ligt er in Italië (het 'laars'-land)?",
    interactiveComponent: makeWereldbol("hoofdsteden"),
    checks: [
      {
        q: "Wat is de hoofdstad van **Italië**?",
        options: ["Rome", "Athene", "Wenen", "Madrid"],
        answer: 0,
        wrongHints: [null, "Dat is de hoofdstad van Griekenland.", "Dat is de hoofdstad van Oostenrijk.", "Dat is de hoofdstad van Spanje."],
        uitlegPad: { stappen: [{ titel: "Italië → Rome", tekst: "De hoofdstad van Italië is Rome, met het oude Colosseum." }],
          niveaus: { basis: "De hoofdstad van Italië is Rome.", simpeler: "Welke stad hoort bij het Colosseum?", nogSimpeler: "Begint met Ro…?" } },
      },
    ],
  },
  {
    title: "Beroemde gebouwen 🗼",
    explanation:
      "Overal op de wereld staan **beroemde gebouwen**: de Eiffeltoren, het Vrijheidsbeeld, de piramides van Gizeh, de Chinese Muur.\n\n" +
      "Zet de bol op **bezienswaardigheden**. Tik op een prikker en raad welk gebouw of bouwwerk het is. In welke stad staat de **Eiffeltoren**?",
    interactiveComponent: makeWereldbol("bezienswaardigheden"),
    checks: [
      {
        q: "In welke stad staat de **Eiffeltoren**?",
        options: ["Parijs", "Londen", "Rome", "New York"],
        answer: 0,
        wrongHints: [null, "Daar staat de Big Ben.", "Daar staat het Colosseum.", "Daar staat het Vrijheidsbeeld."],
        uitlegPad: { stappen: [{ titel: "Eiffeltoren = Parijs", tekst: "De Eiffeltoren is het bekendste gebouw van Parijs, de hoofdstad van Frankrijk." }],
          niveaus: { basis: "De Eiffeltoren staat in Parijs.", simpeler: "In welke hoofdstad van Frankrijk staat hij?", nogSimpeler: "Begint met Par…?" } },
      },
    ],
  },
  {
    title: "Beroemde rivieren 🌊",
    explanation:
      "Op de bol staan ook blauwe prikkers op grote **rivieren**: de **Nijl** in Afrika, de **Amazone** in Zuid-Amerika, en de **Rijn** die ook door Nederland stroomt.\n\n" +
      "Tik op de blauwe prikkers en raad de rivier. Welke grote rivier stroomt door **Egypte**?",
    interactiveComponent: makeWereldbol("bezienswaardigheden"),
    checks: [
      {
        q: "Welke grote rivier stroomt door **Egypte** in Afrika?",
        options: ["De Nijl", "De Amazone", "De Rijn", "De Donau"],
        answer: 0,
        wrongHints: [null, "Die stroomt door Zuid-Amerika.", "Die stroomt door West-Europa (ook Nederland).", "Die stroomt door Midden-Europa."],
        uitlegPad: { stappen: [{ titel: "Egypte = de Nijl", tekst: "De Nijl is de langste rivier van Afrika en stroomt door Egypte, langs de piramides." }],
          niveaus: { basis: "Door Egypte stroomt de Nijl.", simpeler: "Welke rivier hoort bij de piramides van Egypte?", nogSimpeler: "Begint met Ni…?" } },
      },
    ],
  },
];

export default {
  id: "topografie-wereld-hoofdsteden-po",
  title: "Topografie Wereld — landen, hoofdsteden & wereldwonderen",
  subject: "aardrijkskunde",
  level: "groep8",
  sloThema: "aardrijkskunde-topografie-wereld",
  chapters,
  steps,
  prerequisites: [{ id: "topografie-wereld-werelddelen-po", title: "Topografie Wereld — de werelddelen", niveau: "groep8" }],
};
