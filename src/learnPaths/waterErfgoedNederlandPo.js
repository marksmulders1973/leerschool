// Leerpad: Nederland en water — groep 6-8 PO.
// Cito-onderdeel wereldoriëntatie (aardrijkskunde Nederland). Ref 1F.
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
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
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
      "Nederland is **uniek** in Europa: een groot deel ligt **onder zeeniveau**.\n\n**De feiten** *(uit je hoofd!)*:\n• Ongeveer **een kwart (25%)** van Nederland ligt **onder zeeniveau**.\n• Het diepste punt: **Zuidplaspolder** *(bij Rotterdam)*, ongeveer **6,76 meter** onder NAP *(Normaal Amsterdams Peil = zeeniveau)*.\n• Zonder dijken zou een groot deel onder water lopen.\n\n**Belangrijke wateren in Nederland**:\n• **Noordzee** — bij Den Haag, IJmuiden, Scheveningen.\n• **IJsselmeer** *(vroeger Zuiderzee)* — afgesloten van zee in 1932.\n• **Waddenzee** — boven Friesland en Groningen.\n• **Grote rivieren**: Rijn, Maas, Waal, IJssel, Schelde.\n• **Oosterschelde + Westerschelde** — Zeeland.\n\n**Waarom liggen we zo laag?**\n• Veel land was vroeger **zee, meer of moeras**.\n• In de loop van eeuwen hebben Nederlanders **water weggepompt** en **dijken gebouwd** om land te winnen.\n• Het land dat zo ontstaat heet een **polder**.\n\n**Cito-truc — 'NAP'**:\nNAP = **Normaal Amsterdams Peil** = de **standaard waterstand** in Nederland. Alles is gemeten **hoeveel meter boven of onder** NAP.\n\n• Een gebied is bv. **+3 NAP** = 3 meter boven zeeniveau.\n• Of **-2 NAP** = 2 meter onder zeeniveau.\n\n**Beroemde uitspraak**:\n*'God created the world, but the Dutch made Holland.'* — God maakte de wereld, maar de Nederlanders maakten Holland.",
    svg: dijkSvg(),
    checks: [
      {
        q: "Hoeveel **procent** van Nederland ligt **onder zeeniveau**?",
        options: ["~25%", "~5%", "~75%", "~100%"],
        answer: 0,
        wrongHints: [null, "Veel meer.", "Te veel.", "Niet alles."],
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
          theorie: "Cito-feit: 25% onder zeeniveau is een typisch Doorstroomtoets-getal. Onthoud 'ongeveer een **kwart**' — makkelijk te vertalen naar 25%.",
          voorbeelden: [
            { type: "stap", tekst: "Het Westland (kassen) ligt onder zeeniveau. Schiphol ligt op -4 NAP (4 meter onder zee)." },
            { type: "stap", tekst: "Vergelijk: alleen Bangladesh + de Maladiven hebben vergelijkbaar lage gebieden. Nederland is uniek in Europa." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Een kwart = 1/4 = 25%. Onthoud dit getal — komt op aardrijkskunde-vragen vaak terug." }],
          niveaus: {
            basis: "~25% (kwart). = A.",
            simpeler: "Ongeveer 1 op de 4 m² van NL ligt onder zeeniveau = 25%. = A.",
            nogSimpeler: "25% = A.",
          },
        },
      },
      {
        q: "Wat is **NAP**?",
        options: ["Normaal Amsterdams Peil (standaard zeeniveau)", "Naam van een polder", "Een Nederlandse rivier", "Een dijk"],
        answer: 0,
        wrongHints: [null, "Geen plaatsnaam.", "Geen rivier.", "Geen dijk-soort."],
      },
      {
        q: "Welke **rivier** loopt door Nederland?",
        options: ["Rijn", "Theems", "Donau", "Nijl"],
        answer: 0,
        wrongHints: [null, "Theems is in Engeland.", "Donau in Midden-Europa.", "Nijl in Egypte."],
      },
      {
        q: "Wat is het **IJsselmeer** vroeger geweest?",
        options: ["Een zee (de Zuiderzee)", "Een berg", "Een woestijn", "Een rivier"],
        answer: 0,
        wrongHints: [null, "Nederland heeft geen bergen.", "Geen woestijnen.", "Geen rivier."],
      },
    ],
  },

  // STAP 2: Dijken + duinen
  {
    title: "Dijken en duinen — hoe we droge voeten houden",
    explanation:
      "Nederland houdt het water buiten met **3 hoofdsoorten waterkeringen**:\n\n**1. Dijken** *(door mensen gemaakt)*\nGrote aarden walen die water tegenhouden. Hoog en breed.\n• **Zeedijk** — tegen de zee aan.\n• **Rivierdijk** — langs een rivier.\n• **Polderdijk** — tussen polder en water.\n\n**Voorbeelden van bekende dijken**:\n• **Afsluitdijk** — 32 km, sluit IJsselmeer af van Waddenzee *(klaar 1932)*.\n• **Houtribdijk** — tussen Lelystad en Enkhuizen.\n• **Veluwemeer-dijken**.\n\n**2. Duinen** *(door de natuur gemaakt)*\nZand-heuvels langs de kust, gevormd door wind en zee.\n• Maken een natuurlijke bescherming tegen de zee.\n• Langs de Hollandse kust *(Noord/Zuid-Holland)* en bij de Waddeneilanden.\n\n**3. Stormvloedkeringen** *(speciale beweegbare dijken)*\nGroot stalen 'hekken' die alleen dichtgaan bij storm.\n• **Maeslantkering** — bij Rotterdam, bekendste.\n• **Oosterscheldekering** — onderdeel Deltawerken.\n• **Hartelkering** + **Hollandsche IJssel-kering**.\n\n**Cito-vraag**:\n*'Wat is het verschil tussen een dijk en een duin?'*\n→ Dijk is door mensen gemaakt, duin door de natuur (wind + zand).\n\n**Wie zorgt voor de dijken?**\nElk gebied heeft een **waterschap**. Dat is een soort overheid speciaal voor water. Ze:\n• Onderhouden dijken.\n• Pompen polder-water weg.\n• Houden waterstand bij.\n• Heffen 'waterschapsbelasting' bij inwoners.\n\nNederland heeft **21 waterschappen**.",
    checks: [
      {
        q: "Wat is het verschil tussen een **dijk** en een **duin**?",
        options: ["Dijk door mensen, duin door natuur", "Dijk hoger dan duin altijd", "Duin door mensen, dijk door natuur", "Geen verschil"],
        answer: 0,
        wrongHints: [null, "Niet altijd — variabel.", "Andersom.", "Wel verschil."],
      },
      {
        q: "Hoe lang is de **Afsluitdijk**?",
        options: ["~32 km", "~5 km", "~100 km", "~10 km"],
        answer: 0,
        wrongHints: [null, "Veel langer.", "Te lang.", "Te kort."],
      },
      {
        q: "Wat is een **waterschap**?",
        options: ["Overheid speciaal voor water", "Een rivier", "Een soort dijk", "Een waterpark"],
        answer: 0,
        wrongHints: [null, "Geen rivier.", "Geen dijk.", "Geen pretpark."],
      },
      {
        q: "Welke is een beroemde **stormvloedkering**?",
        options: ["Maeslantkering", "Oosterdijk", "Rijnsluis", "Veluwedijk"],
        answer: 0,
        wrongHints: [null, "Geen specifieke kering.", "Geen stormvloedkering.", "Geen kering."],
        uitlegPad: {
          stappen: [
            { titel: "Bekend bij Rotterdam", tekst: "De Maeslantkering staat bij Hoek van Holland en beschermt Rotterdam tegen stormvloed vanuit de Noordzee. Sluit alleen bij hoog water." },
          ],
          woorden: [{ woord: "stormvloedkering", uitleg: "Beweegbare waterkering die alleen sluit bij gevaarlijk hoog water." }],
          theorie: "Een stormvloedkering is een grote stalen 'deur' die normaal open staat (schepen kunnen passeren) maar dichtgaat bij storm.",
          voorbeelden: [{ type: "stap", tekst: "Maeslantkering = bij Rotterdam. Oosterscheldekering = in Zeeland." }],
          basiskennis: [{ onderwerp: "Niet permanent dicht", uitleg: "Schepen moeten door — kering moet open kunnen." }],
          niveaus: {
            basis: "Maeslantkering. A.",
            simpeler: "Maeslantkering is de stormvloedkering bij Rotterdam — sluit alleen bij storm. = A.",
            nogSimpeler: "Maeslantkering = A.",
          },
        },
      },
    ],
  },

  // STAP 3: Polders + droogmaking
  {
    title: "Polders — land uit water gemaakt",
    explanation:
      "Een **polder** is een stuk land dat:\n• **Lager ligt** dan het omringende water.\n• Omgeven is door **dijken**.\n• Wordt **drooggehouden** met gemalen *(pompen)*.\n\n**Hoe maak je een polder?**\n1. **Dijk** om het gebied bouwen.\n2. **Water wegpompen** uit het gebied *(eerst met windmolens, nu met gemalen)*.\n3. **Sloten graven** voor afvoer.\n4. **Wachten** tot bodem opdroogt en kan worden bewerkt.\n5. **Bouwen + boeren** kunnen er gaan wonen/werken.\n\n**Beroemde Nederlandse polders**:\n• **Beemster** *(1612)* — eerste grote droogmakerij, UNESCO werelderfgoed.\n• **Haarlemmermeer** *(1852)* — waar Schiphol nu ligt.\n• **Flevopolder** *(1957-1968)* — provincie Flevoland, droogmakerij.\n• **Wieringermeer** *(1930)* — eerste Zuiderzeepolder.\n\n**Provincie Flevoland — een poldervraag voor Cito**:\nFlevoland is **de jongste provincie van Nederland** *(provincie sinds 1986)*. Het is helemaal **drooggelegde polder**:\n• Wieringermeerpolder.\n• Noordoostpolder.\n• Oostelijk Flevoland.\n• Zuidelijk Flevoland.\n\nAlmere is de **grootste stad** in Flevoland *(en groeit hard)*.\n\n**Cito-truc — molens**:\n• **Korenmolen** = maalt graan tot meel.\n• **Watermolen** = pompt water weg.\n• **Poldermolen** = specifiek voor polder drooghouden.\n\nDe vroege molens waren **windmolens** *(wind als energiebron)*. Nu zijn het meestal **elektrische gemalen**.",
    svg: polderSvg(),
    checks: [
      {
        q: "Wat is een **polder**?",
        options: ["Drooggemalen land achter een dijk", "Een meer", "Een groot bos", "Een berg"],
        answer: 0,
        wrongHints: [null, "Andersom — polder is geen meer.", "Geen bos.", "Geen berg."],
      },
      {
        q: "Welke is een **drooggemaakte polder**?",
        options: ["Flevoland", "Drenthe", "Noord-Brabant", "Limburg"],
        answer: 0,
        wrongHints: [null, "Niet drooggemaakt — oude grond.", "Niet drooggemaakt.", "Niet drooggemaakt."],
      },
      {
        q: "Welke vroegere zee is **drooggemalen tot Flevoland**?",
        options: ["Zuiderzee", "Noordzee", "Waddenzee", "Oosterschelde"],
        answer: 0,
        wrongHints: [null, "Noordzee is nog steeds zee.", "Wadden is nog zee.", "Oosterschelde nog water."],
      },
      {
        q: "Wat doet een **poldermolen**?",
        options: ["Pompt water uit polder", "Maalt graan", "Maakt elektriciteit", "Pompt drinkwater"],
        answer: 0,
        wrongHints: [null, "Dat is korenmolen.", "Moderne windturbines doen dat, niet poldermolens.", "Niet drinkwater."],
      },
    ],
  },

  // STAP 4: Watersnoodramp 1953
  {
    title: "Watersnoodramp 1953",
    explanation:
      "In de nacht van **31 januari op 1 februari 1953** brak in Nederland een **enorme ramp** uit. Een **stormvloed** vanuit de Noordzee combineerde met **springtij** *(extreem hoge vloed)* en **noordwesten storm**.\n\n**Wat gebeurde er?**\n• Dijken in **Zeeland**, **Zuid-Holland** en **Noord-Brabant** braken op meerdere plekken.\n• Zo'n **150.000 hectare land** liep onder water.\n• **1.836 mensen** verdronken.\n• **70.000 mensen** moesten hun huis ontvluchten.\n• Veel **dieren verdronken** (paarden, koeien, schapen).\n• Veel huizen, scholen, kerken verwoest.\n\n**Waarom zo erg?**\n• De dijken waren niet sterk genoeg.\n• Mensen kregen geen waarschuwing op tijd.\n• Veel mensen sliepen — wisten niet wat er gebeurde.\n• De radio en kerktoren-bel hadden geen storm-waarschuwing.\n\n**De ramp veranderde Nederland**:\n• Bewustzijn: **dit mag nooit meer gebeuren**.\n• Begin van de **Deltawerken** *(zie volgende stap)*.\n• Stormwaarschuwing-systeem opgezet.\n• Dijken langs zee + grote rivieren werden veel hoger en sterker.\n\n**Cito-tip — feitjes om te kennen**:\n• Jaar: **1953** *(31 jan - 1 feb)*.\n• Doden: **1836** *(let op: dit jaartal lijkt op een jaar, maar is aantal slachtoffers)*.\n• Provincies hardst getroffen: **Zeeland**, **Zuid-Holland**, **Noord-Brabant**.\n• Reactie: **Deltawerken** gebouwd 1958-1997.\n\n**Hulp van buitenland**:\nDe internationale gemeenschap hielp. Vooral de UK stuurde schepen, materiaal, geld.",
    checks: [
      {
        q: "In welk jaar was de **Watersnoodramp**?",
        options: ["1953", "1932", "1965", "1975"],
        answer: 0,
        wrongHints: [null, "Dat was sluiting Afsluitdijk.", "Te laat.", "Te laat."],
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
          theorie: "Cito-jaartal-rij voor NL+water:\n• **1932** = Afsluitdijk klaar (Zuiderzee dicht).\n• **1953** = Watersnoodramp.\n• **1958-1997** = Deltawerken bouw.\n• **1986** = Oosterscheldekering klaar.",
          voorbeelden: [
            { type: "stap", tekst: "Het getal 1836 in de ramp = aantal slachtoffers. Verwar het NIET met een jaartal." },
            { type: "stap", tekst: "Sinds 1953 staat 1 feb in NL geheugen als ramp-dag. Veel gedenktekens in Zeeland." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "1953 = Watersnoodramp. 1932 = Afsluitdijk. Niet door elkaar halen — Afsluitdijk was juist VÓÓR de ramp en hielp toen al een beetje." }],
          niveaus: {
            basis: "1953. = A.",
            simpeler: "Watersnoodramp = 1953 (31 jan - 1 feb). = A.",
            nogSimpeler: "1953 = A.",
          },
        },
      },
      {
        q: "Welke 3 **provincies** waren het meest getroffen?",
        options: ["Zeeland, Zuid-Holland, Noord-Brabant", "Friesland, Groningen, Drenthe", "Limburg, Gelderland, Overijssel", "Noord-Holland, Utrecht, Flevoland"],
        answer: 0,
        wrongHints: [null, "Boven Nederland — niet getroffen.", "Oosten — niet de hardste klap.", "Niet hardst."],
      },
      {
        q: "Hoeveel **doden** waren er ongeveer?",
        options: ["~1.836", "~100", "~10.000", "~500"],
        answer: 0,
        wrongHints: [null, "Veel te weinig.", "Te veel.", "Te weinig."],
      },
      {
        q: "Wat was de **reactie** op de ramp?",
        options: ["Deltawerken bouwen", "Niets doen", "Mensen verhuizen", "Land opgeven"],
        answer: 0,
        wrongHints: [null, "Wél iets gedaan — heel veel zelfs.", "Niet de hoofdreactie.", "Land werd juist beschermd."],
      },
    ],
  },

  // STAP 5: Deltawerken
  {
    title: "Deltawerken — Nederland beschermen",
    explanation:
      "Na de Watersnoodramp besloot Nederland: **'dit nooit meer'**.\n\nDe regering startte de **Deltawerken** — een enorme reeks bouwprojecten om Zuidwest-Nederland te beschermen.\n\n**Duur van het project**: **1958 — 1997** *(bijna 40 jaar!)*.\n\n**De belangrijkste onderdelen**:\n1. **Stormvloedkeringen** — bewegende dammen die alleen bij storm dichtgaan.\n2. **Afsluitende dammen** — die kleinere zeearmen permanent afsluiten.\n3. **Versterkte dijken** — overal hoger en breder.\n\n**Beroemde keringen / dammen** *(uit je hoofd!)*:\n• **Oosterscheldekering** *(klaar 1986)* — bewegend, laat eb-vloed door tenzij storm.\n• **Maeslantkering** *(klaar 1997)* — bij Rotterdam, twee enorme stalen 'deuren'.\n• **Brouwersdam** — Brouwershavense Gat afgesloten.\n• **Haringvlietdam** — Haringvliet afgesloten.\n• **Volkerakdam** + **Grevelingendam**.\n• **Veerse Gatdam**.\n\n**Wereldwijd bekend**:\nDe Deltawerken zijn een van de **moderne wereldwonderen** van de techniek *(Amerikaanse ASCE 'Seven Wonders of the Modern World')*. Mensen uit het buitenland komen ze bezichtigen.\n\n**Speciaal — Oosterscheldekering**:\nEerst was het plan: dichte dam. Maar dat zou het zoute milieu vernielen *(geen vissen, schelpdieren meer)*. Daarom werd de Oosterschelde **bewegend** gebouwd: water kan normaal door, alleen bij storm gaat hij dicht. Heeft **62 pijlers**.\n\n**Maeslantkering**:\nTwee enorme 'hekken' van staal — elk **gevuld met water** voor gewicht. Drijven naar hun plek. **210 meter lang** elk. Sluiten in ongeveer **30 minuten** als waarschuwing komt.\n\n**Wat verder?**\nDe Deltawerken zijn klaar, maar ze worden bijgehouden. Bij klimaatverandering en zeespiegelstijging worden nieuwe versterkingen overwogen.",
    checks: [
      {
        q: "Wanneer was de **Watersnoodramp** die de Deltawerken aanjoeg?",
        options: ["1953", "1932", "1965", "1990"],
        answer: 0,
        wrongHints: [null, "Dat is Afsluitdijk-klaar.", "Te laat.", "Te laat."],
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
          theorie: "Cito-truc onderscheiden: **Afsluitdijk = 1932 = noord** (boven Friesland). **Deltawerken = 1958-1997 = zuid** (Zeeland + Zuid-Holland). 2 verschillende projecten, 30+ jaar uit elkaar.",
          voorbeelden: [
            { type: "stap", tekst: "Onderdelen Deltawerken: Oosterscheldekering, Brouwersdam, Haringvlietdam, Veerse Gatdam, Maeslantkering (afsluitend stuk)." },
            { type: "stap", tekst: "Afsluitdijk = los project. Vaak verward met Deltawerken omdat beide dijken zijn — maar het zijn 2 verschillende reeksen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij 'welke is GEEN Deltawerk?' = Afsluitdijk. Onthoud: '32 = Afsluitdijk' / '53 = ramp' / '58+ = Deltawerken'." }],
          niveaus: {
            basis: "Afsluitdijk (= 1932, niet Deltawerk). = A.",
            simpeler: "Afsluitdijk = 1932 = noord. Deltawerken = 1958-1997 = zuid. Anders. = A.",
            nogSimpeler: "Afsluitdijk = A.",
          },
        },
      },
      {
        q: "Wat is **bijzonder** aan de **Oosterscheldekering**?",
        options: ["Hij is beweegbaar — open bij eb/vloed, dicht bij storm", "Helemaal dicht", "Onder water gebouwd", "Heeft 100 deuren"],
        answer: 0,
        wrongHints: [null, "Niet helemaal dicht — dan zou het milieu sterven.", "Niet onder water.", "Geen 100 deuren."],
        uitlegPad: {
          stappen: [
            { titel: "Beweegbaar", tekst: "Eerst plan was vaste dam, maar dat zou de natuur in de Oosterschelde dood maken (geen zoute getijdenwater). Daarom: beweegbaar." },
            { titel: "Werkt zo", tekst: "Normaal open: water gaat door bij eb en vloed. Sluit alleen wanneer storm + hoog water dreigt." },
          ],
          woorden: [{ woord: "beweegbare kering", uitleg: "Sluit alleen bij gevaar." }],
          theorie: "Oosterscheldekering is een compromis tussen veiligheid en natuur.",
          voorbeelden: [{ type: "stap", tekst: "62 pijlers, 4 km lang. Sluit ~1× per jaar." }],
          basiskennis: [{ onderwerp: "Compromis", uitleg: "Veiligheid + natuur beide gewogen." }],
          niveaus: {
            basis: "Beweegbaar. A.",
            simpeler: "Bijzonder: hij is niet permanent dicht (zoals andere dammen) maar beweegbaar. Sluit alleen bij storm — om de natuur in Oosterschelde te sparen. = A.",
            nogSimpeler: "Beweegbaar = A.",
          },
        },
      },
      {
        q: "Hoe lang duurden de **Deltawerken** ongeveer?",
        options: ["~40 jaar (1958-1997)", "~5 jaar", "~100 jaar", "~10 jaar"],
        answer: 0,
        wrongHints: [null, "Veel te kort.", "Te lang.", "Te kort."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — Nederland en water mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: NAP, dijken, polders, watersnood, Deltawerken.\n\nVeel succes!",
    checks: [
      {
        q: "Wat betekent **NAP**?",
        options: ["Normaal Amsterdams Peil", "Nederlandse Algemene Polder", "Nationaal Aardrijkskunde Plan", "Nieuwe Afsluit-Polder"],
        answer: 0,
        wrongHints: [null, "Bestaande afkorting, maar niet voor NAP.", "Bestaat niet als officiële Nederlandse afkorting.", "Bestaat niet als officiële Nederlandse afkorting."],
      },
      {
        q: "Welke jongste provincie ligt **helemaal op drooggemaakte polder**?",
        options: ["Flevoland", "Friesland", "Limburg", "Drenthe"],
        answer: 0,
        wrongHints: [null, "Friesland is een eeuwenoude provincie, geen polder.", "Limburg ligt op vaste grond in het zuiden.", "Drenthe is eeuwenoud, geen polder."],
      },
      {
        q: "In welk jaar was de **Watersnoodramp**?",
        options: ["1953", "1832", "1953 én 1932", "1900"],
        answer: 0,
        wrongHints: [null, "Te lang geleden — een andere storm in dat jaar.", "Maar één van de twee jaren klopt — kijk goed.", "Geen ramp in dat jaar."],
      },
      {
        q: "Welke kering is **bij Rotterdam**?",
        options: ["Maeslantkering", "Oosterscheldekering", "Brouwersdam", "Veerse Gatdam"],
        answer: 0,
        wrongHints: [null, "Zeeland.", "Brouwershavense Gat.", "Veerse Gat."],
      },
      {
        q: "Wat is een **windmolen** vroeger gebruikt voor?",
        options: ["Water uit polder pompen + graan malen", "Elektriciteit maken", "Schip aandrijven", "Niet gebruikt"],
        answer: 0,
        wrongHints: [null, "Moderne windturbines wel, niet vroeger.", "Schepen hebben zeilen, geen molens.", "Wel gebruikt."],
      },
      {
        q: "Welke is een **gemaal**?",
        options: ["Pomp die water uit polder weghaalt", "Een korenmolen", "Een stormvloedkering", "Een brug"],
        answer: 0,
        wrongHints: [null, "Geen korenmolen.", "Geen kering — een pomp.", "Geen brug."],
      },
      { q: "**Deltawerken** beschermen NL tegen?", options: ["Overstroming (stormvloed)","Aardbeving","Tornado","Lawine"], answer: 0, wrongHints: [null, "Aardbevingen komen nauwelijks in NL voor — niks om tegen te beschermen.", "Tornado's komen zelden voor en zijn niet de reden voor de Deltawerken.", "Lawines zijn alleen in bergen, niet in NL."] },
      { q: "Een **polder** is?", options: ["Drooggelegd land beneden zeeniveau","Een rivier","Een stad","Een dijk"], answer: 0, wrongHints: [null, "Niet.", "Niet — landgebied.", "Beschermt polder."] },
      { q: "Wat is de **Afsluitdijk**?", options: ["Dijk Friesland↔Noord-Holland (sloot Zuiderzee af)","Een molen","Een gemaal","Een spoorbrug"], answer: 0, wrongHints: [null, "Niet.", "Niet primair.", "Niet."] },
      { q: "Welk **percentage** van NL ligt onder zee-niveau?", options: ["Ongeveer 25%","60%","5%","90%"], answer: 0, wrongHints: [null, "Te veel.", "Te weinig.", "Veel te veel."] },
      { q: "Wat is een **terp**?", options: ["Kunstmatige verhoging — woonplek bij hoog water","Een molen","Een dijk","Een sloot"], answer: 0, wrongHints: [null, "Niet.", "Niet — bescherming buiten.", "Niet."] },
      { q: "Welk **werelderfgoed** in NL beschermt water-cultuur?", options: ["Kinderdijk-molens","Pyramide","Acropolis","Niet bestaand"], answer: 0, wrongHints: [null, "Egypte.", "Griekenland.", "Wel."] },
      { q: "Wie was **Jan Leeghwater**?", options: ["Beroemde polder-maker (~1600)","Een koning","Een dijkbreker","Een sportman"], answer: 0, wrongHints: [null, "Niet.", "Tegenovergesteld.", "Niet."] },
      { q: "Wat is **windmolen** versus **windturbine**?", options: ["Molen = oud (graan/pompen); turbine = elektriciteit","Hetzelfde","Andere taal","Niet relevant"], answer: 0, wrongHints: [null, "Wel verschil.", "Niet.", "Wel."] },
      { q: "**Beemster** ligt in welke provincie?", options: ["Noord-Holland","Zeeland","Friesland","Limburg"], answer: 0, wrongHints: [null, "Andere drooglegging.", "Niet droog gemaakt.", "Niet."] },
      { q: "Wat doet een **stuw** in een rivier?", options: ["Waterhoogte regelen","Water weghalen","Niet gebruikt","Verkeer doorlaten"], answer: 0, wrongHints: [null, "Dat is gemaal.", "Wel.", "Niet primair."] },
      { q: "Welke beroemde **molen-stad** ligt in NL?", options: ["Zaanse Schans (Zaandam)","Eiffel","Pisa","Geen"], answer: 0, wrongHints: [null, "Frankrijk.", "Italië.", "Wel."] },
      { q: "Wat doet de **Maeslantkering** in Hoek van Holland?", options: ["Sluit bij stormvloed automatisch","Spoorbrug","Gemaal","Niets"], answer: 0, wrongHints: [null, "Niet.", "Andere functie.", "Wel iets."] },
      { q: "Beroemd **deltagebied** in NL?", options: ["Zeeland (Schelde, Maas, Rijn)","Friesland","Drenthe","Limburg"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Geen delta."] },
      { q: "Wat zou er gebeuren ZONDER dijken in NL?", options: ["Groot deel ondergelopen","Niets","Droogte","Hetzelfde"], answer: 0, wrongHints: [null, "Wel.", "Tegengestelde.", "Wel verschil."] },
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
    "Nederland en water voor groep 6-8 — onder zeeniveau, dijken+duinen, polders, Watersnoodramp 1953, Deltawerken. Cito-onderdeel wereldoriëntatie. ~15 min.",
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
