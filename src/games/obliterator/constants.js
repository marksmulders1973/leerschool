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
