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

  // ── De Wereld in Getallen — rekenen groep 5-8 (tweede boek 2026-05-06) ─
  // Hoofdstukken: 0=Tellen en getallen, 1=Optellen en aftrekken,
  // 2=Vermenigvuldigen, 3=Delen, 4=Breuken en kommagetallen,
  // 5=Meten en tijd, 6=Meetkunde, 7=Statistiek.
  // Bewust andere getallen + voorbeelden dan Pluspunt: zelfde leerling kan
  // beide methodes hebben gehad en moet variatie ervaren.
  "wereld-in-getallen": {
    0: [
      { q: "Welk getal komt vóór 5000?", options: ["4999", "5001", "4990", "4099"], answer: 0, explanation: "Direct vóór 5000 komt 4999 (5000 - 1)." },
      { q: "Schrijf 8745 in honderdtallen, tientallen en eenheden.", options: ["87 H, 4 T, 5 E", "8 H, 74 T, 5 E", "87 H, 45 E", "8745 E"], answer: 0, explanation: "8745 = 87 × 100 + 4 × 10 + 5. Dus 87 honderdtallen, 4 tientallen, 5 eenheden." },
      { q: "Welk getal is het kleinst?", options: ["3508", "3580", "3805", "3850"], answer: 0, explanation: "Vergelijk per cijfer van links. Alle vier beginnen met 3, maar dan: 5,5,8,8 → 3508 en 3580 hebben kleinste honderdtal-cijfer (5). Dan: 0 vs 8 → 3508 wint." },
      { q: "Wat is 2350 afgerond op honderdtallen?", options: ["2400", "2300", "2350", "2000"], answer: 0, explanation: "Kijk naar het tientalcijfer (5). 5 of meer → naar boven afronden. 2350 → 2400." },
      { q: "Welk getal hoort op de plek van het vraagteken? 9000, 8500, 8000, ?, 7000", options: ["7500", "7800", "8100", "7250"], answer: 0, explanation: "De rij gaat met sprongen van 500 naar beneden. Na 8000 komt 7500." },
    ],
    1: [
      { q: "Wat is 678 + 234?", options: ["912", "812", "902", "922"], answer: 0, explanation: "678 + 234: 8+4=12 (2 schrijven, 1 onthouden), 7+3+1=11 (1 schrijven, 1 onthouden), 6+2+1=9. Antwoord: 912." },
      { q: "Wat is 5000 - 1234?", options: ["3766", "3866", "4866", "3776"], answer: 0, explanation: "5000 - 1234: 5000 - 1000 = 4000, 4000 - 200 = 3800, 3800 - 34 = 3766." },
      { q: "Een winkel heeft €1850 omzet op zaterdag en €1275 op zondag. Wat is het totaal?", options: ["€3125", "€3025", "€3225", "€3115"], answer: 0, explanation: "1850 + 1275: 1800+1200=3000, 50+75=125. Totaal: 3125." },
      { q: "Welke som heeft het GROOTSTE antwoord?", options: ["599 + 401", "350 + 599", "450 + 549", "300 + 600"], answer: 0, explanation: "599+401=1000, 350+599=949, 450+549=999, 300+600=900. Grootste: 1000." },
      { q: "Tel: 25 + 75 + 125 = ?", options: ["225", "215", "205", "235"], answer: 0, explanation: "Slim groeperen: 25+75=100, dan 100+125=225." },
    ],
    2: [
      { q: "Wat is 9 × 6?", options: ["54", "56", "63", "48"], answer: 0, explanation: "Tafel van 9: 9, 18, 27, 36, 45, 54. Of: 10×6=60, 60-6=54." },
      { q: "Wat is 50 × 8?", options: ["400", "450", "350", "500"], answer: 0, explanation: "50 × 8: denk 5 × 8 = 40, dan ×10 want 50 is 5 met een nul → 400." },
      { q: "Een doos pennen kost €3,50. Wat kosten 6 dozen?", options: ["€21,00", "€20,50", "€18,00", "€21,50"], answer: 0, explanation: "6 × 3,50 = 6 × 3 + 6 × 0,50 = 18 + 3 = 21,00." },
      { q: "Wat is 12 × 12?", options: ["144", "124", "120", "132"], answer: 0, explanation: "12 × 12 = 144 (kwadraat-tafel). Of: 12 × 10 = 120, 120 + 24 = 144." },
      { q: "Welke som geeft 100?", options: ["25 × 4", "20 × 6", "10 × 9", "30 × 3"], answer: 0, explanation: "25 × 4 = 100. De andere: 120, 90, 90." },
    ],
    3: [
      { q: "Wat is 84 : 7?", options: ["12", "11", "13", "14"], answer: 0, explanation: "Hoeveel keer past 7 in 84? Tafel van 7: 7×12=84. Antwoord: 12." },
      { q: "Verdeel 96 stickers eerlijk over 8 kinderen.", options: ["12", "11", "13", "10"], answer: 0, explanation: "96 : 8 = 12. Tafel van 8: 8 × 12 = 96." },
      { q: "Wat is 200 : 25?", options: ["8", "7", "9", "10"], answer: 0, explanation: "Hoeveel kwartjes (25) zijn 200? 4 kwartjes maken 100, dus 8 kwartjes maken 200." },
      { q: "Hoeveel groepjes van 6 maak je van 60 leerlingen?", options: ["10", "8", "12", "9"], answer: 0, explanation: "60 : 6 = 10. Tafel van 6: 6 × 10 = 60." },
      { q: "Welke deling geeft een rest?", options: ["50 : 7", "48 : 6", "45 : 9", "63 : 7"], answer: 0, explanation: "50 : 7 = 7 rest 1 (7×7=49, +1=50). Andere: 48:6=8 (geen rest), 45:9=5, 63:7=9." },
    ],
    4: [
      { q: "Welke breuk is gelijk aan 0,25?", options: ["¼", "½", "¾", "⅕"], answer: 0, explanation: "0,25 = 25 honderdsten = 25/100 = 1/4 (vereenvoudigd). Een kwart." },
      { q: "Wat is 3,5 + 2,75?", options: ["6,25", "5,25", "6,75", "5,75"], answer: 0, explanation: "Decimalen onder elkaar zetten: 3,50 + 2,75. 0+5=5, 5+7=12 (1 onthouden), 3+2+1=6. Dus 6,25." },
      { q: "Wat is ⅖ van 50?", options: ["20", "25", "10", "15"], answer: 0, explanation: "⅕ van 50 = 10. ⅖ = 2 × 10 = 20." },
      { q: "Welk getal is groter: 0,7 of 0,65?", options: ["0,7", "0,65", "Ze zijn gelijk", "Kan niet vergelijken"], answer: 0, explanation: "0,7 = 0,70. Vergelijk 0,70 met 0,65 → 70 > 65 → 0,7 is groter." },
      { q: "¾ + ¼ = ?", options: ["1", "½", "¼", "⅔"], answer: 0, explanation: "Bij dezelfde noemer (4) tel je tellers op: 3+1=4. Dus 4/4 = 1 hele." },
    ],
    5: [
      { q: "Hoeveel mm is 1 cm?", options: ["10 mm", "100 mm", "1000 mm", "1 mm"], answer: 0, explanation: "1 cm = 10 mm. Een centimeter = tien millimeter (denk aan een liniaal: tussen elke cm-streep zitten 10 mm-streepjes)." },
      { q: "Hoeveel minuten in 2 uur en 15 minuten?", options: ["135 min", "125 min", "215 min", "145 min"], answer: 0, explanation: "1 uur = 60 min. 2 uur = 120 min. 120 + 15 = 135 min." },
      { q: "Hoeveel kg is 2500 gram?", options: ["2,5 kg", "25 kg", "0,25 kg", "250 kg"], answer: 0, explanation: "1000 g = 1 kg. 2500 / 1000 = 2,5 kg." },
      { q: "Een film begint om 19:30 en duurt 1 uur 45 min. Hoe laat is hij afgelopen?", options: ["21:15", "20:15", "21:45", "20:45"], answer: 0, explanation: "19:30 + 1 uur = 20:30. + 45 min = 21:15 (30+45=75 min = 1 uur 15 min)." },
      { q: "Hoeveel cm² is 1 m²?", options: ["10000 cm²", "100 cm²", "1000 cm²", "10 cm²"], answer: 0, explanation: "1 m = 100 cm. 1 m² = 100 × 100 = 10000 cm²." },
    ],
    6: [
      { q: "Een driehoek heeft hoeken van 60° en 70°. Hoe groot is de derde hoek?", options: ["50°", "60°", "70°", "40°"], answer: 0, explanation: "Hoekensom van een driehoek = 180°. 180 - 60 - 70 = 50°." },
      { q: "Wat is de oppervlakte van een rechthoek 8 × 5 cm?", options: ["40 cm²", "26 cm²", "13 cm²", "45 cm²"], answer: 0, explanation: "Oppervlakte rechthoek = lengte × breedte = 8 × 5 = 40 cm²." },
      { q: "Hoeveel hoeken heeft een vijfhoek?", options: ["5", "4", "6", "3"], answer: 0, explanation: "Een vijf-hoek heeft 5 hoeken (en 5 zijden) — vandaar de naam." },
      { q: "Hoe heet een vierhoek met 4 even lange zijden en 4 rechte hoeken?", options: ["Vierkant", "Rechthoek", "Ruit", "Trapezium"], answer: 0, explanation: "Vierkant = 4 even lange zijden + 4 rechte hoeken. Rechthoek heeft niet altijd gelijke zijden, ruit niet altijd rechte hoeken." },
      { q: "Een cilinder heeft hoeveel platte vlakken?", options: ["2", "1", "3", "0"], answer: 0, explanation: "Een cilinder heeft 2 platte cirkelvormige vlakken (boven en onder) en 1 gebogen mantel." },
    ],
    7: [
      { q: "De temperatuur deze week: 18, 20, 22, 19, 21°C. Wat is het gemiddelde?", options: ["20°C", "21°C", "19°C", "22°C"], answer: 0, explanation: "Som = 18+20+22+19+21 = 100. Aantal = 5. Gemiddelde = 100/5 = 20°C." },
      { q: "Welke kans is het grootst bij dobbelsteen gooien?", options: ["Even getal", "Een 6", "Een getal kleiner dan 3", "Een 1 of 2"], answer: 0, explanation: "Even (2,4,6) = 3/6 = 1/2. Een 6 = 1/6. <3 (1,2) = 2/6. Een 1 of 2 = 2/6. Even getal heeft grootste kans." },
      { q: "Een staafdiagram: maandag 12, dinsdag 8, woensdag 15, donderdag 10. Op welke dag is de staaf het hoogst?", options: ["Woensdag", "Maandag", "Dinsdag", "Donderdag"], answer: 0, explanation: "Hoogste waarde = 15 op woensdag." },
      { q: "Wat is de modus van: 4, 5, 5, 6, 7, 5, 8?", options: ["5", "6", "4", "7"], answer: 0, explanation: "Modus = vaakst voorkomende waarde. 5 komt 3× voor, andere getallen 1×. Dus modus = 5." },
      { q: "Bij 20 leerlingen lust 12 frietjes. Welk percentage is dat?", options: ["60%", "50%", "70%", "55%"], answer: 0, explanation: "12 / 20 = 60/100 = 60%. Of: 12/20 × 100% = 60%." },
    ],
  },

  // Volgende boeken hieronder toevoegen volgens hetzelfde patroon.
  // Tip: kopieer een bestaand blok en pas de hoofdstuk-titels in commentaar
  // aan op basis van CHAPTER_TITLES[bookId] uit src/data/textbooks.js.
  //
  // Prioriteit-volgorde voor uitbreiding (audit 2 + Mark's content-roadmap):
  //   1. ✅ wereld-in-getallen — done 2026-05-06
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
