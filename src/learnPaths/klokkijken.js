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
    explanation: "Een **klok** vertelt hoe laat het is. Er zijn twee soorten:\n\n**1. Analoge klok** *(met wijzers)*\n• Een rond klokje met **12 cijfers** (1 t/m 12) langs de rand.\n• Twee **wijzers** (de kleine + de grote pijl).\n• Soms een derde dunne wijzer voor de seconden.\n\n**2. Digitale klok** *(met cijfers)*\n• Toont de tijd als getallen: 14:30, 09:45, etc.\n• Vooral op telefoons en magnetrons.\n• Geen wijzers nodig.\n\n**De wijzers van een analoge klok**:\n\n• **Kleine wijzer** = **uurwijzer**. Die zegt **hoeveel uur** het is. Beweegt langzaam.\n• **Grote wijzer** = **minutenwijzer**. Die zegt **hoeveel minuten** voorbij het uur. Beweegt sneller.\n• **Heel dunne wijzer** (als die er is) = **secondewijzer**. Beweegt het snelst.\n\n**Belangrijk**: kleine wijzer = uur. Grote wijzer = minuten.\n\n**Hoe lang duurt 1 wijzer-rondje?**\n• Uurwijzer: 1 rondje = **12 uur** (een halve dag).\n• Minutenwijzer: 1 rondje = **60 minuten = 1 uur**.\n• Secondewijzer: 1 rondje = **60 seconden = 1 minuut**.\n\n**1 uur = 60 minuten**. **1 dag = 24 uur**.\n\nDe meeste mensen lezen klokken tegenwoordig digitaal (op de telefoon). Maar analoog blijft handig — bijvoorbeeld stationsklokken en oude klokken.",
    svg: klokSvg(3, 0),
    checks: [
      {
        q: "Wat is de **kleine wijzer** van een klok?",
        options: ["De uurwijzer","De minutenwijzer","De secondewijzer","De decoratie"],
        answer: 0,
        wrongHints: [null,"Andersom — de minutenwijzer is groot.","De secondewijzer is meestal heel dun.","Wijzers zijn er voor het lezen, niet voor decoratie."],
        uitlegPad: {
          stappen: [{ titel: "Klein = uur, groot = minuten", tekst: "Kleine wijzer beweegt langzaam (12 uur = 1 rondje). Grote wijzer snel (1 uur = 1 rondje)." }],
          woorden: [{ woord: "uurwijzer", uitleg: "Korte/kleine wijzer. Wijst naar het uur." }],
          theorie: "3 wijzers: uurwijzer (klein), minutenwijzer (groot), secondewijzer (heel dun, snelste).",
          voorbeelden: [{ type: "groot", tekst: "Klein = klein aantal (12 uren). Groot = groot aantal (60 minuten)." }],
          basiskennis: [{ onderwerp: "Truc onthouden", uitleg: "Korte wijzer, kort woord: 'uur'. Lange wijzer, lang woord: 'minuten'." }],
          niveaus: { basis: "Kleine = uurwijzer.", simpeler: "Kleine wijzer = de korte. Wijst naar uur. Grote wijzer = lang, wijst naar minuten.", nogSimpeler: "Klein=uur" },
        },
      },
      {
        q: "Hoeveel minuten zitten er in 1 uur?",
        options: ["60","30","100","24"],
        answer: 0,
        wrongHints: [null,"30 = een half uur.","Tijden gebruiken geen 100-systeem.","24 = uren in een dag."],
        uitlegPad: {
          stappen: [{ titel: "1 uur = 60 min", tekst: "Vaste regel: 1 uur = 60 minuten. 1 minuut = 60 seconden." }],
          woorden: [{ woord: "minuut", uitleg: "1/60 deel van een uur." }],
          theorie: "Tijd-eenheden: 1 uur = 60 min. 1 min = 60 sec. 1 dag = 24 uur.",
          voorbeelden: [{ type: "tabel", tekst: "Half uur = 30 min. Kwart = 15 min. 1 uur = 60 min. 2 uur = 120 min." }],
          basiskennis: [{ onderwerp: "Niet 100", uitleg: "Tijd is niet decimaal — geen 100 minuten in een uur." }],
          niveaus: { basis: "60 minuten.", simpeler: "1 uur = 60 minuten (vaste regel). Niet 30 (=halfuur), niet 100, niet 24 (=uren per dag).", nogSimpeler: "60" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke wijzer beweegt het **snelst**?",
        options: ["De secondewijzer", "De uurwijzer", "De minutenwijzer", "Ze gaan allemaal even snel"],
        answer: 0,
        wrongHints: [
          null,
          "Die wijzer doet 12 uur over één rondje. Is dat snel?",
          null,
          "Kijk eens hoe lang één rondje duurt voor elke wijzer.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Snelste wijzer",
              tekst: "De secondewijzer gaat in 1 minuut helemaal rond. Dat is het snelst.",
            },
          ],
          woorden: [
            {
              woord: "secondewijzer",
              uitleg: "De heel dunne wijzer. Die telt de seconden.",
            },
          ],
          theorie: "Rondje secondewijzer = 1 minuut. Rondje minutenwijzer = 1 uur. Rondje uurwijzer = 12 uur.",
          voorbeelden: [
            {
              type: "vergelijk",
              tekst: "1 minuut is korter dan 1 uur, en 1 uur is korter dan 12 uur. Dus de secondewijzer is het snelst.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Seconden",
              uitleg: "1 minuut = 60 seconden.",
            },
          ],
          niveaus: {
            basis: "De secondewijzer.",
            simpeler: "De dunne secondewijzer gaat in 1 minuut rond. De andere doen er veel langer over.",
            nogSimpeler: "Seconde=snelst",
          },
        },
      },
      {
        q: "Hoe heet een klok **met wijzers**?",
        options: ["Een analoge klok", "Een digitale klok", "Een cijferklok", "Een schermklok"],
        answer: 0,
        wrongHints: [null, "Die klok laat de tijd zien met getallen, zonder wijzers.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Analoog = met wijzers",
              tekst: "Een klok met wijzers en 12 cijfers langs de rand heet een analoge klok.",
            },
          ],
          woorden: [
            {
              woord: "analoge klok",
              uitleg: "Een ronde klok met wijzers.",
            },
          ],
          theorie: "Er zijn twee soorten: de analoge klok (met wijzers) en de digitale klok (met getallen, zoals 14:30).",
          voorbeelden: [
            {
              type: "soorten",
              tekst: "Stationsklok = analoog. Klok op een telefoon = digitaal.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Digitaal",
              uitleg: "Een digitale klok heeft geen wijzers, alleen getallen.",
            },
          ],
          niveaus: {
            basis: "Een analoge klok.",
            simpeler: "Met wijzers = analoog. Met alleen getallen = digitaal.",
            nogSimpeler: "Wijzers=analoog",
          },
        },
      },
      {
        q: "Wat heeft een **digitale klok** NIET?",
        options: ["Wijzers", "Cijfers", "Een dubbele punt", "Minuten"],
        answer: 0,
        wrongHints: [
          null,
          "Hoe laat het is, zie je op een digitale klok juist met cijfers.",
          null,
          "Hoe zou een digitale klok laten zien hoeveel minuten het is?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Digitaal = geen wijzers",
              tekst: "Een digitale klok toont de tijd als getallen, zoals 09:45. Wijzers zijn niet nodig.",
            },
          ],
          woorden: [
            {
              woord: "digitale klok",
              uitleg: "Een klok die de tijd laat zien met getallen.",
            },
          ],
          theorie: "Op een digitale klok: vóór de dubbele punt het uur, erachter de minuten.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "09:45 → 9 uur en 45 minuten. Geen wijzer te zien.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Waar?",
              uitleg: "Digitale klokken zie je vaak op een telefoon of een magnetron.",
            },
          ],
          niveaus: {
            basis: "Wijzers.",
            simpeler: "Een digitale klok laat cijfers zien. Wijzers heeft alleen een analoge klok.",
            nogSimpeler: "Geen wijzers",
          },
        },
      },
      {
        q: "Hoeveel **cijfers** staan er langs de rand van een analoge klok?",
        options: ["12", "24", "60", "10"],
        answer: 0,
        wrongHints: [
          null,
          "Zoveel uur heeft een hele dag. Past dat op de klok?",
          "Zoveel minuten zitten er in een uur. Staan die allemaal als cijfer op de klok?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "1 tot en met 12",
              tekst: "Langs de rand van een analoge klok staan de cijfers 1 tot en met 12.",
            },
          ],
          woorden: [
            {
              woord: "cijfers",
              uitleg: "De getallen 1 tot en met 12 langs de rand van de klok.",
            },
          ],
          theorie: "De kleine wijzer gaat in 12 uur één keer langs alle 12 cijfers.",
          voorbeelden: [
            {
              type: "tellen",
              tekst: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 → twaalf cijfers.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Bovenaan",
              uitleg: "De 12 staat bovenaan, de 6 onderaan.",
            },
          ],
          niveaus: {
            basis: "12.",
            simpeler: "Tel de cijfers langs de rand: van 1 tot en met 12. Dat zijn er 12.",
            nogSimpeler: "12",
          },
        },
      },
      {
        q: "Hoe lang duurt **1 rondje** van de minutenwijzer?",
        options: ["1 uur", "1 minuut", "12 uur", "1 dag"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is één rondje van de secondewijzer.",
          "Zo lang doet de kleine wijzer over een rondje.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Minutenwijzer: 60 minuten",
              tekst: "De minutenwijzer gaat in 60 minuten één keer rond. 60 minuten = 1 uur.",
            },
          ],
          woorden: [
            {
              woord: "rondje",
              uitleg: "De wijzer gaat helemaal rond en is weer terug bij de 12.",
            },
          ],
          theorie: "Rondje secondewijzer = 1 minuut. Rondje minutenwijzer = 1 uur. Rondje uurwijzer = 12 uur.",
          voorbeelden: [
            {
              type: "rondje",
              tekst: "Om 3 uur staat de grote wijzer op de 12. Om 4 uur staat hij daar weer: 1 rondje.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "60 minuten",
              uitleg: "1 uur = 60 minuten.",
            },
          ],
          niveaus: {
            basis: "1 uur.",
            simpeler: "De grote wijzer gaat in 60 minuten rond. 60 minuten is 1 uur.",
            nogSimpeler: "1 uur",
          },
        },
      },
      {
        q: "Hoe lang duurt **1 rondje** van de uurwijzer?",
        options: ["12 uur", "1 uur", "24 uur", "1 minuut"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is één rondje van de grote wijzer.",
          "Dat is een hele dag. Hoeveel cijfers staan er op de klok?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Uurwijzer: 12 uur",
              tekst: "De kleine wijzer schuift elk uur één cijfer op. Na 12 uur is hij rond.",
            },
          ],
          woorden: [
            {
              woord: "uurwijzer",
              uitleg: "De kleine wijzer. Die zegt hoeveel uur het is.",
            },
          ],
          theorie: "Er staan 12 cijfers op de klok. Elk uur 1 cijfer verder → 12 uur voor een rondje. Dat is een halve dag.",
          voorbeelden: [
            {
              type: "rondje",
              tekst: "Om 12 uur 's middags staat de kleine wijzer op de 12. Om 12 uur 's nachts weer.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Halve dag",
              uitleg: "Een dag heeft 24 uur. 12 uur is een halve dag.",
            },
          ],
          niveaus: {
            basis: "12 uur.",
            simpeler: "De kleine wijzer gaat elk uur 1 cijfer verder. 12 cijfers = 12 uur.",
            nogSimpeler: "12 uur",
          },
        },
      },
      {
        q: "De secondewijzer gaat **1 keer helemaal rond**. Hoeveel tijd is er dan voorbij?",
        options: ["1 minuut", "1 uur", "1 seconde", "12 seconden"],
        answer: 0,
        wrongHints: [
          null,
          "Zo lang doet de grote wijzer over een rondje.",
          null,
          "Bij elk cijfer is de secondewijzer 5 seconden verder. Hoeveel cijfers gaat hij langs?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "60 seconden = 1 minuut",
              tekst: "De secondewijzer gaat in 60 seconden rond. 60 seconden = 1 minuut.",
            },
          ],
          woorden: [
            {
              woord: "seconde",
              uitleg: "Een heel kort stukje tijd. 60 seconden = 1 minuut.",
            },
          ],
          theorie: "Rondje secondewijzer = 1 minuut. Rondje minutenwijzer = 1 uur. Rondje uurwijzer = 12 uur.",
          voorbeelden: [
            {
              type: "rondje",
              tekst: "Secondewijzer op de 12 → 60 tikjes later weer op de 12 → 1 minuut voorbij.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tikken",
              uitleg: "De secondewijzer springt vaak met een tikje per seconde.",
            },
          ],
          niveaus: {
            basis: "1 minuut.",
            simpeler: "De dunne wijzer gaat in 60 seconden rond. Dat is 1 minuut.",
            nogSimpeler: "1 minuut",
          },
        },
      },
    ],
  },
  {
    title: "Hele uren — 'het is 3 uur'",
    explanation: "**Hele uren** zijn de makkelijkste tijden om af te lezen.\n\n**Hoe herken je een heel uur?**\n• De **grote wijzer** (minuten) staat op de **12**.\n• De **kleine wijzer** (uur) wijst naar een **getal**.\n\n**Voorbeelden**:\n• Grote op 12, kleine op 3 → **3 uur** *(of: 03:00 / 15:00)*\n• Grote op 12, kleine op 9 → **9 uur** *(09:00 / 21:00)*\n• Grote op 12, kleine op 12 → **12 uur** *(12:00 / 00:00)*\n\n**Voor de middag of erna?**\n• 's Ochtends, voor 12 uur = **AM** (Latijn: ante meridiem).\n• 's Middags/avonds, na 12 uur = **PM** (post meridiem).\n• In Nederland gebruiken we vaak het **24-uurs format**:\n  - 's Morgens 9 uur = **09:00**\n  - 's Avonds 9 uur = **21:00** (12 + 9)\n\n**Hoe je tijd zegt in het Nederlands**:\n• 'Het is 3 uur' (geen extra 'precies' nodig)\n• 'Het is precies 8 uur'\n• Op heel uur: minutenwijzer staat exact omhoog (op 12).\n\n**Tip om te onthouden**:\nDe minutenwijzer heeft **12 vakjes** voor de cijfers. Tussen 2 cijfers zitten **5 minuten**. Dus 12-cijfer-naar-1 = 5 minuten. **Die info is straks belangrijk** voor minuten-aflezen.",
    svg: klokSvg(3, 0),
    checks: [
      {
        q: "Kijk goed naar deze klok. **Hoe laat is het?**",
        svg: klokSvg(9, 0),
        options: ["9 uur","12 uur","kwart voor 9","3 uur"],
        answer: 0,
        wrongHints: [null,"Kijk naar de kléine wijzer — die zegt het uur. Wijst die naar 12?","De grote wijzer staat op 12 — dat betekent 0 minuten, een heel uur dus.","Naar welk getal wijst de kleine wijzer echt?"],
        uitlegPad: {
          stappen: [{ titel: "Lees de klok af", tekst: "Grote wijzer op 12 = heel uur. Kleine wijzer wijst naar 9 → het is 9 uur." }],
          woorden: [{ woord: "aflezen", uitleg: "Van de klok 'lezen' hoe laat het is." }],
          theorie: "Heel uur: grote wijzer op 12, kleine wijzer op het uurnummer.",
          voorbeelden: [{ type: "stand", tekst: "Klein op 9, groot op 12 → 9 uur. Klein op 4, groot op 12 → 4 uur." }],
          basiskennis: [{ onderwerp: "Eerst de grote", uitleg: "Zie je de grote wijzer op 12? Dan hoef je alleen de kleine af te lezen." }],
          niveaus: { basis: "9 uur.", simpeler: "Grote wijzer op 12 = heel uur. Kleine wijzer op 9 → 9 uur.", nogSimpeler: "9 uur" },
        },
      },
      {
        q: "Hoe staan de wijzers bij **3 uur** precies?",
        options: ["Grote op 12, kleine op 3","Grote op 3, kleine op 12","Beide op 3","Beide op 12"],
        answer: 0,
        wrongHints: [null,"Andersom — de uur-wijzer wijst naar 3.","Bij heel uur staan ze niet beide op hetzelfde cijfer.","Bij 12 uur staan ze beide op 12."],
        uitlegPad: {
          stappen: [{ titel: "Heel uur regel", tekst: "Bij elk heel uur: grote (minuten) staat op 12. Kleine (uur) wijst naar het uur." }],
          woorden: [{ woord: "heel uur", uitleg: "Tijd zonder minuten erbij (3:00, 4:00, etc.)." }],
          theorie: "Heel-uur-stand: minutenwijzer altijd op 12 (=0 minuten). Uurwijzer naar het uurnummer.",
          voorbeelden: [{ type: "tabel", tekst: "3 uur: groot op 12, klein op 3. 7 uur: groot op 12, klein op 7." }],
          basiskennis: [{ onderwerp: "Klein wijst", uitleg: "Kleine wijzer wijst altijd naar het uurnummer (1-12)." }],
          niveaus: { basis: "Groot op 12, klein op 3.", simpeler: "Bij heel uur (3 uur): minutenwijzer staat op 12 (=0 min), uurwijzer op 3.", nogSimpeler: "12+3" },
        },
      },
      {
        q: "Hoe is **9 uur 's avonds** in 24-uurs format?",
        options: ["21:00","09:00","19:00","12:00"],
        answer: 0,
        wrongHints: [null,"Dat is 9 uur 's ochtends.","Dat is 7 uur 's avonds.","Dat is 12 uur (middag of nacht)."],
        uitlegPad: {
          stappen: [{ titel: "Avond + 12", tekst: "9 uur 's avonds = 9 + 12 = 21 uur. → 21:00." }],
          woorden: [{ woord: "24-uurs format", uitleg: "Tijd loopt 0-23 uur. Avond-uren = 12 + uur." }],
          theorie: "Avond-uren omrekenen: 1 PM = 13, 2 PM = 14 ... 9 PM = 21, 11 PM = 23.",
          voorbeelden: [{ type: "tabel", tekst: "5 uur 's avonds = 17:00. 9 uur 's avonds = 21:00. Middernacht = 00:00." }],
          basiskennis: [{ onderwerp: "+12 truc", uitleg: "Voor avond-tijden (na 12 uur 's middags): + 12." }],
          niveaus: { basis: "21:00.", simpeler: "9 uur 's avonds = 9 + 12 = 21 uur → 21:00.", nogSimpeler: "21:00" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "De grote wijzer staat op de **12**. De kleine wijzer staat op de **5**. Hoe laat is het?",
        options: ["5 uur", "12 uur", "Half 5", "Kwart over 5"],
        answer: 0,
        wrongHints: [
          null,
          "Welke wijzer zegt het uur: de grote of de kleine?",
          "Bij een half uur staat de grote wijzer onderaan, op de 6.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Grote op 12 = heel uur",
              tekst: "Grote wijzer op 12 → een heel uur. De kleine wijzer wijst naar 5 → 5 uur.",
            },
          ],
          woorden: [
            {
              woord: "heel uur",
              uitleg: "Precies een uur, 0 minuten erbij. De grote wijzer staat op de 12.",
            },
          ],
          theorie: "Kleine wijzer = uur. Grote wijzer op 12 = 0 minuten.",
          voorbeelden: [
            {
              type: "lezen",
              tekst: "Grote op 12, kleine op 5 → 5 uur (05:00 of 17:00).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eerst de kleine",
              uitleg: "Kijk eerst naar de kleine wijzer: die zegt het uur.",
            },
          ],
          niveaus: {
            basis: "5 uur.",
            simpeler: "De grote wijzer op 12 betekent: precies een uur. De kleine wijst naar 5. Dus 5 uur.",
            nogSimpeler: "5 uur",
          },
        },
      },
      {
        q: "Het is **6 uur**. Naar welk cijfer wijst de **kleine** wijzer?",
        options: ["De 6", "De 12", "De 3", "De 9"],
        answer: 0,
        wrongHints: [null, "Daar staat bij een heel uur de grote wijzer.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Kleine wijzer = uur",
              tekst: "Bij 6 uur wijst de kleine wijzer naar de 6. De grote staat op de 12.",
            },
          ],
          woorden: [
            {
              woord: "kleine wijzer",
              uitleg: "De uurwijzer. Die wijst naar het uur.",
            },
          ],
          theorie: "Heel uur: grote op 12, kleine op het uur.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "6 uur: kleine op 6 (onderaan), grote op 12 (bovenaan).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Recht naar beneden",
              uitleg: "Om 6 uur staan de twee wijzers in één rechte lijn: de kleine naar beneden, de grote omhoog.",
            },
          ],
          niveaus: {
            basis: "De 6.",
            simpeler: "Kleine wijzer zegt het uur. Het is 6 uur, dus de kleine wijst naar de 6.",
            nogSimpeler: "6",
          },
        },
      },
      {
        q: "Om **12:00** 's middags staan de wijzers...",
        options: [
          "Allebei op de 12",
          "Allebei op de 6",
          "Grote op 6, kleine op 12",
          "Grote op 12, kleine op 6",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij een heel uur staat de grote wijzer niet onderaan.",
          "Dan is het een half uur.",
          "Dan is het 6 uur.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "12 uur: allebei omhoog",
              tekst: "Heel uur → grote op 12. Het is 12 uur → kleine ook op 12.",
            },
          ],
          woorden: [
            {
              woord: "12 uur 's middags",
              uitleg: "Midden op de dag, rond lunchtijd. Digitaal: 12:00.",
            },
          ],
          theorie: "Heel uur: grote op 12, kleine op het uur. Bij 12 uur vallen ze over elkaar.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "12:00 en 00:00 zien er op een klok met wijzers hetzelfde uit: allebei op de 12.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Over elkaar",
              uitleg: "Je ziet dan bijna maar één wijzer, want ze liggen op elkaar.",
            },
          ],
          niveaus: {
            basis: "Allebei op de 12.",
            simpeler: "Grote op 12 = heel uur. Kleine op 12 = 12 uur. Dus allebei op de 12.",
            nogSimpeler: "Beide op 12",
          },
        },
      },
    ],
  },
  {
    title: "Halve uren — 'half 3 = 14:30'",
    explanation: "**Halve uren** zijn iets lastiger — vooral in het Nederlands. Wij zeggen **'half 3'** ipv **'2 uur en een half'** (Engels: 'half past two').\n\n**Hoe herken je een half uur?**\n• De **grote wijzer** staat op de **6** (precies onder).\n• De **kleine wijzer** staat **tussen twee cijfers** (halverwege).\n\n**Voorbeeld**:\nGrote op 6, kleine net voorbij 2 → **half 3** *(14:30)*\n\n**Pas op — Nederlands is anders dan Engels!**\n• Nederlands: 'het is **half 3**' = 30 minuten **vóór** 3 uur = 02:30 of 14:30\n• Engels: 'it is **half past two**' = 30 minuten **ná** 2 uur = zelfde tijd, andere uitdrukking\n\nIn het Nederlands tellen we vooruit: 'half 3' betekent 'we zijn op weg naar 3 uur, en we zijn er half'.\n\n**Voorbeelden**:\n• Grote op 6, kleine net voor 6 → **half 6** *(05:30 of 17:30)*\n• Grote op 6, kleine net voor 8 → **half 8** *(07:30 of 19:30)*\n• Grote op 6, kleine net voor 12 → **half 12** *(11:30 of 23:30)*\n\n**Trucje**: in het Nederlands kijk je naar het **volgende cijfer**. De kleine wijzer staat tussen 7 en 8 → 'half **8**' (kijk naar 8, het volgende cijfer).\n\n**In digitaal format**:\n• Half 3 = **02:30** of **14:30**\n• Half 8 = **07:30** of **19:30**\n• Half 12 = **11:30** of **23:30**",
    svg: klokSvg(2, 30),
    checks: [
      {
        q: "Kijk goed naar deze klok. **Hoe laat is het?**",
        svg: klokSvg(6, 30),
        options: ["Half 7","Half 6","6 uur","Kwart over 6"],
        answer: 0,
        wrongHints: [null,"De kleine wijzer is al vóórbij de 6 — naar welk uur is hij op weg?","Bij een heel uur staat de grote wijzer op 12. Waar staat hij nu?","Kwart over = grote wijzer op 3 (rechts). Waar staat hij nu?"],
        uitlegPad: {
          stappen: [{ titel: "Groot op 6 = half", tekst: "Grote wijzer op 6 = halve uur. Kleine wijzer tussen 6 en 7 → op weg naar 7 → half 7." }],
          woorden: [{ woord: "half 7", uitleg: "= 6:30. Dertig minuten vóór 7 uur." }],
          theorie: "Halve uren: grote wijzer op 6, kleine tussen twee cijfers. Nederlands kijkt vooruit: tussen 6 en 7 = half 7.",
          voorbeelden: [{ type: "stand", tekst: "Klein tussen 6 en 7 → half 7. Klein tussen 2 en 3 → half 3." }],
          basiskennis: [{ onderwerp: "Vooruit kijken", uitleg: "Bij 'half' noem je het uur dat kómt, niet het uur dat was." }],
          niveaus: { basis: "Half 7.", simpeler: "Grote wijzer op 6 = half. Kleine wijzer op weg naar 7 → half 7 (6:30).", nogSimpeler: "Half 7" },
        },
      },
      {
        q: "Wat is **half 5** in 24-uurs format ('s middags)?",
        options: ["16:30","17:30","04:30","15:30"],
        answer: 0,
        wrongHints: [null,"Dat is half 6.","04:30 is 's nachts, niet 's middags.","Dat is half 4."],
        uitlegPad: {
          stappen: [{ titel: "Half 5 = 4:30", tekst: "Nederlands: 'half 5' = 30 min VÓÓR 5 = 4:30. 's Middags: 4:30 PM = 16:30." }],
          woorden: [{ woord: "half X", uitleg: "Nederlands: half X = X-1 uur, 30 minuten. (Half 5 = 4:30)." }],
          theorie: "Halftruc: half X = uur ervóór + 30 min. Half 5 = 4:30. 's Middags + 12 = 16:30.",
          voorbeelden: [{ type: "tabel", tekst: "Half 5 's morgens = 04:30. Half 5 's middags = 16:30." }],
          basiskennis: [{ onderwerp: "NL ≠ Engels", uitleg: "Engels 'half past four' = 4:30. Nederlands 'half 5' = 4:30." }],
          niveaus: { basis: "16:30.", simpeler: "Half 5 = 30 min vóór 5 = uur 4 + 30 min = 04:30. 's Middags +12 = 16:30.", nogSimpeler: "16:30" },
        },
      },
      {
        q: "Bij **half 8** staat de **kleine wijzer**...",
        options: ["Tussen 7 en 8","Op 8","Op 7","Tussen 8 en 9"],
        answer: 0,
        wrongHints: [null,"Bij precies 8 uur staat 'ie op de 8.","Bij precies 7 uur staat 'ie op de 7.","Dan zou het al ná 8 zijn."],
        uitlegPad: {
          stappen: [{ titel: "Half = halverwege", tekst: "Half 8 = 7:30. Uurwijzer staat halverwege 7 en 8." }],
          woorden: [{ woord: "halverwege", uitleg: "In het midden tussen 2 punten. Bij half: tussen vorig + huidig uur." }],
          theorie: "Bij elke 30 min schuift uurwijzer halverwege twee uurnummers.",
          voorbeelden: [{ type: "stand", tekst: "Half 8 (7:30): klein tussen 7 en 8. Half 9 (8:30): klein tussen 8 en 9." }],
          basiskennis: [{ onderwerp: "Voor het volgende", uitleg: "'Half 8' kijkt vooruit naar 8 — uurwijzer is op weg naar 8." }],
          niveaus: { basis: "Tussen 7 en 8.", simpeler: "Half 8 = 7:30. De kleine wijzer staat halverwege tussen 7 en 8 (niet meer op 7, nog niet op 8).", nogSimpeler: "7-8" },
        },
      },
      {
        q: "Hoe heet **half 3** in digitaal?",
        options: ["02:30 of 14:30","03:30 of 15:30","02:00 of 14:00","03:00 of 15:00"],
        answer: 0,
        wrongHints: [null,"Half 3 betekent 30 min VÓÓR 3 — dus uur 2 nog.","Bij half 3 staan de minuten op 30, niet op 00.","Bij een half uur staan de minuten op 30."],
        uitlegPad: {
          stappen: [{ titel: "Half 3 = 2:30", tekst: "Half 3 = 30 min vóór 3 = uur 2 + 30 min = 02:30. 's Middags = 14:30." }],
          woorden: [{ woord: "half X = X-1:30", uitleg: "Half X = uur(X-1):30." }],
          theorie: "Half-formule: half X → (X-1):30. Half 3 → 2:30. Half 12 → 11:30.",
          voorbeelden: [{ type: "tabel", tekst: "Half 3 = 02:30 / 14:30. Half 6 = 05:30 / 17:30. Half 12 = 11:30 / 23:30." }],
          basiskennis: [{ onderwerp: "Twee tijden", uitleg: "Cijfertijd kan 2× per dag voorkomen — 's ochtends + 's middags." }],
          niveaus: { basis: "02:30 of 14:30.", simpeler: "Half 3 = 30 min VÓÓR 3 = uur 2 + 30 min = 02:30 of 14:30.", nogSimpeler: "2:30/14:30" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Bij een **half uur** staat de grote wijzer op de...",
        options: ["6", "12", "3", "9"],
        answer: 0,
        wrongHints: [null, "Dan is het een heel uur.", "Daar staat hij bij kwart over.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Grote op 6 = half",
              tekst: "Bij een half uur is de grote wijzer een half rondje verder: onderaan, op de 6.",
            },
          ],
          woorden: [
            {
              woord: "half uur",
              uitleg: "30 minuten. Een half rondje van de grote wijzer.",
            },
          ],
          theorie: "Grote wijzer: 12 = heel uur, 6 = half uur. De kleine wijzer staat dan tussen twee cijfers.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Half 3: grote op 6, kleine tussen 2 en 3.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Half rondje",
              uitleg: "Een heel rondje = 60 minuten. Een half rondje = 30 minuten.",
            },
          ],
          niveaus: {
            basis: "Op de 6.",
            simpeler: "Een half uur is een half rondje. Dan wijst de grote wijzer naar beneden, naar de 6.",
            nogSimpeler: "6",
          },
        },
      },
      {
        q: "De grote wijzer staat op de **6**. De kleine wijzer staat precies tussen de **3** en de **4**. Hoe laat is het?",
        options: ["Half 4", "Half 3", "3 uur", "4 uur"],
        answer: 0,
        wrongHints: [
          null,
          "In het Nederlands kijk je bij 'half' naar het volgende cijfer. Welk cijfer komt na de 3?",
          "De grote wijzer staat niet op de 12. Is het dan een heel uur?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Half + volgende cijfer",
              tekst: "Grote op 6 = half. Kleine tussen 3 en 4 → op weg naar 4 → half 4.",
            },
          ],
          woorden: [
            {
              woord: "half 4",
              uitleg: "30 minuten vóór 4 uur. Digitaal: 03:30 of 15:30.",
            },
          ],
          theorie: "Trucje: kleine wijzer tussen twee cijfers → zeg 'half' + het hoogste (volgende) cijfer.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Kleine tussen 3 en 4 → volgende cijfer = 4 → half 4.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Halverwege",
              uitleg: "Bij half staat de kleine wijzer halverwege tussen twee cijfers.",
            },
          ],
          niveaus: {
            basis: "Half 4.",
            simpeler: "De kleine wijzer is de 3 voorbij maar nog niet bij de 4. Grote op 6: half. Dus half 4.",
            nogSimpeler: "Half 4",
          },
        },
      },
      {
        q: "Wat is **half 10** 's ochtends in cijfers?",
        options: ["09:30", "10:30", "21:30", "09:00"],
        answer: 0,
        wrongHints: [null, "Dat is half 11.", "Dat is 's avonds.", "Bij half staan de minuten niet op 00."],
        uitlegPad: {
          stappen: [
            {
              titel: "Half 10 = uur ervóór",
              tekst: "Half 10 = 30 minuten vóór 10 uur = 9 uur en 30 minuten = 09:30.",
            },
          ],
          woorden: [
            {
              woord: "half 10",
              uitleg: "30 minuten vóór 10 uur.",
            },
          ],
          theorie: "Half X = (X − 1) uur en 30 minuten. Half 10 = 9 uur en 30 minuten.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Half 10 's ochtends = 09:30. Half 10 's avonds = 21:30.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "'s Ochtends",
              uitleg: "'s Ochtends tel je er geen 12 bij op.",
            },
          ],
          niveaus: {
            basis: "09:30.",
            simpeler: "Half 10 is een half uur vóór 10 uur. Dat is 9 uur en 30 minuten: 09:30.",
            nogSimpeler: "09:30",
          },
        },
      },
      {
        q: "Hoe laat is **half 1** 's middags?",
        options: ["12:30", "13:30", "00:30", "01:30"],
        answer: 0,
        wrongHints: [null, "Dat is half 2.", "Dat is 's nachts.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Half 1 = na 12 uur",
              tekst: "Half 1 = 30 minuten vóór 1 uur. Dat is 12 uur en 30 minuten: 12:30.",
            },
          ],
          woorden: [
            {
              woord: "half 1",
              uitleg: "30 minuten vóór 1 uur.",
            },
          ],
          theorie: "Half X = het uur ervóór + 30 minuten. Het uur vóór 1 is 12.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Half 1 's middags = 12:30. Half 1 's nachts = 00:30.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Na de 12 komt de 1",
              uitleg: "Op de klok komt na de 12 weer de 1.",
            },
          ],
          niveaus: {
            basis: "12:30.",
            simpeler: "Half 1 is een half uur vóór 1 uur. Het uur ervóór is 12. Dus 12:30.",
            nogSimpeler: "12:30",
          },
        },
      },
    ],
  },
  {
    title: "Kwartieren — kwart over en kwart voor",
    explanation: "Een **kwartier** is **15 minuten**. 4 kwartieren = 1 uur. Er zijn 2 kwartier-tijden:\n\n**'Kwart over'** *(15 minuten over het hele uur)*\n• Grote wijzer op de **3** (rechts).\n• Kleine wijzer net na een cijfer.\n• Voorbeeld: Grote op 3, kleine net na 4 → **kwart over 4** *(04:15 of 16:15)*\n\n**'Kwart voor'** *(15 minuten voor het volgende uur)*\n• Grote wijzer op de **9** (links).\n• Kleine wijzer net voor een cijfer.\n• Voorbeeld: Grote op 9, kleine net voor 5 → **kwart voor 5** *(04:45 of 16:45)*\n\n**Geheugenhulp** voor de minutenwijzer:\n• **12 (boven)** = heel uur (00 min)\n• **3 (rechts)** = kwart over (15 min)\n• **6 (onder)** = half (30 min)\n• **9 (links)** = kwart voor (45 min)\n\n**Voorbeelden in 24-uurs format**:\n\n| Klok zegt | Digitaal |\n|---|---|\n| 4 uur | 04:00 / 16:00 |\n| Kwart over 4 | 04:15 / 16:15 |\n| Half 5 | 04:30 / 16:30 |\n| Kwart voor 5 | 04:45 / 16:45 |\n| 5 uur | 05:00 / 17:00 |\n\nElk **kwartier** = 15 minuten verder.\n\n**Pas op**:\n• 'Kwart over 4' = **04:15** (na 4 uur).\n• 'Kwart voor 5' = **04:45** (vóór 5 uur).\n\nDe **uur-tijd** verandert: 'kwart voor 5' is nog steeds in het uur 4, maar we zeggen 5 omdat we het volgende uur al zien aankomen.",
    svg: tweeKlokSvg(4, 15, 4, 45, "kwart over 4", "kwart voor 5"),
    checks: [
      {
        q: "Kijk goed naar deze klok. **Hoe laat is het?**",
        svg: klokSvg(4, 45),
        options: ["Kwart voor 5","Kwart over 4","Kwart over 5","Half 5"],
        answer: 0,
        wrongHints: [null,"Kwart over = grote wijzer op 3 (rechts). Deze staat links — wat betekent dat?","De kleine wijzer is bijna bij de 5, niet net voorbij — dus we zijn bijna bij het volgende uur.","Half = grote wijzer op 6 (onder). Waar staat hij hier?"],
        uitlegPad: {
          stappen: [{ titel: "Groot op 9 = kwart voor", tekst: "Grote wijzer op 9 (links) = kwart voor. Kleine wijzer bijna bij 5 → kwart voor 5." }],
          woorden: [{ woord: "kwart voor 5", uitleg: "= 4:45. Nog 15 minuten tot 5 uur." }],
          theorie: "Minutenwijzer-kompas: 12=heel uur, 3=kwart over, 6=half, 9=kwart voor.",
          voorbeelden: [{ type: "kompas", tekst: "Groot op 9 + klein bijna bij 5 → kwart voor 5. Groot op 3 + klein net na 4 → kwart over 4." }],
          basiskennis: [{ onderwerp: "Links = voor", uitleg: "Staat de grote wijzer links (op 9)? Dan is het 'kwart voor' het volgende uur." }],
          niveaus: { basis: "Kwart voor 5.", simpeler: "Grote wijzer op 9 = kwart voor. Kleine wijzer bijna bij 5 → kwart voor 5 (4:45).", nogSimpeler: "Kwart voor 5" },
        },
      },
      {
        q: "Hoeveel minuten zitten in een **kwartier**?",
        options: ["15","30","60","20"],
        answer: 0,
        wrongHints: [null,"Dat is een half uur.","Dat is een heel uur.","Niet een gangbare tijd-eenheid."],
        uitlegPad: {
          stappen: [{ titel: "Kwartier = 15 min", tekst: "Kwart = 1/4. Een kwart van 60 min = 60÷4 = 15 min." }],
          woorden: [{ woord: "kwartier", uitleg: "1/4 uur = 15 minuten." }],
          theorie: "Vier kwartieren = 1 uur. 15 + 15 + 15 + 15 = 60 min.",
          voorbeelden: [{ type: "tabel", tekst: "1 kwartier = 15. 2 kwartieren = 30 (=half uur). 4 kwartieren = 60 (=1 uur)." }],
          basiskennis: [{ onderwerp: "Klok-positie", uitleg: "Kwart over: minutenwijzer op 3. Kwart voor: op 9." }],
          niveaus: { basis: "15 min.", simpeler: "Kwart = 1/4 van 60 = 15 minuten. Vier kwartieren passen in 1 uur.", nogSimpeler: "15" },
        },
      },
      {
        q: "Bij **kwart over 6** staat de grote wijzer op...",
        options: ["3","6","9","12"],
        answer: 0,
        wrongHints: [null,"Dat is half uur.","Dat is kwart voor.","Dat is heel uur."],
        uitlegPad: {
          stappen: [{ titel: "Kwart over = grote op 3", tekst: "Minutenwijzer op 3 = 15 min over heel uur = kwart over." }],
          woorden: [{ woord: "kwart over", uitleg: "15 minuten na heel uur. Grote op 3 (rechts)." }],
          theorie: "Klok-posities minutenwijzer: 12=heel uur (00). 3=kwart over (15). 6=half (30). 9=kwart voor (45).",
          voorbeelden: [{ type: "kompas", tekst: "12=boven (heel), 3=rechts (kwart over), 6=onder (half), 9=links (kwart voor)." }],
          basiskennis: [{ onderwerp: "Hoeveel minuten?", uitleg: "Cijfer × 5 = aantal minuten. 3 × 5 = 15 min." }],
          niveaus: { basis: "Op 3.", simpeler: "Kwart over = 15 min over uur. Minutenwijzer wijst naar 3 (rechts op klok).", nogSimpeler: "3" },
        },
      },
      {
        q: "Wat is **kwart voor 9** in 24-uurs format ('s avonds)?",
        options: ["20:45","21:15","21:45","20:15"],
        answer: 0,
        wrongHints: [null,"Dat is kwart over 9.","Dat is kwart voor 10.","Dat is kwart over 8."],
        uitlegPad: {
          stappen: [{ titel: "Kwart voor 9 = 8:45", tekst: "Kwart voor 9 = 15 min vóór 9 = 8:45. 's Avonds: 8+12 = 20 → 20:45." }],
          woorden: [{ woord: "kwart voor X", uitleg: "15 min vóór heel uur X. Tijd = (X-1):45." }],
          theorie: "Kwart-voor-formule: kwart voor X = (X-1):45. Kwart voor 9 = 8:45.",
          voorbeelden: [{ type: "tabel", tekst: "Kwart voor 9 's avonds = 20:45. Kwart over 9 's avonds = 21:15." }],
          basiskennis: [{ onderwerp: "Avond + 12", uitleg: "Avond-uren in 24-uurs: + 12. 8 PM = 20:00." }],
          niveaus: { basis: "20:45.", simpeler: "Kwart voor 9 = uur 8 + 45 min. 's Avonds: 8+12=20 → 20:45.", nogSimpeler: "20:45" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "De grote wijzer staat op de **9**. Welke tijd hoort daarbij?",
        options: ["Kwart voor", "Kwart over", "Half", "Heel uur"],
        answer: 0,
        wrongHints: [
          null,
          "Bij kwart over staat de grote wijzer rechts.",
          null,
          "Bij een heel uur staat de grote wijzer bovenaan.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "9 = links = kwart voor",
              tekst: "Grote wijzer op 9 = 45 minuten. Nog 15 minuten tot het volgende uur: kwart voor.",
            },
          ],
          woorden: [
            {
              woord: "kwart voor",
              uitleg: "15 minuten vóór het volgende hele uur.",
            },
          ],
          theorie: "Grote wijzer: 12 = heel uur, 3 = kwart over, 6 = half, 9 = kwart voor.",
          voorbeelden: [
            {
              type: "kompas",
              tekst: "12 = boven, 3 = rechts, 6 = onder, 9 = links.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Hoeveel minuten?",
              uitleg: "Cijfer × 5 = minuten. 9 × 5 = 45 minuten.",
            },
          ],
          niveaus: {
            basis: "Kwart voor.",
            simpeler: "Op de 9 staat de grote wijzer links. Nog een kwartier tot het hele uur: kwart voor.",
            nogSimpeler: "Kwart voor",
          },
        },
      },
      {
        q: "Hoeveel **kwartieren** zitten er in 1 uur?",
        options: ["4", "2", "3", "15"],
        answer: 0,
        wrongHints: [
          null,
          "Zoveel kwartieren zitten in een half uur.",
          null,
          "Dat is het aantal minuten in één kwartier.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "4 × 15 = 60",
              tekst: "Een kwartier = 15 minuten. 15 + 15 + 15 + 15 = 60 minuten = 1 uur.",
            },
          ],
          woorden: [
            {
              woord: "kwartier",
              uitleg: "15 minuten. Een kwart van een uur.",
            },
          ],
          theorie: "Een uur in 4 stukken: kwart over, half, kwart voor, heel uur.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "00 → 15 → 30 → 45 → 60: vier sprongen van 15.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kwart",
              uitleg: "Een kwart is één van de 4 gelijke stukken.",
            },
          ],
          niveaus: {
            basis: "4.",
            simpeler: "1 kwartier = 15 minuten. 4 keer 15 = 60 = 1 uur.",
            nogSimpeler: "4",
          },
        },
      },
      {
        q: "De grote wijzer staat op de **3**. De kleine wijzer staat net na de **7**. Hoe laat is het?",
        options: ["Kwart over 7", "Kwart voor 7", "Kwart over 8", "Half 8"],
        answer: 0,
        wrongHints: [
          null,
          "Bij kwart voor staat de grote wijzer links, op de 9.",
          "De kleine wijzer is pas net voorbij de 7. Welk uur is het dus?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Grote op 3 = kwart over",
              tekst: "Grote op 3 = 15 minuten over. Kleine net na 7 → kwart over 7.",
            },
          ],
          woorden: [
            {
              woord: "kwart over 7",
              uitleg: "15 minuten na 7 uur. Digitaal: 07:15 of 19:15.",
            },
          ],
          theorie: "Bij kwart over kijk je naar het cijfer dat de kleine wijzer net is gepasseerd.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Grote op 3 → kwart over. Kleine net na 7 → 7. Samen: kwart over 7.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Rechts",
              uitleg: "De 3 staat rechts op de klok.",
            },
          ],
          niveaus: {
            basis: "Kwart over 7.",
            simpeler: "Grote wijzer rechts op de 3 = kwart over. De kleine is net voorbij de 7. Kwart over 7.",
            nogSimpeler: "Kwart over 7",
          },
        },
      },
      {
        q: "Hoe zeg je **10:45** in gewone woorden?",
        options: ["Kwart voor 11", "Kwart over 10", "Kwart voor 10", "Half 11"],
        answer: 0,
        wrongHints: [
          null,
          "Kwart over is :15. Hoeveel minuten staan hier?",
          "Kwart voor 10 is nog vóór 10 uur. Is 10:45 vóór of na 10 uur?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: ":45 = kwart voor",
              tekst: "10:45 = 10 uur en 45 minuten. Nog 15 minuten tot 11 uur → kwart voor 11.",
            },
          ],
          woorden: [
            {
              woord: "kwart voor",
              uitleg: "15 minuten vóór het volgende hele uur.",
            },
          ],
          theorie: ":15 = kwart over · :30 = half · :45 = kwart voor (het volgende uur).",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "10:15 kwart over 10 · 10:30 half 11 · 10:45 kwart voor 11.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Volgende uur",
              uitleg: "Bij 'kwart voor' noem je het uur dat eraan komt.",
            },
          ],
          niveaus: {
            basis: "Kwart voor 11.",
            simpeler: "Na 10:45 duurt het nog 15 minuten tot 11 uur. Dus kwart voor 11.",
            nogSimpeler: "Kwart voor 11",
          },
        },
      },
      {
        q: "Het is **kwart over 4**. Hoe laat is het **een kwartier later**?",
        options: ["Half 5", "Kwart voor 5", "5 uur", "Kwart over 5"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is twee kwartieren later.",
          "Dat is drie kwartieren later.",
          "Dat is een heel uur later.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "+15 minuten",
              tekst: "Kwart over 4 = 04:15. Plus 15 minuten = 04:30 = half 5.",
            },
          ],
          woorden: [
            {
              woord: "kwartier",
              uitleg: "15 minuten.",
            },
          ],
          theorie: "Elk kwartier = 15 minuten verder: 4 uur → kwart over 4 → half 5 → kwart voor 5 → 5 uur.",
          voorbeelden: [
            {
              type: "rij",
              tekst: "04:00 → 04:15 → 04:30 → 04:45 → 05:00",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Grote wijzer",
              uitleg: "Een kwartier later schuift de grote wijzer van de 3 naar de 6.",
            },
          ],
          niveaus: {
            basis: "Half 5.",
            simpeler: "Kwart over 4 = 4:15. Een kwartier erbij = 4:30. Dat is half 5.",
            nogSimpeler: "Half 5",
          },
        },
      },
    ],
  },
  {
    title: "Minuten — 5 over, 10 voor, etc.",
    explanation: "Tussen de **kwartiertjes** zit nog meer tijd. Elk **getal** op de klok is **5 minuten** verder dan het vorige.\n\n**Op de minutenwijzer**:\n\n| Wijzer wijst naar | Aantal minuten over heel uur |\n|---|---|\n| 12 | 0 (heel uur) |\n| 1 | 5 |\n| 2 | 10 |\n| 3 | 15 (kwart over) |\n| 4 | 20 |\n| 5 | 25 |\n| 6 | 30 (half) |\n| 7 | 35 |\n| 8 | 40 |\n| 9 | 45 (kwart voor) |\n| 10 | 50 |\n| 11 | 55 |\n\n**Hoe noem je tussentijden?**\n\n**Eerste helft** *(0-30 min):* '... over ...'\n• 5 over 4 = 04:05 — minutenwijzer op 1, klein op 4.\n• 10 over 4 = 04:10 — minutenwijzer op 2.\n• 25 over 4 = 04:25 — minutenwijzer op 5.\n\n**Vanaf half** *(31-59 min):* '... voor ...'\n• Vanaf 35 minuten zeggen Nederlanders **'voor het volgende uur'**.\n• 25 voor 5 = 04:35 — minutenwijzer op 7. *(Nog 25 min tot 5 uur)*\n• 20 voor 5 = 04:40 — minutenwijzer op 8.\n• 10 voor 5 = 04:50 — minutenwijzer op 10.\n• 5 voor 5 = 04:55 — minutenwijzer op 11.\n\n**Speciale gevallen rond 'half'**:\n• 5 voor half = nog 5 voor half (bv. 04:25 = 5 voor half 5)\n• 5 over half = 5 minuten na half (bv. 04:35 = 5 over half 5)\n\n**Maar het simpele systeem werkt ook**: 04:25 = '25 over 4' (eerste helft), 04:35 = '25 voor 5' (tweede helft). Veel kinderen leren het zo, en dat is helemaal goed.\n\n**Top-tip**: **kijk eerst naar de minutenwijzer**. Telt 'ie minder dan 30? Dan **'over'**. Meer dan 30? Dan **'voor'** + volgende uur.",
    svg: tweeKlokSvg(4, 10, 4, 50, "10 over 4", "10 voor 5"),
    checks: [
      {
        q: "Kijk goed naar deze klok. **Hoe laat is het?**",
        svg: klokSvg(3, 50),
        options: ["10 voor 4","10 over 3","10 voor 3","10 over 4"],
        answer: 0,
        wrongHints: [null,"De grote wijzer staat op 10 — dat is méér dan 30 minuten. Zeggen we dan 'over' of 'voor'?","Kan niet: dan zou de kleine wijzer nog vóór de 3 staan.","De kleine wijzer is nog niet bij de 4 — het uur 4 moet nog komen."],
        uitlegPad: {
          stappen: [{ titel: "Groot op 10 = 50 min", tekst: "Grote wijzer op 10 = 10 × 5 = 50 minuten. Meer dan 30 → 'voor' het volgende uur: nog 10 minuten tot 4 uur → 10 voor 4." }],
          woorden: [{ woord: "10 voor 4", uitleg: "= 3:50. Nog 10 minuten tot 4 uur." }],
          theorie: "Na het halve uur (grote wijzer voorbij de 6) tel je terug naar het volgende uur: 'zoveel voor'.",
          voorbeelden: [{ type: "stand", tekst: "Groot op 10 → 50 min → 10 voor. Groot op 11 → 55 min → 5 voor." }],
          basiskennis: [{ onderwerp: "Meer dan 30 = voor", uitleg: "Wijst de grote wijzer voorbij de 6? Dan zeg je 'voor' + het volgende uur." }],
          niveaus: { basis: "10 voor 4.", simpeler: "Grote wijzer op 10 = 50 minuten. Nog 10 minuten tot 4 uur → 10 voor 4 (3:50).", nogSimpeler: "10 voor 4" },
        },
      },
      {
        q: "Hoeveel minuten zitten tussen **2 cijfers** op de klok?",
        options: ["5","10","12","15"],
        answer: 0,
        wrongHints: [null,"Te veel — er zijn 60 minuten op de hele klok en 12 cijfers. Wat krijg je dan per cijfer?","12 is hoeveel cijfers er staan, niet minuten. Hoeveel minuten ZIJN er totaal?","Dat is een kwartier. Hoeveel cijfers verder is een kwartier?"],
        uitlegPad: {
          stappen: [{ titel: "60 ÷ 12 = 5", tekst: "60 minuten op klok ÷ 12 cijfers = 5 minuten per cijfer." }],
          woorden: [{ woord: "5-stappen-truc", uitleg: "Elke cijfer-positie = 5 min verder dan vorige." }],
          theorie: "Klok heeft 12 cijfers (1-12) en 60 min. 60÷12 = 5 minuten per cijfer.",
          voorbeelden: [{ type: "tabel", tekst: "Op 1 = 5 min. Op 2 = 10 min. Op 3 = 15 min (kwart). Op 6 = 30 min (half)." }],
          basiskennis: [{ onderwerp: "Tafel 5 truc", uitleg: "Cijfer × 5 = minuten. Bv. 4 → 20 min." }],
          niveaus: { basis: "5 min.", simpeler: "60 minuten ÷ 12 cijfers = 5 minuten per cijfer.", nogSimpeler: "5" },
        },
      },
      {
        q: "Als de grote wijzer op **2** staat: hoeveel minuten is het dan over het hele uur?",
        options: ["10","2","20","12"],
        answer: 0,
        wrongHints: [null,"De grote wijzer is in minuten, niet uren.","Dat is bij wijzer op 4.","12 = positie van de wijzer, niet minuten."],
        uitlegPad: {
          stappen: [{ titel: "2 × 5 = 10", tekst: "Elke cijfer-positie = 5 min. 2 × 5 = 10 minuten." }],
          woorden: [{ woord: "minuten-positie", uitleg: "Cijfer × 5 = minuten over." }],
          theorie: "Minutenwijzer: cijfer-nummer × 5 = aantal minuten over heel uur.",
          voorbeelden: [{ type: "tabel", tekst: "Op 1 = 5. Op 2 = 10. Op 3 = 15. Op 4 = 20. Op 6 = 30." }],
          basiskennis: [{ onderwerp: "Niet uur-positie", uitleg: "De grote wijzer wijst MINUTEN aan, niet uren — dus niet '2 minuten' of '2 uur'." }],
          niveaus: { basis: "10 minuten.", simpeler: "Grote wijzer op 2: 2 × 5 minuten = 10 minuten over heel uur.", nogSimpeler: "10" },
        },
      },
      {
        q: "Wat is **10 over 7** in 24-uurs ('s avonds)?",
        options: ["19:10","07:10","19:50","18:50"],
        answer: 0,
        wrongHints: [null,"'s ochtends, niet 's avonds.","Dat is 10 voor 8.","Dat is 10 voor 7."],
        uitlegPad: {
          stappen: [{ titel: "10 over 7 = 7:10", tekst: "10 over 7 = 10 min na 7 = 07:10. 's Avonds: 7+12=19 → 19:10." }],
          woorden: [{ woord: "X over Y", uitleg: "X minuten ná heel uur Y. Tijd = Y:XX." }],
          theorie: "Over-formule: X over Y = Y:0X (eerste 30 min).",
          voorbeelden: [{ type: "tabel", tekst: "5 over 7 = 7:05. 10 over 7 = 7:10. 25 over 7 = 7:25." }],
          basiskennis: [{ onderwerp: "Avond + 12", uitleg: "7 PM = 19. Dus 10 over 7 's avonds = 19:10." }],
          niveaus: { basis: "19:10.", simpeler: "10 over 7 = 7:10. 's Avonds: 7+12=19 → 19:10.", nogSimpeler: "19:10" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "De grote wijzer staat op de **11**. Hoeveel minuten is het nog **tot het volgende hele uur**?",
        options: ["5", "11", "55", "10"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Zoveel minuten is het óver het hele uur. De vraag is: hoeveel nog tot het volgende uur?",
          "Kijk naar de 10: dan is het nog 10 minuten. De 11 is een cijfer verder.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Nog 1 cijfer tot de 12",
              tekst: "Van de 11 naar de 12 is 1 cijfer = 5 minuten. Dus nog 5 minuten: 5 voor.",
            },
          ],
          woorden: [
            {
              woord: "5 voor",
              uitleg: "Nog 5 minuten tot het hele uur.",
            },
          ],
          theorie: "Elk cijfer = 5 minuten. Grote wijzer op 11 = 55 minuten over = 5 minuten voor het volgende uur.",
          voorbeelden: [
            {
              type: "tel",
              tekst: "11 → 12 = 1 stapje van 5 minuten.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Rondje = 60",
              uitleg: "60 − 55 = 5.",
            },
          ],
          niveaus: {
            basis: "5.",
            simpeler: "De 11 staat vlak voor de 12. Nog één stapje van 5 minuten. Dus nog 5 minuten.",
            nogSimpeler: "5",
          },
        },
      },
      {
        q: "Wat is **5 over 9** 's ochtends in cijfers?",
        options: ["09:05", "09:55", "08:55", "09:50"],
        answer: 0,
        wrongHints: [null, "Dat is 5 vóór 10.", "Dat is 5 vóór 9.", "Dat is 10 vóór 10."],
        uitlegPad: {
          stappen: [
            {
              titel: "5 over = :05",
              tekst: "5 over 9 = 5 minuten na 9 uur = 09:05.",
            },
          ],
          woorden: [
            {
              woord: "5 over",
              uitleg: "5 minuten na het hele uur. Grote wijzer op de 1.",
            },
          ],
          theorie: "'... over' = minuten na het hele uur. '... voor' = minuten tot het volgende hele uur.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "5 over 9 = 09:05. 5 voor 9 = 08:55.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Nul ervoor",
              uitleg: "Minder dan 10 minuten? Dan schrijf je er een 0 voor: 09:05.",
            },
          ],
          niveaus: {
            basis: "09:05.",
            simpeler: "5 over 9 is 5 minuten na 9 uur. 9 uur = 09:00, plus 5 = 09:05.",
            nogSimpeler: "09:05",
          },
        },
      },
      {
        q: "Hoe zeg je **06:50** in gewone woorden?",
        options: ["10 voor 7", "10 over 6", "10 voor 6", "10 over 7"],
        answer: 0,
        wrongHints: [null, "Dat zou 06:10 zijn.", "Dat is nog vóór 6 uur.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "50 minuten → 'voor'",
              tekst: "06:50 is al ver na half 7. Nog 10 minuten tot 7 uur → 10 voor 7.",
            },
          ],
          woorden: [
            {
              woord: "10 voor",
              uitleg: "Nog 10 minuten tot het volgende hele uur. Grote wijzer op de 10.",
            },
          ],
          theorie: "Meer dan half voorbij? Dan tel je hoeveel minuten er nog zijn tot het volgende uur.",
          voorbeelden: [
            {
              type: "tel",
              tekst: "06:50 → 07:00 = 10 minuten → 10 voor 7.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "60 − 50",
              uitleg: "60 − 50 = 10 minuten nog.",
            },
          ],
          niveaus: {
            basis: "10 voor 7.",
            simpeler: "Bij 06:50 duurt het nog 10 minuten tot 7 uur. Dus 10 voor 7.",
            nogSimpeler: "10 voor 7",
          },
        },
      },
      {
        q: "De grote wijzer staat op de **1**. De kleine wijzer staat net na de **11**. Hoe laat is het?",
        options: ["5 over 11", "5 voor 11", "1 over 11", "5 voor 12"],
        answer: 0,
        wrongHints: [
          null,
          "Bij '5 voor' staat de grote wijzer op de 11.",
          "De grote wijzer zegt minuten. Hoeveel minuten is één cijfer?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Grote op 1 = 5 over",
              tekst: "Grote wijzer op 1 = 5 minuten over. Kleine net na 11 → 5 over 11.",
            },
          ],
          woorden: [
            {
              woord: "5 over",
              uitleg: "5 minuten na het hele uur.",
            },
          ],
          theorie: "Grote wijzer: cijfer × 5 = minuten. 1 × 5 = 5 minuten.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Grote op 1 → 5 minuten. Kleine net na 11 → uur 11. Samen: 5 over 11.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eerst de grote",
              uitleg: "Tip: kijk eerst naar de minutenwijzer, dan naar het uur.",
            },
          ],
          niveaus: {
            basis: "5 over 11.",
            simpeler: "De grote wijzer op 1 = 5 minuten. De kleine is net voorbij de 11. Dus 5 over 11.",
            nogSimpeler: "5 over 11",
          },
        },
      },
    ],
  },
  {
    title: "Digitale klok + 24-uurs format",
    explanation: "Een **digitale klok** is veel makkelijker te lezen — de tijd staat al uitgeschreven.\n\n**Voorbeelden**:\n• **08:30** = half 9 's ochtends\n• **14:15** = kwart over 2 's middags\n• **22:45** = kwart voor 11 's avonds\n\n**Hoe lees je een digitale tijd?**\n• Voor de dubbele punt: het **uur**.\n• Na de dubbele punt: de **minuten**.\n\n**Twee formaten**:\n\n**12-uurs format** *(Engelse landen)*:\n• Loopt van 1 uur 's nachts tot 12 uur 's middags, dan weer van 1 tot 12 's avonds.\n• Gebruikt **AM** (voor 12) en **PM** (na 12).\n• Voorbeeld: 9:30 PM = 's avonds, 9:30 AM = 's ochtends.\n\n**24-uurs format** *(Europa, dus ook NL)*:\n• Loopt van 00:00 (middernacht) tot 23:59.\n• Geen AM/PM nodig.\n• 's Avonds 9 uur = **21:00**.\n• Middag: 12:00. Middernacht: 00:00.\n\n**Verschil tussen 12 en 24**:\n\n| 12-uurs | 24-uurs |\n|---|---|\n| 12:00 AM | 00:00 (middernacht) |\n| 06:30 AM | 06:30 |\n| 12:00 PM | 12:00 (middag) |\n| 03:00 PM | 15:00 |\n| 09:30 PM | 21:30 |\n| 11:59 PM | 23:59 |\n\n**Truc voor PM-tijden** (na 12 uur 's middags):\n• PM-tijd + 12 = 24-uurs tijd.\n• 5 PM + 12 = **17:00**.\n• 8:30 PM + 12 = **20:30**.\n\n**Wanneer welk format?**\n• Trein- en busschema's: **24-uurs**.\n• Dagelijkse gesprekken: vaak '5 uur' zonder uitleg (men weet of 't ochtend of avond is).\n• Engelstalige films: **12-uurs** met AM/PM.",
    svg: klokSvg(14, 30, { showLabels: true }),
    checks: [
      {
        q: "**21:00** in 12-uurs format is...",
        options: ["9:00 PM","9:00 AM","21:00 PM","12:00 PM"],
        answer: 0,
        wrongHints: [null,"AM is 's ochtends.","Geen 24-uur in 12-uur format.","12:00 PM is middag."],
        uitlegPad: {
          stappen: [{ titel: "21 - 12 = 9 PM", tekst: "21:00 → 21-12 = 9. Avond → PM. Dus 9:00 PM." }],
          woorden: [{ woord: "PM", uitleg: "Post Meridiem (Latijn) = na het middaguur. 12-23 uur." }, { woord: "AM", uitleg: "Ante Meridiem = vóór het middaguur. 0-11 uur." }],
          theorie: "24→12-uurs: na 12 uur trek je 12 af, voeg PM toe. 21:00 → 9 PM.",
          voorbeelden: [{ type: "tabel", tekst: "13:00 = 1 PM. 18:00 = 6 PM. 21:00 = 9 PM. 23:00 = 11 PM." }],
          basiskennis: [{ onderwerp: "Geen 21:00 PM", uitleg: "12-uurs gaat tot 12 — '21' bestaat niet in dat format." }],
          niveaus: { basis: "9:00 PM.", simpeler: "21:00 = 21-12 = 9 's avonds = 9:00 PM.", nogSimpeler: "9 PM" },
        },
      },
      {
        q: "Wat betekent **08:45**?",
        options: ["8 uur en 45 minuten","8 uur en 45 seconden","45 voor 8","Half 9"],
        answer: 0,
        wrongHints: [null,"Op een gewone klok staan er geen seconden achter de dubbele punt. Wat staat er dan wel?","45 voor 8 betekent dat je 45 minuten aftrekt van 8 uur — klopt dat met wat er staat?","Half 9 betekent dat het halverwege naar 9 is — maar welk uur staat er vóór de dubbele punt?"],
        uitlegPad: {
          stappen: [{ titel: "08:45 = 45 min over 8", tekst: "Na : staat altijd MINUTEN. 45 = 45 minuten. Of: kwart voor 9." }],
          woorden: [{ woord: "08:45", uitleg: "8 uur en 45 minuten. Of kwart voor 9." }],
          theorie: "Digitale tijd: uur:minuten. Na : altijd minuten (00-59).",
          voorbeelden: [{ type: "tabel", tekst: "08:00 = 8 uur. 08:30 = half 9. 08:45 = kwart voor 9. 09:00 = 9 uur." }],
          basiskennis: [{ onderwerp: "Geen seconden", uitleg: "Op klok: uur:minuten. Seconden alleen op stopwatches/digitale apparaten." }],
          niveaus: { basis: "45 min over 8.", simpeler: "08:45 = 8 uur + 45 min = kwart voor 9 (45 min over 8).", nogSimpeler: "Kwart voor 9" },
        },
      },
      {
        q: "Wat is **middernacht** in 24-uurs format?",
        options: ["00:00","12:00","24:00","23:00"],
        answer: 0,
        wrongHints: [null,"12:00 is middag.","24:00 zie je bijna nooit — een nieuwe dag begint bij nul.","Dat is 23 uur, een uur voor middernacht."],
        uitlegPad: {
          stappen: [{ titel: "Middernacht = 00:00", tekst: "12 uur 's nachts = nieuwe dag begint = 00:00. 24:00 gebruik je bijna nooit." }],
          woorden: [{ woord: "middernacht", uitleg: "12 uur 's nachts. Begin van nieuwe dag." }],
          theorie: "24-uurs format: 00:00 (middernacht) tot 23:59. Na 23:59 → terug naar 00:00.",
          voorbeelden: [{ type: "tijdlijn", tekst: "23:59 → 00:00 (middernacht, dag wisselt) → 01:00 → ... → 23:59." }],
          basiskennis: [{ onderwerp: "12:00 = middag", uitleg: "12:00 = 12 uur 's middags (lunchtijd). 00:00 = 12 uur 's nachts." }],
          niveaus: { basis: "00:00.", simpeler: "Middernacht = nieuwe dag begint = 00:00. (12:00 = middag, niet middernacht.)", nogSimpeler: "00:00" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Op een digitale klok staat **14:15**. Wat betekent het getal **vóór** de dubbele punt?",
        options: ["Het uur", "De minuten", "De seconden", "De datum"],
        answer: 0,
        wrongHints: [null, "Die staan áchter de dubbele punt.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Voor : = uur",
              tekst: "Bij 14:15 is 14 het uur en 15 het aantal minuten.",
            },
          ],
          woorden: [
            {
              woord: "dubbele punt",
              uitleg: "De twee puntjes (:) tussen het uur en de minuten.",
            },
          ],
          theorie: "Digitale tijd: uur : minuten. 14:15 = 14 uur en 15 minuten = kwart over 2 's middags.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "08:30 → uur 8, minuten 30.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lezen",
              uitleg: "Van links naar rechts: eerst het uur, dan de minuten.",
            },
          ],
          niveaus: {
            basis: "Het uur.",
            simpeler: "Vóór de dubbele punt staat het uur. Erachter de minuten.",
            nogSimpeler: "Uur",
          },
        },
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
        wrongHints: [null,"Trek eind- en begintijd van elkaar af — klopt jouw aftreksom?","Te lang — klopt het dat het meer dan een halve dag is?","Te kort — hoe ver is het van 8 uur 's ochtends tot 2 uur 's middags?"],
        uitlegPad: {
          stappen: [{ titel: "Eind - begin", tekst: "14 - 8 = 6 uur. Minuten zijn beide 00 — niets extra." }],
          woorden: [{ woord: "tijdsverschil", uitleg: "Eindtijd min begintijd = duur." }],
          theorie: "Hele uren aftrekken: eindtijd-uur min begintijd-uur. Hier: 14-8=6.",
          voorbeelden: [{ type: "som", tekst: "08:00 → 14:00 = 14-8 = 6 uur." }],
          basiskennis: [{ onderwerp: "Tellen vooruit", uitleg: "Of: 8→9→10→11→12→13→14 = 6 uur." }],
          niveaus: { basis: "6 uur.", simpeler: "14 - 8 = 6 uur. Minuten zijn beide 00.", nogSimpeler: "6" },
        },
      },
      {
        q: "Hoe lang van **15:30** tot **17:45**?",
        options: ["2 uur 15 min","2 uur","3 uur 15 min","1 uur 45 min"],
        answer: 0,
        wrongHints: [null,"Je hebt de hele uren goed — kijk nu ook naar de minuten.","Tel de hele uren nog eens: van 15 naar 17.","Te kort — tel eerst de hele uren, dan de minuten."],
        uitlegPad: {
          stappen: [{ titel: "Apart uren + minuten", tekst: "Uren: 17-15 = 2. Minuten: 45-30 = 15. Totaal: 2 uur 15 min." }],
          woorden: [{ woord: "tijdsverschil", uitleg: "Eind min begin, apart voor uren en minuten." }],
          theorie: "Tel-truc: 15:30 → 17:30 = 2 uur. 17:30 → 17:45 = 15 min. Som = 2u15m.",
          voorbeelden: [{ type: "stap", tekst: "Uren: 17-15=2. Minuten: 45-30=15. → 2 uur 15 min." }],
          basiskennis: [{ onderwerp: "Geen overflow", uitleg: "45 > 30, dus minuten gaan gewoon af. Geen lenen nodig." }],
          niveaus: { basis: "2 uur 15 min.", simpeler: "Uren: 17-15=2. Minuten: 45-30=15. Samen: 2 uur 15 minuten.", nogSimpeler: "2u15m" },
        },
      },
      {
        q: "Naar bed **22:00**, opstaan **07:00**. Hoe lang slapen?",
        options: ["9 uur","8 uur","12 uur","15 uur"],
        answer: 0,
        wrongHints: [null,"Je passeert middernacht — splits de berekening in twee delen: voor en na middernacht.","Te veel — check hoeveel uren het werkelijk zijn.","Te veel — dat zou bijna twee keer zo lang slapen zijn als normaal."],
        uitlegPad: {
          stappen: [{ titel: "Splits bij middernacht", tekst: "22:00 → 24:00 = 2 uur. 00:00 → 07:00 = 7 uur. Totaal 9 uur." }],
          woorden: [{ woord: "middernacht-passeren", uitleg: "Splits berekening in 2: tot middernacht + na middernacht." }],
          theorie: "Bij dag-overgang: tot 00:00 (24-uur tijd berekenen) + vanaf 00:00.",
          voorbeelden: [{ type: "stap", tekst: "22→24 = 2 uur. 0→7 = 7 uur. Som = 9 uur." }],
          basiskennis: [{ onderwerp: "Niet aftrekken", uitleg: "7-22 = -15 (verkeerd). Splitsen bij middernacht is veiliger." }],
          niveaus: { basis: "9 uur.", simpeler: "22→24=2u (tot middernacht). 0→7=7u (na). Samen: 2+7=9 uur.", nogSimpeler: "9" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoe lang is het van **10:00** tot **12:30**?",
        options: ["2 uur 30 min", "2 uur", "3 uur 30 min", "1 uur 30 min"],
        answer: 0,
        wrongHints: [
          null,
          "De hele uren kloppen. Vergeet je de minuten niet?",
          "Tel de hele uren nog eens: van 10 naar 12.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Uren + minuten",
              tekst: "Uren: 12 − 10 = 2. Minuten: 30 − 0 = 30. Samen: 2 uur 30 min.",
            },
          ],
          woorden: [
            {
              woord: "tijdsverschil",
              uitleg: "Hoe lang iets duurt: eindtijd min begintijd.",
            },
          ],
          theorie: "Tel apart: eerst de uren, dan de minuten.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "10:00 → 12:00 = 2 uur. 12:00 → 12:30 = 30 min.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geen lenen",
              uitleg: "30 is meer dan 0, dus je hoeft niet te lenen.",
            },
          ],
          niveaus: {
            basis: "2 uur 30 min.",
            simpeler: "Van 10 naar 12 uur is 2 uur. Dan nog 30 minuten. Samen 2 uur 30 min.",
            nogSimpeler: "2u30",
          },
        },
      },
      {
        q: "Een les begint om **09:15** en eindigt om **10:00**. Hoe lang duurt de les?",
        options: ["45 min", "15 min", "1 uur", "1 uur 15 min"],
        answer: 0,
        wrongHints: [null, "Dat is van 09:45 tot 10:00.", "Dan zou de les om 10:15 eindigen.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel tot het hele uur",
              tekst: "09:15 → 10:00 = 45 minuten (van 15 tot 60).",
            },
          ],
          woorden: [
            {
              woord: "vooruit tellen",
              uitleg: "Vanaf de begintijd tellen tot de eindtijd.",
            },
          ],
          theorie: "Snelste methode: tel vooruit vanaf de begintijd.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "09:15 → 09:30 (15) → 09:45 (30) → 10:00 (45 min).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "60 − 15",
              uitleg: "Een uur = 60 minuten. 60 − 15 = 45.",
            },
          ],
          niveaus: {
            basis: "45 min.",
            simpeler: "Van kwart over 9 tot 10 uur. Dat zijn 3 kwartieren = 45 minuten.",
            nogSimpeler: "45 min",
          },
        },
      },
      {
        q: "Hoeveel minuten is **1 uur en 20 minuten**?",
        options: ["80", "120", "70", "100"],
        answer: 0,
        wrongHints: [null, "Dat zijn 2 uur.", null, "Een uur heeft geen 100 minuten, maar 60."],
        uitlegPad: {
          stappen: [
            {
              titel: "60 + 20",
              tekst: "1 uur = 60 minuten. 60 + 20 = 80 minuten.",
            },
          ],
          woorden: [
            {
              woord: "uur",
              uitleg: "60 minuten.",
            },
          ],
          theorie: "Uren omrekenen naar minuten: elk uur = 60 minuten.",
          voorbeelden: [
            {
              type: "rekensom",
              tekst: "1 uur 20 min = 60 + 20 = 80 min.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lenen",
              uitleg: "Bij lenen doe je hetzelfde: 1 uur = 60 minuten erbij.",
            },
          ],
          niveaus: {
            basis: "80.",
            simpeler: "1 uur is 60 minuten. Daar 20 bij: 80 minuten.",
            nogSimpeler: "80",
          },
        },
      },
      {
        q: "Het is **08:50**. Over **20 minuten** begint school. Hoe laat begint school?",
        options: ["09:10", "09:00", "09:20", "08:30"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is maar 10 minuten later.",
          "Dat is 30 minuten later.",
          "Dat is 20 minuten eerder.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel tot het hele uur",
              tekst: "08:50 + 10 min = 09:00. Nog 10 min erbij = 09:10.",
            },
          ],
          woorden: [
            {
              woord: "vooruit tellen",
              uitleg: "Vanaf een tijd verder tellen.",
            },
          ],
          theorie: "Splits de minuten: eerst tot het hele uur, dan de rest.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "08:50 → 09:00 (10 min) → 09:10 (20 min).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Over het uur",
              uitleg: "50 + 20 = 70 minuten = 1 uur en 10 minuten.",
            },
          ],
          niveaus: {
            basis: "09:10.",
            simpeler: "Van 08:50 naar 09:00 is 10 minuten. Nog 10 minuten erbij: 09:10.",
            nogSimpeler: "09:10",
          },
        },
      },
    ],
  },
  {
    title: "Eindopdracht — combineer alles",
    explanation: "Tijd om te combineren!\n\n**Snelle samenvatting**:\n\n| Wijzer | Wat 'ie zegt |\n|---|---|\n| Klein (uur) | Welk uur (kort, oranje) |\n| Groot (minuten) | Hoeveel minuten (langer, blauw) |\n\n**Standaard tijden**:\n\n| Cijfers | Nederlands | Klok |\n|---|---|---|\n| 4:00 | 4 uur | grote op 12, kleine op 4 |\n| 4:15 | kwart over 4 | grote op 3 |\n| 4:30 | half 5 | grote op 6 |\n| 4:45 | kwart voor 5 | grote op 9 |\n\n**24-uurs vs 12-uurs**:\n• 9 ochtend → 09:00\n• 12 middag → 12:00\n• 9 avond → 21:00\n• 12 nacht → 00:00\n\n**Tijd berekenen**:\nEindtijd - begintijd. Bij negatieve minuten: leen 1 uur (= 60 min).\n\nVeel succes!",
    svg: klokSvg(10, 25),
    checks: [
      {
        q: "Kijk goed naar deze klok. **Hoe laat is het?**",
        svg: klokSvg(11, 15),
        options: ["Kwart over 11","Kwart voor 11","Kwart over 12","Half 11"],
        answer: 0,
        wrongHints: [null,"Kwart voor = grote wijzer op 9 (links). Deze staat rechts.","De kleine wijzer is de 12 nog niet voorbij.","Half = grote wijzer op 6 (onder)."],
        uitlegPad: {
          stappen: [{ titel: "Groot op 3 = kwart over", tekst: "Grote wijzer op 3 = 15 minuten = kwart over. Kleine wijzer net na 11 → kwart over 11." }],
          woorden: [{ woord: "kwart over 11", uitleg: "= 11:15." }],
          theorie: "Minutenwijzer-kompas: 12=heel uur, 3=kwart over, 6=half, 9=kwart voor.",
          voorbeelden: [{ type: "stand", tekst: "Groot op 3 + klein net na 11 → kwart over 11." }],
          basiskennis: [{ onderwerp: "Rechts = over", uitleg: "Grote wijzer rechts (op 3)? Dan 'kwart over' het uur waar de kleine wijzer net voorbij is." }],
          niveaus: { basis: "Kwart over 11.", simpeler: "Grote wijzer op 3 = kwart over. Kleine wijzer net na 11 → kwart over 11 (11:15).", nogSimpeler: "Kwart over 11" },
        },
      },
      {
        q: "De grote wijzer op **6**, kleine net voor **8**. Hoe laat is het?",
        svg: klokSvg(7, 30),
        options: ["Half 8","Half 9","8:30","9 uur"],
        answer: 0,
        wrongHints: [null,"Halverwege naar 9 betekent dat de kleine wijzer al voorbij 8 is — maar is dat hier het geval?","Die tijd in cijfers hoort bij een andere halfstand — kijk waar de kleine wijzer staat.","Bij dat tijdstip staat de grote wijzer niet op 6."],
        uitlegPad: {
          stappen: [{ titel: "Half + volgende uur", tekst: "Grote op 6 = half. Kleine net vóór 8 (tussen 7 en 8) = op weg naar 8 = half 8." }],
          woorden: [{ woord: "half 8", uitleg: "= 7:30. Kleine wijzer tussen 7 en 8." }],
          theorie: "NL halftruc: kijk naar volgende cijfer. Klein tussen 7 en 8 → half 8 (NIET half 7).",
          voorbeelden: [{ type: "stand", tekst: "Half 8 = 7:30. Klein tussen 7 en 8. Half 9 = 8:30. Klein tussen 8 en 9." }],
          basiskennis: [{ onderwerp: "Verwarring", uitleg: "Klein staat NA 7 (op weg naar 8) — daarom 'half 8', niet 'half 7'." }],
          niveaus: { basis: "Half 8.", simpeler: "Grote op 6 = halve uur. Klein tussen 7 en 8 → half 8 (= 7:30).", nogSimpeler: "Half 8" },
        },
      },
      {
        q: "Wat is **kwart voor 7** 's avonds in 24-uurs?",
        options: ["18:45","06:45","19:15","18:15"],
        answer: 0,
        wrongHints: [null,"06:45 is 's ochtends.","Dat is kwart over 7.","Dat is kwart over 6."],
        uitlegPad: {
          stappen: [{ titel: "Kwart voor 7 = 6:45", tekst: "Kwart voor 7 = 15 min vóór 7 = 6:45. 's Avonds: 6+12=18 → 18:45." }],
          woorden: [{ woord: "kwart voor 7", uitleg: "(7-1):45 = 6:45." }],
          theorie: "Kwart-voor-formule: kwart voor X = (X-1):45.",
          voorbeelden: [{ type: "tabel", tekst: "Kwart voor 7 's avonds = 18:45. Kwart over 7 's avonds = 19:15." }],
          basiskennis: [{ onderwerp: "Avond +12", uitleg: "6 PM = 18:00. Dus kwart voor 7 's avonds = 18:45." }],
          niveaus: { basis: "18:45.", simpeler: "Kwart voor 7 = 6:45. 's Avonds: 6+12=18 → 18:45.", nogSimpeler: "18:45" },
        },
      },
      {
        q: "Hoe lang van **13:15** tot **15:00**?",
        options: ["1 uur 45 minuten","2 uur","2 uur 15 min","45 minuten"],
        answer: 0,
        wrongHints: [null,"Te lang — 13:15 is geen heel uur. Tel eerst tot 14:00.","2 uur 15 zou tot 15:30 zijn.","Te kort."],
        uitlegPad: {
          stappen: [{ titel: "Tel vooruit", tekst: "13:15 → 14:00 = 45 min. 14:00 → 15:00 = 1 uur. Totaal: 1 uur 45 min." }],
          woorden: [{ woord: "tel-vooruit truc", uitleg: "Tel in stappen: tot heel uur, dan hele uren, dan rest." }],
          theorie: "Stappen: begin → eerste heel uur (rest min). Hele uren tellen. Eind-minuten optellen.",
          voorbeelden: [{ type: "stap", tekst: "13:15→14:00 = 45 min. 14:00→15:00 = 1 uur. Som = 1u45m." }],
          basiskennis: [{ onderwerp: "Niet 2 uur", uitleg: "Geen volle 2 uur — 15 min korter (1u45m)." }],
          niveaus: { basis: "1 uur 45 min.", simpeler: "13:15 → 15:00 = 13:15 → 14:00 (45m) + 14:00 → 15:00 (1u) = 1 uur 45 min.", nogSimpeler: "1u45m" },
        },
      },
      {
        q: "Hoeveel minuten = **3 kwartieren**?",
        options: ["45","30","60","15"],
        answer: 0,
        wrongHints: [null,"Dat zijn maar 2 kwartieren — het gaat om 3.","Dat zijn 4 kwartieren — maar de vraag gaat over 3.","Dat is slechts 1 kwartier — vermenigvuldig dit nog met 3."],
        uitlegPad: {
          stappen: [{ titel: "3 × 15 = 45", tekst: "1 kwartier = 15 min. 3 × 15 = 45 minuten." }],
          woorden: [{ woord: "kwartier", uitleg: "15 minuten. 4 kwartieren = 1 uur." }],
          theorie: "Kwartier-tabel: 1=15, 2=30, 3=45, 4=60 min.",
          voorbeelden: [{ type: "tabel", tekst: "1 kw = 15 min. 2 kw = 30 min (half uur). 3 kw = 45 min (3/4 uur). 4 kw = 60 min (uur)." }],
          basiskennis: [{ onderwerp: "Tafel 15", uitleg: "15-30-45-60 — leer dit ritme." }],
          niveaus: { basis: "45 min.", simpeler: "1 kwartier = 15 min. 3 × 15 = 45 minuten.", nogSimpeler: "45" },
        },
      },
      {
        q: "**08:30** in Nederlandse spreektaal:",
        options: ["Half 9","Half 8","8:30 uur","Acht en half"],
        answer: 0,
        wrongHints: [null,"Half 8 = 7:30.","In cijfers klopt het, maar hoe zég je het in gewone spreektaal?","Geen Nederlandse uitdrukking."],
        uitlegPad: {
          stappen: [{ titel: "08:30 = half 9", tekst: "Nederlandse spreektaal: minuten op 30 = 'half X+1'. 08:30 → half 9." }],
          woorden: [{ woord: "half 9", uitleg: "= 8:30 = 30 min vóór 9 uur." }],
          theorie: "NL halfregel: minuten 30 → half (volgend uur). 8:30 → half 9. 7:30 → half 8.",
          voorbeelden: [{ type: "tabel", tekst: "06:30 = half 7. 08:30 = half 9. 11:30 = half 12. 23:30 = half 12 's nachts." }],
          basiskennis: [{ onderwerp: "Anders dan Engels", uitleg: "EN 'half past eight' = 8:30. NL 'half 9' = 8:30 (kijkt vooruit naar 9)." }],
          niveaus: { basis: "Half 9.", simpeler: "08:30 = halve uur, vooruit kijken naar 9 = 'half 9'. (Half 8 zou 7:30 zijn).", nogSimpeler: "Half 9" },
        },
      },
      { q: "De film begint om 19:15 en duurt 90 minuten. Hoe laat is hij afgelopen?", options: ["20:45","20:15","21:00","19:45"], answer: 0, wrongHints: [null, "Niet — dat is +1 uur.", "Niet — te veel.", "Niet — alleen 30 min erbij."] },
      { q: "**Kwart over 3** = welke tijd?", options: ["3:15","3:45","2:45","3:30"], answer: 0, wrongHints: [null, "Kwart voor 4.", "Kwart voor 3.", "Half 4."] },
      { q: "**Kwart voor 8** = welke tijd?", options: ["7:45","8:15","8:45","7:15"], answer: 0, wrongHints: [null, "Kwart over.", "Te laat.", "Niet."] },
      { q: "**Half 5** = welke tijd?", options: ["4:30","5:30","4:45","5:00"], answer: 0, wrongHints: [null, "Niet — vooruit kijken.", "Niet.", "Niet half."] },
      { q: "**21:00** in 12-uurs?", options: ["9:00 's avonds","9:00 's morgens","11:00 's avonds","1:00 's nachts"], answer: 0, wrongHints: [null, "Dat is 09:00.", "23:00.", "01:00."] },
      { q: "Hoeveel **minuten** in 1 uur?", options: ["60","100","30","24"], answer: 0, wrongHints: [null, "Niet — geen decimaal.", "Halve.", "Uren in dag."] },
      { q: "Hoeveel **seconden** in 1 minuut?", options: ["60","30","100","24"], answer: 0, wrongHints: [null, "Halve.", "Niet.", "Niet."] },
      { q: "School begint om 8:30 en eindigt om 14:45. Hoe lang duurt de schooldag?", options: ["6 uur 15 min","6 uur","5 uur 45 min","7 uur"], answer: 0, wrongHints: [null, "Je hebt de uren — kijk ook naar de minuten: :30 en :45.", "Niet.", "Te veel."] },
      { q: "De trein vertrekt om 10:50 en rijdt 1 uur en 25 minuten. Hoe laat komt hij aan?", options: ["12:15","11:50","12:25","11:25"], answer: 0, wrongHints: [null, "Alleen 1 uur.", "Niet — 25 min na 12.", "Te kort."] },
      { q: "Hoe noemen we **12:00**?", options: ["Middag","Middernacht","Half 1","Avond"], answer: 0, wrongHints: [null, "Middernacht hoort bij 0:00 / 24:00, niet bij 12:00.", "Half 1 betekent halverwege het uur ná 12 — maar 12:00 is precies op het uur.", "Niet relevant."] },
      { q: "Hoeveel tijd zit er tussen 9:15 en 9:45?", options: ["30 min","15 min","45 min","1 uur"], answer: 0, wrongHints: [null, "Te weinig — tel in stapjes van 15 minuten vanaf 9:15.", "Niet.", "Niet."] },
      { q: "Een **dag** heeft hoeveel uur?", options: ["24","12","60","48"], answer: 0, wrongHints: [null, "Halve dag.", "Minuten in uur.", "Twee dagen."] },
      { q: "Hoe laat is 'half 11'?", options: ["10:30","11:30","10:45","11:00"], answer: 0, wrongHints: [null, "Niet — vooruit kijken.", "Niet half.", "Niet half."] },
      { q: "Hoe zeg je **15:30** in spreektaal?", options: ["Half 4","Half 5","Kwart over 3","Kwart voor 4"], answer: 0, wrongHints: [null, "Dat is 16:30.", "Dat is 15:15.", "Dat is 15:45."] },
      { q: "Hoeveel uur tussen 22:00 en 06:00 's morgens?", options: ["8 uur","4 uur","12 uur","6 uur"], answer: 0, wrongHints: [null, "Niet — over middernacht.", "Niet — niet 12.", "Niet — vergeet middernacht."] },
      { q: "**5 voor half 3** = welke tijd?", options: ["14:25","14:35","2:35","15:25"], answer: 0, wrongHints: [null, "Dat is 5 óver half 3.", "Dat is 5 óver half 3, en dan 's nachts.", "Dat is 5 voor half 4."] },
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
  // SLO-referentieniveau (sprint-4 G4a 2026-05-08): rekenen-leerlijn
  // 'Meten en meetkunde — tijd'. Klokkijken hoort bij 1F (einde groep 8).
  referentieNiveau: "1F",
  sloThema: "Meten en meetkunde",
  prerequisites: [
    { id: "tafels-po", title: "Tafels (vermenigvuldigen)", niveau: "po-1F" },
    { id: "kalender-rekenen-po", title: "Kalender + tijd", niveau: "po-1F" },
  ],
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
