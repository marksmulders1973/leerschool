// Leerpad: Kalender-rekenen (data + dagen + leeftijd) — groep 6-8 PO.
// Cito-onderdeel meten: tijd. Referentieniveau 1F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  highlight: "#ffd54f",
  weekend: "#ff8a65",
  today: "#42a5f5",
};

const stepEmojis = ["📅", "➡️", "🌍", "🎂", "🏖️", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een kalender?", emoji: "📅", from: 0, to: 0 },
  { letter: "B", title: "Dagen tellen", emoji: "➡️", from: 1, to: 1 },
  { letter: "C", title: "Schrikkeljaar + speciale data", emoji: "🌍", from: 2, to: 2 },
  { letter: "D", title: "Leeftijden", emoji: "🎂", from: 3, to: 3 },
  { letter: "E", title: "Praktijk — vakantie + school", emoji: "🏖️", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function kalenderSvg() {
  const w = 320, h = 200;
  const startX = 30, startY = 60;
  const cellW = 38, cellH = 24;
  const days = ["ma", "di", "wo", "do", "vr", "za", "zo"];
  let cells = "";
  let dagen = "";
  // Voorbeeld kalender van maart: begin op maandag voor demo
  const datums = [
    [null, null, null, null, null, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    [31, null, null, null, null, null, null],
  ];
  days.forEach((d, i) => {
    const x = startX + i * cellW;
    const isWeekend = i >= 5;
    cells += `<text x="${x + cellW / 2 - 2}" y="${startY - 6}" text-anchor="middle" fill="${isWeekend ? COLORS.weekend : COLORS.curve2}" font-size="11" font-family="Arial" font-weight="bold">${d}</text>`;
  });
  datums.forEach((row, r) => {
    row.forEach((dag, c) => {
      if (dag === null) return;
      const x = startX + c * cellW;
      const y = startY + r * cellH;
      const isWeekend = c >= 5;
      const isToday = dag === 14;
      const fill = isToday ? COLORS.today : (isWeekend ? "rgba(255,138,101,0.18)" : COLORS.paper);
      cells += `<rect x="${x}" y="${y}" width="${cellW - 2}" height="${cellH - 2}" fill="${fill}" stroke="${COLORS.curve}" stroke-width="0.5"/>`;
      const txtFill = isToday ? "#0e1014" : COLORS.text;
      cells += `<text x="${x + cellW / 2 - 2}" y="${y + cellH - 8}" text-anchor="middle" fill="${txtFill}" font-size="11" font-family="Arial" font-weight="${isToday ? "bold" : "normal"}">${dag}</text>`;
    });
  });
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Maart 2026 — kalender-voorbeeld</text>
<text x="${w / 2}" y="40" text-anchor="middle" fill="${COLORS.today}" font-size="11" font-family="Arial">vandaag = 14 maart</text>
${cells}
${dagen}
</svg>`;
}

const steps = [
  // STAP 1: Wat is een kalender?
  {
    title: "Wat is een kalender?",
    explanation:
      "Een **kalender** is een overzicht van **dagen, weken, maanden en het jaar**.\n\n**De vaste afspraken** *(uit je hoofd!)*:\n• 1 week = **7 dagen**.\n• 1 maand = **28, 29, 30 of 31 dagen** *(afhankelijk van welke)*.\n• 1 jaar = **12 maanden** = ongeveer **365 dagen**.\n• 1 schrikkeljaar = **366 dagen** *(1 dag extra in februari)*.\n\n**De maanden + hun dagen**:\n• **31 dagen**: januari, maart, mei, juli, augustus, oktober, december.\n• **30 dagen**: april, juni, september, november.\n• **28 dagen** *(of 29 in schrikkeljaar)*: februari.\n\n**Trucje — knokkels-truc**:\nMaak een vuist. De knokkels = 31-dagen maanden, de inhammen = kortere. Begin met januari (knokkel) → februari (inham, 28) → maart (knokkel, 31) → enz.\n\n**De dagen van de week**:\nmaandag, dinsdag, woensdag, donderdag, vrijdag, **zaterdag, zondag** *(weekend)*.\n\n**Seizoenen** (Nederland):\n• Lente: maart, april, mei.\n• Zomer: juni, juli, augustus.\n• Herfst: september, oktober, november.\n• Winter: december, januari, februari.\n\n**Speciale data om te kennen**:\n• 1 januari — Nieuwjaar.\n• 5 december — Sinterklaas / pakjesavond.\n• 25 december — Eerste kerstdag.\n• 26 december — Tweede kerstdag.\n• 27 april — Koningsdag.\n• 4 mei — Dodenherdenking.\n• 5 mei — Bevrijdingsdag.",
    svg: kalenderSvg(),
    checks: [
      {
        q: "Hoeveel **dagen** in een **gewoon jaar**?",
        options: ["365 dagen", "360 dagen", "366 dagen", "364 dagen"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Dat is een schrikkeljaar.", "Te weinig."],
      },
      {
        q: "Hoeveel dagen in **februari** in een **schrikkeljaar**?",
        options: ["29 dagen", "28 dagen", "30 dagen", "31 dagen"],
        answer: 0,
        wrongHints: [null, "Klopt — 1 dag extra.", "Dat is een gewoon jaar.", "Te veel.", "Te veel."],
      },
      {
        q: "Welke maand heeft **30 dagen**?",
        options: ["April", "Januari", "Maart", "December"],
        answer: 0,
        wrongHints: [null, "Klopt — april heeft 30.", "Januari heeft 31.", "Maart heeft 31.", "December heeft 31."],
      },
      {
        q: "In welk seizoen zit **augustus** (Nederland)?",
        options: ["Zomer", "Herfst", "Lente", "Winter"],
        answer: 0,
        wrongHints: [null, "Klopt — juni/juli/augustus = zomer.", "Herfst = sep/okt/nov.", "Lente = maart/april/mei.", "Winter = dec/jan/feb."],
      },
    ],
  },

  // STAP 2: Dagen tellen
  {
    title: "Dagen tellen — vooruit en achteruit",
    explanation:
      "Cito vraagt vaak: *'Wat is de dag X dagen na DATUM?'* of *'X dagen geleden was DATUM'*.\n\n**Stappenplan — vooruit tellen (na)**:\n1. Schrijf de start-datum op.\n2. Tel zo veel mogelijk **hele weken** (7 dagen) — verschuif de datum gewoon, dag-naam blijft hetzelfde.\n3. Tel de resterende dagen één voor één.\n\n**Voorbeeld**: 'Wat is 10 dagen na **vrijdag 5 maart**?'\n• 10 dagen = **7 + 3 dagen**.\n• Vrijdag 5 maart + 1 week = vrijdag 12 maart.\n• 12 maart + 3 dagen = za 13, zo 14, **ma 15 maart**.\n• Antwoord: **maandag 15 maart**.\n\n**Stappenplan — achteruit tellen (geleden)**:\nZelfde, maar terug in plaats van vooruit.\n\n**Voorbeeld**: '14 dagen geleden was woensdag 20 mei. Welke dag is **vandaag** = wat als jij toen al wist het is 'vandaag 14 dagen later'?'* Beter: 'Wat is 14 dagen NA woensdag 20 mei?'\n• 14 dagen = 2 weken.\n• Datum + 14 = 3 juni. Dag-naam blijft **woensdag** *(want hele weken)*.\n• Antwoord: woensdag 3 juni.\n\n**Cito-truc — dag-naam berekenen**:\n• **+7 dagen = zelfde dag-naam** (dezelfde dag van de week).\n• **+1 dag** = volgende dag.\n• **+14 dagen** = ook zelfde dag.\n• **+21 dagen** = zelfde dag.\n\nElk veelvoud van 7 → dezelfde dag-naam.\n\n**Veel-voorkomende fout**:\n• Vergeten dat een maand niet altijd 30 of 31 heeft.\n• Vergeten dat februari 28 of 29 dagen heeft.\n• Verwarring tussen 'na' en 'geleden'.",
    checks: [
      {
        q: "**7 dagen na maandag** is welke dag?",
        options: ["Maandag", "Dinsdag", "Zondag", "Zaterdag"],
        answer: 0,
        wrongHints: [null, "Klopt — 1 hele week → zelfde dag-naam.", "Dat is dag erna.", "Dat is 1 dag ervoor.", "Dat is 2 dagen ervoor."],
      },
      {
        q: "**10 dagen na dinsdag** is welke dag?",
        options: ["Vrijdag", "Donderdag", "Zaterdag", "Dinsdag"],
        answer: 0,
        wrongHints: [null, "Klopt — di+7=di, di+3 dagen = vr.", "Te weinig — di+9 dagen, niet 10.", "Te veel.", "Dat is +7 of +14, niet +10."],
        uitlegPad: {
          stappen: [
            { titel: "10 = 7 + 3", tekst: "10 dagen = 1 hele week (7) + 3 dagen extra. Dinsdag + 7 = dinsdag. + 3 = vrijdag." },
          ],
          woorden: [{ woord: "+7 dagen", uitleg: "Een hele week vooruit — zelfde dag-naam." }],
          theorie: "Splits het aantal dagen in: hele weken (× 7) + extra dagen.",
          voorbeelden: [{ type: "stap", tekst: "Di + 7 = di. Di + 1 = wo. Wo + 1 = do. Do + 1 = vr. Totaal: vr." }],
          basiskennis: [{ onderwerp: "Niet alle 10 één voor één", uitleg: "Slim is groepjes van 7 dagen wegtrekken." }],
          niveaus: {
            basis: "Vrijdag. A.",
            simpeler: "10 dagen = 1 week + 3 dagen. Dinsdag + 1 week = dinsdag. + 3 dagen = vrijdag. = A.",
            nogSimpeler: "Vrijdag = A.",
          },
        },
      },
      {
        q: "**Vandaag = 10 maart**. Welke datum is **5 dagen later**?",
        options: ["15 maart", "5 maart", "14 maart", "20 maart"],
        answer: 0,
        wrongHints: [null, "Klopt — 10 + 5 = 15.", "Dat is vandaag.", "Te weinig — controleer.", "Te veel."],
      },
      {
        q: "**Vandaag = 28 februari (gewoon jaar)**. Welke datum is **3 dagen later**?",
        options: ["3 maart", "31 februari", "1 maart", "5 maart"],
        answer: 0,
        wrongHints: [null, "Klopt — 28 feb + 1 = 1 mrt (geen 29!). + 2 = 2 mrt. + 3 = 3 mrt.", "31 februari bestaat niet.", "Te weinig — dat is +1.", "Te veel."],
      },
    ],
  },

  // STAP 3: Schrikkeljaar + speciale data
  {
    title: "Schrikkeljaar + speciale data",
    explanation:
      "**Schrikkeljaar** = een jaar met **366 dagen**. Dat extra dagje zit in februari (29 i.p.v. 28).\n\n**Wanneer is het schrikkeljaar?**\n• Elk **4e jaar**: 2020, 2024, 2028, 2032, 2036, ...\n• Behalve hele eeuwen (1900, 2100 niet), tenzij deelbaar door 400 (2000 wél, 2400 wél).\n• Voor Cito kun je makkelijk werken met: 'deelbaar door 4 → schrikkeljaar'. Bv. 2024 ÷ 4 = 506 → schrikkeljaar ✓.\n\n**Voorbeelden**:\n• 2024 — schrikkeljaar (deelbaar door 4).\n• 2025 — gewoon jaar.\n• 2026 — gewoon jaar.\n• 2027 — gewoon jaar.\n• 2028 — schrikkeljaar.\n• 2100 — geen schrikkeljaar *(eeuwjaar, niet deelbaar door 400)*.\n\n**Speciale data om te kennen**:\n• **1 januari** — Nieuwjaarsdag.\n• **5 december** — Sinterklaas (pakjesavond).\n• **25 december** — Eerste kerstdag.\n• **26 december** — Tweede kerstdag.\n• **31 december** — Oudejaarsdag.\n• **27 april** — Koningsdag.\n• **4 mei** — Dodenherdenking.\n• **5 mei** — Bevrijdingsdag.\n• **Pasen** — eerste zondag na de eerste volle maan na 21 maart *(verandert per jaar)*.\n\n**Cito-truc — schrikkeljaar 'deel door 4'**:\nKijk of het jaartal deelbaar is door 4. Zo ja: 99% schrikkeljaar.\n\n**Veel-voorkomende fout**:\nDenken dat 29 februari elk jaar bestaat. Alleen in schrikkeljaar.",
    checks: [
      {
        q: "Is **2024** een schrikkeljaar?",
        options: ["Ja", "Nee", "Hangt af", "Weet niet"],
        answer: 0,
        wrongHints: [null, "Klopt — 2024 ÷ 4 = 506 → deelbaar.", "Reken nogmaals.", "Eenduidig — wel.", "2024 is wél schrikkeljaar."],
      },
      {
        q: "Welk jaar is een **schrikkeljaar**?",
        options: ["2028", "2025", "2026", "2027"],
        answer: 0,
        wrongHints: [null, "Klopt — 2028 ÷ 4 = 507.", "2025 niet deelbaar door 4.", "2026 niet deelbaar door 4.", "2027 niet deelbaar door 4."],
      },
      {
        q: "Op welke datum is **Koningsdag**?",
        options: ["27 april", "30 april", "5 mei", "1 januari"],
        answer: 0,
        wrongHints: [null, "Klopt — 27 april (verjaardag koning).", "Oude Koninginnedag — niet meer.", "Dat is Bevrijdingsdag.", "Dat is Nieuwjaar."],
      },
      {
        q: "Hoeveel dagen in **februari 2027** *(gewoon jaar)*?",
        options: ["28 dagen", "29 dagen", "30 dagen", "31 dagen"],
        answer: 0,
        wrongHints: [null, "Klopt — gewoon jaar = 28 dagen.", "Dat is schrikkeljaar.", "Februari heeft nooit 30.", "Februari heeft nooit 31."],
      },
    ],
  },

  // STAP 4: Leeftijden uitrekenen
  {
    title: "Leeftijden uitrekenen",
    explanation:
      "**Hoe bereken je een leeftijd?**\n\n**Formule** *(uit je hoofd!)*:\n**Leeftijd = huidig jaar − geboortejaar**\n\n**Maar let op**: ben je dit jaar al **jarig geweest**? Zo niet, **1 jaar eraf**.\n\n**Voorbeeld 1**: Anna is geboren op **3 mei 2010**. Hoe oud is ze op **1 augustus 2026**?\n• 2026 − 2010 = 16.\n• Is ze in 2026 al jarig geweest *(3 mei)*? Ja, 1 augustus is ná 3 mei.\n• Antwoord: **16 jaar**.\n\n**Voorbeeld 2**: Tom is geboren op **20 oktober 2013**. Hoe oud is hij op **5 maart 2026**?\n• 2026 − 2013 = 13.\n• Is hij in 2026 al jarig geweest *(20 oktober)*? **Nee** — 5 maart is vóór 20 oktober.\n• Dus 1 jaar eraf: **12 jaar**.\n\n**Cito-stappenplan**:\n1. Trek geboortejaar af van huidig jaar.\n2. Check: heeft de jarige al verjaardag gehad dit jaar?\n   - **Ja** → klaar, leeftijd is het verschil.\n   - **Nee** → trek 1 af.\n\n**Voorbeeld 3 — meer mensen vergelijken**:\n*'Lisa is geboren in 2014, haar broer Jeroen in 2012. Hoeveel jaar verschil?'*\n• 2014 − 2012 = 2 jaar.\n• **Lisa is 2 jaar jonger dan Jeroen**.\n\n**Cito-truc — vraagstelling**:\n• *'Hoeveel ouder?'* → groot − klein (= verschil).\n• *'In welk jaar wordt X = leeftijd?'* → geboortejaar + leeftijd.\n\n**Voorbeeld 4**: 'Mark is geboren in 2014. Wanneer wordt hij 18?'\n• 2014 + 18 = 2032. **In 2032 wordt Mark 18**.",
    checks: [
      {
        q: "Hoe **bereken** je iemands leeftijd?",
        options: ["Huidig jaar − geboortejaar", "Geboortejaar − huidig jaar", "Huidig jaar + geboortejaar", "Geboortejaar × leeftijd"],
        answer: 0,
        wrongHints: [null, "Klopt — aftrekken in deze volgorde.", "Andersom is negatief — fout.", "Optellen geeft een onmogelijk getal.", "Vermenigvuldigen geeft onmogelijk getal."],
      },
      {
        q: "Anna geboren in **2010**, vandaag is **2026** *(ze is al jarig dit jaar)*. Leeftijd?",
        options: ["16 jaar", "15 jaar", "14 jaar", "17 jaar"],
        answer: 0,
        wrongHints: [null, "Klopt — 2026 − 2010 = 16, al jarig = klaar.", "Te weinig — al jarig betekent geen aftrek.", "Te weinig — controleer 2026-2010.", "Te veel."],
      },
      {
        q: "Tom geboren **20 oktober 2013**. Vandaag is **5 maart 2026** *(NOG niet jarig dit jaar)*. Leeftijd?",
        options: ["12 jaar", "13 jaar", "14 jaar", "11 jaar"],
        answer: 0,
        wrongHints: [null, "Klopt — 2026 − 2013 = 13, nog niet jarig → 1 eraf = 12.", "Te veel — hij is nog niet jarig.", "Te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Verschil jaartallen", tekst: "2026 - 2013 = 13." },
            { titel: "Check verjaardag", tekst: "Verjaardag is 20 oktober. Vandaag is 5 maart. 5 maart is vóór 20 oktober → nog niet jarig dit jaar." },
            { titel: "1 eraf", tekst: "Omdat hij nog niet jarig is, leeftijd = 13 - 1 = 12 jaar." },
          ],
          woorden: [{ woord: "jarig", uitleg: "Op je verjaardag word je 1 jaar ouder." }],
          theorie: "Leeftijd = jaartal-verschil, eventueel min 1 als nog niet jarig.",
          voorbeelden: [{ type: "stap", tekst: "Geboren 20 oktober 2013, vandaag 5 maart 2026 → leeftijd 12." }],
          basiskennis: [{ onderwerp: "Verjaardag-check", uitleg: "Altijd checken: heeft hij al verjaardag gehad dit jaar?" }],
          niveaus: {
            basis: "12 jaar. A.",
            simpeler: "2026 - 2013 = 13. Maar verjaardag (oktober) is nog niet geweest in maart. Dus 1 eraf = 12 jaar. = A.",
            nogSimpeler: "12 jaar = A.",
          },
        },
      },
      {
        q: "Lisa wordt **8 jaar**, ze is geboren in **2018**. Welk jaar wordt ze 8?",
        options: ["2026", "2025", "2027", "2024"],
        answer: 0,
        wrongHints: [null, "Klopt — 2018 + 8 = 2026.", "Te weinig.", "Te veel.", "Te weinig."],
      },
    ],
  },

  // STAP 5: Praktijk
  {
    title: "Praktijk — vakantie, school, geboorten",
    explanation:
      "Cito-praktijksommen mengen vaak: data + tellen + leeftijd.\n\n**Voorbeeld — vakantie**:\n*'De vakantie duurt van zaterdag 19 juli t/m zondag 31 augustus. Hoeveel dagen vakantie?'*\n• Juli: van 19 juli t/m 31 juli = 31 − 19 + 1 = **13 dagen** (+1 omdat 19 juli zelf meedoet).\n• Augustus: van 1 augustus t/m 31 augustus = **31 dagen**.\n• Totaal: 13 + 31 = **44 dagen**.\n\n**Voorbeeld — schooltrip**:\n*'School-uitje is 4 dagen. We vertrekken maandag 14 mei. Op welke dag komen we terug?'*\n• Maandag 14 mei (dag 1) → di 15 (dag 2) → wo 16 (dag 3) → do 17 (dag 4).\n• Terugkomst: **donderdag 17 mei**.\n\n**Voorbeeld — geboorten**:\n*'Tante Lisa wordt op 1 oktober 2026 35 jaar. In welk jaar is ze geboren?'*\n• 2026 − 35 = **1991**.\n\n**Voorbeeld — vergelijken**:\n*'Joost is geboren in 2014. Lisa is 3 jaar ouder. In welk jaar is Lisa geboren?'*\n• Lisa is 3 ouder → 3 jaar eerder geboren.\n• 2014 − 3 = **2011**.\n\n**Cito-tip**:\n• 'Hoeveel dagen van X t/m Y?' → tel beide datums mee (groot − klein + 1).\n• 'Hoeveel dagen van X tot Y?' → niet beide meetellen (groot − klein).",
    checks: [
      {
        q: "Hoeveel **dagen** is een **week**?",
        options: ["7", "5", "10", "14"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Werkdagen, niet hele week.", "Te veel.", "Te veel — dat zou 2 weken zijn."],
      },
      {
        q: "Vakantie van **20 juli** t/m **3 augustus**. **Aantal dagen** *(beide meetellen)*?",
        options: ["15 dagen", "14 dagen", "16 dagen", "13 dagen"],
        answer: 0,
        wrongHints: [null, "Klopt — juli van 20 t/m 31 = 12 dagen, plus 1 t/m 3 aug = 3 dagen. Totaal: 15.", "Te weinig — vergeet niet zowel begin als eind mee te tellen.", "Te veel — controleer.", "Te weinig."],
      },
      {
        q: "Joost geboren in **2014**. Lisa is **3 jaar ouder**. Lisa geboren in?",
        options: ["2011", "2017", "2014", "2016"],
        answer: 0,
        wrongHints: [null, "Klopt — ouder = eerder, dus 2014 - 3 = 2011.", "Verkeerde richting — 3 jaar ouder = eerder geboren.", "Same year.", "Verkeerde richting."],
      },
      {
        q: "**Tante** wordt **40** op **15 mei 2026**. Geboortejaar?",
        options: ["1986", "2026", "1976", "1996"],
        answer: 0,
        wrongHints: [null, "Klopt — 2026 - 40 = 1986.", "Dat is dit jaar.", "Te ver terug.", "Te recent."],
        uitlegPad: {
          stappen: [
            { titel: "Leeftijd aftrekken", tekst: "Huidig jaar 2026 - leeftijd 40 = 1986. Tante is geboren in 1986." },
          ],
          woorden: [{ woord: "geboortejaar", uitleg: "Het jaar waarin iemand geboren is." }],
          theorie: "Geboortejaar = huidig jaar − leeftijd.",
          voorbeelden: [{ type: "stap", tekst: "Iemand van 40 jaar in 2026 = geboren in 1986." }],
          basiskennis: [{ onderwerp: "Aftrekken", uitleg: "Hoe ouder, hoe eerder geboren." }],
          niveaus: {
            basis: "1986. A.",
            simpeler: "Wie 40 wordt in 2026 is geboren in 2026 - 40 = 1986. = A.",
            nogSimpeler: "1986 = A.",
          },
        },
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — kalender-mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: data tellen, schrikkeljaar, leeftijden, praktijksommen.\n\nVeel succes!",
    checks: [
      {
        q: "Hoeveel **dagen** in een **schrikkeljaar**?",
        options: ["366", "365", "364", "367"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Gewoon jaar.", "Te weinig.", "Bestaat niet."],
      },
      {
        q: "**Vandaag is dinsdag**. Wat is **3 weken later**?",
        options: ["Dinsdag", "Vrijdag", "Zaterdag", "Maandag"],
        answer: 0,
        wrongHints: [null, "Klopt — 3 weken = 21 dagen = veelvoud 7. Zelfde dag.", "Dat is 3 dagen later, niet 3 weken.", "Niet dat veel later.", "1 dag eerder."],
      },
      {
        q: "**Mark wordt 12 op 5 augustus 2026**. Wanneer geboren?",
        options: ["5 augustus 2014", "5 augustus 2012", "5 augustus 2026", "5 augustus 2008"],
        answer: 0,
        wrongHints: [null, "Klopt — 2026 − 12 = 2014.", "Te ver terug.", "Dat is dit jaar.", "Veel te ver terug."],
      },
      {
        q: "Van **10 juni** tot **10 juli** is hoeveel **dagen** *(niet beide meetellen)*?",
        options: ["30 dagen", "31 dagen", "28 dagen", "29 dagen"],
        answer: 0,
        wrongHints: [null, "Klopt — juni heeft 30 dagen, dus 10 juni → 10 juli = 30 dagen.", "Te veel.", "Te weinig.", "Te weinig."],
      },
      {
        q: "Op welke datum is **Bevrijdingsdag**?",
        options: ["5 mei", "4 mei", "27 april", "1 januari"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Dat is Dodenherdenking.", "Dat is Koningsdag.", "Dat is Nieuwjaar."],
      },
      {
        q: "Anna en Tim zijn in **hetzelfde jaar geboren**. Anna in januari, Tim in december. Wie is **ouder**?",
        options: ["Anna", "Tim", "Even oud", "Niet uit te leggen"],
        answer: 0,
        wrongHints: [null, "Klopt — Anna is eerder geboren dat jaar.", "Tim is later geboren.", "Niet helemaal — eerder geboren = ouder.", "Wel uit te leggen — wie eerder geboren is, is ouder."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kalenderRekenenPo = {
  id: "kalender-rekenen-po",
  title: "Kalender, data en leeftijden (groep 6-8)",
  emoji: "📅",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Meten — kalendertijd",
  prerequisites: [
    { id: "klokkijken", title: "Klokkijken", niveau: "po-1F" },
    { id: "tijdsduur-rekenen-po", title: "Tijdsduur uitrekenen", niveau: "po-1F" },
  ],
  intro:
    "Kalender voor groep 6-8 — maanden, weken, schrikkeljaar, dagen tellen vooruit/achteruit, leeftijden uitrekenen, speciale data (Koningsdag, Bevrijdingsdag). ~15 min.",
  triggerKeywords: [
    "kalender", "datum", "data", "schrikkeljaar", "leeftijd",
    "geboortedatum", "geboortejaar", "verjaardag", "maand", "week", "jaar",
    "koningsdag", "bevrijdingsdag", "kerst",
  ],
  chapters,
  steps,
};

export default kalenderRekenenPo;
