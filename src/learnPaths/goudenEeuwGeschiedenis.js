// Leerpad: De Gouden Eeuw — klas 2-3 onderbouw VO.
// Onderdeel geschiedenis Nederland. Referentieniveau 2F.
// 6 stappen met uitlegPad. Mark's continuum-visie.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  goud: "#ffd54f",
  schip: "#5d4037",
  water: "#42a5f5",
  schaduw: "#7e57c2",
  highlight: "#ff7043",
};

const stepEmojis = ["💰", "⛵", "🎨", "⛓️", "🌅", "🏆"];

const chapters = [
  { letter: "A", title: "Wat was de Gouden Eeuw?", emoji: "💰", from: 0, to: 0 },
  { letter: "B", title: "Handel + VOC", emoji: "⛵", from: 1, to: 1 },
  { letter: "C", title: "Wetenschap + kunst", emoji: "🎨", from: 2, to: 2 },
  { letter: "D", title: "Schaduwkanten + slavernij", emoji: "⛓️", from: 3, to: 3 },
  { letter: "E", title: "Einde Gouden Eeuw", emoji: "🌅", from: 4, to: 4 },
  { letter: "F", title: "Eind-opdracht", emoji: "🏆", from: 5, to: 5 },
];

function tijdslijnSvg() {
  return `<svg viewBox="0 0 320 160">
<rect x="0" y="0" width="320" height="160" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">De Gouden Eeuw — globale tijdlijn</text>
<line x1="20" y1="85" x2="300" y2="85" stroke="${COLORS.goud}" stroke-width="2"/>
<circle cx="40" cy="85" r="6" fill="${COLORS.goud}"/>
<text x="40" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">1602</text>
<text x="40" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">VOC</text>
<circle cx="120" cy="85" r="6" fill="${COLORS.goud}"/>
<text x="120" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">1648</text>
<text x="120" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Vrede Münster</text>
<circle cx="200" cy="85" r="6" fill="${COLORS.goud}"/>
<text x="200" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">1670</text>
<text x="200" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Hoogtepunt</text>
<circle cx="280" cy="85" r="6" fill="${COLORS.goud}"/>
<text x="280" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">1700+</text>
<text x="280" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Einde</text>
<text x="160" y="148" text-anchor="middle" fill="${COLORS.highlight}" font-size="11" font-family="Arial" font-style="italic">17e eeuw — periode van rijkdom én slavernij</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat was de Gouden Eeuw?
  {
    title: "Wat was de Gouden Eeuw?",
    explanation:
      "De **Gouden Eeuw** is de **17e eeuw** *(1600-1700)* — een tijd waarin Nederland *(toen 'de Republiek der Verenigde Nederlanden')* één van de **rijkste en machtigste landen ter wereld** was.\n\n**Waarom was Nederland zo rijk?**\n1. **Handel** — Nederlandse schepen kwamen overal: Indië, Japan, Amerika, Afrika.\n2. **Goede locatie** — Amsterdam, Rotterdam aan zee = goede havens.\n3. **Tolerantie** — vluchtelingen uit andere landen kwamen hier wonen *(joden, hugenoten)*. Brachten kennis en geld mee.\n4. **Republiek** — geen koning, maar bestuurd door rijke kooplieden *(regenten)*. Snelle besluiten.\n5. **Hervormd protestantisme** — werken + sparen = deugd. Veel sparen = veel investeren.\n\n**Wanneer precies?**\n• **Begin**: rond **1600** *(net na 1581: Nederland riep zijn zelfstandigheid uit, deel van 80-jarige oorlog)*.\n• **Hoogtepunt**: rond **1648-1672**.\n• **Einde**: rond **1700** *(rampjaar 1672 was begin einde)*.\n\n**Wat was 'Gouden'?**\n• Welvaart voor rijke kooplieden, regenten, schilders.\n• Kunsten bloeiden — schilderkunst, literatuur, wetenschap.\n• Wereldhandel via Nederlandse schepen.\n• Amsterdam = **financieel centrum** van Europa *(eerste beurs ter wereld 1602)*.\n\n**Maar pas op — niet 'Gouden' voor iedereen**:\n• Veel **armoede** voor arbeiders in steden.\n• **Slavernij** — Nederlandse handel in tot slaaf gemaakten *(zie stap 4)*.\n• **Koloniën** — Indonesië, Suriname, Curaçao, Sint Maarten.\n\nDaarom gebruiken historici tegenwoordig vaak gewoon '17e eeuw' i.p.v. 'Gouden Eeuw' — om de schaduwkanten ook te erkennen.",
    svg: tijdslijnSvg(),
    checks: [
      {
        q: "Wanneer was de **Gouden Eeuw**?",
        options: ["17e eeuw", "16e eeuw", "18e eeuw", "19e eeuw"],
        answer: 0,
        wrongHints: [null, "In de 16e eeuw begon de Opstand tegen Spanje pas. Kwam de grote bloei toen al, of daarna?", "In de 18e eeuw haalden Engeland en Frankrijk de Republiek juist in. Was dat nog de topperiode?", "In de 19e eeuw was Nederland al een koninkrijk. Hoe heette het land in de Gouden Eeuw?"],
      },
      {
        q: "Waarom was Nederland in de 17e eeuw zo rijk?",
        options: ["Overzeese handel", "Zilver uit Amerika", "Kaapvaart op Spanje", "Rijke landbouwgrond"],
        answer: 0,
        wrongHints: [null, "Zilver uit Amerika maakte vooral Spanje rijk. Waar verdienden Hollandse kooplieden hun geld mee?", "Piet Hein veroverde één keer de zilvervloot. Kan een land daar een hele eeuw van leven?", "Holland was nat en klein; graan werd juist ingevoerd uit het Oostzeegebied."],
      },
      {
        q: "Welke vorm van regering had Nederland in de Gouden Eeuw?",
        options: ["Republiek", "Koninkrijk", "Hertogdom", "Stadstaat"],
        answer: 0,
        wrongHints: [null, "Nederland werd pas in 1815 een koninkrijk. Was de stadhouder een koning?", "Vóór de Opstand vielen de gewesten onder Habsburgse vorsten. Wie bestuurde ná de Opstand?", "Amsterdam was machtig, maar zeven gewesten bestuurden samen. Hoe noem je zo'n staat zonder vorst?"],
      },
      {
        q: "Welke stad was het **financiële centrum**?",
        options: ["Amsterdam", "Rotterdam", "Utrecht", "Den Haag"],
        answer: 0,
        wrongHints: [null, "Belangrijke haven, maar niet de bank-stad in de Gouden Eeuw.", "Utrecht was groot maar geen handelscentrum.", "Den Haag was bestuurlijk centrum, geen handelscentrum."],
      },
    ],
  },

  // STAP 2: Handel + VOC
  {
    title: "Handel + VOC — Nederland als wereldspeler",
    explanation:
      "Nederland werd rijk door **wereldhandel**. Het belangrijkste bedrijf: **VOC**.\n\n**VOC** = **Verenigde Oostindische Compagnie**.\n• Opgericht **1602** — **eerste echte multinational** ter wereld.\n• Bedrijf met **aandelen** die mensen konden kopen *(eerste aandelenmarkt!)*.\n• Verdiende geld met handel in **specerijen** *(peper, nootmuskaat, kruidnagel, kaneel)* uit Indonesië.\n\n**Wat deden VOC-schepen?**\n1. Vertrokken uit Amsterdam met geld + handelswaar.\n2. Voeren naar **Indonesië** (toen 'Oost-Indië').\n3. Kochten specerijen of dwongen die af.\n4. Voeren terug naar Nederland *(reis 1-1,5 jaar!)*.\n5. Verkochten in Europa met enorme winst.\n\n**Andere belangrijke handel**:\n• **WIC** = **West-Indische Compagnie** *(1621)* — handel met Amerika + Afrika *(suiker, slavernij)*.\n• **Haring + zoutmakerij** — visserij uit Noordzee.\n• **Granen uit Polen/Baltisch** — Amsterdam was Europa's korenkamer.\n• **Lakens + textiel** — Leiden, Delft.\n\n**Koloniën** in deze tijd:\n• **Oost-Indië** *(Indonesië)* — kruidnagel, specerijen.\n• **Suriname** + **Curaçao** *(Caribisch gebied)* — suiker, slaaf-handel.\n• **Nieuw-Amsterdam** *(later New York!)* — kort bezit van de WIC.\n• **Kaap de Goede Hoop** *(Zuid-Afrika)* — verversingspunt voor schepen.\n\n**Belangrijke termen**:\n• **Aandeel** = stukje eigenaarschap in een bedrijf — koop je een aandeel VOC, deel je in winst (en verlies).\n• **Compagnie** = bedrijf — VOC was er één van de bekendste.\n• **Specerij** = exotische geur/smaakstof uit verre landen.\n\n**Toets-feitje**:\nDe VOC werd **eerste bedrijf met aandelen** die je kon kopen/verkopen *(zoals nu Apple, Tesla)*. Een grote uitvinding voor de wereld-economie.",
    checks: [
      {
        q: "Wat betekent **VOC**?",
        options: ["Verenigde Oostindische Compagnie", "Verenigde Oostzee Compagnie", "Vrije Oostzee Compagnie", "Vrije Oostindische Compagnie"],
        answer: 0,
        wrongHints: [null, "De VOC voer niet naar de Oostzee, maar veel verder weg.", "Kijk naar de O: voer de VOC naar de Oostzee of veel verder weg? En wat gebeurde er in 1602 met de losse compagnieën?", "Waar staat de V voor? Denk aan wat er in 1602 met de losse compagnieën gebeurde."],
      },
      {
        q: "Wanneer werd de **VOC opgericht**?",
        options: ["1602", "1588", "1621", "1648"],
        answer: 0,
        wrongHints: [null, "In 1588 ontstond de Republiek. Bestonden de losse compagnieën toen al?", "In 1621 werd de WIC opgericht, de compagnie voor het westen. Was de VOC ouder of jonger?", "In 1648 eindigde de Tachtigjarige Oorlog. Voeren VOC-schepen toen al tientallen jaren?"],
      },
      {
        q: "Wat handelde VOC vooral?",
        options: ["Specerijen uit de Molukken", "Suiker uit Nederlands-Brazilië", "Bont uit Nieuw-Nederland", "Graan uit het Oostzeegebied"],
        answer: 0,
        wrongHints: [null, "Brazilië ligt in het westen. Welke compagnie werkte aan de westkant van de wereld?", "De bonthandel in Nieuw-Nederland viel onder de WIC. Waar voer de VOC naartoe?", "De graanhandel op de Oostzee deden kooplieden los van de VOC. Wat haalde de VOC uit Azië?"],
      },
      {
        q: "Welke stad **was eerst Nederlands** maar werd later New York?",
        options: ["Nieuw-Amsterdam", "Nieuw-Holland", "Fort Oranje", "Nieuw-Zeeland"],
        answer: 0,
        wrongHints: [null, "Zo noemden Nederlandse zeevaarders Australië. Ligt dat in Amerika?", "Fort Oranje lag verder landinwaarts aan de rivier en werd later Albany.", "Dat land kreeg een Nederlandse naam, maar ligt in de Grote Oceaan, niet in Amerika."],
      },
    ],
  },

  // STAP 3: Wetenschap + kunst
  {
    title: "Wetenschap, kunst en geleerden",
    explanation:
      "De Gouden Eeuw was ook tijd van **kunst en wetenschap** — Nederland werd cultureel-intellectueel een leider.\n\n**Schilders** *(uit je hoofd!)*:\n• **Rembrandt van Rijn** *(1606-1669)* — bekendste, maakte 'De Nachtwacht' *(1642)*. Speelde met licht/donker.\n• **Johannes Vermeer** *(1632-1675)* — 'Het Meisje met de Parel', 'Het Melkmeisje'. Stille interieurs.\n• **Jan Steen** *(1626-1679)* — humoristische tafereel-scenes, vandaar 'een huishouden van Jan Steen'.\n• **Frans Hals** — portretten met snelle penseelstreken.\n• **Pieter de Hooch** — interieurs met zonlicht.\n\n**Beroemde schilderijen**:\n• **De Nachtwacht** (Rembrandt) — groepsportret schutterij.\n• **Meisje met de Parel** (Vermeer) — 'Mona Lisa van het Noorden'.\n• **De Anatomische les van Dr. Tulp** (Rembrandt).\n• **De Aardrijkskundige** (Vermeer).\n\n**Wetenschap**:\n• **Christiaan Huygens** *(1629-1695)* — natuurkundige; ontdekte ring van Saturnus, vond slingerklok uit.\n• **Antoni van Leeuwenhoek** *(1632-1723)* — 'vader van de microbiologie'; zag als eerste micro-organismen onder een microscoop.\n• **Hugo de Groot** *(1583-1645)* — vader van internationaal recht.\n• **Baruch Spinoza** *(1632-1677)* — filosoof, woonde in Rijnsburg en Den Haag.\n\n**Literatuur**:\n• **Joost van den Vondel** — toneelschrijver, dichter ('De Gysbreght van Aemstel').\n• **Constantijn Huygens** — vader van Christiaan, dichter en diplomaat.\n• **Pieter Cornelisz. Hooft** — historicus, dichter.\n\n**Architectuur**:\n• **Amsterdamse grachtengordel** — herenhuizen langs de grachten *(UNESCO werelderfgoed)*.\n• **Koninklijk Paleis op de Dam** — oorspronkelijk Stadhuis, gebouwd vanaf 1648.\n• **Smalle hoge huizen** — belasting was op breedte van pand.\n\n**toetsvraag**:\n*'Wie schilderde de Nachtwacht?'* → Rembrandt.\n*'Wie ontdekte micro-organismen?'* → Antoni van Leeuwenhoek.",
    checks: [
      {
        q: "Wie schilderde **de Nachtwacht**?",
        options: ["Rembrandt", "Vermeer", "Van Gogh", "Frans Hals"],
        answer: 0,
        wrongHints: [null, "Vermeer maakte Meisje met de Parel.", "19e eeuw, niet 17e.", "Frans Hals schilderde portretten met snelle penseelstreken. Wie speelde zo sterk met licht en donker?"],
      },
      {
        q: "Wie schilderde **het Meisje met de Parel**?",
        options: ["Vermeer", "Rembrandt", "Jan Steen", "Frans Hals"],
        answer: 0,
        wrongHints: [null, "Rembrandt maakte de Nachtwacht. Wie schilderde stille binnenkamers met zacht licht?", "Jan Steen schilderde rommelige, grappige huishoudens. Past dat bij dit stille portret?", "Frans Hals schilderde vrolijke portretten met snelle streken. Wie maakte ook het Melkmeisje?"],
      },
      {
        q: "Wie ontdekte **micro-organismen** met microscoop?",
        options: ["Antoni van Leeuwenhoek", "Christiaan Huygens", "Isaac Newton", "Galileo Galilei"],
        answer: 0,
        wrongHints: [null, "Astronomie + slingerklok.", "Newton was een Engelsman en werkte aan zwaartekracht en licht.", "Galilei was een Italiaan, vooral bekend van de telescoop."],
      },
      {
        q: "**Waarom** waren Amsterdamse huizen **smal en hoog**?",
        options: ["Belasting was op breedte", "Brede huizen zakten in het veen", "Smalle gevels waren mode", "Minder last van wind"],
        answer: 0,
        wrongHints: [null, "Grachtenhuizen stonden op lange houten palen, dus ook een breed huis zakte niet weg. Waarom kozen bouwers dan toch een smalle gevel?", "Mode verklaart niet waarom bijna alle grachtenhuizen zo smal werden gebouwd.", "Hadden huizen op het winderige platteland dan ook smalle gevels?"],
        uitlegPad: {
          stappen: [
            { titel: "Belasting-truc", tekst: "De gemeente belastte huizen op de breedte van de gevel. Daarom bouwden rijke kooplieden hun huizen smal maar wel hoog (en diep, want diepte werd niet belast). Spaarde geld." },
          ],
          woorden: [{ woord: "gevel", uitleg: "Voorkant van een huis." }],
          theorie: "Rijke kooplieden wilden huis tonen + belasting beperken.",
          voorbeelden: [{ type: "stap", tekst: "Op herengracht: huizen 5-6 m breed, 4-5 verdiepingen hoog, 30 m diep." }],
          basiskennis: [{ onderwerp: "Slim", uitleg: "Belasting-regels beïnvloeden bouwstijl." }],
          niveaus: {
            basis: "Belasting was op breedte.",
            simpeler: "Belasting werd gerekend per meter breedte van de gevel. Smaller huis = minder belasting. Dus rijke kooplieden bouwden smal + hoog + diep.",
            nogSimpeler: "Belasting op breedte",
          },
        },
      },
    ],
  },

  // STAP 4: Schaduwkanten — slavernij
  {
    title: "Schaduwkanten — slavernij en kolonialisme",
    explanation:
      "Naast rijkdom was er **groot leed** veroorzaakt door Nederland in de 17e eeuw.\n\n**Slavernij**:\n• Nederland deed actief mee aan **trans-Atlantische slavenhandel**.\n• **600.000 mensen** uit Afrika werden door Nederlanders verkocht/vervoerd *(1600-1814)*.\n• Vooral via de **WIC** *(West-Indische Compagnie)*.\n\n**Drie-hoek-handel**:\n1. Schepen voeren met **textiel + wapens** naar Afrika.\n2. Daar gevangen Afrikanen 'gekocht' van lokale leiders.\n3. **Vervoer naar Amerika/Suriname** *(de 'Middle Passage')* — 12-15% van mensen overleefde reis niet *(door honger, ziekte, gewelddadigheid)*.\n4. In Amerika werkten ze als **slaaf** op suiker- of koffieplantage *(vooral Suriname)*.\n5. Schepen voeren terug met **suiker, koffie, tabak**.\n\n**Slavernij in Suriname**:\n• Tot 1863 bestond slavernij *(Nederland was een van de laatste Europese landen die afschafte!)*.\n• Generaties Afrikanen geboren in slavernij.\n• Werkten op suiker-, koffie-, cacao-plantages.\n• Strenge straffen, weinig vrijheid.\n\n**Andere schaduwkanten**:\n• **Indonesië** — VOC dwong specerij-monopolie af met geweld. Inheemse bevolking onderdrukt.\n• **Banda-eilanden** — VOC vermoordde bijna alle bewoners *(15.000 mensen, 1621)* om nootmuskaat-monopolie te krijgen.\n• **Armoede in Nederland** — gewone arbeiders, vissers, dienstboden hadden hard leven. Niet alle Nederlanders waren rijk.\n\n**Hedendaagse discussie**:\n• Sinds de jaren 2000 erkennen we deze donkere kant steeds meer.\n• **Excuses door premier Rutte** *(dec 2022)* en later **door koning Willem-Alexander** op Keti Koti *(1 juli 2023)* voor de Nederlandse rol in slavernij.\n• **Standbeelden** van plantagebezitters worden ter discussie gesteld.\n• Sommige musea passen tekst aan om eerlijker te vertellen *(Rijksmuseum)*.\n\n**toetsvraag**:\n*'Wat was de WIC?'* → West-Indische Compagnie, voor handel met Amerika + Afrika, betrokken bij slavenhandel.\n\n**Belangrijke termen**:\n• **Slavernij** = mensen behandelen als bezit, dwingen tot werk zonder loon of vrijheid.\n• **Plantage** = groot landbouwbedrijf in koloniën *(suiker, koffie)*.\n• **Abolitionisme** = beweging tegen slavernij.\n• **Keti Koti** *(1 juli)* — Surinaamse herdenking afschaffing slavernij (1863).",
    checks: [
      {
        q: "Welk **bedrijf** was vooral betrokken bij slavernij?",
        options: ["WIC", "VOC", "Hanze", "Noordse Compagnie"],
        answer: 0,
        wrongHints: [null, "VOC vooral Indonesië, maar WIC was specifiek trans-Atlantisch.", "De Hanze was een middeleeuws handelsnetwerk rond de Oostzee, lang vóór de Gouden Eeuw.", "De Noordse Compagnie ging op walvisjacht bij Spitsbergen. Welke compagnie voer naar Afrika en Amerika?"],
      },
      {
        q: "Hoe heet de **handelsroute** Afrika→Amerika→Europa→Afrika?",
        options: ["Driehoekshandel", "Moedernegotie", "Specerijroute", "Zijderoute"],
        answer: 0,
        wrongHints: [null, "Zo heette de graanhandel met het Oostzeegebied. Ging die langs Afrika en Amerika?", "De specerijen kwamen uit Azië. Ligt Azië op deze route?", "De Zijderoute was een oude landroute door Azië naar China. Hoe ziet de route over de oceaan eruit?"],
      },
      {
        q: "Wanneer schafte Nederland **slavernij af** in koloniën?",
        options: ["1863", "1814", "1834", "1848"],
        answer: 0,
        wrongHints: [null, "In 1814 verbood Nederland de slavenhándel. Waren de mensen in slavernij toen ook vrij?", "In 1834 schafte Groot-Brittannië de slavernij af. Volgde Nederland meteen?", "In 1848 deed Frankrijk het en kreeg Nederland een nieuwe grondwet. Hoorde de afschaffing daarbij?"],
      },
      {
        q: "Op welk eiland mocht alleen Nederland **nootmuskaat** verbouwen?",
        options: ["Banda", "Ambon", "Ceylon", "Java"],
        answer: 0,
        wrongHints: [null, "Op Ambon liet de VOC kruidnagel verbouwen. Welke eilandjes hadden de nootmuskaat?", "Ceylon (nu Sri Lanka) was bekend om kaneel, niet om nootmuskaat.", "Op Java werden later vooral koffie en suiker verbouwd."],
      },
    ],
  },

  // STAP 5: Einde Gouden Eeuw
  {
    title: "Einde van de Gouden Eeuw",
    explanation:
      "Rond **1700** liep de Gouden Eeuw ten einde. Verschillende oorzaken samen.\n\n**Rampjaar 1672**:\nNederland werd **aangevallen door 4 buurlanden tegelijk**:\n• Frankrijk *(Lodewijk XIV)*.\n• Engeland *(Karel II)*.\n• Bisdom Munster.\n• Bisdom Keulen.\n\nBekend uit de geschiedenis: **'Het volk was redeloos, de regering radeloos, het land reddeloos.'**\n\nNederland werd uiteindelijk **gered** door:\n• **Waterlinie** — laag land onder water gezet *(zo konden vijanden niet door)*.\n• **Vlootacties** van Michiel de Ruyter *(beroemde admiraal)*.\n• Diplomatie — Engeland en bisdommen weer eruit gepraat.\n\nFrankrijk vocht door tot **1678** *(Vrede van Nijmegen)*.\n\n**Andere oorzaken einde**:\n1. **Engeland werd sterker** *(Industriële revolutie kwam eraan)*.\n2. **Oorlogen** met andere landen kosten geld — schulden.\n3. **Specerijen** werden minder bijzonder — andere landen handelden ook.\n4. **Pruiken-tijd** — rijke elite werd minder ondernemend, meer luxe.\n5. **Klimaat** — winters werden kouder *(kleine ijstijd)*, slechte oogsten.\n\n**Wat bleef?**\n• **Amsterdamse grachten** *(UNESCO werelderfgoed)*.\n• **Beroemde schilderijen** in musea *(Rijksmuseum, Mauritshuis)*.\n• **Aandelenbeurs** als systeem voor de wereldhandel.\n• **Erfenis van kolonisatie** — koloniën bleven Nederlands tot 20e eeuw *(Indonesië 1945, Suriname 1975)*.\n\n**Stadhouders en koningen — wat daarna?**\n• Eind 17e eeuw: macht van **stadhouder Willem III** (ook koning van Engeland!).\n• 1795: Franse revolutie verdrijft stadhouder — Bataafse Republiek.\n• 1815: **Koninkrijk der Nederlanden** *(Koning Willem I)*.\n\n**Toets-feitje**:\nVeel mensen denken dat Nederland nooit echt machtig was. Maar in de 17e eeuw was Nederland korte tijd **invloedrijker dan Engeland, Frankrijk, Spanje**. Daarna nooit meer zo machtig.",
    checks: [
      {
        q: "Wat was het **Rampjaar**?",
        options: ["1672 — inval over land en zee", "1566 — de Beeldenstorm", "1665 — oorlog met Engeland", "1795 — Franse inval"],
        answer: 0,
        wrongHints: [null, "De Beeldenstorm was onrust in kerken, ruim honderd jaar vóór het Rampjaar.", "In 1665 vocht de Republiek tegen één land en hield zij op zee stand. Was dat het jaar van de grote paniek?", "In 1795 kwamen de Fransen wel, maar toen was de Gouden Eeuw al voorbij."],
      },
      {
        q: "Welke landen vielen Nederland aan in 1672?",
        options: ["Frankrijk + Engeland + 2 bisdommen", "Spanje + Oostenrijk + Brandenburg", "Spanje + Zweden + 2 bisdommen", "Frankrijk + Spanje + Portugal"],
        answer: 0,
        wrongHints: [null, "Deze landen kwamen de Republiek in 1672-1673 juist te hulp.", "Spanje was sinds 1648 geen vijand meer, en Zweden viel de Republiek niet aan.", "Spanje en Portugal vielen in 1672 niet aan — wie viel er over zee aan?"],
      },
      {
        q: "Hoe **redde** Nederland zich in 1672?",
        options: ["Met de Waterlinie", "Met Engelse hulp", "Met een snelle vrede", "Met nieuwe vestingwallen"],
        answer: 0,
        wrongHints: [null, "Engeland was in 1672 juist een van de aanvallers.", "De oorlog duurde nog jaren. Wat hield het Franse leger in Holland tegen?", "Veel steden met wallen gaven zich juist snel over. Wat zette Holland zelf onder water?"],
      },
      {
        q: "Wanneer werd Indonesië **onafhankelijk**?",
        options: ["1945", "1799", "1942", "1962"],
        answer: 0,
        wrongHints: [null, "In 1799 ging de VOC failliet en nam de staat de kolonie over. Werd Indonesië toen vrij?", "In 1942 bezette Japan Indonesië. Wanneer riep Soekarno de onafhankelijkheid uit?", "In 1962 ging het alleen nog om Nieuw-Guinea, het laatste stukje. Wanneer riep Soekarno de onafhankelijkheid uit?"],
      },
    ],
  },

  // STAP 6: Eind-mix
  {
    title: "Eind-opdracht — Gouden Eeuw mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: VOC, handel, kunst, slavernij, rampjaar.\n\nVeel succes!",
    checks: [
      {
        q: "Wat is **VOC**?",
        options: ["Verenigde Oostindische Compagnie", "Verenigde Oostzee Compagnie", "Vrije Oostzee Compagnie", "Vrije Oostindische Compagnie"],
        answer: 0,
        wrongHints: [null, "De handel op de Oostzee (graan en hout) liep niet via de VOC.", "Kijk naar de O: voer de VOC naar de Oostzee of veel verder weg? En wat gebeurde er in 1602 met de losse compagnieën?", "Waar staat de V voor? Denk aan wat er in 1602 met de losse compagnieën gebeurde."],
      },
      {
        q: "Wie schilderde **De Nachtwacht**?",
        options: ["Rembrandt", "Vermeer", "Jan Steen", "Hieronymus Bosch"],
        answer: 0,
        wrongHints: [null, "Vermeer schilderde kleine, stille binnenkamers, geen groot groepsportret.", "Jan Steen staat bekend om rommelige huishoudens, niet om schutterijen.", "Jeroen Bosch leefde rond 1500, ruim een eeuw vóór de Gouden Eeuw."],
      },
      {
        q: "Welke **nederzetting was kort Nederlands** maar werd New York?",
        options: ["Nieuw-Amsterdam", "Fort Oranje", "Nieuw-Holland", "Willemstad"],
        answer: 0,
        wrongHints: [null, "Fort Oranje lag verder landinwaarts aan de rivier en werd later Albany.", "Zo noemden Nederlandse zeevaarders Australië. Ligt dat in Amerika?", "Willemstad ligt op Curaçao in het Caribisch gebied en is nog steeds Nederlands."],
      },
      {
        q: "Wanneer werd **slavernij afgeschaft** in NL-koloniën?",
        options: ["1863", "1648", "1672", "1945"],
        answer: 0,
        wrongHints: [null, "In 1648 eindigde de Tachtigjarige Oorlog. De slavenhandel van de WIC kwam daarna pas goed op gang.", "1672 is het Rampjaar. Was de WIC toen nog actief met slavenhandel?", "In 1945 ging het om de onafhankelijkheid van Indonesië, niet om slavernij."],
      },
      {
        q: "Welk **bedrijf** was vooral betrokken bij slavernij?",
        options: ["WIC", "VOC", "Hanze", "Noordse Compagnie"],
        answer: 0,
        wrongHints: [null, "De VOC werkte in Azië. Welke compagnie voer de Atlantische Oceaan over?", "De Hanze was een middeleeuws handelsnetwerk rond de Oostzee, lang vóór de Gouden Eeuw.", "De Noordse Compagnie ging op walvisjacht bij Spitsbergen. Welke compagnie voer naar Afrika en Amerika?"],
      },
      {
        q: "Wat was **uniek aan VOC** in 1602?",
        options: ["Eerste bedrijf met aandelen ter wereld", "Eerste Europese handelsbedrijf in Azië", "Eerste bedrijf met een eigen handelsvloot", "Eerste bedrijf met personeel in loondienst"],
        answer: 0,
        wrongHints: [null, "De Portugezen handelden al eerder in Azië.", "Kooplieden hadden al eeuwenlang eigen schepen.", "Werkplaatsen met betaald personeel bestonden al lang vóór 1602."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const goudenEeuwGeschiedenis = {
  id: "gouden-eeuw-geschiedenis",
  title: "De Gouden Eeuw (klas 2-3)",
  emoji: "💰",
  level: "klas2-3",
  subject: "geschiedenis",
  referentieNiveau: "2F",
  sloThema: "Geschiedenis Nederland — 17e eeuw",
  prerequisites: [
    { id: "tachtigjarige-oorlog-geschiedenis", title: "80-jarige oorlog", niveau: "2F" },
    { id: "tijdvakken-geschiedenis", title: "Tijdvakken-overzicht", niveau: "2F" },
  ],
  intro:
    "De Gouden Eeuw voor klas 2-3 — VOC + handel, schilders (Rembrandt/Vermeer), wetenschap (Huygens, Van Leeuwenhoek), slavernij + schaduwkanten, einde (rampjaar 1672). ~15 min.",
  triggerKeywords: [
    "gouden eeuw", "VOC", "WIC", "Rembrandt", "Vermeer",
    "Nachtwacht", "Amsterdam", "specerijen", "slavernij",
    "rampjaar", "1672", "Michiel de Ruyter", "Huygens",
  ],
  chapters,
  steps,
};

export default goudenEeuwGeschiedenis;
