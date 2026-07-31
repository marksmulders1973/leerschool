// Leerkwartier-ouder-check — stuurt DIRECT een persoonlijk oefenblad na een
// toets (v1: topografie via de wereldbol). De ouder krijgt: de uitslag + 10
// oefenvragen (de fout-beantwoorde eerst, aangevuld tot 10) mét uitleg en een
// antwoordsleutel. Wordt aangeroepen vanuit src/components/TopografieCheck.jsx.
//
// Vak-onafhankelijk opgezet: nu alleen `topografie`; later pluggen rekenen/taal
// in met hun eigen bank (zelfde {vraag, goed, uitleg}-vorm).
//
// KLAAR-MAAR-UIT: zonder RESEND_API_KEY → 503 (client toont nette fout).
// Hergebruikt de env-vars van de bestaande e-mailmachine (RESEND_API_KEY,
// EMAIL_FROM, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY).

import { TOPO_VRAGEN, bouwOefenbladVragen } from "../src/data/topografieVragen.js";
import { mailTaglineHtml } from "./_lib/mail-tagline.js";

const SITE = "https://leerkwartier.app";
const LETTERS = ["A", "B", "C", "D", "E", "F"];

// Vak-registry — uitbreiden zodra rekenen/taal/etc. een eigen bank hebben.
const VAKKEN = {
  topografie: { label: "topografie", bouw: (foutIds) => bouwOefenbladVragen(foutIds, 10) },
};

function esc(s) {
  return String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

async function sb(path, opts, base, key) {
  return fetch(`${base}/rest/v1/${path}`, {
    ...opts,
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", ...(opts.headers || {}) },
  });
}

// Insert (of pak bestaande) lead in upgrade_waitlist en geef de unsubscribe_token terug.
// We zetten last_sent_at/sent_count zodat de dagelijkse cron geen dubbele welkomstmail stuurt.
async function upsertLead(email, base, key) {
  try {
    const ins = await sb(
      "upgrade_waitlist",
      {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify({
          email, plan: "wereldbol", source: "topocheck",
          consent_at: new Date().toISOString(),
          last_sent_at: new Date().toISOString(), sent_count: 1,
        }),
      },
      base, key
    );
    if (ins.ok) {
      const rows = await ins.json();
      if (Array.isArray(rows) && rows[0]) return rows[0].unsubscribe_token || "";
    }
  } catch {}
  // Bestond al (unique e-mail) → token ophalen.
  try {
    const q = await sb(`upgrade_waitlist?email=eq.${encodeURIComponent(email)}&select=unsubscribe_token&limit=1`, { method: "GET" }, base, key);
    const rows = await q.json();
    if (Array.isArray(rows) && rows[0]) return rows[0].unsubscribe_token || "";
  } catch {}
  return "";
}

function bouwMail({ vakLabel, score, totaal, vragen, token }) {
  const uit = `${SITE}/api/unsubscribe?token=${encodeURIComponent(token || "")}`;
  const opnieuw = `${SITE}/?reclamebol&utm_source=email&utm_campaign=oefenblad`;
  const onderwerp = `📘 Het ${vakLabel}-oefenblad van je kind (${score}/${totaal} goed)`;

  const vragenHtml = vragen.map((v, i) => `
    <div style="margin:0 0 14px;">
      <div style="font-size:15px;color:#1c2840;font-weight:700;">${i + 1}. ${esc(v.vraag)}</div>
      <div style="font-size:14px;color:#9aa7ba;border-bottom:1.5px dotted #c3ccd9;padding-bottom:4px;margin-top:6px;">Antwoord: ____________________________</div>
    </div>`).join("");

  const antwoordHtml = vragen.map((v, i) => `
    <div style="margin:0 0 10px;">
      <div style="font-size:14px;color:#1c2840;"><strong style="color:#0a7d3c;">${i + 1}. ${esc(v.goed)}</strong></div>
      ${v.uitleg ? `<div style="font-size:13px;color:#56627a;line-height:1.5;">${esc(v.uitleg)}</div>` : ""}
    </div>`).join("");

  const html = `<!doctype html><html lang="nl"><body style="margin:0;background:#0a0f1e;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e8edf5;">
  <div style="max-width:560px;margin:0 auto;padding:28px 22px;">
    <div style="font-size:22px;font-weight:800;color:#fff;margin-bottom:4px;">Leerkwartier</div>
    <div style="font-size:13px;color:#69f0ae;font-weight:700;margin-bottom:18px;">Een kwartier per dag — écht begrijpen wat je leert.</div>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 6px;">Hoi,</p>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 16px;">
      Je kind deed zojuist de <strong>${vakLabel}-check</strong> en scoorde <strong style="color:#69f0ae;">${score} van de ${totaal} goed</strong>.
      Hieronder een <strong>oefenblad van 10 vragen</strong> — te beginnen met wat nog lastig was. Laat je kind ze op papier maken; de <strong>antwoorden + uitleg</strong> staan onderaan, voor jou om na te kijken. 💪
    </p>
    <div style="background:#f4f7fb;border-radius:14px;padding:18px 20px 8px;margin:0 0 20px;">
      <div style="font-size:13px;font-weight:800;color:#0a7d3c;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:12px;">✏️ Oefenblad — laat je kind invullen</div>
      ${vragenHtml}
    </div>
    <div style="background:#fff8e6;border:1px solid #f0e0b0;border-radius:14px;padding:18px 20px 10px;margin:0 0 22px;">
      <div style="font-size:13px;font-weight:800;color:#9a7b00;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:12px;">✅ Antwoorden + uitleg — voor de ouder</div>
      ${antwoordHtml}
    </div>
    <a href="${esc(opnieuw)}" style="display:block;text-align:center;background:linear-gradient(135deg,#00C853,#00a846);color:#fff;text-decoration:none;font-weight:800;font-size:16px;padding:14px;border-radius:12px;margin-bottom:14px;">🌍 Doe de check volgende week opnieuw →</a>
    ${mailTaglineHtml()}
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:0 0 4px;">Je krijgt elke week een nieuwe oefenset.</p>
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:0;">Geen mail meer? <a href="${esc(uit)}" style="color:#9fb0c6;">Uitschrijven</a> — direct geregeld.</p>
  </div></body></html>`;

  const text =
    `Hoi,\n\nJe kind deed de ${vakLabel}-check: ${score}/${totaal} goed.\n\n` +
    `OEFENBLAD (laat je kind invullen):\n` +
    vragen.map((v, i) => `${i + 1}. ${v.vraag}\n   Antwoord: __________`).join("\n") +
    `\n\nANTWOORDEN + UITLEG (voor de ouder):\n` +
    vragen.map((v, i) => `${i + 1}. ${v.goed}${v.uitleg ? " — " + v.uitleg : ""}`).join("\n") +
    `\n\nDoe de check opnieuw: ${opnieuw}\nUitschrijven: ${uit}\nLeerkwartier — een kwartier per dag, écht begrijpen wat je leert.`;

  return { onderwerp, html, text };
}

// Bug-jacht 7/7: dit endpoint stuurt e-mail naar een door de klant opgegeven
// adres én registreert consent — de oude ongeankerde origin-check (matchte ook
// leerkwartier.app.evil.com en liet lege origins door) maakte het een open
// spam-kanaal. Nu: exacte allowlist + rate-limit per IP (browsers sturen bij
// een POST altijd een Origin-header mee, ook same-origin/PWA).
const OEFENBLAD_ORIGINS = new Set([
  "https://leerkwartier.app", "https://www.leerkwartier.app",
  "http://localhost:5173", "http://localhost:4173", "http://127.0.0.1:5173",
]);
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 3; // 3 oefenblad-mails per IP per 10 min is ruim voor echt gebruik
const rateMap = new Map();
function rateLimited(ip) {
  const t = Date.now();
  if (rateMap.size > 5000) {
    for (const [k, v] of rateMap) { if (t > v.resetAt) rateMap.delete(k); }
    if (rateMap.size > 5000) rateMap.clear();
  }
  const e = rateMap.get(ip) || { count: 0, resetAt: t + RATE_WINDOW_MS };
  if (t > e.resetAt) { e.count = 0; e.resetAt = t + RATE_WINDOW_MS; }
  e.count++;
  rateMap.set(ip, e);
  return e.count > RATE_MAX;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "method" });
  const origin = req.headers["origin"] || "";
  if (!OEFENBLAD_ORIGINS.has(origin)) {
    return res.status(403).json({ error: "origin" });
  }
  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "onbekend";
  if (rateLimited(ip)) return res.status(429).json({ error: "te-vaak" });

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  const email = String(body?.email || "").trim().slice(0, 120);
  const vak = String(body?.vak || "topografie");
  const foutIds = Array.isArray(body?.foutIds) ? body.foutIds.slice(0, 12).map((x) => String(x).slice(0, 40)) : [];
  const totaal = Math.min(20, Math.max(1, parseInt(body?.totaal, 10) || 10));
  const score = Math.min(totaal, Math.max(0, parseInt(body?.score, 10) || 0));

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res.status(400).json({ error: "email" });
  const vakDef = VAKKEN[vak] || VAKKEN.topografie;

  const RESEND = process.env.RESEND_API_KEY;
  const FROM = process.env.EMAIL_FROM || "Leerkwartier <hallo@leerkwartier.app>";
  if (!RESEND) return res.status(503).json({ error: "resend-uit" });

  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const vragen = vakDef.bouw(foutIds);
  let token = "";
  if (base && key) token = await upsertLead(email, base, key);

  const { onderwerp, html, text } = bouwMail({ vakLabel: vakDef.label, score, totaal, vragen, token });

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM, to: [email], subject: onderwerp, html, text }),
    });
    if (!r.ok) {
      const det = await r.text().catch(() => "");
      return res.status(502).json({ error: "send-failed", detail: det.slice(0, 160) });
    }
  } catch (e) {
    return res.status(502).json({ error: "send-exception", detail: String(e).slice(0, 160) });
  }

  return res.status(200).json({ ok: true, sent: 1, vragen: vragen.length });
}
