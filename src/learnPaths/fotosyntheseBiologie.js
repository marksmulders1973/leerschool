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
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function fotosyntheseSvg() {
  // ICP groep 6-8 / klas 1-2: duidelijk onderscheid IN-de-plant vs UIT-de-plant.
  // Mark feedback 2026-05-12: oude SVG had verwarrende pijl-richtingen.
  // - Pijlen die NAAR het blad wijzen = INPUT (zonlicht, CO2 uit lucht).
  // - Pijl OMHOOG uit grond = INPUT (water via wortels).
  // - Pijl die WEG van het blad wijst = OUTPUT (O2 naar de lucht).
  // - Suiker blijft in de plant — geen pijl naar buiten, label binnen plant.
  // Plus labels boven en onder de plant: "ERIN" en "ERUIT".
  const bladX = 170, bladY = 115;
  return `<svg viewBox="0 0 340 240">
<rect x="0" y="0" width="340" height="240" fill="${COLORS.paper}"/>
<text x="170" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Fotosynthese — wat gaat erin, wat komt eruit?</text>

<!-- KOPJES boven -->
<text x="70" y="42" text-anchor="middle" fill="${COLORS.o2}" font-size="11" font-family="Arial" font-weight="bold">↑ ERUIT</text>
<text x="270" y="42" text-anchor="middle" fill="${COLORS.curve2}" font-size="11" font-family="Arial" font-weight="bold">↓ ERIN</text>

<!-- Zon (rechts boven, voor INPUT) -->
<circle cx="285" cy="68" r="18" fill="${COLORS.zon}"/>
<text x="285" y="72" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">zon</text>

<!-- INPUT 1: Zonlicht pijl van zon naar blad -->
<line x1="270" y1="80" x2="${bladX + 25}" y2="${bladY - 6}" stroke="${COLORS.zon}" stroke-width="2.5"/>
<polygon points="${bladX + 22},${bladY - 12} ${bladX + 30},${bladY - 6} ${bladX + 18},${bladY - 4}" fill="${COLORS.zon}"/>
<text x="245" y="105" text-anchor="end" fill="${COLORS.zon}" font-size="11" font-family="Arial" font-weight="bold">zonlicht →</text>

<!-- INPUT 2: CO2 pijl van rechts naar blad -->
<line x1="305" y1="${bladY}" x2="${bladX + 28}" y2="${bladY}" stroke="${COLORS.co2}" stroke-width="2.5"/>
<polygon points="${bladX + 30},${bladY - 5} ${bladX + 22},${bladY} ${bladX + 30},${bladY + 5}" fill="${COLORS.co2}"/>
<text x="310" y="${bladY - 4}" fill="${COLORS.co2}" font-size="12" font-family="Arial" font-weight="bold">CO₂</text>
<text x="310" y="${bladY + 12}" fill="${COLORS.muted}" font-size="9" font-family="Arial">uit lucht</text>

<!-- Plant: stam + blad in midden -->
<rect x="${bladX - 3}" y="${bladY + 10}" width="6" height="65" fill="#5d4037"/>
<ellipse cx="${bladX}" cy="${bladY}" rx="32" ry="14" fill="${COLORS.blad}"/>
<text x="${bladX}" y="${bladY + 4}" text-anchor="middle" fill="#0e1014" font-size="11" font-family="Arial" font-weight="bold">blad</text>

<!-- OUTPUT: O2 pijl van blad naar links omhoog (weg) -->
<line x1="${bladX - 28}" y1="${bladY - 3}" x2="50" y2="${bladY - 25}" stroke="${COLORS.o2}" stroke-width="2.5"/>
<polygon points="55,${bladY - 30} 45,${bladY - 27} 53,${bladY - 19}" fill="${COLORS.o2}"/>
<text x="30" y="${bladY - 32}" fill="${COLORS.o2}" font-size="12" font-family="Arial" font-weight="bold">O₂ →</text>
<text x="30" y="${bladY - 18}" fill="${COLORS.muted}" font-size="9" font-family="Arial">zuurstof</text>

<!-- Suiker (BLIJFT in plant — geen pijl) -->
<text x="${bladX}" y="${bladY + 26}" text-anchor="middle" fill="${COLORS.highlight}" font-size="11" font-family="Arial" font-weight="bold">+ suiker</text>
<text x="${bladX}" y="${bladY + 38}" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">(blijft in plant — voor groei)</text>

<!-- Grond -->
<rect x="100" y="200" width="160" height="28" fill="#5d4037" opacity="0.5"/>
<text x="180" y="219" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">grond</text>

<!-- INPUT 3: Water pijl OMHOOG door wortel/stam naar blad -->
<line x1="${bladX}" y1="225" x2="${bladX}" y2="${bladY + 12}" stroke="${COLORS.water}" stroke-width="3"/>
<polygon points="${bladX - 5},${bladY + 14} ${bladX + 5},${bladY + 14} ${bladX},${bladY + 6}" fill="${COLORS.water}"/>
<text x="${bladX + 18}" y="218" fill="${COLORS.water}" font-size="11" font-family="Arial" font-weight="bold">↑ water</text>
<text x="${bladX + 18}" y="230" fill="${COLORS.muted}" font-size="9" font-family="Arial">uit grond</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is fotosynthese?
  {
    title: "Wat is fotosynthese?",
    explanation:
      "**Fotosynthese** is hoe planten **hun eigen voedsel maken** met behulp van **zonlicht**.\n\n**Het woord 'fotosynthese'** komt uit het Grieks:\n• **'Foto'** = licht.\n• **'Synthese'** = samenvoegen / maken.\n• Samen: 'maken met licht'.\n\n**Wat doen planten precies?**\nPlanten nemen 3 dingen op:\n1. **Zonlicht** *(via bladeren)*.\n2. **Water** *(via wortels uit de grond)*.\n3. **Koolstofdioxide (CO₂)** *(uit de lucht via bladeren)*.\n\nEn ze produceren 2 dingen:\n1. **Suiker (glucose)** *(voedsel voor de plant)*.\n2. **Zuurstof (O₂)** *(geven ze af aan de lucht — dat is fijn voor ons!)*.\n\n**De formule** *(makkelijk te onthouden)*:\n**CO₂ + H₂O + zonlicht → glucose + O₂**\n\n**Waarom is fotosynthese belangrijk?**\n• Planten zijn de **bron van zuurstof** op aarde *(zonder planten geen lucht om te ademen)*.\n• Planten zijn de **bron van voedsel** voor (bijna) alle dieren *(direct of indirect)*.\n• Planten halen **CO₂** uit de lucht — belangrijk voor klimaat.\n\n**Waar gebeurt het?**\nFotosynthese gebeurt vooral in de **bladeren** van planten, in groene cellen die **chloroplasten** heten. Die bevatten **chlorofyl** *(de groene kleurstof)* — daarom zijn bladeren groen.\n\n**Cito-feitjes**:\n• Planten geven **dag** zuurstof af *(zonlicht = fotosynthese aan)*.\n• 's Nachts gebruiken planten wel zuurstof *(net als wij ademen)*, maar veel minder.\n• De aarde-vraag: **wie maakt zuurstof?** → Planten + algen + bacteriën.",
    svg: fotosyntheseSvg(),
    checks: [
      {
        q: "Wat is **fotosynthese**?",
        options: ["Planten maken voedsel met zonlicht", "Planten eten dieren", "Planten ademen 's nachts uit", "Planten groeien zonder licht"],
        answer: 0,
        wrongHints: [null, "Planten zijn geen vleeseters meestal.", "Verkeerd om — dat is omgekeerd.", "Wel licht nodig voor fotosynthese."],
      },
      {
        q: "Welke **3 dingen** heeft een plant nodig voor fotosynthese?",
        options: ["Zonlicht + water + CO₂", "Zonlicht + zuurstof + grond", "Water + voedsel + grond", "Vlees + water + zuurstof"],
        answer: 0,
        wrongHints: [null, "Plant geeft juist zuurstof AF (niet nodig als input).", "Voedsel maakt plant zelf.", "Plant eet geen vlees."],
      },
      {
        q: "Wat **produceren** planten met fotosynthese?",
        options: ["Suiker + zuurstof", "Vlees + bloed", "Aarde + steen", "CO₂ + water"],
        answer: 0,
        wrongHints: [null, "Planten maken geen vlees.", "Geen grondstoffen.", "CO₂ + water gaan IN, niet uit."],
      },
      {
        q: "Waarom zijn **bladeren groen**?",
        options: ["Door chlorofyl (de groene kleurstof)", "Door zonlicht", "Door water", "Toeval"],
        answer: 0,
        wrongHints: [null, "Zonlicht is wit/geel.", "Water is doorzichtig.", "Geen toeval — biologische reden."],
      },
    ],
  },

  // STAP 2: Wat heeft een plant nodig?
  {
    title: "Wat heeft een plant nodig om te leven?",
    explanation:
      "Een plant heeft **5 dingen** nodig om gezond te groeien:\n\n**1. Zonlicht** ☀️\n• Voor fotosynthese — voedsel maken.\n• **Te veel zon** kan blad doen verbranden.\n• **Te weinig zon** = plant groeit lang en dun *(zoekt licht)*.\n\n**2. Water** 💧\n• Wordt opgenomen via **wortels**.\n• Vervoer in plant via **bladeren-aderen** *(net als ons bloed)*.\n• **Te weinig water** = plant verwelkt.\n• **Te veel water** = wortels rotten.\n\n**3. Lucht (CO₂)** 💨\n• Plant 'ademt' CO₂ in via blad-poriën *(huidmondjes)*.\n• CO₂ wordt gebruikt voor fotosynthese.\n\n**4. Voedingsstoffen in de grond** 🌱\n• Stikstof, fosfor, kalium *(NPK — meststof-letters)*.\n• Komt uit grond, mest, of compost.\n• Wortels nemen het op met water.\n\n**5. Juiste temperatuur** 🌡️\n• Meeste planten groeien tussen 15-25°C.\n• **Te koud** = groei stopt.\n• **Te heet** = verbrandt.\n\n**Cito-vraag — wat NIET nodig?**\nPlanten hebben **geen zuurstof** nodig om voedsel te maken *(maken het juist!)*. Wel een beetje voor 's nachts, maar fotosynthese gebruikt geen O₂.\n\n**Experiment-vraag** *(klassiek Cito)*:\n*'Wat gebeurt als je een plant in een donkere kamer zet?'*\n→ Plant kan **geen fotosynthese** doen → geen voedsel → verwelkt na een tijdje.\n\n*'Plant in glazen pot zonder gat — wat gebeurt?'*\n→ Water blijft staan → wortels rotten.\n\n**Tip — kamerplanten**:\nVeel kamerplanten komen uit het regenwoud. Daarom houden ze van:\n• Lage zon *(schaduw onder boomtoppen)*.\n• Hoge luchtvochtigheid *(spray water)*.\n• Niet te koud.",
    checks: [
      {
        q: "Hoe nemen planten **water op**?",
        options: ["Via wortels uit de grond", "Via bladeren uit de lucht", "Via zonlicht", "Via wind"],
        answer: 0,
        wrongHints: [null, "Bladeren zijn voor CO₂ + zonlicht, niet water.", "Zonlicht is energie, geen water.", "Wind brengt geen water."],
      },
      {
        q: "Wat doet een plant **'s nachts**?",
        options: ["Ademt zuurstof in (weinig)", "Doet fotosynthese", "Groeit niet", "Verandert in dier"],
        answer: 0,
        wrongHints: [null, "Geen zonlicht = geen fotosynthese.", "Planten groeien soms juist 's nachts.", "Nee."],
      },
      {
        q: "Wat is **NPK**?",
        options: ["Voedingsstoffen in mest", "Plant-soort", "Bladsoort", "Bloem-naam"],
        answer: 0,
        wrongHints: [null, "Niet plant-soort.", "Niet blad.", "Niet bloem."],
      },
      {
        q: "Wat heeft een plant **NIET nodig**?",
        options: ["Eigen voedsel van buitenaf", "Zonlicht", "Water", "CO₂"],
        answer: 0,
        wrongHints: [null, "Wel nodig.", "Wel nodig.", "Wel nodig."],
        uitlegPad: {
          stappen: [
            { titel: "Plant = producent", tekst: "Planten maken hun eigen voedsel uit zonlicht + water + CO₂. Geen externe voedingsbron nodig." },
          ],
          woorden: [{ woord: "producent", uitleg: "Levend wezen dat eigen voedsel maakt." }],
          theorie: "Planten zijn in voedselketens producenten — basis van alle leven.",
          voorbeelden: [{ type: "stap", tekst: "Plant gebruikt zonlicht om glucose te maken. Hoeft niet te jagen of grazen." }],
          basiskennis: [{ onderwerp: "Plant ≠ dier", uitleg: "Dieren moeten eten. Planten maken zelf." }],
          niveaus: {
            basis: "Geen externe voeding. A.",
            simpeler: "Planten maken zelf voedsel via fotosynthese. Ze hebben dus geen voer of vlees nodig — wel zon, water, lucht, mineralen uit grond. = A.",
            nogSimpeler: "Geen extern voedsel = A.",
          },
        },
      },
    ],
  },

  // STAP 3: Bladeren
  {
    title: "Bladeren — de fotosynthese-fabriekjes",
    explanation:
      "Een **blad** is een super-georganiseerde **fotosynthese-fabriek**.\n\n**Hoe ziet een blad eruit?**\n• **Boven**: glad, wax-laagje *(beschermt tegen verdamping)*.\n• **Onder**: ruwer, met **huidmondjes** *(kleine poriën)*.\n• **Binnen**: **bladmoes** met **chloroplasten** *(de groene cellen)*.\n• **Bladaders**: vervoeren water en suiker.\n\n**Huidmondjes (stomata)**:\n• Kleine openingen in het blad-onderkant.\n• Plant 'ademt' CO₂ in en O₂ uit.\n• Ook **water verdampt** door huidmondjes *(transpiratie)*.\n• Sluiten als plant water moet sparen *(bij droogte)*.\n\n**Chloroplasten (groene cellen)**:\n• Binnen ontstaan suikers tijdens fotosynthese.\n• Bevatten **chlorofyl** *(groene kleurstof)*.\n• Chlorofyl vangt **rood en blauw licht** op — **groen** licht weerkaatst → daarom zien we groen.\n\n**Waarom zijn bladeren plat?**\n• Plat oppervlak **vangt veel zonlicht** op.\n• Meer oppervlakte = meer chloroplasten = meer fotosynthese.\n• Dunne bladeren = zonlicht bereikt de hele dikte.\n\n**Bladvormen**:\n• **Naald** *(dennen)*: weinig oppervlak, maar bestand tegen kou + droogte.\n• **Breed** *(eik, beuk)*: veel zonlicht maar verliest meer water.\n• **Stekelig** *(cactus)*: bladeren omgevormd, zeer waterbesparend.\n\n**Bladval (loofbomen 's herfst)**:\n• In herfst: minder zonlicht, kou komt.\n• Boom **trekt chlorofyl terug** → blad verkleurt geel/rood/bruin.\n• **Bladeren vallen af** → boom spaart energie + water in winter.\n• Niet alle bomen: **dennen en sparren** behouden naalden *(altijdgroen)*.\n\n**Cito-vraag**:\n*'Waarom zijn bladeren groen?'* → chlorofyl weerkaatst groen licht.\n*'Waarom vallen bladeren in herfst?'* → boom spaart energie tegen winter.",
    checks: [
      {
        q: "Wat is een **huidmondje**?",
        options: ["Klein gaatje in blad voor gas-uitwisseling", "Mond van een plant-dier", "Bladnerf", "Wortel-haar"],
        answer: 0,
        wrongHints: [null, "Geen plant-dier.", "Bladnerf is iets anders.", "Wortel-haar zit onder de grond."],
      },
      {
        q: "Welke kleur **weerkaatst** chlorofyl?",
        options: ["Groen", "Rood", "Blauw", "Geel"],
        answer: 0,
        wrongHints: [null, "Wordt opgenomen.", "Wordt opgenomen.", "Wordt deels opgenomen."],
      },
      {
        q: "Waarom **vallen bladeren** in herfst?",
        options: ["Boom spaart energie/water voor winter", "Bladeren zijn 'op'", "Wind blaast ze los", "Dieren eten ze"],
        answer: 0,
        wrongHints: [null, "Niet exact 'op'.", "Wind helpt maar is niet de hoofdreden.", "Niet de hoofdreden."],
      },
      {
        q: "Welke boom **verliest GEEN bladeren** in herfst?",
        options: ["Den", "Eik", "Beuk", "Berk"],
        answer: 0,
        wrongHints: [null, "Loofboom — verliest blad.", "Loofboom.", "Loofboom."],
      },
    ],
  },

  // STAP 4: Zuurstof + ademen
  {
    title: "Zuurstof en ademhaling — plant vs mens",
    explanation:
      "**Planten en dieren** ademen allebei, maar **andersom**.\n\n**Mensen + dieren** *(en planten 's nachts)*:\n• Ademen **zuurstof (O₂) IN**.\n• Ademen **koolstofdioxide (CO₂) UIT**.\n• Voor energie verkrijgen uit voedsel.\n\n**Planten overdag**:\n• Nemen **CO₂ IN** *(voor fotosynthese)*.\n• Geven **O₂ UIT** *(als bijproduct)*.\n• Door zonlicht.\n\n**Gevolg — perfecte cyclus**:\nDieren geven CO₂ → planten gebruiken het → planten geven O₂ → dieren gebruiken dat. **Niemand zonder de ander!**\n\n**Cito-feitje**:\n• Aarde heeft **~21% zuurstof** in lucht.\n• Komt grotendeels van planten + algen + bacteriën.\n• Zonder planten zou de zuurstof opraken *(zou heel lang duren, maar wel)*.\n\n**Algen en bossen — wie maakt het meeste zuurstof?**\n• Het **Amazone-regenwoud** wordt vaak 'de longen van de aarde' genoemd.\n• Maar feitelijk: **algen en fytoplankton in de zee** maken een groot deel — schattingen lopen van **50% tot 80%** van alle zuurstof op aarde *(precies weten is moeilijk)*.\n• **Bossen** doen veel maar gebruiken zelf ook bij ademhaling 's nachts.\n\n**Cito-stikvraag**:\n*'Geeft een plant ook zuurstof af 's nachts?'*\n→ **Nee!** 's Nachts geen zonlicht → geen fotosynthese → geen zuurstof-productie. Plant ademt dan zelfs wat zuurstof in *(net als wij)*.\n\n*'Is een plant beter om in slaapkamer te hebben (luchtkwaliteit) overdag of 's nachts?'*\n→ **Overdag** — dan geeft hij zuurstof. 's Nachts gebruikt hij juist een beetje zuurstof.\n\n**Bos = klimaatregelaar**:\nBomen halen CO₂ uit lucht en slaan koolstof op in hout. Daarom:\n• **Bomen planten** helpt tegen klimaatverandering.\n• **Bos kappen** doet het tegenovergestelde *(CO₂ blijft in lucht)*.\n• **Regenwoud beschermen** is wereldwijde prioriteit.\n\n**Klassiek experiment** *(Cito)*:\n*'Plant onder glazen pot met kaars erin — kaars gaat uit?'*\n→ Kaars gebruikt zuurstof op. Plant geeft zuurstof terug *(als er licht is)*. Kaars zou langer kunnen branden.\n\nBekend experiment van **Joseph Priestley** (1771).",
    checks: [
      {
        q: "Wat geven planten **overdag** AF?",
        options: ["Zuurstof", "CO₂", "Water", "Niets"],
        answer: 0,
        wrongHints: [null, "Nemen ze juist OP.", "Verdampen wel water maar O₂ is wat we bedoelen.", "Geven wel iets af."],
      },
      {
        q: "Wat produceert het **meeste zuurstof** voor de hele aarde?",
        options: ["Algen + fytoplankton in oceanen", "De Amazone alleen", "Tropisch bos op land", "Mensen"],
        answer: 0,
        wrongHints: [null, "Bekend bijnaam 'longen van de aarde' maar oceanen leveren meer.", "Bossen leveren veel — maar minder dan de oceanen.", "Mensen ademen zuurstof IN, produceren het niet."],
      },
      {
        q: "Wat gebeurt als planten **alle verdwijnen**?",
        options: ["Zuurstof zou opraken (langzaam)", "Niets", "Meer dieren", "Aarde wordt groener"],
        answer: 0,
        wrongHints: [null, "Wel iets — heel veel.", "Dieren afhankelijk van planten voor voedsel.", "Andersom."],
      },
      {
        q: "Geven planten **'s nachts** ook zuurstof af?",
        options: ["Nee (geen zonlicht)", "Ja, evenveel", "Ja, dubbel", "Nee, ze maken juist CO₂"],
        answer: 0,
        wrongHints: [null, "Niet evenveel.", "Niet meer.", "Klopt qua CO₂ ja, maar antwoord A is preciezer over O₂."],
      },
    ],
  },

  // STAP 5: Voedselketens
  {
    title: "Planten in de voedselketen — de basis van alles",
    explanation:
      "Planten staan **onderaan** elke voedselketen — **producenten**.\n\n**Voedselketen-structuur**:\n• **Producent** = plant *(maakt eigen voedsel via fotosynthese)*.\n• **1e consument** = herbivoor *(eet planten — koe, konijn)*.\n• **2e consument** = carnivoor *(eet herbivoren — vos, valk)*.\n• **Toproofdier** = niemand eet die zelf *(leeuw, orka)*.\n• **Afbreker** = bacteriën + schimmels *(breken dode planten/dieren af)*.\n\n**Voorbeelden van ketens**:\n• **Eenvoudig**: gras → konijn → vos.\n• **Zee**: alg → garnaal → vis → zeehond → orka.\n• **Bos**: blad → rups → mees → sperwer.\n\n**Belangrijke termen**:\n• **Herbivoor** = plant-eter.\n• **Carnivoor** = vleeseter.\n• **Omnivoor** = beide *(mens, beer, varken)*.\n• **Aaseter** = eet dode dieren *(gier)*.\n\n**Energie-doorgave**:\n• Planten vangen **100%** van zonne-energie *(theoretisch)*.\n• Herbivoor krijgt **~10%** van die energie door als hij plant eet.\n• Carnivoor krijgt weer **~10%** als hij herbivoor eet.\n• **Energie-piramide** — minder energie naar boven → minder roofdieren mogelijk.\n\n**Daarom**:\n• Veel grasplanten → kunnen 100 konijnen voeden.\n• 100 konijnen → kunnen maar ~10 vossen voeden.\n• 10 vossen → niet genoeg voor 1 leeuw *(theoretisch)*.\n\n**Mens in de keten**:\nMensen zijn **omnivoren**:\n• Plantaardig: groente, fruit, brood (graan), rijst, pasta.\n• Dierlijk: vlees, vis, ei, melk.\n\n**Cito-discussie**:\n• **Vegetariërs** eten geen vlees — pakken energie 'lager' in de keten.\n• Dat is **efficiënter** voor de aarde *(minder land + water nodig)*.\n• Vlees-productie kost meer energie.\n\n**Wat als planten ophouden?**\nAlle herbivoren sterven → daarna ook carnivoren → de hele keten klapt in elkaar. **Daarom is biodiversiteit belangrijk**.",
    checks: [
      {
        q: "Wat is een **producent** in voedselketen?",
        options: ["Plant", "Mens", "Vleeseter", "Aaseter"],
        answer: 0,
        wrongHints: [null, "Mens is consument.", "Geen producent.", "Geen producent."],
      },
      {
        q: "Een **leeuw** eet vooral zebra's. Wat is dat?",
        options: ["Carnivoor", "Herbivoor", "Omnivoor", "Producent"],
        answer: 0,
        wrongHints: [null, "Eet geen planten.", "Eet vrijwel alleen vlees.", "Geen plant."],
      },
      {
        q: "Mens is een ... ?",
        options: ["Omnivoor", "Carnivoor", "Herbivoor", "Producent"],
        answer: 0,
        wrongHints: [null, "Niet alleen vlees.", "Niet alleen plant.", "Geen plant."],
      },
      {
        q: "Waarom eten **mensen energie-efficiënter** als vegetariër?",
        options: ["Lager in voedselketen = minder energieverlies", "Plantaardig is duurder", "Vlees bevat geen energie", "Onbekend"],
        answer: 0,
        wrongHints: [null, "Niet altijd waar.", "Vlees heeft veel energie maar productie kost meer.", "Wel bekend."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Eindopdracht — fotosynthese-mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: fotosynthese, plant-onderdelen, ademhaling, voedselketens.\n\nVeel succes!",
    checks: [
      {
        q: "Welke **3 dingen** gebruikt een plant in fotosynthese?",
        options: ["Zonlicht + water + CO₂", "Zuurstof + water + vlees", "Zonlicht + zuurstof + grond", "Mest + water + lucht"],
        answer: 0,
        wrongHints: [null, "Plant eet geen vlees.", "O₂ is product, niet input.", "Mest is voedingsstof, niet de hoofdinput."],
      },
      {
        q: "Wat **produceert** een plant tijdens fotosynthese?",
        options: ["Suiker + zuurstof", "Water + CO₂", "Energie + warmte", "Vlees + bloed"],
        answer: 0,
        wrongHints: [null, "Die zijn input, niet output.", "Niet directe producten.", "Plant maakt geen vlees."],
      },
      {
        q: "**Chlorofyl** zit in:",
        options: ["Chloroplasten (in bladcellen)", "Wortelhaar", "Boomstam", "Stuifmeel"],
        answer: 0,
        wrongHints: [null, "Bevat geen chlorofyl.", "Stam vooral hout, weinig chlorofyl.", "Stuifmeel is voor voortplanting."],
      },
      {
        q: "Een **kikker** eet vliegen. Kikker is dan een ...?",
        options: ["Consument (carnivoor)", "Producent", "Herbivoor", "Afbreker"],
        answer: 0,
        wrongHints: [null, "Geen plant.", "Geen plant-eter.", "Geen afbreker."],
      },
      {
        q: "**Wanneer geven planten zuurstof af**?",
        options: ["Overdag (in zonlicht)", "'s Nachts", "Alleen 's zomers", "Nooit"],
        answer: 0,
        wrongHints: [null, "Geen zonlicht 's nachts.", "Ook 's winters wel als zon schijnt.", "Wel — anders geen O₂ op aarde."],
      },
      {
        q: "**Naaldbomen** *(zoals dennen)* verliezen ... ?",
        options: ["Geen naalden in herfst (altijdgroen)", "Alle naalden tegelijk", "Alleen in zomer", "Nooit naalden"],
        answer: 0,
        wrongHints: [null, "Niet allemaal tegelijk.", "Nee, behouden zomer en winter.", "Verliezen wel beetje per jaar."],
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
