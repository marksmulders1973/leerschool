// Topic-taxonomie — brug tussen vragen en leerpaden.
//
// Doel: elke vraag krijgt één topic-string, elk leerpad heeft 1+ topics in zijn
// `topics`-array. Matching is dan een eenvoudige lookup ipv keyword-fuzzy.
//
// Naming-conventie: "<vakcode>.<deelgebied>.<onderwerp>".
// Vakcodes:
//   WI = wiskunde
//   NL = Nederlands
//   EN = Engels
//   BI = biologie
//   ... etc. (uitbreiden naar behoefte)
//
// Per topic een korte label voor in UI / filter-lijsten.

export const TOPIC_TAXONOMY = {
  // ─── WISKUNDE ─────────────────────────────────────────
  // Klas 1 basis (rekenen + meetkunde-basis)
  "WI.basis.coordinaten":      "Coördinatenstelsel",
  "WI.basis.tabellen":         "Tabellen + grafieken aflezen",
  "WI.rekenen.breuken":        "Breuken",
  "WI.rekenen.procenten":      "Procenten",
  "WI.rekenen.negatief":       "Negatieve getallen",
  "WI.rekenen.verhoudingen":   "Verhoudingen + schaal",

  // Algebra (klas 1-3)
  "WI.algebra.basis":          "Rekenen met letters (algebra-basis)",
  "WI.algebra.vergelijking":   "Vergelijkingen oplossen",
  "WI.algebra.kwadraten":      "Kwadraten en wortels",
  "WI.algebra.machten":        "Machten en machtsregels",
  "WI.algebra.lineair":        "Lineaire formules y=ax+b",
  "WI.algebra.parabolen":      "Parabolen y=ax²+bx+c",
  "WI.algebra.kwadratisch":    "Kwadratische vergelijkingen",

  // Meetkunde (klas 1-3)
  "WI.meetkunde.vlak":         "Vlakke figuren (omtrek + oppervlakte)",
  "WI.meetkunde.ruimte":       "Ruimtemeetkunde (inhoud + vergroten)",
  "WI.meetkunde.pythagoras":   "Pythagoras (rechthoekige driehoek)",
  "WI.meetkunde.gonio":        "Goniometrie (sin/cos/tan)",

  // Statistiek (klas 1-3)
  "WI.statistiek.beschrijven": "Statistiek (gemiddelde, mediaan, modus, spreiding)",

  // ─── NEDERLANDS (later vol getagd) ───────────────────
  "NL.spelling.dt":            "Werkwoordsspelling (d/t)",
  "NL.spelling.algemeen":      "Algemene spelling",
  "NL.grammatica.zinsontleding": "Zinsontleding",
  "NL.lees.argument":          "Argumentatie + drogredenen",
  "NL.lees.tekst":             "Tekstanalyse",
  "NL.schrijf.tekstsoort":     "Schrijfvaardigheid (betoog/beschouwing/uiteenzetting)",
  "NL.literatuur.geschiedenis": "Literatuurgeschiedenis",
};

// Hulp: topic-id → label.
export function topicLabel(topicId) {
  return TOPIC_TAXONOMY[topicId] || topicId;
}

// Hulp: alle topics voor een vak (op basis van prefix).
export function topicsForSubject(subjectCode) {
  return Object.entries(TOPIC_TAXONOMY)
    .filter(([id]) => id.startsWith(`${subjectCode}.`))
    .map(([id, label]) => ({ id, label }));
}

// Hulp: vakcode uit topic-id ('WI' uit 'WI.algebra.kwadraten').
export function subjectFromTopic(topicId) {
  return topicId?.split(".")[0] || null;
}
