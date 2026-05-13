// Leerpad: Kaartlezen — legenda, schaal, kompasroos
// 5 stappen voor groep 5-8, studievaardigheden / atlas.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#42a5f5",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["🗺️","🧭","📏","📍","🏆"];

const chapters = [
  { letter: "A", title: "Wat is een kaart?", emoji: "🗺️", from: 0, to: 0 },
  { letter: "B", title: "Kompasroos — windrichtingen", emoji: "🧭", from: 1, to: 1 },
  { letter: "C", title: "Schaal — afstanden meten", emoji: "📏", from: 2, to: 2 },
  { letter: "D", title: "Legenda — symbolen lezen", emoji: "📍", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een kaart?",
    explanation: "Een **kaart** is een tekening van een **stuk van de wereld** vanuit de lucht (vogelvlucht). Geeft weer waar dingen liggen.\n\n**Soorten kaarten**:\n• **Wegenkaart**: wegen, steden, fietspaden.\n• **Topografische kaart**: hoogtes, rivieren, bossen.\n• **Atlas-kaart**: landen en grenzen.\n• **Plattegrond**: gebouw of stadsdeel van bovenaf.\n\n**Onderdelen van een kaart**:\n1. **Titel** — waar gaat de kaart over?\n2. **Kompasroos** — waar is noord, zuid, oost, west?\n3. **Schaal** — hoeveel km is 1 cm op de kaart?\n4. **Legenda** — wat betekenen kleuren en symbolen?\n5. **Coördinaten** — soms een raster met letters/cijfers (B3, C5).\n\n**Kleuren op een kaart** (algemene regel):\n• **Blauw** = water (zeeën, rivieren, meren).\n• **Groen** = laagland, weiland.\n• **Geel/bruin** = bergen, hoogland.\n• **Wit** = sneeuw of geen info.\n• **Rood** = hoofdwegen.\n\n**Cito-tip**:\nLees ALTIJD eerst de **titel** en de **legenda** voordat je de kaart bekijkt. Anders weet je niet wat je ziet.",
    checks: [
      {
        q: "Welke is **GEEN** onderdeel van een kaart?",
        options: ["Geluid","Schaal","Kompasroos","Legenda"],
        answer: 0,
        wrongHints: [null,"Wel onderdeel.","Wel onderdeel.","Wel onderdeel."],
        uitlegPad: {
          stappen: [{ titel: "Kaart = visueel", tekst: "Kaart is plat/visueel — geen geluid. Schaal/kompasroos/legenda horen erbij." }],
          woorden: [{ woord: "kaartonderdelen", uitleg: "Titel, schaal, kompasroos, legenda, coördinaten." }],
          theorie: "Kaarten zijn 2D visueel. Geluid hoort bij video, niet bij kaart.",
          voorbeelden: [{ type: "lijst", tekst: "Standaard: titel, schaal, kompasroos, legenda — geen audio." }],
          basiskennis: [{ onderwerp: "FOUT-vraag", uitleg: "Vraag wat NIET hoort. Geluid is de afwijker." }],
          niveaus: { basis: "Geluid. A.", simpeler: "Kaart is plaatje (geen geluid). Schaal/kompasroos/legenda horen er WEL bij. = A.", nogSimpeler: "Geluid = A." },
        },
      },
      {
        q: "Wat betekent **blauw** op een kaart meestal?",
        options: ["Water","Bergen","Bos","Steden"],
        answer: 0,
        wrongHints: [null,"Bruin/grijs.","Groen.","Vaak grijs of zwart."],
        uitlegPad: {
          stappen: [{ titel: "Blauw = water", tekst: "Universele kaart-conventie: blauw = water (zee, rivier, meer)." }],
          woorden: [{ woord: "kleurcodes", uitleg: "Kaarten gebruiken vaste kleuren voor terreinsoorten." }],
          theorie: "Standaard kleuren: blauw=water, groen=laagland, geel/bruin=hoogland.",
          voorbeelden: [{ type: "tabel", tekst: "Blauw=water. Groen=bos/weiland. Bruin=bergen. Rood=hoofdwegen." }],
          basiskennis: [{ onderwerp: "Universeel", uitleg: "Werkt op bijna elke wereldkaart — wereldwijde conventie." }],
          niveaus: { basis: "Water. A.", simpeler: "Blauw op kaart = water (zee, rivier, meer). Bergen=bruin, bos=groen. = A.", nogSimpeler: "Water = A." },
        },
      },
      {
        q: "Wat doe je **eerst** als je een kaart krijgt?",
        options: ["Titel en legenda lezen","Antwoorden gokken","Kompasroos draaien","Schaal verwijderen"],
        answer: 0,
        wrongHints: [null,"Geen plan.","Kan niet.","Sloop niet de kaart."],
        uitlegPad: {
          stappen: [{ titel: "Eerst oriënteren", tekst: "Lees titel (waar gaat het over?) en legenda (wat betekenen symbolen?). Dan begin je." }],
          woorden: [{ woord: "kaart-strategie", uitleg: "Eerst overzicht, dan details lezen." }],
          theorie: "Net als bij teksten: eerst titel + samenvatting (legenda) → dan details bekijken.",
          voorbeelden: [{ type: "stap", tekst: "1) Titel lezen. 2) Legenda checken. 3) Kaart-vraag aanpakken." }],
          basiskennis: [{ onderwerp: "Tijdwinst", uitleg: "Begrip vooraf bespaart tijd bij vragen." }],
          niveaus: { basis: "Titel + legenda. A.", simpeler: "Eerst titel (=onderwerp) + legenda (=symbolen). Dan kun je kaart goed lezen. = A.", nogSimpeler: "Titel+legenda = A." },
        },
      },
    ],
  },

  {
    title: "Kompasroos — windrichtingen",
    explanation: "**Kompasroos** = symbool dat **windrichtingen** aanwijst.\n\n**4 hoofdrichtingen**:\n• **N** = Noord (boven)\n• **Z** = Zuid (onder)\n• **O** = Oost (rechts)\n• **W** = West (links)\n\n**Engelse versie**:\n• N (north), S (south), E (east), W (west).\n• 'S' staat dus voor Zuid op Engelse kaarten.\n\n**Tussenrichtingen**:\n• **NO** = Noordoost (boven-rechts)\n• **ZO** = Zuidoost (onder-rechts)\n• **ZW** = Zuidwest (onder-links)\n• **NW** = Noordwest (boven-links)\n\n**Trucje om te onthouden**:\n*'**N**ooit **O**p **Z**ondag **W**erken'* — N-O-Z-W tegen de klok in (bovenaan beginnen, dan oost, zuid, west).\n\n**Op een kaart**:\n• **Boven** = Noord (meestal).\n• **Onder** = Zuid.\n• **Rechts** = Oost.\n• **Links** = West.\n\n**Cito-vraag-typen**:\n• 'Welke richting ligt stad X t.o.v. stad Y?'\n• 'Loop je naar het noorden, kom je aan bij...?'\n\n**Voorbeeld**:\nAmsterdam ligt **noord** van Rotterdam (zit hogerop op de kaart).\nRotterdam ligt dus **zuid** van Amsterdam.\n\n**Cito-tip**:\nKijk altijd waar de **N-pijl** wijst. Soms is 'noord' niet boven (op vakantie-kaarten of plattegronden).",
    checks: [
      {
        q: "Op een normale kaart, **N** ligt aan de:",
        options: ["bovenkant","onderkant","linkerkant","rechterkant"],
        answer: 0,
        wrongHints: [null,"Dat is Z.","Dat is W.","Dat is O."],
        uitlegPad: {
          stappen: [{ titel: "N = boven", tekst: "Standaard: Noord = boven, Zuid = onder, Oost = rechts, West = links." }],
          woorden: [{ woord: "windrichtingen", uitleg: "N (Noord), Z (Zuid), O (Oost), W (West)." }],
          theorie: "Conventie wereldkaarten: N altijd boven (tenzij draai-pijl iets anders zegt).",
          voorbeelden: [{ type: "kompas", tekst: "Boven=N, onder=Z, rechts=O, links=W." }],
          basiskennis: [{ onderwerp: "Ezelsbrug", uitleg: "'Nooit Op Zondag Werken' — N-O-Z-W tegen klok in vanaf boven." }],
          niveaus: { basis: "Bovenkant. A.", simpeler: "Op kaart staat N (Noord) ALTIJD boven (standaard). = A.", nogSimpeler: "Boven = A." },
        },
      },
      {
        q: "Amsterdam ligt **boven** Rotterdam op de kaart. Dus Amsterdam ligt:",
        options: ["Noord van Rotterdam","Zuid van Rotterdam","Oost van Rotterdam","West van Rotterdam"],
        answer: 0,
        wrongHints: [null,"Andersom.","Dat is rechts.","Dat is links."],
        uitlegPad: {
          stappen: [{ titel: "Boven = Noord", tekst: "Boven op kaart = Noord. Amsterdam boven Rotterdam = Amsterdam Noord van Rotterdam." }],
          woorden: [{ woord: "X ligt Noord van Y", uitleg: "X ligt hogerop op kaart dan Y." }],
          theorie: "Richting-aanduiding: hoger op kaart = noordelijker.",
          voorbeelden: [{ type: "feit", tekst: "Amsterdam (hoger op kaart) is Noord van Rotterdam (lager)." }],
          basiskennis: [{ onderwerp: "NL-feit", uitleg: "Amsterdam (provincie Noord-Holland) ligt boven Rotterdam (Zuid-Holland)." }],
          niveaus: { basis: "Noord van Rotterdam. A.", simpeler: "Amsterdam BOVEN Rotterdam → Amsterdam ligt NOORD van Rotterdam. = A.", nogSimpeler: "Noord = A." },
        },
      },
      {
        q: "Welke richting ligt **rechts-onder** op een kaart?",
        options: ["Zuidoost","Noordoost","Zuidwest","Noordwest"],
        answer: 0,
        wrongHints: [null,"Rechts-boven.","Links-onder.","Links-boven."],
        uitlegPad: {
          stappen: [{ titel: "Rechts + onder", tekst: "Rechts = Oost. Onder = Zuid. Rechts-onder = ZuidOost (ZO)." }],
          woorden: [{ woord: "tussenrichting", uitleg: "Combinatie van twee hoofdrichtingen: NO, ZO, ZW, NW." }],
          theorie: "Diagonale hoeken: NO=rechts-boven, ZO=rechts-onder, ZW=links-onder, NW=links-boven.",
          voorbeelden: [{ type: "kompas", tekst: "NW | NO. ZW | ZO. (rechts-onder = ZO)." }],
          basiskennis: [{ onderwerp: "Volgorde", uitleg: "Verticaal eerst (Z/N), dan horizontaal (O/W). 'Zuid' + 'Oost' = ZuidOost." }],
          niveaus: { basis: "Zuidoost. A.", simpeler: "Rechts (=O) + onder (=Z) = Zuidoost (ZO). = A.", nogSimpeler: "ZO = A." },
        },
      },
      {
        q: "Tussen N en O ligt:",
        options: ["NO (Noordoost)","NW (Noordwest)","ZO (Zuidoost)","ZW (Zuidwest)"],
        answer: 0,
        wrongHints: [null,"Dat ligt tussen N en W.","Tussen Z en O.","Tussen Z en W."],
        uitlegPad: {
          stappen: [{ titel: "N + O = NO", tekst: "Tussenrichting = combinatie. Tussen N en O = NoordOost (NO)." }],
          woorden: [{ woord: "NO", uitleg: "Noordoost — tussen Noord en Oost (rechts-boven hoek)." }],
          theorie: "8-richtingen-kompas: N - NO - O - ZO - Z - ZW - W - NW.",
          voorbeelden: [{ type: "kompas", tekst: "Tussen elke 2 hoofdrichtingen: tussenrichting met dubbele letter." }],
          basiskennis: [{ onderwerp: "Logica", uitleg: "Tussenpunt heet naar beide hoofdrichtingen ernaast." }],
          niveaus: { basis: "NO. A.", simpeler: "Tussen Noord en Oost = NoordOost (NO). Letterlijk de hoek ertussen. = A.", nogSimpeler: "NO = A." },
        },
      },
    ],
  },

  {
    title: "Schaal — werkelijke afstanden",
    explanation: "**Schaal** = verhouding tussen **afstand op de kaart** en **werkelijke afstand**.\n\n**Voorbeeld**:\n• Schaal **1:100.000** betekent: 1 cm op de kaart = 100.000 cm in het echt.\n• 100.000 cm = 1.000 m = **1 km**.\n• Dus 1 cm op kaart = 1 km in het echt.\n\n**Andere schalen**:\n• 1:50.000 → 1 cm = 0,5 km = 500 m.\n• 1:25.000 → 1 cm = 250 m.\n• 1:1.000.000 → 1 cm = 10 km.\n\n**Hoe rekenen**:\n1. Meet de afstand op de kaart in cm.\n2. Vermenigvuldig met de schaal.\n3. Reken om naar km of m.\n\n**Voorbeeld**:\nSchaal 1:100.000. Afstand op kaart = 5 cm.\n• 5 cm × 100.000 = 500.000 cm.\n• 500.000 cm = 5.000 m = **5 km**.\n\n**Schaalbalk**:\nSommige kaarten hebben een **balk** met streepjes en getallen, bijv:\n```\n0  1  2  3  4 km\n|--|--|--|--|\n```\nDan meet je hoe vaak die balk past tussen 2 punten.\n\n**Soorten kaarten + schaal**:\n• **Plattegrond huis**: 1:50 of 1:100 (heel klein gebied).\n• **Stadsplan**: 1:10.000.\n• **Wegenkaart provincie**: 1:200.000.\n• **Wereldkaart**: 1:50.000.000.\n\n**Cito-tip**:\nGroter getal achter de ':' = **kleiner** stuk wereld zichtbaar. 1:1.000.000 toont meer dan 1:1.000.",
    checks: [
      {
        q: "Schaal **1:100.000**. 1 cm op kaart = ___ in het echt.",
        options: ["1 km","100 m","10 km","100 km"],
        answer: 0,
        wrongHints: [null,"Te klein.","Te groot.","Veel te groot."],
        uitlegPad: {
          stappen: [{ titel: "100.000 cm = 1 km", tekst: "1 cm op kaart × 100.000 = 100.000 cm werkelijk = 1.000 m = 1 km." }],
          woorden: [{ woord: "1:100.000", uitleg: "Standaard kaart-schaal voor regio's." }],
          theorie: "Eenheidstruc: 100.000 cm = 1.000 m = 1 km. Bij 1:100.000: 1 cm op kaart = 1 km werkelijk.",
          voorbeelden: [{ type: "tabel", tekst: "1cm = 1km. 5cm = 5km. 12cm = 12km." }],
          basiskennis: [{ onderwerp: "cm→m→km", uitleg: "100 cm = 1 m. 1000 m = 1 km. Dus 100.000 cm = 1 km." }],
          niveaus: { basis: "1 km. A.", simpeler: "Bij 1:100.000 schaal: 1 cm op kaart = 1 km werkelijk. Handig om te onthouden! = A.", nogSimpeler: "1 km = A." },
        },
      },
      {
        q: "Schaal 1:100.000. **5 cm** op kaart = ___ in het echt.",
        options: ["5 km","500 m","50 km","0,5 km"],
        answer: 0,
        wrongHints: [null,"Veel te klein.","Te groot.","Te klein."],
        uitlegPad: {
          stappen: [{ titel: "5 × 1 km", tekst: "Bij 1:100.000: 1cm = 1km. Dus 5 cm = 5 km." }],
          woorden: [{ woord: "schaal-truc", uitleg: "Bij 1:100.000 is cm op kaart direct km werkelijk." }],
          theorie: "5 cm × 100.000 = 500.000 cm = 5.000 m = 5 km.",
          voorbeelden: [{ type: "tabel", tekst: "1cm=1km. 5cm=5km. 10cm=10km." }],
          basiskennis: [{ onderwerp: "Vermenigvuldigingstruc", uitleg: "Cm op kaart × 1 = km werkelijk (bij deze schaal)." }],
          niveaus: { basis: "5 km. A.", simpeler: "1:100.000 → 1cm=1km. Dus 5cm op kaart = 5km werkelijk. = A.", nogSimpeler: "5 km = A." },
        },
      },
      {
        q: "Schaal **1:50.000**. 2 cm = ___ in het echt.",
        options: ["1 km","100 m","10 km","2 km"],
        answer: 0,
        wrongHints: [null,"Te klein.","Te groot.","Bij 1:100.000 zou dat kloppen."],
        uitlegPad: {
          stappen: [{ titel: "2 × 50.000", tekst: "2 cm × 50.000 = 100.000 cm = 1.000 m = 1 km." }],
          woorden: [{ woord: "1:50.000", uitleg: "Tweemaal zo gedetailleerd als 1:100.000. 1cm = 0,5 km." }],
          theorie: "Bij 1:50.000: 1 cm = 500 m = 0,5 km. Dus 2 cm = 1 km.",
          voorbeelden: [{ type: "tabel", tekst: "1cm=0,5km. 2cm=1km. 4cm=2km." }],
          basiskennis: [{ onderwerp: "Vergelijking schalen", uitleg: "1:50k toont 2× kleiner gebied (gedetailleerder) dan 1:100k." }],
          niveaus: { basis: "1 km. A.", simpeler: "Bij 1:50.000 is 1cm = 0,5km. Dus 2cm = 1km werkelijk. = A.", nogSimpeler: "1 km = A." },
        },
      },
      {
        q: "Een **wereldkaart** heeft welke schaal?",
        options: ["1:50.000.000","1:1.000","1:50","1:200"],
        answer: 0,
        wrongHints: [null,"Te klein voor wereld.","Veel te klein.","Te klein."],
        uitlegPad: {
          stappen: [{ titel: "Groot getal = groot gebied", tekst: "Wereld is gigantisch → schaal-getal moet enorm groot zijn (50 miljoen)." }],
          woorden: [{ woord: "wereldkaart-schaal", uitleg: "Heel kleine schaal (groot getal achter :), bv. 1:50.000.000." }],
          theorie: "Hoe groter het getal achter ':', hoe meer wereld op de kaart past.",
          voorbeelden: [{ type: "tabel", tekst: "Plattegrond: 1:50. Stadsplan: 1:10.000. Provinciekaart: 1:200.000. Wereld: 1:50.000.000." }],
          basiskennis: [{ onderwerp: "Logica", uitleg: "Wereld passen op A4 = werkelijke afstand veel kleiner getekend." }],
          niveaus: { basis: "1:50.000.000. A.", simpeler: "Wereld is heel groot → schaal-getal heel groot (50 miljoen). = A.", nogSimpeler: "1:50.000.000 = A." },
        },
      },
    ],
  },

  {
    title: "Legenda — symbolen interpreteren",
    explanation: "**Legenda** = uitleg van de **symbolen en kleuren** op de kaart.\n\n**Standaard-symbolen**:\n• **Blauwe lijn** = rivier of beek\n• **Blauwe vlek** = meer of zee\n• **Rode lijn** = hoofdweg / snelweg\n• **Zwarte lijn** = spoorlijn (vaak met streepjes)\n• **Stippeltjes** = wandelpad of fietspad\n• **Driehoekje** = berg of camping\n• **Vierkantje** = gebouw of station\n• **Cirkel** = stad (groter = grotere stad)\n• **Boom-tekentje** = bos\n• **Kerk-tekentje** = kerk\n• **Vliegtuig** = vliegveld\n• **Anker** = haven\n\n**Op atlas-kaarten** (politieke):\n• **Lijn met stippen** = landgrens.\n• **Dubbele lijn** = provincie-grens.\n• **Ster** = hoofdstad.\n• **Punt** = gewone stad.\n\n**Cito-vraag-typen**:\n• 'Wat betekent dit symbool?' → kijk in legenda.\n• 'Hoeveel campings staan er op de kaart?' → tel driehoekjes.\n• 'Welke kaart-symbool staat voor X?' → matchen.\n\n**Cito-tip**:\nLegenda staat meestal in een **hoek** of langs de **rand** van de kaart. Als je een symbool niet herkent, **eerst legenda checken**, niet gokken.\n\n**Voorbeeld-vraag**:\n*'Op de kaart staat 5 keer een kerk-tekentje. Hoeveel kerken staan er in dit gebied?'*\n→ 5 (gewoon tellen).",
    checks: [
      {
        q: "Welke vorm hoort meestal bij het kaart-symbool voor een **camping**?",
        options: ["Een driehoekje (tent-vorm)","Een kruisje","Een rechthoek","Een anker"],
        answer: 0,
        wrongHints: [null,"Kruisje hoort bij kerk.","Rechthoek hoort bij station/gebouw.","Anker hoort bij haven."],
        uitlegPad: {
          stappen: [{ titel: "Driehoek = tent", tekst: "Op een kaart wordt een camping aangeduid met een driehoekje — het lijkt op een tent. Symbool en betekenis komen overeen met de vorm van het ding zelf." }],
          woorden: [{ woord: "kaart-symbool", uitleg: "Tekentje voor punt op de kaart (camping, kerk, station)." }],
          theorie: "Standaard: driehoekje (tent-vorm) = camping. Kerk = kruisje. Station/gebouw = rechthoek. Anker = haven.",
          voorbeelden: [{ type: "tabel", tekst: "🏕️ camping = driehoek. ⛪ kerk = kruis. 🚉 station = rechthoek. ⚓ haven = anker." }],
          basiskennis: [{ onderwerp: "Visuele logica", uitleg: "Symbolen zijn vereenvoudigde tekening van het ding." }],
          niveaus: { basis: "Driehoekje. A.", simpeler: "Camping = driehoekje (tent-vorm). Kruisje is kerk, rechthoek is station. = A.", nogSimpeler: "Driehoekje = A." },
        },
      },
      {
        q: "Een **rode lijn** op een wegenkaart is meestal:",
        options: ["Snelweg / hoofdweg","Rivier","Wandelpad","Spoor"],
        answer: 0,
        wrongHints: [null,"Blauw.","Stippeltjes.","Zwart met streepjes."],
        uitlegPad: {
          stappen: [{ titel: "Rood = hoofdweg", tekst: "Op wegenkaart: rode lijn = hoofdweg/snelweg (om op te vallen)." }],
          woorden: [{ woord: "rode lijn", uitleg: "Belangrijke wegen — vaak snelwegen." }],
          theorie: "Wegenkaart-conventie: rood (hoofdwegen), geel (provinciaal), zwart (lokaal).",
          voorbeelden: [{ type: "tabel", tekst: "Rood = snelweg. Blauw = water. Zwart-streep = spoor. Stippels = wandel/fietspad." }],
          basiskennis: [{ onderwerp: "Opvallendheid", uitleg: "Rood = signaalkleur, valt op = belangrijke wegen." }],
          niveaus: { basis: "Snelweg. A.", simpeler: "Op wegenkaart = rode lijn meestal hoofd/snelweg. (Rivier=blauw, spoor=zwart streep). = A.", nogSimpeler: "Snelweg = A." },
        },
      },
      {
        q: "Op een atlas, **ster** = ?",
        options: ["Hoofdstad","Bos","Berg","Vliegveld"],
        answer: 0,
        wrongHints: [null,"Geen ster.","Driehoek.","Vliegtuig-symbool."],
        uitlegPad: {
          stappen: [{ titel: "Ster = hoofdstad", tekst: "Op landkaart: ster (★) markeert de hoofdstad van een land." }],
          woorden: [{ woord: "hoofdstad", uitleg: "Belangrijkste stad van een land. Met ster gemarkeerd." }],
          theorie: "Atlas-symbolen: ster = hoofdstad. Punt = gewone stad. Lijn-stippen = grens.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Amsterdam ★ (NL hoofdstad). Berlin ★ (Duitsland)." }],
          basiskennis: [{ onderwerp: "Hoofdstad in legenda", uitleg: "Atlas-legenda toont ster-symbool als 'hoofdstad'." }],
          niveaus: { basis: "Hoofdstad. A.", simpeler: "Ster ★ op atlas = hoofdstad (belangrijkste stad). = A.", nogSimpeler: "Hoofdstad = A." },
        },
      },
      {
        q: "Wat doe je als je een **onbekend symbool** ziet?",
        options: ["Legenda checken","Gokken","Negeren","Symbool overschrijven"],
        answer: 0,
        wrongHints: [null,"Niet zinvol.","Mis je info.","Mag niet."],
        uitlegPad: {
          stappen: [{ titel: "Legenda = naslagwerk", tekst: "Onbekend symbool? → Legenda kijken (uitleg-tabel met alle symbolen)." }],
          woorden: [{ woord: "legenda", uitleg: "Uitleg-vakje met betekenis van symbolen op kaart." }],
          theorie: "Legenda staat meestal in een hoek of langs de rand — eerste hulp bij onbekende tekens.",
          voorbeelden: [{ type: "stap", tekst: "Symbool zie je → naar legenda → 'Aha, dat is een molen'." }],
          basiskennis: [{ onderwerp: "Niet gokken", uitleg: "Cito wil precieze antwoorden. Gokken = punten verliezen." }],
          niveaus: { basis: "Legenda. A.", simpeler: "Onbekend symbool? Kijk in de legenda (uitleg-vakje). Niet gokken. = A.", nogSimpeler: "Legenda = A." },
        },
      },
    ],
  },

  {
    title: "Cito-eindopdracht — kaartlezen mix",
    explanation: "Mix-toets: kompasroos, schaal, legenda, kaartlezen-totaal.",
    checks: [
      {
        q: "Schaal 1:100.000. **8 cm** op de kaart = ___ km.",
        options: ["8 km","80 km","0,8 km","800 km"],
        answer: 0,
        wrongHints: [null,"Te groot.","Te klein.","Veel te groot."],
        uitlegPad: {
          stappen: [{ titel: "8 × 1 km", tekst: "Bij 1:100.000 = 1cm op kaart = 1km werkelijk. 8 cm = 8 km." }],
          woorden: [{ woord: "schaal-truc", uitleg: "Bij 1:100.000 valt cm-op-kaart samen met km-werkelijk." }],
          theorie: "8 cm × 100.000 = 800.000 cm = 8.000 m = 8 km.",
          voorbeelden: [{ type: "stap", tekst: "8cm op kaart = 8km (bij 1:100k)." }],
          basiskennis: [{ onderwerp: "Vermenigvuldigingstruc", uitleg: "Cm op kaart × 1 = km werkelijk (alleen bij 1:100.000)." }],
          niveaus: { basis: "8 km. A.", simpeler: "1:100.000 → 1cm = 1km. 8cm = 8km. = A.", nogSimpeler: "8 km = A." },
        },
      },
      {
        q: "Stad A ligt links-boven. Stad B ligt rechts-onder. Welke richting moet je lopen van A naar B?",
        options: ["Zuidoost","Noordwest","Zuidwest","Noordoost"],
        answer: 0,
        wrongHints: [null,"Andersom.","Andersom horizontaal.","Andersom verticaal."],
        uitlegPad: {
          stappen: [{ titel: "Naar rechts + onder", tekst: "Van links-boven naar rechts-onder = naar O (rechts) + Z (onder) = Zuidoost." }],
          woorden: [{ woord: "richting volgen", uitleg: "Combineer horizontaal (O/W) en verticaal (N/Z) richting." }],
          theorie: "Eindpunt rechts-onder van startpunt: lopen naar Zuidoost (ZO).",
          voorbeelden: [{ type: "kompas", tekst: "Rechts (O) + onder (Z) = ZO." }],
          basiskennis: [{ onderwerp: "Eindpunt bepaalt", uitleg: "Niet startpunt, maar EINDPUNT bepaalt richting." }],
          niveaus: { basis: "Zuidoost. A.", simpeler: "B ligt rechts (=O) en onder (=Z) van A → loop naar ZuidOost (ZO). = A.", nogSimpeler: "ZO = A." },
        },
      },
      {
        q: "**Blauwe vlek** op kaart =?",
        options: ["meer/zee","bos","berg","stad"],
        answer: 0,
        wrongHints: [null,"Groen.","Bruin.","Punt of cirkel."],
        uitlegPad: {
          stappen: [{ titel: "Blauw = water", tekst: "Vlek = vlak. Blauwe vlek = water-oppervlak = meer of zee." }],
          woorden: [{ woord: "blauwe vlek", uitleg: "Gevuld blauw vlak = waterlichaam." }],
          theorie: "Blauw = water (universeel). Vlek = oppervlakte (niet lijn).",
          voorbeelden: [{ type: "tabel", tekst: "Blauwe vlek = meer/zee. Blauwe lijn = rivier. Groene vlek = bos." }],
          basiskennis: [{ onderwerp: "Vlek vs lijn", uitleg: "Vlek = vlak (meer). Lijn = stroom (rivier)." }],
          niveaus: { basis: "Meer/zee. A.", simpeler: "Blauwe vlek = water-oppervlak (meer of zee). Bos=groen, berg=bruin. = A.", nogSimpeler: "Water = A." },
        },
      },
      {
        q: "Schaal 1:25.000. **1 cm** = ___ m.",
        options: ["250 m","25 m","2.500 m","2,5 km"],
        answer: 0,
        wrongHints: [null,"Reken opnieuw — 1 cm op kaart × 25.000 = ?","Te groot — kijk welke eenheid de vraag wil.","Klopt qua afstand maar fout uitgedrukt — let op of het antwoord in m of km moet."],
        uitlegPad: {
          stappen: [{ titel: "1 × 25.000", tekst: "1 cm × 25.000 = 25.000 cm = 250 m." }],
          woorden: [{ woord: "1:25.000", uitleg: "Wandelroute-schaal — 4× zo gedetailleerd als 1:100.000." }],
          theorie: "25.000 cm = 250 m. Bij 1:25.000 dus: 1cm = 250m.",
          voorbeelden: [{ type: "tabel", tekst: "1cm=250m. 4cm=1km. 8cm=2km." }],
          basiskennis: [{ onderwerp: "cm→m", uitleg: "100 cm = 1 m. 25.000 ÷ 100 = 250 m." }],
          niveaus: { basis: "250 m. A.", simpeler: "Bij 1:25.000: 1cm op kaart = 25.000cm werkelijk = 250m. = A.", nogSimpeler: "250 = A." },
        },
      },
      {
        q: "Op een kaart staat **N-pijl** naar links. Wat betekent dat?",
        options: ["Noord is naar links (kaart is gedraaid)","Kaart is verkeerd","Noord is altijd boven","Kompas is kapot"],
        answer: 0,
        wrongHints: [null,"Niet per se.","Niet altijd.","Geen reden."],
        uitlegPad: {
          stappen: [{ titel: "Pijl = oriëntatie", tekst: "N-pijl wijst altijd naar Noord. Pijl naar links = kaart gedraaid, Noord is links." }],
          woorden: [{ woord: "N-pijl", uitleg: "Symbool dat aangeeft welke richting op de kaart Noord is." }],
          theorie: "Niet alle kaarten hebben Noord boven (vakantie-folder, plattegrond). De N-pijl bepaalt altijd.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Plattegrond kasteel: N-pijl naar rechts = Noord = rechts." }],
          basiskennis: [{ onderwerp: "Pijl boven alles", uitleg: "Volg ALTIJD de N-pijl, niet 'boven=Noord' aanname." }],
          niveaus: { basis: "Kaart is gedraaid. A.", simpeler: "N-pijl wijst altijd naar Noord. Pijl naar links = kaart staat anders gedraaid. = A.", nogSimpeler: "Gedraaid = A." },
        },
      },
      {
        q: "Welke schaal toont een **groter gebied**?",
        options: ["1:1.000.000","1:10.000","1:1.000","1:100"],
        answer: 0,
        wrongHints: [null,"Kleiner gebied.","Veel kleiner.","Heel klein."],
        uitlegPad: {
          stappen: [{ titel: "Groter getal = groter gebied", tekst: "Hoe GROTER het getal achter ':' hoe meer wereld op de kaart past." }],
          woorden: [{ woord: "schaal-grootte", uitleg: "1:1.000.000 toont meer dan 1:100." }],
          theorie: "Groot getal = elk cm staat voor meer werkelijke afstand = meer gebied past.",
          voorbeelden: [{ type: "tabel", tekst: "1:100 = kamer. 1:1.000 = gebouw. 1:10.000 = stad. 1:1.000.000 = land." }],
          basiskennis: [{ onderwerp: "Tegenintuïtief", uitleg: "Lijkt klein op kaart, maar getal hoog = groot gebied." }],
          niveaus: { basis: "1:1.000.000. A.", simpeler: "Hoe groter het getal achter ':' hoe groter het gebied. 1.000.000 > 100. = A.", nogSimpeler: "1:1.000.000 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kaartlezenPo = {
  id: "kaartlezen-po",
  title: "Kaartlezen — Cito groep 5-8",
  emoji: "🗺️",
  level: "groep5-8",
  subject: "aardrijkskunde",
  referentieNiveau: "1F",
  sloThema: "Studievaardigheden — kaartlezen",
  prerequisites: [
    { id: "continenten-wereld-po", title: "Continenten + landen", niveau: "po-1F" },
    { id: "werelddelen-landen-po", title: "Werelddelen", niveau: "po-1F" },
  ],
  intro:
    "Kompasroos, schaal, legenda en symbolen op kaarten begrijpen. Cito-stijl. ~12 min.",
  triggerKeywords: [
    "kaart","kaartlezen","atlas","plattegrond","kompasroos","windrichting",
    "noord","zuid","oost","west","schaal","legenda","studievaardigheden",
  ],
  chapters,
  steps,
};

export default kaartlezenPo;
