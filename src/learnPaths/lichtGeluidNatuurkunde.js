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
      "**Geluid** = trillingen die zich verspreiden door een stof *(lucht, water, vast)*.\n\n**Hoe ontstaat geluid?**\n• Iets **trilt** *(snaar, vel van een trommel, stembanden)*.\n• Trilling duwt **lucht-moleculen** heen en weer.\n• Die duwen weer de volgende → **golf** ontstaat.\n• Golf bereikt **oor** → trommelvlies trilt → wij horen.\n\n**Geluidsgolven hebben 2 eigenschappen**:\n\n**1. Frequentie** *(toonhoogte)* — hoeveel trillingen per seconde.\n• Eenheid: **hertz (Hz)** = 1 trilling/seconde.\n• **Hoge frequentie** *(veel Hz)* = **hoge toon** *(piep)*.\n• **Lage frequentie** *(weinig Hz)* = **lage toon** *(brom)*.\n• Mens hoort **20 Hz tot 20.000 Hz**.\n• Onder 20 Hz = **infrasoon** *(olifanten, walvissen)*.\n• Boven 20.000 Hz = **ultrasoon** *(honden, vleermuizen, dolfijnen)*.\n\n**2. Amplitude** *(volume / hardheid)* — hoeveel beweging.\n• **Grote amplitude** = **hard geluid**.\n• **Kleine amplitude** = **zacht geluid**.\n• Eenheid: **decibel (dB)**.\n• 0 dB = gehoor-grens.\n• 30 dB = fluisteren.\n• 60 dB = gesprek.\n• 85 dB = drukke straat (lange tijd schadelijk).\n• 120 dB = vliegtuig opstijgen.\n• 140+ dB = pijn-grens.\n\n**Geluidssnelheid**:\n• In **lucht**: ~**343 m/s** *(bij 20°C)*.\n• In **water**: ~**1500 m/s** *(4× zo snel)*.\n• In **staal**: ~**5000 m/s**.\n• In **vaste stoffen en vloeistoffen** gaat geluid meestal sneller dan in lucht.\n\n**Geluid in vacuüm**:\n• Geluid heeft een **medium** nodig *(lucht/water/vast)*.\n• In **vacuüm (ruimte)** = **geen geluid**.\n• Daarom kunnen astronauten elkaar niet horen zonder radio in ruimte.\n\n**Echo**:\nGeluid kaatst terug van harde oppervlakten.\n• Tijd echo × geluidssnelheid = afstand × 2.\n• Voorbeeld: echo na 2 sec → 2 × 343 = 686 m → object 343 m verder.\n\n**Sonar / echolocatie**:\nVleermuizen + dolfijnen gebruiken ultrasoon geluid om afstand te meten.\n\n**toetsvraag**:\n*'Hoe verplaatst geluid zich?'* → via trillingen door materie.\n*'Wat is de geluidssnelheid in lucht?'* → ~343 m/s.\n*'Hoeveel dB is een gesprek?'* → ~60 dB.",
    svg: golfSvg(),
    checks: [
      {
        q: "Wat is **frequentie**?",
        options: ["Aantal trillingen per seconde (Hz)", "Hoe hard een geluid is (dB)", "Snelheid van het geluid (m/s)", "Lengte van één golf (m)"],
        answer: 0,
        wrongHints: [null, "Hoe hard een geluid is, meet je in decibel. Dat hangt af van de amplitude.", "Snelheid gaat over meters per seconde. Gaat frequentie over afstand?", "De lengte van één golf heet de golflengte. Waar gaat frequentie dan over?"],
      },
      {
        q: "Welke **frequentie-range** kan een mens horen?",
        options: ["20-20.000 Hz", "20-2.000 Hz", "200-200.000 Hz", "2-100.000 Hz"],
        answer: 0,
        wrongHints: [null, "Een fluittoon of vogelgezang zit boven 2.000 Hz, en die hoor je prima. Ligt de bovengrens dan zo laag?", "Een lage bastoon van 50 Hz hoor je nog. En hoor je ook het piepen van een vleermuis?", "Tonen van een paar Hz voel je eerder dan dat je ze hoort, en vleermuisgeluid hoor je niet. Hoe ver reikt het menselijk oor?"],
      },
      {
        q: "Hoe snel reist geluid in **lucht**?",
        options: ["~343 m/s", "~1.500 m/s", "~300.000 km/s", "~10 m/s"],
        answer: 0,
        wrongHints: [null, "1.500 m/s is de snelheid van geluid in water. Gaat geluid in lucht sneller of langzamer dan in water?", "300.000 km/s is de lichtsnelheid. Zie je de bliksem eerder dan je de donder hoort?", "10 m/s is zo snel als een sprinter. Hoor je een roep van de overkant van een sportveld pas na seconden?"],
      },
      {
        q: "Wat hoor je in **vacuüm**?",
        options: ["Niets", "Hetzelfde als in lucht", "Alleen lage tonen", "Zachter geluid"],
        answer: 0,
        wrongHints: [null, "Bedenk: wat heeft geluid nodig om zich te verplaatsen? Is dat er in vacuüm?", "Hebben lage tonen iets anders nodig om zich te verplaatsen dan hoge tonen?", "Zachter, of helemaal niets? Is er in vacuüm iets dat kan trillen?"],
      },
    ],
  },

  // STAP 2: Licht
  {
    title: "Licht — rechte stralen + super snel",
    explanation:
      "**Licht** is **elektromagnetische straling** die ons oog kan zien.\n\n**Belangrijke eigenschappen van licht**:\n\n**1. Lichtsnelheid** = **300.000 km/s** in vacuüm.\n• Symbool: **c**.\n• Snelste in heelal — niets gaat sneller *(volgens Einstein)*.\n• Vergelijk: geluid 343 m/s → licht is **bijna 1.000.000 keer sneller**.\n• Licht legt **7,5 keer aarde-omtrek per seconde** af.\n\n**Daarom**:\n• Donder + bliksem: zie je bliksem eerst, hoor je donder later.\n• 3 sec tussen bliksem en donder = ~1 km afstand *(3 × 343m = ~1 km)*.\n\n**2. Lichtbronnen**:\n• **Echte lichtbronnen** = maken zelf licht: zon, kaars, lamp, gloeidraad, vuur.\n• **Verlichte voorwerpen** = krijgen licht van een bron, kaatsen terug: maan, boek, jas. Wij zien ze omdat ze licht weerkaatsen.\n• **Donker** = afwezigheid van licht.\n\n**3. Licht in rechte lijn**:\nLicht gaat altijd in een **rechte lijn**.\n• Daardoor ontstaat **schaduw** als iets in de weg staat.\n• Daardoor zie je achter een hoek niets *(geen 'kromme licht')*.\n\n**4. Lichtjaar**:\nDe **afstand die licht in 1 jaar aflegt** *(eenheid in sterrenkunde)*.\n• 1 lichtjaar = **9,5 biljoen km**.\n• Dichtstbijzijnde ster *(Proxima Centauri)* = ~4,2 lichtjaar weg.\n• We zien ster **zoals die 4 jaar geleden was**.\n\n**5. Doorzichtige stoffen** *(transparant)*:\n• Licht gaat door: **glas, water, schone lucht**.\n• Beetje door: **doorschijnend (translucent)** — gordijn, mat glas.\n• Niet door: **ondoorzichtig** — hout, metaal, je hand.\n\n**6. Reflectie + breking**:\n• **Reflectie** = licht kaatst terug *(spiegel, water)*.\n• **Breking** = licht buigt af bij overgang van stof naar stof *(rietje in water lijkt 'gebroken')*.\n• Door breking ontstaat **regenboog** in water-druppels.\n\n**toetsvraag**:\n*'Wat is de lichtsnelheid?'* → 300.000 km/s.\n*'Waarom zie je bliksem vóór je donder hoort?'* → licht reist veel sneller dan geluid.\n*'Wat is een lichtjaar?'* → afstand die licht in 1 jaar aflegt.\n\n**Belangrijke termen**:\n• **Lichtstraal** = lijn waarlangs licht beweegt.\n• **Lichtbron** = iets dat zelf licht maakt.\n• **Reflectie** = terugkaatsen.\n• **Breking** = afbuigen bij overgang.\n• **Schaduw** = donkere plek waar licht niet komt.",
    checks: [
      {
        q: "Wat is de **lichtsnelheid**?",
        options: ["~300.000 km/s", "~343 m/s", "~3.000 km/s", "Oneindig"],
        answer: 0,
        wrongHints: [null, "Dat is geluid in lucht.", "Met 3.000 km/s zou zonlicht er zo'n 14 uur over doen om hier te komen. Het duurt ruim 8 minuten; wat zegt dat?", "Licht van de zon doet er ruim 8 minuten over om de aarde te bereiken. Kan het dan oneindig snel zijn?"],
      },
      {
        q: "Hoe gaat licht **door lucht**?",
        options: ["In een rechte lijn", "In een grote boog", "In een golvende lijn", "In een zigzaglijn"],
        answer: 0,
        wrongHints: [null, "Niet in gewone lucht — denk aan hoe een schaduw ontstaat.", "Licht is wel een golf, maar slingert een zonnestraal door een kier in een stoffige kamer heen en weer?", "Hoe ziet een zonnestraal door een kier eruit in een stoffige kamer?"],
      },
      {
        q: "Wat is een **echte lichtbron**?",
        options: ["Iets dat zelf licht maakt", "Iets dat licht weerkaatst", "Iets dat heel fel licht geeft", "Iets dat licht doorlaat"],
        answer: 0,
        wrongHints: [null, "De maan kaatst zonlicht terug. Is de maan dan een echte lichtbron?", "Een spiegel in de zon kan fel schitteren. Maakt die dan zelf licht?", "Een ruit laat licht door, maar geeft die in het donker licht?"],
      },
      {
        q: "Wat is een **lichtjaar**?",
        options: ["Afstand die licht in 1 jaar aflegt", "Tijd die zonlicht nodig heeft tot de aarde", "Afstand die de aarde in 1 jaar aflegt", "Tijd die een ster licht blijft geven"],
        answer: 0,
        wrongHints: [null, "Zonlicht doet er ruim 8 minuten over naar de aarde. Waarom zou je daar een woord met 'jaar' voor gebruiken?", "Wie of wat legt de afstand af in het woord licht-jaar? Is dat de aarde?", "Hoe lang een ster brandt, meet je in miljoenen of miljarden jaren. Waarvoor gebruiken sterrenkundigen het lichtjaar dan?"],
      },
    ],
  },

  // STAP 3: Spiegels + lenzen
  {
    title: "Spiegels + lenzen",
    explanation:
      "**Spiegels** en **lenzen** veranderen de richting van licht.\n\n**Spiegels** *(reflectie)*:\n\n**1. Vlakke spiegel** *(badkamer-spiegel)*:\n• **Beeld is rechtop + spiegelbeeldig** *(links/rechts omgekeerd)*.\n• Beeld lijkt **even ver achter spiegel** als jij ervoor.\n• Passpiegel: je ziet je hele lichaam al als de spiegel **half zo lang** is als jij.\n\n**2. Bolle spiegel (convex)** *(rond auto-spiegel)*:\n• Beeld **rechtop + verkleind**.\n• **Breder gezichtsveld**.\n• Gebruikt in auto-buitenspiegel, winkel-veiligheid.\n\n**3. Holle spiegel (concaaf)**:\n• Beeld **vergroot** dichtbij.\n• Brandpunt: zonlicht kan worden geconcentreerd → vuur!\n• Gebruikt in scheerspiegel, telescoop, koplampen.\n\n**Wet van reflectie**:\n**Hoek van inval = hoek van weerkaatsing.**\n• Licht komt onder 30° → kaatst onder 30° terug *(gemeten t.o.v. **normaal**, lijn loodrecht op spiegel)*.\n\n**Lenzen** *(breking)*:\n\n**1. Bolle lens (convex / positief)** — vergroot:\n• Lens is dikker in midden.\n• Licht buigt naar elkaar toe *(convergeert)*.\n• **Brandpunt** = punt waar parallel licht samenkomt.\n• Gebruikt in: **vergrootglas, camera, oog-lens, microscoop, brillen verziend**.\n\n**2. Holle lens (concaaf / negatief)** — verkleint:\n• Lens is dunner in midden.\n• Licht buigt uit elkaar *(divergeert)*.\n• Gebruikt in: **brillen bijziend, sommige verrekijkers**.\n\n**Oog werkt als camera**:\n• **Hoornvlies** + **lens** focussen licht.\n• **Pupil** regelt hoeveelheid licht *(opent in donker)*.\n• **Netvlies** vangt licht op + stuurt signalen naar **hersenen**.\n\n**Brillen — wanneer welke?**\n• **Bijziend** *(dichtbij OK, ver weg wazig)* → **holle lens** (negatief).\n• **Verziend** *(ver weg OK, dichtbij wazig)* → **bolle lens** (positief).\n• **Astigmatisme** *(scheef oog)* → cilindrische lens.\n• **Ouderdomsverziendheid** *(rond 45 jaar — lens stug)* → leesbril.\n\n**Bijziendheid (myopie)**:\nOoglens te bol → licht voor netvlies → ver wazig.\nHolle bril-lens duwt licht uit elkaar → corrigeert.\n\n**Verziendheid (hypermetropie)**:\nOoglens te plat → licht achter netvlies → dichtbij wazig.\nBolle bril-lens duwt licht samen → corrigeert.\n\n**toetsvraag**:\n*'Welk soort lens heeft een vergrootglas?'* → bolle (convex).\n*'Welke spiegel breder zien?'* → bolle (convex).\n*'Wat is bijziend?'* → ver niet scherp; lens te bol; corrigeer met holle lens.",
    checks: [
      {
        q: "Wat is een **bolle lens**?",
        options: ["Dikker in het midden, bundelt het licht", "Dunner in het midden, bundelt het licht", "Dikker in het midden, spreidt het licht", "Dunner in het midden, spreidt het licht"],
        answer: 0,
        wrongHints: [null, "Een lens die in het midden dunner is, heet hol. Welke vorm hoort bij bol?", "Kan een lens die het licht spreidt zonlicht op één punt (een brandpunt) samenbrengen, zoals een vergrootglas?", "Dunner in het midden en het licht spreiden: dat doet een holle lens. Welke vorm past bij bol?"],
      },
      {
        q: "**Wet van reflectie**?",
        options: ["Hoek van inval = hoek van weerkaatsing", "Hoek van inval = 2 × hoek van weerkaatsing", "Hoek van inval + weerkaatsing = 180°", "Hoek van weerkaatsing is altijd 90°"],
        answer: 0,
        wrongHints: [null, "Teken een straal op een spiegel: gaat de teruggekaatste straal twee keer zo schuin weg?", "Kies een invalshoek van 30°: zou de straal dan onder 150° teruggaan, bijna dezelfde kant op?", "Kaatst een bal altijd recht omhoog terug, hoe schuin je hem ook tegen de grond gooit?"],
      },
      {
        q: "Welke lens voor **bijziend** (ver wazig)?",
        options: ["Holle lens", "Bolle lens", "Vlakke lens", "Cilinderlens"],
        answer: 0,
        wrongHints: [null, "Een bolle lens bundelt het licht extra. Helpt dat een oog dat verre dingen al te sterk bundelt?", "Een vlak glas buigt het licht niet. Kan dat een oog helpen dat het licht verkeerd breekt?", "Een cilinderlens corrigeert een scheef gebogen hoornvlies (astigmatisme). Is dat het probleem bij bijziendheid?"],
        uitlegPad: {
          stappen: [
            { titel: "Probleem bij bijziend", tekst: "Bij bijziendheid is de ooglens te bol — licht komt vóór het netvlies samen i.p.v. erop. Daardoor is ver weg wazig." },
            { titel: "Oplossing: holle lens", tekst: "Een holle (negatieve) brillen-lens duwt het licht eerst uit elkaar, voor het de ooglens bereikt. Dan komt het samen op het netvlies → scherp ver." },
          ],
          woorden: [{ woord: "bijziend (myopie)", uitleg: "Dichtbij scherp, ver weg wazig." }, { woord: "holle lens", uitleg: "Lens dunner in het midden, dikker aan de rand." }],
          theorie: "Holle lens = divergerend = sterkte negatief (bv. -2,0 diopter).",
          voorbeelden: [{ type: "stap", tekst: "Bril sterkte -3,0 = correctie voor bijziendheid." }],
          basiskennis: [{ onderwerp: "Diopter", uitleg: "Eenheid van brillen-sterkte. Negatief = bijziend, positief = verziend." }],
          niveaus: {
            basis: "Holle lens.",
            simpeler: "Bij bijziend kan je ver weg niet scherp zien. Ooglens is te bol. Een holle bril-lens corrigeert door licht uit elkaar te duwen voor de ooglens.",
            nogSimpeler: "Holle lens",
          },
        },
      },
      {
        q: "Welk **deel van oog** vangt licht op?",
        options: ["Netvlies", "Pupil", "Hoornvlies", "Iris"],
        answer: 0,
        wrongHints: [null, "De pupil is het gaatje waardoor licht naar binnen gaat. Wordt het beeld daar ook opgevangen?", "Het hoornvlies is het heldere voorste laagje dat het licht breekt. Waar valt het beeld uiteindelijk op?", "De iris is het gekleurde ringetje dat de pupil groter of kleiner maakt. Waar valt het beeld op?"],
      },
    ],
  },

  // STAP 4: Kleuren
  {
    title: "Kleuren + spectrum",
    explanation:
      "**Licht** lijkt wit, maar bevat **alle kleuren** door elkaar.\n\n**Newton's experiment** (1666):\nIsaac Newton liet zonlicht door een **prisma** schijnen. Het licht splitste in **7 kleuren** — de **regenboog**.\n\n**De 7 kleuren** *(ezelsbrug: ROGGBIV)*:\n• **R**ood\n• **O**ranje\n• **G**eel *(yellow)*\n• **G**roen *(green)*\n• **B**lauw *(blue)*\n• **I**ndigo *(blauwviolet)*\n• **V**iolet *(paars)*\n\n**Hoe ontstaat een regenboog?**\n• Zonlicht schijnt op **regen-druppels**.\n• Druppel breekt licht *(als prisma)*.\n• Verschillende kleuren buigen verschillend.\n• Zo ontstaat boog.\n• Mooie regenboog: zon achter je, regen vóór je.\n\n**Lichte vs kleuren-toon**:\n• **Wit licht** = alle kleuren samen.\n• **Zwart** = geen licht.\n• **Gekleurd licht** = bepaalde golflengten.\n\n**Waarom zien we voorwerpen gekleurd?**\nWanneer wit licht op iets schijnt:\n• Voorwerp **absorbeert** sommige kleuren.\n• Voorwerp **weerkaatst** andere kleuren.\n• Wat weerkaatst wordt → wat wij **zien**.\n\nVoorbeelden:\n• Rode appel = absorbeert alle kleuren behalve rood.\n• Wit papier = weerkaatst alle kleuren.\n• Zwart shirt = absorbeert alle kleuren.\n• Blauwe lucht = uitzondering: de lucht verstrooit vooral blauw licht.\n\n**Mengen van kleuren — 2 systemen**:\n\n**1. Additief (licht)** — mengen van **licht-bronnen**:\n• Primaire kleuren: **Rood + Groen + Blauw (RGB)**.\n• Rood + Groen = geel.\n• Rood + Blauw = magenta.\n• Groen + Blauw = cyaan.\n• Alle 3 = wit.\n• Gebruikt in: **TV, monitor, telefoon-scherm**.\n\n**2. Subtractief (verf)** — mengen van **pigmenten**:\n• Primaire kleuren: **Cyaan + Magenta + Geel (CMY)** *(of in oude theorie: rood-blauw-geel)*.\n• Mengen → kleur wordt **donkerder**.\n• Alle 3 = bruin/zwart.\n• Gebruikt in: **printer-inkt, verf** *(CMYK + zwart)*.\n\n**Onzichtbaar licht**:\nVoorbij het zichtbare spectrum:\n• **Infrarood (IR)** = onder rood — warmte-straling *(afstandsbediening, nachtbril)*.\n• **Ultraviolet (UV)** = boven violet — zonnebrand-veroorzaker, steriliseert.\n• **Röntgen-straling (X-ray)** = nog hoger — door zacht weefsel in ziekenhuis.\n• **Radiogolven** = veel lager — radio, wifi, mobiel.\n\n**toetsvraag**:\n*'Waarom is een rode appel rood?'* → Appel weerkaatst rood licht, absorbeert de rest.\n*'Wat is de ezelsbrug voor de regenboog?'* → ROGGBIV.\n*'Wat is een prisma?'* → glazen blok dat licht splitst in kleuren.",
    svg: spectrumSvg(),
    checks: [
      {
        q: "Hoeveel **kleuren** in de regenboog?",
        options: ["7", "3", "10", "5"],
        answer: 0,
        wrongHints: [null, "3 is het aantal primaire kleuren van licht. Hoeveel kleurbanden zie je in een regenboog?", "Noem de kleuren eens op, van rood tot violet. Kom je op 10?", "Noem de kleuren op van rood tot violet. Vergeet je er geen tussen blauw en violet?"],
      },
      {
        q: "Waarom is een **rode appel rood**?",
        options: ["Weerkaatst rood, absorbeert rest", "Absorbeert rood, weerkaatst rest", "Geeft zelf rood licht af", "Laat rood licht door, als glas"],
        answer: 0,
        wrongHints: [null, "Als het rode licht wordt opgeslokt, kan rood dan nog je oog bereiken?", "Een appel is geen lamp: in het donker zie je hem niet. Waar komt het rode licht dan vandaan?", "Kun je door een appel heen kijken? Waar komt het rode licht dan vandaan?"],
      },
      {
        q: "Primaire kleuren bij **licht (RGB)**?",
        options: ["Rood + Groen + Blauw", "Rood + Geel + Blauw", "Cyaan + Magenta + Geel", "Rood + Groen + Geel"],
        answer: 0,
        wrongHints: [null, "Rood, geel en blauw ken je van het mengen van verf. Werkt licht mengen op dezelfde manier?", "Cyaan, magenta en geel zitten in printerinkt. Is dat licht mengen of inkt mengen?", "Geel licht kun je mengen uit rood en groen licht. Is geel dan een basiskleur?"],
      },
      {
        q: "Wat is **UV-straling**?",
        options: ["Onzichtbaar licht voorbij violet", "Onzichtbaar licht onder rood", "Heel fel zichtbaar paars licht", "Geluid met trillingen boven 20.000 Hz"],
        answer: 0,
        wrongHints: [null, "Onder rood zit een ander soort straling — welke?", "Paars kun je zien. Kun je UV ook zien?", "Geluid boven 20.000 Hz heet ultrasoon — dat is geen licht."],
      },
    ],
  },

  // STAP 5: Praktijk
  {
    title: "Praktijk — muziek, oog, telefoon, regenboog",
    explanation:
      "**Voorbeelden uit het dagelijks leven**:\n\n**1. Muziekinstrumenten** 🎸\n• **Snaar-instrumenten** *(gitaar, viool, piano)*: snaar trilt → klankkast versterkt.\n• Snaar **korter** → **hogere toon**.\n• Snaar **strakker** → **hogere toon**.\n• Snaar **dunner** → **hogere toon**.\n\n**2. Stem** 🗣️\n• **Stembanden** in keel trillen.\n• Volwassen man: stembanden langer + dikker → **lagere stem**.\n• Vrouw: korter + dunner → **hogere stem**.\n• Kind: nog korter → **hoogste**.\n\n**3. Oog + bril** 👓\n• Zie *Stap 3* — bolle lens voor verziend, holle voor bijziend.\n• Cataract = vertroebeling lens (oude leeftijd).\n• Contactlens = lens direct op hoornvlies.\n\n**4. Camera** 📷\n• Bolle lens **bundelt** licht op **sensor** *(of vroeger film)*.\n• Diafragma = pupil van camera.\n• Sluiter regelt belichtings-tijd.\n\n**5. Telefoon-scherm** 📱\n• Miljoenen kleine **R, G, B-puntjes** *(pixels)*.\n• Door combinatie ontstaat elke kleur op scherm.\n• OLED: elke pixel maakt eigen licht.\n• LCD: backlight + filter.\n\n**6. Regenboog** 🌈\n• Zonlicht door regendruppel → splitst in 7 kleuren.\n• Boog ontstaat doordat verschillende kleuren onder verschillende hoek breken.\n• Soms **dubbele regenboog** — tweede boog buiten eerste (kleuren omgekeerd).\n\n**7. Laser** 🔴\n• **Eén golflengte** licht *(monochromatisch)*.\n• Alle golven **in fase** *(coherent)*.\n• Daardoor heel sterke straal die ver kan reizen.\n• Gebruikt in: barcode-scanner, laserprinter, oogchirurgie, optische-vezel.\n\n**8. Vuurwerk** 🎆\n• Verschillende metalen → verschillende kleuren bij verbranding.\n• Strontium → rood.\n• Barium → groen.\n• Koper → blauw.\n• Natrium → geel.\n\n**9. Stoplicht (verkeer)** 🚦\n• **Rood = stop** *(makkelijk te zien — lange golflengte gaat ver door regen/mist)*.\n• **Groen = ga** *(prima zichtbaar)*.\n• **Geel/oranje = bijna rood**.\n\n**10. Echolocatie** 🦇\nVleermuizen + dolfijnen sturen **ultrasoon geluid** uit + horen echo. Maken zo 'kaart' van omgeving in donker.\n\n**11. Donder + bliksem** ⛈️\n• Bliksem maakt enorme hitte → lucht zet uit → klap = donder.\n• Licht reist sneller dan geluid → bliksem zie je eerst.\n• **3 sec verschil = 1 km afstand**.\n\n**Toets-feitjes**:\n• Oog van **uil** ziet veel beter in donker dan mens *(meer staafjes op netvlies)*.\n• **Honden** horen ultrasoon — hondenfluitje voor mens onhoorbaar.\n• **Bijen** zien UV-licht — bloemen lichten op in UV.\n\n**Bredere context — golven**:\nGeluid + licht zijn beide **golven**, maar:\n• **Geluid** = trilling van **moleculen** *(materie nodig)*.\n• **Licht** = elektromagnetische golf *(geen materie nodig, gaat door vacuüm)*.",
    checks: [
      {
        q: "Wat maakt een **hogere toon** op gitaar?",
        options: ["Snaar korter of strakker", "Snaar langer of slapper", "Snaar dikker maken", "Harder tokkelen"],
        answer: 0,
        wrongHints: [null, "Een lange, slappe snaar trilt juist langzaam.", "Een dikke snaar is zwaarder — trilt die sneller of langzamer?", "Harder tokkelen verandert hoe hard het klinkt, niet hoe hoog."],
      },
      {
        q: "Hoe ontstaat een **regenboog**?",
        options: ["Zonlicht breekt in regendruppels", "Wolken kleuren het zonlicht", "Zonlicht weerkaatst op de zee", "Regenwater bevat kleurstof"],
        answer: 0,
        wrongHints: [null, "Wolken zijn wit of grijs — waar wordt het licht dan gesplitst?", "Je ziet ook regenbogen boven land.", "Regenwater is kleurloos — waar komen de kleuren dan vandaan?"],
      },
      {
        q: "Wat maakt **laserstraal** speciaal?",
        options: ["Eén golflengte, golven in fase", "Alle kleuren, golven in fase", "Eén golflengte, golven niet in fase", "Alle kleuren, golven niet in fase"],
        answer: 0,
        wrongHints: [null, "Zie je bij een laserpen een regenboog of één kleur?", "Ook licht door een kleurfilter heeft bijna één golflengte, maar is geen laser. Wat is er anders aan hoe de golven lopen?", "Alle kleuren door elkaar is gewoon wit licht, zoals van een lamp. Wat is daar nog speciaal aan?"],
      },
      {
        q: "**3 sec tussen bliksem en donder** = afstand?",
        options: ["~1 km", "~100 m", "~10 km", "~100 km"],
        answer: 0,
        wrongHints: [null, "Op 100 m afstand hoor je de donder vrijwel meteen. Zou dat dan 3 seconden duren?", "Op 10 km afstand duurt het bijna een halve minuut voor de donder er is. Klopt dat met 3 seconden?", "Op 100 km afstand zou de donder er ruim 5 minuten over doen, als je hem al hoort. Past dat bij 3 seconden?"],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — licht + geluid mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: geluid, licht, spiegels, kleuren, praktijk.\n\nVeel succes!",
    checks: [
      {
        q: "Hoe verspreidt **geluid** zich?",
        options: ["Als trillingen door een stof", "Als stralen door vacuüm", "Als lucht die naar je oor stroomt", "Als elektrisch signaal door de lucht"],
        answer: 0,
        wrongHints: [null, "Stralen door vacuüm: zo reist licht. Kan geluid door een lege ruimte?", "Waait het als iemand tegen je praat? Wat beweegt er dan wel?", "Elektrische signalen gaan door draden. Wat gebeurt er met de lucht als een trommel klinkt?"],
      },
      {
        q: "Lichtsnelheid?",
        options: ["~300.000 km/s", "~343 m/s", "~1.500 m/s", "Oneindig"],
        answer: 0,
        wrongHints: [null, "343 m/s is de snelheid van geluid in lucht. Zie je de bliksem eerder dan je de donder hoort?", "1.500 m/s is de snelheid van geluid in water. Is licht sneller of langzamer dan geluid?", "Licht van de zon doet er ruim 8 minuten over om bij ons te komen. Kan het dan oneindig snel zijn?"],
      },
      {
        q: "**Reflectie-wet**: hoek van inval = ... ?",
        options: ["Hoek tussen teruggekaatste straal en normaal", "Hoek tussen gebroken straal en normaal", "Hoek tussen teruggekaatste straal en spiegel", "Hoek tussen invallende straal en spiegel"],
        answer: 0,
        wrongHints: [null, "Breking gaat over licht dat een andere stof ingaat. Gaat licht bij een spiegel de spiegel in?", "Valt een straal in onder 30° met de normaal, dan maakt de teruggekaatste straal 60° met de spiegel. Is dat gelijk?", "De hoek van inval meet je vanaf de normaal. Is de hoek met de spiegel dan even groot?"],
      },
      {
        q: "Welke kleur weerkaatst een **gele citroen**?",
        options: ["Geel", "Wit", "Zwart", "Alle behalve geel"],
        answer: 0,
        wrongHints: [null, "Wit zie je als alle kleuren worden teruggekaatst. Ziet een citroen er wit uit?", "Een zwart voorwerp neemt al het licht op. Ziet een citroen er zwart uit?", "Welke kleur komt bij je oog aan: wat wordt opgenomen of wat wordt teruggekaatst?"],
      },
      {
        q: "Wat is **UV-licht**?",
        options: ["Onzichtbaar licht voorbij violet", "Onzichtbaar licht onder rood", "Onhoorbaar geluid boven 20.000 Hz", "Een heel felle tint paars"],
        answer: 0,
        wrongHints: [null, "Onzichtbare straling onder rood ken je van de afstandsbediening. Heet die ook UV?", "Geluid boven 20.000 Hz heet ultrasoon. Is UV een trilling van lucht of een soort straling?", "Een tint paars kun je zien — UV ook?"],
      },
      {
        q: "Mens hoort **frequenties** tot ... ?",
        options: ["20.000 Hz", "100 Hz", "1 miljoen Hz", "2.000 Hz"],
        answer: 0,
        wrongHints: [null, "100 Hz is een heel lage brom. Hoor je ook een hoge fluittoon?", "Veel te hoog: zulke tonen hoort zelfs een vleermuis niet meer.", "Een fluittoon of vogelgezang komt hoger dan 2.000 Hz. Kun je die horen?"],
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
