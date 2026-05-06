// Obliterator — Supabase-score-laag.
// Geëxtraheerd uit ObliteratorGame.jsx op 2026-05-06 (P3b deel 2).

import supabase from "../../supabase.js";
import { TOP_LIMIT } from "./constants.js";
import { leesPendingScores, schrijfPendingScores, pushNaarPendingQueue } from "./storage.js";

export async function laadTopScores() {
  try {
    const { data, error } = await supabase
      .from("obliterator_scores")
      .select("player_name, score, level, created_at")
      .order("score", { ascending: false })
      .order("created_at", { ascending: true })
      .limit(TOP_LIMIT);
    if (error) return [];
    return (data || []).map(d => ({
      naam: d.player_name,
      score: d.score,
      level: d.level || null,
      datum: d.created_at?.slice(0, 10),
    }));
  } catch {
    return [];
  }
}

export async function schrijfScore(naam, userId, score, level) {
  if (!score || score <= 0) return;
  const payload = {
    player_name: (naam || "Speler").slice(0, 30),
    user_id: userId || null,
    score,
    level: level || null,
  };
  // Direct queue-en zodra offline; vermijdt onnodige network-call die zeker faalt.
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    pushNaarPendingQueue(payload);
    return;
  }
  try {
    const { error } = await supabase.from("obliterator_scores").insert(payload);
    if (error) throw error;
  } catch {
    // Network-failure of API-fout: bewaar lokaal en flush bij volgende online-moment.
    pushNaarPendingQueue(payload);
  }
}

export async function flushPendingScores() {
  if (typeof navigator !== "undefined" && navigator.onLine === false) return;
  const queue = leesPendingScores();
  if (!queue.length) return;
  const overgebleven = [];
  for (const item of queue) {
    try {
      const { error } = await supabase.from("obliterator_scores").insert({
        player_name: item.player_name,
        user_id: item.user_id,
        score: item.score,
        level: item.level,
      });
      if (error) overgebleven.push(item);
    } catch {
      overgebleven.push(item);
    }
  }
  schrijfPendingScores(overgebleven);
}
