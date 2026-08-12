// Eenmalig (12 aug 2026): 7 oudere partner-flyers gebruikten nog het
// 🎓-hoedje als logo — tegen de vaste regel "altijd het echte
// Leerkwartier-logo" (les Alkmaar 11 aug). Vervangt het door dezelfde
// inline SVG als op de nieuwe flyers.
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const DRUKWERK = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "drukwerk");
const SVG = `<svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><defs><radialGradient id="lkbg" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#14304a"/><stop offset="100%" stop-color="#0a1c2e"/></radialGradient><linearGradient id="lkkwart" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8fd431"/><stop offset="100%" stop-color="#68b31f"/></linearGradient></defs><rect width="512" height="512" rx="100" fill="url(#lkbg)"/><path d="M176,344 L176,192 Q176,176 192,176 L328,176 A168,168 0 0 1 176,344 Z" fill="url(#lkkwart)" transform="rotate(90 260 260)"/></svg>`;

for (const code of process.argv.slice(2)) {
  const pad = join(DRUKWERK, `flyer-${code}.html`);
  let t = readFileSync(pad, "utf8");
  const voor = t;
  t = t.replace(/<(span|div) class="logo">\s*🎓\s*<\/\1>/g, SVG);
  t = t.replace(/\.logo\{font-size:\d+px\}/g, ".logo{height:56px;width:56px;display:block;flex:0 0 auto;border-radius:12px}");
  if (t === voor) { console.log(`⏭️  ${code}: geen hoedje gevonden`); continue; }
  writeFileSync(pad, t);
  console.log(`✅ ${code}: hoedje → echt logo`);
}
