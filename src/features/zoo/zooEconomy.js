// zooEconomy — de muntjes-logica van Mijn Park.
//
// Verdienen (voorspelbaar + verdiend, GEEN gok/loot-boxes):
//  - dagelijks inloggen: +basis, met oplopende streak-bonus
//  - 15 min leren voltooid (de canonieke kwartier-mijlpaal): +vast bedrag
//
// Uitgeven aan dieren/attracties komt in de winkel (stap 4).

export const START_COINS = 25;
export const LOGIN_BASE = 5;            // basis voor dagelijks inloggen
export const LOGIN_STREAK_BONUS_MAX = 7; // +1 per streakdag, tot dit maximum
export const KWARTIER_REWARD = 8;       // 15 min leren voltooid

function todayStr(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function isYesterday(dateStr, today = todayStr()) {
  if (!dateStr) return false;
  const d = new Date(`${today}T00:00:00`);
  d.setDate(d.getDate() - 1);
  return dateStr === todayStr(d);
}

// Dagelijkse-inlog-beloning. Eén keer per kalenderdag. Streak loopt op als
// gisteren ook ingelogd is, anders reset naar 1.
export function applyDailyLogin(state) {
  const today = todayStr();
  if (state.last_login === today) return { state, gained: 0 };
  const newStreak = isYesterday(state.last_login, today) ? (state.streak || 0) + 1 : 1;
  const bonus = Math.min(LOGIN_STREAK_BONUS_MAX, Math.max(0, newStreak - 1));
  const gained = LOGIN_BASE + bonus;
  return {
    state: { ...state, coins: (state.coins || 0) + gained, streak: newStreak, last_login: today },
    gained,
  };
}

// Kwartier-beloning: alleen als het dagdoel (15 min) vandaag voltooid is en nog
// niet uitbetaald vandaag.
export function applyKwartierReward(state, goalCompletedToday) {
  const today = todayStr();
  if (!goalCompletedToday || state.last_kwartier_date === today) return { state, gained: 0 };
  return {
    state: { ...state, coins: (state.coins || 0) + KWARTIER_REWARD, last_kwartier_date: today },
    gained: KWARTIER_REWARD,
  };
}
