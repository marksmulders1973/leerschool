// Threads-videopost in één doorloop (5 aug, tijdelijk).
import { chromium } from "playwright-core";

const CAPTION =
  "🎬 Zo werkt Leerkwartier: een kwartier per dag, écht begrijpen wat je leert — met uitleg die simpeler wordt tot het kwartje valt. Gratis oefenen voor de Doorstroomtoets, geen account nodig 👉 leerkwartier.app/?utm_source=threads&utm_campaign=reclameclip";
const CLIP = "C:\\Users\\mark-\\Desktop\\Reclame\\clip-2026-08-05.mp4";

const b = await chromium.connectOverCDP("http://localhost:9222", { timeout: 40000 });
const page = b.contexts()[0].pages()[0];
await page.bringToFront();
await page.goto("https://www.threads.com/", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(6000);
// Restjes van eerdere pogingen weggooien.
await page.evaluate(() => {
  const k = Array.from(document.querySelectorAll('div[role="button"],button')).find((x) =>
    /^(Weggooien|Discard|Niet opslaan)$/.test(x.textContent.trim())
  );
  if (k) k.click();
});
await page.waitForTimeout(1500);

// Composer openen (brede layout: tekstregel; smalle layout: "+"-knop onderin).
let open = false;
try {
  await page.locator("text=/Wat is er nieuw|What's new/").locator("visible=true").first().click({ timeout: 5000 });
  open = true;
} catch { /* smal */ }
if (!open) {
  const m = await page.evaluate(() => ({ w: window.innerWidth, h: window.innerHeight }));
  await page.mouse.click(m.w / 2, m.h - 35);
}
await page.waitForTimeout(2500);

// Caption typen.
const editor = page.locator('[contenteditable="true"]').locator("visible=true").first();
await editor.click({ timeout: 15000 });
await page.keyboard.type(CAPTION, { delay: 3 });
await page.waitForTimeout(1000);

// Clip via CDP direct in het file-input.
const client = await page.context().newCDPSession(page);
const { result } = await client.send("Runtime.evaluate", { expression: `document.querySelector('input[type="file"]')` });
await client.send("DOM.setFileInputFiles", { files: [CLIP], objectId: result.objectId });
console.log("clip gezet — verwerken…");
await page.waitForTimeout(25000);
await page.screenshot({ path: process.env.TEMP + "\\ta-1.png", timeout: 15000 }).catch(() => {});

// Post-knop met échte afmetingen zoeken en met een echte muisklik raken.
const knop = await page.evaluate(() => {
  const kandidaten = Array.from(document.querySelectorAll('div[role="button"],button')).filter(
    (x) => /^(Post|Plaatsen)$/.test(x.textContent.trim())
  );
  for (const k of kandidaten.reverse()) {
    const r = k.getBoundingClientRect();
    if (r.width > 10 && r.height > 10) return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
  }
  return null;
});
if (!knop) { console.log(JSON.stringify({ gepost: false, reden: "geen zichtbare Post-knop" })); process.exit(2); }
await page.mouse.click(knop.x, knop.y);
console.log("post geklikt — uploaden…");
await page.waitForTimeout(35000);

await page.goto("https://www.threads.com/@leerkwartier", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(9000);
const ok = await page.evaluate(() => document.body.innerText.includes("Zo werkt Leerkwartier"));
await page.screenshot({ path: process.env.TEMP + "\\ta-2.png", timeout: 15000 }).catch(() => {});
console.log(JSON.stringify({ gepost: ok }));
await b.close();
