// Leerpad: Vlakke figuren (omtrek + oppervlakte) — voor groep 5-8
// 5 stappen. Doorstroomtoets-stijl praktijksommen.
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
  { letter: "C", title: "Praktijk + Eindopdracht", emoji: "🏆", from: 3, to: 4 },
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
    explanation: "Twee belangrijke maten van een figuur:\n\n• **Omtrek** = de **lengte** rondom het figuur. Stel je een hek om de tuin voor — hoe lang is dat hek? *Eenheid: m, cm, km*.\n• **Oppervlakte** = hoeveel **plek** het figuur inneemt. Stel je gras op de tuin — hoeveel m² gras? *Eenheid: m², cm², km².*\n\n**Verschil makkelijk**:\n• Omtrek meet je in **meters** (1 dimensie — lengte).\n• Oppervlakte meet je in **vierkante meters** (2 dimensies — lengte × breedte).\n\n**Vierkant** *(alle 4 zijden gelijk)*:\n• Omtrek = **4 × zijde**.\n• Oppervlakte = **zijde × zijde** *(of zijde²)*.\n\nVoorbeeld: vierkant van 5 m.\n• Omtrek = 4 × 5 = **20 m**.\n• Oppervlakte = 5 × 5 = **25 m²**.\n\n**Rechthoek** *(2 zijden lang, 2 zijden breed)*:\n• Omtrek = **2 × (lengte + breedte)**.\n• Oppervlakte = **lengte × breedte**.\n\nVoorbeeld: rechthoek 6 m × 4 m.\n• Omtrek = 2 × (6 + 4) = 2 × 10 = **20 m**.\n• Oppervlakte = 6 × 4 = **24 m²**.\n\n**Toets-tip**:\nLet altijd op de **eenheid**! 'Meter' bij omtrek, '**vierkante meter (m²)**' bij oppervlakte.",
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
          niveaus: { basis: "28 m.", simpeler: "Vierkant = 4 gelijke zijden. Omtrek = 4 × 7 = 28 m.", nogSimpeler: "28" },
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
          niveaus: { basis: "40 m².", simpeler: "Oppervlakte = L × B = 10 × 4 = 40. Eenheid: m² (oppervlakte).", nogSimpeler: "40 m²" },
        },
      },
      {
        q: "Vierkant met **omtrek 20 cm** — wat is de **zijde**?",
        options: ["5 cm","10 cm","4 cm","20 cm"],
        answer: 0,
        wrongHints: [null,"Te veel — een vierkant heeft vier gelijke zijden. Deel de omtrek door vier.","Te weinig — controleer of vier keer dit getal inderdaad twintig geeft.","Dat is omtrek zelf."],
        uitlegPad: {
          stappen: [{ titel: "Omtrek ÷ 4", tekst: "Vierkant: 4 zijden. Omtrek÷4 = zijde. 20÷4 = 5 cm." }],
          woorden: [{ woord: "andersom rekenen", uitleg: "Wanneer omtrek bekend, gebruik formule omgekeerd: zijde = omtrek÷4." }],
          theorie: "Omkeerformule vierkant: zijde = omtrek ÷ 4.",
          voorbeelden: [{ type: "stap", tekst: "Omtrek 20 → zijde = 20÷4 = 5 cm. Check: 4×5 = 20 ✓." }],
          basiskennis: [{ onderwerp: "Tafel van 4", tekst: "20÷4 = 5 (uit tafel: 4×5=20)." }],
          niveaus: { basis: "5 cm.", simpeler: "Vierkant heeft 4 gelijke zijden. Omtrek 20 ÷ 4 zijden = 5 cm per zijde.", nogSimpeler: "5" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een vierkant heeft zijden van **8 cm**. Wat is de **oppervlakte**?",
        options: ["64 cm²", "32 cm²", "16 cm²", "64 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is 4 × 8 — is dat de rand of het vlak?",
          null,
          "Kijk goed naar de eenheid bij oppervlakte.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zijde × zijde",
              tekst: "Oppervlakte vierkant = zijde × zijde = 8 × 8 = 64 cm².",
            },
          ],
          woorden: [
            {
              woord: "oppervlakte",
              uitleg: "Hoeveel plek een figuur inneemt. Eenheid: cm², m².",
            },
          ],
          theorie: "Vierkant: oppervlakte = zijde × zijde. Omtrek = 4 × zijde.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "8 × 8 = 64 cm². (4 × 8 = 32 cm is de omtrek.)",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eenheid",
              uitleg: "Oppervlakte in cm² (vierkante centimeter), omtrek in cm.",
            },
          ],
          niveaus: {
            basis: "64 cm².",
            simpeler: "Vierkant: zijde × zijde = 8 × 8 = 64 cm².",
            nogSimpeler: "64",
          },
        },
      },
      {
        q: "Een rechthoek is **9 m** lang en **3 m** breed. Wat is de **omtrek**?",
        options: ["24 m", "27 m", "12 m", "21 m"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is 9 × 3 — zo reken je de oppervlakte uit.",
          "Je hebt nu maar 2 zijden opgeteld. Een rechthoek heeft er 4.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "2 × (lengte + breedte)",
              tekst: "Omtrek = 2 × (9 + 3) = 2 × 12 = 24 m.",
            },
          ],
          woorden: [
            {
              woord: "omtrek rechthoek",
              uitleg: "2 × (lengte + breedte): je telt alle 4 zijden op.",
            },
          ],
          theorie: "Rechthoek: omtrek = 2 × (lengte + breedte). Oppervlakte = lengte × breedte.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "9 + 3 + 9 + 3 = 24 m.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alle 4 zijden",
              uitleg: "Een rechthoek heeft 2 lange en 2 korte zijden. Tel ze alle 4 op.",
            },
          ],
          niveaus: {
            basis: "24 m.",
            simpeler: "Tel alle zijden op: 9 + 3 + 9 + 3 = 24 m.",
            nogSimpeler: "24",
          },
        },
      },
      {
        q: "Een rechthoek is **7 cm** lang en **2 cm** breed. Wat is de **oppervlakte**?",
        options: ["14 cm²", "18 cm²", "9 cm²", "49 cm²"],
        answer: 0,
        wrongHints: [null, "Dat is de omtrek: alle zijden opgeteld.", "Bij oppervlakte tel je niet op.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Lengte × breedte",
              tekst: "Oppervlakte = 7 × 2 = 14 cm².",
            },
          ],
          woorden: [
            {
              woord: "oppervlakte rechthoek",
              uitleg: "Lengte × breedte. Eenheid: cm² of m².",
            },
          ],
          theorie: "Rechthoek: oppervlakte = lengte × breedte.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "7 × 2 = 14 cm². (2 × (7 + 2) = 18 cm is de omtrek.)",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet optellen",
              uitleg: "Bij oppervlakte vermenigvuldig je lengte en breedte.",
            },
          ],
          niveaus: {
            basis: "14 cm².",
            simpeler: "Oppervlakte = lengte × breedte = 7 × 2 = 14 cm².",
            nogSimpeler: "14",
          },
        },
      },
      {
        q: "Een vierkant heeft zijden van **3 m**. Welke zin klopt?",
        options: [
          "De omtrek is 12 m en de oppervlakte is 9 m²",
          "De omtrek is 9 m en de oppervlakte is 12 m²",
          "De omtrek is 12 m² en de oppervlakte is 9 m",
          "De omtrek is 6 m en de oppervlakte is 9 m²",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Welke van de twee reken je uit met 4 × zijde?",
          null,
          "Hoeveel zijden heeft een vierkant?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Twee maten",
              tekst: "Omtrek = 4 × 3 = 12 m. Oppervlakte = 3 × 3 = 9 m².",
            },
          ],
          woorden: [
            {
              woord: "eenheid",
              uitleg: "Omtrek in m, oppervlakte in m².",
            },
          ],
          theorie: "Vierkant: omtrek = 4 × zijde, oppervlakte = zijde × zijde.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 × 3 = 12 m (rand). 3 × 3 = 9 m² (vlak).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Let op de eenheid",
              uitleg: "Omtrek krijgt m, oppervlakte krijgt m².",
            },
          ],
          niveaus: {
            basis: "Omtrek 12 m, oppervlakte 9 m².",
            simpeler: "Omtrek: 4 × 3 = 12 m. Oppervlakte: 3 × 3 = 9 m².",
            nogSimpeler: "12 m en 9 m²",
          },
        },
      },
      {
        q: "Met welke som reken je de **omtrek** van een **rechthoek** uit?",
        options: ["2 × (lengte + breedte)", "lengte × breedte", "lengte + breedte", "4 × lengte"],
        answer: 0,
        wrongHints: [
          null,
          "Zo reken je hoeveel plek de rechthoek inneemt.",
          "Dan heb je nog niet alle zijden geteld.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Alle zijden",
              tekst: "Een rechthoek heeft 2 lange en 2 korte zijden. Omtrek = 2 × (lengte + breedte).",
            },
          ],
          woorden: [
            {
              woord: "omtrek",
              uitleg: "Lengte rondom het figuur.",
            },
          ],
          theorie: "Rechthoek: omtrek = 2 × (lengte + breedte). Oppervlakte = lengte × breedte.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Rechthoek 5 × 2: omtrek = 2 × (5 + 2) = 14.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lengte + breedte",
              uitleg: "Lengte + breedte is maar de helft van de rand.",
            },
          ],
          niveaus: {
            basis: "2 × (lengte + breedte).",
            simpeler: "Tel lengte en breedte op en doe dat keer 2, want elke zijde komt 2 keer voor.",
            nogSimpeler: "2 × (l + b)",
          },
        },
      },
      {
        q: "Figuur A is een rechthoek van **7 m × 1 m**. Figuur B is een vierkant met zijden van **4 m**. Wat klopt?",
        options: [
          "Ze hebben dezelfde omtrek, maar B heeft een grotere oppervlakte",
          "Ze hebben dezelfde oppervlakte, maar A heeft een grotere omtrek",
          "A heeft een grotere omtrek en een grotere oppervlakte",
          "Ze hebben dezelfde omtrek en dezelfde oppervlakte",
        ],
        answer: 0,
        wrongHints: [null, "Reken van allebei eerst de omtrek uit, en daarna de oppervlakte.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Allebei uitrekenen",
              tekst: "A: omtrek 2 × (7 + 1) = 16 m, oppervlakte 7 × 1 = 7 m². B: omtrek 4 × 4 = 16 m, oppervlakte 4 × 4 = 16 m².",
            },
          ],
          woorden: [
            {
              woord: "vergelijken",
              uitleg: "Reken van elk figuur dezelfde maat uit en zet ze naast elkaar.",
            },
          ],
          theorie: "Dezelfde omtrek betekent niet dezelfde oppervlakte.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Omtrek: 16 m en 16 m (gelijk). Oppervlakte: 7 m² en 16 m² (B groter).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Omtrek ≠ oppervlakte",
              uitleg: "Twee figuren met even lange randen kunnen toch verschillend veel plek innemen.",
            },
          ],
          niveaus: {
            basis: "Zelfde omtrek, B grotere oppervlakte.",
            simpeler: "Allebei omtrek 16 m. Oppervlakte A = 7 m², B = 16 m².",
            nogSimpeler: "B is groter",
          },
        },
      },
    ],
  },

  {
    title: "Praktijk — vierkant en rechthoek",
    explanation: "Praktijk-sommen waar je omtrek en oppervlakte gebruikt:\n\n**Voorbeeld 1 — hek om tuin**:\n*'Een tuin is 12 m × 8 m. Hoeveel meter hek heb je nodig?'*\n• Hek = **omtrek** = 2 × (12 + 8) = **40 m**.\n\n**Voorbeeld 2 — gras zaaien**:\n*'Een grasveld 15 m × 10 m. Hoeveel m² gras nodig?'*\n• Gras = **oppervlakte** = 15 × 10 = **150 m²**.\n\n**Voorbeeld 3 — rand om foto**:\n*'Een foto 20 cm × 15 cm wordt omlijnd. Hoeveel cm lijst nodig?'*\n• Lijst = **omtrek** = 2 × (20 + 15) = **70 cm**.\n\n**Voorbeeld 4 — tegels**:\n*'Een vloer 6 m × 4 m wordt betegeld met tegels van 50 × 50 cm. Hoeveel tegels nodig?'*\n• Vloer = 6 × 4 = 24 m² = 240.000 cm².\n• Tegel = 50 × 50 = 2.500 cm².\n• Aantal: 240.000 ÷ 2.500 = **96 tegels**.\n\n**toetsvraag — kies juiste maat**:\n• 'Hek', 'lijst', 'rand' → **omtrek**.\n• 'Gras', 'tegels', 'verf', 'tapijt' → **oppervlakte**.\n\n**Veel-voorkomende fout**:\nOmtrek en oppervlakte verwarren. Vraag: meet je *langs de rand* (omtrek) of *over het hele vlak* (oppervlakte)?",
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
          niveaus: { basis: "60 m.", simpeler: "Hek = omtrek. Omtrek = 2×(18+12) = 2×30 = 60 m.", nogSimpeler: "60" },
        },
      },
      {
        q: "Een **kamer 5 × 4 m** krijgt een nieuwe vloer. Hoeveel **m² vloer**?",
        options: ["20 m²","18 m","9 m","20 m"],
        answer: 0,
        wrongHints: [null,"Dat is omtrek, niet oppervlakte.","Klopt niet — onjuiste eenheid en getal.","Klopt qua getal maar oppervlakte = m²."],
        uitlegPad: {
          stappen: [{ titel: "Vloer = oppervlakte", tekst: "Vloer = vlak = oppervlakte. 5×4 = 20 m²." }],
          woorden: [{ woord: "vloer", uitleg: "Het hele vlak = oppervlakte. Eenheid m²." }],
          theorie: "Praktijk-truc: 'vloer/gras/verf/tegels' = oppervlakte. Rechthoek = L×B.",
          voorbeelden: [{ type: "stap", tekst: "5×4 = 20 m² vloer (oppervlakte)." }],
          basiskennis: [{ onderwerp: "Eenheid", uitleg: "Oppervlakte ALTIJD m². 'm' zonder ² = lengte (omtrek)." }],
          niveaus: { basis: "20 m².", simpeler: "Vloer = oppervlakte = L×B = 5×4 = 20 m² (let op eenheid m²).", nogSimpeler: "20 m²" },
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
          niveaus: { basis: "24 m.", simpeler: "Vierkant 4 × zijde = 4×6 = 24 m omtrek.", nogSimpeler: "24" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Bij welke klus moet je de **omtrek** weten?",
        options: [
          "Een rand van lint om een prikbord plakken",
          "Tapijt leggen in een kamer",
          "Een muur verven",
          "Een veld met gras inzaaien",
        ],
        answer: 0,
        wrongHints: [null, "Ga je dan langs de rand, of over het hele vlak?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Rand of vlak?",
              tekst: "Lint gaat langs de rand van het prikbord = omtrek. Tapijt, verf en gras gaan over het hele vlak = oppervlakte.",
            },
          ],
          woorden: [
            {
              woord: "rand",
              uitleg: "De buitenkant van een figuur. Langs de rand = omtrek.",
            },
          ],
          theorie: "'Hek', 'lijst', 'rand' → omtrek. 'Gras', 'tegels', 'verf', 'tapijt' → oppervlakte.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Lint om het prikbord = langs de rand = omtrek.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Langs de rand",
              uitleg: "Meet je langs de rand? Dan is het omtrek.",
            },
          ],
          niveaus: {
            basis: "Een rand van lint om een prikbord.",
            simpeler: "Lint gaat rondom, langs de rand. Dat is omtrek.",
            nogSimpeler: "Lint",
          },
        },
      },
      {
        q: "Een grasveld is **9 m** lang en **7 m** breed. Hoeveel m² **graszoden** heb je nodig?",
        options: ["63 m²", "32 m", "16 m²", "72 m²"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de lengte van de rand. Gras ligt op het hele veld.",
          "Bij oppervlakte tel je niet op.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Gras = oppervlakte",
              tekst: "Graszoden liggen op het hele veld = oppervlakte = 9 × 7 = 63 m².",
            },
          ],
          woorden: [
            {
              woord: "graszoden",
              uitleg: "Stukken gras die je neerlegt. Je rekent ze in m².",
            },
          ],
          theorie: "Gras → oppervlakte = lengte × breedte.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "9 × 7 = 63 m².",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet de omtrek",
              uitleg: "2 × (9 + 7) = 32 m is de rand, niet het vlak.",
            },
          ],
          niveaus: {
            basis: "63 m².",
            simpeler: "Gras = oppervlakte = 9 × 7 = 63 m².",
            nogSimpeler: "63",
          },
        },
      },
      {
        q: "Een foto is **30 cm × 20 cm**. Er komt een lijst **rondom**. Hoeveel cm lijst heb je nodig?",
        options: ["100 cm", "600 cm", "50 cm", "80 cm"],
        answer: 0,
        wrongHints: [null, "Dat is de oppervlakte van de foto.", "Dat is maar de helft van de rand.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Lijst = omtrek",
              tekst: "Lijst gaat rondom = omtrek = 2 × (30 + 20) = 2 × 50 = 100 cm.",
            },
          ],
          woorden: [
            {
              woord: "lijst",
              uitleg: "Rand om een foto. Je meet langs de rand = omtrek.",
            },
          ],
          theorie: "'Rondom' = omtrek. Rechthoek: 2 × (lengte + breedte).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "30 + 20 + 30 + 20 = 100 cm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alle 4 zijden",
              uitleg: "Een lijst gaat langs alle 4 de zijden.",
            },
          ],
          niveaus: {
            basis: "100 cm.",
            simpeler: "Lijst = omtrek = 2 × (30 + 20) = 100 cm.",
            nogSimpeler: "100",
          },
        },
      },
      {
        q: "Een **vierkant** tafelblad heeft zijden van **80 cm**. Je plakt tape langs **alle zijden**. Hoeveel cm tape heb je nodig?",
        options: ["320 cm", "160 cm", "240 cm", "6400 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel zijden heeft een vierkant?",
          null,
          "Tape gaat langs de rand, niet over het vlak.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "4 × zijde",
              tekst: "Tape langs alle zijden = omtrek = 4 × 80 = 320 cm.",
            },
          ],
          woorden: [
            {
              woord: "vierkant",
              uitleg: "4 gelijke zijden.",
            },
          ],
          theorie: "Vierkant: omtrek = 4 × zijde.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "80 + 80 + 80 + 80 = 320 cm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Rand, geen vlak",
              uitleg: "80 × 80 is de oppervlakte. Tape meet je in cm.",
            },
          ],
          niveaus: {
            basis: "320 cm.",
            simpeler: "Vierkant heeft 4 zijden van 80 cm: 4 × 80 = 320 cm.",
            nogSimpeler: "320",
          },
        },
      },
      {
        q: "Een gang is **4 m** lang en **1 m** breed. Je legt tegels van **50 cm × 50 cm**. Hoeveel tegels heb je nodig?",
        options: ["16", "8", "4", "10"],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel tegels passen er naast elkaar in de breedte?",
          null,
          "Tegels liggen op het hele vlak. Heb je de rand uitgerekend?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Per richting tellen",
              tekst: "Lengte 4 m = 400 cm → 400 ÷ 50 = 8 tegels. Breedte 1 m = 100 cm → 100 ÷ 50 = 2 tegels. 8 × 2 = 16 tegels.",
            },
          ],
          woorden: [
            {
              woord: "tegel van 50 cm",
              uitleg: "Een vierkante tegel met zijden van een halve meter.",
            },
          ],
          theorie: "Tegels = oppervlakte. Reken eerst om naar cm en tel per richting hoeveel tegels passen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Gang 400 cm × 100 cm. 8 tegels lang, 2 tegels breed: 8 × 2 = 16.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Andere manier",
              uitleg: "Gang = 4 m² = 40.000 cm². Tegel = 2.500 cm². 40.000 ÷ 2.500 = 16.",
            },
          ],
          niveaus: {
            basis: "16 tegels.",
            simpeler: "In de lengte passen 8 tegels, in de breedte 2. 8 × 2 = 16.",
            nogSimpeler: "16",
          },
        },
      },
      {
        q: "Rondom een speelveld van **25 m × 16 m** kalkt de meester een witte lijn. Hoe lang is die lijn?",
        options: ["82 m", "400 m", "41 m", "66 m"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is hoeveel plek het veld inneemt. Een lijn rondom meet je in meters.",
          "Heb je alle 4 de zijden meegeteld?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Rondom = omtrek",
              tekst: "Omtrek = 2 × (25 + 16) = 2 × 41 = 82 m.",
            },
          ],
          woorden: [
            {
              woord: "kalken",
              uitleg: "Een witte lijn op het gras zetten.",
            },
          ],
          theorie: "'Rondom' = omtrek = 2 × (lengte + breedte).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "25 + 16 + 25 + 16 = 82 m.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet de oppervlakte",
              uitleg: "25 × 16 = 400 m² is het vlak, niet de rand.",
            },
          ],
          niveaus: {
            basis: "82 m.",
            simpeler: "Lijn rondom = omtrek = 2 × (25 + 16) = 82 m.",
            nogSimpeler: "82",
          },
        },
      },
    ],
  },

  {
    title: "Driehoek — basis × hoogte ÷ 2",
    explanation: "Een **driehoek** heeft 3 zijden. De omtrek is gewoon de som van alle 3 zijden. Maar de **oppervlakte** is bijzonder.\n\n**Formule**:\n• Oppervlakte driehoek = **(basis × hoogte) ÷ 2**.\n\n**Belangrijk**: 'hoogte' is **NIET** een schuine zijde. Het is de **loodrechte** afstand van de top naar de basis (recht omhoog).\n\n**Voorbeeld**: driehoek met basis 8 m en hoogte 5 m.\n• Oppervlakte = (8 × 5) ÷ 2 = 40 ÷ 2 = **20 m²**.\n\n**Waarom delen door 2?**\nOmdat een driehoek **half** een rechthoek is. Neem een rechthoek 8 × 5 m → oppervlakte 40 m². Snijd diagonaal door = 2 driehoeken van 20 m² elk.\n\n**Toets-truc**:\n• Eerst basis × hoogte → dan ÷ 2.\n• Of eerst ÷ 2 → dan vermenigvuldigen *(als één van beide getallen even is, scheelt fouten)*.\n\n**Voorbeeld**: basis 10, hoogte 6.\n• 10 × 6 = 60. ÷ 2 = **30 m²**.\n• Of: 10 × 6 ÷ 2 = 10 × 3 = **30 m²**.\n\n**Veel-voorkomende fout**:\n'Hoogte' verwarren met een zijde. **Hoogte = loodrecht** vanaf de top naar de basis. In een schuine driehoek is dat een **gestippelde lijn**, niet een echte zijde.",
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
          niveaus: { basis: "48 m².", simpeler: "Driehoek = (basis × hoogte) ÷ 2 = (12×8)÷2 = 96÷2 = 48 m².", nogSimpeler: "48" },
        },
      },
      {
        q: "Driehoek met **basis 5 cm, hoogte 4 cm** — oppervlakte?",
        options: ["10 cm²","20 cm²","9 cm²","40 cm²"],
        answer: 0,
        wrongHints: [null,"Te veel — vergeet ÷ 2.","Niet optellen — vermenigvuldigen.","Veel te veel."],
        uitlegPad: {
          stappen: [{ titel: "B × H ÷ 2", tekst: "5 × 4 = 20. ÷2 = 10 cm²." }],
          woorden: [{ woord: "driehoek-oppervlakte", uitleg: "(basis × hoogte) ÷ 2." }],
          theorie: "Bij even getal: kun je eerst ÷2, dan vermenigvuldigen. 4÷2=2. 5×2=10.",
          voorbeelden: [{ type: "stap", tekst: "5×4÷2 = 5×2 = 10 cm²." }],
          basiskennis: [{ onderwerp: "Hoogte loodrecht", uitleg: "Hoogte = recht naar boven, niet schuine zijde." }],
          niveaus: { basis: "10 cm².", simpeler: "(5×4)÷2 = 20÷2 = 10 cm².", nogSimpeler: "10" },
        },
      },
      {
        q: "Een driehoekig tuintje met basis **6 m**, hoogte **9 m**. Hoeveel **m² gras**?",
        options: ["27 m²","54 m²","15 m²","18 m²"],
        answer: 0,
        wrongHints: [null,"Te veel — vergeet ÷ 2.","Te weinig — heb je optellen gedaan?","Te weinig — controleer 6×9÷2."],
        uitlegPad: {
          stappen: [{ titel: "B × H ÷ 2", tekst: "6 × 9 = 54. ÷2 = 27 m² gras." }],
          woorden: [{ woord: "gras = oppervlakte", uitleg: "Hele vlak = oppervlakte (m²)." }],
          theorie: "Driehoek-oppervlakte: ALTIJD ÷ 2 op het einde.",
          voorbeelden: [{ type: "stap", tekst: "6×9=54. 54÷2=27. Of: 6÷2=3, 3×9=27." }],
          basiskennis: [{ onderwerp: "Even getal eerst ÷2", uitleg: "6 is even → 6÷2=3 → 3×9=27. Voorkomt grote getallen." }],
          niveaus: { basis: "27 m².", simpeler: "Driehoek = (6×9)÷2 = 54÷2 = 27 m² gras.", nogSimpeler: "27" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een driehoek heeft een **basis van 4 m** en een **hoogte van 3 m**. Wat is de **oppervlakte**?",
        options: ["6 m²", "12 m²", "7 m²", "24 m²"],
        answer: 0,
        wrongHints: [
          null,
          "Basis × hoogte is goed begonnen. Wat moet er daarna nog?",
          "Bij oppervlakte tel je niet op.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "B × H ÷ 2",
              tekst: "4 × 3 = 12. 12 ÷ 2 = 6 m².",
            },
          ],
          woorden: [
            {
              woord: "driehoek-formule",
              uitleg: "Oppervlakte = (basis × hoogte) ÷ 2.",
            },
          ],
          theorie: "Driehoek = halve rechthoek. Daarom ÷ 2.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 × 3 = 12. 12 ÷ 2 = 6 m².",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vergeet ÷2 niet",
              uitleg: "12 m² is de rechthoek met dezelfde maten. De driehoek is de helft.",
            },
          ],
          niveaus: {
            basis: "6 m².",
            simpeler: "(4 × 3) ÷ 2 = 12 ÷ 2 = 6 m².",
            nogSimpeler: "6",
          },
        },
      },
      {
        q: "Een driehoek heeft een **basis van 7 cm** en een **hoogte van 2 cm**. Wat is de **oppervlakte**?",
        options: ["7 cm²", "14 cm²", "9 cm²", "3,5 cm²"],
        answer: 0,
        wrongHints: [null, "Vergeet niet te delen door 2.", null, "Heb je twee keer door 2 gedeeld?"],
        uitlegPad: {
          stappen: [
            {
              titel: "B × H ÷ 2",
              tekst: "7 × 2 = 14. 14 ÷ 2 = 7 cm².",
            },
          ],
          woorden: [
            {
              woord: "basis",
              uitleg: "De onderste zijde van de driehoek.",
            },
          ],
          theorie: "Oppervlakte driehoek = (basis × hoogte) ÷ 2.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Handig: eerst 2 ÷ 2 = 1, dan 7 × 1 = 7 cm².",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Slim rekenen",
              uitleg: "Is één getal even? Deel dat eerst door 2.",
            },
          ],
          niveaus: {
            basis: "7 cm².",
            simpeler: "(7 × 2) ÷ 2 = 14 ÷ 2 = 7 cm².",
            nogSimpeler: "7",
          },
        },
      },
      {
        q: "Waarom deel je bij de **oppervlakte van een driehoek** door 2?",
        options: [
          "Een driehoek is de helft van een rechthoek",
          "Een driehoek heeft twee schuine zijden",
          "Een driehoek heeft drie hoeken",
          "De basis telt maar half mee",
        ],
        answer: 0,
        wrongHints: [null, "Denk aan een rechthoek die je van hoek tot hoek doorknipt.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Halve rechthoek",
              tekst: "Knip een rechthoek van hoek tot hoek door. Je krijgt 2 gelijke driehoeken. Elke driehoek is de helft.",
            },
          ],
          woorden: [
            {
              woord: "diagonaal",
              uitleg: "Lijn van de ene hoek naar de hoek er schuin tegenover.",
            },
          ],
          theorie: "Driehoek = halve rechthoek. Daarom (basis × hoogte) ÷ 2.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Rechthoek 6 × 4 = 24. Doormidden = 2 driehoeken van 12.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Formule",
              uitleg: "Oppervlakte = (basis × hoogte) ÷ 2.",
            },
          ],
          niveaus: {
            basis: "Een driehoek is de helft van een rechthoek.",
            simpeler: "Knip een rechthoek schuin door: twee driehoeken, elk de helft.",
            nogSimpeler: "Helft",
          },
        },
      },
      {
        q: "Een driehoek heeft zijden van **6 cm**, **7 cm** en **8 cm**. Wat is de **omtrek**?",
        options: ["21 cm", "15 cm", "42 cm", "336 cm"],
        answer: 0,
        wrongHints: [null, "Heb je alle drie de zijden meegeteld?", null, "Bij omtrek vermenigvuldig je niet."],
        uitlegPad: {
          stappen: [
            {
              titel: "Zijden optellen",
              tekst: "Omtrek = 6 + 7 + 8 = 21 cm.",
            },
          ],
          woorden: [
            {
              woord: "omtrek",
              uitleg: "Lengte rondom het figuur.",
            },
          ],
          theorie: "Omtrek driehoek = de som van alle 3 zijden.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "6 + 7 = 13. 13 + 8 = 21 cm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geen ÷2",
              uitleg: "De ÷ 2 hoort alleen bij de oppervlakte van een driehoek.",
            },
          ],
          niveaus: {
            basis: "21 cm.",
            simpeler: "Tel de 3 zijden op: 6 + 7 + 8 = 21 cm.",
            nogSimpeler: "21",
          },
        },
      },
      {
        q: "Een driehoek heeft een **basis van 8 cm** en een **hoogte van 3 cm**. De twee **schuine zijden** zijn allebei **5 cm**. Wat is de **oppervlakte**?",
        options: ["12 cm²", "20 cm²", "24 cm²", "18 cm²"],
        answer: 0,
        wrongHints: [null, "Is een schuine zijde de hoogte?", "Vergeet niet te delen door 2.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Hoogte, niet schuin",
              tekst: "Gebruik de hoogte (3 cm), niet de schuine zijde. (8 × 3) ÷ 2 = 24 ÷ 2 = 12 cm².",
            },
          ],
          woorden: [
            {
              woord: "hoogte",
              uitleg: "Loodrechte afstand van de top naar de basis.",
            },
          ],
          theorie: "Oppervlakte = (basis × hoogte) ÷ 2. De schuine zijden heb je hier niet nodig.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "8 × 3 = 24. 24 ÷ 2 = 12 cm².",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schuine zijden",
              uitleg: "Die heb je alleen nodig voor de omtrek: 8 + 5 + 5 = 18 cm.",
            },
          ],
          niveaus: {
            basis: "12 cm².",
            simpeler: "(basis × hoogte) ÷ 2 = (8 × 3) ÷ 2 = 12 cm².",
            nogSimpeler: "12",
          },
        },
      },
      {
        q: "Een driehoekig vlaggetje heeft een **basis van 20 cm** en een **hoogte van 30 cm**. Hoeveel cm² stof is het vlaggetje?",
        options: ["300 cm²", "600 cm²", "50 cm²", "150 cm²"],
        answer: 0,
        wrongHints: [null, "Wat moet je na basis × hoogte nog doen?", "Bij oppervlakte tel je niet op.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "B × H ÷ 2",
              tekst: "20 × 30 = 600. 600 ÷ 2 = 300 cm².",
            },
          ],
          woorden: [
            {
              woord: "stof",
              uitleg: "Het vlaggetje is van stof. Hoeveel stof = oppervlakte.",
            },
          ],
          theorie: "Driehoek: oppervlakte = (basis × hoogte) ÷ 2.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Handig: 20 ÷ 2 = 10. 10 × 30 = 300 cm².",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vergeet ÷2 niet",
              uitleg: "600 cm² is de rechthoek eromheen. Het vlaggetje is de helft.",
            },
          ],
          niveaus: {
            basis: "300 cm².",
            simpeler: "(20 × 30) ÷ 2 = 600 ÷ 2 = 300 cm².",
            nogSimpeler: "300",
          },
        },
      },
    ],
  },

  {
    title: "Praktijk — schoolse situaties",
    explanation: "Toetsvragen mengen vaak omtrek/oppervlakte met andere onderwerpen *(geld, kosten, tegels, verf)*.\n\n**Voorbeeld 1**:\n*'Een kantoor van 10 × 8 m wordt geverfd. 1 liter verf is voor 10 m². Hoeveel liter?'*\n• Oppervlakte = 80 m².\n• Liter = 80 ÷ 10 = **8 L**.\n\n**Voorbeeld 2**:\n*'Een tuin 20 × 15 m. Hek kost € 8 per meter. Wat kost het hek?'*\n• Omtrek = 2 × (20 + 15) = 70 m.\n• Kost = 70 × 8 = **€ 560**.\n\n**Voorbeeld 3 — gras + hek**:\n*'Een gras-veld 25 × 12 m. Het kost € 5 per m² gras + € 6 per meter hek. Totaal?'*\n• Gras-oppervlakte = 25 × 12 = 300 m². Kost = 300 × 5 = € 1500.\n• Hek-omtrek = 2 × (25 + 12) = 74 m. Kost = 74 × 6 = € 444.\n• Totaal = **€ 1944**.\n\n**Stappenplan**:\n1. Lees: heb je omtrek of oppervlakte nodig?\n2. Reken die uit met de juiste formule.\n3. Vermenigvuldig met de prijs/factor.\n4. Voeg samen als het meerdere onderdelen zijn.",
    checks: [
      {
        q: "Een tuin **15 × 12 m**. Hek kost **€ 10/m**. Hekkosten?",
        options: ["€ 540","€ 1800","€ 270","€ 600"],
        answer: 0,
        wrongHints: [null,"Te veel — voor een hek heb je de omtrek nodig, niet de oppervlakte.","Te weinig — tel alle zijden bij elkaar op (omtrek-formule voor rechthoek).","Te veel — controleer de formule."],
        uitlegPad: {
          stappen: [{ titel: "Omtrek + prijs", tekst: "Hek = omtrek = 2×(15+12) = 54 m. Kost = 54×€10 = €540." }],
          woorden: [{ woord: "hekkosten", uitleg: "Lengte hek (m) × prijs per meter." }],
          theorie: "2-stappen: 1) bereken omtrek. 2) keer prijs per meter.",
          voorbeelden: [{ type: "stap", tekst: "Omtrek 2×(15+12)=54m. ×€10 = €540." }],
          basiskennis: [{ onderwerp: "Niet ×oppervlakte", uitleg: "180 m² × €10 = €1800 (fout). Hek = lengte!" }],
          niveaus: { basis: "€540.", simpeler: "Hek = omtrek = 2×(15+12) = 54m. Kosten = 54 × €10 = €540.", nogSimpeler: "€540" },
        },
      },
      {
        q: "Een vloer **8 × 6 m** wordt betegeld. **€ 12 per m²**. Kosten?",
        options: ["€ 576","€ 168","€ 96","€ 720"],
        answer: 0,
        wrongHints: [null,"Te weinig — voor tegels heb je de oppervlakte nodig, niet de omtrek.","Niet correct — bereken eerst de oppervlakte, dan pas vermenigvuldig je met de prijs.","Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Oppervlakte + prijs", tekst: "Vloer = oppervlakte = 8×6 = 48 m². Kost = 48×€12 = €576." }],
          woorden: [{ woord: "tegelkosten", uitleg: "Vloer (m²) × prijs per m²." }],
          theorie: "2-stappen: 1) oppervlakte (L×B). 2) keer prijs per m².",
          voorbeelden: [{ type: "stap", tekst: "8×6 = 48 m². ×€12 = €576." }],
          basiskennis: [{ onderwerp: "48 × 12", uitleg: "48×12 = 48×10 + 48×2 = 480+96 = 576." }],
          niveaus: { basis: "€576.", simpeler: "Vloer = 8×6 = 48 m². Kosten = 48 × €12 = €576.", nogSimpeler: "€576" },
        },
      },
      {
        q: "Een driehoekige tuin **basis 10 m, hoogte 4 m**. Gras kost **€ 6/m²**. Kosten?",
        options: ["€ 120","€ 60","€ 240","€ 84"],
        answer: 0,
        wrongHints: [null,"Te weinig — bereken eerst de oppervlakte van de driehoek (vergeet niet te delen door 2).","Te veel — heb je ÷ 2 vergeten?","Klopt niet."],
        uitlegPad: {
          stappen: [{ titel: "Driehoek + prijs", tekst: "Oppervlakte = (10×4)÷2 = 20 m². Kost = 20×€6 = €120." }],
          woorden: [{ woord: "graskosten", uitleg: "Oppervlakte (m²) × prijs per m²." }],
          theorie: "Driehoek-oppervlakte = (B×H)÷2. Dan × prijs.",
          voorbeelden: [{ type: "stap", tekst: "(10×4)÷2 = 20 m². 20×€6 = €120." }],
          basiskennis: [{ onderwerp: "÷2 niet vergeten", uitleg: "Zonder ÷2 = 40 m² → €240 (fout)." }],
          niveaus: { basis: "€120.", simpeler: "Driehoek = (10×4)÷2 = 20 m². Kosten = 20 × €6 = €120.", nogSimpeler: "€120" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een muur is **8 m** breed en **3 m** hoog. Met **1 liter** verf doe je **6 m²**. Hoeveel liter verf heb je nodig?",
        options: ["4 L", "24 L", "2 L", "6 L"],
        answer: 0,
        wrongHints: [null, "Dat is de oppervlakte van de muur. Hoeveel m² doe je met 1 liter?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Oppervlakte ÷ dekking",
              tekst: "Muur = 8 × 3 = 24 m². 24 ÷ 6 = 4 liter.",
            },
          ],
          woorden: [
            {
              woord: "verf",
              uitleg: "Verf gaat over het hele vlak = oppervlakte.",
            },
          ],
          theorie: "Stappenplan: 1) oppervlakte uitrekenen. 2) delen door wat 1 liter doet.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "8 × 3 = 24 m². 24 ÷ 6 = 4 L.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Controle",
              uitleg: "4 liter × 6 m² = 24 m². Klopt!",
            },
          ],
          niveaus: {
            basis: "4 L.",
            simpeler: "Muur = 24 m². Elke liter doet 6 m². 24 ÷ 6 = 4 liter.",
            nogSimpeler: "4",
          },
        },
      },
      {
        q: "Een moestuin is **9 m × 6 m**. Een hek kost **€ 5 per meter**. Wat kost het hek?",
        options: ["€ 150", "€ 270", "€ 75", "€ 45"],
        answer: 0,
        wrongHints: [
          null,
          "Voor een hek heb je de rand nodig, niet het vlak.",
          "Heb je alle 4 de zijden meegeteld?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Omtrek × prijs",
              tekst: "Hek = omtrek = 2 × (9 + 6) = 30 m. Kosten = 30 × € 5 = € 150.",
            },
          ],
          woorden: [
            {
              woord: "hekkosten",
              uitleg: "Lengte hek (m) × prijs per meter.",
            },
          ],
          theorie: "2 stappen: 1) omtrek uitrekenen. 2) keer de prijs per meter.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 × (9 + 6) = 30 m. 30 × € 5 = € 150.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet × oppervlakte",
              uitleg: "9 × 6 = 54 m² is het vlak. Een hek meet je in meters.",
            },
          ],
          niveaus: {
            basis: "€ 150.",
            simpeler: "Hek = omtrek = 30 m. 30 × € 5 = € 150.",
            nogSimpeler: "€ 150",
          },
        },
      },
      {
        q: "Een kamer is **5 m × 3 m**. Tapijt kost **€ 20 per m²**. Wat kost het tapijt?",
        options: ["€ 300", "€ 320", "€ 160", "€ 100"],
        answer: 0,
        wrongHints: [null, "Ligt tapijt langs de rand of over de hele vloer?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Oppervlakte × prijs",
              tekst: "Tapijt = oppervlakte = 5 × 3 = 15 m². Kosten = 15 × € 20 = € 300.",
            },
          ],
          woorden: [
            {
              woord: "tapijt",
              uitleg: "Vloerbedekking over de hele vloer = oppervlakte.",
            },
          ],
          theorie: "2 stappen: 1) oppervlakte uitrekenen. 2) keer de prijs per m².",
          voorbeelden: [
            {
              type: "stap",
              tekst: "5 × 3 = 15 m². 15 × € 20 = € 300.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet de omtrek",
              uitleg: "2 × (5 + 3) = 16 m is de rand. Tapijt ligt op het vlak.",
            },
          ],
          niveaus: {
            basis: "€ 300.",
            simpeler: "Tapijt = 15 m². 15 × € 20 = € 300.",
            nogSimpeler: "€ 300",
          },
        },
      },
      {
        q: "Een veldje is **10 m × 5 m**. Gras kost **€ 2 per m²** en een hek eromheen kost **€ 3 per meter**. Wat kost het **samen**?",
        options: ["€ 190", "€ 100", "€ 90", "€ 250"],
        answer: 0,
        wrongHints: [
          null,
          "Heb je allebei de onderdelen meegeteld?",
          null,
          "Gras en hek reken je met een andere maat uit.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Twee onderdelen",
              tekst: "Gras: 10 × 5 = 50 m² → 50 × € 2 = € 100. Hek: 2 × (10 + 5) = 30 m → 30 × € 3 = € 90. Samen € 190.",
            },
          ],
          woorden: [
            {
              woord: "samen",
              uitleg: "Alle onderdelen bij elkaar optellen.",
            },
          ],
          theorie: "Stappenplan: gras = oppervlakte, hek = omtrek. Elk keer de eigen prijs, dan optellen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "€ 100 (gras) + € 90 (hek) = € 190.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eigen maat per onderdeel",
              uitleg: "Gras in m², hek in m. Niet allebei met dezelfde maat rekenen.",
            },
          ],
          niveaus: {
            basis: "€ 190.",
            simpeler: "Gras € 100 + hek € 90 = € 190.",
            nogSimpeler: "€ 190",
          },
        },
      },
      {
        q: "Een **vierkante** zandbak heeft zijden van **3 m**. Er komt een rand van planken omheen. Planken kosten **€ 4 per meter**. Wat kosten de planken?",
        options: ["€ 48", "€ 36", "€ 12", "€ 24"],
        answer: 0,
        wrongHints: [
          null,
          "Een rand gaat rondom. Heb je de rand uitgerekend of het vlak?",
          null,
          "Hoeveel zijden heeft een vierkant?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Omtrek × prijs",
              tekst: "Rand = omtrek = 4 × 3 = 12 m. Kosten = 12 × € 4 = € 48.",
            },
          ],
          woorden: [
            {
              woord: "rand",
              uitleg: "Gaat rondom = omtrek.",
            },
          ],
          theorie: "Vierkant: omtrek = 4 × zijde. Daarna keer de prijs per meter.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 × 3 = 12 m. 12 × € 4 = € 48.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet × oppervlakte",
              uitleg: "3 × 3 = 9 m² is het zand, niet de rand.",
            },
          ],
          niveaus: {
            basis: "€ 48.",
            simpeler: "Rand = 4 × 3 = 12 m. 12 × € 4 = € 48.",
            nogSimpeler: "€ 48",
          },
        },
      },
      {
        q: "Een vloer is **7 m × 4 m**. Eén pak laminaat is genoeg voor **2 m²**. Hoeveel pakken heb je nodig?",
        options: ["14", "11", "28", "56"],
        answer: 0,
        wrongHints: [
          null,
          "Laminaat ligt op de hele vloer. Welke maat heb je dan nodig?",
          "Hoeveel m² doe je met 1 pak?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Oppervlakte ÷ 2",
              tekst: "Vloer = 7 × 4 = 28 m². 28 ÷ 2 = 14 pakken.",
            },
          ],
          woorden: [
            {
              woord: "laminaat",
              uitleg: "Planken voor op de vloer = oppervlakte.",
            },
          ],
          theorie: "Eerst oppervlakte, dan delen door wat 1 pak doet.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "7 × 4 = 28 m². 28 ÷ 2 = 14.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Controle",
              uitleg: "14 pakken × 2 m² = 28 m². Klopt!",
            },
          ],
          niveaus: {
            basis: "14 pakken.",
            simpeler: "Vloer = 28 m². Elk pak doet 2 m². 28 ÷ 2 = 14.",
            nogSimpeler: "14",
          },
        },
      },
      {
        q: "Een **driehoekig** stuk muur heeft een **basis van 6 m** en een **hoogte van 4 m**. Met **1 liter** verf doe je **4 m²**. Hoeveel liter verf heb je nodig?",
        options: ["3 L", "6 L", "12 L", "24 L"],
        answer: 0,
        wrongHints: [null, "Heb je de oppervlakte van de driehoek door 2 gedeeld?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Driehoek ÷ dekking",
              tekst: "Oppervlakte = (6 × 4) ÷ 2 = 12 m². 12 ÷ 4 = 3 liter.",
            },
          ],
          woorden: [
            {
              woord: "driehoek",
              uitleg: "Oppervlakte = (basis × hoogte) ÷ 2.",
            },
          ],
          theorie: "Stappenplan: 1) oppervlakte driehoek. 2) delen door wat 1 liter doet.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "(6 × 4) ÷ 2 = 12 m². 12 ÷ 4 = 3 L.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vergeet ÷2 niet",
              uitleg: "6 × 4 = 24 m² is een rechthoek. De driehoek is de helft.",
            },
          ],
          niveaus: {
            basis: "3 L.",
            simpeler: "Driehoek = 12 m². Elke liter doet 4 m². 12 ÷ 4 = 3 liter.",
            nogSimpeler: "3",
          },
        },
      },
    ],
  },

  {
    title: "Eindopdracht — vlakke figuren mix",
    explanation: "Mix-toets met omtrek + oppervlakte in Doorstroomtoets-stijl.\n\nVeel succes!",
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
          niveaus: { basis: "81 m².", simpeler: "Vierkant: opp = zijde × zijde = 9×9 = 81 m².", nogSimpeler: "81" },
        },
      },
      {
        q: "Rechthoek **20 × 5 m** — omtrek?",
        options: ["50 m","100 m","25 m","40 m"],
        answer: 0,
        wrongHints: [null,"Dat is oppervlakte (20×5).","Te weinig — heb je niet ALLE zijden geteld?","Te weinig — tel je de korte zijden ook mee?"],
        uitlegPad: {
          stappen: [{ titel: "2(L+B)", tekst: "2 × (20+5) = 2 × 25 = 50 m omtrek." }],
          woorden: [{ woord: "rechthoek-omtrek", uitleg: "2 × (lengte + breedte)." }],
          theorie: "Rechthoek: 2 lange + 2 korte zijden. Som = 2(L+B).",
          voorbeelden: [{ type: "stap", tekst: "2(20+5) = 2×25 = 50 m." }],
          basiskennis: [{ onderwerp: "Niet 100", uitleg: "100 = oppervlakte (20×5). Omtrek = 50." }],
          niveaus: { basis: "50 m.", simpeler: "Rechthoek-omtrek = 2×(20+5) = 2×25 = 50 m.", nogSimpeler: "50" },
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
          niveaus: { basis: "42 cm².", simpeler: "Driehoek = (14×6)÷2 = 84÷2 = 42 cm².", nogSimpeler: "42" },
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
          niveaus: { basis: "130 m.", simpeler: "Rondom = omtrek = 2×(40+25) = 130 m.", nogSimpeler: "130" },
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
          niveaus: { basis: "1,5 L.", simpeler: "Vloer 6×5 = 30 m². 30 m² ÷ 20 m²/L = 1,5 L verf.", nogSimpeler: "1,5" },
        },
      },
      {
        q: "Een raam **120 cm × 80 cm**. Hoeveel **glas** in m²?",
        options: ["0,96 m²","9.600 m²","9.600 cm²","2 m²"],
        answer: 0,
        wrongHints: [null, "Verkeerde eenheid — cm² getal correct maar gevraagd m².", "Geen omrekening gedaan naar m².", "Veel te ruw geschat."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: oppervlakte in cm²", tekst: "Raam-rechthoek: 120 × 80 = **9.600 cm²**." },
            { titel: "Stap 2: omrekenen naar m²", tekst: "1 m = 100 cm dus 1 m² = 100 × 100 = **10.000 cm²**. 9.600 ÷ 10.000 = **0,96 m²**." },
            { titel: "Toets-instinker: eenheid", tekst: "Lengte: 1 m = 100 cm. **Maar oppervlakte: 1 m² = 10.000 cm²**. Lees vraag goed — gevraagde eenheid is cruciaal." },
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
          basiskennis: [{ onderwerp: "De toets test omrekening", uitleg: "De toets test bijna altijd op eenheid bij oppervlakte-vragen. Lees of m² of cm² gevraagd." }],
          niveaus: { basis: "0,96 m².", simpeler: "120 × 80 = 9.600 cm². 9.600 ÷ 10.000 = 0,96 m².", nogSimpeler: "0,96 m²" },
        },
      },
      {
        q: "Een **L-vormig** terras: rechthoek 8 × 4 m + uitstekend stuk 3 × 2 m. **Totale oppervlakte**?",
        options: ["38 m²","32 m²","26 m²","48 m²"],
        answer: 0,
        wrongHints: [null, "Klopt voor de grote rechthoek alleen — uitstekend stuk vergeten.", "Niet aftrekken — het uitstekende stuk komt erbij.", "Te veel — geen overlap."],
        uitlegPad: {
          stappen: [
            { titel: "Splits in eenvoudige stukken", tekst: "L-vorm = optellen van twee rechthoeken.\n• Rechthoek 1: 8 × 4 = **32 m²**\n• Uitstekend stuk: 3 × 2 = **6 m²**" },
            { titel: "Tel op", tekst: "Totale oppervlakte = 32 + 6 = **38 m²**." },
            { titel: "Toets-truc: complexe vormen splitsen", tekst: "Bij L-vormen, T-vormen of trapjes-vormen: knip in **rechthoeken** waarvan je oppervlakte makkelijk weet. Tel ze op. Bij INGEVOEGDE vormen (gat erin): trek af.\nAltijd schets maken op kladpapier." },
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
          niveaus: { basis: "32 + 6 = 38 m².", simpeler: "Splits: groot stuk 8×4=32, uitstek 3×2=6. Samen 38 m².", nogSimpeler: "38 m²" },
        },
      },
      {
        q: "Hoeveel **vierkante tegels van 30 cm** passen op een vloer van **3 m × 2,4 m**?",
        options: ["80","24","800","72"],
        answer: 0,
        wrongHints: [null, "Te weinig — reken beide maten eerst om naar centimeters.", "Veel te veel — je rekent oppervlakte in cm² niet in tegels.", "Niet — reken per richting uit hoeveel tegels er passen."],
        uitlegPad: {
          stappen: [
            { titel: "Aantal tegels per richting", tekst: "Tegel = 30 cm. Vloer 3 m = 300 cm → 300 ÷ 30 = **10 tegels lang**. Vloer 2,4 m = 240 cm → 240 ÷ 30 = **8 tegels breed**." },
            { titel: "Totaal tegels", tekst: "10 × 8 = **80 tegels** passen perfect (geen knippen nodig — gelukkig, want 3 m én 2,4 m zijn deelbaar door 30 cm)." },
            { titel: "Toets-truc: passend rekenen", tekst: "Bij 'hoeveel tegels?'-vragen: deel beide richtingen apart door tegel-afmeting. Reken in zelfde eenheid (cm). Vermenigvuldig de twee aantallen.\n\nAlternatieve methode via oppervlakte:\n• Vloer = 3 × 2,4 = 7,2 m²\n• Tegel = 0,3 × 0,3 = 0,09 m²\n• Tegels: 7,2 ÷ 0,09 = 80 ✓" },
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
          niveaus: { basis: "10 × 8 = 80 tegels.", simpeler: "Vloer 3 m = 10 tegels, 2,4 m = 8 tegels. 10 × 8 = 80.", nogSimpeler: "80" },
        },
      },
      { q: "Vierkant met zijde 7 cm. Omtrek?", options: ["28 cm","14 cm","49 cm","21 cm"], answer: 0, wrongHints: [null, "Niet — 4 zijden.", "Dat is oppervlakte.", "3 zijden gerekend."] },
      { q: "Vierkant zijde 7 cm. Oppervlakte?", options: ["49 cm²","28 cm²","14 cm²","21 cm²"], answer: 0, wrongHints: [null, "Dat is omtrek.", "Te laag.", "Te laag."] },
      { q: "Rechthoek 8 × 5 cm. Oppervlakte?", options: ["40 cm²","26 cm²","13 cm²","45 cm²"], answer: 0, wrongHints: [null, "Dat is omtrek.", "Niet.", "Te hoog."] },
      { q: "Driehoek basis 6, hoogte 4. Oppervlakte?", options: ["12","24","10","8"], answer: 0, wrongHints: [null, "Vergeet niet ÷2.", "Niet — basis × hoogte, geen optellen.", "Niet."] },
      { q: "Rechthoek 10 × 4 m. Omtrek?", options: ["28 m","40 m","20 m","14 m"], answer: 0, wrongHints: [null, "Dat is oppervlakte.", "Maar 2 zijden meegenomen.", "Niet — 4 zijden."] },
      { q: "Eenheid van oppervlakte is?", options: ["m² of cm²","m","cm","kg"], answer: 0, wrongHints: [null, "Lengte.", "Lengte.", "Gewicht."] },
      { q: "Eenheid van omtrek is?", options: ["m of cm","m² of cm²","kg","L"], answer: 0, wrongHints: [null, "Oppervlakte.", "Gewicht.", "Inhoud."] },
      { q: "Hoeveel **hoeken** heeft een rechthoek?", options: ["4","3","5","6"], answer: 0, wrongHints: [null, "Driehoek.", "Vijfhoek.", "Zeshoek."] },
      { q: "Hoeveel **gelijke zijden** heeft een vierkant?", options: ["4","2","3","1"], answer: 0, wrongHints: [null, "Tel álle zijden van een vierkant — het zijn er meer dan 2.", "3 gelijke zijden hoort bij een driehoek.", "Een vierkant heeft meerdere even lange zijden — tel ze."] },
      { q: "Omtrek van driehoek met zijden 3, 4, 5?", options: ["12","60","11","9"], answer: 0, wrongHints: [null, "Niet — som, geen ×.", "Niet.", "Niet."] },
      { q: "Oppervlakte vierkant 5 m bij 5 m?", options: ["25 m²","20 m²","10 m²","100 m²"], answer: 0, wrongHints: [null, "Omtrek.", "Niet.", "Niet."] },
      { q: "Tegel 50 cm × 50 cm. Oppervlakte?", options: ["2.500 cm²","100 cm²","250 cm²","1 m²"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Te veel."] },
      { q: "Een **cirkel** heeft hoeveel **hoeken**?", options: ["0","1","2","4"], answer: 0, wrongHints: [null, "Een cirkel is één rondlopende gebogen lijn — zit daar ergens een punt in?", "Niet.", "Niet."] },
      { q: "Een **gelijkzijdige** driehoek heeft hoeveel gelijke zijden?", options: ["3","2","1","0"], answer: 0, wrongHints: [null, "Dat is gelijkbenig.", "Niet.", "Niet."] },
      { q: "Een **rechte hoek** = hoeveel graden?", options: ["90°","45°","180°","360°"], answer: 0, wrongHints: [null, "Halve rechte.", "Gestrekt.", "Volle cirkel."] },
      { q: "Som van 3 hoeken in een driehoek?", options: ["180°","90°","360°","270°"], answer: 0, wrongHints: [null, "Eén hoek.", "Cirkel.", "Niet."] },
      { q: "Som van 4 hoeken in een vierhoek?", options: ["360°","180°","270°","90°"], answer: 0, wrongHints: [null, "Driehoek.", "Niet.", "Eén hoek."] },
      { q: "**Tegels** 1 m × 1 m. Vloer 3 × 4 m. Hoeveel tegels?", options: ["12","7","4","16"], answer: 0, wrongHints: [null, "Niet — niet som.", "Niet.", "Te veel."] },
      { q: "Een **vierhoek** met 2 paar parallelle zijden = ?", options: ["Parallellogram","Cirkel","Driehoek","Trapezium"], answer: 0, wrongHints: [null, "Geen hoeken.", "Geen vier zijden.", "Een trapezium heeft maar één paar evenwijdige zijden."] },
      { q: "**Symmetrie-as** van een vierkant?", options: ["4 assen","2 assen","1 as","Geen"], answer: 0, wrongHints: [null, "Te weinig.", "Te weinig.", "Wel symmetrisch."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const vlakkeFigurenPo = {
  id: "vlakke-figuren-po",
  title: "Vlakke figuren — Doorstroomtoets groep 5-8",
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
