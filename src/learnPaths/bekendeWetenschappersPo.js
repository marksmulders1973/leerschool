// Leerpad: Bekende wetenschappers - groep 6-8 wereldoriëntatie/geschiedenis.
// Cito-vraag: wie deed welke uitvinding/ontdekking. 1F.
// 5 stappen.

const stepEmojis = ["🔭", "🍎", "🧬", "⚛️", "🏆"];

const chapters = [
  { letter: "A", title: "Astronomie + zwaartekracht", emoji: "🔭", from: 0, to: 0 },
  { letter: "B", title: "Newton + natuurkunde", emoji: "🍎", from: 1, to: 1 },
  { letter: "C", title: "Darwin + biologie", emoji: "🧬", from: 2, to: 2 },
  { letter: "D", title: "Einstein + Curie", emoji: "⚛️", from: 3, to: 3 },
  { letter: "E", title: "Eind-toets", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wetenschap begint — Galileo + Copernicus",
    explanation:
      "Vóór 1500 dachten mensen dat **aarde middelpunt** van heelal was *(geocentrisch)*. Kerk + Aristoteles zeiden zo.\n\n**Nicolaas Copernicus** *(1473-1543, Pools astronoom)*:\n• Stelde dat **zon middelpunt** is *(heliocentrisch)*.\n• Aarde + planeten draaien om de zon.\n• Boek: 'De revolutionibus orbium coelestium' *(1543, op sterfbed)*.\n• Niet bewezen — alleen idee.\n\n**Galileo Galilei** *(1564-1642, Italiaans)*:\n• Maakte zelf **telescoop** *(1609)*.\n• Zag manen rond **Jupiter** → bewijs dat niet alles om aarde draait.\n• Zag **fasen van Venus** → bewijs heliocentrisch model.\n• Schreef boeken die geocentrisch model belachelijk maakten.\n• **Inquisitie** *(katholieke rechtbank)* veroordeelde hem in **1633**.\n• Werd gedwongen zijn idee te herroepen.\n• Verbleef rest van leven in huisarrest.\n• Beroemd citaat *('eppur si muove' — 'en toch beweegt zij'),* misschien gezegd na veroordeling.\n• Kerk gaf in **1992** officieel toe dat ze ongelijk hadden.\n\n**Andere astronomie-pioniers**:\n\n**Johannes Kepler** *(1571-1630, Duits)*:\n• Wiskundige.\n• Ontdekte dat **planeten in ellipsen** *(ovaal)* bewegen, niet cirkels.\n• Drie wetten van Kepler.\n\n**Tycho Brahe** *(1546-1601, Deens)*:\n• Beroemd astronoom voor telescoop.\n• Verloor neus in duel, droeg gouden neus.\n• Werkte samen met Kepler.\n\n**William Herschel** *(1738-1822, Brits)*:\n• Ontdekte **Uranus** *(1781)* — eerste nieuwe planeet sinds oudheid.\n• Bouwde grootste telescoop van zijn tijd.\n\n**Wat is heliocentrisch model?**\n• **Helio** = zon, **centrisch** = middelpunt.\n• Zon staat in middelpunt zonnestelsel.\n• 8 planeten (Mercurius/Venus/Aarde/Mars/Jupiter/Saturnus/Uranus/Neptunus) draaien er omheen.\n• Pluto sinds 2006 'dwergplaneet' *(officieel niet meer planeet)*.\n\n**Cito-feitje**:\nDe **astronaut Neil Armstrong** zette in 1969 voet op de maan. Zijn beroemde woorden: *'Dit is een kleine stap voor de mens, een grote sprong voor de mensheid.'*",
    checks: [
      {
        q: "Wie stelde dat **zon middelpunt** is?",
        options: ["Copernicus (1543)", "Aristoteles", "Galileo eerst", "Newton"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geocentrisch.", "Galileo bewees het.", "Later."],
      },
      {
        q: "Wat ontdekte **Galileo** met telescoop?",
        options: ["Manen rond Jupiter + fasen Venus", "Niets", "Sterren in melkweg alleen", "Geen telescoop"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel.", "Wel maar specifiek genoemd.", "Wel."],
      },
      {
        q: "Wie veroordeelde **Galileo**?",
        options: ["Inquisitie (katholieke rechtbank)", "Niemand", "Volk", "Wetenschappers"],
        answer: 0,
        wrongHints: [null, "Klopt — 1633.", "Wel.", "Niet officieel.", "Niet."],
      },
      {
        q: "Wat is een **heliocentrisch model**?",
        options: ["Zon in middelpunt", "Aarde in middelpunt", "Maan in middelpunt", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geocentrisch.", "Niet.", "Wel."],
      },
    ],
  },
  {
    title: "Isaac Newton + natuurkunde",
    explanation:
      "**Isaac Newton** *(1643-1727, Engels)* = misschien grootste wetenschapper aller tijden.\n\n**Verhaal van de appel**:\nVolgens legende viel een **appel** uit een boom en Newton vroeg: 'Waarom valt die appel naar beneden ipv naar boven?' Zo bedacht hij **zwaartekracht**.\n*(Mythologie — appel-verhaal komt uit één bron, mogelijk verzonnen)*.\n\n**Zwaartekracht** *(gravity)*:\n• **Elk voorwerp met massa trekt elk ander voorwerp aan**.\n• Aarde trekt jou + appel + maan aan.\n• Maan blijft door aarde-trekkracht in baan rond aarde.\n• Zon trekt planeten aan → blijven in baan.\n\n**Drie wetten van Newton** *(beweging)*:\n\n**1. Traagheid**:\nVoorwerp blijft in rust **of** in beweging tenzij kracht erop werkt.\nVoorbeeld: bal blijft liggen tot je hem trapt.\n\n**2. F = m × a**:\nKracht = massa × versnelling.\nMeer kracht → meer versnelling. Meer massa → minder versnelling.\nVoorbeeld: vrachtwagen versnelt langzamer dan auto met zelfde motor.\n\n**3. Actie = reactie**:\nIedere kracht heeft tegen-kracht.\nVoorbeeld: je springt → duwt aarde af → aarde duwt jou omhoog.\nRaketten: gassen naar achteren → raket naar voren.\n\n**Andere bijdragen Newton**:\n• **Optica** — ontdekte dat wit licht uit kleuren bestaat *(prisma + regenboog)*.\n• **Wiskunde** — bedacht **integraal- en differentiaalrekening** *(samen met Leibniz)*.\n• Schreef '**Principia Mathematica**' *(1687)* — heel beroemd boek.\n\n**Belangrijke citaten**:\n*'Als ik verder heb gezien, dan was het door op de schouders van reuzen te staan.'*\n\n**Geboorte + dood**:\n• Geboren op kerstdag 1642 *(Engelse kalender; volgens moderne kalender = 4 januari 1643)*.\n• Stierf 1727, begraven Westminster Abbey.\n\n**Cito-feitje**:\nDe **eenheid van kracht** heet **Newton (N)** ter ere van hem. 1 N = kracht om 1 kg massa te versnellen met 1 m/s². Een appel weegt ongeveer **1 N**.",
    checks: [
      {
        q: "Wie ontdekte **zwaartekracht**?",
        options: ["Newton", "Galileo", "Einstein", "Darwin"],
        answer: 0,
        wrongHints: [null, "Klopt — appel-verhaal.", "Astronomie.", "Relativiteit.", "Evolutie."],
      },
      {
        q: "Wat is **Newton's eerste wet**?",
        options: ["Traagheid: voorwerp blijft tot kracht werkt", "F=ma", "Actie=reactie", "Energiebehoud"],
        answer: 0,
        wrongHints: [null, "Klopt.", "2e.", "3e.", "Niet."],
      },
      {
        q: "Wat is een **Newton (N)**?",
        options: ["Eenheid van kracht", "Eenheid van afstand", "Eenheid van tijd", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Meter.", "Seconde.", "Wel."],
      },
      {
        q: "Wat ontdekte Newton **over licht**?",
        options: ["Wit licht bestaat uit kleuren (prisma)", "Niets", "Snelheid", "Bestaat niet"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel.", "Einstein.", "Wel."],
      },
    ],
  },
  {
    title: "Charles Darwin + biologie",
    explanation:
      "**Charles Darwin** *(1809-1882, Brits)* = vader van moderne biologie.\n\n**Reis met de Beagle** *(1831-1836)*:\n• 22 jaar oud, dokter-in-opleiding.\n• Mee als natuuronderzoeker op marineschip **HMS Beagle**.\n• 5 jaar wereldreis.\n• Bestudeerde dieren + planten op vele plekken.\n• Speciaal op **Galápagos-eilanden** *(bij Ecuador)*: vinkjes met **verschillende snavels** per eiland.\n\n**Theorie van evolutie + natuurlijke selectie**:\n\n**Idee**:\n• Levende wezens **veranderen** over tijd.\n• Wezens met betere eigenschappen voor hun omgeving **overleven** + planten zich voort.\n• Wezens met slechte eigenschappen **sterven uit**.\n• Dit heet **natuurlijke selectie** of **survival of the fittest** *('overleving van de geschiktste')*.\n• Over miljoenen jaren → nieuwe soorten ontstaan.\n\n**Voorbeeld op Galápagos**:\n• Vinkjes met dikke snavel = kunnen harde noten kraken.\n• Vinkjes met dunne snavel = kunnen insecten uit gaten halen.\n• Op verschillende eilanden, verschillende snavels = aangepast aan voedsel.\n\n**Schreef boek**:\n*'On the Origin of Species'* *(Over het ontstaan van soorten)* in **1859**.\nEnorm controversieel — kerk vond dat tegen Bijbel inging.\n\n**Mens ook geëvolueerd**:\nLater boek *(1871)*: mens stamt af van **gemeenschappelijke voorouder** met apen.\nNIET 'mens is een aap' — mens + aap delen voorouder ~7 miljoen jaar geleden.\n\n**Eens controversieel, nu wetenschappelijk consensus**.\n\n**Gregor Mendel** *(1822-1884, Tsjechisch monnik)*:\n• Tijdgenoot van Darwin.\n• Experimenteerde met **erwten** in kloostertuin.\n• Ontdekte hoe **erfelijkheid** werkt: kenmerken doorgegeven van ouders.\n• Vader van **genetica**.\n• Zijn werk werd 35 jaar genegeerd, nu beroemd.\n\n**Andere biologen**:\n• **Louis Pasteur** *(1822-1895, Frans)*: bacteriën + vaccins + pasteurisatie *(melk verhitten)*.\n• **Alexander Fleming** *(1881-1955, Schots)*: ontdekte **penicilline** *(eerste antibioticum, 1928)*. Per ongeluk!\n• **Marie Curie** *(zie volgende stap)*.\n\n**Cito-feitje**:\nDarwin schreef niet de uitdrukking 'survival of the fittest' zelf — die kwam van filosoof **Herbert Spencer** *(1864)*. Darwin gebruikte 'natural selection' zelf.",
    checks: [
      {
        q: "Wat bedacht **Darwin**?",
        options: ["Evolutietheorie + natuurlijke selectie", "Zwaartekracht", "Penicilline", "Relativiteit"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Newton.", "Fleming.", "Einstein."],
      },
      {
        q: "Welk schip nam Darwin?",
        options: ["HMS Beagle", "Titanic", "Eindracht", "Sail Amsterdam"],
        answer: 0,
        wrongHints: [null, "Klopt — 1831-1836.", "Veel later.", "Niet.", "Niet expeditie."],
      },
      {
        q: "Wie is **vader van genetica**?",
        options: ["Gregor Mendel (erwten)", "Darwin", "Newton", "Curie"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Evolutie.", "Niet.", "Radioactiviteit."],
      },
      {
        q: "Wie ontdekte **penicilline**?",
        options: ["Alexander Fleming (1928)", "Pasteur", "Darwin", "Curie"],
        answer: 0,
        wrongHints: [null, "Klopt — per ongeluk.", "Vaccins.", "Niet.", "Radio."],
      },
    ],
  },
  {
    title: "Einstein + Curie + 20e eeuw",
    explanation:
      "**Albert Einstein** *(1879-1955, Duits → VS)* = beroemdste fysicus van 20e eeuw.\n\n**Speciale relativiteitstheorie** *(1905)*:\n• Tijd + ruimte zijn **niet absoluut** — afhankelijk van snelheid.\n• Bij **bijna lichtsnelheid** vertraagt tijd.\n• Lengte krimpt.\n• Massa neemt toe.\n• Klinkt vreemd, maar **bevestigd** door experimenten.\n\n**E = mc²** *(beroemdste formule)*:\n• Energie = massa × lichtsnelheid².\n• Kleine massa → enorme energie.\n• Basis voor atoombom + kernenergie.\n\n**Algemene relativiteitstheorie** *(1915)*:\n• **Zwaartekracht is kromming van ruimte-tijd**.\n• Aarde maakt 'kuiltje' in ruimte → maan rolt erin → blijft in baan.\n• Voorspelde dat licht buigt rond zware voorwerpen.\n• **Bevestigd** door zonsverduistering 1919 → werd hij wereldberoemd.\n\n**Nobelprijs 1921** *(natuurkunde)* — niet voor relativiteit maar voor **foto-elektrisch effect**.\n\n**Levensverhaal**:\n• Werkte als patentbureau-ambtenaar in Bern *(Zwitserland)*.\n• Vluchtte voor nazi's *(was joods)* naar VS *(1933)*.\n• Werd professor Princeton.\n• Adviseerde Roosevelt over atoomwapen-mogelijkheid *(1939)*.\n• Verzet later tegen atoombom-gebruik.\n• Stierf 1955 — hersenen werden bewaard voor onderzoek.\n\n**Citaat**: *'De fantasie is belangrijker dan kennis.'*\n\n**Marie Curie** *(1867-1934, Pools → Frans)*:\n• Eerste vrouw met **Nobelprijs**.\n• **2x Nobelprijs**: natuurkunde *(1903)* + chemie *(1911)*.\n• Eerste persoon ooit met 2 verschillende Nobelprijzen.\n• Ontdekte **radium** + **polonium** *(elementen)*.\n• Werkte met haar man Pierre Curie.\n• Studie naar **radioactiviteit** — woord bedacht door haar.\n• Stierf aan **stralingsziekte** — wist toen nog niet hoe gevaarlijk straling was.\n\n**Andere 20e eeuw**:\n\n**Niels Bohr** *(Deens)*:\n• Atoomstructuur — elektronen rond kern.\n• Nobelprijs 1922.\n\n**Werner Heisenberg** *(Duits)*:\n• **Onzekerheidsprincipe** — je kunt niet tegelijk plaats + snelheid kennen van deeltje.\n• Kwantumfysica.\n\n**Alan Turing** *(Brits, 1912-1954)*:\n• Vader van **computerwetenschap**.\n• Brak **Enigma-code** van nazi's in WO2 — versnelde einde oorlog.\n• Sufferde aan homofobie *(in 1952 veroordeeld voor zijn homosexualiteit)*.\n• Werd in 2013 **postuum gerehabiliteerd** door koningin Elizabeth II.\n\n**Cito-feitje**:\n**Watson + Crick** ontdekten in **1953** de **DNA-dubbele-helix-structuur**. Maar hun werk steunde sterk op Rosalind Franklin's röntgenfoto's. Zij kreeg geen Nobelprijs *(stierf jong aan kanker, mogelijk door röntgenstraling)*.",
    checks: [
      {
        q: "Wie bedacht **E = mc²**?",
        options: ["Einstein", "Newton", "Darwin", "Curie"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wat ontdekte **Marie Curie**?",
        options: ["Radium + radioactiviteit", "Zwaartekracht", "Evolutie", "Computer"],
        answer: 0,
        wrongHints: [null, "Klopt — 2x Nobelprijs.", "Newton.", "Darwin.", "Niet."],
      },
      {
        q: "Wie brak **Enigma-code**?",
        options: ["Alan Turing (WO2)", "Einstein", "Bohr", "Curie"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wie ontdekten **DNA-structuur**?",
        options: ["Watson + Crick (1953)", "Darwin", "Mendel", "Curie"],
        answer: 0,
        wrongHints: [null, "Klopt — met Franklin.", "Evolutie.", "Erfelijkheid algemeen.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — wetenschap mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wie maakte **eerste telescoop**?", options: ["Galileo (1609)", "Newton", "Einstein", "Edison"], answer: 0, wrongHints: [null, "Klopt.", "Later.", "Veel later.", "Gloeilamp."] },
      { q: "**Heliocentrisch** model = ?", options: ["Zon in midden", "Aarde in midden", "Maan in midden", "Niets"], answer: 0, wrongHints: [null, "Klopt.", "Geocentrisch.", "Niet.", "Wel."] },
      { q: "Hoeveel **wetten van Newton**?", options: ["3", "1", "5", "10"], answer: 0, wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Te veel."] },
      { q: "Wie schreef '**Over het ontstaan van soorten**'?", options: ["Darwin (1859)", "Mendel", "Newton", "Pasteur"], answer: 0, wrongHints: [null, "Klopt.", "Erfelijkheid.", "Niet.", "Bacteriën."] },
      { q: "Wie ontdekte **penicilline**?", options: ["Fleming (1928)", "Darwin", "Curie", "Einstein"], answer: 0, wrongHints: [null, "Klopt — per ongeluk.", "Niet.", "Niet.", "Niet."] },
      { q: "Wie kreeg **2 Nobelprijzen**?", options: ["Marie Curie", "Einstein", "Newton", "Darwin"], answer: 0, wrongHints: [null, "Klopt — natuurkunde + chemie.", "Slechts 1.", "Geen Nobel (vóór bestaat).", "Geen."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const bekendeWetenschappersPo = {
  id: "bekende-wetenschappers-po",
  title: "Bekende wetenschappers (Cito groep 6-8)",
  emoji: "🔭",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / geschiedenis van wetenschap",
  prerequisites: [
    { id: "industriele-revolutie-po", title: "Industriële Revolutie", niveau: "1F" },
  ],
  intro:
    "Bekende wetenschappers voor Cito groep 6-8 — Copernicus/Galileo (zon-middelpunt) + Newton (zwaartekracht, 3 wetten) + Darwin (evolutie) + Mendel/Pasteur/Fleming + Einstein (E=mc²) + Curie (radium) + Turing (computer). Cito-relevant. ~15 min.",
  triggerKeywords: [
    "wetenschapper", "wetenschap",
    "Galileo", "Copernicus", "telescoop",
    "Newton", "zwaartekracht", "appel Newton",
    "Darwin", "evolutie", "natuurlijke selectie", "Galapagos",
    "Mendel", "genetica", "erwten",
    "Pasteur", "Fleming", "penicilline",
    "Einstein", "relativiteit", "E=mc2",
    "Marie Curie", "radium", "Nobelprijs",
    "Turing", "Enigma",
    "Watson Crick DNA",
  ],
  chapters,
  steps,
};

export default bekendeWetenschappersPo;
