// Achievement-definities. Elke entry heeft een `check(event, state)` functie
// die true returnt op het moment dat de prestatie wordt vrijgespeeld.
// Volgorde: van laagdrempelig naar zwaar zodat de gebruiker een
// progressie-gevoel heeft bij doorlezen.

export const ACHIEVEMENTS = [
  {
    id: "first_blood",
    title: "First Blood",
    desc: "Eerste obliterate",
    icon: "💥",
    check: (e) => e.type === "obliterate",
  },
  {
    id: "combo_5",
    title: "Combo Starter",
    desc: "5 op een rij",
    icon: "🔥",
    check: (_e, s) => s.combo >= 5,
  },
  {
    id: "combo_10",
    title: "Combo Master",
    desc: "10 op een rij",
    icon: "⚡",
    check: (_e, s) => s.combo >= 10,
  },
  {
    id: "combo_25",
    title: "Combo Legend",
    desc: "25 op een rij — ×5 multiplier",
    icon: "👑",
    check: (_e, s) => s.combo >= 25,
  },
  {
    id: "untouchable_lvl3",
    title: "Untouchable",
    desc: "Bereik level 3 zonder hit",
    icon: "🛡️",
    check: (_e, s) => s.level >= 3 && s.lives === 3,
  },
  {
    id: "speed_demon",
    title: "Speed Demon",
    desc: "Bereik level 5",
    icon: "🚀",
    check: (_e, s) => s.level >= 5,
  },
  {
    id: "obliterator_100",
    title: "OBLITERATOR",
    desc: "100 obliterates totaal (over alle runs)",
    icon: "💀",
    check: (e, s) => e.type === "obliterate" && s.totalObliterates >= 100,
  },
  {
    id: "endgame",
    title: "End Game",
    desc: "Bereik level 10",
    icon: "🏆",
    check: (_e, s) => s.level >= 10,
  },
];

export const TOTAL_ACHIEVEMENTS = ACHIEVEMENTS.length;
