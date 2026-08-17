// Park-galerij-repo (Mark 17 aug 2026): kinderen melden hun park OPT-IN aan om
// het openbaar te tonen. Anoniem — we bewaren alleen de deel-code, geen naam.
// Komt binnen als 'pending'; alleen de maker (Mark) zet 'm op 'approved'; publiek
// ziet alleen approved. RLS = zelfde patroon als de wishes-tabel (op e-mail).
// Tabel + policies: migration create_park_galerij.

import supabase from "../../supabase.js";

/** Meld je park aan voor de galerij (komt in de wachtrij). */
export async function meldParkAan({ shareCode, userId = null, profiel = null }) {
  if (!shareCode) return { ok: false };
  const { error } = await supabase.from("park_galerij").insert({
    share_code: shareCode,
    user_id: userId || null,
    profiel: (profiel || "").trim() || null,
    status: "pending",
  });
  // 23505 = unique-violation → al aangemeld; voor de gebruiker net zo goed "ok".
  if (error && error.code === "23505") return { ok: true, reeds: true };
  return { ok: !error, error };
}

/** Publiek: alle goedgekeurde parken (nieuwste eerst). */
export async function listApprovedParken() {
  const { data } = await supabase
    .from("park_galerij")
    .select("id, share_code, created_at")
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(200);
  return data || [];
}

/** Alleen de maker (RLS): parken die nog op goedkeuring wachten. */
export async function listPendingParken() {
  const { data } = await supabase
    .from("park_galerij")
    .select("id, share_code, created_at")
    .eq("status", "pending")
    .order("created_at", { ascending: true })
    .limit(200);
  return data || [];
}

/** Alleen de maker (RLS): keur goed ('approved') of verberg ('hidden'). */
export async function modereerPark(id, status) {
  const { error } = await supabase.from("park_galerij").update({ status }).eq("id", id);
  return { ok: !error, error };
}
