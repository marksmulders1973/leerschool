// 🏷️ QR-stickervel-generator (Mark 14 jul 2026 — sticker-hybride, stap 2).
// Maakt per partner-code een A4-stickervel (zwart-wit, voor Mark's laser):
// 12 stickers van 50×50mm die precies over het sticker-vak van de bulk-flyer
// passen (public/drukwerk/flyer-bulk.html). Elke sticker = partner-QR +
// "Gratis t/m de Doorstroomtoets 2027" — de 2027-belofte staat bewust op de
// sticker en niet op de flyer (feedback_gratis_claim_eerlijk).
// Printen op zelfklevend A4 (of gewoon papier + lijm), 100% schaal, zwart-wit.
//
// Gebruik:  node scripts/maak-stickervel.mjs PURMEREND2027 [NOGEENCODE ...]

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const codes = process.argv.slice(2).map((c) => c.trim().toUpperCase());
if (!codes.length) {
  console.error("Gebruik: node scripts/maak-stickervel.mjs <CODE> [CODE ...]");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "drukwerk");
mkdirSync(outDir, { recursive: true });

for (const code of codes) {
  const qr64 = readFileSync(join(root, "public", "qr", `${code}.png`)).toString("base64");
  const sticker = `
    <div class="sticker">
      <img src="data:image/png;base64,${qr64}" alt="QR ${code}" />
      <div class="txt"><b>Cadeau:</b> scan &rarr; gratis t/m de<br />Doorstroomtoets <b>2027</b></div>
    </div>`;

  const html = `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8" />
<meta name="robots" content="noindex" />
<title>QR-stickervel ${code} — 12× 50mm (zwart-wit)</title>
<style>
  @page { size: A4; margin: 12mm; }
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#000}
  .kop{font-size:10pt;margin-bottom:4mm}
  .vel{display:grid;grid-template-columns:repeat(3, 50mm);gap:8mm 12mm;justify-content:center}
  .sticker{width:50mm;height:50mm;border:0.4mm dashed #999;border-radius:2mm;
           display:flex;flex-direction:column;align-items:center;justify-content:center;
           padding:1.5mm;background:#fff}
  .sticker img{width:36mm;height:36mm}
  .txt{font-size:7pt;line-height:1.25;text-align:center;margin-top:0.5mm}
  @media print { .kop{display:none} .sticker{border-color:#ccc} }
</style>
</head>
<body>
  <div class="kop">Stickervel <b>${code}</b> — 12 stickers van 50×50mm. Print op 100% (geen "passend maken"), knip of gebruik zelfklevend A4. Plak over het QR-vak rechtsonder op de bulk-flyer.</div>
  <div class="vel">${sticker.repeat(12)}</div>
</body>
</html>
`;

  const file = join(outDir, `stickervel-${code}.html`);
  writeFileSync(file, html, "utf8");
  console.log(`✅ ${file}`);
}
