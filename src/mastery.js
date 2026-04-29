// Mastery-systeem: per leerling × per leerpad (= onderwerp) tellen we
// hoeveel vragen ze hebben gedaan en hoeveel goed waren. Daaruit volgt
// een mastery-niveau: nog niet gemeten / brons / zilver / goud.
//
// Eenheid: pad-id (uit ALL_LEARN_PATHS). Vragen worden via QUESTION_PATH_MAP
// gekoppeld aan een pad. Vragen waarvan we het pad niet weten → niet meegeteld.
//
// Interactie met `learn_progress` tabel: die tracked welke leerpad-stap
// is afgerond. `topic_mastery` is iets anders: het tracked toets-prestatie
// per onderwerp. Samen vormen ze de hand-in-hand-loop.

import supabase from "./supabase.js";
import { QUESTION_PATH_MAP } from "./learnPaths/questionPathMap.generated.js";
import { ALL_LEARN_PATHS } from "./learnPaths/index.js";

const MIN_ATTEMPTS_FOR_LEVEL = 5; // hoeveel pogingen vóór we een niveau toekennen

// Bepaal mastery-niveau op basis van aantal pogingen + correct%.
// Returnt: 'unmeasured' | 'bronze' | 'silver' | 'gold'
export function getMasteryLevel(attempts, correct) {
  if (!attempts || attempts < MIN_ATTEMPTS_FOR_LEVEL) return "unmeasured";
  const pct = correct / attempts;
  if (pct >= 0.90 && attempts >= 10) return "gold";
  if (pct >= 0.70) return "silver";
  return "bronze";
}

export const MASTERY_LABELS = {
  unmeasured: { label: "In opbouw", emoji: "🌱", color: "#8899aa" },
  bronze: { label: "Brons", emoji: "🥉", color: "#cd7f32" },
  silver: { label: "Zilver", emoji: "🥈", color: "#c0c0c0" },
  gold: { label: "Goud", emoji: "🥇", color: "#ffd700" },
};

// Zoek pathId voor een vraag-tekst (uit pre-getagde map).
// Returnt null als de vraag niet getagd is.
export function pathIdForQuestion(questionText) {
  if (!questionText) return null;
  const entry = QUESTION_PATH_MAP[questionText];
  return entry?.pathId || null;
}

// Schrijf één antwoord weg in `topic_mastery`. Gebruikt upsert: bestaat de
// (player, path) al, dan attempts + correct ophogen; anders rij aanmaken.
// Returnt de nieuwe (attempts, correct) of null bij failure.
//
// Twee varianten:
//   - recordAnswer({ playerName, questionText, isCorrect }) — leidt het pad
//     af uit QUESTION_PATH_MAP (voor hardcoded vragen uit constants.js).
//     Geen tag → returnt null en doet niets.
//   - recordAnswerForPath({ playerName, pathId, isCorrect }) — directe
//     versie die pathId expliciet meekrijgt (voor AI-gegenereerde
//     mini-quiz-vragen na een leerpad-stap).
export async function recordAnswer({ playerName, questionText, isCorrect, userId = null }) {
  const player = (playerName || "").trim();
  if (!player) return null;
  const pathId = pathIdForQuestion(questionText);
  if (!pathId) return null; // geen tag → niets te tellen

  try {
    // Eerst lezen, dan upsert. Niet ideaal qua atomiciteit maar
    // wel simpel + voldoende voor één-leerling-per-sessie.
    const { data: existing } = await supabase
      .from("topic_mastery")
      .select("attempts, correct")
      .eq("player_name", player)
      .eq("path_id", pathId)
      .maybeSingle();

    const attempts = (existing?.attempts || 0) + 1;
    const correct = (existing?.correct || 0) + (isCorrect ? 1 : 0);

    const row = {
      player_name: player,
      path_id: pathId,
      attempts,
      correct,
      last_seen: new Date().toISOString(),
    };
    if (userId) row.user_id = userId;

    const { error } = await supabase
      .from("topic_mastery")
      .upsert(row, { onConflict: "player_name,path_id" });
    if (error) return null;
    return { pathId, attempts, correct, level: getMasteryLevel(attempts, correct) };
  } catch {
    return null;
  }
}

/**
 * Variant van recordAnswer waar het pathId expliciet wordt meegegeven.
 * Bedoeld voor mini-quiz na een leerpad-stap (AI-gegenereerde vragen
 * staan niet in QUESTION_PATH_MAP, dus de auto-lookup faalt).
 *
 * Returnt {pathId, attempts, correct, level} of null bij failure.
 */
export async function recordAnswerForPath({ playerName, pathId, isCorrect, userId = null }) {
  const player = (playerName || "").trim();
  if (!player || !pathId) return null;

  try {
    const { data: existing } = await supabase
      .from("topic_mastery")
      .select("attempts, correct")
      .eq("player_name", player)
      .eq("path_id", pathId)
      .maybeSingle();

    const attempts = (existing?.attempts || 0) + 1;
    const correct = (existing?.correct || 0) + (isCorrect ? 1 : 0);

    const row = {
      player_name: player,
      path_id: pathId,
      attempts,
      correct,
      last_seen: new Date().toISOString(),
    };
    if (userId) row.user_id = userId;

    const { error } = await supabase
      .from("topic_mastery")
      .upsert(row, { onConflict: "player_name,path_id" });
    if (error) return null;
    return { pathId, attempts, correct, level: getMasteryLevel(attempts, correct) };
  } catch {
    return null;
  }
}

// Haal alle mastery-records op voor één speler.
// Returnt array van { pathId, attempts, correct, level, lastSeen, path }.
export async function loadMasteryForPlayer(playerName) {
  const player = (playerName || "").trim();
  if (!player) return [];
  try {
    const { data } = await supabase
      .from("topic_mastery")
      .select("path_id, attempts, correct, last_seen")
      .eq("player_name", player)
      .order("last_seen", { ascending: false });
    if (!Array.isArray(data)) return [];
    return data.map((r) => ({
      pathId: r.path_id,
      attempts: r.attempts || 0,
      correct: r.correct || 0,
      lastSeen: r.last_seen,
      level: getMasteryLevel(r.attempts || 0, r.correct || 0),
      path: ALL_LEARN_PATHS[r.path_id] || null,
    })).filter((r) => r.path); // filter records waarvan pad niet meer bestaat
  } catch {
    return [];
  }
}

// Onderwerp dat als "volgende stap" aanbevolen kan worden:
// laagste mastery (excl. goud), recent niet bezig.
export function recommendNextTopic(masteryRecords) {
  if (!Array.isArray(masteryRecords) || masteryRecords.length === 0) return null;
  const candidates = masteryRecords.filter((r) => r.level !== "gold");
  if (candidates.length === 0) return null;
  // Sorteer op: brons/unmeasured eerst, dan zilver. Daarbinnen op laatste-keer (oudste eerst).
  const order = { unmeasured: 0, bronze: 1, silver: 2, gold: 3 };
  candidates.sort((a, b) => {
    const lvl = order[a.level] - order[b.level];
    if (lvl !== 0) return lvl;
    return new Date(a.lastSeen) - new Date(b.lastSeen);
  });
  return candidates[0];
}
