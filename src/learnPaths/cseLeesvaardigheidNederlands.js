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
      "Bij CSE Nederlands krijg je **lange teksten** en moet je in beperkte tijd **vragen beantwoorden**. Werken zonder strategie kost tijd + fouten.\n\n**De Cito-leesstrategie** *(uit het hoofd!)*:\n\n**1. Skim** (~30 sec):\n• Lees **titel** + **subtitels**.\n• Lees **eerste alinea** + **laatste alinea**.\n• Lees **eerste zin** van elke alinea *(topic sentence)*.\n• Bekijk **plaatjes + tabellen**.\nDoel: wat is **hoofdonderwerp**?\n\n**2. Lees vragen** (~1 min):\n• Begrijp wat **elke vraag vraagt** voordat je gaat lezen.\n• Onderstreep **trefwoorden** in vragen.\n• Sorteer vragen: makkelijke eerst, lastige later.\n\n**3. Scan** voor antwoorden:\n• Zoek **trefwoorden** uit vraag terug in tekst.\n• Lees alleen die **alinea** + zinnen vlak ervoor/erna.\n• Niet alles helemaal lezen!\n\n**4. Antwoord opschrijven**:\n• **Open vraag**: in eigen woorden, beknopt.\n• **Meerkeuze**: streep onmogelijke opties door, kies beste.\n\n**5. Controle** (~2 min aan eind):\n• Klopt elk antwoord nog?\n• Heb je alle vragen?\n\n**Nederlandse signaalwoorden — top 6 groepen**:\n\n**Toevoegen** (+): en, ook, bovendien, daarnaast, verder.\n**Tegenstelling** (↔): maar, echter, toch, niettemin, hoewel, ondanks.\n**Gevolg** (→): dus, daarom, daardoor, zodoende, bijgevolg.\n**Reden** (∵): omdat, want, doordat, vanwege.\n**Voorbeeld** (📋): zoals, bijvoorbeeld, bijv., onder andere.\n**Conclusie** (✓): kortom, samenvattend, alles bij elkaar, dus.\n\n**Cito-truc — signaalwoord = hint over wat volgt**:\n• 'Maar' / 'Echter' → tegenovergesteld komt.\n• 'Omdat' → reden komt.\n• 'Daarom' / 'Dus' → conclusie / gevolg.\n• 'Zoals' → voorbeeld komt.\n\n**Voorbeeld**:\n*'Veel jongeren willen vegetariër worden. Echter, ze weten vaak niet hoe.'*\n→ 'Echter' = tegenstelling. Verwacht: ondanks de wens, lukt het niet *(weten niet hoe)*.\n\n**Cito-tip — examenstress**:\n• **Lees rustig** — fouten komen door haast.\n• Tijd-bewust **maar niet jagen**: 90 min voor 35-45 vragen = ~2 min/vraag.\n• **Slechte vraag overslaan** + later terugkomen.",
    svg: signaalwoordenSvg(),
    checks: [
      {
        q: "Welke is **eerste stap** bij CSE-tekst?",
        options: ["Skimmen — titel + eerste alinea + plaatjes", "Direct vragen beantwoorden", "Alles letter voor letter lezen", "Slot lezen"],
        answer: 0,
        wrongHints: [null, "Zonder context = fouten.", "Te traag.", "Niet als eerste."],
      },
      {
        q: "Welk signaalwoord = **tegenstelling**?",
        options: ["echter", "omdat", "zoals", "bovendien"],
        answer: 0,
        wrongHints: [null, "Reden.", "Voorbeeld.", "Toevoeging."],
      },
      {
        q: "*'Veel jongeren willen vegetariër worden. ___, ze weten vaak niet hoe.'* Welk woord past?",
        options: ["Echter", "Daarom", "Bijvoorbeeld", "En"],
        answer: 0,
        wrongHints: [null, "Geen gevolg.", "Geen voorbeeld.", "Geen toevoeging."],
      },
      {
        q: "Wat doe je met **een lastige vraag** op CSE?",
        options: ["Overslaan + later terugkomen", "Lang piekeren", "Gokken zonder lezen", "Skip helemaal"],
        answer: 0,
        wrongHints: [null, "Verspilt tijd.", "Niet zonder lezen.", "Wel later proberen."],
      },
    ],
  },

  // STAP 2: Hoofdgedachte
  {
    title: "Hoofdgedachte + details",
    explanation:
      "Cito test 2 begrip-niveaus:\n\n**1. Hoofdgedachte** *(main idea)* — *waar gaat de hele tekst over?*\n• Meestal in **eerste of laatste alinea**.\n• Soms in **kop** of **subkop**.\n• Soms uit **herhaling van thema** door tekst.\n\n**2. Detail** — *specifiek feit, jaar, naam, aantal*.\n• Zoek terug in tekst.\n• Lees vraag, zoek **trefwoord**, lees alinea.\n\n**Cito-vraag-typen — leer ze herkennen**:\n\n• *'Wat is de hoofdgedachte?'* → hoofdgedachte.\n• *'Wat staat in alinea 3?'* → detail uit alinea 3.\n• *'Wat betekent X in regel 5?'* → woordbetekenis.\n• *'Wat is de bedoeling van de schrijver?'* → schrijver-doel.\n• *'Welke tegenwerping noemt de schrijver?'* → argument.\n• *'Naar wie verwijst 'hij' in regel 8?'* → verwijzing.\n\n**Hoofdgedachte herkennen — 3 trucs**:\n\n**1. Topic sentence**:\nMeestal **eerste zin** van eerste alinea = hoofdpunt.\n\n**2. Conclusie**:\nIn slot-alinea staat vaak 'kortom...' of 'concluderend...'.\n\n**3. Wat ZOU de titel kunnen zijn?**:\nWelk antwoord zou een goede ondertitel zijn voor de hele tekst?\n\n**Voorbeeld**:\nTekst over bijen die uitsterven, met:\n• Alinea 1: 'Bijen zijn vitaal voor planten.'\n• Alinea 2: details over bestuiving.\n• Alinea 3: bedreigingen (pesticide).\n• Alinea 4: 'Daarom moeten we bijen beschermen.'\n\n**Hoofdgedachte** = 'We moeten bijen beschermen want ze zijn vitaal voor planten.'\n\n**Cito-strikvraag — geen detail kiezen**:\nLet op antwoord-opties die **te specifiek** zijn:\n• 'Bijen bestuiven 90% van gewassen' = detail (uit alinea 2).\n• 'Pesticiden zijn schadelijk' = detail.\n• 'Bijen zijn belangrijk voor de natuur' = hoofdgedachte.\n\n**Cito-strikvraag 2 — geen mening**:\n*'Wat staat er volgens de tekst?'*\n→ Antwoord moet **letterlijk in tekst staan**. Niet logisch afleiden.\n\nBijvoorbeeld als tekst zegt 'bijen bestuiven veel gewassen' kun je niet antwoorden 'zonder bijen geen oogst' tenzij dat letterlijk staat.\n\n**Cito-tip — vergelijk opties**:\nVaak lijkt 2-3 opties juist. Vergelijk per woord:\n• Welk past **letterlijk**?\n• Welk is **te ruim**?\n• Welk is **te smal**?\n• Welk is **net niet wat de tekst zegt**?",
    checks: [
      {
        q: "Waar staat de **hoofdgedachte** meestal?",
        options: ["Eerste of laatste alinea", "Midden", "Onder de kop", "Bij een plaatje"],
        answer: 0,
        wrongHints: [null, "Niet typisch.", "Soms maar niet primair.", "Geen typische plek."],
      },
      {
        q: "*'Volgens de tekst, ___'* Wat doe je?",
        options: ["Zoek letterlijk in tekst", "Geef eigen mening", "Gok beste antwoord", "Sla over"],
        answer: 0,
        wrongHints: [null, "Niet — alleen tekst.", "Niet zonder lezen.", "Wel beantwoorden."],
      },
      {
        q: "Tekst over bijen: 'Bijen zijn vitaal. Ze bestuiven 90%. We moeten ze beschermen.' Hoofdgedachte?",
        options: ["Bijen zijn belangrijk en moeten worden beschermd", "Bijen bestuiven 90% gewassen", "Bijen sterven uit", "Pesticide is slecht"],
        answer: 0,
        wrongHints: [null, "Detail.", "Niet expliciet in deze samenvatting.", "Niet de hoofdgedachte."],
      },
      {
        q: "Welk antwoord is **te specifiek** voor 'hoofdgedachte'?",
        options: ["Specifiek getal of voorbeeld", "Algemene boodschap", "Wat in titel staat", "Conclusie aan eind"],
        answer: 0,
        wrongHints: [null, "Goed voor hoofdgedachte.", "Vaak goed.", "Vaak goed."],
      },
    ],
  },

  // STAP 3: Verwijzingen
  {
    title: "Verwijzingen — wie/wat is 'hij', 'dit', 'deze'?",
    explanation:
      "Schrijvers vervangen vaak personen, dingen of ideeën door **verwijswoorden**:\n• **Hij / zij / het / ze** — personen of dingen.\n• **Dit / dat / deze / die** — specifiek iets.\n• **Zijn / haar / hun** — bezittelijk.\n• **Zo / dergelijk** — soortgelijk.\n\n**Cito-vraag**:\n*'In regel 6, naar wie verwijst 'hij'?'*\n→ Zoek **vorige zinnen**. Welke **mannelijke persoon** is genoemd?\n\n**Voorbeeld**:\n*'De directeur sprak Sven aan. **Hij** keek streng.'*\n→ 'Hij' = directeur *(meest waarschijnlijk)*. Of Sven? Hangt af van context. Wie kan 'streng kijken' — een directeur die iemand toespreekt, of de aangesproken Sven? Beide kan grammaticaal; vaak directeur.\n\n**Truc — dichtstbijzijnde mannelijke onderwerp**:\nMeestal verwijst 'hij' naar het laatst genoemde mannelijke onderwerp dat past in context.\n\n**Voorbeeld — 'dit' en 'dat'**:\n*'De wedstrijd was hard. Spelers raakten geblesseerd. **Dit** is zorgwekkend.'*\n→ 'Dit' = de hele situatie *(harde wedstrijd + blessures)*.\n\n**'Dit' vat samen** — vaak hele zinnen of meerdere ideeën.\n\n**Voorbeeld — 'deze' / 'die'**:\n*'Er kwamen twee experts. **Deze** waren het oneens met **die** van vorig jaar.'*\n→ **Deze** = de huidige experts.\n→ **Die** = de experts van vorig jaar.\n\n**'Deze' = dichtbij** *(in tekst of tijd)*. **'Die' = verder weg**.\n\n**Vraagsoorten — Cito**:\n\n*'Wie/wat is X in regel Y?'*\n→ Letterlijk terugzoeken.\n\n*'Naar wie verwijst 'zij' in regel 3?'*\n→ Persoon vinden die past.\n\n*'Wat bedoelt de schrijver met 'dit'?'*\n→ Wat is samengevat? Vorige zinnen lezen.\n\n**Pas op — meerdere kandidaten**:\nSoms zijn er **meerdere mannen** in tekst. Cito kiest dan op basis van **wie logischerwijs handelt** in de zin.\n\n**Voorbeeld**:\n*'Tim sprak met Bram. **Hij** woont in Utrecht.'*\n→ Wie? Beide zijn mannelijk. **Cito** geeft vaak 'de hoofdpersoon' of degene **net genoemd** *(Bram)*. Lees context!\n\n**Verwijzing-vraag-strategie**:\n1. Lees vraag — welk woord wordt gevraagd?\n2. Ga naar dat regelnummer.\n3. Lees zin + **vorige zin**.\n4. Welke persoon/ding past?\n5. Soms is antwoord **niet in dezelfde alinea** maar verder terug.\n\n**Cito-feitje**:\nDe vraag is **bijna nooit** 'naar wie verwijst HET woord'. Vaak heel specifiek: 'Naar wie verwijst 'zij' in regel 8?'",
    checks: [
      {
        q: "*'Tom liep naar de winkel. **Hij** kocht brood.'* Wie is **hij**?",
        options: ["Tom", "Iemand anders", "De winkel", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Niet — Tom expliciet.", "Geen persoon.", "Wel bekend."],
      },
      {
        q: "Wat is **'dit'** in *'Het regende. De weg was glad. **Dit** veroorzaakte ongelukken.'*?",
        options: ["De hele situatie (regen + gladde weg)", "Alleen regen", "Alleen gladde weg", "De ongelukken"],
        answer: 0,
        wrongHints: [null, "Te beperkt.", "Te beperkt.", "Dat is gevolg, niet 'dit'."],
        uitlegPad: {
          stappen: [
            { titel: "'Dit' kijkt terug", tekst: "Het woord 'dit' verwijst naar wat erVOOR staat. Hier staan 2 zinnen vóór: regen + gladde weg. Beide samen zijn de oorzaak van de ongelukken." },
          ],
          woorden: [{ woord: "antecedent", uitleg: "Het woord/idee waar een verwijswoord naar verwijst." }],
          theorie: "'Dit' vat vaak een hele situatie of meerdere ideeën samen, niet 1 specifiek woord.",
          voorbeelden: [{ type: "stap", tekst: "'De zon scheen. Het was warm. Dit was fijn.' → 'dit' = beide eerdere zinnen samen." }],
          basiskennis: [{ onderwerp: "Volg de logica", uitleg: "Vraag: 'dit veroorzaakte ongelukken' — wat veroorzaakte ongelukken? Niet 1 ding, beide samen." }],
          niveaus: {
            basis: "De hele situatie. A.",
            simpeler: "'Dit' verwijst naar wat ervoor staat. 2 zinnen ervoor: regen + gladde weg. Beide samen veroorzaakten ongelukken. = A.",
            nogSimpeler: "Hele situatie = A.",
          },
        },
      },
      {
        q: "Verschil tussen **'deze'** en **'die'**?",
        options: ["Deze = dichtbij, die = verder weg", "Geen verschil", "Deze = man, die = vrouw", "Deze = enkelvoud, die = meervoud"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Niet over geslacht.", "Beide kunnen ev + mv."],
      },
      {
        q: "*'Anna en Lisa kochten boeken. **Zij** las graag.'* Wie is **zij**?",
        options: ["Niet duidelijk — kan beide", "Anna sowieso", "Lisa sowieso", "Niemand"],
        answer: 0,
        wrongHints: [null, "Mogelijk maar niet eenduidig.", "Mogelijk maar niet eenduidig.", "Wel iemand."],
      },
    ],
  },

  // STAP 4: Argumenten
  {
    title: "Argumenten herkennen — voor + tegen",
    explanation:
      "In **opiniestukken** en **debatten** gebruikt schrijver **argumenten** om mensen te overtuigen.\n\n**Wat is een argument?**\nEen **reden** om iets te geloven of te doen.\n\n• **Stelling**: 'Er moet een grenzeloze maximum-snelheid op snelwegen komen.'\n• **Argument voor**: 'Dan kunnen mensen sneller reizen.'\n• **Argument tegen**: 'Dat is gevaarlijk voor verkeersveiligheid.'\n\n**Soorten argumenten** *(uit het hoofd!)*:\n\n**1. Feitelijk argument**:\nGebaseerd op **bewijs / statistiek**.\n• 'Het CBS meldt dat 80% van Nederlanders ...'\n• 'Onderzoek van Universiteit Utrecht toont aan dat ...'\n\n**2. Emotioneel argument**:\nAppelleren aan **gevoel**.\n• 'Denk aan de kinderen die ...'\n• 'Het is hartverscheurend dat ...'\n\n**3. Moreel / ethisch argument**:\nWat is **goed of fout**?\n• 'Het is oneerlijk dat ...'\n• 'Het hoort niet dat ...'\n\n**4. Praktisch argument**:\nWat **werkt** of niet?\n• 'In Frankrijk werkt deze regel goed.'\n• 'Andere landen hebben dit al ingevoerd.'\n\n**5. Autoriteits-argument**:\nIemand met **gezag** zegt het.\n• 'Volgens de minister van ...'\n• 'De WHO adviseert ...'\n\n**6. Voorbeeld-argument**:\nIllustratie met **specifiek geval**.\n• 'Een voorbeeld is dat ...'\n• 'Neem nou Sven, die ...'\n\n**Tegenwerpingen** *(counter-arguments)*:\n\nEen sterke schrijver noemt **ook tegen-argumenten** + **weerlegt** ze:\n• 'Sommigen zeggen dat dit te duur is, **maar** in feite ...'\n• 'Tegenstanders wijzen op X, **echter** ...'\n\n**Cito-vragen — Cito test of je dit herkent**:\n\n*'Welk argument geeft de schrijver voor zijn stelling?'*\n→ Zoek 'omdat', 'want', 'daarom', 'het bewijs is ...'.\n\n*'Welke tegenwerping noemt de schrijver?'*\n→ Zoek 'sommigen zeggen', 'tegenstanders beweren', 'maar', 'echter'.\n\n*'Welk soort argument is regel 12?'*\n→ Feitelijk? Emotioneel? Moreel?\n\n**Stelling vs argument vs voorbeeld**:\n• **Stelling** = de mening / het standpunt.\n• **Argument** = reden voor de stelling.\n• **Voorbeeld** = illustratie van een argument.\n\nLet op: **niet elk voorbeeld is een argument**. Het kan ook illustratie zijn.\n\n**Cito-strikvraag**:\nSommige stellingen lijken **feitelijk** maar zijn **interpretatie**:\n• 'Het is duidelijk dat ...' = mening verkleed als feit.\n• 'Iedereen weet dat ...' = vaak overdrijving.\n\n**Tip — kritisch lezen**:\n• Welk **bewijs** geeft de schrijver echt?\n• Welk argument klinkt sterk maar is **emotioneel**?\n• Welke tegenwerping wordt **goed weerlegd**, welke **niet**?",
    checks: [
      {
        q: "Wat is een **stelling**?",
        options: ["De mening / het standpunt", "Een reden", "Een feit", "Een voorbeeld"],
        answer: 0,
        wrongHints: [null, "Dat is argument.", "Stelling kan ook geen feit zijn.", "Niet stelling."],
      },
      {
        q: "*'Volgens het CBS rookt 20% van Nederlanders.'* Welk soort argument?",
        options: ["Feitelijk", "Emotioneel", "Moreel", "Voorbeeld"],
        answer: 0,
        wrongHints: [null, "Geen emotie.", "Niet over goed/fout.", "Wel illustratie, maar primair feit."],
      },
      {
        q: "*'Denk aan de eenzame ouderen die niemand meer bezoekt.'* Welk soort argument?",
        options: ["Emotioneel", "Feitelijk", "Praktisch", "Autoriteit"],
        answer: 0,
        wrongHints: [null, "Geen bewijs.", "Geen werkings-argument.", "Geen autoriteit."],
      },
      {
        q: "Wat is een **tegenwerping**?",
        options: ["Argument tegen de stelling (van tegenstander)", "Argument voor", "Een feit", "Een vraag"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet specifiek argument-type.", "Geen tegenwerping."],
      },
    ],
  },

  // STAP 5: Schrijver-bedoeling
  {
    title: "Bedoeling van de schrijver",
    explanation:
      "Schrijvers schrijven met een **doel**. Cito test of je dat herkent.\n\n**4 hoofd-bedoelingen** *(uit het hoofd!)*:\n\n**1. Informeren** *(uitleggen, leren)* 📚\n• **Doel**: lezer iets leren.\n• **Stijl**: zakelijk, feitelijk, geen emotie.\n• **Voorbeelden**: Wikipedia, schoolboek, nieuwsartikel, handleiding.\n\n**2. Overtuigen** *(mening + argument)* 💬\n• **Doel**: lezer overtuigen van mening.\n• **Stijl**: standpunt + argumenten.\n• **Voorbeelden**: opiniestuk, column, betoog.\n\n**3. Amuseren** *(plezier, humor)* 😄\n• **Doel**: lezer vermaken / laten lachen.\n• **Stijl**: humor, fictie, persoonlijk.\n• **Voorbeelden**: column met grap, kort verhaal, cabaret-tekst.\n\n**4. Activeren** *(oproep tot actie)* 📢\n• **Doel**: lezer iets laten doen.\n• **Stijl**: directe aansporing.\n• **Voorbeelden**: advertentie, reclame, oproep tot donatie.\n\n**Cito-vraag**:\n*'Wat is de bedoeling van de schrijver?'*\n→ Lees vooral begin + eind. Welk werkwoord-pattern?\n\n**Herken-signalen**:\n\n**Informeren**:\n• Veel **feiten** + getallen.\n• Bron-vermelding ('volgens X').\n• Neutraal taalgebruik.\n• Doel: jou leren.\n\n**Overtuigen**:\n• **'Ik vind dat ...'** of **'volgens mij ...'**.\n• Argumenten + tegenwerpingen.\n• Sterke woorden *(prachtig, vreselijk)*.\n• Doel: jou laten geloven dat schrijver gelijk heeft.\n\n**Amuseren**:\n• Humor / sarcasme / ironie.\n• Persoonlijk verhaal.\n• **Anekdotes** (kleine verhaaltjes).\n• Doel: jou laten lachen.\n\n**Activeren**:\n• Directe **aansporing**: 'Koop nu!', 'Doe mee!', 'Steun ons!'.\n• **Verkoop-taal** of **oproep-taal**.\n• Telefoonnummer of website om te bezoeken.\n• Doel: jou iets laten doen.\n\n**Soms gemengd**:\nEen tekst kan **2 bedoelingen tegelijk** hebben:\n• Reclame voor goede doel = activeren + emotioneel argument.\n• Column = vaak amuseren + overtuigen.\n\n**Cito-stappenplan**:\n1. **Welke werkwoorden** gebruikt schrijver? *(uitleggen / vinden / lachen / kopen)*.\n2. **Hoe eindigt** de tekst? Conclusie? Oproep? Grap?\n3. **Welke stijl** — feiten, mening, humor, verkoop?\n4. Welke optie past het meest?\n\n**Cito-strikvraag**:\nNiet verwarrend met **soort tekst**:\n• **Bedoeling** = wat wil schrijver bereiken.\n• **Soort** = krant, blog, boek.\n\nVoorbeeld: advertentie in krant.\n• **Soort** = advertentie.\n• **Bedoeling** = activeren (iets kopen / doen).\n\n**Andere bedoelingen** *(meer specifiek)*:\n• **Beschrijven** — uitleggen hoe iets eruit ziet.\n• **Beschouwen** — afwegen van pro/contra zonder duidelijke conclusie.\n• **Instrueren** — stap-voor-stap uitleggen *(handleiding, recept)*.",
    checks: [
      {
        q: "Wat is de **bedoeling** van een **reclame**?",
        options: ["Activeren (iets kopen/doen)", "Informeren", "Amuseren", "Beschouwen"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Soms maar niet primair.", "Niet."],
      },
      {
        q: "Wat is de **bedoeling** van een **schoolboek-tekst**?",
        options: ["Informeren (leren)", "Activeren", "Amuseren", "Verkopen"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet primair.", "Niet."],
      },
      {
        q: "Een **column** met humor + mening — bedoeling?",
        options: ["Amuseren + overtuigen", "Alleen informeren", "Alleen activeren", "Alleen beschrijven"],
        answer: 0,
        wrongHints: [null, "Te beperkt.", "Te beperkt.", "Te beperkt."],
      },
      {
        q: "*'Iedereen zou vegetarier moeten worden, omdat ...'* Welke bedoeling?",
        options: ["Overtuigen", "Informeren", "Amuseren", "Beschrijven"],
        answer: 0,
        wrongHints: [null, "Niet — heeft mening.", "Geen humor.", "Geen beschrijving."],
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
        wrongHints: [null, "Tegenstelling.", "Reden.", "Voorbeeld."],
      },
      {
        q: "*'Het regende. **Daarom** bleef ik thuis.'* Welk soort signaalwoord?",
        options: ["Gevolg", "Reden", "Tegenstelling", "Voorbeeld"],
        answer: 0,
        wrongHints: [null, "Reden is 'omdat'.", "Tegenstelling 'maar'.", "Voorbeeld 'zoals'."],
      },
      {
        q: "Wat is **hoofdgedachte** typisch?",
        options: ["Algemene boodschap van hele tekst", "Specifiek getal", "1 zin uit alinea 2", "Bijschrift bij foto"],
        answer: 0,
        wrongHints: [null, "Detail.", "Detail.", "Niet primair."],
      },
      {
        q: "Schrijver gebruikt **'Volgens onderzoek van TU Delft ...'**. Welk argument-type?",
        options: ["Autoriteit", "Emotioneel", "Praktisch", "Voorbeeld"],
        answer: 0,
        wrongHints: [null, "Geen emotie.", "Niet praktisch.", "Wel bron, maar specifiek autoriteit."],
      },
      {
        q: "Welke bedoeling heeft een **advertentie**?",
        options: ["Activeren", "Informeren neutraal", "Amuseren", "Wetenschappelijk"],
        answer: 0,
        wrongHints: [null, "Niet neutraal.", "Niet primair.", "Niet."],
      },
      {
        q: "*'Anna kocht een fiets. **Deze** was duur.'* Wat is **deze**?",
        options: ["De fiets", "Anna", "Een andere fiets", "Niet duidelijk"],
        answer: 0,
        wrongHints: [null, "Anna is persoon, geen 'deze'.", "Maar 1 fiets genoemd.", "Wel duidelijk."],
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
