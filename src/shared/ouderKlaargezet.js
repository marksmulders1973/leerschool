// 💛 Klaargezette lessen — ouder→kind én leerkracht→leerling (Mark 15 aug 2026).
// Cross-device via Supabase, twee bronnen met identiek patroon:
//   bron "ouder"  → tabel ouder_klaargezet  (koppeling parent_child_links)
//   bron "leraar" → tabel leraar_klaargezet (koppeling leraar_leerling_links)
//
// Vertrouwensmodel (gelijk aan de rest van de kind-kant):
//  • VOLWASSENE (ouder/leerkracht) schrijft geauthenticeerd via gewone RLS
//    (policy: alleen eigen koppelingen — parent_user_id/teacher_user_id = auth.uid()).
//  • KIND/LEERLING is meestal niet ingelogd en leest op naam via SECURITY
//    DEFINER-RPC's (`voor_jou_klaargezet` bundelt beide bronnen). Alleen
//    bevestigde koppelingen tellen mee.
//
// Bekende v1-grens: leest op naam. Twee koppelingen met een gelijknamig kind
// zouden elkaars lés-titels kunnen zien — lage gevoeligheid, gedocumenteerd.

import supabase from "../supabase.js";
import { track } from "../utils.js";
import { linkIdVoor } from "./koppeling.js";

export const KLAARGEZET_EVENT = "lk-klaargezet-changed";
const TABEL = { ouder: "ouder_klaargezet", leraar: "leraar_klaargezet" };

function pingKind() {
  try { window.dispatchEvent(new CustomEvent(KLAARGEZET_EVENT)); } catch { /* */ }
}

function maakCode() {
  // Zelfde alfabet als de ouder-koppelcode: zonder verwarrende tekens (0/O, 1/I/L).
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("");
}

// ── Volwassen-kant (ouder of leerkracht), geauthenticeerd via RLS ───────

/** Wat staat er voor deze koppeling al klaar? bron = "ouder" | "leraar". */
export async function haalKlaargezetVoorLink(linkId, bron = "ouder") {
  if (!linkId) return [];
  const { data, error } = await supabase
    .from(TABEL[bron] || TABEL.ouder)
    .select("id, path_id, titel, emoji, gedaan, created_at")
    .eq("link_id", linkId)
    .order("created_at", { ascending: false });
  if (error) return [];
  return Array.isArray(data) ? data : [];
}

/** Zet een les klaar. item = { id: pathId, titel, emoji }. Idempotent. */
export async function zetKlaar(linkId, item, bron = "ouder") {
  if (!linkId || !item?.id) return { ok: false };
  const { error } = await supabase
    .from(TABEL[bron] || TABEL.ouder)
    .upsert(
      { link_id: linkId, path_id: item.id, titel: item.titel || null, emoji: item.emoji || "📘" },
      { onConflict: "link_id,path_id", ignoreDuplicates: true }
    );
  if (error) return { ok: false, error };
  try { track("volwassen_zet_klaar", { pad: item.id, bron }); } catch { /* */ }
  pingKind();
  return { ok: true };
}

/** Haal een klaargezette les weer weg. */
export async function haalWeg(linkId, pathId, bron = "ouder") {
  if (!linkId || !pathId) return { ok: false };
  const { error } = await supabase
    .from(TABEL[bron] || TABEL.ouder)
    .delete()
    .eq("link_id", linkId)
    .eq("path_id", pathId);
  if (error) return { ok: false, error };
  try { track("volwassen_zet_klaar", { pad: pathId, bron, actie: "af" }); } catch { /* */ }
  pingKind();
  return { ok: true };
}

// ── Kind/leerling-kant (op naam, via SECURITY DEFINER-RPC) ──────────────

/** Alles wat thuis én op school voor dit kind klaarstaat. Elk item heeft `bron`. */
export async function haalKlaargezetVoorKind(kindNaam) {
  const naam = String(kindNaam || "").trim();
  if (!naam) return [];
  // Stap 2 (2 sep 2026): op link_id als dit toestel gekoppeld is — dan tellen
  // naamgenoten niet meer mee; zonder link_id valt de RPC terug op naam(+uid).
  const { data, error } = await supabase.rpc("voor_jou_klaargezet", { p_student_name: naam, p_link_id: linkIdVoor(naam) });
  if (error) return [];
  return Array.isArray(data) ? data : [];
}

/** Kind/leerling vinkt een les af (of terug). bron bepaalt welke RPC. */
export async function markeerGedaan(itemId, kindNaam, gedaan = true, bron = "ouder") {
  const naam = String(kindNaam || "").trim();
  if (!itemId || !naam) return { ok: false };
  const rpc = bron === "leraar" ? "leerling_klaargezet_gedaan" : "kind_klaargezet_gedaan";
  const args = bron === "leraar"
    ? { p_item_id: itemId, p_student_name: naam, p_gedaan: gedaan }
    : { p_item_id: itemId, p_child_name: naam, p_gedaan: gedaan, p_link_id: linkIdVoor(naam) };
  const { error } = await supabase.rpc(rpc, args);
  if (error) return { ok: false, error };
  try { track("klaargezet_gedaan", { gedaan, bron }); } catch { /* */ }
  pingKind();
  return { ok: true };
}

// ── Leerkracht: leerling koppelen (spiegel van de ouder-uitnodiging) ────

/** Maak een 48u-koppelcode voor een leerling. → { ok, code }. */
export async function koppelLeerlingCode(teacherId, studentName) {
  const naam = String(studentName || "").trim();
  if (!teacherId || !naam) return { ok: false };
  const code = maakCode();
  const expires = new Date(Date.now() + 48 * 3600 * 1000).toISOString();
  // link_codes.child_name is NOT NULL en dient hier als leerling-naam.
  const { error } = await supabase.from("link_codes").insert({
    code, teacher_user_id: teacherId, child_name: naam, expires_at: expires,
  });
  if (error) return { ok: false, error };
  try { track("leraar_koppel_code", {}); } catch { /* */ }
  return { ok: true, code };
}

/** Openstaande (nog niet gebruikte) koppelcodes van deze leerkracht — voor de
 * "wacht op je leerling"-kaarten. Zelfde model als de ouder-kant (30 aug):
 * de code leeft in link_codes tot de leerling 'm claimt (used_at) of hij
 * verloopt; zo overleeft een verse code ook een pagina-herlaad. */
export async function haalOpenLeerlingCodes(teacherId) {
  if (!teacherId) return [];
  const { data, error } = await supabase
    .from("link_codes")
    .select("id, code, child_name, expires_at, created_at")
    .eq("teacher_user_id", teacherId)
    .is("used_at", null)
    .order("created_at", { ascending: true });
  if (error) return [];
  const nu = Date.now();
  return (data || []).filter((iv) => !iv.expires_at || new Date(iv.expires_at).getTime() > nu);
}

/** Openstaande code intrekken (typefout / niet meer nodig). */
export async function trekLeerlingCodeIn(id) {
  if (!id) return;
  await supabase.from("link_codes").delete().eq("id", id);
}

/** Gekoppelde leerlingen van deze leerkracht (bevestigd + wachtend). */
export async function haalGekoppeldeLeerlingen(teacherId) {
  if (!teacherId) return [];
  const { data, error } = await supabase
    .from("leraar_leerling_links")
    .select("id, student_name, verified, created_at")
    .eq("teacher_user_id", teacherId)
    .order("created_at", { ascending: true });
  if (error) return [];
  return Array.isArray(data) ? data : [];
}

/** Overzicht per bevestigde leerling: hoeveel klaargezet en hoeveel gedaan.
 * → [{ id, student_name, totaal, gedaan }]. Voor het leerkracht-overzicht +
 * een deelbaar rapportje (Mark 15 aug: "alle kinderen + voortgang doorsturen"). */
export async function haalLeerlingOverzicht(teacherId) {
  const leerlingen = (await haalGekoppeldeLeerlingen(teacherId)).filter((l) => l.verified);
  if (leerlingen.length === 0) return [];
  const ids = leerlingen.map((l) => l.id);
  const { data } = await supabase
    .from("leraar_klaargezet")
    .select("link_id, gedaan")
    .in("link_id", ids);
  const per = {};
  (data || []).forEach((r) => {
    if (!per[r.link_id]) per[r.link_id] = { totaal: 0, gedaan: 0 };
    per[r.link_id].totaal += 1;
    if (r.gedaan) per[r.link_id].gedaan += 1;
  });
  return leerlingen.map((l) => ({
    id: l.id, student_name: l.student_name,
    totaal: per[l.id]?.totaal || 0, gedaan: per[l.id]?.gedaan || 0,
  }));
}
