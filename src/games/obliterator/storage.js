// Obliterator — localStorage helpers.
// Geëxtraheerd uit ObliteratorGame.jsx op 2026-05-06 (P3b deel 2).
// Pure functies, geen React-state.

import { PENDING_SCORES_KEY } from "./constants.js";

export function leesInt(key) {
  try {
    return parseInt(localStorage.getItem(key) || "0", 10) || 0;
  } catch {
    return 0;
  }
}

export function schrijfInt(key, val) {
  try {
    localStorage.setItem(key, String(val));
  } catch {}
}

// Pending high-scores die nog niet naar Supabase zijn gepusht (offline gespeeld).
// Wordt geflusht bij component-mount en bij 'online' event.
export function leesPendingScores() {
  try {
    const raw = localStorage.getItem(PENDING_SCORES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function schrijfPendingScores(arr) {
  try {
    localStorage.setItem(PENDING_SCORES_KEY, JSON.stringify(arr || []));
  } catch {}
}

export function pushNaarPendingQueue(payload) {
  const queue = leesPendingScores();
  queue.push({ ...payload, _gespeeld_op: Date.now() });
  // cap op 50 om localStorage-bloat te voorkomen
  if (queue.length > 50) queue.splice(0, queue.length - 50);
  schrijfPendingScores(queue);
}
