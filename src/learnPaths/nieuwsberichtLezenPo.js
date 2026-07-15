// Leerpad: Een nieuwsbericht lezen — wie, wat, waar, wanneer, waarom en hoe
// Kinderen leren de vaste opbouw van een nieuwsbericht (kop → eerste alinea
// met het belangrijkste → details van belangrijk naar minder belangrijk),
// de 5 W's + H als vragenbril, en de klassieke valkuilen: een kop die
// overdrijft, een mening in een citaat die je per ongeluk als feit leest,
// en "wanneer geschreven" verwarren met "wanneer gebeurd".
//
// Alle nieuwsteksten zijn 100% eigen werk (verzonnen dorpen, verzonnen
// personen). 4 stappen, 17 checks totaal.

const stepEmojis = ["🗞️", "🏫", "🧩", "🏆"];

const chapters = [
  { letter: "A", title: "Zo zit een nieuwsbericht in elkaar", emoji: "🗞️", from: 0, to: 0 },
  { letter: "B", title: "De vragenbril op een echt bericht", emoji: "🏫", from: 1, to: 1 },
  { letter: "C", title: "Lastige gevallen", emoji: "🧩", from: 2, to: 2 },
  { letter: "D", title: "Doorstroomtoets-oefening", emoji: "🏆", from: 3, to: 3 },
];

// ── Verzonnen nieuwsbericht voor stap 2 (~150 woorden) ──────────────
const tekstSpeeltoren = `**Leerlingen sparen zelf voor nieuwe speeltoren**

De leerlingen van basisschool De Klimboom in Weidedorp hebben er een droomplek bij. Afgelopen zaterdag werd op het schoolplein een gloednieuwe speeltoren geopend. De toren is zes meter hoog en heeft twee glijbanen, een klimnet en een uitkijkpunt.

De oude speeltoren werd vorig jaar afgekeurd, omdat het hout begon te rotten. Er moest dus een nieuwe komen, maar zo'n toren is duur. De school bedacht een plan: alle leerlingen liepen in maart een sponsorloop door het dorp. Samen haalden ze meer dan achtduizend euro op.

Zaterdag knipte directeur juf Karin het lint door. Milan uit groep 6 mocht als eerste naar boven klimmen. "Dit is de mooiste toren van heel Nederland", zegt hij trots vanaf het uitkijkpunt.

De speeltoren is voortaan elke dag open, ook na schooltijd. Kinderen uit de hele buurt mogen erop komen spelen.`;

// ── Verzonnen nieuwsbericht voor stap 4 (~200 woorden) ──────────────
const tekstAlpaca = `**Heel Zandhoven in de ban van ontsnapte alpaca**

*Donderdag 12 maart* — Twee dagen lang was alpaca Berry spoorloos. Maandagochtend ontdekte boer Teun van kinderboerderij Het Klaverblad in Zandhoven dat het dier verdwenen was. Woensdagmiddag werd Berry eindelijk teruggevonden, in een moestuin twee straten verderop.

Hoe kon Berry ontsnappen? Afgelopen weekend raasde er een flinke storm over het dorp. Daardoor waaide een deel van het hek van de kinderboerderij om. Berry glipte door het gat naar buiten, waarschijnlijk maandag heel vroeg.

Boer Teun zocht overal. Buurtbewoners hielpen mee en hingen posters op met een foto van Berry. Toch bleef het dier onvindbaar. Tot woensdagmiddag: twee kinderen die op straat aan het voetballen waren, hoorden geritsel in de moestuin van de familie Vos. Daar stond Berry, rustig kauwend op een krop sla.

De dierenarts heeft Berry onderzocht. Het dier maakt het prima, al lustte hij die avond geen sla meer. "Dit is het spannendste dat hier ooit is gebeurd", zegt buurvrouw De Wit lachend.

Het kapotte hek is inmiddels gerepareerd. De twee vinders kregen een beloning: zij mogen Berry voortaan elke week komen borstelen.`;

const steps = [
  // ── Stap 1 ──────────────────────────────────────────────────────
  {
    title: "Zo zit een nieuwsbericht in elkaar",
    explanation: `Heb je weleens een krant of een nieuwssite bekeken? Elk nieuwsbericht is op dezelfde manier gebouwd. Ken je die bouw, dan vind je razendsnel wat je zoekt — superhandig op de Doorstroomtoets!

**De bouw van een nieuwsbericht:**
1. **De kop** — kort en pakkend. De kop moet je nieuwsgierig maken, zodat je verder wilt lezen.
2. **De eerste alinea** — hier staat de belangrijkste informatie: wat er gebeurde, wie het deed, waar en wanneer. Heb je haast? Dan weet je na de eerste alinea al het belangrijkste.
3. **De rest** — details, van belangrijk naar minder belangrijk. Onderaan staan de kleinste weetjes.

**De zes gouden vragen (5 W's + H):**
- **Wie** — over welke persoon of welk dier gaat het?
- **Wat** — wat is er gebeurd?
- **Waar** — op welke plek?
- **Wanneer** — op welke dag of welk moment?
- **Waarom** — wat is de reden of oorzaak?
- **Hoe** — op welke manier ging het?

Een goed nieuwsbericht beantwoordt al deze vragen. Jij gebruikt ze als een **vragenbril**: lees de toetsvraag, bedenk welke van de zes gouden vragen erbij hoort, en zoek precies dát antwoord op in de tekst. Je hoeft dus nooit alles te onthouden — je moet vooral goed kunnen **opzoeken**. Oefen eerst met de vragen hieronder.`,
    checks: [
      {
        q: "Je leest alleen de eerste alinea van een nieuwsbericht. Wat weet je dan meestal al?",
        options: [
          "Het belangrijkste van het nieuws",
          "Alle kleine details en weetjes",
          "De mening van de schrijver",
          "Hoe het verhaal spannend afloopt",
        ],
        answer: 0,
        evidence: "De eerste alinea — hier staat de belangrijkste informatie: wat er gebeurde, wie het deed, waar en wanneer.",
        wrongHints: [
          null,
          "Waar bewaart een journalist de kleine weetjes: vooraan of juist verderop in het bericht?",
          null,
          "Een nieuwsbericht is geen spannend verhaal met een einde. Wat wil een journalist je juist zo snél mogelijk vertellen?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Denk als een journalist", tekst: "Een journalist weet: veel lezers haken snel af. Daarom zet hij het belangrijkste nieuws meteen vooraan, in de eerste alinea." },
            { titel: "Wat staat er dan vooraan?", tekst: "In die eerste alinea vind je de antwoorden op de grote vragen: wat is er gebeurd, wie deed het, waar en wanneer." },
            { titel: "En de rest?", tekst: "Details en kleine weetjes komen daarna, van belangrijk naar minder belangrijk. Wie alleen de eerste alinea leest, kent het nieuws al in het kort." },
          ],
          woorden: [
            { woord: "alinea", uitleg: "Een stukje tekst dat bij elkaar hoort. Tussen twee alinea's staat een witregel of begint een nieuwe regel." },
            { woord: "journalist", uitleg: "Iemand die nieuwsberichten schrijft voor een krant, website of het journaal." },
          ],
          theorie: "**Het belangrijkste eerst**\n\nEen nieuwsbericht is opgebouwd als een trechter:\n\n1. Kop → een paar woorden, maakt nieuwsgierig\n2. Eerste alinea → het belangrijkste nieuws in het kort\n3. Rest → steeds kleinere details\n\nDat is expres zo. Vroeger knipten kranten een te lang bericht gewoon van onderen af — en dan moest het belangrijkste nog steeds overblijven! Voor jou als lezer is het handig: zoek je het hoofdnieuws, kijk vooraan; zoek je een klein detail, kijk verderop.",
          voorbeelden: [
            { type: "eerste-alinea", tekst: "'Gisteren won de elfjarige Noa uit Vissersdam het NK schaken voor kinderen.' — één zin, en je weet al wie, wat en wanneer." },
            { type: "detail-onderaan", tekst: "Helemaal onderaan hetzelfde bericht staat: 'Noa schaakt sinds haar zesde.' Leuk weetje, maar niet het hoofdnieuws." },
          ],
          basiskennis: [
            { onderwerp: "Slim zoeken", uitleg: "Weet je hoe een tekstsoort is opgebouwd? Dan weet je ook wáár je een antwoord moet zoeken. Dat scheelt tijd op de toets." },
          ],
          niveaus: {
            basis: "Denk aan de trechter: wat zet een journalist helemaal vooraan in het bericht?",
            simpeler: "Stel: je hebt maar tien seconden om een bericht te lezen. Wat wil de schrijver dat je dan in elk geval meekrijgt?",
            nogSimpeler: "Wat wil een journalist je als éérste vertellen: het grote nieuws of een klein weetje?",
          },
        },
      },
      {
        q: "*\"De brandweer bluste het vuur met drie spuitwagens en een ladderwagen.\"* — Op welke gouden vraag geeft deze zin vooral antwoord?",
        options: ["Hoe", "Waar", "Wanneer", "Waarom"],
        answer: 0,
        evidence: "Hoe — op welke manier ging het?",
        wrongHints: [
          null,
          "Zie je in de zin een plek staan, zoals een straat, dorp of gebouw?",
          "Staat er een dag, datum of tijdstip in de zin?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat vertelt de zin precies?", tekst: "De zin vertelt niet wáár de brand was of wannéér, maar op welke manier de brandweer bluste: met drie spuitwagens en een ladderwagen." },
            { titel: "Koppel aan de gouden vraag", tekst: "'Op welke manier?' — dat is precies de vraag die begint met het woordje dat je zoekt." },
            { titel: "Controleer", tekst: "Stel de vraag hardop: '... bluste de brandweer het vuur?' Welk vraagwoord past er vooraan zodat de zin het antwoord is?" },
          ],
          woorden: [
            { woord: "manier", uitleg: "De weg of methode waarop iets gebeurt: met welk gereedschap, in welke stappen." },
          ],
          theorie: "**Elk vraagwoord zoekt zijn eigen soort antwoord**\n\n| Vraagwoord | Soort antwoord |\n|---|---|\n| wie | persoon of dier |\n| wat | gebeurtenis |\n| waar | plek |\n| wanneer | dag, datum, tijdstip |\n| waarom | reden of oorzaak |\n| hoe | manier, werkwijze |\n\nTruc: lees de zin en vraag jezelf af wat voor sóórt informatie erin staat. Een plek? Dan hoort de zin bij 'waar'. Een manier van doen? Dan hoort hij bij een andere gouden vraag.",
          voorbeelden: [
            { type: "manier", tekst: "'De redders haalden de kat met een lange ladder uit de boom.' → vertelt de manier van redden." },
            { type: "plek", tekst: "'De brand woedde in een schuur aan de Molenweg.' → vertelt de plek, dus hoort bij 'waar'." },
          ],
          basiskennis: [
            { onderwerp: "Soort antwoord voorspellen", uitleg: "Bedenk bij elke toetsvraag eerst wat voor soort antwoord je zoekt (plek, tijd, reden, manier). Dan herken je het sneller in de tekst." },
          ],
          niveaus: {
            basis: "De zin beschrijft met welk materieel er geblust werd. Welke gouden vraag vraagt naar de manier waarop iets gebeurt?",
            simpeler: "Er staat geen plek, geen dag en geen reden in de zin. Wat beschrijft de zin dan wél over het blussen?",
            nogSimpeler: "Vraag jezelf: op welke manier bluste de brandweer? Welk vraagwoord gebruik je daarvoor?",
          },
        },
      },
      {
        q: "Wat is de belangrijkste taak van de kop boven een nieuwsbericht?",
        options: [
          "Je nieuwsgierig maken zodat je verder wilt lezen",
          "Alle zes gouden vragen beantwoorden",
          "De mening van de journalist geven",
          "Vertellen hoe laat het bericht geschreven is",
        ],
        answer: 0,
        evidence: "De kop — kort en pakkend. De kop moet je nieuwsgierig maken, zodat je verder wilt lezen.",
        wrongHints: [
          null,
          "Een kop is maar een paar woorden lang. Passen daar zes complete antwoorden in?",
          "Een journalist hoort nieuws te brengen, niet wat hij er zelf van vindt. Wat moet een kop bij jou als lezer losmaken?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar de lengte", tekst: "Een kop is kort: vaak maar vier tot acht woorden. Daar past nooit het hele nieuws in — de kop is een lokkertje." },
            { titel: "Wat moet dat lokkertje doen?", tekst: "De kop moet jou laten denken: 'Hé, wat is daar gebeurd? Dat wil ik weten!' Dan lees je verder — en dat is precies de bedoeling." },
            { titel: "Waar staat de echte info dan?", tekst: "De echte informatie volgt eronder, te beginnen in de eerste alinea. De kop wijst de weg, de tekst geeft de antwoorden." },
          ],
          woorden: [
            { woord: "kop", uitleg: "De dikgedrukte titel boven een nieuwsbericht. Kort, opvallend en bedoeld om je aandacht te trekken." },
            { woord: "pakkend", uitleg: "Zo geschreven dat het je aandacht pakt — je wilt meteen meer weten." },
          ],
          theorie: "**De kop is een uithangbord**\n\nVergelijk de kop met het uithangbord van een winkel: het bord vertelt niet alles wat er binnen te koop is, het moet je alleen naar binnen lokken.\n\nDaarom kiezen journalisten korte, prikkelende woorden. Soms maken ze het nieuws in de kop zelfs een tikje groter dan het is — daarover leer je meer in het hoofdstuk over lastige gevallen. Onthoud alvast: de kop is reclame voor het bericht, de tekst zelf bevat de feiten.",
          voorbeelden: [
            { type: "pakkend", tekst: "Kop: 'Schoolplein wordt junglepark'. Je denkt: junglepark?! En je leest verder — missie geslaagd." },
            { type: "saai", tekst: "'Er worden drie klimtoestellen en wat groen geplaatst op een schoolplein' — klopt óók, maar niemand klikt erop. Daarom kiest de journalist de korte, spannende versie." },
          ],
          basiskennis: [
            { onderwerp: "Kop ≠ samenvatting", uitleg: "Behandel de kop nooit als volledige samenvatting. Voor de precieze informatie lees je altijd de tekst eronder." },
          ],
          niveaus: {
            basis: "Denk aan het uithangbord van een winkel: wat moet dat bord bij jou voor elkaar krijgen?",
            simpeler: "Een kop is maar een paar woorden. Wat kan zo'n kort zinnetje het beste doen: alles uitleggen, of jou naar de tekst trekken?",
            nogSimpeler: "Waarom zet een journalist iets spannends boven zijn bericht? Wat hoopt hij dat jij dan doet?",
          },
        },
      },
      {
        q: "In welke volgorde staat de informatie in een nieuwsbericht?",
        options: [
          "Het belangrijkste eerst, kleine details later",
          "Alles op volgorde van de klok, van 's ochtends tot 's avonds",
          "Kleine details eerst, het belangrijkste als verrassing op het eind",
          "In willekeurige volgorde, dat maakt niet uit",
        ],
        answer: 0,
        evidence: "De rest — details, van belangrijk naar minder belangrijk. Onderaan staan de kleinste weetjes.",
        wrongHints: [
          null,
          "Dat past bij een verhaal of een dagboek. Denk aan de lezer die haast heeft — wat moet díé als eerste zien?",
          "Zo werkt een spannend verhaal, maar een journalist wil je juist niet laten wachten. Waar zet hij het grote nieuws?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Denk aan de haastige lezer", tekst: "Veel mensen lezen alleen het begin van een bericht. De journalist zorgt daarom dat het begin het belangrijkste bevat." },
            { titel: "Zo loopt het bericht af", tekst: "Na de eerste alinea worden de stukjes informatie steeds minder belangrijk. Helemaal onderaan staan de kleinste weetjes." },
            { titel: "Gebruik dit bij het zoeken", tekst: "Vraagt de toets naar het hoofdnieuws? Kijk vooraan. Vraagt de toets naar een detail (een bedrag, een naam, een weetje)? Kijk verderop in de tekst." },
          ],
          woorden: [
            { woord: "detail", uitleg: "Een klein stukje extra informatie, zoals een precies bedrag of een leuk weetje. Niet het hoofdnieuws." },
          ],
          theorie: "**Van groot naar klein — anders dan een verhaal**\n\nEen verhaal bouwt op naar een spannend einde. Een nieuwsbericht doet precies het omgekeerde:\n\n- verhaal: begin → opbouw → climax op het eind\n- nieuwsbericht: hoofdnieuws vooraan → daarna steeds kleinere details\n\nDit verschil is toets-goud waard: bij een verhaal vind je de afloop achteraan, bij een nieuwsbericht vind je de kern juist vooraan. Kijk dus altijd eerst wat voor soort tekst je leest!",
          voorbeelden: [
            { type: "volgorde", tekst: "Bericht over een gewonnen voetbaltoernooi: eerst wíé won (alinea 1), dan de mooiste goal (alinea 2), en onderaan pas dat de limonade uitverkocht was (detail)." },
          ],
          basiskennis: [
            { onderwerp: "Tekstsoort herkennen", uitleg: "Vraag jezelf bij elke tekst: is dit een verhaal of een informatieve tekst? De opbouw — en dus je zoek-plek — verschilt." },
          ],
          niveaus: {
            basis: "Denk aan de haastige lezer die na één alinea stopt: wat moet die in elk geval al gelezen hebben?",
            simpeler: "Een nieuwsbericht is het omgekeerde van een spannend verhaal. Waar zit bij een nieuwsbericht de kern: vooraan of achteraan?",
            nogSimpeler: "Wat komt in een nieuwsbericht eerst: het grote nieuws of de kleine weetjes?",
          },
        },
      },
    ],
  },

  // ── Stap 2 ──────────────────────────────────────────────────────
  {
    title: "De vragenbril op een echt bericht",
    explanation: tekstSpeeltoren + `

Zet je vragenbril op! Hierboven staat een nieuwsbericht zoals je het in een dorpskrant zou kunnen lezen. Nu ga je de zes gouden vragen gebruiken om er informatie uit te halen — precies wat je op de Doorstroomtoets ook doet.

**Zo pak je het aan:**
1. Lees de toetsvraag en bedenk: welke gouden vraag is dit — wie, wat, waar, wanneer, waarom of hoe?
2. Bedenk waar het antwoord waarschijnlijk staat: het hoofdnieuws vooraan, details verderop.
3. Zoek de zin op in het bericht en controleer: staat jouw antwoord er écht?

Tip: je hoeft niets uit je hoofd te weten. Terugkijken in de tekst mag altijd — dat is juist slim lezen. Succes met de vier vragen hieronder!`,
    checks: [
      {
        q: "Wat is het grote nieuws in dit bericht?",
        options: [
          "Er is een nieuwe speeltoren geopend op het schoolplein",
          "Een school is verhuisd naar Weidedorp",
          "Er is in maart een sponsorloop gehouden",
          "De oude speeltoren is gerepareerd",
        ],
        answer: 0,
        evidence: "Afgelopen zaterdag werd op het schoolplein een gloednieuwe speeltoren geopend.",
        wrongHints: [
          null,
          "Een verhuizing lees je nergens in het bericht. Wat wordt er in de eerste alinea geopend?",
          "Die sponsorloop staat inderdaad in de tekst — maar pas in de twééde alinea. Wat staat er in de allereerste alinea?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Dit is een wat-vraag", tekst: "'Wat is het grote nieuws?' — je zoekt de hoofdgebeurtenis. En je weet inmiddels waar die staat: helemaal vooraan." },
            { titel: "Lees de eerste alinea", tekst: "Daar staat: 'Afgelopen zaterdag werd op het schoolplein een gloednieuwe speeltoren geopend.' Dat is de gebeurtenis waar alles om draait." },
            { titel: "Pas op voor details die ook kloppen", tekst: "De sponsorloop stáát echt in de tekst — maar verderop. Het is een detail dat uitlegt hoe het geld bij elkaar kwam, niet het hoofdnieuws zelf." },
          ],
          woorden: [
            { woord: "hoofdnieuws", uitleg: "De gebeurtenis waar het hele bericht om draait. Staat in de kop en de eerste alinea." },
          ],
          theorie: "**Waar of belangrijk? Dat is niet hetzelfde!**\n\nDe favoriete valstrik bij wat-vragen: een antwoord dat wél in de tekst staat, maar niet het hoofdnieuws is. Alles wat je aankruist moet twee checks doorstaan:\n\n1. Staat het in de tekst? (waar/niet waar)\n2. Is het de kérn van het bericht? (belangrijk/detail)\n\nAlleen het antwoord dat beide checks haalt, is goed. Kijk daarvoor naar de plek in het bericht: het hoofdnieuws woont in de eerste alinea.",
          voorbeelden: [
            { type: "valstrik", tekst: "Bericht over een gewonnen zwemwedstrijd noemt óók dat het zwembad net verbouwd is. Vraag: wat is het nieuws? De verbouwing staat in de tekst — maar de gewonnen wedstrijd is het nieuws." },
          ],
          basiskennis: [
            { onderwerp: "Plek verraadt belang", uitleg: "Hoe verder vooraan iets in een nieuwsbericht staat, hoe belangrijker de journalist het vindt." },
          ],
          niveaus: {
            basis: "Het grote nieuws staat in de eerste alinea. Wat gebeurde daar afgelopen zaterdag?",
            simpeler: "Kijk ook naar de kop: waar sparen de leerlingen voor? Dát ding staat in het middelpunt van het bericht.",
            nogSimpeler: "Zoek in de eerste alinea wat er zaterdag geopend werd.",
          },
        },
      },
      {
        q: "Waar staat de nieuwe speeltoren?",
        options: [
          "Op het schoolplein van basisschool De Klimboom in Weidedorp",
          "In de speeltuin midden in het dorp",
          "Bij het gemeentehuis van Weidedorp",
          "Op het plein voor de sporthal",
        ],
        answer: 0,
        evidence: "De leerlingen van basisschool De Klimboom in Weidedorp hebben er een droomplek bij. Afgelopen zaterdag werd op het schoolplein een gloednieuwe speeltoren geopend.",
        wrongHints: [
          null,
          "Een speeltuin wordt nergens genoemd. Bij welk gebouw hoort een schoolplein?",
          null,
          "Een sporthal komt in het hele bericht niet voor. Lees de eerste twee zinnen nog eens rustig.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Dit is een waar-vraag", tekst: "Je zoekt een plek. Plekken herken je aan woorden als 'op', 'in', 'bij' plus een plaats of gebouw." },
            { titel: "Zoek in de eerste alinea", tekst: "Daar staan twee plek-aanwijzingen: 'basisschool De Klimboom in Weidedorp' en 'op het schoolplein'. Samen vertellen ze precies waar de toren staat." },
            { titel: "Controleer bij de andere opties", tekst: "Speeltuin, gemeentehuis, sporthal — zoek ze maar op: geen van die woorden staat in het bericht. Dan kunnen ze het antwoord niet zijn." },
          ],
          woorden: [
            { woord: "plaatsbepaling", uitleg: "Woorden die vertellen wáár iets is: op het plein, in het dorp, bij de school." },
          ],
          theorie: "**Waar-vragen: zoek de plek-woorden**\n\nBij een waar-vraag scan je de tekst op plek-woorden: namen van dorpen en steden, gebouwen, straten, en voorzetsels als op/in/bij/naast/achter.\n\nBelangrijke controle: het antwoord moet uit de tékst komen, niet uit je fantasie. Een optie die logisch klínkt (een speeltoren in een speeltuin — waarom niet?) maar niet in het bericht staat, is fout. Op de toets telt alleen wat er staat.",
          voorbeelden: [
            { type: "plek-scan", tekst: "'De optocht trok door de Dorpsstraat in Klaverzand.' → plek-woorden: Dorpsstraat, Klaverzand. Waar-vraag beantwoord." },
          ],
          basiskennis: [
            { onderwerp: "Alleen de tekst telt", uitleg: "Kies nooit een antwoord omdat het logisch klinkt. Kies het antwoord dat je in de tekst kunt aanwijzen." },
          ],
          niveaus: {
            basis: "Zoek in de eerste alinea de woorden die een plek aanwijzen. Bij welke school en op welk plein gebeurde het?",
            simpeler: "Wie kregen er een droomplek bij? Bij hún school moet je zijn — welk plein hoort daarbij?",
            nogSimpeler: "Lees de eerste twee zinnen en wijs de plek aan waar de toren geopend werd.",
          },
        },
      },
      {
        q: "Waarom moest er een nieuwe speeltoren komen?",
        options: [
          "De oude toren was afgekeurd omdat het hout begon te rotten",
          "De leerlingen vonden de oude toren te klein",
          "De directeur wilde een cadeau voor de school",
          "De oude toren was omgewaaid tijdens een storm",
        ],
        answer: 0,
        evidence: "De oude speeltoren werd vorig jaar afgekeurd, omdat het hout begon te rotten. Er moest dus een nieuwe komen",
        wrongHints: [
          null,
          "Over de grootte van de oude toren zegt het bericht niets. Zoek de zin met het woordje 'omdat'.",
          null,
          "Een storm staat niet in dít bericht. Wat was er mis met het hout van de oude toren?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Dit is een waarom-vraag", tekst: "Je zoekt een reden of oorzaak. Reden-zinnen herken je aan signaalwoorden: omdat, doordat, daarom, dus, want." },
            { titel: "Zoek het signaalwoord", tekst: "In de tweede alinea staat: 'werd vorig jaar afgekeurd, omdat het hout begon te rotten. Er moest dus een nieuwe komen.' Twee signaalwoorden in één stukje: 'omdat' en 'dus'!" },
            { titel: "Controleer de keten", tekst: "Rottend hout → toren afgekeurd → nieuwe toren nodig. Die keten klopt van begin tot eind. Antwoord gevonden." },
          ],
          woorden: [
            { woord: "signaalwoord", uitleg: "Een woord dat verklapt welk verband er in de zin zit. Bij redenen en oorzaken: omdat, doordat, daarom, dus, want." },
            { woord: "afgekeurd", uitleg: "Na controle te onveilig of te slecht bevonden — het mag niet meer gebruikt worden." },
          ],
          theorie: "**Waarom-vragen: volg de signaalwoorden**\n\nBij een waarom-vraag hoef je niet de hele tekst opnieuw te lezen. Scan op signaalwoorden van reden en oorzaak:\n\n- omdat / want / doordat → hierna komt de reden\n- daarom / dus / daardoor → hiervóór stond de reden\n\nGevonden? Lees dan de hele zin en check of de reden past bij wat de vraag vraagt. Let op: soms staan er meerdere redenen in een tekst — kies de reden die hoort bij precies dát gevolg waar de vraag naar vraagt.",
          voorbeelden: [
            { type: "signaalwoord", tekst: "'Het schoolreisje ging niet door, omdat de bus kapot was.' → na 'omdat' staat de reden: de kapotte bus." },
          ],
          basiskennis: [
            { onderwerp: "Oorzaak en gevolg", uitleg: "De oorzaak gebeurt eerst (rottend hout), het gevolg komt daarna (nieuwe toren nodig). Waarom-vragen vragen naar de oorzaak." },
          ],
          niveaus: {
            basis: "Zoek in de tweede alinea de zin met het woordje 'omdat'. Wat staat daar over de oude toren?",
            simpeler: "Wat was er mis met de oude toren, waardoor spelen erop niet meer veilig was?",
            nogSimpeler: "Lees de eerste zin van de tweede alinea: wat gebeurde er met het hout?",
          },
        },
      },
      {
        q: "Hoe kwam het geld voor de nieuwe toren bij elkaar?",
        options: [
          "Alle leerlingen liepen een sponsorloop door het dorp",
          "De gemeente betaalde de hele toren",
          "De school leende het geld van een bank",
          "Ouders verkochten zelfgebakken koeken",
        ],
        answer: 0,
        evidence: "De school bedacht een plan: alle leerlingen liepen in maart een sponsorloop door het dorp. Samen haalden ze meer dan achtduizend euro op.",
        wrongHints: [
          null,
          "De gemeente wordt in het hele bericht niet genoemd. Welk plan bedacht de school zélf?",
          "Van lenen staat niets in de tekst. Wat deden de leerlingen in maart?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Dit is een hoe-vraag", tekst: "Je zoekt de manier waarop iets gelukt is — hier: hoe kwam er ruim achtduizend euro bij elkaar?" },
            { titel: "Zoek de zin over geld", tekst: "In de tweede alinea staat: 'De school bedacht een plan: alle leerlingen liepen in maart een sponsorloop door het dorp.' Dat is de manier." },
            { titel: "Controleer met het gevolg", tekst: "De zin erna bevestigt het: 'Samen haalden ze meer dan achtduizend euro op.' Plan → actie → geld. De keten klopt." },
          ],
          woorden: [
            { woord: "sponsorloop", uitleg: "Een loop-actie waarbij mensen (zoals ouders en buren) geld beloven per gelopen rondje. Zo haal je samen geld op voor een goed doel." },
          ],
          theorie: "**Hoe-vragen: zoek het stappenplan**\n\nEen hoe-vraag vraagt naar de manier of werkwijze. In een nieuwsbericht staat die vaak beschreven als een klein stappenplan of plan: 'De school bedacht een plan: ...'\n\nHandige zoekwoorden bij hoe-vragen: 'plan', 'zo', 'door te...', 'met behulp van', of een dubbele punt gevolgd door de uitleg. En check altijd even het resultaat: als de tekst daarna vertelt dat het lukte, weet je zeker dat je de juiste manier te pakken hebt.",
          voorbeelden: [
            { type: "manier", tekst: "'Hoe redde de duiker het jong? Hij lokte het met een visje naar ondiep water.' → de manier = lokken met een visje." },
          ],
          basiskennis: [
            { onderwerp: "Dubbele punt = uitleg", uitleg: "Na een dubbele punt (:) volgt vaak precies de uitleg of opsomming waar een hoe-vraag naar zoekt." },
          ],
          niveaus: {
            basis: "Zoek de zin met 'De school bedacht een plan'. Wat deden de leerlingen daarna in maart?",
            simpeler: "Het geld kwam niet van een grote organisatie — de kinderen deden er zélf iets voor, met hun benen. Wat was dat?",
            nogSimpeler: "Lees de tweede alinea: welke actie liepen de leerlingen door het dorp?",
          },
        },
      },
    ],
  },

  // ── Stap 3 ──────────────────────────────────────────────────────
  {
    title: "Lastige gevallen",
    explanation: `Je kunt nu de zes gouden vragen loslaten op een nieuwsbericht. Maar de Doorstroomtoets test ook drie **lastige gevallen**. Wie ze kent, trapt er niet in!

**1. De kop overdrijft soms.**
Een kop moet kort en pakkend zijn — daarom maken journalisten het nieuws in de kop weleens gróter dan het is. *"Bloemwijk verandert in gatenkaas"* klinkt spannender dan *"twaalf gaten in de Dorpsstraat"*. Neem een kop dus nooit letterlijk: de precieze informatie staat in de tekst.

**2. Feit of mening?**
Een **feit** kun je controleren of natellen: *"Er kwamen driehonderd bezoekers."* Een **mening** is wat iemand vindt: *"Het was een prachtig feest."* Let extra op bij een **citaat** (uitspraak tussen aanhalingstekens): dat zijn de woorden van díé persoon. Zegt iemand *"dit is de beste ijssalon van het land"*, dan is dat zíjn mening — geen feit, ook al staat het in een nieuwsbericht.

**3. Wanneer geschreven ≠ wanneer gebeurd.**
Boven een bericht staat vaak de datum waarop het **geschreven** is. De gebeurtenis zelf was meestal eerder! Woorden als *gisteren*, *afgelopen dinsdag* en *vorige week* reken je vanaf de schrijfdag. Vraagt de toets wanneer iets gebeurde? Zoek dan de dag van de **gebeurtenis**, niet de datum van het bericht.

De vragen hieronder gaan over precies deze drie valkuilen.`,
    checks: [
      {
        q: "De kop luidt: *\"Bloemwijk verandert in gatenkaas\"*. In de tekst staat: *\"In de Dorpsstraat zitten twaalf gaten in het wegdek.\"* Wat leer je hiervan over koppen?",
        options: [
          "Een kop mag overdrijven om je nieuwsgierig te maken; de precieze informatie staat in de tekst",
          "De hele wijk zit vol gaten, dat zegt de kop immers",
          "Het bericht klopt niet, want de kop en de tekst zeggen iets anders",
          "De journalist heeft de kop per ongeluk boven het verkeerde bericht gezet",
        ],
        answer: 0,
        evidence: "Neem een kop dus nooit letterlijk: de precieze informatie staat in de tekst.",
        wrongHints: [
          null,
          "Vergelijk met de tekst: hoeveel gaten worden er écht genoemd, en in hoeveel straten?",
          "Kop en tekst horen bij hetzelfde nieuws — de één is alleen wat schreeuweriger. Waarvoor dient een kop ook alweer?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Vergelijk kop en tekst", tekst: "Kop: een hele wijk als gatenkaas. Tekst: twaalf gaten, in één straat. De tekst is dus veel preciezer dan de kop." },
            { titel: "Waarom doet de journalist dat?", tekst: "'Twaalf gaten in de Dorpsstraat' leest bijna niemand. 'Bloemwijk verandert in gatenkaas' — dáár klik je op. De kop is reclame voor het bericht." },
            { titel: "Wat betekent dit voor jou?", tekst: "Vertrouw voor de precieze informatie altijd op de tekst, niet op de kop. Op de toets is een letterlijk genomen kop een klassieke instinker." },
          ],
          woorden: [
            { woord: "overdrijven", uitleg: "Iets groter, erger of mooier voorstellen dan het echt is." },
            { woord: "beeldspraak", uitleg: "Iets zeggen met een beeld: een straat vol gaten wordt 'gatenkaas'. Niet letterlijk bedoeld!" },
          ],
          theorie: "**Kop en tekst: reclame en werkelijkheid**\n\nZo controleer je een kop:\n\n1. Lees de kop en vraag: wat beweert hij precies?\n2. Zoek in de tekst de zinnen die erover gaan.\n3. Vergelijk: zegt de tekst hetzelfde, of is de kop groter gemaakt?\n\nEen overdrijvende kop betekent niet dat het bericht 'liegt' — het echte verhaal staat gewoon in de tekst. Maar wie alléén de kop leest, onthoudt iets dat groter is dan de werkelijkheid. Toetsvragen als 'klopt de kop met de tekst?' testen precies deze vergelijking.",
          voorbeelden: [
            { type: "overdrijving", tekst: "Kop: 'Sporthal barst uit zijn voegen'. Tekst: 'De zaal was met 180 bezoekers bijna vol.' De hal barstte dus nergens — er was gewoon veel publiek." },
          ],
          basiskennis: [
            { onderwerp: "Kop checken", uitleg: "Beweert een kop iets groots? Zoek in de tekst de precieze aantallen en feiten voordat je de kop gelooft." },
          ],
          niveaus: {
            basis: "Zet kop en tekst naast elkaar: welke van de twee noemt precieze aantallen — en welke maakt er een groot beeld van?",
            simpeler: "Kan een wijk écht in kaas veranderen? Waarom kiest de journalist dan toch zulke grote woorden?",
            nogSimpeler: "Wat is de taak van een kop: precies zijn, of jou laten doorlezen?",
          },
        },
      },
      {
        q: "In een nieuwsbericht staat: *\"'Dit was het gezelligste feest van het jaar', zegt bezoeker Ties.\"* — Is dat een feit of een mening?",
        options: [
          "Een mening — het is wat Ties ervan vindt",
          "Een feit — het staat in een nieuwsbericht, dus het is waar",
          "Een feit — Ties was er zelf bij, dus hij weet het zeker",
          "Geen van beide — het is een grap van de journalist",
        ],
        answer: 0,
        evidence: "Let extra op bij een citaat (uitspraak tussen aanhalingstekens): dat zijn de woorden van díé persoon.",
        wrongHints: [
          null,
          "In een nieuwsbericht staan feiten én uitspraken van mensen door elkaar. Kun je nameten of een feest 'het gezelligste' was?",
          "Ties was erbij, dat wel — maar een ander die erbij was kan het feest saai gevonden hebben. Wat zegt dat over zijn uitspraak?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken het citaat", tekst: "De aanhalingstekens verklappen: dit zijn de letterlijke woorden van bezoeker Ties, niet van de journalist." },
            { titel: "Doe de controleer-test", tekst: "Kun je nameten of dit feest écht het gezelligste van het jaar was? Nee — 'gezellig' is voor iedereen anders. Niet te controleren dus." },
            { titel: "Trek de conclusie", tekst: "Niet te controleren + het is wat iemand vindt = een mening. Het is wel een feit dát Ties dit zei — maar wat hij zei, blijft zijn mening." },
          ],
          woorden: [
            { woord: "citaat", uitleg: "De letterlijke woorden van iemand, in een tekst gezet tussen aanhalingstekens (\" \")." },
            { woord: "mening", uitleg: "Wat iemand ergens van vindt. Een ander mag er anders over denken." },
          ],
          theorie: "**De controleer-test voor feit of mening**\n\nStel jezelf één vraag: *kan ik dit nameten, natellen of opzoeken?*\n\n- 'Er kwamen 300 bezoekers' → natellen kan → **feit**\n- 'Het was het gezelligste feest' → niet te meten, iedereen vindt iets anders → **mening**\n\nLet op de valkuil met citaten: een nieuwsbericht hoort feiten te brengen, maar een journalist mag mensen citeren — en die mensen geven vaak hun mening. Het citaat staat dan wel in een betrouwbaar bericht, maar blijft gewoon een mening van die ene persoon.\n\nMening-verklikkers: mooiste, leukste, gezelligste, beste, vreselijk, prachtig, 'ik vind'.",
          voorbeelden: [
            { type: "citaat-mening", tekst: "'\"De nieuwe brug is oerlelijk\", zegt een omwonende.' → mening van die omwonende. Feit is alleen: er is een nieuwe brug én iemand zei dit." },
            { type: "citaat-feit", tekst: "'\"De brug is 40 meter lang\", zegt de bouwer.' → dit kun je nameten. Een citaat kán dus ook een feit bevatten — de controleer-test beslist." },
          ],
          basiskennis: [
            { onderwerp: "Aanhalingstekens = iemands woorden", uitleg: "Alles tussen aanhalingstekens komt uit de mond van de genoemde persoon. Vraag je altijd af: is dit te controleren, of vindt diegene dit?" },
          ],
          niveaus: {
            basis: "Doe de controleer-test: kun je nameten of dit feest het gezelligste van het jaar was?",
            simpeler: "Stel dat een andere bezoeker het feest saai vond — kan dat? Wat zegt dat over de uitspraak van Ties?",
            nogSimpeler: "Kijk naar het woord 'gezelligste': is dat iets wat je kunt tellen, of iets wat je kunt vínden?",
          },
        },
      },
      {
        q: "Welke zin uit een nieuwsbericht is een **feit**?",
        options: [
          "Er kwamen driehonderd bezoekers naar de braderie",
          "\"Het was de leukste dag van het jaar\", zegt een bezoeker",
          "De organisator vindt het feest geweldig geslaagd",
          "Volgens veel bezoekers was de muziek prachtig",
        ],
        answer: 0,
        evidence: "Een feit kun je controleren of natellen: \"Er kwamen driehonderd bezoekers.\"",
        wrongHints: [
          null,
          "Aanhalingstekens plus het woord 'leukste' — kun je dat nameten, of vindt iemand dat?",
          null,
          "'Prachtig' — bestaat er een meetlat voor? Zoek de zin met iets wat je écht kunt natellen.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Pak de controleer-test erbij", tekst: "Een feit kun je nameten, natellen of opzoeken. Loop de vier zinnen langs en test ze één voor één." },
            { titel: "Streep de meningen weg", tekst: "'Leukste dag', 'geweldig geslaagd', 'prachtig' — dat zijn allemaal vind-woorden. Die zinnen vertellen wat mensen ergens van vinden." },
            { titel: "Wat blijft over?", tekst: "Eén zin bevat een aantal dat je kunt natellen. Tellen = controleren = feit." },
          ],
          woorden: [
            { woord: "feit", uitleg: "Iets dat echt zo is en dat je kunt controleren: een aantal, een datum, een meting." },
            { woord: "braderie", uitleg: "Een gezellige markt op straat met kraampjes, vaak in de zomer." },
          ],
          theorie: "**Vind-woorden verklappen de mening**\n\nMeningen verstoppen zich achter bepaalde woorden. Leer deze verklikkers herkennen:\n\n- overtreffende woorden: leukste, mooiste, beste, slechtste\n- oordeel-woorden: prachtig, vreselijk, geweldig, saai\n- vind-constructies: 'vindt', 'volgens veel mensen', 'ik denk dat'\n\nFeiten herken je aan het omgekeerde: aantallen, datums, tijden, namen, afstanden — alles wat je in principe kunt opzoeken of natellen. Op de toets krijg je vaak vier zinnen waarvan er maar één telbaar of controleerbaar is.",
          voorbeelden: [
            { type: "feit", tekst: "'De braderie duurde van tien tot vijf uur.' → op te zoeken, na te vragen: feit." },
            { type: "mening-vermomd", tekst: "'Volgens veel mensen was het gezellig.' Pas op: 'volgens veel mensen' klinkt officieel, maar gezelligheid blijft een mening — ook als velen haar delen." },
          ],
          basiskennis: [
            { onderwerp: "Veel mensen ≠ feit", uitleg: "Ook als héél veel mensen iets vinden, blijft het een mening. Pas als je het kunt nameten, is het een feit." },
          ],
          niveaus: {
            basis: "Doe bij elke zin de controleer-test: welke bevat iets wat je kunt natellen?",
            simpeler: "Streep alle zinnen weg met vind-woorden zoals 'leukste', 'geweldig' en 'prachtig'. Welke zin blijft over?",
            nogSimpeler: "Zoek de zin met een getal erin dat je zou kunnen natellen.",
          },
        },
      },
      {
        q: "Boven een bericht staat: *\"Donderdag 12 maart — Afgelopen dinsdag brak er brand uit in een leegstaande schuur bij Eikendam.\"* — Wanneer was de brand?",
        options: ["Dinsdag", "Donderdag", "Op 12 maart", "Dat staat niet in het bericht"],
        answer: 0,
        evidence: "Woorden als gisteren, afgelopen dinsdag en vorige week reken je vanaf de schrijfdag.",
        wrongHints: [
          null,
          "Op die dag werd het bericht geschréven. Is dat dezelfde dag als de brand? Zoek het woordje 'afgelopen'.",
          "Die datum hoort bij de schrijfdag van het bericht, bovenaan. De brand was eerder — welke dag noemt de zin zelf?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Twee tijden in één bericht", tekst: "Bovenaan staat wanneer het bericht geschreven is (donderdag 12 maart). In de zin staat wanneer de gebeurtenis was ('afgelopen dinsdag'). Dat zijn twee verschillende momenten!" },
            { titel: "Wat vraagt de vraag?", tekst: "De vraag gaat over de bránd — de gebeurtenis. Dus zoek je de tijd in de zin over de brand, niet de datum bovenaan." },
            { titel: "Reken zo nodig terug", tekst: "'Afgelopen dinsdag' reken je vanaf de schrijfdag (donderdag): dat is twee dagen eerder. De gebeurtenis was dus vóór het bericht — zoals bijna altijd." },
          ],
          woorden: [
            { woord: "schrijfdag", uitleg: "De dag waarop de journalist het bericht schreef. Staat vaak bovenaan het bericht als datum." },
            { woord: "afgelopen", uitleg: "'Afgelopen dinsdag' = de dinsdag die het laatst voorbij is, gerekend vanaf de schrijfdag." },
          ],
          theorie: "**Wanneer geschreven ≠ wanneer gebeurd**\n\nNieuws gaat bijna altijd over iets dat al gebeurd ís. Daardoor staan er twee tijden in een bericht:\n\n1. De **schrijfdag** — de datum bovenaan.\n2. De **gebeurtenis-tijd** — in de zinnen zelf: 'gisteren', 'afgelopen dinsdag', 'vorige week'.\n\nDie gebeurtenis-woorden reken je altijd vanaf de schrijfdag: staat er 'gisteren' in een bericht van donderdag, dan gebeurde het op woensdag. Vraagt de toets 'wanneer gebeurde het?', kies dan nooit zomaar de datum bovenaan — dat is de klassieke instinker.",
          voorbeelden: [
            { type: "terugrekenen", tekst: "Bericht van zaterdag: 'Gisteren won het schoolteam de finale.' → de finale was op vrijdag, niet op zaterdag." },
          ],
          basiskennis: [
            { onderwerp: "Nieuws kijkt terug", uitleg: "Een nieuwsbericht vertelt bijna altijd over iets dat vóór de schrijfdag gebeurde. De datum bovenaan is zelden het antwoord op een wanneer-vraag." },
          ],
          niveaus: {
            basis: "Er staan twee tijden in dit stukje: de datum bovenaan en een dag in de zin zelf. Welke van de twee hoort bij de brand?",
            simpeler: "Zoek het woord 'afgelopen' — de dag die daarna komt, is de dag van de gebeurtenis.",
            nogSimpeler: "Lees de zin over de brand nog eens: welke dag wordt dáárin genoemd?",
          },
        },
      },
    ],
  },

  // ── Stap 4 ──────────────────────────────────────────────────────
  {
    title: "Doorstroomtoets-oefening — de mix",
    explanation: tekstAlpaca + `

Dit is 'm: de eindoefening, met vragen zoals je ze écht op de Doorstroomtoets krijgt. Alles komt terug — de zes gouden vragen, feit of mening, de overdrijvende kop en de twee tijden in één bericht.

Pak bij elke vraag je vaste aanpak erbij: **bedenk** welke gouden vraag het is, **zoek** de juiste plek in het bericht op (hoofdnieuws vooraan, details verderop), en **controleer** of jouw antwoord er echt staat. Terugkijken in de tekst mag en moet. Succes!`,
    checks: [
      {
        q: "Wie of wat speelt de hoofdrol in dit bericht?",
        options: ["Alpaca Berry", "De familie Vos", "Buurvrouw De Wit", "De dierenarts"],
        answer: 0,
        evidence: "Twee dagen lang was alpaca Berry spoorloos.",
        wrongHints: [
          null,
          "In hún moestuin liep het verhaal af — maar over wie gaat bijna elke alinea?",
          "Zij zegt alleen één zinnetje aan het einde. Wie was er twee dagen spoorloos?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Dit is een wie-vraag", tekst: "Je zoekt de hoofdpersoon (of het hoofd-dier!). Kijk wie er in de kop én in de eerste alinea genoemd wordt." },
            { titel: "Tel eens mee", tekst: "De kop gaat over een ontsnapte alpaca. De eerste zin ook. En bijna elke alinea daarna. Eén figuur komt overal terug." },
            { titel: "De rest is bijrol", tekst: "De familie Vos, de buurvrouw, de dierenarts: die komen elk maar één keer voorbij. Zij helpen het verhaal, maar het verhaal gaat niet over hen." },
          ],
          woorden: [
            { woord: "hoofdrol", uitleg: "De persoon (of het dier) waar de tekst vooral over gaat. Bijrollen komen maar kort voorbij." },
            { woord: "spoorloos", uitleg: "Helemaal verdwenen, zonder dat iemand weet waarheen." },
          ],
          theorie: "**De hoofdrol vind je met de terugkom-truc**\n\nWie de hoofdrol heeft, komt overal terug: in de kop, in de eerste alinea en in de meeste alinea's daarna.\n\nZo check je het:\n1. Wie noemt de kop?\n2. Wie noemt de eerste zin?\n3. Over wie gaan de meeste alinea's?\n\nDrie keer dezelfde naam? Dan heb je de hoofdrol te pakken. Personen die maar in één zinnetje voorkomen, zijn bijrollen — die staan er vaak als valstrik-optie bij.",
          voorbeelden: [
            { type: "terugkom-truc", tekst: "Bericht over een gevonden schat: de kop noemt de schat, alinea 1 de vinder Jans, en daarna gaat álles over Jans. → Jans heeft de hoofdrol, de burgemeester (één zin) niet." },
          ],
          basiskennis: [
            { onderwerp: "Kop + eerste alinea", uitleg: "De hoofdrolspeler wordt bijna altijd al in de kop of de eerste alinea genoemd." },
          ],
          niveaus: {
            basis: "Gebruik de terugkom-truc: wie wordt in de kop, de eerste zin én de meeste alinea's genoemd?",
            simpeler: "Wie was er twee dagen kwijt? Om dat dier draait het hele bericht.",
            nogSimpeler: "Lees de kop en de eerste zin: wie komt in allebei voor?",
          },
        },
      },
      {
        q: "Waarom kon Berry ontsnappen?",
        options: [
          "Door de storm was een deel van het hek omgewaaid",
          "Boer Teun had het hek open laten staan",
          "De twee voetballende kinderen hadden het hek opengezet",
          "Berry sprong over het hek heen",
        ],
        answer: 0,
        evidence: "Afgelopen weekend raasde er een flinke storm over het dorp. Daardoor waaide een deel van het hek van de kinderboerderij om. Berry glipte door het gat naar buiten",
        wrongHints: [
          null,
          "Over een openstaand hek lees je niets. Zoek de alinea die begint met 'Hoe kon Berry ontsnappen?'",
          "Die kinderen komen pas aan het éínde van het verhaal voorbij, bij het terugvinden. Wat gebeurde er in het weekend?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Dit is een waarom-vraag", tekst: "Je zoekt een oorzaak. Fijn: de tekst stelt de vraag zelf al — er is een alinea die begint met 'Hoe kon Berry ontsnappen?'" },
            { titel: "Lees die alinea", tekst: "Storm → 'Daardoor waaide een deel van het hek om' → 'Berry glipte door het gat naar buiten.' Het signaalwoord 'daardoor' wijst de oorzaak aan." },
            { titel: "Controleer de keten", tekst: "Storm → hek om → gat → ontsnapt. Elke schakel staat in de tekst. Antwoorden zonder die keten (openstaand hek, springen) staan er niet in." },
          ],
          woorden: [
            { woord: "daardoor", uitleg: "Signaalwoord: wat hiervóór stond (de storm) is de oorzaak van wat nu komt (het omgewaaide hek)." },
            { woord: "glippen", uitleg: "Snel en ongemerkt ergens doorheen of langs gaan." },
          ],
          theorie: "**Een tussenkopje of tussenvraag wijst je de weg**\n\nJournalisten helpen hun lezers soms met een vraag ín de tekst: 'Hoe kon Berry ontsnappen?' Daarna volgt direct het antwoord.\n\nZie je zo'n tussenvraag die lijkt op de toetsvraag? Bingo — daar staat je antwoord. Lees dan de hele alinea en let op signaalwoorden (daardoor, omdat, dus) om oorzaak en gevolg in de juiste volgorde te zetten. En check zoals altijd: staan de andere opties überhaupt in de tekst?",
          voorbeelden: [
            { type: "tussenvraag", tekst: "Tekst: 'Waarom sluit het zwembad? Het dak moet vervangen worden.' → de tekst stelt de vraag én geeft direct het antwoord." },
          ],
          basiskennis: [
            { onderwerp: "Oorzaak zoeken", uitleg: "Bij waarom-vragen: zoek signaalwoorden (omdat, doordat, daardoor) en volg de keten van oorzaak naar gevolg." },
          ],
          niveaus: {
            basis: "Zoek de alinea die zelf begint met een vraag over de ontsnapping. Welke keten van gebeurtenissen staat daar?",
            simpeler: "Wat raasde er in het weekend over het dorp — en wat deed dat met het hek?",
            nogSimpeler: "Lees de tweede alinea: hoe ontstond het gat waar Berry doorheen glipte?",
          },
        },
      },
      {
        q: "Wanneer werd Berry teruggevonden?",
        options: ["Woensdagmiddag", "Maandagochtend", "In het weekend", "Op donderdag 12 maart"],
        answer: 0,
        evidence: "Woensdagmiddag werd Berry eindelijk teruggevonden, in een moestuin twee straten verderop.",
        wrongHints: [
          null,
          "Op dat moment werd juist ontdekt dat Berry wég was. Zoek de zin waarin hij wordt teruggevonden.",
          null,
          "Kijk goed: die datum staat hélemaal bovenaan. Wat betekent een datum op die plek ook alweer?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Dit is een wanneer-vraag — met valkuilen", tekst: "Het bericht noemt véél tijden: het weekend (storm), maandagochtend (verdwijning ontdekt), woensdagmiddag (gevonden) en donderdag 12 maart (schrijfdag). Je moet de juiste kiezen." },
            { titel: "Koppel de tijd aan de gebeurtenis", tekst: "De vraag gaat over het terugvinden. Zoek dus de zin met 'teruggevonden' en kijk welke tijd erbij staat." },
            { titel: "Controleer", tekst: "In de eerste alinea én verderop staat het terugvinden gekoppeld aan dezelfde dag. Twee keer hetzelfde — dan zit je goed. De datum bovenaan is alleen de schrijfdag." },
          ],
          woorden: [
            { woord: "tijdlijn", uitleg: "De volgorde van gebeurtenissen in de tijd: wat gebeurde eerst, wat daarna?" },
          ],
          theorie: "**Meerdere tijden in één bericht? Maak een mini-tijdlijn**\n\nStaan er veel dagen en momenten in een tekst, zet ze dan even op een rijtje:\n\n- weekend → storm, hek waait om\n- maandagochtend → verdwijning ontdekt\n- woensdagmiddag → teruggevonden\n- donderdag → bericht geschreven\n\nDaarna koppel je de toetsvraag aan de juiste gebeurtenis op je tijdlijn. Vraagt de toets naar het terugvinden? Pak de tijd die bíj die gebeurtenis in de zin staat — niet een andere tijd die toevallig ook in de tekst voorkomt.",
          voorbeelden: [
            { type: "koppelen", tekst: "'Zaterdag begon de bouw; dinsdag was de hut af.' Vraag: wanneer was de hut klaar? → pak de tijd bij 'af', niet bij 'begon'." },
          ],
          basiskennis: [
            { onderwerp: "Tijd bij de juiste gebeurtenis", uitleg: "Elke tijd in een bericht hoort bij één gebeurtenis. Kies de tijd die in dezélfde zin staat als de gebeurtenis uit de vraag." },
          ],
          niveaus: {
            basis: "Zoek de zin met het woord 'teruggevonden'. Welke dag staat aan het begin van die zin?",
            simpeler: "Er staan vier tijden in het bericht. Streep weg: wanneer was de storm, wanneer werd de verdwijning ontdekt, wanneer is het bericht geschreven — welke tijd blijft over voor het terugvinden?",
            nogSimpeler: "Lees de derde zin van het bericht: op welk moment werd Berry gevonden?",
          },
        },
      },
      {
        q: "*\"'Dit is het spannendste dat hier ooit is gebeurd', zegt buurvrouw De Wit.\"* — Wat is deze zin?",
        options: [
          "Een mening van buurvrouw De Wit",
          "Een feit, want het staat in een nieuwsbericht",
          "Een feit, want mevrouw De Wit woont er vlakbij",
          "Een fout van de journalist",
        ],
        answer: 0,
        evidence: "\"Dit is het spannendste dat hier ooit is gebeurd\", zegt buurvrouw De Wit lachend.",
        wrongHints: [
          null,
          "In een nieuwsbericht mogen mensen geciteerd worden — en mensen zeggen niet alleen feiten. Kun je 'het spannendste ooit' nameten?",
          "Dichtbij wonen maakt je uitspraak niet controleerbaar. Zou een andere buur het misschien helemaal niet spannend gevonden kunnen hebben?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken het citaat", tekst: "Aanhalingstekens + 'zegt buurvrouw De Wit' — dit zijn haar eigen woorden, niet die van de journalist." },
            { titel: "Doe de controleer-test", tekst: "Kun je nameten of dit écht het spannendste is dat ooit in Zandhoven gebeurde? Nee. 'Spannend' is een vind-woord, en 'ooit' kan niemand natellen." },
            { titel: "Conclusie", tekst: "Niet controleerbaar en het is wat zíj ervan vindt: haar mening dus. Het bericht blijft betrouwbaar — het meldt eerlijk wíé dit vindt." },
          ],
          woorden: [
            { woord: "citeren", uitleg: "Iemands woorden letterlijk opschrijven, tussen aanhalingstekens en met de naam erbij." },
          ],
          theorie: "**Waarom zet een journalist meningen in een feiten-bericht?**\n\nCitaten maken een bericht levendig: je hoort echte mensen. De journalist doet niets fout — hij vertelt er eerlijk bij wíé het zegt. Het is aan jou als lezer om te zien: dit is de mening van díé persoon.\n\nZo lees je citaten slim:\n1. Zie aanhalingstekens → dit zegt een persoon.\n2. Doe de controleer-test op de inhoud.\n3. Vind-woorden ('spannendste', 'mooiste') of niet te meten beweringen → mening van de spreker.\n\nOnthoud het verschil: DAT ze het zei is een feit; WAT ze vindt is een mening.",
          voorbeelden: [
            { type: "dat-vs-wat", tekst: "'\"Ons dorp is het gezelligste van het land\", zegt de bakker.' Feit: de bakker zei dit. Mening: dat het dorp het gezelligste is." },
          ],
          basiskennis: [
            { onderwerp: "Bron bij de mening", uitleg: "Een goed nieuwsbericht zet bij elke mening wíé het vindt. Staat er een naam bij een uitspraak? Dan weet je: dit is die persoon zijn of haar kijk erop." },
          ],
          niveaus: {
            basis: "Doe de controleer-test: kun je nameten of dit écht het spannendste ooit in het dorp was?",
            simpeler: "Kijk naar het woord 'spannendste': is dat te tellen of te meten — of is dat iets wat je kunt vínden?",
            nogSimpeler: "Zou een andere buur dit misschien helemaal niet spannend gevonden kunnen hebben? Wat zegt dat over de uitspraak?",
          },
        },
      },
      {
        q: "De kop zegt: *\"Heel Zandhoven in de ban van ontsnapte alpaca\"*. Wat kun je hierover zeggen na het lezen van de tekst?",
        options: [
          "De kop overdrijft een beetje: veel dorpsbewoners waren betrokken, maar niet letterlijk iedereen",
          "Elke inwoner van Zandhoven heeft meegezocht naar Berry",
          "De kop klopt niet, want niemand in het dorp wist van de ontsnapping",
          "De kop gaat eigenlijk over de storm van het weekend",
        ],
        answer: 0,
        evidence: "Boer Teun zocht overal. Buurtbewoners hielpen mee en hingen posters op met een foto van Berry.",
        wrongHints: [
          null,
          "Kun je in de tekst aanwijzen dat álle inwoners zochten? Er staat 'buurtbewoners hielpen mee' — is dat hetzelfde als iedereen?",
          "De tekst noemt juist zoekende buurtbewoners en posters. Wat maakt een kop graag groter dan de tekst?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat beweert de kop?", tekst: "'Heel Zandhoven' — dat zou betekenen: elke inwoner, van baby tot opa, was met Berry bezig." },
            { titel: "Wat zegt de tekst?", tekst: "De tekst noemt: boer Teun zocht, buurtbewoners hielpen, er hingen posters, twee kinderen vonden Berry. Veel mensen dus — maar nergens staat dat écht iedereen meedeed." },
            { titel: "Conclusie", tekst: "De kop maakt het groter om je nieuwsgierig te maken. Dat mag — maar jij weet nu: voor de precieze informatie kijk je in de tekst, niet in de kop." },
          ],
          woorden: [
            { woord: "in de ban van", uitleg: "Ergens vol van zijn; nergens anders meer aan denken." },
            { woord: "buurtbewoners", uitleg: "De mensen die in de buurt wonen — dus een deel van het dorp, niet per se iedereen." },
          ],
          theorie: "**'Heel', 'iedereen', 'niemand' — pas op voor alles-woorden**\n\nKoppen gebruiken graag alles-woorden: heel het dorp, iedereen, niemand, altijd, nooit. Die maken het nieuws groot en spannend.\n\nControle-vraag: kan de tekst dit waarmaken? Meestal staat er iets voorzichtigers: 'veel mensen', 'buurtbewoners', 'tientallen'. Dan weet je: de kop is aangedikt.\n\nLet op het verschil met 'de kop klopt niet': een overdreven kop is geen leugen — er zát echt veel van het dorp achter Berry aan. De kop vergroot alleen iets dat waar is. Op de toets is 'overdreven maar gebaseerd op de tekst' vaak precies het goede antwoord.",
          voorbeelden: [
            { type: "alles-woord", tekst: "Kop: 'Iedereen wil het nieuwe spel hebben.' Tekst: 'De eerste duizend exemplaren waren snel uitverkocht.' → veel vraag, maar 'iedereen' is aangedikt." },
          ],
          basiskennis: [
            { onderwerp: "Aangedikt ≠ gelogen", uitleg: "Een overdrijvende kop vergroot iets dat echt gebeurd is. Dat is iets anders dan een bericht dat niet klopt." },
          ],
          niveaus: {
            basis: "Vergelijk de kop met de tekst: wie deden er volgens de tekst allemaal mee — en is dat hetzelfde als 'heel Zandhoven'?",
            simpeler: "'Heel Zandhoven' zou betekenen: elke inwoner. Kun je dat in de tekst terugvinden, of staat er iets voorzichtigers?",
            nogSimpeler: "Deed volgens de tekst écht iederéén mee, of vooral de buurt rond de kinderboerderij?",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const nieuwsberichtLezenPo = {
  id: "nieuwsbericht-lezen-po",
  title: "Een nieuwsbericht lezen — wie, wat, waar, wanneer, waarom en hoe",
  emoji: "📰",
  level: "groep6-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — informatieve teksten: nieuwsberichten, feit en mening",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
  ],
  intro:
    "Kop, eerste alinea, details — een nieuwsbericht zit altijd hetzelfde in elkaar. Leer de zes gouden vragen (wie, wat, waar, wanneer, waarom en hoe) als vragenbril, prik door overdrijvende koppen heen en herken het verschil tussen feit en mening. Met twee eigen oefenberichten en een toets-stijl eindopdracht.",
  triggerKeywords: [
    "nieuwsbericht", "krantenartikel", "krant lezen", "nieuws lezen",
    "5 w's", "wie wat waar", "wie wat waar wanneer waarom hoe",
    "feit en mening", "feit of mening", "kop van een artikel",
    "informatieve tekst", "begrijpend lezen", "doorstroomtoets lezen",
    "cito begrijpend lezen", "jeugdjournaal",
  ],
  chapters,
  steps,
};

export default nieuwsberichtLezenPo;
