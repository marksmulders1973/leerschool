// Twee browsers: A = leider, B = gast via de 4-cijferige code. Lokaal (preview) mét echte Supabase Realtime.
import { chromium } from "playwright";
const S = process.env.SHOTS || ".";
const BASE = process.env.BASE || "http://localhost:4799";
const b = await chromium.launch({ headless: true, args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"] });
const maak = async (naam) => {
  const c = await b.newContext({ viewport: { width: 390, height: 844 } });
  await c.addInitScript((n) => { try { localStorage.setItem("ls_user", JSON.stringify({ name: n, level: "groep6", role: "leerling" })); localStorage.setItem("lk_onboarded", "1"); } catch {} }, naam);
  const p = await c.newPage();
  p.on("pageerror", (e) => { if (!/Unexpected token '<'/.test(String(e))) console.log(`PAGEERROR[${naam}]`, String(e).slice(0, 160)); });
  p.__req = {}; p.on("request", (r) => { const u = r.url().replace(/\?.*$/, "").replace(/^https?:\/\/[^/]+/, ""); p.__req[u] = (p.__req[u] || 0) + 1; });
  p.__log = []; p.on("console", (m) => { p.__log.push(m.text().slice(0, 160)); if (p.__log.length > 40) p.__log.shift(); });
  p.on("console", (m) => { const t = m.text(); if (/diag|parkRoom|bedrieger|Error|error|fout|niet ingelogd|park_room/i.test(t) && !/Unexpected token/.test(t)) console.log(`CONSOLE[${naam}]`, t.slice(0, 200)); });
  p.on("requestfailed", (r) => { if (/supabase|rpc/.test(r.url())) console.log(`REQFAIL[${naam}]`, r.url().slice(0, 120), r.failure()?.errorText); });
  return p;
};
const klik = async (p, src) => { for (let i = 0; i < 3; i++) { try { return await klik1(p, src); } catch (e) { if (!/context was destroyed/.test(String(e))) throw e; await p.waitForTimeout(1500); } } return null; };
const klik1 = (p, src) => p.evaluate((src) => { const re = new RegExp(src); const el = [...document.querySelectorAll("button, a")].find((x) => re.test(x.innerText) && !x.disabled); if (!el) return null; el.click(); return el.innerText.trim(); }, src);
const tekst = (p) => p.evaluate(() => document.body.innerText.replace(/\s+/g, " "));
const naarKamer = async (p) => { await p.goto(BASE + "/?ic=1", { waitUntil: "networkidle" }); await p.waitForTimeout(3000); await klik(p, "Spelletje"); await p.waitForTimeout(700); await klik(p, "Bedrieger"); await p.waitForSelector('button[aria-label="Instellingen"]', { timeout: 20000 }).catch(() => console.log("geen kamer bij", p.url())); };

const A = await maak("Testleider"), B = await maak("Testgast");
await naarKamer(A); await naarKamer(B);
await A.click('button[aria-label="Instellingen"]'); await A.waitForTimeout(500);
const code = await A.evaluate(() => document.querySelector('[role="dialog"]')?.innerText.match(/\b\d{4}\b/)?.[0]);
console.log("1 code A:", code);
await A.click('button[aria-label="Instellingen"]');
await B.click('button[aria-label="Instellingen"]'); await B.waitForTimeout(400);
await B.fill('input[aria-label="Code van een vriend"]', code);
await klik(B, "^Meedoen$"); await B.waitForTimeout(4500);
const tb = await tekst(B), ta = await tekst(A);
console.log("2 B gast:", /kamer van Testleider/.test(tb), "| A ziet gast:", /1 vriend/.test(ta), "| A badge:", (ta.match(/Bedrieger · \d+ spelers[^·]*·?[^S]*/) || [""])[0].slice(0, 40));
await A.screenshot({ path: S + "/km-A-lobby.png" }).catch(() => {}); await B.screenshot({ path: S + "/km-B-lobby.png" }).catch(() => {});
// start
await klik(A, "Start spel"); await A.waitForTimeout(4200);
const [sa, sb] = [await tekst(A), await tekst(B)];
const vraagA = (sa.match(/⏱ \d+/) || [])[0], vraagB = (sb.match(/⏱ \d+/) || [])[0];
console.log("3 som bij A:", !!vraagA, "| bij B:", !!vraagB);
// B antwoordt goed (juiste optie via window? we lezen de vraag-opties en kiezen via evaluate op React-state is niet mogelijk → probeer alle opties? Nee: één klik. We pakken het antwoord uit de muurtekst niet. Fallback: B klikt optie 1..4 tot groen.)
const antwoordGoed = async (p) => {
  const n = await p.evaluate(() => [...document.querySelectorAll("button")].filter((x) => x.closest("div")?.style?.gridTemplateColumns).length);
  // eerste klik is de enige die telt; kies de optie waarvan we niet weten of hij goed is → probeer via kleur na klik
  await p.evaluate(() => { const opts = [...document.querySelectorAll("button")].filter((x) => x.closest("div")?.style?.gridTemplateColumns); opts[0]?.click(); });
  await p.waitForTimeout(600);
  return p.evaluate(() => /Goed!/.test(document.body.innerText) ? "goed" : /Helaas/.test(document.body.innerText) ? "fout" : "?");
};
const rb = await antwoordGoed(B); console.log("4 B antwoord:", rb);
await B.waitForTimeout(1500);
if (rb !== "goed") { const ra = await antwoordGoed(A); console.log("   A antwoord:", ra); }
await A.waitForTimeout(17000); // bots of mens beslissen binnen 20 s
const [ua, ub] = [await tekst(A), await tekst(B)];
console.log("5 uitslag A:", /Jij was de snelste|Iemand anders was sneller|Niemand goed/.test(ua) ? (ua.match(/Jij was de snelste|Iemand anders was sneller|Niemand goed/) || [])[0] : "?", "| B:", (ub.match(/Jij was de snelste|Iemand anders was sneller|Niemand goed|Wacht op/) || ["?"])[0]);
await A.screenshot({ path: S + "/km-A-uitslag.png" }).catch(() => {}); await B.screenshot({ path: S + "/km-B-uitslag.png" }).catch(() => {});
// naar het park
const naar = await klik(A, "Naar het park"); console.log("6 A klikt:", naar);
await A.waitForTimeout(30000); await B.waitForTimeout(1000);
console.log("7 URL A:", A.url().replace(BASE, ""), "| URL B:", B.url().replace(BASE, ""));
await A.waitForTimeout(12000);
const [pa, pb] = [await tekst(A), await tekst(B)];
console.log("7b A status:", JSON.stringify(await A.evaluate(() => ({ room: window.__parkRoomStatus || null, auth: Object.keys(localStorage).filter((k) => /sb-.*auth/.test(k)).length, autoRest: sessionStorage.getItem("lk_bedrieger_auto") ? "nog aanwezig" : "weg" }))));
console.log("7c A console:", JSON.stringify(A.__log.slice(-12)));
console.log("7c A rpc/rest:", JSON.stringify(Object.entries(A.__req).filter(([u]) => /rpc|zoo_state/.test(u))), "| B rpc/rest:", JSON.stringify(Object.entries(B.__req).filter(([u]) => /rpc|zoo_state/.test(u))));
console.log("7c A log:", JSON.stringify(A.__log.filter((t) => /Lock|parkRoom|auth|bedrieger|Error/i.test(t)).slice(-8)));
console.log("7c A requests (top):", JSON.stringify(Object.entries(A.__req).sort((a, b) => b[1] - a[1]).slice(0, 8)));
if (!(await A.evaluate(() => !!window.__parkRoomStatus))) { console.log("7d A herladen…", A.url()); A.__req = {}; A.__log = []; await A.reload({ waitUntil: "load" }); await A.waitForTimeout(12000); console.log("7d2 url", A.url(), "rpc:", JSON.stringify(Object.entries(A.__req).filter(([u]) => /rpc|zoo_state/.test(u))), "log:", JSON.stringify(A.__log.filter((t) => !/GL Driver|THREE/.test(t)).slice(-10))); console.log("7e A na herladen status:", JSON.stringify(await A.evaluate(() => ({ room: window.__parkRoomStatus?.status || null, tekst: document.body.innerText.slice(0, 120).replace(/\s+/g, " ") })))); }
console.log("8 park A:", (pa.match(/Wachten tot je vrienden|Start nu|Vraag \d|🧩|bouwer|bedrieger|Jij bent/i) || ["?"])[0], "| park B:", (pb.match(/Wachten tot|Spelleider|gast|Jij bent|🧩/i) || ["?"])[0]);
await A.screenshot({ path: S + "/km-A-park.png" }).catch(() => {}); await B.screenshot({ path: S + "/km-B-park.png" }).catch(() => {});
await A.waitForTimeout(8000);
const [qa, qb] = [await tekst(A), await tekst(B)];
console.log("9 A HUD:", /🧩/.test(qa), "| B HUD:", /🧩/.test(qb), "| B tekst:", qb.slice(0, 160));
await b.close();
