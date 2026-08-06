// Eenmalige codemod (Mark 6 aug 2026): pure rekensommen horen "Hoeveel is …?"
// te vragen, niet "Wat is …?" ("wat" = begripsvraag, "hoeveel" = uitkomst —
// zo klinkt het ook op school). Omzet-/representatievragen ("Wat is 3/5 als
// percentage?", "Wat is 2350 afgerond…") blijven bewust "Wat is".
// Draai: node scripts/fix-hoeveel-is.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

function walk(dir) {
  const out = [];
  for (const naam of readdirSync(dir)) {
    const p = join(dir, naam);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.(js|jsx)$/.test(naam)) out.push(p);
  }
  return out;
}

const SUP = String.raw`[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]`;
// Term = getal (evt. met €, breuk-slash, superscript-macht of %-teken):
const T = String.raw`(?:€\s*)?[0-9]+(?:[.,][0-9]+)?(?:/[0-9]+)?(?:${SUP}+)?(?:\s*%)?`;
const OP = String.raw`(?:\s*[×x*+:÷·^−–-]\s*|\s+keer\s+|\s+tot de macht\s+|\s+van\s+)`;
// Alleen als de HELE vraag t/m het vraagteken een kale som is:
const EXPR = [
  String.raw`${T}(?:${OP}${T})+`,          // 3 × 4, 2+2, 56 : 8, 17 ÷ 5, 2 keer 4, 25% van €80
  String.raw`[0-9]+(?:${SUP}+|[²³])`,      // 8², 2³, 3⁻², 7⁰
].join("|");
const RE = new RegExp(String.raw`Wat is ((?:${EXPR}))(\**)\s*\?`, "g");

const files = [...walk("src"), "scripts/questions-insert.sql"];

let totaal = 0;
for (const f of files) {
  const oud = readFileSync(f, "utf8");
  let n = 0;
  const nieuw = oud.replace(RE, (_, expr, bold) => { n++; return `Hoeveel is ${expr}${bold}?`; });
  if (n > 0) {
    writeFileSync(f, nieuw);
    totaal += n;
    console.log(`${f}: ${n}`);
  }
}
console.log(`TOTAAL vervangen: ${totaal}`);
