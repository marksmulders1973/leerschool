// Business Suite: reclameclip als REEL naar FB + IG (9:16-formaat, 5 aug).
import { chromium } from "playwright-core";

const CAPTION =
  "🎬 Zo werkt Leerkwartier — een kwartier per dag, écht begrijpen wat je leert. Van 3D-rekenen tot de échte Doorstroomtoets-onderdelen: bij elke fout uitleg die simpeler wordt tot het kwartje valt. Gratis oefenen, geen account nodig 👉 leerkwartier.app — voor groep 6, 7 en 8.";
const CLIP = "C:\\Users\\mark-\\Desktop\\Reclame\\clip-2026-08-05.mp4";

const b = await chromium.connectOverCDP("http://localhost:9222", { timeout: 40000 });
const page = b.contexts()[0].pages()[0];
await page.bringToFront();

// Oude composer netjes sluiten (Annuleren → evt. bevestigen met Verwijderen/Weggooien).
await page.evaluate(() => {
  const k = Array.from(document.querySelectorAll('div[role="button"],button')).find((x) => x.textContent.trim() === "Annuleren");
  if (k) k.click();
});
await page.waitForTimeout(2500);
await page.evaluate(() => {
  const k = Array.from(document.querySelectorAll('div[role="button"],button')).find((x) => /Verwijderen|Weggooien|Discard/.test(x.textContent.trim()));
  if (k) k.click();
});
await page.waitForTimeout(2500);

// Reel-composer openen.
await page.goto("https://business.facebook.com/latest/reels_composer?asset_id=1102097149652697", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(9000);
await page.screenshot({ path: process.env.TEMP + "\\reel-1.png", timeout: 15000 }).catch(() => {});

// Video toevoegen (knop-tekst varieert: "Video toevoegen" / "Add video").
let chooser = null;
try {
  [chooser] = await Promise.all([
    page.waitForEvent("filechooser", { timeout: 15000 }),
    page.evaluate(() => {
      const k = Array.from(document.querySelectorAll('div[role="button"],button')).find((x) =>
        /Video toevoegen|Add video|Video uploaden|Selecteer video/i.test(x.textContent.trim())
      );
      if (k) k.click();
      else {
        const inp = document.querySelector('input[type="file"]');
        if (inp) inp.click();
      }
    }),
  ]);
} catch {
  // Fallback: rechtstreeks het (verborgen) file-input vullen.
  const inp = page.locator('input[type="file"]').first();
  await inp.setInputFiles(CLIP, { timeout: 15000 });
}
if (chooser) await chooser.setFiles(CLIP);
console.log("clip gekozen — wachten op verwerking…");
await page.waitForTimeout(12000);
await page.screenshot({ path: process.env.TEMP + "\\reel-2.png", timeout: 15000 }).catch(() => {});

// Caption invullen (contenteditable of textarea).
const gevuld = await page.evaluate((tekst) => {
  const el = document.querySelector('[contenteditable="true"], textarea');
  if (!el) return false;
  el.focus();
  if (el.tagName === "TEXTAREA") {
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
    setter.call(el, tekst);
    el.dispatchEvent(new Event("input", { bubbles: true }));
  } else {
    document.execCommand("insertText", false, tekst);
  }
  return true;
}, CAPTION);
console.log("caption gevuld: " + gevuld);

// Wachten tot verwerking klaar is, dan door de stappen (Volgende → Delen/Publiceren).
for (let stap = 0; stap < 10; stap++) {
  await page.waitForTimeout(6000);
  const actie = await page.evaluate(() => {
    const knoppen = Array.from(document.querySelectorAll('div[role="button"],button'))
      .filter((x) => !x.getAttribute("aria-disabled") || x.getAttribute("aria-disabled") === "false");
    const delen = knoppen.find((x) => /^(Delen|Publiceren|Share|Plaatsen)$/.test(x.textContent.trim()));
    if (delen) { delen.click(); return "gedeeld"; }
    const volgende = knoppen.find((x) => /^(Volgende|Next)$/.test(x.textContent.trim()));
    if (volgende) { volgende.click(); return "volgende"; }
    return "wachten";
  });
  console.log(`stap ${stap}: ${actie}`);
  if (actie === "gedeeld") break;
}
await page.waitForTimeout(15000);
const res = await page.evaluate(() => {
  const t = document.body.innerText;
  return { melding: /gepubliceerd|gedeeld|geplaatst|is published/i.test(t) };
});
await page.screenshot({ path: process.env.TEMP + "\\reel-3.png", timeout: 15000 }).catch(() => {});
console.log(JSON.stringify(res));
await b.close();
