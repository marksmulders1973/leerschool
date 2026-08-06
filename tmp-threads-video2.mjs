// Threads-videopost, definitieve route: bestand via CDP DOM.setFileInputFiles
// rechtstreeks in het file-input (omzeilt onzichtbare knoppen). Composer staat
// al open met de caption uit de vorige poging.
import { chromium } from "playwright-core";

const CLIP = "C:\\Users\\mark-\\Desktop\\Reclame\\clip-2026-08-05.mp4";

const b = await chromium.connectOverCDP("http://localhost:9222", { timeout: 40000 });
const page = b.contexts()[0].pages()[0];
await page.bringToFront();

const heeftCaption = await page.evaluate(() =>
  (document.querySelector('[contenteditable="true"]')?.textContent || "").includes("Zo werkt Leerkwartier")
);
if (!heeftCaption) { console.log(JSON.stringify({ gepost: false, reden: "composer niet open met caption" })); process.exit(2); }

const client = await page.context().newCDPSession(page);
const { result } = await client.send("Runtime.evaluate", {
  expression: `document.querySelector('input[type="file"]')`,
});
await client.send("DOM.setFileInputFiles", { files: [CLIP], objectId: result.objectId });
console.log("clip in file-input gezet — wachten op verwerking…");
await page.waitForTimeout(25000);
await page.screenshot({ path: process.env.TEMP + "\\threads-v2-pre.png", timeout: 15000 }).catch(() => {});

await page
  .locator('div[role="button"], button')
  .filter({ hasText: /^(Post|Plaatsen)$/ })
  .locator("visible=true")
  .last()
  .click({ timeout: 15000 });
console.log("post geklikt — uploaden…");
await page.waitForTimeout(25000);

await page.goto("https://www.threads.com/@leerkwartier", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(8000);
const ok = await page.evaluate(() => document.body.innerText.includes("Zo werkt Leerkwartier"));
await page.screenshot({ path: process.env.TEMP + "\\threads-v2-check.png", timeout: 15000 }).catch(() => {});
console.log(JSON.stringify({ gepost: ok }));
await b.close();
