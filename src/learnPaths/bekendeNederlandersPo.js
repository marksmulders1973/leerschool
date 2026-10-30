// Leerpad: Bekende Nederlanders - groep 6-8 wereldoriëntatie.
// toets-relevant. 1F. 4 stappen.
// 11 aug 2026: echte portretten (Wikimedia, rechtenvrij) bij stap A — Mark:
// "echte foto's/portretten bij historische figuren, dat is leren".

import { maakFotoStrook } from "../components/learn/FotoStrook.jsx";
import { FIGUUR_FOTOS } from "../data/fotoData.js";

const stepEmojis = ["📜", "⚽", "🎤", "🏆"];

const PortrettenA = maakFotoStrook([
  { naam: "Erasmus", onderschrift: "Humanist uit Rotterdam (1466-1536)" },
  { naam: "Willem van Oranje", onderschrift: "Vader des Vaderlands (1533-1584)" },
  { naam: "Michiel de Ruyter", onderschrift: "Admiraal, tocht naar Chatham (1607-1676)" },
  { naam: "Rembrandt", onderschrift: "Schilder van de Nachtwacht (1606-1669)" },
  { naam: "Vincent van Gogh", onderschrift: "Schilder van de Zonnebloemen (1853-1890)" },
  { naam: "Thorbecke", onderschrift: "Grondwet 1848 — begin van onze democratie (1798-1872)" },
  { naam: "Aletta Jacobs", onderschrift: "Eerste vrouwelijke arts + vrouwenkiesrecht (1854-1929)" },
], FIGUUR_FOTOS);

// Ontdekkers-strook (hoofdstuk B): echte portretten bij de reizigers.
const PortrettenB = maakFotoStrook([
  { naam: "Willem Barentsz", onderschrift: "Zocht de noordroute, strandde op Nova Zembla (1550-1597)" },
], FIGUUR_FOTOS);

const chapters = [
  { letter: "A", title: "Historische helden", emoji: "📜", from: 0, to: 0 },
  { letter: "B", title: "Sport + ontdekking", emoji: "⚽", from: 1, to: 1 },
  { letter: "C", title: "Moderne bekendheid", emoji: "🎤", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Historische Nederlanders",
    illustrationComponent: PortrettenA,
    explanation:
      "**Beroemde Nederlanders door de eeuwen** — De toets vraagt vaak wie wat deed.\n\n**Middeleeuwen + Gouden Eeuw**:\n\n**Erasmus van Rotterdam** *(1466-1536)*:\n• Beroemd **humanist + filosoof**.\n• Schreef **'Lof der Zotheid'** *(1511)* — kritisch op kerk + maatschappij.\n• Reisde door Europa, woonde in Engeland.\n• Beschouwd als **Vader van het humanisme**.\n• Universiteit van Rotterdam heet **Erasmus Universiteit** naar hem.\n• Toets-feit: in 2026 = **490 jaar geleden** dat hij stierf.\n\n**Willem van Oranje (Willem de Zwijger)** *(1533-1584)*:\n• Leider van **Tachtigjarige Oorlog** *(1568-1648)* tegen Spanje.\n• Stamvader **koninklijke familie** *(Oranje-Nassau)*.\n• Vermoord 1584 in Delft door Balthasar Gerards.\n• Inspireerde **Wilhelmus** *(volkslied)* — geschreven over hem.\n• Wordt vaak **Vader des Vaderlands** genoemd.\n\n**Michiel de Ruyter** *(1607-1676)*:\n• **Beroemde admiraal** *(vlootleider)* in 17e eeuw.\n• Versloeg Engelse + Franse vloten.\n• Beroemde tocht: **Naar Chatham** *(1667)* — overweldigde Engelse vloot in eigen haven.\n• Stierf in slag bij Sicilië.\n• Standbeeld in Vlissingen.\n\n**Hugo de Groot** *(1583-1645)*:\n• **Vader van internationaal recht**.\n• Schreef boeken die nog steeds basis zijn voor wereldrecht.\n• Gevangen in **Slot Loevestein** *(1619-1621)*.\n• **Ontsnapt in boekenkist**! *(beroemd verhaal)*.\n• Standbeeld in Delft.\n\n**Jacob van Lennep, Cats, Vondel** — schrijvers.\n\n**Schilders Gouden Eeuw**:\n• **Rembrandt, Vermeer, Frans Hals, Jan Steen** *(zie ander pad)*.\n\n**Wetenschap + uitvindingen**:\n\n**Antoni van Leeuwenhoek** *(1632-1723)*:\n• Uit Delft.\n• Maakte **microscoop** + zag als eerste **bacteriën**.\n• 'Vader van de microbiologie'.\n• Brieven naar Engelse Royal Society.\n\n**Christiaan Huygens** *(1629-1695)*:\n• Astronoom + wiskundige.\n• Vond **slingerklok** uit *(1656)* — eerste nauwkeurige klok.\n• Bedacht **golftheorie** van licht.\n• Zag ringen Saturnus + maan Titan.\n\n**Eise Eisinga** *(1744-1828)*:\n• Bouwde **planetarium** in **woonkamer** *(Franeker)* in 1781!\n• Toont planeten-bewegingen.\n• Nog steeds werkend — oudste planetarium ter wereld + UNESCO.\n\n**Eduard Douwes Dekker / Multatuli** *(1820-1887)*:\n• **'Max Havelaar'** *(1860)* — boek tegen NL-koloniaal beleid.\n• Veranderde publieke opinie over Nederlands-Indië.\n\n**Anne Frank** *(1929-1945)*:\n• Bekendste joods slachtoffer van WO2 in NL.\n• Dagboek vertaald in 70+ talen.\n• Achterhuis Prinsengracht 263 = museum.\n\n**Anton Mussert** *(1894-1946)*:\n• Leider van **NSB** *(pro-nazi-partij)* tijdens WO2.\n• Veroordeeld + geëxecuteerd na oorlog.\n• Geschiedenis-vraag — kant van **bezetters/foute keuze**.\n\n**Soekarno, Hatta** *(Indonesische leiders)*:\n• Niet NL maar belangrijk voor NL-geschiedenis.\n• Riepen onafhankelijkheid Indonesië uit *(1945)* — NL erkende pas 1949.\n\n**Staat + rechten** *(19e eeuw)*:\n\n**Johan Rudolph Thorbecke** *(1798-1872)*:\n• Schreef de **Grondwet van 1848** — begin van onze **democratie**.\n• Sindsdien: ministers verantwoording aan de **Tweede Kamer**, niet alleen aan de koning.\n• Grondlegger van Nederland als **parlementaire monarchie**.\n\n**Aletta Jacobs** *(1854-1929)*:\n• **Eerste vrouw** die in NL mocht studeren + de **eerste vrouwelijke arts**.\n• Streed voor **vrouwenkiesrecht** — vrouwen mochten stemmen vanaf **1919**.\n• Voorbeeld van gelijke kansen voor jongens én meisjes.\n\n**Toets-feitje**:\nNederlandse **Nobelprijs-winnaars**: **20+** door geschiedenis. Bekende: **Christiaan Eijkman** *(geneeskunde 1929, ontdekking vitamine B1)*, **Jan Tinbergen** *(economie 1969)*, **Frits Zernike** *(natuurkunde 1953, fasecontrastmicroscoop)*.",
    checks: [
      {
        q: "Wie was **Erasmus**?",
        options: ["Filosoof", "Schilder", "Zeevaarder", "Politicus"],
        answer: 0,
        wrongHints: [null, "Erasmus schilderde niet — hij schreef boeken vol gedachten. Hoe noem je zo iemand?", "Een zeevaarder ontdekt landen. Erasmus reisde wel door Europa, maar met boeken en ideeën.", "Hij bestuurde geen land en maakte geen wetten. Wat deed hij wel, met zijn pen?"],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Erasmus?", tekst: "**Desiderius Erasmus van Rotterdam** (1466-1536) was een NL **humanist** en **filosoof**. Hij wordt vaak gezien als de slimste Nederlander ooit." },
            { titel: "Wat schreef hij?", tekst: "Zijn beroemdste boek heet **'Lof der Zotheid'** (1511) — een satirisch werk waarin de godin 'Zotheid' zelf praat. Hij gebruikte humor om kritiek te leveren op de kerk en de elite van zijn tijd." },
            { titel: "Waarom belangrijk?", tekst: "Erasmus stond voor **vrij denken** + **onderzoek** + **internationaal contact**. De **Erasmus Universiteit Rotterdam** + Europees Erasmus-uitwisselingsprogramma zijn naar hem genoemd. Een soort vader-figuur voor moderne Europese cultuur." },
          ],
          woorden: [
            { woord: "humanist", uitleg: "Iemand die de mens centraal stelt + onderzoek/rede waardeert." },
            { woord: "filosoof", uitleg: "Iemand die nadenkt over grote levensvragen + denken zelf." },
          ],
          theorie: "Toets-tip Erasmus-koppelingen: **Rotterdam** + **Lof der Zotheid** + **humanisme** + **1466-1536**. Zit in tijdvak 5 (Tijd van ontdekkers + hervormers) van de NL-canon.",
          voorbeelden: [
            { type: "stap", tekst: "Het Erasmus-uitwisselingsprogramma laat NL-studenten in een ander EU-land studeren. Vernoemd naar hem omdat hij zelf door Europa reisde." },
            { type: "stap", tekst: "Erasmus en Maarten Luther kenden elkaar (allebei 1500s-denkers) maar Erasmus bleef rooms-katholiek terwijl Luther de reformatie startte." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Erasmus = boeken-denker uit Rotterdam, 1500. Niet verwarren met schilders (Rembrandt = 1600, Amsterdam) of moderne mensen." }],
          niveaus: {
            basis: "Erasmus = humanist + filosoof uit Rotterdam.",
            simpeler: "Beroemde NL-denker (1466-1536) die het boek 'Lof der Zotheid' schreef.",
            nogSimpeler: "Filosoof uit Rotterdam",
          },
        },
      },
      {
        q: "Wie was **Willem van Oranje**?",
        options: ["Leider van de opstand", "Koning van Spanje", "Schilder uit Delft", "Admiraal van de vloot"],
        answer: 0,
        wrongHints: [null, "De koning van Spanje (Filips II) was juist zijn tegenstander.", "In Delft woonde hij wel, maar hij schilderde niet. Wat deed hij tegen Spanje?", "De vloot was van Michiel de Ruyter, een eeuw later. Willem leidde iets anders."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was hij?", tekst: "**Willem van Oranje** (1533-1584) was een edelman die de leiding nam in de **opstand tegen Spanje** (1568-1648, ook bekend als de Tachtigjarige Oorlog)." },
            { titel: "Waarom 'Vader des Vaderlands'?", tekst: "Hij begon de Nederlandse onafhankelijkheidsstrijd. Daarom zien Nederlanders hem als oprichter van NL als zelfstandig land. Het Wilhelmus (volkslied) gaat over hem." },
            { titel: "Vermoord 1584", tekst: "In **Delft** werd hij doodgeschoten door **Balthasar Gerards**. Een van de eerste politieke moorden met een vuurwapen. Hij werd begraven in de **Nieuwe Kerk Delft** — waar nu nog de koninklijke familie begraven wordt." },
          ],
          woorden: [
            { woord: "Willem van Oranje", uitleg: "Leider opstand tegen Spanje, Vader des Vaderlands." },
            { woord: "Tachtigjarige Oorlog", uitleg: "1568-1648: NL-onafhankelijkheid van Spanje." },
            { woord: "Wilhelmus", uitleg: "NL-volkslied, geschreven over Willem van Oranje (oudste volkslied ter wereld)." },
          ],
          theorie: "Toets-feit: Willem van Oranje zit in **Tijdvak 5** van NL-canon (Tijd van ontdekkers en hervormers). Hij gaf 'Oranje' aan koninklijk huis Oranje-Nassau (huidige koning Willem-Alexander stamt af).",
          voorbeelden: [
            { type: "stap", tekst: "Wilhelmus-tekst: 'Wilhelmus van Nassouwe ben ik van Duitsen bloed...'" },
            { type: "stap", tekst: "Koningsdag wordt gevierd op 27 april — verjaardag huidige koning, niet Willem van Oranje zelf." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Oranje = vorstenhuis NL = afstamming Willem van Oranje. Geboren in Duitsland (Dillenburg) maar werd Nederlands held." }],
          niveaus: {
            basis: "Willem van Oranje = leider opstand tegen Spanje + Vader des Vaderlands.",
            simpeler: "Eerste 'leider' van Nederland, vermoord in Delft 1584.",
            nogSimpeler: "Vader des Vaderlands.",
          },
        },
      },
      {
        q: "Wie zag **bacteriën** als eerste?",
        options: ["Van Leeuwenhoek", "Huygens", "Eisinga", "Erasmus"],
        answer: 0,
        wrongHints: [null, "Huygens keek door een telescoop naar de ringen van Saturnus — naar het grote, niet het kleine.", "Eisinga bouwde een planetarium: planeten, geen bacteriën.", "Erasmus leefde 150 jaar eerder, toen er nog geen microscopen waren."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was hij?", tekst: "**Antoni van Leeuwenhoek** (1632-1723) was een lakenkoopman uit **Delft**. Hij was geen wetenschapper van opleiding, maar bouwde zelf **microscopen** uit nieuwsgierigheid." },
            { titel: "Wat ontdekte hij?", tekst: "Met zijn beste microscoop (270x vergroting!) zag hij als eerste mens **bacteriën** + **spermacellen** + andere mini-leven. Hij noemde ze 'kleine diertjes'." },
            { titel: "Onthouden", tekst: "Hij stuurde brieven naar de Royal Society in Londen. Daarom is hij wereldberoemd als 'vader van de microbiologie'. Sterk Nederlands-Engels samenspel in 1600s." },
          ],
          woorden: [
            { woord: "microscoop", uitleg: "Apparaat om iets HEEL kleins groot te zien." },
            { woord: "microbiologie", uitleg: "Wetenschap van micro-organismen (bacteriën, virussen, schimmels)." },
          ],
          theorie: "Toets-tip: van Leeuwenhoek is een NL-trots-figuur. Hij toonde dat er een onzichtbare wereld bestaat — basis voor moderne medische wetenschap. Pasteur bouwde later voort (vaccins).",
          voorbeelden: [
            { type: "stap", tekst: "Eerste keer dat een mens een bacterie zag: rond 1675." },
            { type: "stap", tekst: "Niet verwarren: HUYGENS (Christiaan) = astronoom + uitvinder slingerklok. Andere NL-wetenschapper." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Van Leeuwenhoek + Delft + microscoop = de combinatie. Christiaan Huygens = klok + ringen Saturnus." }],
          niveaus: {
            basis: "Van Leeuwenhoek (Delft) zag als eerste bacteriën via zelfgebouwde microscoop.",
            simpeler: "Lakenkoopman uit Delft = vader van microbiologie.",
            nogSimpeler: "Van Leeuwenhoek = microscoop + bacteriën.",
          },
        },
      },
      {
        q: "Wie ontsnapte uit **boekenkist Slot Loevestein**?",
        options: ["Hugo de Groot", "Erasmus", "Vondel", "Mussert"],
        answer: 0,
        wrongHints: [null, "Erasmus leefde een eeuw eerder en zat nooit gevangen.", "Vondel schreef toneelstukken; hij zat niet op Loevestein.", "Mussert is uit de Tweede Wereldoorlog — drie eeuwen later."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Hugo de Groot?", tekst: "**Hugo de Groot** (1583-1645) was een Nederlandse **jurist** + **filosoof**. Wordt vaak 'Vader van het internationaal recht' genoemd — zijn boeken gelden nog vandaag als basis." },
            { titel: "Waarom in de gevangenis?", tekst: "Hij kwam in conflict met **Maurits van Oranje** over religieuze + politieke kwesties. In **1619** werd hij veroordeeld tot **levenslang** + opgesloten in **Slot Loevestein** (kasteel bij Gorinchem)." },
            { titel: "De boekenkist-truc (1621)", tekst: "Zijn vrouw **Maria van Reigersberch** bedacht een list: ze stuurde regelmatig een grote kist met boeken naar het slot. Op een dag verstopte Hugo zich in die kist + ontsnapte. Vluchtte naar Parijs. Het meest beroemde ontsnappings-verhaal van NL." },
          ],
          woorden: [
            { woord: "Slot Loevestein", uitleg: "Kasteel bij Gorinchem, vroeger gevangenis voor 'staatsgevangenen'." },
            { woord: "Hugo de Groot", uitleg: "NL-jurist + filosoof, vader internationaal recht." },
          ],
          theorie: "Toets-feit Hugo de Groot:\n• Boek **'De jure belli ac pacis'** (1625) — basis volkenrecht.\n• Stierf 1645 in Rostock, na een schipbreuk.\n• Standbeeld in **Delft**.\n• Boekenkist nu te zien in Rijksmuseum.",
          voorbeelden: [
            { type: "stap", tekst: "De originele boekenkist staat in het Rijksmuseum (Amsterdam) + Slot Loevestein zelf — verhaal blijft populair." },
            { type: "stap", tekst: "Erasmus stierf 1536 = vóór Hugo de Groot. Vondel was toneeldichter (Gijsbreght van Aemstel), niet gevangene. Mussert was WO2 (NSB)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Boekenkist + Slot Loevestein + 1621 = Hugo de Groot. Beroemd ontsnappingsverhaal." }],
          niveaus: {
            basis: "Hugo de Groot.",
            simpeler: "Hugo de Groot ontsnapte 1621 uit Slot Loevestein verborgen in een boekenkist die zijn vrouw stuurde.",
            nogSimpeler: "Hugo de Groot",
          },
        },
      },
    ],
  },
  {
    title: "Sport + ontdekkingen + wetenschappers",
    illustrationComponent: PortrettenB,
    explanation:
      "**Beroemde NL-ontdekkers + reizigers**:\n\n**Willem Barentsz** *(1550-1597)*:\n• Zocht **noordoostelijke route** naar Azië.\n• Strandde op **Nova Zembla** *(Russisch eiland)*.\n• Overwinterde in 'Het Behouden Huys'.\n• Stierf op terugreis.\n• **Barentszzee** *(boven Rusland)* naar hem genoemd.\n\n**Abel Tasman** *(1603-1659)*:\n• Voor VOC ontdekte **Tasmanië + Nieuw-Zeeland** *(1642)*.\n\n**Jan van Riebeeck** *(1619-1677)*:\n• Stichter van **Kaapstad** *(Zuid-Afrika)* in 1652 voor VOC.\n• Begin NL-kolonie *(Afrikaans stamt af van het Nederlands)*.\n\n**Anthony Fokker** *(1890-1939)*:\n• **Vliegtuig-bouwer**.\n• Beroemde Fokker-fabriek.\n• Fokker-Dr.I vliegtuig in WO1.\n• Rode Baron *(Manfred von Richthofen)* vloog Fokker.\n• In NL Fokker tot 1996.\n\n**SPORT — Voetbal** ⚽:\n\n**Johan Cruijff** *(1947-2016)*:\n• **Grootste NL-voetballer** ooit.\n• 'Hollandse School'-voetbal.\n• Speelde Ajax + FC Barcelona + Feyenoord.\n• Drie keer **Gouden Bal** *(1971, 1973, 1974)*.\n• Coach van legendarisch FC Barcelona-Dream Team *(1988-1996)*.\n• Beroemd om uitspraken: *'Je gaat het pas zien als je het door hebt.'*\n• Cruijff-passenstijl + #14-shirt.\n\n**Marco van Basten** *(1964+)*:\n• Topscorer Ajax + AC Milan.\n• **Europees kampioen** met NL *(1988)*.\n• Drie keer **Gouden Bal**.\n• Bekend om **iconische volley** in de EK-finale tegen de USSR *(1988)*.\n\n**Ruud Gullit** *(1962+)*:\n• Aanvoerder Oranje 1988.\n• Gouden Bal 1987.\n• Droeg zijn Gouden Bal op aan Nelson Mandela.\n\n**Frank de Boer, Patrick Kluivert, Edgar Davids, Marc Overmars** — andere helden.\n\n**Recent**:\n• **Virgil van Dijk** *(verdediger Liverpool, kapitein Oranje)*.\n• **Frenkie de Jong** *(midden, Barcelona)*.\n• **Vivianne Miedema** *(topscorer aller tijden van de Oranje Leeuwinnen)*.\n• **Memphis Depay** *(aanvaller)*.\n\n**SPORT — Andere**:\n\n**Schaatsen**:\n• **Sven Kramer**: 4 olympisch goud.\n• **Ireen Wüst**: meest gedecoreerde NL-atleet ooit *(13 medailles)*.\n• **Yvonne van Gennip**: 3 goud 1988 *(Calgary)*.\n\n**Tennis**:\n• **Richard Krajicek** *(1971+)*: Wimbledon-winnaar 1996.\n• **Kiki Bertens** *(1991+)*: top-10 vrouwen-tennis.\n\n**Boksen**:\n• **Lucia Rijker**.\n• **Bep van Klaveren** *(historisch — Olympische bokser 1928)*.\n\n**Wielrennen**:\n• **Joop Zoetemelk** *(Tour-winnaar 1980)*.\n• **Annemiek van Vleuten + Anna van der Breggen** *(vrouwen)*.\n• **Tom Dumoulin** *(Giro-winnaar 2017)*.\n• **Mathieu van der Poel** *(allround topfietser)*.\n\n**Atletiek**:\n• **Fanny Blankers-Koen** *(1918-2004)*: 4 goud OS 1948 — beste atlete ooit.\n• **Sifan Hassan** *(1993+)*: olympisch marathon-goud 2024 Parijs.\n• **Femke Bol** *(2000+)*: huidige top-400m horden.\n\n**Formule 1**:\n• **Max Verstappen** *(1997+)*: **4x wereldkampioen** *(2021, 2022, 2023, 2024)*.\n• Vader **Jos Verstappen** ook F1.\n\n**Wetenschap (modern)**:\n\n**Tim Krabbé, Hella Haasse, Cees Nooteboom** — schrijvers.\n• **Connie Palmen** — eigentijds.\n\n**Christiaan Eijkman** *(1858-1930)*:\n• Nobelprijs 1929.\n• Ontdekte oorzaak **beriberi-ziekte** *(vitamine B1-tekort)*.\n• Werkte in Nederlands-Indië.\n\n**Jan Tinbergen** *(1903-1994)*:\n• Eerste **economie-Nobelprijs** *(1969)*.\n• Econometrie.\n\n**Robbert Dijkgraaf** *(natuurkundige, recent)*.\n\n**Toets-feitje**:\n**Mata Hari** *(1876-1917)* was **danseres + (spion?)** van Friesland. Geboren als Margaretha Geertruida Zelle in Leeuwarden. Werd gefusilleerd door Frankrijk 1917 als Duitse spion in WO1. Vandaag onduidelijk of ze echt spioneerde of slachtoffer was van schandaal.",
    checks: [
      {
        q: "Wie wordt gezien als de **grootste Nederlandse voetballer** ooit?",
        options: ["Johan Cruijff", "Arjen Robben", "Jordi Cruijff", "Memphis Depay"],
        answer: 0,
        wrongHints: [null, "Robben was een topspeler bij Oranje en Bayern, maar won nooit de Gouden Bal.", "Jordi Cruijff was ook voetballer, maar lang niet zo groot als zijn vader.", "Memphis is een goede speler van nu, maar won nooit de Gouden Bal."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Cruijff?", tekst: "**Johan Cruijff** (1947-2016) was een NL-voetballer die wereldberoemd werd om zijn techniek + creativiteit. Speelde bij **Ajax** + **FC Barcelona** + Feyenoord." },
            { titel: "3x Gouden Bal", tekst: "De **Gouden Bal** is de prijs voor de **beste voetballer van Europa per jaar**. Cruijff won hem 3 keer (1971, 1973, 1974). Bijna niemand wint hem 3x." },
            { titel: "Cruijff-school", tekst: "Hij was niet alleen speler maar ook **denker**. Was hét gezicht van 'totaalvoetbal'. Later coach FC Barcelona (1988-1996, 'Dream Team'). Beïnvloedt voetbal nog steeds." },
          ],
          woorden: [
            { woord: "Gouden Bal", uitleg: "Prijs voor beste voetballer Europa per jaar." },
            { woord: "totaalvoetbal", uitleg: "NL-stijl: spelers wisselen van positie, alles aanvallen." },
          ],
          theorie: "Toets-feit: Cruijff was niet alleen sport-icoon maar cultureel symbool. Beroemde uitspraken: 'Je gaat het pas zien als je het door hebt'. Stierf 2016 aan longkanker.",
          voorbeelden: [
            { type: "stap", tekst: "Cruijff #14-shirt = legendarisch, wordt nu niet meer gegeven bij Ajax." },
            { type: "stap", tekst: "Andere 3x Gouden Bal-winnaars: Michel Platini (Frankrijk), Marco van Basten (NL). Lionel Messi won hem zelfs 8 keer." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Cruijff = #14 = grootste NL-voetballer. Niet verwarren met zoon Jordi Cruijff (ook voetballer, minder bekend)." }],
          niveaus: {
            basis: "Johan Cruijff wordt gezien als de grootste Nederlandse voetballer: hij won drie keer de Gouden Bal.",
            simpeler: "Cruijff speelde bij Ajax en Barcelona en werd drie keer gekozen tot beste voetballer van Europa.",
            nogSimpeler: "Johan Cruijff.",
          },
        },
      },
      {
        q: "Welke Nederlander won de **Tour de France van 1980**?",
        options: ["Joop Zoetemelk", "Tom Dumoulin", "Annemiek van Vleuten", "Jan Janssen"],
        answer: 0,
        wrongHints: [null, "Dumoulin won de Giro (2017), niet de Tour.", "Van Vleuten won bij de vrouwen, en veel later.", "Jan Janssen won de Tour wél — maar in 1968."],
      },
      {
        q: "Welke Nederlander werd **wereldkampioen Formule 1** (voor het eerst in 2021)?",
        options: ["Max Verstappen", "Jos Verstappen", "Nyck de Vries", "Geen enkele Nederlander"],
        answer: 0,
        wrongHints: [null, "Jos Verstappen reed wel Formule 1, maar werd nooit kampioen.", "Nyck de Vries reed maar kort in de Formule 1.", "Er is wél een Nederlander die kampioen werd, en zelfs meerdere keren."],
      },
      {
        q: "Welke Nederlander heeft de **meeste Olympische medailles** ooit gewonnen?",
        options: ["Ireen Wüst", "Inge de Bruijn", "Epke Zonderland", "Sven Kramer"],
        answer: 0,
        wrongHints: [null, "Zwemster Inge de Bruijn won 8 Olympische medailles. Knap! Toch heeft een schaatser er nog meer gewonnen.", "Turner Epke Zonderland won één Olympische medaille: goud aan de rekstok in 2012. Wie stond veel vaker op het Olympische podium?", "Sven Kramer won 9 Olympische medailles. Dat is veel, maar iemand anders won er nog meer."],
      },
    ],
  },
  {
    title: "Moderne bekendheden — politiek + cultuur",
    explanation:
      "**Politici** *(moderne tijd)*:\n\n**Koning Willem-Alexander** *(1967+)*:\n• Sinds **30 april 2013** koning.\n• Eerste man-koning sinds 1890.\n• Studeerde geschiedenis Leiden.\n• Vliegt soms zelf KLM-vluchten als hobby-piloot.\n\n**Koningin Máxima** *(1971+)*:\n• Uit **Argentinië**.\n• Trouwde Willem-Alexander 2002.\n• Werkt actief voor financiële inclusie (VN).\n\n**Mark Rutte** *(1967+)*:\n• Premier NL **2010-2024** *(langste regerend premier ooit, 14 jaar)*.\n• VVD-leider.\n• 4 kabinetten Rutte.\n• Bekend om sobere stijl *(eet appel op werk, fiets naar Binnenhof)*.\n• Stopte 2024 om **NAVO-secretaris-generaal** te worden.\n\n**Dick Schoof** *(1957+)*:\n• Premier vanaf **juli 2024**.\n• Eerst NCTV-baas *(terrorismebestrijding)*.\n• Niet uit politieke partij.\n\n**Geert Wilders** *(1963+)*:\n• PVV-leider.\n• Won verkiezingen **2023** met 37 zetels.\n• Bekend om strenge migratie-standpunten.\n\n**Frans Timmermans** *(1961+)*:\n• Was leider van GroenLinks-PvdA *(2023-2025)*.\n• Was Eurocommissaris Klimaat.\n\n**Eerdere premiers**:\n• **Wim Kok** *(1994-2002, PvdA)*.\n• **Jan Peter Balkenende** *(2002-2010, CDA)*.\n• **Ruud Lubbers** *(1982-1994, CDA, 12 jaar)*.\n\n**Acteurs + films**:\n\n**Carice van Houten** *(1976+)*:\n• Bekend door **Game of Thrones** *(Melisandre)*.\n• Vele NL-films + internationale rollen.\n\n**Famke Janssen** *(1964+)*:\n• Hollywood-actrice.\n• **X-Men** *(Jean Grey)*, **GoldenEye** *(Bond-vrouw)*.\n\n**Youp van 't Hek, Theo Maassen, Najib Amhali** — cabaret.\n\n**Paul Verhoeven** *(1938+)*:\n• Regisseur *(Hollywood)*.\n• **Robocop, Total Recall, Basic Instinct, Starship Troopers**.\n• Recent **'Elle'** *(Frans, met Isabelle Huppert)*.\n\n**Anton Corbijn** *(1955+)*:\n• Fotograaf + regisseur.\n• Foto's van U2, Depeche Mode, Joy Division.\n• Films 'Control' + 'A Most Wanted Man'.\n\n**Muziek (modern)**:\n\n**André Hazes Sr.** *(1951-2004)*:\n• 'Bloed, Zweet en Tranen', 'Een Beetje Verliefd'.\n• Stierf jong na alcoholisme.\n\n**André Hazes Jr.** *(1994+)*:\n• Zoon.\n• Volgt voetstappen vader.\n\n**Marco Borsato, Anouk, Davina Michelle**.\n\n**Volendam-erfgoed**: Jan Smit, Nick & Simon, Karin & Kim.\n\n**DJ's** *(NL wereldtop)*:\n• **Tiësto, Armin van Buuren, Hardwell, Martin Garrix, Afrojack** — wereldwijd top-10 lijsten.\n• Nederland is **DJ-grootmacht** door Amsterdam Music Festival + electronic-cultuur.\n\n**TV-bekendheden**:\n• **Linda de Mol** *(presentator, eigen tijdschrift)*.\n• **Matthijs van Nieuwkerk** *(DWDD-presentator)*.\n• **Jeroen Pauw + Eva Jinek** *(talkshows)*.\n\n**Influencers + youtubers**:\n• **Enzo Knol** *(YouTube-gamer)*.\n• **NikkieTutorials** *(make-up)*.\n• **StukTV, Concentrate**.\n\n**Bekende NL-bedrijfsoprichters**:\n• **Anton Philips** *(Philips, gloeilampen, Eindhoven)*.\n• **Gerard Heineken** *(bier)*.\n• **Albert Heijn** *(supermarkten)*.\n• **Willem Vroom + Anton Dreesmann** *(V&D, warenhuizen)*.\n• **Boyan Slat** *(jong, Ocean Cleanup — opruimen plastic in zee)*.\n\n**Boyan Slat** *(1994+)*:\n• Bedacht systeem om plastic uit oceaan op te ruimen.\n• Begon op zijn 16e met het idee.\n• Nu wereldwijd actief.\n• Echt cool — laat zien dat jongeren grote impact kunnen hebben.\n\n**Toets-feitje**:\nIn **2024** was er **wereldwijd** veel aandacht voor NL door **Eurovisie-finale Malmö** *(Joost Klein vertegenwoordigde NL met 'Europapa' maar werd gediskwalificeerd door incident)*. Spannende editie.",
    checks: [
      {
        q: "Wie was **premier** van Nederland van 2010 tot 2024?",
        options: ["Mark Rutte", "Dick Schoof", "Wim Kok", "Balkenende"],
        answer: 0,
        wrongHints: [null, "Dick Schoof werd pas in juli 2024 premier — ná de periode in de vraag.", "Wim Kok was premier van 1994 tot 2002.", "Balkenende was premier van 2002 tot 2010 — net ervoor."],
      },
      {
        q: "Sinds welk jaar is **Willem-Alexander** koning?",
        options: ["2013", "2000", "2020", "1980"],
        answer: 0,
        wrongHints: [null, "In 2000 was zijn moeder Beatrix nog koningin.", "In 2020 was hij al een paar jaar koning.", "In 1980 werd Beatrix koningin; Willem-Alexander was toen 13."],
      },
      {
        q: "Wie regisseerde de films **Robocop** en **Total Recall**?",
        options: ["Paul Verhoeven", "Anton Corbijn", "Carice van Houten", "Famke Janssen"],
        answer: 0,
        wrongHints: [null, "Corbijn maakte films over muzikanten, geen actiefilms.", "Carice van Houten speelt in films — ze regisseert ze niet.", "Famke Janssen is actrice (X-Men), geen regisseur."],
      },
      {
        q: "Wie begon **The Ocean Cleanup**?",
        options: ["Boyan Slat", "Mark Rutte", "Max Verstappen", "Johan Cruijff"],
        answer: 0,
        wrongHints: [null, "Rutte was premier — hij ruimt geen plastic op.", "Verstappen rijdt races. Wie begon als tiener met een plan tegen plastic?", "Cruijff was voetballer en stierf in 2016."],
        uitlegPad: {
          stappen: [
            { titel: "Wie is Boyan Slat?", tekst: "**Boyan Slat** (geboren 1994) is een **Nederlandse uitvinder**. Op zijn **16e** kreeg hij tijdens een duik-vakantie in Griekenland het idee om **plastic uit de oceaan** te halen." },
            { titel: "De Ocean Cleanup", tekst: "In 2013 (Boyan was 18) richtte hij **The Ocean Cleanup** op. Doel: drijvende systemen ontwikkelen die plastic uit de Stille Oceaan + rivieren halen vóór het de zee bereikt." },
            { titel: "Waarom inspirerend voor kinderen", tekst: "Hij toont dat **jongeren grote problemen kunnen aanpakken**. Begon met ruim 2 miljoen dollar crowdfunding, nu actief in de Stille Oceaan + rivieren wereldwijd. **TEDx-talk** met miljoenen views maakte 'm beroemd." },
          ],
          woorden: [
            { woord: "Boyan Slat", uitleg: "NL-uitvinder Ocean Cleanup, geb. 1994." },
            { woord: "Ocean Cleanup", uitleg: "NL-organisatie die plastic uit zeeën en rivieren haalt." },
          ],
          theorie: "Toets-feit Boyan Slat:\n• Geboren **Delft**, 1994.\n• Hoort niet bij een politieke partij of bedrijf — eigen non-profit.\n• Won **VN-Champions of the Earth Award** (2014).\n• Mooi voorbeeld van een jonge NL'er met wereldimpact.",
          voorbeelden: [
            { type: "stap", tekst: "Ocean Cleanup System 001 + 002 = drijvende installaties die plastic 'vangen' in een grote boog. Wordt steeds verbeterd." },
            { type: "stap", tekst: "Ook **Interceptor** = boot die plastic uit rivieren vist vóór het in zee komt. 80% van plastic in oceaan komt uit ~1000 rivieren." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Modern jong NL-held = Boyan Slat. Niet verwarren met politiek (Rutte) of sport (Verstappen/Cruijff). Slat = ocean + plastic." }],
          niveaus: {
            basis: "Boyan Slat.",
            simpeler: "Boyan Slat is een jonge Nederlandse uitvinder. Op zijn zestiende bedacht hij The Ocean Cleanup, om plastic uit de zee te halen.",
            nogSimpeler: "Boyan Slat",
          },
        },
      },
    ],
  },
  {
    title: "Eind-toets — NL'ers mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wie was **Vader des Vaderlands**?", options: ["Willem van Oranje", "Erasmus", "Michiel de Ruyter", "Hugo de Groot"], answer: 0, wrongHints: [null, "Erasmus was een denker; hij leidde geen opstand.", "De Ruyter was admiraal, een eeuw later.", "Hugo de Groot was jurist, bekend van de boekenkist."] },
      { q: "Wie zag met een zelfgebouwde **microscoop** als eerste bacteriën?", options: ["Antoni van Leeuwenhoek", "Christiaan Huygens", "Eise Eisinga", "Christiaan Eijkman"], answer: 0, wrongHints: [null, "Huygens bestudeerde de sterren en bouwde een slingerklok.", "Eisinga bouwde een planetarium in zijn woonkamer.", "Eijkman ontdekte de oorzaak van beriberi (vitamine B1), 200 jaar later."] },
      { q: "Wie geldt als de **grootste voetballer** die Nederland ooit had?", options: ["Johan Cruijff", "Virgil van Dijk", "Memphis Depay", "Arjen Robben"], answer: 0, wrongHints: [null, "Van Dijk is een topverdediger van nu, maar won nooit de Gouden Bal.", "Memphis is goed, maar niet de grootste ooit.", "Robben was een topspeler, maar hij wordt niet de grootste ooit genoemd."] },
      { q: "Wie was van 2010 tot 2024 **premier** van Nederland?", options: ["Mark Rutte", "Wim Kok", "Ruud Lubbers", "Jan Peter Balkenende"], answer: 0, wrongHints: [null, "Wim Kok was premier van 1994 tot 2002.", "Ruud Lubbers was premier van 1982 tot 1994.", "Jan Peter Balkenende was premier van 2002 tot 2010."] },
      { q: "Wie bouwde de beroemde **Fokker-vliegtuigen**?", options: ["Anthony Fokker", "Anton Philips", "Boyan Slat", "Max Verstappen"], answer: 0, wrongHints: [null, "Philips maakte gloeilampen in Eindhoven.", "Slat haalt plastic uit de zee.", "Verstappen rijdt snel, maar op de grond."] },
      { q: "Wie werd in 2013 de **eerste koning** van Nederland sinds 1890?", options: ["Willem-Alexander", "Willem III", "Prins Claus", "Prins Bernhard"], answer: 0, wrongHints: [null, "Willem III was de láátste koning vóór 1890 — niet de eerste erna.", "Prins Claus was de man van koningin Beatrix, maar hij was nooit koning.", "Prins Bernhard was de man van koningin Juliana — ook geen koning."] },
      {
        q: "Wie schreef **Max Havelaar** (1860) — boek tegen koloniale uitbuiting?",
        options: ["Multatuli", "Anne Frank", "Willem Frederik Hermans", "Annie M.G. Schmidt"],
        answer: 0,
        wrongHints: [null, "Anne Frank schreef een dagboek in de Tweede Wereldoorlog — bijna 100 jaar later.", "Hermans schreef na 1945, over de oorlog.", "Annie M.G. Schmidt schreef kinderboeken zoals Jip en Janneke."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Multatuli?", tekst: "**Multatuli** is het pseudoniem (= schuilnaam) van **Eduard Douwes Dekker** *(1820-1887)*. Werkte als bestuurder in Nederlands-Indië, zag uitbuiting van Javanen door koloniaal systeem." },
            { titel: "Wat is 'Max Havelaar'?", tekst: "Boek uit **1860**. Roman, gebaseerd op Dekkers eigen ervaring. Max Havelaar is de hoofdpersoon — koloniaal bestuurder die zich verzet tegen onrecht. Schokte Nederland en startte het debat over het koloniale beleid." },
            { titel: "Toets-feitje", tekst: "Pseudoniem 'Multatuli' komt uit Latijn: 'multa tuli' = 'ik heb veel gedragen'. Belangrijk schoolvak: dit is **één van de bekendste NL-boeken ooit** en wordt vaak getoetst. Heden ten dage is 'Max Havelaar' ook het Fair-Trade-keurmerk-logo (zelfde naam)." },
          ],
          woorden: [
            { woord: "pseudoniem", uitleg: "Andere naam waaronder een schrijver/artiest publiceert." },
            { woord: "Nederlands-Indië", uitleg: "Nederlandse kolonie (1816-1945), nu Indonesië." },
            { woord: "koloniaal systeem", uitleg: "Een land bezet een ander land en buit het uit. NL deed dit eeuwenlang in Indonesië, Suriname, Caribische eilanden." },
          ],
          theorie: "Belangrijke NL-schrijvers per tijdvak:\n• 1600 — **P.C. Hooft** (Gouden Eeuw poëzie)\n• 1700 — **Justus van Effen** (essay)\n• 1860 — **Multatuli** (Max Havelaar, koloniale kritiek)\n• 1947 — **Anne Frank** (dagboek, WO2)\n• 1950-2000 — **Willem Frederik Hermans, Reve, Mulisch** (Grote Drie)\n• Kinderboeken NL: **Annie M.G. Schmidt** (Jip & Janneke, Pluk)",
          voorbeelden: [
            { type: "feit", tekst: "Multatuli wordt vaak vergeleken met 'Uncle Tom's Cabin' uit Amerika — beide boeken over kolonialisme/slavernij die de publieke opinie veranderden." },
          ],
          basiskennis: [{ onderwerp: "Niet Anne Frank", uitleg: "Anne Frank schreef DAGBOEK (1942-1944), niet een roman. Andere periode (WO2)." }],
          niveaus: { basis: "Multatuli.", simpeler: "Multatuli is de schuilnaam van Eduard Douwes Dekker. Schreef Max Havelaar (1860) over uitbuiting Indonesië.", nogSimpeler: "Multatuli" },
        },
      },
      {
        q: "Waar is **Boyan Slat** bekend om?",
        options: ["Plastic uit de zee halen", "Racen in de Formule 1", "Voetballen bij Oranje", "Besturen in de Tweede Kamer"],
        answer: 0,
        wrongHints: [null, "Racen is Max Verstappen. Slat is uitvinder — wat bedacht hij?", "Slat is geen sporter. Hij begon op zijn 16e met een plan — waarvoor?", "Slat zit niet in de politiek; hij heeft een eigen organisatie. Wat doet die?"],
        uitlegPad: {
          stappen: [
            { titel: "Wie is Boyan Slat?", tekst: "Boyan Slat (geboren **1994**) is een **Nederlandse uitvinder**. Begon **The Ocean Cleanup** op zijn 18e — bedrijf dat plastic uit oceanen verwijdert met grote drijvende systemen." },
            { titel: "Wat doet The Ocean Cleanup?", tekst: "• In **oceanen** (vooral Great Pacific Garbage Patch) — drijvende U-vormige systemen die plastic verzamelen\n• In **rivieren** — Interceptors vangen plastic voordat het de zee bereikt\n• Sinds 2019 actief in rivieren in verschillende landen" },
            { titel: "Toets-feitje", tekst: "Slat is een **moderne Nederlandse held** — wordt vaak in Toets-onderwijs genoemd als voorbeeld van milieu-innovatie. Zijn TED-talk in 2012 (toen 18 jaar) ging viraal. In 2022 NL-Onderscheiding ontvangen." },
          ],
          woorden: [
            { woord: "Ocean Cleanup", uitleg: "Nederlandse non-profit, opgericht 2013. Doel: 90% plastic uit oceanen tegen 2040." },
            { woord: "Interceptor", uitleg: "Slat's rivierfilter — zonne-aangedreven schip dat plastic uit rivieren vist voor het zee bereikt." },
          ],
          theorie: "Beroemde moderne NL-vernieuwers:\n• **Boyan Slat** (1994) — Ocean Cleanup\n• **Bas Lansdorp** (1977) — Mars One initiatief\n• Diverse start-ups uit TU Delft / Eindhoven\nCito test vaak op 'wie deed wat?' bij moderne NL-figuren.",
          voorbeelden: [
            { type: "feit", tekst: "Ocean Cleanup heeft tot 2025+ ~330.000 kg plastic verwijderd uit Great Pacific Garbage Patch." },
          ],
          basiskennis: [{ onderwerp: "Jong + impact", uitleg: "Slat is voorbeeld van 'jong + grote impact'. Inspirerend voor Toets-leerlingen." }],
          niveaus: { basis: "Ocean Cleanup.", simpeler: "Boyan Slat is Nederlandse uitvinder van The Ocean Cleanup — plastic uit oceanen halen.", nogSimpeler: "Ocean Cleanup" },
        },
      },
      {
        q: "Waardoor is **Anne Frank** beroemd geworden?",
        options: ["Haar dagboek", "Haar schilderijen", "Haar toespraken", "Haar sportprestaties"],
        answer: 0,
        wrongHints: [null, "Anne schilderde niet. Wat deed ze bijna elke dag in het Achterhuis, met pen en papier?", "Ze hield geen toespraken; ze zat ondergedoken en moest stil zijn. Wat deed ze wel?", "Sporten kon niet in het Achterhuis. Wat kon ze wel doen, met pen en papier?"],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Anne Frank?", tekst: "**Anne Frank** *(1929-1945)* was een **joods meisje** dat tijdens de Tweede Wereldoorlog ondergedoken zat in Amsterdam aan de **Prinsengracht 263** (nu Anne Frank Huis museum). Schreef daar haar dagboek." },
            { titel: "Het dagboek", tekst: "Schreef van haar 13e tot 15e in een rood-geblokt dagboekje. Gaf het de naam **'Kitty'** alsof ze een vriendin aansprak. Behandelt onderduikleven, gezinsproblemen, eerste liefde, hoop op vrijheid. Vader Otto Frank publiceerde het na de oorlog (1947)." },
            { titel: "Toets-feitje + erfgoed", tekst: "Het Anne Frank-dagboek is in **70+ talen** vertaald — een van de meest gelezen boeken ooit. Anne werd verraden in **augustus 1944**, gedeporteerd naar Bergen-Belsen waar ze begin **1945** stierf aan vlektyfus, vlak vóór de bevrijding. Symbool wereldwijd voor slachtoffers van de Holocaust." },
          ],
          woorden: [
            { woord: "onderduiken", uitleg: "Zich verbergen voor vervolging (in WO2 vooral joden voor nazi's)." },
            { woord: "Holocaust", uitleg: "Systematische moord op ~6 miljoen joden door nazi-Duitsland tijdens WO2." },
            { woord: "Achterhuis", uitleg: "Naam van Anne's dagboek-uitgave + naam van het schuilhuis." },
          ],
          theorie: "WO2 Nederland-kerntermen:\n• **1940 mei** — Duitse inval NL\n• **1941-1944** — vervolging joden, deportaties\n• **1944 'Hongerwinter'** — extreme honger in west-NL\n• **1945 mei** — bevrijding\n• ~104.000 NL-joden vermoord (75% van NL-joden vóór WO2)\n• Anne Frank = symbool voor allen die niet meer konden vertellen.",
          voorbeelden: [
            { type: "feit", tekst: "Anne Frank Huis is een van de meest bezochte musea NL (1+ miljoen bezoekers/jaar)." },
          ],
          basiskennis: [{ onderwerp: "Niet leider, slachtoffer", uitleg: "Anne was 13-15 jaar, geen politicus. Symbool door haar persoonlijk perspectief." }],
          niveaus: { basis: "Dagboek WO2.", simpeler: "Anne Frank schreef dagboek tijdens onderduik in WO2 — joods meisje, vermoord in concentratiekamp 1945.", nogSimpeler: "Dagboek" },
        },
      },
      {
        q: "**Max Verstappen** — beroemd om?",
        options: ["F1-coureur", "Voetballer", "Tennisser", "Schaatser"],
        answer: 0,
        wrongHints: [null, "Max speelt niet bij Oranje op het veld. Waar hoor je zijn naam wél, elke race-zondag?", "Een racket hoort bij tennis. Wat hoort bij Max?", "Op het ijs zie je Kramer en Wüst. Waar zie je Max?"],
        uitlegPad: {
          stappen: [
            { titel: "Wie is Max Verstappen?", tekst: "**Max Verstappen** (geboren **1997** in Hasselt, België) is een Nederlands-Belgische **Formule 1-coureur**. Rijdt sinds 2015 in de F1, tegenwoordig voor Red Bull Racing. Jongste F1-winnaar ooit (Spanje 2016, 18 jaar oud)." },
            { titel: "Wereldkampioen-jaren", tekst: "Verstappen werd **wereldkampioen F1 in 2021, 2022, 2023, 2024** — vier opeenvolgende titels. Sinds 2024 is hij **één van de meest succesvolle NL-sporters** ooit." },
            { titel: "Toets-feitje familie", tekst: "Max's vader is **Jos Verstappen** (ook ex-F1-coureur), moeder is **Sophie Kumpen** (Belgisch karting-talent). Reden waarom hij Nederlands EN Belgisch paspoort kreeg. Officieel rijdt hij voor **Nederland** (oranje shirt + Wilhelmus bij podium)." },
          ],
          woorden: [
            { woord: "Formule 1", uitleg: "Hoogste klasse autoraces wereldwijd. 20+ races per jaar, exclusief talent." },
            { woord: "wereldkampioen", uitleg: "Coureur met meeste punten over hele F1-seizoen." },
          ],
          theorie: "Grote NL-sporthelden modern (2000-heden):\n• **Max Verstappen** — F1 (4× WK)\n• **Sven Kramer** — schaatsen (4× Olympisch goud)\n• **Ireen Wüst** — schaatsen (meeste OS-medailles ooit, 13 stuks)\n• **Lieke Martens** — voetbal (WK-finale 2019)\n• **Robin van Persie** — voetbal (kop in WK 2014)\n• **Dafne Schippers** — atletiek (2× WK 200m)",
          voorbeelden: [
            { type: "feit", tekst: "Verstappen won zijn eerste race meteen bij zijn debuut voor Red Bull in 2016 — uniek in F1-historie." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen Cruijff", uitleg: "Bij 'grootste NL-sporter ooit' debatteren mensen: Cruijff (voetbal), Verstappen (F1), Wüst (schaatsen). De toets vraagt zelden 'wie is grootste' — wel 'wie won wat'." }],
          niveaus: { basis: "F1.", simpeler: "Max Verstappen = Nederlandse F1-coureur, 4× wereldkampioen 2021-2024.", nogSimpeler: "F1" },
        },
      },
      { q: "**Willem van Oranje** leefde tijdens?", options: ["Tachtigjarige Oorlog","Tweede Wereldoorlog","Gouden Eeuw","Franse tijd (Napoleon)"], answer: 0, wrongHints: [null, "De Tweede Wereldoorlog was in 1940-1945; Willem leefde in de 16e eeuw.", "Iets later — de Gouden Eeuw is de 17e eeuw, Willem stierf al in 1584.", "De Franse tijd (Napoleon) was rond 1800, ruim 200 jaar later."] },
      { q: "Welke Nederlander is bekend van de **microscoop**?", options: ["Anton van Leeuwenhoek","Christiaan Huygens","Erasmus","Boyan Slat"], answer: 0, wrongHints: [null, "Huygens keek juist naar het grote: sterren en Saturnus.", "Erasmus schreef boeken; hij was geen uitvinder.", "Slat is van nu — hij ruimt plastic op."] },
      { q: "**Boyan Slat** is bekend om?", options: ["Plastic uit oceanen halen","F1-races","Schaatsen","Politiek"], answer: 0, wrongHints: [null, "F1 is Max Verstappen. Slat is uitvinder.", "Schaatsen is Kramer en Wüst. Slat bedacht een uitvinding — waarvoor?", "Slat zit niet in de politiek; hij begon een eigen organisatie. Wat doet die?"] },
      { q: "Wie is in 2026 de **koning** van Nederland?", options: ["Willem-Alexander","Beatrix","Juliana","Willem I"], answer: 0, wrongHints: [null, "Beatrix was koningin tot 2013, toen droeg ze de troon over.", "Juliana was koningin tot 1980.", "Willem I was de eerste koning, rond 1815."] },
      { q: "Waar is **koningin Máxima** geboren?", options: ["Argentinië","Nederland","Duitsland","België"], answer: 0, wrongHints: [null, "In Nederland woont ze nú, maar waar is ze geboren?", "Uit Duitsland kwam Willem van Oranje (Dillenburg), niet Máxima.", "België is dichtbij; Máxima komt van veel verder weg."] },
      { q: "**Erasmus** was een?", options: ["Filosoof","Politicus","Schilder","Zeevaarder"], answer: 0, wrongHints: [null, "Schreef boeken, geen wetten.", "Geen schilderwerk — geen Rembrandt.", "Hij reisde door Europa, maar niet als ontdekker op zee — met boeken."] },
      { q: "Wie schreef *Max Havelaar*?", options: ["Multatuli","Vondel","Anne Frank","Annie M.G. Schmidt"], answer: 0, wrongHints: [null, "Vondel schreef toneel in de Gouden Eeuw, 200 jaar eerder.", "Anne Frank schreef een dagboek in de Tweede Wereldoorlog.", "Annie M.G. Schmidt schreef kinderboeken en liedjes."] },
      { q: "**Rembrandt** schilderde welk beroemd werk?", options: ["De Nachtwacht","Mona Lisa","Sterrennacht","De Schreeuw"], answer: 0, wrongHints: [null, "De Mona Lisa is van Leonardo da Vinci (Italië).", "De Sterrennacht is van Van Gogh, 250 jaar later.", "De Schreeuw is van de Noor Edvard Munch."] },
      { q: "**Vincent van Gogh** is bekend om welk werk?", options: ["De Zonnebloemen","Nachtwacht","Meisje met de parel","Victory Boogie Woogie"], answer: 0, wrongHints: [null, "De Nachtwacht is van Rembrandt.", "Het Meisje met de Parel is van Vermeer.", "Victory Boogie Woogie is van Mondriaan — abstract, geen bloemen."] },
      { q: "**Cruijff** was beroemde NL-?", options: ["Voetballer","Politicus","Wetenschapper","Schaker"], answer: 0, wrongHints: [null, "Hij maakte geen wetten; hij won de Gouden Bal. Waarvoor krijg je die?", "Geen wetenschap. Denk aan Ajax en rugnummer 14.", "Onze beroemde schaker was Max Euwe. Cruijff deed iets anders."] },
      { q: "Wie was **Annie M.G. Schmidt**?", options: ["Kinderboekenschrijfster","Voetbalspeelster","Politica","Zangeres"], answer: 0, wrongHints: [null, "Voetbal? Denk aan Jip en Janneke — wat maakte zij?", "Ze zat niet in de politiek. Waar ken je Pluk van de Petteflet van?", "Ze schreef wel liedjes, maar zong ze niet zelf."] },
      { q: "Wat werd **Marga Klompé** in 1956 als eerste vrouw in Nederland?", options: ["Minister","Premier","Koningin","Burgemeester"], answer: 0, wrongHints: [null, "Een vrouwelijke premier heeft Nederland nog nooit gehad.", "Er waren al eerder koninginnen.", "De eerste vrouwelijke burgemeester was er al eerder, in 1946. Wat werd Klompé in 1956 als eerste vrouw?"] },
      { q: "Wie was van 2010 tot 2024 **premier** (minister-president) van Nederland?", options: ["Mark Rutte","Dick Schoof","Geert Wilders","Wim Kok"], answer: 0, wrongHints: [null, "Die kwam pas ná 2024.", "Wel politicus, maar nooit premier.", "Die was veel eerder premier."] },
      { q: "Wie is een beroemde Nederlandse **schaatser**?", options: ["Sven Kramer","Johan Cruijff","Max Verstappen","Femke Bol"], answer: 0, wrongHints: [null, "Cruijff was voetballer.", "Verstappen rijdt Formule 1.", "Bol loopt de 400 meter horden op de atletiekbaan."] },
      { q: "**Vermeer** is bekend om?", options: ["Schilderen","Wetenschap","Politiek","Sport"], answer: 0, wrongHints: [null, "Vermeer deed geen proeven. Denk aan het Mauritshuis: wat hangt daar van hem?", "Hij zat niet in het bestuur. Waar is het Meisje met de Parel een voorbeeld van?", "Sport als beroep bestond in de Gouden Eeuw nauwelijks. Waar werd Delft dankzij hem beroemd om?"] },
      { q: "Wat was **Mata Hari**?", options: ["Danseres en spionne","Schilderes en dichteres","Wetenschapper en arts","Politica en minister"], answer: 0, wrongHints: [null, "Ze schilderde en dichtte niet. Lees het toets-feitje: waar trad ze mee op, en waarom werd ze in 1917 doodgeschoten?", "Geen wetenschap. Lees het toets-feitje: waar werd ze beroemd mee en waarvan werd ze beschuldigd?", "Ze zat niet in de politiek. Waarvan beschuldigde Frankrijk haar in 1917?"] },
      { q: "Welke NL-zanger had hit *Bloed, Zweet en Tranen*?", options: ["André Hazes","Marco Borsato","Jan Smit","Frans Bauer"], answer: 0, wrongHints: [null, "Bekend van 'Dromen zijn bedrog'.", "Volendammer van een latere generatie.", "Bekend van 'Heb je even voor mij'."] },
      { q: "Welke Nederlander won in **1968** de **Tour de France**?", options: ["Jan Janssen","Tom Dumoulin","Joop Zoetemelk","Mathieu van der Poel"], answer: 0, wrongHints: [null, "Dumoulin won de Giro in 2017 — veel later.", "Hij won de Tour later, in 1980.", "Van der Poel is van nu; 1968 was ruim 25 jaar vóór zijn geboorte."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const bekendeNederlandersPo = {
  id: "bekende-nederlanders-po",
  title: "Bekende Nederlanders (groep 6-8, Doorstroomtoets-stof)",
  emoji: "📜",
  level: "groep6-8",
  subject: "geschiedenis",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / cultuur",
  prerequisites: [
    { id: "tijdvakken-nederland-po", title: "Tijdvakken NL", niveau: "1F" },
  ],
  intro:
    "Bekende Nederlanders voor groep 6-8, Doorstroomtoets-stof — historisch (Erasmus/Willem van Oranje/Hugo de Groot/Leeuwenhoek/Huygens/Eisinga) + sport (Cruijff/Van Basten/Kramer/Wüst/Verstappen) + modern (Willem-Alexander/Rutte/Boyan Slat) + films/muziek (Verhoeven/Hazes/DJ's). Sluit aan op tijdvakken-NL. ~15 min.",
  triggerKeywords: [
    "Nederlander", "beroemde Nederlanders",
    "Erasmus", "Willem van Oranje", "Hugo de Groot",
    "Leeuwenhoek", "Huygens", "Eisinga",
    "Thorbecke", "Grondwet 1848", "Aletta Jacobs", "vrouwenkiesrecht", "Willem Barentsz", "Nova Zembla",
    "Multatuli",
    "Cruijff", "Van Basten", "Verstappen", "Sven Kramer",
    "Willem-Alexander", "Maxima",
    "Mark Rutte", "Dick Schoof",
    "Boyan Slat", "Ocean Cleanup",
    "Paul Verhoeven", "Anton Corbijn",
    "Anne Frank", "Mata Hari",
  ],
  chapters,
  steps,
};

export default bekendeNederlandersPo;
