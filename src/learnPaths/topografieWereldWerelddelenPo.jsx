// Leerpad: Topografie Wereld — de werelddelen (groep 8 / VO-onderbouw).
// Interactieve wereldkaart (GeoTopo) op basis van Natural Earth open data
// (publiek domein). Landen gegroepeerd per werelddeel. Elke stap: korte uitleg
// + interactieve kaart-check + tekst-fallback.

import { GeoKaart, makeGeoCheck } from "../components/learn/geo/GeoTopo.jsx";
import { WERELD_VIEWBOX, WERELDDELEN } from "../components/learn/geo/wereldData.js";

const WERELD = { viewBox: WERELD_VIEWBOX, regios: WERELDDELEN };
const OverzichtWereld = () => <GeoKaart data={WERELD} showLabels labelFontSize={22} maxHeight={360} />;
const check = (type, doel) => makeGeoCheck({ data: WERELD, type, doel, naam: "werelddeel", labelFontSize: 20, maxHeight: 340 });

const chapters = [
  { letter: "A", title: "De werelddelen", emoji: "🌍", from: 0, to: 1 },
  { letter: "B", title: "Groot & ver", emoji: "🧭", from: 2, to: 3 },
  { letter: "C", title: "Het zuiden", emoji: "🦘", from: 4, to: 4 },
];

const steps = [
  {
    title: "De aarde heeft werelddelen",
    explanation:
      "Het land op aarde is verdeeld in grote stukken: de **werelddelen** (continenten). Op de kaart zie je er zes: **Afrika**, **Europa**, **Azië**, **Noord-Amerika**, **Zuid-Amerika** en **Oceanië**. (Het zevende, **Antarctica**, ligt helemaal onderaan bij de zuidpool en staat niet op deze kaart.)\n\n" +
      "Tussen de werelddelen liggen de grote **oceanen**: de **Atlantische Oceaan**, de **Grote (Stille) Oceaan** en de **Indische Oceaan**.\n\n" +
      "**Afrika** ligt in het midden, onder Europa, met veel woestijn (de Sahara) en savanne.",
    illustrationComponent: OverzichtWereld,
    interactiveComponent: check("noem", "Afrika"),
    checks: [
      {
        q: "Welk werelddeel ligt direct onder Europa, met de Sahara-woestijn?",
        options: ["Afrika", "Azië", "Zuid-Amerika", "Oceanië"],
        answer: 0,
        wrongHints: [null, "Dat is het grootste werelddeel, naar het oosten.", "Dat ligt aan de andere kant van de oceaan.", "Dat ligt rechtsonder, bij Australië."],
        uitlegPad: { stappen: [{ titel: "Onder Europa = Afrika", tekst: "Afrika ligt onder Europa en heeft de grote Sahara-woestijn." }],
          niveaus: { basis: "Het werelddeel onder Europa is Afrika.", simpeler: "In welk werelddeel ligt de Sahara?", nogSimpeler: "Begint met Afri…?" } },
      },
    ],
  },
  {
    title: "Europa — klein maar dichtbevolkt",
    explanation:
      "**Europa** is een van de kleinste werelddelen, maar er wonen veel mensen. Nederland ligt in Europa. Europa grenst in het oosten aan het grootste werelddeel: **Azië** (samen ook wel 'Eurazië' genoemd, want het is één landmassa).\n\n" +
      "Welk werelddeel is geel gemaakt?",
    interactiveComponent: check("noem", "Europa"),
    checks: [
      {
        q: "In welk werelddeel ligt Nederland?",
        options: ["Europa", "Azië", "Afrika", "Noord-Amerika"],
        answer: 0,
        wrongHints: [null, "Daar grenst Europa aan, maar Nederland ligt er net niet in.", "Dat ligt eronder.", "Dat ligt aan de overkant van de oceaan."],
        uitlegPad: { stappen: [{ titel: "Nederland = Europa", tekst: "Nederland ligt in het werelddeel Europa." }],
          niveaus: { basis: "Nederland ligt in Europa.", simpeler: "Welk werelddeel hoort bij Nederland?", nogSimpeler: "Begint met Euro…?" } },
      },
    ],
  },
  {
    title: "Azië — het grootste werelddeel",
    explanation:
      "**Azië** is verreweg het **grootste** werelddeel, met ook de meeste mensen. Hier liggen landen als China, India en Japan, en het hoogste gebergte ter wereld: de **Himalaya**.\n\n" +
      "Klik op de kaart op **Azië** (het grote werelddeel in het oosten).",
    interactiveComponent: check("wijs", "Azië"),
    checks: [
      {
        q: "Welk werelddeel is het grootst, met landen als China en India?",
        options: ["Azië", "Afrika", "Europa", "Noord-Amerika"],
        answer: 0,
        wrongHints: [null, "Dat is het op één na grootste, in het midden.", "Klein werelddeel waar Nederland ligt.", "Aan de overkant van de oceaan."],
        uitlegPad: { stappen: [{ titel: "Grootste = Azië", tekst: "Azië is het grootste werelddeel; China en India liggen er." }],
          niveaus: { basis: "Het grootste werelddeel is Azië.", simpeler: "In welk werelddeel ligt China?", nogSimpeler: "Begint met Az…?" } },
      },
    ],
  },
  {
    title: "Amerika: noord en zuid",
    explanation:
      "Aan de andere kant van de **Atlantische Oceaan** liggen twee werelddelen boven elkaar:\n" +
      "• **Noord-Amerika** (met o.a. de Verenigde Staten en Canada).\n" +
      "• **Zuid-Amerika** (met o.a. Brazilië en het Amazone-regenwoud).\n\n" +
      "Welk werelddeel is geel gemaakt?",
    interactiveComponent: check("noem", "Zuid-Amerika"),
    checks: [
      {
        q: "In welk werelddeel ligt het Amazone-regenwoud (en het land Brazilië)?",
        options: ["Zuid-Amerika", "Noord-Amerika", "Afrika", "Oceanië"],
        answer: 0,
        wrongHints: [null, "Dat ligt erboven, met de VS en Canada.", "Ander werelddeel met regenwoud, maar niet de Amazone.", "Dat ligt bij Australië."],
        uitlegPad: { stappen: [{ titel: "Amazone = Zuid-Amerika", tekst: "Het Amazone-regenwoud en Brazilië liggen in Zuid-Amerika." }],
          niveaus: { basis: "Het Amazone-regenwoud ligt in Zuid-Amerika.", simpeler: "Boven of onder? Het ligt in het zuidelijke deel van Amerika.", nogSimpeler: "Zuid- of Noord-Amerika?" } },
      },
    ],
  },
  {
    title: "Oceanië — Australië en de eilanden",
    explanation:
      "Rechtsonder op de kaart ligt **Oceanië**: het werelddeel met **Australië** en heel veel eilanden in de **Grote (Stille) Oceaan**. Australië staat bekend om kangoeroes, koala's en het Great Barrier Reef.\n\n" +
      "Klik op de kaart op **Oceanië**.",
    interactiveComponent: check("wijs", "Oceanië"),
    checks: [
      {
        q: "In welk werelddeel ligt Australië?",
        options: ["Oceanië", "Azië", "Afrika", "Zuid-Amerika"],
        answer: 0,
        wrongHints: [null, "Dat ligt er net boven, het grootste werelddeel.", "Ander werelddeel, links op de kaart.", "Aan de andere kant, in Amerika."],
        uitlegPad: { stappen: [{ titel: "Australië = Oceanië", tekst: "Australië en de eilanden in de Grote Oceaan vormen het werelddeel Oceanië." }],
          niveaus: { basis: "Australië ligt in het werelddeel Oceanië.", simpeler: "Welk werelddeel hoort bij Australië en de eilanden?", nogSimpeler: "Begint met Ocea…?" } },
      },
    ],
  },
];

export default {
  id: "topografie-wereld-werelddelen-po",
  title: "Topografie Wereld — de werelddelen",
  subject: "aardrijkskunde",
  level: "groep8",
  sloThema: "aardrijkskunde-topografie-wereld",
  chapters,
  steps,
  prerequisites: [{ id: "topografie-europa-landen-po", title: "Topografie Europa", niveau: "groep8" }],
};
