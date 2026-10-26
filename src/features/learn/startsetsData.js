// 🎯 Startsets — de eerste 20 vragen per groep × vak (Mark 26 okt 2026, plan docs/PLAN-BREEDTE-EERST.md:
// "bij rekenen krijgen de kinderen eerst 20 vragen; zorg eerst dat alles over de breedte klopt").
//
// Een startset is een vaste, nagekeken reeks van 20 vragen uit bestaande leerpaden, oplopend in
// moeilijkheid en passend bij de groep. Het Begin-kwartier en "Oefen nu" op de vak-tegel pakken die
// eerst; pas als alle 20 beantwoord zijn, kiest de gewone motor (zwakste plek, mix) weer zelf.
//
// Elk item: { pad, stap (1-based, zoals in het leerpad-bestand), n = zoveel vragen uit die stap,
// in de volgorde van het bestand }. De test src/features/learn/startsets.test.js controleert dat elke
// set precies 20 geldige vragen oplevert en schrijft ze uit naar docs/audit/STARTSET-<groep>-<vak>.md
// om na te kijken. Dit bestand is bewust puur (geen imports): de Vandaag-motor leest het ook.

export const STARTSET_N = 20;

export const STARTSETS = {
  // Groep 5 rekenen (curriculum: alle tafels en deeltafels, rekenen tot 1000, klokkijken, geld,
  // kennismaken met breuken). Van makkelijk naar lastig: tafels → deeltafels → klok → geld →
  // afronden → een redactiesom → de eerste breuken.
  "5|rekenen": {
    titel: "Rekenen · groep 5",
    emoji: "🔢",
    items: [
      { pad: "tafels-po", stap: 2, n: 2 },            // makkelijke tafels (2, 5, 10)
      { pad: "tafels-po", stap: 3, n: 2 },            // tafels van 3 en 4
      { pad: "tafels-po", stap: 4, n: 2 },            // lastige tafels (6-9)
      { pad: "delen-po", stap: 2, n: 2 },             // delen door 2, 5 en 10
      { pad: "delen-po", stap: 3, n: 1 },             // delen door 3 t/m 9
      { pad: "klokkijken", stap: 2, n: 1 },           // hele uren
      { pad: "klokkijken", stap: 3, n: 1 },           // halve uren
      { pad: "klokkijken", stap: 4, n: 1 },           // kwartieren
      { pad: "klokkijken", stap: 5, n: 1 },           // minuten
      { pad: "geld-rekenen", stap: 1, n: 1 },         // euro's en centen
      { pad: "geld-rekenen", stap: 2, n: 2 },         // optellen en aftrekken met geld
      { pad: "schatten-afronden", stap: 2, n: 2 },    // afronden op 10, 100, 1000
      { pad: "redactiesommen-pad", stap: 3, n: 1 },   // een één-stap-som
      { pad: "breuken-po", stap: 1, n: 1 },           // wat is een breuk? (kennismaken: één vraag)
    ],
  },
};

/** Sleutel van de startset voor een groep (1-8) en vak-id uit VAKKEN_PER_GROEP; "wiskunde" telt als rekenen. */
export function startsetSleutel(groep, vak) {
  const g = Number(groep);
  const v = vak === "wiskunde" ? "rekenen" : vak;
  return g >= 1 && g <= 8 && v ? `${g}|${v}` : null;
}

export function startsetVan(sleutel) {
  return (sleutel && STARTSETS[sleutel]) || null;
}

/** De paden waar een startset uit put (om dubbele blokjes in het kwartier te vermijden). */
export function startsetPaden(sleutel) {
  const s = startsetVan(sleutel);
  return s ? [...new Set(s.items.map((it) => it.pad))] : [];
}

/** Een kwartier-blokje dat de volgende `n` nog niet beantwoorde vragen van de startset geeft. */
export function startsetBlok(sleutel, n = 5) {
  const s = startsetVan(sleutel);
  if (!s) return null;
  return { soort: "vragen", startset: sleutel, pathId: null, n, titel: `${s.emoji} ${s.titel} · startset` };
}
