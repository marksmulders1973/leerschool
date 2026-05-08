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

export function gatherPoChecks() {
  const out = [];
  for (const [pathId, path] of Object.entries(ALL_LEARN_PATHS)) {
    if (!path || !isPoLevel(path.level)) continue;
    const pijler = pijlerForPath(path);
    if (!pijler) continue;
    const steps = Array.isArray(path.steps) ? path.steps : [];
    steps.forEach((step, stepIdx) => {
      const checks = Array.isArray(step?.checks) ? step.checks : [];
      checks.forEach((c, checkIdx) => {
        if (!c || !Array.isArray(c.options) || typeof c.answer !== "number") return;
        if (!c.q && !c.question) return;
        out.push({
          id: `${pathId}::${stepIdx}::${checkIdx}`,
          question: c.q || c.question,
          options: c.options.slice(),
          answer: c.answer,
          wrongHints: Array.isArray(c.wrongHints) ? c.wrongHints.slice() : [],
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
  let all = gatherPoChecks();
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
