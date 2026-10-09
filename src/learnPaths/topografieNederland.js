// Leerpad: Topografie Nederland — provincies, hoofdsteden, grote steden, water
// 10 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: groep 6-8 basisschool. toets-relevant.

import { PROV_PATHS, PROV_LABELS, KAART_PUNTEN } from "./nederlandKaartPaths.js";

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

// SVG-kaart: 12 provincies met échte (vereenvoudigde) omtrekken uit open
// CBS/Kadaster-data (zie nederlandKaartPaths.js). Labels met donkere halo.
const LABEL_KORT = { "Noord-Holland": "N-Holland", "Zuid-Holland": "Z-Holland", "Noord-Brabant": "N-Brabant" };
// Handmatige nudges [dx, dy] waar het zwaartepunt net verkeerd valt voor tekst.
const LABEL_NUDGE = {
  Friesland: [-2, 4], "Noord-Holland": [-6, 2], Flevoland: [0, 3],
  Utrecht: [0, 2], Zeeland: [-4, -2], Limburg: [3, 0], Groningen: [0, 3],
};
const HALO = `paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6" stroke-linejoin="round"`;

function provLaag(highlight = null) {
  const isHL = (p) => highlight === p;
  const opa = (p) => (highlight && !isHL(p) ? 0.45 : 1);
  return Object.keys(PROV_PATHS)
    .map((p) => {
      const [cx, cy] = PROV_LABELS[p];
      const [dx, dy] = LABEL_NUDGE[p] || [0, 0];
      const fs = p === "Flevoland" ? 6.5 : p === "Utrecht" || p === "Overijssel" ? 7.5 : 8;
      return `<path d="${PROV_PATHS[p]}" fill="${isHL(p) ? COLORS.highlight : COLORS.prov}" opacity="${opa(p)}" stroke="#0d1b2e" stroke-width="0.8" stroke-linejoin="round"/>
<text x="${cx + dx}" y="${cy + dy}" text-anchor="middle" fill="#fff" ${HALO} font-size="${fs}" font-family="Arial" font-weight="${isHL(p) ? "bold" : "normal"}">${LABEL_KORT[p] || p}</text>`;
    })
    .join("\n");
}

function nederlandKaartSvg(highlight = null) {
  return `<svg viewBox="0 0 280 320">
<rect x="0" y="0" width="280" height="320" fill="${COLORS.paper}"/>
<text x="140" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">12 provincies van Nederland</text>
${provLaag(highlight)}
<text x="36" y="150" fill="${COLORS.water}" font-size="9" font-family="Arial" font-style="italic">Noordzee</text>
<text x="144" y="96" text-anchor="middle" fill="${COLORS.water}" font-size="6.5" font-family="Arial" font-style="italic" ${HALO}>IJsselmeer</text>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.water}" font-size="6.5" font-family="Arial" font-style="italic">Waddenzee</text>
<text x="140" y="305" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">Vereenvoudigde kaart · data CBS/Kadaster (CC-BY)</text>
</svg>`;
}

function silhouet(opacity = 0.2) {
  return Object.values(PROV_PATHS)
    .map((d) => `<path d="${d}" fill="rgba(93,156,236,${opacity})"/>`)
    .join("");
}

function steden5Svg() {
  const stad = (nr, punt, r, labelX, labelY, anchor = "start") => {
    const [x, y] = KAART_PUNTEN[punt];
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${COLORS.city}" stroke="#fff" stroke-width="1"/>
<text x="${labelX}" y="${labelY}" text-anchor="${anchor}" fill="#fff" ${HALO} font-size="8.5" font-family="Arial" font-weight="bold">${nr}</text>`;
  };
  return `<svg viewBox="0 0 280 320">
<rect x="0" y="0" width="280" height="320" fill="${COLORS.paper}"/>
<text x="140" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">5 grootste steden van Nederland</text>
${silhouet(0.22)}
${stad("1. Amsterdam", "Amsterdam", 5.5, 108, 132, "end")}
${stad("2. Rotterdam", "Rotterdam", 5.5, 84, 192, "end")}
${stad("3. Den Haag", "DenHaag", 4.5, 74, 161, "end")}
${stad("4. Utrecht", "Utrecht", 4.5, 139, 161)}
${stad("5. Eindhoven", "Eindhoven", 4.5, 159, 229)}
<text x="16" y="252" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">Top 5 (inwoners):</text>
<text x="16" y="266" fill="${COLORS.muted}" font-size="8" font-family="Arial">1. Amsterdam ~880.000 · 2. Rotterdam ~660.000 (haven)</text>
<text x="16" y="278" fill="${COLORS.muted}" font-size="8" font-family="Arial">3. Den Haag ~560.000 (regering) · 4. Utrecht ~365.000</text>
<text x="16" y="290" fill="${COLORS.muted}" font-size="8" font-family="Arial">5. Eindhoven ~240.000 (techniek)</text>
</svg>`;
}

function rivierenSvg() {
  // Rivierlopen door échte ankerpunten (Lobith, Arnhem, Den Bosch, Venlo …).
  const P = KAART_PUNTEN;
  return `<svg viewBox="0 0 280 320">
<rect x="0" y="0" width="280" height="320" fill="${COLORS.paper}"/>
<text x="140" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Belangrijke wateren in Nederland</text>
${silhouet(0.13)}
<text x="30" y="150" fill="${COLORS.water}" font-size="10" font-family="Arial" font-weight="bold" font-style="italic">Noordzee</text>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.water}" font-size="7.5" font-family="Arial" font-style="italic">Waddenzee</text>

<!-- IJsselmeer (tussen N-Holland, Friesland en Flevoland) -->
<path d="M136 76 L162 75 L169 87 L159 101 L153 114 L146 115 L139 99 L135 84 Z" fill="${COLORS.water}" opacity="0.5"/>
<text x="150" y="94" text-anchor="middle" fill="#fff" ${HALO} font-size="6.5" font-family="Arial">IJsselmeer</text>

<!-- Rijn: binnenkomst bij Lobith, splitst in Waal (hoofdstroom) en IJssel -->
<path d="M${P.Lobith[0] + 8} ${P.Lobith[1] + 2} L${P.Lobith[0]} ${P.Lobith[1]}" stroke="${COLORS.water}" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M${P.Lobith[0]} ${P.Lobith[1]} C ${P.Nijmegen[0]} ${P.Nijmegen[1] + 3}, 150 194, ${P.DenBosch[0]} ${P.DenBosch[1] - 6} C 118 192, 100 187, ${P.MaasMond[0]} ${P.MaasMond[1]}" stroke="${COLORS.water}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
<path d="M${P.IJsselKop[0]} ${P.IJsselKop[1]} C 184 156, 181 138, ${P.IJsselMond[0]} ${P.IJsselMond[1]}" stroke="${COLORS.water}" stroke-width="2" fill="none" stroke-linecap="round"/>

<!-- Maas: vanuit Zuid-Limburg via Venlo en Den Bosch naar zee -->
<path d="M${P.MaasZuid[0]} ${P.MaasZuid[1]} C 176 268, ${P.Venlo[0]} ${P.Venlo[1] + 10}, ${P.Venlo[0] - 2} ${P.Venlo[1]} C 188 214, 165 206, ${P.DenBosch[0]} ${P.DenBosch[1]} C 120 199, 102 192, ${P.MaasMond[0]} ${P.MaasMond[1] + 3}" stroke="${COLORS.water}" stroke-width="2.2" fill="none" stroke-linecap="round"/>

<!-- Westerschelde (zeearm in Zeeland) -->
<path d="M${P.WesterscheldeWest[0]} ${P.WesterscheldeWest[1]} C 48 227, 64 229, ${P.WesterscheldeOost[0]} ${P.WesterscheldeOost[1]}" stroke="${COLORS.water}" stroke-width="3.5" fill="none" opacity="0.75" stroke-linecap="round"/>

<text x="${P.Lobith[0] - 3}" y="${P.Lobith[1] - 6}" fill="${COLORS.warm}" ${HALO} font-size="8" font-family="Arial" font-weight="bold">Rijn</text>
<text x="146" y="204" fill="${COLORS.warm}" ${HALO} font-size="8" font-family="Arial" font-weight="bold">Waal</text>
<text x="${P.IJsselMond[0] + 8}" y="${P.IJsselMond[1] + 22}" fill="${COLORS.warm}" ${HALO} font-size="8" font-family="Arial" font-weight="bold">IJssel</text>
<text x="${P.Venlo[0] + 4}" y="${P.Venlo[1] - 4}" fill="${COLORS.warm}" ${HALO} font-size="8" font-family="Arial" font-weight="bold">Maas</text>
<text x="44" y="240" fill="${COLORS.warm}" ${HALO} font-size="8" font-family="Arial" font-weight="bold">Schelde</text>

<text x="140" y="303" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">3 belangrijkste rivieren: Rijn · Maas · Waal</text>
<text x="140" y="314" text-anchor="middle" fill="${COLORS.muted}" font-size="7.5" font-family="Arial">(Waal is de grootste aftakking van de Rijn)</text>
</svg>`;
}

const steps = [
  {
    title: "Wat is Nederland?",
    explanation: "**Nederland** is ons land — een klein landje in West-Europa aan de Noordzee. Officieel: **Koninkrijk der Nederlanden** (Nederland + Aruba + Curaçao + Sint-Maarten + 3 BES-eilanden in de Cariben).\n\n**Belangrijke feiten**:\n• **Hoofdstad**: Amsterdam (waar de koning werkt: Den Haag)\n• **Inwoners**: ruim 18 miljoen\n• **Oppervlakte**: ~41.500 km²\n• **Buurlanden**: Duitsland (oost) + België (zuid) + Noordzee (west + noord)\n• **Hoogste punt**: Vaalserberg in Limburg (322 m)\n• **Laagste punt**: ~7 m onder zeeniveau (Zuidplaspolder bij Rotterdam)\n• **Munt**: euro (€)\n• **Taal**: Nederlands (in Friesland ook Fries)\n• **Koning**: Willem-Alexander (sinds 2013)\n\n**Speciaal aan Nederland**:\n• **Heel plat** — bijna alles ligt onder of vlak boven zeeniveau\n• **Veel water**: rivieren, kanalen, meren, polders\n• **Dichtbevolkt** — een van de drukste landen ter wereld\n• **26% van het land ligt onder zeeniveau** — dijken en gemalen houden het droog\n• **Bekend om**: tulpen, klompen, molens, kaas, fietsen, voetbal\n\nIn dit pad leer je de **12 provincies**, hun **hoofdsteden**, de grote **rivieren** en **steden** van Nederland.",
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
          niveaus: { basis: "Amsterdam.", simpeler: "Hoofdstad NL = Amsterdam (regering wel in Den Haag).", nogSimpeler: "Amsterdam" },
        },
      },
      {
        q: "Hoeveel provincies heeft Nederland?",
        options: ["12","11","13","16"],
        answer: 0,
        wrongHints: [null,"Net iets meer.","Net iets minder.","Veel te veel — denk aan ons landje."],
        uitlegPad: {
          stappen: [{ titel: "12 provincies", tekst: "Nederland heeft 12 provincies. Vanaf noord: Groningen, Friesland, Drenthe → Overijssel, Flevoland → Gelderland, Utrecht → Noord-Holland, Zuid-Holland, Zeeland → Noord-Brabant, Limburg." }],
          woorden: [{ woord: "provincie", uitleg: "Bestuurlijke regio binnen een land. Elk met eigen hoofdstad + provinciaal bestuur (Provinciale Staten)." }],
          theorie: "12 provincies sinds 1986 — toen kwam Flevoland erbij als jongste provincie. Daarvoor 11 provincies. Examen-val: 11 was vroeger correct, NU 12.",
          voorbeelden: [{ type: "groei", tekst: "Vroeger had NL 11 provincies. Flevoland (1986) was 12e — op nieuw land gewonnen uit voormalige Zuiderzee." }],
          basiskennis: [{ onderwerp: "Niet andere getallen", uitleg: "11 = voor 1986. 13/16 = onzin (Duitsland 16 deelstaten, België 10 provincies)." }],
          niveaus: { basis: "12.", simpeler: "NL heeft 12 provincies (Flevoland sinds 1986 erbij).", nogSimpeler: "12" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Met welk geld betalen we nu in Nederland?",
        options: ["De euro", "De gulden", "De dollar", "Het pond"],
        answer: 0,
        wrongHints: [
          null,
          "Dat geld gebruikten we vroeger. Welk geld gebruik je nu in de winkel?",
          null,
          "Dit geld hoort bij Engeland.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Euro = ons geld",
              tekst: "In Nederland betaal je met de **euro** (€). Veel andere landen in Europa gebruiken ook de euro.",
            },
          ],
          woorden: [
            {
              woord: "euro",
              uitleg: "Het geld dat we nu in Nederland gebruiken. Teken: €.",
            },
          ],
          theorie: "Elk land heeft een munt (soort geld). In Nederland is dat de euro.",
          voorbeelden: [
            {
              type: "vergelijk",
              tekst: "In Nederland en België betaal je allebei met de euro.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Munt",
              uitleg: "Een munt is het soort geld dat een land gebruikt.",
            },
          ],
          niveaus: {
            basis: "De euro.",
            simpeler: "Ons geld heet de euro (€).",
            nogSimpeler: "Euro",
          },
        },
      },
      {
        q: "Welk buurland ligt aan de **oostkant** van Nederland?",
        options: ["Duitsland", "België", "Frankrijk", "Engeland"],
        answer: 0,
        wrongHints: [
          null,
          "Dit buurland ligt wel tegen Nederland aan, maar aan een andere kant.",
          null,
          "Tussen Nederland en dit land ligt de zee.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Duitsland = oost",
              tekst: "Nederland heeft twee buurlanden: **Duitsland** ligt aan de **oostkant**, **België** aan de **zuidkant**. Aan de west- en noordkant ligt de Noordzee.",
            },
          ],
          woorden: [
            {
              woord: "oost",
              uitleg: "De kant waar de zon opkomt. Op de kaart: rechts.",
            },
          ],
          theorie: "Op een kaart is noord boven, zuid onder, west links en oost rechts.",
          voorbeelden: [
            {
              type: "kaart",
              tekst: "Kijk op de kaart: rechts van Nederland ligt Duitsland, onder Nederland ligt België.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Buurland",
              uitleg: "Een land dat aan jouw land grenst.",
            },
          ],
          niveaus: {
            basis: "Duitsland.",
            simpeler: "Oost (rechts op de kaart) = Duitsland.",
            nogSimpeler: "Duitsland",
          },
        },
      },
      {
        q: "Welke zee ligt aan de **westkant** van Nederland?",
        options: ["De Noordzee", "De Oostzee", "De Middellandse Zee", "De Zwarte Zee"],
        answer: 0,
        wrongHints: [null, "Let op de naam: ligt deze zee aan de westkant?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Noordzee = westkant",
              tekst: "Aan de **west**- en **noordkant** van Nederland ligt de **Noordzee**. Daar liggen ook onze stranden.",
            },
          ],
          woorden: [
            {
              woord: "Noordzee",
              uitleg: "De grote zee aan de west- en noordkant van Nederland.",
            },
          ],
          theorie: "Nederland ligt aan de Noordzee. De andere zeeën liggen veel verder weg.",
          voorbeelden: [
            {
              type: "kaart",
              tekst: "Ga je in Nederland naar het strand, dan kijk je uit over de Noordzee.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "West",
              uitleg: "Op een kaart is west links.",
            },
          ],
          niveaus: {
            basis: "De Noordzee.",
            simpeler: "Strand in Nederland = Noordzee.",
            nogSimpeler: "Noordzee",
          },
        },
      },
      {
        q: "Wie is nu de **koning** van Nederland?",
        options: ["Willem-Alexander", "Willem van Oranje", "Filip", "Karel de Grote"],
        answer: 0,
        wrongHints: [
          null,
          "Deze man leefde lang geleden. Wie is het nu?",
          "Dit is de koning van een buurland.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Koning Willem-Alexander",
              tekst: "De koning van Nederland is **Willem-Alexander**. Hij is koning sinds **2013**. De koning werkt in **Den Haag**.",
            },
          ],
          woorden: [
            {
              woord: "koning",
              uitleg: "Het hoofd van een koninkrijk, zoals Nederland.",
            },
          ],
          theorie: "Nederland is een koninkrijk: er is een koning. De regering bestuurt het land.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "Filip is de koning van België, niet van Nederland.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Koninkrijk",
              uitleg: "Een land met een koning of koningin.",
            },
          ],
          niveaus: {
            basis: "Willem-Alexander.",
            simpeler: "Onze koning = Willem-Alexander.",
            nogSimpeler: "Willem-Alexander",
          },
        },
      },
      {
        q: "Wat zorgt ervoor dat de **lage** delen van Nederland droog blijven?",
        options: ["Dijken en gemalen", "Bergen en rotsen", "Bossen en heide", "Bruggen en tunnels"],
        answer: 0,
        wrongHints: [
          null,
          "Heeft Nederland veel van deze? Denk aan hoe plat het land is.",
          null,
          "Hier ga je over of onder het water door. Houden ze het water weg?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Dijken en gemalen",
              tekst: "Een groot deel van Nederland ligt **onder zeeniveau**. **Dijken** houden het water tegen. **Gemalen** pompen het water weg.",
            },
          ],
          woorden: [
            {
              woord: "gemaal",
              uitleg: "Een gebouw met pompen dat water uit een laag stuk land wegpompt.",
            },
          ],
          theorie: "Zonder dijken en gemalen zou een groot deel van Nederland onder water staan.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Dijk = muur van aarde tegen het water. Gemaal = pomp die water wegpompt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Zeeniveau",
              uitleg: "De hoogte van het water in de zee. Land onder zeeniveau ligt lager dan de zee.",
            },
          ],
          niveaus: {
            basis: "Dijken en gemalen.",
            simpeler: "Dijk houdt water tegen, gemaal pompt water weg.",
            nogSimpeler: "Dijken + gemalen",
          },
        },
      },
      {
        q: "Welke zin past bij **Nederland**?",
        options: [
          "Het land is heel plat.",
          "Het land heeft hoge bergen.",
          "Het land ligt in Zuid-Europa.",
          "Het land heeft bijna geen water.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Denk aan de hoogste 'berg' van Nederland. Is die echt hoog?",
          null,
          "Denk aan de rivieren, meren en kanalen.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Nederland is plat",
              tekst: "Nederland is **heel plat**. Het ligt in **West-Europa** aan de Noordzee en heeft **veel water**: rivieren, kanalen, meren en polders.",
            },
          ],
          woorden: [
            {
              woord: "plat",
              uitleg: "Zonder bergen of hoge heuvels.",
            },
          ],
          theorie: "Bijna heel Nederland ligt onder of net boven zeeniveau. Alleen in Limburg zijn echte heuvels.",
          voorbeelden: [
            {
              type: "vergelijk",
              tekst: "In Zwitserland zijn hoge bergen. In Nederland niet.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "West-Europa",
              uitleg: "Het westelijke deel van Europa, waar Nederland en België liggen.",
            },
          ],
          niveaus: {
            basis: "Het land is heel plat.",
            simpeler: "Nederland = plat en veel water.",
            nogSimpeler: "Plat",
          },
        },
      },
    ],
  },
  {
    title: "De 12 provincies",
    explanation: "Nederland heeft **12 provincies**. Onthoud ze van **noord naar zuid**:\n\n**Noord** *(boven)*\n1. **Groningen** — uiterste noordoosten, gas-provincie\n2. **Friesland** — Friese taal, meren, schaatsen (Elfstedentocht)\n3. **Drenthe** — hunebedden, bossen\n\n**Midden**\n4. **Overijssel** — IJsselmeer-rand\n5. **Flevoland** — jongste provincie (1986), volledig op nieuw land\n6. **Gelderland** — grootste provincie qua oppervlak\n7. **Utrecht** — kleinste (op Flevoland na)\n\n**West** *(aan zee)*\n8. **Noord-Holland** — Amsterdam, Texel\n9. **Zuid-Holland** — Rotterdam, Den Haag\n10. **Zeeland** — eilanden + Deltawerken\n\n**Zuid**\n11. **Noord-Brabant** — Eindhoven, carnaval\n12. **Limburg** — heuvels, enige écht hoge stuk van NL\n\n**Geheugentrucje** ('Holland Heeft Beste Friese...'):\nEen makkelijke manier is steden in elke provincie kennen — die plaats je dan in je hoofd.\n\n**Bijzonderheden**:\n• **Flevoland** is **het nieuwst** — op land dat in de jaren '50-'60 uit de zee is gewonnen. Vroeger was dit allemaal **Zuiderzee**.\n• **Friesland** heeft een **eigen taal** (Fries) — officieel erkend als tweede landstaal.\n• **Limburg** heeft als enige echte **heuvels** — de hoogste 'berg' van NL ligt hier (Vaalserberg, 322 m).",
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
          niveaus: { basis: "Flevoland (1986).", simpeler: "Flevoland = jongste, op nieuw land uit zee gewonnen, sinds 1986.", nogSimpeler: "Flevoland" },
        },
      },
      {
        q: "In welke provincie ligt de **Vaalserberg** (hoogste punt van NL)?",
        options: ["Limburg","Drenthe","Gelderland","Friesland"],
        answer: 0,
        wrongHints: [null,"Drenthe is plat.","Gelderland heeft de Veluwe maar daar is de hoogste maar ~110m.","Friesland is ook plat."],
        uitlegPad: {
          stappen: [{ titel: "Vaalserberg — 322 m, Limburg", tekst: "Vaalserberg = 322 m hoog. Ligt in Limburg, uiterste zuid-oosten van NL. Tegelijk 'Drielandenpunt' — hier raken NL, België én Duitsland elkaar. Hoogste punt NL — niet groots als alpen-berg, maar voor plat NL wel iets bijzonders." }],
          woorden: [{ woord: "Vaalserberg", uitleg: "322 m hoog. Bij dorp Vaals, Limburg." }, { woord: "Drielandenpunt", uitleg: "Plek waar 3 landen elkaar raken. Toerisme-trekker." }],
          theorie: "Limburg is enige NL-provincie met echte heuvels. Reden: Limburg ligt op uitloper van Belgische Ardennen — daar zit gesteente, niet zand zoals rest van NL. Vandaar relief.",
          voorbeelden: [{ type: "vergelijk", tekst: "Vaalserberg 322 m. Mont Blanc (Frankrijk) 4810 m — 15× hoger. Maar voor het platte NL is 322 m wel iets." }],
          basiskennis: [{ onderwerp: "Niet andere provincies", uitleg: "Drenthe = plat, alleen kleine heuvels. Veluwe Gelderland = max 110 m (laag). Friesland = plat." }],
          niveaus: { basis: "Limburg.", simpeler: "Vaalserberg (322 m, hoogste NL) ligt in Limburg, zuid-oost.", nogSimpeler: "Limburg" },
        },
      },
      {
        q: "Welke provincie heeft naast Nederlands een **tweede officiële taal**?",
        options: ["Friesland","Limburg","Zeeland","Utrecht"],
        answer: 0,
        wrongHints: [null,"Het Limburgs is wel erkend als streektaal, maar het Fries is een officiële taal — net als het Nederlands.","Zeeland heeft ook een dialect, niet officieel.","Utrecht heeft alleen Nederlands."],
        uitlegPad: {
          stappen: [{ titel: "Fries = officiële landstaal", tekst: "Friesland heeft naast Nederlands ook FRIES als officiële taal (wettelijk erkend). Fries-sprekers (~470.000) kunnen zelfs in Friesland naar Friestalige scholen, kranten lezen in Fries. Andere provincies hebben een streektaal of dialect (Limburgs, Zeeuws) — dat is geen officiële taal." }],
          woorden: [{ woord: "Fries", uitleg: "Aparte taal (geen NL-dialect). Het is de taal die het meest verwant is aan het Engels." }, { woord: "dialect vs taal", uitleg: "Dialect = variant van een taal. Taal = officieel apart. Fries = TAAL (politiek besluit, niet pure linguïstiek)." }],
          theorie: "NL kent 2 officiële talen: Nederlands (overal) + Fries (Friesland). Verschil met dialecten: officiële erkenning = recht op gebruik in rechtbank, school, bestuur.",
          voorbeelden: [{ type: "fries", tekst: "Nederlands 'goedemorgen' → Fries 'goeie moarn'. Lijkt op Engels 'good morning'. Echt aparte taal." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Limburgs = wel erkend als 'streektaal' maar geen officiële taal. Zeeuws = dialect. Verschil: minder gebruik in officiële context." }],
          niveaus: { basis: "Friesland (Fries).", simpeler: "Friesland heeft Fries als 2e officiële taal van NL.", nogSimpeler: "Friesland" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "In welke provincie vind je veel **hunebedden**?",
        options: ["Drenthe", "Zeeland", "Flevoland", "Noord-Holland"],
        answer: 0,
        wrongHints: [null, null, "Deze provincie is heel jong. Hunebedden zijn heel oud.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Hunebedden in Drenthe",
              tekst: "**Drenthe** is bekend om de **hunebedden** en de bossen. Drenthe ligt in het noorden.",
            },
          ],
          woorden: [
            {
              woord: "hunebed",
              uitleg: "Een oud graf van grote zware stenen, heel lang geleden gemaakt.",
            },
          ],
          theorie: "Koppel elke provincie aan iets bekends: Drenthe = hunebedden, Friesland = Elfstedentocht, Zeeland = Deltawerken.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "Flevoland is pas kort geleden uit de zee gewonnen. Daar kunnen dus geen oude hunebedden liggen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Noorden",
              uitleg: "Groningen, Friesland en Drenthe zijn de provincies in het noorden.",
            },
          ],
          niveaus: {
            basis: "Drenthe.",
            simpeler: "Hunebedden = Drenthe.",
            nogSimpeler: "Drenthe",
          },
        },
      },
      {
        q: "Welke provincie is bekend om **carnaval** en de stad **Eindhoven**?",
        options: ["Noord-Brabant", "Friesland", "Drenthe", "Flevoland"],
        answer: 0,
        wrongHints: [null, "Deze provincie ligt in het noorden. Waar ligt Eindhoven?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Noord-Brabant",
              tekst: "**Noord-Brabant** ligt in het **zuiden**. Eindhoven ligt in Noord-Brabant en er wordt veel carnaval gevierd.",
            },
          ],
          woorden: [
            {
              woord: "carnaval",
              uitleg: "Een feest met verkleden en optochten, vooral in het zuiden van Nederland.",
            },
          ],
          theorie: "Zuid = Noord-Brabant en Limburg. Daar is carnaval een groot feest.",
          voorbeelden: [
            {
              type: "kaart",
              tekst: "Eindhoven ligt in het zuiden, in Noord-Brabant.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Zuiden",
              uitleg: "Noord-Brabant en Limburg zijn de provincies in het zuiden.",
            },
          ],
          niveaus: {
            basis: "Noord-Brabant.",
            simpeler: "Eindhoven + carnaval = Noord-Brabant.",
            nogSimpeler: "Noord-Brabant",
          },
        },
      },
      {
        q: "In welke provincie liggen **Rotterdam** en **Den Haag**?",
        options: ["Zuid-Holland", "Noord-Holland", "Utrecht", "Zeeland"],
        answer: 0,
        wrongHints: [null, "Daar ligt Amsterdam. Liggen Rotterdam en Den Haag daar ook?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zuid-Holland",
              tekst: "**Rotterdam** en **Den Haag** liggen allebei in **Zuid-Holland**. Amsterdam ligt in Noord-Holland.",
            },
          ],
          woorden: [
            {
              woord: "Zuid-Holland",
              uitleg: "Provincie aan zee in het westen, met Rotterdam en Den Haag.",
            },
          ],
          theorie: "Noord-Holland = Amsterdam. Zuid-Holland = Rotterdam en Den Haag.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "Niet verwarren: Amsterdam ligt in Noord-Holland, Rotterdam in Zuid-Holland.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Westen",
              uitleg: "Noord-Holland, Zuid-Holland en Zeeland liggen aan zee in het westen.",
            },
          ],
          niveaus: {
            basis: "Zuid-Holland.",
            simpeler: "Rotterdam + Den Haag = Zuid-Holland.",
            nogSimpeler: "Zuid-Holland",
          },
        },
      },
      {
        q: "Welke drie provincies liggen in het **noorden** van Nederland?",
        options: [
          "Groningen, Friesland en Drenthe",
          "Zeeland, Limburg en Utrecht",
          "Noord-Holland, Zuid-Holland en Zeeland",
          "Noord-Brabant, Limburg en Gelderland",
        ],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Deze drie liggen aan zee, maar in het westen.",
          "Hier zitten twee provincies uit het zuiden bij.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Het noorden",
              tekst: "In het **noorden** liggen **Groningen**, **Friesland** en **Drenthe**.",
            },
          ],
          woorden: [
            {
              woord: "noorden",
              uitleg: "Op de kaart: boven.",
            },
          ],
          theorie: "Noord: Groningen, Friesland, Drenthe. West: Noord-Holland, Zuid-Holland, Zeeland. Zuid: Noord-Brabant, Limburg.",
          voorbeelden: [
            {
              type: "kaart",
              tekst: "Kijk bovenaan de kaart van Nederland: daar liggen Groningen, Friesland en Drenthe.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Windrichtingen",
              uitleg: "Noord is boven, zuid is onder op de kaart.",
            },
          ],
          niveaus: {
            basis: "Groningen, Friesland en Drenthe.",
            simpeler: "Noorden = Groningen, Friesland, Drenthe.",
            nogSimpeler: "Groningen, Friesland, Drenthe",
          },
        },
      },
      {
        q: "Welke provincie ligt het meest in het **zuiden**?",
        options: ["Limburg", "Groningen", "Friesland", "Flevoland"],
        answer: 0,
        wrongHints: [
          null,
          "Deze provincie ligt juist helemaal bovenaan.",
          null,
          "Deze provincie ligt in het midden.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Limburg = zuid",
              tekst: "**Limburg** ligt helemaal in het **zuiden** van Nederland. Daar zijn ook de enige echte heuvels.",
            },
          ],
          woorden: [
            {
              woord: "zuiden",
              uitleg: "Op de kaart: onder.",
            },
          ],
          theorie: "Zuid-provincies: Noord-Brabant en Limburg. Limburg loopt het verst naar beneden door.",
          voorbeelden: [
            {
              type: "kaart",
              tekst: "Onderaan de kaart van Nederland zie je Limburg, tussen België en Duitsland.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Zuiden",
              uitleg: "Noord-Brabant en Limburg zijn de provincies in het zuiden.",
            },
          ],
          niveaus: {
            basis: "Limburg.",
            simpeler: "Helemaal onderaan = Limburg.",
            nogSimpeler: "Limburg",
          },
        },
      },
      {
        q: "In welke provincie hoort de **Elfstedentocht** thuis?",
        options: ["Friesland", "Limburg", "Zeeland", "Utrecht"],
        answer: 0,
        wrongHints: [
          null,
          "In deze provincie zijn juist heuvels. De Elfstedentocht gaat over het ijs.",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Elfstedentocht = Friesland",
              tekst: "**Friesland** is bekend om meren, **schaatsen** en de **Elfstedentocht**. Die tocht gaat langs elf Friese steden.",
            },
          ],
          woorden: [
            {
              woord: "Elfstedentocht",
              uitleg: "Een lange schaatstocht langs elf steden in Friesland. Alleen als het heel hard vriest.",
            },
          ],
          theorie: "Friesland = Fries (eigen taal), meren, schaatsen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Elf steden + schaatsen = Friesland.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Friesland",
              uitleg: "Provincie in het noorden met een eigen taal: het Fries.",
            },
          ],
          niveaus: {
            basis: "Friesland.",
            simpeler: "Elfstedentocht = Friesland.",
            nogSimpeler: "Friesland",
          },
        },
      },
    ],
  },
  {
    title: "Hoofdsteden — deel 1 (Noord + Midden)",
    explanation: "Elke provincie heeft een **hoofdstad** waar het provinciale bestuur zit. Hier de eerste 7:\n\n| Provincie | Hoofdstad |\n|---|---|\n| Groningen | **Groningen** *(stad heeft zelfde naam)* |\n| Friesland | **Leeuwarden** |\n| Drenthe | **Assen** |\n| Overijssel | **Zwolle** |\n| Flevoland | **Lelystad** |\n| Gelderland | **Arnhem** |\n| Utrecht | **Utrecht** *(stad = provincie)* |\n\n**Trucjes om te onthouden**:\n• **Provincie + hoofdstad zelfde naam**: Groningen, Utrecht. Makkelijk.\n• **Lelystad in Flevoland**: 'Lely' verwijst naar **Cornelis Lely** — de man die het plan maakte voor de Zuiderzeewerken (waardoor Flevoland kon ontstaan).\n• **Arnhem in Gelderland**: bekend van de **Slag om Arnhem** (WO2, 1944) — 'A Bridge Too Far'.\n• **Leeuwarden**: denk aan de **leeuw** — die staat in het wapen van de stad.\n\n**Zwolle** vs **Assen**: heel makkelijk te verwarren. Onthoud:\n• **A**ssen → **A** komt eerder in het alfabet → noordelijker (Drenthe ligt boven Overijssel).\n• Of: **Z**wolle → **Z** = laatste letter, dus zuidelijker dan Drenthe.\n\nNiet helemaal kloppend trucje, maar werkt voor onthouden.",
    svg: nederlandKaartSvg(),
    checks: [
      {
        q: "Wat is de hoofdstad van **Friesland**?",
        options: ["Leeuwarden","Groningen","Assen","Zwolle"],
        answer: 0,
        wrongHints: [null,"Groningen is in dezelfde noordelijke regio maar andere provincie.","Assen is hoofdstad van Drenthe.","Zwolle is in Overijssel."],
        uitlegPad: {
          stappen: [{ titel: "Leeuwarden = hoofdstad Friesland", tekst: "Leeuwarden ligt in Friesland (noordwest NL). Ezelsbruggetje: LEEUW-arden — de stad heeft een leeuw in haar wapen. Bekend van Elfstedentocht (schaatsen rond 11 Friese steden), Mata Hari (spionne), Pier Pander (kunstenaar)." }],
          woorden: [{ woord: "Leeuwarden", uitleg: "Hoofdstad Friesland. ~125.000 inwoners. Bekend van de Oldehove (scheve toren)." }],
          theorie: "Trucje noord-NL: Groningen → Groningen (zelfde). Friesland → LEEUWarden. Drenthe → Assen. Koppel ze: Leeuwarden-Friesland, Assen-Drenthe, Zwolle-Overijssel.",
          voorbeelden: [{ type: "verwarring", tekst: "Niet verwarren met: Groningen (stad+provincie naam). Assen = Drenthe. Zwolle = Overijssel." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Groningen stad is in Groningen provincie. Assen in Drenthe. Zwolle in Overijssel." }],
          niveaus: { basis: "Leeuwarden.", simpeler: "Friesland → Leeuwarden (LEEUW-warden).", nogSimpeler: "Leeuwarden" },
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
          niveaus: { basis: "Flevoland.", simpeler: "Lelystad = Flevoland, jongste hoofdstad NL, vernoemd naar Lely.", nogSimpeler: "Flevoland" },
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
          niveaus: { basis: "Arnhem.", simpeler: "Gelderland → Arnhem (niet Nijmegen!).", nogSimpeler: "Arnhem" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is de hoofdstad van **Drenthe**?",
        options: ["Assen", "Emmen", "Zwolle", "Leeuwarden"],
        answer: 0,
        wrongHints: [
          null,
          "Deze stad ligt wel in Drenthe, maar is niet de hoofdstad.",
          "Deze stad is de hoofdstad van Overijssel.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Assen = Drenthe",
              tekst: "De hoofdstad van **Drenthe** is **Assen**. Daar zit het bestuur van de provincie.",
            },
          ],
          woorden: [
            {
              woord: "Assen",
              uitleg: "Hoofdstad van Drenthe.",
            },
          ],
          theorie: "Noord-rij: Groningen → Groningen, Friesland → Leeuwarden, Drenthe → Assen.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "Niet verwarren: Zwolle is de hoofdstad van Overijssel, niet van Drenthe.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Hoofdstad",
              uitleg: "De stad waar het bestuur van de provincie zit.",
            },
          ],
          niveaus: {
            basis: "Assen.",
            simpeler: "Drenthe → Assen.",
            nogSimpeler: "Assen",
          },
        },
      },
      {
        q: "Bij welke **twee** provincies heeft de hoofdstad **dezelfde naam** als de provincie?",
        options: [
          "Groningen en Utrecht",
          "Groningen en Friesland",
          "Utrecht en Gelderland",
          "Drenthe en Flevoland",
        ],
        answer: 0,
        wrongHints: [null, "Wat is de hoofdstad van Friesland? Heet die ook Friesland?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zelfde naam",
              tekst: "Bij **Groningen** en **Utrecht** heten provincie en hoofdstad hetzelfde. De stad Groningen ligt in de provincie Groningen, de stad Utrecht in de provincie Utrecht.",
            },
          ],
          woorden: [
            {
              woord: "provinciehoofdstad",
              uitleg: "De stad waar het bestuur van een provincie zit.",
            },
          ],
          theorie: "Alleen Groningen en Utrecht hebben een hoofdstad met dezelfde naam. Bij de andere 10 is de naam anders.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Friesland → Leeuwarden, Gelderland → Arnhem, Drenthe → Assen, Flevoland → Lelystad.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Makkelijk onthouden",
              uitleg: "Twee 'gratis' hoofdsteden: Groningen en Utrecht.",
            },
          ],
          niveaus: {
            basis: "Groningen en Utrecht.",
            simpeler: "Zelfde naam: Groningen, Utrecht.",
            nogSimpeler: "Groningen + Utrecht",
          },
        },
      },
      {
        q: "Naar wie of wat verwijst **'Lely'** in de naam **Lelystad**?",
        options: [
          "Naar de man van het plan voor de Zuiderzeewerken",
          "Naar een bloem die daar heel veel groeit",
          "Naar een rivier die door Flevoland stroomt",
          "Naar een koning die daar vroeger woonde",
        ],
        answer: 0,
        wrongHints: [null, "De naam lijkt op een bloem. Maar gaat het echt over een bloem?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Cornelis Lely",
              tekst: "Lelystad is genoemd naar **Cornelis Lely**. Hij maakte het plan voor de **Zuiderzeewerken**. Daardoor kon **Flevoland** ontstaan.",
            },
          ],
          woorden: [
            {
              woord: "Zuiderzeewerken",
              uitleg: "Het grote werk waarbij de Zuiderzee werd afgesloten en er nieuw land werd gemaakt.",
            },
          ],
          theorie: "Lelystad is de hoofdstad van Flevoland, de provincie op nieuw land uit de zee.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Lely maakte het plan → nieuw land Flevoland → hoofdstad Lelystad.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Flevoland",
              uitleg: "De jongste provincie, op land dat vroeger zee was.",
            },
          ],
          niveaus: {
            basis: "Naar Cornelis Lely.",
            simpeler: "Lely = de man van het plan voor nieuw land.",
            nogSimpeler: "Cornelis Lely",
          },
        },
      },
    ],
  },
  {
    title: "Hoofdsteden — deel 2 (West + Zuid)",
    explanation: "Hier de andere 5 hoofdsteden:\n\n| Provincie | Hoofdstad |\n|---|---|\n| Noord-Holland | **Haarlem** *(let op: niet Amsterdam!)* |\n| Zuid-Holland | **Den Haag** |\n| Zeeland | **Middelburg** |\n| Noord-Brabant | **'s-Hertogenbosch** *(of: Den Bosch)* |\n| Limburg | **Maastricht** |\n\n**Belangrijke valkuil**: **Amsterdam** is wel de **hoofdstad van Nederland** maar **NIET de hoofdstad van Noord-Holland**! De provincie Noord-Holland heeft **Haarlem** als hoofdstad. Wordt vaak gevraagd op het examen: \"Welke stad is hoofdstad van Noord-Holland?\" → Haarlem, niet Amsterdam.\n\n**Hetzelfde bij Zuid-Holland**: Rotterdam is groot maar niet de hoofdstad. **Den Haag** is dat.\n\n**'s-Hertogenbosch / Den Bosch**\n• Officiële naam: 's-Hertogenbosch (= 'het bos van de hertog').\n• Dagelijks gebruik: Den Bosch.\n• Beide goed.\n\n**Maastricht** — ligt **helemaal in het zuiden**, ingeklemd tussen België en Duitsland. Bekend van het **Verdrag van Maastricht** (1992) waarmee de Europese Unie werd opgericht.\n\n**Volledige lijst alle 12** *(om te oefenen)*:\n1. Groningen — Groningen\n2. Friesland — Leeuwarden\n3. Drenthe — Assen\n4. Overijssel — Zwolle\n5. Flevoland — Lelystad\n6. Gelderland — Arnhem\n7. Utrecht — Utrecht\n8. Noord-Holland — Haarlem\n9. Zuid-Holland — Den Haag\n10. Zeeland — Middelburg\n11. Noord-Brabant — 's-Hertogenbosch\n12. Limburg — Maastricht",
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
          niveaus: { basis: "Haarlem.", simpeler: "Noord-Holland → HAARLEM (Amsterdam = NL-hoofdstad).", nogSimpeler: "Haarlem" },
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
          voorbeelden: [{ type: "andere Zeeland-steden", tekst: "Vlissingen = grote haven + marine. Goes = Zuid-Beveland. Terneuzen = Zeeuws-Vlaanderen. Allemaal in Zeeland, geen van alle hoofdstad." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Andere Zeeuwse steden zijn groter qua haven (Vlissingen, Terneuzen) maar Middelburg is bestuurlijk hart." }],
          niveaus: { basis: "Middelburg.", simpeler: "Zeeland → Middelburg (historische stad op Walcheren).", nogSimpeler: "Middelburg" },
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
          voorbeelden: [{ type: "ligging", tekst: "Maastricht ligt ruim 200 km van Amsterdam, maar heel dicht bij Luik (België) en Aken (Duitsland). Echt grensstad." }],
          basiskennis: [{ onderwerp: "Niet andere Limburgse", uitleg: "Heerlen = mijngeschiedenis. Roermond = outlet-shopping. Sittard = midden Limburg. Geen hoofdstad." }],
          niveaus: { basis: "Maastricht.", simpeler: "Limburg → Maastricht (zuidelijke grensstad, Verdrag van Maastricht).", nogSimpeler: "Maastricht" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is de hoofdstad van **Zuid-Holland**?",
        options: ["Den Haag", "Rotterdam", "Leiden", "Delft"],
        answer: 0,
        wrongHints: [
          null,
          "Dit is wel de grootste stad van Zuid-Holland. Maar is het de hoofdstad?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Den Haag = Zuid-Holland",
              tekst: "De hoofdstad van **Zuid-Holland** is **Den Haag**. Rotterdam is groter, maar niet de hoofdstad.",
            },
          ],
          woorden: [
            {
              woord: "Den Haag",
              uitleg: "Hoofdstad van Zuid-Holland. Hier zitten ook de regering en de koning.",
            },
          ],
          theorie: "Valkuil: de grootste stad is niet altijd de hoofdstad. Noord-Holland → Haarlem, Zuid-Holland → Den Haag.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "Rotterdam is groot, maar het bestuur van Zuid-Holland zit in Den Haag.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Hoofdstad",
              uitleg: "De stad waar het bestuur van de provincie zit.",
            },
          ],
          niveaus: {
            basis: "Den Haag.",
            simpeler: "Zuid-Holland → Den Haag (niet Rotterdam).",
            nogSimpeler: "Den Haag",
          },
        },
      },
      {
        q: "Wat is de hoofdstad van **Noord-Brabant**?",
        options: ["'s-Hertogenbosch", "Eindhoven", "Tilburg", "Breda"],
        answer: 0,
        wrongHints: [
          null,
          "Dit is een bekende grote stad in Noord-Brabant. Maar zit daar het bestuur?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "'s-Hertogenbosch",
              tekst: "De hoofdstad van **Noord-Brabant** is **'s-Hertogenbosch**. In het dagelijks leven zeggen mensen **Den Bosch**.",
            },
          ],
          woorden: [
            {
              woord: "'s-Hertogenbosch",
              uitleg: "Hoofdstad van Noord-Brabant, ook wel Den Bosch genoemd.",
            },
          ],
          theorie: "Ook hier is de grootste stad niet de hoofdstad: Eindhoven is groter, maar 's-Hertogenbosch is de hoofdstad.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "Eindhoven, Tilburg en Breda liggen ook in Noord-Brabant, maar zijn geen hoofdstad.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Twee namen",
              uitleg: "'s-Hertogenbosch en Den Bosch zijn dezelfde stad.",
            },
          ],
          niveaus: {
            basis: "'s-Hertogenbosch.",
            simpeler: "Noord-Brabant → Den Bosch.",
            nogSimpeler: "'s-Hertogenbosch",
          },
        },
      },
      {
        q: "Hoe noemen de meeste mensen **'s-Hertogenbosch** in het dagelijks leven?",
        options: ["Den Bosch", "Den Haag", "Den Helder", "Hertogstad"],
        answer: 0,
        wrongHints: [null, "Deze naam begint ook met 'Den', maar is een andere stad.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Den Bosch",
              tekst: "**'s-Hertogenbosch** is de officiële naam. Bijna iedereen zegt **Den Bosch**. Beide namen zijn goed.",
            },
          ],
          woorden: [
            {
              woord: "Den Bosch",
              uitleg: "De korte naam van 's-Hertogenbosch, de hoofdstad van Noord-Brabant.",
            },
          ],
          theorie: "'s-Hertogenbosch betekent 'het bos van de hertog'. Kort: Den Bosch.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "Den Haag is de hoofdstad van Zuid-Holland. Den Bosch is de hoofdstad van Noord-Brabant.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Officiële naam",
              uitleg: "De naam die op papier staat. De gewone naam is vaak korter.",
            },
          ],
          niveaus: {
            basis: "Den Bosch.",
            simpeler: "'s-Hertogenbosch = Den Bosch.",
            nogSimpeler: "Den Bosch",
          },
        },
      },
    ],
  },
  {
    title: "Belangrijke wateren",
    explanation: "Nederland is een **waterland**. Hier de belangrijkste wateren:\n\n**Zeeën**\n• **Noordzee** — de grote zee aan de westkant.\n• **Waddenzee** — tussen het vasteland en de Waddeneilanden (Texel, Vlieland, Terschelling, Ameland, Schiermonnikoog).\n• **IJsselmeer** — vroeger de **Zuiderzee**, in 1932 afgesloten met de **Afsluitdijk** → werd een binnenmeer.\n• **Markermeer** — afgesplitst stuk van het IJsselmeer.\n\n**Drie grote rivieren**\n1. **Rijn** — komt uit **Zwitserland** via Duitsland → splitst in NL in:\n   • **Waal** (zuidelijke tak, grootste)\n   • **Lek** (noordelijke tak)\n   • **IJssel** (gaat naar IJsselmeer)\n2. **Maas** — komt uit **Frankrijk** → loopt door België → komt bij Rotterdam in zee.\n3. **Schelde** — komt uit **Frankrijk** → loopt door België → komt bij Antwerpen in zee.\n\nDe **Rijn** (met de **Waal**) en de **Maas** vormen de natuurlijke grens tussen het noorden en zuiden van NL (boven de rivieren = noord, onder = zuid). Een belangrijk cultureel-historisch onderscheid.\n\n**Deltawerken** *(Zeeland)*\nEen serie dammen en stormvloedkeringen, gebouwd na de **Watersnoodramp van 1953** (1.836 doden, vooral in Zeeland). Doel: geen overstromingen meer. Ze sluiten de zee-armen af en beschermen ons land. **Oosterscheldekering** is de bekendste — wordt alleen bij stormvloed gesloten.\n\n**Polder** = laaggelegen stuk land dat ooit zee/meer was, drooggemalen door **molens** (vroeger) of **gemalen** (nu).",
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
          theorie: "Rijn (met Waal) en Maas vormen de natuurlijke grens noord-zuid NL. Cultureel-historische scheiding: 'boven de rivieren' (protestant, noord) vs 'onder de rivieren' (katholiek, zuid).",
          voorbeelden: [{ type: "vergelijk", tekst: "Donau (oost-Europa, niet NL). Theems (Engeland). Allemaal grote rivieren maar niet in NL." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Donau loopt door Duitsland → Oostenrijk → Hongarije → Servië → Roemenië → Bulgarije. Theems = Engeland alleen." }],
          niveaus: { basis: "Rijn, Maas, Schelde.", simpeler: "3 NL-rivieren: Rijn + Maas + Schelde.", nogSimpeler: "RMS" },
        },
      },
      {
        q: "Wat heette het IJsselmeer **vroeger**?",
        options: ["Zuiderzee","Markermeer","Waddenzee","Noordzee"],
        answer: 0,
        wrongHints: [null,"Markermeer is een klein deel ervan.","Waddenzee is een ander stuk water (boven de Afsluitdijk).","Noordzee is de zee aan de westkant van NL."],
        uitlegPad: {
          stappen: [{ titel: "Zuiderzee → IJsselmeer 1932", tekst: "Tot 1932 was er een grote zee in NL: de Zuiderzee. Open verbinding met Noordzee. In 1932 werd de Afsluitdijk gebouwd (32 km dijk Noord-Holland → Friesland). Daarmee werd Zuiderzee afgesloten van zee → werd zoetwater-meer → kreeg nieuwe naam: IJsselmeer (naar IJssel-rivier die erin uitmondt)." }],
          woorden: [{ woord: "Zuiderzee", uitleg: "Vroegere binnenzee NL. 5.000 km². Gevaarlijk: stormvloeden veroorzaakten regelmatig overstromingen." }, { woord: "Afsluitdijk", uitleg: "32 km lange dijk, gebouwd 1927-1932. Sluit IJsselmeer af van Noordzee." }, { woord: "Cornelis Lely", uitleg: "Ingenieur. Bedacht plan 1891. Werd uitgevoerd na zware storm 1916." }],
          theorie: "Doel Afsluitdijk: (1) bescherming tegen stormvloeden, (2) zoetwater-reserve, (3) land winnen (polders). Markermeer ontstond later: in 1976 werd IJsselmeer gesplitst door Houtribdijk.",
          voorbeelden: [{ type: "context", tekst: "Stormvloed 1916: 19 doden + duizenden dieren verdronken. Politiek besluit: 'nooit meer' → Afsluitdijk gebouwd." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Markermeer = klein deel, ontstond 1976. Waddenzee = OUDE zee tussen vasteland en Waddeneilanden (BUITEN Afsluitdijk). Noordzee = grote zee westkust." }],
          niveaus: { basis: "Zuiderzee.", simpeler: "Vroeger Zuiderzee, sinds 1932 (Afsluitdijk) IJsselmeer.", nogSimpeler: "Zuiderzee" },
        },
      },
      {
        q: "Wat is het doel van de **Deltawerken**?",
        options: ["Beschermen tegen overstromingen","Drinkwater zuiveren","Stroom opwekken","Schepen sneller maken"],
        answer: 0,
        wrongHints: [null,"Drinkwater wordt elders gezuiverd.","Sommige werken kunnen wel stroom opwekken maar dat is niet het hoofddoel.","Niet de bedoeling van Deltawerken."],
        uitlegPad: {
          stappen: [{ titel: "Na Watersnood 1953", tekst: "1 februari 1953: zware stormvloed. Zeeland + Zuid-Holland onder water. 1.836 doden + ~70.000 mensen geëvacueerd + 47.000 dieren dood. Politiek besluit: 'nooit meer'. Resultaat: Deltawerken (1958-1997) — serie van 13 dammen + stormvloedkeringen die zee-armen Zeeland afsluiten." }],
          woorden: [{ woord: "Deltawerken", uitleg: "13 grote waterwerken Zeeland 1958-1997. Een van 7 wonderen moderne wereld (American Society of Civil Engineers)." }, { woord: "Oosterscheldekering", uitleg: "Bekendste Deltawerk. Beweegbare stormvloedkering. Alleen dicht bij hoog water." }, { woord: "Watersnoodramp", uitleg: "1953. Grootste natuurramp NL 20e eeuw. 1.836 doden." }],
          theorie: "Deltawerken hebben dubbel doel: (1) HOOFDDOEL = bescherming tegen zee, (2) economische bonus = land verbonden via dammen, makkelijker verkeer. Maar veiligheid is reden #1.",
          voorbeelden: [{ type: "schaal", tekst: "Oosterscheldekering 9 km lang, 62 schuiven die elk 350 ton wegen. Sluit bij extreme storm (~1× per paar jaar). Anders blijft hij open voor zoutwater-getij." }],
          basiskennis: [{ onderwerp: "Niet andere doelen", uitleg: "Geen drinkwater (komt uit duinen). Geen stroom (paar werken kleinschalig wel). Geen scheepvaart-versnelling (juist sluizen voor scheepvaart)." }],
          niveaus: { basis: "Bescherming overstroming.", simpeler: "Deltawerken = beschermen Zeeland tegen overstromingen, na 1953-ramp.", nogSimpeler: "Bescherming" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Uit welk land komt de rivier de **Rijn**?",
        options: ["Zwitserland", "Frankrijk", "België", "Spanje"],
        answer: 0,
        wrongHints: [null, "Uit dit land komen de Maas en de Schelde. Ook de Rijn?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Rijn uit Zwitserland",
              tekst: "De **Rijn** komt uit **Zwitserland**, stroomt door **Duitsland** en komt dan Nederland binnen.",
            },
          ],
          woorden: [
            {
              woord: "rivier",
              uitleg: "Een groot stromend water dat naar zee gaat.",
            },
          ],
          theorie: "Rijn → Zwitserland. Maas en Schelde → Frankrijk.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Zwitserland → Duitsland → Nederland → zee.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Drie rivieren",
              uitleg: "De drie grote rivieren zijn de Rijn, de Maas en de Schelde.",
            },
          ],
          niveaus: {
            basis: "Zwitserland.",
            simpeler: "Rijn begint in Zwitserland.",
            nogSimpeler: "Zwitserland",
          },
        },
      },
      {
        q: "Wat is een **polder**?",
        options: [
          "Laag land dat vroeger water was en is drooggemalen",
          "Een hoge zandheuvel aan de zee",
          "Een rivier die naar de zee stroomt",
          "Een dam die de zee tegenhoudt",
        ],
        answer: 0,
        wrongHints: [null, "Een polder ligt juist laag. Klopt 'hoog' dan?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Polder",
              tekst: "Een **polder** is een **laag** stuk land dat vroeger zee of meer was. Het water is weggepompt: vroeger met **molens**, nu met **gemalen**.",
            },
          ],
          woorden: [
            {
              woord: "polder",
              uitleg: "Laag land dat is drooggemalen.",
            },
          ],
          theorie: "Polder: eerst water → dijk eromheen → water wegpompen → droog land.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Vroeger pompten molens het water weg. Nu doen gemalen dat.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Gemaal",
              uitleg: "Een gebouw met pompen dat water wegpompt.",
            },
          ],
          niveaus: {
            basis: "Laag, drooggemalen land.",
            simpeler: "Polder = laag land dat eerst water was.",
            nogSimpeler: "Drooggemalen land",
          },
        },
      },
    ],
  },
  {
    title: "Landschap + Waddeneilanden",
    explanation: "**De vorm van het land**\n\nNederland is bijna helemaal **plat**. Maar er zijn wel verschillen:\n\n**Hoge zandgronden** *(midden-oost-zuid)*\n• Veluwe (Gelderland) — bossen, heide, hoogste punt ~110 m.\n• Drenthe — bossen, hunebedden.\n• Noord-Brabant — zandgronden met bossen en heide.\n\n**Lage delen** *(west + noord)*\n• Polders en weilanden (vooral Zuid-Holland, Flevoland).\n• Hier is **26%** van het land **onder zeeniveau**.\n• Beschermd door dijken + duinen.\n\n**De heuvels van Limburg** *(zuid)*\n• Het **enige echte heuvelland** van NL.\n• Vaalserberg = **322 m** = hoogste punt van NL.\n• Geliefd voor wandelen en wielrennen.\n\n**5 Waddeneilanden** *(noord, in Waddenzee)*\nVan west naar oost:\n1. **Texel** — bij Noord-Holland — grootste\n2. **Vlieland** — Friesland\n3. **Terschelling** — Friesland\n4. **Ameland** — Friesland\n5. **Schiermonnikoog** — Friesland — oostelijkste\n\nGeheugenezel: **'Toen Vroeg Truus Aan Schelden?'** (T-V-T-A-S = Texel, Vlieland, Terschelling, Ameland, Schiermonnikoog).\n\n**Waddenzee**: door eb en vloed komen grote delen droog te liggen → **wadlopen** mogelijk. UNESCO Werelderfgoed sinds 2009.\n\n**Tulpen + bollen**\n• Vooral in Noord- en Zuid-Holland.\n• Bekendste: **Keukenhof** in Lisse — 7 miljoen tulpen, 32 hectare.\n• Bloeitijd: maart-mei.\n• Nederland is **grootste tulpen-exporteur ter wereld**.",
    svg: nederlandKaartSvg(),
    checks: [
      {
        q: "Wat is het **westelijkste** Waddeneiland?",
        options: ["Texel","Schiermonnikoog","Ameland","Terschelling"],
        answer: 0,
        wrongHints: [null,"Schiermonnikoog is juist het oostelijkste.","Ameland ligt in het midden.","Terschelling ligt na Vlieland, niet helemaal westelijk."],
        uitlegPad: {
          stappen: [{ titel: "Volgorde T-V-T-A-S", tekst: "5 Waddeneilanden van WEST naar OOST: Texel → Vlieland → Terschelling → Ameland → Schiermonnikoog. Texel is uniek: enige bij Noord-Holland (andere 4 bij Friesland). Texel is ook grootste eiland." }],
          woorden: [{ woord: "Waddeneilanden", uitleg: "5 eilanden tussen Noordzee en vasteland NL. UNESCO Werelderfgoed (Waddenzee, 2009)." }, { woord: "Texel", uitleg: "Grootste Waddeneiland. ~13.500 inwoners. Bij Noord-Holland." }],
          theorie: "Geheugentruc: TVTAS-rij (West→Oost). Of zin: 'Toen Vroeg Truus Aan Schelden?' (T-V-T-A-S). Helpt examenvraag-volgorde onthouden.",
          voorbeelden: [{ type: "afstanden", tekst: "Texel-Schiermonnikoog ~140 km uit elkaar. Veerboten gaan vanaf Den Helder (Texel), Harlingen (Vlieland+Terschelling), Holwerd (Ameland), Lauwersoog (Schiermonnikoog)." }],
          basiskennis: [{ onderwerp: "Niet andere positie", uitleg: "Schiermonnikoog = OOSTELIJKSTE. Ameland = midden. Terschelling = 3e van west. Texel = westelijkste." }],
          niveaus: { basis: "Texel (westelijkst).", simpeler: "Waddeneilanden west→oost: T-V-T-A-S = Texel-Vlieland-Terschelling-Ameland-Schiermonnikoog. Texel = west.", nogSimpeler: "Texel" },
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
          voorbeelden: [{ type: "vergelijk", tekst: "Wereld: meeste landen 100% boven zeeniveau. NL: 26% onder. Bangladesh ook risicovol maar net niet onder. Malediven (gemiddeld 1,5 m) bedreigd door zeespiegelstijging." }],
          basiskennis: [{ onderwerp: "Examen-feit", uitleg: "Klassieke Cito/Doorstroomtoets-vraag: ~26% van NL onder zeeniveau. Onthoud dit getal." }],
          niveaus: { basis: "~26%.", simpeler: "~26% (een kwart) van NL ligt onder zeeniveau, beschermd door dijken.", nogSimpeler: "26%" },
        },
      },
      {
        q: "Wat is het **hoogste punt** van Nederland?",
        options: ["Vaalserberg","Mont Blanc","Zuiderzeeweg","Tafelberg"],
        answer: 0,
        wrongHints: [null,"Mont Blanc is in Frankrijk!","Geen berg.","Tafelberg is in Zuid-Afrika of Suriname."],
        uitlegPad: {
          stappen: [{ titel: "Vaalserberg 322 m", tekst: "Hoogste punt NL = Vaalserberg, 322,4 m boven NAP. Ligt in Limburg, dorp Vaals. Drielandenpunt — hier raken NL, België én Duitsland elkaar. Niet groots als alpen-berg, maar voor plat NL relatief hoog." }],
          woorden: [{ woord: "Vaalserberg", uitleg: "Hoogste punt NL. 322,4 m. Bij Vaals, Limburg." }, { woord: "Drielandenpunt", uitleg: "Plek waar 3 landen samenkomen. Bij Vaalserberg: NL+BE+DE." }],
          theorie: "Hoogste punten andere landen ter vergelijking: Duitsland Zugspitze 2962 m. Frankrijk Mont Blanc 4810 m. NL Vaalserberg 322 m. NL is plat omdat we op delta-vlakte liggen (zand-sediment van rivieren).",
          voorbeelden: [{ type: "binnen NL", tekst: "Veluwe (Gelderland) hoogste ~110 m. Drenthe heuvels max ~30 m. Vaalserberg eenzaam de top met 322 m." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Mont Blanc = Frankrijk. Zuiderzeeweg = straatnaam (geen berg). Tafelberg = Zuid-Afrika of Suriname." }],
          niveaus: { basis: "Vaalserberg 322 m.", simpeler: "Hoogste NL = Vaalserberg (322 m, Limburg).", nogSimpeler: "Vaalserberg" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk Waddeneiland is het **grootste**?",
        options: ["Texel", "Vlieland", "Ameland", "Schiermonnikoog"],
        answer: 0,
        wrongHints: [null, null, null, "Dit eiland ligt helemaal in het oosten. Is het ook het grootste?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Texel = grootste",
              tekst: "**Texel** is het **grootste** Waddeneiland. Het hoort bij **Noord-Holland**. De andere vier horen bij Friesland.",
            },
          ],
          woorden: [
            {
              woord: "Waddeneiland",
              uitleg: "Een eiland in het noorden, tussen de Waddenzee en de Noordzee.",
            },
          ],
          theorie: "Texel: westelijkste én grootste. Schiermonnikoog: oostelijkste.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Texel is het eerste eiland van west naar oost, en het grootste.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Waddeneilanden",
              uitleg: "Texel, Vlieland, Terschelling, Ameland, Schiermonnikoog.",
            },
          ],
          niveaus: {
            basis: "Texel.",
            simpeler: "Grootste eiland = Texel.",
            nogSimpeler: "Texel",
          },
        },
      },
      {
        q: "In welke volgorde liggen de Waddeneilanden van **west naar oost**?",
        options: [
          "Texel, Vlieland, Terschelling, Ameland, Schiermonnikoog",
          "Vlieland, Texel, Terschelling, Ameland, Schiermonnikoog",
          "Texel, Terschelling, Vlieland, Ameland, Schiermonnikoog",
          "Schiermonnikoog, Ameland, Terschelling, Vlieland, Texel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Welk eiland ligt het meest naar het westen? Staat dat vooraan?",
          null,
          "Dit is de goede rij, maar dan precies omgekeerd. Welke kant begin je?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Toen Vroeg Truus Aan Schelden?",
              tekst: "Van **west naar oost**: **T**exel, **V**lieland, **T**erschelling, **A**meland, **S**chiermonnikoog.",
            },
          ],
          woorden: [
            {
              woord: "volgorde",
              uitleg: "In welke rij de dingen na elkaar komen.",
            },
          ],
          theorie: "Ezelsbruggetje: 'Toen Vroeg Truus Aan Schelden?' → T-V-T-A-S.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "T = Texel, V = Vlieland, T = Terschelling, A = Ameland, S = Schiermonnikoog.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "West en oost",
              uitleg: "West is links op de kaart, oost is rechts.",
            },
          ],
          niveaus: {
            basis: "Texel, Vlieland, Terschelling, Ameland, Schiermonnikoog.",
            simpeler: "T-V-T-A-S, van links naar rechts.",
            nogSimpeler: "T-V-T-A-S",
          },
        },
      },
      {
        q: "Hoe heet het gebied in **Gelderland** met bossen, heide en hoge zandgrond?",
        options: ["De Veluwe", "De Betuwe", "De Biesbosch", "De Keukenhof"],
        answer: 0,
        wrongHints: [
          null,
          "Dit gebied ligt bij de rivieren en is juist laag. Klopt 'hoog' dan?",
          null,
          "Dit is een bekend park met bloemen. Is het een groot bos?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "De Veluwe",
              tekst: "De **Veluwe** in **Gelderland** is een **hoge zandgrond** met veel **bossen** en **heide**.",
            },
          ],
          woorden: [
            {
              woord: "heide",
              uitleg: "Open land met lage paarse struikjes, vaak op zandgrond.",
            },
          ],
          theorie: "Hoge zandgronden: Veluwe, Drenthe, Noord-Brabant. Lage delen: polders in het westen.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "De Betuwe ligt ook in Gelderland, maar tussen de rivieren en laag.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Zandgrond",
              uitleg: "Grond van zand. Daar groeien vaak bossen en heide.",
            },
          ],
          niveaus: {
            basis: "De Veluwe.",
            simpeler: "Bos en heide in Gelderland = Veluwe.",
            nogSimpeler: "Veluwe",
          },
        },
      },
      {
        q: "Wat kun je in de **Waddenzee** doen als het water bij **eb** weg is?",
        options: ["Wadlopen", "Skiën", "Bergbeklimmen", "Duiken"],
        answer: 0,
        wrongHints: [
          null,
          "Daarvoor heb je sneeuw en bergen nodig.",
          null,
          "Daarvoor heb je juist diep water nodig.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wadlopen",
              tekst: "Bij **eb** zakt het water en komen grote stukken van de Waddenzee **droog** te liggen. Dan kun je met een gids over de bodem lopen: **wadlopen**.",
            },
          ],
          woorden: [
            {
              woord: "eb",
              uitleg: "Als het water in de zee lager wordt.",
            },
          ],
          theorie: "Eb = water laag. Vloed = water hoog. Bij eb kun je wadlopen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Water weg → droge zeebodem → wadlopen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vloed",
              uitleg: "Als het water in de zee weer hoger wordt.",
            },
          ],
          niveaus: {
            basis: "Wadlopen.",
            simpeler: "Eb = wadlopen.",
            nogSimpeler: "Wadlopen",
          },
        },
      },
      {
        q: "Waar in Nederland liggen vooral de **lage** polders en weilanden?",
        options: [
          "In het westen en noorden",
          "In het zuiden van Limburg",
          "Op de Veluwe",
          "Op de Vaalserberg",
        ],
        answer: 0,
        wrongHints: [null, "Daar liggen juist de heuvels.", "Dit is een hoge zandgrond.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Laag = west en noord",
              tekst: "De **lage** delen met **polders** en **weilanden** liggen vooral in het **westen** en **noorden**. Ze worden beschermd door **dijken** en **duinen**.",
            },
          ],
          woorden: [
            {
              woord: "weiland",
              uitleg: "Een grasveld waar koeien of schapen grazen.",
            },
          ],
          theorie: "Hoog: Veluwe, Drenthe, Noord-Brabant, heuvels van Limburg. Laag: west en noord.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "Limburg heeft heuvels, de Veluwe is hoge zandgrond. Daar liggen geen lage polders.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Polder",
              uitleg: "Laag land dat vroeger water was.",
            },
          ],
          niveaus: {
            basis: "In het westen en noorden.",
            simpeler: "Laag land = west en noord.",
            nogSimpeler: "West en noord",
          },
        },
      },
    ],
  },
  {
    title: "5 grootste steden + buurlanden",
    explanation: "**De 5 grootste steden** van Nederland:\n\n1. **Amsterdam** *(Noord-Holland)* — ~880.000 inwoners. Hoofdstad. Grachten, Anne Frank Huis, Rijksmuseum.\n2. **Rotterdam** *(Zuid-Holland)* — ~660.000. Grootste **haven van Europa**. Modern wegens herbouw na bombardement WO2.\n3. **Den Haag** *(Zuid-Holland)* — ~560.000. **Regering en koning**, ambassades, Internationaal Gerechtshof.\n4. **Utrecht** *(Utrecht)* — ~365.000. Centraal gelegen, treinknooppunt, Domkerk.\n5. **Eindhoven** *(Noord-Brabant)* — ~240.000. Tech-stad (Philips, ASML).\n\nNa Eindhoven: Tilburg, Groningen, Almere, Breda, Nijmegen — allemaal rond 200.000.\n\n**Randstad**\nHet gebied tussen Amsterdam, Rotterdam, Den Haag en Utrecht heet de **Randstad**. Hier woont **40% van de Nederlanders** op slechts ~20% van het land. Het is het **dichtstbevolkte gebied** van Europa.\n\n**Buurlanden**\nNederland grenst aan twee landen:\n\n**Duitsland** *(oost)*\n• Hoofdstad: Berlijn.\n• Bekendste grensovergangen: Enschede, Nijmegen, Maastricht.\n• Verbindingen: weg, trein.\n• Veel handel met NL.\n\n**België** *(zuid)*\n• Hoofdstad: Brussel (waar ook EU zit).\n• Drie talen: Nederlands (Vlaanderen), Frans (Wallonië), Duits (kleine groep).\n• Bekendste grensovergangen: Roosendaal, Eindhoven, Maastricht.\n• Aardige overeenkomsten: voetbal, taal (Nederlands).\n\n**Verschil NL en België**\n• België heeft een **koning + parlement met provincies** maar daarboven gewesten + gemeenschappen.\n• België is **Frans + Nederlandstalig** verdeeld — onze Vlaamse buren spreken Nederlands.",
    svg: steden5Svg(),
    checks: [
      {
        q: "Wat is de **2e grootste** stad van NL?",
        options: ["Rotterdam","Den Haag","Utrecht","Eindhoven"],
        answer: 0,
        wrongHints: [null,"Den Haag is 3e.","Utrecht is 4e.","Eindhoven is 5e."],
        uitlegPad: {
          stappen: [{ titel: "Rotterdam = #2", tekst: "Top-5 NL-steden naar inwoners: 1. Amsterdam ~880.000. 2. Rotterdam ~660.000. 3. Den Haag ~560.000. 4. Utrecht ~365.000. 5. Eindhoven ~240.000. Rotterdam vooral bekend om grootste haven van Europa." }],
          woorden: [{ woord: "Rotterdam", uitleg: "2e stad NL. Modern aanzicht door wederopbouw na bombardement WO2 1940." }, { woord: "Rotterdamse haven", uitleg: "Grootste haven Europa. ~125 km² (groter dan veel steden)." }],
          theorie: "Bevolkingsranglijst kan iets schommelen per jaar. Rotterdam stabiel #2 al decennia. Den Haag #3 met regering. Utrecht #4 centraal. Eindhoven #5 tech-stad.",
          voorbeelden: [{ type: "bijzonder", tekst: "Rotterdam was vroeger groter (jaren '60: bijna even groot als Amsterdam). Amsterdam groeide harder door dienstverlening + toerisme." }],
          basiskennis: [{ onderwerp: "Niet andere positie", uitleg: "Den Haag 3e (regering). Utrecht 4e (transit). Eindhoven 5e (tech). Rotterdam 2e (haven)." }],
          niveaus: { basis: "Rotterdam.", simpeler: "Top-5: Amsterdam-Rotterdam-Den Haag-Utrecht-Eindhoven. R = 2e.", nogSimpeler: "Rotterdam" },
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
          voorbeelden: [{ type: "schaal", tekst: "Randstad: 8 miljoen mensen op 8000 km². Vergelijk: Drenthe 500.000 op 2700 km². Verhouding ruim 5× dichter." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Vechtstreek = klein gebied bij rivier Vecht. Noord-Holland alleen = halve Randstad. Zuiderzee bestaat niet meer." }],
          niveaus: { basis: "Randstad.", simpeler: "Vier grote steden samen = Randstad. Dichtstbevolkt gebied NL.", nogSimpeler: "Randstad" },
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
          niveaus: { basis: "Duitsland + België.", simpeler: "NL grenst aan Duitsland (oost) en België (zuid).", nogSimpeler: "DE+BE" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is de **grootste** stad van Nederland?",
        options: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht"],
        answer: 0,
        wrongHints: [null, "Deze stad staat op plek 2.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Amsterdam = grootste",
              tekst: "**Amsterdam** is de grootste stad van Nederland én de hoofdstad. Daarna komen Rotterdam, Den Haag, Utrecht en Eindhoven.",
            },
          ],
          woorden: [
            {
              woord: "Amsterdam",
              uitleg: "Hoofdstad en grootste stad van Nederland, in Noord-Holland.",
            },
          ],
          theorie: "Top 5: 1 Amsterdam, 2 Rotterdam, 3 Den Haag, 4 Utrecht, 5 Eindhoven.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Grachten, Anne Frank Huis, Rijksmuseum: allemaal in Amsterdam.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Grootste",
              uitleg: "De stad waar de meeste mensen wonen.",
            },
          ],
          niveaus: {
            basis: "Amsterdam.",
            simpeler: "Nummer 1 = Amsterdam.",
            nogSimpeler: "Amsterdam",
          },
        },
      },
      {
        q: "Welke stad heeft de grootste **haven van Europa**?",
        options: ["Rotterdam", "Amsterdam", "Utrecht", "Eindhoven"],
        answer: 0,
        wrongHints: [null, null, "Ligt deze stad aan zee? Kan daar een grote zeehaven zijn?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Haven van Rotterdam",
              tekst: "**Rotterdam** heeft de **grootste haven van Europa**. Grote zeeschepen komen er aan.",
            },
          ],
          woorden: [
            {
              woord: "haven",
              uitleg: "Een plek waar schepen aankomen, laden en lossen.",
            },
          ],
          theorie: "Rotterdam = haven. Den Haag = regering. Amsterdam = hoofdstad.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "Amsterdam heeft ook een haven, maar de grootste haven van Europa is die van Rotterdam.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Rotterdam",
              uitleg: "Tweede stad van Nederland, in Zuid-Holland.",
            },
          ],
          niveaus: {
            basis: "Rotterdam.",
            simpeler: "Grootste haven = Rotterdam.",
            nogSimpeler: "Rotterdam",
          },
        },
      },
      {
        q: "Wat is de hoofdstad van **België**?",
        options: ["Brussel", "Antwerpen", "Gent", "Brugge"],
        answer: 0,
        wrongHints: [null, "Dit is een grote havenstad in België. Is het de hoofdstad?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Brussel",
              tekst: "De hoofdstad van **België** is **Brussel**. Daar zit ook de Europese Unie.",
            },
          ],
          woorden: [
            {
              woord: "Brussel",
              uitleg: "Hoofdstad van België.",
            },
          ],
          theorie: "Buurlanden en hun hoofdsteden: België → Brussel, Duitsland → Berlijn.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "Antwerpen, Gent en Brugge zijn bekende Belgische steden, maar niet de hoofdstad.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "België",
              uitleg: "Buurland in het zuiden van Nederland.",
            },
          ],
          niveaus: {
            basis: "Brussel.",
            simpeler: "België → Brussel.",
            nogSimpeler: "Brussel",
          },
        },
      },
      {
        q: "Wat is de hoofdstad van **Duitsland**?",
        options: ["Berlijn", "München", "Hamburg", "Keulen"],
        answer: 0,
        wrongHints: [null, null, "Dit is een grote havenstad in Duitsland. Is het de hoofdstad?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Berlijn",
              tekst: "De hoofdstad van **Duitsland** is **Berlijn**.",
            },
          ],
          woorden: [
            {
              woord: "Berlijn",
              uitleg: "Hoofdstad van Duitsland.",
            },
          ],
          theorie: "Duitsland ligt aan de oostkant van Nederland. De hoofdstad is Berlijn.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "München, Hamburg en Keulen zijn grote Duitse steden, maar niet de hoofdstad.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Duitsland",
              uitleg: "Buurland in het oosten van Nederland.",
            },
          ],
          niveaus: {
            basis: "Berlijn.",
            simpeler: "Duitsland → Berlijn.",
            nogSimpeler: "Berlijn",
          },
        },
      },
      {
        q: "Welke **drie talen** spreken mensen in België?",
        options: [
          "Nederlands, Frans en Duits",
          "Nederlands, Frans en Engels",
          "Frans, Duits en Italiaans",
          "Nederlands, Engels en Duits",
        ],
        answer: 0,
        wrongHints: [null, "Twee talen kloppen. Welke derde taal spreekt een kleine groep?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Drie talen",
              tekst: "In **België** spreken mensen **Nederlands** (in Vlaanderen), **Frans** (in Wallonië) en **Duits** (een kleine groep).",
            },
          ],
          woorden: [
            {
              woord: "Vlaanderen",
              uitleg: "Het noordelijke deel van België, waar ze Nederlands spreken.",
            },
          ],
          theorie: "Vlaanderen = Nederlands. Wallonië = Frans. Kleine groep = Duits.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Een Vlaming uit Gent spreekt Nederlands, net als jij.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Wallonië",
              uitleg: "Het zuidelijke deel van België, waar ze Frans spreken.",
            },
          ],
          niveaus: {
            basis: "Nederlands, Frans en Duits.",
            simpeler: "België: Nederlands, Frans, Duits.",
            nogSimpeler: "NL, Frans, Duits",
          },
        },
      },
      {
        q: "Welke stad ligt in het **midden** van het land, is een groot **treinknooppunt** en heeft de **Domkerk**?",
        options: ["Utrecht", "Groningen", "Maastricht", "Middelburg"],
        answer: 0,
        wrongHints: [
          null,
          "Deze stad ligt helemaal in het noorden.",
          "Deze stad ligt helemaal in het zuiden.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Utrecht",
              tekst: "**Utrecht** ligt **centraal** in Nederland. Veel treinen komen er samen en de stad heeft de **Domkerk**.",
            },
          ],
          woorden: [
            {
              woord: "treinknooppunt",
              uitleg: "Een plek waar veel treinlijnen samenkomen.",
            },
          ],
          theorie: "Utrecht = midden, treinen, Dom. Het is de vierde stad van Nederland.",
          voorbeelden: [
            {
              type: "kaart",
              tekst: "Kijk in het midden van de kaart van Nederland: daar ligt Utrecht.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Centraal",
              uitleg: "In het midden.",
            },
          ],
          niveaus: {
            basis: "Utrecht.",
            simpeler: "Midden + Dom = Utrecht.",
            nogSimpeler: "Utrecht",
          },
        },
      },
      {
        q: "Welke stad hoort **niet** bij de vier grote steden van de **Randstad**?",
        options: ["Eindhoven", "Amsterdam", "Rotterdam", "Utrecht"],
        answer: 0,
        wrongHints: [null, null, "Deze stad heeft de grote haven. Ligt die in de Randstad?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Randstad",
              tekst: "De **Randstad** is het gebied tussen **Amsterdam**, **Rotterdam**, **Den Haag** en **Utrecht**. **Eindhoven** ligt in Noord-Brabant, in het zuiden.",
            },
          ],
          woorden: [
            {
              woord: "Randstad",
              uitleg: "Het drukke gebied tussen Amsterdam, Rotterdam, Den Haag en Utrecht.",
            },
          ],
          theorie: "Randstad = de vier grote steden in het westen en midden. Eindhoven ligt daar ver vandaan.",
          voorbeelden: [
            {
              type: "kaart",
              tekst: "Eindhoven ligt in het zuiden, in Noord-Brabant.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Dichtbevolkt",
              uitleg: "Een gebied waar heel veel mensen dicht bij elkaar wonen.",
            },
          ],
          niveaus: {
            basis: "Eindhoven.",
            simpeler: "Randstad: Amsterdam, Rotterdam, Den Haag, Utrecht.",
            nogSimpeler: "Eindhoven",
          },
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
          stappen: [{ titel: "Kinderdijk — UNESCO 1997", tekst: "Kinderdijk = dorp in Zuid-Holland (bij Rotterdam). 19 windmolens uit 1740. UNESCO Werelderfgoed sinds 1997. Bekendste molenpark Nederland. Toeristen wereldwijd komen kijken. Molens pompten vroeger water uit polders weg — want het dorp ligt onder zeeniveau." }],
          woorden: [{ woord: "Kinderdijk", uitleg: "19 molens uit 1740 op 1 plek. UNESCO. ~600.000 toeristen/jaar." }, { woord: "UNESCO Werelderfgoed", uitleg: "Lijst van waardevol cultureel/natuur-erfgoed wereldwijd. Het Koninkrijk der Nederlanden heeft 13 erfgoederen." }],
          theorie: "Andere NL-werelderfgoeden: Schokland, Beemster, Hollandse Waterlinies (met de Stelling van Amsterdam), Waddenzee. Kinderdijk is meest gefotografeerd door Hollandse 'molen+wolk'-cliché.",
          voorbeelden: [{ type: "andere molens", tekst: "Zaanse Schans (Noord-Holland) heeft ook molens, maar nieuwer + minder. Kinderdijk = 19 originele." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Marken = vissersdorp. Volendam = klederdracht/vissers. Schiphol = vliegveld." }],
          niveaus: { basis: "Kinderdijk.", simpeler: "19 oude molens UNESCO = Kinderdijk, Zuid-Holland.", nogSimpeler: "Kinderdijk" },
        },
      },
      {
        q: "Wat is **Schiphol**?",
        options: ["Luchthaven","Treinstation","Haven","Stadion"],
        answer: 0,
        wrongHints: [null,"Schiphol heeft wel een station maar het is vooral een vliegveld.","Schiphol is in Noord-Holland landinwaarts, geen haven.","Geen stadion."],
        uitlegPad: {
          stappen: [{ titel: "Schiphol — 4e luchthaven Europa", tekst: "Schiphol = grootste luchthaven NL. In Haarlemmermeer (Noord-Holland), -3 m onder NAP (op drooggemalen polder!). ~70 miljoen passagiers/jaar. 4e drukste van Europa (na London Heathrow, Parijs CDG, Frankfurt). Wel ook treinstation onder de luchthaven, maar vliegveld is hoofdfunctie." }],
          woorden: [{ woord: "Schiphol", uitleg: "Internationale luchthaven NL. Gebouwd 1916 in Haarlemmermeer-polder." }, { woord: "KLM", uitleg: "NL-vliegmaatschappij. Schiphol-hub. Oudste luchtvaartmaatschappij wereld (1919)." }],
          theorie: "Schiphol ligt LAGER dan zeeniveau (-3 m NAP) — uniek. Naam komt van schip-hol (oude scheepshaven Haarlemmermeer voordat het in 1852 werd drooggelegd).",
          voorbeelden: [{ type: "vergelijk", tekst: "Eindhoven Airport ~7 mln/jaar. Rotterdam-The Hague ~2 mln. Schiphol 70 mln — verreweg grootste NL." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Treinstation = onderdeel maar niet hoofdfunctie. Geen haven (geen schepen). Geen stadion." }],
          niveaus: { basis: "Vliegveld.", simpeler: "Schiphol = grootste luchthaven NL, in Noord-Holland.", nogSimpeler: "Vliegveld" },
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
          niveaus: { basis: "Giethoorn.", simpeler: "'Venetië van NL' = Giethoorn (Overijssel, dorp met grachten).", nogSimpeler: "Giethoorn" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke lange dijk ligt tussen **Noord-Holland** en **Friesland**?",
        options: ["De Afsluitdijk", "De Oosterscheldekering", "De Maeslantkering", "De Kinderdijk"],
        answer: 0,
        wrongHints: [
          null,
          "Deze ligt in Zeeland. Ligt die tussen Noord-Holland en Friesland?",
          null,
          "Dit is een plaats met oude molens in Zuid-Holland.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Afsluitdijk",
              tekst: "De **Afsluitdijk** ligt tussen **Noord-Holland** en **Friesland**. Hij sloot in **1932** de **Zuiderzee** af. Zo ontstond het **IJsselmeer**.",
            },
          ],
          woorden: [
            {
              woord: "Afsluitdijk",
              uitleg: "Lange dijk tussen Noord-Holland en Friesland.",
            },
          ],
          theorie: "De naam zegt het al: de dijk sloot de Zuiderzee af.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Zuiderzee + Afsluitdijk → IJsselmeer.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "IJsselmeer",
              uitleg: "Het meer dat vroeger de Zuiderzee was.",
            },
          ],
          niveaus: {
            basis: "De Afsluitdijk.",
            simpeler: "Noord-Holland ↔ Friesland = Afsluitdijk.",
            nogSimpeler: "Afsluitdijk",
          },
        },
      },
      {
        q: "Vanaf welke plaats bij **Rotterdam** varen veerboten naar **Engeland**?",
        options: ["Hoek van Holland", "Den Helder", "Volendam", "Giethoorn"],
        answer: 0,
        wrongHints: [null, "Deze plaats ligt in het noorden van Noord-Holland, niet bij Rotterdam.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Hoek van Holland",
              tekst: "**Hoek van Holland** ligt aan zee bij **Rotterdam**. Daar vertrekken **veerboten** naar Engeland.",
            },
          ],
          woorden: [
            {
              woord: "veerboot",
              uitleg: "Een boot die mensen en auto's naar de overkant brengt.",
            },
          ],
          theorie: "Kustplaatsen: Den Helder (marine), IJmuiden (sluizen), Scheveningen (strand), Hoek van Holland (veerboten), Vlissingen (havens).",
          voorbeelden: [
            {
              type: "kaart",
              tekst: "Hoek van Holland ligt aan de Noordzee, vlak bij Rotterdam.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kust",
              uitleg: "Het land vlak langs de zee.",
            },
          ],
          niveaus: {
            basis: "Hoek van Holland.",
            simpeler: "Veerboot naar Engeland = Hoek van Holland.",
            nogSimpeler: "Hoek van Holland",
          },
        },
      },
      {
        q: "Welke plaats bij **Den Haag** is bekend om de **pier** en het **strand**?",
        options: ["Scheveningen", "Volendam", "Giethoorn", "Marken"],
        answer: 0,
        wrongHints: [null, null, "Hier vaar je door grachten. Is er een strand aan zee?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Scheveningen",
              tekst: "**Scheveningen** hoort bij **Den Haag** en ligt aan de Noordzee. Het is bekend om de **pier** en het **strand**.",
            },
          ],
          woorden: [
            {
              woord: "pier",
              uitleg: "Een lange steiger die vanaf het strand de zee in gaat.",
            },
          ],
          theorie: "Den Haag ligt aan zee. Het strand van Den Haag heet Scheveningen.",
          voorbeelden: [
            {
              type: "kaart",
              tekst: "Scheveningen ligt aan de kust van Zuid-Holland.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kustplaats",
              uitleg: "Een plaats aan de zee.",
            },
          ],
          niveaus: {
            basis: "Scheveningen.",
            simpeler: "Strand van Den Haag = Scheveningen.",
            nogSimpeler: "Scheveningen",
          },
        },
      },
      {
        q: "Welk **vissersdorp** in Noord-Holland is bekend om zijn **klederdracht**?",
        options: ["Volendam", "Giethoorn", "Kinderdijk", "Maastricht"],
        answer: 0,
        wrongHints: [
          null,
          "Dit dorp ligt in Overijssel en is bekend om grachten.",
          "Hier staan oude molens. Is het een vissersdorp?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Volendam",
              tekst: "**Volendam** is een **vissersdorp** in **Noord-Holland**. Het is bekend om de **klederdracht**: de traditionele kleding.",
            },
          ],
          woorden: [
            {
              woord: "klederdracht",
              uitleg: "Traditionele kleding van een dorp of streek.",
            },
          ],
          theorie: "Toeristen-plekken: Volendam (vissersdorp), Marken (vroeger eiland), Giethoorn (grachten), Kinderdijk (molens).",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "Giethoorn = grachten. Kinderdijk = molens. Volendam = vissers en klederdracht.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Noord-Holland",
              uitleg: "Provincie met Amsterdam, Haarlem en Volendam.",
            },
          ],
          niveaus: {
            basis: "Volendam.",
            simpeler: "Vissersdorp + klederdracht = Volendam.",
            nogSimpeler: "Volendam",
          },
        },
      },
      {
        q: "Wat was **Marken** vroeger?",
        options: ["Een eiland", "Een berg", "Een luchthaven", "Een rivier"],
        answer: 0,
        wrongHints: [null, "Nederland is heel plat. Zou dit kloppen?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Marken = vroeger eiland",
              tekst: "**Marken** was vroeger een **eiland** in de Zuiderzee. Nu is het met een dijk aan het vasteland vast.",
            },
          ],
          woorden: [
            {
              woord: "eiland",
              uitleg: "Een stuk land met aan alle kanten water.",
            },
          ],
          theorie: "'Voormalig eiland' = vroeger een eiland, nu niet meer.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Marken = vroeger eiland, nu vast aan het land.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Voormalig",
              uitleg: "Wat vroeger zo was, maar nu niet meer.",
            },
          ],
          niveaus: {
            basis: "Een eiland.",
            simpeler: "Marken was een eiland.",
            nogSimpeler: "Eiland",
          },
        },
      },
      {
        q: "Wat is de **Oosterscheldekering**?",
        options: [
          "Een beweegbare stormvloedkering in Zeeland",
          "Een hoge brug over de Maas in Limburg",
          "Een grote sluis bij de haven van Amsterdam",
          "Een lange dijk tussen Friesland en Noord-Holland",
        ],
        answer: 0,
        wrongHints: [null, null, null, "Dat is een andere bekende dijk. Hoe heet die?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Oosterscheldekering",
              tekst: "De **Oosterscheldekering** ligt in **Zeeland**. Het is een **beweegbare stormvloedkering**: hij gaat alleen dicht bij een zware storm.",
            },
          ],
          woorden: [
            {
              woord: "stormvloedkering",
              uitleg: "Een grote dam met deuren die dichtgaan als er een zware storm op zee is.",
            },
          ],
          theorie: "De Oosterscheldekering is het bekendste deel van de Deltawerken.",
          voorbeelden: [
            {
              type: "verwarring",
              tekst: "De lange dijk tussen Friesland en Noord-Holland is de Afsluitdijk.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Deltawerken",
              uitleg: "Dammen en keringen in Zeeland tegen overstromingen.",
            },
          ],
          niveaus: {
            basis: "Een stormvloedkering in Zeeland.",
            simpeler: "Zeeland + gaat dicht bij storm.",
            nogSimpeler: "Stormvloedkering",
          },
        },
      },
    ],
  },
  {
    title: "Eindopdracht — combineer alles",
    explanation: "Tijd om alles te combineren!\n\n**Snelle check provincie + hoofdstad** (3-staps-trucje):\n• Provincie + hoofdstad zelfde naam? → Groningen, Utrecht.\n• Eindigt op -land? → Friesland (Leeuwarden), Gelderland (Arnhem), Flevoland (Lelystad), Zeeland (Middelburg).\n• Eindigt op -e? → Drenthe (Assen).\n• 'Brabant'? → Noord-Brabant ('s-Hertogenbosch).\n• 'Holland'? → Noord-Holland (Haarlem!), Zuid-Holland (Den Haag).\n• Overijssel → Zwolle.\n• Limburg → Maastricht.\n\n**Top tips voor het examen**:\n• Hoofdstad van NEDERLAND = Amsterdam.\n• Hoofdstad van Noord-Holland = HAARLEM (NIET Amsterdam!).\n• Regering zit in Den Haag.\n• Grootste haven = Rotterdam.\n• 12 provincies, 5 Waddeneilanden, 3 grote rivieren (Rijn, Maas, Schelde).\n• 26% van NL onder zeeniveau.\n• Vaalserberg = hoogste (322 m, Limburg).\n• Buurlanden: Duitsland (oost) + België (zuid).\n• Randstad = Amsterdam-Rotterdam-Den Haag-Utrecht.\n\nVeel succes!",
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
          theorie: "Trucje noordelijke 3 hoofdsteden: A(ssen)-Drenthe, Z(wolle)-Overijssel, L(eeuwarden)-Friesland. Het alfabetische trucje werkt niet meer als je verder gaat — gewoon koppelen onthouden.",
          voorbeelden: [{ type: "context", tekst: "Andere grote steden Overijssel: Enschede (~160.000) groter dan Zwolle, en Almelo + Hengelo. Maar Zwolle = hoofdstad door geschiedenis." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Arnhem = Gelderland. Assen = Drenthe. Haarlem = Noord-Holland. Allemaal eerder behandeld." }],
          niveaus: { basis: "Zwolle.", simpeler: "Overijssel → Zwolle.", nogSimpeler: "Zwolle" },
        },
      },
      {
        q: "Welke 3 grote rivieren stromen door NL?",
        options: ["Rijn, Maas, Schelde","Rijn, Donau, Main","Theems, Rijn, Maas","Maas, Schelde, Tigris"],
        answer: 0,
        wrongHints: [null,"Donau en Main lopen niet door NL.","Theems is in Engeland.","Tigris is in het Midden-Oosten."],
        uitlegPad: {
          stappen: [{ titel: "RMS — Rijn, Maas, Schelde", tekst: "Onthoud: R-M-S = Rijn, Maas, Schelde. Drie grote NL-rivieren. Alle drie komen uit het buitenland en stromen naar de Noordzee." }],
          woorden: [{ woord: "Rijn", uitleg: "1230 km. Uit Zwitserland. Belangrijkste handelsrivier Europa." }, { woord: "Maas", uitleg: "925 km. Uit Frankrijk." }, { woord: "Schelde", uitleg: "350 km. Uit Frankrijk via België." }],
          theorie: "Vergelijk: Donau (Oost-Europa). Main (Duitsland, zijrivier Rijn). Theems (Engeland). Tigris (Midden-Oosten). Geen van deze door NL.",
          voorbeelden: [{ type: "tip", tekst: "RMS = trucje. Of: 'Rijn Maas Schelde' afgekort tot beginletters." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Donau + Main = Duitsland + Oost-EU. Theems = UK. Tigris = Irak. Alleen RMS = NL." }],
          niveaus: { basis: "Rijn, Maas, Schelde.", simpeler: "Drie NL-rivieren: R(ijn) M(aas) S(chelde).", nogSimpeler: "RMS" },
        },
      },
      {
        q: "Tot welke provincie behoort **Texel**?",
        options: ["Noord-Holland","Friesland","Drenthe","Groningen"],
        answer: 0,
        wrongHints: [null,"Vlieland t/m Schiermonnikoog zijn Friesland — maar Texel is van een andere provincie.","Drenthe heeft geen eilanden.","Groningen heeft geen eilanden."],
        uitlegPad: {
          stappen: [{ titel: "Texel = uniek Noord-Holland", tekst: "Van de 5 Waddeneilanden hoort alleen TEXEL bij Noord-Holland. De andere 4 (Vlieland-Terschelling-Ameland-Schiermonnikoog) horen bij Friesland. Examen-val: makkelijk om te denken 'alle wadden = Friesland'." }],
          woorden: [{ woord: "Texel", uitleg: "Grootste Waddeneiland. ~13.500 inwoners. Bij Noord-Holland (gemeente Texel)." }],
          theorie: "Veerboot naar Texel vanaf Den Helder (Noord-Holland). Andere 4 wadden via Friese havens (Harlingen, Holwerd, Lauwersoog). Vandaar bestuurlijk Texel bij N-Holland.",
          voorbeelden: [{ type: "feit", tekst: "Texel = grootste eiland Wadden + heeft schapen (Texelaars) + strand 30 km lang. Toeristen-favoriet." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Friesland heeft 4 eilanden (V/T/A/S). Drenthe + Groningen = geen eilanden." }],
          niveaus: { basis: "Noord-Holland.", simpeler: "Texel = enige Waddeneiland bij Noord-Holland (rest = Friesland).", nogSimpeler: "N-Holland" },
        },
      },
      {
        q: "Wat is bijzonder aan **Flevoland**?",
        options: ["Het is de jongste provincie","Het is de oudste provincie","Het ligt het hoogst","Hier liggen alle Waddeneilanden"],
        answer: 0,
        wrongHints: [null,"Andersom — het is de jongste.","Flevoland is plat, niet hoog.","Waddeneilanden zijn in Noord-Holland en Friesland."],
        uitlegPad: {
          stappen: [{ titel: "Jongste provincie 1986", tekst: "Flevoland is uniek: jongste provincie (officieel sinds 1986) + helemaal op gewonnen land uit voormalige Zuiderzee. Polders drooggepompt vanaf 1942. Daarvoor zee — nu provincie met ~425.000 inwoners. Lelystad is hoofdstad." }],
          woorden: [{ woord: "Flevoland", uitleg: "12e provincie sinds 1986. Op gewonnen land. ~425.000 inwoners." }],
          theorie: "Vergelijk: andere provincies bestaan al eeuwen. Friesland, Holland, Brabant = oeroud. Flevoland uitzondering — bewust gemaakt.",
          voorbeelden: [{ type: "tijdlijn", tekst: "1932 Afsluitdijk → 1942 eerste polder → 1957 + 1968 meer polders → 1986 officieel provincie." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Niet oudste (juist jongste). Niet hoogst (plat). Waddeneilanden bij N-Holland + Friesland." }],
          niveaus: { basis: "Jongste, uit zee.", simpeler: "Flevoland = jongste provincie (1986), gewonnen uit Zuiderzee.", nogSimpeler: "Jongste" },
        },
      },
      {
        q: "Hoeveel inwoners heeft Nederland ongeveer (2026)?",
        options: ["~18 miljoen","~5 miljoen","~50 miljoen","~150 miljoen"],
        answer: 0,
        wrongHints: [null,"Te weinig — meer dan dat.","Veel te veel — Nederland is een klein landje.","Veel te veel — denk aan een klein landje."],
        uitlegPad: {
          stappen: [{ titel: "~18 miljoen NL'ers", tekst: "Nederland heeft ruim 18 miljoen inwoners (die grens ging in 2024 over). Klein land qua oppervlak (41.500 km²) maar dichtbevolkt: ~430 mensen per km². Een van de dichtstbevolkte landen van Europa." }],
          woorden: [{ woord: "bevolkingsdichtheid", uitleg: "Aantal mensen per km². NL = 430/km² (heel hoog)." }],
          theorie: "Groei NL: 1900 = 5 miljoen. 1950 = 10 miljoen. 2000 = 16 miljoen. 2024 = 18 miljoen. Voorspelling 2050: ~19,5 miljoen.",
          voorbeelden: [{ type: "vergelijk", tekst: "Duitsland 84 mln. België 11,7 mln. Frankrijk 68 mln. NL middelmaat. Maar dichtheid: NL > meeste Europese landen (uitgezonderd Malta, Monaco)." }],
          basiskennis: [{ onderwerp: "Niet andere getallen", uitleg: "5 miljoen = wereld-historisch (NL rond 1900). 50 mln = veel te veel. 150 mln = onmogelijk voor klein landje." }],
          niveaus: { basis: "~18 miljoen.", simpeler: "Nederland heeft ruim 18 miljoen inwoners.", nogSimpeler: "18 mln" },
        },
      },
      { q: "Wat is de **hoofdstad** van Nederland?", options: ["Amsterdam","Den Haag","Rotterdam","Utrecht"], answer: 0, wrongHints: [null, "Regeringsstad, geen hoofdstad.", "Grootste haven.", "Niet."] },
      { q: "Welke stad is de **regeringsstad** van NL?", options: ["Den Haag","Amsterdam","Rotterdam","Utrecht"], answer: 0, wrongHints: [null, "Hoofdstad.", "Niet.", "Niet."] },
      { q: "Hoeveel **provincies** heeft NL?", options: ["12","11","13","10"], answer: 0, wrongHints: [null, "Bijna.", "Te veel.", "Te weinig."] },
      { q: "Welke is een NL-provincie?", options: ["Friesland","Beieren","Vlaanderen","Bretagne"], answer: 0, wrongHints: [null, "Duits.", "Belgisch.", "Frans."] },
      { q: "Welke **rivier** stroomt door Rotterdam?", options: ["Nieuwe Maas","Rijn","IJssel","Amstel"], answer: 0, wrongHints: [null, "Er stroomt wel Rijnwater mee, maar de rivier in Rotterdam heeft een andere naam.", "Andere richting.", "Door Amsterdam."] },
      { q: "Welke twee **landen** grenzen aan NL?", options: ["Duitsland + België","Frankrijk + Duitsland","Engeland + België","Italië + Frankrijk"], answer: 0, wrongHints: [null, "Niet — Frankrijk grenst niet aan NL.", "Niet — Engeland ligt over de Noordzee.", "Niet — die liggen veel zuidelijker."] },
      { q: "In welke **provincie** ligt Amsterdam?", options: ["Noord-Holland","Zuid-Holland","Utrecht","Flevoland"], answer: 0, wrongHints: [null, "Rotterdam/Den Haag daar.", "Anders.", "Anders."] },
      { q: "De **Waddeneilanden** liggen in het ... van Nederland?", options: ["Noorden","Zuiden","Westen","Oosten"], answer: 0, wrongHints: [null, "Niet.", "Niet exact.", "Niet."] },
      { q: "**IJsselmeer** ontstond door?", options: ["De aanleg van de Afsluitdijk","Graafwerk door mensen","Een smeltende gletsjer","Een fabriek die water oppompte"], answer: 0, wrongHints: [null, "Niemand heeft dit meer uitgegraven — wat gebeurde er in 1932?", "Geen gletsjer — denk aan wat er in 1932 klaar was.", "Geen fabriek — denk aan wat er in 1932 klaar was."] },
      { q: "Welke **provincie** is de nieuwste (jongste)?", options: ["Flevoland","Limburg","Zeeland","Groningen"], answer: 0, wrongHints: [null, "Limburg bestaat al eeuwen.", "Zeeland is een hele oude provincie.", "Groningen is een hele oude provincie."] },
      { q: "Hoogste **berg** in NL ligt in?", options: ["Limburg","Friesland","Zeeland","Noord-Holland"], answer: 0, wrongHints: [null, "Geen bergen.", "Niet hoog.", "Niet."] },
      { q: "Welke provincie ligt het **meest noordelijk**?", options: ["Groningen","Limburg","Zeeland","Drenthe"], answer: 0, wrongHints: [null, "Limburg ligt in het zuiden.", "Zeeland ligt zuidwest.", "Drenthe ligt noord, maar er ligt nog een provincie boven."] },
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
    "Alles over Nederland in één leerpad: 12 provincies + hoofdsteden, 3 grote rivieren, 5 grootste steden, Waddeneilanden, Deltawerken en de buurlanden. toets-relevant voor groep 7-8.",
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
