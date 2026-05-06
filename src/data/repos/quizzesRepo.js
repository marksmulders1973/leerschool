// Quizzes-repo: alle Supabase-aanroepen op de `quizzes`-tabel.
// Geëxtraheerd uit App.jsx op 2026-05-06 (P3b deel 3).
//
// Houd error-handling defensive: deze repo wordt vanuit fire-and-forget
// callbacks aangeroepen, dus gooi nooit; geef bij failure een ge-shaped
// resultaat terug met `error` of een fallback.

import supabase from "../../supabase.js";

/**
 * Haal alle quizzes op die door een specifieke gebruiker zijn aangemaakt.
 * Gebruikt door de "Mijn opgeslagen toetsen"-sync zodat een quiz die op
 * één apparaat is gemaakt op een ander apparaat verschijnt.
 */
export async function loadQuizzesByCreator(userId) {
  if (!userId) return [];
  try {
    const { data, error } = await supabase
      .from("quizzes")
      .select("data")
      .eq("created_by", userId)
      .order("created_at", { ascending: false });
    if (error || !data?.length) return [];
    return data.map((row) => row.data).filter(Boolean);
  } catch {
    return [];
  }
}

/**
 * Sla een nieuwe quiz op in de centrale tabel zodat leerlingen via de
 * deelcode kunnen joinen. Returnt { error } voor de aanroeper om te tonen.
 */
export async function saveQuiz({ id, code, quiz, userId }) {
  try {
    const { error } = await supabase.from("quizzes").insert({
      id,
      code,
      data: quiz,
      ...(userId ? { created_by: userId } : {}),
    });
    return { error };
  } catch (err) {
    return { error: err };
  }
}

/**
 * Zoek een quiz op deelcode. Gebruikt door leerlingen die een code invullen.
 * Returnt het quiz-object of null als niet gevonden.
 */
export async function findQuizByCode(code) {
  if (!code) return null;
  try {
    const { data, error } = await supabase
      .from("quizzes")
      .select("data")
      .eq("code", code.toUpperCase())
      .single();
    if (error || !data) return null;
    return data.data;
  } catch {
    return null;
  }
}
