// Doorstroomtoets-aftelreeks — begeleidt ouders door het toetsseizoen (sep→feb).
// Overgenomen tactiek van Squla/Junior Einstein: 6 seizoensmails op de momenten
// dat een groep-8-ouder er het meest mee bezig is. Heeft GEEN ouder-kind-koppeling
// nodig — gaat naar de hele lesmateriaal-lijst. Mikt op de jan-feb-piek.
//
// KLAAR-MAAR-DORMANT: zonder RESEND_API_KEY doet dit niets. En buiten het seizoen
// (sep t/m feb) stuurt het niets. In juni dus een no-op — bewust.
//
// Tracking: kolommen `doorstroom_step` (welke fase de ontvanger gehad heeft) en
// `doorstroom_last_at` op upgrade_waitlist. Iedereen krijgt de HUIDIGE fase-mail
// (oudere gemiste fases worden overgeslagen, geen replay van verouderde content).
//
// Auth: ?key=<CRON_SECRET> of Bearer. Test-modus: ?key=...&test=<email>&step=<1-6>
// stuurt die ene fase direct naar dat adres (negeert seizoen/tracking) — voor
// renderingscheck. Auto-run via dagelijkse cron volgt vóór september (Hobby = max
// 2 crons, nu al vol).

import { mailTaglineHtml } from "./_lib/mail-tagline.js";

const SITE = "https://leerkwartier.app";

// De 6 fases. `from` = [maand, dag]: niet vóór deze datum versturen (jaar-agnostisch).
// Maanden 9-12 vallen in seizoensjaar Y, maanden 1-2 in Y+1.
const FASES = [
  {
    n: 1, from: [9, 15],
    onderwerp: "Hoe werkt de Doorstroomtoets? Alles op een rij 🎓",
    kop: "De Doorstroomtoets — zo zit het",
    intro: "Groep 8 is begonnen, en daarmee komt de Doorstroomtoets in beeld (begin februari). Geen stress: in deze serie loodsen we je er rustig doorheen. Vandaag de basis — wat is het, en wat betekent het voor je kind?",
    punten: [
      "De toets meet rekenen, taal en studievaardigheden.",
      "Het schooladvies komt eerst (januari), de toets daarna (februari).",
      "Een kwartier per dag oefenen werkt aantoonbaar beter dan af en toe lang.",
    ],
    cta: "Begin met een gratis oefenkwartiertje",
  },
  {
    n: 2, from: [10, 25],
    onderwerp: "Nog ~100 dagen: zo bouw je een oefenroutine op ⏳",
    kop: "Een routine van een kwartier",
    intro: "De toets is over ongeveer 100 dagen. Het geheim is niet hard blokken, maar een klein, vast moment per dag. 15 minuten — een leerkwartier — is genoeg.",
    punten: [
      "Kies een vast moment (bijv. na het avondeten).",
      "Eén onderdeel per keer: rekenen, taal óf studievaardigheden.",
      "Bespreek samen één foute vraag — begrijpen gaat boven goed raden.",
    ],
    cta: "Doe de oefenvraag van vandaag",
  },
  {
    n: 3, from: [11, 20],
    onderwerp: "Schooladvies in januari — wat kun je nú doen? 🧭",
    kop: "Op weg naar het schooladvies",
    intro: "In januari geeft de school het voorlopig schooladvies. De Doorstroomtoets kan dat advies daarna nog naar boven bijstellen. Dit is hét moment om je kind rustig vertrouwen op te laten bouwen.",
    punten: [
      "Oefen vooral de onderdelen die je kind lastig vindt.",
      "Bij Leerkwartier opent bij elke fout een uitleg op 3 niveaus.",
      "Vier kleine vooruitgang — motivatie is de helft van het werk.",
    ],
    cta: "Oefen gericht per onderdeel",
  },
  {
    n: 4, from: [12, 20],
    onderwerp: "Kerstvakantie = gouden oefentijd (15 min/dag) 🎄",
    kop: "Rustig dooroefenen in de vakantie",
    intro: "De kerstvakantie is ideaal: even geen schooldruk, wél tijd voor een ontspannen kwartiertje per dag. Niet om te stampen, maar om het ritme vast te houden tot de toets.",
    punten: [
      "Houd het licht: één kwartier, daarna klaar.",
      "Wissel af zodat het leuk blijft.",
      "Een gratis oefentoets geeft een mooi tussenbeeld van waar je kind staat.",
    ],
    cta: "Doe een gratis oefentoets",
  },
  {
    n: 5, from: [1, 15],
    onderwerp: "Nog een paar weken: de meestgemaakte fouten 🎯",
    kop: "De laatste loodjes",
    intro: "De toets komt eraan. In deze fase helpt het om gericht de valkuilen te oefenen — de fouten die kinderen het vaakst maken. Een paar gerichte kwartiertjes maken nu het verschil.",
    punten: [
      "Lees bij rekenen de vraag twee keer — let op eenheden (€, %, cm).",
      "Bij begrijpend lezen: eerst de vraag, dán de tekst.",
      "Studievaardigheden: oefen het lezen van tabellen, grafieken en kaarten.",
    ],
    cta: "Oefen de lastige vragen",
  },
  {
    n: 6, from: [2, 10],
    onderwerp: "De toets is gedaan — en nu? 🌱",
    kop: "Toets gemaakt. Goed gedaan!",
    intro: "De Doorstroomtoets zit erop — knap dat jullie dit samen hebben gedaan. De uitslag volgt en kan het schooladvies nog naar boven bijstellen. En leren stopt natuurlijk niet bij de toets.",
    punten: [
      "De uitslag komt meestal in maart; het advies kan omhoog worden bijgesteld.",
      "Blijf in een rustig tempo oefenen — fijn voor de start op de middelbare school.",
      "Leerkwartier blijft gewoon gratis te gebruiken.",
    ],
    cta: "Blijf oefenen in je eigen tempo",
  },
];

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

// Welke fase is op 'today' de huidige (hoogste waarvan de datum is gepasseerd in
// dit seizoen)? 0 = buiten seizoen / nog niets due.
function huidigeFase(today) {
  const m = today.getMonth() + 1; // 1-12
  // Seizoen loopt sep (9) t/m feb (2). Daarbuiten: niets.
  if (!(m >= 9 || m <= 2)) return 0;
  const seizoenStartJaar = m >= 9 ? today.getFullYear() : today.getFullYear() - 1;
  let huidig = 0;
  for (const f of FASES) {
    const [fm, fd] = f.from;
    const jaar = fm >= 9 ? seizoenStartJaar : seizoenStartJaar + 1;
    const triggerData = new Date(jaar, fm - 1, fd, 0, 0, 0);
    if (today >= triggerData) huidig = f.n;
  }
  return huidig;
}

function maakMail(rij, fase) {
  const naam = esc(rij.kind_voornaam) || "";
  const hoi = naam ? `Hoi ${naam}-ouder,` : "Hoi,";
  const ref = encodeURIComponent(rij.unsubscribe_token || "");
  const utm = `utm_source=email&utm_campaign=doorstroom-aftelreeks&utm_content=fase${fase.n}`;
  const oefen = `${SITE}/vandaag?${utm}`;
  const toets = `${SITE}/doorstroomtoets-oefentoets?${utm}`;
  const uit = `${SITE}/api/unsubscribe?token=${ref}`;
  const link = fase.n === 4 ? toets : oefen;

  const puntenHtml = fase.punten
    .map((p) => `<li style="margin:0 0 8px;">${esc(p)}</li>`)
    .join("");

  const html = `<!doctype html><html lang="nl"><body style="margin:0;background:#0a0f1e;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e8edf5;">
  <div style="max-width:520px;margin:0 auto;padding:28px 22px;">
    <div style="font-size:22px;font-weight:800;color:#fff;margin-bottom:6px;">Leerkwartier</div>
    <div style="font-size:13px;color:#69f0ae;font-weight:700;margin-bottom:20px;">Een kwartier per dag leren, een leven lang slimmer.</div>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 14px;">${hoi}</p>
    <div style="font-size:18px;font-weight:800;color:#fff;margin:0 0 10px;">${esc(fase.kop)}</div>
    <p style="font-size:15px;line-height:1.6;color:#cdd6e5;margin:0 0 16px;">${esc(fase.intro)}</p>
    <ul style="font-size:15px;line-height:1.5;color:#cdd6e5;padding-left:20px;margin:0 0 22px;">${puntenHtml}</ul>
    <a href="${link}" style="display:block;text-align:center;background:linear-gradient(135deg,#00C853,#00a846);color:#fff;text-decoration:none;font-weight:800;font-size:16px;padding:14px;border-radius:12px;margin-bottom:24px;">${esc(fase.cta)} →</a>
    ${mailTaglineHtml()}
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:0 0 4px;">Je krijgt deze mail omdat je je aanmeldde voor gratis lesmateriaal op leerkwartier.app.</p>
    <p style="font-size:12px;line-height:1.6;color:#7d8aa0;margin:0;">Geen mail meer? <a href="${uit}" style="color:#9fb0c6;">Uitschrijven</a> — direct geregeld.</p>
  </div></body></html>`;

  const text = `${hoi}\n\n${fase.kop}\n\n${fase.intro}\n\n- ${fase.punten.join("\n- ")}\n\n${fase.cta}: ${link}\n\nUitschrijven: ${uit}\nLeerkwartier — een kwartier per dag leren, een leven lang slimmer.`;

  return { onderwerp: fase.onderwerp, html, text };
}

async function verstuur(rij, fase, RESEND, FROM) {
  const { onderwerp, html, text } = maakMail(rij, fase);
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [rij.email], subject: onderwerp, html, text }),
  });
  return r.ok;
}

// Herbruikbare kern: stuurt de huidige-fase-mail naar wie 'm nog niet had.
// Aangeroepen door (a) de losse handler hieronder en (b) de dagelijkse
// weekmail-cron (send-weekly-lesmateriaal.js), zodat er geen eigen cron-slot
// nodig is (Vercel Hobby = max 2 crons). No-op buiten seizoen (sep–feb).
// maxMails (F7, 2 sep 2026): gedeeld Resend-dagbudget; rest blijft op dezelfde
// doorstroom_step staan en gaat de volgende dag mee (reeks is idempotent).
export async function stuurDoorstroomCountdown({ base, key, RESEND, FROM, maxMails = null }) {
  if (!RESEND) return { sent: 0, reden: "resend-uit" };
  const today = new Date();
  const fase = huidigeFase(today);
  if (fase === 0) return { sent: 0, fase: 0, reden: "buiten-seizoen" };
  const faseDef = FASES[fase - 1];

  // Ontvangers: lesmateriaal-lijst, niet uitgeschreven, nog niet bij deze fase.
  const filter =
    `plan=in.(gratis-lesmateriaal,oefenpakket,leesladder,redactiebladen)` +
    `&unsubscribed_at=is.null` +
    `&confirmed_at=not.is.null` + // F15: alleen wie de reeks zelf bevestigde
    `&doorstroom_step=lt.${fase}` +
    `&select=id,email,kind_voornaam,unsubscribe_token,doorstroom_step` +
    `&order=doorstroom_step.asc&limit=90`;

  let rijen;
  try {
    const q = await sb(`upgrade_waitlist?${filter}`, { method: "GET" }, base, key);
    rijen = await q.json();
    if (!Array.isArray(rijen)) throw new Error("lijst-leesfout: " + JSON.stringify(rijen).slice(0, 200));
  } catch (e) {
    return { sent: 0, fase, fouten: [], reden: "lijst-lezen-fout: " + String(e).slice(0, 80) };
  }
  if (rijen.length === 0) return { sent: 0, fase, kandidaten: 0, reden: "niemand-due" };

  let gelukt = 0;
  const fouten = [];
  for (const rij of rijen) {
    if (maxMails != null && gelukt >= maxMails) { fouten.push("dagbudget-op"); break; }
    if (!rij.email || !String(rij.email).includes("@")) continue;
    try {
      const ok = await verstuur(rij, faseDef, RESEND, FROM);
      if (!ok) { fouten.push(String(rij.id).slice(0, 8)); continue; }
      await sb(
        `upgrade_waitlist?id=eq.${rij.id}`,
        {
          method: "PATCH",
          headers: { Prefer: "return=minimal" },
          body: JSON.stringify({ doorstroom_step: fase, doorstroom_last_at: new Date().toISOString() }),
        },
        base, key
      );
      gelukt++;
    } catch (e) {
      fouten.push(String(rij.id).slice(0, 8) + ":" + String(e).slice(0, 50));
    }
  }

  return { sent: gelukt, fase, kandidaten: rijen.length, fouten };
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

  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) return res.status(500).json({ error: "supabase-config-missing" });

  const RESEND = process.env.RESEND_API_KEY;
  const FROM = process.env.EMAIL_FROM || "Leerkwartier <hallo@leerkwartier.app>";
  if (!RESEND) return res.status(200).json({ ok: true, sent: 0, reason: "resend-uit" });

  // Test-modus: stuur één fase direct naar een opgegeven adres (rendering-check).
  const testEmail = req.query && req.query.test;
  if (testEmail) {
    const stap = Math.min(6, Math.max(1, parseInt((req.query && req.query.step) || "1", 10)));
    const fase = FASES[stap - 1];
    try {
      const ok = await verstuur({ email: testEmail, kind_voornaam: "", unsubscribe_token: "" }, fase, RESEND, FROM);
      return res.status(200).json({ ok, test: testEmail, fase: stap, onderwerp: fase.onderwerp });
    } catch (e) {
      return res.status(500).json({ error: "test-fout", detail: String(e).slice(0, 200) });
    }
  }

  const result = await stuurDoorstroomCountdown({ base, key, RESEND, FROM });
  if (Array.isArray(result.fouten)) result.fouten = result.fouten.slice(0, 10);
  return res.status(200).json({ ok: true, ...result });
}
