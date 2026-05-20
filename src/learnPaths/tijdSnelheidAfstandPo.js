// Leerpad: Tijd + Snelheid + Afstand — Cito groep 7-8 PO.
// Doorstroomtoets onderdeel rekenen. S = V × T verhoudingen.
// 5 stappen × ~5 checks. Referentieniveau 1F/1S.

const stepEmojis = ["⏰", "🏃", "📏", "🧮", "🏆"];

const chapters = [
  { letter: "A", title: "Tijd-eenheden + omrekenen", emoji: "⏰", from: 0, to: 0 },
  { letter: "B", title: "Snelheid-eenheden", emoji: "🏃", from: 1, to: 1 },
  { letter: "C", title: "Afstand berekenen (S=V·T)", emoji: "📏", from: 2, to: 2 },
  { letter: "D", title: "Snelheid + Tijd berekenen", emoji: "🧮", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht — praktijksommen", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Tijd-eenheden ────────────────────────────────────
  {
    title: "Tijd-eenheden — uren, minuten, seconden",
    explanation:
      "**Basis tijdseenheden**:\n• **Seconde (s)**: basis-eenheid.\n• **Minuut (min)** = 60 s.\n• **Uur (h)** = 60 min = 3600 s.\n• **Dag** = 24 h = 1440 min = 86 400 s.\n• **Week** = 7 dagen.\n• **Maand** = ~30 dagen (varieert).\n• **Jaar** = 365 dagen (366 schrikkeljaar).\n\n**Omrekenen**:\n• **Naar minuten** uit uren: × 60.\n• **Naar seconden** uit minuten: × 60.\n• **Naar uren** uit minuten: / 60.\n• **Naar minuten** uit seconden: / 60.\n\n**Voorbeelden**:\n• 2,5 uur = 2 h + 30 min = 150 min.\n• 90 min = 1,5 uur = 1 h + 30 min.\n• 180 s = 3 min.\n• 1,5 dag = 36 uur.\n\n**Cito-trick — tijdsspanne**:\nVan 14:30 tot 18:15.\n• Van 14:30 → 18:30 = 4 uur.\n• Maar einde is 18:15, dus 15 min minder.\n• Antwoord: 3 h 45 min.\n\n**Of stap-methode**:\n• 14:30 + 30 min → 15:00.\n• 15:00 + 3 h → 18:00.\n• 18:00 + 15 min → 18:15.\n• Totaal: 30 min + 3 h + 15 min = 3 h 45 min.\n\n**24-uur-klok vs 12-uur**:\n• 14:00 = 2 PM.\n• 23:30 = 11:30 PM.\n• 00:00 = middernacht.\n• 12:00 = middag.\n\n**Datum-rekenen**:\n• Hoeveel dagen tussen 15 maart en 20 mei?\n  - Maart: 31 - 15 = 16 dagen.\n  - April: 30 dagen.\n  - Mei: 20 dagen.\n  - Totaal: 16 + 30 + 20 = 66 dagen.\n\n**Maanden onthoud-truc**:\n'30 dagen heeft september, april, juni, november. Februari 28 dagen — 29 in schrikkeljaar. Andere 31.'\n\n**Schrikkeljaar**: deelbaar door 4 (uitzondering: deelbaar door 100 niet, tenzij door 400). Voorbeelden:\n• 2024 = schrikkeljaar (door 4).\n• 2100 = NIET schrikkel (door 100, niet door 400).\n• 2000 = WEL schrikkel (door 400).\n\n**Tijdzone**:\n• NL = UTC+1 (winter) of UTC+2 (zomer).\n• New York = UTC-5 (winter) — 6 uur achter NL.\n• Japan = UTC+9 — 8 uur voor NL (winter).",
    checks: [
      {
        q: "**2,5 uur** = hoeveel **minuten**?",
        options: ["150 min", "250 min", "120 min", "180 min"],
        answer: 0,
        wrongHints: [null, "Niet — controleer.", "Niet — dat is 2 uur.", "Niet — 3 uur."],
        uitlegPad: {
          stappen: [{ titel: "× 60", tekst: "2,5 × 60 = **150 min**. Of: 2 uur = 120 min, half uur = 30 min, samen 150 min." }],
          niveaus: { basis: "2,5×60=150. A.", simpeler: "Vermenigvuldig 60. A.", nogSimpeler: "150 = A." },
        },
      },
      {
        q: "Van **14:45 naar 17:20** — hoe lang?",
        options: ["2 h 35 min", "2 h 25 min", "3 h 5 min", "1 h 35 min"],
        answer: 0,
        wrongHints: [null, "Niet — tel goed na.", "Niet — onmogelijk.", "Niet — controleer."],
        uitlegPad: {
          stappen: [
            { titel: "Stap-methode", tekst: "14:45 + 15 min → 15:00.\n15:00 + 2 h → 17:00.\n17:00 + 20 min → 17:20.\nTotaal: 15 min + 2 h + 20 min = **2 h 35 min**." },
          ],
          niveaus: { basis: "2h35min. A.", simpeler: "Stap voor stap optellen. A.", nogSimpeler: "2:35 = A." },
        },
      },
      {
        q: "Hoeveel **dagen tussen 1 januari en 1 maart** (niet-schrikkeljaar)?",
        options: ["59 dagen", "60 dagen", "61 dagen", "58 dagen"],
        answer: 0,
        wrongHints: [null, "Niet — geen schrikkel.", "Niet.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Januari + februari", tekst: "Januari: 31 dagen. Februari (niet-schrikkel): 28 dagen. Totaal: 31 + 28 = **59 dagen**. (In schrikkeljaar 60.)" },
          ],
          niveaus: { basis: "31+28=59. A.", simpeler: "Jan + feb dagen. A.", nogSimpeler: "59 = A." },
        },
      },
      {
        q: "Een trein rijdt van **22:45 tot 02:30 's nachts**. Hoe lang?",
        options: ["3 h 45 min", "4 h 45 min", "20 h 15 min", "Onmogelijk"],
        answer: 0,
        wrongHints: [null, "Te lang.", "Onzin lange tijd.", "Wel — over middernacht."],
        uitlegPad: {
          stappen: [
            { titel: "Over middernacht", tekst: "22:45 + 15 min → 23:00.\n23:00 + 1 h → 00:00.\n00:00 + 2 h → 02:00.\n02:00 + 30 min → 02:30.\nTotaal: 15 min + 1 h + 2 h + 30 min = **3 h 45 min**.\n\nOf: 24:00 − 22:45 = 1 h 15 min vanaf start tot middernacht. + 2 h 30 min na middernacht = **3 h 45 min**." },
          ],
          niveaus: { basis: "3h45min. A.", simpeler: "Over middernacht splitsen. A.", nogSimpeler: "3:45 = A." },
        },
      },
      {
        q: "**1 dag** is hoeveel **seconden**?",
        options: ["86 400 s", "1440 s", "3600 s", "1 000 000 s"],
        answer: 0,
        wrongHints: [null, "Niet — dat is minuten.", "Niet — dat is 1 uur.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "24 × 60 × 60", tekst: "1 dag = 24 uur = 24 × 60 minuten = 1440 min = 1440 × 60 = **86 400 seconden**." }],
          niveaus: { basis: "24·3600=86400. A.", simpeler: "Uren × 3600. A.", nogSimpeler: "86 400 = A." },
        },
      },
    ],
  },

  // ─── B. Snelheid-eenheden ─────────────────────────────────
  {
    title: "Snelheid — km/h vs m/s",
    explanation:
      "**Snelheid** = afstand per tijd.\n\n**Twee belangrijkste eenheden**:\n• **km/h** (kilometer per uur): auto, fiets, lopen.\n• **m/s** (meter per seconde): natuurkunde, korte afstanden.\n\n**Omrekenen** (cruciaal!):\n\n**Van km/h naar m/s** (delen door 3,6):\nWaarom? 1 km = 1000 m. 1 uur = 3600 s.\n→ 1 km/h = 1000/3600 m/s = 1/3,6 m/s.\n• 36 km/h = 36/3,6 = 10 m/s.\n• 108 km/h = 30 m/s.\n• 18 km/h = 5 m/s.\n\n**Van m/s naar km/h** (× 3,6):\n• 5 m/s = 18 km/h.\n• 10 m/s = 36 km/h.\n• 25 m/s = 90 km/h.\n\n**Voorbeeld-snelheden onthoud**:\n• Lopen: ~5 km/h.\n• Fietsen: ~15-20 km/h.\n• Stadsverkeer auto: 50 km/h.\n• Snelweg: 100-130 km/h.\n• Trein NL-IC: 140 km/h.\n• Hoge-snelheidstrein: 300 km/h.\n• Vliegtuig: ~900 km/h (cruising).\n• Lichtsnelheid: 300 000 km/s = 1 080 000 000 km/h!\n\n**Gemiddelde snelheid**:\n• v_gem = totale afstand / totale tijd.\n• Voor onregelmatige reizen: meet hele afstand, meet hele tijd, deel.\n\nVoorbeeld:\n• Eerste uur 80 km, tweede uur 60 km.\n• v_gem = (80+60)/(1+1) = 140/2 = **70 km/h**.\n• Let op: NIET (80+60)/2 = 70 (klopt toevallig wel hier, maar werkt niet als tijden verschillen).\n\nVoorbeeld 2:\n• 100 km met 50 km/h, daarna 100 km met 100 km/h.\n• Tijd: 100/50 + 100/100 = 2 + 1 = 3 h.\n• Totaal: 200 km in 3 h → v_gem = **66,7 km/h** (NIET 75!).\n\n**Verkeer-borden**:\n• 30, 50, 70, 80, 100, 120, 130 km/h zijn standaard.\n• Boete-systeem: kilometer over snelheidsgrens, GPS, flits-paal.\n\n**Sport-snelheid**:\n• Usain Bolt 100m wereldrecord 9,58 s → 37,6 km/h gemiddeld.\n• Cheetah top-snelheid: 110 km/h.\n• Slak: 0,05 km/h.",
    checks: [
      {
        q: "**90 km/h** in m/s?",
        options: ["25 m/s", "50 m/s", "324 m/s", "9 m/s"],
        answer: 0,
        wrongHints: [null, "Niet — te veel.", "Te veel.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "÷ 3,6", tekst: "90 / 3,6 = **25 m/s**. Standaard auto-snelheid op snelweg." }],
          niveaus: { basis: "90÷3,6=25. A.", simpeler: "km/h gedeeld door 3,6. A.", nogSimpeler: "25 = A." },
        },
      },
      {
        q: "**12 m/s** in km/h?",
        options: ["43,2 km/h", "33 km/h", "3,3 km/h", "120 km/h"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Veel te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "× 3,6", tekst: "12 × 3,6 = **43,2 km/h**. Snelle fietser (recreatief 15-20, sportief 30-40)." }],
          niveaus: { basis: "12·3,6=43,2. A.", simpeler: "m/s keer 3,6 = km/h. A.", nogSimpeler: "43,2 = A." },
        },
      },
      {
        q: "Auto rijdt eerst 1 uur 60 km/h, dan 1 uur 90 km/h. **Gemiddelde snelheid**?",
        options: ["75 km/h", "70 km/h", "65 km/h", "85 km/h"],
        answer: 0,
        wrongHints: [null, "Niet — controleer.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Totale afstand / totale tijd", tekst: "1 h × 60 km/h = 60 km. 1 h × 90 km/h = 90 km. Totaal: 150 km in 2 h → 150/2 = **75 km/h**.\n\nNB: omdat tijden GELIJK zijn (beide 1 uur), is gem snelheid hier ook gemiddelde van twee snelheden ((60+90)/2 = 75). Bij ongelijke tijden werkt dat niet!" },
          ],
          niveaus: { basis: "75 km/h. A.", simpeler: "Optellen + delen 2. A.", nogSimpeler: "75 = A." },
        },
      },
      {
        q: "Een renner gaat **50 km met 25 km/h** + **50 km met 50 km/h**. Gemiddelde?",
        options: [
          "33,3 km/h (NIET 37,5!)",
          "37,5 km/h",
          "75 km/h",
          "25 km/h"
        ],
        answer: 0,
        wrongHints: [null, "Te veel — klassieke fout.", "Onzin.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Klassieke val", tekst: "Tijd 1: 50/25 = 2 h. Tijd 2: 50/50 = 1 h. Totaal: 100 km in 3 h → **33,3 km/h**.\n\n**Veel mensen dachten 37,5** ((25+50)/2). Maar dat klopt alleen bij gelijke TIJDEN, niet bij gelijke AFSTANDEN. Bij gelijke afstand telt langzame deel zwaarder (kost meer tijd)." },
          ],
          niveaus: { basis: "33,3 km/h. A.", simpeler: "Klein langzaam telt meer. A.", nogSimpeler: "33,3 = A." },
        },
      },
      {
        q: "**Lichtsnelheid** in vacuüm:",
        options: [
          "300 000 km/s",
          "300 000 km/h",
          "300 m/s",
          "Onbeperkt"
        ],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Veel te weinig.", "Niet — vaste grens."],
        uitlegPad: {
          stappen: [{ titel: "Constante c", tekst: "c = 299 792 458 m/s = **300 000 km/s** = 1 080 000 000 km/h. Niets sneller (Einstein). Licht zon → aarde: 8 min 20 s. Licht maan → aarde: 1,3 s." }],
          niveaus: { basis: "300 000 km/s. A.", simpeler: "Bijna 300 000 km per seconde. A.", nogSimpeler: "300k = A." },
        },
      },
    ],
  },

  // ─── C. Afstand berekenen ─────────────────────────────────
  {
    title: "Afstand berekenen — S = V × T",
    explanation:
      "**Hoofdformule**: **Afstand = Snelheid × Tijd** (S = V × T).\n\nVoorbeeld:\n• Snelheid 80 km/h, tijd 3 uur.\n• Afstand = 80 × 3 = **240 km**.\n\n**Eenheden moeten matchen!**\n• Snelheid km/h + tijd in uur → afstand in km.\n• Snelheid m/s + tijd in seconden → afstand in m.\n• Snelheid km/h + tijd in minuten → eerst tijd → uren omrekenen.\n\n**Voorbeeld** met conversie:\n• Snelheid 60 km/h, tijd 30 minuten.\n• 30 min = 0,5 h.\n• Afstand = 60 × 0,5 = **30 km**.\n\n**Of**: 60 km/h = 1 km/min. → 30 km in 30 min.\n\n**Praktijk-sommen**:\n\n**Som 1**: Auto rijdt 1 h 45 min met 80 km/h. Afstand?\n• 1 h 45 min = 1,75 h.\n• 80 × 1,75 = **140 km**.\n\n**Som 2**: Trein 120 km/h. In 20 min?\n• 20 min = 1/3 h.\n• 120 × 1/3 = **40 km**.\n\n**Som 3**: Fietser 18 km/h. Afstand in 45 min?\n• 45 min = 0,75 h.\n• 18 × 0,75 = **13,5 km**.\n\n**Combineren met andere maten**:\n\n**Som 4**: Bal rolt 5 m/s. In 12 seconden?\n• 5 × 12 = **60 m**.\n\n**Som 5**: Vliegtuig 900 km/h. Hoeveel km in 30 min?\n• 30 min = 0,5 h.\n• 900 × 0,5 = **450 km**.\n\n**Cito-truc grafieken**:\n• v-t-grafiek (snelheid horizontaal-tijd):\n  - Bij CONSTANTE snelheid: horizontale lijn.\n  - **Oppervlakte onder curve = afgelegde afstand**.\n• s-t-grafiek (positie-tijd):\n  - Bij constante snelheid: rechte lijn met helling.\n  - **Helling = snelheid**.\n  - Vlakke lijn = stilstand.\n\n**Voorbeeld grafiek-vraag**:\nAuto rijdt 1 h met 60 km/h, daarna 1 h met 100 km/h. v-t-grafiek?\n• Twee horizontale lijnen: op 60 km/h (0-1h), op 100 km/h (1-2h).\n• Oppervlakte = 60×1 + 100×1 = 160 km.\n\n**Veelgemaakte fout**:\n• Tijden in verschillende eenheden niet matchen.\n• Vergeet de eenheid bij antwoord (km, niet alleen 240).\n• Snelheid km/u verwarren met km of m/s.",
    checks: [
      {
        q: "Auto rijdt **3 uur met 90 km/h**. Afstand?",
        options: ["270 km", "30 km", "93 km", "180 km"],
        answer: 0,
        wrongHints: [null, "Niet — dat is afstand/tijd.", "Niet — verkeerde rekening.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "S = V·T", tekst: "90 × 3 = **270 km**. Eenheid km (snelheid km/h × tijd h)." }],
          niveaus: { basis: "90·3=270. A.", simpeler: "Snelheid × tijd. A.", nogSimpeler: "270 = A." },
        },
      },
      {
        q: "Fietser **20 km/h** rijdt **15 minuten**. Afstand?",
        options: ["5 km", "300 km", "20 km", "15 km"],
        answer: 0,
        wrongHints: [null, "Niet — minuten omzetten.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst tijd → uur", tekst: "15 min = 15/60 h = 0,25 h.\nAfstand = 20 × 0,25 = **5 km**." },
          ],
          niveaus: { basis: "5 km. A.", simpeler: "15 min = 1/4 uur → 20/4=5. A.", nogSimpeler: "5 = A." },
        },
      },
      {
        q: "Een loper start 14:00 met **10 km/h**. Aankomt 14:30. Afstand?",
        options: ["5 km", "10 km", "20 km", "300 km"],
        answer: 0,
        wrongHints: [null, "Niet — slechts half uur.", "Niet.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "0,5 uur tussen tijden", tekst: "14:30 - 14:00 = 30 min = 0,5 h.\nAfstand = 10 × 0,5 = **5 km**." },
          ],
          niveaus: { basis: "5 km. A.", simpeler: "Half uur lopen × 10 km/h = 5 km. A.", nogSimpeler: "5 = A." },
        },
      },
      {
        q: "Op een **v-t-grafiek**: oppervlakte onder curve =?",
        options: ["Afgelegde afstand", "Snelheid", "Versnelling", "Tijd"],
        answer: 0,
        wrongHints: [null, "Niet — dat is y-as.", "Niet — apart.", "Niet — x-as."],
        uitlegPad: {
          stappen: [
            { titel: "Bij constante v: rechthoek", tekst: "Oppervlakte = V × T = afstand. Werkt ook bij wisselende snelheid: oppervlakte onder kromme = totale afstand. Cito klassieke vraag." },
          ],
          niveaus: { basis: "Afstand. A.", simpeler: "Onder v-t = km. A.", nogSimpeler: "Afstand = A." },
        },
      },
      {
        q: "Een trein rijdt **2 uur met 80 km/h + 1 uur met 120 km/h**. Totale afstand?",
        options: ["280 km", "200 km", "240 km", "240 km/h"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet alle delen.", "Niet — controleer.", "Niet — eenheid km."],
        uitlegPad: {
          stappen: [
            { titel: "Som per stuk", tekst: "Deel 1: 80 × 2 = 160 km.\nDeel 2: 120 × 1 = 120 km.\nTotaal: 160 + 120 = **280 km**." },
          ],
          niveaus: { basis: "160+120=280. A.", simpeler: "Twee delen optellen. A.", nogSimpeler: "280 = A." },
        },
      },
    ],
  },

  // ─── D. Snelheid + Tijd berekenen ─────────────────────────
  {
    title: "Snelheid + Tijd berekenen",
    explanation:
      "**Hoofdformules** (omzetten van S = V × T):\n• **V = S / T** (snelheid).\n• **T = S / V** (tijd).\n\n**Snelheid berekenen**:\n\n**Som 1**: 120 km in 2 uur. Snelheid?\n• V = 120/2 = **60 km/h**.\n\n**Som 2**: 30 km in 45 min. Snelheid?\n• 45 min = 0,75 h.\n• V = 30/0,75 = **40 km/h**.\n\n**Som 3**: 1500 m in 5 min. Snelheid in m/s?\n• 5 min = 300 s.\n• V = 1500/300 = **5 m/s** (= 18 km/h, dus joggen-tempo).\n\n**Tijd berekenen**:\n\n**Som 4**: 200 km met 80 km/h. Tijd?\n• T = 200/80 = 2,5 h = **2 h 30 min**.\n\n**Som 5**: 12 km lopen met 6 km/h. Tijd?\n• T = 12/6 = 2 h.\n\n**Som 6**: 1 km zwemmen met 4 km/h. Tijd?\n• T = 1/4 = 0,25 h = **15 min**.\n\n**Klassieke Cito-sommen**:\n\n**Som 7**: Bus vertrekt 8:00 uit Amsterdam, rijdt 90 km/h. Wanneer in Utrecht (afstand 40 km)?\n• T = 40/90 = 0,444 h = 26,67 min ≈ 27 min.\n• Aankomst: 8:00 + 27 min = **8:27**.\n\n**Som 8**: Trein 9:15 → 10:45 reis. Afstand 120 km. Snelheid?\n• Tijd: 1 h 30 min = 1,5 h.\n• V = 120/1,5 = **80 km/h**.\n\n**Twee voertuigen** (geavanceerd):\n\n**Som 9**: Auto A vertrekt 14:00 uit Amsterdam, 80 km/h. Auto B vertrekt 14:30 uit Amsterdam, 100 km/h. Wanneer haalt B in?\n• Bij 14:30 is A 0,5 h gereden = 40 km vooruit.\n• B is 20 km/h sneller.\n• Tijd om in te halen: 40 / 20 = 2 h.\n• B haalt A in om 14:30 + 2 h = **16:30**.\n\n**Som 10** (tegelijk uit verschillende kanten):\nAmsterdam → Rotterdam (60 km). Auto Amsterdam → Rotterdam 80 km/h. Auto Rotterdam → Amsterdam 100 km/h. Wanneer ontmoeten?\n• Samen rijden ze 80 + 100 = 180 km/h toe naar elkaar.\n• Tijd: 60/180 = 1/3 h = **20 min**.\n\n**Klassieke vraagjes om voor te bereiden**:\n• 'Snelheid in km/h ↔ tijd in minuten' — let op eenheid.\n• 'Wanneer arriveert?' — tijd berekenen + optellen bij vertrektijd.\n• 'Hoeveel sneller moet?' — formule omdraaien.\n• 'Met pauze' — pauze AFTREKKEN van totale tijd.",
    checks: [
      {
        q: "Een auto reist **300 km in 4 uur**. Snelheid?",
        options: ["75 km/h", "1200 km/h", "60 km/h", "100 km/h"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Niet — controleer.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "V = S/T", tekst: "300 / 4 = **75 km/h**. Onder snelweg-limiet, redelijk tempo." }],
          niveaus: { basis: "300/4=75. A.", simpeler: "Afstand gedeeld door tijd. A.", nogSimpeler: "75 = A." },
        },
      },
      {
        q: "**240 km met 80 km/h** — hoe lang?",
        options: ["3 uur", "2 uur", "4 uur", "30 min"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Veel te weinig."],
        uitlegPad: {
          stappen: [{ titel: "T = S/V", tekst: "240 / 80 = **3 uur**." }],
          niveaus: { basis: "240/80=3. A.", simpeler: "Afstand/snelheid. A.", nogSimpeler: "3h = A." },
        },
      },
      {
        q: "Bus 8:00 vertrek Amsterdam → 50 km/h. **Utrecht 40 km**. Aankomst?",
        options: ["8:48", "8:40", "9:00", "8:30"],
        answer: 0,
        wrongHints: [null, "Niet — controleer.", "Te laat.", "Te vroeg."],
        uitlegPad: {
          stappen: [
            { titel: "Tijd berekenen", tekst: "T = 40/50 = 0,8 h = 48 min.\nAankomst: 8:00 + 48 min = **8:48**." },
          ],
          niveaus: { basis: "8:48. A.", simpeler: "48 min later dan 8:00. A.", nogSimpeler: "8:48 = A." },
        },
      },
      {
        q: "Wandelaar legt **6 km in 1,5 uur** af. Snelheid?",
        options: ["4 km/h", "9 km/h", "0,25 km/h", "3 km/h"],
        answer: 0,
        wrongHints: [null, "Niet — × ipv ÷.", "Te weinig.", "Te weinig."],
        uitlegPad: {
          stappen: [{ titel: "V = S/T", tekst: "6 / 1,5 = **4 km/h**. Normaal wandel-tempo." }],
          niveaus: { basis: "6÷1,5=4. A.", simpeler: "Tempo wandelen. A.", nogSimpeler: "4 = A." },
        },
      },
      {
        q: "Twee auto's 100 km uit elkaar, rijden NAAR elkaar toe (60 + 40 km/h). Wanneer ontmoeten?",
        options: ["1 uur", "30 min", "2 uur", "Geen ontmoeting"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Te lang.", "Wel ontmoeting."],
        uitlegPad: {
          stappen: [
            { titel: "Sommatie snelheden", tekst: "Naar elkaar toe = snelheden optellen: 60 + 40 = 100 km/h.\nTijd: 100 km / 100 km/h = **1 uur**." },
          ],
          niveaus: { basis: "1 uur. A.", simpeler: "Naar elkaar = + snelheden. A.", nogSimpeler: "1h = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Cito-eindopdracht — praktijksommen mix",
    explanation:
      "**Cito-tijd-snelheid-afstand** is altijd PRAKTISCH:\n• Reistijden bus/trein/auto.\n• Sport-records.\n• Vertraging + inhaal.\n• Treinen kruisen.\n• Met pauzes.\n\n**Werkwijze**:\n1. **Lees** rustig — wat is GEGEVEN, wat GEVRAAGD?\n2. **Eenheden check**: km/h + uren? m/s + s?\n3. **Formule** kiezen: V=S/T, S=V×T, T=S/V.\n4. **Bereken** stap voor stap.\n5. **Eenheid bij antwoord** (km, h, min, m/s).\n6. **Check** door terug te rekenen.\n\n**Voorbeeld-som** (Cito-stijl):\n\n**Som 1 — Reisplan**:\nNL → Frankrijk. Vertrek 8:00. Pauze 1 uur in België (12:00-13:00). Snelheid 90 km/h, totale rij-afstand 1080 km. Aankomst?\n• Rij-tijd: 1080/90 = 12 uur.\n• Met 1 uur pauze: totaal 13 uur.\n• Aankomst: 8:00 + 13 = **21:00**.\n\n**Som 2 — Inhalen**:\nLeo fietst 10:00 weg, 18 km/h. Mark vertrekt 10:15, 24 km/h. Wanneer haalt Mark Leo in?\n• Bij 10:15: Leo is al 0,25 × 18 = 4,5 km vooruit.\n• Snelheids-verschil: 24 − 18 = 6 km/h.\n• Inhaaltijd: 4,5/6 = 0,75 h = 45 min.\n• Mark haalt om 10:15 + 45 min = **11:00**.\n\n**Som 3 — Marathon**:\n42 km marathon in 3 h 30 min. Gemiddelde snelheid?\n• 3 h 30 min = 3,5 h.\n• V = 42/3,5 = **12 km/h**.\n\n**Som 4 — Vliegen**:\nAmsterdam-Tokyo vlucht: 9000 km, 11 uur (incl. wind-effecten). Gemiddelde snelheid?\n• 9000/11 = ~**818 km/h**.\n\n**Som 5 — Twee treinen tegelijk**:\nTrein Amsterdam 130 km/h, Trein Den Haag 110 km/h. Recht naar elkaar, 60 km uit elkaar om 10:00. Wanneer kruisen?\n• Samen 240 km/h.\n• Tijd: 60/240 = 0,25 h = 15 min.\n• Om **10:15** kruisen ze.\n\n**Cito-valkuilen**:\n• **Eenheden missen**: km/h + minuten → vergeet om te rekenen.\n• **Pauzes vergeten** in totaltijd.\n• **Gemiddelde snelheid** verwarrend bij verschillende stukken (zie stap B Som 9).\n• **'Wanneer' vs 'hoe lang'**: 'Wanneer arriveert' = vertrek + reisduur.\n\n**Tip Cito-stijl-vraag-types**:\n• Meerkeuze: bereken alle 4 opties + zie welke past.\n• Tekening helpt — schets reisplan op tijdas.\n• Schrijf eenheid groot in antwoord — vergeet je 'm dan minder.",
    checks: [
      {
        q: "Auto Amsterdam-Maastricht 220 km, 100 km/h, met 30 min pauze. Vertrek 14:00. Aankomst?",
        options: [
          "16:42",
          "16:12",
          "17:12",
          "15:42"
        ],
        answer: 0,
        wrongHints: [null, "Niet — vergeet pauze.", "Te laat.", "Te vroeg."],
        uitlegPad: {
          stappen: [
            { titel: "Rij + pauze tijd", tekst: "Rij-tijd: 220/100 = 2,2 h = 2 h 12 min.\nPauze: 30 min.\nTotale tijd: 2 h 12 min + 30 min = 2 h 42 min.\nAankomst: 14:00 + 2 h 42 min = **16:42**." },
          ],
          niveaus: { basis: "16:42. A.", simpeler: "2:12 rijden + 30 min = 2:42 later. A.", nogSimpeler: "16:42 = A." },
        },
      },
      {
        q: "Marathon 42 km in **3 uur**. Gemiddelde snelheid?",
        options: ["14 km/h", "126 km/h", "12 km/h", "Onmogelijk"],
        answer: 0,
        wrongHints: [null, "Niet — controleer.", "Niet — dat is 3,5 uur.", "Wel mogelijk."],
        uitlegPad: {
          stappen: [{ titel: "V=S/T", tekst: "42/3 = **14 km/h**. Wereldrecord marathon (~2:01) = ~21 km/h. Top-amateur ~12-15 km/h." }],
          niveaus: { basis: "42/3=14. A.", simpeler: "Marathon-tempo. A.", nogSimpeler: "14 = A." },
        },
      },
      {
        q: "Trein om 14:30 vertrek, ongeveer 250 km met 100 km/h. Aankomst?",
        options: [
          "17:00 (2,5 uur later)",
          "16:00",
          "18:00",
          "15:00"
        ],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Veel te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "T = 250/100 = 2,5 h", tekst: "14:30 + 2 h 30 min = **17:00**." },
          ],
          niveaus: { basis: "17:00. A.", simpeler: "2,5 uur later. A.", nogSimpeler: "17:00 = A." },
        },
      },
      {
        q: "**100 m sprint** in 10 s. Snelheid m/s + km/h?",
        options: [
          "10 m/s = 36 km/h",
          "10 km/h",
          "1000 m/s",
          "100 km/h"
        ],
        answer: 0,
        wrongHints: [null, "Veel te weinig.", "Onmogelijk.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "V = 100/10 = 10 m/s", tekst: "10 m/s × 3,6 = **36 km/h**. Top-sprinter (Bolt) bijna 38 km/h piek." },
          ],
          niveaus: { basis: "10 m/s = 36 km/h. A.", simpeler: "100/10 + × 3,6. A.", nogSimpeler: "10/36 = A." },
        },
      },
      {
        q: "Auto + fiets tegelijk, beide vanuit Amsterdam naar Utrecht (40 km). Auto 80 km/h, fiets 16 km/h. Hoeveel **vroeger** is auto?",
        options: [
          "2 uur",
          "30 min",
          "5 uur",
          "Gelijk"
        ],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Onjuist."],
        uitlegPad: {
          stappen: [
            { titel: "Tijd verschil", tekst: "Auto-tijd: 40/80 = 0,5 h = 30 min.\nFiets-tijd: 40/16 = 2,5 h = 2 h 30 min.\nVerschil: 2 h 30 min − 30 min = **2 uur**.\nAuto 2 uur eerder aan." },
          ],
          niveaus: { basis: "2 uur. A.", simpeler: "Auto 30 min, fiets 2,5 h. Diff 2h. A.", nogSimpeler: "2h = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tijdSnelheidAfstandPo = {
  id: "tijd-snelheid-afstand-po",
  title: "Tijd + Snelheid + Afstand (Cito groep 7-8)",
  emoji: "🏃",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Rekenen — Tijd/snelheid/afstand / Doorstroomtoets",
  prerequisites: [
    { id: "tafels-po", title: "Tafels", niveau: "groep4-5" },
    { id: "verhoudingen", title: "Verhoudingen", niveau: "groep5-6" },
  ],
  intro:
    "Tijd + snelheid + afstand voor Cito-Doorstroomtoets — tijdseenheden + omrekenen, snelheid km/h ↔ m/s, S=V·T-formule, snelheid + tijd berekenen, praktijksommen (reistijden, marathon, inhalen). 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "tijd",
    "uren", "minuten", "seconden",
    "omrekenen",
    "snelheid", "km/h", "m/s",
    "afstand",
    "S=V·T", "V=S/T", "T=S/V",
    "gemiddelde snelheid",
    "reistijd",
    "marathon",
    "inhalen", "ontmoeten",
    "Cito rekenen",
    "Doorstroomtoets",
  ],
  chapters,
  steps,
};

export default tijdSnelheidAfstandPo;
