// Spaced repetition (SM-2-light) — A11 (10-agent circulariteit-review 2026-05-10).
//
// Per check (pathId+stepIdx+checkIdx) houden we bij:
//   - lastSeenAt: timestamp laatste poging
//   - dueAt: timestamp wanneer hij weer beoordeeld moet worden
//   - intervalIdx: positie in INTERVALS (0..N)
//
// Intervals (SM-2-light, dagen): 1, 3, 7, 21, 60, 120
// - Correct first try: schuif intervalIdx +1
// - Correct na fout: blijf op huidige intervalIdx (consoliderend)
// - Fout: reset intervalIdx → 0 (begin opnieuw morgen)
//
// Storage: localStorage 'lk_due_v1' (parallel aan adaptiveStore — niet vervangen).
// Backwards compatible: bestaande recordWrong/recordRight in adaptiveStore blijven werken.

const KEY = "lk_due_v1";
const INTERVALS_DAYS = [1, 3, 7, 21, 60, 120];
const DAY_MS = 24 * 60 * 60 * 1000;

function readAll() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const obj = JSON.parse(raw);
    return obj && typeof obj === "object" ? obj : {};
  } catch {
    return {};
  }
}

function writeAll(obj) {
  try {
    localStorage.setItem(KEY, JSON.stringify(obj));
  } catch {
    // quota / private mode — stil falen
  }
}

function key(pathId, stepIdx, checkIdx) {
  return `${pathId}::${stepIdx}::${checkIdx}`;
}

/**
 * recordSeen(pathId, stepIdx, checkIdx, wasCorrect, attempts=1)
 * - wasCorrect=true, attempts=1 → schuif interval-stap omhoog
 * - wasCorrect=true, attempts>1 → blijf op huidige stap (consolideren)
 * - wasCorrect=false → reset naar 0 (morgen weer)
 */
export function recordSeen(pathId, stepIdx, checkIdx, wasCorrect, attempts = 1) {
  if (!pathId || stepIdx == null || checkIdx == null) return;
  const all = readAll();
  const k = key(pathId, stepIdx, checkIdx);
  const now = Date.now();
  const cur = all[k] || { intervalIdx: 0, lastSeenAt: 0, dueAt: 0, history: [] };
  let nextIdx;
  if (wasCorrect) {
    nextIdx = attempts === 1
      ? Math.min(cur.intervalIdx + 1, INTERVALS_DAYS.length - 1)
      : cur.intervalIdx;
  } else {
    nextIdx = 0;
  }
  const intervalDays = INTERVALS_DAYS[nextIdx];
  all[k] = {
    intervalIdx: nextIdx,
    lastSeenAt: now,
    dueAt: now + intervalDays * DAY_MS,
    history: [...(cur.history || []).slice(-9), { ts: now, correct: wasCorrect, attempts }],
  };
  writeAll(all);
}

/**
 * getDueChecks(pathId?, ts=now)
 * Returns: [{ pathId, stepIdx, checkIdx, lastSeenAt, dueAt, intervalIdx }, ...]
 * - Wanneer pathId opgegeven: alleen die pad
 * - Anders: alle paden
 * Sorteert op dueAt (oudste eerst).
 */
export function getDueChecks(pathId = null, ts = Date.now()) {
  const all = readAll();
  const out = [];
  for (const k of Object.keys(all)) {
    const item = all[k];
    if (!item || item.dueAt > ts) continue;
    const [pid, stepStr, checkStr] = k.split("::");
    if (pathId && pid !== pathId) continue;
    out.push({
      pathId: pid,
      stepIdx: Number(stepStr),
      checkIdx: Number(checkStr),
      lastSeenAt: item.lastSeenAt,
      dueAt: item.dueAt,
      intervalIdx: item.intervalIdx,
    });
  }
  return out.sort((a, b) => a.dueAt - b.dueAt);
}

/** Hoeveel due-items? — voor badge "5 herhalingen klaar". */
export function countDue(pathId = null, ts = Date.now()) {
  return getDueChecks(pathId, ts).length;
}

/** Hoeveel items komen in komende 24u te vervallen? — voor "morgen 4 onderwerpen". */
export function countDueSoon(hoursAhead = 24, ts = Date.now()) {
  const cutoff = ts + hoursAhead * 60 * 60 * 1000;
  const all = readAll();
  let n = 0;
  for (const k of Object.keys(all)) {
    const item = all[k];
    if (!item) continue;
    if (item.dueAt > ts && item.dueAt <= cutoff) n++;
  }
  return n;
}

/** Wis spaced-rep-state voor een pad (bij self-service delete). */
export function clearPath(pathId) {
  if (!pathId) return;
  const all = readAll();
  const prefix = `${pathId}::`;
  let changed = false;
  for (const k of Object.keys(all)) {
    if (k.startsWith(prefix)) { delete all[k]; changed = true; }
  }
  if (changed) writeAll(all);
}

/** Wis alle spaced-rep-state. */
export function clearAll() {
  try { localStorage.removeItem(KEY); } catch {}
}

export const _intervals = INTERVALS_DAYS; // export for tests
