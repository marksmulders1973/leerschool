// Kwartiercheck per groep (29 sep 2026): start de check voor GROEP, toont de eerste vragen en rondt af met "weet ik niet".
import { chromium } from "playwright";
const BASE = process.env.BASE || "https://leerkwartier.app", SHOTS = process.env.SHOTS || ".", GROEP = process.env.GROEP || "3";
const b = await chromium.launch({ headless: true });
const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage(); const fouten = [];
p.on("pageerror", (e) => { if (!/Unexpected token '<'/.test(String(e))) fouten.push(String(e).slice(0, 160)); });
const klik = (re) => p.evaluate((src) => { const r = new RegExp(src); const el = [...document.querySelectorAll("button")].find((x) => r.test(x.innerText) && !x.disabled); el?.click(); return !!el; }, re);
await p.goto(BASE + "/?go=kwartiercheck", { waitUntil: "networkidle" }); await p.waitForTimeout(2500);
console.log("groepknoppen:", await p.evaluate(() => [...document.querySelectorAll("button")].map((x) => x.innerText.trim()).filter((t) => /^Groep \d$/.test(t)).join(",")));
await p.fill('input[placeholder="bv. Emma"]', "Testgroep" + GROEP); await klik(`^Groep ${GROEP}$`); await p.waitForTimeout(200);
await p.evaluate(() => { const bs = [...document.querySelectorAll("button")].filter((x) => !x.disabled); bs[bs.length - 1]?.click(); });
await p.waitForTimeout(1200);
await p.screenshot({ path: `${SHOTS}/kc-groep${GROEP}.png` });
const onderwerpen = new Set(); let n = 0;
while (n < 40) {
  const info = await p.evaluate(() => {
    const kop = [...document.querySelectorAll("div")].map((d) => d.innerText).find((t) => /—/.test(t) && t.length < 90 && t === t.toUpperCase());
    return { kop: kop || "", vraag: document.querySelector("p")?.innerText || "", luister: document.querySelectorAll('[aria-label^="Luister"]').length };
  });
  if (!(await klik("Dit weet ik"))) break;
  onderwerpen.add(info.kop);
  if (n < 7) console.log(`- ${info.kop} | ${info.vraag.slice(0, 80)} | luisterknoppen: ${info.luister}`);
  await p.waitForTimeout(150); await klik("Bevestig antwoord"); n++;
  await p.waitForTimeout(2000);
}
console.log("onderwerpen:", onderwerpen.size, "| uitslag:", await p.evaluate(() => /Kwartiercheck klaar voor/.test(document.body.innerText)), "| fouten:", fouten.length ? fouten : 0);
await b.close();
