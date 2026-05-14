// Leerpad: Meetkunde — bouwsels (kubus + balk volume), groep 6-8.
// Cito-onderdeel meten/meetkunde, referentieniveau 1F.
// 6 stappen, met uitlegPad en SVG-visualisatie van een kubus + balk.

const COLORS = {
  curve: "#00c853",
  curve2: "#69f0ae",
  edge: "#80cbc4",
  face: "rgba(0,200,83,0.18)",
  faceTop: "rgba(105,240,174,0.30)",
  faceSide: "rgba(0,200,83,0.10)",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  highlight: "#ffd54f",
};

const stepEmojis = ["📦", "🧊", "📐", "🔄", "🏊", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is volume?", emoji: "📦", from: 0, to: 0 },
  { letter: "B", title: "Volume van een kubus", emoji: "🧊", from: 1, to: 1 },
  { letter: "C", title: "Volume van een balk", emoji: "📐", from: 2, to: 2 },
  { letter: "D", title: "Eenheden omrekenen", emoji: "🔄", from: 3, to: 3 },
  { letter: "E", title: "Praktijk-sommen", emoji: "🏊", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

// SVG: een kubus in 3D-perspectief met label van zijde-lengte.
function kubusSvg(zijde, label) {
  // 2D-projectie: voorkant (vierkant), achterkant verschoven 30 naar rechtsboven.
  const size = 110;
  const offset = 30;
  const x0 = 70, y0 = 90; // linksonder voorkant
  const x1 = x0 + size, y1 = y0;
  const x2 = x0 + size, y2 = y0 - size;
  const x3 = x0, y3 = y0 - size;
  // achterkant
  const bx0 = x0 + offset, by0 = y0 - offset;
  const bx1 = x1 + offset, by1 = y1 - offset;
  const bx2 = x2 + offset, by2 = y2 - offset;
  const bx3 = x3 + offset, by3 = y3 - offset;
  return `<svg viewBox="0 0 320 230">
<rect x="0" y="0" width="320" height="230" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="14" font-family="Arial" font-weight="bold">${label}</text>
<polygon points="${x3},${y3} ${x2},${y2} ${bx2},${by2} ${bx3},${by3}" fill="${COLORS.faceTop}" stroke="${COLORS.edge}" stroke-width="1.5"/>
<polygon points="${x1},${y1} ${x2},${y2} ${bx2},${by2} ${bx1},${by1}" fill="${COLORS.faceSide}" stroke="${COLORS.edge}" stroke-width="1.5"/>
<polygon points="${x0},${y0} ${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${COLORS.face}" stroke="${COLORS.edge}" stroke-width="1.8"/>
<line x1="${x0}" y1="${y0}" x2="${bx0}" y2="${by0}" stroke="${COLORS.edge}" stroke-width="1" stroke-dasharray="3,3"/>
<text x="${(x0 + x1) / 2}" y="${y0 + 18}" text-anchor="middle" fill="${COLORS.highlight}" font-size="13" font-family="Arial">${zijde}</text>
<text x="${x1 + 14}" y="${(y1 + y2) / 2 + 4}" text-anchor="start" fill="${COLORS.highlight}" font-size="13" font-family="Arial">${zijde}</text>
<text x="${(x2 + bx2) / 2 + 2}" y="${(y2 + by2) / 2 - 4}" text-anchor="middle" fill="${COLORS.highlight}" font-size="13" font-family="Arial">${zijde}</text>
<text x="160" y="218" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">Alle 3 ribben even lang</text>
</svg>`;
}

// SVG: balk (rechthoekig blok) — l × b × h.
function balkSvg(l, b, h, label) {
  // Stel de balk in 2D-perspectief voor met lengte breder, hoogte smaller.
  const x0 = 60, y0 = 130;
  const x1 = x0 + l * 12, y1 = y0;
  const x2 = x1, y2 = y0 - h * 12;
  const x3 = x0, y3 = y2;
  const offset = b * 6;
  const bx0 = x0 + offset, by0 = y0 - offset;
  const bx1 = x1 + offset, by1 = y1 - offset;
  const bx2 = x2 + offset, by2 = y2 - offset;
  const bx3 = x3 + offset, by3 = y3 - offset;
  return `<svg viewBox="0 0 340 220">
<rect x="0" y="0" width="340" height="220" fill="${COLORS.paper}"/>
<text x="170" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="14" font-family="Arial" font-weight="bold">${label}</text>
<polygon points="${x3},${y3} ${x2},${y2} ${bx2},${by2} ${bx3},${by3}" fill="${COLORS.faceTop}" stroke="${COLORS.edge}" stroke-width="1.5"/>
<polygon points="${x1},${y1} ${x2},${y2} ${bx2},${by2} ${bx1},${by1}" fill="${COLORS.faceSide}" stroke="${COLORS.edge}" stroke-width="1.5"/>
<polygon points="${x0},${y0} ${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${COLORS.face}" stroke="${COLORS.edge}" stroke-width="1.8"/>
<text x="${(x0 + x1) / 2}" y="${y0 + 18}" text-anchor="middle" fill="${COLORS.highlight}" font-size="12" font-family="Arial">l = ${l}</text>
<text x="${x1 + 16}" y="${(y1 + y2) / 2 + 4}" text-anchor="start" fill="${COLORS.highlight}" font-size="12" font-family="Arial">h = ${h}</text>
<text x="${(x2 + bx2) / 2 + 2}" y="${(y2 + by2) / 2 - 4}" text-anchor="middle" fill="${COLORS.highlight}" font-size="12" font-family="Arial">b = ${b}</text>
<text x="170" y="210" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">Lengte × breedte × hoogte</text>
</svg>`;
}

// SVG: kubus van 1 cm³ inhoudsmaat, met een literbak (10×10×10 cm).
function eenhedenSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">1 liter = 1000 cm³ = 1 dm³</text>
<rect x="40" y="120" width="60" height="60" fill="${COLORS.faceSide}" stroke="${COLORS.edge}" stroke-width="1.5"/>
<text x="70" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">1 cm</text>
<text x="70" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">= 1 cm³</text>
<rect x="170" y="60" width="120" height="120" fill="${COLORS.face}" stroke="${COLORS.edge}" stroke-width="1.5"/>
<text x="230" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">10 × 10 × 10 cm</text>
<text x="230" y="200" text-anchor="middle" fill="${COLORS.highlight}" font-size="12" font-family="Arial">= 1 liter melk!</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is volume?
  {
    title: "Wat is volume?",
    explanation:
      "**Volume** is hoeveel ruimte een ding inneemt — of hoeveel er IN past.\n\n**Voorbeelden in het echt**:\n• Een melkpak: inhoud 1 liter.\n• Een aquarium: kan bv. 40 liter water bevatten.\n• Een schoenendoos: heeft een bepaald volume aan ruimte voor schoenen.\n\n**De eenheden voor volume**:\n• **kubieke centimeter** (cm³) — klein, voor kleine voorwerpen.\n• **kubieke decimeter** (dm³) — gelijk aan **1 liter**.\n• **kubieke meter** (m³) — heel groot, voor kamers/zwembaden.\n• **liter** (L) en **milliliter** (mL) gebruik je voor vloeistoffen.\n\n**Belangrijke afspraken** *(uit je hoofd leren!)*:\n• 1 liter = 1000 mL\n• 1 liter = 1 dm³ = 1000 cm³\n• 1 m³ = 1000 liter\n\n**Plaatje om te onthouden**:\nStel je een melkpak van 1 liter voor. Dat is precies een kubus van **10 cm bij 10 cm bij 10 cm**. Dus 10 × 10 × 10 = 1000 cm³ = 1 liter.",
    svg: eenhedenSvg(),
    checks: [
      {
        q: "Wat is **volume**?",
        options: ["Hoeveel ruimte iets inneemt", "Hoe zwaar iets is", "Hoe lang iets is", "Hoe veel iets kost"],
        answer: 0,
        wrongHints: [null, "Gewicht is iets anders (in kg/gram).", "Lengte is in cm/m — dat is maar 1 richting.", "Geld is geen volume."],
      },
      {
        q: "**1 liter** is hetzelfde als ... ?",
        options: ["1000 mL", "100 mL", "10 mL", "10.000 mL"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1 dL = 100 mL, niet 1 L.", "Te weinig — dat is 1 cl.", "Te veel — dat zou 10 liter zijn."],
      },
      {
        q: "**1 m³** is hetzelfde als ... liter?",
        options: ["1000 liter", "100 liter", "10 liter", "10.000 liter"],
        answer: 0,
        wrongHints: [null, "Te weinig — denk groter. Een m³ is een kubus van 1 m × 1 m × 1 m.", "Veel te weinig — een douchecabine alleen al is meer.", "Te veel — controleer."],
        uitlegPad: {
          stappen: [
            { titel: "Reken het uit", tekst: "1 m = 10 dm. Dus 1 m³ = 10 × 10 × 10 = 1000 dm³. En 1 dm³ = 1 liter. Dus 1 m³ = 1000 liter." },
          ],
          woorden: [{ woord: "m³", uitleg: "Kubieke meter — een kubus van 1 m breed, 1 m lang en 1 m hoog." }],
          theorie: "Volume-eenheden hangen aan elkaar in trapjes van 1000: 1 m³ = 1000 dm³, 1 dm³ = 1000 cm³, 1 cm³ = 1000 mm³.",
          voorbeelden: [{ type: "kalender", tekst: "Een kleine douchecabine = ~1 m³ = ~1000 liter water als hij vol zou zitten." }],
          basiskennis: [{ onderwerp: "Trap van 1000", uitleg: "Bij volume gaat het in stappen van 1000, niet 10 zoals bij lengte." }],
          niveaus: {
            basis: "1 m³ = 1000 liter. A.",
            simpeler: "1 m = 10 dm. Dus 1 m³ = 10 × 10 × 10 = 1000 dm³ = 1000 liter. = A.",
            nogSimpeler: "1000 liter = A.",
          },
        },
      },
    ],
  },

  // STAP 2: Volume kubus
  {
    title: "Volume van een kubus",
    explanation:
      "Een **kubus** is een blok waarbij **alle ribben even lang** zijn. Denk aan een dobbelsteen of een ijsblokje.\n\n**Formule**:\n**V = zijde × zijde × zijde**  (ook wel zijde³)\n\n**Voorbeeld 1**: een kubus met zijde 3 cm.\n• V = 3 cm × 3 cm × 3 cm = **27 cm³**.\n\n**Voorbeeld 2**: een kubus met zijde 5 cm.\n• V = 5 × 5 × 5 = **125 cm³**.\n\n**Voorbeeld 3 — Rubik's kubus**: ribbe ongeveer 6 cm.\n• V = 6 × 6 × 6 = **216 cm³**.\n\n**Cito-truc**:\nDe formule is altijd hetzelfde getal **3 keer met zichzelf vermenigvuldigd**. Dat heet **'tot de derde macht'** of **zijde³**.\n\n**Veel-voorkomende fout**:\n• Vergeten met 3 te vermenigvuldigen — een kubus heeft 3 richtingen (lengte, breedte, hoogte). Allemaal even lang.\n• De eenheid vergeten: het antwoord is **cm³** (kubieke cm), niet cm of cm².",
    svg: kubusSvg("4 cm", "Kubus met zijde 4 cm — V = 4 × 4 × 4 = 64 cm³"),
    checks: [
      {
        q: "Volume kubus met zijde **2 cm** = ?",
        options: ["8 cm³", "6 cm³", "4 cm³", "12 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — heb je 2 + 2 + 2 gedaan? Het is keer-keer, niet plus-plus.", "Te weinig — heb je per ongeluk 2 × 2 gedaan?", "Te veel — controleer 2 × 2 × 2."],
        uitlegPad: {
          stappen: [
            { titel: "Formule kubus", tekst: "V = zijde × zijde × zijde = 2 cm × 2 cm × 2 cm = 8 cm³." },
          ],
          woorden: [{ woord: "zijde", uitleg: "De lengte van één ribbe van de kubus." }, { woord: "cm³", uitleg: "Kubieke cm — eenheid van volume." }],
          theorie: "Een kubus heeft 3 even lange ribben. Volume = ribbe³.",
          voorbeelden: [{ type: "stap", tekst: "Zijde 2 → 2 × 2 = 4 → 4 × 2 = 8 cm³." }],
          basiskennis: [{ onderwerp: "Niet × 3", uitleg: "Het is keer-keer-keer (3 keer), niet plus-plus of × 3." }],
          niveaus: {
            basis: "2 × 2 × 2 = 8 cm³. A.",
            simpeler: "Eerst 2 × 2 = 4. Dan 4 × 2 = 8. Dus 8 cm³. = A.",
            nogSimpeler: "8 cm³ = A.",
          },
        },
      },
      {
        q: "Volume kubus met zijde **5 cm** = ?",
        options: ["125 cm³", "25 cm³", "15 cm³", "75 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 5 × 5 (alleen 2 keer). Doe nog × 5.", "Te weinig — dat is 5 + 5 + 5. Volume is keer-keer-keer.", "Te weinig — controleer 5 × 5 × 5."],
      },
      {
        q: "Een ijsblokje is een kubus van **3 cm**. Volume?",
        options: ["27 cm³", "9 cm³", "6 cm³", "12 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 3 × 3. Nog één keer × 3.", "Te weinig — dat is 3 + 3.", "Te weinig — geen kubus-formule gebruikt."],
      },
      {
        q: "Een speelblokje is een kubus van **10 cm**. Volume?",
        options: ["1000 cm³", "100 cm³", "30 cm³", "10.000 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 10 × 10. Nog één keer × 10.", "Te weinig — dat is 10 + 10 + 10.", "Te veel — controleer 10 × 10 × 10."],
      },
    ],
  },

  // STAP 3: Volume balk
  {
    title: "Volume van een balk",
    explanation:
      "Een **balk** is een blok met **3 verschillende lengtes**: lengte, breedte en hoogte. Denk aan een baksteen of een doos cornflakes.\n\n**Formule**:\n**V = lengte × breedte × hoogte**\nKortweg: **V = l × b × h**.\n\n**Voorbeeld 1**: een doos van 10 cm lang, 5 cm breed, 4 cm hoog.\n• V = 10 × 5 × 4 = **200 cm³**.\n\n**Voorbeeld 2 — aquarium**: 60 cm lang, 30 cm breed, 40 cm hoog.\n• V = 60 × 30 × 40 = **72.000 cm³** = **72 liter**.\n\n**Tip — volgorde maakt niet uit**:\nl × b × h is hetzelfde als h × b × l. Je mag de getallen in elke volgorde keer doen.\n\n**Slim rekenen**:\nBegin met de 2 makkelijkste getallen.\nBijv. 25 × 8 × 4 = (25 × 4) × 8 = 100 × 8 = 800.\n\n**Veel-voorkomende fout**:\n• Optellen ipv keer doen. Volume is **altijd keer**.\n• Eenheid vergeten — het antwoord is cm³, dm³ of m³.\n• Verschillende eenheden gebruiken — eerst alles in dezelfde eenheid zetten.",
    svg: balkSvg(10, 4, 5, "Balk 10 × 4 × 5 cm — V = 200 cm³"),
    checks: [
      {
        q: "Doos: **lengte 8 cm, breedte 5 cm, hoogte 2 cm**. Volume?",
        options: ["80 cm³", "15 cm³", "40 cm³", "16 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 8 + 5 + 2. Volume is keer-keer.", "Te weinig — dat is 8 × 5. Nog × 2 erbij.", "Te weinig — dat is 8 × 2. Vergeten breedte."],
        uitlegPad: {
          stappen: [
            { titel: "Formule balk", tekst: "V = l × b × h = 8 × 5 × 2 cm = 80 cm³." },
          ],
          woorden: [{ woord: "l × b × h", uitleg: "Lengte keer breedte keer hoogte — de 3 zijden van een balk." }],
          theorie: "Balk-volume = altijd 3 getallen vermenigvuldigen.",
          voorbeelden: [{ type: "stap", tekst: "Stap 1: 8 × 5 = 40. Stap 2: 40 × 2 = 80. Dus 80 cm³." }],
          basiskennis: [{ onderwerp: "Niet optellen", uitleg: "Volume = keer. Optellen geeft een veel te klein antwoord." }],
          niveaus: {
            basis: "8 × 5 × 2 = 80 cm³. A.",
            simpeler: "Eerst 8 × 5 = 40. Dan 40 × 2 = 80. Dus 80 cm³. = A.",
            nogSimpeler: "80 cm³ = A.",
          },
        },
      },
      {
        q: "Schoenendoos: **30 cm × 15 cm × 10 cm**. Volume?",
        options: ["4500 cm³", "55 cm³", "450 cm³", "300 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 30 + 15 + 10. Volume is keer.", "Te weinig — komma 1 plek verkeerd. Reken nog eens 30 × 15 = 450, en dan × 10.", "Te weinig — alleen 30 × 10 gedaan."],
      },
      {
        q: "Aquarium: **40 cm × 20 cm × 25 cm**. Volume?",
        options: ["20.000 cm³", "85 cm³", "1.000 cm³", "800 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 40 + 20 + 25. Probeer keer.", "Te weinig — alleen 40 × 25 gedaan, breedte vergeten.", "Te weinig — alleen 40 × 20 gedaan, hoogte vergeten."],
      },
      {
        q: "Doos cornflakes: **20 cm × 8 cm × 30 cm**. Volume?",
        options: ["4800 cm³", "58 cm³", "480 cm³", "60 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 20 + 8 + 30. Volume is keer.", "Te weinig — komma 1 plek verkeerd. Reken 20 × 8 = 160 en dan × 30.", "Te weinig — heb je alleen 20 × 30 / 10 gedaan?"],
      },
    ],
  },

  // STAP 4: Eenheden omrekenen
  {
    title: "Volume-eenheden omrekenen",
    explanation:
      "Bij Cito staan vaak vragen waar je **eenheden moet omrekenen**. Bijvoorbeeld: \"hoeveel liter is 2500 cm³?\"\n\n**De vaste regels**:\n• 1 dm³ = 1 liter = 1000 cm³\n• 1 m³ = 1000 dm³ = 1000 liter\n• 1 liter = 1000 mL\n\n**Cito-truc** *(super-handig)*:\nGa van **groot naar klein** = keer 1000. Ga van **klein naar groot** = deel 1000.\n\n**Voorbeelden**:\n• 2 liter = 2 × 1000 = **2000 mL**.\n• 3500 mL = 3500 ÷ 1000 = **3,5 liter**.\n• 4 dm³ = **4 liter** *(rechtstreeks gelijk!)*.\n• 5000 cm³ = 5000 ÷ 1000 = **5 dm³** = **5 liter**.\n• 2 m³ = 2 × 1000 = **2000 liter**.\n\n**De makkelijkste truc**:\nOnthoud: **1 liter = 1 dm³ = 1000 cm³**. Alles bouwt hierop voort.\n\n**Veel-voorkomende fout**:\n• Verwarring met lengte-eenheden. Bij **volume** is het in stapjes van **1000**, niet 10.\n• 1 cm³ ≠ 1 mL (wel zo — dit is goed!). 1 mL = 1 cm³ precies.",
    checks: [
      {
        q: "**2 liter** = ... mL?",
        options: ["2000 mL", "200 mL", "20 mL", "20.000 mL"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1 L = 1000 mL.", "Te weinig — dat zou 0,02 L zijn.", "Te veel — controleer 2 × 1000."],
      },
      {
        q: "**3 dm³** = ... liter?",
        options: ["3 liter", "30 liter", "300 liter", "0,3 liter"],
        answer: 0,
        wrongHints: [null, "Te veel — 1 dm³ = 1 L (precies gelijk!).", "Te veel — 1 dm³ = 1 L, geen 100.", "Te weinig — 1 dm³ is precies 1 liter."],
        uitlegPad: {
          stappen: [
            { titel: "Vaste regel", tekst: "1 dm³ = 1 liter. Dus 3 dm³ = 3 liter. Geen vermenigvuldiging nodig." },
          ],
          woorden: [{ woord: "dm³", uitleg: "Kubieke decimeter — een kubus van 10 cm × 10 cm × 10 cm." }],
          theorie: "Vrijwel de belangrijkste regel: 1 dm³ = 1 liter.",
          voorbeelden: [{ type: "stap", tekst: "5 dm³ → 5 liter. 8 dm³ → 8 liter." }],
          basiskennis: [{ onderwerp: "Direct gelijk", uitleg: "dm³ en liter zijn 1-op-1. Geen rekenen." }],
          niveaus: {
            basis: "3 dm³ = 3 liter. A.",
            simpeler: "1 dm³ is precies 1 liter. Dus 3 dm³ = 3 liter. = A.",
            nogSimpeler: "3 liter = A.",
          },
        },
      },
      {
        q: "**5000 cm³** = ... liter?",
        options: ["5 liter", "50 liter", "500 liter", "0,5 liter"],
        answer: 0,
        wrongHints: [null, "Te veel — 1 liter = 1000 cm³, dus deel door 1000, niet door 100.", "Te veel — heb je überhaupt gedeeld?", "Te weinig — controleer 5000 ÷ 1000."],
      },
      {
        q: "**4 m³** = ... liter?",
        options: ["4000 liter", "400 liter", "40 liter", "4 liter"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1 m³ = 1000 L. Dus 4 m³ = 4 × 1000.", "Te weinig — komma 1 plek verkeerd.", "Te weinig — m³ is een grote eenheid; reken nog eens."],
      },
    ],
  },

  // STAP 5: Praktijksommen
  {
    title: "Praktijk-sommen — zwembad, doos, aquarium",
    explanation:
      "Tijd voor Cito-stijl sommen. **Lees rustig** en zet altijd de eenheid bij het antwoord.\n\n**Stappenplan**:\n1. Wat is het — kubus of balk?\n2. Zoek de afmetingen (lengte, breedte, hoogte óf 1 zijde).\n3. Reken: l × b × h, of zijde × zijde × zijde.\n4. **Zet de eenheid** bij het antwoord (cm³, dm³, m³ of liter).\n5. Kijk: is de vraag om volume of om liters? Zo ja → reken om.\n\n**Voorbeeld 1 — zwembad**:\n*'Een zwembad is 8 m lang, 4 m breed en 2 m diep. Hoeveel m³ water past erin?'*\n• V = 8 × 4 × 2 = **64 m³**.\n\n**Voorbeeld 2 — aquarium**:\n*'Een aquarium van 50 cm × 30 cm × 30 cm. Hoeveel liter?'*\n• V = 50 × 30 × 30 = 45.000 cm³.\n• Naar liter: 45.000 ÷ 1000 = **45 liter**.\n\n**Voorbeeld 3 — schoenendoos**:\n*'Een doos van 30 cm × 20 cm × 10 cm. Past er 1 schoenen-paar in als die doos minimaal 5000 cm³ vraagt?'*\n• V = 30 × 20 × 10 = 6000 cm³.\n• 6000 > 5000 → **ja, past erin** (zelfs ruim).",
    checks: [
      {
        q: "Een **zwembad** van **6 m × 3 m × 1,5 m**. Hoeveel **m³**?",
        options: ["27 m³", "10,5 m³", "18 m³", "9 m³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 6 + 3 + 1,5. Volume is keer.", "Te weinig — alleen 6 × 3 gedaan, hoogte vergeten.", "Te weinig — alleen 6 × 1,5 gedaan, breedte vergeten."],
        uitlegPad: {
          stappen: [
            { titel: "Balk-volume", tekst: "V = l × b × h = 6 × 3 × 1,5 m. Eerst 6 × 3 = 18. Dan 18 × 1,5 = 27. Dus 27 m³." },
          ],
          woorden: [{ woord: "m³", uitleg: "Kubieke meter — voor grote dingen zoals een zwembad of kamer." }],
          theorie: "Een zwembad is een balk. Gewoon l × b × h, met de juiste eenheid (m³).",
          voorbeelden: [{ type: "stap", tekst: "Stap 1: 6 × 3 = 18. Stap 2: 18 × 1,5 = 27. Dus 27 m³." }],
          basiskennis: [{ onderwerp: "Eenheid mee", uitleg: "Bij volume schrijf je altijd de eenheid (m³, cm³, L)." }],
          niveaus: {
            basis: "6 × 3 × 1,5 = 27 m³. A.",
            simpeler: "6 × 3 = 18. 18 × 1,5 = 27. Dus 27 m³ water in het zwembad. = A.",
            nogSimpeler: "27 m³ = A.",
          },
        },
      },
      {
        q: "Een **dobbelsteen** is een kubus met zijde **2 cm**. Volume?",
        options: ["8 cm³", "6 cm³", "4 cm³", "12 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 2 + 2 + 2. Volume is keer-keer.", "Te weinig — dat is 2 × 2. Nog × 2 erbij.", "Te veel — controleer 2 × 2 × 2."],
      },
      {
        q: "**Melkpak** van **1 liter** = hoeveel **cm³**?",
        options: ["1000 cm³", "100 cm³", "10 cm³", "10.000 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1 L = 1000 mL = 1000 cm³.", "Te weinig — dat is 1 cL.", "Te veel — controleer 1 × 1000."],
      },
      {
        q: "Een **emmer** van **50 cm × 30 cm × 40 cm**. Hoeveel **liter**?",
        options: ["60 liter", "120 liter", "600 liter", "12 liter"],
        answer: 0,
        wrongHints: [null, "Te weinig — 50 × 30 × 40 = 60.000 cm³ = 60 liter. Klopt.", "Te veel — heb je niet gedeeld door 1000?", "Te veel — controleer 60.000 ÷ 1000.", "Te weinig — komma 1 plek verkeerd."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst cm³", tekst: "50 × 30 × 40 = 60.000 cm³." },
            { titel: "Naar liter", tekst: "60.000 ÷ 1000 = 60 liter." },
          ],
          woorden: [{ woord: "L", uitleg: "Liter — gebruikt voor vloeistoffen." }],
          theorie: "Bij een vraag in liter altijd eerst cm³ uitrekenen, dan ÷ 1000.",
          voorbeelden: [{ type: "stap", tekst: "Volume in cm³ → ÷ 1000 = liter." }],
          basiskennis: [{ onderwerp: "÷ 1000", uitleg: "Van cm³ naar liter altijd door 1000 delen." }],
          niveaus: {
            basis: "50 × 30 × 40 = 60.000 cm³ = 60 liter. A.",
            simpeler: "Eerst volume: 50 × 30 × 40 = 60.000 cm³. Daarna omrekenen: 60.000 ÷ 1000 = 60 liter. = A.",
            nogSimpeler: "60 liter = A.",
          },
        },
      },
    ],
  },

  // STAP 6: Cito-mix eindopdracht
  {
    title: "Cito-eindopdracht — volume-mix",
    explanation:
      "Mix-toets in echte Cito-stijl. Verschillende sommen door elkaar — kubus, balk, eenheden omrekenen.\n\n**Tip**: lees de vraag eerst rustig, zet **eenheid** altijd bij je antwoord. Bij twijfel — kies bewust kubus (1 zijde) of balk (3 getallen).\n\nVeel succes!",
    checks: [
      {
        q: "Kubus met zijde **4 cm**. Volume?",
        options: ["64 cm³", "16 cm³", "12 cm³", "48 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 4 × 4. Nog één keer × 4.", "Te weinig — dat is 4 + 4 + 4.", "Te weinig — alleen 2 keer × 4 gedaan? Het moet 3 keer."],
      },
      {
        q: "Balk **5 cm × 4 cm × 3 cm**. Volume?",
        options: ["60 cm³", "12 cm³", "20 cm³", "15 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 5 + 4 + 3. Volume is keer.", "Te weinig — alleen 4 × 3 gedaan, lengte vergeten.", "Te weinig — alleen 5 × 4 gedaan, hoogte vergeten.", "Te weinig — alleen 5 × 3 gedaan, breedte vergeten."],
      },
      {
        q: "**8000 cm³** = ... **liter**?",
        options: ["8 liter", "80 liter", "0,8 liter", "800 liter"],
        answer: 0,
        wrongHints: [null, "Te veel — 1 L = 1000 cm³. Deel door 1000.", "Te weinig — controleer 8000 ÷ 1000.", "Te veel — komma 1 plek verkeerd."],
      },
      {
        q: "Een **kamer** is **5 m × 4 m × 3 m**. Hoeveel **m³** lucht?",
        options: ["60 m³", "12 m³", "20 m³", "120 m³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 5 + 4 + 3. Volume is keer.", "Te weinig — alleen 4 × 3 gedaan.", "Te weinig — alleen 5 × 4 gedaan.", "Te veel — controleer 5 × 4 × 3."],
      },
      {
        q: "**2,5 liter** = ... **mL**?",
        options: ["2500 mL", "250 mL", "25 mL", "25.000 mL"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1 L = 1000 mL. Doe 2,5 × 1000.", "Te weinig — dat is 0,25 L.", "Te veel — komma 1 plek verkeerd."],
      },
      {
        q: "Een **doos** van **20 cm × 10 cm × 5 cm**. Hoeveel **mL** water past erin?",
        options: ["1000 mL", "35 mL", "100 mL", "200 mL"],
        answer: 0,
        wrongHints: [null, "Te weinig — eerst volume in cm³: 20 × 10 × 5 = 1000. En 1 cm³ = 1 mL.", "Te weinig — alleen 20 × 10 gedaan / 2.", "Te weinig — alleen 20 × 5 gedaan."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst cm³", tekst: "20 × 10 × 5 = 1000 cm³." },
            { titel: "cm³ naar mL", tekst: "1 cm³ = 1 mL precies. Dus 1000 cm³ = 1000 mL." },
          ],
          woorden: [{ woord: "mL", uitleg: "Milliliter — een duizendste van een liter, gelijk aan 1 cm³." }],
          theorie: "1 cm³ = 1 mL (handige gelijkstelling).",
          voorbeelden: [{ type: "stap", tekst: "Volume in cm³ = aantal mL water dat erin past." }],
          basiskennis: [{ onderwerp: "1:1", uitleg: "cm³ en mL zijn gelijk. Geen rekenen nodig." }],
          niveaus: {
            basis: "20 × 10 × 5 = 1000 cm³ = 1000 mL. A.",
            simpeler: "Volume: 20 × 10 × 5 = 1000 cm³. En 1 cm³ = 1 mL. Dus 1000 mL water. = A.",
            nogSimpeler: "1000 mL = A.",
          },
        },
      },
      { q: "Volume van een kubus met **ribbe 3 cm**?", options: ["27 cm³","9 cm³","6 cm³","12 cm³"], answer: 0, wrongHints: [null,"Klopt — 3×3×3.","Oppervlakte van 1 vlak.","Omtrek vlak.","Niet."] },
      { q: "Volume balk **5 × 4 × 2** cm?", options: ["40 cm³","11 cm³","20 cm³","80 cm³"], answer: 0, wrongHints: [null,"Klopt — l×b×h.","Som.","2 dimensies.","×2 fout."] },
      { q: "Een **kubus** heeft hoeveel ribben?", options: ["12","8","6","4"], answer: 0, wrongHints: [null,"Klopt.","Hoekpunten.","Vlakken.","Niet."] },
      { q: "Een **kubus** heeft hoeveel **vlakken**?", options: ["6","4","8","12"], answer: 0, wrongHints: [null,"Klopt.","Niet — 6 vlakken.","Hoekpunten.","Ribben."] },
      { q: "1 dm³ = hoeveel L?", options: ["1","100","1000","10"], answer: 0, wrongHints: [null,"Klopt.","Niet.","Niet.","Niet."] },
      { q: "Aquarium 50×30×40 cm. Volume in cm³?", options: ["60.000","12.000","120","6000"], answer: 0, wrongHints: [null,"Klopt — 50×30×40.","Niet.","Niet.","Niet."] },
      { q: "1 m³ = hoeveel L?", options: ["1000","100","10","10.000"], answer: 0, wrongHints: [null,"Klopt.","Niet.","Niet.","Niet."] },
      { q: "Een **kubus** heeft hoeveel hoekpunten?", options: ["8","6","4","12"], answer: 0, wrongHints: [null,"Klopt — corners.","Vlakken.","Niet.","Ribben."] },
      { q: "Volume formule **balk**?", options: ["lengte × breedte × hoogte","l + b + h","l × b","l × h"], answer: 0, wrongHints: [null,"Klopt.","Som = niet volume.","2 dimensies.","2 dimensies."] },
      { q: "Een **doos** 10 × 10 × 10 cm. Volume?", options: ["1000 cm³","100 cm³","10 cm³","10.000 cm³"], answer: 0, wrongHints: [null,"Klopt — kubus.","Vlak.","Ribbe.","Te veel."] },
      { q: "Volume in **liters** voor 8000 cm³?", options: ["8 L","800 L","80 L","0,8 L"], answer: 0, wrongHints: [null,"Klopt — 1L = 1000cm³.","Te veel.","Te veel.","Te weinig."] },
      { q: "**Inhoud** is ander woord voor?", options: ["Volume","Lengte","Oppervlakte","Massa"], answer: 0, wrongHints: [null,"Klopt — beide ruimte.","Niet.","Niet 3D.","Gewicht."] },
      { q: "Welke **eenheid** voor volume kun je gebruiken?", options: ["cm³","cm","kg","°C"], answer: 0, wrongHints: [null,"Klopt — kubieke.","Lengte.","Massa.","Temperatuur."] },
      { q: "Kistje 4×4×4 cm. Volume?", options: ["64 cm³","12 cm³","16 cm³","48 cm³"], answer: 0, wrongHints: [null,"Klopt — 4³.","Som.","Vlak.","Niet."] },
      { q: "Hoeveel **water** past in een doos van 10 × 5 × 4 cm?", options: ["200 mL","19 mL","100 mL","2000 mL"], answer: 0, wrongHints: [null,"Klopt — 200 cm³.","Som.","Niet.","Te veel."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const meetkundeBouwsels = {
  id: "meetkunde-bouwsels",
  title: "Volume — kubus en balk (groep 6-8)",
  emoji: "📦",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Meten en meetkunde — bouwsels en volume",
  prerequisites: [
    { id: "maten-eenheden", title: "Maten en eenheden", niveau: "po-1F" },
    { id: "vlakke-figuren-po", title: "Vlakke figuren (oppervlakte)", niveau: "po-1F" },
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
  intro:
    "Volume voor groep 6-8 — wat volume is, kubus + balk berekenen, liters/cm³/m³ omrekenen, Cito-praktijksommen met zwembad, aquarium en doos. ~15 min.",
  triggerKeywords: [
    "volume", "kubus", "balk", "inhoud", "liter", "cm3", "cm³", "dm³", "m³",
    "kubieke", "aquarium", "zwembad", "doos", "bouwsel", "ribbe", "zijde",
  ],
  chapters,
  steps,
};

export default meetkundeBouwsels;
