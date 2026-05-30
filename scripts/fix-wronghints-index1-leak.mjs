#!/usr/bin/env node
// fix-wronghints-index1-leak.mjs — verwijdert een verweesde/leak-hint op index 1.
//
// Patroon (geverifieerd in 3 Engels-tense/woordenschat-files 2026-05-30):
//   wrongHints.length === options.length + 1, wrongHints[0] === null, en
//   wrongHints[1] bevestigt/verklaart het juiste antwoord. De shuffle
//   (shuffleOptions.js) leest hints[0..options-1], dus index 1 lekt naar de
//   eerste foute optie. Fix: verwijder index 1 zodat [2..] correct uitlijnen.
//
// SCOPED: draait alleen op de bestanden in process.argv (geen globale sweep),
// want het patroon is alleen voor die files met de hand bevestigd.
//
// Run: node scripts/fix-wronghints-index1-leak.mjs <file1.js> <file2.js> ... [--dry-run]
import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const files = args.filter((a) => a !== "--dry-run");

function parseStringArray(src, startIdx) {
  if (src[startIdx] !== "[") return null;
  const items = [];
  let i = startIdx + 1;
  while (i < src.length) {
    while (i < src.length && /[\s,]/.test(src[i])) i++;
    if (src[i] === "]") return { items, endIdx: i };
    if (src.slice(i, i + 4) === "null") { items.push({ raw: "null", isNull: true }); i += 4; continue; }
    const quote = src[i];
    if (quote !== '"' && quote !== "'") return null;
    let j = i + 1, escaped = false;
    while (j < src.length) {
      if (escaped) { escaped = false; j++; continue; }
      if (src[j] === "\\") { escaped = true; j++; continue; }
      if (src[j] === quote) break;
      j++;
    }
    if (j >= src.length) return null;
    items.push({ raw: src.slice(i, j + 1) });
    i = j + 1;
  }
  return null;
}

function countOptions(optsInner) {
  let count = 1, inStr = false, qc = null, esc = false;
  for (const ch of optsInner) {
    if (esc) { esc = false; continue; }
    if (ch === "\\") { esc = true; continue; }
    if (inStr) { if (ch === qc) inStr = false; }
    else { if (ch === '"' || ch === "'") { inStr = true; qc = ch; } else if (ch === ",") count++; }
  }
  return count;
}

let grand = 0;
for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  let out = "", cursor = 0, fixed = 0;
  const re = /wrongHints:\s*\[/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const arrStart = m.index + m[0].length - 1;
    const parsed = parseStringArray(src, arrStart);
    if (!parsed) continue;
    const { items, endIdx } = parsed;
    if (items.length < 3 || !items[0].isNull) continue;
    const lookback = src.slice(Math.max(0, m.index - 600), m.index);
    const optionsMatch = lookback.match(/options:\s*\[([^\]]*)\]/);
    if (!optionsMatch) continue;
    const optsLen = countOptions(optionsMatch[1]);
    if (items.length !== optsLen + 1) continue;
    // verwijder index 1, behoud index 0 (null) + index 2..
    const kept = [items[0], ...items.slice(2)];
    const newArr = "[" + kept.map((it) => it.raw).join(", ") + "]";
    out += src.slice(cursor, arrStart) + newArr;
    cursor = endIdx + 1;
    fixed++;
  }
  out += src.slice(cursor);
  if (fixed && !dryRun) fs.writeFileSync(file, out, "utf8");
  console.log(`${dryRun ? "[DRY] " : ""}${path.basename(file)}: ${fixed} gefixt`);
  grand += fixed;
}
console.log(`Totaal: ${grand}`);
