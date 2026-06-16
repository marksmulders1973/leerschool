// Eenmalig: zet de losse machtsregel-formules in machten.js om naar LaTeX ($...$),
// zodat ze net zo mooi renderen als het spiekbriefje (bob's wens, 11 jun).
// In de bron-.js staan dubbele backslashes (\\cdot) -> runtime krijgt KaTeX \cdot.
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "src/learnPaths/machten.js";
let s = readFileSync(FILE, "utf8");

const repl = [
  ["**Formule**: **a^m · a^n = a^(m+n)**",
   "**Formule**: $a^m \\\\cdot a^n = a^{m+n}$"],
  ["**Formule**: **a^m / a^n = a^(m−n)** (voor a ≠ 0)",
   "**Formule**: $\\\\dfrac{a^m}{a^n} = a^{m-n}$ (voor a ≠ 0)"],
  ["**Formule**: **(a^m)^n = a^(m·n)**",
   "**Formule**: $(a^m)^n = a^{m \\\\cdot n}$"],
  ["**Formule**: **(a·b)^n = a^n · b^n**",
   "**Formule**: $(a \\\\cdot b)^n = a^n \\\\cdot b^n$"],
  ["**Formule**: **(a/b)^n = a^n / b^n** (voor b ≠ 0)",
   "**Formule**: $\\\\left(\\\\dfrac{a}{b}\\\\right)^n = \\\\dfrac{a^n}{b^n}$ (voor b ≠ 0)"],
  ["**Definitie**: **a^(−n) = 1 / a^n** (voor a ≠ 0)",
   "**Definitie**: $a^{-n} = \\\\dfrac{1}{a^n}$ (voor a ≠ 0)"],
];

let ok = 0;
for (const [find, replace] of repl) {
  const n = s.split(find).length - 1;
  if (n !== 1) { console.error(`✗ "${find}" gevonden ${n}x (verwacht 1) — ABORT`); process.exit(1); }
  s = s.replace(find, replace);
  ok++;
}
writeFileSync(FILE, s);
console.log(`✓ ${ok} formules omgezet naar LaTeX in ${FILE}`);
