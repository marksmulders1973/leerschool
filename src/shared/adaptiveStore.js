// Adaptief leren v1 — client-side, localStorage.
// Per (pathId, stepIdx) houden we een set van checkIdx-en die fout zijn gegaan.
// Bij hervatten van een stap reorderen we de checks zodat foute eerst komen.
// Sprint B v1 (2026-05-08).
// Sprint-0 v2 (2026-05-14): mastery streak — een check verlaat de fout-set pas
// na STREAK_TO_MASTER (3) keer goed achter elkaar. Voorkomt schijnzekerheid bij
// 1 goed antwoord. Backwards-compat met oude array-vorm via normalizeValue().

const KEY = "lk_adaptive_v1";
export const STREAK_TO_MASTER = 3;

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

function stepKey(pathId, stepIdx) {
  return `${pathId}::${stepIdx}`;
}

// Normaliseert een opgeslagen waarde naar { wrong: number[], streak: {idx: count} }.
// Oude vorm = bare array (legacy v1). Nieuwe vorm = object met wrong + streak.
function normalizeValue(v) {
  if (Array.isArray(v)) return { wrong: v.slice(), streak: {} };
  if (v && typeof v === "object" && Array.isArray(v.wrong)) {
    const streak = v.streak && typeof v.streak === "object" ? v.streak : {};
    return { wrong: v.wrong.slice(), streak: { ...streak } };
  }
  return { wrong: [], streak: {} };
}

function writeEntry(all, k, entry) {
  if (entry.wrong.length === 0) {
    delete all[k];
  } else {
    // Houd streak-map klein: alleen entries voor checks die nog in wrong-set zitten.
    const cleanStreak = {};
    for (const idx of entry.wrong) {
      if (entry.streak[idx] != null) cleanStreak[idx] = entry.streak[idx];
    }
    all[k] = { wrong: entry.wrong, streak: cleanStreak };
  }
}

export function recordWrong(pathId, stepIdx, checkIdx) {
  if (!pathId || stepIdx == null || checkIdx == null) return;
  const all = readAll();
  const k = stepKey(pathId, stepIdx);
  const entry = normalizeValue(all[k]);
  if (!entry.wrong.includes(checkIdx)) entry.wrong.push(checkIdx);
  entry.streak[checkIdx] = 0; // reset bij elke fout
  writeEntry(all, k, entry);
  writeAll(all);
}

// Bump streak voor een check in de fout-set. Pas bij STREAK_TO_MASTER achtereen
// goede antwoorden verdwijnt de check uit de set. Checks die NIET in de set
// staan (= nooit fout geweest) blijven onaangeraakt.
export function recordRight(pathId, stepIdx, checkIdx) {
  if (!pathId || stepIdx == null || checkIdx == null) return;
  const all = readAll();
  const k = stepKey(pathId, stepIdx);
  const entry = normalizeValue(all[k]);
  if (!entry.wrong.includes(checkIdx)) return; // niet in fout-set: niks doen
  const nextStreak = (entry.streak[checkIdx] || 0) + 1;
  if (nextStreak >= STREAK_TO_MASTER) {
    entry.wrong = entry.wrong.filter((c) => c !== checkIdx);
    delete entry.streak[checkIdx];
  } else {
    entry.streak[checkIdx] = nextStreak;
  }
  writeEntry(all, k, entry);
  writeAll(all);
}

export function getWrongChecks(pathId, stepIdx) {
  if (!pathId || stepIdx == null) return [];
  const all = readAll();
  return normalizeValue(all[stepKey(pathId, stepIdx)]).wrong;
}

// Huidige streak voor een specifieke check (voor UI: "nog X keer goed → beheerst").
export function getCheckStreak(pathId, stepIdx, checkIdx) {
  if (!pathId || stepIdx == null || checkIdx == null) return 0;
  const all = readAll();
  const entry = normalizeValue(all[stepKey(pathId, stepIdx)]);
  return entry.streak[checkIdx] || 0;
}

// Returnt een herordende array van check-indexen waarbij eerder-foute checks
// eerst komen, gevolgd door de overige in oorspronkelijke volgorde.
// totalChecks = lengte van de checks-array van de stap.
export function buildCheckOrder(pathId, stepIdx, totalChecks) {
  const wrong = getWrongChecks(pathId, stepIdx).filter(
    (i) => Number.isInteger(i) && i >= 0 && i < totalChecks
  );
  const wrongSet = new Set(wrong);
  const rest = [];
  for (let i = 0; i < totalChecks; i++) if (!wrongSet.has(i)) rest.push(i);
  return [...wrong, ...rest];
}

// Aantal foute checks voor een hele pad (over alle stappen).
export function countPathWrong(pathId) {
  if (!pathId) return 0;
  const all = readAll();
  const prefix = `${pathId}::`;
  let total = 0;
  for (const k of Object.keys(all)) {
    if (k.startsWith(prefix)) total += normalizeValue(all[k]).wrong.length;
  }
  return total;
}

// Aantal foute checks per stepIdx voor een pad. Returnt object {stepIdx: count}.
export function pathWrongMap(pathId) {
  const out = {};
  if (!pathId) return out;
  const all = readAll();
  const prefix = `${pathId}::`;
  for (const k of Object.keys(all)) {
    if (!k.startsWith(prefix)) continue;
    const stepIdx = Number(k.slice(prefix.length));
    if (Number.isInteger(stepIdx)) out[stepIdx] = normalizeValue(all[k]).wrong.length;
  }
  return out;
}

// Set van pad-ids die de gebruiker ooit heeft geopend — voor mastery-status.
const SEEN_KEY = "lk_seen_paths_v1";

export function markPathSeen(pathId) {
  if (!pathId) return;
  try {
    const raw = localStorage.getItem(SEEN_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(arr)) return;
    if (!arr.includes(pathId)) {
      arr.push(pathId);
      localStorage.setItem(SEEN_KEY, JSON.stringify(arr));
    }
  } catch {}
}

export function getSeenPaths() {
  try {
    const raw = localStorage.getItem(SEEN_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

// Mastery-status per pad voor VoorkennisKeten-detector (Mark fase 3, 2026-05-14).
// Returns: 'weak' (heeft openstaande foute checks), 'mastered' (sporen van
// activiteit zonder fouten), 'unseen' (nog niet aangeraakt). Mastered/unseen
// zijn niet altijd te onderscheiden zonder learn_progress (Supabase) — vandaar
// dat we hier de tweede param `everSeenIds` meegeven (set van pathIds die de
// gebruiker ooit heeft geopend). Zonder die set vallen 'mastered' samen met
// 'unseen'.
export function pathMasteryStatus(pathId, everSeenIds) {
  if (!pathId) return "unseen";
  const all = readAll();
  const prefix = `${pathId}::`;
  let hasWrong = false;
  for (const k of Object.keys(all)) {
    if (k.startsWith(prefix) && normalizeValue(all[k]).wrong.length > 0) {
      hasWrong = true;
      break;
    }
  }
  if (hasWrong) return "weak";
  if (everSeenIds instanceof Set && everSeenIds.has(pathId)) return "mastered";
  return "unseen";
}

// Snel helper: vind de **eerste** stap in een keten die nog NIET mastered is
// (= unseen of weak). Geeft index terug; -1 als hele keten beheerst.
export function findWeakestKetenIdx(keten, everSeenIds) {
  if (!Array.isArray(keten)) return -1;
  for (let i = 0; i < keten.length; i++) {
    const status = pathMasteryStatus(keten[i]?.id, everSeenIds);
    if (status !== "mastered") return i;
  }
  return -1;
}

// Wis adaptieve state voor een pad (gebruikt bij self-service delete).
export function clearPath(pathId) {
  if (!pathId) return;
  const all = readAll();
  const prefix = `${pathId}::`;
  let changed = false;
  for (const k of Object.keys(all)) {
    if (k.startsWith(prefix)) {
      delete all[k];
      changed = true;
    }
  }
  if (changed) writeAll(all);
}

// Wis ALLE adaptieve state (gebruikt bij "verwijder al mijn data").
export function clearAll() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // stil
  }
}
