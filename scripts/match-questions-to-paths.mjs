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
  rekenen: "wiskunde", // PO rekenen → wiskunde-paden
  nederlands: "taal",
  taal: "taal",
  spelling: "taal",
  "begrijpend-lezen": "taal",
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
      if (lower.includes(kw)) kwHits++;
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
  // Importeer leerpaden via dynamic import (ESM)
  const learnPathsModule = await import(pathToFileURL(path.join(ROOT, "src", "learnPaths", "index.js")).href);
  const ALL = learnPathsModule.ALL_LEARN_PATHS;
  const allPaths = Object.values(ALL);

  // Importeer constants.js (vragen)
  const constantsModule = await import(pathToFileURL(path.join(ROOT, "src", "constants.js")).href);
  const SAMPLE = constantsModule.SAMPLE_QUESTIONS || {};
  const TOPIC = constantsModule.TOPIC_QUESTIONS || {};

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

    for (const [, qs] of lists) {
      for (const q of qs) {
        if (!q || typeof q.q !== "string") continue;
        stats.perCategory[vak] = stats.perCategory[vak] || { total: 0, matched: 0 };
        stats.perCategory[vak].total++;

        if (candidates.length === 0) {
          if (!stats.untaggedSamples[vak]) stats.untaggedSamples[vak] = [];
          if (stats.untaggedSamples[vak].length < 5) stats.untaggedSamples[vak].push(q.q);
          continue;
        }

        const match = findBest(q.q, q.explanation, candidates);
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
      const match = findBest(q.q, q.explanation, allPaths);
      if (match) {
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
