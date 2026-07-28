// 🤲 Partner-flyer-generator (Mark 13 jul 2026).
// Maakt per partner-code een ZELFSTANDIGE flyer-HTML in public/drukwerk/
// flyer-<CODE>.html — met de QR-code als base64 ingebakken en de cadeau-actie
// zichtbaar. Zo is de HTML los te openen/printen én om te zetten naar PDF
// (Chrome --print-to-pdf) zonder dev-server of externe /qr/-pad.
//
// Gebruik:  node scripts/maak-partner-flyer.mjs
// (codes + org-teksten staan hieronder in ORGS)

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const template = readFileSync(join(root, "public", "leergeld-flyer.html"), "utf8");
const outDir = join(root, "public", "drukwerk");
mkdirSync(outDir, { recursive: true });

const ORGS = [
  { code: "JEF2027",  kaderKop: "Voor de gezinnen op de scholen in uw netwerk betekent dat:" },
  { code: "SAM2027",  kaderKop: "Voor de gezinnen die u en uw partners helpen betekent dat:" },
  { code: "JINC2027", kaderKop: "Voor de kinderen in uw programma's betekent dat:" },
  { code: "IMC2027",  kaderKop: "Voor uw leerlingen betekent dat:" },
  { code: "HUMANITAS2027",    kaderKop: "Voor de gezinnen die uw vrijwilligers begeleiden betekent dat:" },
  { code: "OOIEVAAR2027",     kaderKop: "Voor de Haagse gezinnen met een Ooievaarspas betekent dat:" },
  { code: "ROTTERDAMPAS2027", kaderKop: "Voor de Rotterdamse gezinnen met een Rotterdampas betekent dat:" },
  // 16 jul 2026: Voedselbank Breda vroeg zelf om de flyer per mail ("u mag
  // altijd de flyer naar ons mailen") — digitale flyer met eigen code.
  { code: "BREDA2027", kaderKop: "Voor de gezinnen die u helpt betekent dat:" },
];

for (const { code, kaderKop } of ORGS) {
  const qrPng = readFileSync(join(root, "public", "qr", `${code}.png`));
  const qrData = `data:image/png;base64,${qrPng.toString("base64")}`;
  const url = `leerkwartier.app/?partner=${code}`;

  let html = template
    // QR-blok altijd tonen (normaal pas met ?partner= via JS)
    .replace('<div class="qr-blok" id="qr-blok">', '<div class="qr-blok aan" id="qr-blok">')
    // QR-afbeelding inline als base64 (geen /qr/-pad nodig)
    .replace('<img id="qr-img" src="" alt="QR-code naar leerkwartier.app" />',
      `<img id="qr-img" src="${qrData}" alt="QR-code naar leerkwartier.app" />`)
    // code-badge + typ-url invullen
    .replace('<span class="qr-code-badge" id="qr-code-tekst"></span>',
      `<span class="qr-code-badge" id="qr-code-tekst">${code}</span>`)
    .replace('<span id="qr-url-tekst"></span>',
      `<span id="qr-url-tekst">${url}</span>`)
    // kader-kop neutraal per organisatie
    .replace('<strong id="kader-kop">Voor gezinnen voor wie oefenboeken of bijles te duur zijn, betekent dat:</strong>',
      `<strong id="kader-kop">${kaderKop}</strong>`)
    // print-knop weg (statische flyer) + runtime-script weg
    .replace(/<div class="print-knop">[\s\S]*?<\/div>\s*/, "")
    .replace(/<script>[\s\S]*?<\/script>\s*/, "");

  const file = join(outDir, `flyer-${code}.html`);
  writeFileSync(file, html, "utf8");
  console.log(`✅ ${file}`);
}
