// Mixed-due-quiz: bouwt een quiz-pool uit alle onderwerpen die volgens
// spaced repetition (next_due_at <= now) toe zijn aan herhaling.
//
// Werking:
//   1. Haal due-topics op via loadDueTopics(playerName)
//   2. Voor elke topic (= pathId): zoek de vragen die aan dat pad zijn
//      gekoppeld via QUESTION_PATH_MAP (omgekeerde lookup van vraagtekst
//      naar pad).
//   3. Bouw een vraag-pool op door per topic 1-2 vragen te kiezen, met
//      voorkeur voor vragen die de leerling vaker fout had (best-effort —
//      we hebben geen per-vraag-tracking, dus shuffle + pak).
//   4. Mix de pool en limiteer op `maxQuestions`.
//
// Returnt: array van vraag-objecten { q, options, answer, explanation, ... }
// Gebruikt door App.jsx → quiz starten met `preGeneratedQuestions: pool`.

import { loadDueTopics } from "./mastery.js";
import { QUESTION_PATH_MAP } from "../../learnPaths/questionPathMap.generated.js";
import { SAMPLE_QUESTIONS, TOPIC_QUESTIONS } from "../../constants.js";

// Bouw één keer een lookup-tabel { questionText → questionObj } over alle
// hardcoded vragen. Dit is een vrij dure reduce maar gebeurt 1× per module-
// load. Niet bij elke aanroep van de quiz-builder.
let _questionByText = null;

function buildQuestionLookup() {
  if (_questionByText) return _questionByText;
  const map = new Map();

  // SAMPLE_QUESTIONS: { [subject]: { [level]: [...questions] } }
  for (const subj of Object.values(SAMPLE_QUESTIONS || {})) {
    if (!subj || typeof subj !== "object") continue;
    for (const level of Object.values(subj)) {
      if (!Array.isArray(level)) continue;
      for (const q of level) {
        if (q?.q && !map.has(q.q)) map.set(q.q, q);
      }
    }
  }

  // TOPIC_QUESTIONS: { [topicKey]: [...questions] }
  for (const arr of Object.values(TOPIC_QUESTIONS || {})) {
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      if (q?.q && !map.has(q.q)) map.set(q.q, q);
    }
  }

  _questionByText = map;
  return map;
}

// Reverse-lookup: voor een gegeven pathId, vind alle vraagteksten die aan
// dat pad gekoppeld zijn via QUESTION_PATH_MAP.
let _textsByPath = null;

function buildPathToTextsLookup() {
  if (_textsByPath) return _textsByPath;
  const map = new Map();
  for (const [text, entry] of Object.entries(QUESTION_PATH_MAP || {})) {
    if (!entry?.pathId) continue;
    const list = map.get(entry.pathId) || [];
    list.push(text);
    map.set(entry.pathId, list);
  }
  _textsByPath = map;
  return map;
}

function shuffle(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Bouw een herhaal-quiz-pool voor een speler.
 *
 * @param {string} playerName
 * @param {object} opts
 * @param {number} opts.maxQuestions  — totale grootte van de pool (default 10)
 * @param {number} opts.perTopic      — max vragen per onderwerp (default 2)
 * @returns {Promise<{ pool: Array, dueTopics: Array, sources: Array<string> }>}
 *   `pool`       = vraag-objecten klaar voor PlayQuiz `preGeneratedQuestions`
 *   `dueTopics`  = de raw due-records (voor banner/UI)
 *   `sources`    = pad-titels die in de pool zaten (voor "uit X, Y en Z")
 */
export async function buildHerhaalPool(playerName, opts = {}) {
  const maxQuestions = Math.max(3, Math.min(30, opts.maxQuestions || 10));
  const perTopic = Math.max(1, Math.min(5, opts.perTopic || 2));

  const player = (playerName || "").trim();
  if (!player) return { pool: [], dueTopics: [], sources: [] };

  const dueTopics = await loadDueTopics(player);
  if (!dueTopics.length) return { pool: [], dueTopics: [], sources: [] };

  const questionByText = buildQuestionLookup();
  const textsByPath = buildPathToTextsLookup();

  const pool = [];
  const sources = [];

  // Itereer in due-volgorde (oudst-due eerst). Pak per pad max `perTopic`
  // vragen tot we maxQuestions hebben.
  for (const topic of dueTopics) {
    if (pool.length >= maxQuestions) break;
    const texts = textsByPath.get(topic.pathId) || [];
    if (!texts.length) continue;

    const shuffledTexts = shuffle(texts);
    let taken = 0;
    for (const text of shuffledTexts) {
      if (taken >= perTopic) break;
      if (pool.length >= maxQuestions) break;
      const q = questionByText.get(text);
      if (q) {
        pool.push(q);
        taken += 1;
      }
    }
    if (taken > 0) sources.push(topic.path?.title || topic.pathId);
  }

  // Tot slot: door elkaar gooien zodat dezelfde topic-vragen niet aan elkaar
  // plakken.
  const shuffledPool = shuffle(pool);

  return { pool: shuffledPool, dueTopics, sources };
}
