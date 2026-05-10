#!/usr/bin/env node
// scripts/auditKennisgraaf.mjs
//
// Audit van de kennis-graaf (examen → voorkennis-keten → leerpad).
// Rapporteert:
//   - examen-paden zonder `voorkennisKeten` per check (Fase 1 te-doen)
//   - leerpadLink targets die niet als bestand bestaan (kapotte loop)
//   - leerpaden zonder `prerequisites` veld (Fase 1 te-doen)
//   - leerpaden waar examen-vragen op leunen (uitlegPad-prio)
//
// Run: node scripts/auditKennisgraaf.mjs
// Run met --verbose voor extra detail.

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const PATHS_DIR = join(process.cwd(), "src", "learnPaths");
const VERBOSE = process.argv.includes("--verbose");
const SKIP_FILES = new Set([
  "index.js",
  "index.test.js",
  "subjectMapping.js",
  "subjectMapping.test.js",
  "examenLookup.js",
]);

// ─── Lezen ─────────────────────────────────────────────

const files = readdirSync(PATHS_DIR)
  .filter((f) => f.endsWith(".js") && !SKIP_FILES.has(f));

const paths = {};
for (const f of files) {
  const content = readFileSync(join(PATHS_DIR, f), "utf8");
  // Pak alleen het top-level pad-id: zoek naar `const X = { id: "..." ... export default X`
  // of fallback naar laatste id-match (root-object id staat onderaan in file).
  const allIdMatches = [...content.matchAll(/(?:^|\n)\s*id:\s*["']([^"']+)["']/g)];
  // Het laatste id-match is meestal het root-object (anders zou export niet kloppen).
  // Bij onzekerheid: filename-fallback.
  let id = f.replace(/\.js$/, "");
  if (allIdMatches.length > 0) {
    // Zoek match die past bij filename-stijl (kebab-case of bevat dezelfde letters)
    const exportNameMatch = content.match(/export default (\w+)/);
    if (exportNameMatch) {
      // Pak het id-match dat hoort bij de root-export (laatste in bestand)
      id = allIdMatches[allIdMatches.length - 1][1];
    }
  }
  const titleMatch = content.match(/(?:^|\n)\s*title:\s*["']([^"']+)["']/);
  const subjectMatch = content.match(/subject:\s*["']([^"']+)["']/);
  // isExamen: filename-based (examenXxx.js) is robuuster dan id-prefix
  const isExamen = f.startsWith("examen") && f !== "examenLookup.js";
  paths[id] = {
    file: f,
    id,
    title: titleMatch ? titleMatch[1] : id,
    subject: subjectMatch ? subjectMatch[1] : "?",
    isExamen,
    content,
  };
}

// ─── Extracten ─────────────────────────────────────────

const examLinks = []; // { examFile, examId, targetId, vraagBron }
const allTargetIds = new Set();
const pathsZonderPrereq = [];
const pathsZonderUitlegPad = [];
const examChecksZonderVoorkennis = [];

for (const p of Object.values(paths)) {
  // Tel leerpadLink targets in examen-paden
  if (p.isExamen) {
    const linkMatches = [...p.content.matchAll(/leerpadLink:\s*\{\s*id:\s*["']([^"']+)["']/g)];
    for (const m of linkMatches) {
      examLinks.push({ examId: p.id, targetId: m[1] });
      allTargetIds.add(m[1]);
    }
    // Per check checken of voorkennisKeten aanwezig
    const checkBlocks = p.content.split(/\bchecks:\s*\[/);
    const totalChecks = (p.content.match(/\bq:\s*["`']/g) || []).length;
    const totalVoorkennis = (p.content.match(/voorkennisKeten:/g) || []).length;
    if (totalChecks > totalVoorkennis) {
      examChecksZonderVoorkennis.push({
        id: p.id,
        title: p.title,
        ontbrekend: totalChecks - totalVoorkennis,
        totaal: totalChecks,
      });
    }
  } else {
    // Niet-examen paden: check prerequisites
    if (!p.content.includes("prerequisites:")) {
      pathsZonderPrereq.push({ id: p.id, title: p.title, subject: p.subject });
    }
    if (!p.content.includes("uitlegPad:")) {
      pathsZonderUitlegPad.push({ id: p.id, title: p.title, subject: p.subject });
    }
  }
}

// ─── Broken links ──────────────────────────────────────

const brokenLinks = examLinks.filter((l) => !paths[l.targetId]);
const linkCount = {};
for (const l of examLinks) {
  linkCount[l.targetId] = (linkCount[l.targetId] || 0) + 1;
}

// Paden die door examens worden geraakt — uitlegPad-prio
const examReferencedPaths = Object.keys(linkCount)
  .filter((id) => paths[id]) // alleen bestaande
  .map((id) => ({ id, count: linkCount[id], title: paths[id].title }))
  .sort((a, b) => b.count - a.count);

const examReferencedZonderUitlegPad = examReferencedPaths
  .filter((r) => !paths[r.id].content.includes("uitlegPad:"));

// ─── Rapport ───────────────────────────────────────────

console.log("\n=== Kennisgraaf-audit ===\n");

console.log(`Totaal leerpaden: ${Object.values(paths).filter((p) => !p.isExamen).length}`);
console.log(`Totaal examen-paden: ${Object.values(paths).filter((p) => p.isExamen).length}`);
console.log(`Totaal leerpadLink-verwijzingen: ${examLinks.length}`);
console.log(`Unieke targets: ${allTargetIds.size}`);

// 1. Broken links
console.log(`\n--- Broken leerpadLinks (kapotte loop): ${brokenLinks.length} ---`);
if (brokenLinks.length > 0) {
  for (const b of brokenLinks) {
    console.log(`  ${b.examId} → ${b.targetId} (BESTAAT NIET)`);
  }
} else {
  console.log("  ✓ Geen broken links.");
}

// 2. Examen-checks zonder voorkennisKeten (Fase 1)
console.log(`\n--- Examen-checks zonder voorkennisKeten: ${examChecksZonderVoorkennis.length} paden ---`);
const totaalOntbreekt = examChecksZonderVoorkennis.reduce((s, e) => s + e.ontbrekend, 0);
console.log(`  Totaal ontbrekende voorkennisKeten-velden: ${totaalOntbreekt}`);
if (VERBOSE) {
  for (const e of examChecksZonderVoorkennis) {
    console.log(`  ${e.id}: ${e.ontbrekend}/${e.totaal} checks zonder voorkennisKeten`);
  }
}

// 3. Leerpaden zonder prerequisites (Fase 1)
console.log(`\n--- Leerpaden zonder prerequisites: ${pathsZonderPrereq.length} ---`);
if (VERBOSE) {
  const bySubject = {};
  for (const p of pathsZonderPrereq) {
    bySubject[p.subject] = (bySubject[p.subject] || 0) + 1;
  }
  for (const [s, n] of Object.entries(bySubject).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${s}: ${n}`);
  }
}

// 4. Top examen-referenced paden zonder uitlegPad (uitlegPad-prio!)
console.log(`\n--- Examen-referenced paden ZONDER uitlegPad: ${examReferencedZonderUitlegPad.length} ---`);
console.log("  (deze hebben examenvragen die ernaar linken — uitlegPad PRIORITEIT!)");
for (const r of examReferencedZonderUitlegPad.slice(0, 15)) {
  console.log(`  ${r.id} (${r.count} examen-ref) — ${r.title}`);
}

// 5. Top examen-referenced paden mét uitlegPad
console.log(`\n--- Top 10 meest-referenced paden (met examen-link) ---`);
for (const r of examReferencedPaths.slice(0, 10)) {
  const heeft = paths[r.id].content.includes("uitlegPad:") ? "✓ uitlegPad" : "✗ uitlegPad";
  const heeftPrereq = paths[r.id].content.includes("prerequisites:") ? "✓ prereq" : "✗ prereq";
  console.log(`  ${r.id} (${r.count}×) — ${heeft} — ${heeftPrereq}`);
}

console.log("\n=== Einde audit ===\n");

// Exit-code: 1 als kapotte loops, anders 0
process.exit(brokenLinks.length > 0 ? 1 : 0);
