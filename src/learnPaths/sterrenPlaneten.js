// Leerpad: Sterren en planeten — ons zonnestelsel
// 9 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: groep 5-8 basisschool.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(0, 5, 20, 0.4)",
  zon: "#ffd54f",
  mercurius: "#bbbbbb",
  venus: "#ffaa44",
  aarde: "#5d9cec",
  maan: "#cccccc",
  mars: "#ef6c00",
  jupiter: "#dba07a",
  saturnus: "#e0c080",
  uranus: "#88e0e0",
  neptunus: "#4060c0",
};

const stepEmojis = ["☀️","🌞","🪐","🌍","🔴","🌑","🪨","☄️","🏆"];

const chapters = [
  { letter: "A", title: "De zon + sterren", emoji: "☀️", from: 0, to: 0 },
  { letter: "B", title: "Het zonnestelsel", emoji: "🌞", from: 1, to: 1 },
  { letter: "C", title: "Aarde-achtige planeten", emoji: "🌍", from: 2, to: 4 },
  { letter: "D", title: "Gas- en ijsreuzen", emoji: "🪐", from: 5, to: 6 },
  { letter: "E", title: "Andere objecten + eindopdracht", emoji: "🏆", from: 7, to: 8 },
];

// Zonnestelsel-overzicht (alle 8 planeten in een rij, niet op echte schaal).
function zonnestelselSvg(highlight = null) {
  const planeten = [
    { naam: "Mercurius", x: 35, r: 4, kleur: COLORS.mercurius },
    { naam: "Venus", x: 60, r: 7, kleur: COLORS.venus },
    { naam: "Aarde", x: 90, r: 8, kleur: COLORS.aarde },
    { naam: "Mars", x: 118, r: 6, kleur: COLORS.mars },
    { naam: "Jupiter", x: 160, r: 22, kleur: COLORS.jupiter },
    { naam: "Saturnus", x: 215, r: 19, kleur: COLORS.saturnus },
    { naam: "Uranus", x: 258, r: 12, kleur: COLORS.uranus },
    { naam: "Neptunus", x: 290, r: 11, kleur: COLORS.neptunus },
  ];
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>

<!-- Sterren in achtergrond -->
${[[40,30],[80,20],[120,40],[180,15],[220,30],[270,25],[300,45],[15,80],[45,160],[85,170],[150,180],[230,165],[280,180],[300,90],[15,120],[55,55]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="${Math.random() < 0.3 ? 1.5 : 0.8}" fill="#fff" opacity="0.7"/>`).join('')}

<!-- Zon -->
<circle cx="0" cy="100" r="35" fill="${COLORS.zon}" opacity="0.95"/>
<circle cx="0" cy="100" r="35" fill="none" stroke="${COLORS.zon}" stroke-width="3" opacity="0.4">
  <animate attributeName="r" values="35;42;35" dur="3s" repeatCount="indefinite"/>
</circle>

<!-- Planeten -->
${planeten.map(p => {
  const isHL = highlight === p.naam.toLowerCase();
  const opa = highlight && !isHL ? 0.4 : 1;
  return `
<circle cx="${p.x}" cy="100" r="${p.r}" fill="${p.kleur}" opacity="${opa}" stroke="${isHL ? '#fff' : 'transparent'}" stroke-width="2"/>
${p.naam === 'Saturnus' ? `<ellipse cx="${p.x}" cy="100" rx="${p.r + 8}" ry="3" fill="none" stroke="${p.kleur}" stroke-width="1.5" opacity="${opa}"/>` : ''}
<text x="${p.x}" y="${100 + p.r + 14}" text-anchor="middle" fill="${isHL ? '#fff' : COLORS.muted}" font-size="9" font-family="Arial" font-weight="${isHL ? 'bold' : 'normal'}">${p.naam}</text>`;
}).join('')}

<text x="160" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Niet op schaal — werkelijke afstanden zijn gigantisch</text>
</svg>`;
}

// Aarde + Maan
function aardeMaanSvg() {
  return `<svg viewBox="0 0 280 200">
<rect x="0" y="0" width="280" height="200" fill="${COLORS.paper}"/>
${[[40,30],[80,20],[120,40],[180,15],[220,30],[270,25]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="0.8" fill="#fff" opacity="0.7"/>`).join('')}

<!-- Aarde -->
<circle cx="100" cy="100" r="40" fill="${COLORS.aarde}" opacity="0.85"/>
<!-- Aarde details -->
<path d="M 75 100 Q 90 80 110 90 Q 130 100 130 115 Q 110 130 90 120 Q 70 115 75 100 Z" fill="${COLORS.good}" opacity="0.7"/>
<text x="100" y="105" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">Aarde</text>

<!-- Maan -->
<circle cx="220" cy="80" r="14" fill="${COLORS.maan}" opacity="0.85"/>
<circle cx="216" cy="76" r="2" fill="#888"/>
<circle cx="223" cy="83" r="1.5" fill="#888"/>
<text x="220" y="115" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">Maan</text>

<!-- Pijl naar afstand -->
<line x1="142" y1="100" x2="206" y2="80" stroke="${COLORS.warm}" stroke-width="1" stroke-dasharray="3,3"/>
<text x="174" y="83" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial">~384.000 km</text>

<text x="140" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">De Maan draait om de Aarde — elke 27 dagen</text>
<text x="140" y="185" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Geeft eb en vloed + maanstanden</text>
</svg>`;
}

const steps = [
  {
    title: "De zon en sterren",
    explanation: "**De zon** is de **grootste, dichtstbijzijnde ster** voor ons. Vanaf de Aarde lijkt 'ie heel groot, maar dat komt omdat 'ie 'dichtbij' staat (op kosmische schaal).\n\n**Wat is een ster?**\nEen **bal van gas** (vooral waterstof + helium) die zoveel **kernfusie** maakt dat 'ie **licht en warmte** produceert. Sterren branden miljarden jaren — onze zon brandt al ~4,6 miljard jaar en heeft nog ~5 miljard te gaan.\n\n**Feiten over de zon**:\n• **Diameter**: ~1,4 miljoen km (109× de aarde — er passen ~1,3 miljoen aardes in!)\n• **Massa**: 99,86% van het hele zonnestelsel\n• **Oppervlakte-temperatuur**: ~5.500 °C\n• **Kern-temperatuur**: ~15 miljoen °C\n• **Afstand tot Aarde**: ~150 miljoen km (= 1 AE = 'astronomische eenheid')\n• **Licht doet er 8 minuten over** om bij ons te komen\n\n**De Melkweg — onze 'sterren-stad'**\nOnze zon is maar **één** van **~200-400 miljard sterren** in de Melkweg. Andere sterren staan veel verder weg.\n\n**Dichtstbijzijnde ster (na de zon)**: **Proxima Centauri** — ~4,2 lichtjaar weg. Eén lichtjaar = afstand die licht in 1 jaar aflegt = ~9.500 miljard km.\n\n**Andere sterrenstelsels**\nDe Melkweg is maar één van **biljoenen sterrenstelsels** in het universum. Onze buurman: **Andromeda**, 2,5 miljoen lichtjaar weg.\n\n**Waarom zien we sterren als puntjes?**\nOmdat ze zóóó ver weg zijn dat hun licht heel zwak bij ons aankomt. De zon is 'dichtbij' (8 minuten licht), andere sterren zijn jaren tot miljoenen lichtjaren weg.",
    svg: zonnestelselSvg("zon"),
    checks: [
      {
        q: "Wat is een **ster**?",
        options: ["Een bal van gas die kernfusie doet","Een grote rotsblok","Een planeet die geen leven kan dragen","Een soort komeet"],
        answer: 0,
        wrongHints: [null,"Sterren zijn gas, geen rots.","Sterren zijn geen planeten.","Kometen zijn iets anders (klein + ijs)."],
        uitlegPad: {
          stappen: [{ titel: "Ster = bal gas met kernfusie", tekst: "Een ster is een bal van gas (vooral waterstof + helium) waarin kernfusie plaatsvindt — vandaar licht + warmte. Onze zon is een ster." }],
          woorden: [{ woord: "kernfusie", uitleg: "samenvoegen van atomen → geeft energie" }],
          theorie: "Sterren branden miljarden jaren. Onze zon: ~4,6 mld jaar oud, nog ~5 mld te gaan.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Zon = dichtstbijzijnde ster. Proxima Centauri = volgende, 4,2 lichtjaar weg" }],
          basiskennis: [{ onderwerp: "gas niet rots", uitleg: "geen vast oppervlak" }],
          niveaus: { basis: "Bal gas + kernfusie.", simpeler: "Gas-bal die brandt.", nogSimpeler: "Vurig gas." },
        },
      },
      {
        q: "Hoe lang doet **licht van de zon** erover om bij ons te komen?",
        options: ["~8 minuten","~1 seconde","~24 uur","~1 jaar"],
        answer: 0,
        wrongHints: [null,"Te snel — zon is 150 miljoen km weg.","Te lang — geen volle dag nodig.","Een lichtjaar is van andere sterren, niet de zon."],
        uitlegPad: {
          stappen: [{ titel: "8 lichtminuten", tekst: "Zon is 150 miljoen km weg. Licht reist 300.000 km/s → 150.000.000/300.000 = 500 sec ≈ 8 min." }],
          woorden: [{ woord: "lichtsnelheid", uitleg: "300.000 km per seconde" }],
          theorie: "Voor andere sterren rekenen we in lichtjaar = 1 jaar reis voor licht.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Als zon nu zou doven, zien wij dat pas 8 min later" }],
          basiskennis: [{ onderwerp: "tijd × snelheid = afstand", uitleg: "ook andersom" }],
          niveaus: { basis: "~8 minuten.", simpeler: "Een paar minuten.", nogSimpeler: "Acht." },
        },
      },
      {
        q: "Hoe heet onze sterrenstelsel?",
        options: ["Melkweg","Andromeda","Zonnestelsel","Pluto"],
        answer: 0,
        wrongHints: [null,"Dat is onze BUURsterrenstelsel.","Dat is alleen de zon + planeten — onderdeel van Melkweg.","Dat is een dwergplaneet."],
        uitlegPad: {
          stappen: [{ titel: "Melkweg = onze sterrenstelsel", tekst: "Onze zon is één van 200-400 miljard sterren in de Melkweg. Spiraalvormig met ons in de buitenwijken." }],
          woorden: [{ woord: "sterrenstelsel", uitleg: "verzameling sterren bijeen gehouden door zwaartekracht" }],
          theorie: "Melkweg = ons stelsel. Andromeda = buurman. Biljoenen stelsels in universum.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Bij heldere nacht: melkachtige band aan hemel = onze Melkweg vanaf binnenuit" }],
          basiskennis: [{ onderwerp: "stelsel ≠ zonnestelsel", uitleg: "zonnestelsel = zon + planeten" }],
          niveaus: { basis: "Melkweg.", simpeler: "Onze sterrenfamilie.", nogSimpeler: "Melkweg." },
        },
      },
    ],
  },
  {
    title: "Het zonnestelsel — 8 planeten",
    explanation: "Ons **zonnestelsel** bestaat uit:\n\n• **De zon** — in het midden\n• **8 planeten** — draaien er omheen\n• Plus: dwergplaneten, manen, asteroïden, kometen\n\n**De 8 planeten** *(van dichtbij naar ver van zon)*:\n\n| # | Planeet | Type | Diameter | 1 jaar* |\n|---|---|---|---|---|\n| 1 | **Mercurius** | rotsplaneet | 4.879 km | 88 dagen |\n| 2 | **Venus** | rotsplaneet | 12.104 km | 225 dagen |\n| 3 | **Aarde** | rotsplaneet | 12.742 km | 365 dagen |\n| 4 | **Mars** | rotsplaneet | 6.779 km | 687 dagen |\n| 5 | **Jupiter** | gasreus | 139.820 km | 12 jaar |\n| 6 | **Saturnus** | gasreus | 116.460 km | 29 jaar |\n| 7 | **Uranus** | ijsreus | 50.724 km | 84 jaar |\n| 8 | **Neptunus** | ijsreus | 49.244 km | 165 jaar |\n\n*= tijd voor 1 baan rond de zon = 1 'jaar' op die planeet.\n\n**Geheugenezel** *(Engels)*: '**M**y **V**ery **E**ducated **M**other **J**ust **S**erved **U**s **N**oodles' = M, V, E, M, J, S, U, N.\n\n**Of in het Nederlands**: '**M**ijn **V**ader **A**at **M**et **J**onge **S**oldaten **U**ie**N**roomsoep'.\n\n**Twee groepen**:\n\n**Aardse planeten** *(rotsplaneten, dichter bij zon)*\n• Mercurius, Venus, Aarde, Mars\n• Vast oppervlak — je kan erop staan\n• Klein\n• Weinig manen\n\n**Reuzen-planeten** *(gas + ijs, verder weg)*\n• Jupiter, Saturnus (gasreuzen)\n• Uranus, Neptunus (ijsreuzen)\n• Geen vast oppervlak — vooral gas\n• Groot\n• Veel manen + ringen\n\n**Pluto** is sinds 2006 GEEN planeet meer — gedegradeerd tot **dwergplaneet** omdat 'ie te klein is en z'n baan deelt met andere objecten.",
    svg: zonnestelselSvg(),
    checks: [
      {
        q: "Hoeveel planeten heeft ons zonnestelsel?",
        options: ["8","9","7","12"],
        answer: 0,
        wrongHints: [null,"Pluto telde mee tot 2006 — toen 9. Nu 8.","Te weinig — 8 is correct.","Veel te veel."],
        uitlegPad: {
          stappen: [{ titel: "8 planeten sinds 2006", tekst: "Sinds Pluto in 2006 dwergplaneet werd, tellen we 8 planeten: Mercurius, Venus, Aarde, Mars, Jupiter, Saturnus, Uranus, Neptunus." }],
          woorden: [{ woord: "ezelsbruggetje", uitleg: "M-V-A-M-J-S-U-N" }],
          theorie: "MVAMJSUN — Mijn Vader At Met Jonge Soldaten Uien-roomsoep.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Pluto is dwerg, niet meegerekend in 8" }],
          basiskennis: [{ onderwerp: "definitie planeet", uitleg: "groot + eigen baan + zuivert omgeving" }],
          niveaus: { basis: "8.", simpeler: "Acht.", nogSimpeler: "8." },
        },
      },
      {
        q: "Welke planeet is het **dichtst bij de zon**?",
        options: ["Mercurius","Venus","Aarde","Mars"],
        answer: 0,
        wrongHints: [null,"Venus is #2.","Aarde is #3.","Mars is #4."],
        uitlegPad: {
          stappen: [{ titel: "Mercurius = #1", tekst: "Mercurius is de planeet dichtst bij de zon. Klein en heet overdag (430°C), heel koud 's nachts (-180°C)." }],
          woorden: [{ woord: "Mercurius", uitleg: "Romeinse boodschappergod" }],
          theorie: "Volgorde: M-V-A-M-J-S-U-N (van zon naar buiten).",
          voorbeelden: [{ type: "voorbeeld", tekst: "1 jaar op Mercurius = 88 aardedagen (snelste baan)" }],
          basiskennis: [{ onderwerp: "kleinste planeet", uitleg: "kleinste van de 8" }],
          niveaus: { basis: "Mercurius.", simpeler: "Eerste planeet.", nogSimpeler: "Mercurius." },
        },
      },
      {
        q: "Welke planeten zijn **gasreuzen**?",
        options: ["Jupiter en Saturnus","Mercurius en Venus","Aarde en Mars","Uranus en Neptunus"],
        answer: 0,
        wrongHints: [null,"Mercurius en Venus zijn rotsplaneten.","Aarde en Mars zijn rotsplaneten.","Uranus en Neptunus zijn ijs-reuzen, niet gas-reuzen."],
        uitlegPad: {
          stappen: [{ titel: "Gasreuzen: Jupiter + Saturnus", tekst: "Jupiter en Saturnus bestaan vooral uit waterstof + helium (gas zoals zon). Ze hebben geen vast oppervlak. Uranus en Neptunus zijn ijsreuzen (water/methaan/ammoniak)." }],
          woorden: [{ woord: "gasreus", uitleg: "grote planeet zonder vaste grond" }],
          theorie: "4 binnenste = rotsplaneten. 2 daarna = gasreuzen. 2 verste = ijsreuzen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Jupiter: 1300 aardes passen erin. Wel echt gas tot diep" }],
          basiskennis: [{ onderwerp: "gas vs ijs", uitleg: "ander materiaal" }],
          niveaus: { basis: "Jupiter + Saturnus.", simpeler: "Gas-planeten 5 en 6.", nogSimpeler: "Reuzen 1 en 2." },
        },
      },
    ],
  },
  {
    title: "Mercurius en Venus",
    explanation: "**Mercurius** *(planeet 1)*\n• **Kleinste planeet** in het zonnestelsel.\n• Dichtst bij de zon.\n• Van **-180 °C 's nachts** tot **+430 °C overdag** — gigantisch verschil! Geen lucht (atmosfeer) om de warmte vast te houden.\n• 1 jaar = **88 aardedagen** — kortste in zonnestelsel.\n• 1 dag = bizar: **176 aardedagen** (rotaties zijn traag).\n• Geen manen.\n• Vernoemd naar de Romeinse boodschappergod.\n\n**Mercurius is moeilijk te zien** vanaf de Aarde — meestal te dicht bij de zon (verstopt in zonlicht). Soms zichtbaar net na zonsondergang of voor zonsopkomst.\n\n**Venus** *(planeet 2)*\n• Bijna **even groot als de Aarde** (12.104 km vs 12.742 km).\n• **Heetste planeet** — ~465 °C op het oppervlak. Heter dan Mercurius door dikke atmosfeer (CO₂) die warmte vasthoudt — broeikaseffect op stille stand.\n• Atmosfeer bestaat vooral uit **kooldioxide (CO₂)** + zwavelzuur-wolken.\n• **Druk** op oppervlakte = 90× die van Aarde — alsof je 1 km diep onder water bent.\n• 1 jaar = **225 aardedagen**.\n• 1 dag = **243 aardedagen** — langer dan een jaar! En draait andersom dan andere planeten.\n• Helderste object in de avondhemel (na maan) — bekend als '**Avondster**' of '**Morgenster**'.\n\n**Onbewoonbaar**: door de hitte, druk, en zwavelzuurwolken. Zelfs robotsondes overleven slechts uren.\n\n**Vernoemd naar de Romeinse godin van schoonheid**.",
    svg: zonnestelselSvg("mercurius"),
    checks: [
      {
        q: "Welke planeet is **het dichtst bij de zon**?",
        options: ["Mercurius","Venus","Aarde","Pluto"],
        answer: 0,
        wrongHints: [null,"Venus is #2.","Aarde is #3.","Pluto is geen planeet meer."],
        uitlegPad: {
          stappen: [{ titel: "Mercurius dichtst", tekst: "Mercurius is #1 — dichtst bij zon. Venus is #2, Aarde #3, Mars #4 (rotsplaneten)." }],
          woorden: [{ woord: "binnenste planeten", uitleg: "Mercurius t/m Mars" }],
          theorie: "Dichter bij zon = hoger temperatuur (overdag) + kortere baan.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Mercurius doet 88 dagen over 1 baan, Mars 687" }],
          basiskennis: [{ onderwerp: "afstandstabel", uitleg: "M-V-A-M binnenste vier" }],
          niveaus: { basis: "Mercurius.", simpeler: "Eerste.", nogSimpeler: "#1." },
        },
      },
      {
        q: "Welke planeet is **het heetst** op het oppervlak?",
        options: ["Venus","Mercurius","Mars","Jupiter"],
        answer: 0,
        wrongHints: [null,"Door dikke broeikas-atmosfeer is Venus heter.","Mercurius is dichterbij maar heeft geen atmosfeer.","Mars is juist koud.","Jupiter is veel verder weg."],
        uitlegPad: {
          stappen: [{ titel: "Venus = heetst (~465°C)", tekst: "Venus heeft dikke CO₂-atmosfeer → broeikaseffect op steroïden. Houdt warmte vast → ~465°C oppervlak. Hete dan Mercurius (die geen atmosfeer heeft)." }],
          woorden: [{ woord: "broeikaseffect", uitleg: "warmte vasthouden door atmosfeer" }],
          theorie: "Niet de planeet dichtst bij zon is heetst, maar die met sterkste broeikaseffect.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Aarde heeft mild broeikaseffect — anders zou het -18°C zijn. Venus = extreem" }],
          basiskennis: [{ onderwerp: "CO₂-atmosfeer", uitleg: "Venus 95% CO₂" }],
          niveaus: { basis: "Venus.", simpeler: "Broeikas-planeet.", nogSimpeler: "Venus heetst." },
        },
      },
      {
        q: "Hoe heet de helderste object aan de avondhemel (na de maan)?",
        options: ["Venus","Mercurius","Mars","Jupiter"],
        answer: 0,
        wrongHints: [null,"Venus = Avondster.","Mercurius is moeilijk te zien.","Mars is rood maar minder helder.","Jupiter is wel zichtbaar maar minder helder."],
        uitlegPad: {
          stappen: [{ titel: "Venus = Avondster", tekst: "Venus is na de maan het helderste object aan onze hemel. Vaak zichtbaar net na zonsondergang (Avondster) of vroeg voor zonsopkomst (Morgenster)." }],
          woorden: [{ woord: "Avondster/Morgenster", uitleg: "twee namen voor Venus, afhankelijk van tijd" }],
          theorie: "Venus weerkaatst veel zonlicht door de dikke wolken — vandaar de helderheid.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Een felle witte ster vlak na zonsondergang = vaak Venus" }],
          basiskennis: [{ onderwerp: "geen ster", uitleg: "Venus is planeet, geen ster" }],
          niveaus: { basis: "Venus.", simpeler: "Heldere planeet.", nogSimpeler: "Venus." },
        },
      },
    ],
  },
  {
    title: "Aarde + Maan",
    explanation: "**Aarde** *(planeet 3)*\n• **Onze planeet** — enige bekende met **leven**.\n• 71% bedekt met **water** (oceanen).\n• Atmosfeer: 78% stikstof + 21% zuurstof + 1% andere gassen.\n• **Magnetisch veld** beschermt tegen schadelijke straling van de zon.\n• 1 jaar = **365,25 dagen** (vandaar elke 4 jaar een schrikkeljaar met dag erbij).\n• 1 dag = 24 uur (rotatie om eigen as).\n• **Schuine stand**: 23,5° — daardoor hebben we **seizoenen**.\n• Ouderdom: ~4,5 miljard jaar.\n• 1 maan.\n\n**Hoe ontstond de aarde?**\nUit een **stofschijf** rond de jonge zon, ~4,5 miljard jaar geleden. Stof + steentjes klonterden samen, werden steeds groter, gigantische klap met andere proto-planeet vormde de Maan, en koelde af.\n\n**De Maan**\n• Diameter: ~3.474 km (= 1/4 van Aarde).\n• Afstand: ~384.000 km (klinkt veel maar dat is in 'astronomische context' heel dichtbij).\n• 1 baan rond Aarde = ~27 dagen.\n• Geen atmosfeer — geen wind, geen geluid.\n• **Maanstanden**: 8 fases (nieuwe maan, halve maan, volle maan, etc.) door licht van de zon dat verschillend de maan raakt.\n• **Eb en vloed** worden veroorzaakt door de **zwaartekracht van de Maan** die het zeewater 'aantrekt'.\n• Mensen zijn **6 keer geland** op de Maan (Apollo-missies, 1969-1972).\n\n**Eerste mens op de Maan**: **Neil Armstrong** (USA), 20 juli 1969 — beroemde quote: *\"That's one small step for [a] man, one giant leap for mankind.\"*\n\n**Ontstaan van de Maan**:\nVolgens **'reuzen-inslag'-theorie**: een proto-planeet ter grootte van Mars botste vroeger met de Aarde. Brokstukken vormden samen de Maan.",
    svg: aardeMaanSvg(),
    checks: [
      {
        q: "Wat veroorzaakt **eb en vloed** op Aarde?",
        options: ["Zwaartekracht van de Maan","Wind","Onderzeese aardbevingen","De zon"],
        answer: 0,
        wrongHints: [null,"De zon helpt ook iets, maar maan is hoofdoorzaak.","Wind veroorzaakt golven — niet eb/vloed.","Aardbevingen geven tsunami's, geen eb/vloed.","Niet hoofdoorzaak."],
        uitlegPad: {
          stappen: [{ titel: "Maan trekt aan water", tekst: "Door de zwaartekracht van de Maan wordt zeewater 'opgetrokken' naar de Maan-kant. Twee keer per dag een vloedgolf rondom Aarde." }],
          woorden: [{ woord: "getijden", uitleg: "eb + vloed cyclus" }],
          theorie: "Cyclus ~12u25min — twee keer per dag eb + vloed.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Springtij = Maan + Zon trekken samen → extra hoge vloed" }],
          basiskennis: [{ onderwerp: "zwaartekracht over afstand", uitleg: "trekt aan oceanen" }],
          niveaus: { basis: "Maan-zwaartekracht.", simpeler: "Maan trekt water.", nogSimpeler: "Maan." },
        },
      },
      {
        q: "Wie was de **eerste mens op de Maan**?",
        options: ["Neil Armstrong","Buzz Aldrin","Yuri Gagarin","Christopher Columbus"],
        answer: 0,
        wrongHints: [null,"Buzz Aldrin was 2e (samen met Armstrong, Apollo 11).","Gagarin was eerste mens in de ruimte (1961) — niet op de Maan.","Columbus zeilde, ging niet de ruimte in."],
        uitlegPad: {
          stappen: [{ titel: "Neil Armstrong, 20 juli 1969", tekst: "Apollo 11-missie. Eerste voetstap van Armstrong op het Maan-oppervlak: 'That's one small step for man, one giant leap for mankind.'" }],
          woorden: [{ woord: "Apollo", uitleg: "Amerikaans Maan-programma 1961-1972" }],
          theorie: "6 mensen-landingen totaal (1969-1972), allemaal Amerikaans.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Buzz Aldrin liep 2e. Michael Collins bleef in de baan rond de Maan" }],
          basiskennis: [{ onderwerp: "1969", uitleg: "tijdens Koude Oorlog" }],
          niveaus: { basis: "Neil Armstrong.", simpeler: "Amerikaan, 1969.", nogSimpeler: "Armstrong." },
        },
      },
      {
        q: "Hoeveel **dagen** duurt 1 baan van de Maan om de Aarde?",
        options: ["~27 dagen","~7 dagen","~365 dagen","~1 dag"],
        answer: 0,
        wrongHints: [null,"7 dagen = 1 week.","365 = aarde-baan om zon (= 1 jaar).","1 dag = aarde-rotatie."],
        uitlegPad: {
          stappen: [{ titel: "Maan ~27 dagen om Aarde", tekst: "De Maan draait in 27,3 dagen één keer rond de Aarde. Daardoor zien we elke ~29,5 dagen volle maan (verschil komt door beweging van Aarde rond zon)." }],
          woorden: [{ woord: "maancyclus", uitleg: "fases van nieuwe → volle → nieuwe maan" }],
          theorie: "Sidererische omloop: 27,3 dagen. Synodische (van volle tot volle maan): 29,5 dagen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Maand komt van 'maan' — oorspronkelijk gebaseerd op maancyclus" }],
          basiskennis: [{ onderwerp: "om Aarde", uitleg: "Maan is Aarde-maan" }],
          niveaus: { basis: "27 dagen.", simpeler: "Ongeveer een maand.", nogSimpeler: "Maand." },
        },
      },
    ],
  },
  {
    title: "Mars — de rode planeet",
    explanation: "**Mars** *(planeet 4)*\n• **Rode planeet** — door **ijzer-oxide** (roest!) op het oppervlak.\n• Diameter: ~6.779 km (~ helft van Aarde).\n• Atmosfeer: heel **dun** — vooral CO₂. Dunne lucht.\n• Temperatuur: gemiddeld **-60 °C** — overdag soms +20°C, 's nachts -130°C.\n• 1 jaar = **687 aardedagen** (~1,9 jaar).\n• 1 dag = ~24,6 uur (bijna gelijk aan Aarde!).\n• 2 manen: **Phobos** + **Deimos** (kleine, klompvormige).\n\n**Bekende kenmerken op Mars**:\n• **Olympus Mons** — de **hoogste vulkaan in het zonnestelsel** (~25 km hoog, drie keer Mount Everest!).\n• **Valles Marineris** — gigantisch kloofstelsel, 4.000 km lang.\n• Ooit waren er **rivieren en meren** — sporen daarvan nog zichtbaar (uitgedroogde stroombeddingen).\n\n**Robotrijden op Mars**:\n• Verschillende robots ('rovers') hebben Mars verkend.\n• Bekendste: **Curiosity** (NASA, 2012-nu) en **Perseverance** (NASA, 2021-nu) — die laatste heeft ook een mini-helikopter genaamd **Ingenuity**.\n• Wat ze zoeken: **sporen van leven** (ooit microben?).\n• Geen mensen geland — nog. Plannen voor 2030-2040 (SpaceX, NASA Artemis).\n\n**Kan er leven op Mars?**\n• Vroeger waarschijnlijk **wel** mogelijk — er was water + warmer klimaat.\n• Nu: misschien **microben in de bodem** (bacteriën). Niet bewezen.\n• **Mensen** zouden er met grote moeite kunnen overleven — koepel, zuurstof, druk meebrengen.\n\n**Vernoemd naar Romeinse god van oorlog** (rood = bloed-symbool).",
    svg: zonnestelselSvg("mars"),
    checks: [
      {
        q: "Waarom heet Mars de **rode planeet**?",
        options: ["IJzer-oxide (roest) op het oppervlak","Vulkanen die rood gloeien","Door speciaal zonlicht","Hij is roodbruin gekleurd door bevroren bloed"],
        answer: 0,
        wrongHints: [null,"De vulkaan Olympus Mons is wel actief geweest maar dat geeft geen rode kleur.","Niet door zonlicht.","Geen bloed — geen leven daar."],
        uitlegPad: {
          stappen: [{ titel: "IJzer-oxide = roest", tekst: "Mars-bodem bevat veel ijzer dat oxideert (roest, Fe₂O₃) → rode kleur. Hele planeet ziet eruit als een grote roestbruine woestijn." }],
          woorden: [{ woord: "oxidatie", uitleg: "reactie met zuurstof → roest" }],
          theorie: "Sporen van vroegere atmosfeer met meer zuurstof verklaren de oxidatie.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Net als oud roestig ijzer op aarde — alleen op planeet-schaal" }],
          basiskennis: [{ onderwerp: "ijzer + O₂ = roest", uitleg: "chemische reactie" }],
          niveaus: { basis: "Roest.", simpeler: "IJzer-oxide.", nogSimpeler: "Roodroest." },
        },
      },
      {
        q: "Wat is **Olympus Mons**?",
        options: ["Hoogste vulkaan in het zonnestelsel","Planeet van Olympus","Een stad op Mars","Een ster"],
        answer: 0,
        wrongHints: [null,"Geen planeet — een berg op Mars.","Geen stad.","Geen ster."],
        uitlegPad: {
          stappen: [{ titel: "Olympus Mons = hoogste vulkaan", tekst: "Op Mars staat Olympus Mons: ~25 km hoog, 3× Mount Everest. Hoogste bekende vulkaan in het zonnestelsel." }],
          woorden: [{ woord: "Mons", uitleg: "Latijn voor 'berg'" }],
          theorie: "Mars heeft geen platentektoniek — vulkanen blijven lang op zelfde plek doorgroeien.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Mount Everest: ~8,8 km. Olympus Mons: ~25 km — 3× zo hoog" }],
          basiskennis: [{ onderwerp: "Mars-vulkanen", uitleg: "ooit actief, nu uitgedoofd" }],
          niveaus: { basis: "Hoogste vulkaan.", simpeler: "Reuze berg op Mars.", nogSimpeler: "Mars-berg." },
        },
      },
      {
        q: "Hoeveel manen heeft **Mars**?",
        options: ["2 (Phobos + Deimos)","1","0","20"],
        answer: 0,
        wrongHints: [null,"Mars heeft er twee.","Niet géén — er zijn er 2.","Veel te veel — Jupiter heeft er ~95!"],
        uitlegPad: {
          stappen: [{ titel: "2 manen: Phobos + Deimos", tekst: "Mars heeft 2 kleine manen, klompvormig (niet rond). Vermoedelijk gevangen asteroïden uit de gordel ertussen." }],
          woorden: [{ woord: "Phobos/Deimos", uitleg: "Griekse namen voor angst + paniek" }],
          theorie: "Phobos: ~22 km doorsnee. Deimos: ~12 km. Veel kleiner dan onze Maan.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Phobos beweegt zo snel dat 'ie 3× per Mars-dag opkomt" }],
          basiskennis: [{ onderwerp: "kleine manen", uitleg: "niet bolvormig" }],
          niveaus: { basis: "2.", simpeler: "Twee.", nogSimpeler: "2." },
        },
      },
    ],
  },
  {
    title: "Jupiter en Saturnus — de gasreuzen",
    explanation: "**Jupiter** *(planeet 5 — grootste planeet)*\n• Massa: **2× alle andere planeten samen**.\n• Diameter: 139.820 km — er passen **1.300 aardes** in.\n• Bestaat vooral uit **waterstof + helium** (zoals de zon).\n• Geen vast oppervlak — alles gas en in de kern misschien vast.\n• **Grote Rode Vlek** — een gigantische storm, al **>350 jaar** waargenomen, groter dan de Aarde.\n• Ringen — wel, maar dun en moeilijk zichtbaar.\n• **~95 manen** — meeste in zonnestelsel.\n• 4 grote manen ('**Galilei-manen**' — door Galileo Galilei in 1610 ontdekt):\n  - **Io** — actiefste vulkanen in zonnestelsel\n  - **Europa** — bevroren oppervlak, vermoedelijk vloeibaar **water-oceaan eronder** → mogelijk leven?\n  - **Ganymedes** — grootste maan in zonnestelsel (groter dan Mercurius!)\n  - **Callisto** — meest cratervol\n• 1 jaar = **12 aardejaren**. 1 dag = ~10 uur (snelste rotatie!).\n\n**Saturnus** *(planeet 6)*\n• Bekend om de **prachtige ringen** — duizenden aparte ringen van **ijs + steentjes** + stof.\n• Ringen zijn 273.000 km breed maar maar 10-100 m **dun**!\n• Tweede grootste planeet.\n• **Minder dicht dan water** — als er een zwembad groot genoeg was, zou Saturnus erin **drijven**.\n• ~146 manen (steeds nieuwe ontdekt).\n• Bekendste: **Titan** — grootste, met dikke atmosfeer + meren van vloeibaar methaan!\n• 1 jaar = **29 aardejaren**.\n\n**Verschillen tussen Jupiter + Saturnus**:\nJupiter is groter, meer manen, beroemde Rode Vlek. Saturnus is iets kleiner, minder massief, maar onmiskenbaar mooie ringen.",
    svg: zonnestelselSvg("jupiter"),
    checks: [
      {
        q: "Welke planeet is **het grootst**?",
        options: ["Jupiter","Saturnus","Aarde","Zon"],
        answer: 0,
        wrongHints: [null,"Saturnus is 2e grootst.","Aarde is rotsplaneet, klein.","Zon is geen planeet (= ster!)."],
        uitlegPad: {
          stappen: [{ titel: "Jupiter = grootste planeet", tekst: "Jupiter heeft een doorsnede van ~140.000 km — er passen 1.300 Aardes in. Zwaarder dan alle andere planeten samen × 2." }],
          woorden: [{ woord: "Jupiter", uitleg: "Romeinse oppergod" }],
          theorie: "Volgorde grootte: Jupiter > Saturnus > Uranus > Neptunus > Aarde > ...",
          voorbeelden: [{ type: "voorbeeld", tekst: "Beroemd: Grote Rode Vlek — storm groter dan Aarde, al >350 jaar" }],
          basiskennis: [{ onderwerp: "gas, geen rots", uitleg: "geen vast oppervlak" }],
          niveaus: { basis: "Jupiter.", simpeler: "Reus #1.", nogSimpeler: "Jupiter." },
        },
      },
      {
        q: "Wat is bijzonder aan **Saturnus**?",
        options: ["Mooie ringen van ijs + steen","Eet asteroïden","Is vierkant","Heeft geen manen"],
        answer: 0,
        wrongHints: [null,"Geen eten in de ruimte.","Alle planeten zijn rond.","Saturnus heeft veel manen!"],
        uitlegPad: {
          stappen: [{ titel: "Saturnus = ringen", tekst: "Saturnus heeft prachtige ringen — duizenden subringen van ijs + steentjes + stof. 273.000 km breed maar paar meter dun!" }],
          woorden: [{ woord: "ringen", uitleg: "platte schijven om planeet" }],
          theorie: "Andere reuzen hebben ook ringen (Jupiter, Uranus, Neptunus) maar veel dunner en moeilijker te zien.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Cassini-Huygens-sonde (2004-2017) onderzocht Saturnus + ringen" }],
          basiskennis: [{ onderwerp: "vergruisde manen?", uitleg: "ringen mogelijk uit vernietigde manen" }],
          niveaus: { basis: "Ringen.", simpeler: "Mooie ringen.", nogSimpeler: "Ringen." },
        },
      },
      {
        q: "Hoe heet de **grootste maan** van Jupiter?",
        options: ["Ganymedes","Europa","Maan","Titan"],
        answer: 0,
        wrongHints: [null,"Europa is een andere Galilei-maan, kleiner.","Maan is van Aarde.","Titan is grootste maan van SATURNUS."],
        uitlegPad: {
          stappen: [{ titel: "Ganymedes = grootste maan", tekst: "Jupiter heeft 4 grote 'Galilei-manen': Io, Europa, Ganymedes, Callisto. Ganymedes is de grootste — zelfs groter dan planeet Mercurius!" }],
          woorden: [{ woord: "Galilei-manen", uitleg: "ontdekt door Galileo in 1610" }],
          theorie: "Jupiter heeft ~95 manen totaal. Galilei-manen zijn de 4 grootste.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Europa: dik ijs met vermoedelijk oceaan eronder — mogelijk leven?" }],
          basiskennis: [{ onderwerp: "maan-van-planeet", uitleg: "elke planeet kan eigen manen hebben" }],
          niveaus: { basis: "Ganymedes.", simpeler: "Galilei-maan.", nogSimpeler: "Ganymedes." },
        },
      },
    ],
  },
  {
    title: "Uranus en Neptunus — de ijsreuzen",
    explanation: "**Uranus** *(planeet 7)*\n• **Liggend op zijn zij** — z'n as staat 98° schuin (waarschijnlijk door enorme botsing in het verleden).\n• Hierdoor: bizarre seizoenen — een pool kan 42 jaar daglicht hebben, dan 42 jaar nacht.\n• Lichtblauw door **methaan** in de atmosfeer (absorbeert rood licht).\n• Diameter: ~50.700 km.\n• **Ringen** — heeft er ook (smal en donker, niet zo opvallend als Saturnus).\n• 27 manen (vernoemd naar Shakespeare-personages: Miranda, Ariel, Umbriel, Titania, Oberon).\n• Temperatuur: ~-200 °C.\n• 1 jaar = **84 aardejaren**.\n• In 1781 ontdekt door **William Herschel** — eerste planeet die **niet vanaf de oudheid** bekend was.\n\n**Neptunus** *(planeet 8 — verste planeet)*\n• Donkerblauw — door methaan + vermoedelijk andere stoffen.\n• Vergelijkbare grootte met Uranus (~49.200 km).\n• **Sterkste winden** in het zonnestelsel — tot **2.100 km/u**!\n• 14 manen — bekendste: **Triton**, draait 'achterstevoren' rond Neptunus (wijst op vangst van een dwergplaneet ooit).\n• 1 jaar = **165 aardejaren** — sinds ontdekking in 1846 nog maar 1 'baan' rond zon volbracht.\n• Voorspeld door wiskundige berekeningen vóór 'ie werd waargenomen.\n• Temperatuur: ~-220 °C (kouder dan Uranus, ondanks dezelfde afstand — interne warmte minder).\n\n**'Ijsreuzen'** vs **'gasreuzen'**:\n• Gasreuzen (Jupiter, Saturnus): vooral waterstof/helium, zoals de zon.\n• Ijsreuzen (Uranus, Neptunus): meer **'ijs'** (water, methaan, ammoniak) onder hoge druk + minder waterstof. Eigenlijk is dat 'ijs' op Uranus/Neptunus geen koud blokje, maar een hete vloeibare laag onder druk.\n\n**Beide zijn moeilijk te zien**: vanaf Aarde alleen met telescoop (te ver weg).",
    svg: zonnestelselSvg("uranus"),
    checks: [
      {
        q: "Wat is bizar aan **Uranus**?",
        options: ["Hij ligt op zijn zij","Hij is hol","Hij gloeit","Hij heeft geen rotatie"],
        answer: 0,
        wrongHints: [null,"Geen planeet is hol.","Planeten gloeien niet zoals sterren.","Alle planeten roteren."],
        uitlegPad: {
          stappen: [{ titel: "Uranus draait op z'n zij", tekst: "Uranus heeft z'n rotatie-as 98° gekanteld — als enige planeet draait 'ie min of meer op z'n zij. Vermoedelijk veroorzaakt door enorme botsing in het verleden." }],
          woorden: [{ woord: "rotatie-as", uitleg: "denkbeeldige lijn waaromheen planeet draait" }],
          theorie: "Bizarre seizoenen: één pool 42 jaar daglicht, dan 42 jaar nacht.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Aarde heeft 23° schuine stand. Uranus 98° (bijna omgevallen)" }],
          basiskennis: [{ onderwerp: "as-stand", uitleg: "veroorzaakt seizoenen" }],
          niveaus: { basis: "Ligt op zij.", simpeler: "Op zij gedraaid.", nogSimpeler: "Schuin." },
        },
      },
      {
        q: "Welke planeet heeft **de sterkste winden** in het zonnestelsel?",
        options: ["Neptunus","Aarde","Jupiter","Saturnus"],
        answer: 0,
        wrongHints: [null,"Aarde heeft hooguit 400 km/u (orkaan).","Jupiter heeft snelle winden maar Neptunus is sneller.","Idem."],
        uitlegPad: {
          stappen: [{ titel: "Neptunus = ~2100 km/u winden", tekst: "Neptunus heeft de hardste winden in ons zonnestelsel — tot 2100 km/u. Vergelijking: zwaarste aardse orkaan ~400 km/u." }],
          woorden: [{ woord: "supersonische winden", uitleg: "sneller dan geluid (1234 km/u)" }],
          theorie: "Waarschijnlijk gevoed door interne warmte van planeet zelf.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Donker Vlek (1989) — storm groter dan Aarde — werd door winden weggeblazen" }],
          basiskennis: [{ onderwerp: "ijsreus", uitleg: "Neptunus is ijsreus, niet rotsplaneet" }],
          niveaus: { basis: "Neptunus.", simpeler: "Verste planeet.", nogSimpeler: "Neptunus." },
        },
      },
      {
        q: "Welke planeet werd **als eerste ontdekt met telescoop** (1781)?",
        options: ["Uranus","Mercurius","Mars","Pluto"],
        answer: 0,
        wrongHints: [null,"Mercurius is met blote oog zichtbaar — al sinds oudheid bekend.","Mars zelfs in oudheid bekend.","Pluto pas in 1930 ontdekt + nu geen planeet."],
        uitlegPad: {
          stappen: [{ titel: "Uranus ontdekt 1781", tekst: "William Herschel ontdekte Uranus in 1781 met een telescoop. Eerste 'nieuwe' planeet sinds de oudheid. Mercurius t/m Saturnus zijn al millennia bekend (zichtbaar met blote oog)." }],
          woorden: [{ woord: "telescoop", uitleg: "instrument om verre objecten te bekijken" }],
          theorie: "Volgorde ontdekkingen: Mercurius-Saturnus prehistorisch, Uranus 1781, Neptunus 1846, Pluto 1930.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Herschel deed het met zelfgemaakte telescoop in zijn achtertuin" }],
          basiskennis: [{ onderwerp: "blote oog", uitleg: "alleen tot Saturnus" }],
          niveaus: { basis: "Uranus.", simpeler: "Eerste met telescoop.", nogSimpeler: "1781." },
        },
      },
    ],
  },
  {
    title: "Andere objecten — Pluto, asteroïden, kometen",
    explanation: "Behalve planeten en hun manen zijn er **veel andere objecten** in ons zonnestelsel:\n\n**Dwergplaneten** *(klein, geen 'echte' planeet)*\n• **Pluto** — vroeger #9 planeet, sinds **2006 dwergplaneet**. Te klein, deelt baan met andere objecten.\n• **Eris**, **Makemake**, **Haumea**, **Ceres** — andere dwergplaneten.\n• Ceres ligt in de **asteroïdengordel** (zie verder).\n\n**Asteroïden**\n• **Rotsbrokken** — meeste in **asteroïdengordel** tussen Mars en Jupiter.\n• Variërend van enkele meters tot ~1.000 km (Ceres is grootste).\n• Vermoedelijk **bouwmateriaal** dat nooit een planeet werd, mogelijk door zwaartekracht van Jupiter.\n• Soms botst er een tegen Aarde — de **Yucatán-meteoriet** ~66 miljoen jaar geleden veroorzaakte uitsterven van dinosaurussen.\n\n**Kometen** *(de 'vuile sneeuwballen')*\n• Bestaan vooral uit **ijs + stof + gas**.\n• Komen van **ver weg** — Oort-wolk of Kuiper-gordel.\n• Bij nadering van de zon **smelt** het ijs → vormt een **lange staart** van gas.\n• Beroemd: **Halley's komeet** — komt elke ~76 jaar langs (volgende keer 2061).\n• De staart wijst altijd **weg van de zon** door zonnewind.\n\n**Meteorieten + meteoren**\n• **Meteoroïde** = klein steentje in de ruimte.\n• **Meteor** = vallend ster — gloeiend stuk dat de aardatmosfeer raakt en verbrandt.\n• **Meteoriet** = wat overblijft op aarde-oppervlak.\n• **Meteorenregens**: jaarlijks komt aarde door 'staart' van een komeet → veel vallende sterren in 1 nacht.\n\n**Kuiper-gordel** *(achter Neptunus)*\n• Ringvormig gebied vol bevroren objecten + dwergplaneten.\n• Pluto + Eris staan hier.\n• Ontdekt in 1992.\n\n**Oort-wolk** *(héél ver weg)*\n• Bolvormige wolk van miljarden bevroren objecten.\n• Tot ~1 lichtjaar weg.\n• Bron van langeperiode-kometen.\n\n**Universum-feiten voor schaal**\n• Aarde: 1 stipje.\n• Zonnestelsel: enorm.\n• Melkweg: 200 miljard sterren.\n• Heelal: triljoenen sterrenstelsels.\n• Wij zijn **klein**.",
    svg: zonnestelselSvg(),
    checks: [
      {
        q: "Waarom is **Pluto geen planeet meer** sinds 2006?",
        options: ["Te klein + deelt z'n baan met andere objecten","Hij is gevallen","Hij explodeerde","Wetenschappers vergaten 'm"],
        answer: 0,
        wrongHints: [null,"Niet gevallen — hij draait nog gewoon.","Niet geëxplodeerd.","Niet vergeten — bewust geherclassificeerd."],
        uitlegPad: {
          stappen: [{ titel: "Pluto te klein + niet 'schoon'", tekst: "Pluto is sinds 2006 'dwergplaneet'. Te klein, en deelt baan met veel andere Kuipergordel-objecten. Officiële definitie planeet vereist 'baan vrij van andere objecten'." }],
          woorden: [{ woord: "Kuipergordel", uitleg: "ringvormig gebied achter Neptunus met dwergplaneten" }],
          theorie: "5 erkende dwergplaneten: Pluto, Eris, Makemake, Haumea, Ceres.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Eris werd in 2005 ontdekt — even groot als Pluto → noodzaak tot herdefinitie" }],
          basiskennis: [{ onderwerp: "IAU 2006-besluit", uitleg: "Internationale Astronomische Unie" }],
          niveaus: { basis: "Te klein + onschone baan.", simpeler: "Geen volwaardige planeet.", nogSimpeler: "Te klein." },
        },
      },
      {
        q: "Wat is een **komeet**?",
        options: ["Vuile sneeuwbal van ijs + stof","Stuk roest","Heel kleine planeet","Ster die uitdooft"],
        answer: 0,
        wrongHints: [null,"Niet roest — ijs + stof.","Geen planeet, te klein + andere samenstelling.","Een ster doet veel anders dan een komeet."],
        uitlegPad: {
          stappen: [{ titel: "Komeet = vuile sneeuwbal", tekst: "Kometen zijn klompjes ijs + stof + gas uit verre randgebieden (Kuiper, Oort-wolk). Naderen ze de zon → ijs smelt → spectaculaire staart van gas/stof." }],
          woorden: [{ woord: "Oort-wolk", uitleg: "bol van bevroren objecten tot 1 lichtjaar weg" }],
          theorie: "Staart wijst altijd weg van zon (door zonnewind), niet 'naar achter' zoals een raket.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Halley's komeet: elke ~76 jaar terug, volgende keer 2061" }],
          basiskennis: [{ onderwerp: "asteroïde vs komeet", uitleg: "asteroïde = rots, komeet = ijs" }],
          niveaus: { basis: "Sneeuwbal van ijs + stof.", simpeler: "IJsbol met staart.", nogSimpeler: "IJs + staart." },
        },
      },
      {
        q: "Wat veroorzaakte het **uitsterven van de dinosaurussen** (66 miljoen jaar geleden)?",
        options: ["Inslag van een asteroïde","Een komeet","Vulkaanuitbarsting (alleen)","Mensen"],
        answer: 0,
        wrongHints: [null,"Niet komeet — asteroïde (rotsblok).","Vulkanen droegen wel bij maar inslag was de hoofdoorzaak.","Mensen bestonden nog niet — pas miljoenen jaren later."],
        uitlegPad: {
          stappen: [{ titel: "Asteroïde-inslag Yucatán", tekst: "~66 miljoen jaar geleden sloeg een asteroïde van ~10 km in bij Yucatán (Mexico). Wereldwijde stof- + temperatuurschok → ~75% van soorten uitgestorven, inclusief alle niet-vogel-dinosaurussen." }],
          woorden: [{ woord: "Chicxulub-krater", uitleg: "180 km grote inslag-krater in Mexico" }],
          theorie: "Bewijs: laag van iridium (zeldzaam op aarde, veel in meteorieten) wereldwijd in gesteente uit die tijd.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Vogels = overlevende dinosaurussen. Krokodillen ook" }],
          basiskennis: [{ onderwerp: "Krijt-Paleogeen-grens", uitleg: "uitstervingsgebeurtenis" }],
          niveaus: { basis: "Asteroïde-inslag.", simpeler: "Grote meteoriet.", nogSimpeler: "Steen uit ruimte." },
        },
      },
    ],
  },
  {
    title: "Eindopdracht — pas alles toe",
    explanation: "Tijd om alles te combineren!\n\n**Snelle samenvatting**:\n\n**Het zonnestelsel** = zon + 8 planeten + dwergplaneten + manen + asteroïden + kometen.\n\n**8 planeten van dichtbij naar ver**:\n1. Mercurius — kleinste, dichtst bij zon\n2. Venus — heetste door broeikas\n3. Aarde — onze planeet, water + leven\n4. Mars — rode planeet, ooit water\n5. Jupiter — grootste, gas, Rode Vlek\n6. Saturnus — ringen\n7. Uranus — ligt op z'n zij\n8. Neptunus — sterkste winden, verste\n\n**Verschillen**:\n• Aardse planeten (1-4): rotsplaneten, klein, weinig manen.\n• Reuzen (5-8): gas of ijs, groot, veel manen, ringen.\n\n**Andere objecten**: dwergplaneten (Pluto), asteroïden (gordel tussen Mars + Jupiter), kometen (vuile sneeuwballen), meteoren (vallende sterren).\n\n**Ster ≠ planeet**: ster brandt zelf (kernfusie), planeet weerkaatst zonlicht.\n\nVeel succes!",
    svg: zonnestelselSvg(),
    checks: [
      {
        q: "Wat is de **volgorde van Mars naar Saturnus**?",
        options: ["Mars - Jupiter - Saturnus","Mars - Saturnus - Jupiter","Jupiter - Mars - Saturnus","Saturnus - Mars - Jupiter"],
        answer: 0,
        wrongHints: [null,"Jupiter komt vóór Saturnus.","Mars is voor Jupiter.","Saturnus is na Jupiter."],
        uitlegPad: {
          stappen: [{ titel: "Mars → Jupiter → Saturnus", tekst: "Van zon naar buiten: Mars (#4) → Jupiter (#5) → Saturnus (#6). Tussen Mars en Jupiter zit de asteroïdengordel." }],
          woorden: [{ woord: "asteroïdengordel", uitleg: "rotsblokken tussen Mars en Jupiter" }],
          theorie: "Volgorde MVAMJSUN — onthoud per ezelsbrug.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Asteroïdengordel zit op ~2-3 AE, Jupiter op 5 AE" }],
          basiskennis: [{ onderwerp: "M-V-A-M-J-S-U-N", uitleg: "8 planeten op volgorde" }],
          niveaus: { basis: "Mars-Jupiter-Saturnus.", simpeler: "4-5-6.", nogSimpeler: "Volgorde." },
        },
      },
      {
        q: "Welke planeet heeft een **maan met vloeibare methaan-meren**?",
        options: ["Saturnus (Titan)","Jupiter (Io)","Mars (Phobos)","Aarde (Maan)"],
        answer: 0,
        wrongHints: [null,"Io heeft vulkanen, geen methaan-meren.","Phobos is een kleine maan zonder vloeistof.","Onze Maan heeft geen vloeistoffen."],
        uitlegPad: {
          stappen: [{ titel: "Titan (maan van Saturnus)", tekst: "Titan, grootste maan van Saturnus, heeft een dikke atmosfeer + meren van vloeibaar methaan + ethaan op het oppervlak (geen water — daarvoor te koud, -180°C)." }],
          woorden: [{ woord: "methaan-meren", uitleg: "vloeibaar aardgas-spul" }],
          theorie: "Enige plek (behalve Aarde) waar je vloeibare stof aan het oppervlak vindt.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Huygens-sonde landde in 2005 op Titan — enige landing op een buitenste planeet-maan" }],
          basiskennis: [{ onderwerp: "alternatief leven?", uitleg: "speculatief: leven dat methaan ipv water gebruikt" }],
          niveaus: { basis: "Saturnus (Titan).", simpeler: "Maan van Saturnus.", nogSimpeler: "Titan." },
        },
      },
      {
        q: "Hoeveel **lichtjaren** is **Proxima Centauri** (dichtstbijzijnde ster na zon) weg?",
        options: ["~4,2 lichtjaar","~1 lichtjaar","~100 lichtjaar","~1 miljoen lichtjaar"],
        answer: 0,
        wrongHints: [null,"Iets verder weg dan 1.","Te ver — die zou bijna onzichtbaar zijn.","Andromeda-stelsel is zo ver."],
        uitlegPad: {
          stappen: [{ titel: "Proxima Centauri 4,2 lichtjaar", tekst: "Onze dichtstbijzijnde ster (na de zon) is Proxima Centauri. Licht doet 4,2 jaar over de reis. Met huidige raketten zou het 70.000 jaar duren." }],
          woorden: [{ woord: "lichtjaar", uitleg: "afstand die licht in 1 jaar aflegt" }],
          theorie: "1 lichtjaar = ~9,5 biljoen km.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Andromeda-sterrenstelsel: 2,5 miljoen lichtjaar — een hele andere schaal" }],
          basiskennis: [{ onderwerp: "dichtstbij ster", uitleg: "Proxima is dichtst" }],
          niveaus: { basis: "4,2 lichtjaar.", simpeler: "Iets meer dan 4.", nogSimpeler: "Vier." },
        },
      },
      {
        q: "Wat veroorzaakt **eb en vloed** op Aarde?",
        options: ["Maan's zwaartekracht","De zon","Wind","Vulkanisme"],
        answer: 0,
        wrongHints: [null,"Zon helpt iets, maar maan is veruit grootste invloed.","Wind veroorzaakt golven, geen eb/vloed.","Geen verband."],
        uitlegPad: {
          stappen: [{ titel: "Maan-zwaartekracht", tekst: "Maan's zwaartekracht trekt aan zeewater → vloed. Twee per dag (één aan maan-kant, één aan tegenoverkant)." }],
          woorden: [{ woord: "zwaartekracht", uitleg: "aantrekkende kracht tussen massa's" }],
          theorie: "Zon-zwaartekracht helpt ook, maar ~46% van maan-effect. Bij springtij werken beide samen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Vissers + zeevarenden volgen de getijden-tabel" }],
          basiskennis: [{ onderwerp: "12u25min cyclus", uitleg: "twee getijden per dag" }],
          niveaus: { basis: "Maan-zwaartekracht.", simpeler: "Maan trekt water.", nogSimpeler: "Maan." },
        },
      },
      {
        q: "Wat is een **lichtjaar**?",
        options: ["Afstand die licht in 1 jaar aflegt (~9.500 miljard km)","Hoe lang het licht is","Een soort jaartelling","De tijd dat de zon schijnt per jaar"],
        answer: 0,
        wrongHints: [null,"Lichtjaar = afstand, niet eigenschap van licht.","Niet een jaartelling.","Niet zo eenvoudig."],
        uitlegPad: {
          stappen: [{ titel: "Lichtjaar = afstand", tekst: "Een lichtjaar is de AFSTAND die licht in 1 jaar aflegt: ~9.500 miljard km. Geen tijdseenheid maar een afstandseenheid voor astronomische afstanden." }],
          woorden: [{ woord: "lichtsnelheid", uitleg: "300.000 km per seconde" }],
          theorie: "300.000 km/s × 60s × 60min × 24u × 365d ≈ 9,5 biljoen km.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Andromeda: 2,5 miljoen lichtjaar = 2,5 mln × 9,5 biljoen km" }],
          basiskennis: [{ onderwerp: "voor sterren handig", uitleg: "km is te onhandig" }],
          niveaus: { basis: "Afstand licht in 1 jaar.", simpeler: "Verre afstand.", nogSimpeler: "Reisafstand licht." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const sterrenPlaneten = {
  id: "sterren-planeten",
  title: "Sterren en planeten — ons zonnestelsel",
  emoji: "🪐",
  level: "groep5-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — heelal, zon & planeten",
  prerequisites: [
    { id: "ruimtevaart-po", title: "Ruimtevaart", niveau: "po-1F" },
  ],
  intro:
    "De zon, 8 planeten van Mercurius tot Neptunus, manen, dwergplaneten, asteroïden en kometen. Inclusief verschil tussen aardse rotsplaneten en gasreuzen, eb en vloed, en de Maan-landingen. Voor groep 5-8.",
  triggerKeywords: [
    "zon","sterren","planeten","zonnestelsel",
    "mercurius","venus","aarde","mars","jupiter","saturnus","uranus","neptunus",
    "pluto","dwergplaneet",
    "maan","manen","eb en vloed","maanstanden",
    "asteroide","komeet","kometen","meteoriet","meteoor","vallende ster",
    "halley","olympus mons","grote rode vlek",
    "melkweg","lichtjaar","proxima centauri","andromeda",
    "neil armstrong","apollo","ruimte","heelal","universum",
  ],
  chapters,
  steps,
};

export default sterrenPlaneten;
