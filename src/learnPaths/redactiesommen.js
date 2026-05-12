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
