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

import { maakOuderMailSectie } from "../src/shared/niveauIndicatie.js";
import { mailTaglineHtml } from "./_lib/mail-tagline.js";
import { isoWeekKey, weekCode } from "./_lib/weekcode.js";
import rekenenPad from "../src/learnPaths/doorstroomtoetsRekenenG8.js";
import taalPad from "../src/learnPaths/doorstroomtoetsTaalG8.js";
import studiePad from "../src/learnPaths/doorstroomtoetsStudievaardighedenG8.js";

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const BATCH = 90;
const DAGEN_TUSSEN = 6; // minimaal aantal dagen tussen twee mails
const SITE = "https://leerkwartier.app";
// Dagrapport-ontvanger (Mark wil elke dag horen hoeveel mails er uitgingen).
const ADMIN_EMAIL = process.env.EMAIL_ADMIN || "Mark-smulders@hotmail.com";

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

// B6 niveau-indicatie: haal de referentieniveau-telling op voor dit
// e-mailadres. Werkt ALLEEN via een geverifieerde parent_child_link
// (de SQL-functie matcht nooit op alleen een voornaam — privacy).
// Geen koppeling of nog niets gemeten → null → geen sectie in de mail.
async function haalNiveauSectie(email, base, key) {
  try {
    const r = await sb(
      "rpc/niveau_resultaten_voor_email",
      { method: "POST", body: JSON.stringify({ p_email: email }) },
      base, key
    );
    const rows = await r.json();
    if (!Array.isArray(rows) || rows.length === 0) return null;
    const leeg = () => ({ f1: { goed: 0, totaal: 0 }, s: { goed: 0, totaal: 0 } });
    const resultaten = { rekenen: leeg(), lezen: leeg(), taalverzorging: leeg() };
    for (const row of rows) {
      const slot = row.ref === "1F" ? "f1" : "s";
      if (!resultaten[row.onderdeel]) continue;
      resultaten[row.onderdeel][slot].goed += row.correct || 0;
      resultaten[row.onderdeel][slot].totaal += row.attempts || 0;
    }
    // maakOuderMailSectie bevat verplicht "onder voorbehoud" + methode-uitleg,
    // of de eerlijke "nog even te vroeg"-variant bij te weinig vragen.
    return maakOuderMailSectie(resultaten);
  } catch {
    return null; // indicatie is een extraatje — mail gaat gewoon door
  }
}

// ── Oefenvraag voor in de mail (v2, Mark 2026-06-15) ──────────────
// De weekmail was "te dun" (alleen links). We zetten nu een echte 4-keuzevraag
// mét uitleg in de mail zelf, zodat 'm openen waarde heeft i.p.v. een kopie van
// de app. Bron = de Doorstroomtoets-leerpaden (zelfde vragen als het oefenpakket).
function _stripMd(t = "") {
  return String(t).replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1");
}
function _mdNaarHtml(t = "") {
  return String(t)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*(?!\*)(.+?)\*(?!\*)/g, "$1<em>$2</em>");
}
// Alleen schone tekst-vragen (geen plaatjes/SVG/formules/links) in de mail.
function _mailGeschikt(c) {
  const blob = (c.q || "") + " " + (c.options || []).join(" ");
  return !/[<$]|!\[|\]\(|http/i.test(blob);
}
let _vragenCache = null;
function alleOefenvragen() {
  if (_vragenCache) return _vragenCache;
  const out = [];
  for (const pad of [rekenenPad, taalPad, studiePad]) {
    for (const step of pad.steps || []) {
      for (const c of step.checks || []) {
        const geldig = Array.isArray(c.options) && c.options.length >= 2 &&
          Number.isInteger(c.answer) && c.answer >= 0 && c.answer < c.options.length && c.q;
        if (!geldig || !_mailGeschikt(c)) continue;
        const u = c.uitlegPad || {};
        const uitleg = (u.niveaus && u.niveaus.basis) ||
          (Array.isArray(u.stappen) && u.stappen[0] && u.stappen[0].tekst) || u.theorie || "";
        out.push({ vak: pad.subject || "", q: c.q, options: c.options, answer: c.answer, uitleg });
      }
    }
  }
  _vragenCache = out;
  return out;
}
// Eén vraag die dagelijks roteert (iedereen die op dezelfde dag mail krijgt,
// krijgt dezelfde vraag; verandert per dag).
function kiesOefenvraag() {
  const v = alleOefenvragen();
  if (!v.length) return null;
  const now = new Date();
  const dag = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  return v[dag % v.length];
}
const VAK_LABEL = { rekenen: "rekenen", taal: "taal", studievaardigheden: "studievaardigheden" };
function maakVraagBlok(vraag) {
  if (!vraag) return { html: "", text: "" };
  const vak = VAK_LABEL[vraag.vak] || "oefenen";
  const opts = vraag.options
    .map((o, i) => `<div style="font-size:15px;color:#cdd6e5;margin:0 0 6px;"><strong style="color:#69f0ae;">${LETTERS[i]}.</strong> ${_mdNaarHtml(o)}</div>`)
    .join("");
  const goed = `${LETTERS[vraag.answer]}. ${_stripMd(vraag.options[vraag.answer])}`;
  const uitlegHtml = vraag.uitleg
    ? `<p style="font-size:14px;line-height:1.55;color:#aeb9cc;margin:8px 0 0;">${_mdNaarHtml(vraag.uitleg)}</p>`
    : "";
  const html = `
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:18px;margin:0 0 22px;">
      <div style="font-size:13px;font-weight:700;color:#69f0ae;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:8px;">🧠 Oefenvraag · ${vak}</div>
      <div style="font-size:16px;font-weight:700;color:#fff;line-height:1.45;margin:0 0 12px;">${_mdNaarHtml(vraag.q)}</div>
      ${opts}
      <div style="font-size:13px;color:#7d8aa0;margin:12px 0 10px;">Denk eerst zelf na — het antwoord staat hieronder 👇</div>
      <div style="border-top:1px solid rgba(255,255,255,0.12);padding-top:12px;">
        <div style="font-size:15px;color:#fff;"><strong style="color:#69f0ae;">✅ Antwoord:</strong> ${_mdNaarHtml(goed)}</div>
        ${uitlegHtml}
      </div>
    </div>`;
  const textOpts = vraag.options.map((o, i) => `${LETTERS[i]}. ${_stripMd(o)}`).join("\n");
  const text = `🧠 Oefenvraag (${vak})\n${_stripMd(vraag.q)}\n${textOpts}\n\n(Denk eerst zelf na — antwoord hieronder)\n✅ Antwoord: ${goed}${vraag.uitleg ? "\n" + _stripMd(vraag.uitleg) : ""}\n\n`;
  return { html, text };
}

// Bouwt de HTML + onderwerp. Welkomst bij de eerste mail, anders de week-mail.
function maakMail(rij, welkom, niveauSectie = null, oefenvraag = null) {
  const vraagBlok = maakVraagBlok(oefenvraag);
  const naam = esc(rij.kind_voornaam) || "";
  const hoi = naam ? `Hoi ${naam}-ouder,` : "Hoi,";
  const ref = encodeURIComponent(rij.unsubscribe_token || "");
  const utm = `utm_source=email&utm_campaign=${welkom ? "welkom" : "weekmail"}`;
  const vandaag = `${SITE}/vandaag?${utm}`;
  const toets = `${SITE}/doorstroomtoets-oefentoets?${utm}`;
  const uit = `${SITE}/api/unsubscribe?token=${ref}`;
  const tip = `${SITE}/tips?utm_source=email&utm_campaign=tip`;
  // F15 (2 sep 2026): de welkomstmail is de enige mail zonder bevestiging;
  // de wekelijkse reeks gaat pas door na een tik hierop (confirmed_at).
  const bevestig = `${SITE}/api/bevestig?token=${ref}`;
  const bevestigBlok = welkom ? {
    html: `
    <div style="background:rgba(105,240,174,0.08);border:1.5px solid #00C853;border-radius:12px;padding:14px 16px;margin:0 0 18px;">
      <div style="font-size:14px;font-weight:800;color:#69f0ae;margin-bottom:6px;">Wil je dit élke week?</div>
      <div style="font-size:13.5px;line-height:1.55;color:#cdd6e5;margin-bottom:10px;">Tik één keer op de knop — zo weten we zeker dat jij dit adres bent. Zonder tik krijg je verder geen mail.</div>
      <a href="${bevestig}" style="display:inline-block;background:linear-gradient(135deg,#00C853,#00a846);color:#fff;text-decoration:none;font-weight:800;font-size:14px;padding:11px 18px;border-radius:10px;">✅ Ja, elke week een oefenkwartiertje</a>
    </div>`,
    text: `\nWil je dit elke week? Bevestig hier (zonder tik krijg je geen mail meer): ${bevestig}\n`,
  } : { html: "", text: "" };

  const onderwerp = welkom
    ? "Welkom! Hier is je eerste gratis oefenkwartiertje 🎓"
    : "Je gratis oefenkwartiertje van deze week 🎓";

  // 📬 Weekpakket-code (alleen als het geheim geconfigureerd is): elke week een
  // nieuwe code die het exclusieve printpakket opent — dé reden om op de lijst
  // te staan. Zie api/weekpakket.js + memory project_studiebol_weekpakket.
  let weekpakketBlok = { html: "", text: "" };
  if (process.env.WEEKPAKKET_SECRET) {
    const wpCode = weekCode(isoWeekKey());
    const wpLink = `${SITE}/api/weekpakket?code=${encodeURIComponent(wpCode)}`;
    weekpakketBlok = {
      html: `
    <div style="background:#f4f7fb;color:#1c2840;border-radius:12px;padding:16px 18px;margin-bottom:22px;text-align:center;">
      <div style="font-size:13px;font-weight:800;color:#0a7d3c;text-transform:uppercase;letter-spacing:0.05em;">📬 Jouw Weekpakket-code</div>
      <div style="font-size:28px;font-weight:800;color:#0a7d3c;letter-spacing:0.14em;margin:4px 0;">${esc(wpCode)}</div>
      <div style="font-size:13px;color:#56627a;">Opent het printpakket van deze week (rekenen + taal + lezen, met antwoordblad).</div>
      <a href="${wpLink}" style="display:inline-block;background:#0a7d3c;color:#fff;text-decoration:none;font-weight:800;font-size:14px;padding:10px 18px;border-radius:10px;margin-top:8px;">Open het Weekpakket →</a>
    </div>`,
      text: `\nJouw Weekpakket-code voor deze week: ${wpCode}\nOpen het printpakket: ${wpLink}\n`,
    };
  }

  const intro = welkom
    ? "Leuk dat je erbij bent! Elke week sturen we je een gratis oefenkwartiertje voor de Doorstroomtoets — één korte vraag mét uitleg op 3 niveaus, zodat je kind écht begrijpt waaróm."
    : "Hier is je gratis oefenkwartiertje voor deze week. Eén korte Doorstroomtoets-vraag mét uitleg — in een kwartiertje weer een stukje verder.";

  const html = `<!doctype html><html lang="nl"><body style="margin:0;background:#0a0f1e;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e8edf5;">
  <div style="max-width:520px;margin:0 auto;padding:28px 22px;">
    <div style="font-size:22px;font-weight:800;color:#fff;margin-bottom:6px;">Leerkwartier</div>
    <div style="font-size:13px;color:#69f0ae;font-weight:700;margin-bottom:20px;">Een kwartier per dag leren, een leven lang slimmer.</div>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 14px;">${hoi}</p>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 22px;">${esc(intro)}</p>
    ${vraagBlok.html}
    ${weekpakketBlok.html}
    <a href="${vandaag}" style="display:block;text-align:center;background:linear-gradient(135deg,#00C853,#00a846);color:#fff;text-decoration:none;font-weight:800;font-size:16px;padding:14px;border-radius:12px;margin-bottom:12px;">🎯 Doe de vraag van vandaag →</a>
    <a href="${toets}" style="display:block;text-align:center;background:rgba(0,200,83,0.10);border:1.5px solid #00C853;color:#69f0ae;text-decoration:none;font-weight:800;font-size:15px;padding:12px;border-radius:12px;margin-bottom:24px;">📝 Of de gratis oefentoets →</a>
    ${niveauSectie ? `<div style="background:#f4f7fb;color:#1c2840;border-radius:12px;padding:4px 16px 14px;margin-bottom:24px;">${niveauSectie}</div>` : `
    <div style="background:rgba(105,240,174,0.07);border:1px dashed rgba(105,240,174,0.4);border-radius:12px;padding:14px 16px;margin-bottom:24px;">
      <div style="font-size:14px;font-weight:800;color:#69f0ae;margin-bottom:4px;">📊 Nieuw: gratis wekelijks ouder-rapport</div>
      <div style="font-size:13.5px;line-height:1.55;color:#cdd6e5;">Elke maandag in je mail: wat je kind oefende, wat al goed gaat en wat aandacht verdient — zoals betaalde apps dat doen, bij ons gratis. <a href="${SITE}/ouder?utm_source=email&utm_campaign=koppel-cta" style="color:#69f0ae;font-weight:700;text-decoration:none;">Koppel je kind in 1 minuut →</a></div>
    </div>`}
    ${bevestigBlok.html}
    <p style="font-size:13px;line-height:1.6;color:#9fb0c6;margin:0 0 20px;text-align:center;">💡 Heb je een idee om Leerkwartier beter te maken? <a href="${tip}" style="color:#69f0ae;font-weight:700;text-decoration:none;">Vertel het de maker →</a></p>
    ${mailTaglineHtml()}
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:0 0 4px;">Je krijgt deze mail omdat je je aanmeldde voor gratis lesmateriaal op leerkwartier.app.</p>
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:0;">Geen mail meer? <a href="${uit}" style="color:#9fb0c6;">Uitschrijven</a> — direct geregeld.</p>
  </div></body></html>`;

  const text = `${naam ? `Hoi ${naam}-ouder,` : "Hoi,"}\n\n${welkom ? "Leuk dat je erbij bent! " : ""}Je gratis oefenkwartiertje:\n\n${vraagBlok.text}${weekpakketBlok.text}Meer oefenen:\n- Vraag van vandaag: ${vandaag}\n- Gratis oefentoets: ${toets}\n${bevestigBlok.text}\nHeb je een idee om Leerkwartier beter te maken? Tip de maker: ${tip}\n\nUitschrijven: ${uit}\nLeerkwartier — een kwartier per dag leren, een leven lang slimmer.`;

  return { onderwerp, html, text };
}

// Dagrapport naar Mark: hoeveel content-mails zijn er deze run (= vandaag) verstuurd.
// Draait ook op dagen met 0 (niemand 'due') — Mark wil het elke dag in zijn inbox zien.
// Faalt nooit hard: een fout in het rapport mag de hoofdtaak niet blokkeren.
async function stuurDagrapport(RESEND, FROM, { sent, kandidaten, fouten, reden, perPlan }) {
  if (!RESEND) return;
  let datum;
  try {
    datum = new Date().toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long" });
  } catch {
    datum = new Date().toISOString().slice(0, 10);
  }
  const n = sent || 0;
  const foutTekst = fouten && fouten.length ? `${fouten.length} (${fouten.join(", ")})` : "0";
  // Uitsplitsing per type/plan (Mark-wens 2026-06-23: "6 mails verstuurd met bv oefenpakket").
  const perPlanTekst = perPlan && Object.keys(perPlan).length
    ? Object.entries(perPlan).map(([k, v]) => `${v}× ${k}`).join(", ")
    : "";
  const onderwerp = `📬 Leerkwartier dagrapport: ${n} mail${n === 1 ? "" : "s"} verstuurd${perPlanTekst ? ` — ${perPlanTekst}` : ""}`;
  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;line-height:1.6;color:#1a2332;">
    <p style="margin:0 0 4px;"><strong>Dagrapport e-mailmachine</strong></p>
    <p style="margin:0 0 14px;color:#6b7785;font-size:13px;">${datum}</p>
    <p style="font-size:24px;font-weight:800;margin:0 0 12px;">${n} mail${n === 1 ? "" : "s"} verstuurd vandaag</p>
    ${perPlanTekst ? `<p style="margin:0 0 4px;">Type: <strong>${perPlanTekst}</strong></p>` : ""}
    <p style="margin:0 0 4px;">Kandidaten (due vandaag): ${kandidaten ?? 0}</p>
    <p style="margin:0 0 4px;">Fouten: ${foutTekst}</p>
    ${reden ? `<p style="margin:0 0 4px;">Notitie: ${reden}</p>` : ""}
    <p style="font-size:12px;color:#7d8aa0;margin-top:16px;">Welkomst- + wekelijkse oefenmails. 0 is normaal op dagen dat niemand 'due' is.</p>
  </div>`;
  const text = `Dagrapport e-mailmachine — ${datum}\n\n${n} mails verstuurd vandaag.${perPlanTekst ? `\nType: ${perPlanTekst}` : ""}\nKandidaten: ${kandidaten ?? 0}\nFouten: ${foutTekst}${reden ? `\nNotitie: ${reden}` : ""}`;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM, to: [ADMIN_EMAIL], subject: onderwerp, html, text }),
    });
  } catch {
    // rapport mislukt — stil; mag de cron niet laten falen
  }
}

export default async function handler(req, res) {
  // Beveiliging: alleen Vercel-cron (Bearer CRON_SECRET) of handmatig ?key=.
  const secret = process.env.CRON_SECRET;
  const auth = req.headers["authorization"] || "";
  const keyParam = (req.query && req.query.key) || "";
  // Fail-closed (audit 16-07): ontbreekt CRON_SECRET, dan is het endpoint DICHT
  // — voorheen viel de hele check weg en kon iedereen mass-mails triggeren.
  if (!secret) return res.status(500).json({ error: "cron_secret_missing" });
  if (auth !== `Bearer ${secret}` && keyParam !== secret) {
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

  // 📊 A8.1 (2026-07-08): op maandag lift het wekelijkse OUDER-RAPPORT mee op
  // deze dagelijkse cron — Vercel Hobby staat maar 2 crons toe, dus geen eigen
  // slot. Dubbel-versturen vangt stuurOuderRapporten af via admin_meta-stempel.
  // F7 (Fable-review 2 sep 2026): één gedeeld DAGBUDGET voor alle mail-blokken
  // in deze run (Resend gratis = 100/dag). Op een maandag in het toetsseizoen
  // liepen ouder-rapport + kwartiercheck + aftelreeks + weekmail samen anders
  // over de limiet; Resend gaf 429 en de achterstand schoof elke dag door.
  // Volgorde = prioriteit: ouder-rapport (klein, waardevol, wekelijkse stempel)
  // eerst en ongelimiteerd; daarna delen de rest wat overblijft. 1 = dagrapport.
  const DAGBUDGET = 95;
  let budget = DAGBUDGET - 1;
  let ouderRapport = null;
  let kwartiercheckWeek = null;
  try {
    const weekdag = new Date().toLocaleDateString("nl-NL", { weekday: "long", timeZone: "Europe/Amsterdam" });
    if (weekdag === "maandag") {
      const { stuurOuderRapporten } = await import("./send-ouder-rapport.js");
      ouderRapport = await stuurOuderRapporten({ base, key, RESEND, FROM });
      budget -= ouderRapport?.sent || 0;
    }
    // 🧭 Kwartiercheck-vervolgreeks (Mark 28 jul): ook op maandag — week 2-4
    // van het persoonlijke oefenplan, zwakste onderwerpen eerst.
    if (weekdag === "maandag") {
      try {
        const { stuurKwartiercheckWeekmails } = await import("./_lib/send-kwartiercheck-week.js");
        kwartiercheckWeek = await stuurKwartiercheckWeekmails({ base, key, RESEND, FROM, maxMails: Math.max(0, budget) });
        budget -= kwartiercheckWeek?.sent || 0;
      } catch (e) {
        kwartiercheckWeek = { sent: 0, fouten: [], reden: "kwartiercheck-week-fout: " + String(e).slice(0, 80) };
      }
    }
  } catch (e) {
    ouderRapport = { sent: 0, reden: "ouder-rapport-fout: " + String(e).slice(0, 80) };
  }

  // 🎓 Doorstroomtoets-aftelreeks lift DAGELIJKS mee op deze cron (Vercel Hobby =
  // max 2 crons, geen eigen slot). No-op buiten het seizoen (sep–feb); houdt zelf
  // via doorstroom_step bij wie welke fase-mail al had, dus dagelijks aanroepen
  // is veilig en idempotent.
  let doorstroomCountdown = null;
  try {
    const { stuurDoorstroomCountdown } = await import("./send-doorstroom-countdown.js");
    doorstroomCountdown = await stuurDoorstroomCountdown({ base, key, RESEND, FROM, maxMails: Math.max(0, budget) });
    budget -= doorstroomCountdown?.sent || 0;
  } catch (e) {
    doorstroomCountdown = { sent: 0, reden: "doorstroom-countdown-fout: " + String(e).slice(0, 80) };
  }

  // Drempel: alleen wie nog nooit (last_sent_at null) of >DAGEN_TUSSEN dagen
  // geleden mail kreeg, en niet is uitgeschreven, en op de lesmateriaal-lijst staat.
  const drempel = new Date(Date.now() - DAGEN_TUSSEN * 86400000).toISOString();
  const filter =
    // Kliktocht 3 sep: 'weekpakket' (voordeur-code-mail) hoorde er niet bij →
    // een bevestigde lead kreeg nooit de beloofde wekelijkse code.
    `plan=in.(gratis-lesmateriaal,oefenpakket,wereldbol,leesladder,redactiebladen,weekpakket)` +
    `&unsubscribed_at=is.null` +
    `&or=(last_sent_at.is.null,last_sent_at.lt.${drempel})` +
    // F15 (2 sep 2026): de eerste mail (het gevraagde ding + bevestig-link) mag
    // altijd; de wekelijkse reeks pas na een tik op /api/bevestig (confirmed_at).
    `&and=(or(sent_count.eq.0,confirmed_at.not.is.null))` +
    `&select=id,email,kind_voornaam,sent_count,unsubscribe_token,plan` +
    `&order=last_sent_at.asc.nullsfirst&limit=${BATCH}`;

  let rijen;
  try {
    const q = await sb(`upgrade_waitlist?${filter}`, { method: "GET" }, base, key);
    rijen = await q.json();
    if (!Array.isArray(rijen)) throw new Error("lijst-leesfout: " + JSON.stringify(rijen).slice(0, 200));
  } catch (e) {
    await stuurDagrapport(RESEND, FROM, { sent: ouderRapport?.sent || 0, kandidaten: 0, fouten: [], reden: "lijst-lezen-fout: " + String(e).slice(0, 80) });
    return res.status(500).json({ error: "lijst-lezen-fout", ouderRapport, detail: String(e).slice(0, 200) });
  }
  if (rijen.length === 0) {
    const rapportPlan = ouderRapport?.sent > 0 ? { "📊 ouder-rapport": ouderRapport.sent } : {};
    if (kwartiercheckWeek?.sent > 0) rapportPlan["🧭 kwartiercheck-week"] = kwartiercheckWeek.sent;
    if (doorstroomCountdown?.sent > 0) rapportPlan[`🎓 aftelreeks (fase ${doorstroomCountdown.fase})`] = doorstroomCountdown.sent;
    const extraSent = (ouderRapport?.sent || 0) + (kwartiercheckWeek?.sent || 0) + (doorstroomCountdown?.sent || 0);
    const extraFouten = [...(kwartiercheckWeek?.fouten || []), ...(doorstroomCountdown?.fouten || [])];
    await stuurDagrapport(RESEND, FROM, { sent: extraSent, kandidaten: 0, fouten: extraFouten, reden: "niemand-due" + (ouderRapport?.reden ? ` · ouder-rapport: ${ouderRapport.reden}` : "") + (kwartiercheckWeek?.reden ? ` · ${kwartiercheckWeek.reden}` : "") + (doorstroomCountdown?.reden ? ` · aftelreeks: ${doorstroomCountdown.reden}` : ""), perPlan: rapportPlan });
    return res.status(200).json({ ok: true, sent: 0, ouderRapport, kwartiercheckWeek, doorstroomCountdown, reason: "niemand-due" });
  }

  const oefenvraag = kiesOefenvraag();
  let gelukt = 0;
  const fouten = [];
  const perPlan = {}; // uitsplitsing voor het dagrapport ("6× oefenpakket")
  const gezien = new Set(); // zelfde adres met 2 pakketten → 1 mail per run
  for (const rij of rijen) {
    // F7: rest van het dagbudget; wie niet past blijft "due" (last_sent_at ongewijzigd).
    if (gelukt >= Math.max(0, budget)) { fouten.push("dagbudget-op"); break; }
    if (!rij.email || !String(rij.email).includes("@")) continue;
    const adres = String(rij.email).toLowerCase();
    if (gezien.has(adres)) {
      // Bug-jacht 7/7: de geskipte duplicaat-rij bleef "due" en werd de
      // volgende run alsnog gemaild — hetzelfde adres kreeg zo structureel
      // 2 weekmails per week (één per pakket-rij). Sync daarom óók de
      // duplicaat-rij naar dezelfde 7-daagse cyclus.
      try {
        await sb(
          `upgrade_waitlist?id=eq.${rij.id}`,
          { method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ last_sent_at: new Date().toISOString() }) },
          base, key
        );
      } catch { /* niet fataal — volgende run opnieuw */ }
      continue;
    }
    gezien.add(adres);
    const welkom = !rij.sent_count;
    // Niveau-indicatie alleen in de week-mail (welkomstmail blijft schoon).
    const niveauSectie = welkom ? null : await haalNiveauSectie(rij.email, base, key);
    const { onderwerp, html, text } = maakMail(rij, welkom, niveauSectie, oefenvraag);
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
      const planKey = welkom ? `${rij.plan || "onbekend"} (welkomst)` : (rij.plan || "onbekend");
      perPlan[planKey] = (perPlan[planKey] || 0) + 1;
    } catch (e) {
      fouten.push(String(rij.id).slice(0, 8) + ":" + String(e).slice(0, 60));
    }
  }

  // Ouder-rapport- + kwartiercheck-cijfers mee in het dagrapport naar Mark.
  if (ouderRapport) {
    if (ouderRapport.sent > 0) perPlan["📊 ouder-rapport"] = ouderRapport.sent;
    if (Array.isArray(ouderRapport.fouten)) fouten.push(...ouderRapport.fouten.map((f) => "rapport:" + f));
  }
  if (kwartiercheckWeek) {
    if (kwartiercheckWeek.sent > 0) perPlan["🧭 kwartiercheck-week"] = kwartiercheckWeek.sent;
    if (Array.isArray(kwartiercheckWeek.fouten)) fouten.push(...kwartiercheckWeek.fouten);
  }
  if (doorstroomCountdown) {
    if (doorstroomCountdown.sent > 0) perPlan[`🎓 aftelreeks (fase ${doorstroomCountdown.fase})`] = doorstroomCountdown.sent;
    if (Array.isArray(doorstroomCountdown.fouten)) fouten.push(...doorstroomCountdown.fouten);
  }
  const redenDelen = [
    ouderRapport?.reden ? `ouder-rapport: ${ouderRapport.reden}` : null,
    kwartiercheckWeek?.reden || null,
    doorstroomCountdown?.reden ? `aftelreeks: ${doorstroomCountdown.reden}` : null,
  ].filter(Boolean);
  await stuurDagrapport(RESEND, FROM, {
    sent: gelukt + (ouderRapport?.sent || 0) + (kwartiercheckWeek?.sent || 0) + (doorstroomCountdown?.sent || 0),
    kandidaten: rijen.length,
    fouten,
    perPlan,
    reden: redenDelen.length ? redenDelen.join(" · ") : undefined,
  });
  return res.status(200).json({ ok: true, sent: gelukt, ouderRapport, kwartiercheckWeek, doorstroomCountdown, kandidaten: rijen.length, fouten: fouten.slice(0, 10) });
}
