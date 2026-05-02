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
//   features       array met optionele toggles: "telBlokjes" | "toonBalk" | "toonBerekening"
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
 *   shape: "kubus"|"balk"|"piramide",
 *   dimensions: Record<string, number>,
 *   labels: Label3D[],
 *   features?: ("telBlokjes"|"toonBalk"|"toonBerekening")[],
 *   opties: Optie3D[],
 *   goedFeedback?: string,
 *   formuleStappen?: string[]
 * }} Question3D
 */

/** @type {Question3D[]} */
export const QUESTIONS_3D = [
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
    features: ["toonBalk", "toonBerekening"],
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
];

/** Lookup helper. Returns undefined als trackId niet bestaat. */
export function getQuestion3D(trackId) {
  return QUESTIONS_3D.find((q) => q.trackId === trackId);
}
