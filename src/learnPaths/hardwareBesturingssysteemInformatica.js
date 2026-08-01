// Leerpad: Hardware & besturingssysteem — Informatica HAVO/VWO
// Onderdelen (CPU/RAM/opslag), hoe de CPU werkt + geheugen, het OS,
// bestanden & opslag. 4 stappen × ~3 checks.

const stepEmojis = ["🖥️", "🧠", "🪟", "📁"];

const chapters = [
  { letter: "A", title: "De onderdelen", emoji: "🖥️", from: 0, to: 0 },
  { letter: "B", title: "CPU & geheugen", emoji: "🧠", from: 1, to: 1 },
  { letter: "C", title: "Het besturingssysteem", emoji: "🪟", from: 2, to: 2 },
  { letter: "D", title: "Bestanden & opslag", emoji: "📁", from: 3, to: 3 },
];

const steps = [
  // ─── A. De onderdelen ─────────────────────────────────────
  {
    title: "De onderdelen van een computer",
    explanation:
      "Een computer bestaat uit **hardware** (de fysieke onderdelen) en **software** (de programma's). De belangrijkste onderdelen:\n\n• **CPU** (processor) — het 'brein': voert de instructies uit en rekent. Snelheid in **GHz** (miljarden bewerkingen per seconde), vaak met meerdere **cores** (kernen die parallel werken).\n• **RAM** (werkgeheugen) — snel **tijdelijk** geheugen waarin lopende programma's en data staan. **Vluchtig**: leeg bij uitzetten.\n• **Opslag** — bewaart bestanden **blijvend** (ook uit): een **SSD** (snel, geen bewegende delen) of een ouder **HDD** (schijf, langzamer).\n• **GPU** (grafische kaart) — rekent beeld/video, en is sterk in veel parallelle berekeningen (games, AI).\n• **Moederbord** — verbindt alle onderdelen.\n• **Voeding** — levert stroom.\n• **Randapparaten (peripherals)** — input (toetsenbord, muis, microfoon) en output (scherm, printer, speakers).\n\n**Belangrijk onderscheid:**\n• **RAM** = snel, tijdelijk, klein (bv. 8-16 GB) → voor wat je *nú* gebruikt.\n• **Opslag (SSD)** = blijvend, groot (bv. 512 GB-2 TB), langzamer → voor wat je *bewaart*.",
    checks: [
      {
        q: "Welk onderdeel is het 'brein' dat instructies uitvoert?",
        options: ["De CPU (processor)", "Het RAM", "De voeding", "Het scherm"],
        answer: 0,
        wrongHints: [null, "RAM is werkgeheugen, het rekent niet.", "De voeding levert alleen stroom.", "Het scherm is output."],
        uitlegPad: {
          stappen: [{ titel: "De processor rekent", tekst: "De **CPU** (Central Processing Unit, processor) is het 'brein': hij voert de instructies van programma's uit en rekent. Snelheid meet je in **GHz** (miljarden bewerkingen/sec), en moderne CPU's hebben meerdere **cores** die parallel werken." }],
          niveaus: { basis: "De CPU.", simpeler: "Brein = CPU", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is kenmerkend voor **RAM** (werkgeheugen)?",
        options: ["Snel en tijdelijk — leeg bij uitzetten", "Bewaart bestanden voor altijd", "Maakt beeld voor games", "Levert de stroom"],
        answer: 0,
        wrongHints: [null, "Dat is juist opslag (SSD/HDD), niet RAM.", "Dat is de GPU.", "Dat is de voeding."],
        uitlegPad: {
          stappen: [{ titel: "Vluchtig werkgeheugen", tekst: "**RAM** is **snel** maar **vluchtig**: het bewaart wat je *nú* gebruikt (lopende programma's) en is **leeg bij uitzetten**. Bestanden bewaar je blijvend op **opslag** (SSD/HDD), die groter maar langzamer is." }],
          niveaus: { basis: "Snel + tijdelijk.", simpeler: "RAM = tijdelijk geheugen", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is het verschil tussen een **SSD** en een **HDD**?",
        options: ["SSD is sneller en heeft geen bewegende delen", "SSD is werkgeheugen, HDD niet", "HDD is altijd groter dan een SSD kan zijn", "Ze zijn precies hetzelfde"],
        answer: 0,
        wrongHints: [null, "Beide zijn opslag, geen werkgeheugen.", "SSD's kunnen ook groot zijn.", "Ze verschillen duidelijk in snelheid en techniek."],
        uitlegPad: {
          stappen: [{ titel: "Flash vs schijf", tekst: "Een **SSD** (Solid State Drive) gebruikt flashgeheugen — **snel**, stil, geen bewegende delen. Een **HDD** (Hard Disk Drive) heeft een **draaiende schijf** en is langzamer. Beide bewaren bestanden blijvend; SSD's zijn tegenwoordig de standaard." }],
          niveaus: { basis: "SSD sneller, geen bewegende delen.", simpeler: "SSD = sneller", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarvoor is de **GPU** (grafische kaart) vooral sterk?",
        options: ["Beeld/video en veel parallelle berekeningen (games, AI)", "Het blijvend bewaren van bestanden", "Het leveren van stroom", "Het typen van tekst"],
        answer: 0,
        wrongHints: [null, "Bewaren doet de opslag (SSD/HDD).", "Stroom komt van de voeding.", "Typen is input, geen GPU-taak."],
        uitlegPad: {
          stappen: [{ titel: "Veel tegelijk rekenen", tekst: "De **GPU** (grafische kaart) is gebouwd om **heel veel berekeningen tegelijk (parallel)** te doen. Perfect voor **beeld/video** in games, maar ook voor **AI** (die veel parallelle rekensommen vraagt). De CPU is juist sterk in losse, complexe taken." }],
          niveaus: { basis: "Beeld + parallel rekenen.", simpeler: "GPU = veel tegelijk", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat doet het **moederbord**?",
        options: ["Verbindt alle onderdelen met elkaar", "Rekent alle instructies uit", "Bewaart bestanden blijvend", "Toont het beeld"],
        answer: 0,
        wrongHints: [null, "Rekenen doet de CPU.", "Bewaren doet de opslag.", "Beeld toont het scherm/de GPU."],
        uitlegPad: {
          stappen: [{ titel: "De verbinder", tekst: "Het **moederbord** is de grote printplaat die **alle onderdelen** (CPU, RAM, opslag, GPU, randapparaten) met elkaar **verbindt**, zodat ze kunnen samenwerken en data kunnen uitwisselen. Het rekent niet zelf — het verbindt." }],
          niveaus: { basis: "Verbindt onderdelen.", simpeler: "Moederbord = verbinder", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. CPU & geheugen ────────────────────────────────────
  {
    title: "Hoe de CPU werkt + geheugen",
    explanation:
      "**Wat doet de CPU precies?** Hij herhaalt razendsnel een vaste cyclus — de **fetch-decode-execute-cyclus**:\n1. **Fetch** — haal de volgende instructie uit het geheugen.\n2. **Decode** — ontcijfer wat de instructie betekent.\n3. **Execute** — voer hem uit (bv. twee getallen optellen).\nDit gebeurt **miljarden keren per seconde**. Een instructie is uiteindelijk gewoon bits (machinecode).\n\n**Cores & klok:**\n• De **kloksnelheid** (GHz) = hoeveel cycli per seconde.\n• **Cores**: meerdere kernen → meerdere instructies tegelijk (parallel).\n\n**De geheugenhiërarchie (snel & klein → traag & groot):**\n• **Registers / cache** — piepklein, supersnel, ín de CPU.\n• **RAM** — werkgeheugen, snel, vluchtig.\n• **Opslag (SSD/HDD)** — groot, blijvend, langzamer.\nHoe dichter bij de CPU, hoe sneller maar kleiner. Data 'reist' van opslag → RAM → CPU.\n\n**Vluchtig vs niet-vluchtig:**\n• **Vluchtig** (RAM): inhoud weg zonder stroom.\n• **Niet-vluchtig** (SSD/HDD): blijft bewaard, ook uit.\nDaarom: zet je de computer uit zonder op te slaan, dan ben je het werk in **RAM** kwijt.",
    checks: [
      {
        q: "Welke cyclus herhaalt de CPU razendsnel?",
        options: ["Fetch – decode – execute", "Knippen – plakken – opslaan", "Upload – download – delen", "Start – pauze – stop"],
        answer: 0,
        wrongHints: [null, "Dat zijn bewerkingen in een tekstprogramma.", "Dat hoort bij internet/bestanden delen.", "Dat is geen CPU-cyclus."],
        uitlegPad: {
          stappen: [{ titel: "Ophalen, ontcijferen, uitvoeren", tekst: "De CPU herhaalt de **fetch-decode-execute-cyclus**: instructie ophalen (fetch), ontcijferen (decode), uitvoeren (execute) — miljarden keren per seconde. Zo werkt hij een programma stap voor stap af." }],
          niveaus: { basis: "Fetch-decode-execute.", simpeler: "Ophalen-ontcijferen-uitvoeren", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat ben je kwijt als je de computer uitzet **zonder op te slaan**?",
        options: ["Het werk dat alleen in het RAM stond", "Alles op je SSD", "Het besturingssysteem", "Niets, alles is altijd veilig"],
        answer: 0,
        wrongHints: [null, "De SSD is niet-vluchtig — die blijft bewaard.", "Het OS staat op opslag en blijft.", "Niet-opgeslagen werk in RAM ben je wél kwijt."],
        uitlegPad: {
          stappen: [{ titel: "RAM is vluchtig", tekst: "**RAM** is **vluchtig**: zonder stroom is het leeg. Werk dat je nog niet hebt **opgeslagen** (en dus alleen in RAM stond) ben je kwijt. Wat op de **SSD/HDD** staat (niet-vluchtig) blijft bewaard." }],
          niveaus: { basis: "Niet-opgeslagen werk in RAM.", simpeler: "RAM weg = niet-opgeslagen werk", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is waar over de **geheugenhiërarchie**?",
        options: ["Dichter bij de CPU = sneller maar kleiner", "Opslag is sneller dan RAM", "RAM is groter dan opslag", "Cache is het traagst"],
        answer: 0,
        wrongHints: [null, "Andersom: opslag is juist langzamer dan RAM.", "Opslag is juist veel groter dan RAM.", "Cache is juist het snelst."],
        uitlegPad: {
          stappen: [{ titel: "Snel & klein vs traag & groot", tekst: "Hoe **dichter bij de CPU**, hoe **sneller maar kleiner**: registers/cache (in de CPU) → RAM → opslag (SSD/HDD). Data reist van opslag naar RAM naar de CPU. De cache is supersnel maar piepklein; opslag is groot maar traag." }],
          niveaus: { basis: "Dichterbij = sneller, kleiner.", simpeler: "Bij CPU = sneller+kleiner", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat betekent de **kloksnelheid** (in GHz) van een CPU?",
        options: ["Hoeveel cycli (bewerkingen) hij ongeveer per seconde doet", "Hoeveel bestanden erop passen", "Hoe groot het scherm is", "Hoeveel stroom hij levert"],
        answer: 0,
        wrongHints: [null, "Opslagruimte is iets anders.", "Schermgrootte staat los van de CPU.", "De CPU levert geen stroom."],
        uitlegPad: {
          stappen: [{ titel: "Cycli per seconde", tekst: "De **kloksnelheid** (GHz = miljarden per seconde) zegt hoeveel **cycli** de CPU per seconde doorloopt — dus hoe vaak hij de fetch-decode-execute-cyclus herhaalt. Hoger betekent (grofweg) sneller, al telt het aantal **cores** ook mee." }],
          niveaus: { basis: "Cycli per seconde.", simpeler: "GHz = snelheid", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is het voordeel van meerdere **cores** in een CPU?",
        options: ["Meerdere instructies tegelijk (parallel) uitvoeren", "Meer opslagruimte", "Een groter scherm", "Gegarandeerd minder stroomverbruik"],
        answer: 0,
        wrongHints: [null, "Cores gaan over rekenen, niet over opslag.", "Schermgrootte staat los.", "Meer cores kunnen juist méér verbruiken."],
        uitlegPad: {
          stappen: [{ titel: "Meer handen", tekst: "Elke **core** is als een aparte rekenkern. Met meerdere cores kan de CPU **meerdere instructies tegelijk (parallel)** uitvoeren — handig als je veel programma's tegelijk draait of zware taken splitst. Meer cores ≈ meer werk tegelijk." }],
          niveaus: { basis: "Meer tegelijk rekenen.", simpeler: "Cores = parallel", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Het besturingssysteem ─────────────────────────────
  {
    title: "Het besturingssysteem (OS)",
    explanation:
      "Een **besturingssysteem** (operating system, OS) is de software die de **brug** vormt tussen de hardware en jouw programma's. Zonder OS kun je een computer niet gebruiken.\n\n**Voorbeelden:** Windows, macOS, **Linux** (computers/servers); **Android**, iOS (telefoons).\n\n**Wat doet een OS?**\n• **Hardware beheren** — praat met CPU, geheugen, schijf, scherm, randapparaten (via **drivers**).\n• **Processen beheren** — verdeelt de CPU-tijd over alle lopende programma's, zodat alles 'tegelijk' lijkt te draaien (**multitasking**).\n• **Geheugen beheren** — verdeelt het RAM over de programma's.\n• **Bestanden beheren** — mappen, opslaan, openen, rechten.\n• **Gebruikersinterface** — het bureaublad, vensters, menu's (GUI) of de opdrachtregel.\n• **Beveiliging** — gebruikers, wachtwoorden, rechten.\n\n**Open source vs gesloten:**\n• **Linux** en Android zijn (grotendeels) **open source**: de broncode is openbaar, iedereen mag meekijken/aanpassen, vaak gratis.\n• **Windows** en macOS zijn **gesloten** (closed source): de code is van het bedrijf.\n\nKort: het **OS regelt de hulpbronnen** zodat jij gewoon op een knop kunt klikken.",
    checks: [
      {
        q: "Wat is de hoofdtaak van een **besturingssysteem (OS)**?",
        options: ["De hardware beheren en programma's laten draaien", "Foto's bewerken", "Het internet aanleggen", "Alleen games spelen"],
        answer: 0,
        wrongHints: [null, "Fotobewerken doe je met een programma óp het OS.", "Het OS legt geen kabels aan.", "Het OS doet veel meer dan games."],
        uitlegPad: {
          stappen: [{ titel: "De brug hardware ↔ software", tekst: "Het **OS** (Windows, macOS, Linux, Android…) is de **brug** tussen hardware en jouw programma's: het beheert hardware (via drivers), verdeelt CPU-tijd en geheugen over processen, regelt bestanden, de interface en beveiliging. Zonder OS kun je de computer niet gebruiken." }],
          niveaus: { basis: "Hardware + programma's beheren.", simpeler: "OS = beheert alles", nogSimpeler: "A." },
        },
      },
      {
        q: "Dat meerdere programma's 'tegelijk' lijken te draaien, regelt het OS met…",
        options: ["Multitasking (CPU-tijd verdelen over processen)", "Een snellere internetverbinding", "Meer schermen", "Een grotere SSD"],
        answer: 0,
        wrongHints: [null, "Internet heeft er niets mee te maken.", "Schermen doen niet mee.", "Opslaggrootte regelt geen multitasking."],
        uitlegPad: {
          stappen: [{ titel: "CPU-tijd verdelen", tekst: "Het OS doet aan **multitasking**: het verdeelt de **CPU-tijd** razendsnel over alle lopende **processen**, zodat het lijkt alsof alles tegelijk draait. In werkelijkheid wisselt de CPU continu tussen taken." }],
          niveaus: { basis: "Multitasking.", simpeler: "Tegelijk = multitasking", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk besturingssysteem is **open source** (broncode openbaar)?",
        options: ["Linux", "Windows", "macOS", "Geen enkel OS"],
        answer: 0,
        wrongHints: [null, "Windows is gesloten (closed source).", "macOS is grotendeels gesloten.", "Linux is juist een bekend open-source-OS."],
        uitlegPad: {
          stappen: [{ titel: "Code openbaar", tekst: "**Linux** (en Android, dat erop bouwt) is **open source**: de broncode is openbaar, iedereen mag meekijken/aanpassen, vaak gratis. **Windows** en **macOS** zijn **gesloten** — de code is eigendom van het bedrijf." }],
          niveaus: { basis: "Linux.", simpeler: "Open source = Linux", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **driver**?",
        options: ["Software waarmee het OS met een apparaat (printer, GPU) kan praten", "Iemand die de computer bestuurt", "Een bestand met foto's", "Het werkgeheugen"],
        answer: 0,
        wrongHints: [null, "Het is software, geen persoon.", "Het is geen fotobestand.", "RAM is iets heel anders."],
        uitlegPad: {
          stappen: [{ titel: "Vertaler naar hardware", tekst: "Een **driver** is een stukje software dat het **OS leert praten met een specifiek apparaat** (printer, grafische kaart, webcam). Zonder de juiste driver herkent of gebruikt het besturingssysteem het apparaat niet goed." }],
          niveaus: { basis: "Software voor een apparaat.", simpeler: "Driver = hardware-vertaler", nogSimpeler: "A." },
        },
      },
      {
        q: "Windows en macOS zijn **gesloten (closed source)**. Dat betekent:",
        options: ["De broncode is eigendom van het bedrijf en niet openbaar", "Ze werken niet zonder internet", "Ze zijn altijd gratis", "Iedereen mag de code vrij aanpassen"],
        answer: 0,
        wrongHints: [null, "Internet staat los van open/closed source.", "Ze zijn meestal juist betaald.", "Vrij aanpassen is juist open source."],
        uitlegPad: {
          stappen: [{ titel: "Code niet openbaar", tekst: "Bij **closed source** houdt het bedrijf de **broncode geheim** — je mag hem niet inzien of aanpassen (Windows, macOS). Bij **open source** (Linux, Android) is de code juist **openbaar** en mag iedereen meekijken en verbeteren." }],
          niveaus: { basis: "Code is van het bedrijf.", simpeler: "Closed = code geheim", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Bestanden & opslag ────────────────────────────────
  {
    title: "Bestanden, mappen & opslag",
    explanation:
      "Het OS bewaart je gegevens als **bestanden**, geordend in een **bestandssysteem**.\n\n**Mappen (folders):**\nBestanden staan in **mappen**, die weer in mappen kunnen zitten — een **boomstructuur**. Een **pad** beschrijft waar een bestand staat, bv. `Documenten/School/verslag.docx`.\n\n**Bestandsnaam + extensie:**\nAchter de punt staat de **extensie**: die vertelt het **type**:\n• `.txt` tekst · `.docx` Word · `.pdf` document\n• `.jpg` `.png` afbeelding · `.mp3` geluid · `.mp4` video\n• `.py` Python-code · `.html` webpagina · `.zip` ingepakt\nDe extensie bepaalt met welk programma een bestand standaard opent. (Veranderen van extensie verandert niet de echte inhoud!)\n\n**Bestandsgrootte:** in bytes / KB / MB / GB (zie binair-leerpad). Een foto is al snel een paar MB, een film een paar GB.\n\n**Lokaal vs cloud:**\n• **Lokaal** — op je eigen SSD/HDD.\n• **Cloud** — op servers via internet (Google Drive, iCloud, Dropbox): overal bereikbaar, automatische back-up, samenwerken — maar je bent afhankelijk van internet en vertrouwt je data aan een bedrijf toe (let op privacy/AVG).\n\n**Back-up-regel:** belangrijke bestanden op **meer dan één** plek (bv. lokaal + cloud). Eén kopie is geen kopie.",
    checks: [
      {
        q: "Wat vertelt de **extensie** (achter de punt, bv. `.jpg`) van een bestand?",
        options: ["Het bestandstype / met welk programma het opent", "Hoe groot het bestand is", "Wie het gemaakt heeft", "Op welke schijf het staat"],
        answer: 0,
        wrongHints: [null, "De grootte staat los van de extensie.", "De maker is iets anders.", "De locatie is het pad, niet de extensie."],
        uitlegPad: {
          stappen: [{ titel: "Het type", tekst: "De **extensie** (`.jpg`, `.docx`, `.py`…) geeft het **bestandstype** aan en bepaalt met welk programma het standaard opent. Let op: alleen de extensie hernoemen verandert niet de echte **inhoud** van het bestand." }],
          niveaus: { basis: "Het type.", simpeler: "Extensie = bestandstype", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een voordeel van bestanden in de **cloud** opslaan?",
        options: ["Overal bereikbaar + automatische back-up", "Werkt altijd zonder internet", "Niemand anders kan het ooit zien", "Het kost nooit opslag"],
        answer: 0,
        wrongHints: [null, "Cloud heeft juist internet nodig.", "Je vertrouwt je data aan een bedrijf toe — let op privacy.", "Het kost wel degelijk (cloud)opslag."],
        uitlegPad: {
          stappen: [{ titel: "Overal + back-up", tekst: "**Cloudopslag** (Drive, iCloud, Dropbox) staat op servers via internet: **overal bereikbaar**, automatische **back-up** en makkelijk **samenwerken**. Nadelen: je hebt **internet** nodig en je vertrouwt je gegevens toe aan een bedrijf (privacy/AVG)." }],
          niveaus: { basis: "Overal + back-up.", simpeler: "Cloud = overal bereikbaar", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoe beschrijf je waar een bestand staat in de mappenstructuur?",
        options: ["Met een pad, bv. Documenten/School/verslag.docx", "Met de bestandsgrootte", "Met de extensie alleen", "Met het IP-adres"],
        answer: 0,
        wrongHints: [null, "Grootte zegt niets over de locatie.", "De extensie zegt het type, niet de plek.", "Een IP-adres hoort bij netwerken."],
        uitlegPad: {
          stappen: [{ titel: "Een pad door de boom", tekst: "Een **pad** beschrijft de route door de **boomstructuur** van mappen naar het bestand, bv. `Documenten/School/verslag.docx`. Mappen kunnen in mappen zitten; het pad zegt precies waar het bestand staat." }],
          niveaus: { basis: "Een pad.", simpeler: "Locatie = pad", nogSimpeler: "A." },
        },
      },
      {
        q: "Je hernoemt `foto.jpg` naar `foto.txt`. Wat gebeurt er met de inhoud?",
        options: ["De echte inhoud blijft hetzelfde — alleen de naam verandert", "Het wordt automatisch een tekstbestand", "Het bestand wordt gewist", "Het wordt kleiner"],
        answer: 0,
        wrongHints: [null, "De extensie hernoemen verandert de data niet.", "Hernoemen wist niets.", "De grootte blijft gelijk."],
        uitlegPad: {
          stappen: [{ titel: "Naam ≠ inhoud", tekst: "De **extensie** is maar een **label**. Hernoem je `foto.jpg` naar `foto.txt`, dan blijven de bytes exact hetzelfde — het is nog steeds een afbeelding. Alleen opent je computer het nu met het verkeerde programma, waardoor het als 'onzin' oogt." }],
          niveaus: { basis: "Inhoud blijft gelijk.", simpeler: "Naam wijzigen ≠ inhoud", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een goede **back-up-regel**?",
        options: ["Belangrijke bestanden op meer dan één plek bewaren", "Eén kopie is altijd genoeg", "Nooit een kopie maken", "Alles alleen in het RAM zetten"],
        answer: 0,
        wrongHints: [null, "Ook die ene kopie kun je kwijtraken.", "Zonder kopie ben je bij een crash alles kwijt.", "RAM is vluchtig — daar ben je het meteen kwijt."],
        uitlegPad: {
          stappen: [{ titel: "Eén kopie is geen kopie", tekst: "Bewaar belangrijke bestanden op **meer dan één plek** (bv. lokaal + cloud). Raakt de ene plek beschadigd (crash, ransomware, diefstal), dan heb je nog de andere. 'Eén kopie is geen kopie' — echte veiligheid begint bij twee." }],
          niveaus: { basis: "Meerdere plekken.", simpeler: "Back-up = meer plekken", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const hardwareBesturingssysteemInformatica = {
  id: "hardware-besturingssysteem-informatica",
  title: "Hardware & besturingssysteem (Informatica)",
  emoji: "🖥️",
  level: "havo4-5-vwo",
  subject: "informatica",
  referentieNiveau: "havo-vwo-informatica-domein-architectuur",
  sloThema: "Informatica HAVO/VWO — hoe een computer is opgebouwd: hardware, CPU/geheugen, het OS en bestanden",
  prerequisites: [
    { id: "binair-datarepresentatie-informatica", title: "Binair & datarepresentatie", niveau: "havo4-5-vwo" },
  ],
  intro:
    "Wat zit er ín een computer en hoe werkt het samen? Je leert de onderdelen (CPU, RAM, SSD/HDD, GPU), hoe de CPU rekent (fetch-decode-execute) en de geheugenhiërarchie (vluchtig vs niet-vluchtig), wat een besturingssysteem doet (multitasking, drivers, open vs closed source) en hoe bestanden & opslag werken (extensies, paden, lokaal vs cloud). ~15 min.",
  triggerKeywords: [
    "hardware", "computer onderdelen",
    "CPU", "processor", "core", "GHz", "kloksnelheid",
    "RAM", "werkgeheugen", "geheugen",
    "opslag", "SSD", "HDD", "harde schijf",
    "GPU", "grafische kaart", "moederbord", "randapparaten",
    "fetch decode execute", "vluchtig", "niet-vluchtig", "cache",
    "besturingssysteem", "operating system", "OS",
    "Windows", "macOS", "Linux", "Android",
    "multitasking", "proces", "driver", "open source",
    "bestand", "bestandssysteem", "map", "extensie", "pad", "cloud opslag",
  ],
  chapters,
  steps,
};

export default hardwareBesturingssysteemInformatica;
