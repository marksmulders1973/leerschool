// Leerpad: Meetkunde — bouwsels (kubus + balk volume), groep 6-8.
// Toets-onderdeel meten/meetkunde, referentieniveau 1F.
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
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

// SVG: een kubus in 3D-perspectief met label van zijde-lengte.
function kubusSvg(zijde, label) {
  // 2D-projectie: voorkant (vierkant), achterkant verschoven 30 naar rechtsboven.
  const size = 110;
  const offset = 30;
  const x0 = 70, y0 = 185; // linksonder voorkant (laag genoeg zodat de kubus niet door de titel loopt)
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
      "**Volume** is hoeveel ruimte een ding inneemt — of hoeveel er IN past.\n\n**Voorbeelden in het echt**:\n• Een melkpak: inhoud 1 liter.\n• Een aquarium: kan bv. 40 liter water bevatten.\n• Een schoenendoos: heeft een bepaald volume aan ruimte voor schoenen.\n\n**De eenheden voor volume**:\n• **kubieke centimeter** (cm³) — klein, voor kleine voorwerpen.\n• **kubieke decimeter** (dm³) — gelijk aan **1 liter**.\n• **kubieke meter** (m³) — heel groot, voor kamers/zwembaden.\n• **liter** (L) en **milliliter** (mL) gebruik je voor vloeistoffen.\n\n**Belangrijke afspraken** *(uit je hoofd leren!)*:\n• 1 liter = 1000 mL\n• 1 liter = 1 dm³ = 1000 cm³\n• 1 m³ = 1000 liter\n\n**Plaatje om te onthouden**:\nStel je een kubus voor van **10 cm bij 10 cm bij 10 cm**. Daar past precies 1 liter in — net zoveel als in een melkpak. Want 10 × 10 × 10 = 1000 cm³ = 1 liter.",
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
        wrongHints: [null, "Te weinig — hoeveel mL zit er in 1 dL? Dat is niet hetzelfde als in 1 L.", "Te weinig — dat is 1 cl.", "Te veel — dat zou 10 liter zijn."],
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
            basis: "1 m³ = 1000 liter.",
            simpeler: "1 m = 10 dm. Dus 1 m³ = 10 × 10 × 10 = 1000 dm³ = 1000 liter.",
            nogSimpeler: "1000 liter",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je wilt weten hoeveel water er in een **zwembad** past. Welke eenheid past daar het best bij?",
        options: ["kubieke meter (m³)", "kubieke centimeter (cm³)", "milliliter (mL)", "meter (m)"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is een heel kleine eenheid. Hoe groot is een zwembad?",
          null,
          "Hiermee meet je een lengte. Gaat het hier om hoe lang iets is?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Groot of klein?",
              tekst: "Een zwembad is heel groot. Voor grote dingen, zoals kamers en zwembaden, gebruik je de kubieke meter (m³).",
            },
          ],
          woorden: [
            {
              woord: "m³",
              uitleg: "Kubieke meter — een kubus van 1 m lang, 1 m breed en 1 m hoog.",
            },
          ],
          theorie: "Kleine dingen meet je in cm³ of mL. Grote dingen, zoals een kamer of zwembad, in m³.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Een dobbelsteen → cm³. Een melkpak → liter. Een zwembad → m³.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Meter is geen volume",
              uitleg: "Meter (m) is een lengte. Volume heeft een ³ erbij: m³.",
            },
          ],
          niveaus: {
            basis: "Een zwembad meet je in m³.",
            simpeler: "Een zwembad is heel groot. Grote dingen meet je in kubieke meters: m³.",
            nogSimpeler: "m³",
          },
        },
      },
      {
        q: "Een flesje water bevat **een halve liter**. Hoeveel **mL** is dat?",
        options: ["500 mL", "50 mL", "5000 mL", "250 mL"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — hoeveel mL zit er in een hele liter?",
          "Te veel — dat is meer dan een hele liter.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Hele liter",
              tekst: "1 liter = 1000 mL.",
            },
            {
              titel: "Halve liter",
              tekst: "De helft van 1000 is 500. Dus een halve liter = 500 mL.",
            },
          ],
          woorden: [
            {
              woord: "mL",
              uitleg: "Milliliter — een heel klein beetje vloeistof. 1000 mL is 1 liter.",
            },
          ],
          theorie: "1 liter = 1000 mL. Een halve liter is de helft daarvan.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1000 ÷ 2 = 500. Dus een halve liter = 500 mL.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Helft nemen",
              uitleg: "De helft van iets = delen door 2.",
            },
          ],
          niveaus: {
            basis: "Een halve liter = 500 mL.",
            simpeler: "1 liter is 1000 mL. De helft van 1000 is 500. Dus 500 mL.",
            nogSimpeler: "500 mL",
          },
        },
      },
      {
        q: "Welke van deze is het **grootst**?",
        options: ["1 m³", "1 liter", "1 dm³", "1000 cm³"],
        answer: 0,
        wrongHints: [null, null, "Hoeveel liter is 1 dm³?", "Reken om: hoeveel liter is 1000 cm³?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Zet alles in liters",
              tekst: "1 liter = 1 liter. 1 dm³ = 1 liter. 1000 cm³ = 1 liter. Die drie zijn dus even groot.",
            },
            {
              titel: "En 1 m³?",
              tekst: "1 m³ = 1000 liter. Dat is veel meer.",
            },
          ],
          woorden: [
            {
              woord: "dm³",
              uitleg: "Kubieke decimeter — precies even groot als 1 liter.",
            },
          ],
          theorie: "1 liter = 1 dm³ = 1000 cm³. En 1 m³ = 1000 liter.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 liter, 1 dm³ en 1000 cm³ zijn even groot. 1 m³ is 1000 keer zo groot.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vergelijken",
              uitleg: "Zet eerst alles in dezelfde eenheid. Dan kun je pas zien wat het grootst is.",
            },
          ],
          niveaus: {
            basis: "1 m³ is het grootst: 1000 liter.",
            simpeler: "Drie van de vier zijn precies 1 liter. Alleen 1 m³ is meer: 1000 liter.",
            nogSimpeler: "1 m³",
          },
        },
      },
    ],
  },

  // STAP 2: Volume kubus
  {
    title: "Volume van een kubus",
    explanation:
      "Een **kubus** is een blok waarbij **alle ribben even lang** zijn. Denk aan een dobbelsteen of een ijsblokje.\n\n**Formule**:\n**V = zijde × zijde × zijde**  (ook wel zijde³)\n\n**Voorbeeld 1**: een kubus met zijde 3 cm.\n• V = 3 cm × 3 cm × 3 cm = **27 cm³**.\n\n**Voorbeeld 2**: een kubus met zijde 5 cm.\n• V = 5 × 5 × 5 = **125 cm³**.\n\n**Voorbeeld 3 — Rubik's kubus**: ribbe ongeveer 6 cm.\n• V = 6 × 6 × 6 = **216 cm³**.\n\n**Toets-truc**:\nDe formule is altijd hetzelfde getal **3 keer met zichzelf vermenigvuldigd**. Dat heet **'tot de derde macht'** of **zijde³**.\n\n**Veel-voorkomende fout**:\n• Maar 2 keer vermenigvuldigen in plaats van 3 keer — een kubus heeft 3 richtingen (lengte, breedte, hoogte). Allemaal even lang.\n• De eenheid vergeten: het antwoord is **cm³** (kubieke cm), niet cm of cm².",
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
            basis: "2 × 2 × 2 = 8 cm³.",
            simpeler: "Eerst 2 × 2 = 4. Dan 4 × 2 = 8. Dus 8 cm³.",
            nogSimpeler: "8 cm³",
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
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een **kubus** heeft een zijde van **7 cm**. Wat is het volume?",
        options: ["343 cm³", "49 cm³", "21 cm³", "147 cm³"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — heb je maar 2 keer met 7 vermenigvuldigd?",
          "Te weinig — is dat 7 + 7 + 7? Volume is keer.",
          "Heb je ergens × 3 gedaan in plaats van × 7?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Formule kubus",
              tekst: "V = zijde × zijde × zijde = 7 × 7 × 7.",
            },
            {
              titel: "Uitrekenen",
              tekst: "7 × 7 = 49. Dan 49 × 7 = 343. Dus 343 cm³.",
            },
          ],
          woorden: [
            {
              woord: "zijde",
              uitleg: "De lengte van één ribbe van de kubus.",
            },
            {
              woord: "cm³",
              uitleg: "Kubieke centimeter — eenheid van volume.",
            },
          ],
          theorie: "Bij een kubus zijn alle ribben even lang. Volume = zijde × zijde × zijde.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "7 × 7 = 49 → 49 × 7 = 343 cm³.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "3 keer",
              uitleg: "Je vermenigvuldigt het getal 3 keer met zichzelf, niet 2 keer.",
            },
          ],
          niveaus: {
            basis: "7 × 7 × 7 = 343 cm³.",
            simpeler: "Eerst 7 × 7 = 49. Dan 49 × 7 = 343. Dus 343 cm³.",
            nogSimpeler: "343 cm³",
          },
        },
      },
      {
        q: "Een **kubus** heeft een zijde van **8 cm**. Wat is het volume?",
        options: ["512 cm³", "64 cm³", "24 cm³", "192 cm³"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — dat is 8 × 8. Hoe vaak moet je met 8 vermenigvuldigen?",
          null,
          "Heb je ergens × 3 gedaan in plaats van × 8?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Formule kubus",
              tekst: "V = zijde × zijde × zijde = 8 × 8 × 8.",
            },
            {
              titel: "Uitrekenen",
              tekst: "8 × 8 = 64. Dan 64 × 8 = 512. Dus 512 cm³.",
            },
          ],
          woorden: [
            {
              woord: "zijde",
              uitleg: "De lengte van één ribbe van de kubus.",
            },
            {
              woord: "cm³",
              uitleg: "Kubieke centimeter — eenheid van volume.",
            },
          ],
          theorie: "Bij een kubus zijn alle ribben even lang. Volume = zijde × zijde × zijde.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "8 × 8 = 64 → 64 × 8 = 512 cm³.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "3 keer",
              uitleg: "Je vermenigvuldigt het getal 3 keer met zichzelf, niet 2 keer.",
            },
          ],
          niveaus: {
            basis: "8 × 8 × 8 = 512 cm³.",
            simpeler: "Eerst 8 × 8 = 64. Dan 64 × 8 = 512. Dus 512 cm³.",
            nogSimpeler: "512 cm³",
          },
        },
      },
      {
        q: "Een opbergdoos heeft de vorm van een **kubus** met een zijde van **20 cm**. Wat is het volume?",
        options: ["8000 cm³", "400 cm³", "60 cm³", "80.000 cm³"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — dat is 20 × 20. Nog één keer × 20.",
          null,
          "Te veel — tel de nullen nog eens na.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Formule kubus",
              tekst: "V = 20 × 20 × 20.",
            },
            {
              titel: "Uitrekenen",
              tekst: "20 × 20 = 400. Dan 400 × 20 = 8000. Dus 8000 cm³.",
            },
          ],
          woorden: [
            {
              woord: "kubus",
              uitleg: "Een blok waarbij alle ribben even lang zijn.",
            },
          ],
          theorie: "Volume van een kubus = zijde × zijde × zijde.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Slim: 2 × 2 × 2 = 8, en er komen drie nullen achter: 8000.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Nullen tellen",
              uitleg: "Bij 20 × 20 × 20 doe je eerst 2 × 2 × 2 = 8. Elk getal heeft één nul, dus er komen 3 nullen bij.",
            },
          ],
          niveaus: {
            basis: "20 × 20 × 20 = 8000 cm³.",
            simpeler: "20 × 20 = 400. 400 × 20 = 8000. Dus 8000 cm³.",
            nogSimpeler: "8000 cm³",
          },
        },
      },
      {
        q: "Met welke som reken je het volume uit van een kubus met een zijde van **9 cm**?",
        options: ["9 × 9 × 9", "9 × 9", "9 + 9 + 9", "9 × 3"],
        answer: 0,
        wrongHints: [
          null,
          "Een kubus heeft lengte, breedte én hoogte. Hoeveel getallen moet je dan keer doen?",
          null,
          "Een kubus heeft drie even lange richtingen. Moet je dan keer 3 doen, of iets anders?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Formule kubus",
              tekst: "V = zijde × zijde × zijde. Met zijde 9 wordt dat 9 × 9 × 9.",
            },
          ],
          woorden: [
            {
              woord: "zijde³",
              uitleg: "Spreek uit: zijde tot de derde macht. Dat betekent zijde × zijde × zijde.",
            },
          ],
          theorie: "Een kubus heeft 3 richtingen (lengte, breedte, hoogte), allemaal even lang. Dus 3 keer hetzelfde getal keer elkaar.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Zijde 9 → 9 × 9 × 9 (= 729 cm³).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet × 3",
              uitleg: "9 × 3 is iets heel anders dan 9 × 9 × 9.",
            },
          ],
          niveaus: {
            basis: "9 × 9 × 9.",
            simpeler: "Een kubus: 3 keer de zijde keer elkaar. Dus 9 × 9 × 9.",
            nogSimpeler: "9 × 9 × 9",
          },
        },
      },
      {
        q: "De zijden van een kubus zijn gemeten in **cm**. In welke eenheid schrijf je dan het **volume**?",
        options: ["cm³", "cm²", "cm", "m"],
        answer: 0,
        wrongHints: [
          null,
          "Die eenheid hoort bij een plat vlak. Heeft een kubus ook hoogte?",
          "Dat is een lengte — maar één richting.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Drie richtingen",
              tekst: "Je vermenigvuldigt cm × cm × cm. Dat geeft cm³.",
            },
          ],
          woorden: [
            {
              woord: "cm³",
              uitleg: "Kubieke centimeter — een klein blokje van 1 cm bij 1 cm bij 1 cm.",
            },
          ],
          theorie: "Lengte = cm, een plat vlak = cm², volume (ruimte) = cm³.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3 cm × 3 cm × 3 cm = 27 cm³ (niet 27 cm of 27 cm²).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Het getaltje ³",
              uitleg: "Het kleine ³ laat zien dat je 3 richtingen keer elkaar hebt gedaan.",
            },
          ],
          niveaus: {
            basis: "Volume schrijf je in cm³.",
            simpeler: "cm × cm × cm = cm³. Volume heeft altijd een ³.",
            nogSimpeler: "cm³",
          },
        },
      },
    ],
  },

  // STAP 3: Volume balk
  {
    title: "Volume van een balk",
    explanation:
      "Een **balk** is een blok met **3 afmetingen** (die verschillend mogen zijn): lengte, breedte en hoogte. Denk aan een baksteen of een doos cornflakes.\n\n**Formule**:\n**V = lengte × breedte × hoogte**\nKortweg: **V = l × b × h**.\n\n**Voorbeeld 1**: een doos van 10 cm lang, 5 cm breed, 4 cm hoog.\n• V = 10 × 5 × 4 = **200 cm³**.\n\n**Voorbeeld 2 — aquarium**: 60 cm lang, 30 cm breed, 40 cm hoog.\n• V = 60 × 30 × 40 = **72.000 cm³** = **72 liter**.\n\n**Tip — volgorde maakt niet uit**:\nl × b × h is hetzelfde als h × b × l. Je mag de getallen in elke volgorde keer doen.\n\n**Slim rekenen**:\nBegin met de 2 makkelijkste getallen.\nBijv. 25 × 8 × 4 = (25 × 4) × 8 = 100 × 8 = 800.\n\n**Veel-voorkomende fout**:\n• Optellen ipv keer doen. Volume is **altijd keer**.\n• Eenheid vergeten — het antwoord is cm³, dm³ of m³.\n• Verschillende eenheden gebruiken — eerst alles in dezelfde eenheid zetten.",
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
            basis: "8 × 5 × 2 = 80 cm³.",
            simpeler: "Eerst 8 × 5 = 40. Dan 40 × 2 = 80. Dus 80 cm³.",
            nogSimpeler: "80 cm³",
          },
        },
      },
      {
        q: "Schoenendoos: **30 cm × 15 cm × 10 cm**. Volume?",
        options: ["4500 cm³", "55 cm³", "450 cm³", "300 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 30 + 15 + 10. Volume is keer.", "Te weinig — komma 1 plek verkeerd. Hoeveel is 30 × 15, en daarna × 10?", "Te weinig — alleen 30 × 10 gedaan."],
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
        wrongHints: [null, "Te weinig — dat is 20 + 8 + 30. Volume is keer.", "Te weinig — komma 1 plek verkeerd. Hoeveel is 20 × 8, en daarna × 30?", "Te weinig — heb je alleen 20 × 30 / 10 gedaan?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een kistje: **lengte 6 cm, breedte 4 cm, hoogte 3 cm**. Wat is het volume?",
        options: ["72 cm³", "13 cm³", "24 cm³", "18 cm³"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — heb je de getallen opgeteld? Volume is keer.",
          "Te weinig — is de hoogte meegeteld?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Formule balk",
              tekst: "V = l × b × h = 6 × 4 × 3.",
            },
            {
              titel: "Uitrekenen",
              tekst: "6 × 4 = 24. Dan 24 × 3 = 72. Dus 72 cm³.",
            },
          ],
          woorden: [
            {
              woord: "l × b × h",
              uitleg: "Lengte keer breedte keer hoogte — de 3 afmetingen van een balk.",
            },
          ],
          theorie: "Volume van een balk = altijd 3 getallen keer elkaar.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Stap 1: 6 × 4 = 24. Stap 2: 24 × 3 = 72.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet optellen",
              uitleg: "Volume = keer. Optellen geeft een veel te klein antwoord.",
            },
          ],
          niveaus: {
            basis: "6 × 4 × 3 = 72 cm³.",
            simpeler: "Eerst 6 × 4 = 24. Dan 24 × 3 = 72. Dus 72 cm³.",
            nogSimpeler: "72 cm³",
          },
        },
      },
      {
        q: "Een baksteen: **lengte 21 cm, breedte 10 cm, hoogte 5 cm**. Wat is het volume?",
        options: ["1050 cm³", "36 cm³", "210 cm³", "105 cm³"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — dat is optellen. Volume is keer.",
          "Te weinig — doet de hoogte ook mee?",
          "Te weinig — tel de nullen nog eens na.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Formule balk",
              tekst: "V = l × b × h = 21 × 10 × 5.",
            },
            {
              titel: "Uitrekenen",
              tekst: "21 × 10 = 210. Dan 210 × 5 = 1050. Dus 1050 cm³.",
            },
          ],
          woorden: [
            {
              woord: "l × b × h",
              uitleg: "Lengte keer breedte keer hoogte — de 3 afmetingen van een balk.",
            },
          ],
          theorie: "Volume van een balk = altijd 3 getallen keer elkaar.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Stap 1: 21 × 10 = 210. Stap 2: 210 × 5 = 1050.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet optellen",
              uitleg: "Volume = keer. Optellen geeft een veel te klein antwoord.",
            },
          ],
          niveaus: {
            basis: "21 × 10 × 5 = 1050 cm³.",
            simpeler: "Eerst 21 × 10 = 210. Dan 210 × 5 = 1050. Dus 1050 cm³.",
            nogSimpeler: "1050 cm³",
          },
        },
      },
      {
        q: "Een pennendoos: **lengte 12 cm, breedte 5 cm, hoogte 2 cm**. Wat is het volume?",
        options: ["120 cm³", "19 cm³", "60 cm³", "24 cm³"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Te weinig — heb je alle drie de getallen keer gedaan?",
          "Te weinig — is de breedte meegeteld?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Formule balk",
              tekst: "V = l × b × h = 12 × 5 × 2.",
            },
            {
              titel: "Uitrekenen",
              tekst: "12 × 5 = 60. Dan 60 × 2 = 120. Dus 120 cm³.",
            },
          ],
          woorden: [
            {
              woord: "l × b × h",
              uitleg: "Lengte keer breedte keer hoogte — de 3 afmetingen van een balk.",
            },
          ],
          theorie: "Volume van een balk = altijd 3 getallen keer elkaar.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Stap 1: 12 × 5 = 60. Stap 2: 60 × 2 = 120.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet optellen",
              uitleg: "Volume = keer. Optellen geeft een veel te klein antwoord.",
            },
          ],
          niveaus: {
            basis: "12 × 5 × 2 = 120 cm³.",
            simpeler: "Eerst 12 × 5 = 60. Dan 60 × 2 = 120. Dus 120 cm³.",
            nogSimpeler: "120 cm³",
          },
        },
      },
      {
        q: "Reken slim: een balk van **25 cm × 7 cm × 4 cm**. Wat is het volume?",
        options: ["700 cm³", "36 cm³", "175 cm³", "100 cm³"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — dat is optellen. Volume is keer.",
          "Te weinig — heb je alle drie de getallen gebruikt?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Slim beginnen",
              tekst: "Begin met de makkelijkste: 25 × 4 = 100.",
            },
            {
              titel: "Daarna",
              tekst: "100 × 7 = 700. Dus 700 cm³.",
            },
          ],
          woorden: [
            {
              woord: "volgorde",
              uitleg: "Bij keer doen mag je de getallen in elke volgorde zetten.",
            },
          ],
          theorie: "l × b × h mag in elke volgorde. Zoek twee getallen die samen een mooi rond getal geven.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "25 × 4 = 100 → 100 × 7 = 700 cm³.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "25 × 4 = 100",
              uitleg: "Vier keer 25 is 100. Dat is handig om te onthouden.",
            },
          ],
          niveaus: {
            basis: "25 × 4 × 7 = 700 cm³.",
            simpeler: "Eerst 25 × 4 = 100. Dan 100 × 7 = 700. Dus 700 cm³.",
            nogSimpeler: "700 cm³",
          },
        },
      },
    ],
  },

  // STAP 4: Eenheden omrekenen
  {
    title: "Volume-eenheden omrekenen",
    explanation:
      "Bij de Doorstroomtoets staan vaak vragen waar je **eenheden moet omrekenen**. Bijvoorbeeld: \"hoeveel liter is 2500 cm³?\"\n\n**De vaste regels**:\n• 1 dm³ = 1 liter = 1000 cm³\n• 1 m³ = 1000 dm³ = 1000 liter\n• 1 liter = 1000 mL\n\n**Toets-truc** *(super-handig)*:\nGa van **groot naar klein** = keer 1000. Ga van **klein naar groot** = delen door 1000.\n\n**Voorbeelden**:\n• 2 liter = 2 × 1000 = **2000 mL**.\n• 3500 mL = 3500 ÷ 1000 = **3,5 liter**.\n• 4 dm³ = **4 liter** *(rechtstreeks gelijk!)*.\n• 5000 cm³ = 5000 ÷ 1000 = **5 dm³** = **5 liter**.\n• 2 m³ = 2 × 1000 = **2000 liter**.\n\n**De makkelijkste truc**:\nOnthoud: **1 liter = 1 dm³ = 1000 cm³**. Alles bouwt hierop voort.\n\n**Veel-voorkomende fout**:\n• Verwarring met lengte-eenheden. Bij **volume** is het in stapjes van **1000**, niet 10.\n• Denken dat 1 cm³ en 1 mL verschillend zijn — ze zijn precies gelijk: 1 mL = 1 cm³.",
    checks: [
      {
        q: "**2 liter** = ... mL?",
        options: ["2000 mL", "200 mL", "20 mL", "20.000 mL"],
        answer: 0,
        wrongHints: [null, "Te weinig — hoeveel mL zit in 1 liter? Vermenigvuldig dat met 2.", "Te weinig — dat zou 0,02 L zijn.", "Te veel — hoeveel keer 1000 is dat?"],
      },
      {
        q: "**3 dm³** = ... liter?",
        options: ["3 liter", "30 liter", "300 liter", "0,3 liter"],
        answer: 0,
        wrongHints: [null, "Te veel — hoeveel liter is 1 dm³ precies? Dat is niet 10.", "Te veel — je hebt met 100 vermenigvuldigd, maar dm³ en liter zijn gelijkwaardig.", "Te weinig — 1 dm³ is precies 1 liter."],
        uitlegPad: {
          stappen: [
            { titel: "Vaste regel", tekst: "1 dm³ = 1 liter. Dus 3 dm³ = 3 liter. Geen vermenigvuldiging nodig." },
          ],
          woorden: [{ woord: "dm³", uitleg: "Kubieke decimeter — een kubus van 10 cm × 10 cm × 10 cm." }],
          theorie: "Vrijwel de belangrijkste regel: 1 dm³ = 1 liter.",
          voorbeelden: [{ type: "stap", tekst: "5 dm³ → 5 liter. 8 dm³ → 8 liter." }],
          basiskennis: [{ onderwerp: "Direct gelijk", uitleg: "dm³ en liter zijn 1-op-1. Geen rekenen." }],
          niveaus: {
            basis: "3 dm³ = 3 liter.",
            simpeler: "1 dm³ is precies 1 liter. Dus 3 dm³ = 3 liter.",
            nogSimpeler: "3 liter",
          },
        },
      },
      {
        q: "**5000 cm³** = ... liter?",
        options: ["5 liter", "50 liter", "500 liter", "0,5 liter"],
        answer: 0,
        wrongHints: [null, "Te veel — hoeveel cm³ zit er in 1 liter? Deel daardoor, niet door 100.", "Te veel — heb je überhaupt gedeeld?", "Te weinig — controleer: hoeveel cm³ is 1 liter?"],
      },
      {
        q: "**4 m³** = ... liter?",
        options: ["4000 liter", "400 liter", "40 liter", "4 liter"],
        answer: 0,
        wrongHints: [null, "Te weinig — hoeveel liter past in 1 m³? Vermenigvuldig dat met 4.", "Te weinig — komma 1 plek verkeerd.", "Te weinig — m³ is een grote eenheid; reken nog eens."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**6 liter** = ... mL?",
        options: ["6000 mL", "600 mL", "60 mL", "60.000 mL"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — hoeveel mL zit er in 1 liter?",
          null,
          "Te veel — tel de nullen nog eens na.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Groot naar klein",
              tekst: "Liter is groter dan mL. Dus keer 1000.",
            },
            {
              titel: "Uitrekenen",
              tekst: "6 × 1000 = 6000 mL.",
            },
          ],
          woorden: [
            {
              woord: "1000",
              uitleg: "Bij volume-eenheden is elke stap 1000.",
            },
          ],
          theorie: "1 liter = 1 dm³ = 1000 cm³ = 1000 mL. 1 m³ = 1000 liter. Groot naar klein = × 1000, klein naar groot = ÷ 1000.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 liter = 1000 mL → 6 liter = 6000 mL.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Groot of klein?",
              uitleg: "Kijk eerst: ga je naar een kleinere eenheid (× 1000) of naar een grotere (÷ 1000)?",
            },
          ],
          niveaus: {
            basis: "6 liter = 6000 mL.",
            simpeler: "In 1 liter zit 1000 mL. Dus in 6 liter zit 6 × 1000 = 6000 mL.",
            nogSimpeler: "6000 mL",
          },
        },
      },
      {
        q: "**4500 mL** = ... liter?",
        options: ["4,5 liter", "45 liter", "450 liter", "0,45 liter"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — door welk getal moet je delen om van mL naar liter te gaan?",
          null,
          "Te weinig — is 4500 mL meer of minder dan 4 liter?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Klein naar groot",
              tekst: "mL is kleiner dan liter. Dus delen door 1000.",
            },
            {
              titel: "Uitrekenen",
              tekst: "4500 ÷ 1000 = 4,5 liter.",
            },
          ],
          woorden: [
            {
              woord: "1000",
              uitleg: "Bij volume-eenheden is elke stap 1000.",
            },
          ],
          theorie: "1 liter = 1 dm³ = 1000 cm³ = 1000 mL. 1 m³ = 1000 liter. Groot naar klein = × 1000, klein naar groot = ÷ 1000.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4000 mL = 4 liter, en 500 mL = een halve liter. Samen 4,5 liter.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Groot of klein?",
              uitleg: "Kijk eerst: ga je naar een kleinere eenheid (× 1000) of naar een grotere (÷ 1000)?",
            },
          ],
          niveaus: {
            basis: "4500 mL = 4,5 liter.",
            simpeler: "4500 ÷ 1000 = 4,5. Dus 4,5 liter.",
            nogSimpeler: "4,5 liter",
          },
        },
      },
      {
        q: "**7000 cm³** = ... dm³?",
        options: ["7 dm³", "70 dm³", "700 dm³", "0,7 dm³"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — hoeveel cm³ zit er in 1 dm³? Deel daardoor.",
          "Te veel — heb je wel genoeg gedeeld?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Klein naar groot",
              tekst: "cm³ is kleiner dan dm³. Dus delen door 1000.",
            },
            {
              titel: "Uitrekenen",
              tekst: "7000 ÷ 1000 = 7 dm³.",
            },
          ],
          woorden: [
            {
              woord: "1000",
              uitleg: "Bij volume-eenheden is elke stap 1000.",
            },
          ],
          theorie: "1 liter = 1 dm³ = 1000 cm³ = 1000 mL. 1 m³ = 1000 liter. Groot naar klein = × 1000, klein naar groot = ÷ 1000.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 dm³ = 1000 cm³ → 7000 cm³ = 7 dm³.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Groot of klein?",
              uitleg: "Kijk eerst: ga je naar een kleinere eenheid (× 1000) of naar een grotere (÷ 1000)?",
            },
          ],
          niveaus: {
            basis: "7000 cm³ = 7 dm³.",
            simpeler: "In 1 dm³ zit 1000 cm³. 7000 ÷ 1000 = 7. Dus 7 dm³.",
            nogSimpeler: "7 dm³",
          },
        },
      },
      {
        q: "**1,5 m³** = ... liter?",
        options: ["1500 liter", "150 liter", "15 liter", "15.000 liter"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — hoeveel liter past er in 1 m³?",
          null,
          "Te veel — reken eerst uit hoeveel liter 1 m³ is.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Groot naar klein",
              tekst: "m³ is groter dan liter. Dus keer 1000.",
            },
            {
              titel: "Uitrekenen",
              tekst: "1,5 × 1000 = 1500 liter.",
            },
          ],
          woorden: [
            {
              woord: "1000",
              uitleg: "Bij volume-eenheden is elke stap 1000.",
            },
          ],
          theorie: "1 liter = 1 dm³ = 1000 cm³ = 1000 mL. 1 m³ = 1000 liter. Groot naar klein = × 1000, klein naar groot = ÷ 1000.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 m³ = 1000 liter, en een halve m³ = 500 liter. Samen 1500 liter.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Groot of klein?",
              uitleg: "Kijk eerst: ga je naar een kleinere eenheid (× 1000) of naar een grotere (÷ 1000)?",
            },
          ],
          niveaus: {
            basis: "1,5 m³ = 1500 liter.",
            simpeler: "1 m³ is 1000 liter. 1,5 × 1000 = 1500. Dus 1500 liter.",
            nogSimpeler: "1500 liter",
          },
        },
      },
      {
        q: "**250 cm³** = ... mL?",
        options: ["250 mL", "25 mL", "2500 mL", "0,25 mL"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — is 1 cm³ meer of minder dan 1 mL?",
          "Te veel — hoeveel mL is 1 cm³ precies?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Precies gelijk",
              tekst: "1 cm³ = 1 mL. Je hoeft dus niets te rekenen.",
            },
            {
              titel: "Antwoord",
              tekst: "250 cm³ = 250 mL.",
            },
          ],
          woorden: [
            {
              woord: "1000",
              uitleg: "Bij volume-eenheden is elke stap 1000.",
            },
          ],
          theorie: "1 liter = 1 dm³ = 1000 cm³ = 1000 mL. 1 m³ = 1000 liter. Groot naar klein = × 1000, klein naar groot = ÷ 1000.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 cm³ = 1 mL → 250 cm³ = 250 mL.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Groot of klein?",
              uitleg: "Kijk eerst: ga je naar een kleinere eenheid (× 1000) of naar een grotere (÷ 1000)?",
            },
          ],
          niveaus: {
            basis: "250 cm³ = 250 mL.",
            simpeler: "cm³ en mL zijn precies even groot. Dus 250 cm³ = 250 mL.",
            nogSimpeler: "250 mL",
          },
        },
      },
      {
        q: "**9000 liter** = ... m³?",
        options: ["9 m³", "90 m³", "900 m³", "0,9 m³"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — hoeveel liter past in 1 m³? Deel daardoor.",
          null,
          "Te weinig — is 9000 liter meer of minder dan 1000 liter?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Klein naar groot",
              tekst: "Liter is kleiner dan m³. Dus delen door 1000.",
            },
            {
              titel: "Uitrekenen",
              tekst: "9000 ÷ 1000 = 9 m³.",
            },
          ],
          woorden: [
            {
              woord: "1000",
              uitleg: "Bij volume-eenheden is elke stap 1000.",
            },
          ],
          theorie: "1 liter = 1 dm³ = 1000 cm³ = 1000 mL. 1 m³ = 1000 liter. Groot naar klein = × 1000, klein naar groot = ÷ 1000.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 m³ = 1000 liter → 9000 liter = 9 m³.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Groot of klein?",
              uitleg: "Kijk eerst: ga je naar een kleinere eenheid (× 1000) of naar een grotere (÷ 1000)?",
            },
          ],
          niveaus: {
            basis: "9000 liter = 9 m³.",
            simpeler: "In 1 m³ past 1000 liter. 9000 ÷ 1000 = 9. Dus 9 m³.",
            nogSimpeler: "9 m³",
          },
        },
      },
    ],
  },

  // STAP 5: Praktijksommen
  {
    title: "Praktijk-sommen — zwembad, doos, aquarium",
    explanation:
      "Tijd voor Doorstroomtoets-stijl sommen. **Lees rustig** en zet altijd de eenheid bij het antwoord.\n\n**Stappenplan**:\n1. Wat is het — kubus of balk?\n2. Zoek de afmetingen (lengte, breedte, hoogte óf 1 zijde).\n3. Reken: l × b × h, of zijde × zijde × zijde.\n4. **Zet de eenheid** bij het antwoord (cm³, dm³, m³ of liter).\n5. Kijk: vraagt de vraag om liters? Zo ja → reken om.\n\n**Voorbeeld 1 — zwembad**:\n*'Een zwembad is 8 m lang, 4 m breed en 2 m diep. Hoeveel m³ water past erin?'*\n• V = 8 × 4 × 2 = **64 m³**.\n\n**Voorbeeld 2 — aquarium**:\n*'Een aquarium van 50 cm × 30 cm × 30 cm. Hoeveel liter?'*\n• V = 50 × 30 × 30 = 45.000 cm³.\n• Naar liter: 45.000 ÷ 1000 = **45 liter**.\n\n**Voorbeeld 3 — schoenendoos**:\n*'Een doos van 30 cm × 20 cm × 10 cm. Past er een paar schoenen in als die doos minimaal 5000 cm³ vraagt?'*\n• V = 30 × 20 × 10 = 6000 cm³.\n• 6000 > 5000 → **ja, past erin** (zelfs ruim).",
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
            basis: "6 × 3 × 1,5 = 27 m³.",
            simpeler: "6 × 3 = 18. 18 × 1,5 = 27. Dus 27 m³ water in het zwembad.",
            nogSimpeler: "27 m³",
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
        wrongHints: [null, "Te weinig — denk aan hoeveel mL in 1 liter.", "Te weinig — dat is een centiliter (cL).", "Te veel — komma 1 plaats verkeerd."],
      },
      {
        q: "Een **emmer** van **50 cm × 30 cm × 40 cm**. Hoeveel **liter**?",
        options: ["60 liter", "120 liter", "600 liter", "12 liter"],
        answer: 0,
        wrongHints: [null, "Te veel — reken het volume in cm³ nog eens na en deel dan door 1000.", "Te veel — komma 1 plek verkeerd.", "Te weinig — hoeveel cm³ gaan er in 1 liter? Deel het volume daardoor."],
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
            basis: "50 × 30 × 40 = 60.000 cm³ = 60 liter.",
            simpeler: "Eerst volume: 50 × 30 × 40 = 60.000 cm³. Daarna omrekenen: 60.000 ÷ 1000 = 60 liter.",
            nogSimpeler: "60 liter",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een **zwembad** is **10 m** lang, **5 m** breed en **2 m** diep. Hoeveel **m³** water past erin?",
        options: ["100 m³", "17 m³", "50 m³", "20 m³"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — heb je de getallen opgeteld? Volume is keer.",
          "Te weinig — doet de diepte ook mee?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kubus of balk?",
              tekst: "Een zwembad is een balk: lengte, breedte en diepte (hoogte).",
            },
            {
              titel: "Uitrekenen",
              tekst: "10 × 5 = 50. Dan 50 × 2 = 100. Dus 100 m³.",
            },
          ],
          woorden: [
            {
              woord: "diep",
              uitleg: "Hoe ver het water naar beneden gaat — dat is de hoogte van de balk.",
            },
          ],
          theorie: "Een zwembad is een balk: l × b × h. De eenheid is m³, omdat de maten in meters zijn.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "10 × 5 × 2 = 100 m³.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eenheid mee",
              uitleg: "Maten in m → antwoord in m³.",
            },
          ],
          niveaus: {
            basis: "10 × 5 × 2 = 100 m³.",
            simpeler: "10 × 5 = 50. 50 × 2 = 100. Dus 100 m³ water.",
            nogSimpeler: "100 m³",
          },
        },
      },
      {
        q: "Een **aquarium** is **80 cm × 30 cm × 40 cm**. Hoeveel **liter** water past erin?",
        options: ["96 liter", "960 liter", "9,6 liter", "9600 liter"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — door welk getal deel je om van cm³ naar liter te gaan?",
          null,
          "Te veel — heb je wel omgerekend naar liter?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst cm³",
              tekst: "80 × 30 × 40 = 96.000 cm³.",
            },
            {
              titel: "Naar liter",
              tekst: "96.000 ÷ 1000 = 96 liter.",
            },
          ],
          woorden: [
            {
              woord: "L",
              uitleg: "Liter — gebruikt voor vloeistoffen. 1 liter = 1000 cm³.",
            },
          ],
          theorie: "Vraagt de vraag om liters? Reken eerst cm³ uit en deel dan door 1000.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "80 × 30 = 2400 → 2400 × 40 = 96.000 cm³ → 96 liter.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "÷ 1000",
              uitleg: "Van cm³ naar liter deel je altijd door 1000.",
            },
          ],
          niveaus: {
            basis: "80 × 30 × 40 = 96.000 cm³ = 96 liter.",
            simpeler: "Eerst volume: 96.000 cm³. Dan ÷ 1000 = 96 liter.",
            nogSimpeler: "96 liter",
          },
        },
      },
      {
        q: "Een doos is **25 cm × 12 cm × 10 cm**. Een speelgoedset heeft minstens **4000 cm³** ruimte nodig. Past de set in de doos?",
        options: [
          "Nee, de doos is 1000 cm³ te klein",
          "Ja, er blijft 1000 cm³ over",
          "Ja, de doos is precies groot genoeg",
          "Nee, de doos is 2000 cm³ te klein",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Reken eerst het volume van de doos uit. Is dat meer of minder dan 4000?",
          null,
          "Reken het volume van de doos nog eens na.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Volume doos",
              tekst: "25 × 12 × 10 = 3000 cm³.",
            },
            {
              titel: "Vergelijk",
              tekst: "3000 is minder dan 4000. Het verschil is 4000 − 3000 = 1000 cm³. De doos is dus te klein.",
            },
          ],
          woorden: [
            {
              woord: "minstens",
              uitleg: "Het moet dit getal zijn of meer.",
            },
          ],
          theorie: "Eerst het volume uitrekenen, dan pas vergelijken met wat er nodig is.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3000 cm³ < 4000 cm³ → past niet, 1000 cm³ te weinig.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vergelijken",
              uitleg: "Groter dan nodig = past. Kleiner dan nodig = past niet.",
            },
          ],
          niveaus: {
            basis: "3000 cm³ is 1000 cm³ te weinig.",
            simpeler: "Doos: 25 × 12 × 10 = 3000 cm³. Nodig: 4000 cm³. 3000 is te weinig — 1000 cm³ tekort.",
            nogSimpeler: "Nee, 1000 cm³ te klein",
          },
        },
      },
      {
        q: "Een **bloembak** is een kubus met een zijde van **30 cm**. Hoeveel **liter** aarde past erin?",
        options: ["27 liter", "270 liter", "2,7 liter", "2700 liter"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — hoeveel cm³ is 1 liter? Deel daardoor.",
          "Te weinig — reken 30 × 30 × 30 nog eens na.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kubus",
              tekst: "V = 30 × 30 × 30 = 27.000 cm³.",
            },
            {
              titel: "Naar liter",
              tekst: "27.000 ÷ 1000 = 27 liter.",
            },
          ],
          woorden: [
            {
              woord: "kubus",
              uitleg: "Een blok waarbij alle ribben even lang zijn.",
            },
          ],
          theorie: "Kubus: zijde × zijde × zijde. Vraagt de vraag om liters? Dan ÷ 1000.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "30 × 30 = 900 → 900 × 30 = 27.000 cm³ → 27 liter.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Slim rekenen",
              uitleg: "3 × 3 × 3 = 27, met drie nullen erachter: 27.000.",
            },
          ],
          niveaus: {
            basis: "30 × 30 × 30 = 27.000 cm³ = 27 liter.",
            simpeler: "Volume: 27.000 cm³. Gedeeld door 1000 = 27 liter.",
            nogSimpeler: "27 liter",
          },
        },
      },
      {
        q: "Een **zandbak** is **2 m** lang, **2 m** breed en wordt **0,5 m** hoog gevuld met zand. Hoeveel **m³** zand is dat?",
        options: ["2 m³", "4,5 m³", "4 m³", "1 m³"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — heb je opgeteld? Volume is keer.",
          "Is de hoogte van 0,5 m meegeteld?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Balk",
              tekst: "V = 2 × 2 × 0,5.",
            },
            {
              titel: "Uitrekenen",
              tekst: "2 × 2 = 4. Dan 4 × 0,5 = 2. Dus 2 m³.",
            },
          ],
          woorden: [
            {
              woord: "0,5",
              uitleg: "Een half. Keer 0,5 is hetzelfde als de helft nemen.",
            },
          ],
          theorie: "Ook met een kommagetal is volume gewoon l × b × h.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 × 2 = 4 → de helft van 4 = 2 m³.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "× 0,5",
              uitleg: "Keer 0,5 = de helft.",
            },
          ],
          niveaus: {
            basis: "2 × 2 × 0,5 = 2 m³.",
            simpeler: "2 × 2 = 4. 4 × 0,5 is de helft van 4 = 2. Dus 2 m³.",
            nogSimpeler: "2 m³",
          },
        },
      },
      {
        q: "Een **koelbox** is vanbinnen **40 cm × 30 cm × 25 cm**. Hoeveel **liter** past erin?",
        options: ["30 liter", "300 liter", "3 liter", "95 liter"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — door welk getal deel je om van cm³ naar liter te gaan?",
          null,
          "Heb je de maten opgeteld? Volume is keer.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst cm³",
              tekst: "40 × 30 × 25 = 30.000 cm³.",
            },
            {
              titel: "Naar liter",
              tekst: "30.000 ÷ 1000 = 30 liter.",
            },
          ],
          woorden: [
            {
              woord: "vanbinnen",
              uitleg: "De ruimte binnenin, zonder de dikke wanden.",
            },
          ],
          theorie: "Eerst l × b × h in cm³, dan ÷ 1000 voor liters.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Slim: 40 × 25 = 1000 → 1000 × 30 = 30.000 cm³ → 30 liter.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Slim beginnen",
              uitleg: "40 × 25 = 1000. Dat rekent lekker makkelijk verder.",
            },
          ],
          niveaus: {
            basis: "40 × 30 × 25 = 30.000 cm³ = 30 liter.",
            simpeler: "Eerst 40 × 25 = 1000. Dan × 30 = 30.000 cm³. Gedeeld door 1000 = 30 liter.",
            nogSimpeler: "30 liter",
          },
        },
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix eindopdracht
  {
    title: "Eindopdracht — volume-mix",
    explanation:
      "Mix-toets in echte Doorstroomtoets-stijl. Verschillende sommen door elkaar — kubus, balk, eenheden omrekenen.\n\n**Tip**: lees de vraag eerst rustig, zet **eenheid** altijd bij je antwoord. Bij twijfel — kies bewust kubus (1 zijde) of balk (3 getallen).\n\nVeel succes!",
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
        wrongHints: [null, "Te weinig — dat is 5 + 4 + 3. Volume is keer.", "Te weinig — alleen 5 × 4 gedaan, hoogte vergeten.", "Te weinig — alleen 5 × 3 gedaan, breedte vergeten."],
      },
      {
        q: "**8000 cm³** = ... **liter**?",
        options: ["8 liter", "80 liter", "0,8 liter", "800 liter"],
        answer: 0,
        wrongHints: [null, "Te veel — hoeveel cm³ zit er in 1 liter? Deel 8000 daardoor.", "Te weinig — kijk of je echt door 1000 gedeeld hebt.", "Te veel — komma 1 plek verkeerd."],
      },
      {
        q: "Een **kamer** is **5 m × 4 m × 3 m**. Hoeveel **m³** lucht?",
        options: ["60 m³", "12 m³", "20 m³", "120 m³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 5 + 4 + 3. Volume is keer.", "Te weinig — alleen 5 × 4 gedaan.", "Te veel — controleer 5 × 4 × 3."],
      },
      {
        q: "**2,5 liter** = ... **mL**?",
        options: ["2500 mL", "250 mL", "25 mL", "25.000 mL"],
        answer: 0,
        wrongHints: [null, "Te weinig — hoeveel mL zit in 1 liter? Vermenigvuldig dat met 2,5.", "Te weinig — dat is 0,25 L.", "Te veel — komma 1 plek verkeerd."],
      },
      {
        q: "Een **doos** van **20 cm × 10 cm × 5 cm**. Hoeveel **mL** water past erin?",
        options: ["1000 mL", "35 mL", "100 mL", "200 mL"],
        answer: 0,
        wrongHints: [null, "Te weinig — bereken eerst het volume in cm³ door alle afmetingen te vermenigvuldigen. Dan: hoeveel mL is 1 cm³?", "Te weinig — dat is 20 × 5. De 10 vergeten.", "Te weinig — dat is 20 × 10. De 5 vergeten."],
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
            basis: "20 × 10 × 5 = 1000 cm³ = 1000 mL.",
            simpeler: "Volume: 20 × 10 × 5 = 1000 cm³. En 1 cm³ = 1 mL. Dus 1000 mL water.",
            nogSimpeler: "1000 mL",
          },
        },
      },
      { q: "Volume van een kubus met **ribbe 3 cm**?", options: ["27 cm³","9 cm³","6 cm³","12 cm³"], answer: 0, wrongHints: [null, "Oppervlakte van 1 vlak.", "Niet.", "Omtrek vlak."] },
      { q: "Volume balk **5 × 4 × 2** cm?", options: ["40 cm³","11 cm³","20 cm³","80 cm³"], answer: 0, wrongHints: [null, "Som.", "2 dimensies.", "×2 fout."] },
      { q: "Een **kubus** heeft hoeveel ribben?", options: ["12","8","6","4"], answer: 0, wrongHints: [null, "Hoekpunten.", "Vlakken.", "Niet."] },
      { q: "Een **kubus** heeft hoeveel **vlakken**?", options: ["6","4","8","12"], answer: 0, wrongHints: [null, "Te weinig — tel ook de boven- en onderkant mee.", "Hoekpunten.", "Ribben."] },
      { q: "1 dm³ = hoeveel L?", options: ["1","100","1000","10"], answer: 0, wrongHints: [null, "Te veel — denk aan de directe omzetting dm³ ↔ liter.", "Te veel — dat is cm³ per liter.", "Te veel — komma 1 plek verkeerd."] },
      { q: "Aquarium 50×30×40 cm. Volume in cm³?", options: ["60.000","12.000","120","6000"], answer: 0, wrongHints: [null, "Te weinig — controleer 50 × 30 × 40.", "Veel te weinig — vergeet je een nul?", "Komma 1 plek verkeerd."] },
      { q: "1 m³ = hoeveel L?", options: ["1000","100","10","10.000"], answer: 0, wrongHints: [null, "Te weinig — komma verkeerd.", "Veel te weinig — denk groot, 1 m³ = veel liters.", "Te veel — komma 1 plek verkeerd."] },
      { q: "Een **kubus** heeft hoeveel hoekpunten?", options: ["8","6","4","12"], answer: 0, wrongHints: [null, "Vlakken.", "Niet.", "Ribben."] },
      { q: "Volume formule **balk**?", options: ["l × b × h","l + b + h","l × b","l × h"], answer: 0, wrongHints: [null, "Som = niet volume.", "2 dimensies.", "2 dimensies."] },
      { q: "Een **doos** 10 × 10 × 10 cm. Volume?", options: ["1000 cm³","100 cm³","10 cm³","10.000 cm³"], answer: 0, wrongHints: [null, "Vlak.", "Ribbe.", "Te veel."] },
      { q: "Volume in **liters** voor 8000 cm³?", options: ["8 L","800 L","80 L","0,8 L"], answer: 0, wrongHints: [null, "Te veel.", "Te veel.", "Te weinig."] },
      { q: "**Inhoud** is een ander woord voor?", options: ["Volume","Lengte","Oppervlakte","Massa"], answer: 0, wrongHints: [null, "Niet.", "Niet 3D.", "Gewicht."] },
      { q: "Welke **eenheid** voor volume kun je gebruiken?", options: ["cm³","cm","kg","°C"], answer: 0, wrongHints: [null, "Lengte.", "Massa.", "Temperatuur."] },
      { q: "Kistje 4×4×4 cm. Volume?", options: ["64 cm³","12 cm³","16 cm³","48 cm³"], answer: 0, wrongHints: [null, "Som.", "Vlak.", "Niet."] },
      { q: "Hoeveel **water** past in een doos van 10 × 5 × 4 cm?", options: ["200 mL","19 mL","100 mL","2000 mL"], answer: 0, wrongHints: [null, "Som.", "Niet.", "Te veel."] },
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
    "Volume voor groep 6-8 — wat volume is, kubus + balk berekenen, liters/cm³/m³ omrekenen, Toets-praktijksommen met zwembad, aquarium en doos. ~15 min.",
  triggerKeywords: [
    "volume", "kubus", "balk", "inhoud", "liter", "cm3", "cm³", "dm³", "m³",
    "kubieke", "aquarium", "zwembad", "doos", "bouwsel", "ribbe", "zijde",
  ],
  chapters,
  steps,
};

export default meetkundeBouwsels;
