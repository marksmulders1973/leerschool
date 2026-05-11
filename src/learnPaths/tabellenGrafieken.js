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
        wrongHints: [null,"Lijngrafiek = verloop over tijd, niet vergelijking groepen.","Tabel kan, maar staafdiagram is sneller voor vergelijken.","Tekst is traag — beter een grafiek."],
      },
      {
        q: "Welke vorm voor **'aantal leerlingen per maand een jaar lang'**?",
        options: ["Lijngrafiek","Cirkeldiagram","Staafdiagram","Tabel zonder iets"],
        answer: 0,
        wrongHints: [null,"Cirkel = delen-van-geheel, niet verloop in tijd.","Staaf werkt ook, maar lijn is voor verloop in tijd nóg duidelijker.","Tabel is goed voor exacte getallen, maar zie je verloop slecht."],
      },
      {
        q: "Wat moet je **eerst** doen bij een grafiek-vraag?",
        options: ["Titel + assen lezen","Direct het antwoord zoeken","Alle data optellen","Kies een willekeurig getal"],
        answer: 0,
        wrongHints: [null,"Te haastig — eerst snappen wat je leest.","Onnodig — niet alle data is relevant.","Beter eerst lezen."],
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
      },
      {
        q: "Op welke dag werden **de meeste ijsjes** verkocht (totaal alle smaken)?",
        options: ["vrijdag","dinsdag","maandag","woensdag"],
        answer: 0,
        wrongHints: [null,"Tel rij voor dinsdag: 8+10+6 = 24. Vrijdag: 9+13+7 = 29.","Te weinig — maandag-totaal is 15.","Veel te weinig — woensdag-totaal is 12."],
      },
      {
        q: "**Hoeveel chocolade-ijsjes in de hele week**?",
        options: ["44","32","52","48"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je een dag overgeslagen?","Te veel — controleer: 7+10+5+9+13 = ?","Te veel — niet zomaar optellen, controleer per dag."],
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
        wrongHints: [null,"Tweede plek — voetbal is hoger.","Derde plek.","Vierde plek."],
      },
      {
        q: "**Hoeveel meer kinderen kozen voetbal dan judo**?",
        options: ["20","8","36","12"],
        answer: 0,
        wrongHints: [null,"Dat is alleen judo — vraag is verschil.","Dat is som van beide. Vraag is verschil.","Dat is verschil voetbal-hockey, niet voetbal-judo."],
      },
      {
        q: "**Hoeveel kinderen kozen NIET voor voetbal of zwemmen**?",
        options: ["35","57","85","43"],
        answer: 0,
        wrongHints: [null,"Te veel — dat is voetbal+zwemmen.","Het hele totaal — niet wat de vraag stelt.","Tel: tennis+hockey+judo = 15+12+8."],
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
        wrongHints: [null,"Bijna — vrijdag was 24, zaterdag 27.","Veel minder — kijk naar het hoogste punt.","Niet — kijk naar het hoogste punt."],
      },
      {
        q: "**Verschil in temperatuur tussen maandag en zaterdag**?",
        options: ["11","27","16","10"],
        answer: 0,
        wrongHints: [null,"Dat is alleen zaterdag — vraag is verschil.","Dat is alleen maandag.","Te weinig — controleer 27 − 16."],
      },
      {
        q: "**Op welke dagen daalde de temperatuur** ten opzichte van de dag ervoor?",
        options: ["Donderdag en zondag","Maandag en dinsdag","Geen enkele dag","Alle dagen"],
        answer: 0,
        wrongHints: [null,"Op die dagen STEEG juist — andersom.","Niet correct — donderdag (22→18) en zondag (27→23) daalden.","Niet alle — kijk naar lijn-richtingen."],
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
      },
      {
        q: "Cirkeldiagram met taarten: **rood 50%**, **blauw 30%**, **groen 20%**. Wat is **groen + blauw**?",
        options: ["50%","20%","80%","30%"],
        answer: 0,
        wrongHints: [null,"Te weinig — alleen groen.","Te veel — heb je rood erbij geteld?","Te weinig — alleen blauw."],
      },
      {
        q: "In een klas met **20 leerlingen** kiest **40%** wiskunde. Hoeveel?",
        options: ["8","12","4","10"],
        answer: 0,
        wrongHints: [null,"Te veel — 12 zou 60% zijn.","Te weinig — dat is 20%.","Te veel — dat is 50%."],
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
      },
      {
        q: "Staafdiagram: **kat 12, hond 18, vis 6, vogel 4** uit een klas van **40**. Welk **percentage** koos hond?",
        options: ["45%","18%","40%","30%"],
        answer: 0,
        wrongHints: [null,"Niet het aantal — bereken percentage.","Niet het totaal — bereken percentage.","Te weinig — controleer 18 ÷ 40 × 100."],
      },
      {
        q: "Lijngrafiek temperatuur over 5 dagen: 14, 16, 19, 17, 20. **Op welke 2 opeenvolgende dagen daalde 't**?",
        options: ["Dag 3 → 4","Dag 1 → 2","Dag 2 → 3","Geen"],
        answer: 0,
        wrongHints: [null,"Daar steeg 't (14→16).","Daar steeg 't (16→19).","Wel — kijk naar 19 → 17."],
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
      },
      {
        q: "Hoeveel **rondjes liepen Tom en Lisa samen**?",
        options: ["52","56","48","60"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: Tom 24 + Lisa 28.","Te weinig — heb je eentje overgeslagen?","Te veel — niet zomaar 30 + 30."],
      },
      {
        q: "**Hoeveel rondjes liep Ali minder dan Eva**?",
        options: ["14","18","32","50"],
        answer: 0,
        wrongHints: [null,"Dat is alleen Ali — vraag is verschil.","Dat is alleen Eva — vraag is verschil.","Dat is som — niet het verschil."],
      },
      {
        q: "**Wat is het gemiddelde aantal rondjes** per kind?",
        options: ["25,5","26","24","28"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: (24+32+18+28) ÷ 4.","Te weinig — controleer som.","Te veel — dat is Lisa."],
      },
      {
        q: "Een cirkeldiagram: **rood 60%, blauw 25%, geel 15%**. Welk deel is **MINDER dan een kwart**?",
        options: ["Geel","Blauw","Rood","Geen"],
        answer: 0,
        wrongHints: [null,"25% is precies een kwart — geel is 15% (minder).","60% is veel meer dan een kwart.","Wel — geel is minder dan kwart."],
      },
      {
        q: "Lijngrafiek temperatuur: ma 18, di 22, wo 25, do 21, vr 19. **Verschil tussen warmste en koudste dag**?",
        options: ["7","11","6","4"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: 25 (warmste) − 18 (koudste) = 7.","Te weinig — controleer warmste.","Te weinig — heb je niet ALLE dagen vergeleken?"],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tabellenGrafieken = {
  id: "tabellen-grafieken",
  title: "Tabellen en grafieken — Cito groep 6-8",
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
    "Tabellen en grafieken voor Cito groep 6-8: tabel lezen, staafdiagram, lijngrafiek (verloop in tijd), cirkeldiagram (taartstukken). Met praktijksommen en eindopdracht. ~15 min.",
  triggerKeywords: [
    "tabel","grafiek","staafdiagram","lijngrafiek","cirkeldiagram",
    "taartdiagram","data","verloop","gemiddelde","aflezen","verschil",
  ],
  chapters,
  steps,
};

export default tabellenGrafieken;
