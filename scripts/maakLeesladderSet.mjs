// Genereert een los, printbaar HTML-bestand van de Leesladder — mét de
// antwoorden + uitleg direct onder elke vraag. Voor als Mark snel een setje
// voor iemand nodig heeft zonder de app/ontgrendeling.
//   node scripts/maakLeesladderSet.mjs A   →  Desktop\Leesladder-set-A.html
import { VERSIES } from "../src/components/leesladderData.js";
import { writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const LETTERS = ["A", "B", "C", "D"];
const versie = (process.argv[2] || "A").toUpperCase();

// Zelfde deterministische optie-hussel als LeesladderPage.jsx.
function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function husselVraag(v, seedStr) {
  let s = hashSeed(seedStr);
  const rnd = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const idx = v.options.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = (rnd() * (i + 1)) | 0;
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return { ...v, options: idx.map((i) => v.options[i]), answer: idx.indexOf(v.answer) };
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

let teller = 0;
const treden = VERSIES[versie].map((t, ti) => ({
  ...t,
  teksten: t.teksten.map((tx, xi) => ({
    ...tx,
    vragen: tx.vragen.map((v, vi) => ({ ...husselVraag(v, `${versie}-${ti}-${xi}-${vi}`), nr: ++teller })),
  })),
}));

// ── De vragen (zonder antwoord — kind maakt eerst zelf) ──────────
let body = "";
for (const t of treden) {
  body += `<section class="sheet"><h2>${t.emoji} Trede ${t.nr} — ${esc(t.titel)}</h2><p class="sub">${esc(t.sub)}</p>`;
  t.teksten.forEach((tx, ti) => {
    body += `<div class="tekst"><h3>📖 Tekst ${t.nr}.${ti + 1} — ${esc(tx.titel)}</h3><div class="verhaal">${esc(tx.tekst)}</div>`;
    for (const v of tx.vragen) {
      body += `<div class="vraag"><div class="q"><b>${v.nr}.</b> ${esc(v.q)}</div><div class="opts">`;
      v.options.forEach((opt, i) => { body += `<div><b>${LETTERS[i]}.</b> ${esc(opt)}</div>`; });
      body += `</div></div>`;
    }
    body += `</div>`;
  });
  body += `</section>`;
}

// ── Antwoordblad — apart achteraan (voor de begeleider) ──────────
let key = `<section class="sheet keysheet"><h2>✅ Antwoordblad & lees-trucs — versie ${versie}</h2>`;
key += `<p class="sub">Voor de ouder/begeleider — pas nakijken nadat het kind alles zelf heeft gemaakt.</p>`;
for (const t of treden) {
  key += `<div class="keytrede"><b>${t.emoji} Trede ${t.nr} — ${esc(t.titel)}</b>`;
  t.teksten.forEach((tx, ti) => {
    key += `<div class="keytekst"><span class="keytitel">📖 ${t.nr}.${ti + 1} ${esc(tx.titel)}</span>`;
    for (const v of tx.vragen) {
      key += `<div class="keyrij"><b>${v.nr}. ${LETTERS[v.answer]}</b> (${esc(v.options[v.answer])}) · truc: ${esc(v.type)} — ${esc(v.uitleg)}</div>`;
    }
    key += `</div>`;
  });
  key += `</div>`;
}
key += `</section>`;
body += key;

const html = `<!doctype html><html lang="nl"><head><meta charset="utf-8">
<title>Leesladder — versie ${versie} (met antwoorden)</title>
<style>
  body{font-family:Georgia,'Times New Roman',serif;color:#1a2332;max-width:760px;margin:0 auto;padding:24px 32px;line-height:1.6}
  h1{font-size:26px;margin:0 0 4px}
  .lead{color:#46546a;font-size:14px;margin:0 0 20px}
  .sheet{page-break-after:always}
  .sheet:last-child{page-break-after:auto}
  h2{font-size:20px;border-bottom:2px solid #1a2332;padding-bottom:6px;font-family:Arial,sans-serif}
  .sub{color:#6b7785;font-size:13px;margin-top:-6px}
  .tekst{margin-bottom:22px}
  h3{font-size:15px;background:#eef2f8;border-radius:6px;padding:7px 12px;font-family:Arial,sans-serif;margin:0 0 8px}
  .verhaal{border:1px solid #dde3ec;border-radius:8px;padding:12px 16px;font-size:14.5px;white-space:pre-line;margin-bottom:10px}
  .vraag{margin-bottom:12px;break-inside:avoid}
  .q{font-size:15px;margin-bottom:6px}
  .opts{display:grid;grid-template-columns:1fr 1fr;gap:2px 18px;padding-left:16px;font-size:14px;color:#3a4658}
  .keysheet{border-top:3px solid #1a2332}
  .keytrede{margin-bottom:12px;break-inside:avoid}
  .keytekst{display:block;margin:6px 0}
  .keytitel{font-weight:700;color:#46546a;font-size:13px}
  .keyrij{font-size:13px;color:#274427;margin:3px 0}
  @page{margin:16mm 14mm}
</style></head><body>
<h1>🪜 De Leesladder — versie ${versie}</h1>
<p class="lead">Begrijpend lezen in kleine stapjes · ${teller} vragen · antwoordblad met uitleg staat achteraan (voor de begeleider) · Leerkwartier — leerkwartier.app</p>
${body}
</body></html>`;

const out = join(homedir(), "Desktop", `Leesladder-set-${versie}.html`);
writeFileSync(out, html, "utf8");
console.log("Klaar:", out, "·", teller, "vragen");
