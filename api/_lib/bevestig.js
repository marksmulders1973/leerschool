// ✅ Bevestig-link (F15, Fable-review 2 sep 2026) — de "ja" van de ontvanger zelf.
//
// Twee smaken, allebei publiek GET (bevestigen is de onschadelijke richting;
// een pre-fetchende mailscanner kan hooguit een mail-reeks aanzetten die
// dit adres zélf aanvroeg — nooit iets uit- of weggooien):
//   /api/bevestig?token=<unsubscribe_token>   → upgrade_waitlist.confirmed_at
//   /api/bevestig?partner=<partner_token>     → parent_child_links.partner_email_bevestigd_at
//
// Waarom: de eerste mail (oefenblad, weekpakket-code, welkomstmail) is het
// gevraagde ding en mag altijd. De wekelijkse reeks, de aftelreeks en het
// weekrapport-meelezen gaan pas na deze tik. Zo kan niemand een ander op een
// lijst zetten door een vreemd adres in te vullen.

const SITE = "https://leerkwartier.app";

async function sb(path, opts, base, key) {
  return fetch(`${base}/rest/v1/${path}`, {
    ...opts,
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", ...(opts.headers || {}) },
  });
}

function pagina(titel, tekst, ok = true) {
  return `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${titel} — Leerkwartier</title></head>
  <body style="margin:0;background:#0a0f1e;color:#e8edf5;font-family:-apple-system,Segoe UI,Roboto,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;">
    <div style="max-width:440px;padding:32px 24px;text-align:center;">
      <div style="font-size:44px;margin-bottom:8px;">${ok ? "✅" : "🤔"}</div>
      <div style="font-size:22px;font-weight:800;color:#fff;margin-bottom:14px;">${titel}</div>
      <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 22px;">${tekst}</p>
      <a href="${SITE}" style="display:inline-block;background:linear-gradient(135deg,#00C853,#00a846);color:#fff;text-decoration:none;font-weight:800;padding:12px 22px;border-radius:12px;font-size:15px;">Naar Leerkwartier →</a>
    </div>
  </body></html>`;
}

const schoon = (v) => String(v || "").replace(/[^A-Za-z0-9-]/g, "").slice(0, 80);

export async function handleBevestig(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) return res.status(503).send(pagina("Even niet beschikbaar", "Probeer het later nog eens.", false));

  const token = schoon(req.query?.token);
  const partner = schoon(req.query?.partner);

  try {
    if (partner && partner.length >= 8) {
      const r = await sb(
        `parent_child_links?partner_token=eq.${encodeURIComponent(partner)}&partner_email=not.is.null`,
        { method: "PATCH", headers: { Prefer: "return=representation" }, body: JSON.stringify({ partner_email_bevestigd_at: new Date().toISOString() }) },
        base, key
      );
      const rows = r.ok ? await r.json().catch(() => []) : [];
      if (!Array.isArray(rows) || rows.length === 0) {
        return res.status(200).send(pagina("Deze link is niet (meer) geldig", "Misschien is het adres inmiddels gewijzigd. Vraag degene die je uitnodigde om het opnieuw te doen.", false));
      }
      const namen = [...new Set(rows.map((x) => x.child_name).filter(Boolean))].join(" en ");
      return res.status(200).send(pagina("Je leest mee", `Vanaf nu krijg jij elke maandag óók het weekrapport${namen ? ` van ${namen}` : ""}: wat er geoefend is, wat goed gaat en wat aandacht verdient. Onderaan elke mail staat een afmeld-link.`));
    }

    if (token && token.length >= 8) {
      // Adres bij de token zoeken en ÁLLE rijen van dat adres bevestigen (één
      // adres kan meerdere plannen hebben — zelfde les als bij uitschrijven).
      const q = await sb(`upgrade_waitlist?unsubscribe_token=eq.${encodeURIComponent(token)}&select=email&limit=1`, { method: "GET" }, base, key);
      const rows = q.ok ? await q.json().catch(() => []) : [];
      const email = Array.isArray(rows) && rows[0]?.email ? String(rows[0].email).toLowerCase() : null;
      if (!email) return res.status(200).send(pagina("Deze link is niet (meer) geldig", "Vraag het materiaal gewoon opnieuw aan op leerkwartier.app, dan krijg je een verse link.", false));
      await sb(
        `upgrade_waitlist?email=eq.${encodeURIComponent(email)}&confirmed_at=is.null`,
        { method: "PATCH", body: JSON.stringify({ confirmed_at: new Date().toISOString() }) },
        base, key
      );
      return res.status(200).send(pagina("Gelukt, je staat op de lijst", "Je krijgt voortaan elke week het gratis oefenkwartiertje en de Weekpakket-code in je mail. Onderaan elke mail staat een afmeld-link — direct geregeld."));
    }
  } catch {
    return res.status(200).send(pagina("Dat lukte net niet", "Probeer de link zo nog eens.", false));
  }
  return res.status(200).send(pagina("Er ontbreekt iets in de link", "Open de link uit de mail opnieuw, of vraag het materiaal nog een keer aan.", false));
}
