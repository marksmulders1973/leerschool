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

export const MAX_LIVE_POS = 8;       // tot zoveel spelers zie je elkaars poppetje live
export const POS_INTERVAL_MS = 500;  // positie hooguit 2×/s
export const POS_MIN_AFSTAND = 0.25; // en alleen als je écht bewoog (m)

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
      if (peers.size + 1 > MAX_LIVE_POS) return false;
      const now = Date.now();
      if (now - laatsteT < POS_INTERVAL_MS) return false;
      if (laatstePos && Math.hypot(pos.x - laatstePos.x, pos.z - laatstePos.z) < POS_MIN_AFSTAND && Math.abs((pos.yaw || 0) - (laatstePos.yaw || 0)) < 0.2) return false;
      laatsteT = now; laatstePos = { x: pos.x, z: pos.z, yaw: pos.yaw || 0 };
      channel.send({ type: "broadcast", event: "pos", payload: { c: mijnClient, x: +pos.x.toFixed(2), z: +pos.z.toFixed(2), yaw: +(pos.yaw || 0).toFixed(2), m: pos.m ? 1 : 0 } });
      return true;
    },
    unsub() { try { supabase.removeChannel(channel); } catch { /* */ } },
  };
}
