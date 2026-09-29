// Kwartier van vandaag met een leesblokje: staat de tekst boven de vraag en is er een 🚩-knop? (Mark 29 sep 2026)
import { chromium } from "playwright";
const BASE = process.env.BASE || "http://localhost:4799", SHOTS = process.env.SHOTS || ".";
const b = await chromium.launch({ headless: true });
const c = await b.newContext({ viewport: { width: 390, height: 844 } });
await c.addInitScript(() => {
  try {
    localStorage.setItem("ls_user", JSON.stringify({ name: "Testlezer", level: "groep7", role: "leerling" }));
    localStorage.setItem("lk_onboarded", "1");
    localStorage.setItem("lk_kwartier", JSON.stringify({ datum: new Date().toISOString().slice(0, 10), reden: "test", uitleg: "test", idx: 0, resultaten: [], klaar: false, gestart: Date.now(),
      blokjes: [{ soort: "vragen", pathId: "begrijpend-lezen-teksten-po", n: 5, titel: "Begrijpend lezen — echte oefenteksten" }] }));
  } catch {}
});
const p = await c.newPage();
p.on("pageerror", (e) => console.log("PAGEERROR", String(e).slice(0, 160)));
await p.goto(BASE + "/vandaag-kwartier", { waitUntil: "networkidle" }); await p.waitForTimeout(3500);
for (let n = 1; n <= 5; n++) {
  const r = await p.evaluate(() => ({
    vraag: [...document.querySelectorAll("p")].map((x) => x.innerText).find((t) => /\?$/.test(t.trim())) || "?",
    tekst: /Lees eerst de tekst/.test(document.body.innerText),
    beantwoordRegel: /Beantwoord de \d+ vragen/.test(document.body.innerText),
    vlag: [...document.querySelectorAll("button")].some((x) => /Klopt er iets niet/.test(x.innerText)),
  }));
  console.log(n, JSON.stringify(r).slice(0, 220));
  if (n === 1) await p.screenshot({ path: SHOTS + "/vandaag-lees.png" });
  await p.evaluate(() => { const o = [...document.querySelectorAll("button")].find((x) => x.style && /border/.test(x.getAttribute("style") || "") && !/Klopt|Verder|Stop/.test(x.innerText)); o?.click(); });
  await p.waitForTimeout(400);
  if (n === 1) { await p.evaluate(() => [...document.querySelectorAll("button")].find((x) => /Klopt er iets niet/.test(x.innerText))?.click()); await p.waitForTimeout(300); await p.screenshot({ path: SHOTS + "/vandaag-vlag.png" }); await p.evaluate(() => [...document.querySelectorAll("button")].find((x) => /annuleren/.test(x.innerText))?.click()); }
  await p.evaluate(() => [...document.querySelectorAll("button")].find((x) => /Verder/.test(x.innerText))?.click());
  await p.waitForTimeout(500);
}
await b.close();
