// Maakt de bijlagen van docs/audit/VERSLAG-schermen-teksten.md uit de echte logbestanden.
import fs from "node:fs";
import { execSync } from "node:child_process";
import { PAGE_TO_PATH } from "../../../src/app/routes.js";
const lees = (p) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : []);
const voor = [...lees("docs/audit/schermen/voor/testlog.json").filter((s) => s.id?.startsWith("r")), ...lees("docs/audit/schermen/voor/testlog-rollen.json")];
const na = [...lees("docs/audit/schermen/na/testlog.json"), ...lees("docs/audit/schermen/na/testlog-rollen.json")];
const fixes = lees("docs/audit/fixes-schermen.json");
const gewijzigd = new Set(fixes.map((f) => f.bestand));
let o = "";
// B1: routes
o += "### B1. App-routes (src/app/routes.js) — kliktocht op vers apparaat, telefoon 390×844\n\n| # | route | pagina-key | tekens tekst | status vóór | na herstel |\n|---|---|---|---|---|---|\n";
Object.entries(PAGE_TO_PATH).forEach(([k, pad], i) => {
  const v = voor.find((s) => s.id === `r${String(i + 1).padStart(2, "0")}-${k}`);
  const n = na.find((s) => s.id?.endsWith(`-${k}`) && s.id.startsWith("r"));
  const st = !v ? "niet geladen" : v.tekens < 200 ? "⚠️ (vrijwel) leeg" : "gerenderd";
  o += `| ${i + 1} | ${pad} | ${k} | ${v?.tekens ?? "-"} | ${st} | ${n ? `opnieuw gefotografeerd (${n.id}.png)` : "—"} |\n`;
});
// B2: statisch
const html = fs.readdirSync("public").filter((f) => f.endsWith(".html") && !f.startsWith("google"));
const dw = fs.readdirSync("public/drukwerk").filter((f) => f.endsWith(".html"));
o += `\n### B2. Statische pagina's gelezen (${html.length} in public/ + ${dw.length} drukwerk)\n\n`;
o += html.map((f) => `- public/${f}${gewijzigd.has(`public/${f}`) ? " — **hersteld**" : " — gelezen, geen herstel"}`).join("\n") + "\n";
o += dw.map((f) => `- public/drukwerk/${f}${gewijzigd.has(`public/drukwerk/${f}`) ? " — **hersteld**" : " — gelezen, geen herstel"}`).join("\n") + "\n";
o += "- public/examen/** (278 gegenereerde pagina's): 3 sjabloonzinnen hersteld via generator + mechanisch op de bestaande pagina's\n- public/leerpad/** (38 gegenereerd): via scripts/buildPadLandingsPaginas.mjs (Cito → Doorstroomtoets in de pitches), bij de build opnieuw gemaakt\n";
// C: testlog
const regel = (s) => `| ${s.id} | ${(s.titel || s.notitie || "").replace(/\n/g, " ").replace(/\|/g, "/").slice(0, 90)} | ${s.url ?? ""} | ${s.tekens ?? ""} | ${(s.fouten || []).length ? s.fouten[0].slice(0, 40) : ""} |`;
o += "\n### C1. Testlog vóór herstel (rollen, fout antwoorden, plaatjes uit)\n\n| stap | wat | url | tekens | JS-fout |\n|---|---|---|---|---|\n" + voor.filter((s) => !s.id?.startsWith("r")).map(regel).join("\n") + "\n";
o += "\n### C2. Testlog na herstel\n\n| stap | wat | url | tekens | JS-fout |\n|---|---|---|---|---|\n" + na.map(regel).join("\n") + "\n";
// D: bestandslijst
const namen = execSync("git diff --name-only HEAD", { encoding: "utf8" }).trim().split("\n").filter(Boolean);
const nieuw = execSync("git ls-files --others --exclude-standard", { encoding: "utf8" }).trim().split("\n").filter(Boolean);
const groep = (l) => { const c = {}; for (const f of l) { const k = f.startsWith("public/examen/") ? "public/examen/** (gegenereerd)" : f.startsWith("public/leerpad/") ? "public/leerpad/** (gegenereerd)" : f.startsWith("docs/audit/schermen/") ? "docs/audit/schermen/** (schermafbeeldingen + tekst)" : f; c[k] = (c[k] || 0) + 1; } return Object.entries(c).map(([k, n]) => `- ${k}${n > 1 ? ` (${n} bestanden)` : ""}`).join("\n"); };
o += `\n### D. Bestandslijst\n\n**Gewijzigd (${namen.length}):**\n${groep(namen)}\n\n**Nieuw (${nieuw.length}):**\n${groep(nieuw)}\n`;
fs.writeFileSync("/tmp/claude-0/bijlagen.md", o);
console.log("routes", Object.keys(PAGE_TO_PATH).length, "leeg", voor.filter((s) => s.id?.startsWith("r") && s.tekens < 200).map((s) => s.url).join(" "), "| html", html.length, "drukwerk", dw.length, "| gewijzigd", namen.length, "nieuw", nieuw.length);
