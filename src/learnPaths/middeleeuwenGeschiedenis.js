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
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
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
      "De **middeleeuwen** zijn de **1000 jaar tussen 500 en 1500** na Christus.\n\nDe naam **'middel-eeuwen'** komt van de tijd **midden tussen** de Romeinse Oudheid en de Nieuwe Tijd *(Renaissance)*.\n\n**3 periodes**:\n• **Vroege middeleeuwen** *(500-1000)* — chaos na ondergang Romeinse Rijk.\n• **Hoge middeleeuwen** *(1000-1300)* — bloeiende periode met steden, kruistochten.\n• **Late middeleeuwen** *(1300-1500)* — crises (pest, oorlog), eindigt met de Renaissance.\n\n**Wat gebeurde in Europa?**\n• Romeinse Rijk viel in 476.\n• Verschillende volkeren *(Germanen, Vikingen, Franken)* trekken door Europa.\n• **Karel de Grote** *(742-814)* — bouwt een groot rijk op, wordt in 800 in Rome tot keizer gekroond.\n• **Christendom** verspreidt zich over heel Europa.\n• **Adel + ridders** waren het machtigst.\n• **Kerk** was middelpunt van dagelijks leven.\n\n**Hoe leefden mensen?**\n• Meeste mensen waren **boer** *(90%)*.\n• Geen koffie, geen aardappel *(kwam later uit Amerika)*, geen suiker *(luxe)*.\n• Weinig **boeken** *(handgeschreven, peperduur)*.\n• Veel mensen **konden niet lezen of schrijven**.\n• Levensverwachting: ~30-40 jaar.\n\n**Was alles donker en arm?**\nNiet helemaal! Termen als 'donkere middeleeuwen' zijn deels mythe:\n• Wél: weinig wetenschap zoals in Romeinse tijd.\n• Wél: veel onzekerheid + oorlog.\n• Maar: prachtige **kathedralen** gebouwd *(Notre-Dame)*.\n• **Universiteiten** opgericht *(Parijs, Bologna)*.\n• Steden + handel groeiden vanaf 1100.\n• **Kennis** bewaard in kloosters door monniken.\n\n**Toets-feitje**:\nDe term 'middeleeuwen' werd bedacht in de **Renaissance** *(15e-16e eeuw)* — toen vond men de eigen tijd 'beter dan de duistere middeleeuwen'. Een mythe die nog steeds soms gebruikt wordt.",
    svg: tijdslijnSvg(),
    checks: [
      {
        q: "Wanneer waren de **middeleeuwen** ongeveer?",
        options: ["500-1500", "100-500", "1500-2000", "0-1000"],
        answer: 0,
        wrongHints: [null, "Van 100 tot 500 was het grootste deel van Europa nog Romeins. Wanneer viel het West-Romeinse Rijk?", "Na 1500 begint de nieuwe tijd, met ontdekkingsreizen en de Reformatie.", "Dat begint te vroeg: rond het jaar 0 was het nog Romeinse tijd."],
      },
      {
        q: "Hoeveel **jaar duurden** de middeleeuwen?",
        options: ["~1000 jaar", "~100 jaar", "~500 jaar", "~2000 jaar"],
        answer: 0,
        wrongHints: [null, "Honderd jaar is maar een paar generaties. De middeleeuwen besloegen veel meer eeuwen.", "Nog te kort. Kijk naar het begin- en het eindjaar van de middeleeuwen.", "Te lang: tweeduizend jaar is de hele jaartelling, van het jaar 0 tot nu."],
      },
      {
        q: "Wat is **gemeen aan 90% van middeleeuwers**?",
        options: ["Werkten als boer", "Woonden in een stad", "Werkten in een ambacht", "Vochten als soldaat"],
        answer: 0,
        wrongHints: [null, "De steden waren klein: maar een klein deel van de mensen woonde er. Waar woonde de rest?", "Smeden, bakkers en andere ambachtslieden woonden vooral in de steden, en dat waren er weinig.", "Vechten deden vooral ridders en hun mannen, een kleine groep. Wat deed de grote massa?"],
      },
      {
        q: "Wie was **Karel de Grote**?",
        options: ["Koning van de Franken, keizer rond 800", "Ridder die Jeruzalem veroverde", "Eerste koning van Nederland", "Romeinse keizer rond het jaar 300"],
        answer: 0,
        wrongHints: [null, "De kruistochten begonnen pas rond 1100, lang na Karel.", "Nederland kreeg pas in 1815 een koning. Karel leefde eeuwen eerder.", "Rond 300 regeerden Romeinse keizers als Constantijn. Karel leefde vijf eeuwen later."],
      },
    ],
  },

  // STAP 2: Kerk en macht
  {
    title: "Kerk en macht — het feodale systeem",
    explanation:
      "In de middeleeuwen waren de **kerk** en **adel** de twee machtigste groepen.\n\n**Het feodale systeem** *(uit je hoofd!)*:\nEen piramide van macht en bezit.\n\n• **Koning / Keizer** — top van piramide.\n• **Hoge adel** *(hertogen, graven)* — kregen land van koning.\n• **Lage adel** *(ridders)* — kregen klein stukje land.\n• **Boeren + horigen** — werkten op land van adel.\n• **Slaven** — minste rechten *(maar weinig in West-Europa)*.\n\n**Ruil-systeem**:\n• Adel geeft **bescherming** + land aan boeren.\n• Boeren geven **werk** + deel van oogst aan adel.\n• Adel geeft **trouw** aan koning.\n• Koning geeft **macht/land** aan adel.\n\n**De Kerk**:\n• **Rooms-Katholieke Kerk** beheerste heel West-Europa.\n• **Paus** in Rome = belangrijkste leider.\n• **Bisschoppen** + **pastoors** in elke streek.\n• **Kloosters** — monniken/nonnen bewaarden kennis, schreven boeken over.\n• Kerk had **eigen land** + verzamelde **tienden** *(10% van inkomen)*.\n\n**Wat deed kerk voor het volk?**\n• Doop, huwelijk, begrafenis.\n• **Onderwijs** *(klein deel)*.\n• Ziekenzorg *(eerste 'ziekenhuizen')*.\n• Armenhulp.\n• Maar ook: **straffen tegen 'ketters'** *(mensen die afweken van de leer van de Kerk)*.\n\n**toetsvraag**:\n*'Waarom was Kerk zo machtig in middeleeuwen?'*\n→ Iedereen geloofde dat de Kerk de toegang tot de hemel beheerste. Plus: Kerk had veel **geld en land**.\n\n**Klooster — wat deden ze?**\n• Monniken **kopieerden** Bijbels + Latijnse boeken *(eerste 'fotokopieerders')*.\n• Klooster-bibliotheken bewaarden kennis uit oudheid.\n• Kloosters maakten **bier, wijn, kruidenmedicijnen**.\n• Bekende kloosters: Cluny (Frankrijk), Citeaux, Mont-Saint-Michel.\n\n**Belangrijke termen**:\n• **Feodalisme** = systeem van land + trouw.\n• **Leenheer** = die land uitleent.\n• **Vazal** = die land in leen krijgt.\n• **Horige** = boer gebonden aan land *(niet vrij weg te gaan)*.",
    checks: [
      {
        q: "Wie was de **machtigste** in middeleeuwen?",
        options: ["Koning, adel en Kerk", "Rijke kooplieden en gilden", "Ridders en hun soldaten", "Boeren, die het voedsel maakten"],
        answer: 0,
        wrongHints: [null, "Steden en kooplieden werden pas later machtig, vanaf ongeveer 1100.", "Ridders waren de laagste adel. Wie stonden er boven hen?", "Boeren waren met velen, maar het land was niet van hen. Van wie dan wel?"],
      },
      {
        q: "Wat is een **vazal**?",
        options: ["Iemand die land in leen krijgt", "Boer die aan het land gebonden is", "Heer die land in leen uitgeeft", "Soldaat die loon krijgt voor vechten"],
        answer: 0,
        wrongHints: [null, "Dat is een horige. Een vazal stond hoger op de ladder.", "Dat is de leenheer, de baas in deze afspraak. Wie stond aan de andere kant?", "Dat is een huurling. Wat kreeg een vazal van zijn heer in plaats van loon?"],
      },
      {
        q: "Wat zijn **tienden**?",
        options: ["10% van je inkomen aan de Kerk", "10% belasting aan de koning", "Tien dagen werken voor de heer", "10% rente op een lening"],
        answer: 0,
        wrongHints: [null, "Tienden gingen niet naar de koning. Welke machtige instelling kreeg ze?", "Werken voor je heer heette herendienst. Tienden waren iets anders.", "Lenen tegen rente verbood de Kerk juist. Tienden moest bijna iedereen elk jaar betalen."],
      },
      {
        q: "Wat deden **monniken** in kloosters?",
        options: ["Kopieerden boeken en bewaarden kennis", "Bestuurden de steden als burgemeester", "Bouwden kastelen voor de adel", "Reisden als handelaren naar Azië"],
        answer: 0,
        wrongHints: [null, "Steden werden bestuurd door rijke burgers. Monniken leefden afgezonderd in hun klooster.", "Kastelen lieten edelen bouwen. Wat deden monniken binnen de kloostermuren?", "Monniken bleven meestal hun hele leven in hetzelfde klooster."],
      },
    ],
  },

  // STAP 3: Ridders + kruistochten
  {
    title: "Ridders, kastelen en kruistochten",
    explanation:
      "**Ridders** waren de gewapende krijgers van de middeleeuwen.\n\n**Wat is een ridder?**\n• Edelman met **paard, harnas, zwaard, lans**.\n• Werd opgeleid van jongs af aan *(eerst page, dan schildknaap, dan ridder)*.\n• Bewees **dapperheid** in oorlog of toernooi.\n• Werd geslagen tot ridder met zwaard *(ceremonie)*.\n\n**Kastelen**:\n• **Verdedigingsbouwwerk** van steen *(of eerst hout)*.\n• Op heuvel of in moeras.\n• **Slotgracht** + ophaalbrug.\n• Hoge muren + torens.\n• Binnen: woonhuis adel + soldaten + bedienden.\n\n**Cultuur van ridders — 'hoofse' regels**:\n• **Trouw** aan koning.\n• **Bescherming van zwakkeren** *(in theorie)*.\n• **Eer + dapperheid** boven veiligheid.\n• Respect voor **vrouwen van hogere stand**.\n• Vaak in praktijk: gewoon vechten voor land + buit.\n\n**De Kruistochten** *(1095-1291)*:\nReeks oorlogen waarbij Europese ridders **naar het Heilige Land** *(Jeruzalem, huidige Israël)* trokken om het terug te 'veroveren' op moslims.\n\n**Waarom kruistochten?**\n1. **Religie** — paus Urbanus II riep op om Jeruzalem te 'bevrijden' (1095).\n2. **Handel** — meer kennis + producten uit Midden-Oosten.\n3. **Macht** — adel zocht land + roem.\n4. **Boete** voor zonden — wie meedeed kwam dichter bij hemel.\n\n**Resultaten van kruistochten**:\n• Korte tijd **kruisvaarders-staten** in Heilige Land.\n• Veel geweld tegen moslims, joden, oosters-christenen.\n• **Handel** met oosten begon te bloeien *(specerijen)*.\n• Kennis uit oosten naar Europa *(wiskunde, geneeskunde, sterrenkunde)*.\n• Maar **moslimwereld kreeg langdurige schade** + er ontstonden nieuwe vijandbeelden.\n\n**Toets-feitje**:\nDe **eerste kruistocht** *(1096-1099)* veroverde Jeruzalem. Maar de moslims, geleid door **Saladin**, namen het in 1187 weer terug.\n\n**Belangrijke termen**:\n• **Heilige Land** = Israël/Palestina, plek waar Jezus leefde.\n• **Saracenen** = middeleeuwse term voor moslims.\n• **Ridderorde** = militair-religieuze groep *(Tempeliers, Hospitaalridders)*.",
    checks: [
      {
        q: "Wat hadden ridders **als wapens**?",
        options: ["Zwaard en lans", "Musket en kanon", "Speer en stenen bijl", "Pijl en boog"],
        answer: 0,
        wrongHints: [null, "Vuurwapens als het musket kwamen pas na de middeleeuwen echt in gebruik.", "Stenen bijlen horen bij de prehistorie. Ridders hadden wapens van ijzer.", "Met pijl en boog vochten boogschutters, meestal gewone soldaten. Een ridder te paard had andere wapens."],
      },
      {
        q: "Waarom waren er **kruistochten**?",
        options: ["Religie, macht en land", "Vluchten voor de pest", "Zeeroute naar Indië zoeken", "Vikingen tot christen maken"],
        answer: 0,
        wrongHints: [null, "De pest kwam pas in 1347, lang na de eerste kruistocht (1096).", "Dat was de reden voor de ontdekkingsreizen, eeuwen later.", "De Vikingen werden in hun eigen land christen. De kruisvaarders trokken naar een heel ander gebied."],
      },
      {
        q: "Waar gingen de kruisvaarders **heen**?",
        options: ["Het Heilige Land", "Rome in Italië", "Mekka in Arabië", "Santiago in Spanje"],
        answer: 0,
        wrongHints: [null, "Naar Rome gingen pelgrims voor de paus, maar kruisvaarders wilden een andere stad veroveren.", "Mekka is de heilige stad van de islam. Daar trokken kruisvaarders niet heen. Waar ligt Jeruzalem?", "Naar Santiago de Compostela liepen pelgrims, maar kruisvaarders trokken met een leger naar een andere heilige plek."],
      },
      {
        q: "Wie won uiteindelijk **Jeruzalem terug** voor de moslims in 1187?",
        options: ["Saladin", "Karel de Grote", "Richard Leeuwenhart", "Mohammed"],
        answer: 0,
        wrongHints: [null, "Karel de Grote leefde rond 800, eeuwen vóór de kruistochten.", "Richard Leeuwenhart kwam pas met de Derde Kruistocht (1189), na de verovering. Wie voerde de moslims in 1187 aan?", "Mohammed leefde rond het jaar 600, meer dan vijf eeuwen eerder."],
        uitlegPad: {
          stappen: [
            { titel: "Saladin", tekst: "Saladin (1138-1193) was een sultan van Egypte/Syrië die de kruisvaarder-staten versloeg en Jeruzalem heroverde in 1187." },
          ],
          woorden: [{ woord: "sultan", uitleg: "Moslim-koning of -heerser." }],
          theorie: "Saladin staat bekend als groot strateeg en eerlijke leider.",
          voorbeelden: [{ type: "stap", tekst: "Slag van Hattin (1187) waar Saladin de kruisvaarders versloeg." }],
          basiskennis: [{ onderwerp: "Beroemd", uitleg: "Saladin werd ook door tegenstanders gerespecteerd voor zijn rechtvaardigheid." }],
          niveaus: {
            basis: "Saladin.",
            simpeler: "Saladin was de sultan van Egypte die in 1187 Jeruzalem heroverde op de kruisvaarders.",
            nogSimpeler: "Saladin",
          },
        },
      },
    ],
  },

  // STAP 4: Boeren + horigen + steden
  {
    title: "Boeren, horigen en steden",
    explanation:
      "**Boeren** waren 90% van middeleeuwse samenleving. Hoe leefden ze?\n\n**Een dag van een boer**:\n• Op met de zon, werken op land tot zonsondergang.\n• **Werk** = ploegen, zaaien, oogsten, vee verzorgen.\n• Eten: **brood + bier + ui + bonen + soms vlees**.\n• Wonen in **klein houten huis met strodak** *(1 kamer voor mens + dier)*.\n• **Geen scholing**, geen reizen, geen vakantie.\n\n**Horigen**:\n• **Niet vrij** — gebonden aan land van adel.\n• Mochten **niet weggaan** zonder toestemming.\n• Werkten 3-5 dagen per week voor heer.\n• Eigen stuk grond om voor zichzelf te zorgen.\n• Niet hetzelfde als slaaf — hadden wat rechten *(eigen oogst houden)*.\n\n**Vrije boeren**:\n• Niet gebonden aan een heer.\n• Mochten reizen, trouwen vrij.\n• Hadden meer rechten — maar nog steeds armoede.\n\n**Steden in de hoge middeleeuwen** *(vanaf ~1100)*:\nVerschijnen door:\n• **Handel** — kooplieden komen samen.\n• **Veiligere routes** — minder rovers.\n• **Bevolkingsgroei** — meer mensen, sommigen trekken naar de stad.\n\n**Stadsleven**:\n• **Stadsmuren** voor verdediging.\n• **Marktplein** in midden.\n• **Gilden** = beroepsverenigingen *(bakkers, kleermakers, smeden)*.\n• **Burgers** = inwoners stad, hadden **meer rechten** dan boeren.\n• \"Stadslucht maakt vrij\" — wie een jaar+1 dag in stad woonde was vrij van horigheid!\n\n**Beroemde middeleeuwse steden**:\n• **Brugge** *(België)* — handelscentrum.\n• **Florence** *(Italië)* — bankieren.\n• **Parijs** — universiteit + koningshof.\n• **Londen**, **Keulen**, **Hamburg**.\n• In Nederland: **Utrecht**, **Dordrecht**, **Maastricht** *(vroege steden)*.\n\n**Gilden — wat waren dat?**\n• Verenigingen van vakmensen.\n• **Bepaalden prijzen + kwaliteit** *(geen concurrentie)*.\n• Wie meester wilde worden, moest door **3 fases**: leerjongen → gezel → meester.\n• Mate van eer en respect.\n\n**Toets-feitje**:\nDe **eerste universiteit** in Europa was **Bologna** (Italië, 1088), gevolgd door Parijs (1150). Nederland kreeg **Leiden** als eerste universiteit *(1575 — net na middeleeuwen)*.",
    checks: [
      {
        q: "Wie waren **horigen**?",
        options: ["Niet-vrije boeren, gebonden aan het land", "Slaven die verkocht konden worden", "Edelen die land in leen kregen", "Knechten die werkten voor een gilde"],
        answer: 0,
        wrongHints: [null, "Horigen mochten niet weg, maar je kon ze niet als bezit verkopen.", "Dat zijn vazallen. Horigen stonden veel lager.", "Gildeknechten woonden in de stad, en wie in de stad woonde, was vrij."],
      },
      {
        q: "Wat is een **gilde**?",
        options: ["Beroepsvereniging in de stad", "Gouden munt uit de middeleeuwen", "Belasting voor kooplieden", "Rechtbank van de stadsheer"],
        answer: 0,
        wrongHints: [null, "Je denkt misschien aan de gulden: dat is een munt. Een gilde is iets anders.", "Kooplieden betaalden tol, maar een gilde was geen belasting.", "Recht spreken deed de schepenbank. Een gilde was iets anders."],
      },
      {
        q: "Hoe word je **meester** in een gilde?",
        options: ["Eerst leerjongen, dan gezel", "Als zoon van een meester", "Door benoeming van de koning", "Door les op een kloosterschool"],
        answer: 0,
        wrongHints: [null, "Zonen van meesters kregen soms voorrang, maar ook zij moesten bewijzen dat ze het vak beheersten. Hoe?", "Het gilde bepaalde zelf wie meester werd, niet de koning.", "Op een kloosterschool leerde je lezen en Latijn, geen ambacht. Waar leerde je een vak?"],
      },
      {
        q: "Wat betekent 'stadslucht maakt **vrij**'?",
        options: ["Na een jaar en een dag geen horige meer", "Stadsbewoners mogen hun eigen heer kiezen", "In de stad is het gezonder dan op het land", "In de stad mag iedereen zijn geloof kiezen"],
        answer: 0,
        wrongHints: [null, "Een heer kies je niet. Wat gebeurde er met een horige die lang genoeg in de stad woonde?", "Middeleeuwse steden stonken juist door afval en drukte. Het gaat om een ander soort vrijheid.", "Geloofsvrijheid kwam pas veel later. Over welke andere vrijheid gaat dit?"],
      },
    ],
  },

  // STAP 5: Pest + einde
  {
    title: "Zwarte Dood + einde middeleeuwen",
    explanation:
      "In **1347-1352** brak een verschrikkelijke **pandemie** uit in Europa: de **Zwarte Dood** *(builenpest)*.\n\n**Wat was de pest?**\n• **Ziekte veroorzaakt door bacterie** *(Yersinia pestis)*.\n• Overgedragen door **vlooien op ratten**.\n• Vlooi steekt mens → infectie.\n• Symptomen: **zwarte builen** op huid, hoge koorts, dood binnen 3-5 dagen.\n\n**Hoe kwam het naar Europa?**\n• Van **Azië** via handelsroutes.\n• Eerst Italië *(via Genuese schepen 1347)*.\n• Daarna verspreidde het zich snel — schepen + handel.\n\n**Hoeveel doden?**\n• In Europa: **30-60%** van bevolking stierf — schattingen lopen van **25 tot 50 miljoen mensen** *(bij een Europese bevolking van ~75-80 miljoen in 1347)*.\n• Sommige streken bijna leeg.\n• Niemand was veilig — kinderen, ouderen, rijk, arm.\n\n**Gevolgen**:\n• **Massale dood** — leeggekomen dorpen.\n• **Boeren tekort** — overgebleven boeren konden hoger loon vragen.\n• **Einde feodalisme** begon — adel had minder grip op boeren.\n• **Antisemitisme** — Joden vaak onterecht beschuldigd ('zij hebben de bronnen vergiftigd').\n• **Religie** — sommigen werden vroomer, anderen wantrouwden de Kerk.\n• **Kunst** werd somber — 'memento mori' *(denk aan de dood)*.\n\n**Andere problemen 14e-15e eeuw**:\n• **Honger** door slechte oogsten *(kouder klimaat: de 'Kleine IJstijd')*.\n• **100-jarige oorlog** *(1337-1453)* tussen Engeland en Frankrijk.\n• **Schisma** in de Kerk — meerdere pausen tegelijk.\n• **Boeren-opstanden** tegen adel.\n\n**Wanneer eindigden de middeleeuwen?**\nHistorici noemen meestal **1453** of **1492** of **1500**:\n• **1453**: val Constantinopel *(Byzantijnse Rijk veroverd door Ottomanen)*.\n• **1492**: Columbus 'ontdekt' Amerika — opening nieuwe wereld.\n• **~1450**: boekdrukkunst uitgevonden door **Gutenberg** *(Duits)*.\n• **~1500**: Renaissance bloeit volop in Italië.\n\n**Renaissance** = 'wedergeboorte' van oude Romeinse/Griekse kennis. Begin moderne tijd.\n\n**Toets-feitje**:\nBoekdrukkunst van Gutenberg veranderde de wereld — boeken werden goedkoop, kennis verspreidde zich snel. **Bekendste vroege gedrukte boek**: de Gutenbergbijbel (~1455).",
    checks: [
      {
        q: "Wat was de **Zwarte Dood**?",
        options: ["Een pestepidemie", "Een heksenjacht", "Een hongersnood", "Een lange oorlog"],
        answer: 0,
        wrongHints: [null, "Heksenjachten waren er vooral later, rond 1600. Waaraan stierven er in 1347-1352 zoveel mensen?", "Honger kwam vaak voor in de middeleeuwen. Maar waardoor stierf binnen een paar jaar een groot deel van Europa?", "De Honderdjarige Oorlog liep in dezelfde tijd, maar daarin stierven veel minder mensen."],
      },
      {
        q: "Hoeveel **% van Europa** stierf aan pest?",
        options: ["30-60%", "1-5%", "70-90%", "10-20%"],
        answer: 0,
        wrongHints: [null, "Veel meer. Europa had daarna ruim honderd jaar nodig om weer even veel inwoners te hebben.", "Zoveel niet: de meeste mensen overleefden de pest.", "Meer dan dat: hele dorpen liepen leeg."],
      },
      {
        q: "Wat **droeg** de pest over op mensen?",
        options: ["Vlooien die op ratten leefden", "Muggen bij stilstaand water", "Zwerfhonden in de stad", "Bedorven eten en water"],
        answer: 0,
        wrongHints: [null, "Muggen verspreiden malaria, maar de pest ging anders. Welke dieren leefden massaal in vieze steden en op schepen?", "Honden waren niet de schuldigen. Denk aan dieren die massaal in vieze steden en op schepen leefden.", "Daar krijg je andere ziekten van. De builenpest kwam door een beet."],
      },
      {
        q: "Wie vond de **boekdrukkunst** uit?",
        options: ["Gutenberg", "Edison", "Da Vinci", "Newton"],
        answer: 0,
        wrongHints: [null, "Edison leefde rond 1900 en is bekend van de gloeilamp.", "Leonardo da Vinci ontwierp veel machines, maar de drukpers kwam van een Duitse goudsmid.", "Newton leefde rond 1700 en schreef over de zwaartekracht."],
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eind-opdracht — middeleeuwen mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: feodalisme, kerk, ridders, pest, einde.\n\nVeel succes!",
    checks: [
      {
        q: "Wanneer waren de middeleeuwen ongeveer?",
        options: ["500-1500", "0-500", "1500-2000", "100-1000"],
        answer: 0,
        wrongHints: [null, "Van 0 tot 500 was het grootste deel van Europa nog Romeins.", "Na 1500 begint de nieuwe tijd, met ontdekkingsreizen en de Reformatie.", "Het begin klopt niet en het eind is te vroeg: rond 1000 begonnen de steden pas te groeien."],
      },
      {
        q: "Wie was **Karel de Grote**?",
        options: ["Keizer rond 800", "Paus rond 800", "Ridder rond 1100", "Viking rond 900"],
        answer: 0,
        wrongHints: [null, "De paus kroonde hem in 800, maar Karel was zelf geen geestelijke.", "De ridders van de kruistochten leefden pas rond 1100, drie eeuwen na Karel.", "Vikingen vielen het rijk van Karels opvolgers aan. Karel zelf was geen Viking."],
      },
      {
        q: "Welke groep had **3-fasen-opleiding** in stad?",
        options: ["Gildenleden", "Boeren", "Ridders", "Monniken"],
        answer: 0,
        wrongHints: [null, "Boeren leerden het werk van hun ouders, op het land. Over wie in de stad gaat het?", "Ridders hadden ook drie stappen (page, schildknaap, ridder), maar die opleiding was op een kasteel, niet in de stad.", "Monniken leerden in het klooster, vaak ver buiten de stad. Welke groep leerde een vak in de stad?"],
      },
      {
        q: "Wat was de **Zwarte Dood**?",
        options: ["Een pestepidemie in 1347", "Een oorlog in 1347", "Een hongersnood in 1347", "Een vulkaanuitbarsting in 1347"],
        answer: 0,
        wrongHints: [null, "De Honderdjarige Oorlog liep toen wel, maar daaraan stierf niet een groot deel van Europa.", "Er was wel honger, maar daaraan stierf niet een groot deel van Europa.", "Een uitbarsting treft één gebied. Waardoor stierven er in heel Europa tegelijk zoveel mensen?"],
      },
      {
        q: "In welk jaar **viel Constantinopel** *(markeringspunt einde middeleeuwen)*?",
        options: ["1453", "1492", "1517", "1348"],
        answer: 0,
        wrongHints: [null, "In 1492 bereikte Columbus Amerika. Dat is een ander bekend eindpunt van de middeleeuwen.", "In 1517 begon Luther de Reformatie.", "Rond 1348 trok de pest door Europa; Constantinopel stond toen nog overeind."],
      },
      {
        q: "Welke uitvinding **veranderde de wereld** rond 1450?",
        options: ["Boekdrukkunst", "Kompas", "Windmolen", "Mechanische klok"],
        answer: 0,
        wrongHints: [null, "Het kompas gebruikten Europese zeelui al rond 1200.", "Windmolens draaiden in Europa al vanaf de 12e eeuw.", "Torenklokken met een uurwerk bestonden al rond 1300."],
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
