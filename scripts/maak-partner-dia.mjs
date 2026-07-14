// 📺 Partner-dia-generator (Mark 14 jul 2026 — Voedselbank Rotterdam).
// Maakt per partner-code een 1920×1080 scherm-dia (HTML, alles inline base64)
// in public/drukwerk/dia-<CODE>.html — voor slideshow-schermen zoals de drie
// supermarkten van Voedselbank Rotterdam (Crooswijk, Rotterdam Zuid, Spangen).
// De HTML is los te openen en met headless Chrome om te zetten naar PNG:
//   chrome --headless=new --screenshot=dia.png --window-size=1920,1080 file:///...html
// Dia-eisen van de partner: korte simpele tekst + QR-code (geen event-datum;
// Leerkwartier is doorlopend beschikbaar — afgestemd per mail 14 jul).
//
// Gebruik:  node scripts/maak-partner-dia.mjs VBROTTERDAM2027 [NOGEENCODE ...]
// (QR moet al bestaan: eerst scripts/maak-partner-qr.mjs <CODE>)

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const codes = process.argv.slice(2).map((c) => c.trim().toUpperCase());
if (!codes.length) {
  console.error("Gebruik: node scripts/maak-partner-dia.mjs <CODE> [CODE ...]");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "drukwerk");
mkdirSync(outDir, { recursive: true });

// Leerkwartier-app-logo (Mark 14 jul: het Leerkwartier-logo, niet het
// Doorstroomtoets-logo) — donkerblauwe tegel met groen kwartier + naam.
const logo64 = readFileSync(join(root, "public", "icons", "icon-512.png")).toString("base64");

for (const code of codes) {
  if (!/^[A-Z0-9-]{3,20}$/.test(code)) {
    console.error(`⏭️  "${code}" overgeslagen — alleen A-Z, 0-9 en -, max 20 tekens.`);
    continue;
  }
  const qr64 = readFileSync(join(root, "public", "qr", `${code}.png`)).toString("base64");

  const html = `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8" />
<meta name="robots" content="noindex" />
<title>Leerkwartier — scherm-dia (${code})</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:1920px;height:1080px;overflow:hidden}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;
       background:linear-gradient(135deg,#0a7d43 0%,#075c31 100%);color:#fff;
       display:flex;align-items:center;padding:0 90px;gap:80px}
  .tekst{flex:1.4;min-width:0}
  .kop{display:flex;align-items:center;gap:26px;margin-bottom:14px}
  .kop img{width:110px;height:110px;border-radius:24px;box-shadow:0 8px 24px rgba(0,0,0,0.3)}
  .kop .naam{font-size:64px;font-weight:800;letter-spacing:-1px}
  .payoff{font-size:30px;color:#cfe9db;margin-bottom:44px}
  .pill{display:inline-block;background:#f7c948;color:#5c4300;font-size:32px;font-weight:800;
        padding:12px 32px;border-radius:999px;margin-bottom:30px}
  h1{font-size:88px;line-height:1.08;margin-bottom:44px;letter-spacing:-1.5px}
  ul{list-style:none}
  ul li{font-size:42px;line-height:1.4;padding:12px 0 12px 64px;position:relative;color:#eef7f1}
  ul li::before{content:"✓";position:absolute;left:0;top:10px;width:44px;height:44px;
        background:#00a852;border-radius:50%;text-align:center;line-height:44px;
        font-size:30px;font-weight:800;color:#fff}
  .voet{margin-top:48px;font-size:26px;color:#a8d4bc}
  .qrkaart{flex:1;background:#fff;border-radius:36px;padding:56px 48px;text-align:center;
        color:#1a2332;box-shadow:0 30px 80px rgba(0,0,0,0.35)}
  .qrkaart .scan{font-size:36px;font-weight:800;color:#0a7d43;margin-bottom:26px}
  .qrkaart img{width:420px;height:420px}
  .qrkaart .url{font-size:38px;font-weight:800;color:#0a7d43;margin-top:18px}
  .cadeau{background:#fff8e6;border:3px solid #f0d489;border-radius:20px;
        padding:20px 24px;margin-top:28px;font-size:27px;line-height:1.4;color:#5c4300;text-align:left}
  .cadeau strong{color:#8a6400}
</style>
</head>
<body>
  <div class="tekst">
    <div class="kop">
      <img src="data:image/png;base64,${logo64}" alt="Leerkwartier-logo" />
      <span class="naam">Leerkwartier</span>
    </div>
    <div class="payoff">Een kwartier per dag — écht begrijpen wat je leert.</div>
    <div class="pill">Voor kinderen in groep 6, 7 en 8</div>
    <h1>Gratis oefenen voor de Doorstroomtoets</h1>
    <ul>
      <li>Gratis oefenen — geen abonnement, geen betaalgegevens</li>
      <li>Geen account nodig, geen reclame</li>
      <li>Werkt direct op elke telefoon of tablet</li>
    </ul>
    <div class="voet">Gemaakt door een vader uit Nederland · leerkwartier.app</div>
  </div>
  <div class="qrkaart">
    <div class="scan">Scan met de camera van je telefoon</div>
    <img src="data:image/png;base64,${qr64}" alt="QR-code naar leerkwartier.app" />
    <div class="url">leerkwartier.app</div>
    <div class="cadeau"><strong>Cadeau:</strong> scan hier en de app blijft voor jouw gezin gratis tot en met de Doorstroomtoets van <strong>2027</strong>.</div>
  </div>
</body>
</html>
`;

  const file = join(outDir, `dia-${code}.html`);
  writeFileSync(file, html, "utf8");
  console.log(`✅ ${file}`);
}
