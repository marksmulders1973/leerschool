import { chromium } from "playwright-core";
const b = await chromium.connectOverCDP("http://localhost:9222", { timeout: 40000 });
const page = b.contexts()[0].pages()[0];
await page.bringToFront();
await page
  .locator('div[role="button"], button')
  .filter({ hasText: /^(Post|Plaatsen)$/ })
  .locator("visible=true")
  .last()
  .click({ timeout: 15000 });
console.log("post geklikt — uploaden…");
await page.waitForTimeout(30000);
await page.goto("https://www.threads.com/@leerkwartier", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(9000);
const ok = await page.evaluate(() => document.body.innerText.includes("Zo werkt Leerkwartier"));
await page.screenshot({ path: process.env.TEMP + "\\threads-eind.png", timeout: 15000 }).catch(() => {});
console.log(JSON.stringify({ gepost: ok }));
await b.close();
