// Schermafbeeldingen vóór/na van gewijzigde statische pagina's (public/*.html), telefoonformaat.
// Gebruik: node scripts/audit/schermen/statisch.mjs <label> <poort>
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { TELEFOON, CHROMIUM } from "../ouderadvies/stubServer.mjs";
const [label = "voor", poort = "4173"] = process.argv.slice(2);
const PAGINAS = ["/welkom.html", "/gratis.html", "/over.html", "/contact.html", "/abonnement.html", "/doorstroomtoets-oefenen.html", "/examen/biologie/vmbo-gl-tl-2022-tijdvak-1/vraag-10-geslachtsbepaling-bij-bevruchting.html"];
mkdirSync(`docs/audit/schermen/${label}`, { recursive: true });
const b = await chromium.launch({ executablePath: CHROMIUM });
for (const pad of PAGINAS) {
  const ctx = await b.newContext(TELEFOON);
  await ctx.route((u) => !/^http:\/\/localhost/.test(u.href), (r) => r.abort());
  const p = await ctx.newPage();
  await p.goto(`http://localhost:${poort}${pad}`, { waitUntil: "domcontentloaded" }); await p.waitForTimeout(800);
  await p.screenshot({ path: `docs/audit/schermen/${label}/statisch-${pad.split("/").pop().replace(".html", "")}.png`, fullPage: false });
  await ctx.close();
}
await b.close(); console.log(`${PAGINAS.length} statische pagina's (${label})`);
