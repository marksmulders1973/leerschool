// Kwartiercheck-vervolgreeks (Mark 28 jul 2026): na de resultaat-mail krijgt
// de ouder elke maandag één week uit het oefenplan — maximaal 3 vervolg-mails,
// zwakste onderwerpen eerst, met toets-countdown en (waar passend) een
// verwijzing naar de zelfprint-pakketten. Lift mee op de dagelijkse
// send-weekly-lesmateriaal-cron (maandag-blok), net als het ouder-rapport.

import { CONCEPTEN, bepaalGaps } from "../kwartiercheck-mail.js";
import { mailTaglineHtml } from "./mail-tagline.js";

const SITE = "https://leerkwartier.app";
const BATCH = 40;
const MAX_VERVOLG = 3;          // resultaat-mail = week 1; daarna max week 2-4
const MIN_DAGEN_NA_CHECK = 5;   // eerste vervolg-mail pas ~een week na de check
const MIN_DAGEN_TUSSEN = 6;     // dubbel-versturen-guard bij dubbele cron-run

// De Doorstroomtoets wordt begin februari afgenomen; 1 feb als anker voor de
// "nog X weken"-teller. Ná de toets geen countdown meer tonen.
function wekenTotToets() {
  const nu = new Date();
  const jaar = nu.getMonth() >= 2 ? nu.getFullYear() + 1 : nu.getFullYear();
  const toets = new Date(`${jaar}-02-01T09:00:00+01:00`);
  const weken = Math.round((toets - nu) / (7 * 86400000));
  return weken > 0 ? weken : null;
}

// Zelfprint-pakketten per onderwerp — alleen tonen waar de match logisch is.
const PRINT_TIPS = {
  tafels:          { label: "het printbare tafels-pakket", url: `${SITE}/printen` },
  breuken:         { label: "de printbare sommen-bladen", url: `${SITE}/printen` },
  procenten:       { label: "de printbare sommen-bladen", url: `${SITE}/printen` },
  maten:           { label: "de printbare sommen-bladen", url: `${SITE}/printen` },
  verhoudingen:    { label: "de printbare sommen-bladen", url: `${SITE}/printen` },
  spelling:        { label: "de printbare dictee-bladen", url: `${SITE}/printen` },
  werkwoordtijden: { label: "de printbare dictee-bladen", url: `${SITE}/printen` },
  woordsoorten:    { label: "het printbare oefenwerkboek", url: `${SITE}/oefenpakket` },
  woordenschat:    { label: "het printbare oefenwerkboek", url: `${SITE}/oefenpakket` },
  hoofdgedachte:   { label: "de Leesladder (printbaar, van kort naar lang)", url: `${SITE}/leesladder` },
  tekstbegrip:     { label: "de Leesladder (printbaar, van kort naar lang)", url: `${SITE}/leesladder` },
  oorzaakgevolg:   { label: "de Leesladder (printbaar, van kort naar lang)", url: `${SITE}/leesladder` },
};

function esc(s) {
  return String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

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

function bouwWeekmail(rij, weekNr, items) {
  const naam = esc(rij.naam_kind || "");
  const utm = "utm_source=kwartiercheck&utm_medium=email&utm_campaign=weekreeks";
  const uit = `${SITE}/api/unsubscribe?token=${encodeURIComponent(rij.unsubscribe_token)}`;
  const weken = wekenTotToets();
  const countdown = weken
    ? `<div style='font-size:13px;font-weight:700;color:#ffd54f;margin-bottom:14px'>⏳ Nog ongeveer ${weken} weken tot de Doorstroomtoets (begin februari)</div>`
    : "";

  const blokken = items.map((c) => {
    const oefenUrl = `${SITE}/?pad=${encodeURIComponent(c.leerpadId)}&${utm}`;
    const tip = PRINT_TIPS[c.id];
    const printRegel = tip
      ? `<div style='font-size:12.5px;color:#9fb0c6;margin-top:6px'>🖨️ Liever op papier? Gebruik <a href='${tip.url}?${utm}' style='color:#69b2ff'>${tip.label}</a>.</div>`
      : "";
    return `<div style='background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:14px 16px;margin-bottom:12px'>
      <div style='font-size:15px;font-weight:800;color:#fff'>${esc(c.label)}</div>
      <div style='font-size:12.5px;color:rgba(255,255,255,0.5);margin:2px 0 8px'>${esc(c.vak)}</div>
      <a href='${oefenUrl}' style='display:inline-block;padding:9px 16px;background:linear-gradient(135deg,#ff6b35,#ff8c42);color:#fff;font-weight:800;font-size:13px;border-radius:9px;text-decoration:none'>▶ Start oefening</a>
      ${printRegel}
    </div>`;
  }).join("");

  const onderwerp = `Week ${weekNr} van jullie oefenplan — ${rij.naam_kind}`;
  const html = `<!doctype html><html lang='nl'><head><meta charset='utf-8'></head>
<body style='margin:0;padding:0;background:#0a0f1e;font-family:system-ui,-apple-system,sans-serif'>
<div style='max-width:560px;margin:0 auto;padding:0 0 32px'>
  <div style='background:linear-gradient(135deg,#1a2a4a,#0f1729);padding:24px 26px 18px;border-bottom:2px solid #ff6b35'>
    <div style='font-size:20px;font-weight:800;color:#fff'>Week ${weekNr} — oefenplan van ${naam}</div>
    <div style='font-size:13px;color:rgba(255,255,255,0.5);margin-top:2px'>Kwartiercheck · Leerkwartier</div>
  </div>
  <div style='padding:20px 26px 8px;background:#0f1729'>
    ${countdown}
    <p style='font-size:14.5px;color:#cdd5e0;margin:0 0 16px;line-height:1.6'>
      Deze week oefent ${naam} met de onderwerpen hieronder — een kwartier per dag is genoeg.
      Klein beginnen en volhouden werkt beter dan één lange middag blokken.
    </p>
    ${blokken}
  </div>
  <div style='padding:14px 26px 0;border-top:1px solid rgba(255,255,255,0.07);background:#0a0f1e;text-align:center'>
    ${mailTaglineHtml({ kleur: "rgba(255,255,255,0.4)", link: "#69b2ff" })}
    <p style='font-size:11px;color:rgba(255,255,255,0.3);margin:0'>
      <a href='https://leerkwartier.app' style='color:#69b2ff'>Leerkwartier</a> · week ${weekNr} van maximaal 4 ·
      <a href='${uit}' style='color:rgba(255,255,255,0.3)'>afmelden</a>
    </p>
  </div>
</div>
</body></html>`;

  const text = `Week ${weekNr} — oefenplan van ${rij.naam_kind}\n\n` +
    (weken ? `Nog ongeveer ${weken} weken tot de Doorstroomtoets.\n\n` : "") +
    items.map((c) => {
      const tip = PRINT_TIPS[c.id];
      return `- ${c.label} (${c.vak}): ${SITE}/?pad=${encodeURIComponent(c.leerpadId)}` +
        (tip ? `\n  Op papier: ${tip.url}` : "");
    }).join("\n") +
    `\n\nAfmelden: ${uit}\nLeerkwartier — een kwartier per dag leren, een leven lang slimmer.`;

  return { onderwerp, html, text };
}

// Aangeroepen vanuit send-weekly-lesmateriaal.js (maandag-blok).
// Retourneert { sent, fouten, reden } voor het dagrapport.
// maxMails (F7, 2 sep 2026): gedeeld dagbudget (Resend 100/dag) — de aanroeper
// geeft door hoeveel er nog mag; wat niet past blijft "due" voor de volgende run.
export async function stuurKwartiercheckWeekmails({ base, key, RESEND, FROM, maxMails = null }) {
  const naCheck = new Date(Date.now() - MIN_DAGEN_NA_CHECK * 86400000).toISOString();
  const tussenDrempel = new Date(Date.now() - MIN_DAGEN_TUSSEN * 86400000).toISOString();
  const filter =
    `unsubscribed_at=is.null` +
    `&weekmail_sent=lt.${MAX_VERVOLG}` +
    `&created_at=lt.${naCheck}` +
    `&or=(weekmail_last_at.is.null,weekmail_last_at.lt.${tussenDrempel})` +
    `&select=id,email,naam_kind,groep,scores_json,weekmail_sent,unsubscribe_token,created_at` +
    `&order=created_at.desc&limit=${BATCH}`;

  let rijen;
  try {
    const q = await sb(`kwartiercheck_results?${filter}`, { method: "GET" }, base, key);
    rijen = await q.json();
    if (!Array.isArray(rijen)) throw new Error(JSON.stringify(rijen).slice(0, 120));
  } catch (e) {
    return { sent: 0, fouten: [], reden: "kwartiercheck-lijst-fout: " + String(e).slice(0, 80) };
  }
  if (!rijen.length) return { sent: 0, fouten: [], reden: null };

  let sent = 0;
  const fouten = [];
  const gezien = new Set(); // zelfde adres deed de check 2× → alleen nieuwste rij mailen
  for (const rij of rijen) {
    if (maxMails != null && sent >= maxMails) { fouten.push("dagbudget-op"); break; }
    if (!rij.email || !String(rij.email).includes("@") || !rij.unsubscribe_token) continue;
    const adres = String(rij.email).toLowerCase();
    const patch = (extra) => sb(
      `kwartiercheck_results?id=eq.${rij.id}`,
      { method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify(extra) },
      base, key
    );
    if (gezien.has(adres)) {
      // Oudere dubbel-rij stilleggen zodat die niet alsnog een eigen reeks start
      // (les uit de weekmail-bug van 7 jul: geskipte duplicaten bleven "due").
      try { await patch({ weekmail_sent: MAX_VERVOLG, weekmail_last_at: new Date().toISOString() }); } catch { /* volgende run */ }
      continue;
    }
    gezien.add(adres);

    const scores = rij.scores_json || {};
    const weekNr = (rij.weekmail_sent || 0) + 2; // resultaat-mail = week 1
    const gaps = bepaalGaps(scores).slice(0, 8);
    const items = gaps.slice((weekNr - 1) * 2, (weekNr - 1) * 2 + 2);
    if (!items.length) {
      // Plan is al klaar (weinig zwakke onderwerpen) — reeks netjes afsluiten.
      try { await patch({ weekmail_sent: MAX_VERVOLG, weekmail_last_at: new Date().toISOString() }); } catch { /* ok */ }
      continue;
    }

    const { onderwerp, html, text } = bouwWeekmail(rij, weekNr, items);
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: FROM, to: [rij.email], subject: onderwerp, html, text }),
      });
      if (!r.ok) { fouten.push("kc-" + String(rij.id).slice(0, 8) + ":" + r.status); continue; }
      await patch({ weekmail_sent: (rij.weekmail_sent || 0) + 1, weekmail_last_at: new Date().toISOString() });
      sent++;
    } catch (e) {
      fouten.push("kc-" + String(rij.id).slice(0, 8) + ":" + String(e).slice(0, 50));
    }
  }
  return { sent, fouten, reden: null };
}
