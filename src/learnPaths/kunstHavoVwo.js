// Leerpad: Kunst (algemeen) — HAVO/VWO
// Stijlperioden + analyse + NL-kunstgeschiedenis.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  klassiek: "#8d6e63",
  modern: "#ef6c00",
  goud: "#ffd54f",
  acc: "#42a5f5",
};

const stepEmojis = ["🏛️", "🎨", "🖼️", "🎬", "🏆"];

const chapters = [
  { letter: "A", title: "Klassieke kunst (Oudheid-Renaissance)", emoji: "🏛️", from: 0, to: 0 },
  { letter: "B", title: "Barok t/m 19e eeuw", emoji: "🎨", from: 1, to: 1 },
  { letter: "C", title: "Moderne kunst (1900-1970)", emoji: "🖼️", from: 2, to: 2 },
  { letter: "D", title: "Hedendaagse + analyse", emoji: "🎬", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Klassieke kunst ───────────────────────────────────
  {
    title: "Klassieke kunst — Oudheid + Middeleeuwen + Renaissance",
    explanation:
      "**Kunst** als HAVO/VWO-vak (Kunst algemeen, Kunstgeschiedenis, of CKV). CSE test stijlperioden + analyse + maatschappelijke context.\n\n**Oudheid** (~3000 v.Chr.-500 n.Chr.):\n\n**Egypte** (3000-30 v.Chr.):\n• **Frontaliteit**: figuren altijd recht voorop (gezicht, schouders, voet).\n• Hiërarchische verhouding: groot = belangrijk (farao groter dan vrouw of slaven).\n• Hiërogliefen + tempels + piramiden.\n• Symboliek: ankh = leven, Horusoog = bescherming.\n\n**Grieks** (~800-30 v.Chr.):\n• Archaïsch: starre figuren, **Kouros + Kore**-beelden (~700-480 v.Chr.).\n• Klassiek (5e-4e eeuw v.Chr.): **Idealen + perfectie**. Polykleitos's Doryforos (speerdrager) = canon van menselijke verhoudingen. **Discoboles** van Myron.\n• Architectuur: tempels met zuilen (**Dorisch, Ionisch, Korinthisch**). Parthenon Athene 447-432 v.Chr.\n• Hellenistisch (323-30 v.Chr.): meer emotie + dramatiek. **Laocoön + zonen** (~25 v.Chr.). Venus van Milo.\n\n**Romeins** (~500 v.Chr.-476 n.Chr.):\n• Realistische **portretbusten** (anders dan idealen-Grieks).\n• Mozaïeken + fresco's (Pompeii).\n• Architectuur: **bogen + koepels + cement**. Pantheon (118 n.Chr.) — koepel-recordhouder eeuwen. **Colosseum** (80 n.Chr.). Aquaducten.\n• Triomf-bogen + zuilen voor keizers.\n\n**Middeleeuwen** (500-1400 n.Chr.):\n\n**Vroege Middeleeuwen + Karolingisch** (500-1000):\n• Kerk dominante opdrachtgever.\n• Boekverluchting (Ierse + Engelse manuscripten).\n• Gouden Karolingische kunst onder Karel de Grote.\n\n**Romaanse stijl** (1000-1200):\n• Robuust + zwaar.\n• Rondbogen.\n• Dikke muren + kleine ramen.\n• Voorbeelden: Speyer-kathedraal DE, Sint-Servaas Maastricht.\n\n**Gotische stijl** (1150-1400):\n• Hoog + licht.\n• **Spitsbogen**.\n• **Glas-in-lood**-ramen (vooral roosvensters).\n• **Stenen ribbengewelven**.\n• Voorbeelden: Notre-Dame Paris, Chartres-kathedraal, Reims, Keulen-kathedraal.\n• NL: Sint Janskathedraal Den Bosch, Domtoren Utrecht.\n• Beelden in nissen.\n\n**Schilderkunst Middeleeuwen**:\n• Vooral religieus.\n• Iconografisch (symboliek belangrijker dan realisme).\n• Gouden achtergronden = hemels.\n• Geen perspectief — figuren plat, verhoudingen symbolisch.\n\n**Renaissance** (1400-1600):\n\n**Italiaanse Renaissance** (~1400-1600):\n• 'Wedergeboorte' klassieke oudheid.\n• Florence + Venetië + Rome centra.\n• **Mecenaten**: Medici-familie financierden kunstenaars.\n• Innovaties:\n  - **Perspectief** (Filippo Brunelleschi ~1420) — diepte op platte ondergrond.\n  - **Anatomie-studies** (Leonardo).\n  - **Realisme + emotie**.\n  - **Wereldlijke onderwerpen** naast religieus.\n  - **Olieverf** vervangt tempera.\n\n**Hoofdfiguren Italiaans**:\n• **Leonardo da Vinci** (1452-1519): *Mona Lisa* (1503-19), *Het Laatste Avondmaal* (1495-98). Veelzijdig genie.\n• **Michelangelo Buonarroti** (1475-1564): plafond Sixtijnse Kapel (1508-12), David (1504), Pietà.\n• **Rafaël** (1483-1520): *School van Athene* (1509-11).\n• **Donatello** (~1386-1466): vroeg-Renaissance beeldhouwer, bronzen David.\n• **Botticelli** (1445-1510): *Geboorte van Venus*, *Lente*.\n• **Titiaan** (Venetië, 1488-1576): kleurenmeester.\n\n**Noordelijke Renaissance** (parallel, NL+Vlaanderen+DE):\n• Detail + realisme.\n• Olieverf-uitvinding **Jan van Eyck** (1390-1441): *Arnolfini Portret* (1434), *Lam Gods* (1432, Gent).\n• **Hieronymus Bosch** (1450-1516): fantastische taferelen, *Tuin der Lusten*.\n• **Pieter Bruegel de Oude** (1525-1569): boerentaferelen, *De jagers in de sneeuw*.\n• **Albrecht Dürer** (1471-1528): DE, gravures + zelfportretten.\n\n**Renaissance-gedachte**:\n• **Humanisme**: mens in centrum (anders dan middeleeuwse God-centrum).\n• Erasmus van Rotterdam (1466-1536): *Lof der Zotheid* (1511).\n• Wetenschappelijke revolutie begint: Copernicus, Galilei.",
    checks: [
      {
        q: "Welke architectonische stijl gebruikt **spitsbogen + glas-in-lood**?",
        options: ["Gotisch","Romaans","Renaissance","Barok"],
        answer: 0,
        wrongHints: [null, "Rondbogen + dikke muren.", "Klassiek + perspectief.", "Drama + krullen later."],
        uitlegPad: {
          stappen: [{ titel: "Gotisch = licht + hoog", tekst: "**Gotische stijl** (1150-1400): **spitsbogen** ipv romaanse rondbogen → muren konden hoger + dunner. **Glas-in-lood-ramen** (vooral roosvensters) brachten licht binnen. Symboliek: licht = goddelijk. **Stenen ribbengewelven** verdeelden gewicht. Voorbeelden: Notre-Dame Paris, Chartres, NL Sint Jan Den Bosch + Domtoren Utrecht." }],
          niveaus: { basis: "Gotisch. A.", simpeler: "Spits = gotisch = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wie schilderde **Mona Lisa**?",
        options: ["Leonardo da Vinci","Michelangelo","Rafaël","Botticelli"],
        answer: 0,
        wrongHints: [null, "Sixtijnse Kapel.", "School van Athene.", "Geboorte van Venus."],
        uitlegPad: {
          stappen: [{ titel: "1503-1519", tekst: "**Leonardo da Vinci** (1452-1519) schilderde *Mona Lisa* (1503-19). **Sfumato-techniek**: zachte overgangen tonen, mysterieuze glimlach. Hangt in **Louvre Parijs** sinds 1797. Veiligst beveiligde + meest bezocht schilderij wereld (~10 mln bezoekers/jaar). 1911 gestolen (terug 1913) — bracht extreem fame." }],
          niveaus: { basis: "Leonardo. A.", simpeler: "Mona Lisa = Leonardo = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Perspectief** in schilderkunst werd uitgevonden door:",
        options: ["Brunelleschi (~1420 Florence)","Caravaggio","Rembrandt","Picasso"],
        answer: 0,
        wrongHints: [null, "Veel later.", "Veel later.", "20e eeuw."],
        uitlegPad: {
          stappen: [{ titel: "Lineair perspectief", tekst: "**Filippo Brunelleschi** (1377-1446) ontwikkelde ~1420 in Florence **lineair perspectief** met **vanishing point**: parallelle lijnen lopen samen aan horizon. Revolutionair voor 2D-schilderkunst — gaf diepte-illusie. Versterkt door wiskundige berekeningen. **Masaccio** + **Donatello** + later **Leonardo + Rafaël** pasten meesterlijk toe." }],
          theorie: "Voor Brunelleschi: middeleeuwse schilderkunst plat, symbolisch. Daarna: realistische ruimte mogelijk.",
          niveaus: { basis: "Brunelleschi. A.", simpeler: "Perspectief = Brunelleschi = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk Renaissance-kunstwerk schilderde Michelangelo?",
        options: ["Sixtijnse Kapel-plafond","Mona Lisa","Lam Gods","Tuin der Lusten"],
        answer: 0,
        wrongHints: [null, "Leonardo.", "Van Eyck.", "Bosch."],
        uitlegPad: {
          stappen: [{ titel: "1508-1512", tekst: "**Michelangelo** (1475-1564) schilderde plafond **Sixtijnse Kapel** Vaticaan in 4 jaar (1508-12). 5000+ vierkante meter fresco's. Beroemd: 'Schepping van Adam' (vingers Adam + God). Later schilderde hij ook *Laatste Oordeel* op achterwand (1536-41). Michelangelo zelf zag zich primair als **beeldhouwer** (David 1504, Pietà) maar werd door Paus gedwongen tot schilderen." }],
          niveaus: { basis: "Sixtijnse Kapel. A.", simpeler: "Michelangelo = Sixtijns = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **humanisme** in Renaissance-zin?",
        options: ["Mens centraal (vs middeleeuwse God-centrum)","Mensenrechten-beweging","Helpen-organisatie","Geen religie"],
        answer: 0,
        wrongHints: [null, "Niet — komt later, andere betekenis.", "Niet relevant.", "Niet — wel religie + mens."],
        uitlegPad: {
          stappen: [{ titel: "Erasmus + Petrarca", tekst: "**Humanisme** (Renaissance): intellectuele beweging die **mens centraal** plaatst (anders dan middeleeuws God-centrum). Studie klassieke oudheid + talen (Latijn, Grieks, Hebreeuws). **Erasmus van Rotterdam** (1466-1536): *Lof der Zotheid* — kritiek op kerk + dwaasheid. **Petrarca** (1304-1374) bedacht 'duistere middeleeuwen' (te zwart geschilderd) — pleitte voor herontdekking klassieke geest.\n\nModern 'humanisme' = niet-religieuze ethiek — andere betekenis." }],
          niveaus: { basis: "Mens centraal. A.", simpeler: "Humanisme = mens centraal = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Barok t/m 19e eeuw ────────────────────────────────
  {
    title: "Barok → Romantiek → Realisme → Impressionisme",
    explanation:
      "**Barok** (~1600-1750):\n• **Drama, beweging, emotie, contrast**.\n• Reactie op Reformatie — Katholieke Kerk gebruikte barok voor effect.\n• Sterke licht-donker-contrasten (**chiaroscuro**).\n• Diagonale composities.\n\n**Italië**:\n• **Caravaggio** (1571-1610): dramatisch licht, controversiële realisme. *Roeping van Mattheüs*.\n• **Bernini** (1598-1680): beeldhouwer + architect Rome. *De vervoering van Sint Theresa*.\n\n**Vlaanderen**:\n• **Peter Paul Rubens** (1577-1640): kleurrijk, beweging. *Kruisafneming*.\n• **Anthony van Dyck** (1599-1641): portretten.\n\n**Nederland — Gouden Eeuw** (1600s, parallel):\n• Geen barok in katholieke zin — protestants land. Geen kerk-opdrachten.\n• Wel **eigen Gouden Eeuw**: VOC-rijkdom, burgerlijke kunstmarkt.\n• Specialisatie: **landschappen, stillevens, portretten, genrestukken** (alledaagse taferelen).\n• **Rembrandt van Rijn** (1606-1669): clair-obscur, psychologische diepte. *De Nachtwacht* (1642), zelfportretten.\n• **Johannes Vermeer** (1632-1675): stille interieurs, licht-meester. *Meisje met de parel* (~1665), *Het melkmeisje*.\n• **Frans Hals** (1582-1666): levendige portretten.\n• **Jacob van Ruisdael**: landschappen.\n• **Pieter de Hooch**: interieurs.\n\n**Rococo** (~1700-1780):\n• Verfijnder, luchtiger dan barok.\n• Fragiele decoratie, krullen, pastelkleuren.\n• Erotiek + 'gallant' onderwerpen.\n• Vooral FR aristocratie vóór Revolutie.\n• **Watteau**, **Fragonard**, **Boucher**.\n\n**Neoclassicisme** (~1770-1830):\n• Reactie op rococo's frivoliteit.\n• Terug naar klassieke deugd + ernst.\n• Geïnspireerd door opgravingen Pompeii (1748+).\n• Strakke compositie, helder licht.\n• **Jacques-Louis David** (FR): *Eed van de Horatii* (1784), *Marat in zijn bad* (1793, na moord Marat tijdens Revolutie).\n• **Ingres**: portretten + nudes.\n• Architectuur: zuilen + driehoeksvelden.\n\n**Romantiek** (~1800-1850):\n• Tegenbeweging Verlichting-rationaliteit.\n• **Gevoel, natuur, individu, exotisme, geschiedenis, sublieme**.\n• Drama, beweging, kleur.\n• **Eugène Delacroix** (FR): *Vrijheid leidt het volk* (1830, Franse Revolutie 1830).\n• **Théodore Géricault**: *Vlot van de Medusa* (1818-19, ramp-doorgaan-zee).\n• **Caspar David Friedrich** (DE): *Wanderer over Zee van Mist* (1818).\n• **William Turner** (UK): atmosferische landschappen.\n• **Francisco Goya** (ES): donker laat werk, *Saturn devoreert zijn kind* (1819-23).\n\n**Realisme** (~1840-1880):\n• Schilder wat je werkelijk ziet — geen idealisering.\n• Onderwerpen: gewone mensen, arbeiders, boeren.\n• Niet historie of mythe.\n• **Gustave Courbet** (FR, 1819-77): *De steenklopper* (1849), *Begrafenis in Ornans* (1849-50).\n• **Jean-François Millet**: *De arenleesters* (1857) — boerenwerk.\n• **Honoré Daumier**: politiek-sociaal commentaar via caricaturen.\n\n**Impressionisme** (~1870-1900):\n• **Eerste tentoonstelling 1874** Parijs (groep onder leiding van Monet + Renoir).\n• Naam van criticus' spot: 'Impressie, opkomende zon' (Monet).\n• Innovaties:\n  - **Buiten schilderen (en plein air)**.\n  - **Licht-effecten + kleur** belangrijker dan vorm.\n  - **Korte penseelstreken**.\n  - **Industriële verfproductie** (tubes) maakte buiten-schilderen mogelijk.\n  - Foto-uitvinding: minder noodzaak voor letterlijke weergave.\n• **Claude Monet** (1840-1926): *Waterlelies*-serie, *Kathedraal van Rouen* in verschillende lichten.\n• **Pierre-Auguste Renoir**: vrolijke scènes, *Le Moulin de la Galette*.\n• **Edgar Degas**: balletdanseressen.\n• **Edouard Manet** (overgangsfiguur): *Olympia*, *Le déjeuner sur l'herbe*.\n• **Camille Pissarro**: Pissarro's tuin.\n\n**Post-impressionisme** (~1880-1905):\n• Bouwt voort, maar individueler.\n• **Vincent van Gogh** (NL, 1853-1890): expressieve kleur, dikke verfopzet, emotie. *Zonnebloemen, Sterrennacht, Aardappeleters*. Zelfportretten met afgesneden oor. Verkocht maar 1 schilderij tijdens leven.\n• **Paul Cézanne** (FR): geometrische vormen, basis kubisme.\n• **Paul Gauguin** (FR): synthetisme, Tahiti-werken.\n• **Georges Seurat**: pointillisme.\n• **Henri de Toulouse-Lautrec**: Parijse nachtleven.",
    checks: [
      {
        q: "Wie schilderde **De Nachtwacht** (1642)?",
        options: ["Rembrandt","Vermeer","Hals","Van Eyck"],
        answer: 0,
        wrongHints: [null, "Meisje met de parel.", "Levendige portretten.", "Veel eerder, NL Renaissance."],
        uitlegPad: {
          stappen: [{ titel: "1642 Amsterdam", tekst: "**Rembrandt van Rijn** (1606-69) schilderde *De Nachtwacht* in 1642. Officieel: 'De compagnie van kapitein Frans Banning Cocq'. Schutterstuk (groepsportret) maar met drama + beweging — innovatief. Hangt **Rijksmuseum Amsterdam**. **Niet eigenlijk nacht** — gele vernis verkleurde, nu schoongemaakt. Recent verder gerestaureerd via 'Operation Night Watch' 2019+." }],
          niveaus: { basis: "Rembrandt. A.", simpeler: "Nachtwacht = Rembrandt = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Chiaroscuro** is:",
        options: ["Sterk licht-donker-contrast","Veel kleur","Geometrische vormen","Buiten schilderen"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet relevant.", "Impressionisme."],
        uitlegPad: {
          stappen: [{ titel: "Italiaans 'licht-donker'", tekst: "**Chiaroscuro** (Italiaans 'licht-donker'): dramatisch contrast tussen licht + schaduw. Kenmerkend voor **barok** (Caravaggio, Rembrandt). Creëert volume + drama + psychologische diepte. Anders dan vlakke middeleeuwse verlichting." }],
          niveaus: { basis: "Licht-donker. A.", simpeler: "Chiaroscuro = licht-donker = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Impressionisme** kenmerkt zich door:",
        options: ["Korte penseelstreken + buiten + licht","Geometrische abstracte vormen","Gouden achtergronden","Strenge lineair perspectief"],
        answer: 0,
        wrongHints: [null, "Niet — dat is kubisme.", "Niet — middeleeuws.", "Niet primair."],
        uitlegPad: {
          stappen: [{ titel: "1874 Parijs-start", tekst: "**Impressionisme** (1870-1900): groep schilders (Monet, Renoir, Pissarro, Degas) breken met academische conventies. Innovaties: **buiten schilderen** ('en plein air'), **korte/losse penseelstreken**, **kleur + licht** boven vorm + lijn. Mogelijk gemaakt door industriële verftubes (1841) + portable easels. **Eerste tentoonstelling 1874** in Parijs. Naam van kritisch artikel over Monet's *Impressie, opkomende zon*." }],
          niveaus: { basis: "Korte penseel + licht. A.", simpeler: "Imp = licht + buiten = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke schilder werd **na zijn dood pas beroemd**?",
        options: ["Vincent van Gogh","Rembrandt","Monet","Picasso"],
        answer: 0,
        wrongHints: [null, "Beroemd tijdens leven.", "Beroemd tijdens leven.", "Zeer beroemd tijdens leven."],
        uitlegPad: {
          stappen: [{ titel: "1 schilderij verkocht", tekst: "**Vincent van Gogh** (1853-1890) verkocht tijdens zijn leven maar **1 schilderij** (*De rode wijngaard*, 1888). Verbleef in armoede, depressief, sneed oor af 1888, schoot zichzelf 1890 (29 juli). Broer Theo + diens vrouw Jo van Gogh-Bonger verzamelden + promoot werk na zijn dood. Nu wereldberoemd, schilderijen tot $200+ mln waard. **Van Gogh Museum** Amsterdam." }],
          niveaus: { basis: "Van Gogh. A.", simpeler: "Postuum = Van Gogh = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**NL Gouden Eeuw** kunst-specialiteit was:",
        options: ["Genre-stukken + landschappen + stillevens","Kerk-fresco's","Mythologische scènes","Tapijten"],
        answer: 0,
        wrongHints: [null, "Niet — protestants, geen kerk-kunst.", "Niet primair NL.", "Niet primair NL."],
        uitlegPad: {
          stappen: [{ titel: "Burgerlijke kunstmarkt", tekst: "**NL Gouden Eeuw** (1600s): geen rijke kerk-mecenaten (protestants), maar **welvarende burgerij** kocht kunst voor woonhuizen. Resultaat: kunstmarkt met **specialisaties** per schilder:\n• **Landschappen** (Ruisdael, Van Goyen).\n• **Stillevens** (bloemen, vanitas — Heda).\n• **Portretten** (Hals, Rembrandt).\n• **Interieurs / genre-stukken** (Vermeer, De Hooch, Steen).\n• **Zeegezichten** (Van de Velde).\n• **Stadsgezichten** (Berckheyde).\n\n~5 mln schilderijen geproduceerd in NL 1600s — meer dan ooit eerder." }],
          niveaus: { basis: "Landschap/stilleven/portret. A.", simpeler: "NL = specialismen = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Moderne kunst (1900-1970) ─────────────────────────
  {
    title: "Moderne kunst — 1900 tot 1970",
    explanation:
      "**20e eeuw**: revolutionaire stijlontwikkelingen. Geen één-stijl-meer dominant — vele 'ismes' parallel.\n\n**Fauvisme** (~1905-1908):\n• 'Fauves' = wilde beesten (kritisch).\n• Felle, niet-natuurlijke kleuren.\n• **Henri Matisse** (1869-1954) — hoofdfiguur. *De dans*, *Het rode atelier*.\n• Vereenvoudigde vormen, expressieve emotie via kleur.\n\n**Kubisme** (~1907-1914+):\n• **Pablo Picasso** (1881-1973) + **Georges Braque** (1882-1963) ontwikkelden samen.\n• Objecten in geometrische vormen ontleed, vanuit meerdere perspectieven tegelijk.\n• **Analytisch kubisme** (1909-12): grijs/bruin, fragmentatie.\n• **Synthetisch kubisme** (1912+): kleur terug, collage-elementen, krantenpapier (eerste keer in kunst).\n• Picasso *Demoiselles d'Avignon* (1907) = startpunt.\n• Picasso *Guernica* (1937) = anti-fascistisch meesterwerk (Spaanse Burgeroorlog).\n\n**Expressionisme** (~1905-1925):\n• Emotionele vertekening voor effect — innerlijke wereld boven uiterlijke werkelijkheid.\n• **Duitsland**: *Die Brücke* (Kirchner) + *Der Blaue Reiter* (Kandinsky, Marc).\n• **Edvard Munch** (NO, 1863-1944): *De schreeuw* (1893, eerder maar invloedrijk).\n• **Vassily Kandinsky** (RU/DE): eerste abstracte kunst ~1910.\n\n**Futurisme** (~1909-1916):\n• Italiaans — verheerlijking machine, snelheid, geweld, moderne stad.\n• Manifesto Marinetti 1909.\n• **Umberto Boccioni**.\n• Helaas: associëerde met fascisme later.\n\n**Suprematisme + Constructivisme** (~1915-1930):\n• Russische avant-garde.\n• Geometrische abstractie.\n• **Kazimir Malevich** (1879-1935): *Zwart vierkant* (1915) — radicaal abstract.\n• Sociaal idealisme — Sovjet-Unie tot Stalin stop.\n\n**De Stijl** (~1917-1931) — Nederlands!:\n• Tijdschrift opgericht door **Theo van Doesburg** + **Piet Mondriaan**.\n• Geometrische abstractie. **Alleen rechthoeken + primaire kleuren (rood/geel/blauw) + zwart/wit/grijs**.\n• Strenge harmonie.\n• **Mondriaan** (1872-1944): *Compositie met rood, geel en blauw* (1930) — iconisch.\n• **Gerrit Rietveld** (1888-1964): rood-blauwe stoel (1917), **Rietveld-Schröderhuis** Utrecht (1924, UNESCO erfgoed).\n• Invloed: moderne architectuur + design.\n\n**Dadaïsme** (~1916-1924):\n• Anti-kunst tijdens WO1 — protest tegen rationaliteit die oorlog veroorzaakte.\n• Zürich + Berlin + New York.\n• **Marcel Duchamp** (FR, 1887-1968): **ready-mades** — alledaagse objecten als kunst. *Urinoir* (1917 'Fontein') — getekend 'R. Mutt'. Schok-kunst.\n• Hannah Höch: photomontage.\n• Tristan Tzara: gedichten.\n\n**Surrealisme** (~1924-1945+):\n• Onbewuste + droom centraal — Freud-invloed.\n• **André Breton** Manifest 1924.\n• **Salvador Dalí** (ES, 1904-1989): *De volharding van het geheugen* (1931) — smeltende klokken.\n• **René Magritte** (BE, 1898-1967): *De verraad der beelden* (1929) — pijp + tekst 'Ceci n'est pas une pipe'.\n• **Joan Miró**, **Max Ernst**.\n• **Frida Kahlo** (MX, 1907-1954): zelfportretten, surrealistisch + politiek.\n\n**Bauhaus** (1919-1933, Duitsland):\n• Designschool — kunst + ambacht + industrie.\n• Functionalisme: 'Form follows function'.\n• Walter Gropius (oprichter), Mies van der Rohe, Marcel Breuer, Kandinsky, Klee.\n• Nazi's sloten school 1933 — docenten verhuisden VS.\n\n**Abstract expressionisme** (1940s-1950s):\n• Eerste grote VS-kunststroming.\n• Tussen WO2-immigratie (Europese kunstenaars) + na-WO2-Amerika.\n• **Jackson Pollock** (1912-1956): **drip painting** — verf druppelen op canvas op grond. *Number 1A* (1948).\n• **Mark Rothko** (1903-1970): kleurvelden, contemplatief.\n• **Willem de Kooning** (NL/VS): figuratief-abstract.\n\n**Pop Art** (1955-1970s):\n• Massaproductie-cultuur als bron.\n• Soep-blikken, strips, BN'ers.\n• **Andy Warhol** (VS, 1928-1987): *Campbell's Soup Cans* (1962), *Marilyn Diptych* (1962), Brillo-boxes. Factory-studio.\n• **Roy Lichtenstein**: stripachtige schilderijen (Whaam!, 1963).\n• **David Hockney** (UK).\n• **Richard Hamilton** (UK, vroege).\n\n**Minimalisme** (1960s):\n• 'Less is more'.\n• Strikte geometrische vormen, herhalingen.\n• **Donald Judd**, **Frank Stella**, **Sol LeWitt**.\n• Reactie op emotionele abstract-expressionisme.\n\n**Conceptuele kunst** (1960s+):\n• Idee belangrijker dan uitvoering.\n• Tekst, performance, gedachten.\n• **Joseph Beuys** (DE), **Yoko Ono**.\n\n**Body art + performance** (1960s+):\n• Lichaam als medium.\n• **Marina Abramović**: extreme performances.",
    checks: [
      {
        q: "**De Stijl** beweging stamt uit:",
        options: ["Nederland (Mondriaan + Rietveld)","Italië","Duitsland","Frankrijk"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — Bauhaus.", "Niet — fauvisme/kubisme."],
        uitlegPad: {
          stappen: [{ titel: "1917 Leiden", tekst: "**De Stijl**: NL-beweging opgericht 1917 in Leiden door **Theo van Doesburg + Piet Mondriaan**. Strikte regels: alleen **rechthoeken + primaire kleuren (rood/geel/blauw) + zwart/wit/grijs**. Geometrische abstractie. Mondriaan = schilder, **Rietveld** = meubels + architectuur (rood-blauwe stoel 1917, Rietveld-Schröderhuis Utrecht 1924). UNESCO-erfgoed." }],
          niveaus: { basis: "NL. A.", simpeler: "De Stijl = NL = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wie maakte **Urinoir / Fountain** (1917)?",
        options: ["Marcel Duchamp","Andy Warhol","Picasso","Dalí"],
        answer: 0,
        wrongHints: [null, "Pop Art later.", "Kubisme.", "Surrealisme."],
        uitlegPad: {
          stappen: [{ titel: "Ready-made dadaïsme", tekst: "**Marcel Duchamp** (1887-1968) zond in 1917 een **urinoir** onder pseudoniem 'R. Mutt' naar tentoonstelling Society of Independent Artists. Werd geweigerd → schandaal → kunstgeschiedenis-mijlpaal. **Ready-made**-concept: alledaags object wordt kunst door keuze + presentatie. Fundamenteel voor 20e-eeuwse kunst — daad van benoemen = kunst." }],
          niveaus: { basis: "Duchamp. A.", simpeler: "Urinoir = Duchamp = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Pop Art** kunstenaar:",
        options: ["Andy Warhol","Picasso","Mondriaan","Caravaggio"],
        answer: 0,
        wrongHints: [null, "Kubist.", "De Stijl.", "Barok."],
        uitlegPad: {
          stappen: [{ titel: "1962-1970s", tekst: "**Andy Warhol** (1928-1987) = boegbeeld **Pop Art**: kunst die massacultuur (soep-blikken, BN'ers, strips) verheft tot kunst. Bekendste: *Campbell's Soup Cans* (1962), *Marilyn Diptych* (na Monroe's dood 1962), *Brillo-boxes*. Werkte in **The Factory** Studio New York — massaproductie kunst. 'In the future everyone will be famous for 15 minutes' = profetisch citaat (1968)." }],
          niveaus: { basis: "Warhol. A.", simpeler: "Pop Art = Warhol = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke beweging is **abstract** + **geometrisch**?",
        options: ["Kubisme / De Stijl","Romantiek","Realisme","Renaissance"],
        answer: 0,
        wrongHints: [null, "Emotie + natuur.", "Werkelijkheid.", "Klassieke idealen."],
        uitlegPad: {
          stappen: [{ titel: "20e eeuw breekt vorm op", tekst: "**Kubisme** (Picasso/Braque 1907+) + **De Stijl** (Mondriaan 1917+) + **Suprematisme** (Malevich 1915) gingen geometrisch abstract. Mondriaan: alleen rechthoeken + primaire kleuren. Kubisme: objecten ontleed in vlakken vanuit meerdere perspectieven tegelijk. Tegenstelling met figuratief realisme van eerdere eeuwen." }],
          niveaus: { basis: "Kubisme / Stijl. A.", simpeler: "Geom abstract = 20e eeuw = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Surrealisme** wordt geïnspireerd door:",
        options: ["Onbewuste + dromen (Freud)","Politiek","Wetenschap","Industrie"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet primair.", "Niet — dat is futurisme."],
        uitlegPad: {
          stappen: [{ titel: "1924 Breton-manifest", tekst: "**Surrealisme** (André Breton-manifest 1924): kunst van het **onbewuste** + dromen + ontsnappen aan rationaliteit. Geïnspireerd door **Sigmund Freud** (psychoanalyse, droomduiding 1899). **Dalí** (smeltende klokken 1931), **Magritte** (pijp), **Miró**, **Frida Kahlo**. Tegenovergesteld van rationeel kubisme + geometrische abstractie." }],
          niveaus: { basis: "Onbewuste/dromen. A.", simpeler: "Surr = dromen = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Hedendaagse + analyse ─────────────────────────────
  {
    title: "Hedendaagse kunst + analyse-methodieken",
    explanation:
      "**Hedendaagse kunst** (~1970 - heden) = pluralistisch. Geen één stijl meer dominant.\n\n**Postmodernisme** (~1970-2000):\n• Geen 'grote verhalen' meer geloofd.\n• Eclectisch — alles mag.\n• Citaten + parodie van vroegere stijlen.\n• **Cindy Sherman** (VS): zelfportretten als historische personages.\n• **Jeff Koons**: kitsch-luxe, *Balloon Dog*.\n• Architectuur: post-modern (Charles Jencks).\n\n**Land Art** (1960s+):\n• Natuur als materiaal.\n• Werk vaak buiten musea, eens en groot.\n• **Robert Smithson**: *Spiral Jetty* (1970) Utah.\n• **Christo + Jeanne-Claude**: verpakte gebouwen (Reichstag 1995).\n• **Andy Goldsworthy**: vergankelijke natuurwerken.\n\n**Video Art** (1960s+):\n• Nam Jum Paik (KR/VS) pionier.\n• **Bill Viola**: contemplatieve video-installaties.\n• Pixar/digitale revolutie 1990s+.\n\n**Street art / Graffiti** (1970s+):\n• **Banksy** (UK, anoniem): politieke pochoir-stencils, *Girl with Balloon*. Verkocht 2018 + zelfvernietigde tijdens veiling.\n• **Jean-Michel Basquiat** (VS, 1960-1988): graffiti naar galerij. Vrij-jong-overleden.\n• **Keith Haring** (1958-1990): toegankelijke iconografie.\n\n**Hedendaags Nederland**:\n• **Marlene Dumas** (ZA/NL): emotionele portretten.\n• **Erwin Olaf** (1959-2023): geënsceneerde foto's.\n• **Anton Corbijn**: fotografie + film (rock-iconen).\n• **Studio Drift**: kunst-tech-installaties.\n\n**AI-generated art** (2020s):\n• DALL-E, Midjourney, Stable Diffusion.\n• Controverse: auteursrecht trainingsdata? Vermindert dit menselijke creativiteit?\n• Eerste AI-art in veiling Christie's 2018 (€432k).\n\n**Kunstanalyse-methodieken** (cruciaal voor Cito!):\n\n**Vorm-analyse** (formeel):\n• **Compositie**: hoe zijn elementen geordend? (driehoek, diagonaal, symmetrisch).\n• **Lijn** (recht, gebogen, diagonaal).\n• **Vorm** (geometrisch, organisch).\n• **Kleur** (palet, contrast, harmonie).\n• **Licht + schaduw** (chiaroscuro?).\n• **Textuur** (glad, ruw, dik).\n• **Ruimte + perspectief**.\n• **Beweging** (statisch, dynamisch).\n\n**Inhoud-analyse** (iconografisch):\n• **Wat zien we?** Mensen, voorwerpen, scène.\n• **Symbolen + iconografie** (specifieke betekenissen).\n• **Verhaal / thema**.\n• **Stemming / emotie**.\n\n**Context-analyse** (sociaal-historisch):\n• **Wanneer gemaakt?** Stijlperiode.\n• **Door wie?** Biografie kunstenaar.\n• **Voor wie?** Opdrachtgever, doelgroep.\n• **Waarvoor?** Functie (religieus, decoratief, politiek, persoonlijk).\n• **Hoe ontvangen?** Reacties indertijd + nu.\n\n**Stijl-analyse**:\n• Aan welke stijlperiode behoort?\n• Wat onderscheidt dit van eerdere/latere stijlen?\n• Vergelijken met andere werken kunstenaar / periode.\n\n**Erwin Panofsky's 3 niveaus** (klassiek model):\n1. **Pre-iconografisch**: wat zie je letterlijk?\n2. **Iconografisch**: betekenissen, symbolen.\n3. **Iconologisch**: bredere culturele/maatschappelijke betekenis.\n\n**Voorbeeld analyse**: *Mona Lisa* (Leonardo, 1503-19)\n• **Vorm**: piramidale compositie, sfumato-techniek (zachte overgangen), gedempte aardetinten + landschap-achtergrond.\n• **Inhoud**: jonge vrouw (waarschijnlijk Lisa Gherardini, vrouw van Florentijnse koopman), driekwart-portret, mysterieuze glimlach, handen gevouwen, blik direct op kijker.\n• **Context**: Italiaanse Hoog-Renaissance, geschilderd Florence-Milaan-Frankrijk, voor private opdrachtgever (Francesco del Giocondo).\n• **Betekenis-vandaag**: meest beroemde schilderij wereld, ~10 mln Louvre-bezoekers/jaar, popcultuur-icoon (gestolen 1911, Warhol's Pop Art-versies, parodieën).\n\n**Authenticiteit + waarde**:\n• Vervalsingen: groot probleem.\n• Carbon dating, x-ray, materiaal-analyse onthullen.\n• Veilinghuizen: Christie's, Sotheby's.\n• Recordprijs: *Salvator Mundi* (Leonardo-toegeschreven) $450 mln 2017.\n\n**Musea NL** (Cito-context):\n• **Rijksmuseum** Amsterdam (NL Gouden Eeuw + algemeen).\n• **Van Gogh Museum** Amsterdam.\n• **Mauritshuis** Den Haag (Vermeer's *Meisje met de parel*).\n• **Kröller-Müller** Otterlo (Van Gogh + beeldentuin).\n• **Stedelijk** Amsterdam (modern + hedendaags).\n• **Centraal Museum** Utrecht (Rietveld-Schröderhuis).\n• **Boijmans Van Beuningen** Rotterdam (gerenoveerd).\n\n**Modern kunst-markt + globalisering**:\n• Top-prijzen voor levende kunstenaars: Hockney, Koons, Bacon, Richter.\n• Aziatische opkomst: Yayoi Kusama (JP, pumpkin-rooms).\n• NFT's 2021-22: digitale kunst-boom, gedaald.",
    checks: [
      {
        q: "Welke kunstenaar maakte **Spiral Jetty** (Land Art)?",
        options: ["Robert Smithson","Banksy","Andy Warhol","Picasso"],
        answer: 0,
        wrongHints: [null, "Street art.", "Pop Art.", "Kubisme."],
        uitlegPad: {
          stappen: [{ titel: "Utah 1970", tekst: "**Robert Smithson** (1938-1973) maakte **Spiral Jetty** in 1970: spiraalvormige strekdam van basaltrots, modder + zout in Great Salt Lake, Utah. 460m lang. **Land Art**: kunst van natuur in natuur. Soms zichtbaar, soms verzonken (afhankelijk waterpeil). Smithson zelf stierf jong bij vliegtuigongeluk." }],
          niveaus: { basis: "Smithson. A.", simpeler: "Spiral Jetty = Smithson = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Banksy** is bekend om:",
        options: ["Anonieme politieke street art","Renaissance-schilderijen","Klassieke beeldhouwwerken","Architectuur"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Anonieme provocateur", tekst: "**Banksy** (anoniem UK-kunstenaar, vermoedelijk geboren ~1974): **politieke pochoir-stencils** op muren wereldwijd. Onderwerpen: oorlog, kapitalisme, klimaat, migratie. Bekend: **Girl with Balloon** (verkocht 2018 voor £1mln, zelfvernietigde via interne shredder tijdens veiling — werd waardevoller). Identiteit nog onbekend (theorieën genoeg). Documentaire *Exit Through the Gift Shop* (2010)." }],
          niveaus: { basis: "Street art. A.", simpeler: "Banksy = street = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Panofsky's** kunst-analyse niveaus:",
        options: ["Pre-iconografisch / iconografisch / iconologisch","Eén niveau","Cinco niveaus","Geen niveaus"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Geen 5.", "Wel niveaus."],
        uitlegPad: {
          stappen: [{ titel: "Drie-stappen-analyse", tekst: "**Erwin Panofsky** (Duitse kunsthistoricus, 1892-1968) ontwikkelde 3-stappen-analyse:\n1. **Pre-iconografisch**: wat zie je letterlijk? (man met zwaard).\n2. **Iconografisch**: betekenissen, symbolen (David verslaat Goliath — bijbelse referentie).\n3. **Iconologisch**: bredere culturele betekenis (Renaissance-Florence's politieke identiteit, kleine stad tegen grotere mogendheden).\n\nCito-favoriet model voor analyse." }],
          niveaus: { basis: "Pre/icono/icono. A.", simpeler: "Panofsky = 3 niveaus = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk **museum** heeft *Meisje met de parel*?",
        options: ["Mauritshuis Den Haag","Louvre","Rijksmuseum","Van Gogh Museum"],
        answer: 0,
        wrongHints: [null, "Mona Lisa.", "Nachtwacht.", "Van Gogh-werken."],
        uitlegPad: {
          stappen: [{ titel: "Vermeer 1665", tekst: "*Meisje met de parel* (Johannes Vermeer, ~1665) hangt in **Mauritshuis Den Haag**. Tronie (karakterstudie, geen specifieke persoon). Soms genoemd 'Mona Lisa van het Noorden'. Cultuur-icoon — boek + film (2003 met Scarlett Johansson)." }],
          niveaus: { basis: "Mauritshuis. A.", simpeler: "Vermeer = Mauritshuis = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**AI-generated art** (DALL-E, Midjourney) controverse over:",
        options: ["Auteursrecht trainingsdata","Kleur-keuze","Prijs","Spelfouten"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet primair.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Wie wordt vergoed?", tekst: "**AI-art-controverses 2020s**:\n• Modellen getraind op miljoenen kunstwerken **zonder toestemming** kunstenaars. Rechtszaken (Getty vs Stability AI, Sarah Andersen et al vs Stable Diffusion).\n• **Auteursrecht uitkomst-werk**: VS Copyright Office besloot 2023 dat puur AI-gegenereerd werk **niet auteursrecht-beschermd** is (alleen werken met menselijke creativiteit).\n• **Vermindering werk** voor illustrators + concept-artiesten.\n• **Identiteit-vragen**: is AI-gemanipuleerde 'kunst' gelijkwaardig aan menselijk werk?\n\nEvolutie + jurisprudentie nog onderweg." }],
          niveaus: { basis: "Auteursrecht. A.", simpeler: "AI-art = auteursrecht = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Kunst mix",
    explanation:
      "Mix van Oudheid + Renaissance + Modern + Hedendaags + analyse.\n\nVeel succes!",
    checks: [
      {
        q: "Welke is een **Pop Art-werk**?",
        options: ["Campbell's Soup Cans","Mona Lisa","De Schreeuw","Sterrennacht"],
        answer: 0,
        wrongHints: [null, "Renaissance.", "Expressionisme.", "Post-impressionisme."],
        uitlegPad: {
          stappen: [{ titel: "1962 Warhol", tekst: "**Campbell's Soup Cans** (Andy Warhol, 1962): 32 schilderijen, één per soep-variant. **Pop Art**-icoon. Massaproductie-cultuur als kunst. Tegenwoordig: MoMA New York." }],
          niveaus: { basis: "Soup Cans. A.", simpeler: "Pop = Soup Cans = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Sfumato**-techniek wordt geassocieerd met:",
        options: ["Leonardo da Vinci","Caravaggio","Picasso","Mondriaan"],
        answer: 0,
        wrongHints: [null, "Niet — chiaroscuro.", "Niet — kubisme.", "Niet — De Stijl."],
        uitlegPad: {
          stappen: [{ titel: "Zachte overgangen", tekst: "**Sfumato** (Italiaans 'gerookt'): zachte, geleidelijke overgangen tussen tonen, geen scherpe lijnen. **Leonardo da Vinci** meester: *Mona Lisa*'s mysterieuze glimlach + atmosferische landschap zijn sfumato. Andere techniek, andere meester: **chiaroscuro** (sterke licht-donker, Caravaggio + Rembrandt)." }],
          niveaus: { basis: "Leonardo. A.", simpeler: "Sfumato = Leonardo = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Bauhaus** was:",
        options: ["Designschool DE 1919-1933","Renaissance-paleis","Kerk","Galerij"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet primair."],
        uitlegPad: {
          stappen: [{ titel: "Form follows function", tekst: "**Bauhaus** (1919-1933 Duitsland): designschool die kunst, ambacht + industrie verenigde. **Walter Gropius** oprichter. Filosofie: 'form follows function'. **Docenten**: Kandinsky, Klee, Mies van der Rohe, Marcel Breuer. Nazi's sloten in 1933 — docenten verhuisden naar VS → Amerikaanse moderne architectuur. Invloed: alles om je heen (IKEA, Apple, modernisme)." }],
          niveaus: { basis: "Designschool. A.", simpeler: "Bauhaus = design = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk werk verwijst naar **Spaanse Burgeroorlog**?",
        options: ["Guernica (Picasso, 1937)","Demoiselles d'Avignon","Mona Lisa","Nachtwacht"],
        answer: 0,
        wrongHints: [null, "Eerder Picasso-werk, geen oorlog.", "Renaissance.", "NL Gouden Eeuw."],
        uitlegPad: {
          stappen: [{ titel: "Anti-oorlogs-meesterwerk", tekst: "**Guernica** (Pablo Picasso, 1937): groot zwart-wit-grijs werk (3,5m × 7,8m) na **bombardement Baskische stad Guernica** door Duitse + Italiaanse vliegtuigen in opdracht Franco (26 april 1937). Toont chaos, paard, stier, lijden moeders + kinderen. Hangt in Museo Reina Sofia Madrid. **Picasso weigerde 'm aan Spanje te leveren** zolang Franco leefde — kwam pas 1981 naar Spanje na herstel democratie." }],
          niveaus: { basis: "Guernica. A.", simpeler: "Picasso oorlog = Guernica = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Bij **kunstanalyse** kijk je naar:",
        options: ["Vorm + inhoud + context","Alleen vorm","Alleen prijs","Alleen jaartal"],
        answer: 0,
        wrongHints: [null, "Onvolledig.", "Niet kunst-relevant.", "Niet voldoende."],
        uitlegPad: {
          stappen: [{ titel: "Drie hoeken", tekst: "**Goede kunstanalyse**:\n• **Vorm** (compositie, kleur, lijn, materiaal).\n• **Inhoud** (wat zien we + iconografie + symbolen + thema).\n• **Context** (wanneer, waar, voor wie, hoe ontvangen).\n\nVergelijk met **Panofsky's 3 niveaus**: pre-iconografisch / iconografisch / iconologisch.\n\nGoede analyse combineert alle drie — niet alleen 'mooie kleuren' maar ook 'waarom toen + voor wie + welke betekenis'." }],
          niveaus: { basis: "Vorm/inhoud/context. A.", simpeler: "Analyse = 3 hoeken = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kunstHavoVwo = {
  id: "kunst-havo-vwo",
  title: "Kunst — stijlperioden + analyse (HAVO/VWO)",
  emoji: "🎨",
  level: "havo4-5-vwo",
  subject: "kunst",
  referentieNiveau: "havo-vwo-CSE-kunst-algemeen",
  sloThema: "Kunst HAVO/VWO — kunstgeschiedenis + analyse eindexamen",
  prerequisites: [
    { id: "nederlandse-kunstenaars-po", title: "Nederlandse kunstenaars", niveau: "groep7-8" },
    { id: "gouden-eeuw-geschiedenis", title: "Gouden Eeuw", niveau: "klas2-3" },
  ],
  intro:
    "Kunstgeschiedenis HAVO/VWO. Klassiek (Egypte-Griekenland-Romeins + Middeleeuwen gotisch + Renaissance Leonardo/Michelangelo + NL Bosch/Bruegel), Barok-19e eeuw (Rembrandt/Vermeer + Impressionisme Monet + Van Gogh), Moderne kunst 1900-1970 (De Stijl Mondriaan + Picasso + Warhol + Bauhaus), Hedendaags + analyse-methodieken (Panofsky 3 niveaus + AI-art controverse). ~15-20 min.",
  triggerKeywords: [
    "kunst", "kunstgeschiedenis",
    "Renaissance",
    "Leonardo da Vinci", "Mona Lisa", "sfumato",
    "Michelangelo", "Sixtijnse Kapel",
    "Rafaël",
    "Botticelli",
    "Jan van Eyck",
    "Hieronymus Bosch", "Tuin der Lusten",
    "Pieter Bruegel",
    "Barok", "chiaroscuro",
    "Caravaggio", "Bernini",
    "Rembrandt", "Nachtwacht",
    "Vermeer", "Meisje met de parel",
    "Frans Hals",
    "NL Gouden Eeuw",
    "Rococo",
    "Neoclassicisme", "David",
    "Romantiek", "Delacroix", "Friedrich",
    "Realisme", "Courbet",
    "Impressionisme",
    "Monet", "Renoir",
    "Van Gogh", "Sterrennacht", "Zonnebloemen",
    "Cézanne", "Gauguin",
    "Fauvisme", "Matisse",
    "Kubisme", "Picasso", "Braque", "Guernica",
    "Expressionisme", "Munch",
    "Futurisme",
    "De Stijl", "Mondriaan", "Rietveld",
    "Dadaïsme", "Duchamp", "ready-made",
    "Surrealisme", "Dalí", "Magritte", "Kahlo",
    "Bauhaus", "Gropius",
    "Abstract expressionisme", "Pollock",
    "Pop Art", "Warhol", "Lichtenstein",
    "Minimalisme",
    "Conceptuele kunst",
    "Land Art", "Spiral Jetty",
    "Banksy", "street art",
    "Marlene Dumas", "Erwin Olaf",
    "Panofsky",
    "kunstanalyse",
    "compositie", "iconografie",
    "perspectief Brunelleschi",
    "Mauritshuis", "Rijksmuseum",
    "Van Gogh Museum",
    "AI-art", "Midjourney",
  ],
  chapters,
  steps,
};

export default kunstHavoVwo;
