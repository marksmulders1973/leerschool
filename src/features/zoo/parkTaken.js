// 🗂️ Park-taken — "welke taken moet een kind voor zijn groep doen, en welke
// heeft het al gedaan?" (Mark 23 aug 2026: "geef langs het pad per groep aan
// wat een kind moet leren, bv. 'rekenen taak 1 van 8', met een ✓ voor wat de
// vorige keer al gedaan is").
//
// Idee: het gekleurde leerpad-lint loopt van groep 3 → brugklas. Langs dat pad
// staan leer-objecten (klok, breukentaart, kubus, piramide, landmarks…). Elk
// object hoort bij één groep en één vak, en verwijst naar een leerpad. Dit
// bestand koppelt elk object aan {groep-band, vak}; de nummering ("taak 1 van
// N") en de gedaan-status worden hier berekend zodat WandelPreview er bordjes
// van kan tekenen. Bron van de emoji/label/leerpadId blijft PARK_LEERMOMENTEN.

import { PARK_LEERMOMENTEN, TAAK_VOLGORDE } from "./parkLeermomenten";
import { VAK_INFO } from "../account/vakkenPerGroep";
import { LINT_BANDEN } from "./leerpadLint";

// momentId → { band, vak }. Sinds 2 sep 2026 AFGELEID uit PARK_LEERMOMENTEN
// (band/vak staan daar, in TAAK_VOLGORDE) — één bron van waarheid. De export
// blijft voor bestaande importeurs. band = index in LINT_BANDEN (0 = groep 3 …
// 6 = brugklas); vak = sleutel uit VAK_INFO.
export const MOMENT_TAAK = {};
for (const [id, band, vak] of TAAK_VOLGORDE) {
  if (PARK_LEERMOMENTEN[id]) MOMENT_TAAK[id] = { band, vak };
}

// Stabiele volgorde (insertion order van MOMENT_TAAK) → de taak-nummering.
const MOMENT_VOLGORDE = Object.keys(MOMENT_TAAK);

// Bereken de taken die langs het pad getoond worden.
//   aanwezig = Set van momentIds waarvan het object écht in dit park staat
//              (null = alles tonen, bv. bij een leeg/nieuw park of preview).
//   gedaan   = Set van leerpadIds die dit kind al deed (attempts > 0).
// Returnt een array taken, elk met de nummering binnen zijn groep+vak en de
// gedaan-vlag. Ook een per-groep telling (hoeveel van hoeveel gedaan).
export function berekenParkTaken(aanwezig = null, gedaan = null) {
  const gedaanSet = gedaan || new Set();
  // 1) verzamel de zichtbare taken in vaste volgorde
  const ruw = [];
  for (const momentId of MOMENT_VOLGORDE) {
    if (aanwezig && !aanwezig.has(momentId)) continue;
    const lm = PARK_LEERMOMENTEN[momentId];
    const meta = MOMENT_TAAK[momentId];
    if (!lm || !meta) continue;
    const leerpadId = lm.leerpadId;
    if (!leerpadId) continue;
    ruw.push({
      momentId,
      band: meta.band,
      vak: meta.vak,
      vakTitel: VAK_INFO[meta.vak]?.titel || meta.vak,
      vakEmoji: VAK_INFO[meta.vak]?.emoji || "•",
      objEmoji: lm.emoji || "📍",
      leerpadId,
      label: lm.leerLabel || lm.titel || momentId,
      kleur: LINT_BANDEN[meta.band]?.kleur || "#ffd54f",
      tekstKleur: LINT_BANDEN[meta.band]?.tekstKleur || "#234",
      groep: LINT_BANDEN[meta.band]?.groep || "",
      gedaan: gedaanSet.has(leerpadId),
    });
  }
  // 2) nummer per (band, vak): "taak nr van van"
  const teller = new Map(); // key band|vak → lopend nummer
  const totaal = new Map(); // key band|vak → totaal
  for (const t of ruw) {
    const k = t.band + "|" + t.vak;
    totaal.set(k, (totaal.get(k) || 0) + 1);
  }
  const taken = ruw.map((t) => {
    const k = t.band + "|" + t.vak;
    const nr = (teller.get(k) || 0) + 1;
    teller.set(k, nr);
    return { ...t, nr, van: totaal.get(k) };
  });
  // 3) per-groep telling (alle vakken samen) voor het niveau-bordje
  const perGroep = {};
  for (const t of taken) {
    const g = perGroep[t.band] || (perGroep[t.band] = { totaal: 0, gedaan: 0 });
    g.totaal += 1;
    if (t.gedaan) g.gedaan += 1;
  }
  return { taken, perGroep };
}
