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
      },
      {
        // hoofdgedachte
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
    "Vier echte oefenteksten van ~200 woorden + 4 Cito-stijl vragen elk: zakelijk, instructief, betogend, verhalend. Plus een gemixte eindopdracht. Perfect voor groep 7-8 die zich voorbereidt op de Cito-eindtoets begrijpend lezen.",
  triggerKeywords: [
    "begrijpend lezen", "tekst lezen", "leesvaardigheid",
    "zakelijke tekst", "instructieve tekst", "betogende tekst", "verhalende tekst",
    "hoofdgedachte", "argument", "context", "tekstsoort",
  ],
  chapters,
  steps,
};

export default begrijpendLezenTekstenPo;
