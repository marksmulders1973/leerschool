// Leerpad: Topografie Nederland — de 12 provincies & hoofdsteden (groep 7-8).
// Doorstroomtoets-onderdeel wereldoriëntatie/aardrijkskunde. Interactieve kaart
// (TopoKaartNL) op basis van CBS/PDOK open data — geen licentie-issues.
// Elke stap: korte uitleg + interactieve kaart-check + tekst-fallback (checks).

import { TopoKaartNL, makeTopoCheck } from "../components/learn/geo/TopoKaartNL.jsx";
import { makeGeoOefenRonde } from "../components/learn/geo/GeoTopo.jsx";
import { NL_VIEWBOX, NL_PROVINCIES } from "../components/learn/geo/nlProvincieData.js";

const OverzichtKaart = () => <TopoKaartNL showLabels />;
const NL_DATA = { viewBox: NL_VIEWBOX, regios: NL_PROVINCIES };

const chapters = [
  { letter: "A", title: "De 12 provincies", emoji: "🗺️", from: 0, to: 0 },
  { letter: "B", title: "Hoofdsteden", emoji: "🏛️", from: 1, to: 1 },
  { letter: "C", title: "Het oosten", emoji: "🌳", from: 2, to: 2 },
  { letter: "D", title: "Het noorden", emoji: "🧊", from: 3, to: 3 },
  { letter: "E", title: "Het zuiden", emoji: "⛰️", from: 4, to: 4 },
  { letter: "F", title: "Ken ze alle 12!", emoji: "🏆", from: 5, to: 5 },
];

const steps = [
  // A. Overzicht
  {
    title: "Nederland heeft 12 provincies",
    explanation:
      "Nederland is verdeeld in **12 provincies**. Op de kaart hiernaast zie je ze allemaal met hun naam.\n\n" +
      "Een paar dingen om te onthouden:\n" +
      "• In het **westen**, aan de **Noordzee**, liggen **Noord-Holland** en **Zuid-Holland** — daar wonen de meeste mensen.\n" +
      "• In het **midden** ligt **Flevoland** — de jongste provincie, gemaakt door land uit het water te halen (een polder).\n" +
      "• Elke provincie heeft een eigen **hoofdstad**.\n\n" +
      "Klik straks op de kaart of kies het juiste antwoord.",
    illustrationComponent: OverzichtKaart,
    interactiveComponent: makeTopoCheck({ type: "noem-provincie", doel: "Noord-Holland" }),
    checks: [
      {
        q: "Welke provincie ligt in het noordwesten aan de Noordzee, met o.a. Amsterdam en Haarlem?",
        options: ["Noord-Holland", "Zuid-Holland", "Flevoland", "Utrecht"],
        answer: 0,
        wrongHints: [null, "Die ligt eronder, met Rotterdam en Den Haag.", "Die ligt in het midden, in het water gewonnen.", "Die ligt midden in het land, zonder zee."],
        uitlegPad: {
          stappen: [{ titel: "Noordwesten = Noord-Holland", tekst: "Noord-Holland is de provincie aan de Noordzee met Amsterdam en Haarlem." }],
          niveaus: {
            basis: "Aan de zee, helemaal bovenin het westen: Noord-Holland.",
            simpeler: "Welke provincie heeft 'Noord' in de naam en ligt aan de zee?",
            nogSimpeler: "Amsterdam ligt in provincie Noord-…?",
          },
        },
      },
    ],
  },
  // B. Hoofdsteden
  {
    title: "Elke provincie heeft een hoofdstad",
    explanation:
      "De **hoofdstad** is de belangrijkste stad van een provincie — daar zit vaak het provinciebestuur.\n\n" +
      "Let op: de hoofdstad van een **provincie** is niet altijd de bekendste stad!\n" +
      "• **Zuid-Holland** → hoofdstad **Den Haag** (niet Rotterdam, al is dat groter). In Den Haag zit ook de **regering** van heel Nederland.\n" +
      "• **Noord-Holland** → hoofdstad **Haarlem** (niet Amsterdam!).\n\n" +
      "Amsterdam is wél de **hoofdstad van het hele land**, maar niet van zijn provincie. Verwarrend? Daarom oefenen we het.",
    interactiveComponent: makeTopoCheck({ type: "noem-hoofdstad", doel: "Zuid-Holland" }),
    checks: [
      {
        q: "Wat is de hoofdstad van de provincie Zuid-Holland?",
        options: ["Den Haag", "Rotterdam", "Amsterdam", "Leiden"],
        answer: 0,
        wrongHints: [null, "Groter, maar niet de hoofdstad van de provincie.", "Dat is de hoofdstad van het hele land.", "Mooie studentenstad, maar niet de hoofdstad."],
        uitlegPad: {
          stappen: [{ titel: "Zuid-Holland → Den Haag", tekst: "In Den Haag zit het provinciebestuur én de landelijke regering." }],
          niveaus: {
            basis: "De hoofdstad van Zuid-Holland is Den Haag.",
            simpeler: "In welke stad zit de regering van Nederland? Dat is ook de provinciehoofdstad.",
            nogSimpeler: "Den H…?",
          },
        },
      },
    ],
  },
  // C. Oosten
  {
    title: "Het oosten: Gelderland",
    explanation:
      "Aan de **oostkant** (bij de grens met Duitsland) ligt **Gelderland** — de **grootste** provincie van Nederland.\n\n" +
      "In Gelderland ligt de **Veluwe**: een groot natuurgebied met bossen, zandverstuivingen en veel dieren. De hoofdstad van Gelderland is **Arnhem**.\n\n" +
      "Klik op de kaart op **Gelderland**.",
    interactiveComponent: makeTopoCheck({ type: "wijs-provincie", doel: "Gelderland" }),
    checks: [
      {
        q: "Hoe heet de grootste provincie van Nederland, in het oosten, met de Veluwe?",
        options: ["Gelderland", "Overijssel", "Utrecht", "Noord-Brabant"],
        answer: 0,
        wrongHints: [null, "Ligt erboven, ook in het oosten, maar kleiner.", "Klein provincietje in het midden.", "Grote provincie, maar in het zuiden."],
        uitlegPad: {
          stappen: [{ titel: "Oosten + Veluwe = Gelderland", tekst: "Gelderland is de grootste provincie; de Veluwe ligt erin." }],
          niveaus: {
            basis: "De grootste provincie met de Veluwe is Gelderland.",
            simpeler: "Welke provincie aan de Duitse grens is het grootst?",
            nogSimpeler: "Begint met Gel…?",
          },
        },
      },
    ],
  },
  // D. Noorden
  {
    title: "Het noorden: Groningen, Fryslân, Drenthe",
    explanation:
      "Bovenin liggen drie provincies: **Groningen**, **Fryslân** (Friesland) en **Drenthe**.\n\n" +
      "**Fryslân** is bijzonder: het heeft een **eigen taal**, het Fries. De hoofdstad is **Leeuwarden**. Friesland is ook bekend van de **Elfstedentocht** (schaatsen langs 11 steden) en de **Waddeneilanden** ervoor in de zee.\n\n" +
      "Wat is de hoofdstad van Fryslân?",
    interactiveComponent: makeTopoCheck({ type: "noem-hoofdstad", doel: "Fryslân" }),
    checks: [
      {
        q: "Wat is de hoofdstad van Fryslân (Friesland)?",
        options: ["Leeuwarden", "Groningen", "Assen", "Zwolle"],
        answer: 0,
        wrongHints: [null, "Dat is de hoofdstad van de buurprovincie ernaast.", "Dat is de hoofdstad van Drenthe.", "Dat ligt in Overijssel."],
        uitlegPad: {
          stappen: [{ titel: "Fryslân → Leeuwarden", tekst: "Leeuwarden is de hoofdstad van Fryslân, de provincie met een eigen taal." }],
          niveaus: {
            basis: "De hoofdstad van Fryslân is Leeuwarden.",
            simpeler: "De Friese hoofdstad begint met 'Leeuw…'.",
            nogSimpeler: "Leeuw…?",
          },
        },
      },
    ],
  },
  // E. Zuiden
  {
    title: "Het zuiden: Noord-Brabant & Limburg",
    explanation:
      "Onderin liggen **Noord-Brabant** en **Limburg**.\n\n" +
      "**Limburg** is de meest **zuidelijke** provincie — een lange punt die tussen België en Duitsland in steekt. Het is de enige provincie met echte **heuvels**. De hoofdstad is **Maastricht**.\n\n" +
      "Klik op de kaart op **Limburg** (de zuidpunt).",
    interactiveComponent: makeTopoCheck({ type: "wijs-provincie", doel: "Limburg" }),
    checks: [
      {
        q: "Welke provincie ligt helemaal in het zuiden, heeft heuvels en als hoofdstad Maastricht?",
        options: ["Limburg", "Noord-Brabant", "Zeeland", "Gelderland"],
        answer: 0,
        wrongHints: [null, "Ligt er net boven, breder en vlakker.", "Ligt in het zuidwesten, bij het water.", "Ligt hoger, in het oosten."],
        uitlegPad: {
          stappen: [{ titel: "Zuidpunt + heuvels = Limburg", tekst: "Limburg is de zuidelijkste provincie, met heuvels en hoofdstad Maastricht." }],
          niveaus: {
            basis: "De zuidelijke heuvel-provincie met Maastricht is Limburg.",
            simpeler: "Welke provincie steekt als een punt naar het zuiden?",
            nogSimpeler: "Begint met Lim…?",
          },
        },
      },
    ],
  },
  // F. Oefen alle 12 (Mark-feedback 10 aug: "je moet alle 12 kunnen oefenen
  // tot je ze allemaal kent" — en kunnen stoppen wanneer je wilt).
  {
    title: "Ken ze alle 12!",
    explanation:
      "Nu ken je de streken — tijd voor de **hele kaart**.\n\n" +
      "Je krijgt alle **12 provincies** door elkaar. Klik ze één voor één aan:\n" +
      "• In **één keer goed** → ✔ die ken je!\n" +
      "• **Mis?** Geen probleem — je ziet welke je aanklikte, en die provincie komt straks nog een keer terug.\n\n" +
      "Je bent klaar als je ze **allemaal** kent. Genoeg geoefend? Stoppen mag altijd — je voortgang is nooit weg.",
    interactiveComponent: makeGeoOefenRonde({ data: NL_DATA, naam: "provincie", meervoud: "provincies", emoji: "🗺️" }),
    checks: [
      {
        q: "Hoeveel provincies heeft Nederland?",
        options: ["12", "10", "11", "14"],
        answer: 0,
        wrongHints: [null, "Tel de noordelijke drie er ook bij.", "Eentje vergeten — denk aan de jongste, uit het water gewonnen.", "Zo veel zijn het er niet."],
        uitlegPad: {
          stappen: [{ titel: "Nederland = 12 provincies", tekst: "Van Groningen bovenin tot Limburg onderin: Nederland heeft 12 provincies." }],
          niveaus: {
            basis: "Nederland heeft 12 provincies.",
            simpeler: "Het zijn er evenveel als maanden in een jaar.",
            nogSimpeler: "Twaalf — 12.",
          },
        },
      },
    ],
  },
];

export default {
  id: "topografie-nederland-provincies-po",
  title: "Topografie Nederland — provincies & hoofdsteden",
  subject: "aardrijkskunde",
  level: "groep7-8",
  sloThema: "aardrijkskunde-topografie-nederland",
  chapters,
  steps,
  prerequisites: [],
};
