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
  {
    // 💠 UNIVERSAL BLOCKS (Brian 3 jul 2026) — het moeilijkste level: een
    // diamant die iedereen wil, en aan het eind een draak die 'm bewaakt.
    // Ruimte-thema (bioom 9 = BLACK HOLE). De draak-boss + de aliens/heksen/
    // skeletten + de diamant-beloning komen in een volgend stukje; dit is de
    // supermoeilijke baan ernaartoe met dichte "5× op 1 scherm"-clusters.
    id: "preset-universal-blocks",
    naam: "💠 Universal Blocks",
    maker_naam: BRAND.name,
    lengte: 14000,
    bioom: 9,
    intenseAmbiance: true,
    dragonBoss: true, // vlag voor het draak-stukje (nog te bouwen)
    obstakels: [
      // ── S1: opwarmen (0-1600) ──
      { type: "spike", x: 620 },
      { type: "ring", x: 820 },
      { type: "spike", x: 1020 },
      { type: "plafondstekel", x: 1200 },
      { type: "spike", x: 1270 },
      { type: "mystery", x: 1450 },
      // ── S2: EERSTE 5×-CLUSTER (1700-2200) — vijf vlak achter elkaar ──
      { type: "spike", x: 1720 },
      { type: "spike", x: 1800 },
      { type: "spike", x: 1880 },
      { type: "plafondstekel", x: 1960 },
      { type: "spike", x: 2030 },
      { type: "hart", x: 2250 },
      // ── S3: mijnenveld + bliksem (2400-3600) ──
      { type: "mijn", x: 2450, y: 210 },
      { type: "spike", x: 2580 },
      { type: "mijn", x: 2720, y: 180 },
      { type: "bliksem", x: 2880, y: 200 },
      { type: "ring", x: 3020 },
      { type: "mijn", x: 3160, y: 250 },
      { type: "plafondstekel", x: 3300 },
      { type: "spike", x: 3370 },
      { type: "schild", x: 3560 },
      // ── S4: TWEEDE 5×-CLUSTER (3700-4300) — knijp-combo ──
      { type: "spike", x: 3720 },
      { type: "plafondstekel", x: 3800 },
      { type: "spike", x: 3870 },
      { type: "plafondstekel", x: 3950 },
      { type: "spike", x: 4020 },
      { type: "ring", x: 4250 },
      // ── S5: stenen-storm (4500-5800) ──
      { type: "vallende_steen", x: 4550 },
      { type: "spike", x: 4680 },
      { type: "vallende_steen", x: 4820 },
      { type: "vallende_steen", x: 4900 },
      { type: "ring", x: 5040 },
      { type: "vallende_steen", x: 5180 },
      { type: "plafondstekel", x: 5300 },
      { type: "spike", x: 5370 },
      { type: "vallende_steen", x: 5520 },
      { type: "hart", x: 5760 },
      // ── S6: DERDE 5×-CLUSTER (5900-6500) — spikes + mijn mix ──
      { type: "spike", x: 5920 },
      { type: "mijn", x: 6010, y: 200 },
      { type: "spike", x: 6100 },
      { type: "mijn", x: 6190, y: 230 },
      { type: "spike", x: 6280 },
      { type: "ring", x: 6520 },
      // ── S7: bliksem-gauntlet (6700-8000) ──
      { type: "bliksem", x: 6750, y: 190 },
      { type: "spike", x: 6880 },
      { type: "bliksem", x: 7020, y: 220 },
      { type: "plafondstekel", x: 7160 },
      { type: "spike", x: 7230 },
      { type: "bliksem", x: 7380, y: 200 },
      { type: "mijn", x: 7520, y: 240 },
      { type: "schild", x: 7720 },
      { type: "ring", x: 7900 },
      // ── S8: VIERDE 5×-CLUSTER (8100-8700) — plafond+grond+mijn ──
      { type: "plafondstekel", x: 8120 },
      { type: "spike", x: 8190 },
      { type: "mijn", x: 8280, y: 210 },
      { type: "spike", x: 8380 },
      { type: "plafondstekel", x: 8460 },
      { type: "hart", x: 8700 },
      // ── S9: valkuilen + stenen (8900-10200) ──
      { type: "valkuil", x: 8950 },
      { type: "spike", x: 9120 },
      { type: "vallende_steen", x: 9260 },
      { type: "valkuil", x: 9420 },
      { type: "ring", x: 9560 },
      { type: "vallende_steen", x: 9700 },
      { type: "plafondstekel", x: 9840 },
      { type: "spike", x: 9910 },
      { type: "valkuil", x: 10060 },
      { type: "schild", x: 10240 },
      // ── S10: VIJFDE 5×-CLUSTER (10400-11000) — de zwaarste ──
      { type: "spike", x: 10420 },
      { type: "plafondstekel", x: 10500 },
      { type: "mijn", x: 10580, y: 200 },
      { type: "spike", x: 10680 },
      { type: "plafondstekel", x: 10760 },
      { type: "hart", x: 11000 },
      // ── S11: laatste sprint naar de draak (11200-13600) ──
      { type: "bliksem", x: 11250, y: 200 },
      { type: "spike", x: 11400 },
      { type: "vallende_steen", x: 11560 },
      { type: "mijn", x: 11720, y: 220 },
      { type: "plafondstekel", x: 11880 },
      { type: "spike", x: 11950 },
      { type: "ring", x: 12140 },
      { type: "bliksem", x: 12320, y: 190 },
      { type: "vallende_steen", x: 12480 },
      { type: "spike", x: 12640 },
      { type: "mijn", x: 12800, y: 240 },
      { type: "plafondstekel", x: 12960 },
      { type: "spike", x: 13030 },
      { type: "schild", x: 13220 },
      { type: "ring", x: 13420 },
      { type: "hart", x: 13600 },
    ],
  },
];

// Speler-skins. unlockLevel = level dat behaald moet zijn (1 = altijd open,
// null = via speciale unlock zoals Oblivion Pulse).
// 2026-06-07 (15-agent-analyse + kritische review): catalog UITGEBREID, niet
// herbouwd. Zachtere vroege curve zodat een beginner snel een 2e/3e skin krijgt
// (analyse: oude poort lvl10 = beginner kreeg nooit variatie) + 7 nieuwe themed
// skins. Prestige-top (💎 lvl100 + 🕳️ Oblivion) behouden. Bestaande id's intact
// (geen regressie op reeds vrijgespeelde skins). unlockLevel UNIEK per skin
// (de live "ontgrendeld!"-celebratie matcht op exact level). 100% cosmetisch,
// gratis, kind-veilig. Emoji's bewust enkel-codepoint (canvas fillText, geen ZWJ).
// Brian-wens 2026-06-26: elke skin krijgt een EIGEN kracht (`kracht`) + een
// zeldzaamheid (`rarity`). Hoe zeldzamer de skin, hoe sterker de kracht
// (de rarity-tier 1..6 schaalt het effect — zie getSkinKracht hieronder).
// 100% gratis + kind-veilig, geen pay-to-win: krachten zijn klein/leuk.
export const SKINS = [
  { id: "default",   label: BRAND.name,    emoji: "🔴", unlockLevel: 1,   rarity: "common",    kracht: "score" },
  { id: "spider",    label: "Spin",         emoji: "🕷️", unlockLevel: 3,   rarity: "uncommon",  kracht: "magneet" },
  { id: "robot",     label: "Robot",        emoji: "🤖", unlockLevel: 5,   rarity: "uncommon",  kracht: "munt" },
  { id: "popje",     label: "Popje",        emoji: "🪆", unlockLevel: 8,   rarity: "common",    kracht: "sprong" },
  { id: "ninja",     label: "Ninja",        emoji: "🥷", unlockLevel: 12,  rarity: "rare",      kracht: "sprong" },
  { id: "elephant",  label: "Olifant",      emoji: "🐘", unlockLevel: 16,  rarity: "rare",      kracht: "slow" },
  { id: "professor", label: "Professor",    emoji: "🎓", unlockLevel: 22,  rarity: "rare",      kracht: "score" },
  { id: "trollface", label: "Trollface",    emoji: "😈", unlockLevel: 28,  rarity: "uncommon",  kracht: "munt" },
  { id: "astronaut", label: "Ruimtevaarder", emoji: "🚀", unlockLevel: 35, rarity: "epic",      kracht: "sprong" },
  { id: "triangle",  label: "Driehoek",     emoji: "🔺", unlockLevel: 42,  rarity: "rare",      kracht: "score" },
  { id: "xbox",      label: "Xbox",         emoji: "🎮", unlockLevel: 50,  rarity: "epic",      kracht: "munt" },
  { id: "pharaoh",   label: "Farao",        emoji: "🏺", unlockLevel: 58,  rarity: "epic",      kracht: "schild" },
  { id: "dragon",    label: "Drakenmeester", emoji: "🐉", unlockLevel: 66, rarity: "legendary", kracht: "schild" },
  { id: "gorilla",   label: "Gorilla",      emoji: "🦍", unlockLevel: 72,  rarity: "epic",      kracht: "sprong" },
  { id: "yinyang",   label: "Yin Yang",     emoji: "☯️", unlockLevel: 80,  rarity: "legendary", kracht: "slow" },
  { id: "eye",       label: "Oog",           emoji: "👁️", unlockLevel: 88, rarity: "legendary", kracht: "magneet" },
  { id: "champion",  label: "Kampioen",     emoji: "🏆", unlockLevel: 94,  rarity: "legendary", kracht: "score" },
  { id: "lvl100",    label: "Level 100",    emoji: "💎", unlockLevel: 100, rarity: "mythic",    kracht: "munt" },
  // Prestige + achievement-skins (unlockLevel null = niet via level). De
  // achievement-skins (2026-06-07, 15-agent-advies) geven een tweede unlock-
  // route náást level, zodat ook een speler die geen hoog level haalt skins
  // kan verdienen via vaardigheid/trouw. unlockHint = picker-label.
  { id: "blackhole",    label: "Black Hole",   emoji: "🕳️", unlockLevel: null, unlockHint: "Overleef Oblivion", rarity: "mythic",    kracht: "magneet" },
  { id: "boss_slayer",  label: "Boss Slayer",  emoji: "⚔️", unlockLevel: null, unlockHint: "Versla je 1e boss",  rarity: "epic",      kracht: "schild" },
  { id: "woordmeester", label: "Woordmeester", emoji: "📚", unlockLevel: null, unlockHint: "Spel LEERKWART",     rarity: "rare",      kracht: "score" },
  { id: "vuurtje",      label: "Vuurtje",      emoji: "🔥", unlockLevel: null, unlockHint: "3 dagen op rij",     rarity: "legendary", kracht: "sprong" },
  // ✦✦✦ UNIVERSAL (Brian 3 jul 2026) — de diamant die je van de draak wint in
  // het speciale level "Universal Blocks". Mythisch + sterk startschild.
  { id: "universal",    label: "Universal",    emoji: "💠", unlockLevel: null, unlockHint: "Versla de draak in Universal Blocks", rarity: "mythic", kracht: "schild" },
];
export const SKIN_BY_ID = Object.fromEntries(SKINS.map((s) => [s.id, s]));

// ── ZELDZAAMHEID (rarity) ────────────────────────────────────────
// tier 1..6 = hoe sterk de kracht wordt. kleur + ster voor de UI.
export const RARITY_META = {
  common:    { tier: 1, label: "Gewoon",        kleur: "#9e9e9e", ster: "★" },
  uncommon:  { tier: 2, label: "Ongewoon",      kleur: "#5dd15d", ster: "★★" },
  rare:      { tier: 3, label: "Zeldzaam",      kleur: "#42a5f5", ster: "★★★" },
  epic:      { tier: 4, label: "Episch",        kleur: "#b569f0", ster: "★★★★" },
  legendary: { tier: 5, label: "Legendarisch",  kleur: "#ffb300", ster: "★★★★★" },
  mythic:    { tier: 6, label: "Mythisch",      kleur: "#ff3e7f", ster: "★★★★★★" },
};

// ── SKIN-KRACHT-RESOLVER ─────────────────────────────────────────
// Geeft de uitgewerkte kracht van een skin terug: het type, de
// rarity-info én de concrete getallen (sterker bij hogere rarity).
// De game leest hier de multipliers/flags uit; de UI de naam/tekst.
export function getSkinKracht(skinId) {
  const skin = SKIN_BY_ID[skinId] || SKIN_BY_ID.default;
  const rarity = skin.rarity || "common";
  const meta = RARITY_META[rarity] || RARITY_META.common;
  const t = meta.tier; // 1..6
  const type = skin.kracht || "score";
  const basis = { type, rarity, meta };
  switch (type) {
    case "magneet":
      return { ...basis, naam: "Magneet", emoji: "🧲", altijdAan: true,
        straalMul: 1 + t * 0.25,
        beschrijving: `Ringen vliegen vanzelf naar je toe (bereik +${Math.round(t * 25)}%).` };
    case "schild":
      return { ...basis, naam: "Startschild", emoji: "🛡️",
        startSchildSec: t,
        beschrijving: `Je begint elke ronde ${t} sec onkwetsbaar.` };
    case "munt":
      return { ...basis, naam: "Muntmagnaat", emoji: "💰",
        muntMul: 1 + t,
        beschrijving: `${1 + t}× zoveel munten per ring.` };
    case "sprong":
      return { ...basis, naam: "Hoge sprong", emoji: "🦘",
        sprongMul: 1 + t * 0.05,
        beschrijving: `Je springt ${Math.round(t * 5)}% hoger.` };
    case "slow":
      return { ...basis, naam: "Slome wereld", emoji: "🐢",
        tempoMul: 1 - t * 0.035,
        beschrijving: `Wereld ${Math.round(t * 3.5)}% langzamer — makkelijker ontwijken.` };
    case "score":
    default:
      return { ...basis, type: "score", naam: "Puntenbonus", emoji: "⭐",
        scoreMul: 1 + t * 0.25,
        beschrijving: `${(1 + t * 0.25).toFixed(2)}× zoveel punten.` };
  }
}
