// Uitschrijven uit de lesmateriaal-mail (verplicht + in elke mail gelinkt).
// Publiek GET /api/unsubscribe?token=<unsubscribe_token> → zet unsubscribed_at.
// Geen login nodig: de token is geheim genoeg en doet alleen iets onschadelijks
// (afmelden). Gebruikt de service-role key (server-side) om de rij bij te werken.

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

function pagina(titel, tekst) {
  return `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${titel}</title></head>
  <body style="margin:0;background:#0a0f1e;color:#e8edf5;font-family:-apple-system,Segoe UI,Roboto,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;">
    <div style="max-width:420px;padding:32px 24px;text-align:center;">
      <div style="font-size:22px;font-weight:800;color:#fff;margin-bottom:14px;">${titel}</div>
      <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 22px;">${tekst}</p>
      <a href="https://leerkwartier.app" style="display:inline-block;background:linear-gradient(135deg,#00C853,#00a846);color:#fff;text-decoration:none;font-weight:800;padding:12px 22px;border-radius:12px;">Terug naar Leerkwartier</a>
    </div>
  </body></html>`;
}

export default async function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  const token = (req.query && req.query.token) || "";
  if (!token || String(token).length < 8) {
    return res.status(400).send(pagina("Ongeldige link", "Deze uitschrijf-link klopt niet. Open 'm direct vanuit de e-mail."));
  }

  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) return res.status(500).send(pagina("Even niet gelukt", "Er ging iets mis. Probeer het later nog eens."));

  try {
    const r = await sb(
      `upgrade_waitlist?unsubscribe_token=eq.${encodeURIComponent(token)}`,
      {
        method: "PATCH",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({ unsubscribed_at: new Date().toISOString() }),
      },
      base, key
    );
    if (!r.ok) throw new Error("patch-fout " + r.status);
  } catch (e) {
    return res.status(500).send(pagina("Even niet gelukt", "We konden je uitschrijving niet verwerken. Probeer het later nog eens."));
  }

  return res.status(200).send(pagina("Je bent uitgeschreven ✅", "Je ontvangt geen lesmateriaal-mails meer. Jammer dat je gaat — je bent altijd welkom terug op leerkwartier.app."));
}
