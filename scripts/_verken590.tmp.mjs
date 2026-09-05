import { chromium } from "playwright";
import fs from "node:fs";
const SP = "C:/Users/mark-/AppData/Local/Temp/claude/C--Users-mark-/da733bb4-23f1-408f-9d78-83a7521ccf0c/scratchpad";
const b = await chromium.connectOverCDP("http://127.0.0.1:9222", { timeout: 15000 });
const logs = [];
const mk = async () => { const ctx = await b.newContext(); const p = await ctx.newPage(); p.on("pageerror", e => logs.push("pageerror: " + e.message.slice(0, 300))); p.on("console", m => { if (m.type() === "error" && !/Receiving end|extension/i.test(m.text())) logs.push("console: " + m.text().slice(0, 400)); }); p.on("dialog", d => d.accept()); return [ctx, p]; };
const txtOf = async (p) => (await p.evaluate(() => document.body.innerText).catch(() => "")).replace(/\n+/g, " | ");
const knoppen = async (p) => (await p.evaluate(() => [...document.querySelectorAll("button")].map(b => b.innerText.replace(/\s+/g, " ").trim()).filter(Boolean))).slice(0, 50).join(" ‖ ");
const ga = async (p, u) => { await p.goto(u, { waitUntil: "domcontentloaded", timeout: 30000 }).catch(() => {}); await p.waitForTimeout(4000); };
const klikJs = async (p, re) => p.evaluate((src) => { const r = new RegExp(src); const el = [...document.querySelectorAll("button")].find(b => r.test(b.innerText)); if (el) { el.click(); return el.innerText.replace(/\s+/g, " ").slice(0, 50); } return null; }, re.source);
// A. Stop-crash reproduceren (proef-toets = PlayQuiz examen-modus)
let [ctx, p] = await mk(); await ga(p, "https://leerkwartier.app/");
await p.evaluate(() => localStorage.setItem("ls_user", JSON.stringify({ name: "Testkind Klaarzet", level: "groep8", role: "leerling", schoolType: "" })));
await ga(p, "https://leerkwartier.app/");
await klikJs(p, /Toets$/); await p.waitForTimeout(2500); await klikJs(p, /Rekenen & Wiskunde/); await p.waitForTimeout(2500); await klikJs(p, /Proef-toets/); await p.waitForTimeout(5000);
console.log("A knoppen in proef-toets:", await knoppen(p));
console.log("A stop:", await klikJs(p, /^✕ Stop/)); await p.waitForTimeout(1500);
console.log("A na stop:", (await txtOf(p)).slice(0, 200)); console.log("A knoppen:", await knoppen(p));
const bevestig = await klikJs(p, /Ja|Stoppen|Stop toets|Zeker/); console.log("A bevestig:", bevestig); await p.waitForTimeout(3000);
console.log("A eind:", (await txtOf(p)).slice(0, 160));
console.log("A LOGS:", logs.join("\n") || "geen"); logs.length = 0;
await ctx.close();
// B. STAP 3 = CitoLeerpadToets?
[ctx, p] = await mk(); await ga(p, "https://leerkwartier.app/");
await p.evaluate(() => localStorage.setItem("ls_user", JSON.stringify({ name: "Testkind Klaarzet", level: "groep8", role: "leerling", schoolType: "" })));
await ga(p, "https://leerkwartier.app/");
await klikJs(p, /Toets$/); await p.waitForTimeout(2500); console.log("B stap3:", await klikJs(p, /STAP 3/)); await p.waitForTimeout(4000);
console.log("B tekst:", (await txtOf(p)).slice(0, 300)); console.log("B knoppen:", await knoppen(p));
await ctx.close();
// C. leerkracht-dashboard
const tokL = JSON.parse(fs.readFileSync(SP + "/tok-leraar.json", "utf8"));
[ctx, p] = await mk(); await ga(p, "https://leerkwartier.app/");
await p.evaluate((tok) => localStorage.setItem("sb-uxqnzrymyjbcpuzqktdm-auth-token", JSON.stringify(tok)), tokL);
await ga(p, "https://leerkwartier.app/leerkracht"); await p.waitForTimeout(3000);
console.log("C knoppen:", await knoppen(p));
const t = await txtOf(p); const i = t.indexOf("Reviewleerling"); console.log("C Reviewleerling:", i >= 0 ? t.slice(Math.max(0, i - 200), i + 200) : "(niet op scherm)");
await ctx.close(); console.log("LOGS:", logs.join("\n") || "geen"); process.exit(0);
