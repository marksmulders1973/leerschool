// 18 okt 2026: aantal bedriegers in het tandwiel. A = leider kiest 3, B = gast via de code.
// Controleert: gast ziet de keuze, loting levert 3 bedriegers op, teksten in meervoud.
import { chromium } from "playwright";
const S = process.env.SHOTS || ".";
const BASE = process.env.BASE || "http://localhost:4799";
const b = await chromium.launch({ headless: true, args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"] });
const maak = async (naam) => {
  const c = await b.newContext({ viewport: { width: 390, height: 844 } });
  await c.addInitScript((n) => { try { localStorage.setItem("ls_user", JSON.stringify({ name: n, level: "groep6", role: "leerling" })); localStorage.setItem("lk_onboarded", "1"); } catch {} }, naam);
  const p = await c.newPage();
  p.on("pageerror", (e) => { if (!/Unexpected token '<'/.test(String(e))) console.log(`PAGEERROR[${naam}]`, String(e).slice(0, 160)); });
  p.__track = []; p.on("console", (m) => { const t = m.text(); if (/bedrieger_(loting|aantal)/.test(t)) p.__track.push(t.slice(0, 200)); });
  return p;
};
const klik = (p, src) => p.evaluate((src) => { const re = new RegExp(src); const el = [...document.querySelectorAll("button, a")].find((x) => re.test(x.innerText) && !x.disabled); if (!el) return null; el.click(); return el.innerText.trim(); }, src);
const tekst = (p) => p.evaluate(() => document.body.innerText.replace(/\s+/g, " "));
const naarKamer = async (p) => { await p.goto(BASE + "/?ic=1", { waitUntil: "networkidle" }); await p.waitForTimeout(3000); await klik(p, "Spelletje"); await p.waitForTimeout(700); await klik(p, "Bedrieger"); await p.waitForSelector('button[aria-label="Instellingen"]', { timeout: 20000 }); };

const A = await maak("Testleider"), B = await maak("Testgast");
await naarKamer(A); await naarKamer(B);
await A.click('button[aria-label="Instellingen"]'); await A.waitForTimeout(400);
await A.click('[role="radio"]:has-text("3")'); await A.waitForTimeout(300);
const code = await A.evaluate(() => document.querySelector('[role="dialog"]')?.innerText.match(/\b\d{4}\b/)?.[0]);
console.log("A radio 3 gekozen:", await A.evaluate(() => document.querySelector('[role="radio"][aria-checked="true"]')?.innerText), "· code", code);
await A.screenshot({ path: `${S}/bedr-A-menu.png` });
await A.click('button[aria-label="Instellingen"]');

await B.click('button[aria-label="Instellingen"]'); await B.waitForTimeout(400);
await B.fill('input[aria-label="Code van een vriend"]', code); await klik(B, "^Meedoen$");
await B.waitForTimeout(5000);
await B.click('button[aria-label="Instellingen"]').catch(() => {}); await B.waitForTimeout(400);
const bMenu = await B.evaluate(() => document.querySelector('[role="dialog"]')?.innerText.replace(/\s+/g, " ") || "(menu dicht)");
console.log("B menu:", bMenu);
await B.screenshot({ path: `${S}/bedr-B-menu.png` });
console.log("A lobby:", (await tekst(A)).match(/Jij bent de leider.{0,200}/)?.[0]);
console.log("B lobby:", (await tekst(B)).match(/Je zit in de kamer.{0,220}/)?.[0]);

await klik(A, "Start spel");
await A.waitForTimeout(4200);
// A antwoordt meteen goed, B wacht (dan moeten bots/bijloting de andere 2 plekken vullen)
const goed = await A.evaluate(() => { const q = [...document.querySelectorAll("button")].filter((x) => /^[^←▶🔁🐾]/.test(x.innerText) && x.closest("div[style*='grid']")); return q.length; });
console.log("antwoordknoppen A:", goed);
const vraag = await A.evaluate(() => window.__lkVraag || null);
// juiste antwoord niet bekend in de DOM vóór klikken → klik optie 0 en kijk wat er gebeurt
await A.evaluate(() => { const g = [...document.querySelectorAll("div[style*='grid'] button")]; g[0] && g[0].click(); });
await A.waitForTimeout(23000);
const tA = await tekst(A), tB = await tekst(B);
console.log("A uitslag:", tA.match(/(Jij bent .{0,40}|Het spel begint.{0,60}).{0,40}/)?.[0], "|", tA.match(/(Jij was|Jij bent erbij|Anderen waren|Iemand anders).{0,200}/)?.[0]);
console.log("B uitslag:", tB.match(/(Jij bent .{0,40}|Het spel begint.{0,60}).{0,40}/)?.[0], "|", tB.match(/(Jij was|Jij bent erbij|Anderen waren|Iemand anders|Niemand goed|Wacht op).{0,200}/)?.[0]);
console.log("badge:", tA.match(/🕵️ Bedrieger[^·]*·[^·]*·?[^·]*bedriegers?/)?.[0]);
await A.screenshot({ path: `${S}/bedr-A-uitslag.png` }); await B.screenshot({ path: `${S}/bedr-B-uitslag.png` });
await b.close();
