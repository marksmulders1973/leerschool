// Daily-goal tracker — Mark's "kwartier per dag"-belofte hard maken.
// 2026-05-16: backlog growth-loops item "Daily-goal-UI + 'klaar voor vandaag'-scherm".
//
// Per kalenderdag bijhouden hoeveel actieve minuten een gebruiker heeft besteed
// aan oefenen/leren. Default-doel: 15 min/dag (de "leerkwartier"-belofte).
//
// Schema: lk_daily_goal_v1 = { date: "YYYY-MM-DD", seconds: N, target: 900, completed: bool }
//
// Bij datum-wissel automatisch reset. Target standaard 900s (=15 min) maar
// instelbaar zodat ouders/leerkrachten het later anders kunnen zetten.

const KEY = "lk_daily_goal_v1";
export const DEFAULT_TARGET_SECONDS = 15 * 60; // 15 min = handelsmerk
const TICK_INTERVAL_MS = 30_000;

function todayStr() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function read() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const obj = JSON.parse(raw);
    return obj && typeof obj === "object" ? obj : null;
  } catch {
    return null;
  }
}

function write(obj) {
  try {
    localStorage.setItem(KEY, JSON.stringify(obj));
  } catch {
    // stil falen (private mode / quota)
  }
}

// Geeft de huidige stand voor vandaag. Bij datum-wissel automatisch reset
// en geeft een fresh entry terug.
export function getDailyGoal() {
  const today = todayStr();
  let cur = read();
  if (!cur || cur.date !== today) {
    cur = {
      date: today,
      seconds: 0,
      target: DEFAULT_TARGET_SECONDS,
      completed: false,
      celebratedAt: null,
    };
    write(cur);
  }
  return cur;
}

// Voeg N seconden toe aan de teller. Wordt aangeroepen door de tracking-tick
// (default: 30s per heartbeat). Markeert 'completed' zodra target bereikt is
// — maar overschrijft nooit een al-gevierd vlag.
export function addSeconds(deltaSeconds) {
  if (!Number.isFinite(deltaSeconds) || deltaSeconds <= 0) return getDailyGoal();
  const cur = getDailyGoal();
  cur.seconds = (cur.seconds || 0) + deltaSeconds;
  if (!cur.completed && cur.seconds >= cur.target) {
    cur.completed = true;
  }
  write(cur);
  return cur;
}

// Markeer dat de "leerkwartier-behaald"-felicitatie is getoond. Voorkomt
// dat de banner herhaald flitst tijdens dezelfde sessie.
export function markCelebrated() {
  const cur = getDailyGoal();
  if (cur.celebratedAt) return cur;
  cur.celebratedAt = Date.now();
  write(cur);
  return cur;
}

// UI-helpers
export function percentDone(g = getDailyGoal()) {
  if (!g.target) return 0;
  return Math.min(100, Math.round((g.seconds / g.target) * 100));
}

export function minutesDone(g = getDailyGoal()) {
  return Math.floor((g.seconds || 0) / 60);
}

export function minutesLeft(g = getDailyGoal()) {
  return Math.max(0, Math.ceil((g.target - g.seconds) / 60));
}

// Tracking-tick: roep dit op bij paginabewegingen, route-changes of een
// setInterval om verstreken tijd op te tellen. Telt alleen mee als de tab
// zichtbaar is — anders staat de app immers in achtergrond.
let lastTickAt = null;
let tickTimer = null;

function tick() {
  if (typeof document !== "undefined" && document.visibilityState !== "visible") {
    lastTickAt = Date.now();
    return;
  }
  const now = Date.now();
  if (lastTickAt == null) {
    lastTickAt = now;
    return;
  }
  const delta = Math.round((now - lastTickAt) / 1000);
  lastTickAt = now;
  // Vermijd onrealistische pieken (bv. tab was uren niet zichtbaar maar
  // visibilityState was even niet hidden). Cap op TICK_INTERVAL_MS+5s.
  const capped = Math.min(delta, TICK_INTERVAL_MS / 1000 + 5);
  if (capped > 0) addSeconds(capped);
}

export function startTracking() {
  if (typeof window === "undefined") return () => {};
  if (tickTimer) return stopTracking;
  lastTickAt = Date.now();
  tickTimer = setInterval(tick, TICK_INTERVAL_MS);
  // Resync bij visibility-changes zodat tab-switches niet bij default-tick
  // erin gooien.
  const onVis = () => { lastTickAt = Date.now(); };
  document.addEventListener("visibilitychange", onVis);
  return () => {
    if (tickTimer) clearInterval(tickTimer);
    tickTimer = null;
    document.removeEventListener("visibilitychange", onVis);
  };
}

export function stopTracking() {
  if (tickTimer) {
    clearInterval(tickTimer);
    tickTimer = null;
  }
}
