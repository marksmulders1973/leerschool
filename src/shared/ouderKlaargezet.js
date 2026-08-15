// 💛 Ouder zet lessen klaar voor kind (Mark 15 aug 2026: "de ouder bladert
// door de app en drukt op het hartje bij iets wat zijn kind moet leren; dat
// komt dan bij het kind in een blok 'je ouder/verzorger heeft dit voor je
// klaargezet'"). Cross-device via Supabase.
//
// Vertrouwensmodel (bewust gelijk aan de rest van de kind-kant):
//  • OUDER schrijft geauthenticeerd, gewone RLS (tabel `ouder_klaargezet`,
//    policy: alleen eigen koppelingen — parent_user_id = auth.uid()).
//  • KIND is meestal niet ingelogd en leest op naam via SECURITY DEFINER-RPC's
//    (`kind_klaargezet` / `kind_klaargezet_gedaan`), net als de accept-banner
//    en het weekrapport. Alleen bevestigde koppelingen tellen mee.
//
// Bekende v1-grens: leest op naam. Twee gezinnen met een kind met dezelfde
// naam (beide bevestigd, beide kind gebruikt de app) zouden elkaars
// klaargezette lés-titels kunnen zien — lage gevoeligheid, gedocumenteerd.
// Precieze scoping op link_id (opgeslagen bij het koppelen) kan later.

import supabase from "../supabase.js";
import { track } from "../utils.js";

export const KLAARGEZET_EVENT = "lk-klaargezet-changed";

function pingKind() {
  try { window.dispatchEvent(new CustomEvent(KLAARGEZET_EVENT)); } catch { /* */ }
}

// ── Ouder-kant (geauthenticeerd, directe tabel via RLS) ─────────────────

/** Wat staat er voor deze koppeling al klaar? → [{ id, path_id, titel, emoji, gedaan }] */
export async function haalKlaargezetVoorLink(linkId) {
  if (!linkId) return [];
  const { data, error } = await supabase
    .from("ouder_klaargezet")
    .select("id, path_id, titel, emoji, gedaan, created_at")
    .eq("link_id", linkId)
    .order("created_at", { ascending: false });
  if (error) return [];
  return Array.isArray(data) ? data : [];
}

/** Zet een les klaar. item = { id: pathId, titel, emoji }. Idempotent (unique link_id+path_id). */
export async function zetKlaar(linkId, item) {
  if (!linkId || !item?.id) return { ok: false };
  const { error } = await supabase
    .from("ouder_klaargezet")
    .upsert(
      { link_id: linkId, path_id: item.id, titel: item.titel || null, emoji: item.emoji || "📘" },
      { onConflict: "link_id,path_id", ignoreDuplicates: true }
    );
  if (error) return { ok: false, error };
  try { track("ouder_zet_klaar", { pad: item.id }); } catch { /* */ }
  pingKind();
  return { ok: true };
}

/** Haal een klaargezette les weer weg (ouder tikt het hartje uit). */
export async function haalWeg(linkId, pathId) {
  if (!linkId || !pathId) return { ok: false };
  const { error } = await supabase
    .from("ouder_klaargezet")
    .delete()
    .eq("link_id", linkId)
    .eq("path_id", pathId);
  if (error) return { ok: false, error };
  try { track("ouder_zet_klaar", { pad: pathId, actie: "af" }); } catch { /* */ }
  pingKind();
  return { ok: true };
}

// ── Kind-kant (op naam, via SECURITY DEFINER-RPC) ───────────────────────

/** De lessen die iemand thuis voor dit kind klaarzette. → [{ id, path_id, titel, emoji, gedaan }] */
export async function haalKlaargezetVoorKind(kindNaam) {
  const naam = String(kindNaam || "").trim();
  if (!naam) return [];
  const { data, error } = await supabase.rpc("kind_klaargezet", { p_child_name: naam });
  if (error) return [];
  return Array.isArray(data) ? data : [];
}

/** Kind vinkt een klaargezette les af (of terug). */
export async function markeerGedaan(itemId, kindNaam, gedaan = true) {
  const naam = String(kindNaam || "").trim();
  if (!itemId || !naam) return { ok: false };
  const { error } = await supabase.rpc("kind_klaargezet_gedaan", {
    p_item_id: itemId, p_child_name: naam, p_gedaan: gedaan,
  });
  if (error) return { ok: false, error };
  try { track("kind_klaargezet_gedaan", { gedaan }); } catch { /* */ }
  pingKind();
  return { ok: true };
}
