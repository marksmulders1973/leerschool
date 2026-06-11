// Eenmalig (2026-06-11): verwijder letter-verwijzingen uit socialVragen.js.
// De opties worden voortaan per vraag-id deterministisch geschud (altijd-A-fix
// voor de vraag van de dag), dus "Antwoord A." in uitleg-teksten zou liegen.
// De teksten noemen het juiste antwoord al in woorden — letters zijn overbodig.
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "src/socialVragen.js";
let t = readFileSync(FILE, "utf8");
const voor = t;

// " (antwoord D)" midden in een zin → weg.
t = t.replace(/\s*\(antwoord [A-D]\)/gi, "");
// "Antwoord A." aan het eind van een tekst-string (na . ? ! of …) → weg.
t = t.replace(/\s*Antwoord [A-D]\.(")/g, "$1");

writeFileSync(FILE, t);
const n1 = (voor.match(/\(antwoord [A-D]\)/gi) || []).length;
const n2 = (voor.match(/Antwoord [A-D]\."/g) || []).length;
console.log("verwijderd:", n1, "haakjes-refs +", n2, "trailing-refs");
const rest = t.match(/[Aa]ntwoord [A-D]\b/g) || [];
console.log("resterende letter-refs:", rest.length, rest.slice(0, 5));
