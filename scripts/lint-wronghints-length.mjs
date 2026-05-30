#!/usr/bin/env node
// lint-wronghints-length.mjs — detecteer wrongHints met length != options.length.
//
// Indexen mappen 1-op-1 op options. Een mismatch betekent dat een hint bij de
// verkeerde optie hoort (shift-bug) of dat er een verweesde hint is — kan het
// juiste antwoord weggeven. Dit vult de "Klopt"-detector aan met de algemene
// lengte-mismatch (bv. 4 opties / 5 hints).
//
// Run: node scripts/lint-wronghints-length.mjs
import fs from "fs";
import path from "path";
import url from "url";

const ROOT = path.resolve(process.cwd(), "src/learnPaths");
const SKIP = /(\.test\.|index\.js|examenLookup|pathLoaders|subjectMapping|\.generated\.|utils\.js|examPathPicker|^index)/;

function* iterChecks(node) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) { for (const x of node) yield* iterChecks(x); return; }
  // Een "check" heeft options + (meestal) answer
  if (Array.isArray(node.options)) yield node;
  for (const v of Object.values(node)) {
    if (v && typeof v === "object") yield* iterChecks(v);
  }
}

const files = fs.readdirSync(ROOT).filter(f => /\.js$/.test(f) && !SKIP.test(f));
let totalChecks = 0, mismatches = [];

for (const f of files) {
  let mod;
  try {
    mod = await import(url.pathToFileURL(path.join(ROOT, f)).href);
  } catch (e) {
    console.error(`!! import fail ${f}: ${e.message}`);
    continue;
  }
  const data = mod.default || Object.values(mod)[0];
  for (const c of iterChecks(data)) {
    totalChecks++;
    if (!Array.isArray(c.wrongHints)) continue;
    if (c.wrongHints.length === 0) continue;
    if (c.wrongHints.length !== c.options.length) {
      mismatches.push({
        file: f,
        q: (c.q || c.question || "?").slice(0, 60),
        opts: c.options.length,
        hints: c.wrongHints.length,
      });
    }
  }
}

console.log(`Gescand: ${totalChecks} checks in ${files.length} files`);
console.log(`Mismatches (wrongHints.length != options.length): ${mismatches.length}\n`);
const byFile = {};
for (const m of mismatches) (byFile[m.file] ??= []).push(m);
for (const [file, list] of Object.entries(byFile).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`--- ${file} (${list.length}) ---`);
  for (const m of list) console.log(`  ${m.opts} opts / ${m.hints} hints  "${m.q}"`);
}
