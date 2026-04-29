#!/usr/bin/env node
/**
 * migrate-questions-to-supabase.mjs
 * --------------------------------------------------------------------
 * Eénmalige migratie: SAMPLE_QUESTIONS + TOPIC_QUESTIONS uit
 * src/constants.js → SQL INSERT-statements voor public.questions.
 *
 * Output: scripts/questions-insert.sql — 1 multi-row INSERT per ~500 vragen.
 *
 * Path-id wordt automatisch meegestuurd via QUESTION_PATH_MAP zodat de
 * mastery-pipeline meteen werkt na migratie.
 *
 * Gebruik (bash):
 *   node scripts/migrate-questions-to-supabase.mjs
 *
 * Daarna:
 *   1. Open Supabase dashboard → SQL Editor
 *      https://supabase.com/dashboard/project/uxqnzrymyjbcpuzqktdm/sql/new
 *   2. Plak inhoud van scripts/questions-insert.sql
 *   3. Run. Verwacht: ~3625 rows inserted.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_PATH = path.join(ROOT, "scripts", "questions-insert.sql");
const BATCH_SIZE = 500;

function sqlEscape(value) {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "number") return String(value);
  if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
  // Strings + arrays → JSON-encode + escape de quotes
  const str = typeof value === "string" ? value : JSON.stringify(value);
  return "'" + str.replace(/'/g, "''") + "'";
}

function rowToValues(row) {
  return (
    "(" +
    [
      sqlEscape(row.subject),
      sqlEscape(row.level),
      sqlEscape(row.topic_key),
      sqlEscape(row.q),
      "'" + JSON.stringify(row.options).replace(/'/g, "''") + "'::jsonb",
      sqlEscape(row.answer),
      sqlEscape(row.explanation),
      sqlEscape(row.svg),
      sqlEscape(row.source),
      sqlEscape(row.path_id),
      sqlEscape(row.step_idx),
      sqlEscape(row.image_in_explanation),
      sqlEscape(row.question_source),
    ].join(", ") +
    ")"
  );
}

async function main() {
  console.log("📦 OBLITERATOR-script geüpdatet: questions migration");
  console.log("Reading src/constants.js + questionPathMap...");

  const constantsModule = await import(
    pathToFileURL(path.join(ROOT, "src", "constants.js")).href
  );
  const pathMapModule = await import(
    pathToFileURL(path.join(ROOT, "src", "learnPaths", "questionPathMap.generated.js")).href
  );
  const SAMPLE = constantsModule.SAMPLE_QUESTIONS || {};
  const TOPIC = constantsModule.TOPIC_QUESTIONS || {};
  const PATH_MAP = pathMapModule.QUESTION_PATH_MAP || {};

  const rows = [];

  // SAMPLE_QUESTIONS = { vak: { level: [vragen] } } óf { vak: [vragen] }
  for (const [subject, levelOrList] of Object.entries(SAMPLE)) {
    const lists = Array.isArray(levelOrList)
      ? [["_root", levelOrList]]
      : Object.entries(levelOrList).filter(([, v]) => Array.isArray(v));

    for (const [level, qs] of lists) {
      for (const q of qs) {
        if (!q || typeof q.q !== "string") continue;
        const tag = PATH_MAP[q.q] || null;
        rows.push({
          subject,
          level: level === "_root" ? null : level,
          topic_key: null,
          q: q.q,
          options: q.options || [],
          answer: q.answer ?? 0,
          explanation: q.explanation || null,
          svg: q.svg || null,
          source: "sample",
          path_id: tag?.pathId || null,
          step_idx: tag?.stepIdx ?? null,
          image_in_explanation: q.imageInExplanation || false,
          question_source: q.source || null,
        });
      }
    }
  }

  // TOPIC_QUESTIONS = { topic: [vragen] }
  for (const [topicKey, qs] of Object.entries(TOPIC)) {
    if (!Array.isArray(qs)) continue;
    for (const q of qs) {
      if (!q || typeof q.q !== "string") continue;
      const tag = PATH_MAP[q.q] || null;
      rows.push({
        subject: topicKey,
        level: null,
        topic_key: topicKey,
        q: q.q,
        options: q.options || [],
        answer: q.answer ?? 0,
        explanation: q.explanation || null,
        svg: q.svg || null,
        source: "topic",
        path_id: tag?.pathId || null,
        step_idx: tag?.stepIdx ?? null,
        image_in_explanation: q.imageInExplanation || false,
        question_source: q.source || null,
      });
    }
  }

  console.log(`Verzameld: ${rows.length} vragen.`);

  // Schrijf SQL — multi-row INSERTs in batches
  const sqlChunks = [];
  sqlChunks.push("-- AUTO-GENERATED door scripts/migrate-questions-to-supabase.mjs");
  sqlChunks.push(`-- Run dit op Supabase SQL Editor om ${rows.length} vragen te importeren.`);
  sqlChunks.push("-- Idempotent: TRUNCATE eerst zodat herhaalde runs geen duplicaten geven.");
  sqlChunks.push("");
  sqlChunks.push("BEGIN;");
  sqlChunks.push("TRUNCATE public.questions RESTART IDENTITY;");
  sqlChunks.push("");

  const cols =
    "(subject, level, topic_key, q, options, answer, explanation, svg, source, path_id, step_idx, image_in_explanation, question_source)";

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);
    sqlChunks.push(`INSERT INTO public.questions ${cols} VALUES`);
    sqlChunks.push(batch.map(rowToValues).join(",\n"));
    sqlChunks.push(";");
    sqlChunks.push("");
  }

  sqlChunks.push("COMMIT;");
  sqlChunks.push("");
  sqlChunks.push(`-- Totaal: ${rows.length} vragen`);

  const sql = sqlChunks.join("\n");
  await fs.writeFile(OUT_PATH, sql, "utf8");

  // Stats
  const bySubject = {};
  for (const r of rows) {
    bySubject[r.subject] = (bySubject[r.subject] || 0) + 1;
  }
  console.log("\nPer subject:");
  for (const [s, n] of Object.entries(bySubject).sort((a, b) => b[1] - a[1]).slice(0, 20)) {
    console.log(`  ${s.padEnd(24)} ${n}`);
  }

  const tagged = rows.filter((r) => r.path_id).length;
  console.log(`\n📌 ${tagged}/${rows.length} (${Math.round((tagged / rows.length) * 100)}%) vragen al gekoppeld aan een leerpad.`);
  console.log(`📄 Output: ${OUT_PATH}`);
  console.log(`💾 Grootte: ${(sql.length / 1024).toFixed(1)} KB`);
  console.log("");
  console.log("👉 Volgende stap:");
  console.log("   1. Open Supabase SQL Editor:");
  console.log("      https://supabase.com/dashboard/project/uxqnzrymyjbcpuzqktdm/sql/new");
  console.log("   2. Plak inhoud van scripts/questions-insert.sql");
  console.log("   3. Run (Ctrl+Enter). Duurt ~10 seconden.");
}

main().catch((e) => {
  console.error("Fout:", e);
  process.exit(1);
});
