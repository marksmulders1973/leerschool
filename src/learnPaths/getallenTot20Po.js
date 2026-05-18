// Leerpad: Getallen tot 20 + optellen/aftrekken — groep 3-4 PO.
// Basisbouwsteen rekenen, ontbrak nog in Leerkwartier.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  blauw: "#1565c0",
  groen: "#00897b",
  oranje: "#ef6c00",
  goud: "#ffd54f",
};

const stepEmojis = ["🔢", "➕", "➖", "🔟", "🏆"];

const chapters = [
  { letter: "A", title: "Getallen 0-20 herkennen", emoji: "🔢", from: 0, to: 0 },
  { letter: "B", title: "Optellen tot 10", emoji: "➕", from: 1, to: 1 },
  { letter: "C", title: "Aftrekken tot 10", emoji: "➖", from: 2, to: 2 },
  { letter: "D", title: "Sommen tot 20", emoji: "🔟", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Getallen 0-20 ─────────────────────────────────────
  {
    title: "Getallen 0 t/m 20 — herkennen en tellen",
    explanation:
      "Voor groep 3 is **getalbegrip 0-20** de basis van alle rekenen.\n\n**Tellen**:\n• 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.\n• 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.\n• Belangrijk: 11 en 12 zijn **uitzondering** (geen 'tienpunteen' of 'eenentien').\n\n**Cijfer vs hoeveelheid**:\n• **Cijfer** = teken: 5, 7, 12.\n• **Hoeveelheid** = aantal dingen: ●●●●● = 5 stippen.\n\n**Tien-structuur**:\n• Onze getallen werken in **groepen van tien**.\n• 13 = 1 tiental + 3 eenheden = 10 + 3.\n• 17 = 1 tiental + 7 eenheden = 10 + 7.\n\n**Onthoud**:\n• 'Tien' is een speciale stop — daar begint elk nieuw rij.\n• Na 20: 21, 22, 23 etc.",
    checks: [
      {
        q: "Welk getal komt **na 7**?",
        options: ["8","6","9","10"],
        answer: 0,
        wrongHints: [null, "Dat komt VOOR 7.", "Dat komt na 8, niet direct na 7.", "Dat komt 3 verder dan 7."],
        uitlegPad: {
          stappen: [{ titel: "Tellen op", tekst: "Telrij: 5, 6, **7, 8**, 9, 10. Na 7 komt 8." }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Tel mee: 1-2-3-4-5-6-**7**-**8**-9-10." }],
          basiskennis: [{ onderwerp: "Telrij", uitleg: "Elke keer 1 erbij = volgend getal." }],
          niveaus: { basis: "8 komt na 7. A.", simpeler: "Tel op: 7 → 8. A.", nogSimpeler: "8 = A." },
        },
      },
      {
        q: "Hoeveel stippen zijn dit: **● ● ● ● ●**?",
        options: ["5","4","6","10"],
        answer: 0,
        wrongHints: [null, "Tel nog eens: 1-2-3-4-**5**.", "Te veel — er staan er minder.", "Veel te veel."],
        uitlegPad: {
          stappen: [{ titel: "Tellen", tekst: "Tel elke stip met je vinger: 1, 2, 3, 4, 5. Vijf stippen → cijfer 5." }],
          niveaus: { basis: "5 stippen. A.", simpeler: "Tel mee: 1-2-3-4-5. A.", nogSimpeler: "5 = A." },
        },
      },
      {
        q: "Welk getal is **kleiner**: 8 of 12?",
        options: ["8","12","Even groot","Kan niet vergelijken"],
        answer: 0,
        wrongHints: [null, "Dat is groter — 12 komt later in telrij.", "Niet — 8 en 12 zijn verschillend.", "Wel — telrij geeft volgorde."],
        uitlegPad: {
          stappen: [{ titel: "In telrij", tekst: "8 komt EERDER dan 12 in telrij (1-2-3-4-5-6-7-**8**-9-10-11-**12**). Eerder = kleiner." }],
          woorden: [{ woord: "kleiner", uitleg: "Minder dan iets anders." }],
          niveaus: { basis: "8 < 12. A.", simpeler: "8 komt eerst, dus 8 is kleiner. A.", nogSimpeler: "8 = A." },
        },
      },
      {
        q: "Welk getal komt **tussen 14 en 16**?",
        options: ["15","13","17","20"],
        answer: 0,
        wrongHints: [null, "Dat komt VOOR 14.", "Dat komt NA 16.", "Veel te ver."],
        uitlegPad: {
          stappen: [{ titel: "Telrij hoge getallen", tekst: "...13, 14, **15**, 16, 17... Tussen 14 en 16 zit 15." }],
          niveaus: { basis: "15 tussen 14 en 16. A.", simpeler: "14 → 15 → 16. A.", nogSimpeler: "15 = A." },
        },
      },
      {
        q: "Wat is **20** = 10 + ?",
        options: ["10","8","5","12"],
        answer: 0,
        wrongHints: [null, "10 + 8 = 18, niet 20.", "10 + 5 = 15.", "10 + 12 = 22."],
        uitlegPad: {
          stappen: [{ titel: "Tientallen + eenheden", tekst: "20 = 2 tientallen = 10 + 10. Twee tientallen samen = 20." }],
          theorie: "Cito-onthouden: 20 is bijzonder = 2 keer 10.",
          niveaus: { basis: "10 + 10 = 20. A.", simpeler: "Twee tientallen = 20. A.", nogSimpeler: "10 = A." },
        },
      },
    ],
  },

  // ─── B. Optellen tot 10 ───────────────────────────────────
  {
    title: "Optellen tot 10 — handig splitsen",
    explanation:
      "**Optellen** = erbij doen.\n\n**Splitsen helpt**:\n• 5 = 1+4 = 2+3 = 0+5.\n• 10 = 1+9 = 2+8 = 3+7 = 4+6 = 5+5 = 6+4 = 7+3 = 8+2 = 9+1.\n\n**Dubbele** (super handig om snel uit te rekenen):\n• 1+1=2, 2+2=4, 3+3=6, 4+4=8, 5+5=10.\n• Onthoud deze — dan kun je sommen erom heen ook snel.\n\n**Truc 'bijna dubbele'**:\n• 4+5 = (4+4) + 1 = 8 + 1 = 9.\n• 3+4 = (3+3) + 1 = 6 + 1 = 7.\n\n**Plus 1, plus 2**:\n• X + 1 = volgend getal. 6 + 1 = 7. Heel snel.\n• X + 2 = volgende-volgende. 6 + 2 = 8.\n\n**Truc plus 0**:\n• X + 0 = X. 7 + 0 = 7. Niets erbij.\n\n**Volgorde maakt niet uit**:\n• 3 + 5 = 5 + 3 = 8. **Wisselen mag**.\n• Tip: zet **grootste getal eerst** en tel op met kleinste.",
    checks: [
      {
        q: "**5 + 3** = ?",
        options: ["8","7","9","6"],
        answer: 0,
        wrongHints: [null, "Te weinig — 5 + 3, niet 5 + 2.", "Te veel — dat is 5 + 4.", "Te weinig — dat is 5 + 1."],
        uitlegPad: {
          stappen: [{ titel: "Tel door", tekst: "5 + 3 → vanaf 5 nog 3 erbij: 6, 7, **8**. Of: 5 + 3 = 5 + 5 - 2 = 10 - 2 = 8." }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Begin bij 5, tel verder: 5 → 6 (+1) → 7 (+2) → 8 (+3) ✓." }],
          niveaus: { basis: "5 + 3 = 8. A.", simpeler: "Tel vanaf 5: 6, 7, 8. A.", nogSimpeler: "8 = A." },
        },
      },
      {
        q: "Welk **dubbele**-getal is **4 + 4**?",
        options: ["8","6","7","9"],
        answer: 0,
        wrongHints: [null, "Te weinig — dubbele van 3.", "Onmogelijk — dubbele is altijd even.", "Onmogelijk."],
        uitlegPad: {
          stappen: [{ titel: "Dubbele = 2x zelfde", tekst: "4 + 4 = **8**. Even getal want je telt 2 keer hetzelfde. Onthoud lijstje: 1+1=2, 2+2=4, 3+3=6, 4+4=**8**, 5+5=10." }],
          niveaus: { basis: "4 + 4 = 8. A.", simpeler: "Dubbele 4 = 8. A.", nogSimpeler: "8 = A." },
        },
      },
      {
        q: "Welke twee getallen zijn samen **10**?",
        options: ["6 + 4","5 + 4","7 + 4","3 + 6"],
        answer: 0,
        wrongHints: [null, "5 + 4 = 9, niet 10.", "7 + 4 = 11.", "3 + 6 = 9."],
        uitlegPad: {
          stappen: [{ titel: "Tientallen-buurman", tekst: "6 + 4 = 10. Onthoud: 10 = 6+4 (buurman-paar), 7+3, 8+2, 9+1, 5+5. Allemaal samen 10." }],
          theorie: "Cito-truc: 'Welke maakt 10?' kennis = essentieel voor groep 3-4. Oefen lijstje 'tientallen-paren'.",
          niveaus: { basis: "6 + 4 = 10. A.", simpeler: "6 en 4 samen = 10. A.", nogSimpeler: "6+4 = A." },
        },
      },
      {
        q: "**7 + 0** = ?",
        options: ["7","8","0","1"],
        answer: 0,
        wrongHints: [null, "Te veel — er kwam niets bij.", "Te weinig — 7 staat al voor 'plus 0'.", "Te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Plus 0 = niets erbij", tekst: "**+0 = blijft hetzelfde**. 7 + 0 = 7. 100 + 0 = 100. Altijd zo." }],
          theorie: "Wiskundig: 0 is 'neutraal' bij optellen. Bij vermenigvuldigen anders (X × 0 = 0).",
          niveaus: { basis: "7. A.", simpeler: "Plus 0 = niets erbij. A.", nogSimpeler: "7 = A." },
        },
      },
      {
        q: "**3 + 7** is hetzelfde als ___ + 3?",
        options: ["7","10","3","4"],
        answer: 0,
        wrongHints: [null, "Dat is uitkomst, niet vraag.", "Niet — dat is hetzelfde.", "Niet — dat is uitkomst van iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Wisselen mag", tekst: "Bij optellen: **volgorde maakt niet uit**. 3 + 7 = 7 + 3 = 10. Wisselen heet 'commutatief'. Maakt sommen vaak makkelijker." }],
          woorden: [{ woord: "wisselen", uitleg: "Getallen verwisselen — bij plus altijd OK." }],
          theorie: "Tip: zet grootste getal vooraan, tel kleinste erbij. 3 + 7 = 7 + 3. Vanaf 7 tellen: 8, 9, 10.",
          niveaus: { basis: "7 + 3 = 3 + 7 = 10. A.", simpeler: "Volgorde mag wisselen. A.", nogSimpeler: "7 = A." },
        },
      },
    ],
  },

  // ─── C. Aftrekken tot 10 ──────────────────────────────────
  {
    title: "Aftrekken tot 10 — eraf halen",
    explanation:
      "**Aftrekken** = eraf halen. Tegenovergesteld van optellen.\n\n**Tellen-omlaag**:\n• 8 - 3 → begin bij 8, tel terug: 7, 6, **5**.\n• 6 - 2 → 5, **4**.\n\n**Familie-sommen**:\n• Als je 3 + 4 = 7 weet, weet je ook 7 - 3 = 4 en 7 - 4 = 3.\n• Eén optelsom + twee aftreksommen = **één familie**.\n\n**Min 0** = blijft hetzelfde:\n• 8 - 0 = 8. Niets eraf.\n\n**Iets - zichzelf** = 0:\n• 7 - 7 = 0. Alles eraf = niets over.\n\n**Cito-truc bijna-dubbele**:\n• 9 - 4 = (10 - 4) - 1 = 6 - 1 = 5.\n• Of: 9 - 4 = 5 (want 4 + 5 = 9).\n\n**LET OP**: **volgorde maakt WEL uit** bij aftrekken!\n• 5 - 3 = 2 ✓.\n• 3 - 5 = ?? → 'negatief', leren we later. Voor groep 3-4: niet doen.\n\n**Cito-truc 'verschil'**:\n• 'Wat is het **verschil** tussen 8 en 3?' → 8 - 3 = 5.\n• Verschil = altijd aftrekken (groot min klein).",
    checks: [
      {
        q: "**6 - 2** = ?",
        options: ["4","8","3","5"],
        answer: 0,
        wrongHints: [null, "Te veel — dat is 6 + 2.", "Te weinig — dat is 6 - 3.", "Te veel — dat is 6 - 1."],
        uitlegPad: {
          stappen: [{ titel: "Tel terug", tekst: "6 - 2 → vanaf 6 twee stappen terug: 5, **4**. Of: 6 = 4 + 2, dus 6 - 2 = 4." }],
          niveaus: { basis: "6 - 2 = 4. A.", simpeler: "Tel terug vanaf 6: 5, 4. A.", nogSimpeler: "4 = A." },
        },
      },
      {
        q: "**10 - 7** = ?",
        options: ["3","4","2","5"],
        answer: 0,
        wrongHints: [null, "Te veel — 10 = 6+4, dus 10-7 ≠ 4.", "Te weinig — dat is 10-8.", "Te veel — dat is 10-5."],
        uitlegPad: {
          stappen: [{ titel: "Tientallen-buurman", tekst: "10 - 7 = 3 (want 7 + 3 = 10, dus 10 - 7 = 3). **Familie-som**." }],
          theorie: "Cito-truc: '10 min iets' is **buurman van dat iets** dat samen 10 maakt.",
          niveaus: { basis: "10 - 7 = 3. A.", simpeler: "10 - 7 = 3 (want 7+3=10). A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "Wat is het **verschil** tussen **8 en 3**?",
        options: ["5","11","2","6"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 8 + 3.", "Te weinig — bijna goed maar tel nog eens.", "Te veel — dat is 8 - 2."],
        uitlegPad: {
          stappen: [{ titel: "Verschil = aftrekken", tekst: "**Verschil** = groot min klein = 8 - 3 = **5**. Dus: 'wat is het verschil tussen X en Y?' altijd aftrekken." }],
          woorden: [{ woord: "verschil", uitleg: "Hoeveel meer/minder de ene is dan de ander." }],
          niveaus: { basis: "Verschil 8-3 = 5. A.", simpeler: "Verschil = groot - klein = 5. A.", nogSimpeler: "5 = A." },
        },
      },
      {
        q: "**9 - 9** = ?",
        options: ["0","1","9","18"],
        answer: 0,
        wrongHints: [null, "Te veel — alles eraf = niets over.", "Te veel.", "Niet — dat is plus."],
        uitlegPad: {
          stappen: [{ titel: "Iets - zichzelf = 0", tekst: "Als je alles eraf haalt blijft er niets over. 9 - 9 = **0**. Werkt voor elk getal: 5 - 5 = 0, 100 - 100 = 0." }],
          niveaus: { basis: "9 - 9 = 0. A.", simpeler: "Alles weg = 0. A.", nogSimpeler: "0 = A." },
        },
      },
      {
        q: "Vul in: **7 - ?** = 3",
        options: ["4","10","3","2"],
        answer: 0,
        wrongHints: [null, "Te veel — 7 - 10 zou negatief.", "Niet — dat is 7 - 4 = 3.", "Te weinig — 7 - 2 = 5."],
        uitlegPad: {
          stappen: [{ titel: "Familie-som omkeren", tekst: "7 - ? = 3 → wat moet er weg om 3 over te houden? 7 - **4** = 3. Familie: 3 + 4 = 7, dus 7 - 4 = 3 en 7 - 3 = 4." }],
          niveaus: { basis: "4. A.", simpeler: "7 - 4 = 3 = A.", nogSimpeler: "4 = A." },
        },
      },
    ],
  },

  // ─── D. Sommen tot 20 ─────────────────────────────────────
  {
    title: "Sommen tot 20 — over de 10 heen",
    explanation:
      "Voor groep 3-4 is **over de 10 heen rekenen** lastig.\n\n**Truc: maak eerst tien**:\n• 8 + 5 = ?\n• Stap 1: 8 + 2 = 10 (eerst 10 maken, splits 5 in 2 + 3).\n• Stap 2: 10 + 3 = 13.\n• Dus 8 + 5 = 13. ✓\n\n**Truc: splits het tweede getal**:\n• 7 + 6 = 7 + 3 + 3 = 10 + 3 = 13.\n• 9 + 5 = 9 + 1 + 4 = 10 + 4 = 14.\n\n**Aftrekken over 10**:\n• 13 - 5 = ?\n• Stap 1: 13 - 3 = 10 (eerst 10 maken).\n• Stap 2: 10 - 2 = 8.\n• Dus 13 - 5 = 8. ✓\n\n**Onthoud die '10' als rustpunt** — het tussenstap-getal.\n\n**Sommen 11-20**:\n• 11 = 10 + 1.\n• 14 = 10 + 4.\n• 17 = 10 + 7.\n• Dus 14 + 3 = (10+4) + 3 = 10 + 7 = 17. Eenvoudig.\n\n**Cito-truc redactiesom**:\n• 'Sam heeft 8 knikkers, krijgt 5 erbij. Hoeveel nu?'\n• Plus-som: 8 + 5 = 13.\n• Antwoord: 13 knikkers.",
    checks: [
      {
        q: "**8 + 5** = ?",
        options: ["13","12","14","15"],
        answer: 0,
        wrongHints: [null, "Te weinig — 8+4=12, niet 8+5.", "Te veel — dat is 8+6.", "Te veel — dat is 8+7."],
        uitlegPad: {
          stappen: [{ titel: "Maak eerst 10", tekst: "8 + 5 → splits 5 in 2 + 3. 8 + 2 = 10. 10 + 3 = **13**." }],
          voorbeelden: [{ type: "voorbeeld", tekst: "8 + 5 = 8 + 2 + 3 = 10 + 3 = 13 ✓." }],
          niveaus: { basis: "8+5 = 13. A.", simpeler: "8+2=10, 10+3=13. A.", nogSimpeler: "13 = A." },
        },
      },
      {
        q: "**15 - 7** = ?",
        options: ["8","9","7","6"],
        answer: 0,
        wrongHints: [null, "Te veel — 15-6=9.", "Te weinig — 15-8=7.", "Te weinig — 15-9=6."],
        uitlegPad: {
          stappen: [{ titel: "Eerst naar 10", tekst: "15 - 7 → splits 7 in 5 + 2. 15 - 5 = 10. 10 - 2 = **8**." }],
          niveaus: { basis: "15-7 = 8. A.", simpeler: "15-5=10, 10-2=8. A.", nogSimpeler: "8 = A." },
        },
      },
      {
        q: "**14 + 5** = ?",
        options: ["19","20","18","13"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te weinig — 14+4=18.", "Niet — dat is 14-1."],
        uitlegPad: {
          stappen: [{ titel: "Splits 14", tekst: "14 = 10 + 4. Dus 14 + 5 = 10 + 4 + 5 = 10 + 9 = **19**." }],
          theorie: "Of: 4 + 5 = 9, en dan 10 + 9 = 19. Hetzelfde resultaat.",
          niveaus: { basis: "14+5 = 19. A.", simpeler: "14+5 = 10+4+5 = 19. A.", nogSimpeler: "19 = A." },
        },
      },
      {
        q: "Tom heeft 9 stickers. Krijgt 4 erbij. Hoeveel nu?",
        options: ["13","12","14","5"],
        answer: 0,
        wrongHints: [null, "Te weinig — 9+3=12.", "Te veel — 9+5=14.", "Niet — dat is 9-4."],
        uitlegPad: {
          stappen: [{ titel: "Redactiesom = plus", tekst: "Krijgt 4 erbij → plus-som. 9 + 4 = 9 + 1 + 3 = 10 + 3 = **13**." }],
          theorie: "Cito-trucs voor redactiesom: zoek signaalwoorden. 'Krijgt erbij' = plus. 'Geeft weg' / 'verliest' = min.",
          niveaus: { basis: "9+4 = 13. A.", simpeler: "Plus-som: 9+4=13. A.", nogSimpeler: "13 = A." },
        },
      },
      {
        q: "**Welk getal komt eerst** in telrij: 13 of 17?",
        options: ["13","17","Tegelijk","Beide niet"],
        answer: 0,
        wrongHints: [null, "Niet — 17 komt later.", "Niet — verschillend.", "Wel — beide bestaan."],
        uitlegPad: {
          stappen: [{ titel: "Tellen 11-20", tekst: "Telrij: 11, 12, **13**, 14, 15, 16, **17**, 18, 19, 20. **13 komt eerst**." }],
          niveaus: { basis: "13. A.", simpeler: "13 < 17. A.", nogSimpeler: "13 = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — sommen door elkaar",
    explanation:
      "Mix van plus + min tot 20. Geen tijdslimiet — denk rustig na.\n\nVeel succes!",
    checks: [
      {
        q: "**6 + 7** = ?",
        options: ["13","12","14","11"],
        answer: 0,
        wrongHints: [null, "Te weinig — 6+6=12.", "Te veel — 6+8=14.", "Te weinig — 6+5=11."],
        uitlegPad: {
          stappen: [{ titel: "Maak 10", tekst: "6 + 7 = 6 + 4 + 3 = 10 + 3 = **13**." }],
          niveaus: { basis: "13. A.", simpeler: "6+7=13. A.", nogSimpeler: "13 = A." },
        },
      },
      {
        q: "**17 - 9** = ?",
        options: ["8","9","7","10"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te weinig.", "Te veel — 17-7=10."],
        uitlegPad: {
          stappen: [{ titel: "Familie-som", tekst: "17 - 9 = **8** (want 9 + 8 = 17). Of: 17 - 7 = 10, 10 - 2 = 8." }],
          niveaus: { basis: "8. A.", simpeler: "17-9 = 8. A.", nogSimpeler: "8 = A." },
        },
      },
      {
        q: "Hoeveel is **5 + 5 + 5**?",
        options: ["15","10","20","12"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 5+5.", "Te veel — 5+5+5+5.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Driemaal vijf", tekst: "5 + 5 = 10. 10 + 5 = **15**. Drie keer 5 = 15. Dit ga je later '5 × 3' noemen — vermenigvuldigen!" }],
          niveaus: { basis: "15. A.", simpeler: "5+5+5 = 15. A.", nogSimpeler: "15 = A." },
        },
      },
      {
        q: "Anna heeft 12 snoepjes. Eet er 4 op. Hoeveel over?",
        options: ["8","6","9","10"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel — 12-3=9.", "Te veel — 12-2=10."],
        uitlegPad: {
          stappen: [{ titel: "Eten op = min", tekst: "'Eet op' → min-som. 12 - 4 = 12 - 2 - 2 = 10 - 2 = **8**." }],
          niveaus: { basis: "12-4 = 8. A.", simpeler: "12-4 = 8 snoepjes over. A.", nogSimpeler: "8 = A." },
        },
      },
      {
        q: "Welk getal is **dubbel zo veel** als 6?",
        options: ["12","8","10","16"],
        answer: 0,
        wrongHints: [null, "Te weinig — dubbele van 4.", "Niet — dubbele van 5.", "Te veel — dubbele van 8."],
        uitlegPad: {
          stappen: [{ titel: "Dubbele 6", tekst: "Dubbele = 2x. 6 + 6 = **12**. Of: 2 × 6 = 12 (vermenigvuldigen later)." }],
          niveaus: { basis: "12. A.", simpeler: "Dubbele 6 = 12. A.", nogSimpeler: "12 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const getallenTot20Po = {
  id: "getallen-tot-20-po",
  title: "Getallen + sommen tot 20 (groep 3-4)",
  emoji: "🔢",
  level: "groep3-5",
  subject: "rekenen",
  referentieNiveau: "po-1F",
  sloThema: "Rekenen — getalbegrip + optellen/aftrekken tot 20 onderbouw",
  prerequisites: [],
  intro:
    "Eerste rekensommen — getallen 0 tot 20, plus en min, splitsen + dubbele + truc 'eerst tien maken'. Voor groep 3-4. ~15 min.",
  triggerKeywords: [
    "getallen tot 20", "sommen", "optellen", "aftrekken",
    "splitsen", "dubbele", "telrij",
    "groep 3", "groep 4", "rekenen basis",
    "verschil",
  ],
  chapters,
  steps,
};

export default getallenTot20Po;
