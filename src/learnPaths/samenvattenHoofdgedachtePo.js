// Leerpad: Samenvatten / hoofdgedachte vinden — voor groep 5-8
// 5 stappen, studievaardigheden / leesvaardigheid.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#ec407a",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["💭","🔍","✏️","📝","🏆"];

const chapters = [
  { letter: "A", title: "Wat is hoofdgedachte?", emoji: "💭", from: 0, to: 0 },
  { letter: "B", title: "Hoofdgedachte vinden", emoji: "🔍", from: 1, to: 1 },
  { letter: "C", title: "Hoofd vs bijzaken", emoji: "✏️", from: 2, to: 2 },
  { letter: "D", title: "Samenvatting maken", emoji: "📝", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een hoofdgedachte?",
    explanation: "**Hoofdgedachte** = waar de tekst **vooral over gaat**. De **kernboodschap** in 1 of 2 zinnen samengevat.\n\n**Voorbeeld** — een tekst over voetbal:\n*'Voetbal is wereldwijd de populairste sport. Miljoenen mensen kijken WK-finales. Er zijn voetbal-clubs in elk land. Kinderen beginnen al jong met voetballen op school.'*\n\n**Hoofdgedachte**: *'Voetbal is een populaire sport over de hele wereld.'*\n\n**Niet de hoofdgedachte**:\n• 'Kinderen beginnen jong met voetballen' — dat is een **detail**, geen hoofdpunt.\n• 'WK-finales worden bekeken door miljoenen' — ook detail.\n\n**Verschil hoofdgedachte vs onderwerp**:\n• **Onderwerp** = waar gaat het over? *(1 woord/zin: 'voetbal')*.\n• **Hoofdgedachte** = wat zegt de tekst over dat onderwerp? *(volle zin)*.\n\n**Hoofdgedachte staat vaak**:\n1. **In de eerste zin** van de alinea.\n2. **In de laatste zin** als samenvatting.\n3. **In de titel** of kop.\n\n**Cito-vraag-typen**:\n• 'Wat is de hoofdgedachte van deze tekst?'\n• 'Welke zin geeft het beste de hoofdgedachte weer?'\n• 'Welk antwoord beschrijft het hoofdpunt?'\n\n**Cito-tip**:\nVraag jezelf: *'Wat zou ik vertellen aan iemand die de tekst niet heeft gelezen?'* — dat is de hoofdgedachte.",
    checks: [
      {
        q: "Wat is een **hoofdgedachte**?",
        options: ["De kernboodschap","De titel","Een klein detail","De eerste letter"],
        answer: 0,
        wrongHints: [null,"Soms staat ie in titel, maar 't is meer.","Andersom — geen detail.","Nee, geen letter."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de hoofdgedachte?", tekst: "De **hoofdgedachte** is de **kernboodschap** van een tekst — wat de schrijver vooral wil zeggen. Het is GEEN klein detail, ook niet alleen de titel." },
            { titel: "In 1 zin vatten", tekst: "Stel jezelf de vraag: als ik deze hele tekst in 1 zin aan iemand uitleg, wat is dan die zin? Dat is de hoofdgedachte." },
            { titel: "Niet de titel zelf", tekst: "De TITEL geeft soms een hint, maar is meestal te kort. Hoofdgedachte = volledige boodschap in een zin." },
          ],
          woorden: [
            { woord: "hoofdgedachte", uitleg: "Kernboodschap van een tekst." },
            { woord: "detail", uitleg: "Klein stukje informatie binnen tekst." },
            { woord: "titel", uitleg: "Naam van de tekst — slechts een hint." },
          ],
          theorie: "Cito-tip hoofdgedachte: kijk wat het ONDERWERP is + wat de schrijver ERVAN VINDT/zegt. Onderwerp + boodschap = hoofdgedachte.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over kraanwater: hoofdgedachte = 'NL-kraanwater is veilig en goedkoop'." },
            { type: "stap", tekst: "Tekst over Pluto: hoofdgedachte = 'Pluto is geen planeet meer sinds 2006'." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Stel: 'Wat zou de schrijver in één zin zeggen?' Dat is de hoofdgedachte." }],
          niveaus: {
            basis: "Hoofdgedachte = kernboodschap van de hele tekst.",
            simpeler: "Wat zou je in 1 zin tegen vriend zeggen = hoofdgedachte.",
            nogSimpeler: "Kern in 1 zin.",
          },
        },
      },
      {
        q: "Verschil **onderwerp** en **hoofdgedachte**?",
        options: ["Onderwerp = waarover, hoofdgedachte = wat ervan gezegd","Onderwerp komt na hoofdgedachte","Geen verschil","Onderwerp altijd 1 woord"],
        answer: 0,
        wrongHints: [null,"Onderwerp komt vaak eerst.","Wel verschil.","Niet altijd."],
        uitlegPad: {
          stappen: [
            { titel: "Twee verschillende dingen", tekst: "**Onderwerp** = waarover gaat de tekst? (1-3 woorden). **Hoofdgedachte** = WAT zegt de tekst erover? (een hele zin)." },
            { titel: "Voorbeeld: voetbal", tekst: "Tekst over voetbal. Onderwerp = 'voetbal'. Hoofdgedachte = 'voetbal is de populairste sport wereldwijd' (volledige boodschap)." },
            { titel: "Cito-truc", tekst: "Vraag eerst: WAARover gaat het = onderwerp. Vraag daarna: WAT zegt de tekst erover = hoofdgedachte. Twee verschillende vragen!" },
          ],
          woorden: [
            { woord: "onderwerp", uitleg: "WAAROVER de tekst gaat (1-3 woorden)." },
            { woord: "hoofdgedachte", uitleg: "Wat de tekst over het onderwerp ZEGT (zin)." },
          ],
          theorie: "Cito-formule: ONDERWERP + WAT WORDT GEZEGD = HOOFDGEDACHTE. Bijvoorbeeld: 'kraanwater' (onderwerp) + 'is veilig' (boodschap) = 'kraanwater is veilig' (hoofdgedachte).",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over honden. Onderwerp = 'honden'. Hoofdgedachte = 'honden zijn trouwe huisdieren'." },
            { type: "stap", tekst: "Tekst over plastic in zee. Onderwerp = 'plastic in zee'. Hoofdgedachte = 'plastic in zee is een groot probleem'." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onderwerp = kort (1-3 woorden). Hoofdgedachte = hele zin (onderwerp + WAT)." }],
          niveaus: {
            basis: "Onderwerp = waarover. Hoofdgedachte = wat erover gezegd.",
            simpeler: "Onderwerp = woord(en). Hoofdgedachte = zin.",
            nogSimpeler: "Onderwerp + boodschap = hoofdgedachte.",
          },
        },
      },
      {
        q: "Tekst: 'Honden zijn loyaal. Ze beschermen je. Ze spelen graag.'\n\n**Hoofdgedachte**?",
        options: ["Honden zijn fijne huisdieren","Honden bijten soms","Katten zijn beter","Honden eten veel"],
        answer: 0,
        wrongHints: [null,"Klopt — alle 3 zinnen wijzen naar 'fijne huisdier'.","Niet vermeld in tekst.","Niet vermeld.","Niet vermeld."],
        uitlegPad: {
          stappen: [
            { titel: "Lees alle 3 zinnen", tekst: "*'Honden zijn loyaal'* + *'Ze beschermen je'* + *'Ze spelen graag'*. Wat hebben deze 3 gemeen? Alle 3 zijn POSITIEVE eigenschappen van honden." },
            { titel: "Vraag jezelf: rode draad?", tekst: "Wat verbindt deze 3 zinnen? Het thema is: **honden zijn goede / fijne huisdieren**. Daar wijzen alle 3 zinnen naar." },
            { titel: "Waarom NIET de andere opties?", tekst: "• **Honden bijten soms** — niet in tekst.\n• **Katten zijn beter** — niet in tekst (en juist tegenovergesteld).\n• **Honden eten veel** — niet in tekst.\n→ Hoofdgedachte moet uit de TEKST komen, niet uit jouw eigen kennis." },
          ],
          woorden: [
            { woord: "rode draad", uitleg: "Wat alle zinnen met elkaar verbindt." },
            { woord: "hoofdgedachte", uitleg: "De kernboodschap die alle zinnen samenvat." },
          ],
          theorie: "Cito-truc hoofdgedachte: lees alle zinnen + vraag 'wat is hier het ONDERWERP?' (honden) + 'wat wordt erover gezegd?' (zijn fijn/loyaal/beschermend/speels). Onderwerp + boodschap = hoofdgedachte.",
          voorbeelden: [
            { type: "stap", tekst: "*'Sneeuw is wit. Het smelt bij 0°C. Kinderen spelen erin.'* → hoofdgedachte: 'Sneeuw is een natuurverschijnsel/leuk om mee te spelen'." },
            { type: "stap", tekst: "Pas op: 'Katten zijn beter' is een MENING die NIET in de tekst staat. Cito wil dat je uit de TEKST haalt, niet eigen mening." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Antwoord MOET uit de tekst komen. Niet vermeld in tekst = niet hoofdgedachte." }],
          niveaus: {
            basis: "Honden zijn fijne huisdieren (rode draad: loyaal + beschermen + spelen). = A.",
            simpeler: "Alle 3 zinnen zeggen iets POSITIEFS over honden. Samen: fijne huisdieren. = A.",
            nogSimpeler: "Fijne huisdieren = A.",
          },
        },
      },
    ],
  },

  {
    title: "Hoofdgedachte vinden — strategieën",
    explanation: "**Hoe vind je de hoofdgedachte?**\n\n**1. Lees de titel** — geeft vaak een hint.\n• Titel 'Voordelen van fietsen' → hoofdgedachte = 'fietsen heeft voordelen'.\n\n**2. Lees de eerste zin van elke alinea** — vaak 'topic-sentence'.\n• Eerste zinnen geven samenvatting van de alinea.\n\n**3. Lees de laatste alinea / conclusie** — geeft samenvatting.\n\n**4. Vraag: 'Wat is het rode draadje?'**\n• Wat komt steeds terug?\n• Wat is het hoofdthema dat alle alinea's verbindt?\n\n**5. Sleutelwoorden tellen**:\n• Welke woorden komen vaak voor?\n• Bijv. tekst over 'vrienden' — hoofdgedachte gaat over vriendschap.\n\n**Cito-fout 1**:\nKiezen voor een **detail** in plaats van het hoofdpunt.\n• Tekst over voetbal: detail = 'Messi is wereldspeler'.\n• Hoofd = 'voetbal is populair wereldwijd'.\n\n**Cito-fout 2**:\nKiezen voor een **te algemene** stelling.\n• Te algemeen: 'sporten zijn leuk'.\n• Beter: 'voetbal is wereldwijd populair'.\n\n**Cito-fout 3**:\nKiezen voor een **mening die NIET in tekst staat**.\n• Tekst zegt nergens dat 'tennis beter is dan voetbal'.\n• Antwoord moet komen uit de tekst.\n\n**Cito-tip**:\nHet juiste antwoord is meestal in **eigen woorden** wat de tekst zegt — niet een letterlijke quote. Maar wel binnen de tekst-info.",
    checks: [
      {
        q: "Waar **vind je vaak** de hoofdgedachte in een tekst?",
        options: ["Titel of eerste zin","Midden van zin 5","Helemaal niet","In de plaatjes"],
        answer: 0,
        wrongHints: [null,"Niet specifiek genoeg.","Wel — in titel/eerste zin.","Plaatjes ondersteunen, niet de hoofd."],
        uitlegPad: {
          stappen: [
            { titel: "Schrijvers zetten hoofdgedachte vaak vooraan", tekst: "Veel schrijvers beginnen met hun belangrijkste boodschap — dan weet de lezer waar het over gaat. Daarom: vaak in **titel + eerste alinea**." },
            { titel: "Kijk ook naar de laatste alinea", tekst: "Goede schrijvers HERHALEN de hoofdgedachte in de conclusie, soms in andere bewoording. Dus eerste én laatste alinea zijn beide goede zoek-plekken." },
            { titel: "Cito-strategie", tekst: "Bij Cito-leesbegrip: lees eerst titel, dan EERSTE ZIN van elke alinea. Dat zijn de 'topic-sentences'. Vat samen → dat is meestal de hoofdgedachte." },
          ],
          woorden: [
            { woord: "topic-sentence", uitleg: "Eerste zin van een alinea — samenvatting van wat erin staat." },
            { woord: "conclusie", uitleg: "Laatste alinea — vaak herhaling van hoofdgedachte." },
          ],
          theorie: "Cito-tip: TITEL + EERSTE + LAATSTE alinea = 3 plekken om hoofdgedachte te vinden. Werkt voor 80%+ van teksten.",
          voorbeelden: [
            { type: "stap", tekst: "Titel: 'Voordelen van fietsen' → hoofdgedachte = 'fietsen heeft veel voordelen'." },
            { type: "stap", tekst: "Eerste zin: 'Plastic is een groot probleem voor de zee.' → hoofdgedachte = dit." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Schrijvers willen lezers helpen. Daarom zetten ze hoofdgedachte vooraan + herhalen achteraan." }],
          niveaus: {
            basis: "Hoofdgedachte vaak in titel of eerste zin (soms laatste alinea).",
            simpeler: "Titel + eerste zin van elke alinea bekijken.",
            nogSimpeler: "Vooraan kijken!",
          },
        },
      },
      {
        q: "Tekst: 'Kinderen leren beter na een goed ontbijt. Wetenschappers vergeleken kinderen mét en zónder ontbijt. Kinderen mét ontbijt scoorden hoger.'\n\n**Hoofdgedachte**?",
        options: ["Ontbijt helpt bij leren","Wetenschappers doen onderzoeken","Kinderen ontbijten thuis","Cornflakes zijn goed"],
        answer: 0,
        wrongHints: [null,"Klopt — zin 1 zegt het direct, zin 2-3 bewijzen het.","Detail (= methode van bewijs), niet hoofdpunt.","Niet expliciet besproken.","Niet vermeld in tekst."],
        uitlegPad: {
          stappen: [
            { titel: "Lees zin 1 — vaak de hoofdgedachte", tekst: "*'Kinderen leren beter na een goed ontbijt.'*\nDit is de **topic-sentence** — vaak staat de hoofdgedachte HIER. Daarna komen zinnen die het bewijzen." },
            { titel: "Check: bewijzen zin 2-3 de hoofdgedachte?", tekst: "Zin 2: wetenschappers deden onderzoek (= bewijs voor zin 1).\nZin 3: kinderen mét ontbijt scoorden hoger (= concreet resultaat = bewijs voor zin 1).\n→ Beide bewijzen 'ontbijt helpt bij leren'. Bevestigd." },
            { titel: "Waarom andere opties detail zijn", tekst: "• **'Wetenschappers doen onderzoeken'** — feit, maar over METHODE, niet over conclusie.\n• **'Kinderen ontbijten thuis'** — niet vermeld!\n• **'Cornflakes zijn goed'** — niet vermeld!\nCito-truc: antwoord MOET in de tekst staan. Niet in jouw eigen kennis." },
          ],
          woorden: [
            { woord: "topic-sentence", uitleg: "Eerste zin van alinea, vaak de hoofdgedachte." },
            { woord: "bewijs", uitleg: "Zinnen die de hoofdgedachte ondersteunen (onderzoek, voorbeelden)." },
          ],
          theorie: "Cito-leesstrategie hoofdgedachte:\n1. Lees zin 1 — kandidaat hoofdgedachte.\n2. Lezen volgende zinnen: bewijzen ze zin 1? Dan is zin 1 = hoofd.\n3. Antwoord MOET uit tekst komen, niet eigen kennis.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst: 'Sporten is gezond. Het versterkt je hart. Het verbetert je humeur.' → hoofdgedachte = 'sporten is gezond'." },
            { type: "stap", tekst: "Tekst: 'Plastic in zee is een probleem. 8 miljoen ton komt erin per jaar. Dieren stikken erin.' → hoofdgedachte = 'plastic in zee is een probleem'." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Zin 1 vaak hoofdgedachte. Andere opties die in tekst staan = details. Opties die NIET in tekst staan = afleiders." }],
          niveaus: {
            basis: "Ontbijt helpt bij leren (zin 1 = hoofdgedachte, zinnen 2-3 = bewijs). = A.",
            simpeler: "Zin 1 zegt het: ontbijt → beter leren. Andere zinnen bewijzen dat met onderzoek. = A.",
            nogSimpeler: "Ontbijt helpt = A.",
          },
        },
      },
      {
        q: "Cito-fout — wat is **GEEN goede hoofdgedachte**?",
        options: ["Een detail uit de tekst","Wat tekst zegt in eigen woorden","Wat tekst herhaalt over alle alinea's","De rode draad"],
        answer: 0,
        wrongHints: [null,"Klopt — details zijn te klein voor hoofdgedachte.","Wel goed — eigen woorden gebruiken is juist sterk.","Wel goed — wat steeds terugkomt = hoofdgedachte.","Wel goed — synoniem voor hoofdgedachte."],
        uitlegPad: {
          stappen: [
            { titel: "Cito-instinker: kies geen detail", tekst: "Bij hoofdgedachte-vragen zitten in de opties vaak DETAILS uit de tekst — die zien er bekend uit en lijken juist. Maar een detail is NIET de hoofdgedachte." },
            { titel: "Wat is een detail vs hoofdgedachte?", tekst: "Tekst over voetbal:\n• **DETAIL**: 'Messi heeft 8 Gouden Ballen gewonnen' (specifieke info)\n• **HOOFD**: 'voetbal is wereldwijd populair' (algemene rode draad)\nDe hoofdgedachte staat boven de details — het is wat alle details ONDERSTEUNEN." },
            { titel: "Hoe herken je een detail-val?", tekst: "Optie is een detail als:\n• Het maar over 1 alinea gaat (geen rode draad).\n• Het een specifiek getal / naam / feit is.\n• Andere alinea's zeggen er niets over.\nDe hoofdgedachte dekt ALLE alinea's." },
          ],
          woorden: [
            { woord: "detail", uitleg: "Klein specifiek feit binnen tekst." },
            { woord: "rode draad", uitleg: "Het thema dat door alle alinea's loopt." },
          ],
          theorie: "Cito-truc detail vs hoofdgedachte: lees elke optie + vraag 'klopt dit voor de HELE tekst, of slechts 1 zin?'. Als alleen voor 1 zin → detail. Als voor hele tekst → hoofdgedachte.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over fietsen. Detail: 'Mijn oom fietst 20 km'. Hoofd: 'fietsen is gezond'. De hoofd dekt de hele tekst, de detail is 1 anekdote." },
            { type: "stap", tekst: "Pas op: 'Wat tekst herhaalt over alle alinea's' KLINKT als de hoofdgedachte want = rode draad. Niet weggooien als afleider!" },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Hoofd = ALLE alinea's. Detail = 1 alinea / 1 zin. Detail-opties zijn val-strikken bij Cito." }],
          niveaus: {
            basis: "Een detail uit de tekst is GEEN hoofdgedachte. = A.",
            simpeler: "Detail = klein stukje uit 1 zin. Hoofdgedachte = rode draad door HELE tekst. = A.",
            nogSimpeler: "Detail = A (geen hoofdgedachte).",
          },
        },
      },
    ],
  },

  {
    title: "Hoofdzaken vs bijzaken",
    explanation: "**Hoofdzaak** = belangrijke informatie. **Bijzaak** = extra detail.\n\n**Hoe verschil zien**:\n• **Hoofdzaak**: ondersteunt direct de hoofdgedachte.\n• **Bijzaak**: leuk detail, maar niet essentieel.\n\n**Voorbeeld** — over hond:\n*'De hond is een trouwe huisdier. Hij beschermt zijn baasje en speelt graag. De buurman heeft ook een hond, een witte bouvier van 4 jaar oud. Honden eten meestal brokjes.'*\n\n**Hoofdzaken**:\n• Hond is trouwe huisdier.\n• Hij beschermt zijn baasje.\n• Hij speelt graag.\n\n**Bijzaken** *(weglaten kan)*:\n• 'Buurman heeft een witte bouvier van 4 jaar' — leuk detail, maar niet over 'hond als huisdier'.\n• 'Honden eten brokjes' — wel waar, maar gaat naast het hoofdpunt.\n\n**Truc — kun je het schrappen?**\nLees de tekst zonder een zin. Verandert de hoofdboodschap? Nee → bijzaak. Ja → hoofdzaak.\n\n**Soorten bijzaken**:\n1. **Voorbeelden** *(soms hoofdzaak, soms bij)*.\n2. **Anecdotes** — verhaaltjes (bij).\n3. **Cijfers en details** — extra info (bij).\n4. **Zijwegen** — info die het onderwerp ietsje raakt (bij).\n\n**Cito-vraag-typen**:\n• 'Welke zin is een **bijzaak**?'\n• 'Welke informatie is **NIET** essentieel?'\n• 'Welk feit kun je **weglaten** zonder de boodschap te verliezen?'",
    checks: [
      {
        q: "Tekst: 'Fietsen is gezond. Het is goed voor je hart en je spieren. Mijn oom Henk fietst elke dag 20 km.'\n\n**Welke zin is een bijzaak**?",
        options: ["Mijn oom Henk fietst elke dag 20 km.","Fietsen is gezond.","Het is goed voor hart.","Het is goed voor spieren."],
        answer: 0,
        wrongHints: [null,"Klopt — anecdote over één persoon, niet algemene info.","Hoofdzaak (= de hoofdgedachte).","Hoofdzaak (= bewijs algemeen).","Hoofdzaak (= bewijs algemeen)."],
        uitlegPad: {
          stappen: [
            { titel: "Hoofdzaak vs bijzaak — schrap-test", tekst: "**Truc**: lees de tekst zonder die ene zin. Verandert de hoofdboodschap?\n• **Verandert NIET** → bijzaak (kan weg)\n• **Verandert WEL** → hoofdzaak (essentieel)" },
            { titel: "Pas toe op deze tekst", tekst: "Zonder 'Mijn oom Henk fietst elke dag 20 km' lees je nog steeds: 'Fietsen is gezond. Het is goed voor hart en spieren.' → boodschap verandert niet → het is een **bijzaak** (anecdote)." },
            { titel: "Waarom de andere zinnen hoofdzaak zijn", tekst: "• 'Fietsen is gezond' = de hoofdgedachte zelf — niet schrapbaar.\n• 'Goed voor hart' = bewijs dat fietsen gezond is — schrappen verzwakt boodschap.\n• 'Goed voor spieren' = ander bewijs — idem.\nDie 3 dragen samen de boodschap." },
          ],
          woorden: [
            { woord: "hoofdzaak", uitleg: "Zin die direct de hoofdgedachte ondersteunt — essentieel." },
            { woord: "bijzaak", uitleg: "Detail/anecdote — leuk, maar kan weg." },
            { woord: "schrap-test", uitleg: "Truc: lees zonder die zin — verandert de boodschap?" },
          ],
          theorie: "Cito-truc hoofd-bij: bijzaken zijn vaak:\n• **Anecdotes** ('mijn oom...', 'ik herinner me...')\n• **Specifieke voorbeelden** met eigennamen\n• **Cijfers/details** die over 1 geval gaan\nHoofdzaken zijn algemeen + dekken het hoofdthema.",
          voorbeelden: [
            { type: "stap", tekst: "*'Honden zijn loyaal. Ze beschermen je. Mijn buurman heeft een Labrador.'* → 'buurman/Labrador' = bijzaak (anecdote)." },
            { type: "stap", tekst: "*'Lezen is goed. Het ontwikkelt je woordenschat. Ik las gisteren een boek over piraten.'* → 'gisteren piraten-boek' = bijzaak." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eigennaam (Henk, Anna, buurman) + specifieke daad = bijna altijd bijzaak (anecdote)." }],
          niveaus: {
            basis: "'Mijn oom Henk...' = bijzaak (schrap-test bevestigt). = A.",
            simpeler: "Eigennaam + specifieke daad = anecdote = bijzaak. = A.",
            nogSimpeler: "Oom Henk = bijzaak = A.",
          },
        },
      },
      {
        q: "Hoofdzaak of bijzaak: **'Beren slapen 's winters'**? *(in een tekst over winterslaap)*.",
        options: ["Hoofdzaak","Bijzaak","Geen van beide","Geen tekst"],
        answer: 0,
        wrongHints: [null,"Klopt — feit gaat direct over winterslaap = het hoofd-onderwerp.","Wel relevant.","Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is het onderwerp van de tekst?", tekst: "De tekst gaat over **winterslaap**. Dat is het hoofdonderwerp. Elke zin die DIRECT over winterslaap gaat = **hoofdzaak**. Elke zin die alleen zijdelings gerelateerd is = **bijzaak**." },
            { titel: "Past 'beren slapen 's winters' bij het onderwerp?", tekst: "Het feit: **beren slapen 's winters** = beren houden een winterslaap. Dit is **letterlijk** het onderwerp van de tekst. → **Hoofdzaak**." },
            { titel: "Vergelijk: wat zou een BIJzaak zijn?", tekst: "Bij dezelfde tekst zouden bijzaken zijn:\n• 'Mijn buurman heeft een teddybeer thuis' → over beren, maar NIET over winterslaap\n• 'In Alaska is het 's winters −30 °C' → wel over winter, maar de tekst gaat over slapen\n• 'Mijn oma haakt graag in de winter' → totaal niet relevant\nDeze zinnen kun je weglaten zonder dat de hoofdgedachte verandert." },
          ],
          woorden: [
            { woord: "hoofdzaak", uitleg: "Zin die direct over het hoofdonderwerp van de tekst gaat." },
            { woord: "bijzaak", uitleg: "Zin die zijdelings, met details of voorbeelden, ergens omheen ligt." },
          ],
          theorie: "Hoofd-of-bijzaak-test in 3 stappen:\n1. Welk onderwerp staat in de TITEL of EERSTE zin?\n2. Gaat deze zin direct over dat onderwerp? → hoofd\n3. Of is het een detail, voorbeeld of zijspoor? → bij\n\nBelangrijk: **hoofd/bijzaak is altijd RELATIEF aan het tekst-onderwerp**. Een feit kan in tekst A hoofdzaak zijn en in tekst B bijzaak. Lees dus eerst goed waar de tekst over gaat.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over 'voordelen fietsen': 'Fietsen is goed voor je gezondheid' → hoofd (gaat over voordeel). 'Mijn fiets is rood' → bij (irrelevant detail)." },
            { type: "stap", tekst: "Tekst over 'recycling': 'Plastic recyclen bespaart olie' → hoofd. 'Onze container staat naast school' → bij." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag jezelf: 'Als ik deze zin weghaal, mist de tekst dan iets belangrijks over het onderwerp?' Ja → hoofd. Nee → bij." }],
          niveaus: {
            basis: "Hoofdzaak — feit gaat direct over winterslaap. = A.",
            simpeler: "De tekst gaat over winterslaap. 'Beren slapen 's winters' = beren houden winterslaap. Direct = hoofdzaak. = A.",
            nogSimpeler: "Hoofdzaak = A. Direct over onderwerp.",
          },
        },
      },
      {
        q: "**Truc** om te checken hoofd vs bij?",
        options: ["Schrap de zin — verandert de boodschap?","Tel de woorden","Kijk naar kleur","Kijk naar plaatje"],
        answer: 0,
        wrongHints: [null,"Klopt — schrap-test is de hoofd-truc.","Aantal woorden zegt niets over belangrijkheid.","Tekst heeft geen kleuren.","Plaatjes ondersteunen, maar zijn niet de truc."],
        uitlegPad: {
          stappen: [
            { titel: "De schrap-test", tekst: "Voor elke zin: lees de tekst MET zin → lees de tekst ZONDER die zin → vergelijk.\n• **Hoofdboodschap verandert?** → die zin is een **hoofdzaak** (kan niet weg)\n• **Hoofdboodschap blijft hetzelfde?** → die zin is een **bijzaak** (kan weg)" },
            { titel: "Concreet voorbeeld", tekst: "*'Honden zijn loyaal. Mijn oom heeft een witte hond. Ze beschermen je.'*\n\n**Schrap zin 2** ('Mijn oom...'): *'Honden zijn loyaal. Ze beschermen je.'* → boodschap (honden zijn fijne huisdieren) BLIJFT → **bijzaak**.\n\n**Schrap zin 1** ('Honden zijn loyaal'): *'Mijn oom heeft een witte hond. Ze beschermen je.'* → boodschap is verzwakt, je weet niet meer waarom honden goed zijn → **hoofdzaak**." },
            { titel: "Waarom andere opties niet werken", tekst: "• **Aantal woorden** — een lange zin kan bijzaak zijn, een korte zin kan hoofdzaak.\n• **Kleur** — alleen relevant in opmaak/website, niet in tekst-inhoud.\n• **Plaatjes** — kunnen ondersteunen maar zeggen niet wat hoofd vs bij is." },
          ],
          woorden: [
            { woord: "schrap-test", uitleg: "Truc: lees tekst zonder zin — verandert boodschap?" },
            { woord: "essentieel", uitleg: "Onmisbaar — verwijderen = boodschap valt uit elkaar." },
          ],
          theorie: "Cito-truc voor lange teksten met veel zinnen:\n1. Lees zin\n2. Mentaal schrappen\n3. Verandert kern-boodschap? → hoofd\n4. Geen verandering? → bijzaak\nWerkt voor ALLE tekstsoorten (informatief, betogend, verhalend, instructief).",
          voorbeelden: [
            { type: "stap", tekst: "*'Lezen is goed. Het ontwikkelt woordenschat. Mijn buurjongen leest nooit.'* → zin 3 schrappen verandert boodschap niet → bijzaak (negatieve anecdote)." },
            { type: "stap", tekst: "*'Bewegen is gezond. Het versterkt hart en spieren. Onderzoekers raden 1 uur per dag aan.'* → alle 3 zinnen versterken elkaar → ALLE 3 hoofdzaak." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Schrap-test = de mentale truc. Niet woorden tellen, kleur kijken of plaatje — gewoon zin mentaal weghalen + check boodschap." }],
          niveaus: {
            basis: "Schrap-test: lees zonder zin, verandert boodschap? = A.",
            simpeler: "Doe alsof je de zin weglaat. Kun je de tekst nog snappen? Dan bijzaak. Niet meer snappen? Hoofdzaak. = A.",
            nogSimpeler: "Schrap-test = A.",
          },
        },
      },
    ],
  },

  {
    title: "Samenvatting maken",
    explanation: "**Samenvatten** = de tekst korter maken zonder de hoofdboodschap te verliezen.\n\n**Goede samenvatting bevat**:\n1. **Hoofdgedachte** (1 zin).\n2. **Hoofdzaken** *(belangrijke punten)*.\n3. **In eigen woorden** (niet kopiëren).\n4. **Korter dan origineel** *(meestal ~25-30%)*.\n\n**Goede samenvatting bevat NIET**:\n• Bijzaken / details.\n• Voorbeelden (tenzij essentieel).\n• Eigen mening (alleen wat tekst zegt).\n• Letterlijke kopie van zinnen.\n\n**Stappen om samen te vatten**:\n1. **Lees** de hele tekst eerst.\n2. **Onderstreep** hoofdpunten in elke alinea.\n3. **Schrap** bijzaken.\n4. **Schrijf** in 3-5 zinnen wat de tekst zegt.\n5. **Controleer**: klopt jouw samenvatting met origineel?\n\n**Voorbeeld**:\n**Tekst**: *'Vrienden zijn belangrijk. Ze geven je steun in moeilijke tijden. Mijn vriend Jan heeft me geholpen toen ik mijn fiets kwijt was. Vrienden vieren ook leuke momenten met je. Onderzoek toont dat mensen met vrienden langer leven.'*\n\n**Samenvatting**: *'Vrienden zijn belangrijk: ze geven steun, vieren leuke momenten, en mensen met vrienden leven zelfs langer.'*\n\n*(Zit niet in: 'mijn vriend Jan en de fiets' — dat is een bijzaak/anecdote)*.\n\n**Cito-tip**:\nGoede samenvatting kan **opnieuw uitgelegd** worden door iemand die de tekst niet kent. Test: leg de samenvatting voor → snapt iemand het?",
    checks: [
      {
        q: "Wat hoort **NIET** in een goede samenvatting?",
        options: ["Eigen mening","Hoofdgedachte","Hoofdzaken","Eigen woorden"],
        answer: 0,
        wrongHints: [null,"Klopt — samenvatting = wat tekst zegt, niet wat JIJ vindt.","Hoort wel — kern van de samenvatting.","Hoort wel — belangrijke punten.","Hoort wel — eigen woorden voorkomen kopiëren."],
        uitlegPad: {
          stappen: [
            { titel: "Samenvatting = wat de tekst zegt", tekst: "Een goede samenvatting bevat:\n✓ **Hoofdgedachte** (kern in 1 zin)\n✓ **Hoofdzaken** (belangrijke punten)\n✓ **Eigen woorden** (niet kopiëren)\n\nWat NIET:\n✗ **Eigen mening** (wat JIJ ervan vindt — hoort er niet in)\n✗ **Bijzaken** (anecdotes)\n✗ **Letterlijke kopie** uit tekst" },
            { titel: "Waarom geen mening?", tekst: "Een samenvatting is **objectief**: het vertelt wat de schrijver zegt. Niet wat jij ervan vindt. Mening hoort thuis in een **recensie** of **mening-stuk**, niet in samenvatting." },
            { titel: "Voorbeeld: WEL vs NIET", tekst: "**Tekst**: 'Klimaatverandering is een probleem. Zeespiegel stijgt 3 mm per jaar.'\n\n**Goede samenvatting**: 'Volgens de tekst is klimaatverandering een probleem: de zeespiegel stijgt jaarlijks 3 mm.'\n\n**Foute samenvatting**: 'Klimaatverandering is een groot probleem en wij moeten dringend iets doen!' (= je eigen mening, niet wat tekst zegt)." },
          ],
          woorden: [
            { woord: "samenvatting", uitleg: "Korte versie van tekst met hoofdgedachte + hoofdzaken." },
            { woord: "objectief", uitleg: "Zonder eigen mening — alleen wat de feiten zeggen." },
            { woord: "recensie", uitleg: "Mening-stuk over een tekst/film/boek (= apart van samenvatting)." },
          ],
          theorie: "Cito-checklist goede samenvatting:\n✓ Korter dan origineel (~25-30%)\n✓ Hoofdgedachte expliciet\n✓ Hoofdzaken (2-3)\n✓ Eigen woorden\n✗ Geen mening\n✗ Geen bijzaken\n✗ Geen letterlijke kopie",
          voorbeelden: [
            { type: "stap", tekst: "WEL: 'Volgens de schrijver is X gezond omdat Y.' (objectief, citeert tekst)" },
            { type: "stap", tekst: "NIET: 'X is super gezond, iedereen zou meer X moeten doen!' (eigen mening, niet uit tekst)" },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag jezelf: 'staat dit IN de tekst, of is het MIJN mening?' Alleen wat in tekst staat → samenvatting." }],
          niveaus: {
            basis: "Eigen mening hoort NIET in samenvatting. = A.",
            simpeler: "Samenvatting = wat tekst zegt. Mening = wat JIJ vindt. Niet mixen. = A.",
            nogSimpeler: "Eigen mening = A (mag niet).",
          },
        },
      },
      {
        q: "Hoe lang is een **goede** samenvatting meestal?",
        options: ["Korter dan origineel","Langer dan origineel","Even lang","Heel lang"],
        answer: 0,
        wrongHints: [null,"Klopt — meestal ~25-30% van origineel.","Tegenovergesteld — dat zou een uitbreiding zijn.","Geen verkorting — geen samenvatting.","Niet samenvatten."],
        uitlegPad: {
          stappen: [
            { titel: "Samen-vatten = korter maken", tekst: "Het woord **'samenvatten'** zegt het al: vat de tekst SAMEN in een korter geheel. Een samenvatting die even lang of langer is, is geen samenvatting." },
            { titel: "Hoe kort precies?", tekst: "Vuistregel: **~25-30% van origineel**. Een tekst van 400 woorden → samenvatting van 100-120 woorden. Een tekst van 1000 woorden → 250-300 woorden samenvatting.\n\nKan korter (10-20% voor heel beknopt) maar zelden langer dan 30%." },
            { titel: "Waarom dit percentage?", tekst: "Bij 25-30% behoud je:\n✓ Hoofdgedachte (essentieel)\n✓ Hoofdzaken (meestal 3-5 punten)\n✓ Eigen woorden\n\nMaar je verwijdert:\n✗ Bijzaken / anecdotes\n✗ Voorbeelden (tenzij essentieel)\n✗ Herhalingen" },
          ],
          woorden: [
            { woord: "samenvatten", uitleg: "Kort maken zonder hoofdboodschap te verliezen." },
            { woord: "uitbreiden", uitleg: "Langer maken — tegenovergestelde van samenvatten." },
          ],
          theorie: "Cito-vuistregel samenvatting:\n• ~25-30% van originele lengte\n• Hoofdgedachte expliciet\n• Hoofdzaken aanwezig\n• Bijzaken weg\n• Eigen woorden (geen kopie)",
          voorbeelden: [
            { type: "stap", tekst: "Tekst 400 woorden → samenvatting 100-120 woorden." },
            { type: "stap", tekst: "Krantenartikel 600 woorden → samenvatting 150-200 woorden." },
            { type: "stap", tekst: "Boekje 1000 woorden → samenvatting 250-300 woorden." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Mik op een KWART tot DERDE van origineel. Kortere kan, langere zelden." }],
          niveaus: {
            basis: "Korter dan origineel (~25-30%). = A.",
            simpeler: "Een samenvatting is een KORTERE versie van de tekst. Niet even lang, niet langer. = A.",
            nogSimpeler: "Korter = A.",
          },
        },
      },
      {
        q: "Tekst: 'Mensen drinken water voor gezondheid. Water spoelt afvalstoffen weg. Water zorgt voor hydratatie. Mijn opa drinkt 2 liter per dag.'\n\n**Wat staat NIET in een goede samenvatting**?",
        options: ["Mijn opa's 2 liter per dag","Mensen drinken water","Water spoelt afval","Hydratatie"],
        answer: 0,
        wrongHints: [null,"Klopt — eigennaam + persoonlijk detail = bijzaak, hoort er niet in.","Dit IS de hoofdgedachte — hoort wel.","Belangrijke reden waarom water nuttig is — hoort wel.","Belangrijke functie van water — hoort wel."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de hoofdgedachte?", tekst: "De tekst gaat over **water drinken en gezondheid**. De 3 belangrijke punten:\n• Mensen drinken water voor gezondheid\n• Water spoelt afvalstoffen weg\n• Water zorgt voor hydratatie\nDeze 3 horen samen → dit is de **hoofdgedachte**." },
            { titel: "Spot de anecdote", tekst: "De zin **'Mijn opa drinkt 2 liter per dag'** is een **anecdote**:\n• **'Mijn opa'** = eigennaam / persoonlijk persoon → signaal voor BIJzaak\n• **'2 liter per dag'** = specifiek getal over één persoon → niet algemeen geldig\n\nDeze zin gaat NIET over water-in-het-algemeen, maar over één specifieke opa. → bijzaak → schrappen uit samenvatting." },
            { titel: "Eigennaam-truc + getal-truc", tekst: "Twee betrouwbare signalen voor bijzaak:\n1. **Eigennaam** ('mijn opa', 'mijn buurman', 'meester Jan', 'mijn fiets'): de schrijver geeft een persoonlijk voorbeeld. Voorbeelden = bijzaak.\n2. **Specifiek getal** ('2 liter', '5 jaar oud', '3 keer per week'): vaak een detail over één geval, niet algemene regel.\nCombo eigennaam + specifiek getal = bijna altijd **anecdote → bijzaak**." },
          ],
          woorden: [
            { woord: "anecdote", uitleg: "Klein persoonlijk verhaaltje als illustratie, geen algemene regel." },
            { woord: "samenvatting", uitleg: "Korte versie van een tekst met alleen de hoofdpunten." },
          ],
          theorie: "Schrap-regels voor samenvatting:\n• Eigennamen (mijn opa, juf Linda, mijn neef) → meestal weg\n• Specifieke getallen (2 liter, 7 jaar oud) → vaak weg, behalve als ze de hoofdgedachte zijn\n• Persoonlijke voorbeelden → weg, behoud algemene regel\n• Herhalingen → 1× houden\n• Voorbeelden ('zoals X, Y, Z') → houden of weg afhankelijk van belang",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over slaap: 'Mensen slapen 7-9 uur. Mijn broertje slaapt 12 uur.' → broertje = anecdote = weg." },
            { type: "stap", tekst: "Tekst over sport: 'Sporten is gezond. Mijn meester loopt elke dag.' → meester = anecdote = weg." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Test: vervang 'mijn opa' door 'Pieter' of 'mijn buurman'. Verandert er iets aan de boodschap? Nee → was bijzaak." }],
          niveaus: {
            basis: "Opa-zin = anecdote = niet in samenvatting. = A.",
            simpeler: "'Mijn opa' is een eigennaam → persoonlijk voorbeeld → bijzaak → niet meenemen in samenvatting. = A.",
            nogSimpeler: "Opa-zin weg = A.",
          },
        },
      },
    ],
  },

  {
    title: "Cito-eindopdracht — samenvatten mix",
    explanation: "Mix-toets: hoofdgedachte vinden, hoofd/bij scheiden, samenvatten.",
    checks: [
      {
        q: "Tekst: 'Apen zijn slim. Ze gebruiken stokken om termieten uit holen te halen. In Afrika is dit gezien bij chimpansees.'\n\n**Hoofdgedachte**?",
        options: ["Apen zijn slim — ze gebruiken gereedschap","Termieten leven in holen","Chimpansees komen uit Afrika","Stokken zijn handig"],
        answer: 0,
        wrongHints: [null,"Klopt — slimme apen is rode draad, stokken-truc is bewijs.","Termieten zijn detail in voorbeeld, niet hoofd.","Detail over chimpansees specifiek, niet hoofd.","Stokken zijn middel in het voorbeeld, niet de hoofdgedachte zelf."],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de rode draad", tekst: "3 zinnen:\n1. *Apen zijn slim*\n2. *Ze gebruiken stokken om termieten te halen*\n3. *In Afrika gezien bij chimpansees*\n→ Wat is hier het thema? **Apen + slim = gereedschap gebruiken**." },
            { titel: "Zin 1 = hoofdgedachte expliciet", tekst: "Vaak doet de schrijver het werk al: **zin 1 IS de hoofdgedachte**. *'Apen zijn slim'* — alle volgende zinnen zijn BEWIJS daarvoor." },
            { titel: "Andere opties zijn details", tekst: "• 'Termieten leven in holen' — feit binnen zin 2, geen rode draad.\n• 'Chimpansees komen uit Afrika' — feit binnen zin 3.\n• 'Stokken zijn handig' — middel in het bewijs.\nGeen van deze dekt 'apen + slim' (de rode draad)." },
          ],
          woorden: [
            { woord: "topic-sentence", uitleg: "Eerste zin van alinea — vaak de hoofdgedachte." },
            { woord: "bewijs / voorbeeld", uitleg: "Concrete details die de hoofdgedachte ondersteunen." },
          ],
          theorie: "Cito-truc lees-strategie: lees ZIN 1 eerst. Vaak is dat al de hoofdgedachte. Daarna check je: ondersteunen de andere zinnen die uitspraak? Zo ja → bevestigd.",
          voorbeelden: [
            { type: "stap", tekst: "*'Honden zijn loyaal. Ze beschermen je. Ze spelen graag.'* → zin 1 = hoofdgedachte. Andere zinnen = bewijs." },
            { type: "stap", tekst: "*'Plastic is een probleem. 8 miljoen ton per jaar in zee. Dieren stikken erin.'* → zin 1 = hoofdgedachte. Cijfers = bewijs." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eerste zin vaak = topic-sentence = hoofdgedachte. Andere zinnen = bewijs/voorbeeld." }],
          niveaus: {
            basis: "Apen zijn slim — ze gebruiken gereedschap. = A.",
            simpeler: "Zin 1 zegt 'apen zijn slim'. Zin 2-3 bewijzen dat (stokken-truc). Dat is de hoofdgedachte. = A.",
            nogSimpeler: "Apen slim = A.",
          },
        },
      },
      {
        q: "Welke zin is een **bijzaak** in een tekst over 'gezond eten'?",
        options: ["Mijn moeder kookt elke maandag pasta","Groenten geven vitaminen","Fruit is gezond","Suiker is ongezond"],
        answer: 0,
        uitlegPad: {
          stappen: [
            { titel: "Algemeen vs persoonlijk", tekst: "In een tekst over **algemene** onderwerpen (gezond eten) zijn:\n• **Hoofdzaken** = algemene feiten ('groenten geven vitaminen', 'fruit is gezond')\n• **Bijzaken** = persoonlijke anecdotes ('mijn moeder', 'gisteren')" },
            { titel: "Pas toe op opties", tekst: "• **'Mijn moeder kookt elke maandag pasta'** → persoonlijke anecdote → **bijzaak** ✓\n• **'Groenten geven vitaminen'** → algemeen feit → hoofdzaak\n• **'Fruit is gezond'** → algemeen feit → hoofdzaak\n• **'Suiker is ongezond'** → algemeen feit → hoofdzaak" },
            { titel: "Signaalwoorden voor bijzaken", tekst: "Bijzaken hebben vaak:\n• **Eigennamen** ('moeder', 'oom Henk', 'Anna')\n• **Specifieke tijden** ('elke maandag', 'gisteren', 'twee weken geleden')\n• **Concrete details** die slechts 1 persoon betreffen\n\nHoofdzaken zijn breed + algemeen + dekken het thema." },
          ],
          woorden: [
            { woord: "anecdote", uitleg: "Persoonlijk verhaaltje binnen tekst — meestal bijzaak." },
            { woord: "algemeen feit", uitleg: "Geldt voor iedereen — meestal hoofdzaak." },
          ],
          theorie: "Cito-truc bijzaak-herkenning in algemene teksten:\n• Eigennaam + actie = bijna altijd anecdote = bijzaak\n• 'Mijn / mijn oom / gisteren' = signaalwoorden bijzaak\n• Algemeen feit zonder personen = hoofdzaak",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over honden: 'Honden zijn loyaal' = hoofd. 'Mijn buurman heeft een Labrador' = bijzaak." },
            { type: "stap", tekst: "Tekst over fietsen: 'Fietsen is gezond' = hoofd. 'Oom Henk fietst 20 km per dag' = bijzaak." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eigennaam + specifieke daad = anecdote = bijzaak. Algemeen feit zonder personen = hoofdzaak." }],
          niveaus: {
            basis: "'Mijn moeder kookt pasta' = anecdote = bijzaak. = A.",
            simpeler: "Algemene feiten = hoofd. Persoonlijke anecdotes met eigennaam = bijzaak. = A.",
            nogSimpeler: "Moeder + pasta = anecdote = A.",
          },
        },
        wrongHints: [null,"Hoofdzaak.","Hoofdzaak.","Hoofdzaak."],
      },
      {
        q: "Wat is **NIET** een goed samenvattings-strategie?",
        options: ["Letterlijk kopiëren van zinnen","Eigen woorden","Hoofdpunten kiezen","Kort houden"],
        answer: 0,
        wrongHints: [null,"Klopt — kopiëren laat zien dat je de tekst NIET hebt begrepen.","Wel goed — eigen woorden = begrip.","Wel goed — hoofdpunten = essentie.","Wel goed — samenvatting moet korter dan origineel."],
        uitlegPad: {
          stappen: [
            { titel: "Waarom NIET letterlijk kopiëren?", tekst: "Een **samenvatting** moet laten zien dat je de tekst zelf hebt **begrepen**. Als je zinnen letterlijk overschrijft, laat je alleen zien dat je kunt **kopiëren** — niet dat je weet wat er staat." },
            { titel: "Wat je WEL doet bij goede samenvatting", tekst: "1. **Eigen woorden** — herschrijf in je eigen taal\n2. **Hoofdpunten kiezen** — alleen de belangrijkste zinnen\n3. **Kort houden** — ~25-30% van origineel\n4. **Logische volgorde** — eerst hoofdgedachte, dan steunende info" },
            { titel: "Cito-instinker bij deze vraag", tekst: "De vraag vraagt: 'Wat is **NIET** goed?' Let op het woordje **NIET** — je moet de FOUTE strategie aanvinken. De 3 goede strategieën zijn afleiders. Bij NIET-vragen altijd extra goed lezen wat er staat:\n• 'NIET in samenvatting' → kies wat er NIET in hoort\n• 'WEL in samenvatting' → kies wat er WEL in hoort\nVerwisselen = direct fout, zelfs als je inhoud snapt." },
          ],
          woorden: [
            { woord: "strategie", uitleg: "Aanpak / manier om iets te doen." },
            { woord: "letterlijk kopiëren", uitleg: "Zinnen exact overschrijven uit de tekst, zonder veranderen." },
          ],
          theorie: "Goede samenvattings-strategieën (de 4 stappen):\n1. Lees de tekst 2× — overzicht eerst, details daarna.\n2. Markeer (of noteer) de hoofdpunten — meestal titel + eerste zin elke alinea.\n3. Schrijf in eigen woorden — herwoord, parafraseer.\n4. Lees terug — past het bij hoofdgedachte? Te lang? Korter maken.\n\nFout: kopiëren, hele tekst overschrijven, eigen mening toevoegen, details meenemen.",
          voorbeelden: [
            { type: "stap", tekst: "Origineel: 'Plastic is een groot probleem in de oceaan.' → Goed: 'Plastic vervuilt zeeën.' Fout: 'Plastic is een groot probleem in de oceaan.' (= kopiëren)." },
            { type: "stap", tekst: "Origineel: 'Hond is loyaal, beschermt eigenaar.' → Goed: 'Honden zijn trouw en passen op.' Fout: kopiëren of toevoegen 'ik vind honden leuk' (= mening)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Test: lees je samenvatting voor aan iemand die de originele tekst NIET kent. Snapt diegene de hoofdpunten? Ja = goed. Nee = te kort of te kopiërig." }],
          niveaus: {
            basis: "Letterlijk kopiëren ≠ samenvatten = A.",
            simpeler: "Samenvatting = in EIGEN woorden de hoofdpunten. Kopiëren is geen samenvatten. = A.",
            nogSimpeler: "Kopiëren fout = A.",
          },
        },
      },
      {
        q: "Tekst gaat over voordelen van fietsen. Welke is een **slechte hoofdgedachte**?",
        options: ["Fietsen is gevaarlijk","Fietsen is gezond","Fietsen is milieuvriendelijk","Fietsen is goedkoop"],
        answer: 0,
        wrongHints: [null,"Klopt — 'gevaarlijk' = NADEEL, past niet bij tekst over voordelen.","Past wel — gezond = voordeel.","Past wel — milieu = voordeel.","Past wel — goedkoop = voordeel."],
        uitlegPad: {
          stappen: [
            { titel: "Lees het tekst-onderwerp goed", tekst: "De tekst gaat over **VOORdelen** van fietsen. Het sleutelwoord is **'voordelen'** = positieve kanten, goede dingen. Een hoofdgedachte moet bij DIT onderwerp passen." },
            { titel: "Match: past de zin bij 'voordelen'?", tekst: "• A: 'Fietsen is **gevaarlijk**' → dat is een NADEEL, NIET een voordeel. → **past NIET** → slechte hoofdgedachte\n• B: 'Fietsen is gezond' → voordeel ✓\n• C: 'Fietsen is milieuvriendelijk' → voordeel ✓\n• D: 'Fietsen is goedkoop' → voordeel ✓\n\nAlleen A wijkt af van het onderwerp." },
            { titel: "Cito-truc: positief vs negatief onderwerp", tekst: "Bij Cito-vragen 'kies de slechte hoofdgedachte':\n• Zoek altijd het sleutelwoord in het onderwerp (voordelen / nadelen / gevolgen / oorzaken / oplossingen).\n• Een optie die in TEGEN-richting wijst = slechte hoofdgedachte.\nVoorbeeld:\n• Tekst over 'gevaren van roken' → 'roken is leuk' = slechte hoofdgedachte (gevaar = negatief, leuk = positief)" },
          ],
          woorden: [
            { woord: "voordeel", uitleg: "Iets goeds, positieve kant." },
            { woord: "nadeel", uitleg: "Iets slechts, negatieve kant." },
            { woord: "hoofdgedachte", uitleg: "De belangrijkste boodschap waar de hele tekst om draait." },
          ],
          theorie: "Een goede hoofdgedachte moet:\n1. Bij het ONDERWERP van de tekst passen (voordelen ≠ nadelen)\n2. ALGEMEEN genoeg zijn (niet over 1 detail)\n3. NIET te SMAL zijn ('mijn fiets is rood' = te specifiek)\n4. NIET te BREED zijn ('alles is leuk' = nietszeggend)\n\nGevaar #1: tekst zegt 'voordeel' → optie zegt 'nadeel' → optie sluit niet aan.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over 'nadelen van plastic' → 'plastic is handig' = slechte hoofdgedachte (handig = voordeel, tekst gaat over nadelen)." },
            { type: "stap", tekst: "Tekst over 'oplossingen klimaat' → 'klimaat is een probleem' = slechte hoofdgedachte (tekst gaat over oplossingen, niet problemen)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eerst sleutelwoord onderwerp markeren ('voordelen/nadelen/oorzaak/gevolg'). Dan check welke optie de TEGEN-richting heeft. Die is fout." }],
          niveaus: {
            basis: "'Gevaarlijk' = nadeel, tekst gaat over voordelen → slechte match. = A.",
            simpeler: "Tekst zegt VOORdelen = goede dingen. 'Gevaarlijk' is een slecht ding, dus past niet. = A.",
            nogSimpeler: "Gevaarlijk = nadeel = A (slechte hoofdgedachte).",
          },
        },
      },
      {
        q: "Hoofdgedachte staat vaak in:",
        options: ["Titel of eerste zin","Voetnoten","Plaatjes","Bibliografie"],
        answer: 0,
        wrongHints: [null,"Klopt — schrijvers zetten hoofdgedachte vaak vooraan zodat lezer weet waar tekst over gaat.","Voetnoten = bronvermelding, niet hoofd.","Plaatjes ondersteunen wel, maar zijn niet de tekst zelf.","Bibliografie = bronnenlijst aan het einde, geen inhoud."],
        uitlegPad: {
          stappen: [
            { titel: "Waar plaats een schrijver de hoofdgedachte?", tekst: "Schrijvers willen dat de lezer **snel begrijpt** waarover de tekst gaat. Daarom zetten ze de hoofdgedachte op een **opvallende plek**:\n• **Titel** — meteen zichtbaar bovenaan\n• **Eerste zin** (van eerste alinea) — opening\n• Soms herhaald in **laatste zin/alinea** als conclusie" },
            { titel: "Waarom NIET in voetnoten/plaatjes/bibliografie?", tekst: "• **Voetnoten** = extra info met bron-vermelding, onderaan pagina. Geen hoofdgedachte.\n• **Plaatjes** = ondersteuning bij tekst, geen tekst zelf. Een grafiek kan illustreren, niet uitleggen wat de tekst zegt.\n• **Bibliografie** = lijst van geraadpleegde boeken/sites. Geen inhoud, alleen bronnen." },
            { titel: "Cito-truc: 3-plekken-check", tekst: "Als je snel de hoofdgedachte zoekt, check in deze volgorde:\n1. **Titel** — bevat vaak het hoofd-onderwerp\n2. **Eerste zin** — vaak meteen de stelling\n3. **Laatste zin** — vaak de conclusie\nBij Cito-tijdsdruk kun je vaak 80% van de hoofdgedachte vinden via deze 3 plekken zonder de hele tekst te lezen." },
          ],
          woorden: [
            { woord: "voetnoot", uitleg: "Aanvullende notitie onderaan pagina, vaak met bron-verwijzing." },
            { woord: "bibliografie", uitleg: "Lijst van boeken/sites die gebruikt zijn als bron." },
            { woord: "alinea", uitleg: "Stukje tekst met meerdere zinnen over één onderwerp." },
          ],
          theorie: "Structuur van een typische tekst:\n• **Titel** = hoofdonderwerp (1 regel)\n• **Eerste alinea** = inleiding + hoofdgedachte\n• **Middenste alinea's** = uitwerking, voorbeelden, bewijzen\n• **Laatste alinea** = conclusie + herhaling hoofdgedachte\n→ Hoofdgedachte = **op de RANDEN** (begin + eind), niet in het midden.",
          voorbeelden: [
            { type: "stap", tekst: "Titel 'Voordelen van fietsen' → hoofdgedachte = 'fietsen heeft voordelen'." },
            { type: "stap", tekst: "Eerste zin 'Plastic vervuilt onze zeeën.' → hoofdgedachte = plastic-zee-vervuiling." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Begin + eind van tekst = waar hoofdgedachte vaak staat. Midden = uitwerking en details." }],
          niveaus: {
            basis: "Titel of eerste zin = A.",
            simpeler: "Schrijvers zetten de hoofdgedachte vooraan, vaak in titel of eerste zin. = A.",
            nogSimpeler: "Titel/eerste zin = A.",
          },
        },
      },
      {
        q: "Tekst: 'Honden helpen blinden. Ze leiden de baas veilig over straat. Hun training duurt 2 jaar.'\n\n**Bijzaak**?",
        options: ["Hun training duurt 2 jaar","Honden helpen blinden","Veilig over straat","Geen, alles hoofd"],
        answer: 0,
        wrongHints: [null,"Klopt — '2 jaar' is een specifiek detail, niet de hoofdboodschap.","Hoofdzaak — dit IS de hoofdgedachte.","Hoofdzaak — direct gevolg en uitleg van hulp.","Onjuist — er IS een bijzaak."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de hoofdgedachte?", tekst: "De tekst gaat over **hulphonden voor blinden**. Zin 1 ('Honden helpen blinden') = hoofdgedachte. Zin 2 ('leiden veilig over straat') = directe uitleg HOE ze helpen → ondersteunt de hoofdgedachte → hoofdzaak." },
            { titel: "Wat maakt zin 3 een bijzaak?", tekst: "**'Hun training duurt 2 jaar'** geeft een **specifiek getal** over één detail (trainingsduur). Dit:\n• Helpt NIET om te begrijpen WAT honden doen voor blinden\n• Is een leuk weetje, maar geen kern-info\n• Kun je weglaten zonder dat de boodschap verandert\n→ bijzaak" },
            { titel: "Schrap-test toepassen", tekst: "**Met zin 3**: 'Honden helpen blinden. Ze leiden de baas veilig over straat. Hun training duurt 2 jaar.'\n**Zonder zin 3**: 'Honden helpen blinden. Ze leiden de baas veilig over straat.'\n→ De hoofdgedachte (honden = hulpdier voor blinden) blijft duidelijk. Trainingsduur was extra info, niet kern.\n→ Bevestigt: zin 3 = **bijzaak**.\n\nLet op: **specifieke getallen** ('2 jaar', '3 uur', '5 keer') zijn vaak bijzaken — behalve als het getal ZELF de hoofdgedachte is." },
          ],
          woorden: [
            { woord: "specifiek detail", uitleg: "Heel precieze info over één deel — vaak een bijzaak." },
            { woord: "kern-info", uitleg: "Hoofdpunt zonder welke je de boodschap niet begrijpt." },
          ],
          theorie: "Signalen voor bijzaak (herhaling):\n• Eigennamen ('Mijn oom', 'meester Jan')\n• Specifieke getallen ('2 jaar', '20 km', '7 uur')\n• Voorbeeld-zinnen ('Bijvoorbeeld...', 'Zoals...')\n• Anecdote-zinnen ('Eens kwam ik...', 'Mijn buurman zei...')\n• Heel concrete plek/tijd ('In Alaska in 2019')\n\nVuistregel: hoe specifieker hoe vaker bijzaak.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over honden: 'Honden zijn loyaal. Hun staart wiebelt 60× per minuut.' → staart-getal = bijzaak." },
            { type: "stap", tekst: "Tekst over fietsen: 'Fietsen is gezond. De Tour duurt 21 dagen.' → 21 dagen = bijzaak." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Specifiek getal in zin? Hoogstwaarschijnlijk bijzaak (tenzij getal ZELF kern is, bv. 'water bestaat voor 70% uit waterstof' in chemie-tekst)." }],
          niveaus: {
            basis: "Training 2 jaar = specifiek detail = bijzaak. = A.",
            simpeler: "Schrap zin 3 → boodschap (honden helpen blinden) blijft hetzelfde → zin 3 = bijzaak. = A.",
            nogSimpeler: "2 jaar = bijzaak = A.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const samenvattenHoofdgedachtePo = {
  id: "samenvatten-hoofdgedachte-po",
  title: "Samenvatten en hoofdgedachte — Cito groep 5-8",
  emoji: "💭",
  level: "groep5-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Studievaardigheden — leesvaardigheid",
  intro:
    "Hoofdgedachte vinden, hoofd/bijzaken scheiden, samenvatting maken. Cito-stijl. ~12 min.",
  triggerKeywords: [
    "samenvatten","samenvatting","hoofdgedachte","kerngedachte","onderwerp",
    "hoofdzaak","bijzaak","leesvaardigheid","studievaardigheden","tekst",
  ],
  chapters,
  steps,
};

export default samenvattenHoofdgedachtePo;
