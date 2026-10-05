// Telt leerpaden per vak × klas/groep, met dezelfde indeling als LearnPathsHub (parseLevel / padBijGroep).
import fs from "node:fs";
const L = JSON.parse(fs.readFileSync("src/learnPaths/pathManifest.generated.json", "utf8"));
function bucket(level) {
  const l = String(level || "").toLowerCase();
  if (!l) return "klas-1(geen level)";
  if (l.startsWith("groep") || l === "po") return "po";
  if (l.includes("klas1")) return "klas-1";
  if (l.includes("klas2")) return "klas-2";
  if (l.includes("klas3") || l.startsWith("havo3")) return "klas-3";
  if (l.startsWith("vmbo-gt-4") || l.startsWith("klas4")) return "klas-4";
  if (l.startsWith("havo") || l.includes("vwo") || l.includes("gymnasium")) return "bovenbouw";
  return "klas-1(onbekend: " + level + ")";
}
const vo = {}, po = {}, vreemd = [];
for (const p of L) {
  const b = bucket(p.level), s = p.subject || "?";
  if (b.includes("(")) vreemd.push(`${p.id} | ${s} | level="${p.level}"`);
  if (b === "po") {
    const m = String(p.level).match(/groep\s*(\d)(?:\s*-\s*(\d))?/i);
    const lo = m ? +m[1] : 1, hi = m ? +(m[2] || m[1]) : 8;
    po[s] ??= Array(9).fill(0); for (let g = lo; g <= hi; g++) po[s][g]++;
  } else { vo[s] ??= {}; const k = b.replace(/\(.*/, ""); vo[s][k] = (vo[s][k] || 0) + 1; }
}
const K = ["klas-1", "klas-2", "klas-3", "klas-4", "bovenbouw"];
console.log("## Middelbare school — onderwerpen per vak per klas\n\n| Vak | totaal (tegel) | " + K.join(" | ") + " |\n|---|---|" + K.map(() => "---").join("|") + "|");
Object.entries(vo).sort((a, b) => Object.values(b[1]).reduce((x, y) => x + y) - Object.values(a[1]).reduce((x, y) => x + y))
  .forEach(([s, c]) => console.log(`| ${s} | ${Object.values(c).reduce((x, y) => x + y)} | ` + K.map((k) => c[k] || "**0**").join(" | ") + " |"));
console.log("\n## Basisschool — onderwerpen per vak per groep\n\n| Vak | " + [1,2,3,4,5,6,7,8].map((g) => "g" + g).join(" | ") + " |\n|---|" + "---|".repeat(8));
Object.entries(po).sort().forEach(([s, a]) => console.log(`| ${s} | ` + a.slice(1).map((n) => (n ? n : "**0**")).join(" | ") + " |"));
console.log("\n## Paden met een onduidelijk level (vallen in 'klas 1' terug)\n"); vreemd.forEach((v) => console.log("- " + v));
