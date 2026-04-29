// Achievement-engine: state in localStorage, event-driven check tegen ACHIEVEMENTS.
// Returnt nieuwe unlocks zodat de UI ze kan tonen als toast.

import { ACHIEVEMENTS } from "../data/achievementsData.js";

const STORAGE_KEY = "obliterator_v2_achievements";

export function loadUnlocked() {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function persist(set) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch {
    // ignore storage failures
  }
}

/**
 * Process een game-event en muteer `unlockedRef` (een Set) met nieuwe IDs.
 * Returnt een array van zojuist-vrijgespeelde achievements voor UI feedback.
 */
export function processEvent(event, gameState, unlockedRef) {
  const newlyUnlocked = [];
  for (const ach of ACHIEVEMENTS) {
    if (unlockedRef.has(ach.id)) continue;
    let unlocked = false;
    try {
      unlocked = !!ach.check(event, gameState);
    } catch {
      unlocked = false;
    }
    if (unlocked) {
      unlockedRef.add(ach.id);
      newlyUnlocked.push(ach);
    }
  }
  if (newlyUnlocked.length) persist(unlockedRef);
  return newlyUnlocked;
}

export function isUnlocked(id, unlockedRef) {
  return unlockedRef.has(id);
}

export function totalUnlocked(unlockedRef) {
  return unlockedRef.size;
}
