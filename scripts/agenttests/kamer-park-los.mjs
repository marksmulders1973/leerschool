// Los: opent het gedeelde park direct met ?samen=CODE (+ varianten) en kijkt of park_room_get wordt opgevraagd.
import { chromium } from "playwright";
const BASE = process.env.BASE || "http://localhost:4799", CODE = process.env.CODE;
const b = await chromium.launch({ headless: true, args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"] });
for (const q of [`samen=${CODE}`, `samen=${CODE}&game=1&gast=1`, `samen=${CODE}&game=1&kamer=1`]) {
  const c = await b.newContext({ viewport: { width: 390, height: 844 } });
  await c.addInitScript(() => { try { localStorage.setItem("ls_user", JSON.stringify({ name: "Los", level: "groep6", role: "leerling" })); localStorage.setItem("lk_onboarded", "1"); } catch {} });
  const p = await c.newPage(); const req = []; const log = [];
  p.on("request", (r) => { if (/rpc|zoo_state/.test(r.url())) req.push(r.url().replace(/^.*\/rest\/v1\//, "").replace(/\?.*/, "")); });
  p.on("response", async (r) => { if (/park_room_get/.test(r.url())) { let t = ""; try { t = (await r.text()).slice(0, 120); } catch { t = "?"; } req.push(`→${r.status()} ${t}`); } });
  p.on("console", (m) => { const t = m.text(); if (!/GL Driver|THREE/.test(t)) log.push(t.slice(0, 140)); });
  await p.goto(`${BASE}/dierentuin?${q}`, { waitUntil: "load" }); await p.waitForTimeout(+(process.env.WACHT || 15000));
  const t = await p.evaluate(() => document.body.innerText.replace(/\s+/g, " ").slice(0, 90));
  console.log(q, "\n  url:", p.url().replace(BASE, ""), "\n  req:", req.join(","), "\n  tekst:", t, "\n  log:", JSON.stringify(log.slice(-5)));
  await c.close();
}
await b.close();
