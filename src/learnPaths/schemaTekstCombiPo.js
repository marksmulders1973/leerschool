// Leerpad: Tekst + schema/tabel combineren — vaste Doorstroomtoets-vorm
// Op de toets staat vaak een tekst mét een prijslijst, rooster of
// dienstregeling. Het antwoord vind je alleen door BEIDE te gebruiken.
// Kinderen leren kruispunt-lezen (rij + gegeven), de taakverdeling
// (tekst = regels/uitleg, lijst = precieze getallen) en combineer-vragen.
//
// Let op: tabellen worden in de app niet gerenderd — alle "tabellen"
// staan daarom als nette tekst-regels (geen pipes).
// Alle teksten zijn 100% eigen werk. 4 stappen, 17 checks totaal.

const stepEmojis = ["🔎", "🏊", "🧩", "🏆"];

const chapters = [
  { letter: "A", title: "Zo lees je een tabel of lijst", emoji: "🔎", from: 0, to: 0 },
  { letter: "B", title: "Oefenen: het zwembad", emoji: "🏊", from: 1, to: 1 },
  { letter: "C", title: "Lastige gevallen", emoji: "🧩", from: 2, to: 2 },
  { letter: "D", title: "Doorstroomtoets-oefening", emoji: "🏆", from: 3, to: 3 },
];

// ── Tekst voor stap 2: eigen tekst zwembad + prijslijst (~150 woorden) ──
const tekstZwembad = `**Zwembad De Blauwe Golf**

Zwembad De Blauwe Golf in Zilverdam is elke dag open van 9.00 tot 17.30 uur. Kinderen zonder zwemdiploma dragen een oranje bandje en blijven in het ondiepe bad.

Let op: op woensdagmiddag is het Spetterdag. Dan betalen kinderen maar de helft van de gewone prijs. Ga je in de vakantie heel vaak zwemmen? Dan is een tienbadenkaart misschien voordeliger.

Tarieven (per persoon, per keer):
— Peuter (t/m 3 jaar): gratis
— Kind (4 t/m 11 jaar): € 4,50
— Volwassene (vanaf 12 jaar): € 6,50
— Gezinskaart (2 volwassenen + 2 kinderen): € 18,00
— Tienbadenkaart kind (10 keer zwemmen): € 40,00

Kaartjes koop je bij de kassa of online. Een gezinskaart is alleen geldig als het hele gezin tegelijk naar binnen gaat.`;

// ── Tekst voor stap 4: eigen tekst buurtfeest + programma (~200 woorden) ──
const tekstBuurtfeest = `**Buurtfeest in de Vlinderwijk**

Zaterdag 14 juni viert de Vlinderwijk haar jaarlijkse buurtfeest. Mevrouw Kalden van de feestcommissie heeft er weer iets moois van gemaakt. Iedereen uit de wijk is welkom en de toegang is vrij.

Programma van de dag:
— 10.00 uur: opening door de burgemeester (op het plein)
— 10.30 uur: kinderspelen (op het grasveld)
— 12.00 uur: pannenkoeken eten (in de feesttent)
— 13.30 uur: talentenjacht (op het podium)
— 15.00 uur: ballonnenwedstrijd (op het plein)
— 16.00 uur: einde van het feest

Er zijn een paar regels. Wil je meedoen aan de talentenjacht? Geef je dan vóór 12.00 uur op bij de kraam van meneer Baris, naast de feesttent. Bij regen verhuist de talentenjacht van het podium naar de feesttent.

Voor de pannenkoeken heb je muntjes nodig. Ieder kind krijgt bij de ingang één gratis muntje. Elk extra muntje kost € 1,00 bij de kraam. Eén muntje is goed voor één pannenkoek.

De ballonnenwedstrijd is voor alle kinderen. De ballon die het verst komt, wint een prijs. Vergeet dus niet je naamkaartje aan het touwtje te hangen!`;

const steps = [
  // ── Stap 1 ──────────────────────────────────────────────────────
  {
    title: "Zo lees je een tabel of lijst",
    explanation: `Op de Doorstroomtoets krijg je vaak een tekst mét een tabel erbij: een prijslijst, een rooster of een dienstregeling. Een **tabel** zet informatie netjes op een rij. Een echte tabel heeft **rijen** (van links naar rechts), **kolommen** (van boven naar beneden) en **koppen** (de titeltjes erboven). In deze les zie je zo'n tabel als een nette lijst: elke regel is één rij, en wat achter de dubbele punt staat, zijn de gegevens.

Kijk maar naar de openingstijden van Bibliotheek De Boekenberg:

— Maandag: 13.00 – 17.00 uur
— Woensdag: 10.00 – 17.00 uur
— Vrijdag: 13.00 – 20.00 uur
— Zaterdag: 10.00 – 13.00 uur

Op de andere dagen is de bibliotheek dicht.

Zo vind je razendsnel een antwoord — dat heet **kruispunt-lezen**:
1. **Zoek de rij**: waar gaat de vraag over? (Bijvoorbeeld: vrijdag.)
2. **Zoek het gegeven**: wat wil je weten? (Bijvoorbeeld: de sluitingstijd.)
3. **Kijk waar ze elkaar kruisen**: op de regel van vrijdag staat achter het streepje 20.00 uur — dat is het antwoord.

En onthoud de taakverdeling:
- De **tekst** geeft uitleg en regels ("op andere dagen dicht").
- De **tabel of lijst** geeft de precieze gegevens: getallen, tijden en prijzen.

Heb je een getal nodig? Lijst! Wil je weten wat er mag of geldt? Tekst! Probeer het maar met de vragen hieronder.`,
    checks: [
      {
        q: "Kijk naar de openingstijden van Bibliotheek De Boekenberg. Hoe laat gaat de bibliotheek op woensdag open?",
        options: ["Om 10.00 uur", "Om 13.00 uur", "Om 17.00 uur", "Om 20.00 uur"],
        answer: 0,
        evidence: "Woensdag: 10.00 – 17.00 uur",
        wrongHints: [
          null,
          "Kijk je wel op de goede regel? Zoek eerst de regel die met 'woensdag' begint.",
          "Is dat het begin of juist het einde van de dag? Let op welk getal vóór het streepje staat.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de rij", tekst: "De vraag gaat over woensdag. Zoek in de lijst de regel die met 'Woensdag' begint. De andere dagen mag je even negeren." },
            { titel: "Zoek het gegeven", tekst: "Je wilt weten hoe laat de bibliotheek opengaat. Op elke regel staan twee tijden: eerst de openingstijd, dan een streepje, dan de sluitingstijd." },
            { titel: "Lees het kruispunt", tekst: "Op de woensdag-regel staat vóór het streepje de tijd waarop de deur opengaat. Dat getal is je antwoord." },
          ],
          woorden: [
            { woord: "rij", uitleg: "Eén regel in een tabel of lijst — hier hoort elke dag bij één regel." },
            { woord: "openingstijd", uitleg: "De tijd waarop iets opengaat. De sluitingstijd is wanneer het weer dichtgaat." },
          ],
          theorie: "**Kruispunt-lezen in drie stappen**\n\n1. Zoek de rij: over welke dag (of welk kaartje, welke bus...) gaat de vraag?\n2. Zoek het gegeven: wat wil je precies weten — een tijd, een prijs, een plek?\n3. Kijk waar ze samenkomen: op de goede regel, op de goede plek.\n\nBij tijden geldt bijna altijd: het getal vóór het streepje is het begin, het getal erachter is het einde. '10.00 – 17.00 uur' betekent dus: open om 10.00 uur, dicht om 17.00 uur.",
          voorbeelden: [
            { type: "kruispunt", tekst: "Vraag: hoe laat sluit de bibliotheek op vrijdag? Zoek de vrijdag-regel: '13.00 – 20.00 uur'. Het getal ná het streepje is de sluitingstijd: 20.00 uur." },
          ],
          basiskennis: [
            { onderwerp: "Eén regel = één rij", uitleg: "In deze les staat elke rij van de tabel op een eigen regel. Wat vóór de dubbele punt staat, is de kop van de rij; erachter staan de gegevens." },
          ],
          niveaus: {
            basis: "Zoek de regel die met 'woensdag' begint. Het eerste getal op die regel is de openingstijd.",
            simpeler: "Elke regel is één dag. Vind eerst de goede dag. Kijk dan naar de tijd die vóór het streepje staat — dat is het moment waarop de deur opengaat.",
            nogSimpeler: "Zoek het woord 'woensdag' in de lijst en kijk welk getal er direct achter de dubbele punt staat.",
          },
        },
      },
      {
        q: "Nina wil op zaterdagmiddag om 14.00 uur een boek halen. Kan dat?",
        options: [
          "Nee, op zaterdag is de bibliotheek 's middags al dicht",
          "Ja, de bibliotheek is op zaterdag tot 17.00 uur open",
          "Ja, op zaterdag is de bibliotheek tot 20.00 uur open",
          "Nee, de bibliotheek is op zaterdag helemaal gesloten",
        ],
        answer: 0,
        evidence: "Zaterdag: 10.00 – 13.00 uur",
        wrongHints: [
          null,
          "Waar komt die sluitingstijd vandaan — staat die achter 'zaterdag' of achter een ándere dag?",
          null,
          "De bibliotheek is op zaterdag wél een stukje van de dag open. Kijk alleen goed van hoe laat tot hoe laat.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de rij", tekst: "De vraag gaat over zaterdag. Zoek de zaterdag-regel in de lijst en negeer de rest." },
            { titel: "Lees de tijden precies", tekst: "Op de zaterdag-regel staan twee tijden. De tweede tijd — na het streepje — is de sluitingstijd. Is 14.00 uur vroeger of later dan die sluitingstijd?" },
            { titel: "Trek de conclusie", tekst: "Nina komt om 14.00 uur. Vergelijk dat met de sluitingstijd op de zaterdag-regel: is de deur dan nog open of al dicht?" },
          ],
          woorden: [
            { woord: "sluitingstijd", uitleg: "De tijd waarop iets dichtgaat. Kom je later, dan sta je voor een dichte deur." },
          ],
          theorie: "**Verkeerde-rij-alarm**\n\nDe meeste fouten bij tabelvragen komen niet door moeilijk rekenen, maar door de verkeerde rij pakken. Op elke regel staan dezelfde soort gegevens — tijden lijken op elkaar, dus je oog springt makkelijk naar de verkeerde regel.\n\nTruc: wijs de goede rij aan met je vinger (of op de toets: met je pen op het kladblaadje) en lees alléén die regel. Vergelijk daarna pas met de vraag.",
          voorbeelden: [
            { type: "vergelijken", tekst: "Kan Nina op maandag om 12.00 uur terecht? Maandag-regel: '13.00 – 17.00 uur'. De deur gaat pas om 13.00 uur open, dus om 12.00 uur nog niet." },
          ],
          basiskennis: [
            { onderwerp: "Tijd vergelijken", uitleg: "14.00 uur is 's middags om 2 uur. Vergelijk altijd: is dat vóór of ná de tijden op de regel?" },
          ],
          niveaus: {
            basis: "Kijk op de zaterdag-regel: tot hoe laat is de bibliotheek open? Is dat vóór of ná 14.00 uur?",
            simpeler: "Zoek de regel van zaterdag. De tijd ná het streepje is de sluitingstijd. Komt Nina daarvóór of daarna?",
            nogSimpeler: "Lees alleen de zaterdag-regel. Is de bibliotheek om 14.00 uur ('s middags om 2 uur) daar nog open?",
          },
        },
      },
      {
        q: "Je leest een tekst over een pretpark, met een prijslijst erbij. Waar vind je de precieze prijs van een kaartje?",
        options: [
          "In de prijslijst",
          "In de eerste zin van de tekst",
          "In de titel van de tekst",
          "Dat moet je zelf schatten",
        ],
        answer: 0,
        evidence: "De tabel of lijst geeft de precieze gegevens: getallen, tijden en prijzen.",
        wrongHints: [
          null,
          "De tekst legt vooral uit en geeft regels. Waar staan getallen netjes onder elkaar?",
          null,
          "Schatten is nooit nodig: een van de twee onderdelen is juist gemaakt om precieze getallen te laten zien.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Ken de taakverdeling", tekst: "Tekst en lijst hebben elk hun eigen taak. De tekst vertelt het verhaal en de regels. De lijst zet de precieze gegevens op een rij." },
            { titel: "Wat zoek je?", tekst: "Je zoekt een prijs — een precies getal. Precieze getallen staan in de lijst, netjes per soort kaartje." },
            { titel: "Maar sla de tekst niet over!", tekst: "De prijs zelf staat in de lijst. Maar de tekst kan een regel bevatten die de prijs verandert (zoals een kortingsdag). Daarom lees je altijd allebei." },
          ],
          woorden: [
            { woord: "prijslijst", uitleg: "Een lijst waarin per soort kaartje of product de prijs staat." },
            { woord: "gegevens", uitleg: "Precieze informatie zoals getallen, tijden en prijzen." },
          ],
          theorie: "**De taakverdeling tussen tekst en tabel**\n\n- De **tekst** geeft uitleg en regels: wat mag, wat moet, welke uitzonderingen gelden.\n- De **tabel of lijst** geeft precieze gegevens: prijzen, tijden, aantallen.\n\nStel jezelf bij elke vraag de sorteervraag: zoek ik een precies getal (→ lijst) of zoek ik een regel of uitleg (→ tekst)? Bij combineer-vragen heb je allebei nodig — daarover later meer.",
          voorbeelden: [
            { type: "lijst", tekst: "'Wat kost een kinderkaartje?' → een precies bedrag → kijk in de prijslijst." },
            { type: "tekst", tekst: "'Vanaf welke leeftijd mag je zonder ouder het park in?' → een regel → kijk in de tekst." },
          ],
          basiskennis: [
            { onderwerp: "Sorteervraag stellen", uitleg: "Vraag jezelf eerst: zoek ik een getal of een regel? Dan weet je meteen waar je moet beginnen met zoeken." },
          ],
          niveaus: {
            basis: "Een prijs is een precies getal. Welk onderdeel is gemaakt om precieze getallen overzichtelijk te tonen?",
            simpeler: "Denk aan de taakverdeling: de tekst vertelt regels, de lijst toont getallen. Een prijs is een getal — waar kijk je dan?",
            nogSimpeler: "Waar staan bedragen netjes onder elkaar: in de lopende zinnen of in het overzicht met streepjes?",
          },
        },
      },
      {
        q: "Wat is de slimme volgorde bij het zoeken in een tabel (kruispunt-lezen)?",
        options: [
          "Eerst de goede rij zoeken, dan het goede gegeven, dan kijken waar ze samenkomen",
          "De hele tabel uit je hoofd leren en dan pas de vraag lezen",
          "Altijd het eerste getal van de tabel overnemen",
          "De tabel overslaan en het antwoord in de tekst zoeken",
        ],
        answer: 0,
        evidence: "Zoek de rij, zoek het gegeven, en kijk waar ze elkaar kruisen.",
        wrongHints: [
          null,
          "Moet je álles onthouden, of hoef je maar één plekje in de tabel te vinden?",
          "Staat het antwoord altijd bovenaan? Denk aan hoe je gericht zoekt naar precies dat ene hokje.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: de rij", tekst: "Lees de vraag en bepaal: over welke regel gaat het? Over welke dag, welk kaartje, welke activiteit?" },
            { titel: "Stap 2: het gegeven", tekst: "Bepaal wat je wilt weten: een prijs, een begintijd, een plek? Zo weet je naar welk stukje van de regel je moet kijken." },
            { titel: "Stap 3: het kruispunt", tekst: "Ga naar de goede regel en lees daar precies het stukje af dat je zocht. Dat is je antwoord — controleer nog even of het logisch is." },
          ],
          woorden: [
            { woord: "kruispunt", uitleg: "De plek waar de goede rij en het goede gegeven elkaar tegenkomen — daar staat je antwoord." },
            { woord: "gericht zoeken", uitleg: "Niet alles lezen, maar meteen zoeken naar precies dat ene stukje informatie dat je nodig hebt." },
          ],
          theorie: "**Waarom kruispunt-lezen tijd bespaart**\n\nOp de Doorstroomtoets is tijd kostbaar. Een tabel hoef je nooit helemaal te lezen: je hebt maar één hokje nodig.\n\nHet werkt als het zoeken van een huis: eerst de goede straat (de rij), dan het goede huisnummer (het gegeven). Wie zomaar door de hele wijk dwaalt, doet er veel langer over — en belt vaker bij het verkeerde huis aan.",
          voorbeelden: [
            { type: "toepassen", tekst: "Vraag: 'Hoe laat vertrekt de bus naar Zilverdam?' Rij = de regel met Zilverdam. Gegeven = de vertrektijd. Kruispunt = de tijd op die regel." },
          ],
          basiskennis: [
            { onderwerp: "Eén hokje is genoeg", uitleg: "Bij een tabelvraag zoek je één plekje in de tabel. De rest van de tabel mag je laten voor wat het is." },
          ],
          niveaus: {
            basis: "Denk aan het stappenplan uit de uitleg: waar begin je, en wat doe je daarna?",
            simpeler: "Je zoekt één hokje in de tabel. Hoe vind je dat het snelst: alles lezen, of eerst de goede regel opzoeken?",
            nogSimpeler: "Denk aan het zoeken van een huis: eerst de goede straat, dan het huisnummer. Welke volgorde lijkt daarop?",
          },
        },
      },
    ],
  },

  // ── Stap 2 ──────────────────────────────────────────────────────
  {
    title: "Oefenen: tekst + prijslijst van het zwembad",
    explanation: tekstZwembad + `

Nu echt oefenen! Hierboven staat een tekst over zwembad De Blauwe Golf, met een prijslijst erin. Precies zo'n opdracht kun je op de Doorstroomtoets krijgen.

**Zo pak je het aan:**
1. Lees de vraag goed: over wíé gaat het (let op de leeftijd!) en wat wil je weten?
2. Zoek de goede regel in de prijslijst — kijk goed naar de leeftijden tussen de haakjes.
3. Check daarna de tekst: staat er een regel of uitzondering die voor deze situatie geldt (zoals Spetterdag)?

Soms heb je alleen de lijst nodig, soms alleen de tekst — en bij de moeilijkste vragen allebei. Succes!`,
    checks: [
      {
        q: "Milan is 9 jaar en gaat op zaterdag zwemmen. Wat kost zijn kaartje?",
        options: ["€ 4,50", "€ 6,50", "€ 18,00", "Niets, hij mag gratis naar binnen"],
        answer: 0,
        evidence: "Kind (4 t/m 11 jaar): € 4,50",
        wrongHints: [
          null,
          "Bij welke leeftijden hoort dat bedrag? Kijk tussen de haakjes — en hoe oud is Milan?",
          "Dat bedrag geldt voor een hele groep tegelijk. Hoeveel personen gaan er nu eigenlijk zwemmen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de rij", tekst: "Milan is 9 jaar. Loop de prijslijst langs en kijk bij welke regel een 9-jarige hoort. Let op de leeftijden tussen de haakjes." },
            { titel: "Lees het kruispunt", tekst: "Op de regel die bij Milan past, staat achter de dubbele punt het bedrag. Dat is de prijs van zijn kaartje." },
            { titel: "Check de tekst", tekst: "Staat er in de tekst een uitzondering voor zaterdag? Nee — de Spetterdag-korting geldt alleen op woensdagmiddag. De gewone prijs blijft dus gelden." },
          ],
          woorden: [
            { woord: "t/m", uitleg: "Tot en met. '4 t/m 11 jaar' betekent: 4, 5, 6, 7, 8, 9, 10 en 11 jaar horen er allemaal bij." },
            { woord: "tarief", uitleg: "Een ander woord voor prijs, vooral bij kaartjes en diensten." },
          ],
          theorie: "**Leeftijden tussen haakjes — lees ze precies**\n\nPrijslijsten delen mensen vaak in op leeftijd. De grenzen staan tussen haakjes:\n\n- 't/m 3 jaar' → tot en met 3, dus een kind van 3 hoort er nog bij\n- '4 t/m 11 jaar' → vanaf de 4e verjaardag tot en met 11\n- 'vanaf 12 jaar' → 12 en ouder\n\nDe toets kiest graag een leeftijd vlak bij een grens (11 of 12 jaar!). Lees dus precies: hoort deze leeftijd er nog bij of net niet meer?",
          voorbeelden: [
            { type: "grens", tekst: "Een kind van 11 betaalt de kinderprijs ('4 t/m 11'). Een kind dat net 12 is geworden, betaalt ineens het volwassenen-tarief ('vanaf 12 jaar')." },
          ],
          basiskennis: [
            { onderwerp: "Eerst de persoon, dan de prijs", uitleg: "Bepaal altijd eerst in welke groep iemand valt (leeftijd!), en lees pas daarna de prijs af." },
          ],
          niveaus: {
            basis: "Milan is 9 jaar. Bij welke regel van de prijslijst hoort een kind van 9?",
            simpeler: "Kijk tussen de haakjes van elke regel: waar past '9 jaar' tussen? Lees dan het bedrag achter die regel.",
            nogSimpeler: "Zoek de regel met het woord 'kind' en kijk of 9 jaar tussen de genoemde leeftijden valt.",
          },
        },
      },
      {
        q: "Sara is 10 jaar en gaat op woensdagmiddag (Spetterdag) zwemmen. Wat betaalt zij?",
        options: ["€ 2,25", "€ 4,50", "€ 6,50", "€ 3,25"],
        answer: 0,
        evidence: "Op woensdagmiddag is het Spetterdag. Dan betalen kinderen maar de helft van de gewone prijs. — Kind (4 t/m 11 jaar): € 4,50",
        wrongHints: [
          null,
          "Dat is de gewone kinderprijs uit de lijst — maar welke dag is het vandaag? Lees de regel over woensdagmiddag nog eens.",
          null,
          "Reken het nog eens rustig na: wat is precies de helft van de gewone kinderprijs?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Begin in de lijst", tekst: "Sara is 10 jaar, dus ze hoort bij de kind-regel. Lees daar de gewone prijs af." },
            { titel: "Check de tekst", tekst: "Het is woensdagmiddag. De tekst zegt: op Spetterdag betalen kinderen maar de helft van de gewone prijs. Die regel geldt dus voor Sara!" },
            { titel: "Combineer en reken", tekst: "Neem de kinderprijs uit de lijst en deel die door twee. Dat bedrag betaalt Sara vandaag." },
          ],
          woorden: [
            { woord: "de helft", uitleg: "Een bedrag gedeeld door twee. De helft van € 6,00 is € 3,00." },
            { woord: "combineer-vraag", uitleg: "Een vraag waarbij je informatie uit de tekst én uit de lijst samen nodig hebt." },
          ],
          theorie: "**De combineer-vraag: tekst + lijst = antwoord**\n\nDit is de moeilijkste én meest voorkomende toets-vorm: het antwoord staat nérgens letterlijk. Je moet twee stukjes samenvoegen:\n\n1. Uit de **lijst**: de gewone prijs.\n2. Uit de **tekst**: de regel die de prijs verandert (korting, uitzondering).\n3. Zelf **rekenen**: pas de regel toe op de prijs.\n\nZie je in de opties de 'kale' prijs uit de lijst staan? Grote kans dat dat de valstrik is — de toets test juist of jij de regel uit de tekst hebt gezien.",
          voorbeelden: [
            { type: "combineren", tekst: "Tekst: 'Op vrijdag krijgt iedereen € 1,00 korting.' Lijst: 'Volwassene: € 6,50.' Vrijdag-prijs volwassene: € 6,50 − € 1,00 = € 5,50." },
            { type: "halveren", tekst: "De helft berekenen: € 9,00 → € 4,50. En € 5,00 → € 2,50. Deel het bedrag gewoon door twee." },
          ],
          basiskennis: [
            { onderwerp: "Halveren met euro's", uitleg: "Splits het bedrag: de helft van € 4,00 is € 2,00, en de helft van € 0,50 is € 0,25. Tel die helften daarna bij elkaar op." },
          ],
          niveaus: {
            basis: "Zoek eerst de gewone kinderprijs in de lijst. Lees daarna in de tekst wat er op Spetterdag met die prijs gebeurt.",
            simpeler: "De tekst zegt: op woensdagmiddag betalen kinderen de hélft. Wat is de helft van de gewone kinderprijs uit de lijst?",
            nogSimpeler: "Pak de kinderprijs uit de lijst en deel dat bedrag door twee.",
          },
        },
      },
      {
        q: "Het broertje van Sara is 2 jaar en gaat mee. Wat kost zijn kaartje?",
        options: ["Niets, voor hem is de toegang gratis", "€ 4,50", "€ 2,25", "€ 6,50"],
        answer: 0,
        evidence: "Peuter (t/m 3 jaar): gratis",
        wrongHints: [
          null,
          "Die prijs hoort bij kinderen vanaf 4 jaar. Zoek de regel die past bij een kind van 2.",
          "Halve prijs is een Spetterdag-regel voor kinderen die normaal moeten betalen. Kijk eerst in welke rij een 2-jarige hoort — wat staat daar?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de rij", tekst: "Het broertje is 2 jaar. Loop de leeftijden in de lijst langs: bij welke regel hoort een kind van 2?" },
            { titel: "Lees het kruispunt", tekst: "Achter de regel voor de allerjongste bezoekers staat geen bedrag maar een woord. Lees precies wat daar staat." },
            { titel: "Hoeft er nog gerekend te worden?", tekst: "Nee. De Spetterdag-korting kan de prijs niet lager maken dan wat er al op deze regel staat. Klaar!" },
          ],
          woorden: [
            { woord: "peuter", uitleg: "Een heel jong kind, ongeveer 1 tot 4 jaar oud." },
          ],
          theorie: "**Niet elke rij bevat een getal**\n\nIn een prijslijst staat soms geen bedrag maar een woord: 'gratis', 'uitverkocht', 'op aanvraag'. Dat is óók een antwoord!\n\nVeel kinderen zoeken automatisch naar een getal en slaan zo'n woord-regel over. Lees daarom elke regel helemaal — ook wat er ná de dubbele punt staat als het geen getal is.\n\nEn denk aan de leeftijdsgrenzen: 't/m 3 jaar' betekent dat een kind van 3 er nog net bij hoort, en een kind van 4 niet meer.",
          voorbeelden: [
            { type: "woord-antwoord", tekst: "Dienstregeling: 'Zondag: geen bussen.' Wie alleen naar tijden zoekt, mist dit — terwijl het hét antwoord is op 'rijdt de bus op zondag?'." },
          ],
          basiskennis: [
            { onderwerp: "t/m-grens", uitleg: "'t/m 3 jaar' = tot en met 3. Een kind van 2 valt daar ruim binnen." },
          ],
          niveaus: {
            basis: "Zoek de regel voor de allerjongste bezoekers. Wat staat er achter de dubbele punt?",
            simpeler: "Het broertje is 2 jaar. Welke regel noemt leeftijden waar '2' bij past? Lees die regel helemaal uit.",
            nogSimpeler: "Zoek het woord 'peuter' in de prijslijst en lees wat erachter staat.",
          },
        },
      },
      {
        q: "Vader, moeder, Milan (9) en Sara (10) gaan op zaterdag samen zwemmen. Wat is voor hen de goedkoopste keuze?",
        options: [
          "De gezinskaart",
          "Vier losse kaartjes",
          "Twee tienbadenkaarten",
          "Twee gezinskaarten",
        ],
        answer: 0,
        evidence: "Gezinskaart (2 volwassenen + 2 kinderen): € 18,00 — Volwassene (vanaf 12 jaar): € 6,50 — Kind (4 t/m 11 jaar): € 4,50",
        wrongHints: [
          null,
          "Reken de losse kaartjes eens uit: 2 volwassenen en 2 kinderen. Vergelijk dat totaal met de andere mogelijkheden in de lijst.",
          "Voor wie is zo'n kaart bedoeld — voor één dagje zwemmen, of voor wie heel vaak gaat?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wie gaan er mee?", tekst: "Tel eerst: 2 volwassenen (vader en moeder) en 2 kinderen (Milan en Sara). Precies zo'n groep staat ook in de prijslijst genoemd!" },
            { titel: "Reken de losse kaartjes uit", tekst: "2 volwassenen kosten 2 × € 6,50 = € 13,00. 2 kinderen kosten 2 × € 4,50 = € 9,00. Samen: € 22,00." },
            { titel: "Vergelijk met de gezinskaart", tekst: "Kijk in de lijst wat één kaart voor 2 volwassenen + 2 kinderen kost, en vergelijk dat met € 22,00. Welk bedrag is lager? Dat is de goedkoopste keuze." },
          ],
          woorden: [
            { woord: "gezinskaart", uitleg: "Eén kaart voor een heel gezin tegelijk — vaak goedkoper dan losse kaartjes." },
            { woord: "voordeliger", uitleg: "Goedkoper: je betaalt minder voor hetzelfde." },
          ],
          theorie: "**Vergelijk-vragen: eerst rekenen, dan kiezen**\n\nBij 'wat is het goedkoopst?' moet je twee (of meer) totalen uitrekenen en naast elkaar leggen:\n\n1. Reken elke mogelijkheid apart uit.\n2. Check in de tekst of er voorwaarden gelden (de gezinskaart geldt alleen als het hele gezin tegelijk naar binnen gaat!).\n3. Kies het laagste totaal dat óók echt mag.\n\nLet op eenheden: een tienbadenkaart lijkt duur, maar geldt voor tien keer. Voor één dagje zwemmen vergelijk je alleen prijzen voor die ene dag.",
          voorbeelden: [
            { type: "vergelijken", tekst: "3 vrienden (12+) gaan één keer zwemmen: 3 × € 6,50 = € 19,50. Een gezinskaart mag hier niet — zij zijn geen 2 volwassenen + 2 kinderen. Losse kaartjes dus." },
          ],
          basiskennis: [
            { onderwerp: "Keer-sommen met geld", uitleg: "2 × € 6,50 = € 13,00 en 2 × € 4,50 = € 9,00. Tel de delen daarna op: € 13,00 + € 9,00 = € 22,00." },
          ],
          niveaus: {
            basis: "Reken eerst uit wat vier losse kaartjes samen kosten (2 volwassenen + 2 kinderen). Vergelijk dat met de kaart voor een heel gezin.",
            simpeler: "Losse kaartjes: 2 × € 6,50 en 2 × € 4,50 — tel op. Zoek dan in de lijst de regel voor '2 volwassenen + 2 kinderen'. Welk totaal is lager?",
            nogSimpeler: "Er staat één regel in de lijst die precies bij dit gezin past. Vergelijk dat bedrag met wat vier losse kaartjes samen kosten.",
          },
        },
      },
    ],
  },

  // ── Stap 3 ──────────────────────────────────────────────────────
  {
    title: "Lastige gevallen",
    explanation: `Je kunt nu een lijst lezen én combineren met de tekst. Maar de Doorstroomtoets zet er graag drie **valkuilen** in. Kijk mee bij de prijslijst van kinderboerderij 't Hoefje:

— Entree (per persoon): € 3,00
— Ponyritje (één rondje door de wei): € 2,00
— Ponyles (30 minuten): € 7,50
— Speurtocht (per groepje van maximaal 5 kinderen): € 10,00

In de folder van 't Hoefje staat ook: *"Wie jarig is, mag die dag gratis naar binnen. De speurtocht betaal je één keer per groepje, niet per kind."*

**Valkuil 1 — de verkeerde rij.** 'Ponyritje' en 'ponyles' lijken op elkaar, maar de prijzen verschillen flink. Lees de hele regel, niet alleen het eerste stukje van het woord.

**Valkuil 2 — de tekst kent een uitzondering.** De lijst noemt een entreeprijs, maar de tekst zegt dat jarige bezoekers gratis naar binnen mogen. Een regel in de tekst kan dus sterker zijn dan de lijst. Wie alléén de lijst leest, geeft het verkeerde antwoord.

**Valkuil 3 — de eenheid.** Staat er 'per persoon' of 'per groepje'? Dat maakt een groot verschil als je gaat rekenen! Kijk dus altijd goed wat er tussen de haakjes staat.

Zet je valkuilen-bril op en probeer de vragen hieronder.`,
    checks: [
      {
        q: "Wat kost één ponyritje bij 't Hoefje?",
        options: ["€ 2,00", "€ 7,50", "€ 3,00", "€ 10,00"],
        answer: 0,
        evidence: "Ponyritje (één rondje door de wei): € 2,00",
        wrongHints: [
          null,
          "Lees de regel nog eens precies: is dat het rítje of de lés? De woorden lijken op elkaar.",
          "Dat is het bedrag om binnen te komen, niet om op een pony te zitten.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Let op bijna-dezelfde woorden", tekst: "In de lijst staan 'ponyritje' én 'ponyles'. Ze beginnen allebei met 'pony', maar het zijn twee verschillende regels met verschillende prijzen." },
            { titel: "Lees de hele regel", tekst: "De vraag gaat over een rítje. Zoek de regel waar 'ritje' in staat — en check tussen de haakjes: 'één rondje door de wei'. Ja, dit is de goede regel." },
            { titel: "Lees het kruispunt", tekst: "Achter de dubbele punt op die regel staat het bedrag. Dat is je antwoord." },
          ],
          woorden: [
            { woord: "entree", uitleg: "De prijs om ergens binnen te komen. Ook wel 'toegang' genoemd." },
          ],
          theorie: "**Valkuil 1: bijna-dezelfde rijen**\n\nToetsenmakers zetten graag twee regels in een lijst die op elkaar lijken: ponyritje/ponyles, kinderkaart/kindermenu, bus 14/bus 41. Je oog springt snel naar het eerste woord dat lijkt te passen.\n\nDe verdediging: lees de héle regel, ook wat tussen de haakjes staat. De haakjes vertellen vaak precies wat de regel betekent ('één rondje door de wei' tegenover '30 minuten les').",
          voorbeelden: [
            { type: "bijna-hetzelfde", tekst: "Menukaart: 'Kindermenu: € 6,50' en 'Kinderijsje: € 2,00'. Wie snel leest, pakt bij de vraag over een ijsje zomaar de menu-prijs." },
          ],
          basiskennis: [
            { onderwerp: "Haakjes = extra uitleg", uitleg: "Wat tussen haakjes staat, vertelt je precies waar de regel over gaat. Gebruik het om de goede rij te herkennen." },
          ],
          niveaus: {
            basis: "Er staan twee pony-regels in de lijst. De vraag gaat over een ritje — welke regel hoort daarbij?",
            simpeler: "Zoek de regel waar 'ritje' in staat (niet 'les'). Lees dan het bedrag achter de dubbele punt.",
            nogSimpeler: "Zoek de regel met 'één rondje door de wei' tussen de haakjes en kijk wat dat kost.",
          },
        },
      },
      {
        q: "Sam is vandaag jarig en bezoekt 't Hoefje. Wat betaalt hij voor de entree?",
        options: ["Niets", "€ 3,00", "€ 1,50", "€ 2,00"],
        answer: 0,
        evidence: "Wie jarig is, mag die dag gratis naar binnen.",
        wrongHints: [
          null,
          "Dat is de gewone entreeprijs uit de lijst — maar staat er in de folder-tekst een speciale regel die vandaag voor Sam geldt?",
          null,
          "Dat is de prijs van iets anders uit de lijst. Wat zegt de tékst over bezoekers die jarig zijn?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Begin gewoon in de lijst", tekst: "De entree staat in de lijst: € 3,00 per persoon. Maar stop niet hier!" },
            { titel: "Check de tekst op uitzonderingen", tekst: "De folder zegt: 'Wie jarig is, mag die dag gratis naar binnen.' Sam is vandaag jarig — deze regel gaat dus over hem." },
            { titel: "De tekst wint", tekst: "Voor Sam geldt vandaag de uitzondering uit de tekst, niet de gewone prijs uit de lijst. Dát is het antwoord." },
          ],
          woorden: [
            { woord: "uitzondering", uitleg: "Een speciale regel die anders is dan de gewone regel. Bijvoorbeeld: normaal betaal je, maar op je verjaardag niet." },
          ],
          theorie: "**Valkuil 2: de tekst kan de lijst verslaan**\n\nEen prijslijst geeft de gewóne situatie. In de tekst staan de bijzondere gevallen: kortingsdagen, verjaardags-acties, 'behalve op feestdagen'.\n\nWerkwijze:\n1. Zoek de gewone prijs in de lijst.\n2. Lees de tekst: geldt er voor déze persoon of déze dag iets bijzonders?\n3. Zo ja: de uitzondering uit de tekst gaat vóór.\n\nDe toets zet de gewone lijst-prijs bijna altijd tussen de opties — dat is het lokkertje voor wie de tekst overslaat.",
          voorbeelden: [
            { type: "uitzondering", tekst: "Lijst: 'Kaartje: € 5,00.' Tekst: 'Op de eerste zondag van de maand is de toegang voor iedereen vrij.' Vraag over die zondag? Dan telt de tekst-regel." },
          ],
          basiskennis: [
            { onderwerp: "Lokkertje herkennen", uitleg: "Zie je de kale lijst-prijs tussen de antwoorden staan bij een vraag over een bijzondere situatie? Wees extra alert: check de tekst." },
          ],
          niveaus: {
            basis: "De lijst geeft de gewone prijs, maar vandaag is er iets bijzonders met Sam. Zoek in de folder-tekst de zin over jarige bezoekers.",
            simpeler: "Sam is jarig. Lees de zin uit de folder die begint met 'Wie jarig is' — wat mag Sam vandaag?",
            nogSimpeler: "Zoek in de tekst wat er geldt voor iemand die jarig is en naar binnen wil.",
          },
        },
      },
      {
        q: "Vier vriendinnen doen samen één speurtocht bij 't Hoefje. Hoeveel betalen ze daarvoor samen?",
        options: ["€ 10,00", "€ 40,00", "€ 12,00", "€ 2,50"],
        answer: 0,
        evidence: "Speurtocht (per groepje van maximaal 5 kinderen): € 10,00 — De speurtocht betaal je één keer per groepje, niet per kind.",
        wrongHints: [
          null,
          "Je hebt per kind gerekend. Lees nog eens wat er tussen de haakjes staat: waarvoor geldt dat bedrag precies?",
          "Waar komt dit bedrag vandaan? Kijk precies op de speurtocht-regel wat erbij staat.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de rij én de eenheid", tekst: "Op de speurtocht-regel staat een bedrag, met tussen de haakjes: 'per groepje van maximaal 5 kinderen'. Dat is de eenheid — heel belangrijk!" },
            { titel: "Check de tekst", tekst: "De folder zegt het nog eens: 'De speurtocht betaal je één keer per groepje, niet per kind.' Lijst en tekst wijzen dezelfde kant op." },
            { titel: "Pas de eenheid toe", tekst: "Vier vriendinnen vormen samen één groepje (vier is minder dan vijf, dus dat mag). Ze betalen dus één keer het groepjes-bedrag — niet vier keer." },
          ],
          woorden: [
            { woord: "eenheid", uitleg: "Waarvoor een prijs geldt: per persoon, per groepje, per uur, per keer. Staat vaak tussen haakjes." },
            { woord: "maximaal", uitleg: "Hoogstens, niet meer dan. 'Maximaal 5 kinderen' = 5 of minder." },
          ],
          theorie: "**Valkuil 3: de eenheid**\n\nEen prijs zegt niets zonder eenheid. € 10,00 pér kind is iets heel anders dan € 10,00 pér groepje.\n\nCheck-vragen die je jezelf stelt vóór het rekenen:\n1. Waarvoor geldt deze prijs — per persoon, per groepje, per keer, per uur?\n2. Hoeveel van die eenheden heb ik nodig? (Vier kinderen = vier personen, maar maar één groepje.)\n3. Pas dan pas vermenigvuldigen — of juist niet.\n\nDe klassieke fout is aantal × prijs zonder naar de eenheid te kijken.",
          voorbeelden: [
            { type: "eenheid", tekst: "'Huur kano: € 8,00 per uur.' Twee kinderen varen samen één uur in één kano: dat kost € 8,00 — niet € 16,00, want de prijs is per kano per uur, niet per kind." },
          ],
          basiskennis: [
            { onderwerp: "Eerst eenheid, dan rekenen", uitleg: "Lees de eenheid tussen de haakjes vóór je gaat vermenigvuldigen. Soms hoef je helemaal niet te rekenen." },
          ],
          niveaus: {
            basis: "Kijk tussen de haakjes op de speurtocht-regel: geldt het bedrag per kind of per groepje?",
            simpeler: "De vier vriendinnen zijn samen één groepje. Hoe vaak betaal je dan het speurtocht-bedrag?",
            nogSimpeler: "De tekst zegt: één keer betalen per groepje. Dit is één groepje — wat betekent dat voor het totaal?",
          },
        },
      },
      {
        q: "Je hebt de prijs al in de lijst gevonden. Waarom moet je tóch ook de tekst nog lezen?",
        options: [
          "Omdat in de tekst regels en uitzonderingen kunnen staan die de prijs veranderen",
          "Omdat de lijst altijd fouten bevat",
          "Omdat de tekst dezelfde getallen nog een keer noemt",
          "Dat hoeft niet: de lijst is altijd genoeg",
        ],
        answer: 0,
        evidence: "Wie jarig is, mag die dag gratis naar binnen.",
        wrongHints: [
          null,
          "De lijst klopt heus wel — maar vertelt de lijst je álles? Denk aan Sam, die vandaag jarig was.",
          null,
          "Denk terug aan de entree-vraag over Sam: had je die goed gehad met alléén de lijst?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat de lijst kan", tekst: "De lijst geeft je de gewone prijzen en gegevens, snel en overzichtelijk. Voor de meeste vragen is dat het startpunt." },
            { titel: "Wat de lijst níét kan", tekst: "Bijzondere gevallen passen niet in een lijst: verjaardags-acties, regen-regels, 'alleen als het hele gezin tegelijk naar binnen gaat'. Die staan in de tekst." },
            { titel: "Dus: altijd allebei", tekst: "Vind je een antwoord in de lijst? Werp dan nog één blik op de tekst: geldt er voor deze situatie een regel of uitzondering? Zo voorkom je de klassieke toets-valstrik." },
          ],
          woorden: [
            { woord: "voorwaarde", uitleg: "Iets dat moet gelden vóór een regel werkt. Bijvoorbeeld: de gezinskaart geldt alleen als het hele gezin tegelijk naar binnen gaat." },
          ],
          theorie: "**Tekst en tabel zijn een team**\n\nOp de Doorstroomtoets staan tekst en tabel nooit voor niets sámen bij één opgave. De toetsenmaker wil precies dit testen: gebruik jij beide bronnen?\n\nVuistregel per vraag:\n- Antwoord gevonden in de lijst → check de tekst op uitzonderingen.\n- Antwoord gevonden in de tekst → check de lijst voor het precieze getal.\n\nEen antwoord dat maar op één van de twee gebaseerd is, is bij combineer-opgaven vaak nét fout.",
          voorbeelden: [
            { type: "team", tekst: "Vraag: 'Wat betaalt oma (67) bij het museum?' Lijst: 'Volwassene: € 12,00.' Tekst: '65-plussers krijgen € 3,00 korting.' Alleen wie beide leest, rekent het goede bedrag uit." },
          ],
          basiskennis: [
            { onderwerp: "Twee bronnen, één antwoord", uitleg: "Bij een opgave met tekst én tabel komt het antwoord vaak pas als je beide gebruikt hebt." },
          ],
          niveaus: {
            basis: "Denk aan de vraag over de jarige Sam: stond zijn echte prijs in de lijst of ergens anders?",
            simpeler: "De lijst geeft de gewone situatie. Waar staan de bijzondere gevallen, zoals een verjaardag of een regen-regel?",
            nogSimpeler: "Wat miste je bij Sam als je alléén de lijst las?",
          },
        },
      },
    ],
  },

  // ── Stap 4 ──────────────────────────────────────────────────────
  {
    title: "Doorstroomtoets-oefening — het buurtfeest",
    explanation: tekstBuurtfeest + `

Dit is de eindoefening, precies in toets-stijl: een tekst met een programma-lijst, en vragen door elkaar. Soms staat het antwoord in de lijst, soms in de tekst — en bij de slimste vragen moet je allebei gebruiken.

Denk aan je stappen:
1. Zoek de goede regel in het programma (kruispunt-lezen).
2. Lees ook wat er tussen de haakjes staat (de plek!).
3. Check altijd of de tekst nog een regel of uitzondering noemt.

Neem rustig de tijd om terug te zoeken in de tekst hierboven — dat opzoeken hoort erbij. Succes!`,
    checks: [
      {
        q: "Hoe laat begint de talentenjacht?",
        options: ["Om 13.30 uur", "Om 12.00 uur", "Om 10.30 uur", "Om 15.00 uur"],
        answer: 0,
        evidence: "13.30 uur: talentenjacht (op het podium)",
        wrongHints: [
          null,
          "Om die tijd begint er iets anders in de feesttent — zoek de regel met het woord 'talentenjacht'.",
          null,
          "Kijk nog eens goed: welke activiteit begint er om die tijd? Zoek in het programma de goede regel.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de rij", tekst: "De vraag gaat over de talentenjacht. Loop het programma langs en zoek de regel waar 'talentenjacht' in staat." },
            { titel: "Lees het kruispunt", tekst: "Op die regel staat vooraan de tijd. Dat is de begintijd van de talentenjacht." },
            { titel: "Controleer", tekst: "Klopt het met de rest? Ja: de talentenjacht komt ná het pannenkoeken eten en vóór de ballonnenwedstrijd. Het programma loopt netjes op tijd-volgorde." },
          ],
          woorden: [
            { woord: "programma", uitleg: "Een lijst met activiteiten op tijd-volgorde: wat gebeurt er wanneer (en waar)." },
          ],
          theorie: "**Een programma lezen**\n\nEen programma-lijst is een tabel met (meestal) drie soorten gegevens per regel:\n\n1. de tijd (vooraan),\n2. de activiteit (in het midden),\n3. de plek (vaak tussen haakjes).\n\nBij 'hoe laat...?'-vragen zoek je eerst de activiteit en lees je dan de tijd vooraan de regel. Bij 'waar...?'-vragen lees je juist het stukje tussen de haakjes. Zelfde regel, ander stukje — dat is kruispunt-lezen.",
          voorbeelden: [
            { type: "hoe-laat", tekst: "'Hoe laat is de ballonnenwedstrijd?' Zoek de regel met 'ballonnenwedstrijd' en lees de tijd vooraan: 15.00 uur." },
          ],
          basiskennis: [
            { onderwerp: "Tijd-volgorde", uitleg: "Een programma staat op volgorde van de klok. Dat helpt je controleren of je antwoord logisch tussen de andere tijden past." },
          ],
          niveaus: {
            basis: "Zoek in het programma de regel met het woord 'talentenjacht'. De tijd staat vooraan die regel.",
            simpeler: "Elke regel begint met een tijd. Vind eerst de regel over de talentenjacht en lees dan het begin van die regel.",
            nogSimpeler: "Zoek het woord 'talentenjacht' in de lijst en kijk welke tijd er vlak vóór staat.",
          },
        },
      },
      {
        q: "Het regent de hele dag. Waar is de talentenjacht dan?",
        options: ["In de feesttent", "Op het podium", "Op het plein", "Op het grasveld"],
        answer: 0,
        evidence: "Bij regen verhuist de talentenjacht van het podium naar de feesttent.",
        wrongHints: [
          null,
          "Dat staat inderdaad zo in het programma — maar de tekst noemt een uitzondering voor regen. Wat gebeurt er dan?",
          "Op het plein zijn de opening en de ballonnenwedstrijd. Zoek de zin in de tekst die met 'Bij regen' begint.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Begin in het programma", tekst: "Het programma zegt: talentenjacht op het podium. Maar de vraag noemt iets bijzonders: het regent!" },
            { titel: "Check de tekst op uitzonderingen", tekst: "In de tekst staat een regen-regel: 'Bij regen verhuist de talentenjacht...' Lees die zin helemaal af — daar staat de nieuwe plek." },
            { titel: "De tekst wint", tekst: "De lijst geeft de gewone situatie, de tekst de uitzondering. Vandaag regent het, dus geldt de plek uit de regen-zin." },
          ],
          woorden: [
            { woord: "verhuizen", uitleg: "Naar een andere plek gaan. Hier: de activiteit gaat op een andere plek door." },
          ],
          theorie: "**De uitzondering-valstrik in het echt**\n\nDit is precies de valstrik uit stap C, maar nu in een toets-opgave. De lijst-plek ('podium') staat als optie tussen de antwoorden — het lokkertje voor wie de tekst niet las.\n\nSignaalwoorden in de vraag die naar een uitzondering wijzen: 'als het regent', 'op zijn verjaardag', 'in de vakantie', 'met z'n vieren'. Zie je zo'n bijzondere situatie in de vraag? Dan wil de toetsenmaker dat je de tekst erbij pakt.",
          voorbeelden: [
            { type: "signaalwoord", tekst: "Vraag: 'Wat betaalt Jos op woensdagmiddag?' Het woord 'woensdagmiddag' is het signaal: zoek in de tekst of daar een speciale regel voor geldt." },
          ],
          basiskennis: [
            { onderwerp: "Bijzondere situatie in de vraag = tekst checken", uitleg: "Noemt de vraag regen, een verjaardag of een speciale dag? Grote kans dat de tekst daar een regel over heeft." },
          ],
          niveaus: {
            basis: "Het programma geeft de gewone plek, maar vandaag regent het. Zoek in de tekst de zin die met 'Bij regen' begint.",
            simpeler: "Er staat een regen-regel in de tekst: de talentenjacht verhuist dan ergens naartoe. Lees die zin — waarheen?",
            nogSimpeler: "Zoek de woorden 'Bij regen' in de tekst en lees de zin helemaal uit.",
          },
        },
      },
      {
        q: "Fee komt om 13.00 uur aan bij het feest. Kan ze nog meedoen aan de talentenjacht?",
        options: [
          "Nee, want opgeven kon alleen vóór 12.00 uur",
          "Ja, want de talentenjacht begint pas om 13.30 uur",
          "Ja, opgeven kan de hele dag bij de kraam",
          "Nee, want de talentenjacht is al voorbij",
        ],
        answer: 0,
        evidence: "Wil je meedoen aan de talentenjacht? Geef je dan vóór 12.00 uur op bij de kraam van meneer Baris",
        wrongHints: [
          null,
          "De begintijd klopt — maar om mee te dóén moest je vooraf nog iets regelen. Wat, en tot hoe laat kon dat?",
          null,
          "Kijk in het programma: hoe laat begint de talentenjacht, en hoe laat komt Fee aan?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Twee stukjes informatie nodig", tekst: "Uit het programma: de talentenjacht begint om 13.30 uur — dus die is om 13.00 uur nog niet begonnen. Maar is dat genoeg om mee te mogen doen?" },
            { titel: "Check de regel in de tekst", tekst: "De tekst zegt: opgeven kan tot 12.00 uur bij de kraam van meneer Baris. Meedoen zonder opgeven kan dus niet." },
            { titel: "Combineer", tekst: "Fee komt om 13.00 uur aan. Vergelijk dat met de opgeef-tijd uit de tekst: is 13.00 uur vóór of ná die grens? Dat bepaalt het antwoord." },
          ],
          woorden: [
            { woord: "je opgeven", uitleg: "Van tevoren laten weten dat je meedoet — je naam op de lijst zetten." },
            { woord: "vóór 12.00 uur", uitleg: "Eerder dan 12.00 uur. Om 12.01 uur ben je al te laat." },
          ],
          theorie: "**Combineer-vraag met tijden**\n\nDeze vraag test of je twee tijden uit elkaar houdt:\n\n1. De **begintijd** van de activiteit (staat in het programma).\n2. De **uiterste opgeef-tijd** (staat in de tekst).\n\nDat zijn verschillende dingen! Een activiteit kan nog niet begonnen zijn, terwijl de inschrijving al gesloten is — net als bij een echte wedstrijd.\n\nLeesstrategie: onderstreep in de vraag hoe laat het nú is, en vergelijk die tijd met álle tijden die erover gaan (begin, einde, opgeef-grens).",
          voorbeelden: [
            { type: "twee-tijden", tekst: "De voorstelling begint om 20.00 uur, maar kaartjes koop je tot 17.00 uur. Wie om 18.00 uur nog een kaartje wil, is te laat — ook al is de voorstelling nog niet begonnen." },
          ],
          basiskennis: [
            { onderwerp: "Begintijd is niet alles", uitleg: "Voor meedoen gelden soms extra regels met een eigen tijd (opgeven, kaartje kopen). Check de tekst daarop." },
          ],
          niveaus: {
            basis: "Er zijn twee tijden belangrijk: wanneer de talentenjacht begint én tot wanneer je je kon opgeven. Fee komt om 13.00 uur — vergelijk met allebei.",
            simpeler: "In de tekst staat tot hoe laat je je kon opgeven bij de kraam. Is 13.00 uur daarvóór of daarna?",
            nogSimpeler: "Zoek in de tekst de zin over opgeven voor de talentenjacht en vergelijk die tijd met 13.00 uur.",
          },
        },
      },
      {
        q: "Roan wil op het feest drie pannenkoeken eten. Hoeveel geld moet hij daarvoor meenemen?",
        options: ["€ 2,00", "€ 3,00", "€ 1,00", "Niets, pannenkoeken zijn gratis"],
        answer: 0,
        evidence: "Ieder kind krijgt bij de ingang één gratis muntje. Elk extra muntje kost € 1,00 bij de kraam. Eén muntje is goed voor één pannenkoek.",
        wrongHints: [
          null,
          "Je rekende álle muntjes mee. Maar hoeveel muntjes krijgt Roan al cadeau bij de ingang?",
          "Hoeveel pannenkoeken wil Roan in totaal, en hoeveel muntjes heeft hij daarvoor nodig?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat heeft Roan nodig?", tekst: "Eén muntje is goed voor één pannenkoek. Voor drie pannenkoeken heeft Roan dus drie muntjes nodig." },
            { titel: "Wat krijgt hij al?", tekst: "De tekst zegt: ieder kind krijgt bij de ingang één gratis muntje. Eén van de drie muntjes heeft hij dus al — zonder te betalen." },
            { titel: "Reken het verschil", tekst: "Drie muntjes nodig, één gratis: hoeveel muntjes moet hij nog kopen? Vermenigvuldig dat aantal met de prijs per extra muntje." },
          ],
          woorden: [
            { woord: "muntje", uitleg: "Een klein bonnetje of penning waarmee je op een feest iets kunt kopen — hier: één pannenkoek per muntje." },
            { woord: "extra", uitleg: "Wat er bovenop het gewone komt. Het eerste muntje is gratis; alles daarboven is extra." },
          ],
          theorie: "**Rekenen met 'de eerste is gratis'**\n\nEen klassieke combineer-som in drie stappen:\n\n1. Hoeveel heb je er in totaal nodig? (lees: één muntje = één pannenkoek)\n2. Hoeveel krijg je er gratis? (lees de tekst!)\n3. Betaal alleen het verschil: (nodig − gratis) × prijs per stuk.\n\nDe valstrik-optie is altijd het totaal zónder de gratis-regel. Wie de zin over het gratis muntje overslaat, rekent te veel.",
          voorbeelden: [
            { type: "verschil", tekst: "Op een spelletjesdag krijgt elk kind twee gratis lootjes; extra lootjes kosten € 0,50. Wie vijf lootjes wil, koopt er drie bij: 3 × € 0,50 = € 1,50." },
          ],
          basiskennis: [
            { onderwerp: "Nodig min gratis", uitleg: "Betaal nooit voor wat je al gratis krijgt: trek eerst het gratis aantal af, reken dan pas de prijs uit." },
          ],
          niveaus: {
            basis: "Roan heeft drie muntjes nodig. Lees in de tekst hoeveel muntjes een kind gratis krijgt, en reken uit hoeveel hij er nog moet kopen.",
            simpeler: "Drie muntjes nodig, één krijgt hij bij de ingang cadeau. Hoeveel muntjes koopt hij bij, en wat kost één extra muntje?",
            nogSimpeler: "Tel: hoeveel muntjes moet Roan nog kopen als hij er al één gratis heeft? Reken dan € 1,00 per gekocht muntje.",
          },
        },
      },
      {
        q: "Waar moet je om 10.30 uur zijn voor de kinderspelen?",
        options: ["Op het grasveld", "Op het plein", "In de feesttent", "Op het podium"],
        answer: 0,
        evidence: "10.30 uur: kinderspelen (op het grasveld)",
        wrongHints: [
          null,
          "Daar begon om 10.00 uur de opening — maar de kinderspelen zijn ergens anders. Kijk tussen de haakjes achter 'kinderspelen'.",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de rij", tekst: "De vraag gaat over de kinderspelen (of over 10.30 uur — dat komt op hetzelfde neer). Zoek die regel in het programma." },
            { titel: "Lees het goede stukje", tekst: "Je zoekt nu geen tijd maar een plék. De plek staat op elke programma-regel tussen de haakjes." },
            { titel: "Controleer", tekst: "Lees de hele regel nog eens: tijd, activiteit, plek. Past alles bij de vraag? Dan heb je je antwoord." },
          ],
          woorden: [
            { woord: "locatie", uitleg: "De plek waar iets gebeurt. In een programma staat de locatie vaak tussen haakjes." },
          ],
          theorie: "**Zelfde regel, ander gegeven**\n\nEén programma-regel beantwoordt drie soorten vragen:\n\n- 'Hoe laat...?' → lees de tijd vooraan.\n- 'Wat gebeurt er om ... uur?' → lees de activiteit in het midden.\n- 'Waar...?' → lees de plek tussen de haakjes.\n\nDe kunst is dus niet alleen de goede regel vinden, maar ook het goede stúkje van die regel lezen. Wie te snel leest, geeft een tijd terwijl er om een plek werd gevraagd.",
          voorbeelden: [
            { type: "waar-vraag", tekst: "'Waar is het pannenkoeken eten?' Zoek de pannenkoeken-regel en lees tussen de haakjes: in de feesttent." },
          ],
          basiskennis: [
            { onderwerp: "Lees wat de vraag vraagt", uitleg: "Check altijd: vraagt de vraag om een tijd, een activiteit of een plek? Lees dan precies dát stukje van de regel af." },
          ],
          niveaus: {
            basis: "Zoek de regel van de kinderspelen in het programma. De plek staat tussen de haakjes.",
            simpeler: "Vind eerst de regel met '10.30 uur' of 'kinderspelen'. Lees dan wat er tussen de haakjes staat — dat is de plek.",
            nogSimpeler: "Zoek het woord 'kinderspelen' in de lijst en lees de woorden tussen de haakjes erachter.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const schemaTekstCombiPo = {
  id: "schema-tekst-combi-po",
  title: "Tekst + tabel combineren — zoek het antwoord in allebei",
  emoji: "📊",
  level: "groep6-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — informatie uit tekst en schema combineren",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
  ],
  intro:
    "Op de Doorstroomtoets staat vaak een tekst mét een prijslijst, rooster of dienstregeling — en het antwoord vind je alleen door béíde te gebruiken. Leer kruispunt-lezen (zoek de rij, zoek het gegeven), wanneer je in de tekst kijkt en wanneer in de tabel, en hoe je informatie uit allebei combineert. Met eigen oefenteksten en een toets-stijl eindopdracht.",
  triggerKeywords: [
    "tabel lezen", "schema lezen", "tabel en tekst", "prijslijst", "dienstregeling",
    "rooster lezen", "informatie combineren", "kruispunt lezen", "rijen en kolommen",
    "studievaardigheden", "informatiebronnen", "begrijpend lezen", "doorstroomtoets lezen",
    "cito begrijpend lezen", "opzoeken in tabel",
  ],
  chapters,
  steps,
};

export default schemaTekstCombiPo;
