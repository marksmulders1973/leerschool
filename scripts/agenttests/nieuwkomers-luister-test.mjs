// Nieuwkomers zonder lezen (29 sep 2026): schakelaar, Kijken en luisteren (3 ingangen), leerpad met luisterknoppen.
import { chromium } from "playwright";
const BASE = process.env.BASE || "http://localhost:4799", SHOTS = process.env.SHOTS || ".";
const b = await chromium.launch({ headless: true });
const c = await b.newContext({ viewport: { width: 390, height: 844 } });
await c.addInitScript(() => { try { localStorage.setItem("lk_onboarded", "1"); localStorage.setItem("lk_steuntaal", "ar"); } catch {} });
const p = await c.newPage(); const fouten = [];
p.on("pageerror", (e) => { if (!/Unexpected token '<'/.test(String(e))) fouten.push(String(e).slice(0, 160)); });
const klik = (re) => p.evaluate((src) => { const r = new RegExp(src); const el = [...document.querySelectorAll("button")].find((x) => r.test(x.innerText)); el?.click(); return !!el; }, re);
await p.goto(BASE + "/nieuwkomers", { waitUntil: "networkidle" }); await p.waitForTimeout(2500);
await p.screenshot({ path: SHOTS + "/nk-1-pagina.png" });
console.log("schakelaar:", await klik("Ik kan nog niet"), "| luisterknoppen op pagina:", await p.locator('[aria-label^="Luister"]').count());
// Luister en kies
console.log("open luister en kies:", await klik("^(Luister en kies|استمع واختر)$"));
await p.waitForTimeout(800); await p.screenshot({ path: SHOTS + "/nk-2-themas.png" });
console.log("thema:", await klik("In de klas")); await p.waitForTimeout(1200);
await p.locator("button:has(img)").nth(0).click(); await p.waitForTimeout(700);
await p.screenshot({ path: SHOTS + "/nk-3-kies.png" });
// terug naar keuze en dictee
await p.locator('button[aria-label="رجوع"], button[aria-label="Terug"]').first().click(); await p.waitForTimeout(500);
console.log("dictee knop:", await klik("إملاء بالصور|Plaatjesdictee")); await p.waitForTimeout(500);
console.log("thema eten:", await klik("Eten en drinken")); await p.waitForTimeout(1500);
await p.screenshot({ path: SHOTS + "/nk-4-dictee.png" });
// woord uit plaatje afleiden en tegels in volgorde tikken
const woord = await p.evaluate(() => { const img = [...document.querySelectorAll("img")].find((x) => /picto/.test(x.src) && x.width > 150); return img ? decodeURIComponent(img.src.split("/").pop().replace(".svg", "")) : null; });
console.log("woord:", woord);
if (woord) {
  for (const ch of woord) { await p.evaluate((c) => { const t = [...document.querySelectorAll("button")].find((x) => x.innerText.trim() === c && !x.disabled && x.style.width === "46px"); t?.click(); }, ch); await p.waitForTimeout(120); }
  await p.waitForTimeout(2200); await p.screenshot({ path: SHOTS + "/nk-5-dehet.png" });
  console.log("de/het zichtbaar:", await p.evaluate(() => [...document.querySelectorAll("button")].some((x) => x.innerText.trim() === "het")));
}
// woordkaarten
await p.locator('button[aria-label="رجوع"], button[aria-label="Terug"]').first().click(); await p.waitForTimeout(500);
await klik("بطاقات الكلمات|Woordkaarten"); await p.waitForTimeout(400); await klik("Kleding"); await p.waitForTimeout(1000);
await p.screenshot({ path: SHOTS + "/nk-6-kaarten.png" });
// leerpad met luisterknoppen
await p.goto(BASE + "/nieuwkomers", { waitUntil: "networkidle" }); await p.waitForTimeout(1500);
await p.evaluate(() => { const el = [...document.querySelectorAll("button")].find((x) => /^\s*2\b/.test(x.innerText) || /Woorden/.test(x.innerText)); el?.click(); });
await p.waitForTimeout(2500);
await klik("Begin|Doorgaan|بدء"); await p.waitForTimeout(1500);
await klik("Naar de vragen"); await p.waitForTimeout(1500);
await p.screenshot({ path: SHOTS + "/nk-7-leerpad.png", fullPage: false });
console.log("url:", p.url().replace(BASE, ""), "| luisterknoppen:", await p.locator('[aria-label^="Luister"]').count(), "| fouten:", fouten.length ? fouten : 0);
await b.close();
