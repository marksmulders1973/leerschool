// Leaderboard-repo: Supabase-aanroepen op `leaderboard`-tabel.
// Geëxtraheerd uit App.jsx op 2026-05-06 (P3b deel 3).

import supabase from "../../supabase.js";

const SYNC_COLS = "id, player_name, subject, level, topic, title, score, total, percentage, time_taken, quiz_id, cito_id, cito_groep, completed_at";

/**
 * Sync van leaderboard naar lokale studentProgress: zorgt dat levels/voortgang
 * weer verschijnen na herinstall of domein-migratie (localStorage is per-origin;
 * Supabase user_id overleeft).
 *
 * Twee aparte queries (PostgREST `.or()` met escape gaf parse-issues):
 *   1) Alle rijen voor authUser.id (recente, ondubbelzinnig)
 *   2) Alle rijen voor player_name (case-insensitive) — vangt legacy rijen
 *      zonder user_id én rijen onder andere session-id (anonymous-session
 *      reset bij domein-migratie).
 *
 * Returnt array van rijen (kan duplicaten bevatten — caller moet dedup'en
 * op completedAt+subject+level+score+total).
 */
export async function loadLeaderboardForPlayer({ userId, playerName, limit = 500 }) {
  const naam = (playerName || "").trim();
  const queries = [];
  if (userId) {
    queries.push(
      supabase.from("leaderboard").select(SYNC_COLS).eq("user_id", userId)
        .order("completed_at", { ascending: false }).limit(limit)
    );
  }
  if (naam.length >= 2) {
    queries.push(
      supabase.from("leaderboard").select(SYNC_COLS).ilike("player_name", naam)
        .order("completed_at", { ascending: false }).limit(limit)
    );
  }
  if (queries.length === 0) return [];
  try {
    const responses = await Promise.all(queries);
    return responses.flatMap((r) => r.data || []);
  } catch {
    return [];
  }
}

/**
 * Voeg een resultaat toe aan het globale scorebord. Fire-and-forget:
 * geen error die de UI breekt, maar wel best-effort logging via track.
 * Returnt { error } voor optionele logging.
 */
export async function insertLeaderboardEntry(row) {
  try {
    const { error } = await supabase.from("leaderboard").insert(row);
    return { error };
  } catch (err) {
    return { error: err };
  }
}
