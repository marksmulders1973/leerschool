// Leerpad: Topografie Nederland — provincies, hoofdsteden, grote steden, water
// 10 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: groep 6-8 basisschool. Cito-relevant.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  prov: "#5d9cec",
  water: "#1976d2",
  highlight: "#ffd54f",
  city: "#ec407a",
};

const stepEmojis = ["🇳🇱","🗺️","🏛️","🏙️","💧","⛰️","🌍","📍","🎒","🏆"];

const chapters = [
  { letter: "A", title: "Inleiding + provincies", emoji: "🗺️", from: 0, to: 1 },
  { letter: "B", title: "Hoofdsteden", emoji: "🏛️", from: 2, to: 3 },
  { letter: "C", title: "Water + landschap", emoji: "💧", from: 4, to: 5 },
  { letter: "D", title: "Steden + buurlanden", emoji: "🌍", from: 6, to: 7 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 8, to: 9 },
];

// SVG-kaartje: 12 provincies in vereenvoudigde vorm + hoofdsteden als puntjes
function nederlandKaartSvg(highlight = null) {
  const isHL = (p) => highlight === p;
  const opa = (p) => highlight && !isHL(p) ? 0.45 : 1;
  return `<svg viewBox="0 0 280 320">
<rect x="0" y="0" width="280" height="320" fill="${COLORS.paper}"/>
<text x="140" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">12 provincies van Nederland</text>

<!-- Wadeneilanden (kleine streep boven Friesland) -->
<rect x="80" y="34" width="60" height="4" fill="${COLORS.prov}" opacity="0.4"/>

<!-- Friesland -->
<polygon points="100,40 145,40 150,75 110,82 90,68" fill="${COLORS.prov}" opacity="${opa('Friesland')}" stroke="#fff" stroke-width="0.5"/>
<text x="120" y="60" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="${isHL('Friesland')?'bold':'normal'}">Friesland</text>

<!-- Groningen -->
<polygon points="148,40 195,40 200,70 152,75" fill="${COLORS.prov}" opacity="${opa('Groningen')}" stroke="#fff" stroke-width="0.5"/>
<text x="170" y="58" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="${isHL('Groningen')?'bold':'normal'}">Groningen</text>

<!-- Drenthe -->
<polygon points="155,78 200,73 195,115 150,110" fill="${COLORS.prov}" opacity="${opa('Drenthe')}" stroke="#fff" stroke-width="0.5"/>
<text x="175" y="95" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="${isHL('Drenthe')?'bold':'normal'}">Drenthe</text>

<!-- Overijssel -->
<polygon points="120,90 152,85 195,118 145,135 115,120" fill="${COLORS.prov}" opacity="${opa('Overijssel')}" stroke="#fff" stroke-width="0.5"/>
<text x="150" y="113" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial" font-weight="${isHL('Overijssel')?'bold':'normal'}">Overijssel</text>

<!-- Flevoland -->
<polygon points="105,90 120,85 122,125 95,128" fill="${COLORS.prov}" opacity="${opa('Flevoland')}" stroke="#fff" stroke-width="0.5"/>
<text x="110" y="110" text-anchor="middle" fill="#fff" font-size="7" font-family="Arial" font-weight="${isHL('Flevoland')?'bold':'normal'}">Flevoland</text>

<!-- Gelderland -->
<polygon points="118,128 195,125 195,180 130,180 115,160" fill="${COLORS.prov}" opacity="${opa('Gelderland')}" stroke="#fff" stroke-width="0.5"/>
<text x="155" y="158" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="${isHL('Gelderland')?'bold':'normal'}">Gelderland</text>

<!-- Utrecht -->
<polygon points="92,135 115,128 120,170 90,170" fill="${COLORS.prov}" opacity="${opa('Utrecht')}" stroke="#fff" stroke-width="0.5"/>
<text x="105" y="155" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial" font-weight="${isHL('Utrecht')?'bold':'normal'}">Utrecht</text>

<!-- Noord-Holland -->
<polygon points="60,55 100,55 105,140 65,135 50,90" fill="${COLORS.prov}" opacity="${opa('Noord-Holland')}" stroke="#fff" stroke-width="0.5"/>
<text x="80" y="100" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial" font-weight="${isHL('Noord-Holland')?'bold':'normal'}">N-Holland</text>

<!-- Zuid-Holland -->
<polygon points="55,140 90,140 90,180 50,185" fill="${COLORS.prov}" opacity="${opa('Zuid-Holland')}" stroke="#fff" stroke-width="0.5"/>
<text x="73" y="165" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial" font-weight="${isHL('Zuid-Holland')?'bold':'normal'}">Z-Holland</text>

<!-- Zeeland -->
<polygon points="40,195 90,190 90,225 35,225" fill="${COLORS.prov}" opacity="${opa('Zeeland')}" stroke="#fff" stroke-width="0.5"/>
<text x="65" y="212" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="${isHL('Zeeland')?'bold':'normal'}">Zeeland</text>

<!-- Noord-Brabant -->
<polygon points="92,185 195,185 200,235 100,235" fill="${COLORS.prov}" opacity="${opa('Noord-Brabant')}" stroke="#fff" stroke-width="0.5"/>
<text x="145" y="215" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="${isHL('Noord-Brabant')?'bold':'normal'}">N-Brabant</text>

<!-- Limburg -->
<polygon points="160,185 200,180 215,260 170,265 165,230" fill="${COLORS.prov}" opacity="${opa('Limburg')}" stroke="#fff" stroke-width="0.5"/>
<text x="185" y="225" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="${isHL('Limburg')?'bold':'normal'}">Limburg</text>

<!-- Water (Noordzee + IJsselmeer) -->
<text x="30" y="100" fill="${COLORS.water}" font-size="9" font-family="Arial" font-style="italic">Noordzee</text>
<text x="115" y="78" fill="${COLORS.water}" font-size="7" font-family="Arial" font-style="italic">IJsselmeer</text>

<text x="140" y="305" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Schematisch — niet exact op schaal</text>
</svg>`;
}

function steden5Svg() {
  return `<svg viewBox="0 0 280 320">
<rect x="0" y="0" width="280" height="320" fill="${COLORS.paper}"/>
<text x="140" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">5 grootste steden van Nederland</text>

<!-- Vereenvoudigd kaartje van NL -->
<polygon points="60,55 195,55 215,260 35,225" fill="rgba(93,156,236,0.20)" stroke="${COLORS.muted}" stroke-width="1"/>

<!-- Amsterdam (1) -->
<circle cx="80" cy="115" r="6" fill="${COLORS.city}"/>
<text x="92" y="115" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">1. Amsterdam</text>
<text x="92" y="128" fill="${COLORS.muted}" font-size="9" font-family="Arial">~880.000 inwoners</text>

<!-- Rotterdam (2) -->
<circle cx="73" cy="160" r="6" fill="${COLORS.city}"/>
<text x="92" y="158" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">2. Rotterdam</text>
<text x="92" y="171" fill="${COLORS.muted}" font-size="9" font-family="Arial">~660.000 — grote haven</text>

<!-- Den Haag (3) -->
<circle cx="63" cy="148" r="5" fill="${COLORS.city}"/>
<text x="92" y="200" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">3. Den Haag</text>
<text x="92" y="213" fill="${COLORS.muted}" font-size="9" font-family="Arial">~560.000 — regering</text>

<!-- Utrecht (4) -->
<circle cx="105" cy="148" r="5" fill="${COLORS.city}"/>
<text x="92" y="245" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">4. Utrecht</text>
<text x="92" y="258" fill="${COLORS.muted}" font-size="9" font-family="Arial">~365.000 — centraal</text>

<!-- Eindhoven (5) -->
<circle cx="155" cy="220" r="5" fill="${COLORS.city}"/>
<text x="92" y="290" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">5. Eindhoven</text>
<text x="92" y="303" fill="${COLORS.muted}" font-size="9" font-family="Arial">~240.000 — Brabant</text>
</svg>`;
}

function rivierenSvg() {
  return `<svg viewBox="0 0 280 320">
<rect x="0" y="0" width="280" height="320" fill="${COLORS.paper}"/>
<text x="140" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Belangrijke wateren in Nederland</text>

<!-- NL omtrek -->
<polygon points="60,55 195,55 215,260 35,225" fill="rgba(93,156,236,0.10)" stroke="${COLORS.muted}" stroke-width="1"/>

<!-- Noordzee -->
<rect x="0" y="50" width="40" height="180" fill="${COLORS.water}" opacity="0.3"/>
<text x="20" y="140" text-anchor="middle" fill="${COLORS.water}" font-size="10" font-family="Arial" font-weight="bold">Noord-</text>
<text x="20" y="152" text-anchor="middle" fill="${COLORS.water}" font-size="10" font-family="Arial" font-weight="bold">zee</text>

<!-- IJsselmeer -->
<polygon points="105,75 130,80 130,128 105,130" fill="${COLORS.water}" opacity="0.55"/>
<text x="118" y="105" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">IJssel-</text>
<text x="118" y="115" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">meer</text>

<!-- Waddenzee -->
<polygon points="80,40 195,40 195,50 80,52" fill="${COLORS.water}" opacity="0.55"/>
<text x="135" y="48" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">Waddenzee</text>

<!-- Rijn (komt uit Duitsland, splitst) -->
<path d="M 215 180 Q 180 175 140 165 Q 100 160 70 165" stroke="${COLORS.water}" stroke-width="3" fill="none"/>
<text x="160" y="155" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold">Rijn</text>

<!-- Maas -->
<path d="M 195 235 Q 170 215 140 195 Q 100 180 65 175" stroke="${COLORS.water}" stroke-width="2.5" fill="none"/>
<text x="180" y="222" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold">Maas</text>

<!-- IJssel -->
<path d="M 130 130 Q 140 145 142 165" stroke="${COLORS.water}" stroke-width="2" fill="none"/>
<text x="145" y="142" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold">IJssel</text>

<!-- Schelde -->
<path d="M 38 215 Q 60 220 90 220" stroke="${COLORS.water}" stroke-width="2" fill="none"/>
<text x="60" y="232" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold">Schelde</text>

<!-- Onderaan: legenda -->
<text x="140" y="285" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">3 belangrijkste rivieren: Rijn · Maas · Waal</text>
<text x="140" y="300" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">(Waal is een aftakking van de Rijn)</text>
</svg>`;
}

const steps = [
  {
    title: "Wat is Nederland?",
    explanation: "**Nederland** is ons land — een klein landje in West-Europa aan de Noordzee. Officieel: **Koninkrijk der Nederlanden** (Nederland + Aruba + Curaçao + Sint-Maarten + 3 BES-eilanden in de Cariben).\n\n**Belangrijke feiten**:\n• **Hoofdstad**: Amsterdam (waar de koning werkt: Den Haag)\n• **Inwoners**: ~17,9 miljoen (2026)\n• **Oppervlakte**: ~41.500 km²\n• **Buurlanden**: Duitsland (oost) + België (zuid) + Noordzee (west + noord)\n• **Hoogste punt**: Vaalserberg in Limburg (323 m)\n• **Laagste punt**: ~7 m onder zeeniveau (Zuidplaspolder bij Rotterdam)\n• **Munt**: euro (€)\n• **Taal**: Nederlands (in Friesland ook Fries)\n• **Koning**: Willem-Alexander (sinds 2013)\n\n**Speciaal aan Nederland**:\n• **Heel plat** — bijna alles ligt onder of vlak boven zeeniveau\n• **Veel water**: rivieren, kanalen, meren, polders\n• **Dichtbevolkt** — een van de drukste landen ter wereld\n• **26% van het land ligt onder zeeniveau** — dijken en gemalen houden het droog\n• **Bekend om**: tulpen, klompen, molens, kaas, fietsen, voetbal\n\nIn dit pad leer je de **12 provincies**, hun **hoofdsteden**, de grote **rivieren** en **steden** van Nederland.",
    svg: nederlandKaartSvg(),
    checks: [
      {
        q: "Wat is de hoofdstad van Nederland?",
        options: ["Amsterdam","Den Haag","Rotterdam","Utrecht"],
        answer: 0,
        wrongHints: [null,"Den Haag is wel de regerings-stad maar geen hoofdstad.","Rotterdam is de tweede stad, geen hoofdstad.","Utrecht is centraal maar geen hoofdstad."],
      },
      {
        q: "Hoeveel provincies heeft Nederland?",
        options: ["12","11","13","16"],
        answer: 0,
        wrongHints: [null,"Net iets meer.","Net iets minder.","Veel te veel — denk aan onze landje."],
      },
    ],
  },
  {
    title: "De 12 provincies",
    explanation: "Nederland heeft **12 provincies**. Onthoud ze van **noord naar zuid**:\n\n**Noord** *(boven)*\n1. **Groningen** — uiterste noordoosten, gas-provincie\n2. **Friesland** — Friese taal, meren, schaatsen (Elfstedentocht)\n3. **Drenthe** — hunebedden, bossen\n\n**Midden**\n4. **Overijssel** — IJsselmeer-rand\n5. **Flevoland** — jongste provincie (1986), volledig op nieuwe land\n6. **Gelderland** — grootste provincie qua oppervlak\n7. **Utrecht** — kleinste (op Flevoland na)\n\n**West** *(aan zee)*\n8. **Noord-Holland** — Amsterdam, Texel\n9. **Zuid-Holland** — Rotterdam, Den Haag\n10. **Zeeland** — eilanden + Deltawerken\n\n**Zuid**\n11. **Noord-Brabant** — Eindhoven, carnaval\n12. **Limburg** — heuvels, alleen écht hoge stuk van NL\n\n**Geheugentrucje** ('Holland Heeft Beste Friese...'):\nEen makkelijke manier is steden in elke provincie kennen — die plaats je dan in je hoofd.\n\n**Bijzonderheden**:\n• **Flevoland** is **het nieuwst** — op land dat in de jaren '50-'60 uit de zee is gewonnen. Vroeger was dit allemaal **Zuiderzee**.\n• **Friesland** heeft een **eigen taal** (Fries) — officieel erkend als tweede landstaal.\n• **Limburg** heeft als enige echte **heuvels** — de hoogste 'berg' van NL ligt hier (Vaalserberg, 323 m).",
    svg: nederlandKaartSvg(),
    checks: [
      {
        q: "Welke provincie is **het nieuwst** (gewonnen uit de zee)?",
        options: ["Flevoland","Zeeland","Friesland","Drenthe"],
        answer: 0,
        wrongHints: [null,"Zeeland bestaat al eeuwen, dat zijn juist eilanden.","Friesland is heel oud.","Drenthe is heel oud (hunebedden!)."],
      },
      {
        q: "In welke provincie ligt de **Vaalserberg** (hoogste punt van NL)?",
        options: ["Limburg","Drenthe","Gelderland","Friesland"],
        answer: 0,
        wrongHints: [null,"Drenthe is plat.","Gelderland heeft de Veluwe maar daar is de hoogste maar ~110m.","Friesland is ook plat."],
      },
      {
        q: "Welke provincie heeft een eigen erkende taal?",
        options: ["Friesland","Limburg","Zeeland","Utrecht"],
        answer: 0,
        wrongHints: [null,"Limburg heeft een dialect maar geen officiële landstaal.","Zeeland heeft ook een dialect, niet officieel.","Utrecht heeft alleen Nederlands."],
      },
    ],
  },
  {
    title: "Hoofdsteden — deel 1 (Noord + Midden)",
    explanation: "Elke provincie heeft een **hoofdstad** waar het provinciale bestuur zit. Hier de eerste 7:\n\n| Provincie | Hoofdstad |\n|---|---|\n| Groningen | **Groningen** *(stad heeft zelfde naam)* |\n| Friesland | **Leeuwarden** |\n| Drenthe | **Assen** |\n| Overijssel | **Zwolle** |\n| Flevoland | **Lelystad** |\n| Gelderland | **Arnhem** |\n| Utrecht | **Utrecht** *(stad = provincie)* |\n\n**Trucjes om te onthouden**:\n• **Provincie + hoofdstad zelfde naam**: Groningen, Utrecht. Makkelijk.\n• **Lelystad in Flevoland**: 'Lely' verwijst naar **Cornelis Lely** — de man die het plan maakte voor de Zuiderzeewerken (waardoor Flevoland kon ontstaan).\n• **Arnhem in Gelderland**: bekend van de **Slag om Arnhem** (WO2, 1944) — 'A Bridge Too Far'.\n• **Leeuwarden**: betekent 'leeuw-tuin' en heeft zelfs een leeuw in z'n wapen.\n\n**Zwolle** vs **Assen**: heel makkelijk te verwarren. Onthou:\n• **A**ssen → in **A**siaa... nee, in **A** van **A**ssen → **A** komt eerder in alfabet → noordelijker (Drenthe ligt boven Overijssel).\n• Of: **Z**wolle → **Z** = laatste letter, dus zuider van Drenthe.\n\nNiet helemaal kloppend trucje, maar werkt voor onthouden.",
    svg: nederlandKaartSvg(),
    checks: [
      {
        q: "Wat is de hoofdstad van **Friesland**?",
        options: ["Leeuwarden","Groningen","Assen","Zwolle"],
        answer: 0,
        wrongHints: [null,"Groningen is in dezelfde noordelijke regio maar andere provincie.","Assen is hoofdstad van Drenthe.","Zwolle is in Overijssel."],
      },
      {
        q: "**Lelystad** is de hoofdstad van welke provincie?",
        options: ["Flevoland","Gelderland","Noord-Holland","Drenthe"],
        answer: 0,
        wrongHints: [null,"Lelystad is op nieuw land — Flevoland.","Gelderland heeft Arnhem als hoofdstad.","Noord-Holland heeft Haarlem.","Drenthe heeft Assen."],
      },
      {
        q: "Wat is de hoofdstad van **Gelderland**?",
        options: ["Arnhem","Nijmegen","Utrecht","Apeldoorn"],
        answer: 0,
        wrongHints: [null,"Nijmegen is groter qua bevolking maar Arnhem is de hoofdstad.","Utrecht is in andere provincie.","Apeldoorn is grote stad in Gelderland maar geen hoofdstad."],
      },
    ],
  },
  {
    title: "Hoofdsteden — deel 2 (West + Zuid)",
    explanation: "Hier de andere 5 hoofdsteden:\n\n| Provincie | Hoofdstad |\n|---|---|\n| Noord-Holland | **Haarlem** *(let op: niet Amsterdam!)* |\n| Zuid-Holland | **Den Haag** |\n| Zeeland | **Middelburg** |\n| Noord-Brabant | **'s-Hertogenbosch** *(of: Den Bosch)* |\n| Limburg | **Maastricht** |\n\n**Belangrijke valkuil**: **Amsterdam** is wel de **hoofdstad van Nederland** maar **NIET de hoofdstad van Noord-Holland**! De provincie Noord-Holland heeft **Haarlem** als hoofdstad. Vraagt vaak op het examen: \"Welke stad is hoofdstad van Noord-Holland?\" → Haarlem, niet Amsterdam.\n\n**Hetzelfde bij Zuid-Holland**: Rotterdam is groot maar niet de hoofdstad. **Den Haag** is dat.\n\n**'s-Hertogenbosch / Den Bosch**\n• Officiële naam: 's-Hertogenbosch (= 'het bos van de hertog').\n• Dagelijks gebruik: Den Bosch.\n• Beide goed.\n\n**Maastricht** — ligt **helemaal in het zuiden**, ingeklemd tussen België en Duitsland. Bekend van het **Verdrag van Maastricht** (1992) waarmee de Europese Unie werd opgericht.\n\n**Volledige lijst alle 12** *(om te oefenen)*:\n1. Groningen — Groningen\n2. Friesland — Leeuwarden\n3. Drenthe — Assen\n4. Overijssel — Zwolle\n5. Flevoland — Lelystad\n6. Gelderland — Arnhem\n7. Utrecht — Utrecht\n8. Noord-Holland — Haarlem\n9. Zuid-Holland — Den Haag\n10. Zeeland — Middelburg\n11. Noord-Brabant — 's-Hertogenbosch\n12. Limburg — Maastricht",
    svg: nederlandKaartSvg(),
    checks: [
      {
        q: "Wat is de hoofdstad van **Noord-Holland**?",
        options: ["Haarlem","Amsterdam","Alkmaar","Hoorn"],
        answer: 0,
        wrongHints: [null,"Amsterdam is hoofdstad van NEDERLAND, niet van de provincie.","Alkmaar is een kaasstad maar geen hoofdstad van de provincie.","Hoorn is historisch belangrijk maar geen hoofdstad."],
      },
      {
        q: "Wat is de hoofdstad van **Zeeland**?",
        options: ["Middelburg","Vlissingen","Goes","Terneuzen"],
        answer: 0,
        wrongHints: [null,"Vlissingen is een grote havenstad in Zeeland maar geen hoofdstad.","Goes is in Zeeland maar geen hoofdstad.","Terneuzen ook in Zeeland maar niet de hoofdstad."],
      },
      {
        q: "Wat is de hoofdstad van **Limburg**?",
        options: ["Maastricht","Heerlen","Roermond","Sittard"],
        answer: 0,
        wrongHints: [null,"Heerlen is een belangrijke stad in Limburg maar geen hoofdstad.","Roermond is in Limburg maar geen hoofdstad.","Sittard is in Limburg maar geen hoofdstad."],
      },
    ],
  },
  {
    title: "Belangrijke wateren",
    explanation: "Nederland is een **waterland**. Hier de belangrijkste wateren:\n\n**Zeeën**\n• **Noordzee** — de grote zee aan de westkant.\n• **Waddenzee** — tussen het vasteland en de Wadden­eilanden (Texel, Vlieland, Terschelling, Ameland, Schiermonnikoog).\n• **IJsselmeer** — vroeger de **Zuiderzee**, in 1932 afgesloten met de **Afsluitdijk** → werd een binnenmeer.\n• **Markermeer** — afgesplitst stuk van het IJsselmeer.\n\n**Drie grote rivieren**\n1. **Rijn** — komt uit **Zwitserland** via Duitsland → splitst in NL in:\n   • **Waal** (zuidelijke tak, grootste)\n   • **Lek** (noordelijke tak)\n   • **IJssel** (gaat naar IJsselmeer)\n2. **Maas** — komt uit **Frankrijk** → loopt door België → komt bij Rotterdam in zee.\n3. **Schelde** — komt uit **Frankrijk** → loopt door België → komt bij Antwerpen in zee.\n\nDeze drie heten samen de **'grote rivieren'** — vormen de natuurlijke grens tussen het noorden en zuiden van NL (boven de rivieren = noord, onder = zuid). Een belangrijk cultureel-historisch onderscheid.\n\n**Deltawerken** *(Zeeland)*\nEen serie dammen en stormvloedkeringen, gebouwd na de **Watersnoodramp van 1953** (1.836 doden, vooral in Zeeland). Doel: geen overstromingen meer. Ze sluiten de zee-armen af en beschermen ons land. **Oosterscheldekering** is de bekendste — wordt alleen bij stormvloed gesloten.\n\n**Polder** = laaggelegen stuk land dat ooit zee/meer was, drooggemalen door **molens** (vroeger) of **gemalen** (nu).",
    svg: rivierenSvg(),
    checks: [
      {
        q: "Welke 3 grote rivieren stromen door Nederland?",
        options: ["Rijn, Maas, Schelde","Donau, Rijn, Maas","Rijn, Theems, Maas","Schelde, Donau, Maas"],
        answer: 0,
        wrongHints: [null,"De Donau loopt door Oost-Europa, niet door NL.","De Theems is in Engeland.","De Donau loopt niet door NL."],
      },
      {
        q: "Wat heette het IJsselmeer **vroeger**?",
        options: ["Zuiderzee","Markermeer","Waddenzee","Noordzee"],
        answer: 0,
        wrongHints: [null,"Markermeer is een klein deel ervan.","Waddenzee is een ander stuk water (boven de afsluitdijk).","Noordzee is de zee aan de westkant van NL."],
      },
      {
        q: "Wat is het doel van de **Deltawerken**?",
        options: ["Beschermen tegen overstromingen","Drinkwater zuiveren","Stroom opwekken","Schepen sneller maken"],
        answer: 0,
        wrongHints: [null,"Drinkwater wordt elders gezuiverd.","Sommige werken kunnen wel stroom opwekken maar dat is niet het hoofddoel.","Niet de bedoeling van Deltawerken."],
      },
    ],
  },
  {
    title: "Landschap + Wadden­eilanden",
    explanation: "**De vorm van het land**\n\nNederland is bijna helemaal **plat**. Maar er zijn wel verschillen:\n\n**Hoge zandgronden** *(midden-oost-zuid)*\n• Veluwe (Gelderland) — bossen, heide, hoogste punt ~110 m.\n• Drenthe — bossen, hunebedden.\n• Brabants Heuvelland — kleine heuvels.\n\n**Lage delen** *(west + noord)*\n• Polders en weilanden (vooral Zuid-Holland, Flevoland).\n• Hier is **26%** van het land **onder zeeniveau**.\n• Beschermd door dijken + duinen.\n\n**De heuvels van Limburg** *(zuid)*\n• Het **enige echte heuvelland** van NL.\n• Vaalserberg = **323 m** = hoogste punt van NL.\n• Geliefd voor wandelen en wielrennen.\n\n**5 Wadden­eilanden** *(noord, in Waddenzee)*\nVan west naar oost:\n1. **Texel** — bij Noord-Holland — grootste\n2. **Vlieland** — Friesland\n3. **Terschelling** — Friesland\n4. **Ameland** — Friesland\n5. **Schiermonnikoog** — Friesland — oostelijkste\n\nGeheugenezel: **'Toen Vroeg Truus Aan Schelden?'** (T-V-T-A-S = Texel, Vlieland, Terschelling, Ameland, Schiermonnikoog).\n\n**Waddenzee**: door eb en vloed komt grote delen droog te liggen → **wadlopen** mogelijk. UNESCO Werelderfgoed sinds 2009.\n\n**Tulpen + bollen**\n• Vooral in Noord- en Zuid-Holland.\n• Bekendste: **Keukenhof** in Lisse — 7 miljoen tulpen, 32 hectare.\n• Bloeitijd: maart-mei.\n• Nederland is **grootste tulpen-exporteur ter wereld**.",
    svg: nederlandKaartSvg(),
    checks: [
      {
        q: "Wat is het **westelijkste** Wadden­eiland?",
        options: ["Texel","Schiermonnikoog","Ameland","Terschelling"],
        answer: 0,
        wrongHints: [null,"Schiermonnikoog is juist het oostelijkste.","Ameland ligt in het midden.","Terschelling ligt na Vlieland, niet helemaal westelijk."],
      },
      {
        q: "Hoeveel procent van NL ligt **onder zeeniveau**?",
        options: ["~26%","~5%","~50%","~75%"],
        answer: 0,
        wrongHints: [null,"Te weinig — er ligt meer onder zeeniveau dan dat.","Te veel — niet de helft.","Veel te veel."],
      },
      {
        q: "Wat is het **hoogste punt** van Nederland?",
        options: ["Vaalserberg (323m, Limburg)","Mont Blanc","Zuiderzeeweg","Tafelberg"],
        answer: 0,
        wrongHints: [null,"Mont Blanc is in Frankrijk!","Geen berg.","Tafelberg is in Zuid-Afrika of Suriname."],
      },
    ],
  },
  {
    title: "5 grootste steden + buurlanden",
    explanation: "**De 5 grootste steden** van Nederland:\n\n1. **Amsterdam** *(Noord-Holland)* — ~880.000 inwoners. Hoofdstad. Grachten, Anne Frank Huis, Rijksmuseum.\n2. **Rotterdam** *(Zuid-Holland)* — ~660.000. Grootste **haven van Europa**. Modern wegens herbouw na bombardement WO2.\n3. **Den Haag** *(Zuid-Holland)* — ~560.000. **Regering en koning**, ambassades, Internationaal Gerechtshof.\n4. **Utrecht** *(Utrecht)* — ~365.000. Centraal gelegen, treinknooppunt, Domkerk.\n5. **Eindhoven** *(Noord-Brabant)* — ~240.000. Tech-stad (Philips, ASML).\n\nNa Eindhoven: Tilburg, Groningen, Almere, Breda, Nijmegen — allemaal rond 200.000.\n\n**Randstad**\nHet gebied tussen Amsterdam, Rotterdam, Den Haag en Utrecht heet de **Randstad**. Hier woont **40% van de Nederlanders** op slechts ~20% van het land. Het is **dichtstbevolkte gebied** van Europa.\n\n**Buurlanden**\nNederland grenst aan twee landen:\n\n**Duitsland** *(oost)*\n• Hoofdstad: Berlijn.\n• Bekendste grensovergangen: Enschede, Nijmegen, Maastricht.\n• Voertuigen: weg, trein.\n• Veel handel met NL.\n\n**België** *(zuid)*\n• Hoofdstad: Brussel (waar ook EU zit).\n• Drie talen: Nederlands (Vlaanderen), Frans (Wallonië), Duits (kleine groep).\n• Bekendste grensovergangen: Roosendaal, Eindhoven, Maastricht.\n• Aardige overeenkomsten: voetbal, taal (Nederlands).\n\n**Verschil NL en België**\n• België heeft een **koning + parlement met provincies** maar daarboven gewesten + gemeenschappen.\n• België is **Frans + Nederlandstalig** verdeeld — onze Vlaamse buren spreken Nederlands.",
    svg: steden5Svg(),
    checks: [
      {
        q: "Wat is de **2e grootste** stad van NL?",
        options: ["Rotterdam","Den Haag","Utrecht","Eindhoven"],
        answer: 0,
        wrongHints: [null,"Den Haag is 3e.","Utrecht is 4e.","Eindhoven is 5e."],
      },
      {
        q: "Wat heet het gebied **Amsterdam-Rotterdam-Den Haag-Utrecht**?",
        options: ["Randstad","Vechtstreek","Noord-Holland","Zuiderzee"],
        answer: 0,
        wrongHints: [null,"Vechtstreek is een ander gebiedje (rivier de Vecht).","Niet alleen Noord-Holland.","Zuiderzee bestaat niet meer (= IJsselmeer)."],
      },
      {
        q: "Wat zijn de **2 buurlanden** van Nederland?",
        options: ["Duitsland en België","Frankrijk en België","Duitsland en Engeland","België en Luxemburg"],
        answer: 0,
        wrongHints: [null,"Frankrijk grenst niet aan NL — wel aan België.","Engeland is over de Noordzee — geen buurland in geografische zin.","Luxemburg ligt onder België, niet aan NL."],
      },
    ],
  },
  {
    title: "Bekende plekken op de kaart",
    explanation: "Een paar plekken die je moet kunnen aanwijzen:\n\n**Kustplaatsen** *(aan de Noordzee)*\n• **Den Helder** — uiterste noordwesten van Noord-Holland — marinebasis.\n• **IJmuiden** — Noord-Holland — havens, sluizen.\n• **Scheveningen** — Den Haag — pier en strand.\n• **Hoek van Holland** — bij Rotterdam — veerboten naar Engeland.\n• **Vlissingen** — Zeeland — havens.\n\n**Pittoreske plaatsen** *(toeristen)*\n• **Volendam** — Noord-Holland — vissersdorp, klederdracht.\n• **Marken** — voormalig eiland in IJsselmeer.\n• **Giethoorn** — 'Venetië van Nederland' — alleen door grachten en bruggen, geen wegen tussen huizen.\n• **Kinderdijk** — Zuid-Holland — 19 oude windmolens, UNESCO Werelderfgoed.\n• **Maastricht** — Limburg — Romeinse geschiedenis.\n\n**Speciaal**\n• **Vaalserberg** — Limburg — hoogste punt + 'Drielandenpunt' (NL + België + Duitsland raken elkaar).\n• **Afsluitdijk** — 32 km lange dijk tussen Noord-Holland en Friesland — sloot in 1932 de Zuiderzee af.\n• **Oosterscheldekering** — Zeeland — beweegbare stormvloedkering.\n• **Schiphol** — luchthaven in Noord-Holland — 4e drukste van Europa.\n\n**Provincies in het kort, in tabel**:\n\n| Provincie | Hoofdstad | Bekend om |\n|---|---|---|\n| Groningen | Groningen | gas, universiteit |\n| Friesland | Leeuwarden | Fries, schaatsen |\n| Drenthe | Assen | hunebedden, TT |\n| Overijssel | Zwolle | IJsselrand |\n| Flevoland | Lelystad | nieuwste, polders |\n| Gelderland | Arnhem | Veluwe, WO2 |\n| Utrecht | Utrecht | centraal, treinknoop |\n| N-Holland | Haarlem | Amsterdam, tulpen |\n| Z-Holland | Den Haag | Rotterdam-haven, regering |\n| Zeeland | Middelburg | Deltawerken, mosselen |\n| N-Brabant | 's-Hertogenbosch | Eindhoven, carnaval |\n| Limburg | Maastricht | heuvels, EU-verdrag |",
    svg: nederlandKaartSvg(),
    checks: [
      {
        q: "Waar staan de 19 oude windmolens (UNESCO)?",
        options: ["Kinderdijk","Marken","Volendam","Schiphol"],
        answer: 0,
        wrongHints: [null,"Marken is een dorp, geen molenpark.","Volendam heeft enkele molens maar is bekend om visserij.","Schiphol is een vliegveld."],
      },
      {
        q: "Wat is **Schiphol**?",
        options: ["Luchthaven (vliegveld)","Treinstation","Haven","Stadion"],
        answer: 0,
        wrongHints: [null,"Schiphol heeft wel een station maar het is vooral een vliegveld.","Schiphol is in Noord-Holland landinwaarts, geen haven.","Geen stadion."],
      },
      {
        q: "Welk dorp wordt **'Venetië van Nederland'** genoemd?",
        options: ["Giethoorn","Volendam","Kinderdijk","Marken"],
        answer: 0,
        wrongHints: [null,"Volendam heeft wel water maar geen grachten zoals Venetië.","Kinderdijk is bekend om molens.","Marken is een vissersdorp."],
      },
    ],
  },
  {
    title: "Eindopdracht — combineer alles",
    explanation: "Tijd om alles te combineren!\n\n**Snelle check provincie + hoofdstad** (3-staps-trucje):\n• Provincie + hoofdstad zelfde naam? → Groningen, Utrecht.\n• Eindigt op -land? → Friesland (Leeuwarden), Gelderland (Arnhem), Flevoland (Lelystad), Zeeland (Middelburg).\n• Eindigt op -e? → Drenthe (Assen).\n• 'Brabant'? → Noord-Brabant ('s-Hertogenbosch).\n• 'Holland'? → Noord-Holland (Haarlem!), Zuid-Holland (Den Haag).\n• Overijssel → Zwolle.\n• Limburg → Maastricht.\n\n**Top tips voor het examen**:\n• Hoofdstad van NEDERLAND = Amsterdam.\n• Hoofdstad van Noord-Holland = HAARLEM (NIET Amsterdam!).\n• Regering zit in Den Haag.\n• Grootste haven = Rotterdam.\n• 12 provincies, 5 Wadden­eilanden, 3 grote rivieren (Rijn, Maas, Schelde).\n• 26% van NL onder zeeniveau.\n• Vaalserberg = hoogste (323 m, Limburg).\n• Buurlanden: Duitsland (oost) + België (zuid).\n• Randstad = Amsterdam-Rotterdam-Den Haag-Utrecht.\n\nVeel succes!",
    svg: nederlandKaartSvg(),
    checks: [
      {
        q: "Wat is de hoofdstad van **Overijssel**?",
        options: ["Zwolle","Arnhem","Assen","Haarlem"],
        answer: 0,
        wrongHints: [null,"Arnhem = Gelderland.","Assen = Drenthe.","Haarlem = Noord-Holland."],
      },
      {
        q: "Welke 3 grote rivieren stromen door NL?",
        options: ["Rijn, Maas, Schelde","Rijn, Donau, Main","Theems, Rijn, Maas","Maas, Schelde, Tigris"],
        answer: 0,
        wrongHints: [null,"Donau en Main lopen niet door NL.","Theems is in Engeland.","Tigris is in het Midden-Oosten."],
      },
      {
        q: "Tot welke provincie behoort **Texel**?",
        options: ["Noord-Holland","Friesland","Drenthe","Groningen"],
        answer: 0,
        wrongHints: [null,"Andere Wadden­eilanden (Vlieland t/m Schiermonnikoog) zijn Friesland, maar Texel is van Noord-Holland.","Texel valt niet onder Friesland.","Drenthe heeft geen eilanden.","Groningen heeft geen eilanden."],
      },
      {
        q: "Wat is bijzonder aan **Flevoland**?",
        options: ["Het is de jongste provincie (1986), gewonnen uit de zee","Het is de oudste provincie","Het ligt het hoogst","Hier liggen alle Wadden­eilanden"],
        answer: 0,
        wrongHints: [null,"Andersom — het is de jongste.","Flevoland is plat, niet hoog.","Wadden­eilanden zijn in Noord-Holland en Friesland."],
      },
      {
        q: "Hoeveel inwoners heeft Nederland ongeveer (2026)?",
        options: ["~17,9 miljoen","~5 miljoen","~50 miljoen","~150 miljoen"],
        answer: 0,
        wrongHints: [null,"Te weinig — meer dan dat.","Veel te veel — Nederland is een klein landje.","Veel te veel — denk aan een klein landje."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const topografieNederland = {
  id: "topografie-nederland",
  title: "Topografie Nederland — provincies, hoofdsteden, water",
  emoji: "🇳🇱",
  level: "groep6-8",
  subject: "aardrijkskunde",
  intro:
    "Alles over Nederland in één leerpad: 12 provincies + hoofdsteden, 3 grote rivieren, 5 grootste steden, Wadden­eilanden, Deltawerken en de buurlanden. Cito-relevant voor groep 7-8.",
  triggerKeywords: [
    "topografie nederland","provincies nederland","hoofdsteden",
    "groningen","friesland","drenthe","overijssel","flevoland","gelderland","utrecht",
    "noord-holland","zuid-holland","zeeland","noord-brabant","limburg",
    "amsterdam","rotterdam","den haag","haarlem","middelburg","maastricht","arnhem","assen","zwolle","leeuwarden","lelystad","den bosch","'s-hertogenbosch",
    "rijn","maas","schelde","waal","ijssel",
    "ijsselmeer","zuiderzee","waddenzee","noordzee","afsluitdijk",
    "deltawerken","oosterscheldekering","watersnoodramp",
    "wadden","texel","vlieland","terschelling","ameland","schiermonnikoog",
    "vaalserberg","randstad","schiphol","kinderdijk","giethoorn","volendam",
  ],
  chapters,
  steps,
};

export default topografieNederland;
