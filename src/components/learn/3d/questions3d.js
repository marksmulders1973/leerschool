// ============================================================================
// 3D-vraag registry — alle 3D-checks als data, niet als losse componenten.
//
// Voeg een vraag toe = één entry hieronder + (optioneel) koppeling in
// learnPaths/<pad>.js step.interactiveComponent via:
//   import { make3DInteractiveComponent } from "../components/learn/3d/Question3DRenderer.jsx";
//   step.interactiveComponent: make3DInteractiveComponent("RM-S8-Q1"),
//
// Een Question3D-entry:
//   trackId        bv. "RM-S8-Q1"
//   pathId         bv. "ruimtemeetkunde"
//   stepIdx        array-index (0-based) in steps[] van het leerpad
//   level          "groep-6" | "groep-8" | "brugklas" | "klas-2"
//   topicKey       bv. "WI.meetkunde.ruimte.kubus"
//   vraag          string getoond bovenin
//   shape          "kubus" | "balk" | "piramide" (zie Shape3D)
//   dimensions     shape-specifiek object
//   labels         [{ text, axis: "x"|"y"|"z" }] voor maatlabels in scene
//   features       array met optionele toggles: "telBlokjes" | "toonOmsluiting" | "toonBerekening"
//                  toonOmsluiting toont de omsluitende vorm: balk-wireframe
//                  rond piramide, cilinder-wireframe rond kegel — visualiseert
//                  de ⅓-relatie didactisch.
//   opties         [{ label, correct, uitleg }] — uitleg wordt feedback bij klik
//   goedFeedback   tekst getoond bij correct antwoord (optioneel — anders gebruikt opties.uitleg)
//   formuleStappen array van regels voor "Toon berekening"-paneel
//
// Twee startvragen geconverteerd uit losse RM-S8-Q1.jsx en RM-S12-Q1.jsx.
// RM-S6-Q1 (4-figuren-vergelijking) blijft buiten dit registry — speciaal geval.
// ============================================================================

/** @typedef {{ text: string, axis: "x"|"y"|"z" }} Label3D */
/** @typedef {{ label: string, correct: boolean, uitleg: string }} Optie3D */
/** @typedef {{
 *   trackId: string, pathId: string, stepIdx: number, level: string, topicKey: string,
 *   vraag: string,
 *   shape: "kubus"|"balk"|"cilinder"|"piramide"|"kegel",
 *   dimensions: Record<string, number>,
 *   labels: Label3D[],
 *   features?: ("telBlokjes"|"toonOmsluiting"|"toonBerekening")[],
 *   opties: Optie3D[],
 *   goedFeedback?: string,
 *   formuleStappen?: string[]
 * }} Question3D
 */

/** @type {Question3D[]} */
export const QUESTIONS_3D = [
  {
    trackId: "RM-S7-Q1",
    pathId: "ruimtemeetkunde",
    stepIdx: 7,
    level: "klas-2",
    topicKey: "WI.meetkunde.ruimte.inhoud-concept",
    vraag: "Wat meet 'inhoud'?",
    shape: "balk",
    dimensions: { lengte: 4, hoogte: 2, breedte: 1 },
    labels: [
      { text: "4 lang", axis: "x" },
      { text: "2 hoog", axis: "y" },
      { text: "1 breed", axis: "z" },
    ],
    features: ["telBlokjes"],
    opties: [
      { label: "Hoeveel ruimte er in een 3D-figuur past", correct: true,  uitleg: "Precies — inhoud telt hoeveel kubieke eenheden er in een 3D-figuur passen, zoals de blokjes hierboven." },
      { label: "Hoe ver de buitenkant rond gaat",         correct: false, uitleg: "Dat is omtrek — een 1D-meting langs de rand. Inhoud meet 3D-ruimte." },
      { label: "Hoeveel oppervlakte een figuur heeft",     correct: false, uitleg: "Dat is oppervlakte (2D, hoeveel vlak iets bedekt). Inhoud is 3D — wat erin past." },
      { label: "Hoe lang een lijn is",                    correct: false, uitleg: "Dat is gewoon lengte (1D). Inhoud meet ruimte in 3D — drie afmetingen tegelijk." },
    ],
  },
  {
    trackId: "RM-S8-Q1",
    pathId: "ruimtemeetkunde",
    stepIdx: 8,
    level: "klas-2",
    topicKey: "WI.meetkunde.ruimte.kubus",
    vraag: "Wat is de inhoud van een kubus met zijde 5 cm?",
    shape: "kubus",
    dimensions: { zijde: 5 },
    labels: [
      { text: "5 cm", axis: "x" },
      { text: "5 cm", axis: "y" },
      { text: "5 cm", axis: "z" },
    ],
    features: ["telBlokjes", "toonBerekening"],
    opties: [
      { label: "125 cm³", correct: true,  uitleg: "Een kubus heeft drie keer dezelfde zijde. 5 × 5 × 5 = 125 cm³." },
      { label: "25 cm³",  correct: false, uitleg: "Dat is de oppervlakte van één vlak (5×5). Inhoud is 3D — vermenigvuldig drie keer." },
      { label: "15 cm³",  correct: false, uitleg: "Je hebt opgeteld (5+5+5). Bij inhoud vermenigvuldig je: 5×5×5." },
      { label: "125 cm²", correct: false, uitleg: "Het getal klopt, maar de eenheid is cm³ (kubiek), niet cm². 3D = drie keer cm." },
    ],
    formuleStappen: [
      "Inhoud kubus = z × z × z = z³",
      "5 × 5 × 5",
      "= 125 cm³",
    ],
  },
  {
    trackId: "RM-S9-Q1",
    pathId: "ruimtemeetkunde",
    stepIdx: 9,
    level: "klas-2",
    topicKey: "WI.meetkunde.ruimte.balk",
    vraag: "Een balk is 8 cm lang, 5 cm breed en 2 cm hoog. Wat is de inhoud?",
    shape: "balk",
    dimensions: { lengte: 8, hoogte: 2, breedte: 5 },
    labels: [
      { text: "8 cm", axis: "x" },
      { text: "2 cm", axis: "y" },
      { text: "5 cm", axis: "z" },
    ],
    features: ["telBlokjes", "toonBerekening"],
    opties: [
      { label: "80 cm³", correct: true,  uitleg: "8 × 5 × 2 = 80 cm³. Drie afmetingen vermenigvuldigd geeft de inhoud." },
      { label: "15 cm³", correct: false, uitleg: "Je hebt 8 + 5 + 2 gedaan (optellen). Bij inhoud vermenigvuldig je: lengte × breedte × hoogte." },
      { label: "40 cm³", correct: false, uitleg: "Je hebt alleen 8 × 5 = 40 gedaan (oppervlakte van één vlak). Maar je moet ook nog × hoogte (× 2) doen." },
      { label: "80 cm²", correct: false, uitleg: "Het getal klopt, maar de eenheid niet: inhoud is in cm³ (3D), niet cm² (2D)." },
    ],
    formuleStappen: [
      "Inhoud balk = lengte × breedte × hoogte",
      "= 8 × 5 × 2",
      "= 80 cm³",
    ],
  },
  {
    trackId: "RM-S10-Q1",
    pathId: "ruimtemeetkunde",
    stepIdx: 10,
    level: "klas-2",
    topicKey: "WI.meetkunde.ruimte.cilinder",
    vraag: "Cilinder met straal 2 cm en hoogte 5 cm. Wat is de inhoud? (π ≈ 3,14)",
    shape: "cilinder",
    dimensions: { straal: 2, hoogte: 5 },
    labels: [
      { text: "r = 2", axis: "x" },
      { text: "h = 5", axis: "y" },
    ],
    features: ["toonBerekening"],
    opties: [
      { label: "≈ 62,8 cm³",  correct: true,  uitleg: "Inhoud cilinder = π × r² × h = 3,14 × 4 × 5 ≈ 62,8 cm³." },
      { label: "≈ 31,4 cm³",  correct: false, uitleg: "Je hebt π × r × h gedaan. Maar de formule is π × r² × h — vergeet het kwadraat niet." },
      { label: "≈ 20 cm³",    correct: false, uitleg: "Je bent de π vergeten en hebt alleen r × h gedaan. Probeer 3,14 × 2² × 5." },
      { label: "≈ 125,6 cm³", correct: false, uitleg: "Je hebt × 2 dubbel gedaan. De formule is π × r² × h = 3,14 × 4 × 5, niet × 2." },
    ],
    formuleStappen: [
      "Inhoud cilinder = π × r² × h",
      "= 3,14 × 2² × 5",
      "= 3,14 × 4 × 5",
      "≈ 62,8 cm³",
    ],
  },
  {
    trackId: "RM-S12-Q1",
    pathId: "ruimtemeetkunde",
    stepIdx: 12,
    level: "klas-2",
    topicKey: "WI.meetkunde.ruimte.piramide",
    vraag: "Piramide: grondvlak 4 × 4 cm, hoogte 6 cm. Wat is de inhoud?",
    shape: "piramide",
    dimensions: { grondvlakZijde: 4, hoogte: 6 },
    labels: [
      { text: "4 cm", axis: "x" },
      { text: "4 cm", axis: "z" },
      { text: "6 cm", axis: "y" },
    ],
    features: ["toonOmsluiting", "toonBerekening"],
    opties: [
      { label: "32 cm³", correct: true,  uitleg: "Een piramide is precies ⅓ van de balk eromheen. 96 ÷ 3 = 32 cm³." },
      { label: "96 cm³", correct: false, uitleg: "Dat is de inhoud van de hele balk eromheen. De piramide is maar ⅓ daarvan." },
      { label: "48 cm³", correct: false, uitleg: "Je hebt door 2 gedeeld in plaats van door 3. Bij een piramide deel je door 3." },
      { label: "24 cm³", correct: false, uitleg: "Reken nog eens na: ⅓ × 4 × 4 × 6 = 32." },
    ],
    formuleStappen: [
      "Inhoud piramide = ⅓ × grondvlak × hoogte",
      "= ⅓ × (4 × 4) × 6",
      "= ⅓ × 16 × 6",
      "= ⅓ × 96",
      "= 32 cm³",
    ],
  },
  {
    trackId: "RM-S13-Q1",
    pathId: "ruimtemeetkunde",
    stepIdx: 13,
    level: "klas-2",
    topicKey: "WI.meetkunde.ruimte.kegel",
    vraag: "Kegel met straal 6 cm en hoogte 4 cm (π ≈ 3,14). Wat is de inhoud?",
    shape: "kegel",
    dimensions: { straal: 6, hoogte: 4 },
    labels: [
      { text: "r = 6", axis: "x" },
      { text: "h = 4", axis: "y" },
    ],
    features: ["toonOmsluiting", "toonBerekening"],
    opties: [
      { label: "≈ 150,7 cm³", correct: true,  uitleg: "Een kegel is precies ⅓ van de cilinder eromheen. ⅓ × 3,14 × 36 × 4 ≈ 150,7 cm³." },
      { label: "≈ 452,2 cm³", correct: false, uitleg: "Dat is de inhoud van de cilinder eromheen (π × r² × h). De kegel is maar ⅓ daarvan — deel nog door 3." },
      { label: "≈ 75,4 cm³",  correct: false, uitleg: "Je hebt ⅓ × π × r × h gedaan. Maar het is r² — dus 6² = 36, niet 6." },
      { label: "≈ 24 cm³",    correct: false, uitleg: "Te klein. Reken nog: ⅓ × 3,14 × 6² × 4 = ⅓ × 3,14 × 36 × 4." },
    ],
    formuleStappen: [
      "Inhoud kegel = ⅓ × π × r² × h",
      "= ⅓ × 3,14 × 6² × 4",
      "= ⅓ × 3,14 × 36 × 4",
      "= ⅓ × 452,16",
      "≈ 150,7 cm³",
    ],
  },
];

/** Lookup helper. Returns undefined als trackId niet bestaat. */
export function getQuestion3D(trackId) {
  return QUESTIONS_3D.find((q) => q.trackId === trackId);
}
