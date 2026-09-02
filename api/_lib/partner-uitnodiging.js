// 👥 Partner uitnodigen voor het weekrapport (F15, Fable-review 2 sep 2026).
//
// Vroeger zette de ouder een tweede adres direct in parent_child_links en
// kreeg dat adres de maandag-mail zonder ooit "ja" te zeggen. Nu: POST met
// Authorization: Bearer <supabase access token> + { email } →
//   1. token verifiëren bij Supabase (wie ben je, welk e-mailadres),
//   2. partner_email + vers partner_token op álle koppelingen van deze ouder,
//      bevestiging op null,
//   3. één uitnodigingsmail naar de partner met een bevestig-link.
// De RPC ouder_weekrapport_kandidaten geeft het adres pas door ná bevestiging.
// Geen open relay: de mail gaat alleen naar het opgegeven adres, is één keer
// en bevat niets van het kind behalve de voornaam.

import { randomUUID } from "node:crypto";
import { mailTaglineHtml } from "./mail-tagline.js";

const SITE = "https://leerkwartier.app";
const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

async function sb(path, opts, base, key) {
  return fetch(`${base}/rest/v1/${path}`, {
    ...opts,
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", ...(opts.headers || {}) },
  });
}

export async function handlePartnerUitnodiging(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "method" });
  const RESEND = process.env.RESEND_API_KEY;
  const FROM = process.env.EMAIL_FROM || "Leerkwartier <hallo@leerkwartier.app>";
  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const anon = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!RESEND || !base || !anon || !key) return res.status(503).json({ error: "niet-geconfigureerd" });

  // Wie vraagt dit?
  const jwt = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (!jwt) return res.status(401).json({ error: "geen-token" });
  let uid = null, ouderEmail = null;
  try {
    const u = await fetch(`${base}/auth/v1/user`, { headers: { apikey: anon, Authorization: `Bearer ${jwt}` } });
    if (u.ok) { const j = await u.json(); uid = j?.id || null; ouderEmail = j?.email || null; if (j?.is_anonymous) uid = null; }
  } catch { /* → 401 */ }
  if (!uid || !ouderEmail) return res.status(401).json({ error: "sessie-ongeldig" });

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  const email = String(body?.email || "").trim().toLowerCase().slice(0, 120);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res.status(400).json({ error: "email" });
  if (email === String(ouderEmail).toLowerCase()) return res.status(400).json({ error: "eigen-adres" });

  // Adres + vers token op alle koppelingen van deze ouder; bevestiging op null.
  const token = randomUUID();
  let kinderen = [];
  try {
    const r = await sb(
      `parent_child_links?parent_user_id=eq.${encodeURIComponent(uid)}`,
      { method: "PATCH", headers: { Prefer: "return=representation" }, body: JSON.stringify({ partner_email: email, partner_token: token, partner_email_bevestigd_at: null }) },
      base, key
    );
    const rows = r.ok ? await r.json().catch(() => []) : [];
    if (!Array.isArray(rows) || rows.length === 0) return res.status(400).json({ error: "geen-koppeling" });
    kinderen = [...new Set(rows.map((x) => x.child_name).filter(Boolean))];
  } catch {
    return res.status(502).json({ error: "opslaan-mislukt" });
  }

  const namen = kinderen.length ? kinderen.join(" en ") : "een kind";
  const bevestig = `${SITE}/api/bevestig?partner=${encodeURIComponent(token)}`;
  const onderwerp = `👥 ${ouderEmail} wil het weekrapport van ${namen} met je delen`;
  const html = `<!doctype html><html lang="nl"><body style="margin:0;background:#0a0f1e;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e8edf5;">
  <div style="max-width:520px;margin:0 auto;padding:28px 22px;">
    <div style="font-size:22px;font-weight:800;color:#fff;margin-bottom:6px;">Leerkwartier</div>
    <div style="font-size:13px;color:#69f0ae;font-weight:700;margin-bottom:20px;">Een kwartier per dag — écht begrijpen wat je leert.</div>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 14px;"><strong>${esc(ouderEmail)}</strong> gebruikt Leerkwartier om ${esc(namen)} te helpen oefenen voor school, en wil dat jij het wekelijkse rapport ook krijgt.</p>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 22px;">Elke maandag één mail: wat er geoefend is, wat al goed gaat en wat aandacht verdient. Wil je meelezen? Tik dan op de knop. Doe je niets, dan krijg je verder geen mail van ons.</p>
    <a href="${esc(bevestig)}" style="display:block;text-align:center;background:linear-gradient(135deg,#00C853,#00a846);color:#fff;text-decoration:none;font-weight:800;font-size:16px;padding:14px;border-radius:12px;margin-bottom:22px;">✅ Ja, ik lees mee</a>
    ${mailTaglineHtml()}
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:0;">Je kreeg deze mail omdat ${esc(ouderEmail)} jouw adres invulde op leerkwartier.app. Dit is de enige mail zonder jouw bevestiging.</p>
  </div></body></html>`;
  const text = `${ouderEmail} wil het wekelijkse Leerkwartier-rapport van ${namen} met je delen.\n\nWil je meelezen? Bevestig hier: ${bevestig}\n\nDoe je niets, dan krijg je verder geen mail van ons.`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM, to: [email], subject: onderwerp, html, text }),
    });
    if (!r.ok) return res.status(502).json({ error: "mail-mislukt" });
  } catch {
    return res.status(502).json({ error: "mail-exception" });
  }
  return res.status(200).json({ ok: true, kinderen });
}
