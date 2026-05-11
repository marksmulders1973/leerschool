// Leerpad: Begrijpend lezen — echte oefenteksten (Cito-stijl) voor groep 7-8.
// Audit-2 v2 cito-content-agent (2026-05-08) identificeerde dat begrijpend
// lezen 0% gedekt was met echte oefenteksten. Dit pad sluit dat gat.
//
// Per stap: 1 tekst van ~200-250 woorden + 4 Cito-stijl meerkeuzevragen.
// Vraagvarianten: letterlijk / inferentie / hoofdgedachte / woordbetekenis.
// Plausibele afleiders, geen dummies.

const COLORS = {
  curve: "#5b86b8",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["📰", "📖", "🗣️", "📓", "🏆"];

const chapters = [
  { letter: "A", title: "Zakelijke tekst — informeren", emoji: "📰", from: 0, to: 0 },
  { letter: "B", title: "Instructieve tekst — uitleggen", emoji: "📖", from: 1, to: 1 },
  { letter: "C", title: "Betogende tekst — mening", emoji: "🗣️", from: 2, to: 2 },
  { letter: "D", title: "Verhalende tekst", emoji: "📓", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht — mix", emoji: "🏆", from: 4, to: 4 },
];

// ── Tekst 1: zakelijke tekst (informatief) ──────────────────────────
const tekst1 = `**De geschiedenis van de fiets**

De fiets bestaat ongeveer tweehonderd jaar. De eerste fiets werd in 1817 uitgevonden door de Duitse uitvinder Karl von Drais. Zijn fiets had nog geen pedalen — je moest jezelf met je voeten afzetten van de grond. Daarom werd hij ook wel 'loopfiets' genoemd.

In 1860 maakte een Franse smid pedalen aan het voorwiel. Dit was een grote vooruitgang, maar de fiets reed nog niet snel. Daarom werden er fietsen gemaakt met een enorm voorwiel: de zogenaamde hoge bi. Door de grote omtrek van het wiel ging één pedaalomwenteling gepaard met meer afstand.

Pas rond 1885 ontstond de moderne fiets. De Engelsman John Kemp Starley bedacht een fiets met twee even grote wielen en een ketting. De ketting bracht de kracht van de pedalen over op het achterwiel. Hierdoor was het niet meer nodig om een groot voorwiel te hebben.

In Nederland werd de fiets snel populair. Rond 1900 hadden steeds meer mensen er een. Tegenwoordig fietst bijna iedere Nederlander. Er zijn meer fietsen dan inwoners. Dat is uniek in de wereld.`;

// ── Tekst 2: instructieve tekst ─────────────────────────────────────
const tekst2 = `**Hoe maak je een goede paperclip-armband?**

Met paperclips kun je een leuke armband maken die er heel anders uitziet dan je zou denken. Je hebt nodig: ongeveer twintig metalen paperclips, een stukje touw, en een schaar. Werk rustig — als je gehaast bent, gaan de clips uit elkaar.

Begin met de eerste paperclip. Schuif er een tweede paperclip doorheen, zodat ze in elkaar haken. Doe dit voorzichtig: je wilt niet dat de eerste clip openbuigt. Doe dit nogmaals met een derde, vierde en vijfde paperclip. Trek lichtjes om te controleren dat de ketting niet losschiet.

Als je armband bijna lang genoeg is om om je pols te passen, stop dan. Meet het door de keten om je pols te leggen. Hij moet ruim zitten — je polsbeweging mag niet beperkt worden. Voeg eventueel nog een of twee paperclips toe.

Maak nu de sluiting. Knip een stukje touw van zo'n tien centimeter af. Steek het touw door de eerste én de laatste paperclip. Knoop een stevige knoop. Je armband is klaar! Wil je hem mooier maken? Verf de paperclips dan met nagellak voordat je begint.`;

// ── Tekst 3: betogende tekst (mening) ───────────────────────────────
const tekst3 = `**Telefoons horen niet thuis op de basisschool**

Steeds meer kinderen hebben tegenwoordig een eigen smartphone. Sommige scholen vinden dat prima en laten leerlingen hun telefoon gebruiken in de klas. Ik ben van mening dat dit een slecht idee is. Telefoons horen niet thuis op de basisschool.

De eerste reden is dat telefoons leerlingen afleiden. Onderzoek laat zien dat een notificatie tijdens een les ervoor zorgt dat een leerling minutenlang minder goed oplet. Zelfs een uitgeschakelde telefoon op tafel zorgt voor afleiding — kinderen denken aan wat er straks misschien op staat.

Ten tweede schaadt schermtijd het sociale leven. In de pauze zitten kinderen met telefoon vaak alleen op hun scherm te kijken. Ze maken minder vrienden en bewegen minder. Op een basisschool moet juist gespeeld worden.

Tegenstanders zeggen dat kinderen moeten leren omgaan met technologie. Dat klopt, maar dat hoeft niet op school. Thuis kunnen ouders het rustig begeleiden. Op school is leren belangrijker.

Daarom: laat de telefoon thuis. Of in de tas. Maar niet in de klas. Onze kinderen hebben recht op een schoolomgeving zonder schermen.`;

// ── Tekst 4: verhalende tekst ───────────────────────────────────────
const tekst4 = `**De vergeten lunchtrommel**

Sara stapte uit de bus. Ze keek naar haar lege handen. Verbaasd voelde ze in haar rugzak — geen lunchtrommel. *Mam was vergeten haar boterham mee te geven.* Of had ze hem zelf laten staan? Ze kon het zich niet herinneren.

In de eerste pauze zag iedereen om haar heen eten. Tom had een dubbele boterham met kaas. Lisa knabbelde op een appel. Sara probeerde te doen alsof ze geen honger had, maar haar buik knorde. Hardop. Tom keek op.

"Heb je geen brood mee?" vroeg hij.

Sara knikte schaapachtig. Tom haalde meteen zijn boterham doormidden. "Hier," zei hij. "Ik heb genoeg."

Sara aarzelde. Ze wilde geen medelijden. Maar Tom legde de boterham gewoon op haar tafel en draaide zich om naar zijn eigen lunch. Hij maakte er geen punt van.

Toen Sara die middag thuiskwam, vertelde ze het verhaal aan haar moeder. Haar moeder pakte een briefje en schreef "Bedankt!" erop, met een tekening van een hartje. "Geef dit morgen aan Tom," zei ze.

De volgende dag legde Sara het briefje op Toms tafel. Hij las het, glimlachte, en stopte het in zijn zak. Niet veel later vond Sara een nieuw briefje in haar etui: "Graag gedaan."`;

const steps = [
  // ── Stap 1 ──────────────────────────────────────────────────────
  {
    title: "Zakelijke tekst — informeren",
    explanation: tekst1 + "\n\n*Beantwoord de 4 vragen op basis van de tekst hierboven.*",
    checks: [
      {
        // letterlijke vraag
        q: "In welk jaar werd de eerste fiets uitgevonden?",
        options: ["1817", "1860", "1885", "1900"],
        answer: 0,
        evidence: "De eerste fiets werd in 1817 uitgevonden door de Duitse uitvinder Karl von Drais.",
        wrongHints: [
          null,
          "Toen werden pedalen toegevoegd — de fiets bestond toen al. Zoek het allereerste jaartal.",
          "Toen ontstond pas de moderne fiets met ketting. Zoek de uitvinding van de allereerste.",
          "Toen werd de fiets populair in Nederland — niet de uitvinding zelf.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welk type vraag is dit?", tekst: "Een 'letterlijke vraag': het antwoord staat ERGENS LETTERLIJK in de tekst. Je hoeft niets uit te rekenen of af te leiden — alleen vinden." },
            { titel: "Welk woord zoek je?", tekst: "De vraag vraagt naar een JAAR — dus zoek alle jaartallen in de tekst (1817, 1860, 1885, 1900)." },
            { titel: "Welk jaar bij wat?", tekst: "Lees de zin rond elk jaartal. Welk jaartal hoort bij 'eerste fiets uitgevonden'?" },
          ],
          woorden: [
            { woord: "uitvinden", uitleg: "Iets nieuws BEDENKEN dat er nog niet was. De UITVINDER is degene die het bedacht." },
            { woord: "letterlijke vraag", uitleg: "Een vraag waarvan het antwoord precies in de tekst staat. Je hoeft alleen te zoeken." },
            { woord: "loopfiets", uitleg: "De allereerste fiets — zonder pedalen. Je liep ermee, je voeten op de grond." },
          ],
          theorie: "**Letterlijke vragen: zoek-strategie**\n\n1. Wat is het KERNWOORD in de vraag? Hier: 'eerste fiets uitgevonden'\n2. Zoek dat woord (of synoniem) in de tekst.\n3. Het antwoord staat in DEZELFDE zin of erbij.\n\nLet op valstrikken: er staan 4 jaartallen in de tekst, maar slechts 1 hoort bij DE EERSTE uitvinding. De andere zijn latere stappen.",
          voorbeelden: [
            { type: "vinden", tekst: "Zin 2 zegt: 'De eerste fiets werd in 1817 uitgevonden door Karl von Drais.' Antwoord = 1817 (=A)." },
            { type: "valstrik", tekst: "1860 = pedalen, 1885 = ketting, 1900 = Nederland populair. Allemaal andere momenten in fietsgeschiedenis, NIET de eerste uitvinding." },
          ],
          basiskennis: [
            { onderwerp: "Eerst zoeken, dan kiezen", uitleg: "Bij een letterlijke vraag: zoek EERST het antwoord in de tekst. Pas DAARNA kijk je naar de antwoordopties." },
          ],
          niveaus: {
            basis: "Letterlijke vraag → vind 'eerste fiets uitgevonden' in de tekst. Zin: '1817 door Karl von Drais'. Antwoord A.",
            simpeler: "De vraag wil weten WANNEER de eerste fiets er was. Lees de tekst, zoek de eerste keer dat een fiets genoemd wordt. Eerste zin van alinea 1: 1817. Klaar.",
            nogSimpeler: "Eerste = 1817 = A.",
          },
        },
      },
      {
        // inferentie — afleiden uit tekst
        q: "Waarom had de hoge bi een groot voorwiel?",
        options: [
          "Met één pedaalomwenteling legde je dan meer afstand af",
          "Omdat metaal toen duur was en zo bespaarden ze materiaal",
          "Omdat het mooier oogde dan een gewone fiets",
          "Omdat de pedalen op het achterwiel zaten",
        ],
        answer: 0,
        evidence: "Door de grote omtrek van het wiel ging één pedaalomwenteling gepaard met meer afstand.",
        wrongHints: [
          null,
          "Tekst zegt niets over kosten of materiaalbesparing — let op de zin over snelheid.",
          "Esthetiek wordt nergens als reden genoemd. Wat zegt de tekst over snelheid?",
          "Bij de hoge bi zaten pedalen juist op het *voor*wiel.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welk type vraag?", tekst: "Een 'waarom-vraag' = inferentie. Het antwoord staat NIET letterlijk maar je moet het AFLEIDEN uit wat in de tekst staat." },
            { titel: "Zoek de zin over de hoge bi", tekst: "Tekst zegt: 'Door de grote omtrek van het wiel ging één pedaalomwenteling gepaard met meer afstand.' Dat is je hint." },
            { titel: "Wat betekent dat?", tekst: "Groot wiel = grote omtrek = met 1x trappen kom je VERDER. Dus de fiets is sneller. Dat is de echte reden." },
            { titel: "Toets de andere opties", tekst: "Materiaal-besparing: NERGENS in tekst. Mooier oogt: NERGENS. Pedalen op achterwiel: tegendeel — pedalen zaten juist op voorwiel bij hoge bi." },
          ],
          woorden: [
            { woord: "inferentie", uitleg: "Iets afleiden uit wat er staat — het antwoord staat niet letterlijk maar je moet het BEDENKEN uit de tekst." },
            { woord: "hoge bi", uitleg: "Een ouderwetse fiets met enorm voorwiel en klein achterwiel — uit ~1860-1880." },
            { woord: "omtrek", uitleg: "De totale buitenkant-lengte van een rondje. Een groot wiel heeft een grotere omtrek." },
            { woord: "pedaalomwenteling", uitleg: "Eén keer rondtrappen met de pedalen." },
          ],
          theorie: "**Inferentie-vragen herken je aan: 'waarom?', 'hoe komt het dat?', 'wat kun je afleiden?'**\n\nStrategie:\n1. Zoek in de tekst de relevante zin/alinea\n2. Lees wat er LETTERLIJK staat\n3. Vraag jezelf af: WAAR LEIDT DIT TOE?\n4. Het antwoord-optie dat aansluit bij die afleiding is het juiste.\n\nValstrikken: andere opties klinken plausibel maar zijn NIET in de tekst onderbouwd (bijv. 'omdat het mooier oogt' — klinkt logisch maar staat er niet).",
          voorbeelden: [
            { type: "afleiding", tekst: "Tekst zegt 'groot wiel = meer afstand per trap'. Logische afleiding: dus het ging sneller. Antwoord A past." },
            { type: "valstrik", tekst: "'Materiaal besparen' = klinkt slim, maar staat NERGENS in tekst. Bij begrijpend lezen: alleen wat je kunt onderbouwen." },
          ],
          basiskennis: [
            { onderwerp: "Verschil letterlijk vs inferentie", uitleg: "Letterlijke vraag = staat in tekst. Inferentie-vraag = je moet het AFLEIDEN. Beide moeten ondersteund worden door de tekst." },
          ],
          niveaus: {
            basis: "Tekst geeft de hint: groot wiel → meer afstand per trap → sneller. Antwoord A.",
            simpeler: "Stel je voor: een klein wiel maakt 1 rondje = je gaat 50 cm verder. Een GROOT wiel maakt 1 rondje = je gaat 2 meter verder. Sneller dus. Daarom maakten ze het wiel groot. Antwoord A.",
            nogSimpeler: "Groot wiel = sneller = A.",
          },
        },
      },
      {
        // woordbetekenis uit context
        q: "Wat betekent 'pedaalomwenteling' in deze tekst?",
        options: [
          "Eén keer rond met de pedalen trappen",
          "Een speciaal soort fietsband",
          "Een bekend Frans automerk",
          "Een onderdeel van de remmen",
        ],
        answer: 0,
        evidence: "ging één pedaalomwenteling gepaard met meer afstand",
        wrongHints: [
          null,
          "Banden komen niet voor in dit stuk. Lees terug: 'pedaal' + 'omwenteling'.",
          "Geen automerk — let op de twee woorddelen.",
          "Geen rem-onderdeel. Pedalen + omwenteling = ?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welk type vraag?", tekst: "Een woordbetekenis-vraag. Je hoeft het woord NIET uit het hoofd te kennen — je leidt de betekenis af uit de TEKST eromheen (= context)." },
            { titel: "Splits het woord", tekst: "Een lang woord = vaak 2 of meer kleine woorden geplakt. 'pedaalomwenteling' = pedaal + omwenteling." },
            { titel: "Wat betekent elk deel?", tekst: "PEDAAL = waar je met je voeten op trapt. OMWENTELING = 1 keer rond. Samen: 1 keer rond trappen met de pedalen." },
            { titel: "Toets in context", tekst: "Tekst zegt: '1 pedaalomwenteling = meer afstand'. Past bij '1x trappen'. Antwoord A." },
          ],
          woorden: [
            { woord: "context", uitleg: "De tekst RONDOM een woord. Vaak helpt de zin ervoor en erna om te raden wat een nieuw woord betekent." },
            { woord: "omwenteling", uitleg: "Eén volledige draai of rondje." },
            { woord: "samengesteld woord", uitleg: "Een lang woord gemaakt van 2 of meer kortere woorden geplakt. Bv. fiets+wiel, school+plein." },
          ],
          theorie: "**Woordbetekenis-vragen — 3 strategieën:**\n\n1. **Splits**: lang woord? Splits in delen. Elk deel ken je vaak.\n2. **Context**: lees de zin ERVOOR en ERNA. Wat zou logisch zijn?\n3. **Eliminatie**: kruis af welke opties NIET kunnen (geen ban-deel = geen band).\n\nLet op: Cito kiest vaak 4 opties die WEL bestaan, maar maar 1 past bij de TEKST.",
          voorbeelden: [
            { type: "splits", tekst: "Pedaal + omwenteling = trappen + 1x rond = pedaal-trapje. Als je elk deel kent, ken je het hele woord." },
            { type: "context", tekst: "Tekst: '1 pedaalomwenteling met meer afstand'. Wat klopt: '1 keer trappen met de pedalen' (gaat over afstand met fietsen). De andere opties (band, automerk, rem) passen niet bij die zin." },
          ],
          basiskennis: [
            { onderwerp: "Niet alle woorden hoef je te kennen", uitleg: "Bij een toets is het OK om woorden tegen te komen die je nog nooit gezien hebt. De tekst geeft genoeg hints — je kunt het altijd oplossen." },
          ],
          niveaus: {
            basis: "Pedaal + omwenteling = 1x trappen rond. Antwoord A.",
            simpeler: "Lang woord? Splits 'm op. Pedaal = waar je trapt. Omwenteling = 1x rond. Samen: 1x rond trappen met de pedalen. Dat is A.",
            nogSimpeler: "Pedaal + rondje = trappen = A.",
          },
        },
      },
      {
        // hoofdgedachte
        q: "Wat is de hoofdgedachte van deze tekst?",
        options: [
          "De fiets is in 200 jaar veel veranderd, van loopfiets tot moderne fiets",
          "Karl von Drais verdient meer eer dan hij krijgt",
          "Nederlanders fietsen het meest van iedereen ter wereld",
          "De ketting was de allerbelangrijkste uitvinding in de geschiedenis",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Klein detail uit zin 2 — niet het hoofdpunt van de hele tekst.",
          "Komt alleen in de laatste alinea voor — slot, niet kerngedachte van het hele verhaal.",
          "Wel belangrijk in de tekst, maar te eenzijdig — wat is het hele verhaal?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een 'hoofdgedachte'?", tekst: "De ENE belangrijkste boodschap van de tekst — als je in 1 zin moest zeggen waar de tekst over gaat." },
            { titel: "Hoe vind je 'm?", tekst: "Lees ELKE alinea apart. Schrijf in 1 woord op waar die over gaat. Wat zit ER IN ALLEMAAL? Dat is de rode draad." },
            { titel: "Pas toe op deze tekst", tekst: "Alinea 1: 1817 loopfiets. Alinea 2: 1860 pedalen. Alinea 3: 1885 ketting. Alinea 4: Nederland fietsland. Rode draad: VERANDERING door tijd." },
            { titel: "Welke optie past bij rode draad?", tekst: "A: '200 jaar veranderingen' = past bij ALLE alinea's ✓. B/C/D zijn details uit 1 alinea." },
          ],
          woorden: [
            { woord: "hoofdgedachte", uitleg: "De ene kernboodschap van de hele tekst. NIET een detail." },
            { woord: "alinea", uitleg: "Een blokje tekst dat over 1 deel-onderwerp gaat. Begint op een nieuwe regel." },
            { woord: "rode draad", uitleg: "Het ene wat door de hele tekst loopt — wat in elke alinea terugkomt." },
            { woord: "detail", uitleg: "Een klein feit uit de tekst (bv. een jaartal of naam). NIET het hoofdpunt." },
          ],
          theorie: "**De hoofdgedachte vinden — 3 vragen:**\n\n1. Waar gaat ELKE alinea over? Schrijf in 1 woord per alinea.\n2. Wat zit er in ALLE alinea's? Dat is de rode draad.\n3. De hoofdgedachte is meestal een ZIN die de hele rode draad samenvat.\n\n**Trucs van Cito-makers:**\n- Vaak zijn er 4 antwoorden waarvan 3 echt KLOPPEN (komen voor in de tekst), maar als DETAIL.\n- Het juiste antwoord is meestal het ALGEMEENSTE — niet een specifiek feit.",
          voorbeelden: [
            { type: "fiets-tekst", tekst: "4 alinea's = 4 momenten in tijd (1817 → 1900). Rode draad = VERANDERING door 200 jaar. Hoofdgedachte = A." },
            { type: "andere", tekst: "Tekst over koffie. Alinea 1 Ethiopië, Alinea 2 Arabië, Alinea 3 Europa, Alinea 4 wereldwijd. Rode draad: VERSPREIDING. Hoofdgedachte = 'koffie heeft zich verspreid over de wereld'." },
          ],
          basiskennis: [
            { onderwerp: "Hoofdgedachte ≠ samenvatting", uitleg: "Een samenvatting noemt feiten. Een hoofdgedachte is de ENE rode draad — meestal 1 zin." },
          ],
          niveaus: {
            basis: "Rode draad door 4 alinea's = fiets veranderde door 200 jaar = A.",
            simpeler: "Lees: 1817 loopfiets, 1860 pedalen, 1885 ketting, 1900 Nederland. Wat zie je? VERANDERING in de tijd. Antwoord A zegt precies dat.",
            nogSimpeler: "4 momenten in tijd = veranderen = A.",
          },
        },
      },
    ],
  },

  // ── Stap 2 ──────────────────────────────────────────────────────
  {
    title: "Instructieve tekst — uitleggen",
    explanation: tekst2 + "\n\n*Beantwoord de 4 vragen op basis van de tekst.*",
    checks: [
      {
        // letterlijke vraag
        q: "Wat heb je nodig om de armband te maken?",
        options: [
          "Twintig paperclips, een stukje touw en een schaar",
          "Twintig paperclips en een naald",
          "Tien paperclips en garen",
          "Een armband en wat touw",
        ],
        answer: 0,
        evidence: "Je hebt nodig: ongeveer twintig metalen paperclips, een stukje touw, en een schaar.",
        wrongHints: [
          null,
          "Geen naald in de tekst — lees terug welke drie dingen genoemd worden.",
          "Niet tien — en geen garen.",
          "Je *maakt* zelf de armband. Lees nogmaals de eerste alinea.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welk type vraag?", tekst: "Letterlijke vraag — antwoord staat ERGENS in de tekst, woord voor woord. Je hoeft alleen te zoeken." },
            { titel: "Welk kernwoord?", tekst: "'Wat heb je nodig?' = zoek naar 'nodig' of 'je hebt nodig:' in de tekst." },
            { titel: "Vergelijk met opties", tekst: "Tekst zegt: '20 paperclips + touw + schaar'. Optie A komt precies overeen. B/C/D missen iets of voegen iets toe wat er niet staat." },
          ],
          woorden: [
            { woord: "instructie", uitleg: "Een uitleg-tekst die STAP VOOR STAP vertelt hoe je iets doet — een recept, gebruiksaanwijzing, knutselstappen." },
            { woord: "letterlijke vraag", uitleg: "Een vraag waarvan het antwoord precies in de tekst staat. Zoeken, niet bedenken." },
          ],
          theorie: "**Bij instructieve teksten staat het antwoord vaak in een opsomming** (een lijstje na een dubbele punt). Zoek naar:\n- 'Je hebt nodig:'\n- 'Wat je gebruikt:'\n- 'Materialen:'\nWat erna komt, is meestal het antwoord.\n\nValstrikken: andere opties zien er plausibel uit (naald, garen) maar staan NIET in deze tekst.",
          voorbeelden: [
            { type: "vinden", tekst: "Tekst: 'Je hebt nodig: 20 paperclips, touw, schaar.' = letterlijke kopie in optie A." },
          ],
          basiskennis: [
            { onderwerp: "Antwoord = wat in tekst staat", uitleg: "Bij begrijpend lezen mag je NIETS zelf bedenken. Het antwoord moet in de tekst staan of erop gebaseerd zijn." },
          ],
          niveaus: {
            basis: "Tekst: '20 paperclips + touw + schaar'. Optie A is 1-op-1 = juist.",
            simpeler: "Zoek de zin met 'je hebt nodig'. Lees wat erachter komt: 20 paperclips, touw, schaar. Dat staat letterlijk in optie A.",
            nogSimpeler: "Lijstje uit tekst = A.",
          },
        },
      },
      {
        // inferentie
        q: "Waarom moet je rustig werken volgens de tekst?",
        options: [
          "Omdat de paperclips anders uit elkaar gaan",
          "Omdat je vingers anders zeer doen",
          "Omdat het meer dan een uur duurt",
          "Omdat je anders teveel paperclips gebruikt",
        ],
        answer: 0,
        evidence: "Werk rustig — als je gehaast bent, gaan de clips uit elkaar.",
        wrongHints: [
          null,
          "Vingers worden niet genoemd in de tekst.",
          "De duur staat nergens.",
          "Het aantal paperclips ligt vast (~20), niet afhankelijk van haastig werken.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welk type?", tekst: "Een 'waarom-vraag' = bijna letterlijk. De tekst geeft de reden direct." },
            { titel: "Zoek de zin met 'rustig'", tekst: "Tekst: 'Werk rustig — als je gehaast bent, gaan de clips uit elkaar.' Dat is de reden." },
            { titel: "Match met opties", tekst: "'Clips gaan uit elkaar' = optie A. Andere opties (vingers, duur, aantal) staan NIET in de tekst." },
          ],
          woorden: [
            { woord: "gehaast", uitleg: "Snel werken zonder geduld. Tegenovergestelde van rustig." },
          ],
          theorie: "**Bij 'waarom?'-vragen** zoek je het 'omdat' of de uitleg ERNA in de tekst.\n\nFormules om naar te zoeken:\n- 'omdat...'\n- 'als ... dan ...'\n- 'door...'\n- 'daarom...'\n\nValstrikken: andere opties klinken aannemelijk (zere vingers? klinkt logisch) maar staan NIET in deze specifieke tekst.",
          voorbeelden: [
            { type: "match", tekst: "Tekst: 'als je gehaast bent gaan de clips uit elkaar' = direct gekoppeld aan optie A." },
          ],
          basiskennis: [
            { onderwerp: "Begrijpend lezen vs algemene kennis", uitleg: "Het antwoord moet uit DEZE tekst komen — niet uit wat jij denkt of weet. Soms ligt iets voor de hand maar staat het er niet." },
          ],
          niveaus: {
            basis: "Tekst zegt 'gehaast → clips uit elkaar'. Antwoord A.",
            simpeler: "De vraag is 'waarom rustig werken?'. Zoek het woord 'rustig' in de tekst. Direct erna staat de reden: 'als je gehaast bent gaan de clips uit elkaar'. Dat is A.",
            nogSimpeler: "Gehaast = clips kapot = A.",
          },
        },
      },
      {
        // letterlijk — volgorde
        q: "Wat doe je VLAK voordat je de sluiting maakt?",
        options: [
          "Meten of de keten om je pols past",
          "De paperclips verven met nagellak",
          "Een knoop leggen in het touw",
          "De schaar in twee delen knippen",
        ],
        answer: 0,
        evidence: "Meet het door de keten om je pols te leggen.",
        wrongHints: [
          null,
          "Verven gebeurt VOORDAT je begint, niet vlak voor de sluiting.",
          "Dat doe je AAN het einde, bij de sluiting zelf.",
          "Dat staat nergens en zou onhandig zijn.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welk type?", tekst: "Een 'volgorde-vraag': je moet de stappen in de juiste volgorde hebben. Niet alleen wat, maar WANNEER." },
            { titel: "Zoek de sluiting-stap", tekst: "Tekst zegt: 'Maak nu de sluiting. Knip een stukje touw...' = sluiting is na het meten." },
            { titel: "Wat staat ER VOOR?", tekst: "Vlak voor 'maak nu de sluiting' staat: 'Meet het door de keten om je pols te leggen.' = optie A." },
            { titel: "Toets andere opties", tekst: "Verven = stap VOORDAT je begint (alinea 1). Knoop = AT de sluiting zelf, niet ervoor. Schaar knippen = nergens." },
          ],
          woorden: [
            { woord: "vlak voor", uitleg: "Direct ervoor — de stap die meteen daaraan voorafgaat. Niet eerder." },
            { woord: "sluiting", uitleg: "Het slot dat een armband bij elkaar houdt rond je pols." },
          ],
          theorie: "**Volgorde-vragen herken je aan: 'eerst', 'voor', 'na', 'tussen', 'vlak voor'.**\n\nStrategie:\n1. Zoek de gegeven stap (hier: 'sluiting maken')\n2. Lees wat ERVOOR staat in de tekst\n3. Dat is je antwoord\n\nValstrikken: een optie kan WEL in de tekst staan maar op een ANDER moment (bv. verven gebeurt eerst — niet vlak voor sluiting).",
          voorbeelden: [
            { type: "volgorde", tekst: "Tekst-volgorde: 1) verven (vooraf) 2) clips haken 3) bijna-lengte → STOP 4) meten om pols 5) sluiting maken. Vlak voor 5 = stap 4 = meten." },
          ],
          basiskennis: [
            { onderwerp: "Tekst lezen = volgorde respecteren", uitleg: "Een instructieve tekst geeft stappen in de juiste volgorde. Lees 'm zo." },
          ],
          niveaus: {
            basis: "Vlak voor 'sluiting maken' staat 'meet om pols'. Antwoord A.",
            simpeler: "Stel je voor: jij maakt de armband zelf. Eerst hak je clips, dan check je of het past om je pols, DAARNA maak je het slot. 'Vlak voor het slot' = check je pols-maat = meten = A.",
            nogSimpeler: "Voor sluiting = meten = A.",
          },
        },
      },
      {
        // hoofdgedachte / tekstdoel
        q: "Wat is het doel van deze tekst?",
        options: [
          "Stap voor stap uitleggen hoe je een paperclip-armband maakt",
          "Vertellen waar paperclips voor uitgevonden zijn",
          "Argumenteren waarom paperclips beter zijn dan andere armbanden",
          "Een verhaal vertellen over een meisje met een armband",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De tekst vertelt geen geschiedenis van paperclips.",
          "Geen vergelijking of mening — alleen instructies.",
          "Geen verhaal of personage in deze tekst.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat zoeken we?", tekst: "Het DOEL van de tekst — waarom heeft de schrijver deze tekst gemaakt?" },
            { titel: "4 hoofd-doelen herkennen", tekst: "Informeren (uitleggen wat iets is) / Instrueren (hoe doe je iets) / Overtuigen (mening) / Vermaken (verhaal)." },
            { titel: "Welk doel past hier?", tekst: "Tekst geeft STAPPEN ('begin met de eerste paperclip', 'doe nu', 'maak nu de sluiting'). Dat is INSTRUEREN = optie A." },
            { titel: "Toets andere opties", tekst: "Geschiedenis paperclips: nergens. Vergelijking met andere armbanden: nergens. Verhaal met personage (Sara, Tom): nergens. Alleen instructies." },
          ],
          woorden: [
            { woord: "tekstdoel", uitleg: "Waarom is de tekst geschreven? Informeren, instrueren, overtuigen of vermaken." },
            { woord: "instructie", uitleg: "Stap-voor-stap uitleg HOE je iets moet doen. Bv. recept, gebruiksaanwijzing." },
            { woord: "argumenteren", uitleg: "Een mening verdedigen met redenen. Tekst probeert je te overtuigen." },
            { woord: "personage", uitleg: "Een persoon in een verhaal." },
          ],
          theorie: "**4 tekstdoelen — herken ze aan signalen:**\n\n| Doel | Signaal-woorden |\n|---|---|\n| Informeren | 'is een...', feiten, jaartallen, beschrijving |\n| Instrueren | 'doe', 'maak', 'begin met', stap-voor-stap |\n| Overtuigen | 'ik vind', 'beter', 'daarom', argumenten |\n| Vermaken | 'er was eens', personage met naam, dialoog |\n\nDeze tekst heeft 'doe', 'begin met', 'maak nu de sluiting' = INSTRUEREN.",
          voorbeelden: [
            { type: "instrueren", tekst: "Recept voor pannenkoeken = instrueren. Geeft stappen: meng, bak, draai om." },
            { type: "informeren", tekst: "'De fiets bestaat 200 jaar' = informeren. Geeft feiten over geschiedenis." },
          ],
          basiskennis: [
            { onderwerp: "1 tekst = 1 hoofddoel", uitleg: "Een tekst kan een mengeling lijken, maar er is altijd 1 hoofddoel — wat de schrijver echt wil bereiken." },
          ],
          niveaus: {
            basis: "Tekst geeft stappen om iets te maken = instrueren = A.",
            simpeler: "Lees de tekst. Wat doet hij vooral? 'Doe dit, doe dat, maak nu...'. Hij vertelt je STAP VOOR STAP hoe je iets maakt. Dat heet instrueren. A.",
            nogSimpeler: "Stappen om iets te maken = instructie = A.",
          },
        },
      },
    ],
  },

  // ── Stap 3 ──────────────────────────────────────────────────────
  {
    title: "Betogende tekst — mening herkennen",
    explanation: tekst3 + "\n\n*Bij betogende teksten geeft de schrijver zijn mening + argumenten. Beantwoord de 4 vragen.*",
    checks: [
      {
        // hoofdstandpunt
        q: "Wat is het hoofdstandpunt van de schrijver?",
        options: [
          "Telefoons horen niet thuis op de basisschool",
          "Kinderen leren beter zonder ouders erbij",
          "Sociale media zijn slecht voor de gezondheid",
          "Schoolregels moeten strenger worden",
        ],
        answer: 0,
        evidence: "Ik ben van mening dat dit een slecht idee is. Telefoons horen niet thuis op de basisschool.",
        wrongHints: [
          null,
          "Ouders worden alleen genoemd als context — geen standpunt.",
          "Sociale media komen niet expliciet voor.",
          "Te algemeen — de tekst gaat specifiek over één ding.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een 'standpunt'?", tekst: "De MENING van de schrijver. Wat hij vindt en wil verdedigen." },
            { titel: "Zoek de mening-zin", tekst: "Bij betogende teksten staat het standpunt vaak vroeg in de tekst, met woorden als 'ik vind', 'ik ben van mening', 'mijn standpunt is'." },
            { titel: "Vergelijk met opties", tekst: "Tekst zegt: 'Ik ben van mening... Telefoons horen niet thuis op de basisschool.' = letterlijk optie A." },
          ],
          woorden: [
            { woord: "standpunt", uitleg: "De mening van iemand — wat hij of zij ergens van vindt." },
            { woord: "betogende tekst", uitleg: "Een tekst waarin de schrijver een mening geeft en die met argumenten verdedigt." },
            { woord: "argument", uitleg: "Een reden om je mening te ondersteunen." },
          ],
          theorie: "**Bij betogende teksten herken je het standpunt aan signaalwoorden:**\n- 'Ik vind...'\n- 'Ik ben van mening dat...'\n- 'Mijn standpunt is...'\n- 'Daarom moet...'\n\nVaak staat het in de eerste of laatste alinea. De rest van de tekst zijn ARGUMENTEN om dat standpunt te ondersteunen.",
          voorbeelden: [
            { type: "vinden", tekst: "Tekst alinea 1: 'Ik ben van mening dat dit een slecht idee is. Telefoons horen niet thuis op de basisschool.' = optie A 1-op-1." },
          ],
          basiskennis: [
            { onderwerp: "Standpunt vs argument", uitleg: "Standpunt = WAT je vindt. Argument = WAAROM je dat vindt. Een tekst heeft 1 standpunt en meerdere argumenten." },
          ],
          niveaus: {
            basis: "Tekst zegt: 'telefoons horen niet thuis op de basisschool' (mening). Antwoord A.",
            simpeler: "Wat vindt de schrijver? Lees de eerste alinea. 'Ik ben van mening... telefoons NIET op basisschool'. Dat is zijn standpunt = A.",
            nogSimpeler: "Mening = telefoons niet op school = A.",
          },
        },
      },
      {
        // argumenten herkennen
        q: "Welk argument noemt de schrijver NIET?",
        options: [
          "Telefoons zijn te duur voor basisschoolkinderen",
          "Telefoons leiden af tijdens de les",
          "Schermtijd schaadt het sociale leven",
          "Thuis kunnen ouders begeleiding geven",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Wel genoemd: notificaties leiden af.",
          "Wel genoemd: kinderen zitten op telefoon ipv samen spelen.",
          "Wel genoemd: ouders kunnen het thuis begeleiden.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welk type vraag?", tekst: "'NIET-vraag' — je zoekt het argument dat ER NIET STAAT. 3 staan er wel, 1 niet. Vink af." },
            { titel: "Loop tekst af", tekst: "Tekst zegt: 'afleiden door notificaties' (optie B ✓), 'sociale leven schaden' (C ✓), 'thuis kunnen ouders begeleiden' (D ✓). En A 'te duur'? NERGENS." },
            { titel: "Conclusie", tekst: "Optie A staat NIET in de tekst → dat is het antwoord." },
          ],
          woorden: [
            { woord: "argument", uitleg: "Reden om een mening te ondersteunen." },
            { woord: "afleiding", uitleg: "Iets dat je aandacht trekt weg van wat je aan het doen bent." },
          ],
          theorie: "**'NIET-vragen' werken anders dan gewone vragen.**\n\nStrategie:\n1. Lees ELK antwoord.\n2. Voor elk: zoek in de tekst — staat het er WEL of NIET?\n3. De optie die NIET in de tekst staat, is het antwoord.\n\nValstrik: een optie kan plausibel klinken (te duur klinkt logisch) maar als de schrijver het NIET noemt, is het juist het antwoord op een NIET-vraag.",
          voorbeelden: [
            { type: "checklist", tekst: "B (afleiden) ✓ in tekst. C (sociaal) ✓ in tekst. D (thuis ouders) ✓ in tekst. A (te duur) ✗ — niet in tekst → A is het antwoord." },
          ],
          basiskennis: [
            { onderwerp: "Lees de vraag goed", uitleg: "'NIET' kan je makkelijk over het hoofd zien. Onderstreep het mentaal — anders kies je het verkeerde." },
          ],
          niveaus: {
            basis: "Drie argumenten staan in tekst (afleiding, sociaal, thuis-ouders). 'Te duur' staat er niet → A.",
            simpeler: "Vink elk antwoord af in de tekst. Welke staat er NIET? 'Te duur' staat nergens — dat is je antwoord. A.",
            nogSimpeler: "Niet in tekst = A.",
          },
        },
      },
      {
        // tegenargument herkennen
        q: "Hoe gaat de schrijver om met het tegenargument 'kinderen moeten leren omgaan met technologie'?",
        options: [
          "De schrijver erkent het, maar zegt dat dat thuis kan — niet op school",
          "De schrijver negeert dit argument volledig",
          "De schrijver zegt dat technologie altijd slecht is",
          "De schrijver beweert dat kinderen het al kunnen",
        ],
        answer: 0,
        evidence: "Tegenstanders zeggen dat kinderen moeten leren omgaan met technologie. Dat klopt, maar dat hoeft niet op school. Thuis kunnen ouders het rustig begeleiden.",
        wrongHints: [
          null,
          "Het tegenargument staat WEL in de tekst — vierde alinea.",
          "Schrijver zegt het tegenovergestelde: erkent dat kinderen het moeten leren.",
          "Geen claim dat kinderen het al kunnen.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een 'tegenargument'?", tekst: "Een argument van iemand die het ONEENS is met de schrijver. Goede betogers nemen tegenargumenten serieus en weerleggen ze." },
            { titel: "Zoek 'tegenstanders' / 'echter' in tekst", tekst: "Tekst alinea 4: 'Tegenstanders zeggen dat kinderen moeten leren...'. Daar staat het tegenargument." },
            { titel: "Hoe reageert schrijver?", tekst: "'Dat klopt, maar dat hoeft niet op school. Thuis kunnen ouders het rustig begeleiden.' = ERKENT het tegenargument MAAR verwijst naar thuis. Optie A klopt." },
          ],
          woorden: [
            { woord: "tegenargument", uitleg: "Argument tegen jouw mening — wat anderen zeggen om jou ongelijk te geven." },
            { woord: "weerleggen", uitleg: "Een tegenargument met een goede reden afzwakken of ongeldig verklaren." },
            { woord: "erkennen", uitleg: "Toegeven dat iets klopt — ook al ben je het er niet helemaal mee eens." },
          ],
          theorie: "**Goede betogers gebruiken een trucje: ja-maar.**\n\n'Ja, dat tegenargument klopt — MAAR (mijn standpunt geldt nog steeds, want...)'\n\nDit maakt een tekst sterker: de schrijver toont dat hij heeft nagedacht, niet alleen blind zijn eigen mening verdedigt. Herken het signaal: 'klopt, maar...' / 'dat is waar, echter...'.",
          voorbeelden: [
            { type: "ja-maar", tekst: "Tekst: 'Tegenstanders zeggen X. Dat klopt (ERKEND), maar Y (WEERLEGD).' = klassieke ja-maar." },
          ],
          basiskennis: [
            { onderwerp: "Genuanceerd standpunt", uitleg: "De schrijver is niet 'zwart-wit'. Hij erkent een gedeelte van wat de tegenstander zegt, maar verfijnt het." },
          ],
          niveaus: {
            basis: "Schrijver: 'klopt, maar thuis ipv school' = erkennen + verschuiven. Antwoord A.",
            simpeler: "De schrijver zegt: 'ja, dat klopt' (= erkent het) maar voegt toe 'thuis kan dat ook' (= niet op school). Hij negeert het niet, hij denkt mee. A.",
            nogSimpeler: "Erkent + verschuift naar thuis = A.",
          },
        },
      },
      {
        // toon/houding
        q: "Welke houding heeft de schrijver?",
        options: [
          "Stellig en overtuigd",
          "Twijfelend en zoekend",
          "Sarcastisch en spottend",
          "Wetenschappelijk neutraal",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De schrijver twijfelt nergens — woorden als 'daarom' en 'onze kinderen hebben recht op' zijn beslist.",
          "Geen ironie of spot — ernstig betoog.",
          "Wel onderzoek genoemd, maar de schrijver geeft duidelijk persoonlijke mening.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een 'houding'?", tekst: "De manier waarop de schrijver schrijft. Klinkt hij zeker, twijfelend, boos, droevig, ironisch?" },
            { titel: "Welke woorden vertellen je dit?", tekst: "Stellige woorden: 'daarom', 'moet', 'recht op'. Twijfel-woorden: 'misschien', 'lijkt'. Spot: ironische opmerkingen." },
            { titel: "Pas toe op deze tekst", tekst: "Tekst gebruikt 'Ik ben van mening', 'Daarom', 'Onze kinderen hebben recht op'. Allemaal STELLIG. Antwoord A." },
          ],
          woorden: [
            { woord: "houding", uitleg: "De toon van de schrijver — zeker, twijfelend, boos, etc." },
            { woord: "stellig", uitleg: "Heel zeker van je zaak. Geen twijfel." },
            { woord: "sarcastisch", uitleg: "Iets zeggen op een spottende manier — meestal het tegenovergestelde menen van wat je zegt." },
            { woord: "neutraal", uitleg: "Geen mening — alleen feiten. Zonder eigen kleuring." },
          ],
          theorie: "**Hoe herken je de houding?**\n\n| Houding | Signaal-woorden |\n|---|---|\n| Stellig | daarom, moet, recht op, geen twijfel |\n| Twijfelend | misschien, lijkt, zou kunnen |\n| Sarcastisch | ironie, tegenovergestelde menen |\n| Neutraal | geen 'ik vind', alleen feiten |\n\nBij betogende teksten is de houding bijna altijd STELLIG — want de schrijver wil je overtuigen.",
          voorbeelden: [
            { type: "stellig", tekst: "'Daarom: laat de telefoon thuis. Onze kinderen hebben recht op een schoolomgeving zonder schermen.' = stellige slot-zin, geen twijfel." },
          ],
          basiskennis: [
            { onderwerp: "Toon vs inhoud", uitleg: "De TOON is hoe de schrijver schrijft. De INHOUD is wat hij zegt. Beide kun je los van elkaar beoordelen." },
          ],
          niveaus: {
            basis: "Tekst gebruikt 'daarom', 'moet', 'recht op' = stellige toon. Antwoord A.",
            simpeler: "Klinkt de schrijver zeker of twijfelend? Lees: 'Ik ben van mening DAT...', 'Daarom: laat de telefoon thuis'. Dat zijn beslissende woorden. Stellig en overtuigd = A.",
            nogSimpeler: "Beslissende woorden = stellig = A.",
          },
        },
      },
    ],
  },

  // ── Stap 4 ──────────────────────────────────────────────────────
  {
    title: "Verhalende tekst — gevoelens en motieven",
    explanation: tekst4 + "\n\n*Bij verhalen gaat het vaak om wat personages voelen of waarom ze iets doen. Beantwoord de 4 vragen.*",
    checks: [
      {
        // letterlijk
        q: "Wat ontbrak er in Sara's rugzak?",
        options: [
          "Haar lunchtrommel",
          "Haar agenda",
          "Haar gymschoenen",
          "Haar pen"
        ],
        answer: 0,
        evidence: "Verbaasd voelde ze in haar rugzak — geen lunchtrommel.",
        wrongHints: [
          null,
          "Geen agenda in dit verhaal — lees terug, het gaat om eten.",
          "Geen gym genoemd in deze tekst.",
          "Geen pen — Sara had wel een etui later in het verhaal."
        ],
        uitlegPad: {
          stappen: [
            { titel: "Letterlijke vraag", tekst: "Antwoord staat ergens in de tekst — zoeken." },
            { titel: "Welk kernwoord?", tekst: "'Sara's rugzak' — zoek in de tekst waar haar rugzak voorkomt." },
            { titel: "Vind de zin", tekst: "Tekst alinea 1: 'voelde ze in haar rugzak — geen lunchtrommel.' Antwoord A." },
          ],
          woorden: [
            { woord: "lunchtrommel", uitleg: "Een doosje waarin je je lunch (boterham) meeneemt naar school." },
          ],
          theorie: "Bij verhalende teksten staat een letterlijk feit vaak in de eerste alinea — de openingsscène waar het probleem wordt geïntroduceerd.",
          voorbeelden: [
            { type: "vinden", tekst: "Eerste alinea: rugzak voelen → geen lunchtrommel. Direct antwoord." },
          ],
          basiskennis: [
            { onderwerp: "Verhaal-opening = setup", uitleg: "Een verhaal begint vaak met de probleemstelling. Zoek daar bij letterlijke vragen." },
          ],
          niveaus: {
            basis: "Eerste alinea: 'geen lunchtrommel'. A.",
            simpeler: "Lees de eerste paar zinnen. Daar staat: 'Sara voelde in haar rugzak — geen lunchtrommel'. Dat is je antwoord.",
            nogSimpeler: "Lunchtrommel = A.",
          },
        },
      },
      {
        // inferentie — gevoel
        q: "Waarom voelde Sara zich 'schaapachtig' toen Tom haar vroeg of ze brood had?",
        options: [
          "Ze schaamde zich dat ze zonder eten zat",
          "Ze had de hele tijd op een schaap gelet",
          "Ze was boos op Tom",
          "Ze was te moe om antwoord te geven",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Letterlijk genomen — maar 'schaapachtig' is hier figuurlijk.",
          "Geen woede in de scene — Tom is juist aardig.",
          "Vermoeidheid komt niet voor in de tekst.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welk type?", tekst: "Inferentie + figuurlijk taalgebruik. 'Schaapachtig' is GEEN echt schaap — het is een gevoel." },
            { titel: "Wat betekent 'schaapachtig'?", tekst: "Verlegen, ongemakkelijk, beschaamd. Zoals een schaap dat opzij wordt geduwd zonder zich te verzetten." },
            { titel: "Past in context?", tekst: "Sara wil geen aandacht vragen voor haar honger. Ze schaamt zich. Sluit aan bij optie A: 'ze schaamde zich'." },
          ],
          woorden: [
            { woord: "schaapachtig", uitleg: "Verlegen, ongemakkelijk, niet-durven-kijken. Figuurlijk — geen echt schaap." },
            { woord: "figuurlijk", uitleg: "Niet letterlijk bedoeld. Bv. 'het regent honden en katten' = het regent hard." },
            { woord: "letterlijk", uitleg: "Precies wat het woord zegt. 'Een rode appel' is een appel die rood is." },
          ],
          theorie: "**Bij verhalen gebruikt schrijver vaak figuurlijk taalgebruik om gevoelens uit te drukken.**\n\nVoorbeelden:\n- 'schaapachtig' = verlegen / beschaamd\n- 'rood worden' = zich schamen\n- 'in de wolken' = heel blij\n- 'op zijn hondjes' = slecht gestemd\n\nLees de zin in CONTEXT — wat past bij wat de personage net heeft meegemaakt?",
          voorbeelden: [
            { type: "context", tekst: "Sara had geen brood, Tom vroeg of ze geen brood had. Ze wilde dat liever niet toegeven. Schaamtegevoel = optie A." },
          ],
          basiskennis: [
            { onderwerp: "Letterlijk vs figuurlijk", uitleg: "Bij verhalen mag je niet alle woorden letterlijk nemen. 'In tranen uitbarsten' = niet echt exploderen." },
          ],
          niveaus: {
            basis: "'Schaapachtig' = verlegen/beschaamd. Sara schaamt zich. A.",
            simpeler: "Stel je voor: jij hebt geen brood, iemand vraagt je 'heb je geen brood?'. Hoe voel je je? Een beetje gegeneerd, je wil het liever niet zeggen. Dat is 'schaapachtig'. = A.",
            nogSimpeler: "Schaapachtig = verlegen = schamen = A.",
          },
        },
      },
      {
        // motief
        q: "Waarom maakt Tom er geen punt van toen hij Sara helpt?",
        options: [
          "Hij wil dat Sara zich niet ongemakkelijk voelt",
          "Hij heeft eigenlijk geen honger",
          "Hij is bang voor Sara",
          "Hij weet niet wat hij anders moet zeggen",
        ],
        answer: 0,
        evidence: "Tom legde de boterham gewoon op haar tafel en draaide zich om naar zijn eigen lunch. Hij maakte er geen punt van.",
        wrongHints: [
          null,
          "Tom eet juist zelf zijn eigen lunch — hij heeft wel honger.",
          "Geen angst in de scene; hij draait gewoon weer terug naar zijn boterham.",
          "Niet het meest passend — zijn gedrag toont rust, niet spraakverlies.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een 'motief'?", tekst: "De REDEN waarom een personage iets doet. In verhalen moet je vaak afleiden uit gedrag." },
            { titel: "Wat doet Tom precies?", tekst: "Hij geeft brood, draait zich om en eet zelf verder. GEEN drama, geen aandacht trekken." },
            { titel: "Waarom op die manier?", tekst: "Als je 'er een punt van maakt', voelt iemand zich ongemakkelijk. Tom doet juist niet zo → hij wil Sara's gevoel sparen. Antwoord A." },
          ],
          woorden: [
            { woord: "motief", uitleg: "De drijfveer — waarom doet iemand iets?" },
            { woord: "ongemakkelijk", uitleg: "Het gevoel niet op je gemak te zijn — verlegen, met je houding niet weten wat te doen." },
            { woord: "ergens een punt van maken", uitleg: "Veel aandacht aan iets geven, het uitvergroten." },
          ],
          theorie: "**Bij verhalen denk je aan 3 dingen voor motieven:**\n1. Wat doet het personage?\n2. Hoe doet hij het (luid/zacht, snel/traag, met of zonder drama)?\n3. Wat zou jij/iemand voelen als ze dat zo zien?\n\nVaak zit het motief in de MANIER waarop iets gebeurt — niet in wat er letterlijk staat.",
          voorbeelden: [
            { type: "manier", tekst: "Tom geeft brood + draait zich meteen om = 'ik help je, geen big deal'. Past bij motief: Sara comfortabel houden." },
          ],
          basiskennis: [
            { onderwerp: "Empathie in verhalen", uitleg: "Een personage helpt soms juist STIL omdat hij weet hoe het voelt om kwetsbaar te zijn." },
          ],
          niveaus: {
            basis: "Tom geeft brood + draait om = wil geen drama → Sara sparen → A.",
            simpeler: "Stel: jij hebt geen brood, een klasgenoot maakt er een SHOW van: 'oh wat erg!'. Vervelend, hè? Tom doet het tegenovergestelde — gewoon brood geven, terug naar zijn eigen lunch. Dat is uit aardigheid: hij wil Sara niet ongemakkelijk maken. = A.",
            nogSimpeler: "Geen drama = aardig = A.",
          },
        },
      },
      {
        // moraal/thema
        q: "Wat is de boodschap van dit verhaal?",
        options: [
          "Een klein gebaar kan veel betekenen",
          "Vergeet je lunch nooit thuis",
          "Boterhammen smaken het lekkerst gedeeld",
          "Lerarenmoeten meer eten geven aan leerlingen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet de boodschap — de tekst veroordeelt Sara niet voor het vergeten.",
          "Wel iets in het verhaal, maar niet de hoofdboodschap.",
          "Leraren komen niet voor in het verhaal.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een 'boodschap'?", tekst: "De LES of WIJSHEID die de schrijver wil overbrengen — wat blijft hangen na het verhaal." },
            { titel: "Wat gebeurt er?", tekst: "Tom's KLEINE actie (halve boterham, geen drama) maakt voor Sara een GROTE indruk. Ze schrijft een dankbriefje. Tom schrijft terug." },
            { titel: "Wat leert dit?", tekst: "Een kleine vriendelijkheid kan veel impact hebben → optie A." },
            { titel: "Toets andere opties", tekst: "B 'vergeet je lunch nooit' = praktisch advies, geen wijsheid. C 'boterhammen lekker gedeeld' = klein detail. D 'leraren meer eten' = leraren zijn er niet." },
          ],
          woorden: [
            { woord: "boodschap", uitleg: "De diepe les of betekenis van een verhaal — wat de schrijver wil zeggen onder de oppervlakte." },
            { woord: "moraal", uitleg: "Een wijze les uit een verhaal of fabel." },
            { woord: "thema", uitleg: "Het onderwerp dat door het hele verhaal speelt — bv. 'vriendschap', 'eerlijkheid', 'mut'." },
          ],
          theorie: "**Boodschap zoeken — vraag jezelf:**\n\n1. Wat is er VERANDERD aan het einde?\n2. Wie heeft IETS GELEERD?\n3. Wat zou een lezer mee naar huis moeten nemen?\n\nBoodschap is meestal ALGEMEEN ('vriendelijkheid loont'), niet specifiek ('vergeet je lunch niet').\n\nValstrik: opties die KLEINE feiten uit het verhaal zijn (zoals 'boterhammen smaken gedeeld') zijn meestal NIET de boodschap.",
          voorbeelden: [
            { type: "klein → groot", tekst: "Tom: halve boterham (klein gebaar). Sara: dankbaar, schrijft briefje. Tom: schrijft terug. Een klein gebaar = grote impact = A." },
          ],
          basiskennis: [
            { onderwerp: "Boodschap is algemeen", uitleg: "De boodschap kun je toepassen op ANDERE situaties dan dit verhaal. Bv. 'vriendelijkheid loont' geldt overal, niet alleen bij vergeten lunch." },
          ],
          niveaus: {
            basis: "Klein gebaar (halve boterham) → grote impact (vriendschap). A.",
            simpeler: "Wat blijft hangen na dit verhaal? Tom doet iets KLEINS, maar het maakt voor Sara veel uit. Boodschap: kleine vriendelijkheden tellen. = A.",
            nogSimpeler: "Klein gebaar = grote betekenis = A.",
          },
        },
      },
    ],
  },

  // ── Stap 5 — Cito-eindopdracht ──────────────────────────────────
  {
    title: "Cito-eindopdracht — vier teksten gemixt",
    explanation: "**Vier vragen, één over elke tekst-soort.** Test of je het verschil tussen tekstsoorten en vraagtypen onder de knie hebt.\n\nBij de eindtoets krijg je deze mix: zakelijke + instructieve + betogende + verhalende teksten. Soms heel kort, soms langer.\n\n*Veel succes!*",
    checks: [
      {
        // van tekst 1 — zakelijke
        q: "Stelling: 'In Nederland zijn er meer fietsen dan inwoners.' Wat zegt de eerste tekst hierover?",
        options: [
          "Dat klopt — het is een uniek Nederlands kenmerk",
          "Dat klopt voor heel Europa, niet alleen Nederland",
          "De tekst noemt geen aantallen",
          "Alleen in Amsterdam is dat zo",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De tekst zegt expliciet 'uniek in de wereld' — dus alleen Nederland.",
          "De laatste zin geeft juist dat aantal aan.",
          "Geen specifieke stad — de tekst spreekt over heel Nederland.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Stelling-vraag", tekst: "Een stelling staat in de vraag — jij moet checken: KLOPT die volgens de tekst?" },
            { titel: "Zoek aantallen in tekst 1", tekst: "Laatste alinea: 'Er zijn meer fietsen dan inwoners. Dat is uniek in de wereld.' Klopt + alleen NL." },
          ],
          woorden: [
            { woord: "stelling", uitleg: "Een uitspraak die juist of fout kan zijn. Vaak in de vorm: 'X is zo'." },
            { woord: "uniek", uitleg: "Niet ergens anders zo — alleen op deze plek." },
          ],
          theorie: "Bij stelling-vragen: zoek de zin in de tekst die de stelling bevestigt of weerlegt. Hier: 'uniek in de wereld' = alleen NL → optie A.",
          voorbeelden: [
            { type: "match", tekst: "Tekst noemt EXACT 'meer fietsen dan inwoners' + 'uniek in de wereld'. Dat past bij A." },
          ],
          basiskennis: [{ onderwerp: "Lees de tekst nogmaals", uitleg: "Bij een mix-quiz mag je teruglezen. Doe dat ook." }],
          niveaus: {
            basis: "Tekst zegt 'uniek in de wereld' = alleen NL. A.",
            simpeler: "Lees de laatste alinea van tekst 1. Daar staat: 'er zijn meer fietsen dan inwoners' + 'uniek in de wereld'. Dus stelling klopt + alleen NL = A.",
            nogSimpeler: "Klopt + alleen NL = A.",
          },
        },
      },
      {
        // van tekst 2 — instructie
        q: "In de paperclip-armband-tekst staat de zin: 'Trek lichtjes om te controleren'. Waarom 'lichtjes'?",
        options: [
          "Anders gaat de keten misschien stuk",
          "Omdat paperclips heel duur zijn",
          "Om geen geluid te maken",
          "Om je vingers niet te snijden",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Prijs wordt niet genoemd.",
          "Geluid speelt geen rol in deze instructie.",
          "Vingerveiligheid komt niet expliciet voor — gaat om de keten.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Waarom-vraag op detail", tekst: "Tekst gebruikt 'lichtjes' als TIP. Waarom zou je niet hard trekken?" },
            { titel: "Eerdere context", tekst: "Tekst zei al: 'als je gehaast bent gaan de clips uit elkaar.' Hard trekken = clip openbuigen = stuk. → A." },
          ],
          woorden: [
            { woord: "lichtjes", uitleg: "Met weinig kracht — voorzichtig." },
            { woord: "controleren", uitleg: "Checken of iets goed is gegaan." },
          ],
          theorie: "Bij instructies: TIPS hebben altijd een reden. Vaak gaat het om iets KAPOT GAAN (paperclips uit elkaar) of MISLOPEN (verkeerde maat).",
          voorbeelden: [
            { type: "verbinden", tekst: "'Lichtjes trekken om te controleren' + eerder 'gehaast = clips uit elkaar' = je test of het stevig is, ZONDER het kapot te trekken. = A." },
          ],
          basiskennis: [{ onderwerp: "Tekst-context", uitleg: "Wat eerder in de tekst stond, helpt vaak om latere zinnen te begrijpen." }],
          niveaus: {
            basis: "Hard trekken = clips uit elkaar (eerder genoemd). Lichtjes = niet kapot. A.",
            simpeler: "Stel: jij hebt een ketting van paperclips. Trek je hard? Dan trek je 'm uit elkaar. Dus 'lichtjes' = om de ketting niet te breken. A.",
            nogSimpeler: "Lichtjes = niet kapot = A.",
          },
        },
      },
      {
        // van tekst 3 — betoog
        q: "Welke is een ARGUMENT in een betogende tekst (uit de telefoon-tekst)?",
        options: [
          "Notificaties zorgen voor minutenlange afleiding (onderzoek)",
          "Telefoons hebben gladde randen",
          "Iedereen heeft een eigen mening",
          "Er bestaan ook tablets",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen relatie met het standpunt — beschrijving, geen argument.",
          "Algemeen waar maar niet ondersteunend voor het standpunt.",
          "Niet relevant voor het betoog over telefoons in de klas.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een argument?", tekst: "Een REDEN die het standpunt OPLOSSING ondersteunt. Bij betoog 'telefoons niet op school' = redenen waarom dat WAAR is." },
            { titel: "Toets opties", tekst: "A: 'notificaties = afleiding (onderzoek)' = ja, ondersteunt standpunt. B/C/D = wel feiten/meningen, MAAR niet over telefoons-in-klas." },
          ],
          woorden: [
            { woord: "argument", uitleg: "Reden die je mening OPLOSSING bewijst." },
            { woord: "ondersteunen", uitleg: "Steunen, helpen onderbouwen." },
          ],
          theorie: "Een goed argument: (1) ondersteunt het standpunt + (2) is door tekst onderbouwd (bij voorkeur met onderzoek of feiten). Vaag-aandoende uitspraken ('iedereen heeft een mening') zijn GEEN argument.",
          voorbeelden: [
            { type: "argument", tekst: "Standpunt: 'telefoons niet op school'. Argument: 'notificaties leiden af (onderzoek toont)' = ondersteunt + onderbouwd. A." },
          ],
          basiskennis: [{ onderwerp: "Argument vs feit", uitleg: "Een feit kan WAAR zijn maar geen argument zijn — als het niets te maken heeft met het standpunt." }],
          niveaus: {
            basis: "Argument = onderbouwt standpunt + heeft bewijs. A heeft 'onderzoek toont'. = A.",
            simpeler: "Welke reden helpt om het standpunt 'telefoons niet op school' te bewijzen? 'Notificaties leiden af tijdens de les' helpt. Andere opties zijn niet over school of niet over telefoons. A.",
            nogSimpeler: "Met onderzoek + over school = A.",
          },
        },
      },
      {
        // van tekst 4 — verhaal
        q: "In het verhaal van Sara: het briefje en hartje van haar moeder laten vooral zien dat:",
        options: [
          "Sara's moeder dankbaarheid wil tonen voor Toms gebaar",
          "Sara een nieuwe liefje heeft",
          "Sara haar moeder boos heeft gemaakt",
          "De moeder Tom wil leren kennen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een hartje is hier dankbaarheid, geen romantiek — let op de context.",
          "Geen boosheid in het verhaal — moeder reageert juist warm.",
          "Niet het hoofdpunt — moeder kent Tom niet en wil 'm niet ontmoeten in dit verhaal.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Symboliek-vraag", tekst: "Een briefje + hartje = SYMBOOL. Wat betekenen die hier?" },
            { titel: "Wat doet moeder?", tekst: "Sara vertelt dat Tom haar boterham gaf. Moeder schrijft 'Bedankt!' met hartje. = ze wil DANKBAARHEID overbrengen aan Tom." },
          ],
          woorden: [
            { woord: "symboliek", uitleg: "Een teken dat IETS ANDERS betekent. Hartje = liefde of dankbaarheid (afhankelijk van context)." },
            { woord: "dankbaarheid", uitleg: "Het gevoel: 'wat lief dat je dit deed, ik waardeer het'." },
          ],
          theorie: "Een hartje kan VEEL betekenen — afhankelijk van context: liefde (verliefdheid), dankbaarheid (waardering), vriendschap. Lees de context om te kiezen. Hier: na een vriendelijke daad → dankbaarheid.",
          voorbeelden: [
            { type: "context", tekst: "Sara: 'Tom gaf me brood'. Moeder: '(briefje + hartje) Bedankt!' → context = vriendelijke daad waarvoor je bedankt. Hartje = dankbaarheid. A." },
          ],
          basiskennis: [{ onderwerp: "Hartje is niet altijd liefde", uitleg: "Symbolen veranderen van betekenis afhankelijk van situatie. Lees de hele scene." }],
          niveaus: {
            basis: "Hartje + 'bedankt' na vriendelijke daad = dankbaarheid. A.",
            simpeler: "Wat doet je moeder met dat briefje? Ze schrijft 'bedankt' + hartje. Voor wie? Voor Tom die brood deelde. Dat is bedanken voor zijn aardigheid. = A.",
            nogSimpeler: "Bedankt + hartje = dankbaarheid = A.",
          },
        },
      },
      {
        // tekst-soort herkennen
        q: "Welke van de vier teksten in dit pad is BETOGEND?",
        options: [
          "Telefoons horen niet thuis op de basisschool",
          "De geschiedenis van de fiets",
          "Hoe maak je een paperclip-armband?",
          "De vergeten lunchtrommel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is informatief — feiten over de fiets, geen mening.",
          "Dat is instructief — uitleg van een proces, geen mening.",
          "Dat is verhalend — een verhaaltje met personages, geen mening.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "4 tekstsoorten", tekst: "Informatief (feiten), Instructief (stappen), Betogend (mening), Verhalend (verhaal)." },
            { titel: "Welke geeft een MENING?", tekst: "'Telefoons horen niet thuis op de basisschool' = duidelijke mening. = betogend = A." },
          ],
          woorden: [
            { woord: "betogend", uitleg: "Een tekst die een mening verdedigt met argumenten." },
            { woord: "informatief", uitleg: "Een tekst die feiten geeft, geen mening." },
            { woord: "instructief", uitleg: "Een tekst die uitlegt HOE je iets doet (stappen)." },
            { woord: "verhalend", uitleg: "Een tekst die een verhaal vertelt (met personages, gebeurtenissen)." },
          ],
          theorie: "**Snelle check tekstsoort:**\n- Heeft de tekst een MENING? → betogend\n- Geeft het FEITEN zonder mening? → informatief\n- Geeft het STAPPEN voor iets maken/doen? → instructief\n- Heeft het PERSONAGES + gebeurtenissen? → verhalend",
          voorbeelden: [
            { type: "betoog-signaal", tekst: "Tekst 3: 'Ik ben van mening', 'Daarom: laat de telefoon thuis'. = mening + argumenten = betogend." },
          ],
          basiskennis: [{ onderwerp: "Per tekstsoort andere vragen", uitleg: "Cito-vragen verschillen per tekstsoort. Bij betoog → standpunt en argument. Bij verhaal → motieven en gevoelens." }],
          niveaus: {
            basis: "Mening + argumenten = betogend. Tekst 'telefoons niet op school' is dat. A.",
            simpeler: "Welke tekst heeft een DUIDELIJKE MENING? 'Telefoons niet op school' is iemands mening. De andere zijn: feiten (fiets), stappen (paperclip), verhaal (Sara). = A.",
            nogSimpeler: "Mening = betoog = A.",
          },
        },
      },
      {
        // strategie-vraag
        q: "Wat doe je als je een woord in een tekst niet kent?",
        options: [
          "De woorden eromheen lezen om het te raden via context",
          "De vraag overslaan",
          "Een woordenboek pakken (mag niet bij Cito)",
          "Nooit antwoord invullen — die vraag laat je leeg",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Nooit overslaan — er is altijd een gok-kans van 25%.",
          "Bij Cito mag dat inderdaad niet — context is je beste vriend.",
          "Beter een gok dan leeg — geen punten af voor fout.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Strategie-vraag", tekst: "Niet over een tekst, maar over HOE je toetsen aanpakt. Goede strategieën onthouden = punten halen." },
            { titel: "Beste strategie bij onbekend woord", tekst: "Lees de zin ervoor en erna — context geeft hints. Splits het woord in delen. Maak een goede gok." },
          ],
          woorden: [
            { woord: "context", uitleg: "De woorden RONDOM een onbekend woord — geven vaak een hint over de betekenis." },
            { woord: "strategie", uitleg: "Een slimme manier om iets aan te pakken." },
          ],
          theorie: "**Bij Cito en andere toetsen: NOOIT leeg laten.** Geen woordenboek, geen overslaan. Strategie:\n1. Splits onbekend woord in delen.\n2. Lees zin ervoor + erna.\n3. Maak een redelijke gok op basis van context.\n4. Vul het beste antwoord in (gok-kans 25%, leeg = 0%).",
          voorbeelden: [
            { type: "context", tekst: "'De vogel maakt een prachtig krakend geluid.' Onbekend woord 'krakend'? Context: vogel + geluid → een soort vogelgeluid." },
          ],
          basiskennis: [{ onderwerp: "Toets-tactiek", uitleg: "Een gok = 25% kans op punt. Leeg = 0%. Altijd invullen!" }],
          niveaus: {
            basis: "Context lezen = beste strategie. A.",
            simpeler: "Stel je leest een woord dat je niet kent. Wat doe je? Niet overslaan. Geen woordenboek (mag niet). Lees de zinnen eromheen — die helpen je het te raden. = A.",
            nogSimpeler: "Context lezen = A.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const begrijpendLezenTekstenPo = {
  id: "begrijpend-lezen-teksten-po",
  title: "Begrijpend lezen — echte oefenteksten",
  emoji: "📖",
  level: "groep5-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — zakelijke, instructieve, betogende, verhalende teksten",
  intro:
    "Vier echte oefenteksten van ~200 woorden + 4 Doorstroomtoets-stijl vragen elk: zakelijk, instructief, betogend, verhalend. Plus een gemixte eindopdracht. Perfect voor groep 7-8 die zich voorbereidt op de Doorstroomtoets (voorheen Cito-eindtoets) begrijpend lezen.",
  triggerKeywords: [
    "begrijpend lezen", "tekst lezen", "leesvaardigheid",
    "zakelijke tekst", "instructieve tekst", "betogende tekst", "verhalende tekst",
    "hoofdgedachte", "argument", "context", "tekstsoort",
  ],
  chapters,
  steps,
};

export default begrijpendLezenTekstenPo;
