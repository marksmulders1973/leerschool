// Leerpad: Klokkijken — analoog + digitaal lezen
// 9 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: groep 3-5 basisschool (~6-9 jaar).

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  klokRand: "#ffd54f",
  uurWijzer: "#ef6c00",
  minWijzer: "#5d9cec",
  centerDot: "#fff",
  digital: "#69f0ae",
};

const stepEmojis = ["🕐","🕒","🕢","🕓","🕔","🕕","🌅","➕","🏆"];

const chapters = [
  { letter: "A", title: "De klok kennen", emoji: "🕐", from: 0, to: 0 },
  { letter: "B", title: "Hele en halve uren", emoji: "🕒", from: 1, to: 2 },
  { letter: "C", title: "Kwartieren + minuten", emoji: "🕓", from: 3, to: 4 },
  { letter: "D", title: "Digitaal + 24-uurs", emoji: "🌅", from: 5, to: 6 },
  { letter: "E", title: "Tijd berekenen + eindopdracht", emoji: "🏆", from: 7, to: 8 },
];

// Klok-SVG: tekent een analoge klok met uur (0-11) + minuten (0-59).
function klokSvg(uur, minuten = 0, opts = {}) {
  const showLabels = opts.showLabels !== false;
  const cx = 100, cy = 100, r = 80;
  // Wijzer-hoeken (in graden vanaf 12 uur, klokwijs)
  const minHoek = (minuten / 60) * 360;
  const uurHoek = (((uur % 12) + minuten / 60) / 12) * 360;
  // Convert hoek naar x/y vanaf middelpunt (0° = boven)
  const hoek2xy = (hoek, lengte) => {
    const rad = ((hoek - 90) * Math.PI) / 180;
    return [cx + Math.cos(rad) * lengte, cy + Math.sin(rad) * lengte];
  };
  const [umx, umy] = hoek2xy(uurHoek, 40);  // Uurwijzer korter
  const [mmx, mmy] = hoek2xy(minHoek, 60);  // Minutenwijzer langer

  // 12 uurnummers
  const cijfers = [];
  for (let i = 1; i <= 12; i++) {
    const [x, y] = hoek2xy(i * 30, 65);
    cijfers.push(`<text x="${x}" y="${y + 4}" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">${i}</text>`);
  }

  // 60 minuut-tikjes
  const tikjes = [];
  for (let i = 0; i < 60; i++) {
    const isUur = i % 5 === 0;
    const [x1, y1] = hoek2xy(i * 6, r);
    const [x2, y2] = hoek2xy(i * 6, r - (isUur ? 6 : 3));
    tikjes.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${COLORS.muted}" stroke-width="${isUur ? 1.5 : 0.5}"/>`);
  }

  return `<svg viewBox="0 0 200 200">
<rect x="0" y="0" width="200" height="200" fill="${COLORS.paper}"/>
<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgba(255,255,255,0.06)" stroke="${COLORS.klokRand}" stroke-width="3"/>
${tikjes.join('')}
${showLabels ? cijfers.join('') : ''}
<line x1="${cx}" y1="${cy}" x2="${umx}" y2="${umy}" stroke="${COLORS.uurWijzer}" stroke-width="5" stroke-linecap="round"/>
<line x1="${cx}" y1="${cy}" x2="${mmx}" y2="${mmy}" stroke="${COLORS.minWijzer}" stroke-width="3" stroke-linecap="round"/>
<circle cx="${cx}" cy="${cy}" r="4" fill="${COLORS.centerDot}"/>
</svg>`;
}

// Twee klokken naast elkaar.
function tweeKlokSvg(uur1, min1, uur2, min2, label1 = "", label2 = "") {
  return `<svg viewBox="0 0 400 220">
<g transform="translate(0,20)">${klokSvg(uur1, min1).replace('<svg viewBox="0 0 200 200">', '<g>').replace('</svg>', '</g>')}</g>
<g transform="translate(200,20)">${klokSvg(uur2, min2).replace('<svg viewBox="0 0 200 200">', '<g>').replace('</svg>', '</g>')}</g>
${label1 ? `<text x="100" y="218" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">${label1}</text>` : ''}
${label2 ? `<text x="300" y="218" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">${label2}</text>` : ''}
</svg>`;
}

const steps = [
  {
    title: "Wat is een klok?",
    explanation: "Een **klok** vertelt hoe laat het is. Er zijn twee soorten:\n\n**1. Analoge klok** *(met wijzers)*\n• Een rond klokje met **12 cijfers** (1 t/m 12) langs de rand.\n• Twee **wijzers** (de kleine + de grote pijl).\n• Soms een derde dunne wijzer voor de seconden.\n\n**2. Digitale klok** *(met cijfers)*\n• Toont de tijd als getallen: 14:30, 09:45, etc.\n• Vooral op telefoons en magnetrons.\n• Geen wijzers nodig.\n\n**De wijzers van een analoge klok**:\n\n• **Kleine wijzer** = **uurwijzer**. Die zegt **hoeveel uur** het is. Beweegt langzaam.\n• **Grote wijzer** = **minutenwijzer**. Die zegt **hoeveel minuten** voorbij het uur. Beweegt sneller.\n• **Hele dunne wijzer** (als die er is) = **secondewijzer**. Beweegt het snelst.\n\n**Belangrijk**: kleine wijzer = uur. Grote wijzer = minuten.\n\n**Hoe lang duurt 1 wijzer-rondje?**\n• Uurwijzer: 1 rondje = **12 uur** (een hele halve dag).\n• Minutenwijzer: 1 rondje = **60 minuten = 1 uur**.\n• Secondewijzer: 1 rondje = **60 seconden = 1 minuut**.\n\n**1 uur = 60 minuten**. **1 dag = 24 uur**.\n\nDe meeste mensen lezen klokken tegenwoordig digitaal (op de telefoon). Maar analoog blijft handig — bijvoorbeeld stationsklokken en oude klokken.",
    svg: klokSvg(3, 0),
    checks: [
      {
        q: "Wat is de **kleine wijzer** van een klok?",
        options: ["De uurwijzer","De minutenwijzer","De secondewijzer","De decoratie"],
        answer: 0,
        wrongHints: [null,"Andersom — de minutenwijzer is groot.","De secondewijzer is meestal heel dun.","Wijzers zijn er voor het lezen, niet voor decoratie."],
      },
      {
        q: "Hoeveel minuten zitten er in 1 uur?",
        options: ["60","30","100","24"],
        answer: 0,
        wrongHints: [null,"30 = halve uur.","Tijden gebruiken geen 100-systeem.","24 = uren in een dag."],
      },
    ],
  },
  {
    title: "Hele uren — 'het is 3 uur'",
    explanation: "**Hele uren** zijn de makkelijkste tijden om af te lezen.\n\n**Hoe herken je een heel uur?**\n• De **grote wijzer** (minuten) staat op de **12**.\n• De **kleine wijzer** (uur) wijst naar een **getal**.\n\n**Voorbeelden**:\n• Grote op 12, kleine op 3 → **3 uur** *(of: 03:00 / 15:00)*\n• Grote op 12, kleine op 9 → **9 uur** *(09:00 / 21:00)*\n• Grote op 12, kleine op 12 → **12 uur** *(12:00 / 00:00)*\n\n**Voor de middag of erna?**\n• 's Ochtends, voor 12 uur = **AM** (Latijn: ante meridiem).\n• 's Middags/avonds, na 12 uur = **PM** (post meridiem).\n• In Nederland gebruiken we vaak het **24-uurs format**:\n  - 's Morgens 9 uur = **09:00**\n  - 's Avonds 9 uur = **21:00** (12 + 9)\n\n**Hoe je tijd zegt in het Nederlands**:\n• 'Het is 3 uur' (geen extra 'precies' nodig)\n• 'Het is precies 8 uur'\n• Op heel uur: minutenwijzer staat exact omhoog (op 12).\n\n**Tip om te onthouden**:\nDe minutenwijzer heeft **12 vakjes** voor de cijfers. Tussen 2 cijfers zitten **5 minuten**. Dus 12-cijfer-naar-1 = 5 minuten. **Die info is straks belangrijk** voor minuten-aflezen.",
    svg: klokSvg(3, 0),
    checks: [
      {
        q: "Hoe staan de wijzers bij **3 uur** precies?",
        options: ["Grote op 12, kleine op 3","Grote op 3, kleine op 12","Beide op 3","Beide op 12"],
        answer: 0,
        wrongHints: [null,"Andersom — de uur-wijzer wijst naar 3.","Bij heel uur staan ze niet beide op hetzelfde cijfer.","Bij 12 uur staan ze beide op 12."],
      },
      {
        q: "Hoe is **9 uur 's avonds** in 24-uurs format?",
        options: ["21:00","09:00","19:00","12:00"],
        answer: 0,
        wrongHints: [null,"Dat is 9 uur 's ochtends.","Dat is 7 uur 's avonds.","Dat is 12 uur (middag of nacht)."],
      },
    ],
  },
  {
    title: "Halve uren — 'half 3 = 14:30'",
    explanation: "**Halve uren** zijn iets lastiger — vooral in het Nederlands. Wij zeggen **'half 3'** ipv **'2 uur en een half'** (Engels: 'half past two').\n\n**Hoe herken je een half uur?**\n• De **grote wijzer** staat op de **6** (precies onder).\n• De **kleine wijzer** staat **tussen twee cijfers** (halverwege).\n\n**Voorbeeld**:\nGrote op 6, kleine net voorbij 2 → **half 3** *(14:30)*\n\n**Pas op — Nederlands is anders dan Engels!**\n• Nederlands: 'het is **half 3**' = 30 minuten **vóór** 3 uur = 02:30 of 14:30\n• Engels: 'it is **half past two**' = 30 minuten **ná** 2 uur = zelfde tijd, andere uitdrukking\n\nIn het Nederlands tellen we vooruit: 'half 3' betekent 'we zijn op weg naar 3 uur, en we zijn er half'.\n\n**Voorbeelden**:\n• Grote op 6, kleine net voor 6 → **half 6** *(05:30 of 17:30)*\n• Grote op 6, kleine net voor 8 → **half 8** *(07:30 of 19:30)*\n• Grote op 6, kleine net voor 12 → **half 12** *(11:30 of 23:30)*\n\n**Trucje**: in het Nederlands kijk je naar het **volgende cijfer**. De kleine wijzer staat tussen 7 en 8 → 'half **8**' (kijk naar 8, het volgende cijfer).\n\n**In digitaal format**:\n• Half 3 = **02:30** of **14:30**\n• Half 8 = **07:30** of **19:30**\n• Half 12 = **11:30** of **23:30**",
    svg: klokSvg(2, 30),
    checks: [
      {
        q: "Wat is **half 5** in 24-uurs format ('s middags)?",
        options: ["16:30","17:30","04:30","15:30"],
        answer: 0,
        wrongHints: [null,"Dat is half 6.","04:30 is 's nachts, niet 's middags.","Dat is half 4."],
      },
      {
        q: "Bij **half 8** staat de **kleine wijzer**...",
        options: ["Tussen 7 en 8","Op 8","Op 7","Tussen 8 en 9"],
        answer: 0,
        wrongHints: [null,"De kleine wijzer is halverwege twee uren.","Bij precies 8 uur staat 'ie op 8.","Bij 7 uur staat 'ie op 7.","Dan zou het al na 8 zijn."],
      },
      {
        q: "Hoe heet **half 3** in digitaal?",
        options: ["02:30 of 14:30","03:30 of 15:30","02:00 of 14:00","03:00 of 15:00"],
        answer: 0,
        wrongHints: [null,"Half 3 betekent 30 min VÓÓR 3 — dus uur 2 nog.","Half 3 = met halve uur, niet uur 2 zelf.","Halve uur betekent dat de minuten ook 30 zijn."],
      },
    ],
  },
  {
    title: "Kwartieren — kwart over en kwart voor",
    explanation: "Een **kwartier** is **15 minuten**. 4 kwartieren = 1 uur. Er zijn 2 kwartier-tijden:\n\n**'Kwart over'** *(15 minuten over het hele uur)*\n• Grote wijzer op de **3** (rechts).\n• Kleine wijzer net na een cijfer.\n• Voorbeeld: Grote op 3, kleine net na 4 → **kwart over 4** *(04:15 of 16:15)*\n\n**'Kwart voor'** *(15 minuten voor het volgende uur)*\n• Grote wijzer op de **9** (links).\n• Kleine wijzer net voor een cijfer.\n• Voorbeeld: Grote op 9, kleine net voor 5 → **kwart voor 5** *(04:45 of 16:45)*\n\n**Geheugenhulp** voor de minutenwijzer:\n• **12 (boven)** = heel uur (00 min)\n• **3 (rechts)** = kwart over (15 min)\n• **6 (onder)** = half (30 min)\n• **9 (links)** = kwart voor (45 min)\n\n**Voorbeelden in 24-uurs format**:\n\n| Klok zegt | Digitaal |\n|---|---|\n| 4 uur | 04:00 / 16:00 |\n| Kwart over 4 | 04:15 / 16:15 |\n| Half 5 | 04:30 / 16:30 |\n| Kwart voor 5 | 04:45 / 16:45 |\n| 5 uur | 05:00 / 17:00 |\n\nElk **kwartier** = 15 minuten verder.\n\n**Pas op**:\n• 'Kwart over 4' = **04:15** (na 4 uur).\n• 'Kwart voor 5' = **04:45** (vóór 5 uur).\n\nDe **uur-tijd** verandert: 'kwart voor 5' is nog steeds in het uur 4, maar we zeggen 5 omdat we het volgende uur al zien aankomen.",
    svg: tweeKlokSvg(4, 15, 4, 45, "kwart over 4", "kwart voor 5"),
    checks: [
      {
        q: "Hoeveel minuten zitten in een **kwartier**?",
        options: ["15","30","60","20"],
        answer: 0,
        wrongHints: [null,"Dat is een half uur.","Dat is een heel uur.","Niet een gangbare tijd-eenheid."],
      },
      {
        q: "Bij **kwart over 6** staat de grote wijzer op...",
        options: ["3","6","9","12"],
        answer: 0,
        wrongHints: [null,"Dat is half uur.","Dat is kwart voor.","Dat is heel uur."],
      },
      {
        q: "Wat is **kwart voor 9** in 24-uurs format ('s avonds)?",
        options: ["20:45","21:15","21:45","20:15"],
        answer: 0,
        wrongHints: [null,"Dat is kwart over 9.","Dat is kwart voor 10.","Dat is kwart over 8."],
      },
    ],
  },
  {
    title: "Minuten — 5 over, 10 voor, etc.",
    explanation: "Tussen de **kwartiertjes** zit nog meer tijd. Elk **getal** op de klok is **5 minuten** verder dan het vorige.\n\n**Op de minutenwijzer**:\n\n| Wijzer wijst naar | Aantal minuten over heel uur |\n|---|---|\n| 12 | 0 (heel uur) |\n| 1 | 5 |\n| 2 | 10 |\n| 3 | 15 (kwart over) |\n| 4 | 20 |\n| 5 | 25 |\n| 6 | 30 (half) |\n| 7 | 35 |\n| 8 | 40 |\n| 9 | 45 (kwart voor) |\n| 10 | 50 |\n| 11 | 55 |\n\n**Hoe noem je tussentijden?**\n\n**Eerste helft** *(0-30 min):* '... over ...'\n• 5 over 4 = 04:05 — minutenwijzer op 1, klein op 4.\n• 10 over 4 = 04:10 — minutenwijzer op 2.\n• 25 over 4 = 04:25 — minutenwijzer op 5.\n\n**Vanaf half** *(31-59 min):* '... voor ...'\n• Vanaf 35 minuten zeggen Nederlanders **'voor het volgende uur'**.\n• 25 voor 5 = 04:35 — minutenwijzer op 7. *(Nog 25 min tot 5 uur)*\n• 20 voor 5 = 04:40 — minutenwijzer op 8.\n• 10 voor 5 = 04:50 — minutenwijzer op 10.\n• 5 voor 5 = 04:55 — minutenwijzer op 11.\n\n**Speciale gevallen rond 'half'**:\n• 5 voor half = nog 5 voor half (bv. 04:25 = 5 voor half 5)\n• 5 over half = 5 minuten na half (bv. 04:35 = 5 over half 5)\n\n**Maar het simpele systeem werkt ook**: 04:25 = '25 over 4' (eerste helft), 04:35 = '25 voor 5' (tweede helft). Veel kinderen leren het zo, en dat is helemaal goed.\n\n**Top-tip**: **kijk eerst naar de minutenwijzer**. Telt 'ie minder dan 30? Dan **'over'**. Meer dan 30? Dan **'voor'** + volgende uur.",
    svg: tweeKlokSvg(4, 10, 4, 50, "10 over 4", "10 voor 5"),
    checks: [
      {
        q: "Hoeveel minuten zitten tussen **2 cijfers** op de klok?",
        options: ["5","10","12","15"],
        answer: 0,
        wrongHints: [null,"Te veel — denk: 60 minuten ÷ 12 cijfers.","12 = aantal cijfers, niet minuten.","15 minuten = 3 cijfers verder (een kwartier)."],
      },
      {
        q: "Als de grote wijzer op **2** staat: hoeveel minuten over heel uur?",
        options: ["10","2","20","12"],
        answer: 0,
        wrongHints: [null,"De grote wijzer is in minuten, niet uren.","Dat is bij wijzer op 4.","12 = positie van de wijzer, niet minuten."],
      },
      {
        q: "Wat is **10 over 7** in 24-uurs ('s avonds)?",
        options: ["19:10","07:10","19:50","18:50"],
        answer: 0,
        wrongHints: [null,"'s ochtends, niet 's avonds.","Dat is 10 voor 8.","Dat is 10 voor 7."],
      },
    ],
  },
  {
    title: "Digitale klok + 24-uurs format",
    explanation: "Een **digitale klok** is veel makkelijker te lezen — de tijd staat al uitgeschreven.\n\n**Voorbeelden**:\n• **08:30** = half 9 's ochtends\n• **14:15** = kwart over 2 's middags\n• **22:45** = kwart voor 11 's avonds\n\n**Hoe lees je een digitale tijd?**\n• Voor de dubbele punt: het **uur**.\n• Na de dubbele punt: de **minuten**.\n\n**Twee formaten**:\n\n**12-uurs format** *(Engelse landen)*:\n• Loopt van 1 uur 's nachts tot 12 uur 's middags, dan weer van 1 tot 12 's avonds.\n• Gebruikt **AM** (voor 12) en **PM** (na 12).\n• Voorbeeld: 9:30 PM = 's avonds, 9:30 AM = 's ochtends.\n\n**24-uurs format** *(Europa, dus ook NL)*:\n• Loopt van 00:00 (middernacht) tot 23:59.\n• Geen AM/PM nodig.\n• 's Avonds 9 uur = **21:00**.\n• Middag: 12:00. Middernacht: 00:00.\n\n**Verschil tussen 12 en 24**:\n\n| 12-uurs | 24-uurs |\n|---|---|\n| 12:00 AM | 00:00 (middernacht) |\n| 06:30 AM | 06:30 |\n| 12:00 PM | 12:00 (middag) |\n| 03:00 PM | 15:00 |\n| 09:30 PM | 21:30 |\n| 11:59 PM | 23:59 |\n\n**Truc voor PM-tijden** (na 12 uur 's middags):\n• PM-tijd + 12 = 24-uurs tijd.\n• 5 PM + 12 = **17:00**.\n• 8:30 PM + 12 = **20:30**.\n\n**Wanneer welk format?**\n• Trein- en busschema's: **24-uurs**.\n• Weegelijke gesprekken: vaak '5 uur' zonder uitleg (men weet of 't ochtend of avond is).\n• Engelstalige films: **12-uurs** met AM/PM.",
    svg: klokSvg(14, 30, { showLabels: true }),
    checks: [
      {
        q: "**21:00** in 12-uurs format is...",
        options: ["9:00 PM","9:00 AM","21:00 PM","12:00 PM"],
        answer: 0,
        wrongHints: [null,"AM is 's ochtends.","Geen 24-uur in 12-uur format.","12:00 PM is middag."],
      },
      {
        q: "Hoeveel minuten staat **08:45**?",
        options: ["45 minuten over 8 (kwart voor 9)","8 uur en 45 seconden","45 voor 8","Halve 9"],
        answer: 0,
        wrongHints: [null,"Niet seconden — minuten.","45 voor 8 zou 7:15 zijn.","Halve 9 = 8:30."],
      },
      {
        q: "Wat is **middernacht** in 24-uurs format?",
        options: ["00:00","12:00","24:00","23:00"],
        answer: 0,
        wrongHints: [null,"12:00 is middag.","24:00 bestaat niet — gaat over in 00:00.","Dat is 23 uur, een uur voor middernacht."],
      },
    ],
  },
  {
    title: "Tijd berekenen — hoe lang duurt iets?",
    explanation: "Soms wil je weten **hoe lang** iets duurt. Bijvoorbeeld: een film begint om 19:30 en duurt tot 21:15. Hoe lang duurt 'ie?\n\n**Stappen om te rekenen**:\n\n**Stap 1**: schrijf de **eindtijd** en **begintijd** op.\n**Stap 2**: tel **uren** verschil.\n**Stap 3**: tel **minuten** verschil.\n**Stap 4**: combineer.\n\n**Voorbeeld 1**: 09:30 → 11:45\n• Stap 1: begin = 09:30, eind = 11:45.\n• Stap 2: 11 - 9 = 2 uur.\n• Stap 3: 45 - 30 = 15 minuten.\n• **Antwoord: 2 uur 15 minuten**.\n\n**Voorbeeld 2 (lastiger)**: 14:50 → 17:20\n• Begin = 14:50, eind = 17:20.\n• Uren: 17 - 14 = 3 uur.\n• Minuten: 20 - 50 = **-30** *(kan niet, eindtijd-minuten zijn lager)*\n• Trucje: leen 1 uur. 3 uur wordt 2 uur, en 60 minuten erbij: 60 + 20 = 80 min.\n• Nu: 80 - 50 = 30 minuten.\n• **Antwoord: 2 uur 30 minuten**.\n\n**Tip — snelste methode**: tel vooruit van begintijd:\n• 14:50 → 15:00 = 10 minuten.\n• 15:00 → 17:00 = 2 uur.\n• 17:00 → 17:20 = 20 minuten.\n• Totaal: 10 min + 2 uur + 20 min = **2 uur 30 minuten** ✓\n\n**Voorbeelden uit het dagelijks leven**:\n• Hoe lang school vandaag? Ochtend 8:30 - middag 14:00 = **5 uur 30 min**.\n• Hoe lang voetbaltraining? 18:00 - 19:30 = **1 uur 30 min**.\n• Hoe lang slapen? Naar bed 21:00, opstaan 7:00 = **10 uur**.\n\n**Pas op bij overgang van avond naar ochtend** (passeren middernacht):\n• Naar bed 22:30, opstaan 06:45.\n• Tot 24:00 (middernacht): 24:00 - 22:30 = 1 uur 30 min.\n• Vanaf 00:00 tot 06:45 = 6 uur 45 min.\n• Totaal: 1u30 + 6u45 = **8 uur 15 minuten**.",
    svg: tweeKlokSvg(9, 30, 11, 45, "begin: 09:30", "eind: 11:45"),
    checks: [
      {
        q: "Hoe lang van **08:00** tot **14:00**?",
        options: ["6 uur","8 uur","12 uur","2 uur"],
        answer: 0,
        wrongHints: [null,"14 - 8 = 6, niet 8.","Te lang.","Te kort."],
      },
      {
        q: "Hoe lang van **15:30** tot **17:45**?",
        options: ["2 uur 15 minuten","2 uur","3 uur 15 min","1 uur 45 min"],
        answer: 0,
        wrongHints: [null,"Plus 15 minuten extra.","Andere uur.","1 uur 45 = anders."],
      },
      {
        q: "Naar bed **22:00**, opstaan **07:00**. Hoe lang slapen?",
        options: ["9 uur","8 uur","12 uur","15 uur"],
        answer: 0,
        wrongHints: [null,"22→24 = 2u, 0→7 = 7u, totaal 9u. Niet 8.","Te veel.","Te veel."],
      },
    ],
  },
  {
    title: "Eindopdracht — combineer alles",
    explanation: "Tijd om te combineren!\n\n**Snelle samenvatting**:\n\n| Wijzer | Wat 'ie zegt |\n|---|---|\n| Klein (uur) | Welk uur (kort, oranje) |\n| Groot (minuten) | Hoeveel minuten (langer, blauw) |\n\n**Standaard tijden**:\n\n| Engels | Nederlands | Klok |\n|---|---|---|\n| 4:00 | 4 uur | grote op 12, kleine op 4 |\n| 4:15 | kwart over 4 | grote op 3 |\n| 4:30 | half 5 | grote op 6 |\n| 4:45 | kwart voor 5 | grote op 9 |\n\n**24-uurs vs 12-uurs**:\n• 9 ochtend → 09:00\n• 12 middag → 12:00\n• 9 avond → 21:00\n• 12 nacht → 00:00\n\n**Tijd berekenen**:\nEindtijd - begintijd. Bij negatieve minuten: leen 1 uur (= 60 min).\n\nVeel succes!",
    svg: klokSvg(10, 25),
    checks: [
      {
        q: "De grote wijzer op **6**, kleine net voor **8**. Hoe laat is het?",
        options: ["Half 8","Half 9","8:30","9 uur"],
        answer: 0,
        wrongHints: [null,"Half 9 = 8:30 in cijfers, kleine wijzer staat tussen 8 en 9.","Dat is half 9 in cijfers — maar kleine wijzer is tussen 7 en 8.","Bij 9 uur is grote op 12, niet 6."],
      },
      {
        q: "Wat is **kwart voor 7** 's avonds in 24-uurs?",
        options: ["18:45","06:45","19:15","18:15"],
        answer: 0,
        wrongHints: [null,"06:45 is 's ochtends.","Dat is kwart over 7.","Dat is kwart over 6."],
      },
      {
        q: "Hoe lang van **13:15** tot **15:00**?",
        options: ["1 uur 45 minuten","2 uur","2 uur 15 min","45 minuten"],
        answer: 0,
        wrongHints: [null,"Niet helemaal 2 uur — 15 min korter.","2 uur 15 zou tot 15:30 zijn.","Te kort."],
      },
      {
        q: "Hoeveel minuten = **3 kwartieren**?",
        options: ["45","30","60","15"],
        answer: 0,
        wrongHints: [null,"Dat is 2 kwartieren.","Dat is 4 kwartieren = 1 uur.","Dat is 1 kwartier."],
      },
      {
        q: "**08:30** in Nederlandse spreektaal:",
        options: ["Half 9","Half 8","8:30 uur","Acht en half"],
        answer: 0,
        wrongHints: [null,"Half 8 = 7:30.","Wel correct in cijfers maar Nederlandse spreektaal is 'half 9'.","Geen Nederlandse uitdrukking."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const klokkijken = {
  id: "klokkijken",
  title: "Klokkijken — analoog + digitaal",
  emoji: "🕒",
  level: "groep3-5",
  subject: "rekenen",
  intro:
    "Leer de klok lezen — analoog (met wijzers) én digitaal. Hele uren, halve, kwartieren, minuten en het 24-uurs format. Plus tijd uitrekenen (hoe lang duurt iets?). Voor groep 3 t/m 5.",
  triggerKeywords: [
    "klok","klokkijken","tijd lezen","analoge klok","digitale klok",
    "uren","minuten","seconden",
    "kwart over","kwart voor","half",
    "uurwijzer","minutenwijzer","secondewijzer",
    "24-uurs","12-uurs","am pm",
    "tijd berekenen","duur",
  ],
  chapters,
  steps,
};

export default klokkijken;
