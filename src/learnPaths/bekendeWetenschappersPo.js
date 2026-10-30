// Leerpad: Bekende wetenschappers - groep 6-8 wereldoriëntatie/geschiedenis.
// toetsvraag: wie deed welke uitvinding/ontdekking. 1F.
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
      "Vóór 1500 dachten mensen dat **aarde middelpunt** van heelal was *(geocentrisch)*. Kerk + Aristoteles zeiden zo.\n\n**Nicolaas Copernicus** *(1473-1543, Pools astronoom)*:\n• Stelde dat **zon middelpunt** is *(heliocentrisch)*.\n• Aarde + planeten draaien om de zon.\n• Boek: 'De revolutionibus orbium coelestium' *(1543, op sterfbed)*.\n• Niet bewezen — alleen idee.\n\n**Galileo Galilei** *(1564-1642, Italiaans)*:\n• Maakte zelf **telescoop** *(1609)*.\n• Zag manen rond **Jupiter** → bewijs dat niet alles om aarde draait.\n• Zag **fasen van Venus** → bewijs heliocentrisch model.\n• Schreef boeken die geocentrisch model belachelijk maakten.\n• **Inquisitie** *(katholieke rechtbank)* veroordeelde hem in **1633**.\n• Werd gedwongen zijn idee te herroepen.\n• Bracht de rest van zijn leven door onder huisarrest.\n• Beroemd citaat *('eppur si muove' — 'en toch beweegt zij'),* misschien gezegd na veroordeling.\n• Kerk gaf in **1992** officieel toe dat ze ongelijk hadden.\n\n**Andere astronomie-pioniers**:\n\n**Johannes Kepler** *(1571-1630, Duits)*:\n• Wiskundige.\n• Ontdekte dat **planeten in ellipsen** *(ovaal)* bewegen, niet cirkels.\n• Drie wetten van Kepler.\n\n**Tycho Brahe** *(1546-1601, Deens)*:\n• Beroemd astronoom van vóór de telescoop.\n• Verloor neus in duel, droeg gouden neus.\n• Werkte samen met Kepler.\n\n**William Herschel** *(1738-1822, Brits)*:\n• Ontdekte **Uranus** *(1781)* — eerste nieuwe planeet sinds oudheid.\n• Bouwde grootste telescoop van zijn tijd.\n\n**Wat is heliocentrisch model?**\n• **Helio** = zon, **centrisch** = middelpunt.\n• Zon staat in middelpunt zonnestelsel.\n• 8 planeten (Mercurius/Venus/Aarde/Mars/Jupiter/Saturnus/Uranus/Neptunus) draaien er omheen.\n• Pluto sinds 2006 'dwergplaneet' *(officieel niet meer planeet)*.\n\n**Toets-feitje**:\nDe **astronaut Neil Armstrong** zette in 1969 voet op de maan. Zijn beroemde woorden: *'Dit is een kleine stap voor de mens, een grote sprong voor de mensheid.'*",
    checks: [
      {
        q: "Wie stelde in 1543 voor dat de **zon in het middelpunt** staat?",
        options: ["Copernicus", "Aristoteles", "Darwin", "Newton"],
        answer: 0,
        wrongHints: [null, "Aristoteles dacht juist dat de aarde in het midden stond.", "Darwin onderzocht dieren, geen planeten.", "Newton leefde pas later."],
        uitlegPad: {
          stappen: [
            { titel: "Wereldbeeld vóór Copernicus", tekst: "Eeuwenlang dacht iedereen dat de **aarde** in het middelpunt stond, en zon/sterren/planeten draaiden eromheen. Dat heet **geocentrisch** (geo = aarde)." },
            { titel: "Copernicus draaide het om (1543)", tekst: "Pool **Nicolaus Copernicus** stelde voor: de **zon** staat in het midden, en de aarde + planeten draaien daar omheen. Dat heet **heliocentrisch** (helio = zon)." },
            { titel: "Galileo bewees het (later)", tekst: "Galileo zag met telescoop (rond 1610) manen bij Jupiter en fasen van Venus. Dat bewees Copernicus' idee. Maar de kerk veroordeelde hem in 1633." },
          ],
          woorden: [
            { woord: "geocentrisch", uitleg: "Aarde in middelpunt (oude model)." },
            { woord: "heliocentrisch", uitleg: "Zon in middelpunt (Copernicus' model)." },
            { woord: "Copernicus", uitleg: "Poolse astronoom, stelde zon-in-midden voor (1543)." },
          ],
          theorie: "Toets-tijdlijn astronomie: Aristoteles/Ptolemaeus = aarde-centrisch. Copernicus 1543 = zon-centrisch (idee). Galileo ~1610 = bewijs. Newton 1687 = zwaartekracht-verklaring. Steeds beter inzicht.",
          voorbeelden: [
            { type: "stap", tekst: "Heliocentrisch model: zon midden, daaromheen 8 planeten (Mercurius, Venus, Aarde, Mars, Jupiter, Saturnus, Uranus, Neptunus)." },
            { type: "stap", tekst: "Truc: HELIO = zon (zoals 'helium' = element ontdekt in zon)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Copernicus = naam van de man. Heliocentrisch = naam van het model. Hij stelde het VOOR, Galileo BEWEES het later." }],
          niveaus: {
            basis: "Copernicus (1543) zei: zon staat in middelpunt.",
            simpeler: "Vroeger: aarde in midden. Copernicus zei: nee, zon!",
            nogSimpeler: "Copernicus = zon in midden.",
          },
        },
      },
      {
        q: "Wat ontdekte **Galileo** met telescoop?",
        options: ["Manen rond Jupiter + fasen Venus", "Ringen rond Uranus + Neptunus", "De dwergplaneet Pluto", "Zwarte gaten in de Melkweg"],
        answer: 0,
        wrongHints: [null, "Uranus en Neptunus waren in zijn tijd nog niet eens ontdekt.", "Pluto werd pas in 1930 ontdekt.", "Zwarte gaten kon je met zijn telescoop niet zien."],
      },
      {
        q: "Wie veroordeelde **Galileo**?",
        options: ["De Inquisitie", "De koning van Spanje", "Een Nederlandse rechtbank", "De universiteit van Pisa"],
        answer: 0,
        wrongHints: [null, "Galileo woonde in Italië. Had de koning van Spanje daar iets te zeggen?", "Galileo woonde in Italië, niet in Nederland. Welke rechtbank sprak in 1633 het vonnis uit?", "Een universiteit spreekt geen vonnis uit. Welke machtige rechtbank van de kerk deed dat in 1633?"],
      },
      {
        q: "Wat is een **heliocentrisch model**?",
        options: ["Zon in middelpunt", "Aarde in middelpunt", "Maan in middelpunt", "Melkweg in middelpunt"],
        answer: 0,
        wrongHints: [null, "Aarde in het midden heeft een andere naam: geo = aarde. Wat betekent 'helio'?", "'Helio' is Grieks. Betekent het maan? Denk aan het woord helium.", "'Helio' is Grieks. Betekent het melkweg? Denk aan het woord helium."],
      },
    ],
  },
  {
    title: "Isaac Newton + natuurkunde",
    explanation:
      "**Isaac Newton** *(1643-1727, Engels)* = misschien grootste wetenschapper aller tijden.\n\n**Verhaal van de appel**:\nVolgens legende viel een **appel** uit een boom en Newton vroeg: 'Waarom valt die appel naar beneden ipv naar boven?' Zo bedacht hij **zwaartekracht**.\n*(Legende — appel-verhaal komt uit één bron, mogelijk verzonnen)*.\n\n**Zwaartekracht** *(gravity)*:\n• **Elk voorwerp met massa trekt elk ander voorwerp aan**.\n• Aarde trekt jou + appel + maan aan.\n• Maan blijft door aarde-trekkracht in baan rond aarde.\n• Zon trekt planeten aan → blijven in baan.\n\n**Drie wetten van Newton** *(beweging)*:\n\n**1. Traagheid**:\nVoorwerp blijft in rust **of** in beweging tenzij kracht erop werkt.\nVoorbeeld: bal blijft liggen tot je hem trapt.\n\n**2. F = m × a**:\nKracht = massa × versnelling.\nMeer kracht → meer versnelling. Meer massa → minder versnelling.\nVoorbeeld: vrachtwagen versnelt langzamer dan auto met zelfde motor.\n\n**3. Actie = reactie**:\nIedere kracht heeft tegen-kracht.\nVoorbeeld: je springt → duwt aarde af → aarde duwt jou omhoog.\nRaketten: gassen naar achteren → raket naar voren.\n\n**Andere bijdragen Newton**:\n• **Optica** — ontdekte dat wit licht uit kleuren bestaat *(prisma + regenboog)*.\n• **Wiskunde** — bedacht **integraal- en differentiaalrekening** *(samen met Leibniz)*.\n• Schreef '**Principia Mathematica**' *(1687)* — heel beroemd boek.\n\n**Belangrijke citaten**:\n*'Als ik verder heb gezien, dan was het door op de schouders van reuzen te staan.'*\n\n**Geboorte + dood**:\n• Geboren op kerstdag 1642 *(Engelse kalender; volgens moderne kalender = 4 januari 1643)*.\n• Stierf 1727, begraven Westminster Abbey.\n\n**Toets-feitje**:\nDe **eenheid van kracht** heet **Newton (N)** ter ere van hem. 1 N = kracht om 1 kg massa te versnellen met 1 m/s². Een appel weegt ongeveer **1 N**.",
    checks: [
      {
        q: "Wie ontdekte **zwaartekracht**?",
        options: ["Newton", "Galileo", "Einstein", "Darwin"],
        answer: 0,
        wrongHints: [null, "Galileo bestudeerde vallende voorwerpen, maar de wet van de zwaartekracht kwam van iemand na hem.", "Einstein kwam veel later met een nieuwe uitleg van zwaartekracht — maar wie beschreef haar als eerste?", "Darwin onderzocht dieren en planten, geen krachten."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is zwaartekracht?", tekst: "Zwaartekracht is de kracht waarmee voorwerpen met massa elkaar AANTREKKEN. De aarde trekt alles naar zich toe — daarom valt een appel naar BENEDEN, niet omhoog." },
            { titel: "Isaac Newton (1687)", tekst: "**Isaac Newton** beschreef als eerste hoe zwaartekracht werkt. Volgens legende inspireerde een vallende appel hem (mogelijk verzonnen verhaal, maar nu wereldberoemd)." },
            { titel: "Waar zit zwaartekracht in?", tekst: "Aarde trekt jou + appel + maan aan. Zon trekt planeten aan → blijven in baan. Elke massa trekt elke andere massa aan." },
          ],
          woorden: [
            { woord: "zwaartekracht", uitleg: "Aantrekkende kracht tussen voorwerpen met massa." },
            { woord: "Newton (N)", uitleg: "Eenheid van kracht, vernoemd naar Isaac Newton. 1 appel ≈ 1 N." },
          ],
          theorie: "Toets-onderscheid wetenschappers: NEWTON = zwaartekracht + beweging-wetten. EINSTEIN = relativiteit (verklaring zwaartekracht). GALILEO = telescoop-waarnemingen. DARWIN = evolutie (biologie, niet natuurkunde).",
          voorbeelden: [
            { type: "stap", tekst: "Spring omhoog → aarde-zwaartekracht trekt je terug naar grond." },
            { type: "stap", tekst: "Maan blijft in baan rond aarde dankzij aardse zwaartekracht." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Newton = appel + zwaartekracht (legende maar makkelijk te onthouden)." }],
          niveaus: {
            basis: "Isaac Newton beschreef in 1687 als eerste de wet van de zwaartekracht.",
            simpeler: "Het verhaal gaat dat Newton een appel zag vallen en zich afvroeg waarom. Zo kwam hij op de zwaartekracht.",
            nogSimpeler: "Newton.",
          },
        },
      },
      {
        q: "Wat is **Newtons eerste wet**?",
        options: ["Traagheid", "F = m × a", "Actie = reactie", "Energiebehoud"],
        answer: 0,
        wrongHints: [null, "Dat is de 2e wet.", "Dat is de 3e wet.", "Dat is geen wet van Newton."],
      },
      {
        q: "Wat is een **Newton (N)**?",
        options: ["Eenheid van kracht", "Eenheid van afstand", "Eenheid van tijd", "Eenheid van temperatuur"],
        answer: 0,
        wrongHints: [null, "Afstand meet je in meters, niet in newton.", "Tijd meet je in seconden, niet in newton.", "Temperatuur meet je in graden, niet in newton."],
      },
      {
        q: "Wat ontdekte Newton **over licht**?",
        options: ["Wit licht bestaat uit kleuren", "Hoe een gloeilamp werkt", "Hoe snel licht gaat", "Waarom het 's nachts donker is"],
        answer: 0,
        wrongHints: [null, "De gloeilamp kwam pas zo'n 150 jaar later.", "De lichtsnelheid werd door een ander gemeten: de Deen Ole Rømer (1676).", "Daar ging zijn bekendste lichtproef niet over."],
      },
    ],
  },
  {
    title: "Charles Darwin + biologie",
    explanation:
      "**Charles Darwin** *(1809-1882, Brits)* = vader van moderne biologie.\n\n**Reis met de Beagle** *(1831-1836)*:\n• 22 jaar oud, net afgestudeerd.\n• Mee als natuuronderzoeker op marineschip **HMS Beagle**.\n• 5 jaar wereldreis.\n• Bestudeerde dieren + planten op vele plekken.\n• Speciaal op **Galápagos-eilanden** *(bij Ecuador)*: vinkjes met **verschillende snavels** per eiland.\n\n**Theorie van evolutie + natuurlijke selectie**:\n\n**Idee**:\n• Levende wezens **veranderen** over tijd.\n• Wezens met betere eigenschappen voor hun omgeving **overleven** + planten zich voort.\n• Wezens met minder handige eigenschappen **overleven minder vaak** en krijgen minder jongen.\n• Dit heet **natuurlijke selectie** of **survival of the fittest** *('overleving van de geschiktste')*.\n• Over miljoenen jaren → nieuwe soorten ontstaan.\n\n**Voorbeeld op Galápagos**:\n• Vinkjes met dikke snavel = kunnen harde zaden kraken.\n• Vinkjes met dunne snavel = kunnen insecten uit gaten halen.\n• Op verschillende eilanden, verschillende snavels = aangepast aan voedsel.\n\n**Schreef boek**:\n*'On the Origin of Species'* *(Over het ontstaan van soorten)* in **1859**.\nEnorm controversieel — kerk vond dat tegen Bijbel inging.\n\n**Mens ook geëvolueerd**:\nLater boek *(1871)*: mens stamt af van **gemeenschappelijke voorouder** met apen.\nNIET 'mens is een aap' — mens + aap delen voorouder ~7 miljoen jaar geleden.\n\n**Eens controversieel, nu wetenschappelijk consensus**.\n\n**Gregor Mendel** *(1822-1884, monnik in Brno, nu Tsjechië)*:\n• Tijdgenoot van Darwin.\n• Experimenteerde met **erwten** in kloostertuin.\n• Ontdekte hoe **erfelijkheid** werkt: kenmerken doorgegeven van ouders.\n• Vader van **genetica**.\n• Zijn werk werd 35 jaar genegeerd, nu beroemd.\n\n**Andere biologen**:\n• **Louis Pasteur** *(1822-1895, Frans)*: bacteriën + vaccins + pasteurisatie *(melk verhitten)*.\n• **Alexander Fleming** *(1881-1955, Schots)*: ontdekte **penicilline** *(eerste antibioticum, 1928)*. Per ongeluk!\n• **Marie Curie** *(zie volgende stap)*.\n\n**Toets-feitje**:\nDarwin bedacht de uitdrukking 'survival of the fittest' niet zelf — die kwam van filosoof **Herbert Spencer** *(1864)*. Darwin gebruikte 'natural selection' zelf.",
    checks: [
      {
        q: "Wat bedacht **Darwin**?",
        options: ["Evolutietheorie", "Zwaartekracht", "Penicilline", "Relativiteit"],
        answer: 0,
        wrongHints: [null, "Darwin was bioloog: hij bestudeerde dieren en planten. Hoort zwaartekracht daarbij?", "Penicilline is een medicijn uit schimmel, ontdekt in 1928 — lang na Darwin.", "Relativiteit gaat over tijd en ruimte, geen biologie."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is evolutie?", tekst: "Evolutie is het idee dat levende wezens (planten + dieren + mensen) over miljoenen jaren langzaam VERANDEREN — soorten ontstaan en verdwijnen." },
            { titel: "Darwins reis", tekst: "**Charles Darwin** maakte een 5-jarige zeereis (1831-1836) met het schip HMS Beagle. Op de Galápagos-eilanden zag hij **vinkjes met verschillende snavels** per eiland." },
            { titel: "Natuurlijke selectie", tekst: "Darwins idee: wezens met EIGENSCHAPPEN die goed passen bij hun omgeving overleven en planten zich voort. Wezens met minder handige eigenschappen krijgen minder jongen. Dat heet **natuurlijke selectie**. In zijn boek '*Over het ontstaan van soorten*' (1859)." },
          ],
          woorden: [
            { woord: "evolutie", uitleg: "Soorten veranderen over miljoenen jaren." },
            { woord: "natuurlijke selectie", uitleg: "De best aangepaste wezens overleven en geven hun kenmerken door." },
          ],
          theorie: "Toets-onderscheid biologen: DARWIN = evolutie. MENDEL = genetica (erwten). PASTEUR = bacteriën + vaccin. FLEMING = penicilline. Verschillende ontdekkingen, niet verwarren.",
          voorbeelden: [
            { type: "stap", tekst: "Galápagos-vinkje met dikke snavel = beter in harde zaden kraken → overleeft → krijgt jongen met dikke snavel." },
            { type: "stap", tekst: "Giraffen met lange nek konden hoger eten → meer overleven → na vele generaties: allemaal lange nek." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Darwin = D van Diersoorten + Doorlopende verandering = evolutie." }],
          niveaus: {
            basis: "Darwin bedacht evolutietheorie + natuurlijke selectie.",
            simpeler: "Darwin: dieren veranderen langzaam over miljoenen jaren.",
            nogSimpeler: "Darwin = evolutie.",
          },
        },
      },
      {
        q: "Met welk schip maakte Darwin zijn wereldreis?",
        options: ["HMS Beagle", "Titanic", "Eendracht", "Santa Maria"],
        answer: 0,
        wrongHints: [null, "De Titanic voer pas in 1912 en zonk — Darwin leefde toen al niet meer.", "De Eendracht was een Nederlands schip van ontdekkingsreizigers, geen Brits marineschip.", "De Santa Maria was het schip van Columbus, ruim 300 jaar eerder."],
      },
      {
        q: "Wie noemen we de **vader van de genetica** (erfelijkheidsleer)?",
        options: ["Gregor Mendel", "Charles Darwin", "Isaac Newton", "Marie Curie"],
        answer: 0,
        wrongHints: [null, "Darwin bedacht de evolutietheorie; de proeven met erwten deed iemand anders.", "Newton was natuurkundige — zwaartekracht, geen erfelijkheid.", "Curie onderzocht straling, geen erfelijkheid."],
      },
      {
        q: "Wie ontdekte **penicilline**?",
        options: ["Alexander Fleming", "Louis Pasteur", "Charles Darwin", "Marie Curie"],
        answer: 0,
        wrongHints: [null, "Pasteur werkte aan bacteriën en vaccins, maar het eerste antibioticum kwam van een ander.", "Darwin was bioloog van de evolutie, geen arts.", "Curie ontdekte radium, geen medicijn tegen bacteriën."],
      },
    ],
  },
  {
    title: "Einstein + Curie + 20e eeuw",
    explanation:
      "**Albert Einstein** *(1879-1955, Duits → VS)* = beroemdste fysicus van 20e eeuw.\n\n**Speciale relativiteitstheorie** *(1905)*:\n• Tijd + ruimte zijn **niet absoluut** — afhankelijk van snelheid.\n• Bij **bijna lichtsnelheid** vertraagt tijd.\n• Lengte krimpt.\n• Massa neemt toe.\n• Klinkt vreemd, maar **bevestigd** door experimenten.\n\n**E = mc²** *(beroemdste formule)*:\n• Energie = massa × lichtsnelheid².\n• Kleine massa → enorme energie.\n• Basis voor atoombom + kernenergie.\n\n**Algemene relativiteitstheorie** *(1915)*:\n• **Zwaartekracht is kromming van ruimte-tijd**.\n• Aarde maakt 'kuiltje' in ruimte → maan rolt erin → blijft in baan.\n• Voorspelde dat licht buigt rond zware voorwerpen.\n• **Bevestigd** door zonsverduistering 1919 → werd hij wereldberoemd.\n\n**Nobelprijs 1921** *(natuurkunde)* — niet voor relativiteit maar voor **foto-elektrisch effect**.\n\n**Levensverhaal**:\n• Werkte als patentbureau-ambtenaar in Bern *(Zwitserland)*.\n• Vluchtte voor nazi's *(was joods)* naar VS *(1933)*.\n• Werd professor Princeton.\n• Adviseerde Roosevelt over atoomwapen-mogelijkheid *(1939)*.\n• Verzette zich later tegen atoombom-gebruik.\n• Stierf 1955 — hersenen werden bewaard voor onderzoek.\n\n**Citaat**: *'De fantasie is belangrijker dan kennis.'*\n\n**Marie Curie** *(1867-1934, Pools → Frans)*:\n• Eerste vrouw met **Nobelprijs**.\n• **2x Nobelprijs**: natuurkunde *(1903)* + chemie *(1911)*.\n• Eerste persoon ooit met 2 verschillende Nobelprijzen.\n• Ontdekte **radium** + **polonium** *(elementen)*.\n• Werkte met haar man Pierre Curie.\n• Studie naar **radioactiviteit** — woord bedacht door haar.\n• Stierf aan **stralingsziekte** — wist toen nog niet hoe gevaarlijk straling was.\n\n**Andere 20e eeuw**:\n\n**Niels Bohr** *(Deens)*:\n• Atoomstructuur — elektronen rond kern.\n• Nobelprijs 1922.\n\n**Werner Heisenberg** *(Duits)*:\n• **Onzekerheidsprincipe** — je kunt niet tegelijk plaats + snelheid kennen van deeltje.\n• Kwantumfysica.\n\n**Alan Turing** *(Brits, 1912-1954)*:\n• Vader van **computerwetenschap**.\n• Brak **Enigma-code** van nazi's in WO2 — versnelde einde oorlog.\n• Was slachtoffer van homofobie *(in 1952 veroordeeld voor zijn homoseksualiteit)*.\n• Werd in 2013 **postuum gerehabiliteerd** door koningin Elizabeth II.\n\n**Toets-feitje**:\n**Watson + Crick** ontdekten in **1953** de **DNA-dubbele-helix-structuur**. Maar hun werk steunde sterk op de röntgenfoto's van Rosalind Franklin. Zij kreeg geen Nobelprijs *(stierf jong aan kanker, mogelijk door röntgenstraling)*.",
    checks: [
      {
        q: "Wie bedacht **E = mc²**?",
        options: ["Einstein", "Newton", "Darwin", "Curie"],
        answer: 0,
        wrongHints: [null, "Newton is van de zwaartekracht en de appel — hij leefde 200 jaar eerder.", "Darwin was bioloog, geen natuurkundige.", "Curie onderzocht straling, geen formules over energie en massa."],
        uitlegPad: {
          stappen: [
            { titel: "De beroemdste formule ooit", tekst: "**E = mc²** is misschien wel de beroemdste natuurkunde-formule. **E** = energie. **m** = massa. **c** = lichtsnelheid. De formule zegt: een kleine hoeveelheid massa kan een ENORME hoeveelheid energie worden." },
            { titel: "Wie bedacht hem?", tekst: "**Albert Einstein** (1879-1955), Duits-Joodse natuurkundige. Hij publiceerde de formule in **1905** als onderdeel van zijn **speciale relativiteitstheorie**. Was toen patentbureau-ambtenaar in Bern (Zwitserland)." },
            { titel: "Waarom belangrijk?", tekst: "De formule is de basis voor **kernenergie + atoombom**: in atoomreactor wordt heel kleine massa omgezet in heel veel energie. Bijvoorbeeld: 1 gram massa die volledig wordt omgezet → energie van ongeveer 21.000 ton TNT." },
          ],
          woorden: [
            { woord: "Einstein", uitleg: "Duits-Joodse natuurkundige (1879-1955), bedacht relativiteit." },
            { woord: "relativiteitstheorie", uitleg: "Theorie over tijd, ruimte en zwaartekracht." },
          ],
          theorie: "Toets-onderscheid wetenschappers: EINSTEIN = relativiteit + E=mc². NEWTON = zwaartekracht + 3 wetten. DARWIN = evolutie (biologie). CURIE = radium + radioactiviteit. Elk had eigen revolutionair idee.",
          voorbeelden: [
            { type: "stap", tekst: "Einstein won de **Nobelprijs 1921** — maar niet voor relativiteit, voor het 'foto-elektrisch effect' (licht-deeltjes)." },
            { type: "stap", tekst: "Einstein vluchtte 1933 uit nazi-Duitsland naar VS. Waarschuwde in 1939 president Roosevelt voor de mogelijkheid van een atoombom." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "E = mc² + relativiteit + 1905 = Einstein. Niet verwarren met andere groten — Einstein heeft de beroemdste formule." }],
          niveaus: {
            basis: "Einstein.",
            simpeler: "Einstein bedacht de formule E=mc² in 1905. Energie = massa × lichtsnelheid².",
            nogSimpeler: "Einstein",
          },
        },
      },
      {
        q: "Wat ontdekte **Marie Curie**?",
        options: ["Radium en radioactiviteit", "Zwaartekracht en planeetbanen", "Evolutie en natuurlijke selectie", "Elektriciteit en de gloeilamp"],
        answer: 0,
        wrongHints: [null, "Dat was Newton.", "Dat was Darwin.", "Daar werkte Edison aan."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Marie Curie?", tekst: "**Marie Curie** (1867-1934) was een Pools-Franse wetenschapper. Ze was **de eerste vrouw** die ooit een **Nobelprijs** kreeg. En de eerste persoon met **2 verschillende Nobelprijzen**." },
            { titel: "Wat deed ze?", tekst: "Ze onderzocht **radioactiviteit** — zelf verzonnen woord. Ontdekte 2 nieuwe scheikundige elementen: **radium** + **polonium** (polonium genoemd naar Polen, haar geboorteland)." },
            { titel: "Tragisch einde", tekst: "In haar tijd wist niemand hoe gevaarlijk radioactieve straling was. Ze werkte er JAREN mee zonder bescherming. Stierf in 1934 aan **stralingsziekte**. Haar onderzoeksaantekeningen zijn nog steeds zo radioactief dat ze in een loden kluis liggen." },
          ],
          woorden: [
            { woord: "radioactiviteit", uitleg: "Eigenschap van bepaalde stoffen om straling uit te zenden." },
            { woord: "radium", uitleg: "Scheikundig element, sterk radioactief." },
            { woord: "Nobelprijs", uitleg: "Hoogste internationale prijs voor wetenschap, vrede, literatuur." },
          ],
          theorie: "Toets-feit Marie Curie:\n• **1903** Nobelprijs natuurkunde (samen met man Pierre + Becquerel).\n• **1911** Nobelprijs scheikunde (alleen).\n• Eerste persoon ooit met 2 verschillende Nobelprijzen.\n• Symbool voor vrouwen in wetenschap.",
          voorbeelden: [
            { type: "stap", tekst: "Marie's dochter **Irène Joliot-Curie** kreeg in 1935 OOK een Nobelprijs (chemie) — moeder + dochter dus 3 prijzen samen." },
            { type: "stap", tekst: "Radioactiviteit-onderzoek maakte later kankerbehandeling met straling mogelijk. Onbedoeld levensreddend." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Curie = radioactiviteit + radium. 2 Nobelprijzen = uniek (eerste persoon). Eerste vrouw met Nobelprijs." }],
          niveaus: {
            basis: "Marie Curie werkte jarenlang met stoffen die straling uitzenden, zonder bescherming. Welke optie gaat over straling?",
            simpeler: "Marie Curie kreeg twee Nobelprijzen voor haar onderzoek naar straling. Welke ontdekking past daarbij?",
            nogSimpeler: "Marie Curie ontdekte radium en radioactiviteit.",
          },
        },
      },
      {
        q: "Wie brak de **Enigma-code**?",
        options: ["Alan Turing", "Albert Einstein", "Niels Bohr", "Marie Curie"],
        answer: 0,
        wrongHints: [null, "Einstein was natuurkundige, geen codebreker.", "Bohr onderzocht het atoom, geen geheime codes.", "Curie onderzocht straling, geen geheime codes."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is Enigma?", tekst: "De **Enigma** was een **codeer-machine** van nazi-Duitsland in WO2. De Duitsers gebruikten hem om geheime berichten te versturen (over schepen, troepen, plannen). De code leek onkraakbaar." },
            { titel: "Wie was Alan Turing?", tekst: "**Alan Turing** (1912-1954) was een Britse wiskundige + cryptanalist. Met zijn team in **Bletchley Park** (Engeland) bouwde hij een grote machine om de Enigma-code te kraken." },
            { titel: "Impact + tragisch einde", tekst: "Het kraken **versnelde het einde van WO2** met geschat 2-4 jaar — miljoenen levens gespaard. Turing wordt ook gezien als **vader van de computer**. Helaas werd hij in 1952 vervolgd voor zijn homoseksualiteit. Stierf jong. In 2013 postuum gerehabiliteerd door koningin." },
          ],
          woorden: [
            { woord: "Alan Turing", uitleg: "Britse wiskundige, brak Enigma-code, pionier computer." },
            { woord: "Enigma", uitleg: "Duitse codeer-machine uit WO2." },
            { woord: "Bletchley Park", uitleg: "Plek in Engeland waar de code-kraking gebeurde." },
          ],
          theorie: "Toets-feit Alan Turing:\n• Brak Enigma in **1940-1941**.\n• Bedacht concept van een 'universal computing machine' (= moderne computer).\n• **Turing-test** = test of een computer kan denken als een mens.\n• Krijgt nu vele eerbetuigingen (Britse 50-pond-biljet met zijn gezicht).",
          voorbeelden: [
            { type: "stap", tekst: "Film **'The Imitation Game'** (2014) met Benedict Cumberbatch vertelt zijn verhaal." },
            { type: "stap", tekst: "Niet verwarren: Einstein = natuurkunde. Bohr = atoomstructuur. Curie = radium. Turing = code-kraking + computer." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Turing = Enigma + computer-pionier. WO2 + code-kraking = combinatie." }],
          niveaus: {
            basis: "In de Tweede Wereldoorlog kraakte een Britse wiskundige met zijn team Duitse geheime berichten. Wie van de vier was wiskundige, geen natuurkundige of scheikundige?",
            simpeler: "Denk aan de film 'The Imitation Game' en aan de man op het Britse biljet van 50 pond: een wiskundige uit Engeland.",
            nogSimpeler: "Alan Turing brak de Enigma-code.",
          },
        },
      },
      {
        q: "Wie ontdekten de **structuur van DNA** (1953)?",
        options: ["Watson en Crick", "Marie en Pierre Curie", "Darwin en Wallace", "Pasteur en Fleming"],
        answer: 0,
        wrongHints: [null, "Marie en Pierre Curie onderzochten straling, geen DNA.", "Darwin en Wallace bedachten de evolutietheorie in de 19e eeuw; de DNA-structuur werd pas in 1953 ontdekt.", "Pasteur en Fleming werkten aan bacteriën en medicijnen, niet aan DNA."],
      },
    ],
  },
  {
    title: "Eind-toets — wetenschap mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wie werd beroemd door zijn **telescoop**-ontdekkingen?", options: ["Galileo", "Newton", "Einstein", "Edison"], answer: 0, wrongHints: [null, "Newton leefde na Galileo en werd beroemd om zwaartekracht, niet om een telescoop.", "Einstein leefde 300 jaar later en rekende vooral.", "Edison maakte de gloeilamp, geen telescoop-ontdekkingen."] },
      { q: "Wat betekent een **heliocentrisch** model?", options: ["De zon staat in het midden", "De aarde staat in het midden", "De maan staat in het midden", "De Melkweg staat in het midden"], answer: 0, wrongHints: [null, "Aarde in het midden heeft een andere naam: geo = aarde. Wat betekent 'helio'?", "'Helio' is Grieks. Betekent het maan? Denk aan het woord helium.", "'Helio' is Grieks. Betekent het melkweg? Denk aan het woord helium."] },
      { q: "Hoeveel **bewegingswetten van Newton** zijn er?", options: ["3", "1", "5", "10"], answer: 0, wrongHints: [null, "Newton beschreef er meer dan één — denk aan traagheid én aan actie = reactie.", "Minder — zoveel zijn het er niet.", "Veel minder — zoveel zijn het er niet."] },
      { q: "Wie schreef '**Over het ontstaan van soorten**'?", options: ["Darwin", "Mendel", "Newton", "Pasteur"], answer: 0, wrongHints: [null, "Mendel onderzocht erfelijkheid met erwten; dit boek schreef hij niet.", "Newton was natuurkundige, geen bioloog.", "Pasteur onderzocht bacteriën en vaccins."] },
      { q: "Wie ontdekte **penicilline**?", options: ["Fleming", "Darwin", "Curie", "Einstein"], answer: 0, wrongHints: [null, "Darwin is bekend van de evolutie, niet van een medicijn.", "Marie Curie onderzocht straling, geen medicijnen tegen bacteriën.", "Einstein was natuurkundige en werkte niet aan medicijnen."] },
      { q: "Wie van deze vier wetenschappers kreeg **twee Nobelprijzen**?", options: ["Marie Curie", "Einstein", "Newton", "Darwin"], answer: 0, wrongHints: [null, "Einstein kreeg er één (1921).", "Newton leefde lang voordat de Nobelprijs bestond (sinds 1901).", "Darwin stierf in 1882, voordat de Nobelprijs bestond."] },
      {
        q: "Wie ontwikkelde de **theorie van de relativiteit** (E=mc²)?",
        options: ["Albert Einstein", "Isaac Newton", "Charles Darwin", "Marie Curie"],
        answer: 0,
        wrongHints: [null, "Newton leefde ruim 200 jaar eerder en is bekend van de zwaartekracht.", "Darwin is bekend van de evolutie: dat is biologie, geen natuurkunde.", "Marie Curie onderzocht straling, geen ruimte en tijd."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Einstein?", tekst: "**Albert Einstein** *(1879-1955)* was een Duits-Joods-Zwitsers-Amerikaanse natuurkundige. Vluchtte voor de nazi's in 1933 naar VS. **Belangrijkste natuurkundige van de 20e eeuw**." },
            { titel: "Wat is E=mc²?", tekst: "Beroemdste formule ooit. Betekent: **Energie = massa × lichtsnelheid²**. Hier: een **kleine hoeveelheid massa** kan **enorm veel energie** worden. Basis voor:\n• Kernenergie (kerncentrales)\n• Atoombom\n• Begrip hoe sterren werken (zon)" },
            { titel: "Toets-feit: Einstein-quotes + Nobel", tekst: "Einstein won **Nobelprijs 1921** — maar NIET voor relativiteitstheorie! Hij won voor het **foto-elektrisch effect** (basis voor zonnepanelen). Beroemd citaat: 'Verbeelding is belangrijker dan kennis'. Veel mensen denken dat hij slecht was op school — onwaar, hij was juist goed in natuurkunde + wiskunde." },
          ],
          woorden: [
            { woord: "relativiteitstheorie", uitleg: "Einsteins theorie over hoe tijd, ruimte en zwaartekracht werken. Verandert bij hoge snelheden / grote massa's." },
            { woord: "E=mc²", uitleg: "Energie = massa × lichtsnelheid². Massa is een vorm van energie." },
            { woord: "Nobelprijs", uitleg: "Belangrijkste wetenschap-prijs ter wereld. Jaarlijks toegekend in 6 categorieën." },
          ],
          theorie: "Top-natuurkundigen door tijd:\n• **Galileo** (1564-1642) — telescoop, helio-centrisch\n• **Newton** (1642-1727) — zwaartekracht, 3 wetten\n• **Maxwell** (1831-1879) — elektromagnetisme\n• **Einstein** (1879-1955) — relativiteit\n• **Bohr** (1885-1962) — atoommodel\n• **Hawking** (1942-2018) — zwarte gaten",
          voorbeelden: [
            { type: "feit", tekst: "GPS-satellieten gebruiken Einsteins algemene relativiteitstheorie — zonder zou je locatie elke dag 11 km af zijn." },
            { type: "feit", tekst: "Einstein weigerde vaak sokken te dragen — beroemd excentriek." },
          ],
          basiskennis: [{ onderwerp: "Niet bom-uitvinder", uitleg: "Einstein vond NIET de atoombom uit. Zijn formule was wel de theoretische basis. Hij was juist pacifist + werkte er niet aan." }],
          niveaus: { basis: "De relativiteitstheorie is van ongeveer 1905 tot 1915 bedacht. Welke van deze vier wetenschappers leefde in die tijd en was natuurkundige?", simpeler: "Newton leefde rond 1700 en Darwin was bioloog. Marie Curie onderzocht straling. Wie blijft er over als bekende natuurkundige van de twintigste eeuw?", nogSimpeler: "Albert Einstein bedacht de relativiteitstheorie en de formule E=mc²." },
        },
      },
      {
        q: "Over welke wetenschapper gaat het bekende verhaal van de **vallende appel** en de zwaartekracht?",
        options: ["Isaac Newton", "Galileo", "Einstein", "Aristoteles"],
        answer: 0,
        wrongHints: [null, "Galileo onderzocht hoe snel voorwerpen vallen, maar het appelverhaal gaat over iemand anders.", "Einstein leefde veel later en gaf een nieuwe uitleg van de zwaartekracht, zonder appel.", "Aristoteles leefde in het oude Griekenland, lang voordat iemand de wet van de zwaartekracht opschreef."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Newton?", tekst: "**Sir Isaac Newton** *(1642-1727)* was een Engelse natuurkundige + wiskundige. Wordt vaak gezien als **een van de grootste wetenschappers ooit**. Werkte aan zwaartekracht, beweging, licht, wiskunde (differentiaal-rekening)." },
            { titel: "Het appel-verhaal", tekst: "Verhaal: Newton zat onder een appelboom in zijn moeders tuin. Een appel viel. Hij vroeg zich af: **'Waarom valt de appel altijd recht naar beneden, niet zijwaarts?'** Daaruit ontstond zijn idee van **zwaartekracht** — kracht die alle massa naar elkaar trekt.\n\n**Historische nuance**: het is bekend dat hij het verhaal zelf vertelde, maar of een appel echt viel is twijfelachtig. Verhaal werd populair om idee uit te leggen." },
            { titel: "Newton's wetten van beweging", tekst: "Zijn beroemde **3 bewegingswetten** (1687):\n1. **Traagheidsregel**: een voorwerp blijft stilstaan of in beweging zonder kracht\n2. **F = m × a** (kracht = massa × versnelling)\n3. **Actie = reactie**: elke kracht heeft een tegenkracht\n\nNog steeds gebruikt voor: raketten, auto-veiligheid, sport-fysica." },
          ],
          woorden: [
            { woord: "zwaartekracht", uitleg: "Kracht die alle massa naar elkaar trekt. Aarde trekt jou naar zich toe = je gewicht." },
            { woord: "Principia Mathematica", uitleg: "Newtons beroemde boek (1687) waarin zijn wetten staan. Een van de belangrijkste natuurkunde-boeken ooit." },
          ],
          theorie: "Newton vs Einstein zwaartekracht:\n• **Newton**: zwaartekracht is een **kracht** tussen massa's. Werkt overal in heelal.\n• **Einstein** (1915): zwaartekracht is **kromming van ruimte-tijd** door massa. Diepere uitleg.\n\nNewtons theorie werkt prima voor 99% van praktische situaties. Die van Einstein is nodig bij **extreem grote massa's** (zwart gat) of **hoge snelheden** (GPS-satellieten).",
          voorbeelden: [
            { type: "feit", tekst: "De appelboom waar Newton onder zat staat nog in Woolsthorpe Manor (Engeland). Toeristische trekpleister." },
            { type: "feit", tekst: "Newton was ook directeur van de Engelse Munt — hield zich daar bezig met geld-vervalsers vangen." },
          ],
          basiskennis: [{ onderwerp: "Niet uitvinder zwaartekracht", uitleg: "Zwaartekracht BESTOND al. Newton BESCHREEF en BEREKENDE het. Hij bedacht de wiskunde erachter." }],
          niveaus: { basis: "Het appelverhaal speelt in Engeland, rond het jaar 1666. Welke van deze vier wetenschappers was een Engelsman uit die tijd?", simpeler: "Galileo was een Italiaan, Aristoteles een oude Griek en Einstein leefde in de twintigste eeuw. Wie was de Engelse wetenschapper van de bewegingswetten?", nogSimpeler: "Het appelverhaal gaat over Isaac Newton." },
        },
      },
      {
        q: "Wie was in 1903 de **eerste vrouw die een Nobelprijs** kreeg?",
        options: ["Marie Curie", "Florence Nightingale", "Rosalind Franklin", "Ada Lovelace"],
        answer: 0,
        wrongHints: [null, "Florence Nightingale was een beroemde verpleegster, maar kreeg geen Nobelprijs.", "Rosalind Franklin deed belangrijk DNA-onderzoek, maar kreeg geen Nobelprijs: ze overleed al jong.", "Ada Lovelace leefde rond 1840, lang voordat de Nobelprijs bestond."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Marie Curie?", tekst: "**Marie Skłodowska-Curie** *(1867-1934)*. Geboren in Polen, werkte vooral in Frankrijk. Wetenschapper in **natuurkunde + chemie**. Werkte vaak met haar man Pierre Curie." },
            { titel: "Wat ontdekte ze?", tekst: "• **Radioactiviteit** — Henri Becquerel zag de straling in 1896 als eerste; Marie Curie onderzocht haar verder en bedacht het woord 'radioactiviteit'\n• **Twee nieuwe elementen**: polonium (vernoemd naar Polen) en radium\n• Werkte met radioactieve stoffen — wist toen nog niet hoe gevaarlijk dat was. Stierf uiteindelijk aan de gevolgen van straling." },
            { titel: "Toets-feit: 2 Nobelprijzen", tekst: "Marie Curie is **uniek**:\n• **Eerste vrouw ooit** met een Nobelprijs (1903, natuurkunde, samen met Pierre)\n• **Enige persoon ooit** met Nobelprijzen in **2 verschillende wetenschap-categorieën** (natuurkunde 1903, chemie 1911)\n• Haar dochter Irène won later samen met haar man ook een Nobelprijs voor chemie (1935). **Een echte Nobelprijs-familie!**" },
          ],
          woorden: [
            { woord: "radioactiviteit", uitleg: "Eigenschap van bepaalde stoffen die straling afgeven door verval van atomen." },
            { woord: "element", uitleg: "Pure stof in het periodiek systeem (waterstof, koolstof, polonium...). Curie ontdekte 2 nieuwe." },
            { woord: "Sorbonne", uitleg: "Beroemde universiteit Parijs waar Curie eerste vrouw werd die er les gaf." },
          ],
          theorie: "Vrouwen in wetenschap-Toets-feiten:\n• **Marie Curie** (1867-1934) — radioactiviteit, 2× Nobel\n• **Ada Lovelace** (1815-1852) — eerste computerprogrammeur OOIT\n• **Rosalind Franklin** (1920-1958) — DNA-foto (haar werk werd gebruikt voor Watson+Crick Nobel zonder erkenning)\n• **Katherine Johnson** (1918-2020) — NASA-wiskunde voor Apollo-missies (film: Hidden Figures)\n• **Jane Goodall** (1934-2025) — chimpansees + gedrag",
          voorbeelden: [
            { type: "feit", tekst: "Curie's labnotitieboeken zijn nog steeds zo radioactief dat ze in lood-kisten bewaard moeten worden. Bezoekers moeten beschermingskleding aan." },
            { type: "feit", tekst: "Wist je: Marie Curie wilde in WO1 haar Nobel-medailles laten omsmelten voor de oorlogskas — de bank weigerde ze aan te nemen." },
          ],
          basiskennis: [{ onderwerp: "Geboren in Polen", uitleg: "Curie was geboren als Maria Skłodowska in Polen. Verhuisde naar Parijs voor studie (Polen weigerde vrouwen op universiteit toen)." }],
          niveaus: { basis: "De Nobelprijs bestaat sinds 1901. Kijk bij elke vrouw: leefde ze rond 1903 en kreeg ze een Nobelprijs?", simpeler: "Ada Lovelace leefde al vóór 1901. Florence Nightingale en Rosalind Franklin kregen geen Nobelprijs. Wie onderzocht er rond 1900 straling?", nogSimpeler: "Marie Curie kreeg in 1903 als eerste vrouw een Nobelprijs, voor natuurkunde." },
        },
      },
      { q: "Wie schreef als eerste de **wet van de zwaartekracht** op?", options: ["Isaac Newton","Albert Einstein","Galileo","Curie"], answer: 0, wrongHints: [null, "Einstein gaf ruim 200 jaar later een nieuwe uitleg van de zwaartekracht.", "Galileo keek door zijn telescoop naar planeten.", "Curie onderzocht straling, geen krachten."] },
      { q: "Wie bedacht de **relativiteitstheorie**?", options: ["Albert Einstein","Newton","Curie","Darwin"], answer: 0, wrongHints: [null, "Newton is van de zwaartekracht en de appel.", "Curie is van radium en straling.", "Darwin is van de evolutie — biologie, geen natuurkunde."] },
      { q: "Wie wordt de **eerste programmeur** ter wereld genoemd?", options: ["Ada Lovelace","Charles Babbage","Alan Turing","Thomas Edison"], answer: 0, wrongHints: [null, "Babbage ontwierp de rekenmachine; wie schreef er het eerste programma voor?", "Turing kwam honderd jaar later — vader van de computer, maar niet de eerste programmeur.", "Edison was uitvinder van de gloeilamp, geen programmeur."] },
      { q: "Welke uitvinder werd wereldberoemd door de **gloeilamp**?", options: ["Thomas Edison","Nikola Tesla","Alexander Graham Bell","Albert Einstein"], answer: 0, wrongHints: [null, "Tesla werkte aan wisselstroom, niet aan de lamp.", "Bell is bekend van de telefoon.", "Einstein was natuurkundige en bedacht vooral theorieën."] },
      { q: "Welke uitvinder is beroemd om zijn werk aan **wisselstroom**?", options: ["Nikola Tesla","Thomas Edison","Marie Curie","Alexander Graham Bell"], answer: 0, wrongHints: [null, "Edison was juist de man van gelijkstroom — en van de gloeilamp.", "Curie onderzocht straling, geen elektriciteit.", "Bell is bekend van de telefoon."] },
      { q: "Welk **tweetal** ontdekte in 1953 de **structuur van DNA**?", options: ["Watson + Crick","Darwin + Mendel","Curie + Pasteur","Einstein + Bohr"], answer: 0, wrongHints: [null, "Darwin en Mendel waren biologen uit de 19e eeuw — de DNA-structuur kwam pas in 1953.", "Curie en Pasteur: straling en bacteriën, geen DNA.", "Einstein en Bohr waren natuurkundigen van het atoom, niet van DNA."] },
      { q: "Wie werd beroemd door jarenlang **onderzoek naar chimpansees**?", options: ["Jane Goodall","Charles Darwin","Marie Curie","Louis Pasteur"], answer: 0, wrongHints: [null, "Darwin bestudeerde vinken op de Galápagos, geen chimpansees in Afrika.", "Curie onderzocht straling in een laboratorium, geen dieren.", "Pasteur onderzocht bacteriën en vaccins."] },
      { q: "Wie wordt meestal de uitvinder van de **telefoon** genoemd?", options: ["Alexander Graham Bell", "Thomas Alva Edison", "Guglielmo Marconi", "Alessandro Volta"], answer: 0, wrongHints: [null, "Edison bedacht andere dingen, zoals de gloeilamp.", "Marconi werkte aan de radio, zonder draden.", "Volta maakte de eerste batterij."] },
      { q: "Wie hielp in de **Tweede Wereldoorlog** de geheime **Enigma-code** te kraken?", options: ["Alan Turing","Albert Einstein","Marie Curie","Isaac Newton"], answer: 0, wrongHints: [null, "Einstein deed natuurkunde, geen codekraken.", "Marie Curie overleed al in 1934, vóór de Tweede Wereldoorlog.", "Newton leefde ruim 200 jaar vóór de Tweede Wereldoorlog."] },
      { q: "Wie was de **eerste mens op de maan**?", options: ["Neil Armstrong","Yuri Gagarin","Buzz Aldrin","Michael Collins"], answer: 0, wrongHints: [null, "Gagarin was de eerste mens in de ruimte (1961), maar landde niet op de maan.", "Aldrin stapte als tweede uit de maanlander.", "Collins bleef in de baan om de maan en landde niet."] },
      { q: "Wie schreef in 1859 het beroemde boek over **evolutie**?", options: ["Charles Darwin","Isaac Newton","Albert Einstein","Marie Curie"], answer: 0, wrongHints: [null, "Newton schreef over natuurkunde en zwaartekracht, niet over dieren en planten.", "Einstein schreef over ruimte en tijd: natuurkunde, geen biologie.", "Marie Curie onderzocht straling, geen dieren en planten."] },
      { q: "Wie bouwde in 1817 de **loopfiets**, de eerste vorm van de fiets?", options: ["Karl Drais","Karl Benz","James Watt","Thomas Edison"], answer: 0, wrongHints: [null, "Karl Benz bouwde veel later een auto met een motor, geen fiets.", "James Watt verbeterde de stoommachine, geen fiets.", "Edison is bekend van de gloeilamp en de fonograaf."] },
      { q: "Welke Nederlander zag als eerste **micro-organismen** (piepkleine diertjes) door zijn microscoop?", options: ["Anton van Leeuwenhoek", "Christiaan Huygens", "Desiderius Erasmus", "Hendrik Antoon Lorentz"], answer: 0, wrongHints: [null, "Huygens keek vooral naar de sterren en planeten.", "Erasmus was een filosoof, geen onderzoeker met een microscoop.", "Lorentz was een natuurkundige, rond het jaar 1900."] },
      { q: "Wie ontwierp de **slingerklok**?", options: ["Christiaan Huygens","Isaac Newton","Anton van Leeuwenhoek","Desiderius Erasmus"], answer: 0, wrongHints: [null, "Newton bedacht wetten over zwaartekracht, maar bouwde geen klok.", "Van Leeuwenhoek keek door zijn microscoop naar kleine beestjes.", "Erasmus was een schrijver en denker, geen uitvinder."] },
      { q: "Wat was het vakgebied van Marie **Curie**?", options: ["Radioactiviteit","Astronomie","Biologie","Wiskunde"], answer: 0, wrongHints: [null, "Astronomie gaat over sterren en planeten. Werkte Curie daarmee?", "Biologie gaat over planten en dieren, zoals bij Darwin. Werkte Curie daarmee?", "Wiskunde gaat over getallen en rekenen. Curie deed vooral proeven in een laboratorium."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const bekendeWetenschappersPo = {
  id: "bekende-wetenschappers-po",
  title: "Bekende wetenschappers (groep 6-8, Doorstroomtoets-stof)",
  emoji: "🔭",
  level: "groep6-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / geschiedenis van wetenschap",
  prerequisites: [
    { id: "industriele-revolutie-po", title: "Industriële Revolutie", niveau: "1F" },
  ],
  intro:
    "Bekende wetenschappers voor groep 6-8, Doorstroomtoets-stof — Copernicus/Galileo (zon-middelpunt) + Newton (zwaartekracht, 3 wetten) + Darwin (evolutie) + Mendel/Pasteur/Fleming + Einstein (E=mc²) + Curie (radium) + Turing (computer). toets-relevant. ~15 min.",
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
