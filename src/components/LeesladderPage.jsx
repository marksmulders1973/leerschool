// Leesladder-pagina "/leesladder" — printbaar begrijpend-lezen-pakket dat
// KLEIN begint (5 zinnen) en per trede opbouwt naar echte toets-lengte.
//
// Waarom (Mark 2026-07-02, voor Brian): veel kinderen lopen bij begrijpend
// lezen vast op de LENGTE van de tekst, niet op het lezen zelf. Een collega
// zei het eerder al: "begin met heel weinig tekst en bouw op." Dit pakket is
// die tekstlengte-ladder op papier: succes-ervaring eerst, dan pas langer.
//
// Zelfde patroon als OefenpakketPage: WYSIWYG witte A4-vellen, printen via
// de browser (window.print → "Opslaan als PDF"), vragen gratis, de
// antwoordsleutel-met-uitleg ontgrendelt na e-mail (lead-magnet).
// Alle teksten zijn eigen werk — geen overgenomen toets- of boekteksten.

import { useEffect, useRef, useState } from "react";
import { BRAND } from "../brand.js";
import supabase from "../supabase.js";
import { track } from "../utils.js";

const LETTERS = ["A", "B", "C", "D"];

// ── De ladder: 4 treden, elk met eigen teksten + vragen ─────────
// type-labels staan alleen in de antwoordsleutel (ouder), niet bij de vraag —
// anders sturen ze het kind al richting het antwoord.
const TREDEN = [
  {
    nr: 1,
    titel: "Mini-verhaaltjes",
    sub: "5 zinnen per tekst — lekker kort, lekker veel succes",
    emoji: "🪜",
    kindTip: "Lees de tekst rustig. Zet een rondje om het goede antwoord.",
    teksten: [
      {
        titel: "De egel",
        tekst: "Bram vindt een egel in de tuin. Het diertje zit stil onder een struik. Egels slapen overdag en zoeken 's nachts hun eten. Daarom ziet Bram hem bijna nooit lopen. Vannacht gaat de egel op zoek naar slakken.",
        vragen: [
          { q: "Waar gaat dit stukje vooral over?", options: ["Een egel in de tuin", "Slakken vangen", "De struik van Bram", "Slapen"], answer: 0, type: "hoofdgedachte", uitleg: "Bijna elke zin gaat over de egel. De slakken en de struik komen maar één keer voorbij — dat is niet waar de tekst óver gaat." },
          { q: "Waarom ziet Bram de egel bijna nooit lopen?", options: ["De egel is bang voor Bram", "Egels slapen overdag", "De struik is te groot", "Er zijn geen slakken"], answer: 1, type: "oorzaak & gevolg", uitleg: "Het woord 'daarom' plakt twee zinnen aan elkaar: egels slapen overdag → dús ziet Bram hem niet." },
        ],
      },
      {
        titel: "Het ruimtestation",
        tekst: "Hoog boven de aarde vliegt een ruimtestation. Er wonen astronauten in, soms wel een half jaar. Zij doen daar proefjes die op aarde niet kunnen. Alles zweeft er, zelfs druppels water. Daarom zuigen astronauten hun drinken uit een zakje.",
        vragen: [
          { q: "Hoe lang wonen astronauten soms in het ruimtestation?", options: ["Een week", "Een maand", "Een half jaar", "Tien jaar"], answer: 2, type: "detail opzoeken", uitleg: "Het staat letterlijk in zin 2. Bij zo'n vraag mag je altijd terugkijken in de tekst — dat is geen spieken, dat is slim lezen." },
          { q: "In zin 3 staat: 'Zij doen daar proefjes.' Wie zijn 'zij'?", options: ["De druppels", "De astronauten", "De proefjes", "De mensen op aarde"], answer: 1, type: "verwijswoord", uitleg: "Een woord als 'zij' wijst terug naar iets uit de zin ervóór. Daar staan de astronauten." },
        ],
      },
      {
        titel: "De verdwenen boterham",
        tekst: "Noor legt haar boterham op de picknicktafel. Ze rent even naar de schommel. Als ze terugkomt, is haar bord leeg. In de boom zit een brutale kauw te smullen. Noor moet er zelf om lachen.",
        vragen: [
          { q: "Wat is er met de boterham gebeurd?", options: ["Noor heeft hem opgegeten", "De kauw heeft hem gepakt", "Hij is op de grond gevallen", "Mama heeft hem weggehaald"], answer: 1, type: "conclusie trekken", uitleg: "Het staat er niet letterlijk! Je plakt twee zinnen aan elkaar: het bord is leeg + de vogel zit te smullen. Zelf iets bedenken uit twee stukjes heet een conclusie trekken." },
          { q: "Wat betekent 'smullen'?", options: ["Lekker eten", "Hard roepen", "Stil zitten", "Wegvliegen"], answer: 0, type: "woord uit de zin halen", uitleg: "De kauw heeft net een boterham gepakt — wat doet hij daar dan mee? De zinnen eromheen verklappen wat een moeilijk woord betekent." },
        ],
      },
      {
        titel: "Fietsband plakken",
        tekst: "Een lekke band plak je zo. Haal eerst de band van het wiel. Zoek dan het gaatje door de band in een emmer water te duwen. Waar belletjes omhoog komen, zit het lek. Plak daar de pleister stevig op.",
        vragen: [
          { q: "Wat doe je het éérst?", options: ["De band in water duwen", "De band van het wiel halen", "De pleister opplakken", "Belletjes zoeken"], answer: 1, type: "volgorde", uitleg: "Woorden als 'eerst' en 'dan' zijn volgorde-woorden. Zin 2 zegt letterlijk 'eerst'." },
          { q: "Hoe vind je het gaatje in de band?", options: ["Door heel goed te kijken", "Door de band in water te duwen", "Door de pleister te plakken", "Door het wiel rond te draaien"], answer: 1, type: "detail opzoeken", uitleg: "Waar het lek zit, komen belletjes omhoog in het water — zo zie je het gaatje vanzelf." },
        ],
      },
      {
        titel: "De oude vuurtoren",
        tekst: "Aan de kust staat een vuurtoren van honderd jaar oud. Vroeger draaide er elke nacht een groot licht. Schepen zagen zo waar de gevaarlijke rotsen lagen. Tegenwoordig gebruiken schepen een computer met zeekaarten. Toch laat de stad het licht branden, omdat mensen het zo mooi vinden.",
        vragen: [
          { q: "Waarom was het licht vroeger belangrijk?", options: ["Zodat schepen niet op de rotsen voeren", "Omdat het er mooi uitzag", "Omdat de stad dat wilde", "Zodat de toren warm bleef"], answer: 0, type: "oorzaak & gevolg", uitleg: "Zin 3 legt het uit: door het licht zagen schepen waar de gevaarlijke rotsen lagen." },
          { q: "Waarom brandt het licht nú nog steeds?", options: ["Schepen hebben het nodig", "Mensen vinden het mooi", "De computer is kapot", "Het kan niet uit"], answer: 1, type: "signaalwoord", uitleg: "'Omdat' is een reden-woord: de reden komt er meteen achteraan. En 'toch' verklapt een verrassing — het hóéft niet meer, maar het gebeurt wél." },
        ],
      },
      {
        titel: "Mieren",
        tekst: "Een mier is klein, maar supersterk. Hij kan wel vijftig keer zijn eigen gewicht tillen. Dat is alsof jij een auto optilt. Mieren werken bovendien altijd samen in een grote groep. Zo bouwen ze lange gangen onder de grond.",
        vragen: [
          { q: "Wat wil de schrijver vooral vertellen?", options: ["Mieren zijn sterk en werken samen", "Mieren tillen auto's op", "Jij bent sterker dan een mier", "Gangen graven is zwaar"], answer: 0, type: "hoofdgedachte", uitleg: "De tekst noemt twee dingen over mieren: supersterk (zin 1-3) en samenwerken (zin 4-5). Het goede antwoord vat allebei samen." },
          { q: "Waarom staat de zin over de auto in de tekst?", options: ["Mieren tillen echt auto's op", "Om je te laten voelen hoe sterk een mier is", "Omdat auto's zwaar zijn", "Om te vertellen dat jij sterk bent"], answer: 1, type: "vergelijking begrijpen", uitleg: "Vijftig keer je eigen gewicht is lastig voor te stellen. De schrijver maakt er een plaatje van dat je wél kent: jij die een auto optilt." },
        ],
      },
    ],
  },
  {
    nr: 2,
    titel: "Korte verhalen",
    sub: "± 9 zinnen — één alinea, drie vragen",
    emoji: "🪜🪜",
    kindTip: "Lees eerst de hele tekst. Kijk bij elke vraag gerust terug in de tekst.",
    teksten: [
      {
        titel: "De klimbaan",
        tekst: "Vandaag gaat groep 7 naar het klimbos. Sam heeft er weken naar uitgekeken. Maar bij de hoogste klimbaan blijft hij ineens staan. Zijn benen voelen als pudding. Juf Karin ziet het en klimt rustig naast hem. \"Kijk alleen naar de volgende stap,\" zegt ze. Stap voor stap komt Sam steeds hoger. Bovenaan durft hij zelfs naar beneden te zwaaien. Op de terugweg in de bus praat hij nergens anders meer over.",
        vragen: [
          { q: "Hoe voelt Sam zich bij de hoogste klimbaan?", options: ["Boos", "Bang", "Verdrietig", "Verveeld"], answer: 1, type: "gevoel afleiden", uitleg: "De schrijver zégt nergens 'bang', maar laat het voelen: 'zijn benen voelen als pudding' en hij blijft ineens staan." },
          { q: "Het woord 'maar' in zin 3 laat zien dat…", options: ["er iets onverwachts komt", "de tekst bijna klaar is", "er een reden komt", "Sam blij is"], answer: 0, type: "signaalwoord", uitleg: "'Maar' is een draai-woord: eerst keek Sam er juist naar uit, en dán komt er iets dat daar tegenin gaat." },
          { q: "Wat leer je vooral van dit verhaal?", options: ["Klimbossen zijn gevaarlijk", "Met kleine stapjes kom je verder", "Juffen kunnen goed klimmen", "Zwaaien is leuk"], answer: 1, type: "hoofdgedachte", uitleg: "De tip van juf ('kijk alleen naar de volgende stap') is precies wat Sam boven brengt. Dat is de boodschap van het verhaal — en stiekem ook van deze leesladder!" },
        ],
      },
      {
        titel: "Plastic soep",
        tekst: "In de oceaan drijft heel veel plastic afval. Onderzoekers noemen dat de plastic soep. Vogels en vissen zien de stukjes aan voor eten. Daardoor worden veel dieren ziek. Het plastic verdwijnt niet vanzelf; het valt alleen uiteen in piepkleine stukjes. Die stukjes noem je microplastics. Gelukkig zijn er slimme uitvinders. Zij bouwen drijvende vangarmen die het plastic uit zee scheppen. Maar het allerbeste blijft: minder plastic weggooien.",
        vragen: [
          { q: "Wat zijn microplastics?", options: ["Piepkleine stukjes plastic", "Drijvende vangarmen", "Zieke vissen", "Soorten soep"], answer: 0, type: "woord uit de zin halen", uitleg: "De zin ervóór legt het al uit: plastic valt uiteen in piepkleine stukjes — 'die stukjes noem je microplastics'." },
          { q: "Waardoor worden veel zeedieren ziek?", options: ["Ze eten stukjes plastic op", "Het water is te koud", "De vangarmen maken lawaai", "Er is te weinig eten"], answer: 0, type: "oorzaak & gevolg", uitleg: "'Daardoor' wijst terug naar de zin ervoor: dieren zien plastic aan voor eten (en eten het dus op)." },
          { q: "Wat vindt de schrijver het allerbelangrijkst?", options: ["Vangarmen bouwen", "Minder plastic weggooien", "Soep onderzoeken", "Vissen voeren"], answer: 1, type: "mening van de schrijver", uitleg: "'Maar het allerbeste blijft…' — de schrijver bewaart zijn eigen punt voor het slot. Het einde van een tekst is vaak goud waard." },
        ],
      },
      {
        titel: "Waarom gapen we?",
        tekst: "Iedereen gaapt: baby's, opa's en zelfs vissen. Lang dachten mensen dat je gaapt omdat je te weinig lucht binnenkrijgt. Dat blijkt niet te kloppen. Onderzoekers denken nu dat gapen je hersenen een beetje afkoelt. Een koel brein werkt beter, net zoals een koele computer sneller is. Gapen is bovendien besmettelijk. Zie jij iemand gapen, dan is de kans groot dat je meedoet. Dat komt doordat je hersenen automatisch meevoelen met anderen. Grote kans dat je tijdens deze tekst al één keer gegaapt hebt.",
        vragen: [
          { q: "Wat dachten mensen vróéger over gapen?", options: ["Het koelt je hersenen af", "Je krijgt te weinig lucht binnen", "Het is besmettelijk", "Alleen baby's doen het"], answer: 1, type: "detail opzoeken", uitleg: "Let op tijd-woorden: 'lang dachten mensen…' gaat over vroeger, 'onderzoekers denken nu…' over nu. De vraag vraagt naar vroeger." },
          { q: "Waarmee vergelijkt de schrijver je hersenen?", options: ["Met een vis", "Met een computer", "Met een baby", "Met de lucht"], answer: 1, type: "vergelijking begrijpen", uitleg: "'Net zoals een koele computer sneller is' — de schrijver pakt iets dat je kent om iets nieuws uit te leggen." },
          { q: "'Gapen is besmettelijk' betekent hier:", options: ["Je wordt er ziek van", "Je neemt het snel van een ander over", "Het is vies", "Het duurt heel lang"], answer: 1, type: "woord uit de zin halen", uitleg: "De zinnen erna leggen het uit: zie je iemand gapen, dan doe je vanzelf mee. Besmettelijk hoeft dus niet over ziek zijn te gaan." },
        ],
      },
      {
        titel: "Sparen voor de drone",
        tekst: "Lena wil een drone van zestig euro. Ze verdient elke week vier euro met de hond van de buren uitlaten. Eerst koopt ze van dat geld steeds snoep en stickers. Na een maand heeft ze daardoor bijna niets gespaard. Dan maakt ze een plan: elke week drie euro in de spaarpot, één euro voor leuke dingen. Op een kalender kleurt ze per week een vakje. Zo ziet ze haar spaarpot langzaam groeien. Na twintig weken is het eindelijk zover. Lena vliegt haar drone door de tuin — en dat voelt dubbel zo leuk, omdat ze er zelf voor heeft gespaard.",
        vragen: [
          { q: "Wat gaat er in het begin mis?", options: ["De hond loopt weg", "Lena geeft haar geld meteen uit", "De drone is uitverkocht", "Ze verdient niets"], answer: 1, type: "probleem vinden", uitleg: "Ze koopt steeds snoep en stickers, 'daardoor' spaart ze bijna niets. Het probleem staat vóór het plan." },
          { q: "Hoeveel euro spaart Lena per week volgens haar plan?", options: ["Eén euro", "Drie euro", "Vier euro", "Zestig euro"], answer: 1, type: "detail opzoeken", uitleg: "Het plan: drie euro sparen, één euro uitgeven. Pas op voor de andere getallen in de tekst — die staan er om je te testen." },
          { q: "Waarom voelt de drone 'dubbel zo leuk'?", options: ["Hij was in de aanbieding", "Ze heeft er zelf voor gespaard", "De tuin is groot", "Hij vliegt extra hoog"], answer: 1, type: "oorzaak & gevolg", uitleg: "Het staat na het reden-woord 'omdat'. Zelf ergens hard voor werken maakt de beloning groter — dat is de boodschap." },
        ],
      },
    ],
  },
  {
    nr: 3,
    titel: "Flinke alinea's",
    sub: "± 130 woorden — hier train je doorzetten",
    emoji: "🪜🪜🪜",
    kindTip: "Tip: lees eerst de vragen, dan weet je waar je op moet letten.",
    teksten: [
      {
        titel: "Winterslaap",
        tekst: "Als het koud wordt, verdwijnen egels, vleermuizen en kikkers ineens. Ze houden een winterslaap, en dat is véél meer dan gewoon lang slapen. Het lichaam gaat bijna helemaal op de spaarstand. Het hart van een egel klopt normaal zo'n tweehonderd keer per minuut, maar in de winterslaap nog maar een paar keer. Ook wordt het dier bijna net zo koud als de lucht om hem heen. Zo verbruikt het lichaam bijna geen energie, en dat is precies de bedoeling: in de winter is er nauwelijks eten te vinden. Van het vet dat het dier in de herfst heeft gegeten, kan het maandenlang leven. Toch is de winterslaap niet zonder gevaar. Wie te vroeg wakker wordt, vindt geen eten. Maak in de winter dus nooit een blad- of takkenhoop open: er kan een egel in liggen die je leven redt door hem te laten liggen.",
        vragen: [
          { q: "Waar gaat deze tekst vooral over?", options: ["Hoe de winterslaap werkt", "Het hart van de egel", "Eten zoeken in de herfst", "Vleermuizen"], answer: 0, type: "hoofdgedachte", uitleg: "Egelhart, spaarstand, vet eten: het zijn allemaal stukjes van één groot onderwerp — de winterslaap. De hoofdgedachte is de paraplu waar alles onder past." },
          { q: "Hoe vaak klopt het hart van een egel normaal per minuut?", options: ["Een paar keer", "Vijftig keer", "Ongeveer tweehonderd keer", "Duizend keer"], answer: 2, type: "detail opzoeken", uitleg: "Er staan twee getallen dicht bij elkaar: tweehonderd (normaal) en een paar (in winterslaap). Lees precies welke bij welke situatie hoort." },
          { q: "Waarom is die spaarstand zo handig?", options: ["In de winter is er bijna geen eten", "Het dier wil graag dromen", "Zo blijft het hart sterk", "De lucht is te koud om te spelen"], answer: 0, type: "oorzaak & gevolg", uitleg: "Na de dubbele punt staat de reden: in de winter is er nauwelijks eten. Wie bijna geen energie verbruikt, heeft ook bijna geen eten nodig." },
          { q: "Waarom eindigt de schrijver met de zin over de bladhoop?", options: ["Om je te waarschuwen", "Om je aan het lachen te maken", "Om te vertellen hoe je egels vangt", "Omdat de tekst vol was"], answer: 0, type: "doel van de schrijver", uitleg: "De schrijver wil dat jíj iets doet (of juist niet doet): laat bladhopen in de winter dicht. Een tekst kan uitleggen én waarschuwen tegelijk." },
        ],
      },
      {
        titel: "De uitvinding van het ijshoorntje",
        tekst: "Het ijshoorntje is per ongeluk uitgevonden. In 1904 was er in Amerika een grote zomermarkt. Een ijsverkoper deed gouden zaken: het was bloedheet en zijn schepijs vloog de kraam uit. Maar toen raakten zijn schaaltjes op. Naast hem stond een bakker, Ernest Hamwi, die dunne wafels verkocht. Naar zíjn kraam kwam bijna niemand. Hamwi kreeg een idee. Hij rolde een warme wafel tot een puntzak en gaf hem aan zijn buurman. Het ijs paste er precies in. De klanten vonden het geweldig: een schaaltje dat je op kunt eten! Sindsdien veroverde het hoorntje de hele wereld. Twee verkopers met elk een probleem — samen hadden ze de oplossing. Misschien wel de lekkerste samenwerking ooit.",
        vragen: [
          { q: "Wat gebeurde er éérst?", options: ["Hamwi rolde een wafel tot puntzak", "De schaaltjes van de ijsverkoper raakten op", "Het hoorntje veroverde de wereld", "De klanten aten het schaaltje op"], answer: 1, type: "volgorde", uitleg: "Zet de gebeurtenissen op een rijtje: ijs verkopen → schaaltjes op → idee van Hamwi → wafel rollen → wereldsucces. Het woord 'maar toen' markeert het beginpunt van het probleem." },
          { q: "Welk probleem loste de wafel op?", options: ["Het ijs smolt te snel", "Er waren geen schaaltjes meer", "De wafels waren te koud", "De markt was te druk"], answer: 1, type: "probleem vinden", uitleg: "De ijsverkoper kon niets meer serveren zonder schaaltjes — de opgerolde wafel werd het nieuwe schaaltje." },
          { q: "Waarom vonden klanten het hoorntje geweldig?", options: ["Je kunt het schaaltje opeten", "Het was gratis", "Het ijs bleef er kouder in", "Het kwam uit een ver land"], answer: 0, type: "detail opzoeken", uitleg: "Het staat letterlijk in de tekst, met een uitroepteken erbij — zo laat de schrijver enthousiasme zien." },
          { q: "Wat is de belangrijkste gedachte van deze tekst?", options: ["Samenwerken kan iets moois opleveren", "IJs is het lekkerst in de zomer", "Markten zijn altijd druk", "Wafels verkopen is moeilijk"], answer: 0, type: "hoofdgedachte", uitleg: "De laatste twee zinnen vatten het samen: twee problemen + samenwerking = één gouden idee. Let op: het slot van een tekst verklapt vaak de boodschap." },
        ],
      },
      {
        titel: "De nieuwe speeltuin (een mening!)",
        tekst: "Onze wijk heeft sinds vorige maand een nieuwe speeltuin, en wat mij betreft is het meteen de mooiste van de stad. Er staat een kabelbaan van twaalf meter, een klimtoren met drie glijbanen en een trampoline die in de grond ligt. Vooral die trampoline is een slim idee: je kunt er niet vanaf vallen, dus ook kleuters springen veilig mee. Toch is er één ding jammer. Er staan maar twee bankjes, en die zijn bijna altijd bezet. Ouders die willen zitten, hebben pech. De gemeente belooft dat er in de lente twee bankjes bij komen. Ik hoop dat dat echt gebeurt, want een middag speeltuin duurt lang als je moet staan. Kom vooral zelf een keer kijken — maar neem voor de zekerheid je eigen stoel mee.",
        vragen: [
          { q: "'Het is de mooiste speeltuin van de stad.' Dat is een…", options: ["feit", "mening", "vraag", "belofte"], answer: 1, type: "feit of mening", uitleg: "Truc: kun je het nameten of opzoeken? 'Twaalf meter' kun je nameten (feit). 'De mooiste' kun je alleen vínden (mening). 'Wat mij betreft' verklapt het al." },
          { q: "Wat is uit deze tekst WEL een feit?", options: ["De kabelbaan is twaalf meter lang", "Het is de mooiste speeltuin", "Staan is vreselijk", "De speeltuin is een slim idee"], answer: 0, type: "feit of mening", uitleg: "Een lengte kun je controleren met een meetlint. De rest zijn dingen die je ervan kunt vínden." },
          { q: "Waarom is de ingegraven trampoline slim?", options: ["Je kunt er niet vanaf vallen", "Hij is groter dan normaal", "Hij is goedkoper", "Kleuters springen hoger"], answer: 0, type: "detail opzoeken", uitleg: "Na de dubbele punt volgt de uitleg: niet vanaf kunnen vallen → ook veilig voor kleuters." },
          { q: "Wat doet de schrijver in de allerlaatste zin?", options: ["Een grapje maken over de bankjes", "Je bang maken voor de speeltuin", "Uitleggen hoe een stoel werkt", "De gemeente bedanken"], answer: 0, type: "doel van de schrijver", uitleg: "'Neem je eigen stoel mee' is een knipoog naar het bankjes-probleem. Schrijvers eindigen graag met een grapje dat de lezer alleen snapt als hij de hele tekst las — jij dus!" },
        ],
      },
    ],
  },
  {
    nr: 4,
    titel: "Echte toets-lengte",
    sub: "± 220 woorden, meerdere alinea's — zoals op de Doorstroomtoets",
    emoji: "🪜🪜🪜🪜",
    kindTip: "Grote tekst? Lees alinea voor alinea. Elke alinea heeft zijn eigen mini-onderwerp.",
    teksten: [
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
  },
];

// ── Print-stylesheet (zelfde truc als het oefenpakket) ──────────
const PRINT_CSS = `
@media print {
  body * { visibility: hidden !important; }
  .leesladder-print, .leesladder-print * { visibility: visible !important; }
  .leesladder-print {
    position: absolute !important;
    top: 0; left: 0; right: 0;
    margin: 0 !important;
    background: #fff !important;
  }
  .leesladder-noprint { display: none !important; }
  .leesladder-sheet {
    box-shadow: none !important;
    margin: 0 auto !important;
    page-break-after: always;
    border: none !important;
  }
  .leesladder-sheet:last-child { page-break-after: auto; }
  .leesladder-vraag, .leesladder-tekst { break-inside: avoid; page-break-inside: avoid; }
  @page { margin: 16mm 14mm; }
}
`;

const MAIL_DONE_KEY = "lk_leesladder_mail";
// Wie het Doorstroomtoets-oefenpakket al ontgrendelde, hoeft hier niet
// nóg een keer zijn e-mail in te vullen (zelfde ouder, zelfde belofte).
const OEFENPAKKET_MAIL_KEY = "lk_oefenpakket_mail";

function leadSource() {
  try {
    const p = new URLSearchParams(window.location.search);
    const utm = p.get("utm_source");
    if (utm) {
      const camp = p.get("utm_campaign");
      return `utm:${utm}${camp ? "/" + camp : ""}`.slice(0, 80);
    }
    const intern = sessionStorage.getItem("lk_lead_src");
    if (intern) return intern.slice(0, 80);
    const ref = document.referrer;
    if (ref) {
      const h = new URL(ref).hostname.replace(/^www\./, "");
      if (h && !h.includes("leerkwartier")) return `ref:${h}`.slice(0, 80);
    }
  } catch {}
  return "leesladder-direct";
}

export default function LeesladderPage({ setPage } = {}) {
  const [email, setEmail] = useState("");
  const [mailStatus, setMailStatus] = useState("idle");
  const emailRef = useRef(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "De Leesladder — begrijpend lezen oefenen in kleine stapjes (printbaar) — " + BRAND.name;
    const style = document.createElement("style");
    style.textContent = PRINT_CSS;
    document.head.appendChild(style);
    window.scrollTo(0, 0);
    try {
      if (localStorage.getItem(MAIL_DONE_KEY) || localStorage.getItem(OEFENPAKKET_MAIL_KEY)) setMailStatus("done");
    } catch {}
    track("leesladder_open", { source: leadSource() });
    return () => {
      document.title = prevTitle;
      document.head.removeChild(style);
    };
  }, []);

  function scrollNaarFormulier() {
    try {
      emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => emailRef.current?.focus(), 400);
    } catch {}
  }

  async function meldAan(e) {
    e.preventDefault();
    const adres = email.trim();
    if (!adres.includes("@") || adres.length < 5) {
      setMailStatus("error");
      return;
    }
    setMailStatus("busy");
    try {
      const source = leadSource();
      const { error } = await supabase
        .from("upgrade_waitlist")
        .insert({ email: adres, plan: "leesladder", source });
      if (error && !/duplicate|unique/i.test(error.message || "")) throw error;
      try { localStorage.setItem(MAIL_DONE_KEY, "1"); } catch {}
      track("leesladder_mail_signup", { source });
      setMailStatus("done");
    } catch {
      setMailStatus("error");
    }
  }

  // Doorlopende vraagnummering voor de antwoordsleutel.
  let teller = 0;
  const treden = TREDEN.map((t) => ({
    ...t,
    teksten: t.teksten.map((tx) => ({
      ...tx,
      vragen: tx.vragen.map((v) => ({ ...v, nr: ++teller })),
    })),
  }));
  const totaal = teller;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px 80px" }}>
      {/* ── Scherm-only bediening ───────────────────────────── */}
      <div className="leesladder-noprint" style={{ marginBottom: 24 }}>
        <button
          onClick={() => setPage && setPage("home")}
          aria-label="Naar de homepage van Leerkwartier"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "none", cursor: "pointer", padding: 0, marginBottom: 12 }}
        >
          <svg viewBox="0 0 100 100" style={{ width: 22, height: 22, flexShrink: 0 }} aria-hidden="true">
            <path d="M50,8 A42,42 0 0,1 92,50 L50,50 Z" fill="#00C853" />
          </svg>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--color-text, #e8edf5)", letterSpacing: "-0.01em" }}>
            {BRAND.name}
          </span>
          <span style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)" }}>· naar home</span>
        </button>

        <h1 style={{ fontSize: 26, margin: "0 0 8px", color: "var(--color-text, #e8edf5)" }}>
          🪜 De Leesladder — begrijpend lezen in kleine stapjes
        </h1>
        <p style={{ color: "var(--color-text-muted, #8899aa)", margin: "0 0 18px", lineHeight: 1.5 }}>
          Vindt je kind de teksten bij begrijpend lezen <strong style={{ color: "var(--color-text, #e8edf5)" }}>te lang</strong>?
          De Leesladder begint bij teksten van <strong style={{ color: "var(--color-text, #e8edf5)" }}>vijf zinnen</strong> en
          bouwt in vier treden op naar echte toets-lengte. {TREDEN.reduce((n, t) => n + t.teksten.length, 0)} teksten,{" "}
          {totaal} vragen, plus een ouderpagina en een antwoordsleutel die bij elke vraag uitlegt{" "}
          <em>waaróm</em> het antwoord klopt. Print hem gratis via <strong>Opslaan als PDF</strong>.
        </p>

        {/* E-mail-poort: vragen gratis, antwoordsleutel na e-mail (zelfde
            bewezen recept als het oefenpakket). */}
        <div style={{ border: "1.5px solid rgba(66,165,245,0.4)", background: "rgba(66,165,245,0.08)", borderRadius: 14, padding: "16px 18px", marginBottom: 20 }}>
          {mailStatus === "done" ? (
            <div style={{ color: "var(--color-text, #e8edf5)", fontSize: 15, lineHeight: 1.5 }}>
              ✓ <strong>Gelukt!</strong> De antwoordsleutel met uitleg staat nu achterin
              het pakket. En je krijgt <strong>elke week 15 minuten gratis extra
              oefenstof</strong> in je mail. Veel leesplezier samen! 💚
            </div>
          ) : (
            <form onSubmit={meldAan}>
              <div style={{ color: "var(--color-text, #e8edf5)", fontSize: 17, fontWeight: 800, marginBottom: 4 }}>
                🔑 Wil je ook kunnen nakijken — mét uitleg per vraag?
              </div>
              <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 13.5, marginBottom: 12, lineHeight: 1.55 }}>
                De hele Leesladder print je <strong style={{ color: "var(--color-text, #e8edf5)" }}>gratis</strong>.
                Vul je e-mail in en je krijgt er meteen bij: <strong style={{ color: "var(--color-text, #e8edf5)" }}>de
                antwoordsleutel waarin elke vraag kort wordt uitgelegd</strong> — zodat jij het als
                ouder óók kunt voordoen. Plus elke week een nieuw oefenkwartiertje.
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <input
                  ref={emailRef}
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (mailStatus === "error") setMailStatus("idle"); }}
                  placeholder="jouw@email.nl"
                  aria-label="E-mailadres"
                  style={{ flex: "1 1 200px", minWidth: 0, padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "var(--color-text, #e8edf5)", fontSize: 16 }}
                />
                <button
                  type="submit"
                  disabled={mailStatus === "busy"}
                  style={{ padding: "12px 22px", borderRadius: 10, border: "none", background: "var(--color-accent, #42a5f5)", color: "#0b1224", fontSize: 15, fontWeight: 800, cursor: mailStatus === "busy" ? "wait" : "pointer" }}
                >
                  {mailStatus === "busy" ? "Even bezig…" : "Stuur de antwoordsleutel →"}
                </button>
              </div>
              {mailStatus === "error" && (
                <div style={{ color: "#ff8a65", fontSize: 13, marginTop: 8 }}>
                  Vul een geldig e-mailadres in en probeer het opnieuw.
                </div>
              )}
              <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 11.5, marginTop: 9, lineHeight: 1.5 }}>
                🔒 Geen spam. We delen je adres nooit met anderen. Uitschrijven met 1 klik.
              </div>
            </form>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <button
            onClick={() => { track("leesladder_print"); window.print(); }}
            style={{ padding: "14px 28px", borderRadius: 12, border: "none", background: "var(--color-accent, #42a5f5)", color: "#0b1224", fontSize: 17, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 16px rgba(66,165,245,0.35)" }}
          >
            🖨️ Opslaan als PDF / Printen
          </button>
          <span style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14 }}>
            {TREDEN.reduce((n, t) => n + t.teksten.length, 0)} teksten · {totaal} vragen · 4 treden
          </span>
        </div>

        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 13, marginTop: 14, lineHeight: 1.5 }}>
          💡 Tip: kies in het printvenster bij <em>Bestemming</em> de optie “Opslaan als
          PDF”. Ook fijn: print alleen de trede waar je kind nu is — elke trede begint
          op een nieuwe pagina. Liever online oefenen met uitleg op 3 niveaus? Dat kan
          gratis op {BRAND.domain}.
        </p>
      </div>

      {/* ── Het printbare pakket ─────────────────────────────── */}
      <div className="leesladder-print">
        {/* Voorblad */}
        <Sheet>
          <div style={{ textAlign: "center", paddingTop: 50 }}>
            <div style={{ fontSize: 54, marginBottom: 8 }}>🪜</div>
            <div style={{ fontSize: 13, letterSpacing: 2, color: "#6b7785", fontWeight: 700 }}>
              {BRAND.name.toUpperCase()} · LEESLADDER
            </div>
            <h2 style={{ fontSize: 30, margin: "10px 0 4px", color: "#1a2332" }}>
              Begrijpend lezen in kleine stapjes
            </h2>
            <div style={{ fontSize: 18, color: "#46546a", marginBottom: 26 }}>Groep 5 t/m 8</div>

            <div style={{ display: "inline-block", textAlign: "left", background: "#f4f7fb", borderRadius: 12, padding: "18px 26px" }}>
              <div style={{ fontWeight: 700, color: "#1a2332", marginBottom: 8 }}>De ladder:</div>
              {treden.map((t) => (
                <div key={t.nr} style={{ color: "#3a4658", fontSize: 15, marginBottom: 4 }}>
                  {t.emoji} Trede {t.nr}: {t.titel}
                  <span style={{ color: "#8893a3", fontSize: 13 }}> — {t.teksten.length} teksten</span>
                </div>
              ))}
              <div style={{ color: "#1a2332", fontSize: 15, marginTop: 10, fontWeight: 700, borderTop: "1px solid #dde3ec", paddingTop: 8 }}>
                ✏️ Totaal {totaal} vragen + antwoordsleutel met uitleg
              </div>
            </div>

            <div style={{ marginTop: 36, color: "#6b7785", fontSize: 14, lineHeight: 1.7 }}>
              <p style={{ margin: "0 0 4px" }}><strong>Naam:</strong> ______________________________</p>
              <p style={{ margin: 0 }}><strong>Ik ben nu op trede:</strong> 1 · 2 · 3 · 4</p>
            </div>

            <div style={{ marginTop: 44, color: "#9aa6b4", fontSize: 12, lineHeight: 1.5 }}>
              © {BRAND.publisher} · {BRAND.domain} · Alle teksten zijn eigen oefenteksten.
            </div>
          </div>
        </Sheet>

        {/* Ouder-pagina: de ladder-methode */}
        <Sheet>
          <SectieKop emoji="👪" label="Voor de ouder — zo werkt de Leesladder" />
          <Alinea titel="Waarom klein beginnen?">
            Veel kinderen kúnnen best lezen, maar haken af op de lengte van de
            tekst. Bij een tekst van vijf zinnen lukt het wél — en dat
            succes-gevoel is precies de brandstof om door te gaan. Elke trede
            maakt de tekst iets langer, terwijl de vragen hetzelfde soort
            denkwerk blijven vragen. Zo went je kind stap voor stap aan langere
            teksten, zonder het gevoel te verzuipen.
          </Alinea>
          <Alinea titel="Hoe gebruik je het pakket?">
            Eén of twee teksten per dag is genoeg — een kwartiertje. Laat je
            kind de tekst lezen (hardop mag, zeker op trede 1 en 2), de vragen
            maken, en kijk daarna sámen na met de antwoordsleutel achterin.
            Blijf minstens een paar dagen op dezelfde trede.
          </Alinea>
          <Alinea titel="Wanneer naar de volgende trede?">
            Vuistregel: gaat ruim driekwart van de vragen goed én vindt je kind
            het “makkelijk”? Dan mag de volgende trede. Gaat het mis, zak dan
            gewoon een trede terug — dat is geen falen, dat is trainen.
          </Alinea>
          <Alinea titel="Wat doe je bij een fout antwoord?">
            Niet het goede antwoord voorzeggen. Vraag: “Waar in de tekst kun je
            het vinden?” en lees die zin samen nog een keer. In de
            antwoordsleutel staat per vraag een korte uitleg mét de lees-truc
            (bijvoorbeeld: verwijswoorden wijzen terug naar de zin ervoor).
            Die trucs zijn het échte doel van dit pakket.
          </Alinea>
          <Alinea titel="Verder oefenen">
            Online op {BRAND.domain} staat meer begrijpend lezen, met uitleg op
            drie niveaus bij elke fout — gratis. Zoek op “begrijpend lezen”.
          </Alinea>
          <div style={{ marginTop: 22, background: "#eef7ee", border: "1px solid #bcd9bc", borderRadius: 10, padding: "14px 18px", fontSize: 13.5, color: "#274427", lineHeight: 1.6 }}>
            <strong>De lees-trucs die in dit pakket geoefend worden:</strong>{" "}
            hoofdgedachte vinden · details terugzoeken · verwijswoorden (hij/dat/zij)
            · signaalwoorden (maar/daarom/omdat/toch) · woorden raden uit de zin ·
            conclusies trekken · volgorde · feit of mening · het doel van de schrijver.
            Bij elke vraag in de antwoordsleutel staat welke truc erbij hoort.
          </div>
        </Sheet>

        {/* De vier treden */}
        {treden.map((t) => (
          <Sheet key={t.nr}>
            <SectieKop emoji={t.emoji} label={`Trede ${t.nr} — ${t.titel}`} />
            <p style={{ color: "#6b7785", fontSize: 13.5, marginTop: -8, marginBottom: 6 }}>{t.sub}</p>
            <p style={{ color: "#46546a", fontSize: 13.5, marginTop: 0, marginBottom: 18, background: "#f4f7fb", borderRadius: 8, padding: "8px 12px" }}>
              ⭐ {t.kindTip}
            </p>
            {t.teksten.map((tx, ti) => (
              <div key={ti} className="leesladder-tekst" style={{ marginBottom: 26 }}>
                <h4 style={{ fontSize: 15, color: "#1a2332", margin: "0 0 8px", fontFamily: "Arial, sans-serif", background: "#eef2f8", borderRadius: 6, padding: "7px 12px" }}>
                  📖 Tekst {t.nr}.{ti + 1} — {tx.titel}
                </h4>
                <div style={{ border: "1px solid #dde3ec", borderRadius: 8, padding: "14px 18px", fontSize: 14.5, lineHeight: 1.75, color: "#1a2332", marginBottom: 12, whiteSpace: "pre-line" }}>
                  {tx.tekst}
                </div>
                {tx.vragen.map((v) => (
                  <div key={v.nr} className="leesladder-vraag" style={{ marginBottom: 14, breakInside: "avoid" }}>
                    <div style={{ fontSize: 15, color: "#1a2332", marginBottom: 7, lineHeight: 1.45 }}>
                      <strong>{v.nr}.</strong> {v.q}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 18px", paddingLeft: 18 }}>
                      {v.options.map((opt, i) => (
                        <div key={i} style={{ fontSize: 14, color: "#3a4658", lineHeight: 1.5 }}>
                          <strong>{LETTERS[i]}.</strong>&nbsp; {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div style={{ fontSize: 12.5, color: "#8893a3", paddingLeft: 2 }}>
                  Goed: ____ van de {tx.vragen.length}
                </div>
              </div>
            ))}
          </Sheet>
        ))}

        {/* Antwoordsleutel — na e-mail */}
        {mailStatus === "done" ? (
          <Sheet>
            <SectieKop emoji="✅" label="Antwoordsleutel & lees-trucs" />
            <p style={{ color: "#6b7785", fontSize: 13, marginTop: -8, marginBottom: 18 }}>
              Voor ouders/begeleiders. Bespreek bij een fout eerst de uitleg
              (mét de lees-truc), en laat je kind de vraag dan opnieuw proberen.
            </p>
            {treden.map((t) => (
              <div key={t.nr} style={{ marginBottom: 14, breakInside: "avoid" }}>
                <div style={{ fontWeight: 700, color: "#1a2332", fontSize: 15, margin: "14px 0 8px", fontFamily: "Arial, sans-serif", borderBottom: "1px solid #dde3ec", paddingBottom: 4 }}>
                  {t.emoji} Trede {t.nr} — {t.titel}
                </div>
                {t.teksten.map((tx, ti) => (
                  <div key={ti} style={{ marginBottom: 10 }}>
                    <div style={{ fontWeight: 700, color: "#46546a", fontSize: 13, margin: "6px 0 4px" }}>
                      📖 {t.nr}.{ti + 1} {tx.titel}
                    </div>
                    {tx.vragen.map((v) => (
                      <div key={v.nr} className="leesladder-vraag" style={{ marginBottom: 7, fontSize: 13, lineHeight: 1.5 }}>
                        <span style={{ fontWeight: 700, color: "#1a2332" }}>{v.nr}. {LETTERS[v.answer]}</span>{" "}
                        <span style={{ color: "#3a4658" }}>({v.options[v.answer]})</span>
                        <span style={{ color: "#8893a3" }}> · truc: {v.type}</span>
                        <span style={{ color: "#6b7785" }}> — {v.uitleg}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            <div style={{ marginTop: 28, paddingTop: 16, borderTop: "1px solid #e3e8ef", textAlign: "center" }}>
              <div style={{ color: "#46546a", fontSize: 14, fontWeight: 600 }}>
                Klaar met de ladder? Online staat meer — met uitleg op 3 niveaus.
              </div>
              <div style={{ color: "#6b7785", fontSize: 13, marginTop: 4 }}>
                Gratis op {BRAND.domain} — een leerkwartier per dag.
              </div>
            </div>
          </Sheet>
        ) : (
          <Sheet>
            <SectieKop emoji="🔒" label="Antwoordsleutel & lees-trucs (vergrendeld)" />
            <p style={{ color: "#6b7785", fontSize: 14, lineHeight: 1.6, marginTop: -4 }}>
              De antwoordsleutel — met per vraag de goede letter, de <strong>lees-truc</strong> en
              een korte uitleg — is <strong>vergrendeld</strong>. Vul je e-mailadres in om hem
              gratis te ontgrendelen; daarna verschijnt hij hier en print hij gewoon mee.
            </p>
            <button
              type="button"
              className="leesladder-noprint"
              onClick={scrollNaarFormulier}
              style={{ marginTop: 14, padding: "13px 24px", borderRadius: 12, border: "none", background: "#42a5f5", color: "#0b1224", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 16px rgba(66,165,245,0.35)" }}
            >
              🔓 Ontgrendel de antwoorden (gratis)
            </button>
          </Sheet>
        )}
      </div>
    </div>
  );
}

function Sheet({ children }) {
  return (
    <div
      className="leesladder-sheet"
      style={{ background: "#fff", color: "#1a2332", width: "100%", maxWidth: 740, margin: "0 auto 24px", padding: "40px 44px", borderRadius: 8, boxShadow: "0 6px 30px rgba(0,0,0,0.4)", fontFamily: "Georgia, 'Times New Roman', serif", boxSizing: "border-box" }}
    >
      {children}
    </div>
  );
}

function SectieKop({ emoji, label }) {
  return (
    <h3 style={{ fontSize: 20, color: "#1a2332", margin: "0 0 16px", paddingBottom: 8, borderBottom: "2px solid #1a2332", fontFamily: "Arial, sans-serif" }}>
      {emoji} {label}
    </h3>
  );
}

function Alinea({ titel, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontWeight: 700, color: "#1a2332", fontSize: 15, marginBottom: 3, fontFamily: "Arial, sans-serif" }}>
        {titel}
      </div>
      <p style={{ margin: 0, fontSize: 14.5, color: "#3a4658", lineHeight: 1.6 }}>{children}</p>
    </div>
  );
}
