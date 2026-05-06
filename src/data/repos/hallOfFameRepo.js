// Hall-of-Fame repo: insert + top-N-bewaking voor `hall_of_fame`-tabel.
// Geëxtraheerd uit App.jsx op 2026-05-06 (P3b deel 3).

import supabase from "../../supabase.js";

const KEEP_TOP_N = 5;

/**
 * Registreer een 100%-score in de Hall of Fame. Schrijft de rij weg en
 * verwijdert daarna alles buiten de top-N (op basis van time_taken oplopend).
 *
 * Fire-and-forget: geen errors gooien — Hall of Fame is een nice-to-have,
 * niet een blocker voor de quiz-flow.
 */
export async function recordPerfectScore({ subject, level, playerName, timeTaken, completedAt, questions }) {
  try {
    await supabase.from("hall_of_fame").insert({
      subject,
      level,
      player_name: playerName,
      time_taken: timeTaken,
      percentage: 100,
      completed_at: completedAt,
      questions,
    });
    const { data: rows } = await supabase
      .from("hall_of_fame")
      .select("id, time_taken")
      .eq("subject", subject)
      .eq("level", level)
      .order("time_taken", { ascending: true });
    if (rows && rows.length > KEEP_TOP_N) {
      const toDelete = rows.slice(KEEP_TOP_N).map(r => r.id);
      await supabase.from("hall_of_fame").delete().in("id", toDelete);
    }
  } catch {
    // best-effort, log nooit naar UI
  }
}
