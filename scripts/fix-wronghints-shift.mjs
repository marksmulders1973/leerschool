#!/usr/bin/env node
// fix-wronghints-shift.mjs — Sprint-0 auto-fix (Mark 2026-05-14).
//
// Probleem: 3227 checks hebben wrongHints met length = options.length+1,
// waarbij wrongHints[0]=null en wrongHints[1] begint met "Klopt".
// Dat is een shift-bug: ooit was wrongHints[0] de "Klopt"-uitleg voor
// het correcte antwoord. Iemand prepend later `null` zodat array niet
// 0-based was → alle indices verschoven 1 → leerling klikt op fout
// antwoord en krijgt "Klopt" als feedback.
//
// Fix-strategie:
//   1. Detecteer: Array(length=options.length+1) AND first non-null begint met "Klopt"
//   2. Verwijder de "Klopt"-hint
//   3. Truncate naar options.length
//   4. Set wrongHints[answer]=null
//
// Regex matcht compact-format: wrongHints: [null, "Klopt — ...", "...", ...]
//
// Run: node scripts/fix-wronghints-shift.mjs [--dry-run]

import fs from "fs";
import path from "path";

const ROOT = path.resolve(process.cwd(), "src/learnPaths");
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");

const SKIP = new Set([
  "index.js", "index.test.js", "examenLookup.js", "pathLoaders.js",
  "subjectMapping.js", "subjectMapping.test.js", "questionPathMap.generated.js",
]);

// Parse een check-line met regex. We zoeken naar:
//   options: [...], answer: N, wrongHints: [null, "Klopt...", ...]
// op één regel (compact format).
// Doel: detect + reschrijf wrongHints zonder strings te kapotmaken.

// Pak een string-array uit JS source — simple parser die quote-types
// respecteert. Geeft array van { raw, val } terug, of null als parse-fail.
function parseStringArray(src, startIdx) {
  if (src[startIdx] !== "[") return null;
  const items = [];
  let i = startIdx + 1;
  while (i < src.length) {
    // Skip whitespace + commas
    while (i < src.length && /[\s,]/.test(src[i])) i++;
    if (src[i] === "]") return { items, endIdx: i };
    // null
    if (src.slice(i, i + 4) === "null") {
      items.push({ raw: "null", val: null, isNull: true });
      i += 4;
      continue;
    }
    // String "..." of '...'
    const quote = src[i];
    if (quote !== '"' && quote !== "'") return null;
    let j = i + 1;
    let escaped = false;
    while (j < src.length) {
      if (escaped) { escaped = false; j++; continue; }
      if (src[j] === "\\") { escaped = true; j++; continue; }
      if (src[j] === quote) break;
      j++;
    }
    if (j >= src.length) return null;
    const raw = src.slice(i, j + 1);
    const val = src.slice(i + 1, j).replace(/\\(.)/g, "$1");
    items.push({ raw, val });
    i = j + 1;
  }
  return null;
}

function processFile(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  let out = "";
  let cursor = 0;
  let fixed = 0;

  // Zoek naar "wrongHints: ["
  const re = /wrongHints:\s*\[/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const arrStart = m.index + m[0].length - 1;
    const parsed = parseStringArray(src, arrStart);
    if (!parsed) continue;
    const { items, endIdx } = parsed;
    if (items.length < 2) continue;
    if (!items[0].isNull) continue;
    if (!items[1].isNull && /^\s*klopt\b/i.test(items[1].val || "")) {
      // Shift-bug: verwijder items[1] (de "Klopt") + truncate.
      // Bewaar items[0] (=null voor answer-index 0) + skip items[1] + items[2..].
      // Eind: array van options.length elementen, wrongHints[answer]=null.
      // We assumen answer=0 (uit audit-data 99% van gevallen). Voor robuust:
      // detecteer answer-veld vóór wrongHints in dezelfde check-statement.

      // Zoek answer-waarde in laatste 200 chars vóór wrongHints
      const lookback = src.slice(Math.max(0, m.index - 300), m.index);
      const answerMatch = lookback.match(/answer:\s*(\d+)/);
      const answer = answerMatch ? Number(answerMatch[1]) : 0;

      // Zoek options-array lengte
      const optionsMatch = lookback.match(/options:\s*\[([^\]]*)\]/);
      let optsLen = null;
      if (optionsMatch) {
        // Tel commas op het top-level (geen escape).
        // Simpel: tel ","-tekens buiten quotes.
        const optsInner = optionsMatch[1];
        let count = 1;
        let inStr = false;
        let qc = null;
        let esc = false;
        for (const ch of optsInner) {
          if (esc) { esc = false; continue; }
          if (ch === "\\") { esc = true; continue; }
          if (inStr) {
            if (ch === qc) inStr = false;
          } else {
            if (ch === '"' || ch === "'") { inStr = true; qc = ch; }
            else if (ch === ",") count++;
          }
        }
        optsLen = count;
      }

      if (!optsLen || items.length !== optsLen + 1) continue;

      // Bouw nieuw array: skip items[1] (de "Klopt"), set wrongHints[answer]=null
      const newHints = items.slice(1); // verwijder originele leading null
      newHints[0] = { raw: "null", val: null, isNull: true }; // de oude items[1] wordt null
      // Maar wacht — items[0] was al null, items[1] was Klopt. We willen:
      //   newHints = [items[2], items[3], items[4], ...]  // alle non-null shifted
      //   newHints[answer] = null
      const shifted = items.slice(2); // drop oude null + drop Klopt
      // Nu inserts null op answer-positie
      const final = [];
      for (let i = 0; i < optsLen; i++) {
        if (i === answer) {
          final.push({ raw: "null", val: null, isNull: true });
        } else {
          // Map: voor i < answer → shifted[i], voor i > answer → shifted[i-1]
          const srcIdx = i < answer ? i : i - 1;
          final.push(shifted[srcIdx] || { raw: '""', val: "" });
        }
      }

      const newArrStr = "[" + final.map(it => it.raw).join(", ") + "]";
      out += src.slice(cursor, arrStart) + newArrStr;
      cursor = endIdx + 1;
      fixed++;
    }
  }
  out += src.slice(cursor);

  if (fixed > 0 && !dryRun) {
    fs.writeFileSync(filePath, out, "utf8");
  }
  return fixed;
}

function main() {
  const files = fs.readdirSync(ROOT).filter(
    (f) => f.endsWith(".js") && !SKIP.has(f) && !f.includes(".test.")
  );
  let grandTotal = 0;
  const perFile = [];
  for (const file of files) {
    const fixed = processFile(path.join(ROOT, file));
    if (fixed > 0) {
      perFile.push({ file, fixed });
      grandTotal += fixed;
    }
  }
  perFile.sort((a, b) => b.fixed - a.fixed);
  console.log(`${dryRun ? "[DRY-RUN] " : ""}Total ${grandTotal} wrongHints-shifts ${dryRun ? "zouden worden" : ""}gefixt`);
  console.log(`In ${perFile.length} bestanden:`);
  perFile.slice(0, 20).forEach(({ file, fixed }) => {
    console.log(`  ${fixed.toString().padStart(3)} × ${file}`);
  });
  if (perFile.length > 20) console.log(`  …en ${perFile.length - 20} andere`);
}

main();
