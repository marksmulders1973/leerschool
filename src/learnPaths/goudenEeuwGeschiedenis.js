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
      "De **Gouden Eeuw** is de **17e eeuw** *(1600-1700)* — een tijd waarin Nederland *(toen 'de Republiek der Verenigde Nederlanden')* één van de **rijkste en machtigste landen ter wereld** was.\n\n**Waarom was Nederland zo rijk?**\n1. **Handel** — Nederlandse schepen kwamen overal: Indië, Japan, Amerika, Afrika.\n2. **Goede locatie** — Amsterdam, Rotterdam aan zee = makkelijk haven.\n3. **Tolerantie** — vluchtelingen uit andere landen kwamen hier wonen *(joden, hugenoten)*. Brachten kennis en geld mee.\n4. **Republiek** — geen koning, maar bestuurd door rijke kooplieden *(regenten)*. Snelle besluiten.\n5. **Hervormd protestantisme** — werken + sparen = deugd. Veel sparen = veel investeren.\n\n**Wanneer precies?**\n• **Begin**: rond **1600** *(net na 1581: Nederland riep zelf zelfstandigheid uit, deel van 80-jarige oorlog)*.\n• **Hoogtepunt**: rond **1648-1672**.\n• **Einde**: rond **1700** *(rampjaar 1672 was begin einde)*.\n\n**Wat was 'Gouden'?**\n• Welvaart voor rijke kooplieden, regenten, schilders.\n• Kunsten bloeiden — schilderkunst, literatuur, wetenschap.\n• Wereldhandel via Nederlandse schepen.\n• Amsterdam = **financieel centrum** van Europa *(eerste beurs ter wereld 1602)*.\n\n**Maar pas op — niet 'Gouden' voor iedereen**:\n• Veel **armoede** voor arbeiders in steden.\n• **Slavernij** — Nederlandse handel in tot slaaf gemaakten *(zie stap 4)*.\n• **Koloniën** — Indonesië, Suriname, Curaçao, Sint Maarten.\n\nDaarom gebruiken historici tegenwoordig vaak gewoon '17e eeuw' i.p.v. 'Gouden Eeuw' — om de schaduwkanten ook te erkennen.",
    svg: tijdslijnSvg(),
    checks: [
      {
        q: "Wanneer was de **Gouden Eeuw**?",
        options: ["17e eeuw (1600-1700)", "16e eeuw", "18e eeuw", "19e eeuw"],
        answer: 0,
        wrongHints: [null, "Net iets te vroeg.", "Te laat.", "Veel te laat."],
      },
      {
        q: "Waarom was Nederland in de 17e eeuw zo rijk?",
        options: ["Handel + tolerantie + goede ligging", "Olie", "Goud uit eigen mijnen", "Verovering van Europa"],
        answer: 0,
        wrongHints: [null, "Geen olie in 17e eeuw.", "Geen goudmijnen in NL.", "Nederland heerste niet over Europa."],
      },
      {
        q: "Welke vorm van regering had Nederland in de Gouden Eeuw?",
        options: ["Republiek (geen koning)", "Koninkrijk", "Keizerrijk", "Stadstaat"],
        answer: 0,
        wrongHints: [null, "Pas vanaf 1815 koninkrijk.", "Geen keizer.", "Geen losse stadstaat."],
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
      "Nederland werd rijk door **wereldhandel**. Het belangrijkste bedrijf: **VOC**.\n\n**VOC** = **Verenigde Oostindische Compagnie**.\n• Opgericht **1602** — **eerste echte multinational** ter wereld.\n• Bedrijf met **aandelen** die mensen konden kopen *(eerste aandelenmarkt!)*.\n• Verdiende geld met handel in **specerijen** *(peper, nootmuskaat, kruidnagel, kaneel)* uit Indonesië.\n\n**Wat deden VOC-schepen?**\n1. Vertrokken uit Amsterdam met geld + handelswaar.\n2. Voeren naar **Indonesië** (toen 'Oost-Indië').\n3. Kochten/dwongen specerijen.\n4. Voeren terug naar Nederland *(reis 1-1,5 jaar!)*.\n5. Verkochten in Europa met enorme winst.\n\n**Andere belangrijke handel**:\n• **WIC** = **West-Indische Compagnie** *(1621)* — handel met Amerika + Afrika *(suiker, slavernij)*.\n• **Haring + zoutmakerij** — visserij uit Noordzee.\n• **Granen uit Polen/Baltisch** — Amsterdam was Europa's korenkamer.\n• **Lakens + textiel** — Leiden, Delft.\n\n**Koloniën** in deze tijd:\n• **Oost-Indië** *(Indonesië)* — kruidnagel, specerijen.\n• **Suriname** + **Curaçao** *(Caribisch gebied)* — suiker, slaaf-handel.\n• **Nieuw-Amsterdam** *(later New York!)* — kort bezit van VOC.\n• **Kaap de Goede Hoop** *(Zuid-Afrika)* — verversingspunt voor schepen.\n\n**Belangrijke termen**:\n• **Aandeel** = stukje eigenaarschap in een bedrijf — koop je een aandeel VOC, deel je in winst (en verlies).\n• **Compagnie** = bedrijf — VOC was er één van de bekendste.\n• **Specerij** = exotische geur/smaakstof uit verre landen.\n\n**Cito-feitje**:\nDe VOC werd **eerste bedrijf met aandelen** die je kon kopen/verkopen *(zoals nu Apple, Tesla)*. Een grote uitvinding voor de wereld-economie.",
    checks: [
      {
        q: "Wat betekent **VOC**?",
        options: ["Verenigde Oostindische Compagnie", "Volkswagen Oude Cars", "Vrije Oranjes Compagnie", "Vlaamse Oost Coalitie"],
        answer: 0,
        wrongHints: [null, "Volkswagen werd pas in 1937 opgericht, eeuwen na de Gouden Eeuw.", "Niet bestaande organisatie.", "Vlaanderen had geen aparte compagnie in de Gouden Eeuw."],
      },
      {
        q: "Wanneer werd de **VOC opgericht**?",
        options: ["1602", "1500", "1700", "1815"],
        answer: 0,
        wrongHints: [null, "Te vroeg.", "Te laat.", "Koninkrijk Nederland."],
      },
      {
        q: "Wat handelde VOC vooral?",
        options: ["Specerijen uit Indonesië", "Auto's uit Duitsland", "IJzer uit Amerika", "Boeken uit Engeland"],
        answer: 0,
        wrongHints: [null, "Geen auto's in 17e eeuw.", "Niet kerntaak.", "Niet kerntaak."],
      },
      {
        q: "Welke stad **was eerst Nederlands** maar werd later New York?",
        options: ["Nieuw-Amsterdam", "Nieuw-Rotterdam", "Nieuw-Utrecht", "Vlissingen"],
        answer: 0,
        wrongHints: [null, "Bestond niet.", "Bestond niet.", "Echte plaats in Zeeland."],
      },
    ],
  },

  // STAP 3: Wetenschap + kunst
  {
    title: "Wetenschap, kunst en geleerden",
    explanation:
      "De Gouden Eeuw was ook tijd van **kunst en wetenschap** — Nederland werd cultureel-intellectueel een leider.\n\n**Schilders** *(uit je hoofd!)*:\n• **Rembrandt van Rijn** *(1606-1669)* — bekendste, maakte 'De Nachtwacht' *(1642)*. Speelde met licht/donker.\n• **Johannes Vermeer** *(1632-1675)* — 'Het Meisje met de Parel', 'Het Melkmeisje'. Stille interieurs.\n• **Jan Steen** *(1626-1679)* — humoristische tafereel-scenes, vandaar 'een huishouden van Jan Steen'.\n• **Frans Hals** — portretten met snelle penseelstreken.\n• **Pieter de Hooch** — interieurs met zonlicht.\n\n**Beroemde schilderijen**:\n• **De Nachtwacht** (Rembrandt) — groepsportret schutterij.\n• **Meisje met de Parel** (Vermeer) — 'Mona Lisa van het Noorden'.\n• **De Anatomische les van Dr. Tulp** (Rembrandt).\n• **De Aardrijkskundige** (Vermeer).\n\n**Wetenschap**:\n• **Christiaan Huygens** *(1629-1695)* — natuurkundige; ontdekte ring van Saturnus, vond slingerklok uit.\n• **Antoni van Leeuwenhoek** *(1632-1723)* — 'vader van de microbiologie'; zag eerst micro-organismen onder microscoop.\n• **Hugo de Groot** *(1583-1645)* — vader van internationaal recht.\n• **Baruch Spinoza** *(1632-1677)* — filosoof, woonde in Rijnsburg en Den Haag.\n\n**Literatuur**:\n• **Joost van den Vondel** — toneelschrijver, dichter ('De Gysbreght van Aemstel').\n• **Constantijn Huygens** — vader van Christiaan, dichter en diplomaat.\n• **Pieter Cornelisz. Hooft** — historicus, dichter.\n\n**Architectuur**:\n• **Amsterdamse grachtengordel** — herenhuizen langs de grachten *(UNESCO werelderfgoed)*.\n• **Koninklijk Paleis op de Dam** — oorspronkelijk Stadhuis, gebouwd 1648.\n• **Smalle hoge huizen** — belasting was op breedte van pand.\n\n**Cito-vraag**:\n*'Wie schilderde de Nachtwacht?'* → Rembrandt.\n*'Wie ontdekte micro-organismen?'* → Antoni van Leeuwenhoek.",
    checks: [
      {
        q: "Wie schilderde **de Nachtwacht**?",
        options: ["Rembrandt", "Vermeer", "Van Gogh", "Mondriaan"],
        answer: 0,
        wrongHints: [null, "Vermeer maakte Meisje met de Parel.", "19e eeuw, niet 17e.", "20e eeuw."],
      },
      {
        q: "Wie schilderde **het Meisje met de Parel**?",
        options: ["Vermeer", "Rembrandt", "Jan Steen", "Frans Hals"],
        answer: 0,
        wrongHints: [null, "Nachtwacht.", "Andere stijl.", "Portretten."],
      },
      {
        q: "Wie ontdekte **micro-organismen** met microscoop?",
        options: ["Antoni van Leeuwenhoek", "Christiaan Huygens", "Newton", "Galilei"],
        answer: 0,
        wrongHints: [null, "Astronomie + slingerklok.", "Engelsman, niet Nederlands.", "Italiaan, andere periode."],
      },
      {
        q: "**Waarom** waren Amsterdamse huizen **smal en hoog**?",
        options: ["Belasting was op breedte", "Geen ruimte", "Modetrend", "Beter tegen wind"],
        answer: 0,
        wrongHints: [null, "Ruimte was er wel.", "Geen mode-reden.", "Geen wind-reden."],
        uitlegPad: {
          stappen: [
            { titel: "Belasting-truc", tekst: "De gemeente belastte huizen op de breedte van de gevel. Daarom bouwden rijke kooplieden hun huizen smal maar wel hoog (en diep, want diepte werd niet belast). Spaarde geld." },
          ],
          woorden: [{ woord: "gevel", uitleg: "Voorkant van een huis." }],
          theorie: "Rijke kooplieden wilden huis tonen + belasting beperken.",
          voorbeelden: [{ type: "stap", tekst: "Op herengracht: huizen 5-6 m breed, 4-5 verdiepingen hoog, 30 m diep." }],
          basiskennis: [{ onderwerp: "Slim", uitleg: "Belasting-regels beïnvloeden bouwstijl." }],
          niveaus: {
            basis: "Belasting was op breedte. A.",
            simpeler: "Belasting werd gerekend per meter breedte van de gevel. Smaller huis = minder belasting. Dus rijke kooplieden bouwden smal + hoog + diep. = A.",
            nogSimpeler: "Belasting op breedte = A.",
          },
        },
      },
    ],
  },

  // STAP 4: Schaduwkanten — slavernij
  {
    title: "Schaduwkanten — slavernij en kolonialisme",
    explanation:
      "Naast rijkdom was er **groot leed** veroorzaakt door Nederland in de 17e eeuw.\n\n**Slavernij**:\n• Nederland deed actief mee aan **trans-Atlantische slavenhandel**.\n• **600.000 mensen** uit Afrika werden door Nederlanders verkocht/vervoerd *(1600-1814)*.\n• Vooral via de **WIC** *(West-Indische Compagnie)*.\n\n**Drie-hoek-handel**:\n1. Schepen voeren met **textiel + wapens** naar Afrika.\n2. Daar gevangen Afrikanen 'gekocht' van lokale leiders.\n3. **Vervoer naar Amerika/Suriname** *(de 'Middle Passage')* — 12-15% van mensen overleefde reis niet *(door honger, ziekte, gewelddadigheid)*.\n4. In Amerika werkten ze als **slaaf** op suiker- of koffieplantage *(vooral Suriname)*.\n5. Schepen voeren terug met **suiker, koffie, tabak**.\n\n**Slavernij in Suriname**:\n• Tot 1863 bestond slavernij *(Nederland was een van de laatste Europese landen die afschafte!)*.\n• Generaties Afrikanen geboren in slavernij.\n• Werkten op suiker-, koffie-, cacao-plantages.\n• Strenge straffen, weinig vrijheid.\n\n**Andere schaduwkanten**:\n• **Indonesië** — VOC dwong specerij-monopolie af met geweld. Inheemse bevolking onderdrukt.\n• **Banda-eilanden** — VOC vermoordde bijna alle bewoners *(15.000 mensen, 1621)* om nootmuskaat-monopolie te krijgen.\n• **Armoede in Nederland** — gewone arbeiders, vissers, dienstboden hadden hard leven. Niet alle Nederlanders waren rijk.\n\n**Hedendaagse discussie**:\n• Sinds 2000-jaren erkennen we deze duisterheid steeds meer.\n• **Excuses door premier Rutte** *(dec 2022)* en later **door koning Willem-Alexander** op Keti Koti *(1 juli 2023)* voor de Nederlandse rol in slavernij.\n• **Standbeelden** van plantagebezitters worden ter discussie gesteld.\n• Sommige musea passen tekst aan om eerlijker te vertellen *(Rijksmuseum)*.\n\n**Cito-vraag**:\n*'Wat was de WIC?'* → West-Indische Compagnie, voor handel met Amerika + Afrika, betrokken bij slavenhandel.\n\n**Belangrijke termen**:\n• **Slavernij** = mensen behandelen als bezit, dwingen tot werk zonder loon of vrijheid.\n• **Plantage** = grote landbouwbedrijf in koloniën *(suiker, koffie)*.\n• **Abolitionisme** = beweging tegen slavernij.\n• **Keti Koti** *(1 juli)* — Surinaamse herdenking afschaffing slavernij (1863).",
    checks: [
      {
        q: "Welk **bedrijf** was vooral betrokken bij slavernij?",
        options: ["WIC (West-Indische Compagnie)", "VOC", "ING", "Royal Dutch"],
        answer: 0,
        wrongHints: [null, "VOC vooral Indonesië, maar WIC was specifiek trans-Atlantisch.", "Modern bedrijf.", "Modern bedrijf."],
      },
      {
        q: "Hoe heet de **handelsroute** Afrika→Amerika→Europa→Afrika?",
        options: ["Driehoekshandel", "Cirkelroute", "Vier-hoek", "Snelheidsroute"],
        answer: 0,
        wrongHints: [null, "Het patroon is geen cirkel maar drie hoeken.", "De route had geen vier hoeken — telkens 3.", "De term gaat over de vorm, niet de snelheid."],
      },
      {
        q: "Wanneer schafte Nederland **slavernij af** in koloniën?",
        options: ["1863", "1700", "1945", "2000"],
        answer: 0,
        wrongHints: [null, "Te vroeg.", "Te laat.", "Veel te laat."],
      },
      {
        q: "Op welk eiland mocht alleen Nederland **nootmuskaat** verbouwen?",
        options: ["Banda-eilanden", "IJsland", "Sicilië", "Madagaskar"],
        answer: 0,
        wrongHints: [null, "Geen nootmuskaat.", "Geen nootmuskaat.", "Geen specerij-monopolie."],
      },
    ],
  },

  // STAP 5: Einde Gouden Eeuw
  {
    title: "Einde van de Gouden Eeuw",
    explanation:
      "Rond **1700** liep de Gouden Eeuw ten einde. Verschillende oorzaken samen.\n\n**Rampjaar 1672**:\nNederland werd **aangevallen door 4 buurlanden tegelijk**:\n• Frankrijk *(Lodewijk XIV)*.\n• Engeland *(Karel II)*.\n• Bisdom Munster.\n• Bisdom Keulen.\n\nBekend uit de geschiedenis: **'Het volk was redeloos, de regering radeloos, het land reddeloos.'**\n\nNederland werd uiteindelijk **gered** door:\n• **Waterlinie** — laag land onder water gezet *(zo konden vijanden niet door)*.\n• **Vlootacties** van Michiel de Ruyter *(beroemde admiraal)*.\n• Diplomatie — Engeland en bisdommen weer eruit gepraat.\n\nFrankrijk vocht door tot **1678** *(Vrede van Nijmegen)*.\n\n**Andere oorzaken einde**:\n1. **Engeland werd sterker** *(Industriële revolutie kwam eraan)*.\n2. **Oorlogen** met andere landen kosten geld — schulden.\n3. **Specerijen** werden minder bijzonder — andere landen handelden ook.\n4. **Pruiken-tijd** — rijke elite werd minder ondernemend, meer luxe.\n5. **Klimaat** — winters werden kouder *(kleine ijstijd)*, slechte oogsten.\n\n**Wat bleef?**\n• **Amsterdamse grachten** *(UNESCO werelderfgoed)*.\n• **Beroemde schilderijen** in musea *(Rijksmuseum, Mauritshuis)*.\n• **Aandelenbeurs** als systeem voor de wereldhandel.\n• **Erfenis van kolonisatie** — koloniën bleven Nederlands tot 20e eeuw *(Indonesië 1945, Suriname 1975)*.\n\n**Stadhouders en koningen — wat daarna?**\n• 18e eeuw: macht van **stadhouder Willem III** (ook koning van Engeland!).\n• 1795: Franse revolutie verdrijft stadhouder — Bataafse Republiek.\n• 1815: **Koninkrijk der Nederlanden** *(Koning Willem I)*.\n\n**Cito-feitje**:\nVeel mensen denken dat Nederland nooit echt machtig was. Maar in de 17e eeuw was Nederland korte tijd **invloedrijker dan Engeland, Frankrijk, Spanje**. Daarna nooit meer zo machtig.",
    checks: [
      {
        q: "Wat was het **Rampjaar**?",
        options: ["1672 — aanval door 4 landen", "1602 — VOC opgericht", "1648 — vrede van Münster", "1800 — Franse bezetting"],
        answer: 0,
        wrongHints: [null, "Geen ramp, juist begin Gouden Eeuw.", "Vrede, niet ramp.", "Te laat."],
      },
      {
        q: "Welke landen vielen Nederland aan in 1672?",
        options: ["Frankrijk + Engeland + 2 bisdommen", "Duitsland + Italië", "Spanje + Portugal", "Belgisch koninkrijk"],
        answer: 0,
        wrongHints: [null, "Duitsland bestond als land nog niet.", "Wel ooit (80-jarige oorlog) maar niet in 1672.", "Bestond niet."],
      },
      {
        q: "Hoe **redde** Nederland zich in 1672?",
        options: ["Waterlinie + de Ruyter + diplomatie", "Vluchten naar Engeland", "Geld geven", "Verloren"],
        answer: 0,
        wrongHints: [null, "Geen vlucht.", "Niet de hoofdoplossing.", "Niet helemaal verloren — kwam er bovenop."],
      },
      {
        q: "Wanneer werd Indonesië **onafhankelijk**?",
        options: ["1945", "1815", "1672", "1700"],
        answer: 0,
        wrongHints: [null, "Toen werd Nederland koninkrijk.", "Andere eeuw.", "Andere eeuw."],
      },
    ],
  },

  // STAP 6: Eind-mix
  {
    title: "Eind-opdracht — Gouden Eeuw mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: VOC, handel, kunst, slavernij, rampjaar.\n\nVeel succes!",
    checks: [
      {
        q: "Wat is **VOC**?",
        options: ["Verenigde Oostindische Compagnie", "Vrije Oranje-Coalitie", "Volkswagen Oost-Coalitie", "Vereniging Olie-Centra"],
        answer: 0,
        wrongHints: [null, "Geen politieke coalitie, maar een handelsbedrijf.", "Volkswagen werd pas in 1937 opgericht, niet in 1602.", "Olie was geen Gouden Eeuw-handelsproduct."],
      },
      {
        q: "Wie schilderde **De Nachtwacht**?",
        options: ["Rembrandt", "Vermeer", "Mondriaan", "Hieronymus Bosch"],
        answer: 0,
        wrongHints: [null, "Andere schilder.", "20e eeuw.", "15e eeuw."],
      },
      {
        q: "Welk **eiland was kort Nederlands** maar werd New York?",
        options: ["Nieuw-Amsterdam (Manhattan)", "Nieuw-Sicilië", "Nieuw-Madagaskar", "Nieuw-Cuba"],
        answer: 0,
        wrongHints: [null, "Sicilië is een Italiaans eiland in de Middellandse Zee.", "Madagaskar is een Afrikaans eiland, geen NL-kolonie.", "Cuba was Spaans, geen NL-kolonie."],
      },
      {
        q: "Wanneer werd **slavernij afgeschaft** in NL-koloniën?",
        options: ["1863", "1648", "1672", "1945"],
        answer: 0,
        wrongHints: [null, "Vrede 80-jarige oorlog.", "Rampjaar.", "Na WO2."],
      },
      {
        q: "Welk **bedrijf** was vooral betrokken bij slavernij?",
        options: ["WIC", "VOC", "ING", "Microsoft"],
        answer: 0,
        wrongHints: [null, "Oost-Indië, niet primair slavernij.", "Modern.", "Modern."],
      },
      {
        q: "Wat was **uniek aan VOC** in 1602?",
        options: ["Eerste bedrijf met aandelen ter wereld", "Eerste bank", "Eerste museum", "Eerste universiteit"],
        answer: 0,
        wrongHints: [null, "Niet bank.", "Niet museum.", "Niet universiteit."],
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
