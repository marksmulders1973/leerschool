// Leerpad: Een brief of e-mail lezen — zakelijke tekstsoort op de Doorstroomtoets
// Kinderen leren de vaste onderdelen (afzender, ontvanger, datum, onderwerp,
// aanhef, kern, afsluiting, ondertekening), het doel van de brief bepalen
// (informeren/uitnodigen/vragen/klagen/bedanken) en dé toetsvraag:
// "wat moet de ontvanger DOEN na het lezen?" — inclusief de klassieke
// valkuilen: twee datums, afzender/ontvanger omdraaien, doel vs detail.
//
// Alle teksten zijn 100% eigen werk. 4 stappen, 17 checks totaal.

const stepEmojis = ["📬", "🏃", "🧩", "🏆"];

const chapters = [
  { letter: "A", title: "Onderdelen van een brief of e-mail", emoji: "📬", from: 0, to: 0 },
  { letter: "B", title: "Oefenen met een echte brief", emoji: "🏃", from: 1, to: 1 },
  { letter: "C", title: "Lastige gevallen", emoji: "🧩", from: 2, to: 2 },
  { letter: "D", title: "Doorstroomtoets-oefening", emoji: "🏆", from: 3, to: 3 },
];

// ── Tekst voor stap 2: eigen schoolbrief over een sportdag (~150 woorden) ──
const tekstSportdag = `**Basisschool De Vlinderboom**
Lindelaan 12, Zonnedorp

Zonnedorp, 4 mei 2026

Beste ouders en verzorgers,

Op vrijdag 22 mei houden wij onze jaarlijkse sportdag op sportpark De Weide. Alle kinderen van groep 6, 7 en 8 doen mee. We beginnen om 9 uur en om 14 uur is de prijsuitreiking.

Wilt u uw kind die dag sportkleding en een gevulde waterfles meegeven? Bij warm weer is een pet ook slim.

Onderaan deze brief zit een strookje. Daarop kunt u aangeven of u kunt helpen bij een spelletje. Wilt u het strookje invullen en uiterlijk woensdag 13 mei inleveren bij de juf of meester van uw kind? Zonder genoeg hulpouders kan de sportdag helaas niet doorgaan.

Wij hebben er nu al zin in!

Met vriendelijke groet,

Meester Jasper de Vries
Basisschool De Vlinderboom`;

// ── Tekst voor stap 4: eigen e-mail van een zwemclub (~200 woorden) ──────
const tekstZwemvierdaagse = `**Van:** info@zwemclub-dewaterlelie.nl
**Aan:** alle leden en hun ouders
**Datum:** dinsdag 2 juni 2026
**Onderwerp:** Doe mee met de Zwemvierdaagse!

Beste zwemmers en ouders,

Van maandag 22 juni tot en met donderdag 25 juni organiseert Zwemclub De Waterlelie weer de Zwemvierdaagse in zwembad Het Golfje. Vier avonden achter elkaar zwem je baantjes: elke avond een halfuur, tussen 18.00 en 19.30 uur. Wie alle vier de avonden meedoet, krijgt op donderdag een echte medaille.

Meedoen kost € 3,50. Dat bedrag betaal je op de eerste avond bij de kassa van het zwembad, dus je hoeft nu nog niets over te maken.

Wil je meedoen? Meld je dan aan vóór vrijdag 12 juni. Aanmelden kan op twee manieren: stuur een antwoord op deze e-mail óf lever het aanmeldformulier in bij de balie van het zwembad. Wie zich te laat aanmeldt, kan helaas niet meer meedoen — het zwembad wil op tijd weten hoeveel zwemmers er komen.

Vergeet je zwemdiploma niet: dat is verplicht om mee te mogen doen.

Wij hopen op heel veel deelnemers!

Met sportieve groet,

Karin van Dijk
Zwemclub De Waterlelie`;

const steps = [
  // ── Stap 1 ──────────────────────────────────────────────────────
  {
    title: "Onderdelen van een brief of e-mail",
    explanation: `Krijg je thuis post van school? Of een e-mail van de sportclub? Zulke brieven en e-mails heten **zakelijke teksten**: ze zijn niet voor de lol geschreven, maar omdat de schrijver iets van jou wil. Op de Doorstroomtoets krijg je er vaak vragen over. Gelukkig heeft elke brief of e-mail dezelfde vaste onderdelen — als je die kent, vind je elk antwoord razendsnel:

1. **Afzender** — wie de brief schreef. De ondertekening onderaan vertelt wie de brief heeft geschreven. Bij een e-mail zie je de afzender óók bovenaan, in de regel 'Van:'.
2. **Ontvanger** — voor wie de brief is. Bij een e-mail: de regel 'Aan:'.
3. **Datum** — wanneer de brief geschreven is. Staat meestal bovenaan.
4. **Onderwerp(regel)** — bij een e-mail: één korte regel die zegt waar het bericht over gaat.
5. **Aanhef** — de begroeting waarmee de brief begint: 'Beste ouders en verzorgers,' of 'Geachte heer De Boer,'.
6. **Kern** — het middenstuk: hier staat het echte verhaal.
7. **Afsluiting** — de groet aan het einde: 'Met vriendelijke groet,'.
8. **Ondertekening** — de naam van de schrijver, direct onder de groet.

Handig ezelsbruggetje: **de randen van de brief vertellen wie, wanneer en waarover — het midden vertelt wat er aan de hand is.** Oefen eerst met de onderdelen hieronder.`,
    checks: [
      {
        q: "Je krijgt een brief en wilt weten wie hem geschreven heeft. Waar kijk je het eerst?",
        options: [
          "Onderaan de brief, bij de naam onder de groet",
          "Precies in het midden van de brief",
          "Alleen naar de datum bovenaan",
          "Naar de eerste letter van elke zin",
        ],
        answer: 0,
        evidence: "De ondertekening onderaan vertelt wie de brief heeft geschreven.",
        wrongHints: [
          null,
          "In het midden staat het verhaal zelf. Denk eens aan hoe jij een brief afsluit — wat zet je daar neer?",
          "Een datum vertelt wannéér iets is. Kan een datum ook vertellen wíé er schreef?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat zoek je?", tekst: "Je zoekt de afzender: de persoon (of club, of school) die de brief heeft geschreven en verstuurd." },
            { titel: "Waar staat die?", tekst: "Bij een brief staat de naam van de schrijver helemaal onderaan, direct onder de groet ('Met vriendelijke groet,'). Dat heet de ondertekening." },
            { titel: "En bij een e-mail?", tekst: "Bij een e-mail heb je het extra makkelijk: bovenaan staat een regel 'Van:' met het adres van de afzender. Onderaan staat de naam meestal óók nog een keer." },
          ],
          woorden: [
            { woord: "afzender", uitleg: "Degene die de brief of e-mail schrijft en verstuurt." },
            { woord: "ondertekening", uitleg: "De naam van de schrijver, helemaal onderaan de brief, onder de groet." },
          ],
          theorie: "**Afzender zoeken — twee vaste plekken**\n\n| Waar? | Brief | E-mail |\n|---|---|---|\n| Bovenaan | soms adres van de school/club | regel 'Van:' |\n| Onderaan | naam onder de groet | naam onder de groet |\n\nDe toets vraagt vaak: 'Wie heeft deze brief geschreven?' Kijk dan éérst onderaan. Let op: de afzender is NIET degene aan wie de brief gericht is — dat is de ontvanger, en die vind je in de aanhef of bij 'Aan:'.",
          voorbeelden: [
            { type: "brief", tekst: "Een brief eindigt met: 'Met vriendelijke groet, Juf Annemiek.' → Juf Annemiek is de afzender." },
            { type: "e-mail", tekst: "Bovenaan een e-mail staat 'Van: info@voetbalclub-desprint.nl' → de voetbalclub is de afzender." },
          ],
          basiskennis: [
            { onderwerp: "Randen eerst", uitleg: "Wie, voor wie, wanneer en waarover vind je aan de randen van een brief — niet in het middenstuk." },
          ],
          niveaus: {
            basis: "Waar zet jij je eigen naam als je zelf een brief schrijft: aan het begin, in het midden of aan het eind?",
            simpeler: "Een brief eindigt altijd met een groet. Wat staat er meestal direct ónder die groet?",
            nogSimpeler: "Zoek de plek waar de naam van de schrijver staat.",
          },
        },
      },
      {
        q: "*\"Beste ouders en verzorgers,\"* — hoe heet dit onderdeel van een brief?",
        options: ["De aanhef", "De ondertekening", "Het onderwerp", "De kern"],
        answer: 0,
        evidence: "Beste ouders en verzorgers,",
        wrongHints: [
          null,
          "Dat onderdeel staat aan het éinde van een brief en bevat een naam. Waar staat dit regeltje?",
          null,
          "De kern is het lange middenstuk met het echte verhaal. Is dit korte regeltje een heel verhaal?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar de vorm", tekst: "Het regeltje begint met 'Beste ...' en eindigt met een komma. Daarna begint de eigenlijke brief pas. Het is dus een begroeting." },
            { titel: "Zo heet dat onderdeel", tekst: "De begroeting waarmee een brief begint, heet de aanhef. Vergelijk het met 'hallo' zeggen voordat je een gesprek begint." },
            { titel: "Wat verklapt de aanhef?", tekst: "De aanhef vertelt ook meteen wie de ontvanger is! 'Beste ouders en verzorgers' betekent: deze brief is voor de ouders bedoeld, niet voor de kinderen." },
          ],
          woorden: [
            { woord: "aanhef", uitleg: "De begroeting aan het begin van een brief: 'Beste...', 'Geachte...' of 'Lieve...'." },
            { woord: "ontvanger", uitleg: "Degene voor wie de brief bedoeld is. De aanhef verklapt vaak wie dat is." },
          ],
          theorie: "**De aanhef — begroeting mét informatie**\n\nElke brief begint met een aanhef. Drie smaken:\n\n- **'Geachte heer/mevrouw ...'** → deftig, voor iemand die je niet goed kent\n- **'Beste ...'** → gewoon-netjes, voor bekenden of groepen\n- **'Lieve ...'** → persoonlijk, voor familie en vrienden\n\nDe toets vraagt soms: 'Voor wie is deze brief bedoeld?' Het antwoord staat bijna altijd al in de aanhef!",
          voorbeelden: [
            { type: "aanhef", tekst: "'Geachte mevrouw Bakker,' → deftige begroeting aan één persoon die de schrijver niet goed kent." },
            { type: "aanhef", tekst: "'Lieve opa,' → persoonlijke begroeting aan familie." },
          ],
          basiskennis: [
            { onderwerp: "Begin van de brief", uitleg: "Na de datum komt de begroeting, en pas daarna begint het echte verhaal." },
          ],
          niveaus: {
            basis: "Met dit regeltje begroet de schrijver de lezer, zoals jij 'hallo' zegt. Hoe heet zo'n begroeting in een brief?",
            simpeler: "Dit korte regeltje staat aan het begín van de brief, vóór het verhaal. Welk onderdeel staat daar altijd?",
            nogSimpeler: "Zoek het onderdeel waarmee een brief de lezer begroet.",
          },
        },
      },
      {
        q: "*\"Onderwerp: Schoolreisje groep 7\"* — wat vertelt deze regel in een e-mail?",
        options: [
          "In het kort waar de e-mail over gaat",
          "Wie de e-mail heeft geschreven",
          "Op welke dag de e-mail is verstuurd",
          "Hoe lang de e-mail is",
        ],
        answer: 0,
        evidence: "Onderwerp: Schoolreisje groep 7",
        wrongHints: [
          null,
          "De schrijver vind je in de regel 'Van:' of onderaan. Staat hiér een naam, of iets anders?",
          "Een verstuur-dag herken je aan een datum. Zie je in deze regel een datum staan?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is dit voor regel?", tekst: "Bovenaan elke e-mail staan vaste regels: Van, Aan, Datum en Onderwerp. Deze regel begint met 'Onderwerp:' — dat is de onderwerpregel." },
            { titel: "Wat doet die regel?", tekst: "De onderwerpregel is een super-korte samenvatting: in een paar woorden zie je waar het hele bericht over gaat. Hier: over het schoolreisje van groep 7." },
            { titel: "Waarom handig op de toets?", tekst: "Vraagt de toets 'waar gaat deze e-mail over?' — kijk dan eerst naar de onderwerpregel. Vaak staat het antwoord daar al!" },
          ],
          woorden: [
            { woord: "onderwerpregel", uitleg: "De regel bovenaan een e-mail die in een paar woorden zegt waar het bericht over gaat." },
          ],
          theorie: "**De vier vaste regels bovenaan een e-mail**\n\n| Regel | Vertelt |\n|---|---|\n| Van: | wie de e-mail stuurt (afzender) |\n| Aan: | voor wie de e-mail is (ontvanger) |\n| Datum: | wanneer de e-mail is verstuurd |\n| Onderwerp: | waar het bericht over gaat |\n\nEen brief op papier heeft geen onderwerpregel — dat is typisch iets van e-mail. Slim gebruiken: veel toetsvragen kun je beantwoorden zonder de hele e-mail te lezen, gewoon met deze vier regels.",
          voorbeelden: [
            { type: "onderwerpregel", tekst: "'Onderwerp: Uitnodiging opa's verjaardag' → je weet meteen: dit bericht gaat over een feestje." },
          ],
          basiskennis: [
            { onderwerp: "E-mail vs brief", uitleg: "E-mail heeft Van/Aan/Datum/Onderwerp bovenaan; een papieren brief heeft alleen een datum en soms een adres." },
          ],
          niveaus: {
            basis: "Lees de regel nog eens: gaat het over een persoon, een dag — of over het thema van het bericht?",
            simpeler: "Deze regel is een piepkleine samenvatting van het hele bericht. Wat vertelt een samenvatting je?",
            nogSimpeler: "Kijk wat er achter het dubbele puntje staat: is dat een naam, een datum, of iets waar je over kunt vertellen?",
          },
        },
      },
      {
        q: "*\"Met vriendelijke groet,\"* — hoe heet dit onderdeel?",
        options: ["De afsluiting", "De aanhef", "Het onderwerp", "De datum"],
        answer: 0,
        evidence: "Met vriendelijke groet,",
        wrongHints: [
          null,
          "Dat onderdeel staat aan het begín van de brief en begint vaak met 'Beste'. Waar in de brief vind je dit regeltje?",
          null,
          "Zie je hier een dag, een maand of een jaartal staan?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Waar staat dit regeltje?", tekst: "'Met vriendelijke groet,' staat aan het einde van de brief, als het verhaal klaar is. Daarmee neemt de schrijver afscheid." },
            { titel: "Zo heet dat onderdeel", tekst: "De groet aan het einde heet de afsluiting. Direct eronder komt de naam van de schrijver: de ondertekening." },
            { titel: "Begin en einde spiegelen elkaar", tekst: "Een brief begint met een begroeting (aanhef) en eindigt met een afscheidsgroet (afsluiting). Net als een telefoongesprek: 'hoi' aan het begin, 'doei' aan het eind." },
          ],
          woorden: [
            { woord: "afsluiting", uitleg: "De groet waarmee een brief eindigt, zoals 'Met vriendelijke groet,' of 'Groetjes,'." },
            { woord: "ondertekening", uitleg: "De naam van de schrijver, direct onder de afsluiting." },
          ],
          theorie: "**Afsluiting — de afscheidsgroet**\n\nOok afsluitingen heb je in deftig en gewoon:\n\n- **'Hoogachtend,'** → heel deftig\n- **'Met vriendelijke groet,'** → netjes, kan bijna altijd\n- **'Groetjes,' / 'Liefs,'** → voor vrienden en familie\n\nAfsluiting en ondertekening horen bij elkaar: eerst de groet, dan de naam. Zo weet je aan het einde van elke brief wie hem schreef.",
          voorbeelden: [
            { type: "afsluiting", tekst: "'Groetjes, Fleur' → afsluiting ('Groetjes,') + ondertekening ('Fleur') in een briefje aan een vriendin." },
          ],
          basiskennis: [
            { onderwerp: "Einde van de brief", uitleg: "Na de kern komt de afscheidsgroet, en daaronder de naam van de schrijver." },
          ],
          niveaus: {
            basis: "Met dit regeltje neemt de schrijver afscheid, zoals jij 'doei' zegt. Aan het begin of aan het einde van de brief — en hoe heet dat onderdeel?",
            simpeler: "Wat staat er in een brief direct bóven de naam van de schrijver?",
            nogSimpeler: "Zoek het onderdeel waarmee de brief afscheid neemt van de lezer.",
          },
        },
      },
    ],
  },

  // ── Stap 2 ──────────────────────────────────────────────────────
  {
    title: "Oefenen met een echte brief",
    explanation: tekstSportdag + `

Hierboven staat een echte schoolbrief. Zo'n brief krijg je op de Doorstroomtoets ook, met vragen erbij. Gebruik dit vaste stappenplan:

1. **Wie?** Zoek de afzender (onderaan, bij de ondertekening) en de ontvanger (in de aanhef). Draai ze niet om!
2. **Waarom?** Bepaal het doel: wil de schrijver **informeren**, **uitnodigen**, **iets vragen**, **klagen** of **bedanken**? Vaak is het een combinatie van twee.
3. **Wat moet ik doen?** Dit is dé toetsvraag! Zoek de zin met een opdracht of verzoek — vaak een zin met 'Wilt u...?'. En let extra goed op de datums: wannéér moet het gebeuren?

Beantwoord nu de vier vragen over de brief hierboven. Zoek het antwoord altijd óp in de brief — dat terugzoeken hoort erbij.`,
    checks: [
      {
        q: "Wie is de afzender van deze brief?",
        options: [
          "Meester Jasper de Vries van basisschool De Vlinderboom",
          "De ouders en verzorgers",
          "Sportpark De Weide",
          "De kinderen van groep 8",
        ],
        answer: 0,
        evidence: "Meester Jasper de Vries",
        wrongHints: [
          null,
          "Kijk naar de aanhef: aan wie is de brief gerícht? Is dat dezelfde als degene die hem schreef?",
          "Kan een sportpark een brief schrijven? Kijk eens onder de groet, helemaal onderaan.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk onderaan", tekst: "De afzender vind je bij de ondertekening: onder 'Met vriendelijke groet,' staat 'Meester Jasper de Vries — Basisschool De Vlinderboom'. Dat is de schrijver." },
            { titel: "Check de aanhef", tekst: "De aanhef zegt 'Beste ouders en verzorgers'. Dat zijn dus de ontvángers — niet de schrijver. Afzender en ontvanger zijn twee verschillende rollen." },
            { titel: "Dit is de valstrik", tekst: "De toets zet de ontvanger graag tussen de antwoorden. Wie de vraag te snel leest, draait afzender en ontvanger om. Onderaan kijken = altijd raak." },
          ],
          woorden: [
            { woord: "afzender", uitleg: "Degene die de brief schrijft en verstuurt — hier de meester namens de school." },
            { woord: "ontvanger", uitleg: "Degene voor wie de brief bedoeld is — hier de ouders en verzorgers." },
          ],
          theorie: "**Afzender en ontvanger — draai ze nooit om**\n\nEzelsbruggetje: de brief reist van **onderaan** naar **bovenaan**.\n\n- Onderaan (ondertekening) = wie hem schreef = afzender\n- Bovenaan (aanhef) = wie hem leest = ontvanger\n\nDe toets vraagt beide vormen: 'Wie schreef deze brief?' én 'Voor wie is deze brief bedoeld?' Lees de vraag dus heel precies: gaat het om de schrijver of om de lezer?",
          voorbeelden: [
            { type: "omdraai-valstrik", tekst: "Brief begint met 'Beste leden van de tennisclub' en eindigt met 'Trainer Bas'. → Afzender = trainer Bas, ontvangers = de leden. Wie dat omdraait, kiest het foute antwoord." },
          ],
          basiskennis: [
            { onderwerp: "Twee rollen", uitleg: "Elke brief heeft een schrijver (afzender) en een lezer (ontvanger). De aanhef noemt de lezer, de ondertekening de schrijver." },
          ],
          niveaus: {
            basis: "Kijk helemaal onderaan de brief, onder de groet. Welke naam staat daar?",
            simpeler: "De brief begint met 'Beste ouders' — dan is hij vóór de ouders. Maar wie heeft hem dan geschréven? Kijk bij de ondertekening.",
            nogSimpeler: "Zoek de naam die onder 'Met vriendelijke groet,' staat.",
          },
        },
      },
      {
        q: "Wat is het doel van deze brief?",
        options: [
          "De ouders informeren over de sportdag én om hulp vragen",
          "Klagen over het weer op de sportdag",
          "De ouders bedanken voor hun hulp van vorig jaar",
          "Uitleggen hoe je een spelletje speelt",
        ],
        answer: 0,
        evidence: "Daarop kunt u aangeven of u kunt helpen bij een spelletje.",
        wrongHints: [
          null,
          "Lees je ergens dat de schrijver boos of ontevreden is? Wat dóét de brief vooral: mopperen of vertellen?",
          null,
          "Staat er ergens uitgelegd hóé een spel werkt — of vooral wat er wanneer gaat gebeuren?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat vertelt de brief?", tekst: "De brief vertelt wanneer de sportdag is, waar, hoe laat en wat je kind mee moet nemen. Dat is informeren: de lezer op de hoogte brengen." },
            { titel: "Wat vraagt de brief?", tekst: "De brief vraagt óók iets: 'Wilt u het strookje invullen en inleveren?' De school zoekt hulpouders. Dat is een verzoek." },
            { titel: "Twee doelen tegelijk", tekst: "Veel zakelijke brieven hebben een dubbel doel: informeren én iets vragen. Het beste antwoord noemt allebei." },
          ],
          woorden: [
            { woord: "doel", uitleg: "Waaróm de schrijver de brief schreef: wat wil hij bereiken bij de lezer?" },
            { woord: "informeren", uitleg: "De lezer iets vertellen dat hij nog niet wist, zoals de datum van de sportdag." },
            { woord: "verzoek", uitleg: "Een nette vraag om iets te doen: 'Wilt u...?'" },
          ],
          theorie: "**De vijf doelen van een brief**\n\n| Doel | Herken je aan |\n|---|---|\n| informeren | feiten: datums, tijden, plaatsen |\n| uitnodigen | 'Kom...', 'Doe mee...', 'U bent welkom...' |\n| vragen | 'Wilt u...?', 'Kunt u...?' |\n| klagen | 'Ik ben niet tevreden...', 'Het is kapot...' |\n| bedanken | 'Dank u wel...', 'Wat fijn dat...' |\n\nVraag jezelf altijd: **waarom schreef de schrijver dit?** Een brief mag meer dan één doel hebben — kies dan het antwoord dat het meest compleet is.",
          voorbeelden: [
            { type: "dubbel-doel", tekst: "'De bieb is voortaan op maandag dicht. Wilt u uw boeken vóór zaterdag inleveren?' → informeren (nieuwe openingstijd) + vragen (boeken inleveren)." },
          ],
          basiskennis: [
            { onderwerp: "Doel = waarom", uitleg: "Het doel gaat over de héle brief, niet over één zinnetje. Vraag: wat wil de schrijver dat er gebeurt?" },
          ],
          niveaus: {
            basis: "De brief vertelt van alles óver de sportdag én er zit een strookje bij. Wat wil de school daarmee bereiken?",
            simpeler: "Kijk naar de zin met 'Wilt u...?' — wat hoopt de school dat de ouders doen? En wat vertelt de rest van de brief?",
            nogSimpeler: "Is de schrijver boos, dankbaar — of vertelt hij iets én hoopt hij op hulp?",
          },
        },
      },
      {
        q: "Wat moet de ontvanger van deze brief DOEN?",
        options: [
          "Het strookje invullen en uiterlijk woensdag 13 mei inleveren",
          "Op 22 mei een brief terugschrijven",
          "Geld overmaken voor de sportdag",
          "Zelf spelletjes bedenken voor de sportdag",
        ],
        answer: 0,
        evidence: "Wilt u het strookje invullen en uiterlijk woensdag 13 mei inleveren bij de juf of meester van uw kind?",
        wrongHints: [
          null,
          "Op 22 mei gebeurt er iets heel anders. Zoek de zin die met 'Wilt u...' begint — daar staat de opdracht.",
          "Wordt er ergens in de brief om geld gevraagd? Lees de brief er nog eens op na.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de opdracht-zin", tekst: "De vraag 'wat moet ik doen?' beantwoord je met de zin waarin iets gevráágd wordt. Hier: 'Wilt u het strookje invullen en uiterlijk woensdag 13 mei inleveren bij de juf of meester van uw kind?'" },
            { titel: "Wat + wanneer + waar", tekst: "Een complete opdracht heeft drie delen: WAT (strookje invullen en inleveren), WANNEER (uiterlijk woensdag 13 mei) en WAAR (bij de juf of meester). Het beste antwoord noemt het wat én het wanneer." },
            { titel: "Waarom is dit dé toetsvraag?", tekst: "Zakelijke brieven schrijf je omdat de lezer iets moet dóén. De Doorstroomtoets checkt of jij die actie eruit kunt halen — inclusief de juiste datum." },
          ],
          woorden: [
            { woord: "uiterlijk", uitleg: "Niet later dan. 'Uiterlijk 13 mei' = het mag eerder, maar 13 mei is de laatste dag." },
            { woord: "strookje", uitleg: "Een klein invul-stukje onderaan een brief dat je afknipt en terugbrengt." },
          ],
          theorie: "**De doe-vraag — zo pak je hem aan**\n\n1. Zoek zinnen met een verzoek: 'Wilt u...?', 'Kunt u...?', 'Meld je aan...', 'Lever in...'.\n2. Streep in gedachten aan: **wat** moet er gebeuren, **vóór wanneer**, en **waar of hoe**.\n3. Vergelijk met de antwoorden: het juiste antwoord klopt op álle drie de punten.\n\nPas op voor antwoorden die bijna kloppen maar één ding veranderen: een andere datum, een andere actie ('betalen' in plaats van 'inleveren') of een andere plek.",
          voorbeelden: [
            { type: "signaalwoorden", tekst: "'Graag vóór vrijdag reageren' en 'Lever het formulier in bij de balie' → allebei doe-zinnen. Woorden als 'wilt u', 'graag', 'uiterlijk' en 'vóór' zijn seinlampjes." },
          ],
          basiskennis: [
            { onderwerp: "Doe-zinnen herkennen", uitleg: "Een verzoek staat vaak als vraag geschreven ('Wilt u...?') maar is eigenlijk een nette opdracht." },
          ],
          niveaus: {
            basis: "Zoek de zin die met 'Wilt u...' begint. Wat wordt daar precies gevraagd, en vóór welke dag?",
            simpeler: "Onderaan de brief zit een strookje. Wat moet daarmee gebeuren volgens de brief?",
            nogSimpeler: "Zoek in de brief het woord 'strookje' en lees die zin heel precies.",
          },
        },
      },
      {
        q: "Op welke dag is de sportdag?",
        options: ["Vrijdag 22 mei", "Woensdag 13 mei", "4 mei", "Dat staat niet in de brief"],
        answer: 0,
        evidence: "Op vrijdag 22 mei houden wij onze jaarlijkse sportdag op sportpark De Weide.",
        wrongHints: [
          null,
          "Op die dag moet het stróókje binnen zijn. Zoek de zin waarin de sportdag zelf genoemd wordt.",
          "Die datum staat helemaal bovenaan, naast de plaatsnaam. Wat betekent een datum op díé plek?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Tel de datums", tekst: "Deze brief heeft drie datums: 4 mei (bovenaan), 22 mei (in de eerste alinea) en 13 mei (bij het strookje). Elke datum betekent iets anders!" },
            { titel: "Geef elke datum een naam", tekst: "4 mei = de dag waarop de brief geschreven is. 13 mei = de uiterste dag voor het strookje. 22 mei = de dag van de sportdag zelf — dat staat letterlijk in de zin 'Op vrijdag 22 mei houden wij onze jaarlijkse sportdag'." },
            { titel: "Lees de vraag precies", tekst: "De vraag gaat over de dag van de spórtdag. Zoek dus de zin waarin de sportdag wordt aangekondigd, niet de zin over het strookje of de datum bovenaan." },
          ],
          woorden: [
            { woord: "deadline", uitleg: "De uiterste dag waarop iets klaar of ingeleverd moet zijn. Hierna ben je te laat." },
          ],
          theorie: "**Drie soorten datums in één brief**\n\n| Datum | Soort | Waar? |\n|---|---|---|\n| schrijfdatum | wanneer de brief gemaakt is | bovenaan, naast de plaats |\n| deadline | vóór wanneer jij iets moet doen | in de doe-zin |\n| gebeurtenis-datum | wanneer het evenement is | in de aankondiging |\n\nDé klassieke toets-valstrik: de deadline en de gebeurtenis-datum door elkaar halen. Truc: lees bij elke datum wat er in díé zin gebeurt. 'Inleveren uiterlijk...' = deadline. 'Op ... houden wij...' = de gebeurtenis zelf.",
          voorbeelden: [
            { type: "datum-check", tekst: "'Meld je vóór 1 oktober aan voor het schoolkamp van 15 oktober.' → aanmelden vóór 1 oktober (deadline), kamp op 15 oktober (gebeurtenis). Twee datums, twee betekenissen." },
          ],
          basiskennis: [
            { onderwerp: "Datum + zin = betekenis", uitleg: "Een datum betekent niets in z'n eentje — de zin eromheen vertelt of het een schrijfdatum, deadline of feestdag is." },
          ],
          niveaus: {
            basis: "Er staan drie datums in de brief. Zoek de zin waarin het woord 'sportdag' sámen met een datum staat.",
            simpeler: "Eén datum hoort bij het strookje, één staat bovenaan naast de plaatsnaam. Welke datum blijft er over — en wat gebeurt er op die dag?",
            nogSimpeler: "Lees de allereerste zin van de brief nog eens heel precies.",
          },
        },
      },
    ],
  },

  // ── Stap 3 ──────────────────────────────────────────────────────
  {
    title: "Lastige gevallen",
    explanation: `Je kent nu de onderdelen en het stappenplan. De Doorstroomtoets test ook drie **lastige gevallen** — wie ze kent, trapt er niet in!

**1. Twee (of meer) datums.** De datum bovenaan vertelt wanneer de brief is geschreven. Ín de brief staan vaak ándere datums: wanneer iets plaatsvindt, of vóór wanneer je iets moet doen (de **deadline** — de uiterste dag). Lees bij elke datum-vraag heel precies wélke datum er gevraagd wordt.

**2. Doel of detail?** Het doel is waaróm de hele brief geschreven is. Een detail is één klein feitje uit de brief. In een klachtbrief over een lekke bal is 'de bal was lek' een detail — het doel is klagen en je geld terugvragen. Vraag jezelf: wat wil de schrijver met de héle brief bereiken?

**3. Deftig of gewoon?** Aan iemand die je niet goed kent, schrijf je deftig: 'Geachte heer' of 'Geachte mevrouw', met 'u'. Aan vrienden en familie schrijf je gewoon: 'Beste' of 'Lieve', met 'je'. Aan de aanhef zie je dus meteen hoe goed de schrijver en de ontvanger elkaar kennen.

Oefen deze drie gevallen hieronder met korte stukjes brief.`,
    checks: [
      {
        q: "*\"Zonnedorp, 4 mei 2026\"* staat helemaal bovenaan een brief. Wat betekent deze datum?",
        options: [
          "De dag waarop de brief is geschreven",
          "De dag waarop de sportdag is",
          "De dag waarop je iets moet inleveren",
          "De verjaardag van de schrijver",
        ],
        answer: 0,
        evidence: "De datum bovenaan vertelt wanneer de brief is geschreven.",
        wrongHints: [
          null,
          "Zou een plan voor een feestelijke dag helemaal bovenaan staan, naast een plaatsnaam? Waar in een brief staan zulke plannen?",
          null,
          "Zet iemand zijn verjaardag bovenaan een brief? Denk aan wat een schrijver opschrijft op het moment van schrijven.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar de plek", tekst: "Deze regel staat helemaal bovenaan, vóór de aanhef, en er staat een plaatsnaam bij. Dat is de vaste plek voor de schrijfdatum." },
            { titel: "Wat betekent dat?", tekst: "Plaats + datum bovenaan = 'ik schrijf deze brief in Zonnedorp, op 4 mei 2026'. Het zegt niets over wat er ín de brief wordt aangekondigd." },
            { titel: "Waarom is dit een valstrik?", tekst: "De toets zet de schrijfdatum graag tussen de antwoorden bij vragen als 'wanneer is de sportdag?'. Wie alleen naar datums zoekt zonder de zin te lezen, pakt de verkeerde." },
          ],
          woorden: [
            { woord: "schrijfdatum", uitleg: "De dag waarop de brief gemaakt en verstuurd is. Staat bovenaan, vaak met de plaatsnaam ervoor." },
          ],
          theorie: "**Plaats + datum bovenaan = schrijfdatum**\n\nIn een nette brief staat bovenaan: 'Plaatsnaam, dag maand jaar'. Bijvoorbeeld: 'Zonnedorp, 4 mei 2026'. Dat betekent altijd: hier en op deze dag is de brief geschreven.\n\nBij een e-mail doet de regel 'Datum:' hetzelfde werk — die vult de computer automatisch in.\n\nHandig weetje: de schrijfdatum is altijd éérder dan de datums ín de brief. Je kunt tenslotte geen brief schrijven over een sportdag die al geweest is (behalve als je terugblikt!).",
          voorbeelden: [
            { type: "schrijfdatum", tekst: "'Appelheim, 3 maart 2026 — Beste leden, op 21 maart is de grote schoonmaakdag...' → geschreven op 3 maart, schoonmaakdag op 21 maart." },
          ],
          basiskennis: [
            { onderwerp: "Vaste plekken", uitleg: "Bovenaan = wanneer geschreven. In de kern = wanneer er iets gebeurt of moet gebeuren." },
          ],
          niveaus: {
            basis: "Deze datum staat naast een plaatsnaam, nog vóór 'Beste...'. Wat doet de schrijver op die plek en die dag?",
            simpeler: "Als jij een brief schrijft en er 'Zonnedorp, 4 mei' boven zet — wat vertel je de lezer dan over die dag?",
            nogSimpeler: "Denk aan het moment waarop de pen het papier raakt: welke dag noteer je bovenaan?",
          },
        },
      },
      {
        q: "*\"Geachte heer Pot, vorige week kocht ik in uw winkel een voetbal. Na twee dagen was hij al lek. Ik wil graag mijn geld terug.\"* — Wat is het doel van deze brief?",
        options: [
          "Klagen over de kapotte bal en geld terugvragen",
          "Vertellen dat voetballen leuk is",
          "De winkel bedanken voor de mooie bal",
          "Vragen hoe je een bal oppompt",
        ],
        answer: 0,
        evidence: "Ik wil graag mijn geld terug.",
        wrongHints: [
          null,
          "Staat er iets over hoe leuk voetballen is — of over iets dat mís is met de bal?",
          "Zou je een winkel bedanken voor iets dat na twee dagen al kapot was?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is er gebeurd?", tekst: "De schrijver kocht een bal, en na twee dagen was hij lek. De schrijver is dus niet tevreden over de winkel." },
            { titel: "Wat wil de schrijver bereiken?", tekst: "De laatste zin verklapt het doel: 'Ik wil graag mijn geld terug.' De schrijver klaagt én vraagt iets terug. Dat samen is het doel van de hele brief." },
            { titel: "Doel vs detail", tekst: "'De bal was lek' is waar, maar het is een detail: één feitje uit de brief. Het dóél is wat de schrijver ermee wil: zijn klacht kwijt en zijn geld terug." },
          ],
          woorden: [
            { woord: "klacht", uitleg: "Een bericht waarin je vertelt dat je ontevreden bent en wat je wilt dat er gebeurt." },
            { woord: "detail", uitleg: "Een klein feitje uit de tekst. Waar, maar niet de reden waarom de hele brief geschreven is." },
          ],
          theorie: "**Doel of detail — de waarom-truc**\n\nEen doel-vraag beantwoord je nooit met een los feitje. Stel jezelf twee vragen:\n\n1. **Klopt het?** Staat het in de brief? (Een detail klopt óók — daarom is het zo'n gemene afleider.)\n2. **Is het de reden van de héle brief?** Zou de schrijver de brief geschreven hebben zonder dit punt?\n\nDe schrijver van deze brief pakte geen pen omdat de bal lek was — hij pakte een pen omdat hij zijn geld terug wil. De lekke bal is het bewijs, het geld terugvragen is het doel.",
          voorbeelden: [
            { type: "doel-vs-detail", tekst: "Brief: 'Onze hond is weggelopen. Hij is bruin en heet Ollie. Wie hem ziet: bel ons alstublieft.' → detail: de hond is bruin. Doel: hulp vragen bij het zoeken." },
          ],
          basiskennis: [
            { onderwerp: "De laatste zin", uitleg: "In klachtbrieven en verzoek-brieven staat het echte doel vaak in de laatste zin: wat er nu moet gebeuren." },
          ],
          niveaus: {
            basis: "Lees de laatste zin van het briefje nog eens. Wat wil de schrijver dat er gebeurt?",
            simpeler: "De schrijver kocht iets dat snel kapot ging. Is hij daar blij of boos over — en wat vraagt hij daarom aan de winkel?",
            nogSimpeler: "Is dit een blij briefje of een boos briefje? En wat wil de schrijver terugkrijgen?",
          },
        },
      },
      {
        q: "Je schrijft een brief aan de burgemeester, die je niet kent. Welke aanhef past het best?",
        options: [
          "Geachte mevrouw Van Dam,",
          "Hoi burgemeester!",
          "Yo!",
          "Lieve mevrouw Van Dam,",
        ],
        answer: 0,
        evidence: "Aan iemand die je niet goed kent, schrijf je deftig: 'Geachte heer' of 'Geachte mevrouw', met 'u'.",
        wrongHints: [
          null,
          "Zo begroet je een vriend op het schoolplein. Past dat bij iemand belangrijks die je nog nooit ontmoet hebt?",
          null,
          "'Lieve' schrijf je aan mensen van wie je houdt, zoals oma. Ken jij de burgemeester zo goed?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wie is de ontvanger?", tekst: "De burgemeester: een belangrijk persoon die je niet kent. Dan kies je de deftige (formele) toon." },
            { titel: "Welke aanhef hoort daarbij?", tekst: "Deftig begroeten doe je met 'Geachte heer ...' of 'Geachte mevrouw ...', gevolgd door de achternaam. In de rest van de brief zeg je dan 'u' in plaats van 'je'." },
            { titel: "Waarom maakt dit uit?", tekst: "De toon van je brief laat zien dat je respect hebt voor de lezer. Een burgemeester met 'Yo!' aanschrijven komt over alsof je de brief niet serieus neemt — dan wordt je verzoek minder snel gehoord." },
          ],
          woorden: [
            { woord: "formeel", uitleg: "Deftig en netjes — voor mensen die je niet goed kent of die een belangrijke functie hebben." },
            { woord: "informeel", uitleg: "Gewoon en gezellig — voor vrienden, familie en mensen die je goed kent." },
          ],
          theorie: "**Formeel of informeel — kies je toon**\n\n| | Formeel (deftig) | Informeel (gewoon) |\n|---|---|---|\n| Aanhef | Geachte heer/mevrouw + achternaam | Beste/Lieve/Hoi + voornaam |\n| Aanspreken | u | je/jij |\n| Afsluiting | Hoogachtend / Met vriendelijke groet | Groetjes / Liefs |\n\nOp de toets krijg je dit twee kanten op: 'welke aanhef past?' én 'is deze brief formeel of informeel — hoe zie je dat?'. Kijk dan naar de aanhef, u/je en de afsluiting.",
          voorbeelden: [
            { type: "formeel", tekst: "Aan de directeur van het zwembad: 'Geachte heer Molenaar, ... Kunt u ...? Met vriendelijke groet, Nova Willems.'" },
            { type: "informeel", tekst: "Aan je beste vriend: 'Hoi Ties! Kom je zaterdag? Groetjes, Milan.'" },
          ],
          basiskennis: [
            { onderwerp: "Toon lees je aan de randen", uitleg: "Aanhef en afsluiting verklappen meteen of een brief deftig of gewoon is." },
          ],
          niveaus: {
            basis: "De burgemeester is belangrijk én een vreemde voor jou. Kies je dan een deftige of een gezellige begroeting?",
            simpeler: "Hoe begroet je iemand die je nog nooit hebt ontmoet en die je met 'u' aanspreekt?",
            nogSimpeler: "Streep eerst de begroetingen weg die je alleen tegen vrienden of familie zou zeggen.",
          },
        },
      },
      {
        q: "*\"Lieve oma, wat een supercadeau! Ik speel er elke dag mee. Duizend keer dank!\"* — Wat is het doel van dit briefje?",
        options: [
          "Oma bedanken voor het cadeau",
          "Klagen dat het cadeau kapot is",
          "Oma uitnodigen voor een feestje",
          "Oma informeren over school",
        ],
        answer: 0,
        evidence: "Duizend keer dank!",
        wrongHints: [
          null,
          null,
          "Staat er ergens een uitnodiging met een dag en een tijd erbij?",
          "Gaat dit briefje over school — of over iets dat de schrijver heeft gekregen?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Let op de toon", tekst: "'Wat een supercadeau!' en een uitroepteken erbij — de schrijver is blij. Dit is dus geen klacht." },
            { titel: "Zoek de doel-zin", tekst: "'Duizend keer dank!' zegt het letterlijk: de schrijver wil oma bedanken. Dat is het doel van het hele briefje." },
            { titel: "Check de aanhef", tekst: "'Lieve oma' — informeel en warm. Dat past precies bij een bedankje aan familie. Alles in het briefje wijst dezelfde kant op." },
          ],
          woorden: [
            { woord: "bedanken", uitleg: "Iemand laten weten dat je blij bent met wat hij of zij deed of gaf." },
          ],
          theorie: "**Bedank-briefjes herkennen**\n\nSignaalwoorden voor het doel 'bedanken':\n\n- 'dank je wel', 'bedankt', 'duizend keer dank'\n- 'wat fijn dat...', 'wat een super...'\n- blije uitroeptekens en complimenten\n\nVergelijk de vijf doelen nog eens: klagen klinkt boos, informeren klinkt zakelijk (feiten en datums), uitnodigen noemt een dag en een plek, vragen eindigt met een verzoek — en bedanken klinkt blij en dankbaar. De tóón van de brief wijst je vaak al naar het doel.",
          voorbeelden: [
            { type: "toon-check", tekst: "'Beste meneer Smit, helaas deed de gekochte lamp het niet...' → boze/teleurgestelde toon = klacht. 'Lieve juf, bedankt voor het leuke schooljaar!' → blije toon = bedankje." },
          ],
          basiskennis: [
            { onderwerp: "Toon → doel", uitleg: "Blij = vaak bedanken of uitnodigen. Boos = klagen. Zakelijk met feiten = informeren. Eindigend met een verzoek = vragen." },
          ],
          niveaus: {
            basis: "Hoe voelt de schrijver zich: boos, verdrietig of blij? En wat zegt de laatste zin?",
            simpeler: "De schrijver heeft iets gekregen en roept 'duizend keer...' — wat wil hij daarmee tegen oma zeggen?",
            nogSimpeler: "Lees de laatste twee woorden van het briefje hardop.",
          },
        },
      },
    ],
  },

  // ── Stap 4 ──────────────────────────────────────────────────────
  {
    title: "Doorstroomtoets-oefening — de mix",
    explanation: tekstZwemvierdaagse + `

Dit is 'm: een echte e-mail met vragen zoals je ze op de Doorstroomtoets krijgt. Alles komt samen: de onderdelen, het doel, de datums én dé vraag 'wat moet ik doen?'.

Pak je vaste stappenplan erbij: kijk eerst naar de **randen** (Van, Aan, Datum, Onderwerp en de ondertekening), bepaal dan het **doel**, en zoek als laatste de zin die zegt wat jij moet **dóén** — mét de juiste datum erbij. Er staan meerdere datums in deze e-mail, dus lees bij elke vraag heel precies welke er gevraagd wordt. Neem de tijd om terug te zoeken in de e-mail: dat opzoeken hoort bij de toets. Succes!`,
    checks: [
      {
        q: "Waar zie je in één oogopslag waar deze e-mail over gaat?",
        options: [
          "In de onderwerpregel bovenaan",
          "In de allerlaatste zin",
          "In de aanhef 'Beste zwemmers en ouders'",
          "Aan het e-mailadres van de afzender",
        ],
        answer: 0,
        evidence: "**Onderwerp:** Doe mee met de Zwemvierdaagse!",
        wrongHints: [
          null,
          "Lees de laatste zin eens: staat daar het thema van de e-mail, of een wens van de schrijver?",
          null,
          "Aan een e-mailadres zie je wíé er mailt. Welke regel vertelt waaróver het gaat?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Scan de vaste regels", tekst: "Bovenaan de e-mail staan Van, Aan, Datum en Onderwerp. De regel 'Onderwerp: Doe mee met de Zwemvierdaagse!' vat het hele bericht samen in één regel." },
            { titel: "Vergelijk met de andere plekken", tekst: "De aanhef zegt alleen wíé de e-mail leest. Het e-mailadres zegt wíé hem stuurt. De laatste zin is een wens ('Wij hopen op veel deelnemers'). Alleen de onderwerpregel geeft het thema." },
            { titel: "Gebruik dit op de toets", tekst: "Bij vragen als 'waar gaat deze e-mail over?' spaar je tijd: eerst de onderwerpregel lezen, dan pas checken of de rest van de e-mail dat bevestigt." },
          ],
          woorden: [
            { woord: "onderwerpregel", uitleg: "De regel achter 'Onderwerp:' bovenaan een e-mail — een mini-samenvatting van het bericht." },
          ],
          theorie: "**De onderwerpregel als spiekbriefje**\n\nSchrijvers kiezen hun onderwerpregel zó dat de ontvanger meteen wil klikken: kort, duidelijk en vaak met de belangrijkste actie erin. 'Doe mee met de Zwemvierdaagse!' vertelt in vijf woorden waar het over gaat én wat de club van je wil.\n\nMaar pas op: een onderwerpregel is kort — details zoals datums en kosten staan er meestal niet in. Voor de doe-vraag ('wat moet ik precies doen en voor wanneer?') moet je dus altijd nog de kern van de e-mail lezen.",
          voorbeelden: [
            { type: "onderwerpregel", tekst: "'Onderwerp: Ouderavond verplaatst naar 9 maart' → je weet direct het thema (ouderavond) én het belangrijkste nieuws (nieuwe datum)." },
          ],
          basiskennis: [
            { onderwerp: "Snel-lezen", uitleg: "Randen eerst: Van/Aan/Datum/Onderwerp beantwoorden de vragen wie, voor wie, wanneer en waarover — nog vóór je de brief zelf leest." },
          ],
          niveaus: {
            basis: "Er is één regel bovenaan die het hele bericht in een paar woorden samenvat. Welke regel is dat?",
            simpeler: "Kijk naar de vier regels bovenaan de e-mail (Van, Aan, Datum en nog één). Welke van die vier vertelt het théma?",
            nogSimpeler: "Zoek de regel met het uitroepteken bovenaan de e-mail — wat vertelt die je?",
          },
        },
      },
      {
        q: "Wie is de afzender van deze e-mail?",
        options: [
          "Karin van Dijk van Zwemclub De Waterlelie",
          "Zwembad Het Golfje",
          "De ouders van de zwemmers",
          "Meester Jasper de Vries",
        ],
        answer: 0,
        evidence: "Karin van Dijk",
        wrongHints: [
          null,
          "Het zwembad is de plék waar gezwommen wordt. Kijk bij 'Van:' en onder de groet: wie stuurt de uitnodiging?",
          null,
          "Die naam hoort bij een héél andere brief. Kijk wie er onder 'Met sportieve groet,' staat.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Twee plekken, één antwoord", tekst: "Bovenaan staat 'Van: info@zwemclub-dewaterlelie.nl' en onderaan staat 'Karin van Dijk, Zwemclub De Waterlelie'. Twee keer hetzelfde antwoord: de zwemclub stuurt deze e-mail." },
            { titel: "Pas op voor de plek-valstrik", tekst: "Zwembad Het Golfje komt wel in de e-mail voor, maar alleen als de plek waar de Zwemvierdaagse is. Een plek is geen schrijver." },
            { titel: "Controleer met de ontvanger", tekst: "De aanhef zegt 'Beste zwemmers en ouders' — dat zijn de ontvangers. Blijft over als schrijver: de club, met Karin van Dijk als ondertekenaar." },
          ],
          woorden: [
            { woord: "namens", uitleg: "In naam van iemand anders. Karin schrijft namens de hele zwemclub — de club is dus ook afzender." },
          ],
          theorie: "**Afzender bij een e-mail — dubbel te vinden**\n\nBij een e-mail kun je de afzender op twee plekken checken:\n\n1. De regel **'Van:'** bovenaan — vaak een e-mailadres waarin de naam van de club of school zit.\n2. De **ondertekening** onderaan — de naam van de persoon die namens die club schrijft.\n\nKloppen die twee met elkaar? Dan weet je het zeker. Let op: personen en plekken die ín de e-mail genoemd worden (het zwembad, de kassa, de balie) zijn géén afzender — die spelen alleen een rol in het verhaal.",
          voorbeelden: [
            { type: "dubbel-checken", tekst: "'Van: juf.lotte@school-dewilg.nl' + ondertekening 'Juf Lotte' → afzender is juf Lotte van basisschool De Wilg. Adres en naam bevestigen elkaar." },
          ],
          basiskennis: [
            { onderwerp: "Plek ≠ afzender", uitleg: "Waar iets gebeurt (zwembad, gymzaal, bibliotheek) is bijna nooit wie de brief schrijft." },
          ],
          niveaus: {
            basis: "Kijk op twee plekken: de regel 'Van:' bovenaan en de naam onder de groet. Wat vertellen die samen?",
            simpeler: "In het e-mailadres bovenaan zit een clubnaam verstopt. Welke club is dat — en wie tekent er onderaan?",
            nogSimpeler: "Lees de naam die onder 'Met sportieve groet,' staat.",
          },
        },
      },
      {
        q: "Wat is het doel van deze e-mail?",
        options: [
          "Uitnodigen voor de Zwemvierdaagse en vragen je op tijd aan te melden",
          "Klagen over het drukke zwembad",
          "Bedanken voor de medailles van vorig jaar",
          "Informeren over nieuwe zwemlessen",
        ],
        answer: 0,
        evidence: "Wil je meedoen? Meld je dan aan vóór vrijdag 12 juni.",
        wrongHints: [
          null,
          "Lees je ergens dat de schrijver boos of ontevreden is? Wat voor toon heeft de e-mail?",
          null,
          "Gaat deze e-mail over lessen — of over een evenement van vier avonden?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat kondigt de e-mail aan?", tekst: "Een evenement: de Zwemvierdaagse, vier avonden zwemmen met een medaille als beloning. De club hoopt op veel deelnemers — dit is een uitnodiging." },
            { titel: "Wat vraagt de e-mail?", tekst: "'Wil je meedoen? Meld je dan aan vóór vrijdag 12 juni.' Er wordt dus ook een actie gevraagd. Uitnodigen + vragen om aan te melden = het complete doel." },
            { titel: "Check de toon", tekst: "Uitroeptekens, 'Doe mee!', 'Wij hopen op heel veel deelnemers!' — een blije, uitnodigende toon. Dat past bij uitnodigen, niet bij klagen of bedanken." },
          ],
          woorden: [
            { woord: "uitnodigen", uitleg: "Iemand vragen om ergens naartoe te komen of ergens aan mee te doen." },
            { woord: "deelnemer", uitleg: "Iemand die meedoet aan een activiteit of wedstrijd." },
          ],
          theorie: "**Uitnodigingen herkennen**\n\nEen uitnodiging heeft bijna altijd deze bouwstenen:\n\n- **wat**: het evenement (Zwemvierdaagse)\n- **wanneer**: datum en tijd (22 t/m 25 juni, 18.00-19.30 uur)\n- **waar**: de plek (zwembad Het Golfje)\n- **hoe doe je mee**: de aanmeld-instructie (vóór 12 juni aanmelden)\n\nZie je die vier bouwstenen? Dan is het doel uitnodigen — ook als het woord 'uitnodiging' nergens staat. En net als bij de sportdag-brief geldt: veel brieven combineren twee doelen. Het meest complete antwoord wint.",
          voorbeelden: [
            { type: "bouwstenen", tekst: "'Kom naar de voorleesmiddag in bibliotheek De Boekenberg, woensdag 14.00 uur. Reserveer een plekje via onze site.' → wat, waar, wanneer, hoe = uitnodiging." },
          ],
          basiskennis: [
            { onderwerp: "Doel-woorden", uitleg: "'Doe mee', 'kom ook', 'meld je aan' zijn typische uitnodigings-woorden." },
          ],
          niveaus: {
            basis: "De club kondigt een evenement aan én vraagt de lezer iets te doen. Welke twee doelen zitten daarin?",
            simpeler: "Kijk naar de onderwerpregel: 'Doe mee met...!' — wat wil de club dat jij doet?",
            nogSimpeler: "Is deze e-mail boos, dankbaar — of wil de club dat jij ergens aan meedoet?",
          },
        },
      },
      {
        q: "Wat moet je DOEN als je wilt meedoen aan de Zwemvierdaagse?",
        options: [
          "Je aanmelden vóór vrijdag 12 juni, via e-mail of met het formulier bij de balie",
          "Vóór 12 juni € 3,50 overmaken",
          "Op maandag 22 juni pas aanmelden bij de kassa",
          "Een medaille ophalen bij de balie",
        ],
        answer: 0,
        evidence: "Meld je dan aan vóór vrijdag 12 juni.",
        wrongHints: [
          null,
          "Lees de zin over het geld nog eens: wanneer en wáár betaal je? Moet je nu al iets overmaken?",
          "Wat gebeurt er volgens de e-mail met wie zich te láát aanmeldt?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de doe-zin", tekst: "'Wil je meedoen? Meld je dan aan vóór vrijdag 12 juni.' Daar staat de actie (aanmelden) én de deadline (vóór 12 juni)." },
            { titel: "Zoek het hoe", tekst: "De e-mail geeft twee manieren: een antwoord sturen op de e-mail, óf het aanmeldformulier inleveren bij de balie. Het volledige antwoord noemt actie, deadline én manier." },
            { titel: "Waarom de andere opties fout zijn", tekst: "Het geld betaal je pas op de eerste avond bij de kassa ('je hoeft nu nog niets over te maken'). En wie tot 22 juni wacht met aanmelden, is te laat: 'Wie zich te laat aanmeldt, kan helaas niet meer meedoen.'" },
          ],
          woorden: [
            { woord: "aanmelden", uitleg: "Laten weten dat je meedoet, zodat je op de lijst komt te staan." },
            { woord: "balie", uitleg: "De plek bij de ingang waar je iets kunt vragen of afgeven." },
          ],
          theorie: "**De doe-vraag met méérdere acties — welke telt?**\n\nIn deze e-mail staan verschillende dingen die je 'kunt doen': aanmelden, betalen, je zwemdiploma meenemen. Welke actie is dan hét antwoord op 'wat moet je doen als je wilt meedoen'?\n\nKijk naar de volgorde in de tijd: wat moet je **eerst** doen, en zonder welke stap gaat de rest niet door? Zonder aanmelding vóór 12 juni mag je helemaal niet meedoen — betalen en het diploma komen daarna pas. De eerste, verplichte stap met de deadline is het antwoord.\n\nExtra tip: check bij elke optie of álle details kloppen. 'Betalen vóór 12 juni' verwisselt de deadline van het aanmelden met de betaling — half goed is helemaal fout.",
          voorbeelden: [
            { type: "volgorde", tekst: "'Schrijf je vóór 1 mei in voor het schoolkamp. De bijdrage van € 25 betaal je in juni.' → de doe-vraag-actie is inschrijven vóór 1 mei; betalen komt later." },
          ],
          basiskennis: [
            { onderwerp: "Eerste verplichte stap", uitleg: "Bij meerdere acties in één brief vraagt de toets meestal naar de eerste stap mét deadline." },
          ],
          niveaus: {
            basis: "Zoek de zin die begint met 'Wil je meedoen?' — wat moet je dan doen, en vóór welke dag?",
            simpeler: "Er staan twee manieren in de e-mail om je op de lijst te krijgen. Welke zijn dat, en wanneer moet dat gebeurd zijn?",
            nogSimpeler: "Zoek het woord 'aanmelden' in de e-mail en lees die zinnen heel precies.",
          },
        },
      },
      {
        q: "Op welke dag begint de Zwemvierdaagse?",
        options: ["Maandag 22 juni", "Vrijdag 12 juni", "Dinsdag 2 juni", "Donderdag 25 juni"],
        answer: 0,
        evidence: "Van maandag 22 juni tot en met donderdag 25 juni organiseert Zwemclub De Waterlelie weer de Zwemvierdaagse in zwembad Het Golfje.",
        wrongHints: [
          null,
          "Vóór die dag moet je je áánmelden. Zoek de zin die vertelt van wanneer tot wanneer het zwemmen zelf duurt.",
          "Die datum staat bovenaan bij 'Datum:' — wat betekent een datum op die plek?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Verzamel de datums", tekst: "In deze e-mail staan vier datums: 2 juni (bovenaan bij 'Datum:'), 12 juni (aanmeld-deadline), 22 juni en 25 juni (begin en einde van het evenement)." },
            { titel: "Geef ze elk een naam", tekst: "2 juni = verstuur-datum van de e-mail. 12 juni = deadline om je aan te melden. 22 t/m 25 juni = de Zwemvierdaagse zelf. De vraag gaat over de begíndag van het evenement." },
            { titel: "Lees 'van ... tot en met ...' goed", tekst: "'Van maandag 22 juni tot en met donderdag 25 juni' — het eerste deel is de startdag, het tweede deel de laatste dag. De vraag naar het begin beantwoord je met de eerste van de twee." },
          ],
          woorden: [
            { woord: "tot en met", uitleg: "De laatste dag telt nog mee. 'Van 22 tot en met 25 juni' = 22, 23, 24 én 25 juni, vier dagen dus." },
          ],
          theorie: "**Vier datums, vier betekenissen**\n\n| Datum | Betekenis | Waar gevonden |\n|---|---|---|\n| 2 juni | e-mail verstuurd | regel 'Datum:' |\n| 12 juni | uiterste aanmelddag | de doe-zin |\n| 22 juni | eerste zwemavond | 'Van maandag 22 juni...' |\n| 25 juni | laatste avond + medaille | '...tot en met donderdag 25 juni' |\n\nDe toets kan naar élk van deze vier vragen. De enige veilige aanpak: zoek de datum op in de e-mail en lees de hele zin eromheen — de zin vertelt wat de datum betekent. Nooit gokken op 'de eerste datum die ik zie'.",
          voorbeelden: [
            { type: "van-tot", tekst: "'De boekenweek is van 4 tot en met 12 oktober.' → begint op 4 oktober, eindigt op 12 oktober. Vraag naar het begin? Neem de eerste datum van de twee." },
          ],
          basiskennis: [
            { onderwerp: "Zin bepaalt betekenis", uitleg: "Lees bij elke datum de hele zin: gaat het om versturen, aanmelden, beginnen of eindigen?" },
          ],
          niveaus: {
            basis: "Zoek de zin die met 'Van maandag...' begint. Welke twee datums staan daarin, en welke is de startdag?",
            simpeler: "Eén datum is de aanmeld-grens, één staat bij 'Datum:' bovenaan. Zoek de zin over het zwemmen zelf: wanneer begint dat?",
            nogSimpeler: "Lees de allereerste zin ná 'Beste zwemmers en ouders' heel precies.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const briefEmailLezenPo = {
  id: "brief-email-lezen-po",
  title: "Een brief of e-mail lezen — wie, waarom en wat moet jij doen?",
  emoji: "✉️",
  level: "groep6-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — zakelijke teksten: brieven en e-mails",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
  ],
  intro:
    "Een brief van school of een e-mail van de sportclub — op de Doorstroomtoets krijg je er altijd vragen over. Leer de vaste onderdelen kennen (afzender, aanhef, ondertekening...), bepaal het doel van de schrijver en beantwoord dé toetsvraag: wat moet de ontvanger DOEN na het lezen? Met eigen oefenbrieven en een toets-stijl eindopdracht.",
  triggerKeywords: [
    "brief lezen", "e-mail lezen", "email lezen", "zakelijke brief", "zakelijke tekst",
    "afzender", "ontvanger", "aanhef", "afsluiting", "ondertekening", "onderwerpregel",
    "doel van de tekst", "uitnodiging lezen", "formele brief", "begrijpend lezen",
    "doorstroomtoets lezen", "cito begrijpend lezen",
  ],
  chapters,
  steps,
};

export default briefEmailLezenPo;
