// Indexering aanvragen in Google Search Console via de ingelogde Chrome-voor-Claude (CDP 9222).
// Recept uit memory reference_seo_gsc_firewall (10 sep 2026): overzicht openen, breed venster,
// URL in de inspectiebalk typen, "Indexering aanvragen" klikken. Quotum ≈ 10 per dag.
// Gebruik: node scripts/gsc-indexeer.mjs <url> [url …]
import { chromium } from "playwright";

const urls = process.argv.slice(2);
if (!urls.length) { console.error("geef minstens één URL"); process.exit(1); }
const browser = await chromium.connectOverCDP("http://127.0.0.1:9222");
const ctx = browser.contexts()[0];
const page = await ctx.newPage();
await page.setViewportSize({ width: 1500, height: 950 });
const tekst = () => page.evaluate(() => document.body.innerText);
const wachtOp = async (re, ms) => {
  const eind = Date.now() + ms;
  while (Date.now() < eind) { if (re.test(await tekst())) return true; await page.waitForTimeout(1500); }
  return false;
};
for (const url of urls) {
  await page.goto("https://search.google.com/search-console?resource_id=" + encodeURIComponent("https://leerkwartier.app/"), { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(4000);
  await page.locator("input[role=combobox]").first().click();
  await page.keyboard.type(url);
  await page.keyboard.press("Enter");
  if (!(await wachtOp(/indexering aanvragen/i, 60000))) { console.log(url, "→ knop niet gevonden"); continue; }
  await page.evaluate(() => {
    const el = [...document.querySelectorAll("span,div,button")].find((e) => /^indexering aanvragen$/i.test(e.textContent.trim()));
    (el?.closest("[role=button],button") || el)?.click();
  });
  const ok = await wachtOp(/indexering aangevraagd/i, 120000);
  const quota = /quotum|quota/i.test(await tekst());
  console.log(url, "→", ok ? "aangevraagd" : quota ? "quotum bereikt" : "onbekend (zie venster)");
}
await page.close();
await browser.close().catch(() => {});
