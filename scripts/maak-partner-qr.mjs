// 🤲 Partner-QR-generator (Mark 10 jul 2026).
// Maakt per partner-code een print-kwaliteit QR-PNG in public/qr/<CODE>.png.
// De QR wijst naar leerkwartier.app/?partner=<CODE> met utm's zodat elke scan
// traceerbaar in het dagrapport verschijnt (bron "qr-flyer" + event
// partner_bezoek met de code). Zie src/features/referral/partnerCode.js.
//
// Gebruik:  node scripts/maak-partner-qr.mjs ENSCHEDE2027 [NOGEENCODE ...]

import QRCode from "qrcode";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const codes = process.argv.slice(2).map((c) => c.trim().toUpperCase());
if (!codes.length) {
  console.error("Gebruik: node scripts/maak-partner-qr.mjs <CODE> [CODE ...]");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "qr");
mkdirSync(outDir, { recursive: true });

for (const code of codes) {
  if (!/^[A-Z0-9-]{3,20}$/.test(code)) {
    console.error(`⏭️  "${code}" overgeslagen — alleen A-Z, 0-9 en -, max 20 tekens (zelfde regel als partnerCode.js).`);
    continue;
  }
  const url = `https://leerkwartier.app/?partner=${code}&utm_source=qr-flyer&utm_medium=print`;
  const file = join(outDir, `${code}.png`);
  // errorCorrectionLevel M + brede marge: blijft scanbaar op een thuisprinter
  // met lage inkt/600dpi; 600px is ruim voor 4-5 cm op A4.
  await QRCode.toFile(file, url, { errorCorrectionLevel: "M", width: 600, margin: 2 });
  console.log(`✅ ${file}\n   → ${url}`);
}
