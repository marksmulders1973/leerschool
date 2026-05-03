// Centrale brand-config. Naam-migratie van "Studiebol" naar "Leerkwartier"
// gestart 2026-05-03 (Studiebol-naam was al door ander bedrijf in gebruik).
// Code reflecteert vanaf nu de nieuwe naam; live deploy op studiebol.online
// wordt later omgezet naar leerkwartier.app (geclaimd 2026-05-03).

export const BRAND = {
  name: "Leerkwartier",
  shortName: "leerkwartier",
  // Live domein. Wisselt naar "leerkwartier.app" zodra de site-omzet
  // is uitgevoerd (DNS + Vercel + 301-redirect vanaf studiebol.online).
  domain: "studiebol.online",
  email: "info@smulsoft.nl",
  publisher: "Smulsoft",
  slogan: "Elk kwartier slimmer.",
  payoff: "15 minuten leren. Daarna klaar of spelen.",
};
