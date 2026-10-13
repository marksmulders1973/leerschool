// Leerpad: Grafieken lezen — staaf, lijn, cirkel — groep 6-8.
// Toets-onderdeel verwerken van informatie. Referentieniveau 1F.
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
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
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
      "Een **grafiek** is een **plaatje van getallen**. Het laat snel zien hoeveel iets is, of hoe iets verandert.\n\n**3 soorten die je vaak ziet bij de Doorstroomtoets**:\n• **Staafdiagram** — balkjes die laten zien hoe veel ergens van is.\n• **Lijngrafiek** — een lijn die laat zien hoe iets verandert (bv. door de tijd).\n• **Cirkeldiagram** *(ook wel taartdiagram)* — taart-stukjes die laten zien welke groep hoe groot is.\n\n**Wat je altijd moet lezen voor je iets afleest**:\n1. **Titel** — waar gaat de grafiek over?\n2. **Eenheid** — gaat het over aantallen, procenten, euro's, graden?\n3. **Assen** — wat staat onderaan (x-as), wat staat aan de zijkant (y-as)?\n4. **Legenda** — als er meerdere kleuren zijn, wat betekent welke kleur?\n\n**Voorbeeld**: een grafiek heet *'Aantal kinderen per klas'*. De getallen op de zijkant gaan van 0 tot 30. Onderaan staan klas 1, 2, 3, 4. Dan weet je: het gaat om hoeveel kinderen per klas.",
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
        wrongHints: [null, "Te beperkt — je moet weten waar de grafiek over gaat.", "Kleuren zijn handig, maar context is belangrijker.", "Een punt geeft geen overzicht."],
        uitlegPad: {
          stappen: [
            { titel: "Drie dingen vóór je gaat rekenen", tekst: "Bij elke Toets-grafiek check je eerst **3 dingen** voordat je een getal aankijkt:\n1. **Titel** — waar gaat de grafiek over?\n2. **Assen** — wat staat op x-as (onder) en y-as (zijkant)?\n3. **Eenheid** — meet de grafiek euro's, kinderen, °C, kilo's?" },
            { titel: "Waarom belangrijk?", tekst: "Zonder context zie je alleen getallen. Met context begrijp je wat ze betekenen. Een staaf van '40' kan betekenen: 40 mm regen, 40 kinderen, 40 euro of 40 °C — totaal verschillende dingen!" },
            { titel: "Toets-instinker", tekst: "Vergeet de **eenheid niet** in je antwoord. Op de Doorstroomtoets staat soms in 4 opties: '40', '40 mm', '40 cm', '40 kinderen'. Alleen het juiste getal ÉN de juiste eenheid is goed." },
          ],
          woorden: [
            { woord: "x-as", uitleg: "Horizontale as, onderaan de grafiek." },
            { woord: "y-as", uitleg: "Verticale as, zijkant van de grafiek." },
            { woord: "eenheid", uitleg: "Wat de getallen meten (mm, °C, kg, €, etc.)." },
          ],
          theorie: "Toets-volgorde grafiek lezen:\n1. Lees TITEL — waar gaat dit over?\n2. Lees ASSEN — wat is X (vaak tijd of categorie), wat is Y (waarde)?\n3. Check EENHEID — wat meet je?\n4. PAS DAN getal aflezen.",
          voorbeelden: [
            { type: "stap", tekst: "Titel 'Regen per maand'. X-as: jan-dec. Y-as: mm. Eenheid: mm. Nu weet je: deze grafiek toont mm regen per maand." },
            { type: "stap", tekst: "Zelfde getal '60' op een 'regen-mm'-grafiek = 60 mm regen. Op een 'kinderen'-grafiek = 60 kinderen. Eenheid maakt alles." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "T-A-E: Titel → Assen → Eenheid. Pas daarna getal aflezen." }],
          niveaus: {
            basis: "Titel + assen + eenheid.",
            simpeler: "Eerst lezen waar grafiek over gaat (titel) + wat de assen meten + welke eenheid. Pas daarna naar getallen kijken.",
            nogSimpeler: "Titel + assen + eenheid",
          },
        },
      },
      {
        q: "Welke grafiek toont **hoe iets verandert door de tijd**?",
        options: ["Lijngrafiek", "Cirkeldiagram", "Staafdiagram", "Tabel"],
        answer: 0,
        wrongHints: [null, "Cirkel toont verdeling op één moment, geen verandering.", "Staaf vergelijkt groepen op één moment, niet een verloop door de tijd.", "Tabel is getallen, geen plaatje van verandering."],
        uitlegPad: {
          stappen: [
            { titel: "Elk grafiektype heeft een doel", tekst: "Vier types grafiek, elk voor een andere vraag:\n• **Lijngrafiek** = verandering over **tijd** (temperatuur door de dag)\n• **Staafdiagram** = **vergelijken** van groepen (regen per maand)\n• **Cirkeldiagram** = **verdeling** van een geheel (sport-keuze in klas)\n• **Tabel** = exacte **getallen** netjes geordend" },
            { titel: "Lijngrafiek = tijd-verloop", tekst: "Een lijn loopt **van links naar rechts** = van vroeg naar laat. De **hoogte** is de waarde op dat moment. Stijgt de lijn? Dan wordt de waarde groter. Daalt? Wordt kleiner." },
            { titel: "Toets-truc grafiek herkennen", tekst: "Lees de vraag:\n• 'door de tijd' / 'op verschillende momenten' / 'wanneer' → **lijngrafiek**\n• 'vergelijk groep X met Y' → **staaf**\n• 'welk deel' / 'percentage van' → **cirkel/taart**\n• 'exact aantal van...' → **tabel**" },
          ],
          woorden: [
            { woord: "lijngrafiek", uitleg: "Toont verandering door de tijd." },
            { woord: "x-as", uitleg: "Onder, vaak tijd (uren/dagen/jaren)." },
            { woord: "y-as", uitleg: "Zijkant, waarde op dat moment." },
          ],
          theorie: "Toets-grafiek-keuze:\n• Tijd → LIJN\n• Vergelijken groepen → STAAF\n• Verdeling van geheel → CIRKEL\n• Exacte getallen → TABEL\nEerst onderscheid type, daarna aflezen.",
          voorbeelden: [
            { type: "stap", tekst: "Temperatuur door de dag = lijngrafiek (tijd op x-as)." },
            { type: "stap", tekst: "Babygewicht na maanden = lijngrafiek (maanden op x-as)." },
            { type: "stap", tekst: "Bevolking NL 1900-2020 = lijngrafiek (jaren op x-as)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lijngrafiek = de enige die tijd-verloop laat zien. Andere types tonen momentopname." }],
          niveaus: {
            basis: "Lijngrafiek = verandering door de tijd.",
            simpeler: "Een lijn loopt van vroeg naar laat. Zo zie je hoe iets stijgt of daalt door tijd.",
            nogSimpeler: "Lijngrafiek",
          },
        },
      },
      {
        q: "Welke grafiek laat goed zien **welk deel van het totaal** iets is?",
        options: ["Cirkeldiagram", "Lijngrafiek", "Staafdiagram", "Tijdlijn"],
        answer: 0,
        wrongHints: [null, "Lijn toont verandering, geen verdeling.", "Staaf vergelijkt hoogtes, maar laat niet in één oogopslag zien hoe groot een stuk van het geheel is.", "Tijdlijn is voor jaartallen, geen verdeling."],
        uitlegPad: {
          stappen: [
            { titel: "Cirkeldiagram = de hele taart", tekst: "Een **cirkeldiagram** (ook **taartdiagram** of **pie chart**) is een cirkel verdeeld in stukken. De hele cirkel = **100%** = het geheel. Elk stuk is een **percentage** daarvan." },
            { titel: "Waarom cirkel beter voor 'deel van totaal'?", tekst: "Met cirkel zie je **meteen visueel**: groot stuk = veel, klein stuk = weinig. Bij een staafdiagram zie je wel hoogte, maar moet je optellen om te weten of het 'veel van het geheel' is.\n\nVoorbeeld: 'welke sport is populairst in klas?' → cirkel toont direct het grootste stuk. Staaf moet je vergelijken." },
            { titel: "Wanneer GEEN cirkel?", tekst: "Cirkel werkt NIET goed voor:\n• **Verandering over tijd** → gebruik lijn\n• **Veel categorieën (10+)** → wordt te druk → gebruik staaf\n• **Exact getal lezen** → tabel beter\nCirkel werkt het best voor 3-7 categorieën die samen 100% vormen." },
          ],
          woorden: [
            { woord: "cirkeldiagram", uitleg: "Cirkel verdeeld in % van een geheel." },
            { woord: "taartdiagram", uitleg: "Synoniem voor cirkeldiagram." },
            { woord: "100%", uitleg: "Het geheel — alle stukken samen." },
          ],
          theorie: "Toets-grafiek-keuze:\n• Tijd-verloop → LIJN\n• Vergelijken groepen → STAAF\n• Deel van geheel → CIRKEL\n• Exacte getallen → TABEL\nKern: bij vragen over 'percentage' of 'deel-van' → altijd cirkel.",
          voorbeelden: [
            { type: "stap", tekst: "Sport-keuze in klas (voetbal 50%, hockey 25%, zwemmen 25%) = cirkel." },
            { type: "stap", tekst: "Verkiezingsuitslag per partij (partij A 24%, partij B 16%, enzovoort) = cirkel." },
            { type: "stap", tekst: "Budget gezin (eten 30%, wonen 40%, vrije tijd 10%, sparen 20%) = cirkel." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag 'welk deel?' of 'welk percentage?' → cirkeldiagram is altijd de beste keuze." }],
          niveaus: {
            basis: "Cirkeldiagram = deel van totaal.",
            simpeler: "Cirkel is een hele taart (= 100%) verdeeld in stukken. Elk stuk = % van het geheel.",
            nogSimpeler: "Cirkeldiagram",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is een **grafiek**?",
        options: [
          "Een plaatje van getallen",
          "Een lijst met moeilijke woorden",
          "Een tekening van een landschap",
          "Een verhaal over een getal",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Gaat een grafiek over woorden of over hoeveel iets is?",
          null,
          "Lees je een grafiek zoals een verhaal, of kijk je ernaar?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Grafiek = plaatje van getallen",
              tekst: "Een **grafiek** laat getallen zien als een **plaatje**. Zo zie je in één keer hoeveel iets is, of hoe iets verandert.",
            },
            {
              titel: "Waarom een plaatje?",
              tekst: "Een rij getallen moet je één voor één lezen. Op een plaatje zie je meteen wat groot is en wat klein is.",
            },
          ],
          woorden: [
            {
              woord: "grafiek",
              uitleg: "Een plaatje dat getallen laat zien.",
            },
            {
              woord: "getal",
              uitleg: "Hoeveel iets is.",
            },
          ],
          theorie: "Een grafiek = getallen als plaatje. Soorten: staafdiagram, lijngrafiek, cirkeldiagram.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Een staafdiagram met hoge en lage balkjes laat zien welke groep het meest heeft.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Grafiek = getallen, maar dan om naar te kijken.",
            },
          ],
          niveaus: {
            basis: "Een plaatje van getallen.",
            simpeler: "Een grafiek laat getallen zien als een plaatje, zodat je snel ziet hoeveel iets is.",
            nogSimpeler: "Plaatje van getallen",
          },
        },
      },
      {
        q: "Bij een grafiek staat aan de zijkant **°C**. Waar gaat de grafiek dan over?",
        options: ["Temperatuur", "Regen", "Gewicht", "Geld"],
        answer: 0,
        wrongHints: [
          null,
          "Regen meet je in millimeters (mm). Welke eenheid staat er hier?",
          null,
          "Geld schrijf je met €. Wat betekent °C?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst de eenheid lezen",
              tekst: "De **eenheid** vertelt wat de getallen meten. Lees die altijd vóór je een getal afleest.",
            },
            {
              titel: "°C = graden Celsius",
              tekst: "**°C** betekent **graden Celsius**. Daarmee meet je hoe warm of koud het is: de **temperatuur**.",
            },
          ],
          woorden: [
            {
              woord: "eenheid",
              uitleg: "Wat de getallen meten, zoals mm, kg, € of °C.",
            },
            {
              woord: "°C",
              uitleg: "Graden Celsius, voor temperatuur.",
            },
          ],
          theorie: "Eenheden die je vaak ziet:\n• °C → temperatuur\n• mm → regen\n• kg → gewicht\n• € → geld",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Zijkant in mm → de grafiek gaat over regen.",
            },
            {
              type: "stap",
              tekst: "Zijkant in € → de grafiek gaat over geld.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eenheid lezen = weten waar de getallen over gaan.",
            },
          ],
          niveaus: {
            basis: "°C = temperatuur.",
            simpeler: "°C betekent graden Celsius. Daarmee meet je hoe warm het is.",
            nogSimpeler: "Temperatuur",
          },
        },
      },
      {
        q: "Een grafiek heet **'Gewicht van een puppy per week'**. Welke eenheid past bij de getallen aan de zijkant?",
        options: ["Kilogram (kg)", "Graden (°C)", "Millimeter (mm)", "Euro (€)"],
        answer: 0,
        wrongHints: [null, "Gaat de titel over hoe warm iets is?", null, "Gaat de titel over geld?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Lees de titel",
              tekst: "De titel zegt: **gewicht** van een puppy. Je wilt dus weten hoe **zwaar** de puppy is.",
            },
            {
              titel: "Welke eenheid hoort bij gewicht?",
              tekst: "Gewicht meet je in **kilogram (kg)**. °C is voor temperatuur, mm voor regen, € voor geld.",
            },
          ],
          woorden: [
            {
              woord: "titel",
              uitleg: "Het kopje boven de grafiek: waar gaat hij over?",
            },
            {
              woord: "kilogram",
              uitleg: "Eenheid voor gewicht (kg).",
            },
          ],
          theorie: "Titel → eenheid:\n• gewicht → kg\n• temperatuur → °C\n• regen → mm\n• prijs → €",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Temperatuur in de klas' → °C.",
            },
            {
              type: "stap",
              tekst: "'Prijs van een ijsje' → €.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Titel lezen: waar gaat het over? Dan weet je ook de eenheid.",
            },
          ],
          niveaus: {
            basis: "Gewicht = kilogram (kg).",
            simpeler: "De grafiek gaat over hoe zwaar de puppy is. Gewicht meet je in kg.",
            nogSimpeler: "kg",
          },
        },
      },
      {
        q: "Een grafiek heet **'Aantal bezoekers van het zwembad per dag'**. Waar gaan de getallen over?",
        options: [
          "Hoeveel mensen er die dag kwamen",
          "Hoe warm het water die dag was",
          "Hoeveel een kaartje die dag kostte",
          "Hoe diep het zwembad die dag was",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Staat er in de titel iets over warm of koud?",
          null,
          "Lees de titel nog eens: welk woord zegt waar het om gaat?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "De titel vertelt het onderwerp",
              tekst: "Lees de titel: **aantal bezoekers** per dag. Het gaat dus om **hoeveel mensen** er kwamen.",
            },
            {
              titel: "Woorden in de titel",
              tekst: "'Aantal' = hoeveel. 'Bezoekers' = mensen die komen. 'Per dag' = voor elke dag een getal.",
            },
          ],
          woorden: [
            {
              woord: "titel",
              uitleg: "Het kopje boven de grafiek.",
            },
            {
              woord: "bezoeker",
              uitleg: "Iemand die ergens naartoe komt.",
            },
          ],
          theorie: "Titel eerst: die zegt waar elk getal over gaat. Pas daarna de getallen aflezen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Aantal boeken per kind' → elk getal = hoeveel boeken één kind heeft.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Lees de titel woord voor woord: wat wordt er geteld?",
            },
          ],
          niveaus: {
            basis: "Het aantal mensen per dag.",
            simpeler: "De titel zegt 'aantal bezoekers'. Dus elk getal is hoeveel mensen er die dag kwamen.",
            nogSimpeler: "Hoeveel mensen",
          },
        },
      },
      {
        q: "Welke grafiek bestaat uit **balkjes** naast elkaar?",
        options: ["Staafdiagram", "Lijngrafiek", "Cirkeldiagram", "Taartdiagram"],
        answer: 0,
        wrongHints: [null, "Die grafiek heeft punten met een lijn ertussen.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Drie soorten herkennen",
              tekst: "• **Staafdiagram** = balkjes naast elkaar\n• **Lijngrafiek** = een lijn door punten\n• **Cirkeldiagram** (taartdiagram) = een rondje in stukken",
            },
            {
              titel: "Balkje = staaf",
              tekst: "Een balkje heet ook een **staaf**. Daarom heet deze grafiek een **staafdiagram**.",
            },
          ],
          woorden: [
            {
              woord: "staafdiagram",
              uitleg: "Grafiek met balkjes.",
            },
            {
              woord: "staaf",
              uitleg: "Ander woord voor balkje.",
            },
          ],
          theorie: "Herken het type aan de vorm: balkjes → staaf, lijn → lijngrafiek, rondje → cirkel/taart.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Hoge balk = veel, lage balk = weinig.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Staaf = balk. Balkjes zien = staafdiagram.",
            },
          ],
          niveaus: {
            basis: "Staafdiagram.",
            simpeler: "Een balkje heet ook een staaf. Een grafiek met balkjes is dus een staafdiagram.",
            nogSimpeler: "Staafdiagram",
          },
        },
      },
    ],
  },

  // STAP 2: Staafdiagram lezen
  {
    title: "Staafdiagram lezen",
    explanation:
      "Een **staafdiagram** heeft balken naast elkaar. Elke balk is een groep. De hoogte van de balk vertelt het aantal of de hoeveelheid.\n\n**Stappenplan**:\n1. Zoek de balk waar de vraag over gaat *(bv. 'maandag')*.\n2. Kijk hoe hoog die balk is.\n3. Lees het getal aan de y-as (de zijkant) af.\n4. Schrijf het op + eenheid *(bv. '12 kinderen', '€20', '30 °C')*.\n\n**Voorbeeld**: een staafdiagram van regen-millimeters per maand. De balk voor **maart** komt tot bij **40 mm**.\n→ Antwoord: in maart viel **40 mm regen**.\n\n**Verschil aflezen — 2 balken**:\n*'Hoeveel meer kinderen op donderdag dan op maandag?'*\n• Donderdag: 30 kinderen.\n• Maandag: 22 kinderen.\n• Verschil: 30 − 22 = **8 kinderen**.\n\n**Toets-truc**:\n• Bij vragen 'hoeveel meer' / 'hoeveel minder' → **aftrekken**.\n• Bij vragen 'in totaal' → **optellen**.\n• Bij 'hoeveel keer zo veel' → **delen**.",
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
        wrongHints: [null, "Dat is januari — kijk goed naar de maart-balk.", "Dat is februari.", "Dat is april."],
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
            basis: "Maart-balk = 40 mm.",
            simpeler: "Zoek 'mrt' onderaan. Kijk hoe hoog die balk komt → 40 mm.",
            nogSimpeler: "Maart = 40 mm",
          },
        },
      },
      {
        q: "Klas: ma 22, di 18, wo 26, do 30, vr 24 kinderen. **Hoeveel kinderen meer** op **donderdag** dan op **dinsdag**?",
        options: ["12 kinderen", "6 kinderen", "8 kinderen", "48 kinderen"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is donderdag min vrijdag. Welke twee dagen noemt de vraag?", "Te weinig — dat is donderdag min maandag. Welke twee dagen noemt de vraag?", "Te veel — heb je opgeteld? De vraag is 'hoeveel meer' = aftrekken."],
        uitlegPad: {
          stappen: [
            { titel: "Verschil = aftrekken", tekst: "Donderdag 30 kinderen − dinsdag 18 kinderen = 12 kinderen meer." },
          ],
          woorden: [{ woord: "verschil", uitleg: "Hoeveel meer of minder de ene balk is dan de andere." }],
          theorie: "'Hoeveel meer' bij de Doorstroomtoets = altijd aftrekken (groot − klein).",
          voorbeelden: [{ type: "stap", tekst: "Donderdag = 30, dinsdag = 18. 30 − 18 = 12. Dus 12 kinderen meer." }],
          basiskennis: [{ onderwerp: "Niet optellen", uitleg: "Optellen geeft 'totaal'. Aftrekken geeft 'verschil'." }],
          niveaus: {
            basis: "30 − 18 = 12 kinderen.",
            simpeler: "Vergelijk donderdag (30) met dinsdag (18). Verschil = 30 − 18 = 12.",
            nogSimpeler: "12 kinderen",
          },
        },
      },
      {
        q: "Zelfde klas. **Totaal aantal kinderen** in de hele week?",
        options: ["120 kinderen", "100 kinderen", "30 kinderen", "150 kinderen"],
        answer: 0,
        wrongHints: [null, "Te weinig — heb je alle 5 dagen meegeteld? 22+18+26+30+24.", "Te weinig — dat is alleen donderdag.", "Te veel — controleer optelling."],
        uitlegPad: {
          stappen: [
            { titel: "'Totaal' = optellen", tekst: "Bij de Doorstroomtoets: woord **'totaal'** of **'samen'** of **'in totaal'** → ALLE balken bij elkaar **optellen**." },
            { titel: "Tel alle 5 dagen op", tekst: "Maandag 22 + dinsdag 18 + woensdag 26 + donderdag 30 + vrijdag 24 = **120 kinderen**." },
            { titel: "Slim optellen-truc", tekst: "Niet domweg achter elkaar. Maak slimme paren:\n• 22 + 18 = 40 (mooi rond)\n• 26 + 24 = 50 (mooi rond)\n• Subtotaal: 40 + 50 = 90\n• Plus donderdag: 90 + 30 = **120**.\nSneller + minder kans op fouten." },
          ],
          woorden: [
            { woord: "totaal / in totaal", uitleg: "Signaalwoord voor OPTELLEN bij de Doorstroomtoets." },
            { woord: "verschil / hoeveel meer", uitleg: "Signaalwoord voor AFTREKKEN." },
          ],
          theorie: "Toets-signaalwoorden bij grafiekvragen:\n• 'totaal' / 'samen' / 'in totaal' → +\n• 'verschil' / 'hoeveel meer/minder' → −\n• 'gemiddeld' → som ÷ aantal\n• 'hoeveel keer zo veel' → ÷",
          voorbeelden: [
            { type: "stap", tekst: "5 maanden regen totaal: 60+50+40+70+80 = 300 mm." },
            { type: "stap", tekst: "3 vakken score-gemiddelde: (8+7+6)÷3 = 21÷3 = 7." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Signaalwoord lezen vóór rekenen. 'Totaal' = ALLES bij elkaar optellen." }],
          niveaus: {
            basis: "120 kinderen (22+18+26+30+24).",
            simpeler: "Tel alle 5 balken op: 22+18+26+30+24 = 120 kinderen.",
            nogSimpeler: "120",
          },
        },
      },
      {
        q: "Zelfde klas. **Op welke dag** waren er **de meeste kinderen**?",
        options: ["Donderdag", "Maandag", "Woensdag", "Vrijdag"],
        answer: 0,
        wrongHints: [null, "Dat is 22 — zoek het hoogste getal.", "Dat is 26 — hoger bestaat nog.", "Dat is 24 — hoger bestaat nog."],
        uitlegPad: {
          stappen: [
            { titel: "'Meeste' = hoogste getal", tekst: "Het signaalwoord **'meeste'** vraagt om het **hoogste getal**. Bij een staafdiagram = de **langste/hoogste balk**." },
            { titel: "Vergelijk de 5 dagen", tekst: "Lees alle waardes:\n• ma = 22\n• di = 18\n• wo = 26\n• **do = 30** ← hoogste!\n• vr = 24\nDe hoogste = 30, dat is **donderdag**." },
            { titel: "Toets-instinker: GETAL vs DAG", tekst: "Vraag is: **'Op welke DAG'** — dus antwoord = de **dagnaam** (donderdag), NIET het getal (30).\nCito test of je de juiste taal-vorm in de opties pakt:\n• 'Op welke dag?' → dag-naam\n• 'Hoeveel kinderen?' → getal\n• 'Hoeveel meer dan ma?' → verschil-getal\nVerkeerde vraag-vorm aanvinken = punt kwijt, ook al klopt je redenering." },
          ],
          woorden: [
            { woord: "meeste", uitleg: "Het hoogste aantal, grootste hoeveelheid." },
            { woord: "minste", uitleg: "Het laagste aantal, kleinste hoeveelheid." },
          ],
          theorie: "Toets-signaalwoorden bij staaf:\n• 'meeste' / 'hoogste' / 'grootste' → hoogste balk\n• 'minste' / 'laagste' / 'kleinste' → laagste balk\n• 'op welke dag' → antwoord = dagnaam (NIET getal)\n• 'hoeveel' → antwoord = getal\n\n3 stappen: 1) bepaal extreme (max/min) 2) lees waarde 3) check wat de vraag VRAAGT (dag of getal).",
          voorbeelden: [
            { type: "stap", tekst: "Staaf verkoop ijsjes ma-vr: 12-8-18-22-30. Welke dag minst? → di (8). Hoeveel op vr? → 30." },
            { type: "stap", tekst: "Staaf regen jan-apr: 60-80-40-50. Welke maand meest? → feb (80). Hoeveel mm in mrt? → 40 mm." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag-startwoord bepaalt antwoord-vorm: 'Welke...' = naam/categorie. 'Hoeveel...' = getal. 'Wanneer...' = tijd." },],
          niveaus: {
            basis: "Donderdag = 30 = hoogste.",
            simpeler: "Zoek hoogste getal: 30 op donderdag. Vraag: 'welke dag?' → antwoord = donderdag.",
            nogSimpeler: "Donderdag",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Staafdiagram 'Gelezen boeken': Sam 7, Noor 11, Ali 4, Fien 9. Hoeveel boeken las **Fien**?",
        options: ["9 boeken", "7 boeken", "11 boeken", "4 boeken"],
        answer: 0,
        wrongHints: [null, "Dat is de balk van Sam. Zoek de naam Fien.", null, "Dat is de balk van Ali."],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek de juiste balk",
              tekst: "Zoek onderaan de naam **Fien**. Dat is de vierde balk.",
            },
            {
              titel: "Lees de hoogte af",
              tekst: "De balk van Fien komt tot **9**. Fien las dus **9 boeken**.",
            },
          ],
          woorden: [
            {
              woord: "staafdiagram",
              uitleg: "Grafiek met balken. Hoe hoger, hoe meer.",
            },
          ],
          theorie: "Staafdiagram aflezen:\n1. Zoek de balk.\n2. Kijk hoe hoog hij is.\n3. Lees het getal af + eenheid.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Noor: 11 boeken. Ali: 4 boeken.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Wijs eerst de goede naam aan, pas dan het getal lezen.",
            },
          ],
          niveaus: {
            basis: "Fien = 9 boeken.",
            simpeler: "Zoek Fien onderaan. Haar balk komt tot 9.",
            nogSimpeler: "9 boeken",
          },
        },
      },
      {
        q: "Staafdiagram fietsen in de stalling: ma 35, di 42, wo 28, do 40. Hoeveel fietsen **minder** op woensdag dan op dinsdag?",
        options: ["14 fietsen", "70 fietsen", "12 fietsen", "7 fietsen"],
        answer: 0,
        wrongHints: [
          null,
          "'Hoeveel minder' is een verschil. Heb je opgeteld?",
          null,
          "Welke twee dagen noemt de vraag?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "'Hoeveel minder' = aftrekken",
              tekst: "Bij 'hoeveel minder' zoek je het **verschil**. Dat is **aftrekken**: groot − klein.",
            },
            {
              titel: "Reken het uit",
              tekst: "Dinsdag 42 − woensdag 28 = **14 fietsen** minder.",
            },
          ],
          woorden: [
            {
              woord: "verschil",
              uitleg: "Hoeveel meer of minder de ene balk is dan de andere.",
            },
          ],
          theorie: "Signaalwoorden:\n• hoeveel meer / minder → −\n• in totaal / samen → +\n• hoeveel keer zo veel → ÷",
          voorbeelden: [
            {
              type: "stap",
              tekst: "42 − 28: eerst 42 − 20 = 22, dan 22 − 8 = 14.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Pak alleen de twee dagen uit de vraag.",
            },
          ],
          niveaus: {
            basis: "42 − 28 = 14 fietsen.",
            simpeler: "Dinsdag 42, woensdag 28. Het verschil is 42 − 28 = 14.",
            nogSimpeler: "14 fietsen",
          },
        },
      },
      {
        q: "Staafdiagram verkochte broodjes: kaas 24, ham 8, ei 12, tonijn 6. Hoeveel **keer zo veel** kaas als ham?",
        options: ["3 keer", "16 keer", "2 keer", "4 keer"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het verschil. 'Keer zo veel' vraagt om een andere som.",
          null,
          "Welke twee broodjes noemt de vraag?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "'Keer zo veel' = delen",
              tekst: "Bij **hoeveel keer zo veel** deel je het grote getal door het kleine.",
            },
            {
              titel: "Reken het uit",
              tekst: "Kaas 24 ÷ ham 8 = **3**. Er gingen 3 keer zo veel kaasbroodjes weg.",
            },
            {
              titel: "Controle",
              tekst: "3 × 8 = 24. Klopt!",
            },
          ],
          woorden: [
            {
              woord: "keer zo veel",
              uitleg: "Hoe vaak het kleine getal in het grote past.",
            },
          ],
          theorie: "• hoeveel meer → aftrekken\n• hoeveel keer zo veel → delen",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Balk A = 20, balk B = 5. 20 ÷ 5 = 4 keer zo veel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Check met keer: antwoord × klein getal = groot getal.",
            },
          ],
          niveaus: {
            basis: "24 ÷ 8 = 3 keer.",
            simpeler: "Hoe vaak past 8 in 24? 8, 16, 24 → 3 keer.",
            nogSimpeler: "3 keer",
          },
        },
      },
      {
        q: "Staafdiagram punten per team: rood 45, geel 38, groen 52, blauw 29. Hoeveel punten hebben **geel en blauw samen**?",
        options: ["67 punten", "83 punten", "9 punten", "81 punten"],
        answer: 0,
        wrongHints: [
          null,
          "Welke twee teams noemt de vraag?",
          null,
          "Kijk nog eens: zijn dit de balken van geel en blauw?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "'Samen' = optellen",
              tekst: "Het woord **samen** betekent: **optellen**.",
            },
            {
              titel: "Reken het uit",
              tekst: "Geel 38 + blauw 29 = **67 punten**.",
            },
          ],
          woorden: [
            {
              woord: "samen",
              uitleg: "Signaalwoord voor optellen.",
            },
          ],
          theorie: "Signaalwoorden:\n• samen / in totaal → +\n• hoeveel meer / minder → −",
          voorbeelden: [
            {
              type: "stap",
              tekst: "38 + 29: eerst 38 + 30 = 68, dan 1 eraf = 67.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tel alleen de balken op die in de vraag staan.",
            },
          ],
          niveaus: {
            basis: "38 + 29 = 67 punten.",
            simpeler: "Geel heeft 38, blauw 29. Samen: 38 + 29 = 67.",
            nogSimpeler: "67 punten",
          },
        },
      },
      {
        q: "Staafdiagram 'Uren tv kijken per week'. De balk van **Jesse** is het **hoogst**. Wat betekent dat?",
        options: [
          "Jesse keek de meeste uren tv",
          "Jesse keek de minste uren tv",
          "Jesse is het langste kind",
          "Jesse is het oudste kind",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Betekent een hoge balk veel of weinig?",
          null,
          "Lees de titel: wat wordt er geteld?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Hoogte = hoeveelheid",
              tekst: "Bij een staafdiagram vertelt de **hoogte** van de balk **hoeveel** het is. Hoge balk = veel.",
            },
            {
              titel: "Wat wordt er geteld?",
              tekst: "De titel zegt: **uren tv kijken per week**. De hoogste balk = de meeste uren tv in die week.",
            },
          ],
          woorden: [
            {
              woord: "staafdiagram",
              uitleg: "Grafiek met balken. Hoe hoger, hoe meer.",
            },
          ],
          theorie: "Lees de titel: die zegt wat de hoogte van een balk betekent.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Staafdiagram 'Gegeten appels': hoogste balk = de meeste appels gegeten.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Hoogste balk = het meest. Laagste balk = het minst.",
            },
          ],
          niveaus: {
            basis: "Hoogste balk = meeste uren tv.",
            simpeler: "Een hoge balk betekent veel. De titel gaat over uren tv. Dus Jesse keek het meest.",
            nogSimpeler: "Meeste uren tv",
          },
        },
      },
    ],
  },

  // STAP 3: Lijngrafiek lezen
  {
    title: "Lijngrafiek lezen",
    explanation:
      "Een **lijngrafiek** laat zien hoe iets verandert. Bijvoorbeeld: temperatuur over de dag, of het gewicht van een baby per maand.\n\n**Wat je leest**:\n• **x-as** (onderaan) = de tijd — uur, dag, week, jaar.\n• **y-as** (zijkant) = de waarde — temperatuur, aantal, prijs, gewicht.\n• **De lijn** verbindt de meetpunten.\n\n**Stijgen of dalen?**:\n• Lijn gaat **omhoog** → iets wordt **meer/hoger**.\n• Lijn gaat **omlaag** → iets wordt **minder/lager**.\n• Lijn blijft **gelijk** → er verandert **niets**.\n\n**Voorbeeld**: een grafiek van de temperatuur van 's morgens tot 's avonds.\n• Om 8 uur: 12 °C.\n• Om 14 uur: 22 °C.\n• Om 20 uur: 16 °C.\n→ Tussen 8 en 14 uur: lijn stijgt → het werd **warmer**.\n→ Tussen 14 en 20 uur: lijn daalt → het werd **kouder**.\n\n**Toets-truc — Wanneer was het meest / minst?**:\n• Zoek het **hoogste punt** = wanneer was het MEEST.\n• Zoek het **laagste punt** = wanneer was het MINST.\n• **Steilste stijging** = grootste toename.",
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
        wrongHints: [null, "Dat is het koudst, niet het warmst.", "Niet het warmst — kijk naar het hoogste punt.", "Niet gegeven in de vraag."],
        uitlegPad: {
          stappen: [
            { titel: "'Warmst' = hoogste temperatuur", tekst: "Het woord **'warmst'** vraagt om het **HOOGSTE getal** in graden Celsius. Bij een lijngrafiek = het **HOOGSTE PUNT** op de y-as." },
            { titel: "Vergelijk de 3 waardes", tekst: "• 8u → 12°C\n• 14u → **22°C** ← hoogste!\n• 20u → 16°C\n→ 14u heeft de hoogste waarde, dus 14u is het warmst." },
            { titel: "Signaalwoorden temperatuur", tekst: "De toets gebruikt veel signaalwoorden bij temperatuur-vragen:\n• **'warmst'** / **'hoogste'** / **'top'** → grootste waarde → ↗\n• **'koudst'** / **'laagste'** / **'dieptepunt'** → kleinste waarde → ↘\n• **'wanneer'** → vraag om TIJD, antwoord = uur/dag\n• **'hoe warm'** → vraag om WAARDE, antwoord = °C" },
          ],
          woorden: [
            { woord: "hoogste punt", uitleg: "Toppunt van een lijngrafiek = grootste waarde." },
            { woord: "laagste punt", uitleg: "Dieptepunt = kleinste waarde." },
          ],
          theorie: "Toets-truc lijngrafiek extremen:\n• Hoogste punt → maximum-waarde\n• Laagste punt → minimum-waarde\n• Vraagt 'wanneer' → antwoord = tijd (x-as)\n• Vraagt 'hoe warm/veel' → antwoord = waarde (y-as)",
          voorbeelden: [
            { type: "stap", tekst: "Verkoopgrafiek: 'Wanneer meest verkocht?' → kijk hoogste staaf/punt → noem die dag/maand." },
            { type: "stap", tekst: "Bevolkingsgrafiek: 'Wanneer minst inwoners?' → kijk laagste punt → noem dat jaar." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Warmst/hoogste/meest = hoogste punt. Koudst/laagste/minst = laagste punt. Vraag 'wanneer?' → tijd antwoorden, niet de waarde." }],
          niveaus: {
            basis: "14u (22°C is hoogste).",
            simpeler: "Zoek het hoogste getal: 22°C. Dat hoort bij 14u. Dus om 14u is het 't warmst.",
            nogSimpeler: "14u",
          },
        },
      },
      {
        q: "Zelfde grafiek. Hoeveel **graden warmer** om 14u dan om 8u?",
        options: ["10 °C", "12 °C", "22 °C", "8 °C"],
        answer: 0,
        wrongHints: [null, "Dat is de temperatuur om 8u zelf. Je zoekt het verschil.", "Dat is de temperatuur om 14u zelf. Je zoekt het verschil.", "Te weinig — lees beide temperaturen nog eens goed af."],
        uitlegPad: {
          stappen: [
            { titel: "Verschil = aftrekken", tekst: "14u = 22 °C. 8u = 12 °C. Verschil = 22 − 12 = 10 °C." },
          ],
          woorden: [{ woord: "°C", uitleg: "Graden Celsius — de eenheid voor temperatuur." }],
          theorie: "Bij Toets-temperatuur-vragen: pak de 2 waardes en trek af.",
          voorbeelden: [{ type: "stap", tekst: "22 °C − 12 °C = 10 °C warmer." }],
          basiskennis: [{ onderwerp: "Eenheid mee", uitleg: "Schrijf °C bij het antwoord." }],
          niveaus: {
            basis: "22 − 12 = 10 °C.",
            simpeler: "Om 14u is het 22 °C, om 8u is het 12 °C. 22 − 12 = 10 °C warmer.",
            nogSimpeler: "10 °C",
          },
        },
      },
      {
        q: "Een lijn die de hele dag **vlak** blijft betekent ... ?",
        options: ["Er verandert niets", "Het wordt warmer", "Het wordt kouder", "De grafiek is fout"],
        answer: 0,
        wrongHints: [null, "Warmer = lijn omhoog. Vlak ≠ omhoog.", "Kouder = lijn omlaag. Vlak ≠ omlaag.", "Vlak is een normale uitkomst — 'geen verandering'."],
        uitlegPad: {
          stappen: [
            { titel: "Lijn-interpretatie in 3 vormen", tekst: "Bij een lijngrafiek is de **richting** van de lijn alles:\n• **Omhoog ↗** = waarde stijgt (warmer / meer / hoger)\n• **Omlaag ↘** = waarde daalt (kouder / minder / lager)\n• **Vlak →** = waarde verandert NIET (constant / blijft hetzelfde)" },
            { titel: "Vlakke lijn = stabiel", tekst: "Een vlakke lijn betekent: **er gebeurt niets nieuws**. Voorbeelden:\n• Temperatuur blijft 20 °C de hele middag → vlakke lijn op 20.\n• Aantal kinderen in klas blijft 25 elke dag → vlak op 25." },
            { titel: "Combinatie van richtingen lezen", tekst: "Bij de Doorstroomtoets krijg je vaak grafieken die **eerst stijgen, dan vlak, dan dalen**. Tip:\n• Lees per stuk: stijgt het, daalt het, of vlak?\n• Onderscheid de fases — vaak komt er een vraag over één specifieke fase." },
          ],
          woorden: [
            { woord: "stijgend", uitleg: "Lijn gaat omhoog = waarde wordt groter." },
            { woord: "dalend", uitleg: "Lijn gaat omlaag = waarde wordt kleiner." },
            { woord: "constant / vlak", uitleg: "Lijn blijft hetzelfde = waarde verandert niet." },
          ],
          theorie: "Toets-richting bij lijngrafiek:\n• ↗ omhoog = stijgt = MEER\n• ↘ omlaag = daalt = MINDER\n• → vlak = constant = HETZELFDE\nLees de richting eerst, dan getal aflezen.",
          voorbeelden: [
            { type: "stap", tekst: "Grafiek 'aantal kinderen op overblijf' blijft hele week op 25 = klas is constant elke dag." },
            { type: "stap", tekst: "Grafiek 'temperatuur' stijgt 8u-14u, dan vlak 14u-17u, dan daalt → middag-warm, vlak in piek, avond koeler." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vlakke lijn = 'er verandert niets'. Niet 'fout' of 'leeg' — gewoon stabiel." }],
          niveaus: {
            basis: "Er verandert niets (vlak = constant).",
            simpeler: "Lijn omhoog = stijgt. Lijn omlaag = daalt. Lijn vlak = blijft hetzelfde.",
            nogSimpeler: "Vlak = niets verandert",
          },
        },
      },
      {
        q: "Wat lees je af aan **de y-as** (zijkant)?",
        options: ["De waarde / hoeveelheid", "De tijd / de dag", "De legenda", "De titel"],
        answer: 0,
        wrongHints: [null, "Tijd staat op de x-as (onderaan), niet de zijkant.", "Legenda is apart.", "Titel staat bovenaan."],
        uitlegPad: {
          stappen: [
            { titel: "X-as horizontaal, Y-as verticaal", tekst: "Elke grafiek heeft 2 assen:\n• **X-as** = horizontaal (onderaan) → vaak **tijd** of **categorieën** (dagen, maanden, namen)\n• **Y-as** = verticaal (zijkant) → altijd de **waarde** of **hoeveelheid**" },
            { titel: "Y-as = wat je meet", tekst: "De y-as vertelt **HOEVEEL**. Bij regen-grafiek: mm. Bij temperatuur: °C. Bij kinderen: aantal. Bij geld: €.\n\nKijk altijd naar de **eenheid op de y-as** voordat je een getal afleest." },
            { titel: "Aflezen — recht naar boven", tekst: "Om een waarde af te lezen:\n1. Vind het punt of de balk op de **x-as** (bv. maandag).\n2. Ga **recht omhoog** tot de top.\n3. Lees vanuit dat punt **links** op de y-as af.\n4. Schrijf op + eenheid." },
          ],
          woorden: [
            { woord: "x-as", uitleg: "Horizontaal, onderaan. Vaak tijd of categorie." },
            { woord: "y-as", uitleg: "Verticaal, zijkant. De waarde / hoeveelheid." },
            { woord: "legenda", uitleg: "Aparte uitleg-blok bij grafiek (= NIET op as)." },
          ],
          theorie: "Toets-truc as-verwarring voorkomen: 'Y staat als een vork omhoog' = verticaal. 'X loopt als een streep' = horizontaal. Y altijd waarde, X altijd categorie/tijd.",
          voorbeelden: [
            { type: "stap", tekst: "Temperatuur-grafiek: x-as = uren (8u, 10u, 12u...), y-as = °C." },
            { type: "stap", tekst: "Klas-grafiek: x-as = dagen (ma, di...), y-as = aantal kinderen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Y = waarde (omhoog). X = categorie/tijd (langs). Recht omhoog vanaf x naar top → links naar y → lees getal." }],
          niveaus: {
            basis: "Y-as = waarde / hoeveelheid.",
            simpeler: "Y-as = zijkant = HOE VEEL. X-as = onderkant = WANNEER / WIE / WAT.",
            nogSimpeler: "Y = waarde",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Lijngrafiek bezoekers in de speeltuin: 10 uur 15, 12 uur 40, 14 uur 55, 16 uur 30. Om hoe laat waren er de **minste** bezoekers?",
        options: ["Om 10 uur", "Om 16 uur", "Om 12 uur", "Om 14 uur"],
        answer: 0,
        wrongHints: [null, "Er is een tijd met nog minder bezoekers.", null, "Dat is juist het hoogste punt."],
        uitlegPad: {
          stappen: [
            {
              titel: "'Minste' = laagste punt",
              tekst: "Bij een lijngrafiek zoek je bij 'minste' het **laagste punt** van de lijn.",
            },
            {
              titel: "Vergelijk de getallen",
              tekst: "10 uur: **15** ← laagste\n12 uur: 40\n14 uur: 55\n16 uur: 30\nDus om **10 uur**.",
            },
            {
              titel: "Wat vraagt de vraag?",
              tekst: "De vraag is 'om hoe laat'. Het antwoord is dus een **tijd**, niet het aantal.",
            },
          ],
          woorden: [
            {
              woord: "laagste punt",
              uitleg: "Het punt van de lijn met het kleinste getal.",
            },
          ],
          theorie: "• meeste → hoogste punt\n• minste → laagste punt\n• 'wanneer / hoe laat' → antwoord = tijd",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Laagste punt staat bij 18 uur → om 18 uur het minst.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Vergelijk álle punten voordat je kiest.",
            },
          ],
          niveaus: {
            basis: "Om 10 uur (15 bezoekers).",
            simpeler: "Het kleinste getal is 15. Dat hoort bij 10 uur.",
            nogSimpeler: "10 uur",
          },
        },
      },
      {
        q: "Lijngrafiek water in een regenton: ma 20 cm, di 35 cm, wo 35 cm, do 25 cm. Wat gebeurde er tussen **woensdag en donderdag**?",
        options: [
          "Het water daalde",
          "Het water steeg",
          "Het water bleef gelijk",
          "De ton werd helemaal leeg",
        ],
        answer: 0,
        wrongHints: [null, "Is 25 meer of minder dan 35?", "Dat gebeurde tussen dinsdag en woensdag.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Kijk alleen naar die twee dagen",
              tekst: "Woensdag: **35 cm**. Donderdag: **25 cm**.",
            },
            {
              titel: "Omhoog of omlaag?",
              tekst: "Van 35 naar 25 is **minder**. De lijn gaat **omlaag**: het water **daalde**.",
            },
          ],
          woorden: [
            {
              woord: "dalen",
              uitleg: "Lijn gaat omlaag: het wordt minder.",
            },
            {
              woord: "stijgen",
              uitleg: "Lijn gaat omhoog: het wordt meer.",
            },
          ],
          theorie: "• lijn omhoog → stijgen\n• lijn omlaag → dalen\n• lijn vlak → blijft gelijk",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Ma 20 → di 35: de lijn stijgt.",
            },
            {
              type: "stap",
              tekst: "Di 35 → wo 35: de lijn is vlak.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Lees per stukje: van welk getal naar welk getal?",
            },
          ],
          niveaus: {
            basis: "35 → 25 = daalde.",
            simpeler: "Woensdag 35 cm, donderdag 25 cm. Dat is minder, dus het water daalde.",
            nogSimpeler: "Daalde",
          },
        },
      },
      {
        q: "Lijngrafiek lengte van een plant: week 1 4 cm, week 2 7 cm, week 3 15 cm, week 4 18 cm. Tussen welke weken groeide de plant het **meest**?",
        options: [
          "Tussen week 2 en 3",
          "Tussen week 1 en 2",
          "Tussen week 3 en 4",
          "Hij groeide elke week evenveel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel cm kwam erbij? Reken het na.",
          null,
          "Reken per week uit hoeveel cm erbij kwam.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Groei = verschil",
              tekst: "Hoeveel de plant groeit, is het **verschil** tussen twee weken.",
            },
            {
              titel: "Reken elk stukje uit",
              tekst: "Week 1 → 2: 7 − 4 = 3 cm\nWeek 2 → 3: 15 − 7 = **8 cm** ← meeste\nWeek 3 → 4: 18 − 15 = 3 cm",
            },
            {
              titel: "Steilste stuk",
              tekst: "Op de grafiek is dit het **steilste** stuk van de lijn.",
            },
          ],
          woorden: [
            {
              woord: "steil",
              uitleg: "De lijn gaat snel omhoog.",
            },
            {
              woord: "groei",
              uitleg: "Hoeveel er bij komt.",
            },
          ],
          theorie: "Steilste stijging = grootste toename. Reken het verschil per stukje uit.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Dag 1: 10, dag 2: 12, dag 3: 20 → meeste erbij tussen dag 2 en 3 (8).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Kijk niet naar het hoogste punt, maar naar het grootste verschil.",
            },
          ],
          niveaus: {
            basis: "Tussen week 2 en 3 (8 cm).",
            simpeler: "Bereken wat er elke week bij kwam: 3, 8, 3. De 8 cm is het meest.",
            nogSimpeler: "Week 2 en 3",
          },
        },
      },
      {
        q: "Lijngrafiek prijs van een bakje aardbeien: april €5, mei €4, juni €3, juli €3. Hoeveel euro **goedkoper** was het in juni dan in april?",
        options: ["€2", "€1", "€8", "€3"],
        answer: 0,
        wrongHints: [
          null,
          "Welke twee maanden noemt de vraag?",
          null,
          "Dat is de prijs in juni zelf. Je zoekt het verschil.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Goedkoper = verschil",
              tekst: "**Hoeveel goedkoper** vraagt om het **verschil**. Dat is aftrekken.",
            },
            {
              titel: "Reken het uit",
              tekst: "April €5 − juni €3 = **€2** goedkoper.",
            },
          ],
          woorden: [
            {
              woord: "goedkoper",
              uitleg: "Het kost minder geld.",
            },
          ],
          theorie: "• hoeveel goedkoper / duurder → aftrekken\n• lijn omlaag → prijs daalt",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Een schrift kost eerst €4 en later €3 → €1 goedkoper.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Lees de twee maanden uit de vraag af en trek ze van elkaar af.",
            },
          ],
          niveaus: {
            basis: "€5 − €3 = €2.",
            simpeler: "In april €5, in juni €3. Verschil: 5 − 3 = €2.",
            nogSimpeler: "€2",
          },
        },
      },
      {
        q: "Lijngrafiek temperatuur in de klas: 9 uur 18 °C, 11 uur 20 °C, 13 uur 23 °C, 15 uur 21 °C. **Hoe warm** was het om 13 uur?",
        options: ["23 °C", "21 °C", "20 °C", "18 °C"],
        answer: 0,
        wrongHints: [null, "Dat hoort bij 15 uur.", null, "Zoek op de x-as eerst 13 uur."],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek de tijd op de x-as",
              tekst: "Zoek onderaan **13 uur**.",
            },
            {
              titel: "Lees de waarde op de y-as",
              tekst: "Ga recht omhoog naar de lijn en lees links af: **23 °C**.",
            },
            {
              titel: "Tijd of waarde?",
              tekst: "'Hoe warm' vraagt om de **waarde** (°C). 'Wanneer' vraagt om de **tijd**.",
            },
          ],
          woorden: [
            {
              woord: "x-as",
              uitleg: "Onderkant: hier de tijd.",
            },
            {
              woord: "y-as",
              uitleg: "Zijkant: hier de temperatuur.",
            },
          ],
          theorie: "Aflezen: tijd zoeken op x-as → recht omhoog → links de waarde lezen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Om 11 uur: 20 °C.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "'Hoe warm' → antwoord in °C.",
            },
          ],
          niveaus: {
            basis: "Om 13 uur: 23 °C.",
            simpeler: "Zoek 13 uur en lees het getal ernaast: 23 °C.",
            nogSimpeler: "23 °C",
          },
        },
      },
    ],
  },

  // STAP 4: Cirkeldiagram lezen
  {
    title: "Cirkeldiagram (taartdiagram) lezen",
    explanation:
      "Een **cirkeldiagram** is een **taart**. De hele taart = **100%** = alles. Elk stuk is een groep en heeft een **percentage**.\n\n**Voorbeeld**: een klas van 20 leerlingen — hun favoriete sport.\n• Voetbal: 50% van de leerlingen = 10 leerlingen.\n• Hockey: 25% = 5 leerlingen.\n• Zwemmen: 15% = 3 leerlingen.\n• Anders: 10% = 2 leerlingen.\n\n**Toets-stappenplan**:\n1. Zoek het stuk dat de vraag bedoelt *(via kleur of label)*.\n2. Lees het **percentage** af *(of meet hoe groot het stuk is)*.\n3. **Reken om naar aantal** als nodig: percentage × totaal ÷ 100.\n\n**Slimme percentage-trucs**:\n• 50% = de helft (÷ 2).\n• 25% = een kwart (÷ 4).\n• 10% = een tiende (÷ 10).\n• 75% = drie kwart.\n\n**Voorbeeld omrekenen**:\n*'Van 40 leerlingen kiest 25% voor zwemmen. Hoeveel zwemmers?'*\n• 25% = ¼.\n• ¼ van 40 = 40 ÷ 4 = **10 zwemmers**.\n\n**Check**: alle stukken van de taart **samen = 100%** altijd! Als de getallen niet kloppen, heb je iets gemist.",
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
        wrongHints: [null, "Hockey is 25% — er is een grotere sport.", "Zwemmen is maar 15% — niet de grootste.", "Anders is maar 10% — niet de grootste."],
        uitlegPad: {
          stappen: [
            { titel: "Grootst = hoogste percentage", tekst: "Bij een cirkeldiagram is **grootst** = het stuk met het **hoogste percentage**. Visueel = het **grootste taart-stuk**." },
            { titel: "Vergelijk de 4 percentages", tekst: "• Voetbal **50%** ← hoogste!\n• Hockey 25%\n• Zwemmen 15%\n• Anders 10%\nVoetbal heeft 50%, dat is de helft van de hele taart. De rest samen is óók maar de helft. Voetbal wint dus duidelijk." },
            { titel: "Toets-truc cirkeldiagram", tekst: "Bij cirkeldiagrammen werken **twee dingen** tegelijk:\n1. **Percentage** (cijfer) → hoogste = grootst\n2. **Visueel stuk** (oogmaat) → grootste taartpunt = grootst\nBeide kloppen altijd. Check ze tegen elkaar: als 50% lijkt op een klein stukje, is er iets mis met de tekening — vertrouw het getal." },
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
            basis: "Voetbal heeft 50% = grootste stuk",
            simpeler: "Welk percentage is het hoogst? 50% → dat hoort bij voetbal. Antwoord = naam: voetbal.",
            nogSimpeler: "Voetbal. Hoogste % wint.",
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
          basiskennis: [{ onderwerp: "Eenheid mee", uitleg: "Bij de Doorstroomtoets: schrijf 'kinderen' of de juiste eenheid bij het getal." }],
          niveaus: {
            basis: "50% × 20 = 10 kinderen.",
            simpeler: "50% is de helft. De helft van 20 = 10. Dus 10 kinderen kiezen voetbal.",
            nogSimpeler: "10 kinderen",
          },
        },
      },
      {
        q: "Zelfde taart, klas van **20**. Hoeveel kiezen **hockey** (25%)?",
        options: ["5 kinderen", "10 kinderen", "25 kinderen", "4 kinderen"],
        answer: 0,
        wrongHints: [null, "Te veel — dat zou 50% van 20 zijn, niet 25%.", "Onmogelijk — meer kinderen dan de klas groot is.", "Te weinig — 25% van 20 is iets meer dan dat."],
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
          theorie: "Toets-truc procenten in cirkeldiagrammen:\n• 50% = helft → ÷ 2\n• 25% = kwart → ÷ 4\n• 10% = tiende → ÷ 10\n• Voor andere %: gebruik 'procent × totaal ÷ 100'.\nBij Toets-cirkeldiagrammen zijn vaak mooie %-jes (10/20/25/50) → snel uit het hoofd.",
          voorbeelden: [
            { type: "stap", tekst: "25% van 40 = 40 ÷ 4 = 10." },
            { type: "stap", tekst: "25% van 100 = 100 ÷ 4 = 25 (lekker rond, daarom heten ze ook 25%)." },
            { type: "stap", tekst: "Pas op: 25% van 20 is NIET 25 kinderen — dat zou meer zijn dan de hele klas!" },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "25% = kwart = ÷ 4. Bij klas van 20 = 5. Bij klas van 24 = 6. Bij klas van 28 = 7." }],
          niveaus: {
            basis: "5 kinderen (20 ÷ 4 = 5).",
            simpeler: "25% = een kwart. 20 ÷ 4 = 5. Dus 5 kinderen kiezen hockey.",
            nogSimpeler: "5",
          },
        },
      },
      {
        q: "**Tellen alle stukken** van een taartdiagram bij elkaar samen op tot ... ?",
        options: ["100%", "50%", "1000%", "Het hangt af van de grafiek"],
        answer: 0,
        wrongHints: [null, "Te weinig — alle stukken samen vormen de hele taart.", "Onmogelijk — meer dan een hele taart.", "Niet juist — een hele taart is altijd hetzelfde getal, ongeacht de grafiek."],
        uitlegPad: {
          stappen: [
            { titel: "Een taart is een geheel = 100%", tekst: "Bij een cirkeldiagram is de **hele cirkel** = het **totale aantal** = **100%**. Alle stukken samen vormen die hele cirkel — dus alle % samen = 100%." },
            { titel: "Voorbeeld: sport-keuze klas", tekst: "Voetbal 50% + Hockey 25% + Zwemmen 15% + Anders 10% = **100%** ✓\nDe stukken sluiten precies aan tot de hele cirkel. Geen overlap, geen gaten." },
            { titel: "Toets-truc: ontbrekend stuk berekenen", tekst: "Soms vraagt de toets: 'Drie stukken zijn 40%, 30%, en 20%. Hoeveel is het vierde?'\nReken: 100% − (40+30+20) = 100 − 90 = **10%**.\nOmdat alle stukken samen 100% MOETEN zijn, kun je het ontbrekende stuk altijd berekenen." },
          ],
          woorden: [
            { woord: "100%", uitleg: "Het hele geheel. Alles wat er is." },
            { woord: "deel van geheel", uitleg: "Een % van de 100%." },
          ],
          theorie: "Toets-rekenregel cirkeldiagram:\n• Alle stukken samen = 100% (altijd)\n• Ontbrekend stuk = 100% − (som andere stukken)\n• Cirkel kan niet meer dan 100% (zou een 2e cirkel zijn)\n• Cirkel kan ook niet minder dan 100% (dat zou een 'gat' zijn)",
          voorbeelden: [
            { type: "stap", tekst: "Verkiezingsuitslag: 4 partijen krijgen 40+30+20+10 = 100% (klopt)." },
            { type: "stap", tekst: "toetsvraag: 'Rood 35%, Blauw 25%, Groen 30%. Hoeveel Geel?' → 100 − (35+25+30) = 100 − 90 = 10%." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Cirkel = ALTIJD 100%. Gebruik dit om ontbrekende stukken te berekenen via 100 − rest." }],
          niveaus: {
            basis: "100% (hele taart = geheel).",
            simpeler: "Cirkel = hele iets. Alle stukken samen = hele iets = 100%.",
            nogSimpeler: "100%",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Cirkeldiagram vervoer naar school, **30** leerlingen: fiets 60%, lopen 30%, auto 10%. Hoeveel leerlingen komen met de **auto**?",
        options: ["3 leerlingen", "10 leerlingen", "9 leerlingen", "18 leerlingen"],
        answer: 0,
        wrongHints: [
          null,
          "10 is het percentage. Hoeveel leerlingen is dat van de 30?",
          null,
          "Welk stuk van de taart hoort bij de auto?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "10% = een tiende",
              tekst: "**10%** = ÷ 10. Je deelt het totaal door 10.",
            },
            {
              titel: "Reken het uit",
              tekst: "30 ÷ 10 = **3 leerlingen** met de auto.",
            },
            {
              titel: "Controle",
              tekst: "Fiets 60% = 18, lopen 30% = 9, auto 10% = 3. Samen 18 + 9 + 3 = 30. Klopt!",
            },
          ],
          woorden: [
            {
              woord: "10%",
              uitleg: "Een tiende: deel door 10.",
            },
            {
              woord: "%",
              uitleg: "Per honderd.",
            },
          ],
          theorie: "Percentage → aantal: percentage × totaal ÷ 100.\n• 50% → ÷ 2\n• 25% → ÷ 4\n• 10% → ÷ 10",
          voorbeelden: [
            {
              type: "stap",
              tekst: "10% van 50 = 50 ÷ 10 = 5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Een percentage is geen aantal. Reken altijd om met het totaal.",
            },
          ],
          niveaus: {
            basis: "10% van 30 = 3.",
            simpeler: "10% is een tiende. 30 ÷ 10 = 3 leerlingen.",
            nogSimpeler: "3 leerlingen",
          },
        },
      },
      {
        q: "Cirkeldiagram lievelingsfruit: appel 45%, banaan 30%, de rest is peer. Hoeveel procent is **peer**?",
        options: ["25%", "75%", "15%", "35%"],
        answer: 0,
        wrongHints: [
          null,
          "Dat zijn appel en banaan samen. Wat blijft er over?",
          null,
          "Hoeveel is de hele taart samen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Hele taart = 100%",
              tekst: "Alle stukken samen zijn altijd **100%**.",
            },
            {
              titel: "Reken het ontbrekende stuk uit",
              tekst: "Appel + banaan = 45% + 30% = 75%.\nPeer = 100% − 75% = **25%**.",
            },
          ],
          woorden: [
            {
              woord: "100%",
              uitleg: "De hele taart, alles samen.",
            },
            {
              woord: "de rest",
              uitleg: "Wat er overblijft.",
            },
          ],
          theorie: "Ontbrekend stuk = 100% − alle andere stukken samen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Rood 50%, blauw 30%, de rest geel → geel = 100 − 80 = 20%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eerst de bekende stukken optellen, dan van 100 aftrekken.",
            },
          ],
          niveaus: {
            basis: "100 − 45 − 30 = 25%.",
            simpeler: "Appel en banaan zijn samen 75%. Tot 100% mist nog 25%.",
            nogSimpeler: "25%",
          },
        },
      },
      {
        q: "Cirkeldiagram schoolreisje, **24** kinderen: pretpark 75%, dierentuin 25%. Hoeveel kinderen kozen het **pretpark**?",
        options: ["18 kinderen", "6 kinderen", "12 kinderen", "20 kinderen"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is 25%. Welk stuk hoort bij het pretpark?",
          null,
          "Reken eerst uit hoeveel 25% is.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "75% = drie kwart",
              tekst: "**75%** is **drie kwart**: 3 keer 25%.",
            },
            {
              titel: "Reken het uit",
              tekst: "25% van 24 = 24 ÷ 4 = 6.\n75% = 3 × 6 = **18 kinderen**.",
            },
            {
              titel: "Controle",
              tekst: "Pretpark 18 + dierentuin 6 = 24. Klopt!",
            },
          ],
          woorden: [
            {
              woord: "75%",
              uitleg: "Drie kwart.",
            },
            {
              woord: "25%",
              uitleg: "Een kwart: deel door 4.",
            },
          ],
          theorie: "• 25% → ÷ 4\n• 75% → ÷ 4, dan × 3",
          voorbeelden: [
            {
              type: "stap",
              tekst: "75% van 40 = 40 ÷ 4 × 3 = 30.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "75% = totaal min een kwart.",
            },
          ],
          niveaus: {
            basis: "75% van 24 = 18.",
            simpeler: "Een kwart van 24 is 6. Drie kwart is 3 × 6 = 18.",
            nogSimpeler: "18 kinderen",
          },
        },
      },
      {
        q: "In een cirkeldiagram is één stuk precies **een kwart** van de cirkel. Hoeveel procent is dat?",
        options: ["25%", "50%", "4%", "75%"],
        answer: 0,
        wrongHints: [null, "Dat is de helft van de cirkel.", null, "Dat zijn drie van de vier stukken."],
        uitlegPad: {
          stappen: [
            {
              titel: "Hele cirkel = 100%",
              tekst: "De hele cirkel is **100%**.",
            },
            {
              titel: "Een kwart",
              tekst: "Een kwart = de cirkel in **4 gelijke stukken**. 100% ÷ 4 = **25%**.",
            },
          ],
          woorden: [
            {
              woord: "kwart",
              uitleg: "Eén van de vier gelijke stukken.",
            },
            {
              woord: "100%",
              uitleg: "De hele cirkel.",
            },
          ],
          theorie: "• helft = 50%\n• kwart = 25%\n• drie kwart = 75%\n• tiende = 10%",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Een stuk is de helft van de cirkel → 50%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Deel 100% door het aantal gelijke stukken.",
            },
          ],
          niveaus: {
            basis: "Een kwart = 25%.",
            simpeler: "De cirkel in 4 gelijke stukken. 100 ÷ 4 = 25%.",
            nogSimpeler: "25%",
          },
        },
      },
    ],
  },

  // STAP 5: Tabel ↔ grafiek
  {
    title: "Van tabel naar grafiek (en terug)",
    explanation:
      "Een **tabel** is gewoon **getallen in rijen en kolommen**. Een grafiek is hetzelfde — maar dan als plaatje.\n\nVoorbeeld:\n\n| Dag | Aantal ijsjes verkocht |\n|---|---|\n| ma | 12 |\n| di | 8 |\n| wo | 18 |\n| do | 22 |\n| vr | 30 |\n\nIn een **staafdiagram** zou maandag een balk van 12 worden, vrijdag een balk van 30, etc.\n\n**toetsvraag-type 1**: *'Welke dag is het laagst in de tabel?'*\n• Zoek het kleinste getal: 8 (dinsdag).\n\n**toetsvraag-type 2**: *'Hoeveel ijsjes in de hele week?'*\n• Tel alle dagen op: 12 + 8 + 18 + 22 + 30 = **90 ijsjes**.\n\n**toetsvraag-type 3**: *'Hoeveel meer op vrijdag dan op maandag?'*\n• Verschil: 30 − 12 = **18 ijsjes meer**.\n\n**Toets-tip — tabel vs grafiek**:\n• **Exact getal** = tabel makkelijker.\n• **Patroon zien** (stijgt het? daalt het?) = grafiek makkelijker.\n• Bij twijfel: maak even snel een staafje per dag op kladpapier.",
    checks: [
      {
        q: "Tabel: ma 12, di 8, wo 18, do 22, vr 30 ijsjes. **Op welke dag minst** verkocht?",
        options: ["Dinsdag", "Maandag", "Woensdag", "Vrijdag"],
        answer: 0,
        wrongHints: [null, "Maandag 12 — er is een dag met een nog lager getal.", "Woensdag 18 — hoger dan een andere dag in de week.", "Vrijdag 30 — dat is juist het MEEST."],
        uitlegPad: {
          stappen: [
            { titel: "'Minst' = laagste getal", tekst: "Bij een **tabel** zoek je het **laagste getal** als de vraag 'minst' / 'minste' / 'laagste' bevat." },
            { titel: "Loop door de tabel — vergelijk", tekst: "• ma = 12\n• **di = 8** ← laagste!\n• wo = 18\n• do = 22\n• vr = 30\nHet kleinste getal is **8**, dat hoort bij **dinsdag**." },
            { titel: "Toets-truc: dagen bij rekenen", tekst: "Bij tabel-vragen met dagen:\n• 'minst' / 'minste' / 'laagste' → kleinste getal\n• 'meeste' / 'hoogste' → grootste getal\n• 'verschil' → groot − klein\n• 'totaal' → alles +\n\nVerwar 'minst' niet met 'minder dan X' (= aftrekken). 'Minst' = extreme zoeken." },
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
            basis: "Dinsdag (8) is het laagste.",
            simpeler: "Zoek het kleinste getal in de tabel: 8 → bij dinsdag.",
            nogSimpeler: "Dinsdag",
          },
        },
      },
      {
        q: "Zelfde tabel. **Totaal ijsjes** hele week?",
        options: ["90 ijsjes", "70 ijsjes", "60 ijsjes", "100 ijsjes"],
        answer: 0,
        wrongHints: [null, "Te weinig — controleer optelling 12+8+18+22+30.", "Te weinig — niet alle 5 dagen meegeteld.", "Te veel — controleer."],
        uitlegPad: {
          stappen: [
            { titel: "'Totaal' = alle 5 dagen optellen", tekst: "Het signaalwoord **'totaal'** vraagt om **alle waardes bij elkaar**. Bij week-tabel: tel alle 5 dagen op." },
            { titel: "Slim optellen in paren", tekst: "Niet alles in 1 keer in je hoofd — maak paren:\n• ma + di = 12 + 8 = **20**\n• wo + do = 18 + 22 = **40**\n• vr alleen = **30**\n\nNu paren samen:\n• 20 + 40 = **60**\n• 60 + 30 = **90**\n→ **Totaal = 90 ijsjes**." },
            { titel: "Slimme trucs voor optellen", tekst: "Toets-trucs bij grotere optellingen:\n• Zoek **paren die mooi uitkomen**: 12+8 = 20 (rond getal!), 18+22 = 40 (rond!)\n• Maak van moeilijke som een ronde-getallen-som\n• Tel de eenheden eerst, daarna tientallen\n• Schat eerst: 5 dagen × ~18 gemiddeld ≈ 90 → 90 klopt qua orde van grootte" },
          ],
          woorden: [
            { woord: "totaal", uitleg: "Alle waardes samen, na optellen." },
            { woord: "paren", uitleg: "Twee getallen samen — vaak makkelijker dan alles in 1 keer." },
          ],
          theorie: "Toets-tabel signaalwoorden:\n• 'Totaal' → +\n• 'Samen' → +\n• 'In totaal verkocht' → +\n• 'Hele week/dag/jaar' → + (alles binnen die periode)\n\nNooit anders dan +. Alleen aftrekken bij 'verschil' / 'hoeveel meer/minder'.",
          voorbeelden: [
            { type: "stap", tekst: "Tabel cijfers per dag: 5+7+9+6+8 = 35 punten totaal." },
            { type: "stap", tekst: "Tabel regen jan-apr: 60+50+40+70 = 220 mm in 4 maanden." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij 5 getallen: pak 2 paren + 1 los, dan paren samen, dan los erbij. Drie stappen ipv 4 = minder fouten." }],
          niveaus: {
            basis: "12+8+18+22+30 = 90.",
            simpeler: "Tel: 12+8=20, 18+22=40, 20+40=60, +30=90.",
            nogSimpeler: "90",
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
            basis: "30 − 12 = 18 ijsjes.",
            simpeler: "Vrijdag = 30. Maandag = 12. Verschil = 30 − 12 = 18 ijsjes meer.",
            nogSimpeler: "18 ijsjes",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Tabel gevonden schelpen: Lisa 14, Tim 9, Sara 21, Bram 16. Je maakt er een staafdiagram van. Welke balk wordt het **hoogst**?",
        options: ["De balk van Sara", "De balk van Bram", "De balk van Lisa", "De balk van Tim"],
        answer: 0,
        wrongHints: [
          null,
          "Er is een getal in de tabel dat nog groter is.",
          null,
          "Die heeft juist het kleinste getal.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tabel → staafdiagram",
              tekst: "Elk getal uit de tabel wordt een **balk**. Hoe groter het getal, hoe **hoger** de balk.",
            },
            {
              titel: "Zoek het grootste getal",
              tekst: "Lisa 14, Tim 9, **Sara 21**, Bram 16. Het grootste getal is 21: de balk van **Sara**.",
            },
          ],
          woorden: [
            {
              woord: "tabel",
              uitleg: "Getallen in rijen en kolommen.",
            },
            {
              woord: "balk",
              uitleg: "Staafje in een staafdiagram.",
            },
          ],
          theorie: "Groot getal in tabel = hoge balk. Klein getal = lage balk.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tabel: A 5, B 12 → balk B is hoger.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zoek in de tabel het grootste getal.",
            },
          ],
          niveaus: {
            basis: "Sara (21).",
            simpeler: "Het grootste getal in de tabel is 21. Dat is Sara, dus haar balk is het hoogst.",
            nogSimpeler: "Sara",
          },
        },
      },
      {
        q: "Tabel doelpunten: Daan 5, Iris 8, Joep 5, Lotte 3. In een staafdiagram worden twee balken **even hoog**. Welke twee?",
        options: ["Daan en Joep", "Iris en Lotte", "Daan en Iris", "Joep en Lotte"],
        answer: 0,
        wrongHints: [null, "Hebben die twee hetzelfde aantal?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Even hoog = zelfde getal",
              tekst: "Twee balken zijn even hoog als ze **hetzelfde getal** hebben in de tabel.",
            },
            {
              titel: "Zoek gelijke getallen",
              tekst: "Daan **5**, Iris 8, Joep **5**, Lotte 3. Daan en Joep hebben allebei 5.",
            },
          ],
          woorden: [
            {
              woord: "even hoog",
              uitleg: "Precies dezelfde hoogte.",
            },
          ],
          theorie: "Elk getal uit de tabel = één balk. Zelfde getal = zelfde hoogte.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tabel: ma 7, di 4, wo 7 → ma en wo even hoog.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zet de getallen op een rij en zoek twee dezelfde.",
            },
          ],
          niveaus: {
            basis: "Daan en Joep (allebei 5).",
            simpeler: "Daan heeft 5 en Joep heeft 5. Die balken zijn even hoog.",
            nogSimpeler: "Daan en Joep",
          },
        },
      },
      {
        q: "Een staafdiagram 'Regendagen': de balk van oktober komt tot 18, november tot 20, december tot 16. Welke tabel hoort erbij?",
        options: [
          "okt 18 · nov 20 · dec 16",
          "okt 20 · nov 18 · dec 16",
          "okt 16 · nov 20 · dec 18",
          "okt 18 · nov 16 · dec 20",
        ],
        answer: 0,
        wrongHints: [null, "Kijk goed welk getal bij oktober hoort.", null, "Klopt december bij deze tabel?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Grafiek → tabel",
              tekst: "Bij elke balk schrijf je de **naam** en het **getal** in de tabel.",
            },
            {
              titel: "Controleer elke maand",
              tekst: "Oktober → 18\nNovember → 20\nDecember → 16\nAlleen de eerste tabel heeft bij elke maand het goede getal.",
            },
          ],
          woorden: [
            {
              woord: "tabel",
              uitleg: "Getallen netjes in rijen en kolommen.",
            },
          ],
          theorie: "Check bij elke rij: hoort dit getal echt bij deze naam?",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Balk ma tot 6, di tot 9 → tabel: ma 6, di 9.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Loop de maanden één voor één na.",
            },
          ],
          niveaus: {
            basis: "okt 18, nov 20, dec 16.",
            simpeler: "Neem elke balk over: oktober 18, november 20, december 16.",
            nogSimpeler: "okt 18 · nov 20 · dec 16",
          },
        },
      },
      {
        q: "Een winkel heeft een tabel én een lijngrafiek van de verkochte liters melk per dag. Je wilt **precies** weten hoeveel liter er op woensdag verkocht is. Waar lees je dat het makkelijkst af?",
        options: [
          "In de tabel",
          "In de titel van de grafiek",
          "In de legenda van de grafiek",
          "Aan de vorm van de lijn",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Staat daar een getal per dag?",
          null,
          "Zie je aan de vorm vooral een precies getal, of of het stijgt en daalt?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tabel = exact getal",
              tekst: "In een **tabel** staat het getal **precies** opgeschreven. Je hoeft niets te schatten.",
            },
            {
              titel: "Grafiek = patroon",
              tekst: "Een grafiek is handig om snel te zien of iets **stijgt of daalt**. Een precies getal lees je makkelijker in een tabel.",
            },
          ],
          woorden: [
            {
              woord: "exact",
              uitleg: "Precies, zonder schatten.",
            },
            {
              woord: "tabel",
              uitleg: "Getallen in rijen en kolommen.",
            },
          ],
          theorie: "• precies getal → tabel\n• patroon zien (stijgt het? daalt het?) → grafiek",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Hoeveel kinderen op dinsdag? Kijk in de tabel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Precies getal nodig? Kijk in de tabel.",
            },
          ],
          niveaus: {
            basis: "In de tabel.",
            simpeler: "In een tabel staat het precieze getal van woensdag. Daar lees je het het makkelijkst.",
            nogSimpeler: "Tabel",
          },
        },
      },
      {
        q: "Tabel verkochte lootjes: groep 5 34, groep 6 27, groep 7 41, groep 8 38. Hoeveel lootjes in **totaal**?",
        options: ["140 lootjes", "130 lootjes", "150 lootjes", "79 lootjes"],
        answer: 0,
        wrongHints: [
          null,
          "Tel nog eens na: zijn alle vier de groepen goed opgeteld?",
          null,
          "Heb je alle vier de groepen meegeteld?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "'Totaal' = alles optellen",
              tekst: "Bij **totaal** tel je **alle** getallen uit de tabel bij elkaar.",
            },
            {
              titel: "Slim optellen in paren",
              tekst: "34 + 27 = 61\n41 + 38 = 79\n61 + 79 = **140 lootjes**.",
            },
          ],
          woorden: [
            {
              woord: "totaal",
              uitleg: "Alles bij elkaar opgeteld.",
            },
          ],
          theorie: "• totaal / samen → +\n• verschil / hoeveel meer → −",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tabel: 10, 20, 30 → totaal 60.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tel in paren: minder kans op fouten.",
            },
          ],
          niveaus: {
            basis: "34 + 27 + 41 + 38 = 140.",
            simpeler: "Tel in twee stappen: 61 + 79 = 140 lootjes.",
            nogSimpeler: "140 lootjes",
          },
        },
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — grafieken-mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Verschillende grafiek-types door elkaar. **Lees altijd eerst**: titel, eenheid, x-as, y-as. Dan pas de vraag beantwoorden.\n\nVeel succes!",
    checks: [
      {
        q: "Staafdiagram regen-mm: jan 60, feb 80, mrt 40, apr 50. **Totaal regen-mm** in deze 4 maanden?",
        options: ["230 mm", "180 mm", "210 mm", "190 mm"],
        answer: 0,
        wrongHints: [null, "Te weinig — controleer 60+80+40+50.", "Te weinig — heb je elke maand meegeteld?", "Te weinig — controleer optelling."],
        uitlegPad: {
          stappen: [
            { titel: "'Totaal' = alle balken bij elkaar optellen", tekst: "Het woord **'totaal'** is een **signaalwoord voor +** (optellen). Bij staafdiagram: **alle balken bij elkaar** = totaal." },
            { titel: "Stap-voor-stap optellen", tekst: "Lees elke balk en tel op:\n• jan = 60\n• feb = 80\n• mrt = 40\n• apr = 50\n\nReken slim:\n60 + 80 = **140**\n140 + 40 = **180**\n180 + 50 = **230**\n→ **Totaal = 230 mm**." },
            { titel: "Toets-truc: tussenstappen opschrijven", tekst: "Bij 4+ getallen: NIET alles in 1 keer in je hoofd doen — kans op fout te groot.\nOpsplitsen in **2 stappen**:\n• Eerst: jan+feb = 60+80 = 140\n• Daarna: mrt+apr = 40+50 = 90\n• Tot slot: 140 + 90 = 230 ✓\nTwee kleine sommen = nauwkeuriger dan één grote." },
          ],
          woorden: [
            { woord: "totaal", uitleg: "Alle getallen samen, na optellen." },
            { woord: "optellen", uitleg: "Cijfers samen tellen tot één getal (+)." },
          ],
          theorie: "Toets-signaalwoorden optellen:\n• 'Totaal' → alles +\n• 'Samen' → alles +\n• 'Bij elkaar' → alles +\n• 'Alles in...' → alles +\n• 'Hoeveel in totaal verkocht/gegeten/...' → alles +\n\nTegenpolen (NIET optellen):\n• 'Verschil' → −\n• 'Hoeveel meer/minder' → −\n• 'Per dag/maand gemiddeld' → totaal ÷ aantal",
          voorbeelden: [
            { type: "stap", tekst: "Staaf ijsjes ma-vr: 12+8+18+22+30 = 90 ijsjes totaal." },
            { type: "stap", tekst: "Staaf inwoners 4 buurten: 200+350+150+300 = 1.000 inwoners totaal." },
            { type: "stap", tekst: "Staaf kinderen klas 1-4: 25+28+22+27 = 102 kinderen totaal." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij 4+ getallen: tel paren eerst (jan+feb, mrt+apr), dan paren samen. Veiliger dan alles in 1 keer." }],
          niveaus: {
            basis: "60 + 80 + 40 + 50 = 230 mm.",
            simpeler: "Tel alle 4 maanden: jan(60) + feb(80) + mrt(40) + apr(50) = 230 mm.",
            nogSimpeler: "230 mm",
          },
        },
      },
      {
        q: "Lijngrafiek baby-gewicht: bij geboorte 3 kg, na 3 maanden 6 kg. **Hoeveel kg aangekomen**?",
        options: ["3 kg", "6 kg", "9 kg", "2 kg"],
        answer: 0,
        wrongHints: [null, "Te veel — dat is alleen het eind-gewicht.", "Te veel — dat is opgeteld.", "Te weinig — lees het begin- en eindgewicht nog eens af."],
        uitlegPad: {
          stappen: [
            { titel: "'Aangekomen' = verschil = aftrekken", tekst: "Het woord **'aangekomen'** betekent: hoeveel ERBIJ gekomen sinds het begin. Dat is een **verschil-vraag** → aftrekken." },
            { titel: "Bereken: eind − begin", tekst: "**Begin**: 3 kg (bij geboorte).\n**Eind**: 6 kg (na 3 maanden).\n**Aangekomen** = 6 − 3 = **3 kg**." },
            { titel: "Toets-instinker: vergeet niet de eenheid", tekst: "Antwoord = '3 **kg**', niet alleen '3'. Op de Doorstroomtoets staat soms in de opties: '3', '3 kg', '3 g', '3 maanden'. Alleen het juiste getal MET juiste eenheid is goed." },
          ],
          woorden: [
            { woord: "aangekomen", uitleg: "Hoeveel ERBIJ gekomen sinds begin. Bij gewicht: zwaarder geworden." },
            { woord: "verschil", uitleg: "Resultaat van aftrekken (groot − klein)." },
          ],
          theorie: "Toets-signaalwoorden bij groei-vragen:\n• 'aangekomen' / 'gegroeid' / 'erbij' → eind − begin (aftrekken)\n• 'totaal nu' / 'eindgewicht' → alleen eind aflezen\n• 'gemiddeld per maand' → verschil ÷ aantal maanden",
          voorbeelden: [
            { type: "stap", tekst: "Plant 10 cm bij start, 25 cm na 4 weken. Gegroeid: 25 − 10 = 15 cm." },
            { type: "stap", tekst: "Baby weegt 3 kg bij geboorte, 9 kg na 1 jaar. Aangekomen: 9 − 3 = 6 kg." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "'Aangekomen' = ERBIJ-gekomen = aftrekken (eind − begin)." }],
          niveaus: {
            basis: "3 kg aangekomen (6 − 3 = 3).",
            simpeler: "Begin: 3 kg. Eind: 6 kg. Hoeveel ERBIJ gekomen? 6 − 3 = 3 kg.",
            nogSimpeler: "3 kg",
          },
        },
      },
      {
        q: "Taart: rood 25%, blauw 50%, geel 25%. Klas van **40** kinderen — hoeveel **blauw**?",
        options: ["20 kinderen", "50 kinderen", "10 kinderen", "40 kinderen"],
        answer: 0,
        wrongHints: [null, "Te veel — kan niet meer dan klas-totaal.", "Te weinig — 50% is de helft. Helft van 40 = ?", "Te veel — dat is alle kinderen."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent 50%?", tekst: "**50%** = **de helft** van het totaal. Een **percentage** zegt: zoveel **van de 100** delen.\n• 50% = 50 van de 100 = **helft**\n• 25% = 25 van de 100 = **kwart**\n• 100% = alles" },
            { titel: "50% van 40 berekenen", tekst: "**Truc voor 50%**: gewoon **÷ 2** (delen door 2 = helft).\n• 40 ÷ 2 = **20 kinderen**\n\nAlternatief (langere weg):\n• 50% = 50/100 = 0,5\n• 0,5 × 40 = 20 kinderen ✓\nZelfde antwoord. Bij 50% is delen door 2 altijd het snelst." },
            { titel: "Toets-procent-trucs (snel)", tekst: "Onthoud deze ezelsbruggetjes voor de Doorstroomtoets:\n• **50%** → ÷ 2 (helft)\n• **25%** → ÷ 4 (kwart)\n• **10%** → ÷ 10 (1 nul ervanaf)\n• **20%** → ÷ 5 (of 2× de 10%)\n• **75%** → 3× de 25% (drie kwart)\n• **100%** → alles\n\nCheck: rood 25% van 40 = 40÷4 = 10 kinderen. Geel 25% = ook 10. Blauw 50% = 20. Totaal: 10+10+20 = 40 ✓" },
          ],
          woorden: [
            { woord: "percentage", uitleg: "Aantal per 100, geschreven als %." },
            { woord: "50%", uitleg: "De helft. Truc: deel door 2." },
            { woord: "totaal", uitleg: "Hele groep = 100%." },
          ],
          theorie: "Percentage TOEPASSEN op een geheel:\n1. Identificeer het **totaal** (hier: 40 kinderen = 100%).\n2. Identificeer het **gevraagde %** (hier: blauw 50%).\n3. Bereken: % × totaal / 100, OF gebruik een snelle truc:\n   - 50% → ÷ 2\n   - 25% → ÷ 4\n   - 10% → ÷ 10\n\nLet op: vraag is naar **aantal kinderen**, niet naar % zelf!",
          voorbeelden: [
            { type: "stap", tekst: "60 kinderen, 25% jongens → 60÷4 = 15 jongens." },
            { type: "stap", tekst: "200 zakjes, 10% gratis → 200÷10 = 20 gratis." },
            { type: "stap", tekst: "80 leerlingen, 50% meisjes → 80÷2 = 40 meisjes." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "50% = helft = ÷ 2. 25% = kwart = ÷ 4. Onthoud deze 2, dan kun je veel toetsvragen snel oplossen." }],
          niveaus: {
            basis: "50% van 40 = 40÷2 = 20 kinderen.",
            simpeler: "50% = de helft. Helft van 40 kinderen = 20.",
            nogSimpeler: "Helft van 40 = 20",
          },
        },
      },
      {
        q: "Staafdiagram huisdieren: hond 12, kat 18, vogel 4, vis 6. **Welk dier komt het minst voor**?",
        options: ["Vogel", "Hond", "Kat", "Vis"],
        answer: 0,
        wrongHints: [null, "Hond is 12 — niet de minste.", "Kat is 18 — dat is juist de MEESTE.", "Vis is 6 — er is nog een dier dat minder voorkomt."],
        uitlegPad: {
          stappen: [
            { titel: "'Minst' = laagste balk", tekst: "**'Komt het minst voor'** = het dier met het **kleinste aantal** = de **laagste balk** in het staafdiagram." },
            { titel: "Vergelijk alle 4 huisdieren", tekst: "• Hond = 12\n• Kat = 18\n• **Vogel = 4** ← laagste!\n• Vis = 6\n\nGesorteerd van laag naar hoog: vogel (4) < vis (6) < hond (12) < kat (18).\n→ Vogel is met **4** het minst." },
            { titel: "Toets-instinker: vergelijk ALLE opties", tekst: "Veel kinderen kiezen het EERSTE lage getal dat ze zien. Maar je moet **ALLE 4** vergelijken — anders mis je iets lagers.\nVoorbeeld: je ziet vis (6) en denkt 'dat lijkt laag, kies vis'. Maar vogel is **nog lager** (4). Pas op dat je niet stopt bij het eerste 'best lijkende' antwoord.\n→ **Truc**: schrijf alle 4 getallen op in volgorde en pak dan de laagste." },
          ],
          woorden: [
            { woord: "minst", uitleg: "Het kleinste aantal." },
            { woord: "meest", uitleg: "Het grootste aantal." },
            { woord: "vergelijken", uitleg: "Twee of meer getallen naast elkaar zetten en bepalen welke groter/kleiner is." },
          ],
          theorie: "Toets-staafdiagram 'minst/meest':\n1. Lees alle 4 (of meer) balken af.\n2. Vergelijk volledig — alle getallen.\n3. Zoek extreme (laagste = minst, hoogste = meest).\n4. Pak het LABEL van die balk als antwoord (vraag 'welk dier?' → naam dier).\n\nNooit stoppen bij het eerste 'best lijkende' getal — alle opties checken.",
          voorbeelden: [
            { type: "stap", tekst: "Staaf sport-keuze: voetbal 20, hockey 15, tennis 8, zwemmen 12. Minst? → tennis (8)." },
            { type: "stap", tekst: "Staaf cijfers wiskunde-toets: 5= 2 keer, 6= 5 keer, 7= 8 keer, 8= 4 keer. Welk cijfer minst? → 5 (slechts 2 keer)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Sorteer alle 4 in je hoofd of op kladpapier van klein naar groot. Eerste = minst, laatste = meest. Veiliger dan 'in je hoofd vergelijken'." }],
          niveaus: {
            basis: "Vogel (4) is het laagst.",
            simpeler: "Vergelijk: hond=12, kat=18, vogel=4, vis=6. Laagste = 4 = vogel.",
            nogSimpeler: "Vogel",
          },
        },
      },
      {
        q: "Lijngrafiek temperatuur. Bij de Doorstroomtoets staat een **stijgende** lijn. Wat betekent dat?",
        options: ["Het wordt warmer", "Het wordt kouder", "Niets verandert", "De thermometer is stuk"],
        answer: 0,
        wrongHints: [null, "Kouder = lijn omlaag.", "Niets = vlakke lijn.", "Niet zonder reden te zeggen — neem aan dat de grafiek klopt."],
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
          theorie: "Toets-vertaaltabel lijn-richting:\n• Temperatuur stijgt → het wordt warmer\n• Temperatuur daalt → het wordt kouder\n• Aantal mensen stijgt → meer mensen\n• Aantal mensen daalt → minder mensen\n• Bedrag stijgt → duurder\n• Bedrag daalt → goedkoper",
          voorbeelden: [
            { type: "stap", tekst: "Grafiek auto-prijs stijgend → auto wordt duurder." },
            { type: "stap", tekst: "Grafiek hoeveelheid regen dalend → minder regen." },
            { type: "stap", tekst: "Grafiek inwoners-aantal stad stijgend → meer inwoners." },
          ],
          basiskennis: [{ onderwerp: "Vertaling", uitleg: "Stijgend ≠ 'mooier' of 'beter'. Het zegt alleen: getal wordt groter. Wat dat betekent hangt af van het onderwerp." }],
          niveaus: {
            basis: "Stijgend = warmer.",
            simpeler: "Stijgend = omhoog = méér graden = het wordt warmer.",
            nogSimpeler: "Warmer",
          },
        },
      },
      {
        q: "Tabel verkoop koekjes ma-vr: 5, 7, 9, 11, 13. **Patroon**?",
        options: ["Elke dag 2 meer", "Elke dag 3 meer", "Het neemt af", "Wisselt willekeurig"],
        answer: 0,
        wrongHints: [null, "Te veel — trek twee opeenvolgende dagen van elkaar af en kijk of dat steeds hetzelfde getal is.", "Het stijgt juist, niet daalt.", "Er zit een vast verschil — kijk goed."],
        uitlegPad: {
          stappen: [
            { titel: "Verschil per stap", tekst: "Ma → di: 7 − 5 = 2. Di → wo: 9 − 7 = 2. Telkens +2." },
          ],
          woorden: [{ woord: "patroon", uitleg: "Een vaste regel waarop getallen elkaar opvolgen." }],
          theorie: "Bij patroon-vragen altijd het verschil tussen 2 opeenvolgende getallen pakken.",
          voorbeelden: [{ type: "stap", tekst: "5, 7, 9, 11, 13 — telkens +2." }],
          basiskennis: [{ onderwerp: "Vast verschil", uitleg: "Als telkens hetzelfde getal erbij komt, is dat het patroon." }],
          niveaus: {
            basis: "Elke dag 2 meer.",
            simpeler: "Verschil tussen elke 2 dagen = 2. Dus elke dag 2 koekjes meer.",
            nogSimpeler: "+2 per dag",
          },
        },
      },
      { q: "Een taartdiagram laat zien: 50% rood, 25% blauw, 25% geel. Welke kleur heeft de grootste taartpunt?", options: ["Rood","Blauw","Geel","Allemaal even groot"], answer: 0, wrongHints: [null, "Dat is maar een kwart.", "Dat is ook maar een kwart.", "25% en 50% zijn verschillend."] },
      { q: "Een **staafdiagram** is best voor?", options: ["Vergelijken van categorieën","Verloop in tijd","Verdeling van een geheel","Patroon"], answer: 0, wrongHints: [null, "Dat is lijngrafiek.", "Dat is taart.", "Dat is grafiek-trend."] },
      { q: "Een **lijngrafiek** is best voor?", options: ["Verloop in tijd","Categorieën","Verdeling","Aantal per type"], answer: 0, wrongHints: [null, "Dat is staaf.", "Dat is taart.", "Dat is staaf."] },
      { q: "Een **taartdiagram** is best voor?", options: ["Verdeling van een geheel","Verloop in tijd","Categorieën los","Patroon"], answer: 0, wrongHints: [null, "Dat is lijn.", "Dat is staaf.", "Niet."] },
      { q: "Op de **x-as** staan meestal?", options: ["Tijd of categorie","Aantal","Frequentie","Totaal"], answer: 0, wrongHints: [null, "Dat is y-as.", "Y-as.", "Y-as."] },
      { q: "Op de **y-as** staat meestal?", options: ["Aantal / hoeveelheid","Tijd","Categorie","Titel"], answer: 0, wrongHints: [null, "Op x-as.", "Op x-as.", "Niet."] },
      { q: "Een **legenda** in grafiek toont?", options: ["Wat de kleuren/lijnen betekenen","De titel","Totaal","Schaal"], answer: 0, wrongHints: [null, "Niet legenda.", "Niet.", "Niet."] },
      { q: "Bij een **lijngrafiek**: stijgende lijn = ?", options: ["Toename","Afname","Geen verandering","Patroon herhalend"], answer: 0, wrongHints: [null, "Andersom.", "Vlakke lijn.", "Niet."] },
      { q: "Welke grafiek bij **'4 leerlingen kiezen voetbal, 6 hockey, 2 zwemmen'**?", options: ["Staafdiagram","Lijngrafiek","Tijdslijn","Geen"], answer: 0, wrongHints: [null, "Niet tijd.", "Niet relevant.", "Wel."] },
      { q: "Welke grafiek bij **'temperatuur per uur'**?", options: ["Lijngrafiek","Taart","Staaf","Schema"], answer: 0, wrongHints: [null, "Niet verdeling.", "Soms maar niet beste.", "Niet grafiek."] },
      { q: "Bij **'totaal 100%' verdeling** kies je?", options: ["Taartdiagram","Lijn","Tijdslijn","Boom"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet grafiek voor data."] },
      { q: "In een **tabel** met cijferresultaten: hoeveel cellen heeft 'naam + 3 vakken' voor 1 leerling?", options: ["4","3","1","2"], answer: 0, wrongHints: [null, "Vergeet naam.", "Te weinig.", "Te weinig."] },
      { q: "Een **x-as-titel** beschrijft wat?", options: ["Welke variabele op x-as","Het totaal","De legenda","De schaal"], answer: 0, wrongHints: [null, "Niet titel.", "Niet.", "Niet."] },
      { q: "Bij **schaal-aanpassing** kun je een grafiek?", options: ["Misleiden door verandering schaal","Onmogelijk maken","Mooier maken alleen","Niet veranderen"], answer: 0, wrongHints: [null, "Niet — wel mogelijk.", "Niet alleen mooi.", "Niet — wel verandering."] },
      { q: "**Trend** in lijngrafiek = ?", options: ["Algemene richting","1 punt","Titel","Schaal"], answer: 0, wrongHints: [null, "Niet de richting.", "Niet inhoud.", "Niet richting."] },
      { q: "Welk grafiek-type voor **'sterren-positie'** verspreid op vlak?", options: ["Verspreidingsdiagram","Lijn","Taart","Tabel"], answer: 0, wrongHints: [null, "Niet — geen lijn.", "Niet.", "Geen grafiek."] },
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
    "Grafieken lezen voor groep 6-8 — staafdiagram, lijngrafiek, taartdiagram, tabel ↔ grafiek. Toets-praktijksommen met temperatuur, regen, klas-aantallen, koekjes. ~15 min.",
  triggerKeywords: [
    "grafiek", "staaf", "lijn", "cirkel", "taart", "diagram",
    "tabel", "aflezen", "verschil", "temperatuur",
    "procent", "totaal", "patroon",
  ],
  chapters,
  steps,
};

export default grafiekenLezenPo;
