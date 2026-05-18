// Verzamel en sample meerkeuze-vragen uit onze PO-leerpaden voor een
// Cito-stijl oefen-toets. Sprint C v1 (2026-05-08).
//
// Verschil met TextbookQuiz: dit gebruikt onze eigen kwaliteit-
// gecontroleerde checks (denkprikkel-wrongHints) uit groep5-8-paden.
//
// Output-format per vraag is bewust simpel zodat een nieuwe toets-
// component het direct kan renderen:
//   { id, question, options, answer, wrongHints, subject, pathTitle, stepTitle }

import { ALL_LEARN_PATHS } from "../learnPaths/index.js";
import { getWrongChecks } from "./adaptiveStore.js";

// Welke `subject`-keys horen bij welk Cito-onderdeel.
// Schema's-stappenplannen + samenvatten zijn als `subject: "taal"`
// gemarkeerd voor vindbaarheid maar inhoudelijk studievaardigheden;
// herkenbaar aan sloThema-prefix.
const SUBJECT_TO_PIJLER = {
  rekenen: "rekenen",
  wiskunde: "rekenen",
  taal: "taal",
  spelling: "taal",
  "begrijpend-lezen": "taal",
  engels: "taal",
  aardrijkskunde: "studievaardigheden",
  natuur: "studievaardigheden",
  cito: "rekenen", // generieke cito-strategieën-paden vallen onder rekenen-pijler
};

function pijlerForPath(path) {
  if (!path) return null;
  const slo = (path.sloThema || "").toLowerCase();
  if (slo.startsWith("studievaardigheden")) return "studievaardigheden";
  return SUBJECT_TO_PIJLER[path.subject] || null;
}

function isPoLevel(level) {
  if (!level) return false;
  // Accepteer "groep5-8", "groep6-8", "groep4", etc.
  return /^groep[1-8]/.test(level);
}

// Doorstroomtoets-simulatie eist groep 7-8 niveau (eindniveau basisschool).
// Chrome-Claude review 2026-05-15: vragen als "Pen €1,25 × 4" en "10−2,75"
// uit groep 4-5-paden voelen kinderachtig voor G8-leerling. Strenger filter.
// Accepteert: "groep7", "groep8", "groep6-8", "groep7-8", "groep5-8" (omdat
// dat pad expliciet G8 mee neemt), etc.
function isDoorstroomtoetsLevel(level) {
  if (!level) return false;
  const s = String(level).toLowerCase();
  // Single-grade: alleen 7 of 8.
  if (/^groep[78]$/.test(s)) return true;
  // Range: eindgrade moet 7 of 8 zijn (groep5-8, groep6-8, etc.).
  const range = s.match(/^groep(\d)-(\d)$/);
  if (range) {
    const end = parseInt(range[2], 10);
    return end >= 7;
  }
  // Onbekend formaat → uitsluiten voor Doorstroomtoets-simulatie.
  return false;
}

export function gatherPoChecks(opts = {}) {
  const out = [];
  // doorstroomtoets-only: filter strenger op groep 7-8 zodat de simulatie geen
  // kinderachtige PO-vragen toont. Default = breed (alle PO).
  const levelCheck = opts.doorstroomtoetsOnly ? isDoorstroomtoetsLevel : isPoLevel;
  for (const [pathId, path] of Object.entries(ALL_LEARN_PATHS)) {
    if (!path || !levelCheck(path.level)) continue;
    const pijler = pijlerForPath(path);
    if (!pijler) continue;
    const steps = Array.isArray(path.steps) ? path.steps : [];
    steps.forEach((step, stepIdx) => {
      const checks = Array.isArray(step?.checks) ? step.checks : [];
      checks.forEach((c, checkIdx) => {
        if (!c || !Array.isArray(c.options) || typeof c.answer !== "number") return;
        if (!c.q && !c.question) return;
        // Checks met `disabled: true` zijn buiten de Cito-mix sample gehouden —
        // typisch omdat ze leunen op step.svg/tabel-context die in sample-flow
        // verloren gaat. Ze blijven beschikbaar in het oorspronkelijke leerpad.
        if (c.disabled) return;
        out.push({
          id: `${pathId}::${stepIdx}::${checkIdx}`,
          question: c.q || c.question,
          options: c.options.slice(),
          answer: c.answer,
          wrongHints: Array.isArray(c.wrongHints) ? c.wrongHints.slice() : [],
          // Voor resultatenscherm na fout: volledige uitleg-vragen-flow.
          // uitlegPad (3-niveau didactisch) + explanation (volledige tekst).
          uitlegPad: c.uitlegPad || null,
          explanation: c.explanation || "",
          // Mark 2026-05-12: examenBron + bronTekst overal door zodat de
          // gouden banner ('Officiële examen-vraag') ook in CitoLeerpadToets
          // zichtbaar is als een check uit een echt examen komt.
          examenBron: c.examenBron || null,
          bronTekst: c.bronTekst || null,
          // Mark infra-fix 2026-05-18: neem step.svg mee zodat grafiek-/
          // tabel-vragen ook in sample-flow renderable zijn (PlayQuiz
          // toont question.svg al automatisch). Lost root-cause op die
          // de 5 disabled-vlaggen in tabellenGrafieken patchte.
          svg: step?.svg || null,
          checkIdx,
          subject: pijler,
          pathId,
          pathTitle: path.title,
          stepIdx,
          stepTitle: step?.title || "",
        });
      });
    });
  }
  return out;
}

function shuffle(arr, rng = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Markeer welke vragen eerder fout zijn gegaan op basis van adaptiveStore.
// Returnt nieuwe array (geen mutatie). Vragen krijgen extra `wrongBefore: true`.
function annotateWithWrongHistory(checks) {
  // Cache wrongChecks-lookup per pad+stap zodat we niet voor elke vraag
  // localStorage hitten.
  const cache = new Map();
  return checks.map((c) => {
    const k = `${c.pathId}::${c.stepIdx}`;
    if (!cache.has(k)) cache.set(k, new Set(getWrongChecks(c.pathId, c.stepIdx)));
    const wrongSet = cache.get(k);
    // c.id format = `${pathId}::${stepIdx}::${checkIdx}`
    const checkIdx = Number(c.id.split("::")[2]);
    return { ...c, wrongBefore: wrongSet.has(checkIdx) };
  });
}

// Sample N vragen met een mix-verdeling.
// mix = { rekenen: 0.5, taal: 0.35, studievaardigheden: 0.15 } (default Cito-achtig).
// Als een pijler te weinig vragen heeft wordt het tekort uit de andere pijlers
// aangevuld zodat je altijd `count` vragen krijgt.
//
// adaptive (default true): tot 30% van de sample krijgt voorrang aan vragen
// die eerder fout zijn gegaan (uit adaptiveStore). Resterende ~70% volgt de
// normale pijler-mix. Geeft een spaced-rep-achtig effect zonder DB-werk.
//
// opts.subjectFilter: indien gezet ("rekenen" / "taal" / "studievaardigheden"
// of een array daarvan) wordt de pool beperkt tot die pijler(s) — gebruikt
// voor vak-specifieke Cito-oefen-knop op StudentHome.
export function sampleCitoMix(count, mix, rng = Math.random, opts = {}) {
  const adaptive = opts.adaptive !== false;
  // doorstroomtoetsOnly propageert naar gatherPoChecks zodat groep<7-paden
  // uitgesloten worden (Chrome-Claude review 2026-05-15).
  let all = gatherPoChecks({ doorstroomtoetsOnly: !!opts.doorstroomtoetsOnly });
  if (opts.subjectFilter) {
    const allowed = new Set(
      Array.isArray(opts.subjectFilter) ? opts.subjectFilter : [opts.subjectFilter]
    );
    all = all.filter((v) => allowed.has(v.subject));
  }
  const ratios = mix || { rekenen: 0.5, taal: 0.35, studievaardigheden: 0.15 };
  const targetN = Math.max(1, Math.floor(count));

  const picked = [];
  const used = new Set();

  // 0. Adaptive-pool: eerder-foute vragen krijgen voorrang (max 30% van target).
  if (adaptive) {
    const annotated = annotateWithWrongHistory(all);
    const wrongPool = shuffle(annotated.filter((v) => v.wrongBefore), rng);
    const adaptiveSlots = Math.min(
      Math.floor(targetN * 0.3),
      wrongPool.length
    );
    for (let i = 0; i < adaptiveSlots; i++) {
      const v = wrongPool[i];
      picked.push(v);
      used.add(v.id);
    }
  }

  const byPijler = {};
  for (const v of all) {
    if (used.has(v.id)) continue;
    if (!byPijler[v.subject]) byPijler[v.subject] = [];
    byPijler[v.subject].push(v);
  }

  // Eerste ronde: pak per pijler floor(ratio * count) vragen
  for (const [pijler, ratio] of Object.entries(ratios)) {
    const want = Math.floor(ratio * targetN);
    const pool = shuffle(byPijler[pijler] || [], rng);
    for (const v of pool) {
      if (picked.length >= targetN) break;
      if (used.has(v.id)) continue;
      picked.push(v);
      used.add(v.id);
      if (picked.filter((p) => p.subject === pijler).length >= want) break;
    }
  }

  // Tweede ronde: tekort aanvullen uit alle nog-niet-gepakte vragen
  if (picked.length < targetN) {
    const rest = shuffle(all.filter((v) => !used.has(v.id)), rng);
    for (const v of rest) {
      if (picked.length >= targetN) break;
      picked.push(v);
      used.add(v.id);
    }
  }

  return shuffle(picked, rng);
}

// Score-berekening per pijler. Returnt {total: {correct, total, pct}, perPijler: {...}}.
export function scoreCitoMix(questions, answers) {
  const result = {
    total: { correct: 0, total: questions.length, pct: 0 },
    perPijler: {},
  };
  questions.forEach((q, i) => {
    const isCorrect = answers[i] === q.answer;
    const pij = q.subject || "onbekend";
    if (!result.perPijler[pij]) result.perPijler[pij] = { correct: 0, total: 0, pct: 0 };
    result.perPijler[pij].total++;
    if (isCorrect) {
      result.perPijler[pij].correct++;
      result.total.correct++;
    }
  });
  result.total.pct = result.total.total > 0
    ? Math.round((result.total.correct / result.total.total) * 100)
    : 0;
  for (const pij of Object.keys(result.perPijler)) {
    const p = result.perPijler[pij];
    p.pct = p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0;
  }
  return result;
}
