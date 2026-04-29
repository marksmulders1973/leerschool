// Vragen-fetcher: haalt vragen uit Supabase `questions`-tabel met
// in-memory cache, plus fallback op de hardcoded src/constants.js-data
// zodat de app blijft werken als Supabase down is of de migratie nog
// niet gerund.
//
// Doel (P1.9): de hoofdbundle krimpt zodra import-sites overstappen
// van directe constants.js-import op deze fetcher. Migratie kan
// gefaseerd: deze module is non-breaking.

import supabase from "../supabase.js";

// Cache key = stringified options. Bij identieke opvraging krijg je
// directe return zonder netwerk — belangrijk omdat veel componenten
// dezelfde set vragen ophalen tijdens een sessie.
const cache = new Map();
let cacheEnabled = true;

function keyOf(opts) {
  return JSON.stringify({
    subject: opts.subject || null,
    level: opts.level || null,
    topic: opts.topic || null,
    limit: opts.limit || null,
  });
}

/**
 * Map een Supabase-row naar het UI-formaat dat de bestaande quizcomponenten
 * verwachten (zelfde als constants.js-objecten).
 */
function rowToQuestion(r) {
  return {
    q: r.q,
    options: Array.isArray(r.options) ? r.options : [],
    answer: r.answer ?? 0,
    explanation: r.explanation || "",
    svg: r.svg || undefined,
    imageInExplanation: r.image_in_explanation || false,
    source: r.question_source || undefined,
    pathId: r.path_id || undefined,
    stepIdx: r.step_idx ?? undefined,
  };
}

/**
 * Fallback uit constants.js — gebruikt wanneer Supabase faalt of leeg is.
 * Lazy-import zodat de fallback alleen wordt geladen als die echt nodig is.
 */
async function fallbackFromConstants(opts) {
  const { subject, level, topic, limit = 100 } = opts;
  const { SAMPLE_QUESTIONS, TOPIC_QUESTIONS } = await import("../constants.js");

  if (topic) {
    const arr = TOPIC_QUESTIONS[topic.toLowerCase()] || [];
    return arr.slice(0, limit);
  }
  if (subject) {
    const subjectData = SAMPLE_QUESTIONS[subject];
    if (!subjectData) return [];
    if (level && Array.isArray(subjectData[level])) {
      return subjectData[level].slice(0, limit);
    }
    if (Array.isArray(subjectData)) {
      return subjectData.slice(0, limit);
    }
  }
  return [];
}

/**
 * Hoofd-fetcher. Async, met cache + fallback.
 *
 * @param {object} opts
 * @param {string} [opts.subject]    — TEXTBOOK_CATEGORIES_VO/PO id
 * @param {string} [opts.level]      — bv 'klas1', 'groep5'
 * @param {string} [opts.topic]      — TOPIC_QUESTIONS-key (lowercase)
 * @param {number} [opts.limit=100]  — max aantal terug
 * @returns {Promise<Array>}
 */
export async function fetchQuestions(opts = {}) {
  const { subject, level, topic, limit = 100 } = opts;

  if (cacheEnabled) {
    const key = keyOf(opts);
    if (cache.has(key)) return cache.get(key);
  }

  let result;
  try {
    let query = supabase
      .from("questions")
      .select(
        "q, options, answer, explanation, svg, image_in_explanation, question_source, path_id, step_idx"
      );

    if (topic) {
      // TOPIC_QUESTIONS-keys zijn lowercase; in Supabase staat de originele case
      query = query.ilike("topic_key", topic);
    } else {
      if (subject) query = query.eq("subject", subject);
      if (level) query = query.eq("level", level);
    }
    // .limit() moet als laatste in de chain — anders kan PostgrestQueryBuilder
    // niet meer chainen op de andere methods.
    query = query.limit(limit);

    const { data, error } = await query;
    if (error || !data || data.length === 0) {
      result = await fallbackFromConstants(opts);
    } else {
      result = data.map(rowToQuestion);
    }
  } catch {
    result = await fallbackFromConstants(opts);
  }

  if (cacheEnabled) {
    cache.set(keyOf(opts), result);
  }
  return result;
}

/** Cache leegmaken — handig in tests of bij gedwongen reload van content. */
export function clearQuestionsCache() {
  cache.clear();
}

/** Cache aan/uit zetten — gebruikt in tests om netwerk-paden af te dwingen. */
export function setCacheEnabled(enabled) {
  cacheEnabled = !!enabled;
  if (!enabled) cache.clear();
}

/**
 * Returnt het aantal cached entries — voor monitoring / dev-tools.
 */
export function cacheSize() {
  return cache.size;
}
