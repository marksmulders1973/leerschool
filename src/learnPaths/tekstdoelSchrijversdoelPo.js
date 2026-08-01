// Leerpad: Tekstdoel & schrijversdoel — Doorstroomtoets begrijpend lezen (groep 6-8).
// Vraagvormen: "Waarom heeft de schrijver deze tekst geschreven?" en
// "Voor wie is deze tekst bedoeld?". Vier doelen: informeren, overtuigen,
// amuseren, instrueren. Plus doelgroep herkennen en verstopte (dubbele) doelen.
//
// LET OP: het pad "soorten-teksten-po" gaat over tekstSOORTEN. Dit pad focust
// op het DOEL van de schrijver en de DOELGROEP — andere invalshoek, geen dubbeling.
// Alle teksten zijn 100% eigen werk; winkel- en merknamen zijn verzonnen.

const stepEmojis = ["🎯", "👀", "🕵️", "🏆"];

const chapters = [
  { letter: "A", title: "De vier schrijversdoelen", emoji: "🎯", from: 0, to: 0 },
  { letter: "B", title: "Voor wie is dit geschreven?", emoji: "👀", from: 1, to: 1 },
  { letter: "C", title: "Verstopte doelen — reclame", emoji: "🕵️", from: 2, to: 2 },
  { letter: "D", title: "Doorstroomtoets-mix", emoji: "🏆", from: 3, to: 3 },
];

// ── Folder-tekst voor stap 3 (eigen werk, verzonnen winkel + merk) ──
const folderTekst = `**Goed ontbijten? Zo zit dat!**

Wist je dat je hersenen 's ochtends brandstof nodig hebben? Na een nacht slapen is je energievoorraad bijna op. Onderzoekers zagen dat kinderen die ontbijten zich op school beter kunnen concentreren dan kinderen die met een lege maag vertrekken. Een goed ontbijt bevat granen, fruit en zuivel. Ook rustig aan tafel zitten helpt: wie ontspannen eet, begint fitter aan de dag.

Daarom is er nu **Ochtendkracht** van Korrel & Ko: knapperige volkoren granen met echte stukjes appel. Ochtendkracht bevat zes verschillende granen en geen toegevoegde kleurstoffen. Kinderen zijn er dol op — en jij straks ook!

Haal deze week een pak Ochtendkracht bij supermarkt De Knabbelhoek en ontvang een gratis ontbijtbeker. Op = op, dus wees er snel bij. Want wie de dag goed begint, houdt de hele dag energie over. Kies voor Ochtendkracht: de slimme start van elke schooldag!`;

// ── Tekst voor stap 4 (eigen werk, ~200 woorden) ────────────────────
const egelTekst = `**De egel — held van de nacht**

Heb jij weleens een egel gezien? Grote kans van niet, want egels komen pas tevoorschijn als het donker wordt. 's Nachts scharrelt een egel wel drie kilometer door tuinen en parken. Onderweg eet hij kevers, rupsen en slakken — soms wel veertig slakken op één nacht. Daarmee is de egel een echte hulp voor iedereen met een moestuin.

In november zoekt de egel een warme plek om te overwinteren. Hij bouwt een nest van bladeren en takken, bijvoorbeeld onder een struik of een houtstapel. Tijdens die winterslaap daalt zijn hartslag van bijna tweehonderd naar ongeveer twintig slagen per minuut. Zo verbruikt hij bijna geen energie en houdt hij het maandenlang vol zonder eten.

Toch gaat het niet goed met de egel. Tuinen worden steeds netter: tegels in plaats van struiken, strakke schuttingen in plaats van heggen. Daardoor vindt de egel steeds moeilijker een plek voor zijn nest.

Gelukkig kun jij iets doen. Laat in een hoekje van de tuin bladeren en takken liggen. Vraag of er onderin de schutting een opening van dertien centimeter mag komen, zodat de egel van tuin naar tuin kan lopen. Zo geef jij de held van de nacht een veilig thuis!`;

const steps = [
  // ── Stap 1: De vier schrijversdoelen ────────────────────────────
  {
    title: "De vier schrijversdoelen",
    explanation:
      "Elke schrijver heeft een **doel**: iets wat hij bij de lezer wil bereiken. Op de Doorstroomtoets krijg je daar vaak een vraag over: *\"Waarom heeft de schrijver deze tekst geschreven?\"* Er zijn vier hoofddoelen:\n\n" +
      "1. **Informeren** — de schrijver wil je iets **leren of uitleggen**. Je vindt feiten, getallen en beschrijvingen. Bijvoorbeeld een tekst over hoe vulkanen werken.\n" +
      "2. **Overtuigen** — de schrijver wil dat je iets **vindt of doet**. Je ziet meningen, argumenten en aansporingen zoals 'doe mee!' of 'daarom moet...'.\n" +
      "3. **Amuseren** — de schrijver wil je **vermaken**. Denk aan een verhaal, een grap of een spannend avontuur. Het hoeft niet echt gebeurd te zijn.\n" +
      "4. **Instrueren** — de schrijver legt **stap voor stap** uit hoe je iets doet. Denk aan een recept of een knutseluitleg, vaak met woorden als 'eerst', 'dan' en 'daarna'.\n\n" +
      "**Truc:** vraag jezelf af wat de schrijver van jóú wil. Moet je iets *weten* (informeren), iets *vinden of doen* (overtuigen), *lachen of meeleven* (amuseren) of iets *maken* (instrueren)?\n\n" +
      "*Lees bij elke vraag het mini-tekstje en kies het doel van de schrijver.*",
    checks: [
      {
        q: "*\"De egel slaapt bijna de hele winter. Zijn hartslag daalt dan van tweehonderd naar ongeveer twintig slagen per minuut. Zo verbruikt hij bijna geen energie.\"* — Wat wil de schrijver?",
        options: ["Informeren", "Overtuigen", "Amuseren", "Instrueren"],
        answer: 0,
        evidence: "Zijn hartslag daalt dan van tweehonderd naar ongeveer twintig slagen per minuut.",
        wrongHints: [
          null,
          "Zie je ergens een mening of een aansporing zoals 'doe mee' of 'daarom moet'?",
          null,
          "Staan er stappen in die jij moet uitvoeren, zoals 'eerst' en 'daarna'?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat staat er in het tekstje?", tekst: "Feiten over de egel: hij slaapt, zijn hartslag daalt, hij verbruikt weinig energie. Getallen erbij (tweehonderd, twintig)." },
            { titel: "Wat wil de schrijver van jou?", tekst: "Niet dat je iets doet of vindt — alleen dat je iets nieuws WEET over egels. Feiten geven zonder mening = uitleggen wat waar is." },
            { titel: "Welk doel past daarbij?", tekst: "Iets uitleggen of leren aan de lezer, met feiten en getallen — dat is één van de vier doelen. Welke?" },
          ],
          woorden: [
            { woord: "informeren", uitleg: "De lezer iets leren of uitleggen. De tekst geeft feiten, geen mening." },
            { woord: "feit", uitleg: "Iets dat echt zo is en dat je kunt controleren. Bijvoorbeeld: 'een egel eet slakken'." },
          ],
          theorie: "**Informeren herken je aan:**\n- feiten en getallen ('twintig slagen per minuut')\n- uitleg over hoe iets werkt of hoe iets zit\n- géén 'ik vind', géén 'doe mee', géén stappen, géén verhaal\n\nDe schrijver blijft op afstand: hij vertelt wat waar is en laat de rest aan jou.",
          voorbeelden: [
            { type: "informeren", tekst: "'Een blauwe vinvis wordt wel dertig meter lang.' — feit, geen mening, geen opdracht. De schrijver wil dat je iets weet." },
            { type: "tegenvoorbeeld", tekst: "'Iedereen zou vaker naar de zee moeten kijken!' — dit is een aansporing. Dan wil de schrijver iets anders van je." },
          ],
          basiskennis: [
            { onderwerp: "Doel ≠ onderwerp", uitleg: "Het onderwerp is WAAROVER de tekst gaat (egels). Het doel is WAAROM de schrijver 'm schreef. Op de toets wordt naar het doel gevraagd." },
          ],
          niveaus: {
            basis: "Alleen feiten en getallen, geen mening en geen opdracht — welk doel hoort daarbij?",
            simpeler: "Vraag jezelf af: moet ik hier iets van vinden? Nee. Moet ik iets maken? Nee. Word ik vermaakt met een verhaal? Nee. Wat blijft er over: ik leer iets nieuws over egels.",
            nogSimpeler: "De schrijver wil dat jij na het lezen iets nieuws wéét. Welk woord uit de vier betekent precies dat?",
          },
        },
      },
      {
        q: "*\"Kom zaterdag óók naar de opruimdag in speeltuin De Draaimolen! Zwerfvuil is gevaarlijk voor kleine kinderen. Samen is het zo gebeurd — doe je mee?\"* — Wat wil de schrijver?",
        options: ["Overtuigen", "Informeren", "Amuseren", "Instrueren"],
        answer: 0,
        evidence: "Kom zaterdag óók naar de opruimdag [...] doe je mee?",
        wrongHints: [
          null,
          "Er staat wel een feit in (zwerfvuil is gevaarlijk), maar waarvoor gebruikt de schrijver dat feit?",
          "Is dit geschreven om je te laten lachen of om mee te leven met een verhaal?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek wat de schrijver van je wil", tekst: "'Kom óók!', 'Doe je mee?' — de schrijver wil dat jij iets DOET: naar de opruimdag komen." },
            { titel: "Waarom staat dat feit erin?", tekst: "'Zwerfvuil is gevaarlijk voor kleine kinderen' is een argument: een reden waarom je zou moeten komen. Het feit staat in dienst van de oproep." },
            { titel: "Welk doel past?", tekst: "De lezer aansporen om iets te doen of ergens hetzelfde over te denken — dat is één van de vier doelen." },
          ],
          woorden: [
            { woord: "overtuigen", uitleg: "De lezer iets laten vinden of laten doen. Vaak met argumenten en aansporingen." },
            { woord: "argument", uitleg: "Een reden die de schrijver geeft om je mee te krijgen." },
            { woord: "aansporing", uitleg: "Een zin die je oproept iets te doen: 'kom ook!', 'doe mee!', 'koop nu!'." },
          ],
          theorie: "**Overtuigen herken je aan:**\n- aansporingen: 'kom!', 'doe mee!', 'stop met...'\n- meningen: 'ik vind', 'het is belangrijk dat'\n- argumenten: redenen waarom je iets zou moeten doen of vinden\n\nLet op: een overtuigende tekst mag best feiten bevatten. Kijk waar de feiten VOOR gebruikt worden — hier als reden om te komen helpen.",
          voorbeelden: [
            { type: "overtuigen", tekst: "'Neem de fiets naar school: het is gezond én goed voor de lucht.' — twee argumenten + een oproep." },
            { type: "vergelijk", tekst: "'Zwerfvuil bestaat vaak uit plastic.' — zonder oproep eromheen zou dit gewoon informeren zijn." },
          ],
          basiskennis: [
            { onderwerp: "Feit in een overtuigende tekst", uitleg: "Feiten maken een oproep sterker. Eén feit maakt een tekst dus nog niet informerend — kijk naar wat de schrijver ermee wil." },
          ],
          niveaus: {
            basis: "'Kom óók!' en 'doe je mee?' — wat wil de schrijver dat jij na het lezen doet?",
            simpeler: "Lees de eerste en de laatste zin. Allebei roepen ze je op om te komen helpen. De zin ertussen geeft de reden. Oproep + reden = welk doel?",
            nogSimpeler: "De schrijver wil jou zaterdag in die speeltuin zien staan. Welk doel hoort bij 'de lezer zover krijgen'?",
          },
        },
      },
      {
        q: "*\"Doe eerst de dop van de lijmstift. Draai de lijm een klein stukje omhoog. Smeer daarna dun langs de randen van het papier en druk tien tellen aan.\"* — Wat wil de schrijver?",
        options: ["Instrueren", "Informeren", "Overtuigen", "Amuseren"],
        answer: 0,
        evidence: "Doe eerst de dop van de lijmstift. [...] Smeer daarna dun langs de randen",
        wrongHints: [
          null,
          "De tekst legt niet uit hoe lijm wérkt — wat moet jij hier met je handen doen?",
          "Zie je een mening of een reden waarom lijmen beter zou zijn dan plakband?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar de werkwoorden", tekst: "'Doe', 'draai', 'smeer', 'druk' — allemaal opdrachten aan de lezer. Jij moet iets uitvoeren." },
            { titel: "Kijk naar de volgorde-woorden", tekst: "'Eerst' en 'daarna' — de stappen staan in een vaste volgorde. Dat is typisch voor een uitleg-hoe-je-iets-doet." },
            { titel: "Welk doel past?", tekst: "Stap voor stap vertellen hoe je iets moet doen — dat is één van de vier doelen. Denk aan een recept of een bouwbeschrijving." },
          ],
          woorden: [
            { woord: "instrueren", uitleg: "Stap voor stap uitleggen hoe je iets doet. Denk aan een recept of een gebruiksaanwijzing." },
            { woord: "volgorde-woorden", uitleg: "Woorden zoals 'eerst', 'dan', 'daarna', 'ten slotte'. Ze zetten stappen op een rij." },
          ],
          theorie: "**Instrueren herken je aan:**\n- opdracht-werkwoorden vooraan de zin: 'doe', 'pak', 'knip', 'roer'\n- volgorde-woorden: 'eerst', 'dan', 'daarna'\n- korte zinnen, elke zin één stap\n\n**Verschil met informeren:** een informerende tekst legt uit hoe iets ZIT ('lijm bestaat uit...'), een instruerende tekst zegt wat JIJ moet DOEN ('smeer de lijm...').",
          voorbeelden: [
            { type: "instrueren", tekst: "'Klop twee eieren los. Voeg de melk toe. Bak het mengsel drie minuten.' — recept, elke zin één stap." },
            { type: "vergelijk", tekst: "'Een ei bevat veel eiwit.' — dit is een feit over eieren, geen stap. Ander doel dus." },
          ],
          basiskennis: [
            { onderwerp: "Instructie zonder plaatjes", uitleg: "Ook zonder genummerde lijst of plaatjes kan een tekst instruerend zijn. De opdracht-werkwoorden en volgorde-woorden verraden het." },
          ],
          niveaus: {
            basis: "'Doe', 'draai', 'smeer', 'druk' + 'eerst' en 'daarna' — de tekst geeft jou stappen. Welk doel hoort daarbij?",
            simpeler: "Stel je voor dat je dit tekstje volgt met een lijmstift in je hand. Het vertelt je precies wat je wanneer moet doen. Hoe heet een tekst die dat doet?",
            nogSimpeler: "Denk aan een recept: dat vertelt je ook stap voor stap wat je moet doen. Welk doel heeft zo'n tekst?",
          },
        },
      },
      {
        q: "*\"Opa's kunstgebit vloog met een sierlijke boog het aquarium in. De goudvis staarde er verbaasd naar. 'Tja,' zei opa, 'die vis lacht nu breder dan ik.'\"* — Wat wil de schrijver?",
        options: ["Amuseren", "Informeren", "Instrueren", "Overtuigen"],
        answer: 0,
        wrongHints: [
          null,
          "Leer je hier echte feiten over goudvissen of kunstgebitten? Of is het verzonnen?",
          "Moet jij hier stappen uitvoeren?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat voor tekst is dit?", tekst: "Een verhaaltje: er gebeurt iets geks (kunstgebit in het aquarium) en er is een personage (opa) die een grapje maakt." },
            { titel: "Wat wil de schrijver bij jou bereiken?", tekst: "Niet dat je iets leert, doet of vindt — de schrijver wil dat je glimlacht of het grappig vindt." },
            { titel: "Welk doel past?", tekst: "De lezer vermaken met een verhaal of grap — dat is één van de vier doelen." },
          ],
          woorden: [
            { woord: "amuseren", uitleg: "De lezer vermaken: laten lachen, meeleven of wegdromen. Vaak met een verhaal." },
            { woord: "personage", uitleg: "Een figuur in een verhaal, zoals opa in dit tekstje." },
          ],
          theorie: "**Amuseren herken je aan:**\n- een verhaal met personages en gebeurtenissen\n- grapjes, spanning of gevoelens\n- vaak verzonnen — het hoeft niet echt gebeurd te zijn\n- dialoog: personages die iets zeggen ('Tja,' zei opa)\n\nDe schrijver vraagt niets van je. Je mag gewoon genieten.",
          voorbeelden: [
            { type: "amuseren", tekst: "'De kat van de buren opende de koelkast alsof hij dat elke dag deed.' — gek, verzonnen, bedoeld om te vermaken." },
            { type: "vergelijk", tekst: "'Katten slapen zestien uur per dag.' — een feit. Zelfde onderwerp, heel ander doel." },
          ],
          basiskennis: [
            { onderwerp: "Vermaken mag ook spannend of verdrietig zijn", uitleg: "Amuseren betekent niet alleen 'grappig'. Ook een spannend of ontroerend verhaal heeft als doel de lezer te vermaken." },
          ],
          niveaus: {
            basis: "Verzonnen gebeurtenis + personage + grapje = de schrijver wil je vermaken. Welk woord hoort daarbij?",
            simpeler: "Wat doe jij als lezer na dit tekstje? Je lacht (of grinnikt). Je hoeft niets te leren, kopen of maken. Welk doel hoort bij 'de lezer laten lachen'?",
            nogSimpeler: "Denk aan een moppenboek: waarom lees je dat? Datzelfde doel heeft dit tekstje.",
          },
        },
      },
      {
        q: "*\"Knip het papier langs de stippellijn. Vouw daarna langs de streepjeslijn. Plak de twee randen op elkaar.\"* — Welk doel heeft deze tekst?",
        options: ["Instrueren", "Informeren", "Amuseren", "Overtuigen"],
        answer: 0,
        wrongHints: [
          null,
          "Er staan geen feiten over hoe papier werkt — wat moet JIJ doen?",
          "Is er een verhaal of een grap? Kijk naar de werkwoorden vooraan de zinnen.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar de werkwoorden", tekst: "'Knip', 'vouw', 'plak' — drie opdrachten, elk aan het begin van een zin. Die werkwoorden vertellen jou wat je moet doen." },
            { titel: "Kijk naar de volgorde", tekst: "'Daarna', 'dan' — de stappen staan op volgorde. Dat is typisch voor een handleiding of bouwinstructie." },
            { titel: "Welk doel?", tekst: "Stappen geven in een vaste volgorde zodat jij iets kunt maken = instrueren." },
          ],
          niveaus: {
            basis: "'Knip', 'vouw', 'plak': wat moet jij doen? Welk doel hoort bij stap-voor-stap-opdrachten?",
            simpeler: "Volg je hier een verhaal, leer je iets, of moet je zelf iets knippen en vouwen?",
            nogSimpeler: "Denk aan de stappen bij het opbouwen van speelgoed. Hoe heet een tekst die zulke stappen geeft?",
          },
        },
      },
      {
        q: "*\"De leeuw is de grootste kat van Afrika. Alleen de tijger is groter. Een leeuw kan wel 250 kilo wegen.\"* — Wat wil de schrijver?",
        options: ["Informeren", "Overtuigen", "Amuseren", "Instrueren"],
        answer: 0,
        wrongHints: [
          null,
          "Staat er een mening of een aansporing om iets te doen?",
          "Is er een verhaal met personages, spanning of een grap?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat staat er?", tekst: "Feiten: de leeuw is de grootste Afrikaanse kat, de tijger is groter, hij weegt 250 kilo. Alleen feiten, geen mening, geen verhaal, geen opdracht." },
            { titel: "Wat wil de schrijver?", tekst: "Na het lezen weet jij iets nieuws over leeuwen. De schrijver wil dat je iets leert." },
            { titel: "Doel", tekst: "Feiten geven zodat de lezer iets leert = informeren." },
          ],
          niveaus: {
            basis: "Drie feiten over de leeuw — geen mening, geen opdracht, geen grap. Welk doel past?",
            simpeler: "Wat doe jij na het lezen — weet je iets nieuws, moet je iets kopen, of lach je?",
            nogSimpeler: "De schrijver wil dat je na het lezen iets wéét over leeuwen. Welk woord hoort daarbij?",
          },
        },
      },
      {
        q: "Op de Doorstroomtoets staat: *\"Waarom heeft de schrijver deze tekst geschreven?\"* Waar let je dan het BEST op?",
        options: [
          "Op wat de schrijver bij de lezer wil bereiken",
          "Op hoeveel alinea's de tekst heeft",
          "Op hoe moeilijk de woorden zijn",
          "Op wie de tekst heeft geschreven",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Zegt het aantal alinea's iets over de bedoeling van de schrijver?",
          "Moeilijke woorden vertellen je iets over de doelgroep — maar is dat hetzelfde als het doel?",
          "De naam van de schrijver staat er vaak niet eens bij. Wat kun je wél uit de tekst zelf halen?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Doel = bedoeling", tekst: "'Waarom geschreven?' vraagt naar de BEDOELING: wat moet er met jou als lezer gebeuren? Iets weten, iets vinden/doen, lachen, of iets maken." },
            { titel: "Zoek de signalen", tekst: "Feiten en getallen → informeren. Mening + oproep → overtuigen. Verhaal + personages → amuseren. Stappen + opdracht-werkwoorden → instrueren." },
            { titel: "Kies het HOOFDdoel", tekst: "Soms zit er van alles een beetje in. Vraag dan: wat wil de schrijver het ALLERliefst bereiken? Dat is het antwoord op de toets." },
          ],
          woorden: [
            { woord: "schrijversdoel", uitleg: "Wat de schrijver bij de lezer wil bereiken. Ook wel 'tekstdoel' genoemd." },
            { woord: "signaal", uitleg: "Een aanwijzing in de tekst die het doel verraadt, zoals 'doe mee!' of 'eerst... daarna...'." },
          ],
          theorie: "**Spiekbriefje — de vier doelen en hun signalen:**\n\n| Doel | De schrijver wil dat jij... | Signalen |\n|---|---|---|\n| Informeren | iets wéét | feiten, getallen, uitleg |\n| Overtuigen | iets vindt of doet | mening, argumenten, 'doe mee!' |\n| Amuseren | geniet | verhaal, personages, grapjes |\n| Instrueren | iets maakt/uitvoert | stappen, 'eerst... daarna...' |",
          voorbeelden: [
            { type: "toets-tip", tekst: "Toetsvraag: 'Waarom schreef de schrijver dit?' → zoek eerst de signalen, kies dan het doel. Niet gokken op het onderwerp." },
          ],
          basiskennis: [
            { onderwerp: "Doel en doelgroep zijn twee aparte vragen", uitleg: "'Waarom geschreven?' = doel. 'Voor wie geschreven?' = doelgroep. De toets stelt ze allebei — haal ze niet door elkaar." },
          ],
          niveaus: {
            basis: "'Waarom geschreven?' = wat is de bedoeling van de schrijver met jou als lezer?",
            simpeler: "De vraag gaat over de schrijver zelf: wat wilde hij bereiken toen hij ging schrijven? Dat lees je af aan de signalen in de tekst, niet aan de lengte of de naam.",
            nogSimpeler: "Doel betekent bedoeling. Bij welke van de vier opties gaat het over de bedoeling?",
          },
        },
      },
    ],
  },

  // ── Stap 2: Voor wie is dit geschreven? ─────────────────────────
  {
    title: "Voor wie is dit geschreven?",
    explanation:
      "Naast het doel heeft elke tekst ook een **doelgroep**: de lezers voor wie de schrijver de tekst bedoelde. Op de Doorstroomtoets klinkt die vraag zo: *\"Voor wie is deze tekst bedoeld?\"*\n\n" +
      "Je herkent de doelgroep aan drie aanwijzingen:\n\n" +
      "1. **De aanspreekvorm** — zegt de schrijver **jij/je** (vaak voor kinderen of jongeren) of **u** (voor volwassenen)? Of spreekt hij niemand direct aan (voor een breed publiek)?\n" +
      "2. **De woordkeus** — korte, makkelijke woorden en uitroeptekens passen bij kinderen. Lange of deftige woorden zoals 'motoriek' of 'aanmeldprocedure' passen bij volwassenen.\n" +
      "3. **Het onderwerp** — een tekst over zakgeld sparen past bij kinderen; een tekst over kinderopvang past bij ouders; een tekst over het weer kan voor iedereen zijn.\n\n" +
      "**Let op:** het onderwerp alleen is niet genoeg! Een tekst over speelgoed kan óók voor ouders bedoeld zijn — bijvoorbeeld als er staat: *\"Zo kiest u veilig speelgoed voor uw kind.\"* Kijk dus altijd naar alle drie de aanwijzingen samen.\n\n" +
      "*Lees bij elke vraag het mini-tekstje en bepaal de doelgroep.*",
    checks: [
      {
        q: "*\"Yes, vakantie! Verveel jij je weleens in de auto? Met dit spelletje niet meer: tel alle rode auto's die je ziet. Wie er het eerst tien heeft, wint!\"* — Voor wie is dit bedoeld?",
        options: ["Kinderen", "Ouders", "Automonteurs", "Buschauffeurs"],
        answer: 0,
        evidence: "Verveel jij je weleens in de auto?",
        wrongHints: [
          null,
          "Kijk naar de aanspreekvorm: staat er 'jij' of 'u'? En wie speelt er spelletjes op de achterbank?",
          "Gaat de tekst over het repareren van auto's?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar de aanspreekvorm", tekst: "'Verveel JIJ je weleens' — de schrijver zegt 'jij', niet 'u'. Dat past bij jonge lezers." },
            { titel: "Kijk naar de woordkeus", tekst: "'Yes!', korte zinnen, uitroeptekens, een spelletje — vrolijke, makkelijke taal." },
            { titel: "Kijk naar het onderwerp", tekst: "Je vervelen op de achterbank en een telspelletje spelen — wie doet dat tijdens een autorit?" },
          ],
          woorden: [
            { woord: "doelgroep", uitleg: "De groep lezers voor wie de schrijver de tekst bedoelde." },
            { woord: "aanspreekvorm", uitleg: "Hoe de schrijver de lezer aanspreekt: met 'jij/je', met 'u', of helemaal niet." },
          ],
          theorie: "**Doelgroep bepalen — drie checks:**\n1. Aanspreekvorm: 'jij' → vaak kinderen/jongeren; 'u' → volwassenen.\n2. Woordkeus: makkelijk en vrolijk → kinderen; deftig en lang → volwassenen.\n3. Onderwerp: voor wie is dit interessant of nuttig?\n\nAlle drie wijzen ze hier dezelfde kant op.",
          voorbeelden: [
            { type: "kinderen", tekst: "'Wist jij dat je tong ongeveer tienduizend smaakpapillen heeft? Gaaf hè!' — jij-vorm + 'gaaf' = voor kinderen." },
            { type: "volwassenen", tekst: "'Wilt u uw kind rustig laten wennen aan de nieuwe school? Plan dan een kennismakingsgesprek.' — u-vorm + onderwerp voor ouders." },
          ],
          basiskennis: [
            { onderwerp: "Doelgroep staat er nooit letterlijk", uitleg: "Een tekst zegt zelden 'dit is voor kinderen'. Je leidt het af uit aanspreekvorm, woordkeus en onderwerp." },
          ],
          niveaus: {
            basis: "'Jij'-vorm + vrolijke taal + spelletje voor op de achterbank — welke lezers passen daarbij?",
            simpeler: "Wie verveelt zich op de achterbank en wil een telspelletje doen: een volwassene achter het stuur of iemand van jouw leeftijd? De 'jij'-vorm helpt je ook.",
            nogSimpeler: "Voor wie schrijf je 'Yes, vakantie!' met een spelletje erbij? Denk aan wie er op de achterbank zit.",
          },
        },
      },
      {
        q: "*\"Wilt u dat uw kind met plezier leert zwemmen? Kies dan een zwemschool met kleine groepen. Vraag ook naar de wachtlijst en de diplomagarantie.\"* — Voor wie is dit bedoeld?",
        options: ["Ouders", "Kinderen die op zwemles zitten", "Badmeesters", "Iedereen die kan zwemmen"],
        answer: 0,
        evidence: "Wilt u dat uw kind met plezier leert zwemmen?",
        wrongHints: [
          null,
          "Er staat 'u' en 'uw kind' — hoort de lezer zélf op zwemles te zitten, of kiest de lezer een zwemschool voor iemand anders?",
          null,
          "Zou iemand zonder kind iets hebben aan tips over het kiezen van een zwemschool?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar de aanspreekvorm", tekst: "'Wilt U dat UW kind...' — de u-vorm wijst op volwassenen." },
            { titel: "Kijk naar de rol van de lezer", tekst: "De lezer moet een zwemschool KIEZEN voor een kind. Wie neemt zo'n beslissing?" },
            { titel: "Kijk naar de woordkeus", tekst: "'Wachtlijst', 'diplomagarantie' — woorden uit de wereld van volwassenen die iets regelen." },
          ],
          woorden: [
            { woord: "u-vorm", uitleg: "De beleefde aanspreekvorm. Schrijvers gebruiken 'u' voor volwassenen die ze niet persoonlijk kennen." },
            { woord: "diplomagarantie", uitleg: "Een belofte van de zwemschool: je kind haalt het diploma, anders zijn extra lessen gratis." },
          ],
          theorie: "**Belangrijke valkuil op de toets:** het onderwerp gaat over KINDEREN (zwemles), maar de tekst is voor OUDERS bedoeld. Kijk niet alleen naar waar de tekst over gaat — kijk naar wie 'm moet lezen en er iets mee moet doen.\n\nVuistregel: wie moet er na het lezen iets beslissen of regelen? Dát is de doelgroep.",
          voorbeelden: [
            { type: "valkuil", tekst: "'Zo helpt u uw kind bij het huiswerk' — over kinderen, maar vóór ouders. De u-vorm en de rol (helpen bij huiswerk) verraden het." },
            { type: "vergelijk", tekst: "'Zwemmen is superleuk! Neem jij je duikbril mee?' — zelfde onderwerp, maar door de jij-vorm en de toon nu wél voor kinderen." },
          ],
          basiskennis: [
            { onderwerp: "Onderwerp ≠ doelgroep", uitleg: "Een tekst over kinderen is niet automatisch voor kinderen. Vraag: wie moet dit lezen en ernaar handelen?" },
          ],
          niveaus: {
            basis: "'U' + 'uw kind' + de lezer moet een zwemschool kiezen — wie doet dat?",
            simpeler: "De lezer heeft zelf een kind ('uw kind') en moet een zwemschool uitzoeken, naar de wachtlijst vragen en op de kosten letten. Wie regelt zulke dingen in een gezin?",
            nogSimpeler: "Wie kiest er thuis de zwemschool en betaalt de lessen? Die persoon moet deze tekst lezen.",
          },
        },
      },
      {
        q: "*\"Morgen begint droog, maar in de middag trekken er buien over het land. De temperatuur ligt rond de achttien graden. Neem voor de zekerheid een jas mee.\"* — Voor wie is dit bedoeld?",
        options: ["Iedereen — een breed publiek", "Alleen kinderen", "Alleen boeren", "Alleen piloten"],
        answer: 0,
        wrongHints: [
          null,
          "Staat er iets in dat alléén voor kinderen interessant is? Let op: er staat geen 'jij' of 'u'.",
          "Boeren hebben wel iets aan het weer, maar staat er iets dat alléén voor hen bedoeld is?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar de aanspreekvorm", tekst: "Geen 'jij', geen 'u' — de schrijver spreekt niemand persoonlijk aan. Dat is een teken van een breed publiek." },
            { titel: "Kijk naar het onderwerp", tekst: "Het weer van morgen. Wie heeft daar iets aan? Jong en oud, iedereen die naar buiten gaat." },
            { titel: "Kijk naar de woordkeus", tekst: "Gewone woorden die iedereen kent: 'buien', 'temperatuur', 'jas'. Geen vaktaal voor één beroep." },
          ],
          woorden: [
            { woord: "breed publiek", uitleg: "Een doelgroep van 'iedereen': de tekst is niet op één groep gericht." },
            { woord: "vaktaal", uitleg: "Moeilijke woorden uit één beroep. Als die ontbreken, is de tekst meestal voor iedereen." },
          ],
          theorie: "**Wanneer is de doelgroep 'iedereen'?**\n- niemand wordt persoonlijk aangesproken (of heel neutraal)\n- het onderwerp is voor jong en oud nuttig (weer, nieuws, verkeer)\n- de woorden zijn voor iedereen te begrijpen\n\nOp de toets is 'iedereen' een serieuze antwoordoptie — kies 'm alleen als de tekst écht nergens op één groep mikt.",
          voorbeelden: [
            { type: "breed", tekst: "Een nieuwsbericht over een nieuwe brug in het dorp — voor alle dorpsbewoners, jong en oud." },
            { type: "smal", tekst: "'Speciaal voor bakkers: nieuw deegmes met extra grip' — hier mikt de schrijver wél op één beroepsgroep." },
          ],
          basiskennis: [
            { onderwerp: "Niet elke tekst heeft een smalle doelgroep", uitleg: "Weerberichten, nieuwsberichten en borden in de bibliotheek zijn vaak voor iedereen. Dat is dan gewoon het goede antwoord." },
          ],
          niveaus: {
            basis: "Geen 'jij' of 'u', gewone woorden, onderwerp voor jong en oud — wat zegt dat over de doelgroep?",
            simpeler: "Wie wil er weten of het morgen gaat regenen? Je opa, je juf, jijzelf, de buurvrouw... De tekst sluit niemand uit.",
            nogSimpeler: "Als een tekst voor je opa én je kleine zusje nuttig is, hoe noem je de doelgroep dan?",
          },
        },
      },
      {
        q: "*\"Beste ouders, wij nodigen u uit voor de ouderavond op 15 september. Graag uw aanmelding vóór 10 september.\"* — Voor wie is dit bedoeld?",
        options: ["Ouders", "Kinderen", "Leraren", "Iedereen"],
        answer: 0,
        wrongHints: [
          null,
          "Wie nodigt de school op een ouderavond uit — de leerlingen, of degenen die voor hen zorgen?",
          "Leraren zouden intern een mail krijgen — voor wie is dit bericht bedoeld?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Check de aanspreekvorm", tekst: "'Beste ouders' + 'u' — dit zijn drie aanwijzingen in één: de schrijver noemt de doelgroep zelfs bij naam." },
            { titel: "Check het onderwerp", tekst: "Een ouderavond is een avond waarvoor ouders of verzorgers worden uitgenodigd, niet leerlingen." },
            { titel: "Conclusie", tekst: "Aangesproken als 'ouders' + u-vorm + ouderavond → doelgroep is ouders." },
          ],
          niveaus: {
            basis: "De doelgroep wordt letterlijk bij naam genoemd. Wie?",
            simpeler: "Wie gaat er op een ouderavond — jij of je vader/moeder/verzorger?",
            nogSimpeler: "Lees de eerste twee woorden: voor wie schrijft de school dit?",
          },
        },
      },
      {
        q: "*\"Heb jij weleens zin in iets lekkers maar wil je geen suiker? Probeer dan eens een stuk fruit. Een appel of een peer geeft je ook energie!\"* — Voor wie is dit bedoeld?",
        options: ["Kinderen of jongeren", "Ouders", "Tandartsen", "Boeren"],
        answer: 0,
        wrongHints: [
          null,
          "De aanspreekvorm 'jij' en 'jou' past bij welke groep?",
          "Gaat het over tanden of over een beroep? Kijk naar wat de lezer móét doen.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Aanspreekvorm", tekst: "'Heb JIJ weleens zin...' — jij-vorm. Dat past bij jonge lezers." },
            { titel: "Woordkeus", tekst: "Korte zinnen, makkelijke woorden, uitroepteken. Uitleg van een appel als energiebron — voor wie heeft dat nut?" },
            { titel: "Onderwerp + doelgroep", tekst: "Snacken en energie zijn relevant voor alle leeftijden. Maar de jij-vorm en de speelse toon wijzen op kinderen of jongeren." },
          ],
          niveaus: {
            basis: "De schrijver gebruikt 'jij'. Voor welke leeftijdsgroep past die toon het best?",
            simpeler: "Vergelijk met de ouderavond-tekst: wat is anders in de aanspreekvorm?",
            nogSimpeler: "Wie wordt aangesproken met 'jij' — een volwassene of iemand van jouw leeftijd?",
          },
        },
      },
      {
        q: "Aan WELKE aanwijzing zie je het snelst dat een tekst voor volwassenen is bedoeld?",
        options: [
          "De schrijver gebruikt 'u' en deftige woorden",
          "De tekst heeft veel alinea's",
          "De tekst staat in een boek",
          "De tekst heeft een titel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kinderboeken kunnen ook veel alinea's hebben — zegt de lengte iets over de lezer?",
          "Er bestaan boeken voor alle leeftijden. Wat staat er ín de tekst zelf?",
          "Bijna elke tekst heeft een titel. Waar verschillen teksten voor kinderen en volwassenen écht in?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat verraadt de doelgroep?", tekst: "Niet de buitenkant (lengte, titel, waar de tekst staat), maar de TAAL: hoe spreekt de schrijver je aan en welke woorden kiest hij?" },
            { titel: "De u-vorm", tekst: "'U' is de beleefde vorm voor volwassenen. Tegen kinderen zegt een schrijver bijna altijd 'jij' of 'je'." },
            { titel: "De woordkeus", tekst: "'Aanmeldprocedure', 'contributie', 'motoriek' — zulke woorden gebruikt een schrijver alleen als hij volwassen lezers verwacht." },
          ],
          woorden: [
            { woord: "deftige woorden", uitleg: "Lange, formele woorden zoals 'aanmeldprocedure'. Signaal dat de tekst voor volwassenen is." },
          ],
          theorie: "**Snelste route naar de doelgroep:**\n1. Scan op 'jij' of 'u' — dat kost twee seconden.\n2. Vind je geen aanspreekvorm? Kijk dan naar de woordkeus.\n3. Nog steeds twijfel? Bedenk wie er iets aan het onderwerp heeft.\n\nDe aanspreekvorm is de sterkste aanwijzing, want die kiest een schrijver heel bewust.",
          voorbeelden: [
            { type: "u-vorm", tekst: "'Meldt u uw kind vóór 1 maart aan.' — u-vorm + regel-taal = voor ouders/volwassenen." },
            { type: "jij-vorm", tekst: "'Meld je snel aan, vol = vol!' — jij-vorm + uitroepteken = voor jonge lezers." },
          ],
          basiskennis: [
            { onderwerp: "Waarom kiest een schrijver bewust?", uitleg: "Een schrijver past zijn taal aan zijn lezers aan — anders haakt de lezer af. Daarom is de taal zo'n betrouwbare aanwijzing." },
          ],
          niveaus: {
            basis: "De buitenkant (lengte, titel) zegt niets — de taal ín de tekst wel. Welke optie gaat over de taal?",
            simpeler: "Drie opties gaan over de buitenkant van een tekst. Eén optie gaat over hoe de schrijver de lezer aanspreekt en welke woorden hij kiest. Dat laatste verraadt de doelgroep.",
            nogSimpeler: "Hoe praat je tegen de burgemeester en hoe tegen je beste vriend? Precies dat verschil zoekt de vraag.",
          },
        },
      },
    ],
  },

  // ── Stap 3: Verstopte doelen — reclame ──────────────────────────
  {
    title: "Verstopte doelen — reclame die informeert",
    explanation:
      "Sommige teksten hebben een **verstopt doel**. Een reclamefolder kan er bijvoorbeeld uitzien als een informerende tekst: vol feiten, onderzoeken en tips. Maar het échte doel is **overtuigen** — de schrijver wil dat je iets koopt.\n\n" +
      "Zo ontmasker je een verstopt doel:\n" +
      "- **Wie heeft de tekst gemaakt?** Een winkel of merk verdient aan jouw aankoop.\n" +
      "- **Waar sturen de feiten naartoe?** Als alle informatie eindigt bij één product, staan de feiten in dienst van de verkoop.\n" +
      "- **Let op koop-signalen**: 'nu in de winkel', 'op = op', 'gratis bij aankoop', 'wees er snel bij'.\n\n" +
      "Op de Doorstroomtoets heet dit een tekst met een **dubbel doel**: hij informeert een beetje, maar wil vooral overtuigen. Kies dan altijd het doel waar de tekst je uiteindelijk naartoe duwt.\n\n" +
      "Lees nu deze folder van de (verzonnen) supermarkt De Knabbelhoek:\n\n" +
      folderTekst +
      "\n\n*Beantwoord de vragen over deze folder.*",
    checks: [
      {
        q: "Wat is het BELANGRIJKSTE doel van deze folder?",
        options: [
          "Je overhalen om Ochtendkracht te kopen",
          "Je informeren over onderzoek naar ontbijten",
          "Je vermaken met een verhaal over ontbijt",
          "Je stap voor stap leren hoe je ontbijt maakt",
        ],
        answer: 0,
        evidence: "Haal deze week een pak Ochtendkracht bij supermarkt De Knabbelhoek en ontvang een gratis ontbijtbeker.",
        wrongHints: [
          null,
          "De eerste alinea informeert inderdaad — maar lees de laatste alinea: waar wil de tekst dat jij heen gaat?",
          null,
          "Zie je genummerde stappen of opdracht-werkwoorden zoals 'pak' en 'roer'?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Lees de eerste alinea", tekst: "Feiten over ontbijten en concentratie. Dat LIJKT informeren — en dat is precies de bedoeling van de maker." },
            { titel: "Lees de laatste alinea", tekst: "'Haal deze week een pak...', 'op = op', 'kies voor Ochtendkracht'. Dat zijn koop-signalen: de tekst wil dat je naar de winkel gaat." },
            { titel: "Wat is dan het hóófddoel?", tekst: "De feiten uit alinea 1 zijn de aanloop; de verkoop in alinea 3 is het eindpunt. Het doel waar de tekst je naartoe duwt, telt." },
          ],
          woorden: [
            { woord: "dubbel doel", uitleg: "Een tekst die twee doelen combineert, bijvoorbeeld informeren én overtuigen. Eén doel is meestal het belangrijkst." },
            { woord: "koop-signaal", uitleg: "Een zin die je richting de kassa duwt: 'op = op', 'nu in de winkel', 'gratis bij aankoop'." },
          ],
          theorie: "**Reclame-truc: eerst feiten, dan verkopen.**\n\nMakers van reclame weten dat je feiten eerder gelooft dan reclamepraat. Daarom beginnen ze met echte informatie (ontbijt is belangrijk) en eindigen ze met hun product (koop Ochtendkracht).\n\n**Toets-regel:** bij een dubbel doel kies je het doel van het SLOT en van de maker. Een supermarkt schrijft geen folder om je gratis les te geven.",
          voorbeelden: [
            { type: "ontmaskeren", tekst: "Folder van een sportwinkel: 'Bewegen is gezond (feit)... daarom nu 20% korting op sportschoenen (verkoop).' Hoofddoel = overtuigen." },
            { type: "echt-informeren", tekst: "Een schoolboek-tekst over ontbijten noemt géén merk en géén winkel. Dan is informeren wél het hoofddoel." },
          ],
          basiskennis: [
            { onderwerp: "Kijk naar de afzender", uitleg: "Vraag je altijd af: wie heeft deze tekst gemaakt en wat levert het hem op? Een winkel verdient aan jouw aankoop." },
          ],
          niveaus: {
            basis: "Alinea 1 = feiten, alinea 3 = 'haal deze week een pak'. Welk doel wint er als een tekst je naar de winkel stuurt?",
            simpeler: "Stel: je gelooft alles in deze folder. Wat doe je dan morgen? Juist — naar De Knabbelhoek om Ochtendkracht te kopen. Dát wilde de maker bereiken.",
            nogSimpeler: "Wie schreef dit: een juf of een supermarkt? En wat wil een supermarkt het allerliefst dat jij doet?",
          },
        },
      },
      {
        q: "Welke zin uit de folder is een duidelijk KOOP-signaal?",
        options: [
          "\"Op = op, dus wees er snel bij.\"",
          "\"Na een nacht slapen is je energievoorraad bijna op.\"",
          "\"Een goed ontbijt bevat granen, fruit en zuivel.\"",
          "\"Wie ontspannen eet, begint fitter aan de dag.\"",
        ],
        answer: 0,
        evidence: "Op = op, dus wees er snel bij.",
        wrongHints: [
          null,
          "Dit is een feit over je lichaam. Duwt deze zin je richting de winkel?",
          "Dit is een gezondheidstip die overal kan staan. Welke zin maakt je haastig om te gaan kopen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat doet een koop-signaal?", tekst: "Het zet je aan tot kopen — vaak met haast ('op = op', 'alleen deze week') of een cadeautje ('gratis ontbijtbeker')." },
            { titel: "Toets elke zin", tekst: "Vraag per zin: word ik hier iets wijzer (feit) of word ik hier richting de kassa geduwd (koop-signaal)?" },
            { titel: "Waarom haast?", tekst: "'Op = op' geeft je het gevoel dat je iets misloopt als je wacht. Zo hoef je niet rustig na te denken — precies wat de verkoper wil." },
          ],
          woorden: [
            { woord: "schaarste-truc", uitleg: "Doen alsof iets bijna op is ('op = op', 'nog maar 3 stuks!') zodat je snel koopt zonder na te denken." },
          ],
          theorie: "**Bekende koop-signalen in folders:**\n- haast: 'op = op', 'alleen deze week', 'wees er snel bij'\n- cadeau: 'gratis ... bij aankoop'\n- vleierij: 'jij verdient het beste'\n- bevel: 'kies voor...', 'haal nu...'\n\nFeiten en tips kunnen in élke tekst staan; koop-signalen staan alleen in teksten die willen verkopen.",
          voorbeelden: [
            { type: "koop-signaal", tekst: "'Alleen dit weekend: tweede pak halve prijs!' — haast + aanbieding = koop-signaal." },
            { type: "feit", tekst: "'Volkoren granen bevatten vezels.' — kan in een schoolboek staan. Geen koop-signaal." },
          ],
          basiskennis: [
            { onderwerp: "Eén zin kan het doel verraden", uitleg: "Op de toets kun je het verstopte doel vaak bewijzen met één zin. Zoek de zin die alleen in reclame past." },
          ],
          niveaus: {
            basis: "Drie zinnen zijn feiten of tips. Eén zin maakt je haastig om te gaan kopen. Welke geeft je dat 'snel-snel'-gevoel?",
            simpeler: "Stel je leest elke zin hardop voor in de klas. Drie zinnen klinken als een spreekbeurt. Eén zin klinkt als een marktkoopman. Die zoek je.",
            nogSimpeler: "Welke zin zou een juf nóóit in een leestekst zetten, maar een winkel wél in een folder?",
          },
        },
      },
      {
        q: "WAAROM begint de folder met feiten over ontbijten en concentratie?",
        options: [
          "Zo lijkt de folder betrouwbaar, waardoor je de reclame eerder gelooft",
          "Omdat de schrijver per ongeluk twee teksten door elkaar haalde",
          "Omdat een folder altijd met een onderzoek moet beginnen",
          "Om kinderen te leren hoe hersenen precies werken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Reclamemakers doen zelden iets per ongeluk — elke zin is gekozen. Waarom deze volgorde?",
          "Bestaat er een regel die dat verplicht? Of is het een keuze van de maker?",
          "Als dat het doel was, waarom eindigt de folder dan bij één product van één merk?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Denk als de maker", tekst: "Een folder die meteen roept 'KOOP ONS PRODUCT!' geloof je niet zo snel. Een folder die begint met een onderzoek klinkt slim en eerlijk." },
            { titel: "De feiten zijn het lokkertje", tekst: "Eerst denk je: 'goh, interessant, ontbijten is belangrijk'. Daarna denk je vanzelf: 'dan is dat ontbijtproduct vast een goed idee'." },
            { titel: "Dit heet een verstopt doel", tekst: "De informerende opening is een middel; het overtuigen is het doel. De toets vraagt of jij daar doorheen kijkt." },
          ],
          woorden: [
            { woord: "betrouwbaar", uitleg: "Te geloven, te vertrouwen. Reclame probeert betrouwbaar te lijken door feiten te gebruiken." },
            { woord: "lokkertje", uitleg: "Iets aantrekkelijks aan het begin dat je de rest in trekt — hier: interessante feiten." },
          ],
          theorie: "**Waarom werkt feiten-eerst-reclame?**\n\nMensen zijn op hun hoede bij reclame. Maar bij feiten ('onderzoekers zagen dat...') zakt die waakzaamheid. Als daarna het product komt, sta je er al positief in.\n\n**Zo prik je erdoorheen:** check of de feiten óók zouden kloppen zonder het product. Ontbijten is belangrijk — maar daarvoor heb je echt geen Ochtendkracht nodig. Een boterham kan ook.",
          voorbeelden: [
            { type: "doorprikken", tekst: "'Tandartsen adviseren twee keer per dag poetsen. Daarom: de nieuwe FrisFlits-borstel!' — het advies klopt, maar geldt voor élke tandenborstel." },
          ],
          basiskennis: [
            { onderwerp: "Feit ≠ bewijs voor het product", uitleg: "Een waar feit over ontbijten bewijst niet dat één bepaald merk het beste is. Reclame plakt die twee stiekem aan elkaar." },
          ],
          niveaus: {
            basis: "Een folder vol geschreeuw geloof je niet; een folder met een onderzoek wel. Wat schiet de maker daarmee op?",
            simpeler: "Vergelijk: 'KOOP DIT!' tegenover 'Onderzoekers zeggen dat ontbijt belangrijk is... koop dit.' Welke van de twee klinkt geloofwaardiger — en wie profiteert daarvan?",
            nogSimpeler: "De feiten zijn het vriendelijke gezicht van de folder. Wat verstopt zich erachter?",
          },
        },
      },
      {
        q: "Waarom is de zin 'Ochtendkracht bevat zes verschillende granen' in een reclame-folder opgenomen?",
        options: [
          "Om de folder betrouwbaarder te laten klinken zodat je het product eerder koopt",
          "Omdat de schrijver kinderen iets over granen wil leren",
          "Omdat de wet verplicht dit op verpakkingen te zetten",
          "Omdat de schrijver per ongeluk te veel informatie gaf",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een schoolboek leert je over granen — maar wat wil een reclame-folder bereiken?",
          "Verpakkingstekst en een folder zijn verschillende dingen. Kijk naar het doel van de folder.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wie maakte de folder?", tekst: "Een supermarkt die het product verkoopt. Elk stukje informatie staat er om je richting de koop te sturen." },
            { titel: "Waarom granen noemen?", tekst: "Zes granen klinkt indrukwekkend en gezond. Het doel: jij denkt 'dat is een goed product', en koopt het eerder." },
            { titel: "Feit in dienst van verkoop", tekst: "Het feit klopt misschien — maar het is niet neutraal. Het staat er om te overtuigen, niet om je te onderwijzen." },
          ],
          niveaus: {
            basis: "De folder wil je laten kopen. Welk doel heeft dit feit dan — leren of overtuigen?",
            simpeler: "Stel je bent de maker van de folder. Zet jij informatie erin om de lezer slimmer te maken, of om hem te laten kopen?",
            nogSimpeler: "In een reclame staat informatie om jou te laten ... wat?",
          },
        },
      },
      {
        q: "De folder zegt 'je hersenen' en 'jij straks ook', maar wie moet er uiteindelijk vooral iets DOEN volgens de tekst?",
        options: [
          "Degene die boodschappen doet — die moet het pak kopen",
          "De juf — die moet het in de klas uitdelen",
          "De onderzoekers — die moeten verder onderzoeken",
          "De goudvis — die moet het opeten",
        ],
        answer: 0,
        evidence: "Haal deze week een pak Ochtendkracht bij supermarkt De Knabbelhoek",
        wrongHints: [
          null,
          "Wordt school of de juf ergens in de folder genoemd?",
          "De onderzoekers worden alleen gebruikt om de folder betrouwbaar te laten klinken. Wie moet er naar de winkel?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de opdracht in de tekst", tekst: "'HAAL deze week een pak Ochtendkracht bij De Knabbelhoek.' Dat is wat de folder wil dat er gebeurt: kopen." },
            { titel: "Wie voert dat uit?", tekst: "Kinderen worden aangesproken ('jij straks ook!'), maar wie staat er met de portemonnee bij de kassa? Degene die de boodschappen doet." },
            { titel: "Slimme dubbele doelgroep", tekst: "De folder mikt op kinderen (die gaan zeuren om het product) én op de volwassene die betaalt. Reclame doet dit heel vaak." },
          ],
          woorden: [
            { woord: "dubbele doelgroep", uitleg: "Reclame die twee groepen tegelijk aanspreekt: het kind dat het wil hébben en de volwassene die het moet kópen." },
          ],
          theorie: "**Doel en doelgroep werken samen.**\n\nBij reclame vraag je twee dingen:\n1. Wat wil de maker dat er gebeurt? (doel: product verkopen)\n2. Wie kan dat laten gebeuren? (doelgroep: de koper — en het kind als hulpje dat erom vraagt)\n\nDaarom mengt een folder vaak kindertaal ('jij straks ook!') met koop-informatie (winkel, actieweek). Twee doelgroepen, één doel.",
          voorbeelden: [
            { type: "dubbel", tekst: "Speelgoedreclame op televisie: vrolijke kindertaal, maar onderin klein de prijs en de winkel — dat stukje is voor de ouders." },
          ],
          basiskennis: [
            { onderwerp: "Volg het geld", uitleg: "Wil je het échte doel en de échte doelgroep van reclame weten? Vraag: wie moet er betalen, en waar?" },
          ],
          niveaus: {
            basis: "'Haal deze week een pak bij De Knabbelhoek' — wie in huis voert die opdracht uit?",
            simpeler: "Een kind kan enthousiast worden van de folder, maar een pak ontbijtgranen komt pas in huis als iemand het afrekent. Op wie mikt die laatste alinea dus?",
            nogSimpeler: "Wie duwt bij jullie thuis de winkelwagen en rekent af? Voor die persoon is de opdracht 'haal een pak' bedoeld.",
          },
        },
      },
    ],
  },

  // ── Stap 4: Doorstroomtoets-mix ─────────────────────────────────
  {
    title: "Doorstroomtoets-mix — doel én doelgroep",
    explanation:
      "Tijd voor een echte oefening in Doorstroomtoets-stijl. Je leest één tekst en krijgt er vragen over het **schrijversdoel** en de **doelgroep** bij — precies zoals op de toets. Gebruik alles wat je geleerd hebt: de vier doelen, de drie doelgroep-aanwijzingen én je speurneus voor een dubbel doel.\n\n" +
      egelTekst +
      "\n\n*Beantwoord de 5 vragen op basis van de tekst hierboven.*",
    checks: [
      {
        q: "Waarom heeft de schrijver deze tekst VOORAL geschreven?",
        options: [
          "Om de lezer te informeren over de egel en zijn problemen",
          "Om een spannend verhaal over een egel te vertellen",
          "Om stap voor stap uit te leggen hoe je een egelnest bouwt",
          "Om egels als huisdier aan te prijzen",
        ],
        answer: 0,
        evidence: "Tijdens die winterslaap daalt zijn hartslag van bijna tweehonderd naar ongeveer twintig slagen per minuut.",
        wrongHints: [
          null,
          "Is er een personage dat iets beleeft, met spanning en een einde? Of staan er vooral feiten in?",
          "De tekst geeft aan het eind wel tips, maar bouw jíj het nest — of doet de egel dat zelf?",
          "Staat er ergens dat je een egel in huis moet nemen?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Scan de signalen", tekst: "Feiten en getallen: drie kilometer, veertig slakken, hartslag van tweehonderd naar twintig. Dat wijst sterk op informeren." },
            { titel: "Check de andere doelen", tekst: "Geen personage of verhaallijn (dus niet amuseren als hoofddoel). Geen stappenplan met 'eerst/daarna' (dus niet instrueren). Wel een oproep aan het slot — maar is dat de héle tekst?" },
            { titel: "Weeg het hoofddoel", tekst: "Drie van de vier alinea's leggen uit hoe de egel leeft en waarom het slecht met hem gaat. Het zwaartepunt van de tekst bepaalt het hoofddoel." },
          ],
          woorden: [
            { woord: "hoofddoel", uitleg: "Het belangrijkste doel van een tekst. Andere doelen kunnen meedoen, maar één weegt het zwaarst." },
            { woord: "zwaartepunt", uitleg: "Het deel waar de tekst het meest mee bezig is. Tel gerust alinea's: waar gaan de meeste over?" },
          ],
          theorie: "**Hoofddoel bepalen bij een gemengde tekst:**\n1. Bepaal per alinea het doel.\n2. Kijk welk doel de meeste alinea's draagt.\n3. Check de titel: 'De egel — held van de nacht' kondigt uitleg over de egel aan, geen verhaal of stappenplan.\n\nHier: alinea 1, 2 en 3 informeren; alleen alinea 4 spoort aan. Informeren wint.",
          voorbeelden: [
            { type: "wegen", tekst: "Tekst met 3 alinea's feiten over tanden + 1 slotzin 'poets dus goed!' → hoofddoel informeren, met een klein duwtje aan het eind." },
          ],
          basiskennis: [
            { onderwerp: "'Vooral' in de vraag is een hint", uitleg: "Als de toets vraagt wat de schrijver VOORAL wil, zit er meestal een tweede doel in de tekst. Laat je daardoor niet afleiden: kies het zwaarste doel." },
          ],
          niveaus: {
            basis: "Drie alinea's vol feiten over de egel, één alinea met tips. Welk doel draagt het grootste deel van de tekst?",
            simpeler: "Wat weet je na het lezen allemaal ineens over egels? Hoe ver hij loopt, wat hij eet, hoe zijn winterslaap werkt, waarom het slecht gaat. Een tekst die jou zoveel leert, heeft welk hoofddoel?",
            nogSimpeler: "Tel de alinea's die je iets léren en de alinea's die je iets laten dóén. Welke stapel is groter?",
          },
        },
      },
      {
        q: "Voor wie is deze tekst in de eerste plaats bedoeld?",
        options: [
          "Kinderen",
          "Tuinarchitecten",
          "Dierenartsen",
          "Gemeentemedewerkers",
        ],
        answer: 0,
        evidence: "Heb jij weleens een egel gezien? [...] Gelukkig kun jij iets doen.",
        wrongHints: [
          null,
          "Staat er vaktaal in over tuinontwerp? En let op de aanspreekvorm: 'jij' of 'u'?",
          "Gaat de tekst over egels behandelen of opereren?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Check de aanspreekvorm", tekst: "'Heb JIJ weleens een egel gezien?', 'kun JIJ iets doen', 'geef JIJ de held een thuis' — overal de jij-vorm." },
            { titel: "Check de woordkeus", tekst: "Gewone, vriendelijke woorden. Moeilijke dingen worden meteen uitgelegd (winterslaap = hartslag omlaag, weinig energie). Zo schrijf je voor jonge lezers." },
            { titel: "Check de rol van de lezer", tekst: "'VRAAG of er een opening in de schutting mag komen' — de lezer moet het aan iemand anders vragen. Wie beslist niet zelf over de schutting? Precies: een kind." },
          ],
          woorden: [
            { woord: "aanspreekvorm", uitleg: "Hoe de schrijver de lezer aanspreekt: 'jij/je' (informeel, vaak jong publiek) of 'u' (volwassenen)." },
          ],
          theorie: "**Slimme aanwijzing: wat mag de lezer zelf?**\n\nDe tekst zegt niet 'zaag een opening in uw schutting' maar 'VRAAG of er een opening mag komen'. De schrijver weet dus dat zijn lezer niet zelf over de tuin beslist. Samen met de jij-vorm en de eenvoudige woorden wijst alles op jonge lezers.",
          voorbeelden: [
            { type: "vergelijk", tekst: "Voor volwassenen zou er staan: 'Overweegt u een egelvriendelijke tuin? Laat onderin de erfafscheiding een doorgang van 13 cm maken.' — zelfde boodschap, heel andere taal." },
          ],
          basiskennis: [
            { onderwerp: "Meerdere aanwijzingen = zeker weten", uitleg: "Eén aanwijzing kan toeval zijn. Wijzen aanspreekvorm, woordkeus én de rol van de lezer dezelfde kant op, dan zit je goed." },
          ],
          niveaus: {
            basis: "Jij-vorm + eenvoudige woorden + 'vraag of het mag' — welke lezers passen bij alle drie?",
            simpeler: "De lezer moet toestemming vragen voor een gat in de schutting. Wie moet er thuis toestemming vragen voor zoiets — een volwassene of iemand van jouw leeftijd?",
            nogSimpeler: "De schrijver praat tegen je zoals je juf of meester dat doet. Voor wie schrijft hij dan?",
          },
        },
      },
      {
        q: "De laatste alinea ('Gelukkig kun jij iets doen...') heeft een ANDER doel dan de rest. Welk doel?",
        options: [
          "De lezer aansporen om de egel te helpen",
          "De lezer laten lachen om de egel",
          "Uitleggen hoe de winterslaap werkt",
          "Vertellen hoe ver een egel loopt",
        ],
        answer: 0,
        evidence: "Laat in een hoekje van de tuin bladeren en takken liggen. [...] Zo geef jij de held van de nacht een veilig thuis!",
        wrongHints: [
          null,
          "Staat er een grap in de laatste alinea?",
          "De winterslaap werd al eerder uitgelegd — in welke alinea stond dat ook alweer?",
          "Ook dat stond eerder in de tekst. Wat is er nieuw aan de laatste alinea?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Vergelijk de alinea's", tekst: "Alinea 1-3: feiten over de egel (informeren). Alinea 4: 'laat bladeren liggen', 'vraag of er een opening mag komen' — opeens moet JIJ iets doen." },
            { titel: "Herken het signaal", tekst: "'Gelukkig kun jij iets doen' + opdrachten + een uitroepteken aan het slot. De schrijver wil de lezer in beweging krijgen." },
            { titel: "Benoem het doel", tekst: "De lezer aanzetten tot actie noemen we aansporen — dat hoort bij overtuigen. Veel informerende teksten eindigen met zo'n duwtje." },
          ],
          woorden: [
            { woord: "aansporen", uitleg: "De lezer aanzetten om iets te doen. Een vorm van overtuigen." },
            { woord: "slot", uitleg: "Het einde van een tekst. Daar zet een schrijver vaak zijn oproep of conclusie." },
          ],
          theorie: "**Per alinea kan het doel verschillen.**\n\nDe Doorstroomtoets vraagt soms naar het doel van de HELE tekst en soms naar het doel van ÉÉN alinea. Lees de vraag dus precies:\n- 'Waarom schreef de schrijver deze tekst?' → hoofddoel van alles.\n- 'Wat wil de schrijver in de laatste alinea?' → doel van dat stukje.\n\nHier: hele tekst = informeren, laatste alinea = aansporen.",
          voorbeelden: [
            { type: "herkennen", tekst: "Tekst over zwerfvuil: drie alinea's feiten + slot 'raap dus ook eens iets op!' — slot-alinea spoort aan, de rest informeert." },
          ],
          basiskennis: [
            { onderwerp: "Uitroepteken als hint", uitleg: "Een uitroepteken aan het eind van een alinea wijst vaak op aansporen of enthousiasme — zelden op droge informatie." },
          ],
          niveaus: {
            basis: "In alinea 1-3 lees je feiten; in alinea 4 krijg je opdrachten ('laat liggen', 'vraag'). Wat doet een alinea vol opdrachten met de lezer?",
            simpeler: "Na alinea 3 weet je alles over de egel. Alinea 4 zegt: nu jij! Bladeren laten liggen, om een opening vragen. De schrijver wil dat je in actie komt — hoe heet dat doel?",
            nogSimpeler: "De laatste alinea wil dat er iets in jullie tuin verandert. Welk doel past bij 'de lezer iets laten doen'?",
          },
        },
      },
      {
        q: "Aan welke aanwijzing zie je het DUIDELIJKST dat deze tekst niet voor volwassenen is geschreven?",
        options: [
          "De schrijver gebruikt overal 'jij' en legt moeilijke dingen meteen uit",
          "De tekst gaat over een dier",
          "De tekst heeft vier alinea's",
          "De tekst heeft een titel met een streepje",
        ],
        answer: 0,
        evidence: "Heb jij weleens een egel gezien?",
        wrongHints: [
          null,
          "Zijn teksten over dieren alleen voor kinderen? Denk aan een natuurblad voor volwassenen.",
          "Hebben teksten voor volwassenen geen alinea's?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Streep de buitenkant weg", tekst: "Aantal alinea's en de titel-opmaak zeggen niets over de lezer — dat kan bij elke tekst zo zijn." },
            { titel: "Onderwerp is niet genoeg", tekst: "Over dieren wordt ook voor volwassenen geschreven (natuurtijdschriften, krantenstukken). Het onderwerp alleen bewijst dus niets." },
            { titel: "De taal bewijst het wél", tekst: "Jij-vorm door de hele tekst + elke moeilijkheid meteen uitgelegd ('winterslaap' krijgt direct uitleg over hartslag en energie). Dat doet een schrijver voor jonge lezers." },
          ],
          woorden: [
            { woord: "aanwijzing", uitleg: "Een spoor in de tekst waaruit je iets kunt afleiden — hier: voor wie de tekst bedoeld is." },
          ],
          theorie: "**Sterke en zwakke aanwijzingen voor de doelgroep:**\n\n| Sterk | Zwak |\n|---|---|\n| aanspreekvorm (jij/u) | aantal alinea's |\n| woordkeus + uitleg | de titel-opmaak |\n| wat de lezer moet kunnen/mogen | het onderwerp alléén |\n\nOp de toets kiest het beste antwoord altijd een STERKE aanwijzing.",
          voorbeelden: [
            { type: "sterke-aanwijzing", tekst: "'Vraag of het mag' + jij-vorm + eenvoudige uitleg = drie sterke aanwijzingen die dezelfde kant op wijzen." },
            { type: "zwakke-aanwijzing", tekst: "'De tekst gaat over een dier' — een krant schrijft ook over dieren, voor volwassenen. Te zwak als bewijs." },
          ],
          basiskennis: [
            { onderwerp: "Kies het beste bewijs", uitleg: "Meerdere opties kunnen een béétje waar zijn. De toets wil de aanwijzing die het meest bewijst — meestal iets over de taal." },
          ],
          niveaus: {
            basis: "Drie opties gaan over de buitenkant of alleen het onderwerp. Eén optie gaat over de taal van de schrijver — dat is het sterkste bewijs.",
            simpeler: "Vraag bij elke optie: bewijst dit écht iets? Dieren-onderwerp: nee, kranten doen dat ook. Alinea's: nee. Titel: nee. Wat blijft er over als sterkste bewijs?",
            nogSimpeler: "Hoe de schrijver tégen je praat, verraadt voor wie hij schrijft. Welke optie gaat daarover?",
          },
        },
      },
      {
        q: "Stel: de egel-tekst eindigt zo: *'Wil je meer lezen over egels? Kijk op egelbeschermers.nl!'* Verandert dat het hoofddoel van de tekst?",
        options: [
          "Nee — drie alinea's informeren blijven het zwaarste deel",
          "Ja — de tekst wordt nu een reclametekst",
          "Ja — het doel wordt instrueren",
          "Nee — dan is er helemaal geen doel meer",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Eén oproep maakt nog geen reclametekst. Wordt er iets verkocht? Kijk hoeveel alinea's informeren.",
          "Is er een stappenplan in deze slotzin?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Tel de alinea's", tekst: "Drie alinea's gaan over feiten over de egel. Eén slotzin stuurt naar een website. Welk deel is groter?" },
            { titel: "Hoofddoel vs bijdoel", tekst: "Het hoofddoel is het deel dat het zwaarst weegt. Een kleine oproep aan het slot verandert het hoofddoel niet." },
            { titel: "Is dit reclame?", tekst: "Er wordt niets verkocht — er is geen product, geen prijs. Informeren blijft het hoofddoel." },
          ],
          niveaus: {
            basis: "Drie alinea's informeren + één slotzin met een link: welk doel weegt het zwaarst?",
            simpeler: "Vergelijk hoeveel er informeert en hoeveel er doorstuurt. Wat is meer?",
            nogSimpeler: "Als er drie stukken feiten zijn en één stukje oproep, wat is dan het MEESTE?",
          },
        },
      },
      {
        q: "Een schoolkrant publiceert dit stukje: *\"Vorige week won onze klas de spellingscompetitie. We mochten van de meester kiezen: pizza of patat. We kozen pizza — en die was heerlijk!\"* Wat is het tekstdoel?",
        options: [
          "Amuseren — een leuk verhaal vertellen",
          "Informeren — feiten geven over spellen",
          "Overtuigen — pizza is beter dan patat",
          "Instrueren — uitleggen hoe je snel spelt",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Er staan feiten in (wie won, wat kozen ze), maar het doel is niet om dingen uit te leggen — het is om het leuk te maken om te lezen.",
          "Het is geen reclame voor pizza. Wat doet dit stukje met de lezer — informeren of laten lachen/genieten?",
          "Staan er stappen of instructies in? Of gaat het over wat er is gebeurd?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welke gevoelens roept de tekst op?", tekst: "Het stukje is grappig en luchtig. 'We kozen pizza — en die was heerlijk!' — dat is niet om je iets te leren, maar om je te laten genieten." },
            { titel: "Is er een boodschap of oproep?", tekst: "Niemand hoeft iets te gaan doen. Er wordt niets verkocht. Er worden geen feiten uitgelegd om je slim te maken. Dus: het hoofddoel is amuseren." },
          ],
          niveaus: {
            basis: "Wil je na dit stukje iets doen, iets kopen, of vond je het gewoon een leuk verhaal?",
            simpeler: "Als een tekst je laat lachen of glimlachen zonder dat je iets hoeft te doen, wat is dan het doel?",
            nogSimpeler: "Vertel jij een grappig verhaal om iemand wijzer te maken, of omdat het leuk is?",
          },
        },
      },
      {
        q: "Welk tekstdoel hoort bij de zin: *\"Schrijf de datum rechtsboven op je toets en je naam linksboven.\"*?",
        options: [
          "Instrueren — stap voor stap uitleggen wat je moet doen",
          "Informeren — feiten geven over toetsen",
          "Overtuigen — je ervan overtuigen dat datum schrijven goed is",
          "Amuseren — een grappige situatie schetsen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Je leert hier geen nieuwe feiten. Je krijgt een opdracht. Welk tekstdoel hoort bij opdrachten en stappen?",
          "Er is geen mening of argument. Je hoeft niets te geloven — je moet iets uitvoeren.",
          "Grappig is het niet. Welk doel past bij 'doe dit en dan dat'?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken de opdrachtvorm", tekst: "'Schrijf ... rechtsboven' en 'schrijf ... linksboven' zijn opdrachten — werkwoorden die jou aan het werk zetten." },
            { titel: "Koppel aan het tekstdoel", tekst: "Opdrachten en stappenplannen horen bij instrueren. Dat is precies wat deze zin doet: precies vertellen wat jij moet doen en hoe." },
          ],
          niveaus: {
            basis: "Staat er een opdracht in de zin die jij moet uitvoeren? Welk doel hoort daarbij?",
            simpeler: "Als een zin begint met een opdracht-werkwoord ('schrijf', 'plak', 'doe'), wat wil de schrijver dan — dat je iets doet of iets gelooft?",
            nogSimpeler: "Een gebruiksaanwijzing zegt: 'druk op de knop'. Wat is het doel van zo'n aanwijzing?",
          },
        },
      },
      {
        q: "Welke zin uit de tekst laat zien dat de schrijver óók iets van de lezer WIL?",
        options: [
          "\"Laat in een hoekje van de tuin bladeren en takken liggen.\"",
          "\"'s Nachts scharrelt een egel wel drie kilometer door tuinen en parken.\"",
          "\"Tijdens die winterslaap daalt zijn hartslag.\"",
          "\"In november zoekt de egel een warme plek om te overwinteren.\"",
        ],
        answer: 0,
        evidence: "Laat in een hoekje van de tuin bladeren en takken liggen.",
        wrongHints: [
          null,
          "Dit is een feit over wat de egel doet — moet jíj hier iets?",
          "Ook dit gaat over het lichaam van de egel, niet over jou.",
          "Wie is er in deze zin aan het werk: de lezer of de egel?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de zin met een opdracht", tekst: "Drie zinnen beschrijven wat de EGEL doet (scharrelen, hartslag, nest zoeken). Eén zin begint met een opdracht-werkwoord aan de LEZER: 'Laat ... liggen.'" },
            { titel: "Waarom is dit het bewijs?", tekst: "Op de toets moet je vaak een doel BEWIJZEN met een zin uit de tekst (een citaat). Een opdracht-zin bewijst dat de schrijver iets van de lezer wil." },
            { titel: "Koppel aan het doel", tekst: "Deze zin hoort bij het aansporende slot. De andere drie zinnen horen bij het informerende deel." },
          ],
          woorden: [
            { woord: "citaat", uitleg: "Een letterlijk overgenomen zin uit de tekst — vaak tussen aanhalingstekens. Op de toets gebruik je citaten als bewijs." },
            { woord: "opdracht-werkwoord", uitleg: "Een werkwoord vooraan de zin dat de lezer iets laat doen: 'laat', 'vraag', 'kom', 'doe'." },
          ],
          theorie: "**Bewijs-vragen op de Doorstroomtoets:**\n\n'Uit welke zin blijkt dat...?' — dan zoek je het citaat dat de stelling het BEST ondersteunt.\n\nAanpak:\n1. Snap eerst wat je moet bewijzen (schrijver wil iets van de lezer).\n2. Toets elke zin: gaat dit over de lezer of over iets anders?\n3. Kies de zin waarin de lezer zelf aan zet is.",
          voorbeelden: [
            { type: "bewijs", tekst: "Stelling: 'de schrijver wil dat je zuinig bent met water.' Bewijs-zin: 'Draai de kraan dicht tijdens het poetsen.' — opdracht aan de lezer." },
          ],
          basiskennis: [
            { onderwerp: "Over de egel ≠ aan de lezer", uitleg: "Zinnen die beschrijven wat een dier doet, vragen niets van jou. Pas als de zin JOU aan het werk zet, wil de schrijver iets van je." },
          ],
          niveaus: {
            basis: "Drie zinnen vertellen over de egel. Eén zin begint met een opdracht die jíj kunt uitvoeren in de tuin. Welke?",
            simpeler: "Lees elke optie en vraag: kan ik dit vanmiddag zelf gaan doen? Drie kilometer scharrelen en een winterslaap houden lukt je niet — wat wel?",
            nogSimpeler: "Zoek de zin waarin jij aan de beurt bent, niet de egel.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tekstdoelSchrijversdoelPo = {
  id: "tekstdoel-schrijversdoel-po",
  title: "Tekstdoel — waarom schreef de schrijver dit?",
  emoji: "🎯",
  level: "groep6-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — schrijversdoel en doelgroep herkennen",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
  ],
  intro:
    "Op de Doorstroomtoets krijg je vragen als 'Waarom heeft de schrijver deze tekst geschreven?' en 'Voor wie is deze tekst bedoeld?'. In dit deel leer je de vier schrijversdoelen herkennen, de doelgroep bepalen én doorprikken wanneer reclame zich vermomt als informatie.",
  triggerKeywords: [
    "tekstdoel", "schrijversdoel", "doel van de tekst", "doel van de schrijver",
    "doelgroep", "voor wie is de tekst", "waarom geschreven",
    "informeren", "overtuigen", "amuseren", "instrueren",
    "reclame herkennen", "aanspreekvorm", "begrijpend lezen",
  ],
  chapters,
  steps,
};

export default tekstdoelSchrijversdoelPo;
