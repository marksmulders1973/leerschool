// Rooktest 🚩 "Klopt er iets niet?" op een paar schermen (29 sep 2026).
import { chromium } from "playwright";
const BASE = process.env.BASE || "http://localhost:4799";
const b = await chromium.launch({ headless: true });
for (const pad of (process.env.PADEN || "/vandaag,/kwartiercheck").split(",")) {
  const c = await b.newContext({ viewport: { width: 390, height: 844 } });
  await c.addInitScript(() => { try { localStorage.setItem("ls_user", JSON.stringify({ name: "Testvlag", level: "groep6", role: "leerling" })); localStorage.setItem("lk_onboarded", "1"); } catch {} });
  const p = await c.newPage(); const fouten = [];
  p.on("pageerror", (e) => { if (!/Unexpected token '<'/.test(String(e))) fouten.push(String(e).slice(0, 140)); });
  await p.goto(BASE + pad, { waitUntil: "networkidle" }); await p.waitForTimeout(4000);
  const vlag = await p.evaluate(() => [...document.querySelectorAll("button")].some((x) => /Klopt er iets niet/.test(x.innerText)));
  console.log(pad, "| vlag:", vlag, "| fouten:", fouten.length ? fouten.join(" / ") : 0, "|", (await p.evaluate(() => document.body.innerText.replace(/\s+/g, " ").slice(0, 90))));
  await c.close();
}
await b.close();
