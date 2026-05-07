// Obliterator — vaste configuratie & catalogi.
// Geëxtraheerd uit src/components/ObliteratorGame.jsx op 2026-05-06 (P3b deel 2).
// Géén state, géén side-effects — pure data.

import { BRAND } from "../../brand.js";

export const TOP_LIMIT = 25;

// localStorage-keys — prefixes met userName voor multi-account-support.
export const PENDING_SCORES_KEY = "obliterator-pending-scores";
export const SESSIE_KEY_PREFIX = "obliterator-sessies-";
export const BONUS_KEY_PREFIX = "obliterator-bonus-";
export const MUNTEN_KEY_PREFIX = "obliterator-munten-";

// Vaste lijst van admin-spelernamen (lowercase). Het admin-paneel blijft
// bij deze namen — verandert NIET als iemand het wereldrecord verbreekt.
// Voeg een naam toe om iemand admin te maken.
export const OBLIVION_ADMINS = ["brian"];

// Decoratie-catalogus voor de custom-level-editor. Visueel-only, geen collisie.
// `bob` = optionele auto-animatie (snelheid/amp) voor zwevende elementen.
export const DECOR_CATALOG = [
  { id: "decor_boom",         label: "Boom",         emoji: "🌳", grootte: 36 },
  { id: "decor_palm",         label: "Palm",         emoji: "🌴", grootte: 36 },
  { id: "decor_cactus",       label: "Cactus",       emoji: "🌵", grootte: 30 },
  { id: "decor_bloem",        label: "Bloem",        emoji: "🌸", grootte: 22 },
  { id: "decor_tulp",         label: "Tulp",         emoji: "🌷", grootte: 22 },
  { id: "decor_gras",         label: "Gras",         emoji: "🌾", grootte: 22 },
  { id: "decor_paddenstoel",  label: "Paddenstoel",  emoji: "🍄", grootte: 24 },
  { id: "decor_wolk",         label: "Wolk",         emoji: "☁️", grootte: 32, alpha: 0.85, bob: { snelheid: 0.6, amp: 4 } },
  { id: "decor_maan",         label: "Maan",         emoji: "🌙", grootte: 28, alpha: 0.9 },
  { id: "decor_ster",         label: "Ster",         emoji: "⭐", grootte: 22, bob: { snelheid: 1.5, amp: 2 } },
  { id: "decor_vlinder",      label: "Vlinder",      emoji: "🦋", grootte: 24, bob: { snelheid: 4, amp: 6 } },
  { id: "decor_vogel",        label: "Vogel",        emoji: "🐦", grootte: 24, bob: { snelheid: 3, amp: 5 } },
  { id: "decor_rots",         label: "Rots",         emoji: "🪨", grootte: 28 },
  { id: "decor_fakkel",       label: "Fakkel",       emoji: "🔥", grootte: 26, bob: { snelheid: 6, amp: 1.5 } },
  // Cheerful platformer-decor (Mario-vibe)
  { id: "decor_zonnebloem",   label: "Zonnebloem",   emoji: "🌻", grootte: 32 },
  { id: "decor_bord",         label: "Bordje",       emoji: "🪧", grootte: 28 },
  { id: "decor_pijp",         label: "Pijp",         emoji: "🟢", grootte: 34 },
  { id: "decor_mystery",      label: "Mystery-blok", emoji: "❓", grootte: 28, bob: { snelheid: 2, amp: 2 } },
  { id: "decor_krat",         label: "Krat (decor)", emoji: "📦", grootte: 30 },
  { id: "decor_ladder",       label: "Ladder",       emoji: "🪜", grootte: 36 },
  { id: "decor_sprankel",     label: "Sprankel",     emoji: "✨", grootte: 22, bob: { snelheid: 5, amp: 3 } },
];
export const DECOR_RENDER = Object.fromEntries(DECOR_CATALOG.map((d) => [d.id, d]));

// Vooraf-gemaakte presets — verschijnen als vaste tegels in het OBLITERATOR-menu.
// Shape gelijk aan user-levels uit de DB ({ id, naam, obstakels, lengte, maker_naam })
// zodat ze door dezelfde custom-level-runner gespeeld worden.
export const PRESET_LEVELS = [
  {
    id: "preset-demon-rit",
    naam: "🎢 Demon Rit",
    maker_naam: BRAND.name,
    lengte: 12000,
    // Demon-difficulty pacing in Leerkwartier-stijl (cheerful biomes geven
    // witte spikes + houten kratten — geen skeletten/halloween). Geïnspireerd
    // op de Geometry Dash demon-level "Skeletal Shenanigans" qua dichtheid,
    // niet qua thema. Combinaties: spike-clusters, plafond-pinches, valkuilen,
    // zwevende mijnen, vallende stenen, bliksem.
    obstakels: [
      // 1 — Warming up
      { type: "spike", x: 600 },
      { type: "ring", x: 800 },
      { type: "spike", x: 1000 },
      { type: "spike", x: 1100 },
      { type: "ring", x: 1300 },
      // 2 — Opbouw
      { type: "spike", x: 1600 },
      { type: "spike", x: 1700 },
      { type: "plafondstekel", x: 1900 },
      { type: "ring", x: 2050 },
      { type: "blok", x: 2200 },
      { type: "spike", x: 2400 },
      { type: "mystery", x: 2550 },
      { type: "spike", x: 2700 },
      { type: "spike", x: 2780 },
      { type: "ring", x: 2900 },
      // 3 — Mijnenveld
      { type: "mijn", x: 3050, y: 200 },
      { type: "spike", x: 3200 },
      { type: "mijn", x: 3400, y: 180 },
      { type: "vallende_steen", x: 3500 },
      { type: "ring", x: 3650 },
      { type: "spike", x: 3800 },
      { type: "plafondstekel", x: 3850 },
      { type: "blok", x: 4000 },
      { type: "plafondstekel", x: 4150 },
      { type: "spike", x: 4250 },
      { type: "hart", x: 4400 },
      // 4 — Stenen-regen
      { type: "schild", x: 4500 },
      { type: "vallende_steen", x: 4700 },
      { type: "spike", x: 4850 },
      { type: "vallende_steen", x: 5000 },
      { type: "vallende_steen", x: 5100 },
      { type: "ring", x: 5200 },
      { type: "vallende_steen", x: 5350 },
      { type: "plafondstekel", x: 5500 },
      { type: "spike", x: 5600 },
      { type: "vallende_steen", x: 5750 },
      { type: "spike", x: 5900 },
      { type: "ring", x: 6000 },
      { type: "vallende_steen", x: 6100 },
      { type: "spike", x: 6300 },
      // 5 — Pit of despair
      { type: "trampoline", x: 6600 },
      { type: "ring", x: 6750, y: 100 },
      { type: "ring", x: 6800, y: 100 },
      { type: "valkuil", x: 6900 },
      { type: "spike", x: 7100 },
      { type: "schans", x: 7250 },
      { type: "mijn", x: 7400, y: 200 },
      { type: "spike", x: 7550 },
      { type: "blok", x: 7700 },
      { type: "plafondstekel", x: 7850 },
      { type: "spike", x: 7950 },
      { type: "valkuil", x: 8100 },
      { type: "ring", x: 8300 },
      { type: "spike", x: 8400 },
      // 6 — Storm
      { type: "magneet", x: 8550 },
      { type: "spike", x: 8650 },
      { type: "spike", x: 8730 },
      { type: "ring", x: 8800 },
      { type: "ring", x: 8850 },
      { type: "ring", x: 8900 },
      { type: "plafondstekel", x: 9000 },
      { type: "vallende_steen", x: 9100 },
      { type: "blok", x: 9250 },
      { type: "spike", x: 9400 },
      { type: "spike", x: 9480 },
      { type: "bliksem", x: 9650, y: 200 },
      { type: "ring", x: 9800 },
      { type: "plafondstekel", x: 9900 },
      { type: "spike", x: 10000 },
      { type: "blok", x: 10150 },
      { type: "mijn", x: 10300, y: 200 },
      // 7 — Final sprint
      { type: "bom", x: 10500 },
      { type: "spike", x: 10700 },
      { type: "spike", x: 10780 },
      { type: "plafondstekel", x: 10900 },
      { type: "spike", x: 11000 },
      { type: "blok", x: 11150 },
      { type: "mijn", x: 11300, y: 200 },
      { type: "spike", x: 11450 },
      { type: "valkuil", x: 11600 },
      { type: "ring", x: 11800 },
      { type: "ring", x: 11850 },
      { type: "ring", x: 11900 },
    ],
  },
];

// Speler-skins. unlockLevel = level dat behaald moet zijn (1 = altijd open,
// null = via speciale unlock zoals Oblivion Pulse).
export const SKINS = [
  { id: "default",   label: BRAND.name,  emoji: "🔴", unlockLevel: 1 },
  { id: "spider",    label: "Spin",       emoji: "🕷️", unlockLevel: 10 },
  { id: "popje",     label: "Popje",      emoji: "🪆", unlockLevel: 20 },
  { id: "elephant",  label: "Olifant",    emoji: "🐘", unlockLevel: 30 },
  { id: "trollface", label: "Trollface",  emoji: "😈", unlockLevel: 40 },
  { id: "triangle",  label: "Driehoek",   emoji: "🔺", unlockLevel: 50 },
  { id: "xbox",      label: "Xbox",       emoji: "🎮", unlockLevel: 60 },
  { id: "gorilla",   label: "Gorilla",    emoji: "🦍", unlockLevel: 70 },
  { id: "yinyang",   label: "Yin Yang",   emoji: "☯️", unlockLevel: 80 },
  { id: "eye",       label: "Oog",         emoji: "👁️", unlockLevel: 90 },
  { id: "lvl100",    label: "Level 100",  emoji: "💎", unlockLevel: 100 },
  { id: "blackhole", label: "Black Hole", emoji: "🕳️", unlockLevel: null },
];
export const SKIN_BY_ID = Object.fromEntries(SKINS.map((s) => [s.id, s]));
