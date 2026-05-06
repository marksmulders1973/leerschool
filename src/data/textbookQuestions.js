// Schoolboek-vragen: handgeschreven, hoogwaardige vragen per boek-hoofdstuk.
// Voorrang boven AI-pool en AI-generatie zodat populaire boeken/hoofdstukken
// een consistente, gecontroleerde leerervaring hebben.
//
// Structuur:
//   TEXTBOOK_QUESTIONS[bookId][chapterIdx] = [...vraag-objecten]
//   bookId   = match met TEXTBOOKS-array uit src/data/textbooks.js
//   chapterIdx = 0-based index in CHAPTER_TITLES[bookId]
//
// Vraag-object: { q, options, answer, explanation, svg?, source? }
//
// Bij wijziging: de pre-getagde QUESTION_PATH_MAP regenereren via
// `node scripts/match-questions-to-paths.mjs` zodat mastery-tracking
// vragen aan de juiste leerpaden kan koppelen.

export const TEXTBOOK_QUESTIONS = {
  // ── Pluspunt — rekenen groep 5-8 (eerste volledige boek 2026-05-06) ──
  // Hoofdstukken volgens CHAPTER_TITLES: 0=Tellen en getallen,
  // 1=Optellen en aftrekken, 2=Vermenigvuldigen, 3=Delen, 4=Breuken,
  // 5=Meten en tijd, 6=Meetkunde, 7=Statistiek.
  pluspunt: {
    0: [
      // Tellen en getallen
      { q: "Wat komt na 999?", options: ["1000", "9999", "1010", "10000"], answer: 0, explanation: "Na 999 komt 1000. Je telt: 998, 999, 1000, 1001, …" },
      { q: "Welk getal is het grootst?", options: ["4567", "4675", "4756", "4657"], answer: 2, explanation: "Vergelijk per cijfer van links: alle vier beginnen met 4. Dan: 5,6,7,6 — 4756 begint met 47, hoger dan 46 of 45." },
      { q: "Hoeveel honderdtallen zitten er in 3450?", options: ["3", "4", "34", "345"], answer: 2, explanation: "3450 = 34 honderdtallen + 50. Het getal 3450 / 100 = 34,5; volledige honderdtallen = 34." },
      { q: "Welk getal hoort op de plek van het vraagteken? 1200, 1300, 1400, ?, 1600", options: ["1450", "1500", "1550", "1700"], answer: 1, explanation: "De rij gaat met sprongen van 100 omhoog. Na 1400 komt 1500." },
      { q: "Schrijf 'tweeduizend driehonderdvijftig' als getal.", options: ["2350", "2305", "20350", "23050"], answer: 0, explanation: "tweeduizend = 2000, driehonderd = 300, vijftig = 50. Samen: 2350." },
    ],
    1: [
      // Optellen en aftrekken
      { q: "Wat is 235 + 467?", options: ["702", "692", "712", "602"], answer: 0, explanation: "235 + 467: 5+7=12 (2 schrijven, 1 onthouden), 3+6+1=10 (0 schrijven, 1 onthouden), 2+4+1=7. Antwoord: 702." },
      { q: "Wat is 1000 - 348?", options: ["652", "748", "662", "752"], answer: 0, explanation: "1000 - 348: 1000-300=700, 700-48=652. Of cijferend: 0-8 → leen, → 10-8=2; 9-4=5; 9-3=6. Antwoord: 652." },
      { q: "Sara heeft €25,50 en Bram heeft €18,75. Hoeveel hebben ze samen?", options: ["€44,25", "€43,25", "€44,75", "€43,75"], answer: 0, explanation: "25,50 + 18,75: tel eerst de euro's (25+18=43), dan de centen (50+75=125 = 1 euro 25 cent). 43+1 = 44 euro, plus 25 cent = €44,25." },
      { q: "Welke som klopt?", options: ["456 + 89 = 545", "456 + 89 = 535", "456 + 89 = 555", "456 + 89 = 525"], answer: 0, explanation: "456 + 89: 456 + 90 = 546 (handig met 90 ipv 89), - 1 = 545." },
      { q: "Een fles bevat 1500 ml water. Je drinkt 750 ml. Hoeveel blijft er over?", options: ["750 ml", "850 ml", "650 ml", "950 ml"], answer: 0, explanation: "1500 - 750 = 750. Half van 1500 = 750." },
    ],
    2: [
      // Vermenigvuldigen
      { q: "Wat is 8 × 7?", options: ["56", "54", "63", "48"], answer: 0, explanation: "Tafel van 8: 8, 16, 24, 32, 40, 48, 56. 8 × 7 = 56." },
      { q: "Wat is 25 × 4?", options: ["100", "120", "75", "150"], answer: 0, explanation: "25 × 4: dat zijn 4 kwartjes — 4 × 25 cent = 1 euro = 100 cent. Dus 100." },
      { q: "Een doos bevat 12 koeken. Hoeveel koeken in 9 dozen?", options: ["108", "112", "98", "118"], answer: 0, explanation: "12 × 9: handig is 12 × 10 = 120, dan -12 = 108." },
      { q: "Wat is 6 × 0?", options: ["0", "6", "60", "1"], answer: 0, explanation: "Alles maal nul = nul. 6 keer 'niets' is nog steeds niets." },
      { q: "Een week heeft 7 dagen. Hoeveel dagen in 8 weken?", options: ["56", "54", "64", "49"], answer: 0, explanation: "7 × 8 = 56 dagen. Tafel van 7: 7, 14, 21, 28, 35, 42, 49, 56." },
    ],
    3: [
      // Delen
      { q: "Wat is 56 : 8?", options: ["7", "6", "8", "9"], answer: 0, explanation: "Vraag jezelf: hoeveel keer past 8 in 56? Tafel van 8: 8 × 7 = 56. Antwoord: 7." },
      { q: "Verdeel 24 snoepjes eerlijk over 6 kinderen. Hoeveel krijgt elk kind?", options: ["4", "3", "5", "6"], answer: 0, explanation: "24 : 6 = 4. Elk kind krijgt 4 snoepjes." },
      { q: "Wat is 100 : 4?", options: ["25", "20", "30", "40"], answer: 0, explanation: "100 : 4 — denk aan 4 kwartjes maken samen 1 euro (100 cent). 1 kwartje = 25 cent. Of: 4 × 25 = 100." },
      { q: "Welke deelsom klopt NIET?", options: ["72 : 9 = 8", "72 : 8 = 9", "72 : 6 = 13", "72 : 4 = 18"], answer: 2, explanation: "72 : 6 = 12 (niet 13). Tafel van 6: 6 × 12 = 72." },
      { q: "Een bus heeft 45 stoelen. Er passen 5 leerlingen op een rij. Hoeveel rijen zijn er?", options: ["9", "8", "10", "7"], answer: 0, explanation: "45 : 5 = 9. Tafel van 5: 5 × 9 = 45." },
    ],
    4: [
      // Breuken
      { q: "Welke breuk is het grootst?", options: ["½", "⅓", "¼", "⅕"], answer: 0, explanation: "Hoe groter de noemer (onderkant), hoe kleiner de breuk (de taart wordt in meer stukken verdeeld). ½ heeft de kleinste noemer, dus is het grootst." },
      { q: "Wat is ½ van 80?", options: ["40", "20", "60", "8"], answer: 0, explanation: "½ van iets = de helft. Helft van 80 = 40." },
      { q: "Wat is ¾ van 100?", options: ["75", "70", "80", "25"], answer: 0, explanation: "¼ van 100 = 25. ¾ = 3 × 25 = 75." },
      { q: "⅖ + ⅖ = ?", options: ["⅘", "⅖", "⁴⁄₁₀", "1"], answer: 0, explanation: "Bij dezelfde noemer (5) tel je alleen de tellers op: 2 + 2 = 4. Dus ⅘." },
      { q: "Welke breuk is gelijk aan 0,5?", options: ["½", "⅓", "¼", "⅕"], answer: 0, explanation: "0,5 betekent 5 tienden = 5/10 = ½ (vereenvoudigd). De helft." },
    ],
    5: [
      // Meten en tijd
      { q: "Hoeveel cm is 2,5 m?", options: ["250 cm", "25 cm", "2500 cm", "0,25 cm"], answer: 0, explanation: "1 meter = 100 cm. 2,5 × 100 = 250 cm." },
      { q: "Het is 14:35 uur. Hoe laat is het over 50 minuten?", options: ["15:25", "14:85", "15:35", "15:05"], answer: 0, explanation: "14:35 + 25 min = 15:00. Nog 25 min erbij = 15:25." },
      { q: "Hoeveel gram is 1,5 kg?", options: ["1500 g", "150 g", "15 g", "15000 g"], answer: 0, explanation: "1 kg = 1000 g. 1,5 × 1000 = 1500 g." },
      { q: "Een trein vertrekt om 10:45 en komt aan om 12:20. Hoe lang duurt de reis?", options: ["1 uur 35 min", "2 uur 35 min", "1 uur 25 min", "1 uur 75 min"], answer: 0, explanation: "Van 10:45 tot 11:45 = 1 uur. Van 11:45 tot 12:20 = 35 min. Totaal: 1 uur 35 min." },
      { q: "Hoeveel ml is 0,75 liter?", options: ["750 ml", "75 ml", "7500 ml", "7,5 ml"], answer: 0, explanation: "1 liter = 1000 ml. 0,75 × 1000 = 750 ml." },
    ],
    6: [
      // Meetkunde
      { q: "Een rechthoek is 6 cm lang en 4 cm breed. Wat is de omtrek?", options: ["20 cm", "24 cm", "10 cm", "14 cm"], answer: 0, explanation: "Omtrek = som van alle zijden = 6 + 4 + 6 + 4 = 20 cm. Of: 2 × (6 + 4) = 20." },
      { q: "Wat is de oppervlakte van een vierkant met zijden van 5 cm?", options: ["25 cm²", "20 cm²", "10 cm²", "30 cm²"], answer: 0, explanation: "Oppervlakte vierkant = zijde × zijde = 5 × 5 = 25 cm²." },
      { q: "Hoeveel hoeken heeft een driehoek?", options: ["3", "4", "5", "6"], answer: 0, explanation: "Een driehoek heeft 3 hoeken (en 3 zijden) — vandaar de naam." },
      { q: "Een kubus heeft hoeveel ribben?", options: ["12", "6", "8", "4"], answer: 0, explanation: "Een kubus heeft 6 vlakken, 8 hoekpunten en 12 ribben (de lijnen waar twee vlakken samenkomen)." },
      { q: "Welk figuur heeft GEEN rechte hoeken?", options: ["Cirkel", "Vierkant", "Rechthoek", "Kruis-figuur"], answer: 0, explanation: "Een cirkel heeft een ronde rand zonder hoeken. Vierkant en rechthoek hebben 4 rechte hoeken." },
    ],
    7: [
      // Statistiek
      { q: "In een klas van 24 leerlingen lust 18 ijs. Welk deel is dat?", options: ["¾", "½", "⅔", "⅗"], answer: 0, explanation: "18 van 24 = 18/24. Vereenvoudig: deel beide door 6 → 3/4 = ¾." },
      { q: "De cijfers van Sara zijn: 6, 7, 8, 9, 10. Wat is het gemiddelde?", options: ["8", "7,5", "9", "6"], answer: 0, explanation: "Gemiddelde = som / aantal = (6+7+8+9+10) / 5 = 40 / 5 = 8." },
      { q: "Een staafdiagram toont: maandag 5, dinsdag 8, woensdag 6. Hoeveel in totaal?", options: ["19", "18", "20", "17"], answer: 0, explanation: "5 + 8 + 6 = 19. Tel alle staven op." },
      { q: "Wat is de mediaan van 3, 5, 7, 9, 11?", options: ["7", "5", "9", "6"], answer: 0, explanation: "Mediaan = middelste waarde van een geordende rij. Hier: 3, 5, 7, 9, 11 → middelste is 7 (positie 3 van 5)." },
      { q: "In een diagram is de hoogste staaf 'voetbal' met 12. De laagste 'tennis' met 3. Wat is het verschil?", options: ["9", "12", "15", "8"], answer: 0, explanation: "12 − 3 = 9. Het verschil is hoeveel hoger de hoogste staaf is dan de laagste." },
    ],
  },

  // Volgende boeken hieronder toevoegen volgens hetzelfde patroon.
  // Tip: kopieer een bestaand blok en pas de hoofdstuk-titels in commentaar
  // aan op basis van CHAPTER_TITLES[bookId] uit src/data/textbooks.js.
  //
  // Prioriteit-volgorde voor uitbreiding (audit 2 + Mark's content-roadmap):
  //   1. wereld-in-getallen (rekenen, marktleider naast Pluspunt)
  //   2. taal-actief        (taal, populaire methode)
  //   3. staal              (taal, alternatief)
  //   4. naut-meander-brandaan (natuur)
  //   5. gr-junior          (rekenen)
  //   …
};

/**
 * Haal handgeschreven vragen op voor een boek+hoofdstuk(+paragraaf).
 *
 * @param {object} args
 * @param {string} args.bookId         — id uit TEXTBOOKS
 * @param {number|string} args.chapterIdx — 0-based of "1"-based string
 * @param {number} args.count          — gewenst aantal vragen (default alles)
 * @returns {Array} array van vraag-objecten (kan leeg zijn)
 */
export function getTextbookQuestions({ bookId, chapterIdx, count }) {
  if (!bookId) return [];
  const boek = TEXTBOOK_QUESTIONS[bookId];
  if (!boek) return [];
  // Accepteer "1" (1-based) → 0, of een number direct
  let idx = chapterIdx;
  if (typeof idx === "string") idx = parseInt(idx, 10);
  if (typeof idx === "number" && !isNaN(idx)) {
    // Detecteer 1-based input van TextbookQuiz: chapterNum is "1"-"12".
    // Onze keys zijn 0-based, dus wanneer idx >= 1 én aanwezig idx-1 bestaat,
    // gebruik 0-based.
    if (idx >= 1 && boek[idx - 1]) idx = idx - 1;
  }
  const vragen = boek[idx];
  if (!Array.isArray(vragen) || !vragen.length) return [];
  if (typeof count === "number" && count > 0) {
    // Shuffle + slice voor variatie tussen sessies
    const shuffled = vragen.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }
  return vragen.slice();
}

/**
 * Hoeveel hardcoded vragen zijn er voor een gegeven boek+hoofdstuk?
 * Gebruikt door de UI om "X handgeschreven vragen beschikbaar"-badge te tonen.
 */
export function countTextbookQuestions({ bookId, chapterIdx }) {
  if (!bookId) return 0;
  const boek = TEXTBOOK_QUESTIONS[bookId];
  if (!boek) return 0;
  let idx = chapterIdx;
  if (typeof idx === "string") idx = parseInt(idx, 10);
  if (typeof idx === "number" && !isNaN(idx) && idx >= 1 && boek[idx - 1]) {
    idx = idx - 1;
  }
  const vragen = boek[idx];
  return Array.isArray(vragen) ? vragen.length : 0;
}
