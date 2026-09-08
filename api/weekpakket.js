// Weekpakket — serveert het exclusieve weekmateriaal ná code-controle.
// De content staat in Supabase (weekpakket_edities, RLS zonder anon-policy) en
// bewust NIET in de openbare repo of op raadbare URLs. Code komt alleen per
// mail (weekmail + aanmeld-mail); Mark heeft een meesterscode (ook archief).
// GET /api/weekpakket?code=XXXXXX[&deel=antwoorden][&week=2026-W36 (alleen master)]
import { checkCode, isoWeekKey } from "./_lib/weekcode.js";

const SITE = "https://leerkwartier.app";

function esc(s) {
  return String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function pagina(titel, binnen, { print = false } = {}) {
  return `<!doctype html><html lang="nl"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>${esc(titel)} — Leerkwartier Weekpakket</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: "Segoe UI", Arial, sans-serif; color: #1c2840; margin: 0; background: #f4f7fb; }
  .vel { max-width: 760px; margin: 0 auto; padding: 28px 30px; background: #fff; min-height: 100vh; }
  h1 { font-size: 22px; color: #0a7d3c; margin: 0 0 2px; }
  .sub { color: #56627a; font-size: 13px; margin-bottom: 16px; }
  h2 { font-size: 16px; color: #16233f; border-bottom: 2px solid #0a7d3c; padding-bottom: 3px; margin: 22px 0 10px; }
  .vraag { margin: 0 0 13px; font-size: 14.5px; line-height: 1.55; }
  .invul { color: #9aa7ba; border-bottom: 1.5px dotted #c3ccd9; display: inline-block; min-width: 220px; }
  .maker { background: #f0faf3; border: 1px solid #bfe3cc; border-radius: 12px; padding: 12px 16px; margin: 14px 0 6px; font-size: 14px; line-height: 1.6; }
  .maker b { color: #0a7d3c; }
  .knoppen { margin: 18px 0; }
  .knoppen a { display: inline-block; background: #0a7d3c; color: #fff; text-decoration: none; font-weight: 700; padding: 10px 16px; border-radius: 10px; margin-right: 10px; font-size: 14px; }
  .knoppen a.licht { background: #eef4ff; color: #1e4fa3; }
  .voet { color: #7d8aa0; font-size: 12px; margin-top: 24px; border-top: 1px solid #e3e9f2; padding-top: 10px; }
  .leestekst { background: #f8f9fc; border-left: 4px solid #1e4fa3; padding: 10px 14px; font-size: 14px; line-height: 1.65; margin: 8px 0 14px; }
  ol.antw { font-size: 14px; line-height: 1.7; }
  @media print { .knoppen, .voet-web { display: none; } body { background: #fff; } .vel { padding: 0; } }
</style></head><body><div class="vel">${binnen}</div></body></html>`;
}

async function haalEditie(weekKey) {
  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) return null;
  const r = await fetch(
    `${base}/rest/v1/weekpakket_edities?week_key=eq.${encodeURIComponent(weekKey)}&gepubliceerd=eq.true&select=*&limit=1`,
    { headers: { apikey: key, Authorization: `Bearer ${key}` } }
  );
  if (!r.ok) return null;
  const rows = await r.json();
  return Array.isArray(rows) && rows[0] ? rows[0] : null;
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).send("method");
  if (!process.env.WEEKPAKKET_SECRET) {
    return res.status(503).send(pagina("Nog even geduld", `<h1>Het Weekpakket start binnenkort</h1><p>Deze functie wordt nog ingericht. Kijk het later nog eens!</p>`));
  }

  const check = checkCode(req.query.code);
  if (!check.ok) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(403).send(pagina("Code klopt niet", `
      <h1>Die code klopt niet (meer)</h1>
      <p class="sub">De code wisselt elke week — je vindt de nieuwste altijd in de wekelijkse mail van Leerkwartier.</p>
      <div class="knoppen"><a class="licht" href="${SITE}/weekpakket.html">← Terug (of meld je aan voor de mail)</a></div>`));
  }

  // Master mag een specifieke week kiezen; gewone codes alleen hun eigen week.
  let weekKey = check.weekKey;
  if (check.master && /^\d{4}-W\d{2}$/.test(String(req.query.week || ""))) weekKey = String(req.query.week);

  const editie = await haalEditie(weekKey);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  if (!editie) {
    return res.status(404).send(pagina("Nog niet klaar", `
      <h1>Het pakket van deze week staat er nog niet</h1>
      <p class="sub">Week ${esc(weekKey)} — probeer het later vandaag nog eens.</p>`));
  }

  const codeParam = encodeURIComponent(String(req.query.code));
  const weekParam = check.master ? `&week=${encodeURIComponent(weekKey)}` : "";
  const wilAntwoorden = String(req.query.deel || "") === "antwoorden";

  const kop = `
    <h1>📬 Weekpakket — ${esc(editie.titel)}</h1>
    <div class="sub">Week ${esc(weekKey)} · alleen voor mail-abonnees van Leerkwartier · print dit vel en ga aan de slag${check.master ? " · <b>meesterscode</b>" : ""}</div>
    <div class="maker"><b>Van de maker:</b> ${editie.maker_alinea}</div>`;

  if (wilAntwoorden) {
    return res.status(200).send(pagina(`Antwoorden ${editie.titel}`, `${kop}
      <div class="knoppen"><a class="licht" href="/api/weekpakket?code=${codeParam}${weekParam}">← Naar de vragen</a> <a href="javascript:window.print()">🖨️ Print het antwoordblad</a></div>
      <h2>✅ Antwoordblad — voor de ouder of verzorger</h2>
      ${editie.html_antwoorden}
      <div class="voet">Leerkwartier — een kwartier per dag leren, een leven lang slimmer. Oefenen in de app blijft gratis; dit pakket is extra post voor mail-abonnees.</div>`));
  }

  return res.status(200).send(pagina(editie.titel, `${kop}
    <div class="knoppen"><a href="javascript:window.print()">🖨️ Print dit pakket</a> <a class="licht" href="/api/weekpakket?code=${codeParam}${weekParam}&deel=antwoorden">Antwoordblad (voor de ouder/verzorger) →</a></div>
    ${editie.html_vragen}
    <div class="voet">Leerkwartier — een kwartier per dag leren, een leven lang slimmer. Oefenen in de app blijft gratis; dit pakket is extra post voor mail-abonnees. Volgende week: nieuwe code in de mail.</div>`));
}
