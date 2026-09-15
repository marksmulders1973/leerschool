// 💾 Wekelijkse export van de productie-database naar buiten Supabase.
//
// Mark 15 sep 2026: "stel dat de app een succes wordt — hoe groot is de kans dat
// Claude per ongeluk alles wist?" Code en uitrollen zijn veilig (git + Vercel-
// geschiedenis), maar de database op het gratis Supabase-plan heeft géén back-up.
// Eén verkeerde delete was tot vandaag onomkeerbaar. Dit maakt het ergste geval
// "een week kwijt" in plaats van "alles kwijt".
//
// Wat: álle tabellen uit het PostgREST-schema (behalve `events` — analytics, te
// groot, en views op *_echt), plus de login-lijst uit auth (id/e-mail/datums;
// wachtwoorden zijn nooit exporteerbaar). Alles als één json.gz-bijlage per mail
// naar Mark (hotmail + gmail — dezelfde plek als de recovery-mail).
//
// Hoe: lift mee op de dagelijkse cron van send-weekly-lesmateriaal (zondag, of
// handmatig ?backup=1). Geen eigen cron/functie: Hobby staat maar 2 crons toe en
// api/ zit aan de bundel-limiet.
//
// Terugzetten: json uitpakken → per tabel `insert` via Supabase (volgorde: profiles,
// partner_codes, dan de rest). Stappenplan in docs/recovery/RECOVERY-PLAN.md.
import { gzipSync } from "node:zlib";

const OVERSLAAN = new Set(["events"]);         // te groot en puur analytics
const PAGINA = 1000;
const MAX_RIJEN_PER_TABEL = 60000;             // vangnet tegen een tabel die ontploft
const MAX_BIJLAGE_BYTES = 30 * 1024 * 1024;    // Resend-plafond is 40 MB; marge houden

async function haalTabellen(base, key) {
  // PostgREST publiceert een OpenAPI-document op de root; daarin staan alle tabellen én views.
  const r = await fetch(`${base}/rest/v1/`, { headers: { apikey: key, Authorization: `Bearer ${key}` } });
  if (!r.ok) throw new Error(`schema ophalen mislukt: http ${r.status}`);
  const spec = await r.json();
  const namen = Object.keys(spec.definitions || {});
  return namen.filter((n) => !OVERSLAAN.has(n) && !n.endsWith("_echt") && !n.startsWith("pg_"));
}

async function haalRijen(base, key, tabel) {
  const uit = [];
  let van = 0, afgekapt = false;
  for (;;) {
    const r = await fetch(`${base}/rest/v1/${encodeURIComponent(tabel)}?select=*&order=created_at.asc.nullsfirst`, {
      headers: { apikey: key, Authorization: `Bearer ${key}`, Range: `${van}-${van + PAGINA - 1}`, "Range-Unit": "items" },
    });
    if (r.status === 416) break;                   // buiten bereik = klaar
    if (!r.ok) {
      // geen created_at-kolom? nog één keer zonder ordening
      const r2 = await fetch(`${base}/rest/v1/${encodeURIComponent(tabel)}?select=*`, {
        headers: { apikey: key, Authorization: `Bearer ${key}`, Range: `${van}-${van + PAGINA - 1}`, "Range-Unit": "items" },
      });
      if (r2.status === 416) break;
      if (!r2.ok) throw new Error(`${tabel}: http ${r2.status}`);
      const deel2 = await r2.json();
      uit.push(...deel2);
      if (deel2.length < PAGINA) break;
    } else {
      const deel = await r.json();
      uit.push(...deel);
      if (deel.length < PAGINA) break;
    }
    van += PAGINA;
    if (uit.length >= MAX_RIJEN_PER_TABEL) { afgekapt = true; break; }
  }
  return { rijen: uit, afgekapt };
}

async function haalAuthUsers(base, key) {
  // GoTrue admin-API: alleen wat nodig is om gezinnen terug te vinden (geen wachtwoorden — die bestaan niet als export).
  const uit = [];
  for (let page = 1; page <= 50; page++) {
    const r = await fetch(`${base}/auth/v1/admin/users?page=${page}&per_page=1000`, { headers: { apikey: key, Authorization: `Bearer ${key}` } });
    if (!r.ok) return { users: uit, fout: `auth http ${r.status}` };
    const j = await r.json();
    const lijst = Array.isArray(j.users) ? j.users : [];
    for (const u of lijst) uit.push({ id: u.id, email: u.email, created_at: u.created_at, last_sign_in_at: u.last_sign_in_at, provider: u.app_metadata?.provider || null });
    if (lijst.length < 1000) break;
  }
  return { users: uit, fout: null };
}

/** Maakt de export en mailt hem. Geeft { ok, tabellen, rijen, bytes, fouten } terug; gooit nooit de hoofdtaak om. */
export async function maakDatabaseBackup({ base, key, resend, from, naar, cc = [] }) {
  const fouten = [];
  const gemaakt = new Date().toISOString();
  const tabellen = await haalTabellen(base, key);
  const inhoud = { gemaakt, bron: base, tabellen: {}, auth_users: [], overgeslagen: [...OVERSLAAN], fouten };
  let totaal = 0;
  for (const t of tabellen) {
    try {
      const { rijen, afgekapt } = await haalRijen(base, key, t);
      inhoud.tabellen[t] = { rijen: rijen.length, afgekapt, data: rijen };
      totaal += rijen.length;
    } catch (e) { fouten.push(`${t}: ${e.message}`); inhoud.tabellen[t] = { rijen: 0, fout: e.message, data: [] }; }
  }
  const auth = await haalAuthUsers(base, key);
  inhoud.auth_users = auth.users; if (auth.fout) fouten.push(auth.fout);

  const json = JSON.stringify(inhoud);
  const gz = gzipSync(Buffer.from(json, "utf8"));
  const datum = gemaakt.slice(0, 10);
  const bestand = `leerkwartier-database-${datum}.json.gz`;
  const teGroot = gz.length > MAX_BIJLAGE_BYTES;

  const regels = Object.entries(inhoud.tabellen).map(([n, v]) => `${n}: ${v.rijen}${v.afgekapt ? " (afgekapt)" : ""}${v.fout ? " ⚠️ " + v.fout : ""}`);
  const tekst = [
    `Wekelijkse database-export van Leerkwartier — ${datum}`,
    ``,
    `Bewaar deze mail (of de bijlage) buiten Supabase. Dit is de enige kopie van de productie-data.`,
    `Terugzetten: zie docs/recovery/RECOVERY-PLAN.md § database.`,
    ``,
    `Tabellen: ${tabellen.length} · rijen: ${totaal} · logins: ${auth.users.length} · bijlage: ${(gz.length / 1024).toFixed(0)} kB (gzip)`,
    teGroot ? `⚠️ Bijlage te groot voor mail (${(gz.length / 1048576).toFixed(1)} MB) — niet meegestuurd; vergroot MAX_BIJLAGE_BYTES of splits.` : ``,
    fouten.length ? `⚠️ Fouten: ${fouten.join(" · ")}` : `Geen fouten.`,
    ``,
    ...regels,
    ``,
    `Niet in deze export: events (analytics), wachtwoorden (bestaan niet als export), bestanden in storage, .env-secrets.`,
  ].join("\n");

  const body = {
    from, to: [naar], cc,
    subject: `💾 Database-back-up Leerkwartier ${datum} — ${totaal} rijen, ${tabellen.length} tabellen${fouten.length ? " ⚠️" : ""}`,
    text: tekst,
    attachments: teGroot ? [] : [{ filename: bestand, content: gz.toString("base64") }],
  };
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST", headers: { Authorization: `Bearer ${resend}`, "Content-Type": "application/json" }, body: JSON.stringify(body),
  });
  if (!r.ok) { const txt = await r.text().catch(() => ""); fouten.push(`mail: http ${r.status} ${txt.slice(0, 120)}`); }
  return { ok: r.ok && !teGroot, tabellen: tabellen.length, rijen: totaal, logins: auth.users.length, bytes: gz.length, teGroot, fouten };
}
