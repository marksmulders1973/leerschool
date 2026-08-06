import { chromium } from "playwright-core";
const b = await chromium.connectOverCDP("http://localhost:9222", { timeout: 40000 });
const page = b.contexts()[0].pages()[0];
await page.bringToFront();
await page.screenshot({ path: process.env.TEMP + "\\threads-status.png", timeout: 15000 }).catch(() => {});
console.log("url: " + page.url());
await b.close();
