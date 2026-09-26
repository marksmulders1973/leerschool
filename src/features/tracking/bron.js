// 🧭 Bron-tracking (Mark 4 aug 2026): september is de echte nulmeting — dan
// komen de eerste "ik zoek hulp"-gezinnen binnen via zoekverkeer, partner-QR's
// en de Spark Fest-goodybags. Om kijkers van zoekers te kunnen scheiden leggen
// we bij het EERSTE bezoek van een apparaat vast waar het vandaan kwam
// (first touch, localStorage) en stempelen we dat eenmalig op het profiel
// zodra er een account ontstaat (profilesRepo.upsertProfile).
//
// Bron-labels (kolom profiles.signup_bron):
//   partner:CODE   — via partner-flyer/QR (?partner=)
//   vriend:CODE    — via vrienden-werven-link (?vriend=)
//   deel:BRON      — via een gedeelde link (utm_source, bv. 'trots')
//   zoek:google    — via een zoekmachine (referrer)
//   ai:chatgpt     — via een AI-chatbot (referrer)
//   social:facebook— via social (referrer)
//   pagina:NAAM    — via een eigen statische landingspagina (same-origin
//                    referrer, bv. pagina:doorstroomtoets-oefenen)
//   site:HOST      — via een andere externe site (backlink)
//   direct         — geen van bovenstaande (typen/bookmark/QR zonder code)

import { track } from "../../utils.js";

const KEY_BRON = "lk_bron";

const ls = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* */ } },
};

const ZOEKMACHINES = ["google.", "bing.com", "duckduckgo.com", "ecosia.org", "startpage.com", "search.yahoo", "search.brave"];
const AI_BOTS = ["chatgpt.com", "chat.openai.com", "perplexity.ai", "claude.ai", "gemini.google", "copilot.microsoft"];
const SOCIALS = ["facebook.com", "fb.me", "instagram.com", "threads.", "linkedin.com", "lnkd.in", "t.co", "twitter.com", "x.com", "whatsapp.com", "youtube.com", "pinterest."];

function schoonLabel(s) {
  return String(s || "").replace(/[^a-zA-Z0-9._-]/g, "").slice(0, 40);
}

// Bepaal het bron-label uit URL-params + referrer. Volgorde = zekerheid:
// een expliciete code in de URL wint altijd van een referrer-gok.
function bepaalBron(params, referrer) {
  const partner = (params.get("partner") || "").trim().toUpperCase();
  if (partner && /^[A-Z0-9-]{1,20}$/.test(partner)) return "partner:" + partner;
  const vriend = (params.get("vriend") || "").trim().toUpperCase();
  if (vriend && /^[A-Z0-9-]{1,20}$/.test(vriend)) return "vriend:" + vriend;
  const utm = (params.get("utm_source") || "").trim().toLowerCase();
  if (utm) return "deel:" + schoonLabel(utm);
  if (!referrer) return "direct";
  let host = "", path = "";
  try { const u = new URL(referrer); host = u.hostname.toLowerCase(); path = u.pathname; } catch { return "direct"; }
  if (host === window.location.hostname) {
    // Van een eigen statische pagina (bv. /doorstroomtoets-oefenen.html) de
    // app in geklikt — dat is het SEO-verkeer dat we willen zien groeien.
    const naam = schoonLabel(path.replace(/^\//, "").replace(/\.html$/, "")) || "home";
    return "pagina:" + naam;
  }
  if (ZOEKMACHINES.some((z) => host.includes(z))) return "zoek:" + schoonLabel(host.split(".").slice(-2)[0]);
  if (AI_BOTS.some((a) => host.includes(a))) return "ai:" + schoonLabel(host.split(".").slice(-2)[0]);
  if (SOCIALS.some((s) => host.includes(s))) return "social:" + schoonLabel(host.split(".").slice(-2)[0]);
  return "site:" + schoonLabel(host);
}

// Bij app-start aanroepen (main.jsx, vóór render). First touch wint: een
// apparaat dat al een bron heeft houdt die — de eerste kennismaking telt.
// Idee BI (26 sep 2026): bij het allereerste bezoek neemt de service worker de
// pagina over en herlaadt hem binnen ~0,5 s — precies dan ging bron_bezoek de
// deur uit en werd afgebroken, zonder tweede kans (KEY_BRON stond al). Nu krijgt
// een nieuw record `wacht: 1` tot de database het event bevestigt; staat dat er
// bij de volgende start nog, dan sturen we het opnieuw (max 3 pogingen).
// Oude records hebben geen `wacht` en worden dus nooit dubbel gemeld.
function meldBron(record) {
  const poging = (record.wacht || 0) + 1;
  if (poging > 3) return;
  ls.set(KEY_BRON, JSON.stringify({ ...record, wacht: poging }));
  Promise.resolve(track("bron_bezoek", { bron: record.bron, ...(poging > 1 ? { poging } : {}) }))
    .then((ok) => {
      if (!ok) return;
      const { wacht: _weg, ...rest } = record; // eslint-disable-line no-unused-vars
      ls.set(KEY_BRON, JSON.stringify(rest));
    })
    .catch(() => {});
}

export function vangBron() {
  try {
    const bestaand = ls.get(KEY_BRON);
    if (bestaand) {
      try { const r = JSON.parse(bestaand); if (r && r.wacht) meldBron(r); } catch { /* */ }
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const referrer = document.referrer || "";
    const bron = bepaalBron(params, referrer);
    const record = {
      bron,
      landing: (window.location.pathname || "/") + (window.location.search || ""),
      referrer: referrer.slice(0, 200),
      ts: new Date().toISOString(),
    };
    // Eenmalig event zodat óók anonieme bezoekers (geen account) per bron
    // telbaar zijn in het dagrapport. Vuurt bij de allereerste capture, en
    // opnieuw als die eerste poging niet aankwam (zie meldBron).
    meldBron(record);
  } catch { /* nooit de app-start breken */ }
}

// Voor profilesRepo: de vastgelegde bron van dit apparaat, of null.
export function getBron() {
  try {
    const raw = ls.get(KEY_BRON);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}
