// Leerpad: Topografie Europa — landen & hoofdsteden (groep 8 / VO-onderbouw).
// Interactieve kaart (GeoTopo) op basis van Natural Earth open data (publiek
// domein). 22 belangrijkste Europese landen. Elke stap: korte uitleg +
// interactieve kaart-check + tekst-fallback.

import { GeoKaart, makeGeoCheck, makeGeoOefenRonde } from "../components/learn/geo/GeoTopo.jsx";
import { EU_VIEWBOX, EU_LANDEN } from "../components/learn/geo/europaData.js";

const EU = { viewBox: EU_VIEWBOX, regios: EU_LANDEN };
const OverzichtEU = () => <GeoKaart data={EU} showLabels labelFontSize={18} maxHeight={520} />;
const check = (type, doel) => makeGeoCheck({ data: EU, type, doel, naam: "land", labelFontSize: 16, maxHeight: 480 });

const chapters = [
  { letter: "A", title: "Europa & onze buren", emoji: "🗺️", from: 0, to: 1 },
  { letter: "B", title: "West-Europa", emoji: "🥖", from: 2, to: 2 },
  { letter: "C", title: "Zuid-Europa", emoji: "🍝", from: 3, to: 4 },
  { letter: "D", title: "Het noorden", emoji: "🌲", from: 5, to: 5 },
  { letter: "E", title: "Ken alle landen!", emoji: "🏆", from: 6, to: 6 },
];

const steps = [
  {
    title: "Nederland ligt in Europa",
    explanation:
      "Nederland is een klein land in **Europa**. Op de kaart hiernaast zie je de belangrijkste Europese landen.\n\n" +
      "Onze **buurlanden** zijn:\n" +
      "• In het **oosten**: **Duitsland** (het grootste buurland).\n" +
      "• In het **zuiden**: **België**.\n" +
      "Aan de **westkant** ligt de **Noordzee**, en daar weer achter het **Verenigd Koninkrijk** (een eiland).",
    illustrationComponent: OverzichtEU,
    interactiveComponent: check("noem", "Duitsland"),
    checks: [
      {
        q: "Welk land is het grote buurland van Nederland in het oosten?",
        options: ["Duitsland", "België", "Frankrijk", "Polen"],
        answer: 0,
        wrongHints: [null, "Dat is de zuidbuur, kleiner.", "Ligt verder naar het zuidwesten.", "Ligt verder naar het oosten."],
        uitlegPad: { stappen: [{ titel: "Oosten = Duitsland", tekst: "Duitsland is het grote buurland aan de oostkant van Nederland." }],
          niveaus: { basis: "Het oosterbuurland is Duitsland.", simpeler: "Welk groot land grenst rechts aan Nederland?", nogSimpeler: "Begint met Duits…?" } },
      },
    ],
  },
  {
    title: "Onze zuidbuur: België",
    explanation:
      "Direct onder Nederland ligt **België**. In België spreken ze in het noorden ook **Nederlands** (Vlaams) en in het zuiden **Frans**. De hoofdstad is **Brussel** — daar zit ook het bestuur van de **Europese Unie (EU)**.\n\n" +
      "Klik op de kaart op **België**.",
    interactiveComponent: check("wijs", "België"),
    checks: [
      {
        q: "Hoe heet de zuidbuur van Nederland, met hoofdstad Brussel?",
        options: ["België", "Duitsland", "Luxemburg", "Frankrijk"],
        answer: 0,
        wrongHints: [null, "Dat is de oosterbuur.", "Dat is een heel klein land eronder.", "Ligt nog verder naar het zuiden."],
        uitlegPad: { stappen: [{ titel: "Zuidbuur = België", tekst: "België ligt direct onder Nederland; hoofdstad Brussel." }],
          niveaus: { basis: "De zuidbuur met Brussel is België.", simpeler: "Welk land ligt direct onder Nederland?", nogSimpeler: "Begint met Belg…?" } },
      },
    ],
  },
  {
    title: "West-Europa: Frankrijk",
    explanation:
      "**Frankrijk** is een groot land in West-Europa, bekend van de **Eiffeltoren**, stokbrood en de **Tour de France**. De hoofdstad is **Parijs**.\n\n" +
      "Wat is de hoofdstad van Frankrijk?",
    interactiveComponent: check("noem-hoofdstad", "Frankrijk"),
    checks: [
      {
        q: "Wat is de hoofdstad van Frankrijk?",
        options: ["Parijs", "Londen", "Madrid", "Berlijn"],
        answer: 0,
        wrongHints: [null, "Dat is de hoofdstad van het Verenigd Koninkrijk.", "Dat is de hoofdstad van Spanje.", "Dat is de hoofdstad van Duitsland."],
        uitlegPad: { stappen: [{ titel: "Frankrijk → Parijs", tekst: "Parijs, met de Eiffeltoren, is de hoofdstad van Frankrijk." }],
          niveaus: { basis: "De hoofdstad van Frankrijk is Parijs.", simpeler: "In welke stad staat de Eiffeltoren?", nogSimpeler: "Par…?" } },
      },
    ],
  },
  {
    title: "Zuid-Europa: Italië (de laars)",
    explanation:
      "**Italië** is makkelijk te herkennen: het heeft de vorm van een **laars** die de Middellandse Zee in steekt. Bekend van pizza, pasta en de stad **Rome** (de hoofdstad), met het oude **Colosseum**.\n\n" +
      "Klik op de kaart op **Italië**.",
    interactiveComponent: check("wijs", "Italië"),
    checks: [
      {
        q: "Welk Zuid-Europees land heeft de vorm van een laars?",
        options: ["Italië", "Spanje", "Griekenland", "Portugal"],
        answer: 0,
        wrongHints: [null, "Groot, vierkant land in het westen.", "Ligt helemaal in het zuidoosten, veel eilanden.", "Smal land aan de westkust."],
        uitlegPad: { stappen: [{ titel: "De laars = Italië", tekst: "Italië heeft de herkenbare vorm van een laars." }],
          niveaus: { basis: "Het laars-land is Italië.", simpeler: "Welk land lijkt op een laars?", nogSimpeler: "Begint met Ita…?" } },
      },
    ],
  },
  {
    title: "Zuid-Europa: Spanje",
    explanation:
      "**Spanje** ligt in het zuidwesten, op het **Iberisch Schiereiland** (samen met Portugal). Een populair vakantieland met veel zon. De hoofdstad is **Madrid**, midden in het land.\n\n" +
      "Wat is de hoofdstad van Spanje?",
    interactiveComponent: check("noem-hoofdstad", "Spanje"),
    checks: [
      {
        q: "Wat is de hoofdstad van Spanje?",
        options: ["Madrid", "Lissabon", "Rome", "Parijs"],
        answer: 0,
        wrongHints: [null, "Dat is de hoofdstad van buurland Portugal.", "Dat is de hoofdstad van Italië.", "Dat is de hoofdstad van Frankrijk."],
        uitlegPad: { stappen: [{ titel: "Spanje → Madrid", tekst: "Madrid ligt midden in Spanje en is de hoofdstad." }],
          niveaus: { basis: "De hoofdstad van Spanje is Madrid.", simpeler: "De Spaanse hoofdstad begint met 'Mad…'.", nogSimpeler: "Mad…?" } },
      },
    ],
  },
  {
    title: "Het noorden: Scandinavië",
    explanation:
      "Bovenin Europa ligt **Scandinavië**: **Noorwegen**, **Zweden** en **Finland**. Koud, veel bos en meren, en in de winter soms het **noorderlicht**.\n\n" +
      "**Noorwegen** is langgerekt langs de westkust, met diepe inhammen van zee: **fjorden**. Welk land is geel gemaakt?",
    interactiveComponent: check("noem", "Noorwegen"),
    checks: [
      {
        q: "Welk langgerekt land aan de westkust van Scandinavië staat bekend om zijn fjorden?",
        options: ["Noorwegen", "Zweden", "Finland", "Denemarken"],
        answer: 0,
        wrongHints: [null, "Ligt ernaast, aan de oostkant.", "Ligt nog verder naar het oosten.", "Klein land onderaan Scandinavië."],
        uitlegPad: { stappen: [{ titel: "Fjorden = Noorwegen", tekst: "Noorwegen ligt langs de westkust en heeft de fjorden." }],
          niveaus: { basis: "Het fjorden-land is Noorwegen.", simpeler: "Welk land ligt het meest naar het westen in Scandinavië?", nogSimpeler: "Begint met Noor…?" } },
      },
    ],
  },
  // E. Oefen alle landen (zelfde "ken ze allemaal"-ronde als bij de provincies —
  // Mark 10 aug: meer oefenen geldt ook voor landen; stoppen mag altijd).
  {
    title: "Ken alle landen!",
    explanation:
      "Je kent de streken van Europa — nu de **hele kaart**.\n\n" +
      "Je krijgt alle **landen** door elkaar. Klik ze één voor één aan:\n" +
      "• In **één keer goed** → ✔ die ken je!\n" +
      "• **Mis?** Je ziet welk land je aanklikte, en dat land komt straks nog een keer terug.\n\n" +
      "Klaar als je ze **allemaal** kent. Stoppen mag altijd — je voortgang is nooit weg.",
    interactiveComponent: makeGeoOefenRonde({ data: EU, naam: "land", meervoud: "landen", emoji: "🇪🇺", labelFontSize: 16, maxHeight: 480 }),
    checks: [
      {
        q: "Welk land is het grootste buurland van Nederland?",
        options: ["Duitsland", "België", "Frankrijk", "Verenigd Koninkrijk"],
        answer: 0,
        wrongHints: [null, "Onze zuidbuur is kleiner.", "Grenst niet aan Nederland.", "Ligt aan de overkant van de Noordzee."],
        uitlegPad: { stappen: [{ titel: "Oosterbuur = Duitsland", tekst: "Duitsland ligt ten oosten van Nederland en is ons grootste buurland." }],
          niveaus: { basis: "Ons grootste buurland is Duitsland.", simpeler: "Welk land ligt ten oosten van ons?", nogSimpeler: "Begint met Duits…?" } },
      },
    ],
  },
];

export default {
  id: "topografie-europa-landen-po",
  title: "Topografie Europa — landen & hoofdsteden",
  subject: "aardrijkskunde",
  level: "groep8",
  sloThema: "aardrijkskunde-topografie-europa",
  chapters,
  steps,
  prerequisites: [{ id: "topografie-nederland-provincies-po", title: "Topografie Nederland", niveau: "groep7-8" }],
};
