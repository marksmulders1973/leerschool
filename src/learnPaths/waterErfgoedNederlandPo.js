// Leerpad: Nederland en water — groep 6-8 PO.
// Toets-onderdeel wereldoriëntatie (aardrijkskunde Nederland). Ref 1F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  water: "#1565c0",
  waterLicht: "#42a5f5",
  land: "#a1887f",
  duin: "#ffd54f",
  dijk: "#9e9e9e",
  highlight: "#ffd54f",
};

const stepEmojis = ["🌊", "🛡️", "🌾", "💧", "🏗️", "🏆"];

const chapters = [
  { letter: "A", title: "Nederland en water", emoji: "🌊", from: 0, to: 0 },
  { letter: "B", title: "Dijken + duinen", emoji: "🛡️", from: 1, to: 1 },
  { letter: "C", title: "Polders + droogmaking", emoji: "🌾", from: 2, to: 2 },
  { letter: "D", title: "Watersnoodramp 1953", emoji: "💧", from: 3, to: 3 },
  { letter: "E", title: "Deltawerken", emoji: "🏗️", from: 4, to: 4 },
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function dijkSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Hoe een dijk Nederland droog houdt</text>
<!-- zee -->
<rect x="0" y="70" width="120" height="100" fill="${COLORS.water}" opacity="0.7"/>
<text x="60" y="115" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">ZEE</text>
<text x="60" y="135" text-anchor="middle" fill="#fff" font-size="10" font-family="Arial">hoge waterstand</text>
<!-- dijk -->
<path d="M 120 170 L 120 70 L 165 50 L 180 50 L 195 70 L 195 170 Z" fill="${COLORS.dijk}" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="158" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">DIJK</text>
<!-- land -->
<rect x="195" y="100" width="125" height="70" fill="${COLORS.land}" opacity="0.7"/>
<text x="258" y="135" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">LAND</text>
<text x="258" y="155" text-anchor="middle" fill="#fff" font-size="10" font-family="Arial">onder zeeniveau</text>
<!-- pijl zeeniveau -->
<line x1="105" y1="100" x2="105" y2="70" stroke="${COLORS.highlight}" stroke-width="1.5"/>
<text x="105" y="65" text-anchor="middle" fill="${COLORS.highlight}" font-size="9" font-family="Arial">zeeniveau</text>
</svg>`;
}

function polderSvg() {
  return `<svg viewBox="0 0 320 170">
<rect x="0" y="0" width="320" height="170" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Polder = drooggemalen land + dijk + sloten</text>
<!-- dijk om polder -->
<rect x="30" y="40" width="260" height="100" fill="none" stroke="${COLORS.dijk}" stroke-width="4"/>
<text x="160" y="35" text-anchor="middle" fill="${COLORS.dijk}" font-size="10" font-family="Arial">← dijk er omheen →</text>
<!-- polder-land -->
<rect x="34" y="44" width="252" height="92" fill="${COLORS.land}" opacity="0.5"/>
<!-- sloten -->
<line x1="60" y1="44" x2="60" y2="136" stroke="${COLORS.waterLicht}" stroke-width="2"/>
<line x1="100" y1="44" x2="100" y2="136" stroke="${COLORS.waterLicht}" stroke-width="2"/>
<line x1="160" y1="44" x2="160" y2="136" stroke="${COLORS.waterLicht}" stroke-width="2"/>
<line x1="220" y1="44" x2="220" y2="136" stroke="${COLORS.waterLicht}" stroke-width="2"/>
<line x1="260" y1="44" x2="260" y2="136" stroke="${COLORS.waterLicht}" stroke-width="2"/>
<text x="80" y="95" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial" font-weight="bold">koeien</text>
<text x="80" y="110" fill="${COLORS.text}" font-size="14" font-family="Arial" text-anchor="middle">🐄</text>
<text x="200" y="95" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial" font-weight="bold">akker</text>
<text x="200" y="110" fill="${COLORS.text}" font-size="14" font-family="Arial" text-anchor="middle">🌾</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Sloten voeren water af → gemaal pompt het over de dijk</text>
</svg>`;
}

const steps = [
  // STAP 1: Nederland en water
  {
    title: "Nederland en water — een land onder zeeniveau",
    explanation:
      "Nederland is **uniek** in Europa: een groot deel ligt **onder zeeniveau**.\n\n**De feiten** *(uit je hoofd!)*:\n• Ongeveer **een kwart (25%)** van Nederland ligt **onder zeeniveau**.\n• Het diepste punt: **Zuidplaspolder** *(bij Rotterdam)*, ongeveer **6,76 meter** onder NAP *(Normaal Amsterdams Peil = zeeniveau)*.\n• Zonder dijken zou een groot deel onder water lopen.\n\n**Belangrijke wateren in Nederland**:\n• **Noordzee** — bij Den Haag, IJmuiden, Scheveningen.\n• **IJsselmeer** *(vroeger Zuiderzee)* — afgesloten van zee in 1932.\n• **Waddenzee** — boven Friesland en Groningen.\n• **Grote rivieren**: Rijn, Maas, Waal, IJssel, Schelde.\n• **Oosterschelde + Westerschelde** — Zeeland.\n\n**Waarom liggen we zo laag?**\n• Veel land was vroeger **zee, meer of moeras**.\n• In de loop van eeuwen hebben Nederlanders **water weggepompt** en **dijken gebouwd** om land te winnen.\n• Het land dat zo ontstaat heet een **polder**.\n\n**Toets-truc — 'NAP'**:\nNAP = **Normaal Amsterdams Peil** = de **standaard waterstand** in Nederland. Hoogtes meet je in **meters boven of onder** NAP.\n\n• Een gebied is bv. **+3 NAP** = 3 meter boven zeeniveau.\n• Of **-2 NAP** = 2 meter onder zeeniveau.\n\n**Beroemde uitspraak**:\n*'God created the world, but the Dutch made Holland.'* — God maakte de wereld, maar de Nederlanders maakten Holland.",
    svg: dijkSvg(),
    checks: [
      {
        q: "Hoeveel **procent** van Nederland ligt **onder zeeniveau**?",
        options: ["~25%", "~5%", "~75%", "~100%"],
        answer: 0,
        wrongHints: [null, "5% is maar een heel klein hoekje. Denk aan heel Noord-Holland, Zuid-Holland, Flevoland en Zeeland samen.", "75% is driekwart — dan lagen ook de Veluwe en Limburg onder zee.", "100%? Dan zouden ook de heuvels van Limburg onder water staan."],
        uitlegPad: {
          stappen: [
            { titel: "Een kwart = ~25%", tekst: "Ongeveer **25%** (= een **kwart**) van Nederland ligt **onder zeeniveau**. Zonder dijken zou een groot deel onder water lopen. Dit maakt NL uniek in Europa." },
            { titel: "Waar precies?", tekst: "Het diepste punt is de **Zuidplaspolder** bij Rotterdam: ongeveer **6,76 meter onder NAP** (zeeniveau). Veel van Noord-Holland, Zuid-Holland, Flevoland en Zeeland liggen onder zeeniveau." },
            { titel: "Waarom hier ooit zee/moeras", tekst: "Veel van het lage land was vroeger **zee, meer of moeras**. In eeuwen tijd hebben Nederlanders water weggepompt met **molens**, dijken gebouwd, en land 'gewonnen'. Zo ontstonden polders." },
          ],
          woorden: [
            { woord: "zeeniveau", uitleg: "Hoogte van het zeewater = nulpunt (NAP)." },
            { woord: "NAP", uitleg: "Normaal Amsterdams Peil = standaard zeeniveau in NL." },
          ],
          theorie: "Toets-feit: 25% onder zeeniveau is een typisch Doorstroomtoets-getal. Onthoud 'ongeveer een **kwart**' — makkelijk te vertalen naar 25%.",
          voorbeelden: [
            { type: "stap", tekst: "Het Westland (kassen) ligt onder zeeniveau. Schiphol ligt op -3 NAP (3 meter onder zee)." },
            { type: "stap", tekst: "Vergelijk: ook Bangladesh heeft veel laag land. In Europa is Nederland uniek." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Een kwart = 1/4 = 25%. Onthoud dit getal — komt op aardrijkskunde-vragen vaak terug." }],
          niveaus: {
            basis: "~25% (kwart).",
            simpeler: "Ongeveer 1 op de 4 m² van NL ligt onder zeeniveau = 25%.",
            nogSimpeler: "25%",
          },
        },
      },
      {
        q: "Wat is **NAP**?",
        options: ["Normaal Amsterdams Peil", "Naam van een polder", "Een Nederlandse rivier", "Een dijk"],
        answer: 0,
        wrongHints: [null, "N-A-P: zit er een 'polder' in die letters? Kijk in de toets-truc.", "Een rivier heet niet naar drie letters. Waar staat NAP voor in de uitleg?", "Een dijk is iets wat je bouwt; NAP is iets wat je meet. Wat?"],
      },
      {
        q: "Welke **rivier** loopt door Nederland?",
        options: ["Rijn", "Theems", "Donau", "Nijl"],
        answer: 0,
        wrongHints: [null, "Theems is in Engeland.", "Donau in Midden-Europa.", "Nijl in Egypte."],
      },
      {
        q: "Wat is het **IJsselmeer** vroeger geweest?",
        options: ["Een zee", "Een moeras", "Een polder", "Een rivier"],
        answer: 0,
        wrongHints: [null, "Een moeras is drassig land. Het IJsselmeer was al vóór 1932 een groot water. Welk water?", "Een polder is land. Het IJsselmeer is nooit land geweest — wat was het dan?", "Een rivier stroomt. Het IJsselmeer was een groot, open water met zout water. Welk?"],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een stuk land ligt op **-2 NAP**. Wat betekent dat?",
        options: [
          "Het ligt 2 meter onder zeeniveau",
          "Het ligt 2 meter boven zeeniveau",
          "Het ligt 2 kilometer onder zeeniveau",
          "Het ligt precies op zeeniveau",
        ],
        answer: 0,
        wrongHints: [null, "Kijk goed naar het teken dat vóór het getal staat.", "2 kilometer is 2000 meter — zo diep ligt geen stuk land in Nederland. In welke eenheid meet NAP?", "Precies op zeeniveau zou 0 NAP zijn. Hier staat −2."],
      },
      {
        q: "Waar ligt het **laagste punt** op het land van Nederland?",
        options: ["In de Zuidplaspolder", "Op de Vaalserberg", "Op de Veluwe", "Op de Utrechtse Heuvelrug"],
        answer: 0,
        wrongHints: [
          null,
          "Daar ligt juist het hoogste punt van Nederland.",
          "Daar vind je heuvels en bossen.",
          "De Utrechtse Heuvelrug — de naam zegt het al: heuvels, dus hoog.",
        ],
      },
      {
        q: "Welk water ligt **boven Friesland en Groningen**?",
        options: ["Waddenzee", "Oosterschelde", "Westerschelde", "IJsselmeer"],
        answer: 0,
        wrongHints: [null, "Dit water ligt in Zeeland, helemaal in het zuidwesten.", "De Westerschelde ligt in Zeeland, in het zuidwesten.", "Het IJsselmeer ligt tussen Noord-Holland, Friesland en Flevoland — niet erboven."],
      },
      {
        q: "Wat bedoelen mensen met: *'God maakte de wereld, maar de Nederlanders maakten Holland'*?",
        options: [
          "Nederlanders hebben veel land zelf op het water gewonnen",
          "Nederlanders hebben de hele wereld ontdekt",
          "Holland is het oudste land van de wereld",
          "In Holland wonen de meeste mensen van de wereld",
        ],
        answer: 0,
        wrongHints: [null, "Het gaat over Holland zelf, niet over verre landen.", "Nederland is niet het oudste land. De spreuk gaat over wat Nederlanders zelf gemáákt hebben.", "De meeste mensen wonen in Azië. De spreuk gaat over iets anders: wat Nederlanders zelf deden met hun land."],
      },
    ],
  },

  // STAP 2: Dijken + duinen
  {
    title: "Dijken en duinen — hoe we droge voeten houden",
    explanation:
      "Nederland houdt het water buiten met **3 hoofdsoorten waterkeringen**:\n\n**1. Dijken** *(door mensen gemaakt)*\nGrote aarden wallen die water tegenhouden. Hoog en breed.\n• **Zeedijk** — tegen de zee aan.\n• **Rivierdijk** — langs een rivier.\n• **Polderdijk** — tussen polder en water.\n\n**Voorbeelden van bekende dijken**:\n• **Afsluitdijk** — 32 km, sluit IJsselmeer af van Waddenzee *(klaar 1932)*.\n• **Houtribdijk** — tussen Lelystad en Enkhuizen.\n• **Veluwemeer-dijken**.\n\n**2. Duinen** *(door de natuur gemaakt)*\nZand-heuvels langs de kust, gevormd door wind en zee.\n• Maken een natuurlijke bescherming tegen de zee.\n• Langs de Hollandse kust *(Noord/Zuid-Holland)* en bij de Waddeneilanden.\n\n**3. Stormvloedkeringen** *(speciale beweegbare dijken)*\nGrote stalen 'hekken' die alleen dichtgaan bij storm.\n• **Maeslantkering** — bij Rotterdam, bekendste.\n• **Oosterscheldekering** — onderdeel Deltawerken.\n• **Hartelkering** + **Hollandsche IJssel-kering**.\n\n**toetsvraag**:\n*'Wat is het verschil tussen een dijk en een duin?'*\n→ Dijk is door mensen gemaakt, duin door de natuur (wind + zand).\n\n**Wie zorgt voor de dijken?**\nElk gebied heeft een **waterschap**. Dat is een soort overheid speciaal voor water. Ze:\n• Onderhouden dijken.\n• Pompen polder-water weg.\n• Houden waterstand bij.\n• Heffen 'waterschapsbelasting' bij inwoners.\n\nNederland heeft **21 waterschappen**.",
    checks: [
      {
        q: "Wat is het verschil tussen een **dijk** en een **duin**?",
        options: ["Dijk door mensen, duin door natuur", "Dijk hoger dan duin altijd", "Duin door mensen, dijk door natuur", "Geen verschil"],
        answer: 0,
        wrongHints: [null, "Sommige duinen zijn hoger dan dijken. Gaat het verschil om hoogte, of om wie ze maakte?", "Wie maakt duinen: mensen met graafmachines, of wind en zee?", "Er is wel verschil: de een is gebouwd, de ander gegroeid. Welke is welke?"],
      },
      {
        q: "Hoe lang is de **Afsluitdijk**?",
        options: ["~32 km", "~5 km", "~100 km", "~10 km"],
        answer: 0,
        wrongHints: [null, "5 km fiets je in een kwartier. De Afsluitdijk van Noord-Holland naar Friesland is veel langer.", "100 km is ongeveer van Amsterdam naar Zwolle — zo breed is het IJsselmeer niet.", "10 km is ongeveer de lengte van een stad. Kijk op de kaart hoe ver Friesland van Noord-Holland ligt."],
      },
      {
        q: "Wat is een **waterschap**?",
        options: ["Overheid speciaal voor water", "Rivier die door de polder stroomt", "Soort dijk langs de zee", "Bedrijf dat drinkwater levert"],
        answer: 0,
        wrongHints: [null, "Is een waterschap zelf water, of iets anders?", "Geen dijk — al zorgt een waterschap wel voor dijken.", "Drinkwater uit de kraan komt van een waterbedrijf. Een waterschap regelt iets anders: dijken, sloten en de waterstand."],
      },
      {
        q: "Welke is een beroemde **stormvloedkering**?",
        options: ["Maeslantkering", "Afsluitdijk", "Houtribdijk", "Brouwersdam"],
        answer: 0,
        wrongHints: [null, "De Afsluitdijk is een dijk die altijd dicht is — geen beweegbare kering.", "De Houtribdijk ligt tussen Lelystad en Enkhuizen: een gewone dijk.", "De Brouwersdam is een vaste dam. Een stormvloedkering kan open en dicht."],
        uitlegPad: {
          stappen: [
            { titel: "Bekend bij Rotterdam", tekst: "De Maeslantkering staat bij Hoek van Holland en beschermt Rotterdam tegen stormvloed vanuit de Noordzee. Sluit alleen bij hoog water." },
          ],
          woorden: [{ woord: "stormvloedkering", uitleg: "Beweegbare waterkering die alleen sluit bij gevaarlijk hoog water." }],
          theorie: "Een stormvloedkering is een grote stalen 'deur' die normaal open staat (schepen kunnen passeren) maar dichtgaat bij storm.",
          voorbeelden: [{ type: "stap", tekst: "Maeslantkering = bij Rotterdam. Oosterscheldekering = in Zeeland." }],
          basiskennis: [{ onderwerp: "Niet permanent dicht", uitleg: "Schepen moeten door — kering moet open kunnen." }],
          niveaus: {
            basis: "Maeslantkering.",
            simpeler: "Maeslantkering is de stormvloedkering bij Rotterdam — sluit alleen bij storm.",
            nogSimpeler: "Maeslantkering",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat doet een **stormvloedkering**?",
        options: [
          "Hij gaat alleen dicht bij storm",
          "Hij staat altijd helemaal dicht",
          "Hij pompt water uit een polder",
          "Hij maakt stroom met de wind",
        ],
        answer: 0,
        wrongHints: [null, "Dan zouden schepen er nooit meer door kunnen.", "Dat werk doet een gemaal.", "Stroom maken doet een windturbine, geen kering."],
      },
      {
        q: "Hoeveel **waterschappen** heeft Nederland?",
        options: ["21", "12", "50", "3"],
        answer: 0,
        wrongHints: [null, "Dat is het aantal provincies.", "50 is veel te veel — dan had bijna elke grote stad er een.", "Met maar drie zou elk waterschap een derde van het land moeten doen. Het zijn er meer."],
      },
      {
        q: "Welke taak doet een waterschap **NIET**?",
        options: ["Scholen bouwen", "Dijken onderhouden", "Polderwater wegpompen", "De waterstand bijhouden"],
        answer: 0,
        wrongHints: [
          null,
          "Dit hoort wel bij het werk van een waterschap. Lees goed: de vraag zegt NIET.",
          "Polderwater wegpompen is juist een kerntaak van een waterschap.",
          "De waterstand bijhouden hoort erbij. Lees goed: de vraag zegt NIET.",
        ],
      },
    ],
  },

  // STAP 3: Polders + droogmaking
  {
    title: "Polders — land uit water gemaakt",
    explanation:
      "Een **polder** is een stuk land dat:\n• **Lager ligt** dan het omringende water.\n• Omgeven is door **dijken**.\n• Wordt **drooggehouden** met gemalen *(pompen)*.\n\n**Hoe maak je een polder?**\n1. **Dijk** om het gebied bouwen.\n2. **Water wegpompen** uit het gebied *(eerst met windmolens, nu met gemalen)*.\n3. **Sloten graven** voor afvoer.\n4. **Wachten** tot bodem opdroogt en kan worden bewerkt.\n5. **Bouwen + boeren**: mensen gaan er wonen/werken.\n\n**Beroemde Nederlandse polders**:\n• **Beemster** *(1612)* — eerste grote droogmakerij, UNESCO werelderfgoed.\n• **Haarlemmermeer** *(1852)* — waar Schiphol nu ligt.\n• **Flevopolder** *(1957-1968)* — provincie Flevoland, droogmakerij.\n• **Wieringermeer** *(1930)* — eerste Zuiderzeepolder.\n\n**Provincie Flevoland — een poldervraag voor de Doorstroomtoets**:\nFlevoland is **de jongste provincie van Nederland** *(provincie sinds 1986)*. Het bestaat bijna helemaal uit **drooggelegde polders**:\n• Noordoostpolder.\n• Oostelijk Flevoland.\n• Zuidelijk Flevoland.\n\nAlmere is de **grootste stad** in Flevoland *(en groeit hard)*.\n\n**Toets-truc — molens**:\n• **Korenmolen** = maalt graan tot meel.\n• **Watermolen** = pompt water weg.\n• **Poldermolen** = specifiek voor polder drooghouden.\n\nDe vroege molens waren **windmolens** *(wind als energiebron)*. Nu zijn het meestal **elektrische gemalen**.",
    svg: polderSvg(),
    checks: [
      {
        q: "Wat is een **polder**?",
        options: ["Drooggemalen land achter een dijk", "Diep meer midden in het land", "Groot bos vol hoge bomen", "Hoge zandheuvel aan de kust"],
        answer: 0,
        wrongHints: [null, "Staat er in een polder water, of kun je erop lopen?", "In een bos groeien bomen vanzelf; een polder is door mensen gemaakt.", "Dat is een duin."],
      },
      {
        q: "Welke provincie bestaat uit **drooggemaakte polders**?",
        options: ["Flevoland", "Drenthe", "Noord-Brabant", "Limburg"],
        answer: 0,
        wrongHints: [null, "Drenthe is eeuwenoude zandgrond met hunebedden — geen polder.", "Noord-Brabant ligt op zand, boven zeeniveau.", "Limburg heeft heuvels — daar hoefde niets drooggemalen te worden."],
      },
      {
        q: "Welke vroegere zee is **drooggemalen tot Flevoland**?",
        options: ["Zuiderzee", "Noordzee", "Waddenzee", "Oosterschelde"],
        answer: 0,
        wrongHints: [null, "De Noordzee bestaat nog steeds — die is niet drooggemalen.", "De Waddenzee ligt boven Friesland en is nog steeds zee.", "De Oosterschelde ligt in Zeeland en is nog steeds water."],
      },
      {
        q: "Wat doet een **poldermolen**?",
        options: ["Hij pompt water uit de polder", "Hij maalt graan", "Hij maakt elektriciteit", "Hij pompt drinkwater omhoog"],
        answer: 0,
        wrongHints: [null, "Graan malen doet een korenmolen.", "Moderne windturbines doen dat, niet poldermolens.", "Drinkwater komt uit de waterleiding, niet uit een molen."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat doe je **eerst** als je een polder maakt?",
        options: [
          "Een dijk om het gebied bouwen",
          "Sloten graven voor de afvoer",
          "Huizen en boerderijen bouwen",
          "Wachten tot de bodem droog is",
        ],
        answer: 0,
        wrongHints: [null, "Sloten graaf je pas als het meeste water weg is.", "Huizen bouw je pas als het land droog is.", "Wachten kan pas als het water weg is. Wat moet er éérst staan om het water tegen te houden?"],
      },
      {
        q: "In welke polder ligt nu **Schiphol**?",
        options: ["Haarlemmermeer", "Beemster", "Noordoostpolder", "Wieringermeer"],
        answer: 0,
        wrongHints: [null, "Die polder ligt ten noorden van Amsterdam.", "De Noordoostpolder ligt in Flevoland, ver van Schiphol.", "De Wieringermeer ligt in de kop van Noord-Holland."],
      },
      {
        q: "Wat is de **grootste stad** van Flevoland?",
        options: ["Almere", "Lelystad", "Emmeloord", "Dronten"],
        answer: 0,
        wrongHints: [null, "Die stad is de hoofdstad van de provincie, maar niet de grootste.", "Emmeloord is de hoofdplaats van de Noordoostpolder, maar klein.", "Dronten is een kleinere plaats in Flevoland."],
      },
      {
        q: "Sinds welk jaar is **Flevoland** een provincie?",
        options: ["1986", "1612", "1852", "1953"],
        answer: 0,
        wrongHints: [null, "1612 is het jaar van de Beemster, de eerste grote droogmakerij.", "In dat jaar werd de Haarlemmermeer drooggelegd.", "1953 is het jaar van de Watersnoodramp."],
      },
    ],
  },

  // STAP 4: Watersnoodramp 1953
  {
    title: "Watersnoodramp 1953",
    explanation:
      "In de nacht van **31 januari op 1 februari 1953** brak in Nederland een **enorme ramp** uit. Een **stormvloed** vanuit de Noordzee viel samen met **springtij** *(extreem hoge vloed)* en een **noordwesterstorm**.\n\n**Wat gebeurde er?**\n• Dijken in **Zeeland**, **Zuid-Holland** en **Noord-Brabant** braken op meerdere plekken.\n• Zo'n **150.000 hectare land** liep onder water.\n• **1.836 mensen** verdronken.\n• **70.000 mensen** moesten hun huis ontvluchten.\n• Veel **dieren verdronken** (paarden, koeien, schapen).\n• Veel huizen, scholen, kerken verwoest.\n\n**Waarom zo erg?**\n• De dijken waren niet sterk genoeg.\n• Mensen kregen geen waarschuwing op tijd.\n• Veel mensen sliepen — wisten niet wat er gebeurde.\n• 's Nachts zond de radio niets uit: waarschuwingen kwamen niet aan.\n\n**De ramp veranderde Nederland**:\n• Bewustzijn: **dit mag nooit meer gebeuren**.\n• Begin van de **Deltawerken** *(zie volgende stap)*.\n• Stormwaarschuwing-systeem opgezet.\n• Dijken langs zee + grote rivieren werden veel hoger en sterker.\n\n**Toets-tip — feitjes om te kennen**:\n• Jaar: **1953** *(31 jan - 1 feb)*.\n• Doden: **1836** *(let op: dit jaartal lijkt op een jaar, maar is aantal slachtoffers)*.\n• Provincies hardst getroffen: **Zeeland**, **Zuid-Holland**, **Noord-Brabant**.\n• Reactie: **Deltawerken** gebouwd 1958-1997.\n\n**Hulp van buitenland**:\nDe internationale gemeenschap hielp. Onder meer Engeland en de VS stuurden schepen, materiaal, geld.",
    checks: [
      {
        q: "In welk jaar was de **Watersnoodramp**?",
        options: ["1953", "1932", "1965", "1975"],
        answer: 0,
        wrongHints: [null, "1932 is het jaar dat de Afsluitdijk klaar was.", "In 1965 waren de Deltawerken al in aanbouw — ná de ramp.", "In 1975 werd al jaren aan de Deltawerken gebouwd — de ramp was eerder."],
        uitlegPad: {
          stappen: [
            { titel: "1953 — onthoud dit jaartal", tekst: "De **Watersnoodramp** was in **1953**, in de nacht van 31 januari op 1 februari. Een storm op de Noordzee + springtij brak de dijken in Zeeland, Zuid-Holland en Noord-Brabant." },
            { titel: "Wat gebeurde", tekst: "**1836 mensen** verdronken. **70.000 mensen** moesten vluchten. **150.000 hectare** land overstroomde. De ramp werd het keerpunt voor de moderne waterkering in NL." },
            { titel: "Reactie: Deltawerken", tekst: "Door deze ramp besloot NL: 'dit nooit meer'. De **Deltawerken** (1958-1997) werden gebouwd: stormvloedkeringen + dijken om Zuidwest-NL te beschermen." },
          ],
          woorden: [
            { woord: "Watersnoodramp", uitleg: "De overstromingsramp van 1953." },
            { woord: "springtij", uitleg: "Extra hoge vloed bij volle/nieuwe maan." },
          ],
          theorie: "Toets-jaartal-rij voor NL+water:\n• **1932** = Afsluitdijk klaar (Zuiderzee dicht).\n• **1953** = Watersnoodramp.\n• **1958-1997** = Deltawerken bouw.\n• **1986** = Oosterscheldekering klaar.",
          voorbeelden: [
            { type: "stap", tekst: "Het getal 1836 in de ramp = aantal slachtoffers. Verwar het NIET met een jaartal." },
            { type: "stap", tekst: "Sinds 1953 staat 1 feb in NL geheugen als ramp-dag. Veel gedenktekens in Zeeland." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "1953 = Watersnoodramp. 1932 = Afsluitdijk. Niet door elkaar halen — de Afsluitdijk was er al vóór de ramp." }],
          niveaus: {
            basis: "1953.",
            simpeler: "Watersnoodramp = 1953 (31 jan - 1 feb).",
            nogSimpeler: "1953",
          },
        },
      },
      {
        q: "Welke 3 **provincies** waren het meest getroffen?",
        options: ["Zeeland, Zuid-Holland, Noord-Brabant", "Friesland, Groningen, Drenthe", "Limburg, Gelderland, Overijssel", "Noord-Holland, Utrecht, Flevoland"],
        answer: 0,
        wrongHints: [null, "Friesland, Groningen en Drenthe liggen in het noorden; de storm sloeg toe in het zuidwesten.", "Limburg, Gelderland en Overijssel liggen in het oosten, ver van de Noordzeekust.", "Noord-Holland en Utrecht kregen wel hoog water, maar de dijken braken vooral zuidelijker."],
      },
      {
        q: "Hoeveel **doden** waren er ongeveer bij de Watersnoodramp van 1953?",
        options: ["ongeveer 1.800", "ongeveer 100", "ongeveer 10.000", "ongeveer 500"],
        answer: 0,
        wrongHints: [null, "Honderd? Er verdronken hele dorpen. Het waren veel meer mensen.", "Tienduizend is te veel, al was het echte aantal al vreselijk genoeg.", "Vijfhonderd is te weinig. Er verdronken hele dorpen."],
      },
      {
        q: "Wat was de **reactie** van Nederland op de Watersnoodramp van 1953?",
        options: ["Deltawerken bouwen", "Alleen de dijken repareren", "Mensen verhuizen", "Land opgeven"],
        answer: 0,
        wrongHints: [null, "Repareren alleen was niet genoeg. Nederland zei: 'Dit nooit meer.' Wat werd er gebouwd?", "Sommige mensen verhuisden wel, maar dat was niet het grote plan van Nederland.", "Nederland gaf het land niet op, maar wilde het juist beter beschermen."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat zorgde samen voor de **Watersnoodramp** van 1953?",
        options: ["Storm en springtij", "Aardbeving en regen", "Droogte en hitte", "Sneeuw en vorst"],
        answer: 0,
        wrongHints: [null, "Nederland heeft bijna nooit zware aardbevingen.", "Droogte en hitte horen bij de zomer; de ramp was in de winter, met hoog water.", "Sneeuw en vorst geven geen overstroming vanuit zee."],
      },
      {
        q: "Hoeveel mensen moesten bij de Watersnoodramp van 1953 **hun huis ontvluchten**?",
        options: ["70.000", "1.836", "150.000", "500"],
        answer: 0,
        wrongHints: [null, "Dat getal hoort wel bij de ramp, maar het gaat over iets anders.", "150.000 hoort bij de hectare land die onderliep.", "500 is veel te weinig voor zoveel verwoeste dorpen."],
      },
      {
        q: "Waarom kwamen de waarschuwingen in de nacht van de Watersnoodramp (1953) **niet aan**?",
        options: [
          "De radio zond 's nachts niets uit",
          "Er bestonden nog geen telefoons",
          "Iedereen was op vakantie",
          "De dijken waren te hoog",
        ],
        answer: 0,
        wrongHints: [
          null,
          "In 1953 bestonden telefoons al wel.",
          "Op vakantie, eind januari? Nee — het was een gewone winternacht.",
          "Waren de dijken te hoog, of juist niet sterk genoeg?",
        ],
      },
      {
        q: "Wat gebeurde er **na** de Watersnoodramp van 1953 met de dijken langs zee en grote rivieren?",
        options: [
          "Ze werden hoger en sterker",
          "Ze werden weggehaald",
          "Ze werden lager gemaakt",
          "Er veranderde niets",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Weghalen? Dan zou het water vrij spel hebben.",
          "Lager maken zou het nog gevaarlijker maken.",
          "Denk aan wat Nederland na de ramp besloot: 'dit mag nooit meer gebeuren'.",
        ],
      },
    ],
  },

  // STAP 5: Deltawerken
  {
    title: "Deltawerken — Nederland beschermen",
    explanation:
      "Na de Watersnoodramp besloot Nederland: **'dit nooit meer'**.\n\nDe regering startte de **Deltawerken** — een enorme reeks bouwprojecten om Zuidwest-Nederland te beschermen.\n\n**Duur van het project**: **1958 — 1997** *(bijna 40 jaar!)*.\n\n**De belangrijkste onderdelen**:\n1. **Stormvloedkeringen** — bewegende dammen die alleen bij storm dichtgaan.\n2. **Afsluitende dammen** — die kleinere zeearmen permanent afsluiten.\n3. **Versterkte dijken** — overal hoger en breder.\n\n**Beroemde keringen / dammen** *(uit je hoofd!)*:\n• **Oosterscheldekering** *(klaar 1986)* — bewegend, laat eb-vloed door tenzij storm.\n• **Maeslantkering** *(klaar 1997)* — bij Rotterdam, twee enorme stalen 'deuren'.\n• **Brouwersdam** — Brouwershavense Gat afgesloten.\n• **Haringvlietdam** — Haringvliet afgesloten.\n• **Volkerakdam** + **Grevelingendam**.\n• **Veerse Gatdam**.\n\n**Wereldwijd bekend**:\nDe Deltawerken zijn een van de **moderne wereldwonderen** van de techniek *(Amerikaanse ASCE 'Seven Wonders of the Modern World')*. Mensen uit het buitenland komen ze bezichtigen.\n\n**Speciaal — Oosterscheldekering**:\nEerst was het plan: dichte dam. Maar dat zou het zoute milieu vernielen *(geen vissen, schelpdieren meer)*. Daarom werd de Oosterschelde **bewegend** gebouwd: water kan normaal door, alleen bij storm gaat hij dicht. Heeft **65 pijlers**.\n\n**Maeslantkering**:\nTwee enorme 'hekken' van staal, elk **210 meter lang**. Ze drijven naar hun plek en zinken dan doordat ze vollopen met water.\n\n**Wat verder?**\nDe Deltawerken zijn klaar, maar ze worden bijgehouden. Bij klimaatverandering en zeespiegelstijging worden nieuwe versterkingen overwogen.",
    checks: [
      {
        q: "Wanneer was de **Watersnoodramp** die de Deltawerken aanjoeg?",
        options: ["1953", "1932", "1965", "1990"],
        answer: 0,
        wrongHints: [null, "1932 is het jaar van de Afsluitdijk.", "In 1965 waren de Deltawerken al in aanbouw.", "In 1990 was bijna alles al klaar."],
      },
      {
        q: "Welke is **NIET** onderdeel van de Deltawerken?",
        options: ["Afsluitdijk", "Oosterscheldekering", "Maeslantkering", "Haringvlietdam"],
        answer: 0,
        wrongHints: [null, "Wel een Deltawerk — beschermt Zeeland tegen stormvloed.", "Wel een Deltawerk — beschermt Rotterdam.", "Wel een Deltawerk — sluit het Haringvliet af."],
        uitlegPad: {
          stappen: [
            { titel: "Let op de vraag — NIET!", tekst: "Het woord **NIET** verandert de vraag. Je zoekt het ENE antwoord dat **buiten** de Deltawerken valt." },
            { titel: "Deltawerken = 1958-1997, Zuidwest-NL", tekst: "De Deltawerken zijn een serie projecten **NA de Watersnoodramp 1953**, in **Zuidwest-Nederland** (Zeeland + zuid). Periode: **1958-1997**. Doel: stormvloedkering + dijkversterking." },
            { titel: "Afsluitdijk valt erbuiten", tekst: "De **Afsluitdijk** is van **1932** (Zuiderzee → IJsselmeer). Dat is **VOOR** de Watersnoodramp en in een ander gedeelte van NL (noord, niet zuid). Dus geen Deltawerk." },
          ],
          woorden: [
            { woord: "Deltawerken", uitleg: "Reeks projecten 1958-1997 in Zeeland en zuid Zuid-Holland tegen overstromingen." },
            { woord: "Afsluitdijk", uitleg: "Dijk uit 1932 die de Zuiderzee veranderde in IJsselmeer." },
          ],
          theorie: "Toets-truc onderscheiden: **Afsluitdijk = 1932 = noord** (boven Friesland). **Deltawerken = 1958-1997 = zuid** (Zeeland + Zuid-Holland). 2 verschillende projecten, 30+ jaar uit elkaar.",
          voorbeelden: [
            { type: "stap", tekst: "Onderdelen Deltawerken: Oosterscheldekering, Brouwersdam, Haringvlietdam, Veerse Gatdam, Maeslantkering (laatste onderdeel)." },
            { type: "stap", tekst: "Afsluitdijk = los project. Vaak verward met Deltawerken omdat beide dijken zijn — maar het zijn 2 verschillende reeksen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij 'welke is GEEN Deltawerk?' = Afsluitdijk. Onthoud: '32 = Afsluitdijk' / '53 = ramp' / '58+ = Deltawerken'." }],
          niveaus: {
            basis: "Afsluitdijk (= 1932, niet Deltawerk).",
            simpeler: "Afsluitdijk = 1932 = noord. Deltawerken = 1958-1997 = zuid. Anders.",
            nogSimpeler: "Afsluitdijk",
          },
        },
      },
      {
        q: "Wat is **bijzonder** aan de **Oosterscheldekering**?",
        options: ["Hij is beweegbaar", "Hij is altijd helemaal dicht", "Hij is van hout gemaakt", "Hij heeft 100 deuren"],
        answer: 0,
        wrongHints: [null, "Niet altijd dicht — dan zou het leven in de Oosterschelde sterven.", "Niet van hout — hij is van beton en staal.", "Het aantal deuren is niet wat hem bijzonder maakt."],
        uitlegPad: {
          stappen: [
            { titel: "Beweegbaar", tekst: "Het eerste plan was een vaste dam, maar dat zou de natuur in de Oosterschelde doden (geen zout getijdenwater meer). Daarom: beweegbaar." },
            { titel: "Werkt zo", tekst: "Normaal open: water gaat door bij eb en vloed. Sluit alleen wanneer storm + hoog water dreigt." },
          ],
          woorden: [{ woord: "beweegbare kering", uitleg: "Sluit alleen bij gevaar." }],
          theorie: "Oosterscheldekering is een compromis tussen veiligheid en natuur.",
          voorbeelden: [{ type: "stap", tekst: "65 pijlers, met de dammen erbij zo'n 9 km lang. Sluit gemiddeld ongeveer 1× per jaar." }],
          basiskennis: [{ onderwerp: "Compromis", uitleg: "Veiligheid + natuur beide gewogen." }],
          niveaus: {
            basis: "Beweegbaar.",
            simpeler: "Bijzonder: hij is niet permanent dicht (zoals andere dammen) maar beweegbaar. Sluit alleen bij storm — om de natuur in Oosterschelde te sparen.",
            nogSimpeler: "Beweegbaar",
          },
        },
      },
      {
        q: "Hoe lang duurden de **Deltawerken** ongeveer?",
        options: ["~40 jaar", "~5 jaar", "~100 jaar", "~10 jaar"],
        answer: 0,
        wrongHints: [null, "5 jaar: zoveel dammen en keringen bouw je niet zo snel. Reken van 1958 tot 1997.", "100 jaar: dan waren ze nu nog niet klaar.", "10 jaar: reken 1997 − 1958."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Waarom werd de Oosterscheldekering **geen dichte dam**?",
        options: [
          "Om vissen en schelpdieren te sparen",
          "Omdat er te weinig geld was",
          "Omdat er geen zand meer was",
          "Omdat de koning dat zo wilde",
        ],
        answer: 0,
        wrongHints: [null, "Geld was niet het probleem — het ging om de natuur in de Oosterschelde.", "Zand was er genoeg. Waarom wilden mensen de zeearm open houden?", "Wie besliste over de Deltawerken: de koning of de regering?"],
      },
      {
        q: "Welk deel van Nederland moesten de Deltawerken vooral **beschermen**?",
        options: ["Zuidwest-Nederland", "Noordoost-Nederland", "De Waddeneilanden", "Zuid-Limburg"],
        answer: 0,
        wrongHints: [null, "Noordoost-Nederland werd in 1953 niet getroffen.", "De Waddeneilanden horen bij het noorden; de ramp was in het zuidwesten.", "Daar ligt geen zee."],
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — Nederland en water mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: NAP, dijken, polders, watersnood, Deltawerken.\n\nVeel succes!",
    checks: [
      {
        q: "Wat betekent **NAP**?",
        options: ["Normaal Amsterdams Peil", "Nederlandse Algemene Polder", "Nationaal Aardrijkskunde Plan", "Nieuwe Afsluit-Polder"],
        answer: 0,
        wrongHints: [null, "NAP gaat niet over een polder, maar over een hoogte. Wat meet je ermee?", "Een plan voor aardrijkskunde? NAP staat op elke hoogtekaart — wat betekent het?", "Een nieuwe polder? NAP is al meer dan 100 jaar oud en gaat over meten."],
      },
      {
        q: "Welke provincie ligt (bijna) **helemaal op drooggemaakte polders**?",
        options: ["Flevoland", "Friesland", "Limburg", "Drenthe"],
        answer: 0,
        wrongHints: [null, "Friesland is een eeuwenoude provincie, geen polder.", "Limburg ligt op vaste grond in het zuiden.", "Drenthe is eeuwenoud, geen polder."],
      },
      {
        q: "In welk jaar was de **Watersnoodramp**?",
        options: ["1953", "1832", "1932", "1900"],
        answer: 0,
        wrongHints: [null, "Te vroeg.", "Toen was de Afsluitdijk klaar — dat was geen ramp.", "Geen ramp in dat jaar."],
      },
      {
        q: "Welke kering is **bij Rotterdam**?",
        options: ["Maeslantkering", "Oosterscheldekering", "Brouwersdam", "Veerse Gatdam"],
        answer: 0,
        wrongHints: [null, "De Oosterscheldekering ligt in Zeeland.", "De Brouwersdam sluit het Brouwershavense Gat af, in Zeeland.", "De Veerse Gatdam ligt bij Veere, in Zeeland."],
      },
      {
        q: "Wat is een **windmolen** vroeger gebruikt voor?",
        options: ["Water uit polder pompen + graan malen", "Elektriciteit maken + huizen verlichten", "Schepen trekken + boten aandrijven", "Wind meten + het weer voorspellen"],
        answer: 0,
        wrongHints: [null, "Moderne windturbines wel, niet vroeger.", "Schepen hebben zeilen, geen molens.", "Een molen meet geen wind — hij gebruikt de wind. Waarvoor?"],
      },
      {
        q: "Welke is een **gemaal**?",
        options: ["Pomp die water uit polder weghaalt", "Molen die graan tot meel maalt", "Muur die zee tegenhoudt bij storm", "Brug die open kan voor schepen"],
        answer: 0,
        wrongHints: [null, "Dat is een korenmolen.", "Dat is een stormvloedkering.", "Dat is een ophaalbrug."],
      },
      { q: "**Deltawerken** beschermen NL tegen?", options: ["Overstromingen","Aardbeving","Tornado","Lawine"], answer: 0, wrongHints: [null, "Aardbevingen komen nauwelijks in NL voor — niks om tegen te beschermen.", "Tornado's komen zelden voor en zijn niet de reden voor de Deltawerken.", "Lawines zijn alleen in bergen, niet in NL."] },
      { q: "Wat is een **polder**?", options: ["Drooggemaakt land","Een diep meer","Een oude stad","Een hoge dijk"], answer: 0, wrongHints: [null, "In een meer staat water; op een polder lopen koeien.", "Een stad kán op een polder liggen, maar een polder is zelf geen stad.", "Een dijk ligt óm de polder heen. Wat ligt erbinnen?"] },
      { q: "Wat is de **Afsluitdijk**?", options: ["Een lange dijk","Een molen","Een gemaal","Een spoorbrug"], answer: 0, wrongHints: [null, "Een molen maalt of pompt; de Afsluitdijk houdt water tegen. Wat zegt de naam?", "Een gemaal pompt water. De Afsluitdijk sluit iets af — hoe?", "Er rijden geen treinen over, wel auto's — maar het is geen brug. Kijk naar de naam."] },
      { q: "Welk **percentage** van Nederland ligt onder zeeniveau?", options: ["Ongeveer 25%","Ongeveer 60%","Ongeveer 5%","Ongeveer 90%"], answer: 0, wrongHints: [null, "60%: dan lag ook de Veluwe onder zee.", "5% is maar een hoekje; denk aan Noord-Holland, Zuid-Holland, Flevoland en Zeeland samen.", "90%: dan stonden ook de heuvels van Limburg onder water."] },
      { q: "Wat is een **terp**?", options: ["Een opgehoogde woonheuvel", "Een molen op een dijk", "Een dijk langs de zee", "Een sloot rond een boerderij"], answer: 0, wrongHints: [null, "Een terp is geen gebouw.", "Een dijk loopt in een lange lijn. Is een terp lang?", "Een sloot is gegraven water. Is een terp water?"] },
      { q: "Welk **werelderfgoed** in Nederland hoort bij onze strijd tegen het water?", options: ["Kinderdijk-molens","Rietveld-Schröderhuis","Hunebedden van Drenthe","Domtoren van Utrecht"], answer: 0, wrongHints: [null, "Het Rietveld-Schröderhuis is een woonhuis in Utrecht — mooi, maar het heeft niets met water te maken.", "Hunebedden zijn stenen graven uit de steentijd.", "De Domtoren is een kerktoren."] },
      { q: "Wie was **Jan Leeghwater**?", options: ["Een molen- en polderbouwer", "Een koning van de Republiek", "Een dijkbreker uit de oorlog", "Een schaatskampioen uit Friesland"], answer: 0, wrongHints: [null, "De Republiek had geen koning. Wat zegt zijn achternaam?", "Hij brak niets af, hij bouwde juist.", "Werd hij beroemd op het ijs?"] },
      { q: "Wat is **windmolen** versus **windturbine**?", options: ["Molen = graan malen of water pompen; turbine = stroom maken","Hetzelfde ding met een andere naam","Molen = stroom maken; turbine = graan malen","Molen staat op land; turbine staat altijd op zee"], answer: 0, wrongHints: [null, "Wel verschil — kijk waarvoor ze gebruikt worden.", "Een turbine heeft geen maalstenen. Wie maakt dan het meel, en wie de stroom?", "Turbines staan ook op land — het verschil zit in wat ze doen."] },
      { q: "**Beemster** ligt in welke provincie?", options: ["Noord-Holland","Zeeland","Friesland","Limburg"], answer: 0, wrongHints: [null, "Zeeland ligt in het zuidwesten; de Beemster ligt noordelijker.", "Friesland ligt aan de andere kant van het IJsselmeer.", "Limburg ligt in het zuidoosten, boven zeeniveau — daar zijn geen droogmakerijen."] },
      { q: "Wat doet een **stuw** in een rivier?", options: ["Waterhoogte regelen","Water weghalen","Vissen vangen","Verkeer doorlaten"], answer: 0, wrongHints: [null, "Water weghalen doet een gemaal. Een stuw houdt water juist tegen — waarvoor?", "Vissen vang je met een net of fuik. Een stuw is een soort muur in de rivier — wat doet die?", "Verkeer gaat over een brug. Een stuw staat ín het water."] },
      { q: "Welke beroemde **molenplek** ligt in Nederland?", options: ["Zaanse Schans","Scheveningen","Volendam","Giethoorn"], answer: 0, wrongHints: [null, "Scheveningen is bekend van het strand en de pier.", "Volendam is bekend van klederdracht en paling.", "Giethoorn is bekend van bootjes en bruggetjes."] },
      { q: "Wat doet de **Maeslantkering** in Hoek van Holland?", options: ["Sluit bij stormvloed automatisch", "Laat treinen over de rivier rijden", "Pompt water uit de polder weg", "Wekt stroom op met het getij"], answer: 0, wrongHints: [null, "Het is geen brug.", "Dat doet een gemaal.", "Het is geen centrale. Wat zegt het woord 'kering'?"] },
      { q: "Welke provincie is een beroemd **deltagebied** (waar rivieren in zee komen)?", options: ["Zeeland","Friesland","Drenthe","Limburg"], answer: 0, wrongHints: [null, "Friesland ligt aan de Waddenzee, niet waar de grote rivieren in zee komen.", "Drenthe ligt hoog op zand — daar mondt geen rivier uit in zee.", "Limburg ligt aan de Maas, maar ver van de zee. Een delta ligt waar rivieren de zee bereiken."] },
      { q: "Wat zou er gebeuren ZONDER dijken in NL?", options: ["Groot deel ondergelopen", "Niets, alles blijft hetzelfde", "Groot deel kurkdroog", "Meer heuvels en duinen"], answer: 0, wrongHints: [null, "Waarom zouden we dan dijken bouwen?", "Houden dijken water tegen of houden ze water vast?", "Dijken weghalen maakt geen bergen."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const waterErfgoedNederlandPo = {
  id: "water-erfgoed-nederland-po",
  title: "Nederland en water (groep 6-8)",
  emoji: "🌊",
  level: "groep6-8",
  subject: "aardrijkskunde",
  referentieNiveau: "1F",
  sloThema: "Aardrijkskunde Nederland — water + landschap + erfgoed",
  prerequisites: [
    { id: "topografie-nederland", title: "Topografie Nederland", niveau: "po-1F" },
  ],
  intro:
    "Nederland en water voor groep 6-8 — onder zeeniveau, dijken+duinen, polders, Watersnoodramp 1953, Deltawerken. Toets-onderdeel wereldoriëntatie. ~15 min.",
  triggerKeywords: [
    "water", "dijk", "duin", "polder", "NAP",
    "watersnood", "deltawerken", "afsluitdijk",
    "maeslantkering", "oosterscheldekering", "molen", "gemaal",
    "flevoland", "zuiderzee", "ijsselmeer",
  ],
  chapters,
  steps,
};

export default waterErfgoedNederlandPo;
