// btw — maakt zichtbaar dat er in elke winkelprijs al belasting (btw) zit.
//
// HEILIGE REGEL (zelfde als de loonstrook): de prijs die het kind betaalt
// BLIJFT exact de bestaande AssetRegistry.price. We splitsen die prijs alleen
// in "het ding zelf" + "btw", puur om het te kunnen léren. Niks wordt duurder.
//
// Tarieven zoals in het echt: 9% op dieren/eten, 21% op de rest.
export const BTW_LAAG = 9;
export const BTW_HOOG = 21;

// Levende dieren vallen onder het lage tarief; bouwwerken/attracties/decor hoog.
export function btwTarief(kind) {
  return kind === "animal" ? BTW_LAAG : BTW_HOOG;
}

// Splitst een prijs INCLUSIEF btw in het deel zonder btw + het btw-bedrag.
// excl = incl / (1 + t/100); btw = incl − excl (afgerond, telt altijd op tot incl).
export function splitsBtw(prijsIncl, tarief = BTW_HOOG) {
  const incl = Math.max(0, Math.round(prijsIncl || 0));
  const excl = Math.round(incl / (1 + tarief / 100));
  return { incl, excl, btw: Math.max(0, incl - excl), tarief };
}
