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
      },
      {
        q: "Rechthoek **10 m × 4 m** — wat is de **oppervlakte**?",
        options: ["40 m²","28 m","14 m","40 m"],
        answer: 0,
        wrongHints: [null,"Dat is omtrek, niet oppervlakte.","Dat is alleen halve omtrek.","Klopt qua getal maar verkeerde eenheid — oppervlakte = m²."],
      },
      {
        q: "Vierkant met **omtrek 20 cm** — wat is de **zijde**?",
        options: ["5 cm","10 cm","4 cm","20 cm"],
        answer: 0,
        wrongHints: [null,"Te veel — denk: 4 × zijde = 20.","Te weinig — controleer 4 × 4 = 16, niet 20.","Dat is omtrek zelf."],
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
      },
      {
        q: "Een **kamer 5 × 4 m** wordt geverfd. Hoeveel **m² vloer**?",
        options: ["20 m²","18 m","9 m","20 m"],
        answer: 0,
        wrongHints: [null,"Dat is omtrek, niet oppervlakte.","Klopt niet — onjuiste eenheid en getal.","Klopt qua getal maar oppervlakte = m²."],
      },
      {
        q: "Een vierkant terras met **zijde 6 m**. Hoeveel **omtrek**?",
        options: ["24 m","36 m","12 m","48 m"],
        answer: 0,
        wrongHints: [null,"Dat is oppervlakte (6²).","Te weinig — controleer 4 × 6.","Te veel — heb je extra zijde gerekend?"],
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
      },
      {
        q: "Driehoek met **basis 5 cm, hoogte 4 cm** — oppervlakte?",
        options: ["10 cm²","20 cm²","9 cm²","40 cm²"],
        answer: 0,
        wrongHints: [null,"Te veel — vergeet ÷ 2.","Niet × of +.","Veel te veel."],
      },
      {
        q: "Een driehoekige tuintje basis **6 m**, hoogte **9 m**. Hoeveel **m² gras**?",
        options: ["27 m²","54 m²","15 m²","18 m²"],
        answer: 0,
        wrongHints: [null,"Te veel — vergeet ÷ 2.","Te weinig — heb je optellen gedaan?","Te weinig — controleer 6×9÷2."],
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
      },
      {
        q: "Een vloer **8 × 6 m** wordt betegeld. **€ 12 per m²**. Kosten?",
        options: ["€ 576","€ 168","€ 96","€ 720"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je omtrek ipv oppervlakte?","Niet correct — controleer 8×6=48 → ×12.","Te veel."],
      },
      {
        q: "Een driehoekige tuin **basis 10 m, hoogte 4 m**. Gras kost **€ 6/m²**. Kosten?",
        options: ["€ 120","€ 60","€ 240","€ 84"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer oppervlakte (10×4÷2=20). Dan × 6.","Te veel — heb je ÷ 2 vergeten?","Klopt niet."],
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
      },
      {
        q: "Rechthoek **20 × 5 m** — omtrek?",
        options: ["50 m","100 m","25 m","40 m"],
        answer: 0,
        wrongHints: [null,"Dat is oppervlakte (20×5).","Te weinig — heb je niet ALLE zijden geteld?","Te weinig — heb je 1 zijde overgeslagen?"],
      },
      {
        q: "Driehoek **basis 14 cm, hoogte 6 cm** — oppervlakte?",
        options: ["42 cm²","84 cm²","20 cm²","40 cm"],
        answer: 0,
        wrongHints: [null,"Te veel — vergeet ÷ 2.","Te weinig — controleer 14×6÷2.","Eenheid en getal kloppen niet."],
      },
      {
        q: "Een sportveld **40 × 25 m** — hoe lang lopen rondom?",
        options: ["130 m","65 m","1000 m","1000 m²"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is halve omtrek.","Dat is oppervlakte.","Verkeerde eenheid voor lengte."],
      },
      {
        q: "Een vloer **6 × 5 m** wordt geverfd. Verf voor **20 m² per liter**. Hoeveel **liter**?",
        options: ["1,5","2","3","30"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer 30 ÷ 20.","Te veel — heb je oppervlakte verkeerd?","Veel te veel — heb je niet door 20 gedeeld?"],
      },
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
