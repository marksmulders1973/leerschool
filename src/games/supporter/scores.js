// Scorebord voor "Kikker Oversteek" (spel van de maand). Toont de topscores
// van de LOPENDE kalendermaand — past bij het tijdelijke maand-spel.
import supabase from "../../supabase.js";

function maandStartISO() {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), 1).toISOString(); // 1e v/d maand, lokale tijd
}

export async function laadTopSupporter(limit = 10) {
  try {
    const { data, error } = await supabase
      .from("supporter_scores")
      .select("player_name, score, created_at")
      .gte("created_at", maandStartISO())
      .order("score", { ascending: false })
      .order("created_at", { ascending: true })
      .limit(limit);
    if (error) return [];
    return (data || []).map((d) => ({ naam: d.player_name, score: d.score }));
  } catch {
    return [];
  }
}

export async function schrijfSupporterScore(naam, userId, score) {
  if (!score || score <= 0) return false;
  try {
    const { error } = await supabase.from("supporter_scores").insert({
      player_name: (naam || "Speler").slice(0, 24),
      user_id: userId || null,
      score,
    });
    return !error;
  } catch {
    return false;
  }
}
