// node --import ./scripts/meervragen/reg.mjs … invoeg-push.mjs <map> <pathId> <naamStap0,naamStap1,…>
// Voor paden waarvan de checks in code gegenereerd worden: zet de opgenomen vragen als `<array>.push(...)`
// vlak vóór `const steps = [`. Roept geen rnd() aan, dus de gegenereerde vragen blijven gelijk. Controleert na afloop.
import fs from "node:fs"; import path from "node:path"; import { laadPad } from "./laad.mjs";
const [map, id, namenS] = process.argv.slice(2); const namen = namenS.split(",");
const b = JSON.parse(fs.readFileSync(path.join(map, `${id}.besluit.json`), "utf8"));
const { pad, bestand } = await laadPad(id); const orig = fs.readFileSync(bestand, "utf8");
const plek = orig.indexOf("\nconst steps = ["); if (plek < 0) throw new Error("geen 'const steps = ['");
const per = {}; for (const v of b.opgenomen) (per[v.stap] ||= []).push({ q: v.q, options: v.options, answer: 0, wrongHints: v.wrongHints, ...(v.uitlegPad ? { uitlegPad: v.uitlegPad } : {}) });
let code = "\n// Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.\n";
for (const [st, vs] of Object.entries(per)) code += `${namen[st]}.push(\n${vs.map((v) => "  " + JSON.stringify(v)).join(",\n")},\n);\n`;
fs.writeFileSync(bestand, orig.slice(0, plek) + code + orig.slice(plek));
const { pad: nieuw } = await laadPad(id, true);
for (const [st, vs] of Object.entries(per)) { const voor = pad.steps[st].checks, na = nieuw.steps[st].checks;
  if (na.length !== voor.length + vs.length || JSON.stringify(na.slice(0, voor.length)) !== JSON.stringify(voor)) { fs.writeFileSync(bestand, orig); throw new Error("controle faalt stap " + st); } }
console.log(`${id}: ${b.opgenomen.length} ingevoegd (push)`);
