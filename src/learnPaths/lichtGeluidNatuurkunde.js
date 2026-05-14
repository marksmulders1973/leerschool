// Leerpad: Licht + geluid — klas 2-3 natuurkunde.
// Onderdeel natuurkunde. Referentieniveau 2F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  rood: "#ef5350",
  oranje: "#ff9800",
  geel: "#ffd54f",
  groen: "#66bb6a",
  blauw: "#1976d2",
  indigo: "#3f51b5",
  violet: "#9575cd",
  geluid: "#80cbc4",
  highlight: "#42a5f5",
};

const stepEmojis = ["🔊", "💡", "🔍", "🌈", "🎸", "🏆"];

const chapters = [
  { letter: "A", title: "Geluid — wat is het?", emoji: "🔊", from: 0, to: 0 },
  { letter: "B", title: "Licht — straal + snelheid", emoji: "💡", from: 1, to: 1 },
  { letter: "C", title: "Spiegels + lenzen", emoji: "🔍", from: 2, to: 2 },
  { letter: "D", title: "Kleuren + spectrum", emoji: "🌈", from: 3, to: 3 },
  { letter: "E", title: "Praktijk — muziek, oog, ...", emoji: "🎸", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function golfSvg() {
  return `<svg viewBox="0 0 320 160">
<rect x="0" y="0" width="320" height="160" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Geluidsgolf — frequentie + amplitude</text>
<path d="M 20 90 Q 35 60 50 90 Q 65 120 80 90 Q 95 60 110 90 Q 125 120 140 90 Q 155 60 170 90 Q 185 120 200 90 Q 215 60 230 90 Q 245 120 260 90 Q 275 60 290 90" fill="none" stroke="${COLORS.geluid}" stroke-width="2.5"/>
<!-- aanduiding amplitude -->
<line x1="50" y1="60" x2="50" y2="120" stroke="${COLORS.highlight}" stroke-width="1.5" stroke-dasharray="3,2"/>
<text x="40" y="60" text-anchor="end" fill="${COLORS.highlight}" font-size="10" font-family="Arial">amplitude</text>
<text x="40" y="72" text-anchor="end" fill="${COLORS.muted}" font-size="9" font-family="Arial">(geluid hard)</text>
<!-- aanduiding frequentie -->
<line x1="50" y1="135" x2="80" y2="135" stroke="${COLORS.highlight}" stroke-width="1.5"/>
<text x="90" y="138" fill="${COLORS.highlight}" font-size="10" font-family="Arial">1 golf</text>
<text x="160" y="153" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Hoge frequentie = veel golven per sec = hoge toon</text>
</svg>`;
}

function spectrumSvg() {
  return `<svg viewBox="0 0 320 100">
<rect x="0" y="0" width="320" height="100" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Zichtbaar licht — regenboog-spectrum</text>
<rect x="20" y="38" width="40" height="35" fill="${COLORS.rood}"/>
<text x="40" y="60" text-anchor="middle" fill="#fff" font-size="10" font-family="Arial" font-weight="bold">rood</text>
<rect x="60" y="38" width="40" height="35" fill="${COLORS.oranje}"/>
<text x="80" y="60" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">oranje</text>
<rect x="100" y="38" width="40" height="35" fill="${COLORS.geel}"/>
<text x="120" y="60" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">geel</text>
<rect x="140" y="38" width="40" height="35" fill="${COLORS.groen}"/>
<text x="160" y="60" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">groen</text>
<rect x="180" y="38" width="40" height="35" fill="${COLORS.blauw}"/>
<text x="200" y="60" text-anchor="middle" fill="#fff" font-size="10" font-family="Arial" font-weight="bold">blauw</text>
<rect x="220" y="38" width="40" height="35" fill="${COLORS.indigo}"/>
<text x="240" y="60" text-anchor="middle" fill="#fff" font-size="10" font-family="Arial" font-weight="bold">indigo</text>
<rect x="260" y="38" width="40" height="35" fill="${COLORS.violet}"/>
<text x="280" y="60" text-anchor="middle" fill="#fff" font-size="10" font-family="Arial" font-weight="bold">violet</text>
<text x="160" y="92" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">7 kleuren ezelsbruggetje: ROGGBIV</text>
</svg>`;
}

const steps = [
  // STAP 1: Geluid
  {
    title: "Geluid — golven door lucht (en water)",
    explanation:
      "**Geluid** = trillingen die zich verspreiden door een stof *(lucht, water, vast)*.\n\n**Hoe ontstaat geluid?**\n• Iets **trilt** *(snaar, kalfsvel van trommel, stembanden)*.\n• Trilling duwt **lucht-moleculen** op en neer.\n• Die duwen weer de volgende → **golf** ontstaat.\n• Golf bereikt **oor** → trommelvlies trilt → wij horen.\n\n**Geluidsgolven hebben 2 eigenschappen**:\n\n**1. Frequentie** *(toonhoogte)* — hoeveel trillingen per seconde.\n• Eenheid: **hertz (Hz)** = 1 trilling/seconde.\n• **Hoge frequentie** *(veel Hz)* = **hoge toon** *(piep)*.\n• **Lage frequentie** *(weinig Hz)* = **lage toon** *(brom)*.\n• Mens hoort **20 Hz tot 20.000 Hz**.\n• Onder 20 Hz = **infrasoon** *(olifanten, walvissen)*.\n• Boven 20.000 Hz = **ultrasoon** *(honden, vleermuizen, dolfijnen)*.\n\n**2. Amplitude** *(volume / hardheid)* — hoeveel beweging.\n• **Grote amplitude** = **hard geluid**.\n• **Kleine amplitude** = **zacht geluid**.\n• Eenheid: **decibel (dB)**.\n• 0 dB = gehoor-grens.\n• 30 dB = fluisteren.\n• 60 dB = gesprek.\n• 85 dB = drukke straat (lange tijd schadelijk).\n• 120 dB = vliegtuig opstijgen.\n• 140+ dB = pijn-grens.\n\n**Geluidssnelheid**:\n• In **lucht**: ~**343 m/s** *(bij 20°C)*.\n• In **water**: ~**1500 m/s** *(4× zo snel)*.\n• In **staal**: ~**5000 m/s**.\n• Hoe **dichter** materiaal, hoe sneller.\n\n**Geluid in vacuüm**:\n• Geluid heeft een **medium** nodig *(lucht/water/vast)*.\n• In **vacuüm (ruimte)** = **geen geluid**.\n• Daarom kunnen astronauten elkaar niet horen zonder radio in ruimte.\n\n**Echo**:\nGeluid kaatst terug van harde oppervlakten.\n• Tijd echo × geluidssnelheid = afstand × 2.\n• Voorbeeld: echo na 2 sec → 2 × 343 = 686 m → object 343 m verder.\n\n**Sonar / echolocatie**:\nVleermuizen + dolfijnen gebruiken ultrasoon geluid om afstand te meten.\n\n**Cito-vraag**:\n*'Hoe verplaatst geluid zich?'* → via trillingen door materie.\n*'Wat is de geluidssnelheid in lucht?'* → ~343 m/s.\n*'Hoeveel dB is een gesprek?'* → ~60 dB.",
    svg: golfSvg(),
    checks: [
      {
        q: "Wat is **frequentie**?",
        options: ["Aantal trillingen per seconde (Hz)", "Hardheid van geluid", "Snelheid van geluid", "Aantal personen"],
        answer: 0,
        wrongHints: [null, "Dat is amplitude.", "Anders ding.", "Niet relevant."],
      },
      {
        q: "Welke **frequentie-range** kan een mens horen?",
        options: ["20-20.000 Hz", "0-10 Hz", "100-200 Hz", "0-100.000 Hz"],
        answer: 0,
        wrongHints: [null, "Te smal.", "Te smal.", "Te ruim — boven 20K = ultrasoon."],
      },
      {
        q: "Hoe snel reist geluid in **lucht**?",
        options: ["~343 m/s", "~1.500 m/s", "~300.000 km/s", "~10 m/s"],
        answer: 0,
        wrongHints: [null, "In water.", "Dat is licht!", "Te langzaam."],
      },
      {
        q: "Wat hoor je in **vacuüm**?",
        options: ["Niets", "Hetzelfde", "Sneller geluid", "Meer geluid"],
        answer: 0,
        wrongHints: [null, "Geen medium = geen geluid.", "Geen geluid mogelijk.", "Geen geluid mogelijk."],
      },
    ],
  },

  // STAP 2: Licht
  {
    title: "Licht — rechte stralen + super snel",
    explanation:
      "**Licht** is **elektromagnetische straling** dat ons oog kan zien.\n\n**Belangrijke eigenschappen van licht**:\n\n**1. Lichtsnelheid** = **300.000 km/s** in vacuüm.\n• Symbool: **c**.\n• Snelste in heelal — niets gaat sneller *(volgens Einstein)*.\n• Vergelijk: geluid 343 m/s → licht is **1.000.000 keer sneller**.\n• Licht legt **7,5 keer aarde-omtrek per seconde** af.\n\n**Daarom**:\n• Donder + bliksem: zie je bliksem eerst, hoor je donder later.\n• 3 sec tussen bliksem en donder = ~1 km afstand *(3 × 343m = ~1 km)*.\n\n**2. Lichtbronnen**:\n• **Echte lichtbronnen** = maken zelf licht: zon, kaars, lamp, gloeidraad, vuur.\n• **Verlichte voorwerpen** = krijgen licht van een bron, kaatsen terug: maan, boek, jas. Wij zien ze omdat ze licht weerkaatsen.\n• **Donker** = afwezigheid van licht.\n\n**3. Licht in rechte lijn**:\nLicht gaat altijd in een **rechte lijn**.\n• Daardoor ontstaat **schaduw** als iets in de weg staat.\n• Daardoor zie je achter een hoek niets *(geen 'kromme licht')*.\n\n**4. Lichtjaar**:\nDe **afstand die licht in 1 jaar aflegt** *(eenheid in sterrenkunde)*.\n• 1 lichtjaar = **9,5 biljoen km**.\n• Dichtstbijzijnde ster *(Proxima Centauri)* = ~4,2 lichtjaar weg.\n• We zien ster **zoals die 4 jaar geleden was**.\n\n**5. Doorzichtige stoffen** *(transparant)*:\n• Licht gaat door: **glas, water, schone lucht**.\n• Beetje door: **doorschijnend (translucent)** — gordijn, mat glas.\n• Niet door: **ondoorzichtig** — hout, metaal, je hand.\n\n**6. Reflectie + breking**:\n• **Reflectie** = licht kaatst terug *(spiegel, water)*.\n• **Breking** = licht buigt af bij overgang van stof naar stof *(rietje in water lijkt 'gebroken')*.\n• Door breking ontstaat **regenboog** in water-druppels.\n\n**Cito-vraag**:\n*'Wat is de lichtsnelheid?'* → 300.000 km/s.\n*'Waarom zie je bliksem vóór je donder hoort?'* → licht reist veel sneller dan geluid.\n*'Wat is een lichtjaar?'* → afstand die licht in 1 jaar aflegt.\n\n**Belangrijke termen**:\n• **Lichtstraal** = lijn waarlangs licht beweegt.\n• **Lichtbron** = iets dat zelf licht maakt.\n• **Reflectie** = terugkaatsen.\n• **Breking** = afbuigen bij overgang.\n• **Schaduw** = donkere plek waar licht niet komt.",
    checks: [
      {
        q: "Wat is de **lichtsnelheid**?",
        options: ["~300.000 km/s", "~343 m/s", "~3.000 km/s", "Oneindig"],
        answer: 0,
        wrongHints: [null, "Dat is geluid in lucht.", "Te langzaam.", "Niet oneindig — wel super snel."],
      },
      {
        q: "Hoe gaat licht **door lucht**?",
        options: ["In een rechte lijn", "In een cirkel", "In zigzag", "Krom"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Wel — door breking gedeeltelijk."],
      },
      {
        q: "Wat is een **echte lichtbron**?",
        options: ["Iets dat zelf licht maakt (zon, lamp)", "Iets dat licht weerkaatst", "Beide", "Donker"],
        answer: 0,
        wrongHints: [null, "Dat is verlicht voorwerp.", "Specifieker: alleen die zelf produceren.", "Geen licht."],
      },
      {
        q: "Wat is een **lichtjaar**?",
        options: ["Afstand die licht in 1 jaar aflegt", "Een jaar met veel zon", "Een tijdseenheid", "Een sterrenstelsel"],
        answer: 0,
        wrongHints: [null, "Geen astronomische eenheid.", "Geen tijdseenheid (al klinkt het zo).", "Niet."],
      },
    ],
  },

  // STAP 3: Spiegels + lenzen
  {
    title: "Spiegels + lenzen",
    explanation:
      "**Spiegels** en **lenzen** veranderen de richting van licht.\n\n**Spiegels** *(reflectie)*:\n\n**1. Vlakke spiegel** *(badkamer-spiegel)*:\n• **Beeld is rechtop + spiegelbeeldig** *(links/rechts omgekeerd)*.\n• Beeld lijkt **even ver achter spiegel** als jij ervoor.\n• Schoenen-spiegel = je hele lichaam zichtbaar als spiegel **halve lengte** is.\n\n**2. Bolle spiegel (convex)** *(rond auto-spiegel)*:\n• Beeld **kleiner + verkleind**.\n• **Breder gezichtsveld**.\n• Gebruikt in auto-buitenspiegel, winkel-veiligheid.\n\n**3. Holle spiegel (concaaf)**:\n• Beeld **vergroot** dichtbij.\n• Brandpunt: zonlicht kan worden geconcentreerd → vuur!\n• Gebruikt in scheerspiegel, teleskoop, koplampen.\n\n**Wet van reflectie**:\n**Hoek van inval = hoek van weerkaatsing.**\n• Licht komt onder 30° → kaatst onder 30° terug *(gemeten t.o.v. **normaal**, lijn loodrecht op spiegel)*.\n\n**Lenzen** *(breking)*:\n\n**1. Bolle lens (convex / positief)** — vergroot:\n• Lens is dikker in midden.\n• Licht buigt naar elkaar toe *(convergeert)*.\n• **Brandpunt** = punt waar parallel licht samenkomt.\n• Gebruikt in: **vergrootglas, camera, oog-lens, microscoop, brillen verziend**.\n\n**2. Holle lens (concaaf / negatief)** — verkleint:\n• Lens is dunner in midden.\n• Licht buigt uit elkaar *(divergeert)*.\n• Gebruikt in: **brillen bijziend, sommige verrekijkers**.\n\n**Oog werkt als camera**:\n• **Hoornvlies** + **lens** focussen licht.\n• **Pupil** regelt hoeveelheid licht *(opent in donker)*.\n• **Netvlies** vangt licht op + stuurt signalen naar **hersenen**.\n\n**Brillen — wanneer welke?**\n• **Bijziend** *(verziend dichtbij OK, ver weg wazig)* → **holle lens** (negatief).\n• **Verziend** *(ver weg OK, dichtbij wazig)* → **bolle lens** (positief).\n• **Astigmatisme** *(scheef oog)* → cilindrische lens.\n• **Ouderdomsverziendheid** *(rond 45 jaar — lens stug)* → leesbril.\n\n**Bijziendheid (myopie)**:\nOoglens te bol → licht voor netvlies → ver wazig.\nHolle bril-lens duwt licht uit elkaar → corrigeert.\n\n**Verziendheid (hypermetropie)**:\nOoglens te plat → licht na netvlies → dichtbij wazig.\nBolle bril-lens duwt licht samen → corrigeert.\n\n**Cito-vraag**:\n*'Welk soort lens heeft een vergrootglas?'* → bolle (convex).\n*'Welke spiegel breder zien?'* → bolle (convex).\n*'Wat is bijziend?'* → ver niet scherp; lens te bol; corrigeer met holle lens.",
    checks: [
      {
        q: "Wat is een **bolle lens**?",
        options: ["Lens dikker in midden, vergroot", "Lens dunner in midden", "Spiegel", "Doorzichtige plaat"],
        answer: 0,
        wrongHints: [null, "Dat is holle lens.", "Niet lens.", "Geen lens."],
      },
      {
        q: "**Wet van reflectie**?",
        options: ["Hoek van inval = hoek van weerkaatsing", "Licht weg, geluid terug", "Spiegel maakt 2× licht", "Alleen voor sterren"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Geldt overal."],
      },
      {
        q: "Welk lens voor **bijziend** (ver wazig)?",
        options: ["Holle lens (negatief)", "Bolle lens", "Vlakke lens", "Cilindrisch"],
        answer: 0,
        wrongHints: [null, "Voor verziend.", "Geen lens.", "Voor astigmatisme."],
        uitlegPad: {
          stappen: [
            { titel: "Probleem bij bijziend", tekst: "Bij bijziendheid is de ooglens te bol — licht komt vóór het netvlies samen i.p.v. erop. Daardoor is ver weg wazig." },
            { titel: "Oplossing: holle lens", tekst: "Een holle (negatieve) brillen-lens duwt het licht eerst uit elkaar, voor het de ooglens bereikt. Dan komt het samen op het netvlies → scherp ver." },
          ],
          woorden: [{ woord: "bijziend (myopie)", uitleg: "Dichtbij scherp, ver weg wazig." }, { woord: "holle lens", uitleg: "Lens dunner in het midden, dikker aan de rand." }],
          theorie: "Holle lens = divergerend = sterkte negatief (bv. -2.0 diopter).",
          voorbeelden: [{ type: "stap", tekst: "Bril sterkte -3.0 = correctie voor bijziendheid." }],
          basiskennis: [{ onderwerp: "Diopter", uitleg: "Eenheid van brillen-sterkte. Negatief = bijziend, positief = verziend." }],
          niveaus: {
            basis: "Holle lens. A.",
            simpeler: "Bij bijziend kan je ver weg niet scherp zien. Ooglens is te bol. Een holle bril-lens corrigeert door licht uit elkaar te duwen voor de ooglens. = A.",
            nogSimpeler: "Holle lens = A.",
          },
        },
      },
      {
        q: "Welk **deel van oog** vangt licht op?",
        options: ["Netvlies", "Pupil", "Hoornvlies", "Iris"],
        answer: 0,
        wrongHints: [null, "Regelt hoeveelheid licht.", "Helpt focussen.", "Geeft kleur aan oog."],
      },
    ],
  },

  // STAP 4: Kleuren
  {
    title: "Kleuren + spectrum",
    explanation:
      "**Licht** lijkt wit, maar bevat **alle kleuren** door elkaar.\n\n**Newton's experiment** (1666):\nIsaac Newton liet zonlicht door een **prisma** schijnen. Het licht splitste in **7 kleuren** — de **regenboog**.\n\n**De 7 kleuren** *(ezelsbrug: ROGGBIV)*:\n• **R**ood\n• **O**ranje\n• **G**eel *(yellow)*\n• **G**roen *(green)*\n• **B**lauw *(blue)*\n• **I**ndigo *(blauwviolet)*\n• **V**iolet *(paars)*\n\n**Hoe ontstaat een regenboog?**\n• Zonlicht schijnt op **regen-druppels**.\n• Druppel breekt licht *(als prisma)*.\n• Verschillende kleuren buigen verschillend.\n• Zo ontstaat boog.\n• Mooie regenboog: zon achter je, regen vóór je.\n\n**Lichte vs kleuren-toon**:\n• **Wit licht** = alle kleuren samen.\n• **Zwart** = geen licht.\n• **Gekleurd licht** = bepaalde golflengten.\n\n**Waarom zien we voorwerpen gekleurd?**\nWanneer wit licht op iets schijnt:\n• Voorwerp **absorbeert** sommige kleuren.\n• Voorwerp **weerkaatst** andere kleuren.\n• Wat weerkaatst wordt → wat wij **zien**.\n\nVoorbeelden:\n• Rode appel = absorbeert alle kleuren behalve rood.\n• Witte papier = weerkaatst alle kleuren.\n• Zwart shirt = absorbeert alle kleuren.\n• Blauwe lucht = absorbeert rood, geel, etc; weerkaatst blauw.\n\n**Mengen van kleuren — 2 systemen**:\n\n**1. Additief (licht)** — mengen van **licht-bronnen**:\n• Primaire kleuren: **Rood + Groen + Blauw (RGB)**.\n• Rood + Groen = geel.\n• Rood + Blauw = magenta.\n• Groen + Blauw = cyaan.\n• Alle 3 = wit.\n• Gebruikt in: **TV, monitor, telefoon-scherm**.\n\n**2. Subtractief (verf)** — mengen van **pigmenten**:\n• Primaire kleuren: **Cyaan + Magenta + Geel (CMY)** *(of in oude theorie: rood-blauw-geel)*.\n• Mengen → kleur wordt **donkerder**.\n• Alle 3 = bruin/zwart.\n• Gebruikt in: **printer-inkt, verf** *(CMYK + zwart)*.\n\n**Onzichtbaar licht**:\nVoorbij het zichtbare spectrum:\n• **Infrarood (IR)** = onder rood — warmte-straling *(afstandsbediening, nachtbril)*.\n• **Ultraviolet (UV)** = boven violet — zonnebrand-veroorzaker, steriliseert.\n• **Röntgen-straling (X-ray)** = nog hoger — door zacht weefsel in ziekenhuis.\n• **Radiogolven** = veel lager — radio, wifi, mobiel.\n\n**Cito-vraag**:\n*'Waarom is een rode appel rood?'* → Appel weerkaatst rood licht, absorbeert de rest.\n*'Wat is de ezelsbrug voor de regenboog?'* → ROGGBIV.\n*'Wat is een prisma?'* → glazen blok dat licht splitst in kleuren.",
    svg: spectrumSvg(),
    checks: [
      {
        q: "Hoeveel **kleuren** in de regenboog?",
        options: ["7", "3", "10", "5"],
        answer: 0,
        wrongHints: [null, "Dat zijn primaire kleuren.", "Te veel.", "Te weinig."],
      },
      {
        q: "Waarom is een **rode appel rood**?",
        options: ["Weerkaatst rood, absorbeert rest", "Heeft eigen rood licht", "Reflecteert geluid", "Niemand weet"],
        answer: 0,
        wrongHints: [null, "Geen lichtbron.", "Niet geluid.", "Wel bekend."],
      },
      {
        q: "Primaire kleuren bij **licht (RGB)**?",
        options: ["Rood + Groen + Blauw", "Rood + Geel + Blauw", "Cyaan + Magenta + Geel", "Wit + Zwart"],
        answer: 0,
        wrongHints: [null, "Oude verf-theorie.", "Voor inkt (subtractief).", "Geen primaire."],
      },
      {
        q: "Wat is **UV-straling**?",
        options: ["Onzichtbaar boven violet (zonnebrand)", "Soort radio", "Geluid", "Pijn"],
        answer: 0,
        wrongHints: [null, "Lagere frequentie.", "Geen licht.", "Niet."],
      },
    ],
  },

  // STAP 5: Praktijk
  {
    title: "Praktijk — muziek, oog, telefoon, regenboog",
    explanation:
      "**Voorbeelden uit het dagelijks leven**:\n\n**1. Muziekinstrumenten** 🎸\n• **Snaar-instrumenten** *(gitaar, viool, piano)*: snaar trilt → klankkast versterkt.\n• Snaar **korter** → **hogere toon**.\n• Snaar **strakker** → **hogere toon**.\n• Snaar **dunner** → **hogere toon**.\n\n**2. Stem** 🗣️\n• **Stembanden** in keel trillen.\n• Volwassen man: stembanden langer + dikker → **lagere stem**.\n• Vrouw: korter + dunner → **hogere stem**.\n• Kind: nog korter → **hoogste**.\n\n**3. Oog + bril** 👓\n• Zie *Stap 3* — bolle lens voor verziend, holle voor bijziend.\n• Cataract = vertroebeling lens (oude leeftijd).\n• Contactlens = lens direct op hoornvlies.\n\n**4. Camera** 📷\n• Bolle lens **bundelt** licht op **sensor** *(of vroeger film)*.\n• Diafragma = pupil van camera.\n• Sluiter regelt belichtings-tijd.\n\n**5. Telefoon-scherm** 📱\n• Miljoenen kleine **R, G, B-puntjes** *(pixels)*.\n• Door combinatie ontstaat elke kleur op scherm.\n• OLED: elk pixel maakt eigen licht.\n• LCD: backlight + filter.\n\n**6. Regenboog** 🌈\n• Zonlicht door regendruppel → splitst in 7 kleuren.\n• Boog ontstaat doordat verschillende kleuren onder verschillende hoek breken.\n• Soms **dubbele regenboog** — tweede boog buiten eerste (kleuren omgekeerd).\n\n**7. Laser** 🔴\n• **Eén golflengte** licht *(monochromatisch)*.\n• Alle golven **in fase** *(coherent)*.\n• Daardoor heel sterke straal die ver kan reizen.\n• Gebruikt in: barcode-scanner, laserprinter, oogchirurgie, optische-vezel.\n\n**8. Vuurwerk** 🎆\n• Verschillende metalen → verschillende kleuren bij verbranding.\n• Strontium → rood.\n• Barium → groen.\n• Koper → blauw.\n• Natrium → geel.\n\n**9. Stoplicht (verkeer)** 🚦\n• **Rood = stop** *(makkelijk te zien — lange golflengte gaat ver door regen/mist)*.\n• **Groen = ga** *(prima zichtbaar)*.\n• **Geel/oranje = bijna rood**.\n\n**10. Echolocatie** 🦇\nVleermuizen + dolfijnen sturen **ultrasoon geluid** uit + horen echo. Maken zo 'kaart' van omgeving in donker.\n\n**11. Donder + bliksem** ⛈️\n• Bliksem maakt enorm hitte → lucht uitzet → klap = donder.\n• Licht reist sneller dan geluid → bliksem zie je eerst.\n• **3 sec verschil = 1 km afstand**.\n\n**Cito-feitjes**:\n• Oog van **uil** ziet veel beter in donker dan mens *(meer staafjes op netvlies)*.\n• **Honden** horen ultrasoon — hondenfluitje voor mens onhoorbaar.\n• **Bijen** zien UV-licht — bloemen lichten op in UV.\n\n**Bredere context — golven**:\nGeluid + licht zijn beide **golven**, maar:\n• **Geluid** = trilling van **moleculen** *(materie nodig)*.\n• **Licht** = elektromagnetische golf *(geen materie nodig, gaat door vacuüm)*.",
    checks: [
      {
        q: "Wat maakt een **hogere toon** op gitaar?",
        options: ["Kortere/strakkere/dunnere snaar", "Langere snaar", "Plastic snaar", "Niets"],
        answer: 0,
        wrongHints: [null, "Lager.", "Materiaal heeft effect maar niet primair.", "Wel iets."],
      },
      {
        q: "Hoe ontstaat een **regenboog**?",
        options: ["Zonlicht door regendruppels breekt in kleuren", "Magie", "Toeval", "Wolken kleuren"],
        answer: 0,
        wrongHints: [null, "Geen magie.", "Wetenschappelijk verklaarbaar.", "Wolken hebben geen eigen kleur normaal."],
      },
      {
        q: "Wat maakt **laserstraal** speciaal?",
        options: ["1 golflengte + in fase, heel sterk", "Onzichtbaar", "Geluid", "Hard"],
        answer: 0,
        wrongHints: [null, "Wel zichtbaar (de straal).", "Geen geluid.", "Wel sterk, maar specifiek mono+coherent."],
      },
      {
        q: "**3 sec tussen bliksem en donder** = afstand?",
        options: ["~1 km", "~100 m", "~10 km", "~100 km"],
        answer: 0,
        wrongHints: [null, "Te dichtbij.", "Te ver.", "Veel te ver."],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — licht + geluid mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: geluid, licht, spiegels, kleuren, praktijk.\n\nVeel succes!",
    checks: [
      {
        q: "Hoe verspreidt **geluid** zich?",
        options: ["Trillingen door materie", "Stralen door vacuüm", "Met licht", "Met magneten"],
        answer: 0,
        wrongHints: [null, "Dat is licht.", "Geen verband.", "Geen verband."],
      },
      {
        q: "Lichtsnelheid?",
        options: ["~300.000 km/s", "~343 m/s", "~1.500 m/s", "Oneindig"],
        answer: 0,
        wrongHints: [null, "Geluid in lucht.", "Geluid in water.", "Niet oneindig — wel snelste."],
      },
      {
        q: "**Reflectie-wet**: hoek van inval = ... ?",
        options: ["Hoek van weerkaatsing", "0°", "90°", "Onbekend"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Wel bekend."],
      },
      {
        q: "Welke kleur weerkaatst een **gele citroen**?",
        options: ["Geel", "Wit", "Zwart", "Alle behalve geel"],
        answer: 0,
        wrongHints: [null, "Niet wit.", "Zwart absorbeert alles.", "Tegenovergesteld."],
      },
      {
        q: "Wat is **UV-licht**?",
        options: ["Onzichtbaar boven violet (zonnebrand)", "Soort kleur", "Geluid", "Verboden"],
        answer: 0,
        wrongHints: [null, "Niet zichtbaar.", "Geen geluid.", "Niet verboden, wel schadelijk."],
      },
      {
        q: "Mens hoort **frequenties** tot ... ?",
        options: ["20.000 Hz", "100 Hz", "1 miljoen Hz", "1.000.000.000 Hz"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Onmogelijk.", "Belachelijk veel."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const lichtGeluidNatuurkunde = {
  id: "licht-geluid-natuurkunde",
  title: "Licht + geluid (klas 2-3)",
  emoji: "💡",
  level: "klas2-3",
  subject: "natuurkunde",
  referentieNiveau: "2F",
  sloThema: "Natuurkunde — licht + geluid + golven",
  prerequisites: [
    { id: "krachten-natuurkunde", title: "Krachten en bewegingen", niveau: "2F" },
  ],
  intro:
    "Licht + geluid voor klas 2-3 natuurkunde — geluidsgolven (Hz, dB, snelheid 343 m/s), licht (300.000 km/s, rechte lijn), spiegels + lenzen (bril bij/verziend), kleuren-spectrum (ROGGBIV, RGB vs CMY), praktijk (muziek, oog, regenboog, laser). ~15 min.",
  triggerKeywords: [
    "licht", "geluid", "natuurkunde",
    "frequentie", "amplitude", "hertz", "decibel",
    "lichtsnelheid", "reflectie", "breking",
    "spiegel", "lens", "bril", "regenboog",
    "ROGGBIV", "RGB", "spectrum", "UV", "laser",
  ],
  chapters,
  steps,
};

export default lichtGeluidNatuurkunde;
