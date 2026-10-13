// Leerpad: Beeldhouwkunst & ruimtelijk werk — Kunst HAVO/VWO
// Wat is beeldhouwkunst, materialen & technieken, door de tijd,
// ruimtelijk werk nu (installatie/openbare ruimte). 4 stappen × ~3 checks.

const stepEmojis = ["🗿", "🔨", "⏳", "🏛️"];

const chapters = [
  { letter: "A", title: "Wat is beeldhouwkunst?", emoji: "🗿", from: 0, to: 0 },
  { letter: "B", title: "Materialen & technieken", emoji: "🔨", from: 1, to: 1 },
  { letter: "C", title: "Door de tijd", emoji: "⏳", from: 2, to: 2 },
  { letter: "D", title: "Ruimtelijk werk nu", emoji: "🏛️", from: 3, to: 3 },
];

const steps = [
  // ─── A. Wat is beeldhouwkunst? ────────────────────────────
  {
    title: "Wat is beeldhouwkunst?",
    explanation:
      "**Beeldhouwkunst** (sculptuur) is **ruimtelijke** kunst: driedimensionaal (3D), je kunt er **omheen** lopen. Dat is het grote verschil met een schilderij (2D, plat).\n\n**Twee hoofdvormen:**\n• **Vrijstaand beeld (sculptuur in het rond)** — van alle kanten te bekijken; je loopt eromheen (bv. een standbeeld).\n• **Reliëf** — beeld dat (deels) uit een achtergrond steekt, bedoeld om van **voren** te zien. Soorten: **bas-reliëf** (laag, ondiep) en **hoog-reliëf** (steekt ver uit).\n\n**Specifieke beeldaspecten voor 3D:**\n• **Massa & volume** — het beeld neemt echte ruimte in.\n• **De holle ruimte (negatieve ruimte)** — de lege ruimte ín en rond het werk doet óók mee (bv. een gat in een beeld).\n• **Standpunt** — er is niet één 'juiste' kant; het beeld verandert terwijl je eromheen loopt.\n• **Licht** valt écht op het werk → echte schaduwen, afhankelijk van plaatsing.\n• **Materiaal & textuur** voel je bijna: glad marmer vs ruw brons.\n\n**Sokkel/voetstuk:** veel beelden staan op een **sokkel**, die het werk verheft (letterlijk en symbolisch). Moderne kunst plaatst werk soms juist bewust op de grond, op ooghoogte van de kijker.",
    checks: [
      {
        q: "Wat is het kenmerkende verschil tussen beeldhouwkunst en schilderkunst?",
        options: ["Beeldhouwkunst is 3D, schilderkunst 2D", "Beelden zijn meestal kleurloos", "Schilderkunst is figuratief, beelden abstract", "Beelden zijn duurzamer dan schilderijen"],
        answer: 0,
        wrongHints: [null, "Griekse beelden waren vroeger beschilderd en er bestaan felgekleurde moderne beelden. Is kleur dan het echte verschil?", "Er bestaan abstracte schilderijen en heel realistische beelden. Waar zit het echte verschil?", "Er zijn ook beelden van ijs, zand of klei. Denk aan hoe je elk kunstwerk bekijkt."],
        uitlegPad: {
          stappen: [{ titel: "Eromheen lopen", tekst: "**Beeldhouwkunst** is **driedimensionaal (3D)** — je kunt er **omheen** lopen. Een **schilderij** is tweedimensionaal (2D, plat). Daardoor spelen bij sculptuur massa, volume en standpunt een rol die een schilderij niet heeft." }],
          niveaus: { basis: "3D vs 2D.", simpeler: "Beeld = 3D", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **reliëf**?",
        options: ["Beeld dat uit een vlakke achtergrond steekt", "Een vrijstaand beeld waar je omheen loopt", "Een schildering met diepte door perspectief", "Een beeld dat uit één blok steen is gehakt"],
        answer: 0,
        wrongHints: [null, "Om een vrijstaand beeld kun je heen lopen. Kan dat ook bij een beeld dat aan een muur of achtergrond vastzit?", "Bij perspectief lijkt iets alleen diep. Is een reliëf plat of echt ruimtelijk?", "Dat zegt iets over de techniek; ook een vrijstaand beeld kan uit één blok komen. Waar gaat reliëf over?"],
        uitlegPad: {
          stappen: [{ titel: "Half uit de muur", tekst: "Een **reliëf** steekt (deels) uit een **achtergrond** en is bedoeld om van **voren** te bekijken — bv. op een muur of munt. **Bas-reliëf** is ondiep, **hoog-reliëf** steekt ver uit. Een **vrijstaand** beeld kun je daarentegen van alle kanten bekijken." }],
          niveaus: { basis: "Steekt uit een achtergrond.", simpeler: "Reliëf = uit de muur", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarom speelt het **standpunt** een grote rol bij een vrijstaand beeld?",
        options: ["Het beeld verandert terwijl je eromheen loopt", "De maker bepaalt waar je moet gaan staan", "Je ziet het beeld net als een schilderij van voren", "Van dichtbij zie je meer details van het materiaal"],
        answer: 0,
        wrongHints: [null, "In een museum loop je vrij rond. Wat zie je als je om een beeld heen loopt?", "Is er bij een vrijstaand beeld echt maar één voorkant?", "Dat geldt voor elk kunstwerk, ook voor een schilderij. Wat is bijzonder aan een beeld waar je omheen kunt lopen?"],
        uitlegPad: {
          stappen: [{ titel: "Geen 'voorkant'", tekst: "Bij een **vrijstaand beeld** is er niet één 'juiste' kant: het **verandert** terwijl je eromheen loopt. Daarom denkt een beeldhouwer in alle aanzichten tegelijk — en doet ook de **negatieve ruimte** (gaten, openingen) mee in het ontwerp." }],
          niveaus: { basis: "Verandert al lopend.", simpeler: "Eromheen = ander beeld", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Materialen & technieken ───────────────────────────
  {
    title: "Materialen & technieken",
    explanation:
      "Hoe een beeld gemaakt is, bepaalt veel. Twee tegenovergestelde benaderingen:\n\n**Wegnemend (subtractief) — 'beitelen':**\nJe begint met een blok en **haalt materiaal weg**.\n• **Steen / marmer** — hakken en beitelen. Onomkeerbaar: één fout en het is mis. Michelangelo zei dat het beeld 'al in het blok zat' en hij het alleen bevrijdde.\n• **Hout** — snijden/kerven.\n\n**Opbouwend (additief) — 'boetseren':**\nJe **voegt materiaal toe** en kunt corrigeren.\n• **Klei / was** — boetseren met de handen. Zacht, makkelijk te wijzigen, maar fragiel.\n\n**Gieten (een vorm vullen) — vooral brons:**\n1. Maak een model (vaak in was/klei).\n2. Maak er een **mal** omheen.\n3. Giet vloeibaar **brons** in de mal → het stolt.\nVoordeel: je kunt **meerdere** exemplaren van hetzelfde beeld gieten (een 'oplage'). Brons is sterk en kan dunne, uitstekende delen aan (een arm vooruit) die in steen zouden breken.\n\n**Moderne technieken:**\n• **Lassen / assemblage** — losse (metaal)delen samenvoegen.\n• **Readymade** — een bestaand voorwerp tot kunst verklaren (Duchamp's urinoir 'Fountain', 1917).\n• Nu ook **3D-printen** en kunststof.\n\n**Materiaal = betekenis:** marmer straalt status/eeuwigheid uit, brons kracht, klei intimiteit, schroot/afval juist vergankelijkheid of kritiek.",
    checks: [
      {
        q: "Bij een **marmeren** beeld werk je vooral…",
        options: ["Wegnemend (materiaal weghakken)", "Opbouwend (materiaal toevoegen)", "Gietend (vloeibaar materiaal in een mal)", "Verbindend (delen aan elkaar lassen)"],
        answer: 0,
        wrongHints: [null, "Toevoegen past bij klei (boetseren), niet bij marmer.", "Gieten doe je met vloeibaar metaal zoals brons. Kun je marmer vloeibaar maken?", "Lassen verbindt stukken metaal met hitte. Is marmer een metaal?"],
        uitlegPad: {
          stappen: [{ titel: "Hakken = wegnemen", tekst: "**Steen/marmer** bewerk je **wegnemend (subtractief)**: je hakt en beitelt materiaal **weg** uit een blok. Onomkeerbaar — een fout kun je niet terugplakken. **Boetseren** (klei) is juist **opbouwend** en corrigeerbaar." }],
          niveaus: { basis: "Wegnemend.", simpeler: "Marmer = weghakken", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een voordeel van **brons gieten**?",
        options: ["Je kunt er meerdere exemplaren van maken", "Je hakt het direct uit één blok metaal", "Je hoeft geen model of mal te maken", "Het is goedkoper dan werken in klei"],
        answer: 0,
        wrongHints: [null, "Hakken hoort bij steen. Hoe krijgt vloeibaar brons zijn vorm?", "Gieten gebeurt juist in een mal. Waar komt de vorm van die mal vandaan?", "Brons is duur en gieten kost veel werk. Waar zit het voordeel dan wel?"],
        uitlegPad: {
          stappen: [{ titel: "Sterk + herhaalbaar", tekst: "Bij **bronsgieten** maak je een mal en giet je vloeibaar brons. Voordelen: je kunt **meerdere exemplaren** (een oplage) maken, en brons is **sterk** genoeg voor **dunne, uitstekende delen** (een vooruitgestoken arm) die in steen zouden afbreken." }],
          niveaus: { basis: "Meerdere + sterk.", simpeler: "Brons = oplage + sterk", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **readymade**?",
        options: ["Een bestaand voorwerp tot kunst verklaard", "Een kopie van een bekend kunstwerk", "Een schets die meteen af is", "Een beeld dat ter plekke ontstaat"],
        answer: 0,
        wrongHints: [null, "Een kopie maak je zelf na. Heeft de kunstenaar bij een readymade iets gemaakt?", "Ready-made klinkt als snel klaar, maar het gaat niet om een schets. Wat koos Duchamp voor zijn Fontein?", "Dat lijkt meer op site-specific kunst of performance. Maakte Duchamp zelf iets?"],
        uitlegPad: {
          stappen: [{ titel: "Kunst = de keuze", tekst: "Een **readymade** is een **bestaand, alledaags voorwerp** dat de kunstenaar tot **kunst verklaart** — beroemd: **Duchamp's** urinoir *Fountain* (1917). Het idee: niet het maken, maar de **keuze en context** maken het kunst. Een mijlpaal in de moderne kunst." }],
          niveaus: { basis: "Voorwerp tot kunst.", simpeler: "Readymade = bestaand voorwerp", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Door de tijd ──────────────────────────────────────
  {
    title: "Beeldhouwkunst door de tijd",
    explanation:
      "**Klassiek Griekenland** (~500-300 v.Chr.): het **ideaalbeeld**. Perfecte, geïdealiseerde lichamen in evenwicht. **Contrapost**: het gewicht op één been, waardoor het lichaam licht draait en 'leeft' (Polykleitos' *Doryphoros*). Veel Griekse beelden kennen we via **Romeinse marmeren kopieën** van verloren bronzen originelen.\n\n**Renaissance** (~1500): herontdekking van het klassieke ideaal. **Michelangelo's *David*** (1504, ruim 4 m marmer) — anatomisch perfect, spanning vóór de strijd.\n\n**Barok** (~1600-1700): **drama en beweging**. **Bernini** bevriest een moment vol emotie en dynamiek (*De vervoering van Sint-Theresa*; *Apollo en Daphne* — marmer dat 'in beweging' lijkt).\n\n**19e eeuw — Rodin** (1840-1917): brak met het gladde ideaal. Ruwe, expressieve oppervlakken vol emotie. *De Denker*, *De Burgers van Calais*.\n\n**20e eeuw — abstractie:** het beeld hoeft niet meer 'iets' realistisch voor te stellen.\n• **Constantin Brancusi** — uiterste vereenvoudiging naar de essentie.\n• **Henry Moore** — organische, liggende figuren met **gaten** (negatieve ruimte als onderdeel).\n• **Alexander Calder** — **mobiles**: bewegende, hangende beelden (**kinetische kunst**).\n\nDe lijn: van **idealiseren** → naar **dramatiseren** → naar **abstraheren** en zelfs **bewegen**.",
    checks: [
      {
        q: "Wat is **contrapost** in een (Grieks) beeld?",
        options: ["Het gewicht op één been, met een licht gedraaid lichaam", "Twee figuren die elkaars houding spiegelen", "Een stijve houding, recht van voren gezien", "Het gewicht gelijk verdeeld over beide benen"],
        answer: 0,
        wrongHints: [null, "Kijk naar één staand Grieks beeld. Gaat contrapost over twee figuren of over de houding van één?", "Dat past bij oudere, strakke beelden zoals de kouros. Wat veranderden de Grieken juist?", "Staat een figuur dan ontspannen of stijf? Kijk naar de heupen bij een Grieks beeld."],
        uitlegPad: {
          stappen: [{ titel: "Levendige houding", tekst: "**Contrapost**: de figuur zet het gewicht op **één been**, waardoor heupen en schouders licht kantelen en het lichaam natuurlijk 'leeft' in plaats van stijf rechtop staat. Een Griekse vinding (Polykleitos) die de Renaissance weer oppakte (Michelangelo's David)." }],
          niveaus: { basis: "Gewicht op één been.", simpeler: "Contrapost = één been belast", nogSimpeler: "A." },
        },
      },
      {
        q: "Waardoor valt **barok** beeldhouwwerk (Bernini) op?",
        options: ["Drama en beweging — een bevroren emotioneel moment", "Rust en evenwicht — een ideaal, tijdloos lichaam", "Eenvoud — gladde vormen zonder versiering", "Abstractie — vormen die niets herkenbaars tonen"],
        answer: 0,
        wrongHints: [null, "Rust en een ideaal lichaam passen bij de klassieke Griekse beelden. Staat een figuur van Bernini stil?", "Kijk naar de plooien en haren in een beeld van Bernini. Zijn die eenvoudig?", "Bij Bernini zie je duidelijk mensen, plooien en gezichten. Is dat abstract?"],
        uitlegPad: {
          stappen: [{ titel: "Marmer dat beweegt", tekst: "**Barok** (Bernini) draait om **drama en beweging**: een bevroren moment vol emotie en dynamiek, met wapperende stof en draaiende lichamen. *Apollo en Daphne* laat marmer bijna 'bewegen' — heel anders dan de strakke klassieke rust." }],
          niveaus: { basis: "Drama + beweging.", simpeler: "Barok = drama", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is kenmerkend voor veel **20e-eeuwse** beeldhouwkunst (Moore, Brancusi)?",
        options: ["Abstractie — het hoeft niet realistisch iets voor te stellen", "Realisme — een perfect, natuurgetrouw ideaalbeeld", "Religie — beelden vooral voor kerken en kapellen", "Drama — beweging en heftige emotie in marmer"],
        answer: 0,
        wrongHints: [null, "Een vogel van Brancusi is een gladde, glanzende vorm. Lijkt die natuurgetrouw op een echte vogel?", "Kerkbeelden waren vooral belangrijk in de middeleeuwen en de barok. Wat deden Moore en Brancusi anders?", "Kijk naar een beeld van Brancusi: zie je heftige emotie, of rustige vormen? Lijken de gladde vormen van Brancusi daarop?"],
        uitlegPad: {
          stappen: [{ titel: "Vorm boven gelijkenis", tekst: "In de **20e eeuw** wordt beeldhouwkunst vaak **abstract**: het hoeft niet meer realistisch 'iets' voor te stellen. **Brancusi** vereenvoudigt tot de essentie, **Moore** maakt organische figuren met **gaten** (negatieve ruimte), **Calder** maakt bewegende **mobiles**." }],
          niveaus: { basis: "Abstractie.", simpeler: "20e eeuw = abstract", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Ruimtelijk werk nu ────────────────────────────────
  {
    title: "Ruimtelijk werk nu — installatie & openbare ruimte",
    explanation:
      "Vandaag is 'beeldhouwkunst' veel breder dan een beeld op een sokkel.\n\n**Installatiekunst:**\nEen kunstwerk dat een **hele ruimte** vult en inricht — de **bezoeker stapt erín** en ervaart het van binnenuit (licht, geluid, objecten samen). Het werk = de hele ervaring, niet één object.\n\n**Site-specific & land art:**\n• **Site-specific** — gemaakt voor één bepaalde plek; verplaatsen vernietigt de betekenis.\n• **Land art** — kunst ín het landschap, met natuur als materiaal (Robert Smithson's *Spiral Jetty*, 1970, een spiraal in een meer).\n\n**Kunst in de openbare ruimte:**\n• **Standbeelden/monumenten** — herdenken een persoon of gebeurtenis (en zijn soms onderwerp van **discussie**: wie verdient een standbeeld, en koloniale standbeelden?).\n• Moderne pleinkunst nodigt uit tot **interactie** (eroverheen klimmen, doorheen lopen).\n\n**Kinetische kunst:** werk dat **echt beweegt** (door motor, wind of de bezoeker).\n\n**Ervaring & deelname:** veel hedendaags ruimtelijk werk wil dat je het **ervaart en eraan deelneemt**, niet alleen vanaf een afstandje bekijkt. De **ruimte, plek en tijd** worden onderdeel van het kunstwerk.\n\n**Kort:** sculptuur is verschoven van 'een object om naar te kijken' naar 'een ruimte/situatie om in te zijn'.",
    checks: [
      {
        q: "Wat is **installatiekunst**?",
        options: ["Een werk dat een hele ruimte vult en waar je in stapt", "Een groot beeld op een sokkel midden in de zaal", "Een reeks schilderijen die samen één verhaal vertellen", "Een kunstwerk dat op een scherm wordt vertoond"],
        answer: 0,
        wrongHints: [null, "Een beeld op een sokkel bekijk je van buitenaf. Sta je er ook in?", "Een reeks schilderijen hangt nog steeds plat aan de muur. Wat doet een installatie met de ruimte?", "Video kan een onderdeel zijn van een installatie, maar is het dat vanzelf? Waar sta jij als kijker?"],
        uitlegPad: {
          stappen: [{ titel: "Erin stappen", tekst: "**Installatiekunst** vult en ordent een **hele ruimte**; de **bezoeker stapt erín** en ervaart het van binnenuit (objecten, licht, geluid samen). Het kunstwerk is de hele **ervaring**, niet één object." }],
          niveaus: { basis: "Hele ruimte, je stapt erin.", simpeler: "Installatie = ruimte in", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat betekent **site-specific**?",
        options: ["Gemaakt voor één plek, en hoort alleen daar", "Gemaakt om in elk museum te kunnen staan", "Gemaakt voor buiten, in weer en wind", "Gemaakt in opdracht van één klant"],
        answer: 0,
        wrongHints: [null, "Wat gebeurt er met zo'n werk als je het naar een ander museum brengt?", "Een buitenbeeld kun je soms gewoon verplaatsen. Verandert er dan iets aan het werk?", "Een opdracht zegt iets over wie betaalt. Waarover zegt de term site-specific iets?"],
        uitlegPad: {
          stappen: [{ titel: "Hoort bij de plek", tekst: "**Site-specific** werk is gemaakt **voor één bepaalde plek**: de locatie hoort bij de betekenis, dus **verplaatsen** verandert of vernietigt het werk. **Land art** (zoals *Spiral Jetty* in een meer) is daar een vorm van." }],
          niveaus: { basis: "Voor één plek.", simpeler: "Site-specific = vaste plek", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarom zijn sommige **standbeelden** onderwerp van discussie?",
        options: ["Ze kunnen omstreden personen eren", "Ze kosten de gemeente veel onderhoud", "Ze staan vaak in de weg op pleinen", "Ze zijn vaak niet realistisch gemaakt"],
        answer: 0,
        wrongHints: [null, "Kosten zijn zelden het twistpunt. Waar gaat het debat over een beeld van J.P. Coen over?", "Een beeld kun je verplaatsen. Zou het debat dan voorbij zijn?", "De stijl is zelden het twistpunt. Wie of wat eert zo'n beeld?"],
        uitlegPad: {
          stappen: [{ titel: "Kunst + maatschappij", tekst: "Standbeelden in de **openbare ruimte** herdenken iemand of iets — en dat roept vragen op: **wie verdient een standbeeld**, en wat doen we met beelden van bv. **koloniale** of omstreden figuren? Zo raakt openbare kunst aan maatschappelijke en historische debatten." }],
          niveaus: { basis: "Wie verdient het / koloniaal.", simpeler: "Standbeeld = maatschappelijk debat", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const beeldhouwkunstKunst = {
  id: "beeldhouwkunst-kunst",
  title: "Beeldhouwkunst & ruimtelijk werk (Kunst)",
  emoji: "🗿",
  level: "havo4-5-vwo",
  subject: "kunst",
  referentieNiveau: "havo-vwo-kunst-beeldhouwkunst",
  sloThema: "Kunst HAVO/VWO — de 3D-discipline: beeldhouwkunst, materialen/technieken en hedendaags ruimtelijk werk",
  prerequisites: [
    { id: "kleur-licht-compositie-kunst", title: "Kleur, licht & compositie", niveau: "havo4-5-vwo" },
  ],
  intro:
    "Kunst in drie dimensies. Je leert wat beeldhouwkunst is (vrijstaand vs reliëf, massa, negatieve ruimte), de materialen & technieken (wegnemend hakken, opbouwend boetseren, bronsgieten, readymade), de ontwikkeling door de tijd (Grieks ideaal → barok drama → moderne abstractie) en hedendaags ruimtelijk werk (installatie, land art, openbare ruimte). ~15 min.",
  triggerKeywords: [
    "beeldhouwkunst", "sculptuur", "beeld", "ruimtelijk werk", "3D kunst",
    "vrijstaand beeld", "reliëf", "bas-reliëf", "hoog-reliëf",
    "massa", "volume", "negatieve ruimte", "sokkel",
    "wegnemend", "subtractief", "boetseren", "opbouwend", "additief",
    "marmer", "brons", "bronsgieten", "klei", "lassen", "assemblage",
    "readymade", "Duchamp",
    "contrapost", "Michelangelo David", "Bernini", "Rodin",
    "Brancusi", "Henry Moore", "Calder", "mobile", "kinetische kunst",
    "installatie", "installatiekunst", "site-specific", "land art", "Spiral Jetty",
    "openbare ruimte", "standbeeld", "monument",
  ],
  chapters,
  steps,
};

export default beeldhouwkunstKunst;
