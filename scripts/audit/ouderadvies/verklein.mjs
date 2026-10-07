// Verkleint de schermafbeeldingen naar 390 px breed (telefoonformaat, 1×), png blijft png.
import { chromium } from "playwright";
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { CHROMIUM } from "./stubServer.mjs";
const root = "docs/audit/ouderadvies";
const files = readdirSync(root, { recursive: true }).filter((f) => String(f).endsWith(".png")).map((f) => `${root}/${f}`);
const b = await chromium.launch({ executablePath: CHROMIUM });
const p = await b.newPage();
let voor = 0; let na = 0;
for (const f of files) {
  const buf = readFileSync(f); voor += buf.length;
  const uit = await p.evaluate(async (b64) => {
    const img = new Image(); img.src = "data:image/png;base64," + b64; await img.decode();
    if (img.width <= 390) return null;
    const c = document.createElement("canvas"); c.width = 390; c.height = Math.round(img.height * 390 / img.width);
    const ctx = c.getContext("2d"); ctx.imageSmoothingQuality = "high"; ctx.drawImage(img, 0, 0, c.width, c.height);
    return c.toDataURL("image/png").split(",")[1];
  }, buf.toString("base64"));
  if (uit) writeFileSync(f, Buffer.from(uit, "base64"));
  na += statSync(f).size;
}
console.log(files.length, "bestanden", Math.round(voor / 1e6), "MB →", Math.round(na / 1e6 * 10) / 10, "MB");
await b.close();
