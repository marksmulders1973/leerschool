// Leerpad: Tabellen en grafieken lezen — voor groep 6-8
// 7 stappen in 5 hoofdstukken. Cito-stijl data-vragen.
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
  { letter: "E", title: "Cito-praktijk + eindopdracht", emoji: "🏆", from: 5, to: 6 },
];

function staafDiagram(data, titel, eenheid) {
  const max = Math.max(...data.map((d) => d.v));
  const breedte = 320, hoogte = 180;
  const startX = 50, startY = 30, plotH = 120;
  const balkenBreedte = (breedte - startX - 30) / data.length - 8;
  const kleuren = [COLORS.bar1, COLORS.bar2, COLORS.bar3, COLORS.bar4, COLORS.point, COLORS.curve, COLORS.bar1, COLORS.bar2];

  let svg = `<svg viewBox="0 0 ${breedte} ${hoogte}">
<rect x="0" y="0" width="${breedte}" height="${hoogte}" fill="${COLORS.paper}"/>
<text x="${breedte / 2}" y="20" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">${titel}</text>
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
  const startX = 50, startY = 30, plotW = breedte - startX - 30, plotH = 120;
  const max = Math.max(...punten.map((p) => p.v));
  const stap = plotW / (punten.length - 1);
  const coords = punten.map((p, i) => ({
    x: startX + i * stap,
    y: startY + plotH - (p.v / max) * plotH,
  }));
  const path = "M " + coords.map((c) => `${c.x} ${c.y}`).join(" L ");

  let svg = `<svg viewBox="0 0 ${breedte} ${hoogte}">
<rect x="0" y="0" width="${breedte}" height="${hoogte}" fill="${COLORS.paper}"/>
<text x="${breedte / 2}" y="20" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">${titel}</text>
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
    explanation: "Op de Cito kom je vaak **tabellen** en **grafieken** tegen. Dat zijn manieren om **veel cijfers tegelijk te laten zien** zodat je ze snel kunt vergelijken.\n\n**Soorten die je moet kennen**:\n• **Tabel** — getallen in rijen en kolommen.\n• **Staafdiagram** — verticale of horizontale balken om hoeveelheden te vergelijken.\n• **Lijngrafiek** — punten verbonden met lijnen, voor verloop in de tijd.\n• **Cirkeldiagram** ('taartdiagram') — een cirkel verdeeld in stukken voor delen-van-een-geheel.\n\n**Wanneer welke?**\n• **Tabel** = exacte getallen aflezen.\n• **Staafdiagram** = vergelijken (wie meer, wie minder).\n• **Lijngrafiek** = verloop in de tijd zien (gaat 't omhoog of omlaag?).\n• **Cirkeldiagram** = verhouding van delen (50% rood, 25% blauw, etc.).\n\n**Cito-aanpak voor élke tabel/grafiek**:\n1. Lees eerst de **titel**. Waarover gaat 't?\n2. Kijk naar de **assen** of **kolomtitels**. Welke eenheden? Welke groepen?\n3. Lees pas dan de **vraag**. Wat moet je weten?\n4. Zoek het antwoord **gericht** — niet alle data lezen.\n\n**Cito-tip**: lees de titel + assen vóór de vraag. Anders raak je verdwaald in cijfers.\n\n**Veel-voorkomende valkuil**:\nDe vraag stelt: 'Hoeveel meer X dan Y?' — dan moet je **aftrekken**, niet alleen aflezen. Lees de vraag rustig.",
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
          stappen: [{ titel: "Staaf = vergelijken", tekst: "Staafdiagram heeft verschillende-hoog balken naast elkaar. Hoogte = hoeveelheid. Perfect om in één oogopslag te zien wie meer/minder is dan ander." }],
          woorden: [{ woord: "staafdiagram", uitleg: "Grafiek met balken voor categorieën (sport, kleuren, namen). Hoogte = hoeveelheid." }, { woord: "categorieën", uitleg: "Groepen die je vergelijkt (sporten, schooljaren, etc.)." }],
          theorie: "Welke grafiek wanneer: vergelijken groepen = STAAFDIAGRAM. Verloop tijd = LIJNGRAFIEK. Delen-geheel = CIRKELDIAGRAM. Exacte getallen = TABEL.",
          voorbeelden: [{ type: "verschillen", tekst: "Sport-keuze klas: voetbal=28, tennis=15, hockey=12. Staafdiagram laat direct zien voetbal wint, hockey laagst." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Lijn = tijd. Tabel = getal-exact. Tekst = beschrijven, niet visueel vergelijken." }],
          niveaus: { basis: "Staafdiagram. A.", simpeler: "Vergelijken groepen → staafdiagram (balken naast elkaar). = A.", nogSimpeler: "Staaf = A." },
        },
      },
      {
        q: "Welke vorm voor **'aantal leerlingen per maand een jaar lang'**?",
        options: ["Lijngrafiek","Cirkeldiagram","Staafdiagram","Tabel zonder iets"],
        answer: 0,
        wrongHints: [null,"Cirkel = delen-van-geheel, niet verloop in tijd.","Staaf werkt ook, maar lijn is voor verloop in tijd nóg duidelijker.","Tabel is goed voor exacte getallen, maar zie je verloop slecht."],
        uitlegPad: {
          stappen: [{ titel: "Lijn = tijd", tekst: "Verloop over tijd (12 maanden) → lijngrafiek. Lijn maakt de TREND zichtbaar: stijgt of daalt het door het jaar? Veel beter dan staafdiagram voor tijdverloop." }],
          woorden: [{ woord: "lijngrafiek", uitleg: "Grafiek met punten verbonden door lijn. Toont VERLOOP/VERANDERING in tijd." }, { woord: "trend", uitleg: "Algemene richting (stijgt/daalt/blijft gelijk)." }],
          theorie: "Regel: tijd-as → lijngrafiek. Niet-tijd categorieën (sport, kleuren) → staafdiagram. Belangrijk verschil voor examen.",
          voorbeelden: [{ type: "praktijk", tekst: "Klas-leerlingen per maand: lijn laat direct zien of klas groeit of krimpt door schooljaar." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Cirkel = verhoudingen (50% rood, 30% blauw). Staaf kan maar minder duidelijk voor tijd. Tabel = exacte getallen, geen visueel beeld." }],
          niveaus: { basis: "Lijngrafiek. A.", simpeler: "Tijd-verloop = lijngrafiek. Per maand een jaar lang = tijd = lijn. = A.", nogSimpeler: "Lijn = A." },
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
          niveaus: { basis: "Titel + assen eerst. A.", simpeler: "Stap 1 grafiek-vraag = titel + assen lezen voor context. = A.", nogSimpeler: "Eerst lezen = A." },
        },
      },
    ],
  },

  {
    title: "Tabellen lezen",
    explanation: "Een **tabel** is opgebouwd uit **rijen** (horizontaal) en **kolommen** (verticaal). Bovenin de kolomtitels, links de rij-labels.\n\n**Voorbeeld** — verkochte ijsjes per smaak per week:\n\n| smaak | ma | di | wo | do | vr |\n|-------|----|----|----|----|----|\n| vanille | 5 | 8 | 4 | 6 | 9 |\n| chocolade | 7 | 10 | 5 | 9 | 13 |\n| aardbei | 3 | 6 | 3 | 5 | 7 |\n\n**Lees-aanpak**:\n• **'Hoeveel chocolade-ijsjes op woensdag?'**\n  → Vind rij 'chocolade' + kolom 'wo' → kruispunt = **5**.\n• **'Welke smaak verkocht meest op vrijdag?'**\n  → Vind kolom 'vr' → vergelijk: 9, 13, 7 → **chocolade**.\n• **'Hoeveel chocolade in de hele week?'**\n  → Tel rij 'chocolade': 7 + 10 + 5 + 9 + 13 = **44**.\n\n**Cito-vraag-typen bij tabellen**:\n1. **Aflezen** — 1 cel zoeken.\n2. **Vergelijken** — 'meer/minder/meest/minst'.\n3. **Optellen** — totalen per rij/kolom.\n4. **Verschil** — 'hoeveel meer X dan Y?'.\n5. **Gemiddelde** — som ÷ aantal.\n\n**Cito-tip**:\nWijs met je vinger of pen — anders lees je de verkeerde rij of kolom. **Gegarandeerd dé fout** als je vlug doet.",
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
          niveaus: { basis: "6 (vanille×do). A.", simpeler: "Rij vanille + kolom do = 6 ijsjes. = A.", nogSimpeler: "6 = A." },
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
          voorbeelden: [{ type: "weekend-trend", tekst: "Logisch: vrijdag = weekend-start, mensen gaan ijs eten. Klopt vaak in echte data." }],
          basiskennis: [{ onderwerp: "Eerst optellen", uitleg: "Veel mensen kijken alleen 1 rij (bv. chocolade-top) en denken die wint. Maar vraag is over ALLE smaken samen." }],
          niveaus: { basis: "Vrijdag (29 stuks). A.", simpeler: "Som per dag. Vr=29 hoogst. = A.", nogSimpeler: "Vr = A." },
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
          basiskennis: [{ onderwerp: "Tellen", uitleg: "Tel niet 'gevoel'-matig. Pen + papier of vingers gebruiken. Cito waardeert nauwkeurigheid." }],
          niveaus: { basis: "44 (rij choco). A.", simpeler: "7+10+5+9+13 = 44. = A.", nogSimpeler: "44 = A." },
        },
      },
    ],
  },

  {
    title: "Staafdiagram lezen",
    explanation: "Een **staafdiagram** toont hoeveelheden via **verticale balken**. Hoe **hoger** de balk, hoe **meer**.\n\n**Onderdelen**:\n• **Y-as** (verticaal) — toont aantallen.\n• **X-as** (horizontaal) — toont categorieën *(dagen, maanden, namen, etc.)*.\n• **Balken** — elke balk = 1 categorie.\n• **Schaal** — let op: y-as kan stappen van 1, 5, 10, 100 hebben.\n\n**Lees-aanpak**:\n1. Welke categorie zoek je? *(zoek balk op x-as)*\n2. Hoe hoog is de balk? *(volg met je vinger naar y-as)*\n3. Lees het cijfer.\n\n**Voorbeeld vragen**:\n• **'Hoeveel kinderen kozen voetbal?'** → vind 'voetbal'-balk → lees y-as.\n• **'Welke sport is het populairst?'** → zoek de hoogste balk.\n• **'Welk verschil tussen voetbal en hockey?'** → lees beide → trek af.\n\n**Cito-valkuil — schaal**:\nKijk goed naar de **y-as-stappen**. Sommige diagrammen springen per 100 ipv per 10. Dan is een 'kleine' balk al heel veel.\n\n**Cito-truc — vergelijking**:\nVergelijk balken visueel — heeft balk A 2× zo hoog als B? Dan is A 2× zoveel.",
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
          niveaus: { basis: "Voetbal (hoogst). A.", simpeler: "Hoogste balk = voetbal (28). = A.", nogSimpeler: "Voetbal = A." },
        },
      },
      {
        q: "**Hoeveel meer kinderen kozen voetbal dan judo**?",
        options: ["20","8","36","12"],
        answer: 0,
        wrongHints: [null,"Dat is alleen judo — vraag is verschil.","Dat is som van beide. Vraag is verschil.","Dat is verschil voetbal-hockey, niet voetbal-judo."],
        uitlegPad: {
          stappen: [
            { titel: "Twee balken aflezen", tekst: "Voetbal = 28. Judo = 8. Beide afgelezen op y-as." },
            { titel: "Aftrekken", tekst: "Verschil = 28 - 8 = 20. Dat zijn 20 kinderen meer voor voetbal." },
          ],
          woorden: [{ woord: "verschil", uitleg: "Hoeveel meer/minder. Altijd aftrekken: groter - kleiner." }],
          theorie: "'Hoeveel meer/minder?'-vragen = ALTIJD AFTREKKEN. Niet optellen, niet één getal lezen.",
          voorbeelden: [{ type: "check", tekst: "28 - 8 = 20 ✓. Klopt: voetbal-balk is veel hoger dan judo-balk." }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Veel mensen lezen alleen voetbal (28) of judo (8) — vergeten vraag is VERSCHIL." }],
          niveaus: { basis: "20 (28-8). A.", simpeler: "Voetbal 28, judo 8. Verschil = 28-8 = 20. = A.", nogSimpeler: "20 = A." },
        },
      },
      {
        q: "**Hoeveel kinderen kozen NIET voor voetbal of zwemmen**?",
        options: ["35","57","85","43"],
        answer: 0,
        wrongHints: [null,"Te veel — dat is voetbal+zwemmen.","Het hele totaal — niet wat de vraag stelt.","Tel: tennis+hockey+judo = 15+12+8."],
        uitlegPad: {
          stappen: [
            { titel: "Andere balken optellen", tekst: "NIET voetbal/zwemmen = tennis + hockey + judo. 15 + 12 + 8 = 35." },
            { titel: "Of: aftrek-methode", tekst: "Totaal 85 - (voetbal 28 + zwemmen 22) = 85 - 50 = 35. Zelfde antwoord." },
          ],
          woorden: [{ woord: "NIET", uitleg: "Cito-truc: 'NIET X' = totaal min X. Of: tel alle andere op." }],
          theorie: "Twee methodes: (1) andere categorieën optellen, (2) totaal min uitgesloten. Beide werken. Check elkaar via beide methodes.",
          voorbeelden: [{ type: "check", tekst: "Methode A: 15+12+8 = 35. Methode B: 85-50 = 35. Beide kloppen ✓." }],
          basiskennis: [{ onderwerp: "Lees woord 'NIET'", uitleg: "Examen-val: 'NIET' makkelijk te missen. Onderstreep negatie-woorden bij lezen." }],
          niveaus: { basis: "35 (andere balken). A.", simpeler: "NIET voet/zwem = tennis+hockey+judo = 15+12+8 = 35. = A.", nogSimpeler: "35 = A." },
        },
      },
    ],
  },

  {
    title: "Lijngrafiek — verloop in de tijd",
    explanation: "Een **lijngrafiek** toont hoe iets **verandert in de tijd**. Punten worden verbonden met lijnen.\n\n**Onderdelen**:\n• **X-as** = tijd *(maanden, jaren, weken)*.\n• **Y-as** = waarde *(aantal, prijs, temperatuur)*.\n• **Punten** = waarde op een tijdstip.\n• **Lijn** = verbinding tussen punten *(visualiseert de verandering)*.\n\n**Wat lees je af**:\n• **Stijgt of daalt?** — kijk naar de richting van de lijn.\n• **Hoogste/laagste punt?** — zoek hoogste/laagste op de lijn.\n• **Wanneer ging het omhoog/omlaag?** — kijk waar de lijn van richting verandert.\n• **Verschil tussen 2 momenten?** — lees 2 punten af, trek af.\n\n**Cito-vraag-typen**:\n• 'Wat was de temperatuur op vrijdag?' → exact aflezen.\n• 'Op welke dag was 't het warmst?' → hoogste punt zoeken.\n• 'Hoeveel verschil tussen ma en vr?' → twee punten aflezen, aftrekken.\n• 'Op welke dagen daalde de temperatuur?' → kijk naar lijn-richtingen.\n\n**Cito-tip**:\n• Een **rechte lijn** betekent geen verandering.\n• Een **stijgende lijn** = waarde wordt groter.\n• Een **dalende lijn** = waarde wordt kleiner.\n• **Knik in lijn** = verandering van richting.\n\n**Veel-voorkomende fout**: x-as en y-as omdraaien. Eerst kijken: tijd staat altijd op x-as.",
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
          niveaus: { basis: "Zaterdag (27). A.", simpeler: "Hoogste punt = zaterdag (27°C). = A.", nogSimpeler: "Za = A." },
        },
      },
      {
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
          niveaus: { basis: "11 (27-16). A.", simpeler: "Ma 16, za 27. Verschil 27-16 = 11°C. = A.", nogSimpeler: "11 = A." },
        },
      },
      {
        q: "**Op welke dagen daalde de temperatuur** ten opzichte van de dag ervoor?",
        options: ["Donderdag en zondag","Maandag en dinsdag","Geen enkele dag","Alle dagen"],
        answer: 0,
        wrongHints: [null,"Op die dagen STEEG juist — andersom.","Niet correct — donderdag (22→18) en zondag (27→23) daalden.","Niet alle — kijk naar lijn-richtingen."],
        uitlegPad: {
          stappen: [
            { titel: "Lijn-richtingen bekijken", tekst: "Tussen elke 2 punten: ging lijn omhoog (stijging) of omlaag (daling)? Loop punt voor punt: ma→di: 16→19 (stijg). di→wo: 19→22 (stijg). wo→do: 22→18 (DAAL!). do→vr: 18→24 (stijg). vr→za: 24→27 (stijg). za→zo: 27→23 (DAAL!)." },
            { titel: "Tellen", tekst: "Daling op: donderdag + zondag. Twee dagen." },
          ],
          woorden: [{ woord: "daling", uitleg: "Waarde wordt kleiner. In lijngrafiek: lijn gaat omlaag." }, { woord: "stijging", uitleg: "Waarde wordt groter. Lijn gaat omhoog." }],
          theorie: "Voor 'wanneer daalt het?'-vragen: vergelijk elk paar opeenvolgende dagen. Punt naar links = vorige dag, naar rechts = volgende. Daal als rechter punt LAGER is.",
          voorbeelden: [{ type: "visueel", tekst: "Op donderdag: lijn knikt naar BENEDEN (22→18). Op zondag: idem (27→23). Beide dalingen visueel zichtbaar." }],
          basiskennis: [{ onderwerp: "Lijn-richting", uitleg: "Stijging = lijn omhoog. Daling = lijn omlaag. Vlak = geen verandering." }],
          niveaus: { basis: "Do + zo (lijn omlaag). A.", simpeler: "Daling = lijn omlaag. Donderdag (22→18) + zondag (27→23). = A.", nogSimpeler: "Do+zo = A." },
        },
      },
    ],
  },

  {
    title: "Cirkeldiagram — taartstuk-grootte",
    explanation: "Een **cirkeldiagram** (ook wel 'taartdiagram') is een cirkel verdeeld in **taartstukken**. Elk stuk = een deel van het geheel.\n\n**Belangrijk**:\n• De hele cirkel = **100%** of **alles**.\n• Hoe **groter** een taartstuk, hoe **groter** dat deel.\n\n**Voorbeeld**: een klas van 30 leerlingen, hun favoriete sport.\n• Voetbal — 50% (de helft van de cirkel)\n• Hockey — 25% (een kwart)\n• Tennis — 15%\n• Anders — 10%\n\nIn aantallen:\n• Voetbal: 30 × 50% = **15** leerlingen.\n• Hockey: 30 × 25% = **7-8** leerlingen *(in praktijk afgerond)*.\n• Tennis: 30 × 15% = ~4-5.\n• Anders: 30 × 10% = 3.\n\n**Cito-vraag-typen**:\n• 'Welk **percentage** kiest X?' — lees taart-stuk in %.\n• 'Hoeveel **leerlingen** kiezen X?' — % × totaal.\n• 'Welk grootste/kleinste deel?' — vergelijk taart-stukken.\n\n**Cito-truc — sleutel-percentages herkennen**:\n• **Halve cirkel** = 50%.\n• **Kwart cirkel** = 25%.\n• **Drie-kwart cirkel** = 75%.\n• **Tien-procent-stukje** = klein puntje.\n\n**Belangrijke check**:\nAlle percentages moeten samen **100%** zijn. Anders klopt het diagram niet.",
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
          niveaus: { basis: "10 (40÷4). A.", simpeler: "25% van 40 = 1/4 × 40 = 10 leerlingen. = A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "Cirkeldiagram met taarten: **rood 50%**, **blauw 30%**, **groen 20%**. Wat is **groen + blauw**?",
        options: ["50%","20%","80%","30%"],
        answer: 0,
        wrongHints: [null,"Te weinig — alleen groen.","Te veel — heb je rood erbij geteld?","Te weinig — alleen blauw."],
        uitlegPad: {
          stappen: [{ titel: "Twee percentages optellen", tekst: "Groen + Blauw = 20% + 30% = 50%. Of: niet-rood = 100% - 50% = 50%. Beide methoden geven 50%." }],
          woorden: [{ woord: "som van %", uitleg: "Percentages mogen direct opgeteld worden als ze van zelfde geheel zijn." }],
          theorie: "Cirkel = 100%. Alle taart-stukken samen = 100% (check altijd). Twee stukken samen = direct hun percentages optellen.",
          voorbeelden: [{ type: "check", tekst: "Rood 50% + Blauw 30% + Groen 20% = 100% ✓. Groen + Blauw = 50%, plus rood 50% = 100% ✓." }],
          basiskennis: [{ onderwerp: "Lees vraag", uitleg: "Vraag is alleen groen + blauw (zonder rood). Niet rood erbij rekenen." }],
          niveaus: { basis: "50% (20+30). A.", simpeler: "Groen 20% + Blauw 30% = 50%. = A.", nogSimpeler: "50% = A." },
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
          niveaus: { basis: "8 (40% × 20). A.", simpeler: "10% van 20 = 2. 40% = 4 × 2 = 8. = A.", nogSimpeler: "8 = A." },
        },
      },
    ],
  },

  {
    title: "Praktijk — Cito data-vragen",
    explanation: "Cito-vragen combineren vaak **meerdere stappen**: aflezen + bewerking *(optellen, aftrekken, vermenigvuldigen of percentage)*.\n\n**Voorbeeld 1**:\n*'Tabel: aantal koeken-verkopen per dag. Ma 12, di 18, wo 9, do 15, vr 22. Wat is het gemiddelde per dag?'*\n• Som = 12+18+9+15+22 = 76.\n• Aantal dagen = 5.\n• Gemiddelde = 76 ÷ 5 = **15,2**.\n\n**Voorbeeld 2 — staafdiagram + percentage**:\n*'Voetbal: 28, judo: 8 van 85 leerlingen. Welk percentage doet voetbal?'*\n• 28 ÷ 85 ≈ 0,33 → **33%**.\n\n**Voorbeeld 3 — lijngrafiek + verschil**:\n*'Temperatuur dinsdag 19 °C, vrijdag 24 °C. Hoeveel graden is 't gestegen?'*\n• 24 − 19 = **5 °C**.\n\n**Voorbeeld 4 — cirkeldiagram + getal**:\n*'In een klas van 30: 40% kiest hockey, 25% kiest voetbal. Hoeveel kiezen iets anders?'*\n• Hockey + voetbal = 40+25 = 65%.\n• Anders = 100−65 = 35%.\n• 35% van 30 = **10,5** *(afgerond ~11)*.\n\n**Cito-stappenplan**:\n1. Welke vorm? *(tabel/staaf/lijn/cirkel)*\n2. Wat lees ik af? *(getallen of percentage)*\n3. Welke bewerking moet ik doen? *(+ − × ÷ of percentage)*\n4. Schrijf op en reken.",
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
          voorbeelden: [{ type: "check", tekst: "26 ligt tussen laagste (18) en hoogste (35). Past in midden van de range. Logisch." }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Veel mensen kiezen 1 dag (30) als 'lijkt gemiddeld'. Moet je echt uitrekenen." }],
          niveaus: { basis: "26 (130÷5). A.", simpeler: "Som 130 ÷ 5 dagen = 26 gemiddeld. = A.", nogSimpeler: "26 = A." },
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
          niveaus: { basis: "45% (18÷40×100). A.", simpeler: "Hond: 18 ÷ 40 = 0,45 = 45%. = A.", nogSimpeler: "45% = A." },
        },
      },
      {
        q: "Lijngrafiek temperatuur over 5 dagen: 14, 16, 19, 17, 20. **Op welke 2 opeenvolgende dagen daalde 't**?",
        options: ["Dag 3 → 4","Dag 1 → 2","Dag 2 → 3","Geen"],
        answer: 0,
        wrongHints: [null,"Daar steeg 't (14→16).","Daar steeg 't (16→19).","Wel — kijk naar 19 → 17."],
        uitlegPad: {
          stappen: [{ titel: "Vergelijk paren", tekst: "Dag 1→2: 14→16 STIJG. Dag 2→3: 16→19 STIJG. Dag 3→4: 19→17 DAAL! Dag 4→5: 17→20 STIJG. Alleen dag 3→4 daalt." }],
          woorden: [{ woord: "opeenvolgend", uitleg: "Twee dagen direct achter elkaar (niet dag 1 en 5, maar dag 1 en 2)." }, { woord: "daling", uitleg: "Tweede getal kleiner dan eerste." }],
          theorie: "Voor 'wanneer daalt'-vragen: vergelijk paren opeenvolgende dagen. Als tweede < eerste → daling. Anders stijging.",
          voorbeelden: [{ type: "check", tekst: "19 → 17: daling van 2 graden. Lijn knikt visueel omlaag tussen dag 3 en 4." }],
          basiskennis: [{ onderwerp: "Visueel", uitleg: "Bij lijngrafiek: lijn naar BENEDEN = daling. Lijn naar BOVEN = stijging." }],
          niveaus: { basis: "Dag 3→4 (19→17). A.", simpeler: "Enige daling: dag 3 (19°) → dag 4 (17°). = A.", nogSimpeler: "3→4 = A." },
        },
      },
    ],
  },

  {
    title: "Cito-eindopdracht — data lezen mix",
    explanation: "Mix-toets met tabellen en grafieken in Cito-stijl. Verschillende vorm en bewerkingen door elkaar.\n\n**Hint**: lees telkens eerst titel + assen, dan vraag, dan reken.\n\nVeel succes!",
    svg: staafDiagram([
      { l: "Tom", v: 24 },
      { l: "Eva", v: 32 },
      { l: "Ali", v: 18 },
      { l: "Lisa", v: 28 },
    ], "Sponsorloop — gelopen rondjes", "rondjes"),
    checks: [
      {
        q: "Welk kind liep **het meest**?",
        options: ["Eva","Tom","Ali","Lisa"],
        answer: 0,
        wrongHints: [null,"Tweede — Eva is hoger.","Minst — kijk naar de hoogste.","Tweede — Eva is hoger."],
        uitlegPad: {
          stappen: [{ titel: "Hoogste balk", tekst: "Tom=24, Eva=32, Ali=18, Lisa=28. Eva (32) heeft hoogste balk. Top-5: Eva 32 > Lisa 28 > Tom 24 > Ali 18." }],
          woorden: [{ woord: "meest", uitleg: "Grootste hoeveelheid. In staafdiagram: hoogste balk." }],
          theorie: "Standaard staafdiagram-vraag: hoogste balk = meest. Visueel direct te zien.",
          voorbeelden: [{ type: "ranglijst", tekst: "Eva 32 (1e). Lisa 28 (2e). Tom 24 (3e). Ali 18 (4e/laatst)." }],
          basiskennis: [{ onderwerp: "Visueel", uitleg: "Bij 4 balken: zoek visueel de hoogste. Hoeft niet altijd getallen exact lezen." }],
          niveaus: { basis: "Eva (32). A.", simpeler: "Hoogste balk = Eva (32 rondjes). = A.", nogSimpeler: "Eva = A." },
        },
      },
      {
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
          niveaus: { basis: "52 (24+28). A.", simpeler: "Tom 24 + Lisa 28 = 52 rondjes samen. = A.", nogSimpeler: "52 = A." },
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
          niveaus: { basis: "14 (32-18). A.", simpeler: "Eva 32, Ali 18. Verschil = 32-18 = 14. = A.", nogSimpeler: "14 = A." },
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
          basiskennis: [{ onderwerp: "Comma", uitleg: "Gemiddelde mag een komma-getal zijn (25,5). Niet afronden tenzij gevraagd." }],
          niveaus: { basis: "25,5 (102÷4). A.", simpeler: "Som 102 ÷ 4 kinderen = 25,5 gemiddeld. = A.", nogSimpeler: "25,5 = A." },
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
          niveaus: { basis: "Geel (15%). A.", simpeler: "Kwart = 25%. Geel 15% < 25%. Enige stuk MINDER dan kwart. = A.", nogSimpeler: "Geel = A." },
        },
      },
      {
        q: "Lijngrafiek temperatuur: ma 18, di 22, wo 25, do 21, vr 19. **Verschil tussen warmste en koudste dag**?",
        options: ["7","11","6","4"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: 25 (warmste) − 18 (koudste) = 7.","Te weinig — controleer warmste.","Te weinig — heb je niet ALLE dagen vergeleken?"],
        uitlegPad: {
          stappen: [
            { titel: "Warmste + koudste vinden", tekst: "Alle dagen: 18, 22, 25, 21, 19. Hoogste = 25 (woensdag). Laagste = 18 (maandag)." },
            { titel: "Verschil", tekst: "25 - 18 = 7 graden." },
          ],
          woorden: [{ woord: "warmste", uitleg: "Hoogste temperatuur. In lijngrafiek: hoogste punt." }, { woord: "koudste", uitleg: "Laagste temperatuur. In lijngrafiek: laagste punt." }],
          theorie: "Voor 'verschil warmste-koudste'-vragen: alle waarden bekijken, hoogste + laagste vinden, aftrekken.",
          voorbeelden: [{ type: "rangschikken", tekst: "Gesorteerd: 18 (ma) < 19 (vr) < 21 (do) < 22 (di) < 25 (wo). Verschil top-bot = 25-18 = 7." }],
          basiskennis: [{ onderwerp: "ALLE dagen", uitleg: "Niet alleen 2 willekeurige dagen vergelijken. Eerst alle 5 doorlopen om hoogste + laagste te vinden." }],
          niveaus: { basis: "7 (25-18). A.", simpeler: "Warmste 25, koudste 18. Verschil 25-18 = 7. = A.", nogSimpeler: "7 = A." },
        },
      },
      { q: "Een **lijngrafiek** wordt vooral gebruikt om wat te tonen?", options: ["Verloop in de tijd","Categorieën vergelijken","Verdeling van geheel","Frequentie"], answer: 0, wrongHints: [null, "Dat is staafdiagram.", "Dat is cirkeldiagram.", "Dat is histogram."] },
      { q: "Welk soort grafiek voor **30% jongens / 70% meisjes**?", options: ["Cirkel/taartdiagram","Lijngrafiek","Staafdiagram","Verspreidingsdiagram"], answer: 0, wrongHints: [null, "Niet verloop.", "Soms maar niet ideaal.", "Niet."] },
      { q: "Tabel: rijen = leerlingen, kolommen = vakken. Welke cel = Anna's wiskunde-cijfer?", options: ["Rij Anna × kolom Wiskunde","Anna × klas","Top-rij","Onderste rij"], answer: 0, wrongHints: [null, "Niet.", "Header.", "Niet."] },
      { q: "Welke tabel-cel staat **gemiddeld**?", options: ["Vaak onderaan (kolom-totaal)","Linksboven","Verspreid","Niet in tabel"], answer: 0, wrongHints: [null, "Niet — daar staat label.", "Niet — apart vermeld.", "Wel."] },
      { q: "Bij **categorie-data** (kleuren, vakken) is beste grafiek?", options: ["Staafdiagram","Lijngrafiek","Verspreidingsdiagram","Heatmap"], answer: 0, wrongHints: [null, "Niet — geen tijdvolgorde.", "Niet inhoudelijk.", "Niet voor kinderen."] },
      { q: "Bij **percentages die samen 100% zijn**: kies?", options: ["Cirkeldiagram","Staafdiagram","Lijngrafiek","Tabel"], answer: 0, wrongHints: [null, "Soms.", "Niet voor verdeling.", "Wel mogelijk maar niet visueel."] },
      { q: "In een **kolom** van een tabel staan typisch?", options: ["Verticale waarden (onder elkaar)","Horizontale data","Plaatjes","Tekst"], answer: 0, wrongHints: [null, "Dat is rij.", "Niet inhoud.", "Soms."] },
      { q: "Bij **lijngrafiek 'temperatuur per dag'**: hoogste piek = ?", options: ["Warmste dag","Koudste dag","Begin","Eind"], answer: 0, wrongHints: [null, "Dal.", "Niet inhoud — links.", "Niet."] },
      { q: "**Kolom-totaal** in tabel = ?", options: ["Som van alle cellen in die kolom","Som van 1 rij","Gemiddelde","Modus"], answer: 0, wrongHints: [null, "Dat is rij-totaal.", "Niet som.", "Niet som."] },
      { q: "Welk **schaal-probleem** kan grafiek misleidend maken?", options: ["Y-as begint niet bij 0","Lijngrafiek","Veel data","Mooi getekend"], answer: 0, wrongHints: [null, "Niet inhoud zelf.", "Niet probleem.", "Niet relevant."] },
      { q: "Welke gegevens zet je **niet** in een cirkeldiagram?", options: ["Verloop in tijd","Verdeling","Procenten","Verhouding"], answer: 0, wrongHints: [null, "Wel — kern.", "Wel.", "Wel."] },
      { q: "Bij **'meeste/minste'-vraag in staaf**: kijk naar?", options: ["Hoogste/laagste staaf","Eerste staaf","Laatste","Random"], answer: 0, wrongHints: [null, "Niet zonder kijken.", "Niet zonder kijken.", "Niet."] },
      { q: "Een **frequentietabel** toont?", options: ["Hoe vaak elke waarde voorkomt","Tijd-verloop","Verhouding","Som"], answer: 0, wrongHints: [null, "Lijngrafiek.", "Niet.", "Niet enkel."] },
      { q: "Bij grafiek-vraag: **eerst** doen?", options: ["Titel + assen lezen","Direct antwoord raden","Telling totaal","Naam tellen"], answer: 0, wrongHints: [null, "Niet — fout.", "Soms maar niet eerst.", "Niet."] },
      { q: "Welke vraag bij **tabel** is moeilijkst?", options: ["Optellen meerdere cellen + interpreteren","Naam zoeken","Datum lezen","Titel lezen"], answer: 0, wrongHints: [null, "Te makkelijk.", "Niet.", "Niet."] },
      { q: "Een **histogram** lijkt op?", options: ["Staafdiagram (voor frequentie)","Lijn","Taart","Tijdslijn"], answer: 0, wrongHints: [null, "Een lijn = lijngrafiek (verloop tijd), iets anders.", "Taart = cirkeldiagram (verdeling), iets anders.", "Tijdslijn = historische volgorde, iets anders."] },
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
