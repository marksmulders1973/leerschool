// 18 okt 2026: in het park tijdens "Wie is de bedrieger?" alleen wie meedoet (geen bezoekers/maatje/taferelen).
import { chromium } from "playwright";
const S = process.env.SHOTS || ".";
const BASE = process.env.BASE || "http://localhost:4799";
const b = await chromium.launch({ headless: true, args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"] });
const c = await b.newContext({ viewport: { width: 390, height: 844 } });
await c.addInitScript(() => { try { localStorage.setItem("ls_user", JSON.stringify({ name: "Testkind", level: "groep6", role: "leerling" })); localStorage.setItem("lk_onboarded", "1"); } catch {} });
const p = await c.newPage();
const fouten = []; p.on("pageerror", (e) => { if (!/Unexpected token '<'/.test(String(e))) fouten.push(String(e).slice(0, 200)); });
const klik = (src) => p.evaluate((src) => { const re = new RegExp(src); const el = [...document.querySelectorAll("button, a")].find((x) => re.test(x.innerText) && !x.disabled); if (!el) return null; el.click(); return el.innerText.trim(); }, src);
await p.goto(BASE + "/?ic=1", { waitUntil: "networkidle" }); await p.waitForTimeout(3000);
await klik("Spelletje"); await p.waitForTimeout(700); await klik("Bedrieger");
await p.waitForSelector('button[aria-label="Instellingen"]', { timeout: 20000 });
await klik("Start spel");
for (let i = 0; i < 30 && !(await klik("Naar het park")); i++) { await p.waitForTimeout(1000); if (await klik("Nog een som")) await p.waitForTimeout(500); }
await p.waitForTimeout(20000);
const tekst = await p.evaluate(() => document.body.innerText.replace(/\s+/g, " "));
console.log("park-tekst:", tekst.slice(0, 300));
await p.screenshot({ path: `${S}/park-spel.png` });
console.log("fouten:", fouten.length ? fouten : "geen");
await b.close();
