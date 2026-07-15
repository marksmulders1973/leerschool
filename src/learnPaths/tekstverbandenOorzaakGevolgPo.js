// Leerpad: Tekstverbanden — oorzaak en gevolg (met leesbril!)
// Begrijpen wat er in een tekst gebeurt en waaróm. Kinderen leren:
// oorzaak = waardoor het komt, gevolg = wat er daarna gebeurt,
// signaalwoorden als wegwijzers, de omdraai-truc (welke kant wijst
// de pijl op?) en Doorstroomtoets-vragen als "Waardoor kwam het dat...?"
//
// Alle teksten zijn 100% eigen werk. 4 stappen, 16 checks totaal.

const stepEmojis = ["🔍", "🚲", "🧩", "🏆"];

const chapters = [
  { letter: "A", title: "Oorzaak, gevolg en signaalwoorden", emoji: "🔍", from: 0, to: 0 },
  { letter: "B", title: "Speuren in een tekst", emoji: "🚲", from: 1, to: 1 },
  { letter: "C", title: "Lastige gevallen", emoji: "🧩", from: 2, to: 2 },
  { letter: "D", title: "Doorstroomtoets-oefening", emoji: "🏆", from: 3, to: 3 },
];

// ── Tekst voor stap 2: eigen tekst over een lekke band (~150 woorden) ──
const tekstLekkeBand = `**De lekke band van Milan**

Milan fietst elke dag naar school. Vanmorgen reed hij over een scherpe spijker. Daardoor liep zijn achterband langzaam leeg. Halverwege merkte Milan dat trappen steeds zwaarder ging. Hij stapte af en zag de slappe band hangen.

Omdat hij geen pomp bij zich had, moest hij het laatste stuk lopen. Zo kwam hij tien minuten te laat de klas binnen. Juf Karin keek verbaasd op. Milan legde uit wat er was gebeurd. "Dan maken we die band vanmiddag samen," zei de juf, want zij had thuis al heel wat banden geplakt.

Na schooltijd gingen ze aan de slag. Ze duwden de binnenband onder water in een emmer. Er kwamen kleine belletjes omhoog, waardoor ze precies zagen waar het lek zat. Met een plakkertje was de band snel gemaakt.

De volgende ochtend keek Milan extra goed uit voor spijkers op de weg.`;

// ── Tekst voor stap 4: eigen tekst over een storm (~200 woorden) ──────
const tekstKastanjeboom = `**De omgewaaide kastanjeboom**

Zaterdagnacht raasde er een zware storm over het dorp. De wind rukte aan alles wat los en vast zat. De oude kastanjeboom op het schoolplein had al jaren een zieke stam. Doordat het hout van binnen zacht was geworden, hield de boom de harde windstoten niet. Met een enorme knal viel hij om — dwars over het fietsenhok.

Zondagochtend kwam meester Bas kijken. Het fietsenhok was flink beschadigd, dus de kinderen konden hun fietsen er maandag niet neerzetten. De school stuurde alle ouders een bericht: breng je kind deze week lopend of met de auto.

Buurman Ties, die naast de school woont, hoorde het nieuws. Hij is timmerman. Omdat hij de kinderen wilde helpen, bood hij aan het hok gratis te repareren. Een paar vaders hielpen mee. Binnen drie dagen stond er een steviger hok dan ooit.

Van de omgevallen kastanje bleef ook iets moois over. De conciërge zaagde de dikke stam in schijven. Daarvan maakte groep zeven zitjes voor op het plein. Zo zorgde de storm, die eerst alleen maar schade gaf, uiteindelijk toch voor iets nieuws op het schoolplein.`;

const steps = [
  // ── Stap 1 ──────────────────────────────────────────────────────
  {
    title: "Oorzaak, gevolg en signaalwoorden",
    explanation: `Lees deze twee zinnen: *"Er lag een bananenschil op de stoep. Joep gleed uit."*

Au! Maar wáárdoor gleed Joep uit? Juist: door die bananenschil. De schil is de **oorzaak** (waardoor het komt — dat gebeurt eerst) en het uitglijden is het **gevolg** (wat er daarna gebeurt, dóór de oorzaak). Samen vormen ze een pijl: **oorzaak → gevolg**.

Goede lezers zetten hun **leesbril** op: bij alles wat er in een tekst gebeurt, vragen ze zichzelf *"waardoor komt dit?"*. Zo snap je niet alleen WAT er gebeurt, maar ook WAAROM. En dat is precies wat de Doorstroomtoets test.

Gelukkig zet de schrijver vaak wegwijzers neer: **signaalwoorden**. De belangrijkste voor oorzaak en gevolg zijn:

- **omdat, doordat** → hierachter staat de oorzaak
- **daardoor, waardoor** → hierachter staat het gevolg
- **dus, daarom, zodat** → hierachter staat ook het gevolg

Pas op: niet elk verbindingswoord is een oorzaak-woord! *"Eerst, daarna, toen"* vertellen alleen de **volgorde** in tijd. En *"maar"* zet juist een tegenstelling neer.

Zo check je jezelf: zie je een signaalwoord? Teken (in je hoofd) de pijl. Wat is de oorzaak, wat is het gevolg? Klopt de richting? Oefen maar met de vragen hieronder.`,
    checks: [
      {
        q: "*\"Omdat het de hele nacht regende, stond het schoolplein vol plassen.\"* — Wat is de oorzaak?",
        options: [
          "De regen die de hele nacht viel",
          "De plassen op het schoolplein",
          "Het schoolplein",
          "De nacht",
        ],
        answer: 0,
        evidence: "Omdat het de hele nacht regende, stond het schoolplein vol plassen.",
        wrongHints: [
          null,
          "Waren de plassen er eerst, of kwamen ze ergens dóór? Stel de vraag: waardoor staan ze er?",
          null,
          "De nacht vertelt alleen wannéér het gebeurde. Kijk wat er direct achter het woord 'omdat' staat.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Vind het signaalwoord", tekst: "De zin begint met 'omdat'. Dat is een wegwijzer: wat hierachter staat, is de oorzaak — datgene waardoor iets anders komt." },
            { titel: "Teken de pijl", tekst: "Achter 'omdat' staat: het regende de hele nacht. Dat gebeurde eerst. De pijl wijst van het regenen naar de plassen: regenen → plassen." },
            { titel: "Controleer de richting", tekst: "Vraag jezelf: komen de plassen door de regen? Ja, logisch. Komt de regen door de plassen? Nee, onzin. De richting klopt." },
          ],
          woorden: [
            { woord: "oorzaak", uitleg: "Waardoor iets komt. De oorzaak gebeurt eerst." },
            { woord: "gevolg", uitleg: "Wat er daarna gebeurt, dóór de oorzaak." },
            { woord: "omdat", uitleg: "Signaalwoord — wat erachter staat, is de oorzaak (of de reden)." },
          ],
          theorie: "**De pijl van oorzaak naar gevolg**\n\nOorzaak en gevolg horen bij elkaar als een pijl:\n\noorzaak (gebeurt eerst) → gevolg (komt erdoor)\n\nHet signaalwoord verklapt welke kant je op moet kijken:\n- 'omdat' en 'doordat' → erachter staat de oorzaak\n- 'daardoor', 'waardoor', 'dus', 'daarom' → erachter staat het gevolg\n\nTwijfel je? Stel de controle-vraag: 'Komt B echt dóór A?' Als het antwoord ja is, klopt je pijl.",
          voorbeelden: [
            { type: "oorzaak-achter-omdat", tekst: "'Omdat de zon fel scheen, smolt het ijsje snel.' → achter 'omdat' staat de oorzaak: de felle zon. Het smeltende ijsje is het gevolg." },
            { type: "controle-vraag", tekst: "Waardoor smolt het ijsje? Door de zon. De pijl wijst dus: zon → gesmolten ijsje." },
          ],
          basiskennis: [
            { onderwerp: "Oorzaak eerst", uitleg: "De oorzaak gebeurt altijd éérder in de tijd dan het gevolg — ook als de zin het andersom opschrijft." },
          ],
          niveaus: {
            basis: "Kijk wat er direct achter 'omdat' staat — dát is waardoor het kwam.",
            simpeler: "Stel de vraag: waardoor stond het plein vol plassen? Wat gebeurde er de hele nacht?",
            nogSimpeler: "Wat viel er die nacht uit de lucht, waardoor het plein nat werd?",
          },
        },
      },
      {
        q: "Welk rijtje bestaat helemaal uit signaalwoorden van oorzaak en gevolg?",
        options: [
          "omdat, daardoor, dus, zodat",
          "eerst, daarna, later, toen",
          "maar, toch, hoewel",
          "bijvoorbeeld, zoals, onder andere",
        ],
        answer: 0,
        evidence: "De belangrijkste signaalwoorden voor oorzaak en gevolg zijn: omdat, doordat, daardoor, waardoor, dus, daarom, zodat.",
        wrongHints: [
          null,
          "Dit zijn tijd-woorden: ze vertellen in welke vólgorde iets gebeurt, niet waardóór het gebeurt.",
          "Deze woorden zetten juist een tegenstelling neer — iets loopt anders dan je verwacht.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat doet een signaalwoord?", tekst: "Een signaalwoord is een wegwijzer: het vertelt de lezer hoe twee stukjes tekst bij elkaar horen. Er zijn verschillende soorten wegwijzers." },
            { titel: "Soorten uit elkaar houden", tekst: "Tijd-woorden (eerst, daarna, toen) zeggen alleen: dit gebeurde na elkaar. Tegenstelling-woorden (maar, toch) zeggen: dit is anders dan verwacht. Voorbeeld-woorden (bijvoorbeeld, zoals) geven een voorbeeld." },
            { titel: "De oorzaak-gevolg-familie", tekst: "Alleen woorden als omdat, doordat, daardoor, waardoor, dus, daarom en zodat vertellen: het één komt dóór het ander. Dat is de familie die je hier zoekt." },
          ],
          woorden: [
            { woord: "signaalwoord", uitleg: "Woord dat aangeeft hoe stukken tekst bij elkaar horen: door tijd, door tegenstelling, of door oorzaak en gevolg." },
            { woord: "tegenstelling", uitleg: "Twee dingen die tegenover elkaar staan: 'Het regende, maar we gingen tóch naar buiten.'" },
          ],
          theorie: "**Het spiekbriefje: welke wegwijzer is het?**\n\n| Soort | Signaalwoorden | Wat zegt het? |\n|---|---|---|\n| Oorzaak-gevolg | omdat, doordat, daardoor, waardoor, dus, daarom, zodat | het één komt dóór het ander |\n| Tijd | eerst, daarna, toen, later, ten slotte | dit is de volgorde |\n| Tegenstelling | maar, toch, hoewel, echter | dit is anders dan verwacht |\n| Voorbeeld | bijvoorbeeld, zoals | hier komt een voorbeeld |\n\nDe Doorstroomtoets vraagt vaak welk verband er tussen twee zinnen zit — dit rijtje is dan goud waard.",
          voorbeelden: [
            { type: "vergelijk", tekst: "'Lot at haar bord leeg. Daarna ging ze spelen.' → tijd. 'Lot at haar bord leeg. Daardoor kreeg ze weer energie.' → oorzaak-gevolg. Eén woord verschil, heel ander verband!" },
          ],
          basiskennis: [
            { onderwerp: "Na elkaar is niet door elkaar", uitleg: "'Daarna' zegt alleen iets over de volgorde. 'Daardoor' zegt: het kwam erdóór. Verwar die twee nooit." },
          ],
          niveaus: {
            basis: "Je zoekt woorden die vertellen dat iets ergens dóór komt — niet wanneer of in welke volgorde.",
            simpeler: "Test elk rijtje met de bananenschil-zin: 'Er lag een schil, ... gleed Joep uit.' Welk rijtje past op de puntjes?",
            nogSimpeler: "Welke woorden gebruik je als je uitlegt waaróm iets gebeurde?",
          },
        },
      },
      {
        q: "*\"Fien oefende elke dag op haar blokfluit. Daardoor ging het optreden foutloos.\"* — Wat is het gevolg?",
        options: [
          "Het optreden ging foutloos",
          "Fien oefende elke dag",
          "De blokfluit",
          "Fien vond oefenen leuk",
        ],
        answer: 0,
        evidence: "Fien oefende elke dag op haar blokfluit. Daardoor ging het optreden foutloos.",
        wrongHints: [
          null,
          "Dat gebeurde éérst — is dat waar het door kómt, of wat eruit vólgt? Kijk wat er achter 'daardoor' staat.",
          null,
          "Staat er iets over leuk vinden in deze zinnen? Blijf bij wat er echt staat.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Vind het signaalwoord", tekst: "Hier staat 'daardoor'. Die wegwijzer zegt: wat hierna komt, is het gevolg — het kwam door wat er eerder verteld is." },
            { titel: "Teken de pijl", tekst: "Eerst gebeurde: elke dag oefenen. Daarna kwam daardoor: het foutloze optreden. Pijl: oefenen → foutloos optreden." },
            { titel: "Controleer", tekst: "Vraag: kwam het foutloze optreden echt door het oefenen? Ja, wie veel oefent, speelt beter. De pijl klopt." },
          ],
          woorden: [
            { woord: "daardoor", uitleg: "Signaalwoord — wat erachter staat, is het gevolg van wat eerder verteld is." },
            { woord: "foutloos", uitleg: "Zonder één fout." },
          ],
          theorie: "**'Daardoor' wijst vooruit naar het gevolg**\n\nBij 'daardoor', 'waardoor', 'dus' en 'daarom' geldt: de oorzaak staat ervóór, het gevolg erachter.\n\n- 'Jip trainde hard. **Daardoor** won hij.' → gevolg: winnen\n- 'Het waaide hard, **dus** de vlieger ging hoog.' → gevolg: hoge vlieger\n\nVergelijk met 'omdat' en 'doordat': daar staat juist de **oorzaak** achter het signaalwoord. Onthoud: het woord zelf verklapt wat je erachter vindt.",
          voorbeelden: [
            { type: "gevolg-achter-daardoor", tekst: "'De juf sprak heel zacht. Daardoor werd de klas vanzelf stil.' → gevolg: de stille klas." },
          ],
          basiskennis: [
            { onderwerp: "Gevolg komt later", uitleg: "Het gevolg gebeurt altijd ná de oorzaak. Vraag jezelf: wat was er eerst, wat kwam erdoor?" },
          ],
          niveaus: {
            basis: "Achter 'daardoor' staat het gevolg. Wat staat er in de zin achter dat woord?",
            simpeler: "Wat gebeurde er eerst (dagenlang) en wat kwam daar later uit voort (op één avond)?",
            nogSimpeler: "Wat lukte er zo goed op het optreden, dankzij al dat oefenen?",
          },
        },
      },
      {
        q: "Wat is een oorzaak?",
        options: [
          "Waardoor iets komt — de oorzaak gebeurt eerst",
          "Wat er helemaal op het laatst gebeurt",
          "De mening van de schrijver",
          "Een moeilijk woord in de tekst",
        ],
        answer: 0,
        evidence: "De oorzaak is waardoor het komt — dat gebeurt eerst. Het gevolg is wat er daarna gebeurt, dóór de oorzaak.",
        wrongHints: [
          null,
          "Denk aan de bananenschil en de uitglijder: lag de schil er aan het begin of aan het eind?",
          "Een mening herken je aan woorden als 'ik vind'. Gaat een oorzaak over vinden, of over gebeuren?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Terug naar de bananenschil", tekst: "Er lag een schil (dat was er eerst). Joep gleed uit (dat kwam erdoor). Het eerste noemen we de oorzaak, het tweede het gevolg." },
            { titel: "De waardoor-vraag", tekst: "Wil je de oorzaak vinden? Stel dan altijd de vraag: 'Waardoor kwam dit?' Het antwoord op die vraag is de oorzaak." },
            { titel: "Waarom is dit belangrijk?", tekst: "Als je oorzaak en gevolg door elkaar haalt, begrijp je het verhaal verkeerd. Daarom toetst de Doorstroomtoets dit zo vaak." },
          ],
          woorden: [
            { woord: "oorzaak", uitleg: "Waardoor iets komt. Gebeurt eerst. Voorbeeld: de spijker op de weg." },
            { woord: "gevolg", uitleg: "Wat er daarna gebeurt, dóór de oorzaak. Voorbeeld: de lekke band." },
          ],
          theorie: "**Oorzaak en gevolg — het domino-effect**\n\nDenk aan dominostenen: je tikt de eerste steen om (oorzaak) en de volgende valt daardoor ook (gevolg). Soms is dat gevolg zelf wéér een oorzaak voor iets nieuws:\n\nspijker op de weg → lekke band → lopen naar school → te laat komen\n\nZo'n rijtje heet een **keten**. In langere teksten zitten vaak hele ketens verstopt. Wie de keten kan volgen, snapt het hele verhaal.",
          voorbeelden: [
            { type: "keten", tekst: "'De wekker ging niet af → Roos werd te laat wakker → ze miste de bus → ze kwam te laat op school.' Vier schakels, één keten." },
          ],
          basiskennis: [
            { onderwerp: "De waardoor-vraag", uitleg: "'Waardoor kwam dit?' is dé speurvraag van dit leerpad. Het antwoord is altijd de oorzaak." },
          ],
          niveaus: {
            basis: "Denk aan de dominostenen: welke steen is de oorzaak — de steen die je aantikt, of de steen die valt?",
            simpeler: "De oorzaak beantwoordt de vraag 'waardoor kwam dit?'. Gebeurt zoiets aan het begin of aan het eind?",
            nogSimpeler: "Wat was er bij Joep éérst: de schil op de stoep, of het uitglijden?",
          },
        },
      },
    ],
  },

  // ── Stap 2 ──────────────────────────────────────────────────────
  {
    title: "Speuren in een tekst",
    explanation: tekstLekkeBand + `

Zet nu je leesbril op! In deze tekst zit een hele **keten** van oorzaken en gevolgen verstopt: het één leidt tot het ander, en dát leidt weer tot iets nieuws.

**Zo speur je:**
1. Zoek de **signaalwoorden** in de tekst: daardoor, omdat, zo, waardoor. Dat zijn je wegwijzers.
2. Teken bij elke wegwijzer de pijl: wat is de oorzaak, wat is het gevolg?
3. Geen signaalwoord te zien? Stel dan zelf de **waardoor-vraag**: "waardoor kwam dit?" — en zoek het antwoord eerder in de tekst.

Let op: één gebeurtenis kan tegelijk een gevolg én een oorzaak zijn! De lekke band is het gevolg van de spijker, maar ook de oorzaak van het lopen. Zo rijgt de keten zich aan elkaar. Beantwoord nu de vier vragen over de tekst hierboven.`,
    checks: [
      {
        q: "Waardoor liep de achterband van Milan leeg?",
        options: [
          "Hij reed over een scherpe spijker",
          "Hij had geen pomp bij zich",
          "Hij kwam te laat op school",
          "Hij fietste veel te hard",
        ],
        answer: 0,
        evidence: "Vanmorgen reed hij over een scherpe spijker. Daardoor liep zijn achterband langzaam leeg.",
        wrongHints: [
          null,
          "De pomp zorgde ervoor dat hij moest lópen — maar waardoor werd de band zélf leeg? Zoek de zin met 'daardoor'.",
          "Dat is juist een gevolg, verderop in de keten. Ga terug naar het begin: wat gebeurde er vanmorgen op de weg?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Stel de waardoor-vraag", tekst: "De vraag is al een waardoor-vraag: waardoor liep de band leeg? Zoek in de tekst naar wat er vlak vóór het leeglopen gebeurde." },
            { titel: "Vind de wegwijzer", tekst: "In de tekst staat: '...reed hij over een scherpe spijker. Daardoor liep zijn achterband langzaam leeg.' Het woord 'daardoor' wijst terug naar de oorzaak." },
            { titel: "Controleer de pijl", tekst: "Kan een spijker een band lek maken? Ja, een spijker prikt een gaatje. Pijl: spijker → lekke band. Klopt." },
          ],
          woorden: [
            { woord: "keten", uitleg: "Een rijtje gebeurtenissen waarbij het één steeds het ander veroorzaakt, zoals vallende dominostenen." },
          ],
          theorie: "**Pak het juiste stukje van de keten**\n\nIn deze tekst zit een lange keten: spijker → lekke band → lopen → te laat komen. De vraag bepaalt wélk stukje van de keten je nodig hebt.\n\nVraagt de toets 'waardoor liep de band leeg?', dan zoek je de schakel die dáár direct voor zit: de spijker. Niet de pomp (die komt later in de keten) en niet het te laat komen (dat is een gevolg, geen oorzaak).\n\nTruc: leg je vinger op de gebeurtenis uit de vraag en schuif één schakel terug.",
          voorbeelden: [
            { type: "schakel-terug", tekst: "Vraag: 'waardoor miste Roos de bus?' Keten: wekker ging niet af → te laat wakker → bus gemist. Eén schakel terug vanaf 'bus gemist' = te laat wakker worden." },
          ],
          basiskennis: [
            { onderwerp: "Eén schakel terug", uitleg: "Bij een waardoor-vraag zoek je de gebeurtenis die er direct vóór zit in de keten — niet iets van veel eerder of later." },
          ],
          niveaus: {
            basis: "Zoek in de tekst de zin met 'daardoor liep zijn achterband leeg' en lees de zin ervóór.",
            simpeler: "Wat lag er vanmorgen op de weg waar Milan overheen reed?",
            nogSimpeler: "Welk scherp ding kan een gaatje in een band prikken? Zoek het in het begin van de tekst.",
          },
        },
      },
      {
        q: "Milan moest het laatste stuk naar school lopen. Wat was daarvan de oorzaak?",
        options: [
          "Hij had geen pomp bij zich",
          "Juf Karin had het hem gevraagd",
          "Hij wilde graag bewegen",
          "Het regende te hard om te fietsen",
        ],
        answer: 0,
        evidence: "Omdat hij geen pomp bij zich had, moest hij het laatste stuk lopen.",
        wrongHints: [
          null,
          "De juf komt pas op school in het verhaal voor. Zoek de zin in de tekst die met 'omdat' begint.",
          null,
          "Staat er ergens in de tekst iets over regen? Blijf bij wat er écht in het verhaal gebeurt.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de gebeurtenis in de tekst", tekst: "De vraag gaat over het lopen. Zoek die zin op: 'Omdat hij geen pomp bij zich had, moest hij het laatste stuk lopen.'" },
            { titel: "Volg de wegwijzer", tekst: "De zin begint met 'omdat' — daarachter staat de oorzaak: geen pomp bij zich. Zonder pomp kon Milan de band niet oppompen." },
            { titel: "Controleer", tekst: "Klopt de pijl? Geen pomp → band blijft leeg → fietsen lukt niet → lopen dus. Ja, dat is logisch." },
          ],
          woorden: [
            { woord: "binnenband", uitleg: "De zachte rubberen band mét lucht die binnen in de buitenband van een fietswiel zit." },
          ],
          theorie: "**De vraag andersom: van gevolg terug naar oorzaak**\n\nSoms geeft de vraag je het gevólg (Milan moest lopen) en zoek jij de oorzaak. Werk dan terug:\n\n1. Zoek de gebeurtenis uit de vraag op in de tekst.\n2. Kijk of er een signaalwoord bij staat ('omdat', 'doordat', 'want').\n3. Wat achter dat woord staat, is je antwoord.\n\nStaat er geen signaalwoord? Lees dan de zinnen ervóór en stel zelf de waardoor-vraag.",
          voorbeelden: [
            { type: "terugwerken", tekst: "Vraag: 'waardoor bleef Sam thuis?' Tekst: 'Sam bleef thuis, want hij was verkouden.' → achter 'want' staat de oorzaak: de verkoudheid." },
          ],
          basiskennis: [
            { onderwerp: "Want en omdat zijn familie", uitleg: "Achter 'want' en 'omdat' staat allebei de oorzaak of reden. Zie je een van die woorden, dan weet je waar je moet kijken." },
          ],
          niveaus: {
            basis: "Zoek in de tekst de zin over het lopen — die begint met 'omdat'. Wat staat er direct achter?",
            simpeler: "Milan kon zijn band niet oppompen. Wat miste hij daarvoor?",
            nogSimpeler: "Welk ding om lucht in een band te doen had Milan niet bij zich?",
          },
        },
      },
      {
        q: "Wat was het gevolg van het lopen naar school?",
        options: [
          "Milan kwam tien minuten te laat de klas binnen",
          "De achterband liep leeg",
          "Milan reed over een spijker",
          "De juf had thuis banden geplakt",
        ],
        answer: 0,
        evidence: "Zo kwam hij tien minuten te laat de klas binnen.",
        wrongHints: [
          null,
          "Dat was al gebeurd vóórdat Milan ging lopen. Een gevolg komt erná — wat gebeurde er ná het lopen?",
          null,
          "Dat gaat over vroeger, over de juf thuis. Wat gebeurde er met Mílan door al dat lopen?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Gevolg = wat erná komt", tekst: "Nu zoek je de andere kant van de pijl: niet waardoor het lopen kwam, maar wat het lopen véroorzaakte." },
            { titel: "Zoek de wegwijzer", tekst: "In de tekst staat: 'Zo kwam hij tien minuten te laat de klas binnen.' Het woordje 'zo' betekent hier: 'daardoor'. Het wijst het gevolg aan." },
            { titel: "Controleer met de keten", tekst: "Lopen duurt langer dan fietsen → dus kom je later aan. Pijl: lopen → te laat komen. Logisch." },
          ],
          woorden: [
            { woord: "zo", uitleg: "Klein woordje dat soms 'daardoor' betekent: 'Hij moest lopen. Zo kwam hij te laat.' Ook een wegwijzer dus!" },
          ],
          theorie: "**Let op de kleine wegwijzers**\n\nNiet alleen lange woorden als 'daardoor' zijn signaalwoorden. Ook korte woordjes kunnen een gevolg aanwijzen:\n\n- 'zo' → 'Hij moest lopen. Zo kwam hij te laat.'\n- 'dus' → 'De band was lek, dus fietsen ging niet.'\n- 'want' (andersom!) → wijst juist naar de oorzaak.\n\nLees dus scherp: een woordje van twee letters kan de hele pijl aanwijzen.",
          voorbeelden: [
            { type: "klein-woordje", tekst: "'Noor at drie pannenkoeken te veel. Zo kreeg ze buikpijn.' → 'zo' wijst het gevolg aan: de buikpijn." },
          ],
          basiskennis: [
            { onderwerp: "Beide kanten op kunnen vragen", uitleg: "De toets vraagt soms naar de oorzaak ('waardoor...?') en soms naar het gevolg ('wat gebeurde er doordat...?'). Lees goed welke kant van de pijl gevraagd wordt." },
          ],
          niveaus: {
            basis: "Een gevolg komt ná de oorzaak. Wat gebeurde er in de tekst direct ná het lopen?",
            simpeler: "Lopen duurt langer dan fietsen. Wat gebeurt er dan met de tijd waarop je aankomt?",
            nogSimpeler: "Zoek de zin die begint met 'Zo kwam hij...' — wat staat daar?",
          },
        },
      },
      {
        q: "*\"Er kwamen kleine belletjes omhoog, waardoor ze precies zagen waar het lek zat.\"* — Wat is het gevolg van de belletjes?",
        options: [
          "Ze zagen precies waar het lek zat",
          "De binnenband ging onder water",
          "Milan kwam te laat op school",
          "De band werd met een plakkertje gemaakt",
        ],
        answer: 0,
        evidence: "Er kwamen kleine belletjes omhoog, waardoor ze precies zagen waar het lek zat.",
        wrongHints: [
          null,
          "Dat deden ze juist éérst, vóórdat de belletjes kwamen. Kijk wat er achter 'waardoor' staat.",
          null,
          "Dat gebeurde pas daarná, als laatste stap. Zoek wat er diréct door de belletjes kwam.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Vind de wegwijzer", tekst: "Midden in de zin staat 'waardoor'. Net als 'daardoor' wijst dat woord naar het gevolg: wat erachter staat, kwam door de belletjes." },
            { titel: "Lees wat erachter staat", tekst: "Achter 'waardoor' staat: 'ze precies zagen waar het lek zat'. Dat is dus het gevolg van de opstijgende belletjes." },
            { titel: "Snap ook het waarom", tekst: "Waarom werkt dit? Lucht ontsnapt door het gaatje. Onder water zie je die lucht als belletjes — precies op de plek van het lek. Slim trucje van fietsenmakers!" },
          ],
          woorden: [
            { woord: "waardoor", uitleg: "Signaalwoord midden in een zin — wat erachter staat, is het gevolg van wat ervóór staat." },
            { woord: "lek", uitleg: "Een gaatje waar lucht (of water) doorheen ontsnapt." },
          ],
          theorie: "**'Waardoor' midden in de zin**\n\nSoms staan oorzaak en gevolg niet in twee losse zinnen, maar in één zin, verbonden door 'waardoor':\n\n*oorzaak* , waardoor *gevolg*\n\n- 'Het sneeuwde flink, waardoor de weg glad werd.'\n- 'De belletjes stegen op, waardoor ze het lek zagen.'\n\nDe pijl loopt dan altijd van links (vóór 'waardoor') naar rechts (achter 'waardoor'). Handig: bij 'waardoor' hoef je nooit te twijfelen over de richting.",
          voorbeelden: [
            { type: "een-zin", tekst: "'De hond trok hard aan de riem, waardoor Timo bijna omviel.' → oorzaak: het trekken. Gevolg: bijna omvallen." },
          ],
          basiskennis: [
            { onderwerp: "Lucht zoekt een uitweg", uitleg: "Lucht in een band staat onder druk. Is er een gaatje, dan ontsnapt de lucht daar — onder water zie je dat als belletjes." },
          ],
          niveaus: {
            basis: "De pijl bij 'waardoor' loopt van links naar rechts. Wat staat er réchts van dat woord?",
            simpeler: "Wat konden ze opeens, dankzij die belletjes? Iets vinden wat eerst onvindbaar was.",
            nogSimpeler: "De belletjes verklapten een geheime plek. Welke plek?",
          },
        },
      },
    ],
  },

  // ── Stap 3 ──────────────────────────────────────────────────────
  {
    title: "Lastige gevallen",
    explanation: `Je kent nu de pijl en de wegwijzers. Maar de Doorstroomtoets test ook drie **lastige gevallen**. Wie die kent, laat zich niet foppen!

**1. De oorzaak staat soms achteraan.**
*"Sanne bleef thuis, omdat ze koorts had."* De koorts staat achterin de zin — maar het is wél de oorzaak! De volgorde in de zín zegt dus niets. Gebruik de **omdraai-truc**: kijk naar het signaalwoord, niet naar de plek. Achter 'omdat' staat altijd de oorzaak, waar dat woord ook staat.

**2. Soms is er géén signaalwoord — het verband zit verstopt.**
*"Het vroor de hele nacht. De vijver lag 's ochtends vol ijs."* Geen wegwijzer te zien, maar het verband is er wel. Stel dan zelf de waardoor-vraag: waardoor lag er ijs? Door de vorst. Gevonden!

**3. Ná elkaar is niet hetzelfde als dóór elkaar.**
*"Jesse at een boterham. Daarna ging hij voetballen."* Dit gebeurt na elkaar, maar het één komt niet door het ander. Test het: *"Doordat Jesse een boterham at, ging hij voetballen"* — klinkt raar, dus geen oorzaak-gevolg. Alleen tijdsvolgorde!

De strategie blijft: zoek de wegwijzer (of stel zelf de waardoor-vraag), teken de pijl en controleer of de richting logisch is.`,
    checks: [
      {
        q: "*\"Sanne bleef thuis, omdat ze koorts had.\"* — Wat is de oorzaak?",
        options: [
          "Dat Sanne koorts had",
          "Dat Sanne thuisbleef",
          "Dat Sanne naar school wilde",
          "De dokter",
        ],
        answer: 0,
        evidence: "Sanne bleef thuis, omdat ze koorts had.",
        wrongHints: [
          null,
          "Dat staat vooraan in de zin — maar vooraan is niet altijd de oorzaak. Achter welk signaalwoord moet je kijken?",
          null,
          "Komt er een dokter voor in de zin? Kijk goed wat er ná 'omdat' staat.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Laat je niet foppen door de volgorde", tekst: "Het gevolg (thuisblijven) staat hier vóóraan in de zin en de oorzaak (koorts) achteraan. Dat mag — een schrijver kiest zelf de volgorde." },
            { titel: "De wegwijzer wint altijd", tekst: "Kijk naar het signaalwoord, niet naar de plek in de zin. Achter 'omdat' staat de oorzaak — hier dus de koorts." },
            { titel: "Draai de zin om als controle", tekst: "Zet 'm om: 'Omdat ze koorts had, bleef Sanne thuis.' Precies dezelfde betekenis! De koorts blijft de oorzaak, waar die ook in de zin staat." },
          ],
          woorden: [
            { woord: "omdraai-truc", uitleg: "Zet de zin in gedachten in de andere volgorde. Als de betekenis hetzelfde blijft, heb je oorzaak en gevolg goed te pakken." },
          ],
          theorie: "**De volgorde in de zin zegt niets!**\n\nDeze twee zinnen betekenen precies hetzelfde:\n\n- 'Omdat ze koorts had, bleef Sanne thuis.'\n- 'Sanne bleef thuis, omdat ze koorts had.'\n\nDe oorzaak (koorts) gebeurde in het écht als eerste — maar in de zin mag hij vooraan óf achteraan staan. Daarom vertrouw je nooit op de plek, maar altijd op het signaalwoord:\n\n- achter **omdat/doordat/want** → oorzaak\n- achter **daardoor/waardoor/dus/daarom** → gevolg",
          voorbeelden: [
            { type: "achteraan", tekst: "'De weg was glad, doordat het gesneeuwd had.' → oorzaak achteraan: de sneeuw. Gevolg vooraan: de gladde weg." },
            { type: "vooraan", tekst: "'Doordat het gesneeuwd had, was de weg glad.' → zelfde pijl, andere volgorde." },
          ],
          basiskennis: [
            { onderwerp: "Echte volgorde vs zin-volgorde", uitleg: "In het echt komt de oorzaak altijd eerst. In de zín mag de schrijver husselen. Het signaalwoord wijst je de weg." },
          ],
          niveaus: {
            basis: "Kijk niet naar wat er vooraan staat, maar naar wat er achter 'omdat' staat.",
            simpeler: "Stel de waardoor-vraag: waardoor bleef Sanne thuis? Wat voelde ze in haar lijf?",
            nogSimpeler: "Wat had Sanne, waardoor ze niet naar school kon?",
          },
        },
      },
      {
        q: "*\"Het vroor de hele nacht. De vijver lag 's ochtends vol ijs.\"* — Er staat geen signaalwoord. Wat is hier waar?",
        options: [
          "Er is tóch oorzaak en gevolg: het ijs kwam door het vriezen",
          "Zonder signaalwoord kan er geen verband zijn",
          "Het ijs is de oorzaak van het vriezen",
          "De twee zinnen hebben niets met elkaar te maken",
        ],
        answer: 0,
        evidence: "Het vroor de hele nacht. De vijver lag 's ochtends vol ijs.",
        wrongHints: [
          null,
          "Probeer de waardoor-vraag: waardoor lag er ijs? Kun je die vraag beantwoorden met de eerste zin?",
          "Welke van de twee gebeurde éérst — de nacht met vorst, of de ochtend met ijs? De oorzaak komt altijd eerst.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Geen wegwijzer? Zelf speuren!", tekst: "Schrijvers laten het signaalwoord vaak weg — zeker in mooie verhalen. Het verband is er dan nog steeds, maar het zit verstopt." },
            { titel: "Stel de waardoor-vraag", tekst: "Waardoor lag de vijver vol ijs? Antwoord: doordat het de hele nacht vroor. De eerste zin beantwoordt de vraag — dus er ís een verband." },
            { titel: "Test met een ingevoegd woord", tekst: "Plak er zelf 'daardoor' tussen: 'Het vroor de hele nacht. Daardoor lag de vijver vol ijs.' Klinkt logisch? Dan is het oorzaak-gevolg, ook zonder signaalwoord." },
          ],
          woorden: [
            { woord: "verstopt verband", uitleg: "Oorzaak en gevolg zonder signaalwoord ertussen. De lezer moet de pijl zelf tekenen." },
            { woord: "vriezen", uitleg: "Kouder dan nul graden — water wordt dan ijs." },
          ],
          theorie: "**De invoeg-truc voor verstopte verbanden**\n\nTwijfel je of twee zinnen oorzaak-gevolg zijn? Voeg zelf 'daardoor' in tussen de zinnen en lees ze opnieuw:\n\n- 'Het vroor. **Daardoor** lag er ijs.' → logisch ✓ = oorzaak-gevolg\n- 'Jesse at een boterham. **Daardoor** ging hij voetballen.' → raar ✗ = alleen na elkaar\n\nDe zin die logisch blijft, heeft een écht verband. De Doorstroomtoets is dol op verstopte verbanden — met deze truc prik je er zo doorheen.",
          voorbeelden: [
            { type: "verstopt", tekst: "'Mila vergat haar gymschoenen. Ze moest op blote voeten meedoen.' → voeg 'daardoor' in: logisch! Verstopt oorzaak-gevolg." },
          ],
          basiskennis: [
            { onderwerp: "Water en vorst", uitleg: "Bij temperaturen onder nul graden bevriest water. Een nacht vorst kan een hele vijver dichtleggen met ijs." },
          ],
          niveaus: {
            basis: "Voeg in gedachten 'daardoor' in tussen de twee zinnen. Klinkt het dan logisch?",
            simpeler: "Waardoor lag er 's ochtends ijs op de vijver? Geeft de eerste zin daar een antwoord op?",
            nogSimpeler: "Wat gebeurt er met water als het een hele nacht kouder dan nul graden is?",
          },
        },
      },
      {
        q: "*\"Jesse at een boterham. Daarna ging hij buiten voetballen.\"* — Is dit oorzaak en gevolg?",
        options: [
          "Nee — het gebeurt alleen ná elkaar, niet dóór elkaar",
          "Ja — de boterham is de oorzaak van het voetballen",
          "Ja — het voetballen is de oorzaak van de boterham",
          "Dat kun je nooit weten",
        ],
        answer: 0,
        evidence: "Jesse at een boterham. Daarna ging hij buiten voetballen.",
        wrongHints: [
          null,
          "Ging Jesse voetballen dóór die boterham? Test: 'doordat hij een boterham at, ging hij voetballen' — klinkt dat logisch?",
          null,
          "Jawel hoor: gebruik de invoeg-truc met 'daardoor' en luister of de zin logisch blijft.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken het tijd-woord", tekst: "Hier staat 'daarna' — dat is een tijd-woord, geen oorzaak-woord. Het zegt alleen: eerst dit, toen dat." },
            { titel: "Doe de invoeg-test", tekst: "Vervang 'daarna' door 'daardoor': 'Jesse at een boterham. Daardoor ging hij voetballen.' Hmm — ging hij echt voetballen dóór die boterham? Nee, hij had ook zonder boterham kunnen gaan." },
            { titel: "Conclusie", tekst: "De twee dingen gebeuren na elkaar, maar het één veroorzaakt het ander niet. Alleen tijdsvolgorde dus — geen pijl." },
          ],
          woorden: [
            { woord: "tijdsvolgorde", uitleg: "De volgorde waarin dingen gebeuren: eerst A, daarna B. Zegt niets over waardóór iets gebeurt." },
          ],
          theorie: "**Na elkaar ≠ door elkaar — dé valkuil**\n\nDit is de beroemdste valkuil bij oorzaak en gevolg. Vergelijk:\n\n- 'De haan kraaide. Daarna kwam de zon op.' → kwam de zon op dóór de haan? Natuurlijk niet! De zon komt altijd op, haan of geen haan.\n- 'De zon kwam op. Daardoor smolt de rijp op het gras.' → dit klopt wél: zonder zonnewarmte geen smelten.\n\nDe test is altijd: **zou het gevolg er óók zijn zonder de 'oorzaak'?** Zo ja → geen echt verband, alleen volgorde.",
          voorbeelden: [
            { type: "geen-verband", tekst: "'Bo deed haar jas aan. Daarna begon het te regenen.' → de regen komt niet door de jas. Alleen na elkaar." },
            { type: "wel-verband", tekst: "'Bo vergat haar jas. Daardoor werd ze drijfnat.' → zonder jas word je nat in de regen. Echt verband." },
          ],
          basiskennis: [
            { onderwerp: "De zou-het-ook-zonder-test", uitleg: "Vraag: zou het tweede óók gebeurd zijn zonder het eerste? Ja = alleen volgorde. Nee = echt oorzaak-gevolg." },
          ],
          niveaus: {
            basis: "'Daarna' is een tijd-woord. Vraag jezelf: kwam het voetballen écht door het eten?",
            simpeler: "Had Jesse ook kunnen gaan voetballen zónder eerst die boterham te eten? Wat zegt dat over het verband?",
            nogSimpeler: "Maakt een boterham dat je gaat voetballen? Of gebeurde het gewoon toevallig erna?",
          },
        },
      },
      {
        q: "*\"Bram vergat zijn zwemtas. Hij mocht niet meedoen met de zwemles.\"* — Wat is hier waar?",
        options: [
          "Er is oorzaak en gevolg, ook al staat er geen signaalwoord",
          "Er is geen verband: het gebeurde toevallig na elkaar",
          "De zwemles is de oorzaak",
          "Bram vergat zijn tas doordat hij niet mocht meedoen",
        ],
        answer: 0,
        evidence: "Bram vergat zijn zwemtas. Hij mocht niet meedoen met de zwemles.",
        wrongHints: [
          null,
          "Doe de test: zou Bram óók niet mogen meedoen als hij zijn tas wél bij zich had? Wat zegt dat over het verband?",
          null,
          "Let op de volgorde: wat gebeurde er in het écht als eerste? De pijl loopt altijd van eerst naar later.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Geen signaalwoord — zelf testen", tekst: "Er staat geen wegwijzer. Gebruik de invoeg-truc: 'Bram vergat zijn zwemtas. Daardoor mocht hij niet meedoen.' Klinkt dat logisch?" },
            { titel: "Doe de zou-het-ook-zonder-test", tekst: "Zou Bram wél mogen meedoen als hij zijn tas (met zwembroek en handdoek) gewoon bij zich had? Ja! Dus het niet-meedoen komt écht door het vergeten." },
            { titel: "Let op de pijl-richting", tekst: "Het vergeten gebeurde eerst, het niet-meedoen kwam daarna. De pijl loopt dus van het vergeten naar het niet-meedoen — nooit andersom." },
          ],
          woorden: [
            { woord: "verband", uitleg: "De manier waarop twee dingen bij elkaar horen. Bij oorzaak-gevolg: het één komt dóór het ander." },
          ],
          theorie: "**Twee testen samen = zeker weten**\n\nBij twee zinnen zonder signaalwoord doe je beide testen:\n\n1. **Invoeg-test**: plak 'daardoor' ertussen. Klinkt het logisch?\n2. **Zou-het-ook-zonder-test**: zou het tweede ook gebeuren zonder het eerste?\n\nBij Bram: 'daardoor mocht hij niet meedoen' klinkt logisch ✓ en zonder het vergeten had hij wél mee gemogen ✓. Twee vinkjes = echt oorzaak-gevolg.\n\nVergeet ook de richting niet: de oorzaak is wat er éérst gebeurde. Wie de pijl omdraait, kiest op de toets precies het verkeerde antwoord — en die foute optie staat er gegarandeerd tussen!",
          voorbeelden: [
            { type: "twee-testen", tekst: "'Het stormde. De voetbalwedstrijd werd afgelast.' Invoeg-test: 'daardoor werd de wedstrijd afgelast' ✓. Zonder storm gewoon gespeeld? ✓. Echt verband." },
          ],
          basiskennis: [
            { onderwerp: "De pijl draait nooit om", uitleg: "Een gevolg kan niet eerder gebeuren dan zijn oorzaak. Twijfel je? Zet de gebeurtenissen op een tijdlijn." },
          ],
          niveaus: {
            basis: "Doe de invoeg-truc met 'daardoor' tussen de twee zinnen. Blijft de zin logisch?",
            simpeler: "In een zwemtas zitten je zwembroek en handdoek. Wat gebeurt er als je die niet bij je hebt bij zwemles?",
            nogSimpeler: "Wat gebeurde er éérst: het vergeten of het niet-meedoen? Loopt daar een pijl tussen?",
          },
        },
      },
    ],
  },

  // ── Stap 4 ──────────────────────────────────────────────────────
  {
    title: "Doorstroomtoets-oefening — de mix",
    explanation: tekstKastanjeboom + `

Dit is 'm: een tekst met vragen zoals je ze écht op de Doorstroomtoets krijgt. De vraag begint dan vaak met *"Waardoor kwam het dat...?"* of *"Wat was het gevolg van...?"*.

Pak je vaste aanpak erbij:
1. **Zoek de gebeurtenis** uit de vraag op in de tekst.
2. **Vind de wegwijzer** (doordat, dus, omdat...) — of stel zelf de waardoor-vraag als er geen signaalwoord staat.
3. **Teken de pijl** en controleer de richting: wat gebeurde éérst?

Let op de valstrikken die je nu kent: de oorzaak kan achteraan in de zin staan, en niet alles wat na elkaar gebeurt, komt ook dóór elkaar. Neem de tijd om de goede zin in de tekst op te zoeken — dat opzoeken hoort bij de toets. Succes!`,
    checks: [
      {
        q: "Waardoor kwam het dat de oude kastanjeboom omviel?",
        options: [
          "Het hout was van binnen zacht geworden en de storm rukte hard aan de boom",
          "De conciërge zaagde de stam in schijven",
          "Het fietsenhok stond in de weg",
          "Buurman Ties is timmerman",
        ],
        answer: 0,
        evidence: "De oude kastanjeboom op het schoolplein had al jaren een zieke stam. Doordat het hout van binnen zacht was geworden, hield de boom de harde windstoten niet.",
        wrongHints: [
          null,
          "Dat gebeurde pas ná het omvallen, helemaal aan het eind van de tekst. Zoek wat er vóóraf ging.",
          "Het hok kréég de boom juist op zich — is dat een oorzaak, of een gevolg van het vallen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de gebeurtenis op", tekst: "De vraag gaat over het omvallen. Zoek dat stuk in de tekst: de eerste alinea, over de storm en de zieke stam." },
            { titel: "Vind de wegwijzer", tekst: "Daar staat: 'Doordat het hout van binnen zacht was geworden, hield de boom de harde windstoten niet.' Achter 'doordat' staat de oorzaak: het zachte hout. En de storm rukte eraan — samen zorgden ze voor het omvallen." },
            { titel: "Controleer de keten", tekst: "Zieke stam + zware storm → boom houdt het niet → boom valt om. Twee oorzaken die samenwerken. Het beste antwoord noemt ze allebei." },
          ],
          woorden: [
            { woord: "doordat", uitleg: "Signaalwoord — wat erachter staat, is de oorzaak. Familie van 'omdat'." },
            { woord: "windstoot", uitleg: "Een plotselinge, extra harde vlaag wind tijdens een storm." },
          ],
          theorie: "**Soms werken twee oorzaken samen**\n\nEen gebeurtenis heeft niet altijd één oorzaak. De boom viel niet alleen door de storm (andere bomen bleven staan!) en niet alleen door de zieke stam (zonder storm stond hij er nog). Het was de **combinatie**.\n\nOp de Doorstroomtoets is het beste antwoord dan de optie die het volledigste klopt met de tekst. Een half antwoord ('het waaide') is niet fout — maar het antwoord dat béíde oorzaken noemt, past preciezer. Kies altijd het meest complete antwoord dat de tekst ondersteunt.",
          voorbeelden: [
            { type: "twee-oorzaken", tekst: "'Omdat het glad was én Roos te hard fietste, gleed ze uit in de bocht.' → gladheid alleen was niet genoeg, hard fietsen alleen ook niet. Samen wel." },
          ],
          basiskennis: [
            { onderwerp: "Compleetste antwoord wint", uitleg: "Passen twee opties een beetje? Kies dan de optie die het meest volledig vertelt wat er in de tekst staat." },
          ],
          niveaus: {
            basis: "Zoek in de eerste alinea de zin met 'doordat'. Welke twee dingen samen kregen de boom klein?",
            simpeler: "Andere bomen bleven wél staan in de storm. Wat was er met déze boom aan de hand, al jaren?",
            nogSimpeler: "Wat was er mis met de stam van de boom, en wat rukte er die nacht aan?",
          },
        },
      },
      {
        q: "Waardoor konden de kinderen hun fietsen maandag niet neerzetten?",
        options: [
          "Het fietsenhok was flink beschadigd door de omgevallen boom",
          "Alle fietsen waren kapotgewaaid",
          "De ouders hadden een bericht gekregen",
          "Buurman Ties was het hok aan het schilderen",
        ],
        answer: 0,
        evidence: "Het fietsenhok was flink beschadigd, dus de kinderen konden hun fietsen er maandag niet neerzetten.",
        wrongHints: [
          null,
          "Staat er ergens in de tekst iets over kapotte fietsen? Zoek de zin met het signaalwoord 'dus'.",
          "Dat bericht was juist een gevólg — het kwam ergens door. Waardoor moest dat bericht verstuurd worden?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de gebeurtenis op", tekst: "De vraag gaat over fietsen die niet neergezet konden worden. Zoek die zin: 'Het fietsenhok was flink beschadigd, dus de kinderen konden hun fietsen er maandag niet neerzetten.'" },
            { titel: "Volg de wegwijzer", tekst: "Het woord 'dus' wijst naar het gevolg (fietsen niet neerzetten). De oorzaak staat er dan vóór: het beschadigde hok." },
            { titel: "Volg de keten verder terug", tekst: "En waardoor was het hok beschadigd? Door de boom die erop viel. Zo hangt alles in de tekst aan elkaar: storm → boom valt → hok kapot → geen fietsen neerzetten." },
          ],
          woorden: [
            { woord: "dus", uitleg: "Signaalwoord — wat erachter staat, is het gevolg of de conclusie." },
            { woord: "beschadigd", uitleg: "Kapot of stukgemaakt, maar meestal nog te repareren." },
          ],
          theorie: "**'Dus' verbindt oorzaak en gevolg in één zin**\n\nBij 'dus' geldt hetzelfde als bij 'waardoor':\n\n*oorzaak* , dus *gevolg*\n\n- 'Het hok was kapot, dus de fietsen konden er niet in.'\n- 'Het regende pijpenstelen, dus de gymles was binnen.'\n\nDe pijl loopt van links naar rechts. Vraagt de toets naar de oorzaak? Kijk dan línks van 'dus'. Vraagt de toets naar het gevolg? Kijk rechts.",
          voorbeelden: [
            { type: "links-rechts", tekst: "'De juf was ziek, dus groep zes kreeg een invaller.' Waardoor kwam de invaller? Kijk links van 'dus': de zieke juf." },
          ],
          basiskennis: [
            { onderwerp: "Gevolgen kunnen doorwerken", uitleg: "Eén oorzaak (de storm) kan een sliert gevolgen hebben: kapot hok, lopend naar school, een bericht aan ouders. Volg de keten stap voor stap." },
          ],
          niveaus: {
            basis: "Zoek de zin met 'dus' in de tweede alinea. Wat staat er línks van dat woord?",
            simpeler: "Waar zetten kinderen hun fiets normaal neer op school? Wat was daarmee gebeurd in de storm?",
            nogSimpeler: "Waar viel de boom bovenop? Kan dat ding daarna nog gebruikt worden?",
          },
        },
      },
      {
        q: "Waarom bood buurman Ties aan om het fietsenhok gratis te repareren?",
        options: [
          "Omdat hij de kinderen wilde helpen",
          "Omdat de school hem er goed voor betaalde",
          "Omdat hij zelf een nieuw fietsenhok nodig had",
          "Omdat de storm zijn eigen huis had beschadigd",
        ],
        answer: 0,
        evidence: "Omdat hij de kinderen wilde helpen, bood hij aan het hok gratis te repareren.",
        wrongHints: [
          null,
          "Let op het woord 'gratis' in de tekst — past betaald worden daarbij?",
          null,
          "Staat er iets in de tekst over schade aan het huis van Ties? Zoek de zin die met 'omdat' begint.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de zin op", tekst: "In de derde alinea staat: 'Omdat hij de kinderen wilde helpen, bood hij aan het hok gratis te repareren.' De zin begint met de wegwijzer 'omdat'." },
            { titel: "Achter 'omdat' staat de reden", tekst: "Direct achter 'omdat' lees je waaróm Ties het deed: hij wilde de kinderen helpen. Dat is de reden voor zijn aanbod." },
            { titel: "Controleer met de rest van de tekst", tekst: "Klopt het met de rest? Ties deed het grátis en hij woont naast de school — een behulpzame buurman dus. Alles past bij elkaar." },
          ],
          woorden: [
            { woord: "reden", uitleg: "Waaróm iemand iets doet. Lijkt op een oorzaak, maar dan bij een keuze van een persoon." },
            { woord: "aanbieden", uitleg: "Uit jezelf zeggen dat je iets voor een ander wilt doen." },
          ],
          theorie: "**Oorzaak of reden? Bijna hetzelfde trucje**\n\nBij dingen die vanzelf gebeuren spreek je van een oorzaak: de vorst is de oorzaak van het ijs. Bij een **keuze van een persoon** heet het een reden: Ties kóós ervoor te helpen, en zijn reden was dat hij de kinderen wilde helpen.\n\nVoor jou als lezer werkt het precies hetzelfde: zoek het signaalwoord ('omdat', 'want', 'daarom') en lees wat erachter staat. De toets vraagt soms 'waardoor...?' (oorzaak) en soms 'waarom...?' (reden) — je speurtocht blijft gelijk.",
          voorbeelden: [
            { type: "reden", tekst: "'Waarom nam Yara een paraplu mee? Omdat de lucht grijs zag.' → haar reden staat achter 'omdat'." },
          ],
          basiskennis: [
            { onderwerp: "Waarom-vraag = reden zoeken", uitleg: "Begint de vraag met 'waarom', zoek dan in de tekst naar 'omdat', 'want' of 'daarom' bij die persoon." },
          ],
          niveaus: {
            basis: "Zoek in de derde alinea de zin die met 'omdat' begint. Wat staat er direct achter?",
            simpeler: "Ties vroeg er geen geld voor en woont naast de school. Wat zegt dat over waarom hij het deed?",
            nogSimpeler: "Voor wie deed Ties dit klusje — voor zichzelf, of voor iemand anders?",
          },
        },
      },
      {
        q: "Waardoor stond er binnen drie dagen een steviger fietsenhok dan ooit?",
        options: [
          "Buurman Ties en een paar vaders repareerden het samen",
          "De storm was gaan liggen",
          "Groep zeven maakte zitjes van de boomstam",
          "De school stuurde alle ouders een bericht",
        ],
        answer: 0,
        evidence: "...bood hij aan het hok gratis te repareren. Een paar vaders hielpen mee. Binnen drie dagen stond er een steviger hok dan ooit.",
        wrongHints: [
          null,
          null,
          "De zitjes horen bij een ánder gevolg van de storm, helemaal aan het eind van de tekst. Wie waren er met het hók bezig?",
          "Dat bericht ging over lopend naar school komen. Zoek in de tekst wie er aan het hok wérkten.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de gebeurtenis op", tekst: "De vraag gaat over het nieuwe, stevige hok. Dat staat in de derde alinea: 'Binnen drie dagen stond er een steviger hok dan ooit.'" },
            { titel: "Geen signaalwoord? Waardoor-vraag!", tekst: "Er staat geen wegwijzer bij die zin. Stel dus zelf de vraag: waardoor stond dat hok er zo snel? Lees de zinnen ervóór: Ties repareerde het gratis en een paar vaders hielpen mee." },
            { titel: "Controleer", tekst: "Invoeg-truc: 'Ties en de vaders werkten samen. Daardoor stond er binnen drie dagen een steviger hok.' Logisch — veel handen maken licht werk!" },
          ],
          woorden: [
            { woord: "repareren", uitleg: "Iets kapots weer heel maken." },
            { woord: "conciërge", uitleg: "Iemand die op school helpt met klusjes, het gebouw en het plein." },
          ],
          theorie: "**Eén oorzaak, veel gevolgen — houd ze uit elkaar**\n\nDe storm veroorzaakte in deze tekst een hele waaier aan gevolgen:\n\n- boom om → hok kapot → fietsen niet kwijt kunnen → bericht aan ouders\n- hok kapot → Ties helpt → nieuw, steviger hok\n- boom om → stam in schijven → zitjes voor het plein\n\nDe toets vraagt altijd naar één specifieke schakel. Lees de vraag dus scherp: over wélk gevolg gaat het? Zoek dan precies dát stukje van de keten op — en laat je niet verleiden door een antwoord uit een andere tak van het verhaal.",
          voorbeelden: [
            { type: "juiste-tak", tekst: "Vraag over het hok? Blijf bij de hok-tak (Ties + vaders). Vraag over de zitjes? Dan zit je bij de stam-tak (conciërge + groep zeven)." },
          ],
          basiskennis: [
            { onderwerp: "Slot-zinnen vatten samen", uitleg: "De laatste zin ('Zo zorgde de storm... voor iets nieuws') vat de hele keten samen. Zulke zinnen helpen je het overzicht te houden." },
          ],
          niveaus: {
            basis: "Lees de zinnen vlak vóór 'binnen drie dagen stond er een steviger hok'. Wie waren daar aan het werk?",
            simpeler: "Een hok repareer je niet in je eentje zo snel. Welke mensen uit de tekst pakten samen het gereedschap?",
            nogSimpeler: "Zoek in de derde alinea wie er kwamen helpen met de reparatie.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tekstverbandenOorzaakGevolgPo = {
  id: "tekstverbanden-oorzaak-gevolg-po",
  title: "Oorzaak en gevolg — waardoor gebeurt het?",
  emoji: "🔀",
  level: "groep6-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — tekstverbanden: oorzaak en gevolg",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
  ],
  intro:
    "\"Waardoor kwam het dat...?\" — een vaste vraagvorm op de Doorstroomtoets begrijpend lezen. Leer met je leesbril op wat oorzaak en gevolg zijn, herken signaalwoorden als omdat, daardoor en dus, en prik door de valkuilen heen: de omgedraaide volgorde, het verstopte verband en 'na elkaar is niet door elkaar'. Met eigen oefenteksten en een toets-stijl eindopdracht.",
  triggerKeywords: [
    "oorzaak gevolg", "oorzaak en gevolg", "waardoor kwam het", "tekstverbanden",
    "signaalwoorden", "omdat doordat", "daardoor waardoor", "dus daarom zodat",
    "verbanden in teksten", "begrijpend lezen", "doorstroomtoets lezen",
    "cito begrijpend lezen", "verband tussen zinnen",
  ],
  chapters,
  steps,
};

export default tekstverbandenOorzaakGevolgPo;
