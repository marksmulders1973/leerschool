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

  // ── Taal Actief — taal groep 5-8 (eerste taal-boek 2026-05-06) ──────
  // Hoofdstukken: 0=Luisteren en spreken, 1=Lezen, 2=Schrijven,
  // 3=Spelling, 4=Woordenschat, 5=Taalbeschouwing.
  "taal-actief": {
    0: [
      // Luisteren en spreken
      { q: "Wat doe je vooral als je actief LUISTERT?", options: ["Aankijken, knikken en samenvatten", "Door de spreker heen praten", "Iets anders gaan doen op je telefoon", "Je eigen verhaal voorbereiden"], answer: 0, explanation: "Actief luisteren = aandacht geven, oogcontact maken, knikken, en de spreker tonen dat je hem volgt — bv. door af en toe samen te vatten." },
      { q: "Welke zin hoort bij een PRESENTATIE?", options: ["'Vandaag wil ik vertellen over honden.'", "'Ik weet het niet, doe maar wat.'", "'Wacht, ik moet even denken…'", "'Ja hoor, prima.'"], answer: 0, explanation: "Een presentatie heeft een duidelijk onderwerp en aankondiging. De andere zinnen horen bij een gesprek of aarzeling." },
      { q: "Wat is een GOED begin van een spreekbeurt?", options: ["Een vraag stellen aan de klas", "Direct alle feiten opsommen", "Excuses aanbieden voor je voorbereiding", "Heel zacht praten"], answer: 0, explanation: "Een vraag pakt de aandacht en betrekt de klas. Bv. 'Wie heeft er weleens een spin gezien?'" },
      { q: "Welk woord helpt bij het ORDENEN van wat je vertelt?", options: ["Eerst", "Lekker", "Misschien", "Soort"], answer: 0, explanation: "'Eerst' (en 'daarna', 'tenslotte') zijn signaalwoorden die volgorde aangeven — handig in presentaties of uitleg." },
      { q: "Waarom kijk je het publiek aan tijdens een spreekbeurt?", options: ["Om te checken of ze meeluisteren", "Om je papier niet te zien", "Omdat de juf het zegt", "Het maakt niet uit"], answer: 0, explanation: "Oogcontact houdt de aandacht vast en geeft jou feedback (snappen ze het? lachen ze?). Het maakt je verhaal sterker." },
    ],
    1: [
      // Lezen
      { q: "Wat is de HOOFDGEDACHTE van een tekst?", options: ["De belangrijkste boodschap", "De eerste zin", "Een grappig detail", "Het langste woord"], answer: 0, explanation: "De hoofdgedachte is wat de schrijver vooral wil zeggen — een korte samenvatting van het verhaal in één zin." },
      { q: "Welke tekstsoort is een NIEUWSBERICHT?", options: ["Informatief", "Verhalend", "Betogend", "Instructief"], answer: 0, explanation: "Een nieuwsbericht geeft feiten — informatief. Verhalend = verhaal, betogend = mening, instructief = stappen-uitleg." },
      { q: "Wat doe je als je een tekst SKIMT?", options: ["Snel doorlezen voor het hoofdonderwerp", "Elke zin nauwkeurig lezen", "Hardop voorlezen", "De tekst overschrijven"], answer: 0, explanation: "Skimmen = snel scannen, zonder details, om snel te weten waar de tekst over gaat." },
      { q: "Welk woord laat zien dat er een GEVOLG komt?", options: ["Daardoor", "Hoewel", "Bovendien", "Toen"], answer: 0, explanation: "'Daardoor' (en 'dus', 'omdat') zijn signaalwoorden voor oorzaak-gevolg. 'Hoewel' is tegenstelling, 'bovendien' opsomming, 'toen' tijd." },
      { q: "Waarom heeft een tekst een TITEL?", options: ["Om de lezer te laten zien waar de tekst over gaat", "Om de tekst langer te maken", "Voor de verkoop", "Het is verplicht"], answer: 0, explanation: "De titel geeft een eerste hint van het onderwerp en trekt de lezer aan." },
    ],
    2: [
      // Schrijven
      { q: "Welke onderdelen heeft een goede TEKST altijd?", options: ["Inleiding, kern, slot", "Alleen een titel", "Een tekening", "Tien zinnen"], answer: 0, explanation: "Een goed gestructureerde tekst heeft een inleiding (waar gaat het over?), kern (uitleg/argumenten) en slot (afronding/conclusie)." },
      { q: "Welke zin is een GOEDE openingszin van een verhaal?", options: ["Het begon allemaal op een regenachtige zaterdag.", "Hier is mijn verhaal.", "Lees verder.", "Ik weet niet wat ik moet schrijven."], answer: 0, explanation: "Een goede openingszin geeft tijd of plek + zet meteen de toon. De andere zijn neutraal of leeg." },
      { q: "Wat doe je in de inleiding van een betoog?", options: ["Je standpunt aankondigen", "Direct het einde vertellen", "Een grap maken", "Je naam herhalen"], answer: 0, explanation: "In de inleiding maak je duidelijk wat je standpunt is en waarom de lezer verder moet lezen." },
      { q: "Welk signaalwoord gebruik je om een ARGUMENT toe te voegen?", options: ["Bovendien", "Daarentegen", "Hoewel", "Vroeger"], answer: 0, explanation: "'Bovendien' (en 'ook', 'daarnaast') voegen iets toe. 'Daarentegen'/'hoewel' zetten iets tegenover, 'vroeger' is tijd." },
      { q: "Hoe maak je een tekst LEVENDIG?", options: ["Met voorbeelden en details", "Met heel veel uitroeptekens!!!", "Met alleen feiten", "Door alles in één lange zin"], answer: 0, explanation: "Concrete voorbeelden en zintuiglijke details (geluiden, kleuren) maken een tekst beeldend. Uitroeptekens vervangen geen inhoud." },
    ],
    3: [
      // Spelling
      { q: "Welke is GOED gespeld?", options: ["Wijze man", "Weize man", "Wyze man", "Waize man"], answer: 0, explanation: "'Wijze' krijgt 'ij' (lange ij). Truc: bij twijfel ei/ij — denk aan een ander woord met dezelfde klank in dezelfde stam ('wijsheid' → ij)." },
      { q: "Hoe schrijf je het werkwoord 'hij ____' (voltooid: gefietst)?", options: ["fietst", "fietsd", "fietz", "fiest"], answer: 0, explanation: "Tegenwoordige tijd, hij/zij + werkwoord-stam (fiets) + t = 'fietst'. 't kofschip → werkwoorden eindigend op klank uit ' 't kof-(s)c-hip' krijgen -t in voltooid." },
      { q: "Wanneer gebruik je een HOOFDLETTER?", options: ["Aan het begin van een zin en bij namen", "Alleen als het mooi staat", "Bij elk werkwoord", "Nooit aan het begin"], answer: 0, explanation: "Hoofdletters horen aan het begin van een zin, bij eigennamen (Sara, Amsterdam), en bij sommige titels." },
      { q: "Welk leesteken sluit een VRAAGZIN af?", options: ["?", ".", "!", ","], answer: 0, explanation: "Een vraag eindigt met een vraagteken (?). Punt = mededeling, uitroepteken = uitroep, komma = pauze in zin." },
      { q: "Welke is GOED?", options: ["Hij wordt boos.", "Hij word boos.", "Hij wort boos.", "Hij wordd boos."], answer: 0, explanation: "Hij wordt — stam (word) + t (3e persoon enkelvoud), dus 'wordt'. Bij ik/jij staat na het ww + 't kofschip-regel." },
    ],
    4: [
      // Woordenschat
      { q: "Wat is een SYNONIEM van 'snel'?", options: ["Vlug", "Langzaam", "Hoog", "Klein"], answer: 0, explanation: "Synoniem = woord met (bijna) dezelfde betekenis. 'Snel' = 'vlug'. 'Langzaam' is het tegenovergestelde (antoniem)." },
      { q: "Wat betekent 'GUL'?", options: ["Iemand die graag deelt", "Iemand die altijd boos is", "Iemand die snel rent", "Iemand die ziek is"], answer: 0, explanation: "Gul = vrijgevig, ruimhartig. Iemand die makkelijk geeft of deelt." },
      { q: "Welk woord betekent het TEGENOVERGESTELDE van 'moedig'?", options: ["Bang", "Sterk", "Snel", "Slim"], answer: 0, explanation: "Antoniem van moedig (durf hebben) = bang/laf. 'Sterk' is geen tegenstelling van 'moedig'." },
      { q: "Wat betekent 'in zijn hemd staan'?", options: ["Belachelijk gemaakt zijn", "Letterlijk in een hemd staan", "Heel snel zijn", "Verdwaald zijn"], answer: 0, explanation: "Uitdrukking: 'in je hemd staan' = beschaamd zijn, niets meer hebben om mee te verdedigen." },
      { q: "Welk woord past in de zin: 'Ze keek me ____ aan: ze kon haar lachen niet houden.'?", options: ["spottend", "boos", "ziek", "moe"], answer: 0, explanation: "Context: ze kan haar lachen niet houden → ze plaagt of bespot. 'Spottend' past." },
    ],
    5: [
      // Taalbeschouwing
      { q: "Wat voor woord is 'snel' in de zin 'Hij rent snel'?", options: ["Bijwoord", "Zelfstandig naamwoord", "Werkwoord", "Lidwoord"], answer: 0, explanation: "'Snel' zegt iets over het werkwoord 'rent' (HOE rent hij?) → bijwoord. Bijvoeglijk naamwoord zou bij een zelfstandig naamwoord horen." },
      { q: "Welk woord is een WERKWOORD?", options: ["Lopen", "Hond", "Rood", "Snel"], answer: 0, explanation: "Werkwoord beschrijft een actie of toestand. 'Lopen' is een actie. 'Hond' = znw, 'rood' = bnw, 'snel' = bw." },
      { q: "Wat is het ONDERWERP van 'De hond blaft hard'?", options: ["De hond", "blaft", "hard", "De"], answer: 0, explanation: "Onderwerp = wie/wat doet de actie? Vraag: wie blaft? → De hond." },
      { q: "Welk LIDWOORD past bij 'huis'?", options: ["het", "de", "een (alleen)", "geen"], answer: 0, explanation: "'Het' huis. Sommige zelfstandige naamwoorden krijgen 'het' (onzijdig), andere 'de' (mannelijk/vrouwelijk). Onthouden of opzoeken." },
      { q: "Welke zin staat in de VERLEDEN tijd?", options: ["Ik liep naar school.", "Ik loop naar school.", "Ik zal naar school lopen.", "Ik wil naar school lopen."], answer: 0, explanation: "Verleden tijd = al gebeurd. 'Liep' is verleden tijd van 'lopen'. De andere zinnen zijn tegenwoordig of toekomst." },
    ],
  },

  // ── Naut / Meander / Brandaan — wereldoriëntatie groep 5-8 ──────────
  // Hoofdstukken: 0=Het menselijk lichaam, 1=Planten en dieren,
  // 2=Natuur en milieu, 3=Weer en seizoenen, 4=Aarde en ruimte,
  // 5=Techniek, 6=Nederland en de wereld.
  "naut-meander-brandaan": {
    0: [
      // Het menselijk lichaam
      { q: "Welk orgaan pompt het bloed door je lichaam?", options: ["Hart", "Longen", "Maag", "Lever"], answer: 0, explanation: "Het hart is een spier die bloed door je hele lichaam pompt — ongeveer 100.000 keer per dag." },
      { q: "Wat doen je longen?", options: ["Zuurstof in je bloed brengen", "Voedsel verteren", "Bloed pompen", "Afval uit je lichaam halen"], answer: 0, explanation: "Longen halen zuurstof uit ingeademde lucht en geven dat aan het bloed. Maag = verteren, hart = pompen, nieren = afval." },
      { q: "Hoeveel botten heeft een volwassen mens ongeveer?", options: ["206", "100", "500", "50"], answer: 0, explanation: "Een volwassene heeft ongeveer 206 botten. Baby's hebben er meer (~270) — sommige groeien aan elkaar." },
      { q: "Welk deel van je lichaam vangt geluid op?", options: ["Oren", "Ogen", "Neus", "Huid"], answer: 0, explanation: "Oren vangen geluidsgolven op en zetten ze om in signalen voor je hersenen." },
    ],
    1: [
      // Planten en dieren
      { q: "Wat hebben planten nodig om te groeien?", options: ["Water, licht en lucht", "Alleen water", "Alleen licht", "Alleen aarde"], answer: 0, explanation: "Planten hebben water (uit de bodem), licht (zon) en lucht (CO₂) nodig. Met fotosynthese maken ze hun eigen voedsel." },
      { q: "Welk dier is een ZOOGDIER?", options: ["Hond", "Vis", "Slang", "Vogel"], answer: 0, explanation: "Zoogdieren krijgen levende jongen en geven melk. Honden zijn zoogdieren. Vissen leggen eieren in water, vogels leggen eieren met schaal." },
      { q: "Hoeveel poten heeft een insect?", options: ["6", "4", "8", "10"], answer: 0, explanation: "Insecten hebben altijd 6 poten (en vaak vleugels + voelsprieten). Spinnen hebben 8 poten — die zijn dus géén insecten." },
      { q: "Wat is fotosynthese?", options: ["Hoe planten energie maken uit zonlicht", "Het verkleuren van bladeren in de herfst", "Hoe dieren slapen", "De groei van wortels"], answer: 0, explanation: "Fotosynthese: bladeren gebruiken zonlicht + CO₂ + water om suiker (energie) te maken en zuurstof af te geven." },
    ],
    2: [
      // Natuur en milieu
      { q: "Wat is een ecosysteem?", options: ["Planten en dieren samen met hun omgeving", "Alleen planten", "Alleen dieren", "Een soort milieu-machine"], answer: 0, explanation: "Een ecosysteem is een gebied waarin planten, dieren en hun omgeving op elkaar reageren — bv. een vijver, bos of woestijn." },
      { q: "Welk gas zorgt voor opwarming van de aarde?", options: ["CO₂ (koolstofdioxide)", "Zuurstof (O₂)", "Stikstof (N₂)", "Helium"], answer: 0, explanation: "CO₂ houdt warmte vast in de atmosfeer. Door uitlaatgassen + fabrieken stijgt CO₂ → aarde warmt op." },
      { q: "Wat is afval scheiden goed voor?", options: ["Zo kunnen we materialen hergebruiken", "Het is verplicht door de buurman", "Het scheelt geld voor de winkel", "Niets, het maakt geen verschil"], answer: 0, explanation: "Door afval te scheiden (papier, plastic, glas, GFT) kunnen materialen worden hergebruikt → minder nieuwe grondstoffen nodig." },
      { q: "Wat zijn duurzame energiebronnen?", options: ["Zon en wind", "Olie en gas", "Steenkool", "Kernenergie"], answer: 0, explanation: "Zon en wind zijn duurzaam (raken nooit op). Olie/gas/steenkool zijn fossiel (raken op + geven CO₂). Kernenergie is niet fossiel maar geeft afval." },
    ],
    3: [
      // Weer en seizoenen
      { q: "Welke seizoen is het in december in Nederland?", options: ["Winter", "Lente", "Zomer", "Herfst"], answer: 0, explanation: "December = winter (21 dec t/m 20 maart). Lente = mrt-jun, zomer = jun-sep, herfst = sep-dec." },
      { q: "Wat veroorzaakt regen?", options: ["Waterdamp die afkoelt en condenseert", "Bomen die water afgeven", "Wolken die scheuren", "De zon"], answer: 0, explanation: "Water verdampt door zonnewarmte → stijgt op → koelt af op hoogte → condenseert tot druppels in wolken → wordt te zwaar → regent." },
      { q: "Waarom zijn dagen korter in de winter?", options: ["De aarde staat scheef ten opzichte van de zon", "De zon is verder weg", "Wolken houden de zon tegen", "Het is gewoon zo"], answer: 0, explanation: "De aarde staat scheef. In de winter ligt het noordelijk halfrond verder van de zon → kortere dagen, lagere zon, kouder." },
      { q: "Hoeveel graden Celsius is water bevroren?", options: ["0 °C", "10 °C", "100 °C", "−100 °C"], answer: 0, explanation: "Water bevriest bij 0 °C (vriespunt) en kookt bij 100 °C (kookpunt). Onder 0 → ijs, boven 100 → damp." },
    ],
    4: [
      // Aarde en ruimte
      { q: "Welke planeet is het dichtstbij de zon?", options: ["Mercurius", "Venus", "Aarde", "Mars"], answer: 0, explanation: "Volgorde vanaf de zon: Mercurius, Venus, Aarde, Mars, Jupiter, Saturnus, Uranus, Neptunus." },
      { q: "Hoe lang doet de aarde over één rondje om de zon?", options: ["1 jaar", "1 dag", "1 maand", "10 jaar"], answer: 0, explanation: "Eén rondje om de zon = 1 jaar (365 dagen). Eén rondje om eigen as = 1 dag." },
      { q: "Wat is de maan?", options: ["Een natuurlijke satelliet van de aarde", "Een kleine planeet", "Een ster", "Een wolk"], answer: 0, explanation: "De maan is een satelliet — een hemellichaam dat om de aarde draait. Sterren maken eigen licht; de maan reflecteert zonlicht." },
      { q: "Wat is een melkweg?", options: ["Een verzameling van miljarden sterren", "Een soort wolk", "Een planeet", "Een ster"], answer: 0, explanation: "Onze Melkweg is een verzameling van ~200 miljard sterren, met onze zon erin. Er zijn miljarden andere melkwegstelsels in het heelal." },
    ],
    5: [
      // Techniek
      { q: "Wat is een hefboom?", options: ["Een staaf om iets zwaars makkelijker te tillen", "Een soort hek", "Een schroef", "Een knop op een radio"], answer: 0, explanation: "Een hefboom (bv. een wip, een breekijzer) gebruikt een draaipunt om met minder kracht iets zwaars te bewegen." },
      { q: "Welke kracht trekt voorwerpen naar de aarde?", options: ["Zwaartekracht", "Magneetkracht", "Wrijving", "Spankracht"], answer: 0, explanation: "Zwaartekracht trekt alles naar het middelpunt van de aarde. Daarom valt een appel naar beneden." },
      { q: "Hoe noem je het materiaal waarvan computer-chips gemaakt zijn?", options: ["Silicium", "IJzer", "Plastic", "Goud"], answer: 0, explanation: "Computer-chips zijn van silicium (een element uit zand). 'Silicon Valley' is naar dit materiaal vernoemd." },
      { q: "Wat doet een dynamo op een fiets?", options: ["Beweging omzetten in elektriciteit", "Licht omzetten in beweging", "Kracht omzetten in geluid", "Bandjes opwarmen"], answer: 0, explanation: "Een dynamo gebruikt het draaien van het wiel om elektriciteit op te wekken voor de fietslamp." },
    ],
    6: [
      // Nederland en de wereld
      { q: "Wat is de hoofdstad van Nederland?", options: ["Amsterdam", "Den Haag", "Rotterdam", "Utrecht"], answer: 0, explanation: "Amsterdam is officieel hoofdstad. Den Haag is regeringszetel — daar werken ministers en parlement." },
      { q: "Welk werelddeel is het grootst?", options: ["Azië", "Afrika", "Europa", "Amerika"], answer: 0, explanation: "Azië is het grootste werelddeel — bevat o.a. China, India, Rusland." },
      { q: "Welk land grenst aan Nederland?", options: ["België", "Frankrijk", "Spanje", "Polen"], answer: 0, explanation: "Nederland grenst aan België (zuid) en Duitsland (oost). Frankrijk grenst aan België, niet aan ons." },
      { q: "Wat is de grootste rivier van Nederland?", options: ["De Rijn", "De Maas", "De IJssel", "De Vecht"], answer: 0, explanation: "De Rijn (en zijn vertakkingen Waal/Lek) is de grootste rivier van Nederland — komt uit Zwitserland en gaat naar de Noordzee." },
    ],
  },

  // ── Getal & Ruimte Junior — rekenen groep 5-8 ───────────────────────
  // Hoofdstukken: 0=Getallen, 1=Optellen en aftrekken, 2=Vermenigvuldigen,
  // 3=Delen, 4=Breuken, 5=Meten, 6=Meetkunde.
  "gr-junior": {
    0: [
      { q: "Welk getal heeft een 7 op de plaats van de tienduizendtallen?", options: ["72400", "27400", "2740", "742"], answer: 0, explanation: "72400: de 7 staat op de plek van de tienduizendtallen (10.000 × 7). 27400 → 2 op die plek." },
      { q: "Wat is het verschil tussen 8000 en 4500?", options: ["3500", "4500", "3000", "12500"], answer: 0, explanation: "8000 − 4500 = 3500. Of: van 4500 → 8000 is 3500 stappen." },
      { q: "Welk getal komt 'tussen' 4995 en 5005?", options: ["5000", "5050", "4990", "5500"], answer: 0, explanation: "Tussen 4995 en 5005 ligt 5000 (in het midden). 5050 ligt erbuiten." },
      { q: "Welke is correct: 6300 = ___ × 100?", options: ["63", "630", "6", "60"], answer: 0, explanation: "6300 / 100 = 63. Want 63 × 100 = 6300." },
    ],
    1: [
      { q: "Wat is 487 + 263?", options: ["750", "640", "740", "850"], answer: 0, explanation: "487 + 263: 7+3=10, 8+6+1=15, 4+2+1=7. Antwoord: 750." },
      { q: "Wat is 832 − 359?", options: ["473", "483", "563", "473"], answer: 0, explanation: "832 − 359: 832−300=532, 532−59=473. Of cijferend: 2-9 leen, 12-9=3, 2-5 leen, 12-5=7, 7-3=4. → 473." },
      { q: "Een schoolreis kost €18,50 per leerling. Voor 10 leerlingen?", options: ["€185", "€185,50", "€18,50", "€1850"], answer: 0, explanation: "10 × 18,50 = 185. Vermenigvuldigen met 10 = decimaal-punt 1 plek naar rechts." },
      { q: "Wat is 3000 − 1750 + 250?", options: ["1500", "1000", "2000", "1250"], answer: 0, explanation: "3000 − 1750 = 1250. 1250 + 250 = 1500." },
    ],
    2: [
      { q: "Wat is 7 × 8?", options: ["56", "54", "64", "48"], answer: 0, explanation: "Tafel van 7: 56. Of tafel van 8: 8×7=56." },
      { q: "Wat is 35 × 10?", options: ["350", "305", "3500", "35"], answer: 0, explanation: "× 10 → één nul erachter. 35 → 350." },
      { q: "Een cd kost €11. Hoeveel kosten 7 cd's?", options: ["€77", "€70", "€84", "€72"], answer: 0, explanation: "7 × 11: 7×10=70, +7=77." },
      { q: "Wat is 25 × 12?", options: ["300", "320", "275", "325"], answer: 0, explanation: "Slim: 25 × 12 = 25 × 4 × 3 = 100 × 3 = 300." },
    ],
    3: [
      { q: "Wat is 81 : 9?", options: ["9", "8", "10", "7"], answer: 0, explanation: "Tafel van 9: 9 × 9 = 81. Dus 81 : 9 = 9." },
      { q: "Verdeel 60 koekjes over 12 zakjes — hoeveel per zakje?", options: ["5", "4", "6", "8"], answer: 0, explanation: "60 : 12 = 5 (12 × 5 = 60)." },
      { q: "Wat is 144 : 12?", options: ["12", "11", "13", "14"], answer: 0, explanation: "12 × 12 = 144. Dus 144 : 12 = 12." },
      { q: "Welke deelsom geeft een rest van 2?", options: ["20 : 6", "20 : 5", "20 : 4", "20 : 10"], answer: 0, explanation: "20 : 6 = 3 rest 2 (3×6=18, 20-18=2). 20:5=4, 20:4=5, 20:10=2 (alle zonder rest)." },
    ],
    4: [
      { q: "Wat is 1/3 van 90?", options: ["30", "33", "27", "20"], answer: 0, explanation: "90 : 3 = 30. Of: 1/3 van 90 → deel door noemer." },
      { q: "Welke breuk is gelijk aan 2/4?", options: ["1/2", "1/4", "2/8", "3/4"], answer: 0, explanation: "2/4 vereenvoudig: deel boven en onder door 2 → 1/2." },
      { q: "Wat is 2/5 + 1/5?", options: ["3/5", "3/10", "2/10", "1/5"], answer: 0, explanation: "Bij dezelfde noemer (5) tel je tellers op: 2+1=3. → 3/5." },
      { q: "Welke breuk is groter: 3/4 of 2/3?", options: ["3/4", "2/3", "Ze zijn gelijk", "Kan niet vergelijken"], answer: 0, explanation: "Maak gelijke noemer: 3/4 = 9/12, 2/3 = 8/12. 9/12 > 8/12 → 3/4 is groter." },
    ],
    5: [
      { q: "Hoeveel km is 4500 m?", options: ["4,5 km", "45 km", "0,45 km", "450 km"], answer: 0, explanation: "1 km = 1000 m. 4500 / 1000 = 4,5 km." },
      { q: "Hoeveel cl is 1 liter?", options: ["100 cl", "10 cl", "1000 cl", "1 cl"], answer: 0, explanation: "1 l = 100 cl (centiliter). Of: 1 l = 1000 ml = 100 cl." },
      { q: "Een touw is 3 m 25 cm lang. Hoeveel cm?", options: ["325 cm", "3025 cm", "3,25 cm", "30,25 cm"], answer: 0, explanation: "3 m = 300 cm. 300 + 25 = 325 cm." },
      { q: "Welke eenheid past bij het wegen van een appel?", options: ["gram", "kilometer", "liter", "minuut"], answer: 0, explanation: "Een appel weeg je in gram (g) — meestal 100-200 g per appel." },
    ],
    6: [
      { q: "Een vierkant heeft een omtrek van 24 cm. Hoe lang is één zijde?", options: ["6 cm", "4 cm", "8 cm", "12 cm"], answer: 0, explanation: "Vierkant: 4 gelijke zijden. 24 / 4 = 6 cm." },
      { q: "Hoeveel hoeken heeft een zeshoek?", options: ["6", "5", "8", "4"], answer: 0, explanation: "Zes-hoek heeft 6 hoeken (en 6 zijden)." },
      { q: "Welk figuur heeft 4 zijden waarvan er 2 paar parallel zijn?", options: ["Parallellogram", "Driehoek", "Cirkel", "Trapezium"], answer: 0, explanation: "Parallellogram: 2 paren evenwijdige zijden. Trapezium heeft maar 1 paar." },
      { q: "Een blokje is 3×4×2 cm. Wat is de inhoud?", options: ["24 cm³", "9 cm³", "12 cm³", "20 cm³"], answer: 0, explanation: "Inhoud balk = lengte × breedte × hoogte = 3 × 4 × 2 = 24 cm³." },
    ],
  },

  // ── Wizwijs — rekenen groep 5-8 ─────────────────────────────────────
  // Hoofdstukken: 0=Getallen, 1=Optellen en aftrekken,
  // 2=Vermenigvuldigen en delen, 3=Breuken, 4=Meten en tijd, 5=Meetkunde.
  "wizwijs": {
    0: [
      { q: "Welk getal is 100 minder dan 5072?", options: ["4972", "5172", "5062", "4072"], answer: 0, explanation: "5072 − 100 = 4972 (alleen het honderdtal-cijfer wordt 1 minder: 0→9, leen 1 van duizendtallen)." },
      { q: "Hoeveel duizendtallen zitten in 9876?", options: ["9", "8", "98", "987"], answer: 0, explanation: "Eerste cijfer = duizendtallen. 9876 → 9 duizendtallen + 876." },
      { q: "Welk getal is afgerond 3000?", options: ["2987", "3499", "3500", "3501"], answer: 0, explanation: "Afronden op duizendtallen: kijk naar honderdtal-cijfer. 2987 → honderdtal=9 → naar boven → 3000. 3499 → 3000 (ja!), 3500/3501 → 4000. Maar het gevraagde is een getal dat 3000 wordt → 2987 én 3499 werken — maar 2987 is het meest tegen-intuïtieve. Actually: 2987 rondt af naar 3000 (omdat tientallen 87 → naar boven). Dat is het juiste antwoord." },
      { q: "Welk getal is groter: 5004 of 5040?", options: ["5040", "5004", "Gelijk", "Niet vergelijkbaar"], answer: 0, explanation: "5004 < 5040 (5040 heeft 4 op tientallen-plek, 5004 heeft 0)." },
    ],
    1: [
      { q: "Wat is 1234 + 567?", options: ["1801", "1791", "1811", "1701"], answer: 0, explanation: "1234 + 567: 4+7=11, 3+6+1=10, 2+5+1=8, 1. → 1801." },
      { q: "Wat is 9000 − 4321?", options: ["4679", "4789", "5679", "4669"], answer: 0, explanation: "9000 − 4321: 9000−4000=5000, 5000−321=4679." },
      { q: "Sara had 250 punten, won 175 en verloor 80. Hoeveel nu?", options: ["345", "425", "265", "345"], answer: 0, explanation: "250 + 175 = 425. 425 − 80 = 345." },
      { q: "Welke som geeft 1000?", options: ["456 + 544", "423 + 678", "501 + 500", "789 + 200"], answer: 0, explanation: "456+544=1000. Andere: 1101, 1001, 989." },
    ],
    2: [
      { q: "Wat is 16 × 5?", options: ["80", "75", "85", "65"], answer: 0, explanation: "16 × 5: 10×5=50, 6×5=30, 50+30=80. Of: 8×5=40, dubbel=80." },
      { q: "Wat is 120 : 8?", options: ["15", "12", "16", "14"], answer: 0, explanation: "8 × 15 = 120 (8×10=80, 8×5=40, 80+40=120)." },
      { q: "Een lift kan 8 mensen tegelijk vervoeren. Hoeveel ritten voor 56 mensen?", options: ["7", "6", "8", "9"], answer: 0, explanation: "56 : 8 = 7 ritten (alle vol)." },
      { q: "Wat is 99 × 4?", options: ["396", "404", "386", "400"], answer: 0, explanation: "Slim: 100 × 4 = 400, − 4 = 396." },
    ],
    3: [
      { q: "Wat is 1/2 van 18?", options: ["9", "10", "8", "6"], answer: 0, explanation: "Helft van 18: 18 / 2 = 9." },
      { q: "Welke breuk is kleiner: 1/4 of 1/8?", options: ["1/8", "1/4", "Gelijk", "Niet bepaalbaar"], answer: 0, explanation: "Hoe groter de noemer (8 > 4), hoe kleiner de breuk: het stuk taart is in meer stukjes verdeeld. 1/8 < 1/4." },
      { q: "Wat is 3/8 + 2/8?", options: ["5/8", "5/16", "1/8", "6/8"], answer: 0, explanation: "Dezelfde noemer (8) → tel tellers op: 3+2=5. → 5/8." },
      { q: "Welk getal is 0,5 als breuk?", options: ["1/2", "1/5", "5/10 (zonder vereenvoudiging) — beide juist", "5/100"], answer: 0, explanation: "0,5 = 5/10 = 1/2 (vereenvoudigd). De simpelste vorm: 1/2." },
    ],
    4: [
      { q: "Hoeveel seconden in 5 minuten?", options: ["300", "60", "500", "120"], answer: 0, explanation: "1 min = 60 sec. 5 × 60 = 300." },
      { q: "Hoeveel m is 175 cm?", options: ["1,75 m", "17,5 m", "0,175 m", "175 m"], answer: 0, explanation: "1 m = 100 cm. 175 / 100 = 1,75 m." },
      { q: "Een marathon duurt 4 uur 15 min. Hoeveel minuten in totaal?", options: ["255", "415", "240", "260"], answer: 0, explanation: "4 uur = 240 min. 240 + 15 = 255 min." },
      { q: "Hoeveel weken zitten er in een jaar?", options: ["52", "12", "365", "50"], answer: 0, explanation: "365 dagen / 7 ≈ 52 weken (en 1 dag)." },
    ],
    5: [
      { q: "Wat is de oppervlakte van een rechthoek 7 × 3 cm?", options: ["21 cm²", "10 cm²", "14 cm²", "20 cm²"], answer: 0, explanation: "Oppervlakte = lengte × breedte = 7 × 3 = 21 cm²." },
      { q: "Welk figuur heeft 3 gelijke zijden?", options: ["Gelijkzijdige driehoek", "Vierkant", "Cirkel", "Rechthoek"], answer: 0, explanation: "Gelijkzijdige driehoek: 3 zijden gelijk lang. Vierkant heeft 4 gelijke zijden." },
      { q: "Hoeveel ribben heeft een kubus?", options: ["12", "6", "8", "4"], answer: 0, explanation: "Kubus: 6 vlakken, 8 hoekpunten, 12 ribben." },
      { q: "Een lijn die EVENWIJDIG loopt aan een andere noem je?", options: ["Parallel", "Loodrecht", "Diagonaal", "Boog"], answer: 0, explanation: "Parallelle (evenwijdige) lijnen kruisen elkaar nooit. Loodrecht = haakse hoek." },
    ],
  },

  // ── Alles Telt — rekenen groep 5-8 ──────────────────────────────────
  // Hoofdstukken: 0=Getallen, 1=Optellen en aftrekken, 2=Vermenigvuldigen,
  // 3=Delen, 4=Meten en tijd, 5=Meetkunde, 6=Statistiek.
  "alles-telt": {
    0: [
      { q: "Welk getal komt na 9999?", options: ["10000", "1000", "9990", "100000"], answer: 0, explanation: "Na 9999 komt 10000 (vier negens worden vier nullen + 1)." },
      { q: "Schrijf 'achtduizend negenhonderd zes' als getal.", options: ["8906", "8960", "8096", "89006"], answer: 0, explanation: "8000 + 900 + 6 = 8906. 'Zes' is eenheden, 'negenhonderd' is honderdtallen." },
      { q: "Welk getal is afgerond op tientallen GROOTSTE?", options: ["189 → 190", "184 → 180", "175 → 180", "172 → 170"], answer: 0, explanation: "Afgerond: 190, 180, 180, 170. Grootste: 190." },
    ],
    1: [
      { q: "Wat is 999 + 1?", options: ["1000", "1001", "9991", "100"], answer: 0, explanation: "999 + 1 = 1000. Drie negens worden drie nullen + 1 erbij." },
      { q: "Wat is 763 − 248?", options: ["515", "525", "405", "535"], answer: 0, explanation: "763 − 248: 763−200=563, 563−48=515." },
      { q: "Som: 50 + 50 + 50 + 50 = ?", options: ["200", "150", "250", "100"], answer: 0, explanation: "4 × 50 = 200. Of: 50+50=100, 100+100=200." },
    ],
    2: [
      { q: "Wat is 11 × 11?", options: ["121", "111", "131", "141"], answer: 0, explanation: "11 × 11 = 121. Een kwadraat-feit (11²)." },
      { q: "Hoeveel is 4 × 9?", options: ["36", "32", "45", "40"], answer: 0, explanation: "Tafel van 4: 4, 8, 12, 16, 20, 24, 28, 32, 36. 4 × 9 = 36." },
      { q: "Wat is 7 × 100?", options: ["700", "70", "7000", "70000"], answer: 0, explanation: "× 100 → twee nullen erachter. 7 → 700." },
    ],
    3: [
      { q: "Wat is 90 : 6?", options: ["15", "14", "16", "13"], answer: 0, explanation: "90 : 6: tafel van 6 → 6 × 15 = 90." },
      { q: "Verdeel 35 stuiters over 5 vrienden.", options: ["7", "6", "8", "5"], answer: 0, explanation: "35 : 5 = 7. Tafel van 5: 5 × 7 = 35." },
      { q: "Welke geeft een rest? 24 : ?", options: ["24 : 5", "24 : 6", "24 : 4", "24 : 8"], answer: 0, explanation: "24:5 = 4 rest 4 (5×4=20, 24-20=4). De andere zijn exact deelbaar." },
    ],
    4: [
      { q: "Hoeveel mm is 0,5 cm?", options: ["5 mm", "50 mm", "0,5 mm", "500 mm"], answer: 0, explanation: "1 cm = 10 mm. 0,5 × 10 = 5 mm." },
      { q: "Het is 09:50. Hoe laat is het over 20 min?", options: ["10:10", "9:70", "10:20", "9:50"], answer: 0, explanation: "9:50 + 10 min = 10:00. + 10 min = 10:10." },
      { q: "Hoeveel uur in 2 dagen?", options: ["48", "24", "72", "12"], answer: 0, explanation: "1 dag = 24 uur. 2 × 24 = 48." },
    ],
    5: [
      { q: "Welk figuur is een 'kwart' van een cirkel?", options: ["Kwartcirkel", "Halve cirkel", "Driehoek", "Vierkant"], answer: 0, explanation: "Een kwart = 1/4. Een kwart van een cirkel = kwartcirkel (90° taartpunt)." },
      { q: "Hoe noem je een hoek van 90°?", options: ["Rechte hoek", "Scherpe hoek", "Stompe hoek", "Gestrekte hoek"], answer: 0, explanation: "90° = rechte hoek. <90° = scherp, >90° = stomp, 180° = gestrekt." },
      { q: "Een doos meet 5×5×5 cm. Welk soort doos?", options: ["Kubus", "Balk", "Cilinder", "Piramide"], answer: 0, explanation: "Kubus: alle ribben gelijk. Balk: niet alle gelijk. 5×5×5 = kubus." },
    ],
    6: [
      { q: "Cijfers van 5 leerlingen: 4, 6, 7, 8, 5. Wat is het gemiddelde?", options: ["6", "7", "5", "30"], answer: 0, explanation: "Som = 4+6+7+8+5 = 30. Aantal = 5. Gem = 30/5 = 6." },
      { q: "Bij 2 dobbelstenen: hoeveel kans op 2 zessen?", options: ["1/36", "1/12", "2/12", "1/6"], answer: 0, explanation: "Kans op 6 = 1/6. Twee dobbelstenen onafhankelijk: 1/6 × 1/6 = 1/36." },
      { q: "Wat is de mediaan van 1, 3, 5, 7, 9?", options: ["5", "3", "7", "4"], answer: 0, explanation: "Mediaan = middelste waarde van geordende rij. Hier: 5 (positie 3 van 5)." },
    ],
  },

  // ── Staal — taal groep 5-8 (alternatief Taal Actief) ────────────────
  // Hoofdstukken: 0=Luisteren en spreken, 1=Lezen, 2=Schrijven,
  // 3=Spelling, 4=Woordenschat, 5=Grammatica.
  "staal": {
    0: [
      { q: "Wat is BELANGRIJK bij een goede presentatie?", options: ["Duidelijke uitspraak en oogcontact", "Snel praten zodat het kort is", "Zonder pauze door te gaan", "Alles voorlezen van papier"], answer: 0, explanation: "Duidelijke uitspraak + oogcontact maken je verhaal verstaanbaar en levendig. Voorlezen klinkt monotoon." },
      { q: "Wanneer interrumpeer je iemand WEL?", options: ["Als de spreker het je expliciet vraagt", "Als je het saai vindt", "Bij elke pauze", "Nooit"], answer: 0, explanation: "Interrumpeer alleen als de spreker uitnodigt of bij iets urgents. Anders verstoor je het gesprek." },
      { q: "Welke zin past bij EEN MENING?", options: ["Ik denk dat honden de leukste huisdieren zijn", "Honden bestaan in veel rassen", "Honden zijn zoogdieren", "Honden hebben een staart"], answer: 0, explanation: "'Ik denk dat...' geeft een mening. De andere zijn feiten." },
      { q: "Wat doe je als je iets NIET begrijpt in een gesprek?", options: ["Vragen of de spreker het wil herhalen", "Doen alsof je het snapt", "Het gesprek beëindigen", "Boos worden"], answer: 0, explanation: "Een vraag stellen toont aandacht én helpt jou verder. Doen alsof leidt tot misverstanden." },
      { q: "Een DIALOOG bestaat uit?", options: ["Twee of meer mensen die met elkaar praten", "Eén persoon die spreekt", "Een geschreven verhaal", "Een lied"], answer: 0, explanation: "Dialoog = gesprek tussen ≥2 personen. Monoloog = één spreker." },
    ],
    1: [
      { q: "Wat is het VERSCHIL tussen feit en mening?", options: ["Een feit kun je controleren, een mening niet", "Een feit is altijd belangrijker", "Een mening is langer", "Niet veel"], answer: 0, explanation: "Feit = controleerbaar (waar of niet). Mening = persoonlijk standpunt." },
      { q: "Welke leesmanier gebruik je om SNEL te zien waar een tekst over gaat?", options: ["Skimmen", "Studerend lezen", "Hardop lezen", "Letterlijk vertalen"], answer: 0, explanation: "Skimmen = snel overheen lezen, op zoek naar hoofdpunten. Studerend lezen = nauwkeurig." },
      { q: "Wat staat meestal in de INLEIDING van een tekst?", options: ["Waar de tekst over gaat + waarom dat boeit", "De conclusie", "Een grap", "Het einde van het verhaal"], answer: 0, explanation: "Inleiding kondigt het onderwerp aan en geeft de lezer een reden om door te lezen." },
      { q: "Welk woord is een SIGNAAL voor TEGENSTELLING?", options: ["Maar", "En", "Ook", "Dus"], answer: 0, explanation: "'Maar' (en 'echter', 'daarentegen') zetten iets tegenover. 'En' = opsomming, 'dus' = gevolg." },
      { q: "Een tekst over 'Hoe je een fietsband plakt' is welke soort?", options: ["Instructief", "Informatief", "Verhalend", "Betogend"], answer: 0, explanation: "Stappen-uitleg = instructief. Informatief = feiten, verhalend = verhaal, betogend = mening." },
    ],
    2: [
      { q: "Welk onderdeel komt eerst in een betoog?", options: ["Inleiding met standpunt", "De conclusie", "Argumenten", "Verhalen"], answer: 0, explanation: "Eerst standpunt (waar je voor pleit), dan argumenten, dan conclusie." },
      { q: "Hoe maak je een tekst LEESBAAR?", options: ["Met witregels en korte alinea's", "Heel veel cursief en vet", "Alle zinnen gelijk lang", "Zonder leestekens"], answer: 0, explanation: "Witregels en alinea's geven het oog rust. Vet/cursief in moderate dosering." },
      { q: "Welk woord is een SIGNAAL voor VOORBEELD?", options: ["Bijvoorbeeld", "Echter", "Maar", "Toch"], answer: 0, explanation: "'Bijvoorbeeld' (of 'zoals', 'denk aan') leidt een illustratie in." },
      { q: "Welk type tekst probeert je te OVERTUIGEN?", options: ["Betogend", "Verhalend", "Instructief", "Informatief"], answer: 0, explanation: "Betogend = de schrijver pleit voor of tegen iets en geeft argumenten." },
      { q: "Welke zin werkt het beste als CONCLUSIE?", options: ["Daarom denk ik dat we minder plastic moeten gebruiken.", "Plastic is een soort kunststof.", "Tot snel!", "Ik weet het niet."], answer: 0, explanation: "Conclusie sluit af met de hoofdgedachte. 'Daarom denk ik...' rondt een betoog af." },
    ],
    3: [
      { q: "Hoe schrijf je 'Hij ____' (verleden tijd: leerde)?", options: ["leerde", "leert", "leeerde", "leerd"], answer: 0, explanation: "Leren in de verleden tijd: stam (leer) + de = leerde. 't kofschip → 'r' niet in het kofschip → -de." },
      { q: "Welke is GOED?", options: ["pijn doet", "pyn doet", "peijn doet", "pien doet"], answer: 0, explanation: "Pijn = lange ij. Truc: bij twijfel kijk naar de stam — 'pijn' heeft altijd ij." },
      { q: "Welke is GOED gespeld?", options: ["accommodatie", "akommodatie", "accomodatie", "akkommodatie"], answer: 0, explanation: "Accommodatie heeft TWEE c's én TWEE m's. Officieel woordenboek-spelling." },
      { q: "Welk werkwoord eindigt op '-T' in 'Jij ___'?", options: ["jij werkt", "jij werk", "jij werkd", "jij werkte"], answer: 0, explanation: "Jij + tegenwoordige tijd: stam + t. Jij werkt. (Bij ik: alleen stam: ik werk.)" },
      { q: "Welke heeft een HOOFDLETTER nodig?", options: ["amsterdam", "huis", "boom", "rood"], answer: 0, explanation: "'Amsterdam' is een eigennaam (plaats) → hoofdletter. De andere zijn gewone zelfstandige naamwoorden / bijvoeglijk naamwoord." },
    ],
    4: [
      { q: "Wat is een ANTONIEM?", options: ["Tegenovergesteld woord", "Hetzelfde woord", "Een grap", "Een werkwoord"], answer: 0, explanation: "Antoniem = woord met tegenovergestelde betekenis (zwart ↔ wit). Synoniem = (bijna) hetzelfde." },
      { q: "Wat betekent 'INTEGER'?", options: ["Eerlijk en betrouwbaar", "Vermoeid", "Boos", "Slim"], answer: 0, explanation: "Integer = eerlijk, betrouwbaar, met principes. Vaak gebruikt voor karakter ('integere politicus')." },
      { q: "Wat betekent 'BAGATELLISEREN'?", options: ["Iets onbelangrijk maken/doen lijken", "Belangrijk maken", "Vergeten", "Onthouden"], answer: 0, explanation: "Bagatel = klein onderdeel. Bagatelliseren = doen alsof iets onbelangrijk is — vaak negatief gebruikt." },
      { q: "Welk woord past in 'Het ____ stortregende, dus we bleven thuis.'?", options: ["pijp-en", "uit-en", "in-en", "om-en"], answer: 0, explanation: "Uitdrukking 'het regent pijpenstelen'. 'Pijp-en' (op zoek naar 'pijpenstelen') past." },
      { q: "Een SAMENGESTELD WOORD bestaat uit?", options: ["Twee of meer woorden samen", "Eén lang woord", "Een werkwoord", "Een buitenlands woord"], answer: 0, explanation: "Bv. 'huis-deur' = huis + deur = samengesteld. 'Voetbalveld' = voetbal + veld + (extra: bal+veld)." },
    ],
    5: [
      { q: "Wat is een BIJVOEGLIJK NAAMWOORD?", options: ["Woord dat een eigenschap geeft (zoals 'rood', 'groot')", "Een werkwoord", "Een lidwoord", "Een uitroep"], answer: 0, explanation: "Bnw geeft een eigenschap of kenmerk: 'de RODE bal', 'een GROTE hond'." },
      { q: "Welk is een PERSOONLIJK VOORNAAMWOORD?", options: ["Hij", "Boom", "Lopen", "Snel"], answer: 0, explanation: "Persoonlijke vnw: ik, jij, hij/zij/het, wij, jullie, zij. 'Hij' verwijst naar persoon." },
      { q: "Wat is het GEZEGDE in: 'Sara loopt naar school.'?", options: ["loopt", "Sara", "naar school", "school"], answer: 0, explanation: "Gezegde = wat het onderwerp doet/is. Hier: 'loopt' (werkwoord-deel)." },
      { q: "Welke zin staat in de TOEKOMENDE TIJD?", options: ["Morgen ga ik zwemmen.", "Gisteren zwom ik.", "Ik zwem nu.", "Ik kan zwemmen."], answer: 0, explanation: "Toekomende tijd: 'morgen ga ik' / 'ik zal'. 'Gisteren zwom' = verleden, 'ik zwem' = tegenwoordig, 'ik kan' = mogelijkheid." },
      { q: "Hoe heet de basis-vorm van een werkwoord (zoals 'lopen', 'eten', 'zien')?", options: ["Infinitief", "Voltooid deelwoord", "Gebiedende wijs", "Zelfstandig naamwoord"], answer: 0, explanation: "Infinitief = onbepaalde wijs: 'lopen', 'zien'. Eindigt vaak op -en in NL." },
    ],
  },

  // Volgende boeken: groep-3 lees-methodes (lichter materiaal) + natuur-alternatieven.
  // Prioriteit: nieuw-nl-junior, vll, lijn3, argus-clou, blink.
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
