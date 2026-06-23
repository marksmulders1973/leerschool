// loonstrook — pure rekenfunctie die de kwartier-beloning omzet in een
// echt loonstrookje (bruto → belasting eraf → netto).
//
// HEILIGE REGEL: het NETTO blijft exact wat het kind nu al krijgt. We rekenen
// het bruto eromheen (bruto hoger, belasting eraf = oud netto). Belasting voelt
// dus nooit als verlies — het is alleen zichtbaar gemaakt om het te leren.
//
// Niveau-adaptief: po = één aftrekpost (belasting), vo = loonheffing + premies.

function deelPosten(netto, niveau) {
  const n = Math.max(0, Math.round(netto || 0));
  if (niveau === "vo") {
    const bruto = Math.max(n, Math.round(n / 0.73)); // ~27% inhoudingen
    const loonheffing = Math.round(bruto * 0.18);
    const premie = Math.max(0, bruto - n - loonheffing);
    return {
      bruto,
      netto: n,
      niveau: "vo",
      posten: [
        { key: "brutoloon", label: "Brutoloon", bedrag: bruto, teken: "+" },
        { key: "loonbelasting", label: "Loonheffing", bedrag: loonheffing, teken: "−" },
        { key: "premie", label: "Premies (zorg/AOW)", bedrag: premie, teken: "−" },
        { key: "nettoloon", label: "Nettoloon", bedrag: n, teken: "=", netto: true },
      ],
    };
  }
  // po: één ronde aftrekpost van 20%.
  const bruto = Math.max(n, Math.round(n / 0.8));
  const belasting = Math.max(0, bruto - n);
  return {
    bruto,
    netto: n,
    niveau: "po",
    posten: [
      { key: "brutoloon", label: "Brutoloon", bedrag: bruto, teken: "+" },
      { key: "loonbelasting", label: "Belasting", bedrag: belasting, teken: "−" },
      { key: "nettoloon", label: "Nettoloon", bedrag: n, teken: "=", netto: true },
    ],
  };
}

export function maakLoonstrook(netto, niveau = "po") {
  return deelPosten(netto, niveau === "vo" ? "vo" : "po");
}
