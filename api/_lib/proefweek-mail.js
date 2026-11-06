// 📬 Proefweek dag 6 (6 nov 2026, staande opdracht "10 betalende klanten").
// Eén mail, één dag vóór het einde van de proefweek: wat er deze week gebeurde,
// wat er morgen stopt, en één knop "Kies Familie — € 39 voor 12 maanden".
// Eerlijk en rustig: er stopt iets vanzelf, er wordt niets stilletjes verlengd,
// en wie niets doet hoeft niets te doen. Geen afmeldlink nodig (één mail over
// iets dat de ouder zelf aanzette), wel de vaste tagline.
//
// Lift dagelijks mee op de lesmateriaal-cron (Hobby = 2 crons). Idempotent via
// de tabel proefweek_mails (user_id + soort). Zonder poort (PAYWALL_ACTIVE uit)
// bestaan er geen proefweek-rijen, dus de run is dan een no-op.
import { mailTaglineHtml, familieUrl } from "./mail-tagline.js";

const SITE = "https://leerkwartier.app";
const DAG = 86400e3;

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function datumNL(iso) {
  return new Date(iso).toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long", timeZone: "Europe/Amsterdam" });
}

// Puur: bouwt onderwerp/html/text. `kinderen` = [{ naam, onderwerpen, dagen }] (mag leeg).
export function bouwProefweekMail({ validUntil, kinderen = [] }) {
  const tot = datumNL(validUntil);
  const url = familieUrl("proefweek-dag6");
  const onderwerp = "Je proefweek stopt morgen — zo ging het";
  const actief = kinderen.filter((k) => (k.onderwerpen || 0) > 0);
  const regel = (k) => `${k.onderwerpen} ${k.onderwerpen === 1 ? "onderwerp" : "onderwerpen"} geoefend op ${k.dagen} ${k.dagen === 1 ? "dag" : "dagen"}`;
  const kindRegels = actief.length
    ? actief.map((k) => `<li style="margin:0 0 4px;">${esc(k.naam)}: ${regel(k)}</li>`).join("")
    : "";
  const kindTekst = actief.length
    ? actief.map((k) => `- ${k.naam}: ${regel(k)}`).join("\n")
    : "";
  const week = actief.length
    ? `<p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 8px;">Deze week in Leerkwartier:</p><ul style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 16px;padding-left:20px;">${kindRegels}</ul>`
    : `<p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 16px;">Er is deze week nog niet geoefend. Dat geeft niets: de proefweek was er om rustig rond te kijken.</p>`;

  const html = `<!doctype html><html lang="nl"><body style="margin:0;background:#0b1224;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:28px 20px;color:#fff;">
    <div style="font-size:22px;font-weight:800;line-height:1.3;margin:0 0 14px;">Je proefweek stopt morgen</div>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 14px;">Hoi! Je Familie-proefweek loopt t/m <strong style="color:#fff;">${tot}</strong>. Daarna stopt hij vanzelf. Je hoeft niets te doen als je het hierbij laat: oefenen blijft gratis, gegarandeerd t/m 2031.</p>
    ${week}
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 18px;">Wil je het ouder-overzicht, het vrijdagrapport, klaarzetten en onbeperkte uitleg van Charley houden? Dan is dit het moment.</p>
    <a href="${url}" style="display:block;text-align:center;background:#ffd54f;color:#0b1224;text-decoration:none;font-weight:800;font-size:16px;padding:14px 18px;border-radius:12px;margin:0 0 10px;">Kies Familie — € 39 voor 12 maanden</a>
    <p style="font-size:13px;line-height:1.6;color:#9fb0c6;margin:0 0 22px;text-align:center;">Per gezin, tot 3 kinderen. Eén keer betalen, geen abonnement: het stopt na 12 maanden vanzelf. Niet tevreden? Binnen 14 dagen je geld terug.</p>
    <p style="font-size:13px;line-height:1.6;color:#9fb0c6;margin:0 0 18px;">Krapper bij kas? Veel gemeenten en stichtingen geven een code waarmee Familie gratis is. Of mail ons: <a href="mailto:hallo@leerkwartier.app" style="color:#ffd54f;">hallo@leerkwartier.app</a>, we zoeken samen een oplossing.</p>
    ${mailTaglineHtml()}
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:8px 0 0;">Je krijgt deze ene mail omdat je op leerkwartier.app een proefweek van Familie startte. Er volgt geen tweede.</p>
  </div></body></html>`;

  const text = `Je proefweek stopt morgen\n\nJe Familie-proefweek loopt t/m ${tot}. Daarna stopt hij vanzelf. Je hoeft niets te doen als je het hierbij laat: oefenen blijft gratis, gegarandeerd t/m 2031.\n\n${kindTekst ? "Deze week in Leerkwartier:\n" + kindTekst + "\n\n" : ""}Wil je het ouder-overzicht, het vrijdagrapport, klaarzetten en onbeperkte uitleg van Charley houden? Kies Familie: € 39 voor 12 maanden, per gezin, stopt vanzelf.\n${url}\n\nKrapper bij kas? Mail hallo@leerkwartier.app, we zoeken samen een oplossing.\n\n${SITE}`;
  return { onderwerp, html, text };
}

// Puur: welke proefweek-rijen zijn vandaag "dag 6"? (valid_until tussen 12 en 36 uur vooruit)
export function isDag6(validUntil, nu = Date.now()) {
  const t = Date.parse(validUntil);
  if (!Number.isFinite(t)) return false;
  return t - nu >= 0.5 * DAG && t - nu <= 1.5 * DAG;
}

async function sb(path, opts, base, key) {
  return fetch(`${base}/rest/v1/${path}`, {
    ...opts,
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=representation", ...(opts?.headers || {}) },
  });
}

async function emailVanUser(userId, base, key) {
  const r = await fetch(`${base}/auth/v1/admin/users/${encodeURIComponent(userId)}`, { headers: { apikey: key, Authorization: `Bearer ${key}` } });
  if (!r.ok) return null;
  const u = await r.json();
  return u && u.email && !u.is_anonymous ? u.email : null;
}

// Oefenactiviteit van de gekoppelde kinderen in de afgelopen 7 dagen: topic_mastery op link_id
// (zelfde bron als het vrijdagrapport), per kind het aantal onderwerpen + oefendagen.
async function kinderenVanOuder(userId, base, key) {
  try {
    const r = await sb(`parent_child_links?parent_user_id=eq.${encodeURIComponent(userId)}&select=id,child_name&limit=3`, { method: "GET" }, base, key);
    if (!r.ok) return [];
    const links = await r.json();
    const sinds = new Date(Date.now() - 7 * DAG).toISOString();
    const uit = [];
    for (const l of Array.isArray(links) ? links : []) {
      const q = await sb(`topic_mastery?link_id=eq.${encodeURIComponent(l.id)}&last_seen=gte.${encodeURIComponent(sinds)}&select=path_id,last_seen&limit=300`, { method: "GET" }, base, key);
      const rows = q.ok ? await q.json() : [];
      const lijst = Array.isArray(rows) ? rows : [];
      const dagen = new Set(lijst.map((e) => String(e.last_seen).slice(0, 10)));
      uit.push({ naam: l.child_name, onderwerpen: new Set(lijst.map((e) => e.path_id)).size, dagen: dagen.size });
    }
    return uit;
  } catch { return []; }
}

export async function stuurProefweekDag6Mails({ base, key, RESEND, FROM, maxMails = 20 }) {
  const nu = Date.now();
  const van = new Date(nu + 0.5 * DAG).toISOString();
  const tot = new Date(nu + 1.5 * DAG).toISOString();
  const r = await sb(`subscriptions?plan=eq.proefweek&status=eq.active&valid_until=gte.${encodeURIComponent(van)}&valid_until=lte.${encodeURIComponent(tot)}&select=user_id,valid_until&limit=50`, { method: "GET" }, base, key);
  if (!r.ok) return { sent: 0, reden: `subscriptions ${r.status}` };
  const rijen = await r.json();
  let sent = 0; const fouten = []; let overgeslagen = 0;
  for (const rij of Array.isArray(rijen) ? rijen : []) {
    if (sent >= maxMails) break;
    if (!isDag6(rij.valid_until, nu)) continue;
    // Al gehad? (idempotent)
    const al = await sb(`proefweek_mails?user_id=eq.${encodeURIComponent(rij.user_id)}&soort=eq.dag6&select=user_id&limit=1`, { method: "GET" }, base, key);
    const alRows = al.ok ? await al.json() : [{}];
    if (Array.isArray(alRows) && alRows.length) { overgeslagen++; continue; }
    const email = await emailVanUser(rij.user_id, base, key);
    if (!email) { overgeslagen++; continue; }
    const kinderen = await kinderenVanOuder(rij.user_id, base, key);
    const { onderwerp, html, text } = bouwProefweekMail({ validUntil: rij.valid_until, kinderen });
    const m = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM, reply_to: "hallo@leerkwartier.app", to: [email], subject: onderwerp, html, text }),
    });
    if (!m.ok) { fouten.push(rij.user_id.slice(0, 6) + ":" + m.status); continue; }
    sent++;
    await sb("proefweek_mails", { method: "POST", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ user_id: rij.user_id, soort: "dag6" }) }, base, key).catch(() => {});
  }
  return { sent, overgeslagen, fouten };
}
