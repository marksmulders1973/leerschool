#!/usr/bin/env node
// buildPathManifest.mjs — genereert src/learnPaths/pathManifest.generated.json
//
// Doel (Mark 2026-05-14, QW7 lazy-load STAP 2): leverancier van metadata-only
// pad-info zodat StudentHome/LearnPathsHub niet meer ALL_LEARN_PATHS hoeven te
// importeren (5,8 MB). Het manifest is ~50 kB en bevat alleen wat consumers
// nodig hebben om tegels/vakken/counts te renderen.
//
// Pad-info per entry: { id, title, subject, level, emoji, referentieNiveau,
//   sloThema, triggerKeywords, intro, stepCount, checkCount }
//
// Run: `node scripts/buildPathManifest.mjs` (of automatisch in vite-build via
// een pre-build hook — voor nu handmatig vóór elke commit).

import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const ROOT = path.resolve(process.cwd(), "src/learnPaths");
const OUT_FILE = path.join(ROOT, "pathManifest.generated.json");

const SKIP = new Set([
  "index.js", "index.test.js", "examenLookup.js", "pathLoaders.js",
  "subjectMapping.js", "subjectMapping.test.js", "questionPathMap.generated.js",
]);

async function main() {
  const files = fs.readdirSync(ROOT).filter(
    (f) => f.endsWith(".js") && !SKIP.has(f) && !f.includes(".test.")
  );

  const manifest = [];
  for (const file of files) {
    const full = path.join(ROOT, file);
    try {
      const mod = await import(pathToFileURL(full).href);
      const p = mod.default;
      if (!p || typeof p !== "object" || !p.id) continue;
      const steps = Array.isArray(p.steps) ? p.steps : [];
      const checks = steps.reduce(
        (sum, s) => sum + (Array.isArray(s?.checks) ? s.checks.length : 0),
        0
      );
      // estimatedMinutes precomputen zodat consumers (LearnPathsHub) geen full
      // pad-data nodig hebben om '~15 min' te tonen. Zelfde formule als
      // shared/pathDuration.js → rawMinutes() + bucket-rounding.
      const explChars = steps.reduce((sum, s) => sum + ((s?.explanation || "").length), 0);
      const rawMin = explChars / 1500 + checks * 0.4;
      const BUCKETS = [5, 10, 15, 20, 25, 30, 45, 60, 90];
      let estimatedMinutes = Math.ceil(rawMin / 15) * 15;
      for (const b of BUCKETS) { if (rawMin <= b) { estimatedMinutes = b; break; } }
      manifest.push({
        id: p.id,
        file: `./${file}`,  // gebruikt door pathLoaders.js voor static id→loader-mapping
        title: p.title || p.id,
        subject: p.subject || "overig",
        level: p.level || "",
        emoji: p.emoji || "",
        referentieNiveau: p.referentieNiveau || null,
        sloThema: p.sloThema || null,
        triggerKeywords: Array.isArray(p.triggerKeywords) ? p.triggerKeywords.slice(0, 12) : [],
        intro: (p.intro || "").slice(0, 200),
        stepCount: steps.length,
        checkCount: checks,
        chapterCount: Array.isArray(p.chapters) ? p.chapters.length : 0,
        estimatedMinutes,
      });
    } catch (e) {
      console.warn(`[buildPathManifest] skip ${file}: ${e.message}`);
    }
  }

  manifest.sort((a, b) => a.id.localeCompare(b.id));
  fs.writeFileSync(OUT_FILE, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  console.log(`✓ ${manifest.length} paden → ${path.relative(process.cwd(), OUT_FILE)}`);
  const bytes = fs.statSync(OUT_FILE).size;
  console.log(`  bestand-grootte: ${(bytes / 1024).toFixed(1)} kB`);
}

main().catch((e) => {
  console.error("[buildPathManifest] FATAL:", e);
  process.exit(1);
});
