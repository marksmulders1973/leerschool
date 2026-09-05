import { chromium } from "playwright";
import fs from "node:fs";
const SP = "C:/Users/mark-/AppData/Local/Temp/claude/C--Users-mark-/da733bb4-23f1-408f-9d78-83a7521ccf0c/scratchpad";
const t0 = Date.now(); const log = (...a) => console.log(((Date.now() - t0) / 1000).toFixed(1) + "s", ...a);
for (let i = 0; i < 40; i++) { const html = await (await fetch("https://leerkwartier.app/?n=" + Date.now(), { cache: "no-store" })).text(); const js = html.match(/assets\/main-[A-Za-z0-9_-]+\.js/)?.[0]; const src = js ? await (await fetch("https://leerkwartier.app/" + js)).text() : ""; const v = src.match(/=(5\d\d);/)?.[1]; if (v === "590") { log("live = v590"); break; } if (i === 39) { log("deploy niet gezien, live =", v); process.exit(1); } await new Promise(r => setTimeout(r, 6000)); }
const b = await chromium.connectOverCDP("http://127.0.0.1:9222", { timeout: 15000 });
const errs = [];
const mk = async () => { const ctx = await b.newContext(); const p = await ctx.newPage(); p.on("pageerror", e => { if (!/Receiving end/.test(e.message)) errs.push(e.message.slice(0, 200)); }); p.on("dialog", d => d.accept()); return [ctx, p]; };
const txtOf = async (p) => (await p.evaluate(() => document.body.innerText).catch(() => "")).replace(/\n+/g, " | ");
const ga = async (p, u) => { await p.goto(u, { waitUntil: "domcontentloaded", timeout: 30000 }).catch(() => {}); await p.waitForTimeout(4000); };
const klikJs = async (p, re) => p.evaluate((src) => { const r = new RegExp(src); const el = [...document.querySelectorAll("button")].find(b => r.test(b.innerText)); if (el) { el.click(); return el.innerText.replace(/\s+/g, " ").slice(0, 50); } return null; }, re.source);
// 1. KIND — oefen-Doorstroomtoets (proef-toets rekenen)
let [ctx, p] = await mk();
await ga(p, "https://leerkwartier.app/");
await p.evaluate(() => { localStorage.setItem("ls_user", JSON.stringify({ name: "Testkind Klaarzet", level: "groep8", role: "leerling", schoolType: "" })); localStorage.setItem("lk_koppelingen", JSON.stringify({ "testkind klaarzet": { ouder: { link_id: "795a0485-f7a8-40ed-990e-c8ec272de641", van_wie: "Testouder", at: Date.now() } } })); });
await ga(p, "https://leerkwartier.app/");
log("toets-tab:", await klikJs(p, /Toets$/)); await p.waitForTimeout(2500);
log("rekenen:", await klikJs(p, /Rekenen & Wiskunde/)); await p.waitForTimeout(2500);
log("proef:", await klikJs(p, /Proef-toets/)); await p.waitForTimeout(4000);
log("intro:", (await txtOf(p)).slice(0, 200));
log("start:", await klikJs(p, /Start|Begin|Ga van start/)); await p.waitForTimeout(5000);
log("vraag 1:", (await txtOf(p)).slice(0, 220));
log("weet-niet:", await klikJs(p, /Ik weet het niet/)); await p.waitForTimeout(1500);
const t1 = await txtOf(p); const j = t1.indexOf("Eerlijk gezegd"); log("NOTE:", j >= 0 ? t1.slice(j, j + 220) : "(geen notitie) " + t1.slice(0, 200));
log("volgende:", await klikJs(p, /Volgende/)); await p.waitForTimeout(2000);
log("vraag 2:", (await txtOf(p)).match(/Vraag \d+ van \d+/)?.[0]);
log("stop:", await klikJs(p, /Stop/)); await p.waitForTimeout(5000);
const t2 = await txtOf(p); const k = t2.indexOf("weet ik niet"); log("UITSLAG:", t2.slice(0, 120)); log("uitslag weet-niet:", k >= 0 ? t2.slice(Math.max(0, k - 100), k + 60) : "(niet gevonden)");
await ctx.close();
// 2. OUDER
const tokO = JSON.parse(fs.readFileSync(SP + "/tok-ouder.json", "utf8"));
[ctx, p] = await mk(); await ga(p, "https://leerkwartier.app/");
await p.evaluate((tok) => localStorage.setItem("sb-uxqnzrymyjbcpuzqktdm-auth-token", JSON.stringify(tok)), tokO);
await ga(p, "https://leerkwartier.app/mijn"); if (!/\/mijn/.test(p.url())) await ga(p, "https://leerkwartier.app/mijn"); await p.waitForTimeout(3000);
const idx = await p.evaluate(() => { const all = [...document.querySelectorAll("button")].filter(b => /Wat precies/.test(b.innerText)); const kop = [...document.querySelectorAll("*")].find(e => e.children.length === 0 && /Recente activiteit/.test(e.textContent)); return kop ? all.findIndex(b => kop.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) : -1; });
if (idx >= 0) { await p.locator("button").filter({ hasText: /Wat precies/ }).nth(idx).click(); await p.waitForTimeout(2500); }
const t3 = await txtOf(p); const r = t3.indexOf("Recente activiteit"); log("OUDER:", t3.slice(r, r + 420)); log("ouder 'oefen dit':", (t3.match(/oefen dit/g) || []).length);
await ctx.close();
// 3. LEERKRACHT
const tokL = JSON.parse(fs.readFileSync(SP + "/tok-leraar.json", "utf8"));
[ctx, p] = await mk(); await ga(p, "https://leerkwartier.app/");
await p.evaluate((tok) => localStorage.setItem("sb-uxqnzrymyjbcpuzqktdm-auth-token", JSON.stringify(tok)), tokL);
await ga(p, "https://leerkwartier.app/leerkracht"); await p.waitForTimeout(3000);
log("LEERKRACHT:", (await txtOf(p)).slice(0, 300));
log("klik leerling:", await klikJs(p, /Reviewleerling/)); await p.waitForTimeout(3000);
const t4 = await txtOf(p); const tz = t4.indexOf("Toetsen van"); log("toetsen-blok:", tz >= 0 ? t4.slice(tz, tz + 200) : "(geen toetsen-blok) " + t4.slice(0, 300));
log("wat precies:", await klikJs(p, /Wat precies/)); await p.waitForTimeout(2500);
const t5 = await txtOf(p); const tz2 = t5.indexOf("Toetsen van"); log("LEERKRACHT-DETAIL:", t5.slice(tz2, tz2 + 520)); log("leerkracht 'oefen dit':", (t5.match(/oefen dit/g) || []).length);
await p.screenshot({ path: "C:/Users/mark-/Desktop/dagrapport/test-leerkracht-oefen-dit-2026-09-05.png" }).catch(() => {});
await ctx.close(); console.log("ERRORS:", errs.length ? errs.join("\n") : "geen"); process.exit(0);
