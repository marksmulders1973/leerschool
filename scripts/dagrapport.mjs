#!/usr/bin/env node
/**
 * dagrapport.mjs
 * --------------------------------------------------------------------
 * Genereert dagelijks Studiebol-statistieken-rapport als PDF.
 *
 * Output: C:\Users\mark-\Desktop\Studiebol stats\studiebol-stats-YYYY-MM-DD.pdf
 *
 * Gebruik:
 *   node scripts/dagrapport.mjs                 # vandaag
 *   node scripts/dagrapport.mjs --date=2026-04-25  # specifieke dag
 *
 * Geen npm install nodig — gebruikt Edge/Chrome headless voor PDF generatie.
 *
 * Tip voor automatisering: gebruik /schedule in Claude Code voor dagelijks
 * 12:00 trigger met `node scripts/dagrapport.mjs`.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const STATS_DIR = "C:\\Users\\mark-\\Desktop\\Studiebol stats";

// Lees env-vars uit .env
function leesEnv() {
  try {
    const env = {};
    const raw = require("node:fs").readFileSync(path.join(ROOT, ".env"), "utf8");
    raw.split(/\r?\n/).forEach(line => {
      const m = line.match(/^([A-Z_]+)=(.*)$/);
      if (m) env[m[1]] = m[2];
    });
    return env;
  } catch { return {}; }
}

import { readFileSync } from "node:fs";
const envRaw = readFileSync(path.join(ROOT, ".env"), "utf8");
const env = {};
envRaw.split(/\r?\n/).forEach(line => {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) env[m[1]] = m[2];
});

const SUPABASE_URL = env.VITE_SUPABASE_URL;
const SUPABASE_KEY = env.VITE_SUPABASE_ANON_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("❌ VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY niet gevonden in .env");
  process.exit(1);
}

const args = process.argv.slice(2);
const dateArg = args.find(a => a.startsWith("--date="));
const TARGET_DATE = dateArg ? dateArg.split("=")[1] : new Date().toISOString().slice(0, 10);

// Helper voor Supabase REST queries
async function supabaseRPC(query) {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  if (!r.ok) throw new Error(`Supabase RPC ${r.status}: ${await r.text()}`);
  return r.json();
}

async function supabaseSelect(table, params) {
  const url = new URL(`${SUPABASE_URL}/rest/v1/${table}`);
  Object.entries(params || {}).forEach(([k, v]) => url.searchParams.set(k, v));
  const r = await fetch(url, {
    headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` },
  });
  if (!r.ok) throw new Error(`Supabase ${table}: ${r.status} ${await r.text()}`);
  return r.json();
}

function fmtDate(iso) { return new Date(iso).toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long", year: "numeric" }); }

async function haalStats() {
  const dag = new Date(TARGET_DATE + "T00:00:00Z");
  const morgen = new Date(dag.getTime() + 24 * 60 * 60 * 1000);
  const gisteren = new Date(dag.getTime() - 24 * 60 * 60 * 1000);
  const week = new Date(dag.getTime() - 7 * 24 * 60 * 60 * 1000);

  const isoDag = dag.toISOString();
  const isoMorgen = morgen.toISOString();
  const isoGisteren = gisteren.toISOString();
  const isoWeek = week.toISOString();

  // Quizzes
  const lbVandaag = await supabaseSelect("leaderboard", {
    select: "player_name,subject,percentage,completed_at",
    "completed_at": `gte.${isoDag}`,
    "and": `(completed_at.lt.${isoMorgen})`,
  });
  const lbGisteren = await supabaseSelect("leaderboard", {
    select: "id",
    "completed_at": `gte.${isoGisteren}`,
    "and": `(completed_at.lt.${isoDag})`,
  });
  const lbWeek = await supabaseSelect("leaderboard", {
    select: "player_name,subject,percentage",
    "completed_at": `gte.${isoWeek}`,
  });

  // Obliterator
  const obliVandaag = await supabaseSelect("obliterator_scores", {
    select: "player_name,score,created_at",
    "created_at": `gte.${isoDag}`,
    "and": `(created_at.lt.${isoMorgen})`,
  });
  const obliGisteren = await supabaseSelect("obliterator_scores", {
    select: "id",
    "created_at": `gte.${isoGisteren}`,
    "and": `(created_at.lt.${isoDag})`,
  });
  const obliWeek = await supabaseSelect("obliterator_scores", {
    select: "player_name,score",
    "created_at": `gte.${isoWeek}`,
  });

  // Shares
  const sharesVandaag = await supabaseSelect("share_events", {
    select: "shared_by,platform",
    "created_at": `gte.${isoDag}`,
    "and": `(created_at.lt.${isoMorgen})`,
  });
  const sharesWeek = await supabaseSelect("share_events", {
    select: "shared_by,platform",
    "created_at": `gte.${isoWeek}`,
  });

  // Kudos
  const kudosVandaag = await supabaseSelect("kudos", {
    select: "id",
    "created_at": `gte.${isoDag}`,
    "and": `(created_at.lt.${isoMorgen})`,
  });
  const kudosWeek = await supabaseSelect("kudos", {
    select: "id,target_player_name,giver_name",
    "created_at": `gte.${isoWeek}`,
  });

  // Profielen
  const profielenWeek = await supabaseSelect("profiles", {
    select: "id",
    "created_at": `gte.${isoWeek}`,
  });

  // Aggregaties
  const uniekVandaag = new Set(lbVandaag.map(r => r.player_name)).size;
  const uniekWeek = new Set(lbWeek.map(r => r.player_name)).size;
  const obliUniekWeek = new Set(obliWeek.map(r => r.player_name)).size;
  const avgPctVandaag = lbVandaag.length
    ? (lbVandaag.reduce((s, r) => s + r.percentage, 0) / lbVandaag.length).toFixed(1)
    : "—";

  // Top spelers vandaag (quizzes)
  const tellerSpelers = {};
  lbVandaag.forEach(r => { tellerSpelers[r.player_name] = (tellerSpelers[r.player_name] || 0) + 1; });
  const topSpelers = Object.entries(tellerSpelers).sort((a, b) => b[1] - a[1]).slice(0, 5);

  // Quizzes per vak (week)
  const tellerVakken = {};
  lbWeek.forEach(r => { tellerVakken[r.subject] = (tellerVakken[r.subject] || 0) + 1; });
  const topVakken = Object.entries(tellerVakken).sort((a, b) => b[1] - a[1]).slice(0, 8);

  // Top OBLITERATOR (week)
  const obliPerSpeler = {};
  obliWeek.forEach(r => {
    if (!obliPerSpeler[r.player_name]) obliPerSpeler[r.player_name] = { top: 0, sessies: 0 };
    obliPerSpeler[r.player_name].sessies++;
    if (r.score > obliPerSpeler[r.player_name].top) obliPerSpeler[r.player_name].top = r.score;
  });
  const topObli = Object.entries(obliPerSpeler).sort((a, b) => b[1].top - a[1].top).slice(0, 5);
  const topVandaagObli = obliVandaag.length ? Math.max(...obliVandaag.map(r => r.score)) : "—";

  // Shares per platform (week)
  const sharesPerPlatform = {};
  sharesWeek.forEach(r => { sharesPerPlatform[r.platform || "?"] = (sharesPerPlatform[r.platform || "?"] || 0) + 1; });

  return {
    quizzes: {
      vandaag: lbVandaag.length, gisteren: lbGisteren.length, week: lbWeek.length,
      uniekVandaag, uniekWeek, avgPctVandaag,
      topSpelers, topVakken,
    },
    obli: {
      vandaag: obliVandaag.length, gisteren: obliGisteren.length, week: obliWeek.length,
      uniekWeek: obliUniekWeek, topVandaag: topVandaagObli, topAlltime: 0, topSpelersWeek: topObli,
    },
    shares: {
      vandaag: sharesVandaag.length, week: sharesWeek.length,
      uniekDelersWeek: new Set(sharesWeek.map(r => r.shared_by)).size,
      perPlatform: Object.entries(sharesPerPlatform).sort((a, b) => b[1] - a[1]),
    },
    kudos: { vandaag: kudosVandaag.length, week: kudosWeek.length },
    profielen: { week: profielenWeek.length },
  };
}

function genereerHTML(stats, datum) {
  const datumLabel = fmtDate(datum);
  const trendIcoon = (vandaag, gisteren) => {
    if (vandaag > gisteren) return `<span style="color:#00c853">▲ +${vandaag - gisteren}</span>`;
    if (vandaag < gisteren) return `<span style="color:#e53935">▼ ${vandaag - gisteren}</span>`;
    return `<span style="color:#888">— gelijk</span>`;
  };
  return `<!DOCTYPE html>
<html lang="nl"><head>
<meta charset="utf-8">
<title>Studiebol Stats — ${datumLabel}</title>
<style>
  @page { size: A4; margin: 18mm 16mm; }
  body { font-family: 'Segoe UI', Tahoma, sans-serif; color: #1a1a1a; max-width: 900px; margin: 0 auto; line-height: 1.5; }
  h1 { color: #00c853; border-bottom: 3px solid #00c853; padding-bottom: 6px; margin-bottom: 4px; }
  h2 { color: #0d5dbf; margin-top: 28px; border-left: 4px solid #0d5dbf; padding-left: 10px; }
  .datum { color: #666; font-size: 14px; margin-bottom: 24px; }
  table { width: 100%; border-collapse: collapse; margin: 8px 0; font-size: 13px; }
  th, td { padding: 8px 10px; border-bottom: 1px solid #e0e0e0; text-align: left; }
  th { background: #f5f5f5; font-weight: 700; color: #444; }
  td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 600; }
  .kpi { display: inline-block; padding: 12px 16px; background: linear-gradient(135deg, #00c853, #69f0ae); color: #fff; border-radius: 10px; margin-right: 8px; margin-bottom: 6px; }
  .kpi .label { font-size: 11px; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px; }
  .kpi .num { font-size: 24px; font-weight: 800; line-height: 1.2; }
  .small { font-size: 11px; color: #888; }
  .footer { margin-top: 30px; padding-top: 12px; border-top: 1px solid #e0e0e0; font-size: 10px; color: #999; text-align: center; }
  .ok { color: #00c853; font-weight: 700; }
  .warn { color: #e69500; font-weight: 700; }
  .bad { color: #e53935; font-weight: 700; }
</style>
</head><body>
<h1>📊 Studiebol Stats</h1>
<div class="datum">${datumLabel}</div>

<h2>📚 Quizzes</h2>
<div>
  <div class="kpi"><div class="label">vandaag</div><div class="num">${stats.quizzes.vandaag}</div></div>
  <div class="kpi" style="background:linear-gradient(135deg,#1a73e8,#69b2ff)"><div class="label">unieke spelers</div><div class="num">${stats.quizzes.uniekVandaag}</div></div>
  <div class="kpi" style="background:linear-gradient(135deg,#ff9800,#ffcc40)"><div class="label">gem. score</div><div class="num">${stats.quizzes.avgPctVandaag}%</div></div>
</div>
<table>
  <tr><th>Periode</th><th>Aantal voltooid</th><th>Trend t.o.v. vorige</th></tr>
  <tr><td>Vandaag</td><td class="num">${stats.quizzes.vandaag}</td><td>${trendIcoon(stats.quizzes.vandaag, stats.quizzes.gisteren)}</td></tr>
  <tr><td>Gisteren</td><td class="num">${stats.quizzes.gisteren}</td><td class="small">—</td></tr>
  <tr><td>Laatste 7 dagen</td><td class="num">${stats.quizzes.week}</td><td>${stats.quizzes.uniekWeek} unieke spelers</td></tr>
</table>

<h2>🏆 Top spelers vandaag (quizzes)</h2>
${stats.quizzes.topSpelers.length ? `<table><tr><th>#</th><th>Speler</th><th class="num">Quizzes</th></tr>${
  stats.quizzes.topSpelers.map(([n, c], i) => `<tr><td>${i === 0 ? "👑" : i + 1}</td><td>${n}</td><td class="num">${c}</td></tr>`).join("")
}</table>` : `<p class="small">Nog geen quizzes vandaag</p>`}

<h2>📖 Quizzes per vak (laatste 7 dagen)</h2>
${stats.quizzes.topVakken.length ? `<table><tr><th>Vak</th><th class="num">Aantal</th></tr>${
  stats.quizzes.topVakken.map(([v, c]) => `<tr><td>${v}</td><td class="num">${c}</td></tr>`).join("")
}</table>` : `<p class="small">Geen data</p>`}

<h2>💀 OBLITERATOR (mini-game)</h2>
<div>
  <div class="kpi" style="background:linear-gradient(135deg,#ff5030,#ffcc40)"><div class="label">sessies vandaag</div><div class="num">${stats.obli.vandaag}</div></div>
  <div class="kpi" style="background:linear-gradient(135deg,#ffd700,#ffaa00);color:#1a1a00"><div class="label">top score vandaag</div><div class="num">${stats.obli.topVandaag}</div></div>
</div>
<table>
  <tr><th>Periode</th><th>Sessies</th><th>Trend</th></tr>
  <tr><td>Vandaag</td><td class="num">${stats.obli.vandaag}</td><td>${trendIcoon(stats.obli.vandaag, stats.obli.gisteren)}</td></tr>
  <tr><td>Gisteren</td><td class="num">${stats.obli.gisteren}</td><td class="small">—</td></tr>
  <tr><td>Laatste 7 dagen</td><td class="num">${stats.obli.week}</td><td>${stats.obli.uniekWeek} unieke spelers</td></tr>
</table>

<h2>🔥 Top OBLITERATOR (laatste 7 dagen)</h2>
${stats.obli.topSpelersWeek.length ? `<table><tr><th>#</th><th>Speler</th><th class="num">Top score</th><th class="num">Sessies</th></tr>${
  stats.obli.topSpelersWeek.map(([n, d], i) => `<tr><td>${i === 0 ? "👑" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}</td><td>${n}</td><td class="num">${d.top}</td><td class="num">${d.sessies}</td></tr>`).join("")
}</table>` : `<p class="small">Geen data</p>`}

<h2>🌟 Sociale acties</h2>
<table>
  <tr><th>Type</th><th class="num">Vandaag</th><th class="num">Week</th><th>Detail</th></tr>
  <tr><td>📤 Shares</td><td class="num">${stats.shares.vandaag}</td><td class="num">${stats.shares.week}</td><td class="small">${stats.shares.uniekDelersWeek} unieke delers</td></tr>
  <tr><td>👏 Kudos (Goed gedaan!)</td><td class="num">${stats.kudos.vandaag}</td><td class="num">${stats.kudos.week}</td><td class="small">felicitaties uitgewisseld</td></tr>
  <tr><td>👤 Nieuwe profielen</td><td class="num">—</td><td class="num">${stats.profielen.week}</td><td class="small">geregistreerd</td></tr>
</table>
${stats.shares.perPlatform.length ? `<p class="small"><b>Shares per platform (week):</b> ${stats.shares.perPlatform.map(([p, c]) => `${p}: ${c}`).join(" · ")}</p>` : ""}

<h2>🔍 Aandachtspunten</h2>
<ul>
${stats.shares.week === 0 ? `<li class="warn">Geen shares deze week — share-knoppen worden niet gebruikt of zijn niet zichtbaar genoeg</li>` : `<li class="ok">${stats.shares.week} shares deze week — sociale viral werkt</li>`}
${stats.kudos.week === 0 ? `<li class="small">Nog geen kudos — net live, monitoren</li>` : `<li class="ok">${stats.kudos.week} kudos uitgewisseld — feature wordt gebruikt</li>`}
${stats.obli.vandaag > stats.quizzes.vandaag * 2 ? `<li class="warn">OBLITERATOR sessies (${stats.obli.vandaag}) >> quizzes (${stats.quizzes.vandaag}) — speeltijd domineert leertijd</li>` : ""}
${stats.profielen.week === 0 ? `<li class="warn">Geen nieuwe profielen — bezoekers maken geen account</li>` : `<li class="ok">${stats.profielen.week} nieuwe profielen deze week</li>`}
</ul>

<div class="footer">
Gegenereerd op ${new Date().toLocaleString("nl-NL")} · Studiebol stats automatisch dagrapport · Gemaakt met Claude Code
</div>
</body></html>`;
}

async function genereerPDF(htmlPath, pdfPath) {
  const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const browser = existsSync(edge) ? edge : (existsSync(chrome) ? chrome : null);
  if (!browser) {
    console.warn("⚠️  Geen Edge/Chrome gevonden — alleen HTML opgeslagen");
    return false;
  }
  return new Promise((resolve) => {
    const args = [
      "--headless",
      "--disable-gpu",
      "--no-sandbox",
      `--print-to-pdf=${pdfPath}`,
      "--print-to-pdf-no-header",
      "file:///" + htmlPath.replace(/\\/g, "/"),
    ];
    const proc = spawn(browser, args);
    let stderr = "";
    proc.stderr.on("data", d => stderr += d.toString());
    proc.on("close", (code) => {
      if (code !== 0 && !existsSync(pdfPath)) {
        console.warn(`⚠️  PDF generatie faalde (exit ${code}). HTML wel opgeslagen.`);
        if (stderr) console.warn(stderr.slice(0, 500));
        resolve(false);
      } else resolve(true);
    });
    proc.on("error", (e) => {
      console.warn("⚠️  Browser-spawn fout:", e.message);
      resolve(false);
    });
  });
}

async function main() {
  console.log(`📊 Studiebol dagrapport voor ${TARGET_DATE}...`);
  await fs.mkdir(STATS_DIR, { recursive: true });

  let stats;
  try {
    stats = await haalStats();
  } catch (e) {
    console.error("❌ Stats ophalen faalde:", e.message);
    process.exit(1);
  }

  const html = genereerHTML(stats, TARGET_DATE);
  const htmlPath = path.join(STATS_DIR, `studiebol-stats-${TARGET_DATE}.html`);
  const pdfPath = path.join(STATS_DIR, `studiebol-stats-${TARGET_DATE}.pdf`);
  await fs.writeFile(htmlPath, html, "utf8");
  console.log(`✓ HTML opgeslagen: ${htmlPath}`);

  const pdfOk = await genereerPDF(htmlPath, pdfPath);
  if (pdfOk) {
    console.log(`✓ PDF opgeslagen: ${pdfPath}`);
  }

  console.log(`\nKort overzicht:`);
  console.log(`  Quizzes vandaag : ${stats.quizzes.vandaag} (${stats.quizzes.uniekVandaag} unieke spelers)`);
  console.log(`  OBLITERATOR     : ${stats.obli.vandaag} sessies, top ${stats.obli.topVandaag}`);
  console.log(`  Shares vandaag  : ${stats.shares.vandaag}`);
  console.log(`  Kudos vandaag   : ${stats.kudos.vandaag}`);
}

main().catch(e => { console.error("❌ Fataal:", e); process.exit(1); });
