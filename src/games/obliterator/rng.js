// Obliterator — RNG + level-difficulty visuals.
// Geëxtraheerd uit ObliteratorGame.jsx op 2026-05-06 (P3b deel 2).

// Mulberry32 — deterministische 32-bit RNG. Beide PvP-spelers gebruiken
// dezelfde seed → identieke obstakel-spawns zonder data uit te wisselen.
export function makeMulberry32(seed) {
  let a = (seed >>> 0) || 1;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Moeilijkheid-emoji op basis van level (gebruikt in canvas + level-keuze-knoppen).
export function moeilijkheidEmoji(lvl) {
  if (lvl <= 5) return "😊";
  if (lvl <= 15) return "🙂";
  if (lvl <= 30) return "😬";
  if (lvl <= 50) return "🔥";
  if (lvl <= 75) return "💀";
  return "👹";
}
