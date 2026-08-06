import { chromium } from "playwright-core";
const CLIP = "C:\\Users\\mark-\\Desktop\\Reclame\\clip-2026-08-05.mp4";
const b = await chromium.connectOverCDP("http://localhost:9222", { timeout: 40000 });
const page = b.contexts()[0].pages()[0];
await page.bringToFront();

// Subvenster "Text attachment" sluiten.
await page.evaluate(() => {
  const k = Array.from(document.querySelectorAll('div[role="button"],button,span')).find((x) =>
    /^(Cancel|Annuleren)$/.test(x.textContent.trim())
  );
  if (k) k.click();
});
await page.waitForTimeout(2500);

const staat = await page.evaluate(() => ({
  videos: document.querySelectorAll("video").length,
  caption: (document.querySelector('[contenteditable="true"]')?.textContent || "").slice(0, 50),
  knoppen: Array.from(document.querySelectorAll('div[role="button"],button'))
    .map((x) => x.textContent.trim())
    .filter((t) => t && t.length < 25)
    .slice(0, 20),
}));
console.log(JSON.stringify(staat, null, 1));
await page.screenshot({ path: process.env.TEMP + "\\threads-fix.png", timeout: 15000 }).catch(() => {});
await b.close();
