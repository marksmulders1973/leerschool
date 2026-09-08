// Eenmalige mailing (Mark 2026-07-05): stuur iedereen op de lesmateriaal-lijst
// een UITPRINTBAAR begrijpend-lezen-pakket (de Leesladder, trede 1 + 2) mét een
// apart antwoordblad achteraan. Plus een knop naar de volledige /leesladder.
//
// Hergebruikt de bestaande e-mailmachine-infra (Resend + Supabase + unsubscribe).
// KLAAR-MAAR-UIT: zonder RESEND_API_KEY gebeurt er niets.
//
// Beveiliging: ?key=<CRON_SECRET> (of Bearer). Handmatig te vuren, geen cron.
// PREVIEW eerst: ?key=...&test=1  → stuurt ALLEEN naar de maker (EMAIL_ADMIN),
//   raakt de lijst niet aan. Pas zonder test=1 gaat 'ie naar iedereen.
//
//   Preview : GET /api/send-leesladder-pakket?key=SECRET&test=1
//   Blast   : GET /api/send-leesladder-pakket?key=SECRET

import { VERSIES } from "../src/components/leesladderData.js";
import { mailTaglineHtml } from "./_lib/mail-tagline.js";

const SITE = "https://leerkwartier.app";
const LETTERS = ["A", "B", "C", "D", "E", "F"];
const ADMIN_EMAIL = process.env.EMAIL_ADMIN || "Mark-smulders@hotmail.com";
const BATCH = 90;

function esc(s) {
  return String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

async function sb(path, opts, base, key) {
  return fetch(`${base}/rest/v1/${path}`, {
    ...opts,
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", ...(opts.headers || {}) },
  });
}

// Zelfde deterministische optie-hussel als LeesladderPage.jsx, zodat het goede
// antwoord netjes over A-D spreidt (niet steeds A).
function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function husselVraag(v, seedStr) {
  let s = hashSeed(seedStr);
  const rnd = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const idx = v.options.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = (rnd() * (i + 1)) | 0;
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return { ...v, options: idx.map((i) => v.options[i]), answer: idx.indexOf(v.answer) };
}

// Bouw het pakket één keer op (trede 1 + 2 van versie A): korte teksten,
// lekker printbaar in een mail. Doorlopende vraagnummering + antwoordblad.
let _pakketCache = null;
function bouwPakket() {
  if (_pakketCache) return _pakketCache;
  let teller = 0;
  const tredes = VERSIES.A.slice(0, 2).map((t, ti) => ({
    ...t,
    teksten: t.teksten.map((tx, xi) => ({
      ...tx,
      vragen: tx.vragen.map((v, vi) => ({ ...husselVraag(v, `A-${ti}-${xi}-${vi}`), nr: ++teller })),
    })),
  }));
  _pakketCache = { tredes, totaal: teller };
  return _pakketCache;
}

function pakketHtml(token) {
  const { tredes, totaal } = bouwPakket();
  const uit = `${SITE}/api/unsubscribe?token=${encodeURIComponent(token || "")}`;
  const naarLadder = `${SITE}/leesladder?utm_source=email&utm_campaign=leesladder-pakket`;

  // ── Werkblad: teksten + vragen (zonder antwoord) ──
  let werk = "";
  for (const t of tredes) {
    werk += `<div style="font-size:13px;font-weight:800;color:#0a7d3c;text-transform:uppercase;letter-spacing:0.04em;margin:18px 0 10px;">${esc(t.emoji)} Trede ${t.nr} — ${esc(t.titel)}</div>`;
    t.teksten.forEach((tx, ti) => {
      werk += `<div style="margin:0 0 16px;">
        <div style="font-size:14px;font-weight:800;color:#1c2840;background:#eef2f8;border-radius:6px;padding:6px 10px;margin-bottom:6px;">📖 Tekst ${t.nr}.${ti + 1} — ${esc(tx.titel)}</div>
        <div style="font-size:14px;line-height:1.6;color:#1c2840;border:1px solid #dde3ec;border-radius:8px;padding:10px 12px;white-space:pre-line;">${esc(tx.tekst)}</div>`;
      for (const v of tx.vragen) {
        werk += `<div style="margin:8px 0 0;">
          <div style="font-size:14px;color:#1c2840;font-weight:700;">${v.nr}. ${esc(v.q)}</div>
          <div style="font-size:13.5px;color:#3a4658;padding-left:8px;margin-top:2px;">${v.options.map((o, i) => `${LETTERS[i]}. ${esc(o)}`).join("&nbsp;&nbsp; ")}</div>
        </div>`;
      }
      werk += `</div>`;
    });
  }

  // ── Antwoordblad achteraan (voor de ouder) ──
  let sleutel = "";
  for (const t of tredes) {
    sleutel += `<div style="font-size:13px;font-weight:700;color:#9a7b00;margin:10px 0 4px;">${esc(t.emoji)} Trede ${t.nr} — ${esc(t.titel)}</div>`;
    t.teksten.forEach((tx) => {
      for (const v of tx.vragen) {
        sleutel += `<div style="font-size:13px;color:#3a4658;line-height:1.5;margin:0 0 4px;"><strong style="color:#1c2840;">${v.nr}. ${LETTERS[v.answer]}</strong> (${esc(v.options[v.answer])}) · <em>truc: ${esc(v.type)}</em> — ${esc(v.uitleg)}</div>`;
      }
    });
  }

  const html = `<!doctype html><html lang="nl"><body style="margin:0;background:#f4f6fa;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#1c2840;">
  <div style="max-width:600px;margin:0 auto;padding:26px 20px;background:#ffffff;">
    <div style="font-size:22px;font-weight:800;color:#0a0f1e;margin-bottom:4px;">Leerkwartier</div>
    <div style="font-size:13px;color:#0a7d3c;font-weight:700;margin-bottom:18px;">Een kwartier per dag leren, een leven lang slimmer.</div>
    <p style="font-size:15px;line-height:1.6;margin:0 0 10px;">Hoi,</p>
    <p style="font-size:15px;line-height:1.6;margin:0 0 16px;">
      Vindt je kind de teksten bij begrijpend lezen soms <strong>te lang</strong>? Hieronder staat een
      <strong>gratis printbaar oefenpakket</strong>: <strong>De Leesladder</strong> begint bij teksten van vijf
      zinnen en bouwt rustig op. Laat je kind de vragen op papier maken — het <strong>antwoordblad met uitleg
      per lees-truc</strong> staat onderaan, voor jou om samen na te kijken. 💚
    </p>
    <a href="${naarLadder}" style="display:block;text-align:center;background:linear-gradient(135deg,#00C853,#00a846);color:#fff;text-decoration:none;font-weight:800;font-size:16px;padding:13px;border-radius:12px;margin:0 0 8px;">🖨️ Print het volledige pakket (${VERSIES.A.reduce((n, t) => n + t.teksten.reduce((m, x) => m + x.vragen.length, 0), 0)} vragen, 4 treden) →</a>
    <p style="font-size:12px;color:#7d8aa0;margin:0 0 22px;text-align:center;">Tip: kies bij het printen “Opslaan als PDF”. Hieronder alvast de eerste twee treden om meteen te beginnen.</p>

    <div style="background:#f7f9fc;border-radius:12px;padding:14px 16px 6px;margin:0 0 20px;">
      <div style="font-size:13px;font-weight:800;color:#0a7d3c;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:6px;">✏️ Werkblad — laat je kind invullen</div>
      ${werk}
    </div>

    <div style="background:#fff8e6;border:1px solid #f0e0b0;border-radius:12px;padding:14px 16px 8px;margin:0 0 22px;">
      <div style="font-size:13px;font-weight:800;color:#9a7b00;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:8px;">✅ Antwoordblad — voor de ouder (pas nakijken ná het maken)</div>
      ${sleutel}
    </div>

    ${mailTaglineHtml()}
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:0 0 4px;">Je krijgt deze mail omdat je je aanmeldde voor gratis lesmateriaal op leerkwartier.app.</p>
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:0;">Geen mail meer? <a href="${esc(uit)}" style="color:#5a6b86;">Uitschrijven</a> — direct geregeld.</p>
  </div></body></html>`;

  const text =
    `Hoi,\n\nEen gratis printbaar begrijpend-lezen-pakket: De Leesladder. Laat je kind de vragen op papier maken; het antwoordblad met uitleg staat onderaan.\n\n` +
    `Print het volledige pakket: ${naarLadder}\n\n` +
    tredes.map((t) =>
      `${t.emoji} TREDE ${t.nr} — ${t.titel}\n` +
      t.teksten.map((tx, ti) =>
        `Tekst ${t.nr}.${ti + 1} — ${tx.titel}\n${tx.tekst}\n` +
        tx.vragen.map((v) => `${v.nr}. ${v.q}\n   ${v.options.map((o, i) => `${LETTERS[i]}. ${o}`).join("  ")}`).join("\n")
      ).join("\n\n")
    ).join("\n\n") +
    `\n\n--- ANTWOORDBLAD (voor de ouder) ---\n` +
    tredes.map((t) => t.teksten.map((tx) => tx.vragen.map((v) => `${v.nr}. ${LETTERS[v.answer]} (${v.options[v.answer]}) — truc: ${v.type} — ${v.uitleg}`).join("\n")).join("\n")).join("\n") +
    `\n\nUitschrijven: ${uit}\nLeerkwartier — een kwartier per dag leren, een leven lang slimmer.`;

  return { html, text };
}

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

  const RESEND = process.env.RESEND_API_KEY;
  const FROM = process.env.EMAIL_FROM || "Leerkwartier <hallo@leerkwartier.app>";
  if (!RESEND) return res.status(200).json({ ok: true, sent: 0, reason: "resend-uit (zet RESEND_API_KEY in Vercel)" });

  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) return res.status(500).json({ error: "supabase-config-missing" });

  const onderwerp = "📘 Je gratis printbare begrijpend-lezen-pakket (met antwoorden)";
  const test = String((req.query && req.query.test) || "") === "1";

  // Ontvangers. PREVIEW (test=1) → alleen de maker, met een test-token.
  let rijen;
  if (test) {
    let token = "";
    try {
      const q = await sb(`upgrade_waitlist?email=eq.${encodeURIComponent(ADMIN_EMAIL)}&select=unsubscribe_token&limit=1`, { method: "GET" }, base, key);
      const r = await q.json();
      if (Array.isArray(r) && r[0]) token = r[0].unsubscribe_token || "";
    } catch {}
    rijen = [{ id: null, email: ADMIN_EMAIL, unsubscribe_token: token }];
  } else {
    // Bug-jacht 7/7: geen verzonden-marker + geen volgorde = herhaald vuren
    // pakte dezelfde eerste 90 rijen (dubbele mails) en kwam nooit voorbij
    // rij 90. Nu: alleen rijen die recent (48u) nog géén mail kregen, oudste
    // eerst — herhaald vuren pagineert dan veilig door de hele lijst.
    const drempel = new Date(Date.now() - 48 * 3600000).toISOString();
    const filter =
      `plan=in.(gratis-lesmateriaal,oefenpakket,wereldbol,leesladder,redactiebladen)` +
      `&unsubscribed_at=is.null` +
      `&confirmed_at=not.is.null` + // F15: alleen wie de reeks zelf bevestigde
      `&or=(last_sent_at.is.null,last_sent_at.lt.${drempel})` +
      `&order=created_at.asc` +
      `&select=id,email,unsubscribe_token,plan&limit=${BATCH}`;
    try {
      const q = await sb(`upgrade_waitlist?${filter}`, { method: "GET" }, base, key);
      rijen = await q.json();
      if (!Array.isArray(rijen)) throw new Error("lijst-leesfout");
    } catch (e) {
      return res.status(500).json({ error: "lijst-lezen-fout", detail: String(e).slice(0, 160) });
    }
  }

  let gelukt = 0;
  const fouten = [];
  const gezien = new Set();
  for (const rij of rijen) {
    if (!rij.email || !String(rij.email).includes("@")) continue;
    const adres = String(rij.email).toLowerCase();
    if (gezien.has(adres)) continue;
    gezien.add(adres);
    const { html, text } = pakketHtml(rij.unsubscribe_token);
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: FROM, to: [rij.email], subject: onderwerp, html, text }),
      });
      if (!r.ok) { fouten.push(String(rij.email).slice(0, 16) + ":" + r.status); continue; }
      // Bij de echte blast last_sent_at bijwerken zodat de weekmail niet
      // dezelfde dag óók nog binnenkomt. sent_count laten we met rust (de
      // reeks bepaalt daarmee zijn eigen inhoud).
      if (!test && rij.id) {
        await sb(`upgrade_waitlist?id=eq.${rij.id}`, {
          method: "PATCH", headers: { Prefer: "return=minimal" },
          body: JSON.stringify({ last_sent_at: new Date().toISOString() }),
        }, base, key);
      }
      gelukt++;
    } catch (e) {
      fouten.push(String(rij.email).slice(0, 16) + ":" + String(e).slice(0, 40));
    }
  }

  return res.status(200).json({ ok: true, test, sent: gelukt, kandidaten: rijen.length, fouten: fouten.slice(0, 10) });
}
