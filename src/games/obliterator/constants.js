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
    id: "preset-skeletal-shenanigans",
    naam: "🔥 Skeletal Shenanigans",
    maker_naam: BRAND.name,
    lengte: 16000,
    // Donkere demon-arena geïnspireerd op de gelijknamige Geometry Dash demon-level.
    // bioom=7 = VOLCANO VALLEY: dark-red lava, mineur 150 BPM, geen cheerful palette.
    // intenseAmbiance=true forceert bliksem-flitsen + vuur-erupties aan vanaf frame 0
    // (normaal pas vanaf level 50). 10 secties met afwisselende mechanieken — niet
    // alleen springen: trampoline-ritmes, valkuilen, slow-mo + lowgrav + boost zones,
    // mijnenvelden, stenen-regen, bliksem-gauntlet.
    bioom: 7,
    intenseAmbiance: true,
    obstakels: [
      // ── S1: SLOW BUILD (0-1500) — losmaken op het ritme ──────────────
      { type: "spike", x: 600 },
      { type: "ring", x: 800 },
      { type: "spike", x: 1000 },
      { type: "spike", x: 1100 },
      { type: "ring", x: 1300 },
      { type: "mystery", x: 1450 },
      // ── S2: PINCH WALK (1500-3000) — plafond+grond knijp-combos ─────
      { type: "spike", x: 1600 },
      { type: "spike", x: 1700 },
      { type: "plafondstekel", x: 1900 },
      { type: "spike", x: 1970 },
      { type: "ring", x: 2150 },
      { type: "plafondstekel", x: 2300 },
      { type: "blok", x: 2400 },
      { type: "spike", x: 2600 },
      { type: "spike", x: 2680 },
      { type: "plafondstekel", x: 2820 },
      { type: "ring", x: 2950 },
      // ── S3: AERIAL MIJNENVELD (3000-4500) — zwevende mijnen + bliksem ──
      { type: "mijn", x: 3050, y: 200 },
      { type: "spike", x: 3180 },
      { type: "mijn", x: 3320, y: 180 },
      { type: "mijn", x: 3420, y: 260 },
      { type: "ring", x: 3550 },
      { type: "bliksem", x: 3700, y: 200 },
      { type: "plafondstekel", x: 3820 },
      { type: "spike", x: 3870 },
      { type: "mijn", x: 4000, y: 210 },
      { type: "blok", x: 4130 },
      { type: "plafondstekel", x: 4260 },
      { type: "spike", x: 4330 },
      { type: "hart", x: 4450 },
      // ── S4: STENEN-STORM (4500-6000) — vallende stenen-cascade ──────
      { type: "schild", x: 4520 },
      { type: "vallende_steen", x: 4700 },
      { type: "spike", x: 4830 },
      { type: "vallende_steen", x: 4980 },
      { type: "vallende_steen", x: 5060 },
      { type: "ring", x: 5180 },
      { type: "vallende_steen", x: 5300 },
      { type: "plafondstekel", x: 5400 },
      { type: "spike", x: 5470 },
      { type: "vallende_steen", x: 5600 },
      { type: "vallende_steen", x: 5680 },
      { type: "spike", x: 5800 },
      { type: "ring", x: 5900 },
      { type: "vallende_steen", x: 5970 },
      // ── S5: SLOW-MO BALLET (6000-7000) — alleen doable in slow-mo ───
      { type: "zone_slow", x: 6000 },
      { type: "spike", x: 6120 },
      { type: "spike", x: 6175 },
      { type: "spike", x: 6230 },
      { type: "plafondstekel", x: 6360 },
      { type: "spike", x: 6440 },
      { type: "ring", x: 6550 },
      { type: "plafondstekel", x: 6650 },
      { type: "spike", x: 6720 },
      { type: "spike", x: 6790 },
      { type: "plafondstekel", x: 6870 },
      { type: "spike", x: 6940 },
      // ── S6: TRAMPOLINE LAB (7000-8500) — verticaal spel ─────────────
      { type: "trampoline", x: 7050 },
      { type: "ring", x: 7170, y: 100 },
      { type: "ring", x: 7240, y: 110 },
      { type: "valkuil", x: 7360 },
      { type: "spike", x: 7570 },
      { type: "schans", x: 7670 },
      { type: "mijn", x: 7820, y: 180 },
      { type: "ring", x: 7940, y: 140 },
      { type: "valkuil", x: 8060 },
      { type: "ring", x: 8270 },
      { type: "spike", x: 8370 },
      { type: "plafondstekel", x: 8430 },
      // ── S7: BLIKSEM GAUNTLET (8500-10000) — donder en stenen ────────
      { type: "magneet", x: 8550 },
      { type: "spike", x: 8650 },
      { type: "spike", x: 8730 },
      { type: "ring", x: 8800 },
      { type: "ring", x: 8855 },
      { type: "ring", x: 8910 },
      { type: "plafondstekel", x: 9000 },
      { type: "bliksem", x: 9120, y: 200 },
      { type: "vallende_steen", x: 9260 },
      { type: "spike", x: 9380 },
      { type: "blok", x: 9480 },
      { type: "mijn", x: 9620, y: 200 },
      { type: "bliksem", x: 9750, y: 200 },
      { type: "ring", x: 9870 },
      { type: "plafondstekel", x: 9940 },
      // ── S8: LOWGRAV DRIFT (10000-11500) — float-fysica ─────────────
      { type: "zone_lowgrav", x: 10000 },
      { type: "mijn", x: 10120, y: 140 },
      { type: "ring", x: 10220, y: 100 },
      { type: "plafondstekel", x: 10340 },
      { type: "mijn", x: 10440, y: 180 },
      { type: "spike", x: 10540 },
      { type: "ring", x: 10620, y: 120 },
      { type: "mijn", x: 10720, y: 160 },
      { type: "plafondstekel", x: 10830 },
      { type: "spike", x: 10920 },
      { type: "ring", x: 11030, y: 140 },
      { type: "mijn", x: 11130, y: 200 },
      { type: "spike", x: 11240 },
      { type: "mijn", x: 11340, y: 180 },
      { type: "plafondstekel", x: 11440 },
      // ── S9: BOOST RUN (11500-13000) — high-speed sprint ────────────
      { type: "zone_boost", x: 11550 },
      { type: "magneet", x: 11650 },
      { type: "ring", x: 11750 },
      { type: "ring", x: 11800 },
      { type: "ring", x: 11850 },
      { type: "spike", x: 11950 },
      { type: "plafondstekel", x: 12060 },
      { type: "spike", x: 12130 },
      { type: "spike", x: 12200 },
      { type: "spike", x: 12270 },
      { type: "valkuil", x: 12400 },
      { type: "ring", x: 12620 },
      { type: "spike", x: 12750 },
      { type: "plafondstekel", x: 12830 },
      { type: "spike", x: 12900 },
      // ── S10: FINAL INFERNO (13000-16000) — demon-finale, max chaos ─
      { type: "bom", x: 13050 },
      { type: "spike", x: 13200 },
      { type: "spike", x: 13270 },
      { type: "spike", x: 13340 },
      { type: "plafondstekel", x: 13450 },
      { type: "spike", x: 13530 },
      { type: "mystery", x: 13680 },
      { type: "mijn", x: 13830, y: 200 },
      { type: "vallende_steen", x: 13970 },
      { type: "vallende_steen", x: 14060 },
      { type: "spike", x: 14200 },
      { type: "valkuil", x: 14340 },
      { type: "spike", x: 14570 },
      { type: "plafondstekel", x: 14670 },
      { type: "plafondstekel", x: 14750 },
      { type: "mijn", x: 14880, y: 180 },
      { type: "spike", x: 15030 },
      { type: "spike", x: 15100 },
      { type: "bliksem", x: 15240, y: 200 },
      { type: "hart", x: 15380 },
      { type: "spike", x: 15500 },
      { type: "plafondstekel", x: 15600 },
      { type: "spike", x: 15680 },
      { type: "valkuil", x: 15780 },
      { type: "ring", x: 15920 },
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
