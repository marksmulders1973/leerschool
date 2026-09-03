// Uitschrijven uit de lesmateriaal-mail (verplicht + in elke mail gelinkt).
// Publiek GET /api/unsubscribe?token=<unsubscribe_token> → zet unsubscribed_at.
// Geen login nodig: de token is geheim genoeg en doet alleen iets onschadelijks
// (afmelden). Gebruikt de service-role key (server-side) om de rij bij te werken.

import { handleBevestig } from "./_lib/bevestig.js";
import { handlePartnerUitnodiging } from "./_lib/partner-uitnodiging.js";

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

// F14 (Fable-review 2 sep 2026): een kale GET voerde de afmelding direct uit.
// Outlook SafeLinks, Gmail-proxies en virusscanners pre-fetchen links in mails
// → ontvangers werden ongevraagd afgemeld. Nu: GET = bevestig-pagina met een
// knop (POST); alleen POST voert uit. Mailclients met RFC 8058 one-click
// (List-Unsubscribe-Post) sturen zelf een POST en werken dus ook.
function bevestigPagina(token, soort = "lijst") {
  const t = String(token).replace(/[^A-Za-z0-9-]/g, "");
  const partner = soort === "partner";
  return `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Uitschrijven — Leerkwartier</title></head>
  <body style="margin:0;background:#0a0f1e;color:#e8edf5;font-family:-apple-system,Segoe UI,Roboto,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;">
    <div style="max-width:420px;padding:32px 24px;text-align:center;">
      <div style="font-size:22px;font-weight:800;color:#fff;margin-bottom:14px;">${partner ? "Niet meer meelezen?" : "Wil je je uitschrijven?"}</div>
      <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 22px;">${partner ? "Dan krijg je het wekelijkse ouder-rapport van Leerkwartier niet meer op dit adres. De ouder zelf blijft het gewoon ontvangen." : "Dan stoppen alle lesmateriaal- en oefen-mails van Leerkwartier naar dit adres. Oefenen op de site blijft gewoon gratis."}</p>
      <form method="post" action="/api/unsubscribe?${partner ? "partner" : "token"}=${t}" style="margin:0 0 14px;">
        <button type="submit" style="background:linear-gradient(135deg,#ff5252,#d32f2f);color:#fff;border:none;font-weight:800;padding:12px 22px;border-radius:12px;font-size:15px;cursor:pointer;">Ja, schrijf me uit</button>
      </form>
      <a href="https://leerkwartier.app" style="display:inline-block;color:#8ab4f8;text-decoration:none;font-weight:700;">Nee, ik blijf — terug naar Leerkwartier</a>
    </div>
  </body></html>`;
}

export default async function handler(req, res) {
  // ── Eén functie, drie deuren (Vercel Hobby: max 12 gebundelde functies;
  // 23 losse api-bestanden faalden op 2 sep 2026, 21 werkte). vercel.json
  // herschrijft /api/bevestig → ?actie=bevestig en /api/partner-uitnodiging →
  // ?actie=partner naar dit bestand. Logica staat in api/_lib/ (geen functie).
  const actie = String((req.query && req.query.actie) || "");
  if (actie === "bevestig") return handleBevestig(req, res);
  if (actie === "partner") return handlePartnerUitnodiging(req, res);

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  // 👥 Partner-meelezer afmelden (kliktocht 3 sep 2026): de partner heeft geen
  // account of koppeling en kon zich dus nergens afmelden, terwijl de
  // uitnodiging dat wél belooft. ?partner=<partner_token> → GET bevestig-pagina,
  // POST haalt het adres van álle koppelingen met die token.
  const partnerToken = String((req.query && req.query.partner) || "").replace(/[^A-Za-z0-9-]/g, "").slice(0, 80);
  if (partnerToken.length >= 8) {
    if (req.method !== "POST") {
      res.setHeader("Cache-Control", "no-store");
      return res.status(200).send(bevestigPagina(partnerToken, "partner"));
    }
    const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!base || !key) return res.status(500).send(pagina("Even niet gelukt", "Er ging iets mis. Probeer het later nog eens."));
    try {
      const r = await sb(
        `parent_child_links?partner_token=eq.${encodeURIComponent(partnerToken)}`,
        { method: "PATCH", headers: { Prefer: "return=representation" }, body: JSON.stringify({ partner_email: null, partner_token: null, partner_email_bevestigd_at: null }) },
        base, key
      );
      const rows = r.ok ? await r.json().catch(() => []) : [];
      if (!Array.isArray(rows) || rows.length === 0) return res.status(404).send(pagina("Link niet gevonden", "Deze afmeld-link is niet (meer) geldig. Misschien ben je al afgemeld."));
    } catch {
      return res.status(500).send(pagina("Even niet gelukt", "We konden je afmelding niet verwerken. Probeer het later nog eens."));
    }
    return res.status(200).send(pagina("Je leest niet meer mee ✅", "Je krijgt het weekrapport niet meer. Wil je later toch weer meelezen? Dan kan de ouder je opnieuw uitnodigen."));
  }
  const token = (req.query && req.query.token) || "";
  if (!token || String(token).length < 8) {
    return res.status(400).send(pagina("Ongeldige link", "Deze uitschrijf-link klopt niet. Open 'm direct vanuit de e-mail."));
  }
  if (req.method !== "POST") {
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).send(bevestigPagina(token));
  }

  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) return res.status(500).send(pagina("Even niet gelukt", "Er ging iets mis. Probeer het later nog eens."));

  try {
    // Bug-jacht 7/7: elke rij heeft een EIGEN token en één adres kan meerdere
    // rijen hebben (één per pakket: oefenpakket, leesladder, ...). Alleen de
    // token-rij afmelden brak de belofte "je ontvangt geen mails meer" — de
    // andere rijen bleven mailen. Nu: e-mail bij de token opzoeken en ALLE
    // rijen van dat adres afmelden. Ook: onbekende token = nette foutpagina
    // i.p.v. een vals "je bent uitgeschreven ✅".
    // Token kan uit de lesmateriaal-lijst óf uit de Kwartiercheck-reeks komen
    // (28 jul): beide tabellen doorzoeken, en bij een match ALLE mails van dat
    // adres stoppen — in beide tabellen. "Geen mail meer" = echt geen mail meer.
    let email = null;
    const zoek = await sb(
      `upgrade_waitlist?unsubscribe_token=eq.${encodeURIComponent(token)}&select=email&limit=1`,
      { method: "GET" },
      base, key
    );
    const rijen = zoek.ok ? await zoek.json() : [];
    email = Array.isArray(rijen) && rijen[0]?.email;
    if (!email) {
      const zoekKc = await sb(
        `kwartiercheck_results?unsubscribe_token=eq.${encodeURIComponent(token)}&select=email&limit=1`,
        { method: "GET" },
        base, key
      );
      const rijenKc = zoekKc.ok ? await zoekKc.json() : [];
      email = Array.isArray(rijenKc) && rijenKc[0]?.email;
    }
    if (!email) {
      return res.status(404).send(pagina("Link niet gevonden", "Deze uitschrijf-link is niet (meer) geldig. Open de link direct vanuit de nieuwste e-mail, of mail ons via de site."));
    }
    // ILIKE-wildcards (%/_) escapen — een underscore in een e-mailadres mag
    // niet als joker matchen op andermans adres.
    const patroon = String(email).replace(/[\\%_]/g, "\\$&");
    const stempel = JSON.stringify({ unsubscribed_at: new Date().toISOString() });
    const r = await sb(
      // PostgREST: ilike zonder joker = case-insensitive gelijk (matcht de
      // unique index op lower(email)).
      `upgrade_waitlist?email=ilike.${encodeURIComponent(patroon)}`,
      { method: "PATCH", headers: { Prefer: "return=minimal" }, body: stempel },
      base, key
    );
    if (!r.ok) throw new Error("patch-fout " + r.status);
    // Kwartiercheck-rijen van hetzelfde adres ook stoppen — mag stil falen als
    // het adres daar niet voorkomt (PATCH op 0 rijen is gewoon ok).
    try {
      await sb(
        `kwartiercheck_results?email=ilike.${encodeURIComponent(patroon)}`,
        { method: "PATCH", headers: { Prefer: "return=minimal" }, body: stempel },
        base, key
      );
    } catch { /* niet fataal */ }
  } catch (e) {
    return res.status(500).send(pagina("Even niet gelukt", "We konden je uitschrijving niet verwerken. Probeer het later nog eens."));
  }

  return res.status(200).send(pagina("Je bent uitgeschreven ✅", "Je ontvangt geen lesmateriaal-mails meer. Jammer dat je gaat — je bent altijd welkom terug op leerkwartier.app."));
}
