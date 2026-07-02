// leesladderData.js — de teksten en vragen van de Leesladder, in DRIE versies
// (Mark 2026-07-02, na Brian's eerste ronde): zelfde treden-opbouw en dezelfde
// lees-trucs per plek, maar verse teksten. Zo test versie B het BEGRIP en niet
// het geheugen van wie versie A al maakte (en het antwoord zag).
// In de data staat het goede antwoord altijd op plek 0; de pagina husselt de
// opties deterministisch per versie, zodat de letters netjes over A-D spreiden.
// (Versie A is de oorspronkelijke set; daar kloppen de answer-indexen per vraag.)

export const TREDE_META = [
  { nr: 1, titel: "Mini-verhaaltjes", sub: "5 zinnen per tekst — lekker kort, lekker veel succes", emoji: "🪜", kindTip: "Lees de tekst rustig. Zet een rondje om het goede antwoord." },
  { nr: 2, titel: "Korte verhalen", sub: "± 9 zinnen — één alinea, drie vragen", emoji: "🪜🪜", kindTip: "Lees eerst de hele tekst. Kijk bij elke vraag gerust terug in de tekst." },
  { nr: 3, titel: "Flinke alinea's", sub: "± 130 woorden — hier train je doorzetten", emoji: "🪜🪜🪜", kindTip: "Tip: lees eerst de vragen, dan weet je waar je op moet letten." },
  { nr: 4, titel: "Echte toets-lengte", sub: "± 220 woorden, meerdere alinea's — zoals op de Doorstroomtoets", emoji: "🪜🪜🪜🪜", kindTip: "Grote tekst? Lees alinea voor alinea. Elke alinea heeft zijn eigen mini-onderwerp." },
];

// ── VERSIE A (de oorspronkelijke teksten) ───────────────────────
const A = [
  [
    {
      titel: "De egel",
      tekst: "Bram vindt een egel in de tuin. Het diertje zit stil onder een struik. Egels slapen overdag en zoeken 's nachts hun eten. Daarom ziet Bram hem bijna nooit lopen. Vannacht gaat de egel op zoek naar slakken.",
      vragen: [
        { q: "Waar gaat dit stukje vooral over?", options: ["Een egel in de tuin", "Slakken vangen", "De struik van Bram", "Slapen"], answer: 0, type: "hoofdgedachte", uitleg: "Bijna elke zin gaat over de egel. De slakken en de struik komen maar één keer voorbij — dat is niet waar de tekst óver gaat." },
        { q: "Waarom ziet Bram de egel bijna nooit lopen?", options: ["Egels slapen overdag", "De egel is bang voor Bram", "De struik is te groot", "Er zijn geen slakken"], answer: 0, type: "oorzaak & gevolg", uitleg: "Het woord 'daarom' plakt twee zinnen aan elkaar: egels slapen overdag → dús ziet Bram hem niet." },
      ],
    },
    {
      titel: "Het ruimtestation",
      tekst: "Hoog boven de aarde vliegt een ruimtestation. Er wonen astronauten in, soms wel een half jaar. Zij doen daar proefjes die op aarde niet kunnen. Alles zweeft er, zelfs druppels water. Daarom zuigen astronauten hun drinken uit een zakje.",
      vragen: [
        { q: "Hoe lang wonen astronauten soms in het ruimtestation?", options: ["Een half jaar", "Een week", "Een maand", "Tien jaar"], answer: 0, type: "detail opzoeken", uitleg: "Het staat letterlijk in zin 2. Bij zo'n vraag mag je altijd terugkijken in de tekst — dat is geen spieken, dat is slim lezen." },
        { q: "In zin 3 staat: 'Zij doen daar proefjes.' Wie zijn 'zij'?", options: ["De astronauten", "De druppels", "De proefjes", "De mensen op aarde"], answer: 0, type: "verwijswoord", uitleg: "Een woord als 'zij' wijst terug naar iets uit de zin ervóór. Daar staan de astronauten." },
      ],
    },
    {
      titel: "De verdwenen boterham",
      tekst: "Noor legt haar boterham op de picknicktafel. Ze rent even naar de schommel. Als ze terugkomt, is haar bord leeg. In de boom zit een brutale kauw te smullen. Noor moet er zelf om lachen.",
      vragen: [
        { q: "Wat is er met de boterham gebeurd?", options: ["De kauw heeft hem gepakt", "Noor heeft hem opgegeten", "Hij is op de grond gevallen", "Mama heeft hem weggehaald"], answer: 0, type: "conclusie trekken", uitleg: "Het staat er niet letterlijk! Je plakt twee zinnen aan elkaar: het bord is leeg + de vogel zit te smullen. Zelf iets bedenken uit twee stukjes heet een conclusie trekken." },
        { q: "Wat betekent 'smullen'?", options: ["Lekker eten", "Hard roepen", "Stil zitten", "Wegvliegen"], answer: 0, type: "woord uit de zin halen", uitleg: "De kauw heeft net een boterham gepakt — wat doet hij daar dan mee? De zinnen eromheen verklappen wat een moeilijk woord betekent." },
      ],
    },
    {
      titel: "Fietsband plakken",
      tekst: "Een lekke band plak je zo. Haal eerst de band van het wiel. Zoek dan het gaatje door de band in een emmer water te duwen. Waar belletjes omhoog komen, zit het lek. Plak daar de pleister stevig op.",
      vragen: [
        { q: "Wat doe je het éérst?", options: ["De band van het wiel halen", "De band in water duwen", "De pleister opplakken", "Belletjes zoeken"], answer: 0, type: "volgorde", uitleg: "Woorden als 'eerst' en 'dan' zijn volgorde-woorden. Zin 2 zegt letterlijk 'eerst'." },
        { q: "Hoe vind je het gaatje in de band?", options: ["Door de band in water te duwen", "Door heel goed te kijken", "Door de pleister te plakken", "Door het wiel rond te draaien"], answer: 0, type: "detail opzoeken", uitleg: "Waar het lek zit, komen belletjes omhoog in het water — zo zie je het gaatje vanzelf." },
      ],
    },
    {
      titel: "De oude vuurtoren",
      tekst: "Aan de kust staat een vuurtoren van honderd jaar oud. Vroeger draaide er elke nacht een groot licht. Schepen zagen zo waar de gevaarlijke rotsen lagen. Tegenwoordig gebruiken schepen een computer met zeekaarten. Toch laat de stad het licht branden, omdat mensen het zo mooi vinden.",
      vragen: [
        { q: "Waarom was het licht vroeger belangrijk?", options: ["Zodat schepen niet op de rotsen voeren", "Omdat het er mooi uitzag", "Omdat de stad dat wilde", "Zodat de toren warm bleef"], answer: 0, type: "oorzaak & gevolg", uitleg: "Zin 3 legt het uit: door het licht zagen schepen waar de gevaarlijke rotsen lagen." },
        { q: "Waarom brandt het licht nú nog steeds?", options: ["Mensen vinden het mooi", "Schepen hebben het nodig", "De computer is kapot", "Het kan niet uit"], answer: 0, type: "signaalwoord", uitleg: "'Omdat' is een reden-woord: de reden komt er meteen achteraan. En 'toch' verklapt een verrassing — het hóéft niet meer, maar het gebeurt wél." },
      ],
    },
    {
      titel: "Mieren",
      tekst: "Een mier is klein, maar supersterk. Hij kan wel vijftig keer zijn eigen gewicht tillen. Dat is alsof jij een auto optilt. Mieren werken bovendien altijd samen in een grote groep. Zo bouwen ze lange gangen onder de grond.",
      vragen: [
        { q: "Wat wil de schrijver vooral vertellen?", options: ["Mieren zijn sterk en werken samen", "Mieren tillen auto's op", "Jij bent sterker dan een mier", "Gangen graven is zwaar"], answer: 0, type: "hoofdgedachte", uitleg: "De tekst noemt twee dingen over mieren: supersterk (zin 1-3) en samenwerken (zin 4-5). Het goede antwoord vat allebei samen." },
        { q: "Waarom staat de zin over de auto in de tekst?", options: ["Om je te laten voelen hoe sterk een mier is", "Mieren tillen echt auto's op", "Omdat auto's zwaar zijn", "Om te vertellen dat jij sterk bent"], answer: 0, type: "vergelijking begrijpen", uitleg: "Vijftig keer je eigen gewicht is lastig voor te stellen. De schrijver maakt er een plaatje van dat je wél kent: jij die een auto optilt." },
      ],
    },
  ],
  [
    {
      titel: "De klimbaan",
      tekst: "Vandaag gaat groep 7 naar het klimbos. Sam heeft er weken naar uitgekeken. Maar bij de hoogste klimbaan blijft hij ineens staan. Zijn benen voelen als pudding. Juf Karin ziet het en klimt rustig naast hem. \"Kijk alleen naar de volgende stap,\" zegt ze. Stap voor stap komt Sam steeds hoger. Bovenaan durft hij zelfs naar beneden te zwaaien. Op de terugweg in de bus praat hij nergens anders meer over.",
      vragen: [
        { q: "Hoe voelt Sam zich bij de hoogste klimbaan?", options: ["Bang", "Boos", "Verdrietig", "Verveeld"], answer: 0, type: "gevoel afleiden", uitleg: "De schrijver zégt nergens 'bang', maar laat het voelen: 'zijn benen voelen als pudding' en hij blijft ineens staan." },
        { q: "Het woord 'maar' in zin 3 laat zien dat…", options: ["er iets onverwachts komt", "de tekst bijna klaar is", "er een reden komt", "Sam blij is"], answer: 0, type: "signaalwoord", uitleg: "'Maar' is een draai-woord: eerst keek Sam er juist naar uit, en dán komt er iets dat daar tegenin gaat." },
        { q: "Wat leer je vooral van dit verhaal?", options: ["Met kleine stapjes kom je verder", "Klimbossen zijn gevaarlijk", "Juffen kunnen goed klimmen", "Zwaaien is leuk"], answer: 0, type: "hoofdgedachte", uitleg: "De tip van juf ('kijk alleen naar de volgende stap') is precies wat Sam boven brengt. Dat is de boodschap van het verhaal — en stiekem ook van deze leesladder!" },
      ],
    },
    {
      titel: "Plastic soep",
      tekst: "In de oceaan drijft heel veel plastic afval. Onderzoekers noemen dat de plastic soep. Vogels en vissen zien de stukjes aan voor eten. Daardoor worden veel dieren ziek. Het plastic verdwijnt niet vanzelf; het valt alleen uiteen in piepkleine stukjes. Die stukjes noem je microplastics. Gelukkig zijn er slimme uitvinders. Zij bouwen drijvende vangarmen die het plastic uit zee scheppen. Maar het allerbeste blijft: minder plastic weggooien.",
      vragen: [
        { q: "Wat zijn microplastics?", options: ["Piepkleine stukjes plastic", "Drijvende vangarmen", "Zieke vissen", "Soorten soep"], answer: 0, type: "woord uit de zin halen", uitleg: "De zin ervóór legt het al uit: plastic valt uiteen in piepkleine stukjes — 'die stukjes noem je microplastics'." },
        { q: "Waardoor worden veel zeedieren ziek?", options: ["Ze eten stukjes plastic op", "Het water is te koud", "De vangarmen maken lawaai", "Er is te weinig eten"], answer: 0, type: "oorzaak & gevolg", uitleg: "'Daardoor' wijst terug naar de zin ervoor: dieren zien plastic aan voor eten (en eten het dus op)." },
        { q: "Wat vindt de schrijver het allerbelangrijkst?", options: ["Minder plastic weggooien", "Vangarmen bouwen", "Soep onderzoeken", "Vissen voeren"], answer: 0, type: "mening van de schrijver", uitleg: "'Maar het allerbeste blijft…' — de schrijver bewaart zijn eigen punt voor het slot. Het einde van een tekst is vaak goud waard." },
      ],
    },
    {
      titel: "Waarom gapen we?",
      tekst: "Iedereen gaapt: baby's, opa's en zelfs vissen. Lang dachten mensen dat je gaapt omdat je te weinig lucht binnenkrijgt. Dat blijkt niet te kloppen. Onderzoekers denken nu dat gapen je hersenen een beetje afkoelt. Een koel brein werkt beter, net zoals een koele computer sneller is. Gapen is bovendien besmettelijk. Zie jij iemand gapen, dan is de kans groot dat je meedoet. Dat komt doordat je hersenen automatisch meevoelen met anderen. Grote kans dat je tijdens deze tekst al één keer gegaapt hebt.",
      vragen: [
        { q: "Wat dachten mensen vróéger over gapen?", options: ["Je krijgt te weinig lucht binnen", "Het koelt je hersenen af", "Het is besmettelijk", "Alleen baby's doen het"], answer: 0, type: "detail opzoeken", uitleg: "Let op tijd-woorden: 'lang dachten mensen…' gaat over vroeger, 'onderzoekers denken nu…' over nu. De vraag vraagt naar vroeger." },
        { q: "Waarmee vergelijkt de schrijver je hersenen?", options: ["Met een computer", "Met een vis", "Met een baby", "Met de lucht"], answer: 0, type: "vergelijking begrijpen", uitleg: "'Net zoals een koele computer sneller is' — de schrijver pakt iets dat je kent om iets nieuws uit te leggen." },
        { q: "'Gapen is besmettelijk' betekent hier:", options: ["Je neemt het snel van een ander over", "Je wordt er ziek van", "Het is vies", "Het duurt heel lang"], answer: 0, type: "woord uit de zin halen", uitleg: "De zinnen erna leggen het uit: zie je iemand gapen, dan doe je vanzelf mee. Besmettelijk hoeft dus niet over ziek zijn te gaan." },
      ],
    },
    {
      titel: "Sparen voor de drone",
      tekst: "Lena wil een drone van zestig euro. Ze verdient elke week vier euro met de hond van de buren uitlaten. Eerst koopt ze van dat geld steeds snoep en stickers. Na een maand heeft ze daardoor bijna niets gespaard. Dan maakt ze een plan: elke week drie euro in de spaarpot, één euro voor leuke dingen. Op een kalender kleurt ze per week een vakje. Zo ziet ze haar spaarpot langzaam groeien. Na twintig weken is het eindelijk zover. Lena vliegt haar drone door de tuin — en dat voelt dubbel zo leuk, omdat ze er zelf voor heeft gespaard.",
      vragen: [
        { q: "Wat gaat er in het begin mis?", options: ["Lena geeft haar geld meteen uit", "De hond loopt weg", "De drone is uitverkocht", "Ze verdient niets"], answer: 0, type: "probleem vinden", uitleg: "Ze koopt steeds snoep en stickers, 'daardoor' spaart ze bijna niets. Het probleem staat vóór het plan." },
        { q: "Hoeveel euro spaart Lena per week volgens haar plan?", options: ["Drie euro", "Eén euro", "Vier euro", "Zestig euro"], answer: 0, type: "detail opzoeken", uitleg: "Het plan: drie euro sparen, één euro uitgeven. Pas op voor de andere getallen in de tekst — die staan er om je te testen." },
        { q: "Waarom voelt de drone 'dubbel zo leuk'?", options: ["Ze heeft er zelf voor gespaard", "Hij was in de aanbieding", "De tuin is groot", "Hij vliegt extra hoog"], answer: 0, type: "oorzaak & gevolg", uitleg: "Het staat na het reden-woord 'omdat'. Zelf ergens hard voor werken maakt de beloning groter — dat is de boodschap." },
      ],
    },
  ],
  [
    {
      titel: "Winterslaap",
      tekst: "Als het koud wordt, verdwijnen egels, vleermuizen en kikkers ineens. Ze houden een winterslaap, en dat is véél meer dan gewoon lang slapen. Het lichaam gaat bijna helemaal op de spaarstand. Het hart van een egel klopt normaal zo'n tweehonderd keer per minuut, maar in de winterslaap nog maar een paar keer. Ook wordt het dier bijna net zo koud als de lucht om hem heen. Zo verbruikt het lichaam bijna geen energie, en dat is precies de bedoeling: in de winter is er nauwelijks eten te vinden. Van het vet dat het dier in de herfst heeft gegeten, kan het maandenlang leven. Toch is de winterslaap niet zonder gevaar. Wie te vroeg wakker wordt, vindt geen eten. Maak in de winter dus nooit een blad- of takkenhoop open: er kan een egel in liggen die je leven redt door hem te laten liggen.",
      vragen: [
        { q: "Waar gaat deze tekst vooral over?", options: ["Hoe de winterslaap werkt", "Het hart van de egel", "Eten zoeken in de herfst", "Vleermuizen"], answer: 0, type: "hoofdgedachte", uitleg: "Egelhart, spaarstand, vet eten: het zijn allemaal stukjes van één groot onderwerp — de winterslaap. De hoofdgedachte is de paraplu waar alles onder past." },
        { q: "Hoe vaak klopt het hart van een egel normaal per minuut?", options: ["Ongeveer tweehonderd keer", "Een paar keer", "Vijftig keer", "Duizend keer"], answer: 0, type: "detail opzoeken", uitleg: "Er staan twee getallen dicht bij elkaar: tweehonderd (normaal) en een paar (in winterslaap). Lees precies welke bij welke situatie hoort." },
        { q: "Waarom is die spaarstand zo handig?", options: ["In de winter is er bijna geen eten", "Het dier wil graag dromen", "Zo blijft het hart sterk", "De lucht is te koud om te spelen"], answer: 0, type: "oorzaak & gevolg", uitleg: "Na de dubbele punt staat de reden: in de winter is er nauwelijks eten. Wie bijna geen energie verbruikt, heeft ook bijna geen eten nodig." },
        { q: "Waarom eindigt de schrijver met de zin over de bladhoop?", options: ["Om je te waarschuwen", "Om je aan het lachen te maken", "Om te vertellen hoe je egels vangt", "Omdat de tekst vol was"], answer: 0, type: "doel van de schrijver", uitleg: "De schrijver wil dat jíj iets doet (of juist niet doet): laat bladhopen in de winter dicht. Een tekst kan uitleggen én waarschuwen tegelijk." },
      ],
    },
    {
      titel: "De uitvinding van het ijshoorntje",
      tekst: "Het ijshoorntje is per ongeluk uitgevonden. In 1904 was er in Amerika een grote zomermarkt. Een ijsverkoper deed gouden zaken: het was bloedheet en zijn schepijs vloog de kraam uit. Maar toen raakten zijn schaaltjes op. Naast hem stond een bakker, Ernest Hamwi, die dunne wafels verkocht. Naar zíjn kraam kwam bijna niemand. Hamwi kreeg een idee. Hij rolde een warme wafel tot een puntzak en gaf hem aan zijn buurman. Het ijs paste er precies in. De klanten vonden het geweldig: een schaaltje dat je op kunt eten! Sindsdien veroverde het hoorntje de hele wereld. Twee verkopers met elk een probleem — samen hadden ze de oplossing. Misschien wel de lekkerste samenwerking ooit.",
      vragen: [
        { q: "Wat gebeurde er éérst?", options: ["De schaaltjes van de ijsverkoper raakten op", "Hamwi rolde een wafel tot puntzak", "Het hoorntje veroverde de wereld", "De klanten aten het schaaltje op"], answer: 0, type: "volgorde", uitleg: "Zet de gebeurtenissen op een rijtje: ijs verkopen → schaaltjes op → idee van Hamwi → wafel rollen → wereldsucces. Het woord 'maar toen' markeert het beginpunt van het probleem." },
        { q: "Welk probleem loste de wafel op?", options: ["Er waren geen schaaltjes meer", "Het ijs smolt te snel", "De wafels waren te koud", "De markt was te druk"], answer: 0, type: "probleem vinden", uitleg: "De ijsverkoper kon niets meer serveren zonder schaaltjes — de opgerolde wafel werd het nieuwe schaaltje." },
        { q: "Waarom vonden klanten het hoorntje geweldig?", options: ["Je kunt het schaaltje opeten", "Het was gratis", "Het ijs bleef er kouder in", "Het kwam uit een ver land"], answer: 0, type: "detail opzoeken", uitleg: "Het staat letterlijk in de tekst, met een uitroepteken erbij — zo laat de schrijver enthousiasme zien." },
        { q: "Wat is de belangrijkste gedachte van deze tekst?", options: ["Samenwerken kan iets moois opleveren", "IJs is het lekkerst in de zomer", "Markten zijn altijd druk", "Wafels verkopen is moeilijk"], answer: 0, type: "hoofdgedachte", uitleg: "De laatste twee zinnen vatten het samen: twee problemen + samenwerking = één gouden idee. Let op: het slot van een tekst verklapt vaak de boodschap." },
      ],
    },
    {
      titel: "De nieuwe speeltuin (een mening!)",
      tekst: "Onze wijk heeft sinds vorige maand een nieuwe speeltuin, en wat mij betreft is het meteen de mooiste van de stad. Er staat een kabelbaan van twaalf meter, een klimtoren met drie glijbanen en een trampoline die in de grond ligt. Vooral die trampoline is een slim idee: je kunt er niet vanaf vallen, dus ook kleuters springen veilig mee. Toch is er één ding jammer. Er staan maar twee bankjes, en die zijn bijna altijd bezet. Ouders die willen zitten, hebben pech. De gemeente belooft dat er in de lente twee bankjes bij komen. Ik hoop dat dat echt gebeurt, want een middag speeltuin duurt lang als je moet staan. Kom vooral zelf een keer kijken — maar neem voor de zekerheid je eigen stoel mee.",
      vragen: [
        { q: "'Het is de mooiste speeltuin van de stad.' Dat is een…", options: ["mening", "feit", "vraag", "belofte"], answer: 0, type: "feit of mening", uitleg: "Truc: kun je het nameten of opzoeken? 'Twaalf meter' kun je nameten (feit). 'De mooiste' kun je alleen vínden (mening). 'Wat mij betreft' verklapt het al." },
        { q: "Wat is uit deze tekst WEL een feit?", options: ["De kabelbaan is twaalf meter lang", "Het is de mooiste speeltuin", "Staan is vreselijk", "De speeltuin is een slim idee"], answer: 0, type: "feit of mening", uitleg: "Een lengte kun je controleren met een meetlint. De rest zijn dingen die je ervan kunt vínden." },
        { q: "Waarom is de ingegraven trampoline slim?", options: ["Je kunt er niet vanaf vallen", "Hij is groter dan normaal", "Hij is goedkoper", "Kleuters springen hoger"], answer: 0, type: "detail opzoeken", uitleg: "Na de dubbele punt volgt de uitleg: niet vanaf kunnen vallen → ook veilig voor kleuters." },
        { q: "Wat doet de schrijver in de allerlaatste zin?", options: ["Een grapje maken over de bankjes", "Je bang maken voor de speeltuin", "Uitleggen hoe een stoel werkt", "De gemeente bedanken"], answer: 0, type: "doel van de schrijver", uitleg: "'Neem je eigen stoel mee' is een knipoog naar het bankjes-probleem. Schrijvers eindigen graag met een grapje dat de lezer alleen snapt als hij de hele tekst las — jij dus!" },
      ],
    },
  ],
  [
    {
      titel: "De wolf is terug",
      tekst: "De wolf is terug in Nederland. Ruim honderd jaar was hij hier verdwenen: de laatste Nederlandse wolf werd in 1897 geschoten. Maar sinds 2015 lopen er weer wolven ons land binnen, vooral vanuit Duitsland. Inmiddels wonen er meerdere wolvenfamilies, met de Veluwe als bekendste plek.\n\nNiet iedereen is er blij mee. Schapenhouders zijn bezorgd, want een wolf pakt soms een schaap. Zij vinden dat er te weinig gebeurt om hun dieren te beschermen. Natuurorganisaties zien het anders. Volgens hen hoort de wolf gewoon in onze natuur en houdt hij het aantal herten en wilde zwijnen in evenwicht. Te veel herten eten namelijk jonge boompjes kaal, waardoor het bos niet kan groeien.\n\nWie heeft er gelijk? Misschien allebei een beetje. Duidelijk is dat de wolf blijft, want het dier is streng beschermd en verjagen mag niet. Daarom zoeken boeren en natuurbeschermers samen naar oplossingen. Speciale hoge rasters met stroomdraad houden wolven bij schapen weg, en een boer kan geld terugkrijgen als er toch een schaap wordt gepakt.\n\nEén ding is zeker: een wolf tegenkomen blijft heel bijzonder. Die kans is piepklein, want wolven zijn schuw en vermijden mensen. Zie je er toch één? Blijf rustig staan, loop langzaam achteruit en ren nooit weg. Grote kans dat de wolf allang heeft besloten dat híj niets met jóu te maken wil hebben.",
      vragen: [
        { q: "Wanneer werd de laatste Nederlandse wolf geschoten (vóór de terugkeer)?", options: ["In 1897", "In 1915", "In 2015", "In 2004"], answer: 0, type: "detail opzoeken", uitleg: "Er staan twee jaartallen in alinea 1: 1897 (laatste wolf geschoten) en 2015 (wolven komen terug). Lees precies welk jaartal bij welke gebeurtenis hoort." },
        { q: "Waarom zijn schapenhouders bezorgd?", options: ["Een wolf pakt soms een schaap", "Wolven eten jonge boompjes", "De Veluwe wordt te vol", "Schapen zijn streng beschermd"], answer: 0, type: "standpunt vinden", uitleg: "Alinea 2 zet twee groepen tegenover elkaar. Het reden-woord 'want' wijst de zorg van de schapenhouders aan." },
        { q: "Welk argument geven natuurorganisaties vóór de wolf?", options: ["Hij houdt het aantal herten en zwijnen in evenwicht", "Hij beschermt de schapen", "Hij is bijna nooit te zien", "Hij komt uit Duitsland"], answer: 0, type: "standpunt vinden", uitleg: "'Volgens hen' kondigt hun mening aan. Bij een discussie-tekst moet je per groep kunnen zeggen: wat vinden ze, en waarom?" },
        { q: "Waarom is te véél herten slecht voor het bos?", options: ["Ze eten jonge boompjes kaal", "Ze jagen wolven weg", "Ze maken de paden kapot", "Ze eten al het gras op"], answer: 0, type: "oorzaak & gevolg", uitleg: "'Namelijk' en 'waardoor' zijn ketting-woorden: te veel herten → boompjes kaalgegeten → bos groeit niet. Zo'n kettinkje kunnen navertellen = de vraag goed hebben." },
        { q: "Wat moet je volgens de tekst NOOIT doen als je een wolf ziet?", options: ["Wegrennen", "Stil blijven staan", "Langzaam achteruitlopen", "Rustig blijven"], answer: 0, type: "detail opzoeken (let op 'niet')", uitleg: "Pas op: drie antwoorden zijn dingen die je WEL moet doen. Bij een vraag met 'nooit' of 'niet' zoek je juist wat de tekst verbiedt: 'ren nooit weg'." },
      ],
    },
    {
      titel: "Het spreekbeurt-geheim",
      tekst: "Morgen is Yuki's spreekbeurt en ze weet er alles van — op papier dan. Haar onderwerp is de octopus, het slimste dier van de zee. Ze kan haar blaadjes wel dromen. Toch ligt ze wakker. Want zodra ze zich de klas voorstelt, dertig paar ogen op haar gericht, maakt haar maag een salto.\n\n's Ochtends aan het ontbijt schuift opa aan. \"Zenuwen?\" vraagt hij. Yuki knikt. \"Mooi zo,\" zegt opa vrolijk. Yuki kijkt hem verbaasd aan. \"Mooi?!\" \"Zenuwen betekenen dat het je iets kan schelen,\" legt hij uit. \"Toen ik vroeger trompet speelde in een orkest, had ik voor elk optreden buikpijn. Mijn dirigent zei altijd: zenuwen zijn energie. Je moet ze niet wegduwen, je moet ze gebruiken.\"\n\nOp school probeert Yuki opa's trucje. Als haar buik kriebelt, zegt ze in zichzelf: dat is energie. Ze haalt drie keer diep adem en begint: \"Wisten jullie dat een octopus drie harten heeft?\" De klas is meteen stil. Bij de foto van de octopus die van kleur verandert, klinkt er zelfs een \"wauw\". Na tien minuten klapt iedereen.\n\nTerug op haar plek voelt Yuki haar hart nog bonzen. Maar het is geen bang bonzen meer — eerder het bonzen na een rondje rennen. Nu snapt ze wat opa bedoelde. Zenuwen zijn niet het bewijs dat je iets niet kunt. Ze zijn het bewijs dat je iets probeert wat ertoe doet.",
      vragen: [
        { q: "Waarom ligt Yuki wakker?", options: ["Ze ziet op tegen de spreekbeurt voor de klas", "Ze kent haar blaadjes nog niet", "Ze is bang voor octopussen", "Opa komt morgen langs"], answer: 0, type: "gevoel afleiden", uitleg: "Ze kent alles 'op papier' — aan kennis ligt het niet. Het beeld van dertig paar ogen doet haar maag een salto maken: dat zijn zenuwen." },
        { q: "'Haar maag maakt een salto' betekent:", options: ["Ze is heel zenuwachtig", "Ze heeft honger", "Ze is duizelig van het turnen", "Ze moet lachen"], answer: 0, type: "uitdrukking begrijpen", uitleg: "Een maag kan natuurlijk niet echt een salto maken. Schrijvers gebruiken zo'n beeld om een gevoel sterker te laten voelen dan 'ze was zenuwachtig'." },
        { q: "Wat is de boodschap van opa?", options: ["Zenuwen zijn energie die je kunt gebruiken", "Trompet spelen helpt tegen buikpijn", "Je moet zenuwen wegduwen", "Spreekbeurten zijn niet belangrijk"], answer: 0, type: "hoofdgedachte", uitleg: "Opa herhaalt de woorden van zijn dirigent: niet wegduwen, maar gebruiken. Dat Yuki dit later 'opa's trucje' noemt, bevestigt dat dít zijn boodschap was." },
        { q: "Hoeveel harten heeft een octopus volgens Yuki?", options: ["Drie", "Twee", "Vier", "Eén"], answer: 0, type: "detail opzoeken", uitleg: "Haar openingszin: 'Wisten jullie dat een octopus drie harten heeft?' Details in gesproken zinnen (tussen aanhalingstekens) tellen ook mee!" },
        { q: "Wat betekent de laatste alinea vooral?", options: ["Zenuwen horen erbij als iets belangrijk voor je is", "Rennen is goed tegen zenuwen", "Yuki wil nooit meer een spreekbeurt", "Hard klappen maakt je hart rustig"], answer: 0, type: "thema van het verhaal", uitleg: "Het 'bange bonzen' is 'bonzen na een rondje rennen' geworden — hetzelfde gevoel, andere betekenis. De slotzinnen zeggen het letterlijk: zenuwen bewijzen dat iets ertoe doet." },
      ],
    },
  ],
];

// ── VERSIE B — nieuwe teksten, zelfde opbouw en trucs ───────────
const B = [
  [
    {
      titel: "De sneeuwpop",
      tekst: "Mila bouwt in de tuin een grote sneeuwpop. Ze geeft hem een wortel als neus. De volgende ochtend schijnt de zon fel. Als Mila buiten komt, ligt er alleen nog een natte hoop met een wortel erop. Volgende keer maakt ze meteen een foto van haar sneeuwpop.",
      vragen: [
        { q: "Wat is er met de sneeuwpop gebeurd?", options: ["Hij is gesmolten door de zon", "Iemand heeft hem meegenomen", "Hij is omgewaaid", "Mila heeft hem afgebroken"], answer: 0, type: "conclusie trekken", uitleg: "Het staat er niet letterlijk. Je plakt twee zinnen aan elkaar: de zon schijnt fel + er ligt een natte hoop. Twee stukjes samen = jouw conclusie." },
        { q: "Waarom wil Mila volgende keer meteen een foto maken?", options: ["Dan heeft ze de sneeuwpop nog als hij smelt", "Foto's maken is haar hobby", "De wortel staat er mooi op", "Dan sneeuwt het harder"], answer: 0, type: "oorzaak & gevolg", uitleg: "Ze is haar sneeuwpop kwijt. Een foto kan niet smelten — dan heeft ze hem altijd nog. Soms moet je de reden zelf bedenken uit wat er gebeurd is." },
      ],
    },
    {
      titel: "De bijen",
      tekst: "Bijen zijn heel belangrijk voor de natuur. Ze vliegen van bloem naar bloem om nectar te halen. Daarbij verspreiden ze stuifmeel, waardoor er nieuwe zaden en vruchten groeien. Zonder bijen zouden er veel minder appels en aardbeien zijn. Eén bij maakt in haar hele leven trouwens minder dan één theelepel honing.",
      vragen: [
        { q: "Waar gaat dit stukje vooral over?", options: ["Waarom bijen belangrijk zijn", "Hoe je honing eet", "Appels plukken", "Theelepels"], answer: 0, type: "hoofdgedachte", uitleg: "Zin 1 zegt het al, en de rest van de tekst legt het uit. De eerste zin van een stukje verklapt vaak het onderwerp." },
        { q: "Waardoor groeien er nieuwe vruchten?", options: ["Bijen verspreiden stuifmeel", "Bijen maken honing", "Bijen eten aardbeien", "Bijen bouwen een korf"], answer: 0, type: "oorzaak & gevolg", uitleg: "'Waardoor' in zin 3 is een ketting-woord: stuifmeel verspreiden → nieuwe zaden en vruchten. Zoek de zin met het ketting-woord op." },
      ],
    },
    {
      titel: "Tanden poetsen",
      tekst: "Zo poets je je tanden goed. Doe eerst een klein beetje tandpasta op je borstel. Poets dan twee minuten lang alle tanden, ook die achterin. Spuug daarna het schuim uit, maar spoel niet na met water. Zo blijft het beschermlaagje van de tandpasta langer werken.",
      vragen: [
        { q: "Wat doe je het éérst?", options: ["Tandpasta op de borstel doen", "Twee minuten poetsen", "Het schuim uitspugen", "Naspoelen met water"], answer: 0, type: "volgorde", uitleg: "'Eerst', 'dan' en 'daarna' zijn volgorde-woorden. Zin 2 zegt letterlijk 'eerst'." },
        { q: "Waarom mag je niet naspoelen met water?", options: ["Dan werkt het beschermlaagje langer", "Water is slecht voor je tanden", "Dan smaakt de tandpasta beter", "Dan hoef je korter te poetsen"], answer: 0, type: "detail opzoeken", uitleg: "De laatste zin begint met 'zo' — dat woord kondigt de reden aan van wat er net gezegd is." },
      ],
    },
    {
      titel: "Het kasteel",
      tekst: "Op de heuvel staat een kasteel van zevenhonderd jaar oud. Ridders verdedigden het vroeger tegen vijanden. Zij goten soms hete pek van de muren naar beneden. Rond het kasteel ligt een brede gracht met water. Tegenwoordig is het kasteel een museum voor bezoekers.",
      vragen: [
        { q: "Hoe oud is het kasteel?", options: ["Zevenhonderd jaar", "Zeventig jaar", "Honderd jaar", "Zeventienhonderd jaar"], answer: 0, type: "detail opzoeken", uitleg: "Het staat in zin 1. Lees het getal precies — de foute antwoorden lijken er expres op." },
        { q: "In zin 3 staat: 'Zij goten soms hete pek…' Wie zijn 'zij'?", options: ["De ridders", "De vijanden", "De bezoekers", "De muren"], answer: 0, type: "verwijswoord", uitleg: "'Zij' wijst terug naar de zin ervóór — daar staan de ridders die het kasteel verdedigden." },
      ],
    },
    {
      titel: "De bibliotheekbus",
      tekst: "In het dorp van Sam is geen bibliotheek. Daarom komt er elke woensdag een bibliotheekbus naar het plein. De bus zit vol boeken, van strips tot spannende verhalen. Toch leent Sam bijna altijd hetzelfde: boeken over vulkanen. De juf van de bus houdt er nu al eentje voor hem apart.",
      vragen: [
        { q: "Waarom komt de bus naar het dorp?", options: ["Er is daar geen bibliotheek", "Het plein is er groot", "Sam heeft erom gevraagd", "De juf woont er"], answer: 0, type: "signaalwoord", uitleg: "'Daarom' plakt zin 1 en 2 aan elkaar: geen bibliotheek → dús komt de bus. Het antwoord staat vóór het woord 'daarom'." },
        { q: "Wat weet je zeker over Sam?", options: ["Hij vindt vulkanen interessant", "Hij houdt niet van strips", "Hij leest alleen op school", "Hij vindt de bus te klein"], answer: 0, type: "conclusie trekken", uitleg: "Hij leent bijna altijd vulkaanboeken — daaruit mag je concluderen dat hij vulkanen interessant vindt. De andere antwoorden staan nergens in de tekst." },
      ],
    },
    {
      titel: "De dolfijn",
      tekst: "Een dolfijn lijkt op een vis, maar het is een zoogdier. Hij moet af en toe boven water komen om adem te halen. Dolfijnen slapen daarom met één hersenhelft tegelijk. De andere helft blijft wakker, als een nachtlampje dat aanblijft. Zo verdrinkt een slapende dolfijn nooit.",
      vragen: [
        { q: "Waar gaat dit stukje vooral over?", options: ["Hoe dolfijnen slapen zonder te verdrinken", "Dat dolfijnen vissen zijn", "Hoe nachtlampjes werken", "Hoe vissen ademhalen"], answer: 0, type: "hoofdgedachte", uitleg: "Alle zinnen samen leiden naar het slot: zó verdrinkt een slapende dolfijn nooit. Dat is waar de tekst je naartoe brengt." },
        { q: "Waarom staat het nachtlampje in de tekst?", options: ["Om te laten voelen dat een deel wakker blijft", "Dolfijnen slapen met een lampje aan", "Omdat het 's nachts donker is", "Om te vertellen hoe lampen werken"], answer: 0, type: "vergelijking begrijpen", uitleg: "Een hersenhelft die 'wakker blijft' is lastig voor te stellen. Het nachtlampje is een plaatje dat je kent: een beetje aan, terwijl de rest slaapt." },
      ],
    },
  ],
  [
    {
      titel: "Het zwemdiploma",
      tekst: "Vandaag zwemt Noor af voor haar A-diploma. Wekenlang ging het oefenen hartstikke goed. Maar nu ze bij het diepe bad staat, lijkt het water ineens veel donkerder. Haar hart bonkt in haar keel. De zwemjuf hurkt naast haar. \"Je hoeft niet aan het hele diploma te denken,\" zegt ze zacht. \"Alleen aan de eerste sprong.\" Noor haalt diep adem en springt — en het water voelt meteen weer gewoon. Een uur later staat ze met natte haren en een diploma in haar handen. Het papier wordt een beetje nat, maar dat maakt niemand iets uit.",
      vragen: [
        { q: "Hoe voelt Noor zich bij het diepe bad?", options: ["Gespannen", "Boos", "Verveeld", "Vrolijk"], answer: 0, type: "gevoel afleiden", uitleg: "De schrijver zegt niet 'bang' of 'gespannen', maar laat het zien: het water lijkt donkerder en haar hart bonkt in haar keel." },
        { q: "Het woord 'maar' in zin 3 laat zien dat…", options: ["er iets onverwachts komt", "de tekst bijna klaar is", "er een reden komt", "Noor goed kan zwemmen"], answer: 0, type: "signaalwoord", uitleg: "Eerst ging alles goed — en 'maar' draait het om. Na 'maar' komt bijna altijd iets dat botst met de zin ervoor." },
        { q: "Wat leer je vooral van dit verhaal?", options: ["Denk aan de eerste stap, niet aan alles tegelijk", "Zwemmen is gevaarlijk", "Diploma's worden snel nat", "Diepe baden zijn donker"], answer: 0, type: "hoofdgedachte", uitleg: "De tip van de zwemjuf ('alleen de eerste sprong') is wat Noor over de drempel helpt. De raad van een helper is vaak de boodschap van het verhaal." },
      ],
    },
    {
      titel: "Het noorderlicht",
      tekst: "Hoog in het noorden zie je soms groene en paarse slierten aan de nachthemel: het noorderlicht. Het ontstaat door piepkleine deeltjes die van de zon komen. Die deeltjes botsen hoog in de lucht tegen het luchtlaagje om de aarde. Bij die botsing komt licht vrij, zoals vonkjes bij een aansteker. Hoe wilder de zon, hoe feller het licht. In Nederland is het noorderlicht heel zeldzaam. Wie het echt wil zien, reist naar Noorwegen of IJsland. En wie het één keer heeft gezien, vergeet het nooit meer.",
      vragen: [
        { q: "Waardoor ontstaat het noorderlicht?", options: ["Zonnedeeltjes botsen tegen de lucht", "Vuurwerk in het noorden", "Lampen van steden", "De maan kleurt groen"], answer: 0, type: "oorzaak & gevolg", uitleg: "Zin 2 en 3 vormen een kettinkje: deeltjes van de zon → botsen tegen de lucht → licht. Kun je het kettinkje navertellen, dan heb je hem." },
        { q: "Waarom staan de vonkjes van de aansteker in de tekst?", options: ["Om te laten zien dat botsen licht kan geven", "Noorderlicht is gevaarlijk vuur", "Aanstekers komen uit Noorwegen", "Om je te waarschuwen"], answer: 0, type: "vergelijking begrijpen", uitleg: "Botsende deeltjes die licht geven — dat is moeilijk voor te stellen. De vonkjes zijn een klein voorbeeld van hetzelfde idee." },
        { q: "Waar kun je het noorderlicht goed zien?", options: ["In Noorwegen of IJsland", "Overal in Nederland", "Alleen op zee", "Bij de evenaar"], answer: 0, type: "detail opzoeken", uitleg: "Het staat bijna letterlijk in de tekst. Terugzoeken mag altijd — sterker nog, dat is precies de bedoeling." },
      ],
    },
    {
      titel: "Kauwgom",
      tekst: "Kauwgom bestaat al duizenden jaren. De oude Grieken kauwden op hars uit bomen. De Maya's in Amerika kauwden op ingedikt boomsap, dat zij chicle noemden. Pas zo'n honderdvijftig jaar geleden werd kauwgom een echt snoepje uit de fabriek. Tegenwoordig is de basis meestal een soort rubber, met suiker en smaakjes erdoor. En als je kauwgom per ongeluk inslikt? Dan blijft hij níét zeven jaar in je buik. Dat is een fabeltje: je lichaam werkt hem gewoon weg. Alleen verteren lukt niet — en juist daarom kun je er zo eindeloos op kauwen.",
      vragen: [
        { q: "Waar kauwden de Maya's op?", options: ["Ingedikt boomsap (chicle)", "Hars van de Grieken", "Rubber uit de fabriek", "Suiker met smaakjes"], answer: 0, type: "detail opzoeken", uitleg: "Er staan drie soorten 'oer-kauwgom' in de tekst. Lees precies welke bij de Maya's hoort — de andere horen bij de Grieken en de fabriek." },
        { q: "Wat betekent 'een fabeltje' hier?", options: ["Een verhaal dat niet waar is", "Een verhaal over dieren", "Een oud recept", "Een soort kauwgom"], answer: 0, type: "woord uit de zin halen", uitleg: "De zin erna verklapt het: 'je lichaam werkt hem gewoon weg'. Het zeven-jaar-verhaal klopt dus niet — een fabeltje." },
        { q: "Waarom kun je eindeloos op kauwgom kauwen?", options: ["Het rubber verteert niet", "Er zit extra veel suiker in", "Je kaken worden sterker", "Hij blijft zeven jaar goed"], answer: 0, type: "oorzaak & gevolg", uitleg: "'Juist daarom' wijst terug naar de zin ervoor: verteren lukt niet. Wat niet afbreekt, blijft stevig — dus blijf je kauwen." },
      ],
    },
    {
      titel: "De moestuin",
      tekst: "Timo krijgt van opa een eigen stukje moestuin. Hij zaait er wortels, sla en één pompoenplant. De eerste week rent hij elke dag naar buiten om te kijken. Er gebeurt helemaal niets. Teleurgesteld wil hij de aarde alweer omscheppen. \"Zaadjes hebben geen haast,\" zegt opa rustig. \"Ze werken onder de grond, waar jij het niet ziet.\" Twee weken later staan er ineens overal kleine groene puntjes. En in de herfst is Timo's pompoen de grootste van de hele straat. Geduld, blijkt maar weer, kan letterlijk vruchten opleveren.",
      vragen: [
        { q: "Wat gaat er in het begin bijna mis?", options: ["Timo wil opgeven omdat hij niets ziet groeien", "De pompoen wordt gestolen", "Opa vergeet te zaaien", "De wortels verdrinken"], answer: 0, type: "probleem vinden", uitleg: "'Teleurgesteld wil hij de aarde alweer omscheppen' — dáár zit het probleem. Het staat vlak vóór opa's wijze les." },
        { q: "Wat zaait Timo in zijn moestuin?", options: ["Wortels, sla en een pompoenplant", "Alleen pompoenen", "Aardbeien en sla", "Bloemen voor opa"], answer: 0, type: "detail opzoeken", uitleg: "Rijtjes in een tekst zijn favoriet bij vragenmakers. Zoek zin 2 op en lees het rijtje precies na." },
        { q: "Wat leert Timo van opa?", options: ["Groeien kost tijd, ook als je niets ziet", "Omscheppen helpt zaadjes groeien", "Pompoenen groeien het snelst", "Je moet elke dag kijken"], answer: 0, type: "hoofdgedachte", uitleg: "Opa's zin ('ze werken onder de grond, waar jij het niet ziet') is de sleutel. Het einde bewijst dat hij gelijk had — de pompoen wordt de grootste." },
      ],
    },
  ],
  [
    {
      titel: "Trekvogels",
      tekst: "Elk najaar vertrekken miljoenen vogels uit Nederland naar het warme zuiden. Dat heet de vogeltrek. Ze gaan niet omdat ze zelf niet tegen kou kunnen, maar omdat er in de winter te weinig eten is: insecten verdwijnen en de grond wordt hard. De kampioen van alle trekvogels is de noordse stern. Die vliegt elk jaar van de Noordpool helemaal naar de Zuidpool en weer terug — bij elkaar soms wel negentigduizend kilometer. De gierzwaluw pakt het anders aan: die blijft maandenlang non-stop in de lucht en slaapt zelfs al vliegend, met korte dutjes. Hoe vinden al die vogels de weg? Ze gebruiken de zon, de sterren en zelfs het magnetische veld van de aarde als kompas. En elk voorjaar vinden ze ons land gewoon weer terug — vaak tot op hetzelfde dak nauwkeurig.",
      vragen: [
        { q: "Waar gaat deze tekst vooral over?", options: ["Waarom en hoe vogels naar het zuiden trekken", "Hoe je vogels voert in de winter", "De Noordpool en de Zuidpool", "Hoe een kompas werkt"], answer: 0, type: "hoofdgedachte", uitleg: "Eten, de stern, de gierzwaluw, het kompas: allemaal stukjes van één onderwerp — de vogeltrek. De hoofdgedachte is de paraplu boven alle alinea-stukjes." },
        { q: "Waarom vertrekken de vogels écht?", options: ["Er is in de winter te weinig eten", "Ze kunnen niet tegen kou", "Ze zoeken een mooier dak", "De grond is te zacht"], answer: 0, type: "oorzaak & gevolg", uitleg: "Pas op voor de instinker: de tekst zegt letterlijk dat het NIET om de kou gaat ('niet omdat… maar omdat…'). Na 'maar omdat' komt de echte reden." },
        { q: "Welke vogel is de kampioen van de vogeltrek?", options: ["De noordse stern", "De gierzwaluw", "De ooievaar", "De merel"], answer: 0, type: "detail opzoeken", uitleg: "Het woord 'kampioen' staat er letterlijk — zoek dat woord op in de tekst en lees welke naam erachter komt." },
        { q: "Wat is er zo bijzonder aan de gierzwaluw?", options: ["Hij slaapt al vliegend", "Hij vliegt naar de Zuidpool", "Hij blijft de hele winter hier", "Hij kan niet landen op daken"], answer: 0, type: "detail opzoeken", uitleg: "'De gierzwaluw pakt het anders aan' kondigt zijn eigen stukje aan: maandenlang non-stop vliegen én slapen in de lucht." },
      ],
    },
    {
      titel: "De uitvinding van chips",
      tekst: "Ook chips is per ongeluk uitgevonden. In 1853 werkte kok George Crum in een restaurant in Amerika. Een klant stuurde zijn gebakken aardappelen terug: hij vond ze te dik en te zacht. Crum bakte dunnere schijfjes, maar wéér gingen ze terug. Toen werd de kok een beetje boos. Hij sneed de aardappel zó flinterdun dat je er bijna doorheen kon kijken, bakte de plakjes keihard en strooide er flink zout overheen. Dat zal hem leren, dacht Crum. Maar het plan mislukte heerlijk: de klant was juist dolenthousiast. Andere gasten wilden ook zulke krokante blaadjes. Al snel stonden ze als specialiteit op de menukaart. Zo werd een boze bui de geboorte van de beroemdste snack ter wereld.",
      vragen: [
        { q: "Wat gebeurde er éérst?", options: ["De klant stuurde zijn aardappelen terug", "Crum sneed flinterdunne plakjes", "De chips kwam op de menukaart", "Andere gasten bestelden chips"], answer: 0, type: "volgorde", uitleg: "Zet de gebeurtenissen op een rij: terugsturen → dunner bakken → wéér terug → boos flinterdun snijden → succes. De vraag vraagt naar het begin van de ketting." },
        { q: "Waarom sneed Crum de aardappel flinterdun?", options: ["Hij was boos en wilde de klant terugpakken", "De klant had erom gevraagd", "Dun bakken ging sneller", "Er waren bijna geen aardappelen meer"], answer: 0, type: "conclusie trekken", uitleg: "'Dat zal hem leren' verklapt zijn plan: het was een plaagstootje, geen recept. Dat moet je afleiden — het woord 'wraak' staat er niet." },
        { q: "'Het plan mislukte heerlijk' betekent:", options: ["Het pakte anders uit, maar juist goed", "Het eten was mislukt", "De klant werd boos", "Het plan lukte precies"], answer: 0, type: "uitdrukking begrijpen", uitleg: "'Mislukken' en 'heerlijk' botsen expres met elkaar: het plagen mislukte, maar wat overbleef was heerlijk. Schrijvers spelen graag zo met woorden." },
        { q: "Wat is de belangrijkste gedachte van deze tekst?", options: ["Uit een fout of boze bui kan iets moois ontstaan", "Klanten hebben altijd gelijk", "Zout maakt alles lekkerder", "Koks moeten kalm blijven"], answer: 0, type: "hoofdgedachte", uitleg: "De slotzin vat het samen: een boze bui werd de geboorte van een wereldsnack. Het einde van een tekst verklapt vaak de boodschap." },
      ],
    },
    {
      titel: "De schoolbieb moet vaker open (een mening!)",
      tekst: "Onze schoolbibliotheek is maar twee ochtenden per week open, en dat vind ik veel te weinig. Lezen is namelijk de beste training voor bijna alle vakken. Onderzoekers zeggen dat kinderen die elke dag een kwartier lezen, per jaar duizenden woorden extra leren. Toch staat onze prachtige bieb vier dagen per week op slot. Juf Ria, die de bieb runt, doet dat naast haar gewone lessen — meer uren kan zij er echt niet bij hebben. Daarom heb ik een voorstel: laat kinderen uit groep 8 om de beurt helpen als biebhulp. Zij kunnen boeken innemen, terugzetten en uitlenen. Dan kan de bieb elke dag open, zonder dat juf Ria harder hoeft te werken. Wie leest er mee?",
      vragen: [
        { q: "'Dat vind ik veel te weinig.' Dat is een…", options: ["mening", "feit", "vraag", "grapje"], answer: 0, type: "feit of mening", uitleg: "'Vind ik' verklapt het meteen: dit kun je niet nameten, alleen vinden. Let bij toetsvragen altijd op woorden als 'vind', 'mooiste' en 'beste'." },
        { q: "Wat is uit deze tekst WEL een feit?", options: ["De bieb is twee ochtenden per week open", "De bieb is prachtig", "Lezen is de beste training", "Groep 8 helpt graag"], answer: 0, type: "feit of mening", uitleg: "Openingstijden kun je controleren op het rooster — dat is een feit. 'Prachtig' en 'beste' zijn dingen die je ervan vindt." },
        { q: "Waarom kan juf Ria de bieb niet vaker openen?", options: ["Ze doet het naast haar gewone lessen", "Ze houdt niet van lezen", "De school heeft geen geld", "De bieb is te klein"], answer: 0, type: "detail opzoeken", uitleg: "Het staat na het gedachtestreepje: meer uren kan zij er niet bij hebben. Zoek de zin over juf Ria op en lees hem af." },
        { q: "Wat wil de schrijver met het voorstel bereiken?", options: ["Dat de bieb elke dag open kan", "Dat juf Ria stopt", "Dat groep 8 minder les krijgt", "Dat er nieuwe boeken komen"], answer: 0, type: "doel van de schrijver", uitleg: "Het doel staat er letterlijk achter het voorstel: 'dan kan de bieb elke dag open'. Een betoog eindigt vaak met wat de schrijver wil dat er gebeurt." },
      ],
    },
  ],
  [
    {
      titel: "De bever is terug",
      tekst: "Wie 's avonds langs een Nederlandse rivier wandelt, kan hem zomaar tegenkomen: de bever. Dat is bijzonder, want bijna tweehonderd jaar lang leefde hier geen enkele bever meer. In 1826 werd de laatste geschoten. Pas in 1988 zijn er weer bevers uitgezet, in natuurgebied de Biesbosch. Dat ging zó goed dat er nu duizenden in ons land wonen.\n\nDe bever is een echte bouwer. Met zijn oranje tanden knaagt hij bomen om en bouwt daarvan dammen en burchten. Natuurliefhebbers zijn daar blij mee: achter beverdammen ontstaan waterrijke plekken waar vissen, libellen en vogels van profiteren. Maar er is ook een probleem. Bevers graven gangen, soms dwars door een dijk — en een zwakke dijk is in ons lage land gevaarlijk. Waterbeheerders houden de dieren daarom scherp in de gaten.\n\nGelukkig zijn er slimme oplossingen. Op kwetsbare plekken wordt gaas in de dijk gelegd, zodat graven niet meer lukt. En soms wordt een beverfamilie voorzichtig verhuisd naar een plek waar ze geen kwaad kan.\n\nEen bever zien is trouwens best lastig: hij werkt vooral 's nachts. Je grootste kans maak je in de vroege ochtend of late avond, bij rustig water. Zie je een gladde bruine kop met een platte staart voorbijzwemmen? Blijf stil zitten en geniet — hij doet niets.",
      vragen: [
        { q: "In welk jaar werd de laatste bever van Nederland geschoten?", options: ["In 1826", "In 1988", "In 1926", "In 2000"], answer: 0, type: "detail opzoeken", uitleg: "Er staan twee jaartallen in alinea 1: 1826 (laatste bever) en 1988 (bevers uitgezet). Lees precies welk jaartal bij welke gebeurtenis hoort." },
        { q: "Waarom zijn natuurliefhebbers blij met de bever?", options: ["Achter zijn dammen ontstaan waterrijke plekken voor dieren", "Hij eet schadelijke vissen op", "Hij bewaakt de dijken", "Hij is makkelijk te zien"], answer: 0, type: "standpunt vinden", uitleg: "Alinea 2 zet twee kanten tegenover elkaar. Na 'natuurliefhebbers zijn daar blij mee' volgt hun reden, achter de dubbele punt." },
        { q: "Wat is het probleem met bevers?", options: ["Ze graven gangen door dijken", "Ze eten te veel vis", "Ze maken 's nachts lawaai", "Ze bijten wandelaars"], answer: 0, type: "standpunt vinden", uitleg: "'Maar er is ook een probleem' kondigt de andere kant aan. Bij zo'n discussie-tekst moet je beide kanten kunnen navertellen." },
        { q: "Hoe wordt het graven in dijken tegengehouden?", options: ["Met gaas in de dijk", "Met hoge hekken", "Door bevers te voeren", "Door dammen af te breken"], answer: 0, type: "detail opzoeken", uitleg: "De oplossingen-alinea begint met 'gelukkig'. Daar staat het antwoord letterlijk: gaas in de dijk, zodat graven niet meer lukt." },
        { q: "Wanneer maak je de grootste kans om een bever te zien?", options: ["In de vroege ochtend of late avond", "Midden op de dag", "Alleen in de winter", "Tijdens een storm"], answer: 0, type: "detail opzoeken", uitleg: "De laatste alinea is een mini-handleiding. 'Je grootste kans maak je…' — daarachter staat het antwoord kant-en-klaar." },
      ],
    },
    {
      titel: "Volgende bal",
      tekst: "Morgen is de finale, en keeper Mo kan er niet van slapen. In de halve finale liet hij een makkelijke bal door zijn handen glippen. Sindsdien spookt dat moment door zijn hoofd. Zodra hij eraan denkt, worden zijn handen alvast klam.\n\nOp de laatste training ziet coach Ellen hem staren. \"Waar zit je met je hoofd?\" vraagt ze. Mo vertelt over de doorgeglipte bal. Ellen knikt. \"Weet je wat het gekke is?\" zegt ze. \"Een keeper kan die vorige bal nooit meer pakken. Er bestaat er maar één die telt: de volgende.\" Ze leert hem een trucje: elke keer als de oude bal in zijn hoofd opduikt, tikt hij twee keer op zijn handschoenen en zegt zachtjes: volgende bal.\n\nDe finale is bloedspannend. Al in de eerste minuut moet Mo duiken — redding! Maar vlak voor rust gaat er tóch een bal in de hoek: 0-1. Het oude spook wil zijn hoofd weer in. Mo tikt twee keer op zijn handschoenen. Volgende bal. In de tweede helft stopt hij zelfs een strafschop, en zijn team wint met 2-1.\n\nNa afloop tillen zijn teamgenoten hem op de schouders. Niet omdat hij geen fouten maakte — maar omdat hij na elke fout gewoon weer klaarstond. Dat is misschien wel het echte keepersgeheim: niet foutloos zijn, maar verder spelen.",
      vragen: [
        { q: "Waarom kan Mo niet slapen?", options: ["De fout uit de halve finale spookt door zijn hoofd", "Hij is bang voor coach Ellen", "Hij heeft te veel getraind", "De finale is al geweest"], answer: 0, type: "gevoel afleiden", uitleg: "Alinea 1 laat het zien: de doorgeglipte bal 'spookt door zijn hoofd' en zijn handen worden er klam van. De zorgen houden hem wakker." },
        { q: "'Het oude spook wil zijn hoofd weer in' betekent:", options: ["De nare herinnering komt terug", "Er zit een echt spook in het stadion", "Mo krijgt hoofdpijn", "De bal is onzichtbaar"], answer: 0, type: "uitdrukking begrijpen", uitleg: "Het 'spook' is eerder in het verhaal al genoemd: het moment dat door zijn hoofd spookt. Een beeld dat terugkomt, wijst naar iets van eerder in de tekst." },
        { q: "Wat is het trucje van coach Ellen?", options: ["Twee keer tikken en 'volgende bal' zeggen", "Extra vroeg naar bed gaan", "De vorige wedstrijd terugkijken", "Harder trainen dan iedereen"], answer: 0, type: "detail opzoeken", uitleg: "Het trucje staat letterlijk in alinea 2, na de dubbele punt. En let op: in alinea 3 zie je Mo het écht gebruiken." },
        { q: "Wat stopt Mo in de tweede helft?", options: ["Een strafschop", "Een vrije trap", "Een kopbal", "Een corner"], answer: 0, type: "detail opzoeken", uitleg: "'In de tweede helft stopt hij zelfs een strafschop' — het woord 'zelfs' laat zien dat dit iets extra knaps is." },
        { q: "Wat betekent de laatste alinea vooral?", options: ["Fouten horen erbij; het gaat om verder spelen", "Mo is de beste keeper ooit", "Winnen is het allerbelangrijkst", "Op schouders tillen is gevaarlijk"], answer: 0, type: "thema van het verhaal", uitleg: "De slotzin zegt het letterlijk: niet foutloos zijn, maar verder spelen. Het team tilt hem óp om zijn herstel, niet om een foutloze wedstrijd." },
      ],
    },
  ],
];

// ── VERSIE C — nieuwe teksten, zelfde opbouw en trucs ───────────
const C = [
  [
    {
      titel: "De kerkuil",
      tekst: "In de schuur van boer Teun woont een kerkuil. Overdag slaapt hij op een balk onder het dak. Zodra het donker wordt, gaat hij op jacht naar muizen. Zijn zachte veren maken bij het vliegen bijna geen geluid. Zo hoort een muis hem pas als het te laat is.",
      vragen: [
        { q: "Waarom hoort de muis de uil niet aankomen?", options: ["Zijn zachte veren maken bijna geen geluid", "De uil vliegt heel langzaam", "Muizen horen slecht", "De schuur is te groot"], answer: 0, type: "oorzaak & gevolg", uitleg: "Zin 4 en 5 horen bij elkaar: zachte veren → geen geluid → 'zo' hoort de muis hem te laat. 'Zo' wijst terug naar de reden." },
        { q: "Wanneer gaat de uil op jacht?", options: ["Zodra het donker wordt", "Vroeg in de ochtend", "De hele dag door", "Alleen in de winter"], answer: 0, type: "detail opzoeken", uitleg: "Het staat letterlijk in zin 3. Overdag slaapt hij (zin 2) — de twee zinnen samen maken het extra duidelijk." },
      ],
    },
    {
      titel: "De duikboot",
      tekst: "Een duikboot kan onder water varen. In de wanden van de boot zitten grote tanks. Laat de bemanning daar water in stromen, dan wordt de boot zwaarder en zakt hij. Zij blazen de tanks weer leeg met lucht om omhoog te komen. Zo danst de duikboot op en neer door de zee.",
      vragen: [
        { q: "Hoe zorgt de bemanning dat de duikboot zakt?", options: ["Ze laten water in de tanks stromen", "Ze blazen lucht in de tanks", "Ze maken de boot langer", "Ze varen heel hard"], answer: 0, type: "detail opzoeken", uitleg: "Water erin = zwaarder = zakken. Lucht erin = lichter = stijgen. Lees precies welke van de twee bij 'zakken' hoort." },
        { q: "In zin 4 staat: 'Zij blazen de tanks weer leeg.' Wie zijn 'zij'?", options: ["De bemanning", "De tanks", "De duikboten", "De vissen"], answer: 0, type: "verwijswoord", uitleg: "'Zij' wijst terug naar mensen uit een eerdere zin — de bemanning uit zin 3." },
      ],
    },
    {
      titel: "Pannenkoeken bakken",
      tekst: "Pannenkoeken bak je zo. Klop eerst een beslag van meel, melk en een ei. Laat dan een klontje boter smelten in de hete pan. Giet er daarna een dun laagje beslag in. Draai de pannenkoek om zodra de bovenkant droog wordt.",
      vragen: [
        { q: "Wat doe je het éérst?", options: ["Het beslag kloppen", "Boter laten smelten", "Beslag in de pan gieten", "De pannenkoek omdraaien"], answer: 0, type: "volgorde", uitleg: "'Eerst', 'dan', 'daarna' — de volgorde-woorden zetten de stappen voor je op een rij. Zin 2 heeft 'eerst'." },
        { q: "Wanneer draai je de pannenkoek om?", options: ["Zodra de bovenkant droog wordt", "Als de boter smelt", "Na precies vijf minuten", "Als het beslag op is"], answer: 0, type: "detail opzoeken", uitleg: "De laatste zin geeft het sein: 'zodra de bovenkant droog wordt'. Bij een recept of instructie is elk sein-woord belangrijk." },
      ],
    },
    {
      titel: "De spin",
      tekst: "Bij het tuinhek hangt elke ochtend een nieuw spinnenweb. De spin heeft er vannacht urenlang aan gewerkt. Haar oude web eet ze 's avonds gewoon op. Dat is slim, want zo krijgt ze de bouwstof voor een nieuw web weer binnen. De dunne draden zijn trouwens sterker dan staaldraad dat even dik is.",
      vragen: [
        { q: "Waarom is het opeten van het oude web slim?", options: ["Zo krijgt ze bouwstof voor een nieuw web binnen", "Dan blijft het tuinhek schoon", "Oude webben zijn giftig", "Dan hoeft ze niet te jagen"], answer: 0, type: "oorzaak & gevolg", uitleg: "'Want' is een reden-woord: de reden komt er meteen achteraan. Zoek de zin met 'want' en je hebt het antwoord." },
        { q: "Wat zegt de tekst over de draden van het web?", options: ["Ze zijn sterker dan even dik staaldraad", "Ze breken heel snel", "Ze zijn dikker dan touw", "Ze glimmen in het donker"], answer: 0, type: "detail opzoeken", uitleg: "De laatste zin is een weetje-zin ('trouwens'). Lees de vergelijking precies: sterker dan staaldraad dat éven dik is." },
      ],
    },
    {
      titel: "De vlieger",
      tekst: "Rik wil zijn nieuwe vlieger oplaten in het park. Er staat vandaag bijna geen wind. De vlieger klimt steeds heel even, maar duikt dan weer naar het gras. Toch geeft Rik niet op: hij rent zo hard als hij kan over het veld. Morgen belooft de weerman gelukkig een stevige westenwind.",
      vragen: [
        { q: "Waarom duikt de vlieger steeds naar het gras?", options: ["Er is bijna geen wind", "De vlieger is kapot", "Rik rent te hard", "Het gras is te hoog"], answer: 0, type: "oorzaak & gevolg", uitleg: "Zin 2 geeft de oorzaak (geen wind), zin 3 het gevolg (de vlieger duikt). De zinnen naast elkaar vertellen samen het verhaal." },
        { q: "Wat laat het woord 'toch' in zin 4 zien?", options: ["Rik gaat door terwijl je zou denken dat hij stopt", "Rik is klaar met vliegeren", "De wind wordt sterker", "Het park gaat sluiten"], answer: 0, type: "signaalwoord", uitleg: "'Toch' is een verrassings-woord: je verwacht het één (opgeven), er gebeurt het ander (doorgaan)." },
      ],
    },
    {
      titel: "De blauwe vinvis",
      tekst: "De blauwe vinvis is het grootste dier dat ooit heeft geleefd. Hij is langer dan twee schoolbussen achter elkaar. Alleen zijn tong is al zwaarder dan een auto. Toch eet deze reus vooral piepkleine kreeftjes, die krill heten. Daar heeft hij er dan wel miljoenen per dag van nodig.",
      vragen: [
        { q: "Wat wil de schrijver vooral vertellen?", options: ["Hoe reusachtig de blauwe vinvis is", "Hoe schoolbussen rijden", "Dat krill gevaarlijk is", "Dat auto's zwaar zijn"], answer: 0, type: "hoofdgedachte", uitleg: "Bussen, een tong als een auto, miljoenen kreeftjes: elke zin maakt hetzelfde punt — wat een réús. Dat is de hoofdgedachte." },
        { q: "Waarom staan de schoolbussen in de tekst?", options: ["Om te laten voelen hoe lang de vinvis is", "Vinvissen eten schoolbussen", "Omdat kinderen met de bus gaan", "Om te vertellen hoe zwaar hij is"], answer: 0, type: "vergelijking begrijpen", uitleg: "Dertig meter zegt je weinig — twee schoolbussen achter elkaar zie je meteen voor je. Een vergelijking maakt een getal voelbaar." },
      ],
    },
  ],
  [
    {
      titel: "Het toneelstuk",
      tekst: "Groep 7 voert vrijdag een toneelstuk op. Jesse heeft maar drie zinnen, maar het zijn wél de openingszinnen. De hele week zegt hij ze thuis foutloos op. Maar als hij op de avond zelf door het gordijn gluurt en de volle zaal ziet, is zijn hoofd ineens helemaal leeg. Meester Bas legt een hand op zijn schouder. \"Kijk maar naar mij, hier opzij van het podium,\" fluistert hij. \"Ik doe je zinnen geluidloos voor.\" Het doek gaat open. Jesse kijkt één keer opzij, ziet meesters lippen bewegen — en dan komen zijn eigen zinnen vanzelf. Het applaus na afloop is voor de hele klas, maar het voelt een beetje extra voor hem.",
      vragen: [
        { q: "Wat gebeurt er als Jesse de volle zaal ziet?", options: ["Hij vergeet van de zenuwen zijn zinnen", "Hij begint meteen te spelen", "Hij moet hard lachen", "Hij loopt naar huis"], answer: 0, type: "gevoel afleiden", uitleg: "'Zijn hoofd is ineens helemaal leeg' — de schrijver zegt niet 'zenuwachtig', maar laat het gebeuren. Thuis kende hij de zinnen wél: het ligt dus aan de zaal." },
        { q: "Het woord 'maar' in zin 4 laat zien dat…", options: ["er iets onverwachts komt", "het verhaal klaar is", "er een reden volgt", "Jesse goed kan spelen"], answer: 0, type: "signaalwoord", uitleg: "Eerst gaat alles goed (foutloos thuis), en 'maar' kondigt de omslag aan. Draai-woorden zijn wegwijzers in een verhaal." },
        { q: "Wat leer je vooral van dit verhaal?", options: ["Met een klein steuntje lukt het wél", "Toneelspelen is doodeng", "Drie zinnen is te weinig", "Applaus is het belangrijkst"], answer: 0, type: "hoofdgedachte", uitleg: "Meester Bas neemt de druk weg met een klein gebaar — en dan 'komen de zinnen vanzelf'. De hulp van meester is de sleutelscène van het verhaal." },
      ],
    },
    {
      titel: "Kippenvel",
      tekst: "Krijg jij weleens kippenvel, bijvoorbeeld als je het koud hebt of bij spannende muziek? Je ziet dan allemaal kleine bultjes op je armen. Bij elk haartje op je huid zit een piepklein spiertje. Wordt het koud, dan trekken al die spiertjes zich tegelijk samen en gaan je haartjes rechtop staan. Bij dieren met een dikke vacht is dat superhandig: de opgezette vacht houdt een laagje warme lucht vast, als een donsjas. Mensen hebben bijna geen vacht meer, dus bij ons helpt het eigenlijk niets. Kippenvel is daarmee een soort aandenken aan onze harige voorouders. En waarom heet het eigenlijk kíppenvel? Kijk maar eens naar een geplukte kip — precies dezelfde bultjes.",
      vragen: [
        { q: "Waardoor ontstaan de bultjes op je huid?", options: ["Kleine spiertjes trekken zich samen", "Je huid wordt dikker", "Er komt lucht onder je huid", "Je haren vallen uit"], answer: 0, type: "oorzaak & gevolg", uitleg: "De ketting staat in het midden van de tekst: koud → spiertjes trekken samen → haartjes rechtop. De bultjes zijn die aangespannen spiertjes." },
        { q: "Waarom is kippenvel voor dieren met een vacht wél handig?", options: ["De opgezette vacht houdt warme lucht vast", "Ze zien er groter uit voor vijanden", "Hun huid wordt sterker", "Ze kunnen er sneller van rennen"], answer: 0, type: "detail opzoeken", uitleg: "Na 'superhandig' komt de uitleg, met de vergelijking van de donsjas erbij. Zoek dat stukje op en lees het na." },
        { q: "Waarom heet het 'kippenvel'?", options: ["Je huid lijkt dan op die van een geplukte kip", "Kippen hebben het vaak koud", "Het is ontdekt door een kippenboer", "Kippen krijgen er ook bultjes van"], answer: 0, type: "woord uit de zin halen", uitleg: "De laatste zinnen beantwoorden precies deze vraag. Een tekst die zelf een vraag stelt ('waarom heet het eigenlijk…?'), geeft daarna bijna altijd het antwoord." },
      ],
    },
    {
      titel: "De regenboog",
      tekst: "Een regenboog lijkt toverij, maar het is zonlicht met een trucje. Zonlicht ziet er wit uit, maar er zitten alle kleuren in verstopt. Valt het licht door een regendruppel, dan wordt het gebroken: elke kleur buigt een nét iets andere kant op. Miljoenen druppels samen maken zo een boog van rood tot paars. Je ziet een regenboog alleen als de zon áchter je staat en de regen vóór je valt. Daarom zie je hem vaak net na een bui, als de zon alweer doorbreekt. De pot met goud aan het einde vind je helaas nooit: loop je ernaartoe, dan schuift de boog gewoon met je mee.",
      vragen: [
        { q: "Hoe ontstaan de kleuren van de regenboog?", options: ["Het licht wordt gebroken in regendruppels", "De regen kleurt het zonlicht", "De zon wordt rood en paars", "Wolken mengen de kleuren"], answer: 0, type: "oorzaak & gevolg", uitleg: "Achter de dubbele punt staat de uitleg: het licht breekt en elke kleur buigt anders af. Wit licht valt dus uit elkaar in alle kleuren." },
        { q: "Waar moet de zon staan om een regenboog te zien?", options: ["Achter je", "Recht boven je", "Vóór je", "Onder de wolken"], answer: 0, type: "detail opzoeken", uitleg: "Het staat er met nadruk-streepjes: de zon áchter je, de regen vóór je. Die nadruk betekent: dit is belangrijk." },
        { q: "Waarom vind je het einde van de regenboog nooit?", options: ["De boog schuift met je mee als je loopt", "De pot met goud is verstopt", "De regen stopt te snel", "Het einde ligt in zee"], answer: 0, type: "detail opzoeken", uitleg: "De laatste zin legt het uit, na de dubbele punt: loop je ernaartoe, dan schuift de boog mee. Jammer voor de goudzoekers!" },
      ],
    },
    {
      titel: "Oma's telefoon",
      tekst: "Fien logeert bij oma, en oma heeft een nieuwe telefoon. \"Dat ding luistert niet naar mij,\" moppert ze. Ze drukt te lang, te kort of nét verkeerd. Fien wil het eerst snel even voor haar doen. Maar dan bedenkt ze hoe zij het zelf leerde: door het duizend keer te proberen. Dus houdt ze haar handen op haar rug en vertelt alleen wáár oma moet drukken. Het duurt lang. Heel lang. Maar aan het eind van de middag stuurt oma helemaal zelf een foto naar de familie-app. 's Avonds krijgt Fien een berichtje van oma: een duim, een hartje en zeventien uitroeptekens.",
      vragen: [
        { q: "Wat is het probleem aan het begin?", options: ["Oma snapt haar nieuwe telefoon niet", "De telefoon is kapot", "Fien mag niet logeren", "De familie-app doet het niet"], answer: 0, type: "probleem vinden", uitleg: "Oma's gemopper ('dat ding luistert niet naar mij') en het verkeerd drukken laten het probleem zien, zonder dat het er letterlijk staat." },
        { q: "Waarom houdt Fien haar handen op haar rug?", options: ["Zodat oma het zelf leert doen", "Haar handen zijn koud", "Ze mag de telefoon niet aanraken", "Ze is boos op oma"], answer: 0, type: "conclusie trekken", uitleg: "Ze bedenkt eerst hoe zíj het leerde: door het zelf te proberen. Handen op de rug = niet overnemen. Dat moet je uit die twee zinnen samen halen." },
        { q: "Wat laat het berichtje aan het eind zien?", options: ["Dat oma het nu zelf kan en er blij mee is", "Dat de telefoon weer stuk is", "Dat Fien jarig is", "Dat oma boos is"], answer: 0, type: "conclusie trekken", uitleg: "Oma stuurt zélf een berichtje — dus het lukt haar nu. En een duim, een hartje en zeventien uitroeptekens: zo klinkt trots in emoji-taal." },
      ],
    },
  ],
  [
    {
      titel: "Zien met je oren",
      tekst: "Een vleermuis vliegt in het pikkedonker rakelings langs takken en muren, zonder ooit te botsen. Toch ziet hij bijna niets. Hoe kan dat? Vleermuizen gebruiken hun oren als ogen. Tijdens het vliegen maakt de vleermuis heel hoge piepjes — zó hoog dat mensenoren ze niet kunnen horen. Die geluidjes botsen tegen alles wat in de buurt is en kaatsen terug, als een echo in een tunnel. Uit die echo's hoort de vleermuis precies waar een tak zit, hoe dik die is, en zelfs of er een mug voorbijvliegt. Dit trucje heet echolocatie. Mensen hebben het nagemaakt: schepen zoeken er de zeebodem mee af, en dokters bekijken er baby's mee in de buik van hun moeder. De échte uitvinder was alleen een stuk kleiner — en miljoenen jaren eerder.",
      vragen: [
        { q: "Waar gaat deze tekst vooral over?", options: ["Hoe vleermuizen met geluid de weg vinden", "Waarom tunnels een echo hebben", "Hoe muggen vliegen", "Waarom vleermuizen slecht zien"], answer: 0, type: "hoofdgedachte", uitleg: "Piepjes, echo's, echolocatie: alles draait om één ding — de weg vinden met geluid. Het slechte zicht is alleen het startpunt van de tekst." },
        { q: "Waarom horen mensen de piepjes niet?", options: ["Ze zijn te hoog voor mensenoren", "Ze zijn te zacht", "Vleermuizen piepen alleen binnen", "Mensen letten niet op"], answer: 0, type: "detail opzoeken", uitleg: "Het staat tussen de gedachtestreepjes: zó hoog dat mensenoren ze niet kunnen horen. Stukjes tussen streepjes zijn vaak extra uitleg." },
        { q: "Hoe weet de vleermuis waar een tak zit?", options: ["De echo's van zijn piepjes kaatsen terug", "Hij voelt de wind langs de tak", "Hij onthoudt alle takken", "Hij volgt andere vleermuizen"], answer: 0, type: "oorzaak & gevolg", uitleg: "De ketting: piepje → botst tegen tak → kaatst terug → vleermuis hoort waar de tak zit. Kun je de ketting navertellen, dan snap je echolocatie." },
        { q: "Wat bedoelt de schrijver met de laatste zin?", options: ["De vleermuis had echolocatie eerder dan de mens", "Vleermuizen worden steeds kleiner", "De uitvinder was een kind", "Schepen bestaan al miljoenen jaren"], answer: 0, type: "doel van de schrijver", uitleg: "Mensen 'maakten het na' — maar de kleine, miljoenen jaren oudere uitvinder is de vleermuis zelf. Een knipoog als slot: de natuur was ons voor." },
      ],
    },
    {
      titel: "De eerste fiets",
      tekst: "De fiets is uitgevonden door een probleem met paarden. In 1815 barstte ver weg een enorme vulkaan uit. De aswolk maakte het jaar erna overal koud en donker: oogsten mislukten en er was te weinig voer voor paarden. Veel mensen konden zich daardoor geen paard meer veroorloven. De Duitse uitvinder Karl von Drais zocht daarom een vervoermiddel zónder paard. In 1817 bouwde hij een houten loopfiets: twee wielen achter elkaar en een stuur, maar nog geen trappers. Je zat op het zadel en duwde jezelf met je voeten vooruit, zoals kleuters nu op hun loopfietsje doen. Mensen lachten erom — tot bleek dat je er twee keer zo snel mee was als lopend. Pas zo'n vijftig jaar later kreeg de fiets trappers. Zo begon 's werelds handigste vervoermiddel met een vulkaan, een mislukte oogst en een houten plank op wielen.",
      vragen: [
        { q: "Wat gebeurde er éérst?", options: ["Een vulkaan barstte uit", "Von Drais bouwde de loopfiets", "De fiets kreeg trappers", "Mensen lachten om de fiets"], answer: 0, type: "volgorde", uitleg: "Volg de jaartallen: 1815 (vulkaan) → 1817 (loopfiets) → vijftig jaar later (trappers). Jaartallen zijn gratis wegwijzers bij volgorde-vragen." },
        { q: "Waarom zocht Von Drais een vervoermiddel zonder paard?", options: ["Paarden waren onbetaalbaar geworden", "Hij was bang voor paarden", "Paarden waren te langzaam", "Hij wilde beroemd worden"], answer: 0, type: "oorzaak & gevolg", uitleg: "'Daardoor' en 'daarom' rijgen de keten aan elkaar: mislukte oogst → te weinig voer → geen paard kunnen betalen → op zoek naar iets zonder paard." },
        { q: "Wat had de eerste loopfiets nog niet?", options: ["Trappers", "Wielen", "Een stuur", "Een zadel"], answer: 0, type: "detail opzoeken", uitleg: "De opsomming zegt het precies: twee wielen en een stuur, maar nog geen trappers. Lees bij zo'n rijtje wat er ná 'maar' komt." },
        { q: "Wat is de belangrijkste gedachte van deze tekst?", options: ["Een groot probleem kan tot een slimme uitvinding leiden", "Vulkanen zijn gevaarlijk", "Lopen is sneller dan fietsen", "Duitse uitvinders zijn de beste"], answer: 0, type: "hoofdgedachte", uitleg: "De slotzin vat de hele keten samen: vulkaan + mislukte oogst → de fiets. Nood maakt vindingrijk — dat is de rode draad." },
      ],
    },
    {
      titel: "Een huisdier in de klas (een mening!)",
      tekst: "Onze klas wil een huisdier, en wat mij betreft wordt het een aquarium met vissen. Een vis is stil, kost weinig en niemand hoeft ervan te niezen. Dat laatste is belangrijk: uit ons klassenonderzoek bleek dat drie kinderen allergisch zijn voor dieren met een vacht. Een konijn of cavia valt dus meteen af. Vissen kijken is bovendien rustgevend — bij het aquarium in de bibliotheek wordt zelfs de drukste klas kalm. Natuurlijk is er ook een nadeel: in de vakantie moet iemand de vissen voeren. Maar daar is een simpele oplossing voor: een automatisch voerbakje met een klokje erin. Kortom, een vis is het perfecte klassendier. Wie stemt er vóór?",
      vragen: [
        { q: "'Wat mij betreft wordt het een aquarium.' Dat is een…", options: ["mening", "feit", "vraag", "onderzoek"], answer: 0, type: "feit of mening", uitleg: "'Wat mij betreft' is een mening-aankondiger, net als 'ik vind'. Wat daarna komt kun je niet nameten — alleen ermee eens of oneens zijn." },
        { q: "Wat is uit deze tekst WEL een feit?", options: ["Drie kinderen zijn allergisch voor dieren met een vacht", "Een vis is het perfecte klassendier", "Vissen kijken is rustgevend", "Een aquarium is gezellig"], answer: 0, type: "feit of mening", uitleg: "Het komt uit een onderzoek en je kunt het natellen — dat maakt het een feit. 'Perfect' en 'rustgevend' zijn dingen die je vindt." },
        { q: "Waarom valt een konijn af?", options: ["Drie kinderen zijn allergisch voor vachtdieren", "Konijnen maken te veel lawaai", "Konijnen zijn te duur", "De juf houdt niet van konijnen"], answer: 0, type: "detail opzoeken", uitleg: "'Dus' verbindt de allergie-zin met de konijn-zin: allergisch voor vacht → vachtdier valt af. Het antwoord staat één zin eerder dan de conclusie." },
        { q: "Wat wil de schrijver met de laatste zin bereiken?", options: ["De klas laten meestemmen met het plan", "Iedereen aan het lachen maken", "Uitleggen hoe je vissen voert", "De juf bedanken"], answer: 0, type: "doel van de schrijver", uitleg: "'Wie stemt er vóór?' is een oproep. Een betoog eindigt vaak met wat de schrijver van de lezer wíl — hier: meestemmen." },
      ],
    },
  ],
  [
    {
      titel: "Statiegeld op flesjes",
      tekst: "Sinds juli 2021 betaal je in Nederland statiegeld op kleine plastic flesjes: vijftien cent per flesje. Lever je het lege flesje in bij de supermarkt, dan krijg je dat geld gewoon terug. Het doel is simpel: minder plastic op straat en in de natuur.\n\nWerkt het? Grotendeels wel. Onderzoekers telden vóór en na de invoering het zwerfafval langs wegen en in parken. Het aantal plastic flesjes in het zwerfvuil is flink gedaald. Logisch, zeggen zij: een flesje is nu ineens geld waard. Sommige mensen rapen zelfs flesjes van anderen op om ze in te leveren.\n\nToch is niet iedereen even blij. Supermarkten moesten dure inleverautomaten kopen en zijn extra tijd kwijt aan het legen ervan. Sommige klanten vinden het bovendien gedoe: je moet je lege flesjes bewaren én onthouden mee te nemen. En wie zijn flesje toch in de prullenbak gooit, is zijn vijftien cent kwijt.\n\nDe overheid vond de resultaten goed genoeg om door te pakken: sinds 2023 zit er ook statiegeld op blikjes. Milieuorganisaties willen zelfs nog verder — zij dromen van statiegeld op bijvoorbeeld koffiebekers.\n\nEn jij? Grote kans dat er bij jou thuis al een tas met lege flesjes bij de deur staat. Precies zó werkt statiegeld: het maakt opruimen niet braaf, maar gewoon slim.",
      vragen: [
        { q: "Sinds wanneer zit er statiegeld op kleine plastic flesjes?", options: ["Sinds juli 2021", "Sinds 2023", "Sinds 2015", "Sinds vorige maand"], answer: 0, type: "detail opzoeken", uitleg: "Er staan twee jaartallen in de tekst: 2021 (flesjes) en 2023 (blikjes). Lees precies welk jaartal bij welke regel hoort." },
        { q: "Hoe weten onderzoekers dat het statiegeld werkt?", options: ["Ze telden het zwerfafval vóór en na de invoering", "Ze vroegen het aan supermarkten", "Ze keken naar de verkoopcijfers", "Ze telden de inleverautomaten"], answer: 0, type: "detail opzoeken", uitleg: "Alinea 2 beschrijft hún methode: tellen vóór en na. Bij de vraag 'hoe weten ze dat?' zoek je naar wat de onderzoekers déden." },
        { q: "Waarom zijn supermarkten niet blij?", options: ["Dure automaten en extra werk", "Ze verkopen minder flesjes", "Klanten worden boos op ze", "Het zwerfafval neemt toe"], answer: 0, type: "standpunt vinden", uitleg: "'Toch is niet iedereen even blij' kondigt de tegenstemmen aan. Daarna volgen de redenen van de supermarkten: dure automaten, extra tijd." },
        { q: "Wat gebeurde er in 2023?", options: ["Er kwam ook statiegeld op blikjes", "Het statiegeld werd afgeschaft", "Koffiebekers kregen statiegeld", "Flesjes werden goedkoper"], answer: 0, type: "detail opzoeken", uitleg: "'Doorpakken' betekende: dezelfde regel, nu ook voor blikjes. De koffiebekers zijn nog maar een droom van de milieuorganisaties." },
        { q: "Wat bedoelt de schrijver met 'opruimen niet braaf, maar slim'?", options: ["Statiegeld maakt opruimen aantrekkelijk omdat het geld oplevert", "Alleen slimme mensen ruimen op", "Braaf zijn is ouderwets", "Opruimen hoeft niet meer"], answer: 0, type: "thema van het verhaal", uitleg: "De hele tekst laat zien dat mensen flesjes inleveren omdat het wat opbrengt — niet omdat het moet. De slotzin vat dat samen in één tegenstelling." },
      ],
    },
    {
      titel: "Vijf minuten per dag",
      tekst: "Fiene wilde dolgraag viool spelen — tot ze er écht een had. In haar hoofd klonk ze als een beroemde violiste, maar uit de viool komen vooral piepende en krassende geluiden. Na drie weken wil ze ermee stoppen. \"Het wordt toch nooit wat,\" zegt ze tegen buurvrouw Roos, die vroeger in een orkest speelde.\n\nRoos pakt de viool en speelt een wonderschoon wijsje. \"Weet je hoe ik dit heb geleerd?\" vraagt ze. \"Vijf minuten per dag. Geen uren — vijf minuten, maar dan wél élke dag. Oefenen is net tandenpoetsen: het werkt alleen als je het altijd doet.\" Ze maken een afspraak: Fiene oefent elke dag vijf minuten, en elke vrijdag speelt ze het resultaat voor Roos.\n\nDe eerste vrijdag klinkt het nog steeds als een verdrietige kat. Maar Roos hoort iets anders: \"Je tweede noot was zuiver. Vorige week nog geen één.\" Elke week zoekt ze één ding dat beter gaat. En gek genoeg gaat er daardoor elke week ook écht iets beter.\n\nNa de zomer speelt Fiene op het schoolplein een heus liedje. Het is kort, en er zit één kras in. Maar als de klas klapt, weet Fiene precies wat ze morgen gaat doen. Vijf minuten. Gewoon, zoals elke dag.",
      vragen: [
        { q: "Waarom wil Fiene na drie weken stoppen?", options: ["Er komen alleen piep- en krasgeluiden uit de viool", "De viool is kapotgegaan", "Roos vindt haar niet goed", "Ze houdt niet meer van muziek"], answer: 0, type: "probleem vinden", uitleg: "De tegenstelling in alinea 1 is het probleem: in haar hoofd klinkt ze prachtig, in het echt piept en krast het. Dat verschil ontmoedigt haar." },
        { q: "Waarom vergelijkt Roos oefenen met tandenpoetsen?", options: ["Het werkt alleen als je het elke dag doet", "Allebei duurt het precies vijf minuten", "Je doet het voor de spiegel", "Het is allebei saai"], answer: 0, type: "vergelijking begrijpen", uitleg: "De uitleg staat er meteen achter: 'het werkt alleen als je het altijd doet'. De vergelijking gaat over élke dag, niet over tanden." },
        { q: "Wat doet Roos elke vrijdag?", options: ["Eén ding benoemen dat beter gaat", "Zelf een liedje voorspelen", "De viool stemmen", "Nieuwe noten opschrijven"], answer: 0, type: "detail opzoeken", uitleg: "Alinea 3: 'elke week zoekt ze één ding dat beter gaat'. En let op het gevolg in de zin erna — daardoor gáát er ook echt iets beter." },
        { q: "Hoe lang oefent Fiene per dag?", options: ["Vijf minuten", "Een kwartier", "Een uur", "Alleen op vrijdag"], answer: 0, type: "detail opzoeken", uitleg: "Het getal komt drie keer voorbij, tot in de slotzin. Als een schrijver iets herhaalt, is het belangrijk." },
        { q: "Wat is het thema van dit verhaal?", options: ["Klein maar dagelijks oefenen brengt je verder", "Viool is het moeilijkste instrument", "Complimenten zijn belangrijker dan oefenen", "Sommige mensen hebben nou eenmaal talent"], answer: 0, type: "thema van het verhaal", uitleg: "Vijf minuten per dag, elke week één stapje beter, en aan het slot wéér die vijf minuten: het hele verhaal ademt hetzelfde idee. Precies het idee van deze Leesladder, trouwens." },
      ],
    },
  ],
];

export const VERSIES = {
  A: TREDE_META.map((m, i) => ({ ...m, teksten: A[i] })),
  B: TREDE_META.map((m, i) => ({ ...m, teksten: B[i] })),
  C: TREDE_META.map((m, i) => ({ ...m, teksten: C[i] })),
};
