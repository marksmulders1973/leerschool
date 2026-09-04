// 🔗 Kind-data lezen op koppeling-identiteit (stap 2, 2 sep 2026).
//
// Een koppeling (parent_child_links-rij) is de identiteit van het kind.
// Rijen die ná stap 1 zijn geschreven dragen `link_id`; oudere rijen niet.
// Daarom altijd twee bronnen samenvoegen:
//   A. link_id = koppeling.id                  (nieuw, waterdicht)
//   B. link_id is null + naam (+ child_user_id) (legacy, zoals voorheen)
// Zo verdwijnt er geen geschiedenis en lekken naamgenoten uit andere gezinnen
// alleen nog in B als de koppeling geen child_user_id heeft (was al zo).

import supabase from "../../supabase.js";

/**
 * Scores (leaderboard) voor één koppeling.
 * @param {object} link  parent_child_links-rij ({ id, child_name, child_user_id })
 * @param {object} opts  { select, subject?, limit? }
 */
export async function haalScoresVoorKind(link, { select, subject = null, limit = 50 } = {}) {
  if (!link?.child_name) return [];
  const bouw = () => {
    let q = supabase.from("leaderboard").select(select);
    if (subject) q = q.eq("subject", subject);
    return q;
  };
  const vragen = [];
  if (link.id) vragen.push(bouw().eq("link_id", link.id).order("completed_at", { ascending: false }).limit(limit));
  let legacy = bouw().is("link_id", null).eq("player_name", link.child_name);
  if (link.child_user_id) legacy = legacy.eq("user_id", link.child_user_id);
  vragen.push(legacy.order("completed_at", { ascending: false }).limit(limit));
  const res = await Promise.all(vragen);
  const rows = res.flatMap((r) => r.data || []);
  // Dedupliceren op id (voor het geval een rij in beide bronnen zit) + sorteren
  const seen = new Set();
  return rows
    .filter((r) => { const k = r.id ?? `${r.completed_at}|${r.subject}|${r.score}`; if (seen.has(k)) return false; seen.add(k); return true; })
    .sort((a, b) => new Date(b.completed_at) - new Date(a.completed_at))
    .slice(0, limit);
}

/**
 * 📚 Leerpad-voortgang voor één koppeling (Mark 4 sep 2026).
 *
 * Het ouder-overzicht las alleen `leaderboard` — dat vult zich pas bij een
 * afgeronde quiz. Een kind dat leerpad-stappen doet (begrijpend lezen, alinea's)
 * schrijft naar `learn_progress`, en dat werd nergens getoond: de ouder zag een
 * leeg overzicht terwijl er net een half uur gewerkt was.
 *
 * Zelfde twee-bronnen-truc als bij de scores: link_id (nieuw) + legacy op naam.
 * → Map van learn_path_id naar { stappen:Set, gedaan:n, laatste:Date, pogingen:n }
 */
export async function haalLeerpadVoortgangVoorKind(link, { limit = 400 } = {}) {
  if (!link?.child_name) return {};
  const kolommen = "id, learn_path_id, step_idx, attempts, completed_at";
  const vragen = [];
  if (link.id) {
    vragen.push(
      supabase.from("learn_progress").select(kolommen)
        .eq("link_id", link.id)
        .order("completed_at", { ascending: false }).limit(limit)
    );
  }
  let legacy = supabase.from("learn_progress").select(kolommen)
    .is("link_id", null).eq("player_name", link.child_name);
  if (link.child_user_id) legacy = legacy.eq("user_id", link.child_user_id);
  vragen.push(legacy.order("completed_at", { ascending: false }).limit(limit));

  const res = await Promise.all(vragen);
  const rijen = res.flatMap((r) => r.data || []);
  const perPad = {};
  const gezien = new Set();
  for (const r of rijen) {
    if (!r?.learn_path_id) continue;
    // Dezelfde stap kan meerdere keren gedaan zijn; tel 'm één keer.
    const sleutel = `${r.learn_path_id}|${r.step_idx}`;
    const nieuw = !gezien.has(sleutel);
    gezien.add(sleutel);
    const p = (perPad[r.learn_path_id] ||= { stappen: new Set(), pogingen: 0, laatste: null });
    p.stappen.add(r.step_idx);
    if (nieuw) p.pogingen += r.attempts || 1;
    const t = r.completed_at ? new Date(r.completed_at) : null;
    if (t && (!p.laatste || t > p.laatste)) p.laatste = t;
  }
  for (const p of Object.values(perPad)) p.gedaan = p.stappen.size;
  return perPad;
}
