// Verkenner: voert een reeks klikken uit (argv als "tekst" of "url:/pad") en print de schermtekst na elke stap.
import { chromium } from "playwright";
import { koppelStub, maakStore, TELEFOON, CHROMIUM } from "../ouderadvies/stubServer.mjs";
const BASIS = process.env.BASIS || "http://localhost:4173";
const b = await chromium.launch({ executablePath: CHROMIUM });
const ctx = await b.newContext(TELEFOON); await koppelStub(ctx, maakStore(), {});
const p = await ctx.newPage();
await p.goto(BASIS + "/"); await p.waitForTimeout(1500);
for (const s of process.argv.slice(2)) {
  if (s.startsWith("url:")) await p.goto(BASIS + s.slice(4));
  else if (s.startsWith("fill:")) { const [ph, v] = s.slice(5).split("="); await p.getByPlaceholder(ph).first().fill(v); }
  else if (s.startsWith("re:")) await p.getByRole("button", { name: new RegExp(s.slice(3)) }).first().click({ timeout: 5000 }).catch(async () => p.getByText(new RegExp(s.slice(3))).first().click());
  else await p.getByText(s, { exact: false }).first().click({ timeout: 5000 });
  await p.waitForTimeout(1500);
  const t = (await p.evaluate(() => (document.querySelector("#root") || document.body).innerText)).replace(/\n{2,}/g, "\n");
  console.log(`\n===== na "${s}" → ${p.url()}\n` + t.slice(0, 1800));
  console.log("KNOPPEN:", (await p.$$eval("#root button", (els) => els.map((e) => e.innerText.trim().replace(/\s+/g, " ")).filter(Boolean))).join(" | ").slice(0, 900));
}
if (process.env.SHOT) await p.screenshot({ path: process.env.SHOT });
await b.close();
