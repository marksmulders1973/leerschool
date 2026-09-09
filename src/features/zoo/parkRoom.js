// 🏫 Gedeeld park / samen bouwen (Mark 8 sep 2026: "ik wil dat ze samen kunnen
// bouwen, ook als klas, max 100 spelers").
//
// Eén park per PARKCODE (6 tekens). Iedereen met de code komt in hetzelfde park
// en bouwt mee. Twee kanalen, bewust gescheiden:
//   1. LAYOUT (wat er staat) → database. Elke wijziging is een kleine "op"
//      (place/remove/update) via de RPC park_room_apply; die past 'm server-
//      side toe én logt 'm in park_room_ops. Alle clients luisteren via
//      Realtime postgres_changes en passen dezelfde ops lokaal toe. Goedkoop:
//      een bouwsel neerzetten = één bericht, hoe groot de klas ook is.
//   2. AANWEZIGHEID + POSITIE (wie loopt waar) → Realtime presence + broadcast.
//      Posities zijn duur (elke speler → alle anderen), daarom: max ~2×/s, alleen
//      als je bewoog, en boven MAX_LIVE_POS spelers zetten we het live-lopen uit
//      (je ziet dan wél alles wat gebouwd wordt, niet meer elk poppetje). Voor
//      klassen van 30-100 komt er een apart doorgeefstation (stap 2).
// Geen chat, geen achternamen, geen ranglijst: alleen de voornaam die het kind
// zelf koos + z'n poppetje. Wie mag wat: je eigen bouwsels weghalen/aanpassen
// mag altijd; die van een ander alleen als je het park aanmaakte (eigenaar).
import supabase from "../../supabase";

export const MAX_LIVE_POS = 8;       // zónder doorgeefstation: tot zoveel spelers via Supabase-broadcast
export const POS_INTERVAL_MS = 500;  // positie hooguit 2×/s (via Supabase) …
export const POS_INTERVAL_RELAY_MS = 250; // … of 4×/s via het doorgeefstation (gratis)
export const POS_MIN_AFSTAND = 0.25; // en alleen als je écht bewoog (m)
// ☁️ Stap 2 (9 sep 2026): Cloudflare Worker + Durable Object als doorgeefstation voor
// posities — één WebSocket per speler, fan-out gratis, tot 100 spelers per park.
// Valt het station weg (geen verbinding), dan blijft Supabase-broadcast het pad
// (met de MAX_LIVE_POS-grens). Code: park-relay/src/index.js in deze repo.
export const RELAY_URL = import.meta.env?.VITE_PARK_RELAY_URL || "wss://park-relay.park-relay.workers.dev";

export const CODE_REGEX = /^[A-Z2-9]{6}$/;
export function normaliseerCode(s) {
  return String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, "").replace(/0/g, "O").replace(/1/g, "I").slice(0, 6);
}

// Per tab één client-id: zo herkennen we onze eigen ops die via Realtime
// terugkomen (echo) en is presence per tab i.p.v. per account.
let CLIENT_ID = null;
export function clientId() {
  if (!CLIENT_ID) CLIENT_ID = "c_" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
  return CLIENT_ID;
}

// ── item-id's: elk bouwsel in een gedeeld park heeft een stabiel id ──
export function itemId(it) {
  if (!it) return null;
  if (it.id) return it.id;
  if (it.kx != null) return `k:${it.kx},${it.kz},${it.kh}`;
  return null;
}
export function nieuwItemId() { return "i:" + Math.random().toString(36).slice(2, 12); }
/** Zorg dat elk item een id heeft (nieuwe array als er iets veranderde). */
export function zorgIds(layout) {
  let veranderd = false;
  const uit = (layout || []).map((it) => {
    const id = itemId(it);
    if (id && it.id === id) return it;
    veranderd = true;
    return { ...it, id: id || nieuwItemId() };
  });
  return veranderd ? uit : layout;
}

// ── diff → ops: vergelijk de vorige gesynchroniseerde layout met de nieuwe ──
function zelfde(a, b) {
  // 'by' is server-eigendom en telt niet mee voor "veranderd"
  const { by: _a, ...ra } = a; const { by: _b, ...rb } = b;
  return JSON.stringify(ra) === JSON.stringify(rb);
}
export function diffLayout(prev, next) {
  const ops = [];
  const oud = new Map(); for (const it of prev || []) { const id = itemId(it); if (id) oud.set(id, it); }
  const nieuw = new Map(); for (const it of next || []) { const id = itemId(it); if (id) nieuw.set(id, it); }
  for (const [id, it] of oud) if (!nieuw.has(id)) ops.push({ t: "remove", id });
  for (const [id, it] of nieuw) {
    const was = oud.get(id);
    if (!was) ops.push({ t: "place", item: it });
    else if (!zelfde(was, it)) ops.push({ t: "update", item: it });
  }
  return ops;
}
/** Pas ops (van een ander) toe op een layout. */
export function pasOpsToe(layout, ops, by) {
  let lay = layout.slice();
  for (const op of ops || []) {
    if (op.t === "place" && op.item?.id) {
      if (!lay.some((it) => itemId(it) === op.item.id)) lay.push(by ? { ...op.item, by } : op.item);
    } else if (op.t === "remove" && op.id) {
      lay = lay.filter((it) => itemId(it) !== op.id);
    } else if (op.t === "update" && op.item?.id) {
      lay = lay.map((it) => (itemId(it) === op.item.id ? { ...op.item, by: it.by } : it));
    }
  }
  return lay;
}

// ── database ──
export async function maakParkRoom({ naam, layout, terrain, owned }) {
  const { data, error } = await supabase.rpc("park_room_create", { p_naam: naam || "Ons park", p_layout: layout || [], p_terrain: terrain ?? null, p_owned: owned || {} });
  if (error) throw error;
  return data; // de code
}
export async function haalParkRoom(code) {
  const { data, error } = await supabase.rpc("park_room_get", { p_code: normaliseerCode(code) });
  if (error) throw error;
  return Array.isArray(data) ? data[0] || null : data || null;
}
/** 🎮 klassement van een parkcode (laatste 60 dagen, beste totaal per naam) */
export async function haalKlassement(code) {
  const { data, error } = await supabase.rpc("park_room_klassement", { p_code: normaliseerCode(code) });
  if (error) throw error;
  return data || [];
}
/** 🎮 scores van een ronde bewaren (door de spelleider, één rij per echte speler) */
export async function bewaarScores(code, rijen) {
  const { data: { user } = {} } = await supabase.auth.getUser();
  if (!user || !rijen?.length) return false;
  const { error } = await supabase.from("park_room_scores").insert(rijen.map((r) => ({ code: normaliseerCode(code), naam: String(r.naam || "Speler").slice(0, 30), punten: r.punten | 0, gewonnen: !!r.gewonnen, rol: r.rol || null, vak: r.vak || null, door: user.id })));
  if (error) throw error;
  return true;
}
/** parkcodes die deze gebruiker aanmaakte (leerkracht-pagina) — RLS: select staat open, code = sleutel */
export async function mijnParkRooms(uid) {
  if (!uid) return [];
  const { data, error } = await supabase.from("park_rooms").select("code,naam,created_at").eq("eigenaar", uid).order("created_at", { ascending: false }).limit(20);
  if (error) throw error;
  return data || [];
}
export async function stuurOps(code, ops) {
  if (!ops || !ops.length) return { id: null, rejected: [] };
  const { data, error } = await supabase.rpc("park_room_apply", { p_code: normaliseerCode(code), p_client: clientId(), p_ops: ops });
  if (error) throw error;
  return data || { id: null, rejected: [] };
}

// ── realtime: ops van anderen + wie is er + waar loopt hij ──
/**
 * handlers: onOps(ops, {client, uid}) · onPeers(Map<clientId,{name,avatar,uid}>) ·
 *           onPos(clientId, {x,z,yaw,m}) · onStatus(status)
 * returnt { sendPos(pos), aantal(), unsub() }
 */
export function verbindParkRoom({ code, me, handlers = {} }) {
  const c = normaliseerCode(code);
  const mijnClient = clientId();
  const channel = supabase.channel(`park:${c}`, { config: { broadcast: { self: false }, presence: { key: mijnClient } } });
  let peers = new Map();
  let laatstePos = null, laatsteT = 0;

  // ☁️ doorgeefstation (posities). Verbindt meteen; bij mislukken → Supabase-pad.
  let relay = null, relayOk = false, relayPogingen = 0, relayTimer = null, gesloten = false;
  const relayVerbind = () => {
    if (gesloten || !RELAY_URL || typeof WebSocket === "undefined") return;
    try {
      const ws = new WebSocket(`${RELAY_URL.replace(/\/$/, "")}/room/${c}`);
      relay = ws;
      ws.onopen = () => {
        relayOk = true; relayPogingen = 0;
        try { ws.send(JSON.stringify({ t: "hallo", c: mijnClient, name: me?.name || "", avatar: me?.avatar || "" })); } catch { /* */ }
        handlers.onRelay?.(true);
      };
      ws.onmessage = (e) => {
        let m; try { m = JSON.parse(e.data); } catch { return; }
        if (m.t === "pos" && m.c && m.c !== mijnClient) handlers.onPos?.(m.c, m);
        else if (m.t === "game" && m.c && m.c !== mijnClient) handlers.onGame?.(m.c, m.d);
        else if (m.t === "welkom") { for (const q of m.peers || []) { if (q.c && q.c !== mijnClient) { handlers.onPeerInfo?.(q.c, { name: q.name, avatar: q.avatar }); if (q.x != null) handlers.onPos?.(q.c, q); } } }
        else if (m.t === "join" && m.c && m.c !== mijnClient) handlers.onPeerInfo?.(m.c, { name: m.name, avatar: m.avatar });
        else if (m.t === "leave" && m.c) handlers.onPeerWeg?.(m.c);
      };
      ws.onclose = () => {
        relayOk = false; relay = null; handlers.onRelay?.(false);
        if (!gesloten && relayPogingen < 6) { relayPogingen += 1; relayTimer = setTimeout(relayVerbind, Math.min(15000, 1000 * 2 ** relayPogingen)); }
      };
      ws.onerror = () => { try { ws.close(); } catch { /* */ } };
    } catch { relayOk = false; }
  };
  relayVerbind();

  channel.on("postgres_changes", { event: "INSERT", schema: "public", table: "park_room_ops", filter: `code=eq.${c}` }, (payload) => {
    try { if (typeof window !== "undefined") window.__parkRoomLaatsteOp = Date.now(); } catch { /* */ }
    const rij = payload?.new; if (!rij) return;
    if (rij.client === mijnClient) return; // eigen echo
    handlers.onOps?.(Array.isArray(rij.ops) ? rij.ops : [], { client: rij.client, uid: rij.uid, versie: null });
  });
  // ops van medespelers (primair pad; postgres_changes hieronder is het vangnet)
  channel.on("broadcast", { event: "ops" }, ({ payload }) => {
    if (!payload || payload.c === mijnClient) return;
    handlers.onOps?.(Array.isArray(payload.ops) ? payload.ops : [], { client: payload.c, uid: payload.uid || null, versie: payload.versie ?? null });
  });
  channel.on("broadcast", { event: "game" }, ({ payload }) => {
    if (!payload || payload.c === mijnClient) return;
    handlers.onGame?.(payload.c, payload.d);
  });
  channel.on("broadcast", { event: "pos" }, ({ payload }) => {
    if (!payload || payload.c === mijnClient) return;
    handlers.onPos?.(payload.c, payload);
  });
  channel.on("presence", { event: "sync" }, () => {
    const st = channel.presenceState();
    peers = new Map();
    for (const [key, lijst] of Object.entries(st)) {
      if (key === mijnClient) continue;
      const p = Array.isArray(lijst) ? lijst[0] : lijst;
      peers.set(key, { name: p?.name || "", avatar: p?.avatar || "", uid: p?.uid || null });
    }
    handlers.onPeers?.(peers);
  });
  channel.subscribe(async (status, err) => {
    // status zichtbaar voor tests/diagnose (SUBSCRIBED · CHANNEL_ERROR · TIMED_OUT · CLOSED)
    try { if (typeof window !== "undefined") { window.__parkRoomStatus = { status, err: err ? String(err?.message || err) : null, t: Date.now() }; } } catch { /* */ }
    if (status !== "SUBSCRIBED") console.warn("[parkRoom]", status, err || "");
    handlers.onStatus?.(status);
    if (status === "SUBSCRIBED") {
      try { await channel.track({ name: me?.name || "", avatar: me?.avatar || "", uid: me?.uid || null, joinedAt: Date.now() }); } catch { /* */ }
    }
  });

  return {
    channel,
    aantal() { return peers.size + 1; },
    peers() { return peers; },
    /** stuur je (al door de server geaccepteerde) ops naar de anderen */
    sendOps(ops, versie) {
      if (!ops || !ops.length) return;
      channel.send({ type: "broadcast", event: "ops", payload: { c: mijnClient, uid: me?.uid || null, ops, versie: versie ?? null } });
    },
    /** stuur je positie; throttled + alleen bij beweging + alleen bij kleine groepen */
    sendPos(pos) {
      const now = Date.now();
      if (now - laatsteT < (relayOk ? POS_INTERVAL_RELAY_MS : POS_INTERVAL_MS)) return false;
      if (laatstePos && Math.hypot(pos.x - laatstePos.x, pos.z - laatstePos.z) < POS_MIN_AFSTAND && Math.abs((pos.yaw || 0) - (laatstePos.yaw || 0)) < 0.2) return false;
      const payload = { c: mijnClient, x: +pos.x.toFixed(2), z: +pos.z.toFixed(2), yaw: +(pos.yaw || 0).toFixed(2), m: pos.m ? 1 : 0 };
      if (relayOk && relay && relay.readyState === 1) {
        laatsteT = now; laatstePos = { x: pos.x, z: pos.z, yaw: pos.yaw || 0 };
        try { relay.send(JSON.stringify({ t: "pos", x: payload.x, z: payload.z, yaw: payload.yaw, m: payload.m })); } catch { /* */ }
        return true;
      }
      if (peers.size + 1 > MAX_LIVE_POS) return false; // zonder station: alleen kleine groepen
      laatsteT = now; laatstePos = { x: pos.x, z: pos.z, yaw: pos.yaw || 0 };
      channel.send({ type: "broadcast", event: "pos", payload });
      return true;
    },
    relayActief() { return relayOk; },
    /** 🎮 game-bericht naar alle medespelers (spelstand van de spelleider of een actie) */
    sendGame(d) {
      if (relayOk && relay && relay.readyState === 1) { try { relay.send(JSON.stringify({ t: "game", d })); return true; } catch { /* */ } }
      try { channel.send({ type: "broadcast", event: "game", payload: { c: mijnClient, d } }); return true; } catch { return false; }
    },
    mijnClient,
    unsub() { gesloten = true; clearTimeout(relayTimer); try { relay?.close(); } catch { /* */ } try { supabase.removeChannel(channel); } catch { /* */ } },
  };
}
