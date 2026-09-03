// Frames vastleggen van de draaiende wereldbol → ffmpeg maakt er mp4 + gif van.
const { chromium } = require("C:/Users/mark-/Desktop/Studiebol/leerschool/node_modules/playwright");
const fs = require("node:fs");
const path = require("node:path");

(async () => {
  const FRAMES = path.join(__dirname, "frames");
  fs.rmSync(FRAMES, { recursive: true, force: true });
  fs.mkdirSync(FRAMES, { recursive: true });

  const browser = await chromium.launch({ headless: true, args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1.5 });
  page.on("pageerror", (e) => console.log("pageerror:", e.message));
  page.on("console", (m) => { if (m.type() === "error") console.log("console:", m.text().slice(0, 160)); });
  await page.goto("http://127.0.0.1:5533/index.html", { waitUntil: "load" });
  await page.waitForSelector("#globe-wrap canvas", { timeout: 30000 });
  await page.waitForTimeout(6000); // kaart tekenen + textuur
  await page.evaluate(() => { const wrap = document.getElementById("globe-wrap"); const cv = wrap.querySelector("canvas"); wrap.querySelectorAll("*").forEach((el) => { if (el !== cv && !el.contains(cv)) el.style.display = "none"; }); wrap.style.setProperty("right", "auto", "important"); wrap.style.setProperty("bottom", "auto", "important"); wrap.style.setProperty("width", cv.offsetWidth + "px", "important"); const r = cv.getBoundingClientRect(); const cx = r.left + r.width / 2, cy = r.top + r.height / 2; const cs = getComputedStyle(wrap); wrap.style.setProperty("left", (parseFloat(cs.left) + (540 - cx)) + "px", "important"); wrap.style.setProperty("top", (parseFloat(cs.top) + (600 - cy)) + "px", "important"); });
  await page.waitForTimeout(800);

  const N = 108, TOON_ANTWOORD_NA = 78; // 12 fps → 11 s, antwoord laatste 3 s
  for (let i = 0; i < N; i++) {
    if (i === TOON_ANTWOORD_NA) await page.evaluate(() => { document.getElementById("antwoord").style.display = "block"; });
    await page.screenshot({ path: path.join(FRAMES, `f${String(i).padStart(4, "0")}.png`), type: "png", timeout: 90000, animations: "allow", caret: "hide" });
    await page.waitForTimeout(40);
  }
  await browser.close();
  console.log("frames:", N);
})().catch((e) => { console.error(e); process.exit(1); });
