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

import { track } from "../utils.js";
import supabase from "../supabase.js";

const KEY = "lk_daily_goal_v1";
const STREAK_KEY = "lk_day_streak_v1";
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
  let netVoltooid = false;
  if (!cur.completed && cur.seconds >= cur.target) {
    cur.completed = true;
    netVoltooid = true;
    // 2026-05-18 (12-agent-audit A3 #1): cross-day streak bumpen op moment
    // dat het kwartier voor vandaag echt voltooid is. Eénmalig per dag
    // dankzij de completed-flag-guard.
    bumpDayStreak();
    // 2026-06-08: `kwartier_reached` hier afvuren — dít is de canonieke
    // "kwartier voor vandaag behaald"-mijlpaal die de app ook gebruikt voor
    // streak + felicitatie. Vroeger hing het event aan een aparte LEER-pagina-
    // teller in App.jsx, die zelden de 15 min haalde → event vuurde bijna nooit.
    // De completed-guard zorgt dat dit max. 1× per dag per device vuurt.
    try { track("kwartier_reached", { min: Math.floor(cur.seconds / 60), via: "daily_goal" }); } catch { /* nooit de telling laten breken */ }
  }
  write(cur);
  // A8.3: naar Supabase (bij voltooien direct, anders max 1×/minuut)
  pushCloud(netVoltooid);
  return cur;
}

// ── Day-streak (cross-dag terugkomst) ──────────────────────────────
// Schema: { lastCompletedDate: "YYYY-MM-DD" | null, current: N, best: N }
// Logic:
// - lastCompletedDate === vandaag → niets doen (al vandaag geteld)
// - lastCompletedDate === gisteren → current++, lastDate=vandaag
// - anders (gat) → current=1, lastDate=vandaag
// - best blijft monotoon stijgend
function readStreak() {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { lastCompletedDate: null, current: 0, best: 0 };
    const obj = JSON.parse(raw);
    return obj && typeof obj === "object"
      ? { lastCompletedDate: obj.lastCompletedDate || null, current: obj.current || 0, best: obj.best || 0 }
      : { lastCompletedDate: null, current: 0, best: 0 };
  } catch { return { lastCompletedDate: null, current: 0, best: 0 }; }
}
function writeStreak(s) {
  try { localStorage.setItem(STREAK_KEY, JSON.stringify(s)); } catch {}
}
function isYesterday(dateStr) {
  if (!dateStr) return false;
  const today = new Date();
  const y = new Date(today);
  y.setDate(today.getDate() - 1);
  const yyyy = y.getFullYear();
  const mm = String(y.getMonth() + 1).padStart(2, "0");
  const dd = String(y.getDate()).padStart(2, "0");
  return dateStr === `${yyyy}-${mm}-${dd}`;
}
function bumpDayStreak() {
  const today = todayStr();
  const s = readStreak();
  if (s.lastCompletedDate === today) return s;
  if (isYesterday(s.lastCompletedDate)) {
    s.current += 1;
  } else {
    s.current = 1;
  }
  s.lastCompletedDate = today;
  if (s.current > s.best) s.best = s.current;
  writeStreak(s);
  return s;
}
// UI-helper: huidige streak (met auto-reset als laatste completed >1 dag oud).
export function getDayStreak() {
  const s = readStreak();
  if (!s.lastCompletedDate) return { current: 0, best: s.best || 0 };
  // Als laatste completed niet vandaag én niet gisteren → de huidige streak is
  // visueel 'verbroken'. Toon current pas 0 — maar pas pas writen bij volgende
  // bump (zodat een streak na vandaag-completed weer optelt vanaf 1).
  const today = todayStr();
  if (s.lastCompletedDate === today) return { current: s.current, best: s.best };
  if (isYesterday(s.lastCompletedDate)) return { current: s.current, best: s.best };
  return { current: 0, best: s.best };
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

// ── ☁️ Cross-device sync (A8.3, 2026-07-15) ────────────────────────
// De kwartier-streak + het dagdoel leefden alleen in localStorage en
// verdampten dus per apparaat (telefoon ≠ laptop). Nu: bij login mergen
// met de kolommen op `profiles` (kwartier_streak/_best/_last_day,
// goal_day/goal_seconds) en daarna terugschrijven. Anoniem = alles
// blijft zoals het was, puur lokaal.
let cloudUserId = null;
let lastPushAt = 0;
const PUSH_MIN_INTERVAL_MS = 60_000;

function cloudRij() {
  const g = getDailyGoal();
  const s = readStreak();
  return {
    goal_day: g.date,
    goal_seconds: g.seconds || 0,
    kwartier_streak: s.current || 0,
    kwartier_streak_best: s.best || 0,
    kwartier_last_day: s.lastCompletedDate || null,
  };
}

function pushCloud(force = false) {
  if (!cloudUserId) return;
  const now = Date.now();
  if (!force && now - lastPushAt < PUSH_MIN_INTERVAL_MS) return;
  lastPushAt = now;
  try {
    supabase.from("profiles").update(cloudRij()).eq("id", cloudUserId)
      .then(() => {}, () => {});
  } catch { /* sync mag nooit het leren breken */ }
}

// Pure merge-regels (exported voor tests). Kiest per onderdeel de beste
// stand van twee apparaten:
// - dagdoel: zelfde dag → hoogste seconden wint; alleen vandaag telt.
// - streak: de recentste `lastCompletedDate` wint; zelfde dag → hoogste
//   teller; best = altijd het maximum van beide.
export function mergeDailyGoalStates(local, cloud, today) {
  const merged = {
    goal: { ...local.goal },
    streak: { ...local.streak },
  };
  if (cloud) {
    if (cloud.goal_day === today) {
      const cloudSec = cloud.goal_seconds || 0;
      if (local.goal.date !== today || cloudSec > (local.goal.seconds || 0)) {
        merged.goal = {
          date: today,
          seconds: Math.max(cloudSec, local.goal.date === today ? local.goal.seconds || 0 : 0),
          target: local.goal.target || DEFAULT_TARGET_SECONDS,
          completed: false,
          celebratedAt: local.goal.date === today ? local.goal.celebratedAt || null : null,
        };
        merged.goal.completed = merged.goal.seconds >= merged.goal.target;
      }
    }
    const cd = cloud.kwartier_last_day || null;
    const ld = local.streak.lastCompletedDate || null;
    if (cd && (!ld || cd > ld)) {
      merged.streak.lastCompletedDate = cd;
      merged.streak.current = cloud.kwartier_streak || 0;
    } else if (cd && ld && cd === ld) {
      merged.streak.current = Math.max(local.streak.current || 0, cloud.kwartier_streak || 0);
    }
    merged.streak.best = Math.max(
      local.streak.best || 0,
      cloud.kwartier_streak_best || 0,
      merged.streak.current || 0
    );
  }
  return merged;
}

// Aanroepen bij login (useAuth heeft het profiel al opgehaald — geen
// extra roundtrip). Merged de cloud-stand in localStorage en zet de
// gebruiker klaar voor pushes; schrijft de merged stand direct terug.
export function initDailyGoalSync(userId, profileRow) {
  if (!userId) return;
  cloudUserId = userId;
  try {
    const merged = mergeDailyGoalStates(
      { goal: getDailyGoal(), streak: readStreak() },
      profileRow || null,
      todayStr()
    );
    write(merged.goal);
    writeStreak(merged.streak);
  } catch { /* lokaal blijft leidend bij gekke data */ }
  pushCloud(true);
}

// Aanroepen bij uitloggen / account-wissel. Zonder dit bleef `cloudUserId` op
// de vórige gebruiker staan, waardoor de 30s-heartbeat de dagteller/streak van
// de nieuwe (of anonieme) sessie naar het profiel van de vorige gebruiker bleef
// schrijven — cross-device-corruptie op gedeelde huishoud-apparaten. Zonder
// login hoort de sync puur lokaal te blijven. (bug-jacht 2026-07-31)
export function stopDailyGoalSync() {
  cloudUserId = null;
  lastPushAt = 0;
}
