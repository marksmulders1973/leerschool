// 18 okt 2026: kapotte attracties in het bedriegerspel — kapot zien, som goed, reparatie-animatie.
import { chromium } from "playwright";
const S = process.env.SHOTS || ".";
const BASE = process.env.BASE || "http://localhost:4799";
const b = await chromium.launch({ headless: true, args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"] });
const c = await b.newContext({ viewport: { width: 390, height: 844 } });
await c.addInitScript(() => { try { localStorage.setItem("ls_user", JSON.stringify({ name: "Testkind", level: "groep6", role: "leerling" })); localStorage.setItem("lk_onboarded", "1"); } catch {} });
const p = await c.newPage();
const fouten = []; p.on("pageerror", (e) => { if (!/Unexpected token '<'/.test(String(e))) fouten.push(String(e).slice(0, 200)); });
p.on("console", (m) => { if (m.type() === "error" || /Uncaught|promise|DBG/i.test(m.text())) console.log("CONSOLE-ERR", m.text().slice(0, 250)); });
const klik = (src) => p.evaluate((src) => { const re = new RegExp(src); const el = [...document.querySelectorAll("button, a")].find((x) => re.test(x.innerText) && !x.disabled); if (!el) return null; el.click(); return el.innerText.trim(); }, src);
await p.goto(BASE + "/?ic=1", { waitUntil: "networkidle" }); await p.waitForTimeout(3000);
await klik("Spelletje"); await p.waitForTimeout(700); await klik("Bedrieger");
await p.waitForSelector('button[aria-label="Instellingen"]', { timeout: 20000 });
await klik("Start spel");
for (let i = 0; i < 30 && !(await klik("Naar het park")); i++) { await p.waitForTimeout(1000); await klik("Nog een som"); }
await p.waitForFunction(() => window.__imposter && window.__imposter.st() && window.__imposter.st().fase === "spel", { timeout: 40000 });
await p.waitForTimeout(9000); // rolkaart weg
// attracties vlak voor de speler zetten (speler staat op 0,8 en kijkt naar -z)
const info = await p.evaluate(() => { const st = window.__imposter.st(); const pos = window.__imposter.pos() || { x: 0, z: 8 };
  st.stations.forEach((s, k) => { const h = (k / 6) * Math.PI * 2; s.x = pos.x + Math.sin(h) * 10; s.z = pos.z - Math.cos(h) * 10; }); st.stations[0].x = pos.x; st.stations[0].z = pos.z - 4;
  return { pos, rol: st.spelers.find((s) => s.id === window.__imposter.mijnId).rol, namen: st.stations.slice(0, 3).map((s) => `${s.naam}(${s.soort}) kapot=${s.kapot}`) }; });
console.log("info:", JSON.stringify(info));
await p.waitForTimeout(1500); await p.screenshot({ path: `${S}/attr-kapot.png` });
// som oplossen
await p.waitForTimeout(800); console.log("knop:", await klik("Repareer de")); await p.waitForTimeout(7000); console.log("diag:", await p.evaluate(() => { const h = document.body.innerHTML; const k = h.indexOf("REPAREER DE"); return { heeftKaart: k >= 0, stuk: k >= 0 ? h.slice(k, k + 300).replace(/<[^>]+>/g, " | ") : null, knopNog: [...document.querySelectorAll("button")].map((b) => b.innerText).filter((t) => /Repareer|Nieuwe som|Later/.test(t)) }; }));
console.log("fouten tot nu:", fouten);
const kaart = await p.evaluate(() => { const t = document.body.innerText.replace(/\s+/g, " "); return t.match(/REPAREER DE [A-Z]+ .{0,120}/)?.[0] || ("GEEN KAART: " + t.slice(0, 300)); });
console.log("taakkaart:", kaart.replace(/\n+/g, " | "));
const q = kaart.match(/Wat is (.+)\?/)?.[1] || "";
const goed = (() => { const m = q.replace(/,/g, "."); const pr = m.match(/^([\d.]+)% van ([\d.]+)$/); if (pr) return (+pr[1] * +pr[2]) / 100; return Function(`return (${m.replace(/×/g, "*").replace(/ : /g, "/").replace(/−/g, "-")})`)(); })();
const gekozen = await p.evaluate((g) => { const bt = [...document.querySelectorAll("button")].find((x) => x.innerText.trim().replace(",", ".") === String(g)); if (bt) { bt.click(); return bt.innerText; } return null; }, goed);
console.log("antwoord:", goed, "geklikt:", gekozen);
await p.waitForTimeout(400);
console.log("na antwoord:", (await p.evaluate(() => document.body.innerText.match(/(Goed zo[^\n]*|Nog niet gerepareerd[^\n]*)/)?.[0])));
// headless rendert maar een paar beelden per seconde: de animatie duurt hier veel langer dan op een telefoon
await klik("Repareren");
await p.waitForTimeout(4000); await p.screenshot({ path: `${S}/attr-confetti.png` });
await p.waitForTimeout(25000); await p.screenshot({ path: `${S}/attr-heel.png` });
console.log("na reparatie:", await p.evaluate(() => { const st = window.__imposter.st(); const s = st.stations[0]; return `kapot=${s.kapot} door=${s.gemaaktDoor} taken=${st.takenKlaar}/${st.takenTotaal} log=${st.log[0]?.tekst}`; }));
console.log("fouten:", fouten.length ? fouten : "geen");
await b.close();
