// Leaderboard-repo: Supabase-aanroepen op `leaderboard`-tabel.
// Geëxtraheerd uit App.jsx op 2026-05-06 (P3b deel 3).

import supabase from "../../supabase.js";
import { metLinkId } from "../../shared/koppeling.js";

// link_id erbij (2 sep 2026): op een gedeeld toestel (ouder + kind op één
// account) filtert App.jsx de uid-rijen op naam óf koppeling — anders kreeg
// het kind de toetsen van de ouder in z'n eigen voortgang.
const SYNC_COLS = "id, player_name, subject, level, topic, title, score, total, percentage, time_taken, quiz_id, cito_id, cito_groep, completed_at, link_id";

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
 * Bouw het per-vraag-detail voor de `detail`-kolom (Mark 1 sep 2026: ouder wil
 * per toets exact zien wat het kind antwoordde). Compact gehouden — teksten
 * afgekapt — omdat dit bij élke toets meegaat. gekozenIdxPerVraag[i] = index
 * van het gekozen antwoord voor vraag i, of null bij onbeantwoord.
 * Faalt stil naar null: het scorebord-resultaat zelf mag hier nooit op breken.
 */
export function bouwToetsDetail(questions, gekozenIdxPerVraag) {
  try {
    if (!Array.isArray(questions) || questions.length === 0) return null;
    return questions.map((q, i) => {
      const idx = Array.isArray(gekozenIdxPerVraag) ? gekozenIdxPerVraag[i] : null;
      const opties = Array.isArray(q?.options) ? q.options : [];
      const kort = (t, n) => (t == null ? null : String(t).slice(0, n));
      return {
        v: kort(q?.question, 200),
        a: idx != null ? kort(opties[idx], 120) : null,
        j: kort(opties[q?.answer], 120),
        goed: idx != null && idx === q?.answer,
        ond: (q?.refOnderdeel && q.refOnderdeel !== "geen" ? q.refOnderdeel : null) || q?.topic || null,
        pad: q?.leerpadLink?.id || null,
      };
    });
  } catch {
    return null;
  }
}

/**
 * Voeg een resultaat toe aan het globale scorebord. Fire-and-forget:
 * geen error die de UI breekt, maar wel best-effort logging via track.
 * Returnt { error } voor optionele logging.
 */
export async function insertLeaderboardEntry(row) {
  try {
    // Koppeling-identiteit (2 sep 2026): link_id meesturen als deze naam op dit
    // toestel gekoppeld is — de ouder leest dan op link_id i.p.v. voornaam.
    const { error } = await supabase.from("leaderboard").insert(metLinkId(row));
    return { error };
  } catch (err) {
    return { error: err };
  }
}
