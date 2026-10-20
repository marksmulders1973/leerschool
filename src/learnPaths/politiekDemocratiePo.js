// Leerpad: Politiek + democratie - groep 6-8 wereldoriëntatie.
// PO-versie van nederlandseStaatMaatschappijleer. 1F.
// 6 stappen. toets-relevant burgerschap.

const stepEmojis = ["🗳️", "🏛️", "👑", "🇪🇺", "📜", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is democratie?", emoji: "🗳️", from: 0, to: 0 },
  { letter: "B", title: "Hoe werkt Nederland?", emoji: "🏛️", from: 1, to: 1 },
  { letter: "C", title: "Koning + Tweede Kamer", emoji: "👑", from: 2, to: 2 },
  { letter: "D", title: "Gemeente + Europa", emoji: "🇪🇺", from: 3, to: 3 },
  { letter: "E", title: "Grondwet + rechten", emoji: "📜", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

const steps = [
  {
    title: "Wat is democratie?",
    explanation:
      "**Democratie** = het volk beslist *(uit Grieks: 'demos' = volk, 'kratia' = macht)*.\n\nIn Nederland is **iedereen vanaf 18 jaar** **kiezer** — mag bepalen wie het land bestuurt.\n\n**Hoe gaat het in NL?**\n\n**1. Verkiezingen** *(ongeveer elke 4 jaar)*:\n• Volwassenen gaan naar het **stembureau**.\n• Kiezen partij + persoon.\n• Geheim stemmen met rood potlood.\n\n**2. Partijen + zetels**:\n• Tweede Kamer heeft **150 zetels** *(stoelen)*.\n• Meer stemmen = meer zetels.\n• Hoeveel stemmen voor 1 zetel? ~70.000.\n\n**3. Coalitie + kabinet**:\n• Geen enkele partij heeft 76 zetels *(meerderheid alleen)*.\n• Partijen werken samen → **coalitie**.\n• Coalitie maakt **kabinet** *(de regering)*.\n• Premier = minister-president.\n\n**Verschil democratie + dictatuur**:\n\n**Democratie** *(NL, VS, Frankrijk, Duitsland)*:\n• Volk kiest.\n• Meerdere partijen.\n• Vrije media.\n• Rechters onafhankelijk.\n• Mensenrechten beschermd.\n\n**Dictatuur** *(Noord-Korea, China, Rusland)*:\n• Eén leider of partij beslist alles.\n• Geen vrije verkiezingen.\n• Media gecontroleerd.\n• Mensenrechten beperkt.\n\n**Soorten democratie**:\n\n• **Directe democratie**: volk stemt over elk besluit *(bv. Zwitserland — referendum)*.\n• **Indirecte democratie**: volk kiest vertegenwoordigers *(NL, VS, etc.)*.\n• **Constitutionele monarchie**: koning + parlement *(NL, België, Spanje)*.\n• **Republiek**: gekozen president *(VS, Frankrijk)*.\n\n**Toets-feitje**:\nNederland werd democratie in **1848** — toen kwam de grondwet van Thorbecke met kiesrecht voor rijke mannen *(alle mannen 1917, vrouwen 1919)*.",
    checks: [
      {
        q: "Wat is **democratie**?",
        options: ["Volk beslist", "Eén leider beslist", "Rechters beslissen", "Koning beslist"],
        answer: 0,
        wrongHints: [null, "Als één leider alles beslist, heet dat een dictatuur. Wie heeft in een democratie de macht?", "Rechters spreken recht — maar wie heeft in een democratie de macht?", "Vroeger besliste de koning veel. Wat betekent 'demos' in het woord democratie?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent democratie?", tekst: "Het woord **democratie** komt uit het Grieks: 'demos' = volk, 'kratia' = macht. Dus letterlijk: **het volk heeft de macht**." },
            { titel: "Hoe werkt het in NL?", tekst: "Iedereen vanaf 18 jaar mag STEMMEN tijdens verkiezingen. Daarmee kies je wie er in de Tweede Kamer komt. Die kamer maakt samen met de regering de wetten." },
            { titel: "Tegenovergesteld: dictatuur", tekst: "In een **dictatuur** beslist 1 persoon of 1 partij alles, zonder dat het volk inspraak heeft. Voorbeelden: Noord-Korea, Rusland (deels). Vaak: geen vrije media, geen vrije verkiezingen." },
          ],
          woorden: [
            { woord: "democratie", uitleg: "Volk heeft macht via verkiezingen." },
            { woord: "dictatuur", uitleg: "Eén persoon/partij beslist alles." },
            { woord: "demos / kratia", uitleg: "Grieks: volk / macht." },
          ],
          theorie: "Toets-feit: NL is democratie sinds 1848 (grondwet Thorbecke). Vrouwen kregen kiesrecht in 1919. Stemmen mag pas vanaf 18 (niet eerder).",
          voorbeelden: [
            { type: "stap", tekst: "NL, VS, Frankrijk, Duitsland, België = democratie." },
            { type: "stap", tekst: "Noord-Korea, China (deels) = dictatuur." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Demo-cratie = volk-macht. Dicta-tor = degene die zegt-bepaalt." }],
          niveaus: {
            basis: "Democratie = volk heeft macht via verkiezingen.",
            simpeler: "Demo = volk. Iedereen mag kiezen.",
            nogSimpeler: "Volk kiest.",
          },
        },
      },
      {
        q: "Hoeveel **zetels** heeft de Tweede Kamer?",
        options: ["150", "100", "300", "76"],
        answer: 0,
        wrongHints: [null, "Het zijn er meer. Kijk in de les bij 'Partijen + zetels'.", "Zoveel stoelen staan er niet in de plenaire zaal. Kijk in de les bij 'Partijen + zetels'.", "76 is het aantal zetels dat je nodig hebt voor een meerderheid, niet het totaal."],
        uitlegPad: {
          stappen: [
            { titel: "150 zetels in Tweede Kamer", tekst: "De **Tweede Kamer** heeft **150 stoelen** (zetels). Op elke stoel zit een **Kamerlid** (parlementariër) die door het volk gekozen is." },
            { titel: "Hoe verdeelt het zich?", tekst: "Bij verkiezingen worden de zetels verdeeld over partijen op basis van **stemmen-percentage**. Eén zetel ≈ **70.000 stemmen**. Bv. partij met 1 miljoen stemmen krijgt ~14 zetels." },
            { titel: "76 = meerderheid", tekst: "Om een wet aan te nemen heb je een **meerderheid** nodig = **76 zetels of meer**. Geen enkele partij haalt dat alleen, dus partijen werken samen in een **coalitie**." },
          ],
          woorden: [
            { woord: "zetel", uitleg: "Stoel in de Kamer voor 1 Kamerlid." },
            { woord: "Tweede Kamer", uitleg: "Belangrijkste parlement NL: 150 leden, maakt wetten." },
            { woord: "Eerste Kamer", uitleg: "Senaat: 75 leden, controleert wetkwaliteit." },
          ],
          theorie: "Toets-feit:\n• **Tweede Kamer** = 150 zetels (volk kiest direct).\n• **Eerste Kamer** = 75 zetels (Provinciale Staten kiest).\n• Meerderheid Tweede = 76. Meerderheid Eerste = 38.",
          voorbeelden: [
            { type: "stap", tekst: "Verkiezingen 2023: PVV 37 zetels, GroenLinks-PvdA 25, VVD 24, NSC 20, etc. Samen 150." },
            { type: "stap", tekst: "Coalitie 2024 (Schoof): PVV(37)+VVD(24)+NSC(20)+BBB(7) = 88 zetels = meerderheid." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "150 = altijd. 76 = meerderheid. Onthoud deze cijfers — Toets-favoriet." }],
          niveaus: {
            basis: "150 zetels.",
            simpeler: "De Tweede Kamer heeft 150 stoelen voor 150 Kamerleden.",
            nogSimpeler: "150",
          },
        },
      },
      {
        q: "Vanaf welke **leeftijd** mag je in Nederland stemmen?",
        options: ["18 jaar", "21 jaar", "16 jaar", "25 jaar"],
        answer: 0,
        wrongHints: [null, "Dat was de grens tot 1971; daarna is hij verlaagd.", "Met 16 mag je in Nederland nog niet stemmen. Vanaf wanneer ben je volwassen voor de wet?", "Je hoeft niet zo lang te wachten. Vanaf wanneer ben je volwassen voor de wet?"],
      },
      {
        q: "Wat is **coalitie**?",
        options: ["Samenwerking van meerdere partijen","Eén partij die alleen regeert","Partijen die tegen de regering zijn","De dag van de verkiezingen"],
        answer: 0,
        wrongHints: [null,"Haalt één partij in Nederland meestal genoeg zetels in haar eentje?","Hoe heet de groep partijen die níet meeregeert?","Na de verkiezingen gebeurt er nog iets. Wat dan?"],
      },
    ],
  },
  {
    title: "Hoe werkt Nederland — Trias Politica",
    explanation:
      "Nederland werkt met **drie machten** *(uitgevonden door Montesquieu, 1748)*.\n**Trias Politica** = drie machten verdeeld zodat niemand te veel macht krijgt.\n\n**1. Wetgevende macht** *(maakt wetten)*:\n• **Tweede Kamer** *(150 leden, gekozen)*.\n• **Eerste Kamer** *(75 leden, getrapt gekozen)*.\n• **Regering** *(minister-president + ministers)*.\n• Wet wordt **eerst** in Tweede Kamer behandeld, dan Eerste.\n\n**2. Uitvoerende macht** *(voert wetten uit)*:\n• **Regering / kabinet**.\n• **Ministeries** *(Volksgezondheid, Justitie, Onderwijs, Financiën, etc.)*.\n• **Politie** + ambtenaren.\n• Doet wat wet zegt.\n\n**3. Rechterlijke macht** *(controleert + straft)*:\n• **Rechters** *(rechtbank, gerechtshof, Hoge Raad)*.\n• Beoordelen of mensen wet overtreden.\n• Straffen + uitspraak.\n• **Onafhankelijk** van regering — politicus kan rechter niet ontslaan.\n\n**Waarom zo verdeeld?**\nAls 1 persoon alle 3 doet → dictatuur.\n→ Verdeling = **balans + controle**.\n\n**Hoe werkt een wet maken?**\n\n**Stap 1**: minister of Tweede Kamerlid bedenkt voorstel.\n**Stap 2**: voorstel naar Tweede Kamer — debat + amendementen.\n**Stap 3**: Tweede Kamer stemt → meerderheid (76+) eens? → door.\n**Stap 4**: voorstel naar Eerste Kamer — debat.\n**Stap 5**: Eerste Kamer stemt → meerderheid (38+) eens? → wet wordt aangenomen.\n**Stap 6**: Koning ondertekent (formeel) + minister.\n**Stap 7**: wet wordt gepubliceerd in **Staatsblad**.\n**Stap 8**: wet treedt in werking.\n\n**Belangrijke politieke partijen** in NL *(voorbeelden)*:\n• **PVV** *(rechts)*.\n• **GroenLinks-PvdA** *(links)*.\n• **VVD** *(midden-rechts, ondernemers)*.\n• **D66** *(midden, progressief)*.\n• **CDA** *(midden, christelijk)*.\n• **BBB** *(boeren)*.\n• **SP** *(links, socialistisch)*.\n• **ChristenUnie** *(christelijk)*.\n• **SGP** *(christelijk-conservatief)*.\n• **FvD** *(rechts)*.\n• **JA21** *(rechts)*.\n• **Volt** *(Europees, jong)*.\n• **Partij voor de Dieren** *(dier + natuur)*.\n• **DENK** *(diversiteit)*.\n\n**Toets-feitje**:\nIn 2023 werd de **PVV** voor het eerst de grootste partij *(37 zetels)*. Bij elke verkiezing kan dat weer veranderen.",
    checks: [
      {
        q: "Wat is **Trias Politica**?",
        options: ["3 machten verdeeld", "Eén partij die alles beslist", "De politie en de rechters samen", "De verkiezingen om de 4 jaar"],
        answer: 0,
        wrongHints: [null, "Als één partij alles beslist, krijgt niemand tegenspraak. Juist dat wil de Trias Politica voorkomen. Hoe?", "Politie en rechters horen bij twee van de machten, maar de Trias is groter: wie maakt de wetten?", "Verkiezingen gaan over wie er gekozen wordt. De Trias Politica gaat over wie welke taak heeft in het land."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent Trias Politica?", tekst: "**Trias Politica** is Latijns voor 'drie staatsmachten'. Het idee: verdeel de macht in 3 delen, zodat **niemand te veel** macht krijgt." },
            { titel: "De 3 machten in NL", tekst: "1) **Wetgevende macht** (maakt wetten) = Tweede + Eerste Kamer + regering. 2) **Uitvoerende macht** (voert wet uit) = regering + ambtenaren + politie. 3) **Rechterlijke macht** (controleert + straft) = rechters." },
            { titel: "Wie bedacht het?", tekst: "De Franse filosoof **Montesquieu** schreef erover in 1748. Doel: voorkomen dat dictators ontstaan. De meeste democratieën gebruiken dit idee nu." },
          ],
          woorden: [
            { woord: "Trias Politica", uitleg: "3 staatsmachten verdeeld." },
            { woord: "wetgevend", uitleg: "Maakt wetten." },
            { woord: "uitvoerend", uitleg: "Voert wetten uit." },
            { woord: "rechterlijk", uitleg: "Controleert + straft." },
          ],
          theorie: "Toets-feit Trias: 3 machten = balans en controle. Rechters mogen niet door politici worden ontslagen (onafhankelijk). Anders zou de regering rechters onder druk kunnen zetten.",
          voorbeelden: [
            { type: "stap", tekst: "Wet maken → Tweede Kamer. Wet uitvoeren → minister + politie. Wet overtreden → rechter beslist straf." },
            { type: "stap", tekst: "Trias = drietal. 3 stoelen, niet 1 troon." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "TRIAS = drietal. POLITICA = politiek. Drie politieke machten = balans." }],
          niveaus: {
            basis: "Trias Politica = 3 staatsmachten verdeeld (wetgevend/uitvoerend/rechterlijk).",
            simpeler: "Wetten maken, wetten uitvoeren, wetten controleren — 3 aparte groepen.",
            nogSimpeler: "3 machten gescheiden.",
          },
        },
      },
      {
        q: "Wie **maakt wetten**?",
        options: ["Tweede + Eerste Kamer + regering","Alleen de koning, in zijn eentje","De politie en de burgemeester","De rechters in de rechtbank"],
        answer: 0,
        wrongHints: [null,"Mag één persoon in Nederland zomaar alle wetten maken?","De politie zorgt dat mensen zich aan de wet houden. Maakt ze ook de wetten?","Een rechter kijkt of iemand de wet heeft overtreden. Maakt hij ook de wet?"],
      },
      {
        q: "Wie bepaalt de **straf** als iemand een misdaad heeft gepleegd?",
        options: ["Rechter", "Minister", "Burgemeester", "Politieagent"],
        answer: 0,
        wrongHints: [null, "Een minister hoort bij de uitvoerende macht. Welke macht controleert en straft?", "De burgemeester bestuurt de gemeente. Welke macht controleert en straft?", "De politie houdt iemand aan, maar bepaalt zelf geen straf. Wie doet dat wel?"],
      },
      {
        q: "Hoeveel zetels voor **meerderheid** Tweede Kamer?",
        options: ["76", "150", "50", "100"],
        answer: 0,
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent 'meerderheid'?", tekst: "Een **meerderheid** in een groep van X heb je als je MEER dan de helft hebt. Bij 150 zetels is de helft 75. Dus meer dan helft = **76 of meer**." },
            { titel: "Waarom 76 belangrijk?", tekst: "Met **76 zetels** kun je een WET aannemen — je hebt de meerderheid, dus iedereen moet zich erbij neerleggen. Anders heb je een minderheid en wordt je voorstel afgewezen." },
            { titel: "Waarom coalities?", tekst: "Geen ENKELE partij in NL heeft alleen 76 zetels. Daarom **werken meerdere partijen samen** = coalitie. Bv. 4 partijen met 30+20+15+12 zetels = 77 zetels = meerderheid." },
          ],
          woorden: [
            { woord: "meerderheid", uitleg: "MEER dan helft van zetels." },
            { woord: "coalitie", uitleg: "Samenwerking partijen om 76+ zetels te krijgen." },
          ],
          theorie: "Toets-formule: meerderheid = (totaal ÷ 2) + 1. Bij 150 = 75 + 1 = 76. Bij een oneven aantal: meer dan de helft. Eerste Kamer (75): helft = 37,5 → 38.",
          voorbeelden: [
            { type: "stap", tekst: "Klas van 30 kinderen: meerderheid = 16. Klas van 20: meerderheid = 11." },
            { type: "stap", tekst: "Coalitie 2024 (kabinet Schoof): PVV+VVD+NSC+BBB = 88 zetels. Genoeg voor meerderheid." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Helft + 1. Bij 150: 75 + 1 = 76." }],
          niveaus: {
            basis: "Meerderheid Tweede Kamer = 76 (van 150).",
            simpeler: "Meer dan de helft van 150 = 76+.",
            nogSimpeler: "76 = meerderheid.",
          },
        },
        wrongHints: [null, "Dat is alle zetels — je zoekt MEER dan de helft, niet allemaal.", "Helemaal te weinig — bereken eerst de helft van 150.", "100 is wel meer dan de helft, maar je zoekt het kleinste aantal dat nét meer dan de helft is."],
      },
    ],
  },
  {
    title: "Koning + Tweede Kamer + Regering",
    explanation:
      "**Constitutionele monarchie** = koning + grondwet + parlement.\n\n**De Koning** 👑\n\n• Sinds 2013: **Willem-Alexander** *(geboren 1967)*.\n• Koningin: **Máxima** *(uit Argentinië)*.\n• Troonsopvolgster: **prinses Amalia** *(geboren 2003)*.\n\n**Wat doet de koning?**\n• **Toespraak Prinsjesdag** *(3e dinsdag september)* — Troonrede over plannen kabinet.\n• **Ondertekent** alle wetten *(formeel)*.\n• **Spreekt** elke week met de premier.\n• **Vertegenwoordigt** NL bij staatsbezoeken.\n• **Geen politieke macht** *(grondwettelijk beperkt)*.\n\n**Koningsdag**: 27 april — verjaardag Willem-Alexander. Hele NL viert, kleding oranje.\n\n**Het kabinet** 🏛️\n\n• Wordt **gevormd na verkiezingen**.\n• **Informateur** *(meestal ervaren politicus)* onderzoekt mogelijke coalitie.\n• **Formateur** maakt definitief kabinet.\n• Bestaat uit:\n  - **Minister-president** *(premier)* — leider kabinet.\n  - **Ministers** *(1 per departement: Onderwijs, Defensie, Justitie, etc.)*.\n  - **Staatssecretarissen** *(assistenten ministers)*.\n• Vergadert elke week in de **ministerraad**.\n\n**Premier** = leider van het kabinet; na verkiezingen kan dat iemand anders worden.\n\n**Tweede Kamer** 🏛️\n\n• **150 leden** *(Kamerleden / parlementariërs)*.\n• Vergadert in **plenaire zaal Den Haag**.\n• Debatteert wetten.\n• **Controleert** kabinet: stelt vragen, kan motie indienen.\n• Voorzitter: gekozen door de Kamerleden zelf.\n\n**Hoe controleert Kamer kabinet?**\n• **Schriftelijke vragen** aan minister.\n• **Debat** in Kamer.\n• **Motie** *(uitspraak Kamer)*:\n  - Aangenomen door meerderheid → minister moet luisteren.\n  - **Motie van wantrouwen** → minister moet aftreden.\n\n**Eerste Kamer** 🏛️\n\n• **75 leden** *(senatoren)*.\n• Getrapt gekozen via **Provinciale Staten**.\n• Controleert wetten vooral op **kwaliteit**.\n• Kan wet **verwerpen** maar niet wijzigen.\n• Vergadert dinsdagen.\n\n**Toets-feitje**:\nDe Koning **stemt niet** in Tweede Kamer of bij verkiezingen — als staatshoofd moet hij **boven politiek** staan.",
    checks: [
      {
        q: "Wie is sinds 2013 de **koning** van Nederland?",
        options: ["Willem-Alexander", "Beatrix", "Amalia", "Máxima"],
        answer: 0,
        wrongHints: [null, "Beatrix was koningin tot 2013. Toen deed ze afstand van de troon. Aan wie?", "Amalia is de troonopvolger: zij wordt pas later koningin.", "Máxima is de koningin, de vrouw van de koning. Wie is de koning zelf?"],
      },
      {
        q: "Wat is **Prinsjesdag**?",
        options: ["De koning leest de plannen voor","Het verjaardagsfeest van de koning","De dag dat iedereen gaat stemmen","Een feestdag voor alle prinsen"],
        answer: 0,
        wrongHints: [null,"Dat is Koningsdag. Wat gebeurt er op Prinsjesdag in Den Haag?","Op Prinsjesdag stemt niemand. Wat gebeurt er dan wel?","De naam klinkt zo. Maar wat gebeurt er echt in Den Haag?"],
        uitlegPad: {
          stappen: [
            { titel: "Wanneer is Prinsjesdag?", tekst: "**Prinsjesdag** is altijd op de **3e dinsdag in september**. Vaste afspraak: politiek seizoen begint dan. In 2025 = 16 september." },
            { titel: "Wat gebeurt er?", tekst: "1) Koning rijdt in **glazen koets** door Den Haag.\n2) Spreekt de **Troonrede** uit voor beide Kamers — de plannen van het kabinet voor komend jaar.\n3) Daarna geeft **minister van Financiën** de **Miljoenennota + Rijksbegroting** (= het geld-plan voor NL)." },
            { titel: "Hoedjes + cultuur", tekst: "Vrouwen in politiek dragen vaak **bijzondere hoedjes** op deze dag — speciale traditie. Het is een belangrijk **staatsmoment**, op TV uitgezonden, met militaire muziek + parade." },
          ],
          woorden: [
            { woord: "Prinsjesdag", uitleg: "3e dinsdag september, koning leest plannen kabinet voor." },
            { woord: "Troonrede", uitleg: "Toespraak van de koning over de kabinetsplannen." },
            { woord: "Miljoenennota", uitleg: "Begrotings-overzicht NL voor komend jaar." },
            { woord: "Ridderzaal", uitleg: "Beroemde zaal in Den Haag (Binnenhof) voor speciale gelegenheden." },
          ],
          theorie: "Toets-feit Prinsjesdag:\n• **3e dinsdag september** (vaste datum).\n• Sinds **1814** (na Franse tijd).\n• Koning leest, maar plannen zijn van het **kabinet** (regering schreef toespraak).\n• Eindigt met **balkonscène** op Paleis Noordeinde.",
          voorbeelden: [
            { type: "stap", tekst: "Koningsdag (27 april) = verjaardag koning + feest. Prinsjesdag (sept) = serieus + politiek. Niet verwarren!" },
            { type: "stap", tekst: "Begroting in Miljoenennota laat zien: belasting omhoog/omlaag, meer geld voor onderwijs/zorg/defensie?" },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Prinsjesdag = serieus politiek. Koningsdag = feest. Allebei koning, maar verschillende rol." }],
          niveaus: {
            basis: "Koning leest plannen kabinet voor (3e dinsdag sept).",
            simpeler: "Op Prinsjesdag spreekt de Koning de Troonrede uit — het politieke jaarprogramma.",
            nogSimpeler: "Plannen voorlezen",
          },
        },
      },
      {
        q: "Wat is een **motie van wantrouwen**?",
        options: ["De Kamer wil dat een minister opstapt","De Kamer geeft een minister lof","De Kamer roept verkiezingen uit","De Kamer neemt een nieuwe wet aan"],
        answer: 0,
        wrongHints: [null,"Lof geven is het tegenovergestelde van wantrouwen. Wat wil de Kamer als ze een minister niet meer vertrouwt?","Kijk naar het woord 'wantrouwen'. Wat betekent dat?","Kijk naar het woord 'wantrouwen'. Gaat het om een wet, of om een persoon?"],
      },
      {
        q: "Wie controleert vooral de **kwaliteit** van een wet voordat die ingaat?",
        options: ["Eerste Kamer", "Tweede Kamer", "Koning", "Politie"],
        answer: 0,
        wrongHints: [null, "De Tweede Kamer debatteert eerst over de wet. Wie kijkt daarna nog een keer, vooral naar de kwaliteit?", "De Koning ondertekent de wet alleen formeel. Wie beoordeelt de wet?", "De politie zorgt dat mensen zich aan de wet houden; ze beoordeelt de wet niet."],
      },
    ],
  },
  {
    title: "Gemeente + provincie + Europa",
    explanation:
      "Er zijn **vier lagen** van bestuur in NL.\n\n**1. Gemeente** 🏘️ *(stad of dorp)*:\n• Lokaal niveau.\n• 342 gemeenten in NL *(2024)*.\n• Eigen **gemeenteraad** *(gekozen elke 4 jaar)*.\n• Eigen **burgemeester** *(benoemd, niet gekozen — door Koning op voordracht)*.\n• Eigen **wethouders** *(zoals ministers, maar lokaal)*.\n• Verantwoordelijk voor: **vuilnis**, paspoorten, parkeren, **bouwvergunningen**, scholen, lokale wegen, sport, cultuur.\n• Belasting: gemeentebelasting *(OZB, hondenbelasting, etc.)*.\n\n**2. Provincie** 🏞️ *(12 in NL)*:\n• **Drenthe, Flevoland, Friesland, Gelderland, Groningen, Limburg, Noord-Brabant, Noord-Holland, Overijssel, Utrecht, Zeeland, Zuid-Holland**.\n• Eigen **Provinciale Staten** *(gekozen)*.\n• Eigen **commissaris van de Koning** *(benoemd)*.\n• Verantwoordelijk voor: **provinciale wegen**, openbaar vervoer regio, ruimtelijke ordening, natuur, water *(samen met waterschap)*.\n• Belasting: opcenten motorrijtuigenbelasting.\n\n**3. Nationale overheid** 🇳🇱:\n• Regering + parlement *(Den Haag)*.\n• Belastingen, defensie, onderwijs-niveaus, justitie, buitenlands beleid.\n\n**4. Europese Unie** 🇪🇺:\n• 27 landen lid.\n• NL is lid sinds **1957** *(toen nog EEG)*.\n• **Europees Parlement** *(720 leden, NL heeft 31)*.\n• **Europese Commissie** *(uitvoerend)*.\n• **Raad van EU** *(landen-vertegenwoordiging)*.\n• Wetten in NL moeten passen bij EU-wetten.\n• **Euro** *(€)* sinds 2002 — gemeenschappelijke munt.\n• **Schengen-gebied**: open grenzen tussen 29 landen.\n\n**Waterschappen** 💧 *(extra laag, NL-uniek)*:\n• 21 waterschappen.\n• Verantwoordelijk voor **dijken, water-niveau, schoon water**.\n• Oudste democratische instituten van NL *(soms 800 jaar)*.\n• Eigen verkiezingen *(elke 4 jaar)*.\n• Belasting: waterschapsbelasting.\n\n**Verkiezingen** in NL:\n• **Gemeenteraad**: elke 4 jaar *(2026 laatste)*.\n• **Provinciale Staten + Waterschap**: tegelijk, elke 4 jaar *(2023 laatste)*.\n• **Tweede Kamer**: elke 4 jaar *(2025 laatste)*.\n• **Eerste Kamer**: getrapt via Provinciale Staten.\n• **Europees Parlement**: elke 5 jaar *(2024 laatste)*.\n\n**Toets-feitje**:\nNL is een **decentrale eenheidsstaat** — er is wel centrale regering, maar **gemeenten + provincies** hebben **eigen democratie + bevoegdheden**. Niet zoals VS *(federaal, sterke staten)* of Frankrijk *(centraal, sterke regering)*.",
    checks: [
      {
        q: "Hoeveel **provincies** heeft Nederland?",
        options: ["12", "10", "11", "13"],
        answer: 0,
        wrongHints: [null, "Het zijn er meer. Tel de provincies in de les na.", "Zoveel waren het er vóór 1986. Toen kwam Flevoland erbij.", "Zoveel zijn het er niet. Tel ze in de les nog eens na."],
        uitlegPad: {
          stappen: [
            { titel: "12 provincies", tekst: "Nederland heeft **12 provincies**. Dat aantal is sinds **1986** stabiel — toen werd **Flevoland** als 12e provincie toegevoegd (drooggelegde polder)." },
            { titel: "De 12 op alfabet", tekst: "1. Drenthe\n2. Flevoland\n3. Friesland\n4. Gelderland\n5. Groningen\n6. Limburg\n7. Noord-Brabant\n8. Noord-Holland\n9. Overijssel\n10. Utrecht\n11. Zeeland\n12. Zuid-Holland" },
            { titel: "Onthoud-truc", tekst: "Groepjes onthouden:\n• **'Noord'**: Friesland + Groningen + Drenthe (klein, boven)\n• **'Hollanden'**: Noord-Holland + Zuid-Holland + Utrecht + Flevoland (rijke kern)\n• **'Oosten'**: Gelderland + Overijssel\n• **'Zuiden'**: Zeeland + Noord-Brabant + Limburg." },
          ],
          woorden: [
            { woord: "provincie", uitleg: "Bestuurlijke laag tussen gemeente en land." },
            { woord: "Flevoland", uitleg: "Jongste provincie, sinds 1986, drooggelegde polder." },
          ],
          theorie: "Toets-feit provincies:\n• 12 stuks sinds 1986.\n• Eigen **Provinciale Staten** (gekozen).\n• Eigen **commissaris van de Koning** (benoemd door regering).\n• Verantwoordelijk voor: provinciale wegen, openbaar vervoer, natuur, ruimtelijke ordening.",
          voorbeelden: [
            { type: "stap", tekst: "Hoofdsteden om te kennen: Friesland → Leeuwarden, Groningen → Groningen, Utrecht → Utrecht, Zeeland → Middelburg, etc." },
            { type: "stap", tekst: "Flevoland bestaat uit de Noordoostpolder en de Flevopolder, drooggemaakt tussen 1942 en 1968." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "12 provincies komt vaak voor in toetsvragen. Niet 11 (vóór 1986), niet 13. Sinds 1986 = 12." }],
          niveaus: {
            basis: "12 provincies.",
            simpeler: "NL heeft sinds 1986 12 provincies (Flevoland was de laatste).",
            nogSimpeler: "12",
          },
        },
      },
      {
        q: "Wie benoemt de **burgemeester**?",
        options: ["De Koning", "De inwoners", "De wethouders", "De Tweede Kamer"],
        answer: 0,
        wrongHints: [null, "In sommige landen kiezen de inwoners de burgemeester, in Nederland niet. Wie benoemt hem hier?", "Wethouders werken juist sámen met de burgemeester — wie benoemt hem of haar?", "De Tweede Kamer benoemt geen burgemeesters."],
      },
      {
        q: "In welk jaar werd de **euro** in Nederland ingevoerd (munten en briefjes)?",
        options: ["2002", "1957", "1990", "2010"],
        answer: 0,
        wrongHints: [null, "In 1957 begon de EEG, de voorloper van de EU. De euro kwam veel later.", "In 1990 betaalden we nog met de gulden.", "In 2010 hadden we de euro al een paar jaar."],
      },
      {
        q: "Wat doet **waterschap**?",
        options: ["Dijken en water beheren", "Treinen laten rijden", "Paspoorten maken", "Scholen bouwen"],
        answer: 0,
        wrongHints: [null, "Treinen hebben niets met het waterschap te maken — kijk naar de naam.", "Paspoorten haal je bij de gemeente.", "Scholen bouwen doet de gemeente. Kijk naar de naam: water-schap."],
      },
    ],
  },
  {
    title: "Grondwet + grondrechten",
    explanation:
      "**Grondwet** = belangrijkste wet van NL. Andere wetten mogen niet ingaan tegen grondwet.\n\n**NL Grondwet**:\n• Eerste in 1814 *(na Napoleon)*.\n• Grote update **1848** door **Thorbecke** — democratie.\n• Grote herziening **1983**.\n• 142 artikelen in 8 hoofdstukken.\n\n**Klassieke grondrechten** *(je MAG)*:\n\n• **Vrijheid van godsdienst** *(art. 6)*: gelovig of niet-gelovig, mag je kiezen.\n• **Vrijheid van meningsuiting** *(art. 7)*: zeggen wat je denkt *(binnen wet)*.\n• **Vergaderrecht + demonstratierecht** *(art. 9)*: protest mag.\n• **Vereniging** *(art. 8)*: club oprichten mag.\n• **Onschendbaarheid lichaam** *(art. 11)*: niet zomaar aangeraakt.\n• **Onschendbaarheid woning** *(art. 12)*: politie heeft huiszoekingsbevel nodig.\n• **Briefgeheim** *(art. 13)*: jouw post + e-mails zijn van jou.\n• **Discriminatie verboden** *(art. 1)*: gelijke behandeling.\n\n**Sociale grondrechten** *(staat moet zorgen voor)*:\n\n• **Werkgelegenheid** *(art. 19)*: staat moet werken stimuleren.\n• **Onderwijs** *(art. 23)*: vrijheid van onderwijs + recht op gratis basisonderwijs.\n• **Volksgezondheid** *(art. 22)*: zorg voor gezondheid.\n• **Sociale zekerheid** *(art. 20)*: uitkering bij nood.\n\n**Artikel 1 GW** *(beroemd)*:\n*'Allen die zich in Nederland bevinden, worden in gelijke gevallen gelijk behandeld. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht, handicap, seksuele gerichtheid of op welke grond dan ook, is niet toegestaan.'*\n\n**Verschil grondrecht en mensenrecht**:\n• **Grondrecht** = in NL Grondwet *(geldt in NL)*.\n• **Mensenrecht** = wereldwijd, in **Universele Verklaring van de Rechten van de Mens** *(VN, 1948)*.\n• NL ondertekende ook het **EVRM** *(Europees, Straatsburg)*.\n\n**Bekende mensenrechten**:\n• Recht op leven.\n• Geen marteling.\n• Geen slavernij.\n• Vrijheid van denken + gezin + eigendom.\n• Recht op onderwijs.\n• Recht op vrije pers.\n\n**Soms conflict tussen grondrechten**:\n• Vrijheid van meningsuiting vs discriminatie verboden.\n• Vrijheid van godsdienst vs gelijke behandeling.\n• Rechter beslist in concrete zaken.\n\n**Toets-feitje**:\nNederland is **medeoprichter** van VN (1945), EEG (1957), EVRM (1950) en veel andere internationale organisaties. Den Haag is **hoofdstad van internationaal recht** met **Internationaal Strafhof** + **Vredespaleis**.",
    checks: [
      {
        q: "Wat staat er in **artikel 1** van de Grondwet?",
        options: ["Verbod op discriminatie", "Vrijheid van godsdienst", "Recht op onderwijs", "Vrijheid van meningsuiting"],
        answer: 0,
        wrongHints: [null, "Dat staat ook in de Grondwet (artikel 6), maar niet als allereerste.", "Onderwijs staat in artikel 23, verderop in de Grondwet.", "Dat is artikel 7. Welk artikel komt daar nog vóór?"],
      },
      {
        q: "Wat is een **klassiek grondrecht**?",
        options: ["Wat je MAG (vrijheid)", "Wat je MOET (verplichting)", "Wat de staat MOET regelen (zorg)", "Wat je MOET betalen (belasting)"],
        answer: 0,
        wrongHints: [null, "Een verplichting is geen recht. Wat betekent het woord 'recht' hier?", "Dat is een sociaal grondrecht — wat is dan een klassiek grondrecht?", "Belasting is geen grondrecht."],
      },
      {
        q: "Wat is **briefgeheim**?",
        options: ["Je post mag niet zomaar gelezen worden", "Een brief in geheimschrift", "Een verbod om brieven te schrijven", "Een brief zonder afzender"],
        answer: 0,
        wrongHints: [null, "Het gaat niet om een soort brief, maar om een recht dat jij hebt.", "Een verbod is het tegenovergestelde van een recht. Briefgeheim is een recht. Welk?", "Het gaat om een grondrecht — wie mag jouw post lezen?"],
      },
      {
        q: "Sinds welk jaar mogen **alle mannen** in Nederland stemmen (algemeen mannenkiesrecht)?",
        options: ["1917", "1848", "1900", "1919"],
        answer: 0,
        wrongHints: [null, "In 1848 kwam de grondwet van Thorbecke, maar toen mochten alleen rijke mannen stemmen.", "Rond 1900 mochten nog lang niet alle mannen stemmen. Het kwam iets later.", "Dat is het jaar van het vrouwenkiesrecht. De mannen waren net iets eerder aan de beurt."],
      },
    ],
  },
  {
    title: "Eind-toets — politiek mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wat is **democratie**?", options: ["Volk beslist", "Eén leider", "Rechters beslissen", "Koning beslist"], answer: 0, wrongHints: [null, "Als één leider alles beslist, heet dat een dictatuur.", "Rechters spreken recht — maar wie heeft in een democratie de macht?", "Vroeger besliste de koning veel. In Nederland nu niet meer. Wie dan wel?"] },
      { q: "Hoeveel leden heeft de **Tweede Kamer**?", options: ["150", "75", "300", "100"], answer: 0, wrongHints: [null, "75 is het aantal leden van de Eerste Kamer. De Tweede Kamer is groter.", "Zoveel stoelen staan er niet in de plenaire zaal.", "Het zijn er meer. Kijk in de les bij de Tweede Kamer."] },
      { q: "Wat is **Prinsjesdag**?", options: ["Troonrede, 3e dinsdag in september","Koningsdag, op 27 april elk jaar","Verkiezingen, eens in de vier jaar","Een feestdag voor alle prinsen"], answer: 0, wrongHints: [null,"Koningsdag is het feest op de verjaardag van de koning. Wat gebeurt er op Prinsjesdag in Den Haag?","Wordt er op Prinsjesdag gestemd?","De naam klinkt zo. Maar wat gebeurt er echt in Den Haag?"] },
      { q: "Hoeveel **provincies** heeft Nederland?", options: ["12", "11", "13", "16"], answer: 0, wrongHints: [null, "Zoveel waren het er vóór 1986, toen Flevoland erbij kwam.", "Zoveel zijn het er niet. Tel ze in de les na.", "Dat is veel te veel. Tel ze in de les na."] },
      { q: "Wat staat er in **artikel 1** van de Grondwet?", options: ["Verbod op discriminatie","Recht op gratis vervoer","Vrijheid van meningsuiting","Recht op goed onderwijs"], answer: 0, wrongHints: [null,"Staat zoiets in de Grondwet?","Dat staat ook in de Grondwet, maar is het het allereerste artikel?","Onderwijs staat ook in de Grondwet, maar in een later artikel."] },
      { q: "In welk jaar kregen we in Nederland de **euro**?", options: ["2002", "1957", "1980", "1990"], answer: 0, wrongHints: [null, "In 1957 begon de EEG, de voorloper van de EU. De euro kwam veel later.", "In 1980 betaalden we nog met de gulden.", "In 1990 betaalden we nog met de gulden."] },
      { q: "Wat is **Trias Politica**?", options: ["3 machten gescheiden","2 partijen die samenwerken","1 koning met alle macht","3 grote politieke partijen"], answer: 0, wrongHints: [null, "Twee partijen die samenwerken is een coalitie. Trias gaat over iets anders: wat betekent 'tri'?", "Eén koning met alle macht is juist wat de Trias Politica wil voorkomen.", "Trias betekent drie, maar het gaat niet om partijen. Waarover gaat het wel?"] },
      { q: "Welke macht maakt **wetten**?", options: ["Wetgevende (parlement)","Uitvoerende (regering)","Rechterlijke (rechters)","Kerkelijke (kerk)"], answer: 0, wrongHints: [null, "De uitvoerende macht voert wetten uit die al gemaakt zijn. Wie maakt ze?", "De rechterlijke macht beoordeelt of iemand de wet overtreedt. Wie maakt de wet?", "In Nederland zijn kerk en staat gescheiden."] },
      { q: "Welke macht **voert wetten uit**?", options: ["Uitvoerende (regering)","Wetgevende (parlement)","Rechterlijke (rechters)","Kerkelijke (kerk)"], answer: 0, wrongHints: [null, "De wetgevende macht maakt de wetten. Wie zorgt daarna dat ze worden uitgevoerd?", "De rechterlijke macht beoordeelt of iemand de wet overtreedt. Wie voert de wet uit?", "In Nederland zijn kerk en staat gescheiden."] },
      { q: "Wat doet de **Eerste Kamer**?", options: ["Wetten goedkeuren of afkeuren","Nieuwe wetten voorstellen","Wetten uitvoeren in het land","Rechtspreken over wie schuldig is"], answer: 0, wrongHints: [null,"Voorstellen komen van de regering of de Tweede Kamer — wat doet de Eerste Kamer daarna?","Het uitvoeren doet de regering. Wat doet de Eerste Kamer?","Dat doen rechters. Wat doet de Eerste Kamer?"] },
      { q: "Vanaf welke leeftijd mag je **stemmen** in NL?", options: ["18","16","21","12"], answer: 0, wrongHints: [null, "Met 16 mag je in Nederland nog niet stemmen.", "Dat was de grens tot 1971; daarna is hij verlaagd.", "Met 12 zit je nog op de basisschool. Wanneer ben je volwassen voor de wet?"] },
      { q: "Wat is een **coalitie**?", options: ["Partijen die samen de regering vormen","Eén partij die in haar eentje regeert","Partijen die niet in de regering zitten","De uitslag van de verkiezingen"], answer: 0, wrongHints: [null,"Haalt één partij in Nederland meestal genoeg zetels in haar eentje?","Partijen die niet meeregeren heten de oppositie. Hoe heet de groep die wél samen regeert?","Ná de uitslag gaan partijen pas samenwerken — hoe heet dat?"] },
      { q: "Wat is **oppositie**?", options: ["Partijen buiten de regering","Partijen die samen regeren","De koning en zijn familie","De rechters in Nederland"], answer: 0, wrongHints: [null, "Partijen die samen regeren vormen de coalitie. Hoe heet de rest?", "Het koningshuis staat boven de politiek.", "Rechters horen bij de rechterlijke macht, niet bij de partijen."] },
      { q: "Wat is een **grondrecht**?", options: ["Een recht uit de Grondwet","Een belasting die je betaalt","Een regel voor in het verkeer","Een regel die op school geldt"], answer: 0, wrongHints: [null,"Is een belasting iets wat je mag, of iets wat je moet?","Een verkeersregel is een gewone regel. Wat maakt een grondrecht zo bijzonder?","Een schoolregel geldt alleen op school. Voor wie geldt een grondrecht?"] },
      { q: "Wat doet de **Koning** politiek (NL)?", options: ["Ceremonieel + ondertekent wetten","Beslist alles in het land","Bedenkt en maakt zelf de wetten","Stemt in de Tweede Kamer"], answer: 0, wrongHints: [null,"Mag de koning in Nederland alles zelf beslissen?","Wie maakt in Nederland de wetten?","De Koning stemt nooit — hij staat boven de politiek."] },
      { q: "Wat is **Binnenhof**?", options: ["Gebouwen van het parlement","Paleis van de koning","Gebouw van de Hoge Raad","Een plein in Amsterdam"], answer: 0, wrongHints: [null, "De koning werkt in Paleis Noordeinde. Wie vergadert op het Binnenhof?", "Rechters zitten elders — wie vergadert op het Binnenhof?", "Het Binnenhof ligt in Den Haag."] },
      { q: "Wat is een **referendum**?", options: ["Volk stemt direct over één onderwerp","Verkiezing van kandidaten","Peiling door een krant","Toespraak van de koning"], answer: 0, wrongHints: [null, "Bij een verkiezing kies je personen of partijen. Bij een referendum gaat het om iets anders. Wat?", "Een peiling is een vragenlijst, geen echte stemming.", "Dat is de Troonrede."] },
      { q: "Welke is een **EU-instelling**?", options: ["Europees Parlement","Tweede Kamer","Provinciale Staten","Gemeenteraad"], answer: 0, wrongHints: [null, "De Tweede Kamer is het parlement van Nederland, niet van Europa.", "Provinciaal — binnen Nederland.", "Lokaal — binnen Nederland."] },
      { q: "Wat is een **minister**?", options: ["Hoofd van een ministerie","Hoofd van een gemeente","Hoofd van het koningshuis","Hoofd van een rechtbank"], answer: 0, wrongHints: [null,"Dat is een burgemeester. Waar werkt een minister?","Dat is de koning. Waar werkt een minister?","Dat is de baas van de rechters. Waar werkt een minister?"] },
      { q: "Wat is een **burgemeester**?", options: ["Hoofd van een gemeente","Hoofd van een ministerie","Lid van de Tweede Kamer","Commissaris van de Koning"], answer: 0, wrongHints: [null, "Dat is een minister. Waar is een burgemeester de baas?", "Een Kamerlid werkt in Den Haag voor het hele land. Een burgemeester werkt dichter bij huis. Waar?", "Die leidt een provincie, geen gemeente."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const politiekDemocratiePo = {
  id: "politiek-democratie-po",
  title: "Politiek + democratie (groep 6-8, Doorstroomtoets-stof)",
  emoji: "🗳️",
  level: "groep6-8",
  subject: "geschiedenis",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / staatsinrichting",
  prerequisites: [],
  intro:
    "Politiek + democratie voor groep 6-8 — wat is democratie (volk beslist) + Trias Politica (3 machten) + Koning/kabinet/Tweede Kamer + gemeente/provincie/Europa + Grondwet/grondrechten (Artikel 1). Sluit aan op de Doorstroomtoets wereldoriëntatie / burgerschap. ~15 min.",
  triggerKeywords: [
    "democratie", "politiek",
    "Tweede Kamer", "Eerste Kamer", "kabinet",
    "Koning", "Willem-Alexander", "Prinsjesdag",
    "Grondwet", "grondrechten", "Artikel 1",
    "gemeente", "provincie", "burgemeester",
    "Europese Unie", "euro",
    "verkiezingen", "stemmen",
    "burgerschap",
  ],
  chapters,
  steps,
};

export default politiekDemocratiePo;
