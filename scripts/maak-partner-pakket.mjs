// Partner-pakket 2.0 (idee #28, 12 aug 2026): élke partner-flyer krijgt
// (a) 1-pagina-garantie in de print-CSS en (b) een bewerkbare Word-versie.
//
// Gebruik:  node scripts/maak-partner-pakket.mjs CODE [CODE2 ...]
//           node scripts/maak-partner-pakket.mjs --alle
// Daarna:   powershell scripts/maak-partner-pakket.ps1   (Word-COM → .docx)
//
// Stappen per flyer-<CODE>.html in public/drukwerk/:
//   1. print-CSS vervangen door het standaard 1-pagina-blok (Alkmaar-recept)
//   2. inhoud + plaatjes uit de flyer halen (headless Chrome leest de DOM)
//   3. Word-vriendelijke HTML klaarzetten in %TEMP%\partner-pakket\<code>\
//   4. PDF opnieuw genereren (vers Chrome-profiel!) + paginateller-check
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, copyFileSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HIER = dirname(fileURLToPath(import.meta.url));
const DRUKWERK = join(HIER, "..", "public", "drukwerk");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const TEMP = join(process.env.TEMP || "/tmp", "partner-pakket");
const MARKER = "1-pagina-garantie (partner-pakket 2.0)";

const PRINT_BLOK = `@media print{
      /* ${MARKER} — 12 aug 2026, Teresa-les: moet op 1 A4 passen. */
      @page{size:A4;margin:0}
      body{background:#fff;padding:0}
      .vel{box-shadow:none;border-radius:0;max-width:none;padding:9mm 15mm}
      .kop{margin-bottom:2px}
      .merk .logo{height:66px;width:66px}
      .merk .naam{font-size:27px}
      .partner-logo img{height:46px}
      .feest{font-size:12px;padding:3px 11px;margin-bottom:5px}
      h1{font-size:24px;margin-bottom:10px}
      p{font-size:14.5px;line-height:1.55;margin-bottom:9px}
      ul{margin-bottom:8px}
      ul li{font-size:14px;line-height:1.5;padding:3px 0 3px 26px}
      ul li::before{font-size:15px}
      h2{font-size:16.5px;margin:13px 0 6px}
      .payoff{margin-bottom:14px;font-size:13px}
      .qr-blok{padding:14px 18px;margin:14px 0;gap:18px}
      .qr-blok img{width:126px;height:126px}
      .qr-blok p{font-size:14px;margin-bottom:6px}
      .qr-blok h2{margin:0 0 6px;font-size:16.5px}
      .qr-url{font-size:11px}
      .steun{padding:10px 15px;margin:13px 0}
      .steun img{height:36px}
      .steun p{font-size:14px}
      .url{font-size:20px;padding:12px;margin:13px 0 5px}
      .url-sub{font-size:12.5px;margin-bottom:8px}
      .voet{margin-top:10px;padding-top:7px;font-size:11px}
      .print-knop{display:none!important}
    }`;

// Tweede trap voor langere flyers: compacter, wordt automatisch gebruikt
// als de standaard-maten niet op 1 pagina passen.
const PRINT_BLOK_COMPACT = PRINT_BLOK
  .replace("— 12 aug 2026", "— compacte trap, 12 aug 2026")
  .replace(".vel{box-shadow:none;border-radius:0;max-width:none;padding:9mm 15mm}", ".vel{box-shadow:none;border-radius:0;max-width:none;padding:6mm 13mm}")
  .replace(".merk .logo{height:66px;width:66px}", ".merk .logo{height:54px;width:54px}")
  .replace(".merk .naam{font-size:27px}", ".merk .naam{font-size:23px}")
  .replace(".partner-logo img{height:46px}", ".partner-logo img{height:38px}")
  .replace("h1{font-size:24px;margin-bottom:10px}", "h1{font-size:20px;margin-bottom:6px}")
  .replace("p{font-size:14.5px;line-height:1.55;margin-bottom:9px}", "p{font-size:12.5px;line-height:1.42;margin-bottom:6px}")
  .replace("ul li{font-size:14px;line-height:1.5;padding:3px 0 3px 26px}", "ul li{font-size:12px;line-height:1.38;padding:2px 0 2px 23px}")
  .replace("h2{font-size:16.5px;margin:13px 0 6px}", "h2{font-size:14.5px;margin:8px 0 4px}")
  .replace(".payoff{margin-bottom:14px;font-size:13px}", ".payoff{margin-bottom:9px;font-size:11.5px}")
  .replace(".qr-blok{padding:14px 18px;margin:14px 0;gap:18px}", ".qr-blok{padding:9px 14px;margin:9px 0;gap:14px}")
  .replace(".qr-blok img{width:126px;height:126px}", ".qr-blok img{width:100px;height:100px}")
  .replace(".qr-blok p{font-size:14px;margin-bottom:6px}", ".qr-blok p{font-size:12px;margin-bottom:4px}")
  .replace(".qr-blok h2{margin:0 0 6px;font-size:16.5px}", ".qr-blok h2{margin:0 0 4px;font-size:14.5px}")
  .replace(".steun{padding:10px 15px;margin:13px 0}", ".steun{padding:6px 11px;margin:8px 0}")
  .replace(".steun img{height:36px}", ".steun img{height:28px}")
  .replace(".steun p{font-size:14px}", ".steun p{font-size:12px}")
  .replace(".url{font-size:20px;padding:12px;margin:13px 0 5px}", ".url{font-size:16px;padding:8px;margin:8px 0 4px}")
  .replace(".url-sub{font-size:12.5px;margin-bottom:8px}", ".url-sub{font-size:11px;margin-bottom:5px}")
  .replace(".voet{margin-top:10px;padding-top:7px;font-size:11px}", ".voet{margin-top:5px;padding-top:4px;font-size:9.5px}");

// In de pagina uitgevoerd door headless Chrome: leest de flyer-DOM uit.
const EXTRACTOR = `<script>
window.addEventListener("load", () => {
  const vel = document.querySelector(".vel") || document.body;
  const qrBlok = document.querySelector(".qr-blok");
  const pak = (el) => el ? el.innerHTML.trim() : null;
  const uit = {
    payoff: pak(vel.querySelector(".payoff")),
    feest: pak(vel.querySelector(".feest")),
    h1: pak(vel.querySelector("h1")),
    partnerLogo: vel.querySelector(".partner-logo img")?.src || null,
    intro: [...vel.children].filter(e => e.tagName === "P" && !e.className).map(e => e.innerHTML.trim()),
    qr: qrBlok ? {
      img: qrBlok.querySelector("img")?.src || null,
      titel: pak(qrBlok.querySelector("h2")),
      teksten: [...qrBlok.querySelectorAll("p")].map(e => e.innerHTML.trim()),
    } : null,
    secties: [...vel.querySelectorAll("h2")].filter(h => !h.closest(".qr-blok")).map(h => {
      const ul = h.nextElementSibling?.tagName === "UL" ? h.nextElementSibling : null;
      return { kop: h.innerHTML.trim(), punten: ul ? [...ul.querySelectorAll("li")].map(li => li.innerHTML.trim()) : [] };
    }),
    steun: vel.querySelector(".steun") ? {
      img: vel.querySelector(".steun img")?.src || null,
      tekst: pak(vel.querySelector(".steun p")),
    } : null,
    url: pak(vel.querySelector(".url")),
    urlSub: pak(vel.querySelector(".url-sub")),
    voet: pak(vel.querySelector(".voet")),
  };
  const pre = document.createElement("pre");
  pre.id = "PAKKET";
  pre.textContent = "PAKKETJSON" + JSON.stringify(uit);
  document.body.appendChild(pre);
});
</${"script"}>`;

function chrome(args) {
  return execFileSync(CHROME, args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024, stdio: ["ignore", "pipe", "ignore"] });
}

function schrijfDataUrl(dataUrl, basisPad) {
  const m = /^data:image\/([a-zA-Z+]+);base64,(.+)$/s.exec(dataUrl || "");
  if (!m) return null;
  const ext = m[1] === "jpeg" ? "jpg" : m[1].replace("+xml", "");
  const pad = `${basisPad}.${ext}`;
  writeFileSync(pad, Buffer.from(m[2], "base64"));
  return pad;
}

const ontsnap = (s) => s || "";

function bouwWordHtml(d, code, mapje) {
  const partnerImg = d.partnerLogo ? schrijfDataUrl(d.partnerLogo, join(mapje, "partner")) : null;
  const qrImg = d.qr?.img ? schrijfDataUrl(d.qr.img, join(mapje, "qr")) : null;
  const steunImg = d.steun?.img ? schrijfDataUrl(d.steun.img, join(mapje, "steun")) : null;
  copyFileSync(join(HIER, "partner-pakket-logo.png"), join(mapje, "lk-logo-kaal.png"));

  const html = `<!DOCTYPE html>
<html lang="nl"><head><meta charset="UTF-8" />
<title>Leerkwartier — flyer ${code} (bewerkbare Word-versie)</title>
<style>
  body{font-family:Arial,sans-serif;color:#1a2332;font-size:11pt;margin:0}
  h1{font-size:17pt;color:#1a2332;margin:6pt 0 8pt}
  h2{font-size:12pt;color:#0a7d43;margin:10pt 0 4pt}
  p{font-size:10.5pt;line-height:1.45;color:#3a4658;margin:0 0 7pt}
  td{vertical-align:middle}
  .naam{font-size:20pt;font-weight:bold;color:#0a7d43}
  .payoff{font-size:9.5pt;color:#5a6775}
  .vink{color:#00a852;font-weight:bold}
  .kader td{background:#fff8e6;border:1.5pt solid #f0d489;padding:8pt}
  .steun td{background:#f2f6fb;border:1pt solid #c9d9ec;padding:6pt}
  .urlbalk td{background:#0a7d43;color:#ffffff;font-size:15pt;font-weight:bold;text-align:center;padding:8pt}
  .subtekst{font-size:9.5pt;color:#5a6775;text-align:center}
  .voet{font-size:8.5pt;color:#8893a3}
</style></head><body>
<table width="100%" cellspacing="0" cellpadding="0"><tr>
  <td width="60"><img src="lk-logo-kaal.png" width="52" height="52" alt="Leerkwartier-logo" /></td>
  <td><span class="naam">&nbsp;Leerkwartier</span></td>
  ${partnerImg ? `<td align="right"><img src="${partnerImg.split(/[\\\/]/).pop()}" width="150" alt="Partner-logo" /></td>` : ""}
</tr></table>
${d.feest ? `<p style="color:#8a6400;font-weight:bold">${d.feest}</p>` : ""}
<p class="payoff">${ontsnap(d.payoff)}</p>
<h1>${ontsnap(d.h1)}</h1>
${(d.intro || []).map((p) => `<p>${p}</p>`).join("\n")}
${d.qr ? `<table class="kader" width="100%" cellspacing="0" cellpadding="0"><tr>
  ${qrImg ? `<td width="130" align="center"><img src="${qrImg.split(/[\\\/]/).pop()}" width="115" height="115" alt="QR-code" /></td>` : ""}
  <td>
    <p style="color:#8a6400;font-weight:bold;font-size:12pt;margin-bottom:4pt">${ontsnap(d.qr.titel)}</p>
    ${(d.qr.teksten || []).map((p) => `<p>${p}</p>`).join("\n")}
  </td>
</tr></table>` : ""}
${(d.secties || []).map((s) => `<h2>${s.kop}</h2>
<p>${s.punten.map((li) => `<span class="vink">✓</span> ${li}`).join("<br />\n")}</p>`).join("\n")}
${d.steun ? `<table class="steun" width="100%" cellspacing="0" cellpadding="0"><tr>
  ${steunImg ? `<td width="110" align="center"><img src="${steunImg.split(/[\\\/]/).pop()}" width="95" alt="Partner-logo" /></td>` : ""}
  <td><p style="margin:0">${ontsnap(d.steun.tekst)}</p></td>
</tr></table><p>&nbsp;</p>` : ""}
${d.url ? `<table class="urlbalk" width="100%" cellspacing="0" cellpadding="0"><tr><td>${d.url}</td></tr></table>` : ""}
${d.urlSub ? `<p class="subtekst">${d.urlSub}</p>` : ""}
${d.voet ? `<p class="voet">${d.voet}</p>` : ""}
</body></html>`;
  const pad = join(mapje, "word.html");
  writeFileSync(pad, html);
  return pad;
}

function verwerk(code) {
  const naam = `flyer-${code}`;
  const htmlPad = join(DRUKWERK, `${naam}.html`);
  if (!existsSync(htmlPad)) { console.log(`⏭️  ${code}: geen ${naam}.html`); return; }
  let html = readFileSync(htmlPad, "utf8");

  // 1. print-CSS → standaard 1-pagina-blok
  if (!html.includes(MARKER)) {
    if (/@media print\{/.test(html)) {
      // Eerste print-blok vervangen: t/m de eerste ingesprongen sluit-accolade
      // op een eigen regel (oude blokken hebben geen geneste accolades).
      html = html.replace(/@media print\{[\s\S]*?\n\s{2,6}\}/, PRINT_BLOK);
    } else {
      html = html.replace(/<\/style>/, `    ${PRINT_BLOK}\n  </style>`);
    }
    if (!html.includes(MARKER)) { console.log(`❌ ${code}: print-CSS niet vervangen (structuur wijkt af)`); return; }
    writeFileSync(htmlPad, html);
  }

  // 2. inhoud uitlezen via headless Chrome
  const mapje = join(TEMP, code);
  rmSync(mapje, { recursive: true, force: true });
  mkdirSync(mapje, { recursive: true });
  const tmpHtml = join(DRUKWERK, `_tmp-extract-${code}.html`);
  writeFileSync(tmpHtml, html.replace("</body>", `${EXTRACTOR}</body>`));
  let dom;
  try {
    dom = chrome(["--headless=new", "--disable-gpu", "--allow-file-access-from-files", "--virtual-time-budget=8000",
      `--user-data-dir=${join(TEMP, "profiel-extract")}`, "--dump-dom", `file:///${tmpHtml.replace(/\\/g, "/")}`]);
  } finally {
    rmSync(tmpHtml, { force: true });
  }
  const m = dom.match(/PAKKETJSON(\{[\s\S]*?\})<\/pre>/);
  if (!m) { console.log(`❌ ${code}: inhoud niet uit te lezen`); return; }
  const data = JSON.parse(m[1].replaceAll("&amp;", "&"));

  // 3. Word-vriendelijke HTML klaarzetten (PS1-stap maakt er een .docx van)
  bouwWordHtml(data, code, mapje);

  // 4. PDF opnieuw genereren met een VERS profiel (cache-les 12 aug!)
  const maakPdf = (nr) => {
    const pdfTmp = join(mapje, `${naam}.pdf`);
    chrome(["--headless=new", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${pdfTmp}`,
      `--user-data-dir=${join(mapje, `profiel-pdf-${nr}`)}`, `file:///${htmlPad.replace(/\\/g, "/")}`]);
    return { pdfTmp, paginas: (readFileSync(pdfTmp).toString("latin1").match(/\/Count (\d+)/) || [])[1] || "?" };
  };
  let { pdfTmp, paginas } = maakPdf(1);
  let trap = "standaard";
  if (paginas !== "1" && !html.includes("compacte trap")) {
    html = readFileSync(htmlPad, "utf8").replace(PRINT_BLOK, PRINT_BLOK_COMPACT);
    writeFileSync(htmlPad, html);
    ({ pdfTmp, paginas } = maakPdf(2));
    trap = "compact";
  }
  copyFileSync(pdfTmp, join(DRUKWERK, `${naam}.pdf`));
  console.log(`${paginas === "1" ? "✅" : "⚠️"} ${code}: PDF ${paginas} pagina('s) (${trap}) · Word-HTML klaar in ${mapje}`);
}

let codes = process.argv.slice(2);
if (codes[0] === "--alle") {
  codes = readdirSync(DRUKWERK)
    .filter((f) => /^flyer-[A-Z0-9]+\.html$/.test(f))
    .map((f) => f.replace(/^flyer-|\.html$/g, ""));
}
if (!codes.length) { console.log("Gebruik: node scripts/maak-partner-pakket.mjs CODE... | --alle"); process.exit(1); }
mkdirSync(TEMP, { recursive: true });
for (const code of codes) verwerk(code.toUpperCase());
console.log("\nVolgende stap (maakt de .docx-bestanden): powershell -File scripts/maak-partner-pakket.ps1");
