// Leerpad: Tijd + Snelheid + Afstand — Doorstroomtoets groep 7-8 PO.
// Doorstroomtoets onderdeel rekenen. S = V × T verhoudingen.
// 5 stappen × ~5 checks. Referentieniveau 1F/1S.

const stepEmojis = ["⏰", "🏃", "📏", "🧮", "🏆"];

const chapters = [
  { letter: "A", title: "Tijd-eenheden + omrekenen", emoji: "⏰", from: 0, to: 0 },
  { letter: "B", title: "Snelheid-eenheden", emoji: "🏃", from: 1, to: 1 },
  { letter: "C", title: "Afstand berekenen (S=V·T)", emoji: "📏", from: 2, to: 2 },
  { letter: "D", title: "Snelheid + Tijd berekenen", emoji: "🧮", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — praktijksommen", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Tijd-eenheden ────────────────────────────────────
  {
    title: "Tijd-eenheden — uren, minuten, seconden",
    explanation:
      "**Basis tijdseenheden**:\n• **Seconde (s)**: basis-eenheid.\n• **Minuut (min)** = 60 s.\n• **Uur (h)** = 60 min = 3600 s.\n• **Dag** = 24 h = 1440 min = 86 400 s.\n• **Week** = 7 dagen.\n• **Maand** = ~30 dagen (varieert).\n• **Jaar** = 365 dagen (366 schrikkeljaar).\n\n**Omrekenen**:\n• **Naar minuten** uit uren: × 60.\n• **Naar seconden** uit minuten: × 60.\n• **Naar uren** uit minuten: / 60.\n• **Naar minuten** uit seconden: / 60.\n\n**Voorbeelden**:\n• 2,5 uur = 2 h + 30 min = 150 min.\n• 90 min = 1,5 uur = 1 h + 30 min.\n• 180 s = 3 min.\n• 1,5 dag = 36 uur.\n\n**Toets-trick — tijdsspanne**:\nVan 14:30 tot 18:15.\n• Van 14:30 → 18:30 = 4 uur.\n• Maar einde is 18:15, dus 15 min minder.\n• Antwoord: 3 h 45 min.\n\n**Of stap-methode**:\n• 14:30 + 30 min → 15:00.\n• 15:00 + 3 h → 18:00.\n• 18:00 + 15 min → 18:15.\n• Totaal: 30 min + 3 h + 15 min = 3 h 45 min.\n\n**24-uur-klok vs 12-uur**:\n• 14:00 = 2 PM.\n• 23:30 = 11:30 PM.\n• 00:00 = middernacht.\n• 12:00 = middag.\n\n**Datum-rekenen**:\n• Hoeveel dagen tussen 15 maart en 20 mei?\n  - Maart: 31 - 15 = 16 dagen.\n  - April: 30 dagen.\n  - Mei: 20 dagen.\n  - Totaal: 16 + 30 + 20 = 66 dagen.\n\n**Maanden onthoud-truc**:\n'30 dagen heeft september, april, juni, november. Februari 28 dagen — 29 in schrikkeljaar. Andere 31.'\n\n**Schrikkeljaar**: deelbaar door 4 (uitzondering: deelbaar door 100 niet, tenzij door 400). Voorbeelden:\n• 2024 = schrikkeljaar (door 4).\n• 2100 = NIET schrikkel (door 100, niet door 400).\n• 2000 = WEL schrikkel (door 400).\n\n**Tijdzone**:\n• NL = UTC+1 (winter) of UTC+2 (zomer).\n• New York = UTC-5 (winter) — 6 uur achter NL.\n• Japan = UTC+9 — 8 uur voor NL (winter).",
    checks: [
      {
        q: "**2,5 uur** = hoeveel **minuten**?",
        options: ["150 min", "250 min", "120 min", "180 min"],
        answer: 0,
        wrongHints: [null, "Niet — controleer.", "Niet — dat is 2 uur.", "Niet — 3 uur."],
        uitlegPad: {
          stappen: [
            { titel: "Splits in hele uren + half uur", tekst: "2,5 uur bestaat uit 2 hele uren en een half uur. Reken eerst de 2 hele uren om naar minuten (uren × 60)." },
            { titel: "Tel het halve uur erbij", tekst: "Een half uur is de helft van 60 minuten. Tel dat aantal op bij de minuten van de 2 hele uren." },
          ],
          woorden: [{ woord: "2,5 uur", uitleg: "Bij tijd betekent de komma geen minuten. 2,5 uur is 2 hele uren plus een half uur (dus 2 uur en 30 minuten, niet 2 uur en 5 minuten)." }],
          theorie: "Om uren om te rekenen naar minuten, vermenigvuldig je het aantal uren met **60** — want 1 uur = 60 minuten. Een half uur reken je apart om: dat is altijd 30 minuten. Let op bij tijd met een komma: 2,5 uur is geen '2 uur en 5 minuten', maar 2 uur en een half.",
          voorbeelden: [
            { type: "sport", tekst: "Een training duurt 1,5 uur — dat is 1 uur en 30 minuten, geen 1 uur en 5 minuten." },
            { type: "thuis", tekst: "Als je 3,5 uur naar een film met extra's kijkt, heb je 3 uur en 30 minuten gekeken." },
          ],
          basiskennis: [{ onderwerp: "1 uur = 60 minuten", uitleg: "Dit moet je uit je hoofd weten om met tijd te kunnen rekenen." }],
          niveaus: { basis: "2,5×60=150.", simpeler: "Vermenigvuldig 60.", nogSimpeler: "150" },
        },
      },
      {
        q: "Van **14:45 naar 17:20** — hoe lang?",
        options: ["2 h 35 min", "2 h 25 min", "3 h 5 min", "1 h 35 min"],
        answer: 0,
        wrongHints: [null, "Niet — tel goed na.", "Niet — onmogelijk.", "Niet — controleer."],
        uitlegPad: {
          stappen: [
            { titel: "Naar een rond heel uur", tekst: "Reken eerst van 14:45 naar het eerstvolgende hele uur (15:00). Hoeveel minuten is dat?" },
            { titel: "De rest van de weg", tekst: "Tel daarna de hele uren tot 17:00, en tot slot de laatste minuten tot 17:20. Tel alle stukjes bij elkaar op." },
          ],
          woorden: [{ woord: "tijdsspanne", uitleg: "De hoeveelheid tijd die verstrijkt tussen een begin- en een eindtijdstip." }],
          theorie: "Een tijdsspanne bereken je door in kleine, makkelijke stapjes te werken: eerst naar het volgende hele uur, dan de hele uren tellen, en als laatste de overgebleven minuten. Zo hoef je nooit ingewikkeld af te trekken met uren én minuten tegelijk.",
          voorbeelden: [
            { type: "school", tekst: "Een les begint om 9:20 en eindigt om 10:05 — je rekent eerst naar 10:00, dan de laatste 5 minuten erbij." },
            { type: "sport", tekst: "Een training start om 16:50 en duurt tot 18:15 — eerst naar 17:00, dan de rest." },
          ],
          basiskennis: [{ onderwerp: "1 uur = 60 minuten", uitleg: "Nodig om te weten hoeveel minuten er tussen twee hele uren zitten." }],
          niveaus: { basis: "2h35min.", simpeler: "Stap voor stap optellen.", nogSimpeler: "2:35" },
        },
      },
      {
        q: "Hoeveel **dagen tussen 1 januari en 1 maart** (niet-schrikkeljaar)?",
        options: ["59 dagen", "60 dagen", "61 dagen", "58 dagen"],
        answer: 0,
        wrongHints: [null, "Niet — geen schrikkel.", "Niet.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Januari eerst", tekst: "Januari heeft 31 dagen. Vanaf 1 januari tot het einde van januari is dat dus 30 dagen verder." },
            { titel: "Februari erbij", tekst: "In een gewoon jaar (geen schrikkeljaar) heeft februari 28 dagen. Tel die op bij het aantal dagen van januari." },
          ],
          woorden: [{ woord: "schrikkeljaar", uitleg: "Een jaar met een extra dag (29 februari in plaats van 28), ongeveer eens in de 4 jaar." }],
          theorie: "Om dagen tussen twee datums te tellen, ga je maand voor maand: hoeveel dagen zitten er nog in de eerste maand, en hoeveel volle maanden zitten ertussen. **Februari** heeft meestal 28 dagen, behalve in een schrikkeljaar (dan 29).",
          voorbeelden: [
            { type: "school", tekst: "Hoeveel dagen tot de zomervakantie? Je telt ook maand voor maand: de rest van deze maand + de volle maanden erna." },
            { type: "thuis", tekst: "Van 1 februari tot 1 april tellen: eerst de dagen van februari, dan de dagen van maart." },
          ],
          basiskennis: [{ onderwerp: "Dagen per maand", uitleg: "Januari, maart, mei, juli, augustus, oktober, december hebben 31 dagen; april, juni, september, november hebben 30; februari heeft 28 of 29." }],
          niveaus: { basis: "31+28=59.", simpeler: "Jan + feb dagen.", nogSimpeler: "59" },
        },
      },
      {
        q: "Een trein rijdt van **22:45 tot 02:30 's nachts**. Hoe lang?",
        options: ["3 h 45 min", "4 h 45 min", "20 h 15 min", "Onmogelijk"],
        answer: 0,
        wrongHints: [null, "Te lang.", "Onzin lange tijd.", "Wel — over middernacht."],
        uitlegPad: {
          stappen: [
            { titel: "Tot middernacht", tekst: "Reken eerst uit hoeveel tijd er zit tussen 22:45 en 00:00 (middernacht)." },
            { titel: "Na middernacht erbij", tekst: "Tel daarna de tijd van 00:00 tot 02:30 op bij het stuk vóór middernacht." },
          ],
          woorden: [{ woord: "over middernacht", uitleg: "Als een tijdsduur van de ene dag naar de volgende dag loopt, bijvoorbeeld van 's avonds laat tot 's ochtends vroeg." }],
          theorie: "Loopt een tijdsspanne over middernacht heen, splits hem dan in twee stukken: het stuk vóór 00:00 en het stuk erná. Tel die twee stukken daarna gewoon bij elkaar op — zo raak je niet in de war met de klok die weer bij 00:00 begint.",
          voorbeelden: [
            { type: "thuis", tekst: "Een nachtfeestje van 23:15 tot 01:00 — eerst het stuk tot middernacht, dan het stuk erna." },
            { type: "sport", tekst: "Een nachtdienst van 23:00 tot 06:00 werkt volgens hetzelfde principe." },
          ],
          basiskennis: [{ onderwerp: "24-uursklok", uitleg: "Na 23:59 begint de klok weer bij 00:00 — dat is een nieuwe dag." }],
          niveaus: { basis: "3h45min.", simpeler: "Over middernacht splitsen.", nogSimpeler: "3:45" },
        },
      },
      {
        q: "**1 dag** is hoeveel **seconden**?",
        options: ["86 400 s", "1440 s", "3600 s", "1 000 000 s"],
        answer: 0,
        wrongHints: [null, "Niet — dat is minuten.", "Niet — dat is 1 uur.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Van dag naar uur naar minuut", tekst: "1 dag = 24 uur. Reken eerst uit hoeveel minuten dat zijn (uren × 60)." },
            { titel: "Van minuut naar seconde", tekst: "Reken de minuten die je net vond om naar seconden (minuten × 60)." },
          ],
          woorden: [{ woord: "seconde", uitleg: "De kleinste standaard tijdseenheid die je op de toets tegenkomt — 60 seconden is 1 minuut." }],
          theorie: "Om van een grote tijdseenheid naar een kleine te gaan, vermenigvuldig je steeds met de omrekenfactor: **dag → uur is × 24**, **uur → minuut is × 60**, **minuut → seconde is × 60**. Ga stap voor stap, dan is de kans op fouten kleiner.",
          voorbeelden: [
            { type: "thuis", tekst: "Een week in uren: 7 dagen × 24 uur." },
            { type: "sport", tekst: "Een training van 45 minuten duurt 45 × 60 = 2700 seconden." },
          ],
          basiskennis: [{ onderwerp: "Basis-omrekeningen tijd", uitleg: "1 minuut = 60 seconden, 1 uur = 60 minuten, 1 dag = 24 uur." }],
          niveaus: { basis: "24·3600=86400.", simpeler: "Uren × 3600.", nogSimpeler: "86 400" },
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
          stappen: [
            { titel: "Waarom delen door 3,6?", tekst: "1 km/h is hetzelfde als 1000 meter per 3600 seconden. Dat kun je vereenvoudigen tot een deling door 3,6 om van km/h naar m/s te gaan." },
            { titel: "Reken uit", tekst: "Deel het aantal km/h door 3,6 om de snelheid in m/s te krijgen." },
          ],
          woorden: [{ woord: "m/s", uitleg: "Meter per seconde — hoeveel meter iets in één seconde aflegt. Wordt vaak gebruikt bij natuurkunde en korte afstanden." }],
          theorie: "**km/h** en **m/s** zijn allebei eenheden van snelheid, maar een andere maat. Omdat 1 km/h gelijk is aan 1000/3600 m/s, reken je van km/h naar m/s door te **delen door 3,6**. Andersom (van m/s naar km/h) vermenigvuldig je juist met 3,6.",
          voorbeelden: [
            { type: "sport", tekst: "Een hardloper die 18 km/h loopt, gaat 18 ÷ 3,6 = 5 m/s." },
            { type: "thuis", tekst: "Een fietser van 36 km/h gaat 36 ÷ 3,6 = 10 m/s." },
          ],
          basiskennis: [{ onderwerp: "1 km = 1000 m, 1 uur = 3600 s", uitleg: "Deze twee omrekeningen samen geven de factor 3,6 tussen km/h en m/s." }],
          niveaus: { basis: "90÷3,6=25.", simpeler: "km/h gedeeld door 3,6.", nogSimpeler: "25" },
        },
      },
      {
        q: "**12 m/s** in km/h?",
        options: ["43,2 km/h", "33 km/h", "3,3 km/h", "120 km/h"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Veel te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "De andere kant op", tekst: "Van m/s naar km/h reken je met dezelfde factor als van km/h naar m/s, maar dan andersom." },
            { titel: "Reken uit", tekst: "Vermenigvuldig het aantal m/s met 3,6 om de snelheid in km/h te krijgen." },
          ],
          woorden: [{ woord: "km/h", uitleg: "Kilometer per uur — hoeveel kilometer iets in één uur aflegt. De eenheid die je bij auto's, fietsen en verkeersborden ziet." }],
          theorie: "Om van **m/s** naar **km/h** te gaan, vermenigvuldig je met **3,6**. Dit is het omgekeerde van delen door 3,6 (km/h naar m/s). Onthoud: m/s is een kleiner getal dan km/h voor dezelfde snelheid, dus vermenigvuldigen klopt met die richting.",
          voorbeelden: [
            { type: "sport", tekst: "Een sprinter van 8 m/s gaat 8 × 3,6 = 28,8 km/h." },
            { type: "thuis", tekst: "Een hond die 3 m/s rent, rent 3 × 3,6 = 10,8 km/h." },
          ],
          basiskennis: [{ onderwerp: "Omrekenfactor 3,6", uitleg: "km/h ÷ 3,6 = m/s, en m/s × 3,6 = km/h. Dit getal komt van 1000 m / 3600 s." }],
          niveaus: { basis: "12·3,6=43,2.", simpeler: "m/s keer 3,6 = km/h.", nogSimpeler: "43,2" },
        },
      },
      {
        q: "Auto rijdt eerst 1 uur 60 km/h, dan 1 uur 90 km/h. **Gemiddelde snelheid**?",
        options: ["75 km/h", "70 km/h", "65 km/h", "85 km/h"],
        answer: 0,
        wrongHints: [null, "Niet — controleer.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Bereken de totale afstand", tekst: "Reken per uur uit hoeveel kilometer er is afgelegd, en tel die twee afstanden bij elkaar op." },
            { titel: "Deel door de totale tijd", tekst: "Deel de totale afstand door de totale tijd (2 uur) om de gemiddelde snelheid te vinden." },
          ],
          woorden: [{ woord: "gemiddelde snelheid", uitleg: "De snelheid alsof je de hele rit met één vaste snelheid had gereden — bereken je met totale afstand gedeeld door totale tijd." }],
          theorie: "De **gemiddelde snelheid** is NIET zomaar het gemiddelde van de losse snelheden optellen en delen door 2 — dat werkt alleen toevallig als de tijden gelijk zijn. De juiste manier is altijd: **totale afstand ÷ totale tijd**.",
          voorbeelden: [
            { type: "sport", tekst: "Een fietser rijdt 1 uur 15 km/h en 1 uur 25 km/h: totale afstand 40 km in 2 uur = gemiddeld 20 km/h." },
            { type: "thuis", tekst: "Een gezin rijdt op vakantie 1 uur 50 km/h en 1 uur 70 km/h — de gemiddelde snelheid reken je via de totale afstand en tijd." },
          ],
          basiskennis: [{ onderwerp: "S = V × T", uitleg: "Afstand = snelheid × tijd. Nodig om per uur de afgelegde afstand te berekenen." }],
          niveaus: { basis: "75 km/h.", simpeler: "Optellen + delen 2.", nogSimpeler: "75" },
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
            { titel: "Bereken de tijd per stuk", tekst: "Bereken apart hoeveel tijd het eerste stuk (50 km met 25 km/h) kostte en hoeveel tijd het tweede stuk (50 km met 50 km/h) kostte." },
            { titel: "Totale afstand door totale tijd", tekst: "Tel de twee afstanden op (voor de teller) en de twee tijden op (voor de noemer), en deel ze op elkaar." },
          ],
          woorden: [{ woord: "gelijke afstand ≠ gelijke tijd", uitleg: "Als twee stukken even lang zijn (in kilometers) maar met verschillende snelheid worden afgelegd, kosten ze NIET evenveel tijd — het langzame stuk duurt langer." }],
          theorie: "Bij gelijke **afstanden** met verschillende snelheden mag je de snelheden niet zomaar optellen en delen door 2 — want het langzame stuk kost meer tijd en telt daardoor zwaarder mee. Reken altijd via **totale afstand ÷ totale tijd**.",
          voorbeelden: [
            { type: "sport", tekst: "Een wandelaar loopt 10 km met 5 km/h en daarna 10 km met 10 km/h — het langzame stuk duurt langer, dus de gemiddelde snelheid ligt dichter bij 5 dan bij 10." },
            { type: "thuis", tekst: "Een fietstocht van twee gelijke stukken met verschillend tempo werkt op dezelfde manier." },
          ],
          basiskennis: [{ onderwerp: "T = S/V", uitleg: "Tijd = afstand gedeeld door snelheid. Nodig om de tijd per stuk uit te rekenen." }],
          niveaus: { basis: "33,3 km/h.", simpeler: "Klein langzaam telt meer.", nogSimpeler: "33,3" },
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
          stappen: [
            { titel: "Vaste natuurkundige waarde", tekst: "De lichtsnelheid is geen som die je zelf uitrekent — het is een vaste, gemeten waarde in de natuurkunde die je moet kennen of herkennen." },
            { titel: "Let op de eenheid", tekst: "Kijk goed naar het verschil tussen 'per seconde' en 'per uur' in de antwoordopties — dat scheelt een factor 3600." },
          ],
          woorden: [{ woord: "vacuüm", uitleg: "Een lege ruimte zonder lucht of andere stoffen, zoals de ruimte tussen sterren. Licht reist daar het snelst." }],
          theorie: "De **lichtsnelheid** is de snelheid waarmee licht zich verplaatst en volgens Einstein de maximale snelheid in het heelal — niets kan sneller. Het is een vaste natuurwaarde, geen berekening met S=V×T.",
          voorbeelden: [
            { type: "school", tekst: "Licht van de zon doet er ongeveer 8 minuten over om de aarde te bereiken." },
            { type: "thuis", tekst: "Als je een lichtflits van de maan zou zien, zou die er ruim 1 seconde over doen om aan te komen." },
          ],
          basiskennis: [{ onderwerp: "km/s vs km/h", uitleg: "km/s (per seconde) is een veel groter getal dan km/h (per uur) voor dezelfde snelheid, omdat een uur 3600 seconden heeft." }],
          niveaus: { basis: "300 000 km/s.", simpeler: "Bijna 300 000 km per seconde.", nogSimpeler: "300k" },
        },
      },
    ],
  },

  // ─── C. Afstand berekenen ─────────────────────────────────
  {
    title: "Afstand berekenen — S = V × T",
    explanation:
      "**Hoofdformule**: **Afstand = Snelheid × Tijd** (S = V × T).\n\nVoorbeeld:\n• Snelheid 80 km/h, tijd 3 uur.\n• Afstand = 80 × 3 = **240 km**.\n\n**Eenheden moeten matchen!**\n• Snelheid km/h + tijd in uur → afstand in km.\n• Snelheid m/s + tijd in seconden → afstand in m.\n• Snelheid km/h + tijd in minuten → eerst tijd → uren omrekenen.\n\n**Voorbeeld** met conversie:\n• Snelheid 60 km/h, tijd 30 minuten.\n• 30 min = 0,5 h.\n• Afstand = 60 × 0,5 = **30 km**.\n\n**Of**: 60 km/h = 1 km/min. → 30 km in 30 min.\n\n**Praktijk-sommen**:\n\n**Som 1**: Auto rijdt 1 h 45 min met 80 km/h. Afstand?\n• 1 h 45 min = 1,75 h.\n• 80 × 1,75 = **140 km**.\n\n**Som 2**: Trein 120 km/h. In 20 min?\n• 20 min = 1/3 h.\n• 120 × 1/3 = **40 km**.\n\n**Som 3**: Fietser 18 km/h. Afstand in 45 min?\n• 45 min = 0,75 h.\n• 18 × 0,75 = **13,5 km**.\n\n**Combineren met andere maten**:\n\n**Som 4**: Bal rolt 5 m/s. In 12 seconden?\n• 5 × 12 = **60 m**.\n\n**Som 5**: Vliegtuig 900 km/h. Hoeveel km in 30 min?\n• 30 min = 0,5 h.\n• 900 × 0,5 = **450 km**.\n\n**Toets-truc grafieken**:\n• v-t-grafiek (snelheid horizontaal-tijd):\n  - Bij CONSTANTE snelheid: horizontale lijn.\n  - **Oppervlakte onder curve = afgelegde afstand**.\n• s-t-grafiek (positie-tijd):\n  - Bij constante snelheid: rechte lijn met helling.\n  - **Helling = snelheid**.\n  - Vlakke lijn = stilstand.\n\n**Voorbeeld grafiek-vraag**:\nAuto rijdt 1 h met 60 km/h, daarna 1 h met 100 km/h. v-t-grafiek?\n• Twee horizontale lijnen: op 60 km/h (0-1h), op 100 km/h (1-2h).\n• Oppervlakte = 60×1 + 100×1 = 160 km.\n\n**Veelgemaakte fout**:\n• Tijden in verschillende eenheden niet matchen.\n• Vergeet de eenheid bij antwoord (km, niet alleen 240).\n• Snelheid km/u verwarren met km of m/s.",
    checks: [
      {
        q: "Auto rijdt **3 uur met 90 km/h**. Afstand?",
        options: ["270 km", "30 km", "93 km", "180 km"],
        answer: 0,
        wrongHints: [null, "Niet — dat is afstand/tijd.", "Niet — verkeerde rekening.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Welke formule?", tekst: "Je hebt de snelheid én de tijd, en zoekt de afstand. Welke van de drie formules (S=V×T, V=S/T, T=S/V) past daarbij?" },
            { titel: "Vul in en reken", tekst: "Vul de snelheid en de tijd in de formule in en vermenigvuldig ze." },
          ],
          woorden: [{ woord: "S = V × T", uitleg: "De hoofdformule: Afstand (S) is Snelheid (V) keer Tijd (T)." }],
          theorie: "Als je de **snelheid** en de **tijd** kent, vind je de **afstand** door ze te vermenigvuldigen: S = V × T. Let op dat de eenheden bij elkaar passen — snelheid in km/h hoort bij tijd in uren, dan komt de afstand in km uit.",
          voorbeelden: [
            { type: "sport", tekst: "Een fietser rijdt 2 uur met 15 km/h: afstand = 15 × 2 = 30 km." },
            { type: "thuis", tekst: "Een vlucht van 4 uur met 800 km/h legt 800 × 4 km af." },
          ],
          basiskennis: [{ onderwerp: "Eenheden matchen", uitleg: "Snelheid in km/h hoort samen met tijd in uren om een afstand in km te krijgen." }],
          niveaus: { basis: "90·3=270.", simpeler: "Snelheid × tijd.", nogSimpeler: "270" },
        },
      },
      {
        q: "Fietser **20 km/h** rijdt **15 minuten**. Afstand?",
        options: ["5 km", "300 km", "20 km", "15 km"],
        answer: 0,
        wrongHints: [null, "Niet — minuten omzetten.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Minuten passen niet bij km/h", tekst: "De snelheid staat in km/h (per uur), maar de tijd staat in minuten. Reken de minuten eerst om naar uren." },
            { titel: "Vul in de formule", tekst: "Gebruik de omgerekende tijd in S = V × T om de afstand te vinden." },
          ],
          woorden: [{ woord: "kwartier", uitleg: "Een kwart uur = 15 minuten = 0,25 uur." }],
          theorie: "Voor S = V × T moeten snelheid en tijd in **bij elkaar passende eenheden** staan. Staat de snelheid in km/h en de tijd in minuten, reken de minuten dan eerst om naar uren (minuten ÷ 60) vóór je gaat vermenigvuldigen.",
          voorbeelden: [
            { type: "sport", tekst: "Een hardloper met 12 km/h die 30 minuten (0,5 uur) rent, legt 12 × 0,5 = 6 km af." },
            { type: "thuis", tekst: "Een auto van 60 km/h die 10 minuten (1/6 uur) rijdt, legt 10 km af." },
          ],
          basiskennis: [{ onderwerp: "Minuten naar uren", uitleg: "Minuten ÷ 60 = uren. Bijvoorbeeld 15 min = 15/60 = 0,25 uur." }],
          niveaus: { basis: "5 km.", simpeler: "15 min = 1/4 uur → 20/4=5.", nogSimpeler: "5" },
        },
      },
      {
        q: "Een loper start 14:00 met **10 km/h**. Aankomt 14:30. Afstand?",
        options: ["5 km", "10 km", "20 km", "300 km"],
        answer: 0,
        wrongHints: [null, "Niet — slechts half uur.", "Niet.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Bereken eerst de tijdsduur", tekst: "Reken uit hoeveel tijd er tussen 14:00 en 14:30 zit, en zet dat om in uren." },
            { titel: "Vul in de formule", tekst: "Gebruik die tijd samen met de snelheid in S = V × T." },
          ],
          woorden: [{ woord: "tijdsduur", uitleg: "Het verschil tussen een begin- en eindtijdstip — hoelang iets duurt." }],
          theorie: "Als een som twee kloktijden geeft in plaats van een tijdsduur, moet je eerst zelf de tijdsduur uitrekenen (eindtijd − begintijd) vóór je S = V × T kunt gebruiken.",
          voorbeelden: [
            { type: "school", tekst: "Een leerling fietst van 8:00 tot 8:15 met 12 km/h — eerst de duur (15 min = 0,25 uur) bepalen, dan pas rekenen." },
            { type: "sport", tekst: "Een zwemmer die van 16:00 tot 16:45 met 3 km/h zwemt, gebruikt dezelfde aanpak." },
          ],
          basiskennis: [{ onderwerp: "Kloktijd vs tijdsduur", uitleg: "14:00 en 14:30 zijn tijdstippen; het verschil ertussen (30 minuten) is de tijdsduur waarmee je rekent." }],
          niveaus: { basis: "5 km.", simpeler: "Half uur lopen × 10 km/h = 5 km.", nogSimpeler: "5" },
        },
      },
      {
        q: "Op een **v-t-grafiek**: oppervlakte onder curve =?",
        options: ["Afgelegde afstand", "Snelheid", "Versnelling", "Tijd"],
        answer: 0,
        wrongHints: [null, "Niet — dat is y-as.", "Niet — apart.", "Niet — x-as."],
        uitlegPad: {
          stappen: [
            { titel: "Wat staat er op de assen?", tekst: "Op een v-t-grafiek staat de snelheid op de verticale as en de tijd op de horizontale as. Wat gebeurt er als je snelheid met tijd vermenigvuldigt?" },
            { titel: "Oppervlakte = lengte × breedte", tekst: "Een rechthoek onder de grafiek heeft als 'hoogte' de snelheid en als 'breedte' de tijd. Welke grootheid krijg je als je die twee vermenigvuldigt?" },
          ],
          woorden: [{ woord: "v-t-grafiek", uitleg: "Een grafiek waarbij de snelheid (v) wordt uitgezet tegen de tijd (t)." }],
          theorie: "In een v-t-grafiek staat snelheid verticaal en tijd horizontaal. Omdat **S = V × T**, komt het product van snelheid en tijd — de oppervlakte onder de grafieklijn — overeen met een belangrijke grootheid uit dezelfde formule. Dit werkt bij een rechte lijn (constante snelheid) én bij een kromme lijn.",
          voorbeelden: [
            { type: "school", tekst: "Bij een grafiek die 2 uur lang op 60 km/h blijft staan, is de rechthoek onder de lijn 60 hoog en 2 breed." },
            { type: "sport", tekst: "Een hardloper die steeds sneller gaat, heeft een kromme lijn — de oppervlakte eronder tel je op in stukjes." },
          ],
          basiskennis: [{ onderwerp: "S = V × T", uitleg: "Afstand is snelheid keer tijd — dezelfde vermenigvuldiging als lengte × breedte bij een oppervlakte." }],
          niveaus: { basis: "Afstand.", simpeler: "Onder v-t = km.", nogSimpeler: "Afstand" },
        },
      },
      {
        q: "Een trein rijdt **2 uur met 80 km/h + 1 uur met 120 km/h**. Totale afstand?",
        options: ["280 km", "200 km", "240 km", "240 km/h"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet alle delen.", "Niet — controleer.", "Niet — eenheid km."],
        uitlegPad: {
          stappen: [
            { titel: "Bereken elk deel apart", tekst: "Bereken de afstand van het eerste stuk (2 uur met 80 km/h) en van het tweede stuk (1 uur met 120 km/h) los van elkaar." },
            { titel: "Tel de delen op", tekst: "Tel de twee afstanden bij elkaar op voor de totale afstand." },
          ],
          woorden: [{ woord: "deeltraject", uitleg: "Een stuk van een reis met zijn eigen snelheid en tijd, dat je apart moet uitrekenen." }],
          theorie: "Bestaat een rit uit meerdere stukken met verschillende snelheden, bereken dan **elk stuk apart** met S = V × T en tel de uitkomsten daarna bij elkaar op tot de totale afstand.",
          voorbeelden: [
            { type: "sport", tekst: "Een wielrenner rijdt 1 uur met 30 km/h en daarna 2 uur met 20 km/h — twee losse sommen, dan optellen." },
            { type: "thuis", tekst: "Een vakantierit van 3 uur op de snelweg en 1 uur door de stad werkt volgens hetzelfde principe." },
          ],
          basiskennis: [{ onderwerp: "S = V × T per stuk", uitleg: "Elke snelheid hoort bij zijn eigen tijd — je mag ze niet door elkaar husselen." }],
          niveaus: { basis: "160+120=280.", simpeler: "Twee delen optellen.", nogSimpeler: "280" },
        },
      },
    ],
  },

  // ─── D. Snelheid + Tijd berekenen ─────────────────────────
  {
    title: "Snelheid + Tijd berekenen",
    explanation:
      "**Hoofdformules** (omzetten van S = V × T):\n• **V = S / T** (snelheid).\n• **T = S / V** (tijd).\n\n**Snelheid berekenen**:\n\n**Som 1**: 120 km in 2 uur. Snelheid?\n• V = 120/2 = **60 km/h**.\n\n**Som 2**: 30 km in 45 min. Snelheid?\n• 45 min = 0,75 h.\n• V = 30/0,75 = **40 km/h**.\n\n**Som 3**: 1500 m in 5 min. Snelheid in m/s?\n• 5 min = 300 s.\n• V = 1500/300 = **5 m/s** (= 18 km/h, dus joggen-tempo).\n\n**Tijd berekenen**:\n\n**Som 4**: 200 km met 80 km/h. Tijd?\n• T = 200/80 = 2,5 h = **2 h 30 min**.\n\n**Som 5**: 12 km lopen met 6 km/h. Tijd?\n• T = 12/6 = 2 h.\n\n**Som 6**: 1 km zwemmen met 4 km/h. Tijd?\n• T = 1/4 = 0,25 h = **15 min**.\n\n**Klassieke Toets-sommen**:\n\n**Som 7**: Bus vertrekt 8:00 uit Amsterdam, rijdt 90 km/h. Wanneer in Utrecht (afstand 40 km)?\n• T = 40/90 = 0,444 h = 26,67 min ≈ 27 min.\n• Aankomst: 8:00 + 27 min = **8:27**.\n\n**Som 8**: Trein 9:15 → 10:45 reis. Afstand 120 km. Snelheid?\n• Tijd: 1 h 30 min = 1,5 h.\n• V = 120/1,5 = **80 km/h**.\n\n**Twee voertuigen** (geavanceerd):\n\n**Som 9**: Auto A vertrekt 14:00 uit Amsterdam, 80 km/h. Auto B vertrekt 14:30 uit Amsterdam, 100 km/h. Wanneer haalt B in?\n• Bij 14:30 is A 0,5 h gereden = 40 km vooruit.\n• B is 20 km/h sneller.\n• Tijd om in te halen: 40 / 20 = 2 h.\n• B haalt A in om 14:30 + 2 h = **16:30**.\n\n**Som 10** (tegelijk uit verschillende kanten):\nAmsterdam → Rotterdam (60 km). Auto Amsterdam → Rotterdam 80 km/h. Auto Rotterdam → Amsterdam 100 km/h. Wanneer ontmoeten?\n• Samen rijden ze 80 + 100 = 180 km/h toe naar elkaar.\n• Tijd: 60/180 = 1/3 h = **20 min**.\n\n**Klassieke vraagjes om voor te bereiden**:\n• 'Snelheid in km/h ↔ tijd in minuten' — let op eenheid.\n• 'Wanneer arriveert?' — tijd berekenen + optellen bij vertrektijd.\n• 'Hoeveel sneller moet?' — formule omdraaien.\n• 'Met pauze' — pauze AFTREKKEN van totale tijd.",
    checks: [
      {
        q: "Een auto reist **300 km in 4 uur**. Snelheid?",
        options: ["75 km/h", "1200 km/h", "60 km/h", "100 km/h"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Niet — controleer.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Welke formule?", tekst: "Je kent de afstand en de tijd, en zoekt de snelheid. Welke formule (S=V×T, V=S/T, T=S/V) hoort daarbij?" },
            { titel: "Vul in en deel", tekst: "Deel de afstand door de tijd." },
          ],
          woorden: [{ woord: "V = S/T", uitleg: "Snelheid is afstand gedeeld door tijd — de formule die je gebruikt als je snelheid moet zoeken." }],
          theorie: "Om de **snelheid** te vinden als je de afstand en de tijd kent, deel je de afstand door de tijd: V = S/T. Dit is dezelfde formule als S = V×T, maar dan omgedraaid.",
          voorbeelden: [
            { type: "sport", tekst: "Een hardloper legt 10 km af in 1 uur: snelheid = 10 ÷ 1 = 10 km/h." },
            { type: "thuis", tekst: "Een trein rijdt 180 km in 3 uur: snelheid = 180 ÷ 3 = 60 km/h." },
          ],
          basiskennis: [{ onderwerp: "De drie formules", uitleg: "S = V×T, V = S/T en T = S/V zijn dezelfde relatie, maar dan telkens naar een andere onbekende opgelost." }],
          niveaus: { basis: "300/4=75.", simpeler: "Afstand gedeeld door tijd.", nogSimpeler: "75" },
        },
      },
      {
        q: "**240 km met 80 km/h** — hoe lang?",
        options: ["3 uur", "2 uur", "4 uur", "30 min"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Veel te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Welke formule?", tekst: "Je kent de afstand en de snelheid, en zoekt de tijd. Welke formule hoort daarbij?" },
            { titel: "Vul in en deel", tekst: "Deel de afstand door de snelheid." },
          ],
          woorden: [{ woord: "T = S/V", uitleg: "Tijd is afstand gedeeld door snelheid — de formule die je gebruikt als je de tijd moet zoeken." }],
          theorie: "Om de **tijd** te vinden als je de afstand en de snelheid kent, deel je de afstand door de snelheid: T = S/V. Reken je uitkomst eventueel om van een kommagetal naar uren en minuten (bijvoorbeeld 2,5 uur = 2 uur 30 min).",
          voorbeelden: [
            { type: "sport", tekst: "Een fietser met 15 km/h die 45 km moet rijden, doet daar 45 ÷ 15 = 3 uur over." },
            { type: "thuis", tekst: "Een auto met 100 km/h die 250 km moet rijden, doet daar 2,5 uur over." },
          ],
          basiskennis: [{ onderwerp: "De drie formules", uitleg: "S = V×T, V = S/T en T = S/V horen bij elkaar — je kiest de vorm die past bij wat je zoekt." }],
          niveaus: { basis: "240/80=3.", simpeler: "Afstand/snelheid.", nogSimpeler: "3h" },
        },
      },
      {
        q: "Bus 8:00 vertrek Amsterdam → 50 km/h. **Utrecht 40 km**. Aankomst?",
        options: ["8:48", "8:40", "9:00", "8:30"],
        answer: 0,
        wrongHints: [null, "Niet — controleer.", "Te laat.", "Te vroeg."],
        uitlegPad: {
          stappen: [
            { titel: "Bereken eerst de reistijd", tekst: "Gebruik T = S/V om te bepalen hoeveel uur de rit duurt. Zet je antwoord daarna om naar minuten." },
            { titel: "Tel op bij de vertrektijd", tekst: "Tel het aantal minuten dat je vond op bij de vertrektijd 8:00 om de aankomsttijd te vinden." },
          ],
          woorden: [{ woord: "aankomsttijd", uitleg: "Vertrektijd + reistijd = het moment waarop je aankomt." }],
          theorie: "Bij een 'wanneer kom je aan?'-vraag reken je eerst de **reistijd** uit met T = S/V, en tel je die daarna bij de **vertrektijd** op. Een kommagetal als 0,8 uur reken je om naar minuten door het met 60 te vermenigvuldigen.",
          voorbeelden: [
            { type: "school", tekst: "Een schoolbus vertrekt om 7:45 en rijdt 30 km met 60 km/h — eerst de reistijd (0,5 uur = 30 min) bepalen, dan optellen bij 7:45." },
            { type: "thuis", tekst: "Een trein die om 12:00 vertrekt en 90 km met 90 km/h rijdt, komt na 1 uur aan." },
          ],
          basiskennis: [{ onderwerp: "Kommagetal naar minuten", uitleg: "0,1 uur is geen 10 minuten maar 6 minuten (0,1 × 60). Reken uren-met-komma altijd om door met 60 te vermenigvuldigen." }],
          niveaus: { basis: "8:48.", simpeler: "48 min later dan 8:00.", nogSimpeler: "8:48" },
        },
      },
      {
        q: "Wandelaar legt **6 km in 1,5 uur** af. Snelheid?",
        options: ["4 km/h", "9 km/h", "0,25 km/h", "3 km/h"],
        answer: 0,
        wrongHints: [null, "Niet — × ipv ÷.", "Te weinig.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Welke formule?", tekst: "Je kent de afstand en de tijd, en zoekt de snelheid. Welke formule hoort daarbij?" },
            { titel: "Vul in en deel", tekst: "Deel de afstand door de tijd (let op: 1,5 uur, niet 1 of 2 uur)." },
          ],
          woorden: [{ woord: "1,5 uur", uitleg: "Anderhalf uur = 1 uur en 30 minuten. Bij tijd is de komma geen minuten, maar een deel van een uur." }],
          theorie: "Om de **snelheid** te vinden gebruik je V = S/T. Werk je met een tijd als 1,5 uur, reken dan gewoon met het kommagetal (1,5) — dat staat gelijk aan 1 uur en 30 minuten.",
          voorbeelden: [
            { type: "sport", tekst: "Een fietser die 30 km aflegt in 1,5 uur, fietst gemiddeld 30 ÷ 1,5 = 20 km/h." },
            { type: "thuis", tekst: "Een wandeling van 9 km in 2,5 uur geeft een snelheid van 9 ÷ 2,5 = 3,6 km/h." },
          ],
          basiskennis: [{ onderwerp: "Anderhalf = 1,5", uitleg: "'Anderhalf uur' in een som wordt geschreven als het getal 1,5 uur." }],
          niveaus: { basis: "6÷1,5=4.", simpeler: "Tempo wandelen.", nogSimpeler: "4" },
        },
      },
      {
        q: "Twee auto's 100 km uit elkaar, rijden NAAR elkaar toe (60 + 40 km/h). Wanneer ontmoeten?",
        options: ["1 uur", "30 min", "2 uur", "Geen ontmoeting"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Te lang.", "Wel ontmoeting."],
        uitlegPad: {
          stappen: [
            { titel: "Snelheden optellen", tekst: "Als twee dingen naar elkaar toe bewegen, komen ze samen sneller dichterbij dan wanneer er maar één beweegt. Tel de twee snelheden bij elkaar op." },
            { titel: "Afstand door die som", tekst: "Deel de afstand tussen de twee auto's door de opgetelde snelheid om de tijd tot de ontmoeting te vinden." },
          ],
          woorden: [{ woord: "naar elkaar toe", uitleg: "Twee bewegende dingen die elkaar tegemoet rijden — hun snelheden tellen op tot de snelheid waarmee de afstand tussen hen kleiner wordt." }],
          theorie: "Bewegen twee voertuigen **naar elkaar toe**, dan wordt de afstand tussen hen steeds kleiner met de **som** van beide snelheden. Je vindt de ontmoetingstijd door de afstand te delen door die opgetelde snelheid: T = S / (V₁+V₂).",
          voorbeelden: [
            { type: "sport", tekst: "Twee fietsers die 200 m uit elkaar naar elkaar toe rijden met 5 en 3 m/s, komen samen dichterbij met 8 m/s." },
            { type: "thuis", tekst: "Twee treinen die 150 km uit elkaar op elkaar af rijden met 50 en 70 km/h, ontmoeten elkaar na 150 ÷ 120 uur." },
          ],
          basiskennis: [{ onderwerp: "T = S/V", uitleg: "Tijd is afstand gedeeld door snelheid — hier gebruik je de opgetelde snelheid van beide voertuigen." }],
          niveaus: { basis: "1 uur.", simpeler: "Naar elkaar = + snelheden.", nogSimpeler: "1h" },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — praktijksommen mix",
    explanation:
      "**Toets-tijd-snelheid-afstand** is altijd PRAKTISCH:\n• Reistijden bus/trein/auto.\n• Sport-records.\n• Vertraging + inhaal.\n• Treinen kruisen.\n• Met pauzes.\n\n**Werkwijze**:\n1. **Lees** rustig — wat is GEGEVEN, wat GEVRAAGD?\n2. **Eenheden check**: km/h + uren? m/s + s?\n3. **Formule** kiezen: V=S/T, S=V×T, T=S/V.\n4. **Bereken** stap voor stap.\n5. **Eenheid bij antwoord** (km, h, min, m/s).\n6. **Check** door terug te rekenen.\n\n**Voorbeeld-som** (Doorstroomtoets-stijl):\n\n**Som 1 — Reisplan**:\nNL → Frankrijk. Vertrek 8:00. Pauze 1 uur in België (12:00-13:00). Snelheid 90 km/h, totale rij-afstand 1080 km. Aankomst?\n• Rij-tijd: 1080/90 = 12 uur.\n• Met 1 uur pauze: totaal 13 uur.\n• Aankomst: 8:00 + 13 = **21:00**.\n\n**Som 2 — Inhalen**:\nLeo fietst 10:00 weg, 18 km/h. Mark vertrekt 10:15, 24 km/h. Wanneer haalt Mark Leo in?\n• Bij 10:15: Leo is al 0,25 × 18 = 4,5 km vooruit.\n• Snelheids-verschil: 24 − 18 = 6 km/h.\n• Inhaaltijd: 4,5/6 = 0,75 h = 45 min.\n• Mark haalt om 10:15 + 45 min = **11:00**.\n\n**Som 3 — Marathon**:\n42 km marathon in 3 h 30 min. Gemiddelde snelheid?\n• 3 h 30 min = 3,5 h.\n• V = 42/3,5 = **12 km/h**.\n\n**Som 4 — Vliegen**:\nAmsterdam-Tokyo vlucht: 9000 km, 11 uur (incl. wind-effecten). Gemiddelde snelheid?\n• 9000/11 = ~**818 km/h**.\n\n**Som 5 — Twee treinen tegelijk**:\nTrein Amsterdam 130 km/h, Trein Den Haag 110 km/h. Recht naar elkaar, 60 km uit elkaar om 10:00. Wanneer kruisen?\n• Samen 240 km/h.\n• Tijd: 60/240 = 0,25 h = 15 min.\n• Om **10:15** kruisen ze.\n\n**Toets-valkuilen**:\n• **Eenheden missen**: km/h + minuten → vergeet om te rekenen.\n• **Pauzes vergeten** in totaltijd.\n• **Gemiddelde snelheid** verwarrend bij verschillende stukken (zie stap B Som 9).\n• **'Wanneer' vs 'hoe lang'**: 'Wanneer arriveert' = vertrek + reisduur.\n\n**Tip Doorstroomtoets-stijl-vraag-types**:\n• Meerkeuze: bereken alle 4 opties + zie welke past.\n• Tekening helpt — schets reisplan op tijdas.\n• Schrijf eenheid groot in antwoord — vergeet je 'm dan minder.",
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
            { titel: "Bereken de rij-tijd", tekst: "Gebruik T = S/V om te berekenen hoeveel tijd het rijden zelf kost (zonder pauze)." },
            { titel: "Tel de pauze erbij, dan bij het vertrek", tekst: "Tel de pauze van 30 minuten op bij de rij-tijd. Tel de totale tijd daarna op bij de vertrektijd 14:00." },
          ],
          woorden: [{ woord: "totale reistijd", uitleg: "De rij-tijd plus alle pauzes samen — niet alleen de tijd dat het voertuig echt rijdt." }],
          theorie: "Bij een reis met een **pauze** bereken je eerst de rij-tijd met T = S/V, en tel je de pauze daarna apart op. Vergeet je de pauze, dan kom je te vroeg uit — een klassieke valkuil op de toets.",
          voorbeelden: [
            { type: "thuis", tekst: "Een vakantierit van 300 km met 100 km/h en een pauze van 45 minuten: eerst 3 uur rijden berekenen, dan de pauze erbij." },
            { type: "school", tekst: "Een schoolreisje met de bus van 120 km met 60 km/h en 15 minuten pauze werkt op dezelfde manier." },
          ],
          basiskennis: [{ onderwerp: "Pauze telt mee in de aankomsttijd", uitleg: "De aankomsttijd is vertrektijd + rij-tijd + pauzetijd, niet alleen vertrektijd + rij-tijd." }],
          niveaus: { basis: "16:42.", simpeler: "2:12 rijden + 30 min = 2:42 later.", nogSimpeler: "16:42" },
        },
      },
      {
        q: "Marathon 42 km in **3 uur**. Gemiddelde snelheid?",
        options: ["14 km/h", "126 km/h", "12 km/h", "Onmogelijk"],
        answer: 0,
        wrongHints: [null, "Niet — controleer.", "Niet — dat is 3,5 uur.", "Wel mogelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Welke formule?", tekst: "Je kent de afstand (42 km) en de tijd (3 uur), en zoekt de snelheid. Welke formule hoort daarbij?" },
            { titel: "Vul in en deel", tekst: "Deel de afstand door de tijd." },
          ],
          woorden: [{ woord: "marathon", uitleg: "Een hardloopwedstrijd van 42,195 km — in toetsvragen vaak afgerond op 42 km." }],
          theorie: "Om de **gemiddelde snelheid** van een hele wedstrijd te vinden, gebruik je V = S/T: de totale afstand gedeeld door de totale tijd. Dit werkt ook als het tempo tijdens de wedstrijd wisselde — het gaat om het gemiddelde over de hele rit.",
          voorbeelden: [
            { type: "sport", tekst: "Een hardloper die 10 km in 1 uur loopt, heeft een gemiddelde snelheid van 10 km/h." },
            { type: "thuis", tekst: "Een fietstocht van 60 km in 4 uur geeft een gemiddelde snelheid van 15 km/h." },
          ],
          basiskennis: [{ onderwerp: "V = S/T", uitleg: "Snelheid = afstand gedeeld door tijd — de basisformule om een gemiddeld tempo te vinden." }],
          niveaus: { basis: "42/3=14.", simpeler: "Marathon-tempo.", nogSimpeler: "14" },
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
            { titel: "Bereken de reistijd", tekst: "Gebruik T = S/V om uit te rekenen hoeveel uur de treinreis duurt." },
            { titel: "Tel op bij de vertrektijd", tekst: "Tel de reistijd op bij de vertrektijd 14:30 om de aankomsttijd te vinden." },
          ],
          woorden: [{ woord: "reistijd", uitleg: "De tijd die het onderweg-zijn zelf kost, van vertrek tot aankomst." }],
          theorie: "Om een aankomsttijd te vinden, bereken je eerst de reistijd met T = S/V, en tel je die daarna op bij de vertrektijd. Een halve uur (0,5 h) is 30 minuten.",
          voorbeelden: [
            { type: "thuis", tekst: "Een vlucht die om 10:00 vertrekt en 2 uur duurt, komt om 12:00 aan." },
            { type: "sport", tekst: "Een fietstocht die om 9:15 begint en 1,5 uur duurt, eindigt om 10:45." },
          ],
          basiskennis: [{ onderwerp: "T = S/V", uitleg: "Tijd = afstand gedeeld door snelheid — de eerste stap bij elke 'wanneer kom je aan'-vraag." }],
          niveaus: { basis: "17:00.", simpeler: "2,5 uur later.", nogSimpeler: "17:00" },
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
            { titel: "Eerst m/s uitrekenen", tekst: "Gebruik V = S/T met de afstand in meter en de tijd in seconden om de snelheid in m/s te vinden." },
            { titel: "Dan omrekenen naar km/h", tekst: "Zet de uitkomst in m/s om naar km/h met de omrekenfactor die je bij snelheid-eenheden gebruikt." },
          ],
          woorden: [{ woord: "sprint", uitleg: "Een korte, snelle hardloopafstand — hier gemeten in meters en seconden, wat vraagt om de eenheid m/s." }],
          theorie: "Bij een afstand in **meters** en een tijd in **seconden** reken je eerst uit in **m/s** met V = S/T. Wil je de snelheid ook in km/h weten, vermenigvuldig je die m/s-uitkomst met 3,6.",
          voorbeelden: [
            { type: "sport", tekst: "Een zwemmer die 50 m in 25 s aflegt, gaat 50 ÷ 25 = 2 m/s, oftewel 2 × 3,6 = 7,2 km/h." },
            { type: "school", tekst: "Een fietser die 200 m in 20 s aflegt, gaat 10 m/s." },
          ],
          basiskennis: [{ onderwerp: "m/s × 3,6 = km/h", uitleg: "De omrekenfactor tussen meter-per-seconde en kilometer-per-uur." }],
          niveaus: { basis: "10 m/s = 36 km/h.", simpeler: "100/10 + × 3,6.", nogSimpeler: "10/36" },
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
            { titel: "Bereken beide reistijden", tekst: "Gebruik T = S/V twee keer: eenmaal voor de auto (80 km/h) en eenmaal voor de fiets (16 km/h), allebei over 40 km." },
            { titel: "Trek de tijden van elkaar af", tekst: "Trek de kortste reistijd af van de langste om het verschil te vinden." },
          ],
          woorden: [{ woord: "verschil in aankomsttijd", uitleg: "Het aantal uren of minuten dat het ene voertuig eerder aankomt dan het andere." }],
          theorie: "Willen twee voertuigen dezelfde afstand afleggen, bereken dan voor **allebei apart** de reistijd met T = S/V. Het verschil tussen die twee tijden is hoeveel eerder of later het snelste voertuig aankomt.",
          voorbeelden: [
            { type: "sport", tekst: "Een hardloper en een fietser die allebei 10 km afleggen met 10 km/h en 20 km/h, komen met een verschil van 30 minuten aan." },
            { type: "thuis", tekst: "Een auto en een bus die dezelfde 60 km rijden met 60 km/h en 40 km/h, komen op verschillende tijden aan." },
          ],
          basiskennis: [{ onderwerp: "T = S/V per voertuig", uitleg: "Elk voertuig heeft zijn eigen snelheid en dus zijn eigen reistijd over dezelfde afstand." }],
          niveaus: { basis: "2 uur.", simpeler: "Auto 30 min, fiets 2,5 h. Diff 2h.", nogSimpeler: "2h" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tijdSnelheidAfstandPo = {
  id: "tijd-snelheid-afstand-po",
  title: "Tijd + Snelheid + Afstand (Doorstroomtoets groep 7-8)",
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
    "Tijd + snelheid + afstand voor Doorstroomtoets — tijdseenheden + omrekenen, snelheid km/h ↔ m/s, S=V·T-formule, snelheid + tijd berekenen, praktijksommen (reistijden, marathon, inhalen). 5 stappen × 5 vragen. ~15 min.",
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
    "De toets rekenen",
    "Doorstroomtoets",
  ],
  chapters,
  steps,
};

export default tijdSnelheidAfstandPo;
