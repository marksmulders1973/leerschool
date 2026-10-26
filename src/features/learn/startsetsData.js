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

  // Groep 5 taal (curriculum: woordsoorten zelfstandig naamwoord en werkwoord; woordenschat).
  // Opwarmen met groep-4-stof (meervoud, verkleinwoord) → woordsoorten → synoniem/tegenstelling →
  // woorden in zinnen → hoofdletters en leestekens.
  "5|taal": {
    titel: "Taal & lezen · groep 5",
    emoji: "✏️",
    items: [
      { pad: "taal-woorden-zinnen-g4", stap: 2, n: 2 },        // meervoud
      { pad: "taal-woorden-zinnen-g4", stap: 3, n: 2 },        // verkleinwoorden
      { pad: "woordsoorten-po", stap: 1, n: 3 },               // zelfstandig naamwoord
      { pad: "woordsoorten-po", stap: 2, n: 3 },               // werkwoord
      { pad: "synoniemen-tegenstellingen-po", stap: 1, n: 2 }, // synoniem
      { pad: "synoniemen-tegenstellingen-po", stap: 3, n: 2 }, // tegenstelling
      // woordenschat-po stap 4 ("vorderde gestaag", "belachelijk klein") is groep 7-8-woordenschat — eruit (nakijkers 26 okt).
      { pad: "interpunctie-po", stap: 2, n: 3 },               // hoofdletters
      { pad: "interpunctie-po", stap: 3, n: 3 },               // punt, vraagteken, uitroepteken
    ],
  },

  // Groep 5 spelling (ei/ij en au/ou zitten vast; samenstellingen, hoofdletters, -isch/-lijk;
  // eerste werkwoordspelling = tegenwoordige tijd, de d/t-regels komen in groep 6).
  "5|spelling": {
    titel: "Spelling · groep 5",
    emoji: "📝",
    items: [
      { pad: "spelling-ei-ij-au-ou", stap: 2, n: 2 },   // woorden met ei
      { pad: "spelling-ei-ij-au-ou", stap: 3, n: 2 },   // woorden met ij
      { pad: "spelling-ei-ij-au-ou", stap: 4, n: 2 },   // trucjes ei/ij
      { pad: "spelling-ei-ij-au-ou", stap: 5, n: 2 },   // au
      { pad: "spelling-ei-ij-au-ou", stap: 6, n: 2 },   // ou
      { pad: "spelling-overige-po", stap: 3, n: 3 },    // samenstellingen
      { pad: "spelling-overige-po", stap: 4, n: 2 },    // hoofdletters
      { pad: "spelling-overige-po", stap: 1, n: 2 },    // -isch en -lijk
      { pad: "spelling-ei-ij-au-ou", stap: 7, n: 1 },   // alle vier door elkaar ("koud"; vraag 2 van die stap is weer d/t)
      { pad: "werkwoordsspelling-dt", stap: 1, n: 1 },  // wat is een werkwoord? (stap 8 van ei/ij begint met "trein" = al vraag 1)
      { pad: "werkwoordsspelling-dt", stap: 2, n: 1 },  // tegenwoordige tijd: "hij speelt" (de jij-inversie is groep 6-7 — nakijkers 26 okt)
    ],
  },

  // Groep 5 begrijpend lezen ("wordt een echt vak"): van zoeken in korte tekstjes naar tekstsoort,
  // signaalwoorden, hoofdgedachte en twee echte teksten.
  "5|begrijpend-lezen": {
    titel: "Begrijpend lezen · groep 5",
    emoji: "📖",
    items: [
      { pad: "korte-teksten-snappen-g4", stap: 3, n: 3 },       // het antwoord staat in de tekst
      { pad: "korte-teksten-snappen-g4", stap: 2, n: 3 },       // drie zinnen — wie, wat, waar
      { pad: "korte-teksten-snappen-g4", stap: 4, n: 2 },       // volgorde
      { pad: "begrijpend-lezen-strategie", stap: 2, n: 2 },     // tekstsoorten
      { pad: "begrijpend-lezen-strategie", stap: 3, n: 3 },     // signaalwoorden
      { pad: "samenvatten-hoofdgedachte-po", stap: 1, n: 4 },   // wat is een hoofdgedachte
      // Bewust geen vragen uit begrijpend-lezen-teksten-po (lange teksten, elke vraag herhaalt de hele
      // tekst) — voor de eerste 20 van groep 5 korte tekstjes die in de vraag zelf staan; als slot één
      // echt tekstje van zes zinnen met drie vragen.
      { pad: "korte-teksten-snappen-g4", stap: 5, n: 3 },       // een echt tekstje
    ],
  },

  // Groep 5 natuur & techniek: dieren en seizoenen, dierenklassen, eerste blik op het zonnestelsel.
  "5|natuur": {
    titel: "Natuur & techniek · groep 5",
    emoji: "🌱",
    items: [
      { pad: "dieren-seizoenen-natuur", stap: 2, n: 2 },   // zoogdieren
      { pad: "dieren-seizoenen-natuur", stap: 3, n: 2 },   // vogels
      { pad: "dieren-seizoenen-natuur", stap: 6, n: 1 },   // levensstadia
      { pad: "dieren-seizoenen-natuur", stap: 7, n: 1 },   // lente (de zomer-vraag is groep-7-stof: schuine aardas)
      { pad: "dieren-seizoenen-natuur", stap: 8, n: 2 },   // herfst en winter
      // stap 9 (planten) begint met "fotosynthese" = groep 7-8-term; stap 4 van sterren-planeten (eb/vloed,
      // maanlanding) idem — eruit (nakijkers 26 okt).
      { pad: "dieren-seizoenen-natuur", stap: 10, n: 2 },  // voedselketen
      { pad: "dierenklassen-po", stap: 1, n: 1 },          // de 6 dierenklassen (vleermuis; de walvis zat al in vraag 1)
      { pad: "dierenklassen-po", stap: 2, n: 2 },          // zoogdieren + vogels
      { pad: "dierenklassen-po", stap: 3, n: 2 },          // vissen + amfibieën
      { pad: "dierenklassen-po", stap: 4, n: 1 },          // reptielen + insecten
      { pad: "dieren-seizoenen-natuur", stap: 4, n: 2 },   // vissen, reptielen en amfibieën
      // sterren-planeten stap 1 ("bal van gas die kernfusie doet") is te abstract voor groep 5 — alleen stap 2.
      { pad: "sterren-planeten", stap: 2, n: 2 },          // het zonnestelsel
    ],
  },

  // Groep 5 aardrijkskunde (start als vak): kaartlezen is het enige groep-5-pad → dun, zie plan B5.
  "5|aardrijkskunde": {
    titel: "Aardrijkskunde · groep 5",
    emoji: "🌍",
    items: [
      { pad: "kaartlezen-po", stap: 1, n: 8 },  // wat is een kaart
      { pad: "kaartlezen-po", stap: 2, n: 7 },  // kompasroos
      { pad: "kaartlezen-po", stap: 3, n: 1 },  // schaal: alleen "1 cm = 1 km" (rekenen met schaal is groep 6-7 — nakijkers 26 okt)
      { pad: "kaartlezen-po", stap: 4, n: 4 },  // legenda
    ],
  },

  // Groep 5 geschiedenis (start: vroeger en nu): één pad → dun, zie plan B5.
  "5|geschiedenis": {
    titel: "Geschiedenis · groep 5",
    emoji: "🏛️",
    items: [
      { pad: "geschiedenis-vroeger-en-nu-g5", stap: 1, n: 5 },  // wat is geschiedenis
      { pad: "geschiedenis-vroeger-en-nu-g5", stap: 2, n: 5 },  // de tijdbalk
      { pad: "geschiedenis-vroeger-en-nu-g5", stap: 3, n: 5 },  // leven en school vroeger
      { pad: "geschiedenis-vroeger-en-nu-g5", stap: 4, n: 5 },  // ridders en kastelen
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
