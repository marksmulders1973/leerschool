// Leerpad: Redactiesommen — voor groep 5-8
// 5 stappen. Cito-stijl verhaal-sommen.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#00c853",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["📖","🔍","➕","🔁","🏆"];

const chapters = [
  { letter: "A", title: "Wat is een redactiesom?", emoji: "📖", from: 0, to: 0 },
  { letter: "B", title: "Stappenplan — wat moet je doen?", emoji: "🔍", from: 1, to: 1 },
  { letter: "C", title: "Eén-stap-sommen", emoji: "➕", from: 2, to: 2 },
  { letter: "D", title: "Twee-stap-sommen + meer", emoji: "🔁", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een redactiesom?",
    explanation: "Een **redactiesom** is een rekensom in een **verhaal**. Je moet eerst lezen wat er gevraagd wordt, en dan zelf bedenken welke som je moet maken.\n\n**Voorbeeld**:\n*'Lisa heeft 24 stickers. Ze geeft er 8 weg. Hoeveel houdt ze over?'*\n\nDit is geen 'kale som' (24 − 8). Je moet eerst lezen, daarna de som maken.\n\n**Waarom moeilijker dan kale sommen?**\n• Je moet de **vraag begrijpen**.\n• Je moet zelf **kiezen welke bewerking** *(+, −, ×, of ÷)*.\n• Vaak zijn er **extra getallen** die niet relevant zijn (Cito-strikgetallen).\n• Soms zijn er **meerdere stappen** nodig.\n\n**Cito-vraagvorm — 4 standaard-typen**:\n1. **Optellen**: 'samen', 'totaal', 'in totaal'.\n2. **Aftrekken**: 'verschil', 'meer dan', 'over', 'rest'.\n3. **Vermenigvuldigen**: 'per', 'elk', 'iedereen krijgt'.\n4. **Delen**: 'gelijk verdeeld', 'hoeveel ieder', 'in groepen van'.\n\n**Belangrijk**:\nLezen = **de helft van het werk**. Als je vraag verkeerd begrijpt, gaat alles fout.",
    checks: [
      {
        q: "Welk woord zegt vaak: **vermenigvuldigen**?",
        options: ["per","verschil","over","samen"],
        answer: 0,
        wrongHints: [null,"'Verschil' = aftrekken.","'Over' = aftrekken.","'Samen' = optellen."],
        uitlegPad: {
          stappen: [
            { titel: "Signaalwoorden bij redactiesommen", tekst: "Bij verhaaltjes-sommen geven bepaalde woorden hints welke **bewerking** je moet doen. Leer ze uit hoofd!" },
            { titel: "'Per' = vermenigvuldigen", tekst: "'Per' (of 'elk', 'voor elke') betekent dat iets MEERDERE keren voorkomt. Bv: '€3 per glas, 5 glazen' → 3 × 5 = €15." },
            { titel: "Andere signaalwoorden", tekst: "**Samen / totaal** = optellen. **Verschil / over / minder** = aftrekken. **Per / elk** = vermenigvuldigen. **Verdeeld / gedeeld** = delen." },
          ],
          woorden: [
            { woord: "per", uitleg: "Hint voor vermenigvuldigen (× aantal)." },
            { woord: "elk", uitleg: "Synoniem van 'per' — ook keer-bewerking." },
          ],
          theorie: "Cito-truc redactiesommen: zoek het SIGNAAL-woord. Dat bepaalt welke bewerking. Lees vraag rustig, onderstreep cijfers + signaalwoorden, kies dan bewerking.",
          voorbeelden: [
            { type: "stap", tekst: "'5 dozen met 12 koeken per doos' = 5 × 12 (per = keer)." },
            { type: "stap", tekst: "'10 vrienden krijgen elk €2' = 10 × 2 = €20 (elk = keer)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Per/elk = keer. Samen/totaal = +. Verschil/over = −. Verdeeld = ÷." },
          ],
          niveaus: {
            basis: "'Per' is signaalwoord voor vermenigvuldigen.",
            simpeler: "€3 per glas, 5 glazen = 3×5 = €15.",
            nogSimpeler: "Per = keer.",
          },
        },
      },
      {
        q: "*'Een doos heeft 12 koeken. Sven eet 5. Hoeveel **over**?'* — welke bewerking?",
        options: ["Aftrekken","Optellen","Vermenigvuldigen","Delen"],
        answer: 0,
        wrongHints: [null,"Niet samenvoegen — vraag is wat over is.","Niet vermenigvuldigen.","Niet verdelen."],
      },
      {
        q: "*'In 4 dozen zitten **elk** 12 koeken'.* — welke bewerking voor totaal?",
        options: ["Vermenigvuldigen","Optellen","Aftrekken","Delen"],
        answer: 0,
        wrongHints: [null,"Niet samen optellen — er is een vermenigvuldigings-relatie.","Niet aftrekken.","Niet delen."],
      },
    ],
  },

  {
    title: "Stappenplan — een redactiesom oplossen",
    explanation: "**Cito-stappenplan voor élke redactiesom**:\n\n**Stap 1 — Lees rustig** *(2 keer als 't moet)*. Onderstreep:\n• De **getallen** met hun eenheid (24 stickers, 8 stickers).\n• De **vraag** (hoeveel **over**?).\n\n**Stap 2 — Welke bewerking?** Zoek signaal-woorden:\n• 'samen', 'totaal' → +\n• 'verschil', 'over', 'meer dan', 'minder dan' → −\n• 'per', 'elk', 'iedereen' → ×\n• 'gelijk verdeeld', 'hoeveel ieder' → ÷\n\n**Stap 3 — Schrijf de som op** met getallen + bewerking.\n\n**Stap 4 — Reken** zoals een normale som.\n\n**Stap 5 — Antwoord met eenheid**. *(Niet alleen '8' maar '8 koeken' of '€ 8')*.\n\n**Voorbeeld toegepast**:\n*'Een klas heeft 24 boeken. Er zijn 18 leerlingen. Iedereen krijgt 1 boek. Hoeveel boeken **over**?'*\n\n• Stap 1: getallen = 24 boeken, 18 leerlingen. Vraag = hoeveel over.\n• Stap 2: 'over' → aftrekken.\n• Stap 3: 24 − 18.\n• Stap 4: = 6.\n• Stap 5: **6 boeken over**.\n\n**Cito-valkuilen**:\n• **Strikgetallen**: 'Lisa is 9 jaar en heeft 24 stickers'. De 9 is niet relevant!\n• **Verkeerde volgorde**: 'aftrekken' kan ook 'eerst optellen, dan iets anders eraf'.\n• **Vergeten eenheid**: '€ 8 wisselgeld' niet alleen '8'.",
    checks: [
      {
        q: "*'Tom is 11 jaar. Hij heeft 36 knikkers. Hij verliest er 8.'* Welk **getal is niet relevant**?",
        options: ["11","36","8","Geen"],
        answer: 0,
        wrongHints: [null,"Dat is wel relevant — beginaantal knikkers.","Dat is wel relevant — verloren knikkers.","Wel — leeftijd doet er niet toe."],
        uitlegPad: {
          stappen: [
            { titel: "Cito-strik: extra info", tekst: "Cito stopt soms EXTRA cijfers in een vraag die NIET nodig zijn. Doel: testen of je goed leest + alleen het belangrijke pakt." },
            { titel: "Wat is de vraag eigenlijk?", tekst: "Vraag gaat over **knikkers** (eindstand). Je hebt: beginstand (36) en verlies (8). Reken: 36 − 8 = 28. Leeftijd (11 jaar) is NIET nodig om dit te beantwoorden." },
            { titel: "Truc: onderstreep wat je nodig hebt", tekst: "Lees vraag. Vraag jezelf: 'Welke getallen helpen mij?' Onderstreep die. Andere getallen = afleiders. Veel kinderen rekenen met alle 3 — dan klopt het antwoord niet." },
          ],
          woorden: [
            { woord: "afleider", uitleg: "Extra info die niet nodig is voor antwoord." },
            { woord: "redactiesom", uitleg: "Verhaaltje met cijfers — bereken iets." },
          ],
          theorie: "Cito-tip: bij verhaaltjes-sommen ALTIJD vragen: 'Welke info heb ik echt nodig?' Schrap of negeer wat irrelevant is. Cito test bewust met afleiders.",
          voorbeelden: [
            { type: "stap", tekst: "'Anna heeft 5 € + 3 broers en ze koopt iets van €2.' Antwoord = €5−€2=€3. 'Broers' is afleider." },
            { type: "stap", tekst: "'Trein vertrekt om 8:15 en heeft 6 wagons. Aankomst om 9:30.' Reistijd vraag = 1u15min. 'Wagons' is afleider." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Niet alle gegeven cijfers gebruiken — alleen wat de vraag écht nodig heeft." }],
          niveaus: {
            basis: "Niet alle getallen relevant. Onderstreep wat je echt nodig hebt.",
            simpeler: "Vraag = knikkers. Leeftijd doet er niet toe.",
            nogSimpeler: "Leeftijd = afleider.",
          },
        },
      },
      {
        q: "*'Een doos heeft 24 stickers. Verdeeld over 6 kinderen.'* Welke **bewerking**?",
        options: ["Delen","Optellen","Aftrekken","Vermenigvuldigen"],
        answer: 0,
        wrongHints: [null,"'Verdeeld over' = delen.","Niet samenvoegen.","Niet aftrekken — niemand neemt iets weg.","Niet vermenigvuldigen — verdelen is anders."],
      },
      {
        q: "*'Een fles 1,5 L kost € 2,40. Hoeveel **per liter**?'* — bewerking?",
        options: ["Delen (prijs ÷ liter)","Vermenigvuldigen","Optellen","Aftrekken"],
        answer: 0,
        wrongHints: [null,"Niet vermenigvuldigen — je gaat van groot naar 'per stuk'.","Niet samenvoegen.","Niet aftrekken — vraag is per-eenheid-prijs."],
        uitlegPad: {
          stappen: [
            { titel: "Wat vraagt 'per liter'?", tekst: "'Per liter' betekent: **prijs voor 1 liter**. Je krijgt: 1,5 L = €2,40. Vraag: 1 L = ?" },
            { titel: "Bewerking: delen", tekst: "Van GROTER naar KLEINER (totaal naar per-stuk) = **delen**. Je deelt de TOTAAL-prijs door de hoeveelheid: €2,40 ÷ 1,5 = **€1,60 per liter**." },
            { titel: "Check: klopt het qua grootte?", tekst: "Als 1,5 L = €2,40, moet 1 L MINDER kosten. €1,60 < €2,40. Klopt. Bij twijfel: doe omgekeerd: 1,60 × 1,5 = 2,40. Match!" },
          ],
          woorden: [
            { woord: "per stuk / per liter", uitleg: "Prijs voor 1 eenheid (1 liter, 1 stuk)." },
            { woord: "delen", uitleg: "Totaal ÷ aantal eenheden = per-eenheid." },
          ],
          theorie: "Cito-truc 'per stuk'-vragen: ALTIJD delen. Totaal-prijs ÷ aantal-stuks = prijs per stuk. Werkt voor liters, kilo's, stuks, etc.",
          voorbeelden: [
            { type: "stap", tekst: "3 boeken €36 → per boek = 36÷3 = €12." },
            { type: "stap", tekst: "500 g €4,50 → per kg = €4,50 ÷ 0,5 = €9." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Per stuk = delen. Totaal = vermenigvuldigen. Tegengesteld!" }],
          niveaus: {
            basis: "Per-stuk-prijs = totaal ÷ aantal eenheden.",
            simpeler: "€2,40 ÷ 1,5 = €1,60 per liter.",
            nogSimpeler: "Delen voor 'per stuk'.",
          },
        },
      },
    ],
  },

  {
    title: "Eén-stap-sommen — direct rekenen",
    explanation: "Eén-stap-sommen hebben **één bewerking** nodig. Lees, kies, reken.\n\n**Voorbeelden**:\n\n**A. Optellen**:\n*'Lisa kocht 12 stickers. Vandaag krijgt ze er 8. Hoeveel nu?'*\n• 12 + 8 = **20 stickers**.\n\n**B. Aftrekken**:\n*'Een klas heeft 28 leerlingen. 5 zijn ziek. Hoeveel zijn er aanwezig?'*\n• 28 − 5 = **23 leerlingen**.\n\n**C. Vermenigvuldigen**:\n*'In 5 zakken zitten elk 24 snoepjes. Hoeveel totaal?'*\n• 5 × 24 = **120 snoepjes**.\n\n**D. Delen**:\n*'72 koekjes verdeeld over 8 kinderen. Hoeveel ieder?'*\n• 72 ÷ 8 = **9 koekjes per kind**.\n\n**Cito-tip**: een Cito-vraag is meestal **kort** — 1 tot 3 zinnen. Lees rustig en let op signaal-woorden.\n\n**Veel-voorkomende fout**:\nVraag verkeerd begrijpen. Lees **2 keer** als je twijfelt. Beter rustig dan snel-fout.",
    checks: [
      {
        q: "*'Een doos heeft 35 ballen, 12 zijn rood. Hoeveel **niet rood**?'*",
        options: ["23","47","35","12"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je optellen gedaan?","Dat is totaal, niet 'niet-rood'.","Dat is rood, niet 'niet-rood'."],
      },
      {
        q: "*'Sven loopt 8 dagen 4 km per dag. Hoeveel **totaal**?'*",
        options: ["32 km","12 km","4 km","32"],
        answer: 0,
        wrongHints: [null,"Niet optellen — 'per dag' = vermenigvuldigen.","Veel te weinig.","Vergeet de eenheid niet."],
      },
      {
        q: "*'Een klas spaart € 96 voor 6 kinderen. Hoeveel **per kind**?'*",
        options: ["€ 16","€ 12","€ 96","€ 102"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer 96 ÷ 6.","Dat is totaal, niet per kind.","Veel te veel — controleer."],
      },
    ],
  },

  {
    title: "Twee-stap-sommen — eerst dit, dan dat",
    explanation: "**Twee-stap-sommen** vereisen meerdere bewerkingen. Doe ze in **stappen**.\n\n**Voorbeeld 1 — winkel**:\n*'Mam koopt 3 broden van € 2,80 en betaalt met € 10. Wisselgeld?'*\n\n• **Stap 1**: 3 × €2,80 = **€8,40** *(prijs van broden)*.\n• **Stap 2**: €10,00 − €8,40 = **€1,60 wisselgeld**.\n\n**Voorbeeld 2 — verdelen**:\n*'48 koekjes worden over 6 zakken verdeeld. Per zak gaan er 2 weg. Hoeveel zit er nu in elke zak?'*\n\n• Stap 1: 48 koekjes ÷ 6 zakken = **8 koekjes per zak**.\n• Stap 2: 8 koekjes − 2 koekjes = **6 koekjes per zak**.\n\n**Voorbeeld 3 — combinatie**:\n*'In een doos zitten 12 rode + 18 blauwe + 20 groene knikkers. Hoeveel zijn rood of blauw?'*\n\n• Stap 1: tel rood + blauw: 12 + 18 = **30 knikkers**.\n• Stap 2: 20 groene knikkers zijn niet gevraagd, **30 knikkers is het antwoord**.\n\n**Cito-tip**:\n• **Schrijf elke stap apart op**. Niet alles in 1 keer in je hoofd.\n• **Gebruik de uitkomst van stap 1** in stap 2.\n• **Vergeet de eenheid** niet bij het eindantwoord.\n\n**Veel-voorkomende fout**:\nDirect proberen 1 grote berekening te maken. Twee stapjes zijn betrouwbaarder dan 1 lange.",
    checks: [
      {
        q: "*'Een fles 1,5 L kost € 2,10. Hoe duur per glas van 250 mL?'*",
        options: ["€ 0,35","€ 0,30","€ 0,40","€ 1,40"],
        answer: 0,
        wrongHints: [null,"Te weinig — eerst aantal glazen: 1500 ml ÷ 250 ml = 6 glazen. Dan €2,10 ÷ 6.","Te veel — controleer aantal glazen.","Veel te veel — heb je per liter gerekend?"],
      },
      {
        q: "*'Een klas heeft € 200. Ze kopen 12 boeken van € 14,50. Hoeveel over?'*",
        options: ["€ 26","€ 174","€ 14,50","€ 200"],
        answer: 0,
        wrongHints: [null,"Te veel — eerst 12 × €14,50 = €174. Dan €200 − €174.","Dat is wat ze betalen, niet wat over is.","Verkeerd — dat is prijs per boek.","Niets afgetrokken."],
      },
      {
        q: "*'30 leerlingen verdelen € 90 evenwichtig. Iedereen krijgt 1 ijsje van € 1,50. Hoeveel **over per kind**?'*",
        options: ["€ 1,50","€ 3","€ 0","€ 4,50"],
        answer: 0,
        wrongHints: [null,"Te veel — eerst per kind: €90 ÷ 30 = €3. Dan €3 − €1,50.","Niet 0 — er blijft wat over per kind.","Klopt niet — dat is per-kind-totaal vóór ijsje, niet 'over'."],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — redactiesommen mix",
    explanation: "Mix-toets met redactiesommen in Cito-stijl. Soms 1 stap, soms 2 stappen. Lees rustig, gebruik het stappenplan.\n\nVeel succes!",
    checks: [
      {
        q: "*'In een tuin staan 24 rozen, 18 tulpen en 12 zonnebloemen. Hoeveel bloemen **totaal**?'*",
        options: ["54","42","30","60"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je een soort overgeslagen?","Te weinig — heb je 2 soorten geteld?","Te veel."],
      },
      {
        q: "*'Een schooldag duurt 6 uur 30 min. Pauzes 45 min totaal. Hoeveel **les-tijd**?'*",
        options: ["5 uur 45 min","6 uur 15 min","5 uur 30 min","7 uur 15 min"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: 6:30 − 0:45.","Te weinig — denk in minuten: 390 - 45.","Veel te veel — heb je optellen gedaan?"],
      },
      {
        q: "*'Een vrachtwagen vervoert 24 dozen van 18 kg. Plus zijn eigen gewicht 1200 kg. **Totaal gewicht**?'*",
        options: ["1632 kg","432 kg","1212 kg","1800 kg"],
        answer: 0,
        wrongHints: [null,"Te weinig — vergeet vrachtwagen-gewicht niet.","Klopt niet — vergeet vrachtwagen.","Veel te veel."],
      },
      {
        q: "*'Drie vriendinnen verdelen € 75 evenwichtig. Daarna koopt iedereen iets van € 12. **Hoeveel ieder over?'*",
        options: ["€ 13","€ 25","€ 12","€ 39"],
        answer: 0,
        wrongHints: [null,"Te veel — dat is per kind vóór koop.","Niets afgetrokken.","Te veel — controleer 25 - 12.","Veel te veel."],
      },
      {
        q: "*'Een trein vertrekt 09:35 en rijdt 2 uur 50 min. **Aankomst**?'*",
        options: ["12:25","11:85","12:05","11:25"],
        answer: 0,
        wrongHints: [null,"Past niet — 85 minuten bestaat niet.","Te vroeg — heb je 50 min wel meegerekend?","Te vroeg — controleer."],
      },
      {
        q: "*'In de klas zitten 28 kinderen. **3/4 deel** is naar gym. Hoeveel kinderen **niet**?'*",
        options: ["7","21","4","14"],
        answer: 0,
        wrongHints: [null, "Dat is wel naar gym (3/4 van 28).", "Te weinig.", "Dat is de helft, niet 1/4."],
        uitlegPad: {
          stappen: [
            { titel: "Breuk-vraag in verhaal", tekst: "3/4 zijn weg → blijven 1/4 over. Twee manieren: bereken 1/4 van 28 OF bereken 3/4 en trek dat af van 28." },
            { titel: "Reken via 1/4", tekst: "1/4 van 28 = 28 ÷ 4 = **7 kinderen niet**. Klaar." },
          ],
          woorden: [{ woord: "1/4 deel", uitleg: "Een kwart = 1 van de 4 gelijke stukken." }],
          theorie: "Bij '3/4 doet X — hoeveel doet niet?' → reken 1/4 (de rest), niet 3/4.",
          voorbeelden: [{ type: "stap", tekst: "20 leerlingen, 2/5 vegetarisch → 3/5 niet → 20÷5×3 = 12." }],
          basiskennis: [{ onderwerp: "Lees vraag goed", uitleg: "'Hoeveel niet' is anders dan 'hoeveel wel'. Verwissel niet." }],
          niveaus: { basis: "1/4 van 28 = 7. = A.", simpeler: "28 ÷ 4 = 7 kinderen niet naar gym. = A.", nogSimpeler: "7 = A." },
        },
      },
      {
        q: "*'4 vrienden bestellen pizza voor **€ 38**. Bezorgkosten **€ 4**. Iedereen betaalt evenveel. **Per persoon**?'*",
        options: ["€ 10,50","€ 9,50","€ 8,50","€ 42"],
        answer: 0,
        wrongHints: [null, "Te weinig — heb je bezorgkosten meegerekend?", "Te weinig — €38 ÷ 4 = €9,50, maar bezorgkosten missen.", "Dat is totaal, niet per persoon."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: totaal", tekst: "Pizza + bezorging: €38 + €4 = **€42**." },
            { titel: "Stap 2: delen", tekst: "€42 ÷ 4 = **€10,50 per persoon**." },
          ],
          woorden: [{ woord: "evenveel", uitleg: "Gelijk verdeeld — iedereen betaalt zelfde bedrag." }],
          theorie: "Twee-stap: eerst alles bij elkaar optellen, daarna delen door aantal personen.",
          voorbeelden: [{ type: "stap", tekst: "Boodschap €30 + statiegeld €2 = €32 ÷ 4 mensen = €8/persoon." }],
          basiskennis: [{ onderwerp: "Vergeet niets", uitleg: "Bezorgkosten, BTW, statiegeld — alles meetellen in stap 1." }],
          niveaus: { basis: "€42 ÷ 4 = €10,50. = A.", simpeler: "Eerst totaal: €38 + €4 = €42. Dan delen: €42 ÷ 4 = €10,50. = A.", nogSimpeler: "€10,50 = A." },
        },
      },
      {
        q: "*'Een doos snoep weegt **2 kg**. **40%** wordt opgegeten. Hoeveel **gram blijft over**?'*",
        options: ["1200 g","800 g","1600 g","2000 g"],
        answer: 0,
        wrongHints: [null, "Dat is opgegeten (40% van 2000), niet over.", "Te veel — controleer percentage.", "Dat is alles, niets opgegeten."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst eenheden gelijk maken", tekst: "Doos = 2 kg = **2000 gram**. Antwoord moet in gram." },
            { titel: "Bereken wat OVER blijft", tekst: "40% opgegeten = 60% over. 60% van 2000 = 2000 × 0,60 = **1200 gram**." },
          ],
          woorden: [
            { woord: "% opgegeten", uitleg: "Deel dat weg is. Rest = 100% − dat percentage." },
            { woord: "1 kg", uitleg: "1000 gram. Cito vraagt vaak omrekening tussen kg/g." },
          ],
          theorie: "Drie-stap-vraag:\n1. Eenheid omrekenen (kg → g)\n2. Bereken rest-percentage (100 − % weg)\n3. Pas dat percentage toe op totaal",
          voorbeelden: [{ type: "stap", tekst: "1 kg, 25% op = 75% over = 750 gram." }],
          basiskennis: [{ onderwerp: "Vraag-eenheid", uitleg: "Antwoord in gevraagde eenheid — let goed op gram vs kg." }],
          niveaus: { basis: "60% van 2000 g = 1200 g. = A.", simpeler: "2 kg = 2000 g. 40% op = 60% over. 60% van 2000 = 1200 g. = A.", nogSimpeler: "1200 g = A." },
        },
      },
      {
        q: "*'Een sportclub heeft **120 leden**. Volgend jaar **10% meer**. Hoeveel leden **dan**?'*",
        options: ["132","130","108","12"],
        answer: 0,
        wrongHints: [null, "Te weinig — 10% van 120 is 12, niet 10.", "Dat is wat ze HEBBEN min 10% — 'meer' = optellen.", "Dat is alleen de toename, niet het totaal."],
        uitlegPad: {
          stappen: [
            { titel: "10% van 120", tekst: "10% = 1/10. 120 ÷ 10 = **12** leden erbij." },
            { titel: "Totaal", tekst: "Oud + toename = 120 + 12 = **132 leden**." },
          ],
          woorden: [{ woord: "10%-truc", uitleg: "10% van iets = ÷ 10. Heel handig in hoofd." }],
          theorie: "Bij 'X% meer / minder': bereken eerst de toename/afname (% × startgetal), tel op of trek af.",
          voorbeelden: [
            { type: "stap", tekst: "200 leden, 5% meer: 5% van 200 = 10. Totaal 210." },
            { type: "stap", tekst: "80 boeken, 25% minder: 25% van 80 = 20. Over: 60." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen toename", uitleg: "Vraag 'hoeveel dan' = nieuw totaal, niet alleen de toename." }],
          niveaus: { basis: "120 + 12 = 132. = A.", simpeler: "10% van 120 = 12 leden erbij. 120 + 12 = 132. = A.", nogSimpeler: "132 = A." },
        },
      },
      {
        q: "*'In groep 8 zitten **27 leerlingen**. **2/3** gaat naar VMBO, de rest naar HAVO/VWO. Hoeveel naar **HAVO/VWO**?'*",
        options: ["9","18","13","6"],
        answer: 0,
        wrongHints: [null, "Dat is naar VMBO (2/3), niet de rest.", "Niet deelbaar — controleer 27 ÷ 3.", "Te weinig — controleer met 27 − 18."],
        uitlegPad: {
          stappen: [
            { titel: "Wie zijn 'de rest'?", tekst: "2/3 naar VMBO → **1/3** naar HAVO/VWO. (Want 2/3 + 1/3 = 3/3 = alles.)" },
            { titel: "Reken 1/3 van 27", tekst: "27 ÷ 3 = **9 leerlingen** naar HAVO/VWO." },
            { titel: "Check", tekst: "VMBO: 27 × 2/3 = 18. HAVO/VWO: 9. Samen: 18 + 9 = 27 ✓ klopt." },
          ],
          woorden: [
            { woord: "2/3", uitleg: "Twee derde van iets = 2 van de 3 gelijke stukken." },
            { woord: "de rest", uitleg: "Wat overblijft. Bij breuken: 1 − die breuk." },
          ],
          theorie: "Bij 'X-deel doet A, rest doet B' → reken (1 − X-deel) voor de rest. Of: trek 'A-aantal' af van totaal.",
          voorbeelden: [{ type: "stap", tekst: "30 kinderen, 3/5 buiten spelen → 2/5 binnen = 12 kinderen." }],
          basiskennis: [{ onderwerp: "Schooladvies-vraag", uitleg: "Cito-stof. Doorstroomtoets gebruikt dit soort verdelingen vaak." }],
          niveaus: { basis: "1/3 van 27 = 9. = A.", simpeler: "Rest = 1/3. 27 ÷ 3 = 9 naar HAVO/VWO. = A.", nogSimpeler: "9 = A." },
        },
      },
      { q: "Lisa heeft 36 stickers. Ze geeft 1/4 weg. Hoeveel houdt ze over?", options: ["27","9","32","12"], answer: 0, wrongHints: [null, "Dat is wat ze WEG geeft.", "Te veel — niet alleen 4 weg.", "Niet — 1/4 is geen 12."] },
      { q: "Een rugzak kost €40. Met 15% korting kost hij?", options: ["€34","€25","€55","€38"], answer: 0, wrongHints: [null, "Te laag — 25% korting niet 15%.", "Niet — korting trekt af, telt niet op.", "Bijna — reken korting nogmaals."] },
      { q: "Tom fietst 12 km in 1 uur. Hoeveel km in 30 minuten?", options: ["6 km","12 km","24 km","18 km"], answer: 0, wrongHints: [null, "Dat is in 1 uur.", "Dat is 2 uur.", "Niet — halveer 12, niet bij optellen."] },
      { q: "5 vrienden delen 20 koeken eerlijk. Per persoon?", options: ["4","5","20","2"], answer: 0, wrongHints: [null, "Aantal personen.", "Totaal.", "Te weinig."] },
      { q: "Anna had €25. Kocht boek €12 + pen €3. Hoeveel over?", options: ["€10","€15","€40","€13"], answer: 0, wrongHints: [null, "Niet — twee uitgaven.", "Niet — geld minder, niet meer.", "Bijna."] },
      { q: "In de klas 24 leerlingen. ⅔ jongens. Hoeveel jongens?", options: ["16","8","12","18"], answer: 0, wrongHints: [null, "Dat is ⅓.", "Helft.", "Drie kwart."] },
      { q: "Een vlucht duurt 3 uur 30 min. Begin 14:00. Eindigt om?", options: ["17:30","17:00","18:30","16:30"], answer: 0, wrongHints: [null, "Niet — vergeet niet 30 min.", "Te lang.", "Te kort."] },
      { q: "Doos heeft 12 chocoladerepen. 3 dozen?", options: ["36","12","9","15"], answer: 0, wrongHints: [null, "Dat is 1 doos.", "Niet zo.", "Niet."] },
      { q: "Tot welk **signaalwoord** kies je delen?", options: ["per persoon","samen","meer","plus"], answer: 0, wrongHints: [null, "Optellen.", "Niet expliciet.", "Optellen."] },
      { q: "100 m hardlopen in 20 sec. Snelheid in m/sec?", options: ["5","20","100","2"], answer: 0, wrongHints: [null, "Tijd.", "Afstand.", "Te laag."] },
      { q: "Klas heeft 30 leerlingen. 12 meisjes. Hoeveel jongens?", options: ["18","12","30","42"], answer: 0, wrongHints: [null, "Aantal meisjes.", "Totaal.", "Te veel."] },
      { q: "Marathon 42 km. Loper deed al 1/3. Nog hoeveel km?", options: ["28","14","42","21"], answer: 0, wrongHints: [null, "Dat is gedaan.", "Hele.", "Helft."] },
      { q: "Trein 250 km/u. In 3 uur?", options: ["750","250","83","550"], answer: 0, wrongHints: [null, "1 uur.", "Per uur ÷3.", "Niet."] },
      { q: "Bij **'samen'** in een redactiesom kies je?", options: ["Optellen","Aftrekken","Vermenigvuldigen","Delen"], answer: 0, wrongHints: [null, "Verschil = aftrekken.", "Per groep = ×.", "Eerlijk verdelen = ÷."] },
      { q: "8 leerlingen krijgen elk 3 stickers. Hoeveel totaal?", options: ["24","11","3","8"], answer: 0, wrongHints: [null, "Optelfout.", "Per leerling.", "Aantal leerlingen."] },
      { q: "Bij **'verschil'** in een som doe je?", options: ["Aftrekken","Optellen","Vermenigvuldigen","Delen"], answer: 0, wrongHints: [null, "Samen = +.", "Per × = ×.", "Eerlijk = ÷."] },
      { q: "Boek van 240 pagina's. Anna las al 150. Nog hoeveel?", options: ["90","150","240","390"], answer: 0, wrongHints: [null, "Al gelezen.", "Hele.", "Bij elkaar."] },
      { q: "Liefde voor 4 dagen 6 kg appels. Per dag?", options: ["1,5 kg","6 kg","24 kg","4 kg"], answer: 0, wrongHints: [null, "Hele.", "Vermenigvuldigd.", "Aantal dagen."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const redactiesommen = {
  id: "redactiesommen-pad",
  title: "Redactiesommen — Cito groep 5-8",
  emoji: "📖",
  level: "groep5-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Verbanden — verhalen-sommen",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F" },
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
  intro:
    "Redactiesommen voor groep 5-8: hoe lees je een rekensom in een verhaal, signaal-woorden voor +/-/×/÷, één-stap- en twee-stap-sommen, eindopdracht. ~12 min.",
  triggerKeywords: [
    "redactiesom","verhaal","stappenplan","signaalwoorden",
    "samen","verschil","per","elk","verdeeld",
  ],
  chapters,
  steps,
};

export default redactiesommen;
