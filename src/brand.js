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
  // ICP = Toets-ouder. "Spelen" weg uit payoff (game-impliciet, niet ICP).
  // Slogan (Mark 6 sep 2026): "Een kwartier per dag leren, een leven lang slimmer."
  slogan: "Een kwartier per dag leren, een leven lang slimmer.",
  payoff: "Een rustige bijlesdocent in je broekzak. 15 minuten per dag is genoeg.",
};
