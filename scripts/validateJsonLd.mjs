// Valideert dat alle JSON-LD blokken in public/*.html geldig JSON zijn.
// Draaien: node scripts/validateJsonLd.mjs
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("../", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const PUBLIC = join(ROOT, "public");
const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
let ok = 0, bad = 0, files = 0;

// public/*.html + de root index.html (die de belangrijkste schema's bevat)
const targets = readdirSync(PUBLIC).filter((f) => f.endsWith(".html")).map((f) => join(PUBLIC, f));
targets.push(join(ROOT, "index.html"));

for (const path of targets) {
  files++;
  const html = readFileSync(path, "utf8");
  let m;
  while ((m = re.exec(html))) {
    try { JSON.parse(m[1]); ok++; }
    catch (e) { bad++; console.log(`FOUT in ${path}: ${String(e.message).slice(0, 70)}`); }
  }
}
console.log(`HTML: ${files} | JSON-LD OK: ${ok} | FOUT: ${bad}`);
