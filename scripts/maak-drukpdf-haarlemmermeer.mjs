// Drukklare PDF voor Drukwerkdeal-order 15653885 (Spark Fest goodybag-flyer).
// Probleem 29 jul: flyer-HAARLEMMERMEER2027.pdf was een thuisprint-versie
// (Letter, 1 zijde) — de drukker wil A5 + 3 mm afloop (154×216 mm) en
// 2 pagina's (dubbelzijdig). Dit script bouwt een druk-HTML met:
//   p.1  = de door Inez goedgekeurde flyer, geschaald naar A5-afloop
//   p.2  = sobere achterkant uit dezelfde goedgekeurde elementen (logo/QR/code)
// en print die met headless Chrome naar flyer-HAARLEMMERMEER2027-DRUK.pdf.

import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const bron = join(root, "public", "drukwerk", "flyer-HAARLEMMERMEER2027.html");
let html = readFileSync(bron, "utf8");

// Base64-afbeeldingen uit de bron hergebruiken voor de achterkant
const logoMatch = html.match(/<img src="(data:image\/[^"]+)"[^>]*class=""?[^>]*>/) ||
  html.match(/\.merk[^]*?<img src="(data:image\/[^"]+)"/) ||
  html.match(/<img src="(data:image\/[^"]{100,}?)"/);
const alleImgs = [...html.matchAll(/<img[^>]+src="(data:image\/[^"]+)"/g)].map((m) => m[1]);
// volgorde in document: logo (merk), sparkfest, qr
const logoSrc = alleImgs[0] || "";
const sparkSrc = alleImgs[1] || "";
const qrSrc = alleImgs[2] || alleImgs[alleImgs.length - 1] || "";

// Druk-CSS: A5 + 3mm afloop, flyer geschaald (760px → 154mm ≈ zoom 0,74 met marge)
const drukCss = `
  @page { size: 154mm 216mm; margin: 0; }
  html, body { background: #fff !important; padding: 0 !important; margin: 0 !important; }
  .drukpagina { width: 154mm; height: 216mm; overflow: hidden; position: relative; page-break-after: always; background: #fff; }
  .drukpagina:last-child { page-break-after: auto; }
  .vel { box-shadow: none !important; border-radius: 0 !important; margin: 0 !important;
         width: 760px !important; max-width: 760px !important; zoom: 0.72;
         padding: 40px 46px !important; }
  .velwrap { padding: 6mm 0 0 5mm; }
  .achterkant { display: flex; flex-direction: column; align-items: center; justify-content: center;
                height: 100%; text-align: center; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; }
  .achterkant img.logo { height: 34mm; border-radius: 7mm; margin-bottom: 8mm; }
  .achterkant .slogan { font-size: 17pt; font-weight: 800; color: #12263a; line-height: 1.35; margin-bottom: 10mm; max-width: 110mm; }
  .achterkant img.qr { width: 52mm; height: 52mm; margin-bottom: 6mm; }
  .achterkant .code { display: inline-block; background: #8a6400; color: #fff; font-weight: 800;
                      letter-spacing: 1px; padding: 2.5mm 6mm; border-radius: 3mm; font-size: 13pt; margin-bottom: 5mm; }
  .achterkant .url { background: #0a7d43; color: #fff; font-size: 16pt; font-weight: 800;
                     padding: 4mm 12mm; border-radius: 4mm; margin-bottom: 4mm; }
  .achterkant .sub { font-size: 10.5pt; color: #5a6775; }
`;
html = html.replace("</style>", drukCss + "\n</style>");

// Pagina 1 inpakken + pagina 2 toevoegen
html = html.replace(/<body>/, '<body><div class="drukpagina"><div class="velwrap">');
html = html.replace(/<\/body>/, `</div></div>
<div class="drukpagina"><div class="achterkant">
  <img class="logo" src="${logoSrc}" alt="Leerkwartier" />
  <div class="slogan">Een kwartier per dag —<br/>écht begrijpen wat je leert.</div>
  <img class="qr" src="${qrSrc}" alt="QR-code" />
  <div class="code">HAARLEMMERMEER2027</div>
  <div class="url">leerkwartier.app</div>
  <div class="sub">Gratis oefenen voor de Doorstroomtoets · geen account nodig</div>
</div></div>
</body>`);

const drukHtml = join(root, "public", "drukwerk", "flyer-HAARLEMMERMEER2027-DRUK.html");
writeFileSync(drukHtml, html, "utf8");

const uit = join(root, "public", "drukwerk", "flyer-HAARLEMMERMEER2027-DRUK.pdf");
const chrome = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"';
execSync(`${chrome} --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${uit}" --user-data-dir="${join(root, ".chrome-print-tmp")}" "file:///${drukHtml.replace(/\\/g, "/")}"`, { stdio: "inherit", timeout: 60000 });
console.log("✅ " + uit);
