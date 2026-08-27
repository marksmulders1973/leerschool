// 🔊 Park-sfeergeluid — volledig synthetisch via de Web Audio API (Mark 27 aug).
// Geen mp3's, geen laadtijd, geen rechtenkwestie: vogels, wind, trein en raket
// worden nagebootst met oscillators + gefilterde ruis. Drie lagen:
//   1. Achtergrond (altijd zacht aan): gefilterde ruis als wind — de "lijm".
//   2. Sfeer (willekeurig): vogeltjes elke 10-25 s, 2-4 piepjes, links/rechts
//      gepand; de wachttijd zelf is de minimum-stilte (nooit twee vlak na elkaar).
//   3. Gebeurtenissen (getriggerd): raket-lancering (klunk → zwellende ruis met
//      stijgende toonhoogte → ver-weg-zweven → rem-vlam bij de landing) en de
//      rijdende trein (rommel + klak-klak, volume op afstand, doppler, fluit).
// Browsers blokkeren audio tot de eerste aanraking → parkAudioStart() wordt pas
// aangeroepen vanuit een pointerdown in ZookwartierGame. De bestaande 🔊-knop in
// de HUD (parkgids) mute nu álles via parkAudioStil().

const S = {
  ctx: null,
  master: null,
  gestart: false,
  stil: false,
  vogelTimer: null,
  tikTimer: null,
  trein: null,        // { bron, filter, gain, doelVol, laatsteUpdate, laatsteFluit }
  raketTot: 0,        // audio-tijd tot wanneer de raket-geluiden lopen
};

function clamp01(v) { return Math.max(0, Math.min(1, v)); }

// Eén herbruikbare witte-ruis-buffer (2 s, geloopt).
let ruisBuf = null;
function ruis(ctx) {
  if (ruisBuf) return ruisBuf;
  const len = ctx.sampleRate * 2;
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  ruisBuf = buf;
  return buf;
}

// Panner met fallback: oude Safari's kennen createStereoPanner niet.
function pan(ctx, waarde) {
  if (ctx.createStereoPanner) {
    const p = ctx.createStereoPanner();
    p.pan.value = waarde;
    return p;
  }
  return ctx.createGain(); // geen pan, wel doorgeven
}

/* ---------- laag 1: wind ---------- */
function startWind() {
  const ctx = S.ctx;
  const bron = ctx.createBufferSource();
  bron.buffer = ruis(ctx);
  bron.loop = true;
  bron.playbackRate.value = 0.55;
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 380;
  const gain = ctx.createGain();
  gain.gain.value = 0.05;
  // langzaam aanzwellen/wegzakken zodat het ademt als wind door bomen
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.07;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.025;
  lfo.connect(lfoGain).connect(gain.gain);
  bron.connect(filter).connect(gain).connect(S.master);
  bron.start();
  lfo.start();
}

/* ---------- laag 2: vogels ---------- */
function zingVogel() {
  const ctx = S.ctx;
  if (!ctx || S.stil || S.vogelsStil) return;
  const t0 = ctx.currentTime + 0.05;
  const n = 2 + Math.floor(Math.random() * 3); // 2-4 piepjes
  const p = pan(ctx, (Math.random() * 2 - 1) * 0.8); // hele burst uit één hoek
  p.connect(S.master);
  for (let i = 0; i < n; i++) {
    const start = t0 + i * (0.18 + Math.random() * 0.15);
    const duur = 0.08 + Math.random() * 0.1;
    const f0 = 2200 + Math.random() * 1800;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(f0, start);
    osc.frequency.exponentialRampToValueAtTime(f0 * (0.8 + Math.random() * 0.45), start + duur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(0.05, start + 0.015); // zacht (Mark 27 aug: "ik hoor steeds die vogel")
    g.gain.exponentialRampToValueAtTime(0.001, start + duur);
    osc.connect(g).connect(p);
    osc.start(start);
    osc.stop(start + duur + 0.05);
  }
}
function planVogel() {
  // de wachttijd (≥25 s) is meteen de minimum-stilte tussen twee vogels
  // (was 10-25 s — te vaak, Mark 27 aug)
  const wacht = 25000 + Math.random() * 25000;
  S.vogelTimer = setTimeout(() => { zingVogel(); planVogel(); }, wacht);
}

// Vogels tijdelijk stil (bv. tijdens het arena-gevecht — dan wil je klangs en
// publiek horen, geen gepiep er doorheen).
export function parkAudioVogels(stil) { S.vogelsStil = !!stil; }

/* ---------- laag 3a: trein ---------- */
function maakTrein() {
  const ctx = S.ctx;
  const bron = ctx.createBufferSource();
  bron.buffer = ruis(ctx);
  bron.loop = true;
  bron.playbackRate.value = 0.7;
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 150;
  const gain = ctx.createGain();
  gain.gain.value = 0;
  bron.connect(filter).connect(gain).connect(S.master);
  bron.start();
  S.trein = { bron, filter, gain, doelVol: 0, laatsteUpdate: 0, laatsteFluit: 0 };
  // klak-klak: korte tikjes op een vast ritme, alleen hoorbaar als de trein dichtbij is
  S.tikTimer = setInterval(() => {
    if (!S.ctx || S.stil || !S.trein || S.trein.doelVol < 0.03) return;
    const t = S.ctx.currentTime;
    for (const [offset, sterk] of [[0, 1], [0.14, 0.6]]) { // dubbele klak zoals echte wielstellen
      const tik = S.ctx.createBufferSource();
      tik.buffer = ruis(S.ctx);
      const bp = S.ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 850;
      bp.Q.value = 6;
      const g = S.ctx.createGain();
      g.gain.setValueAtTime(S.trein.doelVol * 0.5 * sterk, t + offset);
      g.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.05);
      tik.connect(bp).connect(g).connect(S.master);
      tik.start(t + offset);
      tik.stop(t + offset + 0.07);
    }
  }, 560);
}
function treinFluit() {
  const ctx = S.ctx;
  const t = ctx.currentTime;
  for (const f of [620, 930]) { // twee-tonige stoomfluit
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = f;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.07, t + 0.06);
    g.gain.setValueAtTime(0.07, t + 0.45);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.7);
    osc.connect(g).connect(S.master);
    osc.start(t);
    osc.stop(t + 0.75);
  }
}

// Elke frame aangeroepen vanuit RouteTrain (kop-wagon); intern begrensd tot ~10×/s.
// d = afstand kop→camera in wereld-units; naderend = komt hij dichterbij?
export function parkAudioTrein(d, naderend) {
  if (!S.gestart || S.stil || !S.ctx) return;
  const nu = S.ctx.currentTime;
  if (!S.trein) maakTrein();
  const tr = S.trein;
  if (nu - tr.laatsteUpdate < 0.1) return;
  tr.laatsteUpdate = nu;
  const vol = clamp01(1 - d / 28);
  tr.doelVol = vol;
  tr.gain.gain.linearRampToValueAtTime(vol * 0.3, nu + 0.15);
  // doppler: iets hoger als hij nadert, iets lager als hij wegrijdt
  tr.bron.playbackRate.linearRampToValueAtTime(naderend ? 0.78 : 0.64, nu + 0.4);
  if (d < 9 && naderend && nu - tr.laatsteFluit > 25) {
    tr.laatsteFluit = nu;
    treinFluit();
  }
}

/* ---------- laag 3b: raket ---------- */
// Plant de audio voor de héle vlucht in één keer — de vluchttijden in
// ParkLeerobjecten.Raket zijn vaste constanten (STIJG 1.5 · TOP 7.5 · ZWEEF 11 ·
// DAAL 18 s), dus de geluidscurve kan vooruit worden geautomatiseerd.
export function parkAudioRaket() {
  if (!S.gestart || S.stil || !S.ctx) return;
  const ctx = S.ctx;
  const t = ctx.currentTime;
  if (t < S.raketTot) return; // vorige vlucht loopt nog
  S.raketTot = t + 19;
  // klunk bij de ontsteking
  const klunk = ctx.createOscillator();
  klunk.type = "sine";
  klunk.frequency.setValueAtTime(95, t);
  klunk.frequency.exponentialRampToValueAtTime(38, t + 0.18);
  const kg = ctx.createGain();
  kg.gain.setValueAtTime(0.35, t);
  kg.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
  klunk.connect(kg).connect(S.master);
  klunk.start(t);
  klunk.stop(t + 0.3);
  // de raket-brul: één ruisbron, toonhoogte + volume volgen de vluchtfases
  const bron = ctx.createBufferSource();
  bron.buffer = ruis(ctx);
  bron.loop = true;
  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.Q.value = 0.8;
  bp.frequency.setValueAtTime(160, t);
  bp.frequency.linearRampToValueAtTime(320, t + 1.5);   // trillen op het platform
  bp.frequency.linearRampToValueAtTime(900, t + 7.5);   // stijgen: toonhoogte omhoog
  bp.frequency.linearRampToValueAtTime(500, t + 11);    // ver weg in "de ruimte"
  bp.frequency.linearRampToValueAtTime(280, t + 17.8);  // dalen: toonhoogte omlaag
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.001, t);
  g.gain.linearRampToValueAtTime(0.3, t + 0.4);         // ontsteking
  g.gain.linearRampToValueAtTime(0.45, t + 2.5);        // vol vermogen
  g.gain.linearRampToValueAtTime(0.12, t + 7.5);        // hoog = verder weg
  g.gain.linearRampToValueAtTime(0.04, t + 11);         // zweven, bijna stil
  g.gain.linearRampToValueAtTime(0.04, t + 14.5);
  g.gain.linearRampToValueAtTime(0.28, t + 16.5);       // rem-vlam dichterbij
  g.gain.linearRampToValueAtTime(0.2, t + 17.9);
  g.gain.linearRampToValueAtTime(0.001, t + 18.4);      // touchdown → stil
  bron.connect(bp).connect(g).connect(S.master);
  bron.start(t);
  bron.stop(t + 18.6);
  // zachte landings-plof
  const plof = ctx.createOscillator();
  plof.type = "sine";
  plof.frequency.setValueAtTime(70, t + 18);
  plof.frequency.exponentialRampToValueAtTime(35, t + 18.2);
  const pg = ctx.createGain();
  pg.gain.setValueAtTime(0.22, t + 18);
  pg.gain.exponentialRampToValueAtTime(0.001, t + 18.3);
  plof.connect(pg).connect(S.master);
  plof.start(t + 18);
  plof.stop(t + 18.35);
}

/* ---------- laag 3c-1: wapen-klang (arena-gevecht treffer) ---------- */
// Kort metalig "klang": hoge triangle met snelle pitch-val + high-passed ruis-tik.
export function parkAudioKlang() {
  if (!S.gestart || S.stil || !S.ctx) return;
  const ctx = S.ctx;
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(2400 + Math.random() * 700, t);
  osc.frequency.exponentialRampToValueAtTime(850, t + 0.09);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.13, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
  osc.connect(g).connect(S.master);
  osc.start(t);
  osc.stop(t + 0.22);
  const tik = ctx.createBufferSource();
  tik.buffer = ruis(ctx);
  const hp = ctx.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = 2600;
  const tg = ctx.createGain();
  tg.gain.setValueAtTime(0.09, t);
  tg.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
  tik.connect(hp).connect(tg).connect(S.master);
  tik.start(t);
  tik.stop(t + 0.09);
}

/* ---------- laag 3c: juichend publiek (arena-gevecht gewonnen) ---------- */
// Kort gejuich: aanzwellende hoge ruis (mensenmassa) + een paar blije fluitjes.
export function parkAudioJuich() {
  if (!S.gestart || S.stil || !S.ctx) return;
  const ctx = S.ctx;
  const t = ctx.currentTime;
  const bron = ctx.createBufferSource();
  bron.buffer = ruis(ctx);
  bron.loop = true;
  bron.playbackRate.value = 1.4;
  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 1400;
  bp.Q.value = 0.6;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.001, t);
  g.gain.linearRampToValueAtTime(0.28, t + 0.35);
  g.gain.linearRampToValueAtTime(0.18, t + 1.6);
  g.gain.linearRampToValueAtTime(0.001, t + 2.8);
  bron.connect(bp).connect(g).connect(S.master);
  bron.start(t);
  bron.stop(t + 3);
  for (let i = 0; i < 5; i++) { // blije fluitjes er doorheen
    const st = t + 0.2 + i * 0.35 + Math.random() * 0.15;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    const f0 = 1400 + Math.random() * 900;
    osc.frequency.setValueAtTime(f0, st);
    osc.frequency.exponentialRampToValueAtTime(f0 * 1.4, st + 0.18);
    const og = ctx.createGain();
    og.gain.setValueAtTime(0, st);
    og.gain.linearRampToValueAtTime(0.06, st + 0.03);
    og.gain.exponentialRampToValueAtTime(0.001, st + 0.22);
    osc.connect(og).connect(S.master);
    osc.start(st);
    osc.stop(st + 0.25);
  }
}

/* ---------- levenscyclus ---------- */
// Aanroepen vanuit een user-gesture (pointerdown) — anders blokkeert de browser.
export function parkAudioStart(beginStil = false) {
  if (S.gestart) { if (S.ctx?.state === "suspended") S.ctx.resume().catch(() => {}); return; }
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    S.ctx = new Ctx();
    S.master = S.ctx.createGain();
    S.master.gain.value = beginStil ? 0 : 1;
    S.stil = !!beginStil;
    S.vogelsStil = false;
    S.master.connect(S.ctx.destination);
    startWind();
    planVogel();
    S.gestart = true;
  } catch { /* geen audio ≠ kapot park */ }
}

// Gekoppeld aan de 🔊-knop in de HUD: één knop mute alles (gids + sfeer).
export function parkAudioStil(stil) {
  S.stil = !!stil;
  if (!S.ctx || !S.master) return;
  const nu = S.ctx.currentTime;
  S.master.gain.cancelScheduledValues(nu);
  S.master.gain.linearRampToValueAtTime(stil ? 0 : 1, nu + 0.2);
}

// Bij het verlaten van het park alles netjes opruimen.
export function parkAudioStop() {
  clearTimeout(S.vogelTimer);
  clearInterval(S.tikTimer);
  S.vogelTimer = null;
  S.tikTimer = null;
  S.trein = null;
  S.raketTot = 0;
  S.gestart = false;
  if (S.ctx) { try { S.ctx.close(); } catch { /* */ } }
  S.ctx = null;
  S.master = null;
}
