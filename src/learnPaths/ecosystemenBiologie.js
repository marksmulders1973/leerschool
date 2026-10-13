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
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function piramideSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Energie-piramide — minder energie naar boven</text>
<!-- top: toproofdier -->
<polygon points="140,40 180,40 165,65 155,65" fill="${COLORS.cons2}" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="160" y="58" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">toproofdier</text>
<text x="220" y="55" fill="${COLORS.text}" font-size="10" font-family="Arial">~0,01%</text>
<!-- niveau 3 -->
<polygon points="120,70 200,70 185,95 135,95" fill="${COLORS.cons2}" opacity="0.7" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="160" y="88" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">3e consument (vlees)</text>
<text x="220" y="85" fill="${COLORS.text}" font-size="10" font-family="Arial">~0,1%</text>
<!-- niveau 2 -->
<polygon points="100,100 220,100 205,125 115,125" fill="${COLORS.cons1}" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="160" y="118" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">2e consument</text>
<text x="240" y="115" fill="${COLORS.text}" font-size="10" font-family="Arial">~1%</text>
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
      "Een **ecosysteem** = alle **levende dingen** *(planten, dieren, schimmels, bacteriën)* + alle **niet-levende dingen** *(lucht, water, grond, zonlicht)* in een bepaald gebied + hun **wisselwerking**.\n\n**Voorbeelden van ecosystemen**:\n• **Bos** — bomen, dieren, mossen, schimmels, grond.\n• **Sloot/vijver** — planten, vissen, kikkers, insecten, water.\n• **Zee** — algen, vissen, zoogdieren, zout water.\n• **Woestijn** — cactus, hagedissen, zand, weinig water.\n• **Akkers** — gewassen, insecten, bodemleven.\n\n**Onderdelen van een ecosysteem**:\n\n**1. Biotische factoren** *(levend)*:\n• Planten + bacteriën + schimmels.\n• Alle dieren *(insecten, vogels, zoogdieren, vissen...)*.\n\n**2. Abiotische factoren** *(niet-levend)*:\n• **Klimaat**: temperatuur, regen, wind.\n• **Bodem**: zand, klei, voedingsstoffen.\n• **Water**: zoet/zout, hoeveelheid.\n• **Licht**: hoeveelheid zonlicht.\n\n**Wisselwerking — alles hangt samen**:\nIn een ecosysteem **eten** dingen elkaar, **bestuiven** elkaar, **delen ruimte**, en **breken** dood-materiaal **af**.\n\n**Niveaus** *(van klein naar groot)*:\n• **Individu** = 1 plant of dier.\n• **Populatie** = alle individuen van 1 soort in een gebied *(alle eekhoorns in dit bos)*.\n• **Levensgemeenschap** = alle soorten samen in gebied *(eekhoorns + bomen + insecten + ...)*.\n• **Ecosysteem** = levensgemeenschap + abiotische factoren.\n• **Biosfeer** = alle ecosystemen op aarde samen.\n\n**toetsvraag**:\n*'Wat is een ecosysteem?'* → alle levende + niet-levende delen van een gebied die op elkaar inwerken.\n\n**Biotopen vs ecosysteem**:\n• **Biotoop** = leefomgeving van een soort *(bv. bos voor eekhoorn)*.\n• **Ecosysteem** = breder concept, alle samenhang.",
    svg: piramideSvg(),
    checks: [
      {
        q: "Wat is een **ecosysteem**?",
        options: ["Alle levende en niet-levende delen van een gebied samen", "Alle dieren die samen in een bepaald gebied leven", "Alle planten en dieren van een gebied, zonder water en bodem", "Alle individuen van één soort die in een gebied leven"],
        answer: 0,
        wrongHints: [null, "Alleen dieren? Waar blijven de planten, het water en de grond?", "Hoort de niet-levende omgeving er bij een ecosysteem ook bij?", "Dat is een populatie — een ecosysteem omvat veel meer."],
      },
      {
        q: "Welke is een **abiotische factor**?",
        options: ["Zonlicht", "Een dier", "Een plant", "Een bacterie"],
        answer: 0,
        wrongHints: [null, "Een dier beweegt, eet en ademt. Hoort het bij de levende of de niet-levende factoren?", "Een plant groeit en maakt zelf voedsel. Is dat iets levends of niet?", "Een bacterie bestaat maar uit één cel. Is ze daarom niet levend?"],
      },
      {
        q: "Wat is een **populatie**?",
        options: ["Alle individuen van 1 soort in een gebied", "Alle dieren van verschillende soorten in een gebied", "Alle planten en dieren van een bos samen", "Eén individu van een soort in een gebied"],
        answer: 0,
        wrongHints: [null, "Verschillende soorten samen — is dat nog één populatie?", "Dat is een levensgemeenschap.", "Eén exemplaar is een individu. Hoeveel horen er bij een populatie?"],
      },
      {
        q: "Welke is een **biotische** factor?",
        options: ["Een schimmel", "Regen", "Temperatuur", "Bodem"],
        answer: 0,
        wrongHints: [null, "Regen is water dat uit de lucht valt. Leeft regen?", "Temperatuur kun je meten met een thermometer. Is dat een levend wezen?", "Zand en klei zijn niet-levende stoffen. Welke optie groeit en leeft wel?"],
      },
      {
        q: "Een **populatie** is?",
        options: ["Alle organismen van 1 soort in 1 gebied", "Alle organismen van 1 soort op de hele aarde", "Alle dieren van alle soorten in 1 gebied", "Eén organisme van 1 soort in 1 gebied"],
        answer: 0,
        wrongHints: [null, "Een populatie hoort bij één gebied — niet bij de hele aarde.", "Een populatie bestaat uit één soort. Alle soorten in een gebied samen heten een levensgemeenschap.", "Te specifiek — één organisme is een individu."],
      },
      {
        q: "Een **levensgemeenschap** is?",
        options: ["Alle populaties van verschillende soorten in 1 gebied", "Alle individuen van 1 soort in 1 gebied", "Alle levende en niet-levende delen van 1 gebied", "Alle soorten die samen op de hele aarde leven"],
        answer: 0,
        wrongHints: [null, "Dat is één populatie — een levensgemeenschap is meer.", "Telt de niet-levende omgeving mee bij een levensgemeenschap?", "Een levensgemeenschap hoort bij één gebied. Past de hele aarde daarbij?"],
      },
    ],
  },

  // STAP 2: Producent / consument / afbreker
  {
    title: "3 rollen: producent, consument, afbreker",
    explanation:
      "Levende wezens in een ecosysteem hebben **3 hoofdrollen** *(uit je hoofd!)*.\n\n**1. Producenten** 🌱\n• **Planten + algen + cyanobacteriën**.\n• Maken **zelf voedsel** uit zonlicht, water en CO₂ (fotosynthese).\n• Heten ook **autotrofen** *(zelf-voedend)*.\n• Vormen **basis** van elke voedselketen.\n\n**Voorbeelden**: gras, bomen, algen, mos, kelp.\n\n**2. Consumenten** 🐰🦊\n• **Dieren** die andere organismen eten.\n• Heten ook **heterotrofen** *(andere-voedend)*.\n\n**Subgroepen**:\n• **1e consument = herbivoor** = eet planten *(koe, konijn, ree)*.\n• **2e consument = carnivoor** = eet herbivoren *(vos, valk)*.\n• **3e consument = toproofdier** = eet andere carnivoren *(orka, haai, havik)*.\n• **Omnivoor** = beide *(mens, beer, varken)*.\n• **Aaseter** = eet dode dieren *(gier, hyena)*.\n\n**3. Afbrekers** 🍄\n• **Schimmels + bacteriën + sommige kleine dieren** *(wormen, pissebedden)*.\n• Eten **dode planten en dieren** + uitwerpselen.\n• **Breken** complex materiaal af tot **voedingsstoffen** voor planten.\n• Zonder afbrekers zou de aarde vol liggen met lijken + afval.\n\n**Belang van afbrekers**:\n• Maken **mineralen** vrij *(stikstof, fosfor, kalium)*.\n• Planten nemen die op met hun wortels.\n• Cyclus is rond — niets gaat verloren.\n\n**Voorbeeld kringloop**:\n1. **Plant** groeit met zonlicht + voedingsstoffen uit grond.\n2. **Konijn** eet plant.\n3. **Vos** eet konijn.\n4. Vos sterft → **schimmel + bacterie** breken af.\n5. **Voedingsstoffen** komen terug in grond.\n6. **Nieuwe plant** groeit. Cyclus rond!\n\n**toetsvragen**:\n*'Welke rol heeft een schimmel?'* → afbreker.\n*'Wat doet een producent?'* → maakt zelf voedsel uit zonlicht.\n*'Eet een leeuw planten?'* → nee, carnivoor.\n\n**Belangrijke termen**:\n• **Autotroof** = zelf voedsel maken (planten).\n• **Heterotroof** = ander voedsel eten (dieren + schimmels).\n• **Decompositie** = afbraak van dood materiaal.",
    checks: [
      {
        q: "Welke is een **producent**?",
        options: ["Plant", "Konijn", "Schimmel", "Vos"],
        answer: 0,
        wrongHints: [null, "Een konijn eet planten. Maakt het zelf voedsel, of eet het voedsel op?", "Een schimmel groeit op dode resten. Heeft hij bladgroen om voedsel te maken?", "Een vos eet konijnen. Waar komt zijn voedsel vandaan?"],
      },
      {
        q: "Wat doet een **afbreker**?",
        options: ["Zet dode resten om in voedingsstoffen", "Eet levende planten op voor energie", "Eet dode dieren op, zoals een gier", "Maakt zelf suiker met behulp van zonlicht"],
        answer: 0,
        wrongHints: [null, "Dat doet een planteneter (herbivoor).", "Een gier is een aaseter: een consument die vlees eet. Maakt hij daar ook voedingsstoffen voor planten van?", "Suiker maken met zonlicht kan alleen met bladgroen. Hebben schimmels en bacteriën bladgroen?"],
      },
      {
        q: "Een **leeuw** eet zebra's. Wat is een leeuw?",
        options: ["Carnivoor", "Herbivoor", "Producent", "Afbreker"],
        answer: 0,
        wrongHints: [null, "Een herbivoor eet planten. Wat eet een leeuw?", "Een producent maakt zelf voedsel met zonlicht. Kan een leeuw dat?", "Een afbreker ruimt dode resten op. Jaagt een leeuw op levende dieren of niet?"],
      },
      {
        q: "Wat is een **autotroof**?",
        options: ["Wezen dat zelf voedsel maakt", "Wezen dat andere dieren eet", "Wezen dat planten eet", "Wezen dat dode resten afbreekt"],
        answer: 0,
        wrongHints: [null, "Eet andere dieren — maakt geen eigen voedsel.", "Eet planten — maakt zelf niets.", "Eet dode resten — geen eigen productie."],
        uitlegPad: {
          stappen: [
            { titel: "Auto + troof = zelf voedend", tekst: "Grieks: auto = zelf, troof = voeden. Een autotroof maakt zijn eigen voedsel via fotosynthese (planten) of chemosynthese (sommige bacteriën)." },
          ],
          woorden: [{ woord: "autotroof", uitleg: "Wezen dat zelf voedsel maakt — vrijwel altijd via fotosynthese." }, { woord: "heterotroof", uitleg: "Wezen dat ander materiaal moet eten om energie te krijgen." }],
          theorie: "Alle planten = autotroof. Alle dieren + schimmels = heterotroof.",
          voorbeelden: [{ type: "stap", tekst: "Eik (boom) = autotroof. Eekhoorn (eet noten) = heterotroof." }],
          basiskennis: [{ onderwerp: "Producent = autotroof", uitleg: "Twee woorden voor hetzelfde concept." }],
          niveaus: {
            basis: "Wezen dat zelf voedsel maakt.",
            simpeler: "Auto = zelf, troof = voedend. Een autotroof is een wezen (vooral planten) dat zelf zijn eten maakt uit zonlicht.",
            nogSimpeler: "Producent",
          },
        },
      },
    ],
  },

  // STAP 3: Voedselweb + energie
  {
    title: "Voedselweb en energiepiramide",
    explanation:
      "Een **voedselketen** is een **lijntje**: gras → konijn → vos.\n\nMaar in werkelijkheid is het complexer — een **voedselweb**:\n• Vos eet **konijnen + muizen + vogels + bessen**.\n• Konijn wordt gegeten door **vos + valk + uil**.\n• Plant wordt gegeten door **konijn + muis + rups + bij**.\n\n**Voedselweb** = alle ketens samen, met **pijlen die WIE eet WAT** aangeven *(pijl wijst naar de eter)*.\n\n**Energiepiramide — waarom?**\nNiet alle energie gaat door naar de volgende laag:\n• ~**10%** gaat door naar de volgende consument.\n• ~**90%** wordt verbruikt voor **ademen, bewegen, warmte**.\n\nDus:\n• Plant heeft 100% energie van zon.\n• Konijn dat de plant eet: krijgt 10%.\n• Vos die het konijn eet: krijgt 1% van origineel.\n• Toproofdier: 0,1%.\n\n**Daarom**:\n• Veel planten → kunnen veel herbivoren voeden.\n• Veel herbivoren → minder roofdieren mogelijk.\n• Daarom zie je: veel gras, redelijk veel konijnen, weinig vossen, héél weinig leeuwen.\n\n**Toproofdieren zijn altijd zeldzamer**.\n\n**Voorbeeld — een bos**:\n```\n      sperwer (toproof)\n         ↑\n       mees\n         ↑\n       rups\n         ↑\n       blad\n```\n\n**Voorbeeld — een zee**:\n```\n      orka\n       ↑\n     zeehond\n       ↑\n      vis\n       ↑\n   garnaal\n       ↑\n     plankton\n```\n\n**Wat als 1 schakel wegvalt?**\n• Bv. alle muizen sterven in een bos → **kettingreactie**.\n• Uilen krijgen minder voedsel → minder uilen.\n• Maar: planten kunnen harder groeien (geen muizen die ze eten) → meer planten.\n• Andere muizen kunnen opvullen → systeem zoekt evenwicht.\n\n**Maar als belangrijke soort wegvalt** *(keystone species)*:\n• Bv. **bijen** weg → niet veel planten meer worden bestoven → ramp voor heel ecosysteem.\n• **Wolven** weg in Yellowstone → herten te talrijk → bomen weggevreten → rivieren veranderden! *(beroemd voorbeeld van een trofische cascade)*.\n\n**Toets-strikvraag**:\n*'Welk dier is meest zeldzaam in een ecosysteem?'*\n→ Toproofdier *(minste energie beschikbaar)*.\n\n**toetsvraag — pijlrichting**:\n*'Pijl in voedselketen wijst van ___ naar ___'*\n→ van het opgegeten naar de eter *(energie-stroom richting)*.",
    checks: [
      {
        q: "Welk percentage **energie** gaat per niveau ongeveer door?",
        options: ["~10%", "~50%", "~100%", "~1%"],
        answer: 0,
        wrongHints: [null, "Een dier gebruikt het meeste voedsel voor bewegen en warmte. Blijft dan de helft over?", "Een dier verbruikt zelf ook energie om te leven. Kan dan alles doorgaan?", "Dan zou er na twee niveaus bijna niets over zijn. Is het per stap echt zó weinig?"],
      },
      {
        q: "Welk organisme is meestal het **zeldzaamst** in een ecosysteem?",
        options: ["Toproofdier", "Plant", "Herbivoor", "Insect"],
        answer: 0,
        wrongHints: [null, "Planten vormen de onderste laag van de energiepiramide. Zijn die schaars?", "Een planteneter staat laag in de piramide. Is daar weinig energie?", "Hoe hoger in de piramide, hoe minder energie. Staan insecten hoog of laag?"],
      },
      {
        q: "In voedselketen 'gras → muis → uil' — wat **eet de muis**?",
        options: ["Gras", "Uil", "Zonlicht", "Uil en gras"],
        answer: 0,
        wrongHints: [null, "De pijl wijst van muis naar uil. Wie eet hier wie?", "Zonlicht gebruikt een plant om voedsel te maken. Kan een muis zonlicht eten?", "Eet een kleine muis een uil op? Volg de pijlen nog eens."],
      },
      {
        q: "Wat gebeurt als **wolven verdwijnen** uit Yellowstone-park?",
        options: ["Herten worden talrijker en eten jonge bomen kaal", "Meer herten, maar planten en bomen merken er niets van", "Bevers en vogels krijgen meer ruimte en nemen toe", "Coyotes nemen de rol over, alles blijft in balans"],
        answer: 0,
        wrongHints: [null, "Herten eten jonge boompjes en twijgen. Kan het bos dan hetzelfde blijven?", "Bevers hebben wilgen langs de rivier nodig. Wie eet die wilgen op als er veel meer herten zijn?", "Coyotes werden inderdaad talrijker, maar zijn te klein voor volwassen herten. Wie houdt de herten dan nog in toom?"],
      },
      {
        q: "In een voedselketen **plant → konijn → vos** — wat is een **producent**?",
        options: ["Plant", "Konijn", "Vos", "Zon"],
        answer: 0,
        wrongHints: [null, "Een konijn eet iets op. Maakt het zelf voedsel?", "Een vos jaagt op konijnen. Maakt hij zelf voedsel?", "De zon levert energie, maar is geen levend wezen. Wie in de keten maakt voedsel?"],
      },
      {
        q: "Een **consument** is een organisme dat?",
        options: ["Andere organismen als voedsel eet", "Zelf voedsel maakt met zonlicht", "Dode resten afbreekt tot mineralen", "Bovenaan in de voedselketen staat"],
        answer: 0,
        wrongHints: [null, "Zelf voedsel maken met zonlicht — is dat een producent of een consument?", "Dat doet een reducent (afbreker). Is dat dezelfde groep als de consumenten?", "Dat is een toproofdier. Is een konijn, dat zelf gegeten wordt, dan geen consument?"],
      },
      {
        q: "**Reducenten** (afbrekers) doen wat?",
        options: ["Dode resten omzetten in mineralen", "Levende planten opeten voor hun energie", "Zonlicht met bladgroen omzetten in suiker", "Dode dieren opeten, zoals een gier"],
        answer: 0,
        wrongHints: [null, "Dat doen consumenten (planteneters).", "Suiker maken met bladgroen: hoort dat bij planten of bij schimmels en bacteriën?", "Een gier is een aaseter: een consument die vlees eet. Maakt hij daar ook mineralen voor planten van?"],
      },
    ],
  },

  // STAP 4: Kringlopen
  {
    title: "Koolstof- en waterkringloop",
    explanation:
      "In een ecosysteem stromen **stoffen rond** in **kringlopen**. Niets gaat echt 'verloren' — het wordt hergebruikt.\n\n**1. Koolstofkringloop (C-kringloop)** 🌳🌫️\n\nWaar zit koolstof?\n• **CO₂** in lucht.\n• In **planten** *(als suiker, hout)*.\n• In **dieren** *(als eiwit, vet)*.\n• In **fossiele brandstoffen** *(steenkool, olie, gas)*.\n• In **oceanen** *(opgelost)*.\n\n**Cyclus**:\n1. CO₂ uit lucht → plant **fotosynthese** → koolhydraten in plant.\n2. Dier **eet** plant → koolstof in dier.\n3. Dier **ademt CO₂** uit → terug in lucht.\n4. Plant of dier **sterft** → afbreker → CO₂ terug in lucht.\n5. Of: organismen **fossiliseren** → na miljoenen jaren steenkool/olie.\n6. **Mens verbrandt fossiele brandstof** → CO₂ terug in lucht *(extra snel sinds 19e eeuw — klimaatverandering)*.\n\n**Probleem nu**: mensen halen miljoenen jaren opgeslagen koolstof (kolen, olie, gas) **in korte tijd** terug naar lucht → CO₂ in lucht stijgt → opwarming aarde.\n\n**2. Waterkringloop (H₂O-kringloop)** 💧☀️🌧️\n\n*Zie eerder bij fotosynthese:*\n1. **Verdampen** — zon verwarmt zee/rivier → waterdamp omhoog.\n2. **Condenseren** — waterdamp koelt af → wolken.\n3. **Neerslag** — regen/sneeuw valt terug.\n4. Water sijpelt in **grondwater** + stroomt via rivieren naar zee.\n5. Cyclus weer rond.\n\nPlanten doen mee:\n• **Wortels** zuigen water op uit grond.\n• Door blad **transpiratie** *(verdamping uit blad)*.\n\n**3. Stikstofkringloop (N-kringloop)** *(kort)*:\n• 78% van lucht is N₂ *(stikstof)*.\n• Planten kunnen N₂ niet direct gebruiken.\n• **Bodembacteriën** zetten N₂ om in nitraten die planten wél kunnen opnemen.\n• Planten → dieren → afval/dood → afbrekers → N₂ terug.\n\nDaarom: **'vlinderbloemigen'** *(erwten, bonen)* binden stikstof in de grond — handig voor landbouw *(klaver/luzerne als groenbemester)*.\n\n**Toets-feitje**:\n• De **kringloop** maakt dat materie *(stoffen)* hergebruikt wordt.\n• Maar **energie** stroomt in **één richting** *(zon → planten → consumenten → warmte → ruimte)*.\n\n**Verschil materie ↔ energie**:\n• **Materie kringloopt** *(rond)*.\n• **Energie loopt door** *(van zon naar warmte)*.",
    checks: [
      {
        q: "Wat is de **koolstofkringloop**?",
        options: ["CO₂ → plant → dier → afbreker → CO₂", "CO₂ → dier → plant → afbreker → CO₂", "O₂ → plant → dier → afbreker → O₂", "CO₂ → afbreker → plant → dier → CO₂"],
        answer: 0,
        wrongHints: [null, "Wie haalt CO₂ uit de lucht om er suiker van te maken: een dier of een plant?", "Planten geven bij fotosynthese zuurstof af. Welk gas nemen ze juist op?", "Afbrekers ruimen dode resten op. Staan die aan het begin of aan het eind van de rij?"],
      },
      {
        q: "Waarom stijgt **CO₂ in lucht** sinds 19e eeuw?",
        options: ["Mensen verbranden veel fossiele brandstof", "Er groeien steeds meer planten op aarde", "Er leven veel meer dieren die ademen", "Vulkanen spuwen steeds meer gassen uit"],
        answer: 0,
        wrongHints: [null, "Planten nemen CO₂ juist op. Wat doet dat met de hoeveelheid in de lucht?", "Ademen geeft CO₂, maar is dat sinds 1800 zo sterk toegenomen?", "Zijn er sinds 1800 echt veel meer vulkaanuitbarstingen gekomen?"],
      },
      {
        q: "Wat is de **stikstofkringloop**?",
        options: ["N₂ → bacterie → nitraat → plant → terug", "Water → waterdamp → wolk → regen → zee", "CO₂ → plant → dier → afbreker → CO₂", "Zon → plant → dier → warmte → ruimte"],
        answer: 0,
        wrongHints: [null, "Dat is de waterkringloop.", "Dat is de koolstofkringloop.", "Dat is een energiestroom — geen kringloop."],
      },
      {
        q: "Verschil tussen **materie** en **energie**?",
        options: ["Materie kringloopt, energie stroomt door", "Allebei gaan ze rond in een kringloop", "Allebei stromen ze door en raken op", "Energie kringloopt, materie stroomt door"],
        answer: 0,
        wrongHints: [null, "Krijgt een plant zijn energie terug van de afbreker, of steeds nieuw van de zon?", "Wat doen afbrekers met de stoffen uit dode resten?", "Komt de energie van de zon ooit terug bij de plant?"],
        uitlegPad: {
          stappen: [
            { titel: "Materie kringloopt", tekst: "Atomen kunnen niet uit het niets verschijnen of verdwijnen. Een koolstof-atoom in jouw lichaam kan ooit in een dinosaurus hebben gezeten. Dat is materie-cyclus." },
            { titel: "Energie stroomt door", tekst: "Energie van de zon wordt door planten omgezet in suiker, daarna door dieren in beweging + warmte. Uiteindelijk verlaat alles als warmte het ecosysteem. Energie 'gaat ergens heen', materie 'blijft rondgaan'." },
          ],
          woorden: [{ woord: "kringloop", uitleg: "Cyclus — iets gaat rond en komt terug." }, { woord: "energie-stroom", uitleg: "Eenrichtings-verkeer — energie gaat van bron naar warmte." }],
          theorie: "Wet van behoud van massa (materie kringloopt) vs. tweede wet thermodynamica (energie verspreidt zich).",
          voorbeelden: [{ type: "stap", tekst: "Sterren maakten ooit jouw koolstof-atomen. Die zijn nooit verdwenen — circuleren al miljarden jaren." }],
          basiskennis: [{ onderwerp: "Klassiek biologie-concept", uitleg: "Belangrijk verschil dat regelmatig op Toets-eindexamens komt." }],
          niveaus: {
            basis: "Materie kringloopt, energie stroomt door.",
            simpeler: "Atomen blijven rondgaan in een ecosysteem (kringloop). Maar energie van zonlicht eindigt als warmte die wegstraalt — dat is geen kringloop.",
            nogSimpeler: "Materie rond, energie door",
          },
        },
      },
    ],
  },

  // STAP 5: Verstoringen + biodiversiteit
  {
    title: "Verstoringen + biodiversiteit beschermen",
    explanation:
      "Een ecosysteem is **in evenwicht** — maar dat evenwicht kan **verstoord** worden.\n\n**Natuurlijke verstoringen**:\n• Bosbrand, storm, overstroming.\n• Vulkaanuitbarsting, droogte.\n• Veel ecosystemen kunnen zich herstellen.\n\n**Mens-veroorzaakte verstoringen** *(grootste probleem nu)*:\n\n**1. Habitat-vernieling**\n• Bos kappen voor landbouw of stad.\n• Wetlands droogleggen.\n• **Belangrijkste oorzaak** soorten-uitsterven.\n\n**2. Vervuiling**\n• Plastic in zee *(plastic soep)*.\n• Pesticiden in landbouw *(doodt insecten, ook bijen)*.\n• Stikstof-overschot uit veeteelt *(NL-stikstofcrisis)*.\n• CO₂ + andere broeikasgassen *(klimaatverandering)*.\n• Olielekken.\n\n**3. Overbevissing + jacht**\n• Sommige vissoorten 90% verminderd *(kabeljauw, tonijn)*.\n• Stropen van neushoorns, olifanten *(voor ivoor)*.\n\n**4. Invasieve soorten**\n• Niet-inheemse soorten die andere wegconcurreren.\n• Bv. **Amerikaanse rivierkreeft** in NL-rivieren — verdringt inheemse soorten.\n• **Reuzenberenklauw** — gevaarlijk voor mensen, verdringt planten.\n\n**5. Klimaatverandering**\n• Door fossiele brandstoffen → opwarming aarde.\n• Soorten kunnen niet snel genoeg verhuizen.\n• Koraalriffen sterven door warmer + zuurder zeewater.\n• IJsbeer-leefgebied smelt weg.\n\n**Biodiversiteit** = **rijkdom aan soorten**.\n• Hoge biodiversiteit = veel verschillende soorten.\n• Lage biodiversiteit = weinig soorten *(bv. landbouwakker met 1 gewas)*.\n• **Belangrijk**: bij veel soorten kan ecosysteem schokken beter opvangen.\n• Verlies van soorten is **niet omkeerbaar**.\n\n**Hoe beschermen we biodiversiteit?**\n• **Natuurreservaten** *(Natura 2000 in EU, Waddenzee als UNESCO-werelderfgoed)*.\n• **Wetten** tegen jacht + handel *(CITES, Vogelrichtlijn)*.\n• **Duurzame landbouw** *(minder bestrijdingsmiddelen)*.\n• **Klimaatakkoord van Parijs** (2015) — CO₂ omlaag.\n• Bijenkasten + insectenhotels.\n• Plastic-recyclage.\n\n**De Doughnut-economie** *(Kate Raworth)*:\nIdee dat economie moet **binnen ecologische grenzen** blijven én **boven sociale ondergrenzen**. Doel: niemand in armoede + planeet niet uitputten.\n\n**toetsvraag**:\n*'Wat is grootste oorzaak van uitsterven?'* → habitat-vernieling *(bos kappen, wetlands droog)*.\n\n*'Waarom is biodiversiteit belangrijk?'* → veerkracht ecosysteem + onbekende soorten kunnen waardevol zijn *(medicijn etc.)*.\n\n**Belangrijke termen**:\n• **Biodiversiteit** = soorten-rijkdom.\n• **Habitat** = leefgebied van een soort.\n• **Invasieve soort** = nieuwe soort die andere verdringt.\n• **Endemisch** = uniek voor 1 gebied *(panda voor China, kiwi voor NZ)*.\n• **Uitsterven** = laatste exemplaar verdwijnt — **niet omkeerbaar**.",
    checks: [
      {
        q: "Wat is **biodiversiteit**?",
        options: ["Het aantal soorten in een gebied", "Totaal aantal organismen in een gebied", "Aantal individuen binnen één soort", "Hoeveelheid planten in een ecosysteem"],
        answer: 0,
        wrongHints: [null, "Duizend muizen van één soort zijn veel organismen. Is dat ook veel variatie?", "Dat zegt iets over de grootte van een populatie. Gaat diversiteit over één soort?", "Een groot maisveld heeft heel veel planten. Is dat ook rijk aan soorten?"],
      },
      {
        q: "Wat is de **grootste oorzaak** van soorten-uitsterven?",
        options: ["Vernietiging van leefgebied", "Jacht en stroperij", "Vervuiling van lucht en water", "Klimaatverandering"],
        answer: 0,
        wrongHints: [null, "Jacht treft vooral grote dieren. Worden insecten en planten ook bejaagd?", "Vervuiling schaadt veel soorten, maar is het volgens de cijfers de oorzaak nummer één?", "Klimaatverandering groeit snel als probleem, maar is in de cijfers van 2024 nog niet de nummer één."],
      },
      {
        q: "Wat is een **invasieve soort**?",
        options: ["Uitheemse soort die inheemse soorten verdringt", "Inheemse soort die zich snel uitbreidt", "Uitheemse soort die hier weinig opvalt", "Soort die van nature in één gebied leeft"],
        answer: 0,
        wrongHints: [null, "Een inheemse soort hoort hier van nature thuis. Kan die hier dan 'binnenvallen'?", "Niet elke soort van elders is een probleem. Wanneer noem je zo'n soort pas invasief?", "Dat heet endemisch. Gaat invasief over een vaste plek, of over binnendringen?"],
      },
      {
        q: "Wat is **endemisch**?",
        options: ["Komt alleen in 1 gebied voor", "Komt over de hele wereld voor", "Komt van oorsprong uit een ander land", "Is in het wild uitgestorven"],
        answer: 0,
        wrongHints: [null, "Een soort die overal leeft is niet bijzonder voor één plek. Wat betekent endemisch dan?", "Een soort uit een ander land heet een exoot. Is dat hetzelfde als endemisch?", "Endemische soorten bestaan nog. Zegt het woord iets over tijd of over plaats?"],
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — ecosystemen mix",
    explanation:
      "Mix-toets. Door elkaar: producent/consument, voedselweb, energiepiramide, kringlopen, biodiversiteit.\n\nVeel succes!",
    checks: [
      {
        q: "Wat is een **producent**?",
        options: ["Plant of alg", "Vleeseter", "Schimmel of bacterie", "Planteneter"],
        answer: 0,
        wrongHints: [null, "Een vleeseter eet andere dieren. Maakt hij zelf voedsel?", "Die breken dode resten af. Maken ze ook zelf voedsel met zonlicht?", "Een planteneter eet planten op. Wie maakt dan eigenlijk het voedsel?"],
      },
      {
        q: "Welk dier zit **bovenaan** een energiepiramide?",
        options: ["Een havik (roofvogel)", "Een regenworm (afbreker)", "Een konijn (planteneter)", "Een merel (insecteneter)"],
        answer: 0,
        wrongHints: [null, "Afbrekers ruimen resten op van alle lagen, maar staan niet bovenaan de piramide. Welk dier wordt door niemand meer gegeten?", "Een konijn eet planten en wordt zelf gegeten door een vos. Is het dan de top?", "Een merel eet insecten, maar wordt zelf gegeten door een kat of roofvogel. Staat hij dan bovenaan?"],
      },
      {
        q: "Energie gaat **per niveau** ongeveer hoeveel door?",
        options: ["~10%", "~50%", "~99%", "~1%"],
        answer: 0,
        wrongHints: [null, "Een dier gebruikt het meeste voedsel voor bewegen en warmte. Blijft dan de helft over?", "Een dier verbruikt zelf ook energie om te leven. Kan dan bijna alles doorgaan?", "Dan zou er na twee niveaus bijna niets over zijn. Is het per stap echt zó weinig?"],
      },
      {
        q: "Wat stroomt **door een ecosysteem** als eenrichting?",
        options: ["Energie", "Materie", "Lucht", "Water"],
        answer: 0,
        wrongHints: [null, "Afbrekers maken van dode resten weer voedingsstoffen voor planten. Gaat materie dan maar één kant op?", "Lucht beweegt alle kanten op en blijft op aarde. Is dat een eenrichtingsstroom door de voedselketen?", "Water verdampt, valt als regen en komt terug. Is dat eenrichting?"],
      },
      {
        q: "Welke is een **invasieve soort** in NL?",
        options: ["Muskusrat", "Alpenwatersalamander", "Noordse woelmuis", "Bever"],
        answer: 0,
        wrongHints: [null, "Klinkt als een bergdier, maar leeft van nature in Oost-Nederland. Is het dan een indringer?", "Klinkt uitheems, maar leeft al sinds de ijstijd in Nederland. Is het dan een indringer?", "De bever leefde hier vroeger al en is teruggezet. Is dat een soort van elders?"],
      },
      {
        q: "Wat is de rol van **schimmels** in ecosysteem?",
        options: ["Afbreker", "Producent", "Bestuiver", "Carnivoor"],
        answer: 0,
        wrongHints: [null, "Een schimmel heeft geen bladgroen. Kan hij dan zelf voedsel maken?", "Bestuivers zoals bijen brengen stuifmeel van bloem naar bloem. Doet een schimmel dat?", "Een carnivoor jaagt op levende dieren. Waar groeien schimmels meestal op?"],
      },
      {
        q: "**Open vraag**: hoe heet een ecosysteem in droog warm gebied met cactussen?",
        kind: "open",
        acceptedAnswers: ["woestijn", "desert"],
        explanation: "Woestijn-ecosysteem: heet/droog, lage neerslag (<250mm/jaar), planten zoals cactussen.",
      },
      {
        q: "**Open vraag**: noem 1 voorbeeld van een **producent**.",
        kind: "open",
        acceptedAnswers: ["plant", "boom", "gras", "alg", "algen", "planten", "bomen"],
        explanation: "Producenten zijn organismen die zelf voedsel maken via fotosynthese: planten, bomen, gras, algen.",
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
