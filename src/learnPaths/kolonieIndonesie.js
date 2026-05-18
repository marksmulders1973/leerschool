// Leerpad: Koloniale relatie Nederland - Indonesië (1602-1949)
// VMBO-GT eindexamen-syllabus geschiedenis+staatsinrichting (verplicht).
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  oranje: "#ef6c00",
  rood: "#c62828",
  goud: "#ffd54f",
  groen: "#00897b",
};

const stepEmojis = ["⚓", "🌾", "🇯🇵", "🇮🇩", "🏆"];

const chapters = [
  { letter: "A", title: "VOC + koloniale start", emoji: "⚓", from: 0, to: 0 },
  { letter: "B", title: "Cultuurstelsel + ethische politiek", emoji: "🌾", from: 1, to: 1 },
  { letter: "C", title: "Japanse bezetting (1942-45)", emoji: "🇯🇵", from: 2, to: 2 },
  { letter: "D", title: "Onafhankelijkheid 1945-1949", emoji: "🇮🇩", from: 3, to: 3 },
  { letter: "E", title: "Eind-opdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. VOC + koloniale start ─────────────────────────────
  {
    title: "Hoe werd Indonesië een Nederlandse kolonie?",
    explanation:
      "Vóór 1900 hadden Nederlanders al **300 jaar invloed** in wat we nu Indonesië noemen — eerst via een handelscompagnie, later als staat.\n\n**De VOC (Verenigde Oostindische Compagnie) 1602-1799**:\n• Opgericht in 1602 als eerste **naamloze vennootschap** ter wereld.\n• Had monopolie op handel met Azië voor de Republiek der Nederlanden.\n• Vestigde forten en handelsposten — vooral op **Java**, **Molukken**, **Sumatra**.\n• Specerijen (nootmuskaat, kruidnagel, peper, kaneel) waren extreem winstgevend.\n• 1799: VOC **failliet** door corruptie + Engelse oorlogen. Bezittingen overgenomen door Nederlandse staat.\n\n**Wat veranderde rond 1800**:\n• Bezittingen werden **Nederlands-Indië** (officiële kolonie).\n• 1810-1816: tijdelijk Britse overheersing tijdens Napoleon-oorlogen.\n• 1816: terug naar Nederland via Conventie van Londen.\n\n**Geografie**: 'Indonesië' omvat tegenwoordig 17.000+ eilanden. Belangrijkste: Java (politieke kern), Sumatra (olie + rubber), Borneo, Sulawesi (Celebes), Bali, Molukken (specerijen), Papoea.\n\n**Inwonertal 1900**: ~38 miljoen Indonesiërs vs ~60.000 Nederlanders in de kolonie.",
    checks: [
      {
        q: "In welk jaar werd de **VOC** opgericht?",
        options: ["1602","1648","1795","1849"],
        answer: 0,
        wrongHints: [null, "Niet — dat is einde Tachtigjarige Oorlog.", "Bataafse Republiek/Frans tijdperk.", "Te laat — VOC was toen al 50 jaar failliet."],
        uitlegPad: {
          stappen: [{ titel: "VOC 1602-1799", tekst: "**VOC** opgericht **20 maart 1602** door de Staten-Generaal. Bestond 197 jaar. Eerste multinationale onderneming. Vandaag de **VOC-mentaliteit** (term Balkenende 2006) verwijst kritisch naar deze historie." }],
          woorden: [{ woord: "VOC", uitleg: "Verenigde Oostindische Compagnie — Nederlands handelsbedrijf in Azië 1602-1799." }, { woord: "octrooi", uitleg: "Monopolie/exclusieve recht verleend door overheid." }],
          theorie: "Cito-feit: VOC = 1602. Tegenhanger: WIC (West-Indische Compagnie) = 1621 — opereerde in Amerika/West-Afrika.",
          voorbeelden: [{ type: "feit", tekst: "VOC was eerste bedrijf ter wereld met verhandelbare aandelen (Amsterdamse beurs)." }],
          niveaus: { basis: "1602 — A.", simpeler: "VOC = 1602 = A.", nogSimpeler: "1602 = A." },
        },
      },
      {
        q: "Welk product was vooral **winstgevend** voor de VOC?",
        options: ["Specerijen (nootmuskaat, kruidnagel, peper)","IJzer","Wol","Tabak"],
        answer: 0,
        wrongHints: [null, "Geen Aziatisch hoofdproduct.", "Niet uit Indonesië afkomstig.", "Wel handel maar geen kern-VOC-product."],
        uitlegPad: {
          stappen: [{ titel: "Specerijen = goud van toen", tekst: "Specerijen (vooral nootmuskaat + kruidnagel uit de **Molukken**) waren in Europa zeer schaars en duur. VOC vestigde gewelddadig monopolie — bv. **Banda-eilanden bloedbad** 1621 onder J.P. Coen om controle te krijgen." }],
          woorden: [{ woord: "specerij", uitleg: "Geurig + smaakvol kruid uit tropen, gebruikt voor eten/conservering." }, { woord: "Molukken", uitleg: "Eilandengroep oostelijk Indonesië, beroemd om kruidnagel + nootmuskaat." }],
          theorie: "Cito-controversie: J.P. Coen wordt nu zelden meer in straatnamen genoemd vanwege Banda-massamoord.",
          voorbeelden: [{ type: "feit", tekst: "1621: ~14.000 Bandanezen vermoord/verbannen door Coen om monopolie te garanderen." }],
          niveaus: { basis: "Specerijen — A.", simpeler: "Nootmuskaat etc. = VOC-hoofdproduct = A.", nogSimpeler: "Specerijen = A." },
        },
      },
      {
        q: "Wanneer ging de **VOC failliet**?",
        options: ["1799","1648","1830","1900"],
        answer: 0,
        wrongHints: [null, "Tachtigjarige Oorlog-einde — VOC bestond toen pas 46 jaar.", "Cultuurstelsel-start — VOC al 31 jaar failliet.", "Veel te laat."],
        uitlegPad: {
          stappen: [{ titel: "1799 = VOC einde", tekst: "Door **corruptie**, **lange oorlogen met Engeland** (Vierde Engelse Oorlog 1780-84) en concurrentie viel VOC om. Bezittingen werden door Nederlandse staat overgenomen — begin van koloniale staat **Nederlands-Indië**." }],
          theorie: "VOC werd 197 jaar oud (1602-1799). Cito-truc: VOC = 1602, einde 1799, dus 197 jaar.",
          niveaus: { basis: "1799 — A.", simpeler: "VOC faillissement = 1799 = A.", nogSimpeler: "1799 = A." },
        },
      },
      {
        q: "Hoe heette de kolonie **officieel** in de 19e eeuw?",
        options: ["Nederlands-Indië","Indonesië","Java","Oost-Indië"],
        answer: 0,
        wrongHints: [null, "Pas vanaf 1945 — onafhankelijk.", "Slechts één eiland (zelfs grootste deel).", "Algemene term, niet officiële naam kolonie."],
        uitlegPad: {
          stappen: [{ titel: "Nederlands-Indië 1816-1945", tekst: "Officiële naam vanaf overdracht door Britten (1816). Bestond uit ~17.000 eilanden (Java, Sumatra, Borneo, Sulawesi, Bali, Molukken, Papoea). Hoofdstad = **Batavia** (nu Jakarta)." }],
          woorden: [{ woord: "Nederlands-Indië", uitleg: "Nederlandse kolonie 1816-1945 in zuidoost-Azië, nu Indonesië." }],
          niveaus: { basis: "Nederlands-Indië — A.", simpeler: "Kolonie-naam = Nederlands-Indië = A.", nogSimpeler: "Ned-Indië = A." },
        },
      },
      {
        q: "Wat is de **hoofdstad** van Nederlands-Indië?",
        options: ["Batavia","Jakarta","Singapore","Manilla"],
        answer: 0,
        wrongHints: [null, "Bijna — Jakarta is moderne naam (sinds 1949).", "Britse kolonie, nu eigen staat.", "Filipijns — geen Nederlandse kolonie."],
        uitlegPad: {
          stappen: [{ titel: "Batavia = oud, Jakarta = nieuw", tekst: "1619: J.P. Coen sticht **Batavia** op locatie van Jakarta-stad. Naam blijft tot 1942 (Japanse bezetting). 1949: officiële naam **Jakarta** voor onafhankelijke hoofdstad Indonesië." }],
          theorie: "Cito-truc: zelfde plek, twee namen. Batavia = NL-tijd. Jakarta = onafhankelijk Indonesië.",
          niveaus: { basis: "Batavia — A.", simpeler: "Nederlandse hoofdstad-naam = Batavia = A.", nogSimpeler: "Batavia = A." },
        },
      },
    ],
  },

  // ─── B. Cultuurstelsel + ethische politiek ────────────────
  {
    title: "Cultuurstelsel + ethische politiek",
    explanation:
      "Tussen 1816-1942 had Nederland Indonesië als kolonie. Twee belangrijke perioden voor het VMBO-examen:\n\n**Cultuurstelsel (1830-1870)**:\n• Bedacht door gouverneur **Johannes van den Bosch** in 1830.\n• Indonesische boeren werden **gedwongen** om 20% van hun grond te gebruiken voor **export-gewassen** (koffie, suiker, indigo, thee).\n• Opbrengst ging naar Nederlandse staat — leverde **Indonesisch batig slot** op (= overschot voor NL).\n• Met dit geld: bouw NL-spoorwegen, Schipholpolder, terugbetalen staatsschuld na Belgische opstand.\n• Nadeel voor Indonesië: hongersnoden, geen eigen voedsel-grond, dwangarbeid.\n\n**Multatuli 'Max Havelaar' (1860)**:\n• Pseudoniem van **Eduard Douwes Dekker** — voormalig assistent-resident op Java.\n• Roman als aanklacht tegen misbruik in cultuurstelsel.\n• Bekend citaat: 'De Javaan wordt mishandeld.'\n• Wakkerde publiek debat in NL aan over koloniale wreedheid.\n\n**Ethische politiek (1901-1942)**:\n• Koningin **Wilhelmina** in troonrede 1901: *'Nederland heeft een zedelijke roeping te vervullen.'*\n• Drie speerpunten: **Onderwijs, Irrigatie, Emigratie** (van Java naar Sumatra om bevolkingsdruk te verminderen).\n• In praktijk: nog steeds beperkt — alleen kleine inheemse elite kreeg toegang tot onderwijs.\n• Wel: opkomst nationalistische beweging vanuit deze elite (**Boedi Oetomo** 1908, Soekarno's PNI 1927).",
    checks: [
      {
        q: "Wie bedacht het **Cultuurstelsel** in 1830?",
        options: ["Johannes van den Bosch","Multatuli","Soekarno","Willem I"],
        answer: 0,
        wrongHints: [null, "Niet — hij was juist KRITISCH op het systeem.", "Indonesische leider — kwam veel later.", "Koning, maar gouverneur Van den Bosch bedacht het."],
        uitlegPad: {
          stappen: [{ titel: "Van den Bosch = bedenker", tekst: "**Johannes van den Bosch** = gouverneur-generaal Nederlands-Indië 1830-1834. Bedacht Cultuurstelsel om de **NL-staatsschuld** (door Belgische opstand) terug te betalen. Werd er rijk van — kreeg adellijke titel ('graaf Van den Bosch')." }],
          woorden: [{ woord: "Cultuurstelsel", uitleg: "Systeem waarbij Indonesische boeren gedwongen werden export-gewassen te verbouwen voor de NL-staat." }],
          niveaus: { basis: "Van den Bosch — A.", simpeler: "Cultuurstelsel-bedenker = Van den Bosch = A.", nogSimpeler: "Van den Bosch = A." },
        },
      },
      {
        q: "Wat is het **batig slot**?",
        options: ["Overschot uit Indonesië voor de Nederlandse staat","Cultuurstelsel-handboek","Indonesische muziek-stijl","Belasting-categorie"],
        answer: 0,
        wrongHints: [null, "Niet — geen handboek.", "Niet — geen muziek.", "Bijna — gerelateerd maar specifieker dan algemene belasting."],
        uitlegPad: {
          stappen: [{ titel: "Batig slot = winst", tekst: "**Batig slot** = boekhoud-term voor 'wat overblijft' (overschot) na aftrek van kosten. In NL-koloniale context: het Indonesische geld dat overbleef nadat de kolonie-overheid haar kosten betaald had — ging naar Den Haag." }],
          woorden: [{ woord: "batig slot", uitleg: "Overschot in een begroting/kassa — positief saldo." }],
          theorie: "Tussen 1830-1870 leverde batig slot ~30% van de Nederlandse staats-inkomsten op. Critici noemden NL daarom 'parasitair' op kolonie.",
          voorbeelden: [{ type: "feit", tekst: "Met batig slot werden o.a. NL-spoorwegen + Schiphol-droogmaking betaald." }],
          niveaus: { basis: "Overschot voor NL — A.", simpeler: "Batig slot = winst die naar NL ging = A.", nogSimpeler: "Winst voor NL = A." },
        },
      },
      {
        q: "*Max Havelaar* (1860) is geschreven door:",
        options: ["Multatuli (Eduard Douwes Dekker)","Theo Thijssen","Annie M.G. Schmidt","Hella Haasse"],
        answer: 0,
        wrongHints: [null, "Niet — andere 20e-eeuwse auteur ('Kees de jongen').", "Niet — kinderboeken later (Pluk e.d.).", "Wel over Indonesië ('Oeroeg' 1948), maar niet Max Havelaar."],
        uitlegPad: {
          stappen: [{ titel: "Multatuli = Latijn voor 'ik heb veel geleden'", tekst: "**Eduard Douwes Dekker** (1820-1887), oud-assistent-resident op Java, schreef de roman als wraak op de NL-koloniale staat. *Max Havelaar* = klassieker van NL-literatuur + politieke aanklacht. Naam **'Max Havelaar'** is ook fairtrade-koffiemerk geworden." }],
          woorden: [{ woord: "Multatuli", uitleg: "Pseudoniem van E. Douwes Dekker, Latijn voor 'ik heb veel geleden'." }],
          theorie: "Cito-aanknopingspunt: Multatuli-citaat 'De Javaan wordt mishandeld' = bekendste protestzin van koloniale tijd.",
          niveaus: { basis: "Multatuli — A.", simpeler: "Max Havelaar = Multatuli = A.", nogSimpeler: "Multatuli = A." },
        },
      },
      {
        q: "**Ethische politiek** (1901) had drie speerpunten. Welke?",
        options: ["Onderwijs + Irrigatie + Emigratie","Geloof + Werk + Familie","Leger + Politie + Belasting","Suiker + Koffie + Thee"],
        answer: 0,
        wrongHints: [null, "Geen speerpunten ethische politiek.", "Niet — ethische politiek wilde juist niet meer geweld.", "Cultuurstelsel-producten, niet ethische politiek."],
        uitlegPad: {
          stappen: [{ titel: "OIE — onthoud O-I-E", tekst: "Speerpunten ethische politiek volgens **koningin Wilhelmina** (troonrede 1901):\n• **O**nderwijs: scholen voor inheemse bevolking\n• **I**rrigatie: betere waterwerken voor landbouw\n• **E**migratie: Javaanse boeren overplaatsen naar minder-bevolkte eilanden (Sumatra, Sulawesi)" }],
          woorden: [{ woord: "ethische politiek", uitleg: "Nieuwe koloniale koers 1901: NL als 'voogd' die welvaart in Indië moet bevorderen." }],
          theorie: "Cito-criticus: ethische politiek was deels propaganda — in praktijk bleef het meeste geld naar NL gaan + slechts ~1% Indonesiërs kreeg onderwijs.",
          niveaus: { basis: "Onderwijs Irrigatie Emigratie — A.", simpeler: "OIE = ethische politiek = A.", nogSimpeler: "OIE = A." },
        },
      },
      {
        q: "Welke organisatie startte de **Indonesische nationalistische beweging** in 1908?",
        options: ["Boedi Oetomo","PNI","VOC","KNIL"],
        answer: 0,
        wrongHints: [null, "PNI = 1927, later. Soekarno-partij.", "VOC bestond toen al 109 jaar niet meer.", "KNIL = Koninklijk Nederlands-Indisch Leger — onderdrukker, geen nationalisten."],
        uitlegPad: {
          stappen: [{ titel: "Boedi Oetomo 1908", tekst: "**Boedi Oetomo** ('Verheven Streven') = eerste moderne Indonesische nationalistische beweging, opgericht 20 mei 1908 door studenten. Vredig, gericht op zelfontplooiing. Datum 20 mei = **Hari Kebangkitan Nasional** (Dag van het Nationaal Ontwaken)." }],
          theorie: "Volgorde: Boedi Oetomo 1908 → Sarekat Islam 1912 → PNI 1927 (Soekarno) → Onafhankelijkheid 1945.",
          niveaus: { basis: "Boedi Oetomo — A.", simpeler: "1908 = Boedi Oetomo = A.", nogSimpeler: "Boedi Oetomo = A." },
        },
      },
    ],
  },

  // ─── C. Japanse bezetting ─────────────────────────────────
  {
    title: "Japanse bezetting 1942-1945",
    explanation:
      "Tijdens **Tweede Wereldoorlog** veroverde Japan in maart 1942 in 3 maanden tijd heel Nederlands-Indië. De Nederlandse koloniale macht stortte in.\n\n**Hoe het ging**:\n• 10 januari 1942: Japan valt aan via Borneo + Celebes.\n• 8 maart 1942: NL-overgave bij **Kalidjati** — generaal Ter Poorten capituleert.\n• Nederlandse + Brits-Indische militairen + burgers (~100.000) gaan **Japanse kampen** in.\n• Onmenselijke omstandigheden: dwangarbeid Birma-spoorweg, mishandeling, honger.\n• ~20.000 Nederlanders sterven in kampen + ~4 miljoen Indonesiërs door dwangarbeid (romusha).\n\n**Effect op de kolonie**:\n• **Mythe van de witte overmacht doorbroken**: Aziatische macht versloeg Europeanen in 3 maanden.\n• Japan moedigde aanvankelijk Indonesisch nationalisme aan om bevolking tegen NL te keren.\n• **Soekarno + Hatta** kregen meer ruimte om Indonesische beweging te organiseren.\n• Vrouwen + meisjes gedwongen als **'troostmeisjes'** in Japanse legerbordelen — ook NL-vrouwen.\n\n**Augustus 1945**:\n• 6 + 9 augustus: VS gooien atoombommen op Hiroshima + Nagasaki.\n• 15 augustus: Japan capituleert (Keizer Hirohito's radio-toespraak).\n• Plotseling **machts-vacuüm** in Indonesië — NL is nog niet terug, Japan vertrekt.",
    checks: [
      {
        q: "In welk jaar viel **Japan** Nederlands-Indië binnen?",
        options: ["1942","1939","1945","1949"],
        answer: 0,
        wrongHints: [null, "Begin WO2 in Europa, maar Japan-Indië-oorlog later.", "Einde Japanse bezetting, geen begin.", "Onafhankelijkheid Indonesië, geen Japan-aanval."],
        uitlegPad: {
          stappen: [{ titel: "Maart 1942 = NL-overgave", tekst: "Pearl Harbor december 1941. Daarna Japan zuidelijk: Filipijnen, Maleisië, Singapore. Maart 1942 NL-overgave bij Kalidjati. Bezetting 1942-1945 (~3,5 jaar)." }],
          theorie: "Cito-feit: NL-Indië capituleerde sneller dan Japan-veld in Europa verloopt. 3 maanden van aanval tot overgave.",
          niveaus: { basis: "1942 — A.", simpeler: "Japan veroverde NL-Indië in 1942 = A.", nogSimpeler: "1942 = A." },
        },
      },
      {
        q: "Wie waren de **leiders** van de Indonesische onafhankelijkheidsbeweging?",
        options: ["Soekarno + Hatta","Multatuli + Coen","Wilhelmina + Drees","Mahatma + Nehru"],
        answer: 0,
        wrongHints: [null, "Tegenstanders van koloniale onderdrukking maar uit eerdere/andere context.", "NL-koningin + premier — geen onafhankelijkheidsleiders.", "Indiase onafhankelijkheid (1947) — andere kolonie."],
        uitlegPad: {
          stappen: [{ titel: "Duo: Soekarno + Hatta", tekst: "**Ir. Soekarno** (1901-1970) = charismatische voorman, civiel ingenieur, oprichter PNI 1927. **Mohammad Hatta** (1902-1980) = econoom, mede-strijder. Tegenovergesteld karakters maar effectief duo. Beide werden door NL meermaals verbannen." }],
          woorden: [{ woord: "Soekarno", uitleg: "Eerste president van onafhankelijk Indonesië (1945-1967)." }, { woord: "Hatta", uitleg: "Eerste vicepresident van Indonesië (1945-1956)." }],
          niveaus: { basis: "Soekarno + Hatta — A.", simpeler: "Duo Soekarno-Hatta = A.", nogSimpeler: "Soekarno = A." },
        },
      },
      {
        q: "Wat zijn **romusha** in de Japanse bezetting?",
        options: ["Gedwongen Indonesische dwangarbeiders","Japanse soldaten","Indonesische ambtenaren","NL-krijgsgevangenen"],
        answer: 0,
        wrongHints: [null, "Niet — de uitbuiters.", "Niet — ambtenaren werden grotendeels behouden.", "Bijna — die zaten in aparte kampen, niet 'romusha'."],
        uitlegPad: {
          stappen: [{ titel: "Romusha = dwangarbeider", tekst: "**Romusha** = Indonesisch voor 'arbeider'. Tijdens Japanse bezetting werden ~4 miljoen Indonesiërs gedwongen voor de Japanners te werken (oa Birma-spoorweg, kustverdediging). ~2 miljoen kwamen om. Een **vergeten genocide** in NL-geschiedenisles." }],
          woorden: [{ woord: "romusha", uitleg: "Indonesische dwangarbeider tijdens Japanse bezetting WO2." }],
          theorie: "Belangrijk voor balans: ~20.000 Nederlanders + ~2 miljoen Indonesiërs slachtoffer Japanse bezetting. Schade aan Indonesische bevolking veel groter.",
          niveaus: { basis: "Gedwongen dwangarbeiders — A.", simpeler: "Romusha = Indonesische slaaf-arbeiders Japan = A.", nogSimpeler: "Dwangarbeider = A." },
        },
      },
      {
        q: "Wanneer **capituleerde Japan** in WO2?",
        options: ["15 augustus 1945","6 augustus 1945","8 mei 1945","17 augustus 1945"],
        answer: 0,
        wrongHints: [null, "Hiroshima-atoombom, geen capitulatie.", "Capitulatie Duitsland in Europa (V-E Day).", "Bijna — Indonesische onafhankelijkheidsverklaring, 2 dagen later."],
        uitlegPad: {
          stappen: [{ titel: "15 aug 1945 = V-J Day", tekst: "Na 2 atoombommen: 6 aug Hiroshima, 9 aug Nagasaki. 15 augustus 1945: **Keizer Hirohito** kondigt capitulatie aan via radio — eerste keer dat een Japanse keizer publiek sprak. Officiële tekening 2 september 1945 op USS Missouri." }],
          theorie: "Tijdlijn: 8 mei 1945 Duitsland over → 6 aug Hiroshima → 9 aug Nagasaki → 15 aug Japan capituleert → 17 aug Indonesië roept onafhankelijkheid uit.",
          niveaus: { basis: "15 augustus 1945 — A.", simpeler: "Japan capituleert 15-8-1945 = A.", nogSimpeler: "15-8-1945 = A." },
        },
      },
      {
        q: "Welk effect had Japanse bezetting op **NL-koloniale prestige**?",
        options: ["Doorbroken — Aziaten konden Europeanen verslaan","Versterkt","Geen","Verdwenen volledig"],
        answer: 0,
        wrongHints: [null, "Niet — Japanse overmacht was juist een schok.", "Veel effect — psychologische omslag.", "Niet helemaal verdwenen, maar wel doorbroken."],
        uitlegPad: {
          stappen: [{ titel: "Mythe van witte overmacht", tekst: "Vóór 1942: koloniale ideologie dat 'witte mensen' van nature heersers zijn. **Japan's snelle overwinning** doorbrak die mythe — Aziaten konden Europeanen verslaan. Dit gaf nationalistische bewegingen overal in Azië (Indonesië, Vietnam, Maleisië, Birma) extra kracht na 1945." }],
          theorie: "Cito-link: deze 'doorbroken mythe' verklaart waarom dekolonisatie in heel Azië versnelde na 1945.",
          niveaus: { basis: "Doorbroken — A.", simpeler: "Japan won = NL-prestige weg = A.", nogSimpeler: "Doorbroken = A." },
        },
      },
    ],
  },

  // ─── D. Onafhankelijkheid 1945-1949 ───────────────────────
  {
    title: "Indonesische onafhankelijkheid 1945-1949",
    explanation:
      "**17 augustus 1945**: 2 dagen na Japanse capitulatie roept **Soekarno** vanaf zijn huis in Jakarta de **onafhankelijkheid van Indonesië** uit. Hatta tekent mee. Nederland accepteert dit aanvankelijk NIET.\n\n**1945-1949: een vergeten oorlog**\nNederlandse regering noemde het officieel '**politionele acties**' (politie-werk, geen oorlog). Indonesische zijde: '**Bersiap**' + **Onafhankelijkheidsoorlog**.\n\n**Belangrijkste gebeurtenissen**:\n• **Bersiap** (eind 1945-begin 1946): chaotische periode. Indonesische jongeren (pemoeda's) vallen Nederlanders/Indo-Europeanen/Chinezen aan. ~3.500-30.000 doden.\n• **Linggadjati-akkoord** (november 1946): NL erkent Java + Sumatra-controle van Republiek Indonesië. Maar uitvoering loopt mis.\n• **Eerste politionele actie** ('Operatie Product', juli-aug 1947): NL valt aan om economische gebieden te heroveren.\n• **Renville-akkoord** (januari 1948): nieuwe pauze.\n• **Tweede politionele actie** ('Operatie Kraai', dec 1948): NL bezet Yogyakarta, neemt Soekarno + Hatta gevangen.\n• Internationale druk (vooral **VS** + **VN**): NL moet stoppen — VS dreigt Marshall-hulp in te trekken.\n• **27 december 1949**: NL erkent **officieel soevereiniteit** Indonesië in een ceremonie in Amsterdam. Koningin Juliana tekent.\n\n**Verliezen**:\n• ~100.000 Indonesiërs dood (NL-leger + gevolgschade)\n• ~5.000 Nederlandse militairen dood\n• ~6.000 Indo-Europese burgers verlieten Indonesië (gerepatrieerd naar NL 1949-1962)\n• Excuses NL koning Willem-Alexander **2020** in Jakarta voor 'buitensporig geweld'.\n\n**Papoea (Nieuw-Guinea)** bleef nog NL t/m 1962, daarna ook overgedragen.",
    checks: [
      {
        q: "Wanneer riepen Soekarno + Hatta **onafhankelijkheid** uit?",
        options: ["17 augustus 1945","15 augustus 1945","27 december 1949","20 mei 1908"],
        answer: 0,
        wrongHints: [null, "Niet — Japan-capitulatie, geen onafhankelijkheidsverklaring.", "Niet — pas officiële NL-erkenning, 4 jaar later.", "Niet — start nationalistische beweging Boedi Oetomo."],
        uitlegPad: {
          stappen: [{ titel: "17 aug 1945 = Hari Kemerdekaan", tekst: "**Soekarno** las de **Proclamasi Kemerdekaan** (onafhankelijkheidsverklaring) voor om 10:00 op 17 augustus 1945, 2 dagen na Japans' capitulatie. Tekst werd op een typemachine getypt door **Sayuti Melik**. **Hari Kemerdekaan** (Onafhankelijkheidsdag) is Indonesische nationale feestdag." }],
          theorie: "Cito-tijdlijn: 15 aug Japan over → 17 aug Indonesië verklaart onafhankelijkheid → 1945-49 strijd → 27 dec 1949 NL erkent.",
          niveaus: { basis: "17 augustus 1945 — A.", simpeler: "Soekarno-proclamatie = 17-8-1945 = A.", nogSimpeler: "17-8-1945 = A." },
        },
      },
      {
        q: "Hoe noemde **Nederland** de oorlog 1945-1949 officieel?",
        options: ["Politionele acties","Wereldoorlog 3","Koloniale oorlog","Onafhankelijkheidsoorlog"],
        answer: 0,
        wrongHints: [null, "Niet — alleen NL-Indonesië.", "Wel feitelijk, maar NIET officiële NL-term.", "Niet — Indonesische term, niet NL."],
        uitlegPad: {
          stappen: [{ titel: "'Politionele actie' = eufemisme", tekst: "**Politionele acties** klinkt onschuldig (politie-werk, orde-handhaving) maar het waren **militaire offensieven** met tienduizenden NL-soldaten. NL-regering wilde geen 'oorlog' erkennen om buitenlandse interventie te vermijden. Sinds 2022 wordt officieel **'koloniale oorlog'** gebruikt." }],
          woorden: [{ woord: "eufemisme", uitleg: "Verzachtende term voor iets onaangenaams." }, { woord: "politionele actie", uitleg: "NL-eufemisme voor militair offensief 1947 + 1948 in Indonesië." }],
          theorie: "Cito-controversie: NL-regering wijzigde in 2022 historische terminologie naar 'koloniale oorlog' op advies van wetenschappelijk onderzoek (KITLV/NIOD).",
          niveaus: { basis: "Politionele acties — A.", simpeler: "Officiële NL-naam = politionele acties = A.", nogSimpeler: "Politioneel = A." },
        },
      },
      {
        q: "Wanneer erkende Nederland **officieel de soevereiniteit** van Indonesië?",
        options: ["27 december 1949","17 augustus 1945","15 augustus 2005","20 mei 1908"],
        answer: 0,
        wrongHints: [null, "Onafhankelijkheidsverklaring zelf — NL erkende nog niet.", "Bijna — 60 jaar later sprak NL het uit als symbolische erkenning.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Soevereiniteitsoverdracht Amsterdam", tekst: "**27 december 1949**: in **Paleis op de Dam, Amsterdam**, tekent **koningin Juliana** de overdracht. Sindsdien is Indonesië in NL-ogen officieel onafhankelijk. Indonesië zelf: officiele datum blijft 17-8-1945. **2005**: minister Ben Bot erkent symbolisch 17 augustus 1945 als juiste datum." }],
          theorie: "Spanning: NL viert 27-12-1949, Indonesië 17-8-1945. Verschil ~4 jaar van oorlog daartussen.",
          niveaus: { basis: "27 december 1949 — A.", simpeler: "NL erkent soevereiniteit = 27-12-1949 = A.", nogSimpeler: "27-12-1949 = A." },
        },
      },
      {
        q: "Welk land legde **internationale druk** op NL om te stoppen?",
        options: ["Verenigde Staten","Engeland","Frankrijk","Belgie"],
        answer: 0,
        wrongHints: [null, "Brits sympathiseerde gedeeltelijk, geen hoofd-druk.", "Niet — Frans-Indo-China zelf koloniale oorlog.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "VS + VN = breekijzer", tekst: "**Verenigde Staten** dreigde **Marshall-hulp** (Europese wederopbouw na WO2) in te trekken als NL doorging. Voor NL was Marshall-geld essentieel voor wederopbouw. Plus: VN-Veiligheidsraad keurde NL-acties af (resolutie 1947). NL moest plooien." }],
          woorden: [{ woord: "Marshall-hulp", uitleg: "Amerikaans steunprogramma voor wederopbouw Europa na WO2 (1948-1952)." }],
          theorie: "Cito-context: VS in 1948 al Koude Oorlog-modus. Wilde geen instabiele kolonies waar communisme kon groeien — duwde dekolonisatie door.",
          niveaus: { basis: "VS — A.", simpeler: "Amerika dreigde Marshall-hulp = A.", nogSimpeler: "VS = A." },
        },
      },
      {
        q: "Welke koning bood **excuses** aan voor het Nederlandse koloniale geweld in 2020?",
        options: ["Willem-Alexander","Beatrix","Juliana","Wilhelmina"],
        answer: 0,
        wrongHints: [null, "Niet — Beatrix bezocht Indonesië 1995, geen excuses.", "Juliana tekende soevereiniteitsoverdracht, geen excuses.", "Niet — Wilhelmina overleed 1962, lang vóór 2020."],
        uitlegPad: {
          stappen: [{ titel: "Excuses 2020", tekst: "**10 maart 2020**: koning Willem-Alexander biedt tijdens staatsbezoek Indonesië excuses aan voor 'buitensporig geweld' van NL-zijde in 1945-1949. Eerste expliciete koninklijke excuses. **2022**: ook premier Rutte excuses voor slavernijverleden in Indonesië/Suriname." }],
          theorie: "Cito-actueel: 2020-excuses + 2022-slavernij-excuses zijn kantelpunten in NL-koloniale herinnering.",
          niveaus: { basis: "Willem-Alexander — A.", simpeler: "2020-excuses = Willem-Alexander = A.", nogSimpeler: "Willem-A = A." },
        },
      },
    ],
  },

  // ─── E. Eind-opdracht ─────────────────────────────────────
  {
    title: "Examen-eindopdracht — NL-Indonesië",
    explanation:
      "Mix van vragen door alle perioden 1602-2020. VMBO-eindexamen-stijl.\n\nLet bij het beantwoorden op tijdsperiode + termen.\n\nVeel succes!",
    checks: [
      {
        q: "Wat is de **juiste tijdsvolgorde**?",
        options: ["VOC → Cultuurstelsel → Ethische politiek → Onafhankelijkheid","Onafhankelijkheid → VOC → Ethische politiek → Cultuurstelsel","Ethische politiek → VOC → Cultuurstelsel → Onafhankelijkheid","VOC → Onafhankelijkheid → Ethische politiek → Cultuurstelsel"],
        answer: 0,
        wrongHints: [null, "Niet — VOC is veel ouder dan onafhankelijkheid (~350 jaar verschil).", "Niet — VOC eerst (1602), dan cultuurstelsel.", "Niet — onafhankelijkheid is laatste in lijn."],
        uitlegPad: {
          stappen: [{ titel: "Volgorde 1602-1949", tekst: "1) VOC **1602-1799** (handelscompagnie)\n2) Cultuurstelsel **1830-1870** (dwangcultuur)\n3) Ethische politiek **1901-1942** (welvaarts-koloniale ideologie)\n4) Onafhankelijkheid **1945** (Soekarno-proclamatie)" }],
          niveaus: { basis: "1) VOC 2) Cultuurstelsel 3) Ethisch 4) Onafhankelijkheid — A.", simpeler: "Tijdsvolgorde = A.", nogSimpeler: "A = correct." },
        },
      },
      {
        q: "Welke koningin sprak van een **'zedelijke roeping'** in 1901?",
        options: ["Wilhelmina","Juliana","Beatrix","Emma"],
        answer: 0,
        wrongHints: [null, "1948-1980 — te laat.", "1980-2013 — veel te laat.", "Regentes 1890-1898, niet 1901."],
        uitlegPad: {
          stappen: [{ titel: "Wilhelmina = 1901-troonrede", tekst: "Koningin **Wilhelmina** (1880-1962, regering 1890-1948) sprak in troonrede 1901 over 'zedelijke roeping' = start ethische politiek." }],
          niveaus: { basis: "Wilhelmina — A.", simpeler: "1901 = Wilhelmina = A.", nogSimpeler: "Wilhelmina = A." },
        },
      },
      {
        q: "Wie was de eerste **president** van Indonesië (1945-1967)?",
        options: ["Soekarno","Hatta","Soeharto","Soeharno"],
        answer: 0,
        wrongHints: [null, "Hatta was vicepresident.", "Soeharto = tweede president (1967-1998), na Soekarno-coupe.", "Bestaat niet — verwarring met Soekarno + Soeharto."],
        uitlegPad: {
          stappen: [{ titel: "Soekarno = 1e, Soeharto = 2e", tekst: "**Soekarno** = eerste president 1945-1967. **Soeharto** = tweede president 1967-1998, na coup. Lijken op elkaar in naam maar zijn verschillend." }],
          niveaus: { basis: "Soekarno — A.", simpeler: "Eerste president = Soekarno = A.", nogSimpeler: "Soekarno = A." },
        },
      },
      {
        q: "*Max Havelaar* (1860) was een **aanklacht** tegen welke koloniale praktijk?",
        options: ["Cultuurstelsel","Politionele acties","Japanse romusha","Slavenhandel"],
        answer: 0,
        wrongHints: [null, "Politionele acties = 1947-49, ~90 jaar later.", "Japan = 1942-45, ~80 jaar later.", "Slavenhandel = West-Indië, niet Java-context."],
        uitlegPad: {
          stappen: [{ titel: "Multatuli vs Cultuurstelsel", tekst: "*Max Havelaar* (1860) door Multatuli was geschreven om de **misbruiken van het Cultuurstelsel** (1830-1870) aan de kaak te stellen. Hielp om Cultuurstelsel langzaam af te schaffen ('Agrarische Wet' 1870)." }],
          niveaus: { basis: "Cultuurstelsel — A.", simpeler: "Max Havelaar 1860 = tegen Cultuurstelsel = A.", nogSimpeler: "Cultuurstelsel = A." },
        },
      },
      {
        q: "Welke beweging begon de **moderne Indonesische nationalisme** in 1908?",
        options: ["Boedi Oetomo","PNI","KNIL","VOC"],
        answer: 0,
        wrongHints: [null, "PNI = 1927 (Soekarno).", "KNIL = NL-leger, juist onderdrukker.", "VOC was toen al 109 jaar dood."],
        uitlegPad: {
          stappen: [{ titel: "1908 = start nationalisme", tekst: "**Boedi Oetomo** opgericht 20 mei 1908 — eerste vredevolle nationalistische beweging. Vanuit medische studenten. Inspireerde latere bewegingen tot Soekarno's PNI in 1927." }],
          niveaus: { basis: "Boedi Oetomo — A.", simpeler: "1908 nationalisme = Boedi Oetomo = A.", nogSimpeler: "Boedi Oetomo = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kolonieIndonesie = {
  id: "kolonie-indonesie",
  title: "NL-kolonie Indonesië 1602-1949",
  emoji: "🇮🇩",
  level: "vmbo-gt-4",
  subject: "geschiedenis",
  referentieNiveau: "vmbo-gt-CSE",
  sloThema: "Geschiedenis VMBO — koloniale relatie NL-Indonesië 1602-1949",
  prerequisites: [
    { id: "tijdvakken-geschiedenis", title: "Tijdvakken", niveau: "po-1F" },
    { id: "wereldoorlog2-geschiedenis", title: "Tweede Wereldoorlog", niveau: "po-1F" },
    { id: "ontdekkingsreizen-po", title: "Ontdekkingsreizen + VOC", niveau: "po-1F" },
  ],
  intro:
    "Hoe kreeg Nederland Indonesië als kolonie en hoe verloor het de kolonie weer? Van VOC (1602) tot soevereiniteitsoverdracht (1949) + excuses Willem-Alexander (2020). VMBO-GT eindexamen-stof. 5 stappen × ~5 vragen. ~15 min.",
  triggerKeywords: [
    "Indonesië", "Nederlands-Indië", "kolonie", "VOC",
    "Cultuurstelsel", "Van den Bosch", "Multatuli", "Max Havelaar",
    "ethische politiek", "Wilhelmina", "Boedi Oetomo",
    "Japanse bezetting", "romusha", "Bersiap",
    "Soekarno", "Hatta", "17 augustus 1945",
    "politionele acties", "koloniale oorlog",
    "soevereiniteitsoverdracht", "27 december 1949",
    "excuses", "Willem-Alexander 2020",
    "Batavia", "Jakarta", "specerijen",
  ],
  chapters,
  steps,
};

export default kolonieIndonesie;
