// Leerpad: Rekenen groep 8 · blok 1 — schatten, kommagetallen vermenigvuldigen,
// breuken ↔ kommagetallen, lijndiagram.
//
// Mark 11 nov 2026: Brian (groep 8) snapt het doelenblad van blok 1 niet. Mark wil dat je zo'n blad
// straks kunt fotograferen en dan uitleg + overhoring krijgt. Dit pad is STAP 1: het blad als vaste
// les, met de hand nagerekend, en tegelijk het sjabloon dat de foto-functie later vult:
//   één stap per doel van het blad → uitleg met dezelfde aanpak als op school (zelfde stappen,
//   ANDERE getallen) → eigen vragen → aan het eind een gemengde overhoring.
// Regels: geen vragen of getallen uit het boek overnemen (eigen sommen, zie Doorstroomtoets-regel),
// de methode niet bij naam noemen, wrongHints geven richting en nooit het antwoord.
// Alle antwoorden worden nagerekend door src/learnPaths/rekenenBlok1Groep8.test.js.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  grid: "rgba(255,255,255,0.20)",
  gridSterk: "rgba(255,255,255,0.45)",
  curve: "#00c853",
  curve2: "#69f0ae",
  highlight: "#ffd54f",
  accent: "#ff8a65",
  roze: "#ff80ab",
  digit: "#80cbc4",
  komma: "#ff5252",
};

const stepEmojis = ["🎯", "✖️", "📏", "📈", "🏆"];

const chapters = [
  { letter: "A", title: "Doel 1 — Schatten", emoji: "🎯", from: 0, to: 0 },
  { letter: "B", title: "Doel 2 — Keer met kommagetallen", emoji: "✖️", from: 1, to: 1 },
  { letter: "C", title: "Doel 3 — Breuken en kommagetallen", emoji: "📏", from: 2, to: 2 },
  { letter: "D", title: "Doel 4 — Lijndiagram", emoji: "📈", from: 3, to: 3 },
  { letter: "E", title: "Overhoring — alles door elkaar", emoji: "🏆", from: 4, to: 4 },
];

// ── Tekeningen ──────────────────────────────────────────────────────────────

function schattenSvg() {
  const w = 320, h = 190;
  // Elke rij: de som links, de ronde som in een geel vakje (midden op x=205), de uitkomst rechts.
  const rij = (y, precies, rond, uitkomst, vakB = 92) => `
<text x="10" y="${y}" fill="${COLORS.text}" font-size="12" font-family="Arial">${precies}</text>
<rect x="${205 - vakB / 2}" y="${y - 16}" width="${vakB}" height="23" rx="11" fill="rgba(255,213,79,0.14)" stroke="${COLORS.highlight}" stroke-width="1"/>
<text x="205" y="${y}" text-anchor="middle" fill="${COLORS.highlight}" font-size="12" font-family="Arial" font-weight="bold">${rond}</text>
<text x="312" y="${y}" text-anchor="end" fill="${COLORS.curve2}" font-size="12" font-family="Arial" font-weight="bold">${uitkomst}</text>`;
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Eerst rond maken, dan rekenen</text>
<text x="10" y="46" fill="${COLORS.muted}" font-size="10" font-family="Arial">de som</text>
<text x="205" y="46" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">ronde getallen</text>
<text x="312" y="46" text-anchor="end" fill="${COLORS.muted}" font-size="10" font-family="Arial">ongeveer</text>
${rij(74, "4 × € 298", "4 × 300", "€ 1200")}
${rij(110, "2890 + 5120 + 990", "3000 + 5000 + 1000", "9000", 136)}
${rij(146, "€ 356,90 : 6", "360 : 6", "€ 60")}
<text x="${w / 2}" y="176" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">Bij delen: kies een getal uit de tafel (36 : 6)</text>
</svg>`;
}

function kommaPlaatsenSvg() {
  const w = 320, h = 200;
  const blok = (y, nr, titel, som, kleur) => `
<rect x="12" y="${y}" width="296" height="44" rx="8" fill="${COLORS.paper}" stroke="${kleur}" stroke-width="1"/>
<circle cx="34" cy="${y + 22}" r="12" fill="${kleur}"/>
<text x="34" y="${y + 27}" text-anchor="middle" fill="#10202c" font-size="13" font-family="Arial" font-weight="bold">${nr}</text>
<text x="56" y="${y + 18}" fill="${COLORS.muted}" font-size="10.5" font-family="Arial">${titel}</text>
<text x="56" y="${y + 36}" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">${som}</text>`;
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">4,8 × 6,1 in drie stappen</text>
${blok(34, 1, "Schatten", "ongeveer 5 × 6 = 30", COLORS.highlight)}
${blok(86, 2, "Rekenen zonder komma's", "48 × 61 = 2928", COLORS.digit)}
${blok(138, 3, "Komma plaatsen: wat ligt bij 30?", "29,28", COLORS.curve2)}
</svg>`;
}

function getallenlijnSvg() {
  const w = 320, h = 170;
  const x0 = 24, x1 = 296;
  const px = (v) => x0 + (v - 3) * (x1 - x0);
  let ticks = "";
  for (let i = 0; i <= 10; i++) {
    const x = x0 + (i * (x1 - x0)) / 10;
    const groot = i === 0 || i === 5 || i === 10;
    ticks += `<line x1="${x}" y1="${groot ? 84 : 89}" x2="${x}" y2="${groot ? 106 : 101}" stroke="${COLORS.text}" stroke-width="${groot ? 1.6 : 1}"/>`;
  }
  const punt = (v, label, boven) => `
<circle cx="${px(v)}" cy="95" r="4.5" fill="${COLORS.highlight}"/>
<line x1="${px(v)}" y1="${boven ? 62 : 128}" x2="${px(v)}" y2="${boven ? 89 : 101}" stroke="${COLORS.highlight}" stroke-width="1" stroke-dasharray="2 2"/>
<text x="${px(v)}" y="${boven ? 56 : 142}" text-anchor="middle" fill="${COLORS.highlight}" font-size="12" font-family="Arial" font-weight="bold">${label}</text>`;
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Alles als kommagetal op de getallenlijn</text>
<line x1="${x0 - 8}" y1="95" x2="${x1 + 8}" y2="95" stroke="${COLORS.text}" stroke-width="1.6"/>
${ticks}
<text x="${x0}" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">3</text>
<text x="${x1}" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">4</text>
${punt(3.05, "3,05", true)}
${punt(3.2, "3,2", false)}
${punt(3.4, "3,4", true)}
${punt(3.5, "3,5", false)}
<text x="${w / 2}" y="162" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">links = kleiner · rechts = groter</text>
</svg>`;
}

// Lijndiagram met fijne hulplijnen (elke `klein`) en dikke lijnen met getal (elke `groot`).
// Bewust GEEN getallen bij de punten: aflezen is hier juist de oefening.
function lijndiagramSvg({ titel, yTitel, xLabels, series, yMax, klein, groot }) {
  const w = 340, padL = 44, padR = 14, padT = 46;
  const plotH = 232;
  const legendaH = series.length > 1 ? 22 * series.length : 0;
  const h = padT + plotH + 30 + legendaH + 6;
  const plotW = w - padL - padR;
  const bodem = padT + plotH;
  const px = (i) => padL + 16 + (i * (plotW - 32)) / (xLabels.length - 1);
  const py = (v) => bodem - (plotH * v) / yMax;
  let raster = "";
  for (let v = 0; v <= yMax; v += klein) {
    const sterk = v % groot === 0;
    raster += `<line x1="${padL}" y1="${py(v)}" x2="${w - padR}" y2="${py(v)}" stroke="${sterk ? COLORS.gridSterk : COLORS.grid}" stroke-width="${sterk ? 1 : 0.6}"/>`;
    if (sterk) raster += `<text x="${padL - 6}" y="${py(v) + 4}" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">${v}</text>`;
  }
  let onder = "";
  xLabels.forEach((l, i) => {
    onder += `<line x1="${px(i)}" y1="${padT}" x2="${px(i)}" y2="${bodem + 4}" stroke="${COLORS.grid}" stroke-width="0.6"/>`;
    onder += `<text x="${px(i)}" y="${bodem + 18}" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">${l}</text>`;
  });
  let lijnen = "";
  series.forEach((s) => {
    const pts = s.waarden.map((v, i) => `${px(i)},${py(v)}`).join(" ");
    lijnen += `<polyline points="${pts}" fill="none" stroke="${s.kleur}" stroke-width="2"/>`;
    s.waarden.forEach((v, i) => {
      lijnen += `<circle cx="${px(i)}" cy="${py(v)}" r="3.2" fill="${s.kleur}"/>`;
    });
  });
  let legenda = "";
  if (series.length > 1) {
    series.forEach((s, i) => {
      const y = bodem + 44 + i * 22;
      legenda += `<line x1="${padL}" y1="${y - 4}" x2="${padL + 26}" y2="${y - 4}" stroke="${s.kleur}" stroke-width="2"/><circle cx="${padL + 13}" cy="${y - 4}" r="3.2" fill="${s.kleur}"/>`;
      legenda += `<text x="${padL + 34}" y="${y}" fill="${COLORS.text}" font-size="11.5" font-family="Arial">${s.naam}</text>`;
    });
  }
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="16" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">${titel}</text>
<text x="6" y="34" fill="${COLORS.highlight}" font-size="10.5" font-family="Arial" font-weight="bold">${yTitel}</text>
${raster}
${onder}
<line x1="${padL}" y1="${bodem}" x2="${w - padR}" y2="${bodem}" stroke="${COLORS.text}" stroke-width="1.3"/>
<line x1="${padL}" y1="${padT}" x2="${padL}" y2="${bodem}" stroke="${COLORS.text}" stroke-width="1.3"/>
${lijnen}
${legenda}
</svg>`;
}

// De gegevens staan los van de tekening, zodat de test de antwoorden ermee kan narekenen.
export const ZWEMBAD = {
  maanden: ["jul", "aug", "sep", "okt", "nov", "dec"],
  ochtend: [15, 22, 30, 33, 46, 52], // × 100 bezoekers
  middag: [40, 48, 44, 36, 28, 16], // × 100 bezoekers
};
export const FIETSTOCHT = {
  uren: ["0 uur", "1 uur", "2 uur", "3 uur", "4 uur"],
  km: [0, 15, 30, 30, 50],
};

const zwembadSvg = () =>
  lijndiagramSvg({
    titel: "Bezoekers van het zwembad",
    yTitel: "aantal bezoekers (× 100)",
    xLabels: ZWEMBAD.maanden,
    series: [
      { naam: "bezoekers in de ochtend", kleur: COLORS.curve2, waarden: ZWEMBAD.ochtend },
      { naam: "bezoekers in de middag", kleur: COLORS.roze, waarden: ZWEMBAD.middag },
    ],
    yMax: 60,
    klein: 2,
    groot: 10,
  });

const fietsSvg = () =>
  lijndiagramSvg({
    titel: "Fietstocht van Noor",
    yTitel: "afstand (km)",
    xLabels: FIETSTOCHT.uren,
    series: [{ naam: "afstand", kleur: COLORS.highlight, waarden: FIETSTOCHT.km }],
    yMax: 50,
    klein: 5,
    groot: 10,
  });

// ── Stappen ─────────────────────────────────────────────────────────────────

const steps = [
  // ═══ DOEL 1 — SCHATTEN ═══
  {
    title: "Schatten: hoeveel is het ongeveer?",
    explanation:
      "Soms hoef je het antwoord niet precies te weten. Je wilt alleen weten: **hoeveel is het ongeveer?** Dat heet **schatten**.\n\n**Zo doe je dat**: maak van elk getal een **rond getal** dat er dichtbij ligt. Daarna is de som makkelijk.\n\n**Keer** — 4 × € 298\n• 298 ligt vlak bij 300.\n• 4 × 300 = 1200. Het is dus ongeveer € 1200.\n\n**Plus** — 2890 + 5120 + 990\n• Rond: 3000 + 5000 + 1000 = 9000.\n\n**Delen** — € 356,90 : 6\n• Let op: hier kies je niet zomaar 400. Kies een getal dat je makkelijk door 6 kunt delen.\n• 36 : 6 ken je uit de tafel van 6. Dus neem je **360**.\n• 360 : 6 = 60. Het is dus ongeveer € 60.\n\n**Wanneer is schatten slim?**\n• Als je snel wilt weten of je genoeg geld hebt.\n• Als je wilt nakijken of een antwoord kan kloppen.\n\nMoet het precies, zoals bij wisselgeld? Dan schat je niet, dan reken je.",
    svg: schattenSvg(),
    checks: [
      {
        q: "Hoeveel is **7 × € 49** ongeveer?",
        options: ["€ 350", "€ 280", "€ 3500", "€ 35"],
        answer: 0,
        wrongHints: [null, "Je hebt met 40 gerekend. Ligt 49 dichter bij 40 of bij 50?", "Kijk nog eens: is 7 keer ongeveer 50 al meer dan duizend?", "Eén ding kost al bijna € 50. Kunnen zeven dingen dan samen minder kosten?"],
        uitlegPad: {
          stappen: [
            { titel: "Maak het rond", tekst: "49 ligt vlak bij **50**. Dat is een rond getal." },
            { titel: "Reken met het ronde getal", tekst: "7 × 50 = **350**. Het is dus ongeveer € 350." },
          ],
          woorden: [{ woord: "schatten", uitleg: "Uitrekenen hoeveel iets ongeveer is, met ronde getallen." }, { woord: "rond getal", uitleg: "Een getal dat makkelijk rekent, zoals 50, 300 of 1000." }],
          theorie: "Schatten = eerst afronden naar een getal dichtbij, dan pas rekenen.",
          voorbeelden: [{ type: "stap", tekst: "6 × € 195 → 6 × 200 = € 1200." }],
          basiskennis: [{ onderwerp: "Tafels met nullen", uitleg: "7 × 5 = 35, dus 7 × 50 = 350." }],
          niveaus: {
            basis: "Welk rond getal ligt vlak bij 49? Reken daarmee verder.",
            simpeler: "49 is bijna 50. Reken 7 × 50 uit: 7 × 5 = 35, en dan een nul erachter.",
            nogSimpeler: "€ 350",
          },
        },
      },
      {
        q: "Hoeveel is **1980 + 4025 + 3010** ongeveer?",
        options: ["9000", "8000", "10 000", "900"],
        answer: 0,
        wrongHints: [null, "Kijk naar 1980: ligt dat dichter bij 1000 of bij 2000?", "Maak elk getal rond op een duizendtal en tel dan opnieuw.", "Het eerste getal is al bijna 2000. Kan het totaal dan kleiner zijn?"],
      },
      {
        q: "Hoeveel is **€ 418,50 : 7** ongeveer?",
        options: ["€ 60", "€ 6", "€ 600", "€ 70"],
        answer: 0,
        wrongHints: [null, "Reken terug: 7 × € 6 is hoeveel? Komt dat in de buurt van € 418?", "Reken terug: 7 × € 600 is hoeveel? Komt dat in de buurt van € 418?", "Reken terug: 7 × 70 = 490. Ligt 418 daar dichtbij, of past een ander getal uit de tafel van 7 beter?"],
        uitlegPad: {
          stappen: [
            { titel: "Zoek een getal uit de tafel", tekst: "Je deelt door 7. Welk getal vlak bij 418 kun je makkelijk door 7 delen? 42 : 7 ken je. Dus neem **420**." },
            { titel: "Reken met het ronde getal", tekst: "420 : 7 = **60**. Het is dus ongeveer € 60." },
          ],
          woorden: [{ woord: "delen", uitleg: "Eerlijk verdelen in gelijke stukken." }],
          theorie: "Bij schattend delen kies je een rond getal dat in de tafel van de deler zit.",
          voorbeelden: [{ type: "stap", tekst: "€ 356,90 : 6 → 360 : 6 = € 60." }],
          basiskennis: [{ onderwerp: "Tafel van 7", uitleg: "6 × 7 = 42, dus 60 × 7 = 420." }],
          niveaus: {
            basis: "Welk getal in de buurt van 418 zit in de tafel van 7 (met een nul erachter)?",
            simpeler: "418 is bijna 420. En 42 : 7 = 6. Hoeveel is dan 420 : 7?",
            nogSimpeler: "€ 60",
          },
        },
      },
      {
        q: "Je wilt **6 × 795** schatten. Welke ronde som past het best?",
        options: ["6 × 800", "6 × 700", "10 × 800", "6 × 1000"],
        answer: 0,
        wrongHints: [null, "Ligt 795 dichter bij 700 of bij 800?", "De 6 is al een makkelijk getal. Moet je die ook veranderen?", "1000 ligt ver van 795 af. Welk honderdtal ligt er vlak naast?"],
      },
      {
        q: "Je wilt **318 : 8** schatten. Welk rond getal kies je voor 318?",
        options: ["320", "300", "400", "310"],
        answer: 0,
        wrongHints: [null, "Kun je 300 makkelijk door 8 delen? Zoek een getal uit de tafel van 8.", "400 ligt ver van 318 af. Is er een getal dichterbij dat in de tafel van 8 past?", "Kun je 310 makkelijk door 8 delen? Zoek een getal uit de tafel van 8."],
      },
      {
        q: "Vijf kaartjes kosten elk **€ 19,75**. Je hebt **€ 100**. Is dat genoeg?",
        options: ["Ja, het is iets minder dan € 100", "Nee, het is ongeveer € 150", "Nee, het is iets meer dan € 100", "Ja, het is ongeveer € 50"],
        answer: 0,
        wrongHints: [null, "Maak € 19,75 rond en reken 5 keer dat getal uit.", "Eén kaartje kost iets mínder dan € 20. Wordt het totaal dan meer of minder dan 5 × € 20?", "Je hebt met € 10 per kaartje gerekend. Ligt € 19,75 dichter bij € 10 of bij € 20?"],
      },
      {
        q: "Een school heeft **8 groepen** met elk ongeveer **28 kinderen**. Hoeveel kinderen zijn dat ongeveer?",
        options: ["240", "160", "2400", "36"],
        answer: 0,
        wrongHints: [null, "Je hebt met 20 gerekend. Ligt 28 dichter bij 20 of bij 30?", "Dat is wel erg veel voor één school. Reken 8 × 30 nog eens na.", "Je hebt 8 + 28 gedaan. Het zijn 8 groepen van 28: is dat plus of keer?"],
      },
      {
        q: "Wanneer is **schatten** een goed idee?",
        options: ["Als je snel wilt weten of je genoeg geld bij je hebt", "Als je wisselgeld teruggeeft bij de kassa", "Als je een plank zaagt die precies moet passen", "Als je de punten van een toets optelt voor het cijfer"],
        answer: 0,
        wrongHints: [null, "Wisselgeld moet tot op de cent kloppen. Mag dat 'ongeveer' zijn?", "Een plank die precies moet passen: mag die 'ongeveer' goed zijn?", "Een cijfer moet precies kloppen. Mag dat 'ongeveer' zijn?"],
      },
      {
        q: "Hoeveel is **5913 + 2088** ongeveer?",
        options: ["8000", "7000", "9000", "80 000"],
        answer: 0,
        wrongHints: [null, "Kijk naar 5913: ligt dat dichter bij 5000 of bij 6000?", "Kijk naar 2088: ligt dat dichter bij 2000 of bij 3000?", "Tel de duizendtallen nog eens: hoeveel nullen horen erachter?"],
      },
      {
        q: "Hoeveel is **€ 239,90 : 6** ongeveer?",
        options: ["€ 40", "€ 4", "€ 400", "€ 60"],
        answer: 0,
        wrongHints: [null, "Reken terug: 6 × € 4 is hoeveel? Komt dat in de buurt van € 240?", "Reken terug: 6 × € 400 is hoeveel? Komt dat in de buurt van € 240?", "Reken terug: 6 × 60 = 360. Dat is te veel. Welk getal uit de tafel van 6 past bij 24?"],
      },
    ],
  },

  // ═══ DOEL 2 — VERMENIGVULDIGEN MET KOMMAGETALLEN ═══
  {
    title: "Keer-sommen met kommagetallen",
    explanation:
      "Een som als **4,8 × 6,1** lijkt lastig door de komma's. Met drie stappen lukt het altijd.\n\n**Stap 1 — Schatten**\nMaak ronde getallen: 4,8 is ongeveer 5 en 6,1 is ongeveer 6.\n5 × 6 = 30. Het antwoord ligt dus **in de buurt van 30**.\n\n**Stap 2 — Rekenen zonder komma's**\nLaat de komma's even weg: 48 × 61. Dat mag met de rekenmachine.\n48 × 61 = 2928.\n\n**Stap 3 — De komma terugzetten**\nDe cijfers 2928 kloppen, alleen de komma ontbreekt nog. Waar moet hij staan?\n• 2,928 → veel te klein\n• **29,28** → vlak bij 30 ✓\n• 292,8 → veel te groot\n\nDus 4,8 × 6,1 = **29,28**.\n\n**Nog een**: 32 × 0,48\n• Schatten: 0,48 is ongeveer een half. De helft van 32 is 16.\n• Zonder komma: 32 × 48 = 1536.\n• Komma plaatsen: wat ligt bij 16? **15,36**.\n\n**Onthoud**: je schatting vertelt je waar de komma hoort. Daarom schat je altijd éérst.",
    svg: kommaPlaatsenSvg(),
    checks: [
      {
        q: "Je rekent **3,9 × 7,2** uit. Wat is een goede schatting?",
        options: ["28", "21", "280", "2,8"],
        answer: 0,
        wrongHints: [null, "Je hebt met 3 gerekend. Ligt 3,9 dichter bij 3 of bij 4?", "Maak ronde getallen: bijna 4 keer ongeveer 7. Wordt dat meer dan honderd?", "Bijna 4 keer ongeveer 7: kan dat kleiner zijn dan 3?"],
      },
      {
        q: "**3,9 × 7,2**. Zonder komma's: 39 × 72 = 2808. Wat is het antwoord?",
        options: ["28,08", "2,808", "280,8", "2808"],
        answer: 0,
        wrongHints: [null, "Schat eerst: ongeveer 4 × 7. Ligt jouw antwoord daarbij in de buurt?", "Schat eerst: ongeveer 4 × 7. Ligt jouw antwoord daarbij in de buurt?", "Hier staat nog geen komma. Wat was je schatting?"],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: schatten", tekst: "3,9 is bijna 4. 7,2 is ongeveer 7. Dus 4 × 7 = **28**." },
            { titel: "Stap 2: zonder komma's", tekst: "39 × 72 = **2808** (met de rekenmachine)." },
            { titel: "Stap 3: komma plaatsen", tekst: "Welk getal met de cijfers 2808 ligt bij 28? 2,808 is te klein, 280,8 te groot. **28,08** past." },
          ],
          woorden: [{ woord: "kommagetal", uitleg: "Een getal met een komma, zoals 3,9. Ná de komma staan de stukjes van 1." }],
          theorie: "Keer met kommagetallen: schatten → rekenen zonder komma's → komma plaatsen met je schatting.",
          voorbeelden: [{ type: "stap", tekst: "4,8 × 6,1 → schatting 30 → 48 × 61 = 2928 → 29,28." }],
          basiskennis: [{ onderwerp: "Afronden", uitleg: "3,9 ligt vlak bij 4 en 7,2 vlak bij 7." }],
          niveaus: {
            basis: "Maak eerst een schatting met ronde getallen. Welk antwoord ligt daar het dichtst bij?",
            simpeler: "Ongeveer 4 × 7 = 28. Zet de komma in 2808 zo dat het getal vlak bij 28 komt.",
            nogSimpeler: "28,08",
          },
        },
      },
      {
        q: "**6,2 × 4,9**. Zonder komma's: 62 × 49 = 3038. Wat is het antwoord?",
        options: ["30,38", "3,038", "303,8", "3038"],
        answer: 0,
        wrongHints: [null, "Schat eerst: ongeveer 6 × 5. Ligt jouw antwoord daarbij in de buurt?", "Schat eerst: ongeveer 6 × 5. Ligt jouw antwoord daarbij in de buurt?", "Hier staat nog geen komma. Wat was je schatting?"],
      },
      {
        q: "**18 × 0,52**. Zonder komma's: 18 × 52 = 936. Wat is het antwoord?",
        options: ["9,36", "93,6", "0,936", "936"],
        answer: 0,
        wrongHints: [null, "0,52 is ongeveer een half. Hoeveel is de helft van 18? Ligt jouw antwoord daarbij?", "0,52 is ongeveer een half. Kan de helft van 18 kleiner zijn dan 1?", "Je neemt ongeveer de helft van 18. Kan het antwoord dan groter zijn dan 18?"],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: schatten", tekst: "0,52 is ongeveer **een half**. De helft van 18 is **9**." },
            { titel: "Stap 2: zonder komma's", tekst: "18 × 52 = **936**." },
            { titel: "Stap 3: komma plaatsen", tekst: "Welk getal met de cijfers 936 ligt bij 9? **9,36**." },
          ],
          woorden: [{ woord: "0,5", uitleg: "Een half. Keer 0,5 is hetzelfde als de helft nemen." }],
          theorie: "Keer een getal kleiner dan 1 → het antwoord wordt kleiner dan waar je mee begon.",
          voorbeelden: [{ type: "stap", tekst: "32 × 0,48 → de helft van 32 is 16 → 32 × 48 = 1536 → 15,36." }],
          basiskennis: [{ onderwerp: "Keer een half", uitleg: "× 0,5 = de helft. 18 × 0,5 = 9." }],
          niveaus: {
            basis: "0,52 is ongeveer een half. Wat is de helft van 18? Zet de komma zo dat je daar dichtbij komt.",
            simpeler: "De helft van 18 is 9. Welk getal met de cijfers 936 ligt bij 9?",
            nogSimpeler: "9,36",
          },
        },
      },
      {
        q: "**7,8 × 5,1**. Zonder komma's: 78 × 51 = 3978. Wat is het antwoord?",
        options: ["39,78", "3,978", "397,8", "3978"],
        answer: 0,
        wrongHints: [null, "Schat eerst: ongeveer 8 × 5. Ligt jouw antwoord daarbij in de buurt?", "Schat eerst: ongeveer 8 × 5. Ligt jouw antwoord daarbij in de buurt?", "Hier staat nog geen komma. Wat was je schatting?"],
      },
      {
        q: "Wat doe je **als eerste** bij een som als 2,9 × 8,1?",
        options: ["Schatten met ronde getallen", "De komma ergens neerzetten", "Rekenen zonder komma's", "De getallen bij elkaar optellen"],
        answer: 0,
        wrongHints: [null, "Hoe weet je waar de komma hoort als je nog niet weet hoe groot het antwoord ongeveer is?", "Dat is stap 2. Wat heb je straks nodig om de komma goed te zetten?", "Het is een keer-som. Welke stap helpt je om straks de komma te plaatsen?"],
      },
      {
        q: "**25 × 0,39**. Zonder komma's: 25 × 39 = 975. Wat is het antwoord?",
        options: ["9,75", "97,5", "0,975", "975"],
        answer: 0,
        wrongHints: [null, "0,39 is minder dan een half. Kan het antwoord dan groter zijn dan 25?", "0,39 is ongeveer 0,4. Hoeveel is 25 × 0,4 ongeveer? Kleiner dan 1?", "Je vermenigvuldigt met een getal kleiner dan 1. Wordt 25 dan groter of kleiner?"],
      },
      {
        q: "Sem zegt: **2,1 × 9,8 = 205,8**. Kan dat kloppen?",
        options: ["Nee, het antwoord moet rond de 20 liggen", "Ja, want 21 × 98 = 2058", "Nee, het antwoord moet rond de 2 liggen", "Ja, want er staat één cijfer achter de komma"],
        answer: 0,
        wrongHints: [null, "De cijfers kloppen. Maar staat de komma goed? Schat eens met 2 × 10.", "Schat met ronde getallen: ongeveer 2 keer ongeveer 10.", "Tel niet de cijfers achter de komma. Schat met 2 × 10: hoe groot wordt het ongeveer?"],
      },
      {
        q: "**12 × 0,76**. Zonder komma's: 12 × 76 = 912. Wat is het antwoord?",
        options: ["9,12", "91,2", "0,912", "912"],
        answer: 0,
        wrongHints: [null, "0,76 is minder dan 1. Kan het antwoord dan groter zijn dan 12?", "0,76 is ongeveer drie kwart. Is drie kwart van 12 kleiner dan 1?", "Je vermenigvuldigt met een getal kleiner dan 1. Wordt 12 dan groter of kleiner?"],
      },
      {
        q: "**0,9 × 6,3**. Zonder komma's: 9 × 63 = 567. Wat is het antwoord?",
        options: ["5,67", "56,7", "0,567", "567"],
        answer: 0,
        wrongHints: [null, "0,9 is bijna 1. Hoeveel is 1 × 6,3 ongeveer? Ligt jouw antwoord daarbij?", "0,9 is bijna 1. Bijna 1 keer 6,3: kan dat kleiner zijn dan 1?", "Hier staat nog geen komma. Schat eerst: bijna 1 keer ruim 6."],
      },
    ],
  },

  // ═══ DOEL 3 — BREUKEN EN KOMMAGETALLEN ═══
  {
    title: "Breuken en kommagetallen vergelijken",
    explanation:
      "Een **breuk** en een **kommagetal** kunnen precies hetzelfde betekenen. Deze moet je kennen:\n\n• ½ = 0,5\n• ¼ = 0,25\n• ¾ = 0,75\n• 1/5 = 0,2\n• 1/10 = 0,1\n• 1/100 = 0,01\n\nStaat er een heel getal voor? Dat blijft gewoon staan: 2¼ = 2,25 en 3 1/10 = 3,1.\n\n**Zet van klein naar groot: 3½ – 3,4 – 3,05 – 3 1/5**\nBreuken en kommagetallen door elkaar vergelijken is lastig. Daarom:\n\n**Stap 1 — Maak van alles een kommagetal**\n3½ = 3,5 · 3,4 blijft 3,4 · 3,05 blijft 3,05 · 3 1/5 = 3,2\n\n**Stap 2 — Zet ze op de getallenlijn**\nHoe verder naar rechts, hoe groter.\n\n**Stap 3 — Lees af van klein naar groot**\n3,05 – 3,2 – 3,4 – 3,5\nSchrijf ze daarna weer op zoals ze in de som stonden: **3,05 – 3 1/5 – 3,4 – 3½**.\n\n**Let op**: 3,05 is kleiner dan 3,4. Meer cijfers achter de komma betekent niet dat het getal groter is. Tip: zet er een nul achter. 3,4 = 3,40, en 3,05 tegen 3,40 vergelijkt makkelijk.",
    svg: getallenlijnSvg(),
    checks: [
      {
        q: "Schrijf **¾** als kommagetal.",
        options: ["0,75", "0,34", "3,4", "0,25"],
        answer: 0,
        wrongHints: [null, "Je hebt de 3 en de 4 achter de komma gezet. Zo werkt het niet: hoeveel is één kwart als kommagetal?", "¾ is minder dan 1. Kan het dan meer dan 3 zijn?", "Dat is één kwart. Hoeveel kwarten heb je hier?"],
      },
      {
        q: "Schrijf **0,2** als breuk.",
        options: ["1/5", "1/2", "1/20", "2/5"],
        answer: 0,
        wrongHints: [null, "Een half is 0,5. Is 0,2 een half?", "0,2 is twee tienden. Hoeveel keer past 0,2 in 1?", "Twee vijfde is twee keer 1/5. Hoeveel is 1/5 als kommagetal?"],
        uitlegPad: {
          stappen: [
            { titel: "Lees het kommagetal", tekst: "0,2 = twee tienden = 2/10." },
            { titel: "Maak de breuk makkelijker", tekst: "2/10 kun je delen door 2: boven 1, onder 5. Dus **1/5**." },
            { titel: "Controle", tekst: "0,2 past vijf keer in 1 (0,2 + 0,2 + 0,2 + 0,2 + 0,2 = 1). Eén van die vijf stukken is 1/5." },
          ],
          woorden: [{ woord: "tiende", uitleg: "Eén van de tien gelijke stukken van 1. Als kommagetal: 0,1." }],
          theorie: "Het eerste cijfer achter de komma zijn de tienden: 0,2 = 2/10 = 1/5.",
          voorbeelden: [{ type: "stap", tekst: "0,5 = 5/10 = ½." }],
          basiskennis: [{ onderwerp: "Vaste paren", uitleg: "½ = 0,5 · ¼ = 0,25 · 1/5 = 0,2 · 1/10 = 0,1." }],
          niveaus: {
            basis: "Hoeveel keer past 0,2 in 1 hele? Dat getal komt onder de breukstreep.",
            simpeler: "0,2 past vijf keer in 1. Eén van die vijf stukken is dus…",
            nogSimpeler: "1/5",
          },
        },
      },
      {
        q: "Schrijf **2 3/10** als kommagetal.",
        options: ["2,3", "2,03", "2,310", "23"],
        answer: 0,
        wrongHints: [null, "2,03 is 2 en drie hónderdsten. Hier staan drie tíénden.", "Je hebt de breuk achter de komma overgeschreven. Hoeveel is 3/10 als kommagetal?", "Het getal ligt tussen 2 en 3. Waar hoort de komma?"],
      },
      {
        q: "Welk getal is **groter**: 1,4 of 1¼?",
        options: ["1,4", "1¼", "Ze zijn even groot", "Dat kun je niet weten"],
        answer: 0,
        wrongHints: [null, "Maak van 1¼ eerst een kommagetal en vergelijk dan opnieuw.", "Maak van 1¼ eerst een kommagetal. Staat er dan hetzelfde?", "Je kunt het wél weten: maak van 1¼ een kommagetal."],
      },
      {
        q: "Zet van **klein naar groot**: 4,3 – 4¼ – 4,03 – 4½",
        options: ["4,03 – 4¼ – 4,3 – 4½", "4¼ – 4½ – 4,03 – 4,3", "4,03 – 4,3 – 4¼ – 4½", "4½ – 4,3 – 4¼ – 4,03"],
        answer: 0,
        wrongHints: [null, "Je hebt de breuken en de kommagetallen apart gezet. Maak eerst van alles een kommagetal.", "Bijna. Vergelijk 4,3 en 4¼ nog eens: hoeveel is 4¼ als kommagetal?", "Dit is van groot naar klein. Wat vroeg de som?"],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: alles als kommagetal", tekst: "4,3 blijft 4,3 · 4¼ = 4,25 · 4,03 blijft 4,03 · 4½ = 4,5." },
            { titel: "Stap 2: even lang maken", tekst: "Zet nullen erbij: 4,30 · 4,25 · 4,03 · 4,50. Nu vergelijk je 30, 25, 3 en 50." },
            { titel: "Stap 3: op volgorde", tekst: "4,03 – 4,25 – 4,30 – 4,50. Terug naar de som: **4,03 – 4¼ – 4,3 – 4½**." },
          ],
          woorden: [{ woord: "kwart", uitleg: "¼. Als kommagetal 0,25." }],
          theorie: "Vergelijken lukt alleen goed als alles in dezelfde vorm staat. Maak daarom van elke breuk een kommagetal.",
          voorbeelden: [{ type: "stap", tekst: "3½ – 3,4 – 3,05 – 3 1/5 → 3,5 · 3,4 · 3,05 · 3,2 → 3,05 – 3 1/5 – 3,4 – 3½." }],
          basiskennis: [{ onderwerp: "Nul erachter", uitleg: "4,3 en 4,30 zijn precies even groot." }],
          niveaus: {
            basis: "Maak van 4¼ en 4½ een kommagetal. Zet daarna alle vier op een getallenlijn.",
            simpeler: "4¼ = 4,25 en 4½ = 4,5. Zet op volgorde: 4,30 · 4,25 · 4,03 · 4,50.",
            nogSimpeler: "4,03 – 4¼ – 4,3 – 4½",
          },
        },
      },
      {
        q: "Welk getal is het **kleinst**: 2,1 – 2,09 – 2 1/5 – 2,5?",
        options: ["2,09", "2,1", "2 1/5", "2,5"],
        answer: 0,
        wrongHints: [null, "Zet er een nul achter: 2,10. Is er een getal dat nog kleiner is?", "Hoeveel is 2 1/5 als kommagetal? Is dat het kleinste van de vier?", "Vergelijk het eerste cijfer achter de komma van alle vier."],
      },
      {
        q: "Schrijf **1/100** als kommagetal.",
        options: ["0,01", "0,1", "0,001", "1,00"],
        answer: 0,
        wrongHints: [null, "0,1 is één tiende. Hoe schrijf je één honderdste?", "Dat is één duizendste. Op welke plek achter de komma staan de honderdsten?", "1,00 is gewoon 1 hele. Eén honderdste is veel kleiner."],
      },
      {
        q: "Welke twee getallen zijn **even groot**?",
        options: ["2,5 en 2½", "2,5 en 2 1/5", "2,05 en 2½", "2,2 en 2½"],
        answer: 0,
        wrongHints: [null, "Hoeveel is 1/5 als kommagetal? Is dat 0,5?", "Een half is vijf tíénden. Wat betekent de 5 in 2,05?", "Hoeveel is een half als kommagetal?"],
      },
      {
        q: "Schrijf **1,75** als breuk.",
        options: ["1¾", "1¼", "1½", "1 7/5"],
        answer: 0,
        wrongHints: [null, "1¼ is 1,25. Hoeveel kwarten zitten er in 0,75?", "1½ is 1,5. Dat is minder dan 1,75.", "Je hebt de cijfers achter de komma overgeschreven. Denk aan kwarten: 0,25 – 0,50 – 0,75."],
      },
      {
        q: "Zet van **klein naar groot**: 0,6 – ½ – 0,55 – ¾",
        options: ["½ – 0,55 – 0,6 – ¾", "½ – ¾ – 0,55 – 0,6", "0,55 – 0,6 – ½ – ¾", "¾ – 0,6 – 0,55 – ½"],
        answer: 0,
        wrongHints: [null, "Je hebt de breuken en de kommagetallen apart gezet. Maak eerst van alles een kommagetal.", "Hoeveel is ½ als kommagetal? Is dat groter of kleiner dan 0,55?", "Dit is van groot naar klein. Wat vroeg de som?"],
      },
    ],
  },

  // ═══ DOEL 4 — LIJNDIAGRAM ═══
  {
    title: "Een lijndiagram aflezen en ermee rekenen",
    explanation:
      "Een **lijndiagram** laat zien hoe iets **verandert in de tijd**. Kijk altijd eerst naar deze vier dingen:\n\n**1. De titel en de legenda**\nWaar gaat het over? En welke kleur hoort bij welke lijn? Hier: groen = ochtend, roze = middag.\n\n**2. De as aan de zijkant**\nDaar staat: aantal bezoekers **(× 100)**. Dat betekent: het getal dat je afleest moet je nog **keer 100** doen. Lees je 30 af? Dan zijn het 30 × 100 = 3000 bezoekers.\n\n**3. De streepjes**\nBij de dikke lijnen staan getallen: 10, 20, 30. Daartussen lopen dunne lijntjes. Tel na hoeveel elk lijntje waard is: van 10 naar 20 zijn vijf stapjes, dus elk lijntje is **2**.\nLigt een punt precies **tussen** twee lijntjes, bijvoorbeeld tussen 14 en 16? Dan is het 15.\n\n**4. Stijgen en dalen**\n• Lijn omhoog = het wordt meer.\n• Lijn omlaag = het wordt minder.\n• Hoe **steiler** de lijn, hoe sneller het verandert. Het steilste stuk omhoog is de sterkste stijging.\n\n**Rekenen met het diagram**\nVerschil = twee getallen aflezen en van elkaar aftrekken. Samen = optellen. Vergeet daarna de × 100 niet.",
    svg: zwembadSvg(),
    checks: [
      {
        q: "Hoeveel bezoekers kwamen er in **september** in de **ochtend**?",
        svg: zwembadSvg(),
        options: ["3000", "30", "300", "4400"],
        answer: 0,
        wrongHints: [null, "Je hebt goed afgelezen. Maar wat staat er bij de as aan de zijkant, tussen haakjes?", "Kijk nog eens naar de as: met hoeveel moet je het afgelezen getal vermenigvuldigen?", "Je hebt de roze lijn afgelezen. Welke kleur hoort bij de ochtend?"],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de goede lijn", tekst: "De legenda zegt: ochtend = de **groene** lijn." },
            { titel: "Lees af", tekst: "Ga bij 'sep' omhoog tot het groene punt. Ga dan naar links: het punt ligt op de dikke lijn van **30**." },
            { titel: "Kijk naar de as", tekst: "Er staat (× 100). Dus 30 × 100 = **3000** bezoekers." },
          ],
          woorden: [{ woord: "legenda", uitleg: "Het lijstje dat vertelt welke kleur bij welke lijn hoort." }, { woord: "× 100", uitleg: "Het afgelezen getal moet je nog keer honderd doen." }],
          theorie: "Aflezen gaat in drie stappen: goede lijn → omhoog en naar links → kijken of er een × bij de as staat.",
          voorbeelden: [{ type: "stap", tekst: "Lees je 22 af en staat er (× 100)? Dan is het 2200." }],
          basiskennis: [{ onderwerp: "Keer 100", uitleg: "Twee nullen erachter: 30 × 100 = 3000." }],
          niveaus: {
            basis: "Welke lijn hoort bij de ochtend? Lees het punt bij september af en kijk dan wat er tussen haakjes bij de as staat.",
            simpeler: "Het groene punt bij september ligt op 30. Bij de as staat × 100. Hoeveel is 30 × 100?",
            nogSimpeler: "3000",
          },
        },
      },
      {
        q: "Hoeveel bezoekers kwamen er in **juli** in de **ochtend**?",
        svg: zwembadSvg(),
        options: ["1500", "1400", "1600", "4000"],
        answer: 0,
        wrongHints: [null, "Kijk heel precies: ligt het punt óp een lijntje of ertussen?", "Kijk heel precies: ligt het punt óp een lijntje of ertussen?", "Je hebt de roze lijn afgelezen. Welke kleur hoort bij de ochtend?"],
        uitlegPad: {
          stappen: [
            { titel: "Hoeveel is één lijntje?", tekst: "Van 10 naar 20 zijn vijf stapjes. Elk dun lijntje is dus **2**: 10, 12, 14, 16, 18, 20." },
            { titel: "Waar ligt het punt?", tekst: "Het groene punt bij 'jul' ligt precies **tussen** 14 en 16. Dat is **15**." },
            { titel: "Kijk naar de as", tekst: "Er staat (× 100). Dus 15 × 100 = **1500** bezoekers." },
          ],
          woorden: [{ woord: "aflezen", uitleg: "In het diagram opzoeken welk getal bij een punt hoort." }],
          theorie: "Een punt tussen twee lijntjes ligt in het midden van die twee getallen.",
          voorbeelden: [{ type: "stap", tekst: "Tussen 18 en 20 ligt 19. Met (× 100) wordt dat 1900." }],
          basiskennis: [{ onderwerp: "Het midden", uitleg: "Precies tussen 14 en 16 ligt 15." }],
          niveaus: {
            basis: "Tel eerst hoeveel elk dun lijntje waard is. Tussen welke twee lijntjes ligt het punt?",
            simpeler: "Het punt ligt tussen 14 en 16. Welk getal ligt daar precies tussen? Doe dat keer 100.",
            nogSimpeler: "1500",
          },
        },
      },
      {
        q: "Tussen welke maanden **stijgt** de groene lijn het **sterkst**?",
        svg: zwembadSvg(),
        options: ["Tussen oktober en november", "Tussen juli en augustus", "Tussen september en oktober", "Tussen november en december"],
        answer: 0,
        wrongHints: [null, "Daar stijgt de lijn wel, maar zoek het stuk dat het steilst omhoog loopt.", "Daar loopt de lijn juist bijna vlak. Zoek het steilste stuk.", "Daar stijgt de lijn wel, maar is er een stuk dat nog steiler omhoog gaat?"],
      },
      {
        q: "Hoeveel bezoekers kwamen er in **augustus** in de middag **meer** dan in de ochtend?",
        svg: zwembadSvg(),
        options: ["2600", "26", "7000", "2200"],
        answer: 0,
        wrongHints: [null, "Het verschil klopt. Maar wat staat er tussen haakjes bij de as?", "Je hebt de twee getallen opgeteld. De vraag is hoeveel **meer**: is dat plus of min?", "Dat is het aantal in de ochtend. Hoeveel waren het er in de middag, en wat is het verschil?"],
      },
      {
        q: "In welke maand kwamen er voor het eerst **meer** bezoekers in de **ochtend** dan in de middag?",
        svg: zwembadSvg(),
        options: ["November", "Oktober", "September", "December"],
        answer: 0,
        wrongHints: [null, "Kijk bij oktober: welke lijn ligt daar hoger, groen of roze?", "Kijk bij september: welke lijn ligt daar hoger, groen of roze?", "In december ligt groen hoger, dat klopt. Maar was dat de eerste maand?"],
      },
      {
        q: "Hoeveel bezoekers kwamen er in **december** in **totaal** (ochtend en middag samen)?",
        svg: zwembadSvg(),
        options: ["6800", "3600", "5200", "68"],
        answer: 0,
        wrongHints: [null, "Je hebt de twee getallen van elkaar afgetrokken. 'In totaal' betekent: plus of min?", "Dat is alleen de ochtend. Wat moet je er nog bij tellen?", "De som klopt. Maar wat staat er tussen haakjes bij de as?"],
      },
      {
        q: "Noor fietst een tocht. Hoeveel kilometer heeft ze gefietst na **2 uur**?",
        svg: fietsSvg(),
        options: ["30 km", "15 km", "50 km", "3000 km"],
        answer: 0,
        wrongHints: [null, "Dat is de afstand na 1 uur. Zoek het punt bij 2 uur.", "Dat is de afstand aan het eind. Zoek het punt bij 2 uur.", "Kijk naar de as: staat hier ook (× 100) bij?"],
      },
      {
        q: "Wat doet Noor tussen **2 uur en 3 uur**?",
        svg: fietsSvg(),
        options: ["Ze staat stil (pauze)", "Ze fietst heel hard", "Ze fietst terug naar huis", "Ze fietst langzaam verder"],
        answer: 0,
        wrongHints: [null, "Bij hard fietsen loopt de lijn steil omhoog. Hoe loopt de lijn hier?", "Bij terugfietsen wordt de afstand kleiner en daalt de lijn. Daalt de lijn hier?", "Bij langzaam fietsen stijgt de lijn een klein beetje. Stijgt de lijn hier?"],
        uitlegPad: {
          stappen: [
            { titel: "Lees twee punten af", tekst: "Na 2 uur: 30 km. Na 3 uur: ook 30 km." },
            { titel: "Wat betekent dat?", tekst: "In dat uur kwam er **geen kilometer bij**. De lijn loopt vlak. Noor stond dus stil." },
          ],
          woorden: [{ woord: "vlakke lijn", uitleg: "De lijn gaat niet omhoog en niet omlaag: er verandert niets." }],
          theorie: "Afstand-tijd-diagram: steil = snel, minder steil = langzaam, vlak = stilstaan.",
          voorbeelden: [{ type: "stap", tekst: "Van 0 naar 1 uur stijgt de lijn van 0 naar 15: Noor fietst 15 km in dat uur." }],
          basiskennis: [{ onderwerp: "Verschil", uitleg: "30 − 30 = 0 km erbij." }],
          niveaus: {
            basis: "Lees de afstand af bij 2 uur en bij 3 uur. Hoeveel kilometer kwam erbij?",
            simpeler: "Bij 2 uur én bij 3 uur staat 30 km. Er kwam niets bij. Wat deed Noor dan?",
            nogSimpeler: "Ze staat stil (pauze)",
          },
        },
      },
      {
        q: "Hoe **snel** fietste Noor in de **eerste 2 uur**?",
        svg: fietsSvg(),
        options: ["15 km per uur", "30 km per uur", "60 km per uur", "2 km per uur"],
        answer: 0,
        wrongHints: [null, "30 km is de afstand in twee uur samen. Hoeveel is dat in één uur?", "Je hebt 30 × 2 gedaan. Hoe ver kwam ze in twee uur, en hoeveel is dat per uur?", "2 is het aantal uren. Hoeveel kilometer legde ze in die uren af?"],
      },
      {
        q: "In welk uur fietste Noor het **snelst**?",
        svg: fietsSvg(),
        options: ["Tussen 3 uur en 4 uur", "Tussen 0 uur en 1 uur", "Tussen 1 uur en 2 uur", "Tussen 2 uur en 3 uur"],
        answer: 0,
        wrongHints: [null, "Daar kwam 15 km bij. Is er een uur waarin de lijn nog steiler omhoog gaat?", "Daar kwam 15 km bij. Is er een uur waarin de lijn nog steiler omhoog gaat?", "Daar loopt de lijn vlak. Wat betekent een vlakke lijn?"],
      },
    ],
  },

  // ═══ OVERHORING — ALLES DOOR ELKAAR ═══
  {
    title: "Overhoring: alle vier de doelen door elkaar",
    explanation:
      "Nu alles door elkaar, net als op de toets. Je moet zelf zien welke aanpak erbij hoort.\n\n**Spiekbriefje**\n• **Hoeveel ongeveer?** → maak ronde getallen. Bij delen: kies een getal uit de tafel.\n• **Keer met komma's?** → schatten, rekenen zonder komma's, komma plaatsen met je schatting.\n• **Breuken en kommagetallen op volgorde?** → maak van alles een kommagetal.\n• **Lijndiagram?** → legenda, de as (staat er × 100?), en hoeveel is één lijntje.\n\nHeb je er een fout? Dan weet je welk doel je nog een keer moet doen.",
    svg: null,
    checks: [
      {
        q: "Hoeveel is **9 × € 198** ongeveer?",
        options: ["€ 1800", "€ 900", "€ 18 000", "€ 1000"],
        answer: 0,
        wrongHints: [null, "Je hebt met 100 gerekend. Ligt 198 dichter bij 100 of bij 200?", "Reken 9 × 200 nog eens na: hoeveel nullen komen erachter?", "Je hebt met 100 gerekend. Ligt 198 dichter bij 100 of bij 200?"],
      },
      {
        q: "**5,2 × 3,9**. Zonder komma's: 52 × 39 = 2028. Wat is het antwoord?",
        options: ["20,28", "2,028", "202,8", "2028"],
        answer: 0,
        wrongHints: [null, "Schat eerst: ongeveer 5 × 4. Ligt jouw antwoord daarbij in de buurt?", "Schat eerst: ongeveer 5 × 4. Ligt jouw antwoord daarbij in de buurt?", "Hier staat nog geen komma. Wat was je schatting?"],
      },
      {
        q: "Zet van **klein naar groot**: 5,6 – 5½ – 5,06 – 5¾",
        options: ["5,06 – 5½ – 5,6 – 5¾", "5½ – 5¾ – 5,06 – 5,6", "5,06 – 5,6 – 5½ – 5¾", "5¾ – 5,6 – 5½ – 5,06"],
        answer: 0,
        wrongHints: [null, "Je hebt de breuken en de kommagetallen apart gezet. Maak eerst van alles een kommagetal.", "Bijna. Vergelijk 5,6 en 5½ nog eens: hoeveel is 5½ als kommagetal?", "Dit is van groot naar klein. Wat vroeg de som?"],
      },
      {
        q: "Hoeveel bezoekers kwamen er in **oktober** in de **middag**?",
        svg: zwembadSvg(),
        options: ["3600", "3300", "36", "4400"],
        answer: 0,
        wrongHints: [null, "Je hebt de groene lijn afgelezen. Welke kleur hoort bij de middag?", "Je hebt goed afgelezen. Maar wat staat er tussen haakjes bij de as?", "Dat is het punt bij september. Zoek de maand oktober."],
      },
      {
        q: "Hoeveel is **6020 : 3** ongeveer?",
        options: ["2000", "200", "3000", "20 000"],
        answer: 0,
        wrongHints: [null, "Reken terug: 3 × 200 is hoeveel? Komt dat in de buurt van 6020?", "Reken terug: 3 × 3000 is hoeveel? Komt dat in de buurt van 6020?", "Reken terug: 3 × 20 000 is hoeveel? Komt dat in de buurt van 6020?"],
      },
      {
        q: "**45 × 0,21**. Zonder komma's: 45 × 21 = 945. Wat is het antwoord?",
        options: ["9,45", "94,5", "0,945", "945"],
        answer: 0,
        wrongHints: [null, "0,21 is veel minder dan 1. Kan het antwoord dan groter zijn dan 45?", "0,21 is ongeveer 1/5. Is een vijfde van 45 kleiner dan 1?", "Je vermenigvuldigt met een getal kleiner dan 1. Wordt 45 dan groter of kleiner?"],
      },
      {
        q: "Schrijf **0,4** als breuk.",
        options: ["2/5", "1/4", "4/100", "1/40"],
        answer: 0,
        wrongHints: [null, "Een kwart is 0,25. Is dat hetzelfde als 0,4?", "4/100 is 0,04. Wat betekent de 4 in 0,4: tienden of honderdsten?", "0,4 is bijna een half. Is 1/40 ook bijna een half?"],
      },
      {
        q: "In welke maand kwamen er in de **ochtend 4600** bezoekers?",
        svg: zwembadSvg(),
        options: ["November", "Oktober", "December", "Augustus"],
        answer: 0,
        wrongHints: [null, "4600 is 46 op de as. Ligt het groene punt van oktober zo hoog?", "4600 is 46 op de as. Ligt het groene punt van december daar, of hoger?", "Je kijkt naar de roze lijn. Welke kleur hoort bij de ochtend?"],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const rekenenBlok1Groep8 = {
  id: "rekenen-blok1-groep8",
  title: "Rekenen blok 1 (groep 8)",
  emoji: "🎯",
  level: "groep8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen en verbanden — schatten, kommagetallen vermenigvuldigen, breuken ↔ kommagetallen, lijndiagram",
  prerequisites: [
    { id: "schatten-afronden", title: "Schatten en afronden", niveau: "po-1F" },
    { id: "kommagetallen-po", title: "Kommagetallen", niveau: "po-1F" },
  ],
  intro:
    "De vier doelen van blok 1 in groep 8, stap voor stap: schatten met ronde getallen, keer-sommen met kommagetallen, breuken en kommagetallen vergelijken, en een lijndiagram aflezen. Bij elk doel uitleg zoals op school, eigen sommen om te oefenen en aan het eind een overhoring met alles door elkaar.",
  triggerKeywords: [
    "blok 1 groep 8", "doelen blok 1", "rekenen blok 1",
    "schattend rekenen", "schatten ronde getallen",
    "vermenigvuldigen met kommagetallen", "komma plaatsen", "decimale getallen vermenigvuldigen",
    "breuken omzetten kommagetal", "breuken en kommagetallen vergelijken", "van klein naar groot",
    "lijndiagram", "lijndiagram aflezen", "keer 100 aflezen",
  ],
  chapters,
  steps,
};

export default rekenenBlok1Groep8;
