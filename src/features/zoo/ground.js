// ground.js — grond-types die je op de vloer kunt "schilderen" (Zoo Tycoon-stijl
// terrein-kwast). Een geschilderd vakje krijgt de vaste kleur van die grondsoort
// i.p.v. de natuurlijke hoogte-kleur. "Gras" = wissen → terug naar de
// hoogte-kleur (gras/rots afhankelijk van de hoogte).
export const GROUND_TYPES = [
  { key: "gras", label: "Gras", emoji: "🌱", color: null },     // null = natuurlijke hoogte-kleur
  { key: "zand", label: "Zand", emoji: "🏖️", color: "#e4ce8c" },
  { key: "aarde", label: "Aarde", emoji: "🟫", color: "#8c6a45" },
  { key: "sneeuw", label: "Sneeuw", emoji: "❄️", color: "#eef2f6" },
  { key: "rots", label: "Rots", emoji: "🪨", color: "#8f8c87" },
];

// key → hex (of null voor "gras"/natuurlijk).
export const GROUND_COLOR = Object.fromEntries(GROUND_TYPES.map((g) => [g.key, g.color]));
