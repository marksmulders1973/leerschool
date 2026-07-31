// Kwartiercheck-mail — stuurt scorekaart + 4-weekse weekschema na de diagnostische check.
// POST { email, naam_kind, groep, scores }
// scores = { [conceptId]: { oordeel: "beheerst" | "gedeeltelijk" | "nogniet" } }

import { mailTaglineHtml } from "./_lib/mail-tagline.js";

const SITE = "https://leerkwartier.app";

const OORDEEL_LABELS = {
  beheerst:     { emoji: "✅", tekst: "Beheerst",   kleur: "#00c853" },
  gedeeltelijk: { emoji: "🟡", tekst: "Bijna daar", kleur: "#ffc107" },
  nogniet:      { emoji: "❌", tekst: "Nog niet",   kleur: "#ff5252" },
};

// Ook gebruikt door send-kwartiercheck-week.js (de wekelijkse vervolgreeks).
export const CONCEPTEN = [
  { id: "tafels",          label: "Tafels & vermenigvuldigen", vak: "Rekenen", leerpadId: "tafels-po" },
  { id: "breuken",         label: "Breuken begrijpen",         vak: "Rekenen", leerpadId: "breuken-po" },
  { id: "procenten",       label: "Procenten & kortingen",     vak: "Rekenen", leerpadId: "procenten-po" },
  { id: "maten",           label: "Maten & eenheden omzetten", vak: "Rekenen", leerpadId: "maten-eenheden" },
  { id: "verhoudingen",    label: "Verhoudingen & schaal",     vak: "Rekenen", leerpadId: "verhoudingen-po" },
  { id: "spelling",        label: "Spelling & werkwoorden",    vak: "Taal",    leerpadId: "spelling-overige-po" },
  { id: "woordsoorten",    label: "Woordsoorten herkennen",    vak: "Taal",    leerpadId: "woordsoorten-po" },
  { id: "werkwoordtijden", label: "Werkwoordtijden",           vak: "Taal",    leerpadId: "werkwoord-tijden-po" },
  { id: "woordenschat",    label: "Woordenschat & betekenis",  vak: "Taal",    leerpadId: "woordenschat-po" },
  { id: "hoofdgedachte",   label: "Hoofdgedachte & samenvatten", vak: "Begrijpend Lezen", leerpadId: "samenvatten-hoofdgedachte-po" },
  { id: "tekstbegrip",     label: "Informatie opzoeken",       vak: "Begrijpend Lezen", leerpadId: "begrijpend-lezen-strategie" },
  { id: "oorzaakgevolg",   label: "Oorzaak en gevolg",         vak: "Begrijpend Lezen", leerpadId: "tekstverbanden-oorzaak-gevolg-po" },
];

function esc(s) {
  return String(s || "").replace(/[&<>"]/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
}

function bouwWeekschema(gaps) {
  // Zwakste concepten eerst, max 4 weken
  const items = gaps.slice(0, 8);
  if (!items.length) return "<p style='color:#aaa'>Je kind beheerst alle getoetste concepten — geweldig! Blijf oefenen via de Doorstroomtoets-pagina.</p>";
  const weken = [];
  for (let w = 0; w < Math.min(4, Math.ceil(items.length / 2)); w++) {
    const week = items.slice(w * 2, w * 2 + 2);
    const weekHtml = week.map((c) => {
      const url = `${SITE}/?pad=${encodeURIComponent(c.leerpadId)}&utm_source=kwartiercheck&utm_medium=email`;
      return `<li style='margin-bottom:6px'><strong>${esc(c.label)}</strong><br>
        <a href='${url}' style='color:#69b2ff;font-size:13px'>▶ Start oefening →</a></li>`;
    }).join("");
    weken.push(`<div style='margin-bottom:14px'>
      <div style='font-weight:700;color:#fff;margin-bottom:4px'>Week ${w + 1}</div>
      <ul style='margin:0;padding-left:18px;color:#cdd5e0'>${weekHtml}</ul>
    </div>`);
  }
  return weken.join("");
}

// Gedeeld met send-kwartiercheck-week.js: zwakste onderwerpen eerst.
export function bepaalGaps(scores) {
  return CONCEPTEN
    .filter((c) => (scores[c.id]?.oordeel || "nogniet") === "nogniet")
    .concat(CONCEPTEN.filter((c) => (scores[c.id]?.oordeel || "nogniet") === "gedeeltelijk"));
}

function bouwMailHtml(naam, groep, scores, unsubToken) {
  const conceptRows = CONCEPTEN.map((c) => {
    const o = scores[c.id]?.oordeel || "nogniet";
    const lbl = OORDEEL_LABELS[o] || OORDEEL_LABELS.nogniet;
    return `<tr>
      <td style='padding:7px 12px;border-bottom:1px solid #1e2d44;color:#cdd5e0;font-size:13px'>${esc(c.vak)}</td>
      <td style='padding:7px 12px;border-bottom:1px solid #1e2d44;color:#e0e6f0;font-size:13px'>${esc(c.label)}</td>
      <td style='padding:7px 12px;border-bottom:1px solid #1e2d44;font-size:13px;font-weight:700;color:${lbl.kleur}'>${lbl.emoji} ${lbl.tekst}</td>
    </tr>`;
  }).join("");

  const gaps = bepaalGaps(scores);

  const weekschema = bouwWeekschema(gaps);
  const ctoUrl = `${SITE}/cito?utm_source=kwartiercheck&utm_medium=email`;
  const unsubUrl = unsubToken
    ? `${SITE}/api/unsubscribe?token=${encodeURIComponent(unsubToken)}`
    : "mailto:info@smulsoft.nl?subject=Afmelden%20Kwartiercheck";
  // Eerlijke aankondiging van de vervolgreeks (Mark 28 jul): max 3 maandag-mails.
  const reeksUitleg = gaps.length > 2
    ? `<p style='font-size:13px;color:rgba(255,255,255,0.5);margin:10px 0 0;line-height:1.5'>
        📅 Zo blijft het behapbaar: elke maandag krijg je één week uit dit plan in je mail,
        tot het plan klaar is (maximaal 3 extra mails). Afmelden kan altijd onderaan.</p>`
    : "";

  return `<!doctype html><html lang='nl'><head><meta charset='utf-8'></head>
<body style='margin:0;padding:0;background:#0a0f1e;font-family:system-ui,-apple-system,sans-serif'>
<div style='max-width:580px;margin:0 auto;padding:0 0 32px'>

  <!-- Header -->
  <div style='background:linear-gradient(135deg,#1a2a4a,#0f1729);padding:28px 28px 22px;border-bottom:2px solid #ff6b35'>
    <div style='font-size:22px;font-weight:800;color:#fff;margin-bottom:4px'>Kwartiercheck — ${esc(naam)}</div>
    <div style='font-size:13px;color:rgba(255,255,255,0.5)'>Groep ${esc(groep)} · Leerkwartier</div>
  </div>

  <!-- Intro -->
  <div style='padding:22px 28px 8px;background:#0f1729'>
    <p style='font-size:15px;color:#cdd5e0;margin:0 0 16px;line-height:1.6'>
      Hier is het overzicht van de Kwartiercheck voor <strong style='color:#fff'>${esc(naam)}</strong>.
      Per concept zie je of jouw kind het <em>beheerst</em>, <em>bijna snapt</em> of nog <em>extra oefening nodig heeft</em>.
    </p>
  </div>

  <!-- Scorekaart -->
  <div style='padding:0 28px 16px;background:#0f1729'>
    <div style='font-size:14px;font-weight:700;color:rgba(255,255,255,0.7);margin-bottom:10px'>📊 Scorekaart</div>
    <table style='width:100%;border-collapse:collapse;background:rgba(255,255,255,0.03);border-radius:10px;overflow:hidden'>
      <thead>
        <tr style='background:rgba(255,255,255,0.06)'>
          <th style='padding:8px 12px;text-align:left;font-size:12px;color:rgba(255,255,255,0.4);font-weight:600'>Vak</th>
          <th style='padding:8px 12px;text-align:left;font-size:12px;color:rgba(255,255,255,0.4);font-weight:600'>Concept</th>
          <th style='padding:8px 12px;text-align:left;font-size:12px;color:rgba(255,255,255,0.4);font-weight:600'>Oordeel</th>
        </tr>
      </thead>
      <tbody>${conceptRows}</tbody>
    </table>
  </div>

  <!-- Weekschema -->
  <div style='padding:4px 28px 20px;background:#0f1729'>
    <div style='background:rgba(255,107,53,0.08);border:1px solid rgba(255,107,53,0.2);border-radius:12px;padding:18px 20px'>
      <div style='font-size:14px;font-weight:700;color:#ff8c42;margin-bottom:12px'>📅 Weekschema — de eerste stappen</div>
      ${weekschema}
      ${reeksUitleg}
    </div>
  </div>

  <!-- CTA -->
  <div style='padding:0 28px 20px;background:#0f1729;text-align:center'>
    <a href='${ctoUrl}' style='display:inline-block;padding:13px 28px;background:linear-gradient(135deg,#ff6b35,#ff8c42);color:#fff;font-weight:800;font-size:14px;border-radius:10px;text-decoration:none'>
      Start de Doorstroomtoets-voorbereiding →
    </a>
  </div>

  <!-- Deel-actie 2027 (Mark 29 jul 2026): ouder-gericht, dus STOPLIST-veilig -->
  <div style='padding:0 28px 20px;background:#0f1729'>
    <div style='background:rgba(0,200,83,0.06);border:1px solid rgba(0,200,83,0.25);border-radius:12px;padding:14px 16px'>
      <div style='font-size:13px;font-weight:700;color:#69f0ae;margin-bottom:6px'>🤝 Geef een ander gezin Familie gratis — en krijg het zelf ook</div>
      <p style='font-size:12.5px;color:#cdd5e0;margin:0;line-height:1.55'>
        Deel jouw persoonlijke link met een ouder uit de klas: zodra iemand via jouw link oefent,
        krijgen jullie allebei <a href='${SITE}/abonnement.html#familie' style='color:#ffd54f'>Leerkwartier Familie</a> gratis tot augustus 2027 (straks ± € 39 per jaar).
        <a href='${SITE}/ouder?utm_source=kwartiercheck&utm_medium=email&utm_campaign=deel-actie' style='color:#69f0ae;font-weight:700'>Haal je link op in het ouder-dashboard →</a>
      </p>
    </div>
  </div>

  <!-- Footer -->
  <div style='padding:16px 28px 0;border-top:1px solid rgba(255,255,255,0.07);background:#0a0f1e;text-align:center'>
    ${mailTaglineHtml({ kleur: "rgba(255,255,255,0.4)", link: "#69b2ff" })}
    <p style='font-size:11px;color:rgba(255,255,255,0.3);margin:0'>
      <a href='https://leerkwartier.app' style='color:#69b2ff'>Leerkwartier</a> · Kwartiercheck ·
      <a href='${unsubUrl}' style='color:rgba(255,255,255,0.3)'>afmelden</a>
    </p>
  </div>

</div>
</body></html>`;
}

// Slaat het resultaat op en geeft het afmeld-token terug (nodig voor de
// unsubscribe-link in de mail + de wekelijkse vervolgreeks).
async function saveToDB(data) {
  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  // RLS op kwartiercheck_results staat anon-insert toe → anon key is een geldig vangnet.
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  if (!base || !key) {
    console.error("kwartiercheck-mail: geen Supabase env — resultaat niet opgeslagen");
    return null;
  }
  try {
    const r = await fetch(`${base}/rest/v1/kwartiercheck_results`, {
      method: "POST",
      headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=representation" },
      body: JSON.stringify(data),
    });
    if (!r.ok) return null;
    // Anon-key-vangnet heeft geen select-recht → representation kan leeg zijn;
    // dan valt de mail terug op de mailto-afmeldlink.
    const rows = await r.json().catch(() => null);
    return Array.isArray(rows) ? rows[0]?.unsubscribe_token || null : null;
  } catch {
    return null;
  }
}

// Zelfde bescherming als send-oefenblad.js: dit endpoint mailt naar een door
// de bezoeker opgegeven adres — zonder origin-allowlist + rate-limit is het
// een open spam-kanaal (en een risico voor de Resend-domeinreputatie).
const MAIL_ORIGINS = new Set([
  "https://leerkwartier.app", "https://www.leerkwartier.app",
  "http://localhost:5173", "http://localhost:4173", "http://127.0.0.1:5173",
]);
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 3; // 3 kwartiercheck-mails per IP per 10 min is ruim voor echt gebruik
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
  if (!MAIL_ORIGINS.has(origin)) return res.status(403).json({ error: "origin" });
  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "onbekend";
  if (rateLimited(ip)) return res.status(429).json({ error: "te-vaak" });

  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(503).json({ error: "mail niet geconfigureerd" });

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  const email = String(body?.email || "").trim().slice(0, 120);
  const naam_kind = String(body?.naam_kind || "").trim().slice(0, 60);
  const groep = String(body?.groep || "").trim().slice(0, 2);
  const scores = body?.scores;
  if (!email || !naam_kind || !groep || !scores || typeof scores !== "object") {
    return res.status(400).json({ error: "ontbrekende velden" });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res.status(400).json({ error: "email" });
  if (!["6", "7", "8"].includes(groep)) return res.status(400).json({ error: "groep" });

  try {
    // Eerst opslaan: zo krijgt de mail een werkend afmeld-token en start de
    // wekelijkse vervolgreeks (send-kwartiercheck-week.js) vanaf deze rij.
    const unsubToken = await saveToDB({ email, naam_kind, groep, scores_json: scores });
    const html = bouwMailHtml(naam_kind, groep, scores, unsubToken);

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || "Leerkwartier <noreply@leerkwartier.app>",
        to: [email],
        subject: `Kwartiercheck ${naam_kind} (groep ${groep}) — jouw weekschema staat klaar`,
        html,
      }),
    });
    if (!r.ok) {
      const err = await r.text();
      console.error("Resend fout:", err);
      return res.status(502).json({ error: "mail versturen mislukt" });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("kwartiercheck-mail:", e);
    return res.status(500).json({ error: "intern" });
  }
}
