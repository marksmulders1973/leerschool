// Audit deel 6 "Schermen & teksten" (7 okt 2026): haalt alle zichtbare tekst-literals
// uit de schermcode zodat nakijkers ze kunnen lezen. Alleen lezen, wijzigt niets.
// Uitvoer: <uitmap>/<bestand>.txt met "regel | soort | tekst" + totaal.json.
// Gebruik: node scripts/audit/schermen/haal-teksten.mjs <uitmap>
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { parse } from "@babel/parser";
import traverseMod from "@babel/traverse";
const traverse = traverseMod.default || traverseMod;

const root = process.cwd();
const uit = process.argv[2] || "audit-teksten";
const MAPPEN = ["src/components", "src/features", "src/shared", "src/app", "src/subscription", "src/auth", "api"];
const LOSSE = ["src/App.jsx", "src/data/appGids.js", "src/brand.js", "src/auth.js", "src/constants.js", "src/main.jsx"];
// Lesinhoud (al nagekeken in Q3-Q9e) — niet in deze ronde.
const LESINHOUD = /leesladderData|leesladder2\/|leesladderWoorden|wereldData|europaData|nlProvincieData|brugklasData|dicteeData|werkwoordenData|uitvindersData|kwartiercheck\/questions|kwartiercheck\/groepen|tafelQuestions|citoMixVragen|sampleQuestions|textbookQuestions|\/learnPaths\/|\.test\.|__tests__/i;
const ATTR = new Set(["title", "aria-label", "placeholder", "alt", "label", "aria-description", "content"]);
const isProza = (s) => /[A-Za-zÀ-ÿ]{2,}/.test(s) && /\s/.test(s.trim()) && !/^[\w\s-]*:\s*[\w#.%-]+;?$/.test(s) &&
  !/^(flex|grid|block|none|absolute|relative|bold|center|solid|\d)/.test(s.trim()) && !/^[a-z0-9-]+( [a-z0-9-]+)*$/.test(s.trim()) &&
  !/^(https?:|\/|\.\/|#)/.test(s.trim()) && !/(px|rem|em|%|rgba?\()/.test(s.trim().split(/\s+/)[0]);

const bestanden = [];
const loop = (d) => { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) loop(p); else if (/\.(jsx?|tsx?|mjs)$/.test(f)) bestanden.push(p); } };
for (const m of MAPPEN) loop(join(root, m));
for (const l of LOSSE) bestanden.push(join(root, l));

mkdirSync(uit, { recursive: true });
let totaal = 0; const per = {}; const overgeslagen = [];
for (const p of bestanden) {
  const rel = relative(root, p);
  if (LESINHOUD.test(rel)) { overgeslagen.push(rel); continue; }
  let ast;
  try { ast = parse(readFileSync(p, "utf8"), { sourceType: "module", plugins: ["jsx", "typescript"], errorRecovery: true }); }
  catch (e) { overgeslagen.push(rel + " (parsefout)"); continue; }
  const regels = [];
  const zet = (n, soort, t) => { t = t.replace(/\s+/g, " ").trim(); if (t) regels.push(`${n.loc?.start.line ?? "?"} | ${soort} | ${t}`); };
  traverse(ast, {
    JSXText(path) { const t = path.node.value; if (/[A-Za-zÀ-ÿ]/.test(t)) zet(path.node, "jsx", t); },
    JSXAttribute(path) {
      const naam = path.node.name.name; const v = path.node.value;
      if (ATTR.has(naam) && v?.type === "StringLiteral" && /[A-Za-zÀ-ÿ]/.test(v.value)) zet(v, naam, v.value);
    },
    StringLiteral(path) {
      if (path.parent.type === "JSXAttribute" || path.parent.type === "ImportDeclaration" || path.parent.type === "ExportNamedDeclaration") return;
      if (path.parent.type === "ObjectProperty" && path.parent.key === path.node) return;
      if (isProza(path.node.value)) zet(path.node, "str", path.node.value);
    },
    TemplateLiteral(path) {
      const t = path.node.quasis.map((q) => q.value.cooked).join("{…}");
      if (isProza(t) && !/^\s*(\{…\}\s*)*$/.test(t)) zet(path.node, "tpl", t);
    },
  });
  if (regels.length) {
    writeFileSync(join(uit, rel.replace(/\//g, "__") + ".txt"), `# ${rel}\n` + regels.join("\n") + "\n");
    per[rel] = regels.length; totaal += regels.length;
  }
}
writeFileSync(join(uit, "totaal.json"), JSON.stringify({ totaal, bestanden: Object.keys(per).length, per, overgeslagen }, null, 1));
console.log(`${totaal} fragmenten uit ${Object.keys(per).length} bestanden; ${overgeslagen.length} overgeslagen (lesinhoud/parsefout).`);
