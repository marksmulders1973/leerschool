// Kwartiercheck: "Dit weet ik (nog) niet" (Brian moest gokken) + "Hoe vond je de vragen?" op de uitslag (Mark 29 sep 2026).
import { chromium } from "playwright";
const BASE = process.env.BASE || "http://localhost:4799", SHOTS = process.env.SHOTS || ".";
const b = await chromium.launch({ headless: true });
const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage(); const fouten = [];
p.on("pageerror", (e) => { if (!/Unexpected token '<'/.test(String(e))) fouten.push(String(e).slice(0, 160)); });
const klik = (re) => p.evaluate((src) => { const r = new RegExp(src); const el = [...document.querySelectorAll("button")].find((x) => r.test(x.innerText) && !x.disabled); el?.click(); return !!el; }, re);
await p.goto(BASE + "/?go=kwartiercheck", { waitUntil: "networkidle" }); await p.waitForTimeout(2000);
await p.fill('input[placeholder="bv. Emma"]', "Testbrian"); await klik("^Groep 7$"); await p.waitForTimeout(200);
await p.evaluate(() => { const bs = [...document.querySelectorAll("button")].filter((x) => !x.disabled); bs[bs.length - 1]?.click(); });
await p.waitForTimeout(1200);
let n = 0;
while (n < 40 && await klik("Dit weet ik")) {
  await p.waitForTimeout(150); await klik("Bevestig antwoord"); n++;
  if (n === 1) { await p.waitForTimeout(300); await p.screenshot({ path: SHOTS + "/kc-weetniet.png" }); }
  await p.waitForTimeout(2000);
}
console.log("vragen met 'weet ik niet':", n);
console.log("gevoel-vraag:", await p.evaluate(() => /Hoe vond je de vragen/.test(document.body.innerText)), "| te moeilijk:", await klik("^Te moeilijk$"));
await p.waitForTimeout(400); await p.screenshot({ path: SHOTS + "/kc-gevoel.png" });
console.log("vervolg:", await p.evaluate(() => (document.body.innerText.match(/Geen probleem[^\n]*/) || [""])[0]), "| fouten:", fouten.length ? fouten : 0);
await b.close();
