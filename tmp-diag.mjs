import { chromium } from "playwright-core";
const b = await chromium.connectOverCDP("http://localhost:9222", { timeout: 40000 });
const page = b.contexts()[0].pages()[0];
await page.bringToFront();
const info = await page.evaluate(() => ({
  url: location.href,
  svgLabels: Array.from(document.querySelectorAll("svg[aria-label]")).map((s) => s.getAttribute("aria-label")),
  fileInputs: document.querySelectorAll('input[type="file"]').length,
  editorTekst: (document.querySelector('[contenteditable="true"]')?.textContent || "").slice(0, 60),
}));
await page.screenshot({ path: process.env.TEMP + "\\threads-diag.png", timeout: 15000 }).catch(() => {});
console.log(JSON.stringify(info, null, 1));
await b.close();
