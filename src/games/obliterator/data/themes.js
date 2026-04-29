// Visual themes per level. Elke 1000 punten = nieuw level = nieuw theme.
// Bewust contrastrijke kleuren zodat de player-orb altijd opvalt.

export const THEMES = [
  { id: "desert",    name: "Woestijn",    bg: ["#f6d365", "#fda085"], ground: "#a8650b", accent: "#fff3b0", obstacle: "#5a2e09" },
  { id: "space",     name: "Ruimte",      bg: ["#0f0c29", "#302b63"], ground: "#1a1a2e", accent: "#9d4edd", obstacle: "#e0aaff" },
  { id: "ocean",     name: "Onderwater",  bg: ["#43cea2", "#185a9d"], ground: "#0c4a6e", accent: "#a7f3d0", obstacle: "#0e7490" },
  { id: "cyberpunk", name: "Cyberpunk",   bg: ["#0f0033", "#ff006e"], ground: "#1a0e3d", accent: "#fb5607", obstacle: "#3a86ff" },
  { id: "volcano",   name: "Vulkaan",     bg: ["#6a040f", "#dc2f02"], ground: "#370617", accent: "#ffba08", obstacle: "#03071e" },
  { id: "arctic",    name: "Arctisch",    bg: ["#a1c4fd", "#c2e9fb"], ground: "#dbeafe", accent: "#3b82f6", obstacle: "#1e40af" },
  { id: "jungle",    name: "Jungle",      bg: ["#11998e", "#38ef7d"], ground: "#14532d", accent: "#fef08a", obstacle: "#581c87" },
  { id: "neon",      name: "Neon",        bg: ["#000000", "#0f0f0f"], ground: "#000000", accent: "#00ff88", obstacle: "#ff0080" },
  { id: "candy",     name: "Snoep",       bg: ["#ff9a9e", "#fad0c4"], ground: "#fb7185", accent: "#fef3c7", obstacle: "#7c3aed" },
  { id: "void",      name: "Leegte",      bg: ["#ffffff", "#e5e7eb"], ground: "#1f2937", accent: "#000000", obstacle: "#dc2626" },
];

export function themeForLevel(level) {
  return THEMES[Math.min(Math.max(level, 1) - 1, THEMES.length - 1)];
}
