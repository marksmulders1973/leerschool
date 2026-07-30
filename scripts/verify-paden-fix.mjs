// Verificatie van de vak-tegel→Hub-fix (Mark 31 jul). Reproduceert de exacte
// filter-predikaten uit LearnPathsHub.jsx tegen de echte manifest-data.
import { readFileSync } from "node:fs";
const manifest = JSON.parse(readFileSync(new URL("../src/learnPaths/pathManifest.generated.json", import.meta.url)));

const isPoLevel = (lvl) => /^(groep|po)/i.test(String(lvl || ""));
const isVoLevel = (lvl) => /^(klas|havo|vwo|vmbo)/i.test(String(lvl || ""));

// Simuleer de Hub-padenlijst voor een gekozen vak + niveau (na mijn fix).
function hubPaths(subject, { effectivePo, effectiveVo }) {
  let allPaths = manifest;
  if (effectivePo) allPaths = manifest.filter((p) => isPoLevel(p.level));
  else if (effectiveVo) allPaths = manifest.filter((p) => isVoLevel(p.level));
  let paths = allPaths.filter((p) => (p.subject || "wiskunde") === subject);
  // vangnet
  if (paths.length === 0) paths = manifest.filter((p) => (p.subject || "wiskunde") === subject);
  return paths;
}

// Tel per subject hoeveel PO- en VO-paden er zijn (spiegelt StudentHome-teller).
const subjects = [...new Set(manifest.map((p) => p.subject).filter(Boolean))].sort();
console.log("subject               | groep | vo  | student+PO-tegel (na fix) | OUD student (rol=vo)");
console.log("-".repeat(90));
for (const s of subjects) {
  const groep = manifest.filter((p) => p.subject === s && isPoLevel(p.level)).length;
  const vo = manifest.filter((p) => p.subject === s && isVoLevel(p.level)).length;
  // NA fix: PO-tegel geeft niveauOverride "po" → effectivePo
  const na = hubPaths(s, { effectivePo: true, effectiveVo: false }).length;
  // OUD: geen override, student-rol → effectiveVo (bug-pad)
  const oudAllPaths = manifest.filter((p) => isVoLevel(p.level));
  const oud = oudAllPaths.filter((p) => (p.subject || "wiskunde") === s).length; // zonder vangnet = bug
  const flag = (groep > 0 && oud === 0) ? "  ← bug-vak (PO-tegel, VO-rol)" : "";
  console.log(`${s.padEnd(21)} | ${String(groep).padStart(5)} | ${String(vo).padStart(3)} | ${String(na).padStart(25)} | ${String(oud).padStart(4)}${flag}`);
}

// Harde assertie op het gemelde geval.
const natuurNa = hubPaths("natuur", { effectivePo: true, effectiveVo: false }).length;
const natuurGroep = manifest.filter((p) => p.subject === "natuur" && isPoLevel(p.level)).length;
console.log("\nASSERTIE natuur (Wereld & Natuur):");
console.log(`  groep-paden in manifest: ${natuurGroep}`);
console.log(`  Hub toont na fix (student+PO-tegel): ${natuurNa}`);
console.log(natuurNa === natuurGroep && natuurNa > 0 ? "  ✅ FIX WERKT — tegel-telling = getoonde paden" : "  ❌ MISMATCH");
