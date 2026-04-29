// Scoring + combo-multiplier — pure functies. Geen Supabase, geen state-mutatie.
// Wordt zo door de game-loop gebruikt en is daarnaast los unit-testbaar.
//
// Multiplier-trappen zijn bewust niet-lineair: kleine wins voelen goed, maar
// de écht uitnodigende sprong komt na 25 — daar wil je niet uit.

const COMBO_TIERS = [
  { min: 0,  mult: 1, label: "" },
  { min: 5,  mult: 2, label: "×2" },
  { min: 10, mult: 3, label: "×3" },
  { min: 25, mult: 5, label: "×5" },
  { min: 50, mult: 8, label: "×8 LEGEND" },
];

const BASE_POINTS = {
  obliterate: 50,  // perfect getimde tap die obstakel vernietigt
  jump: 10,        // succesvolle ontwijking
  collect: 5,      // ster oppikken
  powerup: 25,     // power-up oppikken
};

export function multiplierFor(combo) {
  for (let i = COMBO_TIERS.length - 1; i >= 0; i--) {
    if (combo >= COMBO_TIERS[i].min) return COMBO_TIERS[i];
  }
  return COMBO_TIERS[0];
}

export function pointsFor(action, combo) {
  const base = BASE_POINTS[action] ?? 0;
  return base * multiplierFor(combo).mult;
}

/**
 * Pure variant van de event-handler. Returnt een nieuwe state-snapshot.
 * In de game-loop muteren we direct voor performance, maar deze functie
 * is handig voor tests en eventuele time-travel-debugging.
 */
export function applyEvent(state, event) {
  switch (event.type) {
    case "obliterate": {
      const newCombo = state.combo + 2;
      return {
        ...state,
        combo: newCombo,
        bestCombo: Math.max(state.bestCombo, newCombo),
        score: state.score + pointsFor("obliterate", state.combo),
      };
    }
    case "jump": {
      const newCombo = state.combo + 1;
      return {
        ...state,
        combo: newCombo,
        bestCombo: Math.max(state.bestCombo, newCombo),
        score: state.score + pointsFor("jump", state.combo),
      };
    }
    case "collect":
      return {
        ...state,
        score: state.score + pointsFor("collect", state.combo),
      };
    case "powerup":
      return {
        ...state,
        score: state.score + pointsFor("powerup", state.combo),
      };
    case "hit":
      return { ...state, combo: 0, lives: Math.max(0, state.lives - 1) };
    default:
      return state;
  }
}

export const initialScoreState = {
  score: 0,
  combo: 0,
  bestCombo: 0,
  lives: 3,
};
