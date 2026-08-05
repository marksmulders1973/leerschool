// ══════════════════════════════════════════════════════════════════════
// Reclame-clip-generator (Mark 5 aug 2026, docs/RECLAME-CLIP-PLAN.md).
//
// Doorloopt de échte app (leerkwartier.app) met Playwright, maakt per stap
// een schermafbeelding (vraag kiezen → fout antwoord → uitleg op 3 niveaus),
// bouwt daar 1080×1920-huisstijldia's van en plakt ze met ffmpeg + jingle
// tot een clip van ~60 sec. Wekelijks of thematisch (bv. Spark Fest) her te
// gebruiken: geef een eigen scène-config mee.
//
//   node scripts/reclameclip/maak-clip.mjs                → standaard-clip
//   node scripts/reclameclip/maak-clip.mjs pad/naar.json  → thema-clip
//
// Uitvoer: Desktop\Leerkwartier-social\clips\clip-<datum>.mp4 (+ dia's ernaast).
// Kosten €0: eigen Chrome headless + ffmpeg, geen AI.
// ══════════════════════════════════════════════════════════════════════
import { chromium } from "playwright-core";
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import QRCode from "qrcode";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const JINGLE = "C:\\Users\\mark-\\Desktop\\promostudiebol\\Leerkwartier-reclamelied.mp3";
const UIT_DIR = "C:\\Users\\mark-\\Desktop\\Reclame";
const DATUM = new Date().toISOString().slice(0, 10);
const WERK = `${UIT_DIR}\\werk-${DATUM}`;
mkdirSync(WERK, { recursive: true });

// ── Scène-config: titel-dia's + app-schoten. `duur` in seconden. ──
// App-schot-acties: [{ zoekTekst }] klikt op zichtbare tekst; speciale actie
// "fout-antwoord" haalt de dagvraag-opties uit /api/actuele-vraag en klikt
// bewust een fout antwoord (zodat de uitleg-flow in beeld komt).
const STANDAARD_SCENES = [
  { type: "titel", duur: 3, kop: "Leerkwartier", sub: "Een kwartier per dag — écht begrijpen wat je leert." },
  // 3D-kubus-opening (Mark 5 aug): drie maten die zichtbaar groeien — wiskunde die je kunt zíén.
  { type: "app", duur: 3, caption: "Zie het vóór je: 2 × 2 × 2 = 8", url: "https://leerkwartier.app/kubus.html?z=2&ref=6", wachtMs: 9000 },
  { type: "app", duur: 3, caption: "4 × 4 × 4 = 64", url: "https://leerkwartier.app/kubus.html?z=4&ref=6", wachtMs: 9000 },
  { type: "app", duur: 4, caption: "6 × 6 × 6 = 216 — wiskunde die je kunt zíén", url: "https://leerkwartier.app/kubus.html?z=6&ref=6", wachtMs: 9000 },
  { type: "titel", duur: 4, kop: "De Doorstroomtoets komt eraan.", sub: "Veel kinderen oefenen — maar begrijpen het niet écht." },
  { type: "app", duur: 4, caption: "Elke dag een vraag van de dag — in Doorstroomtoets-stijl", url: "https://leerkwartier.app/vandaag", wachtMs: 6000 },
  { type: "app", duur: 5, caption: "Fout antwoord? Geen 'helaas!' …", url: "https://leerkwartier.app/vandaag", wachtMs: 6000, acties: ["fout-antwoord"] },
  { type: "app", duur: 6, caption: "… maar uitleg die simpeler wordt tot het kwartje valt", url: "https://leerkwartier.app/vandaag", wachtMs: 6000, acties: ["fout-antwoord", { zoekTekst: "impeler" }] },
  { type: "app", duur: 5, caption: "Oefen de échte Doorstroomtoets-onderdelen: rekenen, taal en lezen", url: "https://leerkwartier.app/doorstroomtoets-oefentoets", wachtMs: 7000 },
  { type: "app", duur: 4, caption: "Honderden oefenpaden — van breuken tot begrijpend lezen", url: "https://leerkwartier.app/leren", wachtMs: 7000 },
  { type: "titel", duur: 4, kop: "Deze week: de vraag van de dag over de ooievaars 🦅", sub: "Elke dag een nieuwe vraag, uit het echte nieuws." },
  { type: "app", duur: 5, caption: "Leren wordt beloond in je eigen park", url: "https://leerkwartier.app/dierentuin", wachtMs: 14000 },
  { type: "titel", duur: 4, kop: "Voor ouders en verzorgers", sub: "Volg de voortgang richting de Doorstroomtoets — een kwartier per dag is genoeg." },
  { type: "cta", duur: 6, kop: "Klaar voor de Doorstroomtoets — gratis oefenen, geen account nodig", sub: "leerkwartier.app" },
];

const configPad = process.argv[2];
const SCENES = configPad ? JSON.parse(readFileSync(configPad, "utf8")) : STANDAARD_SCENES;

// ── Stap 1: app-schermafbeeldingen (telefoon-formaat, scherp) ──
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const telefoon = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const page = await telefoon.newPage();

let dagvraag = null;
try {
  const r = await fetch("https://leerkwartier.app/api/actuele-vraag");
  dagvraag = (await r.json())?.actueel?.vraag || null;
} catch { /* zonder dagvraag werkt fout-antwoord niet, rest wel */ }

async function doeActies(acties = []) {
  for (const actie of acties) {
    if (actie === "fout-antwoord") {
      if (!dagvraag) continue;
      const foutIdx = dagvraag.answer === 0 ? 1 : 0;
      const optie = dagvraag.options[foutIdx];
      await page.locator(`text=${optie.slice(0, 40)}`).locator("visible=true").first().click({ timeout: 10000 }).catch(() => {});
      await page.waitForTimeout(2500);
    } else if (actie.zoekTekst) {
      await page.locator(`text=${actie.zoekTekst}`).locator("visible=true").first().click({ timeout: 8000 }).catch(() => {});
      await page.waitForTimeout(2000);
    }
  }
}

for (let i = 0; i < SCENES.length; i++) {
  const s = SCENES[i];
  if (s.type !== "app") continue;
  try {
    await page.goto(s.url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(s.wachtMs || 5000);
    await doeActies(s.acties);
    await page.screenshot({ path: `${WERK}\\app-${i}.png` });
    s.schot = `${WERK}\\app-${i}.png`;
    console.log(`✓ app-schot ${i}: ${s.caption}`);
  } catch (e) {
    console.log(`✗ app-schot ${i} mislukt (${e.message.split("\n")[0]}) — dia wordt titelkaart`);
    s.type = "titel";
    s.kop = s.caption;
    s.sub = "";
  }
}
await telefoon.close();

// ── Stap 2: dia's bouwen (1080×1920) en fotograferen ──
const qrData = await QRCode.toDataURL("https://leerkwartier.app/?utm_source=clip", { margin: 1, width: 300 });

function diaHtml(s) {
  const basis = `<!doctype html><html><head><meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;700&display=swap" rel="stylesheet">
  <style>
    * { margin:0; box-sizing:border-box; }
    body { width:1080px; height:1920px; overflow:hidden; color:#fff;
      font-family:'Fredoka','Segoe UI',sans-serif;
      background:linear-gradient(160deg,#0f1729 0%,#162033 55%,#1a2744 100%);
      display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:70px; }
    .logo { position:absolute; top:70px; left:0; right:0; font-size:52px; font-weight:700; color:#00d4ff; }
    .kop { font-size:76px; font-weight:700; line-height:1.2; }
    .sub { font-size:46px; margin-top:36px; color:rgba(255,255,255,.85); line-height:1.45; }
    .caption { font-size:52px; font-weight:700; line-height:1.25; margin-bottom:44px; }
    .tel { border-radius:48px; border:10px solid #2a3f5f; box-shadow:0 30px 80px rgba(0,0,0,.55); width:640px; }
    .voet { position:absolute; bottom:64px; left:0; right:0; font-size:34px; color:rgba(255,255,255,.55); }
    .cta-site { font-size:72px; font-weight:700; color:#00e676; margin-top:40px; }
    .qr { width:300px; border-radius:20px; margin-top:56px; background:#fff; padding:14px; }
  </style></head><body><div class="logo">Leerkwartier</div>`;
  if (s.type === "titel") return `${basis}<div class="kop">${s.kop}</div>${s.sub ? `<div class="sub">${s.sub}</div>` : ""}<div class="voet">leerkwartier.app</div></body></html>`;
  if (s.type === "cta") return `${basis}<div class="kop">${s.kop}</div><div class="cta-site">${s.sub}</div><img class="qr" src="${qrData}"><div class="voet">Doorstroomtoets · groep 6, 7 en 8</div></body></html>`;
  return `${basis}<div class="caption">${s.caption}</div><img class="tel" src="${pathToFileURL(s.schot)}"><div class="voet">leerkwartier.app — gratis oefenen</div></body></html>`;
}

const diaCtx = await browser.newContext({ viewport: { width: 1080, height: 1920 } });
const diaPage = await diaCtx.newPage();
const diaPaden = [];
for (let i = 0; i < SCENES.length; i++) {
  const pad = `${WERK}\\dia-${String(i).padStart(2, "0")}.png`;
  const htmlPad = `${WERK}\\dia-${i}.html`;
  writeFileSync(htmlPad, diaHtml(SCENES[i]));
  await diaPage.goto(pathToFileURL(htmlPad).href, { waitUntil: "networkidle", timeout: 30000 }).catch(() => {});
  await diaPage.waitForTimeout(700);
  await diaPage.screenshot({ path: pad });
  diaPaden.push({ pad, duur: SCENES[i].duur || 4 });
  console.log(`✓ dia ${i}`);
}
await browser.close();

// ── Stap 3: ffmpeg — dia's + lichte inzoom + jingle → mp4 ──
const totaal = diaPaden.reduce((a, d) => a + d.duur, 0);
const inputs = [];
const filters = [];
diaPaden.forEach((d, i) => {
  inputs.push("-loop", "1", "-t", String(d.duur), "-i", d.pad);
  filters.push(
    `[${i}:v]scale=1080:1920,zoompan=z='min(1+0.0009*on,1.07)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=1080x1920:fps=25,format=yuv420p[v${i}]`
  );
});
const concat = diaPaden.map((_, i) => `[v${i}]`).join("") + `concat=n=${diaPaden.length}:v=1:a=0[vout]`;
const audioIdx = diaPaden.length;
const uitPad = `${UIT_DIR}\\clip-${DATUM}.mp4`;
const args = [
  "-y", ...inputs,
  ...(existsSync(JINGLE) ? ["-stream_loop", "-1", "-i", JINGLE] : []),
  "-filter_complex", filters.join(";") + ";" + concat +
    (existsSync(JINGLE) ? `;[${audioIdx}:a]atrim=0:${totaal},afade=t=out:st=${totaal - 2}:d=2[aout]` : ""),
  "-map", "[vout]",
  ...(existsSync(JINGLE) ? ["-map", "[aout]"] : []),
  "-t", String(totaal), "-r", "25", "-c:v", "libx264", "-preset", "medium", "-crf", "20",
  ...(existsSync(JINGLE) ? ["-c:a", "aac", "-b:a", "128k"] : []),
  uitPad,
];
console.log("ffmpeg draait…");
execFileSync("ffmpeg", args, { stdio: ["ignore", "ignore", "inherit"] });
console.log(`\n🎬 KLAAR: ${uitPad} (${totaal}s, ${diaPaden.length} dia's)`);
