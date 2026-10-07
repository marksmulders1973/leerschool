// Nagebootste Supabase voor de kliktochten (audit ouderadvies, 7 okt 2026).
//
// WAAROM: in de cloud-omgeving van deze audit blokkeert het netwerkbeleid
// zowel leerkwartier.app als het Supabase-project (HTTP 403 op CONNECT).
// Daarom draaien de builds lokaal met VITE_SUPABASE_URL=https://protostub.supabase.co
// en vangt Playwright elk verzoek naar die host op. De RPC's hieronder volgen
// de LIVE functiedefinities (claim_link_code, opgehaald met pg_get_functiondef
// op 7 okt 2026) en het VOORSTEL in docs/audit/ouderadvies/VOORSTEL-migratie-ouderadvies.sql.
// Dit is dus een nabootsing, geen echte database — zo staat het ook in het verslag.

const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
export const jwt = (claims) => `${b64({ alg: "HS256", typ: "JWT" })}.${b64({ exp: 2000000000, ...claims })}.c3R1Yg`;

export const OUDER = { id: "00000000-0000-4000-8000-00000000aaaa", email: "testmoeder@example.test" };

export function maakStore() {
  return { codes: {}, links: [], klaargezet: [], nulmeting: {}, sleutels: {}, log: [] };
}

/** Lokale opslag-sessie voor de ouder (ingelogd, niet anoniem). */
export function ouderSessie() {
  return {
    access_token: jwt({ sub: OUDER.id, role: "authenticated", email: OUDER.email, is_anonymous: false, aud: "authenticated" }),
    token_type: "bearer", expires_in: 3600, expires_at: 2000000000, refresh_token: "stub-refresh",
    user: { id: OUDER.id, aud: "authenticated", role: "authenticated", email: OUDER.email, is_anonymous: false, app_metadata: { provider: "email" }, user_metadata: { full_name: "Testmoeder" } },
  };
}

const uid = () => crypto.randomUUID();
const isOuder = (req) => (req.headers()["authorization"] || "").includes(jwt({ sub: OUDER.id, role: "authenticated", email: OUDER.email, is_anonymous: false, aud: "authenticated" }).split(".")[1]);

/**
 * @param {import('playwright').BrowserContext} ctx
 * @param {object} store  gedeeld tussen contexten (= "de server")
 * @param {{ voorstelLive?: boolean, naam?: string }} opt
 *   voorstelLive=false → de nieuwe RPC's bestaan niet (zoals de live database vandaag).
 */
export async function koppelStub(ctx, store, { voorstelLive = true, naam = "ctx" } = {}) {
  // Alles buiten localhost en de stub (fonts, analytics) direct afbreken: niet bereikbaar en niet nodig.
  await ctx.route((url) => !/^http:\/\/localhost/.test(url.href) && !/protostub\.supabase\.co/.test(url.href), (r) => r.abort());
  await ctx.route(/protostub\.supabase\.co/, async (route) => {
    const req = route.request();
    const url = new URL(req.url());
    const pad = url.pathname;
    let body = null;
    try { body = req.postDataJSON(); } catch { body = null; }
    const json = (status, data) => route.fulfill({ status, contentType: "application/json", body: JSON.stringify(data) });
    store.log.push(`${naam} ${req.method()} ${pad}`);

    // ── Auth ──
    if (pad.startsWith("/auth/v1/user")) return isOuder(req) ? json(200, ouderSessie().user) : json(401, { message: "no user" });
    if (pad.startsWith("/auth/v1/")) return json(400, { message: "auth niet nagebootst" });

    // ── RPC's ──
    const rpc = pad.match(/^\/rest\/v1\/rpc\/(.+)$/)?.[1];
    if (rpc) {
      const nieuw = ["nulmeting_bewaar_blok", "nulmeting_stand", "nulmeting_stand_ouder", "ouder_kindsleutel", "koppel_met_kindsleutel"];
      if (nieuw.includes(rpc) && !voorstelLive) return json(404, { code: "PGRST202", message: `Could not find the function public.${rpc}` });
      switch (rpc) {
        case "claim_link_code": {
          // = live definitie: code hoofdletter-ongevoelig, niet verlopen, niet gebruikt; eenmalig.
          const c = store.codes[String(body.p_code || "").trim().toUpperCase()];
          if (!c || c.used || c.expires < Date.now()) return json(200, { ok: false, error: "code_invalid_or_expired" });
          c.used = true;
          const naamK = (c.child_name || "").trim() || String(body.p_child_name || "").trim();
          let l = store.links.find((x) => x.parent === c.parent && x.child_name.toLowerCase() === naamK.toLowerCase());
          if (l) { l.verified = true; return json(200, { ok: true, link_id: l.id, rol: "ouder", van_wie: c.van_wie || null, child_name: naamK, updated: true }); }
          l = { id: uid(), parent: c.parent, child_name: naamK, verified: true, groep: c.groep || null };
          store.links.push(l);
          return json(200, { ok: true, link_id: l.id, rol: "ouder", van_wie: c.van_wie || null, child_name: naamK, created: true });
        }
        case "gezin_koppel_zelfde_apparaat": {
          if (!isOuder(req)) return json(403, { code: "42501", message: "alleen voor een ingelogd ouder-account" });
          const naamK = String(body.p_child_name || "").trim();
          let l = store.links.find((x) => x.parent === OUDER.id && x.child_name.toLowerCase() === naamK.toLowerCase());
          if (!l) { l = { id: uid(), parent: OUDER.id, child_name: naamK, verified: body.p_verified !== false, groep: body.p_groep || null }; store.links.push(l); }
          else { l.groep = body.p_groep || l.groep; l.verified = l.verified || body.p_verified !== false; }
          return json(200, l.id);
        }
        case "koppel_mijn_data": return json(200, { ok: true, gekoppeld: 0 });
        case "voor_jou_klaargezet": return json(200, store.klaargezet.filter((k) => k.link_id === body.p_link_id).map((k) => ({ ...k, bron: "ouder" })));
        case "voor_jou_voorkeur": { const l = store.links.find((x) => x.id === body.p_link_id); return json(200, l ? { groep: l.groep, voorkeur: null } : null); }
        case "gezin_overzicht": return json(200, { ouder: { email: OUDER.email }, partner: { email: null, bevestigd: false }, kinderen: store.links.filter((l) => l.parent === OUDER.id).map((l) => ({ link_id: l.id, naam: l.child_name, groep: l.groep, gekoppeld: l.verified, weekmail: true, laatst_actief: null, heeft_geoefend: false })) });
        case "nulmeting_bewaar_blok": {
          if (!store.links.some((l) => l.id === body.p_link_id && l.verified)) return json(200, false);
          (store.nulmeting[body.p_link_id] ||= {})[body.p_blok] = { blok: body.p_blok, groep: body.p_groep, uitslag: body.p_uitslag, klaar_op: new Date().toISOString() };
          return json(200, true);
        }
        case "nulmeting_stand": return json(200, Object.values(store.nulmeting[body.p_link_id] || {}));
        case "nulmeting_stand_ouder": {
          const l = store.links.find((x) => x.id === body.p_link_id);
          if (!l || !isOuder(req) || l.parent !== OUDER.id) return json(200, []);
          return json(200, Object.values(store.nulmeting[body.p_link_id] || {}));
        }
        case "ouder_kindsleutel": {
          const l = store.links.find((x) => x.id === body.p_link_id && x.parent === OUDER.id);
          if (!l || !isOuder(req)) return json(403, { code: "42501", message: "geen eigen koppeling" });
          if (!l.sleutel || body.p_nieuw) { if (l.sleutel) delete store.sleutels[l.sleutel]; l.sleutel = "SCH" + Math.random().toString(36).slice(2, 7).toUpperCase().replace(/[01IOL]/g, "Z"); store.sleutels[l.sleutel] = l.id; }
          return json(200, l.sleutel);
        }
        case "koppel_met_kindsleutel": {
          const id = store.sleutels[String(body.p_sleutel || "").toUpperCase().replace(/[\s\-._]/g, "")];
          const l = store.links.find((x) => x.id === id && x.verified);
          return json(200, l ? { ok: true, link_id: l.id, child_name: l.child_name, groep: l.groep } : { ok: false });
        }
        default: return json(200, null);
      }
    }

    // ── Tabellen ──
    const tabel = pad.match(/^\/rest\/v1\/([a-z_]+)/)?.[1];
    if (tabel === "link_codes" && req.method() === "POST") {
      const rij = Array.isArray(body) ? body[0] : body;
      store.codes[rij.code] = { parent: rij.parent_user_id, child_name: rij.child_name, expires: Date.parse(rij.expires_at), used: false, van_wie: rij.van_wie };
      return json(201, []);
    }
    if (tabel === "ouder_klaargezet" && req.method() === "POST") {
      const rij = Array.isArray(body) ? body[0] : body;
      if (!store.klaargezet.some((k) => k.link_id === rij.link_id && k.path_id === rij.path_id)) store.klaargezet.push({ id: uid(), gedaan: false, created_at: new Date().toISOString(), ...rij });
      return json(201, []);
    }
    if (tabel === "link_codes" && req.method() === "GET") return json(200, isOuder(req) ? Object.entries(store.codes).filter(([, c]) => c.parent === OUDER.id && !c.used).map(([code, c], i) => ({ id: `code-${i}`, code, child_name: c.child_name, expires_at: new Date(c.expires).toISOString(), used_at: null, created_at: new Date().toISOString() })) : []);
    if (tabel === "parent_child_links" && req.method() === "GET") return json(200, isOuder(req) ? store.links.filter((l) => l.parent === OUDER.id).map((l) => ({ id: l.id, child_name: l.child_name, verified: l.verified, groep: l.groep, parent_user_id: l.parent })) : []);
    if (req.method() === "GET") return json(200, []);
    if (req.method() === "HEAD") return route.fulfill({ status: 200, headers: { "content-range": "0-0/0" } });
    return json(201, []);
  });
}

/** Klok en schermafbeelding per stap. */
export function maakLog(map, prefix) {
  const regels = [];
  let t0 = Date.now();
  let nr = 0;
  return {
    regels,
    async stap(page, titel) {
      nr += 1;
      const sec = ((Date.now() - t0) / 1000).toFixed(1);
      const bestand = `${prefix}-${String(nr).padStart(2, "0")}.png`;
      await page.screenshot({ path: `${map}/${bestand}` });
      regels.push({ nr, titel, sec: Number(sec), bestand });
      t0 = Date.now();
    },
    notitie(t) { regels.push({ notitie: t }); },
  };
}

export const TELEFOON = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: "nl-NL" };
export const CHROMIUM = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
