// Leerpad: Parabolen
// Doelgroep: klas 1-2 VO (13-15 jaar)
// 7 stappen: van wat-is-een-parabool tot top + nulpunten berekenen

const COLORS = {
  axis: "#e0e6f0",
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
};

const baseAxes = `<line x1="20" y1="100" x2="280" y2="100" stroke="${COLORS.axis}" stroke-width="1"/>
<line x1="150" y1="20" x2="150" y2="180" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="270" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">x</text>
<text x="155" y="28" fill="${COLORS.text}" font-size="11" font-family="Arial">y</text>`;

const parabolen = {
  id: "parabolen",
  title: "Parabolen begrijpen",
  emoji: "📐",
  level: "klas1-vwo",
  subject: "wiskunde",
  intro: "Een parabool zit overal: in een fontein, in de baan van een bal, in een satellietschotel. In dit leerpad leer je in 7 stappen wat een parabool is, hoe je 'm herkent en hoe je de belangrijkste punten zelf berekent.",
  triggerKeywords: ["parabool", "parabolen", "dalparabool", "bergparabool", "y=x²", "y = x²", "kwadratische functie"],
  steps: [
    {
      title: "Wat is een parabool?",
      explanation: "Een parabool is een vloeiende, symmetrische kromme in de vorm van een **U** (of omgekeerde U). Je ziet 'm bij een fontein, bij de baan van een gegooide bal en bij satellietschotels.\n\nDe simpelste parabool heeft de vergelijking **y = x²**. Voor elke x reken je x maal x uit, en dat is de y-waarde.\n\nBelangrijk: een parabool is altijd **spiegelsymmetrisch** — links en rechts van het midden is hij precies gelijk.",
      svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<path d="M 80 160 Q 150 -40 220 160" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<line x1="150" y1="40" x2="150" y2="160" stroke="${COLORS.curve2}" stroke-width="1" stroke-dasharray="3 3"/>
<text x="158" y="55" fill="${COLORS.curve2}" font-size="10" font-family="Arial">spiegel-as</text>
</svg>`,
      checks: [
        {
          q: "Welke vorm hoort bij een parabool?",
          options: ["Een vloeiende U-vorm", "Een rechte lijn", "Een cirkel", "Een zigzag"],
          answer: 0,
          wrongHints: [
            null,
            "Een rechte lijn hoort bij een lineaire functie (y = ax + b). Een parabool buigt — een lijn niet.",
            "Een cirkel buigt steeds dezelfde kant op. Een parabool buigt op de assen-as om: hij gaat eerst naar beneden en dan weer omhoog (of andersom).",
            "Een parabool is juist heel vloeiend en heeft geen hoeken of knikken.",
          ],
        },
        {
          q: "Een parabool is altijd spiegelsymmetrisch — klopt dit?",
          options: ["Ja, altijd", "Nee, soms wel soms niet"],
          answer: 0,
          wrongHints: [
            null,
            "Toch wel! Door het midden van elke parabool kun je een spiegel-as tekenen. Links en rechts daarvan is de vorm precies gelijk.",
          ],
        },
      ],
    },
    {
      title: "Dalparabool of bergparabool?",
      explanation: "Er zijn twee soorten parabolen:\n\n• **Dalparabool** — opent naar **boven**, vorm van een U, heeft een **laagste punt** (de top zit onderaan).\n• **Bergparabool** — opent naar **beneden**, vorm van een ∩, heeft een **hoogste punt** (de top zit bovenaan).\n\nHoe weet je welke je hebt? Kijk naar het **teken vóór x²**:\n\n• **y = x²** of **y = 2x²** → **plus**, dus **dal**parabool\n• **y = -x²** of **y = -3x²** → **min**, dus **berg**parabool",
      svg: `<svg viewBox="0 0 300 200">
<line x1="10" y1="100" x2="290" y2="100" stroke="${COLORS.axis}" stroke-width="1"/>
<path d="M 30 170 Q 80 0 130 170" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<text x="60" y="190" fill="${COLORS.curve}" font-size="11" font-family="Arial">dalparabool</text>
<text x="78" y="50" fill="${COLORS.curve}" font-size="10" font-family="Arial">y = x²</text>
<path d="M 170 30 Q 220 200 270 30" stroke="${COLORS.curveAlt}" stroke-width="2.5" fill="none"/>
<text x="195" y="190" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial">bergparabool</text>
<text x="210" y="155" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">y = -x²</text>
</svg>`,
      checks: [
        {
          q: "y = -x². Wat voor parabool is dit?",
          options: ["Bergparabool", "Dalparabool"],
          answer: 0,
          wrongHints: [
            null,
            "Kijk naar het teken vóór x². Er staat een **min**, dus het is een bergparabool (∩-vorm met een hoogste punt).",
          ],
        },
        {
          q: "Welke parabool heeft een laagste punt?",
          options: ["De dalparabool", "De bergparabool", "Allebei", "Geen van beide"],
          answer: 0,
          wrongHints: [
            null,
            "De bergparabool opent naar beneden — daar zit het hoogste punt bovenaan, niet een laagste punt.",
            "Nee, alleen één van de twee: de dalparabool. Een bergparabool heeft een hoogste punt.",
            "Elke parabool heeft een top. Bij een dal is dat het laagste punt.",
          ],
        },
        {
          q: "y = 5x². Dal of berg?",
          options: ["Dalparabool", "Bergparabool"],
          answer: 0,
          wrongHints: [
            null,
            "Het getal 5 staat positief vóór x² (geen min). Dus dal.",
          ],
        },
      ],
    },
    {
      title: "Wat doet de a in y = ax²?",
      explanation: "De **a** is het getal vóór x². Hij doet twee dingen:\n\n**1. Teken (+ of −)**: bepaalt of het dal of berg is (dat weet je al).\n\n**2. Grootte**: bepaalt hoe **smal of breed** de parabool is.\n• **a groot** (zoals 3 of 5) → **smalle**, steile parabool\n• **a klein** (zoals ½ of 0,2) → **brede**, flauwe parabool\n• **a = 1** → de standaard parabool y = x²\n\nVuistregel: een grotere a 'duwt' de parabool sneller omhoog.",
      svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<path d="M 110 160 Q 150 -200 190 160" stroke="${COLORS.curveAlt}" stroke-width="2" fill="none"/>
<text x="115" y="50" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">y = 3x² (smal)</text>
<path d="M 80 160 Q 150 -40 220 160" stroke="${COLORS.curve}" stroke-width="2" fill="none"/>
<text x="222" y="105" fill="${COLORS.curve}" font-size="10" font-family="Arial">y = x²</text>
<path d="M 30 160 Q 150 60 270 160" stroke="${COLORS.curve2}" stroke-width="2" fill="none"/>
<text x="35" y="155" fill="${COLORS.curve2}" font-size="10" font-family="Arial">y = ½x² (breed)</text>
</svg>`,
      checks: [
        {
          q: "Welke parabool is het smalst?",
          options: ["y = 4x²", "y = x²", "y = ½x²", "y = 0,1x²"],
          answer: 0,
          wrongHints: [
            null,
            "y = x² is de standaard. Een grotere a maakt 'm smaller, een kleinere a breder.",
            "½ is kleiner dan 1, dus juist breder dan y = x².",
            "0,1 is heel klein, dus heel breed.",
          ],
        },
        {
          q: "Bij welke vergelijking krijg je een bergparabool?",
          options: ["y = -2x²", "y = 2x²", "y = ½x²", "y = 100x²"],
          answer: 0,
          wrongHints: [
            null,
            "Geen min vóór x², dus dal — niet berg.",
            "Geen min, dus dal — al is hij wel breed.",
            "100 is positief, dus dal (en heel smal).",
          ],
        },
      ],
    },
    {
      title: "Verschuiven met + c (omhoog en omlaag)",
      explanation: "We bouwen de vergelijking nu uit naar **y = ax² + c**.\n\nDe **c** verschuift de hele parabool **omhoog of omlaag**:\n\n• **+ c** (positief) → parabool schuift **omhoog**\n• **− c** (negatief) → parabool schuift **omlaag**\n\nVoorbeeld: y = x² + 3 is dezelfde vorm als y = x², maar de top zit nu op (0, 3) — dus 3 hoger.\n\nDe **vorm** verandert niet, alleen de **plek**.",
      svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<path d="M 90 100 Q 150 -100 210 100" stroke="${COLORS.curve2}" stroke-width="2" fill="none"/>
<text x="200" y="60" fill="${COLORS.curve2}" font-size="10" font-family="Arial">y = x² + 3</text>
<path d="M 80 160 Q 150 -40 220 160" stroke="${COLORS.curve}" stroke-width="2" fill="none"/>
<text x="225" y="115" fill="${COLORS.curve}" font-size="10" font-family="Arial">y = x²</text>
<circle cx="150" cy="100" r="3" fill="${COLORS.point}"/>
<circle cx="150" cy="160" r="3" fill="${COLORS.point}"/>
</svg>`,
      checks: [
        {
          q: "y = x² + 5. Hoe ver is de top verschoven ten opzichte van y = x²?",
          options: ["5 omhoog", "5 omlaag", "5 naar rechts", "Niet verschoven"],
          answer: 0,
          wrongHints: [
            null,
            "Het is +5, niet -5. Een plus duwt de parabool omhoog.",
            "Met + c verschuif je verticaal (omhoog/omlaag), niet horizontaal.",
            "Bij y = x² is de top (0,0). Bij y = x² + 5 is de top (0, 5) — wel degelijk verschoven.",
          ],
        },
        {
          q: "y = x² − 4. Waar zit de top?",
          options: ["Onder de x-as, op (0, -4)", "Op de x-as", "Boven de x-as, op (0, 4)", "Op (4, 0)"],
          answer: 0,
          wrongHints: [
            null,
            "De −4 verschuift de parabool omlaag. De top zit dus 4 onder de x-as.",
            "Bij y = x² zit de top op (0, 0), maar door de −4 schuift hij omlaag naar (0, -4).",
            "−4 betekent omlaag, niet horizontaal naar rechts. De top blijft op de y-as (x = 0).",
          ],
        },
      ],
    },
    {
      title: "De top van een parabool berekenen",
      explanation: "De **top** is het hoogste punt (bij berg) of laagste punt (bij dal). Heel belangrijk omdat veel vragen erom draaien.\n\n**Simpele gevallen:**\n• y = x² → top = **(0, 0)**\n• y = x² + c → top = **(0, c)**\n• y = ax² + c → top = **(0, c)**\n\n**Algemene formule** voor y = ax² + bx + c:\n\n**x_top = −b / (2a)**\n\nVul daarna die x in de vergelijking in om y_top te krijgen.\n\nVoorbeeld: y = 2x² − 8x + 3\n• a = 2, b = −8\n• x_top = −(−8) / (2·2) = 8 / 4 = **2**\n• y_top = 2·(2)² − 8·2 + 3 = 8 − 16 + 3 = **−5**\n• Top = **(2, −5)**",
      svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<path d="M 60 30 Q 150 320 240 30" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<circle cx="150" cy="170" r="5" fill="${COLORS.point}"/>
<text x="160" y="175" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">top</text>
<line x1="150" y1="170" x2="150" y2="100" stroke="${COLORS.point}" stroke-width="1" stroke-dasharray="3 3"/>
</svg>`,
      checks: [
        {
          q: "Wat is de top van y = x² + 7?",
          options: ["(0, 7)", "(7, 0)", "(0, 0)", "(0, -7)"],
          answer: 0,
          wrongHints: [
            null,
            "Bij y = x² + c zit de top op de y-as, dus x = 0. De c is hier 7, dus y = 7.",
            "Geen verschuiving, dus standaard top is (0, 0). Maar +7 verschuift 'm omhoog naar (0, 7).",
            "+7 verschuift omhoog (positieve y), niet omlaag.",
          ],
        },
        {
          q: "y = 3x² − 6x + 1. Wat is x_top?",
          options: ["1", "−1", "2", "6"],
          answer: 0,
          wrongHints: [
            null,
            "Het min-teken zit al in de formule. x_top = -(-6)/(2·3) = 6/6 = +1, niet -1.",
            "Reken nog eens: −b/(2a) = −(−6)/(2·3) = 6/6 = 1.",
            "6 is alleen het tussenresultaat (boven de breukstreep). Je moet nog delen door 2a = 6.",
          ],
        },
      ],
    },
    {
      title: "Nulpunten (snijpunten met de x-as)",
      explanation: "Nulpunten zijn de x-waarden waar **y = 0** — dus waar de parabool de **x-as snijdt**.\n\n**Aantal nulpunten:**\n• Parabool snijdt de x-as op **2 plekken** → 2 nulpunten\n• Parabool **raakt** de x-as op 1 plek → 1 nulpunt (de top zit precies op de x-as)\n• Parabool **raakt de x-as niet** → 0 nulpunten\n\n**Eenvoudig voorbeeld:** y = x² − 9\nZet y = 0:  x² − 9 = 0 → x² = 9 → x = 3 of x = −3\nNulpunten: **−3 en 3**\n\n**Geen oplossing:** y = x² + 4\nx² + 4 = 0 → x² = −4. Maar x² is nooit negatief, dus **geen nulpunten** (de parabool zweeft boven de x-as).",
      svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<path d="M 50 50 Q 150 250 250 50" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<circle cx="100" cy="100" r="5" fill="${COLORS.point}"/>
<circle cx="200" cy="100" r="5" fill="${COLORS.point}"/>
<text x="80" y="125" fill="${COLORS.point}" font-size="11" font-family="Arial">x = -3</text>
<text x="185" y="125" fill="${COLORS.point}" font-size="11" font-family="Arial">x = 3</text>
</svg>`,
      checks: [
        {
          q: "Wat zijn de nulpunten van y = x² − 16?",
          options: ["x = −4 en x = 4", "x = −16 en x = 16", "Alleen x = 16", "Geen nulpunten"],
          answer: 0,
          wrongHints: [
            null,
            "x² = 16 betekent: welk getal in het kwadraat is 16? Dat is 4 (en −4), niet 16 zelf.",
            "Het zijn er twee: niet alleen het positieve, maar ook het negatieve. Want (−4)² = 16 ook.",
            "Er bestaat een x waarvoor x² = 16, namelijk x = 4 of x = −4. Dus wel degelijk nulpunten.",
          ],
        },
        {
          q: "Hoeveel nulpunten heeft y = x² + 1?",
          options: ["0 (geen)", "1", "2", "Oneindig veel"],
          answer: 0,
          wrongHints: [
            null,
            "x² + 1 = 0 zou betekenen x² = −1. Maar een kwadraat is nooit negatief, dus er is geen oplossing.",
            "Voor 2 nulpunten zou je een minteken vóór de losse term nodig hebben (x² − iets). Hier is het +1.",
            "Een parabool snijdt een lijn (de x-as) maximaal 2 keer.",
          ],
        },
      ],
    },
    {
      title: "Eindopdracht: alles samen",
      explanation: "Tijd om alles wat je geleerd hebt toe te passen op één parabool.\n\nNeem **y = x² − 4**.\n\n**Stap 1**: dal of berg? Het teken vóór x² is **+** (geen min), dus **dalparabool**.\n\n**Stap 2**: top? a = 1, b = 0, c = −4. Geen b, dus de top zit op de y-as: **(0, −4)**.\n\n**Stap 3**: nulpunten? Zet y = 0:\nx² − 4 = 0 → x² = 4 → x = 2 of x = −2.\nNulpunten: **−2 en 2**.\n\nKijk goed naar de tekening en zie hoe alles klopt.",
      svg: `<svg viewBox="0 0 300 200">
${baseAxes}
<path d="M 50 30 Q 150 290 250 30" stroke="${COLORS.curve}" stroke-width="2.5" fill="none"/>
<circle cx="116" cy="100" r="4" fill="${COLORS.point}"/>
<text x="92" y="92" fill="${COLORS.point}" font-size="10" font-family="Arial">(-2, 0)</text>
<circle cx="184" cy="100" r="4" fill="${COLORS.point}"/>
<text x="190" y="92" fill="${COLORS.point}" font-size="10" font-family="Arial">(2, 0)</text>
<circle cx="150" cy="160" r="5" fill="${COLORS.curveAlt}"/>
<text x="158" y="175" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">top (0,-4)</text>
</svg>`,
      checks: [
        {
          q: "Welke beschrijving past helemaal bij y = x² − 4?",
          options: [
            "Dalparabool, top (0, −4), nulpunten −2 en 2",
            "Bergparabool, top (0, 4), nulpunten −2 en 2",
            "Dalparabool, top (0, 4), nulpunten −2 en 2",
            "Dalparabool, top (0, −4), geen nulpunten",
          ],
          answer: 0,
          wrongHints: [
            null,
            "Het teken vóór x² is +, dus dal — niet berg. En de top zit op (0, −4), niet (0, 4).",
            "De top klopt niet: bij −4 schuift de parabool omlaag, dus de top zit op (0, −4).",
            "De top klopt, maar er zijn wél nulpunten: x² = 4 geeft x = ±2.",
          ],
        },
        {
          q: "Wat is de top van y = x² + 6x?",
          options: [
            "(−3, −9)",
            "(3, −9)",
            "(−3, 9)",
            "(6, 0)",
          ],
          answer: 0,
          wrongHints: [
            null,
            "Pas op met het min-teken in de formule: x_top = −b/(2a) = −6/2 = −3, niet +3.",
            "x_top klopt, maar reken y nog eens: y_top = (−3)² + 6·(−3) = 9 − 18 = −9, niet +9.",
            "Vergeet niet x_top = −b/(2a) toe te passen. b = 6, a = 1, dus x_top = −6/2 = −3.",
          ],
        },
      ],
    },
  ],
};

export default parabolen;

export const ALL_LEARN_PATHS = {
  parabolen,
};

export function findLearnPathForQuestion(questionText) {
  if (!questionText) return null;
  const lower = questionText.toLowerCase();
  for (const path of Object.values(ALL_LEARN_PATHS)) {
    if (path.triggerKeywords?.some((kw) => lower.includes(kw.toLowerCase()))) {
      return path.id;
    }
  }
  return null;
}
