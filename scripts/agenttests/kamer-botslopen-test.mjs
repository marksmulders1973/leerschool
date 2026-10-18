// 18 okt 2026: bots lopen rond in de lobby en staan bij de som weer in de boog.
import { chromium } from "playwright";
const S = process.env.SHOTS || ".";
const BASE = process.env.BASE || "http://localhost:4799";
const b = await chromium.launch({ headless: true, args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"] });
const c = await b.newContext({ viewport: { width: 390, height: 844 } });
await c.addInitScript(() => { try { localStorage.setItem("ls_user", JSON.stringify({ name: "Testkind", level: "groep6", role: "leerling" })); localStorage.setItem("lk_onboarded", "1"); } catch {} });
const p = await c.newPage();
p.on("pageerror", (e) => { if (!/Unexpected token '<'/.test(String(e))) console.log("PAGEERROR", String(e).slice(0, 160)); });
const klik = (src) => p.evaluate((src) => { const re = new RegExp(src); const el = [...document.querySelectorAll("button, a")].find((x) => re.test(x.innerText) && !x.disabled); if (!el) return null; el.click(); return el.innerText.trim(); }, src);
// positie van de naamlabels (Html-overlay) = waar de bots staan
const labels = () => p.evaluate(() => [...document.querySelectorAll("div")].filter((d) => /^(✅ |❌ )?(Sem|Noor|Milan|Yara|Daan|Liv|Finn|Zoë|Luuk|Sara)$/.test(d.innerText) && d.children.length === 0).map((d) => { const r = d.getBoundingClientRect(); return `${d.innerText}@${Math.round(r.x)},${Math.round(r.y)}`; }).sort().join(" "));
await p.goto(BASE + "/?ic=1", { waitUntil: "networkidle" }); await p.waitForTimeout(3000);
await klik("Spelletje"); await p.waitForTimeout(700); await klik("Bedrieger");
await p.waitForSelector('button[aria-label="Instellingen"]', { timeout: 20000 });
await p.waitForTimeout(1500); const l1 = await labels(); await p.screenshot({ path: `${S}/bots-1.png` });
await p.waitForTimeout(5000); const l2 = await labels(); await p.screenshot({ path: `${S}/bots-2.png` });
console.log("t1:", l1); console.log("t2:", l2); console.log("bewogen:", l1 !== l2);
await klik("Start spel"); await p.waitForTimeout(4500);
const l3 = await labels(); await p.waitForTimeout(1500); const l4 = await labels(); await p.screenshot({ path: `${S}/bots-som.png` });
console.log("som:", l4); console.log("stil tijdens som:", l3 === l4);
await b.close();
