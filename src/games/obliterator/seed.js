// Seeded pseudo-random — voor de Daily Challenge.
//
// mulberry32 is een snel, klein, en goed-genoeg PRNG voor game-spawn-logic.
// Niet cryptografisch sterk; ook niet nodig — we willen alleen dat zelfde
// seed → zelfde sequentie spawns oplevert.
//
// Daily seed wordt afgeleid uit de UTC-datum, zodat alle spelers wereldwijd
// vandaag dezelfde obstakel-volgorde krijgen. Morgen een nieuwe.

/**
 * Returnt een deterministic random-functie [0,1) met de gegeven 32-bit seed.
 * Implementatie: mulberry32 (Tommy Ettinger, public domain).
 */
export function makeRng(seed) {
  let state = seed >>> 0; // force unsigned 32-bit
  return function rng() {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * UTC-datum als YYYY-MM-DD-string. Onafhankelijk van timezone zodat
 * Nederland en USA dezelfde 'vandaag' delen.
 */
export function todayUtcString(now = new Date()) {
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/**
 * Stabiele 32-bit hash van een string (FNV-1a). Genoeg variatie voor onze
 * datum-strings. Niet cryptografisch.
 */
export function hashString(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/**
 * Seed voor de Daily Challenge van vandaag. Alle clients wereldwijd
 * krijgen dezelfde waarde tussen 00:00 en 23:59 UTC.
 */
export function dailySeed(now = new Date()) {
  return hashString(todayUtcString(now));
}
