// Leerpad: Vlakke figuren (omtrek + oppervlakte) — voor groep 5-8
// 5 stappen. Cito-stijl praktijksommen.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#00c853",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  rect: "#5d9cec",
  tri: "#ffaa30",
};

const stepEmojis = ["⬜","🔺","🔵","🛒","🏆"];

const chapters = [
  { letter: "A", title: "Vierkant en rechthoek", emoji: "⬜", from: 0, to: 1 },
  { letter: "B", title: "Driehoek", emoji: "🔺", from: 2, to: 2 },
  { letter: "C", title: "Praktijk + Cito-eindopdracht", emoji: "🏆", from: 3, to: 4 },
];

function rechthoekSvg(b, h, label) {
  const breedte = 280, hoogte = 160;
  const startX = 60, startY = 40;
  const w = b * 6, hp = h * 6;
  return `<svg viewBox="0 0 ${breedte} ${hoogte}">
<rect x="0" y="0" width="${breedte}" height="${hoogte}" fill="${COLORS.paper}"/>
<rect x="${startX}" y="${startY}" width="${w}" height="${hp}" fill="rgba(93,156,236,0.30)" stroke="${COLORS.rect}" stroke-width="2"/>
<text x="${startX + w / 2}" y="${startY - 8}" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">${b} m</text>
<text x="${startX - 12}" y="${startY + hp / 2 + 5}" text-anchor="end" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">${h} m</text>
<text x="${breedte / 2}" y="${hoogte - 14}" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">${label}</text>
</svg>`;
}

function driehoekSvg(basis, hoogte, label) {
  const breedte = 280, h = 180;
  const cx = 130, cy = 130;
  const w = basis * 6, hp = hoogte * 6;
  return `<svg viewBox="0 0 ${breedte} ${h}">
<rect x="0" y="0" width="${breedte}" height="${h}" fill="${COLORS.paper}"/>
<polygon points="${cx - w/2},${cy} ${cx + w/2},${cy} ${cx},${cy - hp}" fill="rgba(255,170,48,0.30)" stroke="${COLORS.tri}" stroke-width="2"/>
<line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - hp}" stroke="${COLORS.muted}" stroke-dasharray="3,3"/>
<text x="${cx}" y="${cy + 18}" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">basis: ${basis} m</text>
<text x="${cx - 35}" y="${cy - hp/2}" text-anchor="end" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">hoogte: ${hoogte} m</text>
<text x="${breedte / 2}" y="${h - 12}" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">${label}</text>
</svg>`;
}

const steps = [
  {
    title: "Omtrek + oppervlakte — wat is het?",
    explanation: "Twee belangrijke maten van een figuur:\n\n• **Omtrek** = de **lengte** rondom het figuur. Stel je een hek om de tuin voor — hoe lang is dat hek? *Eenheid: m, cm, km*.\n• **Oppervlakte** = hoeveel **plek** het figuur inneemt. Stel je gras op de tuin — hoeveel m² gras? *Eenheid: m², cm², km².*\n\n**Verschil makkelijk**:\n• Omtrek meet je in **meters** (1 dimensie — lengte).\n• Oppervlakte meet je in **vierkante meters** (2 dimensies — lengte × breedte).\n\n**Vierkant** *(alle 4 zijden gelijk)*:\n• Omtrek = **4 × zijde**.\n• Oppervlakte = **zijde × zijde** *(of zijde²)*.\n\nVoorbeeld: vierkant van 5 m.\n• Omtrek = 4 × 5 = **20 m**.\n• Oppervlakte = 5 × 5 = **25 m²**.\n\n**Rechthoek** *(2 zijden lang, 2 zijden breed)*:\n• Omtrek = **2 × (lengte + breedte)**.\n• Oppervlakte = **lengte × breedte**.\n\nVoorbeeld: rechthoek 6 m × 4 m.\n• Omtrek = 2 × (6 + 4) = 2 × 10 = **20 m**.\n• Oppervlakte = 6 × 4 = **24 m²**.\n\n**Cito-tip**:\nLet altijd op de **eenheid**! 'Meter' bij omtrek, '**vierkante meter (m²)**' bij oppervlakte.",
    svg: rechthoekSvg(8, 5, "Rechthoek 8 × 5 m"),
    checks: [
      {
        q: "Vierkant met **zijde 7 m** — wat is de **omtrek**?",
        options: ["28 m","49 m","14 m","21 m"],
        answer: 0,
        wrongHints: [null,"Dat is oppervlakte (zijde²).","Te weinig — controleer 4 × 7.","Te weinig — heb je 3 zijden gerekend?"],
        uitlegPad: {
          stappen: [{ titel: "4 × zijde", tekst: "Vierkant: 4 gelijke zijden. Omtrek = 4 × zijde = 4 × 7 = 28 m." }],
          woorden: [{ woord: "omtrek", uitleg: "Lengte rondom het figuur. Eenheid: m, cm, km." }],
          theorie: "Vierkant-formules: omtrek = 4 × zijde. Oppervlakte = zijde × zijde.",
          voorbeelden: [{ type: "stap", tekst: "Zijde 7m → omtrek = 4×7 = 28 m. Oppervlakte = 7×7 = 49 m²." }],
          basiskennis: [{ onderwerp: "Eenheid", uitleg: "Omtrek = m (lengte). Oppervlakte = m² (vlak)." }],
          niveaus: { basis: "28 m. A.", simpeler: "Vierkant = 4 gelijke zijden. Omtrek = 4 × 7 = 28 m. = A.", nogSimpeler: "28 = A." },
        },
      },
      {
        q: "Rechthoek **10 m × 4 m** — wat is de **oppervlakte**?",
        options: ["40 m²","28 m","14 m","40 m"],
        answer: 0,
        wrongHints: [null,"Dat is omtrek, niet oppervlakte.","Dat is alleen halve omtrek.","Klopt qua getal maar verkeerde eenheid — oppervlakte = m²."],
        uitlegPad: {
          stappen: [{ titel: "L × B", tekst: "Rechthoek: oppervlakte = lengte × breedte = 10 × 4 = 40 m²." }],
          woorden: [{ woord: "oppervlakte", uitleg: "Hoeveel plek het figuur inneemt. Eenheid: m² (vierkante meters)." }],
          theorie: "Rechthoek-formules: omtrek = 2×(L+B). Oppervlakte = L×B.",
          voorbeelden: [{ type: "stap", tekst: "10×4 = 40. Eenheid m² (want 2 dimensies)." }],
          basiskennis: [{ onderwerp: "m² niet m", uitleg: "Oppervlakte ALTIJD m² (lengte × lengte). Niet zomaar m." }],
          niveaus: { basis: "40 m². A.", simpeler: "Oppervlakte = L × B = 10 × 4 = 40. Eenheid: m² (oppervlakte). = A.", nogSimpeler: "40 m² = A." },
        },
      },
      {
        q: "Vierkant met **omtrek 20 cm** — wat is de **zijde**?",
        options: ["5 cm","10 cm","4 cm","20 cm"],
        answer: 0,
        wrongHints: [null,"Te veel — denk: 4 × zijde = 20.","Te weinig — controleer 4 × 4 = 16, niet 20.","Dat is omtrek zelf."],
        uitlegPad: {
          stappen: [{ titel: "Omtrek ÷ 4", tekst: "Vierkant: 4 zijden. Omtrek÷4 = zijde. 20÷4 = 5 cm." }],
          woorden: [{ woord: "andersom rekenen", uitleg: "Wanneer omtrek bekend, gebruik formule omgekeerd: zijde = omtrek÷4." }],
          theorie: "Omkeerformule vierkant: zijde = omtrek ÷ 4.",
          voorbeelden: [{ type: "stap", tekst: "Omtrek 20 → zijde = 20÷4 = 5 cm. Check: 4×5 = 20 ✓." }],
          basiskennis: [{ onderwerp: "Tafel van 4", tekst: "20÷4 = 5 (uit tafel: 4×5=20)." }],
          niveaus: { basis: "5 cm. A.", simpeler: "Vierkant heeft 4 gelijke zijden. Omtrek 20 ÷ 4 zijden = 5 cm per zijde. = A.", nogSimpeler: "5 = A." },
        },
      },
    ],
  },

  {
    title: "Praktijk — vierkant en rechthoek",
    explanation: "Praktijk-sommen waar je omtrek en oppervlakte gebruikt:\n\n**Voorbeeld 1 — hek om tuin**:\n*'Een tuin is 12 m × 8 m. Hoeveel meter hek heb je nodig?'*\n• Hek = **omtrek** = 2 × (12 + 8) = **40 m**.\n\n**Voorbeeld 2 — gras zaaien**:\n*'Een grasveld 15 m × 10 m. Hoeveel m² gras nodig?'*\n• Gras = **oppervlakte** = 15 × 10 = **150 m²**.\n\n**Voorbeeld 3 — rand om foto**:\n*'Een foto 20 cm × 15 cm wordt omlijnd. Hoeveel cm lijst nodig?'*\n• Lijst = **omtrek** = 2 × (20 + 15) = **70 cm**.\n\n**Voorbeeld 4 — tegels**:\n*'Een vloer 6 m × 4 m wordt betegeld met tegels van 50 × 50 cm. Hoeveel tegels nodig?'*\n• Vloer = 6 × 4 = 24 m² = 240.000 cm².\n• Tegel = 50 × 50 = 2.500 cm².\n• Aantal: 240.000 ÷ 2.500 = **96 tegels**.\n\n**Cito-vraag — kies juiste maat**:\n• 'Hek', 'lijst', 'rand' → **omtrek**.\n• 'Gras', 'tegels', 'verf', 'tapijt' → **oppervlakte**.\n\n**Veel-voorkomende fout**:\nOmtrek en oppervlakte verwarren. Vraag: meet je *langs de rand* (omtrek) of *over het hele vlak* (oppervlakte)?",
    checks: [
      {
        q: "Een **tuin 18 × 12 m** krijgt een hek. Hoeveel **meter hek**?",
        options: ["60 m","216 m","30 m","6 m"],
        answer: 0,
        wrongHints: [null,"Dat is oppervlakte, niet omtrek.","Te weinig — heb je halve omtrek?","Veel te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Hek = omtrek", tekst: "Hek loopt rondom = omtrek. 2 × (18+12) = 2 × 30 = 60 m." }],
          woorden: [{ woord: "hek", uitleg: "Loopt langs alle 4 zijden = omtrek." }],
          theorie: "Praktijk-truc: 'rondom' = omtrek. Rechthoek-omtrek = 2(L+B).",
          voorbeelden: [{ type: "stap", tekst: "18+12 = 30 (halve omtrek). ×2 = 60 m hek." }],
          basiskennis: [{ onderwerp: "Niet oppervlakte", uitleg: "Hek = lengte (m), niet vlak (m²). 18×12 = oppervlakte." }],
          niveaus: { basis: "60 m. A.", simpeler: "Hek = omtrek. Omtrek = 2×(18+12) = 2×30 = 60 m. = A.", nogSimpeler: "60 = A." },
        },
      },
      {
        q: "Een **kamer 5 × 4 m** wordt geverfd. Hoeveel **m² vloer**?",
        options: ["20 m²","18 m","9 m","20 m"],
        answer: 0,
        wrongHints: [null,"Dat is omtrek, niet oppervlakte.","Klopt niet — onjuiste eenheid en getal.","Klopt qua getal maar oppervlakte = m²."],
        uitlegPad: {
          stappen: [{ titel: "Vloer = oppervlakte", tekst: "Vloer = vlak = oppervlakte. 5×4 = 20 m²." }],
          woorden: [{ woord: "vloer", uitleg: "Het hele vlak = oppervlakte. Eenheid m²." }],
          theorie: "Praktijk-truc: 'vloer/gras/verf/tegels' = oppervlakte. Rechthoek = L×B.",
          voorbeelden: [{ type: "stap", tekst: "5×4 = 20 m² vloer (oppervlakte)." }],
          basiskennis: [{ onderwerp: "Eenheid", uitleg: "Oppervlakte ALTIJD m². 'm' zonder ² = lengte (omtrek)." }],
          niveaus: { basis: "20 m². A.", simpeler: "Vloer = oppervlakte = L×B = 5×4 = 20 m² (let op eenheid m²). = A.", nogSimpeler: "20 m² = A." },
        },
      },
      {
        q: "Een vierkant terras met **zijde 6 m**. Hoeveel **omtrek**?",
        options: ["24 m","36 m","12 m","48 m"],
        answer: 0,
        wrongHints: [null,"Dat is oppervlakte (6²).","Te weinig — controleer 4 × 6.","Te veel — heb je extra zijde gerekend?"],
        uitlegPad: {
          stappen: [{ titel: "4 × 6", tekst: "Vierkant 4 zijden × 6 m = 24 m omtrek." }],
          woorden: [{ woord: "vierkant terras", uitleg: "Alle 4 zijden gelijk lang." }],
          theorie: "Vierkant-omtrek = 4 × zijde.",
          voorbeelden: [{ type: "stap", tekst: "4 × 6 = 24 m." }],
          basiskennis: [{ onderwerp: "Niet oppervlakte", uitleg: "36 m² = oppervlakte (6×6). Vraag wil omtrek (m)." }],
          niveaus: { basis: "24 m. A.", simpeler: "Vierkant 4 × zijde = 4×6 = 24 m omtrek. = A.", nogSimpeler: "24 = A." },
        },
      },
    ],
  },

  {
    title: "Driehoek — basis × hoogte ÷ 2",
    explanation: "Een **driehoek** heeft 3 zijden. De omtrek is gewoon de som van alle 3 zijden. Maar de **oppervlakte** is bijzonder.\n\n**Formule**:\n• Oppervlakte driehoek = **(basis × hoogte) ÷ 2**.\n\n**Belangrijk**: 'hoogte' is **NIET** een schuine zijde. Het is de **loodrechte** afstand van de top naar de basis (recht omhoog).\n\n**Voorbeeld**: driehoek met basis 8 m en hoogte 5 m.\n• Oppervlakte = (8 × 5) ÷ 2 = 40 ÷ 2 = **20 m²**.\n\n**Waarom delen door 2?**\nOmdat een driehoek **half** een rechthoek is. Stel je voor: rechthoek 8 × 5 m → oppervlakte 40 m². Snij diagonaal door = 2 driehoeken van 20 m² elk.\n\n**Cito-truc**:\n• Eerst basis × hoogte → dan ÷ 2.\n• Of eerst ÷ 2 → dan vermenigvuldigen *(als één van beide getallen even is, scheelt fouten)*.\n\n**Voorbeeld**: basis 10, hoogte 6.\n• 10 × 6 = 60. ÷ 2 = **30 m²**.\n• Of: 10 × 6 ÷ 2 = 10 × 3 = **30 m²**.\n\n**Veel-voorkomende fout**:\n'Hoogte' verwarren met een zijde. **Hoogte = loodrecht** vanaf de top naar de basis. In een schuine driehoek is dat een **gestippelde lijn**, niet een echte zijde.",
    svg: driehoekSvg(10, 6, "Driehoek b=10, h=6 → opp = 30"),
    checks: [
      {
        q: "Driehoek **basis 12 m, hoogte 8 m** — oppervlakte?",
        options: ["48 m²","96 m²","24 m²","20 m²"],
        answer: 0,
        wrongHints: [null,"Te veel — vergeet ÷ 2 niet.","Te weinig — heb je nog een keer ÷ 2 gedaan?","Veel te weinig."],
        uitlegPad: {
          stappen: [{ titel: "B × H ÷ 2", tekst: "12 × 8 = 96. ÷2 = 48 m²." }],
          woorden: [{ woord: "driehoek-formule", uitleg: "Oppervlakte = (basis × hoogte) ÷ 2." }],
          theorie: "Driehoek = halve rechthoek. Daarom ÷ 2.",
          voorbeelden: [{ type: "stap", tekst: "12 × 8 = 96. 96 ÷ 2 = 48 m²." }],
          basiskennis: [{ onderwerp: "Vergeet ÷2 niet", uitleg: "96 = oppervlakte rechthoek met dezelfde maten. Driehoek = helft." }],
          niveaus: { basis: "48 m². A.", simpeler: "Driehoek = (basis × hoogte) ÷ 2 = (12×8)÷2 = 96÷2 = 48 m². = A.", nogSimpeler: "48 = A." },
        },
      },
      {
        q: "Driehoek met **basis 5 cm, hoogte 4 cm** — oppervlakte?",
        options: ["10 cm²","20 cm²","9 cm²","40 cm²"],
        answer: 0,
        wrongHints: [null,"Te veel — vergeet ÷ 2.","Niet × of +.","Veel te veel."],
        uitlegPad: {
          stappen: [{ titel: "B × H ÷ 2", tekst: "5 × 4 = 20. ÷2 = 10 cm²." }],
          woorden: [{ woord: "driehoek-oppervlakte", uitleg: "(basis × hoogte) ÷ 2." }],
          theorie: "Bij even getal: kun je eerst ÷2, dan vermenigvuldigen. 4÷2=2. 5×2=10.",
          voorbeelden: [{ type: "stap", tekst: "5×4÷2 = 5×2 = 10 cm²." }],
          basiskennis: [{ onderwerp: "Hoogte loodrecht", uitleg: "Hoogte = recht naar boven, niet schuine zijde." }],
          niveaus: { basis: "10 cm². A.", simpeler: "(5×4)÷2 = 20÷2 = 10 cm². = A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "Een driehoekige tuintje basis **6 m**, hoogte **9 m**. Hoeveel **m² gras**?",
        options: ["27 m²","54 m²","15 m²","18 m²"],
        answer: 0,
        wrongHints: [null,"Te veel — vergeet ÷ 2.","Te weinig — heb je optellen gedaan?","Te weinig — controleer 6×9÷2."],
        uitlegPad: {
          stappen: [{ titel: "B × H ÷ 2", tekst: "6 × 9 = 54. ÷2 = 27 m² gras." }],
          woorden: [{ woord: "gras = oppervlakte", uitleg: "Hele vlak = oppervlakte (m²)." }],
          theorie: "Driehoek-oppervlakte: ALTIJD ÷ 2 op het einde.",
          voorbeelden: [{ type: "stap", tekst: "6×9=54. 54÷2=27. Of: 6÷2=3, 3×9=27." }],
          basiskennis: [{ onderwerp: "Even getal eerst ÷2", uitleg: "6 is even → 6÷2=3 → 3×9=27. Voorkomt grote getallen." }],
          niveaus: { basis: "27 m². A.", simpeler: "Driehoek = (6×9)÷2 = 54÷2 = 27 m² gras. = A.", nogSimpeler: "27 = A." },
        },
      },
    ],
  },

  {
    title: "Praktijk — schoolse situaties",
    explanation: "Cito-vragen mengen vaak omtrek/oppervlakte met andere onderwerpen *(geld, kosten, tegels, verf)*.\n\n**Voorbeeld 1**:\n*'Een kantoor van 10 × 8 m wordt geverfd. 1 liter verf is voor 10 m². Hoeveel liter?'*\n• Oppervlakte = 80 m².\n• Liter = 80 ÷ 10 = **8 L**.\n\n**Voorbeeld 2**:\n*'Een tuin 20 × 15 m. Hek kost € 8 per meter. Wat kost het hek?'*\n• Omtrek = 2 × (20 + 15) = 70 m.\n• Kost = 70 × 8 = **€ 560**.\n\n**Voorbeeld 3 — gras + hek**:\n*'Een gras-veld 25 × 12 m. Het kost € 5 per m² gras + € 6 per meter hek. Totaal?'*\n• Gras-oppervlakte = 25 × 12 = 300 m². Kost = 300 × 5 = € 1500.\n• Hek-omtrek = 2 × (25 + 12) = 74 m. Kost = 74 × 6 = € 444.\n• Totaal = **€ 1944**.\n\n**Stappenplan**:\n1. Lees: heb je omtrek of oppervlakte nodig?\n2. Reken die uit met de juiste formule.\n3. Vermenigvuldig met de prijs/factor.\n4. Voeg samen als het meerdere onderdelen zijn.",
    checks: [
      {
        q: "Een tuin **15 × 12 m**. Hek kost **€ 10/m**. Hekkosten?",
        options: ["€ 540","€ 1800","€ 270","€ 600"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je oppervlakte ipv omtrek?","Te weinig — controleer omtrek = 2(15+12).","Te veel — controleer formule."],
        uitlegPad: {
          stappen: [{ titel: "Omtrek + prijs", tekst: "Hek = omtrek = 2×(15+12) = 54 m. Kost = 54×€10 = €540." }],
          woorden: [{ woord: "hekkosten", uitleg: "Lengte hek (m) × prijs per meter." }],
          theorie: "2-stappen: 1) bereken omtrek. 2) keer prijs per meter.",
          voorbeelden: [{ type: "stap", tekst: "Omtrek 2×(15+12)=54m. ×€10 = €540." }],
          basiskennis: [{ onderwerp: "Niet ×oppervlakte", uitleg: "180 m² × €10 = €1800 (fout). Hek = lengte!" }],
          niveaus: { basis: "€540. A.", simpeler: "Hek = omtrek = 2×(15+12) = 54m. Kosten = 54 × €10 = €540. = A.", nogSimpeler: "€540 = A." },
        },
      },
      {
        q: "Een vloer **8 × 6 m** wordt betegeld. **€ 12 per m²**. Kosten?",
        options: ["€ 576","€ 168","€ 96","€ 720"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je omtrek ipv oppervlakte?","Niet correct — controleer 8×6=48 → ×12.","Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Oppervlakte + prijs", tekst: "Vloer = oppervlakte = 8×6 = 48 m². Kost = 48×€12 = €576." }],
          woorden: [{ woord: "tegelkosten", uitleg: "Vloer (m²) × prijs per m²." }],
          theorie: "2-stappen: 1) oppervlakte (L×B). 2) keer prijs per m².",
          voorbeelden: [{ type: "stap", tekst: "8×6 = 48 m². ×€12 = €576." }],
          basiskennis: [{ onderwerp: "48 × 12", uitleg: "48×12 = 48×10 + 48×2 = 480+96 = 576." }],
          niveaus: { basis: "€576. A.", simpeler: "Vloer = 8×6 = 48 m². Kosten = 48 × €12 = €576. = A.", nogSimpeler: "€576 = A." },
        },
      },
      {
        q: "Een driehoekige tuin **basis 10 m, hoogte 4 m**. Gras kost **€ 6/m²**. Kosten?",
        options: ["€ 120","€ 60","€ 240","€ 84"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer oppervlakte (10×4÷2=20). Dan × 6.","Te veel — heb je ÷ 2 vergeten?","Klopt niet."],
        uitlegPad: {
          stappen: [{ titel: "Driehoek + prijs", tekst: "Oppervlakte = (10×4)÷2 = 20 m². Kost = 20×€6 = €120." }],
          woorden: [{ woord: "graskosten", uitleg: "Oppervlakte (m²) × prijs per m²." }],
          theorie: "Driehoek-oppervlakte = (B×H)÷2. Dan × prijs.",
          voorbeelden: [{ type: "stap", tekst: "(10×4)÷2 = 20 m². 20×€6 = €120." }],
          basiskennis: [{ onderwerp: "÷2 niet vergeten", uitleg: "Zonder ÷2 = 40 m² → €240 (fout)." }],
          niveaus: { basis: "€120. A.", simpeler: "Driehoek = (10×4)÷2 = 20 m². Kosten = 20 × €6 = €120. = A.", nogSimpeler: "€120 = A." },
        },
      },
    ],
  },

  {
    title: "Cito-eindopdracht — vlakke figuren mix",
    explanation: "Mix-toets met omtrek + oppervlakte in Cito-stijl.\n\nVeel succes!",
    checks: [
      {
        q: "Vierkant zijde **9 m** — oppervlakte?",
        options: ["81 m²","36 m","36 m²","9 m²"],
        answer: 0,
        wrongHints: [null,"Dat is omtrek (4×9), eenheid ook fout.","Bijna — eenheid klopt maar getal is omtrek.","Te weinig — dat is alleen 1 zijde."],
        uitlegPad: {
          stappen: [{ titel: "Zijde × zijde", tekst: "Vierkant: oppervlakte = 9×9 = 81 m²." }],
          woorden: [{ woord: "vierkant-oppervlakte", uitleg: "Zijde × zijde (= zijde²)." }],
          theorie: "Vierkant: alle zijden gelijk → opp = zijde². 9² = 81.",
          voorbeelden: [{ type: "stap", tekst: "9×9 = 81 m²." }],
          basiskennis: [{ onderwerp: "Tafels", uitleg: "9×9 = 81 (uit tafels)." }],
          niveaus: { basis: "81 m². A.", simpeler: "Vierkant: opp = zijde × zijde = 9×9 = 81 m². = A.", nogSimpeler: "81 = A." },
        },
      },
      {
        q: "Rechthoek **20 × 5 m** — omtrek?",
        options: ["50 m","100 m","25 m","40 m"],
        answer: 0,
        wrongHints: [null,"Dat is oppervlakte (20×5).","Te weinig — heb je niet ALLE zijden geteld?","Te weinig — heb je 1 zijde overgeslagen?"],
        uitlegPad: {
          stappen: [{ titel: "2(L+B)", tekst: "2 × (20+5) = 2 × 25 = 50 m omtrek." }],
          woorden: [{ woord: "rechthoek-omtrek", uitleg: "2 × (lengte + breedte)." }],
          theorie: "Rechthoek: 2 lange + 2 korte zijden. Som = 2(L+B).",
          voorbeelden: [{ type: "stap", tekst: "2(20+5) = 2×25 = 50 m." }],
          basiskennis: [{ onderwerp: "Niet 100", uitleg: "100 = oppervlakte (20×5). Omtrek = 50." }],
          niveaus: { basis: "50 m. A.", simpeler: "Rechthoek-omtrek = 2×(20+5) = 2×25 = 50 m. = A.", nogSimpeler: "50 = A." },
        },
      },
      {
        q: "Driehoek **basis 14 cm, hoogte 6 cm** — oppervlakte?",
        options: ["42 cm²","84 cm²","20 cm²","40 cm"],
        answer: 0,
        wrongHints: [null,"Te veel — vergeet ÷ 2.","Te weinig — controleer 14×6÷2.","Eenheid en getal kloppen niet."],
        uitlegPad: {
          stappen: [{ titel: "B × H ÷ 2", tekst: "14 × 6 = 84. ÷2 = 42 cm²." }],
          woorden: [{ woord: "driehoek", uitleg: "(basis × hoogte) ÷ 2." }],
          theorie: "Tip: bij even getal eerst ÷2. 6÷2 = 3. 14×3 = 42.",
          voorbeelden: [{ type: "stap", tekst: "14×6÷2 = 14×3 = 42 cm²." }],
          basiskennis: [{ onderwerp: "Vergeet ÷2 niet", uitleg: "Zonder ÷2: 84 (fout). Driehoek = halve rechthoek." }],
          niveaus: { basis: "42 cm². A.", simpeler: "Driehoek = (14×6)÷2 = 84÷2 = 42 cm². = A.", nogSimpeler: "42 = A." },
        },
      },
      {
        q: "Een sportveld **40 × 25 m** — hoe lang lopen rondom?",
        options: ["130 m","65 m","1000 m","1000 m²"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is halve omtrek.","Dat is oppervlakte.","Verkeerde eenheid voor lengte."],
        uitlegPad: {
          stappen: [{ titel: "2(L+B)", tekst: "2 × (40+25) = 2 × 65 = 130 m." }],
          woorden: [{ woord: "rondom = omtrek", uitleg: "Lopen rondom veld = omtrek." }],
          theorie: "Rondom = omtrek = 2(L+B). 1000 m² = oppervlakte (verkeerd voor lengte).",
          voorbeelden: [{ type: "stap", tekst: "40+25=65 (halve omtrek). ×2 = 130 m." }],
          basiskennis: [{ onderwerp: "Eenheid m niet m²", uitleg: "Lengte = m. Vlak = m²." }],
          niveaus: { basis: "130 m. A.", simpeler: "Rondom = omtrek = 2×(40+25) = 130 m. = A.", nogSimpeler: "130 = A." },
        },
      },
      {
        q: "Een vloer **6 × 5 m** wordt geverfd. Verf voor **20 m² per liter**. Hoeveel **liter**?",
        options: ["1,5","2","3","30"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer 30 ÷ 20.","Te veel — heb je oppervlakte verkeerd?","Veel te veel — heb je niet door 20 gedeeld?"],
        uitlegPad: {
          stappen: [{ titel: "Opp ÷ dekking", tekst: "Vloer = 6×5 = 30 m². Verf: 30 ÷ 20 = 1,5 L." }],
          woorden: [{ woord: "verf-dekking", uitleg: "Aantal m² dat 1 liter verf bedekt." }],
          theorie: "2-stappen: 1) oppervlakte. 2) ÷ dekking per liter.",
          voorbeelden: [{ type: "stap", tekst: "6×5 = 30 m². 30÷20 = 1,5 L verf." }],
          basiskennis: [{ onderwerp: "Decimaal antwoord", uitleg: "30÷20 = 1,5 (niet rond getal — kun je gewoon 1,5L kopen)." }],
          niveaus: { basis: "1,5 L. A.", simpeler: "Vloer 6×5 = 30 m². 30 m² ÷ 20 m²/L = 1,5 L verf. = A.", nogSimpeler: "1,5 = A." },
        },
      },
      {
        q: "Een raam **120 cm × 80 cm**. Hoeveel **glas** in m²?",
        options: ["0,96 m²","9.600 m²","9.600 cm²","2 m²"],
        answer: 0,
        wrongHints: [null,"Klopt — 120×80 = 9.600 cm² = 0,96 m² (1 m² = 10.000 cm²).","Verkeerde eenheid — cm² getal correct maar gevraagd m².","Geen omrekening gedaan naar m².","Veel te ruw geschat."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: oppervlakte in cm²", tekst: "Raam-rechthoek: 120 × 80 = **9.600 cm²**." },
            { titel: "Stap 2: omrekenen naar m²", tekst: "1 m = 100 cm dus 1 m² = 100 × 100 = **10.000 cm²**. 9.600 ÷ 10.000 = **0,96 m²**." },
            { titel: "Cito-instinker: eenheid", tekst: "Lengte: 1 m = 100 cm. **Maar oppervlakte: 1 m² = 10.000 cm²**. Lees vraag goed — gevraagde eenheid is cruciaal." },
          ],
          woorden: [
            { woord: "m² ↔ cm²", uitleg: "1 m² = 10.000 cm². Niet 100 (dat is lengte). Twee keer 100." },
            { woord: "oppervlakte-omrekening", uitleg: "Lengte: ×/÷100. Oppervlakte: ×/÷10.000." },
          ],
          theorie: "Eenheids-omrekenen oppervlakte:\n• 1 m² = 10.000 cm² = 1.000.000 mm²\n• 1 ha (hectare) = 10.000 m²\n• 1 km² = 1.000.000 m² = 100 ha\n\nLengte ×100 → oppervlakte ×100×100 = ×10.000.",
          voorbeelden: [
            { type: "stap", tekst: "Tafel 1 m × 50 cm = 100 × 50 = 5.000 cm² = 0,5 m²." },
            { type: "stap", tekst: "Tuin 20 m × 15 m = 300 m² = 3.000.000 cm² = 0,03 ha." },
          ],
          basiskennis: [{ onderwerp: "Cito test omrekening", uitleg: "Cito test bijna altijd op eenheid bij oppervlakte-vragen. Lees of m² of cm² gevraagd." }],
          niveaus: { basis: "0,96 m². = A.", simpeler: "120 × 80 = 9.600 cm². 9.600 ÷ 10.000 = 0,96 m². = A.", nogSimpeler: "0,96 m² = A." },
        },
      },
      {
        q: "Een **L-vormig** terras: rechthoek 8 × 4 m + uitstekend stuk 3 × 2 m. **Totale oppervlakte**?",
        options: ["38 m²","32 m²","26 m²","48 m²"],
        answer: 0,
        wrongHints: [null,"Klopt — 32 + 6 = 38 m² (twee delen samen).","Klopt voor de grote rechthoek alleen — uitstekend stuk vergeten.","Niet beide vermenigvuldigd.","Te veel — geen overlap."],
        uitlegPad: {
          stappen: [
            { titel: "Splits in eenvoudige stukken", tekst: "L-vorm = optellen van twee rechthoeken.\n• Rechthoek 1: 8 × 4 = **32 m²**\n• Uitstekend stuk: 3 × 2 = **6 m²**" },
            { titel: "Tel op", tekst: "Totale oppervlakte = 32 + 6 = **38 m²**." },
            { titel: "Cito-truc: complexe vormen splitsen", tekst: "Bij L-vormen, T-vormen of trapjes-vormen: knip in **rechthoeken** waarvan je oppervlakte makkelijk weet. Tel ze op. Bij INGEVOEGDE vormen (gat erin): trek af.\nAltijd schets maken op kladpapier." },
          ],
          woorden: [
            { woord: "samengestelde vorm", uitleg: "Vorm die uit meerdere eenvoudige delen bestaat." },
            { woord: "splitsen", uitleg: "Complexe vorm uiteen in rechthoeken/driehoeken om oppervlakte te berekenen." },
          ],
          theorie: "Samengestelde-vorm-stappenplan:\n1. Teken vorm op kladpapier\n2. Knip in eenvoudige delen (rechthoeken, driehoeken)\n3. Bereken elk deel\n4. Tel op (als toegevoegd) of trek af (als gat)\n5. Eenheid checken",
          voorbeelden: [
            { type: "stap", tekst: "T-vorm: bovenkant 6×2 + onderkant 4×3 = 12+12 = 24 m²." },
            { type: "stap", tekst: "Rechthoek 10×5 met gat 3×2 = 50 − 6 = 44 m²." },
          ],
          basiskennis: [{ onderwerp: "Niet 1 grote vorm", uitleg: "Complexe vormen NIET als 1 grote rechthoek behandelen — splits altijd." }],
          niveaus: { basis: "32 + 6 = 38 m². = A.", simpeler: "Splits: groot stuk 8×4=32, uitstek 3×2=6. Samen 38 m². = A.", nogSimpeler: "38 m² = A." },
        },
      },
      {
        q: "Hoeveel **vierkante tegels van 30 cm** passen op een vloer van **3 m × 2,4 m**?",
        options: ["80","24","800","72"],
        answer: 0,
        wrongHints: [null,"Klopt — 3 m = 10 tegels, 2,4 m = 8 tegels. 10 × 8 = 80.","Te weinig — heb je niet 1 rij × 1 rij gerekend?","Veel te veel — je rekent oppervlakte in cm² niet in tegels.","Niet — controleer 10 × 8."],
        uitlegPad: {
          stappen: [
            { titel: "Aantal tegels per richting", tekst: "Tegel = 30 cm. Vloer 3 m = 300 cm → 300 ÷ 30 = **10 tegels lang**. Vloer 2,4 m = 240 cm → 240 ÷ 30 = **8 tegels breed**." },
            { titel: "Totaal tegels", tekst: "10 × 8 = **80 tegels** passen perfect (geen knippen nodig — gelukkig, want 3 m én 2,4 m zijn deelbaar door 30 cm)." },
            { titel: "Cito-truc: passend rekenen", tekst: "Bij 'hoeveel tegels?'-vragen: deel beide richtingen apart door tegel-afmeting. Reken in zelfde eenheid (cm). Vermenigvuldig de twee aantallen.\n\nAlternatieve methode via oppervlakte:\n• Vloer = 3 × 2,4 = 7,2 m²\n• Tegel = 0,3 × 0,3 = 0,09 m²\n• Tegels: 7,2 ÷ 0,09 = 80 ✓" },
          ],
          woorden: [
            { woord: "passen / dekken", uitleg: "Hoeveel kleine vormen samen 1 grote dekken." },
            { woord: "deelbaar", uitleg: "Past zonder rest in/op andere afmeting." },
          ],
          theorie: "Twee methodes voor tegel-/vloer-vragen:\n• **Per richting**: deel lengte ÷ tegel-zijde, en breedte ÷ tegel-zijde. Vermenigvuldig.\n• **Via oppervlakte**: vloer-oppervlakte ÷ tegel-oppervlakte.\nBeide geven hetzelfde — kies wat makkelijker is.",
          voorbeelden: [
            { type: "stap", tekst: "Vloer 4 × 5 m, tegels 1 m: 4 × 5 = 20 tegels." },
            { type: "stap", tekst: "Vloer 6 × 4 m, tegels 50 cm: 12 × 8 = 96 tegels." },
          ],
          basiskennis: [{ onderwerp: "Eenheid uniform", uitleg: "Altijd alle afmetingen in zelfde eenheid (cm OF m), niet mixen." }],
          niveaus: { basis: "10 × 8 = 80 tegels. = A.", simpeler: "Vloer 3 m = 10 tegels, 2,4 m = 8 tegels. 10 × 8 = 80. = A.", nogSimpeler: "80 = A." },
        },
      },
      { q: "Vierkant met zijde 7 cm. Omtrek?", options: ["28 cm","14 cm","49 cm","21 cm"], answer: 0, wrongHints: [null,"Klopt — 4 × 7 = 28.","Niet — 4 zijden.","Dat is oppervlakte.","3 zijden gerekend."] },
      { q: "Vierkant zijde 7 cm. Oppervlakte?", options: ["49 cm²","28 cm²","14 cm²","21 cm²"], answer: 0, wrongHints: [null,"Klopt — 7 × 7 = 49.","Dat is omtrek.","Te laag.","Te laag."] },
      { q: "Rechthoek 8 × 5 cm. Oppervlakte?", options: ["40 cm²","26 cm²","13 cm²","45 cm²"], answer: 0, wrongHints: [null,"Klopt — 8 × 5 = 40.","Dat is omtrek.","Niet.","Te hoog."] },
      { q: "Driehoek basis 6, hoogte 4. Oppervlakte?", options: ["12","24","10","8"], answer: 0, wrongHints: [null,"Klopt — (6×4)/2 = 12.","Vergeet niet ÷2.","Niet — basis × hoogte, geen optellen.","Niet."] },
      { q: "Rechthoek 10 × 4 m. Omtrek?", options: ["28 m","40 m","20 m","14 m"], answer: 0, wrongHints: [null,"Klopt — 2×(10+4) = 28.","Dat is oppervlakte.","Maar 2 zijden meegenomen.","Niet — 4 zijden."] },
      { q: "Eenheid van oppervlakte is?", options: ["m² of cm²","m","cm","kg"], answer: 0, wrongHints: [null,"Klopt — kwadraat.","Lengte.","Lengte.","Gewicht."] },
      { q: "Eenheid van omtrek is?", options: ["m of cm","m² of cm²","kg","L"], answer: 0, wrongHints: [null,"Klopt — afstand.","Oppervlakte.","Gewicht.","Inhoud."] },
      { q: "Hoeveel **hoeken** heeft een rechthoek?", options: ["4","3","5","6"], answer: 0, wrongHints: [null,"Klopt — vier rechte hoeken.","Driehoek.","Vijfhoek.","Zeshoek."] },
      { q: "Hoeveel **gelijke zijden** heeft een vierkant?", options: ["4","2","3","1"], answer: 0, wrongHints: [null,"Klopt.","Niet.","Niet.","Niet."] },
      { q: "Omtrek van driehoek met zijden 3, 4, 5?", options: ["12","60","11","9"], answer: 0, wrongHints: [null,"Klopt — som.","Niet — som, geen ×.","Niet.","Niet."] },
      { q: "Oppervlakte vierkant 5 m bij 5 m?", options: ["25 m²","20 m²","10 m²","100 m²"], answer: 0, wrongHints: [null,"Klopt — 5×5.","Omtrek.","Niet.","Niet."] },
      { q: "Tegel 50 cm × 50 cm. Oppervlakte?", options: ["2500 cm² (= 0,25 m²)","100 cm²","250 cm²","1 m²"], answer: 0, wrongHints: [null,"Klopt — 50×50.","Niet.","Niet.","Te veel."] },
      { q: "Een **cirkel** heeft hoeveel zijden?", options: ["0 (één gebogen lijn)","1","2","4"], answer: 0, wrongHints: [null,"Klopt — geen rechte zijden.","Bijna — de lijn is 1 rondgaand.","Niet.","Niet."] },
      { q: "Een **gelijkzijdige** driehoek heeft hoe veel gelijke zijden?", options: ["3","2","1","0"], answer: 0, wrongHints: [null,"Klopt.","Dat is gelijkbenig.","Niet.","Niet."] },
      { q: "Een **rechte hoek** = hoeveel graden?", options: ["90°","45°","180°","360°"], answer: 0, wrongHints: [null,"Klopt — kwart cirkel.","Halve rechte.","Gestrekt.","Volle cirkel."] },
      { q: "Som van 3 hoeken in een driehoek?", options: ["180°","90°","360°","270°"], answer: 0, wrongHints: [null,"Klopt — vaste regel.","Eén hoek.","Cirkel.","Niet."] },
      { q: "Som van 4 hoeken in een vierhoek?", options: ["360°","180°","270°","90°"], answer: 0, wrongHints: [null,"Klopt.","Driehoek.","Niet.","Eén hoek."] },
      { q: "**Tegels** 1 m × 1 m. Vloer 3 × 4 m. Hoeveel tegels?", options: ["12","7","4","16"], answer: 0, wrongHints: [null,"Klopt — 3×4.","Niet — niet som.","Niet.","Te veel."] },
      { q: "Een **vierhoek** met 2 paar parallelle zijden = ?", options: ["Parallellogram","Cirkel","Driehoek","Vierkant"], answer: 0, wrongHints: [null,"Klopt — vierkant is speciaal geval.","Geen hoeken.","Geen vier zijden.","Wel maar specifieker."] },
      { q: "**Symmetrie-as** van een vierkant?", options: ["4 assen","2 assen","1 as","Geen"], answer: 0, wrongHints: [null,"Klopt — horizontaal, verticaal, 2 diagonalen.","Te weinig.","Te weinig.","Wel symmetrisch."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const vlakkeFigurenPo = {
  id: "vlakke-figuren-po",
  title: "Vlakke figuren — Cito groep 5-8",
  emoji: "⬜",
  level: "groep5-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Meten en meetkunde — omtrek en oppervlakte",
  prerequisites: [
    { id: "meetkunde-bouwsels", title: "Meetkunde — volume + bouwsels", niveau: "po-1F" },
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
  intro:
    "Omtrek en oppervlakte voor groep 5-8: vierkant, rechthoek, driehoek (basis × hoogte ÷ 2), praktijksommen met hek/verf/gras/tegels. ~12 min.",
  triggerKeywords: [
    "omtrek","oppervlakte","vierkant","rechthoek","driehoek",
    "basis","hoogte","tegels","gras","hek","vloer","m²",
  ],
  chapters,
  steps,
};

export default vlakkeFigurenPo;
