// ☁️ park-relay: doorgeefstation voor posities van medespelers in een gedeeld park.
//
// Waarom: bouwsels gaan via Supabase (1 bericht per bouwsel, goedkoop), maar
// posities zijn "iedereen → iedereen", en Supabase Realtime rekent per bericht.
// Dit Durable Object doet dat fan-out gratis: één instantie per parkcode, alle
// spelers van dat park hangen eraan met een WebSocket (hibernation: stil = gratis).
//
// Protocol (JSON per bericht, alles klein):
//   client → relay:  {t:"hallo", c:<clientId>, name, avatar}   (meteen na verbinden)
//                    {t:"pos", x, z, yaw, m}                     (max ~5×/s, alleen bij beweging)
//   relay → client:  {t:"welkom", peers:[{c,name,avatar,x,z,yaw}], n}
//                    {t:"pos", c, x, z, yaw, m}                  (van een ander)
//                    {t:"join", c, name, avatar} · {t:"leave", c} · {t:"vol"}
// Geen opslag, geen chat, geen achternamen: alleen wat het park nodig heeft om
// poppetjes te laten lopen. Max MAX_SPELERS per park.
import { DurableObject } from "cloudflare:workers";

const MAX_SPELERS = 100;
const MIN_INTERVAL_MS = 150;      // per speler: sneller dan dit negeren we (spam/loop-bescherming)
const CODE_RE = /^[A-Z2-9]{6}$/;

export class ParkRoom extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.ctx = ctx;
  }

  async fetch(request) {
    if (request.headers.get("Upgrade") !== "websocket") return new Response("park-relay: websocket verwacht", { status: 426 });
    if (this.ctx.getWebSockets().length >= MAX_SPELERS) return new Response("vol", { status: 429 });
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.ctx.acceptWebSocket(server);
    server.serializeAttachment({ c: null, name: "", avatar: "", x: null, z: null, yaw: 0, laatst: 0 });
    return new Response(null, { status: 101, webSocket: client });
  }

  _peers(behalve) {
    const uit = [];
    for (const ws of this.ctx.getWebSockets()) {
      if (ws === behalve) continue;
      const a = ws.deserializeAttachment?.() || {};
      if (a.c) uit.push({ c: a.c, name: a.name || "", avatar: a.avatar || "", x: a.x, z: a.z, yaw: a.yaw || 0 });
    }
    return uit;
  }

  _zend(behalve, obj) {
    const s = JSON.stringify(obj);
    for (const ws of this.ctx.getWebSockets()) {
      if (ws === behalve) continue;
      try { ws.send(s); } catch { /* dode socket ruimt zichzelf op */ }
    }
  }

  async webSocketMessage(ws, bericht) {
    if (typeof bericht !== "string" || bericht.length > 400) return;
    let m; try { m = JSON.parse(bericht); } catch { return; }
    const a = ws.deserializeAttachment?.() || {};
    if (m.t === "hallo") {
      const c = String(m.c || "").slice(0, 40); if (!c) return;
      const naam = String(m.name || "").replace(/[^\p{L}\p{N} .'-]/gu, "").slice(0, 20);
      const avatar = String(m.avatar || "").slice(0, 60);
      ws.serializeAttachment({ ...a, c, name: naam, avatar });
      try { ws.send(JSON.stringify({ t: "welkom", peers: this._peers(ws), n: this.ctx.getWebSockets().length })); } catch { /* */ }
      this._zend(ws, { t: "join", c, name: naam, avatar });
      return;
    }
    if (m.t === "pos") {
      if (!a.c) return;
      const nu = Date.now();
      if (nu - (a.laatst || 0) < MIN_INTERVAL_MS) return;
      const x = +m.x, z = +m.z, yaw = +m.yaw || 0;
      if (!Number.isFinite(x) || !Number.isFinite(z) || Math.abs(x) > 2000 || Math.abs(z) > 2000) return;
      ws.serializeAttachment({ ...a, x, z, yaw, laatst: nu });
      this._zend(ws, { t: "pos", c: a.c, x: +x.toFixed(2), z: +z.toFixed(2), yaw: +yaw.toFixed(2), m: m.m ? 1 : 0 });
      return;
    }
    if (m.t === "ping") { try { ws.send('{"t":"pong"}'); } catch { /* */ } }
  }

  async webSocketClose(ws) {
    const a = ws.deserializeAttachment?.() || {};
    if (a.c) this._zend(ws, { t: "leave", c: a.c });
    try { ws.close(); } catch { /* */ }
  }

  async webSocketError(ws) { return this.webSocketClose(ws); }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // CORS/health
    if (url.pathname === "/" || url.pathname === "/health") {
      return new Response(JSON.stringify({ ok: true, dienst: "park-relay", tijd: new Date().toISOString() }), { headers: { "content-type": "application/json", "access-control-allow-origin": "*" } });
    }
    const m = url.pathname.match(/^\/room\/([A-Za-z0-9]{6})$/);
    if (!m) return new Response("onbekend pad", { status: 404 });
    const code = m[1].toUpperCase();
    if (!CODE_RE.test(code)) return new Response("ongeldige parkcode", { status: 400 });
    const id = env.PARK_ROOM.idFromName(code);
    return env.PARK_ROOM.get(id).fetch(request);
  },
};
