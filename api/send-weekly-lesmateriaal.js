// Wekelijkse gratis-lesmateriaal-mail via Resend (Mark 2026-06-06).
// Sluit het "zwarte gat" uit de 25-agent-zelfcheck: de magneet vangt e-mails in
// upgrade_waitlist, maar er werd nooit iets verstuurd. Dit endpoint maakt de
// belofte ("elke week 15 min gratis extra lesmateriaal") waar.
//
// KLAAR-MAAR-UIT: zonder RESEND_API_KEY doet dit niets (geeft nette 200 terug).
// Zet 'm AAN door de env-vars hieronder in Vercel te zetten.
//
// VEREISTE ENV-VARS (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY            – API-key van resend.com (re_...)
//   EMAIL_FROM                – afzender, bv. "Leerkwartier <hallo@leerkwartier.app>"
//                               (domein moet geverifieerd zijn in Resend)
//   CRON_SECRET               – beschermt het endpoint (Vercel stuurt 'm mee bij cron)
//   SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY  (bestaan al voor de andere cron)
//
// Cadans: draait dagelijks (zie vercel.json). Iemand krijgt:
//   • sent_count == 0  → de WELKOMST-mail (binnen ~1 dag na aanmelden)
//   • daarna           → de WEEK-mail, hooguit 1× per ~7 dagen
// Uitschrijven kan altijd via /api/unsubscribe?token=... (link staat in elke mail).
//
// Resend-gratis-tier = ~100 mails/dag. We versturen daarom max BATCH per run.

const BATCH = 90;
const DAGEN_TUSSEN = 6; // minimaal aantal dagen tussen twee mails
const SITE = "https://leerkwartier.app";

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

// Bouwt de HTML + onderwerp. Welkomst bij de eerste mail, anders de week-mail.
function maakMail(rij, welkom) {
  const naam = esc(rij.kind_voornaam) || "";
  const hoi = naam ? `Hoi ${naam}-ouder,` : "Hoi,";
  const ref = encodeURIComponent(rij.unsubscribe_token || "");
  const utm = `utm_source=email&utm_campaign=${welkom ? "welkom" : "weekmail"}`;
  const vandaag = `${SITE}/vandaag?${utm}`;
  const toets = `${SITE}/doorstroomtoets-oefentoets?${utm}`;
  const uit = `${SITE}/api/unsubscribe?token=${ref}`;

  const onderwerp = welkom
    ? "Welkom! Hier is je eerste gratis oefenkwartiertje 🎓"
    : "Je gratis oefenkwartiertje van deze week 🎓";

  const intro = welkom
    ? "Leuk dat je erbij bent! Elke week sturen we je een gratis oefenkwartiertje voor de Doorstroomtoets — één korte vraag mét uitleg op 3 niveaus, zodat je kind écht begrijpt waaróm."
    : "Hier is je gratis oefenkwartiertje voor deze week. Eén korte Doorstroomtoets-vraag mét uitleg — in een kwartiertje weer een stukje verder.";

  const html = `<!doctype html><html lang="nl"><body style="margin:0;background:#0a0f1e;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e8edf5;">
  <div style="max-width:520px;margin:0 auto;padding:28px 22px;">
    <div style="font-size:22px;font-weight:800;color:#fff;margin-bottom:6px;">Leerkwartier</div>
    <div style="font-size:13px;color:#69f0ae;font-weight:700;margin-bottom:20px;">Een kwartier per dag — écht begrijpen wat je leert.</div>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 14px;">${hoi}</p>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 22px;">${esc(intro)}</p>
    <a href="${vandaag}" style="display:block;text-align:center;background:linear-gradient(135deg,#00C853,#00a846);color:#fff;text-decoration:none;font-weight:800;font-size:16px;padding:14px;border-radius:12px;margin-bottom:12px;">🎯 Doe de vraag van vandaag →</a>
    <a href="${toets}" style="display:block;text-align:center;background:rgba(0,200,83,0.10);border:1.5px solid #00C853;color:#69f0ae;text-decoration:none;font-weight:800;font-size:15px;padding:12px;border-radius:12px;margin-bottom:24px;">📝 Of de gratis oefentoets →</a>
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:0 0 4px;">Je krijgt deze mail omdat je je aanmeldde voor gratis lesmateriaal op leerkwartier.app. In 2026 is alles gratis &amp; onbeperkt.</p>
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:0;">Geen mail meer? <a href="${uit}" style="color:#9fb0c6;">Uitschrijven</a> — direct geregeld.</p>
  </div></body></html>`;

  const text = `${naam ? `Hoi ${naam}-ouder,` : "Hoi,"}\n\n${welkom ? "Leuk dat je erbij bent! " : ""}Je gratis oefenkwartiertje:\n- Vraag van vandaag: ${vandaag}\n- Gratis oefentoets: ${toets}\n\nUitschrijven: ${uit}\nLeerkwartier — een kwartier per dag, écht begrijpen wat je leert.`;

  return { onderwerp, html, text };
}

export default async function handler(req, res) {
  // Beveiliging: alleen Vercel-cron (Bearer CRON_SECRET) of handmatig ?key=.
  const secret = process.env.CRON_SECRET;
  const auth = req.headers["authorization"] || "";
  const keyParam = (req.query && req.query.key) || "";
  if (secret && auth !== `Bearer ${secret}` && keyParam !== secret) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) return res.status(500).json({ error: "supabase-config-missing" });

  const RESEND = process.env.RESEND_API_KEY;
  const FROM = process.env.EMAIL_FROM || "Leerkwartier <hallo@leerkwartier.app>";
  // KLAAR-MAAR-UIT: geen key = niets versturen (geen fout, geen ruis).
  if (!RESEND) {
    return res.status(200).json({ ok: true, sent: 0, reason: "resend-uit (zet RESEND_API_KEY in Vercel)" });
  }

  // Drempel: alleen wie nog nooit (last_sent_at null) of >DAGEN_TUSSEN dagen
  // geleden mail kreeg, en niet is uitgeschreven, en op de lesmateriaal-lijst staat.
  const drempel = new Date(Date.now() - DAGEN_TUSSEN * 86400000).toISOString();
  const filter =
    `plan=in.(gratis-lesmateriaal,oefenpakket)` +
    `&unsubscribed_at=is.null` +
    `&or=(last_sent_at.is.null,last_sent_at.lt.${drempel})` +
    `&select=id,email,kind_voornaam,sent_count,unsubscribe_token` +
    `&order=last_sent_at.asc.nullsfirst&limit=${BATCH}`;

  let rijen;
  try {
    const q = await sb(`upgrade_waitlist?${filter}`, { method: "GET" }, base, key);
    rijen = await q.json();
    if (!Array.isArray(rijen)) throw new Error("lijst-leesfout: " + JSON.stringify(rijen).slice(0, 200));
  } catch (e) {
    return res.status(500).json({ error: "lijst-lezen-fout", detail: String(e).slice(0, 200) });
  }
  if (rijen.length === 0) return res.status(200).json({ ok: true, sent: 0, reason: "niemand-due" });

  let gelukt = 0;
  const fouten = [];
  for (const rij of rijen) {
    if (!rij.email || !String(rij.email).includes("@")) continue;
    const welkom = !rij.sent_count;
    const { onderwerp, html, text } = maakMail(rij, welkom);
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: FROM, to: [rij.email], subject: onderwerp, html, text }),
      });
      if (!r.ok) { fouten.push(String(rij.id).slice(0, 8) + ":" + r.status); continue; }
      await sb(
        `upgrade_waitlist?id=eq.${rij.id}`,
        {
          method: "PATCH",
          headers: { Prefer: "return=minimal" },
          body: JSON.stringify({ last_sent_at: new Date().toISOString(), sent_count: (rij.sent_count || 0) + 1 }),
        },
        base, key
      );
      gelukt++;
    } catch (e) {
      fouten.push(String(rij.id).slice(0, 8) + ":" + String(e).slice(0, 60));
    }
  }

  return res.status(200).json({ ok: true, sent: gelukt, kandidaten: rijen.length, fouten: fouten.slice(0, 10) });
}
