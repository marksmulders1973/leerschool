// Leerpad: Grafieken lezen — staaf, lijn, cirkel — groep 6-8.
// Cito-onderdeel verwerken van informatie. Referentieniveau 1F.
// 6 stappen met uitlegPad en SVG-visualisaties.

const COLORS = {
  curve: "#00c853",
  curve2: "#69f0ae",
  bar: "#69f0ae",
  bar2: "#80cbc4",
  bar3: "#ffd54f",
  bar4: "#ff8a65",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  grid: "rgba(255,255,255,0.10)",
};

const stepEmojis = ["📊", "📏", "📈", "🥧", "🔁", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een grafiek?", emoji: "📊", from: 0, to: 0 },
  { letter: "B", title: "Staafdiagram", emoji: "📏", from: 1, to: 1 },
  { letter: "C", title: "Lijngrafiek", emoji: "📈", from: 2, to: 2 },
  { letter: "D", title: "Cirkeldiagram", emoji: "🥧", from: 3, to: 3 },
  { letter: "E", title: "Tabel ↔ grafiek", emoji: "🔁", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function staafSvg(data, title) {
  const w = 300, h = 200, padL = 40, padB = 30, padT = 30;
  const max = Math.max(...data.map((d) => d.v));
  const barW = (w - padL - 20) / data.length - 8;
  let bars = "";
  data.forEach((d, i) => {
    const bh = ((h - padT - padB) * d.v) / max;
    const x = padL + i * (barW + 8) + 4;
    const y = h - padB - bh;
    bars += `<rect x="${x}" y="${y}" width="${barW}" height="${bh}" fill="${d.c || COLORS.bar}" stroke="${COLORS.curve}" stroke-width="0.5"/>`;
    bars += `<text x="${x + barW / 2}" y="${y - 4}" text-anchor="middle" fill="${COLORS.highlight || COLORS.curve2}" font-size="11" font-family="Arial" font-weight="bold">${d.v}</text>`;
    bars += `<text x="${x + barW / 2}" y="${h - padB + 14}" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">${d.l}</text>`;
  });
  // y-axis labels
  let yAx = "";
  for (let i = 0; i <= 5; i++) {
    const y = h - padB - ((h - padT - padB) * i) / 5;
    const val = Math.round((max * i) / 5);
    yAx += `<line x1="${padL}" y1="${y}" x2="${w - 10}" y2="${y}" stroke="${COLORS.grid}" stroke-width="0.5"/>`;
    yAx += `<text x="${padL - 6}" y="${y + 4}" text-anchor="end" fill="${COLORS.muted}" font-size="10" font-family="Arial">${val}</text>`;
  }
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="18" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">${title}</text>
${yAx}
${bars}
<line x1="${padL}" y1="${h - padB}" x2="${w - 10}" y2="${h - padB}" stroke="${COLORS.curve}" stroke-width="1.2"/>
<line x1="${padL}" y1="${padT}" x2="${padL}" y2="${h - padB}" stroke="${COLORS.curve}" stroke-width="1.2"/>
</svg>`;
}

function lijnSvg(points, title) {
  const w = 300, h = 200, padL = 40, padB = 30, padT = 30;
  const maxY = Math.max(...points.map((p) => p.y));
  const pts = points
    .map((p, i) => {
      const x = padL + (i * (w - padL - 20)) / (points.length - 1);
      const y = h - padB - ((h - padT - padB) * p.y) / maxY;
      return `${x},${y}`;
    })
    .join(" ");
  let dots = "";
  let labels = "";
  points.forEach((p, i) => {
    const x = padL + (i * (w - padL - 20)) / (points.length - 1);
    const y = h - padB - ((h - padT - padB) * p.y) / maxY;
    dots += `<circle cx="${x}" cy="${y}" r="3.5" fill="${COLORS.bar3}" stroke="${COLORS.curve}" stroke-width="1"/>`;
    dots += `<text x="${x}" y="${y - 8}" text-anchor="middle" fill="${COLORS.bar3}" font-size="11" font-family="Arial" font-weight="bold">${p.y}</text>`;
    labels += `<text x="${x}" y="${h - padB + 14}" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">${p.x}</text>`;
  });
  let yAx = "";
  for (let i = 0; i <= 5; i++) {
    const y = h - padB - ((h - padT - padB) * i) / 5;
    const val = Math.round((maxY * i) / 5);
    yAx += `<line x1="${padL}" y1="${y}" x2="${w - 10}" y2="${y}" stroke="${COLORS.grid}" stroke-width="0.5"/>`;
    yAx += `<text x="${padL - 6}" y="${y + 4}" text-anchor="end" fill="${COLORS.muted}" font-size="10" font-family="Arial">${val}</text>`;
  }
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="18" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">${title}</text>
${yAx}
<polyline points="${pts}" fill="none" stroke="${COLORS.curve2}" stroke-width="2"/>
${dots}
${labels}
<line x1="${padL}" y1="${h - padB}" x2="${w - 10}" y2="${h - padB}" stroke="${COLORS.curve}" stroke-width="1.2"/>
<line x1="${padL}" y1="${padT}" x2="${padL}" y2="${h - padB}" stroke="${COLORS.curve}" stroke-width="1.2"/>
</svg>`;
}

function cirkelSvg(data, title) {
  const cx = 150, cy = 120, r = 70;
  let cur = -Math.PI / 2;
  const total = data.reduce((s, d) => s + d.v, 0);
  let slices = "";
  let legend = "";
  data.forEach((d, i) => {
    const angle = (d.v / total) * Math.PI * 2;
    const x1 = cx + r * Math.cos(cur);
    const y1 = cy + r * Math.sin(cur);
    const x2 = cx + r * Math.cos(cur + angle);
    const y2 = cy + r * Math.sin(cur + angle);
    const large = angle > Math.PI ? 1 : 0;
    slices += `<path d="M${cx} ${cy} L${x1} ${y1} A${r} ${r} 0 ${large} 1 ${x2} ${y2} Z" fill="${d.c}" stroke="${COLORS.paper}" stroke-width="1.5"/>`;
    // label binnen taart
    const lx = cx + (r * 0.6) * Math.cos(cur + angle / 2);
    const ly = cy + (r * 0.6) * Math.sin(cur + angle / 2);
    const pct = Math.round((d.v / total) * 100);
    if (pct >= 5) {
      slices += `<text x="${lx}" y="${ly}" text-anchor="middle" fill="#0e1014" font-size="11" font-family="Arial" font-weight="bold">${pct}%</text>`;
    }
    legend += `<rect x="225" y="${50 + i * 22}" width="14" height="14" fill="${d.c}"/>`;
    legend += `<text x="245" y="${62 + i * 22}" fill="${COLORS.text}" font-size="11" font-family="Arial">${d.l}</text>`;
    cur += angle;
  });
  return `<svg viewBox="0 0 320 240">
<rect x="0" y="0" width="320" height="240" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">${title}</text>
${slices}
${legend}
</svg>`;
}

const steps = [
  // STAP 1: Wat is een grafiek?
  {
    title: "Wat is een grafiek?",
    explanation:
      "Een **grafiek** is een **plaatje van getallen**. Het laat snel zien hoeveel iets is, of hoe iets verandert.\n\n**3 soorten die je vaak ziet bij Cito**:\n• **Staafdiagram** — balkjes die laten zien hoe veel ergens van is.\n• **Lijngrafiek** — een lijn die laat zien hoe iets verandert (bv. door de tijd).\n• **Cirkeldiagram** *(ook wel taartdiagram)* — taart-stukjes die laten zien welke groep hoe groot is.\n\n**Wat je altijd moet lezen voor je iets afleest**:\n1. **Titel** — waar gaat de grafiek over?\n2. **Eenheid** — gaat het over aantallen, procenten, euro's, graden?\n3. **Assen** — wat staat onderaan (x-as), wat staat aan de zijkant (y-as)?\n4. **Legenda** — als er meerdere kleuren zijn, wat betekent welke kleur?\n\n**Voorbeeld**: een grafiek heet *'Aantal kinderen per klas'*. De getallen op de zijkant gaan van 0 tot 30. Onderaan staan klas 1, 2, 3, 4. Dan weet je: het gaat om hoeveel kinderen per klas.",
    svg: staafSvg(
      [
        { l: "klas 1", v: 25, c: COLORS.bar },
        { l: "klas 2", v: 28, c: COLORS.bar2 },
        { l: "klas 3", v: 22, c: COLORS.bar3 },
        { l: "klas 4", v: 27, c: COLORS.bar4 },
      ],
      "Aantal kinderen per klas",
    ),
    checks: [
      {
        q: "Wat moet je **altijd eerst lezen** bij een grafiek?",
        options: ["Titel + assen + eenheid", "Alleen het hoogste getal", "De kleuren", "Het laagste punt"],
        answer: 0,
        wrongHints: [null, "Klopt — pas dan begrijp je waar de grafiek over gaat.", "Te beperkt — je moet weten waar de grafiek over gaat.", "Kleuren zijn handig, maar context is belangrijker.", "Een punt geeft geen overzicht."],
        uitlegPad: {
          stappen: [
            { titel: "Drie dingen vóór je gaat rekenen", tekst: "Bij elke Cito-grafiek check je eerst **3 dingen** voordat je een getal aankijkt:\n1. **Titel** — waar gaat de grafiek over?\n2. **Assen** — wat staat op x-as (onder) en y-as (zijkant)?\n3. **Eenheid** — meet de grafiek euro's, kinderen, °C, kilo's?" },
            { titel: "Waarom belangrijk?", tekst: "Zonder context zie je alleen getallen. Met context begrijp je wat ze betekenen. Een staaf van '40' kan betekenen: 40 mm regen, 40 kinderen, 40 euro of 40 °C — totaal verschillende dingen!" },
            { titel: "Cito-instinker", tekst: "Vergeet de **eenheid niet** in je antwoord. Op Cito staat soms in 4 opties: '40', '40 mm', '40 cm', '40 kinderen'. Alleen het juiste getal ÉN de juiste eenheid is goed." },
          ],
          woorden: [
            { woord: "x-as", uitleg: "Horizontale as, onderaan de grafiek." },
            { woord: "y-as", uitleg: "Verticale as, zijkant van de grafiek." },
            { woord: "eenheid", uitleg: "Wat de getallen meten (mm, °C, kg, €, etc.)." },
          ],
          theorie: "Cito-volgorde grafiek lezen:\n1. Lees TITEL — waar gaat dit over?\n2. Lees ASSEN — wat is X (vaak tijd of categorie), wat is Y (waarde)?\n3. Check EENHEID — wat meet je?\n4. PAS DAN getal aflezen.",
          voorbeelden: [
            { type: "stap", tekst: "Titel 'Regen per maand'. X-as: jan-dec. Y-as: mm. Eenheid: mm. Nu weet je: deze grafiek toont mm regen per maand." },
            { type: "stap", tekst: "Zelfde getal '60' op een 'regen-mm'-grafiek = 60 mm regen. Op een 'kinderen'-grafiek = 60 kinderen. Eenheid maakt alles." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "T-A-E: Titel → Assen → Eenheid. Pas daarna getal aflezen." }],
          niveaus: {
            basis: "Titel + assen + eenheid. = A.",
            simpeler: "Eerst lezen waar grafiek over gaat (titel) + wat de assen meten + welke eenheid. Pas daarna naar getallen kijken. = A.",
            nogSimpeler: "Titel + assen + eenheid = A.",
          },
        },
      },
      {
        q: "Welke grafiek toont **hoe iets verandert door de tijd**?",
        options: ["Lijngrafiek", "Cirkeldiagram", "Staafdiagram", "Tabel"],
        answer: 0,
        wrongHints: [null, "Klopt — lijn = ontwikkeling over tijd.", "Cirkel toont verdeling op één moment, geen verandering.", "Staaf vergelijkt groepen, niet tijdsverloop. Lijn is beter voor 'door de tijd'.", "Tabel is getallen, geen plaatje van verandering."],
        uitlegPad: {
          stappen: [
            { titel: "Elk grafiektype heeft een doel", tekst: "Vier types grafiek, elk voor een andere vraag:\n• **Lijngrafiek** = verandering over **tijd** (temperatuur door de dag)\n• **Staafdiagram** = **vergelijken** van groepen (regen per maand)\n• **Cirkeldiagram** = **verdeling** van een geheel (sport-keuze in klas)\n• **Tabel** = exacte **getallen** netjes geordend" },
            { titel: "Lijngrafiek = tijd-verloop", tekst: "Een lijn loopt **van links naar rechts** = van vroeg naar laat. De **hoogte** is de waarde op dat moment. Stijgt de lijn? Dan wordt de waarde groter. Daalt? Wordt kleiner." },
            { titel: "Cito-truc grafiek herkennen", tekst: "Lees de vraag:\n• 'door de tijd' / 'op verschillende momenten' / 'wanneer' → **lijngrafiek**\n• 'vergelijk groep X met Y' → **staaf**\n• 'welk deel' / 'percentage van' → **cirkel/taart**\n• 'exact aantal van...' → **tabel**" },
          ],
          woorden: [
            { woord: "lijngrafiek", uitleg: "Toont verandering door de tijd." },
            { woord: "x-as", uitleg: "Onder, vaak tijd (uren/dagen/jaren)." },
            { woord: "y-as", uitleg: "Zijkant, waarde op dat moment." },
          ],
          theorie: "Cito-grafiek-keuze:\n• Tijd → LIJN\n• Vergelijken groepen → STAAF\n• Verdeling van geheel → CIRKEL\n• Exacte getallen → TABEL\nEerst onderscheid type, daarna aflezen.",
          voorbeelden: [
            { type: "stap", tekst: "Temperatuur door de dag = lijngrafiek (tijd op x-as)." },
            { type: "stap", tekst: "Babygewicht na maanden = lijngrafiek (maanden op x-as)." },
            { type: "stap", tekst: "Bevolking NL 1900-2020 = lijngrafiek (jaren op x-as)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lijngrafiek = de enige die tijd-verloop laat zien. Andere types tonen momentopname." }],
          niveaus: {
            basis: "Lijngrafiek = verandering door de tijd. = A.",
            simpeler: "Een lijn loopt van vroeg naar laat. Zo zie je hoe iets stijgt of daalt door tijd. = A.",
            nogSimpeler: "Lijngrafiek = A.",
          },
        },
      },
      {
        q: "Welke grafiek laat goed zien **welk deel van het totaal** iets is?",
        options: ["Cirkeldiagram", "Lijngrafiek", "Staafdiagram", "Tijdlijn"],
        answer: 0,
        wrongHints: [null, "Klopt — cirkel = de hele 'taart' van 100%.", "Lijn toont verandering, geen verdeling.", "Staaf kan ook, maar cirkel toont **deel-van-geheel** het duidelijkst.", "Tijdlijn is voor jaartallen, geen verdeling."],
        uitlegPad: {
          stappen: [
            { titel: "Cirkeldiagram = de hele taart", tekst: "Een **cirkeldiagram** (ook **taartdiagram** of **pie chart**) is een cirkel verdeeld in stukken. De hele cirkel = **100%** = het geheel. Elk stuk is een **percentage** daarvan." },
            { titel: "Waarom cirkel beter voor 'deel van totaal'?", tekst: "Met cirkel zie je **meteen visueel**: groot stuk = veel, klein stuk = weinig. Bij een staafdiagram zie je wel hoogte, maar moet je optellen om te weten of het 'veel van het geheel' is.\n\nVoorbeeld: 'welke sport is populairst in klas?' → cirkel toont direct het grootste stuk. Staaf moet je vergelijken." },
            { titel: "Wanneer GEEN cirkel?", tekst: "Cirkel werkt NIET goed voor:\n• **Verandering over tijd** → gebruik lijn\n• **Veel categorieën (10+)** → wordt te druk → gebruik staaf\n• **Exact getal lezen** → tabel beter\nCirkel is sweet spot voor 3-7 categorieën die samen 100% vormen." },
          ],
          woorden: [
            { woord: "cirkeldiagram", uitleg: "Cirkel verdeeld in % van een geheel." },
            { woord: "taartdiagram", uitleg: "Synoniem voor cirkeldiagram." },
            { woord: "100%", uitleg: "Het geheel — alle stukken samen." },
          ],
          theorie: "Cito-grafiek-keuze:\n• Tijd-verloop → LIJN\n• Vergelijken groepen → STAAF\n• Deel van geheel → CIRKEL\n• Exacte getallen → TABEL\nKern: bij vragen over 'percentage' of 'deel-van' → altijd cirkel.",
          voorbeelden: [
            { type: "stap", tekst: "Sport-keuze in klas (voetbal 50%, hockey 25%, zwemmen 25%) = cirkel." },
            { type: "stap", tekst: "Verkiezingsuitslag per partij (PVV 24%, GroenLinks-PvdA 16%, etc.) = cirkel." },
            { type: "stap", tekst: "Budget gezin (eten 30%, wonen 40%, vrije tijd 10%, sparen 20%) = cirkel." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag 'welk deel?' of 'welk percentage?' → cirkeldiagram is altijd de beste keuze." }],
          niveaus: {
            basis: "Cirkeldiagram = deel van totaal. = A.",
            simpeler: "Cirkel is een hele taart (= 100%) verdeeld in stukken. Elk stuk = % van het geheel. = A.",
            nogSimpeler: "Cirkeldiagram = A.",
          },
        },
      },
    ],
  },

  // STAP 2: Staafdiagram lezen
  {
    title: "Staafdiagram lezen",
    explanation:
      "Een **staafdiagram** heeft balken naast elkaar. Elke balk is een groep. De hoogte van de balk vertelt het aantal of de hoeveelheid.\n\n**Stappenplan**:\n1. Zoek de balk waar de vraag over gaat *(bv. 'maandag')*.\n2. Kijk hoe hoog die balk is.\n3. Lees het getal aan de y-as (de zijkant) af.\n4. Schrijf het op + eenheid *(bv. '12 kinderen', '€20', '30 °C')*.\n\n**Voorbeeld**: een staafdiagram van regen-millimeters per maand. De balk voor **maart** komt tot bij **40 mm**.\n→ Antwoord: in maart viel **40 mm regen**.\n\n**Verschil aflezen — 2 balken**:\n*'Hoeveel meer kinderen op donderdag dan op maandag?'*\n• Donderdag: 30 kinderen.\n• Maandag: 22 kinderen.\n• Verschil: 30 − 22 = **8 kinderen**.\n\n**Cito-truc**:\n• Bij vragen 'hoeveel meer' / 'hoeveel minder' → **aftrekken**.\n• Bij vragen 'in totaal' → **optellen**.\n• Bij 'hoeveel keer zo veel' → **delen**.",
    svg: staafSvg(
      [
        { l: "ma", v: 22, c: COLORS.bar },
        { l: "di", v: 18, c: COLORS.bar2 },
        { l: "wo", v: 26, c: COLORS.bar3 },
        { l: "do", v: 30, c: COLORS.bar4 },
        { l: "vr", v: 24, c: COLORS.bar },
      ],
      "Aantal kinderen op overblijf",
    ),
    checks: [
      {
        q: "Staafdiagram regen-mm: jan 60, feb 50, mrt 40, apr 70. Hoeveel mm in **maart**?",
        options: ["40 mm", "60 mm", "50 mm", "70 mm"],
        answer: 0,
        wrongHints: [null, "Klopt — maart-balk staat op 40 mm.", "Dat is januari — kijk goed naar de maart-balk.", "Dat is februari.", "Dat is april."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: zoek 'maart' op x-as", tekst: "Bij een staafdiagram staat **op de x-as (onder)** de **categorie** — hier: maanden. Zoek het label **'mrt'** (maart). Dat is de derde balk van links." },
            { titel: "Stap 2: lees de hoogte van die balk", tekst: "Kijk omhoog vanaf de maart-balk naar de **hoogte** = waarde op de **y-as**. De maart-balk reikt tot **40 mm**." },
            { titel: "Stap 3: pak het juiste getal + eenheid", tekst: "Antwoord = **40 mm**. Niet alleen '40' — de eenheid is **mm** (millimeters regen). De andere maanden zijn afleiders:\n• jan = 60 mm\n• feb = 50 mm\n• **mrt = 40 mm** ←\n• apr = 70 mm\nVerwissel niet per ongeluk de balk." },
          ],
          woorden: [
            { woord: "staafdiagram", uitleg: "Grafiek met verticale balken. Hoogte = waarde." },
            { woord: "categorie", uitleg: "Het label onder elke balk (hier: maand)." },
            { woord: "mm", uitleg: "Millimeter — meeteenheid voor regen-hoeveelheid." },
          ],
          theorie: "Staafdiagram aflezen in 3 stappen:\n1. Zoek **label** op x-as (categorie).\n2. Lees **hoogte** van die balk op y-as (waarde).\n3. **Eenheid** uit titel/y-as overnemen in antwoord.\n\nCito-instinker: maand-balken naast elkaar — verkeerde balk lezen = fout antwoord, ook al klopt het getal.",
          voorbeelden: [
            { type: "stap", tekst: "Staaf 'kinderen per klas': klas 1=25, klas 2=28, klas 3=22, klas 4=27. Hoeveel in klas 3? → derde balk = 22 kinderen." },
            { type: "stap", tekst: "Staaf 'temperatuur per dag': ma=15, di=18, wo=12, do=20. Op woensdag? → 12 °C." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Tel de balken zorgvuldig. Als de vraag 'maart' zegt, tel niet de balk van februari per ongeluk mee." }],
          niveaus: {
            basis: "Maart-balk = 40 mm. = A.",
            simpeler: "Zoek 'mrt' onderaan. Kijk hoog die balk komt → 40 mm. = A.",
            nogSimpeler: "Maart = 40 mm = A.",
          },
        },
      },
      {
        q: "Klas: ma 22, di 18, wo 26, do 30, vr 24 kinderen. **Hoeveel kinderen meer** op **donderdag** dan op **dinsdag**?",
        options: ["12 kinderen", "6 kinderen", "8 kinderen", "48 kinderen"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is do − wo. Pak do − di.", "Te weinig — dat is do − ma. Pak do − di.", "Te veel — heb je opgeteld? De vraag is 'hoeveel meer' = aftrekken."],
        uitlegPad: {
          stappen: [
            { titel: "Verschil = aftrekken", tekst: "Donderdag 30 kinderen − dinsdag 18 kinderen = 12 kinderen meer." },
          ],
          woorden: [{ woord: "verschil", uitleg: "Hoeveel meer of minder de ene balk is dan de andere." }],
          theorie: "'Hoeveel meer' bij Cito = altijd aftrekken (groot − klein).",
          voorbeelden: [{ type: "stap", tekst: "Donderdag = 30, dinsdag = 18. 30 − 18 = 12. Dus 12 kinderen meer." }],
          basiskennis: [{ onderwerp: "Niet optellen", uitleg: "Optellen geeft 'totaal'. Aftrekken geeft 'verschil'." }],
          niveaus: {
            basis: "30 − 18 = 12 kinderen. A.",
            simpeler: "Vergelijk donderdag (30) met dinsdag (18). Verschil = 30 − 18 = 12. = A.",
            nogSimpeler: "12 kinderen = A.",
          },
        },
      },
      {
        q: "Zelfde klas. **Totaal aantal kinderen** in de hele week?",
        options: ["120 kinderen", "100 kinderen", "30 kinderen", "150 kinderen"],
        answer: 0,
        wrongHints: [null, "Klopt — 22+18+26+30+24 = 120.", "Te weinig — heb je alle 5 dagen meegeteld? 22+18+26+30+24.", "Te weinig — dat is alleen donderdag.", "Te veel — controleer optelling."],
        uitlegPad: {
          stappen: [
            { titel: "'Totaal' = optellen", tekst: "Bij Cito: woord **'totaal'** of **'samen'** of **'in totaal'** → ALLE balken bij elkaar **optellen**." },
            { titel: "Tel alle 5 dagen op", tekst: "Maandag 22 + dinsdag 18 + woensdag 26 + donderdag 30 + vrijdag 24 = **120 kinderen**." },
            { titel: "Slim optellen-truc", tekst: "Niet domweg achter elkaar. Maak slimme paren:\n• 22 + 18 = 40 (mooi rond)\n• 26 + 24 = 50 (mooi rond)\n• Subtotaal: 40 + 50 = 90\n• Plus donderdag: 90 + 30 = **120**.\nSneller + minder kans op fouten." },
          ],
          woorden: [
            { woord: "totaal / in totaal", uitleg: "Signaalwoord voor OPTELLEN bij Cito." },
            { woord: "verschil / hoeveel meer", uitleg: "Signaalwoord voor AFTREKKEN." },
          ],
          theorie: "Cito-signaalwoorden bij grafiekvragen:\n• 'totaal' / 'samen' / 'in totaal' → +\n• 'verschil' / 'hoeveel meer/minder' → −\n• 'gemiddeld' → som ÷ aantal\n• 'hoeveel keer zo veel' → ÷",
          voorbeelden: [
            { type: "stap", tekst: "5 maanden regen totaal: 60+50+40+70+80 = 300 mm." },
            { type: "stap", tekst: "3 vakken score-gemiddelde: (8+7+6)÷3 = 21÷3 = 7." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Signaalwoord lezen vóór rekenen. 'Totaal' = ALLES bij elkaar optellen." }],
          niveaus: {
            basis: "120 kinderen (22+18+26+30+24). = A.",
            simpeler: "Tel alle 5 balken op: 22+18+26+30+24 = 120 kinderen. = A.",
            nogSimpeler: "120 = A.",
          },
        },
      },
      {
        q: "Zelfde klas. **Op welke dag** waren er **de meeste kinderen**?",
        options: ["Donderdag", "Maandag", "Woensdag", "Vrijdag"],
        answer: 0,
        wrongHints: [null, "Klopt — donderdag 30 is het hoogste.", "Dat is 22 — zoek het hoogste getal.", "Dat is 26 — hoger bestaat nog.", "Dat is 24 — hoger bestaat nog."],
        uitlegPad: {
          stappen: [
            { titel: "'Meeste' = hoogste getal", tekst: "Het signaalwoord **'meeste'** vraagt om het **hoogste getal**. Bij een staafdiagram = de **langste/hoogste balk**." },
            { titel: "Vergelijk de 5 dagen", tekst: "Lees alle waardes:\n• ma = 22\n• di = 18\n• wo = 26\n• **do = 30** ← hoogste!\n• vr = 24\nDe hoogste = 30, dat is **donderdag**." },
            { titel: "Cito-instinker: GETAL vs DAG", tekst: "Vraag is: **'Op welke DAG'** — dus antwoord = de **dagnaam** (donderdag), NIET het getal (30).\nCito test of je de juiste taal-vorm in de opties pakt:\n• 'Op welke dag?' → dag-naam\n• 'Hoeveel kinderen?' → getal\n• 'Hoeveel meer dan ma?' → verschil-getal\nVerkeerde vraag-vorm aanvinken = punt kwijt, ook al klopt je redenering." },
          ],
          woorden: [
            { woord: "meeste", uitleg: "Het hoogste aantal, grootste hoeveelheid." },
            { woord: "minste", uitleg: "Het laagste aantal, kleinste hoeveelheid." },
          ],
          theorie: "Cito-signaalwoorden bij staaf:\n• 'meeste' / 'hoogste' / 'grootste' → hoogste balk\n• 'minste' / 'laagste' / 'kleinste' → laagste balk\n• 'op welke dag' → antwoord = dagnaam (NIET getal)\n• 'hoeveel' → antwoord = getal\n\n3 stappen: 1) bepaal extreme (max/min) 2) lees waarde 3) check wat de vraag VRAAGT (dag of getal).",
          voorbeelden: [
            { type: "stap", tekst: "Staaf verkoop ijsjes ma-vr: 12-8-18-22-30. Welke dag minst? → di (8). Hoeveel op vr? → 30." },
            { type: "stap", tekst: "Staaf regen jan-apr: 60-80-40-50. Welke maand meest? → feb (80). Hoeveel mm in mrt? → 40 mm." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag-startwoord bepaalt antwoord-vorm: 'Welke...' = naam/categorie. 'Hoeveel...' = getal. 'Wanneer...' = tijd." },],
          niveaus: {
            basis: "Donderdag = 30 = hoogste. = A.",
            simpeler: "Zoek hoogste getal: 30 op donderdag. Vraag: 'welke dag?' → antwoord = donderdag. = A.",
            nogSimpeler: "Donderdag = A.",
          },
        },
      },
    ],
  },

  // STAP 3: Lijngrafiek lezen
  {
    title: "Lijngrafiek lezen",
    explanation:
      "Een **lijngrafiek** laat zien hoe iets verandert. Bijvoorbeeld: temperatuur over de dag, of het gewicht van een baby per maand.\n\n**Wat je leest**:\n• **x-as** (onderaan) = de tijd — uur, dag, week, jaar.\n• **y-as** (zijkant) = de waarde — temperatuur, aantal, prijs, gewicht.\n• **De lijn** verbindt de meetpunten.\n\n**Stijgen of dalen?**:\n• Lijn gaat **omhoog** → iets wordt **meer/hoger**.\n• Lijn gaat **omlaag** → iets wordt **minder/lager**.\n• Lijn blijft **gelijk** → er verandert **niets**.\n\n**Voorbeeld**: een grafiek van de temperatuur van 's morgens tot 's avonds.\n• Om 8 uur: 12 °C.\n• Om 14 uur: 22 °C.\n• Om 20 uur: 16 °C.\n→ Tussen 8 en 14 uur: lijn stijgt → het werd **warmer**.\n→ Tussen 14 en 20 uur: lijn daalt → het werd **kouder**.\n\n**Cito-truc — Wanneer was het meest / minst?**:\n• Zoek het **hoogste punt** = wanneer was het MEEST.\n• Zoek het **laagste punt** = wanneer was het MINST.\n• **Steilste stijging** = grootste toename.",
    svg: lijnSvg(
      [
        { x: "08:00", y: 12 },
        { x: "11:00", y: 18 },
        { x: "14:00", y: 22 },
        { x: "17:00", y: 20 },
        { x: "20:00", y: 16 },
      ],
      "Temperatuur op een zomerdag (°C)",
    ),
    checks: [
      {
        q: "Temperatuur: 8u → 12°C, 14u → 22°C, 20u → 16°C. **Wanneer warmst**?",
        options: ["14u", "8u", "20u", "11u"],
        answer: 0,
        wrongHints: [null, "Klopt — 22°C is hoogste waarde, om 14u.", "Dat is het koudst, niet het warmst.", "Niet het warmst — kijk naar het hoogste punt.", "Niet gegeven in de vraag."],
        uitlegPad: {
          stappen: [
            { titel: "'Warmst' = hoogste temperatuur", tekst: "Het woord **'warmst'** vraagt om het **HOOGSTE getal** in graden Celsius. Bij een lijngrafiek = het **HOOGSTE PUNT** op de y-as." },
            { titel: "Vergelijk de 3 waardes", tekst: "• 8u → 12°C\n• 14u → **22°C** ← hoogste!\n• 20u → 16°C\n→ 14u heeft de hoogste waarde, dus 14u is het warmst." },
            { titel: "Signaalwoorden temperatuur", tekst: "Cito gebruikt veel signaalwoorden bij temperatuur-vragen:\n• **'warmst'** / **'hoogste'** / **'top'** → grootste waarde → ↗\n• **'koudst'** / **'laagste'** / **'dieptepunt'** → kleinste waarde → ↘\n• **'wanneer'** → vraag om TIJD, antwoord = uur/dag\n• **'hoe warm'** → vraag om WAARDE, antwoord = °C" },
          ],
          woorden: [
            { woord: "hoogste punt", uitleg: "Toppunt van een lijngrafiek = grootste waarde." },
            { woord: "laagste punt", uitleg: "Dieptepunt = kleinste waarde." },
          ],
          theorie: "Cito-truc lijngrafiek extremen:\n• Hoogste punt → maximum-waarde\n• Laagste punt → minimum-waarde\n• Vraagt 'wanneer' → antwoord = tijd (x-as)\n• Vraagt 'hoe warm/veel' → antwoord = waarde (y-as)",
          voorbeelden: [
            { type: "stap", tekst: "Verkoopgrafiek: 'Wanneer meest verkocht?' → kijk hoogste staaf/punt → noem die dag/maand." },
            { type: "stap", tekst: "Bevolkingsgrafiek: 'Wanneer minst inwoners?' → kijk laagste punt → noem dat jaar." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Warmst/hoogste/meest = hoogste punt. Koudst/laagste/minst = laagste punt. Vraag 'wanneer?' → tijd antwoorden, niet de waarde." }],
          niveaus: {
            basis: "14u (22°C is hoogste). = A.",
            simpeler: "Zoek het hoogste getal: 22°C. Dat hoort bij 14u. Dus om 14u is het 't warmst. = A.",
            nogSimpeler: "14u = A.",
          },
        },
      },
      {
        q: "Zelfde grafiek. Hoeveel **graden warmer** om 14u dan om 8u?",
        options: ["10 °C", "12 °C", "22 °C", "8 °C"],
        answer: 0,
        wrongHints: [null, "Te veel — dat is alleen 8u. Pak 22 − 12.", "Te veel — dat is alleen 14u. Pak verschil.", "Te weinig — controleer 22 − 12."],
        uitlegPad: {
          stappen: [
            { titel: "Verschil = aftrekken", tekst: "14u = 22 °C. 8u = 12 °C. Verschil = 22 − 12 = 10 °C." },
          ],
          woorden: [{ woord: "°C", uitleg: "Graden Celsius — de eenheid voor temperatuur." }],
          theorie: "Bij Cito-temperatuur-vragen: pak de 2 waardes en trek af.",
          voorbeelden: [{ type: "stap", tekst: "22 °C − 12 °C = 10 °C warmer." }],
          basiskennis: [{ onderwerp: "Eenheid mee", uitleg: "Schrijf °C bij het antwoord." }],
          niveaus: {
            basis: "22 − 12 = 10 °C. A.",
            simpeler: "Om 14u is het 22 °C, om 8u is het 12 °C. 22 − 12 = 10 °C warmer. = A.",
            nogSimpeler: "10 °C = A.",
          },
        },
      },
      {
        q: "Een lijn die de hele dag **vlak** blijft betekent ... ?",
        options: ["Er verandert niets", "Het wordt warmer", "Het wordt kouder", "De grafiek is fout"],
        answer: 0,
        wrongHints: [null, "Klopt — vlak = constant = geen verandering.", "Warmer = lijn omhoog. Vlak ≠ omhoog.", "Kouder = lijn omlaag. Vlak ≠ omlaag.", "Vlak is een normale uitkomst — 'geen verandering'."],
        uitlegPad: {
          stappen: [
            { titel: "Lijn-interpretatie in 3 vormen", tekst: "Bij een lijngrafiek is de **richting** van de lijn alles:\n• **Omhoog ↗** = waarde stijgt (warmer / meer / hoger)\n• **Omlaag ↘** = waarde daalt (kouder / minder / lager)\n• **Vlak →** = waarde verandert NIET (constant / blijft hetzelfde)" },
            { titel: "Vlakke lijn = stabiel", tekst: "Een vlakke lijn betekent: **er gebeurt niets nieuws**. Voorbeelden:\n• Temperatuur blijft 20 °C de hele middag → vlakke lijn op 20.\n• Aantal kinderen in klas blijft 25 elke dag → vlak op 25." },
            { titel: "Combinatie van richtingen lezen", tekst: "Bij Cito krijg je vaak grafieken die **eerst stijgen, dan vlak, dan dalen**. Tip:\n• Lees per stuk: stijgt het, daalt het, of vlak?\n• Onderscheid de fases — vaak komt er een vraag over één specifieke fase." },
          ],
          woorden: [
            { woord: "stijgend", uitleg: "Lijn gaat omhoog = waarde wordt groter." },
            { woord: "dalend", uitleg: "Lijn gaat omlaag = waarde wordt kleiner." },
            { woord: "constant / vlak", uitleg: "Lijn blijft hetzelfde = waarde verandert niet." },
          ],
          theorie: "Cito-richting bij lijngrafiek:\n• ↗ omhoog = stijgt = MEER\n• ↘ omlaag = daalt = MINDER\n• → vlak = constant = HETZELFDE\nLees de richting eerst, dan getal aflezen.",
          voorbeelden: [
            { type: "stap", tekst: "Grafiek 'aantal kinderen op overblijf' blijft hele week op 25 = klas is constant elke dag." },
            { type: "stap", tekst: "Grafiek 'temperatuur' stijgt 8u-14u, dan vlak 14u-17u, dan daalt → middag-warm, vlak in piek, avond koeler." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vlakke lijn = 'er verandert niets'. Niet 'fout' of 'leeg' — gewoon stabiel." }],
          niveaus: {
            basis: "Er verandert niets (vlak = constant). = A.",
            simpeler: "Lijn omhoog = stijgt. Lijn omlaag = daalt. Lijn vlak = blijft hetzelfde. = A.",
            nogSimpeler: "Vlak = niets verandert = A.",
          },
        },
      },
      {
        q: "Wat lees je af aan **de y-as** (zijkant)?",
        options: ["De waarde / hoeveelheid", "De tijd / de dag", "De legenda", "De titel"],
        answer: 0,
        wrongHints: [null, "Klopt — y-as = verticaal = waarde.", "Tijd staat op de x-as (onderaan), niet de zijkant.", "Legenda is apart.", "Titel staat bovenaan."],
        uitlegPad: {
          stappen: [
            { titel: "X-as horizontaal, Y-as verticaal", tekst: "Elke grafiek heeft 2 assen:\n• **X-as** = horizontaal (onderaan) → vaak **tijd** of **categorieën** (dagen, maanden, namen)\n• **Y-as** = verticaal (zijkant) → altijd de **waarde** of **hoeveelheid**" },
            { titel: "Y-as = wat je meet", tekst: "De y-as vertelt **HOEVEEL**. Bij regen-grafiek: mm. Bij temperatuur: °C. Bij kinderen: aantal. Bij geld: €.\n\nKijk altijd naar de **eenheid op de y-as** voordat je een getal aflezen." },
            { titel: "Aflezen — recht naar boven", tekst: "Om een waarde af te lezen:\n1. Vind het punt of de balk op de **x-as** (bv. maandag).\n2. Ga **recht omhoog** tot de top.\n3. Lees vanuit dat punt **links** op de y-as af.\n4. Schrijf op + eenheid." },
          ],
          woorden: [
            { woord: "x-as", uitleg: "Horizontaal, onderaan. Vaak tijd of categorie." },
            { woord: "y-as", uitleg: "Verticaal, zijkant. De waarde / hoeveelheid." },
            { woord: "legenda", uitleg: "Aparte uitleg-blok bij grafiek (= NIET op as)." },
          ],
          theorie: "Cito-truc as-verwarring voorkomen: 'Y staat als een vork omhoog' = verticaal. 'X loopt als een streep' = horizontaal. Y altijd waarde, X altijd categorie/tijd.",
          voorbeelden: [
            { type: "stap", tekst: "Temperatuur-grafiek: x-as = uren (8u, 10u, 12u...), y-as = °C." },
            { type: "stap", tekst: "Klas-grafiek: x-as = dagen (ma, di...), y-as = aantal kinderen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Y = waarde (omhoog). X = categorie/tijd (langs). Recht omhoog vanaf x naar top → links naar y → lees getal." }],
          niveaus: {
            basis: "Y-as = waarde / hoeveelheid. = A.",
            simpeler: "Y-as = zijkant = HOE VEEL. X-as = onderkant = WANNEER / WIE / WAT. = A.",
            nogSimpeler: "Y = waarde = A.",
          },
        },
      },
    ],
  },

  // STAP 4: Cirkeldiagram lezen
  {
    title: "Cirkeldiagram (taartdiagram) lezen",
    explanation:
      "Een **cirkeldiagram** is een **taart**. De hele taart = **100%** = alles. Elk stuk is een groep en heeft een **percentage**.\n\n**Voorbeeld**: een klas van 20 leerlingen — hun favoriete sport.\n• Voetbal: 50% van de leerlingen = 10 leerlingen.\n• Hockey: 25% = 5 leerlingen.\n• Zwemmen: 15% = 3 leerlingen.\n• Anders: 10% = 2 leerlingen.\n\n**Cito-stappenplan**:\n1. Zoek het stuk dat de vraag bedoelt *(via kleur of label)*.\n2. Lees het **percentage** af *(of meet hoe groot het stuk is)*.\n3. **Reken om naar aantal** als nodig: percentage × totaal ÷ 100.\n\n**Slimme percentage-trucs voor 8-jarigen**:\n• 50% = de helft (÷ 2).\n• 25% = een kwart (÷ 4).\n• 10% = een tiende (÷ 10).\n• 75% = drie kwart.\n\n**Voorbeeld omrekenen**:\n*'Van 40 leerlingen kiest 25% voor zwemmen. Hoeveel zwemmers?'*\n• 25% = ¼.\n• ¼ van 40 = 40 ÷ 4 = **10 zwemmers**.\n\n**Check**: alle stukken van de taart **samen = 100%** altijd! Als de getallen niet kloppen, heb je iets gemist.",
    svg: cirkelSvg(
      [
        { l: "Voetbal 50%", v: 50, c: "#69f0ae" },
        { l: "Hockey 25%", v: 25, c: "#ffd54f" },
        { l: "Zwemmen 15%", v: 15, c: "#80cbc4" },
        { l: "Anders 10%", v: 10, c: "#ff8a65" },
      ],
      "Favoriete sport — 20 leerlingen",
    ),
    checks: [
      {
        q: "Taart: voetbal 50%, hockey 25%, zwemmen 15%, anders 10%. **Welke sport is grootst**?",
        options: ["Voetbal", "Hockey", "Zwemmen", "Anders"],
        answer: 0,
        wrongHints: [null, "Klopt — voetbal is de helft, dus het grootste stuk.", "Hockey is 25%, voetbal is 50%. Welke is groter?", "Zwemmen is maar 15%.", "Anders is maar 10%."],
        uitlegPad: {
          stappen: [
            { titel: "Grootst = hoogste percentage", tekst: "Bij een cirkeldiagram is **grootst** = het stuk met het **hoogste percentage**. Visueel = het **grootste taart-stuk**." },
            { titel: "Vergelijk de 4 percentages", tekst: "• Voetbal **50%** ← hoogste!\n• Hockey 25%\n• Zwemmen 15%\n• Anders 10%\nVoetbal heeft 50%, dat is de helft van de hele taart. De rest samen is óók maar de helft. Voetbal wint dus duidelijk." },
            { titel: "Cito-truc cirkeldiagram", tekst: "Bij cirkeldiagrammen werken **twee dingen** tegelijk:\n1. **Percentage** (cijfer) → hoogste = grootst\n2. **Visueel stuk** (oogmaat) → grootste taartpunt = grootst\nBeide kloppen altijd. Check ze tegen elkaar: als 50% lijkt op een klein stukje, is er iets mis met de tekening — vertrouw het getal." },
          ],
          woorden: [
            { woord: "grootste stuk", uitleg: "Hoogste percentage = grootste taart-deel." },
            { woord: "kleinste stuk", uitleg: "Laagste percentage = kleinste taart-deel." },
          ],
          theorie: "Cirkeldiagram + 'welke is grootst/kleinst':\n1. Lees percentages naast elke kleur/stuk.\n2. Kies hoogste (grootst) of laagste (kleinst).\n3. Visuele check: groot stuk klopt met hoog %?\n4. Antwoord = de NAAM van die sport/groep, niet het percentage zelf.",
          voorbeelden: [
            { type: "stap", tekst: "Reis-bestemming klas: Spanje 40%, Frankrijk 30%, Italië 20%, Anders 10%. Grootst? → 40% = Spanje." },
            { type: "stap", tekst: "Huisdier: hond 45%, kat 30%, vis 15%, ander 10%. Kleinst? → 10% = ander." },
          ],
          basiskennis: [{ onderwerp: "Verwarring", uitleg: "Vraag is naar de NAAM, niet het getal! Antwoord 'voetbal' niet '50%'." }],
          niveaus: {
            basis: "Voetbal heeft 50% = grootste stuk = A.",
            simpeler: "Welk percentage is het hoogst? 50% → dat hoort bij voetbal. Antwoord = naam: voetbal. = A.",
            nogSimpeler: "Voetbal = A. Hoogste % wint.",
          },
        },
      },
      {
        q: "Zelfde taart, klas van **20** kinderen. Hoeveel kiezen **voetbal**?",
        options: ["10 kinderen", "50 kinderen", "5 kinderen", "20 kinderen"],
        answer: 0,
        wrongHints: [null, "Te veel — 50 kinderen kan niet in een klas van 20. 50% is de helft.", "Te weinig — dat is een kwart (25%), niet de helft.", "Te veel — dat is alle kinderen."],
        uitlegPad: {
          stappen: [
            { titel: "50% = de helft", tekst: "50% van 20 = 20 ÷ 2 = 10 kinderen." },
          ],
          woorden: [{ woord: "%", uitleg: "Per honderd. 50% = 50 per 100 = de helft." }],
          theorie: "Procent × totaal ÷ 100. Of voor mooie getallen: 50% = ÷ 2, 25% = ÷ 4, 10% = ÷ 10.",
          voorbeelden: [{ type: "stap", tekst: "50% van 20 kinderen = 10 kinderen voetbal." }],
          basiskennis: [{ onderwerp: "Eenheid mee", uitleg: "Bij Cito: schrijf 'kinderen' of de juiste eenheid bij het getal." }],
          niveaus: {
            basis: "50% × 20 = 10 kinderen. A.",
            simpeler: "50% is de helft. De helft van 20 = 10. Dus 10 kinderen kiezen voetbal. = A.",
            nogSimpeler: "10 kinderen = A.",
          },
        },
      },
      {
        q: "Zelfde taart, klas van **20**. Hoeveel kiezen **hockey** (25%)?",
        options: ["5 kinderen", "10 kinderen", "25 kinderen", "4 kinderen"],
        answer: 0,
        wrongHints: [null, "Klopt — 25% van 20 = ¼ × 20 = 5.", "Te veel — dat is voetbal (50%), niet hockey (25%).", "Te veel — 25 kinderen kan niet in klas van 20.", "Te weinig — 25% van 20 is iets meer dan dat."],
        uitlegPad: {
          stappen: [
            { titel: "25% = een kwart", tekst: "**25%** = ¼ (een vierde / een kwart). Onthoud: 100% ÷ 4 = 25%. Dus 25% van iets = dat iets gedeeld door 4." },
            { titel: "25% van 20 berekenen", tekst: "**Stap 1**: 20 ÷ 4 = 5.\n**Stap 2**: Dus 25% van 20 = **5 kinderen**.\nEen klas van 20 kinderen heeft dus 5 hockey-kiezers." },
            { titel: "Snelle procent-trucs", tekst: "Onthoud de kern-percentages:\n• **10%** = ÷ 10 (van 20 = 2)\n• **25%** = ÷ 4 (van 20 = 5)\n• **50%** = ÷ 2 (van 20 = 10)\n• **75%** = ÷ 4 × 3 (van 20 = 15)\n• **100%** = alles (= 20)" },
          ],
          woorden: [
            { woord: "25%", uitleg: "Een kwart = ¼ = 1 op de 4." },
            { woord: "%", uitleg: "Per honderd. 25% = 25 op de 100 = 1 op de 4." },
          ],
          theorie: "Cito-truc procenten in cirkeldiagrammen:\n• 50% = helft → ÷ 2\n• 25% = kwart → ÷ 4\n• 10% = tiende → ÷ 10\n• Voor andere %: gebruik 'procent × totaal ÷ 100'.\nBij Cito-cirkeldiagrammen zijn vaak mooie %-jes (10/20/25/50) → snel uit het hoofd.",
          voorbeelden: [
            { type: "stap", tekst: "25% van 40 = 40 ÷ 4 = 10." },
            { type: "stap", tekst: "25% van 100 = 100 ÷ 4 = 25 (lekker rond, daarom heten ze ook 25%)." },
            { type: "stap", tekst: "Pas op: 25% van 20 is NIET 25 kinderen — dat zou meer zijn dan de hele klas!" },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "25% = kwart = ÷ 4. Bij klas van 20 = 5. Bij klas van 24 = 6. Bij klas van 28 = 7." }],
          niveaus: {
            basis: "5 kinderen (20 ÷ 4 = 5). = A.",
            simpeler: "25% = een kwart. 20 ÷ 4 = 5. Dus 5 kinderen kiezen hockey. = A.",
            nogSimpeler: "5 = A.",
          },
        },
      },
      {
        q: "**Tellen alle stukken** van een taartdiagram bij elkaar samen op tot ... ?",
        options: ["100%", "50%", "1000%", "Het hangt af van de grafiek"],
        answer: 0,
        wrongHints: [null, "Klopt — een hele taart = altijd 100%.", "Te weinig — alle stukken samen vormen de hele taart.", "Te veel — 100% = het maximum, alles wat er is.", "Niet juist — een hele taart is altijd 100%, ongeacht de grafiek."],
        uitlegPad: {
          stappen: [
            { titel: "Een taart is een geheel = 100%", tekst: "Bij een cirkeldiagram is de **hele cirkel** = het **totale aantal** = **100%**. Alle stukken samen vormen die hele cirkel — dus alle % samen = 100%." },
            { titel: "Voorbeeld: sport-keuze klas", tekst: "Voetbal 50% + Hockey 25% + Zwemmen 15% + Anders 10% = **100%** ✓\nDe stukken sluiten precies aan tot de hele cirkel. Geen overlap, geen gaten." },
            { titel: "Cito-truc: ontbrekend stuk berekenen", tekst: "Soms vraagt Cito: 'Drie stukken zijn 40%, 30%, en 20%. Hoeveel is het vierde?'\nReken: 100% − (40+30+20) = 100 − 90 = **10%**.\nOmdat alle stukken samen 100% MOETEN zijn, kun je het ontbrekende stuk altijd berekenen." },
          ],
          woorden: [
            { woord: "100%", uitleg: "Het hele geheel. Alles wat er is." },
            { woord: "deel van geheel", uitleg: "Een % van de 100%." },
          ],
          theorie: "Cito-rekenregel cirkeldiagram:\n• Alle stukken samen = 100% (altijd)\n• Ontbrekend stuk = 100% − (som andere stukken)\n• Cirkel kan niet meer dan 100% (zou een 2e cirkel zijn)\n• Cirkel kan ook niet minder dan 100% (dat zou een 'gat' zijn)",
          voorbeelden: [
            { type: "stap", tekst: "Verkiezingsuitslag: 4 partijen krijgen 40+30+20+10 = 100% (klopt)." },
            { type: "stap", tekst: "Cito-vraag: 'Rood 35%, Blauw 25%, Groen 30%. Hoeveel Geel?' → 100 − (35+25+30) = 100 − 90 = 10%." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Cirkel = ALTIJD 100%. Gebruik dit om ontbrekende stukken te berekenen via 100 − rest." }],
          niveaus: {
            basis: "100% (hele taart = geheel). = A.",
            simpeler: "Cirkel = hele iets. Alle stukken samen = hele iets = 100%. = A.",
            nogSimpeler: "100% = A.",
          },
        },
      },
    ],
  },

  // STAP 5: Tabel ↔ grafiek
  {
    title: "Van tabel naar grafiek (en terug)",
    explanation:
      "Een **tabel** is gewoon **getallen in rijen en kolommen**. Een grafiek is hetzelfde — maar dan als plaatje.\n\nVoorbeeld:\n\n| Dag | Aantal ijsjes verkocht |\n|---|---|\n| ma | 12 |\n| di | 8 |\n| wo | 18 |\n| do | 22 |\n| vr | 30 |\n\nIn een **staafdiagram** zou maandag een balk van 12 worden, vrijdag een balk van 30, etc.\n\n**Cito-vraag-type 1**: *'Welke dag is het laagst in de tabel?'*\n• Zoek het kleinste getal: 8 (dinsdag).\n\n**Cito-vraag-type 2**: *'Hoeveel ijsjes in de hele week?'*\n• Tel alle dagen op: 12 + 8 + 18 + 22 + 30 = **90 ijsjes**.\n\n**Cito-vraag-type 3**: *'Hoeveel meer op vrijdag dan op maandag?'*\n• Verschil: 30 − 12 = **18 ijsjes meer**.\n\n**Cito-tip — tabel vs grafiek**:\n• **Exact getal** = tabel makkelijker.\n• **Patroon zien** (stijgt het? daalt het?) = grafiek makkelijker.\n• Bij twijfel: maak even snel een staafje per dag op kladpapier.",
    checks: [
      {
        q: "Tabel: ma 12, di 8, wo 18, do 22, vr 30 ijsjes. **Op welke dag minst** verkocht?",
        options: ["Dinsdag", "Maandag", "Woensdag", "Vrijdag"],
        answer: 0,
        wrongHints: [null, "Klopt — dinsdag (8) is het laagste.", "Maandag is 12 — dinsdag is lager.", "Woensdag is 18 — hoger dan dinsdag.", "Vrijdag is 30 — de meest, niet minst."],
        uitlegPad: {
          stappen: [
            { titel: "'Minst' = laagste getal", tekst: "Bij een **tabel** zoek je het **laagste getal** als de vraag 'minst' / 'minste' / 'laagste' bevat." },
            { titel: "Loop door de tabel — vergelijk", tekst: "• ma = 12\n• **di = 8** ← laagste!\n• wo = 18\n• do = 22\n• vr = 30\nHet kleinste getal is **8**, dat hoort bij **dinsdag**." },
            { titel: "Cito-truc: dagen bij rekenen", tekst: "Bij tabel-vragen met dagen:\n• 'minst' / 'minste' / 'laagste' → kleinste getal\n• 'meeste' / 'hoogste' → grootste getal\n• 'verschil' → groot − klein\n• 'totaal' → alles +\n\nVerwar 'minst' niet met 'minder dan X' (= aftrekken). 'Minst' = extreme zoeken." },
          ],
          woorden: [
            { woord: "minst", uitleg: "Het kleinste aantal/laagste getal in de groep." },
            { woord: "tabel", uitleg: "Getallen netjes in rijen en kolommen geordend." },
          ],
          theorie: "Tabel aflezen 'minst/meest':\n1. Loop alle waardes na.\n2. Onthoud kleinste (bij minst) of grootste (bij meest).\n3. Pak de NAAM van de kolom/rij waar dat getal hoort.\n4. Antwoord = naam, NIET het getal zelf (tenzij vraag 'hoeveel' is).",
          voorbeelden: [
            { type: "stap", tekst: "Tabel cijfers ma 7, di 6, wo 9, do 5. Laagste cijfer? → do (5)." },
            { type: "stap", tekst: "Tabel inwoners A=200, B=150, C=300. Minste inwoners? → B." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag 'welke dag' → antwoord = dag-naam. Vraag 'hoeveel' → antwoord = getal. Tabel-vragen testen vaak die verwisseling." }],
          niveaus: {
            basis: "Dinsdag (8) is het laagste. = A.",
            simpeler: "Zoek het kleinste getal in de tabel: 8 → bij dinsdag. = A.",
            nogSimpeler: "Dinsdag = A.",
          },
        },
      },
      {
        q: "Zelfde tabel. **Totaal ijsjes** hele week?",
        options: ["90 ijsjes", "70 ijsjes", "60 ijsjes", "100 ijsjes"],
        answer: 0,
        wrongHints: [null, "Klopt — 12+8+18+22+30 = 90.", "Te weinig — controleer optelling 12+8+18+22+30.", "Te weinig — niet alle 5 dagen meegeteld.", "Te veel — controleer."],
        uitlegPad: {
          stappen: [
            { titel: "'Totaal' = alle 5 dagen optellen", tekst: "Het signaalwoord **'totaal'** vraagt om **alle waardes bij elkaar**. Bij week-tabel: tel alle 5 dagen op." },
            { titel: "Slim optellen in paren", tekst: "Niet alles in 1 keer in je hoofd — maak paren:\n• ma + di = 12 + 8 = **20**\n• wo + do = 18 + 22 = **40**\n• vr alleen = **30**\n\nNu paren samen:\n• 20 + 40 = **60**\n• 60 + 30 = **90**\n→ **Totaal = 90 ijsjes**." },
            { titel: "Slimme trucs voor optellen", tekst: "Cito-trucs bij grotere optellingen:\n• Zoek **paren die mooi uitkomen**: 12+8 = 20 (rond getal!), 18+22 = 40 (rond!)\n• Maak van moeilijke som een ronde-getallen-som\n• Tel de eenheden eerst, daarna tientallen\n• Schat eerst: 5 dagen × ~18 gemiddeld ≈ 90 → 90 klopt qua orde van grootte" },
          ],
          woorden: [
            { woord: "totaal", uitleg: "Alle waardes samen, na optellen." },
            { woord: "paren", uitleg: "Twee getallen samen — vaak makkelijker dan alles in 1 keer." },
          ],
          theorie: "Cito-tabel signaalwoorden:\n• 'Totaal' → +\n• 'Samen' → +\n• 'In totaal verkocht' → +\n• 'Hele week/dag/jaar' → + (alles binnen die periode)\n\nNooit anders dan +. Alleen aftrekken bij 'verschil' / 'hoeveel meer/minder'.",
          voorbeelden: [
            { type: "stap", tekst: "Tabel cijfers per dag: 5+7+9+6+8 = 35 punten totaal." },
            { type: "stap", tekst: "Tabel regen jan-apr: 60+50+40+70 = 220 mm in 4 maanden." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij 5 getallen: pak 2 paren + 1 los, dan paren samen, dan los erbij. Drie stappen ipv 4 = minder fouten." }],
          niveaus: {
            basis: "12+8+18+22+30 = 90. = A.",
            simpeler: "Tel: 12+8=20, 18+22=40, 20+40=60, +30=90. = A.",
            nogSimpeler: "90 = A.",
          },
        },
      },
      {
        q: "Tabel: ma 12, di 8, wo 18, do 22, vr 30. **Hoeveel meer** op vr dan ma?",
        options: ["18 ijsjes", "42 ijsjes", "12 ijsjes", "30 ijsjes"],
        answer: 0,
        wrongHints: [null, "Te veel — dat is opgeteld. 'Meer' = aftrekken.", "Te weinig — dat is maandag zelf.", "Te veel — dat is vrijdag zelf."],
        uitlegPad: {
          stappen: [
            { titel: "Verschil = groot − klein", tekst: "Vrijdag (30 ijsjes) − maandag (12 ijsjes) = 18 ijsjes meer." },
          ],
          woorden: [{ woord: "verschil", uitleg: "Hoeveel meer/minder een waarde is dan een andere." }],
          theorie: "'Hoeveel meer' = altijd aftrekken.",
          voorbeelden: [{ type: "stap", tekst: "30 − 12 = 18. Dus 18 ijsjes meer op vrijdag." }],
          basiskennis: [{ onderwerp: "Niet optellen", uitleg: "Optellen geeft totaal. Aftrekken geeft verschil." }],
          niveaus: {
            basis: "30 − 12 = 18 ijsjes. A.",
            simpeler: "Vrijdag = 30. Maandag = 12. Verschil = 30 − 12 = 18 ijsjes meer. = A.",
            nogSimpeler: "18 ijsjes = A.",
          },
        },
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — grafieken-mix",
    explanation:
      "Mix-toets in Cito-stijl. Verschillende grafiek-types door elkaar. **Lees altijd eerst**: titel, eenheid, x-as, y-as. Dan pas de vraag beantwoorden.\n\nVeel succes!",
    checks: [
      {
        q: "Staafdiagram regen-mm: jan 60, feb 80, mrt 40, apr 50. **Totaal regen-mm** in deze 4 maanden?",
        options: ["230 mm", "180 mm", "210 mm", "190 mm"],
        answer: 0,
        wrongHints: [null, "Klopt — 60+80+40+50 = 230 mm.", "Te weinig — controleer 60+80+40+50.", "Te weinig — controleer optelling.", "Te weinig — kom je 20 tekort?"],
        uitlegPad: {
          stappen: [
            { titel: "'Totaal' = alle balken bij elkaar optellen", tekst: "Het woord **'totaal'** is een **signaalwoord voor +** (optellen). Bij staafdiagram: **alle balken bij elkaar** = totaal." },
            { titel: "Stap-voor-stap optellen", tekst: "Lees elke balk en tel op:\n• jan = 60\n• feb = 80\n• mrt = 40\n• apr = 50\n\nReken slim:\n60 + 80 = **140**\n140 + 40 = **180**\n180 + 50 = **230**\n→ **Totaal = 230 mm**." },
            { titel: "Cito-truc: tussenstappen opschrijven", tekst: "Bij 4+ getallen: NIET alles in 1 keer in je hoofd doen — kans op fout te groot.\nOpsplitsen in **2 stappen**:\n• Eerst: jan+feb = 60+80 = 140\n• Daarna: mrt+apr = 40+50 = 90\n• Tot slot: 140 + 90 = 230 ✓\nTwee kleine sommen = nauwkeuriger dan één grote." },
          ],
          woorden: [
            { woord: "totaal", uitleg: "Alle getallen samen, na optellen." },
            { woord: "optellen", uitleg: "Cijfers samen tellen tot één getal (+)." },
          ],
          theorie: "Cito-signaalwoorden optellen:\n• 'Totaal' → alles +\n• 'Samen' → alles +\n• 'Bij elkaar' → alles +\n• 'Alles in...' → alles +\n• 'Hoeveel in totaal verkocht/gegeten/...' → alles +\n\nTegenpolen (NIET optellen):\n• 'Verschil' → −\n• 'Hoeveel meer/minder' → −\n• 'Per dag/maand gemiddeld' → totaal ÷ aantal",
          voorbeelden: [
            { type: "stap", tekst: "Staaf ijsjes ma-vr: 12+8+18+22+30 = 90 ijsjes totaal." },
            { type: "stap", tekst: "Staaf inwoners 4 buurten: 200+350+150+300 = 1.000 inwoners totaal." },
            { type: "stap", tekst: "Staaf kinderen klas 1-4: 25+28+22+27 = 102 kinderen totaal." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij 4+ getallen: tel paren eerst (jan+feb, mrt+apr), dan paren samen. Veiliger dan alles in 1 keer." }],
          niveaus: {
            basis: "60 + 80 + 40 + 50 = 230 mm. = A.",
            simpeler: "Tel alle 4 maanden: jan(60) + feb(80) + mrt(40) + apr(50) = 230 mm. = A.",
            nogSimpeler: "230 mm = A.",
          },
        },
      },
      {
        q: "Lijngrafiek baby-gewicht: bij geboorte 3 kg, na 3 maanden 6 kg. **Hoeveel kg aangekomen**?",
        options: ["3 kg", "6 kg", "9 kg", "2 kg"],
        answer: 0,
        wrongHints: [null, "Klopt — verschil = 6 − 3 = 3 kg toegenomen.", "Te veel — dat is alleen het eind-gewicht.", "Te veel — dat is opgeteld.", "Te weinig — controleer 6 − 3."],
        uitlegPad: {
          stappen: [
            { titel: "'Aangekomen' = verschil = aftrekken", tekst: "Het woord **'aangekomen'** betekent: hoeveel ERBIJ gekomen sinds het begin. Dat is een **verschil-vraag** → aftrekken." },
            { titel: "Bereken: eind − begin", tekst: "**Begin**: 3 kg (bij geboorte).\n**Eind**: 6 kg (na 3 maanden).\n**Aangekomen** = 6 − 3 = **3 kg**." },
            { titel: "Cito-instinker: vergeet niet de eenheid", tekst: "Antwoord = '3 **kg**', niet alleen '3'. Op Cito staat soms in de opties: '3', '3 kg', '3 g', '3 maanden'. Alleen het juiste getal MET juiste eenheid is goed." },
          ],
          woorden: [
            { woord: "aangekomen", uitleg: "Hoeveel ERBIJ gekomen sinds begin. Bij gewicht: zwaarder geworden." },
            { woord: "verschil", uitleg: "Resultaat van aftrekken (groot − klein)." },
          ],
          theorie: "Cito-signaalwoorden bij groei-vragen:\n• 'aangekomen' / 'gegroeid' / 'erbij' → eind − begin (aftrekken)\n• 'totaal nu' / 'eindgewicht' → alleen eind aflezen\n• 'gemiddeld per maand' → verschil ÷ aantal maanden",
          voorbeelden: [
            { type: "stap", tekst: "Plant 10 cm bij start, 25 cm na 4 weken. Gegroeid: 25 − 10 = 15 cm." },
            { type: "stap", tekst: "Baby weegt 3 kg bij geboorte, 9 kg na 1 jaar. Aangekomen: 9 − 3 = 6 kg." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "'Aangekomen' = ERBIJ-gekomen = aftrekken (eind − begin)." }],
          niveaus: {
            basis: "3 kg aangekomen (6 − 3 = 3). = A.",
            simpeler: "Begin: 3 kg. Eind: 6 kg. Hoeveel ERBIJ gekomen? 6 − 3 = 3 kg. = A.",
            nogSimpeler: "3 kg = A.",
          },
        },
      },
      {
        q: "Taart: rood 25%, blauw 50%, geel 25%. Klas van **40** kinderen — hoeveel **blauw**?",
        options: ["20 kinderen", "50 kinderen", "10 kinderen", "40 kinderen"],
        answer: 0,
        wrongHints: [null, "Klopt — 50% van 40 = helft = 20.", "Te veel — kan niet meer dan klas-totaal.", "Te weinig — 50% is de helft. Helft van 40 = ?", "Te veel — dat is alle kinderen."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent 50%?", tekst: "**50%** = **de helft** van het totaal. Een **percentage** zegt: zoveel **van de 100** delen.\n• 50% = 50 van de 100 = **helft**\n• 25% = 25 van de 100 = **kwart**\n• 100% = alles" },
            { titel: "50% van 40 berekenen", tekst: "**Truc voor 50%**: gewoon **÷ 2** (delen door 2 = helft).\n• 40 ÷ 2 = **20 kinderen**\n\nAlternatief (langere weg):\n• 50% = 50/100 = 0,5\n• 0,5 × 40 = 20 kinderen ✓\nZelfde antwoord. Bij 50% is delen door 2 altijd het snelst." },
            { titel: "Cito-procent-trucs (snel)", tekst: "Onthoud deze ezelsbruggetjes voor Cito:\n• **50%** → ÷ 2 (helft)\n• **25%** → ÷ 4 (kwart)\n• **10%** → ÷ 10 (1 nul ervanaf)\n• **20%** → ÷ 5 (of 2× de 10%)\n• **75%** → 3× de 25% (drie kwart)\n• **100%** → alles\n\nCheck: rood 25% van 40 = 40÷4 = 10 kinderen. Geel 25% = ook 10. Blauw 50% = 20. Totaal: 10+10+20 = 40 ✓" },
          ],
          woorden: [
            { woord: "percentage", uitleg: "Aantal per 100, geschreven als %." },
            { woord: "50%", uitleg: "De helft. Truc: deel door 2." },
            { woord: "totaal", uitleg: "Hele groep = 100%." },
          ],
          theorie: "Percentage TOEPASSEN op een geheel:\n1. Identificeer het **totaal** (hier: 40 kinderen = 100%).\n2. Identificeer het **gevraagde %** (hier: blauw 50%).\n3. Bereken: % × totaal / 100, OF gebruik snelheid-truc:\n   - 50% → ÷ 2\n   - 25% → ÷ 4\n   - 10% → ÷ 10\n\nLet op: vraag is naar **aantal kinderen**, niet naar % zelf!",
          voorbeelden: [
            { type: "stap", tekst: "60 kinderen, 25% jongens → 60÷4 = 15 jongens." },
            { type: "stap", tekst: "200 zakjes, 10% gratis → 200÷10 = 20 gratis." },
            { type: "stap", tekst: "80 leerlingen, 50% meisjes → 80÷2 = 40 meisjes." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "50% = helft = ÷ 2. 25% = kwart = ÷ 4. Onthoud deze 2, dan kun je veel Cito-vragen snel." }],
          niveaus: {
            basis: "50% van 40 = 40÷2 = 20 kinderen. = A.",
            simpeler: "50% = de helft. Helft van 40 kinderen = 20. = A.",
            nogSimpeler: "Helft van 40 = 20 = A.",
          },
        },
      },
      {
        q: "Staafdiagram huisdieren: hond 12, kat 18, vogel 4, vis 6. **Welk dier komt het minst voor**?",
        options: ["Vogel", "Hond", "Kat", "Vis"],
        answer: 0,
        wrongHints: [null, "Klopt — vogel (4) is de laagste van alle 4.", "Hond is 12 — kijk wie de minste heeft.", "Kat is 18 — dat is de meeste, niet de minste.", "Vis is 6 — vogel is met 4 nog minder."],
        uitlegPad: {
          stappen: [
            { titel: "'Minst' = laagste balk", tekst: "**'Komt het minst voor'** = het dier met het **kleinste aantal** = de **laagste balk** in de staaf-diagram." },
            { titel: "Vergelijk alle 4 huisdieren", tekst: "• Hond = 12\n• Kat = 18\n• **Vogel = 4** ← laagste!\n• Vis = 6\n\nGesorteerd van laag naar hoog: vogel (4) < vis (6) < hond (12) < kat (18).\n→ Vogel is met **4** het minst." },
            { titel: "Cito-instinker: vergelijk ALLE opties", tekst: "Veel kinderen kiezen het EERSTE lage getal dat ze zien. Maar je moet **ALLE 4** vergelijken — anders mis je iets lagers.\nVoorbeeld: je ziet vis (6) en denkt 'dat lijkt laag, kies vis'. Maar vogel is **nog lager** (4). Pas op dat je niet stopt bij het eerste 'best lijkende' antwoord.\n→ **Truc**: schrijf alle 4 getallen op in volgorde, dan pak de laagste." },
          ],
          woorden: [
            { woord: "minst", uitleg: "Het kleinste aantal." },
            { woord: "meest", uitleg: "Het grootste aantal." },
            { woord: "vergelijken", uitleg: "Twee of meer getallen naast elkaar zetten en bepalen welke groter/kleiner is." },
          ],
          theorie: "Cito-staafdiagram 'minst/meest':\n1. Lees alle 4 (of meer) balken af.\n2. Vergelijk volledig — alle getallen.\n3. Zoek extreme (laagste = minst, hoogste = meest).\n4. Pak het LABEL van die balk als antwoord (vraag 'welk dier?' → naam dier).\n\nNooit stoppen bij het eerste 'best lijkende' getal — alle opties checken.",
          voorbeelden: [
            { type: "stap", tekst: "Staaf sport-keuze: voetbal 20, hockey 15, tennis 8, zwemmen 12. Minst? → tennis (8)." },
            { type: "stap", tekst: "Staaf cijfers wiskunde-toets: 5= 2 keer, 6= 5 keer, 7= 8 keer, 8= 4 keer. Welk cijfer minst? → 5 (slechts 2 keer)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Sorteer alle 4 in je hoofd of op kladpapier van klein naar groot. Eerste = minst, laatste = meest. Veiliger dan 'in je hoofd vergelijken'." }],
          niveaus: {
            basis: "Vogel (4) is het laagst. = A.",
            simpeler: "Vergelijk: hond=12, kat=18, vogel=4, vis=6. Laagste = 4 = vogel. = A.",
            nogSimpeler: "Vogel = A.",
          },
        },
      },
      {
        q: "Lijngrafiek temperatuur. Bij Cito staat een **stijgende** lijn. Wat betekent dat?",
        options: ["Het wordt warmer", "Het wordt kouder", "Niets verandert", "De thermometer is stuk"],
        answer: 0,
        wrongHints: [null, "Klopt — stijgend = omhoog = hogere temperatuur.", "Kouder = lijn omlaag.", "Niets = vlakke lijn.", "Niet zonder reden te zeggen — neem aan dat de grafiek klopt."],
        uitlegPad: {
          stappen: [
            { titel: "'Stijgend' = omhoog = MEER", tekst: "Het woord **stijgend** komt van **'stijgen'** = omhoog gaan. Een stijgende lijn op een grafiek = **lijn gaat omhoog** = waarde wordt **groter**." },
            { titel: "Wat 'waarde groter' betekent bij temperatuur", tekst: "Bij een **temperatuur**-grafiek staat op de y-as het aantal **°C** (graden Celsius). Groter getal °C = **warmer**.\n→ Stijgende lijn = temperatuur stijgt = **het wordt warmer**." },
            { titel: "De 3 lijn-richtingen herhaling", tekst: "• **Stijgend** ↗ → groter / warmer / meer\n• **Dalend** ↘ → kleiner / kouder / minder\n• **Vlak** → → blijft hetzelfde\nAltijd 2 stappen: 1) richting kijken 2) link met onderwerp (temperatuur → warm/koud, geld → meer/minder)." },
          ],
          woorden: [
            { woord: "stijgend", uitleg: "Lijn omhoog, waarde wordt groter." },
            { woord: "dalend", uitleg: "Lijn omlaag, waarde wordt kleiner." },
          ],
          theorie: "Cito-vertaaltabel lijn-richting:\n• Temperatuur stijgt → het wordt warmer\n• Temperatuur daalt → het wordt kouder\n• Aantal mensen stijgt → meer mensen\n• Aantal mensen daalt → minder mensen\n• Bedrag stijgt → duurder\n• Bedrag daalt → goedkoper",
          voorbeelden: [
            { type: "stap", tekst: "Grafiek auto-prijs stijgend → auto wordt duurder." },
            { type: "stap", tekst: "Grafiek hoeveelheid regen dalend → minder regen." },
            { type: "stap", tekst: "Grafiek inwoners-aantal stad stijgend → meer inwoners." },
          ],
          basiskennis: [{ onderwerp: "Vertaling", uitleg: "Stijgend ≠ 'mooier' of 'beter'. Het zegt alleen: getal wordt groter. Wat dat betekent hangt af van het onderwerp." }],
          niveaus: {
            basis: "Stijgend = warmer. = A.",
            simpeler: "Stijgend = omhoog = méér graden = het wordt warmer. = A.",
            nogSimpeler: "Warmer = A.",
          },
        },
      },
      {
        q: "Tabel verkoop koekjes ma-vr: 5, 7, 9, 11, 13. **Patroon**?",
        options: ["Elke dag 2 meer", "Elke dag 3 meer", "Het neemt af", "Wisselt willekeurig"],
        answer: 0,
        wrongHints: [null, "Te veel — kijk: 5→7 is +2, 7→9 is +2, etc. Controleer.", "Het stijgt juist, niet daalt.", "Er zit een vast verschil — kijk goed."],
        uitlegPad: {
          stappen: [
            { titel: "Verschil per stap", tekst: "Ma → di: 7 − 5 = 2. Di → wo: 9 − 7 = 2. Telkens +2." },
          ],
          woorden: [{ woord: "patroon", uitleg: "Een vaste regel waarop getallen elkaar opvolgen." }],
          theorie: "Bij patroon-vragen altijd het verschil tussen 2 opeenvolgende getallen pakken.",
          voorbeelden: [{ type: "stap", tekst: "5, 7, 9, 11, 13 — telkens +2." }],
          basiskennis: [{ onderwerp: "Vast verschil", uitleg: "Als telkens hetzelfde getal erbij komt, is dat het patroon." }],
          niveaus: {
            basis: "Elke dag 2 meer. A.",
            simpeler: "Verschil tussen elke 2 dagen = 2. Dus elke dag 2 koekjes meer. = A.",
            nogSimpeler: "+2 per dag = A.",
          },
        },
      },
      { q: "Een taartdiagram laat zien: 50% rood, 25% blauw, 25% geel. Welke kleur heeft de grootste taartpunt?", options: ["Rood","Blauw","Geel","Allemaal even groot"], answer: 0, wrongHints: [null,"Klopt — 50% is helft van de hele cirkel, de grootste taartpunt.","Dat is maar een kwart.","Dat is ook maar een kwart.","25% en 50% zijn verschillend."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const grafiekenLezenPo = {
  id: "grafieken-lezen-po",
  title: "Grafieken lezen — staaf, lijn, taart (groep 6-8)",
  emoji: "📊",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Verwerken van informatie — tabellen en grafieken",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "procenten-po", title: "Procenten", niveau: "po-1F" },
  ],
  intro:
    "Grafieken lezen voor groep 6-8 — staafdiagram, lijngrafiek, taartdiagram, tabel ↔ grafiek. Cito-praktijksommen met temperatuur, regen, klas-aantallen, koekjes. ~15 min.",
  triggerKeywords: [
    "grafiek", "staaf", "lijn", "cirkel", "taart", "diagram",
    "tabel", "aflezen", "verschil", "temperatuur",
    "procent", "totaal", "patroon",
  ],
  chapters,
  steps,
};

export default grafiekenLezenPo;
