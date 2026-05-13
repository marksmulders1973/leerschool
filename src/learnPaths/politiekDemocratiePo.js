// Leerpad: Politiek + democratie - groep 6-8 wereldoriëntatie.
// PO-versie van nederlandseStaatMaatschappijleer. 1F.
// 6 stappen. Cito-relevant burgerschap.

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
      "**Democratie** = het volk beslist *(uit Grieks: 'demos' = volk, 'kratia' = macht)*.\n\nIn Nederland is **iedereen vanaf 18 jaar** **kiezer** — mag bepalen wie het land bestuurt.\n\n**Hoe gaat het in NL?**\n\n**1. Verkiezingen** *(ongeveer elke 4 jaar)*:\n• Volwassenen gaan naar **stembureau**.\n• Kiezen partij + persoon.\n• Anonieme stem op rood potlood.\n\n**2. Partijen + zetels**:\n• Tweede Kamer heeft **150 zetels** *(stoelen)*.\n• Hoe meer stemmen een partij krijgt, hoe meer zetels.\n• Hoeveel stemmen voor 1 zetel? ~70.000.\n\n**3. Coalitie + kabinet**:\n• Geen enkele partij heeft 76 zetels *(meerderheid alleen)*.\n• Partijen werken samen → **coalitie**.\n• Coalitie maakt **kabinet** *(de regering)*.\n• Premier = minister-president.\n\n**Verschil democratie + dictatuur**:\n\n**Democratie** *(NL, VS, Frankrijk, Duitsland)*:\n• Volk kiest.\n• Meerdere partijen.\n• Vrije media.\n• Rechters onafhankelijk.\n• Mensenrechten beschermd.\n\n**Dictatuur** *(Noord-Korea, China, Rusland)*:\n• Eén leider of partij beslist alles.\n• Geen vrije verkiezingen.\n• Media gecontroleerd.\n• Mensenrechten beperkt.\n\n**Soorten democratie**:\n\n• **Directe democratie**: volk stemt over elk besluit *(bv. Zwitserland — referendum)*.\n• **Indirecte democratie**: volk kiest vertegenwoordigers *(NL, VS, etc.)*.\n• **Constitutionele monarchie**: koning + parlement *(NL, Engeland, Spanje)*.\n• **Republiek**: gekozen president *(VS, Frankrijk, Duitsland)*.\n\n**Cito-feitje**:\nNederland werd democratie in **1848** — toen kwam de grondwet van Thorbecke met algemeen kiesrecht voor mannen *(later vrouwen)*.",
    checks: [
      {
        q: "Wat is **democratie**?",
        options: ["Volk beslist", "Eén leider beslist", "Niets beslist", "Koning beslist"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Dictatuur.", "Geen besluit.", "Niet meer."],
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
          theorie: "Cito-feit: NL is democratie sinds 1848 (grondwet Thorbecke). Vrouwen kregen kiesrecht in 1919. Stemmen mag pas vanaf 18 (niet eerder).",
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
        q: "Hoeveel **zetels** in Tweede Kamer?",
        options: ["150", "100", "300", "10"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Veel meer."],
      },
      {
        q: "Vanaf welke **leeftijd** stemmen NL?",
        options: ["18 jaar", "21 jaar", "16 jaar", "25 jaar"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Vroeger.", "Te jong.", "Te oud."],
      },
      {
        q: "Wat is **coalitie**?",
        options: ["Samenwerking meerdere partijen", "1 partij", "Tegenstanders", "Verkiezing"],
        answer: 0,
        wrongHints: [null, "Klopt — voor meerderheid.", "Onmogelijk in NL.", "Tegenovergesteld.", "Wel relatie maar specifiek dit."],
      },
    ],
  },
  {
    title: "Hoe werkt Nederland — Trias Politica",
    explanation:
      "Nederland werkt met **drie machten** *(uitgevonden door Montesquieu, 1748)*.\n**Trias Politica** = drie machten verdeeld zodat geen één persoon te veel macht krijgt.\n\n**1. Wetgevende macht** *(maakt wetten)*:\n• **Tweede Kamer** *(150 leden, gekozen)*.\n• **Eerste Kamer** *(75 leden, getrapt gekozen)*.\n• **Regering** *(minister-president + ministers)*.\n• Wet wordt **eerst** in Tweede Kamer behandeld, dan Eerste.\n\n**2. Uitvoerende macht** *(voert wetten uit)*:\n• **Regering / kabinet**.\n• **Ministeries** *(Volksgezondheid, Justitie, Onderwijs, Financiën, etc.)*.\n• **Politie** + ambtenaren.\n• Doet wat wet zegt.\n\n**3. Rechterlijke macht** *(controleert + straft)*:\n• **Rechters** *(rechtbank, gerechtshof, Hoge Raad)*.\n• Beoordelen of mensen wet overtreden.\n• Straffen + uitspraak.\n• **Onafhankelijk** van regering — politicus kan rechter niet ontslaan.\n\n**Waarom zo verdeeld?**\nAls 1 persoon alle 3 doet → dictatuur.\n→ Verdeling = **balans + controle**.\n\n**Hoe werkt een wet maken?**\n\n**Stap 1**: minister of Tweede Kamerlid bedenkt voorstel.\n**Stap 2**: voorstel naar Tweede Kamer — debat + amendementen.\n**Stap 3**: Tweede Kamer stemt → meerderheid (76+) eens? → door.\n**Stap 4**: voorstel naar Eerste Kamer — debat.\n**Stap 5**: Eerste Kamer stemt → meerderheid (38+) eens? → wet wordt aangenomen.\n**Stap 6**: Koning ondertekent (formeel) + minister.\n**Stap 7**: wet wordt gepubliceerd in **Staatsblad**.\n**Stap 8**: wet treedt in werking.\n\n**Politieke partijen** belangrijke in NL *(2024)*:\n• **PVV** *(rechts, Wilders)*.\n• **GroenLinks-PvdA** *(links, Klaver)*.\n• **VVD** *(midden-rechts, ondernemers)*.\n• **NSC** *(midden, Pieter Omtzigt)*.\n• **D66** *(midden, progressief)*.\n• **CDA** *(midden, christelijk)*.\n• **BBB** *(boeren)*.\n• **SP** *(links, socialistisch)*.\n• **ChristenUnie** *(christelijk)*.\n• **SGP** *(christelijk-conservatief)*.\n• **FvD** *(rechts)*.\n• **JA21** *(rechts)*.\n• **Volt** *(Europees, jong)*.\n• **Partij voor de Dieren** *(dier + natuur)*.\n• **DENK** *(diversiteit)*.\n\n**Cito-feitje**:\nIn 2023 won de **PVV** voor het eerst de verkiezingen met **37 zetels**. Daarna kabinet-Schoof gevormd in 2024.",
    checks: [
      {
        q: "Wat is **Trias Politica**?",
        options: ["3 machten verdeeld", "1 partij", "Politieagent", "Verkiezing"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenovergesteld.", "Wel relatie maar niet primair.", "Niet primair."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent Trias Politica?", tekst: "**Trias Politica** is Latijns voor 'drie staatsmachten'. Het idee: verdeel de macht in 3 delen, zodat **geen één persoon te veel** macht krijgt." },
            { titel: "De 3 machten in NL", tekst: "1) **Wetgevende macht** (maakt wetten) = Tweede + Eerste Kamer + regering. 2) **Uitvoerende macht** (voert wet uit) = regering + ambtenaren + politie. 3) **Rechterlijke macht** (controleert + straft) = rechters." },
            { titel: "Wie bedacht het?", tekst: "De Franse filosoof **Montesquieu** schreef erover in 1748. Doel: voorkomen dat dictators ontstaan. Alle democratieën gebruiken dit idee nu." },
          ],
          woorden: [
            { woord: "Trias Politica", uitleg: "3 staatsmachten verdeeld." },
            { woord: "wetgevend", uitleg: "Maakt wetten." },
            { woord: "uitvoerend", uitleg: "Voert wetten uit." },
            { woord: "rechterlijk", uitleg: "Controleert + straft." },
          ],
          theorie: "Cito-feit Trias: 3 machten = balans en controle. Rechters mogen niet door politici worden ontslagen (onafhankelijk). Anders zou regering rechters kunnen omkopen.",
          voorbeelden: [
            { type: "stap", tekst: "Wet maken → Tweede Kamer. Wet uitvoeren → minister + politie. Wet overtreden → rechter beslist straf." },
            { type: "stap", tekst: "Trias = TRI (drie) + AS (machten). 3 stoelen, niet 1 troon." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "TRIA = 3. POLITICA = politieke. Drie politieke machten = balans." }],
          niveaus: {
            basis: "Trias Politica = 3 staatsmachten verdeeld (wetgevend/uitvoerend/rechterlijk).",
            simpeler: "Wetten maken, wetten uitvoeren, wetten controleren — 3 aparte groepen.",
            nogSimpeler: "3 machten gescheiden.",
          },
        },
      },
      {
        q: "Wie **maakt wetten**?",
        options: ["Tweede + Eerste Kamer + regering", "Alleen koning", "Politie", "Rechter"],
        answer: 0,
        wrongHints: [null, "Klopt — wetgevend.", "Niet.", "Voert uit.", "Beoordeelt."],
      },
      {
        q: "Wie **straft** misdaad?",
        options: ["Rechter (rechterlijke macht)", "Minister", "Burgemeester", "Iedereen"],
        answer: 0,
        wrongHints: [null, "Klopt — onafhankelijk.", "Uitvoerend.", "Lokaal niet primair.", "Niet."],
      },
      {
        q: "Hoeveel zetels voor **meerderheid** Tweede Kamer?",
        options: ["76 (van 150)", "150", "50", "100"],
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
          theorie: "Cito-formule: meerderheid = (totaal ÷ 2) + 1. Bij 150 = 75 + 1 = 76. Bij Eerste Kamer (75): 37 + 1 = 38.",
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
        wrongHints: [null, "Klopt — net iets meer dan helft.", "Helemaal te veel.", "Te weinig.", "Te veel."],
      },
    ],
  },
  {
    title: "Koning + Tweede Kamer + Regering",
    explanation:
      "**Constitutionele monarchie** = koning + grondwet + parlement.\n\n**De Koning** 👑\n\n• Sinds 2013: **Willem-Alexander** *(geboren 1967)*.\n• Koningin: **Máxima** *(uit Argentinië)*.\n• Troonsopvolgster: **prinses Amalia** *(geboren 2003)*.\n\n**Wat doet de koning?**\n• **Toespraak Prinsjesdag** *(3e dinsdag september)* — Troonrede over plannen kabinet.\n• **Ondertekent** alle wetten *(formeel)*.\n• **Adviseert** premier in wekelijks gesprek.\n• **Vertegenwoordigt** NL bij staatsbezoeken.\n• **Geen politieke macht** *(grondwettelijk beperkt)*.\n\n**Koningsdag**: 27 april — verjaardag Willem-Alexander. Hele NL viert, kleding oranje, koningsspelen op scholen.\n\n**Het kabinet** 🏛️\n\n• Wordt **gevormd na verkiezingen**.\n• **Informateur** *(meestal ervaren politicus)* onderzoekt mogelijke coalitie.\n• **Formateur** maakt definitief kabinet.\n• Bestaat uit:\n  - **Minister-president** *(premier)* — leider kabinet.\n  - **Ministers** *(1 per departement: Onderwijs, Defensie, Justitie, etc.)*.\n  - **Staatssecretarissen** *(assistenten ministers)*.\n• Vergadert wekelijks in **Catshuis** *(privé)* + **Trêveszaal** *(formeel)*.\n\n**Premier 2024**: **Dick Schoof** *(eerst NCTV-baas, niet uit partij)*.\n\n**Tweede Kamer** 🏛️\n\n• **150 leden** *(Kamerleden / parlementariërs)*.\n• Vergadert in **plenaire zaal Den Haag**.\n• Debatteert wetten.\n• **Controleert** kabinet: stelt vragen, kan motie indienen.\n• Voorzitter: **Martin Bosma** *(2024)*.\n\n**Hoe controleert Kamer kabinet?**\n• **Schriftelijke vragen** aan minister.\n• **Debat** in Kamer.\n• **Motie** *(uitspraak Kamer)*:\n  - Aangenomen door meerderheid → minister moet luisteren.\n  - **Motie van wantrouwen** → minister moet aftreden.\n\n**Eerste Kamer** 🏛️\n\n• **75 leden** *(senatoren)*.\n• Getrapt gekozen via **Provinciale Staten**.\n• Controleert wetten op **kwaliteit** *(niet politiek)*.\n• Kan wet **terugsturen** maar niet wijzigen.\n• Vergadert dinsdagen.\n\n**Cito-feitje**:\nDe Koning **stemt niet** in Tweede Kamer of bij verkiezingen — als staatshoofd moet hij **boven politiek** staan.",
    checks: [
      {
        q: "Wie is **koning NL** sinds 2013?",
        options: ["Willem-Alexander", "Beatrix", "Amalia", "Maxima"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Vorige, abdiceerde.", "Troonsopvolger.", "Koningin."],
      },
      {
        q: "Wat is **Prinsjesdag**?",
        options: ["Koning leest plannen kabinet voor", "Koningsfeestje", "Voetbalwedstrijd", "Verkiezing"],
        answer: 0,
        wrongHints: [null, "Klopt — 3e dinsdag sept.", "Niet specifiek.", "Niet.", "Niet."],
      },
      {
        q: "Wat is een **motie van wantrouwen**?",
        options: ["Kamer eist aftreden minister", "Lof", "Verkiezing", "Wet"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenovergesteld.", "Niet primair.", "Niet specifiek."],
      },
      {
        q: "Wie controleert **wetkwaliteit**?",
        options: ["Eerste Kamer", "Tweede Kamer", "Koning", "Politie"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Politiek.", "Geen rol.", "Niet."],
      },
    ],
  },
  {
    title: "Gemeente + provincie + Europa",
    explanation:
      "Er zijn **vier lagen** van bestuur in NL.\n\n**1. Gemeente** 🏘️ *(stad of dorp)*:\n• Lokaal niveau.\n• 342 gemeenten in NL *(2024)*.\n• Eigen **gemeenteraad** *(gekozen elke 4 jaar)*.\n• Eigen **burgemeester** *(benoemd, niet gekozen — door Koning op voordracht)*.\n• Eigen **wethouders** *(zoals ministers, maar lokaal)*.\n• Verantwoordelijk voor: **vuilnis**, paspoorten, parkeren, **bouwvergunningen**, scholen, lokale wegen, sport, cultuur.\n• Belasting: gemeentebelasting *(OZB, hondenbelasting, etc.)*.\n\n**2. Provincie** 🏞️ *(12 in NL)*:\n• **Drenthe, Flevoland, Friesland, Gelderland, Groningen, Limburg, Noord-Brabant, Noord-Holland, Overijssel, Utrecht, Zeeland, Zuid-Holland**.\n• Eigen **Provinciale Staten** *(gekozen)*.\n• Eigen **commissaris van de Koning** *(benoemd)*.\n• Verantwoordelijk voor: **provinciale wegen**, openbaar vervoer regio, ruimtelijke ordening, natuur, water *(samen met waterschap)*.\n• Belasting: opcenten motorrijtuigenbelasting.\n\n**3. Nationale overheid** 🇳🇱:\n• Regering + parlement *(Den Haag)*.\n• Belastingen, defensie, onderwijs-niveaus, justitie, buitenlands beleid.\n\n**4. Europese Unie** 🇪🇺:\n• 27 landen lid.\n• NL is lid sinds **1957** *(toen nog EEG)*.\n• **Europees Parlement** *(720 leden, NL heeft 31)*.\n• **Europese Commissie** *(uitvoerend)*.\n• **Raad van EU** *(landen-vertegenwoordiging)*.\n• Wetten in NL moeten passen bij EU-wetten.\n• **Euro** *(€)* sinds 2002 — gemeenschappelijke munt.\n• **Schengen-gebied**: open grenzen tussen 26 landen.\n\n**Waterschappen** 💧 *(extra laag, NL-uniek)*:\n• 21 waterschappen.\n• Verantwoordelijk voor **dijken, water-niveau, schoon water**.\n• Oudste democratische instituten van NL *(soms 800 jaar)*.\n• Eigen verkiezingen *(elke 4 jaar)*.\n• Belasting: waterschapsbelasting.\n\n**Verkiezingen** in NL:\n• **Gemeenteraad**: elke 4 jaar *(2026 volgende)*.\n• **Provinciale Staten + Waterschap**: tegelijk, elke 4 jaar *(2023 laatste)*.\n• **Tweede Kamer**: elke 4 jaar *(2023 laatste, 2028 volgende?)*.\n• **Eerste Kamer**: getrapt via Provinciale Staten.\n• **Europees Parlement**: elke 5 jaar *(2024 laatste)*.\n\n**Cito-feitje**:\nNL is een **decentrale eenheidsstaat** — er is wel centrale regering, maar **gemeenten + provincies** hebben **eigen democratie + bevoegdheden**. Niet zoals VS *(federaal, sterke staten)* of Frankrijk *(centraal, sterke regering)*.",
    checks: [
      {
        q: "Hoeveel **provincies** in NL?",
        options: ["12", "10", "11", "13"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Iets minder.", "Iets minder.", "Iets meer."],
      },
      {
        q: "Wie kiest **burgemeester**?",
        options: ["Benoemd door Koning op voordracht", "Inwoners", "Wethouders", "Niemand"],
        answer: 0,
        wrongHints: [null, "Klopt — niet direct gekozen.", "In NL niet.", "Niet primair.", "Wel."],
      },
      {
        q: "Wanneer **euro** ingevoerd?",
        options: ["2002", "1957", "1990", "2010"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Eerder.", "Eerder.", "Veel later."],
      },
      {
        q: "Wat doet **waterschap**?",
        options: ["Dijken + water-niveau + schoon water", "Wegen", "Belasting", "Scholen"],
        answer: 0,
        wrongHints: [null, "Klopt — NL-unieke laag.", "Niet primair.", "Wel maar specifiek dit.", "Niet."],
      },
    ],
  },
  {
    title: "Grondwet + grondrechten",
    explanation:
      "**Grondwet** = belangrijkste wet van NL. Andere wetten mogen niet ingaan tegen grondwet.\n\n**NL Grondwet**:\n• Eerste in 1815 *(na Napoleon)*.\n• Grote update **1848** door **Thorbecke** *(belangrijke politicus)* — democratie.\n• Recente herziening **1983** *(huidige versie)*.\n• 142 artikelen in 8 hoofdstukken.\n\n**Klassieke grondrechten** *(je MAG)*:\n\n• **Vrijheid van godsdienst** *(art. 6)*: gelovig of niet-gelovig, mag je kiezen.\n• **Vrijheid van meningsuiting** *(art. 7)*: zeggen wat je denkt *(binnen wet)*.\n• **Vergaderrecht + demonstratierecht** *(art. 9)*: protest mag.\n• **Vereniging** *(art. 8)*: club oprichten mag.\n• **Onschendbaarheid lichaam** *(art. 11)*: niet zomaar aangeraakt.\n• **Onschendbaarheid woning** *(art. 12)*: politie heeft huiszoekingsbevel nodig.\n• **Briefgeheim** *(art. 13)*: jouw post + e-mails zijn van jou.\n• **Discriminatie verboden** *(art. 1)*: gelijke behandeling.\n\n**Sociale grondrechten** *(staat moet zorgen voor)*:\n\n• **Werkgelegenheid** *(art. 19)*: staat moet werken stimuleren.\n• **Onderwijs** *(art. 23)*: vrijheid van onderwijs + recht op gratis basisonderwijs.\n• **Volksgezondheid** *(art. 22)*: zorg voor gezondheid.\n• **Sociale zekerheid** *(art. 20)*: uitkering bij nood.\n\n**Artikel 1 GW** *(beroemd)*:\n*'Allen die zich in Nederland bevinden, worden in gelijke gevallen gelijk behandeld. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht of op welke grond dan ook, is niet toegestaan.'*\n\n**Verschil grondrecht en mensenrecht**:\n• **Grondrecht** = in NL Grondwet *(geldt in NL)*.\n• **Mensenrecht** = wereldwijd, in **Universele Verklaring van de Rechten van de Mens** *(VN, 1948)*.\n• NL ondertekent ook **EVRM** *(Europees, Straatsburg)*.\n\n**Bekende mensenrechten**:\n• Recht op leven.\n• Geen marteling.\n• Geen slavernij.\n• Vrijheid van denken + gezin + eigendom.\n• Recht op onderwijs.\n• Recht op vrije pers.\n\n**Soms conflict tussen grondrechten**:\n• Vrijheid van meningsuiting vs discriminatie verboden.\n• Vrijheid van godsdienst vs gelijke behandeling.\n• Rechter beslist in concrete zaken.\n\n**Cito-feitje**:\nNederland is **medeoprichter** van VN (1945), EU (1957), EVRM (1953) en veel andere internationale organisaties. Den Haag is **hoofdstad van internationaal recht** met **Internationaal Strafhof** + **Vredespaleis**.",
    checks: [
      {
        q: "Wat is **Artikel 1 Grondwet**?",
        options: ["Verbod op discriminatie", "Recht op auto", "Recht op huis", "Plicht naar school"],
        answer: 0,
        wrongHints: [null, "Klopt — gelijke behandeling.", "Niet.", "Niet specifiek.", "Sociaal grondrecht."],
      },
      {
        q: "Wat is een **klassiek grondrecht**?",
        options: ["Wat je MAG (vrijheid)", "Wat je MOET (verplichting)", "Belasting", "Toets"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet primair.", "Niet.", "Niet."],
      },
      {
        q: "Wat is **briefgeheim**?",
        options: ["Post + email niet zomaar lezen door anderen", "Geheime brief", "Niet schrijven", "Code"],
        answer: 0,
        wrongHints: [null, "Klopt — art. 13.", "Niet.", "Tegenovergesteld.", "Niet."],
      },
      {
        q: "Sinds welk jaar **algemeen mannenkiesrecht**?",
        options: ["1917", "1848", "1900", "2000"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Thorbecke maar alleen rijke mannen.", "Te vroeg.", "Te laat."],
      },
    ],
  },
  {
    title: "Eind-toets — politiek mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wat is **democratie**?", options: ["Volk beslist", "Eén leider", "Geen besluit", "Koning beslist"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet meer."] },
      { q: "Hoeveel **Tweede Kamerleden**?", options: ["150", "75", "300", "10"], answer: 0, wrongHints: [null, "Klopt.", "Eerste Kamer.", "Te veel.", "Te weinig."] },
      { q: "Wat is **Prinsjesdag**?", options: ["Troonrede 3e dinsdag sept", "Koningsdag", "Verkiezing", "Feest"], answer: 0, wrongHints: [null, "Klopt.", "Andere dag.", "Niet.", "Niet specifiek."] },
      { q: "Hoeveel **provincies**?", options: ["12", "11", "13", "16"], answer: 0, wrongHints: [null, "Klopt.", "Iets minder.", "Iets meer.", "Te veel."] },
      { q: "**Artikel 1 Grondwet** = ?", options: ["Verbod op discriminatie", "Recht op auto", "Vrijheid", "Onderwijs"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Wel maar niet artikel 1.", "Sociaal."] },
      { q: "Wanneer **euro** in NL?", options: ["2002", "1957", "1980", "1990"], answer: 0, wrongHints: [null, "Klopt.", "EEG.", "Eerder.", "Eerder."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const politiekDemocratiePo = {
  id: "politiek-democratie-po",
  title: "Politiek + democratie (Cito groep 6-8)",
  emoji: "🗳️",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / staatsinrichting",
  prerequisites: [],
  intro:
    "Politiek + democratie voor groep 6-8 — wat is democratie (volk beslist) + Trias Politica (3 machten) + Koning/kabinet/Tweede Kamer + gemeente/provincie/Europa + Grondwet/grondrechten (Artikel 1). Sluit aan op Cito wereldoriëntatie / burgerschap. ~15 min.",
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
