import { chromium } from "playwright-core";
const b = await chromium.connectOverCDP("http://localhost:9222", { timeout: 40000 });
const page = b.contexts()[0].pages()[0];
await page.bringToFront();
const info = await page.evaluate(() => {
  const kandidaten = Array.from(document.querySelectorAll('div[role="button"],button')).filter(
    (x) => x.textContent.trim() === "Post"
  );
  const zichtbaar = kandidaten.map((k) => {
    const r = k.getBoundingClientRect();
    return { w: r.width, h: r.height, x: r.x, y: r.y, disabled: k.getAttribute("aria-disabled") };
  });
  // Klik de laatste met echte afmetingen.
  const doel = kandidaten.reverse().find((k) => k.getBoundingClientRect().width > 10);
  if (doel) {
    doel.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
    return { geklikt: true, zichtbaar };
  }
  return { geklikt: false, zichtbaar };
});
console.log(JSON.stringify(info));
await page.waitForTimeout(30000);
await page.goto("https://www.threads.com/@leerkwartier", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(9000);
const ok = await page.evaluate(() => document.body.innerText.includes("Zo werkt Leerkwartier"));
await page.screenshot({ path: process.env.TEMP + "\\threads-eind.png", timeout: 15000 }).catch(() => {});
console.log(JSON.stringify({ gepost: ok }));
await b.close();
