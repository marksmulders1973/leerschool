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
      },
      {
        q: "Wat betekent **blauw** op een kaart meestal?",
        options: ["Water","Bergen","Bos","Steden"],
        answer: 0,
        wrongHints: [null,"Bruin/grijs.","Groen.","Vaak grijs of zwart."],
      },
      {
        q: "Wat doe je **eerst** als je een kaart krijgt?",
        options: ["Titel en legenda lezen","Antwoorden gokken","Kompasroos draaien","Schaal verwijderen"],
        answer: 0,
        wrongHints: [null,"Geen plan.","Kan niet.","Sloop niet de kaart."],
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
      },
      {
        q: "Amsterdam ligt **boven** Rotterdam op de kaart. Dus Amsterdam ligt:",
        options: ["Noord van Rotterdam","Zuid van Rotterdam","Oost van Rotterdam","West van Rotterdam"],
        answer: 0,
        wrongHints: [null,"Andersom.","Dat is rechts.","Dat is links."],
      },
      {
        q: "Welke richting ligt **rechts-onder** op een kaart?",
        options: ["Zuidoost","Noordoost","Zuidwest","Noordwest"],
        answer: 0,
        wrongHints: [null,"Rechts-boven.","Links-onder.","Links-boven."],
      },
      {
        q: "Tussen N en O ligt:",
        options: ["NO (Noordoost)","NW (Noordwest)","ZO (Zuidoost)","ZW (Zuidwest)"],
        answer: 0,
        wrongHints: [null,"Dat ligt tussen N en W.","Tussen Z en O.","Tussen Z en W."],
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
      },
      {
        q: "Schaal 1:100.000. **5 cm** op kaart = ___ in het echt.",
        options: ["5 km","500 m","50 km","0,5 km"],
        answer: 0,
        wrongHints: [null,"Veel te klein.","Te groot.","Te klein."],
      },
      {
        q: "Schaal **1:50.000**. 2 cm = ___ in het echt.",
        options: ["1 km","100 m","10 km","2 km"],
        answer: 0,
        wrongHints: [null,"Te klein.","Te groot.","Bij 1:100.000 zou dat kloppen."],
      },
      {
        q: "Een **wereldkaart** heeft welke schaal?",
        options: ["1:50.000.000","1:1.000","1:50","1:200"],
        answer: 0,
        wrongHints: [null,"Te klein voor wereld.","Veel te klein.","Te klein."],
      },
    ],
  },

  {
    title: "Legenda — symbolen interpreteren",
    explanation: "**Legenda** = uitleg van de **symbolen en kleuren** op de kaart.\n\n**Standaard-symbolen**:\n• **Blauwe lijn** = rivier of beek\n• **Blauwe vlek** = meer of zee\n• **Rode lijn** = hoofdweg / snelweg\n• **Zwarte lijn** = spoorlijn (vaak met streepjes)\n• **Stippeltjes** = wandelpad of fietspad\n• **Driehoekje** = berg of camping\n• **Vierkantje** = gebouw of station\n• **Cirkel** = stad (groter = grotere stad)\n• **Boom-tekentje** = bos\n• **Kerk-tekentje** = kerk\n• **Vliegtuig** = vliegveld\n• **Anker** = haven\n\n**Op atlas-kaarten** (politieke):\n• **Lijn met stippen** = landgrens.\n• **Dubbele lijn** = provincie-grens.\n• **Ster** = hoofdstad.\n• **Punt** = gewone stad.\n\n**Cito-vraag-typen**:\n• 'Wat betekent dit symbool?' → kijk in legenda.\n• 'Hoeveel campings staan er op de kaart?' → tel driehoekjes.\n• 'Welke kaart-symbool staat voor X?' → matchen.\n\n**Cito-tip**:\nLegenda staat meestal in een **hoek** of langs de **rand** van de kaart. Als je een symbool niet herkent, **eerst legenda checken**, niet gokken.\n\n**Voorbeeld-vraag**:\n*'Op de kaart staat 5 keer een kerk-tekentje. Hoeveel kerken staan er in dit gebied?'*\n→ 5 (gewoon tellen).",
    checks: [
      {
        q: "Symbool **driehoekje met streepje** betekent vaak:",
        options: ["camping","kerk","station","brug"],
        answer: 0,
        wrongHints: [null,"Heeft kruis-symbool.","Heeft station-rechthoek.","Heeft een ander symbool."],
      },
      {
        q: "Een **rode lijn** op een wegenkaart is meestal:",
        options: ["Snelweg / hoofdweg","Rivier","Wandelpad","Spoor"],
        answer: 0,
        wrongHints: [null,"Blauw.","Stippeltjes.","Zwart met streepjes."],
      },
      {
        q: "Op een atlas, **ster** = ?",
        options: ["Hoofdstad","Bos","Berg","Vliegveld"],
        answer: 0,
        wrongHints: [null,"Geen ster.","Driehoek.","Vliegtuig-symbool."],
      },
      {
        q: "Wat doe je als je een **onbekend symbool** ziet?",
        options: ["Legenda checken","Gokken","Negeren","Symbool overschrijven"],
        answer: 0,
        wrongHints: [null,"Niet zinvol.","Mis je info.","Mag niet."],
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
      },
      {
        q: "Stad A ligt links-boven. Stad B ligt rechts-onder. Welke richting moet je lopen van A naar B?",
        options: ["Zuidoost","Noordwest","Zuidwest","Noordoost"],
        answer: 0,
        wrongHints: [null,"Andersom.","Andersom horizontaal.","Andersom verticaal."],
      },
      {
        q: "**Blauwe vlek** op kaart =?",
        options: ["meer/zee","bos","berg","stad"],
        answer: 0,
        wrongHints: [null,"Groen.","Bruin.","Punt of cirkel."],
      },
      {
        q: "Schaal 1:25.000. **1 cm** = ___ m.",
        options: ["250 m","25 m","2.500 m","2,5 km"],
        answer: 0,
        wrongHints: [null,"Reken opnieuw — 1 cm op kaart × 25.000 = ?","Te groot — kijk welke eenheid de vraag wil.","Klopt qua afstand maar fout uitgedrukt — let op of het antwoord in m of km moet."],
      },
      {
        q: "Op een kaart staat **N-pijl** naar links. Wat betekent dat?",
        options: ["Noord is naar links (kaart is gedraaid)","Kaart is verkeerd","Noord is altijd boven","Kompas is kapot"],
        answer: 0,
        wrongHints: [null,"Niet per se.","Niet altijd.","Geen reden."],
      },
      {
        q: "Welke schaal toont een **groter gebied**?",
        options: ["1:1.000.000","1:10.000","1:1.000","1:100"],
        answer: 0,
        wrongHints: [null,"Kleiner gebied.","Veel kleiner.","Heel klein."],
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
