// Begrijpend lezen — OPBOUWEND (tekstlengte-ladder).
// Idee van een collega van Mark (18 jun 2026): begin met héél weinig tekst en
// loop op naar Doorstroomtoets-lengte. Zijn dochter vond gewone teksten te lang.
// Daarom: per onderwerp 4 niveaus van oplopende lengte. De gebruiker kiest vooraf
// (1) het onderwerp en (2) op welke lengte hij wil starten; daarna loopt het
// vanzelf op. Sober, geen sfeer-art (Toets-regel). Vragen = echt begrip:
// letterlijk / inferentie / hoofdgedachte. wrongHints = denkprikkels, nooit het
// antwoord weggeven.

export const LADDER_THEMES = [
  { id: "dieren",       label: "Dieren",       icon: "🐾" },
  { id: "sport",        label: "Sport",        icon: "⚽" },
  { id: "ruimte",       label: "Ruimte",       icon: "🚀" },
  { id: "uitvindingen", label: "Uitvindingen", icon: "💡" },
];

// De ladder zelf. Index 0 = kortst. De "start"-keuze bepaalt vanaf welke trede
// je begint; je loopt altijd omhoog tot en met niveau 3.
export const LADDER_NIVEAUS = [
  { id: 0, label: "Heel kort", hint: "1-2 zinnen" },
  { id: 1, label: "Kort",      hint: "paar zinnen" },
  { id: 2, label: "Gewoon",    hint: "een alinea" },
  { id: 3, label: "Lang",      hint: "echte tekst" },
];

// CONTENT[themeId][niveau] = { tekst, vragen: [{ vraag, opties, antwoord, hints, uitleg }] }
// hints: array even lang als opties; null bij het goede antwoord, anders een
// denkprikkel (vraag-vorm) die richting geeft zonder het antwoord te verklappen.
export const LADDER_CONTENT = {
  // ─────────────────────────────── DIEREN ───────────────────────────────
  dieren: [
    {
      tekst: `De egel heeft scherpe stekels op zijn rug. Als hij bang is, rolt hij zich op tot een stekelige bal.`,
      vragen: [
        {
          vraag: "Wat doet de egel als hij bang is?",
          opties: ["Hij rent hard weg", "Hij rolt zich op tot een bal", "Hij klimt in een boom", "Hij gaat slapen"],
          antwoord: 1,
          hints: ["Rennen staat er niet — lees de tweede zin nog eens.", null, "Waar zou een egel met korte pootjes naartoe klimmen?", "Staat er iets over slapen in deze tekst?"],
          uitleg: "In de tweede zin staat het letterlijk: als de egel bang is, rolt hij zich op tot een stekelige bal.",
        },
      ],
    },
    {
      tekst: `De egel eet vooral 's nachts. Hij zoekt dan naar slakken, wormen en insecten. Overdag slaapt hij onder een hoop bladeren of in een hol.`,
      vragen: [
        {
          vraag: "Wanneer gaat de egel op zoek naar eten?",
          opties: ["'s Ochtends vroeg", "Midden op de dag", "'s Nachts", "Alleen in de winter"],
          antwoord: 2,
          hints: ["Lees de eerste zin: wanneer eet hij 'vooral'?", "Overdag doet hij iets anders — wat?", null, "Staat er iets over de winter in deze tekst?"],
          uitleg: "De eerste zin zegt het: de egel eet vooral 's nachts.",
        },
        {
          vraag: "Waarom zie je een egel overdag bijna nooit?",
          opties: ["Omdat hij dan slaapt", "Omdat hij dan zwemt", "Omdat hij bang is voor zon", "Omdat hij dan eet"],
          antwoord: 0,
          hints: [null, "Staat er iets over zwemmen?", "Dat staat er niet — wat doet hij overdag wél?", "Eten doet hij juist 's nachts, las je."],
          uitleg: "De tekst zegt dat hij overdag slaapt onder bladeren of in een hol. Daarom zie je hem overdag bijna nooit.",
        },
      ],
    },
    {
      tekst: `Egels zijn handige dieren om in je tuin te hebben. Ze eten slakken en insecten die anders de planten zouden opeten. Zo helpen ze de tuinman, zonder dat er gif nodig is.

Toch gaat het niet goed met de egel. Er zijn steeds minder plekken waar hij kan schuilen, omdat veel tuinen helemaal worden betegeld. Je kunt egels helpen door een hoekje van de tuin lekker wild te laten groeien.`,
      vragen: [
        {
          vraag: "Waarom zijn egels handig voor een tuin?",
          opties: ["Ze houden de tuin warm", "Ze eten slakken en insecten die planten opeten", "Ze graven mooie gangen", "Ze houden katten weg"],
          antwoord: 1,
          hints: ["Daar zegt de tekst niets over.", null, "Graven staat er niet bij als reden — lees de eerste alinea.", "Over katten gaat de tekst niet."],
          uitleg: "In de eerste alinea staat dat egels slakken en insecten eten die anders de planten zouden opeten.",
        },
        {
          vraag: "Waarom gaat het niet goed met de egel?",
          opties: ["Er is te veel gif in tuinen", "Er zijn steeds minder schuilplekken doordat tuinen worden betegeld", "Er zijn te veel andere egels", "Het is te koud geworden"],
          antwoord: 1,
          hints: ["De tekst zegt juist dat egels gif overbodig maken.", null, "Over aantallen egels gaat het niet.", "Over kou staat hier niets."],
          uitleg: "De tweede alinea legt het uit: er zijn steeds minder schuilplekken omdat veel tuinen worden betegeld.",
        },
      ],
    },
    {
      tekst: `**De egel: een nachtdier in de problemen**

De egel is een van de bekendste dieren van Nederland, maar je ziet hem zelden. Dat komt doordat de egel een nachtdier is: overdag slaapt hij verstopt onder bladeren of takken, en pas als het donker wordt gaat hij op pad. Met zijn neus dicht bij de grond snuffelt hij naar slakken, wormen en kevers. In één nacht kan een egel wel honderden insecten opeten.

Vroeger zaten er veel egels in tuinen en parken. De laatste jaren worden het er steeds minder. Een belangrijke reden is dat tuinen vaker volledig worden bestraat. Tussen de tegels groeit niets meer, dus vindt de egel er geen eten en geen schuilplek. Ook drukke wegen zijn gevaarlijk: een egel die schrikt, rolt zich op in plaats van weg te rennen, en dat helpt niet tegen een auto.

Gelukkig kun je zelf iets doen. Laat een hoekje van de tuin wild begroeien, maak een kleine opening onder het hek zodat een egel erdoor kan, en ruim 's avonds geen bladhopen op waar een egel in kan schuilen. Zo help je mee om dit nuttige nachtdier te beschermen.`,
      vragen: [
        {
          vraag: "Waarom zie je een egel maar zelden?",
          opties: ["Omdat er bijna geen egels meer zijn", "Omdat hij een nachtdier is en overdag slaapt", "Omdat hij heel klein is", "Omdat hij zich altijd oprolt"],
          antwoord: 1,
          hints: ["Er zijn er minder, maar dát is niet waarom je hem zelden ziet — lees de eerste alinea.", null, "Over zijn grootte gaat het hier niet.", "Oprollen doet hij als hij schrikt, niet de hele dag."],
          uitleg: "De eerste alinea zegt het: je ziet hem zelden doordat hij een nachtdier is dat overdag verstopt slaapt.",
        },
        {
          vraag: "Waarom is een bestrate tuin slecht voor de egel?",
          opties: ["Tegels zijn te glad om op te lopen", "Tussen de tegels groeit niets, dus is er geen eten en geen schuilplek", "Egels houden niet van de kleur van tegels", "Tegels worden 's nachts te koud"],
          antwoord: 1,
          hints: ["Over glad lopen zegt de tekst niets.", null, "Kleur speelt geen rol in de tekst.", "Niet de kou, maar iets anders ontbreekt tussen de tegels."],
          uitleg: "In de tweede alinea staat dat er tussen de tegels niets groeit, waardoor de egel er geen eten én geen schuilplek vindt.",
        },
        {
          vraag: "Wat is de belangrijkste boodschap van deze tekst?",
          opties: ["Egels eten heel veel insecten", "Het gaat slechter met de egel, maar je kunt zelf helpen", "Egels zijn de bekendste dieren van Nederland", "Auto's zijn gevaarlijk voor dieren"],
          antwoord: 1,
          hints: ["Dat staat er wel, maar het is een detail, niet de hoofdboodschap.", null, "Dat is de openingszin, niet waar de hele tekst om draait.", "Dat is maar één voorbeeld in de tekst."],
          uitleg: "De tekst laat eerst zien dat het slechter gaat met de egel en eindigt met tips om te helpen. Dát is de kern.",
        },
      ],
    },
  ],

  // ──────────────────────────────── SPORT ────────────────────────────────
  sport: [
    {
      tekst: `Bij voetbal mag alleen de keeper de bal met zijn handen pakken. Alle andere spelers gebruiken hun voeten of hun hoofd.`,
      vragen: [
        {
          vraag: "Wie mag de bal met zijn handen pakken?",
          opties: ["Iedereen", "Alleen de keeper", "Alleen de aanvoerder", "Niemand"],
          antwoord: 1,
          hints: ["Lees de eerste zin: voor wie geldt het 'alleen'?", null, "Over de aanvoerder zegt de tekst niets.", "Eén speler mag het juist wél."],
          uitleg: "De eerste zin zegt het: alleen de keeper mag de bal met zijn handen pakken.",
        },
      ],
    },
    {
      tekst: `Tijdens een wedstrijd let de scheidsrechter goed op. Maakt een speler een overtreding, dan fluit hij. Bij een ernstige overtreding geeft hij een gele of zelfs een rode kaart.`,
      vragen: [
        {
          vraag: "Wat doet de scheidsrechter bij een overtreding?",
          opties: ["Hij stopt de wedstrijd voorgoed", "Hij fluit", "Hij doet niets", "Hij gaat zelf voetballen"],
          antwoord: 1,
          hints: ["De wedstrijd stopt niet voorgoed bij elke overtreding.", null, "Hij let juist goed op — niksdoen past daar niet bij.", "Een scheidsrechter speelt niet mee."],
          uitleg: "De tekst zegt: maakt een speler een overtreding, dan fluit de scheidsrechter.",
        },
        {
          vraag: "Wat betekent het als een speler een rode kaart krijgt?",
          opties: ["Hij heeft iets ernstigs gedaan", "Hij heeft gescoord", "Hij is de aanvoerder", "Hij mag een penalty nemen"],
          antwoord: 0,
          hints: [null, "Een kaart krijg je niet voor scoren.", "Over de aanvoerder gaat het niet.", "Een rode kaart is geen beloning."],
          uitleg: "De tekst zegt dat een rode kaart bij een ernstige overtreding hoort. Het is dus een straf, niet iets goeds.",
        },
      ],
    },
    {
      tekst: `Goed opwarmen voor het sporten is belangrijk. Door eerst rustig te bewegen, worden je spieren warm en soepel. Warme spieren kunnen beter rekken en scheuren minder snel.

Wie meteen op volle kracht begint, heeft een grotere kans op een blessure. Daarom doen sporters voor een wedstrijd altijd eerst oefeningen om los te komen.`,
      vragen: [
        {
          vraag: "Waarom is opwarmen belangrijk?",
          opties: ["Je wordt er sneller moe van", "Je spieren worden warm en soepel en scheuren minder snel", "Je hoeft daarna niet meer te trainen", "Je verliest er gewicht mee"],
          antwoord: 1,
          hints: ["Opwarmen maakt je juist klaar om te sporten, niet moe.", null, "Dat staat nergens in de tekst.", "Over gewicht gaat de tekst niet."],
          uitleg: "De eerste alinea legt uit dat warme spieren beter rekken en minder snel scheuren.",
        },
        {
          vraag: "Wat gebeurt er als je meteen op volle kracht begint?",
          opties: ["Je presteert beter", "Je hebt een grotere kans op een blessure", "Je spieren worden vanzelf warm", "Je wint sneller"],
          antwoord: 1,
          hints: ["De tekst waarschuwt er juist voor — beter is het niet.", null, "Zonder opwarmen worden ze niet vanzelf goed warm.", "Over winnen zegt de tekst niets."],
          uitleg: "In de tweede alinea staat dat wie meteen op volle kracht begint, een grotere kans op een blessure heeft.",
        },
      ],
    },
    {
      tekst: `**Waarom sporters samen sterker zijn**

In een teamsport zoals voetbal, hockey of basketbal kun je nog zo goed zijn, je wint bijna nooit in je eentje. Een doelpunt lijkt vaak het werk van één speler, maar er ging meestal een hele reeks acties aan vooraf: iemand veroverde de bal, een ander gaf een goede pass, en pas daarna kon de spits scoren. Samenwerken is daarom net zo belangrijk als individueel talent.

Goede teams oefenen niet alleen op techniek, maar ook op afspraken. Wie dekt wie? Wanneer geef je de bal en wanneer probeer je het zelf? Door dit steeds te herhalen, weten spelers tijdens een wedstrijd precies wat ze van elkaar kunnen verwachten. Ze hoeven dan niet meer na te denken; het gaat vanzelf.

Ook buiten het veld telt het team. Spelers die elkaar aanmoedigen na een fout, durven meer te proberen. Wie bang is om uitgelachen te worden, speelt voorzichtig en maakt juist méér fouten. Een goede teamgeest zorgt er dus voor dat iedereen beter speelt dan alleen.`,
      vragen: [
        {
          vraag: "Waarom is een doelpunt meestal niet het werk van één speler?",
          opties: ["Omdat de scheidsrechter meehelpt", "Omdat er meestal een reeks acties van het team aan voorafgaat", "Omdat de spits altijd toevallig scoort", "Omdat één speler niet mag scoren"],
          antwoord: 1,
          hints: ["De scheidsrechter speelt niet mee.", null, "'Toevallig' past niet bij wat de tekst zegt over samenwerken.", "Eén speler mág best scoren; daar gaat het niet om."],
          uitleg: "De eerste alinea legt uit dat aan een doelpunt meestal een reeks acties voorafgaat: balverovering, een pass en pas dán de goal.",
        },
        {
          vraag: "Waarom oefenen goede teams ook op afspraken?",
          opties: ["Zodat spelers tijdens de wedstrijd niet meer hoeven na te denken", "Omdat dat van de scheidsrechter moet", "Om langer te kunnen trainen", "Om de tegenstander uit te lachen"],
          antwoord: 0,
          hints: [null, "Over een verplichting van de scheidsrechter staat niets.", "Het doel is niet langer trainen, maar beter samenspelen.", "Uitlachen wordt in de tekst juist afgeraden."],
          uitleg: "De tweede alinea zegt dat spelers door het herhalen van afspraken tijdens de wedstrijd niet meer hoeven na te denken; het gaat dan vanzelf.",
        },
        {
          vraag: "Wat is de hoofdgedachte van deze tekst?",
          opties: ["Voetbal is moeilijker dan hockey", "Samen en met een goede teamgeest speel je beter dan alleen", "Spitsen zijn de belangrijkste spelers", "Trainen is saai maar nodig"],
          antwoord: 1,
          hints: ["De tekst vergelijkt die sporten niet.", null, "De tekst zegt juist dat het team telt, niet één positie.", "Dat staat er nergens zo."],
          uitleg: "Alle drie de alinea's draaien om hetzelfde: samenwerken en een goede teamgeest maken iedereen beter dan in z'n eentje.",
        },
      ],
    },
  ],

  // ──────────────────────────────── RUIMTE ───────────────────────────────
  ruimte: [
    {
      tekst: `De maan draait om de aarde. Daarom zien we hem 's nachts steeds op een andere plek aan de hemel.`,
      vragen: [
        {
          vraag: "Waar draait de maan omheen?",
          opties: ["Om de zon", "Om de aarde", "Om de sterren", "Om Mars"],
          antwoord: 1,
          hints: ["Lees de eerste zin nog eens — waar draait de maan omheen?", null, "Sterren staan veel verder weg; daar zegt de tekst niets over.", "Mars wordt niet genoemd."],
          uitleg: "De eerste zin zegt het: de maan draait om de aarde.",
        },
      ],
    },
    {
      tekst: `In de ruimte is geen lucht. Daardoor kun je er geen geluid horen, want geluid heeft lucht nodig om zich voort te bewegen. Astronauten praten met elkaar via een radio in hun helm.`,
      vragen: [
        {
          vraag: "Waarom kun je in de ruimte geen geluid horen?",
          opties: ["Omdat het er te koud is", "Omdat er geen lucht is", "Omdat het er te donker is", "Omdat astronauten fluisteren"],
          antwoord: 1,
          hints: ["Kou heeft er niets mee te maken volgens de tekst.", null, "Donker maakt geen verschil voor geluid.", "Ze praten juist gewoon, via een radio."],
          uitleg: "De tekst legt uit dat geluid lucht nodig heeft, en die is er in de ruimte niet.",
        },
        {
          vraag: "Hoe praten astronauten dan met elkaar?",
          opties: ["Ze schreeuwen heel hard", "Via een radio in hun helm", "Met handgebaren", "Dat kan helemaal niet"],
          antwoord: 1,
          hints: ["Harder schreeuwen helpt niet zonder lucht.", null, "Over handgebaren zegt de tekst niets.", "Het kan juist wél — lees de laatste zin."],
          uitleg: "De laatste zin zegt dat astronauten via een radio in hun helm met elkaar praten.",
        },
      ],
    },
    {
      tekst: `Onze aarde is een planeet die om de zon draait. Er zijn nog zeven andere planeten die dat ook doen. Samen vormen ze ons zonnestelsel.

Sommige planeten staan dicht bij de zon en zijn heel heet, zoals Mercurius. Andere staan ver weg en zijn ijskoud, zoals Neptunus. De aarde staat precies op een goede afstand: niet te warm en niet te koud. Daardoor kunnen er mensen, dieren en planten leven.`,
      vragen: [
        {
          vraag: "Wat vormen de aarde en de andere planeten samen?",
          opties: ["Een sterrenbeeld", "Ons zonnestelsel", "Een melkwegstelsel", "Een komeet"],
          antwoord: 1,
          hints: ["Een sterrenbeeld is iets anders — lees de eerste alinea.", null, "Dat woord gebruikt de tekst niet.", "Een komeet is geen verzameling planeten."],
          uitleg: "De eerste alinea zegt dat de planeten samen ons zonnestelsel vormen.",
        },
        {
          vraag: "Waarom kunnen er op aarde mensen, dieren en planten leven?",
          opties: ["Omdat de aarde de grootste planeet is", "Omdat de aarde precies op een goede afstand van de zon staat", "Omdat de aarde het dichtst bij de zon staat", "Omdat de aarde de meeste manen heeft"],
          antwoord: 1,
          hints: ["Over de grootte gaat het niet.", null, "Juist niet het dichtst bij — dat is Mercurius en die is heet.", "Over manen zegt de tekst niets."],
          uitleg: "De tweede alinea legt uit dat de aarde op een goede afstand staat: niet te warm en niet te koud.",
        },
      ],
    },
    {
      tekst: `**Waarom valt een astronaut niet van de aarde?**

Als je een foto van de ronde aarde ziet, kun je je afvragen waarom de mensen aan de onderkant er niet afvallen. Het antwoord is de zwaartekracht. Dat is een onzichtbare kracht die alles naar het midden van de aarde toe trekt. Voor ons voelt "naar beneden" daarom altijd richting de grond, of je nu in Nederland of in Australië woont. Aan de "onderkant" van de aarde bestaat eigenlijk niet.

In de ruimte werkt dat anders. Een astronaut in een ruimtestation lijkt te zweven, alsof de zwaartekracht weg is. Toch is dat niet zo: ook daar trekt de aarde nog aan hem. Het ruimtestation valt eigenlijk de hele tijd naar de aarde toe, maar het beweegt zó snel zijwaarts dat het steeds "naast" de aarde valt en in een baan blijft cirkelen. De astronaut valt mee, en daardoor voelt het alsof hij zweeft.

Dat zweven ziet er leuk uit, maar het is ook lastig. Eten en drinken vliegen zomaar weg, en astronauten moeten zich met riemen vastmaken om te slapen. Hun spieren worden bovendien slapper, omdat ze hun lichaam niet meer hoeven te dragen. Daarom sporten ze elke dag, zodat ze sterk genoeg blijven voor als ze weer terug naar de aarde komen.`,
      vragen: [
        {
          vraag: "Waarom vallen mensen aan de 'onderkant' van de aarde er niet af?",
          opties: ["Omdat ze zich goed vasthouden", "Door de zwaartekracht, die alles naar het midden van de aarde trekt", "Omdat de aarde plat is", "Omdat ze zware schoenen dragen"],
          antwoord: 1,
          hints: ["Niemand hoeft zich vast te houden — lees de eerste alinea.", null, "De tekst gaat juist uit van een rónde aarde.", "Over schoenen zegt de tekst niets."],
          uitleg: "De eerste alinea legt uit dat de zwaartekracht alles naar het midden van de aarde trekt, zodat 'naar beneden' overal richting de grond is.",
        },
        {
          vraag: "Waarom lijkt een astronaut in het ruimtestation te zweven?",
          opties: ["Omdat er in de ruimte geen zwaartekracht is", "Omdat het station én de astronaut samen steeds 'naast' de aarde vallen", "Omdat hij heel licht is geworden", "Omdat hij speciale schoenen draagt"],
          antwoord: 1,
          hints: ["De tekst zegt juist dat de zwaartekracht er nog wél is.", null, "Zijn gewicht verandert niet zomaar — lees de tweede alinea.", "Schoenen spelen geen rol."],
          uitleg: "De tweede alinea legt uit dat het station de hele tijd naar de aarde valt, maar zó snel zijwaarts beweegt dat het ernaast valt. De astronaut valt mee en voelt zich daardoor gewichtloos.",
        },
        {
          vraag: "Waarom moeten astronauten in de ruimte elke dag sporten?",
          opties: ["Omdat ze zich anders vervelen", "Omdat hun spieren slapper worden als ze hun lichaam niet hoeven te dragen", "Omdat sporten warm houdt", "Omdat dat een regel van de aarde is"],
          antwoord: 1,
          hints: ["Verveling wordt niet als reden genoemd.", null, "Over warmte gaat het hier niet.", "Het is geen willekeurige regel; er is een lichamelijke reden."],
          uitleg: "De derde alinea zegt dat hun spieren slapper worden omdat ze hun lichaam niet hoeven te dragen. Daarom sporten ze om sterk te blijven voor de terugkeer.",
        },
      ],
    },
  ],

  // ───────────────────────────── UITVINDINGEN ────────────────────────────
  uitvindingen: [
    {
      tekst: `De eerste telefoon werd in 1876 uitgevonden door Alexander Graham Bell. Daarmee kon je voor het eerst met iemand ver weg praten.`,
      vragen: [
        {
          vraag: "Wat kon je dankzij de eerste telefoon voor het eerst doen?",
          opties: ["Foto's maken", "Met iemand ver weg praten", "Muziek opnemen", "In het donker zien"],
          antwoord: 1,
          hints: ["Over foto's gaat deze tekst niet.", null, "Muziek opnemen wordt niet genoemd.", "In het donker zien hoort bij een andere uitvinding."],
          uitleg: "De tweede zin zegt het: met de telefoon kon je voor het eerst met iemand ver weg praten.",
        },
      ],
    },
    {
      tekst: `Vroeger schreven mensen alles met de hand over. Dat kostte heel veel tijd. Toen Johannes Gutenberg de boekdrukkunst uitvond, konden boeken veel sneller worden gemaakt. Daardoor kregen veel meer mensen toegang tot boeken.`,
      vragen: [
        {
          vraag: "Wat was het probleem voordat de boekdrukkunst bestond?",
          opties: ["Boeken waren te zwaar", "Alles met de hand overschrijven kostte heel veel tijd", "Er waren geen letters", "Niemand kon lezen"],
          antwoord: 1,
          hints: ["Over het gewicht zegt de tekst niets.", null, "Er waren wél letters; mensen schreven ze over.", "Dat staat er niet — sommigen konden wel lezen."],
          uitleg: "De tekst zegt dat mensen vroeger alles met de hand overschreven, en dat dit heel veel tijd kostte.",
        },
        {
          vraag: "Wat was een gevolg van de uitvinding van Gutenberg?",
          opties: ["Boeken werden duurder", "Veel meer mensen kregen toegang tot boeken", "Mensen stopten met lezen", "Er kwamen minder boeken"],
          antwoord: 1,
          hints: ["Sneller maken maakt iets meestal niet duurder — lees de laatste zin.", null, "Het tegenovergestelde gebeurde juist.", "Er kwamen er juist méér."],
          uitleg: "De laatste zin zegt dat door het sneller maken van boeken veel meer mensen er toegang toe kregen.",
        },
      ],
    },
    {
      tekst: `De gloeilamp veranderde het dagelijks leven enorm. Vóór de gloeilamp gebruikten mensen kaarsen en olielampen om licht te maken. Die gaven weinig licht en konden gemakkelijk brand veroorzaken.

Toen Thomas Edison rond 1880 een goed werkende gloeilamp maakte, konden huizen en straten veel veiliger worden verlicht. Mensen konden 's avonds langer doorwerken, lezen of spelen. De dag werd als het ware langer.`,
      vragen: [
        {
          vraag: "Hoe maakten mensen licht vóór de gloeilamp?",
          opties: ["Met kaarsen en olielampen", "Met zonnepanelen", "Met batterijen", "Met spiegels"],
          antwoord: 0,
          hints: [null, "Zonnepanelen bestonden toen nog niet — lees de eerste alinea.", "Batterijlampjes worden niet genoemd.", "Met spiegels maak je geen licht in het donker."],
          uitleg: "De eerste alinea zegt dat mensen vóór de gloeilamp kaarsen en olielampen gebruikten.",
        },
        {
          vraag: "Waarom werd 'de dag als het ware langer' door de gloeilamp?",
          opties: ["Omdat de zon langer scheen", "Omdat mensen 's avonds langer konden doorwerken, lezen of spelen", "Omdat de klok veranderde", "Omdat mensen minder gingen slapen van het licht"],
          antwoord: 1,
          hints: ["De zon veranderde niet door een lamp.", null, "De klok speelt geen rol in de tekst.", "Het gaat om meer kunnen doen, niet om slecht slapen."],
          uitleg: "De tweede alinea legt uit dat mensen door het veilige licht 's avonds langer konden doorwerken, lezen of spelen.",
        },
      ],
    },
    {
      tekst: `**Een uitvinding die de wereld kleiner maakte**

Honderd jaar geleden duurde het soms weken voordat een bericht van het ene land het andere bereikte. Een brief moest met de boot of de trein worden vervoerd. Wie ver weg woonde, hoorde pas laat het laatste nieuws. Dat veranderde toen mensen leerden om berichten met elektrische signalen te versturen, eerst via de telegraaf en later via de telefoon.

De grootste verandering kwam met het internet. Een e-mail of berichtje is nu in een paar seconden aan de andere kant van de wereld. Je kunt een filmpje bekijken dat iemand net heeft gemaakt in een land duizenden kilometers verderop. Daardoor zeggen mensen wel dat de wereld 'kleiner' is geworden: afstanden voelen niet meer zo groot, omdat informatie zo snel reist.

Toch heeft die snelheid ook een nadeel. Doordat iedereen tegelijk berichten kan versturen, komt er soms zó veel informatie binnen dat het lastig is om te weten wat klopt. Een bericht dat niet waar is, kan net zo snel rondgaan als een bericht dat wél klopt. Daarom is het belangrijk om te leren nadenken over wat je leest, en niet alles zomaar te geloven.`,
      vragen: [
        {
          vraag: "Waarom hoorde iemand die ver weg woonde het nieuws vroeger pas laat?",
          opties: ["Omdat mensen toen niet konden lezen", "Omdat een bericht met de boot of trein moest worden vervoerd", "Omdat er geen nieuws was", "Omdat brieven verboden waren"],
          antwoord: 1,
          hints: ["Over lezen gaat de openingsalinea niet.", null, "Er wás nieuws; het reisde alleen langzaam.", "Brieven waren juist het middel, niet verboden."],
          uitleg: "De eerste alinea legt uit dat een brief met de boot of de trein moest reizen, waardoor nieuws er weken over kon doen.",
        },
        {
          vraag: "Waarom zeggen mensen dat de wereld 'kleiner' is geworden?",
          opties: ["Omdat er minder landen zijn", "Omdat informatie nu zo snel reist dat afstanden niet meer zo groot voelen", "Omdat de aarde echt kromp", "Omdat mensen minder reizen"],
          antwoord: 1,
          hints: ["Het aantal landen verandert er niet door.", null, "De aarde wordt niet echt kleiner — het is een manier van zeggen.", "Over reizen gaat het hier niet."],
          uitleg: "De tweede alinea legt uit dat informatie door het internet zo snel reist dat afstanden niet meer zo groot voelen. Daarom noemt men de wereld 'kleiner'.",
        },
        {
          vraag: "Wat is volgens de tekst een nadeel van de snelle informatie?",
          opties: ["Berichten kosten te veel geld", "Een bericht dat niet waar is, gaat net zo snel rond als een bericht dat wél klopt", "Niemand verstuurt nog brieven", "Filmpjes duren te lang"],
          antwoord: 1,
          hints: ["Over geld zegt de tekst niets.", null, "Of mensen nog brieven sturen, is niet het nadeel dat genoemd wordt.", "De lengte van filmpjes wordt niet als nadeel genoemd."],
          uitleg: "De derde alinea waarschuwt dat onware berichten net zo snel rondgaan als ware. Daarom moet je leren nadenken over wat je leest.",
        },
      ],
    },
  ],
};
