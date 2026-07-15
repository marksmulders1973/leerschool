// Leerpad: Alinea's, hun functie en tussenkopjes — klassieke Doorstroomtoets-stof
// "Welk tussenkopje past het best boven alinea 3?" Kinderen leren:
// alinea herkennen (één deelonderwerp, witregel), de kernzin vinden
// (vaak vooraan!), de functie van een alinea benoemen (inleiding /
// uitleggen / voorbeeld / mening / slot) en een passend tussenkopje
// kiezen — niet te smal (over één zinnetje) en niet te breed (past
// boven de hele tekst).
//
// Alle teksten zijn 100% eigen werk. 4 stappen, 17 checks totaal.

const stepEmojis = ["📄", "🦔", "🪧", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een alinea?", emoji: "📄", from: 0, to: 0 },
  { letter: "B", title: "De functie van een alinea", emoji: "🦔", from: 1, to: 1 },
  { letter: "C", title: "Tussenkopjes kiezen", emoji: "🪧", from: 2, to: 2 },
  { letter: "D", title: "Doorstroomtoets-oefening", emoji: "🏆", from: 3, to: 3 },
];

// ── Tekst voor stap 2: eigen tekst over de egel (~160 woorden) ──────
const tekstEgel = `**De egel: stekelige tuinhulp**

**Alinea 1** — Hoor je 's avonds geritsel onder de struiken? Grote kans dat er een egel door de tuin sjokt. Veel mensen weten niet hoe nuttig dit stekelige dier is. In deze tekst lees je waarom een egel een echte tuinhulp is.

**Alinea 2** — Een egel eet elke nacht tientallen slakken, kevers en rupsen. Dat zijn precies de beestjes die planten kapotmaken. Doordat de egel ze opeet, blijven bloemen en groenten gezond. Zo werkt de egel als een nachtwaker voor de tuin.

**Alinea 3** — Kijk maar naar de tuin van meneer Baas. Jarenlang vraten slakken zijn jonge slaplantjes op. Sinds er een egel onder zijn schuur woont, staat de sla er prachtig bij. De buurman heeft nu zelfs een egelhuisje gekocht.

**Alinea 4** — Kortom: een egel in de tuin is een cadeautje. Daarom verdient dit dier onze hulp. Laat in de herfst een hoekje met bladeren liggen — dan heeft de egel een warm bed voor de winter.`;

// ── Tekst voor stap 4: eigen informatieve tekst vuurtoren (~190 woorden) ──
const tekstVuurtoren = `**De vuurtoren: licht in de nacht**

**Alinea 1** — Langs de Nederlandse kust staan tientallen vuurtorens. Het zijn hoge torens met een fel licht in de top. Dat licht waarschuwt schepen 's nachts voor gevaar: ondiep water, zandbanken en rotsen. Zo helpt een vuurtoren zeelieden al honderden jaren veilig de haven te vinden.

**Alinea 2** — Het licht van een vuurtoren werkt slim. Boven in de toren draait een grote lamp met spiegels en lenzen langzaam rond. Daardoor lijkt het licht steeds aan en uit te gaan. Elke vuurtoren heeft zijn eigen ritme van flitsen. Schippers zien aan dat ritme precies welke toren ze voor zich hebben.

**Alinea 3** — Vroeger woonde er een vuurtorenwachter in de toren. Hij stak elke avond de lamp aan en hield 's nachts de wacht. Ook moest hij olie bijvullen en de lenzen schoonpoetsen. Het was zwaar werk, want de wachter klom elke dag honderden treden.

**Alinea 4** — Tegenwoordig gaat bijna alles automatisch. Computers bedienen de lamp en schepen gebruiken satellieten om de weg te vinden. Toch blijven veel vuurtorens gewoon branden. Ze zijn een reservelicht voor als de techniek uitvalt — en veel mensen vinden de torens gewoon prachtig.`;

const steps = [
  // ── Stap 1 ──────────────────────────────────────────────────────
  {
    title: "Wat is een alinea?",
    explanation: `Kijk eens goed naar een tekst in je leesboek of op een website. Zie je dat de tekst in **stukjes** is verdeeld, met witregels ertussen? Elk stukje heet een **alinea**.

Een alinea is een stukje tekst dat over **één deelonderwerp** gaat. Gaat de tekst over honden? Dan kan de ene alinea over voeding gaan en de volgende over uitlaten. Begint de schrijver over iets nieuws, dan begint er ook een nieuwe alinea. Je herkent dat aan een **witregel** of doordat de tekst op een **nieuwe regel** begint.

In bijna elke alinea zit een **kernzin**: de zin die het belangrijkste van de alinea zegt. Die staat heel vaak **vooraan**. De andere zinnen leggen uit, geven voorbeelden of vertellen details.

Maar let op de valkuil! Soms begint een alinea met een **pakkend detail** — een grappig weetje of een vraag om je nieuwsgierig te maken. Dat is dan níét de kernzin. De test is simpel: de kernzin is de zin waar **alle andere zinnen bij passen**. Een leuk weetje past maar bij zichzelf; de kernzin dekt de hele alinea.

Op de Doorstroomtoets krijg je vragen als: *"Waar gaat de tweede alinea over?"* of *"Welke zin is de belangrijkste zin van deze alinea?"* Wie weet hoe een alinea in elkaar zit, heeft dan een grote voorsprong. Oefen maar met de vragen hieronder!`,
    checks: [
      {
        q: "Wat is een alinea?",
        options: [
          "Een stukje tekst dat over één deelonderwerp gaat",
          "Eén losse zin uit de tekst",
          "De titel die boven de hele tekst staat",
          "Een moeilijk woord in de tekst",
        ],
        answer: 0,
        evidence: "Een alinea is een stukje tekst dat over één deelonderwerp gaat.",
        wrongHints: [
          null,
          "Een alinea is meestal langer dan dat — er passen uitleg én voorbeelden in. Hoeveel zinnen zaten er in de voorbeelden hierboven?",
          "De titel staat boven de héle tekst. Waar bestaat de tekst zelf uit, tussen de witregels?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar de vorm", tekst: "Een tekst is verdeeld in stukjes met witregels ertussen. Elk stukje tussen twee witregels is een alinea." },
            { titel: "Kijk naar de inhoud", tekst: "Elk stukje gaat over één deelonderwerp. Nieuw deelonderwerp? Dan begint de schrijver een nieuw stukje." },
            { titel: "Waarom handig?", tekst: "Door alinea's kun je snel zoeken: wil je iets weten over voeding van honden, dan lees je alleen dát stukje. Zonder alinea's zou de tekst één grote brij zijn." },
          ],
          woorden: [
            { woord: "alinea", uitleg: "Een stukje tekst over één deelonderwerp, herkenbaar aan een witregel of een nieuwe regel." },
            { woord: "deelonderwerp", uitleg: "Een klein onderwerp binnen het grote onderwerp. Grote onderwerp: honden. Deelonderwerpen: voeding, uitlaten, rassen." },
          ],
          theorie: "**Tekst → alinea's → zinnen**\n\nZo is een tekst opgebouwd:\n\n- De **hele tekst** gaat over één groot onderwerp (bijvoorbeeld: de egel).\n- Elke **alinea** gaat over één deelonderwerp (wat eet hij, waar slaapt hij).\n- Elke **zin** vertelt één ding binnen dat deelonderwerp.\n\nEen alinea is dus groter dan één zin, maar kleiner dan de hele tekst. Precies het middelste laatje van de kast.",
          voorbeelden: [
            { type: "herkennen", tekst: "Een tekst over voetbal heeft drie stukjes: over de regels, over beroemde spelers en over het WK. Dat zijn drie alinea's — drie deelonderwerpen." },
            { type: "tegenvoorbeeld", tekst: "'De hond blafte.' is geen alinea maar één zin. Pas als er meer zinnen over hetzelfde deelonderwerp bij komen, wordt het een alinea." },
          ],
          basiskennis: [
            { onderwerp: "Eén alinea = één deelonderwerp", uitleg: "Dat is de gouden regel. Verandert het deelonderwerp, dan begint er een nieuwe alinea." },
          ],
          niveaus: {
            basis: "Denk aan de laatjes-kast: de hele tekst is de kast, en elk laatje bevat één klein onderwerp. Hoe heet zo'n laatje?",
            simpeler: "Is het iets van één zin, iets van een paar zinnen bij elkaar, of iets dat boven de hele tekst staat? Kijk naar de stukjes tussen de witregels.",
            nogSimpeler: "Zoek de omschrijving met 'stukje tekst' én 'één deelonderwerp' erin.",
          },
        },
      },
      {
        q: "Waaraan herken je dat er een nieuwe alinea begint?",
        options: [
          "Aan een witregel of doordat de tekst op een nieuwe regel begint",
          "Aan een punt aan het einde van een zin",
          "Aan een uitroepteken",
          "Aan een dikgedrukt woord midden in een zin",
        ],
        answer: 0,
        evidence: "Je herkent dat aan een witregel of doordat de tekst op een nieuwe regel begint.",
        wrongHints: [
          null,
          "Een punt sluit één zín af — maar in één alinea staan meerdere zinnen. Wat zie je tússen twee alinea's?",
          null,
          "Dikgedrukte woorden vallen op, maar kunnen overal staan. Kijk naar de ruimte om de stukjes tekst heen.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk met je ogen, niet met je hoofd", tekst: "Je hoeft nog niets te lezen: aan de vórm van de tekst zie je al waar de alinea's zitten. Zoek de open ruimtes." },
            { titel: "Witregel of nieuwe regel", tekst: "Meestal staat er een lege regel tussen twee alinea's. Soms begint een alinea gewoon op een nieuwe regel, af en toe met een klein stukje inspringen." },
            { titel: "Handig bij de toets", tekst: "Vraagt de toets iets over 'de derde alinea'? Tel dan de stukjes tussen de witregels: één, twee, drie. Zo vind je razendsnel het juiste stukje." },
          ],
          woorden: [
            { woord: "witregel", uitleg: "Een lege regel tussen twee stukjes tekst. Hij laat zien: hier begint iets nieuws." },
            { woord: "inspringen", uitleg: "De eerste regel van een alinea begint dan een stukje naar rechts. Ook een teken dat er een nieuwe alinea begint." },
          ],
          theorie: "**Alinea's tellen — de snelste toets-truc**\n\nBij vragen als 'Wat is de functie van alinea 2?' moet je eerst de goede alinea vínden. Zo doe je dat:\n\n1. Kijk naar de tekst zonder te lezen.\n2. Zoek de witregels (of nieuwe regels).\n3. Tel de stukjes van boven naar beneden: 1, 2, 3...\n\nLet op: de titel telt níét mee als alinea. Tellen begint bij het eerste echte stukje tekst.",
          voorbeelden: [
            { type: "tellen", tekst: "Een tekst heeft een titel en daaronder vier stukjes met witregels ertussen. Dan heeft de tekst vier alinea's — de titel telt niet mee." },
          ],
          basiskennis: [
            { onderwerp: "Vorm verklapt de bouw", uitleg: "Witregels en nieuwe regels zijn geen versiering: ze laten zien waar een nieuw deelonderwerp begint." },
          ],
          niveaus: {
            basis: "Wat zie je in een tekst tússen twee stukjes staan? Iets met lege ruimte...",
            simpeler: "Een punt en een uitroepteken horen bij één zin. Je zoekt iets dat je ziet tussen hele stúkjes tekst.",
            nogSimpeler: "Zoek het antwoord waarin een lege regel voorkomt.",
          },
        },
      },
      {
        q: "*\"Zwemmen is gezond voor je hele lichaam. Je traint je armen en je benen tegelijk. Ook je hart wordt sterker van zwemmen. Zelfs je longen doen mee.\"* — Welke zin is de kernzin van deze alinea?",
        options: [
          "Zwemmen is gezond voor je hele lichaam.",
          "Je traint je armen en je benen tegelijk.",
          "Ook je hart wordt sterker van zwemmen.",
          "Zelfs je longen doen mee.",
        ],
        answer: 0,
        evidence: "Zwemmen is gezond voor je hele lichaam.",
        wrongHints: [
          null,
          "Armen en benen zijn maar een déél van het verhaal. Welke zin dekt óók het hart en de longen?",
          "Het hart is één voorbeeld. Zoek de zin waar dit voorbeeld bij past.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat doet elke zin?", tekst: "Lees de alinea zin voor zin. Zin 2, 3 en 4 noemen steeds één lichaamsdeel: armen en benen, hart, longen. Dat zijn details." },
            { titel: "Zoek de paraplu-zin", tekst: "Welke zin past boven al die details? 'Gezond voor je hele lichaam' — armen, benen, hart en longen horen daar allemaal onder." },
            { titel: "Check de plek", tekst: "De kernzin staat hier vooraan. Dat is heel vaak zo: de schrijver zegt eerst het belangrijkste en legt het daarna uit." },
          ],
          woorden: [
            { woord: "kernzin", uitleg: "De zin die het belangrijkste van de alinea zegt. Alle andere zinnen passen eronder." },
            { woord: "detail", uitleg: "Een klein stukje informatie dat de kernzin uitlegt of er een voorbeeld bij geeft." },
          ],
          theorie: "**De paraplu-test**\n\nDe kernzin is als een paraplu: alle andere zinnen moeten eronder passen.\n\nZo test je een zin:\n1. Kies een zin waarvan je denkt dat het de kernzin is.\n2. Loop de andere zinnen langs: passen ze er allemaal onder?\n3. Past er eentje niet onder? Dan heb je een detail te pakken, geen kernzin.\n\n'Je traint je armen en benen' als paraplu? Dan valt het hart erbuiten. 'Gezond voor je hele lichaam' als paraplu? Alles past. Dát is de kernzin.",
          voorbeelden: [
            { type: "paraplu", tekst: "'Herfst is een kleurrijk seizoen. Bladeren worden rood en geel. Paddenstoelen zijn vaak felrood.' → 'Herfst is een kleurrijk seizoen' is de paraplu: de rest zijn kleur-voorbeelden." },
          ],
          basiskennis: [
            { onderwerp: "Kernzin vaak vooraan", uitleg: "Schrijvers zetten het belangrijkste meestal aan het begin van de alinea. Begin je zoektocht dus bij zin 1 — maar controleer altijd met de paraplu-test." },
          ],
          niveaus: {
            basis: "Drie zinnen noemen elk één lichaamsdeel. Welke zin gaat over álles tegelijk?",
            simpeler: "Doe de paraplu-test: onder welke zin passen armen, benen, hart én longen allemaal?",
            nogSimpeler: "Zoek de zin met 'hele lichaam' erin — past de rest daaronder?",
          },
        },
      },
      {
        q: "*\"Wist je dat een olifant wel tweehonderd kilo eten per dag op kan? Olifanten zijn dan ook bijna de hele dag bezig met eten zoeken. Ze eten gras, bladeren en takken. Zelfs boomschors staat op het menu.\"* — Welke zin is de kernzin?",
        options: [
          "Olifanten zijn dan ook bijna de hele dag bezig met eten zoeken.",
          "Wist je dat een olifant wel tweehonderd kilo eten per dag op kan?",
          "Ze eten gras, bladeren en takken.",
          "Zelfs boomschors staat op het menu.",
        ],
        answer: 0,
        evidence: "Olifanten zijn dan ook bijna de hele dag bezig met eten zoeken.",
        wrongHints: [
          null,
          "Dat is een pakkende binnenkomer om je nieuwsgierig te maken — maar is één weetje-vraag de paraplu voor de héle alinea?",
          null,
          "Boomschors is één klein detail van het menu. Zoek de zin waar alle eet-zinnen bij passen.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken de binnenkomer", tekst: "De alinea begint met een vraag en een verrassend getal. Dat is een truc van de schrijver om je aandacht te pakken — een pakkend detail, geen kernzin." },
            { titel: "Doe de paraplu-test", tekst: "Welke zin dekt de hele alinea? 'Bijna de hele dag bezig met eten zoeken' — daar passen het vele eten, het gras, de bladeren en de boomschors allemaal onder." },
            { titel: "Onthoud de valkuil", tekst: "De kernzin staat vaak vooraan, maar niet áltijd. Begint de alinea met een vraag of een gek weetje? Kijk dan één zin verder." },
          ],
          woorden: [
            { woord: "pakkend detail", uitleg: "Een grappig weetje, een vraag of een verrassend getal aan het begin. Bedoeld om je nieuwsgierig te maken — niet de belangrijkste zin." },
            { woord: "binnenkomer", uitleg: "De openingszin waarmee de schrijver je de alinea 'binnenlokt'." },
          ],
          theorie: "**Kernzin of lokzin?**\n\nSchrijvers openen een alinea graag met iets dat je aandacht grijpt:\n\n- een vraag: 'Wist je dat...?'\n- een gek getal: 'Wel tweehonderd kilo!'\n- een uitroep: 'Ongelooflijk maar waar!'\n\nZulke zinnen zijn lokzinnen. De échte kernzin komt dan meestal direct erna, vaak herkenbaar aan woordjes als 'dan ook' of 'daarom'. Trap er op de toets niet in: doe altijd de paraplu-test in plaats van blind zin 1 te kiezen.",
          voorbeelden: [
            { type: "lokzin", tekst: "'Brrr, min twintig graden! Toch hebben pinguïns het dan prima naar hun zin. Hun veren en vetlaag houden ze warm.' → de kernzin is de zin over het prima naar hun zin hebben, niet de brrr-opening." },
          ],
          basiskennis: [
            { onderwerp: "Vraag als opening = bijna nooit kernzin", uitleg: "Een kernzin vertélt iets. Een openingsvraag vraagt alleen maar — kijk dan een zin verder." },
          ],
          niveaus: {
            basis: "De eerste zin is een nieuwsgierig-maker. Welke zin daarna vertelt waar de hele alinea over gaat?",
            simpeler: "Doe de paraplu-test: onder welke zin passen het gras, de bladeren én de boomschors?",
            nogSimpeler: "Zoek de zin die vertelt wat olifanten bijna de hele dag doen.",
          },
        },
      },
    ],
  },

  // ── Stap 2 ──────────────────────────────────────────────────────
  {
    title: "De functie van een alinea",
    explanation: tekstEgel + `

Elke alinea heeft een **taak** in de tekst. Dat noemen we de **functie** van de alinea. Op de Doorstroomtoets krijg je vragen als: *"Wat doet de schrijver in de derde alinea?"* Dit zijn de vijf functies die je moet kennen:

1. **Inleiding** — het begin: de lezer maakt kennis met het onderwerp en wordt nieuwsgierig gemaakt.
2. **Uitleggen** — de schrijver legt uit hoe of waarom iets zo is.
3. **Voorbeeld geven** — de schrijver laat één echt geval zien ("Kijk maar naar...", "Zo ging het bij...").
4. **Mening geven** — de schrijver vertelt wat híj ervan vindt ("Kortom...", "Daarom verdient...").
5. **Slot** — het einde: de tekst wordt afgerond, vaak met een korte samenvatting of een tip.

**Zo vind je de functie:** lees de alinea en vraag jezelf af: wat **doet** de schrijver hier? Signaalwoorden helpen: *bijvoorbeeld* en *kijk maar* wijzen op een voorbeeld, *doordat* en *daardoor* op uitleg, *kortom* en *ik vind* op een mening of slot.

Beantwoord nu de vier vragen over de egel-tekst hierboven.`,
    checks: [
      {
        q: "Wat is de functie van **alinea 1** van de egel-tekst?",
        options: [
          "Het is de inleiding: de lezer maakt kennis met het onderwerp",
          "De schrijver geeft een voorbeeld uit één tuin",
          "De schrijver geeft zijn mening over egels",
          "Het is het slot: de tekst wordt afgerond",
        ],
        answer: 0,
        evidence: "In deze tekst lees je waarom een egel een echte tuinhulp is.",
        wrongHints: [
          null,
          "Wordt hier één echte tuin met een naam genoemd? Kijk waar de alinea in de tekst stáát en wat hij aankondigt.",
          null,
          "Kan het einde van een tekst helemaal vooraan staan? Wat belooft de laatste zin van deze alinea?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar de plek", tekst: "Alinea 1 staat helemaal vooraan. De eerste alinea van een tekst is bijna altijd de kennismaking met het onderwerp." },
            { titel: "Kijk naar de inhoud", tekst: "De alinea begint met een vraag om je nieuwsgierig te maken ('Hoor je 's avonds geritsel?') en eindigt met een aankondiging: 'In deze tekst lees je waarom...'" },
            { titel: "Herken het signaal", tekst: "'In deze tekst lees je...' is een superduidelijk inleidings-signaal: de schrijver vertelt wat er gaat komen. Dat doe je alleen aan het begin." },
          ],
          woorden: [
            { woord: "inleiding", uitleg: "Het begin van een tekst: de lezer maakt kennis met het onderwerp en wil verder lezen." },
            { woord: "aankondigen", uitleg: "Alvast vertellen wat er komt: 'In deze tekst lees je...'" },
          ],
          theorie: "**De inleiding herkennen**\n\nEen inleiding doet meestal twee dingen:\n\n1. **Nieuwsgierig maken** — met een vraag, een weetje of een herkenbare situatie ('Hoor je 's avonds geritsel?').\n2. **Aankondigen** — vertellen waar de tekst over gaat ('In deze tekst lees je waarom...').\n\nSignaalzinnen: 'In deze tekst...', 'Heb je je weleens afgevraagd...', 'Steeds meer mensen...'. Zie je zoiets in de éérste alinea? Dan is de functie bijna zeker: inleiden.",
          voorbeelden: [
            { type: "signaal", tekst: "'Heb je weleens een vos gezien in de stad? Het gebeurt steeds vaker. In deze tekst ontdek je hoe dat komt.' → nieuwsgierig maken + aankondigen = inleiding." },
          ],
          basiskennis: [
            { onderwerp: "Plek helpt, inhoud beslist", uitleg: "De eerste alinea is meestal de inleiding — maar controleer altijd of de inhoud klopt: maakt hij nieuwsgierig en kondigt hij iets aan?" },
          ],
          niveaus: {
            basis: "Deze alinea staat vooraan én zegt 'In deze tekst lees je...'. Wat doet een schrijver daarmee aan het begin?",
            simpeler: "De alinea vertelt nog niets over slakken eten of over meneer Baas — hij maakt je alleen nieuwsgierig en kondigt de tekst aan. Welke taak hoort daarbij?",
            nogSimpeler: "Wat noem je het begin van een tekst, waar je kennismaakt met het onderwerp?",
          },
        },
      },
      {
        q: "Wat doet de schrijver in **alinea 3** (over meneer Baas)?",
        options: [
          "Hij geeft een voorbeeld",
          "Hij geeft zijn mening",
          "Hij leidt de tekst in",
          "Hij vat de tekst samen",
        ],
        answer: 0,
        evidence: "Kijk maar naar de tuin van meneer Baas.",
        wrongHints: [
          null,
          "Staat er ergens 'ik vind' of 'kortom'? Of laat de schrijver hier één echte tuin zíén?",
          "De tekst is al lang begonnen — kan dit stukje dan nog het begin zijn?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken het signaalwoord", tekst: "De alinea begint met 'Kijk maar naar...'. Dat is een klassiek signaal: de schrijver gaat iets laten zien dat écht gebeurd is." },
            { titel: "Wat wordt er getoond?", tekst: "Eén specifieke tuin, van één persoon met een naam: meneer Baas. Zijn sla, zijn schuur, zijn buurman. Superspecifiek dus." },
            { titel: "Koppel aan de alinea ervoor", tekst: "Alinea 2 legde uit dát een egel de tuin helpt. Alinea 3 bewijst het met één echt geval. Uitleg eerst, dan het bewijs uit de praktijk." },
          ],
          woorden: [
            { woord: "voorbeeld", uitleg: "Eén echt geval dat laat zien dat de uitleg klopt. Vaak met een naam of een plek erbij." },
            { woord: "signaalwoord", uitleg: "Een woord dat verklapt wat de schrijver doet: 'bijvoorbeeld', 'kijk maar', 'zo ging het bij...'" },
          ],
          theorie: "**Uitleg en voorbeeld — een vast duo**\n\nSchrijvers werken vaak zo:\n\n- Eerst een alinea **uitleg**: hoe of waarom iets werkt (algemeen, geldt voor alle egels).\n- Dan een alinea **voorbeeld**: één echt geval (specifiek, met naam en toenaam).\n\nZo herken je het voorbeeld: er komt ineens één persoon, één dier of één plek met details in beeld. Signaalwoorden: 'bijvoorbeeld', 'kijk maar naar', 'neem nou', 'zo ging het bij'.",
          voorbeelden: [
            { type: "duo", tekst: "Uitleg: 'Veel kinderen sporten te weinig.' Voorbeeld: 'Neem nou de klas van juf Lin: maar acht van de dertig kinderen zitten op een sport.' Algemeen → één echt geval." },
          ],
          basiskennis: [
            { onderwerp: "Specifiek = teken van voorbeeld", uitleg: "Zie je ineens een naam, een plek of één precies geval? Grote kans dat de alinea iets komt laten zien bij de uitleg ervoor." },
          ],
          niveaus: {
            basis: "De alinea begint met 'Kijk maar naar...' en gaat over één echte tuin van één meneer. Wat doet een schrijver als hij zoiets laat zien?",
            simpeler: "Alinea 2 vertelde hoe het bij álle egels werkt. Deze alinea laat één écht geval zien om dat te bewijzen. Welke taak is dat?",
            nogSimpeler: "Wat doe je als iemand je niet gelooft en je zegt: 'Kijk maar naar de tuin van de buurman'?",
          },
        },
      },
      {
        q: "Wat is de functie van **alinea 2** van de egel-tekst?",
        options: [
          "De schrijver legt uit waarom een egel nuttig is voor de tuin",
          "De schrijver geeft een voorbeeld met een naam erbij",
          "De schrijver maakt de lezer nieuwsgierig naar de tekst",
          "De schrijver geeft een tip voor de herfst",
        ],
        answer: 0,
        evidence: "Doordat de egel ze opeet, blijven bloemen en groenten gezond.",
        wrongHints: [
          null,
          "Zoek eens een naam in deze alinea... vind je er geen? Waar zit die naam wél — en wat doet déze alinea dan?",
          null,
          "De blaadjes-tip staat helemaal aan het einde van de tekst. Wat doet deze alinea met het woordje 'doordat'?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het signaalwoord", tekst: "In de alinea staat 'Doordat de egel ze opeet, blijven bloemen en groenten gezond.' Het woord 'doordat' verklapt: hier wordt iets uitgelegd — oorzaak en gevolg." },
            { titel: "Algemeen of specifiek?", tekst: "Deze alinea gaat over álle egels ('Een egel eet elke nacht...'), niet over één tuin met een naam. Algemene informatie hoort bij uitleg." },
            { titel: "Wat weet je nu méér?", tekst: "Na deze alinea snap je hóé de egel de tuin helpt: hij eet de beestjes op die planten kapotmaken. Snappen hoe iets werkt = de schrijver heeft het uitgelegd." },
          ],
          woorden: [
            { woord: "uitleggen", uitleg: "Vertellen hoe of waarom iets zo is, zodat de lezer het snapt." },
            { woord: "oorzaak en gevolg", uitleg: "Het één komt door het ander: egel eet slakken (oorzaak) → planten blijven heel (gevolg)." },
          ],
          theorie: "**Uitleg-alinea's herkennen**\n\nEen uitleg-alinea beantwoordt een hoe- of waarom-vraag: hoe werkt het, waarom is het zo?\n\nSignaalwoorden van uitleg:\n- **doordat / daardoor / omdat** — oorzaak en gevolg\n- **zo / dus** — conclusie van de uitleg\n- **want** — reden\n\nVerschil met een voorbeeld: uitleg is **algemeen** (geldt voor alle egels), een voorbeeld is **specifiek** (die ene tuin van meneer Baas).",
          voorbeelden: [
            { type: "uitleg", tekst: "'IJs drijft doordat bevroren water lichter is dan gewoon water.' → een waarom-vraag beantwoord met 'doordat' = uitleg." },
          ],
          basiskennis: [
            { onderwerp: "Hoe/waarom beantwoord = uitleg", uitleg: "Vraag jezelf na de alinea: snap ik nu hoe of waarom iets werkt? Ja? Dan was de functie van de alinea: iets duidelijk maken." },
          ],
          niveaus: {
            basis: "In de alinea staat het woordje 'doordat'. Wat doet een schrijver die vertelt hoe het één door het ander komt?",
            simpeler: "Na deze alinea snap je hóé de egel de tuin helpt. Wat heeft de schrijver dan gedaan?",
            nogSimpeler: "Welke taak past bij een alinea die antwoord geeft op de vraag 'waarom is een egel nuttig?'",
          },
        },
      },
      {
        q: "Wat doet de schrijver in **alinea 4** (de laatste alinea)?",
        options: [
          "Hij geeft zijn mening en sluit de tekst af",
          "Hij legt uit wat een egel allemaal eet",
          "Hij geeft een voorbeeld uit de tuin van meneer Baas",
          "Hij stelt de lezer een vraag over de zomer",
        ],
        answer: 0,
        evidence: "Kortom: een egel in de tuin is een cadeautje. Daarom verdient dit dier onze hulp.",
        wrongHints: [
          null,
          "Het menu van de egel stond al eerder in de tekst. Waar wijst het woordje 'kortom' op?",
          "Meneer Baas woont in een ándere alinea. Lees alinea 4 nog eens: wat vindt de schrijver van egels?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken de signaalwoorden", tekst: "'Kortom' betekent: ik vat het nog één keer kort samen. En 'verdient onze hulp' — dat is geen feit, dat is wat de schrijver víndt." },
            { titel: "Kijk naar de plek", tekst: "Het is de laatste alinea. Daar rondt een schrijver af: even samenvatten, zijn mening geven en vaak nog een tip voor de lezer." },
            { titel: "Zie je de tip?", tekst: "'Laat in de herfst een hoekje met bladeren liggen' — de schrijver geeft de lezer iets mee om zelf te doen. Klassieke afsluiting." },
          ],
          woorden: [
            { woord: "mening", uitleg: "Wat iemand ergens van vindt. Herkenbaar aan woorden als 'ik vind', 'verdient', 'zou moeten', 'gelukkig'." },
            { woord: "slot", uitleg: "Het einde van de tekst: samenvatten, mening geven of een tip meegeven." },
          ],
          theorie: "**Feit of mening? En hoe herken je het slot?**\n\n- Een **feit** kun je controleren: 'Een egel eet slakken.' Waar of niet waar — dat kun je nakijken.\n- Een **mening** kun je niet nakijken: 'Een egel is een cadeautje.' Daar kun je het mee eens of oneens zijn.\n\nHet **slot** herken je aan drie dingen: het is de laatste alinea, er staan samenvat-woorden ('kortom', 'dus', 'daarom'), en er komt vaak een mening of een tip in voor. In deze tekst alle drie raak!",
          voorbeelden: [
            { type: "feit-vs-mening", tekst: "'Een egel heeft zo'n vijfduizend stekels' = feit (na te tellen). 'Egels zijn de leukste tuindieren' = mening (daar kun je over twisten)." },
          ],
          basiskennis: [
            { onderwerp: "Kortom = samenvat-signaal", uitleg: "Zie je 'kortom', 'dus' of 'daarom' in de laatste alinea? De schrijver is aan het afronden." },
          ],
          niveaus: {
            basis: "De alinea begint met 'kortom' en staat helemaal achteraan. Wat doet een schrijver op die plek?",
            simpeler: "'Een cadeautje' en 'verdient onze hulp' — zijn dat feiten die je kunt nakijken, of vindt de schrijver dat?",
            nogSimpeler: "Wat doet een schrijver in de allerlaatste alinea, vlak voor de tekst stopt?",
          },
        },
      },
    ],
  },

  // ── Stap 3 ──────────────────────────────────────────────────────
  {
    title: "Tussenkopjes kiezen",
    explanation: `Boven een alinea staat vaak een **tussenkopje**: een paar woorden die vertellen waar het stukje eronder over gaat. Een tussenkopje is een **wegwijzer** — net als een bordje in de supermarkt. Zie je het bordje 'Zuivel'? Dan weet je: hier staan melk en yoghurt. Zie je het kopje 'Eten zoeken'? Dan weet je: dit stukje gaat over eten zoeken.

Op de Doorstroomtoets krijg je heel vaak deze vraag: *"Welk tussenkopje past het best boven alinea 3?"* En daar zitten twee beruchte valkuilen in:

**Valkuil 1 — te smal.** Het kopje gaat maar over één zinnetje uit de alinea. Bij een alinea over vacht, vet én oren van de ijsbeer past het kopje 'Kleine oren' niet: dat dekt maar één zin.

**Valkuil 2 — te breed.** Het kopje is zó algemeen dat het boven de héle tekst zou passen, of zelfs boven duizend andere teksten. 'Alles over dieren' zegt niets over dít stukje.

**De pas-test:** een goed tussenkopje past bij **álle zinnen van de alinea** — en alléén bij deze alinea. Werkt net als de paraplu-test bij de kernzin! Sterker nog: de kernzin is vaak je beste hulp. Vind de kernzin, maak hem kort — en je hebt bijna altijd het goede kopje.

Oefen nu met vier vragen. Let goed op de te-smalle en te-brede instinkers!`,
    checks: [
      {
        q: "Wat doet een tussenkopje?",
        options: [
          "Het vertelt in een paar woorden waar het stukje eronder over gaat",
          "Het geeft alvast de antwoorden op de vragen bij de tekst",
          "Het vertelt hoe de tekst afloopt",
          "Het maakt de tekst netjes even lang",
        ],
        answer: 0,
        evidence: "Een tussenkopje is een wegwijzer — net als een bordje in de supermarkt.",
        wrongHints: [
          null,
          "Zou een schrijver de antwoorden zomaar verklappen? Denk aan het bordje in de supermarkt: wat vertelt dat je?",
          "Dan zou je het einde al kennen! Waar wijst het bordje boven een stúkje naartoe?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Denk aan de supermarkt", tekst: "Boven elk gangpad hangt een bordje: 'Zuivel', 'Brood', 'Snoep'. Je hoeft niet elk schap af te lopen — het bordje wijst je de weg." },
            { titel: "Zo werkt het in een tekst", tekst: "Het tussenkopje boven een alinea vertelt in een paar woorden waar dat stukje over gaat. Zoek je iets over het licht van de vuurtoren? Dan spring je meteen naar dát kopje." },
            { titel: "Waarom vraagt de toets dit?", tekst: "Wie het juiste kopje bij een alinea kan kiezen, laat zien dat hij snapt waar de alinea over gaat. Daarom is het dé klassieke toetsvraag." },
          ],
          woorden: [
            { woord: "tussenkopje", uitleg: "Een paar woorden boven een alinea die vertellen waar het stukje eronder over gaat. Vaak dikgedrukt." },
            { woord: "wegwijzer", uitleg: "Iets dat je de weg wijst, zoals een bordje. Je weet meteen waar je moet zijn." },
          ],
          theorie: "**Titel vs tussenkopje**\n\nNiet verwarren:\n\n- De **titel** staat boven de héle tekst en dekt het grote onderwerp ('De vuurtoren: licht in de nacht').\n- Een **tussenkopje** staat boven één alinea en dekt alleen dát deelonderwerp ('Het werk van de wachter').\n\nDaarom is een goed tussenkopje nooit zo breed als de titel: dan zou het boven de hele tekst passen in plaats van boven één stukje.",
          voorbeelden: [
            { type: "wegwijzer", tekst: "Je zoekt in een tekst over katten hoe oud katten worden. Je scant de kopjes: 'Spelen', 'Eten', 'Hoe oud wordt een kat?' — bingo, je leest alleen dat stukje." },
          ],
          basiskennis: [
            { onderwerp: "Kopjes = sneller zoeken", uitleg: "Tussenkopjes zijn er voor de lezer: je vindt sneller wat je zoekt zonder alles te lezen." },
          ],
          niveaus: {
            basis: "Denk aan het bordje 'Zuivel' in de supermarkt. Wat doet dat bordje voor jou?",
            simpeler: "Een tussenkopje verklapt geen antwoorden en geen einde. Het wijst alleen ergens naartoe — waar naartoe?",
            nogSimpeler: "Zoek het antwoord met 'het stukje eronder' erin.",
          },
        },
      },
      {
        q: "*\"Een ijsbeer heeft een dikke vacht en daaronder een flinke laag vet. Samen houden die de kou tegen, zelfs bij dertig graden vorst. Ook zijn kleine oren helpen: zo verliest hij weinig warmte. Het lichaam van de ijsbeer is helemaal gebouwd op de kou.\"* — Welk tussenkopje past het best boven deze alinea?",
        options: [
          "Gebouwd op de kou",
          "Kleine oren",
          "Alles over dieren",
          "Jagen op zeehonden",
        ],
        answer: 0,
        evidence: "Het lichaam van de ijsbeer is helemaal gebouwd op de kou.",
        wrongHints: [
          null,
          "Dat gaat maar over één zinnetje. Past dit kopje ook bij de vacht en de vetlaag?",
          "Zou dit kopje niet boven duizend andere teksten passen? Een goed kopje past precies bij dít stukje.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Doe de pas-test", tekst: "Loop de zinnen langs: vacht, vet, oren, en de slotzin over het hele lichaam. Het kopje moet bij ál die zinnen passen." },
            { titel: "Streep de instinkers weg", tekst: "Eén optie dekt maar één zin (te smal). Eén optie past boven zo'n beetje elke dierentekst (te breed). Eén optie gaat over iets dat helemaal niet in de alinea staat." },
            { titel: "Gebruik de kernzin", tekst: "De laatste zin vat alles samen: het hele lichaam is gebouwd op de kou. Maak die kernzin kort — en je hebt je kopje." },
          ],
          woorden: [
            { woord: "te smal", uitleg: "Een kopje dat maar over één zinnetje van de alinea gaat, niet over het hele stukje." },
            { woord: "te breed", uitleg: "Een kopje dat zó algemeen is dat het boven de hele tekst (of elke tekst) zou kunnen staan." },
          ],
          theorie: "**De pas-test in drie vragen**\n\nTest elk kopje zo:\n\n1. **Past het bij álle zinnen?** Nee → te smal, weg ermee.\n2. **Past het alléén bij deze alinea?** Nee, het past boven elke tekst → te breed, weg ermee.\n3. **Staat het er überhaupt in?** Gaat het kopje over iets dat de alinea niet noemt → fout onderwerp, weg ermee.\n\nWat overblijft is het goede kopje. Tip: de kernzin van de alinea kort maken levert bijna altijd het juiste kopje op.",
          voorbeelden: [
            { type: "pas-test", tekst: "Alinea over ontbijt (brood, melk, fruit). Kopje 'Melk' = te smal. Kopje 'Gezond leven' = te breed. Kopje 'Een goed ontbijt' = precies goed." },
          ],
          basiskennis: [
            { onderwerp: "Kernzin → kopje", uitleg: "Vind eerst de kernzin van de alinea en maak hem kort. Dat is meestal het beste tussenkopje." },
          ],
          niveaus: {
            basis: "De alinea noemt vacht, vet én oren — en de slotzin vat alles samen. Welk kopje past bij ál die zinnen tegelijk?",
            simpeler: "Streep weg: welk kopje gaat maar over één zinnetje? Welk kopje past boven élke dierentekst? Welk kopje gaat over iets dat er niet in staat? Wat blijft over?",
            nogSimpeler: "Lees de laatste zin van de alinea en maak hem heel kort.",
          },
        },
      },
      {
        q: "*\"Een regenboog zie je alleen als de zon schijnt terwijl het regent. Elke regendruppel breekt het zonlicht dan in zeven kleuren. Al die druppels samen vormen de gekleurde boog aan de hemel. Sta je met de zon in je rug, dan zie je hem het best.\"* — Welk tussenkopje past het best boven deze alinea?",
        options: [
          "Zo ontstaat een regenboog",
          "Het weer",
          "Zeven kleuren",
          "Verven met waterverf",
        ],
        answer: 0,
        evidence: "Een regenboog zie je alleen als de zon schijnt terwijl het regent.",
        wrongHints: [
          null,
          "Dat kopje past boven het journaal, boven een tekst over storm én boven eentje over sneeuw. Is het niet veel te ruim voor dit ene stukje?",
          "De kleuren zijn maar één zinnetje van de alinea. Waar gaat het héle stukje over?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Waar gaat het hele stukje over?", tekst: "Zin voor zin: wanneer je een regenboog ziet, hoe de druppels het licht breken, hoe de boog ontstaat, waar je moet staan. Alles draait om het ontstaan en zien van de regenboog." },
            { titel: "Herken de te-brede instinker", tekst: "Eén kopje is zó ruim dat het boven bijna elke tekst over buiten past. Dat is de valkuil: het klinkt niet fóút, maar het wijst nergens precies naartoe." },
            { titel: "Herken de te-smalle instinker", tekst: "Eén kopje pakt één detail uit één zin. Ook een valkuil: het klínkt alsof het erbij hoort, maar het dekt de lading niet." },
          ],
          woorden: [
            { woord: "de lading dekken", uitleg: "Precies passen bij alles wat er staat — niet te veel en niet te weinig." },
          ],
          theorie: "**Waarom 'te breed' zo'n gemene instinker is**\n\nEen te breed kopje is nooit onwáár — de alinea gaat immers óók over het weer. Daarom trappen veel kinderen erin.\n\nDe truc om hem te ontmaskeren: stel jezelf de vraag *'zou dit kopje ook boven een heel ándere tekst kunnen staan?'* Kan dat makkelijk? Dan is het kopje te breed voor dit ene stukje.\n\nEen goed tussenkopje is als een huissleutel: hij past op precies één deur.",
          voorbeelden: [
            { type: "te-breed", tekst: "Alinea over hoe bijen honing maken. Kopje 'De natuur' past boven miljoenen teksten → te breed. Kopje 'Van bloem tot honing' past op precies deze deur." },
          ],
          basiskennis: [
            { onderwerp: "Niet fout ≠ goed", uitleg: "Op de toets is het beste antwoord het kopje dat het meest precies past. Een kopje dat 'ook wel kan' verliest het van een kopje dat precies past." },
          ],
          niveaus: {
            basis: "Alle vier de zinnen gaan over hoe die gekleurde boog aan de hemel komt en wanneer je hem ziet. Welk kopje zegt precies dát?",
            simpeler: "Doe de sleutel-test: welk kopje past alléén op dit stukje — en niet ook op duizend andere teksten?",
            nogSimpeler: "Waar gaat élke zin van dit stukje over? Zoek het kopje met dat woord erin.",
          },
        },
      },
      {
        q: "Boven een alinea staat het tussenkopje **'Eten voor de winter'**. Welke alinea past daar het best onder?",
        options: [
          "De eekhoorn verstopt in de herfst overal nootjes. Zo heeft hij in de koude maanden altijd iets te eten. Soms vergeet hij een verstopplek — daar groeit dan een nieuw boompje.",
          "De eekhoorn heeft een prachtige rode pluimstaart. Daarmee houdt hij zijn evenwicht als hij van tak naar tak springt.",
          "In het bos groeien veel soorten bomen: eiken, beuken en dennen. Elke boom heeft zijn eigen blad.",
          "Sommige vogels vliegen in de herfst naar het warme zuiden. In de lente komen ze weer terug.",
        ],
        answer: 0,
        evidence: "De eekhoorn verstopt in de herfst overal nootjes. Zo heeft hij in de koude maanden altijd iets te eten.",
        wrongHints: [
          null,
          "Een staart is geen eten. Lees het kopje nog eens: waar moet de alinea over gaan?",
          null,
          "Deze dieren gaan wel de winter door, maar wat dóén ze: eten verstoppen of iets heel anders?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Lees het kopje als een belofte", tekst: "'Eten voor de winter' belooft: dit stukje gaat over eten verzamelen of bewaren voor de koude tijd. De alinea eronder moet die belofte waarmaken." },
            { titel: "Test elke alinea", tekst: "Gaat de alinea over eten? En over de winter? Alleen het stukje over nootjes verstoppen voor de koude maanden zegt op allebei ja." },
            { titel: "Pas op voor half-passers", tekst: "De vogel-alinea gaat wél over de winter, maar niet over eten. Half passen is niet genoeg — het kopje moet de hele alinea dekken en andersom." },
          ],
          woorden: [
            { woord: "belofte van het kopje", uitleg: "Wat het kopje aankondigt, moet ook echt in de alinea staan. Kopje en alinea horen bij elkaar als deksel en pan." },
          ],
          theorie: "**De vraag kan twee kanten op**\n\nOp de Doorstroomtoets komt deze vraag in twee richtingen:\n\n1. **Alinea gegeven → kies het kopje** (zoals de vorige vragen).\n2. **Kopje gegeven → kies de alinea** (zoals deze vraag).\n\nDe aanpak blijft precies hetzelfde: kopje en alinea moeten volledig bij elkaar passen. Splits het kopje in stukjes ('eten' + 'voor de winter') en check of de alinea over állebei gaat. Eén stukje mist? Dan is het niet de goede combinatie.",
          voorbeelden: [
            { type: "splitsen", tekst: "Kopje 'Spelen in de sneeuw': de alinea moet over spelen gaan én over sneeuw. Een alinea over sleeën past; een alinea over sneeuwschuivers ruimen niet." },
          ],
          basiskennis: [
            { onderwerp: "Kopje splitsen", uitleg: "Splits het kopje in zijn losse delen en check of de alinea over elk deel gaat. Half raak = fout antwoord." },
          ],
          niveaus: {
            basis: "Het kopje heeft twee delen: het gaat over eten én over de winter. Welke alinea gaat over allebei?",
            simpeler: "Streep weg wat maar half past: welke alinea gaat wel over de winter maar niet over eten? Welke over een dier maar niet over eten? Wat blijft over?",
            nogSimpeler: "Zoek de alinea waarin een dier eten bewaart voor de koude maanden.",
          },
        },
      },
    ],
  },

  // ── Stap 4 ──────────────────────────────────────────────────────
  {
    title: "Doorstroomtoets-oefening — de vuurtoren",
    explanation: tekstVuurtoren + `

Dit is 'm: een informatieve tekst met vragen zoals je ze écht op de Doorstroomtoets krijgt. Alles wat je geleerd hebt komt samen: de kernzin vinden, de functie van een alinea herkennen én het beste tussenkopje kiezen.

Pak bij elke vraag je vaste aanpak erbij:

1. **Zoek de goede alinea op** — tel de stukjes als dat nodig is.
2. **Vind de kernzin** — vaak vooraan, en alle andere zinnen passen eronder.
3. **Doe de pas-test bij kopjes** — niet te smal (één zinnetje), niet te breed (past boven de hele tekst), en het moet over dít stukje gaan.

Neem de tijd om steeds even terug te lezen in de tekst — dat opzoeken hoort bij de toets. Succes!`,
    checks: [
      {
        q: "Welk tussenkopje past het best boven **alinea 2**?",
        options: [
          "Zo werkt het licht",
          "De spiegels",
          "Alles over de zee",
          "Het zware werk van de wachter",
        ],
        answer: 0,
        evidence: "Het licht van een vuurtoren werkt slim.",
        wrongHints: [
          null,
          "De spiegels zijn maar een klein stukje van het verhaal. Past dit kopje ook bij het ritme van flitsen?",
          "Zou dit kopje niet boven honderd andere teksten kunnen staan? Zoek iets dat precies bij dít stukje past.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Vind de kernzin", tekst: "Alinea 2 begint met: 'Het licht van een vuurtoren werkt slim.' Alle zinnen erna leggen uit hóé het werkt: de draaiende lamp, het flitsen, het eigen ritme." },
            { titel: "Maak de kernzin kort", tekst: "De kernzin kort maken levert je kopje op. Iets met het licht en hoe het werkt — dat dekt de hele alinea." },
            { titel: "Streep de instinkers weg", tekst: "Eén kopje dekt maar één onderdeeltje uit één zin. Eén kopje is zo breed dat het overal boven past. En één kopje hoort bij een heel andere alinea." },
          ],
          woorden: [
            { woord: "lens", uitleg: "Gebogen glas dat licht bundelt of juist verspreidt — zoals in een bril of een vergrootglas." },
            { woord: "ritme", uitleg: "Een vast patroon dat zich herhaalt, zoals de flitsen van de vuurtoren: kort-kort-lang, en dan weer opnieuw." },
          ],
          theorie: "**Kopje van een verkeerde alinea — instinker nummer drie**\n\nNaast te smal en te breed is er een derde instinker: een kopje dat wél bij de tekst hoort, maar bij een ándere alinea. 'Het zware werk van de wachter' komt echt in de tekst voor — maar in alinea 3, niet in alinea 2.\n\nDaarom: lees altijd eerst de alinea waar de vraag over gaat, en kies dan pas. Wie alleen de kopjes leest en denkt 'dat stond in de tekst!', trapt hier in.",
          voorbeelden: [
            { type: "verkeerde-alinea", tekst: "Tekst over de bakker: alinea 2 gaat over brood kneden, alinea 3 over de oven. Het kopje 'De hete oven' hoort dan bij alinea 3 — ook al klinkt het bekend bij alinea 2." },
          ],
          basiskennis: [
            { onderwerp: "Eerst de alinea, dan het kopje", uitleg: "Kies nooit een kopje omdat het 'ergens in de tekst' voorkomt. Het moet passen bij precies de alinea waar de vraag over gaat." },
          ],
          niveaus: {
            basis: "Lees de eerste zin van alinea 2 nog eens. Alle andere zinnen leggen uit hóé dat zit. Welk kopje vat dat samen?",
            simpeler: "Streep weg: welk kopje gaat maar over één onderdeeltje? Welk kopje past boven bijna elke tekst? Welk kopje hoort bij een ándere alinea? Wat blijft over?",
            nogSimpeler: "Waar gaat élke zin van alinea 2 over: over de zee, over de wachter — of over hoe het licht zijn werk doet?",
          },
        },
      },
      {
        q: "Welk tussenkopje past het best boven **alinea 3**?",
        options: [
          "De vuurtorenwachter van vroeger",
          "Olie bijvullen",
          "De geschiedenis van Nederland",
          "Computers in de toren",
        ],
        answer: 0,
        evidence: "Vroeger woonde er een vuurtorenwachter in de toren.",
        wrongHints: [
          null,
          "Dat is maar één van zijn taken, uit één zinnetje. Wie deed al dat werk — en past dát boven de hele alinea?",
          "Gaat deze alinea over het hele land, of over één beroep in één toren? Pas op voor een kopje dat veel te ruim zit.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Vind de kernzin", tekst: "De eerste zin: 'Vroeger woonde er een vuurtorenwachter in de toren.' De rest van de alinea beschrijft zijn taken en zijn zware werk." },
            { titel: "Doe de pas-test", tekst: "Het kopje moet de wachter dekken (lamp aansteken, wacht houden, olie, lenzen, treden klimmen) én laten zien dat het over vroeger gaat." },
            { titel: "Ontmasker de instinkers", tekst: "Olie bijvullen: één taak uit één zin — te smal. De geschiedenis van heel Nederland — veel te breed. Computers — die horen bij de alinea over nú." },
          ],
          woorden: [
            { woord: "vuurtorenwachter", uitleg: "De persoon die vroeger in de vuurtoren woonde en zorgde dat het licht altijd brandde." },
            { woord: "de wacht houden", uitleg: "Wakker blijven en opletten of alles goed gaat, bijvoorbeeld 's nachts." },
          ],
          theorie: "**Tijd-woorden in kopjes**\n\nDeze tekst springt in de tijd: alinea 3 gaat over vróéger, alinea 4 over nú. Goede tussenkopjes laten dat verschil zien.\n\nLet daarom op tijd-signalen in de alinea ('vroeger', 'tegenwoordig', 'nu', 'in de toekomst') — het beste kopje past ook qua tíjd bij de alinea. Een kopje over computers past niet boven een alinea over honderd jaar geleden.",
          voorbeelden: [
            { type: "tijd", tekst: "Alinea die begint met 'Honderd jaar geleden gingen kinderen lopend naar school...' → een passend kopje heeft iets van vroeger in zich, bijvoorbeeld met het woord 'toen' of 'vroeger' erin." },
          ],
          basiskennis: [
            { onderwerp: "Tijd moet kloppen", uitleg: "Check bij een kopje niet alleen het onderwerp, maar ook de tijd: vroeger of nu? Het kopje moet bij allebei passen." },
          ],
          niveaus: {
            basis: "De alinea begint met het woord 'vroeger' en gaat daarna over één beroep. Welk kopje past bij dat beroep én bij die tijd?",
            simpeler: "Streep weg: één kopje is maar één taakje, één kopje is een heel land, één kopje hoort bij de tijd van nú. Wat blijft over?",
            nogSimpeler: "Over wie gaat bijna elke zin van alinea 3? Zoek het kopje met die persoon erin.",
          },
        },
      },
      {
        q: "Welk tussenkopje past het best boven **alinea 4**?",
        options: [
          "De vuurtoren van nu",
          "Satellieten",
          "Techniek",
          "Honderden treden klimmen",
        ],
        answer: 0,
        evidence: "Tegenwoordig gaat bijna alles automatisch.",
        wrongHints: [
          null,
          "Satellieten staan in maar één zinnetje. Past dat kopje ook bij het reservelicht en bij de mensen die de torens prachtig vinden?",
          "Dat kopje past boven een tekst over telefoons, auto's én raketten. Zoek iets dat precies dít stukje dekt.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar het tijd-signaal", tekst: "Alinea 4 opent met 'Tegenwoordig'. Dit stukje gaat dus over de vuurtoren in onze tijd — het spiegelbeeld van alinea 3 over vroeger." },
            { titel: "Doe de pas-test", tekst: "Het kopje moet dekken: computers bedienen de lamp, satellieten wijzen de weg, torens branden nog als reservelicht, en mensen vinden ze mooi. Alles over de vuurtoren van deze tijd." },
            { titel: "Streep weg", tekst: "Eén optie is één zinnetje. Eén optie is een woord dat boven duizend teksten past. En één optie komt uit de vroeger-alinea." },
          ],
          woorden: [
            { woord: "automatisch", uitleg: "Vanzelf, zonder dat er een mens aan te pas komt. Een computer doet het werk." },
            { woord: "satelliet", uitleg: "Een apparaat dat hoog boven de aarde rondvliegt en bijvoorbeeld helpt bij het bepalen van je plek." },
          ],
          theorie: "**Eén woord is bijna nooit een goed kopje**\n\nKopjes van één los, algemeen woord ('Techniek', 'Dieren', 'Sport') zijn bijna altijd te breed. Ze passen overal en wijzen nergens precies naartoe.\n\nEen goed tussenkopje heeft meestal twee of meer woorden die samen het deelonderwerp vastpakken: niet 'Techniek' maar iets over déze toren in déze tijd. Zie je op de toets een één-woord-kopje tussen de opties? Wees extra kritisch: check of het niet de te-breed-instinker is.",
          voorbeelden: [
            { type: "een-woord", tekst: "Alinea over hoe een wasmachine werkt. Kopje 'Techniek' = past boven alles. Kopje 'Zo wast de machine' = pakt precies dit stukje vast." },
          ],
          basiskennis: [
            { onderwerp: "Spiegel-alinea's", uitleg: "Teksten zetten vaak vroeger en nu naast elkaar. De kopjes horen dat verschil te laten zien: één kopje met vroeger, één met nu." },
          ],
          niveaus: {
            basis: "De alinea begint met 'Tegenwoordig'. Welk kopje laat zien dat dit stukje over deze tijd gaat én over de vuurtoren?",
            simpeler: "Twee instinkers zijn te klein (één zinnetje) of te groot (past overal). Eén hoort bij de vroeger-alinea. Wat blijft over?",
            nogSimpeler: "Alinea 3 ging over vroeger. Waar gaat alinea 4 dan over? Zoek het kopje dat dat zegt.",
          },
        },
      },
      {
        q: "Welke zin is de **kernzin** van alinea 3?",
        options: [
          "Vroeger woonde er een vuurtorenwachter in de toren.",
          "Ook moest hij olie bijvullen en de lenzen schoonpoetsen.",
          "Het was zwaar werk, want de wachter klom elke dag honderden treden.",
          "Hij stak elke avond de lamp aan en hield 's nachts de wacht.",
        ],
        answer: 0,
        evidence: "Vroeger woonde er een vuurtorenwachter in de toren.",
        wrongHints: [
          null,
          "Olie en lenzen zijn twee losse taken. Onder welke zin passen ál die taken?",
          null,
          "De lamp en de wacht zijn ook taken — details dus. Welke zin is de paraplu waar alle taken onder passen?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Doe de paraplu-test", tekst: "Lees alinea 3 zin voor zin. Lamp aansteken, wacht houden, olie bijvullen, lenzen poetsen, treden klimmen — allemaal dingen die de wachter deed." },
            { titel: "Zoek de paraplu", tekst: "Welke zin dekt al die taken? De openingszin stelt de wachter voor: dat er zo iemand in de toren woonde. Alle taken-zinnen passen daaronder." },
            { titel: "Check de plek", tekst: "De kernzin staat hier vooraan — zoals meestal. De schrijver stelt eerst het deelonderwerp voor (de wachter) en vult daarna de details in." },
          ],
          woorden: [
            { woord: "paraplu-test", uitleg: "Controleren of alle andere zinnen van de alinea onder één zin passen. Die ene zin is de kernzin." },
          ],
          theorie: "**Kernzin en tussenkopje zijn familie**\n\nZie je hoe alles samenhangt?\n\n- De **kernzin** van alinea 3 gaat over de wachter die vroeger in de toren woonde.\n- Het beste **tussenkopje** boven alinea 3 gaat óók over die wachter van vroeger.\n\nDat is geen toeval: het tussenkopje is eigenlijk de kernzin in het kort. Vind je de één, dan heb je de ander bijna gratis. Op de toets kun je die twee vraagsoorten dus met dezelfde aanpak kraken.",
          voorbeelden: [
            { type: "familie", tekst: "Kernzin: 'Herfst is een kleurrijk seizoen.' → tussenkopje: 'Kleuren in de herfst'. Zelfde inhoud, andere lengte." },
          ],
          basiskennis: [
            { onderwerp: "Details = taken, weetjes, voorbeelden", uitleg: "Zinnen die één losse taak of één weetje noemen, zijn details. De kernzin is de zin die ze allemaal samenbindt." },
          ],
          niveaus: {
            basis: "Vier zinnen noemen losse taken. Welke zin stelt de persoon voor die al die taken deed?",
            simpeler: "Doe de paraplu-test: onder welke zin passen de lamp, de olie, de lenzen én de treden allemaal?",
            nogSimpeler: "Kijk naar de allereerste zin van alinea 3 — passen alle andere zinnen daaronder?",
          },
        },
      },
      {
        q: "Wat is de functie van **alinea 1** van de vuurtoren-tekst?",
        options: [
          "Het is de inleiding: de lezer maakt kennis met het onderwerp",
          "De schrijver geeft zijn mening over vuurtorens",
          "Het is het slot: de tekst wordt samengevat",
          "De schrijver geeft een voorbeeld van één schipper",
        ],
        answer: 0,
        evidence: "Langs de Nederlandse kust staan tientallen vuurtorens.",
        wrongHints: [
          null,
          "Staat er ergens 'ik vind' of 'prachtig' in deze alinea? Of vertelt hij vooral wát een vuurtoren is?",
          "Kan het einde vooraan staan? Kijk waar deze alinea zit en wat hij doet.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar de plek", tekst: "Alinea 1 staat helemaal vooraan. Daar verwacht je de kennismaking met het onderwerp — controleer of de inhoud dat bevestigt." },
            { titel: "Kijk naar de inhoud", tekst: "De alinea vertelt wát een vuurtoren is en waarvoor hij dient. Geen mening, geen los voorbeeld met een naam — algemene kennismaking dus." },
            { titel: "Vergelijk met het slot", tekst: "De méning ('veel mensen vinden de torens prachtig') zit pas in de laatste alinea. Zo zie je: begin = kennismaken, einde = afronden." },
          ],
          woorden: [
            { woord: "informatieve tekst", uitleg: "Een tekst die je vooral iets wil léren of vertellen, zoals deze tekst over vuurtorens." },
            { woord: "zeelieden", uitleg: "Mensen die op schepen werken en over zee varen." },
          ],
          theorie: "**De vaste bouw van een informatieve tekst**\n\nDe meeste informatieve teksten volgen dit patroon:\n\n1. **Inleiding** — kennismaken met het onderwerp (alinea 1).\n2. **Middenstuk** — uitleg en informatie per deelonderwerp (alinea 2 en 3).\n3. **Slot** — afronden, vaak met een blik op nu of de toekomst (alinea 4).\n\nKen je dit patroon, dan kun je functie-vragen vaak al half beantwoorden vóór je precies leest: vooraan zit de kennismaking, achteraan de afronding. Maar controleer altijd even met de inhoud!",
          voorbeelden: [
            { type: "bouw", tekst: "Tekst over de brandweer: alinea 1 stelt de brandweer voor, alinea 2 en 3 vertellen over het werk en het materiaal, alinea 4 sluit af met hoe je zelf brandweerman wordt." },
          ],
          basiskennis: [
            { onderwerp: "Begin-midden-eind", uitleg: "Vrijwel elke goede tekst heeft een kop (kennismaken), een romp (informatie) en een staart (afronden)." },
          ],
          niveaus: {
            basis: "Deze alinea staat vooraan en vertelt wat een vuurtoren is en waarvoor hij dient. Welke taak hoort bij zo'n eerste kennismaking?",
            simpeler: "Er staat geen mening in en geen persoon met een naam — de alinea stelt alleen het onderwerp aan je voor. Hoe heet dat deel van een tekst?",
            nogSimpeler: "Hoe noem je het allereerste stukje van een tekst, waar je het onderwerp leert kennen?",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const alineaFunctiesTussenkopjesPo = {
  id: "alinea-functies-tussenkopjes-po",
  title: "Alinea's en tussenkopjes — welk kopje past erboven?",
  emoji: "📑",
  level: "groep6-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — tekststructuur: alinea's, kernzinnen en tussenkopjes",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
  ],
  intro:
    "\"Welk tussenkopje past het best boven alinea 3?\" — dé klassieke vraagvorm op de Doorstroomtoets begrijpend lezen. Leer wat een alinea is, hoe je de kernzin vindt (vaak vooraan!), welke taak een alinea heeft in de tekst, en hoe je het beste tussenkopje kiest — zonder in de te-smal- of te-breed-valkuil te trappen. Met eigen oefenteksten en een toets-stijl eindopdracht.",
  triggerKeywords: [
    "alinea", "alinea's", "tussenkopje", "tussenkopjes", "kopje kiezen",
    "welk kopje past", "kernzin", "belangrijkste zin", "deelonderwerp",
    "functie alinea", "tekststructuur", "tekstopbouw", "witregel",
    "begrijpend lezen", "doorstroomtoets lezen", "cito begrijpend lezen",
  ],
  chapters,
  steps,
};

export default alineaFunctiesTussenkopjesPo;
