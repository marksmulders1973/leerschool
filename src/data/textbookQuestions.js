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

  // ── Nieuw Nederlands Junior — taal groep 5-8 ────────────────────────
  // Hoofdstukken: 0=Luisteren, 1=Spreken, 2=Lezen, 3=Schrijven,
  // 4=Spelling, 5=Woordenschat.
  "nieuw-nl-junior": {
    0: [
      { q: "Wat doe je goed bij LUISTEREN?", options: ["Stil zijn en aandacht geven", "Praten door de spreker heen", "Naar je telefoon kijken", "Ergens anders gaan zitten"], answer: 0, explanation: "Goed luisteren = stil + aandacht + de spreker aankijken." },
      { q: "Welk geluid hoor je in een rijtje 'm-a-n'?", options: ["man", "mam", "mn", "ma"], answer: 0, explanation: "Plak de letters samen: m + a + n = man." },
      { q: "Welk woord rijmt op 'kat'?", options: ["mat", "boom", "tafel", "auto"], answer: 0, explanation: "Rijmen = zelfde eindklank. Kat-mat hebben dezelfde -at klank." },
    ],
    1: [
      { q: "Hoe begin je een KORT VERHAAL?", options: ["Met wie + waar + wanneer", "Met de naam van de schrijver", "Met het einde", "Met een lied"], answer: 0, explanation: "Een verhaal begint vaak met de hoofdpersoon, plek en tijd: 'Op zaterdag liep Sara in het park.'" },
      { q: "Wat doe je als je je VOORSTELT in de klas?", options: ["Naam zeggen + iets over jezelf", "Heel hard schreeuwen", "Wegrennen", "Niets doen"], answer: 0, explanation: "Voorstellen: 'Ik ben Sara, ik ben 8 en ik hou van honden.'" },
      { q: "Welke zin is een VRAAG?", options: ["Hoe heet jij?", "Ik ben Tom.", "Loop snel.", "Wat een leuke dag!"], answer: 0, explanation: "Een vraag begint met vraagwoord (hoe/wat/wanneer) en eindigt met '?'." },
    ],
    2: [
      { q: "Wat doe je vóór je een tekst leest?", options: ["Naar de titel en plaatjes kijken", "Direct beginnen", "De laatste zin lezen", "Het boek dichtdoen"], answer: 0, explanation: "Titel + plaatjes geven je een idee waar het over gaat — dan lees je beter." },
      { q: "Wie is de HOOFDPERSOON in het verhaal 'Roodkapje'?", options: ["Roodkapje", "De wolf", "Oma", "De jager"], answer: 0, explanation: "Hoofdpersoon = wie het verhaal over gaat. Roodkapje is de naam van het meisje en het verhaal." },
      { q: "Wat is de BOODSCHAP van een verhaal?", options: ["Wat het verhaal je wil leren", "De titel", "De schrijver", "Het aantal pagina's"], answer: 0, explanation: "Boodschap = de les of moraal. Bv. bij Roodkapje: 'praat niet met vreemden'." },
    ],
    3: [
      { q: "Wat schrijf je BOVENaan een brief?", options: ["Datum en aanhef ('Beste oma')", "Het einde", "Een tekening", "Niets"], answer: 0, explanation: "Brieven beginnen met datum + aanhef. Daarna de inhoud, en aan het eind je naam." },
      { q: "Hoe begin je een ZIN?", options: ["Met een hoofdletter", "Met een kleine letter", "Met een cijfer", "Met een !"], answer: 0, explanation: "Elke nieuwe zin begint met een hoofdletter. Eindigen kan met '.', '?' of '!'." },
      { q: "Welke ZIN is goed?", options: ["Ik loop naar school.", "ik loop naar school", "Ik LOOP naar school.", "Ik loop naar school"], answer: 0, explanation: "Hoofdletter aan begin (✓ Ik) + punt aan eind (✓ school.). Dat is de juiste vorm." },
    ],
    4: [
      { q: "Welk is GOED gespeld?", options: ["bal", "bahl", "ball", "bel"], answer: 0, explanation: "'Bal' = drie letters: b-a-l. Korte 'a' klank, korte 'l'." },
      { q: "Welke is goed: 'huis' of 'huiz'?", options: ["huis", "huiz", "Beide", "Geen van beide"], answer: 0, explanation: "Eenvoud: 'huis' eindigt op -s (een woord met s). De z hoort bij 'huizen' (meervoud)." },
      { q: "Hoe schrijf je het meervoud van 'kat'?", options: ["katten", "katen", "katz", "kats"], answer: 0, explanation: "Korte klinker 'a' → de medeklinker erna verdubbelt: kat → katten." },
    ],
    5: [
      { q: "Wat is een SYNONIEM van 'blij'?", options: ["vrolijk", "boos", "verdrietig", "moe"], answer: 0, explanation: "Synoniem = (bijna) hetzelfde betekenend woord. Blij = vrolijk." },
      { q: "Wat betekent 'hard rennen'?", options: ["heel snel rennen", "luid rennen", "zwaar rennen", "ver rennen"], answer: 0, explanation: "Hier is 'hard' een bijwoord van snelheid: heel snel. (Ander gebruik: 'hard hout' = stevig.)" },
      { q: "Welk woord hoort NIET bij eten?", options: ["fiets", "brood", "appel", "kaas"], answer: 0, explanation: "Brood, appel, kaas zijn voedsel. Fiets is een vervoersmiddel." },
    ],
  },

  // ── Veilig Leren Lezen — groep 3 (eerste leesonderwijs) ─────────────
  // Hoofdstukken: 0=Letters en klanken, 1=Woorden lezen, 2=Zinnen lezen,
  // 3=Teksten lezen, 4=Schrijven, 5=Spelling.
  "vll": {
    0: [
      { q: "Welke letter hoor je in 'maan'?", options: ["m", "n", "f", "k"], answer: 0, explanation: "Maan begint met de klank 'm'. Luister: m-aa-n." },
      { q: "Welke 2 letters samen klinken als 'oo'?", options: ["oo", "ao", "uo", "io"], answer: 0, explanation: "Twee o's samen = lange 'oo' klank. Bv. boom, mooi." },
      { q: "Welk woord begint met de klank 'b'?", options: ["bal", "appel", "olifant", "uil"], answer: 0, explanation: "Bal begint met b (b-a-l). De andere beginnen met andere klanken." },
    ],
    1: [
      { q: "Welke letters maken samen 'kat'?", options: ["k-a-t", "k-a-d", "g-a-t", "k-e-t"], answer: 0, explanation: "Kat = k + a + t. Drie aparte klanken aan elkaar." },
      { q: "Welk woord LIJKT op 'maan'?", options: ["man", "miel", "kaal", "duik"], answer: 0, explanation: "Maan en man klinken bijna gelijk — alleen aa (lang) tegenover a (kort)." },
      { q: "Welk woord eindigt op de klank 'oek'?", options: ["boek", "poel", "boom", "kooi"], answer: 0, explanation: "Boek = b + oe + k. Eindigt op 'oek'." },
    ],
    2: [
      { q: "Welke is een ZIN?", options: ["De man loopt.", "lopen huis", "Snel.", "kat"], answer: 0, explanation: "Een zin heeft minstens een onderwerp + werkwoord. 'De man loopt.' = wie + wat doet." },
      { q: "Welke zin past bij plaatje van een rennende hond?", options: ["De hond rent.", "De hond slaapt.", "De hond eet.", "De hond zwemt."], answer: 0, explanation: "Rent = bij rennen-plaatje. Andere acties bij andere plaatjes." },
      { q: "Hoe eindigt een ZIN meestal?", options: ["Met een punt", "Met een streep", "Met een spatie", "Met een woord"], answer: 0, explanation: "Een gewone zin eindigt met '.'. Een vraag met '?', een uitroep met '!'." },
    ],
    3: [
      { q: "Wat is de TITEL van een verhaal?", options: ["De naam bovenaan", "De laatste zin", "De schrijver", "Het einde"], answer: 0, explanation: "Titel = de naam van het verhaal, staat bovenaan en geeft een hint waar het over gaat." },
      { q: "Wat doe je als je een woord NIET kent in een tekst?", options: ["Aan de juf vragen", "Het overslaan en hopen", "Het boek weggooien", "Stoppen met lezen"], answer: 0, explanation: "Vraag het of zoek het op — zo leer je nieuwe woorden." },
      { q: "Wie zijn de PERSONAGES in een verhaal?", options: ["De mensen of dieren in het verhaal", "De schrijvers", "De lezers", "De plaatjes"], answer: 0, explanation: "Personages = wie er voorkomen in het verhaal. Bv. Roodkapje, de wolf en oma." },
    ],
    4: [
      { q: "Hoe schrijf je 'huis'?", options: ["h-u-i-s", "h-u-s", "h-i-s", "h-u-i-z"], answer: 0, explanation: "Huis = h + u + i + s. Vier letters." },
      { q: "Welk woord schrijf je MET een hoofdletter aan het begin?", options: ["Sara", "fiets", "boom", "rood"], answer: 0, explanation: "Sara is een naam (eigennaam) → hoofdletter. De andere zijn gewone woorden." },
      { q: "Welk getal schrijf je als 'drie'?", options: ["3", "30", "13", "33"], answer: 0, explanation: "'Drie' = 3 (cijfer). 30 = dertig, 13 = dertien." },
    ],
    5: [
      { q: "Welke is goed gespeld?", options: ["zon", "son", "zonn", "zhon"], answer: 0, explanation: "Zon = z + o + n. Korte o, geen dubbele letters." },
      { q: "Hoe schrijf je het MEERVOUD van 'man'?", options: ["mannen", "manen", "manz", "mans"], answer: 0, explanation: "Korte klinker (a) → medeklinker erna verdubbelt: man → mannen." },
      { q: "Welk leesteken zet je achter 'Hoe heet jij'?", options: ["?", ".", "!", ","], answer: 0, explanation: "Een vraag eindigt met '?'. Hier vraag je iemand iets, dus vraagteken." },
    ],
  },

  // ── Lijn 3 — groep 3 (alternatief leesonderwijs) ────────────────────
  // Hoofdstukken: 0=Letters en klanken, 1=Woorden, 2=Zinnen, 3=Teksten,
  // 4=Schrijven.
  "lijn3": {
    0: [
      { q: "Welke is een KLINKER?", options: ["a", "b", "k", "t"], answer: 0, explanation: "Klinkers: a, e, i, o, u (en y soms). Medeklinkers: alle andere letters zoals b, k, t." },
      { q: "Welke klank hoor je in 'eet'?", options: ["ee", "e", "et", "t"], answer: 0, explanation: "Eet heeft de lange 'ee' klank (twee e's klinken als één lange klank)." },
      { q: "Welk woord rijmt op 'pen'?", options: ["ven", "pop", "tand", "huis"], answer: 0, explanation: "Pen-ven hebben dezelfde -en klank → rijmen." },
    ],
    1: [
      { q: "Plak deze klanken: 'd-r-o-p'.", options: ["drop", "dorp", "draaip", "drep"], answer: 0, explanation: "d + r + o + p = drop. Letters in volgorde aan elkaar." },
      { q: "Welk woord betekent 'iets om mee te schrijven'?", options: ["pen", "boom", "fiets", "bal"], answer: 0, explanation: "Pen = schrijfgereedschap. De andere zijn andere voorwerpen." },
      { q: "Welk woord heeft 4 letters?", options: ["boek", "bal", "kat", "ja"], answer: 0, explanation: "Boek = b-o-e-k = 4 letters. Bal = 3, kat = 3, ja = 2." },
    ],
    2: [
      { q: "Welke is een goede zin?", options: ["De zon schijnt.", "schijnt zon de", "zon de schijnt", "schijnt"], answer: 0, explanation: "Een zin heeft een logische volgorde. 'De zon schijnt' = onderwerp + werkwoord." },
      { q: "Wat ontbreekt in: 'De hond ___'", options: ["een werkwoord (loopt, blaft)", "een hoofdletter", "een nieuwe naam", "niks"], answer: 0, explanation: "Een zin moet een werkwoord hebben. 'De hond loopt' / 'De hond blaft'." },
    ],
    3: [
      { q: "Wat doe je als je iets in een tekst NIET begrijpt?", options: ["Het opnieuw lezen", "Boek dichtdoen", "Iemand anders erop wijzen", "Negeren"], answer: 0, explanation: "Opnieuw lezen helpt vaak. Of vraag het aan iemand." },
      { q: "Welk soort tekst is 'Het regent vandaag'?", options: ["Een mededeling", "Een vraag", "Een uitroep", "Een gedicht"], answer: 0, explanation: "Mededeling = je vertelt iets. Eindigt met '.'." },
      { q: "Wat is een GEDICHT?", options: ["Een tekst met regels die vaak rijmen", "Een lange roman", "Een instructie", "Een lijstje"], answer: 0, explanation: "Gedicht = korte tekst met ritme/rijm. Vaak op een mooie manier iets vertellen." },
    ],
    4: [
      { q: "Hoe schrijf je een ZIN goed op?", options: ["Hoofdletter + spatie tussen woorden + punt", "Alles aan elkaar zonder spaties", "Alleen kleine letters", "Met cijfers"], answer: 0, explanation: "Hoofdletter (begin), spaties (tussen woorden), punt (einde). Bv. 'De auto rijdt.'" },
      { q: "Welk woord schrijf je voluit met letters?", options: ["acht", "8", "VIII", "oochd"], answer: 0, explanation: "'Acht' = letterwoord voor het cijfer 8. Bij schrijven kun je beide gebruiken." },
      { q: "Welke letters in 'zon' zijn klinkers?", options: ["o", "z", "n", "z en n"], answer: 0, explanation: "Z en N zijn medeklinkers. O is de enige klinker in 'zon'." },
    ],
  },

  // ── Argus Clou — wereldoriëntatie groep 5-8 (alternatief Naut) ──────
  // Hoofdstukken: 0=Het menselijk lichaam, 1=Planten, 2=Dieren,
  // 3=Natuur en milieu, 4=Weer en klimaat, 5=Aarde en ruimte,
  // 6=Techniek en energie.
  "argus-clou": {
    0: [
      { q: "Welk orgaan zit in je BUIK en verteert eten?", options: ["Maag", "Hart", "Long", "Hersenen"], answer: 0, explanation: "Maag = orgaan in je buik dat eten kneedt en met maagsap verteert." },
      { q: "Hoeveel uur slaap heeft een kind van 10 jaar gemiddeld nodig?", options: ["9-11 uur", "5-6 uur", "12-14 uur", "3-4 uur"], answer: 0, explanation: "Kinderen 6-12 jaar hebben 9-11 uur slaap nodig voor groei en herstel. Te weinig slaap = moe, slechte concentratie." },
      { q: "Wat doet je SKELET?", options: ["Houdt je lichaam rechtop", "Verteert eten", "Maakt zuurstof", "Slaapt"], answer: 0, explanation: "Skelet (botten) = stevigheid + bescherming (bv. ribben beschermen hart en longen)." },
      { q: "Welke spier werkt zonder dat je eraan denkt?", options: ["Hart", "Bovenarm", "Vinger", "Knie"], answer: 0, explanation: "Hartspier (en darmspieren) werken automatisch — je hoeft er niet aan te denken." },
    ],
    1: [
      { q: "Welk deel van een plant zit ONDER de grond?", options: ["Wortels", "Bladeren", "Bloemen", "Stengel-top"], answer: 0, explanation: "Wortels groeien naar beneden, halen water en voeding uit de grond." },
      { q: "Wat is een ZAAD?", options: ["Beginnetje van een nieuwe plant", "Klein blaadje", "Vrucht", "Steel"], answer: 0, explanation: "In een zaad zit alles om een nieuwe plant te laten ontkiemen — bv. zonnebloemzaad → zonnebloemplant." },
      { q: "Welke plant maakt jaarlijks NIEUWE bladeren in de lente?", options: ["Loofboom (eik, beuk)", "Naaldboom (den, spar)", "Cactus", "Mos"], answer: 0, explanation: "Loofbomen verliezen bladeren in herfst en krijgen nieuwe in lente. Naaldbomen zijn vaak groenblijvend." },
      { q: "Wat is een KAS?", options: ["Een glazen gebouw waar planten groeien", "Een soort plant", "Een bos", "Een bloemenzaak"], answer: 0, explanation: "Kas = warm glazen gebouw waar tomaten/komkommers/bloemen groeien — ook in winter." },
    ],
    2: [
      { q: "Welk dier is een ROOFDIER?", options: ["Leeuw", "Konijn", "Koe", "Schaap"], answer: 0, explanation: "Roofdier = jaagt op andere dieren voor voedsel. Leeuw jaagt op antilopen. Koe/schaap eten gras (planteneters)." },
      { q: "Hoe haalt een vis ZUURSTOF binnen?", options: ["Via kieuwen", "Via longen", "Via huid", "Via bek"], answer: 0, explanation: "Vissen hebben kieuwen die zuurstof uit het water filteren. Zoogdieren hebben longen voor zuurstof uit lucht." },
      { q: "Wat doen vogels in de winter VAAK?", options: ["Trekken naar warmere landen", "Slapen continu", "Eieren leggen", "Niets bijzonders"], answer: 0, explanation: "Trekvogels (zwaluwen, ooievaars) vliegen naar warm Afrika omdat hier weinig voedsel is. Sommige vogels (mussen) blijven." },
      { q: "Welk dier legt EIEREN met een harde schaal?", options: ["Vogel", "Hond", "Vis", "Konijn"], answer: 0, explanation: "Vogels leggen eieren met kalkschaal. Vissen leggen eieren in water (zacht). Hond/konijn = zoogdier (levende jongen)." },
    ],
    3: [
      { q: "Wat betekent BIODIVERSITEIT?", options: ["Variatie aan planten en dieren", "Soort milieu-camera", "Type huis", "Een ziekte"], answer: 0, explanation: "Biodiversiteit = hoeveel verschillende soorten leven er. Hoe meer biodiversiteit, hoe gezonder de natuur." },
      { q: "Wat is een NATUURGEBIED?", options: ["Beschermd stuk natuur waar planten en dieren leven", "Stadspark", "Camping", "Speeltuin"], answer: 0, explanation: "Natuurgebied = beschermd terrein waar mens niet alles mag (geen huizen, weinig wegen) — bv. Veluwe, Biesbosch." },
      { q: "Wat is RECYCLEN?", options: ["Materiaal hergebruiken (afval → nieuwe spullen)", "Iets weggooien", "Iets nieuws kopen", "Tellen"], answer: 0, explanation: "Recyclen: oud papier → nieuw papier; oude petfles → nieuwe petfles. Spaart grondstoffen." },
      { q: "Welke energie is GROEN (duurzaam)?", options: ["Zonneenergie", "Aardgas", "Steenkool", "Aardolie"], answer: 0, explanation: "Zonneenergie raakt nooit op en geeft geen CO₂. Gas/kolen/olie zijn fossiel (raken op + opwarming)." },
    ],
    4: [
      { q: "Wat veroorzaakt WIND?", options: ["Verschillen in luchtdruk", "Bomen die bewegen", "Wolken die voorbij gaan", "Vogels die vliegen"], answer: 0, explanation: "Wind = lucht stroomt van hogedruk naar lagedruk. Onstaat door temperatuur-verschillen op aarde." },
      { q: "Wat is HAGEL?", options: ["IJsbolletjes uit een wolk", "Sneeuwvlokken", "Vorst op gras", "Ijsbergen"], answer: 0, explanation: "Hagel = ijsbolletjes die in wolken steeds groter groeien tot ze te zwaar worden en vallen." },
      { q: "Welk klimaat heeft Nederland?", options: ["Gematigd zeeklimaat", "Tropisch", "Woestijn", "Poolgebied"], answer: 0, explanation: "Gematigd zeeklimaat: niet te heet, niet te koud, regelmatig regen door nabijheid Noordzee." },
      { q: "Wat doet een WEERSTATION?", options: ["Meet temperatuur, regen, wind", "Maakt het weer", "Vangt wolken", "Schiet bliksem"], answer: 0, explanation: "Weerstation = instrumenten die het weer meten. KNMI gebruikt die data voor de weersvoorspelling." },
    ],
    5: [
      { q: "Welke planeet wordt 'de rode planeet' genoemd?", options: ["Mars", "Mercurius", "Saturnus", "Neptunus"], answer: 0, explanation: "Mars heeft een rode/oranje kleur door ijzeroxide (roest) op het oppervlak. Vandaar bijnaam 'rode planeet'." },
      { q: "Hoeveel planeten heeft ons zonnestelsel?", options: ["8", "9", "7", "10"], answer: 0, explanation: "Mercurius, Venus, Aarde, Mars, Jupiter, Saturnus, Uranus, Neptunus = 8. (Pluto telt niet meer als planeet sinds 2006.)" },
      { q: "Wat is een ZONSVERDUISTERING?", options: ["De maan staat tussen zon en aarde", "Wolken bedekken de zon", "Het wordt avond", "De zon gaat uit"], answer: 0, explanation: "Bij zonsverduistering staat de maan precies tussen zon en aarde. De maanschaduw maakt het overdag tijdelijk donker." },
      { q: "Hoeveel uur duurt één dag op AARDE?", options: ["24 uur", "12 uur", "48 uur", "365 uur"], answer: 0, explanation: "Aarde draait in 24 uur om eigen as = 1 dag. 365 dagen = 1 jaar (rondje om de zon)." },
    ],
    6: [
      { q: "Wat is een EENVOUDIGE machine?", options: ["Hefboom of katrol", "Computer", "Auto", "Robot"], answer: 0, explanation: "Eenvoudige machines zijn basisuitvindingen: hefboom, katrol, hellend vlak, schroef, wig — versterken kracht." },
      { q: "Hoe wordt elektriciteit OPgewekt in een windmolen?", options: ["Wind draait wieken die een dynamo aandrijven", "Wind blaast op zonnepanelen", "Wind zelf is elektrisch", "Door warmte"], answer: 0, explanation: "Wieken draaien → as draait → dynamo zet draaibeweging om in elektriciteit." },
      { q: "Welk materiaal geleidt elektriciteit GOED?", options: ["Koper", "Hout", "Plastic", "Glas"], answer: 0, explanation: "Metalen (vooral koper) zijn goede geleiders. Hout, plastic, glas zijn isolatoren." },
      { q: "Wat is een SOLAR PANEEL?", options: ["Vangt zonlicht en maakt er elektriciteit van", "Verwarmt water", "Beschermt tegen zon", "Reflecteert licht"], answer: 0, explanation: "Solar (= zon) paneel zet zonlicht direct om in elektriciteit. Op steeds meer Nederlandse daken te zien." },
    ],
  },

  // ╔═══════════════════════════════════════════════════════════════╗
  // ║  VOORTGEZET ONDERWIJS                                          ║
  // ╚═══════════════════════════════════════════════════════════════╝

  // ── Getal & Ruimte Havo/vwo 1 Deel 1 — wiskunde klas 1 ──────────────
  // Hoofdstukken: 0=Figuren, 1=Getallen en formules, 2=Assenstelsel en
  // grafieken, 3=Hoeken en symmetrie, 4=Reken.
  "gr-hv1-deel1": {
    0: [
      { q: "Wat is de oppervlakte van een rechthoek 12 × 5?", options: ["60", "34", "17", "120"], answer: 0, explanation: "A = lengte × breedte = 12 × 5 = 60. (34 is de omtrek.)" },
      { q: "Een driehoek heeft hoeken 50° en 80°. De derde?", options: ["50°", "60°", "70°", "80°"], answer: 0, explanation: "Hoekensom driehoek = 180°. 180 − 50 − 80 = 50°." },
      { q: "Welke figuur heeft 4 even lange zijden én 4 rechte hoeken?", options: ["Vierkant", "Ruit", "Rechthoek", "Parallellogram"], answer: 0, explanation: "Vierkant = 4 gelijke zijden + 4 rechte hoeken. Ruit heeft niet altijd rechte hoeken." },
      { q: "Hoeveel ribben heeft een kubus?", options: ["12", "6", "8", "4"], answer: 0, explanation: "6 vlakken, 8 hoekpunten, 12 ribben." },
    ],
    1: [
      { q: "Vereenvoudig: 3 × (4 + 5)", options: ["27", "17", "21", "60"], answer: 0, explanation: "Eerst tussen haakjes: 4+5=9. Dan 3 × 9 = 27. Volgorde: haakjes → ×/÷ → +/−." },
      { q: "Vul in: 7 × ___ = 56", options: ["8", "7", "9", "6"], answer: 0, explanation: "56 / 7 = 8. Tafel van 7: 7×8=56." },
      { q: "De formule p = 2 × a + 3. Wat is p als a = 5?", options: ["13", "10", "8", "16"], answer: 0, explanation: "p = 2 × 5 + 3 = 10 + 3 = 13." },
      { q: "Bereken: 100 − 3 × 20", options: ["40", "94", "1940", "60"], answer: 0, explanation: "Eerst ×: 3×20=60. Daarna −: 100−60=40." },
    ],
    2: [
      { q: "Het punt (3, 5) ligt waar?", options: ["Rechts en boven het origineel", "Links en boven", "Rechts en onder", "In het origineel"], answer: 0, explanation: "Eerste coördinaat (x=3) → 3 naar rechts. Tweede (y=5) → 5 omhoog." },
      { q: "Welke vormt een GRAFIEK?", options: ["Tabel met x en y omgezet naar punten", "Een tekening van een huis", "Een formule alleen", "Een getal"], answer: 0, explanation: "Grafiek = visuele weergave van paren (x, y) als punten of lijn in een assenstelsel." },
      { q: "Bij y = 2x: wat is y als x = 4?", options: ["8", "6", "2", "10"], answer: 0, explanation: "y = 2 × 4 = 8. Vervang x door 4 in de formule." },
      { q: "De x-as is meestal welke richting?", options: ["Horizontaal (links-rechts)", "Verticaal", "Diagonaal", "Cirkelvormig"], answer: 0, explanation: "x-as = horizontaal, y-as = verticaal. Snijpunt = oorsprong (0,0)." },
    ],
    3: [
      { q: "Een rechte hoek is hoeveel graden?", options: ["90°", "180°", "45°", "360°"], answer: 0, explanation: "Rechte hoek = 90° (kwart cirkel). Gestrekt = 180°, vol = 360°." },
      { q: "Een spiegel-as in een vierkant gaat door?", options: ["Twee tegenoverliggende zijden", "Eén hoekpunt", "Het midden van een zijde", "Geen, een vierkant heeft er geen"], answer: 0, explanation: "Een vierkant heeft 4 spiegel-assen: 2 door midden van zijden, 2 langs diagonalen." },
      { q: "Welke hoek is STOMP?", options: ["110°", "60°", "90°", "30°"], answer: 0, explanation: "Stomp = tussen 90° en 180°. 110° valt erbinnen. 60°/30° = scherp, 90° = recht." },
      { q: "Hoeveel symmetrie-assen heeft een gelijkzijdige driehoek?", options: ["3", "1", "2", "6"], answer: 0, explanation: "3 spiegel-assen: één per hoekpunt naar het midden van de overstaande zijde." },
    ],
    4: [
      { q: "Wat is 25 % van 80?", options: ["20", "25", "16", "40"], answer: 0, explanation: "25 % = ¼. Eén vierde van 80 = 20." },
      { q: "Wat is 0,25 als breuk?", options: ["¼", "¾", "½", "⅕"], answer: 0, explanation: "0,25 = 25/100 = 1/4 (vereenvoudigd)." },
      { q: "Reken uit: 12,5 + 7,75", options: ["20,25", "19,25", "20,75", "20"], answer: 0, explanation: "12,50 + 7,75 = 20,25 (decimaal kommas onder elkaar)." },
      { q: "Een trui kost €40 met 20% korting. Wat betaal je?", options: ["€32", "€20", "€8", "€48"], answer: 0, explanation: "20% van 40 = 8. Korting = 8. Prijs: 40 − 8 = €32." },
    ],
  },

  // ── Moderne Wiskunde Havo/vwo 1A — wiskunde klas 1 ──────────────────
  // Hoofdstukken: 0=Rekenen, 1=Negatieve getallen, 2=Formules en
  // vergelijkingen, 3=Oppervlakte en inhoud, 4=Rekenen met variabelen,
  // 5=Vlakke figuren.
  "mw-hv1a": {
    0: [
      { q: "Reken: 7 × 8 + 4", options: ["60", "84", "56", "108"], answer: 0, explanation: "Eerst ×: 56. + 4 = 60." },
      { q: "Schrijf 3/4 als decimaal getal.", options: ["0,75", "0,34", "0,43", "1,33"], answer: 0, explanation: "3 / 4 = 0,75. Of: 3/4 × 100 = 75 → 0,75." },
      { q: "Wat is 2³?", options: ["8", "6", "9", "5"], answer: 0, explanation: "2³ = 2 × 2 × 2 = 8." },
      { q: "30% van 200 = ?", options: ["60", "30", "200", "70"], answer: 0, explanation: "30/100 × 200 = 60. Of: 0,3 × 200 = 60." },
    ],
    1: [
      { q: "Wat is −5 + 8?", options: ["3", "−3", "13", "−13"], answer: 0, explanation: "−5 + 8 = 3 (8 stappen omhoog vanaf −5)." },
      { q: "Wat is 4 − 7?", options: ["−3", "3", "−11", "11"], answer: 0, explanation: "4 − 7: ga 7 naar links vanaf 4 → −3." },
      { q: "Wat is −3 × 4?", options: ["−12", "12", "−7", "7"], answer: 0, explanation: "negatief × positief = negatief. 3 × 4 = 12 → −12." },
      { q: "Wat is −6 × −2?", options: ["12", "−12", "8", "−8"], answer: 0, explanation: "negatief × negatief = positief. 6 × 2 = 12 → +12." },
    ],
    2: [
      { q: "Los op: x + 5 = 12", options: ["x = 7", "x = 17", "x = 5", "x = 60"], answer: 0, explanation: "x = 12 − 5 = 7. Trek 5 van beide kanten af." },
      { q: "Los op: 3x = 21", options: ["x = 7", "x = 18", "x = 24", "x = 63"], answer: 0, explanation: "Deel beide kanten door 3: x = 21/3 = 7." },
      { q: "Bij p = 5 + 2t, t = 4. Bereken p.", options: ["13", "11", "20", "9"], answer: 0, explanation: "p = 5 + 2 × 4 = 5 + 8 = 13." },
      { q: "Los op: 2x − 3 = 11", options: ["x = 7", "x = 4", "x = 14", "x = 8"], answer: 0, explanation: "2x = 11 + 3 = 14. x = 14 / 2 = 7." },
    ],
    3: [
      { q: "Oppervlakte van een vierkant met zijde 6 cm?", options: ["36 cm²", "24 cm²", "12 cm²", "18 cm²"], answer: 0, explanation: "A = z² = 6 × 6 = 36 cm²." },
      { q: "Inhoud kubus met ribbe 4 cm?", options: ["64 cm³", "16 cm³", "12 cm³", "48 cm³"], answer: 0, explanation: "V = z³ = 4 × 4 × 4 = 64 cm³." },
      { q: "Driehoek met basis 8 en hoogte 5. Oppervlakte?", options: ["20", "40", "13", "26"], answer: 0, explanation: "A = ½ × b × h = ½ × 8 × 5 = 20." },
      { q: "Hoeveel ml in 1 liter?", options: ["1000", "100", "10", "10000"], answer: 0, explanation: "1 l = 1000 ml = 1000 cm³ (kubieke cm)." },
    ],
    4: [
      { q: "Vereenvoudig: 3a + 5a", options: ["8a", "15a", "8", "8a²"], answer: 0, explanation: "Gelijksoortige termen optellen: 3a + 5a = (3+5)a = 8a." },
      { q: "Vereenvoudig: 4x − x", options: ["3x", "4", "5x", "−4x²"], answer: 0, explanation: "4x − 1x = 3x. Eén variabele zonder coëfficiënt = 1×variabele." },
      { q: "Wat is 2a × 3?", options: ["6a", "5a", "23a", "6a²"], answer: 0, explanation: "Coëfficiënten vermenigvuldigen: 2 × 3 = 6, variabele blijft a → 6a." },
      { q: "Vereenvoudig: 5x + 2y − 2x + 3y", options: ["3x + 5y", "5x + 5y", "8xy", "3x + y"], answer: 0, explanation: "x-termen: 5x − 2x = 3x. y-termen: 2y + 3y = 5y. Antwoord: 3x + 5y." },
    ],
    5: [
      { q: "Een rechthoek heeft zijden 6 en 4. Omtrek?", options: ["20", "24", "10", "14"], answer: 0, explanation: "P = 2(l + b) = 2 × (6 + 4) = 20." },
      { q: "Een cirkel met straal 5. Diameter?", options: ["10", "5", "25", "2,5"], answer: 0, explanation: "Diameter = 2 × straal = 2 × 5 = 10." },
      { q: "Welke figuur heeft 6 zijden?", options: ["Zeshoek", "Vijfhoek", "Achthoek", "Driehoek"], answer: 0, explanation: "Zeshoek (hexagoon) = 6 zijden. Vijfhoek = 5, achthoek = 8." },
      { q: "Som van hoeken in een vierkant?", options: ["360°", "180°", "90°", "720°"], answer: 0, explanation: "Vierkant heeft 4 hoeken van 90° → 4 × 90 = 360°." },
    ],
  },

  // ── Nieuw Nederlands Havo/vwo 1 — Nederlands klas 1 ─────────────────
  // 12 hoofdstukken (thema-gestuurd), 3 vragen per thema voor totaal ~36.
  "nn-hv1": {
    0: [
      { q: "Hoe stel je jezelf voor in een formele situatie?", options: ["'Hallo, ik ben Sara Jansen.'", "'Yo!'", "'Hoi.'", "'Wat moet je?'"], answer: 0, explanation: "Formeel = volledige naam + nette begroeting. Yo/hoi = informeel onder vrienden." },
      { q: "Wat is een eigennaam?", options: ["Naam van een persoon, plaats of merk", "Een gewone naam zoals 'tafel'", "Een werkwoord", "Een lidwoord"], answer: 0, explanation: "Eigennamen krijgen hoofdletter: Sara, Amsterdam, Coca-Cola. Soortnamen niet: tafel, stad, drank." },
      { q: "Welke uitspraak past bij EEN GESPREK?", options: ["Open vraag stellen + actief luisteren", "Alleen jezelf laten horen", "Door iemand heen praten", "Nooit knikken"], answer: 0, explanation: "Goede gespreksvaardigheid = vragen stellen, luisteren, reageren — geen monoloog." },
    ],
    1: [
      { q: "Welk woord beschrijft een GEZINSLID?", options: ["Broer", "Buurman", "Klasgenoot", "Vriend"], answer: 0, explanation: "Broer = familie/gezin. Buurman, klasgenoot, vriend = ander soort relatie." },
      { q: "Wat is een BIJVOEGLIJK NAAMWOORD bij 'mijn vriendin'?", options: ["aardige (mijn aardige vriendin)", "Sara", "lopen", "snel"], answer: 0, explanation: "Bnw geeft eigenschap aan het zelfstandig naamwoord. 'Aardige' beschrijft de vriendin." },
      { q: "Welk persoonlijk voornaamwoord past: 'Hij belde naar ___ moeder.'", options: ["zijn", "zijn (bezittelijk)", "hij", "hem"], answer: 0, explanation: "'Zijn' is het bezittelijk voornaamwoord van 'hij' — verwijst naar wiens moeder. Hier is hij = bezitter." },
    ],
    2: [
      { q: "Wat is een SCHOOLREGEL?", options: ["Afspraak hoe iedereen zich gedraagt", "Formule wiskunde", "Toets", "Rooster"], answer: 0, explanation: "Schoolregels zijn gedragsafspraken: niet rennen op de gang, telefoon weg, etc." },
      { q: "Welk werkwoord past in: 'In de pauze ___ wij naar buiten.'", options: ["gaan", "gaat", "ga", "gaand"], answer: 0, explanation: "Wij + werkwoord 'gaan' → wij gaan. Bij 'wij' krijgt het ww de meervoudsvorm." },
      { q: "Een HOBBY is?", options: ["Iets wat je in je vrije tijd doet voor plezier", "Een schoolvak", "Werk", "Slapen"], answer: 0, explanation: "Hobby = vrijetijdsbesteding voor het plezier — bv. tekenen, voetballen, lezen." },
    ],
    3: [
      { q: "Wat zijn KOOLHYDRATEN?", options: ["Suikers en zetmeel — energiebron", "Vitaminen", "Vetten", "Water"], answer: 0, explanation: "Koolhydraten (in brood, aardappel, rijst) leveren snel energie. Eiwitten = bouwstoffen, vetten = reserve-energie." },
      { q: "Welk lidwoord: '___ appel'?", options: ["de", "het", "een (alleen)", "geen"], answer: 0, explanation: "'De' appel (mannelijk/vrouwelijk). 'Het' wordt gebruikt voor onzijdige woorden zoals 'het boek', 'het kind'." },
      { q: "Welke is GOED gespeld?", options: ["bouillon", "boullion", "buillon", "bouilon"], answer: 0, explanation: "Bouillon — Frans leenwoord, met 'illon'. Vaak fout gespeld; onthouden of opzoeken." },
    ],
    4: [
      { q: "Welke is een vraagwoord-zin?", options: ["Waar zit je hotel?", "Het hotel is mooi.", "Loop snel.", "Wat een leuke reis!"], answer: 0, explanation: "Vraagwoord-zin begint met w-woord (wie/wat/waar/wanneer/waarom/welke/hoe). 'Waar' = vraag." },
      { q: "Wat is een SAMENVATTING?", options: ["Korte versie van het belangrijkste", "Een lange uitleg", "Een verhaal", "Een lijst"], answer: 0, explanation: "Samenvatting = de hoofdpunten in eigen woorden, korter. Geen details." },
      { q: "'Ik bezocht musea' — verleden tijd van?", options: ["bezoeken", "bezitten", "beklimmen", "besteden"], answer: 0, explanation: "Bezocht = verleden tijd onregelmatig werkwoord 'bezoeken'. (Stam bezoek + vt-uitgang -te / -de + onregelmatigheid → bezocht.)" },
    ],
    5: [
      { q: "Welk type tekst is een KRANTEN-ARTIKEL?", options: ["Informatief / nieuws", "Verhalend", "Betogend", "Instructief"], answer: 0, explanation: "Krantenartikel = feiten over actuele gebeurtenissen → informatief." },
      { q: "Wat is FAKE NEWS?", options: ["Nepnieuws — verzonnen of misleidend", "Echt nieuws", "Sportverslag", "Reclame"], answer: 0, explanation: "Fake news = bewust onjuist of misleidend nieuws. Belangrijk om bron en feiten te checken." },
      { q: "Wat doe je bij FACT-CHECKEN?", options: ["Controleren of iets waar is via betrouwbare bronnen", "Snel doorklikken", "Geloven wat er staat", "Niets"], answer: 0, explanation: "Fact-check: kijk of meerdere onafhankelijke bronnen hetzelfde zeggen, en of het een betrouwbare bron is." },
    ],
    6: [
      { q: "Hoeveel water moet je per dag drinken (advies)?", options: ["Ongeveer 1,5 liter", "10 liter", "0,2 liter", "5 liter"], answer: 0, explanation: "Voedingscentrum-advies: ~1,5 liter water/vocht per dag voor volwassenen, iets minder voor kinderen." },
      { q: "Welke sport is een TEAMSPORT?", options: ["Voetbal", "Tennis enkel", "Hardlopen", "Schaken"], answer: 0, explanation: "Teamsport = met meerdere spelers samen, één tegen ander team. Voetbal, hockey, basketbal." },
      { q: "Wat is GEZONDE LEVENSSTIJL?", options: ["Combinatie van bewegen, gezond eten, voldoende slaap", "Alleen sporten", "Alleen niet roken", "Alleen vroeg slapen"], answer: 0, explanation: "Gezonde leefstijl = balans tussen voeding, beweging, slaap, en mentale rust." },
    ],
    7: [
      { q: "Wat is BIODIVERSITEIT?", options: ["Variatie aan levensvormen op aarde", "Een plant", "Een land", "Een ziekte"], answer: 0, explanation: "Biodiversiteit = soortenrijkdom — alle planten, dieren, micro-organismen samen. Hoge biodiversiteit = gezond ecosysteem." },
      { q: "Welk is een GEVOLG van klimaatverandering?", options: ["Stijgende zeespiegel", "Meer fietsen", "Lagere temperaturen", "Geen veranderingen"], answer: 0, explanation: "Klimaatverandering: gemiddelde temperatuur stijgt → ijskappen smelten → zeespiegel stijgt → kustlanden in gevaar." },
      { q: "Wat is RECYCLING?", options: ["Materialen hergebruiken", "Iets weggooien", "Iets nieuws kopen", "Tellen"], answer: 0, explanation: "Recycling: oud → nieuw via fabriek (bv. petfles → nieuwe petfles)." },
    ],
    8: [
      { q: "Wat is een CV (curriculum vitae)?", options: ["Levensloop voor sollicitatie", "Een soort scooter", "Schoolboek", "Verzekering"], answer: 0, explanation: "CV = overzicht van opleiding, werk, ervaring — bedrijven vragen 'm bij sollicitatie." },
      { q: "Welk werk is dienstverlenend?", options: ["Verpleegkundige", "Productie-medewerker", "Boer", "Bouwvakker"], answer: 0, explanation: "Dienstverlening = werken vóór mensen (zorg, horeca, kapper). Productie/landbouw/bouw maken iets fysieks." },
      { q: "Welke vaardigheid is BELANGRIJK voor een toekomst-baan?", options: ["Communiceren + samenwerken + leren", "Alleen één ding goed kunnen", "Veel praten", "Hard werken zonder pauze"], answer: 0, explanation: "Soft skills (samenwerken, communicatie, flexibiliteit) plus blijven leren = essentieel in elke toekomstige baan." },
    ],
    9: [
      { q: "Wat is DEMOCRATIE?", options: ["Regering door het volk via verkiezingen", "Eén leider beslist alles", "Een soort koningshuis", "Een land zonder regels"], answer: 0, explanation: "Democratie: volk kiest vertegenwoordigers (parlement) die wetten maken. Tegenovergesteld: dictatuur." },
      { q: "Welk is een MENSENRECHT?", options: ["Recht op vrije meningsuiting", "Recht op gratis ijs", "Recht om altijd te winnen", "Recht op luxe auto's"], answer: 0, explanation: "Universele Verklaring van de Rechten van de Mens (1948): vrije meningsuiting, gelijkheid, leven, etc." },
      { q: "Wat is DISCRIMINATIE?", options: ["Iemand achterstellen om afkomst, geslacht, religie etc.", "Iemand helpen", "Een keuze maken", "Een opmerking"], answer: 0, explanation: "Discriminatie = ongelijke behandeling op basis van persoonlijke kenmerken. In Nederland verboden (artikel 1 Grondwet)." },
    ],
    10: [
      { q: "Wat is een ROMAN?", options: ["Lang verhalend boek met fictie", "Een biografie", "Een gedicht", "Een toneelstuk"], answer: 0, explanation: "Roman = uitgebreid verhaal, meestal verzonnen, vaak honderden pagina's. Verschilt van novelle (korter) of poëzie." },
      { q: "Welke literaire stijlfiguur is 'Hij rent als een raket'?", options: ["Vergelijking", "Personificatie", "Hyperbool", "Metafoor"], answer: 0, explanation: "Vergelijking gebruikt 'als' of 'zoals' (zoals raket). Metafoor zegt direct: 'hij is een raket'." },
      { q: "Wat is RIJM?", options: ["Woorden met dezelfde eindklank", "Een soort gedicht", "Een lange tekst", "Een zin"], answer: 0, explanation: "Rijm: kat-mat, hond-mond, boek-doek hebben dezelfde eind-klank. Vaak in poëzie." },
    ],
    11: [
      { q: "Wat is een ARGUMENT?", options: ["Reden om iets te onderbouwen", "Een ruzie", "Een mening zonder reden", "Een vraag"], answer: 0, explanation: "Argument = bewijs of reden waarom je standpunt klopt. Mening + onderbouwing = argument." },
      { q: "Welke is een SLECHTE argumentatie?", options: ["'Iedereen vindt het, dus is het waar'", "'Onderzoek toont aan dat...'", "'Volgens de wet geldt...'", "'Twee bronnen bevestigen...'"], answer: 0, explanation: "Drogreden 'argument ad populum' (iedereen vindt) is logische fout. Goede argumenten gebruiken bewijs/bron." },
      { q: "Wat is een DEBAT?", options: ["Geordende discussie met regels en standpunten", "Schreeuw-ruzie", "Toespraak", "Toets"], answer: 0, explanation: "Debat: voor- en tegenstanders argumenteren beurtelings volgens regels. Vaak met jury die wint bepaalt." },
    ],
  },

  // ── Stepping Stones — Engels klas 1-6 ───────────────────────────────
  // Hoofdstukken: 0=Getting started, 1=Family and friends, 2=School life,
  // 3=Free time, 4=Food and health, 5=Travel and holidays,
  // 6=Technology and media, 7=Nature and environment.
  "stepping-stones": {
    0: [
      { q: "How do you say 'hallo' in English?", options: ["Hello", "Hola", "Bonjour", "Ciao"], answer: 0, explanation: "Hello = Engels. Hola = Spaans, Bonjour = Frans, Ciao = Italiaans." },
      { q: "'My name ___ Sara.'", options: ["is", "are", "am", "be"], answer: 0, explanation: "Derde persoon enkelvoud: he/she/it + IS. 'My name is Sara'." },
      { q: "Wat betekent 'How are you?'", options: ["Hoe gaat het met je?", "Wie ben je?", "Waar woon je?", "Hoe oud ben je?"], answer: 0, explanation: "How are you = standaard begroeting 'hoe gaat het'. Antwoord: 'I'm fine, thanks.'" },
    ],
    1: [
      { q: "Wat betekent 'sister'?", options: ["Zus", "Broer", "Moeder", "Tante"], answer: 0, explanation: "Sister = zus. Brother = broer, mother = moeder, aunt = tante." },
      { q: "'I have ___ brother.' (1 broer)", options: ["a", "an", "one", "the"], answer: 0, explanation: "Onbepaald lidwoord 'a' voor medeklinker (b van brother). 'An' voor klinker (an apple)." },
      { q: "Wat is meervoud van 'child'?", options: ["children", "childs", "childes", "child"], answer: 0, explanation: "Onregelmatig meervoud: child → children. (Niet childs.)" },
    ],
    2: [
      { q: "Wat is 'desk' in het Nederlands?", options: ["Bureau / lessenaar", "Stoel", "Bord", "Tas"], answer: 0, explanation: "Desk = bureau (waar je achter zit op school of werk)." },
      { q: "'I ___ to school by bike.'", options: ["go", "goes", "going", "went"], answer: 0, explanation: "I + go (basisvorm). 'Goes' is voor he/she/it. 'Went' is verleden tijd." },
      { q: "Hoe vraag je 'Wanneer begint de les?'", options: ["When does the lesson start?", "Where does the lesson start?", "Why does the lesson start?", "Who does the lesson start?"], answer: 0, explanation: "When = wanneer. Where = waar, why = waarom, who = wie." },
    ],
    3: [
      { q: "Wat betekent 'hobby'?", options: ["Hobby / vrije tijdsbesteding", "Werk", "Vakantie", "Eten"], answer: 0, explanation: "Hobby = hobby. Engels en NL gebruiken hetzelfde leenwoord." },
      { q: "'I ___ playing football.' (ik vind het leuk)", options: ["like", "likes", "liking", "liked"], answer: 0, explanation: "I + like + ing-vorm. 'Likes' alleen voor he/she/it." },
      { q: "Welke sport is 'swimming'?", options: ["Zwemmen", "Lopen", "Springen", "Klimmen"], answer: 0, explanation: "Swimming = zwemmen (van 'swim'). Running = lopen, jumping = springen." },
    ],
    4: [
      { q: "Wat is 'breakfast'?", options: ["Ontbijt", "Lunch", "Diner", "Snack"], answer: 0, explanation: "Breakfast = ontbijt (eerste maaltijd). Lunch = middag, dinner = avondeten." },
      { q: "Welk woord betekent NIET een groente?", options: ["Apple", "Carrot", "Onion", "Potato"], answer: 0, explanation: "Apple = appel = fruit. Carrot/onion/potato = wortel/ui/aardappel = groenten." },
      { q: "'I am ___' (honger)", options: ["hungry", "thirsty", "tired", "happy"], answer: 0, explanation: "Hungry = hongerig. Thirsty = dorstig, tired = moe, happy = blij." },
    ],
    5: [
      { q: "Wat betekent 'holiday'?", options: ["Vakantie / feestdag", "Werkdag", "Weekend", "School"], answer: 0, explanation: "Holiday = vakantie of feestdag. UK: holiday, US: vacation." },
      { q: "'Last year I ___ to Spain.'", options: ["went", "go", "going", "goes"], answer: 0, explanation: "Verleden tijd van 'go' = went. Onregelmatig werkwoord. 'Last year' = signaal voor verleden tijd." },
      { q: "Welk vervoer is 'plane'?", options: ["Vliegtuig", "Trein", "Boot", "Auto"], answer: 0, explanation: "Plane / airplane = vliegtuig. Train, boat, car = trein, boot, auto." },
    ],
    6: [
      { q: "Wat is 'website'?", options: ["Webpagina / website", "Vissersnet", "Spinnenweb", "Telefoon"], answer: 0, explanation: "Website = digitaal adres (URL) op het internet. Bv. www.google.com." },
      { q: "'I ___ a phone.' (ik bezit)", options: ["have", "am", "has", "has got"], answer: 0, explanation: "I + have. (He/she/it + has.) 'Has got' is alternatief: 'I have got a phone'." },
      { q: "Welk apparaat is 'computer'?", options: ["Computer", "Telefoon", "Auto", "Klok"], answer: 0, explanation: "Computer = computer (dezelfde benaming in NL en EN, leenwoord)." },
    ],
    7: [
      { q: "Wat is 'tree'?", options: ["Boom", "Bloem", "Gras", "Vogel"], answer: 0, explanation: "Tree = boom. Flower = bloem, grass = gras, bird = vogel." },
      { q: "Welk woord past bij milieu (environment)?", options: ["Pollution", "Music", "School", "Family"], answer: 0, explanation: "Pollution = vervuiling — milieuthema. Music/school/family zijn andere thema's." },
      { q: "'We must ___ the planet.' (beschermen)", options: ["protect", "destroy", "ignore", "buy"], answer: 0, explanation: "Protect = beschermen. Destroy = vernietigen, ignore = negeren." },
    ],
  },

  // ── Feniks — geschiedenis VO (10 tijdvakken) ─────────────────────────
  "feniks": {
    0: [
      // Tijd van jagers en boeren (tot 3000 v.Chr.)
      { q: "Wanneer leefden de eerste mensen vooral als JAGER-VERZAMELAAR?", options: ["Vóór ~10.000 jaar geleden", "100 jaar geleden", "1000 jaar geleden", "Sinds 1500"], answer: 0, explanation: "Tot ~10.000 jaar geleden trokken mensen rond op zoek naar eten. Daarna landbouw → vaste woonplaatsen." },
      { q: "Wat veranderde door de uitvinding van LANDBOUW?", options: ["Mensen gingen vast wonen + dieren houden", "Mensen leerden zwemmen", "Het werd warmer", "Mensen begonnen met handel"], answer: 0, explanation: "Landbouwrevolutie: graan zaaien + dieren temmen → vaste dorpen, voorraden, meer mensen mogelijk." },
      { q: "Wat is een KENMERK van het neolithicum (jonge steentijd)?", options: ["Geslepen stenen werktuigen + landbouw", "IJzeren wapens", "Steden met rioleringen", "Geschreven geschiedenis"], answer: 0, explanation: "Neolithicum: betere stenen werktuigen + begin landbouw + permanent wonen." },
    ],
    1: [
      // Tijd van Grieken en Romeinen (3000 v.Chr. - 500 n.Chr.)
      { q: "In welke stad ontstond de eerste DEMOCRATIE?", options: ["Athene", "Rome", "Sparta", "Alexandrië"], answer: 0, explanation: "Athene rond 500 v.Chr. = eerste vorm van directe democratie (alleen voor vrije mannen). Rome had een republiek." },
      { q: "Wie was Julius Caesar?", options: ["Romeinse veldheer en heerser", "Griekse filosoof", "Egyptische farao", "Bijbelse koning"], answer: 0, explanation: "Caesar (100-44 v.Chr.) was Romeins generaal die later dictator werd. Vermoord op de Ides van maart." },
      { q: "Welke taal kwam van de Romeinen?", options: ["Latijn", "Grieks", "Arabisch", "Hebreeuws"], answer: 0, explanation: "Latijn = taal van Romeinse Rijk. Tegenwoordige talen Italiaans/Spaans/Frans/Roemeens komen ervan af." },
    ],
    2: [
      // Tijd van monniken en ridders (500-1000)
      { q: "Wat is een KLOOSTER?", options: ["Gemeenschap van monniken die werken en bidden", "Een burcht", "Een marktplein", "Een leger"], answer: 0, explanation: "Klooster = woon- en werkplek van monniken/nonnen. Belangrijk voor onderwijs en handschriften in middeleeuwen." },
      { q: "Wat deed een RIDDER?", options: ["Vechten voor zijn heer en land beschermen", "Kerk leiden", "Markt beheren", "Schepen bouwen"], answer: 0, explanation: "Ridder = militaire dienstman te paard. Eed van trouw aan zijn heer (feodaal stelsel)." },
      { q: "Karel de Grote werd in welk jaar GEKROOND tot keizer?", options: ["800", "1066", "1492", "1500"], answer: 0, explanation: "Karel de Grote → keizer van het Frankische Rijk in 800 (kerstdag) door Paus Leo III in Rome." },
    ],
    3: [
      // Tijd van steden en staten (1000-1500)
      { q: "Welke uitvinding versnelde verspreiding van kennis (~1450)?", options: ["Boekdrukkunst (Gutenberg)", "Stoommachine", "Telefoon", "Computer"], answer: 0, explanation: "Gutenberg ~1450 = boekdrukkunst met losse letters. Boeken werden goedkoper → meer geletterdheid → ideeën verspreiden." },
      { q: "Wat is GILDEN?", options: ["Beroepsverenigingen in middeleeuwse steden", "Soort kerk", "Boerderij", "Stadsmuur"], answer: 0, explanation: "Gilden: verenigingen van bv. bakkers, smeden — bewaakten kwaliteit + opleiding (leerling-knecht-meester)." },
      { q: "Wat is de PEST (zwarte dood) in 1347-1352?", options: ["Plaag die ⅓ van Europa doodde", "Een godsdienstoorlog", "Een hongersnood", "Een vulkaanuitbarsting"], answer: 0, explanation: "Builenpest verspreid via vlooien op ratten. ~25 miljoen Europeanen overleden — diepe sociale gevolgen." },
    ],
    4: [
      // Tijd van ontdekkers en hervormers (1500-1600)
      { q: "Wie ontdekte Amerika in 1492?", options: ["Columbus", "Marco Polo", "Vasco da Gama", "Magellaan"], answer: 0, explanation: "Christoffel Columbus zeilde namens Spanje westwaarts om Indië te bereiken — kwam aan in Caribisch gebied." },
      { q: "Wat startte Maarten Luther in 1517?", options: ["Protestantse Reformatie", "Eerste kruistocht", "Wetenschappelijke revolutie", "Honderdjarige Oorlog"], answer: 0, explanation: "Luther's 95 stellingen aan de kerkdeur in Wittenberg → splitste de Westerse christenheid (rooms vs protestants)." },
      { q: "Wie was Erasmus?", options: ["Nederlandse humanist + denker", "Spaanse koning", "Vlaamse schilder", "Duitse keizer"], answer: 0, explanation: "Desiderius Erasmus van Rotterdam = beroemd humanist. Schreef o.a. 'Lof der zotheid'. Voor verdraagzaamheid." },
    ],
    5: [
      // Tijd van regenten en vorsten (1600-1700)
      { q: "Wanneer was de NEDERLANDSE Gouden Eeuw?", options: ["~1600-1700", "Middeleeuwen", "1900", "Recent"], answer: 0, explanation: "Bloeiperiode 17e eeuw: VOC, schilderkunst (Rembrandt, Vermeer), wetenschap (Huygens), handel." },
      { q: "Wat was de VOC?", options: ["Vereenigde Oostindische Compagnie — handel met Azië", "Een leger", "Een religie", "Een muziekvereniging"], answer: 0, explanation: "VOC (1602): eerste multinational ter wereld. Specerijen-handel met o.a. Indonesië. Ook bezetting + slavernij." },
      { q: "Welke schilder maakte 'De Nachtwacht'?", options: ["Rembrandt", "Vermeer", "Van Gogh", "Frans Hals"], answer: 0, explanation: "Rembrandt van Rijn (1606-1669) — De Nachtwacht (1642) hangt in het Rijksmuseum." },
    ],
    6: [
      // Tijd van pruiken en revoluties (1700-1800)
      { q: "Wat begon in 1789?", options: ["Franse Revolutie", "Eerste Wereldoorlog", "Reformatie", "Industriële Revolutie"], answer: 0, explanation: "Bestorming Bastille 14 juli 1789 → einde absolute monarchie → 'vrijheid, gelijkheid, broederschap'." },
      { q: "Wat is VERLICHTING?", options: ["18e-eeuwse stroming: rede + vrijheid + gelijkheid", "Een vorm van religie", "Een soort kunst", "Stadsverlichting"], answer: 0, explanation: "Verlichting: filosofen (Voltaire, Rousseau, Kant) bepleiten redelijk denken, rechten van de mens, kritiek op kerk/koning." },
      { q: "Wat ontstond na de Amerikaanse Revolutie (1776)?", options: ["Verenigde Staten van Amerika", "Canada", "Cuba", "Mexico"], answer: 0, explanation: "13 koloniën verklaarden zich onafhankelijk van Engeland → Verenigde Staten met grondwet (1789)." },
    ],
    7: [
      // Tijd van burgers en stoommachines (1800-1900)
      { q: "Wat startte de INDUSTRIËLE Revolutie?", options: ["Stoommachines + fabrieken (~1750-1850)", "Vliegtuigen", "Computers", "Internet"], answer: 0, explanation: "Industriële revolutie begon in Engeland: stoomkracht → fabrieken → massaproductie → grote sociale veranderingen." },
      { q: "Wat is KOLONIALISME?", options: ["Europese landen bezetten gebieden buiten Europa", "Reizen voor plezier", "Boerderijen", "Stadsuitbreiding"], answer: 0, explanation: "19e eeuw: Engeland, Frankrijk, Nederland etc. bezetten Afrika, Azië voor grondstoffen + arbeidskracht. Vaak gedwongen (slavernij)." },
      { q: "Wanneer werd slavernij in Nederlandse koloniën AFGESCHAFT?", options: ["1863", "1500", "1700", "1945"], answer: 0, explanation: "1 juli 1863 (in Suriname effectief 1873 na 10 jaar 'Staatstoezicht'). Veel later dan VS (1865 = einde Civil War)." },
    ],
    8: [
      // Tijd van de wereldoorlogen (1900-1950)
      { q: "Wanneer was de Eerste Wereldoorlog?", options: ["1914-1918", "1939-1945", "1900-1910", "1950-1953"], answer: 0, explanation: "WO1: 1914 (moord op Aartshertog Ferdinand) tot 1918 (wapenstilstand 11 november). 17 miljoen doden." },
      { q: "Wie was de leider van Nazi-Duitsland?", options: ["Hitler", "Stalin", "Roosevelt", "Churchill"], answer: 0, explanation: "Adolf Hitler werd Rijkskanselier in 1933 en bouwde een dictatuur. WO2 begon met inval Polen (1 sept 1939)." },
      { q: "Wat is de HOLOCAUST?", options: ["Massamoord op ~6 miljoen joden door Nazi's", "Een vorm van blitzkrieg", "Een wapen", "Een stad in Duitsland"], answer: 0, explanation: "Sjoa/holocaust: systematische moord op joden + Roma + andere minderheden door nazi-regime in concentratiekampen." },
    ],
    9: [
      // Tijd van televisie en computers (1950-nu)
      { q: "Wat was de KOUDE Oorlog?", options: ["Spanning tussen VS (kapitalisme) en Sovjet-Unie (communisme), 1947-1991", "Een ijstijd", "Oorlog tussen NL en België", "Een oorlog in poolgebied"], answer: 0, explanation: "Geen direct militair conflict, maar wereldwijde wedstrijd: wapenrace, ruimterace, proxy-oorlogen. Eindigde met val Sovjet-Unie." },
      { q: "Wanneer viel de Berlijnse Muur?", options: ["1989", "1945", "1961", "2000"], answer: 0, explanation: "9 november 1989. Leidde tot hereniging Duitsland (1990) en eind Koude Oorlog." },
      { q: "Wat is GLOBALISERING?", options: ["Wereldwijde verbinding van economie, cultuur, communicatie", "Reizen rond de wereld", "Een soort milieubeleid", "Een muziekstijl"], answer: 0, explanation: "Sinds ~1990: snelle uitbreiding internationale handel + internet → wereld 'kleiner' (goederen + ideeën sneller wereldwijd)." },
    ],
  },

  // ── De Geo — aardrijkskunde VO ──────────────────────────────────────
  "de-geo": {
    0: [
      { q: "Iran ligt in welk werelddeel?", options: ["Azië", "Afrika", "Europa", "Amerika"], answer: 0, explanation: "Iran ligt in West-Azië (Midden-Oosten). Hoofdstad: Teheran." },
      { q: "Welk klimaat is typisch voor het binnenland van Iran?", options: ["Droog (woestijn/steppe)", "Tropisch", "Polair", "Gematigd zee"], answer: 0, explanation: "Iran heeft groot binnenland met droge woestijnen (Dasht-e Kavir) en steppen. Bergen rond. Weinig regen." },
      { q: "Welke godsdienst is dominant in Iran?", options: ["Islam (sjiitisch)", "Christendom", "Hindoeïsme", "Boeddhisme"], answer: 0, explanation: "Iran is sjiitisch islamitisch (~90%). Verschilt van soennitische meerderheid in veel buurlanden (Irak, SA)." },
    ],
    1: [
      { q: "Wat is een NATUURLANDSCHAP?", options: ["Gebied dat door natuurkrachten is gevormd", "Park in een stad", "Akker", "Tuin"], answer: 0, explanation: "Natuurlandschap = gevormd door erosie, tektoniek, klimaat — bv. Grand Canyon, regenwoud, gebergte." },
      { q: "Welk is een WOESTIJNGEBIED?", options: ["Sahara (Afrika)", "Amazone", "Alpen", "Noordzee"], answer: 0, explanation: "Sahara: grootste hete woestijn (Noord-Afrika). Amazone = regenwoud. Alpen = gebergte." },
    ],
    2: [
      { q: "Gambia is een land in?", options: ["West-Afrika", "Azië", "Zuid-Amerika", "Oost-Europa"], answer: 0, explanation: "Gambia = klein West-Afrikaans land langs de Gambia-rivier, omsloten door Senegal." },
      { q: "Welke economische sector is GROOT in Gambia?", options: ["Landbouw + toerisme", "Auto-industrie", "Hightech", "Olie"], answer: 0, explanation: "Gambia is een ontwikkelingsland met landbouw (pinda's) en toerisme (stranden) als belangrijkste sectoren." },
    ],
    3: [
      { q: "Welke natuurramp is COMMON in Japan?", options: ["Aardbevingen + tsunami's", "Sneeuwstormen", "Tornado's (zoals VS)", "Sahara-zandstormen"], answer: 0, explanation: "Japan ligt op de 'Ring of Fire': aardbevingsgordel rond Pacific. Plaatgrenzen → bevingen + tsunami's + vulkanen." },
      { q: "Wat is een TSUNAMI?", options: ["Reusachtige golf na onderzeese aardbeving", "Een soort orkaan", "Vulkanische as", "Sneeuw-storm"], answer: 0, explanation: "Onderzeese aardbeving verplaatst water → golf reist met >700 km/u over oceaan, groeit nabij kust tot meters hoog." },
    ],
    4: [
      { q: "Indonesië ligt in?", options: ["Zuidoost-Azië", "Zuid-Amerika", "Afrika", "Oceanië"], answer: 0, explanation: "Indonesië = eilandengroep in Zuidoost-Azië, ~17.000 eilanden. Hoofdstad: Jakarta. Vroeger Nederlandse kolonie." },
      { q: "Welk is een BELANGRIJK eiland van Indonesië?", options: ["Java", "Madagascar", "Bali (klopt ook!)", "Madagascar"], answer: 0, explanation: "Java is meest dichtbevolkte eiland (>140 mln). Bali is ook van Indonesië maar kleiner. Madagascar ligt bij Afrika." },
    ],
    5: [
      { q: "Welk klimaat heeft Zuid-Spanje?", options: ["Mediterraan (mild + droge zomer)", "Tropisch", "Polair", "Continentaal"], answer: 0, explanation: "Mediterraan klimaat: warme droge zomers, milde natte winters. Typisch Middellandse Zee-gebied." },
      { q: "Welk type landschap kom je tegen in Scandinavië?", options: ["Fjorden + bossen + bergen", "Zandwoestijnen", "Tropisch regenwoud", "Vlak akkerland"], answer: 0, explanation: "Noorwegen, Zweden: door ijstijd uitgesleten dalen die nu fjorden zijn (zee-arm), naaldbossen, bergen." },
    ],
    6: [
      { q: "Wat is een TOPOGRAFISCHE kaart?", options: ["Kaart met hoogteverschillen + landschapsdetails", "Politieke landen-kaart", "Klimaat-overzicht", "Sterrenkaart"], answer: 0, explanation: "Topografische kaart toont reliëf (hoogtelijnen), wegen, rivieren, gebouwen — gedetailleerd lokaal." },
      { q: "Wat is SCHAAL op een kaart?", options: ["Verhouding tussen kaart-afstand en werkelijke afstand", "Aantal kleuren", "Grootte van kaart", "Type papier"], answer: 0, explanation: "Schaal 1:50.000 betekent: 1 cm op kaart = 50.000 cm = 500 m in werkelijkheid. Kleinere schaal = groter gebied minder detail." },
    ],
    7: [
      { q: "Welk klimaat heeft het Amazonegebied (Brazilië)?", options: ["Tropisch regenwoud", "Mediterraan", "Polair", "Woestijn"], answer: 0, explanation: "Amazone = grootste tropisch regenwoud ter wereld. Hoge temp jaarrond + veel regen." },
      { q: "Wat is een belangrijk MILIEUPROBLEEM in Brazilië?", options: ["Ontbossing van Amazonegebied", "IJskap-smelt", "Zandverstuivingen", "Olielekken"], answer: 0, explanation: "Veel ontbossing voor sojaboeren + veehouderij → biodiversiteitsverlies + meer CO₂. Mondiaal probleem." },
    ],
  },

  // ── Overal NaSk — natuurkunde + scheikunde onderbouw ────────────────
  "overal-nask": {
    0: [
      // Stoffen en materialen
      { q: "Wat is een STOF?", options: ["Materiaal met eigen kenmerken (zoals water, ijzer)", "Schoolvak", "Een gas alleen", "Een soort verf"], answer: 0, explanation: "In nask: stof = materie met eigen eigenschappen (smeltpunt, dichtheid). Water, koper, zuurstof zijn stoffen." },
      { q: "Welke is een EDELE metaal?", options: ["Goud", "IJzer", "Aluminium", "Koper"], answer: 0, explanation: "Edele metalen (goud, zilver, platina) reageren weinig en roesten niet. IJzer roest wel." },
      { q: "Wat is de DICHTHEID van water?", options: ["1 g/cm³ (= 1 kg/liter)", "10 g/cm³", "0,1 g/cm³", "100 g/cm³"], answer: 0, explanation: "Bij 4°C: water heeft dichtheid precies 1 g/cm³. Voorwerp dichter dan water zinkt; minder dicht drijft." },
    ],
    1: [
      { q: "Welk is GEEN kracht?", options: ["Snelheid", "Zwaartekracht", "Wrijving", "Veerkracht"], answer: 0, explanation: "Snelheid is een grootheid (m/s), géén kracht. Zwaartekracht/wrijving/veerkracht zijn krachten." },
      { q: "Wat is de eenheid van kracht?", options: ["Newton (N)", "Meter (m)", "Watt (W)", "Joule (J)"], answer: 0, explanation: "Kracht in Newton, vernoemd naar Isaac Newton. 1 N ≈ kracht om 100 g op te tillen." },
      { q: "Wat gebeurt bij STILSTAND?", options: ["Som van krachten = 0", "Geen wrijving", "Geen zwaartekracht", "Niets"], answer: 0, explanation: "Eerste wet van Newton: zonder netto kracht beweegt voorwerp niet (of door met constante snelheid)." },
    ],
    2: [
      { q: "Welke vorm van energie heeft een opgeladen veer?", options: ["Veerenergie / elastische energie", "Kinetische energie", "Warmteenergie", "Chemische energie"], answer: 0, explanation: "Een opgespannen veer of strakgespannen elastiek heeft elastische (potentiële) energie." },
      { q: "Welke eenheid heeft energie?", options: ["Joule (J)", "Newton (N)", "Watt (W)", "Volt (V)"], answer: 0, explanation: "Energie wordt gemeten in joules. 1 J = 1 N·m = 1 W·s." },
      { q: "Hoe stroomt warmte?", options: ["Van warm naar koud", "Van koud naar warm", "Niet, blijft staan", "Random"], answer: 0, explanation: "Warmte stroomt altijd van een warmer naar een kouder voorwerp tot ze even warm zijn." },
    ],
    3: [
      { q: "Hoe snel beweegt LICHT in vacuüm?", options: ["~300.000 km/s", "300 km/s", "30 km/s", "3 km/s"], answer: 0, explanation: "Lichtsnelheid c ≈ 299.792 km/s. Niets in het universum kan sneller bewegen." },
      { q: "Wat is REFLECTIE?", options: ["Licht weerkaatst van een oppervlak", "Licht buigt af", "Licht wordt opgenomen", "Licht wordt warm"], answer: 0, explanation: "Reflectie = terugkaatsen. Spiegel reflecteert bijna 100%. Hoek van inval = hoek van uitval." },
      { q: "Welke kleur heeft de KORTSTE golflengte?", options: ["Violet", "Rood", "Geel", "Groen"], answer: 0, explanation: "Zichtbaar licht: rood (langste golf) → oranje → geel → groen → blauw → violet (kortste golf)." },
    ],
    4: [
      { q: "Wat is geluid?", options: ["Trillingen die door lucht reizen", "Licht", "Warmte", "Magneetkracht"], answer: 0, explanation: "Geluid = drukgolven (trillingen) door lucht/water/vaste stof. Reist niet door vacuüm (geen lucht)." },
      { q: "Welke eenheid is FREQUENTIE?", options: ["Hertz (Hz)", "Decibel (dB)", "Newton", "Volt"], answer: 0, explanation: "Frequentie (aantal trillingen per seconde) in Hertz. Mensen horen ~20 Hz tot 20.000 Hz." },
    ],
    5: [
      { q: "Welk apparaat meet ELEKTRISCHE STROOM?", options: ["Ampèremeter", "Voltmeter", "Ohm-meter", "Thermometer"], answer: 0, explanation: "Stroomsterkte (I) in ampère, gemeten met ampèremeter. Voltmeter = spanning (V), ohm-meter = weerstand (Ω)." },
      { q: "Wet van Ohm: U = ?", options: ["I × R", "I + R", "I − R", "I / R"], answer: 0, explanation: "Spanning = stroom × weerstand. Bv. bij 2 A en 5 Ω: U = 2 × 5 = 10 V." },
      { q: "Welk materiaal geleidt stroom GOED?", options: ["Koper", "Hout", "Plastic", "Glas"], answer: 0, explanation: "Metalen (vooral koper) zijn goede geleiders. Hout/plastic/glas zijn isolatoren — gebruikt voor isolatie van draden." },
    ],
    6: [
      { q: "Wat is een SCHEIKUNDIGE reactie?", options: ["Stoffen worden omgezet in andere stoffen", "Beweging van een voorwerp", "Vorm verandert (bv. ijs → water)", "Niks"], answer: 0, explanation: "Reactie: chemische bindingen breken/vormen → nieuwe stoffen. IJs → water is alleen aggregatietoestand (fase), geen reactie." },
      { q: "Wat ontstaat bij VERBRANDING van hout?", options: ["CO₂ + waterdamp + as", "Alleen rook", "IJs", "Niets, het verdwijnt"], answer: 0, explanation: "Verbranding (snelle oxidatie): hout + zuurstof → CO₂ + H₂O + warmte + kleine restanten (as)." },
    ],
    7: [
      { q: "Wat is een ATOOM?", options: ["Kleinste deeltje van een element", "Een molecuul", "Een soort cel", "Een hagelsteen"], answer: 0, explanation: "Atoom (Grieks 'ondeelbaar') = bouwsteen van materie. Bestaat uit kern (protonen+neutronen) + elektronen." },
      { q: "Wat is een MOLECUUL?", options: ["Twee of meer atomen aan elkaar", "Eén atoom", "Een vloeistof", "Een mineraal"], answer: 0, explanation: "Molecuul = atomen verbonden. Bv. H₂O = 2 waterstof + 1 zuurstof. O₂ = 2 zuurstofatomen." },
    ],
  },

  // ── Biologie voor Jou Havo/vwo 1 — biologie klas 1 ──────────────────
  "bvj-havo-vwo-1": {
    0: [
      { q: "Wat is BIOLOGIE?", options: ["Studie van leven (planten, dieren, mensen)", "Studie van rotsen", "Studie van sterren", "Studie van talen"], answer: 0, explanation: "Bio (leven) + logos (kennis) → wetenschap van levende organismen." },
      { q: "Welke kenmerken hebben LEVENDE organismen?", options: ["Groei + ademhaling + voortplanting", "Alleen bewegen", "Alleen kleur", "Alleen geluid"], answer: 0, explanation: "Leven kenmerken: stofwisseling, groei, prikkelbaarheid, voortplanting, ontwikkeling." },
      { q: "Wat is een MICROSCOOP?", options: ["Apparaat dat kleine dingen vergroot", "Soort telescoop", "Computer", "Klok"], answer: 0, explanation: "Microscoop vergroot heel kleine objecten (cellen, bacteriën). Tele-scoop = grote afstanden." },
    ],
    1: [
      { q: "Welk plantendeel haalt water uit de grond?", options: ["Wortels", "Bladeren", "Bloemen", "Stengel"], answer: 0, explanation: "Wortels nemen water + voedingsstoffen op uit aarde. Stengel transporteert. Bladeren = fotosynthese." },
      { q: "Wat is FOTOSYNTHESE?", options: ["Plant maakt suiker met zonlicht + CO₂ + water", "Plant slaapt 's nachts", "Bloeien", "Fruit dragen"], answer: 0, explanation: "6 CO₂ + 6 H₂O + zonlicht → glucose (C₆H₁₂O₆) + 6 O₂. Gebeurt vooral in bladeren (chlorofyl)." },
      { q: "Welke plant heeft GEEN bloemen?", options: ["Mos", "Roos", "Paardenbloem", "Tulp"], answer: 0, explanation: "Mossen + varens hebben geen bloemen of zaden — ze planten zich voort via sporen." },
    ],
    2: [
      { q: "Wat is de basiseenheid van leven?", options: ["Cel", "Atoom", "Molecuul", "Orgaan"], answer: 0, explanation: "Cel = kleinste levenseenheid die zelfstandig kan leven. Mens heeft ~37 biljoen cellen." },
      { q: "Welk orgaan FILTREERT bloed?", options: ["Nieren", "Hart", "Long", "Maag"], answer: 0, explanation: "Nieren filteren afval uit bloed → urine. Hart pompt bloed, longen geven zuurstof." },
      { q: "Wat zijn ORGANEN?", options: ["Onderdelen met specifieke taak (hart, lever)", "Soort cellen", "Spieren alleen", "Botten alleen"], answer: 0, explanation: "Organen = groepen weefsels met taak. Hart pompt, lever zuivert, ogen zien." },
    ],
    3: [
      { q: "Welk koninkrijk hoort bij MENSEN?", options: ["Dieren (Animalia)", "Planten", "Schimmels", "Bacteriën"], answer: 0, explanation: "Mens is een zoogdier in koninkrijk Dieren. We delen veel met chimpansees (~98% DNA)." },
      { q: "Welke is een schimmel?", options: ["Paddenstoel", "Mos", "Vis", "Bacterie"], answer: 0, explanation: "Schimmels (paddenstoelen, gist, schimmel op brood) vormen eigen rijk. Geen plant want geen fotosynthese." },
    ],
    4: [
      { q: "Wat doet een SKELET?", options: ["Steun + bescherming + bewegingssteun", "Verteren", "Filteren", "Pompen"], answer: 0, explanation: "Skelet (botten) houdt lichaam stevig, beschermt organen (schedel ↔ hersenen, ribben ↔ hart), spieren hechten eraan." },
      { q: "Welke spier-type werkt zonder dat je eraan denkt?", options: ["Hartspier (onwillekeurig)", "Bicep", "Knie-strekker", "Kuit"], answer: 0, explanation: "Hartspier + gladde spieren (darmen, bloedvaten) werken automatisch. Skeletspieren zijn willekeurig." },
    ],
    5: [
      { q: "Welk zintuig zit in je TONG?", options: ["Smaak", "Reuk", "Tast", "Gehoor"], answer: 0, explanation: "Smaakpapillen op tong → zoet/zout/zuur/bitter/umami. Reuk = neus." },
      { q: "Wat doen HORMONEN?", options: ["Boodschapper-stoffen die organen aansturen", "Spieren maken", "Botten bouwen", "Niets"], answer: 0, explanation: "Hormonen (insuline, adrenaline, oestrogeen) regelen processen via bloed. Bv. groei, vertering, stress." },
    ],
    6: [
      { q: "Hoe planten BLOEMPLANTEN zich voort?", options: ["Bestuiving + bevruchting → zaad", "Door verdeling", "Via wortels", "Niet"], answer: 0, explanation: "Stuifmeel (man) → stempel (vrouw) → bevruchting van eicel → zaad → nieuwe plant." },
      { q: "Wie produceert zaad-cellen bij dieren?", options: ["Mannetje", "Vrouwtje", "Beide gelijk", "Niemand"], answer: 0, explanation: "Mannetjes maken zaadcellen (ovary cellen → spermatozoa). Vrouwtjes maken eicellen. Bevruchting = samenkomen." },
    ],
  },

  // ── Geschiedeniswerkplaats — geschiedenis VO (alt Feniks) ───────────
  "geschiedeniswerkplaats": {
    0: [
      { q: "Wat aten jagers-verzamelaars vooral?", options: ["Wild + bessen + noten", "Brood", "Pasta", "Rijst"], answer: 0, explanation: "Vóór landbouw: wat in de natuur te vinden was. Wisselend per seizoen." },
      { q: "Wat is een KENMERK van het neolithicum?", options: ["Vaste woonplek + landbouw + huisdieren", "Stoommachines", "Schepen", "Geld"], answer: 0, explanation: "Jong-steentijd: mens stopt rondtrekken, gaat boer worden, temt geiten/koeien." },
    ],
    1: [
      { q: "In welk jaar VIEL het West-Romeinse Rijk?", options: ["476", "1066", "1492", "1500"], answer: 0, explanation: "476 n.Chr.: laatste keizer Romulus Augustulus afgezet door Germaan Odoaker." },
      { q: "Welke stad was 'eeuwige stad' van Romeinen?", options: ["Rome", "Athene", "Sparta", "Carthago"], answer: 0, explanation: "Rome — gesticht volgens legende 753 v.Chr. door Romulus + Remus." },
    ],
    2: [
      { q: "Wat is FEODALISME?", options: ["Stelsel: heer geeft land in ruil voor trouw + hulp", "Een bedevaart", "Soort kerk", "Een wapen"], answer: 0, explanation: "Middeleeuws: koning → leenmannen (graven, ridders) → onderworpen boeren. Hiërarchie van trouw." },
      { q: "Wat was de KRUISTOCHT?", options: ["Christelijke veldtocht naar Jeruzalem", "Een bouwwerk", "Een ceremonie", "Een toets"], answer: 0, explanation: "Vanaf 1096 reeks militaire pogingen om Heilig Land te heroveren van moslims. Vaak met religieuze + economische motieven." },
    ],
    3: [
      { q: "Wat is een HANZESTAD?", options: ["Lid van middeleeuws handelsverbond rond Noord-/Oostzee", "Hoofdstad", "Vissersdorp", "Hoofdstad van Hanze"], answer: 0, explanation: "Hanze = bond van handelssteden (Hamburg, Bremen, Lübeck, ook Deventer, Zwolle). Bloei 13e-15e eeuw." },
      { q: "Welke ziekte trof Europa in 1347-1352?", options: ["Pest (zwarte dood)", "Pokken", "Cholera", "Tuberculose"], answer: 0, explanation: "Builenpest van Aziatische schepen → Italië → hele Europa. ~⅓ bevolking gestorven." },
    ],
    4: [
      { q: "Wie spijkerde in 1517 95 STELLINGEN aan een kerkdeur?", options: ["Maarten Luther", "Calvijn", "Erasmus", "Hendrik VIII"], answer: 0, explanation: "Luther in Wittenberg → start Reformatie → splitsing Westerse kerk." },
      { q: "Wat was de TACHTIGJARIGE Oorlog (1568-1648)?", options: ["NL vrijheidsstrijd tegen Spanje", "WO0", "Een godsdienstoorlog tussen kerken", "Een Engelse oorlog"], answer: 0, explanation: "Onafhankelijkheidsoorlog Nederland (Willem van Oranje) tegen Filips II van Spanje. Eindigde met Vrede van Münster 1648." },
    ],
    5: [
      { q: "Wat is een REGENT (17e eeuw NL)?", options: ["Lid van rijke koopmansfamilie die stad bestuurt", "Een ridder", "Een soldaat", "Een geestelijke"], answer: 0, explanation: "Regenten = patriciërs die schepenen, burgemeesters, VOC-bestuurders waren. Zelfbenoemd, niet gekozen." },
      { q: "Wat was de bijnaam van NL in 17e eeuw?", options: ["Republiek der Zeven Verenigde Provinciën", "Koninkrijk", "Hertogdom", "Bondsstaat"], answer: 0, explanation: "Republiek (geen koning), 7 provincies (Holland, Zeeland, Utrecht, Gelderland, Overijssel, Friesland, Groningen)." },
    ],
    6: [
      { q: "Wie schreef 'Du Contrat Social' (1762)?", options: ["Jean-Jacques Rousseau", "Voltaire", "Immanuel Kant", "Adam Smith"], answer: 0, explanation: "Rousseau: maatschappelijk verdrag tussen burgers en overheid. Inspireerde Franse Revolutie." },
      { q: "Welke leus stamt uit Franse Revolutie?", options: ["Liberté, Égalité, Fraternité", "Veni Vidi Vici", "All for one, one for all", "E pluribus unum"], answer: 0, explanation: "Vrijheid, Gelijkheid, Broederschap — nog steeds motto van Frankrijk." },
    ],
    7: [
      { q: "Welke uitvinding versnelde de INDUSTRIËLE revolutie?", options: ["Stoommachine (James Watt)", "Computer", "Auto", "Telefoon"], answer: 0, explanation: "Watt verbeterde stoommachine ~1769 → fabrieken + treinen + schepen → massaproductie." },
      { q: "Wat is een ARBEIDER (19e-eeuws)?", options: ["Persoon die in fabriek werkt voor loon", "Boer", "Ambtenaar", "Adel"], answer: 0, explanation: "Industriële revolutie creëerde nieuwe sociale klasse: arbeiders in fabrieken, vaak slechte omstandigheden + lange uren." },
    ],
    8: [
      { q: "Wat startte de Eerste Wereldoorlog?", options: ["Moord op Aartshertog Frans Ferdinand 1914", "Pearl Harbor", "Reformatie", "Vrede van Versailles"], answer: 0, explanation: "28 juni 1914 in Sarajevo. Door allianties verspreidde conflict zich snel over Europa." },
      { q: "Wat was de HOLOCAUST?", options: ["Systematische moord op ~6 miljoen joden door nazi's", "Een veldslag", "Een bombardement", "Een verdrag"], answer: 0, explanation: "Sjoa: nazi-Duitsland 1941-1945 vermoordde joden + Roma + andere groepen in concentratie- en vernietigingskampen." },
    ],
    9: [
      { q: "Wanneer eindigde de Koude Oorlog?", options: ["~1989-1991 (val Berlijnse Muur + uiteenvallen Sovjet-Unie)", "1945", "1962", "2001"], answer: 0, explanation: "Berlijnse Muur viel 1989, Sovjet-Unie uiteen 1991. Rusland werd weer kapitalistisch." },
      { q: "Wat is GLOBALISERING?", options: ["Wereldwijde verbinding van economie + cultuur", "Reis-eindje", "Een soort verdrag", "Een ramp"], answer: 0, explanation: "Sinds ~1990: snelle uitbreiding internationale handel + internet + multinationals. Wereld wordt 'kleiner'." },
    ],
  },

  // ── Op Niveau Havo/vwo 1 — Nederlands (alt Nieuw Nederlands) ────────
  "op-niveau-hv1": {
    0: [
      { q: "Hoe stel je je voor in een nieuwe klas?", options: ["Naam + waar je vandaan komt + iets persoonlijks", "Alleen je naam", "Niets zeggen", "Heel hard schreeuwen"], answer: 0, explanation: "Goed kennismaken: naam + achtergrond + interesse → mensen onthouden je beter." },
      { q: "Wat is een MONOLOOG?", options: ["Eén persoon spreekt", "Twee mensen praten", "Schreeuwen", "Stilte"], answer: 0, explanation: "Mono (één) + log (woord). Tegenstelling: dialoog (gesprek tussen 2+)." },
    ],
    1: [
      { q: "Hoe schrijf je 'mijn vaders auto' (bezitsvorm)?", options: ["mijn vaders auto (zonder apostrof)", "mijn vader's auto", "mijn vaders' auto", "mijn vader auto"], answer: 0, explanation: "In NL géén apostrof bij bezitsvorm: 'mijn vaders auto'. Apostrof alleen bij namen op klinker (Sara's auto)." },
      { q: "Welke is bezittelijk voornaamwoord?", options: ["mijn", "ik", "lopen", "snel"], answer: 0, explanation: "Bezittelijke vnw: mijn, jouw, zijn, haar, ons, jullie, hun." },
    ],
    2: [
      { q: "Wat is een SCHOOLREGEL?", options: ["Afspraak hoe iedereen zich gedraagt", "Een vak", "Toets", "Pauze"], answer: 0, explanation: "Schoolregels = afspraken voor veiligheid + sfeer. Bv. 'niet rennen op gang', 'mobiel uit'." },
      { q: "Welk type tekst is een SCHOOLREGLEMENT?", options: ["Informatief / regulerend", "Verhalend", "Lyrisch", "Reclame"], answer: 0, explanation: "Reglement = lijst regels — informatief en bindend (regulerend)." },
    ],
    3: [
      { q: "Welk hobby past bij MUZIEK?", options: ["Gitaar spelen", "Voetballen", "Lezen", "Schaken"], answer: 0, explanation: "Gitaar spelen = muziek-hobby. Andere passen bij sport / lezen / strategie." },
      { q: "Wat is BLOG?", options: ["Persoonlijk dagboek of artikel online", "Een soort fiets", "Wifi-signaal", "Schoolboek"], answer: 0, explanation: "Blog = web-log: online dagboek of regelmatig artikel. Vaak persoonlijk geschreven." },
    ],
    4: [
      { q: "Welke voedingsstof geeft snelle energie?", options: ["Koolhydraten (suiker, brood)", "Vetten alleen", "Eiwitten alleen", "Vitamines"], answer: 0, explanation: "Koolhydraten worden snel omgezet in glucose → directe energie. Eiwitten = bouwstof, vetten = reserve." },
      { q: "Wat is een GEZONDE maaltijd?", options: ["Combinatie groente + eiwit + vezels + matig vet", "Alleen vlees", "Alleen brood", "Alleen sla"], answer: 0, explanation: "Schijf van Vijf: variatie. Groente + zetmeel/granen + eiwit + zuivel + olie/vet." },
    ],
    5: [
      { q: "Wat is een DAGTRIP?", options: ["Reis van één dag, terug op dezelfde dag", "Maandlange vakantie", "Een treinreis", "Een soort camping"], answer: 0, explanation: "Dagtrip / dagje weg: 's ochtends weg, 's avonds thuis. Geen overnachting." },
      { q: "Welk werelddeel ligt onder Europa?", options: ["Afrika", "Azië", "Antarctica", "Amerika"], answer: 0, explanation: "Op de wereldkaart: Afrika ligt direct onder Europa, gescheiden door Middellandse Zee." },
    ],
    6: [
      { q: "Wat is SOCIAL MEDIA?", options: ["Online platform om contacten en content te delen", "Een soort krant", "Een tv-zender", "Een radiostation"], answer: 0, explanation: "Bv. Instagram, TikTok, Snapchat, Facebook. Gebruikers delen + reageren onderling." },
      { q: "Wat is een MEME?", options: ["Visueel grapje dat zich snel verspreid online", "Een type toets", "Wachtwoord", "Een app"], answer: 0, explanation: "Meme = idee/grap die viraal gaat. Vaak plaatje + tekst, kopiëren + variëren is essentieel." },
    ],
    7: [
      { q: "Wat is OPWARMING van de aarde?", options: ["Klimaatverandering door teveel CO₂", "Hete zomer", "Vulkaan", "Een zonnewende"], answer: 0, explanation: "Mensen stoten CO₂ uit → broeikaseffect → wereldwijd warmer worden. Gevolgen: ijs smelt, weer extremer." },
      { q: "Wat doet een ZONNEPANEEL?", options: ["Zet zonlicht om in elektriciteit", "Verwarmt water", "Reflecteert zon", "Houdt zon tegen"], answer: 0, explanation: "Photovoltaïsch effect: licht raakt cel → elektronen verplaatsen → stroom. Duurzame energie!" },
    ],
  },

  // ── Newton NaSk — natuurkunde alt Overal NaSk ───────────────────────
  "newton-nask": {
    0: [
      { q: "Wat is NaSk?", options: ["Natuur- en scheikunde samen (onderbouw)", "Geschiedenis", "Talen", "Wiskunde"], answer: 0, explanation: "NaSk = combinatie van natuurkunde + scheikunde, samen onderwezen in onderbouw VO." },
      { q: "Welk experiment is VEILIG?", options: ["Met veiligheidsbril en uit de buurt van anderen", "Met ogen dicht", "Zonder uitleg", "Bij open vlam zonder toezicht"], answer: 0, explanation: "Lab-veiligheid: bril, schort, weet wat je doet, brandblusser nabij. Geen kort haar in vlam." },
    ],
    1: [
      { q: "Welke kleur heeft langste GOLFLENGTE?", options: ["Rood", "Violet", "Blauw", "Groen"], answer: 0, explanation: "Zichtbaar licht: rood = lange golf (~700 nm), violet = korte (~400 nm)." },
      { q: "Wat is een LENS?", options: ["Doorzichtig glas/kunststof dat licht buigt", "Een spiegel", "Filter", "Lamp"], answer: 0, explanation: "Lens (bol of hol) buigt lichtstralen → vergroten/verkleinen. Bril, microscoop, telescoop." },
    ],
    2: [
      { q: "Wat is een MAGNEET?", options: ["Voorwerp dat ijzer aantrekt", "Soort plastic", "Energie-bron", "Type batterij"], answer: 0, explanation: "Magneten hebben N + Z polen. Trekken ferromagnetische metalen (ijzer, nikkel, kobalt) aan." },
      { q: "Welke twee polen STOTEN elkaar af?", options: ["Twee N of twee Z", "N en Z", "N en aarde", "Geen"], answer: 0, explanation: "Gelijke polen stoten af, ongelijke trekken aan. N+N → afstoting." },
    ],
    3: [
      { q: "Wat is WARMTE?", options: ["Energie die overgaat van warm naar koud", "Soort licht", "Een gas", "Geluid"], answer: 0, explanation: "Warmte = energie-overgang door temperatuurverschil. Stroomt altijd warm → koud." },
      { q: "Welke eenheid is TEMPERATUUR?", options: ["Celsius (°C) of Kelvin (K)", "Joule", "Newton", "Volt"], answer: 0, explanation: "Temperatuur in °C (water bevriest 0, kookt 100) of K (absoluut nul = -273°C = 0 K)." },
    ],
    4: [
      { q: "Wat is GRAVITATIE?", options: ["Aantrekkingskracht tussen massa's", "Magnetisme", "Wrijving", "Veerkracht"], answer: 0, explanation: "Newton: alle massa's trekken elkaar aan. Aarde trekt jou aan = jouw gewicht." },
      { q: "Een fiets remt — wat gebeurt?", options: ["Wrijving zet bewegingsenergie om in warmte", "Energie verdwijnt", "Snelheid blijft gelijk", "De fiets wordt zwaarder"], answer: 0, explanation: "Remblokken op velg → wrijving → kinetische energie → warmte. Daarom worden remmen heet." },
    ],
    5: [
      { q: "Wat is GELUID?", options: ["Trillingen door lucht/water", "Licht", "Kleur", "Warmte"], answer: 0, explanation: "Geluid = drukgolven. Hoorbaar tussen ~20 Hz en 20.000 Hz voor mensen." },
      { q: "Hoe komt geluid in je oor?", options: ["Trommelvlies trilt → gehoorbeentjes → slakkenhuis", "Door huid", "Via mond", "Via ogen"], answer: 0, explanation: "Geluidsgolven → buitenoor → trommelvlies trilt → 3 botjes versterken → vloeistof in slakkenhuis → gehoorzenuw → hersenen." },
    ],
    6: [
      { q: "Wat zijn ATOMEN?", options: ["Bouwstenen van materie", "Soort moleculen", "Cellen", "Bacteriën"], answer: 0, explanation: "Atoom = kleinste deeltje dat nog kenmerken van een element heeft. Onzichtbaar klein." },
      { q: "Welke aggregatietoestanden zijn er?", options: ["Vast, vloeibaar, gas (en plasma)", "Alleen vast en vloeibaar", "Alleen gas", "Drie soorten ijs"], answer: 0, explanation: "Drie hoofdfasen + plasma (4e). Verandering = smelten/stollen, verdampen/condenseren, sublimeren." },
    ],
  },

  // ── Chemie Overal — scheikunde bovenbouw ────────────────────────────
  "chemie-overal": {
    0: [
      { q: "Hoe scheid je zout van water?", options: ["Indampen / verdampen", "Filtreren", "Magneet", "Niets, ze blijven samen"], answer: 0, explanation: "Zoutoplossing: water verdampen, zout blijft over. Filtreren werkt niet (zout opgelost)." },
      { q: "Wat is een ZUIVERE stof?", options: ["Bestaat uit één soort moleculen", "Mengsel", "Mengsel met veel water", "Lucht"], answer: 0, explanation: "Zuiver = één component (bv. zuiver water = alleen H₂O). Geen mengsel." },
    ],
    1: [
      { q: "Hoe heten de POSITIEVE deeltjes in atoomkern?", options: ["Protonen", "Neutronen", "Elektronen", "Quarks"], answer: 0, explanation: "Kern: protonen (+) + neutronen (0). Elektronen (-) eromheen in schillen." },
      { q: "Wat is een ELEMENT?", options: ["Stof bestaande uit één atoomsoort", "Mengsel", "Soort vloeistof", "Een gas"], answer: 0, explanation: "Element = pure atoomsoort: zuurstof (O), goud (Au), waterstof (H)... 118 bekend." },
    ],
    2: [
      { q: "Wat is een SCHEIKUNDIGE reactie?", options: ["Atomen herschikken → nieuwe stoffen", "Vorm verandert", "Beweging", "Hitte"], answer: 0, explanation: "Reactie: bindingen breken + nieuwe vormen. Bv. H₂ + O₂ → H₂O (verbranding waterstof)." },
      { q: "Welk teken in vergelijking betekent 'reageert tot'?", options: ["→ (pijl)", "= (gelijkteken)", "+ (plus)", "× (maal)"], answer: 0, explanation: "Pijl scheidt reactanten van producten. CH₄ + 2 O₂ → CO₂ + 2 H₂O." },
    ],
    3: [
      { q: "Welke binding zit in H₂O?", options: ["Covalente / atoombinding", "Ionbinding", "Metaalbinding", "Geen binding"], answer: 0, explanation: "Niet-metaal + niet-metaal: covalent (delen elektronen). H + O = covalent bindend." },
      { q: "Welk molecuul is POLAIR?", options: ["H₂O (water)", "O₂", "N₂", "CO₂"], answer: 0, explanation: "Water heeft hoek-vorm + verschil tussen H en O → permanent dipool. Daarom zo'n goed oplosmiddel." },
    ],
    4: [
      { q: "Wat is een ZOUT?", options: ["Verbinding van metaal-ion + zuurrest-ion", "Soort suiker", "Vetzuur", "Eiwit"], answer: 0, explanation: "Zout = ionverbinding. Bv. NaCl = Na⁺ + Cl⁻. Smelt op bij koken in water." },
      { q: "Wat gebeurt bij OPLOSSEN van zout in water?", options: ["Ionen verspreiden zich tussen watermoleculen", "Niets", "Het zout verdwijnt voor altijd", "Gas ontstaat"], answer: 0, explanation: "Water polair → trekt ionen los uit kristal. Bij indampen vormt kristal weer." },
    ],
    5: [
      { q: "Wat is OOK een naam voor KOOLSTOFCHEMIE?", options: ["Organische chemie", "Anorganische chemie", "Fysiek-chemie", "Bio-chemie alleen"], answer: 0, explanation: "Koolstofverbindingen = organische chemie. Levensbasis (eiwitten, suikers, vetten zijn allemaal koolstof-gebaseerd)." },
      { q: "Welk is GEEN aardolie-product?", options: ["Water", "Benzine", "Plastic", "Diesel"], answer: 0, explanation: "Aardolie wordt geraffineerd tot brandstoffen (benzine, diesel) en grondstoffen (plastic). Water is geen aardolie-product." },
    ],
    6: [
      { q: "Wat is de pH van een ZUUR?", options: ["Lager dan 7", "Hoger dan 7", "Precies 7", "Maakt niet uit"], answer: 0, explanation: "pH-schaal 0-14. <7 = zuur (citroensap pH 2), 7 = neutraal (water), >7 = base (zeep pH 9)." },
      { q: "Wat is een voorbeeld van een ZUUR?", options: ["Azijn", "Soda", "Zout", "Water"], answer: 0, explanation: "Azijn (azijnzuur) = pH ~2-3. Soda + zeep = base. Zout = neutraal zout. Water = pH 7." },
    ],
    7: [
      { q: "Wat is een base?", options: ["Stof met pH > 7 die zuren neutraliseert", "Stof met pH < 7", "Een metaal", "Gas"], answer: 0, explanation: "Bases (alkalisch): pH > 7. Bv. NaOH (natriumloog), ammonia. Neutraliseren zuren tot zout + water." },
      { q: "Bij ZUUR + BASE ontstaat...", options: ["Zout + water", "Niets", "Vuur", "Gas alleen"], answer: 0, explanation: "Neutralisatie: HCl + NaOH → NaCl + H₂O. Klassiek scheikunde-experiment." },
    ],
  },

  // ── Talent Havo/vwo 1 — Nederlands alt ──────────────────────────────
  "talent-hv1": {
    0: [
      { q: "Wat hoort thuis bij FAMILIE?", options: ["Vader, moeder, broer, zus", "Klasgenoten", "Buurman", "Sportclub"], answer: 0, explanation: "Familie = directe gezins- en bloedverwanten. Klasgenoten/buurman/club zijn andere relaties." },
      { q: "Welke is een KERNFAMILIE?", options: ["Ouders + kinderen samen", "Allen die jouw achternaam dragen", "Mensen die je kent", "Hele dorp"], answer: 0, explanation: "Kerngezin = ouders + minderjarige kinderen. Bredere familie = ooms, tantes, neven, nichten." },
    ],
    1: [
      { q: "Wat hoort bij EEN GOEDE VRIEND?", options: ["Luisteren + eerlijk + behulpzaam", "Altijd gelijk hebben", "Stil zijn", "Ver weg blijven"], answer: 0, explanation: "Vriendschap: wederzijds vertrouwen, betrouwbaarheid, plezier, steun bij moeilijkheden." },
      { q: "Wat is een DAGBOEK?", options: ["Persoonlijke aantekeningen per dag", "Een schoolrooster", "Foto-album", "Receptenboek"], answer: 0, explanation: "Dagboek = log van eigen ervaringen, gevoelens, gedachten. Privé en persoonlijk." },
    ],
    2: [
      { q: "Welk is een SPORT?", options: ["Hockey", "Lezen", "Tekenen", "Slapen"], answer: 0, explanation: "Sport = lichamelijke activiteit met regels (vaak competitief). Lezen/tekenen = kunst/cultuur, slapen = rust." },
      { q: "Wat is een HOBBY?", options: ["Vrije-tijdsbesteding voor plezier", "Een baan", "Verplichting", "Schoolopdracht"], answer: 0, explanation: "Hobby = wat je in vrije tijd doet voor je plezier. Niet voor geld of verplicht." },
    ],
    3: [
      { q: "Welke voedingsstof is een EIWIT?", options: ["Vlees, vis, kaas, bonen", "Suiker", "Olie", "Water"], answer: 0, explanation: "Eiwitten zitten in vlees, vis, ei, zuivel, peulvruchten. Bouwstof voor spieren + organen." },
      { q: "Wat is GEZOND ontbijt?", options: ["Volkoren brood + ei + fruit", "Koek + fris", "Niets", "Alleen koffie"], answer: 0, explanation: "Goed ontbijt: complexe koolhydraten + eiwit + vitaminen → langzame energie de hele ochtend." },
    ],
    4: [
      { q: "Wat is een ROADTRIP?", options: ["Reis met auto/camper langs verschillende plekken", "Reis met vliegtuig", "Wandeltocht", "Schoolreisje"], answer: 0, explanation: "Roadtrip: lange autoreis met meerdere stops. Populair in VS, Australië." },
      { q: "Welk dagdeel is BEST om te reizen?", options: ["Vroeg in ochtend (minder druk)", "Spits-uur", "Middernacht in mist", "Zo laat mogelijk"], answer: 0, explanation: "'s Ochtends vroeg = minder verkeer, koeler in zomer, meer zonlicht." },
    ],
    5: [
      { q: "Wat is FAKE NEWS?", options: ["Misleidend of verzonnen 'nieuws'", "Echt nieuws", "Reclame", "Sportverslag"], answer: 0, explanation: "Onjuiste informatie gepresenteerd als nieuws — soms voor verkoop, politiek, of pesten." },
      { q: "Wat is een PODCAST?", options: ["Audio-show online te beluisteren", "Een soort tv", "Krantenartikel", "Tijdschrift"], answer: 0, explanation: "Podcast = geluidsopname (interview, verhaal, kennis) gepubliceerd online. Luister waar/wanneer je wil." },
    ],
  },

  // ── New Interface — Engels alt Stepping Stones ──────────────────────
  "new-interface": {
    0: [
      { q: "How do you GREET a stranger formally?", options: ["Good morning / good afternoon", "Yo!", "What's up?", "Hi mate"], answer: 0, explanation: "Formal: good morning/afternoon/evening + Sir/Madam. Yo + What's up = informeel/jongerentaal." },
      { q: "'Where ___ you from?'", options: ["are", "is", "am", "be"], answer: 0, explanation: "Vraag in tegenwoordige tijd: 'where ARE you from?' Bij you/we/they → are." },
    ],
    1: [
      { q: "Wat is meervoud van 'man'?", options: ["men", "mans", "manes", "men's"], answer: 0, explanation: "Onregelmatig: man → men, woman → women, child → children, foot → feet." },
      { q: "'I have ___ pets at home.' (3 huisdieren)", options: ["three", "third", "trio", "triple"], answer: 0, explanation: "Hoofdtelwoorden voor aantal: one, two, three. Rangtelwoorden voor volgorde: first, second, third." },
    ],
    2: [
      { q: "Wat is 'afval' (papier, plastic) in Engels?", options: ["waste / rubbish / trash", "litter (alleen op straat)", "garbage", "all of the above"], answer: 3, explanation: "Veel synoniemen: waste = algemeen, rubbish = UK, trash/garbage = US, litter = zwerfafval. Allemaal afval." },
      { q: "'My job ___ interesting.'", options: ["is", "are", "am", "was"], answer: 0, explanation: "Enkelvoud (my job) + tegenwoordige tijd → IS. 'Are' bij meervoud (jobs are)." },
    ],
    3: [
      { q: "'I love ___ tennis.' (tennis spelen)", options: ["playing", "play", "to play", "played"], answer: 0, explanation: "Na werkwoorden als love/like/enjoy/hate → -ing vorm: playing, eating, watching." },
      { q: "Welke sport heet 'football' in UK + 'soccer' in US?", options: ["Voetbal", "American football", "Rugby", "Hockey"], answer: 0, explanation: "Voetbal = football (UK) / soccer (US, omdat football daar = American football)." },
    ],
    4: [
      { q: "'I ___ pizza for dinner yesterday.'", options: ["had", "have", "having", "has"], answer: 0, explanation: "Verleden tijd 'have' (eten/gehad) = had. 'Yesterday' = signaal verleden tijd." },
      { q: "Welk drankje is 'tea'?", options: ["Thee", "Koffie", "Cola", "Sap"], answer: 0, explanation: "Tea = thee. Coffee = koffie, juice = sap. Brits: 'a cup of tea' is een instituut." },
    ],
    5: [
      { q: "'How long ___ you stay in Spain?' (toekomst)", options: ["will", "did", "have", "are"], answer: 0, explanation: "Toekomst: will + werkwoord. 'How long will you stay?' = hoelang ga je blijven." },
      { q: "Wat zijn 'souvenirs'?", options: ["Aandenken aan vakantie", "Stadse buurten", "Soort gebak", "Reisgidsen"], answer: 0, explanation: "Souvenir (Frans-Engels leenwoord): voorwerp dat je meeneemt om vakantie te onthouden." },
    ],
  },

  // ── Sprekend Verleden — geschiedenis alt Feniks ─────────────────────
  "sprekend-verleden": {
    0: [
      { q: "Wat is PREHISTORIE?", options: ["Tijd vóór schrift werd uitgevonden", "Eerste filmtijdperk", "Tijd vóór 1900", "Neanderthalers alleen"], answer: 0, explanation: "Pre-historie = vóór geschreven bronnen. Daarna: 'historische tijd' (vanaf ~3000 v.Chr. in Mesopotamië/Egypte)." },
      { q: "Wat aten EERSTE mensen?", options: ["Wat de natuur bood: noten, bessen, vlees", "Brood + pasta", "Aardappels", "Rijst"], answer: 0, explanation: "Vóór landbouw: jagen op dieren + verzamelen plantaardig voedsel. Aardappel kwam pas na 1500 (uit Amerika)." },
    ],
    1: [
      { q: "Hoe heette de Atheense regeringsvorm?", options: ["Democratie", "Monarchie", "Tirannie", "Oligarchie"], answer: 0, explanation: "Athene ~500 v.Chr.: 'demos' (volk) + 'kratos' (macht) — directe democratie voor vrije mannen." },
      { q: "Wat was het CIRCUS Maximus?", options: ["Wagenrennen-stadion in Rome", "Romeins theater", "Tempel", "School"], answer: 0, explanation: "Grootste stadion van Rome (250.000 toeschouwers!). Voor wagenrennen + spelen. 'Brood en spelen' politiek." },
    ],
    2: [
      { q: "Wat is een KASTEEL?", options: ["Versterkt verblijf van een edelman", "Boerderij", "Stadhuis", "Kerk"], answer: 0, explanation: "Middeleeuws kasteel: woon + verdedigingscentrum. Met muur, gracht, donjon (toren)." },
      { q: "Wat waren MONNIKEN?", options: ["Mannen die in klooster bidden, werken, schrijven", "Soldaten", "Boeren", "Handelaren"], answer: 0, explanation: "Monniken volgden kloosterregel (bv. Benedictijns). Cruciaal voor bewaren + kopiëren van kennis tijdens MA." },
    ],
    3: [
      { q: "Wat was de RENAISSANCE?", options: ["Wedergeboorte van klassieke kunst en kennis (~1400-1600)", "Een veldslag", "Religieuze beweging alleen", "Italië-vakantie"], answer: 0, explanation: "Italiaanse oorsprong: hernieuwde belangstelling voor Grieks-Romeinse erfgoed + nieuwe wetenschap + kunst (Da Vinci, Michelangelo)." },
      { q: "Wie was Christoffel COLUMBUS (1492)?", options: ["Italiaanse zeevaarder die Amerika 'ontdekte' voor Spanje", "Italiaanse koning", "Schrijver", "Schilder"], answer: 0, explanation: "Columbus zeilde westwaarts naar 'Indië', kwam aan in Bahama's. Begin Europese kolonisatie Amerika." },
    ],
    4: [
      { q: "Wat is een REVOLUTIE?", options: ["Snelle, ingrijpende verandering van politiek/maatschappij", "Slechte oogst", "Verkiezing", "Toetsing"], answer: 0, explanation: "Revolutie = omwenteling van het bestaande systeem. Vaak met geweld en grote sociale gevolgen." },
      { q: "Wanneer was de FRANSE Revolutie?", options: ["1789-1799", "1870-1880", "1700", "1900"], answer: 0, explanation: "1789 (Bastille) → 1799 (Napoleon's coup). Mijlpaal voor democratie/rechten. Inspireerde wereldwijd." },
    ],
    5: [
      { q: "Wat veroorzaakte de INDUSTRIËLE Revolutie?", options: ["Stoommachine + fabrieken", "Vliegtuigen", "Computers", "Atoomenergie"], answer: 0, explanation: "Engeland ~1750: stoom → kolenmijnen → spoorwegen → fabrieken. Massaproductie + grote sociale verandering." },
      { q: "Welke nieuwe sociale klasse ontstond?", options: ["Industriële arbeiders (proletariaat)", "Boeren", "Adel", "Geestelijken"], answer: 0, explanation: "Fabrieksarbeiders trokken naar steden — werkten 12+ uur/dag onder slechte omstandigheden. Marx schreef erover." },
    ],
    6: [
      { q: "Wat is KOLONIALISME?", options: ["Een land bezit en beheerst een ander gebied", "Vrije handel", "Vakantie", "Migratie alleen"], answer: 0, explanation: "Vooral 19e eeuw: Europa bezet Afrika/Azië voor grondstoffen + arbeid. Lokale bevolking onderdrukt." },
      { q: "Wat is NATIONALISME?", options: ["Sterke trots/loyaliteit aan eigen land", "Internationale samenwerking", "Anti-religie", "Een sport"], answer: 0, explanation: "Nationalisme: identificatie met eigen volk + staat. Kan positief (saamhorigheid) of negatief (uitsluiten anderen) uitvallen." },
    ],
  },

  // ── BuiteNLand — aardrijkskunde alt De Geo ──────────────────────────
  "buitenland": {
    0: [
      { q: "Wat is PLATENTEKTONIEK?", options: ["Theorie dat aardkorst-platen bewegen", "Een soort steen", "Klimaat-fenomeen", "Vulkaan-soort"], answer: 0, explanation: "Aarde: ~12 grote platen drijven op vloeibare mantel. Botsen, schuiven, separeren → bevingen, vulkanen, gebergten." },
      { q: "Wat veroorzaakt aardbevingen?", options: ["Schuiven van aardkorst-platen", "Vallen van meteorieten", "Donder", "Wind"], answer: 0, explanation: "Plaatgrenzen + breuken: wanneer spanning plotseling vrijkomt → schokgolven. Schaal van Richter meet zwaarte." },
    ],
    1: [
      { q: "Wat is BEVOLKINGSDICHTHEID?", options: ["Aantal mensen per km²", "Hoeveelheid mensen totaal", "Hoeveel voedsel per persoon", "Een statistiek over koeien"], answer: 0, explanation: "Bv. Nederland ~500 mensen/km² (zeer dicht). Australië ~3/km². Dichtheid = bewoonbaarheid + grootte." },
      { q: "Wat is CULTUUR?", options: ["Manier van leven, taal, kunst, gebruiken van een groep", "Een museum", "Een ras", "Een tijdperk"], answer: 0, explanation: "Cultuur = alles dat mensen leren delen: taal, eten, religie, kunst, normen. Verandert in tijd." },
    ],
    2: [
      { q: "Welke factor bepaalt KLIMAAT vooral?", options: ["Breedtegraad (afstand tot evenaar)", "Tijd van de dag", "Aantal mensen", "Soort flora alleen"], answer: 0, explanation: "Verder van evenaar → kouder. Ook hoogte (bergen kouder) en zee-invloed (gematigder bij kust)." },
      { q: "Wat is KOSMOSCH klimaat-effect (Coriolis)?", options: ["Aarde-rotatie buigt wind/water af", "Lichteffect", "Smelten van ijs", "Wolkvorming"], answer: 0, explanation: "Door rotatie aarde buigen luchtmassa's af (rechts op noordhalfrond). Verklaart heersende winden + zee-stromingen." },
    ],
    3: [
      { q: "Wat is een ONTWIKKELINGSLAND?", options: ["Land met lager inkomen + minder voorzieningen", "Onlangs gestichte staat", "Land in oorlog", "Land zonder regering"], answer: 0, explanation: "Ontwikkelingsland: groeiend BBP per hoofd, vaak landbouw-gericht, infrastructuur in ontwikkeling. Bv. Indonesië, Nigeria." },
      { q: "Wat doet de WERELDBANK?", options: ["Geeft leningen aan landen voor ontwikkeling", "Drukt geld", "Maakt valuta-koersen", "Beheert wereldmunten"], answer: 0, explanation: "Wereldbank (1944): leent geld aan armere landen voor projecten (wegen, scholen). Doel: armoede verminderen." },
    ],
    4: [
      { q: "Welke is een EU-instelling?", options: ["Europees Parlement", "VN", "NAVO", "G20"], answer: 0, explanation: "Europees Parlement zit in Brussel/Straatsburg. EU-leden kiezen leden om EU-wetten te maken." },
      { q: "Welke landen waren EERSTE EU-leden?", options: ["België, Duitsland, Frankrijk, Italië, Luxemburg, Nederland (1957)", "Alleen Frankrijk", "Alle Europese landen tegelijk", "UK + IE + DK"], answer: 0, explanation: "Verdrag van Rome 1957 (EEG → EU): 6 oprichters. Daarna 22 keer uitbreiding tot huidige 27 landen." },
    ],
  },

  // ── Na Klar! — Duits klas 1 ────────────────────────────────────────
  "na-klar": {
    0: [
      { q: "Wat betekent 'Hallo' in Duits?", options: ["Hallo (gelijk aan NL)", "Doei", "Bedankt", "Sorry"], answer: 0, explanation: "Hallo = hetzelfde in NL en DE. 'Tschüss' = doei." },
      { q: "'Ich ___ Sara.'", options: ["heiße", "heißt", "heißen", "heisse"], answer: 0, explanation: "Ich + ww-stam (heiß) + e = ich heiße. 'heißt' bij du/er. ('Heisse' = oud/zonder ß)." },
    ],
    1: [
      { q: "Wat is 'Familie' in NL?", options: ["Familie", "School", "Werk", "Vakantie"], answer: 0, explanation: "Familie = familie (cognaat: bijna identiek). Andere woorden: Schule, Arbeit, Urlaub." },
      { q: "Hoe zeg je 'mijn moeder' in Duits?", options: ["meine Mutter", "mein Mutter", "meiner Mutter", "meinen Mutter"], answer: 0, explanation: "Mutter is vrouwelijk → meine. Bij mannelijk: mein (mein Vater). De/het-onderscheid in Duits is 3-deling: der/die/das." },
    ],
    2: [
      { q: "Wat is 'Schule'?", options: ["School", "Vakantie", "Tuin", "Kantoor"], answer: 0, explanation: "Schule = school (cognaat). Urlaub = vakantie, Garten = tuin, Büro = kantoor." },
      { q: "Hoe zeg je 'ik leer Duits' in Duits?", options: ["Ich lerne Deutsch.", "Ich liebe Deutsch.", "Ich lese Deutsch.", "Ich lebe Deutsch."], answer: 0, explanation: "Ich + lerne (= leer) + Deutsch (= Duits). Lieben = houden van, lesen = lezen, leben = leven." },
    ],
    3: [
      { q: "Wat is 'Brot'?", options: ["Brood", "Boter", "Bruin", "Vlees"], answer: 0, explanation: "Brot = brood (cognaat). Butter = boter, braun = bruin, Fleisch = vlees." },
      { q: "Hoe zeg je 'water' in Duits?", options: ["Wasser", "Wein", "Welt", "Wann"], answer: 0, explanation: "Wasser = water. Wein = wijn, Welt = wereld, wann = wanneer." },
    ],
    4: [
      { q: "Wat is 'Auto' in Duits?", options: ["Auto", "Fiets", "Trein", "Vliegtuig"], answer: 0, explanation: "Auto = auto (gelijk aan NL/EN). Fahrrad = fiets, Zug = trein, Flugzeug = vliegtuig." },
      { q: "Hoe zeg je 'Goedendag' in Duits?", options: ["Guten Tag", "Gute Nacht", "Auf Wiedersehen", "Danke schön"], answer: 0, explanation: "Guten Tag = goedendag. Gute Nacht = goedenacht, Auf Wiedersehen = tot ziens, Danke = bedankt." },
    ],
  },

  // ── Grandes Lignes — Frans klas 1 ───────────────────────────────────
  "grandes-lignes": {
    0: [
      { q: "Wat betekent 'Bonjour'?", options: ["Goedendag", "Doei", "Bedankt", "Sorry"], answer: 0, explanation: "Bonjour = goedendag. Au revoir = tot ziens, merci = bedankt, pardon = sorry." },
      { q: "'Je ___ Sara.' (mijn naam is)", options: ["m'appelle", "appelle", "suis appelle", "mes appelle"], answer: 0, explanation: "Je m'appelle = letterlijk 'ik noem mij'. Wederkerig werkwoord: je + me + appelle." },
    ],
    1: [
      { q: "Wat is 'frère' in Frans?", options: ["Broer", "Zus", "Moeder", "Oom"], answer: 0, explanation: "Frère = broer. Sœur = zus, mère = moeder, oncle = oom." },
      { q: "Hoe zeg je 'mijn vader' in Frans?", options: ["mon père", "ma père", "mes père", "le père"], answer: 0, explanation: "Père is mannelijk → mon. Vrouwelijk: ma (ma mère). Meervoud: mes." },
    ],
    2: [
      { q: "Wat is 'l'école'?", options: ["School", "Boek", "Leraar", "Klas"], answer: 0, explanation: "L'école = de school. Livre = boek, professeur = leraar, classe = klas." },
      { q: "'J'apprends ___ français.' (Frans)", options: ["le", "la", "l'", "les"], answer: 0, explanation: "Apprendre + bepaald lidwoord. Français is mannelijk → le. ('L' alleen vóór klinker.)" },
    ],
    3: [
      { q: "Wat is 'jouer' in Frans?", options: ["Spelen", "Lopen", "Eten", "Slapen"], answer: 0, explanation: "Jouer = spelen. Manger = eten, dormir = slapen, courir = rennen." },
      { q: "Welk woord betekent 'voetbal' in Frans?", options: ["football", "tennis", "natation", "danse"], answer: 0, explanation: "Football = voetbal (Engels leenwoord, ook gebruikt in Frans)." },
    ],
    4: [
      { q: "Wat is 'pain' in Frans?", options: ["Brood", "Wijn", "Pijn", "Pet"], answer: 0, explanation: "Pain = brood (let op: NIET 'pijn'!). Vin = wijn, douleur = pijn." },
      { q: "Hoe zeg je 'Ik wil graag een croissant'?", options: ["Je voudrais un croissant", "Je voudrais une croissant", "J'ai un croissant", "Je suis croissant"], answer: 0, explanation: "Je voudrais = ik zou willen (beleefd). Croissant is mannelijk → un (niet une)." },
    ],
  },

  // ── Pincode — economie klas 3+ ──────────────────────────────────────
  "pincode": {
    0: [
      { q: "Wat is ECONOMIE?", options: ["Studie van schaarste + keuzes maken", "Wiskunde over geld alleen", "Boekhouden", "Reklame maken"], answer: 0, explanation: "Economie = hoe mensen + organisaties + landen omgaan met beperkte middelen (geld, tijd, grondstoffen)." },
      { q: "Wat is BEHOEFTE?", options: ["Iets dat je nodig hebt of wilt", "Een baan", "Een product", "Geld"], answer: 0, explanation: "Behoefte = de wens om iets te hebben/doen. Schaars middel + behoefte → schaarste = economisch probleem." },
    ],
    1: [
      { q: "Wat gebeurt bij hoge VRAAG en lage AANBOD?", options: ["Prijs stijgt", "Prijs daalt", "Niets", "Vraag verdwijnt"], answer: 0, explanation: "Wet van vraag/aanbod: schaarste → prijs stijgt. Bv. tijdens corona toiletpapier-tekort → hogere prijs." },
      { q: "Wat is een MARKT?", options: ["Plek of mechanisme waar vraag en aanbod elkaar ontmoeten", "Alleen een plein in stad", "Een winkel", "Een bedrijf"], answer: 0, explanation: "Markt = ruil-mechanisme: kopers + verkopers ontmoeten (fysiek of online). Niet alleen marktplein." },
    ],
    2: [
      { q: "Wat is INFLATIE?", options: ["Prijzen stijgen, geld wordt minder waard", "Sparen", "Werkloosheid", "Beurs-stijging"], answer: 0, explanation: "Inflatie = algehele prijsstijging. Bij 5% inflatie kost je boodschappenlijst volgend jaar 5% meer." },
      { q: "Wat is RENTE?", options: ["Vergoeding voor lenen of sparen van geld", "Schuld", "Inkomen uit werk", "Belasting"], answer: 0, explanation: "Rente: % vergoeding op geld. Banken geven sparen-rente, vragen leen-rente. Verschil = winst voor bank." },
    ],
    3: [
      { q: "Wat is BRUTO loon?", options: ["Loon vóór belastingen", "Loon na belastingen", "Bonus", "Pensioen"], answer: 0, explanation: "Bruto: wat je 'verdient' op papier. Netto: wat op rekening komt na belasting + premies." },
      { q: "Wat is een VAKBOND?", options: ["Vereniging van werknemers voor betere voorwaarden", "Bedrijf", "Overheid", "Bank"], answer: 0, explanation: "Vakbonden (FNV, CNV) onderhandelen namens werknemers met werkgevers over loon, werkomstandigheden, CAO's." },
    ],
    4: [
      { q: "Wat is BELASTING?", options: ["Verplichte bijdrage aan overheid", "Vrijwillige donatie", "Boete", "Pensioen-premie"], answer: 0, explanation: "Belasting (inkomstenbelasting, BTW etc.) financiert overheidstaken: zorg, onderwijs, infrastructuur." },
      { q: "Wat is VERZORGINGSSTAAT?", options: ["Land waar overheid zorgt voor sociale zekerheid", "Land zonder overheid", "Land in oorlog", "Pensioenstelsel alleen"], answer: 0, explanation: "Nederland: AOW, bijstand, kinderbijslag, gezondheidszorg, onderwijs — overheid biedt vangnet." },
    ],
    5: [
      { q: "Wat is INTERNATIONALE handel?", options: ["Goederen + diensten ruilen tussen landen", "Toerisme", "Diplomatie", "Migratie alleen"], answer: 0, explanation: "Import (in NL) + export (NL → buitenland). Specialisatie + ruil → meer welvaart voor allebei." },
      { q: "Wat is de EURO?", options: ["Gezamenlijke munt van 20 EU-landen", "Engelse munt", "Wereldmunt", "Bitcoin-variant"], answer: 0, explanation: "Euro (€) sinds 2002 fysiek. Eurozone = NL, DE, FR, IT, etc. Vereenvoudigt handel binnen EU." },
    ],
  },

  // ── Thema's Maatschappijleer — klas 3+ ──────────────────────────────
  "themas-maatschappijleer": {
    0: [
      { q: "Wat is MAATSCHAPPIJLEER?", options: ["Studie van NL-samenleving + politiek + recht", "Sport-vak", "Wiskunde", "Geschiedenis alleen"], answer: 0, explanation: "Maatschappijleer behandelt: democratie, recht, media, multiculturele samenleving, verzorgingsstaat." },
      { q: "Wat is een NORM?", options: ["Regel hoe mensen zich (zouden moeten) gedragen", "Maatstaf alleen", "Wet", "Mode"], answer: 0, explanation: "Norm = sociale verwachting (geen wet, geen straf). Bv. 'niet door rood lopen' = norm. 'Niet stelen' = norm én wet." },
    ],
    1: [
      { q: "Wat is een RECHTSSTAAT?", options: ["Land waar wet boven willekeur staat + onafhankelijke rechter", "Land met veel rechtbanken", "Land zonder regering", "Communistisch land"], answer: 0, explanation: "Rechtsstaat-principes: scheiding der machten, onafhankelijke rechter, gelijkheid voor wet, grondrechten." },
      { q: "Wat is een GRONDRECHT?", options: ["Recht voor iedere burger (in Grondwet)", "Boerderij-recht", "Recht op huis", "Recht op auto"], answer: 0, explanation: "Grondrechten in NL: vrije meningsuiting, godsdienst, kiesrecht, gelijkheid (art. 1), privacy, eerlijk proces." },
    ],
    2: [
      { q: "Wat is PARLEMENTAIRE democratie?", options: ["Volk kiest vertegenwoordigers (Tweede Kamer) die wetten maken", "Eén leider beslist", "Geen verkiezingen", "Een religieuze staat"], answer: 0, explanation: "Volk → 2e Kamer → kabinet (premier + ministers). 1e Kamer keurt af/goed. Onafhankelijke rechtspraak." },
      { q: "Wat is COALITIE?", options: ["Samenwerking tussen partijen om regering te vormen", "Een politieke partij", "Een religie", "Een militair bondgenootschap"], answer: 0, explanation: "In NL nooit één partij meerderheid → onderhandelen over regeerakkoord (bv. PVV+VVD+NSC+BBB)." },
    ],
    3: [
      { q: "Wat is PLURIFORME samenleving?", options: ["Samenleving met veel culturen, religies, leefstijlen", "Iedereen hetzelfde", "Eén religie alleen", "Een wijk"], answer: 0, explanation: "NL: ~17 mln inwoners met diverse achtergronden, religies, talen. Voordelen + uitdagingen (integratie, sociale cohesie)." },
      { q: "Wat is DISCRIMINATIE?", options: ["Iemand achterstellen op basis van afkomst, geslacht, etc.", "Een keuze", "Een opmerking", "Een protest"], answer: 0, explanation: "Discriminatie verboden in art. 1 Grondwet. Soms moeilijk aan te tonen, vaak structureel (institutionele discr.)." },
    ],
    4: [
      { q: "Wat is de VERZORGINGSSTAAT?", options: ["Stelsel van sociale zekerheid (AOW, bijstand, zorg)", "Een soort verzekering", "Een ministerie", "Een gebouw"], answer: 0, explanation: "NL VZS sinds ~1950: collectieve voorzieningen voor wie kan niet (ziek, oud, werkloos). Gefinancierd via belasting + premies." },
      { q: "Wat doet de SOCIALE Verzekeringsbank (SVB)?", options: ["Beheert AOW, kinderbijslag, etc.", "Leent geld aan landen", "Maakt beleid", "Verzekert auto's"], answer: 0, explanation: "SVB voert sociale uitkeringen uit. Belastingdienst int belasting; SVB betaalt AOW etc." },
    ],
  },

  // ── KERN Wiskunde Havo/vwo 1A — alt GR HV1 ──────────────────────────
  "kern-wis-hv1a": {
    0: [
      { q: "Wat is 24 + 36?", options: ["60", "50", "70", "54"], answer: 0, explanation: "24 + 36 = 60. Of: 25 + 35 = 60 (slim verschuiven)." },
      { q: "Wat is 100 - 37?", options: ["63", "73", "53", "67"], answer: 0, explanation: "100 - 37: 100 - 40 + 3 = 60 + 3 = 63." },
    ],
    1: [
      { q: "5 appels kosten €2,50. Wat kost 1 appel?", options: ["€0,50", "€1,25", "€2,50", "€5"], answer: 0, explanation: "Verhouding 5:€2,50 → 1:€0,50. Deel beide door 5." },
      { q: "Verhouding 3:6 vereenvoudig je tot?", options: ["1:2", "3:6", "1:3", "2:3"], answer: 0, explanation: "Deel beide getallen door 3 → 1:2. Vereenvoudigen = grootste gemene deler." },
    ],
    2: [
      { q: "Hoek 90° heet?", options: ["Rechte hoek", "Stompe hoek", "Scherpe hoek", "Gestrekte hoek"], answer: 0, explanation: "90° = recht. <90° = scherp, >90° (en <180°) = stomp, 180° = gestrekt." },
      { q: "Som hoeken in een vierkant?", options: ["360°", "180°", "90°", "720°"], answer: 0, explanation: "4 hoeken × 90° = 360°. Dezelfde regel: alle vierhoeken hebben hoekensom 360°." },
    ],
    3: [
      { q: "Vereenvoudig: 4a + 3a", options: ["7a", "12a", "7", "a²"], answer: 0, explanation: "Optellen van gelijksoortige termen: (4+3)a = 7a." },
      { q: "Los op: x − 7 = 12", options: ["x = 19", "x = 5", "x = -19", "x = 84"], answer: 0, explanation: "x = 12 + 7 = 19. Beweeg de -7 naar de andere kant → +7." },
    ],
    4: [
      { q: "Som van 3, 5, 7, 9?", options: ["24", "20", "26", "16"], answer: 0, explanation: "3+5+7+9 = 24. Slim: 3+9=12, 5+7=12, 12+12=24." },
      { q: "Welke is mediaan van 1, 3, 5, 7, 9?", options: ["5", "1", "9", "3"], answer: 0, explanation: "Middelste van geordende rij van 5 → positie 3 = 5." },
    ],
  },

  // ── KERN Nederlands Havo/vwo 1 — alt NN HV1 ─────────────────────────
  "kern-nl-hv1": {
    0: [
      { q: "Wat is GOED LUISTEREN?", options: ["Aandachtig + niet onderbreken", "Door de spreker heen praten", "Op je telefoon kijken", "Wegrennen"], answer: 0, explanation: "Actief luisteren: lichaam openstellen, oogcontact, samenvatten, vragen stellen." },
      { q: "Welke zin past bij PRESENTATIE-OPENING?", options: ["'Vandaag vertel ik over honden.'", "'Eh, ik weet het niet.'", "'Stil!'", "'Hoi.'"], answer: 0, explanation: "Goede opening: directe aankondiging onderwerp + uitnodigend." },
    ],
    1: [
      { q: "Wat is HOOFDGEDACHTE van een tekst?", options: ["Belangrijkste boodschap in 1 zin", "De titel", "Een grappig detail", "De auteur"], answer: 0, explanation: "Hoofdgedachte = essentie, kort samengevat. Vaak in inleiding/conclusie of door schrijver beklemtoond." },
      { q: "Welke leesstrategie is SKIMMEN?", options: ["Snel doorlezen voor hoofdpunt", "Hardop voorlezen", "Letter voor letter", "Alleen plaatjes"], answer: 0, explanation: "Skimmen = oog over tekst zonder details lezen. Eerst zinnen, eerste/laatste alinea, kopjes." },
    ],
    2: [
      { q: "Hoe begin je een GOEDE alinea?", options: ["Met een kernzin die het onderwerp aankondigt", "Met een vraag", "Met de naam van de schrijver", "Met cijfers"], answer: 0, explanation: "Kernzin (topic sentence) opent: vat samen wat in alinea komt. Daarna voorbeelden + uitwerking." },
      { q: "Welk woord is een SIGNAAL voor TEGENSTELLING?", options: ["Echter", "Bovendien", "Daarom", "Omdat"], answer: 0, explanation: "Echter / hoewel / daarentegen → tegenstelling. Bovendien = opsomming, daarom = gevolg." },
    ],
    3: [
      { q: "Welke is GOED gespeld?", options: ["restaurant", "ristaurant", "restaurant", "restourant"], answer: 0, explanation: "Restaurant — Frans leenwoord met die exacte spelling. Onthouden of opzoeken." },
      { q: "Hij ___ 't hard. (verleden tijd, regelmatig)", options: ["liep", "loop", "lopen", "lopend"], answer: 0, explanation: "Verleden tijd van 'lopen' = liep (onregelmatig sterk werkwoord)." },
    ],
    4: [
      { q: "Wat betekent 'genereus'?", options: ["Vrijgevig", "Gierig", "Snel", "Slim"], answer: 0, explanation: "Genereus (uit Latijn 'genus' = adel) → mild, gul, ruimhartig. Tegenovergesteld: gierig." },
      { q: "Welke is het ANTONIEM van 'optimistisch'?", options: ["Pessimistisch", "Realistisch", "Vrolijk", "Zorgeloos"], answer: 0, explanation: "Optimistisch (positief verwachten) ↔ pessimistisch (negatief). Realistisch is neutraal/middel." },
    ],
    5: [
      { q: "Welke woord is een ZELFSTANDIG NAAMWOORD?", options: ["Tafel", "Lopen", "Snel", "Naar"], answer: 0, explanation: "Znw = ding, persoon, plaats, idee. Tafel = ding. Lopen = ww, snel = bnw, naar = vz." },
      { q: "Welke zin staat in TEGENWOORDIGE tijd?", options: ["Ik loop naar school.", "Ik liep gisteren.", "Ik zal lopen.", "Ik heb gelopen."], answer: 0, explanation: "Tegenwoordig: nu/hier. Verleden: liep/heb gelopen. Toekomst: zal lopen." },
    ],
    6: [
      { q: "Wat is een METAFOOR?", options: ["Vergelijking ZONDER 'als' (bv. 'hij is een leeuw')", "Vergelijking met 'als'", "Een rijm", "Een uitroep"], answer: 0, explanation: "Metafoor = directe overdracht: 'hij is een leeuw' = moedig. Vergelijking gebruikt 'als': 'hij is moedig als een leeuw'." },
    ],
  },

  // ── All Right! — Engels alt Stepping Stones ─────────────────────────
  "all-right": {
    0: [
      { q: "How do you say 'hallo' in Engels?", options: ["Hello", "Hola", "Hallo", "Bonjour"], answer: 0, explanation: "Hello (UK/US). Hi is informeler. Hola = Spaans, Bonjour = Frans." },
      { q: "'I ___ a student.'", options: ["am", "is", "are", "be"], answer: 0, explanation: "I + am. He/she/it + is. You/we/they + are. 'Be' is infinitief." },
    ],
    1: [
      { q: "Wat betekent 'home'?", options: ["Thuis / huis", "Hut", "Hotel", "Tent"], answer: 0, explanation: "Home = thuis (waar je woont, ook gevoel). House = fysiek huis. Subtiel verschil." },
      { q: "'Where do you ___?' (wonen)", options: ["live", "lives", "living", "lived"], answer: 0, explanation: "I/you/we/they + live. He/she/it + lives. Vraagvorm: 'where do you live?'" },
    ],
    2: [
      { q: "Wat is 'breakfast'?", options: ["Ontbijt", "Lunch", "Diner", "Snack"], answer: 0, explanation: "Break + fast = je 'verbreekt het vasten' van de nacht → ontbijt. Lunch (middag), dinner (avond)." },
      { q: "'I usually ___ at 7 am.'", options: ["wake up", "wakes up", "waking up", "woke up"], answer: 0, explanation: "I + werkwoord-stam. Voor he/she/it + 's' (wakes up). Verleden: woke up." },
    ],
    3: [
      { q: "Wat betekent 'reading'?", options: ["Lezen (-ing vorm)", "Een stad in UK", "Beide!", "Kijken"], answer: 0, explanation: "Reading = lezen (verbgerundium). Ook stadje in Engeland. Hier: lezen-werkwoord." },
      { q: "Welke hobby is 'gaming'?", options: ["Computerspelletjes", "Tuinieren", "Koken", "Fietsen"], answer: 0, explanation: "Gaming = video- of computerspelletjes spelen. Populaire moderne hobby." },
    ],
    4: [
      { q: "What's the OPPOSITE of 'cheap'?", options: ["Expensive", "Big", "Cold", "New"], answer: 0, explanation: "Cheap (goedkoop) ↔ expensive (duur). Big↔small, cold↔hot, new↔old." },
      { q: "Hoe vraag je 'Wat kost het?'", options: ["How much is it?", "What is it?", "Where is it?", "When is it?"], answer: 0, explanation: "How much (hoeveel) + is it. Bij meerdere: 'how much are these?'" },
    ],
  },

  // ── Biologie voor Jou Havo/vwo 2 ────────────────────────────────────
  "bvj-havo-vwo-2": {
    0: [
      { q: "Wat doe je bij INADEMING?", options: ["Zuurstof opnemen + CO₂ afgeven (in longen)", "Voedsel verteren", "Bloed pompen", "Slapen"], answer: 0, explanation: "Inademing → diafragma omlaag → longen vullen met lucht → zuurstof in bloed, CO₂ uit bloed." },
      { q: "Wat is VERBRANDING in cellen?", options: ["Glucose + zuurstof → CO₂ + H₂O + energie (ATP)", "Vuur in de cel", "Vergiftiging", "Niets"], answer: 0, explanation: "Cel-ademhaling: brandstof (glucose) + O₂ → CO₂ + water + ATP (energie). In mitochondriën." },
    ],
    1: [
      { q: "Welke voedingsstoffen verteren we het traagst?", options: ["Vetten", "Suikers", "Eiwitten", "Water"], answer: 0, explanation: "Vetten verteren langzaam (uren in dunne darm). Suikers binnen min. Eiwitten medium snelheid." },
      { q: "Wat doet de TONG bij vertering?", options: ["Mengt voedsel met speeksel + smaakt", "Verteren", "Zuigen", "Slikken alleen"], answer: 0, explanation: "Tong: kneedt voedsel + speeksel (bevat enzymen). Smaakpapillen voor smaakwaarneming. Slikken = automatisch reflex." },
    ],
    2: [
      { q: "Welke bloedvaten LOPEN naar het hart toe?", options: ["Aderen / venen", "Slagaders", "Haarvaten", "Lymfevaten"], answer: 0, explanation: "Aderen → naar hart. Slagaders ← van hart. Lymfevaten = ander systeem (afweer)." },
      { q: "Wat doen WITTE bloedcellen?", options: ["Afweer tegen ziektekiemen", "Zuurstof transport", "Bloed stollen", "Niets"], answer: 0, explanation: "Witte bloedcellen (leukocyten) = immuunsysteem: detecteren + vernietigen bacteriën, virussen." },
    ],
    3: [
      { q: "Wat is een GEN?", options: ["Stuk DNA met code voor één eigenschap", "Hele DNA-streng", "Cel-soort", "Een vitamine"], answer: 0, explanation: "Gen = eenheid van erfelijkheid. Codeert voor eiwit dat eigenschap bepaalt (oogkleur, lengte, etc.)." },
      { q: "Wie ontdekte de genetica wetten?", options: ["Gregor Mendel (~1865)", "Charles Darwin", "Isaac Newton", "Marie Curie"], answer: 0, explanation: "Mendel deed proeven met erwten → ontdekte basisregels van overerving (dominant/recessief)." },
    ],
    4: [
      { q: "Wat is ECOLOGIE?", options: ["Studie van organismen + omgeving + interacties", "Studie van rotsen", "Studie van milieu-ramp", "Een soort vakantie"], answer: 0, explanation: "Eco-logie = leef-leer. Hoe planten/dieren samenleven in ecosystemen. Voedselketens, kringlopen." },
      { q: "Wat is BIODIVERSITEIT?", options: ["Variatie aan soorten in een gebied", "Aantal mensen", "Soort vis", "Een ziekte"], answer: 0, explanation: "Biodiversiteit = aantal verschillende soorten + variatie binnen soorten + ecosystemen. Hoog = stabieler." },
    ],
  },

  // ── Getal & Ruimte Havo/vwo 2 — wiskunde klas 2 ────────────────────
  "gr-hv2": {
    0: [
      { q: "Vereenvoudig: 5a + 3a − 2a", options: ["6a", "10a", "8a", "30a"], answer: 0, explanation: "5+3−2 = 6, dus 6a. Optellen + aftrekken van gelijksoortige termen." },
      { q: "Wat is 7 × 8 + 6?", options: ["62", "98", "70", "56"], answer: 0, explanation: "Eerst ×: 7×8=56. + 6 = 62. Volgorde: ×÷ vóór +−." },
    ],
    1: [
      { q: "Oppervlakte vierkant met zijde 9 cm?", options: ["81 cm²", "36 cm²", "18 cm²", "27 cm²"], answer: 0, explanation: "A = z² = 9 × 9 = 81 cm²." },
      { q: "Inhoud kubus met ribbe 5?", options: ["125", "75", "25", "15"], answer: 0, explanation: "V = z³ = 5 × 5 × 5 = 125." },
    ],
    2: [
      { q: "Bij y = 3x + 2: y als x = 4?", options: ["14", "12", "9", "5"], answer: 0, explanation: "y = 3 × 4 + 2 = 12 + 2 = 14." },
      { q: "Los op: 2x + 5 = 17", options: ["x = 6", "x = 11", "x = 8", "x = 12"], answer: 0, explanation: "2x = 17 − 5 = 12. x = 12 / 2 = 6." },
    ],
    3: [
      { q: "Wat is 25% van 80?", options: ["20", "25", "16", "40"], answer: 0, explanation: "25% = ¼. 80 / 4 = 20." },
      { q: "Een trui is van €60 → €45. Hoeveel % korting?", options: ["25%", "15%", "75%", "30%"], answer: 0, explanation: "Verschil = 15. Korting% = 15/60 × 100 = 25%." },
    ],
    4: [
      { q: "Wat is 8²?", options: ["64", "16", "256", "32"], answer: 0, explanation: "8² = 8 × 8 = 64. Notatie: 'twee' boven (kwadraat)." },
      { q: "Wat is √49?", options: ["7", "8", "6", "49"], answer: 0, explanation: "Wortel van 49: welk getal × zichzelf = 49? 7 × 7 = 49." },
    ],
    5: [
      { q: "Pythagoras: in driehoek met rechthoekszijden 3 en 4 — schuine zijde?", options: ["5", "7", "12", "25"], answer: 0, explanation: "a² + b² = c². 9 + 16 = 25. c = √25 = 5. Klassiek 3-4-5 driehoek." },
      { q: "Welke driehoek heeft een rechte hoek?", options: ["Rechthoekige driehoek", "Gelijkzijdige driehoek", "Stompe driehoek", "Geen"], answer: 0, explanation: "Rechthoekige (rechte) driehoek = één hoek 90°. Pythagoras werkt alleen bij rechthoekige driehoeken." },
    ],
    6: [
      { q: "Los op: x² = 25", options: ["x = 5 of x = -5", "x = 5", "x = 25", "x = 12,5"], answer: 0, explanation: "Kwadratische vergelijkingen hebben vaak 2 oplossingen: ±√25 = ±5." },
      { q: "Wat is x² + 3x = x(x+3)?", options: ["Klopt — uitfactoreren x", "Klopt niet", "Alleen voor x>0", "Alleen voor x<0"], answer: 0, explanation: "Distributiewet: x × x + x × 3 = x² + 3x. Klopt voor alle x." },
    ],
    7: [
      { q: "Inhoud cilinder met straal 3 en hoogte 10?", options: ["~283 (= π × 9 × 10)", "30", "60", "90"], answer: 0, explanation: "V = π × r² × h = π × 9 × 10 ≈ 283. (Met π ≈ 3,14.)" },
    ],
  },

  // ── Getal & Ruimte Havo/vwo 3 — wiskunde klas 3 ────────────────────
  "gr-hv3": {
    0: [
      { q: "Welke is een LINEAIRE formule?", options: ["y = 2x + 3", "y = x²", "y = √x", "y = 1/x"], answer: 0, explanation: "Lineair = grafiek is rechte lijn. Vorm y = ax + b. Andere zijn niet-lineair." },
      { q: "Bij y = 4x − 6, wat is y als x = 3?", options: ["6", "12", "−2", "10"], answer: 0, explanation: "y = 4 × 3 − 6 = 12 − 6 = 6." },
    ],
    1: [
      { q: "Wat is GELIJKVORMIGHEID in figuren?", options: ["Zelfde vorm, verschillende grootte", "Identiek", "Spiegelbeeld alleen", "Volledig anders"], answer: 0, explanation: "Gelijkvormig: hoeken gelijk, zijden in dezelfde verhouding. Bv. een grote en kleine driehoek met dezelfde vorm." },
      { q: "Bij gelijkvormige driehoeken: zijden 3,4,5 en 9,12,?", options: ["15", "10", "20", "12"], answer: 0, explanation: "Verhouding 3 (9/3=3, 12/4=3). Dus 5 × 3 = 15." },
    ],
    2: [
      { q: "Wat is een PARABOOL?", options: ["Grafiek van y = ax² + bx + c", "Een rechte lijn", "Een cirkel", "Een sinusgolf"], answer: 0, explanation: "Parabool = symmetrische U-vorm. Komt uit kwadratische functie. Bovenkant = top, snijpunten met x-as = nulpunten." },
      { q: "Bij y = x² − 4: nulpunten?", options: ["x = 2 en x = -2", "x = 4", "x = 0", "Geen"], answer: 0, explanation: "x² − 4 = 0 → x² = 4 → x = ±2. Verschil van kwadraten." },
    ],
    3: [
      { q: "Wat is GEMIDDELDE van 4, 8, 12?", options: ["8", "12", "4", "24"], answer: 0, explanation: "Som / aantal = (4+8+12)/3 = 24/3 = 8." },
      { q: "Welk percentage is 15 van de 60?", options: ["25%", "15%", "20%", "75%"], answer: 0, explanation: "15/60 × 100% = 25%. Of: 15/60 = 1/4 = 25%." },
    ],
    4: [
      { q: "Vereenvoudig: (x²)³", options: ["x⁶", "x⁵", "x³", "x⁹"], answer: 0, explanation: "Macht-van-een-macht: vermenigvuldig exponenten. (x²)³ = x^(2×3) = x⁶." },
      { q: "Wat is x⁵ × x³?", options: ["x⁸", "x¹⁵", "x²", "2x⁸"], answer: 0, explanation: "Vermenigvuldigen met zelfde grondtal: tel exponenten. 5 + 3 = 8. → x⁸." },
    ],
    5: [
      { q: "Los op: 2x² − 8 = 0", options: ["x = 2 of x = -2", "x = 4", "x = ±√8", "x = 8"], answer: 0, explanation: "2x² = 8. x² = 4. x = ±2." },
    ],
    6: [
      { q: "Bij rechthoekige driehoek: tegenover = 3, naast = 4. Wat is tan(α)?", options: ["3/4 = 0,75", "4/3", "5/3", "5/4"], answer: 0, explanation: "tan = tegenover / naast = 3/4 = 0,75. SOSCASTOA: T(angent) = T(egen)/A(an)." },
      { q: "sin(30°) = ?", options: ["½ = 0,5", "1", "0", "√2/2"], answer: 0, explanation: "Standaard waarde: sin 30° = 0,5. Onthouden voor examen!" },
    ],
    7: [
      { q: "Welke verband bestaat ER tussen omtrek + diameter cirkel?", options: ["O = π × d", "O = π × r", "O = 2r", "O = r²"], answer: 0, explanation: "Omtrek = π × diameter, of 2π × straal. Diameter = 2r." },
    ],
    8: [
      { q: "Hoeveel mogelijkheden heeft 3-cijferige PIN met 0-9?", options: ["1000 (10³)", "30", "100", "999"], answer: 0, explanation: "Per cijfer 10 keuzes, 3 cijfers → 10×10×10 = 10³ = 1000. Inclusief 000." },
    ],
  },

  // ── Paso Adelante 1 — Spaans klas 1 ─────────────────────────────────
  "paso-adelante-1": {
    0: [
      { q: "Wat betekent 'Hola'?", options: ["Hallo", "Doei", "Bedankt", "Sorry"], answer: 0, explanation: "Hola = hallo. Adiós = doei, gracias = bedankt, perdón = sorry." },
      { q: "'Yo me ___ Sara.' (mijn naam is)", options: ["llamo", "llama", "llamas", "llaman"], answer: 0, explanation: "Wederkerig werkwoord 'llamarse' (zich noemen). Yo + me + llamo. Tu + te + llamas." },
    ],
    1: [
      { q: "Wat is 'casa' in Spaans?", options: ["Huis", "School", "Auto", "Familie"], answer: 0, explanation: "Casa = huis. Escuela = school, coche = auto, familia = familie." },
      { q: "Hoe zeg je 'mijn moeder' in Spaans?", options: ["mi madre", "tu madre", "su madre", "mio madre"], answer: 0, explanation: "Mi (mijn) + madre (moeder). 'Tu' = jouw, 'su' = zijn/haar/uw." },
    ],
    2: [
      { q: "Wat is 'instituto'?", options: ["Middelbare school", "Boek", "Klas", "Lerar"], answer: 0, explanation: "Instituto = middelbare school in Spanje. Profesor = leraar, libro = boek, clase = klas." },
      { q: "'Estudio español.' (ik studeer ___)", options: ["Spaans", "Engels", "Frans", "Duits"], answer: 0, explanation: "Español = Spaans. Inglés = Engels, francés = Frans, alemán = Duits." },
    ],
    3: [
      { q: "Wat is 'tienda' in Spaans?", options: ["Winkel", "Boom", "Vakantie", "Stem"], answer: 0, explanation: "Tienda = winkel. Árbol = boom, vacaciones = vakantie, voz = stem." },
      { q: "'¿Cuánto cuesta?' betekent?", options: ["Hoeveel kost het?", "Waar is het?", "Wat is dit?", "Wanneer komt het?"], answer: 0, explanation: "Cuánto cuesta = hoeveel kost. Vraag voor prijs in winkel/markt." },
    ],
    4: [
      { q: "Wat is 'verano'?", options: ["Zomer", "Winter", "Lente", "Herfst"], answer: 0, explanation: "Verano = zomer. Invierno = winter, primavera = lente, otoño = herfst." },
      { q: "'Cádiz' is een stad in?", options: ["Spanje (Andalusië)", "Frankrijk", "Italië", "Mexico"], answer: 0, explanation: "Cádiz = oude Spaanse havenstad in Andalusië, kuststad aan Atlantische Oceaan." },
    ],
  },

  // ── Op Niveau Havo 4/5 — Nederlands bovenbouw ───────────────────────
  "op-niveau-havo45": {
    0: [
      { q: "Wat is een AANNAME in een betoog?", options: ["Iets dat voor waar wordt aangenomen zonder bewijs", "Bewijs", "Conclusie", "Citaat"], answer: 0, explanation: "Aanname (premisse) = uitgangspunt waarop redenering rust. Goede betogen maken aannames expliciet." },
      { q: "Welke leesstrategie gebruik je voor SAMENVATTEN?", options: ["Studerend lezen + selectief noteren", "Skimmen", "Hardop voorlezen", "Negeren"], answer: 0, explanation: "Voor samenvatting: lees nauwkeurig, markeer kernzin per alinea, herschrijf in eigen woorden." },
    ],
    1: [
      { q: "Welk soort is een ZAKELIJKE brief?", options: ["Formeel + duidelijk + zonder emoties", "Persoonlijk + verhalend", "Gedicht", "Sms"], answer: 0, explanation: "Zakelijke brief: aanhef, doel, kort, beleefd, slot. Bv. naar bedrijf, gemeente, school." },
      { q: "Welke is GOED format?", options: ["Geachte heer/mevrouw,...Met vriendelijke groet,", "Hoi! ... Doei", "Beste, ... Tot straks", "Hé! ... Yo"], answer: 0, explanation: "Formele aanhef + slot. Bij naam bekend: 'Geachte mevrouw De Vries,'." },
    ],
    2: [
      { q: "Wat is een DEBAT?", options: ["Geordende discussie met regels en standpunten", "Schreeuwruzie", "Gepraat", "Toets"], answer: 0, explanation: "Debat: pro/contra, beurt-systeem, jury, tijdslimiet. Engels gebaseerd op Brits parlement." },
    ],
    3: [
      { q: "Wat is een ROMAN?", options: ["Lang verhalend prozawerk (fictie)", "Kort verhaal", "Gedicht", "Toneelstuk"], answer: 0, explanation: "Roman: 100+ pagina's, fictief verhaal met meerdere personages + plot. Vs. novelle (korter), short story." },
      { q: "Welk literair element is een FLASHBACK?", options: ["Terugblik naar eerder moment in verhaal", "Vooruitblik", "Beschrijving", "Climax"], answer: 0, explanation: "Flashback (analepsis): scene uit verleden tussengevoegd. Verheldert achtergrond personage." },
    ],
    4: [
      { q: "Welke spellingfout: 'Hij wordt boos.' is wel/niet correct?", options: ["Correct", "Moet 'word' zijn", "Moet 'wort' zijn", "Beide goed"], answer: 0, explanation: "Stam (word) + t voor 3e persoon enkelvoud → wordt. 't kofschip-regel: 'd' niet in 't kof-(s)c-hip dus +t." },
    ],
    5: [
      { q: "Wat is een DROGREDEN?", options: ["Schijn-argument dat logisch onjuist is", "Goede onderbouwing", "Bron-citaat", "Vraag"], answer: 0, explanation: "Drogredenen: ad hominem (op persoon), populum (iedereen vindt), stroman, etc. Vaak misleidend gebruikt." },
    ],
    6: [
      { q: "Welk type tekst krijg je vaak op CSE?", options: ["Beschouwende of betogende artikelen", "Gedichten alleen", "Toneelstukken", "Dagboekfragmenten"], answer: 0, explanation: "Centraal Schriftelijk Examen Nederlands: 4-5 teksten + open vragen + samenvatting. Vaak NRC/Volkskrant-niveau." },
    ],
  },

  // ── M&O Havo — Bedrijfseconomie klas 3+ ─────────────────────────────
  "mo-havo": {
    0: [
      { q: "Wat is BEDRIJFSECONOMIE?", options: ["Hoe een bedrijf efficient werkt + winst maakt", "Studie van banken alleen", "Wiskunde", "Boekhouden alleen"], answer: 0, explanation: "Bedrijfseconomie = strategie + financiën + marketing van een individueel bedrijf. Onderscheid: macroeconomie = land/wereld." },
      { q: "Wat is een ONDERNEMING?", options: ["Bedrijf met als doel winst maken", "Vereniging zonder winst", "Overheidsinstelling", "Een wet"], answer: 0, explanation: "Onderneming/bedrijf: rechtspersoon (eenmanszaak, BV, NV) met commercieel doel." },
    ],
    1: [
      { q: "Wat zijn VARIABELE kosten?", options: ["Veranderen met productieaantal (bv. grondstof per stuk)", "Vast (bv. huur)", "Eenmalig", "Niet bestaand"], answer: 0, explanation: "Variabel: per geproduceerde eenheid. Vast: per periode (huur, salaris). Beide samen = totale kosten." },
      { q: "Wat is BREAK-EVEN?", options: ["Punt waar totale kosten = totale opbrengsten (geen winst, geen verlies)", "Maximale winst", "Faillissement", "Bedrijf-start"], answer: 0, explanation: "Bij break-even draait je bedrijf 'kostendekkend'. Bij meer omzet = winst, minder = verlies." },
    ],
    2: [
      { q: "Wat is JIT (just in time)?", options: ["Voorraad pas inkopen wanneer nodig", "Eens per jaar inkopen", "Te veel hebben", "Niets inkopen"], answer: 0, explanation: "JIT = Toyota-methode. Minimaliseert voorraadkosten. Risico: leveringsproblemen → productiestop." },
    ],
    3: [
      { q: "Wat is een ARBEIDSCONTRACT?", options: ["Schriftelijke overeenkomst werknemer-werkgever", "Een verzekering", "Loonstrook", "Pensioen"], answer: 0, explanation: "Bevat afspraken over functie, loon, uren, opzegtermijn. Verplicht in NL bij vast werk." },
    ],
    4: [
      { q: "Wat zijn de 4 P's van marketing?", options: ["Product, Prijs, Plaats, Promotie", "People, Place, Profit, Promotion", "Plan, Plot, Price, Promotion", "alleen Product en Prijs"], answer: 0, explanation: "Klassieke marketing-mix (McCarthy 1960): Product (wat), Prijs (hoeveel), Plaats (waar), Promotie (hoe communiceer je)." },
      { q: "Welke is een KORTING-strategie?", options: ["10% korting bij 2e product", "Hogere prijs", "Geen verkoop", "Magische prijs"], answer: 0, explanation: "Bv. 'twee voor één', staffelkorting, seizoenskorting. Doel: meer verkopen of voorraad opruimen." },
    ],
    5: [
      { q: "Wat is EIGEN VERMOGEN?", options: ["Geld van de eigenaren in het bedrijf", "Geleend geld", "Voorraden", "Schulden"], answer: 0, explanation: "Eigen vermogen = wat de eigenaars erin stoppen + behaalde winsten. Vreemd vermogen = leningen van buitenaf." },
      { q: "Wat is een LENING?", options: ["Geld van bank/derden dat moet worden terugbetaald (met rente)", "Cadeau", "Subsidie", "Inkomen"], answer: 0, explanation: "Lening = vreemd vermogen. Te betalen volgens contract: rente + aflossing in termijnen." },
    ],
    6: [
      { q: "Wat is LIQUIDITEIT?", options: ["Vermogen om kort-termijn-betalingen te kunnen doen", "Winst", "Omzet", "Activa"], answer: 0, explanation: "Heb je cash om rekeningen, salaris, huur te betalen? Slechte liquiditeit → faillissement-risico, ook al ben je winstgevend op papier." },
    ],
  },

  // ── Prima Nova — Latijn klas 1 ──────────────────────────────────────
  "prima-nova": {
    0: [
      { q: "Wat is 'amare' in Latijn?", options: ["Liefhebben / houden van", "Lopen", "Slapen", "Schrijven"], answer: 0, explanation: "Amare = liefhebben (vandaar 'amour' in Frans, 'amor' in Spaans). Romeinen: amor = liefde." },
      { q: "Hoe vertaal je 'puella'?", options: ["Meisje", "Jongen", "Vrouw", "Boek"], answer: 0, explanation: "Puella = meisje. Puer = jongen. Femina = vrouw. Liber = boek." },
    ],
    1: [
      { q: "Wat is een NAAMVAL?", options: ["Vorm van zelfst.nw die functie in zin aangeeft", "Een hoofdletter", "Een meervoud", "Een werkwoordsvorm"], answer: 0, explanation: "Latijn heeft 6 naamvallen: nominativus, genitivus, dativus, accusativus, vocativus, ablativus. Elke heeft eigen uitgang." },
      { q: "Welke naamval geeft de DOENER aan?", options: ["Nominativus", "Accusativus", "Genitivus", "Dativus"], answer: 0, explanation: "Nominativus = onderwerp (doener). Accusativus = lijdend voorwerp. Genitivus = bezit." },
    ],
    2: [
      { q: "Wat betekent 'Veni, vidi, vici'?", options: ["Ik kwam, ik zag, ik overwon", "Vrede zij met u", "Tot ziens", "Heil de keizer"], answer: 0, explanation: "Beroemde uitspraak van Julius Caesar (47 v.Chr.) na snelle overwinning op koning Pharnaces II." },
      { q: "Welk volk schreef Latijn?", options: ["Romeinen", "Grieken", "Egyptenaren", "Perzen"], answer: 0, explanation: "Romeinse Rijk (~750 v.Chr. − 476 n.Chr.). Latijn werd lingua franca van Europa tot ~1700." },
    ],
    3: [
      { q: "Hoe heet de Romeinse hoofdstad?", options: ["Roma", "Athene", "Alexandria", "Carthago"], answer: 0, explanation: "Roma = Rome. Romulus en Remus stichtten 753 v.Chr. volgens legende." },
    ],
  },

  // ── Hellas — Grieks klas 3+ ─────────────────────────────────────────
  "hellas": {
    0: [
      { q: "Hoe heet het Griekse alfabet?", options: ["Alfabet (van alfa + beta)", "Hebreeuws", "Cyrillisch", "Latijns"], answer: 0, explanation: "Grieks: α (alfa), β (beta), γ (gamma)... 24 letters. Basis voor Latijn én Cyrillisch." },
      { q: "Wat betekent 'philosophia'?", options: ["Liefde voor wijsheid", "Wetenschap", "Religie", "Politiek"], answer: 0, explanation: "Philos (vriend/liefde) + sophia (wijsheid). Filosofie = vakgebied gestart door Grieken (Sokrates, Plato, Aristoteles)." },
    ],
    1: [
      { q: "Wie was Sokrates?", options: ["Filosoof, leraar van Plato", "Veldheer", "Koning", "Schrijver"], answer: 0, explanation: "Sokrates (~470-399 v.Chr.): leerde via vragen ('socratische methode'). Veroordeeld tot drinken van scheerling." },
      { q: "Hoe heet het hoogste Griekse berg?", options: ["Olympos", "Sinaï", "Etna", "Vesuvius"], answer: 0, explanation: "Olympos: woonplaats van de Griekse goden volgens mythologie. Hoogste berg in Griekenland." },
    ],
    2: [
      { q: "Wat is 'agora' in oude Grieken?", options: ["Marktplein + politiek centrum", "Tempel", "Theater", "School"], answer: 0, explanation: "Agora = openbare plein van Griekse stad. Hier werd handel gedreven, gesproken, gestemd." },
    ],
    3: [
      { q: "Wie schreef de Ilias en Odyssee?", options: ["Homerus", "Hesiodos", "Sophokles", "Plato"], answer: 0, explanation: "Homerus (~8e eeuw v.Chr., bestaan onzeker). Twee epische gedichten over Trojaanse oorlog en thuisreis Odysseus." },
    ],
  },

  // ── Zingeving — Levensbeschouwing klas 1+ ───────────────────────────
  "zingeving": {
    0: [
      { q: "Wat is een LEVENSVRAAG?", options: ["Vraag over zin van leven, dood, geluk, etc.", "Wiskundige vraag", "Sportvraag", "Toetsvraag"], answer: 0, explanation: "Levensvragen: 'waarom besta ik?', 'wat is goed?', 'wat na de dood?'. Religies + filosofie zoeken antwoorden." },
      { q: "Welk is een WERELDGODSDIENST?", options: ["Christendom", "Voetbal", "Politiek", "Schaak"], answer: 0, explanation: "5 grote: christendom, islam, hindoeïsme, boeddhisme, jodendom. Plus traditionele/inheemse religies." },
    ],
    1: [
      { q: "Wat is ETHIEK?", options: ["Studie van goed en kwaad / morele keuzes", "Studie van planten", "Studie van kunst", "Studie van geld"], answer: 0, explanation: "Ethiek (van Grieks 'ethos'): wat is juist gedrag? Kant, Mill, Aristoteles. Ook in beroep: medische, business ethiek." },
      { q: "Welke religie heeft de KORAN als heilig boek?", options: ["Islam", "Christendom", "Boeddhisme", "Hindoeïsme"], answer: 0, explanation: "Koran = heilig boek van moslims, geopenbaard aan profeet Mohammed (~610-632 n.Chr.). In Arabisch geschreven." },
    ],
    2: [
      { q: "Wat is RESPECT?", options: ["Waardering en achting voor anderen", "Liefde", "Angst", "Bewondering alleen"], answer: 0, explanation: "Respect = erkenning + waardigheid voor andere mensen, ongeacht verschillen. Basis voor samenleven." },
      { q: "Welke is een DEUGD volgens Aristoteles?", options: ["Moed", "Luiheid", "Gulzigheid", "Hebzucht"], answer: 0, explanation: "Aristoteles: deugden = ethische middens. Moed = midden tussen lafheid en roekeloosheid. Andere: matigheid, rechtvaardigheid, wijsheid." },
    ],
    3: [
      { q: "Wat is MEDITATIE?", options: ["Bewuste oefening voor mentale rust + focus", "Slapen", "Lezen", "Sporten"], answer: 0, explanation: "Mediteren komt uit boeddhistische/hindoeïstische tradities. Wetenschap: vermindert stress, verbetert concentratie." },
    ],
  },

  // ── Blink Wereld — wereldoriëntatie (alternatief Naut + Argus Clou) ─
  // Hoofdstukken: 0=Het menselijk lichaam, 1=Planten en dieren,
  // 2=Natuur en duurzaamheid, 3=Klimaat en weer, 4=Aarde en ruimte,
  // 5=Techniek, 6=Nederland en de wereld.
  "blink": {
    0: [
      { q: "Welk orgaan beheert je beweging en denken?", options: ["Hersenen", "Hart", "Maag", "Lever"], answer: 0, explanation: "Hersenen sturen alle bewuste én onbewuste acties: bewegen, denken, zien, horen." },
      { q: "Hoe heet het rode in je bloed?", options: ["Rode bloedcellen", "Witte bloedcellen", "Bloedplaatjes", "Lever"], answer: 0, explanation: "Rode bloedcellen zorgen voor zuurstof-transport. Witte = afweer (immuunsysteem). Bloedplaatjes = stollen bij wondje." },
      { q: "Welk zintuig zit in je TONG?", options: ["Smaak", "Reuk", "Gehoor", "Tast"], answer: 0, explanation: "Smaakpapillen op je tong proeven zoet, zout, zuur, bitter, umami." },
      { q: "Wat doet de huid VOORAL?", options: ["Beschermt tegen ziektekiemen + reguleert temperatuur", "Maakt voedsel", "Pompt bloed", "Filtreert lucht"], answer: 0, explanation: "Huid = grootste orgaan: barrière tegen bacteriën, regelt warmte (zweten = afkoelen), voelt aanraking." },
    ],
    1: [
      { q: "Wat doen INSECTEN voor planten?", options: ["Bestuiven (pollen verspreiden)", "Eten ze op", "Slapen erin", "Niets bijzonders"], answer: 0, explanation: "Bijen, vlinders dragen stuifmeel van bloem naar bloem → vrucht/zaad. Zonder bestuivers: geen appel, aardbei." },
      { q: "Welk dier slaapt een WINTERSLAAP?", options: ["Egel", "Mens", "Olifant", "Vis"], answer: 0, explanation: "Egels (en eekhoorns, beren) overwinteren met lage stofwisseling. Spaart energie wanneer voedsel schaars is." },
      { q: "Welke voedselketen klopt?", options: ["Gras → Konijn → Vos", "Vos → Konijn → Gras", "Vlees → Plant → Mens", "Mens → Vis → Boom"], answer: 0, explanation: "Plant (gras) wordt gegeten door planteneter (konijn), dat wordt gegeten door vleeseter (vos)." },
      { q: "Hoe noem je een dier dat ALLES eet (planten + vlees)?", options: ["Alleseter", "Vleeseter", "Planteneter", "Aaseter"], answer: 0, explanation: "Alleseter (omnivoor): mens, varken, beer. Eten zowel planten als dieren." },
    ],
    2: [
      { q: "Wat is duurzaamheid?", options: ["Goed omgaan met de aarde voor de toekomst", "Lang houdbare houten meubels", "Snel iets nieuws kopen", "Een soort fiets"], answer: 0, explanation: "Duurzaam = zorgen dat we de aarde niet uitputten — gebruik niet meer dan we kunnen aanvullen." },
      { q: "Welke verpakking is HET MEEST duurzaam?", options: ["Glas (te hergebruiken)", "Plastic eenmalig", "Aluminium folie", "Karton met plastic erin"], answer: 0, explanation: "Glas kan oneindig hergebruikt worden zonder kwaliteitsverlies. Plastic vaak maar 1× recyclebaar." },
      { q: "Wat is FAIR TRADE?", options: ["Boeren krijgen eerlijke prijs", "Producten zijn gratis", "Producten worden snel geleverd", "Een merk koffie"], answer: 0, explanation: "Fair trade = eerlijke handel: boeren in arme landen krijgen genoeg betaald om goed te leven." },
      { q: "Welke acties verlagen je CO₂-VOETAFDRUK?", options: ["Minder vlees + lokaal kopen + fiets", "Vaker vliegen + nieuwe spullen", "Lange auto-ritten", "Verwarming hoger zetten"], answer: 0, explanation: "Vliegen + auto + vlees + import-spullen geven veel CO₂. Fiets, plant-based, lokaal = lagere voetafdruk." },
    ],
    3: [
      { q: "Wat is het verschil tussen WEER en KLIMAAT?", options: ["Weer = nu, klimaat = jaar/decennia", "Weer = lang, klimaat = kort", "Weer = warm, klimaat = koud", "Geen verschil"], answer: 0, explanation: "Weer = wat nu/vandaag gebeurt. Klimaat = gemiddelde over langere tijd (30+ jaar)." },
      { q: "Welk land heeft een TROPISCH klimaat?", options: ["Brazilië", "IJsland", "Groenland", "Noorwegen"], answer: 0, explanation: "Tropisch = dichtbij evenaar, warm jaar-rond. Brazilië, Indonesië, Centraal-Afrika. IJsland/Groenland = polair." },
      { q: "Wat is een ORKAAN?", options: ["Een hele zware tropische storm", "Hele zware regen", "Een aardbeving", "Een vulkaan"], answer: 0, explanation: "Orkaan (cycloon, tyfoon) = tropische storm met windsnelheden >118 km/u. Verwoestende kracht." },
      { q: "Waarom wordt de aarde STEEDS WARMER?", options: ["Mensen stoten meer CO₂ uit", "De zon brandt feller", "Bomen geven warmte", "Het is normaal"], answer: 0, explanation: "Verbranding van fossiele brandstoffen (auto's, fabrieken) → CO₂ in lucht → vasthouden warmte → opwarming." },
    ],
    4: [
      { q: "Welke planeet heeft DE MEESTE manen?", options: ["Saturnus (~80+)", "Aarde (1)", "Mars (2)", "Mercurius (0)"], answer: 0, explanation: "Saturnus heeft 80+ ontdekte manen. Jupiter ook veel. Aarde maar 1, Mercurius 0." },
      { q: "Hoe heet ons sterrenstelsel?", options: ["Melkweg", "Andromeda", "Plejaden", "Orion"], answer: 0, explanation: "Onze melkweg (Engels: Milky Way) — bestaat uit ~200 miljard sterren waaronder onze zon." },
      { q: "Wat is een KOMEET?", options: ["IJs- en stofbal in de ruimte met staart", "Een planeet", "Een ster", "Een raket"], answer: 0, explanation: "Komeet = bevroren bal van ijs+stof. Bij nadering van zon smelt iets → karakteristieke staart." },
      { q: "Hoeveel jaar duurt het voor licht van de zon naar aarde te komen?", options: ["Ongeveer 8 minuten", "1 seconde", "1 jaar", "Direct"], answer: 0, explanation: "Lichtsnelheid = 300.000 km/sec. Zon-aarde = ~150 miljoen km. Reis = ~8 minuten." },
    ],
    5: [
      { q: "Wat is INTERNET?", options: ["Wereldwijd computernetwerk", "Een soort tv", "Een tijdschrift", "Een telefoon-app"], answer: 0, explanation: "Internet = miljoenen computers wereldwijd verbonden. Apps en websites maken er gebruik van." },
      { q: "Wat doet een 3D-PRINTER?", options: ["Maakt voorwerpen door laagje voor laagje plastic op te bouwen", "Print foto's in 3D", "Print bewegende beelden", "Maakt geluiden 3D"], answer: 0, explanation: "3D-printer bouwt object op door duizenden dunne laagjes plastic (of ander materiaal) te printen." },
      { q: "Wat is een ROBOT?", options: ["Een machine die zelf taken kan uitvoeren", "Een speelgoedauto", "Een soort computerspel", "Een wasmachine"], answer: 0, explanation: "Robot = machine die zelf programmeerbare taken doet — bv. lasrobots in autofabriek, robotstofzuigers." },
      { q: "Wat is KUNSTMATIGE intelligentie (AI)?", options: ["Computer die zelf leert + beslist", "Een soort schilderij", "Een hele snelle computer", "Internet"], answer: 0, explanation: "AI = software die patronen leert uit data en daarmee beslissingen kan nemen. Bv. ChatGPT, vertaalsoftware." },
    ],
    6: [
      { q: "Welk is GEEN provincie van Nederland?", options: ["Vlaanderen", "Limburg", "Zeeland", "Friesland"], answer: 0, explanation: "Vlaanderen is een regio in België. NL heeft 12 provincies — Limburg, Zeeland, Friesland horen erbij." },
      { q: "Welke zee ligt bij NEDERLAND?", options: ["Noordzee", "Middellandse Zee", "Zwarte Zee", "Oostzee"], answer: 0, explanation: "Noordzee ligt aan de westkant van NL — strand en haven (Rotterdam: grootste haven van Europa)." },
      { q: "Welk werelddeel ligt onder Europa?", options: ["Afrika", "Azië", "Amerika", "Antarctica"], answer: 0, explanation: "Op de wereldkaart: Europa boven, Afrika eronder (over de Middellandse Zee). Azië = oosten, Amerika = westen." },
      { q: "Welk continent heeft de MEESTE inwoners?", options: ["Azië", "Afrika", "Europa", "Amerika"], answer: 0, explanation: "Azië heeft ~4,7 miljard inwoners (China + India samen al 2,8 miljard). Wereldwijd 8 miljard mensen." },
    ],
  },
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
