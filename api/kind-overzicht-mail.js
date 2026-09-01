// ✉️ Kind-overzicht on demand naar de ouder zelf (Mark 1 sep 2026: "of naar
// mezelf kunnen mailen zodat ik alles snel overzichtelijk heb").
// POST met Authorization: Bearer <supabase access token> + gestructureerde
// samenvatting uit KindOverzicht.jsx. Veiligheidsmodel: wij verifiëren het
// token bij Supabase en mailen UITSLUITEND naar het e-mailadres van dat
// account — geen vrij te kiezen ontvanger, dus geen open relay. De server
// rendert zelf de HTML uit de (afgekapte) gestructureerde velden; er gaat
// geen client-HTML 1-op-1 de mail in.

import { mailTaglineHtml } from "./_lib/mail-tagline.js";

const SITE = "https://leerkwartier.app";

function esc(s) {
  return String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}
const kort = (s, n) => String(s || "").slice(0, n);
const pctKleur = (p) => (p >= 70 ? "#00c853" : p >= 50 ? "#b8860b" : "#e05a3a");

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "method" });

  const resendKey = process.env.RESEND_API_KEY;
  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const anon = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
  if (!resendKey || !base || !anon) return res.status(503).json({ error: "niet geconfigureerd" });

  // Wie vraagt dit? Token → Supabase auth → e-mailadres van het eigen account.
  const token = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (!token) return res.status(401).json({ error: "geen token" });
  let email = null;
  try {
    const u = await fetch(`${base}/auth/v1/user`, { headers: { apikey: anon, Authorization: `Bearer ${token}` } });
    if (u.ok) email = (await u.json())?.email || null;
  } catch { /* valt door naar 401 */ }
  if (!email) return res.status(401).json({ error: "sessie ongeldig" });

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  const naam = kort(body?.kindNaam, 60) || "je kind";
  const perVak = (Array.isArray(body?.perVak) ? body.perVak : []).slice(0, 10);
  const sterk = (Array.isArray(body?.sterk) ? body.sterk : []).slice(0, 5);
  const zwak = (Array.isArray(body?.zwak) ? body.zwak : []).slice(0, 5);
  const watNu = (Array.isArray(body?.watNu) ? body.watNu : []).slice(0, 5);
  const recent = (Array.isArray(body?.recent) ? body.recent : []).slice(0, 10);

  const rij = (links, rechts) => `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;font-size:14px;color:#333">${links}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-size:14px;text-align:right;white-space:nowrap">${rechts}</td></tr>`;
  const blok = (titel, inhoud) => `<h3 style="margin:22px 0 6px;font-size:16px;color:#16233f">${titel}</h3>${inhoud}`;

  const html = `
  <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a2233">
    <h2 style="color:#0f5132;margin:0 0 4px">📊 Overzicht van ${esc(naam)}</h2>
    <p style="margin:0 0 4px;color:#555;font-size:14px">Aangevraagd via je ouder-pagina · ${new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Amsterdam" })}</p>
    ${perVak.length ? blok("📚 Per vak", `<table style="border-collapse:collapse;width:100%">${perVak.map((v) => rij(`<strong>${esc(kort(v.vak, 40))}</strong> · ${Number(v.n) || 0}× geoefend`, `<span style="color:${pctKleur(Number(v.gem) || 0)};font-weight:700">gem. ${Number(v.gem) || 0}%</span> · top ${Number(v.beste) || 0}%`)).join("")}</table>`) : ""}
    ${(sterk.length || zwak.length) ? blok("💪 Sterk &amp; 🎯 nog oefenen", `<table style="border-collapse:collapse;width:100%">${sterk.map((s) => rij(`💪 ${esc(kort(s.ond, 60))}`, `<span style="color:#00c853;font-weight:700">${Number(s.p) || 0}% goed</span> (${Number(s.tot) || 0} vragen)`)).join("")}${zwak.map((z) => rij(`🎯 ${esc(kort(z.ond, 60))}`, `<span style="color:#e05a3a;font-weight:700">${Number(z.p) || 0}% goed</span> (${Number(z.tot) || 0} vragen)`)).join("")}</table>`) : ""}
    ${watNu.length ? blok("🧭 Wat nu? — de volgende stap", watNu.map((w) => `<div style="font-size:14px;padding:4px 0">📖 <a href="${SITE}/leren/pad?id=${encodeURIComponent(kort(w.id, 80))}" style="color:#0f5132;font-weight:700">${esc(kort(w.titel, 90))}</a></div>`).join("")) : ""}
    ${recent.length ? blok("🕐 Recente resultaten", `<table style="border-collapse:collapse;width:100%">${recent.map((r) => rij(`${esc(kort(r.titel, 70))} <span style="color:#888">· ${r.datum ? new Date(r.datum).toLocaleDateString("nl-NL", { day: "numeric", month: "short" }) : ""}</span>`, `<span style="color:${pctKleur(Number(r.p) || 0)};font-weight:700">${Number(r.p) || 0}%</span> (${Number(r.score) || 0}/${Number(r.total) || 0})`)).join("")}</table>`) : ""}
    <p style="margin:22px 0 0;font-size:13px;color:#555">Het vraag-voor-vraag-verslag per toets staat op je ouder-pagina: <a href="${SITE}/ouder" style="color:#0f5132">${SITE.replace("https://", "")}/ouder</a> → tik op de naam van ${esc(naam)}.</p>
    ${mailTaglineHtml({ link: "#0f5132" })}
  </div>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || "Leerkwartier <noreply@leerkwartier.app>",
        to: [email],
        subject: `📊 Overzicht van ${naam} — Leerkwartier`,
        html,
      }),
    });
    if (!r.ok) return res.status(502).json({ error: "mail mislukt" });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: "mail mislukt" });
  }
}
