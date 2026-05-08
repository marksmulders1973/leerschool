// Leerpad: Cijferend rekenen — voor groep 6-8
// 7 stappen in 5 hoofdstukken. Cito-stijl praktijksommen + redactie.
// Sprint-5+ S4 (2026-05-08).

const COLORS = {
  curve: "#00c853",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  digitGood: "#69f0ae",
  digitBorrow: "#ffaa30",
};

const stepEmojis = ["🔢","➕","➖","✖️","➗","🛒","🏆"];

const chapters = [
  { letter: "A", title: "Wat is cijferend rekenen?", emoji: "🔢", from: 0, to: 0 },
  { letter: "B", title: "Optellen + aftrekken", emoji: "➕", from: 1, to: 2 },
  { letter: "C", title: "Vermenigvuldigen", emoji: "✖️", from: 3, to: 4 },
  { letter: "D", title: "Delen + redactiesommen", emoji: "🛒", from: 5, to: 5 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 6, to: 6 },
];

function kolomSvg(getallen, bewerking, antwoord, breedte = 140) {
  const startX = breedte / 2;
  const lines = getallen.map((g, i) => {
    const ystart = 40 + i * 24;
    const teken = i === getallen.length - 1 ? bewerking : "";
    return `<text x="${startX - 50}" y="${ystart}" fill="${COLORS.curveAlt}" font-size="18" font-family="monospace" font-weight="bold">${teken}</text><text x="${startX + 25}" y="${ystart}" text-anchor="end" fill="${COLORS.text}" font-size="18" font-family="monospace">${g}</text>`;
  }).join("");
  const lineY = 40 + getallen.length * 24 - 6;
  return `<svg viewBox="0 0 ${breedte + 30} 160">
<rect x="0" y="0" width="${breedte + 30}" height="160" fill="${COLORS.paper}"/>
${lines}
<line x1="${startX - 60}" y1="${lineY}" x2="${startX + 30}" y2="${lineY}" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="${startX + 25}" y="${lineY + 24}" text-anchor="end" fill="${COLORS.digitGood}" font-size="20" font-family="monospace" font-weight="bold">${antwoord}</text>
</svg>`;
}

const steps = [
  {
    title: "Wat is cijferend rekenen?",
    explanation: "**Cijferend rekenen** is het rekenen onder elkaar in **kolommen** — net hoe je het op papier doet. Het werkt voor grote getallen waar 'uit het hoofd' niet meer lukt.\n\n**De truc**: zet getallen **netjes onder elkaar** zodat eenheden, tientallen, honderdtallen elk in hun eigen kolom staan.\n\n**Vergelijking**:\n• Hoofdrekenen: 23 + 14 = 37 *(snel uit je hoofd)*.\n• Cijferend: 487 + 326 = ? *(handig om op te schrijven)*.\n\n**De vier basis-bewerkingen** die je kunt cijferen:\n• **Optellen** (+) — kolomsgewijs, met onthouden bij 10.\n• **Aftrekken** (−) — kolomsgewijs, met lenen.\n• **Vermenigvuldigen** (×) — een 'staart-deling' achterwaarts.\n• **Delen** (:) — bus-bewerking of staartdeling.\n\n**Belangrijk om te onthouden**:\n• Werk altijd van **rechts naar links** (eenheden eerst, dan tientallen, dan honderdtallen).\n• Schrijf netjes onder elkaar — anders gaat het mis.\n• Bij optellen onthoud je een 'overschietje'. Bij aftrekken leen je van de buurman.\n\n**Cito-context**:\nVeel Cito-vragen vragen om grote berekeningen die je écht moet **opschrijven**. Cijferen kost tijd maar is **betrouwbaar**.",
    checks: [
      {
        q: "Wanneer is **cijferend rekenen handig**?",
        options: ["Bij grote getallen die niet in je hoofd passen","Altijd, ook bij 5+3","Alleen bij delen","Alleen op de Cito"],
        answer: 0,
        wrongHints: [null,"Te overdreven — kleine sommen doe je in je hoofd.","Niet alleen delen — alle 4 bewerkingen kun je cijferen.","Niet alleen Cito — overal in echte rekensommen."],
      },
      {
        q: "Bij cijferend rekenen werk je **van** ... **naar** ...",
        options: ["Rechts naar links","Links naar rechts","Boven naar onder","Maakt niet uit"],
        answer: 0,
        wrongHints: [null,"Andersom — eenheden gaan eerst.","Niet horizontaal — kolomsgewijs.","Wel uit — anders gaat het overschietje fout."],
      },
      {
        q: "Bij **23 + 14** (hoofdrekenen of cijferen?) — wat is logisch?",
        options: ["Hoofdrekenen — eenvoudig","Cijferen op papier","Calculator","Maakt niks uit"],
        answer: 0,
        wrongHints: [null,"Overkill — 23+14=37 zit in je hoofd.","Niet voor zo'n eenvoudige som.","Wel uit — kies de snelste manier per som."],
      },
    ],
  },

  {
    title: "Cijferend optellen — onthouden bij 10",
    explanation: "Bij **cijferend optellen** zet je getallen **onder elkaar** en tel je per kolom op. Bij 10 of meer **onthoud je 1** voor de volgende kolom.\n\n**Voorbeeld 1**: 247 + 158\n```\n  2 4 7\n+ 1 5 8\n-------\n```\n• **Eenheden**: 7 + 8 = 15. Schrijf 5, onthoud 1.\n• **Tientallen**: 4 + 5 + 1 (onthouden) = 10. Schrijf 0, onthoud 1.\n• **Honderdtallen**: 2 + 1 + 1 (onthouden) = 4. Schrijf 4.\n\n**Antwoord**: 405.\n\n**Voorbeeld 2**: 1268 + 537\n```\n  1 2 6 8\n+   5 3 7\n--------\n```\n• Eenheden: 8 + 7 = 15. Schrijf 5, onthoud 1.\n• Tientallen: 6 + 3 + 1 = 10. Schrijf 0, onthoud 1.\n• Honderdtallen: 2 + 5 + 1 = 8. Schrijf 8.\n• Duizendtallen: 1. Schrijf 1.\n\n**Antwoord**: 1805.\n\n**Cito-tip**:\n• Schrijf **netjes**: gebruik ruitjespapier of zorg dat je kolommen recht onder elkaar staan.\n• Bij grote getallen — schrijf het **onthoud-getal klein boven** de volgende kolom zodat je 't niet vergeet.\n• Check je antwoord met een **schatting**: 247 + 158 ≈ 250 + 160 = 410. Klopt 405? ✓.\n\n**Veel-voorkomende fout**:\nVergeten het 'onthoudje' op te tellen. Daarom altijd opschrijven, niet onthouden in je hoofd.",
    svg: kolomSvg(["247","158"], "+", "405"),
    checks: [
      {
        q: "**347 + 256** = ?",
        options: ["603","593","613","503"],
        answer: 0,
        wrongHints: [null,"Te weinig — eenheden: 7+6=13 (niet 9 of 3).","Te veel — heb je 1 te veel onthouden?","Veel te weinig — heb je honderdtallen niet correct gerold?"],
      },
      {
        q: "**1248 + 567** = ?",
        options: ["1815","1715","1805","1825"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je het onthoudje overgeslagen?","Te weinig — duizendtallen-kolom kloppen?","Te veel — heb je extra onthoudje gerekend?"],
      },
      {
        q: "**4985 + 1567** = ?",
        options: ["6552","6452","6452","5552"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je in elke kolom het onthoudje meegenomen?","Te weinig — controleer met schatting (5000+1500=6500).","Veel te weinig — duizendtallen onjuist."],
      },
    ],
  },

  {
    title: "Cijferend aftrekken — lenen bij de buur",
    explanation: "Bij **cijferend aftrekken** is het lastiger: als je niet genoeg hebt in een kolom, **leen je 1** van de kolom links ervan.\n\n**Voorbeeld**: 524 − 258\n```\n  5 2 4\n− 2 5 8\n-------\n```\n• **Eenheden**: 4 − 8 → kan niet (4 < 8). Leen 1 van tientallen.\n  - Tientallen wordt 1 (was 2).\n  - Eenheden wordt 14. 14 − 8 = **6**.\n• **Tientallen**: 1 − 5 → kan niet. Leen 1 van honderdtallen.\n  - Honderdtallen wordt 4 (was 5).\n  - Tientallen wordt 11. 11 − 5 = **6**.\n• **Honderdtallen**: 4 − 2 = **2**.\n\n**Antwoord**: 266.\n\n**Voorbeeld 2**: 1000 − 347 *(de gevreesde 1000-min)*\n```\n  1 0 0 0\n−   3 4 7\n--------\n```\n• Eenheden: 0 − 7 → leen. Maar tientallen is ook 0! → leen door naar honderdtallen, ook 0! → leen door naar duizendtallen.\n• Truc: behandel 1000 als 999+1: 999 − 347 = 652, dan + 1 = **653**.\n\n**Cito-tip**:\nBij **leen-sommen door meer kolommen heen** *(zoals 1000 − iets)*, gebruik de truc: doe **999 − getal**, dan **+1**.\n\n**Voorbeeld**: 5000 − 1234\n• 4999 − 1234 = 3765.\n• 3765 + 1 = **3766**.\n\n**Veel-voorkomende fouten**:\n• Vergeten dat de buurman **1 minder** is geworden na lenen.\n• Bij dubbel-lenen door 0-kolom — de truc gebruiken.",
    svg: kolomSvg(["524","258"], "−", "266"),
    checks: [
      {
        q: "**632 − 184** = ?",
        options: ["448","458","568","552"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer eenheden: 12−4=8 (na lenen).","Veel te veel — niet correct geleend.","Te veel — heb je in elke kolom geleend waar nodig?"],
      },
      {
        q: "**1000 − 376** = ?",
        options: ["624","624","634","724"],
        answer: 0,
        wrongHints: [null,"Te veel — gebruik 999-truc: 999−376=623, +1=624.","Te veel — heb je correct door alle nullen geleend?","Veel te veel — controleer met 1000−400=600 (en 24 erbij)."],
      },
      {
        q: "**4567 − 2389** = ?",
        options: ["2178","2278","2188","2178"],
        answer: 0,
        wrongHints: [null,"Te veel — gebruik schatting: 4500−2400=2100.","Te veel — controleer eenheden: 17−9=8 na lenen.","Te veel — kolom-controle nodig."],
      },
    ],
  },

  {
    title: "Cijferend vermenigvuldigen — 1 cijfer × meerdere",
    explanation: "Bij **cijferend vermenigvuldigen** vermenigvuldig je elk cijfer apart.\n\n**Voorbeeld 1**: 234 × 4\n```\n    2 3 4\n  ×     4\n--------\n```\n• Eenheden: 4 × 4 = 16. Schrijf 6, onthoud 1.\n• Tientallen: 4 × 3 = 12, plus 1 (onthoud) = 13. Schrijf 3, onthoud 1.\n• Honderdtallen: 4 × 2 = 8, plus 1 = 9. Schrijf 9.\n\n**Antwoord**: 936.\n\n**Voorbeeld 2**: 12 × 27 *(2 cijfers × 2 cijfers — staart-aanpak)*\n```\n      1 2\n    × 2 7\n--------\n      8 4   ← 12 × 7\n  + 2 4 0   ← 12 × 20 (let op nul achteraan!)\n--------\n    3 2 4\n```\n\n**Stappen**:\n1. Vermenigvuldig 12 × 7 = 84. Schrijf onder de streep.\n2. Vermenigvuldig 12 × 2 (= eigenlijk 12 × 20). Zet **nul-plaatshouder** achteraan, dan 12 × 2 = 24, dus 240.\n3. Tel beide regels op: 84 + 240 = **324**.\n\n**Cito-tip**:\n• Schrijf de **nul-plaatshouders** netjes op. Dat is de meest gemaakte fout.\n• Check met schatting: 12 × 27 ≈ 12 × 25 = 300. Antwoord 324 zit in de buurt ✓.\n\n**Trucs voor 'mooie' getallen**:\n• × 10 → komma 1 plek naar rechts.\n• × 100 → komma 2 plekken naar rechts.\n• × 5 → ÷ 2 dan × 10. Voorbeeld: 84 × 5 = (84 ÷ 2) × 10 = 42 × 10 = 420.",
    checks: [
      {
        q: "**324 × 3** = ?",
        options: ["972","962","1062","912"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je 3×3 (honderdtallen) wel meegenomen?","Te veel — 1 te veel onthouden.","Te weinig."],
      },
      {
        q: "**18 × 25** = ?",
        options: ["450","350","550","250"],
        answer: 0,
        wrongHints: [null,"Te weinig — denk: 18 × 25 = (18 × 100) ÷ 4 = 1800 ÷ 4 = 450.","Te veel — controleer met 20×25=500.","Veel te weinig — dat is 10 × 25."],
      },
      {
        q: "**456 × 7** = ?",
        options: ["3192","3092","3292","2192"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je elk cijfer × 7 met onthoudje?","Te veel — heb je extra onthoudje gerekend?","Veel te weinig — heb je tientallen overgeslagen?"],
      },
    ],
  },

  {
    title: "Cijferend delen — bus-bewerking",
    explanation: "**Cijferend delen** is de moeilijkste — ook wel **staartdeling** genoemd. We doen het vereenvoudigde versie: **bus-bewerking** *(dezelfde idee, simpeler opgeschreven)*.\n\n**Voorbeeld**: 144 ÷ 6\n• Begin links: hoeveel keer past 6 in 14? **2 keer** (2 × 6 = 12). Schrijf 2.\n• Rest = 14 − 12 = 2. Trek volgend cijfer (4) erbij = 24.\n• Hoeveel keer past 6 in 24? **4 keer** (4 × 6 = 24). Schrijf 4.\n• Rest = 0.\n\n**Antwoord**: 24.\n\n**Voorbeeld 2**: 525 ÷ 7\n• 7 in 5? Past niet (5 < 7). Pak 52.\n• 7 in 52? **7 keer** (7 × 7 = 49). Schrijf 7.\n• Rest = 52 − 49 = 3. Trek 5 erbij = 35.\n• 7 in 35? **5 keer** (5 × 7 = 35). Schrijf 5.\n• Rest = 0.\n\n**Antwoord**: 75.\n\n**Met rest** *(als de deling niet rond uitkomt)*:\n*'74 ÷ 8'*\n• 8 in 7? Past niet.\n• 8 in 74? **9 keer** (9 × 8 = 72). Schrijf 9.\n• Rest = 74 − 72 = 2.\n\n**Antwoord**: 9 rest 2.\n\n**Cito-vraag-vorm**: *'74 koekjes verdeeld over 8 kinderen — hoeveel ieder, hoeveel over?'*\n• Ieder krijgt **9 koekjes**, **2 over**.\n\n**Cito-tip**:\n• Werk **van links naar rechts** (omgekeerd dan optellen!).\n• Pak telkens net genoeg cijfers dat de deler erin past.\n• Schrijf netjes — anders raak je het spoor kwijt.\n\n**Trucs voor mooie delers**:\n• ÷ 10 → komma 1 plek naar links.\n• ÷ 5 → × 2 dan ÷ 10. Voorbeeld: 84 ÷ 5 = (84 × 2) ÷ 10 = 168 ÷ 10 = 16,8.\n• ÷ 4 → ÷ 2 ÷ 2.",
    checks: [
      {
        q: "**168 ÷ 8** = ?",
        options: ["21","20","22","18"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer: 21 × 8 = 168 ✓?","Te veel — controleer met 22 × 8 = 176 (te veel).","Veel te weinig — dat is 18×8=144."],
      },
      {
        q: "**450 ÷ 9** = ?",
        options: ["50","45","55","60"],
        answer: 0,
        wrongHints: [null,"Te weinig — 45 × 9 = 405, niet 450.","Te veel — 55 × 9 = 495.","Te veel — 60 × 9 = 540."],
      },
      {
        q: "**78 ÷ 6 — wat is de uitkomst (met of zonder rest)?**",
        options: ["13","12 rest 6","13 rest 0","12"],
        answer: 0,
        wrongHints: [null,"Niet correct — 12 × 6 = 72, rest 6 betekent niet klaar.","Klopt qua getal, maar 'rest 0' hoef je meestal niet erbij te zetten.","Te weinig — 12 × 6 = 72, niet 78."],
      },
    ],
  },

  {
    title: "Praktijk — Cito-redactiesommen",
    explanation: "In Cito-vragen kom je grote berekeningen tegen in **verhalen**. Tijd om uit het verhaal te halen wat te rekenen, en cijferend uit te werken.\n\n**Stappenplan**:\n1. **Lees rustig** en onderstreep getallen + de vraag.\n2. **Welke bewerking?** + (samen), − (verschil), × (steeds dezelfde keer iets), ÷ (verdelen).\n3. Schrijf de som **op papier** en cijfer.\n4. **Check** met schatting.\n\n**Voorbeeld 1**:\n*'In een doos zitten 24 dozen koekjes. Elke doos heeft 18 koekjes. Hoeveel koekjes in totaal?'*\n• Bewerking: × *('elke doos hetzelfde')*.\n• Som: 24 × 18 = ?\n• Cijferend: 24 × 8 = 192. 24 × 10 = 240. Totaal = 432.\n• **Antwoord**: 432 koekjes.\n\n**Voorbeeld 2**:\n*'Een klas heeft 156 stickers. Ze worden gelijk verdeeld over 13 leerlingen. Hoeveel ieder?'*\n• Bewerking: ÷ *('gelijk verdeeld')*.\n• Som: 156 ÷ 13 = ?\n• 13 × 12 = 156 ✓.\n• **Antwoord**: 12 stickers per leerling.\n\n**Voorbeeld 3 — combinatie**:\n*'Een kapper heeft op maandag 23 klanten, op dinsdag 31, op woensdag 28. Hoeveel klanten in totaal? En als hij € 25 per klant rekent — hoeveel verdiend?'*\n• Stap 1: 23 + 31 + 28 = 82 klanten.\n• Stap 2: 82 × 25 = € 2050.\n\n**Cito-trucs voor verhalen**:\n• 'Samen' / 'totaal' → +.\n• 'Verschil' / 'meer dan' / 'over' → −.\n• 'Per' / 'elke' → ×.\n• 'Gelijk verdeeld' / 'hoeveel ieder' → ÷.",
    checks: [
      {
        q: "Een vrachtwagen vervoert **35 dozen van 28 kg**. Wat is het **totale gewicht** (kg)?",
        options: ["980","880","1080","630"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer: 35 × 28 (denk 35×30=1050, dan -35×2=70).","Te veel — heb je 35×30 vergeten af te trekken?","Veel te weinig — heb je per ongeluk getrokken?"],
      },
      {
        q: "Een klas heeft **180 boeken**. Verdeeld over **12 kasten** — hoeveel **per kast**?",
        options: ["15","12","18","20"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer: 12 × 12 = 144, niet 180.","Te veel — 18 × 12 = 216.","Te veel — 20 × 12 = 240."],
      },
      {
        q: "**1245 leerlingen op 3 scholen**, gelijk verdeeld. Hoeveel **per school**?",
        options: ["415","405","425","505"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer: 405 × 3 = 1215, niet 1245.","Te veel — 425 × 3 = 1275.","Veel te veel — heb je × ipv ÷ gedaan?"],
      },
      {
        q: "Een fietsenstalling heeft **rij A: 47 fietsen** en **rij B: 68 fietsen**. **Verschil**?",
        options: ["21","115","20","27"],
        answer: 0,
        wrongHints: [null,"Niet samenvoegen — 'verschil' = aftrekken.","Te weinig — controleer: 68−47.","Te veel — heb je 68−40 gedaan?"],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — alles cijferen",
    explanation: "Mix-toets met cijferen in Cito-stijl. Verschillende bewerkingen door elkaar — kies zelf welke aanpak.\n\n**Hint**: schrijf álle sommen op en cijfer. Schaat af met schatting voor je antwoord opschrijft.\n\nVeel succes!",
    checks: [
      {
        q: "**3456 + 2789** = ?",
        options: ["6245","6125","6345","5245"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je in elke kolom het onthoudje?","Te veel — controleer met schatting (3500+2800=6300).","Veel te weinig — heb je duizendtallen correct?"],
      },
      {
        q: "**8000 − 2547** = ?",
        options: ["5453","5553","5343","6453"],
        answer: 0,
        wrongHints: [null,"Te veel — gebruik 7999-truc + 1.","Te weinig — controleer kolommen.","Veel te veel — heb je goed geleend?"],
      },
      {
        q: "**432 × 6** = ?",
        options: ["2592","2492","2692","2592"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je elk cijfer × 6 met onthoudje?","Te veel — extra onthoudje?","Te weinig — controleer middelste kolom."],
      },
      {
        q: "**1284 ÷ 4** = ?",
        options: ["321","320","301","221"],
        answer: 0,
        wrongHints: [null,"Te weinig — 320 × 4 = 1280, niet 1284.","Te weinig — 301 × 4 = 1204.","Veel te weinig — 221 × 4 = 884."],
      },
      {
        q: "Een fabriek maakt **24 producten per uur**, **8 uur per dag**. **Hoeveel per dag**?",
        options: ["192","182","202","240"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer 24 × 8.","Te veel — heb je extra onthoudje?","Veel te veel — dat is 30×8."],
      },
      {
        q: "**Pakjes van 12 chocoladerepen kosten € 7,80 elk**. Voor **een doos van 25 pakjes** — totaalprijs?",
        options: ["€ 195","€ 185","€ 205","€ 200"],
        answer: 0,
        wrongHints: [null,"Te weinig — 7,80 × 25 = (78 × 25) ÷ 10.","Te veel — heb je verkeerd vermenigvuldigd?","Te veel — controleer met 8 × 25 = 200."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const cijferendRekenen = {
  id: "cijferend-rekenen",
  title: "Cijferend rekenen — Cito groep 6-8",
  emoji: "🔢",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen — cijferen",
  intro:
    "Cijferend rekenen voor groep 6-8: optellen + onthouden, aftrekken + lenen, vermenigvuldigen, delen (bus-bewerking), praktijk-redactiesommen. ~15 min per deel.",
  triggerKeywords: [
    "cijferend","cijferen","kolomsgewijs","onder elkaar",
    "staartdeling","bus-bewerking","onthouden","lenen",
    "optellen","aftrekken","vermenigvuldigen","delen",
  ],
  chapters,
  steps,
};

export default cijferendRekenen;
