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

// Start van vandaag, 00:00 LOKALE tijd (NL). Bewust niet UTC: een kind dat
// 23:30 NL speelt viel met UTC al in 'morgen' → dag-bord-bug (15-agent-review
// 2026-06-07, QA + Critical Reviewer). new Date(y,m,d) = lokale middernacht;
// .toISOString() rekent dat correct om naar UTC voor de query.
function dagStartISO() {
  const nu = new Date();
  return new Date(nu.getFullYear(), nu.getMonth(), nu.getDate()).toISOString();
}

// Start van deze week (maandag 00:00 lokale tijd).
function weekStartISO() {
  const nu = new Date();
  const dag = (nu.getDay() + 6) % 7; // ma=0 ... zo=6
  const maandag = new Date(nu.getFullYear(), nu.getMonth(), nu.getDate() - dag);
  return maandag.toISOString();
}

async function laadTopScoresVanaf(vanafISO) {
  try {
    const { data, error } = await supabase
      .from("obliterator_scores")
      .select("player_name, score, level, created_at")
      .gte("created_at", vanafISO)
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

// Daily-leaderboard: alleen scores van vandaag (lokale daggrens).
// 2026-05-18 Mark wens: 'extra scorebord — 1 dag record (10) + all-time (10)'.
export async function laadTopScoresVandaag() {
  return laadTopScoresVanaf(dagStartISO());
}

// Week-leaderboard (15-agent-review 2026-06-07): vers genoeg om haalbaar te
// voelen, breed genoeg om op een rustige dag tóch gevuld te zijn.
export async function laadTopScoresWeek() {
  return laadTopScoresVanaf(weekStartISO());
}

// Unieke run-sleutel zodat een dubbel-geflushte offline-score niet als twee
// topscores binnenkomt (DB-index uniq_obliterator_client_key dedupliceert).
// 2026-06-07 — hoort bij migratie 20260607_obliterator_hardening.sql (Fix 3).
function maakClientKey() {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  } catch { /* ignore */ }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export async function schrijfScore(naam, userId, score, level) {
  if (!score || score <= 0) return;
  const payload = {
    player_name: (naam || "Speler").slice(0, 30),
    user_id: userId || null,
    score,
    level: level || null,
    client_key: maakClientKey(),
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
        client_key: item.client_key || maakClientKey(),
      });
      // 23505 = unique_violation = deze score is al binnen (dubbele flush) → als
      // 'verwerkt' beschouwen, niet opnieuw in de wachtrij houden.
      if (error && error.code !== "23505") overgebleven.push(item);
    } catch {
      overgebleven.push(item);
    }
  }
  schrijfPendingScores(overgebleven);
}
