// Leerpad: Statistiek basis (klas 1-2)
// 12 stappen, 5 hoofdstukken.

const COLORS = {
  curve: "#00c853",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const stepEmojis = ["📊", "📋", "📈", "🧮", "🔁", "📍", "⚖️", "📏", "📐", "🎯", "📦", "🏆", "📝"];

const chapters = [
  { letter: "A", title: "Verzamelen en weergeven", emoji: "📊", from: 0, to: 2 },
  { letter: "B", title: "Gemiddelde, modus, mediaan", emoji: "🧮", from: 3, to: 6 },
  { letter: "C", title: "Spreiding en bereik", emoji: "📏", from: 7, to: 8 },
  { letter: "D", title: "Grafieken interpreteren", emoji: "📐", from: 9, to: 9 },
  { letter: "E", title: "Toepassingen + eindopdracht", emoji: "🏆", from: 10, to: 11 },
  { letter: "F", title: "Examenstijl — VMBO-GT CSE", emoji: "📝", from: 12, to: 12 },
];

const steps = [
  {
    title: "Wat is statistiek?",
    explanation: "**Statistiek** is het bestuderen van **gegevens** (data). Je verzamelt cijfers, ordent ze, en trekt conclusies.\n\n**Voorbeelden waar je statistiek tegenkomt**:\n• Gemiddelde cijfer in een toets\n• Aantal regenbuien per maand\n• Hoogste, laagste en gemiddelde temperatuur\n• Populairste sport in een klas\n• Aantal stemmen op een kandidaat\n\n**Twee fasen**:\n1. **Verzamelen + ordenen** (frequentietabel, staafdiagram)\n2. **Beschrijven** (gemiddelde, modus, mediaan)\n\n**Voorbeeld**: in een klas vragen we de schoenmaten:\n38, 40, 38, 42, 39, 38, 41, 40, 39, 38\n\nVan deze 10 getallen kunnen we van alles uitrekenen — daar gaan de volgende stappen over.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="40" width="220" height="120" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<text x="150" y="62" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">schoenmaten klas</text>
<text x="150" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">38, 40, 38, 42, 39, 38</text>
<text x="150" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">41, 40, 39, 38</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">10 getallen</text>
<text x="150" y="150" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">uit chaos: orde + conclusies</text>
</svg>`,
    checks: [
      {
        q: "Wat is statistiek?",
        options: ["Verzamelen en bestuderen van gegevens","Iets uit de oudheid","Een soort breuk","Een soort hoek"],
        answer: 0,
        wrongHints: [null, "Niet historisch — statistiek is wiskunde van data.", "Niets met breuken te maken.", "Een hoek is meetkunde."],
        uitlegPad: {
          stappen: [{ titel: "Data → conclusies", tekst: "Statistiek = wiskunde-onderdeel dat data (gegevens) verzamelt, ordent en analyseert. Doel: patronen vinden en conclusies trekken. Voorbeelden: gemiddeld cijfer, populairste sport, aantal regenbuien." }],
          woorden: [{ woord: "statistiek", uitleg: "Wiskunde van data. Verzamelen + ordenen + beschrijven." }, { woord: "data", uitleg: "Gegevens. Cijfers/feiten die je verzamelt." }],
          theorie: "Twee fases: (1) Verzamelen + ordenen (tabel/staafdiagram). (2) Beschrijven (gemiddelde, modus, mediaan). Statistiek = brug tussen ruwe getallen en bruikbare informatie.",
          voorbeelden: [{ type: "alledaags", tekst: "Weersvoorspelling, sportstatistieken, opinie-peilingen, schoolresultaten — allemaal statistiek." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Niet historie. Geen breuk-onderdeel. Geen meetkunde (hoeken)." }],
          niveaus: { basis: "Data bestuderen. A.", simpeler: "Statistiek = wiskunde van gegevens verzamelen + analyseren. = A.", nogSimpeler: "Data = A." },
        },
      },
    ],
  },
  {
    title: "Frequentietabel",
    explanation: "Met een **frequentietabel** orden je gegevens. Per waarde tel je hoe vaak hij voorkomt. Dat aantal heet de **frequentie**.\n\n**Voorbeeld**: schoenmaten 38, 40, 38, 42, 39, 38, 41, 40, 39, 38.\n\n| Maat | Frequentie |\n|------|-----------|\n| 38 | 4 |\n| 39 | 2 |\n| 40 | 2 |\n| 41 | 1 |\n| 42 | 1 |\n\n**Totaal**: 4+2+2+1+1 = 10 (klopt: we hadden 10 leerlingen).\n\nNu zie je in één oogopslag: maat **38 komt het vaakst voor** (4 keer). Dat noemen we de **modus**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<line x1="40" y1="48" x2="260" y2="48" stroke="${COLORS.curve}" stroke-width="1"/>
<line x1="150" y1="20" x2="150" y2="190" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="95" y="40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">maat</text>
<text x="205" y="40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">freq</text>
<text x="95" y="75" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">38</text>
<text x="205" y="75" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">4</text>
<text x="95" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">39</text>
<text x="205" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">2</text>
<text x="95" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">40</text>
<text x="205" y="125" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">2</text>
<text x="95" y="150" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">41</text>
<text x="205" y="150" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">1</text>
<text x="95" y="175" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">42</text>
<text x="205" y="175" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">1</text>
</svg>`,
    checks: [
      {
        q: "In de tabel hierboven: hoeveel leerlingen hebben maat 39 of kleiner?",
        options: ["6", "4", "2", "10"],
        answer: 0,
        wrongHints: [null, "Heb je beide maten meegenomen — of alleen één?", "Niet alleen 39 — er zijn twee maten relevant. Tel ze samen.", "Dat is iedereen totaal. We zoeken alleen de twee specifieke maten."],
        uitlegPad: {
          stappen: [{ titel: "Cumulatief tellen", tekst: "'Maat 39 of kleiner' = alle leerlingen met maat 38 OF 39. Tabel: 38=4, 39=2. Samen: 4+2=6. Vergeet 'of kleiner' niet — beide tellen mee." }],
          woorden: [{ woord: "frequentie", uitleg: "Hoe vaak iets voorkomt." }, { woord: "cumulatief", uitleg: "Bij elkaar opgeteld. 'Of kleiner' = som tot en met die waarde." }],
          theorie: "Bij 'X of kleiner/groter' vragen: tel alle relevante frequenties samen. Niet alleen 1 cel pakken.",
          voorbeelden: [{ type: "vergelijk", tekst: "'Maat 39' = 2. 'Maat 39 of kleiner' = 4+2=6. 'Maat 39 of groter' = 2+2+1+1=6. Verschillende antwoorden!" }],
          basiskennis: [{ onderwerp: "Lees-tip", uitleg: "Examen-val: 'of kleiner' is essentieel. Onderstreep zulke woorden bij examenvragen." }],
          niveaus: { basis: "6 (4+2). A.", simpeler: "Maat 38 (=4) + maat 39 (=2) = 6 leerlingen. = A.", nogSimpeler: "6 = A." },
        },
      },
    ],
  },
  {
    title: "Staafdiagram tekenen",
    explanation: "Een **staafdiagram** maakt een frequentietabel **visueel**. Per waarde een **staaf**, hoogte = frequentie.\n\nUit onze tabel:\n\n```\nmaat 38: ████  (4)\nmaat 39: ██    (2)\nmaat 40: ██    (2)\nmaat 41: █     (1)\nmaat 42: █     (1)\n```\n\nDirect zie je welke maat het meest voorkomt — de **hoogste staaf** = modus.\n\n**Tips voor tekenen**:\n• X-as: de waardes (38, 39, 40, ...)\n• Y-as: de frequentie\n• Alle staven gelijk breed\n• Schalen altijd vanaf 0\n\nStaafdiagrammen zijn handig voor visuele vergelijking — in één oogopslag zie je het patroon.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="160" x2="280" y2="160" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="40" y1="160" x2="40" y2="40" stroke="${COLORS.text}" stroke-width="1"/>
<rect x="55" y="60" width="35" height="100" fill="${COLORS.curve}" opacity="0.85"/>
<text x="72" y="175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">38</text>
<text x="72" y="55" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">4</text>
<rect x="100" y="110" width="35" height="50" fill="${COLORS.curve}" opacity="0.85"/>
<text x="117" y="175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">39</text>
<text x="117" y="105" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">2</text>
<rect x="145" y="110" width="35" height="50" fill="${COLORS.curve}" opacity="0.85"/>
<text x="162" y="175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">40</text>
<text x="162" y="105" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">2</text>
<rect x="190" y="135" width="35" height="25" fill="${COLORS.curve}" opacity="0.85"/>
<text x="207" y="175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">41</text>
<text x="207" y="130" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">1</text>
<rect x="235" y="135" width="35" height="25" fill="${COLORS.curve}" opacity="0.85"/>
<text x="252" y="175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">42</text>
<text x="252" y="130" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">1</text>
<text x="20" y="100" fill="${COLORS.muted}" font-size="10" font-family="Arial">freq</text>
</svg>`,
    checks: [
      {
        q: "Wat hoort op de y-as van een staafdiagram (in het frequentievoorbeeld)?",
        options: ["Frequentie", "De waardes zelf", "De percentages", "Het gemiddelde"],
        answer: 0,
        wrongHints: [null, "Dat staat op de x-as.", "Percentages kunnen, maar in basis-staafdiagram is het frequentie.", "Het gemiddelde is één getal — geen as."],
        uitlegPad: {
          stappen: [{ titel: "Y-as = hoogte = aantal", tekst: "Bij standaard frequentie-staafdiagram: X-as = waardes (38, 39, 40...). Y-as = frequentie (HOE VAAK elke waarde voorkomt). Hoogte balk = frequentie." }],
          woorden: [{ woord: "x-as", uitleg: "Horizontale as (links-rechts). Staan de categorieën/waardes." }, { woord: "y-as", uitleg: "Verticale as (boven-onder). Staan de aantallen/frequenties." }],
          theorie: "Vaste conventie: x=horizontaal, y=verticaal. Onafhankelijke variabele (wat we meten) op x. Afhankelijke variabele (hoe vaak/hoeveel) op y.",
          voorbeelden: [{ type: "uitzondering", tekst: "Soms wordt staafdiagram horizontaal getekend (staven naar rechts). Dan x↔y omgedraaid. Maar standaard: y=frequentie." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Waardes = x-as. Percentages = ander type diagram. Gemiddelde = 1 getal, niet as." }],
          niveaus: { basis: "Frequentie. A.", simpeler: "Y-as staafdiagram = frequentie (hoe vaak iets voorkomt). = A.", nogSimpeler: "Frequentie = A." },
        },
      },
    ],
  },
  {
    title: "Het gemiddelde",
    explanation: "Het **gemiddelde** (ook 'rekenkundig gemiddelde') is misschien de meest gebruikte statistiek.\n\n**Formule**:\n\n**gemiddelde = som van alle waarden ÷ aantal waarden**\n\n**Voorbeeld**: cijfers 6, 7, 8, 5, 9.\n• Som: 6 + 7 + 8 + 5 + 9 = 35\n• Aantal: 5\n• Gemiddelde: 35 ÷ 5 = **7**\n\n**Voorbeeld 2**: schoenmaten 38, 40, 38, 42, 39, 38, 41, 40, 39, 38.\n• Som: 38+40+38+42+39+38+41+40+39+38 = 393\n• Aantal: 10\n• Gemiddelde: 393 ÷ 10 = **39,3**\n\nHet gemiddelde geeft een 'middelste waarde' van alle data. Maar pas op: bij **uitschieters** kan het gemiddelde misleidend zijn (zie volgende stappen).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="47" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">gem = som ÷ aantal</text>
<text x="55" y="85" fill="${COLORS.text}" font-size="13" font-family="Arial">cijfers: 6, 7, 8, 5, 9</text>
<text x="55" y="108" fill="${COLORS.text}" font-size="13" font-family="Arial">som = 35</text>
<text x="55" y="131" fill="${COLORS.text}" font-size="13" font-family="Arial">aantal = 5</text>
<rect x="55" y="143" width="120" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="115" y="166" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">35 ÷ 5 = 7</text>
</svg>`,
    checks: [
      {
        q: "Bereken gemiddelde van: 4, 6, 8, 10.",
        options: ["7", "8", "28", "6"],
        answer: 0,
        wrongHints: [null, "Te hoog — heb je gedeeld door het aantal getallen?", "Dat is alleen de som. Welke stap mis je nog voor het gemiddelde?", "Dat is een ander getalskenmerk. Wat doe je voor het gemiddelde — som verdelen over hoeveel?"],
        uitlegPad: {
          stappen: [
            { titel: "Som", tekst: "4 + 6 + 8 + 10 = 28." },
            { titel: "Delen door aantal", tekst: "Aantal = 4. Gemiddelde = 28 ÷ 4 = 7." },
          ],
          woorden: [{ woord: "gemiddelde", uitleg: "Som ÷ aantal. Standaard centrummaat." }],
          theorie: "Formule: gemiddelde = (a₁ + a₂ + ... + aₙ) ÷ n. Eerst alles optellen, dan delen door aantal. Niet andersom.",
          voorbeelden: [{ type: "check", tekst: "Klopt dat 7 'in midden' van 4-10 ligt? Ja: tussen kleinste (4) en grootste (10), netjes in midden." }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Veel mensen kiezen 28 (de som). Maar dat is geen gemiddelde — moet nog gedeeld worden." }],
          niveaus: { basis: "7 (28÷4). A.", simpeler: "Som 28 ÷ 4 getallen = 7 gemiddeld. = A.", nogSimpeler: "7 = A." },
        },
      },
    ],
  },
  {
    title: "De modus",
    explanation: "De **modus** is de waarde die het **meest voorkomt** in een rij gegevens.\n\n**Voorbeelden**:\n• 3, 5, 7, 5, 9, 5, 2 → modus = **5** (komt 3× voor)\n• 38, 40, 38, 42, 38, 41 → modus = **38** (komt 3× voor)\n\n**Speciale gevallen**:\n• Als twee waardes even vaak voorkomen → twee modi (bijv. 'modus = 5 én 7')\n• Als alle waardes maar 1× voorkomen → **geen modus**\n\n**Wanneer is modus nuttig?**\n• Bij categorieën (favoriete kleur, sport) → het gemiddelde slaat nergens op, modus wel.\n• Bij schoenmaten → de modus zegt wat de winkel het meest moet verkopen.\n\n**Trucje**: in een frequentietabel of staafdiagram is de modus de waarde met de **hoogste staaf** (of grootste frequentie).",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="160" x2="280" y2="160" stroke="${COLORS.text}" stroke-width="1"/>
<rect x="55" y="60" width="35" height="100" fill="${COLORS.point}" opacity="0.85"/>
<rect x="55" y="60" width="35" height="100" fill="none" stroke="${COLORS.point}" stroke-width="3"/>
<text x="72" y="175" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">38</text>
<text x="72" y="55" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">4 ★</text>
<rect x="100" y="110" width="35" height="50" fill="${COLORS.curve}" opacity="0.85"/>
<text x="117" y="175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">39</text>
<rect x="145" y="110" width="35" height="50" fill="${COLORS.curve}" opacity="0.85"/>
<text x="162" y="175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">40</text>
<rect x="190" y="135" width="35" height="25" fill="${COLORS.curve}" opacity="0.85"/>
<text x="207" y="175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">41</text>
<text x="150" y="30" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">modus = 38 (hoogste staaf)</text>
</svg>`,
    checks: [
      {
        q: "Wat is de modus van: 7, 4, 7, 9, 4, 7, 2?",
        options: ["7", "4", "5,7", "9"],
        answer: 0,
        wrongHints: [null, "4 komt 2× voor, maar 7 komt 3× voor.", "5,7 zou het gemiddelde zijn, niet de modus.", "9 komt maar 1× voor."],
        uitlegPad: {
          stappen: [
            { titel: "Tellen per waarde", tekst: "7: komt 3× voor. 4: 2×. 9: 1×. 2: 1×. Meest frequente = 7." },
            { titel: "Modus = meest voorkomend", tekst: "Modus = waarde met hoogste frequentie. Hier 7." },
          ],
          woorden: [{ woord: "modus", uitleg: "Meest voorkomende waarde in reeks." }],
          theorie: "Speciale gevallen: 2 waardes even vaak top = 2 modi. Alle waardes 1× = geen modus. Bij frequentietabel = hoogste staaf.",
          voorbeelden: [{ type: "andere", tekst: "Modus van 1,2,3,4,5 = geen (allen 1×). Modus van 1,2,2,3,3 = 2 en 3 (twee modi)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "4 niet (komt minder vaak). 5,7 = gemiddelde, andere maat. 9 = maar 1× voor." }],
          niveaus: { basis: "7. A.", simpeler: "7 komt 3× voor (vaakst) = modus. = A.", nogSimpeler: "7 = A." },
        },
      },
    ],
  },
  {
    title: "De mediaan",
    explanation: "De **mediaan** is de **middelste** waarde als je alle getallen op volgorde zet.\n\n**Stappenplan**:\n1. Zet alle getallen op volgorde van klein naar groot.\n2. Pak het middelste getal.\n\n**Voorbeeld**: 3, 7, 5, 1, 9.\n• Sorteer: 1, 3, 5, 7, 9\n• Middelste: **5** (er zijn 5 getallen, de derde is het midden).\n\n**Bij een even aantal**: gemiddelde van de twee middelste.\n• 1, 3, 5, 7 → middelste twee zijn 3 en 5 → mediaan = (3+5)/2 = **4**.\n\n**Wanneer is mediaan nuttig?**\nVooral bij **uitschieters**. Stel je inkomens: 20, 25, 22, 23, 1000.\n• Gemiddelde: (20+25+22+23+1000)/5 = 218 (misleidend door uitschieter!)\n• Mediaan: gesorteerd 20, 22, 23, 25, 1000 → middelste is **23** (veel realistischer)",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="35" fill="${COLORS.text}" font-size="13" font-family="Arial">data: 3, 7, 5, 1, 9</text>
<text x="55" y="60" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">sorteren:</text>
<text x="60" y="90" fill="${COLORS.text}" font-size="14" font-family="Arial">1</text>
<text x="100" y="90" fill="${COLORS.text}" font-size="14" font-family="Arial">3</text>
<text x="140" y="90" fill="${COLORS.point}" font-size="20" font-family="Arial" font-weight="bold">5</text>
<text x="180" y="90" fill="${COLORS.text}" font-size="14" font-family="Arial">7</text>
<text x="220" y="90" fill="${COLORS.text}" font-size="14" font-family="Arial">9</text>
<line x1="140" y1="100" x2="148" y2="115" stroke="${COLORS.point}" stroke-width="2"/>
<text x="150" y="130" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">middelste</text>
<rect x="100" y="150" width="100" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">mediaan = 5</text>
</svg>`,
    checks: [
      {
        q: "Mediaan van 8, 3, 6, 1, 9, 2, 7?",
        options: ["6", "5", "8", "3"],
        answer: 0,
        wrongHints: [null, "Heb je gesorteerd voor je het middelste pakt?", "Te hoog — bij 7 getallen is welke positie de mediaan?", "Te laag — sorteer eerst van klein naar groot, daarna pak je het middelste."],
        uitlegPad: {
          stappen: [
            { titel: "Sorteren", tekst: "1, 2, 3, 6, 7, 8, 9." },
            { titel: "Middelste pakken", tekst: "7 getallen → middelste = 4e positie. Dat is 6." },
          ],
          woorden: [{ woord: "mediaan", uitleg: "Middelste waarde na sorteren. Ongevoelig voor uitschieters." }],
          theorie: "Stappen: (1) sorteer klein→groot. (2) Bij oneven aantal: middelste. Bij even aantal: gemiddelde 2 middelste. Niet vergeten te sorteren!",
          voorbeelden: [{ type: "check", tekst: "Bij 7 getallen positie 4 = midden (3 erboven, 3 eronder). Hier positie 4 = 6." }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Veel mensen pakken middelste van OORSPRONKELIJKE reeks (zonder sorteren). Sorteren is essentieel." }],
          niveaus: { basis: "6 (na sorteren). A.", simpeler: "Sorteer 1,2,3,6,7,8,9. Middelste (4e) = 6. = A.", nogSimpeler: "6 = A." },
        },
      },
    ],
  },
  {
    title: "Gemiddelde, modus, mediaan vergelijken",
    explanation: "Drie centrum-maten — wanneer gebruik je welke?\n\n**Gemiddelde**: standaard, snel, gevoelig voor uitschieters.\n• Gebruik bij 'normale' data zonder extreme waardes.\n• Voorbeeld: gemiddeld cijfer in een toets.\n\n**Modus**: meest voorkomende waarde.\n• Gebruik bij categorieën (kleuren, sporten) of als je 'meest populair' wil weten.\n• Voorbeeld: meest verkochte schoenmaat.\n\n**Mediaan**: middelste, ongevoelig voor uitschieters.\n• Gebruik bij scheve verdelingen of uitschieters (inkomens, huizenprijzen).\n• Voorbeeld: gemiddeld inkomen in NL ≠ mediaan inkomen.\n\n**Voorbeeld**: data 4, 5, 6, 6, 100.\n• Gemiddelde: 24,2 (door uitschieter 100)\n• Modus: 6\n• Mediaan: 6\n\nIn dit geval geven modus en mediaan een **realistischer beeld**.",
    svg: `<svg viewBox="0 0 300 200">
<text x="80" y="35" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">data: 4, 5, 6, 6, 100</text>
<line x1="40" y1="48" x2="260" y2="48" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="75" fill="${COLORS.text}" font-size="12" font-family="Arial">gemiddelde:</text>
<text x="180" y="75" fill="${COLORS.curveAlt}" font-size="13" font-family="Arial" font-weight="bold">24,2 (vertekend)</text>
<text x="55" y="100" fill="${COLORS.text}" font-size="12" font-family="Arial">modus:</text>
<text x="180" y="100" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">6</text>
<text x="55" y="125" fill="${COLORS.text}" font-size="12" font-family="Arial">mediaan:</text>
<text x="180" y="125" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">6</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">bij uitschieters: gebruik mediaan</text>
</svg>`,
    checks: [
      {
        q: "Wanneer is mediaan beter dan gemiddelde?",
        options: ["Bij uitschieters", "Bij even aantallen", "Nooit", "Altijd"],
        answer: 0,
        wrongHints: [null, "Het hangt af van de data, niet van het aantal.", "Bij scheve verdelingen is mediaan zinvol.", "Beide zijn nuttig in verschillende situaties."],
        uitlegPad: {
          stappen: [{ titel: "Uitschieters vertekenen gemiddelde", tekst: "Gemiddelde is GEVOELIG voor uitschieters (extreem hoog/laag). Mediaan is ONGEVOELIG. Voorbeeld inkomens 20k, 25k, 22k, 23k, 1000k. Gemiddelde 218k (vertekend door miljonair!). Mediaan 23k (realistisch). Bij scheve data: kies mediaan." }],
          woorden: [{ woord: "uitschieter", uitleg: "Extreem hoog/laag getal dat ver van rest ligt. Engels: outlier." }, { woord: "scheve verdeling", uitleg: "Data niet symmetrisch verdeeld. Bv. inkomens (paar zeer hoog, rest gemiddeld)." }],
          theorie: "Vuistregel: data symmetrisch + zonder uitschieters → gemiddelde. Met uitschieters of scheef → mediaan. Beide kunnen samen gerapporteerd worden.",
          voorbeelden: [{ type: "klassiek", tekst: "Huizenprijzen NL: mediaan ~400k. Gemiddelde ~500k (vertekend door villa's miljoenen). Mediaan eerlijker beeld 'normale woning'." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Niet over aantal even/oneven. Niet 'nooit' (vaak juist beter). Niet 'altijd' (soms gemiddelde prima)." }],
          niveaus: { basis: "Bij uitschieters. A.", simpeler: "Mediaan beter bij uitschieters (extreem hoge/lage getallen). Anders gemiddelde. = A.", nogSimpeler: "Uitschieters = A." },
        },
      },
    ],
  },
  {
    title: "Het bereik",
    explanation: "Het **bereik** zegt hoe **uitgespreid** de data is.\n\n**Formule**: bereik = grootste − kleinste\n\n**Voorbeelden**:\n• 5, 7, 10, 4, 12 → bereik = 12 − 4 = **8**\n• 100, 102, 105, 110 → bereik = 110 − 100 = **10**\n• 1, 100 → bereik = **99** (grote spreiding!)\n• 50, 50, 50 → bereik = **0** (geen spreiding)\n\nEen **klein bereik** betekent: de getallen liggen dicht bij elkaar.\nEen **groot bereik** betekent: ze liggen ver uiteen.\n\n**Toepassing**: bij twee toetsen met **gelijk gemiddelde** kan het bereik enorm verschillen — sommige klassen zijn 'eerlijker' (klein bereik), andere zijn meer ongelijk (groot bereik).",
    svg: `<svg viewBox="0 0 300 200">
<line x1="20" y1="100" x2="280" y2="100" stroke="${COLORS.text}" stroke-width="2"/>
<circle cx="60" cy="100" r="6" fill="${COLORS.point}"/>
<text x="60" y="85" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">4</text>
<text x="60" y="125" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">kleinste</text>
<circle cx="100" cy="100" r="4" fill="${COLORS.curve}"/>
<circle cx="140" cy="100" r="4" fill="${COLORS.curve}"/>
<circle cx="200" cy="100" r="4" fill="${COLORS.curve}"/>
<circle cx="240" cy="100" r="6" fill="${COLORS.point}"/>
<text x="240" y="85" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">12</text>
<text x="240" y="125" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">grootste</text>
<line x1="60" y1="155" x2="240" y2="155" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="60,150 50,155 60,160" fill="${COLORS.point}"/>
<polygon points="240,150 250,155 240,160" fill="${COLORS.point}"/>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">bereik = 12 − 4 = 8</text>
</svg>`,
    checks: [
      {
        q: "Bereken het bereik van 15, 22, 8, 30, 18.",
        options: ["22", "8", "30", "12"],
        answer: 0,
        wrongHints: [null, "Te klein. Bereik = grootste − kleinste = 30 − 8 = 22.", "8 is de kleinste, niet het bereik.", "30 is de grootste, niet het bereik. Reken: 30 − 8 = 22."],
        uitlegPad: {
          stappen: [
            { titel: "Min + max vinden", tekst: "Grootste = 30. Kleinste = 8." },
            { titel: "Bereik = aftrekken", tekst: "Bereik = 30 - 8 = 22." },
          ],
          woorden: [{ woord: "bereik", uitleg: "Spreidingsmaat. Verschil tussen max en min. Engels: range." }],
          theorie: "Formule: bereik = max - min. Klein bereik = data dicht bij elkaar. Groot bereik = wijd verspreid. Voorbeeld: 50,50,50 = bereik 0 (geen spreiding).",
          voorbeelden: [{ type: "interpretatie", tekst: "Bereik 22 op data 8-30 is fors (gebied 22 wijd in plek 22 breed). Veel variatie tussen min en max." }],
          basiskennis: [{ onderwerp: "Niet enkel waarden", uitleg: "8 en 30 zijn min/max, NIET het bereik zelf. Bereik = verschil tussen die twee." }],
          niveaus: { basis: "22 (30-8). A.", simpeler: "Bereik = 30 - 8 = 22. = A.", nogSimpeler: "22 = A." },
        },
      },
    ],
  },
  {
    title: "Welke variantie tussen klassen?",
    explanation: "Een vergelijking met **bereik en gemiddelde** samen:\n\nKlas A scoort op een toets: 6, 6, 7, 7, 8\nKlas B scoort: 3, 5, 7, 9, 10\n\n**Allebei**:\n• Gemiddelde: (6+6+7+7+8)/5 = 6,8 vs (3+5+7+9+10)/5 = 6,8 → **gelijk**!\n• Mediaan: 7 vs 7 → **gelijk**\n\n**Maar bereik**:\n• Klas A: 8 − 6 = **2** (compact, leerlingen presteren ongeveer gelijk)\n• Klas B: 10 − 3 = **7** (groot verschil tussen leerlingen)\n\nHetzelfde gemiddelde, hele andere verdeling. Daarom is bereik (en andere spreidingsmaten) belangrijk om naast het gemiddelde te zetten.\n\n**Tip in een opgave**: noem altijd minstens **één centrummaat** (gem./med./mod.) én **één spreidingsmaat** (bereik) om de data goed te beschrijven.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="100" x2="280" y2="100" stroke="${COLORS.text}" stroke-width="1"/>
<text x="155" y="30" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">zelfde gemiddelde, ander bereik</text>
<circle cx="120" cy="60" r="4" fill="${COLORS.curve}"/>
<circle cx="120" cy="60" r="4" fill="${COLORS.curve}"/>
<circle cx="140" cy="60" r="4" fill="${COLORS.curve}"/>
<circle cx="140" cy="60" r="4" fill="${COLORS.curve}"/>
<circle cx="160" cy="60" r="4" fill="${COLORS.curve}"/>
<text x="55" y="65" fill="${COLORS.curve}" font-size="11" font-family="Arial" font-weight="bold">klas A:</text>
<text x="220" y="65" fill="${COLORS.muted}" font-size="10" font-family="Arial">bereik 2</text>
<circle cx="60" cy="140" r="4" fill="${COLORS.curveAlt}"/>
<circle cx="100" cy="140" r="4" fill="${COLORS.curveAlt}"/>
<circle cx="140" cy="140" r="4" fill="${COLORS.curveAlt}"/>
<circle cx="180" cy="140" r="4" fill="${COLORS.curveAlt}"/>
<circle cx="220" cy="140" r="4" fill="${COLORS.curveAlt}"/>
<text x="40" y="160" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">klas B:</text>
<text x="225" y="160" fill="${COLORS.muted}" font-size="10" font-family="Arial">bereik 7</text>
<text x="150" y="192" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">verspreiding zegt veel</text>
</svg>`,
    checks: [
      {
        q: "Twee klassen met zelfde gemiddelde maar verschillend bereik. Wat zegt dat?",
        options: ["De klassen presteren even goed, maar prestaties zijn verschillend verdeeld","Een klas presteert beter","De klassen zijn gelijk","Geen verschil"],
        answer: 0,
        wrongHints: [null, "Niet noodzakelijk. Gem. is gelijk — geen klas is 'beter'. Spreiding verschilt.", "Niet identiek — de spreiding (bereik) verschilt.", "Bereik geeft wel verschil weer."],
        uitlegPad: {
          stappen: [{ titel: "Gemiddelde + spreiding samen", tekst: "Gemiddelde gelijk = gemiddelde prestatie zelfde. Maar bereik verschilt = SPREIDING verschilt. Klein bereik: leerlingen presteren ongeveer gelijk. Groot bereik: grote verschillen tussen leerlingen. Beide kunnen 'beter' zijn afhankelijk van wat je wilt." }],
          woorden: [{ woord: "spreiding", uitleg: "Hoe verspreid de data is. Bereik is simpelste spreidingsmaat." }],
          theorie: "Daarom rapporteer je vaak BEIDE: centrummaat (gem./med./mod.) + spreidingsmaat (bereik). Samen geven ze beter beeld dan elk apart.",
          voorbeelden: [{ type: "concreet", tekst: "Klas A: 6,6,7,7,8 (gem 6,8, bereik 2). Klas B: 3,5,7,9,10 (gem 6,8, bereik 7). Zelfde gem, hele andere klas." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Geen klas 'beter' (gemiddelde gelijk). Klassen NIET identiek (bereik verschilt)." }],
          niveaus: { basis: "Verschillende verdeling. A.", simpeler: "Zelfde gem + ander bereik = even goed, anders gespreid. = A.", nogSimpeler: "Anders verdeeld = A." },
        },
      },
    ],
  },
  {
    title: "Toepassing: cijferreeks",
    explanation: "Een typische opgave: jouw 5 toetsen waren 6, 7, 5, 8, 9.\n\n**A** — Gemiddelde:\n(6+7+5+8+9)/5 = 35/5 = **7**\n\n**B** — Modus: alle getallen verschillend → **geen modus**.\n\n**C** — Mediaan: sorteer 5, 6, 7, 8, 9 → middelste = **7**.\n\n**D** — Bereik: 9 − 5 = **4**.\n\n**E** — Wat moet je halen op de **6e toets** om het gemiddelde naar **7,5** te krijgen?\n• Som tot nu: 35.\n• Gewenst: 6 toetsen × 7,5 = 45.\n• Nodig: 45 − 35 = **10** (perfect).\n\nDit type 'wat moet ik nog halen?'-vraagstuk komt vaak voor in de praktijk.",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="32" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">cijfers: 6, 7, 5, 8, 9</text>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="62" fill="${COLORS.text}" font-size="12" font-family="Arial">gemiddelde: </text>
<text x="180" y="62" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">7</text>
<text x="55" y="82" fill="${COLORS.text}" font-size="12" font-family="Arial">modus: </text>
<text x="180" y="82" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">geen</text>
<text x="55" y="102" fill="${COLORS.text}" font-size="12" font-family="Arial">mediaan: </text>
<text x="180" y="102" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">7</text>
<text x="55" y="122" fill="${COLORS.text}" font-size="12" font-family="Arial">bereik: </text>
<text x="180" y="122" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">4</text>
<text x="55" y="150" fill="${COLORS.text}" font-size="12" font-family="Arial">6e toets voor gem 7,5: </text>
<text x="195" y="150" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">10</text>
<text x="150" y="185" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">som = aantal × gemiddelde</text>
</svg>`,
    checks: [
      {
        q: "5 cijfers met gem 6. Som = ?",
        options: ["30", "11", "1,2", "5"],
        answer: 0,
        wrongHints: [null, "Te klein. Som = aantal × gemiddelde = 5 × 6 = 30.", "Te klein. Reken: 5 × 6 = 30.", "Dat is geen 'som'. Reken: 5 × 6 = 30."],
        uitlegPad: {
          stappen: [{ titel: "Formule omdraaien", tekst: "Gemiddelde = som ÷ aantal. Dus: SOM = aantal × gemiddelde. 5 × 6 = 30. Klassiek voor 'wat moet ik nog halen?'-vragen op examen." }],
          woorden: [{ woord: "som", uitleg: "Totaal van alle waarden bij elkaar opgeteld." }],
          theorie: "Stel je hebt 5 cijfers met gemiddelde 6. Som onbekend? Som = 5 × 6 = 30. Stel je wilt gemiddelde 7 over 6 cijfers, je had som 30. 6e cijfer nodig = (6×7) - 30 = 42 - 30 = 12. Onmogelijk → niet haalbaar.",
          voorbeelden: [{ type: "examen-type", tekst: "Veel CSE-vragen: 'wat moet je halen op de 6e toets om gem 7,5 te krijgen?' Werk je dit uit met som-formule." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "11 = som + aantal (geen formule). 1,2 = som/30 ofzo (geen statistiek). 5 = aantal." }],
          niveaus: { basis: "30 (5×6). A.", simpeler: "Som = aantal × gemiddelde = 5 × 6 = 30. = A.", nogSimpeler: "30 = A." },
        },
      },
    ],
  },
  {
    title: "Eindopdracht",
    explanation: "**Vragen** over deze data: 4, 8, 6, 7, 4, 9, 5, 6, 4.\n\n**A — Bereken alle 4 maten**:\n• Sorteren: 4, 4, 4, 5, 6, 6, 7, 8, 9 (9 getallen)\n• **Gemiddelde**: 53 / 9 ≈ **5,9**\n• **Modus**: 4 (komt 3× voor)\n• **Mediaan**: middelste van 9 = 5e = **6**\n• **Bereik**: 9 − 4 = **5**\n\n**B — Frequentietabel maken**:\n\n| waarde | freq |\n|--------|------|\n| 4 | 3 |\n| 5 | 1 |\n| 6 | 2 |\n| 7 | 1 |\n| 8 | 1 |\n| 9 | 1 |\n\nGoed gedaan — je hebt het statistiek-leerpad doorlopen!\n\n**Recap**:\n- Frequentietabel + staafdiagram = data ordenen\n- Gemiddelde / modus / mediaan = drie centrummaten\n- Bereik = spreiding\n- Bij uitschieters: kies mediaan boven gemiddelde",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="32" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">data: 4,8,6,7,4,9,5,6,4</text>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="65" fill="${COLORS.text}" font-size="12" font-family="Arial">gemiddelde:</text>
<text x="180" y="65" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">5,9</text>
<text x="55" y="88" fill="${COLORS.text}" font-size="12" font-family="Arial">modus:</text>
<text x="180" y="88" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">4</text>
<text x="55" y="111" fill="${COLORS.text}" font-size="12" font-family="Arial">mediaan:</text>
<text x="180" y="111" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">6</text>
<text x="55" y="134" fill="${COLORS.text}" font-size="12" font-family="Arial">bereik:</text>
<text x="180" y="134" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">5</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">statistiek onder de knie 🏆</text>
</svg>`,
    checks: [
      {
        q: "Cijfers 5, 7, 7, 8, 9. Wat is het gemiddelde?",
        options: ["7,2", "7", "36", "5"],
        answer: 0,
        wrongHints: [null, "Te laag. Som = 36, ÷ 5 = 7,2.", "36 is de som. Deel nog door 5.", "5 is de kleinste, niet gemiddelde."],
        uitlegPad: {
          stappen: [
            { titel: "Som", tekst: "5 + 7 + 7 + 8 + 9 = 36." },
            { titel: "Delen", tekst: "Aantal = 5. Gemiddelde = 36 ÷ 5 = 7,2." },
          ],
          woorden: [{ woord: "gemiddelde berekenen", uitleg: "Standaard 2-stappen: som dan delen." }],
          theorie: "Tips: groepeer slim. 5+7+8 = 20. 7+9 = 16. 20+16 = 36. Of: 7×5=35 + (afwijkingen: -2, 0, 0, +1, +2) = +1 = 36. Klopt.",
          voorbeelden: [{ type: "check", tekst: "7,2 ligt tussen 5 en 9. Past in midden. Klopt." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "7 = gemiddeld als alle 7'en (klopt niet). 36 = som, niet gemiddelde. 5 = kleinste." }],
          niveaus: { basis: "7,2 (36÷5). A.", simpeler: "Som 36 ÷ 5 = 7,2. = A.", nogSimpeler: "7,2 = A." },
        },
      },
      { q: "Modus van 3, 5, 5, 7, 9, 5, 2?", options: ["5","3","9","7"], answer: 0, wrongHints: [null,"3 komt 1× voor. Welke komt vaakst?","9 komt 1× voor.","7 komt 1× voor. Welke 3× voor?"] },
      { q: "Mediaan van 2, 4, 6, 8?", options: ["5","4","6","20"], answer: 0, wrongHints: [null,"Even aantal — neem GEMIDDELDE van 2 middelste (4 en 6).","Niet — neem gemiddelde van 2 middelste.","Dat is som."] },
      { q: "Bereik van 12, 5, 18, 9, 3?", options: ["15","18","12","3"], answer: 0, wrongHints: [null, "Max alleen.", "Niet.", "Min alleen."] },
      { q: "Gemiddelde van 10, 20, 30?", options: ["20","60","10","30"], answer: 0, wrongHints: [null, "Dat is som.", "Min.", "Max."] },
      { q: "Wanneer is mediaan zinvoller dan gemiddelde?", options: ["Bij grote uitschieters","Bij weinig getallen","Bij even aantal","Bij oneven aantal"], answer: 0, wrongHints: [null, "Niet — beide werken bij elk aantal.", "Niet — speelt geen rol.", "Niet — speelt geen rol."] },
      { q: "5 toetsen gemiddeld 7. Som = ?", options: ["35","12","7","75"], answer: 0, wrongHints: [null, "Niet — optellen ipv vermenigvuldigen.", "Gem zelf.", "Verkeerde berekening."] },
      { q: "Frequentie van 4 in [4,5,4,6,4,7,5]?", options: ["3","2","1","4"], answer: 0, wrongHints: [null, "Niet — tel zorgvuldig.", "Niet — tel nog eens.", "Niet."] },
      { q: "Staafdiagram-hoogte staat voor?", options: ["Frequentie","Waarde","Som","Modus"], answer: 0, wrongHints: [null, "Niet — waarde op x-as.", "Niet.", "Modus = HOOGSTE staaf, niet hoogte zelf."] },
      { q: "5, 5, 5, 5, 5 — bereik?", options: ["0","5","25","1"], answer: 0, wrongHints: [null, "Dat is de waarde, niet bereik.", "Dat is de som.", "Niet."] },
      { q: "Modus van 3, 4, 5, 7, 8 (allen verschillend)?", options: ["Geen modus","3","8","5"], answer: 0, wrongHints: [null, "Niet — 3 komt 1× voor (zoals alle).", "Niet — zelfde frequentie.", "Niet."] },
      { q: "6 cijfers gem 7. Eén cijfer is 4. Som overige 5?", options: ["38","42","32","7"], answer: 0, wrongHints: [null, "Dat is totaal-som, niet 'overige 5'.", "Te laag.", "Niet."] },
    ],
  },
  // ─── F. Examenstijl — VMBO-GT CSE ─────────────────────────
  {
    title: "CSE-vraag — toetscijfers van een klas",
    explanation: "Klassieke CSE-context: een **frequentietabel** met cijfers van een klas en je moet centrummaten berekenen.\n\n> **Klas 4A heeft 20 leerlingen.** Cijfers wiskundetoets:\n>\n> | Cijfer | 4 | 5 | 6 | 7 | 8 | 9 |\n> | Aantal | 1 | 3 | 5 | 6 | 4 | 1 |\n\n**Aanpak in 3 stappen:**\n1. **Gemiddelde** = (som van alle cijfers) / (totaal aantal leerlingen).\n   Som = 4·1 + 5·3 + 6·5 + 7·6 + 8·4 + 9·1 = 4 + 15 + 30 + 42 + 32 + 9 = **132**.\n   Gemiddelde = 132 / 20 = **6,6**.\n2. **Modus** = cijfer dat **het vaakst** voorkomt. Hier 7 (6 leerlingen). Dus modus = **7**.\n3. **Mediaan** (middelste cijfer): 20 leerlingen → mediaan = gemiddelde van 10e en 11e cijfer in volgorde. Cumulatief: 1, 4, 9, 15, 19, 20. De 10e en 11e zitten beide bij cijfer 7. Mediaan = **7**.\n\n**Examen-tips**:\n• Bij `n × cijfer` werken voor de som — niet alle cijfers los optellen.\n• Mediaan bij even aantal: gemiddelde van middelste twee.\n• Modus = MEEST voorkomende, niet gemiddelde.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="170" x2="280" y2="170" stroke="#8899aa" stroke-width="1.2"/>
<line x1="40" y1="20" x2="40" y2="170" stroke="#8899aa" stroke-width="1.2"/>
<rect x="60" y="160" width="22" height="10" fill="#42a5f5"/>
<text x="71" y="185" text-anchor="middle" fill="#e0e6f0" font-size="10" font-family="Arial">4</text>
<rect x="92" y="140" width="22" height="30" fill="#42a5f5"/>
<text x="103" y="185" text-anchor="middle" fill="#e0e6f0" font-size="10" font-family="Arial">5</text>
<rect x="124" y="120" width="22" height="50" fill="#42a5f5"/>
<text x="135" y="185" text-anchor="middle" fill="#e0e6f0" font-size="10" font-family="Arial">6</text>
<rect x="156" y="110" width="22" height="60" fill="#ff5252"/>
<text x="167" y="185" text-anchor="middle" fill="#ff5252" font-size="10" font-family="Arial" font-weight="bold">7★</text>
<rect x="188" y="130" width="22" height="40" fill="#42a5f5"/>
<text x="199" y="185" text-anchor="middle" fill="#e0e6f0" font-size="10" font-family="Arial">8</text>
<rect x="220" y="160" width="22" height="10" fill="#42a5f5"/>
<text x="231" y="185" text-anchor="middle" fill="#e0e6f0" font-size="10" font-family="Arial">9</text>
<text x="160" y="34" text-anchor="middle" fill="#e0e6f0" font-size="11" font-family="Arial" font-weight="bold">Cijferverdeling klas 4A (n=20)</text>
</svg>`,
    checks: [
      {
        q: "Wat is het **gemiddelde cijfer**?",
        options: ["6,6", "6,5", "7,0", "5,5"],
        answer: 0,
        wrongHints: [null, "Bijna. Reken zorgvuldig: som = 132, ÷ 20 = 6,6.", "Dat is de modus, niet het gemiddelde.", "Te laag. Reken: 132 / 20 = 6,6."],
        uitlegPad: {
          stappen: [
            { titel: "Som via frequenties", tekst: "Niet alle 20 cijfers los optellen. Gebruik formule: som = Σ(cijfer × aantal). Tabel: 4·1 + 5·3 + 6·5 + 7·6 + 8·4 + 9·1 = 4 + 15 + 30 + 42 + 32 + 9 = 132." },
            { titel: "Delen door totaal", tekst: "Gemiddelde = som ÷ aantal = 132 ÷ 20 = 6,6." },
          ],
          woorden: [{ woord: "frequentietabel", uitleg: "Tabel met waarde + hoe vaak. Snelle manier som berekenen." }],
          theorie: "Bij frequentietabellen: NIET losse cijfers schrijven. Gebruik cijfer × frequentie. Bespaart tijd + minder fouten. Standaard-CSE-techniek.",
          voorbeelden: [{ type: "alternatief", tekst: "Of: 4+4+5+5+5+6+6+6+6+6+7+7+7+7+7+7+8+8+8+8+9 = 132. Maar veel kans op telfouten. Formule-aanpak is sneller." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "6,5 = bijna goed, reken zorgvuldig. 7 = modus. 5,5 = te laag." }],
          niveaus: { basis: "6,6 (132÷20). A.", simpeler: "Som=132, ÷20 leerlingen = 6,6 gemiddeld. = A.", nogSimpeler: "6,6 = A." },
        },
      },
      {
        q: "Wat is de **modus**?",
        options: ["7", "6", "8", "5"],
        answer: 0,
        wrongHints: [null, "Modus is de cijfer met de hoogste frequentie. 6 heeft 5 leerlingen, 7 heeft 6 leerlingen → 7 is hoger.", "Slechts 4 leerlingen hadden een 8.", "Slechts 3 leerlingen hadden een 5."],
        uitlegPad: {
          stappen: [{ titel: "Hoogste frequentie zoeken", tekst: "Tabel: 4(1) 5(3) 6(5) 7(6) 8(4) 9(1). Hoogste frequentie = 6 leerlingen bij cijfer 7. Dus modus = 7." }],
          woorden: [{ woord: "frequentie", uitleg: "Aantal keer dat waarde voorkomt." }],
          theorie: "Bij staafdiagram = HOOGSTE staaf. Bij tabel = grootste frequentie. Modus zelf is de WAARDE, niet de frequentie.",
          voorbeelden: [{ type: "check", tekst: "6 had 5 leerlingen. 7 had 6 leerlingen. 7 wint. Modus = waarde 7, niet frequentie 6." }],
          basiskennis: [{ onderwerp: "Waarde, niet aantal", uitleg: "Examen-val: modus is de WAARDE (cijfer 7), niet de frequentie (6 leerlingen)." }],
          niveaus: { basis: "7 (6 leerlingen). A.", simpeler: "7 had 6 leerlingen = meest = modus 7. = A.", nogSimpeler: "7 = A." },
        },
      },
      {
        q: "Wat is de **mediaan**?",
        options: ["7", "6,6", "6", "8"],
        answer: 0,
        wrongHints: [null, "Dat is het gemiddelde, niet de mediaan. Mediaan = middelste waarde.", "Te laag. Cumulatief is de 10e en 11e leerling beide bij cijfer 7.", "Te hoog. De middelste leerlingen zaten op een 7."],
        uitlegPad: {
          stappen: [
            { titel: "Middelste positie", tekst: "20 leerlingen (even) → mediaan = gemiddelde van 10e + 11e cijfer in sortering." },
            { titel: "Cumulatief", tekst: "Cumulatief: t/m 4=1, t/m 5=4, t/m 6=9, t/m 7=15, t/m 8=19, t/m 9=20. Positie 10 valt in 7 (want bij 9 zaten 9 leerlingen, vanaf 10 zit je in cijfer 7). Positie 11 ook nog 7." },
            { titel: "Antwoord", tekst: "Gemiddelde 10e + 11e = (7+7)/2 = 7. Mediaan = 7." },
          ],
          woorden: [{ woord: "cumulatieve frequentie", uitleg: "Som van frequenties tot en met een waarde." }],
          theorie: "Truc bij frequentietabel: bouw cumulatieve telling op. Zoek welke waarde de middelste positie bevat. Voor even aantal: 2 middelste — soms zelfde waarde, soms verschillend (dan gemiddelde).",
          voorbeelden: [{ type: "vergelijk", tekst: "Gemiddelde 6,6. Modus 7. Mediaan 7. Drie maten, drie antwoorden. Mediaan + modus zelfde hier (beide 7) — toeval bij deze data." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "6,6 = gemiddelde. 6 = té laag (positie 10+ niet meer in 6). 8 = te hoog (positie 10+ nog in 7)." }],
          niveaus: { basis: "7 (10e+11e in 7). A.", simpeler: "Mediaan 20 lln = 10e+11e cijfer. Beide in 7. Mediaan=7. = A.", nogSimpeler: "7 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const statistiek = {
  id: "statistiek",
  title: "Statistiek (basis)",
  emoji: "📊",
  level: "klas1-vwo",
  subject: "wiskunde",
  referentieNiveau: "2F",
  sloThema: "Statistiek — beschrijvende statistiek",
  topics: ["WI.statistiek.beschrijven"],
  prerequisites: [
    { id: "gemiddelden-statistiek-po", title: "Gemiddelden + statistiek (basis)", niveau: "po-1F" },
    { id: "tabellen-grafieken", title: "Tabellen + grafieken", niveau: "vmbo-2F" },
  ],
  intro: "Statistiek bestudeert gegevens (data). Hier leer je: frequentietabellen, staafdiagrammen, drie centrummaten (gemiddelde, modus, mediaan), bereik als spreidingsmaat, en wanneer je welke gebruikt.",
  triggerKeywords: ["statistiek", "gemiddelde", "modus", "mediaan", "frequentie", "staafdiagram", "bereik"],
  chapters,
  steps,
};

export default statistiek;
