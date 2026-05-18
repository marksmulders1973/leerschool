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
        uitlegPad: {
          stappen: [{ titel: "Amsterdam = hoofdstad", tekst: "Amsterdam is de officiële hoofdstad van Nederland (vastgelegd in Grondwet). Maar de REGERING + koning werken in DEN HAAG. Twee verschillende rollen, twee verschillende steden. Examen-val: hoofdstad ≠ regeringsstad." }],
          woorden: [{ woord: "hoofdstad", uitleg: "Officiële belangrijkste stad van een land — symbolisch + ceremonieel." }, { woord: "regeringsstad", uitleg: "Stad waar regering zit. NL: Den Haag." }],
          theorie: "NL is bijzonder: hoofdstad + regeringsstad ZIJN VERSCHILLEND. Reden: historisch. Andere landen meestal samen (Berlijn = beide voor Duitsland, Parijs = beide voor Frankrijk).",
          voorbeelden: [{ type: "andere landen", tekst: "Duitsland: Berlijn (beide). VS: Washington (regering) en New York (cultureel hoofdstad-gevoel, maar officieel niet). NL: Amsterdam (hoofdstad) + Den Haag (regering)." }],
          basiskennis: [{ onderwerp: "Niet andere steden", uitleg: "Rotterdam = 2e grootste + grootste haven. Utrecht = centraal treinknooppunt. Geen van beide hoofdstad." }],
          niveaus: { basis: "Amsterdam. A.", simpeler: "Hoofdstad NL = Amsterdam (regering wel in Den Haag). = A.", nogSimpeler: "Amsterdam = A." },
        },
      },
      {
        q: "Hoeveel provincies heeft Nederland?",
        options: ["12","11","13","16"],
        answer: 0,
        wrongHints: [null,"Net iets meer.","Net iets minder.","Veel te veel — denk aan onze landje."],
        uitlegPad: {
          stappen: [{ titel: "12 provincies", tekst: "Nederland heeft 12 provincies. Vanaf noord: Groningen, Friesland, Drenthe → Overijssel, Flevoland → Gelderland, Utrecht → Noord-Holland, Zuid-Holland, Zeeland → Noord-Brabant, Limburg." }],
          woorden: [{ woord: "provincie", uitleg: "Bestuurlijke regio binnen een land. Elk met eigen hoofdstad + provinciaal bestuur (Provinciale Staten)." }],
          theorie: "12 provincies sinds 1986 — toen kwam Flevoland erbij als jongste provincie. Daarvoor 11 provincies. Examen-val: 11 was vroeger correct, NU 12.",
          voorbeelden: [{ type: "groei", tekst: "Vroeger had NL 11 provincies. Flevoland (1986) was 12e — op nieuw land gewonnen uit voormalige Zuiderzee." }],
          basiskennis: [{ onderwerp: "Niet andere getallen", uitleg: "11 = voor 1986. 13/16 = onzin (Duitsland 16 deelstaten, België 10 provincies)." }],
          niveaus: { basis: "12. A.", simpeler: "NL heeft 12 provincies (Flevoland sinds 1986 erbij). = A.", nogSimpeler: "12 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Flevoland — 1986", tekst: "Flevoland werd officieel provincie in 1986. Land was eerder Zuiderzee (= grote zee in NL). Door Afsluitdijk (1932) werd het IJsselmeer. Vervolgens werden polders drooggepompt: Noordoostpolder (1942), Oostelijk Flevoland (1957), Zuidelijk Flevoland (1968). Vroeger zee — nu gewoon weiland en steden." }],
          woorden: [{ woord: "polder", uitleg: "Land gewonnen uit zee of meer door dijken + drooglegging." }, { woord: "Zuiderzee", uitleg: "Vroegere zee waar nu Flevoland + IJsselmeer ligt. Sinds Afsluitdijk 1932 afgesloten." }, { woord: "Cornelis Lely", uitleg: "Ingenieur die plan voor Zuiderzeewerken bedacht. 'Lelystad' naar hem genoemd." }],
          theorie: "Flevoland is uniek: hele land bestaat uit polders. Steden zoals Almere, Lelystad zijn nieuw gebouwd op gewonnen land. Vroeger zee, nu 425.000 inwoners.",
          voorbeelden: [{ type: "tijdlijn", tekst: "1916 stormvloed → idee dijk. 1932 Afsluitdijk klaar. 1942 eerste polder. 1986 officieel provincie." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Zeeland = oude eilanden (al eeuwen). Friesland + Drenthe = oeroud (hunebedden 5000 jaar oud)." }],
          niveaus: { basis: "Flevoland (1986). A.", simpeler: "Flevoland = jongste, op nieuw land uit zee gewonnen, sinds 1986. = A.", nogSimpeler: "Flevoland = A." },
        },
      },
      {
        q: "In welke provincie ligt de **Vaalserberg** (hoogste punt van NL)?",
        options: ["Limburg","Drenthe","Gelderland","Friesland"],
        answer: 0,
        wrongHints: [null,"Drenthe is plat.","Gelderland heeft de Veluwe maar daar is de hoogste maar ~110m.","Friesland is ook plat."],
        uitlegPad: {
          stappen: [{ titel: "Vaalserberg — 323 m, Limburg", tekst: "Vaalserberg = 323 m hoog. Ligt in Limburg, uiterste zuid-oosten van NL. Tegelijk 'Drielandenpunt' — hier raken NL, België én Duitsland elkaar. Hoogste punt NL — niet groots als alpen-berg, maar voor plat NL wel iets bijzonder." }],
          woorden: [{ woord: "Vaalserberg", uitleg: "323 m hoog. Bij dorp Vaals, Limburg." }, { woord: "Drielandenpunt", uitleg: "Plek waar 3 landen elkaar raken. Toerisme-trekker." }],
          theorie: "Limburg is enige NL-provincie met echte heuvels. Reden: Limburg ligt op uitloper van Belgische Ardennen — daar zit gesteente, niet zand zoals rest van NL. Vandaar relief.",
          voorbeelden: [{ type: "vergelijk", tekst: "Vaalserberg 323 m. Mont Blanc (Frankrijk) 4810 m — 15× hoger. Maar voor NL met gemiddeld -1 m onder zeeniveau is 323 m wel iets." }],
          basiskennis: [{ onderwerp: "Niet andere provincies", uitleg: "Drenthe = plat, alleen kleine heuvels. Veluwe Gelderland = max 110 m (laag). Friesland = plat." }],
          niveaus: { basis: "Limburg. A.", simpeler: "Vaalserberg (323 m, hoogste NL) ligt in Limburg, zuid-oost. = A.", nogSimpeler: "Limburg = A." },
        },
      },
      {
        q: "Welke provincie heeft een eigen erkende taal?",
        options: ["Friesland","Limburg","Zeeland","Utrecht"],
        answer: 0,
        wrongHints: [null,"Limburg heeft een dialect maar geen officiële landstaal.","Zeeland heeft ook een dialect, niet officieel.","Utrecht heeft alleen Nederlands."],
        uitlegPad: {
          stappen: [{ titel: "Fries = officiële landstaal", tekst: "Friesland heeft naast Nederlands ook FRIES als officiële landstaal (Rijkswet 1956). Fries-sprekers (~470.000) kunnen zelfs in Friesland naar Friestalige scholen, kranten lezen in Fries. Andere NL-provincies hebben dialect (Limburgs, Zeeuws) — niet officieel erkend." }],
          woorden: [{ woord: "Fries", uitleg: "Aparte taal (geen NL-dialect). Lijkt op Oud-Engels. Naast Engels meest verwante taal aan Nederlands." }, { woord: "dialect vs taal", uitleg: "Dialect = variant van een taal. Taal = officieel apart. Fries = TAAL (politiek besluit, niet pure linguïstiek)." }],
          theorie: "NL kent 2 officiële talen: Nederlands (overal) + Fries (Friesland). Verschil met dialecten: officiële erkenning = recht op gebruik in rechtbank, school, bestuur.",
          voorbeelden: [{ type: "fries", tekst: "Nederlands 'goedemorgen' → Fries 'goeie moarn'. Lijkt op Engels 'good morning'. Echt aparte taal." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Limburgs + Zeeuws = wel erkend als 'streektaal' maar geen landstaal. Verschil: minder gebruik in officiële context." }],
          niveaus: { basis: "Friesland (Fries). A.", simpeler: "Friesland heeft Fries als 2e officiële taal van NL. = A.", nogSimpeler: "Friesland = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Leeuwarden = hoofdstad Friesland", tekst: "Leeuwarden ligt in Friesland (noordwest NL). Naam betekent letterlijk 'leeuw-tuin' (warden = tuin, leeuw = leeuw). Stad heeft zelfs leeuw in wapen. Bekend van Elfstedentocht (schaatsen rond 11 Friese steden), Mata Hari (spionne), Pier Pander (kunstenaar)." }],
          woorden: [{ woord: "Leeuwarden", uitleg: "Hoofdstad Friesland. ~125.000 inwoners. Werelderfgoed Oldehove (scheve toren)." }],
          theorie: "Trucje noord-NL: Groningen → Groningen (zelfde). Friesland → LEEUWarden. Drenthe → Assen. ABZ-trucje: Assen-Burgemeester-Zwolle. Alfabet: A(ssen) < L(eeuwarden) < Z(wolle).",
          voorbeelden: [{ type: "verwarring", tekst: "Niet verwarren met: Groningen (stad+provincie naam). Assen = Drenthe. Zwolle = Overijssel." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Groningen stad is in Groningen provincie. Assen in Drenthe. Zwolle in Overijssel." }],
          niveaus: { basis: "Leeuwarden. A.", simpeler: "Friesland → Leeuwarden (LEEUW-warden). = A.", nogSimpeler: "Leeuwarden = A." },
        },
      },
      {
        q: "**Lelystad** is de hoofdstad van welke provincie?",
        options: ["Flevoland","Gelderland","Noord-Holland","Drenthe"],
        answer: 0,
        wrongHints: [null,"Gelderland heeft Arnhem als hoofdstad.","Noord-Holland heeft Haarlem.","Drenthe heeft Assen."],
        uitlegPad: {
          stappen: [{ titel: "Lelystad = nieuwste hoofdstad", tekst: "Lelystad is hoofdstad van Flevoland (jongste provincie, 1986). Stad is GEBOUWD in 1967 op gewonnen land. Vernoemd naar Cornelis Lely — ingenieur die plan maakte voor Zuiderzeewerken (Afsluitdijk + polders). 'Lely's stad'." }],
          woorden: [{ woord: "Lelystad", uitleg: "Hoofdstad Flevoland. ~80.000 inwoners. Sinds 1967." }, { woord: "Cornelis Lely", uitleg: "Ingenieur. Plan Zuiderzeewerken 1891. Stad naar hem vernoemd." }],
          theorie: "Lelystad is uniek: ENIGE NL-hoofdstad gebouwd op kunstmatig land. Andere hoofdsteden hebben eeuwenoude wortels. Lelystad bestond niet voor 1967.",
          voorbeelden: [{ type: "andere op nieuw land", tekst: "Almere (Flevoland) is groter dan Lelystad — maar Lelystad blijft hoofdstad. Almere gebouwd 1976." }],
          basiskennis: [{ onderwerp: "Niet andere provincies", uitleg: "Gelderland → Arnhem. Noord-Holland → Haarlem. Drenthe → Assen. Geen van deze heeft Lelystad." }],
          niveaus: { basis: "Flevoland. A.", simpeler: "Lelystad = Flevoland, jongste hoofdstad NL, vernoemd naar Lely. = A.", nogSimpeler: "Flevoland = A." },
        },
      },
      {
        q: "Wat is de hoofdstad van **Gelderland**?",
        options: ["Arnhem","Nijmegen","Utrecht","Apeldoorn"],
        answer: 0,
        wrongHints: [null,"Nijmegen is groter qua bevolking, maar niet de hoofdstad.","Utrecht is in een andere provincie.","Apeldoorn is grote stad in Gelderland maar geen hoofdstad."],
        uitlegPad: {
          stappen: [{ titel: "Arnhem — niet Nijmegen", tekst: "Arnhem is hoofdstad van Gelderland (grootste provincie qua oppervlak). Veel mensen denken Nijmegen — maar Nijmegen is wel GROTER, niet hoofdstad. Examen-val. Arnhem bekend van Slag om Arnhem (WO2, 1944, 'A Bridge Too Far')." }],
          woorden: [{ woord: "Arnhem", uitleg: "Hoofdstad Gelderland. ~165.000 inwoners. Stad aan de Rijn." }, { woord: "Slag om Arnhem", uitleg: "September 1944. Geallieerde luchtlanding mislukte. Brug niet veroverd. Beroemde film + boek." }],
          theorie: "Bevolking ≠ hoofdstad. Voorbeelden: Noord-Holland (Amsterdam grootst, Haarlem hoofdstad). Zuid-Holland (Rotterdam grootst, Den Haag hoofdstad). Gelderland (Nijmegen grootst, Arnhem hoofdstad).",
          voorbeelden: [{ type: "context", tekst: "Apeldoorn (Gelderland) bekend van paleis Het Loo. Nijmegen oudste stad NL (Romeins, 1e eeuw na Chr.). Maar Arnhem = hoofdstad." }],
          basiskennis: [{ onderwerp: "Niet andere steden", uitleg: "Nijmegen + Apeldoorn = wel Gelderland, niet hoofdstad. Utrecht = andere provincie." }],
          niveaus: { basis: "Arnhem. A.", simpeler: "Gelderland → Arnhem (niet Nijmegen!). = A.", nogSimpeler: "Arnhem = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Haarlem — niet Amsterdam!", tekst: "Haarlem is hoofdstad van Noord-Holland. Examen-val: veel kiezen Amsterdam — maar dat is hoofdstad van NEDERLAND (het hele land), niet de provincie. Haarlem ligt iets ten westen van Amsterdam, ~165.000 inwoners, bekend van Frans Hals Museum + Sint-Bavokerk." }],
          woorden: [{ woord: "Haarlem", uitleg: "Hoofdstad Noord-Holland. ~165.000 inwoners. Frans Hals Museum + Grote Markt." }],
          theorie: "Verwarring rond Amsterdam: hoofdstad NL ≠ hoofdstad provincie. Net als bij Zuid-Holland (Den Haag hoofdstad provincie + regering, Rotterdam grootste). Provinciale hoofdstad gaat over PROVINCIAAL bestuur (Provinciale Staten).",
          voorbeelden: [{ type: "schaal", tekst: "Amsterdam 880.000 inwoners — veel groter dan Haarlem 165.000. Maar Haarlem heeft het provinciehuis (waar provinciaal bestuur zit)." }],
          basiskennis: [{ onderwerp: "Klassieke examen-val", uitleg: "Op Cito/Doorstroomtoets vaak: 'Wat is hoofdstad Noord-Holland?' → Haarlem (NIET Amsterdam)." }],
          niveaus: { basis: "Haarlem. A.", simpeler: "Noord-Holland → HAARLEM (Amsterdam = NL-hoofdstad). = A.", nogSimpeler: "Haarlem = A." },
        },
      },
      {
        q: "Wat is de hoofdstad van **Zeeland**?",
        options: ["Middelburg","Vlissingen","Goes","Terneuzen"],
        answer: 0,
        wrongHints: [null,"Vlissingen is een grote havenstad in Zeeland maar geen hoofdstad.","Goes is in Zeeland maar geen hoofdstad.","Terneuzen ook in Zeeland maar niet de hoofdstad."],
        uitlegPad: {
          stappen: [{ titel: "Middelburg — historische stad", tekst: "Middelburg is hoofdstad van Zeeland (provincie met eilanden). Ligt op Walcheren. ~50.000 inwoners, eeuwenoude stad uit Gouden Eeuw met grachten + abdij. Hier zit ook Provinciale Staten van Zeeland." }],
          woorden: [{ woord: "Middelburg", uitleg: "Hoofdstad Zeeland. Op eiland Walcheren. Historisch centrum + abdij." }, { woord: "Walcheren", uitleg: "Vroeger zelfstandig eiland Zeeland, nu via Deltawerken met vasteland verbonden." }],
          theorie: "Zeeland = 'zee-land' = veel eilanden + zee-armen. Sinds Deltawerken zijn meeste eilanden vast verbonden via dammen + bruggen. Middelburg historisch hart, andere steden ook belangrijk maar niet hoofdstad.",
          voorbeelden: [{ type: "andere Zeeland-steden", tekst: "Vlissingen = grote haven + marine. Goes = Zuid-Beveland. Terneuzen = Zeeuws-Vlaanderen. Allemaal in Zeeland, niemand hoofdstad." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Andere Zeeuwse steden zijn groter qua haven (Vlissingen, Terneuzen) maar Middelburg is bestuurlijk hart." }],
          niveaus: { basis: "Middelburg. A.", simpeler: "Zeeland → Middelburg (historische stad op Walcheren). = A.", nogSimpeler: "Middelburg = A." },
        },
      },
      {
        q: "Wat is de hoofdstad van **Limburg**?",
        options: ["Maastricht","Heerlen","Roermond","Sittard"],
        answer: 0,
        wrongHints: [null,"Heerlen is een belangrijke stad in Limburg maar geen hoofdstad.","Roermond is in Limburg maar geen hoofdstad.","Sittard is in Limburg maar geen hoofdstad."],
        uitlegPad: {
          stappen: [{ titel: "Maastricht — diep in zuid", tekst: "Maastricht is hoofdstad van Limburg. Ligt helemaal zuid, ingeklemd tussen België en Duitsland. ~120.000 inwoners. Eeuwenoude stad met Romeinse geschiedenis. Bekend van Verdrag van Maastricht (1992) waarmee de Europese Unie werd opgericht." }],
          woorden: [{ woord: "Maastricht", uitleg: "Hoofdstad Limburg. Bekendste EU-stad: Verdrag van Maastricht 1992." }, { woord: "Verdrag van Maastricht", uitleg: "1992. EEG werd EU. Euro werd hier 'voorbereid' (invoering 1999/2002)." }],
          theorie: "Maastricht is bestuurlijk + cultureel hart Limburg. Andere grote Limburgse steden (Heerlen, Roermond, Sittard) ook belangrijk maar niet hoofdstad.",
          voorbeelden: [{ type: "ligging", tekst: "Maastricht ligt 200 km van Amsterdam. Korter naar Brussel (130 km) of Düsseldorf (200 km). Echt grensstad." }],
          basiskennis: [{ onderwerp: "Niet andere Limburgse", uitleg: "Heerlen = mijngeschiedenis. Roermond = outlet-shopping. Sittard = midden Limburg. Geen hoofdstad." }],
          niveaus: { basis: "Maastricht. A.", simpeler: "Limburg → Maastricht (zuidelijke grensstad, Verdrag van Maastricht). = A.", nogSimpeler: "Maastricht = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Rijn + Maas + Schelde", tekst: "3 grote rivieren NL: (1) Rijn — komt uit Zwitserland via Duitsland, splitst in NL in Waal+Lek+IJssel. (2) Maas — uit Frankrijk via België. (3) Schelde — uit Frankrijk via België, komt bij Antwerpen in zee. Allemaal stromen ze richting de Noordzee." }],
          woorden: [{ woord: "Rijn", uitleg: "1230 km lang. Belangrijkste handelsrivier Europa. Vanaf Zwitserland." }, { woord: "Maas", uitleg: "925 km. Komt uit Frankrijk. Bekend van Maasvlakte (Rotterdamse haven)." }, { woord: "Schelde", uitleg: "350 km. Uit Frankrijk. Mond bij Antwerpen (België)." }],
          theorie: "Deze 3 vormen 'de grote rivieren' — natuurlijke grens noord-zuid NL. Cultureel-historische scheiding: 'boven de rivieren' (protestant, noord) vs 'onder de rivieren' (katholiek, zuid).",
          voorbeelden: [{ type: "vergelijk", tekst: "Donau (oost-Europa, niet NL). Theems (Engeland). Allemaal grote rivieren maar niet in NL." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Donau loopt door Duitsland → Oostenrijk → Hongarije → Servië → Roemenië → Bulgarije. Theems = Engeland alleen." }],
          niveaus: { basis: "Rijn, Maas, Schelde. A.", simpeler: "3 NL-rivieren: Rijn + Maas + Schelde. = A.", nogSimpeler: "RMS = A." },
        },
      },
      {
        q: "Wat heette het IJsselmeer **vroeger**?",
        options: ["Zuiderzee","Markermeer","Waddenzee","Noordzee"],
        answer: 0,
        wrongHints: [null,"Markermeer is een klein deel ervan.","Waddenzee is een ander stuk water (boven de afsluitdijk).","Noordzee is de zee aan de westkant van NL."],
        uitlegPad: {
          stappen: [{ titel: "Zuiderzee → IJsselmeer 1932", tekst: "Tot 1932 was er een grote zee in NL: de Zuiderzee. Open verbinding met Noordzee. In 1932 werd de Afsluitdijk gebouwd (32 km dijk Noord-Holland → Friesland). Daarmee werd Zuiderzee afgesloten van zee → werd zoetwater-meer → kreeg nieuwe naam: IJsselmeer (naar IJssel-rivier die erin uitmondt)." }],
          woorden: [{ woord: "Zuiderzee", uitleg: "Vroegere binnenzee NL. 5.000 km². Gevaarlijk: stormvloeden veroorzaakten regelmatig overstromingen." }, { woord: "Afsluitdijk", uitleg: "32 km lange dijk, gebouwd 1927-1932. Sluit IJsselmeer af van Noordzee." }, { woord: "Cornelis Lely", uitleg: "Ingenieur. Bedacht plan 1891. Werd uitgevoerd na zware storm 1916." }],
          theorie: "Doel Afsluitdijk: (1) bescherming tegen stormvloeden, (2) zoetwater-reserve, (3) land winnen (polders). Markermeer ontstond later: in 1976 werd IJsselmeer gesplitst door Houtribdijk.",
          voorbeelden: [{ type: "context", tekst: "Stormvloed 1916: 19 doden + duizenden dieren verdronken. Politiek besluit: 'nooit meer' → Afsluitdijk gebouwd." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Markermeer = klein deel, ontstond 1976. Waddenzee = OUDE zee tussen vasteland en Wadden­eilanden (BUITEN Afsluitdijk). Noordzee = grote zee westkust." }],
          niveaus: { basis: "Zuiderzee. A.", simpeler: "Vroeger Zuiderzee, sinds 1932 (Afsluitdijk) IJsselmeer. = A.", nogSimpeler: "Zuiderzee = A." },
        },
      },
      {
        q: "Wat is het doel van de **Deltawerken**?",
        options: ["Beschermen tegen overstromingen","Drinkwater zuiveren","Stroom opwekken","Schepen sneller maken"],
        answer: 0,
        wrongHints: [null,"Drinkwater wordt elders gezuiverd.","Sommige werken kunnen wel stroom opwekken maar dat is niet het hoofddoel.","Niet de bedoeling van Deltawerken."],
        uitlegPad: {
          stappen: [{ titel: "Na Watersnood 1953", tekst: "1 februari 1953: zware stormvloed. Zeeland + Zuid-Holland onder water. 1.836 doden + ~70.000 mensen evacuatie + 47.000 dieren dood. Politiek besluit: 'nooit meer'. Resultaat: Deltawerken (1958-1997) — serie van 13 dammen + stormvloedkeringen die zee-armen Zeeland afsluiten." }],
          woorden: [{ woord: "Deltawerken", uitleg: "13 grote waterwerken Zeeland 1958-1997. Een van 7 wonderen moderne wereld (American Society of Civil Engineers)." }, { woord: "Oosterscheldekering", uitleg: "Bekendste Deltawerk. Beweegbare stormvloedkering. Alleen dicht bij hoog water." }, { woord: "Watersnoodramp", uitleg: "1953. Grootste natuurramp NL 20e eeuw. 1.836 doden." }],
          theorie: "Deltawerken hebben dubbel doel: (1) HOOFDDOEL = bescherming tegen zee, (2) economische bonus = land verbonden via dammen, makkelijker verkeer. Maar veiligheid is rede #1.",
          voorbeelden: [{ type: "schaal", tekst: "Oosterscheldekering 9 km lang, 62 schuiven die elk 350 ton wegen. Sluit bij extreme storm (~1× per paar jaar). Anders blijft 'open' voor zoutwater-getij." }],
          basiskennis: [{ onderwerp: "Niet andere doelen", uitleg: "Geen drinkwater (komt uit duinen). Geen stroom (paar werken kleinschalig wel). Geen scheepvaart-versnelling (juist sluizen voor scheepvaart)." }],
          niveaus: { basis: "Bescherming overstroming. A.", simpeler: "Deltawerken = beschermen Zeeland tegen overstromingen, na 1953-ramp. = A.", nogSimpeler: "Bescherming = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Volgorde T-V-T-A-S", tekst: "5 Wadden­eilanden van WEST naar OOST: Texel → Vlieland → Terschelling → Ameland → Schiermonnikoog. Texel is uniek: enige bij Noord-Holland (andere 4 bij Friesland). Texel is ook grootste eiland." }],
          woorden: [{ woord: "Wadden­eilanden", uitleg: "5 eilanden tussen Noordzee en vasteland NL. UNESCO Werelderfgoed (Waddenzee, 2009)." }, { woord: "Texel", uitleg: "Grootste Wadden­eiland. ~13.500 inwoners. Bij Noord-Holland." }],
          theorie: "Geheugentruc: TVTAS-rij (West→Oost). Of zin: 'Toen Vroeg Truus Aan Schelden?' (T-V-T-A-S). Helpt examenvraag-volgorde onthouden.",
          voorbeelden: [{ type: "afstanden", tekst: "Texel-Schiermonnikoog ~140 km uit elkaar. Veerboten gaan vanaf Den Helder (Texel), Harlingen (Vlieland+Terschelling), Holwerd (Ameland), Lauwersoog (Schiermonnikoog)." }],
          basiskennis: [{ onderwerp: "Niet andere positie", uitleg: "Schiermonnikoog = OOSTELIJKSTE. Ameland = midden. Terschelling = 3e van west. Texel = westelijkste." }],
          niveaus: { basis: "Texel (westelijkst). A.", simpeler: "Wadden­eilanden west→oost: T-V-T-A-S = Texel-Vlieland-Terschelling-Ameland-Schiermonnikoog. Texel = west. = A.", nogSimpeler: "Texel = A." },
        },
      },
      {
        q: "Hoeveel procent van NL ligt **onder zeeniveau**?",
        options: ["~26%","~5%","~50%","~75%"],
        answer: 0,
        wrongHints: [null,"Te weinig — er ligt meer onder zeeniveau dan dat.","Te veel — niet de helft.","Veel te veel."],
        uitlegPad: {
          stappen: [{ titel: "~26% onder NAP", tekst: "Ongeveer 26% van NL ligt onder zeeniveau (= NAP, Normaal Amsterdams Peil). Vooral in west (Zuid-Holland, Noord-Holland, Flevoland). Diepste punt: Zuidplaspolder bij Rotterdam = -6,76 m NAP. Zonder dijken + gemalen zou dit deel van NL gewoon zee zijn." }],
          woorden: [{ woord: "NAP", uitleg: "Normaal Amsterdams Peil. NL-meetpunt voor zeespiegel, gebaseerd op gemiddeld waterpeil Amsterdam." }, { woord: "polder", uitleg: "Land onder zeeniveau, drooggehouden door dijken + gemalen." }, { woord: "Zuidplaspolder", uitleg: "Diepste polder NL. -6,76 m NAP. Bij Rotterdam." }],
          theorie: "Reden NL is bijzonder: groot deel hoort eigenlijk onder water. Door 1000+ jaar dijken bouwen + bedijking + droogmaling: bewoonbaar geworden. Vandaar 'water-management' is NL-specialiteit (Deltawerken export wereldwijd).",
          voorbeelden: [{ type: "vergelijk", tekst: "Wereld: meeste landen 100% boven zeeniveau. NL: 26% onder. Bangladesh ook risicovol maar net niet onder. Maladiven (gemiddeld 1,5 m) bedreigd door zeespiegelstijging." }],
          basiskennis: [{ onderwerp: "Examen-feit", uitleg: "Klassieke Cito/Doorstroomtoets-vraag: ~26% van NL onder zeeniveau. Onthoud dit getal." }],
          niveaus: { basis: "~26%. A.", simpeler: "~26% (een kwart) van NL ligt onder zeeniveau, beschermd door dijken. = A.", nogSimpeler: "26% = A." },
        },
      },
      {
        q: "Wat is het **hoogste punt** van Nederland?",
        options: ["Vaalserberg (323m, Limburg)","Mont Blanc","Zuiderzeeweg","Tafelberg"],
        answer: 0,
        wrongHints: [null,"Mont Blanc is in Frankrijk!","Geen berg.","Tafelberg is in Zuid-Afrika of Suriname."],
        uitlegPad: {
          stappen: [{ titel: "Vaalserberg 323 m", tekst: "Hoogste punt NL = Vaalserberg, 322,4 m boven NAP. Ligt in Limburg, dorp Vaals. Drielandenpunt — hier raken NL, België én Duitsland elkaar. Niet groots als alpen-berg, maar voor plat NL relatief hoog." }],
          woorden: [{ woord: "Vaalserberg", uitleg: "Hoogste punt NL. 322,4 m. Bij Vaals, Limburg." }, { woord: "Drielandenpunt", uitleg: "Plek waar 3 landen samen komen. Bij Vaalserberg: NL+BE+DE." }],
          theorie: "Hoogste punten andere landen ter vergelijking: Duitsland Zugspitze 2962 m. Frankrijk Mont Blanc 4810 m. NL Vaalserberg 323 m. NL is plat omdat we op delta-vlakte liggen (zand-sediment van rivieren).",
          voorbeelden: [{ type: "binnen NL", tekst: "Veluwe (Gelderland) hoogste ~110 m. Drenthe heuvels max ~50 m. Vaalserberg eenzaam de top met 323 m." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Mont Blanc = Frankrijk. Zuiderzeeweg = straatnaam (geen berg). Tafelberg = Zuid-Afrika of Suriname." }],
          niveaus: { basis: "Vaalserberg 323m. A.", simpeler: "Hoogste NL = Vaalserberg (323 m, Limburg). = A.", nogSimpeler: "Vaalserberg = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Rotterdam = #2", tekst: "Top-5 NL-steden naar inwoners: 1. Amsterdam ~880.000. 2. Rotterdam ~660.000. 3. Den Haag ~560.000. 4. Utrecht ~365.000. 5. Eindhoven ~240.000. Rotterdam vooral bekend om grootste haven van Europa." }],
          woorden: [{ woord: "Rotterdam", uitleg: "2e stad NL. Modern aanzicht door wederopbouw na bombardement WO2 1940." }, { woord: "Rotterdamse haven", uitleg: "Grootste haven Europa. ~470 km² (groter dan veel steden)." }],
          theorie: "Bevolkingsranglijst kan iets schommelen door jaar. Rotterdam stabiel #2 al decennia. Den Haag #3 met regering. Utrecht #4 centraal. Eindhoven #5 tech-stad.",
          voorbeelden: [{ type: "bijzonder", tekst: "Rotterdam was vroeger groter (jaren '60: bijna gelijk Amsterdam). Amsterdam groeide harder door dienstverlening + toerisme." }],
          basiskennis: [{ onderwerp: "Niet andere positie", uitleg: "Den Haag 3e (regering). Utrecht 4e (transit). Eindhoven 5e (tech). Rotterdam 2e (haven)." }],
          niveaus: { basis: "Rotterdam. A.", simpeler: "Top-5: Amsterdam-Rotterdam-Den Haag-Utrecht-Eindhoven. R = 2e. = A.", nogSimpeler: "Rotterdam = A." },
        },
      },
      {
        q: "Wat heet het gebied **Amsterdam-Rotterdam-Den Haag-Utrecht**?",
        options: ["Randstad","Vechtstreek","Noord-Holland","Zuiderzee"],
        answer: 0,
        wrongHints: [null,"Vechtstreek is een ander gebiedje (rivier de Vecht).","Niet alleen Noord-Holland.","Zuiderzee bestaat niet meer (= IJsselmeer)."],
        uitlegPad: {
          stappen: [{ titel: "Randstad — dichtbevolkt hart NL", tekst: "Randstad = stedelijk gebied gevormd door de 4 grootste steden: Amsterdam-Rotterdam-Den Haag-Utrecht + omliggende steden (Haarlem, Leiden, Delft, Hilversum, Gouda). 40% NL-bevolking op ~20% van land. Dichtstbevolkte gebied Europa." }],
          woorden: [{ woord: "Randstad", uitleg: "Stedelijk hoefijzer-vormig gebied west-NL. ~8 miljoen inwoners." }, { woord: "Groene Hart", uitleg: "Open agrarisch gebied IN de Randstad (Veenweidegebied). Behoud-zone." }],
          theorie: "Randstad omvat ook 'Vechtstreek' + meer. Vorm: hoefijzer met opening naar oosten. 'Groene Hart' in het midden bewust open gehouden (geen bebouwing).",
          voorbeelden: [{ type: "schaal", tekst: "Randstad: 8 miljoen mensen op 8000 km². Vergelijk: Drenthe 500.000 op 2700 km². Verhouding 16× dichter." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Vechtstreek = klein gebied bij rivier Vecht. Noord-Holland alleen = halve Randstad. Zuiderzee bestaat niet meer." }],
          niveaus: { basis: "Randstad. A.", simpeler: "Vier grote steden samen = Randstad. Dichtstbevolkt gebied NL. = A.", nogSimpeler: "Randstad = A." },
        },
      },
      {
        q: "Wat zijn de **2 buurlanden** van Nederland?",
        options: ["Duitsland en België","Frankrijk en België","Duitsland en Engeland","België en Luxemburg"],
        answer: 0,
        wrongHints: [null,"Frankrijk grenst niet aan NL — wel aan België.","Engeland is over de Noordzee — geen buurland in geografische zin.","Luxemburg ligt onder België, niet aan NL."],
        uitlegPad: {
          stappen: [{ titel: "Duitsland (oost) + België (zuid)", tekst: "NL grenst aan 2 landen: (1) Duitsland — lange grens in oosten, van Drenthe tot Limburg. (2) België — grens in zuiden, van Zeeland via Brabant tot Limburg. Westkant + noord = Noordzee, dus geen landgrens. Engeland = over Noordzee (geen 'buur')." }],
          woorden: [{ woord: "buurland", uitleg: "Land dat directe landgrens deelt met een ander land." }, { woord: "Drielandenpunt", uitleg: "Bij Vaalserberg (Limburg) raken NL+BE+DE elkaar." }],
          theorie: "Geografische buren ≠ politieke vrienden noodzakelijk. NL+BE+LU heten samen Benelux (sinds 1944). Duitsland is NL's grootste handelspartner.",
          voorbeelden: [{ type: "grenzen", tekst: "NL-Duitsland-grens: 577 km. NL-België-grens: 450 km. NL-Noordzee-kust: 451 km. Veel kust en veel buren." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Frankrijk grenst aan België, niet NL. Engeland = over zee (geen buur). Luxemburg = onder België, geen NL-grens." }],
          niveaus: { basis: "Duitsland + België. A.", simpeler: "NL grenst aan Duitsland (oost) en België (zuid). = A.", nogSimpeler: "DE+BE = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Kinderdijk — UNESCO 1997", tekst: "Kinderdijk = dorp in Zuid-Holland (bij Rotterdam). 19 windmolens uit 1740. UNESCO Werelderfgoed sinds 1997. Bekendste molenpark Nederland. Toeristen wereldwijd komen kijken. Molens pompten vroeger water uit polders weg — vandaar betreurd dorp ligt onder zeeniveau." }],
          woorden: [{ woord: "Kinderdijk", uitleg: "19 molens uit 1740 op 1 plek. UNESCO. ~600.000 toeristen/jaar." }, { woord: "UNESCO Werelderfgoed", uitleg: "Lijst van waardevol cultureel/natuur-erfgoed wereldwijd. NL heeft 12 erfgoederen." }],
          theorie: "Andere NL-werelderfgoeden: Schokland, Beemster, Stelling van Amsterdam, Defensielijn, Waddenzee. Kinderdijk is meest gefotografeerd door Hollandse 'molen+wolk'-cliché.",
          voorbeelden: [{ type: "andere molens", tekst: "Zaanse Schans (Noord-Holland) heeft ook molens, maar nieuwer + minder. Kinderdijk = 19 originele." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Marken = vissersdorp. Volendam = klederdracht/vissers. Schiphol = vliegveld." }],
          niveaus: { basis: "Kinderdijk. A.", simpeler: "19 oude molens UNESCO = Kinderdijk, Zuid-Holland. = A.", nogSimpeler: "Kinderdijk = A." },
        },
      },
      {
        q: "Wat is **Schiphol**?",
        options: ["Luchthaven (vliegveld)","Treinstation","Haven","Stadion"],
        answer: 0,
        wrongHints: [null,"Schiphol heeft wel een station maar het is vooral een vliegveld.","Schiphol is in Noord-Holland landinwaarts, geen haven.","Geen stadion."],
        uitlegPad: {
          stappen: [{ titel: "Schiphol — 4e luchthaven Europa", tekst: "Schiphol = grootste luchthaven NL. In Haarlemmermeer (Noord-Holland), -3 m onder NAP (op drooggemalen polder!). ~70 miljoen passagiers/jaar. 4e drukste van Europa (na London Heathrow, Parijs CDG, Frankfurt). Wel ook treinstation onder de luchthaven, maar vliegveld is hoofdfunctie." }],
          woorden: [{ woord: "Schiphol", uitleg: "Internationale luchthaven NL. Gebouwd 1916 in Haarlemmermeer-polder." }, { woord: "KLM", uitleg: "NL-vliegmaatschappij. Schiphol-hub. Oudste luchtvaartmaatschappij wereld (1919)." }],
          theorie: "Schiphol ligt LAGER dan zeeniveau (-3 m NAP) — uniek. Naam komt van schip-hol (oude scheepshaven Haarlemmermeer voor het werd drooggelegd 1852).",
          voorbeelden: [{ type: "vergelijk", tekst: "Eindhoven Airport ~7 mln/jaar. Rotterdam-The Hague ~2 mln. Schiphol 70 mln — verreweg grootste NL." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Treinstation = onderdeel maar niet hoofdfunctie. Geen haven (geen schepen). Geen stadion." }],
          niveaus: { basis: "Vliegveld. A.", simpeler: "Schiphol = grootste luchthaven NL, in Noord-Holland. = A.", nogSimpeler: "Vliegveld = A." },
        },
      },
      {
        q: "Welk dorp wordt **'Venetië van Nederland'** genoemd?",
        options: ["Giethoorn","Volendam","Kinderdijk","Marken"],
        answer: 0,
        wrongHints: [null,"Volendam heeft wel water maar geen grachten zoals Venetië.","Kinderdijk is bekend om molens.","Marken is een vissersdorp."],
        uitlegPad: {
          stappen: [{ titel: "Giethoorn — geen wegen tussen huizen", tekst: "Giethoorn = klein dorp in Overijssel met ~2.600 inwoners. Bijzonder: GEEN wegen tussen veel huizen. Alleen grachten + voetbruggetjes. Verkeer per fluisterboot. Vandaar 'Venetië van Nederland'. Toeristen vooral uit China + Japan." }],
          woorden: [{ woord: "Giethoorn", uitleg: "Dorp in Overijssel zonder wegen tussen huizen. Alleen waterwegen + bruggetjes." }, { woord: "fluisterboot", uitleg: "Elektrische boot zonder lawaai. Gebruikt in Giethoorn." }],
          theorie: "Naam 'Venetië van NL' is marketing. Giethoorn is veel kleiner dan Venetië (Italië) maar idee hetzelfde: water als hoofd-vervoer. Andere 'Venetiën': Brugge (België), Stockholm (Zweden), Suzhou (China).",
          voorbeelden: [{ type: "bezoek", tekst: "1 miljoen bezoekers/jaar voor 2.600 inwoners. Overbelasting heeft regels gebracht: geen drones, geen luide muziek, beperkte bootverhuur." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Volendam = visserij + paling. Kinderdijk = molens. Marken = klederdracht/visserij. Allemaal toeristisch maar geen 'Venetië'." }],
          niveaus: { basis: "Giethoorn. A.", simpeler: "'Venetië van NL' = Giethoorn (Overijssel, dorp met grachten). = A.", nogSimpeler: "Giethoorn = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Zwolle = hoofdstad Overijssel", tekst: "Overijssel = provincie midden-oost NL. Hoofdstad: Zwolle. Stad ~130.000 inwoners. Aan de IJssel-rivier. Bekend van markt + historische binnenstad." }],
          woorden: [{ woord: "Zwolle", uitleg: "Hoofdstad Overijssel. ~130.000 inwoners. Hanze-stad sinds middeleeuwen." }],
          theorie: "Trucje noordelijke 3 hoofdsteden: A(ssen)-Drenthe, Z(wolle)-Overijssel, L(eeuwarden)-Friesland. Alfabetische trucje werkt niet meer als je verder gaat — gewoon koppelen onthouden.",
          voorbeelden: [{ type: "context", tekst: "Andere grote steden Overijssel: Enschede (~160.000) groter dan Zwolle, en Almelo + Hengelo. Maar Zwolle = hoofdstad door geschiedenis." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Arnhem = Gelderland. Assen = Drenthe. Haarlem = Noord-Holland. Allemaal eerder behandeld." }],
          niveaus: { basis: "Zwolle. A.", simpeler: "Overijssel → Zwolle. = A.", nogSimpeler: "Zwolle = A." },
        },
      },
      {
        q: "Welke 3 grote rivieren stromen door NL?",
        options: ["Rijn, Maas, Schelde","Rijn, Donau, Main","Theems, Rijn, Maas","Maas, Schelde, Tigris"],
        answer: 0,
        wrongHints: [null,"Donau en Main lopen niet door NL.","Theems is in Engeland.","Tigris is in het Midden-Oosten."],
        uitlegPad: {
          stappen: [{ titel: "RMS — Rijn, Maas, Schelde", tekst: "Onthoud: R-M-S = Rijn, Maas, Schelde. Drie grote NL-rivieren. Allen komen uit buitenland, alle stromen naar Noordzee." }],
          woorden: [{ woord: "Rijn", uitleg: "1230 km. Uit Zwitserland. Belangrijkste handelsrivier Europa." }, { woord: "Maas", uitleg: "925 km. Uit Frankrijk." }, { woord: "Schelde", uitleg: "350 km. Uit Frankrijk via België." }],
          theorie: "Vergelijk: Donau (Oost-Europa). Main (Duitsland, zijrivier Rijn). Theems (Engeland). Tigris (Midden-Oosten). Geen van deze door NL.",
          voorbeelden: [{ type: "tip", tekst: "RMS = trucje. Of: 'Rijn Maas Schelde' afkort tot beginletters. R komt voor M komt voor S in alfabet." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Donau + Main = Duitsland + Oost-EU. Theems = UK. Tigris = Irak. Alleen RMS = NL." }],
          niveaus: { basis: "Rijn, Maas, Schelde. A.", simpeler: "Drie NL-rivieren: R(ijn) M(aas) S(chelde). = A.", nogSimpeler: "RMS = A." },
        },
      },
      {
        q: "Tot welke provincie behoort **Texel**?",
        options: ["Noord-Holland","Friesland","Drenthe","Groningen"],
        answer: 0,
        wrongHints: [null,"Vlieland t/m Schiermonnikoog zijn Friesland — maar Texel is van een andere provincie.","Drenthe heeft geen eilanden.","Groningen heeft geen eilanden."],
        uitlegPad: {
          stappen: [{ titel: "Texel = uniek Noord-Holland", tekst: "Van de 5 Wadden­eilanden hoort alleen TEXEL bij Noord-Holland. De andere 4 (Vlieland-Terschelling-Ameland-Schiermonnikoog) horen bij Friesland. Examen-val: makkelijk om te denken 'alle wadden = Friesland'." }],
          woorden: [{ woord: "Texel", uitleg: "Grootste Wadden­eiland. ~13.500 inwoners. Bij Noord-Holland (gemeente Texel)." }],
          theorie: "Veerboot naar Texel vanaf Den Helder (Noord-Holland). Andere 4 wadden via Friese havens (Harlingen, Holwerd, Lauwersoog). Vandaar bestuurlijk Texel bij N-Holland.",
          voorbeelden: [{ type: "feit", tekst: "Texel = grootste eiland Wadden + heeft schapen (Texelaars) + strand 30 km lang. Toeristen-favoriet." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Friesland heeft 4 eilanden (V/T/A/S). Drenthe + Groningen = geen eilanden." }],
          niveaus: { basis: "Noord-Holland. A.", simpeler: "Texel = enige Waddeneiland bij Noord-Holland (rest = Friesland). = A.", nogSimpeler: "N-Holland = A." },
        },
      },
      {
        q: "Wat is bijzonder aan **Flevoland**?",
        options: ["Het is de jongste provincie (1986), gewonnen uit de zee","Het is de oudste provincie","Het ligt het hoogst","Hier liggen alle Wadden­eilanden"],
        answer: 0,
        wrongHints: [null,"Andersom — het is de jongste.","Flevoland is plat, niet hoog.","Wadden­eilanden zijn in Noord-Holland en Friesland."],
        uitlegPad: {
          stappen: [{ titel: "Jongste provincie 1986", tekst: "Flevoland is uniek: jongste provincie (officieel sinds 1986) + helemaal op gewonnen land uit voormalige Zuiderzee. Polders drooggepompt vanaf 1942. Daarvoor zee — nu provincie met ~425.000 inwoners. Lely is hoofdstad." }],
          woorden: [{ woord: "Flevoland", uitleg: "12e provincie sinds 1986. Op gewonnen land. ~425.000 inwoners." }],
          theorie: "Vergelijk: andere provincies bestaan al eeuwen. Friesland, Holland, Brabant = oeroud. Flevoland uitzondering — bewust gemaakt.",
          voorbeelden: [{ type: "tijdlijn", tekst: "1932 Afsluitdijk → 1942 eerste polder → 1957 + 1968 meer polders → 1986 officieel provincie." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Niet oudste (juist jongste). Niet hoogst (plat). Wadden­eilanden bij N-Holland + Friesland." }],
          niveaus: { basis: "Jongste, uit zee. A.", simpeler: "Flevoland = jongste provincie (1986), gewonnen uit Zuiderzee. = A.", nogSimpeler: "Jongste = A." },
        },
      },
      {
        q: "Hoeveel inwoners heeft Nederland ongeveer (2026)?",
        options: ["~17,9 miljoen","~5 miljoen","~50 miljoen","~150 miljoen"],
        answer: 0,
        wrongHints: [null,"Te weinig — meer dan dat.","Veel te veel — Nederland is een klein landje.","Veel te veel — denk aan een klein landje."],
        uitlegPad: {
          stappen: [{ titel: "~17,9 miljoen NL'ers", tekst: "Nederland heeft 2026 ongeveer 17,9 miljoen inwoners. Bijna 18 miljoen. Klein land qua oppervlak (41.500 km²) maar dichtbevolkt: ~430 mensen per km². Een van dichtbevolkstste landen Europa." }],
          woorden: [{ woord: "bevolkingsdichtheid", uitleg: "Aantal mensen per km². NL = 430/km² (heel hoog)." }],
          theorie: "Groei NL: 1900 = 5 miljoen. 1950 = 10 miljoen. 2000 = 16 miljoen. 2026 = 17,9 miljoen. Voorspelling 2050: ~19,5 miljoen.",
          voorbeelden: [{ type: "vergelijk", tekst: "Duitsland 84 mln. België 11,7 mln. Frankrijk 68 mln. NL middelmaat. Maar dichtheid: NL > meeste Europese landen (uitgezonderd Malta, Monaco)." }],
          basiskennis: [{ onderwerp: "Niet andere getallen", uitleg: "5 miljoen = wereld-historisch (NL rond 1900). 50 mln = veel te veel. 150 mln = onmogelijk voor klein landje." }],
          niveaus: { basis: "~17,9 miljoen. A.", simpeler: "NL inwoners 2026 ≈ 17,9 miljoen (bijna 18 mln). = A.", nogSimpeler: "17,9 mln = A." },
        },
      },
      { q: "Wat is de **hoofdstad** van Nederland?", options: ["Amsterdam","Den Haag","Rotterdam","Utrecht"], answer: 0, wrongHints: [null, "Regeringsstad, geen hoofdstad.", "Grootste haven.", "Niet."] },
      { q: "Welke stad is de **regeringsstad** van NL?", options: ["Den Haag","Amsterdam","Rotterdam","Utrecht"], answer: 0, wrongHints: [null, "Hoofdstad.", "Niet.", "Niet."] },
      { q: "Hoeveel **provincies** heeft NL?", options: ["12","11","13","10"], answer: 0, wrongHints: [null, "Bijna.", "Te veel.", "Te weinig."] },
      { q: "Welke is een NL-provincie?", options: ["Friesland","Beieren","Vlaanderen","Bayern"], answer: 0, wrongHints: [null, "Duits.", "Belgisch.", "Duits."] },
      { q: "Welke **rivier** stroomt door Rotterdam?", options: ["Nieuwe Maas / Maas","Rijn","IJssel","Amstel"], answer: 0, wrongHints: [null, "Splitsing nog niet op die punt.", "Andere richting.", "Door Amsterdam."] },
      { q: "Welke twee **landen** grenzen aan NL?", options: ["Duitsland + België","Frankrijk + DE","VK + BE","Italië + FR"], answer: 0, wrongHints: [null, "Niet — geen FR-grens.", "Niet — geen VK-grens.", "Niet."] },
      { q: "Welke **provincie** is hoofdstad-provincie (Amsterdam)?", options: ["Noord-Holland","Zuid-Holland","Utrecht","Flevoland"], answer: 0, wrongHints: [null, "Rotterdam/Den Haag daar.", "Anders.", "Anders."] },
      { q: "**Wadden** liggen?", options: ["Noorden — boven Friesland/Groningen","Zuiden","Westen","Oosten"], answer: 0, wrongHints: [null, "Niet.", "Niet exact.", "Niet."] },
      { q: "**IJsselmeer** ontstond door?", options: ["Afsluitdijk (1932)","Mensen-graven","Natuurlijk","Industrie"], answer: 0, wrongHints: [null, "Niet primair.", "Wel maar afgesloten 1932.", "Niet."] },
      { q: "Welke **provincie** is nieuwste (jongste)?", options: ["Flevoland (1986)","Limburg","Zeeland","Groningen"], answer: 0, wrongHints: [null, "Limburg bestaat al eeuwen.", "Zeeland is een hele oude provincie.", "Groningen is een hele oude provincie."] },
      { q: "Hoogste **berg** in NL ligt in?", options: ["Limburg (Vaalserberg 322m)","Friesland","Zeeland","Noord-Holland"], answer: 0, wrongHints: [null, "Geen bergen.", "Niet hoog.", "Niet."] },
      { q: "Welke provincie ligt het **meest noordelijk**?", options: ["Groningen","Limburg","Zeeland","Drenthe"], answer: 0, wrongHints: [null, "Limburg ligt in het zuiden.", "Zeeland ligt zuidwest.", "Drenthe ligt noord, maar er ligt nog iets bovenop."] },
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
  referentieNiveau: "1F",
  sloThema: "Aardrijkskunde — topografie Nederland",
  prerequisites: [
    { id: "werelddelen-landen-po", title: "Werelddelen + landen", niveau: "po-1F" },
    { id: "kaartlezen-po", title: "Kaartlezen", niveau: "po-1F" },
  ],
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
