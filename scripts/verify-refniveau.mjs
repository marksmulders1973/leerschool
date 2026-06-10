// Controle B6-tags: print elke getagde vraag + niveau, en tel per stap.
import { readFileSync } from "node:fs";

const FILES = [
  "src/learnPaths/doorstroomtoetsRekenenG8.js",
  "src/learnPaths/doorstroomtoetsTaalG8.js",
  "src/learnPaths/doorstroomtoetsStudievaardighedenG8.js",
];

for (const f of FILES) {
  const t = readFileSync(f, "utf8");
  console.log("=== " + f);
  for (const m of t.matchAll(/\n    title: "([^"]+)",\r?\n    refOnderdeel: "([^"]+)",/g)) {
    console.log("STAP [" + m[2] + "] " + m[1]);
  }
  const re = /q: "((?:[^"\\]|\\.)*)",\r?\n\s*ref: "(1F|S)",/g;
  let n = 0;
  for (const m of t.matchAll(re)) {
    console.log("  [" + m[2] + "] " + m[1].slice(0, 92));
    n++;
  }
  // losse ref-regels die NIET direct na een q-regel staan (zou 0 moeten zijn)
  const alleRefs = (t.match(/ref: "(1F|S)",/g) || []).length;
  console.log("  totaal na q-regel:", n, "| totaal ref-regels:", alleRefs, alleRefs !== n ? "⚠️ MISMATCH" : "✓");
}
