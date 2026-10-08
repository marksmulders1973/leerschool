// Leerpad: Tabellen en grafieken lezen — voor groep 6-8
// 7 stappen in 5 hoofdstukken. Doorstroomtoets-stijl data-vragen.
// Sprint-5+ S4 (2026-05-08).

const COLORS = {
  curve: "#00c853",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  bar1: "#5d9cec",
  bar2: "#ffaa30",
  bar3: "#69f0ae",
  bar4: "#ef6c00",
};

const stepEmojis = ["📊","📋","📊","📈","🥧","🛒","🏆"];

const chapters = [
  { letter: "A", title: "Wat zijn tabellen en grafieken?", emoji: "📊", from: 0, to: 0 },
  { letter: "B", title: "Tabellen lezen", emoji: "📋", from: 1, to: 1 },
  { letter: "C", title: "Staafdiagram", emoji: "📊", from: 2, to: 2 },
  { letter: "D", title: "Lijngrafiek + cirkeldiagram", emoji: "📈", from: 3, to: 4 },
  { letter: "E", title: "Toets-praktijk + eindopdracht", emoji: "🏆", from: 5, to: 6 },
];

function staafDiagram(data, titel, eenheid) {
  const max = Math.max(...data.map((d) => d.v));
  const breedte = 320, hoogte = 180;
  const startX = 50, startY = 40, plotH = 120;
  const balkenBreedte = (breedte - startX - 30) / data.length - 8;
  const kleuren = [COLORS.bar1, COLORS.bar2, COLORS.bar3, COLORS.bar4, COLORS.point, COLORS.curve, COLORS.bar1, COLORS.bar2];

  let svg = `<svg viewBox="0 0 ${breedte} ${hoogte}">
<rect x="0" y="0" width="${breedte}" height="${hoogte}" fill="${COLORS.paper}"/>
<text x="${breedte / 2}" y="14" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">${titel}</text>
<line x1="${startX}" y1="${startY + plotH}" x2="${breedte - 15}" y2="${startY + plotH}" stroke="${COLORS.muted}" stroke-width="1"/>
<line x1="${startX}" y1="${startY}" x2="${startX}" y2="${startY + plotH}" stroke="${COLORS.muted}" stroke-width="1"/>`;

  // y-as labels
  for (let i = 0; i <= 4; i++) {
    const y = startY + plotH - (i / 4) * plotH;
    const v = Math.round((max / 4) * i);
    svg += `<line x1="${startX - 4}" y1="${y}" x2="${startX}" y2="${y}" stroke="${COLORS.muted}"/>`;
    svg += `<text x="${startX - 8}" y="${y + 4}" text-anchor="end" fill="${COLORS.muted}" font-size="10" font-family="Arial">${v}</text>`;
  }

  data.forEach((d, i) => {
    const x = startX + 10 + i * (balkenBreedte + 8);
    const h = (d.v / max) * plotH;
    const y = startY + plotH - h;
    svg += `<rect x="${x}" y="${y}" width="${balkenBreedte}" height="${h}" fill="${kleuren[i % kleuren.length]}" opacity="0.85"/>`;
    svg += `<text x="${x + balkenBreedte / 2}" y="${y - 4}" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial" font-weight="bold">${d.v}</text>`;
    svg += `<text x="${x + balkenBreedte / 2}" y="${startY + plotH + 14}" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">${d.l}</text>`;
  });
  if (eenheid) svg += `<text x="${startX - 30}" y="${startY - 10}" fill="${COLORS.muted}" font-size="10" font-family="Arial">${eenheid}</text>`;
  svg += `</svg>`;
  return svg;
}

function tabelSvg(rijen, headers, titel) {
  const breedte = 320, kolommen = headers.length;
  const colW = (breedte - 30) / kolommen;
  let svg = `<svg viewBox="0 0 ${breedte} ${30 + (rijen.length + 1) * 26 + 20}">
<rect x="0" y="0" width="${breedte}" height="${30 + (rijen.length + 1) * 26 + 20}" fill="${COLORS.paper}"/>
<text x="${breedte / 2}" y="20" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">${titel}</text>`;
  // headers
  headers.forEach((h, i) => {
    svg += `<text x="${15 + i * colW + colW / 2}" y="50" text-anchor="middle" fill="${COLORS.point}" font-weight="bold" font-size="12" font-family="Arial">${h}</text>`;
  });
  svg += `<line x1="15" y1="58" x2="${breedte - 15}" y2="58" stroke="${COLORS.curve}" stroke-width="1"/>`;
  rijen.forEach((rij, ri) => {
    rij.forEach((cell, ci) => {
      svg += `<text x="${15 + ci * colW + colW / 2}" y="${78 + ri * 22}" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">${cell}</text>`;
    });
  });
  svg += `</svg>`;
  return svg;
}

function lijnGrafiek(punten, titel) {
  const breedte = 320, hoogte = 180;
  const startX = 50, startY = 40, plotW = breedte - startX - 30, plotH = 120;
  const max = Math.max(...punten.map((p) => p.v));
  const stap = plotW / (punten.length - 1);
  const coords = punten.map((p, i) => ({
    x: startX + i * stap,
    y: startY + plotH - (p.v / max) * plotH,
  }));
  const path = "M " + coords.map((c) => `${c.x} ${c.y}`).join(" L ");

  let svg = `<svg viewBox="0 0 ${breedte} ${hoogte}">
<rect x="0" y="0" width="${breedte}" height="${hoogte}" fill="${COLORS.paper}"/>
<text x="${breedte / 2}" y="14" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">${titel}</text>
<line x1="${startX}" y1="${startY + plotH}" x2="${breedte - 15}" y2="${startY + plotH}" stroke="${COLORS.muted}"/>
<line x1="${startX}" y1="${startY}" x2="${startX}" y2="${startY + plotH}" stroke="${COLORS.muted}"/>
<path d="${path}" stroke="${COLORS.bar1}" stroke-width="2.5" fill="none"/>`;

  coords.forEach((c, i) => {
    svg += `<circle cx="${c.x}" cy="${c.y}" r="4" fill="${COLORS.point}" stroke="${COLORS.curve}" stroke-width="1.5"/>`;
    svg += `<text x="${c.x}" y="${c.y - 8}" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial" font-weight="bold">${punten[i].v}</text>`;
    svg += `<text x="${c.x}" y="${startY + plotH + 14}" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">${punten[i].l}</text>`;
  });
  svg += `</svg>`;
  return svg;
}

const steps = [
  {
    title: "Wat zijn tabellen en grafieken?",
    explanation: "Op de Doorstroomtoets kom je vaak **tabellen** en **grafieken** tegen. Dat zijn manieren om **veel cijfers tegelijk te laten zien** zodat je ze snel kunt vergelijken.\n\n**Soorten die je moet kennen**:\n• **Tabel** — getallen in rijen en kolommen.\n• **Staafdiagram** — verticale of horizontale balken om hoeveelheden te vergelijken.\n• **Lijngrafiek** — punten verbonden met lijnen, voor verloop in de tijd.\n• **Cirkeldiagram** ('taartdiagram') — een cirkel verdeeld in stukken voor delen-van-een-geheel.\n\n**Wanneer welke?**\n• **Tabel** = exacte getallen aflezen.\n• **Staafdiagram** = vergelijken (wie meer, wie minder).\n• **Lijngrafiek** = verloop in de tijd zien (gaat 't omhoog of omlaag?).\n• **Cirkeldiagram** = verhouding van delen (50% rood, 25% blauw, etc.).\n\n**Toets-aanpak voor élke tabel/grafiek**:\n1. Lees eerst de **titel**. Waarover gaat 't?\n2. Kijk naar de **assen** of **kolomtitels**. Welke eenheden? Welke groepen?\n3. Lees pas dan de **vraag**. Wat moet je weten?\n4. Zoek het antwoord **gericht** — niet alle data lezen.\n\n**Toets-tip**: lees de titel + assen vóór de vraag. Anders raak je verdwaald in cijfers.\n\n**Veel-voorkomende valkuil**:\nDe vraag stelt: 'Hoeveel meer X dan Y?' — dan moet je **aftrekken**, niet alleen aflezen. Lees de vraag rustig.",
    svg: staafDiagram([
      { l: "ma", v: 12 },
      { l: "di", v: 18 },
      { l: "wo", v: 9 },
      { l: "do", v: 15 },
      { l: "vr", v: 22 },
    ], "Voorbeeld: aantal verkochte ijsjes per dag", "stuks"),
    checks: [
      {
        q: "Welke vorm gebruik je om **verschillen tussen groepen** te zien?",
        options: ["Staafdiagram","Lijngrafiek","Tabel","Tekst"],
        answer: 0,
        wrongHints: [null,"Lijngrafiek = verloop over tijd, niet vergelijken van groepen.","Tabel toont getallen maar geen visuele vergelijking.","Tekst is traag — beter een grafiek."],
        uitlegPad: {
          stappen: [{ titel: "Staaf = vergelijken", tekst: "Staafdiagram heeft verschillend hoge balken naast elkaar. Hoogte = hoeveelheid. Perfect om in één oogopslag te zien wie meer/minder is dan ander." }],
          woorden: [{ woord: "staafdiagram", uitleg: "Grafiek met balken voor categorieën (sport, kleuren, namen). Hoogte = hoeveelheid." }, { woord: "categorieën", uitleg: "Groepen die je vergelijkt (sporten, schooljaren, etc.)." }],
          theorie: "Welke grafiek wanneer: vergelijken groepen = STAAFDIAGRAM. Verloop tijd = LIJNGRAFIEK. Delen-geheel = CIRKELDIAGRAM. Exacte getallen = TABEL.",
          voorbeelden: [{ type: "verschillen", tekst: "Sport-keuze klas: voetbal=28, tennis=15, hockey=12. Staafdiagram laat direct zien voetbal wint, hockey laagst." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Lijn = tijd. Tabel = getal-exact. Tekst = beschrijven, niet visueel vergelijken." }],
          niveaus: { basis: "Staafdiagram.", simpeler: "Vergelijken groepen → staafdiagram (balken naast elkaar).", nogSimpeler: "Staaf" },
        },
      },
      {
        q: "Welke vorm laat het best zien hoe **het aantal leerlingen per maand** een jaar lang verandert?",
        options: ["Lijngrafiek","Cirkeldiagram","Staafdiagram","Tabel"],
        answer: 0,
        wrongHints: [null,"Cirkel = delen-van-geheel, niet verloop in tijd.","Staaf werkt ook, maar welke vorm laat een verloop door het jaar het duidelijkst zien?","Tabel is goed voor exacte getallen, maar je ziet het verloop slecht."],
        uitlegPad: {
          stappen: [{ titel: "Lijn = tijd", tekst: "Verloop over tijd (12 maanden) → lijngrafiek. Lijn maakt de TREND zichtbaar: stijgt of daalt het door het jaar? Veel beter dan staafdiagram voor tijdverloop." }],
          woorden: [{ woord: "lijngrafiek", uitleg: "Grafiek met punten verbonden door lijn. Toont VERLOOP/VERANDERING in tijd." }, { woord: "trend", uitleg: "Algemene richting (stijgt/daalt/blijft gelijk)." }],
          theorie: "Regel: tijd-as → lijngrafiek. Niet-tijd categorieën (sport, kleuren) → staafdiagram. Belangrijk verschil voor examen.",
          voorbeelden: [{ type: "praktijk", tekst: "Klas-leerlingen per maand: lijn laat direct zien of klas groeit of krimpt door schooljaar." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Cirkel = verhoudingen (50% rood, 30% blauw). Staaf kan maar minder duidelijk voor tijd. Tabel = exacte getallen, geen visueel beeld." }],
          niveaus: { basis: "Lijngrafiek.", simpeler: "Tijd-verloop = lijngrafiek. Per maand een jaar lang = tijd = lijn.", nogSimpeler: "Lijn" },
        },
      },
      {
        q: "Wat moet je **eerst** doen bij een grafiek-vraag?",
        options: ["Titel + assen lezen","Direct het antwoord zoeken","Alle data optellen","Kies een willekeurig getal"],
        answer: 0,
        wrongHints: [null,"Te haastig — eerst snappen wat je leest.","Onnodig — niet alle data is relevant.","Beter eerst lezen."],
        uitlegPad: {
          stappen: [{ titel: "Titel + assen geven CONTEXT", tekst: "Voordat je antwoord zoekt: (1) lees TITEL (waarover gaat 't?), (2) kijk naar ASSEN (welke eenheid, welke groepen?). Pas dan vraag lezen + gericht zoeken." }],
          woorden: [{ woord: "titel", uitleg: "Tekst boven grafiek die zegt waarover 't gaat." }, { woord: "assen", uitleg: "X-as (horizontaal) + Y-as (verticaal). Vertellen welke eenheid + welke categorieën." }],
          theorie: "4-stappen-aanpak: (1) titel, (2) assen, (3) vraag, (4) gericht zoeken. Niet andersom — anders verdwaal je in cijfers + lees fout.",
          voorbeelden: [{ type: "checklist", tekst: "Titel: 'IJsjes-verkoop'. X-as: dagen. Y-as: stuks. Pas dán: 'Hoeveel op woensdag?' → vind 'wo'-balk → lees y-as." }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Haastige leerlingen lezen verkeerde rij/balk. Eerst rustig oriënteren scheelt fouten." }],
          niveaus: { basis: "Titel + assen eerst.", simpeler: "Stap 1 grafiek-vraag = titel + assen lezen voor context.", nogSimpeler: "Eerst lezen" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je wilt de **precieze getallen** van elke dag kunnen opzoeken. Welke vorm past daar het best bij?",
        options: ["Tabel", "Lijngrafiek", "Cirkeldiagram", "Staafdiagram"],
        answer: 0,
        wrongHints: [
          null,
          "Een lijn laat vooral zien of iets stijgt of daalt. Zie je daar meteen het precieze getal?",
          null,
          "Balken zijn handig om te vergelijken. Maar waar staan de getallen precies in?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tabel = precieze getallen",
              tekst: "In een **tabel** staan de getallen zelf in rijen en kolommen. Je leest het precieze getal direct af.",
            },
          ],
          woorden: [
            {
              woord: "tabel",
              uitleg: "Getallen in rijen en kolommen.",
            },
            {
              woord: "precies",
              uitleg: "Het echte getal, niet ongeveer.",
            },
          ],
          theorie: "Welke vorm wanneer: precieze getallen = TABEL. Vergelijken = STAAFDIAGRAM. Verloop in de tijd = LIJNGRAFIEK. Delen van een geheel = CIRKELDIAGRAM.",
          voorbeelden: [
            {
              type: "praktijk",
              tekst: "Een rooster met per dag hoeveel kaartjes er verkocht zijn: in een tabel zie je bij elke dag het precieze aantal.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet anders",
              uitleg: "Een grafiek is een plaatje: je ziet snel wat groot of klein is, maar het precieze getal lees je beter in een tabel.",
            },
          ],
          niveaus: {
            basis: "Tabel.",
            simpeler: "Precieze getallen opzoeken = tabel.",
            nogSimpeler: "Tabel",
          },
        },
      },
      {
        q: "Een **cirkeldiagram** heeft nog een andere naam. Welke?",
        options: ["Taartdiagram", "Balkdiagram", "Puntdiagram", "Rijdiagram"],
        answer: 0,
        wrongHints: [
          null,
          "Balken horen bij een andere soort grafiek. Waar lijkt een cirkel in stukken op?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Cirkel in stukken",
              tekst: "Een cirkeldiagram is een cirkel die in stukken is verdeeld, net als een taart. Daarom heet het ook **taartdiagram**.",
            },
          ],
          woorden: [
            {
              woord: "cirkeldiagram",
              uitleg: "Een cirkel verdeeld in stukken. Elk stuk is een deel van het geheel.",
            },
            {
              woord: "taartstuk",
              uitleg: "Eén stuk van de cirkel.",
            },
          ],
          theorie: "Cirkeldiagram = taartdiagram. Je gebruikt het voor delen van een geheel.",
          voorbeelden: [
            {
              type: "beeld",
              tekst: "Denk aan een taart op een verjaardag: een groot stuk voor de ene groep, een klein stuk voor de andere.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet verwarren",
              uitleg: "Balken horen bij een staafdiagram. Punten met lijnen horen bij een lijngrafiek.",
            },
          ],
          niveaus: {
            basis: "Taartdiagram.",
            simpeler: "Een cirkel in stukken lijkt op een taart: taartdiagram.",
            nogSimpeler: "Taart",
          },
        },
      },
      {
        q: "De vraag is: '**Hoeveel meer** jongens dan meisjes?' Je hebt beide getallen al afgelezen. Wat doe je nu?",
        options: ["Aftrekken", "Optellen", "Vermenigvuldigen", "Niets, alleen één getal aflezen"],
        answer: 0,
        wrongHints: [
          null,
          "Bij optellen krijg je samen. Wordt er gevraagd naar samen?",
          null,
          "Is één getal genoeg om te weten hoeveel méér het is?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Lees de vraag rustig",
              tekst: "'Hoeveel meer' vraagt naar het **verschil** tussen twee getallen.",
            },
            {
              titel: "Verschil = aftrekken",
              tekst: "Groter getal min kleiner getal.",
            },
          ],
          woorden: [
            {
              woord: "verschil",
              uitleg: "Hoeveel meer of minder iets is.",
            },
            {
              woord: "aftrekken",
              uitleg: "Min-som: groter min kleiner.",
            },
          ],
          theorie: "'Hoeveel meer/minder?' = aftrekken. 'Samen?' = optellen.",
          voorbeelden: [
            {
              type: "som",
              tekst: "Jongens 16, meisjes 12. Hoeveel meer jongens? 16 − 12 = 4.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "Veel kinderen lezen alleen één getal af en vergeten dat de vraag over het verschil gaat.",
            },
          ],
          niveaus: {
            basis: "Aftrekken.",
            simpeler: "Hoeveel meer = verschil = aftrekken.",
            nogSimpeler: "Min",
          },
        },
      },
      {
        q: "Waaruit is een **tabel** opgebouwd?",
        options: ["Rijen en kolommen", "Balken en assen", "Punten en lijnen", "Taartstukken"],
        answer: 0,
        wrongHints: [
          null,
          "Balken horen bij een andere vorm. Hoe staan de getallen in een tabel?",
          null,
          "Taartstukken horen bij een cirkel. Is een tabel rond?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Rijen en kolommen",
              tekst: "Een tabel heeft **rijen** (van links naar rechts) en **kolommen** (van boven naar onder). Daar staan de getallen in.",
            },
          ],
          woorden: [
            {
              woord: "rij",
              uitleg: "Horizontaal, van links naar rechts.",
            },
            {
              woord: "kolom",
              uitleg: "Verticaal, van boven naar onder.",
            },
          ],
          theorie: "Tabel = rijen + kolommen. Staafdiagram = balken. Lijngrafiek = punten met lijnen. Cirkeldiagram = taartstukken.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Bovenaan staan de dagen (kolommen), links de namen (rijen). Waar ze elkaar kruisen staat het getal.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Onthouden",
              uitleg: "Elke vorm heeft zijn eigen bouwstenen. Een tabel is de enige met rijen en kolommen vol getallen.",
            },
          ],
          niveaus: {
            basis: "Rijen en kolommen.",
            simpeler: "Een tabel heeft rijen (horizontaal) en kolommen (verticaal).",
            nogSimpeler: "Rijen en kolommen",
          },
        },
      },
    ],
  },

  {
    title: "Tabellen lezen",
    explanation: "Een **tabel** is opgebouwd uit **rijen** (horizontaal) en **kolommen** (verticaal). Bovenin de kolomtitels, links de rij-labels.\n\n**Voorbeeld** — verkochte ijsjes per smaak per week:\n\n| smaak | ma | di | wo | do | vr |\n|-------|----|----|----|----|----|\n| vanille | 5 | 8 | 4 | 6 | 9 |\n| chocolade | 7 | 10 | 5 | 9 | 13 |\n| aardbei | 3 | 6 | 3 | 5 | 7 |\n\n**Lees-aanpak**:\n• **'Hoeveel chocolade-ijsjes op woensdag?'**\n  → Vind rij 'chocolade' + kolom 'wo' → kruispunt = **5**.\n• **'Welke smaak verkocht meest op vrijdag?'**\n  → Vind kolom 'vr' → vergelijk: 9, 13, 7 → **chocolade**.\n• **'Hoeveel chocolade in de hele week?'**\n  → Tel rij 'chocolade': 7 + 10 + 5 + 9 + 13 = **44**.\n\n**Toetsvraag-typen bij tabellen**:\n1. **Aflezen** — 1 cel zoeken.\n2. **Vergelijken** — 'meer/minder/meest/minst'.\n3. **Optellen** — totalen per rij/kolom.\n4. **Verschil** — 'hoeveel meer X dan Y?'.\n5. **Gemiddelde** — som ÷ aantal.\n\n**Toets-tip**:\nWijs met je vinger of pen — anders lees je de verkeerde rij of kolom. **Gegarandeerd dé fout** als je vlug doet.",
    svg: tabelSvg(
      [
        ["vanille", "5", "8", "4", "6", "9"],
        ["chocolade", "7", "10", "5", "9", "13"],
        ["aardbei", "3", "6", "3", "5", "7"],
      ],
      ["smaak", "ma", "di", "wo", "do", "vr"],
      "IJsjes-verkoop per dag",
    ),
    checks: [
      {
        q: "Hoeveel **vanille-ijsjes** op **donderdag**?",
        options: ["6","8","9","4"],
        answer: 0,
        wrongHints: [null,"Verkeerde dag — dat is dinsdag.","Verkeerde dag — dat is vrijdag.","Verkeerde dag — dat is woensdag."],
        uitlegPad: {
          stappen: [{ titel: "Rij + kolom kruispunt", tekst: "Zoek rij 'vanille' (eerste rij). Zoek kolom 'do' (donderdag). Kruispunt = 6. Klaar." }],
          woorden: [{ woord: "rij", uitleg: "Horizontale lijn in tabel (links naar rechts)." }, { woord: "kolom", uitleg: "Verticale lijn in tabel (boven naar onder)." }, { woord: "kruispunt", uitleg: "Waar rij + kolom elkaar snijden = de cel met het getal." }],
          theorie: "Standaard-methode tabel lezen: (1) zoek juiste rij, (2) zoek juiste kolom, (3) kruispunt = antwoord. Wijs MET VINGER om niet te verschuiven naar verkeerde rij.",
          voorbeelden: [{ type: "stap", tekst: "Vanille-rij: 5 8 4 6 9. Dagen: ma di wo do vr. Donderdag = 4e positie. Vanille-do = 6. ✓" }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Verschuif niet per ongeluk naar verkeerde rij. Pen erbij houden helpt." }],
          niveaus: { basis: "6 (vanille×do).", simpeler: "Rij vanille + kolom do = 6 ijsjes.", nogSimpeler: "6" },
        },
      },
      {
        q: "Op welke dag werden **de meeste ijsjes** verkocht (totaal alle smaken)?",
        options: ["vrijdag","dinsdag","maandag","woensdag"],
        answer: 0,
        wrongHints: [null,"Dinsdag-totaal is 24 — een andere dag heeft meer.","Maandag-totaal is maar 15.","Woensdag-totaal is maar 12."],
        uitlegPad: {
          stappen: [
            { titel: "Tel per dag", tekst: "Som per dag (alle 3 smaken): ma=5+7+3=15. di=8+10+6=24. wo=4+5+3=12. do=6+9+5=20. vr=9+13+7=29." },
            { titel: "Vergelijk", tekst: "29 (vr) > 24 (di) > 20 (do) > 15 (ma) > 12 (wo). Vrijdag wint!" },
          ],
          woorden: [{ woord: "totaal", uitleg: "Som van alle getallen in een rij of kolom." }],
          theorie: "Voor 'meeste/minste totaal'-vragen: tel alle rij-getallen voor elke kolom op, dan vergelijk. Niet 1 rij vergelijken — som van álle.",
          voorbeelden: [{ type: "weekend-trend", tekst: "Kan logisch zijn: vrijdag = begin van het weekend, dan eten mensen vaker ijs." }],
          basiskennis: [{ onderwerp: "Eerst optellen", uitleg: "Veel mensen kijken alleen 1 rij (bv. chocolade-top) en denken die wint. Maar vraag is over ALLE smaken samen." }],
          niveaus: { basis: "Vrijdag (29 stuks).", simpeler: "Som per dag. Vr=29 hoogst.", nogSimpeler: "Vr" },
        },
      },
      {
        q: "**Hoeveel chocolade-ijsjes in de hele week**?",
        options: ["44","32","52","48"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je een dag overgeslagen?","Te veel — controleer: 7+10+5+9+13 = ?","Te veel — niet zomaar optellen, controleer per dag."],
        uitlegPad: {
          stappen: [{ titel: "Rij optellen", tekst: "Hele rij chocolade: 7+10+5+9+13. Groepeer slim: (7+13)+(10+5)+9 = 20+15+9 = 44." }],
          woorden: [{ woord: "rij-som", uitleg: "Som van alle getallen in 1 rij = totaal voor die categorie." }],
          theorie: "Slim optellen: zoek combinaties die ronde getallen geven. 7+13=20, 10+5=15. Sneller dan links-naar-rechts: 7+10=17, 17+5=22, 22+9=31, 31+13=44.",
          voorbeelden: [{ type: "check", tekst: "Vergelijking: vanille = 5+8+4+6+9 = 32. Aardbei = 3+6+3+5+7 = 24. Chocolade meest (44) — past." }],
          basiskennis: [{ onderwerp: "Tellen", uitleg: "Tel niet 'gevoel'-matig. Pen + papier of vingers gebruiken. De toets waardeert nauwkeurigheid." }],
          niveaus: { basis: "44 (rij choco).", simpeler: "7+10+5+9+13 = 44.", nogSimpeler: "44" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Tabel 'gelezen boeken'. **Sanne**: september 3, oktober 5, november 2. **Daan**: september 4, oktober 1, november 6. Hoeveel boeken las **Daan in oktober**?",
        options: ["1", "5", "4", "6"],
        answer: 0,
        wrongHints: [null, "Zit je wel in de rij van Daan?", null, "Welke kolom hoort bij oktober?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Rij + kolom",
              tekst: "Zoek de rij van **Daan**: 4, 1, 6. Zoek de kolom **oktober** (de tweede). Waar ze kruisen staat 1.",
            },
          ],
          woorden: [
            {
              woord: "rij",
              uitleg: "Horizontale lijn in een tabel, hier per kind.",
            },
            {
              woord: "kolom",
              uitleg: "Verticale lijn in een tabel, hier per maand.",
            },
          ],
          theorie: "Tabel lezen: (1) goede rij, (2) goede kolom, (3) kruispunt = antwoord. Wijs met je vinger.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Daan: september 4, oktober 1, november 6. Oktober = 1.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "5 is de oktober van Sanne. Let op dat je in de goede rij blijft.",
            },
          ],
          niveaus: {
            basis: "1 boek.",
            simpeler: "Rij Daan + kolom oktober = 1.",
            nogSimpeler: "1",
          },
        },
      },
      {
        q: "Tabel 'bezoekers zwembad': woensdag 95, vrijdag 120, zaterdag 140, zondag 165. Op welke dag kwamen er **de minste** bezoekers?",
        options: ["woensdag", "vrijdag", "zaterdag", "zondag"],
        answer: 0,
        wrongHints: [
          null,
          "Is dat het kleinste getal in de tabel?",
          null,
          "Zoek je het grootste of het kleinste getal?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vergelijk de getallen",
              tekst: "95, 120, 140, 165. Het kleinste getal is 95. Dat hoort bij woensdag.",
            },
          ],
          woorden: [
            {
              woord: "minste",
              uitleg: "Het kleinste aantal.",
            },
            {
              woord: "vergelijken",
              uitleg: "Kijken welk getal groter of kleiner is.",
            },
          ],
          theorie: "'Meeste' = grootste getal zoeken. 'Minste' = kleinste getal zoeken.",
          voorbeelden: [
            {
              type: "ranglijst",
              tekst: "Van weinig naar veel: woensdag 95, vrijdag 120, zaterdag 140, zondag 165.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lees de vraag",
              uitleg: "Onderstreep 'minste'. Wie snel leest, pakt per ongeluk het grootste getal.",
            },
          ],
          niveaus: {
            basis: "Woensdag (95).",
            simpeler: "Kleinste getal = 95 = woensdag.",
            nogSimpeler: "Woensdag",
          },
        },
      },
      {
        q: "Tabel 'fruit verkocht op dinsdag': appels 14, peren 9, bananen 17. Hoeveel stuks fruit werden er **samen** verkocht?",
        options: ["40", "31", "26", "42"],
        answer: 0,
        wrongHints: [null, "Heb je alle drie de soorten meegeteld?", null, "Reken nog eens na: 14 + 9 + 17."],
        uitlegPad: {
          stappen: [
            {
              titel: "Alles optellen",
              tekst: "Samen = alle getallen optellen: 14 + 9 + 17.",
            },
            {
              titel: "Slim rekenen",
              tekst: "14 + 17 = 31. 31 + 9 = 40.",
            },
          ],
          woorden: [
            {
              woord: "samen",
              uitleg: "Alle getallen bij elkaar optellen.",
            },
            {
              woord: "totaal",
              uitleg: "De uitkomst als je alles optelt.",
            },
          ],
          theorie: "'Samen'- of 'totaal'-vraag = alle getallen in die rij of kolom optellen. Sla er geen over.",
          voorbeelden: [
            {
              type: "check",
              tekst: "40 − 9 = 31 en 31 − 17 = 14. Klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "31 krijg je als je de peren vergeet. Tel na hoeveel getallen je hebt opgeteld.",
            },
          ],
          niveaus: {
            basis: "40.",
            simpeler: "14 + 9 + 17 = 40.",
            nogSimpeler: "40",
          },
        },
      },
      {
        q: "Tabel 'lengte in cm': Iris 142, Bram 135, Lotte 150. Hoeveel cm is **Lotte langer dan Bram**?",
        options: ["15", "8", "7", "285"],
        answer: 0,
        wrongHints: [
          null,
          "Welke twee kinderen worden er vergeleken?",
          null,
          "Moet je hier optellen of aftrekken?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Twee getallen zoeken",
              tekst: "Lotte = 150 cm. Bram = 135 cm.",
            },
            {
              titel: "Aftrekken",
              tekst: "150 − 135 = 15 cm.",
            },
          ],
          woorden: [
            {
              woord: "langer dan",
              uitleg: "Hoeveel meer: groter getal min kleiner getal.",
            },
            {
              woord: "verschil",
              uitleg: "Het stuk dat de een meer heeft dan de ander.",
            },
          ],
          theorie: "'Hoeveel langer/meer?' = verschil = aftrekken. Kijk goed welke twee namen in de vraag staan.",
          voorbeelden: [
            {
              type: "check",
              tekst: "135 + 15 = 150. Klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "Iris staat er ook in, maar de vraag gaat alleen over Lotte en Bram.",
            },
          ],
          niveaus: {
            basis: "15 cm.",
            simpeler: "Lotte 150 − Bram 135 = 15.",
            nogSimpeler: "15",
          },
        },
      },
      {
        q: "Tabel 'kinderen die overblijven'. **Groep 6**: maandag 12, dinsdag 15. **Groep 7**: maandag 10, dinsdag 18. Hoeveel kinderen bleven er **op dinsdag** meer over in groep 7 dan in groep 6?",
        options: ["3", "2", "33", "8"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk je wel naar de kolom dinsdag?",
          null,
          "Je vergelijkt twee groepen op dezelfde dag. Welke getallen horen daarbij?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kolom dinsdag",
              tekst: "Dinsdag: groep 6 = 15, groep 7 = 18.",
            },
            {
              titel: "Verschil",
              tekst: "18 − 15 = 3.",
            },
          ],
          woorden: [
            {
              woord: "kolom",
              uitleg: "Hier: alle getallen van één dag onder elkaar.",
            },
            {
              woord: "meer dan",
              uitleg: "Verschil = aftrekken.",
            },
          ],
          theorie: "Eerst de goede kolom (dag) kiezen, dan de twee rijen (groepen) aflezen, dan pas rekenen.",
          voorbeelden: [
            {
              type: "check",
              tekst: "15 + 3 = 18. Klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "2 is het verschil op maandag. Wijs met je vinger de goede kolom aan.",
            },
          ],
          niveaus: {
            basis: "3.",
            simpeler: "Dinsdag: 18 − 15 = 3.",
            nogSimpeler: "3",
          },
        },
      },
    ],
  },

  {
    title: "Staafdiagram lezen",
    explanation: "Een **staafdiagram** toont hoeveelheden via **verticale balken**. Hoe **hoger** de balk, hoe **meer**.\n\n**Onderdelen**:\n• **Y-as** (verticaal) — toont aantallen.\n• **X-as** (horizontaal) — toont categorieën *(dagen, maanden, namen, etc.)*.\n• **Balken** — elke balk = 1 categorie.\n• **Schaal** — let op: y-as kan stappen van 1, 5, 10, 100 hebben.\n\n**Lees-aanpak**:\n1. Welke categorie zoek je? *(zoek balk op x-as)*\n2. Hoe hoog is de balk? *(volg met je vinger naar y-as)*\n3. Lees het cijfer.\n\n**Voorbeeld vragen**:\n• **'Hoeveel kinderen kozen voetbal?'** → vind 'voetbal'-balk → lees y-as.\n• **'Welke sport is het populairst?'** → zoek de hoogste balk.\n• **'Welk verschil tussen voetbal en hockey?'** → lees beide → trek af.\n\n**Toets-valkuil — schaal**:\nKijk goed naar de **y-as-stappen**. Sommige diagrammen springen per 100 ipv per 10. Dan is een 'kleine' balk al heel veel.\n\n**Toets-truc — vergelijking**:\nVergelijk balken visueel — is balk A 2× zo hoog als B? Dan is A 2× zoveel.",
    svg: staafDiagram([
      { l: "voetbal", v: 28 },
      { l: "tennis", v: 15 },
      { l: "hockey", v: 12 },
      { l: "zwemmen", v: 22 },
      { l: "judo", v: 8 },
    ], "Sport-keuze van 85 leerlingen", "leerlingen"),
    checks: [
      {
        q: "**Welke sport is het populairst**?",
        options: ["Voetbal","Zwemmen","Tennis","Hockey"],
        answer: 0,
        wrongHints: [null,"Tweede plek — kijk welke staaf het hoogste piekt.","Derde plek.","Vierde plek."],
        uitlegPad: {
          stappen: [{ titel: "Hoogste balk = populairst", tekst: "Bij staafdiagram: hoogste balk = meest van. Voetbal heeft balk van 28 (hoogste). Zwemmen 22 (2e). Tennis 15. Hockey 12. Judo 8. Voetbal wint." }],
          woorden: [{ woord: "populairst", uitleg: "Meest gekozen, meest gewenst. In staafdiagram: hoogste balk." }],
          theorie: "Voor 'populairst/meeste'-vragen: zoek visueel de HOOGSTE balk. Lees x-as-label voor naam. Hoeft niet getallen te lezen — visueel is sneller.",
          voorbeelden: [{ type: "rangschikken", tekst: "Top-5: voetbal 28, zwemmen 22, tennis 15, hockey 12, judo 8. Voetbal duidelijk hoogst." }],
          basiskennis: [{ onderwerp: "Visueel zien", uitleg: "Bij staafdiagram hoef je niet altijd getallen te lezen — vergelijk visueel hoogte." }],
          niveaus: { basis: "Voetbal (hoogst).", simpeler: "Hoogste balk = voetbal (28).", nogSimpeler: "Voetbal" },
        },
      },
      {
        q: "**Hoeveel meer kinderen kozen voetbal dan judo**?",
        options: ["20","8","36","12"],
        answer: 0,
        wrongHints: [null,"Dat is alleen judo — vraag is verschil.","Dat is som van beide. Vraag is verschil.","Dat is het aantal voor hockey, niet het verschil."],
        uitlegPad: {
          stappen: [
            { titel: "Twee balken aflezen", tekst: "Voetbal = 28. Judo = 8. Beide afgelezen op y-as." },
            { titel: "Aftrekken", tekst: "Verschil = 28 - 8 = 20. Dat zijn 20 kinderen meer voor voetbal." },
          ],
          woorden: [{ woord: "verschil", uitleg: "Hoeveel meer/minder. Altijd aftrekken: groter - kleiner." }],
          theorie: "'Hoeveel meer/minder?'-vragen = ALTIJD AFTREKKEN. Niet optellen, niet één getal lezen.",
          voorbeelden: [{ type: "check", tekst: "28 - 8 = 20 ✓. Klopt: voetbal-balk is veel hoger dan judo-balk." }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Veel mensen lezen alleen voetbal (28) of judo (8) — vergeten vraag is VERSCHIL." }],
          niveaus: { basis: "20 (28-8).", simpeler: "Voetbal 28, judo 8. Verschil = 28-8 = 20.", nogSimpeler: "20" },
        },
      },
      {
        q: "**Hoeveel kinderen kozen NIET voor voetbal of zwemmen**?",
        options: ["35","57","85","43"],
        answer: 0,
        wrongHints: [null,"Te veel — tel alleen de sporten op die niet voetbal of zwemmen zijn.","Dat is het totaal van alle sporten — maar de vraag vraagt alleen die zonder voetbal of zwemmen.","Tel de sporten op die NIET voetbal of zwemmen zijn."],
        uitlegPad: {
          stappen: [
            { titel: "Andere balken optellen", tekst: "NIET voetbal/zwemmen = tennis + hockey + judo. 15 + 12 + 8 = 35." },
            { titel: "Of: aftrek-methode", tekst: "Totaal 85 - (voetbal 28 + zwemmen 22) = 85 - 50 = 35. Zelfde antwoord." },
          ],
          woorden: [{ woord: "NIET", uitleg: "Toets-truc: 'NIET X' = totaal min X. Of: tel alle andere op." }],
          theorie: "Twee methodes: (1) andere categorieën optellen, (2) totaal min uitgesloten. Beide werken. Check elkaar via beide methodes.",
          voorbeelden: [{ type: "check", tekst: "Methode A: 15+12+8 = 35. Methode B: 85-50 = 35. Beide kloppen ✓." }],
          basiskennis: [{ onderwerp: "Lees woord 'NIET'", uitleg: "Examen-val: 'NIET' makkelijk te missen. Onderstreep negatie-woorden bij lezen." }],
          niveaus: { basis: "35 (andere balken).", simpeler: "NIET voet/zwem = tennis+hockey+judo = 15+12+8 = 35.", nogSimpeler: "35" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Staafdiagram 'lievelingsfruit': appel 9, banaan 14, druif 6, peer 11. Welk fruit werd **het minst** gekozen?",
        options: ["Druif", "Appel", "Peer", "Banaan"],
        answer: 0,
        wrongHints: [null, "Is dat wel de laagste balk?", null, "Zoek je de hoogste of de laagste balk?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Laagste balk",
              tekst: "Minst gekozen = laagste balk. Druif (6) is het laagst.",
            },
          ],
          woorden: [
            {
              woord: "minst",
              uitleg: "Het kleinste aantal. In een staafdiagram: de laagste balk.",
            },
          ],
          theorie: "'Meest' = hoogste balk. 'Minst' = laagste balk.",
          voorbeelden: [
            {
              type: "ranglijst",
              tekst: "Banaan 14, peer 11, appel 9, druif 6.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Visueel",
              uitleg: "Bij een staafdiagram zie je de laagste balk vaak al zonder getallen te lezen.",
            },
          ],
          niveaus: {
            basis: "Druif (6).",
            simpeler: "Laagste balk = druif.",
            nogSimpeler: "Druif",
          },
        },
      },
      {
        q: "Staafdiagram 'oud papier': groep 6 haalde 45 kg, groep 7 haalde 60 kg en groep 8 haalde 38 kg. Hoeveel kg haalden de drie groepen **samen**?",
        options: ["143", "105", "98", "133"],
        answer: 0,
        wrongHints: [null, "Heb je alle drie de balken opgeteld?", null, "Reken nog eens na: 45 + 60 + 38."],
        uitlegPad: {
          stappen: [
            {
              titel: "Drie balken aflezen",
              tekst: "Groep 6 = 45, groep 7 = 60, groep 8 = 38.",
            },
            {
              titel: "Optellen",
              tekst: "45 + 60 = 105. 105 + 38 = 143.",
            },
          ],
          woorden: [
            {
              woord: "samen",
              uitleg: "Alles bij elkaar optellen.",
            },
          ],
          theorie: "'Samen'-vraag bij een staafdiagram: elke balk aflezen en alles optellen.",
          voorbeelden: [
            {
              type: "check",
              tekst: "143 − 38 = 105 en 105 − 60 = 45. Klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "105 krijg je als je groep 8 vergeet.",
            },
            {
              onderwerp: "Rekenen",
              uitleg: "Tel netjes onder elkaar of in stapjes.",
            },
          ],
          niveaus: {
            basis: "143 kg.",
            simpeler: "45 + 60 + 38 = 143.",
            nogSimpeler: "143",
          },
        },
      },
      {
        q: "Op de y-as van een staafdiagram staan de getallen 0, 100, 200 en 300. Een balk komt **precies halverwege** tussen 100 en 200. Hoeveel is dat?",
        options: ["150", "15", "105", "1500"],
        answer: 0,
        wrongHints: [
          null,
          "De as gaat in stappen van 100. Kan het antwoord dan zo klein zijn?",
          null,
          "Wat ligt er precies in het midden tussen 100 en 200?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kijk naar de schaal",
              tekst: "De as springt per 100: 0, 100, 200, 300.",
            },
            {
              titel: "Halverwege",
              tekst: "Het midden tussen 100 en 200 is 150.",
            },
          ],
          woorden: [
            {
              woord: "schaal",
              uitleg: "De stappen op de as, hier per 100.",
            },
            {
              woord: "halverwege",
              uitleg: "Precies in het midden.",
            },
          ],
          theorie: "Kijk altijd eerst naar de stappen op de y-as. Bij stappen van 100 is een klein stukje al veel.",
          voorbeelden: [
            {
              type: "vergelijk",
              tekst: "Bij stappen van 10 ligt het midden tussen 10 en 20 op 15. Bij stappen van 100 ligt het midden tussen 100 en 200 op 150.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "Wie niet naar de schaal kijkt, denkt dat de balk 15 is.",
            },
          ],
          niveaus: {
            basis: "150.",
            simpeler: "Midden tussen 100 en 200 = 150.",
            nogSimpeler: "150",
          },
        },
      },
      {
        q: "Staafdiagram 'verkochte loten': Fatima 23, Jesse 31, Mees 17. Hoeveel loten verkocht **Jesse meer dan Mees**?",
        options: ["14", "8", "6", "48"],
        answer: 0,
        wrongHints: [
          null,
          "Welke twee namen staan in de vraag?",
          null,
          "Moet je bij 'meer dan' optellen of aftrekken?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Twee balken aflezen",
              tekst: "Jesse = 31. Mees = 17.",
            },
            {
              titel: "Aftrekken",
              tekst: "31 − 17 = 14.",
            },
          ],
          woorden: [
            {
              woord: "meer dan",
              uitleg: "Verschil: groter getal min kleiner getal.",
            },
          ],
          theorie: "'Hoeveel meer?' = aftrekken. Lees eerst goed welke twee balken je nodig hebt.",
          voorbeelden: [
            {
              type: "check",
              tekst: "17 + 14 = 31. Klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "Fatima staat er ook in, maar die heb je hier niet nodig.",
            },
          ],
          niveaus: {
            basis: "14.",
            simpeler: "Jesse 31 − Mees 17 = 14.",
            nogSimpeler: "14",
          },
        },
      },
    ],
  },

  {
    title: "Lijngrafiek — verloop in de tijd",
    explanation: "Een **lijngrafiek** toont hoe iets **verandert in de tijd**. Punten worden verbonden met lijnen.\n\n**Onderdelen**:\n• **X-as** = tijd *(maanden, jaren, weken)*.\n• **Y-as** = waarde *(aantal, prijs, temperatuur)*.\n• **Punten** = waarde op een tijdstip.\n• **Lijn** = verbinding tussen punten *(visualiseert de verandering)*.\n\n**Wat lees je af**:\n• **Stijgt of daalt?** — kijk naar de richting van de lijn.\n• **Hoogste/laagste punt?** — zoek hoogste/laagste op de lijn.\n• **Wanneer ging het omhoog/omlaag?** — kijk waar de lijn van richting verandert.\n• **Verschil tussen 2 momenten?** — lees 2 punten af, trek af.\n\n**Toetsvraag-typen**:\n• 'Wat was de temperatuur op vrijdag?' → exact aflezen.\n• 'Op welke dag was 't het warmst?' → hoogste punt zoeken.\n• 'Hoeveel verschil tussen ma en vr?' → twee punten aflezen, aftrekken.\n• 'Op welke dagen daalde de temperatuur?' → kijk naar lijn-richtingen.\n\n**Toets-tip**:\n• Een **vlakke lijn** betekent geen verandering.\n• Een **stijgende lijn** = waarde wordt groter.\n• Een **dalende lijn** = waarde wordt kleiner.\n• **Knik in lijn** = verandering van richting.\n\n**Veel-voorkomende fout**: x-as en y-as omdraaien. Eerst kijken: tijd staat altijd op x-as.",
    svg: lijnGrafiek([
      { l: "ma", v: 16 },
      { l: "di", v: 19 },
      { l: "wo", v: 22 },
      { l: "do", v: 18 },
      { l: "vr", v: 24 },
      { l: "za", v: 27 },
      { l: "zo", v: 23 },
    ], "Temperatuur in graden Celsius — week"),
    checks: [
      {
        // disabled = leunt op step.svg (lijngrafiek ma-zo temperaturen) die in
        // citoMix-sample-flow verloren gaat. Mark melding 2026-05-18: vraag
        // verscheen in Doorstroomtoets-simulator zonder grafiek-context.
        disabled: true,
        q: "**Op welke dag was 't het warmst**?",
        options: ["zaterdag","vrijdag","woensdag","zondag"],
        answer: 0,
        wrongHints: [null,"Bijna — vrijdag was 24, maar er was een dag hoger.","Veel minder — kijk naar het hoogste punt.","Niet — kijk naar het hoogste punt."],
        uitlegPad: {
          stappen: [{ titel: "Hoogste punt = warmst", tekst: "Lijngrafiek: zoek HOOGSTE punt op de lijn. Lees x-as voor de dag, y-as voor de temperatuur. Hoogste punt = zaterdag (27°C)." }],
          woorden: [{ woord: "hoogste punt", uitleg: "Punt op grafiek met de grootste y-waarde." }, { woord: "piek", uitleg: "Hoogste punt van een lijngrafiek. Synoniem voor maximum." }],
          theorie: "Voor 'wanneer warmst/koudst/meest/minst'-vragen op lijngrafiek: visueel hoogste/laagste punt zoeken. Niet alle getallen lezen — kijk welke lijn-knik bovenaan zit.",
          voorbeelden: [{ type: "tabel", tekst: "Week: ma=16, di=19, wo=22, do=18, vr=24, za=27, zo=23. Zaterdag (27) = warmst." }],
          basiskennis: [{ onderwerp: "Visueel zoeken", uitleg: "Lijngrafiek is snel: oog ziet hoogste/laagste punt direct, geen getallen lezen nodig." }],
          niveaus: { basis: "Zaterdag (27).", simpeler: "Hoogste punt = zaterdag (27°C).", nogSimpeler: "Za" },
        },
      },
      {
        disabled: true, // leunt op step.svg (lijngrafiek temperaturen ma-zo).
        q: "**Verschil in temperatuur tussen maandag en zaterdag**?",
        options: ["11","27","16","10"],
        answer: 0,
        wrongHints: [null,"Dat is alleen zaterdag — vraag is verschil.","Dat is alleen maandag.","Te weinig — controleer 27 − 16."],
        uitlegPad: {
          stappen: [
            { titel: "Twee punten aflezen", tekst: "Maandag = 16°C. Zaterdag = 27°C. Beide aflezen op y-as." },
            { titel: "Aftrekken", tekst: "Verschil = 27 - 16 = 11°C." },
          ],
          woorden: [{ woord: "verschil", uitleg: "Groter getal min kleiner getal. Altijd positief antwoord." }],
          theorie: "'Verschil tussen X en Y'-vragen: lees beide punten, trek af. Niet schatten — exact aflezen.",
          voorbeelden: [{ type: "check", tekst: "16 + 11 = 27 ✓. Tussen ma (16) en za (27) zit 11 graden temperatuurstijging." }],
          basiskennis: [{ onderwerp: "Verschil-vraag", uitleg: "Examen-val: lees niet alleen 1 dag. 'Verschil' = altijd aftrekken." }],
          niveaus: { basis: "11 (27-16).", simpeler: "Ma 16, za 27. Verschil 27-16 = 11°C.", nogSimpeler: "11" },
        },
      },
      {
        disabled: true, // leunt op step.svg (lijngrafiek temperaturen ma-zo).
        q: "**Op welke dagen daalde de temperatuur** ten opzichte van de dag ervoor?",
        options: ["Donderdag en zondag","Maandag en dinsdag","Geen enkele dag","Alle dagen"],
        answer: 0,
        wrongHints: [null,"Op die dagen steeg de temperatuur juist — kijk goed naar de lijn-richting.","Niet correct — zoek de dagen waarop de lijn omlaag gaat ten opzichte van de dag ervoor.","Niet alle — kijk per dag of de lijn omhoog of omlaag gaat."],
        uitlegPad: {
          stappen: [
            { titel: "Lijn-richtingen bekijken", tekst: "Tussen elke 2 punten: ging lijn omhoog (stijging) of omlaag (daling)? Loop punt voor punt: ma→di: 16→19 (stijg). di→wo: 19→22 (stijg). wo→do: 22→18 (DAAL!). do→vr: 18→24 (stijg). vr→za: 24→27 (stijg). za→zo: 27→23 (DAAL!)." },
            { titel: "Tellen", tekst: "Daling op: donderdag + zondag. Twee dagen." },
          ],
          woorden: [{ woord: "daling", uitleg: "Waarde wordt kleiner. In lijngrafiek: lijn gaat omlaag." }, { woord: "stijging", uitleg: "Waarde wordt groter. Lijn gaat omhoog." }],
          theorie: "Voor 'wanneer daalt het?'-vragen: vergelijk elk paar opeenvolgende dagen. Punt naar links = vorige dag, naar rechts = volgende. Daal als rechter punt LAGER is.",
          voorbeelden: [{ type: "visueel", tekst: "Op donderdag: lijn knikt naar BENEDEN (22→18). Op zondag: idem (27→23). Beide dalingen visueel zichtbaar." }],
          basiskennis: [{ onderwerp: "Lijn-richting", uitleg: "Stijging = lijn omhoog. Daling = lijn omlaag. Vlak = geen verandering." }],
          niveaus: { basis: "Do + zo (lijn omlaag).", simpeler: "Daling = lijn omlaag. Donderdag (22→18) + zondag (27→23).", nogSimpeler: "Do+zo" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat betekent het als de lijn in een lijngrafiek **vlak** loopt?",
        options: [
          "Er verandert niets",
          "De waarde wordt groter",
          "De waarde wordt kleiner",
          "De lijn verandert van richting",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dan zou de lijn omhoog gaan. Doet een vlakke lijn dat?",
          null,
          "Dan zou je een knik zien. Is dat bij een vlakke lijn zo?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vlak = gelijk",
              tekst: "Een vlakke lijn gaat niet omhoog en niet omlaag. De waarde blijft hetzelfde.",
            },
          ],
          woorden: [
            {
              woord: "vlak",
              uitleg: "Recht naar opzij, zonder omhoog of omlaag.",
            },
            {
              woord: "stijgen",
              uitleg: "Omhoog gaan: de waarde wordt groter.",
            },
          ],
          theorie: "Lijn omhoog = stijgen. Lijn omlaag = dalen. Lijn vlak = geen verandering. Knik = verandering van richting.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Dinsdag 20 graden, woensdag 20 graden: tussen die dagen loopt de lijn vlak.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Onthouden",
              uitleg: "Kijk naar de richting van de lijn tussen twee punten.",
            },
          ],
          niveaus: {
            basis: "Er verandert niets.",
            simpeler: "Vlakke lijn = de waarde blijft gelijk.",
            nogSimpeler: "Gelijk",
          },
        },
      },
      {
        q: "Wat staat er bij een lijngrafiek op de **x-as** (de horizontale as)?",
        options: ["De tijd", "De aantallen", "De titel", "De prijzen"],
        answer: 0,
        wrongHints: [null, "Aantallen lees je af langs de as die omhoog gaat. Welke as is dat?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tijd op de x-as",
              tekst: "Bij een lijngrafiek staat de **tijd** op de x-as: dagen, weken, maanden of jaren.",
            },
            {
              titel: "Waarde op de y-as",
              tekst: "De aantallen, prijzen of temperaturen staan op de y-as (verticaal).",
            },
          ],
          woorden: [
            {
              woord: "x-as",
              uitleg: "De horizontale as, van links naar rechts.",
            },
            {
              woord: "y-as",
              uitleg: "De verticale as, van onder naar boven.",
            },
          ],
          theorie: "Lijngrafiek: x-as = tijd, y-as = waarde. Draai ze niet om.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Temperatuur per dag: onderaan ma, di, wo (tijd). Links de graden (waarde).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "Een veelgemaakte fout is de assen omdraaien. Tijd staat altijd op de x-as.",
            },
          ],
          niveaus: {
            basis: "De tijd.",
            simpeler: "Lijngrafiek: tijd van links naar rechts op de x-as.",
            nogSimpeler: "Tijd",
          },
        },
      },
      {
        q: "Lijngrafiek 'lengte van een plantje': week 1: 4 cm, week 2: 7 cm, week 3: 11 cm, week 4: 12 cm. Hoeveel cm groeide het plantje **van week 1 tot week 4**?",
        options: ["8", "12", "16", "4"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is hoe lang het plantje in week 4 is. Hoeveel is het erbij gekomen?",
          null,
          "Dat is de lengte in week 1. Hoeveel is het daarna gegroeid?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Twee punten aflezen",
              tekst: "Week 1 = 4 cm. Week 4 = 12 cm.",
            },
            {
              titel: "Aftrekken",
              tekst: "12 − 4 = 8 cm gegroeid.",
            },
          ],
          woorden: [
            {
              woord: "groeien",
              uitleg: "Groter worden. Hoeveel erbij = verschil.",
            },
            {
              woord: "verschil",
              uitleg: "Groter getal min kleiner getal.",
            },
          ],
          theorie: "'Hoeveel gegroeid/gestegen tussen twee momenten?' = lees beide punten af en trek af.",
          voorbeelden: [
            {
              type: "check",
              tekst: "4 + 8 = 12. Klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "12 is de lengte, niet hoeveel het plantje gegroeid is.",
            },
          ],
          niveaus: {
            basis: "8 cm.",
            simpeler: "12 − 4 = 8.",
            nogSimpeler: "8",
          },
        },
      },
      {
        q: "Lijngrafiek 'bezoekers bibliotheek': maandag 30, dinsdag 45, woensdag 45, donderdag 25, vrijdag 40. Tussen welke twee dagen loopt de lijn **vlak**?",
        options: [
          "dinsdag en woensdag",
          "maandag en dinsdag",
          "woensdag en donderdag",
          "donderdag en vrijdag",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bleef het aantal tussen die dagen gelijk, of ging het omhoog?",
          null,
          "Bleef het aantal tussen die dagen gelijk?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Paren vergelijken",
              tekst: "ma→di: 30→45 omhoog. di→wo: 45→45 gelijk. wo→do: 45→25 omlaag. do→vr: 25→40 omhoog.",
            },
            {
              titel: "Vlak",
              tekst: "Alleen tussen dinsdag en woensdag blijft het getal gelijk.",
            },
          ],
          woorden: [
            {
              woord: "vlak",
              uitleg: "Geen verandering: twee keer hetzelfde getal.",
            },
            {
              woord: "opeenvolgend",
              uitleg: "Dagen direct na elkaar.",
            },
          ],
          theorie: "Vlakke lijn = twee opeenvolgende punten met dezelfde waarde.",
          voorbeelden: [
            {
              type: "visueel",
              tekst: "Op de grafiek loopt de lijn tussen di en wo recht naar opzij.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Werkwijze",
              uitleg: "Vergelijk steeds twee dagen naast elkaar. Hetzelfde getal = vlak.",
            },
          ],
          niveaus: {
            basis: "Dinsdag en woensdag.",
            simpeler: "45 en 45: gelijk, dus vlak.",
            nogSimpeler: "Di en wo",
          },
        },
      },
      {
        q: "Lijngrafiek 'temperatuur 's ochtends': maandag 8, dinsdag 6, woensdag 3, donderdag 5, vrijdag 9 graden. Op welke dag was het **het koudst**?",
        options: ["woensdag", "maandag", "dinsdag", "donderdag"],
        answer: 0,
        wrongHints: [null, "Is dat wel het laagste punt?", null, "Zoek het laagste getal van alle dagen."],
        uitlegPad: {
          stappen: [
            {
              titel: "Laagste punt",
              tekst: "Koudst = laagste temperatuur = laagste punt op de lijn. Dat is 3 graden op woensdag.",
            },
          ],
          woorden: [
            {
              woord: "koudst",
              uitleg: "De laagste temperatuur.",
            },
            {
              woord: "laagste punt",
              uitleg: "Het punt dat het laagst ligt op de lijn.",
            },
          ],
          theorie: "Warmst = hoogste punt. Koudst = laagste punt. Bekijk alle dagen.",
          voorbeelden: [
            {
              type: "ranglijst",
              tekst: "Van koud naar warm: wo 3, do 5, di 6, ma 8, vr 9.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "Vergelijk alle dagen, niet alleen de eerste paar.",
            },
          ],
          niveaus: {
            basis: "Woensdag (3 graden).",
            simpeler: "Laagste punt = 3 = woensdag.",
            nogSimpeler: "Woensdag",
          },
        },
      },
      {
        q: "Wat betekent het als de lijn van een lijngrafiek **omlaag** gaat?",
        options: [
          "De waarde wordt kleiner",
          "De waarde wordt groter",
          "De waarde blijft gelijk",
          "De tijd gaat terug",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dan zou de lijn juist omhoog gaan.",
          null,
          "Op de x-as gaat de tijd altijd vooruit, van links naar rechts.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Omlaag = dalen",
              tekst: "Een lijn die omlaag gaat betekent dat de waarde **kleiner** wordt. Dat heet dalen.",
            },
          ],
          woorden: [
            {
              woord: "dalen",
              uitleg: "Kleiner worden. De lijn gaat omlaag.",
            },
            {
              woord: "stijgen",
              uitleg: "Groter worden. De lijn gaat omhoog.",
            },
          ],
          theorie: "Omhoog = stijgen (groter). Omlaag = dalen (kleiner). Vlak = gelijk.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Het aantal blaadjes aan een boom in de herfst: 100, 70, 40. De lijn gaat omlaag.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tijd",
              uitleg: "De tijd loopt van links naar rechts, altijd vooruit. Alleen de waarde gaat omhoog of omlaag.",
            },
          ],
          niveaus: {
            basis: "De waarde wordt kleiner.",
            simpeler: "Lijn omlaag = dalen = kleiner.",
            nogSimpeler: "Kleiner",
          },
        },
      },
      {
        q: "Lijngrafiek 'zwemmers in het zwembad': om 10 uur 20, om 11 uur 35, om 12 uur 50, om 13 uur 30. Op welk tijdstip gaat de lijn van **stijgen naar dalen**?",
        options: ["om 12 uur", "om 11 uur", "om 13 uur", "om 10 uur"],
        answer: 0,
        wrongHints: [
          null,
          "Gaat de lijn na dit tijdstip nog verder omhoog?",
          null,
          "Kijk naar het hoogste punt: daar draait de lijn om.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Richting per stuk",
              tekst: "10→11: 20→35 omhoog. 11→12: 35→50 omhoog. 12→13: 50→30 omlaag.",
            },
            {
              titel: "Knik",
              tekst: "Om 12 uur stopt het stijgen en begint het dalen. Daar zit de knik.",
            },
          ],
          woorden: [
            {
              woord: "knik",
              uitleg: "Plek waar de lijn van richting verandert.",
            },
            {
              woord: "piek",
              uitleg: "Het hoogste punt van de lijn.",
            },
          ],
          theorie: "Een knik van stijgen naar dalen zit altijd bij het hoogste punt.",
          voorbeelden: [
            {
              type: "visueel",
              tekst: "De lijn gaat omhoog tot 12 uur (50) en daarna omlaag naar 30.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Werkwijze",
              uitleg: "Bekijk elk stukje lijn: omhoog of omlaag? Waar het wisselt, zit de knik.",
            },
          ],
          niveaus: {
            basis: "Om 12 uur.",
            simpeler: "Tot 12 uur omhoog, daarna omlaag.",
            nogSimpeler: "12 uur",
          },
        },
      },
    ],
  },

  {
    title: "Cirkeldiagram — taartstuk-grootte",
    explanation: "Een **cirkeldiagram** (ook wel 'taartdiagram') is een cirkel verdeeld in **taartstukken**. Elk stuk = een deel van het geheel.\n\n**Belangrijk**:\n• De hele cirkel = **100%** of **alles**.\n• Hoe **groter** een taartstuk, hoe **groter** dat deel.\n\n**Voorbeeld**: een klas van 40 leerlingen, hun favoriete sport.\n• Voetbal — 50% (de helft van de cirkel)\n• Hockey — 25% (een kwart)\n• Tennis — 15%\n• Anders — 10%\n\nIn aantallen:\n• Voetbal: 40 × 50% = **20** leerlingen.\n• Hockey: 40 × 25% = **10** leerlingen.\n• Tennis: 40 × 15% = 6.\n• Anders: 40 × 10% = 4.\n\n**Toetsvraag-typen**:\n• 'Welk **percentage** kiest X?' — lees taart-stuk in %.\n• 'Hoeveel **leerlingen** kiezen X?' — % × totaal.\n• 'Welk grootste/kleinste deel?' — vergelijk taart-stukken.\n\n**Toets-truc — sleutel-percentages herkennen**:\n• **Halve cirkel** = 50%.\n• **Kwart cirkel** = 25%.\n• **Drie-kwart cirkel** = 75%.\n• **Tien-procent-stukje** = klein puntje.\n\n**Belangrijke check**:\nAlle percentages moeten samen **100%** zijn. Anders klopt het diagram niet.",
    checks: [
      {
        q: "Een klas van **40 leerlingen**: **25%** kiest voetbal. Hoeveel?",
        options: ["10","25","8","15"],
        answer: 0,
        wrongHints: [null,"Niet het percentage — bereken het uit.","Te weinig — dat is 1/5 van 40.","Te veel — dat is meer dan 25%."],
        uitlegPad: {
          stappen: [{ titel: "25% = kwart", tekst: "25% = 1/4. Dus 1/4 van 40 = 40 ÷ 4 = 10. Of: 25/100 × 40 = 0,25 × 40 = 10." }],
          woorden: [{ woord: "25%", uitleg: "Kwart deel. = 1/4. Halve cirkel is 50%, kwart cirkel is 25%." }],
          theorie: "% van aantal uitrekenen: deel door 'omgekeerde'. 25%=÷4 / 50%=÷2 / 20%=÷5 / 10%=÷10. Snel rekenen zonder rekenmachine.",
          voorbeelden: [{ type: "controle", tekst: "10 voetbal van 40 leerlingen. Klopt dat? 10/40 = 1/4 = 25% ✓." }],
          basiskennis: [{ onderwerp: "Niet verwarren", uitleg: "Vraag is AANTAL leerlingen (in personen), niet percentage. 25% is geen 25 personen." }],
          niveaus: { basis: "10 (40÷4).", simpeler: "25% van 40 = 1/4 × 40 = 10 leerlingen.", nogSimpeler: "10" },
        },
      },
      {
        q: "Cirkeldiagram met taartstukken: **rood 50%**, **blauw 30%**, **groen 20%**. Wat is **groen + blauw**?",
        options: ["50%","20%","80%","30%"],
        answer: 0,
        wrongHints: [null,"Te weinig — alleen groen.","Te veel — heb je rood erbij geteld?","Te weinig — alleen blauw."],
        uitlegPad: {
          stappen: [{ titel: "Twee percentages optellen", tekst: "Groen + Blauw = 20% + 30% = 50%. Of: niet-rood = 100% - 50% = 50%. Beide methoden geven 50%." }],
          woorden: [{ woord: "som van %", uitleg: "Percentages mogen direct opgeteld worden als ze van zelfde geheel zijn." }],
          theorie: "Cirkel = 100%. Alle taart-stukken samen = 100% (check altijd). Twee stukken samen = direct hun percentages optellen.",
          voorbeelden: [{ type: "check", tekst: "Rood 50% + Blauw 30% + Groen 20% = 100% ✓. Groen + Blauw = 50%, plus rood 50% = 100% ✓." }],
          basiskennis: [{ onderwerp: "Lees vraag", uitleg: "Vraag is alleen groen + blauw (zonder rood). Niet rood erbij rekenen." }],
          niveaus: { basis: "50% (20+30).", simpeler: "Groen 20% + Blauw 30% = 50%.", nogSimpeler: "50%" },
        },
      },
      {
        q: "In een klas met **20 leerlingen** kiest **40%** wiskunde. Hoeveel?",
        options: ["8","12","4","10"],
        answer: 0,
        wrongHints: [null,"Te veel — 12 zou 60% zijn.","Te weinig — dat is 20%.","Te veel — dat is 50%."],
        uitlegPad: {
          stappen: [{ titel: "40% berekenen", tekst: "40% = 40/100 = 0,4. 0,4 × 20 = 8. Of: 10% van 20 = 2, dus 40% = 4 × 2 = 8." }],
          woorden: [{ woord: "40%", uitleg: "40 van elke 100. Iets minder dan helft (50%)." }],
          theorie: "Truc: 10%-methode is heel handig. 10% van 20 = 2. Bouw op: 40% = 4 × 10% = 4 × 2 = 8.",
          voorbeelden: [{ type: "check", tekst: "8 van 20 leerlingen = 8/20 = 2/5 = 40% ✓." }],
          basiskennis: [{ onderwerp: "Realiteit", uitleg: "40% van 20 is meer dan kwart (5) maar minder dan helft (10). 8 past." }],
          niveaus: { basis: "8 (40% × 20).", simpeler: "10% van 20 = 2. 40% = 4 × 2 = 8.", nogSimpeler: "8" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "In een cirkeldiagram beslaat één stuk **driekwart** van de cirkel. Welk percentage is dat?",
        options: ["75%", "25%", "50%", "70%"],
        answer: 0,
        wrongHints: [null, "Dat is één kwart. Hoeveel kwarten zijn driekwart?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Kwarten",
              tekst: "De hele cirkel = 100%. Een kwart = 25%.",
            },
            {
              titel: "Driekwart",
              tekst: "Driekwart = 3 kwarten = 3 × 25% = 75%.",
            },
          ],
          woorden: [
            {
              woord: "kwart",
              uitleg: "Een vierde deel = 25%.",
            },
            {
              woord: "driekwart",
              uitleg: "Drie van de vier kwarten = 75%.",
            },
          ],
          theorie: "Sleutel-percentages: halve cirkel = 50%, kwart = 25%, driekwart = 75%.",
          voorbeelden: [
            {
              type: "check",
              tekst: "75% + 25% = 100%. Driekwart + een kwart = de hele cirkel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Onthouden",
              uitleg: "Denk aan een klok: van 12 tot 9 uur is driekwart rondje.",
            },
          ],
          niveaus: {
            basis: "75%.",
            simpeler: "3 × 25% = 75%.",
            nogSimpeler: "75%",
          },
        },
      },
      {
        q: "Cirkeldiagram 'zo komen we naar school': fiets 45%, lopen 30%, de rest komt met de auto. Welk percentage komt met de **auto**?",
        options: ["25%", "75%", "15%", "35%"],
        answer: 0,
        wrongHints: [
          null,
          "Dat zijn fiets en lopen samen. Hoeveel blijft er over?",
          null,
          "Reken na: 100% − 45% − 30%.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Samen 100%",
              tekst: "De hele cirkel is 100%.",
            },
            {
              titel: "Rest uitrekenen",
              tekst: "Fiets + lopen = 45% + 30% = 75%. Auto = 100% − 75% = 25%.",
            },
          ],
          woorden: [
            {
              woord: "rest",
              uitleg: "Wat overblijft van het geheel.",
            },
            {
              woord: "100%",
              uitleg: "De hele cirkel.",
            },
          ],
          theorie: "Ontbrekend stuk = 100% min alle andere stukken.",
          voorbeelden: [
            {
              type: "check",
              tekst: "45% + 30% + 25% = 100%. Klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "75% is het deel dat níét met de auto komt.",
            },
          ],
          niveaus: {
            basis: "25%.",
            simpeler: "100% − 75% = 25%.",
            nogSimpeler: "25%",
          },
        },
      },
      {
        q: "Op een feest zijn **60 kinderen**. In het cirkeldiagram is het stuk 'limonade' **50%**. Hoeveel kinderen kozen limonade?",
        options: ["30", "50", "15", "25"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het percentage. Hoeveel kinderen is dat?",
          null,
          "Dat is een kwart van 60. Hoeveel is de helft?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "50% = de helft",
              tekst: "50% is een halve cirkel, dus de helft.",
            },
            {
              titel: "Uitrekenen",
              tekst: "De helft van 60 = 60 ÷ 2 = 30.",
            },
          ],
          woorden: [
            {
              woord: "50%",
              uitleg: "De helft.",
            },
            {
              woord: "percentage",
              uitleg: "Hoeveel van elke 100.",
            },
          ],
          theorie: "50% = ÷ 2. 25% = ÷ 4. 10% = ÷ 10.",
          voorbeelden: [
            {
              type: "check",
              tekst: "30 + 30 = 60. De helft klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet verwarren",
              uitleg: "50% is geen 50 kinderen. Reken het percentage om naar een aantal.",
            },
          ],
          niveaus: {
            basis: "30 kinderen.",
            simpeler: "50% van 60 = 60 ÷ 2 = 30.",
            nogSimpeler: "30",
          },
        },
      },
      {
        q: "Een school heeft **200 leerlingen**. In het cirkeldiagram is het stuk 'bus' **10%**. Hoeveel leerlingen komen met de bus?",
        options: ["20", "10", "2", "100"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het percentage. Hoeveel leerlingen is dat?",
          null,
          "Dat zou de helft zijn. Is 10% de helft?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "10% = ÷ 10",
              tekst: "10% is één tiende deel. Deel door 10.",
            },
            {
              titel: "Uitrekenen",
              tekst: "200 ÷ 10 = 20.",
            },
          ],
          woorden: [
            {
              woord: "10%",
              uitleg: "Eén van elke tien.",
            },
            {
              woord: "tiende deel",
              uitleg: "Iets in 10 gelijke stukken verdelen, en dan 1 stuk nemen.",
            },
          ],
          theorie: "10% van een getal = dat getal ÷ 10. Handig om ook 20%, 30% enz. te maken.",
          voorbeelden: [
            {
              type: "check",
              tekst: "10 × 20 = 200. Klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet verwarren",
              uitleg: "10% is geen 10 leerlingen. Het hangt af van het totaal.",
            },
          ],
          niveaus: {
            basis: "20 leerlingen.",
            simpeler: "10% van 200 = 200 ÷ 10 = 20.",
            nogSimpeler: "20",
          },
        },
      },
      {
        q: "Cirkeldiagram 'wat doe je na school?': gamen 35%, lezen 30%, sporten 20%, tekenen 15%. Welk taartstuk is **het grootst**?",
        options: ["Gamen", "Lezen", "Sporten", "Tekenen"],
        answer: 0,
        wrongHints: [
          null,
          "Vergelijk de percentages: is er een groter getal?",
          null,
          "Is dat het grootste of het kleinste percentage?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Grootste percentage",
              tekst: "Grootste stuk = grootste percentage. 35% (gamen) is het grootst.",
            },
          ],
          woorden: [
            {
              woord: "taartstuk",
              uitleg: "Eén deel van het cirkeldiagram.",
            },
            {
              woord: "grootst",
              uitleg: "Het hoogste percentage.",
            },
          ],
          theorie: "Hoe groter het percentage, hoe groter het taartstuk.",
          voorbeelden: [
            {
              type: "ranglijst",
              tekst: "Gamen 35%, lezen 30%, sporten 20%, tekenen 15%. Samen 100%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "Tel op: 35 + 30 + 20 + 15 = 100. Het diagram klopt.",
            },
          ],
          niveaus: {
            basis: "Gamen (35%).",
            simpeler: "Grootste percentage = 35% = gamen.",
            nogSimpeler: "Gamen",
          },
        },
      },
      {
        q: "Een cirkeldiagram heeft maar drie stukken: **40%, 30% en 20%**. Klopt dit diagram?",
        options: ["Nee, er mist 10%", "Ja, het klopt precies", "Nee, het is 10% te veel", "Nee, er mist 20%"],
        answer: 0,
        wrongHints: [
          null,
          "Tel de drie percentages eens op. Is dat de hele cirkel?",
          null,
          "Reken na: 40 + 30 + 20 = ?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Optellen",
              tekst: "40% + 30% + 20% = 90%.",
            },
            {
              titel: "Vergelijk met 100%",
              tekst: "De hele cirkel is 100%. 100% − 90% = 10% ontbreekt.",
            },
          ],
          woorden: [
            {
              woord: "100%",
              uitleg: "Alle stukken samen: de hele cirkel.",
            },
          ],
          theorie: "Belangrijke check: alle percentages van een cirkeldiagram samen = 100%. Anders klopt het niet.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "50% + 30% + 20% = 100% → klopt wel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Werkwijze",
              uitleg: "Tel alle stukken op en vergelijk met 100%.",
            },
          ],
          niveaus: {
            basis: "Nee, er mist 10%.",
            simpeler: "Samen 90%, dus 10% te weinig.",
            nogSimpeler: "Mist 10%",
          },
        },
      },
    ],
  },

  {
    title: "Praktijk — de toets data-vragen",
    explanation: "Toetsvragen combineren vaak **meerdere stappen**: aflezen + bewerking *(optellen, aftrekken, vermenigvuldigen of percentage)*.\n\n**Voorbeeld 1**:\n*'Tabel: aantal koeken-verkopen per dag. Ma 12, di 18, wo 9, do 15, vr 22. Wat is het gemiddelde per dag?'*\n• Som = 12+18+9+15+22 = 76.\n• Aantal dagen = 5.\n• Gemiddelde = 76 ÷ 5 = **15,2**.\n\n**Voorbeeld 2 — staafdiagram + percentage**:\n*'Voetbal: 28, judo: 8 van 85 leerlingen. Welk percentage doet voetbal?'*\n• 28 ÷ 85 ≈ 0,33 → **33%**.\n\n**Voorbeeld 3 — lijngrafiek + verschil**:\n*'Temperatuur dinsdag 19 °C, vrijdag 24 °C. Hoeveel graden is 't gestegen?'*\n• 24 − 19 = **5 °C**.\n\n**Voorbeeld 4 — cirkeldiagram + getal**:\n*'In een klas van 40: 40% kiest hockey, 25% kiest voetbal. Hoeveel kiezen iets anders?'*\n• Hockey + voetbal = 40+25 = 65%.\n• Anders = 100−65 = 35%.\n• 35% van 40 = **14**.\n\n**Toets-stappenplan**:\n1. Welke vorm? *(tabel/staaf/lijn/cirkel)*\n2. Wat lees ik af? *(getallen of percentage)*\n3. Welke bewerking moet ik doen? *(+ − × ÷ of percentage)*\n4. Schrijf op en reken.",
    checks: [
      {
        q: "Tabel met aantal verkochte boeken: **ma 25, di 30, wo 18, do 22, vr 35**. Wat is het **gemiddelde per dag**?",
        options: ["26","30","25","22"],
        answer: 0,
        wrongHints: [null,"Te veel — dat is dinsdag, niet gemiddelde.","Te weinig — controleer som ÷ aantal.","Te weinig — controleer som."],
        uitlegPad: {
          stappen: [
            { titel: "Som", tekst: "25 + 30 + 18 + 22 + 35 = 130." },
            { titel: "Delen door aantal", tekst: "Gemiddelde = som ÷ aantal dagen = 130 ÷ 5 = 26." },
          ],
          woorden: [{ woord: "gemiddelde", uitleg: "Som van alle getallen gedeeld door aantal getallen. Engels: average/mean." }],
          theorie: "Formule: gemiddelde = (a+b+c+...) ÷ n. n = aantal getallen. Belangrijk: alle dagen tellen, ook lage (anders schat je te hoog).",
          voorbeelden: [{ type: "check", tekst: "26 ligt tussen laagste (18) en hoogste (35). Past in het midden. Logisch." }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Veel mensen kiezen 1 dag (30) als 'lijkt gemiddeld'. Moet je echt uitrekenen." }],
          niveaus: { basis: "26 (130÷5).", simpeler: "Som 130 ÷ 5 dagen = 26 gemiddeld.", nogSimpeler: "26" },
        },
      },
      {
        q: "Staafdiagram: **kat 12, hond 18, vis 6, vogel 4** uit een klas van **40**. Welk **percentage** koos hond?",
        options: ["45%","18%","40%","30%"],
        answer: 0,
        wrongHints: [null,"Niet het aantal honden — bereken het percentage.","Niet het totaal aantal leerlingen — bereken het percentage.","Te weinig — bereken het percentage met de formule deel ÷ geheel × 100."],
        uitlegPad: {
          stappen: [
            { titel: "Deel ÷ geheel × 100", tekst: "% = (deel / geheel) × 100. Hond = 18 / 40 = 0,45. × 100 = 45%." },
          ],
          woorden: [{ woord: "deel", uitleg: "Aantal in groep (hond = 18)." }, { woord: "geheel", uitleg: "Totaal aantal (klas = 40)." }],
          theorie: "Standaardformule percentage berekenen: (deel ÷ geheel) × 100. Werkt altijd. Check: 12+18+6+4 = 40 ✓.",
          voorbeelden: [{ type: "rangschikken", tekst: "Kat 12/40=30%. Hond 18/40=45%. Vis 6/40=15%. Vogel 4/40=10%. Som = 100% ✓." }],
          basiskennis: [{ onderwerp: "Niet aantal", uitleg: "Vraag is PERCENTAGE, niet aantal. 18 is het aantal (al gegeven). 18% zou betekenen 'van elke 100'." }],
          niveaus: { basis: "45% (18÷40×100).", simpeler: "Hond: 18 ÷ 40 = 0,45 = 45%.", nogSimpeler: "45%" },
        },
      },
      {
        q: "Lijngrafiek temperatuur over 5 dagen: 14, 16, 19, 17, 20. **Op welke 2 opeenvolgende dagen daalde 't**?",
        options: ["Dag 3 → 4","Dag 1 → 2","Dag 2 → 3","Geen"],
        answer: 0,
        wrongHints: [null,"Daar steeg de temperatuur juist — was het tweede getal groter of kleiner?","Daar steeg de temperatuur ook — controleer of de tweede dag warmer of kouder was.","Er is wel een daling — zoek het paar waarbij de tweede dag kouder is dan de eerste."],
        uitlegPad: {
          stappen: [{ titel: "Vergelijk paren", tekst: "Dag 1→2: 14→16 STIJG. Dag 2→3: 16→19 STIJG. Dag 3→4: 19→17 DAAL! Dag 4→5: 17→20 STIJG. Alleen dag 3→4 daalt." }],
          woorden: [{ woord: "opeenvolgend", uitleg: "Twee dagen direct achter elkaar (niet dag 1 en 5, maar dag 1 en 2)." }, { woord: "daling", uitleg: "Tweede getal kleiner dan eerste." }],
          theorie: "Voor 'wanneer daalt'-vragen: vergelijk paren opeenvolgende dagen. Als tweede < eerste → daling. Anders stijging.",
          voorbeelden: [{ type: "check", tekst: "19 → 17: daling van 2 graden. Lijn knikt visueel omlaag tussen dag 3 en 4." }],
          basiskennis: [{ onderwerp: "Visueel", uitleg: "Bij lijngrafiek: lijn naar BENEDEN = daling. Lijn naar BOVEN = stijging." }],
          niveaus: { basis: "Dag 3→4 (19→17).", simpeler: "Enige daling: dag 3 (19°) → dag 4 (17°).", nogSimpeler: "3→4" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Tabel 'verkochte koekjes': maandag 14, dinsdag 10, woensdag 16, donderdag 20. Wat is het **gemiddelde per dag**?",
        options: ["15", "16", "14", "60"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is één dag. Heb je alle dagen gebruikt?",
          null,
          "Dat is de som. Wat moet je daarna nog doen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Som",
              tekst: "14 + 10 + 16 + 20 = 60.",
            },
            {
              titel: "Delen",
              tekst: "Er zijn 4 dagen. 60 ÷ 4 = 15.",
            },
          ],
          woorden: [
            {
              woord: "gemiddelde",
              uitleg: "Alles optellen en delen door het aantal.",
            },
            {
              woord: "som",
              uitleg: "Alles bij elkaar opgeteld.",
            },
          ],
          theorie: "Gemiddelde = som ÷ aantal. Tel alle dagen mee.",
          voorbeelden: [
            {
              type: "check",
              tekst: "15 ligt tussen de laagste (10) en de hoogste (20). Logisch.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "Na het optellen nog delen door het aantal dagen. Anders heb je de som.",
            },
          ],
          niveaus: {
            basis: "15.",
            simpeler: "60 ÷ 4 = 15.",
            nogSimpeler: "15",
          },
        },
      },
      {
        q: "Staafdiagram 'lievelingseten': van de **50 kinderen** kozen er **20** voor pizza. Welk **percentage** koos pizza?",
        options: ["40%", "20%", "30%", "50%"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het aantal kinderen. Hoeveel procent is dat van 50?",
          null,
          "Dat zou de helft zijn. Is 20 de helft van 50?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Deel ÷ geheel",
              tekst: "20 van de 50. 20 ÷ 50 = 0,4.",
            },
            {
              titel: "× 100",
              tekst: "0,4 × 100 = 40%.",
            },
          ],
          woorden: [
            {
              woord: "deel",
              uitleg: "Het aantal in de groep: 20.",
            },
            {
              woord: "geheel",
              uitleg: "Het totaal: 50.",
            },
          ],
          theorie: "Percentage = deel ÷ geheel × 100. Truc: 50 kinderen → elk kind is 2%.",
          voorbeelden: [
            {
              type: "check",
              tekst: "Elk kind = 2%. 20 kinderen × 2% = 40%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet verwarren",
              uitleg: "20 kinderen is geen 20%. Het totaal is 50, niet 100.",
            },
          ],
          niveaus: {
            basis: "40%.",
            simpeler: "20 ÷ 50 × 100 = 40%.",
            nogSimpeler: "40%",
          },
        },
      },
      {
        q: "Lijngrafiek 'temperatuur': om 9 uur was het **12 graden**, om 15 uur **21 graden**. Hoeveel graden is de temperatuur **gestegen**?",
        options: ["9", "33", "6", "21"],
        answer: 0,
        wrongHints: [
          null,
          "Moet je bij 'gestegen' optellen of aftrekken?",
          null,
          "Dat is de temperatuur om 15 uur. Hoeveel kwam erbij?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Twee punten",
              tekst: "Om 9 uur 12 graden. Om 15 uur 21 graden.",
            },
            {
              titel: "Aftrekken",
              tekst: "21 − 12 = 9 graden gestegen.",
            },
          ],
          woorden: [
            {
              woord: "stijgen",
              uitleg: "Hoger worden. Hoeveel erbij = verschil.",
            },
          ],
          theorie: "Hoeveel gestegen? Lees beide punten af en trek af: later min eerder.",
          voorbeelden: [
            {
              type: "check",
              tekst: "12 + 9 = 21. Klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "6 is het verschil in uren (15 − 9), niet in graden. Lees goed wat er gevraagd wordt.",
            },
          ],
          niveaus: {
            basis: "9 graden.",
            simpeler: "21 − 12 = 9.",
            nogSimpeler: "9",
          },
        },
      },
      {
        q: "Cirkeldiagram in een klas van **20 kinderen**: 50% kiest pannenkoeken, 25% kiest patat en de rest kiest soep. Hoeveel **kinderen** kiezen soep?",
        options: ["5", "25", "15", "10"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is een percentage. Hoeveel kinderen is dat?",
          null,
          "Dat is het aantal voor pannenkoeken. Hoeveel blijft er over voor soep?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Percentage soep",
              tekst: "Pannenkoeken + patat = 50% + 25% = 75%. Soep = 100% − 75% = 25%.",
            },
            {
              titel: "Aantal",
              tekst: "25% = een kwart. 20 ÷ 4 = 5 kinderen.",
            },
          ],
          woorden: [
            {
              woord: "rest",
              uitleg: "Wat overblijft.",
            },
            {
              woord: "25%",
              uitleg: "Een kwart: ÷ 4.",
            },
          ],
          theorie: "Eerst het ontbrekende percentage, dan omrekenen naar een aantal.",
          voorbeelden: [
            {
              type: "check",
              tekst: "Pannenkoeken 10 + patat 5 + soep 5 = 20. Klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "25 is het percentage, geen aantal kinderen.",
            },
          ],
          niveaus: {
            basis: "5 kinderen.",
            simpeler: "Soep = 25%. 25% van 20 = 5.",
            nogSimpeler: "5",
          },
        },
      },
      {
        q: "Tabel 'statiegeldflessen': week 1: 18, week 2: 24, week 3: 30. De klas wil **100 flessen** halen. Hoeveel flessen missen er nog?",
        options: ["28", "72", "32", "38"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is hoeveel ze al hebben. Hoeveel moeten er nog bij?",
          null,
          "Reken na: eerst optellen, dan 100 min de som.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Optellen",
              tekst: "18 + 24 + 30 = 72 flessen al gehaald.",
            },
            {
              titel: "Aftrekken",
              tekst: "100 − 72 = 28 flessen missen er nog.",
            },
          ],
          woorden: [
            {
              woord: "missen",
              uitleg: "Wat er nog nodig is om het doel te halen.",
            },
            {
              woord: "doel",
              uitleg: "Hier: 100 flessen.",
            },
          ],
          theorie: "Twee stappen: (1) optellen wat er al is, (2) doel min dat getal.",
          voorbeelden: [
            {
              type: "check",
              tekst: "72 + 28 = 100. Klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "Stop niet na stap 1. 72 is wat ze hebben, niet wat ze missen.",
            },
          ],
          niveaus: {
            basis: "28 flessen.",
            simpeler: "100 − 72 = 28.",
            nogSimpeler: "28",
          },
        },
      },
      {
        q: "Staafdiagram 'verkochte dozen eieren': maandag 4 dozen, dinsdag 7 dozen. In elke doos zitten **6 eieren**. Hoeveel **eieren** werden er op dinsdag verkocht?",
        options: ["42", "13", "66", "24"],
        answer: 0,
        wrongHints: [
          null,
          "Bij 'in elke doos zitten er 6' moet je niet optellen.",
          null,
          "Dat is maandag. Welke dag vraagt de vraag?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Aflezen",
              tekst: "Dinsdag = 7 dozen.",
            },
            {
              titel: "Vermenigvuldigen",
              tekst: "7 dozen × 6 eieren = 42 eieren.",
            },
          ],
          woorden: [
            {
              woord: "per doos",
              uitleg: "In elke doos evenveel.",
            },
            {
              woord: "vermenigvuldigen",
              uitleg: "Keer-som: 7 × 6.",
            },
          ],
          theorie: "Aflezen + bewerking: eerst het goede getal, dan de som die de vraag vraagt.",
          voorbeelden: [
            {
              type: "check",
              tekst: "42 ÷ 6 = 7 dozen. Klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "66 krijg je als je maandag en dinsdag samen neemt. De vraag gaat alleen over dinsdag.",
            },
          ],
          niveaus: {
            basis: "42 eieren.",
            simpeler: "7 × 6 = 42.",
            nogSimpeler: "42",
          },
        },
      },
    ],
  },

  {
    title: "Eindopdracht — data lezen mix",
    explanation: "Mix-toets met tabellen en grafieken in Doorstroomtoets-stijl. Verschillende vormen en bewerkingen door elkaar.\n\n**Hint**: lees telkens eerst titel + assen, dan vraag, dan reken.\n\nVeel succes!",
    svg: staafDiagram([
      { l: "Tom", v: 24 },
      { l: "Eva", v: 32 },
      { l: "Ali", v: 18 },
      { l: "Lisa", v: 28 },
    ], "Sponsorloop — gelopen rondjes", "rondjes"),
    checks: [
      {
        disabled: true, // leunt op step.svg (staafdiagram Tom/Eva/Ali/Lisa).
        q: "Welk kind liep **het meest**?",
        options: ["Eva","Tom","Ali","Lisa"],
        answer: 0,
        wrongHints: [null,"Derde — Eva is hoger.","Minst — kijk naar de hoogste.","Tweede — Eva is hoger."],
        uitlegPad: {
          stappen: [{ titel: "Hoogste balk", tekst: "Tom=24, Eva=32, Ali=18, Lisa=28. Eva (32) heeft hoogste balk. Volgorde: Eva 32 > Lisa 28 > Tom 24 > Ali 18." }],
          woorden: [{ woord: "meest", uitleg: "Grootste hoeveelheid. In staafdiagram: hoogste balk." }],
          theorie: "Standaard staafdiagram-vraag: hoogste balk = meest. Visueel direct te zien.",
          voorbeelden: [{ type: "ranglijst", tekst: "Eva 32 (1e). Lisa 28 (2e). Tom 24 (3e). Ali 18 (4e/laatst)." }],
          basiskennis: [{ onderwerp: "Visueel", uitleg: "Bij 4 balken: zoek visueel de hoogste. Hoeft niet altijd getallen exact lezen." }],
          niveaus: { basis: "Eva (32).", simpeler: "Hoogste balk = Eva (32 rondjes).", nogSimpeler: "Eva" },
        },
      },
      {
        disabled: true, // leunt op step.svg (staafdiagram Tom/Eva/Ali/Lisa).
        q: "Hoeveel **rondjes liepen Tom en Lisa samen**?",
        options: ["52","56","48","60"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: Tom 24 + Lisa 28.","Te weinig — heb je eentje overgeslagen?","Te veel — niet zomaar 30 + 30."],
        uitlegPad: {
          stappen: [{ titel: "Twee balken optellen", tekst: "Tom = 24. Lisa = 28. Samen = 24 + 28 = 52." }],
          woorden: [{ woord: "samen", uitleg: "Twee of meer waarden bij elkaar optellen." }],
          theorie: "'Samen'-vragen = OPTELLEN. Niet aftrekken, niet alleen 1 lezen. Beide balken aflezen, dan +.",
          voorbeelden: [{ type: "check", tekst: "24 + 28 = 52 ✓. Even controle: 24+28 = (24+30)-2 = 54-2 = 52 ✓." }],
          basiskennis: [{ onderwerp: "Optellen", uitleg: "Slim tellen: 24+28 = 24+30-2 = 52. Of rond af: ~25+~28 = ~53. Schatten + correctie." }],
          niveaus: { basis: "52 (24+28).", simpeler: "Tom 24 + Lisa 28 = 52 rondjes samen.", nogSimpeler: "52" },
        },
      },
      {
        // disabled = vraag leunt op step.svg (staafdiagram) die in citoMix-sample-flow
        // verloren gaat, waardoor gebruikers in de Doorstroomtoets-simulator alleen
        // de bare vraagtekst zien zonder grafiek-context. Blijft beschikbaar in
        // dit leerpad zelf — daar is de svg wel aanwezig. (Bug 4a uit UX-review.)
        disabled: true,
        q: "*Tabel rondjes hardlopen:* Tom **24**, Eva **32**, Ali **18**, Lisa **28**. **Hoeveel rondjes liep Ali minder dan Eva**?",
        options: ["14","18","32","50"],
        answer: 0,
        wrongHints: [null,"Dat is alleen Ali — vraag is verschil.","Dat is alleen Eva — vraag is verschil.","Dat is som — niet het verschil."],
        uitlegPad: {
          stappen: [{ titel: "Verschil = aftrekken", tekst: "Ali = 18. Eva = 32. Verschil = 32 - 18 = 14. Ali liep 14 rondjes minder dan Eva." }],
          woorden: [{ woord: "minder dan", uitleg: "Aftrekken: groter getal min kleiner getal." }],
          theorie: "'Hoeveel meer/minder?' = verschil = aftrekken. Groter - kleiner. Antwoord altijd positief.",
          voorbeelden: [{ type: "check", tekst: "32 - 18 = 14 ✓. Of: 18 + 14 = 32 ✓ (terug-check)." }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Niet de losse waarden (18 of 32) kiezen. Vraag is over het VERSCHIL." }],
          niveaus: { basis: "14 (32-18).", simpeler: "Eva 32, Ali 18. Verschil = 32-18 = 14.", nogSimpeler: "14" },
        },
      },
      {
        q: "*Tabel:* Tom **24**, Eva **32**, Ali **18**, Lisa **28** rondjes. **Wat is het gemiddelde aantal rondjes** per kind?",
        options: ["25,5","26","24","28"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: (24+32+18+28) ÷ 4.","Te weinig — controleer som.","Te veel — dat is Lisa."],
        uitlegPad: {
          stappen: [
            { titel: "Som", tekst: "Tom 24 + Eva 32 + Ali 18 + Lisa 28 = 102." },
            { titel: "Delen", tekst: "Gemiddelde = 102 ÷ 4 kinderen = 25,5." },
          ],
          woorden: [{ woord: "gemiddelde", uitleg: "Som van alle waarden gedeeld door aantal waarden." }],
          theorie: "Stap 1: som van ALLE waarden (alle 4 kinderen, niet 3). Stap 2: deel door aantal. Niet schatten.",
          voorbeelden: [{ type: "check", tekst: "25,5 ligt tussen laagste (Ali 18) en hoogste (Eva 32). Past in midden." }],
          basiskennis: [{ onderwerp: "Komma", uitleg: "Gemiddelde mag een komma-getal zijn (25,5). Niet afronden tenzij gevraagd." }],
          niveaus: { basis: "25,5 (102÷4).", simpeler: "Som 102 ÷ 4 kinderen = 25,5 gemiddeld.", nogSimpeler: "25,5" },
        },
      },
      {
        q: "Een cirkeldiagram: **rood 60%, blauw 25%, geel 15%**. Welk deel is **MINDER dan een kwart**?",
        options: ["Geel","Blauw","Rood","Geen"],
        answer: 0,
        wrongHints: [null,"25% is precies een kwart — niet minder dan een kwart.","60% is veel meer dan een kwart.","Eén kleur is wel kleiner dan een kwart — vergelijk percentages."],
        uitlegPad: {
          stappen: [{ titel: "Kwart = 25%", tekst: "Een kwart = 1/4 = 25%. Vergelijk: rood 60% (>25%), blauw 25% (=25%, niet minder), geel 15% (<25%, JA!). Alleen geel is minder dan kwart." }],
          woorden: [{ woord: "kwart", uitleg: "Vierde deel = 25% = 1/4." }, { woord: "minder dan", uitleg: "Kleiner dan. <" }],
          theorie: "Sleutel-percentages onthouden: halve=50%, kwart=25%, tien-procent=10%. Op cirkeldiagram visueel ook herkenbaar (halve cirkel, kwart cirkel).",
          voorbeelden: [{ type: "vergelijk", tekst: "60% > 25% (rood, niet). 25% = 25% (blauw, niet — gelijk). 15% < 25% (geel, ja)." }],
          basiskennis: [{ onderwerp: "Letten op '='", uitleg: "Blauw 25% = precies kwart, niet MINDER. Strikte ongelijkheid <." }],
          niveaus: { basis: "Geel (15%).", simpeler: "Kwart = 25%. Geel 15% < 25%. Enige stuk MINDER dan kwart.", nogSimpeler: "Geel" },
        },
      },
      {
        q: "Lijngrafiek temperatuur: ma 18, di 22, wo 25, do 21, vr 19. **Verschil tussen warmste en koudste dag**?",
        options: ["7","11","6","4"],
        answer: 0,
        wrongHints: [null,"Te veel — zoek de warmste en de koudste dag en bereken dan het verschil.","Te weinig — heb je de echt warmste dag gevonden?","Te weinig — heb je alle dagen vergeleken om de koudste te vinden?"],
        uitlegPad: {
          stappen: [
            { titel: "Warmste + koudste vinden", tekst: "Alle dagen: 18, 22, 25, 21, 19. Hoogste = 25 (woensdag). Laagste = 18 (maandag)." },
            { titel: "Verschil", tekst: "25 - 18 = 7 graden." },
          ],
          woorden: [{ woord: "warmste", uitleg: "Hoogste temperatuur. In lijngrafiek: hoogste punt." }, { woord: "koudste", uitleg: "Laagste temperatuur. In lijngrafiek: laagste punt." }],
          theorie: "Voor 'verschil warmste-koudste'-vragen: alle waarden bekijken, hoogste + laagste vinden, aftrekken.",
          voorbeelden: [{ type: "rangschikken", tekst: "Gesorteerd: 18 (ma) < 19 (vr) < 21 (do) < 22 (di) < 25 (wo). Verschil top-bot = 25-18 = 7." }],
          basiskennis: [{ onderwerp: "ALLE dagen", uitleg: "Niet alleen 2 willekeurige dagen vergelijken. Eerst alle 5 doorlopen om hoogste + laagste te vinden." }],
          niveaus: { basis: "7 (25-18).", simpeler: "Warmste 25, koudste 18. Verschil 25-18 = 7.", nogSimpeler: "7" },
        },
      },
      { q: "Een **lijngrafiek** wordt vooral gebruikt om wat te tonen?", options: ["Verloop in de tijd","Categorieën vergelijken","Verdeling van geheel","Frequentie"], answer: 0, wrongHints: [null, "Dat is staafdiagram.", "Dat is cirkeldiagram.", "Dat is histogram."] },
      { q: "Welk soort grafiek voor **30% jongens / 70% meisjes**?", options: ["Cirkel/taartdiagram","Lijngrafiek","Staafdiagram","Verspreidingsdiagram"], answer: 0, wrongHints: [null, "Niet verloop.", "Soms maar niet ideaal.", "Niet."] },
      { q: "Tabel: rijen = leerlingen, kolommen = vakken. Welke cel = Anna's wiskunde-cijfer?", options: ["Rij Anna × kolom Wiskunde","Rij Wiskunde × kolom Anna","Bovenste rij","Onderste rij"], answer: 0, wrongHints: [null, "Kijk nog eens: wat staat er in de rijen, en wat in de kolommen?", "Daar staan de kopjes van de kolommen.", "Niet — zoek de rij van Anna."] },
      { q: "Waar staat in een tabel meestal het **totaal**?", options: ["Onderaan","Linksboven","Verspreid","Niet in tabel"], answer: 0, wrongHints: [null, "Niet — daar staat label.", "Niet — apart vermeld.", "Wel."] },
      { q: "Bij **categorie-data** (kleuren, vakken) is beste grafiek?", options: ["Staafdiagram","Lijngrafiek","Verspreidingsdiagram","Tijdlijn"], answer: 0, wrongHints: [null, "Niet — geen tijdvolgorde.", "Niet — dat is voor twee soorten getallen tegen elkaar.", "Een tijdlijn zet dingen op volgorde in de tijd — kleuren of vakken hebben geen volgorde."] },
      { q: "Bij **percentages die samen 100% zijn**: kies?", options: ["Cirkeldiagram","Staafdiagram","Lijngrafiek","Tabel"], answer: 0, wrongHints: [null, "Soms.", "Niet voor verdeling.", "Wel mogelijk maar niet visueel."] },
      { q: "In een **kolom** van een tabel staan typisch?", options: ["Waarden onder elkaar","Waarden naast elkaar","Plaatjes","Alleen de titel"], answer: 0, wrongHints: [null, "Dat is een rij.", "Niet inhoud.", "De titel staat boven de tabel, niet in een kolom."] },
      { q: "Bij **lijngrafiek 'temperatuur per dag'**: hoogste piek = ?", options: ["Warmste dag","Koudste dag","Begin","Eind"], answer: 0, wrongHints: [null, "Dal.", "Niet inhoud — links.", "Niet."] },
      { q: "**Kolom-totaal** in tabel = ?", options: ["Som van alle cellen in die kolom","Som van 1 rij","Gemiddelde","Modus"], answer: 0, wrongHints: [null, "Dat is rij-totaal.", "Niet som.", "Niet som."] },
      { q: "Welk **schaal-probleem** kan grafiek misleidend maken?", options: ["Y-as begint niet bij 0","Lijngrafiek","Veel data","Mooi getekend"], answer: 0, wrongHints: [null, "Niet inhoud zelf.", "Niet probleem.", "Niet relevant."] },
      { q: "Welke gegevens zet je **niet** in een cirkeldiagram?", options: ["Verloop in tijd","Verdeling","Procenten","Verhouding"], answer: 0, wrongHints: [null, "Wel — kern.", "Wel.", "Wel."] },
      { q: "Bij **'meeste/minste'-vraag in staaf**: kijk naar?", options: ["Hoogste/laagste staaf","Eerste staaf","Laatste","Willekeurig"], answer: 0, wrongHints: [null, "Niet zonder kijken.", "Niet zonder kijken.", "Niet."] },
      { q: "Een **frequentietabel** toont?", options: ["Hoe vaak elke waarde voorkomt","Tijd-verloop","Verhouding","Som"], answer: 0, wrongHints: [null, "Lijngrafiek.", "Niet.", "Niet enkel."] },
      { q: "Bij grafiek-vraag: **eerst** doen?", options: ["Titel + assen lezen","Direct antwoord raden","Telling totaal","Naam tellen"], answer: 0, wrongHints: [null, "Niet — fout.", "Soms maar niet eerst.", "Niet."] },
      { q: "Welke vraag bij **tabel** is moeilijkst?", options: ["Cellen optellen en vergelijken","Een naam opzoeken","Een datum aflezen","De titel lezen"], answer: 0, wrongHints: [null, "Te makkelijk.", "Niet.", "Niet."] },
      { q: "Een **histogram** lijkt op?", options: ["Staafdiagram","Lijn","Taart","Tijdslijn"], answer: 0, wrongHints: [null, "Een lijn = lijngrafiek (verloop tijd), iets anders.", "Taart = cirkeldiagram (verdeling), iets anders.", "Tijdslijn = historische volgorde, iets anders."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tabellenGrafieken = {
  id: "tabellen-grafieken",
  title: "Tabellen en grafieken — Doorstroomtoets groep 6-8",
  emoji: "📊",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Verbanden — data interpreteren",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F" },
  ],
  intro:
    "Tabellen en grafieken voor Doorstroomtoets groep 6-8 (voorheen Cito-eindtoets): tabel lezen, staafdiagram, lijngrafiek (verloop in tijd), cirkeldiagram (taartstukken). Met praktijksommen en eindopdracht. ~15 min.",
  triggerKeywords: [
    "tabel","grafiek","staafdiagram","lijngrafiek","cirkeldiagram",
    "taartdiagram","data","verloop","gemiddelde","aflezen","verschil",
  ],
  chapters,
  steps,
};

export default tabellenGrafieken;
