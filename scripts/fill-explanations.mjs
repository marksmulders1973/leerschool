#!/usr/bin/env node
/**
 * fill-explanations.mjs
 * --------------------------------------------------------------------
 * Eénmalig batch-script dat alle vragen zonder `explanation:` veld in
 * src/constants.js doorloopt, een korte uitleg laat genereren door
 * Claude Haiku, en het resultaat in-place terugschrijft.
 *
 * Idempotent: regels die al een explanation hebben worden overgeslagen.
 * Tussentijds save: elke batch wordt direct naar disk geschreven, dus
 * een crash betekent hooguit een paar API-calls verloren.
 *
 * Gebruik (bash):
 *   ANTHROPIC_API_KEY=sk-ant-...  node scripts/fill-explanations.mjs
 *
 * Of (PowerShell):
 *   $env:ANTHROPIC_API_KEY="sk-ant-..."; node scripts/fill-explanations.mjs
 *
 * Optioneel: --dry-run laat zien welke regels zouden worden aangepast
 * zonder API-calls te doen of het bestand te wijzigen.
 *
 * --max=N  beperkt het aantal vragen dat verwerkt wordt deze run.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONSTANTS_PATH = path.resolve(__dirname, "..", "src", "constants.js");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const maxArg = args.find(a => a.startsWith("--max="));
const MAX = maxArg ? parseInt(maxArg.split("=")[1], 10) : Infinity;

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY && !dryRun) {
  console.error("❌ Geen ANTHROPIC_API_KEY gevonden in env-variabelen.");
  console.error("   Zet 'm via:");
  console.error("   bash      :  ANTHROPIC_API_KEY=sk-ant-...  node scripts/fill-explanations.mjs");
  console.error("   PowerShell:  $env:ANTHROPIC_API_KEY='sk-ant-...'; node scripts/fill-explanations.mjs");
  process.exit(1);
}

const MODEL = "claude-haiku-4-5-20251001";
const BATCH_SIZE = 5;          // parallelle API-calls per batch
const RETRY_LIMIT = 3;
const SAVE_EVERY = 1;          // elke X batches schrijven
const PAUSE_TUSSEN_BATCHES_MS = 250;

// regex om vraag-regels te vinden zonder explanation:
//   { q: "...", options: [...], answer: N }
//   { q: "...", options: [...], answer: N },
const QUESTION_LINE_RE = /^(\s*)\{\s*q:\s*("(?:[^"\\]|\\.)*")\s*,\s*options:\s*(\[[^\]]*\])\s*,\s*answer:\s*(\d+)\s*\}(,?)\s*$/;

function parseStringLiteral(literal) {
  // veilige conversie van een dubbel-geciteerde JS-string-literal naar JS-string
  // door 'm via JSON.parse te doen (we vertrouwen erop dat de literal alleen
  // standaard JS-string-escapes gebruikt — geen octal etc.)
  return JSON.parse(literal);
}

function parseOptionsArray(arr) {
  // arr is iets als `["a", "b", "c"]` — JSON-compatible meestal
  // soms staat er een trailing comma in JS — verwijder die
  const cleaned = arr.replace(/,(\s*])/g, "$1");
  return JSON.parse(cleaned);
}

async function generateExplanation({ q, options, answer }) {
  const goedAntwoord = options[answer] ?? "";
  const prompt = `Een leerling heeft deze meerkeuzevraag fout. Geef een korte, vriendelijke uitleg in het Nederlands waarom het juiste antwoord klopt.

VRAAG: ${q}
OPTIES: ${options.map((o, i) => `${i === answer ? "✓" : "·"} ${o}`).join("  ")}
JUISTE ANTWOORD: ${goedAntwoord}

Schrijf MAX 2 zinnen, totaal max 220 karakters. Begin direct met de uitleg, geen "Het juiste antwoord is..." of "Goed gedaan!". Geef de redenering die de leerling helpt om het de volgende keer wel te onthouden.`;

  for (let poging = 1; poging <= RETRY_LIMIT; poging++) {
    try {
      const resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 250,
          temperature: 0.3,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      if (!resp.ok) {
        const txt = await resp.text();
        throw new Error(`API ${resp.status}: ${txt.slice(0, 200)}`);
      }
      const data = await resp.json();
      let tekst = data?.content?.[0]?.text?.trim() || "";
      // veiligheidsmaatregel: trim te lange resultaten
      if (tekst.length > 280) tekst = tekst.slice(0, 277) + "…";
      // single-line maken — Studiebol toont met whiteSpace pre-line maar voor
      // hardcoded JS-literal blijven we op één regel om de file netjes te houden
      tekst = tekst.replace(/\s+/g, " ").trim();
      return tekst;
    } catch (e) {
      console.warn(`   ⚠️  poging ${poging}/${RETRY_LIMIT} faalde: ${e.message}`);
      if (poging === RETRY_LIMIT) throw e;
      await new Promise(r => setTimeout(r, 500 * poging));
    }
  }
}

async function main() {
  console.log(`📂 Lees ${CONSTANTS_PATH}`);
  const text = await fs.readFile(CONSTANTS_PATH, "utf8");
  const lines = text.split(/\r?\n/);

  // verzamel targets
  const targets = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!QUESTION_LINE_RE.test(line)) continue;
    if (/explanation:/.test(line)) continue;
    targets.push(i);
    if (targets.length >= MAX) break;
  }

  console.log(`🎯 ${targets.length} vragen zonder uitleg gevonden${MAX !== Infinity ? ` (limiet: ${MAX})` : ""}`);
  if (dryRun) {
    console.log("(--dry-run) eerste 5 voorbeelden:");
    targets.slice(0, 5).forEach(i => console.log("   ·", lines[i].trim().slice(0, 100)));
    return;
  }
  if (targets.length === 0) {
    console.log("✅ Niets te doen.");
    return;
  }

  let verwerkt = 0, gefaald = 0, batchTeller = 0;
  const startTijd = Date.now();

  for (let i = 0; i < targets.length; i += BATCH_SIZE) {
    const batch = targets.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(async (lineIdx) => {
      const line = lines[lineIdx];
      const m = line.match(QUESTION_LINE_RE);
      if (!m) return;
      const indent = m[1];
      const qLit = m[2];
      const optsRaw = m[3];
      const ansRaw = m[4];
      const trailingComma = m[5];
      let q, options, answer;
      try {
        q = parseStringLiteral(qLit);
        options = parseOptionsArray(optsRaw);
        answer = parseInt(ansRaw, 10);
      } catch (e) {
        console.warn(`   ⚠️  parse-fout regel ${lineIdx + 1}: ${e.message}`);
        gefaald++;
        return;
      }
      try {
        const expl = await generateExplanation({ q, options, answer });
        const explLit = JSON.stringify(expl); // veilige JS-string-literal
        const newLine = `${indent}{ q: ${qLit}, options: ${optsRaw}, answer: ${ansRaw}, explanation: ${explLit} }${trailingComma}`;
        lines[lineIdx] = newLine;
        verwerkt++;
      } catch (e) {
        console.warn(`   ⚠️  AI-fout regel ${lineIdx + 1}: ${e.message}`);
        gefaald++;
      }
    }));

    batchTeller++;
    const totaal = i + batch.length;
    const eta = ((Date.now() - startTijd) / verwerkt) * (targets.length - verwerkt) / 1000;
    console.log(`   ✓ batch ${batchTeller}: ${verwerkt}/${targets.length} klaar${gefaald ? ` (${gefaald} fouten)` : ""}${verwerkt > 0 && totaal < targets.length ? `  (~${Math.round(eta)}s eta)` : ""}`);

    if (batchTeller % SAVE_EVERY === 0) {
      await fs.writeFile(CONSTANTS_PATH, lines.join("\n"));
    }

    if (totaal < targets.length) {
      await new Promise(r => setTimeout(r, PAUSE_TUSSEN_BATCHES_MS));
    }
  }

  // final save
  await fs.writeFile(CONSTANTS_PATH, lines.join("\n"));
  const duur = Math.round((Date.now() - startTijd) / 1000);
  console.log(`\n✅ Klaar! ${verwerkt} explanations toegevoegd${gefaald ? `, ${gefaald} mislukt` : ""} in ${duur}s`);
  if (gefaald > 0) {
    console.log("   (run het script opnieuw om mislukte vragen opnieuw te proberen)");
  }
}

main().catch((e) => {
  console.error("\n❌ Fataal:", e.message);
  process.exit(1);
});
