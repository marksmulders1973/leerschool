// Weekpakket-aanmelding: e-mail → op de lijst (upgrade_waitlist) + direct de
// code van deze week per mail. Zelfde beveiligingspatroon als send-oefenblad
// (exacte origin-allowlist + rate-limit; bug-jacht-les 7/7).
import { isoWeekKey, weekCode } from "./_lib/weekcode.js";
import { mailTaglineHtml } from "./_lib/mail-tagline.js";

const SITE = "https://leerkwartier.app";

function esc(s) {
  return String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

async function sb(path, opts, base, key) {
  return fetch(`${base}/rest/v1/${path}`, {
    ...opts,
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", ...(opts.headers || {}) },
  });
}

async function upsertLead(email, base, key) {
  try {
    const ins = await sb("upgrade_waitlist", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({
        email, plan: "weekpakket", source: "weekpakket-voordeur",
        consent_at: new Date().toISOString(),
        last_sent_at: new Date().toISOString(), sent_count: 1,
      }),
    }, base, key);
    if (ins.ok) {
      const rows = await ins.json();
      if (Array.isArray(rows) && rows[0]) return rows[0].unsubscribe_token || "";
    }
  } catch {}
  try {
    const q = await sb(`upgrade_waitlist?email=eq.${encodeURIComponent(email)}&select=unsubscribe_token&limit=1`, { method: "GET" }, base, key);
    const rows = await q.json();
    if (Array.isArray(rows) && rows[0]) return rows[0].unsubscribe_token || "";
  } catch {}
  return "";
}

const ORIGINS = new Set([
  "https://leerkwartier.app", "https://www.leerkwartier.app",
  "http://localhost:5173", "http://localhost:4173", "http://127.0.0.1:5173",
]);
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 3;
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
  if (!ORIGINS.has(origin)) return res.status(403).json({ error: "origin" });
  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "onbekend";
  if (rateLimited(ip)) return res.status(429).json({ error: "te-vaak" });

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  const email = String(body?.email || "").trim().slice(0, 120);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res.status(400).json({ error: "email" });

  const RESEND = process.env.RESEND_API_KEY;
  const FROM = process.env.EMAIL_FROM || "Leerkwartier <hallo@leerkwartier.app>";
  if (!RESEND || !process.env.WEEKPAKKET_SECRET) return res.status(503).json({ error: "nog-niet-actief" });

  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  let token = "";
  if (base && key) token = await upsertLead(email, base, key);

  const wk = isoWeekKey();
  const code = weekCode(wk);
  const link = `${SITE}/api/weekpakket?code=${encodeURIComponent(code)}`;
  const uit = `${SITE}/api/unsubscribe?token=${encodeURIComponent(token || "")}`;

  const html = `<!doctype html><html lang="nl"><body style="margin:0;background:#0a0f1e;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e8edf5;">
  <div style="max-width:560px;margin:0 auto;padding:28px 22px;">
    <div style="font-size:22px;font-weight:800;color:#fff;margin-bottom:4px;">Leerkwartier</div>
    <div style="font-size:13px;color:#69f0ae;font-weight:700;margin-bottom:18px;">Een kwartier per dag — écht begrijpen wat je leert.</div>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;">Welkom bij het <strong>Weekpakket</strong>! Elke week krijg je per mail een nieuwe code voor een vers printpakket: rekenen, taal en begrijpend lezen richting de Doorstroomtoets — plus een berichtje van de maker.</p>
    <div style="background:#f4f7fb;border-radius:14px;padding:20px;text-align:center;margin:18px 0;">
      <div style="font-size:12px;font-weight:800;color:#56627a;text-transform:uppercase;letter-spacing:0.06em;">Jouw code voor deze week</div>
      <div style="font-size:34px;font-weight:800;color:#0a7d3c;letter-spacing:0.15em;margin:6px 0;">${esc(code)}</div>
      <a href="${esc(link)}" style="display:inline-block;background:#0a7d3c;color:#fff;text-decoration:none;font-weight:800;font-size:15px;padding:12px 22px;border-radius:10px;margin-top:6px;">Open het pakket van deze week →</a>
    </div>
    <p style="font-size:13px;line-height:1.6;color:#9fb0c6;">De code wisselt elke week — de nieuwe staat steeds in de weekmail. Oefenen in de app blijft gewoon gratis; dit pakket is extra post voor abonnees.</p>
    ${mailTaglineHtml()}
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;">Geen mail meer? <a href="${esc(uit)}" style="color:#9fb0c6;">Uitschrijven</a> — direct geregeld.</p>
  </div></body></html>`;

  const text = `Welkom bij het Weekpakket van Leerkwartier!\n\nJouw code voor deze week: ${code}\nOpen het pakket: ${link}\n\nDe code wisselt elke week — de nieuwe staat steeds in de weekmail.\nOefenen in de app blijft gratis; dit pakket is extra post voor abonnees.\nUitschrijven: ${uit}`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM, to: [email], subject: "📬 Jouw Weekpakket-code voor deze week", html, text }),
    });
    if (!r.ok) {
      const det = await r.text().catch(() => "");
      return res.status(502).json({ error: "send-failed", detail: det.slice(0, 160) });
    }
  } catch (e) {
    return res.status(502).json({ error: "send-exception", detail: String(e).slice(0, 160) });
  }
  return res.status(200).json({ ok: true });
}
