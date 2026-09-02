#!/usr/bin/env node
/**
 * match-questions-to-paths.mjs
 * --------------------------------------------------------------------
 * Loopt door alle vragen in src/constants.js (SAMPLE_QUESTIONS +
 * TOPIC_QUESTIONS) en matcht elke vraag aan het beste leerpad op
 * basis van keyword-overlap met `triggerKeywords` van het pad.
 *
 * Output: src/learnPaths/questionPathMap.generated.js — een statische
 * map van vraag-tekst → { pathId, stepIdx } die door
 * findLearnPathForQuestion gebruikt wordt voor exact-lookup
 * (vóór de runtime keyword-fallback).
 *
 * Gebruik:
 *   node scripts/match-questions-to-paths.mjs
 *
 * Geen AI / API-key nodig. Pure keyword-matching.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_PATH = path.join(ROOT, "src", "learnPaths", "questionPathMap.generated.js");

// Categorie-id → leerpad-subject (kopie van subjectMapping.js)
const CATEGORY_TO_LEARN_SUBJECT = {
  wiskunde: "wiskunde",
  "wiskunde-a": "wiskunde",
  "wiskunde-b": "wiskunde",
  rekenen: ["rekenen", "wiskunde"], // 2 sep 2026: 37 PO-rekenpaden heten "rekenen"
  nederlands: ["taal", "spelling", "begrijpend-lezen"],
  taal: ["taal", "spelling", "begrijpend-lezen"],
  spelling: ["spelling", "taal"],
  "begrijpend-lezen": ["begrijpend-lezen", "taal"],
  studievaardigheden: "studievaardigheden",
  cito: ["rekenen", "taal", "begrijpend-lezen", "studievaardigheden", "wereldorientatie"],
  engels: "engels",
  "engels-po": "engels",
  biologie: "biologie",
  geschiedenis: "geschiedenis",
  "geschiedenis-po": "geschiedenis",
  aardrijkskunde: "aardrijkskunde",
  "aardrijkskunde-po": "aardrijkskunde",
  natuurkunde: "natuurkunde",
  scheikunde: "scheikunde",
  economie: "economie",
  beco: "beco",
  duits: "duits",
  frans: "frans",
  maatschappijleer: "maatschappijleer",
  nask: ["biologie", "natuurkunde", "scheikunde"],
  natuur: ["natuur", "biologie", "aardrijkskunde"],
};

function categoryToSubjects(categoryId) {
  const v = CATEGORY_TO_LEARN_SUBJECT[categoryId];
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

// Niveau-bucket (kopie van src/learnPaths/utils.js levelToBucket) — 2 sep 2026:
// zonder dit filter landde "ggd van 12 en 18" (groep 7) op mol-stoichiometrie-
// havo-vwo, omdat de keyword-match geen niveau kende.
function levelToBucket(lvl) {
  if (!lvl) return null;
  const s = String(lvl).toLowerCase();
  if (s === "nvt" || s === "_root") return null;
  if (s.startsWith("groep") || s === "po" || /\bgroep\s*\d/.test(s)) return "po";
  if (
    s.includes("havo4") || s.includes("havo5") || s.includes("havo-vwo-4") || s.includes("havo4-5") ||
    s.includes("vwo4") || s.includes("vwo5") || s.includes("vwo6") ||
    s.includes("klas4") || s.includes("klas5") || s.includes("klas6") ||
    s.includes("vmbo-gt-4") || s.includes("vmbo-bb-4") || s.includes("vmbo-kb-4")
  ) return "vo-boven";
  if (s.startsWith("klas") || s.includes("vmbo") || s.includes("havo") || s.includes("vwo") || s.includes("gym")) return "vo-onder";
  return null;
}
function levelsCompatible(quizLevel, pathLevel) {
  const q = levelToBucket(quizLevel);
  const p = levelToBucket(pathLevel);
  if (!q || !p) return true;
  return q === p;
}
// Niveau afleiden uit een vrije topic-naam ("cito rekenen groep8", "wiskunde klas 2 vwo")
function bucketFromTopicName(name) {
  const s = String(name || "").toLowerCase();
  if (/\bgroep\s*\d/.test(s) || /\bpo\b/.test(s) || s.includes("cito") || s.includes("doorstroom")) return "po";
  if (/\bklas\s*[123]\b/.test(s)) return "vo-onder";
  if (/\bklas\s*[456]\b/.test(s) || /havo\s*[45]|vwo\s*[456]/.test(s)) return "vo-boven";
  if (s.includes("vmbo") || s.includes("havo") || s.includes("vwo") || s.includes("brugklas")) return "vo-onder";
  return null;
}
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const STOP = new Set(["een", "het", "deze", "die", "voor", "wordt", "wat", "hoe", "welk", "welke", "bij", "naar", "dan", "als", "maar", "ook", "niet", "met", "van", "uit", "tot", "kun", "kan", "krijg", "geef", "zonder", "samen", "telkens", "klopt"]);

function findBest(questionText, explanationText, candidatePaths) {
  if (!questionText) return null;
  const lower = (questionText + " " + (explanationText || "")).toLowerCase();
  const words = lower
    .split(/[^a-zà-ž0-9²³½]+/i)
    .map((w) => w.trim())
    .filter((w) => w.length >= 4 && !STOP.has(w));

  let bestPath = null;
  let bestKwHits = 0;
  let bestStepIdx = 0;

  for (const path of candidatePaths) {
    const kws = (path.triggerKeywords || []).map((k) => k.toLowerCase());
    let kwHits = 0;
    for (const kw of kws) {
      // Woordgrens (2 sep 2026): "mol" matchte "molen", "log" matchte "logisch".
      // Meerwoords-keywords en keywords met leestekens blijven substring.
      if (/^[a-zà-ž0-9]+$/i.test(kw) && kw.length <= 6) {
        if (new RegExp(`(^|[^a-zà-ž0-9])${escapeRe(kw)}([^a-zà-ž0-9]|$)`, "i").test(lower)) kwHits++;
      } else if (lower.includes(kw)) kwHits++;
    }
    if (kwHits === 0) continue;

    // Beste stap binnen dit pad
    let bestStepScore = 0;
    let stepIdx = 0;
    path.steps.forEach((step, idx) => {
      const stepText = (step.title + " " + (step.explanation || "")).toLowerCase();
      const titleLower = step.title.toLowerCase();
      let score = 0;
      for (const w of words) {
        if (titleLower.includes(w)) score += 3;
        else if (stepText.includes(w)) score += 1;
      }
      if (score > bestStepScore) { bestStepScore = score; stepIdx = idx; }
    });

    if (kwHits > bestKwHits) {
      bestKwHits = kwHits;
      bestPath = path;
      bestStepIdx = bestStepScore > 0 ? stepIdx : 0;
    }
  }

  if (!bestPath) return null;
  return { pathId: bestPath.id, stepIdx: bestStepIdx, subject: bestPath.subject, kwHits: bestKwHits };
}

async function main() {
  // Leerpaden laden (F28, 2 sep 2026): index.js importeert .jsx-paden en de
  // Supabase-client (import.meta.env) — kale Node kan dat niet. Daarom eerst
  // bundelen met esbuild (zit al in node_modules via Vite) naar tmp/.
  const esbuild = await import("esbuild");
  const bundlePath = path.join(ROOT, "tmp", "paths-bundle.mjs");
  await fs.mkdir(path.dirname(bundlePath), { recursive: true });
  await esbuild.build({
    entryPoints: [path.join(ROOT, "src", "learnPaths", "index.js")],
    bundle: true, format: "esm", platform: "node", outfile: bundlePath, logLevel: "error",
    loader: { ".jsx": "jsx", ".json": "json", ".svg": "text", ".png": "dataurl", ".jpg": "dataurl", ".webp": "dataurl" },
    define: { "import.meta.env": JSON.stringify({ VITE_SUPABASE_URL: "http://localhost", VITE_SUPABASE_ANON_KEY: "x", MODE: "script", DEV: false, PROD: true }) },
  });
  const learnPathsModule = await import(pathToFileURL(bundlePath).href);
  const ALL = learnPathsModule.ALL_LEARN_PATHS;
  const allPaths = Object.values(ALL);

  // Vragen: sinds de split staan ze in src/data/ (constants.js bestaat niet meer)
  const sampleModule = await import(pathToFileURL(path.join(ROOT, "src", "data", "sampleQuestions.js")).href);
  const topicModule = await import(pathToFileURL(path.join(ROOT, "src", "data", "topics.js")).href);
  const SAMPLE = sampleModule.SAMPLE_QUESTIONS || {};
  const TOPIC = topicModule.TOPIC_QUESTIONS || {};

  const questionMap = {};        // q-text → { pathId, stepIdx }
  const stats = {                 // per (vak) statistieken
    perCategory: {},              // { wiskunde: { total, matched }, ... }
    perPath: {},                  // { pathId: matchCount }
    untaggedSamples: {},          // { vak: [eerste 5 ongetagde vragen] }
  };

  // Doorloop SAMPLE_QUESTIONS = { vak: { level: [vragen] } } óf { vak: [vragen] }
  for (const [vak, levelOrList] of Object.entries(SAMPLE)) {
    const allowed = categoryToSubjects(vak);
    const candidates = allowed.length > 0
      ? allPaths.filter((p) => allowed.includes(p.subject))
      : [];

    const lists = Array.isArray(levelOrList)
      ? [["_root", levelOrList]]
      : Object.entries(levelOrList).filter(([, v]) => Array.isArray(v));

    for (const [levelKey, qs] of lists) {
      // Niveau-filter: groep-7-vragen alleen tegen PO-paden, klas-2 tegen onderbouw, enz.
      const levelCandidates = candidates.filter((p) => levelsCompatible(levelKey, p.level));
      for (const q of qs) {
        if (!q || typeof q.q !== "string") continue;
        stats.perCategory[vak] = stats.perCategory[vak] || { total: 0, matched: 0 };
        stats.perCategory[vak].total++;

        if (levelCandidates.length === 0) {
          if (!stats.untaggedSamples[vak]) stats.untaggedSamples[vak] = [];
          if (stats.untaggedSamples[vak].length < 5) stats.untaggedSamples[vak].push(q.q);
          continue;
        }

        const match = findBest(q.q, q.explanation, levelCandidates);
        if (match) {
          questionMap[q.q] = { pathId: match.pathId, stepIdx: match.stepIdx };
          stats.perCategory[vak].matched++;
          stats.perPath[match.pathId] = (stats.perPath[match.pathId] || 0) + 1;
        } else {
          if (!stats.untaggedSamples[vak]) stats.untaggedSamples[vak] = [];
          if (stats.untaggedSamples[vak].length < 5) stats.untaggedSamples[vak].push(q.q);
        }
      }
    }
  }

  // TOPIC_QUESTIONS — vrije onderwerpen, geen vakcontext bekend.
  // We proberen alle paden als kandidaat, maar tellen ze apart.
  const topicStats = { total: 0, matched: 0 };
  for (const [topicName, qs] of Object.entries(TOPIC)) {
    if (!Array.isArray(qs)) continue;
    for (const q of qs) {
      if (!q || typeof q.q !== "string") continue;
      topicStats.total++;
      // Niveau uit de topic-naam ("cito rekenen groep8" → alleen PO-paden);
      // onbekend niveau → minstens 2 keyword-hits om ruis te vermijden.
      const bucket = bucketFromTopicName(topicName);
      const cands = bucket ? allPaths.filter((p) => levelsCompatible(bucket, p.level)) : allPaths;
      const match = findBest(q.q, q.explanation, cands);
      if (match && (bucket || match.kwHits >= 2)) {
        questionMap[q.q] = { pathId: match.pathId, stepIdx: match.stepIdx };
        topicStats.matched++;
        stats.perPath[match.pathId] = (stats.perPath[match.pathId] || 0) + 1;
      }
    }
  }

  // Schrijf de gegenereerde map
  const header = `// AUTO-GENERATED door scripts/match-questions-to-paths.mjs — niet handmatig bewerken.\n` +
                 `// Mapt vraag-tekst → { pathId, stepIdx } voor exact-lookup in findLearnPathForQuestion.\n` +
                 `// Run het script opnieuw na nieuwe paden of nieuwe vragen.\n\n`;
  const body = "export const QUESTION_PATH_MAP = " + JSON.stringify(questionMap, null, 2) + ";\n";
  await fs.writeFile(OUT_PATH, header + body, "utf8");

  // Print rapport
  console.log("\n📊 RAPPORT — vragen → leerpaden matching\n");
  console.log("─".repeat(60));
  console.log("Per vak (categorie in SAMPLE_QUESTIONS):");
  console.log("─".repeat(60));
  const sortedCats = Object.entries(stats.perCategory).sort((a, b) => b[1].total - a[1].total);
  for (const [vak, s] of sortedCats) {
    const pct = s.total ? Math.round((s.matched / s.total) * 100) : 0;
    const bar = "█".repeat(Math.round(pct / 5)).padEnd(20, "░");
    console.log(`${vak.padEnd(22)} ${bar} ${s.matched}/${s.total} (${pct}%)`);
  }
  if (topicStats.total > 0) {
    const pct = Math.round((topicStats.matched / topicStats.total) * 100);
    console.log(`${"(TOPIC_QUESTIONS)".padEnd(22)} ${"█".repeat(Math.round(pct / 5)).padEnd(20, "░")} ${topicStats.matched}/${topicStats.total} (${pct}%)`);
  }

  console.log("\n" + "─".repeat(60));
  console.log("Top paden (welke krijgen de meeste vragen):");
  console.log("─".repeat(60));
  const sortedPaths = Object.entries(stats.perPath).sort((a, b) => b[1] - a[1]).slice(0, 15);
  for (const [pathId, n] of sortedPaths) {
    console.log(`  ${pathId.padEnd(36)} ${n}`);
  }

  console.log("\n" + "─".repeat(60));
  console.log("⚠️  GATEN — vakken met veel ongetagde vragen (eerste 5 voorbeelden):");
  console.log("─".repeat(60));
  const gatenSorted = sortedCats
    .map(([vak, s]) => ({ vak, missed: s.total - s.matched, total: s.total }))
    .filter((x) => x.missed > 0 && x.total >= 5)
    .sort((a, b) => b.missed - a.missed)
    .slice(0, 12);
  for (const g of gatenSorted) {
    console.log(`\n${g.vak} — ${g.missed} ongetagde vragen (van ${g.total}):`);
    const samples = stats.untaggedSamples[g.vak] || [];
    for (const s of samples) {
      const trunc = s.length > 80 ? s.slice(0, 78) + "…" : s;
      console.log(`  · ${trunc}`);
    }
  }

  const totalQ = sortedCats.reduce((s, [, c]) => s + c.total, 0) + topicStats.total;
  const totalMatched = sortedCats.reduce((s, [, c]) => s + c.matched, 0) + topicStats.matched;
  console.log("\n" + "═".repeat(60));
  console.log(`TOTAAL: ${totalMatched}/${totalQ} (${Math.round(totalMatched / totalQ * 100)}%) vragen getagd`);
  console.log(`Output: ${OUT_PATH}`);
  console.log("═".repeat(60) + "\n");
}

main().catch((e) => {
  console.error("Fout:", e);
  process.exit(1);
});
