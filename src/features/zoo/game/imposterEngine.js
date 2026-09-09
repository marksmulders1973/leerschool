// 🎮 Imposter-engine (fase 1, 9 sep 2026) — pure spellogica zonder React/Three.
// Zie docs/plannen-park/GAME-MODUS-IMPOSTER.md voor de regels.
// Alles in wereld-meters; tijd in seconden. `tick()` wordt elk frame aangeroepen
// met de positie van de echte speler; bots bewegen hier.

export const SPEL_DUUR = 300;          // 5 min
export const BEVROREN_S = 15;         // (niet meer gebruikt sinds 9 sep: getikt = af, naar de zeppelin)
export const MAX_SPELERS = 10;
export const TIK_AFSTAND = 2.5;
export const OGEN_AFSTAND = 8;         // iemand anders zo dichtbij = te veel ogen om te tikken
export const TAAK_AFSTAND = 3.2;       // zo dicht bij een post = taak doen mag
export const VERGADERING_S = 20;
export const AUTO_VERGADERING_S = 120;
export const MAX_VERGADERINGEN = 2;    // per echte speler
export const TAKEN_PER_BOUWER = 4;
export const PUNT_GOED = 10, PUNT_WIN = 50, PUNT_TIK = 15;
const BOT_SNELHEID = 2.6;
const BOT_NAMEN = ["Sem", "Noor", "Milan", "Yara", "Daan", "Liv", "Finn", "Zoë", "Luuk", "Sara"];
const BOT_AVATARS = ["blocky:blokSem", "blocky:blokNora", "blocky:blokJoep", "blocky:blokSem", "blocky:blokNora", "blocky:blokJoep", "blocky:blokSem"];

const rnd = (a, b) => a + Math.random() * (b - a);
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const kies = (arr) => arr[Math.floor(Math.random() * arr.length)];

/** 6 taakposten in een ring rond het parkmidden */
export function maakStations(r = 32, n = 6, vrij = null) {
  const uit = [];
  const namen = ["Rekenpost", "Taalpost", "Leespost", "Sompost", "Woordpost", "Weetpost"];
  const emoji = ["🔢", "✏️", "📖", "➕", "🔤", "💡"];
  for (let i = 0; i < n; i++) {
    const hoek = (i / n) * Math.PI * 2 + 0.3;
    let x = Math.cos(hoek) * r, z = Math.sin(hoek) * r;
    // een vrije plek zoeken als er iets staat
    for (let k = 0; k < 12 && vrij && !vrij(x, z); k++) { x += Math.cos(hoek + k) * 2.2; z += Math.sin(hoek + k) * 2.2; }
    uit.push({ id: `post${i}`, naam: namen[i % namen.length], emoji: emoji[i % emoji.length], x, z });
  }
  return uit;
}

export function maakSpel({ spelerId, spelerNaam, avatar, nBots = 5, stations, spelerRolKeuze = null, extraSpelers = [], nImposters = null, vak = "alles", groep = "eigen" }) {
  const spelers = [{ id: spelerId, naam: spelerNaam || "Jij", avatar: avatar || "blocky:blokJoep", bot: false, x: 0, z: 8 }];
  for (const e of extraSpelers) spelers.push({ id: e.id, naam: e.naam, avatar: e.avatar, bot: false, x: e.x || 0, z: e.z || 8 });
  const namen = BOT_NAMEN.slice().sort(() => Math.random() - 0.5);
  for (let i = 0; i < nBots; i++) {
    const st = stations[i % stations.length];
    spelers.push({ id: `bot${i}`, naam: namen[i], avatar: BOT_AVATARS[i % BOT_AVATARS.length], bot: true, x: st.x + rnd(-3, 3), z: st.z + rnd(-3, 3) });
  }
  const nImp = Math.max(1, Math.min(nImposters || (spelers.length >= 8 ? 2 : 1), Math.floor((spelers.length - 1) / 2)));
  const ids = spelers.map((s) => s.id);
  const botIds = new Set(spelers.filter((s) => s.bot).map((s) => s.id));
  // Mark 9 sep 2026: echte spelers gaan vóór bots bij het kiezen van de imposter(s);
  // bots worden pas imposter als er niet genoeg echte spelers zijn.
  const schud = (a) => a.slice().sort(() => Math.random() - 0.5);
  // Solo (1 echte speler) met "laat het lot beslissen" blijft echt loten — anders ben je altijd de imposter.
  const echtEerst = (kandidaten) => (ids.length - botIds.size < 2 ? schud(kandidaten) : [...schud(kandidaten.filter((i) => !botIds.has(i))), ...schud(kandidaten.filter((i) => botIds.has(i)))]);
  let imposters;
  if (spelerRolKeuze === "imposter") imposters = [spelerId, ...echtEerst(ids.filter((i) => i !== spelerId)).slice(0, nImp - 1)];
  else if (spelerRolKeuze === "bouwer") imposters = echtEerst(ids.filter((i) => i !== spelerId)).slice(0, nImp);
  else imposters = echtEerst(ids).slice(0, nImp);
  for (const s of spelers) {
    s.rol = imposters.includes(s.id) ? "imposter" : "bouwer";
    s.bevroren = 0; s.uitgestemd = false; s.taken = 0; s.punten = 0; s.tiks = 0;
    s.doel = null; s.bezig = 0; s.laatstePost = null; s.zagTik = null; s.stemmen = MAX_VERGADERINGEN; s.laatstDoel = null;
    s.moving = false;
  }
  const bouwers = spelers.filter((s) => s.rol === "bouwer").length;
  return {
    fase: "intro",                 // intro | spel | vergadering | einde
    tijd: 0, spelTijd: 0, sindsVergadering: 0,
    spelers, stations, spelerId, vak, groep, nImp,
    takenTotaal: bouwers * TAKEN_PER_BOUWER, takenKlaar: 0,
    vergadering: null,             // { door, t, stemmen: {vanId: opId|null}, redenen: {} }
    fouteStemrondes: 0,
    log: [],                       // laatste gebeurtenissen (voor HUD)
    uitkomst: null,                // { gewonnen: 'bouwers'|'imposters', reden }
    open: null,                    // { spelerId, stationId } — taak-dialoog open
  };
}

function meld(st, tekst) { st.log = [{ t: st.tijd, tekst }, ...st.log].slice(0, 6); }
export function speler(st, id) { return st.spelers.find((s) => s.id === id); }
export function ik(st) { return speler(st, st.spelerId); }
export function actieveSpelers(st) { return st.spelers.filter((s) => !s.uitgestemd && !s.af); }
/** speler is af (getikt of uitgestemd): kijkt mee vanuit de zeppelin */
export function isAf(s) { return !!(s && (s.af || s.uitgestemd)); }
/** af-speler afvoeren: taken van een bouwer tellen niet meer mee (anders wordt het onhaalbaar) */
function zetAf(st, s, reden) {
  if (s.af) return;
  s.af = true; s.bezig = 0; s.doel = null; s.moving = false;
  if (s.rol === "bouwer") st.takenTotaal = Math.max(st.takenKlaar, st.takenTotaal - Math.max(0, TAKEN_PER_BOUWER - (s.taken || 0)));
  meld(st, reden);
}
export function imposters(st) { return st.spelers.filter((s) => s.rol === "imposter"); }

/** mag `dader` `doel` tikken? afstand + geen andere ogen */
export function magTikken(st, dader, doel) {
  if (st.fase !== "spel" || dader.rol !== "imposter" || isAf(dader) || dader.bevroren > 0) return false;
  if (!doel || doel.id === dader.id || doel.rol === "imposter" || doel.bevroren > 0 || isAf(doel)) return false;
  if (dist(dader, doel) > TIK_AFSTAND) return false;
  if (dader.laatstDoel === doel.id) return false;
  for (const a of st.spelers) {
    if (a.id === dader.id || a.id === doel.id || isAf(a) || a.bevroren > 0) continue;
    if (dist(a, doel) < OGEN_AFSTAND) return false;
  }
  return true;
}
export function tik(st, daderId, doelId) {
  const d = speler(st, daderId), t = speler(st, doelId);
  if (!magTikken(st, d, t)) return false;
  d.laatstDoel = t.id; d.tiks += 1; d.punten += PUNT_TIK;
  // wie stond in de buurt (8-16 m) heeft het misschien gezien
  for (const a of st.spelers) { if (a.id !== d.id && a.id !== t.id && dist(a, t) < 16 && Math.random() < 0.6) a.zagTik = d.id; }
  t.zagTik = Math.random() < 0.5 ? d.id : t.zagTik; // het slachtoffer zag de dader half zo vaak
  zetAf(st, t, `🎈 ${t.naam} ${t.naam === "Jij" ? "bent" : "is"} getikt en kijkt mee vanuit de zeppelin`);
  checkEinde(st);
  return true;
}

export function dichtstbijStation(st, p) {
  let best = null, bd = 1e9;
  for (const s of st.stations) { const d = dist(s, p); if (d < bd) { bd = d; best = s; } }
  return best && bd <= TAAK_AFSTAND ? best : null;
}
export function magTaak(st, sp, station) {
  return st.fase === "spel" && !isAf(sp) && sp.bevroren <= 0 && !!station && sp.laatstePost !== station.id;
}
/** taak afgerond (na de vragen): goed = alle vragen goed genoeg */
export function taakKlaar(st, spId, stationId, goedAantal, totaal) {
  const sp = speler(st, spId); if (!sp) return;
  sp.punten += goedAantal * PUNT_GOED;
  sp.laatstePost = stationId;
  if (goedAantal >= Math.ceil(totaal / 2)) {
    if (sp.rol === "bouwer") { sp.taken += 1; st.takenKlaar = Math.min(st.takenTotaal, st.takenKlaar + 1); meld(st, `✅ ${sp.naam} deed een taak`); }
    else meld(st, `✅ ${sp.naam} deed een taak`);
  } else meld(st, `❌ ${sp.naam}: taak niet gelukt`);
  checkEinde(st);
}

export function startVergadering(st, doorId, auto = false) {
  if (st.fase !== "spel") return false;
  const d = speler(st, doorId);
  if (!auto) { if (!d || isAf(d) || d.stemmen <= 0) return false; d.stemmen -= 1; }
  st.fase = "vergadering"; st.sindsVergadering = 0;
  st.vergadering = { door: auto ? null : doorId, t: 0, stemmen: {}, redenen: {} };
  for (const s of st.spelers) { s.bezig = 0; s.doel = null; }
  meld(st, auto ? "🚨 Vergadering (automatisch)" : `🚨 ${d.naam} riep een vergadering`);
  return true;
}
export function stem(st, vanId, opId, reden = null) {
  if (st.fase !== "vergadering") return;
  const v = speler(st, vanId); if (!v || isAf(v)) return;
  st.vergadering.stemmen[vanId] = opId; // null = onthouden
  if (reden) st.vergadering.redenen[vanId] = reden;
}
export function botsStemmen(st) {
  for (const b of st.spelers) {
    if (!b.bot || isAf(b) || st.vergadering.stemmen[b.id] !== undefined) continue;
    const kandidaten = actieveSpelers(st).filter((s) => s.id !== b.id);
    if (b.rol === "imposter") { stem(st, b.id, kies(kandidaten.filter((s) => s.rol === "bouwer")).id, "🤔"); continue; }
    if (b.zagTik && Math.random() < 0.6 && kandidaten.some((s) => s.id === b.zagTik)) { stem(st, b.id, b.zagTik, "❄️"); continue; }
    if (Math.random() < 0.3) { stem(st, b.id, null, "🤷"); continue; }
    stem(st, b.id, kies(kandidaten).id, "👀");
  }
}
export function sluitVergadering(st) {
  if (st.fase !== "vergadering") return null;
  botsStemmen(st);
  const telling = {};
  for (const [van, op] of Object.entries(st.vergadering.stemmen)) { if (op) telling[op] = (telling[op] || 0) + 1; }
  let top = null, topN = 0, gelijk = false;
  for (const [id, n] of Object.entries(telling)) { if (n > topN) { top = id; topN = n; gelijk = false; } else if (n === topN) gelijk = true; }
  let uitkomst;
  if (!top || gelijk) { uitkomst = { uitgestemd: null, tekst: "Geen meerderheid — niemand uitgestemd." }; }
  else {
    const u = speler(st, top); u.uitgestemd = true; zetAf(st, u, `🪑 ${u.naam} ${u.naam === "Jij" ? "bent" : "is"} uitgestemd en kijkt mee vanuit de zeppelin`);
    if (u.rol === "imposter") uitkomst = { uitgestemd: u, imposter: true, tekst: `${u.naam} was de imposter!` };
    else { st.fouteStemrondes += 1; uitkomst = { uitgestemd: u, imposter: false, tekst: `${u.naam} was géén imposter…` }; }
  }
  st.vergadering = { ...st.vergadering, uitkomst, telling };
  for (const s of st.spelers) s.zagTik = null;
  meld(st, uitkomst.tekst);
  st.fase = "spel"; st.sindsVergadering = 0;
  checkEinde(st);
  return uitkomst;
}

export function checkEinde(st) {
  if (st.fase === "einde") return st.uitkomst;
  const impActief = imposters(st).filter((s) => !s.uitgestemd).length;
  let u = null;
  if (impActief === 0) u = { gewonnen: "bouwers", reden: "De imposter is uitgestemd!" };
  else if (st.takenKlaar >= st.takenTotaal) u = { gewonnen: "bouwers", reden: "Alle taken zijn klaar!" };
  else if (st.fouteStemrondes >= 2) u = { gewonnen: "imposters", reden: "Twee keer de verkeerde uitgestemd…" };
  else if (st.spelTijd >= SPEL_DUUR) u = { gewonnen: "imposters", reden: "De tijd is om!" };
  else { const bouwersActief = actieveSpelers(st).filter((s) => s.rol === "bouwer").length; if (bouwersActief <= impActief) u = { gewonnen: "imposters", reden: "De imposters zijn in de meerderheid!" }; }
  if (u) {
    st.fase = "einde"; st.uitkomst = u;
    for (const s of st.spelers) { const won = (u.gewonnen === "bouwers") === (s.rol === "bouwer"); if (won) s.punten += PUNT_WIN; }
  }
  return u;
}

/** per frame: bots bewegen + taken doen + bot-imposter tikt; bevroren aftellen; auto-vergadering; tijd */
export function tick(st, dt, spelerPos, vrijPlek = null, posities = null) {
  if (st.fase === "intro" || st.fase === "einde") return;
  st.tijd += dt;
  const mij = ik(st);
  if (spelerPos) { mij.x = spelerPos.x; mij.z = spelerPos.z; }
  // fase 2: posities van de andere echte spelers (van het doorgeefstation) — voor tik-afstand en 'ogen'
  if (posities) for (const s of st.spelers) { if (!s.bot && s.id !== st.spelerId) { const p = posities.get ? posities.get(s.id) : posities[s.id]; if (p && p.x != null) { s.x = p.x; s.z = p.z; s.yaw = p.yaw || 0; } } }
  if (st.fase === "vergadering") { st.vergadering.t += dt; if (st.vergadering.t >= VERGADERING_S) sluitVergadering(st); return; }
  st.spelTijd += dt; st.sindsVergadering += dt;
  for (const s of st.spelers) if (s.bevroren > 0) s.bevroren = Math.max(0, s.bevroren - dt);
  for (const b of st.spelers) {
    if (!b.bot || isAf(b)) { if (b.bot) b.moving = false; continue; }
    if (b.bevroren > 0) { b.moving = false; continue; }
    // bot-imposter: kans om te tikken als het mag
    if (b.rol === "imposter" && Math.random() < dt * 0.5) {
      const doel = actieveSpelers(st).find((s) => s.rol === "bouwer" && magTikken(st, b, s));
      if (doel) { tik(st, b.id, doel.id); b.doel = kies(st.stations); b.bezig = 0; continue; }
    }
    if (b.bezig > 0) { b.bezig -= dt; b.moving = false; if (b.bezig <= 0) { const stn = st.stations.find((s) => s.id === b.laatstePost); if (stn) taakKlaar(st, b.id, stn.id, Math.random() < 0.8 ? 3 : 1, 3); b.doel = null; } continue; }
    if (!b.doel) { const kandidaten = st.stations.filter((s) => s.id !== b.laatstePost); b.doel = kies(kandidaten); b.doelOffset = { x: rnd(-1.5, 1.5), z: rnd(-1.5, 1.5) }; }
    const dx = b.doel.x + (b.doelOffset?.x || 0) - b.x, dz = b.doel.z + (b.doelOffset?.z || 0) - b.z, d = Math.hypot(dx, dz);
    if (d < 1.2) { b.laatstePost = b.doel.id; b.bezig = rnd(8, 15); b.moving = false; continue; }
    const stap = Math.min(d, BOT_SNELHEID * dt);
    let nx = b.x + (dx / d) * stap, nz = b.z + (dz / d) * stap;
    if (vrijPlek && !vrijPlek(nx, nz)) { const h = Math.atan2(dz, dx) + (Math.random() < 0.5 ? 1 : -1) * 1.2; nx = b.x + Math.cos(h) * stap; nz = b.z + Math.sin(h) * stap; }
    b.x = nx; b.z = nz; b.moving = true;
    b.yaw = Math.atan2(dx, dz);
  }
  if (st.sindsVergadering >= AUTO_VERGADERING_S) startVergadering(st, null, true);
  checkEinde(st);
}

export function scoreVan(st) {
  const mij = ik(st);
  const gewonnen = st.uitkomst ? (st.uitkomst.gewonnen === "bouwers") === (mij.rol === "bouwer") : false;
  const munten = Math.round(mij.punten / 5);
  return { punten: mij.punten, munten, gewonnen, rol: mij.rol, taken: mij.taken, tiks: mij.tiks, duur: Math.round(st.spelTijd) };
}

// ── fase 2: multiplayer via parkcode (host-autoritair) ──
/** hebben alle echte, actieve spelers gestemd? → vergadering eerder sluiten */
export function alleGestemd(st) {
  if (st.fase !== "vergadering") return false;
  return actieveSpelers(st).filter((s) => !s.bot).every((s) => st.vergadering.stemmen[s.id] !== undefined);
}
/** compacte spelstand voor medespelers; rollen alleen van uitgestemde spelers of aan het eind */
export function maakSnapshot(st) {
  const klaar = st.fase === "einde";
  return {
    fase: st.fase, spelTijd: Math.round(st.spelTijd * 10) / 10, sindsVergadering: Math.round(st.sindsVergadering),
    takenKlaar: st.takenKlaar, takenTotaal: st.takenTotaal, fouteStemrondes: st.fouteStemrondes,
    stations: st.stations, uitkomst: st.uitkomst, log: st.log.slice(0, 3), vak: st.vak, groep: st.groep, nImp: st.nImp,
    vergadering: st.vergadering ? { t: Math.round(st.vergadering.t * 10) / 10, stemmen: st.vergadering.stemmen, uitkomst: st.vergadering.uitkomst || null } : null,
    spelers: st.spelers.map((s) => ({ id: s.id, naam: s.naam, avatar: s.avatar, bot: s.bot, x: +s.x.toFixed(2), z: +s.z.toFixed(2), yaw: +(s.yaw || 0).toFixed(2), moving: !!s.moving, bezig: s.bezig > 0,
      bevroren: Math.round(s.bevroren * 10) / 10, uitgestemd: s.uitgestemd, af: !!s.af, punten: s.punten, taken: s.taken, tiks: s.tiks, stemmen: s.stemmen, laatstePost: s.laatstePost,
      rol: klaar || s.uitgestemd ? s.rol : undefined })),
  };
}
/** snapshot van de host toepassen op een lokale (client-)stand; eigen rol blijft staan */
export function pasSnapshotToe(lokaal, snap, mijnId) {
  const st = lokaal || { spelerId: mijnId, spelers: [], log: [] };
  const rollen = new Map((st.spelers || []).map((s) => [s.id, s.rol]));
  st.spelerId = mijnId;
  st.fase = snap.fase; st.spelTijd = snap.spelTijd; st.sindsVergadering = snap.sindsVergadering;
  st.takenKlaar = snap.takenKlaar; st.takenTotaal = snap.takenTotaal; st.fouteStemrondes = snap.fouteStemrondes;
  st.stations = snap.stations; st.uitkomst = snap.uitkomst; st.log = snap.log || []; st.vak = snap.vak || "alles"; st.groep = snap.groep || "eigen"; st.nImp = snap.nImp || 1;
  st.vergadering = snap.vergadering ? { door: null, t: snap.vergadering.t, stemmen: snap.vergadering.stemmen || {}, redenen: {}, uitkomst: snap.vergadering.uitkomst } : null;
  st.spelers = snap.spelers.map((s) => ({ ...s, rol: s.rol || rollen.get(s.id) || (s.id === mijnId ? st.mijnRol : undefined) || "bouwer", zagTik: null, doel: null, bezig: s.bezig ? 1 : 0 }));
  return st;
}
