// Centrale brand-config. Naam-migratie van "Studiebol" naar "Leerkwartier"
// uitgevoerd 2026-05-03. Domein-omzet gestart op dezelfde dag.
// Oude domein studiebol.online wordt via Vercel-dashboard 301-geredirect
// naar leerkwartier.app voor SEO-continuïteit en bestaande bookmarks.

export const BRAND = {
  name: "Leerkwartier",
  shortName: "leerkwartier",
  domain: "leerkwartier.app",
  email: "info@smulsoft.nl",
  publisher: "Smulsoft",
  // Maand 1 snoei (visie-bewaker 2026-05-10): identiteits-tekst aangescherpt.
  // ICP = Cito-ouder. "Spelen" weg uit payoff (game-impliciet, niet ICP).
  // Slogan benadrukt "écht begrijpen" als didactische belofte.
  slogan: "Een kwartier per dag — écht begrijpen wat je leert.",
  payoff: "Een rustige bijlesdocent in je broekzak. 15 minuten per dag is genoeg.",
};
