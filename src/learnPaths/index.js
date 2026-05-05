// Centrale index van alle leerpaden.
// Voeg een nieuw onderwerp toe door:
//   1. Een nieuwe file in src/learnPaths/<naam>.js (zelfde structuur als parabolen.js)
//   2. Importeer en registreer hem hieronder

import parabolen from "./parabolen.js";
import ruimtemeetkunde from "./ruimtemeetkunde.jsx";
import kwadratenWortels from "./kwadratenWortels.js";
import pythagoras from "./pythagoras.js";
import kwadratischeVergelijkingen from "./kwadratischeVergelijkingen.js";
import lineaireFormules from "./lineaireFormules.js";
import rekenenMetLetters from "./rekenenMetLetters.js";
import vlakkeFiguren from "./vlakkeFiguren.js";
import breuken from "./breuken.js";
import klokkijken from "./klokkijken.js";
import procenten from "./procenten.js";
import negatieveGetallen from "./negatieveGetallen.js";
import verhoudingen from "./verhoudingen.js";
import statistiek from "./statistiek.js";
import kansrekening from "./kansrekening.js";
import goniometrie from "./goniometrie.js";
import coordinatenstelsel from "./coordinatenstelsel.js";
import vergelijkingenOplossen from "./vergelijkingenOplossen.js";
import stelsels from "./stelsels.js";
import machten from "./machten.js";
import exponentieel from "./exponentieel.js";
import logaritmen from "./logaritmen.js";
import differentieren from "./differentieren.js";
import periodiek from "./periodiek.js";
import werkwoordsvervoeging from "./werkwoordsvervoeging.js";
import werkwoordsspellingDT from "./werkwoordsspellingDT.js";
import argumentatieleer from "./argumentatieleer.js";
import schrijfvaardigheid from "./schrijfvaardigheid.js";
import tekstanalyse from "./tekstanalyse.js";
import literatuurgeschiedenis from "./literatuurgeschiedenis.js";
import spelling from "./spelling.js";
import zinsontleding from "./zinsontleding.js";
import onregelmatigeWerkwoordenEngels from "./onregelmatigeWerkwoordenEngels.js";
import onregelmatigeWerkwoordenV2Engels from "./onregelmatigeWerkwoordenV2Engels.js";
import celBiologie from "./celBiologie.js";
import voortplantingHormonenBiologie from "./voortplantingHormonenBiologie.js";
import geneticaErfelijkheidBiologie from "./geneticaErfelijkheidBiologie.js";
import tijdvakkenGeschiedenis from "./tijdvakkenGeschiedenis.js";
import wereldoorlog2Geschiedenis from "./wereldoorlog2Geschiedenis.js";
import tachtigjarigeOorlogGeschiedenis from "./tachtigjarigeOorlogGeschiedenis.js";
import klimatenAardrijkskunde from "./klimatenAardrijkskunde.js";
import platentektoniekAardrijkskunde from "./platentektoniekAardrijkskunde.js";
import topografieNederland from "./topografieNederland.js";
import krachtenNatuurkunde from "./krachtenNatuurkunde.js";
import elektriciteitNatuurkunde from "./elektriciteitNatuurkunde.js";
import atoombouwScheikunde from "./atoombouwScheikunde.js";
import chemischeReactiesScheikunde from "./chemischeReactiesScheikunde.js";
import vraagAanbodEconomie from "./vraagAanbodEconomie.js";
import balansBeco from "./balansBeco.js";
import pincodeEconomieVmboGt4 from "./pincodeEconomieVmboGt4.js";
import naamvallenDuits from "./naamvallenDuits.js";
import passeComposeFrans from "./passeComposeFrans.js";
import presentTensesEngels from "./presentTensesEngels.js";
import pastTensesEngels from "./pastTensesEngels.js";
import woordsoortenNederlands from "./woordsoortenNederlands.js";
import woordenschatEngels from "./woordenschatEngels.js";
import nederlandseStaatMaatschappijleer from "./nederlandseStaatMaatschappijleer.js";
import dierenSeizoenenNatuur from "./dierenSeizoenenNatuur.js";

export const ALL_LEARN_PATHS = {
  // Klas 1 basis (komen het eerst aan bod)
  coordinatenstelsel,
  breuken,
  klokkijken,
  procenten,
  "negatieve-getallen": negatieveGetallen,
  verhoudingen,
  // Klas 1-2 algebra-basis
  "rekenen-met-letters": rekenenMetLetters,
  "vergelijkingen-oplossen": vergelijkingenOplossen,
  stelsels,
  "kwadraten-wortels": kwadratenWortels,
  machten,
  exponentieel,
  logaritmen,
  differentieren,
  periodiek,
  // Klas 2 functies
  "lineaire-formules": lineaireFormules,
  parabolen,
  "kwadratische-vergelijkingen": kwadratischeVergelijkingen,
  // Klas 2 meetkunde
  "vlakke-figuren": vlakkeFiguren,
  pythagoras,
  goniometrie,
  ruimtemeetkunde,
  // Statistiek + kans
  statistiek,
  kansrekening,
  // Nederlands
  werkwoordsvervoeging,
  "werkwoordsspelling-dt": werkwoordsspellingDT,
  spelling,
  zinsontleding,
  argumentatieleer,
  schrijfvaardigheid,
  tekstanalyse,
  literatuurgeschiedenis,
  "woordsoorten-nederlands": woordsoortenNederlands,
  // Engels
  "onregelmatige-werkwoorden-engels": onregelmatigeWerkwoordenEngels,
  "onregelmatige-werkwoorden-v2-engels": onregelmatigeWerkwoordenV2Engels,
  "present-tenses-engels": presentTensesEngels,
  "past-tenses-engels": pastTensesEngels,
  "woordenschat-engels": woordenschatEngels,
  // Biologie
  "cel-biologie": celBiologie,
  "voortplanting-hormonen-biologie": voortplantingHormonenBiologie,
  "genetica-erfelijkheid-biologie": geneticaErfelijkheidBiologie,
  // Geschiedenis
  "tijdvakken-geschiedenis": tijdvakkenGeschiedenis,
  "wereldoorlog2-geschiedenis": wereldoorlog2Geschiedenis,
  "tachtigjarige-oorlog-geschiedenis": tachtigjarigeOorlogGeschiedenis,
  // Aardrijkskunde
  "klimaten-aardrijkskunde": klimatenAardrijkskunde,
  "platentektoniek-aardrijkskunde": platentektoniekAardrijkskunde,
  "topografie-nederland": topografieNederland,
  // Natuurkunde
  "krachten-natuurkunde": krachtenNatuurkunde,
  "elektriciteit-natuurkunde": elektriciteitNatuurkunde,
  // Scheikunde
  "atoombouw-scheikunde": atoombouwScheikunde,
  "chemische-reacties-scheikunde": chemischeReactiesScheikunde,
  // Economie
  "vraag-aanbod-economie": vraagAanbodEconomie,
  "pincode-economie-vmbo-gt-4": pincodeEconomieVmboGt4,
  // Bedrijfseconomie
  "balans-beco": balansBeco,
  // Duits
  "naamvallen-duits": naamvallenDuits,
  // Frans
  "passe-compose-frans": passeComposeFrans,
  // Maatschappijleer
  "nederlandse-staat-maatschappijleer": nederlandseStaatMaatschappijleer,
  // PO Wereld & Natuur
  "dieren-seizoenen-natuur": dierenSeizoenenNatuur,
};

import { QUESTION_PATH_MAP } from "./questionPathMap.generated.js";

// Vind het meest passende leerpad én de meest passende stap binnen dat pad
// op basis van de tekst van een quiz-vraag.
// `allowedSubjects` (optioneel): array van leerpad-`subject`-keys waarbinnen
// gezocht mag worden (bv. ["taal"] bij begrijpend-lezen, ["wiskunde"] bij
// wiskunde). Voorkomt dat een quizvraag in vak A naar een pad van vak B
// springt door een toevallige keyword-overlap.
//
// Strategie:
// 1. Exact-lookup in QUESTION_PATH_MAP (gegenereerd door
//    `scripts/match-questions-to-paths.mjs`). Deze map dekt alle hardcoded
//    vragen in src/constants.js en is snel + deterministisch.
// 2. Bij geen entry — runtime keyword-fallback (voor AI-gegenereerde
//    vragen of vragen die niet in de map staan).
//
// Returnt { pathId, stepIdx } of null als er geen match is.
export function findLearnPathForQuestion(questionText, allowedSubjects = null) {
  if (!questionText) return null;

  const allowedSet = Array.isArray(allowedSubjects) && allowedSubjects.length > 0
    ? new Set(allowedSubjects)
    : null;

  // Stap 1: exact lookup in pre-gegenereerde map
  const exact = QUESTION_PATH_MAP[questionText];
  if (exact) {
    if (!allowedSet) return exact;
    const taggedPath = ALL_LEARN_PATHS[exact.pathId];
    if (taggedPath && allowedSet.has(taggedPath.subject)) return exact;
    // Vak-mismatch: val terug op runtime-zoek hieronder
  }

  // Stap 2: runtime keyword-fallback
  const lower = questionText.toLowerCase();
  const stop = new Set(["een", "het", "deze", "die", "voor", "wordt", "wat", "hoe", "welk", "welke", "bij", "naar", "dan", "als", "maar", "ook", "niet", "met", "van", "uit", "tot", "kun", "kan", "krijg", "geef", "zonder", "samen", "telkens", "klopt"]);
  const words = lower
    .split(/[^a-zà-ž0-9²³½]+/i)
    .map((w) => w.trim())
    .filter((w) => w.length >= 4 && !stop.has(w));

  for (const path of Object.values(ALL_LEARN_PATHS)) {
    if (allowedSet && !allowedSet.has(path.subject)) continue;
    const padMatcht = path.triggerKeywords?.some((kw) => lower.includes(kw.toLowerCase()));
    if (!padMatcht) continue;

    let bestStepIdx = 0;
    let bestScore = 0;
    path.steps.forEach((step, idx) => {
      const stepText = (step.title + " " + (step.explanation || "")).toLowerCase();
      let score = 0;
      const titleLower = step.title.toLowerCase();
      for (const w of words) {
        if (titleLower.includes(w)) score += 3;
        else if (stepText.includes(w)) score += 1;
      }
      if (score > bestScore) {
        bestScore = score;
        bestStepIdx = idx;
      }
    });

    return { pathId: path.id, stepIdx: bestScore > 0 ? bestStepIdx : 0 };
  }
  return null;
}
