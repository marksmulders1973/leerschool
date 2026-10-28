// 🔤 Klank-laag voor het voorlezen (28 okt 2026).
// Aanleiding: CSG De Waard (nieuwkomersonderwijs) testte het pakket in de klas: "met klanken worden
// de letters uit het ABC gebruikt i.p.v. de klanken die wij de leerlingen aanleren (de 'tee' i.p.v.
// de t)". De browserstem leest een losse letter als lettertitel. Nieuwkomers leren klankzuiver:
// t = /t/, m = /mmm/. Deze laag haalt losse klanken uit de tekst en speelt daarvoor een echte
// opname af (public/audio/klanken/<klank>.mp3, gekozen/ingesproken door Mark via
// scripts/klanken/kies-server.mjs). Geen opname? Dan een schijn-spelling via de stem ("mmm", "tə"):
// nog steeds beter dan "em" en "tee".
//
// De laag staat alleen AAN in klankzuivere schermen (pad `klankzuiver: true`, trede-test, herhalen):
// elders zijn losse letters vaak iets anders (u = beleefd jij, x = keer, A4, optie B).
import KLANK_BESTANDEN from "./klankenManifest.js";
import { spreekMetMeelezen } from "./spraakTekst.js";

// Klanken zoals in de klas (Veilig leren lezen / NT2): klinkers kort en lang, tweetekenklanken,
// medeklinkers en de vaste combinaties.
export const KLANKEN = [
  "a", "e", "i", "o", "u", "aa", "ee", "oo", "uu",
  "ie", "oe", "eu", "ui", "ei", "ij", "au", "ou",
  "b", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "z",
  "ch", "ng", "nk", "sch",
];
const KLANK_SET = new Set(KLANKEN);

// Schijn-spelling voor de browserstem als er (nog) geen opname is. Stop-klanken met een sjwa,
// rek-klanken verlengd. Beste gok; de opnames hebben altijd voorrang.
export const SCHIJN = {
  a: "ah", e: "eh", i: "ih", o: "oh", u: "uh", aa: "aa", ee: "ee", oo: "oo", uu: "uu",
  ie: "ie", oe: "oe", eu: "eu", ui: "ui", ei: "ei", ij: "ei", au: "au", ou: "au",
  b: "bə", d: "də", f: "fff", g: "ggg", h: "hhh", j: "jjj", k: "kə", l: "lll", m: "mmm", n: "nnn",
  p: "pə", r: "rrr", s: "sss", t: "tə", v: "vvv", w: "www", z: "zzz",
  ch: "chchch", ng: "ngng", nk: "nk", sch: "sch",
};

// ── Stand ────────────────────────────────────────────────────────────────
let klankStand = false;
export function zetKlankStand(aan) {
  klankStand = !!aan;
  if (klankStand) laadKlanken();
}
export function klankStandAan() { return klankStand; }

// ── Opnames ──────────────────────────────────────────────────────────────
const cache = {};
function audioVoor(klank) {
  const bestand = KLANK_BESTANDEN[klank];
  if (!bestand || typeof Audio === "undefined") return null;
  let a = cache[klank];
  if (!a) { a = new Audio(`/audio/klanken/${bestand}`); a.preload = "auto"; cache[klank] = a; }
  return a;
}
export function laadKlanken() {
  try { Object.keys(KLANK_BESTANDEN).forEach(audioVoor); } catch { /* */ }
}
export function heeftOpname(klank) { return !!KLANK_BESTANDEN[klank]; }

/** Speel één klank. Opname als die er is, anders de schijn-spelling via de stem. Geeft stop-functie. */
export function speelKlank(klank, { rate = 1, onEnd } = {}) {
  const a = audioVoor(klank);
  const viaStem = () => spreekMetMeelezen(SCHIJN[klank] || klank, { rate: Math.min(rate, 0.85), pitch: 1, onEnd: (ok) => onEnd && onEnd(ok) });
  if (!a) return viaStem();
  let klaar = false;
  const done = (ok) => { if (klaar) return; klaar = true; a.onended = null; a.onerror = null; onEnd && onEnd(ok); };
  let stopStem = null;
  try {
    a.pause(); a.currentTime = 0; a.playbackRate = 1;
    a.onended = () => done(true);
    a.onerror = () => { if (!klaar) { klaar = true; stopStem = viaStem(); } };
    const p = a.play();
    if (p && p.catch) p.catch(() => { if (!klaar) { klaar = true; stopStem = viaStem(); } });
  } catch { if (!klaar) { klaar = true; stopStem = viaStem(); } }
  return () => { klaar = true; a.onended = null; a.onerror = null; try { a.pause(); } catch { /* */ } if (stopStem) stopStem(); };
}

// ── Tekst in stukken: gewone tekst vs. losse klanken ─────────────────────
const QUOTES_VOOR = /^['"‘’“”„«(\[]+/;
const QUOTES_NA = /['"‘’“”»)\].,:;!?]+$/;
function kern(tok) { return tok.replace(QUOTES_VOOR, "").replace(QUOTES_NA, ""); }
function isStreep(tok) { return /^[-–—]$/.test(tok); }
function alsKlank(k) { const l = k.toLowerCase(); return KLANK_SET.has(l) ? l : null; }

/**
 * Deelt tekst op in segmenten: { type: "tekst", tekst, woordVan } en { type: "klank", klank, woordIdx }.
 * woordIdx telt elk niet-witruimte-token (zelfde telling als maakMeeleesPlan in spraakTekst.js),
 * zodat het meelezen blijft kloppen. Klank-tokens: een los token dat een klank is ("m", "'k'", "t."),
 * en hak-reeksen "t - a - s" of "k-a-t" (de streepjes vallen weg, elke klank klinkt apart).
 */
export function splitsKlanken(tekst) {
  const ruw = String(tekst ?? "").split(/(\s+)/).filter(Boolean);
  const tokens = [];
  let idx = -1;
  for (const t of ruw) {
    if (/^\s+$/.test(t)) { tokens.push({ t, ws: true }); continue; }
    idx += 1;
    const k = kern(t);
    const delen = k.split(/[-–]/);
    const reeks = delen.length > 1 && delen.every((d) => alsKlank(d));
    tokens.push({ t, ws: false, idx, kern: k, klank: reeks ? null : alsKlank(k), reeks: reeks ? delen.map(alsKlank) : null, streep: isStreep(k) });
  }
  // Streepjes tussen twee klanken ("t - a - s") horen bij de reeks en vallen weg.
  const vorigeWoord = (i) => { for (let j = i - 1; j >= 0; j--) if (!tokens[j].ws) return tokens[j]; return null; };
  const volgendeWoord = (i) => { for (let j = i + 1; j < tokens.length; j++) if (!tokens[j].ws) return tokens[j]; return null; };
  tokens.forEach((tok, i) => {
    if (!tok.ws && tok.streep) {
      const a = vorigeWoord(i), b = volgendeWoord(i);
      if (a && b && (a.klank || a.reeks) && (b.klank || b.reeks)) tok.weg = true;
    }
  });
  const segs = [];
  let buf = [], bufVan = -1;
  const spoel = () => {
    if (!buf.length) return;
    const s = buf.join("").trim();
    if (/[\p{L}\p{N}]/u.test(s)) segs.push({ type: "tekst", tekst: s, woordVan: bufVan });
    buf = []; bufVan = -1;
  };
  for (const tok of tokens) {
    if (tok.ws) { if (buf.length) buf.push(tok.t); continue; }
    if (tok.weg) continue;
    if (tok.klank) { spoel(); segs.push({ type: "klank", klank: tok.klank, woordIdx: tok.idx }); continue; }
    if (tok.reeks) { spoel(); tok.reeks.forEach((k) => segs.push({ type: "klank", klank: k, woordIdx: tok.idx })); continue; }
    if (!buf.length) bufVan = tok.idx;
    buf.push(tok.t);
  }
  spoel();
  return segs;
}

export function bevatKlanken(tekst) { return splitsKlanken(tekst).some((s) => s.type === "klank"); }

/**
 * Voorlezen met klanken: tekst via de stem, losse klanken via opname. Zelfde interface als
 * spreekMetMeelezen (onStart/onEnd/onWoord, geeft stop-functie). Zonder klanken in de tekst →
 * gewoon spreekMetMeelezen.
 */
export function spreekMetKlanken(tekst, { rate = 1, pitch = 1, onStart, onEnd, onWoord } = {}) {
  const segs = splitsKlanken(tekst);
  if (!segs.some((s) => s.type === "klank")) return spreekMetMeelezen(tekst, { rate, pitch, onStart, onEnd, onWoord });
  let gestopt = false, gestart = false, timer = null, stopHuidig = null;
  const start = () => { if (!gestart) { gestart = true; onStart && onStart(); } };
  const klaar = (ok) => { if (gestopt) return; gestopt = true; onEnd && onEnd(ok); };
  const later = (ms, f) => { timer = setTimeout(() => { if (!gestopt) f(); }, ms); };
  const stap = (i) => {
    if (gestopt) return;
    if (i >= segs.length) return klaar(true);
    const s = segs[i];
    const volgende = segs[i + 1];
    if (s.type === "klank") {
      start();
      onWoord && onWoord(s.woordIdx);
      // korte adem tussen twee klanken (hakken), iets langer vóór gewone tekst
      const pauze = volgende ? (volgende.type === "klank" ? 260 : 200) : 0;
      stopHuidig = speelKlank(s.klank, { rate, onEnd: () => later(pauze, () => stap(i + 1)) });
    } else {
      stopHuidig = spreekMetMeelezen(s.tekst, {
        rate, pitch, onStart: start,
        onWoord: onWoord ? (j) => onWoord(s.woordVan + j) : undefined,
        onEnd: () => later(volgende ? 140 : 0, () => stap(i + 1)),
      });
    }
  };
  stap(0);
  return () => { gestopt = true; if (timer) clearTimeout(timer); if (stopHuidig) { try { stopHuidig(); } catch { /* */ } } };
}

/** Kies vanzelf: klank-laag als de stand aanstaat, anders de gewone stem. */
export function spreek(tekst, opties) {
  return klankStand ? spreekMetKlanken(tekst, opties) : spreekMetMeelezen(tekst, opties);
}
