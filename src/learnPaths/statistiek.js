// Leerpad: Statistiek basis (klas 1-2)
// 12 stappen, 5 hoofdstukken.

const COLORS = {
  curve: "#00c853",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const stepEmojis = ["📊", "📋", "📈", "🧮", "🔁", "📍", "⚖️", "📏", "📐", "🎯", "📦", "🏆"];

const chapters = [
  { letter: "A", title: "Verzamelen en weergeven", emoji: "📊", from: 0, to: 2 },
  { letter: "B", title: "Gemiddelde, modus, mediaan", emoji: "🧮", from: 3, to: 6 },
  { letter: "C", title: "Spreiding en bereik", emoji: "📏", from: 7, to: 8 },
  { letter: "D", title: "Grafieken interpreteren", emoji: "📐", from: 9, to: 9 },
  { letter: "E", title: "Toepassingen + eindopdracht", emoji: "🏆", from: 10, to: 11 },
];

const steps = [
  {
    title: "Wat is statistiek?",
    explanation: "**Statistiek** is het bestuderen van **gegevens** (data). Je verzamelt cijfers, ordent ze, en trekt conclusies.\n\n**Voorbeelden waar je statistiek tegenkomt**:\n• Gemiddelde cijfer in een toets\n• Aantal regenbuien per maand\n• Hoogste, laagste en gemiddelde temperatuur\n• Populairste sport in een klas\n• Aantal stemmen op een kandidaat\n\n**Twee fasen**:\n1. **Verzamelen + ordenen** (frequentietabel, staafdiagram)\n2. **Beschrijven** (gemiddelde, modus, mediaan)\n\n**Voorbeeld**: in een klas vragen we de schoenmaten:\n38, 40, 38, 42, 39, 38, 41, 40, 39, 38\n\nVan deze 10 getallen kunnen we van alles uitrekenen — daar gaan de volgende stappen over.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="40" width="220" height="120" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<text x="150" y "62" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">schoenmaten klas</text>
<text x="150" y "85" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">38, 40, 38, 42, 39, 38</text>
<text x="150" y "105" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">41, 40, 39, 38</text>
<text x="150" y "135" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">10 getallen</text>
<text x="150" y "150" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">uit chaos: orde + conclusies</text>
</svg>`,
    checks: [
      {
        q: "Wat is statistiek?",
        options: [
          "Verzamelen en bestuderen van gegevens",
          "Iets uit de oudheid",
          "Een soort breuk",
          "Een soort hoek",
        ],
        answer: 0,
        wrongHints: [null, "Niet historisch — statistiek is wiskunde van data.", "Niets met breuken te maken.", "Een hoek is meetkunde."],
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
<text x="95" y "40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">maat</text>
<text x="205" y "40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">freq</text>
<text x="95" y "75" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">38</text>
<text x="205" y "75" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">4</text>
<text x="95" y "100" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">39</text>
<text x="205" y "100" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">2</text>
<text x="95" y "125" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">40</text>
<text x="205" y "125" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">2</text>
<text x="95" y "150" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">41</text>
<text x="205" y "150" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">1</text>
<text x="95" y "175" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">42</text>
<text x="205" y "175" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">1</text>
</svg>`,
    checks: [
      {
        q: "In de tabel hierboven: hoeveel leerlingen hebben maat 39 of kleiner?",
        options: ["6", "4", "2", "10"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is alleen maat 38. Tel ook maat 39 erbij: 4 + 2 = 6.",
          "Dat is alleen maat 39. Tel ook 38 erbij.",
          "10 is iedereen. We zoeken alleen 38 en 39.",
        ],
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
<text x="72" y "175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">38</text>
<text x="72" y "55" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">4</text>
<rect x="100" y="110" width="35" height="50" fill="${COLORS.curve}" opacity="0.85"/>
<text x="117" y "175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">39</text>
<text x="117" y "105" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">2</text>
<rect x="145" y="110" width="35" height="50" fill="${COLORS.curve}" opacity="0.85"/>
<text x="162" y "175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">40</text>
<text x="162" y "105" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">2</text>
<rect x="190" y="135" width="35" height="25" fill="${COLORS.curve}" opacity="0.85"/>
<text x="207" y "175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">41</text>
<text x="207" y "130" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">1</text>
<rect x="235" y="135" width="35" height="25" fill="${COLORS.curve}" opacity="0.85"/>
<text x="252" y "175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">42</text>
<text x="252" y "130" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">1</text>
<text x="20" y "100" fill="${COLORS.muted}" font-size="10" font-family="Arial">freq</text>
</svg>`,
    checks: [
      {
        q: "Wat hoort op de y-as van een staafdiagram (in het frequentievoorbeeld)?",
        options: ["Frequentie", "De waardes zelf", "De percentages", "Het gemiddelde"],
        answer: 0,
        wrongHints: [null, "Dat staat op de x-as.", "Percentages kunnen, maar in basis-staafdiagram is het frequentie.", "Het gemiddelde is één getal — geen as."],
      },
    ],
  },
  {
    title: "Het gemiddelde",
    explanation: "Het **gemiddelde** (ook 'rekenkundig gemiddelde') is misschien de meest gebruikte statistiek.\n\n**Formule**:\n\n**gemiddelde = som van alle waarden ÷ aantal waarden**\n\n**Voorbeeld**: cijfers 6, 7, 8, 5, 9.\n• Som: 6 + 7 + 8 + 5 + 9 = 35\n• Aantal: 5\n• Gemiddelde: 35 ÷ 5 = **7**\n\n**Voorbeeld 2**: schoenmaten 38, 40, 38, 42, 39, 38, 41, 40, 39, 38.\n• Som: 38+40+38+42+39+38+41+40+39+38 = 393\n• Aantal: 10\n• Gemiddelde: 393 ÷ 10 = **39,3**\n\nHet gemiddelde geeft een 'middelste waarde' van alle data. Maar pas op: bij **uitschieters** kan het gemiddelde misleidend zijn (zie volgende stappen).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y "47" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">gem = som ÷ aantal</text>
<text x="55" y "85" fill="${COLORS.text}" font-size="13" font-family="Arial">cijfers: 6, 7, 8, 5, 9</text>
<text x="55" y "108" fill="${COLORS.text}" font-size="13" font-family="Arial">som = 35</text>
<text x="55" y "131" fill="${COLORS.text}" font-size="13" font-family="Arial">aantal = 5</text>
<rect x="55" y "143" width="120" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="115" y "166" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">35 ÷ 5 = 7</text>
</svg>`,
    checks: [
      {
        q: "Bereken gemiddelde van: 4, 6, 8, 10.",
        options: ["7", "8", "28", "6"],
        answer: 0,
        wrongHints: [null, "Te hoog. Reken: 4+6+8+10 = 28, ÷ 4 = 7.", "28 is de som. Deel nog door 4 (aantal getallen).", "Niet de mediaan. Som = 28, ÷ 4 = 7."],
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
<text x="72" y "175" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">38</text>
<text x="72" y "55" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">4 ★</text>
<rect x="100" y="110" width="35" height="50" fill="${COLORS.curve}" opacity="0.85"/>
<text x="117" y "175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">39</text>
<rect x="145" y="110" width="35" height="50" fill="${COLORS.curve}" opacity="0.85"/>
<text x="162" y "175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">40</text>
<rect x="190" y="135" width="35" height="25" fill="${COLORS.curve}" opacity="0.85"/>
<text x="207" y "175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">41</text>
<text x="150" y "30" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">modus = 38 (hoogste staaf)</text>
</svg>`,
    checks: [
      {
        q: "Wat is de modus van: 7, 4, 7, 9, 4, 7, 2?",
        options: ["7", "4", "5,7", "9"],
        answer: 0,
        wrongHints: [null, "4 komt 2× voor, maar 7 komt 3× voor.", "5,7 zou het gemiddelde zijn, niet de modus.", "9 komt maar 1× voor."],
      },
    ],
  },
  {
    title: "De mediaan",
    explanation: "De **mediaan** is de **middelste** waarde als je alle getallen op volgorde zet.\n\n**Stappenplan**:\n1. Zet alle getallen op volgorde van klein naar groot.\n2. Pak het middelste getal.\n\n**Voorbeeld**: 3, 7, 5, 1, 9.\n• Sorteer: 1, 3, 5, 7, 9\n• Middelste: **5** (er zijn 5 getallen, de derde is het midden).\n\n**Bij een even aantal**: gemiddelde van de twee middelste.\n• 1, 3, 5, 7 → middelste twee zijn 3 en 5 → mediaan = (3+5)/2 = **4**.\n\n**Wanneer is mediaan nuttig?**\nVooral bij **uitschieters**. Stel je inkomens: 20, 25, 22, 23, 1000.\n• Gemiddelde: (20+25+22+23+1000)/5 = 218 (misleidend door uitschieter!)\n• Mediaan: gesorteerd 20, 22, 23, 25, 1000 → middelste is **23** (veel realistischer)",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y "35" fill="${COLORS.text}" font-size="13" font-family="Arial">data: 3, 7, 5, 1, 9</text>
<text x="55" y "60" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">sorteren:</text>
<text x="60" y "90" fill="${COLORS.text}" font-size="14" font-family="Arial">1</text>
<text x="100" y "90" fill="${COLORS.text}" font-size="14" font-family="Arial">3</text>
<text x="140" y "90" fill="${COLORS.point}" font-size="20" font-family="Arial" font-weight="bold">5</text>
<text x="180" y "90" fill="${COLORS.text}" font-size="14" font-family="Arial">7</text>
<text x="220" y "90" fill="${COLORS.text}" font-size="14" font-family="Arial">9</text>
<line x1="140" y1="100" x2="148" y2="115" stroke="${COLORS.point}" stroke-width="2"/>
<text x="150" y "130" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">middelste</text>
<rect x="100" y "150" width="100" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="150" y "172" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">mediaan = 5</text>
</svg>`,
    checks: [
      {
        q: "Mediaan van 8, 3, 6, 1, 9, 2, 7?",
        options: ["6", "5", "8", "3"],
        answer: 0,
        wrongHints: [null, "Te laag. Sorteer: 1, 2, 3, **6**, 7, 8, 9. Middelste = 6.", "Te hoog. Het middelste van 7 getallen.", "Te laag. Sorteer eerst, dan middelste."],
      },
    ],
  },
  {
    title: "Gemiddelde, modus, mediaan vergelijken",
    explanation: "Drie centrum-maten — wanneer gebruik je welke?\n\n**Gemiddelde**: standaard, snel, gevoelig voor uitschieters.\n• Gebruik bij 'normale' data zonder extreme waardes.\n• Voorbeeld: gemiddeld cijfer in een toets.\n\n**Modus**: meest voorkomende waarde.\n• Gebruik bij categorieën (kleuren, sporten) of als je 'meest populair' wil weten.\n• Voorbeeld: meest verkochte schoenmaat.\n\n**Mediaan**: middelste, ongevoelig voor uitschieters.\n• Gebruik bij scheve verdelingen of uitschieters (inkomens, huizenprijzen).\n• Voorbeeld: gemiddeld inkomen in NL ≠ mediaan inkomen.\n\n**Voorbeeld**: data 4, 5, 6, 6, 100.\n• Gemiddelde: 24,2 (door uitschieter 100)\n• Modus: 6\n• Mediaan: 6\n\nIn dit geval geven modus en mediaan een **realistischer beeld**.",
    svg: `<svg viewBox="0 0 300 200">
<text x="80" y "35" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">data: 4, 5, 6, 6, 100</text>
<line x1="40" y1="48" x2="260" y2="48" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y "75" fill="${COLORS.text}" font-size="12" font-family="Arial">gemiddelde:</text>
<text x="180" y "75" fill="${COLORS.curveAlt}" font-size="13" font-family="Arial" font-weight="bold">24,2 (vertekend)</text>
<text x="55" y "100" fill="${COLORS.text}" font-size="12" font-family="Arial">modus:</text>
<text x="180" y "100" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">6</text>
<text x="55" y "125" fill="${COLORS.text}" font-size="12" font-family="Arial">mediaan:</text>
<text x="180" y "125" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">6</text>
<text x="150" y "175" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">bij uitschieters: gebruik mediaan</text>
</svg>`,
    checks: [
      {
        q: "Wanneer is mediaan beter dan gemiddelde?",
        options: ["Bij uitschieters", "Bij even aantallen", "Nooit", "Altijd"],
        answer: 0,
        wrongHints: [null, "Het hangt af van de data, niet van het aantal.", "Bij scheve verdelingen is mediaan zinvol.", "Beide zijn nuttig in verschillende situaties."],
      },
    ],
  },
  {
    title: "Het bereik",
    explanation: "Het **bereik** zegt hoe **uitgespreid** de data is.\n\n**Formule**: bereik = grootste − kleinste\n\n**Voorbeelden**:\n• 5, 7, 10, 4, 12 → bereik = 12 − 4 = **8**\n• 100, 102, 105, 110 → bereik = 110 − 100 = **10**\n• 1, 100 → bereik = **99** (grote spreiding!)\n• 50, 50, 50 → bereik = **0** (geen spreiding)\n\nEen **klein bereik** betekent: de getallen liggen dicht bij elkaar.\nEen **groot bereik** betekent: ze liggen ver uiteen.\n\n**Toepassing**: bij twee toetsen met **gelijk gemiddelde** kan het bereik enorm verschillen — sommige klassen zijn 'eerlijker' (klein bereik), andere zijn meer ongelijk (groot bereik).",
    svg: `<svg viewBox="0 0 300 200">
<line x1="20" y1="100" x2="280" y2="100" stroke="${COLORS.text}" stroke-width="2"/>
<circle cx="60" cy="100" r="6" fill="${COLORS.point}"/>
<text x="60" y "85" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">4</text>
<text x="60" y "125" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">kleinste</text>
<circle cx="100" cy="100" r="4" fill="${COLORS.curve}"/>
<circle cx="140" cy="100" r="4" fill="${COLORS.curve}"/>
<circle cx="200" cy="100" r="4" fill="${COLORS.curve}"/>
<circle cx="240" cy="100" r="6" fill="${COLORS.point}"/>
<text x="240" y "85" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">12</text>
<text x="240" y "125" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">grootste</text>
<line x1="60" y1="155" x2="240" y2="155" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="60,150 50,155 60,160" fill="${COLORS.point}"/>
<polygon points="240,150 250,155 240,160" fill="${COLORS.point}"/>
<text x="150" y "175" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">bereik = 12 − 4 = 8</text>
</svg>`,
    checks: [
      {
        q: "Bereken het bereik van 15, 22, 8, 30, 18.",
        options: ["22", "8", "30", "12"],
        answer: 0,
        wrongHints: [null, "Te klein. Bereik = grootste − kleinste = 30 − 8 = 22.", "8 is de kleinste, niet het bereik.", "30 is de grootste, niet het bereik. Reken: 30 − 8 = 22."],
      },
    ],
  },
  {
    title: "Welke variantie tussen klassen?",
    explanation: "Een vergelijking met **bereik en gemiddelde** samen:\n\nKlas A scoort op een toets: 6, 6, 7, 7, 8\nKlas B scoort: 3, 5, 7, 9, 10\n\n**Allebei**:\n• Gemiddelde: (6+6+7+7+8)/5 = 6,8 vs (3+5+7+9+10)/5 = 6,8 → **gelijk**!\n• Mediaan: 7 vs 7 → **gelijk**\n\n**Maar bereik**:\n• Klas A: 8 − 6 = **2** (compact, leerlingen presteren ongeveer gelijk)\n• Klas B: 10 − 3 = **7** (groot verschil tussen leerlingen)\n\nHetzelfde gemiddelde, hele andere verdeling. Daarom is bereik (en andere spreidingsmaten) belangrijk om naast het gemiddelde te zetten.\n\n**Tip in een opgave**: noem altijd minstens **één centrummaat** (gem./med./mod.) én **één spreidingsmaat** (bereik) om de data goed te beschrijven.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="100" x2="280" y2="100" stroke="${COLORS.text}" stroke-width="1"/>
<text x="155" y "30" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">zelfde gemiddelde, ander bereik</text>
<circle cx="120" cy="60" r="4" fill="${COLORS.curve}"/>
<circle cx="120" cy="60" r="4" fill="${COLORS.curve}"/>
<circle cx="140" cy="60" r="4" fill="${COLORS.curve}"/>
<circle cx="140" cy="60" r="4" fill="${COLORS.curve}"/>
<circle cx="160" cy="60" r="4" fill="${COLORS.curve}"/>
<text x="55" y "65" fill="${COLORS.curve}" font-size="11" font-family="Arial" font-weight="bold">klas A:</text>
<text x="220" y "65" fill="${COLORS.muted}" font-size="10" font-family="Arial">bereik 2</text>
<circle cx="60" cy="140" r="4" fill="${COLORS.curveAlt}"/>
<circle cx="100" cy="140" r="4" fill="${COLORS.curveAlt}"/>
<circle cx="140" cy="140" r="4" fill="${COLORS.curveAlt}"/>
<circle cx="180" cy="140" r="4" fill="${COLORS.curveAlt}"/>
<circle cx="220" cy="140" r="4" fill="${COLORS.curveAlt}"/>
<text x="40" y "160" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">klas B:</text>
<text x="225" y "160" fill="${COLORS.muted}" font-size="10" font-family="Arial">bereik 7</text>
<text x="150" y "192" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">verspreiding zegt veel</text>
</svg>`,
    checks: [
      {
        q: "Twee klassen met zelfde gemiddelde maar verschillend bereik. Wat zegt dat?",
        options: [
          "De klassen presteren even goed, maar prestaties zijn verschillend verdeeld",
          "Een klas presteert beter",
          "De klassen zijn gelijk",
          "Geen verschil",
        ],
        answer: 0,
        wrongHints: [null, "Niet noodzakelijk. Gem. is gelijk — geen klas is 'beter'. Spreiding verschilt.", "Niet identiek — de spreiding (bereik) verschilt.", "Bereik geeft wel verschil weer."],
      },
    ],
  },
  {
    title: "Toepassing: cijferreeks",
    explanation: "Een typische opgave: jouw 5 toetsen waren 6, 7, 5, 8, 9.\n\n**A** — Gemiddelde:\n(6+7+5+8+9)/5 = 35/5 = **7**\n\n**B** — Modus: alle getallen verschillend → **geen modus**.\n\n**C** — Mediaan: sorteer 5, 6, 7, 8, 9 → middelste = **7**.\n\n**D** — Bereik: 9 − 5 = **4**.\n\n**E** — Wat moet je halen op de **6e toets** om het gemiddelde naar **7,5** te krijgen?\n• Som tot nu: 35.\n• Gewenst: 6 toetsen × 7,5 = 45.\n• Nodig: 45 − 35 = **10** (perfect).\n\nDit type 'wat moet ik nog halen?'-vraagstuk komt vaak voor in de praktijk.",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y "32" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">cijfers: 6, 7, 5, 8, 9</text>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y "62" fill="${COLORS.text}" font-size="12" font-family="Arial">gemiddelde: </text>
<text x="180" y "62" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">7</text>
<text x="55" y "82" fill="${COLORS.text}" font-size="12" font-family="Arial">modus: </text>
<text x="180" y "82" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">geen</text>
<text x="55" y "102" fill="${COLORS.text}" font-size="12" font-family="Arial">mediaan: </text>
<text x="180" y "102" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">7</text>
<text x="55" y "122" fill="${COLORS.text}" font-size="12" font-family="Arial">bereik: </text>
<text x="180" y "122" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">4</text>
<text x="55" y "150" fill="${COLORS.text}" font-size="12" font-family="Arial">6e toets voor gem 7,5: </text>
<text x="195" y "150" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">10</text>
<text x="150" y "185" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">som = aantal × gemiddelde</text>
</svg>`,
    checks: [
      {
        q: "5 cijfers met gem 6. Som = ?",
        options: ["30", "11", "1,2", "5"],
        answer: 0,
        wrongHints: [null, "Te klein. Som = aantal × gemiddelde = 5 × 6 = 30.", "Te klein. Reken: 5 × 6 = 30.", "Dat is geen 'som'. Reken: 5 × 6 = 30."],
      },
    ],
  },
  {
    title: "Eindopdracht",
    explanation: "**Vragen** over deze data: 4, 8, 6, 7, 4, 9, 5, 6, 4.\n\n**A — Bereken alle 4 maten**:\n• Sorteren: 4, 4, 4, 5, 6, 6, 7, 8, 9 (9 getallen)\n• **Gemiddelde**: 53 / 9 ≈ **5,9**\n• **Modus**: 4 (komt 3× voor)\n• **Mediaan**: middelste van 9 = 5e = **6**\n• **Bereik**: 9 − 4 = **5**\n\n**B — Frequentietabel maken**:\n\n| waarde | freq |\n|--------|------|\n| 4 | 3 |\n| 5 | 1 |\n| 6 | 2 |\n| 7 | 1 |\n| 8 | 1 |\n| 9 | 1 |\n\nGoed gedaan — je hebt het statistiek-leerpad doorlopen!\n\n**Recap**:\n- Frequentietabel + staafdiagram = data ordenen\n- Gemiddelde / modus / mediaan = drie centrummaten\n- Bereik = spreiding\n- Bij uitschieters: kies mediaan boven gemiddelde",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y "32" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">data: 4,8,6,7,4,9,5,6,4</text>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y "65" fill="${COLORS.text}" font-size="12" font-family="Arial">gemiddelde:</text>
<text x="180" y "65" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">5,9</text>
<text x="55" y "88" fill="${COLORS.text}" font-size="12" font-family="Arial">modus:</text>
<text x="180" y "88" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">4</text>
<text x="55" y "111" fill="${COLORS.text}" font-size="12" font-family="Arial">mediaan:</text>
<text x="180" y "111" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">6</text>
<text x="55" y "134" fill="${COLORS.text}" font-size="12" font-family="Arial">bereik:</text>
<text x="180" y "134" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">5</text>
<text x="150" y "180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">statistiek onder de knie 🏆</text>
</svg>`,
    checks: [
      {
        q: "Cijfers 5, 7, 7, 8, 9. Wat is het gemiddelde?",
        options: ["7,2", "7", "36", "5"],
        answer: 0,
        wrongHints: [null, "Te laag. Som = 36, ÷ 5 = 7,2.", "36 is de som. Deel nog door 5.", "5 is de kleinste, niet gemiddelde."],
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
  intro: "Statistiek bestudeert gegevens (data). Hier leer je: frequentietabellen, staafdiagrammen, drie centrummaten (gemiddelde, modus, mediaan), bereik als spreidingsmaat, en wanneer je welke gebruikt.",
  triggerKeywords: ["statistiek", "gemiddelde", "modus", "mediaan", "frequentie", "staafdiagram", "bereik"],
  chapters,
  steps,
};

export default statistiek;
