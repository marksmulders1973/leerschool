// Threads: reclameclip + link posten (5 aug, tijdelijk).
import { chromium } from "playwright-core";

const CAPTION =
  "🎬 Zo werkt Leerkwartier: een kwartier per dag, écht begrijpen wat je leert — met uitleg die simpeler wordt tot het kwartje valt. Gratis oefenen voor de Doorstroomtoets, geen account nodig 👉 leerkwartier.app/?utm_source=threads&utm_campaign=reclameclip";
const CLIP = "C:\\Users\\mark-\\Desktop\\Reclame\\clip-2026-08-05.mp4";

const b = await chromium.connectOverCDP("http://localhost:9222", { timeout: 40000 });
const ctx = b.contexts()[0];
const page = ctx.pages()[0];
await page.bringToFront();

// Eventueel openstaand "Klaar"-dialoog van de reel wegklikken.
await page.evaluate(() => {
  const k = Array.from(document.querySelectorAll('div[role="button"],button')).find((x) => x.textContent.trim() === "Klaar");
  if (k) k.click();
});
await page.waitForTimeout(1500);

page.on("dialog", (d) => d.accept().catch(() => {}));
await page.goto("https://www.threads.com/", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(5000);
// Achtergebleven concept van vorige poging weggooien.
await page.evaluate(() => {
  const k = Array.from(document.querySelectorAll('div[role="button"],button')).find((x) =>
    /^(Weggooien|Discard|Niet opslaan)$/.test(x.textContent.trim())
  );
  if (k) k.click();
});
await page.waitForTimeout(1500);
// Composer openen: brede layout heeft "Wat is er nieuw?", smalle layout een
// "+"-knop midden-onder in de navigatiebalk.
let open = false;
try {
  await page.locator("text=/Wat is er nieuw|What's new/").locator("visible=true").first().click({ timeout: 6000 });
  open = true;
} catch { /* smalle layout */ }
if (!open) {
  const maat = await page.evaluate(() => ({ w: window.innerWidth, h: window.innerHeight }));
  await page.mouse.click(maat.w / 2, maat.h - 35);
}
await page.waitForTimeout(2000);

const editor = page.locator('[contenteditable="true"]').locator("visible=true").first();
await editor.click({ timeout: 15000 });
await page.keyboard.type(CAPTION, { delay: 3 });
await page.waitForTimeout(800);

// Clip toevoegen via de bijlage-knop (echte bestandskiezer).
const [chooser] = await Promise.all([
  page.waitForEvent("filechooser", { timeout: 20000 }),
  page.evaluate(() => {
    const svgs = Array.from(document.querySelectorAll("svg[aria-label]"));
    const hit = svgs.find((s) => /media|foto|afbeeld|photo|image|bijlage|attach/i.test(s.getAttribute("aria-label")));
    if (!hit) return "geen bijlage-knop";
    const btn = hit.closest('[role="button"],button') || hit.parentElement;
    btn.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
    return hit.getAttribute("aria-label");
  }),
]);
await chooser.setFiles(CLIP);
console.log("clip gekozen — wachten op verwerking…");
await page.waitForTimeout(20000);
await page.screenshot({ path: process.env.TEMP + "\\threads-video-pre.png", timeout: 15000 }).catch(() => {});

await page
  .locator('div[role="button"], button')
  .filter({ hasText: /^(Post|Plaatsen)$/ })
  .locator("visible=true")
  .last()
  .click({ timeout: 15000 });
await page.waitForTimeout(15000);

await page.goto("https://www.threads.com/@leerkwartier", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(8000);
const ok = await page.evaluate(() => document.body.innerText.includes("Zo werkt Leerkwartier"));
await page.screenshot({ path: process.env.TEMP + "\\threads-video-check.png", timeout: 15000 }).catch(() => {});
console.log(JSON.stringify({ gepost: ok }));
await b.close();
