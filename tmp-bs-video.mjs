// Business Suite: reclameclip naar FB-pagina + IG (5 aug, tijdelijk script).
import { chromium } from "playwright-core";

const CAPTION =
  "🎬 Zo werkt Leerkwartier — een kwartier per dag, écht begrijpen wat je leert.\n\nVan 3D-rekenen tot de échte Doorstroomtoets-onderdelen: bij elke fout krijgt je kind uitleg die simpeler wordt tot het kwartje valt. En leren wordt beloond in een eigen park. 🧊\n\nGratis oefenen, geen account nodig 👉 leerkwartier.app/?utm_source=facebook&utm_campaign=reclameclip\nVoor groep 6, 7 en 8 — klaar voor de Doorstroomtoets.";
const CLIP = "C:\\Users\\mark-\\Desktop\\Reclame\\clip-2026-08-05.mp4";

const b = await chromium.connectOverCDP("http://localhost:9222", { timeout: 40000 });
const page = b.contexts()[0].pages()[0];
await page.bringToFront();
await page.goto(
  "https://business.facebook.com/latest/composer/?asset_id=1102097149652697&context_ref=HOME",
  { waitUntil: "domcontentloaded", timeout: 60000 }
);
await page.waitForTimeout(9000);

const gevuld = await page.evaluate((tekst) => {
  const el = document.querySelector('[contenteditable="true"]');
  if (!el) return false;
  el.focus();
  document.execCommand("insertText", false, tekst);
  return el.textContent.length > 100;
}, CAPTION);
if (!gevuld) { console.log(JSON.stringify({ gepost: false, reden: "editor niet gevonden" })); process.exit(2); }

const [chooser] = await Promise.all([
  page.waitForEvent("filechooser", { timeout: 20000 }),
  page.evaluate(() => {
    const k = Array.from(document.querySelectorAll('div[role="button"],button')).find(
      (x) => x.textContent.trim() === "Foto/video toevoegen"
    );
    k.click();
  }),
]);
await chooser.setFiles(CLIP);
console.log("video gekozen — wachten op verwerking…");

// Video-verwerking kan even duren: wacht tot de upload-indicatoren weg zijn (max ~2,5 min).
let klaarVoorPubliceren = false;
for (let i = 0; i < 30; i++) {
  await page.waitForTimeout(5000);
  const status = await page.evaluate(() => {
    const t = document.body.innerText.toLowerCase();
    return { bezig: t.includes("uploaden") || t.includes("verwerk") || t.includes("processing"), video: !!document.querySelector("video") };
  });
  if (!status.bezig && status.video) { klaarVoorPubliceren = true; break; }
}
console.log("verwerking klaar: " + klaarVoorPubliceren);

await page.evaluate(() => {
  const k = Array.from(document.querySelectorAll('div[role="button"],button')).find(
    (x) => x.textContent.trim() === "Publiceren"
  );
  k.click();
});
await page.waitForTimeout(15000);
const res = await page.evaluate(() => {
  const t = document.body.innerText;
  return { gepubliceerd: t.includes("gepubliceerd"), idMatch: (t.match(/ID: (\d+)/) || [])[1] || null };
});
await page.screenshot({ path: process.env.TEMP + "\\bs-video-na.png", timeout: 15000 }).catch(() => {});
console.log(JSON.stringify(res));
await b.close();
