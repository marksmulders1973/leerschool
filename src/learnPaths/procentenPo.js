// Leerpad: Procenten — voor groep 5-8 (PO-versie)
// 7 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: groep 5-8 basisschool.
// Sprint-5+ S4 audit-3 (2026-05-08): tweede S4-content-pad voor Cito-ICP.
// Eenvoudigere taal en context dan procenten.js (klas1-vwo).

const COLORS = {
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["💯","➗","🛒","🍕","🎒","💸","🏆"];

const chapters = [
  { letter: "A", title: "Wat is een procent?", emoji: "💯", from: 0, to: 1 },
  { letter: "B", title: "Hoeveel is X% van iets?", emoji: "🛒", from: 2, to: 3 },
  { letter: "C", title: "Welk % is dit van het totaal?", emoji: "🎒", from: 4, to: 4 },
  { letter: "D", title: "Korting in de winkel", emoji: "💸", from: 5, to: 5 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 6, to: 6 },
];

// Visualisatie: 10×10 grid met X cellen ingekleurd voor procentvoorstelling.
function gridSvg(percentage, label) {
  const cellen = [];
  const rij = 10, col = 10, totaal = 100;
  const cellSize = 18;
  const startX = 60, startY = 30;
  for (let i = 0; i < totaal; i++) {
    const r = Math.floor(i / col);
    const c = i % col;
    const x = startX + c * cellSize;
    const y = startY + r * cellSize;
    const fill = i < percentage ? COLORS.point : "rgba(255,255,255,0.06)";
    cellen.push(`<rect x="${x}" y="${y}" width="${cellSize - 1}" height="${cellSize - 1}" fill="${fill}" stroke="${COLORS.curve}" stroke-width="0.5"/>`);
  }
  return `<svg viewBox="0 0 300 270">
<rect x="0" y="0" width="300" height="270" fill="${COLORS.paper}"/>
<text x="150" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="14" font-family="Arial" font-weight="bold">${percentage}% — ${label}</text>
${cellen.join("")}
<text x="150" y="240" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">${percentage} van de 100 vakjes</text>
<text x="150" y="258" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">(per honderd)</text>
</svg>`;
}

// Tabel: % ↔ breuk ↔ kommagetal voor de meest gebruikte percentages.
function tabelSvg() {
  const rijen = [
    { p: "10%", b: "1/10", k: "0,1" },
    { p: "25%", b: "1/4",  k: "0,25" },
    { p: "50%", b: "1/2",  k: "0,5" },
    { p: "75%", b: "3/4",  k: "0,75" },
    { p: "100%", b: "1",   k: "1" },
  ];
  let svg = `<svg viewBox="0 0 320 230">
<rect x="0" y="0" width="320" height="230" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="14" font-family="Arial" font-weight="bold">3 manieren om hetzelfde te zeggen</text>
<rect x="20" y="35" width="280" height="180" fill="rgba(0,200,83,0.05)" stroke="${COLORS.curve}" stroke-width="1.2" rx="6"/>
<text x="65" y="58" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">%</text>
<text x="160" y="58" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">breuk</text>
<text x="255" y="58" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">komma</text>
<line x1="20" y1="68" x2="300" y2="68" stroke="${COLORS.curve}" stroke-width="0.8"/>
<line x1="110" y1="35" x2="110" y2="215" stroke="${COLORS.curve}" stroke-width="0.5"/>
<line x1="210" y1="35" x2="210" y2="215" stroke="${COLORS.curve}" stroke-width="0.5"/>`;
  rijen.forEach((r, i) => {
    const y = 90 + i * 26;
    svg += `<text x="65" y="${y}" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">${r.p}</text>`;
    svg += `<text x="160" y="${y}" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">${r.b}</text>`;
    svg += `<text x="255" y="${y}" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">${r.k}</text>`;
  });
  svg += `</svg>`;
  return svg;
}

const steps = [
  // STAP 1: Wat is %?
  {
    title: "% betekent 'per honderd'",
    explanation: "Het teken **%** spreek je uit als 'procent'. Het betekent altijd hetzelfde: **per 100**.\n\nDus:\n• **30%** = 30 per 100\n• **50%** = 50 per 100 = de helft\n• **100%** = 100 per 100 = alles\n• **10%** = 10 per 100 = een tiende\n\n**Plaatje om te onthouden**:\nStel je hebt **100 snoepjes**. Je geeft er 30 weg. Dan heb je **30%** weggegeven.\n\n**Waarom % handig is**:\nMet procenten kun je **vergelijken** tussen dingen die verschillend groot zijn. Stel: \n• Klas A heeft 5 mensen met dieren — totaal 25 leerlingen.\n• Klas B heeft 4 mensen met dieren — totaal 20 leerlingen.\n\nWelke klas heeft *naar verhouding* meer dieren-bezitters? Met procenten is dat makkelijk: beide hebben **20%**. Dus gelijk!\n\n**Procent in het echt**:\n• 50% korting in de winkel\n• 80% van de klas slaagde\n• 25% kans op regen\n• 10% van de wereldbevolking spreekt Engels als moedertaal",
    svg: gridSvg(30, "30 van de 100 vakjes"),
    checks: [
      {
        q: "Wat betekent **40%**?",
        options: ["40 per 100","40 keer iets","40 + 100","40 jaar"],
        answer: 0,
        wrongHints: [null,"Procent betekent niet 'keer'. Wat zou 'per' betekenen?","Niet optellen. Procent is een verhouding.","Procent gaat niet over leeftijd of jaren."],
      },
      {
        q: "**100%** — wat betekent dat?",
        options: ["Alles","De helft","Honderd dingen","Niets"],
        answer: 0,
        wrongHints: [null,"Half = 50%, niet 100%.","Niet 'honderd dingen' — het hangt af van waarvan je 100% hebt. 100% van 5 is bijvoorbeeld 5.","Niets = 0%, niet 100%."],
      },
      {
        q: "Stel: 100 leerlingen op school — **45** zijn meisjes. Welk percentage is dat?",
        options: ["45%","50%","55%","45 per 100"],
        answer: 0,
        wrongHints: [null,"Niet automatisch de helft — tel rustig.","Te veel — als 45 meisjes en 55 jongens, hoeveel meisjes is dat?","Klopt qua betekenis, maar bekijk ook de %-notatie."],
      },
    ],
  },

  // STAP 2: % ↔ breuk ↔ komma
  {
    title: "Procent, breuk en kommagetal",
    explanation: "Een procent is **3 manieren om hetzelfde te zeggen**. Procent — breuk — kommagetal.\n\nVoorbeeld:\n• **50%** = **½** = **0,5**\n• **25%** = **¼** = **0,25**\n• **75%** = **¾** = **0,75**\n• **10%** = **¹⁄₁₀** = **0,1**\n\n**Truc 1: van % naar kommagetal**\nDeel door 100 (= komma 2 plekken naar links).\n\n• 35% → 0,35\n• 8% → 0,08\n• 60% → 0,6\n\n**Truc 2: van kommagetal naar %**\nMaal 100 (= komma 2 plekken naar rechts).\n\n• 0,72 → 72%\n• 0,9 → 90%\n• 0,05 → 5%\n\n**Vier sleutel-percentages om vast uit je hoofd te leren**:\n\n| % | breuk | wat het betekent |\n|---|-------|-------|\n| **25%** | ¼ | een vierde |\n| **50%** | ½ | de helft |\n| **75%** | ¾ | drie kwart |\n| **100%** | 1 | alles |\n\nMet alleen deze 4 kun je heel veel Cito-vragen al doen!",
    svg: tabelSvg(),
    checks: [
      {
        q: "**75%** = ?",
        options: ["¾","½","⅓","⅖"],
        answer: 0,
        wrongHints: [null,"½ = 50%. 75% is meer dan de helft.","⅓ ≈ 33%. Te weinig.","Past niet bij de standaard-percentages."],
      },
      {
        q: "**0,25** als percentage?",
        options: ["25%","2,5%","250%","0,25%"],
        answer: 0,
        wrongHints: [null,"Komma 1 plek verkeerd geschoven. Maal 100 = 2 plaatsen naar rechts.","Veel te veel — 250% zou méér dan alles zijn.","Helemaal geen plaatsen verschoven — je moet × 100 doen."],
      },
      {
        q: "**60%** als kommagetal?",
        options: ["0,6","0,06","6","60"],
        answer: 0,
        wrongHints: [null,"Komma 1 plek te ver — je hebt 2 plekken verschoven moeten doen, niet 3.","Geen procent meer — eerst delen door 100.","Geen kommagetal — eerst delen door 100."],
      },
    ],
  },

  // STAP 3: Hoeveel is X% van Y?
  {
    title: "Hoeveel is X% van een getal?",
    explanation: "Veel Cito-vragen vragen: *'Hoeveel is X% van Y?'*\n\nVoorbeeld: *'Hoeveel is 20% van 60?'*\n\n**Aanpak 1 — via 1%** *(handig voor lastige getallen)*:\n• 1% van 60 = 60 ÷ 100 = 0,6\n• 20% = 20 × 0,6 = **12**\n\n**Aanpak 2 — via kommagetal**:\n• 20% = 0,20\n• 0,20 × 60 = **12**\n\n**Aanpak 3 — slim met breuken** *(snelst voor 25/50/75/10/20%)*:\n• 50% van 60 = 60 ÷ 2 = **30** (de helft)\n• 25% van 60 = 60 ÷ 4 = **15** (een vierde)\n• 10% van 60 = 60 ÷ 10 = **6**\n• 20% van 60 = 2 × (10% van 60) = 2 × 6 = **12**\n\n**De 10%-truc** *(super-handig)*:\n10% is altijd **÷ 10**. Daarna kun je elke 10%-stap optellen.\n\nVoorbeelden:\n• 10% van 80 = 8\n• 30% van 80 = 3 × 8 = 24\n• 70% van 80 = 7 × 8 = 56\n\n**Hint bij Cito**:\nKijk eerst of het een 'mooi' percentage is (10, 25, 50, 75, 100). Zo ja → gebruik de breuken-truc. Zo niet → eerst 1% of 10% berekenen, dan vermenigvuldigen.",
    checks: [
      {
        q: "**50% van 80** = ?",
        options: ["40","20","60","8"],
        answer: 0,
        wrongHints: [null,"Te weinig — 50% is de helft. Wat is de helft van 80?","Te veel — 50% is precies de helft, niet meer.","Veel te weinig — dat is 10% van 80."],
      },
      {
        q: "**10% van 250** = ?",
        options: ["25","2,5","250","100"],
        answer: 0,
        wrongHints: [null,"Komma verkeerd — heb je per ongeluk × 0,01 ipv ÷ 10 gedaan?","Geen verandering — heb je überhaupt iets gedaan? 10% is ÷ 10.","Te veel — dat zou 40% zijn."],
      },
      {
        q: "Een fiets kost **€ 200**. **25% korting**. Hoeveel **bespaar je**?",
        options: ["€ 50","€ 25","€ 75","€ 175"],
        answer: 0,
        wrongHints: [null,"Te weinig — 25% is een vierde. Wat is een vierde van € 200?","Te veel — dat zou 37,5% zijn.","Klopt niet — dat is wat de fiets nu KOST, niet wat je bespaart. Lees de vraag."],
      },
      {
        q: "Op een toets van **40 vragen** maakt Lisa er **75% goed**. Hoeveel zijn dat?",
        options: ["30","25","35","20"],
        answer: 0,
        wrongHints: [null,"Te weinig — 75% is meer dan de helft.","Te veel — heb je per ongeluk goed PLUS fout opgeteld?","Te weinig — 75% is bijna alles, 50% is 20."],
      },
    ],
  },

  // STAP 4: Vier-stap-sommen winkel
  {
    title: "% in de winkel — slimme tactiek",
    explanation: "In de winkel zie je vaak korting-bordjes. Bijvoorbeeld:\n\n*'Spijkerbroek normaal € 60. Nu 25% korting.'*\n\n**Vraag**: hoeveel betaal je nu?\n\n**Slimme aanpak — 2 manieren**:\n\n**Manier 1 — bereken korting, trek af**:\n• Korting = 25% van € 60 = ¼ × 60 = **€ 15**\n• Nieuwe prijs = 60 − 15 = **€ 45**\n\n**Manier 2 — direct het overgebleven deel** *(sneller!)*:\n• Als je 25% korting krijgt, betaal je nog **75%** *(want 100% − 25% = 75%)*.\n• 75% van € 60 = ¾ × 60 = **€ 45**.\n\nManier 2 is **één stap sneller** — je hoeft niet eerst korting te berekenen + dan af te trekken.\n\n**Cito-trucs voor populaire kortingen**:\n• **50% korting** → betaal je de helft\n• **25% korting** → betaal je 75% (drie kwart)\n• **10% korting** → betaal je 90%\n• **75% korting** → betaal je 25% (een kwart)\n\n**Voorbeeldsom**:\n*'Een telefoon van € 400 heeft 30% korting. Wat betaal je?'*\n\n**Manier 2 (snelst)**:\n• Je betaalt 100 − 30 = 70%.\n• 10% van 400 = 40.\n• 70% = 7 × 40 = **€ 280**.",
    checks: [
      {
        q: "Een schoen normaal **€ 80**, met **25% korting**. Hoeveel **betaal je**?",
        options: ["€ 60","€ 20","€ 40","€ 75"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is wat je BESPAART, niet wat je betaalt. Trek af van 80.","Te weinig — 25% van 80 = 20, dus je betaalt 80 − 20.","Te veel — heb je überhaupt korting gepakt?"],
      },
      {
        q: "Een tas van **€ 50** heeft **50% korting**. Wat **betaal** je?",
        options: ["€ 25","€ 50","€ 0","€ 75"],
        answer: 0,
        wrongHints: [null,"Geen korting toegepast — heb je 50% wel gerekend?","Niet alles gratis — 50% korting betekent halve prijs.","Hoger dan de oorspronkelijke prijs — kan niet bij korting."],
      },
      {
        q: "Een t-shirt van **€ 30** heeft **10% korting**. Wat is de **nieuwe prijs**?",
        options: ["€ 27","€ 3","€ 33","€ 20"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is alleen het korting-bedrag, niet de nieuwe prijs.","Hoger dan oorspronkelijk — bij korting wordt 't goedkoper.","Te weinig — 10% korting is maar een klein beetje lager."],
      },
    ],
  },

  // STAP 5: Welk % is X van Y?
  {
    title: "Welk percentage is dit van het totaal?",
    explanation: "De omgekeerde Cito-vraag: *'X van Y — welk percentage is dat?'*\n\nVoorbeeld: *'In een klas van 25 leerlingen zijn 5 meisjes. Welk percentage meisjes is dat?'*\n\n**Aanpak — de gouden regel**:\n• % = (deel ÷ totaal) × 100\n• Hier: 5 ÷ 25 = 0,20 → × 100 = **20%**\n\n**Slimme aanpak voor kleine breuken** *(sneller)*:\n• 5 op 25 = 1 op 5 *(beide ÷ 5)* = 1/5 = **20%**\n• Hoofd: 1/5 = 20%, 1/4 = 25%, 1/2 = 50%, 1/10 = 10%.\n\n**Cito-voorbeelden**:\n*'Op een toets van 40 vragen heeft Tim 30 goed. Welk percentage is dat?'*\n• 30/40 = 3/4 = **75%**.\n\n*'Van de 200 leerlingen op school spelen er 40 voetbal. Welk percentage?'*\n• 40/200 = 1/5 = **20%**.\n\n**Truc**: probeer eerst te delen tot je een 'mooie' breuk krijgt (1/2, 1/4, 1/5, 1/10).\n\n**Veel-voorkomende fout**:\nVergeten te × 100. Dan krijg je 0,2 ipv 20%. Beide kloppen wiskundig, maar de vraag vraagt een **percentage**.",
    checks: [
      {
        q: "Op een toets van **20 vragen** heeft Sven **15 goed**. Welk **percentage**?",
        options: ["75%","15%","85%","60%"],
        answer: 0,
        wrongHints: [null,"Niet het aantal goed-antwoorden — dat is je teller, niet het percentage.","Dat zou 17 goed zijn — niet hier.","Te weinig — 15 van 20 is meer dan de helft."],
      },
      {
        q: "In een klas van **25 leerlingen** spelen **5 voetbal**. Welk **percentage**?",
        options: ["20%","5%","25%","10%"],
        answer: 0,
        wrongHints: [null,"Niet het aantal voetballers — dat is alleen de teller.","Te veel — 5 op 25 is niet 1 op 4.","Te weinig — 1 op 25 zou 4% zijn, hier 5 op 25."],
      },
      {
        q: "Van **50 vogels** zijn **30 mussen**. Welk **percentage** is geen mus?",
        options: ["40%","60%","30%","20%"],
        answer: 0,
        wrongHints: [null,"Lees nogmaals: hoeveel zijn er GEEN mus? 50 − 30 = 20 → 20/50 = ?","Dat is het percentage WEL-mussen. Vraag is het tegenovergestelde.","Niet het aantal — eerst delen door totaal × 100.","Te weinig — 20 op 50 = 2 op 5."],
      },
    ],
  },

  // STAP 6: Korting in de winkel - meer praktijk
  {
    title: "Praktijk-sommen — winkel + sport",
    explanation: "Tijd voor mix-sommen in Cito-stijl. **Lees rustig en onderstreep getallen + percentages**.\n\n**Stappenplan voor elke %-som**:\n1. **Wat ken ik?** Het totaal of het deel?\n2. **Wat zoek ik?** Het andere deel, of het percentage?\n3. **Welke aanpak?** 1%-truc, 10%-truc, of breuken-truc?\n4. **Schrijf op** en reken in stapjes.\n\n**Voorbeeld — sport**:\n*'Marc speelt 50 wedstrijden basketbal. Hij won 30. Welk percentage gewonnen?'*\n• 30/50 = 3/5 = 60%.\n\n**Voorbeeld — winkel**:\n*'Een bagagetas was € 60. Met 40% korting?'*\n• Snel: betaal je 60% → 60% van 60 = 6 × 6 = € 36.\n\n**Voorbeeld — combinatie**:\n*'Anna bespaart € 15 op een truitje van € 60. Welk korting-percentage?'*\n• 15/60 = 1/4 = **25% korting**.\n\n**Veel-voorkomende val**:\n• 'Welk percentage MEER?' vraagt iets anders dan 'Welk percentage IS het?'. Lees rustig.\n• 'Korting' = aftrek. 'Toename' = optel.",
    checks: [
      {
        q: "Een hoodie van **€ 80** heeft **40% korting**. Wat **betaal** je?",
        options: ["€ 48","€ 32","€ 40","€ 24"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is wat je BESPAART, niet wat je betaalt.","Te weinig — 40% korting betekent betalen van 60%, niet 50%.","Veel te weinig."],
      },
      {
        q: "**Op 30 voetbalwedstrijden won Tom er 18.** Welk **percentage gewonnen**?",
        options: ["60%","30%","40%","18%"],
        answer: 0,
        wrongHints: [null,"Niet het aantal wedstrijden — dat is totaal.","Te weinig — 18 is meer dan de helft van 30.","Niet het aantal gewonnen — eerst delen door totaal × 100."],
      },
      {
        q: "Een laptop kost **€ 800**. Anna betaalt **€ 720**. Welk **kortings-percentage**?",
        options: ["10%","20%","80%","8%"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je 800 − 720 = 80 niet vergelijken met de oorspronkelijke prijs?","Te veel — wat is € 800 − € 720? Vergelijk met € 800.","Klopt niet — dat zou betekenen € 720 korting, niet € 80.","Klopt niet — vergelijk € 80 op € 800."],
      },
      {
        q: "In een doos zitten **40 chocoladekoekjes**. **30% van de koekjes is melk-chocolade**. Hoeveel zijn dat?",
        options: ["12","30","10","8"],
        answer: 0,
        wrongHints: [null,"Niet het percentage — dat is de vraag-input. Reken het uit.","Te weinig — 30% van 40 is meer dan een tiende.","Te weinig — denk: 10% van 40 = 4, dus 30% = 3 × 4."],
      },
    ],
  },

  // STAP 7: Eindopdracht — Cito-mix
  {
    title: "Cito-eindopdracht — mix",
    explanation: "Mix-toets in echte Cito-stijl. Verschillende sommen door elkaar — winkel, sport, school, korting, gewoon-percentage. **Lees rustig** en gebruik de aanpak uit stap 6.\n\n**Tip**: bij twijfel — vul je antwoord even in en check terug. Klopt het verhaal? Dan zit je goed.\n\nVeel succes!",
    checks: [
      {
        q: "**40% van 90** = ?",
        options: ["36","32","45","30"],
        answer: 0,
        wrongHints: [null,"Te weinig — denk: 10% van 90 = 9, dus 40% = 4 × 9.","Te veel — dat is 50%.","Te weinig — heb je 30% gerekend?"],
      },
      {
        q: "Een trui kost **€ 50**, **20% korting**. Wat **betaal** je?",
        options: ["€ 40","€ 30","€ 10","€ 45"],
        answer: 0,
        wrongHints: [null,"Te weinig — 20% korting is niet halveren.","Veel te weinig — dat is alleen het korting-bedrag.","Te veel — 20% korting is meer dan 10%."],
      },
      {
        q: "Op school halen **80% van 50 leerlingen** een voldoende. Hoeveel zijn dat?",
        options: ["40","30","45","8"],
        answer: 0,
        wrongHints: [null,"Te weinig — 80% is veel meer dan de helft.","Te veel — dat zou 90% zijn.","Veel te weinig — heb je per ongeluk 80% genomen als '8 leerlingen op 50'?"],
      },
      {
        q: "Eline scoorde **15 op een toets van 20**. Welk **percentage**?",
        options: ["75%","60%","85%","50%"],
        answer: 0,
        wrongHints: [null,"Te weinig — 15 op 20 is meer dan 60%. Probeer 15/20 te vereenvoudigen.","Te veel — 15 op 20 is niet zo hoog.","Te weinig — 15 op 20 is meer dan de helft."],
      },
      {
        q: "Een fiets van **€ 300** heeft **50% korting**. Wat **bespaar** je?",
        options: ["€ 150","€ 50","€ 300","€ 100"],
        answer: 0,
        wrongHints: [null,"Te weinig — 50% korting is de halve prijs.","Klopt niet — dat is alles, je krijgt geen 100% korting.","Te weinig — 50% van 300 is meer dan 100."],
      },
      {
        q: "Een waterfles bevat **2 L**. Je drinkt **75%**. Hoeveel **L** drink je?",
        options: ["1,5","0,5","2","1"],
        answer: 0,
        wrongHints: [null,"Te weinig — 75% is meer dan de helft.","Klopt niet — heb je 75% gedronken? Dan blijft maar weinig over.","Te weinig — dat is 50%, niet 75%."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const procentenPo = {
  id: "procenten-po",
  title: "Procenten — Cito groep 5-8",
  emoji: "💯",
  level: "groep5-8",
  subject: "rekenen",
  // SLO-niveau (S4 audit-3 2026-05-08): 1F einde-basisschool. Cito-onderdeel
  // verhoudingen + procenten in praktijkcontext.
  referentieNiveau: "1F",
  sloThema: "Verhoudingen — procenten",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "breuken-po", title: "Breuken", niveau: "po-1F" },
  ],
  intro:
    "Procenten voor groep 5-8 — wat % betekent, hoe je ermee rekent, korting in de winkel, hoeveel % is X van Y. Met Cito-stijl praktijksommen. ~15 min.",
  triggerKeywords: [
    "procent","procenten","%","korting","percentage",
    "uitverkoop","goedkoper","duurder","verhouding",
  ],
  chapters,
  steps,
};

export default procentenPo;
