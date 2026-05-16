// Leerpad: Het lichaam + gezondheid — groep 6-8 PO.
// Cito-onderdeel wereldoriëntatie (natuur+gezondheid). Referentieniveau 1F.
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
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
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
<text x="80" y="158" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">filtert bloed</text>
<!-- Maag -->
<ellipse cx="180" cy="130" rx="30" ry="18" fill="${COLORS.curve}" opacity="0.6"/>
<text x="180" y="135" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">maag</text>
<text x="180" y="158" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">verteert eten</text>
<!-- Nieren -->
<ellipse cx="270" cy="125" rx="12" ry="18" fill="${COLORS.blood}" opacity="0.7"/>
<text x="270" y="130" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">nier</text>
<text x="270" y="158" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">filtert urine</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Allemaal in de torso (romp)</text>
</svg>`;
}

const steps = [
  // STAP 1: Skelet
  {
    title: "Het skelet — botten van je lichaam",
    explanation:
      "Het **skelet** is alle **botten** in je lichaam — samen meer dan **200 botten** *(206 bij volwassenen, baby's hebben er nog meer omdat sommige later samengroeien)*.\n\n**Wat doet je skelet?**\n1. **Vorm geven** aan je lichaam.\n2. **Bescherming** van organen *(schedel beschermt hersenen, ribben beschermen hart+longen)*.\n3. **Beweging** mogelijk maken *(spieren trekken aan botten)*.\n4. **Bloed maken** *(in het beenmerg, midden in je grote botten)*.\n\n**Belangrijkste botten** *(uit je hoofd!)*:\n• **Schedel** — beschermt je hersenen.\n• **Wervelkolom** *(rug)* — een ketting van 33 wervels van nek tot stuit.\n• **Ribben** — 12 paar, beschermen hart + longen.\n• **Sleutelbeen** — boven je schouder.\n• **Opperarmbot** — bovenarm.\n• **Spaakbeen + ellepijp** — onderarm.\n• **Bekken** *(heup)* — verbindt benen met rug.\n• **Bovenbeen-bot (dijbeen)** — grootste bot van je lijf.\n• **Scheenbeen + kuitbeen** — onderbeen.\n• **Hand**: 27 botjes per hand. **Voet**: 26 botjes.\n\n**Cito-feitjes**:\n• Het **grootste bot** is het **dijbeen**.\n• Het **kleinste bot** zit in je **oor** *(stijgbeugel — 3 mm)*.\n• Botten zijn levend! Ze groeien én herstellen na een breuk.\n• **Gewricht** = plek waar 2 botten elkaar ontmoeten *(knie, elleboog)*.\n\n**Gewrichten** = plekken waar botten kunnen bewegen:\n• **Scharniergewricht**: knie, elleboog *(één richting)*.\n• **Kogelgewricht**: schouder, heup *(alle richtingen)*.",
    svg: skeletSvg(),
    checks: [
      {
        q: "Hoeveel botten heeft een **volwassen mens** ongeveer?",
        options: ["Meer dan 200", "Ongeveer 50", "Ongeveer 1000", "Precies 100"],
        answer: 0,
        wrongHints: [null, "Veel te weinig.", "Veel te veel.", "Niet precies dat aantal."],
        uitlegPad: {
          stappen: [
            { titel: "206 botten — een geheugen-getal", tekst: "Een volwassen mens heeft **206 botten**. Onthoud dit getal — het komt vaak op Cito-vragen voor. **'Meer dan 200'** is het juiste antwoord-bereik." },
            { titel: "Baby's hebben er meer!", tekst: "Een **baby** heeft ongeveer **270 botten**. Tijdens het opgroeien groeien sommige botten aan elkaar (bv. de schedel-platen). Een volwassene eindigt op 206." },
            { titel: "Waar zitten er veel?", tekst: "**Hand** = 27 botjes per hand (54 totaal voor 2 handen).\n**Voet** = 26 botjes per voet (52 totaal).\nDus alleen al **handen + voeten = 106** van de 206 botten — meer dan de helft!" },
          ],
          woorden: [
            { woord: "skelet", uitleg: "Alle botten in je lichaam samen." },
            { woord: "wervelkolom", uitleg: "Ketting van 33 wervels langs je rug." },
          ],
          theorie: "Cito-truc bot-aantallen: 50 of 100 = te weinig (handen alleen al hebben meer). 1000 = te veel. **Tussen 200 en 300 = correct**. Bij 'meer dan 200' = ja.",
          voorbeelden: [
            { type: "stap", tekst: "Schedel: lijkt 1 bot, maar bestaat eigenlijk uit 22 botten die samengegroeid zijn." },
            { type: "stap", tekst: "Grootste bot = dijbeen (~46 cm bij volwassene). Kleinste = stijgbeugel in je oor (3 mm)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud 206. Of in elk geval: 'meer dan 200, minder dan 300'." }],
          niveaus: {
            basis: "Meer dan 200 botten (206 precies). = A.",
            simpeler: "Volwassene = 206 botten. Baby = ~270. Antwoord 'meer dan 200' klopt. = A.",
            nogSimpeler: "Meer dan 200 = A.",
          },
        },
      },
      {
        q: "Wat is het **grootste bot**?",
        options: ["Dijbeen", "Schedel", "Wervelkolom", "Sleutelbeen"],
        answer: 0,
        wrongHints: [null, "Schedel = 22 samengegroeide botten — geen 1 bot.", "Wervelkolom = ketting van 33 wervels (niet 1 bot).", "Sleutelbeen is veel kleiner — bij je schouder."],
        uitlegPad: {
          stappen: [
            { titel: "Dijbeen = grootste", tekst: "Het **dijbeen** (de bovenkant van je been, tussen heup en knie) is het grootste, langste en sterkste bot in je lichaam — ongeveer **46 cm** bij een volwassene." },
            { titel: "Waarom dijbeen zo groot?", tekst: "Het dijbeen draagt al je gewicht bij staan, lopen, springen. Hoe meer kracht een bot moet dragen, hoe groter en sterker het is. Het dijbeen kan zelfs auto-impact opvangen voor het breekt." },
            { titel: "Geen schedel / wervelkolom", tekst: "Schedel = 22 botten samen (lijkt 1 bot maar is gefuseerd). Wervelkolom = 33 losse wervels op een kolom. Beide zijn dus geen 'één bot'." },
          ],
          woorden: [{ woord: "dijbeen", uitleg: "Bot tussen heup en knie — grootste van je lichaam." }],
          theorie: "Cito-truc bot-grootte: dijbeen > opperarmbot > scheenbeen > kuitbeen. Allemaal lange botten in de extremiteiten.",
          voorbeelden: [
            { type: "stap", tekst: "Bij een volwassene 1,80 m lang is het dijbeen ongeveer 46 cm = een kwart van je hele lengte!" },
            { type: "stap", tekst: "Tegenover dijbeen: stijgbeugel in oor = 3 mm = kleinste bot van het lichaam." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Grootste bot = dijbeen (een kwart van je lengte!). Kleinste = stijgbeugel in oor." }],
          niveaus: {
            basis: "Dijbeen = grootste bot. = A.",
            simpeler: "Het dijbeen (bovenbeen) is langste + zwaarste bot — ~46 cm. = A.",
            nogSimpeler: "Dijbeen = A.",
          },
        },
      },
      {
        q: "Wat **beschermt** de **schedel**?",
        options: ["Hersenen", "Hart", "Longen", "Maag"],
        answer: 0,
        wrongHints: [null, "Hart zit in borst — beschermd door ribben + borstbeen.", "Longen zitten in borst — beschermd door ribben.", "Maag zit in buik — geen botten eromheen, maar zachte spieren."],
        uitlegPad: {
          stappen: [
            { titel: "Schedel = beschermkap", tekst: "De **schedel** (Latijn: cranium) is het bot rond je hoofd. Functie: **bescherming van de hersenen** — het kwetsbaarste orgaan dat we hebben." },
            { titel: "Waarom hard?", tekst: "Hersenen zijn zacht (~consistentie van tofu). Zonder schedel zou een lichte tik al schade veroorzaken. Schedel is daarom 1 van de hardste botten in het lichaam." },
            { titel: "Andere bescherming-organen", tekst: "Hart + longen → ribben + borstbeen (ribbenkast). Maag/lever/nieren → buikspieren + soms rib-onderkant. Heupen → bekkenbot. Elk vitaal orgaan heeft eigen bescherming." },
          ],
          woorden: [
            { woord: "schedel", uitleg: "Bot rond hoofd — beschermt hersenen." },
            { woord: "hersenen", uitleg: "Het denk-orgaan in je hoofd." },
          ],
          theorie: "Cito-truc: bot beschermt orgaan dat ernaast zit. Schedel ↔ hersenen. Ribbenkast ↔ hart+longen. Bekkenbot ↔ blaas+darmen.",
          voorbeelden: [
            { type: "stap", tekst: "Fietshelm = extra bescherming op de schedel. Voor 12-jarigen wettelijk niet verplicht maar wel slim — schedel zelf is niet onverwoestbaar." },
          ],
          basiskennis: [{ onderwerp: "Onthouden", uitleg: "Schedel = hersenen. Ribben = hart + longen." }],
          niveaus: {
            basis: "Schedel beschermt de hersenen. = A.",
            simpeler: "De schedel is een hard bot rond je hoofd — beschermt de zachte hersenen erbinnen. = A.",
            nogSimpeler: "Hersenen = A.",
          },
        },
      },
      {
        q: "Wat is een **gewricht**?",
        options: ["Plek waar 2 botten elkaar ontmoeten", "Een spier", "Een bot zelf", "Een orgaan"],
        answer: 0,
        wrongHints: [null, "Spier ≠ gewricht. Spier trekt aan bot, gewricht is de verbinding.", "Een gewricht is geen bot — het is de verbinding tussen twee botten.", "Geen orgaan — gewrichten zijn structurele onderdelen van je skelet."],
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
          theorie: "Cito-truc gewricht: 2 botten + beweging mogelijk = gewricht. Geen beweging? Dan zijn ze vastgegroeid (zoals schedel-platen) — geen gewricht.",
          voorbeelden: [
            { type: "stap", tekst: "Knie buigen: dijbeen + scheenbeen schuiven langs elkaar (scharnier). Schouder draaien: kogelvorm in komvorm (alle richtingen)." },
            { type: "stap", tekst: "Bij artrose slijt kraakbeen → bot wrijft over bot → pijn. Daarom heupoperaties bij ouderen — heup-gewricht wordt vervangen." },
          ],
          basiskennis: [{ onderwerp: "Onthouden", uitleg: "Gewricht = waar 2 botten elkaar ontmoeten en bewegen. Geen bot, geen spier — een verbinding." }],
          niveaus: {
            basis: "Gewricht = plek waar 2 botten elkaar ontmoeten. = A.",
            simpeler: "Gewricht = verbinding tussen 2 botten waar beweging mogelijk is. Voorbeeld: knie, elleboog. = A.",
            nogSimpeler: "Plek waar botten samenkomen. A.",
          },
        },
      },
    ],
  },

  // STAP 2: Spieren + bloed
  {
    title: "Spieren en bloed",
    explanation:
      "**Spieren** zorgen dat je kunt **bewegen**. Ze zitten vast aan botten en kunnen samentrekken *(korter worden)* of ontspannen.\n\n**Hoeveel spieren?**\nMeer dan **600** in je lichaam!\n\n**3 soorten spieren**:\n1. **Skeletspieren** — om te bewegen *(armen, benen, gezicht)*. Je kunt ze bewust besturen.\n2. **Hartspier** — alleen in het hart. Werkt automatisch.\n3. **Gladde spieren** — in maag, darmen, bloedvaten. Werken automatisch.\n\n**Voorbeelden van bekende spieren**:\n• **Biceps** — bovenarm, voorkant.\n• **Triceps** — bovenarm, achterkant.\n• **Buikspieren** *(rechte buikspier = 'sixpack')*.\n• **Bilspieren** — grootste spier van je lichaam.\n• **Kuitspier** — achterkant onderbeen.\n• **Kaakspier (masseter)** — de sterkste spier in verhouding tot zijn grootte.\n\n**Bloed — wat zit erin?**\n• **Rode bloedcellen** — vervoeren zuurstof.\n• **Witte bloedcellen** — vechten tegen ziektes.\n• **Plaatjes** — zorgen voor stolling *(korst bij wondjes)*.\n• **Plasma** — vloeistof, vervoert voedingsstoffen.\n\n**Bloedsomloop**:\n1. Hart pompt bloed door je lichaam via **slagaders**.\n2. Bloed brengt zuurstof + voeding naar alle cellen.\n3. Op terugweg pakt bloed afval (zoals CO₂) op.\n4. Bloed gaat terug naar hart via **aders**.\n5. Bloed gaat naar longen om CO₂ uit te ademen + nieuwe zuurstof op te halen.\n\n**Hart-feitjes**:\n• Klopt ongeveer **70 keer per minuut** *(in rust)*.\n• Pompt **5 liter bloed per minuut**.\n• Heeft 4 kamers: 2 boezems + 2 kamers.\n\n**Cito-vraag**: 'Wat doet je hart?' → Bloed pompen door je lichaam.",
    checks: [
      {
        q: "Hoeveel spieren heeft een mens ongeveer?",
        options: ["Meer dan 600", "Ongeveer 100", "Precies 200", "Ongeveer 50"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Veel te weinig."],
      },
      {
        q: "Wat doet je **hart**?",
        options: ["Bloed pompen door je lichaam", "Eten verteren", "Zuurstof maken", "Hersenen koelen"],
        answer: 0,
        wrongHints: [null, "Maag doet dat.", "Longen halen zuurstof binnen, niet maken.", "Niet de taak van het hart."],
        uitlegPad: {
          stappen: [
            { titel: "Het hart = pomp", tekst: "Het **hart** is een spier die werkt als een **pomp**. Het pompt bloed rond door je hele lichaam — net als een waterpomp die water rondpompt in een huis." },
            { titel: "Waarom moet bloed rondgaan?", tekst: "**Bloed** brengt **zuurstof** (uit longen) + **voedingsstoffen** (uit darmen) naar alle cellen in je lichaam. Op de terugweg neemt het **afvalstoffen** mee (CO₂ + andere troep). Zonder bloed-stroom = cellen sterven." },
            { titel: "Voel zelf — pols-meting", tekst: "Leg 2 vingers op je pols. Voel je het 'kloppen'? Dat is je hart dat bloed door je slagaders perst. In rust: ~**70 keer per minuut**. Bij sporten: meer, want spieren willen meer zuurstof." },
          ],
          woorden: [
            { woord: "hart", uitleg: "Spier die bloed pompt." },
            { woord: "slagaders", uitleg: "Bloedvaten WEG van het hart, dragen zuurstofrijk bloed." },
            { woord: "aders", uitleg: "Bloedvaten NAAR het hart, dragen zuurstofarm bloed terug." },
          ],
          theorie: "Cito-feit: hart-functie = **bloed pompen**. Niet ademen (longen), niet verteren (maag), niet denken (hersenen). Elk orgaan heeft 1 hoofdtaak — onthoud die.",
          voorbeelden: [
            { type: "stap", tekst: "5 liter bloed pompt het hart per minuut. In een dag = ~7000 liter — gelijk aan vullen van 35 badkuipen!" },
            { type: "stap", tekst: "Hart heeft 4 kamers: 2 boezems (boven) + 2 kamers (onder). Linkerkant pompt naar lichaam, rechterkant naar longen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Hart = pomp. Longen = ademen. Maag = verteren. Hersenen = denken. Memoriseer dit ezelsbruggetje: H-L-M-H." }],
          niveaus: {
            basis: "Hart pompt bloed door het lichaam. = A.",
            simpeler: "Het hart is een spier-pomp. Bloed gaat rond, brengt zuurstof + voeding. = A.",
            nogSimpeler: "Bloed pompen = A.",
          },
        },
      },
      {
        q: "**Rode bloedcellen** vervoeren ... ?",
        options: ["Zuurstof", "Afval", "Voedsel", "Niets"],
        answer: 0,
        wrongHints: [null, "Niet de hoofdtaak.", "Plasma doet dat.", "Wel iets — zuurstof."],
      },
      {
        q: "Welke spier is de **sterkste in verhouding tot grootte**?",
        options: ["Kaakspier (masseter)", "Biceps", "Hartspier", "Kuitspier"],
        answer: 0,
        wrongHints: [null, "Biceps is sterk maar niet recordhouder per gewicht.", "Hartspier werkt continu maar is anders ontworpen.", "Kuit is groot maar niet recordhouder."],
      },
    ],
  },

  // STAP 3: Organen
  {
    title: "De organen — wat doet elk?",
    explanation:
      "Organen zijn **delen van je lichaam** met een speciale taak.\n\n**De belangrijkste organen** *(uit je hoofd!)*:\n\n• **Hersenen** — denken, voelen, besturen. In je hoofd.\n• **Hart** — pompt bloed. In je borst, iets links.\n• **Longen** — ademen *(zuurstof in, CO₂ uit)*. In je borst.\n• **Maag** — verteert eten *(eerste stap)*. Boven in de buik.\n• **Darmen** — neemt voedingsstoffen op + maakt poep. In de buik.\n• **Lever** — filtert bloed, maakt gal. Rechtsboven in buik.\n• **Nieren** — filteren urine uit bloed *(je hebt er 2)*. In de rug.\n• **Blaas** — slaat urine op. Onder in buik.\n• **Huid** — beschermt je hele lichaam. Grootste 'orgaan'.\n• **Ogen** — zien.\n• **Oren** — horen + evenwicht.\n• **Neus** — ruiken + ademen.\n• **Tong** — proeven + praten + slikken.\n\n**Cito-vragen — kerntaak per orgaan**:\n*'Welk orgaan filtert bloed?'* → Lever (of nieren bij urine).\n*'Welk orgaan vermalst eten?'* → Maag.\n*'Welk orgaan pompt bloed?'* → Hart.\n*'Welk orgaan vat zuurstof op uit lucht?'* → Longen.\n\n**Zintuigen** *(5 stuks)*:\n• Zien — ogen.\n• Horen — oren.\n• Ruiken — neus.\n• Proeven — tong.\n• Voelen — huid.\n\n**Hoeveel organen?**\nNiet precies te zeggen — afhankelijk hoe je telt. Maar de **bovenstaande lijst** is wat je moet kennen voor Cito.",
    svg: organenSvg(),
    checks: [
      {
        q: "Welk orgaan **pompt bloed**?",
        options: ["Hart", "Longen", "Lever", "Maag"],
        answer: 0,
        wrongHints: [null, "Longen ademen.", "Lever filtert.", "Maag verteert."],
      },
      {
        q: "Welk orgaan **vermalst eten**?",
        options: ["Maag", "Hart", "Longen", "Hersenen"],
        answer: 0,
        wrongHints: [null, "Hart pompt bloed.", "Longen ademen.", "Hersenen denken."],
      },
      {
        q: "Hoeveel **nieren** heb je?",
        options: ["2", "1", "4", "0"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Wel nodig om te leven."],
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
      "De **Schijf van Vijf** is een Nederlandse manier om te leren wat **gezond** eten is. Elke dag moet je iets uit **alle 5 vakken** eten.\n\n**De 5 vakken**:\n1. **Groente + fruit** — vitamines + vezels (250g groente + 2 stuks fruit per dag).\n2. **Brood + graan + aardappel + pasta + rijst** — energie (koolhydraten).\n3. **Vis + peulvruchten + vlees + ei + noten** — eiwitten (bouwstof).\n4. **Zuivel + kaas** — calcium voor botten.\n5. **Smeer- + bereidingsvet** — onverzadigd vet (zoals olie + boter).\n\n**+ niet vergeten**: **water drinken** (~1,5 liter per dag).\n\n**Wat hoort NIET in de Schijf van Vijf?**\n• **Snoep + koek + frisdrank + chips** — heten 'extra's', mogen soms maar zijn niet voor elke dag.\n• **Veel zout, suiker, verzadigd vet** — niet gezond in grote hoeveelheden.\n\n**Cito-stikvraag** — *'Welke is groente?'*\n• Tomaat = groente *(Cito-realiteit, ook al is het biologisch een vrucht)*.\n• Aardappel = NIET in groente-vak, maar in koolhydraten-vak.\n• Banaan = fruit.\n• Pinda = peulvrucht (vak 3, bouwstof).\n\n**Andere belangrijke regels**:\n• **Eet langzaam** — geeft maag tijd om te zeggen 'genoeg!'.\n• **Niet te veel suiker** — slecht voor tanden + gewicht.\n• **Niet te veel zout** — slecht voor hart en nieren.\n• **Niet teveel verzadigd vet** *(boter, vet vlees)* — verstopt slagaders.\n• **Wel onverzadigd vet** *(olijfolie, noten, vis)* — gezond.\n\n**Wat is een 'koolhydraat'?**\nEnergie uit brood, pasta, rijst, aardappel. Je lichaam zet het om in suiker → energie om te bewegen + denken.",
    checks: [
      {
        q: "Hoeveel vakken heeft de **Schijf van Vijf**?",
        options: ["5", "3", "7", "10"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Veel te veel."],
        uitlegPad: {
          stappen: [
            { titel: "De naam zegt het al — 'Vijf'", tekst: "De **Schijf van Vijf** heet zo omdat hij **5 vakken** heeft. Vandaar 'Vijf' in de naam. Elke dag eet je iets uit alle 5 vakken om gezond te blijven." },
            { titel: "De 5 vakken kort", tekst: "1) **Groente + fruit** (vitamines)\n2) **Brood/aardappel/pasta/rijst** (energie)\n3) **Vis/vlees/ei/noten/peulvruchten** (eiwit, bouwstof)\n4) **Zuivel + kaas** (calcium, sterke botten)\n5) **Smeer- + bereidingsvet** (gezond vet, bv. olijfolie)." },
            { titel: "Extra: water", tekst: "Naast de 5 vakken hoort ook **water drinken** erbij — ~1,5 liter per dag. Water is geen 'vak' maar onmisbaar voor je lichaam." },
          ],
          woorden: [
            { woord: "Schijf van Vijf", uitleg: "Nederlandse richtlijn voor gezond eten, met 5 vakken." },
            { woord: "Voedingscentrum", uitleg: "Organisatie die in NL voedingsadvies geeft." },
          ],
          theorie: "Cito-feit: het Voedingscentrum maakt de Schijf. Niet alles wat smaakt mag — snoep + frisdrank + chips heten **'extra's'** en zitten **NIET** in de Schijf. Mogen soms, niet elke dag.",
          voorbeelden: [
            { type: "stap", tekst: "Per dag: 250 gram groente + 2 stuks fruit. Beide tellen samen in vak 1." },
            { type: "stap", tekst: "Aardappel zit in vak 2 (koolhydraten), NIET in groente-vak. Cito-instinker!" },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Schijf van **Vijf** = **5** vakken. Letterlijk in de naam." }],
          niveaus: {
            basis: "5 vakken. = A.",
            simpeler: "De naam 'Schijf van Vijf' verklapt het al: 5. = A.",
            nogSimpeler: "5 = A.",
          },
        },
      },
      {
        q: "Hoeveel **stuks fruit** per dag?",
        options: ["2 stuks", "5 stuks", "1 stuk", "10 stuks"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te weinig.", "Veel te veel."],
      },
      {
        q: "Wat is NIET in de Schijf van Vijf?",
        options: ["Snoep", "Brood", "Melk", "Sla"],
        answer: 0,
        wrongHints: [null, "Brood is koolhydraat (vak 2).", "Melk is zuivel (vak 4).", "Sla is groente (vak 1)."],
      },
      {
        q: "Hoeveel **water** moet je drinken per dag?",
        options: ["~1,5 liter", "~3 liter", "~0,5 liter", "~5 liter"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te weinig.", "Veel te veel."],
      },
    ],
  },

  // STAP 5: Hygiëne + slaap + sport
  {
    title: "Hygiëne, slaap en bewegen",
    explanation:
      "Naast eten zijn er andere dingen die belangrijk zijn voor **gezond blijven**.\n\n**Hygiëne — schoonhouden**:\n• **Handen wassen** vóór eten + na toilet + na buiten zijn. Met **zeep**, **20 seconden**. Hierdoor minder ziektes.\n• **Tanden poetsen** 2× per dag, 2 minuten lang. Voorkomt gaatjes.\n• **Douchen** of in bad — minimaal een paar keer per week.\n• **Schone kleren** — bacteriën gaan in vuile kleren groeien.\n• **Niezen in elleboog** — om druppeltjes niet rond te slingeren.\n\n**Slaap**:\n• Kinderen *(6-12 jr)*: **9-11 uur** per nacht.\n• Tieners: 8-10 uur.\n• Volwassenen: 7-9 uur.\n• Tijdens slaap **herstelt** het lichaam + verwerken hersenen wat je geleerd hebt.\n• **Te weinig slaap** = moe, niet goed kunnen leren, vaker ziek.\n\n**Sporten + bewegen**:\n• **Elke dag** minimaal 1 uur bewegen voor kinderen.\n• Voorbeelden: fietsen naar school, voetbal, dansen, zwemmen, springen.\n• Voordelen:\n  - Sterkere spieren + botten.\n  - Betere conditie.\n  - Beter slapen.\n  - Vrolijker gevoel *(geluksstofjes in de hersenen)*.\n• **Te lang stilzitten** = niet gezond.\n\n**Beeldscherm-tijd**:\n• Niet te veel TV / tablet / telefoon.\n• Vooral niet vlak voor slapengaan *(blauw licht houdt je wakker)*.\n• Ouders geven vaak een limiet — bv. 1-2 uur op een schooldag.\n\n**Cito-vraag**: 'Waarom handen wassen?' → om bacteriën weg te krijgen en ziekte te voorkomen.",
    checks: [
      {
        q: "Hoe **lang** moet je handen wassen?",
        options: ["~20 seconden", "5 seconden", "1 minuut", "Zo kort mogelijk"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Te lang.", "Niet zo kort — minstens 20 sec."],
      },
      {
        q: "Hoeveel **uur slaap** heeft een kind van **10** ongeveer nodig?",
        options: ["9-11 uur", "5-6 uur", "12-15 uur", "3-4 uur"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Veel te weinig."],
      },
      {
        q: "Hoe vaak **tanden poetsen**?",
        options: ["2× per dag", "1× per week", "5× per dag", "Alleen als ze pijn doen"],
        answer: 0,
        wrongHints: [null, "Veel te weinig.", "Te vaak (geen kwaad maar overdreven).", "Te laat — voorkomen is beter."],
      },
      {
        q: "Hoe lang moet een kind **bewegen** per dag (minimaal)?",
        options: ["~1 uur", "10 minuten", "3 uur", "Heel de dag"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel als verplichting.", "Niet realistisch."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — lichaam-mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: skelet, organen, voeding, gezondheid.\n\nVeel succes!",
    checks: [
      {
        q: "Wat **beschermt** je **hart en longen**?",
        options: ["Ribben", "Schedel", "Wervelkolom", "Bekken"],
        answer: 0,
        wrongHints: [null, "Schedel beschermt hersenen.", "Wervelkolom beschermt ruggenmerg.", "Bekken zit lager."],
      },
      {
        q: "Welk orgaan **ademt**?",
        options: ["Longen", "Hart", "Lever", "Maag"],
        answer: 0,
        wrongHints: [null, "Hart pompt.", "Lever filtert.", "Maag verteert."],
      },
      {
        q: "Welke is NIET in de Schijf van Vijf?",
        options: ["Chips", "Volkorenbrood", "Appel", "Kaas"],
        answer: 0,
        wrongHints: [null, "Brood = vak 2.", "Appel = vak 1.", "Kaas = vak 4."],
      },
      {
        q: "Hoeveel **bloedcellen-soorten** zijn er belangrijke?",
        options: ["3 (rood, wit, plaatjes)", "1 (alleen rood)", "5", "10"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel — 3 hoofdsoorten.", "Veel te veel."],
        uitlegPad: {
          stappen: [
            { titel: "3 hoofdsoorten", tekst: "Rood: zuurstof vervoeren. Wit: bacteriën doden (afweer). Plaatjes: stolling bij wondjes (korst maken)." },
          ],
          woorden: [{ woord: "bloedcel", uitleg: "Klein bolletje in je bloed dat een taak heeft." }],
          theorie: "3 belangrijke bloedcel-types.",
          voorbeelden: [{ type: "stap", tekst: "Wondje → plaatjes maken korst." }],
          basiskennis: [{ onderwerp: "Niet alleen rood", uitleg: "Bloed lijkt rood maar bevat ook witte cellen + plaatjes." }],
          niveaus: {
            basis: "3. A.",
            simpeler: "Drie hoofdsoorten: rode (zuurstof), witte (afweer), plaatjes (stolling). = A.",
            nogSimpeler: "3 = A.",
          },
        },
      },
      {
        q: "**Tanden poetsen** doe je hoe vaak?",
        options: ["2× per dag", "1× per dag", "1× per week", "Na elke maaltijd"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Veel te weinig.", "Overdreven."],
      },
      {
        q: "Wat is de **grootste 'orgaan'** van je lichaam?",
        options: ["Huid", "Hart", "Lever", "Maag"],
        answer: 0,
        wrongHints: [null, "Klein vergeleken met huid.", "Klein vergeleken met huid.", "Klein vergeleken met huid."],
      },
      { q: "Wat doet je **hart**?", options: ["Pompt bloed door je lichaam","Maakt voedsel klein","Filtert lucht","Denkt"], answer: 0, wrongHints: [null, "Dat is maag.", "Longen.", "Hersenen."] },
      { q: "Wat doen je **longen**?", options: ["Lucht inademen + zuurstof opnemen","Bloed pompen","Voedsel verteren","Denken"], answer: 0, wrongHints: [null, "Hart.", "Maag.", "Hersenen."] },
      { q: "Welk **lichaamsdeel** is voor zien?", options: ["Ogen","Oren","Neus","Mond"], answer: 0, wrongHints: [null, "Horen.", "Ruiken.", "Proeven."] },
      { q: "Hoeveel **botten** heeft een volwassen mens ongeveer?", options: ["206","100","500","1.000"], answer: 0, wrongHints: [null, "Te weinig.", "Te veel.", "Veel te veel."] },
      { q: "Welke voeding is goed voor **botten**?", options: ["Melk + zuivel (calcium)","Snoep","Cola","Chips"], answer: 0, wrongHints: [null, "Niet voor botten.", "Niet.", "Niet."] },
      { q: "Hoeveel **uur slaap** heeft een 10-jarige nodig?", options: ["9-11 uur","4-5 uur","12-14 uur","6 uur"], answer: 0, wrongHints: [null, "Te weinig.", "Te veel (baby).", "Te weinig."] },
      { q: "Wat heet **diabetes**?", options: ["Suikerziekte","Hartziekte","Botbreuk","Verkoudheid"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "Welke 5 **zintuigen** zijn er?", options: ["Zien/horen/ruiken/proeven/voelen","2","3","10"], answer: 0, wrongHints: [null, "Te weinig.", "Te weinig.", "Te veel."] },
      { q: "Welke spier in je lichaam **werkt continu**?", options: ["Hartspier","Beenspier","Armspier","Niemand continu"], answer: 0, wrongHints: [null, "Heeft pauze.", "Heeft pauze.", "Wel hartspier."] },
      { q: "Wat is **transpireren** voor?", options: ["Lichaam koelen","Warm worden","Niet relevant","Spieren bouwen"], answer: 0, wrongHints: [null, "Tegenovergesteld.", "Wel functie.", "Niet primair."] },
      { q: "Wat doe je bij een **wond** met bloeding?", options: ["Schoonspoelen + verband","Negeren","Schreeuwen","Likken"], answer: 0, wrongHints: [null, "Niet.", "Niet primair.", "Niet."] },
      { q: "Welk **vitamine** krijg je van de zon?", options: ["D","C","A","B"], answer: 0, wrongHints: [null, "Fruit.", "Wortels.", "Volkoren."] },
      { q: "Wat doen **witte bloedcellen**?", options: ["Afweer tegen ziekte","Zuurstof transporteren","Stollen","Niet relevant"], answer: 0, wrongHints: [null, "Dat zijn rode.", "Plaatjes.", "Wel."] },
      { q: "Hoeveel **liter water** moet een 10-jarige drinken per dag?", options: ["~1,5 liter","5 liter","0,5 liter","10 liter"], answer: 0, wrongHints: [null, "Te veel.", "Te weinig.", "Veel te veel."] },
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
    "Het lichaam voor groep 6-8 — skelet, spieren, bloed, organen, Schijf van Vijf, gezonde gewoontes. Cito-onderdeel wereldoriëntatie. ~15 min.",
  triggerKeywords: [
    "lichaam", "gezondheid", "skelet", "botten", "spieren", "hart",
    "longen", "maag", "lever", "nieren", "hersenen",
    "schijf van vijf", "voeding", "bloed", "ademen",
  ],
  chapters,
  steps,
};

export default lichaamGezondheidPo;
