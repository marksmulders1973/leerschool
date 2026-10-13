// Leerpad: CSE Nederlands — leesvaardigheid — klas 3-4 VMBO/HAVO/VWO.
// Onderdeel Nederlandse leesvaardigheid. Referentieniveau 2F-3F.
// 6 stappen met uitlegPad. Parallel met CSE-engels-pad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  signaal: "#80cbc4",
  hoofd: "#ffd54f",
  arg: "#ff7043",
  verw: "#9575cd",
  highlight: "#42a5f5",
};

const stepEmojis = ["📰", "🎯", "👈", "⚖️", "🎭", "🏆"];

const chapters = [
  { letter: "A", title: "Tekst-analyse strategie", emoji: "📰", from: 0, to: 0 },
  { letter: "B", title: "Hoofdgedachte + details", emoji: "🎯", from: 1, to: 1 },
  { letter: "C", title: "Verwijzingen (dit/hij/deze)", emoji: "👈", from: 2, to: 2 },
  { letter: "D", title: "Argumenten herkennen", emoji: "⚖️", from: 3, to: 3 },
  { letter: "E", title: "Bedoeling schrijver", emoji: "🎭", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function signaalwoordenSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Nederlandse signaalwoorden — herken structuur</text>

<rect x="15" y="40" width="140" height="35" rx="6" fill="rgba(128,203,196,0.15)" stroke="${COLORS.signaal}" stroke-width="1"/>
<text x="85" y="58" text-anchor="middle" fill="${COLORS.signaal}" font-size="10" font-family="Arial" font-weight="bold">+ TOEVOEGING</text>
<text x="85" y="70" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">en, ook, bovendien</text>

<rect x="165" y="40" width="140" height="35" rx="6" fill="rgba(255,138,101,0.15)" stroke="${COLORS.arg}" stroke-width="1"/>
<text x="235" y="58" text-anchor="middle" fill="${COLORS.arg}" font-size="10" font-family="Arial" font-weight="bold">↔ TEGENSTELLING</text>
<text x="235" y="70" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">maar, echter, toch</text>

<rect x="15" y="85" width="140" height="35" rx="6" fill="rgba(255,213,79,0.15)" stroke="${COLORS.hoofd}" stroke-width="1"/>
<text x="85" y="103" text-anchor="middle" fill="${COLORS.hoofd}" font-size="10" font-family="Arial" font-weight="bold">→ GEVOLG</text>
<text x="85" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">dus, daarom, daardoor</text>

<rect x="165" y="85" width="140" height="35" rx="6" fill="rgba(66,165,245,0.15)" stroke="${COLORS.highlight}" stroke-width="1"/>
<text x="235" y="103" text-anchor="middle" fill="${COLORS.highlight}" font-size="10" font-family="Arial" font-weight="bold">∵ REDEN</text>
<text x="235" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">omdat, want, doordat</text>

<rect x="15" y="130" width="140" height="35" rx="6" fill="rgba(105,240,174,0.15)" stroke="${COLORS.curve2}" stroke-width="1"/>
<text x="85" y="148" text-anchor="middle" fill="${COLORS.curve2}" font-size="10" font-family="Arial" font-weight="bold">📋 VOORBEELD</text>
<text x="85" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">zoals, bijvoorbeeld</text>

<rect x="165" y="130" width="140" height="35" rx="6" fill="rgba(149,117,205,0.15)" stroke="${COLORS.verw}" stroke-width="1"/>
<text x="235" y="148" text-anchor="middle" fill="${COLORS.verw}" font-size="10" font-family="Arial" font-weight="bold">✓ CONCLUSIE</text>
<text x="235" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">kortom, samenvattend</text>

<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Signaalwoorden onthullen de structuur van een tekst</text>
</svg>`;
}

const steps = [
  // STAP 1: Strategie
  {
    title: "Tekst-strategie — eerst kijken, dan lezen",
    explanation:
      "Bij CSE Nederlands krijg je **lange teksten** en moet je in beperkte tijd **vragen beantwoorden**. Werken zonder strategie kost tijd + fouten.\n\n**De Toets-leesstrategie** *(uit het hoofd!)*:\n\n**1. Skim** (~30 sec):\n• Lees **titel** + **subtitels**.\n• Lees **eerste alinea** + **laatste alinea**.\n• Lees **eerste zin** van elke alinea *(topic sentence)*.\n• Bekijk **plaatjes + tabellen**.\nDoel: wat is **hoofdonderwerp**?\n\n**2. Lees vragen** (~1 min):\n• Begrijp wat **elke vraag vraagt** voordat je gaat lezen.\n• Onderstreep **trefwoorden** in vragen.\n• Sorteer vragen: makkelijke eerst, lastige later.\n\n**3. Scan** voor antwoorden:\n• Zoek **trefwoorden** uit vraag terug in tekst.\n• Lees alleen die **alinea** + zinnen vlak ervoor/erna.\n• Niet alles helemaal lezen!\n\n**4. Antwoord opschrijven**:\n• **Open vraag**: in eigen woorden, beknopt.\n• **Meerkeuze**: streep onmogelijke opties door, kies beste.\n\n**5. Controle** (~2 min aan eind):\n• Klopt elk antwoord nog?\n• Heb je alle vragen?\n\n**Nederlandse signaalwoorden — top 6 groepen**:\n\n**Toevoegen** (+): en, ook, bovendien, daarnaast, verder.\n**Tegenstelling** (↔): maar, echter, toch, niettemin, hoewel, ondanks.\n**Gevolg** (→): dus, daarom, daardoor, zodoende, bijgevolg.\n**Reden / oorzaak** (∵): omdat, want, doordat, vanwege.\n**Voorbeeld** (📋): zoals, bijvoorbeeld, bijv., onder andere.\n**Conclusie** (✓): kortom, samenvattend, alles bij elkaar, dus.\n\n**Toets-truc — signaalwoord = hint over wat volgt**:\n• 'Maar' / 'Echter' → tegenovergesteld komt.\n• 'Omdat' → reden komt.\n• 'Daarom' / 'Dus' → conclusie / gevolg.\n• 'Zoals' → voorbeeld komt.\n\n**Voorbeeld**:\n*'Veel jongeren willen vegetariër worden. Ze weten echter vaak niet hoe.'*\n→ 'Echter' = tegenstelling. Verwacht: ondanks de wens, lukt het niet *(weten niet hoe)*.\n\n**Toets-tip — examenstress**:\n• **Lees rustig** — fouten komen door haast.\n• Tijd-bewust **maar niet jagen**: 90 min voor 35-45 vragen = ~2 min/vraag.\n• **Lastige vraag overslaan** + later terugkomen.",
    svg: signaalwoordenSvg(),
    checks: [
      {
        q: "Wat is de **eerste stap** bij een CSE-tekst?",
        options: ["Skimmen: titel, eerste alinea en plaatjes", "Meteen vraag 1 lezen en het antwoord opzoeken", "Woord voor woord lezen en lastige woorden opzoeken", "Eerst de conclusie in de laatste alinea lezen"],
        answer: 0,
        wrongHints: [null, "Zonder dat je weet waar de tekst over gaat, zoek je je snel vast. Wat heb je nodig vóór je aan vraag 1 begint?", "Grondig lezen kost veel tijd, en de vragen vragen niet naar elk woord. Wat heb je eerst nodig?", "Het slot is belangrijk, maar dan mis je het begin en de opbouw. Wat heb je nodig over de hele tekst?"],
      },
      {
        q: "Welk signaalwoord = **tegenstelling**?",
        options: ["echter", "omdat", "zoals", "bovendien"],
        answer: 0,
        wrongHints: [null, "'Omdat' leidt een reden in. Zet het ook twee dingen tegenover elkaar?", "'Zoals' kondigt een voorbeeld aan. Welk woord geeft aan dat iets anders is dan je verwacht?", "'Bovendien' voegt iets toe in dezelfde richting. Welk woord draait de richting juist om?"],
      },
      {
        q: "*'Veel jongeren willen vegetariër worden. ___ weten ze vaak niet hoe.'* Welk woord past?",
        options: ["Toch", "Daarom", "Bijvoorbeeld", "En"],
        answer: 0,
        wrongHints: [null, "Is 'niet weten hoe' een gevolg van 'vegetariër willen worden'? Hoe verhouden de twee zinnen zich?", "Is de tweede zin een voorbeeld van de eerste? Of gaat hij er juist tegenin?", "'En' voegt iets toe in dezelfde richting. Ligt de tweede zin in dezelfde lijn als de eerste?"],
      },
      {
        q: "Wat doe je met **een lastige vraag** op CSE?",
        options: ["Overslaan en er later op terugkomen", "Doorwerken tot je hem toch snapt", "Eerst de hele tekst opnieuw lezen", "Je eerste ingeving invullen en doorgaan"],
        answer: 0,
        wrongHints: [null, "Zo verlies je kostbare tijd voor de andere vragen. Hoeveel tijd blijft er dan nog over?", "De hele tekst opnieuw lezen kost veel tijd, terwijl er nog andere vragen wachten. Is dat de beste verdeling van je tijd?", "Bij een lastige vraag is je eerste ingeving vaak een gok. Moet je nu al kiezen, terwijl je nog tijd hebt?"],
      },
    ],
  },

  // STAP 2: Hoofdgedachte
  {
    title: "Hoofdgedachte + details",
    explanation:
      "De toets test 2 begrip-niveaus:\n\n**1. Hoofdgedachte** *(main idea)* — *waar gaat de hele tekst over?*\n• Meestal in **eerste of laatste alinea**.\n• Soms in **kop** of **subkop**.\n• Soms uit **herhaling van thema** door tekst.\n\n**2. Detail** — *specifiek feit, jaar, naam, aantal*.\n• Zoek terug in tekst.\n• Lees vraag, zoek **trefwoord**, lees alinea.\n\n**toetsvraag-typen — leer ze herkennen**:\n\n• *'Wat is de hoofdgedachte?'* → hoofdgedachte.\n• *'Wat staat in alinea 3?'* → detail uit alinea 3.\n• *'Wat betekent X in regel 5?'* → woordbetekenis.\n• *'Wat is de bedoeling van de schrijver?'* → schrijver-doel.\n• *'Welke tegenwerping noemt de schrijver?'* → argument.\n• *'Naar wie verwijst 'hij' in regel 8?'* → verwijzing.\n\n**Hoofdgedachte herkennen — 3 trucs**:\n\n**1. Topic sentence**:\nMeestal **eerste zin** van eerste alinea = hoofdpunt.\n\n**2. Conclusie**:\nIn slot-alinea staat vaak 'kortom...' of 'concluderend...'.\n\n**3. Wat ZOU de titel kunnen zijn?**:\nWelk antwoord zou een goede ondertitel zijn voor de hele tekst?\n\n**Voorbeeld**:\nTekst over bijen die uitsterven, met:\n• Alinea 1: 'Bijen zijn vitaal voor planten.'\n• Alinea 2: details over bestuiving.\n• Alinea 3: bedreigingen (pesticide).\n• Alinea 4: 'Daarom moeten we bijen beschermen.'\n\n**Hoofdgedachte** = 'We moeten bijen beschermen want ze zijn vitaal voor planten.'\n\n**Toets-strikvraag — geen detail kiezen**:\nLet op antwoord-opties die **te specifiek** zijn:\n• 'Bijen bestuiven 90% van gewassen' = detail (uit alinea 2).\n• 'Pesticiden zijn schadelijk' = detail.\n• 'Bijen zijn belangrijk voor de natuur' = hoofdgedachte.\n\n**Toets-strikvraag 2 — geen mening**:\n*'Wat staat er volgens de tekst?'*\n→ Antwoord moet **letterlijk in tekst staan**. Niet logisch afleiden.\n\nBijvoorbeeld als tekst zegt 'bijen bestuiven veel gewassen' kun je niet antwoorden 'zonder bijen geen oogst' tenzij dat letterlijk staat.\n\n**Toets-tip — vergelijk opties**:\nVaak lijken 2-3 opties juist. Vergelijk per woord:\n• Welke past **letterlijk**?\n• Welke is **te ruim**?\n• Welke is **te smal**?\n• Welke is **net niet wat de tekst zegt**?",
    checks: [
      {
        q: "Waar staat de **hoofdgedachte** meestal?",
        options: ["Eerste of laatste alinea", "In het midden van de tekst", "In de zin onder de kop", "Bij een plaatje of foto"],
        answer: 0,
        wrongHints: [null, "In het midden staan meestal de uitwerking en voorbeelden.", "Onder de kop staat vaak een inleidend zinnetje, niet altijd de kern.", "Een bijschrift hoort bij de foto, niet bij de hele tekst."],
      },
      {
        q: "*'Volgens de tekst, ___'* Wat doe je?",
        options: ["Zoek de passage waar het staat", "Vul het aan met je eigen kennis", "Kies wat het meest logisch klinkt", "Leid het af uit titel en kopjes"],
        answer: 0,
        wrongHints: [null, "Je eigen kennis kan afwijken van wat de schrijver beweert. Waar moet het antwoord vandaan komen?", "Wat logisch klinkt, hoeft niet in de tekst te staan. Wat vraagt 'volgens de tekst' van je?", "Titel en kopjes noemen vaak alleen het onderwerp. Staat het antwoord daar al?"],
      },
      {
        q: "Tekst over bijen: 'Bijen zijn vitaal. Ze bestuiven 90%. We moeten ze beschermen.' Hoofdgedachte?",
        options: ["Bijen zijn vitaal en moeten worden beschermd", "Bijen bestuiven 90% van de gewassen", "Bijen zijn vitaal omdat ze 90% bestuiven", "Bijen moeten beschermd worden tegen pesticiden"],
        answer: 0,
        wrongHints: [null, "Dat getal ondersteunt de boodschap. Is het de kern van de hele tekst, of een detail?", "Dit noemt het belang van bijen en de reden. Wat vraagt de schrijver in de laatste zin van de lezer, en staat dat hier ook in?", "Over pesticiden zegt deze tekst niets. Een hoofdgedachte haal je uit de tekst zelf."],
      },
      {
        q: "Welk antwoord is **te specifiek** voor 'hoofdgedachte'?",
        options: ["Eén cijfer uit de derde alinea", "De conclusie uit de laatste alinea", "De kern uit inleiding en slot samen", "De boodschap die elke alinea draagt"],
        answer: 0,
        wrongHints: [null, "In de conclusie aan het eind staat vaak de hoofdgedachte. Is dat te specifiek, of gaat het over de hele tekst?", "Inleiding en slot samen geven vaak de kern. Is dat te specifiek, of gaat het over de hele tekst?", "Wat in elke alinea terugkomt, gaat over de hele tekst. Is dat te specifiek?"],
      },
    ],
  },

  // STAP 3: Verwijzingen
  {
    title: "Verwijzingen — wie/wat is 'hij', 'dit', 'deze'?",
    explanation:
      "Schrijvers vervangen vaak personen, dingen of ideeën door **verwijswoorden**:\n• **Hij / zij / het / ze** — personen of dingen.\n• **Dit / dat / deze / die** — specifiek iets.\n• **Zijn / haar / hun** — bezittelijk.\n• **Zo / dergelijk** — soortgelijk.\n\n**toetsvraag**:\n*'In regel 6, naar wie verwijst 'hij'?'*\n→ Zoek **vorige zinnen**. Welke **mannelijke persoon** is genoemd?\n\n**Voorbeeld**:\n*'De directeur sprak Sven aan. **Hij** keek streng.'*\n→ 'Hij' = directeur *(meest waarschijnlijk)*. Of Sven? Hangt af van context. Wie kan 'streng kijken' — een directeur die iemand toespreekt, of de aangesproken Sven? Beide kunnen grammaticaal; vaak de directeur.\n\n**Truc — dichtstbijzijnde mannelijke onderwerp**:\nMeestal verwijst 'hij' naar het onderwerp van de vorige zin, als dat past in de context.\n\n**Voorbeeld — 'dit' en 'dat'**:\n*'De wedstrijd was hard. Spelers raakten geblesseerd. **Dit** is zorgwekkend.'*\n→ 'Dit' = de hele situatie *(harde wedstrijd + blessures)*.\n\n**'Dit' vat samen** — vaak hele zinnen of meerdere ideeën.\n\n**Voorbeeld — 'deze' / 'die'**:\n*'Er kwamen twee experts. **Deze** waren het oneens met **die** van vorig jaar.'*\n→ **Deze** = de huidige experts.\n→ **Die** = de experts van vorig jaar.\n\n**'Deze' = dichtbij** *(in tekst of tijd)*. **'Die' = verder weg**.\n\n**Vraagsoorten — voor de toets**:\n\n*'Wie/wat is X in regel Y?'*\n→ Letterlijk terugzoeken.\n\n*'Naar wie verwijst 'zij' in regel 3?'*\n→ Persoon vinden die past.\n\n*'Wat bedoelt de schrijver met 'dit'?'*\n→ Wat is samengevat? Vorige zinnen lezen.\n\n**Pas op — meerdere kandidaten**:\nSoms zijn er **meerdere mannen** in tekst. De toets kiest dan op basis van **wie logischerwijs handelt** in de zin.\n\n**Voorbeeld**:\n*'Tim sprak met Bram. **Hij** woont in Utrecht.'*\n→ Wie? Beide zijn mannelijk. Grammaticaal kan het allebei; vaak is het **onderwerp** *(Tim)* bedoeld. Lees de context!\n\n**Verwijzing-vraag-strategie**:\n1. Lees vraag — welk woord wordt gevraagd?\n2. Ga naar dat regelnummer.\n3. Lees zin + **vorige zin**.\n4. Welke persoon/ding past?\n5. Soms is antwoord **niet in dezelfde alinea** maar verder terug.\n\n**Toets-feitje**:\nDe vraag is **bijna nooit** 'naar wie verwijst HET woord'. Vaak heel specifiek: 'Naar wie verwijst 'zij' in regel 8?'",
    checks: [
      {
        q: "*'Tom liep naar de winkel. **Hij** kocht brood.'* Wie is **hij**?",
        options: ["Tom", "Iemand anders", "De winkel", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Wordt er in de tekst nog een andere persoon genoemd? Naar wie kan 'hij' dan verwijzen?", "Kan een winkel brood kopen? 'Hij' verwijst hier naar iemand die iets doet.", "Lees de eerste zin nog eens: wordt daar iemand genoemd die 'hij' kan zijn?"],
      },
      {
        q: "Wat is **'dit'** in *'Het regende. De weg was glad. **Dit** veroorzaakte ongelukken.'*?",
        options: ["Regen plus gladde weg", "De regen van die dag", "De weg waar het gebeurde", "De ongelukken op de weg"],
        answer: 0,
        wrongHints: [null, "Kijk naar beide zinnen vóór 'dit'. Gaat 'dit' over één zin, of over meer?", "Verwijst 'dit' naar een ding, zoals de weg zelf, of naar wat er gebeurde? Een weg die er gewoon ligt, veroorzaakt geen ongelukken.", "De ongelukken zijn wat 'dit' veroorzaakte. Kan iets zichzelf veroorzaken?"],
        uitlegPad: {
          stappen: [
            { titel: "'Dit' kijkt terug", tekst: "Het woord 'dit' verwijst naar wat erVOOR staat. Hier staan 2 zinnen vóór: regen + gladde weg. Beide samen zijn de oorzaak van de ongelukken." },
          ],
          woorden: [{ woord: "antecedent", uitleg: "Het woord/idee waar een verwijswoord naar verwijst." }],
          theorie: "'Dit' vat vaak een hele situatie of meerdere ideeën samen, niet 1 specifiek woord.",
          voorbeelden: [{ type: "stap", tekst: "'De zon scheen. Het was warm. Dit was fijn.' → 'dit' = beide eerdere zinnen samen." }],
          basiskennis: [{ onderwerp: "Volg de logica", uitleg: "Vraag: 'dit veroorzaakte ongelukken' — wat veroorzaakte ongelukken? Niet 1 ding, beide samen." }],
          niveaus: {
            basis: "De hele situatie.",
            simpeler: "'Dit' verwijst naar wat ervoor staat. 2 zinnen ervoor: regen + gladde weg. Beide samen veroorzaakten ongelukken.",
            nogSimpeler: "Hele situatie",
          },
        },
      },
      {
        q: "Verschil tussen **'deze'** en **'die'**?",
        options: ["Deze = dichtbij, die = verder weg", "Deze = formeel, die = informeel", "Deze = man, die = vrouw", "Deze = enkelvoud, die = meervoud"],
        answer: 0,
        wrongHints: [null, "Deze en die zeggen niets over hoe deftig je praat. Waar gaat het verschil dan over?", "Je zegt 'deze man' én 'deze vrouw'. Gaat het verschil dan over man of vrouw?", "Je zegt 'deze fiets' én 'deze fietsen'. Gaat het verschil dan over enkelvoud en meervoud?"],
      },
      {
        q: "*'Anna en Lisa kochten boeken. **Zij** las graag.'* Wie is **zij**?",
        options: ["Niet duidelijk: het kan allebei zijn", "Anna, want zij wordt eerst genoemd", "Lisa, want zij staat het dichtst bij", "Niemand, het gaat over iemand anders"],
        answer: 0,
        wrongHints: [null, "Anna wordt eerst genoemd, maar sluit de zin uit dat 'zij' Lisa is?", "Lisa staat het dichtst bij, maar sluit de zin uit dat 'zij' Anna is?", "Wie worden er in de eerste zin genoemd?"],
      },
    ],
  },

  // STAP 4: Argumenten
  {
    title: "Argumenten herkennen — voor + tegen",
    explanation:
      "In **opiniestukken** en **debatten** gebruikt de schrijver **argumenten** om mensen te overtuigen.\n\n**Wat is een argument?**\nEen **reden** om iets te geloven of te doen.\n\n• **Stelling**: 'De maximumsnelheid op snelwegen moet omhoog.'\n• **Argument voor**: 'Dan kunnen mensen sneller reizen.'\n• **Argument tegen**: 'Dat is gevaarlijk voor verkeersveiligheid.'\n\n**Soorten argumenten** *(uit het hoofd!)*:\n\n**1. Feitelijk argument**:\nGebaseerd op **bewijs / statistiek**.\n• 'Het CBS meldt dat 80% van Nederlanders ...'\n• 'Onderzoek van Universiteit Utrecht toont aan dat ...'\n\n**2. Emotioneel argument**:\nAppelleren aan **gevoel**.\n• 'Denk aan de kinderen die ...'\n• 'Het is hartverscheurend dat ...'\n\n**3. Moreel / ethisch argument**:\nWat is **goed of fout**?\n• 'Het is oneerlijk dat ...'\n• 'Het hoort niet dat ...'\n\n**4. Praktisch argument**:\nWat **werkt** of niet?\n• 'In Frankrijk werkt deze regel goed.'\n• 'Andere landen hebben dit al ingevoerd.'\n\n**5. Autoriteits-argument**:\nIemand met **gezag** zegt het.\n• 'Volgens de minister van ...'\n• 'De WHO adviseert ...'\n\n**6. Voorbeeld-argument**:\nIllustratie met **specifiek geval**.\n• 'Een voorbeeld is dat ...'\n• 'Neem nou Sven, die ...'\n\n**Tegenwerpingen** *(counter-arguments)*:\n\nEen sterke schrijver noemt **ook tegen-argumenten** + **weerlegt** ze:\n• 'Sommigen zeggen dat dit te duur is, **maar** in feite ...'\n• 'Tegenstanders wijzen op X, **echter** ...'\n\n**toetsvragen — de toets test of je dit herkent**:\n\n*'Welk argument geeft de schrijver voor zijn stelling?'*\n→ Zoek 'omdat', 'want', 'daarom', 'het bewijs is ...'.\n\n*'Welke tegenwerping noemt de schrijver?'*\n→ Zoek 'sommigen zeggen', 'tegenstanders beweren', 'maar', 'echter'.\n\n*'Welk soort argument is regel 12?'*\n→ Feitelijk? Emotioneel? Moreel?\n\n**Stelling vs argument vs voorbeeld**:\n• **Stelling** = de mening / het standpunt.\n• **Argument** = reden voor de stelling.\n• **Voorbeeld** = illustratie van een argument.\n\nLet op: **niet elk voorbeeld is een argument**. Het kan ook illustratie zijn.\n\n**Toets-strikvraag**:\nSommige stellingen lijken **feitelijk** maar zijn **interpretatie**:\n• 'Het is duidelijk dat ...' = mening verkleed als feit.\n• 'Iedereen weet dat ...' = vaak overdrijving.\n\n**Tip — kritisch lezen**:\n• Welk **bewijs** geeft de schrijver echt?\n• Welk argument klinkt sterk maar is **emotioneel**?\n• Welke tegenwerping wordt **goed weerlegd**, welke **niet**?",
    checks: [
      {
        q: "Wat is een **stelling**?",
        options: ["Het standpunt van de schrijver", "Een reden voor een mening", "Een feit dat je kunt controleren", "Een voorbeeld uit de praktijk"],
        answer: 0,
        wrongHints: [null, "Een reden die een mening ondersteunt, heet een argument. Wat is de mening zelf?", "Valt er over een controleerbaar feit te discussiëren?", "Een voorbeeld illustreert iets. Is dat wat de schrijver vindt?"],
      },
      {
        q: "*'Volgens het CBS rookt 20% van de Nederlanders.'* Welk soort argument?",
        options: ["Feitelijk", "Emotioneel", "Moreel", "Voorbeeld"],
        answer: 0,
        wrongHints: [null, "Een emotioneel argument speelt in op je gevoel. Roept deze zin een gevoel op?", "Een moreel argument gaat over wat goed of slecht is. Zegt deze zin iets over goed of fout?", "Een voorbeeld beschrijft één concreet geval. Is 20% van alle Nederlanders één geval?"],
      },
      {
        q: "*'Denk aan de eenzame ouderen die niemand meer bezoekt.'* Welk soort argument?",
        options: ["Emotioneel", "Feitelijk", "Praktisch", "Autoriteit"],
        answer: 0,
        wrongHints: [null, "Een feitelijk argument noemt cijfers of onderzoek. Staan die hier?", "Een praktisch argument gaat over wat werkt of handig is. Waar speelt deze zin op in?", "Bij een autoriteitsargument wordt een deskundige aangehaald. Wordt hier iemand als bron genoemd?"],
      },
      {
        q: "Wat is een **tegenwerping**?",
        options: ["Bezwaar dat een ander kan inbrengen", "Reden die de stelling direct steunt", "Reden die een ander argument steunt", "Weerlegging van een bezwaar van de ander"],
        answer: 0,
        wrongHints: [null, "Een reden die de stelling direct steunt, is een hoofdargument. Van wie komt een tegenwerping?", "Een reden die een ander argument steunt, is een subargument. Van wie komt een tegenwerping?", "Een weerlegging is jouw antwoord op een bezwaar. Wat brengt de ander dan eerst in?"],
      },
    ],
  },

  // STAP 5: Schrijver-bedoeling
  {
    title: "Bedoeling van de schrijver",
    explanation:
      "Schrijvers schrijven met een **doel**. De toets test of je dat herkent.\n\n**4 hoofd-bedoelingen** *(uit het hoofd!)*:\n\n**1. Informeren** *(uitleggen, leren)* 📚\n• **Doel**: lezer iets leren.\n• **Stijl**: zakelijk, feitelijk, geen emotie.\n• **Voorbeelden**: Wikipedia, schoolboek, nieuwsartikel, handleiding.\n\n**2. Overtuigen** *(mening + argument)* 💬\n• **Doel**: lezer overtuigen van mening.\n• **Stijl**: standpunt + argumenten.\n• **Voorbeelden**: opiniestuk, column, betoog.\n\n**3. Amuseren** *(plezier, humor)* 😄\n• **Doel**: lezer vermaken / laten lachen.\n• **Stijl**: humor, fictie, persoonlijk.\n• **Voorbeelden**: column met grap, kort verhaal, cabaret-tekst.\n\n**4. Activeren** *(oproep tot actie)* 📢\n• **Doel**: lezer iets laten doen.\n• **Stijl**: directe aansporing.\n• **Voorbeelden**: advertentie, reclame, oproep tot donatie.\n\n**toetsvraag**:\n*'Wat is de bedoeling van de schrijver?'*\n→ Lees vooral begin + eind. Welk werkwoordpatroon?\n\n**Herken-signalen**:\n\n**Informeren**:\n• Veel **feiten** + getallen.\n• Bron-vermelding ('volgens X').\n• Neutraal taalgebruik.\n• Doel: jou leren.\n\n**Overtuigen**:\n• **'Ik vind dat ...'** of **'volgens mij ...'**.\n• Argumenten + tegenwerpingen.\n• Sterke woorden *(prachtig, vreselijk)*.\n• Doel: jou laten geloven dat schrijver gelijk heeft.\n\n**Amuseren**:\n• Humor / sarcasme / ironie.\n• Persoonlijk verhaal.\n• **Anekdotes** (kleine verhaaltjes).\n• Doel: jou laten lachen.\n\n**Activeren**:\n• Directe **aansporing**: 'Koop nu!', 'Doe mee!', 'Steun ons!'.\n• **Verkoop-taal** of **oproep-taal**.\n• Telefoonnummer of website om te bezoeken.\n• Doel: jou iets laten doen.\n\n**Soms gemengd**:\nEen tekst kan **2 bedoelingen tegelijk** hebben:\n• Reclame voor een goed doel = activeren + emotioneel argument.\n• Column = vaak amuseren + overtuigen.\n\n**Toets-stappenplan**:\n1. **Welke werkwoorden** gebruikt schrijver? *(uitleggen / vinden / lachen / kopen)*.\n2. **Hoe eindigt** de tekst? Conclusie? Oproep? Grap?\n3. **Welke stijl** — feiten, mening, humor, verkoop?\n4. Welke optie past het meest?\n\n**Toets-strikvraag**:\nNiet verwarren met **soort tekst**:\n• **Bedoeling** = wat wil schrijver bereiken.\n• **Soort** = krant, blog, boek.\n\nVoorbeeld: advertentie in krant.\n• **Soort** = advertentie.\n• **Bedoeling** = activeren (iets kopen / doen).\n\n**Andere bedoelingen** *(meer specifiek)*:\n• **Beschrijven** — uitleggen hoe iets eruitziet.\n• **Beschouwen** — afwegen van pro/contra zonder duidelijke conclusie.\n• **Instrueren** — stap-voor-stap uitleggen *(handleiding, recept)*.",
    checks: [
      {
        q: "Wat is de **bedoeling** van een **reclame**?",
        options: ["Activeren", "Informeren", "Amuseren", "Beschouwen"],
        answer: 0,
        wrongHints: [null, "Een reclame geeft wel informatie, maar wat wil de maker uiteindelijk dat jij doet?", "Een grappige reclame amuseert, maar waarom betaalt een bedrijf ervoor?", "Beschouwen = verschillende kanten afwegen. Doet een reclame dat?"],
      },
      {
        q: "Wat is de **bedoeling** van een **schoolboek-tekst**?",
        options: ["Informeren", "Activeren", "Amuseren", "Verkopen"],
        answer: 0,
        wrongHints: [null, "Roept een schoolboek-tekst je op om iets te kopen of te gaan doen?", "Een schoolboek mag leuk zijn, maar waarvoor gebruik je het in de les?", "Probeert een schoolboek je echt iets te verkopen?"],
      },
      {
        q: "Een **column** met humor + mening — bedoeling?",
        options: ["Amuseren + overtuigen", "Overtuigen + informeren", "Amuseren + activeren", "Amuseren + beschrijven"],
        answer: 0,
        wrongHints: [null, "Informeren = neutraal feiten geven. Past dat bij een column vol humor?", "Activeren = de lezer tot een concrete actie aanzetten, zoals bij een oproep of reclame. Staat er in een column meestal zo'n oproep?", "Beschrijven = neutraal weergeven zonder oordeel. Past dat bij een tekst met een eigen mening?"],
      },
      {
        q: "*'Iedereen zou vegetariër moeten worden, omdat ...'* Welke bedoeling?",
        options: ["Overtuigen", "Informeren", "Amuseren", "Beschrijven"],
        answer: 0,
        wrongHints: [null, "Informeren is neutraal feiten geven. Is 'zou ... moeten' neutraal?", "Amuseren is de lezer vermaken. Is deze zin bedoeld om te lachen?", "Beschrijven is neutraal weergeven hoe iets is. Wat wil de schrijver met 'zou moeten'?"],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — CSE Nederlands mix",
    explanation:
      "Mix-toets in CSE-stijl. Door elkaar: strategie, hoofdgedachte, verwijzingen, argumenten, bedoeling.\n\nVeel succes!",
    checks: [
      {
        q: "Welk signaalwoord = **gevolg**?",
        options: ["daarom", "echter", "omdat", "bijvoorbeeld"],
        answer: 0,
        wrongHints: [null, "'Echter' kondigt een tegenstelling aan. Welk woord geeft aan wat eruit volgt?", "'Omdat' geeft de reden of oorzaak. Welk woord geeft juist het gevolg?", "'Bijvoorbeeld' kondigt een voorbeeld aan. Welk woord geeft aan wat eruit volgt?"],
      },
      {
        q: "*'Het regende. **Daarom** bleef ik thuis.'* Welk soort signaalwoord?",
        options: ["Gevolg", "Reden", "Tegenstelling", "Voorbeeld"],
        answer: 0,
        wrongHints: [null, "Reden is 'omdat'.", "Tegenstelling 'maar'.", "Voorbeeld 'zoals'."],
      },
      {
        q: "Wat is **hoofdgedachte** typisch?",
        options: ["De belangrijkste boodschap van de tekst", "Het onderwerp waar de hele tekst over gaat", "De eerste zin van de eerste alinea", "De vraag die de titel aan de lezer stelt"],
        answer: 0,
        wrongHints: [null, "Het onderwerp is waar de tekst óver gaat, zoals 'bijen'. Zegt dat al wat de schrijver erover beweert?", "De eerste zin is vaak een aandachtstrekker of aanleiding. Staat de kern daar altijd?", "Een vraag in de titel maakt nieuwsgierig. Is een vraag al een boodschap?"],
      },
      {
        q: "Schrijver gebruikt **'Volgens hoogleraar Jansen van de TU Delft ...'**. Welk argument-type?",
        options: ["Autoriteit", "Emotioneel", "Praktisch", "Voorbeeld"],
        answer: 0,
        wrongHints: [null, "Een emotioneel argument speelt in op je gevoel. Wie wordt hier genoemd, en waarom?", "Een praktisch argument gaat over wat werkt of handig is. Wie wordt hier als bron opgevoerd?", "Wordt hier een concreet geval beschreven, of wordt iemand aangehaald?"],
      },
      {
        q: "Welke bedoeling heeft een **advertentie**?",
        options: ["Activeren", "Informeren", "Amuseren", "Beschouwen"],
        answer: 0,
        wrongHints: [null, "Een advertentie geeft wel informatie, maar is die neutraal? Waarom betaalt een bedrijf ervoor?", "Een grappige advertentie amuseert, maar wat is het uiteindelijke doel van de adverteerder?", "Beschouwen = kanten afwegen. Noemt een advertentie ook de nadelen van het product?"],
      },
      {
        q: "*'Anna kocht een fiets. **Deze** was duur.'* Wat is **deze**?",
        options: ["De fiets", "Anna", "Een andere fiets", "Niet duidelijk"],
        answer: 0,
        wrongHints: [null, "Kan een persoon 'duur' zijn?", "Hoeveel fietsen worden er in de tekst genoemd?", "Lees de eerste zin: welk ding kan 'duur' zijn?"],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const cseLeesvaardigheidNederlands = {
  id: "cse-leesvaardigheid-nederlands",
  title: "CSE Nederlands — leesvaardigheid (klas 3-4)",
  emoji: "📰",
  level: "klas3-4",
  subject: "taal",
  referentieNiveau: "3F",
  sloThema: "Nederlands — leesvaardigheid CSE (centraal examen)",
  prerequisites: [
    { id: "tekstanalyse", title: "Tekstanalyse", niveau: "2F" },
    { id: "argumentatieleer", title: "Argumentatieleer", niveau: "2F" },
  ],
  intro:
    "CSE Nederlands leesvaardigheid voor klas 3-4 — strategie (skim/scan/answer), hoofdgedachte + details, verwijzingen (hij/dit/deze), argumenten herkennen (feitelijk/emotioneel/moreel/autoriteit), bedoeling schrijver (informeren/overtuigen/amuseren/activeren). Direct CSE-relevant. ~15 min.",
  triggerKeywords: [
    "nederlands leesvaardigheid", "CSE nederlands", "examen nederlands",
    "signaalwoorden", "hoofdgedachte",
    "verwijzingen", "argumenten",
    "schrijver bedoeling", "tekstanalyse",
  ],
  chapters,
  steps,
};

export default cseLeesvaardigheidNederlands;
