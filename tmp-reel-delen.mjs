import { chromium } from "playwright-core";
const b = await chromium.connectOverCDP("http://localhost:9222", { timeout: 40000 });
const page = b.contexts()[0].pages()[0];
await page.bringToFront();
await page.evaluate(() => {
  const knoppen = Array.from(document.querySelectorAll('div[role="button"],button')).filter(
    (x) => x.textContent.trim() === "Delen" && x.getAttribute("aria-disabled") !== "true"
  );
  knoppen[knoppen.length - 1].click();
});
await page.waitForTimeout(20000);
const res = await page.evaluate(() => {
  const t = document.body.innerText;
  return {
    weg: !t.includes("Reel maken"),
    melding: /gepubliceerd|gedeeld|geplaatst|wordt verwerkt|bezig met/i.test(t),
    fragment: t.slice(0, 150).replace(/\n/g, " | "),
  };
});
await page.screenshot({ path: process.env.TEMP + "\\reel-4.png", timeout: 15000 }).catch(() => {});
console.log(JSON.stringify(res));
await b.close();
