// 🧭 Opslag van de nulmeting en de gekozen voorstellen (prototype, 7 okt 2026).
//
// Elk blok wordt apart bewaard zodra het af is — ook als het kind daarna stopt.
//  1. Altijd lokaal: localStorage "lk_nulmeting" = { "<naam lower>": { groep, blokken: {1:{...}} } }
//  2. Is het kind gekoppeld (link_id op dit apparaat), dan óók op de server via
//     de RPC nulmeting_bewaar_blok. Daardoor kan het kind op een ander
//     gekoppeld apparaat (eigen telefoon, schoolcomputer) verder bij het blok
//     dat nog openstaat (nulmeting_stand).
//
// ⚠️ De server-RPC's bestaan nog NIET op de live database. Het voorstel staat
// in docs/audit/ouderadvies/VOORSTEL-migratie-ouderadvies.sql.
// Zolang die er niet is, geeft supabase "function not found" en valt dit
// bestand netjes terug op alleen-lokaal (server: "niet-beschikbaar").
//
// De gekozen voorstellen van de ouder of verzorger gaan via de bestaande
// klaarzet-tabel (ouder_klaargezet, zetKlaar) als er een ouder-account is;
// zonder account (zelfde apparaat) bewaren we ze lokaal per kind.

import supabase from "../../../supabase.js";
import { linkIdVoor } from "../../../shared/koppeling.js";

const KEY = "lk_nulmeting";
const KEUZE_KEY = "lk_ouderadvies_keuzes";
export const NULMETING_EVENT = "lk-nulmeting-changed";

const sleutel = (naam) => String(naam || "").trim().toLowerCase();
const leesJson = (k) => { try { return JSON.parse(localStorage.getItem(k) || "{}") || {}; } catch { return {}; } };
const schrijfJson = (k, v) => {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* vol of geblokkeerd */ }
  try { window.dispatchEvent(new CustomEvent(NULMETING_EVENT)); } catch { /* */ }
};

const bestaatNiet = (error) => !!error && (error.code === "PGRST202" || error.code === "42883" || /could not find the function|does not exist/i.test(error.message || ""));

/** Lokale stand voor deze naam: { groep, blokken } */
export function leesLokaal(naam) {
  const v = leesJson(KEY)[sleutel(naam)];
  return { groep: v?.groep || null, blokken: v?.blokken || {} };
}

function schrijfLokaal(naam, groep, blok) {
  const alles = leesJson(KEY);
  const k = sleutel(naam);
  const oud = alles[k] || { blokken: {} };
  alles[k] = { groep: groep || oud.groep || null, blokken: { ...(oud.blokken || {}), [blok.blok]: blok } };
  schrijfJson(KEY, alles);
}

/** Blok bewaren. → { lokaal: true, server: true | false | "niet-beschikbaar" | "niet-gekoppeld" } */
export async function bewaarBlok(naam, groep, blok) {
  schrijfLokaal(naam, groep, blok);
  const linkId = linkIdVoor(naam);
  if (!linkId) return { lokaal: true, server: "niet-gekoppeld" };
  try {
    const { error } = await supabase.rpc("nulmeting_bewaar_blok", {
      p_link_id: linkId,
      p_blok: blok.blok,
      p_groep: String(groep || ""),
      p_uitslag: blok,
    });
    if (bestaatNiet(error)) return { lokaal: true, server: "niet-beschikbaar" };
    return { lokaal: true, server: !error };
  } catch {
    return { lokaal: true, server: false };
  }
}

/** Stand ophalen: lokaal + (als gekoppeld) server, per blok de nieuwste. */
export async function haalStand(naam) {
  const lokaal = leesLokaal(naam);
  const linkId = linkIdVoor(naam);
  if (!linkId) return { ...lokaal, server: "niet-gekoppeld" };
  try {
    const { data, error } = await supabase.rpc("nulmeting_stand", { p_link_id: linkId });
    if (bestaatNiet(error)) return { ...lokaal, server: "niet-beschikbaar" };
    if (error || !Array.isArray(data)) return { ...lokaal, server: false };
    const blokken = { ...lokaal.blokken };
    let groep = lokaal.groep;
    for (const r of data) {
      const b = r?.uitslag;
      if (!b?.blok) continue;
      const hier = blokken[b.blok];
      if (!hier || String(hier.klaarOp || "") < String(b.klaarOp || "")) blokken[b.blok] = b;
      groep = groep || r.groep || null;
    }
    // Wat van de server kwam ook lokaal zetten, zodat het offline blijft staan.
    for (const b of Object.values(blokken)) if (!lokaal.blokken[b.blok]) schrijfLokaal(naam, groep, b);
    return { groep, blokken, server: true };
  } catch {
    return { ...lokaal, server: false };
  }
}

/** Ouder-kant met account: stand van een gekoppeld kind op link_id. */
export async function haalStandOuder(linkId) {
  if (!linkId) return { blokken: {}, server: "niet-gekoppeld" };
  try {
    const { data, error } = await supabase.rpc("nulmeting_stand_ouder", { p_link_id: linkId });
    if (bestaatNiet(error)) return { blokken: {}, server: "niet-beschikbaar" };
    if (error || !Array.isArray(data)) return { blokken: {}, server: false };
    const blokken = {};
    for (const r of data) if (r?.uitslag?.blok) blokken[r.uitslag.blok] = r.uitslag;
    return { blokken, server: true };
  } catch {
    return { blokken: {}, server: false };
  }
}

// ── Keuzes (wat de ouder "goed zo" vond) — lokaal, voor het zelfde-apparaat-geval ──

/** → [{ padId, titel, emoji, blok, vak, at }] */
export function leesKeuzes(naam) {
  const v = leesJson(KEUZE_KEY)[sleutel(naam)];
  return Array.isArray(v) ? v : [];
}
export function bewaarKeuzes(naam, keuzes) {
  const alles = leesJson(KEUZE_KEY);
  alles[sleutel(naam)] = keuzes.map((k) => ({ padId: k.padId, titel: k.titel, emoji: k.emoji, blok: k.blok, vak: k.vak, at: k.at || Date.now() }));
  schrijfJson(KEUZE_KEY, alles);
}

/** Alles van dit kind op dit apparaat vergeten (schoolcomputer: "vergeet mij"). */
export function vergeetLokaal(naam) {
  const k = sleutel(naam);
  for (const key of [KEY, KEUZE_KEY]) {
    const alles = leesJson(key);
    if (alles[k]) { delete alles[k]; schrijfJson(key, alles); }
  }
}
