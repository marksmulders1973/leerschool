// Gedeelde synoniemen-laag voor leerpad-zoeken (Mark 2026-06-14, gedeeld 2026-06-16).
// Gebruikers typen lekentaal ("nederlands", "rekenen", "topografie", "aardrijkskunde")
// terwijl de paden interne vak-namen hebben ("taal", "wiskunde", "aardrijkskunde").
// Deze map koppelt zoekwoorden aan vak-keys zodat een zoekterm óók paden van dat vak
// vindt, ook als het woord niet letterlijk in titel/trefwoorden staat.
//
// Gebruikt door:
//   - LearnPathsHub.jsx  (de vakken-grid-zoekbalk)
//   - LeerpadBot.jsx     (de "Wat wil je leren?"-suggestie-zoekbalk)
// Beide zoekbalken horen identiek te reageren — daarom één bron van waarheid.

export const SUBJECT_SYNONYMS = [
  { terms: ["nederlands", "taal", "spelling", "grammatica", "werkwoord", "werkwoorden", "ontleden", "woordsoorten", "woordenschat", "begrijpend", "lezen", "leesvaardigheid", "schrijven", "tekstverband", "samenvatten"], subjects: ["taal", "nederlands", "begrijpend-lezen"] },
  { terms: ["rekenen", "wiskunde", "reken", "getallen", "breuken", "procenten", "verhoudingen", "meten", "meetkunde", "tafels", "sommen", "kommagetallen", "oppervlakte", "pythagoras"], subjects: ["rekenen", "wiskunde"] },
  { terms: ["engels", "english"], subjects: ["engels"] },
  { terms: ["duits", "deutsch"], subjects: ["duits"] },
  { terms: ["frans", "francais", "français"], subjects: ["frans"] },
  { terms: ["aardrijkskunde", "topografie", "topo", "kaart", "kaartlezen", "provincies", "landen", "klimaat"], subjects: ["aardrijkskunde"] },
  { terms: ["geschiedenis", "historie", "tijdvak", "tijdvakken", "oorlog"], subjects: ["geschiedenis"] },
  { terms: ["biologie", "planten", "dieren", "lichaam", "organen"], subjects: ["biologie", "natuur"] },
  { terms: ["natuur", "natuuronderwijs"], subjects: ["natuur", "biologie"] },
  { terms: ["natuurkunde", "nask", "krachten", "elektriciteit", "energie"], subjects: ["natuurkunde"] },
  { terms: ["scheikunde", "chemie", "stoffen"], subjects: ["scheikunde"] },
  { terms: ["economie", "geld", "sparen", "lenen", "economisch"], subjects: ["economie"] },
  { terms: ["maatschappijleer", "maatschappij", "burgerschap", "politiek"], subjects: ["maatschappijleer", "wereldorientatie"] },
  { terms: ["informatica", "programmeren", "computer"], subjects: ["informatica"] },
  { terms: ["kunst", "tekenen", "muziek", "beeldend"], subjects: ["kunst"] },
  { terms: ["studievaardigheden", "studievaardigheid", "grafiek", "grafieken", "tabel", "tabellen"], subjects: ["studievaardigheden"] },
  { terms: ["verkeer", "verkeersexamen", "vvn", "voorrang", "fiets", "verkeersbord", "verkeersborden"], subjects: ["verkeer", "wereldorientatie"] },
  { terms: ["wereldorientatie", "wereldoriëntatie", "wereld"], subjects: ["wereldorientatie", "aardrijkskunde", "geschiedenis", "natuur", "biologie"] },
];

// Geeft de set vak-keys terug die bij een zoekterm horen (of null als niets matcht).
// Match: heel woord in de query, of de term begint met de query (partieel typen:
// "neder" → "nederlands"), of de query begint met de term ("nederlandse" → "nederlands").
export function subjectsForQuery(qRaw) {
  if (!qRaw || qRaw.length < 2) return null;
  const qWords = qRaw.split(/\s+/).filter(Boolean);
  const out = new Set();
  for (const g of SUBJECT_SYNONYMS) {
    const hit = g.terms.some((t) =>
      qWords.includes(t) ||
      (qRaw.length >= 3 && t.startsWith(qRaw)) ||
      (qRaw.length >= 4 && qRaw.startsWith(t))
    );
    if (hit) g.subjects.forEach((s) => out.add(s));
  }
  return out.size ? out : null;
}
