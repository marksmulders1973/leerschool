// Audit deel "automatische controles" (5 okt 2026, docs/AUDIT-PLAN-OKT-2026.md).
// Loopt alle leerpaden langs en meldt: antwoord-index ongeldig, dubbele opties,
// en kale sommen (a + b = ?) waarvan het gemarkeerde antwoord niet klopt.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve("src/learnPaths");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "pathManifest.generated.json"), "utf8"));
const num = (s) => Number(String(s).replace(/\*/g, "").replace(/\.(?=\d{3}\b)/g, "").replace(",", ".").trim());
const SOM = /^\s*(?:hoeveel is|bereken|reken uit:?|wat is)?\s*\**\s*(\d[\d.]*(?:,\d+)?)\s*([+\-−×x*:÷])\s*(\d[\d.]*(?:,\d+)?)\s*\**\s*(?:=\s*)?\??\s*\**\s*\??\s*$/i;
const reken = (a, op, b) => ({ "+": a + b, "-": a - b, "−": a - b, "×": a * b, x: a * b, "*": a * b, ":": a / b, "÷": a / b })[op];
const fouten = [];
const weggegeven = [];
let checks = 0, sommen = 0;
for (const e of manifest) {
  let pad;
  try { pad = (await import(pathToFileURL(path.join(root, e.file)).href)).default; } catch { continue; }
  (pad?.steps || []).forEach((s, si) => (s.checks || []).forEach((c, ci) => controleer(c, `${e.id} stap ${si + 1} vraag ${ci + 1}`)));
}
// Grote oefenbanken (quiz): src/data/sampleQuestions.js + textbookQuestions.js
for (const f of ["../data/sampleQuestions.js", "../data/textbookQuestions.js", "../data/topics.js"]) {
  let mod; try { mod = await import(pathToFileURL(path.join(root, f)).href); } catch (err) { console.log("kon niet laden:", f, err.message); continue; }
  const loop = (x, waar) => { if (Array.isArray(x)) x.forEach((v, i) => (v && typeof v === "object" && "q" in v ? controleer(v, `${waar}[${i}]`) : loop(v, `${waar}[${i}]`))); else if (x && typeof x === "object") for (const k of Object.keys(x)) loop(x[k], `${waar}.${k}`); };
  for (const [naam, waarde] of Object.entries(mod)) loop(waarde, `${path.basename(f)}:${naam}`);
}
function controleer(c, waar) {
  {
    checks++;
    if (!Array.isArray(c.options) || typeof c.answer !== "number") return;
    if (c.answer < 0 || c.answer >= c.options.length) fouten.push(`${waar}: antwoord-index ${c.answer} bestaat niet`);
    const norm = c.options.map((o) => String(o).replace(/\*\*/g, "").replace(/\s+/g, " ").trim());
    if (new Set(norm).size < norm.length) fouten.push(`${waar}: dubbele opties ${JSON.stringify(c.options)}`);
    // Antwoord weggegeven: het goede antwoord (≥ 2 woorden) staat letterlijk in de vraag, en de foute opties niet.
    const juist = String(c.options[c.answer] ?? "").replace(/\*\*/g, "").trim().toLowerCase();
    const vraag = String(c.q || "").replace(/\*\*/g, "").toLowerCase();
    if (vraag.length < 220 && !/lees de tekst|in de tekst|volgens de tekst/.test(vraag) && juist.split(/\s+/).length >= 2 && juist.length >= 8 && vraag.includes(juist) && !c.options.some((o, i) => i !== c.answer && vraag.includes(String(o).replace(/\*\*/g, "").trim().toLowerCase())))
      weggegeven.push(`${waar}: "${c.q}" → antwoord "${c.options[c.answer]}" staat in de vraag`);
    const m = String(c.q || "").match(SOM);
    if (m) {
      sommen++;
      const uit = reken(num(m[1]), m[2], num(m[3]));
      const gek = num(c.options[c.answer]);
      if (Number.isFinite(gek) && Math.abs(uit - gek) > 1e-9) fouten.push(`${waar}: ${c.q} → app zegt ${c.options[c.answer]}, moet ${uit}`);
      const ookGoed = c.options.filter((o, i) => i !== c.answer && Math.abs(num(o) - uit) < 1e-9);
      if (ookGoed.length) fouten.push(`${waar}: ${c.q} → nog een optie is ook goed: ${ookGoed}`);
    }
  }
}
// Zelftest: een expres foute som moet gevonden worden, anders is de controle zelf stuk.
const voor = fouten.length; controleer({ q: "2 + 2 = ?", options: ["5", "4"], answer: 0 }, "ZELFTEST"); checks--; sommen--;
if (fouten.length !== voor + 2) throw new Error("zelftest faalt: controle ziet een foute som niet"); fouten.splice(voor);
console.log(`${manifest.length} paden · ${checks} vragen · ${sommen} kale sommen nagerekend · ${fouten.length} meldingen`);
fouten.forEach((f) => console.log("- " + f));

console.log(`
Antwoord mogelijk weggegeven in de vraag: ${weggegeven.length}`);
weggegeven.forEach((f) => console.log("- " + f));
