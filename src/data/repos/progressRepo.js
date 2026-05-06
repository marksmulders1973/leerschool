// Progress-repo: schrijft quiz-resultaten naar de `progress`-tabel.
// Geëxtraheerd uit App.jsx op 2026-05-06 (P3b deel 3).

import supabase from "../../supabase.js";

/**
 * Sla een afgeronde quiz op voor een ingelogde gebruiker.
 * Fire-and-forget: geen errors die de UI breken.
 */
export async function insertProgress({ userId, subject, level, score, total, percentage }) {
  if (!userId) return;
  try {
    await supabase.from("progress").insert({
      user_id: userId,
      subject,
      level,
      score,
      total,
      percentage,
    });
  } catch {}
}
