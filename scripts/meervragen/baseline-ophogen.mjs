// Q12a: verhoog de 15-min-baseline ALLEEN voor paden die door de extra vragen langer werden
// (per bezoek 5 vragen per stap). Schrijft welke paden het waren naar stdout (voor het verslag).
import fs from "node:fs";
const M = JSON.parse(fs.readFileSync("src/learnPaths/pathManifest.generated.json", "utf8"));
const B = JSON.parse(fs.readFileSync("scripts/pathDuration.baseline.json", "utf8"));
const op = [];
for (const p of M) if (B[p.id] !== undefined && p.estimatedMinutes > Math.max(B[p.id], 15)) { op.push(`${p.id}: ${B[p.id]} → ${p.estimatedMinutes}`); B[p.id] = p.estimatedMinutes; }
fs.writeFileSync("scripts/pathDuration.baseline.json", JSON.stringify(B, null, 2) + "\n");
console.log(op.length ? op.join("\n") : "niets op te hogen");
