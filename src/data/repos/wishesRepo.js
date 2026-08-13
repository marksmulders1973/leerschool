// Wishes-repo: openbaar "Tips aan de maker"-bord. Iedereen mag insturen
// (status 'pending'); publiek ziet alleen 'approved'. Moderatie (status
// wijzigen) kan alleen de admin (RLS op e-mail). Steun via support_wish-RPC.
// Tabel + policies: migration create_wishes_board (2026-06-02).

import supabase from "../../supabase.js";

/** Stuur een nieuwe tip of reactie in. Komt binnen als 'pending' (review). */
export async function submitWish({ message, rating = null, displayName = null, userId = null, parentId = null }) {
  const row = {
    message: String(message || "").trim().slice(0, 1500),
    rating: rating || null,
    display_name: (displayName || "").trim().slice(0, 40) || null,
    user_id: userId || null,
    parent_id: parentId || null,
    status: "pending",
    page_url: typeof window !== "undefined" ? window.location.href : null,
  };
  const { error } = await supabase.from("wishes").insert(row);
  return { ok: !error, error };
}

/** Alle goedgekeurde tips + reacties. Returnt { tops, repliesByParent }. */
export async function listApprovedWishes() {
  const { data } = await supabase
    .from("wishes")
    .select("*")
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(300);
  return splitTopsAndReplies(data || []);
}

/** Admin-only: alles wat nog op review wacht (tips + reacties). */
export async function listPendingWishes() {
  const { data } = await supabase
    .from("wishes")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: true })
    .limit(300);
  return data || [];
}

/** Admin-only: keur goed of wijs af. */
export async function moderateWish(id, status) {
  // Privacy (Mark 13 aug 2026): bij goedkeuren vervangen we de naam door
  // "gebruiker" — kindernamen horen niet publiek op het bord. In de
  // wachtrij (pending) ziet de maker de échte naam nog wél, zodat je weet
  // wie het vroeg. Maker-reacties gaan niet via deze functie ("De maker" blijft).
  const patch = status === "approved" ? { status, display_name: "gebruiker" } : { status };
  const { error } = await supabase.from("wishes").update(patch).eq("id", id);
  return { ok: !error, error };
}

/**
 * Admin-only: "Dank van de maker" onder een tip plaatsen. Verschijnt direct
 * (geen review) als gouden maker-reactie. Twee stappen omdat de publieke
 * insert-policy is_maker/approved niet toelaat: eerst als pending insturen,
 * dan via de admin-update-policy promoveren naar approved + is_maker.
 */
export async function addMakerThanks({ parentId, message }) {
  const m = String(message || "").trim().slice(0, 1500);
  if (m.length < 1 || !parentId) return { ok: false, error: new Error("leeg") };
  const { data, error } = await supabase
    .from("wishes")
    .insert({ message: m, parent_id: parentId, display_name: "De maker", status: "pending", is_maker: false })
    .select("id")
    .single();
  if (error) return { ok: false, error };
  const { error: e2 } = await supabase
    .from("wishes")
    .update({ status: "approved", is_maker: true })
    .eq("id", data.id);
  return { ok: !e2, error: e2 };
}

/** +1 steun via veilige RPC (alleen op goedgekeurde tips). */
export async function supportWish(id) {
  const { error } = await supabase.rpc("support_wish", { p_id: id });
  return { ok: !error, error };
}

function splitTopsAndReplies(rows) {
  const tops = [];
  const repliesByParent = {};
  for (const r of rows) {
    if (r.parent_id) {
      (repliesByParent[r.parent_id] = repliesByParent[r.parent_id] || []).push(r);
    } else {
      tops.push(r);
    }
  }
  // reacties oplopend (oudste eerst) onder elke tip
  for (const k of Object.keys(repliesByParent)) {
    repliesByParent[k].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  }
  return { tops, repliesByParent };
}
