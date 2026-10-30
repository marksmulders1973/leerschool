// Leerpad: Het lichaam + gezondheid — groep 6-8 PO.
// Toets-onderdeel wereldoriëntatie (natuur+gezondheid). Referentieniveau 1F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  bone: "#f5f5f5",
  blood: "#ef5350",
  lung: "#80cbc4",
  heart: "#e57373",
  liver: "#a1887f",
  highlight: "#ffd54f",
};

const stepEmojis = ["🦴", "❤️", "🫁", "🥦", "💪", "🏆"];

const chapters = [
  { letter: "A", title: "Skelet en botten", emoji: "🦴", from: 0, to: 0 },
  { letter: "B", title: "Spieren + bloed", emoji: "❤️", from: 1, to: 1 },
  { letter: "C", title: "Organen", emoji: "🫁", from: 2, to: 2 },
  { letter: "D", title: "Voeding (Schijf van Vijf)", emoji: "🥦", from: 3, to: 3 },
  { letter: "E", title: "Hygiëne + slaap + sport", emoji: "💪", from: 4, to: 4 },
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function skeletSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Belangrijkste botten</text>
<!-- Schedel -->
<circle cx="160" cy="50" r="22" fill="${COLORS.bone}" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="200" y="48" fill="${COLORS.text}" font-size="11" font-family="Arial">schedel (hoofd)</text>
<!-- Wervelkolom -->
<rect x="156" y="72" width="8" height="60" fill="${COLORS.bone}" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="200" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial">wervelkolom (rug)</text>
<!-- Ribben -->
<path d="M 130 90 Q 160 110 190 90 Q 195 105 190 120 Q 160 135 130 120 Q 125 105 130 90" fill="${COLORS.bone}" opacity="0.5" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="220" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">ribben</text>
<!-- Bovenbeen -->
<rect x="148" y="135" width="6" height="55" fill="${COLORS.bone}" stroke="${COLORS.curve}" stroke-width="1"/>
<rect x="166" y="135" width="6" height="55" fill="${COLORS.bone}" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="200" y="170" fill="${COLORS.text}" font-size="11" font-family="Arial">bovenbeen-bot</text>
<text x="200" y="184" fill="${COLORS.muted}" font-size="10" font-family="Arial">(grootste bot)</text>
</svg>`;
}

function organenSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Belangrijkste organen</text>
<!-- Hersenen -->
<ellipse cx="80" cy="55" rx="22" ry="14" fill="${COLORS.heart}" opacity="0.7"/>
<text x="80" y="60" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">hersenen</text>
<text x="80" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">denken</text>
<!-- Longen -->
<ellipse cx="180" cy="60" rx="28" ry="20" fill="${COLORS.lung}" opacity="0.7"/>
<text x="180" y="64" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">longen</text>
<text x="180" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">ademen</text>
<!-- Hart -->
<path d="M 270 50 Q 260 40 250 50 Q 250 60 270 80 Q 290 60 290 50 Q 280 40 270 50" fill="${COLORS.heart}" opacity="0.8"/>
<text x="270" y="60" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">hart</text>
<text x="270" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">pompt bloed</text>
<!-- Lever -->
<rect x="50" y="115" width="60" height="35" rx="5" fill="${COLORS.liver}" opacity="0.7"/>
<text x="80" y="135" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">lever</text>
<text x="80" y="158" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">ruimt gif op</text>
<!-- Maag -->
<ellipse cx="180" cy="130" rx="30" ry="18" fill="${COLORS.curve}" opacity="0.6"/>
<text x="180" y="135" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">maag</text>
<text x="180" y="158" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">verteert eten</text>
<!-- Nieren -->
<ellipse cx="270" cy="125" rx="12" ry="18" fill="${COLORS.blood}" opacity="0.7"/>
<text x="270" y="130" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">nier</text>
<text x="270" y="158" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">maakt urine</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Hersenen in je hoofd, de rest in je romp</text>
</svg>`;
}

const steps = [
  // STAP 1: Skelet
  {
    title: "Het skelet — botten van je lichaam",
    explanation:
      "Het **skelet** is alle **botten** in je lichaam — samen meer dan **200 botten** *(206 bij volwassenen, baby's hebben er nog meer omdat sommige later samengroeien)*.\n\n**Wat doet je skelet?**\n1. **Vorm geven** aan je lichaam.\n2. **Bescherming** van organen *(schedel beschermt hersenen, ribben beschermen hart+longen)*.\n3. **Beweging** mogelijk maken *(spieren trekken aan botten)*.\n4. **Bloed maken** *(in het beenmerg, midden in je grote botten)*.\n\n**Belangrijkste botten** *(uit je hoofd!)*:\n• **Schedel** — beschermt je hersenen.\n• **Wervelkolom** *(rug)* — een ketting van 33 wervels van nek tot stuit.\n• **Ribben** — 12 paar, beschermen hart + longen.\n• **Sleutelbeen** — boven je schouder.\n• **Opperarmbot** — bovenarm.\n• **Spaakbeen + ellepijp** — onderarm.\n• **Bekken** *(heup)* — verbindt benen met rug.\n• **Bovenbeen-bot (dijbeen)** — grootste bot van je lijf.\n• **Scheenbeen + kuitbeen** — onderbeen.\n• **Hand**: 27 botjes per hand. **Voet**: 26 botjes.\n\n**Toets-feitjes**:\n• Het **grootste bot** is het **dijbeen**.\n• Het **kleinste bot** zit in je **oor** *(stijgbeugel — 3 mm)*.\n• Botten zijn levend! Ze groeien én herstellen na een breuk.\n• **Gewricht** = plek waar 2 botten elkaar ontmoeten *(knie, elleboog)*.\n\n**Gewrichten** = plekken waar botten kunnen bewegen:\n• **Scharniergewricht**: knie, elleboog *(één richting)*.\n• **Kogelgewricht**: schouder, heup *(alle richtingen)*.",
    svg: skeletSvg(),
    checks: [
      {
        q: "Hoeveel botten heeft een **volwassen mens** ongeveer?",
        options: ["Meer dan 200", "Ongeveer 50", "Meer dan 1000", "Ongeveer 100"],
        answer: 0,
        wrongHints: [null, "Alleen je twee handen hebben samen al meer dan 50 botjes.", "Zoveel botten passen er niet in je lijf. Het getal is een stuk lager.", "Alleen je handen en voeten hebben samen al meer dan 100 botjes."],
        uitlegPad: {
          stappen: [
            { titel: "206 botten — een geheugen-getal", tekst: "Een volwassen mens heeft **206 botten**. Onthoud dit getal — het komt vaak op toetsvragen voor. **'Meer dan 200'** is het juiste antwoord-bereik." },
            { titel: "Baby's hebben er meer!", tekst: "Een **baby** heeft ongeveer **270 botten**. Tijdens het opgroeien groeien sommige botten aan elkaar (bv. de schedel-platen). Een volwassene eindigt op 206." },
            { titel: "Waar zitten er veel?", tekst: "**Hand** = 27 botjes per hand (54 totaal voor 2 handen).\n**Voet** = 26 botjes per voet (52 totaal).\nDus alleen al **handen + voeten = 106** van de 206 botten — meer dan de helft!" },
          ],
          woorden: [
            { woord: "skelet", uitleg: "Alle botten in je lichaam samen." },
            { woord: "wervelkolom", uitleg: "Ketting van 33 wervels langs je rug." },
          ],
          theorie: "Toets-truc bot-aantallen: 50 of 100 = te weinig (handen alleen al hebben meer). 1000 = te veel. **Tussen 200 en 300 = correct**. Bij 'meer dan 200' = ja.",
          voorbeelden: [
            { type: "stap", tekst: "Schedel: lijkt 1 bot, maar bestaat eigenlijk uit 22 botten. Bijna allemaal zijn ze samengegroeid — alleen je onderkaak kan bewegen." },
            { type: "stap", tekst: "Grootste bot = dijbeen (~46 cm bij volwassene). Kleinste = stijgbeugel in je oor (3 mm)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud 206. Of in elk geval: 'meer dan 200, minder dan 300'." }],
          niveaus: {
            basis: "Meer dan 200 botten (206 precies).",
            simpeler: "Volwassene = 206 botten. Baby = ~270. Antwoord 'meer dan 200' klopt.",
            nogSimpeler: "Meer dan 200",
          },
        },
      },
      {
        q: "Wat is het **grootste bot**?",
        options: ["Dijbeen", "Schedel", "Wervelkolom", "Sleutelbeen"],
        answer: 0,
        wrongHints: [null, "De schedel bestaat uit meerdere samengegroeide botten — tel je hem als 1 bot?", "De wervelkolom is een ketting van losse wervels, niet één bot.", "Het sleutelbeen bij je schouder is veel kleiner."],
        uitlegPad: {
          stappen: [
            { titel: "Dijbeen = grootste", tekst: "Het **dijbeen** (de bovenkant van je been, tussen heup en knie) is het grootste, langste en sterkste bot in je lichaam — ongeveer **46 cm** bij een volwassene." },
            { titel: "Waarom dijbeen zo groot?", tekst: "Het dijbeen draagt al je gewicht bij staan, lopen, springen. Hoe meer kracht een bot moet dragen, hoe groter en sterker het is. Er is heel veel kracht nodig om een dijbeen te breken." },
            { titel: "Geen schedel / wervelkolom", tekst: "Schedel = 22 botten (de meeste zijn aan elkaar vastgegroeid). Wervelkolom = 33 wervels boven elkaar. Beide zijn dus geen 'één bot'." },
          ],
          woorden: [{ woord: "dijbeen", uitleg: "Bot tussen heup en knie — grootste van je lichaam." }],
          theorie: "Toets-truc bot-grootte: dijbeen > scheenbeen > kuitbeen > opperarmbot. Allemaal lange botten in je armen en benen.",
          voorbeelden: [
            { type: "stap", tekst: "Bij een volwassene 1,80 m lang is het dijbeen ongeveer 46 cm = een kwart van je hele lengte!" },
            { type: "stap", tekst: "Tegenover dijbeen: stijgbeugel in oor = 3 mm = kleinste bot van het lichaam." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Grootste bot = dijbeen (een kwart van je lengte!). Kleinste = stijgbeugel in oor." }],
          niveaus: {
            basis: "Dijbeen = grootste bot.",
            simpeler: "Het dijbeen in je bovenbeen is het langste en zwaarste bot: ongeveer 46 cm bij een volwassene.",
            nogSimpeler: "Dijbeen",
          },
        },
      },
      {
        q: "Wat **beschermt** de **schedel**?",
        options: ["Hersenen", "Hart", "Longen", "Maag"],
        answer: 0,
        wrongHints: [null, "Je hart zit in je borst en wordt beschermd door je ribben en je borstbeen.", "Je longen zitten in je borst en worden beschermd door je ribben.", "De maag zit in je buik, ver van je hoofd."],
        uitlegPad: {
          stappen: [
            { titel: "Schedel = beschermkap", tekst: "De **schedel** (Latijn: cranium) is het bot rond je hoofd. Functie: **bescherming van de hersenen** — het kwetsbaarste orgaan dat we hebben." },
            { titel: "Waarom hard?", tekst: "Hersenen zijn zacht (~consistentie van tofu). Zonder schedel zou een lichte tik al schade veroorzaken. Schedel is daarom 1 van de hardste botten in het lichaam." },
            { titel: "Andere bescherming-organen", tekst: "Hart + longen → ribben + borstbeen (ribbenkast). Maag/lever/nieren → buikspieren + soms rib-onderkant. Blaas → bekken. Elk vitaal orgaan heeft eigen bescherming." },
          ],
          woorden: [
            { woord: "schedel", uitleg: "Bot rond hoofd — beschermt hersenen." },
            { woord: "hersenen", uitleg: "Het denk-orgaan in je hoofd." },
          ],
          theorie: "Toets-truc: bot beschermt orgaan dat ernaast zit. Schedel ↔ hersenen. Ribbenkast ↔ hart+longen. Bekkenbot ↔ blaas+darmen.",
          voorbeelden: [
            { type: "stap", tekst: "Fietshelm = extra bescherming op de schedel. In Nederland niet wettelijk verplicht, maar wel slim — schedel zelf is niet onverwoestbaar." },
          ],
          basiskennis: [{ onderwerp: "Onthouden", uitleg: "Schedel = hersenen. Ribben = hart + longen." }],
          niveaus: {
            basis: "Schedel beschermt de hersenen.",
            simpeler: "De schedel is een hard bot rond je hoofd — beschermt de zachte hersenen erbinnen.",
            nogSimpeler: "Hersenen",
          },
        },
      },
      {
        q: "Wat is een **gewricht**?",
        options: ["Plek waar 2 botten elkaar ontmoeten", "Spier die aan een bot trekt", "Een stevig bot in je arm of been", "Pees die een spier aan een bot vastmaakt"],
        answer: 0,
        wrongHints: [null, "Een spier trekt aan een bot. Maar waar kán dat bot dan buigen?", "Een bot zelf buigt niet. Waar kun je je arm wél buigen?", "Een pees verbindt een spier met een bot. Waar kunnen twee botten samen bewegen?"],
        uitlegPad: {
          stappen: [
            { titel: "Gewricht = ontmoetingsplek", tekst: "Een **gewricht** is de plek waar **2 botten elkaar ontmoeten en kunnen bewegen** ten opzichte van elkaar. Voorbeelden: knie (dijbeen + scheenbeen), elleboog (opperarmbot + spaakbeen)." },
            { titel: "Wat zit er in een gewricht?", tekst: "Tussen de botten zit **kraakbeen** (zacht glijoppervlak) + **gewrichtsvloeistof** (smering, als olie in een scharnier). Daardoor schuiven botten zonder pijn langs elkaar." },
            { titel: "2 hoofd-soorten", tekst: "**Scharnier-gewricht**: 1 richting (knie, elleboog, vinger-kootje). **Kogel-gewricht**: alle richtingen (schouder, heup). Schouder = meest beweegbare gewricht in je lichaam." },
          ],
          woorden: [
            { woord: "gewricht", uitleg: "Verbinding tussen 2 botten die beweging toelaat." },
            { woord: "kraakbeen", uitleg: "Zacht-glad weefsel als beschermlaag tussen botten." },
            { woord: "gewrichtsvloeistof", uitleg: "Smeermiddel in een gewricht." },
          ],
          theorie: "Toets-truc gewricht: 2 botten + beweging mogelijk = gewricht. Geen beweging? Dan zijn ze vastgegroeid (zoals schedel-platen) — geen gewricht.",
          voorbeelden: [
            { type: "stap", tekst: "Knie buigen: dijbeen + scheenbeen schuiven langs elkaar (scharnier). Schouder draaien: kogelvorm in komvorm (alle richtingen)." },
            { type: "stap", tekst: "Bij artrose slijt kraakbeen → bot wrijft over bot → pijn. Daarom heupoperaties bij ouderen — heup-gewricht wordt vervangen." },
          ],
          basiskennis: [{ onderwerp: "Onthouden", uitleg: "Gewricht = waar 2 botten elkaar ontmoeten en bewegen. Geen bot, geen spier — een verbinding." }],
          niveaus: {
            basis: "Gewricht = plek waar 2 botten elkaar ontmoeten.",
            simpeler: "Gewricht = verbinding tussen 2 botten waar beweging mogelijk is. Voorbeeld: knie, elleboog.",
            nogSimpeler: "Plek waar botten samenkomen.",
          },
        },
      },
    ],
  },

  // STAP 2: Spieren + bloed
  {
    title: "Spieren en bloed",
    explanation:
      "**Spieren** zorgen dat je kunt **bewegen**. Ze zitten vast aan botten en kunnen samentrekken *(korter worden)* of ontspannen.\n\n**Hoeveel spieren?**\nMeer dan **600** in je lichaam!\n\n**3 soorten spieren**:\n1. **Skeletspieren** — om te bewegen *(armen, benen, gezicht)*. Je kunt ze bewust besturen.\n2. **Hartspier** — alleen in het hart. Werkt automatisch.\n3. **Gladde spieren** — in maag, darmen, bloedvaten. Werken automatisch.\n\n**Voorbeelden van bekende spieren**:\n• **Biceps** — bovenarm, voorkant.\n• **Triceps** — bovenarm, achterkant.\n• **Buikspieren** *(rechte buikspier = 'sixpack')*.\n• **Bilspieren** — grootste spier van je lichaam.\n• **Kuitspier** — achterkant onderbeen.\n• **Kaakspier (masseter)** — de sterkste spier in verhouding tot zijn grootte.\n\n**Bloed — wat zit erin?**\n• **Rode bloedcellen** — vervoeren zuurstof.\n• **Witte bloedcellen** — vechten tegen ziektes.\n• **Plaatjes** — zorgen voor stolling *(korst bij wondjes)*.\n• **Plasma** — vloeistof, vervoert voedingsstoffen.\n\n**Bloedsomloop**:\n1. Hart pompt bloed door je lichaam via **slagaders**.\n2. Bloed brengt zuurstof + voeding naar alle cellen.\n3. Op terugweg pakt bloed afval (zoals CO₂) op.\n4. Bloed gaat terug naar hart via **aders**.\n5. Bloed gaat naar longen om CO₂ uit te ademen + nieuwe zuurstof op te halen.\n\n**Hart-feitjes**:\n• Klopt ongeveer **70 keer per minuut** *(in rust)*.\n• Pompt **5 liter bloed per minuut**.\n• Heeft 4 ruimtes: 2 boezems + 2 kamers.\n\n**toetsvraag**: 'Wat doet je hart?' → Bloed pompen door je lichaam.",
    checks: [
      {
        q: "Hoeveel spieren heeft een mens ongeveer?",
        options: ["Meer dan 600", "Ongeveer 100", "Ongeveer 300", "Meer dan 2000"],
        answer: 0,
        wrongHints: [null, "Alleen al in je gezicht zitten zo'n 40 spieren. Het totaal is veel groter.", "Het zijn er meer — denk aan alle kleine spiertjes in je handen, gezicht en rug.", "Zoveel zijn het er niet. Het getal ligt een stuk lager."],
      },
      {
        q: "Wat doet je **hart**?",
        options: ["Bloed pompen door je lichaam", "Eten verteren in je buik", "Zuurstof maken voor je bloed", "Je hersenen koel houden"],
        answer: 0,
        wrongHints: [null, "Eten verteren doet je maag, niet je hart.", "Je longen halen zuurstof uit de lucht; ze maken geen zuurstof.", "Je hersenen koel houden is geen taak van het hart. Wat stroomt er door je hele lichaam?"],
        uitlegPad: {
          stappen: [
            { titel: "Het hart = pomp", tekst: "Het **hart** is een spier die werkt als een **pomp**. Het pompt bloed rond door je hele lichaam — net als een waterpomp die water rondpompt in een huis." },
            { titel: "Waarom moet bloed rondgaan?", tekst: "**Bloed** brengt **zuurstof** (uit longen) + **voedingsstoffen** (uit darmen) naar alle cellen in je lichaam. Op de terugweg neemt het **afvalstoffen** mee (CO₂ + andere troep). Zonder bloed-stroom = cellen sterven." },
            { titel: "Voel zelf — pols-meting", tekst: "Leg 2 vingers op je pols. Voel je het 'kloppen'? Dat is je hart dat bloed door je slagaders perst. In rust: ~**70 keer per minuut**. Bij sporten: meer, want spieren willen meer zuurstof." },
          ],
          woorden: [
            { woord: "hart", uitleg: "Spier die bloed pompt." },
            { woord: "slagaders", uitleg: "Bloedvaten die bloed WEG van het hart brengen (meestal zuurstofrijk bloed)." },
            { woord: "aders", uitleg: "Bloedvaten die bloed NAAR het hart terugbrengen (meestal zuurstofarm bloed)." },
          ],
          theorie: "Toets-feit: hart-functie = **bloed pompen**. Niet ademen (longen), niet verteren (maag), niet denken (hersenen). Elk orgaan heeft 1 hoofdtaak — onthoud die.",
          voorbeelden: [
            { type: "stap", tekst: "5 liter bloed pompt het hart per minuut. In een dag = ~7000 liter — gelijk aan vullen van 35 badkuipen!" },
            { type: "stap", tekst: "Hart heeft 4 ruimtes: 2 boezems (boven) + 2 kamers (onder). Linkerkant pompt naar lichaam, rechterkant naar longen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Hart = pomp. Longen = ademen. Maag = verteren. Hersenen = denken. Onthoud het rijtje: hart, longen, maag, hersenen." }],
          niveaus: {
            basis: "Hart pompt bloed door het lichaam.",
            simpeler: "Het hart is een spier-pomp. Bloed gaat rond, brengt zuurstof + voeding.",
            nogSimpeler: "Bloed pompen",
          },
        },
      },
      {
        q: "Wat vervoeren **rode bloedcellen**?",
        options: ["Zuurstof", "Ziektekiemen", "Voedsel", "Hormonen"],
        answer: 0,
        wrongHints: [null, "Ziektekiemen bestrijden doet een andere soort bloedcel.", "Plasma vervoert voedingsstoffen — niet de bloedcellen zelf.", "Hormonen drijven mee in het bloedvocht (plasma), niet in de rode bloedcellen."],
      },
      {
        q: "Welke spier is de **sterkste in verhouding tot grootte**?",
        options: ["Kaakspier", "Biceps", "Hartspier", "Kuitspier"],
        answer: 0,
        wrongHints: [null, "Biceps is sterk maar niet recordhouder per gewicht.", "Hartspier werkt continu maar is anders ontworpen.", "Kuit is groot maar niet recordhouder."],
      },
    ],
  },

  // STAP 3: Organen
  {
    title: "De organen — wat doet elk?",
    explanation:
      "Organen zijn **delen van je lichaam** met een speciale taak.\n\n**De belangrijkste organen** *(uit je hoofd!)*:\n\n• **Hersenen** — denken, voelen, besturen. In je hoofd.\n• **Hart** — pompt bloed. In je borst, iets links.\n• **Longen** — ademen *(zuurstof in, CO₂ uit)*. In je borst.\n• **Maag** — verteert eten *(eerste stap)*. Boven in de buik.\n• **Darmen** — nemen voedingsstoffen op + maken poep. In de buik.\n• **Lever** — ruimt gifstoffen uit je bloed op, maakt gal. Rechtsboven in buik.\n• **Nieren** — filteren het bloed en maken urine *(je hebt er 2)*. Achter in je buik, tegen je rug.\n• **Blaas** — slaat urine op. Onder in buik.\n• **Huid** — beschermt je hele lichaam. Grootste 'orgaan'.\n• **Ogen** — zien.\n• **Oren** — horen + evenwicht.\n• **Neus** — ruiken + ademen.\n• **Tong** — proeven + praten + slikken.\n\n**toetsvragen — kerntaak per orgaan**:\n*'Welk orgaan filtert bloed en maakt urine?'* → Nieren.\n*'Welk orgaan ruimt gifstoffen op en maakt gal?'* → Lever.\n*'Welk orgaan kneedt en verteert eten?'* → Maag.\n*'Welk orgaan pompt bloed?'* → Hart.\n*'Welk orgaan vat zuurstof op uit lucht?'* → Longen.\n\n**Zintuigen** *(5 stuks)*:\n• Zien — ogen.\n• Horen — oren.\n• Ruiken — neus.\n• Proeven — tong.\n• Voelen — huid.\n\n**Hoeveel organen?**\nNiet precies te zeggen — afhankelijk hoe je telt. Maar de **bovenstaande lijst** is wat je moet kennen voor de Doorstroomtoets.",
    svg: organenSvg(),
    checks: [
      {
        q: "Welk orgaan **pompt bloed**?",
        options: ["Hart", "Longen", "Lever", "Maag"],
        answer: 0,
        wrongHints: [null, "Longen ademen.", "Lever filtert.", "Maag verteert."],
      },
      {
        q: "Welk orgaan **kneedt en verteert eten**?",
        options: ["Maag", "Hart", "Longen", "Hersenen"],
        answer: 0,
        wrongHints: [null, "Hart pompt bloed.", "Longen ademen.", "Hersenen denken."],
      },
      {
        q: "Hoeveel **nieren** heb je?",
        options: ["2", "1", "4", "3"],
        answer: 0,
        wrongHints: [null, "Je kunt met één nier leven, maar hoeveel heeft een mens normaal?", "Vier nieren heeft een mens niet. Hoeveel zitten er in je onderrug?", "Kijk naar je onderrug in de les: hoeveel nieren zitten daar?"],
      },
      {
        q: "Welk **zintuig** hoort bij je **huid**?",
        options: ["Voelen", "Zien", "Horen", "Ruiken"],
        answer: 0,
        wrongHints: [null, "Zien is met ogen.", "Horen met oren.", "Ruiken met neus."],
      },
    ],
  },

  // STAP 4: Voeding
  {
    title: "Schijf van Vijf — gezond eten",
    explanation:
      "De **Schijf van Vijf** is een Nederlandse manier om te leren wat **gezond** eten is. Elke dag moet je iets uit **alle 5 vakken** eten.\n\n**De 5 vakken**:\n1. **Groente + fruit** — vitamines + vezels (250g groente + 2 stuks fruit per dag).\n2. **Brood + graan + aardappel + pasta + rijst** — energie (koolhydraten).\n3. **Zuivel, noten, vis, peulvruchten, vlees + ei** — eiwitten (bouwstof) + calcium voor botten.\n4. **Smeer- + bereidingsvet** — onverzadigd vet (zoals olie en zachte margarine).\n5. **Dranken** — water, thee en koffie zonder suiker (~1,5 liter per dag).\n\n**Wat hoort NIET in de Schijf van Vijf?**\n• **Snoep + koek + frisdrank + chips** — heten 'extra's', mogen soms maar zijn niet voor elke dag.\n• **Veel zout, suiker, verzadigd vet** — niet gezond in grote hoeveelheden.\n\n**Toets-strikvraag** — *'Welke is groente?'*\n• Tomaat = groente *(Toets-realiteit, ook al is het biologisch een vrucht)*.\n• Aardappel = NIET in groente-vak, maar in koolhydraten-vak.\n• Banaan = fruit.\n• Pinda = peulvrucht (vak 3, bouwstof).\n\n**Andere belangrijke regels**:\n• **Eet langzaam** — geeft maag tijd om te zeggen 'genoeg!'.\n• **Niet te veel suiker** — slecht voor tanden + gewicht.\n• **Niet te veel zout** — slecht voor hart en nieren.\n• **Niet te veel verzadigd vet** *(boter, vet vlees)* — verstopt slagaders.\n• **Wel onverzadigd vet** *(olijfolie, noten, vis)* — gezond.\n\n**Wat is een 'koolhydraat'?**\nEnergie uit brood, pasta, rijst, aardappel. Je lichaam zet het om in suiker → energie om te bewegen + denken.",
    checks: [
      {
        q: "Eén vak van de **Schijf van Vijf** is niet voor eten. Waarvoor is dat vak?",
        options: ["Voor drinken, zoals water en thee", "Voor snoep en koek als traktatie", "Voor sporten en buiten spelen", "Voor vitaminepillen uit de winkel"],
        answer: 0,
        wrongHints: [null, "Snoep en koek heten 'extra's'. Staan die wel in de Schijf van Vijf?", "Bewegen is gezond, maar de Schijf van Vijf gaat over wat je binnenkrijgt.", "De Schijf van Vijf gaat over gewone voeding, niet over pillen uit de winkel."],
        uitlegPad: {
          stappen: [
            { titel: "Vijf vakken", tekst: "De **Schijf van Vijf** heeft **5 vakken**. Vier vakken gaan over eten. Elke dag neem je iets uit alle 5 vakken om gezond te blijven." },
            { titel: "De 5 vakken kort", tekst: "1) **Groente + fruit** (vitamines)\n2) **Brood/aardappel/pasta/rijst** (energie)\n3) **Zuivel/noten/vis/peulvruchten/vlees/ei** (eiwit + calcium, bouwstof)\n4) **Smeer- + bereidingsvet** (gezond vet, bv. olijfolie)\n5) **Dranken** (water, thee, koffie zonder suiker)." },
            { titel: "Vak 5 = drinken", tekst: "Water drinken is dus óók een vak van de Schijf: **~1,5 liter per dag** water, thee of koffie zonder suiker. Frisdrank en sap horen er niet bij." },
          ],
          woorden: [
            { woord: "Schijf van Vijf", uitleg: "Nederlandse richtlijn voor gezond eten, met 5 vakken." },
            { woord: "Voedingscentrum", uitleg: "Organisatie die in NL voedingsadvies geeft." },
          ],
          theorie: "Toets-feit: het Voedingscentrum maakt de Schijf. Niet alles wat smaakt mag — snoep + frisdrank + chips heten **'extra's'** en zitten **NIET** in de Schijf. Mogen soms, niet elke dag.",
          voorbeelden: [
            { type: "stap", tekst: "Per dag: 250 gram groente + 2 stuks fruit. Beide tellen samen in vak 1." },
            { type: "stap", tekst: "Aardappel zit in vak 2 (koolhydraten), NIET in groente-vak. Toets-instinker!" },
          ],
          basiskennis: [{ onderwerp: "Extra's", uitleg: "Snoep, koek, chips en frisdrank staan niet in de Schijf van Vijf. Ze heten 'extra's'." }],
          niveaus: {
            basis: "Vier vakken van de Schijf zijn voor eten. Wat heeft je lichaam elke dag nog meer nodig, naast eten?",
            simpeler: "Je lichaam heeft elke dag ook iets nodig dat je uit een glas of een kopje neemt.",
            nogSimpeler: "Voor drinken.",
          },
        },
      },
      {
        q: "Hoeveel **stuks fruit** moet je per dag eten?",
        options: ["2 stuks", "4 stuks", "1 stuk", "6 stuks"],
        answer: 0,
        wrongHints: [null, "Vier stuks is meer dan het advies van de Schijf van Vijf.", "Eén stuk is minder dan het advies van de Schijf van Vijf.", "Zes stuks per dag is veel meer dan het advies."],
      },
      {
        q: "Wat staat **niet** in de Schijf van Vijf?",
        options: ["Snoep", "Pindakaas", "Halvarine", "Aardappelen"],
        answer: 0,
        wrongHints: [null, "Pindakaas van 100% pinda's staat in het vak met noten, vis en vlees.", "Halvarine hoort in het vak smeer- en kookvetten.", "Aardappelen staan in het vak met brood en graan."],
      },
      {
        q: "Hoeveel moet een kind ongeveer per dag **drinken** (water, thee en ander drinken samen)?",
        options: ["ongeveer 1,5 liter", "ongeveer 3 liter", "ongeveer 0,5 liter", "ongeveer 5 liter"],
        answer: 0,
        wrongHints: [null, "Drie liter is 12 glazen — meer dan een kind nodig heeft.", "Een halve liter is maar 2 glazen. Je verliest elke dag meer vocht.", "Vijf liter is 20 glazen — veel meer dan je nodig hebt."],
      },
    ],
  },

  // STAP 5: Hygiëne + slaap + sport
  {
    title: "Hygiëne, slaap en bewegen",
    explanation:
      "Naast eten zijn er andere dingen die belangrijk zijn voor **gezond blijven**.\n\n**Hygiëne — schoonhouden**:\n• **Handen wassen** vóór eten + na toilet + na buiten zijn. Met **zeep**, **20 seconden**. Hierdoor minder ziektes.\n• **Tanden poetsen** 2× per dag, 2 minuten lang. Voorkomt gaatjes.\n• **Douchen** of in bad — minimaal een paar keer per week.\n• **Schone kleren** — bacteriën gaan in vuile kleren groeien.\n• **Niezen in elleboog** — om druppeltjes niet rond te slingeren.\n\n**Slaap**:\n• Kinderen *(6-12 jr)*: **9-11 uur** per nacht.\n• Tieners: 8-10 uur.\n• Volwassenen: 7-9 uur.\n• Tijdens slaap **herstelt** het lichaam + verwerken hersenen wat je geleerd hebt.\n• **Te weinig slaap** = moe, niet goed kunnen leren, vaker ziek.\n\n**Sporten + bewegen**:\n• **Elke dag** minimaal 1 uur bewegen voor kinderen.\n• Voorbeelden: fietsen naar school, voetbal, dansen, zwemmen, springen.\n• Voordelen:\n  - Sterkere spieren + botten.\n  - Betere conditie.\n  - Beter slapen.\n  - Vrolijker gevoel *(geluksstofjes in de hersenen)*.\n• **Te lang stilzitten** = niet gezond.\n\n**Beeldscherm-tijd**:\n• Niet te veel TV / tablet / telefoon.\n• Vooral niet vlak voor slapengaan *(blauw licht houdt je wakker)*.\n• Ouders of verzorgers geven vaak een limiet — bv. 1-2 uur op een schooldag.\n\n**toetsvraag**: 'Waarom handen wassen?' → om bacteriën weg te krijgen en ziekte te voorkomen.",
    checks: [
      {
        q: "Hoe lang moet je je handen **minstens** wassen (met zeep)?",
        options: ["~20 seconden", "5 seconden", "1 minuut", "10 seconden"],
        answer: 0,
        wrongHints: [null, "Vijf seconden is maar even onder de kraan. Dat is te kort.", "Mag, maar het advies noemt een kortere minimumtijd.", "In tien seconden spoel je lang niet alle bacteriën weg."],
      },
      {
        q: "Hoeveel **uur slaap** heeft een kind van **10** ongeveer nodig?",
        options: ["9-11 uur", "5-6 uur", "12-15 uur", "7-8 uur"],
        answer: 0,
        wrongHints: [null, "Zo kort slapen sommige volwassenen, maar een kind heeft veel meer nodig.", "Zoveel slaapt een baby of peuter. Een kind van 10 iets minder.", "Dat is het advies voor volwassenen. Een groeiend kind heeft meer nodig."],
      },
      {
        q: "Hoe vaak moet je je **tanden poetsen**?",
        options: ["2× per dag", "Om de dag", "4× per dag", "1× per dag"],
        answer: 0,
        wrongHints: [null, "Tandplak groeit elke dag aan. Om de dag is te weinig.", "Vier keer per dag is vaker dan de tandarts adviseert.", "Eén keer per dag is minder dan de tandarts adviseert."],
      },
      {
        q: "Hoe lang moet een kind per dag minstens **bewegen**?",
        options: ["1 uur", "10 minuten", "3 uur", "30 minuten"],
        answer: 0,
        wrongHints: [null, "Tien minuten is maar kort. De norm vraagt meer.", "Drie uur is veel meer dan de norm vraagt.", "Een halfuur is het advies voor volwassenen. Kinderen hebben meer nodig."],
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — lichaam-mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: skelet, organen, voeding, gezondheid.\n\nVeel succes!",
    checks: [
      {
        q: "Wat **beschermt** je **hart en longen**?",
        options: ["Ribben", "Schedel", "Wervelkolom", "Bekken"],
        answer: 0,
        wrongHints: [null, "De schedel beschermt je hersenen.", "De wervelkolom beschermt je ruggenmerg.", "Het bekken zit lager, onder in je buik."],
      },
      {
        q: "Met welk orgaan **adem** je?",
        options: ["Longen", "Hart", "Lever", "Maag"],
        answer: 0,
        wrongHints: [null, "Je hart pompt bloed rond.", "Je lever maakt je bloed schoon.", "Je maag verteert je eten."],
      },
      {
        q: "Wat hoort **niet** in de Schijf van Vijf?",
        options: ["Chips", "Zilvervliesrijst", "Pindakaas", "Olijfolie"],
        answer: 0,
        wrongHints: [null, "Zilvervliesrijst is volkoren en staat in het vak met brood en graan.", "Pindakaas van 100% pinda's staat in het vak met noten, vis en vlees.", "Olijfolie hoort in het vak smeer- en kookvetten."],
      },
      {
        q: "Hoeveel belangrijke **soorten bloedcellen** zijn er?",
        options: ["3", "2", "4", "5"],
        answer: 0,
        wrongHints: [null, "Bloed is meer dan alleen rode en witte bloedcellen.", "Zoveel hoofdsoorten zijn het niet. Noem op wat je weet.", "Dat zijn er te veel. Welke soorten bloedcellen ken je uit de les?"],
        uitlegPad: {
          stappen: [
            { titel: "3 hoofdsoorten", tekst: "Rood: zuurstof vervoeren. Wit: bacteriën doden (afweer). Plaatjes: stolling bij wondjes (korst maken)." },
          ],
          woorden: [{ woord: "bloedcel", uitleg: "Klein bolletje in je bloed dat een taak heeft." }],
          theorie: "3 belangrijke bloedcel-types.",
          voorbeelden: [{ type: "stap", tekst: "Wondje → plaatjes maken korst." }],
          basiskennis: [{ onderwerp: "Niet alleen rood", uitleg: "Bloed lijkt rood maar bevat ook witte cellen + plaatjes." }],
          niveaus: {
            basis: "Bloed heeft verschillende soorten cellen, elk met een eigen taak. Noem ze eens op en tel ze.",
            simpeler: "Drie hoofdsoorten: rode (zuurstof), witte (afweer), plaatjes (stolling).",
            nogSimpeler: "3",
          },
        },
      },
      {
        q: "Hoe vaak adviseert de tandarts om je **tanden te poetsen**?",
        options: ["2× per dag", "1× per dag", "Om de dag", "Na elke maaltijd"],
        answer: 0,
        wrongHints: [null, "Eén keer per dag is minder dan de tandarts adviseert.", "Tandplak groeit elke dag aan. Om de dag is te weinig.", "Na elke maaltijd is vaker dan de tandarts adviseert."],
      },
      {
        q: "Wat is het **grootste 'orgaan'** van je lichaam?",
        options: ["Huid", "Hart", "Lever", "Maag"],
        answer: 0,
        wrongHints: [null, "Hart is een spier zo groot als een vuist — niet het grootste.", "Lever is een orgaan binnen — niet het grootst.", "Maag is een rekbare zak — niet het grootst."],
      },
      { q: "Wat doet je **hart**?", options: ["Pompt bloed door je lichaam", "Maakt voedsel klein in je buik", "Haalt zuurstof uit de lucht", "Denkt na en stuurt je lichaam"], answer: 0, wrongHints: [null, "Dat doet je maag.", "Dat doen je longen.", "Dat doen je hersenen."] },
      { q: "Wat doen je **longen**?", options: ["Lucht inademen en zuurstof opnemen", "Bloed pompen door je hele lichaam", "Voedsel verteren en klein maken", "Denken en je lichaam besturen"], answer: 0, wrongHints: [null, "Dat doet je hart.", "Dat doet je maag.", "Dat doen je hersenen."] },
      { q: "Met welk **lichaamsdeel** zie je?", options: ["Ogen","Oren","Neus","Mond"], answer: 0, wrongHints: [null, "Met je oren hoor je.", "Met je neus ruik je.", "Met je mond proef je."] },
      { q: "Hoeveel **botten** heeft een volwassen mens ongeveer?", options: ["206","100","500","300"], answer: 0, wrongHints: [null, "Alleen je handen en voeten hebben samen al ruim 100 botjes.", "Zoveel botten heeft een mens niet.", "Ongeveer 300 botjes heeft een baby. Als je ouder wordt, groeien er botjes aan elkaar vast."] },
      { q: "Welke voeding is goed voor **botten**?", options: ["Melk en kaas", "Appels en bananen", "Witbrood en rijst", "Thee en limonade"], answer: 0, wrongHints: [null, "Fruit geeft vitamines, maar weinig calcium.", "Brood en rijst geven vooral energie.", "Thee en limonade geven vocht, maar geen calcium."] },
      { q: "Hoeveel **uur slaap** heeft een 10-jarige nodig?", options: ["9-11 uur","4-5 uur","12-14 uur","7-8 uur"], answer: 0, wrongHints: [null, "Zo weinig slaap is voor niemand genoeg.", "Zoveel slaapt een baby of peuter.", "Dat is het advies voor volwassenen. Een kind heeft meer nodig."] },
      { q: "Hoe heet **diabetes** in gewone woorden?", options: ["Suikerziekte","Hartziekte","Bloedarmoede","Botontkalking"], answer: 0, wrongHints: [null, "Bij een hartziekte werkt je hart niet goed. Bij diabetes gaat er iets anders mis.", "Bloedarmoede heet ook anemie: te weinig rode bloedcellen.", "Botontkalking heet ook osteoporose: zwakke botten."] },
      { q: "Hoeveel **zintuigen** noemen we meestal?", options: ["5", "3", "4", "7"], answer: 0, wrongHints: [null, "Zien, horen, ruiken... je kunt met je lichaam nog meer merken.", "Tel ze nog eens: welk lichaamsdeel vergeet je? Denk aan je hele lijf.", "Zoveel noemen we er meestal niet. Tel de lichaamsdelen waarmee je iets merkt."] },
      { q: "Welke spier in je lichaam **werkt altijd door**, ook als je slaapt?", options: ["Hartspier","Beenspier","Armspier","Kaakspier"], answer: 0, wrongHints: [null, "Beenspier rust 's nachts als je slaapt.", "Armspier rust 's nachts als je slaapt.", "Je kaakspier rust als je niet eet of praat."] },
      { q: "Waarvoor dient **zweten** (transpireren)?", options: ["Lichaam koelen", "Warm worden", "Vet verbranden", "Spieren bouwen"], answer: 0, wrongHints: [null, "Zweten maakt je niet warmer. Hoe voelt natte huid in de wind?", "Zweten verbrandt geen vet.", "Zweten bouwt geen spieren."] },
      { q: "Je valt en hebt een **kleine schaafwond** die een beetje bloedt. Wat doe je?", options: ["Spoelen met lauw water en dan een pleister erop", "Meteen een pleister erop, zonder eerst te spoelen", "Niets doen en wachten tot het vanzelf stopt", "Een ijsblokje erop leggen en het laten zitten"], answer: 0, wrongHints: [null, "Zit er nog zand of vuil in, dan sluit je dat in onder de pleister.", "Een schaafwond ligt open. Wat kan er tijdens het wachten allemaal in komen?", "IJs helpt bij een bult, niet bij een open wond."] },
      { q: "Welke **vitamine** krijg je van de zon?", options: ["D","C","A","B"], answer: 0, wrongHints: [null, "Vitamine C haal je vooral uit fruit.", "Vitamine A zit veel in wortels.", "Vitamine B zit veel in volkorenbrood."] },
      { q: "Wat doen **witte bloedcellen**?", options: ["Afweer tegen ziekte", "Zuurstof vervoeren", "Bloed laten stollen", "Voedsel verteren"], answer: 0, wrongHints: [null, "Zuurstof vervoeren doet een andere soort bloedcel.", "Stollen bij een wondje doen de bloedplaatjes.", "Dat doen maag en darmen."] },
      { q: "Hoeveel **liter water** moet een 10-jarige drinken per dag?", options: ["~1,5 liter","~5 liter","~0,5 liter","~3 liter"], answer: 0, wrongHints: [null, "Vijf liter is 20 glazen — veel meer dan je nodig hebt.", "Een halve liter is maar 2 glazen. Je verliest elke dag meer vocht.", "Drie liter is 12 glazen — meer dan een kind nodig heeft."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const lichaamGezondheidPo = {
  id: "lichaam-gezondheid-po",
  title: "Het lichaam + gezondheid (groep 6-8)",
  emoji: "🦴",
  level: "groep6-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Natuur — mens en gezondheid",
  prerequisites: [
    { id: "dieren-seizoenen-natuur", title: "Natuur (basis)", niveau: "po-1F" },
  ],
  intro:
    "Het lichaam voor groep 6-8 — skelet, spieren, bloed, organen, Schijf van Vijf, gezonde gewoontes. Toets-onderdeel wereldoriëntatie. ~15 min.",
  triggerKeywords: [
    "lichaam", "gezondheid", "skelet", "botten", "spieren", "hart",
    "longen", "maag", "lever", "nieren", "hersenen",
    "schijf van vijf", "voeding", "bloed", "ademen",
  ],
  chapters,
  steps,
};

export default lichaamGezondheidPo;
