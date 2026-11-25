// 🎯 Doorstroomtoets-actie (Mark 25 nov 2026: "50 % korting op het Familie-pakket ... doe maar").
// Tot en met de laatste dag van de Doorstroomtoets (vr 12 feb 2027) kost het eerste jaar
// € 19,50 in plaats van € 39. Daarna geldt vanzelf weer € 39; er hoeft dan niets omgezet te worden.
//
// Dit bestand is de enige bron voor de actie in de app, de mails en de betaling
// (api/checkout-session.js rekent hetzelfde bedrag). De losse pagina's in public/ lezen
// public/actie.js: pas je hier de datum of het bedrag aan, pas het dan ook daar aan.
// Geen afhankelijkheden, zodat ook de serverfuncties het kunnen inladen.
//
// Eerlijk blijven: één echte einddatum voor iedereen. Geen aftelklok per bezoeker, geen
// "nog maar 3 plekken". Verlengen na een jaar blijft € 31. Oefenen blijft gratis t/m 2031.
export const ACTIE = {
  naam: "Doorstroomtoets-actie",
  eind: "2027-02-12T23:59:59+01:00",
  eindKort: "12 februari",
  prijs: "€ 19,50",
  cents: 1950,
  normaal: "€ 39",
};

export const actieLoopt = (nu = Date.now()) => nu < Date.parse(ACTIE.eind);

// Hele dagen tot en met de laatste actiedag (voor "nog 9 dagen" in de laatste twee weken).
export const actieDagen = (nu = Date.now()) => Math.max(0, Math.ceil((Date.parse(ACTIE.eind) - nu) / 86400e3));

// Op een knop: "€ 19,50 voor 12 maanden" of "€ 39 voor 12 maanden".
export const familiePrijs = (nu = Date.now()) => `${actieLoopt(nu) ? ACTIE.prijs : ACTIE.normaal} voor 12 maanden`;

// In een zin: mét de gewone prijs en de einddatum erbij, zodat niemand zich vergist.
export const familiePrijsZin = (nu = Date.now()) =>
  actieLoopt(nu)
    ? `${ACTIE.prijs} in plaats van ${ACTIE.normaal} voor 12 maanden (${ACTIE.naam}, t/m ${ACTIE.eindKort})`
    : `${ACTIE.normaal} voor 12 maanden`;

// Kort, voor een smalle knop: "nu € 19,50" of "€ 39 per jaar".
export const familiePrijsKort = (nu = Date.now()) => (actieLoopt(nu) ? `nu ${ACTIE.prijs}` : `${ACTIE.normaal} per jaar`);
