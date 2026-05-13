// Leerpad: Tachtigjarige Oorlog 1568-1648
// 11 stappen in 6 hoofdstukken (A t/m F).
// Doelgroep: klas 2 onderbouw VO. Examenstof geschiedenis CSE.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  oranje: "#ef6c00",   // Oranje-huis
  spanje: "#c62828",   // Spanje-rood
  republiek: "#1565c0",// Republiek-blauw
  goud: "#ffd54f",     // accent
};

const stepEmojis = [
  "👑",   // A1. aanleiding (Filips II)
  "💥",   // B1. beeldenstorm
  "⚔️",   // B2. Alva
  "🏰",   // C1. Willem van Oranje
  "⚓",   // C2. watergeuzen
  "🛡️",   // D1. beleg Leiden
  "🤝",   // D2. Unie van Utrecht / Republiek
  "📜",   // E1. Plakkaat van Verlatinghe
  "🕊️",  // E2. twaalfjarig bestand
  "🏆",   // F1. Vrede van Münster
  "🎯",   // F2. eindopdracht
];

const chapters = [
  { letter: "A", title: "Aanleidingen", emoji: "👑", from: 0, to: 0 },
  { letter: "B", title: "1566-1568 — opstand begint", emoji: "💥", from: 1, to: 2 },
  { letter: "C", title: "1572-1574 — keerpunt", emoji: "🏰", from: 3, to: 5 },
  { letter: "D", title: "1579-1581 — Republiek + onafhankelijkheid", emoji: "🤝", from: 6, to: 7 },
  { letter: "E", title: "1609-1648 — laatste fase", emoji: "🕊️", from: 8, to: 9 },
  { letter: "F", title: "Eindopdracht", emoji: "🎯", from: 10, to: 10 },
];

// Tijdlijn 1568-1648 met sleuteljaren.
function tijdlijnSvg(activeYear = null) {
  const startY = 1565;
  const endY = 1650;
  const span = endY - startY;
  const xFor = (y) => 20 + ((y - startY) / span) * 280;
  const events = [
    { y: 1566, label: "Beeldenstorm" },
    { y: 1568, label: "Begin oorlog" },
    { y: 1572, label: "Den Briel" },
    { y: 1574, label: "Leiden ontzet" },
    { y: 1579, label: "Unie Utrecht" },
    { y: 1581, label: "Plakkaat" },
    { y: 1609, label: "Bestand" },
    { y: 1648, label: "Vrede Münster" },
  ];
  return `<svg viewBox="0 0 320 110">
<line x1="20" y1="60" x2="300" y2="60" stroke="${COLORS.muted}" stroke-width="1"/>
${events.map((e) => {
    const x = xFor(e.y);
    const active = activeYear === e.y;
    return `
<circle cx="${x}" cy="60" r="${active ? 6 : 4}" fill="${active ? COLORS.warm : COLORS.republiek}" stroke="${active ? "#fff" : "transparent"}" stroke-width="2"/>
<text x="${x}" y="44" text-anchor="middle" fill="${active ? "#fff" : COLORS.muted}" font-size="9" font-family="Arial" font-weight="${active ? "bold" : "normal"}">${e.y}</text>
<text x="${x}" y="80" text-anchor="middle" fill="${active ? "#fff" : COLORS.muted}" font-size="8" font-family="Arial" font-weight="${active ? "bold" : "normal"}">${e.label}</text>`;
  }).join("")}
<text x="160" y="103" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Tachtigjarige Oorlog: 1568 — 1648</text>
</svg>`;
}

// Schematische kaart NL met onderscheid noord (Republiek) vs zuid (Spanje).
function nederlandKaartSvg(year = 1648) {
  const isAfterUnion = year >= 1581;
  return `<svg viewBox="0 0 280 220">
<rect x="0" y="0" width="280" height="220" fill="${COLORS.paper}"/>
<text x="140" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">De Lage Landen ${year >= 1648 ? "(situatie 1648)" : "(situatie ~1568)"}</text>

<!-- Globale buitencontour -->
<polygon points="60,30 220,30 240,80 230,140 200,180 100,190 50,160 40,90" fill="rgba(255,255,255,0.04)" stroke="${COLORS.muted}" stroke-width="1"/>

<!-- Splitsing noord (Republiek, blauw) / zuid (Spanje-Habsburgs, rood) -->
${isAfterUnion ? `
<!-- Noord = Republiek (blauw) -->
<polygon points="60,30 220,30 230,90 200,100 100,110 50,90 40,70" fill="${COLORS.republiek}" opacity="0.55"/>
<text x="140" y="65" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">Republiek der</text>
<text x="140" y="80" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">Zeven Verenigde NL</text>

<!-- Zuid = Spaanse Nederlanden (rood) -->
<polygon points="50,90 200,100 230,140 200,180 100,190 50,160" fill="${COLORS.spanje}" opacity="0.55"/>
<text x="135" y="155" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">Spaanse Nederlanden</text>
<text x="135" y="170" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">(later België)</text>
` : `
<!-- Voor splitsing: heel gebied onder Spanje -->
<polygon points="60,30 220,30 240,80 230,140 200,180 100,190 50,160 40,90" fill="${COLORS.spanje}" opacity="0.45"/>
<text x="140" y="100" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">17 Provinciën</text>
<text x="140" y="115" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">(onder Spanje)</text>
`}

<!-- Steden -->
<circle cx="100" cy="65" r="3" fill="#fff"/>
<text x="105" y="62" fill="#fff" font-size="9" font-family="Arial">Amsterdam</text>
<circle cx="135" cy="80" r="3" fill="#fff"/>
<text x="142" y="79" fill="#fff" font-size="9" font-family="Arial">Leiden</text>
<circle cx="120" cy="50" r="3" fill="${COLORS.warm}"/>
<text x="83" y="42" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold">Den Briel</text>
<circle cx="120" cy="120" r="3" fill="#fff"/>
<text x="125" y="118" fill="#fff" font-size="9" font-family="Arial">Antwerpen</text>
<circle cx="80" cy="160" r="3" fill="#fff"/>
<text x="40" y="158" fill="#fff" font-size="9" font-family="Arial">Brussel</text>
</svg>`;
}

// Drie hoofdoorzaken pijl-diagram.
function oorzakenSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Drie hoofdoorzaken Tachtigjarige Oorlog</text>

<rect x="20" y="40" width="80" height="50" rx="6" fill="${COLORS.spanje}" opacity="0.7"/>
<text x="60" y="58" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">1. Politiek</text>
<text x="60" y="72" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">Filips II eist</text>
<text x="60" y="84" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">centraal gezag</text>

<rect x="120" y="40" width="80" height="50" rx="6" fill="${COLORS.spanje}" opacity="0.7"/>
<text x="160" y="58" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">2. Godsdienst</text>
<text x="160" y="72" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">Calvinisten</text>
<text x="160" y="84" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">vervolgd</text>

<rect x="220" y="40" width="80" height="50" rx="6" fill="${COLORS.spanje}" opacity="0.7"/>
<text x="260" y="58" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">3. Belastingen</text>
<text x="260" y="72" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">Spanje vraagt</text>
<text x="260" y="84" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">veel geld</text>

<line x1="60" y1="95" x2="155" y2="135" stroke="${COLORS.warm}" stroke-width="2" marker-end="url(#arrow80)"/>
<line x1="160" y1="95" x2="160" y2="135" stroke="${COLORS.warm}" stroke-width="2" marker-end="url(#arrow80)"/>
<line x1="260" y1="95" x2="165" y2="135" stroke="${COLORS.warm}" stroke-width="2" marker-end="url(#arrow80)"/>

<defs>
  <marker id="arrow80" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
    <path d="M 0 0 L 6 3 L 0 6 z" fill="${COLORS.warm}"/>
  </marker>
</defs>

<rect x="100" y="140" width="120" height="42" rx="6" fill="${COLORS.republiek}" opacity="0.85"/>
<text x="160" y="158" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">Tachtigjarige Oorlog</text>
<text x="160" y="172" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">1568 – 1648</text>
</svg>`;
}

const steps = [
  // ─── A. Aanleiding ───────────────
  {
    title: "Aanleidingen — Filips II + drie problemen",
    explanation: "Begin 16e eeuw heersten de **Habsburgers** over een gigantisch rijk. **Karel V** regeerde over Spanje, delen van Duitsland, Italië én de **17 Provinciën van de Lage Landen** (~Nederland + België + Luxemburg). Hij was hier geboren (Gent, 1500) en kende het gebied goed.\n\nIn **1555** trad Karel af. Z'n zoon **Filips II** werd koning. Maar Filips:\n• Was opgegroeid in Spanje, niet in de Lage Landen.\n• Sprak geen Nederlands.\n• Was een streng katholiek.\n• Wilde alle macht **centraal** uit Spanje besturen.\n\n**Drie hoofdoorzaken voor de opstand**:\n\n**1. Politiek — verlies van eigen rechten**\n• De 17 Provinciën hadden eeuwenlang **eigen privileges** (rechten van steden + adel).\n• Filips II wilde alles in Madrid beslissen.\n• De adel + steden voelden zich onteerd.\n\n**2. Godsdienst — vervolging van protestanten**\n• In de 16e eeuw verspreidde het **calvinisme** (een vorm van protestantisme) zich snel in de Lage Landen.\n• Filips II vervolgde calvinisten met de **inquisitie**: gevangennemen, martelen, op de brandstapel.\n• Vooral calvinisten in steden (Antwerpen, Gent) werden geslachtofferd.\n\n**3. Belastingen — geld voor Spaanse oorlogen**\n• Spanje voerde dure oorlogen elders.\n• Filips II eiste enorme **belastingen** uit de Lage Landen.\n• Onder andere de **Tiende Penning** — 10% belasting op alle verkopen.\n• Burgers + handelaren waren razend.\n\n**Alle drie samen** maakten dat het in 1566 oorgsm — de **Beeldenstorm** brak uit, en daarna de oorlog.",
    svg: oorzakenSvg(),
    checks: [
      {
        q: "Wie was de Spaanse koning toen de Tachtigjarige Oorlog uitbrak?",
        options: ["Filips II", "Karel V", "Lodewijk XIV", "Filips III"],
        answer: 0,
        wrongHints: [null, "Karel V was zijn vader — die had in 1555 troonsafstand gedaan.", "Lodewijk XIV was Frans, en pas later (~1640+).", "Dat was Filips II's zoon, hij komt later."],
        uitlegPad: {
          stappen: [{ titel: "Filips II — strenge katholiek", tekst: "Filips II (1527-1598) werd in 1555 koning van Spanje EN de 17 Provinciën, na troonsafstand vader Karel V. Streng katholiek. Wilde alle macht centraal vanuit Madrid. Sprak geen Nederlands. Beleid van vervolging protestanten + hoge belastingen veroorzaakte opstand 1568." }],
          woorden: [{ woord: "Filips II", uitleg: "Koning Spanje 1555-1598. Habsburgse dynastie." }, { woord: "Karel V", uitleg: "Vader Filips II. Geboren Gent 1500. Trad af 1555." }],
          theorie: "Karel V kende NL goed (geboren in Gent). Filips II niet — was 'buitenlander'. Vergrootte cultureel verschil + spanning.",
          voorbeelden: [{ type: "tijdlijn", tekst: "1555 Karel V af → Filips II aan. 1566 Beeldenstorm. 1568 oorlog begint. 1598 Filips II dood (oorlog gaat nog 50 jaar door)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Karel V was eerder. Lodewijk XIV = Frans, ~1640+. Filips III = zoon, kwam pas 1598." }],
          niveaus: { basis: "Filips II. A.", simpeler: "Spaanse koning bij begin oorlog 1568 = Filips II. = A.", nogSimpeler: "Filips II = A." },
        },
      },
      {
        q: "Welke godsdienst werd vervolgd door Filips II?",
        options: ["Calvinisme (protestantisme)", "Katholicisme", "Jodendom", "Islam"],
        answer: 0,
        wrongHints: [null, "Filips II was juist katholiek — hij beschermde dat geloof.", "Wel ook (joden), maar de hoofdvervolging in dit conflict betrof calvinisten.", "Niet relevant in 16e-eeuws NL."],
        uitlegPad: {
          stappen: [{ titel: "Calvinisten vervolgd", tekst: "In 16e eeuw verspreidde calvinisme (Johannes Calvijn, Zwitsers protestant) snel in Nederlanden. Filips II zag calvinisten als ketters + bedreiging katholieke kerk. Inquisitie pakte ze op, martelde, verbrandde op brandstapel. Vooral in steden Antwerpen, Gent." }],
          woorden: [{ woord: "calvinisme", uitleg: "Protestants geloof. Streng, sober, geen heiligenbeelden. Volgers van Calvijn (1509-1564)." }, { woord: "inquisitie", uitleg: "Kerkelijke rechtbank tegen ketters. Bekend om martelmethoden." }],
          theorie: "Reformatie 1517 (Luther): protestantisme ontstond. Calvinisme tak: strenger. Verspreidde in NL ~1540. Filips II zag dit als bedreiging — vervolging.",
          voorbeelden: [{ type: "feit", tekst: "Tussen 1523 en 1566 werden ~1300 mensen in NL ter dood gebracht voor ketterij. Veel vluchtten naar Engeland of Duitsland." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Filips II zelf katholiek (beschermde dat). Joden ook vervolgd elders, maar niet hoofdvervolging hier. Islam niet relevant 16e-eeuws NL." }],
          niveaus: { basis: "Calvinisme. A.", simpeler: "Vervolgd: calvinisten (protestanten). = A.", nogSimpeler: "Calvinisme = A." },
        },
      },
    ],
  },

  // ─── B. 1566-1568 ───────────────
  {
    title: "1566 — De Beeldenstorm",
    explanation: "Augustus **1566**: in honderden katholieke kerken in de Lage Landen worden **heiligenbeelden, schilderijen en glas-in-lood** vernield door woedende calvinisten. Dit is de **Beeldenstorm**.\n\n**Waarom?**\n• Calvinisten zagen heiligenbeelden als **afgoderij** (verboden in protestantisme).\n• Ze waren ook woedend over **vervolging + belastingen**.\n• De Beeldenstorm was de eerste massale uiting van protest.\n\n**Hoe begon het?**\n• 10 augustus 1566 in de buurt van Steenvoorde (Vlaanderen).\n• Verspreidde zich razendsnel naar Antwerpen, Gent, Amsterdam, Utrecht.\n• Binnen weken waren honderden kerken vernield.\n\n**Reactie van Filips II**\n• Razend: 'mijn katholieke kerken vernield door ketters!'\n• Stuurde **hertog van Alva** met 10.000 soldaten naar de Nederlanden.\n• Doel: **opstandelingen straffen** + de orde herstellen.\n\n**De adel keert zich af**\nVoor de Beeldenstorm was er al **Smeekschrift der Edelen** (1566) — een verzoek aan de regering om vervolging te stoppen. Spaanse landvoogd noemde de adellijken spottend '**geuzen**' (= bedelaars). De adel pakte die naam trots op — werden **Watergeuzen** (later in oorlog).",
    svg: tijdlijnSvg(1566),
    checks: [
      {
        q: "Wat gebeurde er bij de **Beeldenstorm** (1566)?",
        options: ["Calvinisten vernielden heiligenbeelden in katholieke kerken","Een aardbeving verwoestte kerken","Spaanse soldaten plunderden steden","Een grote stormvloed"],
        answer: 0,
        wrongHints: [null, "Geen natuurramp — een opstand.", "Andersom — de Spanjaarden kwamen pas daarná wraak nemen.", "Niet 'storm' maar 'beeldenstorm' — vernieling van beelden."],
        uitlegPad: {
          stappen: [{ titel: "Augustus 1566 — kerkvernielingen", tekst: "10 augustus 1566 begon Beeldenstorm in Steenvoorde (Vlaanderen). Calvinisten zagen heiligenbeelden + schilderijen als 'afgoderij' (verboden in protestantisme). Vernielden honderden kerken in weken: Antwerpen, Gent, Amsterdam, Utrecht. Plus uiting woede over vervolging + belastingen." }],
          woorden: [{ woord: "Beeldenstorm", uitleg: "Protestantse vernieling van katholieke kerkinrichting 1566." }, { woord: "afgoderij", uitleg: "Verering van beelden ipv God zelf. Calvinisten zagen heiligen als afgoderij." }],
          theorie: "Beeldenstorm was eerste massale uiting van protest. Reactie Filips II: stuurde Alva met 10.000 soldaten. Dit leidde naar échte oorlog (1568).",
          voorbeelden: [{ type: "context", tekst: "Andere kerk-vernielingen in Europa-reformatie: Engeland (1530s onder Henry VIII), Schotland (1559 onder Knox). NL volgde dit patroon laat." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "'Beelden-storm' = stormaanval op beelden, geen weers-storm. Geen natuurramp. Spanjaarden reageerden ERNA." }],
          niveaus: { basis: "Calvinisten vernielden beelden. A.", simpeler: "Beeldenstorm 1566 = calvinisten vernielden heiligenbeelden in kerken. = A.", nogSimpeler: "Vernieling = A." },
        },
      },
      {
        q: "Wat betekent de naam **'geuzen'**?",
        options: ["Bedelaars (oorspronkelijk spotnaam)","Krijgers","Edelen","Calvinistische dominees"],
        answer: 0,
        wrongHints: [null, "Wel werden ze later strijders, maar dat was de oorspronkelijke betekenis niet.", "Andersom — edelen werden zo genoemd om ze te beledigen.", "Niet specifiek dominees."],
        uitlegPad: {
          stappen: [{ titel: "Spotnaam → eretitel", tekst: "1566: lage adel diende bij landvoogdes Smeekschrift der Edelen (verzoek stop vervolging). Spaanse adviseur Berlaymont zei spottend 'ce ne sont que des gueux' (Frans: 'het zijn maar bedelaars'). NL adel pikte naam trots op: 'wij ZIJN geuzen!' Werd eretitel verzet." }],
          woorden: [{ woord: "geus", uitleg: "Frans 'gueux' = bedelaar. Spottend → eretitel verzet." }, { woord: "Watergeuzen", uitleg: "Geuzen die ter zee opereerden (1568-1572). Plunderden Spaanse schepen." }],
          theorie: "Patroon: groep krijgt spotnaam → eigent zich naam toe → wordt eretitel. Modern voorbeeld: 'sufragette' was ook spottend, werd erenaam vrouwenkiesrecht-strijdsters.",
          voorbeelden: [{ type: "soorten", tekst: "Bosgeuzen = op land. Watergeuzen = op zee. Beggars = Engelse benaming. Geuzenliederen werden tijdens oorlog gezongen." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Oorspronkelijk = bedelaars/armoedig. Later wel strijders, maar dat betekenis kwam later. Niet specifiek edelen of dominees." }],
          niveaus: { basis: "Bedelaars (spotnaam). A.", simpeler: "Geuzen = oorspronkelijk 'bedelaars' (spotnaam Spaanse adviseur). Werd eretitel. = A.", nogSimpeler: "Bedelaars = A." },
        },
      },
    ],
  },
  {
    title: "1567-1568 — Alva en het begin van de oorlog",
    explanation: "**Hertog van Alva** kwam in **1567** met een leger naar Brussel. Z'n bijnaam: '**de IJzeren Hertog**'.\n\n**Wat deed Alva?**\n• Stelde een nieuwe rechtbank in: de **Raad van Beroerten** (door Nederlanders 'Bloedraad' genoemd).\n• Veroordeelde duizenden mensen ter dood — 'opstandelingen' uit Beeldenstorm.\n• Twee belangrijke graven (Egmond + Hoorne) werden in 1568 op het marktplein in Brussel **onthoofd**.\n• Voerde nog hogere belastingen in.\n\n**Reactie**: nog meer protest. Veel Nederlanders **vluchtten** naar het buitenland. **Willem van Oranje** (een belangrijke edele die ook moest vluchten) verzamelde een leger in Duitsland.\n\n**1568 — de oorlog begint**\n• Mei 1568: **Slag bij Heiligerlee** (Groningen).\n• Willem van Oranje's leger versloeg een Spaans legertje. **Eerste overwinning**.\n• Maar later in 1568 verloren ze opnieuw. De oorlog leek snel verloren.\n\n**Maar...**\n• Willem bleef volhouden, vluchtte terug naar Duitsland.\n• Tussen 1568 en 1572 bleef Alva de scepter zwaaien.\n• Maar verzet groeide ondergronds — de **Watergeuzen** (vluchtelingen op zee) plunderden Spaanse schepen.\n\n**Willem van Oranje** wordt steeds meer het symbool van het verzet. Hij was geen calvinist (eerst katholiek, later protestant) maar wel iemand die godsdienstvrijheid wilde — radicaal voor die tijd.",
    svg: tijdlijnSvg(1568),
    checks: [
      {
        q: "Wat was de **Bloedraad**?",
        options: ["Rechtbank van Alva die opstandelingen ter dood veroordeelde","Een vrijwilligersleger","Een Nederlandse opstandsbeweging","Een soort straat in Brussel"],
        answer: 0,
        wrongHints: [null, "Geen leger — een rechtbank.", "Andersom — de Bloedraad **strafte** opstandelingen.", "Niet een straat — een bestuurslichaam."],
        uitlegPad: {
          stappen: [{ titel: "Raad van Beroerten — Alva 1567", tekst: "Hertog van Alva stelde 1567 nieuwe rechtbank in: officieel 'Raad van Beroerten' (= 'onlusten'). NL noemden het Bloedraad omdat duizenden ter dood werden veroordeeld voor deelname Beeldenstorm. Bekendste slachtoffers: graven Egmond + Hoorne, onthoofd 1568 in Brussel." }],
          woorden: [{ woord: "Bloedraad", uitleg: "Schertsende naam Nederlanders voor Alva's rechtbank. Officieel: Raad van Beroerten." }, { woord: "Alva", uitleg: "Fernando Álvarez de Toledo, hertog van Alva. Spaanse generaal. Bijnaam 'IJzeren Hertog'." }],
          theorie: "Bloedraad maakte verzet erger, niet kleiner. NL'ers werden bang + boos → vluchtten naar Duitsland/Engeland → vormden verzets-legers. Averechts effect.",
          voorbeelden: [{ type: "slachtoffers", tekst: "Egmond + Hoorne (juni 1568): twee populaire NL-edelen onthoofd op Grote Markt Brussel. Schokte heel Europa. Wereld zag Alva als wreed." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Rechtbank, niet leger. Strafte juist opstand, was niet zelf opstand. Geen straat-naam." }],
          niveaus: { basis: "Alva's strafrechtbank. A.", simpeler: "Bloedraad = Alva's rechtbank die opstandelingen ter dood veroordeelde. = A.", nogSimpeler: "Rechtbank Alva = A." },
        },
      },
      {
        q: "Wanneer begon de Tachtigjarige Oorlog officieel?",
        options: ["1568 (Slag bij Heiligerlee)", "1566", "1572", "1581"],
        answer: 0,
        wrongHints: [null, "Beeldenstorm was 1566, maar oorlog begon pas met de slag.", "Den Briel werd ingenomen in 1572, maar oorlog was al bezig.", "Plakkaat van Verlatinghe was 1581 — onafhankelijkheidsverklaring, geen begin."],
        uitlegPad: {
          stappen: [{ titel: "Mei 1568 — Heiligerlee", tekst: "23 mei 1568: Slag bij Heiligerlee (Groningen). Lodewijk van Nassau (broer Willem van Oranje) versloeg klein Spaans leger. EERSTE militaire overwinning opstand. Hoewel later verloren, geldt 1568 als officieel begin Tachtigjarige Oorlog. Eindigt 80 jaar later in 1648." }],
          woorden: [{ woord: "Heiligerlee", uitleg: "Plaatsje Groningen. Slag 23 mei 1568. Begin oorlog." }, { woord: "Lodewijk van Nassau", uitleg: "Broer Willem van Oranje. Militair commandant. Stierf later in andere slag." }],
          theorie: "Verwar de DRIE belangrijke jaartallen niet: 1566 = Beeldenstorm (voor-oorlog). 1568 = begin oorlog. 1648 = einde. 80 jaar verschil = 'Tachtigjarige'.",
          voorbeelden: [{ type: "klassiek", tekst: "Onthoud: 1568-1648 = 80 jaar = naam oorlog. Mooi rond getal. Examen-vraag: hoeveel jaar duurde de Tachtigjarige Oorlog? → 80 jaar." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "1566 Beeldenstorm = voorspel. 1572 Den Briel = midden. 1581 Plakkaat = onafhankelijkheids-verklaring." }],
          niveaus: { basis: "1568. A.", simpeler: "Tachtigjarige Oorlog begon 1568 (Slag bij Heiligerlee), eindigde 1648. = A.", nogSimpeler: "1568 = A." },
        },
      },
    ],
  },

  // ─── C. 1572-1574 ───────────────
  {
    title: "1572 — Den Briel: het keerpunt",
    explanation: "Op **1 april 1572** veroverden de **Watergeuzen** onder leiding van **Lumey** de stad **Den Briel** (in Zuid-Holland).\n\n**Het beroemde rijmpje**: *\"Den eerste April verloor Alva zijn bril\"* (Den Briel = 'bril').\n\n**Waarom belangrijk?**\n• Eerste **stad** die in handen van de opstand kwam.\n• Daarna sloten meer Hollandse + Zeeuwse steden zich aan: Vlissingen, Enkhuizen, Hoorn, Alkmaar, Leiden.\n• De **noordelijke provincies** (Holland + Zeeland) kwamen massaal in opstand.\n\n**Willem van Oranje wordt stadhouder**\nIn juli 1572 kwam de Staten van Holland in **Dordrecht** bijeen en koos Willem van Oranje tot **stadhouder** (= bestuurder namens de koning, maar nu eigenlijk tegen de koning).\n\n**Spaanse reactie: zware represailles**\nAlva stuurde z'n zoon **Don Frederik** om de noordelijke steden terug te veroveren:\n• **Naarden** (1572): hele bevolking afgeslacht.\n• **Haarlem** (1572-73): 7 maanden belegerd, viel uiteindelijk. Honderden inwoners ter dood gebracht.\n• **Alkmaar** (1573): hield stand. *\"Bij Alkmaar begint de victorie\"*.\n• **Leiden** (1574): kwam aan de beurt.",
    svg: nederlandKaartSvg(1572),
    checks: [
      {
        q: "Welke stad veroverden de Watergeuzen op 1 april 1572?",
        options: ["Den Briel", "Amsterdam", "Leiden", "Haarlem"],
        answer: 0,
        wrongHints: [null, "Amsterdam bleef nog lang aan Spaanse kant, kwam pas later over.", "Leiden werd in 1574 belegerd, niet veroverd in 1572.", "Haarlem werd in 1572-73 belegerd door Spanjaarden."],
        uitlegPad: {
          stappen: [{ titel: "Den Briel — keerpunt", tekst: "1 april 1572: Watergeuzen onder Lumey veroverden Den Briel (Zuid-Holland). Eerste stad in opstandelingen-handen. Hierop sloten Vlissingen, Enkhuizen, Hoorn, Alkmaar, Leiden aan. Holland + Zeeland kwamen massaal in opstand. KEERPUNT van oorlog. Beroemd rijmpje: 'Den eerste April verloor Alva zijn bril' (Briel=bril)." }],
          woorden: [{ woord: "Den Briel", uitleg: "Klein stadje Zuid-Holland aan monding Maas. Strategisch belangrijk." }, { woord: "Watergeuzen", uitleg: "Verzetsleger op zee. Plunderden Spaanse schepen + namen kuststeden in." }, { woord: "Lumey", uitleg: "Willem II van der Marck. Leider Watergeuzen 1572. Gewelddadig, soms wreed." }],
          theorie: "Voor Den Briel: opstandelingen verloren. Na Den Briel: opstand verspreidde zich razendsnel door Hollandse + Zeeuwse steden. Spaanse zon-keer-punt.",
          voorbeelden: [{ type: "rijmpje", tekst: "'Den eerste April verloor Alva zijn bril' = 1 april (datum) + Den Briel (plek=bril woordspeling) + Alva verloor (=verlies)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Amsterdam bleef Spaans tot 1578. Leiden = beleg 1574, niet 1572. Haarlem werd door Spanje belegerd." }],
          niveaus: { basis: "Den Briel. A.", simpeler: "1 april 1572 = Den Briel veroverd door Watergeuzen. Keerpunt. = A.", nogSimpeler: "Den Briel = A." },
        },
      },
      {
        q: "Wie werd in 1572 in Dordrecht tot **stadhouder van Holland** gekozen?",
        options: ["Willem van Oranje", "Hertog van Alva", "Lumey", "Don Frederik"],
        answer: 0,
        wrongHints: [null, "Alva was Spaans — kwam juist tegen de opstand strijden.", "Lumey was de leider van de Watergeuzen — niet de stadhouder.", "Don Frederik was Alva's zoon, ook Spaans."],
        uitlegPad: {
          stappen: [{ titel: "Willem stadhouder Holland 1572", tekst: "Juli 1572: Staten van Holland kwamen in Dordrecht bijeen. Kozen Willem van Oranje (in ballingschap in Duitsland) tot stadhouder Holland. Formeel namens Filips II — maar feitelijk tegen Spanje. Willem werd vader des vaderlands, hoofd verzet tot z'n moord 1584." }],
          woorden: [{ woord: "Willem van Oranje", uitleg: "1533-1584. Duits-NL edelman. Vader des vaderlands. Vermoord Delft 1584." }, { woord: "stadhouder", uitleg: "'Plaatsvervanger'. In NL: provinciaal hoofd, oorspronkelijk namens koning." }, { woord: "Dordrecht-vergadering", uitleg: "Juli 1572. Eerste vrije Statenvergadering in opstand-tijdperk." }],
          theorie: "Willem was eerst katholiek, werd protestant tijdens oorlog. Wilde godsdienstvrijheid (radicaal voor 16e eeuw). Stierf zonder Republiek-onafhankelijkheid bereikt te zien.",
          voorbeelden: [{ type: "tijdlijn", tekst: "Voor 1572: Willem in ballingschap Duitsland, leger zonder succes. Juli 1572: stadhouder. 1584: vermoord. 1648: 64 jaar na zijn dood eindelijk vrede." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Alva = Spaans. Lumey = Watergeuzen-leider, niet stadhouder. Don Frederik = Alva's zoon, Spaans." }],
          niveaus: { basis: "Willem van Oranje. A.", simpeler: "1572 stadhouder Holland = Willem van Oranje (gekozen in Dordrecht). = A.", nogSimpeler: "Willem = A." },
        },
      },
    ],
  },
  {
    title: "1574 — Beleg en ontzet van Leiden",
    explanation: "**Leiden** werd vanaf **mei 1574** belegerd door de Spanjaarden. Een lange en zware tijd voor de stad.\n\n**Het beleg**\n• Spanjaarden omsingelden Leiden — geen voedsel kon erin.\n• Inwoners aten ratten, paarden, schoenen.\n• Hongersnood, pest. Duizenden Leidenaars stierven.\n• Maar ze gaven niet op — Willem van Oranje had beloofd hulp te sturen.\n\n**Het slimme plan**\n• Willem van Oranje en de Staten van Holland kwamen met een ongelofelijk plan:\n• **De dijken doorsteken** zodat het zeewater het land zou overspoelen.\n• Met **schepen** zouden ze dan via de overstroomde polders naar Leiden kunnen varen.\n• Boeren waren razend (hun akkers werden vernield) maar de Staten zetten door.\n\n**Het ontzet — 3 oktober 1574**\n• Het water steeg langzaam (afhankelijk van wind + getij).\n• Op de avond van 2 oktober **kwam noordenwind op** — water steeg snel.\n• De Geuzenvloot kon Leiden bereiken.\n• De Spanjaarden, in paniek, vluchtten weg.\n• Op **3 oktober** liepen de eerste schepen Leiden binnen — met **brood en haring** voor de uitgehongerde bevolking.\n\n**Tot vandaag**\n• Op **3 oktober** vieren Leidenaars elk jaar **'Leidens Ontzet'** met haring + wittebrood.\n• Willem van Oranje gaf Leiden uit dankbaarheid een **universiteit** (1575) — de oudste universiteit van Nederland.\n\n**Symbolische betekenis**\nHet ontzet van Leiden werd het symbool van **vasthoudendheid + overwinning** in een uitzichtloze strijd. Daarna keerde het tij in de oorlog.",
    svg: nederlandKaartSvg(1574),
    checks: [
      {
        q: "Hoe werd Leiden in 1574 ontzet?",
        options: ["Dijken doorsteken zodat schepen via overstroomd land konden komen","Een tunnel onder de Spanjaarden door","Ze gaven zich over","Door massaal protest"],
        answer: 0,
        wrongHints: [null, "Geen tunnel — het was een waterplan.", "Andersom — Leiden gaf zich juist NIET over.", "Geen protest, maar een militaire actie."],
        uitlegPad: {
          stappen: [{ titel: "Dijken doorsteken — slim waterplan", tekst: "Leiden belegerd mei 1574. Honger, pest, duizenden doden. Willem van Oranje + Staten van Holland: dijken doorsteken! Water overstroomde polders. Boeren razend (akkers vernield) maar het werkte. 2 oktober: noordenwind → water steeg snel. Geuzenvloot voer naar Leiden. 3 oktober: bevrijding met brood + haring." }],
          woorden: [{ woord: "ontzet", uitleg: "Bevrijding belegerde stad door extern leger." }, { woord: "polder", uitleg: "Laaggelegen land achter dijken, drooggemaakt. Bij dijken-door = onder water." }],
          theorie: "Slim plan combineerde NL-watercultuur + getij + wind. Beroemd doordat het werkte ondanks hoge kosten (akkers, oogst). Symbool: NL ZAL zijn ding doen, hoe extreem ook.",
          voorbeelden: [{ type: "details", tekst: "Spanjaarden in paniek toen ze water zagen oprukken — bang dat ze zouden verdrinken. Vluchtten. 14.000 Leidenaars (~1/3) overleefden de honger niet." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Geen tunnel (te complex 16e eeuw). Leiden gaf zich NIET over (anders had Willem niet beloofd hulp). Geen vreedzaam protest — militair ontzet." }],
          niveaus: { basis: "Dijken door, water + schepen. A.", simpeler: "Leiden ontzet 1574 = dijken doorsteken, water hoog, geuzen kwamen per schip. = A.", nogSimpeler: "Dijken door = A." },
        },
      },
      {
        q: "Wat krijgen Leidenaars elk jaar op **3 oktober** te eten?",
        options: ["Haring + wittebrood", "Snert", "Pannenkoeken", "Worst"],
        answer: 0,
        wrongHints: [null, "Lekker, maar geen 3-oktober-traditie.", "Geen Leidens Ontzet-traditie.", "Geen 3-oktober-gerecht."],
        uitlegPad: {
          stappen: [{ titel: "Haring + wittebrood — symbool", tekst: "3 oktober 1574: eerste geuzenschepen bereikten Leiden met brood + haring voor uitgehongerde bevolking. Tot vandaag: jaarlijks vieren Leidenaars 'Leidens Ontzet' met haring + wittebrood. Plus hutspot (gevonden in verlaten Spaans kamp). Vrije dag in Leiden, gratis brood op straat." }],
          woorden: [{ woord: "Leidens Ontzet", uitleg: "Jaarlijkse Leidse herdenking 3 oktober. Sinds 1574, onafgebroken." }, { woord: "hutspot", uitleg: "Stamppot met aardappelen + wortelen + uien. Volgens legende gevonden door wees in Spaans kamp." }],
          theorie: "Universiteit Leiden (1575) gesticht uit dankbaarheid Willem van Oranje. Studenten + stad krijgen vrij op 3 oktober. Toon verbinding tussen vrijheidsstrijd + tradities tot vandaag.",
          voorbeelden: [{ type: "tradities", tekst: "Vroege ochtend 3 oktober: traditionele 'haring-en-wittebrood-uitdeling' op Burcht. 's Avonds: optocht met taptoe. Heel Leiden op straat." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Snert/pannenkoeken/worst = geen 3-oktober. Specifiek haring + wittebrood (en hutspot)." }],
          niveaus: { basis: "Haring + wittebrood. A.", simpeler: "3 oktober Leiden: haring + wittebrood (zoals geuzen bracht 1574). = A.", nogSimpeler: "Haring = A." },
        },
      },
    ],
  },
  {
    title: "1575-1581 — Pacificatie van Gent + Unie van Utrecht",
    explanation: "Na het succes bij Leiden ging de oorlog door. Maar er waren ook **interne conflicten** in de Lage Landen.\n\n**1576 — Pacificatie van Gent**\nNa de **Spaanse Furie** (Spaanse soldaten plunderden Antwerpen en doodden duizenden burgers in 1576), kwamen alle 17 provincies bijeen:\n• **Pacificatie van Gent** = vredesverdrag onder elkaar.\n• Doel: Spanjaarden samen verjagen.\n• Maar het hield niet lang.\n\n**1579 — Splitsing**\nDe 17 Provinciën raakten verdeeld:\n\n**Unie van Atrecht** (jan 1579) — Zuiden\n• Katholieke provinciën (huidig België).\n• Bleven trouw aan **Filips II** + de katholieke kerk.\n\n**Unie van Utrecht** (jan 1579) — Noorden\n• Protestantse provinciën: Holland, Zeeland, Utrecht, Gelderland, Friesland, Groningen, Overijssel.\n• Verbonden zich tegen Spanje en voor godsdienstvrijheid.\n• Dit is het **fundament van de latere Republiek der Zeven Verenigde Nederlanden**.\n\n**Belangrijk gevolg van 1579**\n• Vanaf nu zijn 'noord' en 'zuid' definitief gescheiden.\n• Noord = wat nu Nederland is.\n• Zuid = wat nu België + Luxemburg is.\n• 400+ jaar later draait dat bijna nooit meer terug.\n\n**1581 — Plakkaat van Verlatinghe** ⭐\nOp **26 juli 1581** ondertekenden de Staten-Generaal in Den Haag het **Plakkaat van Verlatinghe**.\n\n**Wat zegt het?**\n*\"De koning heeft zijn plicht verzaakt om zijn onderdanen rechtvaardig te besturen. Daarom verklaren wij dat hij niet langer onze koning is.\"*\n\n• Eerste keer in de wereldgeschiedenis dat onderdanen hun koning afzweren met juridische argumentatie.\n• Inspireerde later de **Amerikaanse Onafhankelijkheidsverklaring (1776)**.\n• De Republiek heeft daarna geen koning meer — wordt geleid door **Staten-Generaal + stadhouder**.\n\n**Willem van Oranje vermoord** *(1584)*\nDrie jaar later werd Willem in **Delft** vermoord door **Balthasar Gerards** — een Spaanse aanhanger. Willem werd zo de **eerste politieke moord** in de moderne tijd. De opstand ging door onder zijn zoon Maurits.",
    svg: tijdlijnSvg(1581),
    checks: [
      {
        q: "Wat was de **Unie van Utrecht** (1579)?",
        options: ["Verbond van noordelijke protestantse provincies tegen Spanje","Een katholieke vredesverdrag","Een handelsverbond","Een Spaanse legereenheid"],
        answer: 0,
        wrongHints: [null, "Andersom — Unie van Utrecht was protestants, anti-katholiek.", "Geen handelsverbond — politiek-militair.", "Niet Spaans — anti-Spaans."],
        uitlegPad: {
          stappen: [{ titel: "Unie Utrecht — fundament Republiek", tekst: "Januari 1579: 7 noordelijke protestantse provincies tekenden Unie van Utrecht: Holland, Zeeland, Utrecht, Gelderland, Friesland, Groningen, Overijssel. Verbond tegen Spanje + voor godsdienstvrijheid. Werd 2 jaar later (1581) basis voor onafhankelijkheid. Tegelijk: Unie van Atrecht (zuidelijk + katholiek) bleef Filips trouw." }],
          woorden: [{ woord: "Unie van Utrecht", uitleg: "Verbond 7 noordelijke provincies 1579. Tegen Spanje." }, { woord: "Unie van Atrecht", uitleg: "Tegenpool 1579: zuidelijke katholieke provincies bleven Filips II trouw." }],
          theorie: "Splitsing 1579 = definitief begin van wat nu NL (noord) en België/Lux (zuid) heet. 446 jaar later nog steeds zo. Geboorte van afgescheiden Noord-Nederland.",
          voorbeelden: [{ type: "kaart", tekst: "Noord: Holland-Zeeland-Utrecht-Gelderland-Friesland-Groningen-Overijssel = Republiek. Zuid: huidig België/Lux + delen Noord-Frankrijk = Spaanse Nederlanden." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Niet katholiek (juist anti). Niet alleen handel (politiek-militair). Niet Spaans (anti-Spaans)." }],
          niveaus: { basis: "7 provincies tegen Spanje. A.", simpeler: "Unie van Utrecht 1579 = 7 noordelijke protestantse provincies samen tegen Spanje. = A.", nogSimpeler: "7 provincies = A." },
        },
      },
      {
        q: "Wat is het **Plakkaat van Verlatinghe** (1581)?",
        options: ["Onafhankelijkheidsverklaring tegen Filips II","Een belastingwet","Een vredesakkoord","Een godsdienstwet"],
        answer: 0,
        wrongHints: [null, "Geen belasting — een politieke verklaring.", "Geen vredesakkoord — juist tegenovergesteld.", "Niet specifiek over godsdienst."],
        uitlegPad: {
          stappen: [{ titel: "26 juli 1581 — koning afgezworen", tekst: "Staten-Generaal tekenden 26 juli 1581 Plakkaat van Verlatinghe. Verklaarden dat ze Filips II niet langer als koning erkenden. Argument: 'koning die volk onderdrukt is tiran, volk mag hem afzweren'. Eerste keer wereldgeschiedenis met juridische redenering. Inspireerde Amerikaanse Onafhankelijkheidsverklaring 1776." }],
          woorden: [{ woord: "Plakkaat van Verlatinghe", uitleg: "1581 NL-onafhankelijkheidsverklaring. 'Verlatinghe' = afzweren." }, { woord: "tirannie", uitleg: "Heerschappij waarbij koning eigen belang boven volk stelt. Argument om hem af te zweren." }],
          theorie: "Revolutionair idee 16e eeuw: dat volk RECHTEN heeft tegen koning. Voor: koning = door God aangesteld, ALTIJD gelijk. Plakkaat zegt: nee, koning moet zorgen voor volk. Doet hij dat niet → mag afgezworen.",
          voorbeelden: [{ type: "invloed", tekst: "Thomas Jefferson (VS) kende Plakkaat. Zijn verklaring 1776 argumenteert vergelijkbaar. Franse Revolutie 1789 ook geïnspireerd door dit idee." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Geen belasting (politiek). Geen vrede (juist conflict). Niet godsdienst-specifiek (politiek)." }],
          niveaus: { basis: "Onafhankelijkheidsverklaring. A.", simpeler: "Plakkaat van Verlatinghe 1581 = NL-onafhankelijkheidsverklaring tegen Filips II. = A.", nogSimpeler: "Onafhank.verklaring = A." },
        },
      },
      {
        q: "Wie werd in **1584** in Delft vermoord?",
        options: ["Willem van Oranje", "Filips II", "Hertog van Alva", "Don Frederik"],
        answer: 0,
        wrongHints: [null, "Filips II stierf in 1598 in Spanje, geen moord.", "Alva stierf in 1582 op natuurlijke wijze in Spanje.", "Don Frederik stierf in 1583 in Italië."],
        uitlegPad: {
          stappen: [{ titel: "10 juli 1584 — Prinsenhof Delft", tekst: "Willem van Oranje vermoord 10 juli 1584 in Prinsenhof Delft door Balthasar Gerards (Bourgondiër, fanatieke katholiek, Spaanse aanhanger). Schoot hem neer op trap. Filips II had moord-prijs op Willems hoofd gezet (25.000 gouden kronen). Gerards werd zwaar gemarteld + executeerd." }],
          woorden: [{ woord: "Balthasar Gerards", uitleg: "Moordenaar Willem van Oranje. 1557-1584. Werd door Spanje als held gezien." }, { woord: "Prinsenhof", uitleg: "Voormalig klooster in Delft, residentie Willem. Kogel-gat in trap nog zichtbaar voor toeristen." }],
          theorie: "Eerste politieke moord in moderne tijd op leider via vuurwapen. Schok-effect Europa. Maar opstand ging door onder zoon Maurits. Toonde: Spanje wilde dood Willem (vandaar moord-prijs) maar verloor uiteindelijk toch.",
          voorbeelden: [{ type: "vandaag", tekst: "Prinsenhof Delft nu museum. Kogel-gaten op trap nog zichtbaar. Toeristen kunnen zien waar het exact gebeurde." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Filips II = natuurlijke dood Spanje 1598. Alva = natuurlijke dood Spanje 1582. Don Frederik = Italië 1583." }],
          niveaus: { basis: "Willem van Oranje. A.", simpeler: "1584 Delft = Willem van Oranje vermoord door Gerards. = A.", nogSimpeler: "Willem = A." },
        },
      },
    ],
  },

  // ─── D. 1579-1581 ───────────────
  {
    title: "De Republiek — bestuur zonder koning",
    explanation: "Na het Plakkaat van Verlatinghe (1581) werd de noordelijke regio **De Republiek der Zeven Verenigde Nederlanden** — bestuurd zonder koning. Een **uniek experiment** in een wereld vol koninkrijken.\n\n**Wie regeerde dan?**\n\n**1. Staten-Generaal**\n• Vergadering van vertegenwoordigers van de 7 provincies.\n• Vergaderden in Den Haag.\n• Beslissingen alleen geldig als **alle 7 provincies akkoord** waren — dat ging vaak heel langzaam.\n\n**2. Provinciale Staten**\n• Elke provincie had eigen Staten (parlement).\n• Holland was rijk + machtig — de **Staten van Holland** waren feitelijk de baas.\n\n**3. Stadhouder**\n• 'Plaatsvervanger' van de koning. Maar er was geen koning, dus de rol veranderde.\n• Eerste belangrijke stadhouder: **Maurits** (zoon van Willem van Oranje, vanaf 1585).\n• Later: **Frederik Hendrik**, **Willem II**, **Willem III**.\n• Stadhouder leidde meestal het leger.\n\n**4. Raadpensionaris**\n• Politieke topfunctie van Holland.\n• Beroemd: **Johan van Oldenbarnevelt** (rond 1600) en **Johan de Witt** (rond 1650).\n\n**Bijzonder voor 17e eeuw**:\n• Geen koning. Geen kardinaal. Macht **gespreid** over veel mensen.\n• Wel **regenten**-elite (rijke koopmansfamilies) — ook geen ideale democratie zoals nu.\n• Maar wel **veel meer vrijheid** dan andere landen.\n• **Godsdienstvrijheid in de praktijk**: katholieken mochten thuis bidden, joden konden komen wonen, vluchtelingen waren welkom.\n\n**Goud + glans — De Gouden Eeuw**\nIn de 17e eeuw werd De Republiek **enorm rijk**:\n• Wereldhandel via VOC (1602) en WIC (1621).\n• Bloei van kunst (Rembrandt, Vermeer, Hals).\n• Bloei van wetenschap (Huygens, Leeuwenhoek).\n• Amsterdam grootste handelshaven van Europa.\n\nMet andere woorden: ondanks (of dankzij) de oorlog werd Nederland het rijkste landje van Europa.",
    svg: nederlandKaartSvg(1648),
    checks: [
      {
        q: "Hoeveel provincies hadden De Republiek?",
        options: ["7", "12", "3", "17"],
        answer: 0,
        wrongHints: [null, "Te veel — er waren 7 noordelijke.", "Te weinig.", "Dat waren de 17 Provinciën onder Filips II — voordat het splitste."],
        uitlegPad: {
          stappen: [{ titel: "7 verenigde provincies", tekst: "Republiek der ZEVEN Verenigde Nederlanden, sinds Unie van Utrecht 1579: Holland, Zeeland, Utrecht, Gelderland, Friesland, Groningen, Overijssel. Plus 'Generaliteitslanden' (Drenthe, deel Brabant + Limburg) niet eigen stem maar wel onder bestuur." }],
          woorden: [{ woord: "Republiek", uitleg: "Officieel: 'Republiek der Zeven Verenigde Nederlanden'. Bestond 1581-1795." }, { woord: "Generaliteitslanden", uitleg: "Gebieden onder bestuur Republiek maar zonder eigen Staten. Drenthe, Brabant-noord, Limburg-noord." }],
          theorie: "12 = huidige NL-provincies (sinds 1986 met Flevoland). 17 = vóór splitsing 1579 (heel NL+BE+LUX). Republiek = specifiek 7 noordelijke.",
          voorbeelden: [{ type: "verschil", tekst: "Vóór 1579: 17 Provinciën onder Spanje. Na 1579: 7 in Republiek (noord) + 10 onder Spanje (zuid). 200 jaar uit elkaar." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "12 = modern NL. 17 = vóór splitsing. 3 = te weinig." }],
          niveaus: { basis: "7. A.", simpeler: "Republiek = 7 Verenigde Nederlanden (sinds 1579). = A.", nogSimpeler: "7 = A." },
        },
      },
      {
        q: "Wie regeerde de Republiek?",
        options: ["Staten-Generaal + stadhouder, geen koning","Een gekozen president","De paus","Filips II"],
        answer: 0,
        wrongHints: [null, "Presidenten kwamen veel later (vooral VS, Frankrijk).", "De paus regeerde Rome — niet Nederland.", "Filips II was juist afgezworen in 1581."],
        uitlegPad: {
          stappen: [{ titel: "Geen koning — uniek experiment", tekst: "Na 1581 had Republiek GEEN koning meer. Bestuur: (1) Staten-Generaal in Den Haag (alle 7 provincies vertegenwoordigd), (2) stadhouder (militair leider, eerst Maurits, later Frederik Hendrik), (3) Raadpensionaris (politieke topambtenaar, bv. Johan van Oldenbarnevelt). Macht gespreid." }],
          woorden: [{ woord: "Staten-Generaal", uitleg: "Centraal parlement Republiek. Vergaderden Den Haag. Alle 7 provincies." }, { woord: "stadhouder", uitleg: "Provinciaal hoofd, militair-leider. Vaak uit Oranje-Nassau familie." }, { woord: "Raadpensionaris", uitleg: "Topambtenaar provincie Holland. Politiek invloedrijkst (Oldenbarnevelt, Johan de Witt)." }],
          theorie: "Republiek uniek 17e eeuw: 100% Europa had koningen, alleen NL niet. Engeland werd kort republiek (Cromwell 1649-60) maar keerde terug naar koning. NL bleef anti-koning tot 1795.",
          voorbeelden: [{ type: "praktisch", tekst: "Beslissing vereiste eensgezindheid alle 7 provincies — duurde vaak maanden. Maar verzekerde dat geen 1 koning misbruik kon maken." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "President = veel later (1789+ VS, Frankrijk). Paus = Italië. Filips II = afgezworen 1581." }],
          niveaus: { basis: "Staten-Generaal + stadhouder. A.", simpeler: "Republiek geregeerd door Staten-Generaal + stadhouder, geen koning. = A.", nogSimpeler: "Geen koning = A." },
        },
      },
    ],
  },
  {
    title: "1581 — Plakkaat van Verlatinghe in detail",
    explanation: "Het **Plakkaat van Verlatinghe** (26 juli 1581) is misschien het belangrijkste document uit de Tachtigjarige Oorlog.\n\n**Wat zegt het letterlijk?**\nDe **Staten-Generaal** verklaren dat ze Filips II niet langer als hun koning erkennen. De redenering:\n\n*'Een koning is door God aangesteld om voor zijn volk te zorgen. Als hij in plaats daarvan zijn volk onderdrukt en vervolgt, dan is hij geen herder maar een tiran. Het volk heeft dan het recht hem af te zweren.'*\n\n**Belangrijke ideeën**:\n1. Het **volk** heeft rechten tegenover de koning.\n2. Bij **tirannie** mag het volk in opstand komen.\n3. **Recht van verzet** is gerechtvaardigd.\n\nDit was **revolutionair** voor de 16e eeuw — toen geloofden de meeste mensen dat koningen door God waren aangesteld en dus per definitie het gelijk hadden.\n\n**Inspiratie voor andere revoluties**\n• **Amerikaanse Onafhankelijkheidsverklaring** (1776): Thomas Jefferson kende het Plakkaat. De argumentatie lijkt sterk op elkaar (\"All men are created equal...\")\n• **Franse Revolutie** (1789): hetzelfde idee — een tiran kan worden afgezet.\n\n**Praktisch gevolg voor de Republiek**\n• Geen koning meer.\n• Eerst hadden ze nog gezocht naar een vervangende koning (Frans of Engels) — maar die wilden niet of werkten niet.\n• Vanaf ~1588 besloot men: we doen het zonder koning. **Republiek**.\n\n**Vergelijking met nu**\nWij vinden 'volk heeft rechten tegenover de regering' vanzelfsprekend. Maar dat idee komt **letterlijk uit dit document**. De Tachtigjarige Oorlog heeft niet alleen Nederland gevormd, maar ook bijgedragen aan moderne democratie.",
    svg: tijdlijnSvg(1581),
    checks: [
      {
        q: "Welk principe staat in het Plakkaat van Verlatinghe?",
        options: ["Bij tirannie mag het volk de koning afzweren","Belasting moet eerlijk zijn","Iedereen krijgt gratis brood","Spanjaarden moeten weg"],
        answer: 0,
        wrongHints: [null, "Wel een grief, maar niet het hoofdprincipe.", "Geen sociale wet uit deze tijd.", "Wel een gevolg, maar niet het juridisch principe."],
        uitlegPad: {
          stappen: [{ titel: "Volkssoevereiniteit", tekst: "Plakkaat-kernidee: koning is HERDER van volk, niet eigenaar. Als koning verandert in TIRAN (onderdrukt volk), dan mag volk hem afzweren. Eerste keer in juridisch document zo geformuleerd. Idee: volk heeft RECHTEN tegenover koning, niet alleen plichten." }],
          woorden: [{ woord: "tirannie", uitleg: "Heerschappij waarbij heerser eigen belang boven volk stelt. Antiek-Grieks begrip." }, { woord: "volkssoevereiniteit", uitleg: "Idee dat macht uiteindelijk bij volk ligt. Modern democratisch principe." }],
          theorie: "Vóór Plakkaat: 'Goddelijk recht van koningen' (Divine Right of Kings) — koning door God aangesteld, dus altijd gelijk. Plakkaat keerde dit om: God wil dat volk goed bestuurd wordt, koning is verantwoording schuldig.",
          voorbeelden: [{ type: "later", tekst: "Dit idee leeft voort: in Franse Revolutie ('Liberté'), Amerikaanse Onafhankelijkheidsverklaring ('We the people'), Universele Verklaring Mensenrechten ('All human beings...')." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Belasting + brood = sociaal/economisch, niet hoofd-principe. 'Spanjaarden weg' = gevolg, niet juridisch principe." }],
          niveaus: { basis: "Volk mag tiran afzweren. A.", simpeler: "Plakkaat-principe: bij tirannie mag volk koning afzweren. = A.", nogSimpeler: "Volk > tiran = A." },
        },
      },
      {
        q: "Welke latere onafhankelijkheidsverklaring werd door het Plakkaat geïnspireerd?",
        options: ["De Amerikaanse Onafhankelijkheidsverklaring (1776)","Het Verdrag van Versailles (1919)","De Universele Verklaring van de Rechten van de Mens (1948)","De Magna Carta (1215)"],
        answer: 0,
        wrongHints: [null, "Verdrag van Versailles ging over WO1.", "Universele Verklaring is na WO2 — andere context.", "Magna Carta was eerder (1215), niet erna."],
        uitlegPad: {
          stappen: [{ titel: "VS 1776 — directe inspiratie", tekst: "Thomas Jefferson kende NL-Plakkaat van 1581. Bij schrijven Amerikaanse Onafhankelijkheidsverklaring 1776 (afzwering koning George III van Engeland) gebruikte hij vergelijkbare argumentatie: tirannie-grieven + recht volk om koning af te zweren. 'When... it becomes necessary for one people to dissolve the political bands...'" }],
          woorden: [{ woord: "Declaration of Independence", uitleg: "VS-onafhankelijkheidsverklaring 4 juli 1776. Door Thomas Jefferson + revisies." }, { woord: "Thomas Jefferson", uitleg: "Schrijver VS-onafhankelijkheidsverklaring. Later 3e president VS." }],
          theorie: "Lijn van inspiratie: NL-Plakkaat 1581 → Engelse Glorious Revolution 1688 → John Locke (filosoof) → Amerikaanse Onafhankelijkheidsverklaring 1776 → Franse Revolutie 1789. NL was eerste in deze keten.",
          voorbeelden: [{ type: "vergelijk", tekst: "Plakkaat: 'koning heeft plicht volk te beschermen, doet hij niet → afzweren'. Jefferson 1776: 'when government becomes destructive of these ends → right of the people to alter or abolish it'." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Versailles 1919 = einde WO1. Universele Verklaring 1948 = na WO2. Magna Carta 1215 = ouder dan Plakkaat (kon Plakkaat niet inspireren)." }],
          niveaus: { basis: "VS-onafh.verklaring 1776. A.", simpeler: "Plakkaat 1581 inspireerde Amerikaanse Onafhankelijkheidsverklaring 1776. = A.", nogSimpeler: "VS 1776 = A." },
        },
      },
    ],
  },

  // ─── E. 1609-1648 ───────────────
  {
    title: "1609-1621 — Twaalfjarig Bestand",
    explanation: "Na 40 jaar oorlog waren beide partijen **uitgeput**. Spanje had ook elders oorlogen (met Frankrijk + Engeland). De Republiek was inmiddels rijk geworden — maar oorlog kostte veel.\n\n**1609** — wapenstilstand voor 12 jaar: het **Twaalfjarig Bestand** (1609-1621).\n\n**Wat veranderde tijdens het Bestand?**\n\n*Oorlog gestopt — vrede praktisch*\n• Spanje erkende de Republiek **als feitelijk onafhankelijk** (niet juridisch).\n• Geen gevechten op land of zee.\n• Handel weer mogelijk.\n\n*Republiek bloeit*\n• De **VOC** (opgericht 1602) breidde uit in Azië.\n• **WIC** opgericht (1621, na het Bestand).\n• Steden groeiden — vooral Amsterdam.\n• Schilders kregen meer werk.\n\n*Interne conflicten*\n• Tijdens het Bestand kwamen er **religieuze ruzies** binnen het protestantisme:\n• **Remonstranten vs Contraremonstranten** — discussie over voorbestemming en vrije wil.\n• **Johan van Oldenbarnevelt** steunde Remonstranten.\n• **Maurits** (stadhouder, militair) steunde Contraremonstranten.\n• 1618: synode van Dordt — Contraremonstranten wonnen.\n• 1619: Oldenbarnevelt **onthoofd** in Den Haag — een politiek dieptepunt.\n\n**1621 — oorlog hervat**\nNa 12 jaar verliep het Bestand. Spanje wou nog een poging om het Noord-Nederland weer te onderwerpen.\n\n**1625-1647 — Frederik Hendrik 'de Stedendwinger'**\n• Stadhouder na Maurits (1625).\n• Veroverde de ene stad na de andere op de Spanjaarden — vandaar bijnaam **'de Stedendwinger'**.\n• Bossche (1629), Maastricht (1632), Breda (1637).\n• Pushde grens van de Republiek tot z'n huidige vorm.\n\n**1639 — Slag bij Duins** (zee)\nNederlandse vloot onder admiraal **Maarten Tromp** verslat enorm Spaanse vloot bij Engelse kust. Spanje verliest z'n suprematie ter zee.",
    svg: tijdlijnSvg(1609),
    checks: [
      {
        q: "Wat was het **Twaalfjarig Bestand** (1609-1621)?",
        options: ["Tijdelijke wapenstilstand tussen Republiek en Spanje","Een oorlog tussen NL en Engeland","Een handelsverdrag","Een nieuwe belasting"],
        answer: 0,
        wrongHints: [null, "Geen oorlog — juist een pauze.", "Wel was er handel, maar dit ging over oorlog/vrede.", "Niet over belasting."],
        uitlegPad: {
          stappen: [{ titel: "1609-1621 — 12 jaar pauze", tekst: "Na 40 jaar oorlog waren beide partijen uitgeput. 1609: wapenstilstand voor 12 jaar (Twaalfjarig Bestand). Spanje erkende Republiek FEITELIJK (niet juridisch). Periode bloei: VOC, Amsterdam-haven, Rembrandt-tijdperk. 1621 hervatte oorlog tot Vrede van Münster 1648." }],
          woorden: [{ woord: "Twaalfjarig Bestand", uitleg: "Wapenstilstand 1609-1621. 12 jaar geen gevechten." }, { woord: "wapenstilstand", uitleg: "Tijdelijke stop gevechten, geen formele vrede." }],
          theorie: "Tijdens Bestand: religieuze spanningen Republiek (Remonstranten vs Contraremonstranten). 1619: Johan van Oldenbarnevelt onthoofd Den Haag — politiek dieptepunt. 1621: oorlog hervat onder Frederik Hendrik.",
          voorbeelden: [{ type: "tijdvakken", tekst: "1568-1609 = eerste oorlogsperiode (41 jaar). 1609-1621 = Bestand (12 jaar). 1621-1648 = tweede oorlogsperiode (27 jaar). Totaal 80 jaar (met pauze)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Geen NL-Engeland-oorlog (kwam later: Engelse Oorlogen 1652+). Geen handelsverdrag. Geen belasting." }],
          niveaus: { basis: "Wapenstilstand Republiek-Spanje. A.", simpeler: "Twaalfjarig Bestand 1609-1621 = 12 jaar pauze in oorlog tussen Republiek + Spanje. = A.", nogSimpeler: "12j pauze = A." },
        },
      },
      {
        q: "Welke stadhouder kreeg de bijnaam 'de Stedendwinger'?",
        options: ["Frederik Hendrik", "Maurits", "Willem van Oranje", "Willem III"],
        answer: 0,
        wrongHints: [null, "Maurits was de stadhouder voor hem (overleden 1625).", "Willem van Oranje was begin van de oorlog — vermoord 1584.", "Willem III was veel later (eind 17e eeuw)."],
        uitlegPad: {
          stappen: [{ titel: "Frederik Hendrik — vele steden veroverd", tekst: "Frederik Hendrik van Oranje (1584-1647), zoon Willem van Oranje + halfbroer Maurits. Stadhouder 1625-1647. Veroverde tijdens hervatting oorlog (1625+) ÉÉN VOOR ÉÉN belangrijke steden op Spanjaarden: Den Bosch (1629), Maastricht (1632), Breda (1637). Bijnaam: 'Stedendwinger'." }],
          woorden: [{ woord: "Frederik Hendrik", uitleg: "Stadhouder 1625-1647. 'Stedendwinger'. Vader Willem II." }, { woord: "stedendwinger", uitleg: "Dwong steden tot overgave via beleg. Strategie + geduld." }],
          theorie: "Pushde grens Republiek tot huidige vorm. Veroveringen vooral in Brabant + Limburg (zuid-NL). Deze gebieden werden 'Generaliteitslanden' onder Republiek-bestuur.",
          voorbeelden: [{ type: "steden", tekst: "1629 Den Bosch (90 dagen beleg). 1632 Maastricht. 1637 Breda. 1644 Sas van Gent. Methodisch + onafgebroken." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Maurits = vorige stadhouder, overleden 1625. Willem van Oranje = vermoord 1584. Willem III = eind 17e eeuw, Engelse koning 1689." }],
          niveaus: { basis: "Frederik Hendrik. A.", simpeler: "Stedendwinger = Frederik Hendrik (stadhouder 1625-47). = A.", nogSimpeler: "Fred. Hendrik = A." },
        },
      },
    ],
  },
  {
    title: "1648 — Vrede van Münster",
    explanation: "Na **80 jaar** (1568-1648) kwam de oorlog tot een einde met de **Vrede van Münster** op **30 januari 1648**.\n\n**Onderdeel van groter geheel**\n• Vrede van Münster was deel van de **Vrede van Westfalen** (1648).\n• Die maakte een einde aan de **Dertigjarige Oorlog** (1618-1648) in Duitsland.\n• Heel Europa was uitgeput — iedereen wou vrede.\n\n**Wat bepaalde de vrede?**\n\n**1. Spanje erkent de Republiek als onafhankelijk**\n• Eindelijk officieel — geen formele banden met Spanje meer.\n• De grenzen tussen noord (NL) en zuid (België-Luxemburg) werden vastgelegd.\n\n**2. Schelde gesloten**\n• De **Schelde** (rivier door Antwerpen) werd dichtgegooid.\n• Antwerpen kon geen schepen meer bereiken.\n• Voordeel voor de Republiek: **Amsterdam werd grootste haven** zonder concurrentie.\n• Nadeel voor Antwerpen: economische ondergang voor 200+ jaar.\n\n**3. Religieuze regelingen**\n• Gewetensvrijheid voor andere godsdiensten erkend.\n• Maar in de Republiek was **calvinisme** de officiële kerk.\n\n**4. Koloniale aanspraken**\n• Republiek behoudt z'n veroveringen in Indië en Amerika.\n• Begin van het Nederlandse koloniale rijk.\n\n**Hoe werd het gevierd?**\n• In Münster: feest met klokken, kanonschoten.\n• In Republiek: dankdiensten in alle kerken.\n• **Schilderij**: 'De Eed van de Vrede van Münster' door Gerard ter Borch — beroemd doek in Rijksmuseum.\n\n**Wat was er bereikt?**\nAfgezien van de vier punten bovengenoemd:\n• Een eigen, onafhankelijk **Nederland**.\n• Een **republiek** in een wereld van koninkrijken.\n• Een handelsmacht die de wereldzeeën bestrijdt.\n• Een mecca voor vluchtelingen en handelaren uit heel Europa.\n• Een rol als 'gangmaker' van de moderne democratie.\n\n**Tot vandaag**: het Plakkaat van Verlatinghe + de Vrede van Münster vormen samen het juridisch fundament van Nederland als zelfstandige staat.\n\n**Maar... niet alles rozengeur**\n• De Republiek dreef ook in **slavenhandel** (WIC) — donkere kant.\n• In de Indonesische archipel werd hard opgetreden tegen lokale bevolking.\n• 'Gouden Eeuw' was niet voor iedereen goud.",
    svg: nederlandKaartSvg(1648),
    checks: [
      {
        q: "In welk jaar eindigde de Tachtigjarige Oorlog?",
        options: ["1648", "1568", "1581", "1609"],
        answer: 0,
        wrongHints: [null, "Dat was juist het BEGIN.", "Plakkaat van Verlatinghe — onafhankelijkheidsverklaring, geen vredesakkoord.", "Twaalfjarig Bestand begon, niet einde van de oorlog."],
        uitlegPad: {
          stappen: [{ titel: "1648 — Vrede van Münster", tekst: "30 januari 1648: Vrede van Münster getekend. Officieel einde Tachtigjarige Oorlog (1568-1648 = 80 jaar). Deel van Vrede van Westfalen (einde Dertigjarige Oorlog ook). Spanje erkende Republiek juridisch onafhankelijk. Schelde gesloten. Begin echte NL-onafhankelijkheid." }],
          woorden: [{ woord: "Vrede van Münster", uitleg: "30 januari 1648. Spaans-Nederlandse vredesverdrag." }, { woord: "Westfaalse Vrede", uitleg: "Verzameling vredesverdragen 1648 (Münster + Osnabrück). Einde Dertigjarige + Tachtigjarige Oorlog." }],
          theorie: "Onthoud klassieke jaartallen: 1568 begin → 1648 einde = 80 jaar = naam oorlog. 1581 Plakkaat (onafhankelijkheidsverklaring) + 1648 Vrede van Münster (formele erkenning) zijn beide cruciaal — 67 jaar uit elkaar.",
          voorbeelden: [{ type: "context", tekst: "Heel Europa was in 1648 uitgeput. Dertigjarige Oorlog (Duitsland) had 8 miljoen doden veroorzaakt. Tijd voor vrede. Allebei oorlogen eindigden samen." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "1568 = begin. 1581 = onafh.verklaring (al lang oorlog bezig). 1609 = Twaalfjarig Bestand begin (pauze, geen einde)." }],
          niveaus: { basis: "1648. A.", simpeler: "Einde Tachtigjarige Oorlog = 1648 Vrede van Münster. = A.", nogSimpeler: "1648 = A." },
        },
      },
      {
        q: "Wat gebeurde er met de **Schelde** door de Vrede van Münster?",
        options: ["Gesloten — Antwerpen werd onbereikbaar voor schepen","Werd internationale rivier","Werd in tweeën gedeeld","Werd drooggelegd"],
        answer: 0,
        wrongHints: [null, "Andersom — werd dicht.", "Geen splitsing — gewoon afgesloten.", "Niet drooggelegd — wel afgesloten."],
        uitlegPad: {
          stappen: [{ titel: "Schelde dicht — Amsterdam wint", tekst: "Vrede van Münster bepaalde: Schelde-rivier (stroomt langs Antwerpen) wordt GESLOTEN voor scheepvaart. Antwerpen onbereikbaar voor zeeschepen. Republiek (Zeeland controleerde monding) blokkeerde. Gevolg: Amsterdam werd grootste handelshaven (geen Antwerpse concurrentie). Antwerpen 200 jaar verarmd." }],
          woorden: [{ woord: "Schelde", uitleg: "Rivier door België, mondt uit in Zeeuwse wateren (Westerschelde)." }, { woord: "Antwerpen", uitleg: "Vlaamse havenstad. Vóór 1585 grootste handelsstad Lage Landen, daarna 200 jaar verarmd." }],
          theorie: "Strategisch besluit Republiek: blokkeer Antwerpen → Amsterdam wint. Echte vrije Schelde-vaart pas in 1839 (Belgische onafhankelijkheid + verdrag). Voor Antwerpen 200 jaar slechte tijden.",
          voorbeelden: [{ type: "wedstrijd", tekst: "Amsterdam ~50.000 inwoners in 1585, ~200.000 in 1648. Antwerpen omgekeerd: ~100.000 in 1585, ~60.000 in 1648. Republiek profiteerde van Spaanse blokkade." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Niet internationaal (juist gesloten). Niet gedeeld. Niet drooggelegd (rivier blijft, alleen geen scheepvaart)." }],
          niveaus: { basis: "Schelde gesloten. A.", simpeler: "Vrede van Münster sloot Schelde → Antwerpen verarmt, Amsterdam wint. = A.", nogSimpeler: "Schelde dicht = A." },
        },
      },
      {
        q: "Welk beroemd schilderij toont de Eed bij de Vrede van Münster?",
        options: ["De Eed van de Vrede van Münster door Gerard ter Borch","De Nachtwacht door Rembrandt","Het Melkmeisje door Vermeer","Geen specifiek schilderij"],
        answer: 0,
        wrongHints: [null, "Nachtwacht is van Rembrandt, ander onderwerp (schutterij).", "Melkmeisje is van Vermeer, dagelijks leven.", "Wel degelijk — Ter Borch."],
        uitlegPad: {
          stappen: [{ titel: "Ter Borch — vredeseed 1648", tekst: "Gerard ter Borch (1617-1681) schilderde 'De Eed van de Vrede van Münster' (1648). Toont historische moment: NL+Spaanse diplomaten leggen vredeseed af. Klein schilderij (45×58 cm), nu in Rijksmuseum Amsterdam. Belangrijk Gouden Eeuw-werk, historisch document." }],
          woorden: [{ woord: "Gerard ter Borch", uitleg: "NL Gouden Eeuw-schilder. Geboren Zwolle. Was zelf in Münster bij vredestekening." }, { woord: "Rijksmuseum", uitleg: "Nationaal museum NL, Amsterdam. Heeft Nachtwacht + Melkmeisje + Eed van Münster." }],
          theorie: "Schilderij is GETUIGE-document: Ter Borch was er zelf bij in Münster. Schilderde belangrijkste diplomaten plus eedaflegging. Combineert historie + portretkunst.",
          voorbeelden: [{ type: "andere Gouden Eeuw", tekst: "Rembrandt = portret + Bijbelse taferelen (Nachtwacht). Vermeer = dagelijks leven (Melkmeisje). Ter Borch = portretten + politiek (Vrede van Münster)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Nachtwacht = schutterij Amsterdam. Melkmeisje = vrouw die melk schenkt. Allebei bekend maar andere onderwerpen." }],
          niveaus: { basis: "Ter Borch. A.", simpeler: "Eed Vrede van Münster geschilderd door Gerard ter Borch (1648). = A.", nogSimpeler: "Ter Borch = A." },
        },
      },
    ],
  },

  // ─── F. Eindopdracht ───────────────
  {
    title: "Eindopdracht — koppel jaartal aan gebeurtenis",
    explanation: "Tijd om alles te combineren! Bij elk jaartal: welke **gebeurtenis** hoort daarbij?\n\n**Snelle samenvatting**:\n\n| Jaar | Gebeurtenis |\n|---|---|\n| 1555 | Filips II wordt koning |\n| 1566 | Beeldenstorm |\n| 1567 | Alva komt naar de Lage Landen |\n| 1568 | Slag bij Heiligerlee — begin oorlog |\n| 1572 | Watergeuzen veroveren Den Briel |\n| 1574 | Ontzet van Leiden (3 oktober) |\n| 1575 | Universiteit van Leiden gesticht |\n| 1576 | Pacificatie van Gent |\n| 1579 | Unie van Utrecht (noord) + Atrecht (zuid) |\n| 1581 | Plakkaat van Verlatinghe |\n| 1584 | Willem van Oranje vermoord (Delft) |\n| 1602 | VOC opgericht |\n| 1609 | Twaalfjarig Bestand begint |\n| 1619 | Oldenbarnevelt onthoofd |\n| 1621 | Bestand verlopen — oorlog hervat |\n| 1639 | Slag bij Duins (Tromp) |\n| 1648 | Vrede van Münster — einde oorlog |\n\n**Veel succes!**",
    svg: tijdlijnSvg(),
    checks: [
      {
        q: "In welk jaar begon de Tachtigjarige Oorlog?",
        options: ["1568", "1572", "1581", "1609"],
        answer: 0,
        wrongHints: [null, "Den Briel veroverd — al midden in de oorlog.", "Plakkaat van Verlatinghe — juist al 13 jaar na het begin.", "Twaalfjarig Bestand — pauze, geen begin."],
        uitlegPad: {
          stappen: [{ titel: "1568 = startjaar", tekst: "Tachtigjarige Oorlog begon officieel 1568 met Slag bij Heiligerlee. Eindigde 1648 met Vrede van Münster. Naam zegt het: 1648 - 1568 = 80 jaar. Klassieke examenvraag. Andere jaartallen zijn keermomenten BINNEN de oorlog." }],
          woorden: [{ woord: "Heiligerlee", uitleg: "Plaatsje Groningen. Slag mei 1568." }],
          theorie: "Geheugentruc: '15-68 → 16-48 = tachtig'. Verschil 80 jaar = naam oorlog. Niet 70 of 90 — exact 80.",
          voorbeelden: [{ type: "andere", tekst: "1572 Den Briel = midden in oorlog (4 jaar bezig). 1581 Plakkaat = onafh.verklaring (13 jaar bezig). 1609 Bestand = wapenstilstand (41 jaar bezig)." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Alle andere zijn momenten BINNEN oorlog, niet begin." }],
          niveaus: { basis: "1568. A.", simpeler: "Tachtigjarige Oorlog begon 1568. = A.", nogSimpeler: "1568 = A." },
        },
      },
      {
        q: "Wat gebeurde er **3 oktober 1574**?",
        options: ["Leiden werd ontzet","Beeldenstorm","Plakkaat van Verlatinghe","Vrede van Münster"],
        answer: 0,
        wrongHints: [null, "Beeldenstorm was 1566.", "Plakkaat was 1581.", "Vrede van Münster was 1648."],
        uitlegPad: {
          stappen: [{ titel: "Leidens Ontzet", tekst: "3 oktober 1574: na maanden beleg + honger bereikten Watergeuzen Leiden via overstroomde polders. Brachten brood + haring + hutspot mee. Spanjaarden vluchten. Tot vandaag herdacht in Leiden met haring + wittebrood + vrije dag." }],
          woorden: [{ woord: "ontzet", uitleg: "Bevrijding van belegerde stad." }],
          theorie: "Sleuteldatum in NL-geschiedenis. Onthoud: '3 oktober' + 'Leiden' + '1574' + 'haring/wittebrood'. Klassieke examen-vraag.",
          voorbeelden: [{ type: "andere data", tekst: "1566 = Beeldenstorm (augustus). 1581 = Plakkaat (juli). 1648 = Münster (januari). Allemaal andere maanden/jaren." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Beeldenstorm 1566 verschillende jaar. Plakkaat 1581. Münster 1648." }],
          niveaus: { basis: "Leiden ontzet. A.", simpeler: "3 oktober 1574 = Leiden ontzet door Watergeuzen. = A.", nogSimpeler: "Leiden = A." },
        },
      },
      {
        q: "Wie schreef de Republiek nooit als hun koning af? *(strikvraag)*",
        options: ["Filips II — hij werd juist afgezworen door het Plakkaat","Alva","Willem van Oranje","Maurits"],
        answer: 0,
        wrongHints: [null, "Alva was Spaanse landvoogd, geen koning.", "Willem was een Nederlandse leider — geen koning.", "Maurits was stadhouder, geen koning."],
        uitlegPad: {
          stappen: [{ titel: "Strikvraag — Filips IS afgezworen", tekst: "Vraag is strikvraag: vraagt wie NOOIT afgezworen werd. Antwoord: 'Filips II — hij werd JUIST WEL afgezworen' (Plakkaat 1581). Andere opties (Alva, Willem, Maurits) waren GEEN koning, dus niet afgezworen. Filips II is enige koning die werd afgezworen." }],
          woorden: [{ woord: "afzweren", uitleg: "Officieel niet meer erkennen als heerser. Gebeurde met Filips II in 1581." }, { woord: "strikvraag", uitleg: "Vraag waarbij het 'juiste' antwoord onverwacht/contra-intuïtief is." }],
          theorie: "Lees vraag goed: 'NOOIT afgezworen' = wie NIET is afgezworen. Filips II = wel afgezworen (door Plakkaat). Anderen waren geen koning (Alva=landvoogd, Willem=leider opstand, Maurits=stadhouder).",
          voorbeelden: [{ type: "check", tekst: "Alva = Spaanse landvoogd, geen koning. Willem = NL stadhouder, geen koning. Maurits = stadhouder, geen koning. Alleen Filips II = koning + afgezworen." }],
          basiskennis: [{ onderwerp: "Lezen", uitleg: "Strikvragen toetsen of leerling vraag goed leest. 'Nooit' = niet, ZON-derling." }],
          niveaus: { basis: "Filips II (wel afgezworen). A.", simpeler: "Strikvraag: Filips II IS afgezworen. Anderen geen koning. = A.", nogSimpeler: "Filips II = A." },
        },
      },
      {
        q: "De Vrede van Münster (1648) was onderdeel van een groter vredesakkoord. Hoe heette dat?",
        options: ["Vrede van Westfalen","Vrede van Versailles","Vrede van Wenen","Vrede van Parijs"],
        answer: 0,
        wrongHints: [null, "Versailles was na WO1 (1919).", "Wenen was na Napoleon (1815).", "Verschillende vredesakkoorden in Parijs door de eeuwen, maar dit was Westfalen."],
        uitlegPad: {
          stappen: [{ titel: "Vrede van Westfalen 1648", tekst: "Vrede van Westfalen = verzamelnaam voor 2 vredesverdragen: (1) Vrede van Münster (NL-Spanje, 30 jan 1648, ook tussen Spanje + Frankrijk in mei). (2) Vrede van Osnabrück (Duitse + Zweedse zaken, 24 okt 1648). Samen einde TWEE oorlogen: Tachtigjarige Oorlog (NL) + Dertigjarige Oorlog (Duitsland)." }],
          woorden: [{ woord: "Vrede van Westfalen", uitleg: "Verzamelnaam vredesverdragen 1648. Naam regio Duitsland." }, { woord: "Dertigjarige Oorlog", uitleg: "1618-1648. Religieuze + politieke oorlog Duitsland. 8 mln doden." }],
          theorie: "Belang Westfalen: eerste keer Europese mogendheden samen vrede sloten in moderne stijl. Basis voor staatensysteem dat tot vandaag bestaat (souvereiniteit, niet-inmenging).",
          voorbeelden: [{ type: "andere vredes", tekst: "1815 Vrede van Wenen = na Napoleon. 1919 Versailles = na WO1. 1763 Parijs = einde Zevenjarige Oorlog. Allemaal andere periodes." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Versailles 1919 = WO1. Wenen 1815 = Napoleon. Parijs = meerdere, niet 1648." }],
          niveaus: { basis: "Vrede van Westfalen. A.", simpeler: "Vrede van Münster 1648 was onderdeel Vrede van Westfalen. = A.", nogSimpeler: "Westfalen = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tachtigjarigeOorlogGeschiedenis = {
  id: "tachtigjarige-oorlog-geschiedenis",
  title: "Tachtigjarige Oorlog 1568-1648",
  emoji: "⚔️",
  level: "klas2",
  subject: "geschiedenis",
  referentieNiveau: "onderbouw",
  sloThema: "Geschiedenis — Tijd van Ontdekkers & Hervormers (Tachtigjarige Oorlog)",
  prerequisites: [
    { id: "bekende-nederlanders-po", title: "Historische Nederlanders", niveau: "po-1F" },
    { id: "tijdvakken-nederland-po", title: "Tijdvakken Nederland", niveau: "po-kerndoel" },
  ],
  intro:
    "Hoe de Republiek der Zeven Verenigde Nederlanden ontstond uit 80 jaar oorlog tegen Spanje. Van de Beeldenstorm en Filips II's drie problemen, via Den Briel + ontzet van Leiden, tot het Plakkaat van Verlatinghe (1581) en de Vrede van Münster (1648). Met Willem van Oranje als rode draad. Examenstof CSE Geschiedenis.",
  triggerKeywords: [
    "tachtigjarige oorlog", "tachtigjarige", "80jarige oorlog",
    "filips ii", "filips de tweede",
    "beeldenstorm",
    "alva", "hertog van alva", "bloedraad", "raad van beroerten",
    "egmond", "hoorne", "egmond hoorne",
    "willem van oranje", "willem de zwijger",
    "watergeuzen", "geuzen", "den briel", "lumey",
    "haarlem", "alkmaar", "leiden", "ontzet leiden", "beleg leiden",
    "leidens ontzet", "3 oktober",
    "pacificatie van gent", "spaanse furie",
    "unie van utrecht", "unie van atrecht",
    "plakkaat van verlatinghe", "verlatinghe", "1581",
    "republiek der zeven verenigde nederlanden", "republiek",
    "staten-generaal", "stadhouder", "raadpensionaris",
    "maurits", "frederik hendrik", "stedendwinger",
    "twaalfjarig bestand", "wapenstilstand 1609",
    "oldenbarnevelt", "remonstranten",
    "vrede van munster", "vrede van westfalen", "1648",
    "schelde gesloten", "antwerpen schelde",
    "voc", "wic",
    "calvinisme", "calvinist", "protestants",
  ],
  chapters,
  steps,
};

export default tachtigjarigeOorlogGeschiedenis;
