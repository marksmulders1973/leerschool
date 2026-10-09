// Leerpad: Volgorde van bewerkingen + haakjes
// 7 stappen in 4 hoofdstukken (A t/m D).
// Doelgroep: groep 5-7 basisschool. toets-relevant.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  haakje: "#ec407a",
  macht: "#9be069",
  vermenig: "#5d9cec",
  optellen: "#ffd54f",
  fout: "#ef5350",
  good2: "#00c853",
};

const stepEmojis = ["🤔","🟦","🟨","🟩","➕","🔍","🏆"];

const chapters = [
  { letter: "A", title: "Het probleem", emoji: "🤔", from: 0, to: 0 },
  { letter: "B", title: "De volgorde-regel", emoji: "🟦", from: 1, to: 2 },
  { letter: "C", title: "Haakjes + machten", emoji: "🟩", from: 3, to: 4 },
  { letter: "D", title: "Lastige + eindopdracht", emoji: "🏆", from: 5, to: 6 },
];

// Visualisatie van een rekenstap met 4 niveaus
function volgordeSvg() {
  const niveaus = [
    { naam: "1. Haakjes", icon: "( )", kleur: COLORS.haakje, voorbeeld: "(2 + 3) = 5" },
    { naam: "2. Machten", icon: "x²", kleur: COLORS.macht, voorbeeld: "3² = 9" },
    { naam: "3. × en :", icon: "×÷", kleur: COLORS.vermenig, voorbeeld: "4 × 5 = 20" },
    { naam: "4. + en −", icon: "+−", kleur: COLORS.optellen, voorbeeld: "8 − 3 = 5" },
  ];
  return `<svg viewBox="0 0 320 280">
<rect x="0" y="0" width="320" height="280" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">Volgorde van bewerkingen — 4 stappen</text>

${niveaus.map((n, i) => {
  const y = 45 + i * 55;
  return `
<rect x="20" y="${y}" width="280" height="44" rx="8" fill="${n.kleur}" opacity="0.30" stroke="${n.kleur}" stroke-width="1.5"/>
<text x="40" y="${y + 27}" fill="${n.kleur}" font-size="22" font-family="Arial" font-weight="bold">${n.icon}</text>
<text x="100" y="${y + 18}" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">${n.naam}</text>
<text x="100" y="${y + 35}" fill="${COLORS.muted}" font-size="11" font-family="Arial">Voorbeeld: ${n.voorbeeld}</text>`;
}).join('')}

<text x="160" y="270" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-style="italic">Trucje: 'Hé Maria, Voor Vader Op'</text>
</svg>`;
}

// Voorbeeld-uitwerking-stappen visueel
function uitwerkingSvg(steps) {
  return `<svg viewBox="0 0 320 ${50 + steps.length * 36}">
<rect x="0" y="0" width="320" height="${50 + steps.length * 36}" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">Stap voor stap uitwerken</text>

${steps.map((s, i) => {
  const y = 40 + i * 36;
  return `
<text x="20" y="${y + 15}" fill="${COLORS.muted}" font-size="14" font-family="Arial">Stap ${i + 1}:</text>
<text x="100" y="${y + 15}" fill="${COLORS.text}" font-size="15" font-family="monospace" font-weight="bold">${s.expr}</text>
<text x="160" y="${y + 30}" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-style="italic">${s.uitleg}</text>`;
}).join('')}
</svg>`;
}

const steps = [
  {
    title: "Het probleem — wat eerst doen?",
    explanation: "Als je een **rekensom** hebt met meerdere getallen en bewerkingen, **maakt het uit in welke volgorde je ze doet**.\n\n**Voorbeeld**: **2 + 3 × 4** = ?\n\nTwee mogelijke antwoorden:\n• Optie A: van links naar rechts → 2 + 3 = 5, dan 5 × 4 = **20**.\n• Optie B: vermenigvuldigen eerst → 3 × 4 = 12, dan 2 + 12 = **14**.\n\nWelke is goed? **14** is goed.\n\nWaarom? **Omdat 'maal' altijd vóór 'plus' gaat**. Dat is een **wereldwijde wiskundige afspraak**.\n\nAnders zou iedereen een ander antwoord krijgen, en kunnen we niet meer rekenen met elkaar!\n\n**Het probleem**: kinderen rekenen vaak **van links naar rechts**, zoals bij lezen. Dat is **fout** bij rekenen waar bewerkingen gemixt zijn.\n\n**Andere voorbeelden**:\n• **10 − 6 ÷ 2** = 10 − 3 = **7** (delen eerst, dan aftrekken)\n• **5 + 2 × 3** = 5 + 6 = **11** (× eerst)\n• **8 ÷ 2 + 3** = 4 + 3 = **7** (÷ eerst)\n\n**De regel** *(in dit pad uitgelegd)*:\n1. **Haakjes** eerst\n2. **Machten** (zoals 3² = 9)\n3. **Vermenigvuldigen + delen**\n4. **Optellen + aftrekken**\n\nGeheugentruc Nederlands: '**H**aakjes, **M**achten, **V**ermenigvuldigen, **D**elen, **O**ptellen, **A**ftrekken' = **HMVDOA**.\n\nVeel scholen leren ook: **'M**aal **e**erst' (M staat voor maal/×).\n\n**Belangrijk**: × en ÷ zijn **even sterk** — die doe je in dezelfde stap. Idem + en −.",
    svg: volgordeSvg(),
    checks: [
      {
        q: "**2 + 3 × 4** = ?",
        options: ["14","20","11","24"],
        answer: 0,
        wrongHints: [null,"Welke bewerking gaat eerst — × of +? Probeer in die volgorde.","Te weinig — heb je de × wel meegenomen?","Te veel — kijk of je niet eerst optelt voor je vermenigvuldigt."],
        uitlegPad: {
          stappen: [{ titel: "× eerst", tekst: "× sterker dan +. Eerst 3×4=12, dan 2+12=14." }],
          woorden: [{ woord: "HMVDOA", uitleg: "Haakjes-Machten-Vermenigvuldigen-Delen-Optellen-Aftrekken." }],
          theorie: "Wereldwijde regel: × en ÷ vóór + en −. Anders zou iedereen ander antwoord krijgen.",
          voorbeelden: [{ type: "stap", tekst: "2 + 3×4 = 2 + 12 = 14. (Niet 5×4=20 — dat zou (2+3)×4 zijn met haakjes)." }],
          basiskennis: [{ onderwerp: "Niet links→rechts", uitleg: "Bij rekenen niet zoals bij lezen. Volgorde-regel telt." }],
          niveaus: { basis: "14.", simpeler: "× eerst: 3×4=12. Dan +: 2+12=14.", nogSimpeler: "14" },
        },
      },
      {
        q: "Wat doe je **eerst** als er + en × in een som staan?",
        options: ["Vermenigvuldigen","Optellen","Maakt niet uit","Van links naar rechts"],
        answer: 0,
        wrongHints: [null,"Andersom — welke van de twee is de sterkere bewerking?","Wel uit — er is een vaste regel.","Niet bij rekenen — er is een volgorde-regel."],
        uitlegPad: {
          stappen: [{ titel: "× sterker", tekst: "Vermenigvuldigen (×) gaat altijd vóór optellen (+). Vaste regel." }],
          woorden: [{ woord: "sterkte", uitleg: "× en ÷ zijn 'sterker' dan + en −. Doen ze eerst." }],
          theorie: "HMVDOA-volgorde: Haakjes → Machten → × en ÷ → + en −.",
          voorbeelden: [{ type: "tabel", tekst: "5+2×3 = 5+6=11. Niet 7×3=21." }],
          basiskennis: [{ onderwerp: "Wereldregel", uitleg: "Iedereen volgt zelfde volgorde — anders chaos." }],
          niveaus: { basis: "Vermenigvuldigen.", simpeler: "× is sterker dan +. Doe altijd eerst de × in een som met beide.", nogSimpeler: "×" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Sanne rekent **6 + 2 × 5** van links naar rechts uit en krijgt 40. Wat is het goede antwoord?",
        options: ["16", "40", "13", "60"],
        answer: 0,
        wrongHints: [
          null,
          "Zo rekende Sanne — maar is van links naar rechts hier de goede volgorde?",
          "Kijk nog eens naar het teken tussen 2 en 5: is dat een plus?",
          "Kijk nog eens naar het teken tussen 6 en 2: is dat een keer?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "× eerst",
              tekst: "Eerst 2 × 5 = 10. Dan 6 + 10 = 16.",
            },
          ],
          woorden: [
            {
              woord: "maal eerst",
              uitleg: "Vermenigvuldigen gaat vóór optellen.",
            },
          ],
          theorie: "Bij rekenen ga je niet zomaar van links naar rechts zoals bij lezen. × gaat vóór +.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "6 + 2×5 = 6 + 10 = 16. (Van links naar rechts: 8 × 5 = 40 — fout.)",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet links→rechts",
              uitleg: "Sanne deed eerst 6 + 2. Dat mag niet: × is sterker.",
            },
          ],
          niveaus: {
            basis: "16.",
            simpeler: "× eerst: 2×5 = 10. Dan 6 + 10 = 16.",
            nogSimpeler: "16",
          },
        },
      },
      {
        q: "Wat reken je als **eerste** uit bij **15 − 9 ÷ 3**?",
        options: ["9 ÷ 3", "15 − 9", "15 ÷ 3", "15 − 3"],
        answer: 0,
        wrongHints: [
          null,
          "Welke bewerking is sterker: ÷ of −?",
          "Welke getallen staan er echt naast het ÷-teken?",
          "Kijk welke twee getallen aan weerskanten van het ÷-teken staan.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "÷ eerst",
              tekst: "Delen is sterker dan aftrekken. Dus eerst 9 ÷ 3 = 3. Daarna 15 − 3 = 12.",
            },
          ],
          woorden: [
            {
              woord: "÷ vóór −",
              uitleg: "Delen gaat vóór aftrekken.",
            },
          ],
          theorie: "× en ÷ doe je vóór + en −, waar ze ook staan.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "15 − 9÷3 = 15 − 3 = 12.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet links beginnen",
              uitleg: "Je begint niet met 15 − 9, ook al staat dat links.",
            },
          ],
          niveaus: {
            basis: "9 ÷ 3.",
            simpeler: "Delen gaat vóór aftrekken. Dus eerst 9 ÷ 3.",
            nogSimpeler: "9 ÷ 3",
          },
        },
      },
      {
        q: "**20 − 8 ÷ 4** = ?",
        options: ["18", "3", "2", "12"],
        answer: 0,
        wrongHints: [
          null,
          "Rekende je eerst 20 − 8? Welke bewerking is sterker?",
          "Dat is alleen een tussenstap — er moet nog iets mee gebeuren.",
          "Je bent het ÷-teken vergeten.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "÷ eerst",
              tekst: "8 ÷ 4 = 2. Dan 20 − 2 = 18.",
            },
          ],
          woorden: [
            {
              woord: "÷ vóór −",
              uitleg: "Delen gaat vóór aftrekken.",
            },
          ],
          theorie: "Vaste afspraak: × en ÷ vóór + en −.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "20 − 8÷4 = 20 − 2 = 18.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet (20 − 8) ÷ 4",
              uitleg: "Er staan geen haakjes. Dan gaat ÷ eerst.",
            },
          ],
          niveaus: {
            basis: "18.",
            simpeler: "÷ eerst: 8÷4 = 2. Dan 20 − 2 = 18.",
            nogSimpeler: "18",
          },
        },
      },
      {
        q: "Waarom is er bij rekenen een **vaste afspraak** over de volgorde?",
        options: [
          "Anders krijgt iedereen een ander antwoord",
          "Dan worden sommen korter",
          "Dan heb je nooit meer haakjes nodig",
          "Omdat optellen moeilijker is dan keer",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Wat gebeurt er als de één van links naar rechts rekent en de ander niet?",
          "Wat gebeurt er als de één van links naar rechts rekent en de ander niet?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Iedereen hetzelfde",
              tekst: "Door de afspraak krijgt iedereen bij 2 + 3 × 4 hetzelfde antwoord: 14.",
            },
          ],
          woorden: [
            {
              woord: "afspraak",
              uitleg: "Een regel waar iedereen zich aan houdt.",
            },
          ],
          theorie: "De volgorde-regel is een wereldwijde afspraak. Zo kunnen mensen met elkaar rekenen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 + 3×4: zonder afspraak zegt de één 20 en de ander 14. Met de afspraak is het 14.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Wereldwijd",
              uitleg: "Overal ter wereld rekenen mensen in dezelfde volgorde.",
            },
          ],
          niveaus: {
            basis: "Anders krijgt iedereen een ander antwoord.",
            simpeler: "Zonder afspraak rekent iedereen anders. Dan krijg je verschillende antwoorden.",
            nogSimpeler: "Zelfde antwoord",
          },
        },
      },
      {
        q: "**4 + 12 ÷ 2** = ?",
        options: ["10", "8", "6", "16"],
        answer: 0,
        wrongHints: [
          null,
          "Rekende je van links naar rechts? Welke bewerking gaat eerst?",
          "Dat is alleen het eerste stukje — de 4 moet er nog bij.",
          "Het ÷-teken doet ook mee.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "÷ eerst",
              tekst: "12 ÷ 2 = 6. Dan 4 + 6 = 10.",
            },
          ],
          woorden: [
            {
              woord: "÷ vóór +",
              uitleg: "Delen gaat vóór optellen.",
            },
          ],
          theorie: "× en ÷ gaan vóór + en −, ook als de + links staat.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 + 12÷2 = 4 + 6 = 10.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet (4 + 12) ÷ 2",
              uitleg: "Geen haakjes, dus eerst delen.",
            },
          ],
          niveaus: {
            basis: "10.",
            simpeler: "÷ eerst: 12÷2 = 6. Dan 4 + 6 = 10.",
            nogSimpeler: "10",
          },
        },
      },
      {
        q: "Tim zegt: 'Ik reken altijd van links naar rechts, net als bij lezen.' Klopt dat bij **3 + 5 × 2**?",
        options: [
          "Nee, je doet eerst 5 × 2",
          "Ja, je doet eerst 3 + 5",
          "Ja, links staat altijd eerst",
          "Nee, je doet eerst 3 × 2",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Welke bewerking is sterker: + of ×?",
          "Welke bewerking is sterker: + of ×?",
          "Kijk welke getallen echt naast het ×-teken staan.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "× eerst",
              tekst: "5 × 2 = 10. Dan 3 + 10 = 13.",
            },
          ],
          woorden: [
            {
              woord: "volgorde-regel",
              uitleg: "× en ÷ gaan vóór + en −.",
            },
          ],
          theorie: "Bij rekenen geldt niet 'links eerst', maar de volgorde-regel.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3 + 5×2 = 3 + 10 = 13. (Tim krijgt 8 × 2 = 16 — fout.)",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lezen ≠ rekenen",
              uitleg: "Bij lezen ga je van links naar rechts, bij gemengde sommen niet.",
            },
          ],
          niveaus: {
            basis: "Nee, eerst 5 × 2.",
            simpeler: "× is sterker dan +. Dus eerst 5 × 2 = 10, dan 3 + 10 = 13.",
            nogSimpeler: "Nee",
          },
        },
      },
    ],
  },
  {
    title: "De volgorde-regel — × en ÷ vóór + en −",
    explanation: "**Regel**: **vermenigvuldigen** (×) en **delen** (÷) komen **vóór** **optellen** (+) en **aftrekken** (−).\n\n**Voorbeelden** *(stap voor stap)*:\n\n**Voorbeeld 1**: 2 + 3 × 4\n• Eerst ×: 3 × 4 = 12\n• Dan +: 2 + 12 = **14**\n\n**Voorbeeld 2**: 10 − 6 ÷ 2\n• Eerst ÷: 6 ÷ 2 = 3\n• Dan −: 10 − 3 = **7**\n\n**Voorbeeld 3**: 5 × 4 + 3 × 2\n• Eerst beide ×: 5×4 = 20, en 3×2 = 6\n• Dan +: 20 + 6 = **26**\n\n**Voorbeeld 4**: 8 + 12 ÷ 4 − 5\n• Eerst ÷: 12 ÷ 4 = 3\n• Dan + en − van links naar rechts:\n  - 8 + 3 = 11\n  - 11 − 5 = **6**\n\n**Belangrijk: × en ÷ zijn even sterk**\nAls er meerdere × en ÷ in een som staan, doe ze van **links naar rechts**:\n• 12 ÷ 3 × 2 = (12 ÷ 3) × 2 = 4 × 2 = **8**\n• 24 × 2 ÷ 6 = (24 × 2) ÷ 6 = 48 ÷ 6 = **8**\n\n**Idem voor + en −**: even sterk, links naar rechts:\n• 10 − 3 + 5 = (10 − 3) + 5 = 7 + 5 = **12**\n• 8 + 4 − 6 = (8 + 4) − 6 = 12 − 6 = **6**\n\n**Trucje om bewerkingen te onthouden**:\n• × en ÷ zijn **sterker**\n• + en − zijn **zwakker**\n\nDoe altijd eerst de sterkere bewerkingen.\n\n**Veelvoorkomende fout**:\nKinderen rekenen \"5 + 2 × 3\" als (5+2)×3 = 21. Maar correct is 5 + 6 = **11**. Onthoud: × eerst!",
    svg: uitwerkingSvg([
      { expr: "2 + 3 × 4", uitleg: "Eerst de × doen" },
      { expr: "= 2 + 12", uitleg: "Nu het optellen" },
      { expr: "= 14", uitleg: "Klaar!" },
    ]),
    checks: [
      {
        q: "**5 × 4 + 3** = ?",
        options: ["23","35","27","19"],
        answer: 0,
        wrongHints: [null,"Welke bewerking gaat eerst — × of +? Pak die eerst, dan de rest.","Te veel — heb je de × eerst gedaan?","Te weinig — heb je de × wel meegenomen?"],
        uitlegPad: {
          stappen: [{ titel: "× eerst", tekst: "5×4=20, dan +3=23." }],
          woorden: [{ woord: "× eerst", uitleg: "Vermenigvuldigen vóór optellen, ook als × links staat." }],
          theorie: "Volgorde-regel onafhankelijk van positie: × eerst, dan +.",
          voorbeelden: [{ type: "stap", tekst: "5×4+3 = 20+3 = 23." }],
          basiskennis: [{ onderwerp: "Niet (5×4+3)", uitleg: "Geen haakjes om hele som — gewoon volgorde." }],
          niveaus: { basis: "23.", simpeler: "5×4=20, +3=23. (Niet eerst 4+3.)", nogSimpeler: "23" },
        },
      },
      {
        q: "**12 − 6 ÷ 3** = ?",
        options: ["10","2","6","4"],
        answer: 0,
        wrongHints: [null,"Dat zou (12-6)÷3 zijn — maar er staan geen haakjes.","Welke bewerking is sterker, ÷ of −?","Welke bewerking is sterker, ÷ of −?"],
        uitlegPad: {
          stappen: [{ titel: "÷ eerst", tekst: "÷ sterker dan −. Eerst 6÷3=2, dan 12-2=10." }],
          woorden: [{ woord: "÷ vóór −", uitleg: "Delen gaat vóór aftrekken (zelfde regel als × vóór +)." }],
          theorie: "× en ÷ even sterk, samen niveau 3. + en − samen niveau 4.",
          voorbeelden: [{ type: "stap", tekst: "12 − 6÷3 = 12 − 2 = 10." }],
          basiskennis: [{ onderwerp: "Niet links→rechts", uitleg: "12-6 eerst geeft 6, ÷3=2 (fout). Volgorde houden!" }],
          niveaus: { basis: "10.", simpeler: "÷ eerst: 6÷3=2. Dan -: 12-2=10.", nogSimpeler: "10" },
        },
      },
      {
        q: "**6 × 2 + 4 × 3** = ?",
        options: ["24","36","48","20"],
        answer: 0,
        wrongHints: [null,"Dat zou 6×(2+4) zijn — maar er staan geen haakjes. Pak eerst beide × los van elkaar.","Te veel — dat zou (6×2+4)×3 zijn; zonder haakjes bindt × sterker dan +.","Te weinig — heb je beide × meegenomen?"],
        uitlegPad: {
          stappen: [{ titel: "Beide × eerst", tekst: "Eerst beide ×: 6×2=12, 4×3=12. Dan +: 12+12=24." }],
          woorden: [{ woord: "× bindt", uitleg: "× verbindt twee getallen sterker dan + ze van elkaar scheidt." }],
          theorie: "Bij meerdere × in 1 som: doe ze ALLE eerst, dan +.",
          voorbeelden: [{ type: "stap", tekst: "6×2 + 4×3 = 12 + 12 = 24." }],
          basiskennis: [{ onderwerp: "Niet 6×2+4", uitleg: "+ zonder haakjes scheidt × niet — × bindt sterker." }],
          niveaus: { basis: "24.", simpeler: "Twee maal-stukken eerst: 6×2=12, 4×3=12. Som: 24.", nogSimpeler: "24" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Lisa koopt **3 schriften van 2 euro** en **één pen van 4 euro**. Welke som past hierbij?",
        options: ["3 × 2 + 4", "3 + 2 × 4", "3 × 4 + 2", "3 + 2 + 4"],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel schriften kost ze, en voor hoeveel euro per stuk?",
          "Kost de pen 4 euro, of kosten de schriften elk 4 euro?",
          "Telt het aantal schriften als euro's?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Schriften, dan pen",
              tekst: "3 schriften × 2 euro = 6 euro. Plus de pen: 6 + 4 = 10 euro.",
            },
          ],
          woorden: [
            {
              woord: "× eerst",
              uitleg: "Eerst 3 × 2, dan + 4.",
            },
          ],
          theorie: "Bij 3 × 2 + 4 reken je eerst 3 × 2 = 6, dan + 4 = 10.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3 × 2 + 4 = 6 + 4 = 10 euro.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Past de som?",
              uitleg: "Lees het verhaal en kijk wat er keer moet en wat erbij moet.",
            },
          ],
          niveaus: {
            basis: "3 × 2 + 4.",
            simpeler: "3 schriften keer 2 euro, plus 4 euro voor de pen.",
            nogSimpeler: "3 × 2 + 4",
          },
        },
      },
      {
        q: "**36 ÷ 6 ÷ 2** = ?",
        options: ["3", "12", "6", "18"],
        answer: 0,
        wrongHints: [
          null,
          "Begon je rechts? ÷ en ÷ zijn even sterk — welke kant begin je dan?",
          "Je bent nog niet klaar — er staat nog een ÷ 2.",
          "Waar is de ÷ 6 gebleven?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Links → rechts",
              tekst: "36 ÷ 6 = 6. Dan 6 ÷ 2 = 3.",
            },
          ],
          woorden: [
            {
              woord: "even sterk",
              uitleg: "Bij twee keer ÷ ga je van links naar rechts.",
            },
          ],
          theorie: "× en ÷ zijn even sterk: doe ze van links naar rechts.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "36 ÷ 6 ÷ 2 = 6 ÷ 2 = 3.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet rechts beginnen",
              uitleg: "36 ÷ (6 ÷ 2) = 36 ÷ 3 = 12 is fout.",
            },
          ],
          niveaus: {
            basis: "3.",
            simpeler: "Eerst 36 ÷ 6 = 6. Dan 6 ÷ 2 = 3.",
            nogSimpeler: "3",
          },
        },
      },
      {
        q: "**15 − 4 + 6** = ?",
        options: ["17", "5", "25", "11"],
        answer: 0,
        wrongHints: [
          null,
          "Begon je met 4 + 6? + en − zijn even sterk — welke kant begin je?",
          "Kijk goed: staat er overal een plus?",
          "Je bent nog niet klaar — er moet nog iets bij.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Links → rechts",
              tekst: "15 − 4 = 11. Dan 11 + 6 = 17.",
            },
          ],
          woorden: [
            {
              woord: "even sterk",
              uitleg: "+ en − doe je van links naar rechts.",
            },
          ],
          theorie: "+ en − zijn even sterk: gewoon van links naar rechts.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "15 − 4 + 6 = 11 + 6 = 17.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet eerst +",
              uitleg: "15 − (4 + 6) = 5 is fout.",
            },
          ],
          niveaus: {
            basis: "17.",
            simpeler: "15 − 4 = 11. Dan + 6 = 17.",
            nogSimpeler: "17",
          },
        },
      },
      {
        q: "**24 − 12 ÷ 4 × 2** = ?",
        options: ["18", "6", "21", "3"],
        answer: 0,
        wrongHints: [
          null,
          "Begon je met 24 − 12? Welke bewerkingen zijn sterker?",
          "Je bent de × 2 vergeten.",
          "Dat is maar een tussenstap — de 24 doet ook mee.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "÷ en × eerst",
              tekst: "12 ÷ 4 = 3, 3 × 2 = 6. Dan 24 − 6 = 18.",
            },
          ],
          woorden: [
            {
              woord: "links → rechts",
              uitleg: "÷ en × zijn even sterk: van links naar rechts.",
            },
          ],
          theorie: "Eerst alle × en ÷ (links → rechts), daarna + en −.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "24 − 12÷4×2 = 24 − 3×2 = 24 − 6 = 18.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet 24 − 12 eerst",
              uitleg: "De − is zwakker. Die komt als laatste.",
            },
          ],
          niveaus: {
            basis: "18.",
            simpeler: "12÷4 = 3. 3×2 = 6. 24 − 6 = 18.",
            nogSimpeler: "18",
          },
        },
      },
      {
        q: "Welke som heeft als uitkomst **20**?",
        options: ["2 + 6 × 3", "2 × 6 + 3", "6 + 2 × 3", "6 × 3 − 2"],
        answer: 0,
        wrongHints: [
          null,
          "Reken elke som uit met × eerst.",
          "Reken elke som uit met × eerst — niet van links naar rechts.",
          "Kijk goed naar het teken aan het eind.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "× eerst bij elke som",
              tekst: "2 + 6×3 = 2 + 18 = 20.",
            },
          ],
          woorden: [
            {
              woord: "controleren",
              uitleg: "Elke som apart uitrekenen.",
            },
          ],
          theorie: "Gebruik bij elke som de regel: × vóór + en −.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 × 6 + 3 = 15. 6 + 2 × 3 = 12. 6 × 3 − 2 = 16. 2 + 6 × 3 = 20.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Valkuil",
              uitleg: "6 + 2 × 3 van links naar rechts geeft 24, maar het is 12.",
            },
          ],
          niveaus: {
            basis: "2 + 6 × 3.",
            simpeler: "6 × 3 = 18. 18 + 2 = 20.",
            nogSimpeler: "2 + 6 × 3",
          },
        },
      },
      {
        q: "**3 × 8 − 10 ÷ 2** = ?",
        options: ["19", "7", "14", "5"],
        answer: 0,
        wrongHints: [
          null,
          "Rekende je van links naar rechts? De ÷ gaat vóór de −.",
          "Je bent de ÷ 2 vergeten.",
          "Dat is alleen het tweede stukje — waar is 3 × 8?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Beide sterke stukjes eerst",
              tekst: "3 × 8 = 24, 10 ÷ 2 = 5. Dan 24 − 5 = 19.",
            },
          ],
          woorden: [
            {
              woord: "sterke stukjes",
              uitleg: "× en ÷ eerst uitrekenen.",
            },
          ],
          theorie: "Reken eerst alle × en ÷ uit, daarna pas de −.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3×8 − 10÷2 = 24 − 5 = 19.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet (24 − 10) ÷ 2",
              uitleg: "Er staan geen haakjes. ÷ gaat vóór −.",
            },
          ],
          niveaus: {
            basis: "19.",
            simpeler: "3×8 = 24. 10÷2 = 5. 24 − 5 = 19.",
            nogSimpeler: "19",
          },
        },
      },
    ],
  },
  {
    title: "Haakjes — de baas boven alles",
    explanation: "**Haakjes ( )** kunnen de volgorde **veranderen**.\n\nWat tussen haakjes staat, doe je **EERST** — vóór alles anders!\n\n**Vergelijk**:\n\n*Zonder haakjes*:\n**2 + 3 × 4** = 2 + 12 = **14** *(× eerst)*\n\n*Met haakjes*:\n**(2 + 3) × 4** = 5 × 4 = **20** *(haakjes eerst)*\n\nDe haakjes **forceren** dat 2 + 3 als eerste berekend wordt.\n\n**Voorbeelden**:\n\n**Voorbeeld 1**: (4 + 6) × 3\n• Eerst haakjes: 4 + 6 = 10\n• Dan ×: 10 × 3 = **30**\n\n**Voorbeeld 2**: 8 × (5 − 2)\n• Eerst haakjes: 5 − 2 = 3\n• Dan ×: 8 × 3 = **24**\n\n**Voorbeeld 3**: (10 + 5) ÷ (1 + 2)\n• Eerst beide haakjes: (15) ÷ (3)\n• Dan ÷: 15 ÷ 3 = **5**\n\n**Geneste haakjes** *(haakjes binnen haakjes)*:\n\n**Voorbeeld**: 3 × ((4 + 2) − 1)\n• Eerst de **binnenste** haakjes: 4 + 2 = 6\n• Dan de **buitenste** haakjes: 6 − 1 = 5\n• Tot slot ×: 3 × 5 = **15**\n\nWerk van **binnen** naar **buiten**.\n\n**Wanneer gebruik je haakjes?**\n• Om volgorde te forceren: '(2+3)×4' ipv '2+3×4'.\n• Voor duidelijkheid: soms ook als het niet nodig is.\n• In wiskunde-formules constant: omtrek = 2(l + b).\n\n**Pas op bij delen**:\n• 12 ÷ (4 + 2) = 12 ÷ 6 = 2\n• 12 ÷ 4 + 2 = 3 + 2 = 5 (geheel anders!)\n\nHaakjes maken het verschil.",
    svg: uitwerkingSvg([
      { expr: "(2 + 3) × 4", uitleg: "Eerst haakjes" },
      { expr: "= 5 × 4", uitleg: "Nu de ×" },
      { expr: "= 20", uitleg: "Klaar!" },
    ]),
    checks: [
      {
        q: "**(4 + 6) × 3** = ?",
        options: ["30","22","18","13"],
        answer: 0,
        wrongHints: [null,"Niet 4+6×3 — er staan haakjes, doe die eerst!","Te weinig — heb je de haakjes wel als eerste gedaan?","Te weinig — heb je de haakjes wel als eerste gedaan?"],
        uitlegPad: {
          stappen: [{ titel: "Haakjes eerst", tekst: "(4+6)=10. Dan ×3=30." }],
          woorden: [{ woord: "haakjes", uitleg: "Forceren volgorde: ALTIJD eerst." }],
          theorie: "Haakjes = baas. Negeren volgorde-regel als nodig.",
          voorbeelden: [{ type: "vergelijk", tekst: "Zonder haakjes: 4+6×3 = 4+18 = 22. Met haakjes: (4+6)×3 = 30." }],
          basiskennis: [{ onderwerp: "Verschil", uitleg: "Haakjes maken altijd verschil. Lees zorgvuldig." }],
          niveaus: { basis: "30.", simpeler: "Haakjes eerst: 4+6=10. Dan ×3=30.", nogSimpeler: "30" },
        },
      },
      {
        q: "**3 × (4 + 2) − 1** = ?",
        options: ["17","11","9","21"],
        answer: 0,
        wrongHints: [null,"Werk van binnen naar buiten: doe eerst de haakjes, dan ×, dan −.","Heb je de haakjes als eerste gedaan?","Heb je de × en − in de juiste volgorde gedaan?"],
        uitlegPad: {
          stappen: [{ titel: "Volgorde HMVDOA", tekst: "Haakjes: 4+2=6. ×: 3×6=18. −: 18-1=17." }],
          woorden: [{ woord: "stappenplan", uitleg: "Haakjes → × → −. Strikt deze volgorde." }],
          theorie: "Volgorde: 1) haakjes, 2) ×, 3) − (gewoon van links naar rechts bij gelijke prioriteit).",
          voorbeelden: [{ type: "stap", tekst: "3×(4+2)-1 → 3×6-1 → 18-1 = 17." }],
          basiskennis: [{ onderwerp: "Niet 3×(4+2-1)", uitleg: "−1 hoort niet bij haakjes." }],
          niveaus: { basis: "17.", simpeler: "(4+2)=6. 3×6=18. 18-1=17.", nogSimpeler: "17" },
        },
      },
      {
        q: "Wat doe je bij **haakjes binnen haakjes**?",
        options: ["Eerst binnenste, dan buitenste","Eerst buitenste","Maakt niet uit","Negeren"],
        answer: 0,
        wrongHints: [null,"Andersom — van binnen naar buiten.","Wel uit — verschillende antwoorden mogelijk.","Niet negeren."],
        uitlegPad: {
          stappen: [{ titel: "Binnen → buiten", tekst: "Bij geneste haakjes: eerst de binnenste, dan buitenste." }],
          woorden: [{ woord: "geneste haakjes", uitleg: "Haakjes binnen haakjes: ((...)...)." }],
          theorie: "Werk-richting: van binnen naar buiten (meest diepe eerst).",
          voorbeelden: [{ type: "stap", tekst: "((2+3)×4) → eerst (2+3)=5 → dan (5×4)=20." }],
          basiskennis: [{ onderwerp: "Logica", uitleg: "Binnenste haakjes maken klaar voor buitenste." }],
          niveaus: { basis: "Binnenste eerst.", simpeler: "Bij haakjes-in-haakjes: doe altijd eerst de binnenste, daarna buitenste.", nogSimpeler: "Binnen" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke som past bij: **'tel eerst 5 en 3 op, en doe dat dan keer 4'**?",
        options: ["(5 + 3) × 4", "5 + 3 × 4", "5 + (3 × 4)", "5 × 4 + 3"],
        answer: 0,
        wrongHints: [
          null,
          "Als je niets doet, welke bewerking gaat dan eerst: + of ×?",
          "Wat staat hier tussen de haakjes: de optelling of de keer?",
          "Wordt hier eerst opgeteld?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Haakjes om de +",
              tekst: "Het optellen moet eerst. Daarom zet je haakjes om 5 + 3: (5 + 3) × 4 = 8 × 4 = 32.",
            },
          ],
          woorden: [
            {
              woord: "haakjes",
              uitleg: "Wat tussen haakjes staat, doe je eerst.",
            },
          ],
          theorie: "Haakjes forceren de volgorde. Zonder haakjes gaat × vóór +.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "(5 + 3) × 4 = 32. Maar 5 + 3 × 4 = 5 + 12 = 17.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Waarom haakjes?",
              uitleg: "Zonder haakjes zou je eerst 3 × 4 doen.",
            },
          ],
          niveaus: {
            basis: "(5 + 3) × 4.",
            simpeler: "Eerst optellen? Dan haakjes om 5 + 3.",
            nogSimpeler: "(5 + 3) × 4",
          },
        },
      },
      {
        q: "Bij welke som maken de haakjes **niets uit**? (Zonder haakjes komt er hetzelfde uit.)",
        options: ["2 + (3 × 4)", "(2 + 3) × 4", "(10 − 4) ÷ 2", "(6 + 2) × 5"],
        answer: 0,
        wrongHints: [
          null,
          "Reken de som uit met én zonder haakjes. Is het hetzelfde?",
          "Reken de som uit met én zonder haakjes. Is het hetzelfde?",
          "Reken de som uit met én zonder haakjes. Is het hetzelfde?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vergelijk",
              tekst: "2 + (3 × 4) = 14. Zonder haakjes: 2 + 3 × 4 = 14. Hetzelfde!",
            },
          ],
          woorden: [
            {
              woord: "haakjes voor duidelijkheid",
              uitleg: "Soms staan er haakjes die niet nodig zijn.",
            },
          ],
          theorie: "Haakjes om iets dat toch al eerst gaat (zoals ×), veranderen niets.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "(2 + 3) × 4 = 20, maar 2 + 3 × 4 = 14. Daar maken de haakjes wél verschil.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "× gaat al eerst",
              uitleg: "Haakjes om een ×-som zijn dus niet nodig.",
            },
          ],
          niveaus: {
            basis: "2 + (3 × 4).",
            simpeler: "De × gaat toch al eerst. De haakjes veranderen dus niets: het blijft 14.",
            nogSimpeler: "2 + (3 × 4)",
          },
        },
      },
      {
        q: "**(12 − 4) ÷ (1 + 3)** = ?",
        options: ["2", "11", "8", "4"],
        answer: 0,
        wrongHints: [
          null,
          "Dat krijg je als je de haakjes vergeet.",
          "Je hebt alleen de eerste haakjes uitgerekend.",
          "Je hebt alleen de tweede haakjes uitgerekend.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Beide haakjes eerst",
              tekst: "12 − 4 = 8 en 1 + 3 = 4. Dan 8 ÷ 4 = 2.",
            },
          ],
          woorden: [
            {
              woord: "twee haakjes",
              uitleg: "Reken eerst allebei de haakjes uit.",
            },
          ],
          theorie: "Staan er twee paar haakjes? Reken ze allebei eerst uit.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "(12 − 4) ÷ (1 + 3) = 8 ÷ 4 = 2.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet zonder haakjes",
              uitleg: "12 − 4 ÷ 1 + 3 = 11 is een heel andere som.",
            },
          ],
          niveaus: {
            basis: "2.",
            simpeler: "8 ÷ 4 = 2.",
            nogSimpeler: "2",
          },
        },
      },
      {
        q: "**20 − (2 × (3 + 4))** = ?",
        options: ["6", "10", "13", "14"],
        answer: 0,
        wrongHints: [
          null,
          "Begon je met 2 × 3? Welke haakjes zitten het diepst?",
          "Waar is de × 2 gebleven?",
          "Je bent nog niet klaar — de 20 doet ook mee.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Binnen → buiten",
              tekst: "Binnenste: 3 + 4 = 7. Buitenste: 2 × 7 = 14. Dan 20 − 14 = 6.",
            },
          ],
          woorden: [
            {
              woord: "geneste haakjes",
              uitleg: "Haakjes binnen haakjes.",
            },
          ],
          theorie: "Werk van binnen naar buiten.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "20 − (2 × (3 + 4)) = 20 − (2 × 7) = 20 − 14 = 6.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Binnenste eerst",
              uitleg: "Eerst 3 + 4, pas dan × 2.",
            },
          ],
          niveaus: {
            basis: "6.",
            simpeler: "3 + 4 = 7. 2 × 7 = 14. 20 − 14 = 6.",
            nogSimpeler: "6",
          },
        },
      },
      {
        q: "Wat reken je als **eerste** uit bij **4 × (10 − (2 + 5))**?",
        options: ["2 + 5", "10 − 2", "4 × 10", "10 − 5"],
        answer: 0,
        wrongHints: [
          null,
          "Welke haakjes zitten het meest naar binnen?",
          "Welke haakjes zitten het meest naar binnen?",
          "Welke haakjes zitten het meest naar binnen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Binnenste haakjes",
              tekst: "Eerst 2 + 5 = 7. Dan 10 − 7 = 3. Dan 4 × 3 = 12.",
            },
          ],
          woorden: [
            {
              woord: "binnenste haakjes",
              uitleg: "De haakjes die in andere haakjes staan.",
            },
          ],
          theorie: "Bij haakjes binnen haakjes: van binnen naar buiten.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 × (10 − (2 + 5)) = 4 × (10 − 7) = 4 × 3 = 12.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Binnen → buiten",
              uitleg: "Net als bij een ui: eerst het hart.",
            },
          ],
          niveaus: {
            basis: "2 + 5.",
            simpeler: "De binnenste haakjes eerst: 2 + 5.",
            nogSimpeler: "2 + 5",
          },
        },
      },
    ],
  },
  {
    title: "Machten (kwadraten) komen na haakjes",
    explanation: "Een **macht** is een afkorting voor herhaaldelijk vermenigvuldigen.\n\n**Voorbeelden**:\n• **3²** = 3 × 3 = **9** *(uitspraak: 'drie kwadraat' of 'drie tot de tweede macht')*\n• **2³** = 2 × 2 × 2 = **8** *(uitspraak: 'twee tot de derde macht')*\n• **5²** = 5 × 5 = **25**\n• **10²** = 10 × 10 = **100**\n• **10³** = 10 × 10 × 10 = **1.000**\n\n**De macht** zegt hoe vaak je het grondtal met zichzelf vermenigvuldigt. **3² = 3 × 3** (twee keer 3, dus 'tot de tweede').\n\n**Volgorde-regel met machten**:\n\nMachten komen **NA haakjes** maar **VOOR × en ÷ en + en −**.\n\nDus:\n1. **Haakjes**\n2. **Machten** ← deze stap\n3. × en ÷\n4. + en −\n\n**Voorbeelden**:\n\n**Voorbeeld 1**: 5 + 3²\n• Eerst macht: 3² = 9\n• Dan +: 5 + 9 = **14**\n\n**Voorbeeld 2**: 4 × 2² + 1\n• Eerst macht: 2² = 4\n• Dan ×: 4 × 4 = 16\n• Dan +: 16 + 1 = **17**\n\n**Voorbeeld 3**: (3 + 2)² − 5\n• Eerst haakjes: 3 + 2 = 5\n• Dan macht: 5² = 25\n• Dan −: 25 − 5 = **20**\n\n**Belangrijk**: machten zijn niet hetzelfde als gewone vermenigvuldiging.\n• 3² = 3 × 3 = 9 (NIET 3 × 2 = 6!)\n• 2³ = 2 × 2 × 2 = 8 (NIET 2 × 3 = 6!)\n\nDe **kleine 2** of **kleine 3** zegt **hoe vaak** je vermenigvuldigt.\n\n**Speciale machten**:\n• **n¹** = n (zelf): 5¹ = 5\n• **n⁰** = 1 (altijd!): 7⁰ = 1, 100⁰ = 1\n• **0² = 0**: 0 × 0 = 0\n\n**Trucje om machten te oefenen**:\nLeer **machten van 2** uit het hoofd: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024.\n\nMachten van 10 zijn handig voor wetenschappelijk schrijven: 10² = 100, 10³ = 1.000, 10⁶ = 1.000.000 (1 miljoen).",
    svg: uitwerkingSvg([
      { expr: "5 + 3²", uitleg: "Eerst de macht: 3² = 9" },
      { expr: "= 5 + 9", uitleg: "Nu het optellen" },
      { expr: "= 14", uitleg: "Klaar!" },
    ]),
    checks: [
      {
        q: "**3²** = ?",
        options: ["9","6","5","12"],
        answer: 0,
        wrongHints: [null,"Niet 3×2 — een macht is herhaald vermenigvuldigen.","Niet 3+2 — een macht is geen optelling.","Het kleine getal zegt hoe vaak je het grote getal met zichzelf vermenigvuldigt."],
        uitlegPad: {
          stappen: [{ titel: "3×3 = 9", tekst: "3² = 3 keer met zichzelf vermenigvuldigd = 3×3 = 9." }],
          woorden: [{ woord: "kwadraat", uitleg: "x² = x maal x. 'Tot de tweede macht'." }],
          theorie: "Macht: kleine getal zegt HOE VAAK je vermenigvuldigt. 3² = 2 keer 3 vermenigvuldigen.",
          voorbeelden: [{ type: "tabel", tekst: "2²=4. 3²=9. 4²=16. 5²=25. 10²=100." }],
          basiskennis: [{ onderwerp: "Niet 3×2", uitleg: "3² ≠ 3×2 = 6. Macht = het getal met zichzelf vermenigvuldigen." }],
          niveaus: { basis: "9.", simpeler: "3² = 3×3 = 9 (NIET 3+3 of 3×2).", nogSimpeler: "9" },
        },
      },
      {
        q: "**2³** = ?",
        options: ["8","6","9","16"],
        answer: 0,
        wrongHints: [null,"Niet 2×3 — een macht is herhaald vermenigvuldigen.","Dat is 3², niet 2³.","Dat is 2⁴, één keer te veel."],
        uitlegPad: {
          stappen: [{ titel: "2×2×2 = 8", tekst: "2³ = 3 keer 2 vermenigvuldigen = 2×2×2 = 8." }],
          woorden: [{ woord: "tot de derde macht", uitleg: "x³ = x × x × x." }],
          theorie: "Machten van 2 onthouden: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2¹⁰=1024.",
          voorbeelden: [{ type: "tabel", tekst: "2³ = 2×2×2 = 8. 2⁴ = 2×2×2×2 = 16. 2⁵ = 32." }],
          basiskennis: [{ onderwerp: "Onthouden", uitleg: "Machten van 2 zijn handig (computer-wereld!): 1,2,4,8,16,32,64..." }],
          niveaus: { basis: "8.", simpeler: "2³ = 2×2×2 = 4×2 = 8.", nogSimpeler: "8" },
        },
      },
      {
        q: "**4 + 5²** = ?",
        options: ["29","81","20","9"],
        answer: 0,
        wrongHints: [null,"Dat zou je krijgen als er haakjes stonden — maar er zijn geen haakjes, dus de volgorde is anders.","Doe eerst de macht, dan pas +.","Doe eerst de macht, dan pas +."],
        uitlegPad: {
          stappen: [{ titel: "Macht eerst", tekst: "5² = 25. Dan +: 4+25 = 29." }],
          woorden: [{ woord: "macht eerst", uitleg: "Machten gaan vóór + en − en × en ÷." }],
          theorie: "HMVDOA: H-M-V-D-O-A. Macht (M) komt op nr 2 — vóór alles behalve haakjes.",
          voorbeelden: [{ type: "stap", tekst: "4 + 5² = 4 + 25 = 29. (Niet (4+5)² = 81 — geen haakjes)." }],
          basiskennis: [{ onderwerp: "Niet 9² of 9×2", uitleg: "Eerst macht apart uitrekenen, dan optellen." }],
          niveaus: { basis: "29.", simpeler: "5² = 25 (eerst). Dan 4+25 = 29.", nogSimpeler: "29" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**10³** = ?",
        options: ["1.000", "30", "100", "13"],
        answer: 0,
        wrongHints: [
          null,
          "Een macht is geen gewone keer-som met het kleine getal.",
          "Dat is 10², niet 10³ — hoe vaak moet de 10 meedoen?",
          "Een macht is geen optelling.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "10 × 10 × 10",
              tekst: "10³ = 10 × 10 × 10 = 100 × 10 = 1.000.",
            },
          ],
          woorden: [
            {
              woord: "tot de derde macht",
              uitleg: "Drie keer het getal met zichzelf vermenigvuldigen.",
            },
          ],
          theorie: "De kleine 3 zegt: drie keer de 10 in de keersom.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "10² = 100. 10³ = 1.000.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Nullen tellen",
              uitleg: "10³ heeft 3 nullen: 1.000.",
            },
          ],
          niveaus: {
            basis: "1.000.",
            simpeler: "10 × 10 = 100. 100 × 10 = 1.000.",
            nogSimpeler: "1.000",
          },
        },
      },
      {
        q: "Wat betekent **2⁴**?",
        options: ["2 × 2 × 2 × 2", "2 × 4", "2 + 2 + 2 + 2", "4 + 4"],
        answer: 0,
        wrongHints: [
          null,
          "Een macht is herhaald vermenigvuldigen, niet één keer.",
          "Een macht is vermenigvuldigen, geen optellen.",
          "Welk getal wordt hier herhaald: de 2 of de 4?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vier keer de 2",
              tekst: "2⁴ = 2 × 2 × 2 × 2 = 16.",
            },
          ],
          woorden: [
            {
              woord: "macht",
              uitleg: "Herhaald vermenigvuldigen. Het kleine getal zegt hoe vaak.",
            },
          ],
          theorie: "Het grote getal wordt vermenigvuldigd. Het kleine getal zegt hoe vaak.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2⁴ = 2 × 2 × 2 × 2 = 4 × 2 × 2 = 8 × 2 = 16.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Machten van 2",
              uitleg: "2, 4, 8, 16, 32 …",
            },
          ],
          niveaus: {
            basis: "2 × 2 × 2 × 2.",
            simpeler: "De 2 staat er 4 keer, met ×-tekens ertussen.",
            nogSimpeler: "2×2×2×2",
          },
        },
      },
      {
        q: "**30 − 4²** = ?",
        options: ["14", "22", "26", "16"],
        answer: 0,
        wrongHints: [
          null,
          "Is 4² hetzelfde als 4 × 2?",
          "Waar is de macht gebleven?",
          "Dat is alleen de macht — de 30 doet ook mee.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Macht eerst",
              tekst: "4² = 4 × 4 = 16. Dan 30 − 16 = 14.",
            },
          ],
          woorden: [
            {
              woord: "macht vóór −",
              uitleg: "Machten gaan vóór + en −.",
            },
          ],
          theorie: "Volgorde: haakjes, machten, × en ÷, + en −.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "30 − 4² = 30 − 16 = 14.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet 4 × 2",
              uitleg: "4² = 16, niet 8.",
            },
          ],
          niveaus: {
            basis: "14.",
            simpeler: "4² = 16. 30 − 16 = 14.",
            nogSimpeler: "14",
          },
        },
      },
      {
        q: "Een vierkant plein is **7 tegels lang** en **7 tegels breed**. Hoeveel tegels liggen er, en welke macht hoort erbij?",
        options: ["7² = 49", "7² = 14", "7³ = 49", "7 × 2 = 49"],
        answer: 0,
        wrongHints: [
          null,
          "Is 7² hetzelfde als 7 + 7?",
          "Hoe vaak staat de 7 in 7 × 7?",
          "Klopt die keersom wel?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Lengte × breedte",
              tekst: "7 rijen van 7 tegels: 7 × 7 = 49. Korter: 7².",
            },
          ],
          woorden: [
            {
              woord: "kwadraat",
              uitleg: "Een getal keer zichzelf. Past bij een vierkant!",
            },
          ],
          theorie: "Bij een vierkant zijn lengte en breedte gelijk. Daarom heet 7² ook '7 kwadraat'.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "7² = 7 × 7 = 49.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet 7 × 2",
              uitleg: "7 × 2 = 14, dat is geen 7².",
            },
          ],
          niveaus: {
            basis: "7² = 49.",
            simpeler: "7 × 7 = 49 tegels. Dat is 7².",
            nogSimpeler: "49",
          },
        },
      },
      {
        q: "Welke macht heeft de **grootste** uitkomst?",
        options: ["3²", "2³", "4¹", "1⁵"],
        answer: 0,
        wrongHints: [
          null,
          "Reken elke macht uit: hoe vaak vermenigvuldig je het grote getal?",
          "Wat is een getal tot de eerste macht?",
          "Wat is 1 × 1 × 1 × 1 × 1?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Uitrekenen",
              tekst: "3² = 9. 2³ = 8. 4¹ = 4. 1⁵ = 1. De grootste is 3².",
            },
          ],
          woorden: [
            {
              woord: "macht",
              uitleg: "Het kleine getal zegt hoe vaak je vermenigvuldigt.",
            },
          ],
          theorie: "Reken machten altijd echt uit. Kijk niet alleen naar het kleine getal.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3² = 3 × 3 = 9 en 2³ = 2 × 2 × 2 = 8. Dus 3² is groter.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "n¹",
              uitleg: "Een getal tot de eerste macht is het getal zelf: 4¹ = 4.",
            },
          ],
          niveaus: {
            basis: "3².",
            simpeler: "3² = 9 is meer dan 2³ = 8.",
            nogSimpeler: "3²",
          },
        },
      },
    ],
  },
  {
    title: "De volledige volgorde — alles samen",
    explanation: "**Volledige volgorde** *(één-voor-één)*:\n\n1. **Haakjes** ( ) eerst — van binnen naar buiten\n2. **Machten** (zoals 3²)\n3. **× en ÷** *(samen, van links naar rechts)*\n4. **+ en −** *(samen, van links naar rechts)*\n\n**Ezelsbruggetjes Nederlands**:\n• **HMVDOA** (Haakjes Machten Vermenigvuldigen Delen Optellen Aftrekken)\n• **'Hoe Moeten Wij Van De Onvoldoendes Afkomen?'** (W = worteltrekken)\n\n**Engels** *(soms gebruikt)*:\n• **PEMDAS** (Parentheses Exponents Multiplication Division Addition Subtraction)\n• 'Please Excuse My Dear Aunt Sally'\n\n**Voorbeeld met alles**: 2 × (3 + 1)² − 4 ÷ 2\n• **1. Haakjes**: 3 + 1 = 4\n• Som wordt: 2 × 4² − 4 ÷ 2\n• **2. Machten**: 4² = 16\n• Som wordt: 2 × 16 − 4 ÷ 2\n• **3. × en ÷** (van links naar rechts): 2 × 16 = 32, en 4 ÷ 2 = 2\n• Som wordt: 32 − 2\n• **4. + en −**: 32 − 2 = **30**\n\n**Pas op**:\n\n**Veelvoorkomende fout 1**: aftrekken vóór delen\n• \"10 − 6 ÷ 2\" → kinderen doen vaak (10−6) ÷ 2 = 2. Fout! ÷ eerst: 10 − 3 = **7**.\n\n**Veelvoorkomende fout 2**: machten als gewone ×\n• 3² = 9, niet 6. Wees alert.\n\n**Veelvoorkomende fout 3**: alles van links naar rechts\n• \"5 + 3 × 2\" wordt 16 ipv 11. Onthoud: × is sterker!\n\n**Trucje om rustig te werken**:\nSchrijf **elke stap apart op**, zodat je niet door elkaar haalt:\n```\n2 + 3 × 4\n= 2 + 12\n= 14\n```\n\nNet zoals een kookrecept: één stap tegelijk.",
    svg: volgordeSvg(),
    checks: [
      {
        q: "**8 − 4 ÷ 2 + 1** = ?",
        options: ["7","3","5","9"],
        answer: 0,
        wrongHints: [null,"Rekende je van links naar rechts? De ÷ is sterker dan − en gaat éérst.","Na de deling ga je van links naar rechts verder — trek je eerst af, of tel je eerst op?","Kijk nog eens goed naar de tekens: waar staat de − en waar de +?"],
        uitlegPad: {
          stappen: [{ titel: "÷ → − → +", tekst: "÷ eerst: 4÷2=2. Som: 8-2+1. − en + links→rechts: 8-2=6, 6+1=7." }],
          woorden: [{ woord: "links→rechts", uitleg: "Bij gelijke prioriteit (+ en −): van links naar rechts." }],
          theorie: "Volgorde: ÷ vóór + en −. Daarna + en − op volgorde van links naar rechts.",
          voorbeelden: [{ type: "stap", tekst: "8 − 4÷2 + 1 = 8 − 2 + 1 = 6 + 1 = 7." }],
          basiskennis: [{ onderwerp: "Niet (8-4)÷2+1", uitleg: "Geen haakjes — ÷ eerst, dan rest." }],
          niveaus: { basis: "7.", simpeler: "÷ eerst: 4÷2=2. Som = 8-2+1 = 7.", nogSimpeler: "7" },
        },
      },
      {
        q: "**(2 + 3)² − 5** = ?",
        options: ["20","22","11","17"],
        answer: 0,
        wrongHints: [null,"Doe éérst de haakjes (2+3) en zet de macht daarná op die uitkomst.","De ² staat óp de haakjes — dus niet alleen de 3 kwadrateren.","Haakjes en macht lijken goed — check de aftrekking aan het eind nog eens."],
        uitlegPad: {
          stappen: [{ titel: "H → M → −", tekst: "Haakjes: 2+3=5. Macht: 5²=25. −: 25-5=20." }],
          woorden: [{ woord: "haakjes met macht", uitleg: "Eerst haakjes invullen, dan kwadraat van resultaat." }],
          theorie: "(a+b)² = bereken eerst (a+b), dan kwadraat. NIET a²+b²!",
          voorbeelden: [{ type: "stap", tekst: "(2+3)² = 5² = 25. NIET 4+9=13." }],
          basiskennis: [{ onderwerp: "Veelfout", uitleg: "Veel leerlingen denken (a+b)² = a²+b². Fout. Eerst haakjes." }],
          niveaus: { basis: "20.", simpeler: "Haakjes 2+3=5. Macht 5²=25. -5 = 20.", nogSimpeler: "20" },
        },
      },
      {
        q: "**3 × 2² + 4** = ?",
        options: ["16","24","28","12"],
        answer: 0,
        wrongHints: [null,"Dat zou je krijgen als er haakjes om 2²+4 stonden — maar er zijn geen haakjes.","Doe eerst de macht, dan ×, dan +.","Vergeet de + 4 aan het eind niet."],
        uitlegPad: {
          stappen: [{ titel: "M → × → +", tekst: "Macht eerst: 2²=4. ×: 3×4=12. +: 12+4=16." }],
          woorden: [{ woord: "macht ≠ vermenigvuldiging", uitleg: "Macht (2²) en × (3×2) zijn verschillend." }],
          theorie: "Macht heeft hogere prioriteit dan ×. Dus 3×2² = 3×(2²) = 3×4 = 12.",
          voorbeelden: [{ type: "stap", tekst: "3×2²+4 = 3×4+4 = 12+4 = 16." }],
          basiskennis: [{ onderwerp: "Niet (3×2)²", uitleg: "Geen haakjes om 3×2 — macht hangt alleen aan 2." }],
          niveaus: { basis: "16.", simpeler: "2² eerst = 4. 3×4 = 12. +4 = 16.", nogSimpeler: "16" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat doe je als **derde** in de volgorde?",
        options: ["× en ÷", "Machten", "Haakjes", "+ en −"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg het rijtje hardop: haakjes, machten, … — wat komt er op plek drie?",
          "Zeg het rijtje hardop: haakjes, machten, … — wat komt er op plek drie?",
          "Zeg het rijtje hardop: haakjes, machten, … — wat komt er op plek drie?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Rijtje",
              tekst: "1 haakjes, 2 machten, 3 × en ÷, 4 + en −.",
            },
          ],
          woorden: [
            {
              woord: "HMVDOA",
              uitleg: "Haakjes, Machten, Vermenigvuldigen, Delen, Optellen, Aftrekken.",
            },
          ],
          theorie: "V en D (× en ÷) horen samen op plek 3.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 × 4² − 4 ÷ 2: haakjes (geen), macht 16, dan × en ÷: 32 en 2, dan −: 30.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Ezelsbruggetje",
              uitleg: "HMVDOA.",
            },
          ],
          niveaus: {
            basis: "× en ÷.",
            simpeler: "Haakjes, machten, dan × en ÷.",
            nogSimpeler: "× en ÷",
          },
        },
      },
      {
        q: "**10 + 2 × 3²** = ?",
        options: ["28", "108", "46", "22"],
        answer: 0,
        wrongHints: [
          null,
          "Rekende je eerst 10 + 2? Welke bewerkingen gaan vóór +?",
          "Hoort de ² bij alleen de 3, of bij 2 × 3?",
          "Is 3² hetzelfde als 3 × 2?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "M → × → +",
              tekst: "3² = 9. 2 × 9 = 18. 10 + 18 = 28.",
            },
          ],
          woorden: [
            {
              woord: "macht eerst",
              uitleg: "De ² hoort alleen bij de 3.",
            },
          ],
          theorie: "Volgorde: machten, dan ×, dan +.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "10 + 2 × 3² = 10 + 2 × 9 = 10 + 18 = 28.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet (2 × 3)²",
              uitleg: "Er staan geen haakjes om 2 × 3.",
            },
          ],
          niveaus: {
            basis: "28.",
            simpeler: "3² = 9. 2 × 9 = 18. 10 + 18 = 28.",
            nogSimpeler: "28",
          },
        },
      },
      {
        q: "**(9 + 3) ÷ 4 − 1** = ?",
        options: ["2", "4", "3", "11"],
        answer: 0,
        wrongHints: [
          null,
          "Je deelde door (4 − 1) — maar daar staan geen haakjes omheen.",
          "Je bent de − 1 vergeten.",
          "Waar is de ÷ 4 gebleven?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "H → ÷ → −",
              tekst: "9 + 3 = 12. 12 ÷ 4 = 3. 3 − 1 = 2.",
            },
          ],
          woorden: [
            {
              woord: "haakjes eerst",
              uitleg: "Wat tussen haakjes staat, eerst.",
            },
          ],
          theorie: "Haakjes, dan ÷, dan −.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "(9 + 3) ÷ 4 − 1 = 12 ÷ 4 − 1 = 3 − 1 = 2.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alleen (9 + 3)",
              uitleg: "De haakjes staan alleen om 9 + 3.",
            },
          ],
          niveaus: {
            basis: "2.",
            simpeler: "12 ÷ 4 = 3. 3 − 1 = 2.",
            nogSimpeler: "2",
          },
        },
      },
      {
        q: "Bij **5 + 2 × (6 − 1)²** reken je eerst de haakjes uit: 6 − 1 = 5. Wat doe je **daarna**?",
        options: ["5² uitrekenen", "2 × 5 uitrekenen", "5 + 2 uitrekenen", "5 + 5 uitrekenen"],
        answer: 0,
        wrongHints: [
          null,
          "Wat komt na de haakjes in het rijtje H-M-V-D-O-A?",
          "Wat komt na de haakjes in het rijtje H-M-V-D-O-A?",
          "Wat komt na de haakjes in het rijtje H-M-V-D-O-A?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Na H komt M",
              tekst: "Haakjes: 5. Dan de macht: 5² = 25. Dan × : 2 × 25 = 50. Dan +: 5 + 50 = 55.",
            },
          ],
          woorden: [
            {
              woord: "volgorde",
              uitleg: "Haakjes, machten, × en ÷, + en −.",
            },
          ],
          theorie: "Na de haakjes komen de machten.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "5 + 2 × (6 − 1)² = 5 + 2 × 5² = 5 + 2 × 25 = 5 + 50 = 55.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "De ² staat op de haakjes",
              uitleg: "Dus de uitkomst van de haakjes gaat in het kwadraat.",
            },
          ],
          niveaus: {
            basis: "5² uitrekenen.",
            simpeler: "Na de haakjes komt de macht: 5².",
            nogSimpeler: "5²",
          },
        },
      },
      {
        q: "**4 + 3 × (5 − 3)²** = ?",
        options: ["16", "28", "40", "10"],
        answer: 0,
        wrongHints: [
          null,
          "Rekende je eerst 4 + 3? De + komt als laatste.",
          "Hoort de ² bij 3 × 2, of alleen bij de haakjes?",
          "Je bent de macht vergeten.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "H → M → × → +",
              tekst: "Haakjes: 5 − 3 = 2. Macht: 2² = 4. ×: 3 × 4 = 12. +: 4 + 12 = 16.",
            },
          ],
          woorden: [
            {
              woord: "alles samen",
              uitleg: "Haakjes, machten, × en ÷, + en −.",
            },
          ],
          theorie: "Werk het rijtje HMVDOA stap voor stap af.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 + 3 × (5 − 3)² = 4 + 3 × 4 = 4 + 12 = 16.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schrijf elke stap op",
              uitleg: "Zo vergeet je de macht niet.",
            },
          ],
          niveaus: {
            basis: "16.",
            simpeler: "(5 − 3) = 2. 2² = 4. 3 × 4 = 12. 4 + 12 = 16.",
            nogSimpeler: "16",
          },
        },
      },
      {
        q: "**36 ÷ 3² × 2** = ?",
        options: ["8", "2", "12", "4"],
        answer: 0,
        wrongHints: [
          null,
          "Deelde je door 9 × 2? ÷ en × gaan van links naar rechts.",
          "Is 3² hetzelfde als 3 × 2?",
          "Je bent de × 2 vergeten.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "M → ÷ → ×",
              tekst: "3² = 9. 36 ÷ 9 = 4. 4 × 2 = 8.",
            },
          ],
          woorden: [
            {
              woord: "links → rechts",
              uitleg: "÷ en × zijn even sterk.",
            },
          ],
          theorie: "Eerst de macht, dan ÷ en × van links naar rechts.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "36 ÷ 3² × 2 = 36 ÷ 9 × 2 = 4 × 2 = 8.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet 36 ÷ 18",
              uitleg: "Je deelt eerst door 9, daarna pas × 2.",
            },
          ],
          niveaus: {
            basis: "8.",
            simpeler: "3² = 9. 36 ÷ 9 = 4. 4 × 2 = 8.",
            nogSimpeler: "8",
          },
        },
      },
    ],
  },
  {
    title: "Lastige sommen — combinaties",
    explanation: "Tijd voor wat lastigere sommen waar alle regels samenkomen.\n\n**Voorbeeld 1**: 24 ÷ (2 + 4) × 3\n• Haakjes: 2 + 4 = 6\n• Som wordt: 24 ÷ 6 × 3\n• ÷ en × van links naar rechts: 24 ÷ 6 = 4, 4 × 3 = **12**\n\n**Voorbeeld 2**: 100 − 5 × (3 + 2²)\n• Macht: 2² = 4\n• Haakjes: 3 + 4 = 7\n• Som wordt: 100 − 5 × 7\n• ×: 5 × 7 = 35\n• −: 100 − 35 = **65**\n\n**Voorbeeld 3** (geneste haakjes): 2 × (3 + (4 × 2))\n• Binnenste haakjes: 4 × 2 = 8\n• Buitenste haakjes: 3 + 8 = 11\n• ×: 2 × 11 = **22**\n\n**Voorbeeld 4** (machten + haakjes): (2 + 3)² − (4 − 1)²\n• Beide haakjes: 5 en 3\n• Beide machten: 5² = 25, 3² = 9\n• Tot slot: 25 − 9 = **16**\n\n**Voorbeeld 5** (echt lastig): 50 − 2 × (3² + 1) ÷ 5\n• Macht binnen haakjes: 3² = 9\n• Haakjes: 9 + 1 = 10\n• Som wordt: 50 − 2 × 10 ÷ 5\n• × en ÷ van links naar rechts: 2 × 10 = 20, 20 ÷ 5 = 4\n• Som wordt: 50 − 4\n• −: **46**\n\n**Tips voor lastige sommen**:\n1. **Schrijf elke stap apart** — niet alles in één keer doen.\n2. **Onderstreep wat je net berekend hebt** zodat je niet vergeet.\n3. **Werk van binnen naar buiten** bij geneste haakjes.\n4. **Controleer aan het einde** — is je antwoord realistisch?\n\n**Hoe controleer je?**\nBijvoorbeeld bij 100 − 5 × 7 = 65:\n• 5 × 7 = 35 (~30, ~40 — past).\n• 100 − 35 = 65 (groter dan 100 zou raar zijn).\n• Antwoord 65 is plausibel.",
    svg: uitwerkingSvg([
      { expr: "24 ÷ (2 + 4) × 3", uitleg: "Eerst haakjes" },
      { expr: "= 24 ÷ 6 × 3", uitleg: "Nu × en ÷ links naar rechts" },
      { expr: "= 4 × 3", uitleg: "" },
      { expr: "= 12", uitleg: "Klaar!" },
    ]),
    checks: [
      {
        q: "**18 ÷ (1 + 2) × 4** = ?",
        options: ["24","6","2","12"],
        answer: 0,
        wrongHints: [null,"Je bent er bijna — er komt ná de deling nog een × aan het einde.","Deelde je 18 door álles tegelijk? Alleen (1+2) hoort bij elkaar; daarna van links naar rechts.","Waar is de 18 gebleven? Begin met 18 ÷ (de uitkomst van de haakjes)."],
        uitlegPad: {
          stappen: [{ titel: "H → ÷× LR", tekst: "Haakjes: 1+2=3. Daarna ÷ en × van links naar rechts: 18÷3=6, 6×4=24." }],
          woorden: [{ woord: "links→rechts", uitleg: "Bij × en ÷ samen: van links naar rechts." }],
          theorie: "× en ÷ even sterk → links naar rechts. Niet eerst alle ÷ doen.",
          voorbeelden: [{ type: "stap", tekst: "18÷(1+2)×4 = 18÷3×4 = 6×4 = 24." }],
          basiskennis: [{ onderwerp: "Niet 18÷(3×4)", uitleg: "× komt LATER, niet eerst. Eerst ÷ links, dan ×." }],
          niveaus: { basis: "24.", simpeler: "Haakjes:1+2=3. Dan 18÷3=6. Dan 6×4=24.", nogSimpeler: "24" },
        },
      },
      {
        q: "**2 × (4 + 3²)** = ?",
        options: ["26","18","14","49"],
        answer: 0,
        wrongHints: [null,"Binnen de haakjes staan twéé dingen: de 4 én de macht — heb je ze allebei meegenomen?","Wat betekent 3² ook alweer — is dat gewoon 3, of iets groters?","De ² staat alleen op de 3, niet op de hele haakjes-uitkomst."],
        uitlegPad: {
          stappen: [{ titel: "Macht in haakjes", tekst: "Binnen haakjes: 3²=9 eerst, dan 4+9=13. Daarna ×: 2×13=26." }],
          woorden: [{ woord: "binnen-volgorde", uitleg: "Binnen haakjes geldt ook HMVDOA." }],
          theorie: "Stap 1: binnen haakjes alle volgorde-regels toepassen. Stap 2: × eromheen.",
          voorbeelden: [{ type: "stap", tekst: "2×(4+3²) = 2×(4+9) = 2×13 = 26." }],
          basiskennis: [{ onderwerp: "Niet 2×4+3²", uitleg: "Haakjes om 4+3² — die hele groep wordt × 2." }],
          niveaus: { basis: "26.", simpeler: "Binnen haakjes: 3²=9, 4+9=13. Dan 2×13=26.", nogSimpeler: "26" },
        },
      },
      {
        q: "**(5 + 1)² − 4 × 3** = ?",
        options: ["24","60","30","12"],
        answer: 0,
        wrongHints: [null,"Kijk naar het teken tussen de twee delen: trek je af of tel je op?","Reken de twee stukken eerst apart uit: (5+1)² en 4×3 — en dán pas het teken ertussen.","Dit is alleen het tweede stuk — waar is (5+1)² gebleven?"],
        uitlegPad: {
          stappen: [{ titel: "Volledige HMVDOA", tekst: "H: 5+1=6. M: 6²=36. ×: 4×3=12. −: 36-12=24." }],
          woorden: [{ woord: "alle stappen", uitleg: "Som met alle 4 niveaus van HMVDOA." }],
          theorie: "Strikte volgorde: H → M → × → −. Doe ze één voor één.",
          voorbeelden: [{ type: "stap", tekst: "(5+1)²-4×3 = 6²-12 = 36-12 = 24." }],
          basiskennis: [{ onderwerp: "Niet 6²-4×3 = 32×3", uitleg: "× heeft eigen niveau, niet aan haakjes/macht plakken." }],
          niveaus: { basis: "24.", simpeler: "(5+1)²=36. 4×3=12. 36-12=24.", nogSimpeler: "24" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**60 − 4 × (2 + 3²)** = ?",
        options: ["16", "28", "61", "616"],
        answer: 0,
        wrongHints: [
          null,
          "Is 3² hetzelfde als 3 × 2?",
          "Hoort de 3² bij de haakjes? Reken eerst alles binnen de haakjes uit.",
          "Rekende je eerst 60 − 4? De − komt als laatste.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Binnen de haakjes eerst",
              tekst: "3² = 9. 2 + 9 = 11. 4 × 11 = 44. 60 − 44 = 16.",
            },
          ],
          woorden: [
            {
              woord: "binnen-volgorde",
              uitleg: "Binnen haakjes geldt ook de volgorde-regel.",
            },
          ],
          theorie: "Haakjes eerst — en daarbinnen eerst de macht.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "60 − 4 × (2 + 3²) = 60 − 4 × 11 = 60 − 44 = 16.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Controle",
              uitleg: "44 is minder dan 60, dus het antwoord is klein. 16 kan kloppen.",
            },
          ],
          niveaus: {
            basis: "16.",
            simpeler: "3² = 9. 2 + 9 = 11. 4 × 11 = 44. 60 − 44 = 16.",
            nogSimpeler: "16",
          },
        },
      },
      {
        q: "**3 × (2 + (5 − 1))** = ?",
        options: ["18", "10", "20", "12"],
        answer: 0,
        wrongHints: [
          null,
          "Hoort de 4 ook bij de ×? Kijk waar de buitenste haakjes staan.",
          "Hoort de − 1 binnen de binnenste haakjes?",
          "Waar is de 2 gebleven?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Binnen → buiten",
              tekst: "Binnenste: 5 − 1 = 4. Buitenste: 2 + 4 = 6. Dan 3 × 6 = 18.",
            },
          ],
          woorden: [
            {
              woord: "geneste haakjes",
              uitleg: "Van binnen naar buiten werken.",
            },
          ],
          theorie: "Eerst de diepste haakjes, dan de haakjes eromheen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3 × (2 + (5 − 1)) = 3 × (2 + 4) = 3 × 6 = 18.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alles ×3",
              uitleg: "De hele buitenste haakjes worden keer 3.",
            },
          ],
          niveaus: {
            basis: "18.",
            simpeler: "5 − 1 = 4. 2 + 4 = 6. 3 × 6 = 18.",
            nogSimpeler: "18",
          },
        },
      },
      {
        q: "**(4 + 2)² ÷ (5 − 2)** = ?",
        options: ["12", "4", "18", "3"],
        answer: 0,
        wrongHints: [
          null,
          "Is 6² hetzelfde als 6 × 2?",
          "Waar is de 5 gebleven? Reken de tweede haakjes uit.",
          "Dat is alleen de tweede haakjes.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "H → M → ÷",
              tekst: "Haakjes: 6 en 3. Macht: 6² = 36. ÷: 36 ÷ 3 = 12.",
            },
          ],
          woorden: [
            {
              woord: "kwadraat",
              uitleg: "6² = 6 × 6 = 36.",
            },
          ],
          theorie: "Eerst beide haakjes, dan de macht, dan delen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "(4 + 2)² ÷ (5 − 2) = 6² ÷ 3 = 36 ÷ 3 = 12.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet 6 × 2",
              uitleg: "6² = 36, niet 12.",
            },
          ],
          niveaus: {
            basis: "12.",
            simpeler: "6² = 36. 36 ÷ 3 = 12.",
            nogSimpeler: "12",
          },
        },
      },
      {
        q: "**7² − 3 × (8 − 2)** = ?",
        options: ["31", "23", "18", "43"],
        answer: 0,
        wrongHints: [
          null,
          "Hoort de − 2 bij de haakjes? Reken die eerst uit.",
          "Dat is alleen het tweede stuk — waar is 7²?",
          "Je bent de × 3 vergeten.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "H → M → × → −",
              tekst: "Haakjes: 8 − 2 = 6. Macht: 7² = 49. ×: 3 × 6 = 18. −: 49 − 18 = 31.",
            },
          ],
          woorden: [
            {
              woord: "twee stukken",
              uitleg: "Reken 7² en 3 × (8 − 2) apart uit.",
            },
          ],
          theorie: "Reken elk stuk apart uit en doe de − als laatste.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "7² − 3 × (8 − 2) = 49 − 18 = 31.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Controle",
              uitleg: "49 − 18: iets meer dan 30. 31 kan kloppen.",
            },
          ],
          niveaus: {
            basis: "31.",
            simpeler: "7² = 49. 3 × 6 = 18. 49 − 18 = 31.",
            nogSimpeler: "31",
          },
        },
      },
      {
        q: "Mila rekent **100 − 6 × (4 + 5)** uit en krijgt **846**. Wat zeg je?",
        options: [
          "Fout: het moet minder dan 100 zijn",
          "Goed: eerst 100 − 6 is juist",
          "Goed: de haakjes doe je als laatste",
          "Fout: het moet meer dan 1.000 zijn",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Mag je met 100 − 6 beginnen als er nog een × staat?",
          "Wanneer doe je haakjes: als eerste of als laatste?",
          "Je haalt iets van 100 af. Kan het antwoord dan groter worden?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Controleer",
              tekst: "Je begint met 100 en haalt er iets af. Dan moet het antwoord kleiner dan 100 zijn.",
            },
          ],
          woorden: [
            {
              woord: "controleren",
              uitleg: "Kijken of je antwoord kan kloppen.",
            },
          ],
          theorie: "Goed is: (4 + 5) = 9, 6 × 9 = 54, 100 − 54 = 46.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Mila deed (100 − 6) × 9 = 94 × 9 = 846. Dat is fout.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Is het realistisch?",
              uitleg: "Bij 100 − iets moet het antwoord onder de 100 blijven.",
            },
          ],
          niveaus: {
            basis: "Fout, het moet minder dan 100 zijn.",
            simpeler: "100 min iets is altijd minder dan 100. Goed is 46.",
            nogSimpeler: "Fout",
          },
        },
      },
      {
        q: "**2 × 3² + (10 − 4) ÷ 2** = ?",
        options: ["21", "24", "39", "15"],
        answer: 0,
        wrongHints: [
          null,
          "Je bent de ÷ 2 aan het eind vergeten.",
          "Hoort de ² bij 2 × 3 of alleen bij de 3?",
          "Is 3² hetzelfde als 3 × 2?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap voor stap",
              tekst: "Haakjes: 10 − 4 = 6. Macht: 3² = 9. × en ÷: 2 × 9 = 18 en 6 ÷ 2 = 3. +: 18 + 3 = 21.",
            },
          ],
          woorden: [
            {
              woord: "HMVDOA",
              uitleg: "Haakjes, machten, × en ÷, + en −.",
            },
          ],
          theorie: "Schrijf elke stap apart op.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 × 3² + (10 − 4) ÷ 2 = 2 × 9 + 6 ÷ 2 = 18 + 3 = 21.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Twee stukken",
              uitleg: "Links 2 × 9 = 18, rechts 6 ÷ 2 = 3.",
            },
          ],
          niveaus: {
            basis: "21.",
            simpeler: "18 + 3 = 21.",
            nogSimpeler: "21",
          },
        },
      },
    ],
  },
  {
    title: "Eindopdracht",
    explanation: "**Snelle samenvatting**:\n\n**Volgorde** *(altijd)*:\n1. Haakjes\n2. Machten\n3. × en ÷ *(samen, links→rechts)*\n4. + en − *(samen, links→rechts)*\n\n**Ezelsbruggetje: HMVDOA**\n\n**Tips**:\n• Schrijf elke stap apart\n• Bij geneste haakjes: van binnen naar buiten\n• Onthoud: × eerst, niet altijd van links naar rechts\n• Macht is herhaling van vermenigvuldigen, niet zomaar tweemaal\n\nVeel succes!",
    svg: volgordeSvg(),
    checks: [
      {
        q: "**3 + 4 × 2** = ?",
        options: ["11","14","9","24"],
        answer: 0,
        wrongHints: [null,"(3+4)×2 zou zijn — maar er staan geen haakjes.","Welke bewerking is sterker, × of +?","Welke bewerking is sterker, × of +?"],
        uitlegPad: {
          stappen: [{ titel: "× eerst", tekst: "4×2=8, dan 3+8=11." }],
          woorden: [{ woord: "× vóór +", uitleg: "Vermenigvuldigen sterker dan optellen." }],
          theorie: "Klassieke valkuil-som. Antwoord 14 = (3+4)×2, maar er staan geen haakjes.",
          voorbeelden: [{ type: "stap", tekst: "3 + 4×2 = 3 + 8 = 11." }],
          basiskennis: [{ onderwerp: "Test", uitleg: "Twijfel? × heeft altijd voorrang op +." }],
          niveaus: { basis: "11.", simpeler: "× eerst: 4×2=8. Dan 3+8=11.", nogSimpeler: "11" },
        },
      },
      {
        q: "**(6 − 2) × 5** = ?",
        options: ["20","-4","60","8"],
        answer: 0,
        wrongHints: [null,"Zonder haakjes zou de × eerst gaan en kom je negatief uit — maar de haakjes staan er juist! Wat doe je dus eerst?","Kijk goed welk teken er tússen 6 en 2 staat: − of ×?","Check je eerste stap: wat is 6 − 2 precies?"],
        uitlegPad: {
          stappen: [{ titel: "Haakjes eerst", tekst: "(6-2)=4. Dan ×5: 4×5=20." }],
          woorden: [{ woord: "haakjes met −", uitleg: "Aftrekking binnen haakjes wordt eerst gedaan." }],
          theorie: "Haakjes forceren: 6-2 wordt 4, dan ×5=20. Zonder haakjes zou ×5 eerst, dan -.",
          voorbeelden: [{ type: "stap", tekst: "(6-2)×5 = 4×5 = 20." }],
          basiskennis: [{ onderwerp: "Vergelijk", uitleg: "6-2×5 (geen haakjes) = 6-10 = -4. Wel haakjes = 20." }],
          niveaus: { basis: "20.", simpeler: "(6-2)=4. 4×5=20.", nogSimpeler: "20" },
        },
      },
      {
        q: "**5²** = ?",
        options: ["25","10","7","52"],
        answer: 0,
        wrongHints: [null,"Dat is 5+5 — een macht is vermenigvuldigen.","Een macht is herhaald vermenigvuldigen, geen optelling.","Dat is gewoon de cijfers achter elkaar, niet 5×5."],
        uitlegPad: {
          stappen: [{ titel: "5×5 = 25", tekst: "5² = 5 keer met zichzelf = 5×5 = 25." }],
          woorden: [{ woord: "5²", uitleg: "Vijf kwadraat = 25." }],
          theorie: "Macht: kleine 2 betekent vermenigvuldig 2 keer met zichzelf. NIET +5 of ×2.",
          voorbeelden: [{ type: "tabel", tekst: "5²=25. 6²=36. 7²=49. 10²=100." }],
          basiskennis: [{ onderwerp: "Onthouden", uitleg: "Kwadraten 1-10: 1,4,9,16,25,36,49,64,81,100." }],
          niveaus: { basis: "25.", simpeler: "5² = 5×5 = 25. (Niet 5+5=10, niet 5×2=10).", nogSimpeler: "25" },
        },
      },
      {
        q: "**12 ÷ 4 + 3 × 2** = ?",
        options: ["9","24","30","6"],
        answer: 0,
        wrongHints: [null,"Waar komt dit vandaan? Begin met de twee sterke stukjes: 12÷4 en 3×2.","Telde je eerst op? De ÷ en × zijn sterker en gaan vóór de +.","Bijna — heb je de ×2 al gedaan vóórdat je ging optellen?"],
        uitlegPad: {
          stappen: [{ titel: "Beide ÷× eerst", tekst: "÷ + × allebei eerst: 12÷4=3, 3×2=6. Dan +: 3+6=9." }],
          woorden: [{ woord: "twee × en ÷", uitleg: "Doe alle × en ÷ vóór + en −." }],
          theorie: "Bij meerdere × en ÷ in 1 som: doe ze ALLE eerst, dan + en −.",
          voorbeelden: [{ type: "stap", tekst: "12÷4 + 3×2 = 3 + 6 = 9." }],
          basiskennis: [{ onderwerp: "Niet 12÷7×2", uitleg: "+ scheidt de twee multiplicatieve groepen. Doe ze los." }],
          niveaus: { basis: "9.", simpeler: "12÷4=3. 3×2=6. 3+6=9.", nogSimpeler: "9" },
        },
      },
      {
        q: "**Welke is sterker dan +?**",
        options: ["× (vermenigvuldigen)","− (aftrekken)","Geen — gelijk","= (is-gelijkteken)"],
        answer: 0,
        wrongHints: [null,"− is even sterk als +.","Wel — er is een vaste volgorde-regel.","Het =-teken is geen bewerking — het wijst naar de uitkomst."],
        uitlegPad: {
          stappen: [{ titel: "× sterker", tekst: "× en ÷ zijn sterker dan + en −. + en − zijn even sterk." }],
          woorden: [{ woord: "sterkte", uitleg: "Welke bewerking gaat eerst in volgorde-regel." }],
          theorie: "HMVDOA-niveau: × en ÷ = niveau 3. + en − = niveau 4. Lager nummer = eerst.",
          voorbeelden: [{ type: "tabel", tekst: "× sterker dan + ja. − even sterk als +. =-teken = geen bewerking." }],
          basiskennis: [{ onderwerp: "Eigenlijk allebei", uitleg: "× en ÷ zijn allebei sterker dan +. Hier staat alleen × tussen de keuzes." }],
          niveaus: { basis: "× (vermenigvuldigen).", simpeler: "× en ÷ zijn sterker dan + en −. Dus × is het antwoord.", nogSimpeler: "×" },
        },
      },
      { q: "Bereken: 2 + 3 × 4 = ?", options: ["14","20","24","9"], answer: 0, wrongHints: [null, "Niet — eerst keer.", null, null] },
      { q: "Bereken: (2 + 3) × 4 = ?", options: ["20","14","9","24"], answer: 0, wrongHints: [null, "Niet — haakjes forceren volgorde.", "Niet — je telt alles op, maar er staat ook een keer-teken.", null] },
      { q: "Bereken: 12 − 6 ÷ 2 = ?", options: ["9","3","6","2"], answer: 0, wrongHints: [null, "Niet — denk na welke bewerking je als eerste moet doen: − of ÷?", null, null] },
      { q: "Bereken: 5 × (3 + 4) = ?", options: ["35","19","27","9"], answer: 0, wrongHints: [null, "Niet — haakjes prioriteit.", null, null] },
      { q: "Bereken: 100 − 30 × 2 = ?", options: ["40","140","70","60"], answer: 0, wrongHints: [null, "Niet — × eerst.", null, null] },
      { q: "Bereken: (10 + 5) × 2 = ?", options: ["30","25","15","20"], answer: 0, wrongHints: [null, "Niet — haakjes eerst.", null, null] },
      { q: "Bereken: 18 ÷ (6 − 3) = ?", options: ["6","3","18","2"], answer: 0, wrongHints: [null, "Niet — 18 ÷ 3 is meer.", null, null] },
      { q: "Bereken: 4 × 3 − 5 = ?", options: ["7","2","17","12"], answer: 0, wrongHints: [null, null, "Niet — geen +.", "Vergeet −5."] },
      { q: "Bereken: 8 + 4 ÷ 2 = ?", options: ["10","6","12","16"], answer: 0, wrongHints: [null, "Niet — ÷ eerst.", "Te veel.", null] },
      { q: "Welke bewerking is **sterkste** (eerst doen)?", options: ["Haakjes","Optellen","Aftrekken","Vermenigvuldigen"], answer: 0, wrongHints: [null, "Zwakst.", "Zwakst.", "Sterker dan +/−, niet sterkst."] },
      { q: "Bereken: 6² + 3 = ?", options: ["39","15","36","9"], answer: 0, wrongHints: [null, "Niet — 6² is niet 6×2.", "Niet — vergeet +3.", null] },
      { q: "Bereken: 2 + 3 × 4 − 1 = ?", options: ["13","19","5","11"], answer: 0, wrongHints: [null, "Niet — niet eerst optellen.", null, "Niet — vergeet de 2 niet."] },
      { q: "Wat staat de **H** in HMVDOA voor?", options: ["Haakjes","Hard","Half","Honderdtal"], answer: 0, wrongHints: [null, "HMVDOA is het ezelsbruggetje voor de rekenvolgorde — welke bewerking doe je altijd als éérste?", null, null] },
      { q: "Bereken: 5 + (8 − 3) × 2 = ?", options: ["15","16","26","13"], answer: 0, wrongHints: [null, null, "Te veel.", null] },
      { q: "Bereken: 20 ÷ 4 × 2 = ?", options: ["10","2,5","160","5"], answer: 0, wrongHints: [null, "Niet — × en ÷ van links naar rechts.", "Te veel.", "Vergeet × 2 niet."] },
      { q: "Bereken: 3² × 2 = ?", options: ["18","12","9","6"], answer: 0, wrongHints: [null, "Niet — bereken eerst de macht, dan vermenigvuldig je pas.", "Vergeet × 2 niet.", null] },
      { q: "Welke is **gelijkwaardig**: × en ÷ of + en −?", options: ["Beide paren onderling gelijk","Niet relevant","× sterker dan ÷","+ sterker dan −"], answer: 0, wrongHints: [null, "Wel.", null, null] },
      { q: "Bereken: (4 + 2) × (3 − 1) = ?", options: ["12","7","10","20"], answer: 0, wrongHints: [null, null, null, null] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const volgordeBewerkingen = {
  id: "volgorde-bewerkingen",
  title: "Volgorde van bewerkingen + haakjes",
  emoji: "🧮",
  level: "groep5-7",
  subject: "rekenen",
  // SLO-referentieniveau (sprint-4 G4a): 1F kerndoel rekenen einde basis;
  // 1S = streef voor havo/vwo-bound leerlingen.
  referentieNiveau: "1F/1S",
  sloThema: "Getallen",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "tafels-po", title: "Tafels", niveau: "po-1F" },
  ],
  intro:
    "Wat doe je eerst — × of +? De volgorde-regel HMVDOA: Haakjes, Machten, ×÷, +−. Met haakjes om volgorde te forceren, machten als kwadraat, en de bekende valkuilen. toets-relevant voor groep 5-7.",
  triggerKeywords: [
    "volgorde bewerkingen","HMVDOA","PEMDAS","haakjes","machten","kwadraat",
    "rekenvolgorde","wat eerst","keer of plus eerst",
    "rekenen met haakjes","2+3*4","exponenten",
  ],
  chapters,
  steps,
};

export default volgordeBewerkingen;
