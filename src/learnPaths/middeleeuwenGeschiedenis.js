// Leerpad: De middeleeuwen — klas 1-2 onderbouw VO.
// Onderdeel geschiedenis Europa. Referentieniveau 2F.
// 6 stappen met uitlegPad. Mark's continuum-visie.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  goud: "#ffd54f",
  steen: "#9e9e9e",
  zwaard: "#80cbc4",
  kerk: "#9575cd",
  highlight: "#ff7043",
};

const stepEmojis = ["🏰", "⛪", "⚔️", "🌾", "🦠", "🏆"];

const chapters = [
  { letter: "A", title: "Wat zijn de middeleeuwen?", emoji: "🏰", from: 0, to: 0 },
  { letter: "B", title: "Kerk en macht", emoji: "⛪", from: 1, to: 1 },
  { letter: "C", title: "Ridders + kruistochten", emoji: "⚔️", from: 2, to: 2 },
  { letter: "D", title: "Boeren + horigen + steden", emoji: "🌾", from: 3, to: 3 },
  { letter: "E", title: "Pest + einde middeleeuwen", emoji: "🦠", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function tijdslijnSvg() {
  return `<svg viewBox="0 0 320 160">
<rect x="0" y="0" width="320" height="160" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Middeleeuwen — globale tijdlijn</text>
<line x1="20" y1="85" x2="300" y2="85" stroke="${COLORS.goud}" stroke-width="2"/>
<circle cx="30" cy="85" r="6" fill="${COLORS.goud}"/>
<text x="30" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">500</text>
<text x="30" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Romeinen weg</text>
<circle cx="110" cy="85" r="6" fill="${COLORS.goud}"/>
<text x="110" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">800</text>
<text x="110" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Karel de Grote</text>
<circle cx="190" cy="85" r="6" fill="${COLORS.goud}"/>
<text x="190" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">1095-1291</text>
<text x="190" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Kruistochten</text>
<circle cx="290" cy="85" r="6" fill="${COLORS.goud}"/>
<text x="290" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">1500</text>
<text x="290" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Einde</text>
<text x="160" y="148" text-anchor="middle" fill="${COLORS.highlight}" font-size="11" font-family="Arial" font-style="italic">500-1500 — ongeveer 1000 jaar</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat zijn middeleeuwen?
  {
    title: "Wat zijn de middeleeuwen?",
    explanation:
      "De **middeleeuwen** zijn de **1000 jaar tussen 500 en 1500** na Christus.\n\nDe naam **'middel-eeuwen'** komt van de tijd **midden tussen** de Romeinse Oudheid en de Nieuwe Tijd *(Renaissance)*.\n\n**3 periodes**:\n• **Vroege middeleeuwen** *(500-1000)* — chaos na ondergang Romeinse Rijk.\n• **Hoge middeleeuwen** *(1000-1300)* — bloeiende periode met steden, kruistochten.\n• **Late middeleeuwen** *(1300-1500)* — crises (pest, oorlog), maar einde aan met Renaissance.\n\n**Wat gebeurde in Europa?**\n• Romeinse Rijk viel in 476.\n• Verschillende volkeren *(Germanen, Vikingen, Franken)* trekken door Europa.\n• **Karel de Grote** *(742-814)* — krijgt grote rijk, kroning 800 in Rome.\n• **Christendom** verspreidt zich over heel Europa.\n• **Adel + ridders** waren machtigste.\n• **Kerk** was middelpunt van dagelijks leven.\n\n**Hoe leefden mensen?**\n• Meeste mensen waren **boer** *(90%)*.\n• Geen koffie, geen aardappel *(kwam later uit Amerika)*, geen suiker *(luxe)*.\n• Weinig **boeken** *(handgeschreven, peperduur)*.\n• Veel mensen **konden niet lezen of schrijven**.\n• Levensverwachting: ~30-40 jaar.\n\n**Was alles donker en arm?**\nNiet helemaal! Termen als 'donkere middeleeuwen' zijn deels mythe:\n• Wél: weinig wetenschap zoals in Romeinse tijd.\n• Wél: veel onzekerheid + oorlog.\n• Maar: prachtige **kathedralen** gebouwd *(Notre-Dame)*.\n• **Universiteiten** opgericht *(Parijs, Bologna)*.\n• Steden + handel groeiden vanaf 1100.\n• **Kennis** bewaard in kloosters door monniken.\n\n**Cito-feitje**:\nDe term 'middeleeuwen' was bedacht in de **Renaissance** *(15e-16e eeuw)* — toen vond men de eigen tijd 'beter dan de duistere middeleeuwen'. Een mythe die nog steeds soms gebruikt wordt.",
    svg: tijdslijnSvg(),
    checks: [
      {
        q: "Wanneer waren de **middeleeuwen** ongeveer?",
        options: ["500-1500", "100-500", "1500-2000", "0-1000"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te vroeg.", "Te laat.", "Te kort en deels Romeinse tijd."],
      },
      {
        q: "Hoeveel **jaar duurden** de middeleeuwen?",
        options: ["~1000 jaar", "~100 jaar", "~500 jaar", "~2000 jaar"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te kort.", "Te kort.", "Te lang."],
      },
      {
        q: "Wat is **gemeen aan 90% van middeleeuwers**?",
        options: ["Waren boer", "Waren rijk", "Konden lezen", "Reisden veel"],
        answer: 0,
        wrongHints: [null, "Klopt — meeste mensen werkten op land.", "Weinigen waren rijk.", "Velen konden niet lezen.", "Reizen was duur."],
      },
      {
        q: "Wie was **Karel de Grote**?",
        options: ["Koning Frankenrijk + keizer rond 800", "Pestslachtoffer", "Ridder", "Kunstenaar"],
        answer: 0,
        wrongHints: [null, "Klopt — gekroond in Rome.", "Niet specifiek.", "Was meer dan ridder.", "Geen kunstenaar."],
      },
    ],
  },

  // STAP 2: Kerk en macht
  {
    title: "Kerk en macht — het feodale systeem",
    explanation:
      "In de middeleeuwen waren de **kerk** en **adel** de twee machtigste groepen.\n\n**Het feodale systeem** *(uit je hoofd!)*:\nEen piramide van macht en bezit.\n\n• **Koning / Keizer** — top van piramide.\n• **Hoge adel** *(hertogen, graven)* — kregen land van koning.\n• **Lage adel** *(ridders)* — kregen klein stukje land.\n• **Boeren + horigen** — werkten op land van adel.\n• **Slaven** — minste rechten *(maar weinig in West-Europa)*.\n\n**Ruil-systeem**:\n• Adel geeft **bescherming** + land aan boeren.\n• Boeren geven **werk** + deel van oogst aan adel.\n• Adel geeft **trouw** aan koning.\n• Koning geeft **macht/land** aan adel.\n\n**De Kerk**:\n• **Rooms-Katholieke Kerk** beheerste heel West-Europa.\n• **Paus** in Rome = belangrijkste leider.\n• **Bisschoppen** + **pastoors** in elke streek.\n• **Kloosters** — monniken/nonnen bewaarden kennis, schreven boeken over.\n• Kerk had **eigen land** + verzamelde **tienden** *(10% van inkomen)*.\n\n**Wat deed kerk voor het volk?**\n• Doop, huwelijk, begrafenis.\n• **Onderwijs** *(klein deel)*.\n• Ziekenzorg *(eerste 'ziekenhuizen')*.\n• Armenhulp.\n• Maar ook: **straffen tegen 'ketters'** *(mensen met andere geloof)*.\n\n**Cito-vraag**:\n*'Waarom was Kerk zo machtig in middeleeuwen?'*\n→ Iedereen geloofde dat de Kerk de toegang tot de hemel beheerste. Plus: Kerk had veel **geld en land**.\n\n**Klooster — wat deden ze?**\n• Monniken **kopieerden** Bijbels + Latijnse boeken *(eerste 'fotokopieerders')*.\n• Klooster-bibliotheken bewaarden kennis uit oudheid.\n• Kloosters maakten **bier, wijn, kruidenmedicijnen**.\n• Bekende kloosters: Cluny (Frankrijk), Citeaux, Mont-Saint-Michel.\n\n**Belangrijke termen**:\n• **Feodalisme** = systeem van land + trouw.\n• **Leenheer** = die land uitleent.\n• **Vazal** = die land in leen krijgt.\n• **Horige** = boer gebonden aan land *(niet vrij weg te gaan)*.",
    checks: [
      {
        q: "Wie was de **machtigste** in middeleeuwen?",
        options: ["Koning + Kerk", "Boeren", "Ridders", "Burgers in steden"],
        answer: 0,
        wrongHints: [null, "Klopt — geestelijk + wereldlijk macht.", "Hadden weinig macht.", "Hadden beetje, maar adel + kerk meest.", "Steden kwamen pas later op."],
      },
      {
        q: "Wat is een **vazal**?",
        options: ["Iemand die land in leen krijgt", "Boer", "Koning", "Monnik"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geen vazal.", "Geeft juist leen uit.", "Niet feodaal."],
      },
      {
        q: "Wat zijn **tienden**?",
        options: ["10% inkomen aan Kerk", "10% korting", "10e zoon", "Tien jaar straf"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geen korting.", "Geen familieding.", "Geen straf."],
      },
      {
        q: "Wat deden **monniken** in kloosters?",
        options: ["Kopieerden boeken + bewaarden kennis", "Reisden de wereld", "Vochten oorlog", "Werkten op markt"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Reden niet.", "Geen vechten.", "Niet markt."],
      },
    ],
  },

  // STAP 3: Ridders + kruistochten
  {
    title: "Ridders, kastelen en kruistochten",
    explanation:
      "**Ridders** waren de gewapende krijgers van de middeleeuwen.\n\n**Wat is een ridder?**\n• Edelman met **paard, harnas, zwaard, lans**.\n• Werd opgeleid van jongs af aan *(eerst page, dan schildknaap, dan ridder)*.\n• Bewees **dapperheid** in oorlog of toernooi.\n• Werd geslagen tot ridder met zwaard *(ceremonie)*.\n\n**Kastelen**:\n• **Verdedigingsbouwwerk** van steen *(of eerst hout)*.\n• Op heuvel of in moeras.\n• **Slotgracht** + ophaalbrug.\n• Hoge muren + torens.\n• Binnen: woonhuis adel + soldaten + bedienden.\n\n**Cultuur van ridders — 'hoofse' regels**:\n• **Trouw** aan koning.\n• **Bescherming van zwakkeren** *(in theorie)*.\n• **Eer + dapperheid** boven veiligheid.\n• Respect voor **vrouwen van hogere stand**.\n• Vaak in praktijk: gewoon vechten voor land + buit.\n\n**De Kruistochten** *(1095-1291)*:\nReeks oorlogen waarbij Europese ridders **naar het Heilige Land** *(Jeruzalem, huidige Israël)* trokken om het terug te 'veroveren' op moslims.\n\n**Waarom kruistochten?**\n1. **Religie** — paus Urbanus II riep op om Jeruzalem te 'bevrijden' (1095).\n2. **Handel** — meer kennis + producten uit Midden-Oosten.\n3. **Macht** — adel zocht land + roem.\n4. **Boete** voor zonden — wie meedeed kwam dichter bij hemel.\n\n**Resultaten van kruistochten**:\n• Korte tijd **kruisvaarders-staten** in Heilige Land.\n• Veel geweld tegen moslims, joden, oosters-christenen.\n• **Handel** met oosten begon te bloeien *(specerijen)*.\n• Kennis uit oosten naar Europa *(wiskunde, geneeskunde, sterrenkunde)*.\n• Maar **moslimwereld kreeg langdurige schade** + nieuwe vijandbeelden ontstaan.\n\n**Cito-feitje**:\nDe **eerste kruistocht** *(1096-1099)* veroverde Jeruzalem. Maar de moslims, geleid door **Saladin**, namen het in 1187 weer terug.\n\n**Belangrijke termen**:\n• **Heilige Land** = Israël/Palestina, plek waar Jezus leefde.\n• **Saracenen** = middeleeuwse term voor moslims.\n• **Ridderorde** = militair-religieuze groep *(Tempeliers, Hospitaalridders)*.",
    checks: [
      {
        q: "Wat hadden ridders **als wapens**?",
        options: ["Paard, harnas, zwaard, lans", "Pistool", "Atoombom", "Geen wapens"],
        answer: 0,
        wrongHints: [null, "Klopt — middeleeuwse uitrusting.", "Vuurwapens kwamen pas later.", "Geen middeleeuws.", "Wel."],
      },
      {
        q: "Waarom waren er **kruistochten**?",
        options: ["Religie + macht + land", "Olie", "Goud", "Klimaat"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geen olie destijds.", "Geen goud-doel.", "Geen klimaat."],
      },
      {
        q: "Waar gingen de kruisvaarders **heen**?",
        options: ["Heilige Land (Jeruzalem)", "Amerika", "China", "Afrika"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet ontdekt nog.", "Niet kruistochten.", "Niet specifiek."],
      },
      {
        q: "Wie won uiteindelijk **Jeruzalem terug** voor de moslims in 1187?",
        options: ["Saladin", "Karel de Grote", "Richard Leeuwenhart", "Mohammed"],
        answer: 0,
        wrongHints: [null, "Klopt — Egyptische sultan.", "Eerdere periode.", "Tegenstander, hij verloor.", "Mohammed was 500 jaar eerder."],
        uitlegPad: {
          stappen: [
            { titel: "Saladin", tekst: "Saladin (1138-1193) was een sultan van Egypte/Syrië die de kruisvaarder-staten versloeg en Jeruzalem heroverde in 1187." },
          ],
          woorden: [{ woord: "sultan", uitleg: "Moslim-koning of -heerser." }],
          theorie: "Saladin staat bekend als groot strateeg en eerlijke leider.",
          voorbeelden: [{ type: "stap", tekst: "Slag van Hattin (1187) waar Saladin de kruisvaarders versloeg." }],
          basiskennis: [{ onderwerp: "Beroemd", uitleg: "Saladin werd ook door tegenstanders gerespecteerd voor zijn rechtvaardigheid." }],
          niveaus: {
            basis: "Saladin. A.",
            simpeler: "Saladin was de sultan van Egypte die in 1187 Jeruzalem heroverde op de kruisvaarders. = A.",
            nogSimpeler: "Saladin = A.",
          },
        },
      },
    ],
  },

  // STAP 4: Boeren + horigen + steden
  {
    title: "Boeren, horigen en steden",
    explanation:
      "**Boeren** waren 90% van middeleeuwse samenleving. Hoe leefden ze?\n\n**Een dag van een boer**:\n• Op met de zon, werken op land tot zonsondergang.\n• **Werk** = ploegen, zaaien, oogsten, vee verzorgen.\n• Eten: **brood + bier + ui + bonen + soms vlees**.\n• Wonen in **klein houten huis met strodak** *(1 kamer voor mens + dier)*.\n• **Geen scholing**, geen reizen, geen vakantie.\n\n**Horigen**:\n• **Niet vrij** — gebonden aan land van adel.\n• Mochten **niet weggaan** zonder toestemming.\n• Werkten 3-5 dagen per week voor heer.\n• Eigen stuk grond om voor zichzelf te zorgen.\n• Niet hetzelfde als slaaf — hadden wat rechten *(eigen oogst houden)*.\n\n**Vrije boeren**:\n• Niet gebonden aan een heer.\n• Mochten reizen, trouwen vrij.\n• Hadden meer rechten — maar nog steeds armoede.\n\n**Steden in de hoge middeleeuwen** *(vanaf ~1100)*:\nVerschijnen door:\n• **Handel** — koopmannen verzamelen.\n• **Veiligere routes** — minder rover.\n• **Bevolkingsgroei** — meer mensen, sommige wegtrekken naar stad.\n\n**Stadsleven**:\n• **Stadsmuren** voor verdediging.\n• **Marktplein** in midden.\n• **Gilden** = beroepsverenigingen *(bakkers, kleermakers, smeden)*.\n• **Burgers** = inwoners stad, hadden **meer rechten** dan boeren.\n• \"Stadslucht maakt vrij\" — wie een jaar+1 dag in stad woonde was vrij van horigheid!\n\n**Beroemde middeleeuwse steden**:\n• **Brugge** *(België)* — handelscentrum.\n• **Florence** *(Italië)* — bankieren.\n• **Parijs** — universiteit + koningshof.\n• **Londen**, **Keulen**, **Hamburg**.\n• In Nederland: **Utrecht**, **Dordrecht**, **Maastricht** *(vroege steden)*.\n\n**Gilden — wat waren dat?**\n• Verenigingen van vakmensen.\n• **Bepaalden prijzen + kwaliteit** *(geen concurrentie)*.\n• Wie wilde leerling worden, moest door **3 fases**: leerjongen → gezel → meester.\n• Mate van eer en respect.\n\n**Cito-feitje**:\nDe **eerste universiteit** in Europa was **Bologna** (Italië, 1088), gevolgd door Parijs (1150). Nederland kreeg **Leiden** als eerste universiteit *(1575 — net na middeleeuwen)*.",
    checks: [
      {
        q: "Wie waren **horigen**?",
        options: ["Niet-vrije boeren, gebonden aan land", "Slaven", "Ridders", "Burgers in stad"],
        answer: 0,
        wrongHints: [null, "Klopt — niet vrij, maar wel meer rechten dan slaaf.", "Iets anders.", "Geen ridder.", "Stadsburgers waren vrij."],
      },
      {
        q: "Wat is een **gilde**?",
        options: ["Beroepsvereniging in stad", "Soort slot", "Soort munt", "Soort eten"],
        answer: 0,
        wrongHints: [null, "Klopt — bakkers, kleermakers, smeden.", "Niet slot.", "Niet munt.", "Niet eten."],
      },
      {
        q: "Hoe word je **meester** in een gilde?",
        options: ["Leerjongen → gezel → meester", "Geld betalen", "Op zoek gaan", "Toets doen"],
        answer: 0,
        wrongHints: [null, "Klopt — 3 fases.", "Niet alleen geld.", "Niet zoeken.", "Werk + leer-jaren."],
      },
      {
        q: "Wat betekent 'stadslucht maakt **vrij**'?",
        options: ["Jaar+dag in stad = vrij van horigheid", "Lucht in stad gezond", "Stadsmensen rijk", "Gratis brood"],
        answer: 0,
        wrongHints: [null, "Klopt — middeleeuwse regel.", "Eigenlijk vies door drukte.", "Niet allemaal.", "Niet bedoeld."],
      },
    ],
  },

  // STAP 5: Pest + einde
  {
    title: "Zwarte Dood + einde middeleeuwen",
    explanation:
      "In **1347-1352** brak een verschrikkelijke **pandemie** uit in Europa: de **Zwarte Dood** *(builenpest)*.\n\n**Wat was de pest?**\n• **Ziekte veroorzaakt door bacterie** *(Yersinia pestis)*.\n• Overgedragen door **vlooien op ratten**.\n• Vlooi steekt mens → infectie.\n• Symptomen: **zwarte builen** op huid, hoge koorts, dood binnen 3-5 dagen.\n\n**Hoe kwam het naar Europa?**\n• Van **Azië** via handelsroutes.\n• Eerst Italië *(via Genuese schepen 1347)*.\n• Daarna verspreidde het zich snel — schepen + handel.\n\n**Hoeveel doden?**\n• In Europa: **30-60%** van bevolking *(80-100 miljoen)* stierf.\n• Sommige streken bijna leeg.\n• Geen familie ontkwam — kinderen, ouderen, rijk, arm.\n\n**Gevolgen**:\n• **Massale dood** — leeggekomen dorpen.\n• **Boeren tekort** — overgebleven boeren konden hoger loon vragen.\n• **Einde feodalisme** begon — adel had minder grip op boeren.\n• **Antisemitisme** — Joden vaak onterecht beschuldigd ('zij hebben de bronnen vergiftigd').\n• **Religie** — sommigen werden vroomer, anderen wantrouwden de Kerk.\n• **Kunst** werd somber — 'memento mori' *(denk aan de dood)*.\n\n**Andere problemen 14e-15e eeuw**:\n• **Honger** door slechte oogsten *(klein klimaatverandering)*.\n• **100-jarige oorlog** *(1337-1453)* tussen Engeland en Frankrijk.\n• **Schisma** in de Kerk — meerdere pausen tegelijk.\n• **Boeren-opstanden** tegen adel.\n\n**Wat eindigde de middeleeuwen?**\nHistorici noemen meestal **1453** of **1492** of **1500**:\n• **1453**: val Constantinopel *(Byzantijnse Rijk verovert door Ottomanen)*.\n• **1492**: Columbus 'ontdekt' Amerika — opening nieuwe wereld.\n• **~1450**: boekdrukkunst uitgevonden door **Gutenberg** *(Duits)*.\n• **~1500**: Renaissance bloeit volop in Italië.\n\n**Renaissance** = 'wedergeboorte' van oude Romeinse/Griekse kennis. Begin moderne tijd.\n\n**Cito-feitje**:\nBoekdrukkunst van Gutenberg veranderde de wereld — boeken werden goedkoop, kennis verspreidde zich snel. **Eerste gedrukte boek**: Bijbel (1455).",
    checks: [
      {
        q: "Wat was de **Zwarte Dood**?",
        options: ["Pest-pandemie (1347-1352)", "Heks-jacht", "Oorlog", "Klimaatverandering"],
        answer: 0,
        wrongHints: [null, "Klopt — builenpest.", "Niet de pest.", "Geen oorlog.", "Wel beetje, maar pest is de Zwarte Dood."],
      },
      {
        q: "Hoeveel **% van Europa** stierf aan pest?",
        options: ["30-60%", "5%", "100%", "1%"],
        answer: 0,
        wrongHints: [null, "Klopt — verschrikkelijk veel.", "Veel meer.", "Niet alles.", "Veel meer."],
      },
      {
        q: "Wat **droeg** de pest over op mensen?",
        options: ["Vlooien op ratten", "Vogels", "Wind", "Eten"],
        answer: 0,
        wrongHints: [null, "Klopt — Yersinia pestis bacterie.", "Niet primair.", "Niet primair.", "Niet primair."],
      },
      {
        q: "Wie vond de **boekdrukkunst** uit?",
        options: ["Gutenberg (~1450)", "Edison", "Da Vinci", "Newton"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Veel later.", "Wel uitvinder maar niet boekdrukkunst.", "Veel later."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Eind-opdracht — middeleeuwen mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: feodalisme, kerk, ridders, pest, einde.\n\nVeel succes!",
    checks: [
      {
        q: "Wanneer waren de middeleeuwen ongeveer?",
        options: ["500-1500", "0-500", "1500-2000", "100-1000"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te vroeg.", "Te laat.", "Te kort."],
      },
      {
        q: "Wie was **Karel de Grote**?",
        options: ["Keizer rond 800", "Boer", "Pest-slachtoffer", "Ridder Templer"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te specifiek.", "Te laat.", "Niet ridder-Templer."],
      },
      {
        q: "Welke groep had **3-fasen-opleiding** in stad?",
        options: ["Gildenleden", "Boeren", "Adellijke dochters", "Monniken"],
        answer: 0,
        wrongHints: [null, "Klopt — leerjongen → gezel → meester.", "Boeren hadden geen opleiding.", "Niet vakopleiding.", "Andere route."],
      },
      {
        q: "Wat was de **Zwarte Dood**?",
        options: ["Pest 1347-1352", "Een ridder", "Een kerk", "Een berg"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet ridder.", "Niet kerk.", "Niet berg."],
      },
      {
        q: "In welk jaar **vielde Constantinopel** *(einde middeleeuwen-markpunt)*?",
        options: ["1453", "1492", "1500", "1666"],
        answer: 0,
        wrongHints: [null, "Klopt — door Ottomanen ingenomen.", "Columbus.", "Renaissance.", "Te laat."],
      },
      {
        q: "Welke uitvinding **veranderde de wereld** rond 1450?",
        options: ["Boekdrukkunst (Gutenberg)", "Stoommachine", "Elektriciteit", "Auto"],
        answer: 0,
        wrongHints: [null, "Klopt.", "18e eeuw.", "19e eeuw.", "19e eeuw."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const middeleeuwenGeschiedenis = {
  id: "middeleeuwen-geschiedenis",
  title: "De middeleeuwen 500-1500 (klas 1-2)",
  emoji: "🏰",
  level: "klas1-2",
  subject: "geschiedenis",
  referentieNiveau: "2F",
  sloThema: "Geschiedenis Europa — middeleeuwen",
  prerequisites: [
    { id: "tijdvakken-geschiedenis", title: "Tijdvakken-overzicht", niveau: "2F" },
  ],
  intro:
    "Middeleeuwen voor klas 1-2 — 1000 jaar Europese geschiedenis (500-1500). Feodalisme, Kerk + macht, ridders + kruistochten, boeren + steden, Zwarte Dood + einde. ~15 min.",
  triggerKeywords: [
    "middeleeuwen", "feodalisme", "ridder", "kasteel",
    "kerk", "paus", "klooster",
    "kruistocht", "saladin", "jeruzalem",
    "pest", "zwarte dood", "horige", "gilde",
    "karel de grote", "gutenberg",
  ],
  chapters,
  steps,
};

export default middeleeuwenGeschiedenis;
