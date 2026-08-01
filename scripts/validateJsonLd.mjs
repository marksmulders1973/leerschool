// Valideert dat alle JSON-LD blokken in public/*.html geldig JSON zijn.
// Draaien: node scripts/validateJsonLd.mjs
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const PUBLIC = new URL("../public/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
let ok = 0, bad = 0, files = 0;

for (const f of readdirSync(PUBLIC)) {
  if (!f.endsWith(".html")) continue;
  files++;
  const html = readFileSync(join(PUBLIC, f), "utf8");
  let m;
  while ((m = re.exec(html))) {
    try { JSON.parse(m[1]); ok++; }
    catch (e) { bad++; console.log(`FOUT in ${f}: ${String(e.message).slice(0, 70)}`); }
  }
}
console.log(`HTML: ${files} | JSON-LD OK: ${ok} | FOUT: ${bad}`);
