// 📊 Wekelijks ouder-rapport per e-mail (A8.1, concurrentie-audit 2026-07-08).
// Dé Squla-feature (maandag-weekrapport voor ouders) — bij ons gratis. Elke
// maandag krijgt elke ouder met een GEVERIFIEERDE kind-koppeling (ouder-
// dashboard → koppelcode) één mail: wat het kind afgelopen week oefende,
// sterkste onderwerp + aandachtspunt, en de niveau-indicatie (B6).
//
// GEEN eigen cron: Vercel Hobby staat maar 2 crons toe (beide bezet). Daarom
// lift dit mee op de dagelijkse /api/send-weekly-lesmateriaal-run: die roept
// op maandag (Europe/Amsterdam) stuurOuderRapporten() aan. Dubbel-versturen
// wordt afgevangen via admin_meta['ouder_rapport_last_sent'].
//
// Handmatig testen: GET /api/send-ouder-rapport?key=<CRON_SECRET>&force=1
// (force slaat de maandag- en al-verstuurd-check over; mail gaat écht uit).
//
// Data-eerlijkheid: attempts/correct in topic_mastery zijn CUMULATIEF —
// we tonen dus "score tot nu toe" bij onderwerpen die deze week zijn
// aangeraakt (last_seen in de weekvenster), geen verzonnen week-tellingen.

import { createRequire } from "module";
import { maakOuderMailSectie } from "../src/shared/niveauIndicatie.js";

// JSON via createRequire: een kale ESM-JSON-import vereist import-attributes
// in nieuwere Node-versies en breekt dan pas op runtime in de Vercel-functie.
const require = createRequire(import.meta.url);
const pathManifest = require("../src/learnPaths/pathManifest.generated.json");

const SITE = "https://leerkwartier.app";
const WEEK_MS = 7 * 86400000;

async function sb(path, opts, base, key) {
  return fetch(`${base}/rest/v1/${path}`, {
    ...opts,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...(opts.headers || {}),
    },
  });
}

function esc(s) {
  return String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

const MANIFEST_BY_ID = new Map(pathManifest.map((p) => [p.id, p]));
function padLabel(pathId) {
  const p = MANIFEST_BY_ID.get(pathId);
  if (!p) return pathId;
  return `${p.emoji ? p.emoji + " " : ""}${p.title}`;
}

// Zelfde niveau-sectie als de weekmail (RPC matcht alleen via geverifieerde
// koppeling — privacy). Fout of leeg → null, rapport gaat gewoon door.
async function haalNiveauSectie(email, base, key) {
  try {
    const r = await sb(
      "rpc/niveau_resultaten_voor_email",
      { method: "POST", body: JSON.stringify({ p_email: email }) },
      base, key
    );
    const rows = await r.json();
    if (!Array.isArray(rows) || rows.length === 0) return null;
    const leeg = () => ({ f1: { goed: 0, totaal: 0 }, s: { goed: 0, totaal: 0 } });
    const resultaten = { rekenen: leeg(), lezen: leeg(), taalverzorging: leeg() };
    for (const row of rows) {
      const slot = row.ref === "1F" ? "f1" : "s";
      if (!resultaten[row.onderdeel]) continue;
      resultaten[row.onderdeel][slot].goed += row.correct || 0;
      resultaten[row.onderdeel][slot].totaal += row.attempts || 0;
    }
    return maakOuderMailSectie(resultaten);
  } catch {
    return null;
  }
}

// Alle mastery-rijen van één kind. Scoping (bug-jacht 11 jul): als de
// koppeling een child_user_id heeft (kind was ingelogd bij het inwisselen van
// de koppelcode) filteren we dáárop — anders mengen naamgenoten uit andere
// gezinnen ('Sophie', 'Tom') hun data in dit rapport. Legacy-koppelingen
// zonder user_id houden naam-match.
// Foutpad: null = "ophalen mislukt" (rapport moet dat eerlijk zeggen),
// [] = "echt geen activiteit". Voorheen werd elke storing stilletjes
// 'deze week niet geoefend' — actief onjuiste info naar de ouder.
async function haalKindActiviteit(childName, childUserId, base, key) {
  try {
    const naam = encodeURIComponent(String(childName).trim());
    const userFilter = childUserId ? `&user_id=eq.${encodeURIComponent(childUserId)}` : "";
    const r = await sb(
      `topic_mastery?player_name=ilike.${naam}${userFilter}&select=path_id,attempts,correct,streak,last_seen&order=last_seen.desc&limit=300`,
      { method: "GET" }, base, key
    );
    if (!r.ok) return null;
    const rows = await r.json();
    if (!Array.isArray(rows)) return null;
    // Dedupliceer per pad: 'Brian' en 'brian' zijn aparte rijen (UNIQUE op
    // player_name+path_id is hoofdlettergevoelig) — samenvoegen, anders staat
    // hetzelfde onderwerp twee keer in de mail.
    const perPad = new Map();
    for (const row of rows) {
      const oud = perPad.get(row.path_id);
      if (!oud) { perPad.set(row.path_id, { ...row }); continue; }
      oud.attempts = (oud.attempts || 0) + (row.attempts || 0);
      oud.correct = (oud.correct || 0) + (row.correct || 0);
      if (row.last_seen && (!oud.last_seen || row.last_seen > oud.last_seen)) oud.last_seen = row.last_seen;
    }
    return [...perPad.values()].sort((a, b) => String(b.last_seen).localeCompare(String(a.last_seen)));
  } catch {
    return null;
  }
}

function pctVan(r) {
  return r.attempts > 0 ? Math.round((r.correct / r.attempts) * 100) : 0;
}
function balkKleur(pct) {
  return pct >= 75 ? "#00C853" : pct >= 50 ? "#ffd54f" : "#ff8a65";
}

// Eén kind-sectie (HTML + tekst) uit de mastery-rijen.
// rows === null betekent: ophalen mislukt → eerlijk melden, niet doen alsof
// het kind niets deed (data-eerlijkheid, zie header).
function maakKindSectie(childName, rows) {
  const naam = esc(childName);

  if (rows === null) {
    const html = `
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:18px;margin:0 0 18px;">
        <div style="font-size:16px;font-weight:800;color:#fff;margin-bottom:8px;">👤 ${naam}</div>
        <p style="font-size:14px;line-height:1.6;color:#cdd6e5;margin:0 0 12px;">We konden de oefen-gegevens op dit moment niet ophalen (tijdelijke storing bij ons). De actuele stand vind je altijd in het ouder-dashboard:</p>
        <a href="${SITE}/ouder?utm_source=email&utm_campaign=ouder-rapport" style="display:block;text-align:center;background:rgba(0,200,83,0.10);border:1.5px solid #00C853;color:#69f0ae;text-decoration:none;font-weight:800;font-size:15px;padding:12px;border-radius:12px;">📈 Bekijk de actuele stand →</a>
      </div>`;
    const text = `${childName}\nWe konden de oefen-gegevens nu niet ophalen (tijdelijke storing). Actuele stand: ${SITE}/ouder\n`;
    return { html, text };
  }

  const sinds = Date.now() - WEEK_MS;
  const dezeWeek = rows.filter((r) => r.last_seen && new Date(r.last_seen).getTime() >= sinds);

  if (dezeWeek.length === 0) {
    const html = `
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:18px;margin:0 0 18px;">
        <div style="font-size:16px;font-weight:800;color:#fff;margin-bottom:8px;">👤 ${naam}</div>
        <p style="font-size:14px;line-height:1.6;color:#cdd6e5;margin:0 0 12px;">Deze week nog niet geoefend. Geen zorgen — een kwartier is genoeg om er weer in te komen. De vraag van vandaag is een makkelijk startpunt:</p>
        <a href="${SITE}/vandaag?utm_source=email&utm_campaign=ouder-rapport" style="display:block;text-align:center;background:linear-gradient(135deg,#00C853,#00a846);color:#fff;text-decoration:none;font-weight:800;font-size:15px;padding:12px;border-radius:12px;">🎯 Doe samen de vraag van vandaag →</a>
      </div>`;
    const text = `${childName}\nDeze week nog niet geoefend. Een kwartier is genoeg — begin met de vraag van vandaag: ${SITE}/vandaag\n`;
    return { html, text };
  }

  // Serieus geoefende onderwerpen (>=3 pogingen totaal) voor sterk/zwak-oordeel.
  const serieus = dezeWeek.filter((r) => (r.attempts || 0) >= 3);
  const sterkste = serieus.length ? serieus.reduce((a, b) => (pctVan(b) > pctVan(a) ? b : a)) : null;
  const zwakste = serieus.length >= 2 ? serieus.reduce((a, b) => (pctVan(b) < pctVan(a) ? b : a)) : null;

  const topRijen = dezeWeek.slice(0, 5).map((r) => {
    const pct = pctVan(r);
    return `
      <tr>
        <td style="padding:6px 10px 6px 0;font-size:13.5px;color:#cdd6e5;line-height:1.35;">${esc(padLabel(r.path_id))}</td>
        <td style="padding:6px 0;width:120px;">
          <div style="background:rgba(255,255,255,0.10);border-radius:999px;height:10px;overflow:hidden;"><div style="width:${pct}%;height:10px;background:${balkKleur(pct)};border-radius:999px;"></div></div>
        </td>
        <td style="padding:6px 0 6px 8px;font-size:13px;font-weight:800;color:${balkKleur(pct)};width:44px;text-align:right;">${pct}%</td>
      </tr>`;
  }).join("");

  const sterkHtml = sterkste
    ? `<p style="font-size:14px;line-height:1.6;color:#cdd6e5;margin:12px 0 0;">💪 <strong style="color:#69f0ae;">Sterkste:</strong> ${esc(padLabel(sterkste.path_id))} (${pctVan(sterkste)}% goed)</p>`
    : "";
  const zwakHtml = zwakste && zwakste.path_id !== sterkste?.path_id
    ? `<p style="font-size:14px;line-height:1.6;color:#cdd6e5;margin:4px 0 0;">🎯 <strong style="color:#ffd54f;">Aandachtspunt:</strong> ${esc(padLabel(zwakste.path_id))} (${pctVan(zwakste)}% goed) — <a href="${SITE}/leren?utm_source=email&utm_campaign=ouder-rapport" style="color:#69f0ae;font-weight:700;text-decoration:none;">oefen dit samen →</a></p>`
    : "";

  const html = `
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:18px;margin:0 0 18px;">
      <div style="font-size:16px;font-weight:800;color:#fff;margin-bottom:4px;">👤 ${naam}</div>
      <div style="font-size:13px;color:#9fb0c6;margin-bottom:12px;">Deze week met ${dezeWeek.length} onderwerp${dezeWeek.length === 1 ? "" : "en"} bezig geweest · score tot nu toe per onderwerp:</div>
      <table style="border-collapse:collapse;width:100%;">${topRijen}</table>
      ${sterkHtml}
      ${zwakHtml}
    </div>`;

  const textRijen = dezeWeek.slice(0, 5).map((r) => `  - ${padLabel(r.path_id).replace(/[^\x20-\x7EÀ-ÿ]/g, "").trim()}: ${pctVan(r)}%`).join("\n");
  const text = `${childName} — deze week ${dezeWeek.length} onderwerp(en) geoefend:\n${textRijen}${sterkste ? `\n  Sterkste: ${pctVan(sterkste)}%` : ""}${zwakste ? ` · Aandachtspunt: ${pctVan(zwakste)}%` : ""}\n`;
  return { html, text };
}

function maakRapportMail(parentEmail, kindSecties, niveauSectie) {
  const dashboard = `${SITE}/ouder?utm_source=email&utm_campaign=ouder-rapport`;
  const onderwerp = "📊 Weekrapport: zo ging het leren deze week";
  const html = `<!doctype html><html lang="nl"><body style="margin:0;background:#0a0f1e;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e8edf5;">
  <div style="max-width:520px;margin:0 auto;padding:28px 22px;">
    <div style="font-size:22px;font-weight:800;color:#fff;margin-bottom:6px;">Leerkwartier</div>
    <div style="font-size:13px;color:#69f0ae;font-weight:700;margin-bottom:20px;">📊 Jouw wekelijkse ouder-rapport</div>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 20px;">Hoi! Dit is je maandag-rapport: zo ging het leren afgelopen week. Kort en eerlijk — zodat jij weet waar je kind staat, zonder mee te hoeven kijken over de schouder.</p>
    ${kindSecties.map((s) => s.html).join("")}
    ${niveauSectie ? `<div style="background:#f4f7fb;color:#1c2840;border-radius:12px;padding:4px 16px 14px;margin-bottom:20px;">${niveauSectie}</div>` : ""}
    <a href="${dashboard}" style="display:block;text-align:center;background:rgba(0,200,83,0.10);border:1.5px solid #00C853;color:#69f0ae;text-decoration:none;font-weight:800;font-size:15px;padding:12px;border-radius:12px;margin-bottom:22px;">📈 Bekijk alles in het ouder-dashboard →</a>
    <p style="font-size:12.5px;line-height:1.6;color:#9fb0c6;margin:0 0 14px;">💚 Ken je een ouder uit de klas die dit ook zou willen? Leerkwartier is gratis — stuur <a href="https://leerkwartier.app/?utm_source=ouder_rapport" style="color:#69f0ae;">leerkwartier.app</a> gerust door.</p>
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:0;">Je krijgt dit rapport omdat je op leerkwartier.app een kind aan je account koppelde. Liever geen rapport meer? Verwijder de koppeling in het <a href="${dashboard}" style="color:#9fb0c6;">ouder-dashboard</a> — direct geregeld.</p>
  </div></body></html>`;
  const text = `Leerkwartier — wekelijks ouder-rapport\n\n${kindSecties.map((s) => s.text).join("\n")}\nAlles bekijken: ${dashboard}\n\nKen je een ouder uit de klas die dit ook zou willen? Leerkwartier is gratis: https://leerkwartier.app\n\nLiever geen rapport meer? Verwijder de koppeling in het ouder-dashboard.`;
  return { onderwerp, html, text };
}

// ── Kern: verstuur alle rapporten. Wordt maandags aangeroepen vanuit de
//    dagelijkse lesmateriaal-cron, of handmatig via de handler hieronder. ──
export async function stuurOuderRapporten({ base, key, RESEND, FROM, force = false }) {
  // Dubbel-versturen afvangen (cron kan herstarten): admin_meta-datumstempel.
  const vandaagStr = new Date().toISOString().slice(0, 10);
  if (!force) {
    try {
      const r = await sb(`admin_meta?key=eq.ouder_rapport_last_sent&select=value`, { method: "GET" }, base, key);
      const rows = await r.json();
      if (Array.isArray(rows) && rows[0]?.value === vandaagStr) {
        return { sent: 0, kandidaten: 0, reden: "vandaag-al-verstuurd" };
      }
    } catch { /* stempel onleesbaar → gewoon doorgaan */ }
  }

  let paren;
  try {
    const r = await sb("rpc/ouder_weekrapport_kandidaten", { method: "POST", body: "{}" }, base, key);
    paren = await r.json();
    if (!Array.isArray(paren)) throw new Error(JSON.stringify(paren).slice(0, 150));
  } catch (e) {
    return { sent: 0, kandidaten: 0, reden: "kandidaten-fout: " + String(e).slice(0, 100) };
  }
  if (paren.length === 0) return { sent: 0, kandidaten: 0, reden: "geen-geverifieerde-koppelingen" };

  // Groepeer kinderen per ouder-adres → één mail per ouder. Per kind ook het
  // child_user_id meenemen (naam → uid); staat de naam er dubbel in, dan wint
  // de rij mét uid (strakst gescopet).
  const perOuder = new Map();
  for (const p of paren) {
    if (!p.parent_email || !p.child_name) continue;
    const adres = String(p.parent_email).toLowerCase();
    if (!perOuder.has(adres)) perOuder.set(adres, new Map());
    const kinderen = perOuder.get(adres);
    if (!kinderen.has(p.child_name) || p.child_user_id) kinderen.set(p.child_name, p.child_user_id || null);
  }

  let gelukt = 0;
  const fouten = [];
  for (const [adres, kinderen] of perOuder) {
    try {
      const secties = [];
      for (const [kind, kindUid] of kinderen) {
        const rows = await haalKindActiviteit(kind, kindUid, base, key);
        if (rows === null) fouten.push(adres.slice(0, 6) + ":activiteit-fetch-mislukt");
        secties.push(maakKindSectie(kind, rows));
      }
      const niveauSectie = await haalNiveauSectie(adres, base, key);
      const { onderwerp, html, text } = maakRapportMail(adres, secties, niveauSectie);
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: FROM, to: [adres], subject: onderwerp, html, text }),
      });
      if (!r.ok) { fouten.push(adres.slice(0, 6) + ":" + r.status); continue; }
      gelukt++;
    } catch (e) {
      fouten.push(adres.slice(0, 6) + ":" + String(e).slice(0, 50));
    }
  }

  // Datumstempel zetten (upsert op key).
  try {
    await sb(`admin_meta?on_conflict=key`, {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({ key: "ouder_rapport_last_sent", value: vandaagStr, updated_at: new Date().toISOString() }),
    }, base, key);
  } catch { /* stempel-fout is niet fataal */ }

  return { sent: gelukt, kandidaten: perOuder.size, fouten };
}

// Handmatige trigger (test): GET /api/send-ouder-rapport?key=<CRON_SECRET>&force=1
export default async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers["authorization"] || "";
  const keyParam = (req.query && req.query.key) || "";
  // Fail-closed (audit 16-07): ontbreekt CRON_SECRET, dan is het endpoint DICHT
  // — voorheen viel de hele check weg en kon iedereen mass-mails triggeren.
  if (!secret) return res.status(500).json({ error: "cron_secret_missing" });
  if (auth !== `Bearer ${secret}` && keyParam !== secret) {
    return res.status(401).json({ error: "unauthorized" });
  }
  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) return res.status(500).json({ error: "supabase-config-missing" });
  const RESEND = process.env.RESEND_API_KEY;
  const FROM = process.env.EMAIL_FROM || "Leerkwartier <hallo@leerkwartier.app>";
  if (!RESEND) return res.status(200).json({ ok: true, sent: 0, reason: "resend-uit" });

  const uitslag = await stuurOuderRapporten({ base, key, RESEND, FROM, force: req.query?.force === "1" });
  return res.status(200).json({ ok: true, ...uitslag });
}
