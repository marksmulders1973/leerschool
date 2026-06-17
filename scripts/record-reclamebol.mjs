// Neemt de ?reclamebol-promo op als video (webm) + maakt een verificatie-PNG.
// Draai NA `npx vite` (poort via arg, default 5181).
// node scripts/record-reclamebol.mjs 5181
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const PORT = process.argv[2] || "5181";
const OUT = "C:/Users/mark-/Desktop/promostudiebol/wereldbol-reclame";
mkdirSync(OUT, { recursive: true });

// Portret 1080x1920 (9:16 Reels/Stories). Past kop + bol + CTA-knop in beeld.
const W = 540, H = 960, SCALE = 2;

const browser = await chromium.launch({ args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"] });
const context = await browser.newContext({
  viewport: { width: W, height: H },
  deviceScaleFactor: SCALE,
  recordVideo: { dir: OUT, size: { width: W * SCALE, height: H * SCALE } },
});
const page = await context.newPage();
await page.goto(`http://localhost:${PORT}/?reclamebol`, { waitUntil: "networkidle" });

// Wacht tot de bol klaar is (statusbalk wisselt van "laadt" naar draai-instructie).
await page.waitForTimeout(3500);
await page.screenshot({ path: `${OUT}/verificatie.png` });

// ~11 sec de bol laten draaien voor een mooie ronde.
await page.waitForTimeout(11000);

await context.close(); // schrijft de video weg
await browser.close();
console.log("KLAAR: video + verificatie.png in", OUT);
