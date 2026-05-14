// Leerpad: Ecosystemen + voedselweb — klas 2-3 onderbouw VO.
// Onderdeel biologie. Referentieniveau 2F.
// 6 stappen met uitlegPad. Bouwt op fotosynthese + dieren-PO.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  zon: "#ffd54f",
  prod: "#66bb6a",
  cons1: "#80cbc4",
  cons2: "#ff8a65",
  afbr: "#8d6e63",
  highlight: "#ff7043",
};

const stepEmojis = ["🌍", "🌱", "🕸️", "🔄", "⚠️", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een ecosysteem?", emoji: "🌍", from: 0, to: 0 },
  { letter: "B", title: "Producent / consument / afbreker", emoji: "🌱", from: 1, to: 1 },
  { letter: "C", title: "Voedselweb + energiepiramide", emoji: "🕸️", from: 2, to: 2 },
  { letter: "D", title: "Koolstof- + waterkringloop", emoji: "🔄", from: 3, to: 3 },
  { letter: "E", title: "Verstoringen + biodiversiteit", emoji: "⚠️", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function piramideSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Energie-piramide — minder energie naar boven</text>
<!-- top: toproofdier -->
<polygon points="140,40 180,40 165,65 155,65" fill="${COLORS.cons2}" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="160" y="58" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">toproofdier</text>
<text x="220" y="55" fill="${COLORS.text}" font-size="10" font-family="Arial">~0,1%</text>
<!-- niveau 3 -->
<polygon points="120,70 200,70 185,95 135,95" fill="${COLORS.cons2}" opacity="0.7" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="160" y="88" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">3e consument (vlees)</text>
<text x="220" y="85" fill="${COLORS.text}" font-size="10" font-family="Arial">~1%</text>
<!-- niveau 2 -->
<polygon points="100,100 220,100 205,125 115,125" fill="${COLORS.cons1}" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="160" y="118" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">2e consument</text>
<text x="240" y="115" fill="${COLORS.text}" font-size="10" font-family="Arial">~10%</text>
<!-- niveau 1: herbivoren -->
<polygon points="80,130 240,130 225,155 95,155" fill="${COLORS.cons1}" opacity="0.7" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="160" y="148" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">1e consument (herbivoor)</text>
<text x="260" y="145" fill="${COLORS.text}" font-size="10" font-family="Arial">~10%</text>
<!-- niveau 0: producenten -->
<polygon points="60,160 260,160 245,190 75,190" fill="${COLORS.prod}" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="160" y="180" text-anchor="middle" fill="#0e1014" font-size="11" font-family="Arial" font-weight="bold">producent (plant)</text>
<text x="280" y="178" fill="${COLORS.text}" font-size="10" font-family="Arial">100%</text>
<text x="160" y="210" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">~90% energie gaat verloren per niveau (warmte, ademen)</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is een ecosysteem?
  {
    title: "Wat is een ecosysteem?",
    explanation:
      "Een **ecosysteem** = alle **levende dingen** *(planten, dieren, schimmels, bacteriën)* + alle **niet-levende dingen** *(lucht, water, grond, zonlicht)* in een bepaald gebied + hun **wisselwerking**.\n\n**Voorbeelden van ecosystemen**:\n• **Bos** — bomen, dieren, mossen, schimmels, grond.\n• **Sloot/vijver** — planten, vissen, kikkers, insecten, water.\n• **Zee** — algen, vissen, zoogdieren, zout water.\n• **Woestijn** — cactus, hagedissen, zand, weinig water.\n• **Akkers** — gewassen, insecten, bodemleven.\n\n**Onderdelen van een ecosysteem**:\n\n**1. Biotische factoren** *(levend)*:\n• Planten + bacteriën + schimmels.\n• Alle dieren *(insecten, vogels, zoogdieren, vissen...)*.\n\n**2. Abiotische factoren** *(niet-levend)*:\n• **Klimaat**: temperatuur, regen, wind.\n• **Bodem**: zand, klei, voedingsstoffen.\n• **Water**: zoet/zout, hoeveelheid.\n• **Licht**: hoeveelheid zonlicht.\n\n**Wisselwerking — alles hangt samen**:\nIn een ecosysteem **eten** dingen elkaar, **bestuiven** elkaar, **delen ruimte**, en **breken** dood-materiaal **af**.\n\n**Niveaus** *(van klein naar groot)*:\n• **Individu** = 1 plant of dier.\n• **Populatie** = alle individuen van 1 soort in een gebied *(alle eekhoorns in dit bos)*.\n• **Levensgemeenschap** = alle soorten samen in gebied *(eekhoorns + bomen + insecten + ...)*.\n• **Ecosysteem** = levensgemeenschap + abiotische factoren.\n• **Biosfeer** = alle ecosystemen op aarde samen.\n\n**Cito-vraag**:\n*'Wat is een ecosysteem?'* → alle levende + niet-levende delen van een gebied die op elkaar inwerken.\n\n**Biotopen vs ecosysteem**:\n• **Biotoop** = leefomgeving van een soort *(bv. bos voor eekhoorn)*.\n• **Ecosysteem** = breder concept, alle samenhang.",
    svg: piramideSvg(),
    checks: [
      {
        q: "Wat is een **ecosysteem**?",
        options: ["Alle levende + niet-levende delen van een gebied die op elkaar inwerken", "Een soort dier", "Een park", "Een dierenpopulatie"],
        answer: 0,
        wrongHints: [null, "Te beperkt.", "Een park kan ecosysteem zijn, maar definitie is breder.", "Te beperkt — populatie is 1 soort."],
      },
      {
        q: "Wat is een **abiotische factor**?",
        options: ["Niet-levend (water, lucht, grond)", "Een dier", "Een plant", "Een bacterie"],
        answer: 0,
        wrongHints: [null, "Dat is biotisch.", "Dat is biotisch.", "Dat is biotisch."],
      },
      {
        q: "Wat is een **populatie**?",
        options: ["Alle individuen van 1 soort in een gebied", "Alle dieren", "Hele bos", "1 plant"],
        answer: 0,
        wrongHints: [null, "Te ruim.", "Dat is levensgemeenschap+.", "Dat is individu."],
      },
      {
        q: "Welke is een **biotische** factor?",
        options: ["Een schimmel", "Regen", "Temperatuur", "Bodem"],
        answer: 0,
        wrongHints: [null, "Abiotisch.", "Abiotisch.", "Abiotisch."],
      },
    ],
  },

  // STAP 2: Producent / consument / afbreker
  {
    title: "3 rollen: producent, consument, afbreker",
    explanation:
      "Levende wezens in een ecosysteem hebben **3 hoofdrollen** *(uit je hoofd!)*.\n\n**1. Producenten** 🌱\n• **Planten + algen + cyanobacteriën**.\n• Maken **zelf voedsel** uit zonlicht, water en CO₂ (fotosynthese).\n• Heten ook **autotrofen** *(zelf-voedend)*.\n• Vormen **basis** van elke voedselketen.\n\n**Voorbeelden**: gras, bomen, algen, mos, kelp.\n\n**2. Consumenten** 🐰🦊\n• **Dieren** die andere organismen eten.\n• Heten ook **heterotrofen** *(andere-voedend)*.\n\n**Subgroepen**:\n• **1e consument = herbivoor** = eet planten *(koe, konijn, ree)*.\n• **2e consument = carnivoor** = eet herbivoren *(vos, valk)*.\n• **3e consument = toproofdier** = eet andere carnivoren *(leeuw, orka, haai)*.\n• **Omnivoor** = beide *(mens, beer, varken)*.\n• **Aaseter** = eet dode dieren *(gier, hyena)*.\n\n**3. Afbrekers** 🍄\n• **Schimmels + bacteriën + sommige insecten** *(wormen, pissebedden)*.\n• Eten **dode planten en dieren** + uitwerpselen.\n• **Breken** complex materiaal af tot **voedingsstoffen** voor planten.\n• Zonder afbrekers zou de aarde vol liggen met lijken + afval.\n\n**Belang van afbrekers**:\n• Maken **mineralen** vrij *(stikstof, fosfor, kalium)*.\n• Planten nemen die op met hun wortels.\n• Cyclus is rond — niets gaat verloren.\n\n**Voorbeeld kringloop**:\n1. **Plant** groeit met zonlicht + voedingsstoffen uit grond.\n2. **Konijn** eet plant.\n3. **Vos** eet konijn.\n4. Vos sterft → **schimmel + bacterie** breken af.\n5. **Voedingsstoffen** komen terug in grond.\n6. **Nieuwe plant** groeit. Cyclus rond!\n\n**Cito-vragen**:\n*'Welke rol heeft een schimmel?'* → afbreker.\n*'Wat doet een producent?'* → maakt zelf voedsel uit zonlicht.\n*'Eet een leeuw planten?'* → nee, carnivoor.\n\n**Belangrijke termen**:\n• **Autotroof** = zelf voedsel maken (planten).\n• **Heterotroof** = ander voedsel eten (dieren + schimmels).\n• **Decompositie** = afbraak van dood materiaal.",
    checks: [
      {
        q: "Welke is een **producent**?",
        options: ["Plant", "Konijn", "Schimmel", "Vos"],
        answer: 0,
        wrongHints: [null, "Consument (herbivoor).", "Afbreker.", "Consument (carnivoor)."],
      },
      {
        q: "Wat doet een **afbreker**?",
        options: ["Breekt dood materiaal af tot voedingsstoffen", "Eet planten", "Eet andere dieren", "Maakt voedsel via zonlicht"],
        answer: 0,
        wrongHints: [null, "Dat is herbivoor.", "Dat is carnivoor.", "Dat is producent."],
      },
      {
        q: "Een **leeuw** eet zebra's. Wat is een leeuw?",
        options: ["Carnivoor (vleeseter)", "Herbivoor", "Producent", "Afbreker"],
        answer: 0,
        wrongHints: [null, "Eet vlees, geen planten.", "Geen plant.", "Geen afbreker."],
      },
      {
        q: "Wat is een **autotroof**?",
        options: ["Wezen dat zelf voedsel maakt (producent)", "Vleeseter", "Plant-eter", "Afbreker"],
        answer: 0,
        wrongHints: [null, "Heterotroof.", "Heterotroof.", "Heterotroof."],
        uitlegPad: {
          stappen: [
            { titel: "Auto + troof = zelf voedend", tekst: "Grieks: auto = zelf, troof = voeden. Een autotroof maakt zijn eigen voedsel via fotosynthese (planten) of chemosynthese (sommige bacteriën)." },
          ],
          woorden: [{ woord: "autotroof", uitleg: "Wezen dat zelf voedsel maakt — vrijwel altijd via fotosynthese." }, { woord: "heterotroof", uitleg: "Wezen dat ander materiaal moet eten om energie te krijgen." }],
          theorie: "Alle planten = autotroof. Alle dieren + schimmels = heterotroof.",
          voorbeelden: [{ type: "stap", tekst: "Eik (boom) = autotroof. Eekhoorn (eet noten) = heterotroof." }],
          basiskennis: [{ onderwerp: "Producent = autotroof", uitleg: "Twee woorden voor hetzelfde concept." }],
          niveaus: {
            basis: "Wezen dat zelf voedsel maakt. A.",
            simpeler: "Auto = zelf, troof = voedend. Een autotroof is een wezen (vooral planten) dat zelf zijn eten maakt uit zonlicht. = A.",
            nogSimpeler: "Producent = A.",
          },
        },
      },
    ],
  },

  // STAP 3: Voedselweb + energie
  {
    title: "Voedselweb en energiepiramide",
    explanation:
      "Een **voedselketen** is een **lijntje**: gras → konijn → vos.\n\nMaar in werkelijkheid is het complexer — een **voedselweb**:\n• Vos eet **konijnen + muizen + vogels + bessen**.\n• Konijn wordt gegeten door **vos + valk + uil**.\n• Plant wordt gegeten door **konijn + muis + rups + bij**.\n\n**Voedselweb** = alle ketens samen, met **pijlen die WIE eet WAT** aangeven *(pijl wijst naar de eter)*.\n\n**Energiepiramide — waarom?**\nNiet alle energie gaat door naar de volgende laag:\n• ~**10%** gaat door naar de volgende consument.\n• ~**90%** wordt verbruikt voor **ademen, bewegen, warmte**.\n\nDus:\n• Plant heeft 100% energie van zon.\n• Konijn dat de plant eet: krijgt 10%.\n• Vos dat het konijn eet: krijgt 1% van origineel.\n• Toproofdier: 0,1%.\n\n**Daarom**:\n• Veel planten → kunnen veel herbivoren voeden.\n• Veel herbivoren → minder roofdieren mogelijk.\n• Daarom zie je: veel gras, redelijk konijnen, weinig vossen, héél weinig leeuwen.\n\n**Toproofdieren zijn altijd zeldzamer**.\n\n**Voorbeeld — een bos**:\n```\n      sperwer (toproof)\n         ↑\n       mees\n         ↑\n       rups\n         ↑\n       blad\n```\n\n**Voorbeeld — een zee**:\n```\n      orka\n       ↑\n     zeehond\n       ↑\n      vis\n       ↑\n   garnaal\n       ↑\n     plankton\n```\n\n**Wat als 1 schakel wegvalt?**\n• Bv. alle muizen sterven in een bos → **kettingreactie**.\n• Uilen krijgen minder voedsel → minder uilen.\n• Maar: planten kunnen harder groeien (geen muizen die ze eten) → meer planten.\n• Andere muizen kunnen opvullen → systeem zoekt evenwicht.\n\n**Maar als belangrijke soort wegvalt** *(keystone species)*:\n• Bv. **bijen** weg → niet veel planten meer worden bestoven → ramp voor heel ecosysteem.\n• **Wolven** weg in Yellowstone → herten te talrijk → bomen weggevreten → rivieren veranderden! *(beroemd voorbeeld trophic cascade)*.\n\n**Cito-stikvraag**:\n*'Welk dier is meest zeldzaam in een ecosysteem?'*\n→ Toproofdier *(minste energie beschikbaar)*.\n\n**Cito-vraag — pijlrichting**:\n*'Pijl in voedselketen wijst van ___ naar ___'*\n→ van het opgegeten naar de eter *(energie-stroom richting)*.",
    checks: [
      {
        q: "Welk percentage **energie** gaat per niveau ongeveer door?",
        options: ["~10%", "~50%", "~100%", "~1%"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Onmogelijk.", "Te weinig — dat is 2 niveaus."],
      },
      {
        q: "Welk dier is **meest zeldzaam** in ecosysteem?",
        options: ["Toproofdier", "Plant", "Herbivoor", "Insect"],
        answer: 0,
        wrongHints: [null, "Vaak juist meest aanwezig.", "Talrijker dan toproofdier.", "Talrijker dan toproofdier."],
      },
      {
        q: "In voedselketen 'gras → muis → uil' — wat **eet de muis**?",
        options: ["Gras", "Uil", "Beide", "Niets"],
        answer: 0,
        wrongHints: [null, "Andersom — uil eet muis.", "Niet uil.", "Wel iets."],
      },
      {
        q: "Wat gebeurt als **wolven verdwijnen** uit Yellowstone-park?",
        options: ["Herten worden te talrijk, ecosysteem verstoort", "Niets", "Meer wolven", "Mensen krijgen meer ruimte"],
        answer: 0,
        wrongHints: [null, "Wel veel impact.", "Tegenovergesteld.", "Niet hoofdgevolg."],
      },
    ],
  },

  // STAP 4: Kringlopen
  {
    title: "Koolstof- en waterkringloop",
    explanation:
      "In een ecosysteem stromen **stoffen rond** in **kringlopen**. Niets gaat echt 'verloren' — het wordt hergebruikt.\n\n**1. Koolstofkringloop (C-kringloop)** 🌳🌫️\n\nWaar zit koolstof?\n• **CO₂** in lucht.\n• In **planten** *(als suiker, hout)*.\n• In **dieren** *(als eiwit, vet)*.\n• In **fossiele brandstoffen** *(steenkool, olie, gas)*.\n• In **oceanen** *(opgelost)*.\n\n**Cyclus**:\n1. CO₂ uit lucht → plant **fotosynthese** → koolhydraten in plant.\n2. Dier **eet** plant → koolstof in dier.\n3. Dier **ademt CO₂** uit → terug in lucht.\n4. Plant of dier **sterft** → afbreker → CO₂ terug in lucht.\n5. Of: organismen **fossiliseren** → na miljoenen jaren steenkool/olie.\n6. **Mens verbrandt fossiele brandstof** → CO₂ terug in lucht *(extra snel sinds 19e eeuw — klimaatverandering)*.\n\n**Probleem nu**: mensen halen miljoenen jaren opgeslagen koolstof (kolen, olie, gas) **in korte tijd** terug naar lucht → CO₂ in lucht stijgt → opwarming aarde.\n\n**2. Waterkringloop (H₂O-kringloop)** 💧☀️🌧️\n\n*Zie eerder bij fotosynthese:*\n1. **Verdampen** — zon verwarmt zee/rivier → waterdamp omhoog.\n2. **Condenseren** — waterdamp koelt af → wolken.\n3. **Neerslag** — regen/sneeuw valt terug.\n4. Water sijpelt in **grondwater** + stroomt via rivieren naar zee.\n5. Cyclus weer rond.\n\nPlanten doen mee:\n• **Wortels** zuigen water op uit grond.\n• Door blad **transpiratie** *(verdamping uit blad)*.\n\n**3. Stikstofkringloop (N-kringloop)** *(kort)*:\n• 78% van lucht is N₂ *(stikstof)*.\n• Planten kunnen N₂ niet direct gebruiken.\n• **Bodembacteriën** zetten N₂ om in nitraten die planten wél kunnen opnemen.\n• Planten → dieren → afval/dood → afbrekers → N₂ terug.\n\nDaarom: **'vlinderbloemigen'** *(erwten, bonen)* binden stikstof in de grond — handig voor landbouw *(klaver/luzerne als groenbemester)*.\n\n**Cito-feitje**:\n• De **kringloop** maakt dat materie *(stoffen)* hergebruikt wordt.\n• Maar **energie** stroomt **éénrichting** *(zon → planten → consumenten → warmte → ruimte)*.\n\n**Verschil materie ↔ energie**:\n• **Materie kringloopt** *(rond)*.\n• **Energie loopt door** *(van zon naar warmte)*.",
    checks: [
      {
        q: "Wat is de **koolstofkringloop**?",
        options: ["CO₂ → plant → dier → afbreker → CO₂", "Water → wolk → regen", "Stikstof → bacterie → plant", "Zon → energie → warmte"],
        answer: 0,
        wrongHints: [null, "Dat is waterkringloop.", "Dat is N-kringloop.", "Dat is energiestroom (geen kringloop)."],
      },
      {
        q: "Waarom stijgt **CO₂ in lucht** sinds 19e eeuw?",
        options: ["Mensen verbranden veel fossiele brandstof", "Meer planten", "Meer dieren ademen", "Onbekend"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld effect.", "Geen significante invloed.", "Wel bekend."],
      },
      {
        q: "Wat is de **stikstofkringloop**?",
        options: ["N₂ uit lucht → bacterie → nitraten → plant → terug", "Water-cyclus", "CO₂-cyclus", "Energie-stroom"],
        answer: 0,
        wrongHints: [null, "Dat is water.", "Dat is C.", "Geen kringloop."],
      },
      {
        q: "Verschil tussen **materie** en **energie**?",
        options: ["Materie kringloopt, energie stroomt door", "Beide kringlopen", "Beide stromen door", "Geen verschil"],
        answer: 0,
        wrongHints: [null, "Energie kringloopt niet.", "Materie blijft circuleren.", "Wel verschil."],
        uitlegPad: {
          stappen: [
            { titel: "Materie kringloopt", tekst: "Atomen kunnen niet uit het niets verschijnen of verdwijnen. Een koolstof-atoom in jouw lichaam kan ooit in een dinosaurus hebben gezeten. Dat is materie-cyclus." },
            { titel: "Energie stroomt door", tekst: "Energie van de zon wordt door planten omgezet in suiker, daarna door dieren in beweging + warmte. Uiteindelijk verlaat alles als warmte het ecosysteem. Energie 'gaat ergens heen', materie 'blijft rondgaan'." },
          ],
          woorden: [{ woord: "kringloop", uitleg: "Cyclus — iets gaat rond en komt terug." }, { woord: "energie-stroom", uitleg: "Eenrichtings-verkeer — energie gaat van bron naar warmte." }],
          theorie: "Wet van behoud van massa (materie kringloopt) vs. tweede wet thermodynamica (energie verspreidt zich).",
          voorbeelden: [{ type: "stap", tekst: "Sterren maakten ooit jouw koolstof-atomen. Die zijn nooit verdwenen — circuleren al miljarden jaren." }],
          basiskennis: [{ onderwerp: "Klassiek biologie-concept", uitleg: "Belangrijk verschil dat regelmatig op Cito-eindexamens komt." }],
          niveaus: {
            basis: "Materie kringloopt, energie stroomt door. A.",
            simpeler: "Atomen blijven rondgaan in een ecosysteem (kringloop). Maar energie van zonlicht eindigt als warmte die wegstraalt — dat is geen kringloop. = A.",
            nogSimpeler: "Materie rond, energie door = A.",
          },
        },
      },
    ],
  },

  // STAP 5: Verstoringen + biodiversiteit
  {
    title: "Verstoringen + biodiversiteit beschermen",
    explanation:
      "Een ecosysteem is **in evenwicht** — maar dat evenwicht kan **verstoord** worden.\n\n**Natuurlijke verstoringen**:\n• Bosbrand, storm, overstroming.\n• Vulkaanuitbarsting, droogte.\n• Veel ecosystemen kunnen zich herstellen.\n\n**Mens-veroorzaakte verstoringen** *(grootste probleem nu)*:\n\n**1. Habitat-vernieling**\n• Bos kappen voor landbouw of stad.\n• Wetlands droogleggen.\n• **Belangrijkste oorzaak** soorten-uitsterven.\n\n**2. Vervuiling**\n• Plastic in zee *(plastic soep)*.\n• Pesticiden in landbouw *(doodt insecten, ook bijen)*.\n• Stikstof-overschot uit veeteelt *(NL-stikstofcrisis)*.\n• CO₂ + andere broeikasgassen *(klimaatverandering)*.\n• Olielekken.\n\n**3. Overbevissing + jacht**\n• Sommige vissoorten 90% verminderd *(kabeljauw, tonijn)*.\n• Stropen van neushoorns, olifanten *(voor ivoor)*.\n\n**4. Invasieve soorten**\n• Niet-inheemse soorten die andere wegconcurreren.\n• Bv. **Amerikaanse rivierkreeft** in NL-rivieren — verdringt inheemse soorten.\n• **Reuzenberenklauw** — gevaarlijk voor mensen, verdringt planten.\n\n**5. Klimaatverandering**\n• Door fossiele brandstoffen → opwarming aarde.\n• Soorten kunnen niet snel genoeg verhuizen.\n• Korale riffen sterven door warmer + zuurder zeewater.\n• IJsbeer-leefgebied smelt weg.\n\n**Biodiversiteit** = **rijkdom aan soorten**.\n• Hoge biodiversiteit = veel verschillende soorten.\n• Lage biodiversiteit = weinig soorten *(bv. landbouwakker met 1 gewas)*.\n• **Belangrijk**: bij veel soorten kan ecosysteem schokken beter opvangen.\n• Verlies van soorten is **niet omkeerbaar**.\n\n**Hoe beschermen we biodiversiteit?**\n• **Natuurreservaten** *(Natura 2000 in EU, Waddenzee als UNESCO)*.\n• **Wetten** tegen jacht + handel *(CITES, Vogelrichtlijn)*.\n• **Duurzame landbouw** *(minder bestrijdingsmiddelen)*.\n• **Klimaatakkoord van Parijs** (2015) — CO₂ omlaag.\n• Bijenkasten + insectenhotels.\n• Plastic-recyclage.\n\n**De Doughnut-economie** *(Kate Raworth)*:\nIdee dat economie moet **binnen ecologische grenzen** blijven én **boven sociale ondergrenzen**. Doel: niemand armoede + planeet niet uitputten.\n\n**Cito-vraag**:\n*'Wat is grootste oorzaak van uitsterven?'* → habitat-vernieling *(bos kappen, wetlands droog)*.\n\n*'Waarom is biodiversiteit belangrijk?'* → veerkracht ecosysteem + onbekende soorten kunnen waardevol zijn *(medicijn etc.)*.\n\n**Belangrijke termen**:\n• **Biodiversiteit** = soorten-rijkdom.\n• **Habitat** = leefgebied van een soort.\n• **Invasieve soort** = nieuwe soort die andere verdringt.\n• **Endemisch** = uniek voor 1 gebied *(panda voor China, kiwi voor NZ)*.\n• **Uitsterven** = laatste exemplaar verdwijnt — **niet omkeerbaar**.",
    checks: [
      {
        q: "Wat is **biodiversiteit**?",
        options: ["Rijkdom aan soorten", "Aantal mensen", "Hoeveelheid water", "Aantal dieren in 1 soort"],
        answer: 0,
        wrongHints: [null, "Niet biologie.", "Niet biologie.", "Dat is populatie."],
      },
      {
        q: "Wat is de **grootste oorzaak** van soorten-uitsterven?",
        options: ["Habitat-vernieling (bos kappen, droogleggen)", "Jacht alleen", "Vervuiling alleen", "Klimaatverandering alleen"],
        answer: 0,
        wrongHints: [null, "Belangrijk maar niet grootste.", "Belangrijk maar niet grootste.", "Belangrijk maar niet grootste."],
      },
      {
        q: "Wat is een **invasieve soort**?",
        options: ["Nieuwe soort die andere verdringt", "Bedreigde soort", "Grote soort", "Soort met veel pups"],
        answer: 0,
        wrongHints: [null, "Andersom — invasief is sterk.", "Niet noodzakelijk groot.", "Geen voortplanting-iets."],
      },
      {
        q: "Wat is **endemisch**?",
        options: ["Uniek voor 1 gebied (bv. panda voor China)", "Veel voorkomend", "Ziek", "Uitgestorven"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Endemisch ≠ ziekte (al heet pandemic ook 'over de hele wereld').", "Endemisch betekent juist nog wél bestaan."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — ecosystemen mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: producent/consument, voedselweb, energiepiramide, kringlopen, biodiversiteit.\n\nVeel succes!",
    checks: [
      {
        q: "Wat is een **producent**?",
        options: ["Plant of alg (maakt voedsel via fotosynthese)", "Vleeseter", "Aaseter", "Plant-eter"],
        answer: 0,
        wrongHints: [null, "Consument.", "Consument.", "Consument."],
      },
      {
        q: "Welk dier zit **bovenaan** een energiepiramide?",
        options: ["Toproofdier", "Plant", "Konijn", "Insect"],
        answer: 0,
        wrongHints: [null, "Onderaan.", "Middelhoog.", "Laag."],
      },
      {
        q: "Energie gaat **per niveau** ongeveer hoeveel door?",
        options: ["~10%", "~50%", "~99%", "~1%"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Onmogelijk.", "Te weinig."],
      },
      {
        q: "Wat stroomt **door een ecosysteem** als eenrichting?",
        options: ["Energie", "Materie", "Lucht", "Water"],
        answer: 0,
        wrongHints: [null, "Materie kringloopt.", "Lucht stroomt rond.", "Water cyclus."],
      },
      {
        q: "Welke is een **invasieve soort** in NL?",
        options: ["Amerikaanse rivierkreeft", "Eekhoorn", "Vos", "Hert"],
        answer: 0,
        wrongHints: [null, "Inheems.", "Inheems.", "Inheems."],
      },
      {
        q: "Wat is de rol van **schimmels** in ecosysteem?",
        options: ["Afbreker (decompositie)", "Producent", "Toproofdier", "Carnivoor"],
        answer: 0,
        wrongHints: [null, "Geen plant.", "Geen vleeseter.", "Geen vleeseter."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const ecosystemenBiologie = {
  id: "ecosystemen-biologie",
  title: "Ecosystemen + voedselweb (klas 2-3)",
  emoji: "🌍",
  level: "klas2-3",
  subject: "biologie",
  referentieNiveau: "2F",
  sloThema: "Biologie — ecologie + ecosystemen",
  prerequisites: [
    { id: "fotosynthese-biologie", title: "Fotosynthese + plantkunde", niveau: "2F" },
    { id: "dierenklassen-po", title: "Dierenklassen + voedselketen", niveau: "po-1F" },
  ],
  intro:
    "Ecosystemen voor klas 2-3 — wat een ecosysteem is (biotisch/abiotisch), 3 rollen (producent/consument/afbreker), voedselweb + energiepiramide (~10% door), koolstof + water + stikstof-kringloop, biodiversiteit + bedreigingen (habitat-vernieling, invasieve soorten, klimaat). ~15 min.",
  triggerKeywords: [
    "ecosysteem", "voedselketen", "voedselweb",
    "producent", "consument", "afbreker",
    "autotroof", "heterotroof",
    "energiepiramide", "biodiversiteit",
    "koolstofkringloop", "waterkringloop", "stikstofkringloop",
    "habitat", "invasief", "uitsterven",
  ],
  chapters,
  steps,
};

export default ecosystemenBiologie;
