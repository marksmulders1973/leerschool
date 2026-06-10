// ─── Analytics helper ────────────────────────────────────────────
// AVG-vriendelijk eerstepartij gebruiksstatistieken: events gaan naar onze
// EIGEN Supabase-tabel `events` — geen Google, geen cookies, geen
// persoonsgegevens. Privacy-by-design:
//  • cookieloze sessie-id (sessionStorage → weg bij tab sluiten, geen
//    cross-session/persoon-tracking; alleen om events binnen één bezoek te
//    groeperen voor funnels).
//  • PII-sleutels (email/naam/wachtwoord/adres) en lange vrije tekst worden
//    eruit gefilterd vóór opslaan.
//  • geen IP-kolom (slaan we niet op).
import supabase from "./supabase.js";

function _sessionId() {
  try {
    let s = sessionStorage.getItem("lk_s");
    if (!s) { s = Math.random().toString(36).slice(2) + Date.now().toString(36); sessionStorage.setItem("lk_s", s); }
    return s;
  } catch { return null; }
}

function _cleanProps(p) {
  if (!p || typeof p !== "object") return null;
  const out = {};
  for (const k of Object.keys(p)) {
    if (/e?mail|naam|name(?!_length)|wachtwoord|password|adres|telefoon/i.test(k)) continue; // PII-sleutels weg
    const v = p[k];
    if (typeof v === "string" && v.length > 60) continue; // geen lange vrije tekst loggen
    if (typeof v === "string" && /\S+@\S+\.\S+/.test(v)) continue; // e-mail als wáárde onder onschuldige sleutel
    out[k] = v;
  }
  return Object.keys(out).length ? out : null;
}

function _source() {
  try {
    const utm = new URLSearchParams(location.search).get("utm_source");
    if (utm) return utm.slice(0, 40);
    const host = document.referrer ? new URL(document.referrer).hostname.toLowerCase() : "";
    if (!host) return null;
    // Bekende bronnen samenvoegen — een referrer fragmenteert anders over
    // l.threads.com/threads.net, m/lm/www.facebook.com enz. Zo klopt de
    // bronnen-telling in het dagrapport (2026-06-05; threads toegevoegd).
    if (host.includes("threads")) return "threads";
    if (host.includes("instagram")) return "ig";
    if (host.includes("facebook") || host.includes("fb.")) return "fb";
    if (host.includes("chatgpt") || host.includes("openai")) return "chatgpt";
    if (host.includes("google.")) return "google";
    if (host.includes("leerkwartier")) return "leerkwartier.app"; // interne navigatie
    return host.slice(0, 60);
  } catch {}
  return null;
}

// Campagne-labels uit de URL (?bron=qr, ?pad=<id>, utm_*, ?ref=<code>). Zo worden
// QR-stickers, social-posts, leerpad-deeplinks én referral-links (deel & win)
// meetbaar in events.props (2026-06-05; ref toegevoegd voor de referral-loop).
function _campaignParams() {
  try {
    const sp = new URLSearchParams(location.search);
    const out = {};
    for (const k of ["bron", "pad", "utm_medium", "utm_campaign", "utm_source", "ref"]) {
      const v = sp.get(k);
      if (v) out[k] = v.slice(0, 60);
    }
    return out;
  } catch { return {}; }
}

// Interne-check-vlag (Mark 2026-06-06): de Claude-Chrome (of Mark zelf) opent de
// site één keer met ?ic=1 → die browser markeert zich als "intern" en telt dan
// NERGENS meer mee. track() vuurt niets af, dus er komen geen events → geen
// vervuiling van het dagrapport/bronnen door eigen check-bezoeken. ?ic=0 = weer aan.
// Persistent in localStorage zodat de markering blijft staan voor die browser.
export function isInternalVisit() {
  try {
    const v = new URLSearchParams(location.search).get("ic");
    if (v === "1") localStorage.setItem("lk_internal", "1");
    else if (v === "0") localStorage.removeItem("lk_internal");
    return localStorage.getItem("lk_internal") === "1";
  } catch { return false; }
}

export function track(event, params = {}) {
  // Interne check (Claude/Mark) telt nergens mee — geen GA, geen events-insert.
  if (isInternalVisit()) return;
  // (1) optioneel Google Analytics (alleen als gtag ooit geladen is — blijft onschuldig)
  try { window.gtag?.("event", event, params); } catch (e) {}
  // (2) eigen, anonieme eerstepartij-log in Supabase (fire-and-forget, blokkeert niets)
  try {
    supabase.from("events").insert({
      name: String(event).slice(0, 60),
      props: _cleanProps({ ..._campaignParams(), ...params }),
      path: typeof location !== "undefined" ? location.pathname.slice(0, 120) : null,
      source: _source(),
      session: _sessionId(),
    }).then(() => {}).catch(() => {});
  } catch (e) {}
}

// ─── Referral "deel & win" ───────────────────────────────────────
// Eigen, stabiele aanbreng-code per browser (geen PII — gewoon random).
// Pas aangemaakt zodra iemand wil delen. Gebruikt in de deel-link
// leerkwartier.app/?ref=<code> en bij waitlist-attributie.
export function getMyRefCode() {
  try {
    let c = localStorage.getItem("lk_ref_code");
    if (!c) {
      c = "r" + Math.random().toString(36).slice(2, 9);
      localStorage.setItem("lk_ref_code", c);
    }
    return c;
  } catch { return "r0000000"; }
}
// De ?ref=<code> van een binnenkomende bezoeker (de aanbrenger). Onthouden in
// sessionStorage zodat het ook bij een latere aanmelding op een andere pagina
// nog beschikbaar is.
export function getIncomingRef() {
  try {
    const fromUrl = new URLSearchParams(location.search).get("ref");
    if (fromUrl) { try { sessionStorage.setItem("lk_incoming_ref", fromUrl); } catch {} return fromUrl.slice(0, 40); }
    return (sessionStorage.getItem("lk_incoming_ref") || null);
  } catch { return null; }
}

// ─── Sound Engine ────────────────────────────────────────────────
export const SoundEngine = {
  ctx: null,
  getCtx() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  },
  play(type) {
    try {
      const ctx = this.getCtx(), now = ctx.currentTime;
      const make = (freq, t, dur, vol = 0.12, wave = "sine") => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination); o.type = wave; o.frequency.value = freq;
        g.gain.setValueAtTime(vol, now + t); g.gain.exponentialRampToValueAtTime(0.001, now + t + dur);
        o.start(now + t); o.stop(now + t + dur + 0.01);
      };
      if (type === "correct") [523,659,784].forEach((f,i) => make(f, i*0.1, 0.3, 0.15));
      else if (type === "wrong") { const o=ctx.createOscillator(),g=ctx.createGain(); o.connect(g);g.connect(ctx.destination);o.type="sawtooth";o.frequency.setValueAtTime(300,now);o.frequency.exponentialRampToValueAtTime(150,now+0.3);g.gain.setValueAtTime(0.1,now);g.gain.exponentialRampToValueAtTime(0.001,now+0.3);o.start(now);o.stop(now+0.35); }
      else if (type === "celebrate") [523,587,659,698,784,880,988,1047].forEach((f,i) => make(f, i*0.08, 0.25));
      else if (type === "countdown") make(600, 0, 0.15, 0.08);
      else if (type === "click") make(1200, 0, 0.03, 0.06);
    } catch(e) {}
  }
};

// ─── AI Question Generator ──────────────────────────────────────
export async function fetchAIQuestions(subject, level, count = 5, textbook = null, topic = null, signal = null) {
  const res = await fetch("/api/generate-questions", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subject, level, count, textbook, topic }),
    signal,
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Server fout (${res.status})`);
  }
  const data = await res.json();
  if (!data.questions || data.questions.length === 0) throw new Error("Geen vragen ontvangen van de AI");
  return data.questions;
}

// ─── Utility functions ───────────────────────────────────────────
export const generateCode = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

export const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const formatDate = (d) => {
  const date = new Date(d);
  const days = ["zo", "ma", "di", "wo", "do", "vr", "za"];
  const months = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
};

export const daysUntil = (d) => {
  const now = new Date();
  const target = new Date(d);
  return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
};
