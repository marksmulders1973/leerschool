// Leerpad: Kalender-rekenen (data + dagen + leeftijd) — groep 6-8 PO.
// Toets-onderdeel meten: tijd. Referentieniveau 1F.
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
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function kalenderSvg() {
  const w = 320, h = 200;
  const startX = 30, startY = 60;
  const cellW = 38, cellH = 24;
  const days = ["ma", "di", "wo", "do", "vr", "za", "zo"];
  let cells = "";
  let dagen = "";
  // Kalender van maart 2026 — klopt met de echte kalender (1 maart 2026 = zondag)
  const datums = [
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, null, null, null, null, null],
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
        q: "Hoeveel **dagen** heeft een **gewoon jaar**?",
        options: ["365 dagen", "360 dagen", "366 dagen", "364 dagen"],
        answer: 0,
        wrongHints: [null, "Dat zijn 12 maanden van 30 dagen. Hebben alle maanden 30 dagen?", "Dat is een schrikkeljaar.", "Dat is precies 52 weken. Is een jaar precies 52 weken lang?"],
        uitlegPad: {
          stappen: [
            { titel: "365 dagen per jaar", tekst: "Een **gewoon jaar** heeft **365 dagen**. Een **schrikkeljaar** heeft 366 dagen (1 extra in februari). Onthoud die twee getallen." },
            { titel: "Waarom 365?", tekst: "De aarde draait in **365 dagen en bijna 6 uur** rond de zon. Omdat dat geen rond getal is, hebben we elke 4 jaar een **schrikkeljaar** (366 dagen) om die extra uurtjes goed te maken." },
            { titel: "Optellen check", tekst: "Tel de maanden:\n• 31 dagen: jan + mrt + mei + jul + aug + okt + dec = **7 × 31 = 217**\n• 30 dagen: apr + jun + sep + nov = **4 × 30 = 120**\n• Februari: **28**\nTotaal: 217 + 120 + 28 = **365** ✓" },
          ],
          woorden: [
            { woord: "gewoon jaar", uitleg: "365 dagen." },
            { woord: "schrikkeljaar", uitleg: "366 dagen, elke 4 jaar." },
          ],
          theorie: "Toets-feit: 365 = gewoon. 366 = schrikkel. 360 = bestaat niet (denk-fout). 364 = bestaat niet. Onthoud deze 2 cijfers.",
          voorbeelden: [
            { type: "stap", tekst: "1 januari + 365 dagen = 1 januari volgend jaar (in gewoon jaar)." },
            { type: "stap", tekst: "1 januari + 366 dagen = 1 januari volgend jaar (in schrikkeljaar zoals 2024)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "365 = gewoon. 366 = schrikkel. Verschil = 1 dag (29 februari)." }],
          niveaus: {
            basis: "365 dagen.",
            simpeler: "Een gewoon jaar heeft 365 dagen. Een schrikkeljaar heeft 366.",
            nogSimpeler: "365",
          },
        },
      },
      {
        q: "Hoeveel dagen heeft **februari** in een **schrikkeljaar**?",
        options: ["29 dagen", "28 dagen", "30 dagen", "31 dagen"],
        answer: 0,
        wrongHints: [null, "Dat is een gewoon jaar.", "Heeft februari ooit 30 dagen? Februari is de kortste maand.", "Zoveel dagen hebben januari en maart. Is februari langer of korter?"],
      },
      {
        q: "Welke maand heeft **30 dagen**?",
        options: ["April", "Januari", "Maart", "December"],
        answer: 0,
        wrongHints: [null, "Januari heeft 31.", "Maart heeft 31.", "December heeft 31."],
      },
      {
        q: "In welk seizoen valt **augustus** (in Nederland)?",
        options: ["Zomer", "Herfst", "Lente", "Winter"],
        answer: 0,
        wrongHints: [null, "De herfst begint pas in september. Is augustus al zo ver?", "In de lente gaan de bloemen open. Komt augustus voor of na de lente?", "Is het in augustus meestal koud en donker?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoeveel dagen heeft **november**?",
        options: ["30 dagen", "31 dagen", "28 dagen", "29 dagen"],
        answer: 0,
        wrongHints: [
          null,
          "Tel op je knokkels: valt november op een knokkel of in een inham?",
          null,
          "Alleen februari heeft 28 of 29 dagen.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Knokkels tellen",
              tekst: "Begin bij januari op een knokkel. Tel door tot november: november valt in een inham.",
            },
            {
              titel: "Inham = korter",
              tekst: "Een inham is een kortere maand. November heeft dus 30 dagen.",
            },
          ],
          woorden: [
            {
              woord: "inham",
              uitleg: "Het kuiltje tussen twee knokkels van je vuist.",
            },
          ],
          theorie: "Maanden met 30 dagen: april, juni, september, november.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "September en november hebben allebei 30 dagen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Knokkels-truc",
              uitleg: "Knokkel = 31 dagen, inham = korter (30, of bij februari 28/29).",
            },
          ],
          niveaus: {
            basis: "30 dagen.",
            simpeler: "November is een korte maand. Hij heeft 30 dagen, net als april, juni en september.",
            nogSimpeler: "30 dagen",
          },
        },
      },
      {
        q: "Welke twee maanden **na elkaar** hebben **allebei 31 dagen**?",
        options: ["Juli en augustus", "Juni en juli", "April en mei", "Oktober en november"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk goed naar de eerste maand van dit paar.",
          null,
          "Hoeveel dagen heeft de tweede maand van dit paar?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Lijstje 31 dagen",
              tekst: "31 dagen: januari, maart, mei, juli, augustus, oktober, december.",
            },
            {
              titel: "Zoek buren",
              tekst: "Juli en augustus staan allebei in het lijstje en komen direct na elkaar.",
            },
          ],
          woorden: [
            {
              woord: "na elkaar",
              uitleg: "De ene maand komt direct na de andere.",
            },
          ],
          theorie: "Bij de knokkels-truc springen juli en augustus allebei op een knokkel.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Juli (31) en augustus (31) → allebei 31.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Knokkels-truc",
              uitleg: "Na juli begin je weer bij de eerste knokkel: augustus is dus ook een knokkel.",
            },
          ],
          niveaus: {
            basis: "Juli en augustus.",
            simpeler: "Juni, april en november hebben 30 dagen. Juli en augustus hebben allebei 31.",
            nogSimpeler: "Juli en augustus",
          },
        },
      },
      {
        q: "Hoeveel dagen hebben **januari en februari samen** in een **gewoon jaar**?",
        options: ["59 dagen", "60 dagen", "61 dagen", "62 dagen"],
        answer: 0,
        wrongHints: [null, "Dat klopt alleen in een schrikkeljaar.", null, "Heeft februari ook 31 dagen?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Januari",
              tekst: "Januari heeft 31 dagen.",
            },
            {
              titel: "Februari",
              tekst: "In een gewoon jaar heeft februari 28 dagen.",
            },
            {
              titel: "Optellen",
              tekst: "31 + 28 = 59 dagen.",
            },
          ],
          woorden: [
            {
              woord: "gewoon jaar",
              uitleg: "Een jaar zonder 29 februari, met 365 dagen.",
            },
          ],
          theorie: "Tel de dagen van elke maand op.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "31 + 28 = 59.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Februari",
              uitleg: "Februari heeft 28 dagen, in een schrikkeljaar 29.",
            },
          ],
          niveaus: {
            basis: "59 dagen.",
            simpeler: "Januari = 31 dagen. Februari = 28 dagen. 31 + 28 = 59.",
            nogSimpeler: "59 dagen",
          },
        },
      },
      {
        q: "Hoeveel dagen van de week zijn **geen** weekenddag?",
        options: ["5", "2", "7", "6"],
        answer: 0,
        wrongHints: [null, "Dat is het aantal weekenddagen zelf.", "Dat is de hele week.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Weekend",
              tekst: "Het weekend = zaterdag en zondag. Dat zijn 2 dagen.",
            },
            {
              titel: "Rest van de week",
              tekst: "7 − 2 = 5 dagen: maandag tot en met vrijdag.",
            },
          ],
          woorden: [
            {
              woord: "weekend",
              uitleg: "Zaterdag en zondag.",
            },
          ],
          theorie: "Een week heeft 7 dagen, waarvan 2 weekenddagen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Ma, di, wo, do, vr = 5 dagen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Week",
              uitleg: "1 week = 7 dagen.",
            },
          ],
          niveaus: {
            basis: "5.",
            simpeler: "Een week heeft 7 dagen. Zaterdag en zondag zijn weekend. 7 − 2 = 5.",
            nogSimpeler: "5",
          },
        },
      },
      {
        q: "Hoeveel maanden van het jaar hebben **31 dagen**?",
        options: ["7", "6", "5", "8"],
        answer: 0,
        wrongHints: [
          null,
          "Tel nog eens alle knokkels.",
          null,
          "Doet februari mee? En de maanden met 30 dagen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Knokkels tellen",
              tekst: "Januari, maart, mei, juli, augustus, oktober, december.",
            },
            {
              titel: "Tellen",
              tekst: "Dat zijn 7 maanden.",
            },
          ],
          woorden: [
            {
              woord: "knokkel",
              uitleg: "Het bultje van je vingers als je een vuist maakt.",
            },
          ],
          theorie: "31 dagen: jan, mrt, mei, jul, aug, okt, dec.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tel ze één voor één: 1, 2, 3, 4, 5, 6, 7.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Rest",
              uitleg: "4 maanden hebben 30 dagen en februari heeft er 28 of 29. 7 + 4 + 1 = 12 maanden.",
            },
          ],
          niveaus: {
            basis: "7.",
            simpeler: "De lange maanden zijn januari, maart, mei, juli, augustus, oktober en december. Dat zijn er 7.",
            nogSimpeler: "7",
          },
        },
      },
    ],
  },

  // STAP 2: Dagen tellen
  {
    title: "Dagen tellen — vooruit en achteruit",
    explanation:
      "De toets vraagt vaak: *'Wat is de dag X dagen na DATUM?'* of *'X dagen geleden was DATUM'*.\n\n**Stappenplan — vooruit tellen (na)**:\n1. Schrijf de start-datum op.\n2. Tel zo veel mogelijk **hele weken** (7 dagen) — verschuif de datum gewoon, dag-naam blijft hetzelfde.\n3. Tel de resterende dagen één voor één.\n\n**Voorbeeld**: 'Wat is 10 dagen na **donderdag 5 maart**?'\n• 10 dagen = **7 + 3 dagen**.\n• Donderdag 5 maart + 1 week = donderdag 12 maart.\n• 12 maart + 3 dagen = vr 13, za 14, **zo 15 maart**.\n• Antwoord: **zondag 15 maart**.\n\n**Stappenplan — achteruit tellen (geleden)**:\nZelfde, maar terug in plaats van vooruit.\n\n**Voorbeeld**: 'Vandaag is woensdag 3 juni. Welke datum was het **14 dagen geleden**?'\n• 14 dagen = 2 weken.\n• Datum − 14 = 20 mei. Dag-naam blijft **woensdag** *(want hele weken)*.\n• Antwoord: woensdag 20 mei.\n\n**Toets-truc — dag-naam berekenen**:\n• **+7 dagen = zelfde dag-naam** (dezelfde dag van de week).\n• **+1 dag** = volgende dag.\n• **+14 dagen** = ook zelfde dag.\n• **+21 dagen** = zelfde dag.\n\nElk veelvoud van 7 → dezelfde dag-naam.\n\n**Veel-voorkomende fout**:\n• Vergeten dat een maand niet altijd 30 of 31 heeft.\n• Vergeten dat februari 28 of 29 dagen heeft.\n• Verwarring tussen 'na' en 'geleden'.",
    checks: [
      {
        q: "Welke dag is het **7 dagen na maandag**?",
        options: ["Maandag", "Dinsdag", "Zondag", "Zaterdag"],
        answer: 0,
        wrongHints: [null, "Dat is dag erna.", "Dat is 1 dag ervoor.", "Dat is 2 dagen ervoor."],
      },
      {
        q: "Welke dag is het **10 dagen na dinsdag**?",
        options: ["Vrijdag", "Donderdag", "Zaterdag", "Dinsdag"],
        answer: 0,
        wrongHints: [null, "Te weinig — di+9 dagen, niet 10.", "Dat is 11 dagen verder. Tel eerst een hele week door: welke dag is het dan?", "Dat is +7 of +14, niet +10."],
        uitlegPad: {
          stappen: [
            { titel: "10 = 7 + 3", tekst: "10 dagen = 1 hele week (7) + 3 dagen extra. Dinsdag + 7 = dinsdag. + 3 = vrijdag." },
          ],
          woorden: [{ woord: "+7 dagen", uitleg: "Een hele week vooruit — zelfde dag-naam." }],
          theorie: "Splits het aantal dagen in: hele weken (× 7) + extra dagen.",
          voorbeelden: [{ type: "stap", tekst: "Di + 7 = di. Di + 1 = wo. Wo + 1 = do. Do + 1 = vr. Totaal: vr." }],
          basiskennis: [{ onderwerp: "Niet alle 10 één voor één", uitleg: "Slim is groepjes van 7 dagen wegtrekken." }],
          niveaus: {
            basis: "Vrijdag.",
            simpeler: "10 dagen = 1 week + 3 dagen. Dinsdag + 1 week = dinsdag. + 3 dagen = vrijdag.",
            nogSimpeler: "Vrijdag",
          },
        },
      },
      {
        q: "**Vandaag is het 10 maart**. Welke datum is het **5 dagen later**?",
        options: ["15 maart", "5 maart", "14 maart", "20 maart"],
        answer: 0,
        wrongHints: [null, "Dat is 5 dagen eerder. Moet je vooruit of terug tellen?", "Tel je 10 maart zelf als eerste dag? Begin te tellen bij 11 maart.", "Dat is 10 dagen later. Hoeveel dagen moest je verder?"],
      },
      {
        q: "**Vandaag is het 28 februari (gewoon jaar)**. Welke datum is het **3 dagen later**?",
        options: ["3 maart", "31 februari", "1 maart", "5 maart"],
        answer: 0,
        wrongHints: [null, "31 februari bestaat niet.", "Te weinig — dat is +1.", "Dat is 5 dagen later. Hoeveel dagen heeft februari in een gewoon jaar?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Vandaag is **vrijdag 9 oktober**. Wat is het **over 1 week**?",
        options: ["Vrijdag 16 oktober", "Donderdag 16 oktober", "Vrijdag 17 oktober", "Zaterdag 16 oktober"],
        answer: 0,
        wrongHints: [
          null,
          "Verandert de dag-naam als je precies een week verder gaat?",
          null,
          "Welke dag-naam hoort bij +7 dagen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "1 week = 7 dagen",
              tekst: "9 + 7 = 16 oktober.",
            },
            {
              titel: "Dag-naam",
              tekst: "+7 dagen = zelfde dag-naam. Dus vrijdag.",
            },
          ],
          woorden: [
            {
              woord: "+7 dagen",
              uitleg: "Een hele week verder: zelfde dag-naam.",
            },
          ],
          theorie: "Bij hele weken blijft de dag-naam hetzelfde, alleen de datum schuift op.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Vrijdag 9 oktober + 7 = vrijdag 16 oktober.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Datum optellen",
              uitleg: "Tel 7 bij de datum op.",
            },
          ],
          niveaus: {
            basis: "Vrijdag 16 oktober.",
            simpeler: "Een week later is het weer vrijdag. 9 + 7 = 16. Dus vrijdag 16 oktober.",
            nogSimpeler: "Vrijdag 16 oktober",
          },
        },
      },
      {
        q: "Vandaag is het **zaterdag**. Welke dag was het **9 dagen geleden**?",
        options: ["Donderdag", "Maandag", "Vrijdag", "Zaterdag"],
        answer: 0,
        wrongHints: [null, "Telde je vooruit in plaats van terug?", null, "9 dagen is geen hele week."],
        uitlegPad: {
          stappen: [
            {
              titel: "9 = 7 + 2",
              tekst: "9 dagen = 1 week + 2 dagen.",
            },
            {
              titel: "Eerst 1 week terug",
              tekst: "Zaterdag − 7 dagen = zaterdag.",
            },
            {
              titel: "Dan 2 dagen terug",
              tekst: "Zaterdag → vrijdag → donderdag.",
            },
          ],
          woorden: [
            {
              woord: "geleden",
              uitleg: "Terug in de tijd tellen.",
            },
          ],
          theorie: "Splits in hele weken + losse dagen, en tel terug.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Za − 7 = za. Za − 1 = vr. Vr − 1 = do.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geleden = terug",
              uitleg: "Bij 'geleden' tel je achteruit.",
            },
          ],
          niveaus: {
            basis: "Donderdag.",
            simpeler: "9 dagen = 1 week + 2 dagen. Een week terug is weer zaterdag. Nog 2 dagen terug: donderdag.",
            nogSimpeler: "Donderdag",
          },
        },
      },
      {
        q: "Vandaag is het **6 april**. Welke datum was het **10 dagen geleden**?",
        options: ["27 maart", "26 maart", "28 maart", "16 april"],
        answer: 0,
        wrongHints: [null, "Hoeveel dagen heeft maart?", null, "Dat is 10 dagen later, niet geleden."],
        uitlegPad: {
          stappen: [
            {
              titel: "Terug naar eind maart",
              tekst: "6 april − 6 dagen = 31 maart.",
            },
            {
              titel: "Nog 4 dagen terug",
              tekst: "10 − 6 = 4. 31 maart − 4 = 27 maart.",
            },
          ],
          woorden: [
            {
              woord: "geleden",
              uitleg: "Terug in de tijd tellen.",
            },
          ],
          theorie: "Let op hoeveel dagen de vorige maand heeft.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Maart heeft 31 dagen: 31, 30, 29, 28, 27.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Maart",
              uitleg: "Maart heeft 31 dagen.",
            },
          ],
          niveaus: {
            basis: "27 maart.",
            simpeler: "Eerst 6 dagen terug: dan ben je op 31 maart. Nog 4 dagen terug: 27 maart.",
            nogSimpeler: "27 maart",
          },
        },
      },
      {
        q: "Vandaag is het **25 november**. Welke datum is het **10 dagen later**?",
        options: ["5 december", "4 december", "6 december", "15 december"],
        answer: 0,
        wrongHints: [
          null,
          "Telde je november als een maand van 31 dagen?",
          null,
          "Vergeet niet dat je over het eind van november heen gaat.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Naar eind november",
              tekst: "November heeft 30 dagen. 25 + 5 = 30 november.",
            },
            {
              titel: "Verder in december",
              tekst: "10 − 5 = 5. Dus 5 december.",
            },
          ],
          woorden: [
            {
              woord: "later",
              uitleg: "Vooruit in de tijd tellen.",
            },
          ],
          theorie: "Kijk hoeveel dagen de maand heeft voor je doortelt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "25 + 10 = 35. 35 − 30 = 5 → 5 december.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "November",
              uitleg: "November heeft 30 dagen.",
            },
          ],
          niveaus: {
            basis: "5 december.",
            simpeler: "Tot 30 november zijn 5 dagen. Er blijven 5 dagen over. Dus 5 december.",
            nogSimpeler: "5 december",
          },
        },
      },
      {
        q: "Vandaag is **woensdag 1 juli**. Welke dag is **16 juli**?",
        options: ["Donderdag", "Woensdag", "Vrijdag", "Dinsdag"],
        answer: 0,
        wrongHints: [null, "Is 16 − 1 een veelvoud van 7?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Verschil",
              tekst: "Van 1 naar 16 juli = 15 dagen.",
            },
            {
              titel: "15 = 14 + 1",
              tekst: "2 weken (zelfde dag: woensdag) + 1 dag = donderdag.",
            },
          ],
          woorden: [
            {
              woord: "veelvoud van 7",
              uitleg: "7, 14, 21, 28 … dan blijft de dag-naam gelijk.",
            },
          ],
          theorie: "Splits in hele weken + losse dagen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Wo 1 juli → wo 8 → wo 15 → do 16 juli.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Hele weken",
              uitleg: "+14 dagen = zelfde dag-naam.",
            },
          ],
          niveaus: {
            basis: "Donderdag.",
            simpeler: "1, 8 en 15 juli zijn woensdagen. 16 juli is een dag later: donderdag.",
            nogSimpeler: "Donderdag",
          },
        },
      },
      {
        q: "Vandaag is het **2 maart 2028**. Dat is een **schrikkeljaar**. Welke datum was het **3 dagen geleden**?",
        options: ["28 februari", "27 februari", "29 februari", "26 februari"],
        answer: 0,
        wrongHints: [
          null,
          "Dat klopt in een gewoon jaar. Maar 2028 is een schrikkeljaar.",
          "Dat is maar 2 dagen terug.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Terug tellen",
              tekst: "2 maart → 1 maart (1 dag) → 29 februari (2 dagen) → 28 februari (3 dagen).",
            },
            {
              titel: "Schrikkeljaar",
              tekst: "In 2028 bestaat 29 februari. Die dag tel je dus mee.",
            },
          ],
          woorden: [
            {
              woord: "schrikkeljaar",
              uitleg: "Een jaar met 29 februari en 366 dagen.",
            },
          ],
          theorie: "In een schrikkeljaar heeft februari 29 dagen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 mrt, 29 feb, 28 feb.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Februari",
              uitleg: "Februari heeft 28 dagen, in een schrikkeljaar 29.",
            },
          ],
          niveaus: {
            basis: "28 februari.",
            simpeler: "Tel terug: 1 maart, 29 februari, 28 februari. In 2028 is er een 29 februari.",
            nogSimpeler: "28 februari",
          },
        },
      },
    ],
  },

  // STAP 3: Schrikkeljaar + speciale data
  {
    title: "Schrikkeljaar + speciale data",
    explanation:
      "**Schrikkeljaar** = een jaar met **366 dagen**. Dat extra dagje zit in februari (29 i.p.v. 28).\n\n**Wanneer is het schrikkeljaar?**\n• Elk **4e jaar**: 2020, 2024, 2028, 2032, 2036, ...\n• Behalve hele eeuwen (1900, 2100 niet), tenzij deelbaar door 400 (2000 wél, 2400 wél).\n• Voor de Doorstroomtoets kun je makkelijk werken met: 'deelbaar door 4 → schrikkeljaar'. Bv. 2024 ÷ 4 = 506 → schrikkeljaar ✓.\n\n**Voorbeelden**:\n• 2024 — schrikkeljaar (deelbaar door 4).\n• 2025 — gewoon jaar.\n• 2026 — gewoon jaar.\n• 2027 — gewoon jaar.\n• 2028 — schrikkeljaar.\n• 2100 — geen schrikkeljaar *(eeuwjaar, niet deelbaar door 400)*.\n\n**Speciale data om te kennen**:\n• **1 januari** — Nieuwjaarsdag.\n• **5 december** — Sinterklaas (pakjesavond).\n• **25 december** — Eerste kerstdag.\n• **26 december** — Tweede kerstdag.\n• **31 december** — Oudejaarsdag.\n• **27 april** — Koningsdag.\n• **4 mei** — Dodenherdenking.\n• **5 mei** — Bevrijdingsdag.\n• **Pasen** — eerste zondag na de eerste volle maan na 21 maart *(verandert per jaar)*.\n\n**Toets-truc — schrikkeljaar 'deel door 4'**:\nKijk of het jaartal deelbaar is door 4. Zo ja: 99% schrikkeljaar.\n\n**Veel-voorkomende fout**:\nDenken dat 29 februari elk jaar bestaat. Alleen in schrikkeljaar.",
    checks: [
      {
        q: "Is **2024** een schrikkeljaar?",
        options: ["Ja, 2024 is deelbaar door 4", "Nee, 2024 is niet deelbaar door 4", "Nee, alleen jaartallen op een 0", "Nee, het vorige was in 2022"],
        answer: 0,
        wrongHints: [null, "Reken het uit: blijft er iets over als je 24 door 4 deelt?", "2016 eindigt niet op een 0. Had februari 2016 29 dagen of niet?", "Was 2022 wel een schrikkeljaar? Is 22 deelbaar door 4?"],
        uitlegPad: {
          stappen: [
            { titel: "De 'deel door 4'-truc", tekst: "**Vuistregel**: een jaar is een **schrikkeljaar** als het deelbaar is door **4**. Test 2024: 2024 ÷ 4 = 506 (rond getal, geen rest) → **schrikkeljaar**." },
            { titel: "Snel testen", tekst: "Kijk naar de **laatste 2 cijfers**: deelbaar door 4? Dan is het jaar dat ook.\n• 2024 → 24 ÷ 4 = 6 ✓ schrikkel\n• 2025 → 25 ÷ 4 = 6,25 ✗ gewoon\n• 2026 → 26 ÷ 4 = 6,5 ✗ gewoon\n• 2028 → 28 ÷ 4 = 7 ✓ schrikkel" },
            { titel: "Uitzondering: eeuw-jaren", tekst: "**Hele eeuwen** (eindigend op 00) zijn alleen schrikkel als deelbaar door 400. Bv:\n• 1900: niet door 400 → **geen** schrikkel\n• 2000: wel door 400 → **wel** schrikkel\n• 2100: niet door 400 → geen schrikkel\nVoor groep 6-8, Doorstroomtoets-stof meestal niet getoetst, maar handig om te weten." },
          ],
          woorden: [
            { woord: "schrikkeljaar", uitleg: "Jaar met 366 dagen (1 dag extra in februari)." },
            { woord: "deelbaar", uitleg: "Een getal valt rond te delen (geen rest)." },
          ],
          theorie: "Toets-truc schrikkeljaar:\n• Deelbaar door 4 → ja\n• Eindigt op 00 → moet ook door 400 deelbaar\n• Bv. 2024, 2028, 2032 = schrikkel. 2025, 2026, 2027 = gewoon.",
          voorbeelden: [
            { type: "stap", tekst: "2024 ÷ 4 = 506. Geen rest. Schrikkeljaar ✓." },
            { type: "stap", tekst: "2026 ÷ 4 = 506,5. Wel rest. Geen schrikkel." },
            { type: "stap", tekst: "Olympische zomerspelen vallen elke 4 jaar — vaak in schrikkeljaar (2016, 2024, 2028)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Deel door 4 = schrikkel. Niet deelbaar = gewoon. Heel snelle test." }],
          niveaus: {
            basis: "Ja, 2024 is schrikkeljaar.",
            simpeler: "2024 ÷ 4 = 506 (rond) → schrikkeljaar.",
            nogSimpeler: "Ja",
          },
        },
      },
      {
        q: "Welk jaar is een **schrikkeljaar**?",
        options: ["2028", "2025", "2026", "2027"],
        answer: 0,
        wrongHints: [null, "Deel de laatste twee cijfers door 4: gaat 25 ÷ 4 precies op?", "Staat 26 in de tafel van 4?", "Is 27 een even getal? Een schrikkeljaar is altijd even."],
      },
      {
        q: "Op welke datum is **Koningsdag**?",
        options: ["27 april", "30 april", "5 mei", "30 maart"],
        answer: 0,
        wrongHints: [null, "Oude Koninginnedag — niet meer.", "Dat is Bevrijdingsdag.", "Dan is het nog maart. Koningsdag valt later in het voorjaar."],
      },
      {
        q: "Hoeveel dagen in **februari 2027** *(gewoon jaar)*?",
        options: ["28 dagen", "29 dagen", "30 dagen", "31 dagen"],
        answer: 0,
        wrongHints: [null, "Dat is schrikkeljaar.", "Februari heeft nooit 30.", "Februari heeft nooit 31."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is het **eerstvolgende schrikkeljaar** na 2028?",
        options: ["2032", "2030", "2029", "2034"],
        answer: 0,
        wrongHints: [null, "Is dit jaartal deelbaar door 4?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Elke 4 jaar",
              tekst: "Een schrikkeljaar komt elke 4 jaar.",
            },
            {
              titel: "Optellen",
              tekst: "2028 + 4 = 2032.",
            },
          ],
          woorden: [
            {
              woord: "schrikkeljaar",
              uitleg: "Een jaar met 366 dagen.",
            },
          ],
          theorie: "Deelbaar door 4 → schrikkeljaar.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2032 ÷ 4 = 508 → schrikkeljaar.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Deel door 4",
              uitleg: "Kun je het jaartal precies door 4 delen? Dan is het een schrikkeljaar.",
            },
          ],
          niveaus: {
            basis: "2032.",
            simpeler: "Elke 4 jaar is er een schrikkeljaar. 2028 + 4 = 2032.",
            nogSimpeler: "2032",
          },
        },
      },
      {
        q: "Op welke datum is **Tweede kerstdag**?",
        options: ["26 december", "25 december", "24 december", "31 december"],
        answer: 0,
        wrongHints: [null, "Dat is Eerste kerstdag.", null, "Dat is Oudejaarsdag."],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerste kerstdag",
              tekst: "Eerste kerstdag is 25 december.",
            },
            {
              titel: "Tweede kerstdag",
              tekst: "De dag daarna: 26 december.",
            },
          ],
          woorden: [
            {
              woord: "Tweede kerstdag",
              uitleg: "De dag na Eerste kerstdag.",
            },
          ],
          theorie: "Kerst duurt in Nederland 2 dagen: 25 en 26 december.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "25 + 1 = 26 december.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Speciale data",
              uitleg: "25 december = Eerste kerstdag, 26 december = Tweede kerstdag.",
            },
          ],
          niveaus: {
            basis: "26 december.",
            simpeler: "Eerste kerstdag is 25 december. Tweede kerstdag is de dag erna: 26 december.",
            nogSimpeler: "26 december",
          },
        },
      },
      {
        q: "Welke dag vieren we op **1 januari**?",
        options: ["Nieuwjaarsdag", "Oudejaarsdag", "Koningsdag", "Bevrijdingsdag"],
        answer: 0,
        wrongHints: [null, "Die dag is de laatste dag van het jaar.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerste dag",
              tekst: "1 januari is de eerste dag van het nieuwe jaar.",
            },
            {
              titel: "Naam",
              tekst: "Die dag heet Nieuwjaarsdag.",
            },
          ],
          woorden: [
            {
              woord: "Nieuwjaarsdag",
              uitleg: "De eerste dag van het jaar: 1 januari.",
            },
          ],
          theorie: "Oudejaarsdag (31 december) is de dag ervoor.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "31 december → 1 januari: oud jaar → nieuw jaar.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Speciale data",
              uitleg: "1 januari = Nieuwjaarsdag.",
            },
          ],
          niveaus: {
            basis: "Nieuwjaarsdag.",
            simpeler: "Op 1 januari begint het nieuwe jaar. Daarom heet die dag Nieuwjaarsdag.",
            nogSimpeler: "Nieuwjaarsdag",
          },
        },
      },
      {
        q: "Hoe vaak is er een **29 februari** in de jaren **2025 tot en met 2032**?",
        options: ["2 keer", "1 keer", "3 keer", "8 keer"],
        answer: 0,
        wrongHints: [null, "Doet 2032 ook mee?", null, "29 februari is er niet elk jaar."],
        uitlegPad: {
          stappen: [
            {
              titel: "Welke jaren",
              tekst: "2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032.",
            },
            {
              titel: "Deelbaar door 4",
              tekst: "2028 en 2032 zijn deelbaar door 4.",
            },
            {
              titel: "Tellen",
              tekst: "Dat zijn 2 schrikkeljaren, dus 2 keer 29 februari.",
            },
          ],
          woorden: [
            {
              woord: "tot en met",
              uitleg: "Het laatste jaar (2032) telt ook mee.",
            },
          ],
          theorie: "29 februari bestaat alleen in een schrikkeljaar.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2028 ÷ 4 = 507, 2032 ÷ 4 = 508.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schrikkeljaar",
              uitleg: "Deelbaar door 4 → schrikkeljaar.",
            },
          ],
          niveaus: {
            basis: "2 keer.",
            simpeler: "Alleen in schrikkeljaren is er 29 februari. Dat zijn 2028 en 2032. Dus 2 keer.",
            nogSimpeler: "2 keer",
          },
        },
      },
    ],
  },

  // STAP 4: Leeftijden uitrekenen
  {
    title: "Leeftijden uitrekenen",
    explanation:
      "**Hoe bereken je een leeftijd?**\n\n**Formule** *(uit je hoofd!)*:\n**Leeftijd = huidig jaar − geboortejaar**\n\n**Maar let op**: ben je dit jaar al **jarig geweest**? Zo niet, **1 jaar eraf**.\n\n**Voorbeeld 1**: Anna is geboren op **3 mei 2010**. Hoe oud is ze op **1 augustus 2026**?\n• 2026 − 2010 = 16.\n• Is ze in 2026 al jarig geweest *(3 mei)*? Ja, 1 augustus is ná 3 mei.\n• Antwoord: **16 jaar**.\n\n**Voorbeeld 2**: Tom is geboren op **20 oktober 2013**. Hoe oud is hij op **5 maart 2026**?\n• 2026 − 2013 = 13.\n• Is hij in 2026 al jarig geweest *(20 oktober)*? **Nee** — 5 maart is vóór 20 oktober.\n• Dus 1 jaar eraf: **12 jaar**.\n\n**Toets-stappenplan**:\n1. Trek geboortejaar af van huidig jaar.\n2. Check: heeft de jarige al verjaardag gehad dit jaar?\n   - **Ja** → klaar, leeftijd is het verschil.\n   - **Nee** → trek 1 af.\n\n**Voorbeeld 3 — meer mensen vergelijken**:\n*'Lisa is geboren in 2014, haar broer Jeroen in 2012. Hoeveel jaar verschil?'*\n• 2014 − 2012 = 2 jaar.\n• **Lisa is 2 jaar jonger dan Jeroen**.\n\n**Toets-truc — vraagstelling**:\n• *'Hoeveel ouder?'* → groot − klein (= verschil).\n• *'In welk jaar wordt X = leeftijd?'* → geboortejaar + leeftijd.\n\n**Voorbeeld 4**: 'Mark is geboren in 2014. Wanneer wordt hij 18?'\n• 2014 + 18 = 2032. **In 2032 wordt Mark 18**.",
    checks: [
      {
        q: "Hoe **bereken** je iemands leeftijd?",
        options: ["Huidig jaar − geboortejaar", "Geboortejaar − huidig jaar", "Huidig jaar + geboortejaar", "Huidig jaar − leeftijd"],
        answer: 0,
        wrongHints: [null, "Dan krijg je een getal onder nul. Welk jaartal moet vooraan staan?", "Dan kom je rond de 4000 uit. Kan iemand zo oud zijn?", "Dan reken je het geboortejaar uit. Maar de leeftijd weet je nog niet."],
      },
      {
        q: "Anna is geboren in **2010**. Het is nu **2026** en ze is dit jaar **al jarig geweest**. Hoe oud is ze?",
        options: ["16 jaar", "15 jaar", "14 jaar", "17 jaar"],
        answer: 0,
        wrongHints: [null, "Te weinig — al jarig betekent geen aftrek.", "Reken 2026 − 2010 rustig uit: eerst van 2010 naar 2020, dan naar 2026.", "Telde je er een jaar bij? Ze is al jarig geweest: dan is het jaartal-verschil precies haar leeftijd."],
      },
      {
        q: "Tom is geboren op **20 oktober 2013**. Vandaag is het **5 maart 2026**. Hij is dit jaar **nog niet jarig** geweest. Hoe oud is Tom?",
        options: ["12 jaar", "13 jaar", "14 jaar", "11 jaar"],
        answer: 0,
        wrongHints: [null, "Te veel — hij is nog niet jarig.", "Reken eerst 2026 − 2013 uit. Kom je dan op 14?", "Omdat hij nog niet jarig is, trek je 1 jaar af. Niet 2."],
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
            basis: "12 jaar.",
            simpeler: "2026 - 2013 = 13. Maar verjaardag (oktober) is nog niet geweest in maart. Dus 1 eraf = 12 jaar.",
            nogSimpeler: "12 jaar",
          },
        },
      },
      {
        q: "Lisa is geboren in **2018**. In welk jaar wordt ze **8**?",
        options: ["2026", "2025", "2027", "2024"],
        answer: 0,
        wrongHints: [null, "Hoe oud wordt Lisa in 2025? Tel vanaf 2018.", "Hoe oud wordt Lisa in 2027? Is dat 8?", "Reken 2018 + 8 nog eens: van 2018 naar 2020 is 2 jaar. Hoeveel jaar moet er dan nog bij?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Sanne is geboren op **14 juni 2015**. Hoe oud is ze op **1 maart 2026**?",
        options: ["10 jaar", "11 jaar", "9 jaar", "12 jaar"],
        answer: 0,
        wrongHints: [null, "Is Sanne op 1 maart al jarig geweest?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Verschil jaartallen",
              tekst: "2026 − 2015 = 11.",
            },
            {
              titel: "Check verjaardag",
              tekst: "Verjaardag is 14 juni. 1 maart is vóór 14 juni → nog niet jarig.",
            },
            {
              titel: "1 eraf",
              tekst: "11 − 1 = 10 jaar.",
            },
          ],
          woorden: [
            {
              woord: "jarig",
              uitleg: "Op je verjaardag word je 1 jaar ouder.",
            },
          ],
          theorie: "Leeftijd = jaartal-verschil, min 1 als nog niet jarig.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Geboren 14 juni 2015, op 1 maart 2026 → 10 jaar.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Verjaardag-check",
              uitleg: "Altijd checken: is ze dit jaar al jarig geweest?",
            },
          ],
          niveaus: {
            basis: "10 jaar.",
            simpeler: "2026 − 2015 = 11. Maar in maart is haar verjaardag (juni) nog niet geweest. Dus 10 jaar.",
            nogSimpeler: "10 jaar",
          },
        },
      },
      {
        q: "Daan is geboren op **2 januari 2013**. Hoe oud is hij op **30 september 2026**?",
        options: ["13 jaar", "12 jaar", "14 jaar", "11 jaar"],
        answer: 0,
        wrongHints: [null, "Is 2 januari al voorbij op 30 september?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Verschil jaartallen",
              tekst: "2026 − 2013 = 13.",
            },
            {
              titel: "Check verjaardag",
              tekst: "Verjaardag is 2 januari. 30 september is daarna → al jarig geweest.",
            },
            {
              titel: "Klaar",
              tekst: "Leeftijd = 13 jaar.",
            },
          ],
          woorden: [
            {
              woord: "jarig",
              uitleg: "Op je verjaardag word je 1 jaar ouder.",
            },
          ],
          theorie: "Al jarig geweest → leeftijd is gewoon het verschil.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2026 − 2013 = 13.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Verjaardag-check",
              uitleg: "Al jarig? Dan niets eraf.",
            },
          ],
          niveaus: {
            basis: "13 jaar.",
            simpeler: "2026 − 2013 = 13. Zijn verjaardag in januari is al geweest. Dus 13 jaar.",
            nogSimpeler: "13 jaar",
          },
        },
      },
      {
        q: "Opa is geboren in **1955**. In welk jaar wordt hij **80**?",
        options: ["2035", "2034", "2045", "2025"],
        answer: 0,
        wrongHints: [null, "Reken nog eens: 1955 + 80.", null, "Dan is hij pas 70."],
        uitlegPad: {
          stappen: [
            {
              titel: "Optellen",
              tekst: "Geboortejaar + leeftijd = jaar.",
            },
            {
              titel: "Rekenen",
              tekst: "1955 + 80 = 2035.",
            },
          ],
          woorden: [
            {
              woord: "geboortejaar",
              uitleg: "Het jaar waarin je bent geboren.",
            },
          ],
          theorie: "In welk jaar word je X? → geboortejaar + X.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1955 + 80 = 2035.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Optellen",
              uitleg: "1955 + 45 = 2000. Nog 35 erbij = 2035.",
            },
          ],
          niveaus: {
            basis: "2035.",
            simpeler: "Tel 80 op bij 1955. 1955 + 80 = 2035.",
            nogSimpeler: "2035",
          },
        },
      },
      {
        q: "Fleur is geboren op **10 mei 2011**, haar zus Noor op **10 mei 2016**. Hoeveel jaar is Fleur **ouder** dan Noor?",
        options: ["5 jaar", "4 jaar", "6 jaar", "7 jaar"],
        answer: 0,
        wrongHints: [null, "Reken het verschil tussen de jaartallen nog eens uit.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Groot − klein",
              tekst: "2016 − 2011 = 5.",
            },
            {
              titel: "Zelfde verjaardag",
              tekst: "Ze zijn allebei op 10 mei jarig. Het verschil is dus precies 5 jaar.",
            },
          ],
          woorden: [
            {
              woord: "ouder",
              uitleg: "Eerder geboren.",
            },
          ],
          theorie: "Hoeveel ouder? → groot jaartal − klein jaartal.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2016 − 2011 = 5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Verschil",
              uitleg: "Wie eerder geboren is, is ouder.",
            },
          ],
          niveaus: {
            basis: "5 jaar.",
            simpeler: "Fleur is in 2011 geboren, Noor in 2016. 2016 − 2011 = 5. Fleur is 5 jaar ouder.",
            nogSimpeler: "5 jaar",
          },
        },
      },
      {
        q: "Op **1 juni 2026** is Bram **9 jaar**. Hij is dit jaar **al jarig geweest**. In welk jaar is hij geboren?",
        options: ["2017", "2016", "2018", "2035"],
        answer: 0,
        wrongHints: [
          null,
          "Dat klopt als hij nog níet jarig was geweest.",
          null,
          "Moet je optellen of aftrekken?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Terugrekenen",
              tekst: "Huidig jaar − leeftijd = geboortejaar.",
            },
            {
              titel: "Rekenen",
              tekst: "2026 − 9 = 2017.",
            },
            {
              titel: "Check",
              tekst: "Al jarig geweest, dus niets extra eraf.",
            },
          ],
          woorden: [
            {
              woord: "geboortejaar",
              uitleg: "Het jaar waarin je bent geboren.",
            },
          ],
          theorie: "Al jarig dit jaar → geboortejaar = huidig jaar − leeftijd.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2026 − 9 = 2017.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Verjaardag-check",
              uitleg: "Al jarig? Dan klopt het verschil precies.",
            },
          ],
          niveaus: {
            basis: "2017.",
            simpeler: "Bram is dit jaar 9 geworden. 2026 − 9 = 2017.",
            nogSimpeler: "2017",
          },
        },
      },
      {
        q: "Je bent jarig op **20 december**. Op **20 december 2026** word je **11**. Hoe oud ben je op **19 december 2026**?",
        options: ["10 jaar", "11 jaar", "12 jaar", "9 jaar"],
        answer: 0,
        wrongHints: [null, "Op 19 december is je verjaardag nog niet geweest.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Verjaardag",
              tekst: "Op 20 december word je 11.",
            },
            {
              titel: "Dag ervoor",
              tekst: "Op 19 december ben je nog niet jarig geweest. Dus ben je nog 10.",
            },
          ],
          woorden: [
            {
              woord: "jarig",
              uitleg: "Op je verjaardag word je 1 jaar ouder.",
            },
          ],
          theorie: "Vóór je verjaardag ben je 1 jaar jonger dan erna.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "19 december: 10 jaar. 20 december: 11 jaar.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Verjaardag-check",
              uitleg: "Nog niet jarig → 1 jaar minder.",
            },
          ],
          niveaus: {
            basis: "10 jaar.",
            simpeler: "Pas op 20 december word je 11. Een dag eerder ben je nog 10.",
            nogSimpeler: "10 jaar",
          },
        },
      },
    ],
  },

  // STAP 5: Praktijk
  {
    title: "Praktijk — vakantie, school, geboorten",
    explanation:
      "Toets-praktijksommen mengen vaak: data + tellen + leeftijd.\n\n**Voorbeeld — vakantie**:\n*'De vakantie duurt van zaterdag 19 juli t/m zondag 31 augustus. Hoeveel dagen vakantie?'*\n• Juli: van 19 juli t/m 31 juli = 31 − 19 + 1 = **13 dagen** (+1 omdat 19 juli zelf meedoet).\n• Augustus: van 1 augustus t/m 31 augustus = **31 dagen**.\n• Totaal: 13 + 31 = **44 dagen**.\n\n**Voorbeeld — schooltrip**:\n*'School-uitje is 4 dagen. We vertrekken maandag 14 mei. Op welke dag komen we terug?'*\n• Maandag 14 mei (dag 1) → di 15 (dag 2) → wo 16 (dag 3) → do 17 (dag 4).\n• Terugkomst: **donderdag 17 mei**.\n\n**Voorbeeld — geboorten**:\n*'Tante Lisa wordt op 1 oktober 2026 35 jaar. In welk jaar is ze geboren?'*\n• 2026 − 35 = **1991**.\n\n**Voorbeeld — vergelijken**:\n*'Joost is geboren in 2014. Lisa is 3 jaar ouder. In welk jaar is Lisa geboren?'*\n• Lisa is 3 ouder → 3 jaar eerder geboren.\n• 2014 − 3 = **2011**.\n\n**Toets-tip**:\n• 'Hoeveel dagen van X t/m Y?' → tel beide datums mee (groot − klein + 1).\n• 'Hoeveel dagen van X tot Y?' → niet beide meetellen (groot − klein).",
    checks: [
      {
        q: "Hoeveel **dagen** is een **week**?",
        options: ["7", "5", "10", "14"],
        answer: 0,
        wrongHints: [null, "Werkdagen, niet hele week.", "Noem de dagen op, van maandag tot en met zondag. Hoeveel zijn het er?", "Te veel — dat zou 2 weken zijn."],
      },
      {
        q: "Een vakantie duurt van **20 juli** tot en met **3 augustus**. Hoeveel **dagen** is dat, als je de eerste en de laatste dag allebei meetelt?",
        options: ["15 dagen", "14 dagen", "16 dagen", "13 dagen"],
        answer: 0,
        wrongHints: [null, "Te weinig — vergeet niet zowel begin als eind mee te tellen.", "Juli heeft 31 dagen. Tel nog eens: 20 t/m 31 juli, en dan 1 t/m 3 augustus.", "Je bent er twee kwijt. Telde je juli als een maand van 30 dagen?"],
      },
      {
        q: "Joost is geboren in **2014**. Lisa is **3 jaar ouder**. In welk jaar is Lisa geboren?",
        options: ["2011", "2017", "2014", "2016"],
        answer: 0,
        wrongHints: [null, "Verkeerde richting — 3 jaar ouder = eerder geboren.", "Zelfde jaar — dan zijn ze even oud.", "Ouder betekent eerder geboren. Is 2016 eerder of later dan 2014?"],
      },
      {
        q: "**Tante** wordt **40** op **15 mei 2026**. In welk jaar is ze geboren?",
        options: ["1986", "1985", "1976", "1996"],
        answer: 0,
        wrongHints: [null, "Dan wordt ze op 15 mei 2026 al 41.", "Dan wordt ze in 2026 al 50.", "Dan wordt ze in 2026 pas 30."],
        uitlegPad: {
          stappen: [
            { titel: "Leeftijd aftrekken", tekst: "Huidig jaar 2026 - leeftijd 40 = 1986. Tante is geboren in 1986." },
          ],
          woorden: [{ woord: "geboortejaar", uitleg: "Het jaar waarin iemand geboren is." }],
          theorie: "Geboortejaar = huidig jaar − leeftijd.",
          voorbeelden: [{ type: "stap", tekst: "Iemand van 40 jaar in 2026 = geboren in 1986." }],
          basiskennis: [{ onderwerp: "Aftrekken", uitleg: "Hoe ouder, hoe eerder geboren." }],
          niveaus: {
            basis: "1986.",
            simpeler: "Wie 40 wordt in 2026 is geboren in 2026 - 40 = 1986.",
            nogSimpeler: "1986",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een cursus loopt van **28 september t/m 4 oktober**. Hoeveel dagen duurt de cursus?",
        options: ["7 dagen", "6 dagen", "8 dagen", "5 dagen"],
        answer: 0,
        wrongHints: [null, "Tel je beide datums mee?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "September",
              tekst: "28, 29 en 30 september = 3 dagen.",
            },
            {
              titel: "Oktober",
              tekst: "1, 2, 3 en 4 oktober = 4 dagen.",
            },
            {
              titel: "Samen",
              tekst: "3 + 4 = 7 dagen.",
            },
          ],
          woorden: [
            {
              woord: "t/m",
              uitleg: "Tot en met: de laatste dag telt ook mee.",
            },
          ],
          theorie: "Bij t/m tel je beide datums mee.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "September heeft 30 dagen: 30 − 28 + 1 = 3. Plus 4 = 7.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "September",
              uitleg: "September heeft 30 dagen.",
            },
          ],
          niveaus: {
            basis: "7 dagen.",
            simpeler: "In september: 28, 29, 30 (3 dagen). In oktober: 1 t/m 4 (4 dagen). Samen 7.",
            nogSimpeler: "7 dagen",
          },
        },
      },
      {
        q: "Een schoolreis duurt **3 dagen**. Je vertrekt op **woensdag 8 april**. Op welke dag kom je terug (de laatste dag van de reis)?",
        options: ["Vrijdag 10 april", "Donderdag 9 april", "Zaterdag 11 april", "Vrijdag 11 april"],
        answer: 0,
        wrongHints: [
          null,
          "Telt woensdag 8 april zelf ook als dag 1?",
          null,
          "Klopt deze dag-naam bij deze datum?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Dag 1",
              tekst: "Woensdag 8 april is dag 1.",
            },
            {
              titel: "Doortellen",
              tekst: "Donderdag 9 april = dag 2. Vrijdag 10 april = dag 3.",
            },
          ],
          woorden: [
            {
              woord: "vertrekdag",
              uitleg: "De eerste dag van de reis telt mee.",
            },
          ],
          theorie: "De vertrekdag is dag 1.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Wo 8 (1), do 9 (2), vr 10 (3).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Dagen tellen",
              uitleg: "Tel de dagen één voor één, beginnend bij dag 1.",
            },
          ],
          niveaus: {
            basis: "Vrijdag 10 april.",
            simpeler: "Woensdag is dag 1, donderdag dag 2, vrijdag dag 3. Dus vrijdag 10 april.",
            nogSimpeler: "Vrijdag 10 april",
          },
        },
      },
      {
        q: "Ilse is geboren in **2015**. Haar broer is **4 jaar jonger**. In welk jaar is haar broer geboren?",
        options: ["2019", "2011", "2015", "2018"],
        answer: 0,
        wrongHints: [null, "Wie jonger is, is later of eerder geboren?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Jonger = later",
              tekst: "Jonger zijn betekent later geboren zijn.",
            },
            {
              titel: "Optellen",
              tekst: "2015 + 4 = 2019.",
            },
          ],
          woorden: [
            {
              woord: "jonger",
              uitleg: "Later geboren.",
            },
          ],
          theorie: "Jonger → geboortejaar + verschil. Ouder → geboortejaar − verschil.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2015 + 4 = 2019.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Jonger of ouder",
              uitleg: "Een jonger kind is na de oudere geboren.",
            },
          ],
          niveaus: {
            basis: "2019.",
            simpeler: "De broer is jonger, dus later geboren. 2015 + 4 = 2019.",
            nogSimpeler: "2019",
          },
        },
      },
      {
        q: "Een vakantie duurt **2 weken en 3 dagen**. Hoeveel dagen is dat?",
        options: ["17 dagen", "23 dagen", "15 dagen", "14 dagen"],
        answer: 0,
        wrongHints: [null, "Hoeveel dagen heeft 1 week?", null, "Vergeet je de 3 extra dagen niet?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Weken",
              tekst: "2 weken = 2 × 7 = 14 dagen.",
            },
            {
              titel: "Extra dagen",
              tekst: "14 + 3 = 17 dagen.",
            },
          ],
          woorden: [
            {
              woord: "week",
              uitleg: "7 dagen.",
            },
          ],
          theorie: "Weken × 7, daarna de losse dagen erbij.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 × 7 + 3 = 17.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Week",
              uitleg: "1 week = 7 dagen.",
            },
          ],
          niveaus: {
            basis: "17 dagen.",
            simpeler: "2 weken is 14 dagen. Plus 3 dagen = 17 dagen.",
            nogSimpeler: "17 dagen",
          },
        },
      },
      {
        q: "Het is **28 november**. Pakjesavond is op **5 december**. Hoeveel nachtjes moet je nog slapen tot pakjesavond?",
        options: ["7", "8", "6", "5"],
        answer: 0,
        wrongHints: [null, "Telde je november als een maand van 31 dagen?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tot eind november",
              tekst: "November heeft 30 dagen. Van 28 naar 30 november = 2 nachtjes.",
            },
            {
              titel: "In december",
              tekst: "Van 30 november naar 5 december = 5 nachtjes.",
            },
            {
              titel: "Samen",
              tekst: "2 + 5 = 7 nachtjes.",
            },
          ],
          woorden: [
            {
              woord: "nachtje",
              uitleg: "Elke nacht slapen brengt je 1 dag verder.",
            },
          ],
          theorie: "Tel van de ene datum naar de andere (niet beide meetellen).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "28 → 30 november (2) + 30 november → 5 december (5) = 7.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "November",
              uitleg: "November heeft 30 dagen.",
            },
          ],
          niveaus: {
            basis: "7.",
            simpeler: "Van 28 november naar 5 december is 7 dagen. Dus nog 7 nachtjes slapen.",
            nogSimpeler: "7",
          },
        },
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — kalender-mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: data tellen, schrikkeljaar, leeftijden, praktijksommen.\n\nVeel succes!",
    checks: [
      {
        q: "Hoeveel **dagen** heeft een **schrikkeljaar**?",
        options: ["366", "365", "364", "367"],
        answer: 0,
        wrongHints: [null, "Gewoon jaar.", "Een gewoon jaar heeft al meer dan 364 dagen. Komt er in een schrikkeljaar een dag bij of af?", "Hoeveel extra dagen heeft een schrikkeljaar: één of twee?"],
      },
      {
        q: "**Vandaag is het dinsdag**. Welke dag is het **3 weken later**?",
        options: ["Dinsdag", "Vrijdag", "Zaterdag", "Maandag"],
        answer: 0,
        wrongHints: [null, "Dat is 3 dagen later, niet 3 weken.", "Wat gebeurt er met de dagnaam als je precies 1 week verder gaat?", "1 dag eerder."],
      },
      {
        q: "**Mark wordt 12 op 5 augustus 2026**. Wanneer is hij geboren?",
        options: ["5 augustus 2014", "5 augustus 2012", "5 augustus 2013", "5 augustus 2008"],
        answer: 0,
        wrongHints: [null, "Dan wordt hij in 2026 al 14.", "Dan wordt hij in 2026 al 13.", "Dan wordt hij in 2026 al 18."],
      },
      {
        q: "Hoeveel **dagen** zijn het van **10 juni** tot **10 juli** *(niet beide meetellen)*?",
        options: ["30 dagen", "31 dagen", "28 dagen", "29 dagen"],
        answer: 0,
        wrongHints: [null, "Hoeveel dagen heeft juni: 30 of 31?", "Rekende je alsof juni net zo kort is als februari?", "Van 10 juni tot 10 juli is precies één maand. Hoeveel dagen heeft juni?"],
        uitlegPad: {
          stappen: [
            { titel: "Let op de vraag — 'tot' vs 't/m'", tekst: "Belangrijk verschil in toetsvragen:\n• **'tot'** = einddag NIET meetellen\n• **'t/m' (tot en met)** = einddag WEL meetellen\nHier staat 'tot' → 10 juli zelf telt niet mee." },
            { titel: "Reken: 10 juni → 10 juli", tekst: "Van 10 juni tot 10 juli is precies **1 maand**. Juni heeft **30 dagen**. Dus 30 dagen tussen 10 juni en 10 juli (10 juli niet meegerekend)." },
            { titel: "Optellen-methode (check)", tekst: "Van 10 juni tot 30 juni = 30 − 10 = **20 dagen**.\nVan 30 juni tot 10 juli = **10 dagen**.\nTotaal: 20 + 10 = **30 dagen**.\nLet op: 10 juni is het startpunt, geen 'verstreken dag'." },
          ],
          woorden: [
            { woord: "tot vs t/m", uitleg: "'tot' = einde NIET inclusief, 't/m' = wel inclusief." },
            { woord: "verstreken dagen", uitleg: "Aantal dagen dat voorbij is gegaan." },
          ],
          theorie: "Toets-truc datumverschil:\n• **Zelfde dag-getal volgende maand** → aantal dagen van die maand.\n• 10 jun tot 10 jul = juni-dagen = 30.\n• 5 mrt tot 5 apr = maart-dagen = 31.\n• 15 feb tot 15 mrt = februari-dagen = 28 (of 29 in schrikkel).",
          voorbeelden: [
            { type: "stap", tekst: "Van 5 jan tot 5 feb = januari-dagen = 31." },
            { type: "stap", tekst: "Van 20 sep tot 20 okt = september-dagen = 30." },
            { type: "stap", tekst: "Let op februari: van 15 feb tot 15 mrt = 28 dagen (gewoon jaar)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Zelfde dag-getal volgende maand = dagen van TUSSENMAAND. Juni = 30, juli = 31, februari = 28/29." },
          ],
          niveaus: {
            basis: "30 dagen.",
            simpeler: "Juni heeft 30 dagen. Van 10 juni naar 10 juli = 30 dagen later.",
            nogSimpeler: "30",
          },
        },
      },
      {
        q: "Op welke datum is **Bevrijdingsdag**?",
        options: ["5 mei", "4 mei", "27 april", "8 mei"],
        answer: 0,
        wrongHints: [null, "Dat is Dodenherdenking.", "Dat is Koningsdag.", "Op 8 mei vieren andere Europese landen de bevrijding. Nederland heeft een eigen datum."],
      },
      {
        q: "Anna en Tim zijn in **hetzelfde jaar geboren**. Anna in januari, Tim in december. Wie is **ouder**?",
        options: ["Anna", "Tim", "Even oud", "Dat hangt af van de dag"],
        answer: 0,
        wrongHints: [null, "Tim is later geboren.", "Ze zijn in hetzelfde jaar geboren, maar niet in dezelfde maand. Wie was als eerste jarig?", "Zelfs 31 januari komt vóór 1 december. Maakt de dag dan nog uit?"],
      },
      { q: "Hoeveel **dagen** heeft februari in een **schrikkeljaar**?", options: ["29","28","30","31"], answer: 0, wrongHints: [null, "Dat is februari in een gewoon jaar.", "Heeft februari ooit 30 dagen?", "Februari is de kortste maand. Kan hij dan 31 dagen hebben?"] },
      { q: "Hoeveel **maanden** heeft een jaar?", options: ["12","10","11","13"], answer: 0, wrongHints: [null, "Tel de maanden: januari, februari, … tot en met december.", "Ben je er één vergeten? Tel van januari tot en met december.", "Telde je januari van het volgende jaar mee?"] },
      { q: "Welke maand heeft **31 dagen**?", options: ["Januari","Februari","April","September"], answer: 0, wrongHints: [null, "Februari heeft 28 of 29 dagen.", "April heeft 30 dagen.", "September heeft 30 dagen."] },
      { q: "Om de hoeveel jaar is er een **schrikkeljaar**?", options: ["4 jaar","2 jaar","10 jaar","100 jaar"], answer: 0, wrongHints: [null, "Dan zou 2026 ook een schrikkeljaar zijn. Had februari 2026 29 dagen?", "Dan zou er in je hele basisschooltijd maar één schrikkeljaar zijn. Klopt dat?", "Om de 100 jaar is er juist een uitzondering. Hoe vaak komt een gewoon schrikkeljaar?"] },
      { q: "Hoeveel **weken** heeft een jaar ongeveer?", options: ["52","12","48","365"], answer: 0, wrongHints: [null, "Dat is het aantal maanden.", "Dat is 12 × 4. Maar de meeste maanden duren iets langer dan 4 weken.", "Dat is het aantal dagen. Hoeveel dagen zitten er in één week?"] },
      { q: "Welke dag komt direct **na vrijdag**?", options: ["Zaterdag","Donderdag","Zondag","Maandag"], answer: 0, wrongHints: [null, "Donderdag komt vóór vrijdag.", "Zondag is 2 dagen na vrijdag.", "Maandag komt na het weekend. Ligt er niets tussen vrijdag en maandag?"] },
      { q: "Je bent geboren in 2014. Hoe oud ben je in 2026, na je verjaardag?", options: ["12","11","13","10"], answer: 0, wrongHints: [null, "Je bent dit jaar al jarig geweest. Moet je dan nog een jaar aftrekken?", "Dan zou je in 2013 geboren zijn.", "Dan zou je in 2016 geboren zijn."] },
      { q: "Op welke datum is **Koningsdag**?", options: ["27 april","30 april","5 mei","30 maart"], answer: 0, wrongHints: [null, "Dat was vroeger Koninginnedag.", "Dat is Bevrijdingsdag.", "Dan is het nog maart. Koningsdag valt later in het voorjaar."] },
      { q: "Op welke datum is **Bevrijdingsdag**?", options: ["5 mei","4 mei","27 april","15 augustus"], answer: 0, wrongHints: [null, "Dat is Dodenherdenking.", "Dat is Koningsdag.", "Op 15 augustus herdenken we het einde van de oorlog in Azië (in het toenmalige Nederlands-Indië)."] },
      { q: "Op welke datum is de **Dodenherdenking**?", options: ["4 mei","5 mei","11 nov","2 nov"], answer: 0, wrongHints: [null, "Op 5 mei is het Bevrijdingsdag.", "11 november is Sint-Maarten.", "2 november is Allerzielen, een kerkelijke gedenkdag. Dat is niet de Nationale Dodenherdenking."] },
      { q: "Hoeveel **dagen** heeft een week?", options: ["7","5","10","6"], answer: 0, wrongHints: [null, "Dat zijn alleen de schooldagen.", "Noem de dagen op, van maandag tot en met zondag. Hoeveel zijn het er?", "Ben je er één vergeten? Tel maandag tot en met zondag."] },
      { q: "Een **kwartaal** heeft hoeveel maanden?", options: ["3","4","6","12"], answer: 0, wrongHints: [null, "Een kwartaal is een kwart jaar. Is 4 maanden een kwart van 12?", "Dat is een half jaar.", "Dat is een heel jaar."] },
      { q: "Hoeveel **jaar** duurt een eeuw?", options: ["100","10","1000","50"], answer: 0, wrongHints: [null, "Dat is een decennium.", "Dat is een millennium.", "Dat is een halve eeuw."] },
      { q: "Hoeveel dagen zitten er in **3 weken**?", options: ["21","20","14","30"], answer: 0, wrongHints: [null, "Reken 3 × 7 nog eens.", "Dat is 2 weken.", "Dat is ongeveer een maand. Hoeveel dagen zijn 3 weken van 7?"] },
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
