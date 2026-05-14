// Leerpad: Toestanden van stoffen (vast/vloeibaar/gas) — groep 6-8 PO.
// Cito-onderdeel wereldoriëntatie (natuurkunde-basis). Referentieniveau 1F.
// 5 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  vast: "#80cbc4",
  vloeibaar: "#42a5f5",
  gas: "#ffd54f",
  highlight: "#ff7043",
  arrow: "#ff8a65",
};

const stepEmojis = ["🧊", "💧", "💨", "🔄", "🏆"];

const chapters = [
  { letter: "A", title: "Drie toestanden", emoji: "🧊", from: 0, to: 0 },
  { letter: "B", title: "Vloeistoffen", emoji: "💧", from: 1, to: 1 },
  { letter: "C", title: "Gassen", emoji: "💨", from: 2, to: 2 },
  { letter: "D", title: "Overgangen + watercyclus", emoji: "🔄", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

function toestandSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">3 toestanden van een stof</text>

<!-- Vast -->
<rect x="20" y="45" width="80" height="80" rx="6" fill="rgba(128,203,196,0.18)" stroke="${COLORS.vast}" stroke-width="1.5"/>
<text x="60" y="65" text-anchor="middle" fill="${COLORS.vast}" font-size="12" font-family="Arial" font-weight="bold">VAST</text>
<!-- molecules dicht op elkaar -->
${[0, 1, 2, 3].map((i) => {
    const x = 35 + (i % 2) * 25;
    const y = 75 + Math.floor(i / 2) * 25;
    return `<circle cx="${x}" cy="${y}" r="6" fill="${COLORS.vast}"/>`;
  }).join("")}
<text x="60" y="142" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vorm + volume vast</text>

<!-- Vloeibaar -->
<rect x="115" y="45" width="80" height="80" rx="6" fill="rgba(66,165,245,0.18)" stroke="${COLORS.vloeibaar}" stroke-width="1.5"/>
<text x="155" y="65" text-anchor="middle" fill="${COLORS.vloeibaar}" font-size="12" font-family="Arial" font-weight="bold">VLOEIBAAR</text>
<!-- molecules verspreid -->
${[0, 1, 2, 3, 4, 5].map((i) => {
    const x = 125 + (i % 3) * 22;
    const y = 80 + Math.floor(i / 3) * 22;
    return `<circle cx="${x}" cy="${y}" r="5" fill="${COLORS.vloeibaar}"/>`;
  }).join("")}
<text x="155" y="142" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vorm los, volume vast</text>

<!-- Gas -->
<rect x="210" y="45" width="80" height="80" rx="6" fill="rgba(255,213,79,0.18)" stroke="${COLORS.gas}" stroke-width="1.5"/>
<text x="250" y="65" text-anchor="middle" fill="${COLORS.gas}" font-size="12" font-family="Arial" font-weight="bold">GAS</text>
<!-- molecules ver uit elkaar -->
${[0, 1, 2, 3, 4].map((i) => {
    const x = 220 + (i * 14) % 60;
    const y = 78 + ((i * 17) % 40);
    return `<circle cx="${x}" cy="${y}" r="3" fill="${COLORS.gas}"/>`;
  }).join("")}
<text x="250" y="142" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vult de hele ruimte</text>

<text x="160" y="167" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Bv. water = ijs (vast) → water (vloeibaar) → stoom (gas)</text>
</svg>`;
}

function watercyclusSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">De watercyclus</text>
<!-- Zon -->
<circle cx="60" cy="55" r="20" fill="${COLORS.gas}"/>
<text x="60" y="58" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">zon</text>
<!-- zee -->
<rect x="20" y="155" width="280" height="40" fill="${COLORS.vloeibaar}" opacity="0.7"/>
<text x="160" y="180" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">zee / rivier</text>
<!-- verdampen (pijl omhoog) -->
<line x1="105" y1="155" x2="120" y2="90" stroke="${COLORS.arrow}" stroke-width="2"/>
<polygon points="115,92 125,92 120,82" fill="${COLORS.arrow}"/>
<text x="125" y="125" fill="${COLORS.arrow}" font-size="10" font-family="Arial">verdampen</text>
<!-- wolk -->
<ellipse cx="180" cy="75" rx="40" ry="18" fill="${COLORS.text}" opacity="0.4"/>
<text x="180" y="80" text-anchor="middle" fill="#0e1014" font-size="11" font-family="Arial" font-weight="bold">wolk</text>
<!-- regen (pijl omlaag) -->
<line x1="220" y1="95" x2="240" y2="150" stroke="${COLORS.vloeibaar}" stroke-width="2"/>
<polygon points="235,142 245,142 240,152" fill="${COLORS.vloeibaar}"/>
<text x="247" y="125" fill="${COLORS.vloeibaar}" font-size="10" font-family="Arial">regenen</text>
</svg>`;
}

const steps = [
  // STAP 1: Drie toestanden
  {
    title: "Vast, vloeibaar, gas — 3 toestanden",
    explanation:
      "Elke stof kan in **3 toestanden** voorkomen:\n\n**1. Vast** *(bv. ijs, hout, steen, metaal)*\n• **Vaste vorm** — blijft hetzelfde.\n• **Vast volume** — neemt vaste hoeveelheid ruimte in.\n• Moleculen zitten **dicht op elkaar**.\n\n**2. Vloeibaar** *(bv. water, melk, olie)*\n• **Geen vaste vorm** — neemt de vorm van het glas/kom over.\n• **Vast volume** — 1 liter water blijft 1 liter.\n• Moleculen zitten dichtbij maar **bewegen langs elkaar**.\n\n**3. Gas** *(bv. lucht, stoom, helium)*\n• **Geen vaste vorm** — vult de hele ruimte.\n• **Geen vast volume** — kan ingedrukt of uitgezet worden.\n• Moleculen zitten **ver uit elkaar** en bewegen heel snel.\n\n**Voorbeeld — water**:\n• **IJs** = vast *(onder 0°C)*.\n• **Water** = vloeibaar *(tussen 0°C en 100°C)*.\n• **Stoom** = gas *(boven 100°C)*.\nHetzelfde water, maar **in 3 toestanden** afhankelijk van de temperatuur!\n\n**Cito-toets**: 'Welke vorm heeft een vloeistof?'\n→ De vorm van het ding waar het in zit *(glas, fles, kop)*.\n\n**Andere voorbeelden uit het dagelijks leven**:\n• Brood = vast.\n• Limonade = vloeibaar.\n• Koolzuur in cola = gas *(bubbeltjes)*.\n• Wolken = waterdamp *(eigenlijk gas met heel kleine waterdruppeltjes)*.\n• De lucht om je heen = mengsel van gassen *(stikstof, zuurstof)*.",
    svg: toestandSvg(),
    checks: [
      {
        q: "**IJs** is welke toestand?",
        options: ["Vast", "Vloeibaar", "Gas", "Geen van deze"],
        answer: 0,
        wrongHints: [null, "Klopt — bevroren water.", "Dat is water.", "Dat is stoom.", "Wel een toestand."],
      },
      {
        q: "Een **vloeistof** heeft welke vorm?",
        options: ["Vorm van de bak/glas", "Vaste vorm", "Geen vorm", "Wisselt steeds"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Dat is vast.", "Wel een vorm, namelijk van waar het in zit.", "Klopt niet — neemt de vorm aan en houdt die."],
      },
      {
        q: "**Lucht** is welke toestand?",
        options: ["Gas", "Vloeibaar", "Vast", "Mengsel"],
        answer: 0,
        wrongHints: [null, "Klopt — mengsel van gassen.", "Niet vloeibaar (gewone lucht).", "Niet vast.", "Wel mengsel, maar de toestand is gas."],
      },
      {
        q: "Welke is **NIET** een toestand van een stof?",
        options: ["Vloeibaarheid", "Vast", "Vloeibaar", "Gas"],
        answer: 0,
        wrongHints: [null, "Klopt — 'vloeibaarheid' is geen toestand, het is een eigenschap.", "Wel een toestand.", "Wel een toestand.", "Wel een toestand."],
        uitlegPad: {
          stappen: [
            { titel: "Let op de vraag — NIET!", tekst: "Cito-strikvraag: zoek het ene woord dat **GEEN** toestand is. Drie van de vier zijn toestanden — eentje is anders." },
            { titel: "De 3 toestanden van stoffen", tekst: "Een stof kan zijn:\n• **Vast** (bv. ijs, hout)\n• **Vloeibaar** (bv. water, melk)\n• **Gas** (bv. lucht, stoom)\nMeer dan deze 3 zijn er niet voor PO." },
            { titel: "Wat is 'vloeibaarheid'?", tekst: "**Vloeibaarheid** is geen toestand maar een **eigenschap** — hoe makkelijk iets vloeit (water = veel vloeibaarheid, honing = weinig). Pas op met dit soort -heid-woorden, het zijn geen toestanden." },
          ],
          woorden: [
            { woord: "toestand", uitleg: "Vorm waarin een stof zit: vast, vloeibaar of gas." },
            { woord: "eigenschap", uitleg: "Kenmerk van een stof (bv. kleur, vloeibaarheid, gewicht)." },
          ],
          theorie: "Cito-truc: woorden eindigend op **-heid** of **-baarheid** zijn vaak **eigenschappen**, niet toestanden. Vloeibaarheid, hardheid, dichtheid = eigenschappen. Vast/vloeibaar/gas = toestanden.",
          voorbeelden: [
            { type: "stap", tekst: "Hardheid van een steen = eigenschap. De steen-toestand = vast." },
            { type: "stap", tekst: "Stroperigheid van honing = eigenschap. Toestand = vloeibaar." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "3 toestanden onthoud: V-V-G (vast-vloeibaar-gas). Komt er een 4e woord bij dat eindigt op -heid? = eigenschap, niet toestand." }],
          niveaus: {
            basis: "Vloeibaarheid (geen toestand, maar eigenschap). = A.",
            simpeler: "3 toestanden: vast / vloeibaar / gas. 'Vloeibaarheid' is een eigenschap, geen toestand. = A.",
            nogSimpeler: "Vloeibaarheid = A.",
          },
        },
      },
    ],
  },

  // STAP 2: Vloeistoffen meer
  {
    title: "Vloeistoffen — eigenschappen",
    explanation:
      "**Vloeistoffen** zijn een speciale toestand. Wat is bijzonder?\n\n**Eigenschappen**:\n1. **Stromen** — water 'loopt' van hoog naar laag.\n2. **Vorm aannemen** — past zich aan aan glas, kop, plas.\n3. **Niet samen te drukken** — 1 liter water blijft 1 liter, ook onder druk.\n4. **Verdampen** — kan langzaam in lucht 'verdwijnen' (wordt damp).\n5. **Mengen of niet** — sommige vloeistoffen mengen *(water + limonadesiroop)*, andere niet *(water + olie)*.\n\n**Belangrijke vloeistoffen**:\n• **Water** (H₂O) — meest voorkomende vloeistof op aarde.\n• **Melk** — water met vetdeeltjes en eiwitten.\n• **Olie** — drijft op water *(lichter)*.\n• **Honing** — vloeibaar maar **dik** *(stroperig)*.\n\n**Cito-experiment-vraag**:\n*'Wat gebeurt als je water en olie mengt?'*\n• Olie **drijft op** water *(olie is lichter)*.\n• Ze mengen **niet** — vormen 2 lagen.\n\n*'Wat gebeurt als je honing in water doet?'*\n• Honing **zinkt** *(zwaarder dan water)* en lost langzaam op.\n\n*'Wat verdwijnt sneller — water uit een diep glas of uit een vlakke schaal?'*\n• Uit de **vlakke schaal** *(meer oppervlak voor verdamping)*.\n\n**Belangrijke termen**:\n• **Stroperig** = dik, langzaam vloeiend *(honing, siroop)*.\n• **Dun** = snel vloeiend *(water, alcohol)*.\n• **Verdampen** = vloeistof → gas, langzaam, ook onder kookpunt.\n• **Oplossen** = vaste stof verdwijnt in vloeistof *(suiker in thee)*.",
    checks: [
      {
        q: "Waarom drijft **olie** op water?",
        options: ["Olie is lichter dan water", "Olie is zwaarder", "Olie is een gas", "Olie is vast"],
        answer: 0,
        wrongHints: [null, "Klopt — daarom drijft het bovenop.", "Andersom.", "Olie is vloeibaar.", "Olie is vloeibaar."],
      },
      {
        q: "Wat is **stroperig**?",
        options: ["Dik, langzaam vloeiend", "Heel waterig", "Vast", "Gas"],
        answer: 0,
        wrongHints: [null, "Klopt — denk honing of stroop.", "Tegenovergesteld.", "Geen vloeistof meer.", "Geen vloeistof."],
      },
      {
        q: "Uit welke vorm **verdampt water het snelst**?",
        options: ["Vlakke schaal", "Diep glas", "Gesloten fles", "Theekop"],
        answer: 0,
        wrongHints: [null, "Klopt — groot oppervlak = snel verdampen.", "Klein oppervlak = traag.", "Helemaal niet — gesloten.", "Klein oppervlak."],
        uitlegPad: {
          stappen: [
            { titel: "Oppervlak telt", tekst: "Verdampen gebeurt aan het oppervlak. Veel oppervlak = meer plek waar moleculen kunnen vertrekken. Vlakke schaal heeft meer oppervlak dan diep glas." },
          ],
          woorden: [{ woord: "verdampen", uitleg: "Vloeistof langzaam in lucht verdwijnen, ook bij kamertemperatuur." }],
          theorie: "Verdamping snelheid hangt af van: oppervlak, temperatuur, wind/luchtstroom.",
          voorbeelden: [{ type: "stap", tekst: "Plas op straat verdampt sneller op zonnig dag met wind." }],
          basiskennis: [{ onderwerp: "Oppervlak", uitleg: "Hoe meer oppervlak, hoe sneller verdamping." }],
          niveaus: {
            basis: "Vlakke schaal. A.",
            simpeler: "Verdampen gebeurt aan het oppervlak. Een vlakke schaal heeft meer oppervlak (water-lucht contact) dan een diep glas. Dus verdampt sneller. = A.",
            nogSimpeler: "Vlakke schaal = A.",
          },
        },
      },
      {
        q: "Wat **lost op** in water?",
        options: ["Suiker", "Olie", "IJzer", "Hout"],
        answer: 0,
        wrongHints: [null, "Klopt — vooral in warm water.", "Olie mengt juist niet.", "IJzer roest maar lost niet op.", "Hout zinkt maar lost niet op."],
      },
    ],
  },

  // STAP 3: Gassen
  {
    title: "Gassen — onzichtbaar maar overal",
    explanation:
      "**Gassen** zijn vaak onzichtbaar maar **overal om ons heen**.\n\n**Voorbeelden**:\n• **Lucht** — mengsel van stikstof (~78%), zuurstof (~21%), CO₂, edelgassen.\n• **Stoom** — water in gas-vorm.\n• **Koolzuurgas (CO₂)** — in cola, bier, lucht.\n• **Helium** — in ballonnen *(stijgt op omdat het lichter is dan lucht)*.\n• **Aardgas** — voor verwarming + koken in Nederland.\n\n**Eigenschappen van gas**:\n1. **Vult de hele ruimte** — een ballon vult zich helemaal als je gas erin pompt.\n2. **Onzichtbaar** *(meestal)* — wel zichtbaar bij stoom of mist, want dan zijn er minimal kleine waterdruppeltjes in.\n3. **Samen te drukken** — je kunt veel gas in een klein flesje persen *(bv. propaan-gasfles)*.\n4. **Beweegt heel snel** — moleculen rennen rond.\n5. **Verspreid** — geur van eten gaat door het hele huis.\n\n**Cito-feitjes om te kennen**:\n• Lucht is **niets** zien, maar voel je wel *(wind)*.\n• Stoom is **niet** echt water-damp die je ziet — die is onzichtbaar. Wat je ziet zijn kleine waterdruppeltjes (mist).\n• **Ballon met helium stijgt** omdat helium lichter is dan lucht. Een ballon met gewone lucht zinkt.\n\n**Cito-vraag**:\n*'Wat is een mengsel van gassen?'*\n→ Lucht.\n\n**Pas op**:\n• **Adem** = bevat zuurstof in en koolstofdioxide uit.\n• **Zuurstof** is een gas dat je nodig hebt om te leven.\n• **Koolstofdioxide (CO₂)** is wat planten 'inademen' en jij 'uitademt'.\n\n**Brandstoffen**:\n• Aardgas, propaan, butaan — allemaal gassen die kunnen branden.\n• **Vuur** heeft 3 dingen nodig: brandstof + zuurstof + warmte. Vandaar dat zonder zuurstof geen vuur kan.",
    checks: [
      {
        q: "**Lucht** is een mengsel van vooral ... ?",
        options: ["Stikstof + zuurstof", "Water + olie", "CO₂ + helium", "Stoom + rook"],
        answer: 0,
        wrongHints: [null, "Klopt — ~78% stikstof, ~21% zuurstof.", "Geen gassen.", "Te weinig — die zijn alleen klein deel.", "Geen normale lucht."],
      },
      {
        q: "Waarom **stijgt een heliumballon**?",
        options: ["Helium is lichter dan lucht", "Helium is zwaarder", "Helium koud", "Magie"],
        answer: 0,
        wrongHints: [null, "Klopt — daarom drijft hij omhoog.", "Tegenovergesteld.", "Niet relevant.", "Geen magie — wetenschap."],
      },
      {
        q: "Wat heb je **nodig om vuur te maken**?",
        options: ["Brandstof + zuurstof + warmte", "Alleen brandstof", "Alleen zuurstof", "Alleen warmte"],
        answer: 0,
        wrongHints: [null, "Klopt — de 'vuur-driehoek'.", "Te beperkt.", "Te beperkt.", "Te beperkt."],
      },
      {
        q: "Wat ademen **planten in** dat wij uitademen?",
        options: ["Koolstofdioxide (CO₂)", "Zuurstof", "Stikstof", "Helium"],
        answer: 0,
        wrongHints: [null, "Klopt — planten gebruiken CO₂ voor fotosynthese.", "Wij ademen zuurstof in, planten geven juist zuurstof af.", "Stikstof is grootste deel lucht maar niet wat planten gebruiken.", "Helium is geen onderdeel van fotosynthese."],
        uitlegPad: {
          stappen: [
            { titel: "Mens en plant zijn elkaars 'maatje'", tekst: "Mensen + dieren **ademen zuurstof IN** en **CO₂ UIT**.\nPlanten doen het **omgekeerd**: **CO₂ IN** en **zuurstof UIT** (via fotosynthese, met zonlicht). We hebben elkaar dus nodig." },
            { titel: "Fotosynthese in 1 regel", tekst: "Plant + **CO₂** + water + zonlicht → **zuurstof** + suiker (energie voor de plant). De plant maakt eigen voedsel + geeft zuurstof terug aan de lucht." },
            { titel: "Waarom dit belangrijk is", tekst: "Zonder planten = geen verse zuurstof. Daarom is **regenwoud** zo belangrijk voor de aarde — een soort 'longen' van de planeet. Cito-feit: bomen + planten = onmisbaar voor lucht." },
          ],
          woorden: [
            { woord: "fotosynthese", uitleg: "Proces waarbij planten zonlicht omzetten in energie + zuurstof maken." },
            { woord: "CO₂", uitleg: "Koolstofdioxide = kool-stof-di-oxide, het gas dat mensen uitademen." },
          ],
          theorie: "Cito-truc lucht-cyclus: mens **IN: O₂ UIT: CO₂** ↔ plant **IN: CO₂ UIT: O₂**. Geef-en-neem-relatie. Onthoud: 'planten ademen ANDERSOM dan wij'.",
          voorbeelden: [
            { type: "stap", tekst: "Vis ademt zuurstof OPGELOST in water (via kieuwen). Planten in water (waterplanten) maken die zuurstof — daarom belang van waterplanten in aquarium." },
            { type: "stap", tekst: "Bij donker stopt fotosynthese (geen zonlicht), maar planten ademen dan ook zuurstof in (zoals wij). Netto: meer zuurstof geven dan nemen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Mens-plant = elkaars tegenpolen in lucht-gebruik. Wij uit, plant in (CO₂). Plant uit, wij in (O₂). Win-win." }],
          niveaus: {
            basis: "Koolstofdioxide (CO₂). = A.",
            simpeler: "Wij ademen CO₂ UIT. Planten ademen die CO₂ juist IN voor fotosynthese. = A.",
            nogSimpeler: "CO₂ = A.",
          },
        },
      },
    ],
  },

  // STAP 4: Overgangen + watercyclus
  {
    title: "Overgangen + watercyclus",
    explanation:
      "Stoffen kunnen **van toestand veranderen** door warmte of kou.\n\n**De 6 overgangen** *(uit je hoofd!)*:\n• **Smelten** = vast → vloeibaar *(ijs → water)*.\n• **Stollen** = vloeibaar → vast *(water → ijs)*.\n• **Verdampen** = vloeibaar → gas *(water → stoom)*.\n• **Condenseren** = gas → vloeibaar *(stoom → water op koude ruit)*.\n• **Sublimeren** = vast → gas *(ijs verdwijnt direct, zoals bij vriesdroge)*.\n• **Desublimeren** = gas → vast *(rijp op gras 's winters)*.\n\n**Voorbeeld water**:\n• 0°C: water bevriest *(stollen)*.\n• 100°C: water kookt *(verdampen)*.\n• Tussen 0-100°C: vloeibaar.\n• Onder 0°C: vast *(ijs)*.\n• Boven 100°C: gas *(stoom)*.\n\nDit zijn **standaard druk** *(zeeniveau)*. Hoog in de bergen kookt water iets onder 100°C.\n\n**De watercyclus**:\n1. **Zon** verwarmt zee, meer, rivier → water **verdampt**.\n2. Waterdamp **stijgt op** in de lucht.\n3. Hoog in de lucht **koelt** het af → **condenseert** tot wolk.\n4. Druppels in wolken groeien → **regen** valt naar beneden.\n5. Regen valt op land of zee → cyclus begint opnieuw.\n\n**Cito-feitjes over de watercyclus**:\n• Wolken zijn **kleine waterdruppeltjes**, geen pure damp.\n• **Bewolking** ontstaat als waterdamp condenseert.\n• Sneeuw is bevroren water *(condenseert + bevriest in 1 stap, soms direct uit damp)*.\n\n**Veel-voorkomende fout**:\n• Denken dat ijs gewoon weg-gaat als het 'verdampt'. Eigenlijk smelt het meestal eerst tot water, dan verdampt.\n• Echte sublimatie *(direct van vast naar gas)* gebeurt wel bij heel koude omstandigheden *(bv. vrieskast — ijs verdwijnt zonder eerst water te worden, zogenoemd 'vriesbrand')*.",
    svg: watercyclusSvg(),
    checks: [
      {
        q: "Wat is **smelten**?",
        options: ["Vast → vloeibaar", "Vloeibaar → vast", "Gas → vloeibaar", "Vloeibaar → gas"],
        answer: 0,
        wrongHints: [null, "Klopt — bv. ijs → water.", "Dat is stollen.", "Dat is condenseren.", "Dat is verdampen."],
        uitlegPad: {
          stappen: [
            { titel: "Smelten = vast → vloeibaar", tekst: "**Smelten** betekent dat iets dat eerst **vast** was, **vloeibaar** wordt. Door warmte. Bv: ijsblokje smelt in je hand tot water." },
            { titel: "Andere bekende voorbeelden", tekst: "• **Boter** smelt in een hete pan (vaste klont → vloeibare boter)\n• **Chocola** smelt in je mond (vast → vloeibaar)\n• **IJs** smelt in de zon (vast water → vloeibaar water)\n• **Metaal** kan smelten bij heel hoge temperaturen (smederij)." },
            { titel: "Niet verwarren met andere overgangen", tekst: "Smelten = VAST naar VLOEIBAAR. Andere namen:\n• **Stollen** = vloeibaar → vast (water bevriest)\n• **Verdampen** = vloeibaar → gas (water → stoom)\n• **Condenseren** = gas → vloeibaar (stoom op koude ruit)." },
          ],
          woorden: [
            { woord: "smelten", uitleg: "Vast → vloeibaar (door warmte)." },
            { woord: "stollen", uitleg: "Vloeibaar → vast (door kou). Tegenovergestelde van smelten." },
          ],
          theorie: "Cito-truc overgangen-tabel (uit het hoofd!):\n• vast→vloeibaar = **smelten**\n• vloeibaar→vast = **stollen**\n• vloeibaar→gas = **verdampen**\n• gas→vloeibaar = **condenseren**\n6 overgangen totaal (+ sublimeren + desublimeren), maar deze 4 zijn de belangrijkste.",
          voorbeelden: [
            { type: "stap", tekst: "Lood smelt bij 327°C. IJs bij 0°C. Boter bij ~32°C (lichaamswarmte is bijna genoeg)." },
            { type: "stap", tekst: "Smelten gebeurt altijd MET warmte. Geen warmte erbij = blijft vast." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Smelten = WARMTE. Stollen = KOU. Beide gaan tussen vast/vloeibaar. Onthoud: warmte → vloeit, kou → bevriest." }],
          niveaus: {
            basis: "Vast → vloeibaar. = A.",
            simpeler: "IJs (vast) wordt water (vloeibaar) = smelten. Vast → vloeibaar. = A.",
            nogSimpeler: "Vast → vloeibaar = A.",
          },
        },
      },
      {
        q: "Wat is **condenseren**?",
        options: ["Gas → vloeibaar", "Vast → gas", "Vloeibaar → vast", "Vast → vloeibaar"],
        answer: 0,
        wrongHints: [null, "Klopt — bv. stoom op koude ruit.", "Dat is sublimeren.", "Dat is stollen.", "Dat is smelten."],
      },
      {
        q: "Bij welke temperatuur **kookt water** *(op zeeniveau)*?",
        options: ["100 °C", "0 °C", "50 °C", "37 °C"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Dat is bevriespunt.", "Geen kookpunt.", "Lichaamstemperatuur."],
      },
      {
        q: "In de **watercyclus**: wat gebeurt eerst?",
        options: ["Verdampen (zee → wolk)", "Regenen (wolk → zee)", "IJsvorming", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt — zon laat water verdampen, dan wolk, dan regen.", "Komt later in cyclus.", "Niet direct.", "Wel iets — cyclus begint met verdampen."],
      },
    ],
  },

  // STAP 5: Cito-mix
  {
    title: "Cito-eindopdracht — toestanden-mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: 3 toestanden, overgangen, watercyclus.\n\nVeel succes!",
    checks: [
      {
        q: "Wat is **stollen**?",
        options: ["Vloeibaar → vast", "Vast → vloeibaar", "Gas → vloeibaar", "Vloeibaar → gas"],
        answer: 0,
        wrongHints: [null, "Klopt — bv. water → ijs.", "Dat is smelten.", "Dat is condenseren.", "Dat is verdampen."],
      },
      {
        q: "Hoe ontstaat **regen** uit een wolk?",
        options: ["Waterdruppels groeien en vallen", "Wolk smelt", "Wolk verdampt", "Wolk barst"],
        answer: 0,
        wrongHints: [null, "Klopt — als druppels groot genoeg zijn, vallen ze.", "Wolken kunnen niet smelten — bestaan uit druppels.", "Verdampen is omgekeerd.", "Niet zo bruut."],
      },
      {
        q: "Welke is **GEEN vloeistof**?",
        options: ["IJs", "Water", "Olie", "Melk"],
        answer: 0,
        wrongHints: [null, "Klopt — ijs is vast.", "Wel vloeistof.", "Wel vloeistof.", "Wel vloeistof."],
      },
      {
        q: "Wat **vult een gas**?",
        options: ["De hele ruimte", "Onderkant van ruimte", "Bovenkant", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Vloeistof doet dat.", "Hangt af van zwaarte, maar normaal gas verspreidt zich helemaal.", "Wel iets."],
      },
      {
        q: "**Stoom** is welke toestand?",
        options: ["Gas", "Vloeibaar", "Vast", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Dat zou water zijn.", "Dat zou ijs zijn.", "Wel iets."],
      },
      {
        q: "Wat is **sublimeren**?",
        options: ["Direct van vast naar gas", "Smelten", "Stollen", "Verdampen via vloeibaar"],
        answer: 0,
        wrongHints: [null, "Klopt — speciaal proces.", "Smelten = naar vloeibaar tussen.", "Stollen = vloeibaar → vast.", "Niet hetzelfde — sublimatie slaat vloeibaar over."],
      },
      {
        q: "Bij welke **temperatuur** kookt water (op zeespiegel)?",
        options: ["100 °C","0 °C","50 °C","200 °C"],
        answer: 0,
        wrongHints: [null,"Klopt — kookpunt water = 100°C bij normale luchtdruk.","Niet — dat is vriespunt.","Niet — dat is lauw.","Niet — veel te heet."],
        uitlegPad: {
          stappen: [
            { titel: "Vriespunt + kookpunt water", tekst: "Twee belangrijke temperaturen voor water:\n• **Vriespunt**: **0 °C** — water wordt ijs (stollen)\n• **Kookpunt**: **100 °C** — water wordt damp/stoom (verdampen)\n\nDeze twee zijn de **referentiepunten** voor de Celsius-temperatuurschaal." },
            { titel: "Druk + hoogte beïnvloeden kookpunt", tekst: "Op **zeespiegel** kookt water op 100°C. Maar op **hoge bergen** (lage luchtdruk) kookt het bij lagere temperatuur:\n• Mount Everest (8.849 m): water kookt bij ~70°C\n• Zwitserse alpen: ~95°C\n\nDaarom in bergen: thee minder heet, eten duurder om gaar te koken. Snelkookpan helpt." },
          ],
          woorden: [
            { woord: "kookpunt", uitleg: "Temperatuur waarbij vloeistof verdampt. Water: 100°C op zeespiegel." },
            { woord: "vriespunt", uitleg: "Temperatuur waarbij vloeistof stolt. Water: 0°C." },
            { woord: "Celsius", uitleg: "Temperatuurschaal: 0 = water vriest, 100 = water kookt." },
          ],
          theorie: "Andere stoffen, andere kookpunten:\n• IJzer: 1538°C (smeltpunt)\n• Goud: 1064°C\n• Stikstof: -196°C (vloeibaar bij die temperatuur)\n• Alcohol: ~78°C\n• Water: 100°C\n\nCelsius vernoemd naar Zweedse Anders Celsius (1701-1744).",
          voorbeelden: [
            { type: "stap", tekst: "Stoom uit theeketel = 100°C. Pas op verbranding!" },
          ],
          basiskennis: [{ onderwerp: "Op zeespiegel", uitleg: "100°C geldt bij normale luchtdruk op zeespiegel. In bergen anders." }],
          niveaus: { basis: "100 °C. = A.", simpeler: "Water kookt bij 100°C (op zeespiegel). Daarbij wordt vloeistof gas (stoom). = A.", nogSimpeler: "100°C = A." },
        },
      },
      {
        q: "Bij welke **temperatuur** smelt ijs?",
        options: ["0 °C","100 °C","-10 °C","37 °C"],
        answer: 0,
        wrongHints: [null,"Klopt — smeltpunt ijs = 0°C, gelijk aan vriespunt water.","Niet — kookpunt.","Niet — dan is het nog ijs.","Niet — lichaamstemperatuur."],
        uitlegPad: {
          stappen: [
            { titel: "Smelten + vriezen", tekst: "Bij **0°C** gebeurt twee dingen:\n• Water → IJs (vriezen/stollen)\n• IJs → water (smelten)\n\nHet is hetzelfde getal — heen + terug. Onder 0°C: ijs. Boven 0°C: water (vloeibaar)." },
            { titel: "Cito-feit: gladde wegen", tekst: "Bij temperaturen rond 0°C ontstaan **gladde wegen**. Water op weg-oppervlak kan ineens bevriezen bij dalende temperatuur. Strooidiensten gebruiken **zout** — dat verlaagt vriespunt tot ~-9°C.\n\nDaarom strooien: zout verandert moment van bevriezen. Bij -15°C werkt zout niet meer." },
            { titel: "Cito-tip: vergeten niet", tekst: "**Belangrijke temperaturen onthouden**:\n• 0°C — water/ijs\n• 100°C — water/stoom\n• 37°C — gemiddelde lichaamstemperatuur\n• ~20°C — kamer-temperatuur\n• -18°C — vriezer (modern)\n• 4°C — koelkast" },
          ],
          woorden: [
            { woord: "smelten", uitleg: "Vast → vloeibaar. Bv. ijs → water." },
            { woord: "stollen / vriezen", uitleg: "Vloeibaar → vast. Bv. water → ijs." },
            { woord: "strooizout", uitleg: "Zout dat vriespunt water verlaagt — voorkomt gladheid op weg." },
          ],
          theorie: "Toestandsveranderingen-cyclus:\n```\nIJs ←smelten→ Water ←verdampen→ Stoom\n  ←stollen←       ←condenseren←\n```\nAlle veranderingen hebben omkeerbaar tegendeel.",
          voorbeelden: [
            { type: "stap", tekst: "Sneeuwman in zon: smelt langzaam (0°C → boven 0°C)." },
          ],
          basiskennis: [{ onderwerp: "Niet altijd 0°C", uitleg: "Zout water (zee) bevriest bij ~-2°C — daarom NL-Noordzee zelden bevriest." }],
          niveaus: { basis: "0 °C. = A.", simpeler: "IJs smelt bij 0°C — wordt water. Hetzelfde temperatuur als waarbij water vriest. = A.", nogSimpeler: "0°C = A." },
        },
      },
      {
        q: "**Condenseren** is wat?",
        options: ["Gas → vloeibaar (bv. damp op koud raam)","Vast → vloeibaar","Vast → gas","Vloeibaar → gas"],
        answer: 0,
        wrongHints: [null,"Klopt — damp wordt weer water op koude oppervlakte.","Niet — dat is smelten.","Niet — dat is sublimeren.","Niet — dat is verdampen (tegenovergesteld)."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is condensatie?", tekst: "**Condenseren** = **gas wordt vloeibaar**. Tegenovergestelde van verdampen.\n\nVoorbeelden:\n• Damp in douche → druppels op spiegel\n• Adem op koud raam in winter → witte 'wolk' (waterdamp uit adem condenseert op koud glas)\n• Wolken vormen = waterdamp condenseert op stof-deeltjes\n• Dauwdruppels 's morgens op gras" },
            { titel: "Wanneer condenseert iets?", tekst: "Damp condenseert bij **temperatuur-daling** of **drukverhoging**:\n• Warme damp raakt koud oppervlak → vloeibaar\n• Hoog in lucht (koud) → wolken\n• Compressor in koelkast comprimeert gas → vloeibaar maken\n\nIn waterkringloop: zon verdampt zeewater → omhoog → koelt af → CONDENSEERT in wolken → regen." },
          ],
          woorden: [
            { woord: "condenseren", uitleg: "Gas → vloeibaar. Tegenovergestelde van verdampen." },
            { woord: "dauw", uitleg: "Druppels op gras 's morgens — water dat uit lucht condenseerde 's nachts." },
            { woord: "condens", uitleg: "Het gecondenseerde water dat je ziet (op raam, in douche, op koude glas)." },
          ],
          theorie: "**Toestandsveranderingen-overzicht**:\n• Smelten: vast → vloeibaar (ijs → water)\n• Stollen: vloeibaar → vast (water → ijs)\n• Verdampen: vloeibaar → gas (water → damp)\n• Condenseren: gas → vloeibaar (damp → water)\n• Sublimeren: vast → gas (droog ijs → CO₂-gas)\n• Rijp/depositie: gas → vast (waterdamp → ijskristallen)",
          voorbeelden: [
            { type: "stap", tekst: "Glas koude limonade in zomer → druppels buitenkant = lucht-vocht condenseert op glas." },
          ],
          basiskennis: [{ onderwerp: "Niet smelten", uitleg: "Condenseren ≠ smelten. Smelten = vast → vloeibaar (ijs). Condenseren = gas → vloeibaar (damp)." }],
          niveaus: { basis: "Gas → vloeibaar. = A.", simpeler: "Condenseren = damp/gas wordt water. Voorbeeld: spiegel beslagen na douche. = A.", nogSimpeler: "Damp → water = A." },
        },
      },
      { q: "Welke 3 **hoofdtoestanden** van stof zijn er?", options: ["Vast / vloeibaar / gas","2","5","Niet bestaand"], answer: 0, wrongHints: [null,"Klopt.","Te weinig.","Te veel.","Wel."] },
      { q: "Bij welke temperatuur **smelt water**?", options: ["0°C","100°C","20°C","−10°C"], answer: 0, wrongHints: [null,"Klopt — vriespunt.","Kookpunt.","Niet smeltpunt.","Te koud."] },
      { q: "Bij welke temperatuur **kookt water** (op zeeniveau)?", options: ["100°C","0°C","37°C","50°C"], answer: 0, wrongHints: [null,"Klopt.","Smeltpunt.","Lichaamstemp.","Niet."] },
      { q: "Wat is **smelten**?", options: ["Vast wordt vloeibaar","Vloeibaar wordt vast","Gas wordt vloeibaar","Vast wordt gas"], answer: 0, wrongHints: [null,"Klopt.","Stollen.","Condenseren.","Sublimeren."] },
      { q: "Wat is **stollen**?", options: ["Vloeibaar wordt vast","Vast wordt vloeibaar","Verdampen","Condenseren"], answer: 0, wrongHints: [null,"Klopt — bv. water → ijs.","Smelten.","Niet.","Niet."] },
      { q: "Wat is **verdampen**?", options: ["Vloeibaar wordt gas","Gas wordt vloeibaar","Smelten","Stollen"], answer: 0, wrongHints: [null,"Klopt.","Condenseren.","Niet.","Niet."] },
      { q: "**IJs op een glas** is welke toestand?", options: ["Vast","Vloeibaar","Gas","Plasma"], answer: 0, wrongHints: [null,"Klopt.","Niet.","Niet.","Niet bij water-stof."] },
      { q: "**Stoom uit kookpot** is?", options: ["Gas","Vloeibaar","Vast","Plasma"], answer: 0, wrongHints: [null,"Klopt — waterdamp.","Niet.","Niet.","Niet."] },
      { q: "**Smelt-** en **kookpunt** zijn?", options: ["Vaste eigenschappen van een stof","Random","Niet bestaand","Niet relevant"], answer: 0, wrongHints: [null,"Klopt — uniek per stof.","Niet.","Wel.","Wel."] },
      { q: "Wat is **massa**?", options: ["Hoeveelheid materie","Gewicht","Volume","Niet relevant"], answer: 0, wrongHints: [null,"Klopt — kg.","Wel verwant maar verschillend.","Ruimte-inname.","Wel."] },
      { q: "Wat is een **mengsel**?", options: ["Meerdere stoffen samen","Zuivere stof","Element","Niet bestaand"], answer: 0, wrongHints: [null,"Klopt — bv. zout-water.","Tegengestelde.","Specifieker.","Wel."] },
      { q: "**Lucht** is welke toestand?", options: ["Gas","Vloeibaar","Vast","Mengsel van gassen"], answer: 0, wrongHints: [null,"Klopt op hoog niveau.","Niet.","Niet.","Ook correct — specifieker."] },
      { q: "Wat is **verdrijven** (vloeistof)?", options: ["Plaats innemen in vloeistof — Archimedes","Verdwijnen","Mengen","Smelten"], answer: 0, wrongHints: [null,"Klopt — drijfvermogen.","Niet.","Niet.","Niet."] },
      { q: "Wat is **sublimeren**?", options: ["Vast direct naar gas","Vloeibaar naar gas","Gas naar vast","Niet bestaand"], answer: 0, wrongHints: [null,"Klopt — droog ijs.","Verdampen.","Rijp.","Wel."] },
      { q: "Welke **stof** zet uit bij verwarming (gewoonlijk)?", options: ["Bijna alle stoffen","Geen","Alleen water","Alleen ijs"], answer: 0, wrongHints: [null,"Klopt — thermische uitzetting.","Niet — wel uitzetting.","Niet — geldt breder.","Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const toestandStoffenPo = {
  id: "toestand-stoffen-po",
  title: "Vast, vloeibaar, gas (groep 6-8)",
  emoji: "🧊",
  level: "groep6-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Natuur — toestanden van stoffen + watercyclus",
  prerequisites: [
    { id: "dieren-seizoenen-natuur", title: "Natuur (basis)", niveau: "po-1F" },
  ],
  intro:
    "Toestanden van stoffen voor groep 6-8 — vast/vloeibaar/gas, eigenschappen van vloeistoffen, gassen om ons heen, 6 overgangen (smelten/stollen/verdampen/condenseren), watercyclus. ~15 min.",
  triggerKeywords: [
    "vast", "vloeibaar", "gas", "stof", "toestand",
    "smelten", "stollen", "verdampen", "condenseren",
    "watercyclus", "regenen", "wolk", "stoom", "lucht",
  ],
  chapters,
  steps,
};

export default toestandStoffenPo;
