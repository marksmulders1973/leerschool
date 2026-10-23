// 💬 Bericht van thuis (Mark 23 okt 2026, plan docs/PLAN-KOPPELING-WERKEND.md fase 2).
// Ouder of verzorger → kind, max 140 tekens. Tabel thuis_berichten (RLS: alleen de eigen koppeling);
// het kind leest via RPC berichten_van_thuis (link_id + naam van die koppeling, laatste 14 dagen).
import supabase from "../supabase.js";
import { track } from "../utils.js";
import { oudersVoor } from "./koppeling.js";
import { koppelNaam } from "../features/account/profielKoppeling.js";

export const MAX_BERICHT = 140;
export const BERICHT_EVENT = "lk-thuisbericht-changed";
// Kant-en-klare zinnen (Mark: "een paar kant-en-klare zinnen + zelf typen").
export const BERICHT_ZINNEN = [
  "Goed bezig! Ik ben trots op je.",
  "Doe je vandaag je kwartier?",
  "Ik heb iets voor je klaargezet.",
  "Knap dat je zo vaak oefent!",
  "Succes met je toets!",
];

const ping = () => { try { window.dispatchEvent(new CustomEvent(BERICHT_EVENT)); } catch { /* */ } };

/** Tekst schoonmaken: spaties, regeleinden, lengte. Leeg = null. */
export function schoonBericht(t) {
  const s = String(t || "").replace(/\s+/g, " ").trim().slice(0, MAX_BERICHT);
  return s || null;
}

// ── Ouder-kant (ingelogd, eigen koppeling) ──
export async function stuurBericht(linkId, tekst) {
  const t = schoonBericht(tekst);
  if (!linkId || !t) return { ok: false };
  const { error } = await supabase.from("thuis_berichten").insert({ link_id: linkId, tekst: t });
  if (error) return { ok: false, error };
  try { track("thuisbericht_verstuurd", { zin: BERICHT_ZINNEN.includes(t) }); } catch { /* */ }
  ping();
  return { ok: true };
}
export async function laatsteBerichtVoorLink(linkId) {
  if (!linkId) return null;
  const { data, error } = await supabase.from("thuis_berichten").select("id, tekst, created_at, gelezen_at")
    .eq("link_id", linkId).order("created_at", { ascending: false }).limit(1);
  if (error || !Array.isArray(data)) return null;
  return data[0] || null;
}

// ── Kind-kant ──
/** Berichten voor dit kind van álle ouder-koppelingen op dit toestel, nieuwste eerst, met wie het stuurde. */
export async function berichtenVoorKind(naam, linkIds = null) {
  const kind = String(naam || "").trim();
  const ouders = oudersVoor(kind);
  const ids = (linkIds || ouders.map((o) => o.link_id)).filter(Boolean).slice(-6);
  if (!kind || !ids.length) return [];
  const { data, error } = await supabase.rpc("berichten_van_thuis", { p_link_ids: ids, p_child_name: kind });
  if (error || !Array.isArray(data)) return [];
  const naamVoor = (id) => {
    const o = ouders.find((x) => x.link_id === id);
    return (o && koppelNaam(o.van_wie, o.voornaam)) || "thuis";
  };
  return data.map((b) => ({ ...b, van: naamVoor(b.link_id) })).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}
export async function markeerBerichtGelezen(id, naam) {
  if (!id || !naam) return false;
  const { data, error } = await supabase.rpc("bericht_gelezen", { p_id: id, p_child_name: String(naam).trim() });
  if (error) return false;
  try { track("thuisbericht_gelezen", {}); } catch { /* */ }
  ping();
  return !!data;
}
