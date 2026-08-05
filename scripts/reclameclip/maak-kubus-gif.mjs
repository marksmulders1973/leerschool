// Kubus-GIF (Mark 5 aug 2026): neem de zelf-animerende kubus-pagina
// (/kubus.html: groeit 1→2→3→4→3→2, cyclus ~5,7 s) een paar seconden op en
// maak er een oneindig herhalende GIF van — voelt als een mini-clipje, bruikbaar
// in posts/mails waar video niet kan.
//
//   node scripts/reclameclip/maak-kubus-gif.mjs
//
// Uitvoer: Desktop\Reclame\kubus.gif (+ kubus-bron.webm ernaast).
import { chromium } from "playwright-core";
import { execFileSync } from "node:child_process";
import { mkdirSync, copyFileSync } from "node:fs";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const UIT_DIR = "C:\\Users\\mark-\\Desktop\\Reclame";
mkdirSync(UIT_DIR, { recursive: true });

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const ctx = await browser.newContext({
  viewport: { width: 460, height: 640 },
  recordVideo: { dir: UIT_DIR, size: { width: 460, height: 640 } },
});
const page = await ctx.newPage();
await page.goto("https://leerkwartier.app/kubus.html", { waitUntil: "domcontentloaded", timeout: 45000 });
// 3D-canvas laden + daarna ruim 2 volledige groei-cycli opnemen.
await page.waitForTimeout(4000 + 13000);
const video = page.video();
await ctx.close();
const bronPad = await video.path();
await browser.close();

const webm = `${UIT_DIR}\\kubus-bron.webm`;
copyFileSync(bronPad, webm);

// Middenstuk van precies één cyclus (5,7 s) → nette lus. Palet-truc voor
// scherpe GIF-kleuren; 12 fps + 460 px = klein genoeg voor social/mail.
execFileSync("ffmpeg", [
  "-y", "-ss", "8", "-t", "5.7", "-i", webm,
  "-vf", "fps=12,scale=460:-1:flags=lanczos,split[s0][s1];[s0]palettegen=stats_mode=diff[p];[s1][p]paletteuse=dither=bayer",
  "-loop", "0",
  `${UIT_DIR}\\kubus.gif`,
], { stdio: ["ignore", "ignore", "inherit"] });
console.log(`🧊 KLAAR: ${UIT_DIR}\\kubus.gif`);
