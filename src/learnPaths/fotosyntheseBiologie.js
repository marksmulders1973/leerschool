// Leerpad: Fotosynthese + plantkunde — klas 1-2 onderbouw VO.
// Onderdeel biologie. Referentieniveau 2F.
// 6 stappen met uitlegPad. Mark's continuum-visie: klas 1-3 onderbouw VO gat.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  blad: "#66bb6a",
  zon: "#ffd54f",
  water: "#42a5f5",
  co2: "#a1887f",
  o2: "#80cbc4",
  highlight: "#ff7043",
};

const stepEmojis = ["🌱", "💧", "🍃", "🫁", "🥗", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is fotosynthese?", emoji: "🌱", from: 0, to: 0 },
  { letter: "B", title: "Wat heeft een plant nodig?", emoji: "💧", from: 1, to: 1 },
  { letter: "C", title: "Bladeren als fabriekjes", emoji: "🍃", from: 2, to: 2 },
  { letter: "D", title: "Zuurstof + ademen", emoji: "🫁", from: 3, to: 3 },
  { letter: "E", title: "Planten in de voedselketen", emoji: "🥗", from: 4, to: 4 },
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function fotosyntheseSvg() {
  // Heldere in/uit-cyclus rond de plant in het midden (herzien 2026-07-31).
  // RECHTS = INVOER (pijlen NAAR de plant): zonlicht (boven), CO₂ (midden), water (onder, uit grond).
  // LINKS  = UITVOER (pijlen WEG van de plant): O₂ zuurstof (boven), glucose/suiker (onder).
  // Alle labels + vormen binnen viewBox 460×320; geen overlap, ruime witruimte.
  // Labels boven drukke zones krijgen een donkere rand voor leesbaarheid.
  const bg = "#0d1b2e", groen = "#00c853", blauw = "#1976d2", geel = "#ffd54f";
  const txt = "#e0e6f0", gedempt = "#8899aa";
  // Donkere rand-set voor labels boven drukke gebieden.
  const rand = `paint-order="stroke" stroke="${bg}" stroke-width="2.6" stroke-linejoin="round"`;
  const cx = 230, cy = 150; // hart van de plant (blad-kruin)
  return `<svg viewBox="-58 0 578 320">
<rect x="-58" y="0" width="578" height="320" fill="${bg}"/>
<text x="230" y="26" text-anchor="middle" fill="${groen}" font-size="16" font-family="Arial" font-weight="bold">Fotosynthese — erin en eruit</text>

<!-- Kolomkopjes -->
<text x="105" y="52" text-anchor="middle" fill="${gedempt}" font-size="12" font-family="Arial" font-weight="bold">← ERUIT</text>
<text x="355" y="52" text-anchor="middle" fill="${gedempt}" font-size="12" font-family="Arial" font-weight="bold">ERIN →</text>

<!-- ===== PLANT IN HET MIDDEN ===== -->
<!-- grond -->
<rect x="176" y="270" width="108" height="30" rx="4" fill="#3e2f26"/>
<text x="230" y="290" text-anchor="middle" fill="${gedempt}" font-size="11" font-family="Arial">grond</text>
<!-- stam -->
<rect x="226" y="150" width="8" height="122" fill="#5d4037"/>
<!-- wortels -->
<path d="M230 272 L214 300 M230 272 L246 300 M230 278 L230 300" stroke="#5d4037" stroke-width="3" fill="none" stroke-linecap="round"/>
<!-- bladeren / kruin -->
<ellipse cx="${cx}" cy="${cy}" rx="52" ry="30" fill="${groen}"/>
<ellipse cx="${cx - 40}" cy="${cy + 8}" rx="26" ry="16" fill="#00a844"/>
<ellipse cx="${cx + 40}" cy="${cy + 8}" rx="26" ry="16" fill="#00a844"/>
<text x="${cx}" y="${cy + 5}" text-anchor="middle" fill="#08351a" font-size="13" font-family="Arial" font-weight="bold">plant</text>

<!-- ===== INVOER (rechts, pijlen NAAR de plant) ===== -->
<!-- Zon boven rechts (getekend, geen emoji — rendert overal betrouwbaar) -->
<g stroke="${geel}" stroke-width="2.5" stroke-linecap="round">
<line x1="410" y1="56" x2="410" y2="64"/><line x1="410" y1="112" x2="410" y2="120"/>
<line x1="378" y1="88" x2="386" y2="88"/><line x1="434" y1="88" x2="442" y2="88"/>
<line x1="388" y1="66" x2="393" y2="71"/><line x1="427" y1="105" x2="432" y2="110"/>
<line x1="432" y1="66" x2="427" y2="71"/><line x1="393" y1="105" x2="388" y2="110"/>
</g>
<circle cx="410" cy="88" r="20" fill="${geel}"/>
<!-- Invoer 1: zonlicht (van boven rechts naar kruin) -->
<line x1="390" y1="104" x2="300" y2="128" stroke="${geel}" stroke-width="3"/>
<polygon points="300,128 314,122 314,134" fill="${geel}"/>
<text x="392" y="128" text-anchor="end" fill="${geel}" font-size="14" font-family="Arial" font-weight="bold" ${rand}>zonlicht</text>

<!-- Invoer 2: CO₂ uit de lucht (recht naar de kruin) -->
<line x1="392" y1="168" x2="292" y2="158" stroke="${gedempt}" stroke-width="3"/>
<polygon points="292,158 306,151 305,164" fill="${gedempt}"/>
<text x="398" y="164" fill="${txt}" font-size="14" font-family="Arial" font-weight="bold">CO₂</text>
<text x="398" y="180" fill="${gedempt}" font-size="11" font-family="Arial">koolstofdioxide</text>
<text x="398" y="194" fill="${gedempt}" font-size="11" font-family="Arial">uit de lucht</text>

<!-- Invoer 3: water via de wortels (van rechtsonder naar de stam, omhoog) -->
<line x1="392" y1="256" x2="292" y2="256" stroke="${blauw}" stroke-width="3"/>
<polygon points="292,256 306,249 306,263" fill="${blauw}"/>
<text x="398" y="252" fill="${blauw}" font-size="14" font-family="Arial" font-weight="bold">Water</text>
<text x="398" y="268" fill="${gedempt}" font-size="11" font-family="Arial">via de wortels</text>
<!-- water stroomt de stam in omhoog -->
<line x1="248" y1="256" x2="248" y2="190" stroke="${blauw}" stroke-width="2.5" stroke-dasharray="4 4"/>
<polygon points="248,186 243,198 253,198" fill="${blauw}"/>

<!-- ===== UITVOER (links, pijlen WEG van de plant) ===== -->
<!-- Uitvoer 1: O₂ zuurstof (van kruin naar linksboven weg) -->
<line x1="182" y1="132" x2="86" y2="96" stroke="${groen}" stroke-width="3"/>
<polygon points="86,96 100,96 94,108" fill="${groen}"/>
<text x="78" y="92" text-anchor="end" fill="${groen}" font-size="14" font-family="Arial" font-weight="bold" ${rand}>O₂ zuurstof</text>
<text x="78" y="108" text-anchor="end" fill="${gedempt}" font-size="11" font-family="Arial" ${rand}>de lucht in</text>

<!-- Uitvoer 2: glucose / suiker (van plant naar links weg) -->
<line x1="182" y1="176" x2="86" y2="210" stroke="${geel}" stroke-width="3"/>
<polygon points="86,210 100,204 100,216" fill="${geel}"/>
<text x="78" y="200" text-anchor="end" fill="${geel}" font-size="14" font-family="Arial" font-weight="bold" ${rand}>Glucose (suiker)</text>
<text x="78" y="216" text-anchor="end" fill="${gedempt}" font-size="11" font-family="Arial" ${rand}>= voedsel voor de plant</text>

<!-- Korte formule onderaan -->
<text x="230" y="316" text-anchor="middle" fill="${txt}" font-size="12" font-family="Arial">zonlicht + water + CO₂ → suiker + zuurstof</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is fotosynthese?
  {
    title: "Wat is fotosynthese?",
    explanation:
      "**Fotosynthese** is hoe planten **hun eigen voedsel maken** met behulp van **zonlicht**.\n\n**Het woord 'fotosynthese'** komt uit het Grieks:\n• **'Foto'** = licht.\n• **'Synthese'** = samenvoegen / maken.\n• Samen: 'maken met licht'.\n\n**Wat doen planten precies?**\nPlanten nemen 3 dingen op:\n1. **Zonlicht** *(via bladeren)*.\n2. **Water** *(via wortels uit de grond)*.\n3. **Koolstofdioxide (CO₂)** *(uit de lucht via bladeren)*.\n\nEn ze produceren 2 dingen:\n1. **Suiker (glucose)** *(voedsel voor de plant)*.\n2. **Zuurstof (O₂)** *(geven ze af aan de lucht — dat is fijn voor ons!)*.\n\n**De formule** *(makkelijk te onthouden)*:\n**CO₂ + H₂O + zonlicht → glucose + O₂**\n\n**Waarom is fotosynthese belangrijk?**\n• Planten zijn de **bron van zuurstof** op aarde *(zonder planten geen lucht om te ademen)*.\n• Planten zijn de **bron van voedsel** voor (bijna) alle dieren *(direct of indirect)*.\n• Planten halen **CO₂** uit de lucht — belangrijk voor klimaat.\n\n**Waar gebeurt het?**\nFotosynthese gebeurt vooral in de **bladeren** van planten, in groene korreltjes in de cellen die **chloroplasten** (bladgroenkorrels) heten. Die bevatten **chlorofyl** *(de groene kleurstof)* — daarom zijn bladeren groen.\n\n**Toets-feitjes**:\n• Planten geven **overdag** zuurstof af *(zonlicht = fotosynthese aan)*.\n• Planten ademen dag én nacht, dus ze gebruiken altijd een beetje zuurstof *(net als wij)*. Overdag maken ze veel méér zuurstof dan ze gebruiken.\n• De aarde-vraag: **wie maakt zuurstof?** → Planten + algen + bacteriën.",
    svg: fotosyntheseSvg(),
    checks: [
      {
        q: "Wat is **fotosynthese**?",
        options: ["Planten maken voedsel met zonlicht", "Planten eten kleine insecten op", "Planten nemen zuurstof op om te leven", "Planten halen voedsel uit de grond"],
        answer: 0,
        wrongHints: [null, "Een paar planten vangen insecten, maar 'foto' betekent licht. Wat doet een plant met licht?", "Dat is ademhaling, en dat doet een plant dag en nacht. Wat gebeurt er alleen als er licht is?", "Uit de grond komen water en mineralen. Maar waar komt de suiker van een plant vandaan?"],
      },
      {
        q: "Welke **3 dingen** heeft een plant nodig voor fotosynthese?",
        options: ["Zonlicht + water + CO₂", "Zonlicht + water + zuurstof", "Water + mest + CO₂", "Zonlicht + mest + grond"],
        answer: 0,
        wrongHints: [null, "Zuurstof komt bij fotosynthese juist vrij. Welk gas neemt de plant dan op?", "Mest helpt een plant groeien, maar welke energiebron ontbreekt hier?", "Mest en grond zijn handig, maar welk gas uit de lucht zet de plant om in suiker?"],
      },
      {
        q: "Wat **produceren** planten met fotosynthese?",
        options: ["Suiker + zuurstof", "Suiker + CO₂", "Bladgroen + zuurstof", "CO₂ + water"],
        answer: 0,
        wrongHints: [null, "CO₂ neemt de plant op uit de lucht. Komt dat gas er dan ook weer uit?", "Bladgroen helpt bij fotosynthese. Wordt het er ook door gemaakt, of is het het gereedschap?", "Stoffen die de plant opneemt, zijn niet hetzelfde als wat eruit komt. Wat gaat er in, wat komt er uit?"],
      },
      {
        q: "Waarom zijn **bladeren groen**?",
        options: ["Door chlorofyl", "Door zonlicht", "Door water", "Door mineralen uit de grond"],
        answer: 0,
        wrongHints: [null, "Zonlicht valt ook op een rode auto. Waarom wordt die niet groen?", "Water is doorzichtig. Kan het een blad dan groen kleuren?", "Wortels nemen de mineralen op, maar zijn zelf niet groen. Zit het groen dan in de mineralen?"],
      },
    ],
  },

  // STAP 2: Wat heeft een plant nodig?
  {
    title: "Wat heeft een plant nodig om te leven?",
    explanation:
      "Een plant heeft **5 dingen** nodig om gezond te groeien:\n\n**1. Zonlicht** ☀️\n• Voor fotosynthese — voedsel maken.\n• **Te veel zon** kan blad doen verbranden.\n• **Te weinig zon** = plant groeit lang en dun *(zoekt licht)*.\n\n**2. Water** 💧\n• Wordt opgenomen via **wortels**.\n• Vervoer in plant via **vaten** in stengel en bladnerven *(een beetje zoals onze bloedvaten)*.\n• **Te weinig water** = plant verwelkt.\n• **Te veel water** = wortels rotten.\n\n**3. Lucht (CO₂)** 💨\n• Plant neemt CO₂ op via blad-poriën *(huidmondjes)*.\n• CO₂ wordt gebruikt voor fotosynthese.\n\n**4. Voedingsstoffen in de grond** 🌱\n• Stikstof, fosfor, kalium *(NPK — meststof-letters)*.\n• Komt uit grond, mest, of compost.\n• Wortels nemen het op met water.\n\n**5. Juiste temperatuur** 🌡️\n• Meeste planten groeien tussen 15-25°C.\n• **Te koud** = groei stopt.\n• **Te heet** = verbrandt.\n\n**toetsvraag — wat NIET nodig?**\nPlanten hebben **geen zuurstof** nodig om voedsel te maken *(maken het juist!)*. Wel voor hun ademhaling *(dag én nacht, ook in de wortels)*, maar fotosynthese gebruikt geen O₂.\n\n**Experiment-vraag** *(klassieker op de toets)*:\n*'Wat gebeurt als je een plant in een donkere kamer zet?'*\n→ Plant kan **geen fotosynthese** doen → geen voedsel → verwelkt na een tijdje.\n\n*'Plant in glazen pot zonder gat — wat gebeurt?'*\n→ Water blijft staan → wortels rotten.\n\n**Tip — kamerplanten**:\nVeel kamerplanten komen uit het regenwoud. Daarom houden ze van:\n• Weinig direct zonlicht *(schaduw onder boomtoppen)*.\n• Hoge luchtvochtigheid *(spray water)*.\n• Niet te koud.",
    checks: [
      {
        q: "Hoe nemen planten **water op**?",
        options: ["Via wortels uit de grond", "Via bladeren uit de lucht", "Via huidmondjes in het blad", "Via de stengel uit regenwater"],
        answer: 0,
        wrongHints: [null, "Bladeren vangen licht en CO₂. Waarom gaat een plant in droge grond dan toch hangen?", "Door huidmondjes verdampt juist water naar buiten. Waar komt dat water oorspronkelijk vandaan?", "De stengel vervoert water omhoog. Maar waar begint die waterweg?"],
      },
      {
        q: "Wat doet een plant **'s nachts**?",
        options: ["Ademt zuurstof in", "Doet fotosynthese", "Stopt met alles", "Geeft zuurstof af"],
        answer: 0,
        wrongHints: [null, "Wat heeft fotosynthese nodig, en is dat er in het donker?", "Een plant blijft leven, ook in het donker. Wat moet een levend wezen altijd blijven doen?", "Zuurstof afgeven hoort bij fotosynthese — en wat heeft die nodig?"],
      },
      {
        q: "Wat is **NPK**?",
        options: ["Voedingsstoffen in mest", "Een soort bestrijdingsmiddel", "Een kleurstof in bladeren", "Gassen die een plant opneemt"],
        answer: 0,
        wrongHints: [null, "Een bestrijdingsmiddel doodt plaagdieren. Waar staan de letters N, P en K voor?", "De kleurstof in bladeren heet bladgroen. Waar staan de letters N, P en K voor?", "Een plant neemt CO₂ op via zijn blad. Komen N, P en K binnen via de lucht of via de wortels?"],
      },
      {
        q: "Wat heeft een plant **NIET nodig**?",
        options: ["Suiker van buitenaf", "Zonlicht op de bladeren", "Water uit de bodem", "CO₂ uit de lucht"],
        answer: 0,
        wrongHints: [null, "Een plant vangt met zijn bladeren zonlicht om zijn eigen eten te maken. Zou hij zonder licht dan wel kunnen groeien?", "Denk aan wat je een plant elke week geeft zodat hij niet verwelkt. Kan hij dat missen?", "Planten nemen dit gas uit de lucht op om suiker van te maken. De vraag is wat een plant NIET nodig heeft — hoort dit daarbij?"],
        uitlegPad: {
          stappen: [
            { titel: "Plant = producent", tekst: "Planten maken hun eigen voedsel uit zonlicht + water + CO₂. Geen externe voedingsbron nodig." },
          ],
          woorden: [{ woord: "producent", uitleg: "Levend wezen dat eigen voedsel maakt." }],
          theorie: "Planten zijn in voedselketens producenten — basis van alle leven.",
          voorbeelden: [{ type: "stap", tekst: "Plant gebruikt zonlicht om glucose te maken. Hoeft niet te jagen of grazen." }],
          basiskennis: [{ onderwerp: "Plant ≠ dier", uitleg: "Dieren moeten eten. Planten maken zelf." }],
          niveaus: {
            basis: "Geen externe voeding.",
            simpeler: "Planten maken zelf voedsel via fotosynthese. Ze hebben dus geen voer of vlees nodig — wel zon, water, lucht, mineralen uit grond.",
            nogSimpeler: "Geen extern voedsel",
          },
        },
      },
    ],
  },

  // STAP 3: Bladeren
  {
    title: "Bladeren — de fotosynthese-fabriekjes",
    explanation:
      "Een **blad** is een super-georganiseerde **fotosynthese-fabriek**.\n\n**Hoe ziet een blad eruit?**\n• **Boven**: glad, waslaagje *(beschermt tegen verdamping)*.\n• **Onder**: ruwer, met **huidmondjes** *(kleine poriën)*.\n• **Binnen**: **bladmoes** met **chloroplasten** *(groene bladgroenkorrels in de cellen)*.\n• **Bladaders**: vervoeren water en suiker.\n\n**Huidmondjes (stomata)**:\n• Kleine openingen in de onderkant van het blad.\n• Plant neemt hierdoor CO₂ op en geeft O₂ af *(overdag)*.\n• Ook **water verdampt** door huidmondjes *(transpiratie)*.\n• Sluiten als plant water moet sparen *(bij droogte)*.\n\n**Chloroplasten (bladgroenkorrels)**:\n• Binnen ontstaan suikers tijdens fotosynthese.\n• Bevatten **chlorofyl** *(groene kleurstof)*.\n• Chlorofyl vangt **rood en blauw licht** op — **groen** licht weerkaatst → daarom zien we groen.\n\n**Waarom zijn bladeren plat?**\n• Plat oppervlak **vangt veel zonlicht** op.\n• Meer oppervlakte = meer chloroplasten = meer fotosynthese.\n• Dunne bladeren = zonlicht bereikt de hele dikte.\n\n**Bladvormen**:\n• **Naald** *(dennen)*: weinig oppervlak, maar bestand tegen kou + droogte.\n• **Breed** *(eik, beuk)*: veel zonlicht maar verliest meer water.\n• **Stekelig** *(cactus)*: bladeren omgevormd, zeer waterbesparend.\n\n**Bladval (loofbomen in de herfst)**:\n• In herfst: minder zonlicht, kou komt.\n• Boom **trekt chlorofyl terug** → blad verkleurt geel/rood/bruin.\n• **Bladeren vallen af** → boom spaart energie + water in winter.\n• Niet alle bomen: **dennen en sparren** behouden naalden *(altijdgroen)*.\n\n**toetsvraag**:\n*'Waarom zijn bladeren groen?'* → chlorofyl weerkaatst groen licht.\n*'Waarom vallen bladeren in herfst?'* → boom spaart energie tegen winter.",
    checks: [
      {
        q: "Wat is een **huidmondje**?",
        options: ["Klein gaatje in blad voor gas-uitwisseling", "Opening waardoor de plant water opzuigt", "Nerf die water door het blad vervoert", "Haartje aan de wortel dat water opneemt"],
        answer: 0,
        wrongHints: [null, "Door huidmondjes verdampt juist water naar buiten. Welke gassen gaan er nog meer in en uit?", "Dat doet een bladnerf. Lijkt een nerf op een mondje?", "Een huidmondje zit in het blad. Waar zitten wortelharen?"],
      },
      {
        q: "Welke kleur **weerkaatst** chlorofyl?",
        options: ["Groen", "Rood", "Blauw", "Geel"],
        answer: 0,
        wrongHints: [null, "Rood licht wordt door chlorofyl juist sterk opgenomen. Welke kleur kaatst dan terug naar je oog?", "Blauw licht wordt ook goed opgenomen. Welke kleur zie je als je naar een gezond blad kijkt?", "Geel zie je pas in de herfst, als het chlorofyl afbreekt. Welke kleur kaatst chlorofyl zelf terug?"],
      },
      {
        q: "Waarom **vallen bladeren** in herfst?",
        options: ["De boom spaart water voor de winter", "Bladeren zijn na een jaar versleten", "Herfststormen blazen ze van de takken", "Rupsen en andere dieren eten ze op"],
        answer: 0,
        wrongHints: [null, "Een dennenboom houdt zijn naalden jaren. Slijten bladeren echt na één jaar?", "Ook bij windstil weer laten bomen in de herfst hun blad los. Wat heeft de boom daar zelf aan?", "Rupsen eten vooral in voorjaar en zomer. Waarom vallen de bladeren dan juist in de herfst?"],
      },
      {
        q: "Welke boom is in de winter **nog groen**?",
        options: ["Den", "Eik", "Beuk", "Berk"],
        answer: 0,
        wrongHints: [null, "Een eik heeft brede bladeren. Wat gebeurt daarmee in de herfst?", "Soms hangen er nog bruine, dode bladeren aan een beuk. Zijn die nog groen?", "Een berk heeft brede, dunne blaadjes. Hoe ziet een berk eruit in januari?"],
      },
    ],
  },

  // STAP 4: Zuurstof + ademen
  {
    title: "Zuurstof en ademhaling — plant vs mens",
    explanation:
      "**Planten en dieren** ademen allebei, dag én nacht, op dezelfde manier. Maar planten doen overdag óók iets wat **andersom** werkt: fotosynthese.\n\n**Ademhaling** *(mensen, dieren én planten — altijd)*:\n• Nemen **zuurstof (O₂)** op.\n• Geven **koolstofdioxide (CO₂)** af.\n• Zo halen ze energie uit voedsel.\n\n**Fotosynthese** *(alleen planten, overdag)*:\n• Nemen **CO₂ IN** *(voor fotosynthese)*.\n• Geven **O₂ UIT** *(als bijproduct)*.\n• Door zonlicht.\n\n**Gevolg — perfecte cyclus**:\nDieren geven CO₂ → planten gebruiken het → planten geven O₂ → dieren gebruiken dat. **Niemand zonder de ander!**\n\n**Toets-feitje**:\n• Aarde heeft **~21% zuurstof** in lucht.\n• Komt grotendeels van planten + algen + bacteriën.\n• Zonder planten zou de zuurstof opraken *(zou heel lang duren, maar wel)*.\n\n**Algen en bossen — wie maakt het meeste zuurstof?**\n• Het **Amazone-regenwoud** wordt vaak 'de longen van de aarde' genoemd.\n• Maar feitelijk: **algen en fytoplankton in de zee** maken een groot deel — schattingen lopen van **50% tot 80%** van alle zuurstof op aarde *(precies weten is moeilijk)*.\n• **Bossen** doen veel maar gebruiken zelf ook zuurstof bij hun ademhaling *(dag én nacht)*.\n\n**Toets-strikvraag**:\n*'Geeft een plant ook zuurstof af 's nachts?'*\n→ **Nee!** 's Nachts geen zonlicht → geen fotosynthese → geen zuurstof-productie. De plant ademt dan alleen: hij gebruikt wat zuurstof *(net als wij — dat doet hij overdag ook)*.\n\n*'Is een plant beter om in slaapkamer te hebben (luchtkwaliteit) overdag of 's nachts?'*\n→ **Overdag** — dan geeft hij zuurstof. 's Nachts gebruikt hij juist een beetje zuurstof.\n\n**Bos = klimaatregelaar**:\nBomen halen CO₂ uit lucht en slaan koolstof op in hout. Daarom:\n• **Bomen planten** helpt tegen klimaatverandering.\n• **Bos kappen** doet het tegenovergestelde *(CO₂ blijft in lucht)*.\n• **Regenwoud beschermen** is wereldwijde prioriteit.\n\n**Klassiek experiment** *(toets-klassieker)*:\n*'Plant onder glazen pot met kaars erin — kaars gaat uit?'*\n→ Kaars gebruikt zuurstof op. Plant geeft zuurstof terug *(als er licht is)*. Kaars zou langer kunnen branden.\n\nBekend experiment van **Joseph Priestley** (1771).",
    checks: [
      {
        q: "Wat geven planten **overdag** AF?",
        options: ["Zuurstof", "CO₂", "Suiker", "Stikstof"],
        answer: 0,
        wrongHints: [null, "CO₂ is een bouwstof voor suiker. Neemt de plant het overdag op of geeft hij het af?", "Die suiker houden ze zelf als voedsel.", "Stikstof halen planten als voeding uit de bodem. Welk gas ontstaat er bij fotosynthese?"],
      },
      {
        q: "Wat produceert het **meeste zuurstof** voor de hele aarde?",
        options: ["Algen en plankton in de oceanen", "Het Amazonewoud in Zuid-Amerika", "Alle tropische bossen op het land", "Graslanden en akkers op het land"],
        answer: 0,
        wrongHints: [null, "Bekende bijnaam 'longen van de aarde', maar oceanen leveren meer.", "Bossen leveren veel — maar minder dan de oceanen.", "Akkers en graslanden maken best zuurstof. Maar zijn ze de grootste bron op aarde?"],
      },
      {
        q: "Wat gebeurt als planten **allemaal verdwijnen**?",
        options: ["De zuurstof zou opraken", "Het klimaat zou kouder worden", "Er zouden meer dieren komen", "Er zou minder CO₂ in de lucht komen"],
        answer: 0,
        wrongHints: [null, "Planten halen CO₂ uit de lucht. Wat doet extra CO₂ met de temperatuur?", "Waar halen planteneters hun voedsel vandaan, en wat eten de vleeseters?", "Planten halen CO₂ uit de lucht. Wat gebeurt er met dat gas als niemand het meer opneemt?"],
      },
      {
        q: "Geven planten **'s nachts** ook zuurstof af?",
        options: ["Nee", "Ja, evenveel", "Ja, als het warm is", "Ja, maar minder dan overdag"],
        answer: 0,
        wrongHints: [null, "Waarmee maakt een plant overdag zuurstof? Is dat er 's nachts ook?", "Warmte is geen licht. Wat heeft een plant nodig om zuurstof te maken?", "Wat heeft een plant nodig om zuurstof te maken — en is dat er 's nachts?"],
      },
    ],
  },

  // STAP 5: Voedselketens
  {
    title: "Planten in de voedselketen — de basis van alles",
    explanation:
      "Planten staan **onderaan** elke voedselketen — **producenten**.\n\n**Voedselketen-structuur**:\n• **Producent** = plant *(maakt eigen voedsel via fotosynthese)*.\n• **1e consument** = herbivoor *(eet planten — koe, konijn)*.\n• **2e consument** = carnivoor *(eet herbivoren — vos, valk)*.\n• **Toproofdier** = niemand eet die zelf *(leeuw, orka)*.\n• **Afbreker** = bacteriën + schimmels *(breken dode planten/dieren af)*.\n\n**Voorbeelden van ketens**:\n• **Eenvoudig**: gras → konijn → vos.\n• **Zee**: alg → garnaal → vis → zeehond → orka.\n• **Bos**: blad → rups → mees → sperwer.\n\n**Belangrijke termen**:\n• **Herbivoor** = plant-eter.\n• **Carnivoor** = vleeseter.\n• **Omnivoor** = beide *(mens, beer, varken)*.\n• **Aaseter** = eet dode dieren *(gier)*.\n\n**Energie-doorgave**:\n• Planten leggen zonne-energie vast in suiker *(noem dat 100% van de energie in de keten)*.\n• Herbivoor krijgt **~10%** van die energie door als hij plant eet.\n• Carnivoor krijgt weer **~10%** als hij herbivoor eet.\n• **Energie-piramide** — minder energie naar boven → minder roofdieren mogelijk.\n\n**Daarom**:\n• Veel grasplanten → kunnen 100 konijnen voeden.\n• 100 konijnen → kunnen maar ~10 vossen voeden.\n• 10 vossen → niet genoeg voor 1 leeuw *(theoretisch)*.\n\n**Mens in de keten**:\nMensen zijn **omnivoren**:\n• Plantaardig: groente, fruit, brood (graan), rijst, pasta.\n• Dierlijk: vlees, vis, ei, melk.\n\n**Toets-discussie**:\n• **Vegetariërs** eten geen vlees — pakken energie 'lager' in de keten.\n• Dat is **efficiënter** voor de aarde *(minder land + water nodig)*.\n• Vlees-productie kost meer energie.\n\n**Wat als planten ophouden?**\nAlle herbivoren sterven → daarna ook carnivoren → de hele keten klapt in elkaar. **Daarom is biodiversiteit belangrijk**.",
    checks: [
      {
        q: "Wat is een **producent** in voedselketen?",
        options: ["Plant", "Mens", "Vleeseter", "Aaseter"],
        answer: 0,
        wrongHints: [null, "Maakt een mens zijn eigen voedsel met zonlicht, of eet hij iets?", "Een vleeseter eet andere dieren. Maakt hij zelf voedsel?", "Een aaseter eet dode dieren. Waar begint de voedselketen eigenlijk?"],
      },
      {
        q: "Een **leeuw** eet vooral zebra's. Wat is dat?",
        options: ["Carnivoor", "Herbivoor", "Omnivoor", "Producent"],
        answer: 0,
        wrongHints: [null, "Een herbivoor eet planten. Staat er gras op het menu van een leeuw?", "Een omnivoor eet planten én vlees. Eet een leeuw ook vruchten of gras?", "Een producent maakt zelf voedsel met zonlicht. Kan een leeuw dat?"],
      },
      {
        q: "Mens is een ... ?",
        options: ["Omnivoor", "Carnivoor", "Herbivoor", "Producent"],
        answer: 0,
        wrongHints: [null, "Eet jij ook brood, groente en fruit?", "Eten de meeste mensen ook vlees, vis of eieren?", "Kan een mens zelf voedsel maken met zonlicht?"],
      },
      {
        q: "Waarom eten **mensen energie-efficiënter** als vegetariër?",
        options: ["Minder energieverlies in de voedselketen", "Planten bevatten meer energie per hap", "Plantaardig eten verteert met minder energie", "Planten bevatten meer vitamines en vezels"],
        answer: 0,
        wrongHints: [null, "Een hap biefstuk bevat vaak meer energie dan een hap sla. Waar gaat de energie dan verloren?", "Gaat het om jouw maag, of om de dieren die eerst gevoerd moeten worden?", "Vitamines en vezels leveren nauwelijks energie. Waar gaat de vraag eigenlijk over?"],
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — fotosynthese-mix",
    explanation:
      "Mix-toets. Door elkaar: fotosynthese, plant-onderdelen, ademhaling, voedselketens.\n\nVeel succes!",
    checks: [
      {
        q: "Welke **3 dingen** gebruikt een plant in fotosynthese?",
        options: ["Zonlicht + water + CO₂", "Zuurstof + water + mineralen", "Zonlicht + zuurstof + grond", "Mest + water + lucht"],
        answer: 0,
        wrongHints: [null, "Zuurstof komt bij fotosynthese vrij. En welke energiebron ontbreekt hier?", "Zuurstof komt bij fotosynthese juist vrij. Welk gas gaat er dan in?", "Mest levert mineralen, maar welke energiebron ontbreekt hier?"],
      },
      {
        q: "Wat **produceert** een plant tijdens fotosynthese?",
        options: ["Suiker + zuurstof", "Water + CO₂", "Zetmeel + CO₂", "Suiker + stikstof"],
        answer: 0,
        wrongHints: [null, "Water en CO₂ neemt de plant op. Wat komt er dan uit?", "CO₂ gaat bij fotosynthese de plant in. Welk gas komt er juist uit?", "Stikstof haalt een plant als voeding uit de bodem. Welk gas ontstaat bij fotosynthese?"],
      },
      {
        q: "**Chlorofyl** zit in:",
        options: ["Chloroplasten", "Mitochondriën", "Celkern", "Vacuole"],
        answer: 0,
        wrongHints: [null, "Mitochondriën verbranden suiker. Vangen ze ook licht op?", "In de kern zit het DNA. Is de kern het groene deel?", "De vacuole is gevuld met celvocht. Is dat de groene kleurstof?"],
      },
      {
        q: "Een **kikker** eet vliegen. Kikker is dan een ...?",
        options: ["Carnivoor", "Producent", "Herbivoor", "Afbreker"],
        answer: 0,
        wrongHints: [null, "Maakt een kikker zelf voedsel met zonlicht?", "Is een vlieg een plant?", "Een afbreker eet dode resten. Vangt een kikker levende of dode vliegen?"],
      },
      {
        q: "**Wanneer geven planten zuurstof af**?",
        options: ["Overdag", "'s Nachts", "Bij warm weer", "Als het regent"],
        answer: 0,
        wrongHints: [null, "Wat heeft een plant nodig om zuurstof te maken, en is dat er in het donker?", "Warmte is geen licht. Geeft een plant op een warme nacht zuurstof af?", "Regen geeft water. Wat heeft een plant nog meer nodig om zuurstof te maken?"],
      },
      {
        q: "Hoe verliest een **den** *(naaldboom)* zijn naalden?",
        options: ["Steeds een paar tegelijk", "Allemaal in de herfst", "Allemaal in de lente", "Nooit één naald"],
        answer: 0,
        wrongHints: [null, "Dan zou een den 's winters kaal staan. Is dat zo?", "Zie je in de lente kale dennen staan?", "Kijk eens wat er onder een dennenboom op de grond ligt."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const fotosyntheseBiologie = {
  id: "fotosynthese-biologie",
  title: "Fotosynthese + plantkunde (klas 1-2)",
  emoji: "🌱",
  level: "klas1-2",
  subject: "biologie",
  referentieNiveau: "2F",
  sloThema: "Biologie — plantkunde en fotosynthese",
  prerequisites: [
    { id: "cel-biologie", title: "Cellen (biologie basis)", niveau: "2F" },
  ],
  intro:
    "Fotosynthese voor klas 1-2 — wat planten doen met zonlicht, water en CO₂ om suiker + zuurstof te maken. Bladeren, ademhaling, voedselketens. ~15 min.",
  triggerKeywords: [
    "fotosynthese", "plant", "blad", "bladeren", "chlorofyl",
    "zonlicht", "zuurstof", "CO2", "huidmondjes",
    "producent", "voedselketen", "boom",
  ],
  chapters,
  steps,
};

export default fotosyntheseBiologie;
