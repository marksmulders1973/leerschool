// Leerpad: Vulkanen — groep 6-8 wereldoriëntatie (aardrijkskunde). 1F.
// Mark 6 sep 2026: "maak ook een vulkaan-leerpad op groep 6-8-niveau" — hoort bij
// Brian's vulkaan in het park (BuitenVulkaan); het oude gekoppelde pad
// (platentektoniek-aardrijkskunde) is klas 2-3 en blijft als vervolg-stap.
// 5 stappen, ~12 min. Toets-relevant: aardrijkskunde/natuur (Doorstroomtoets
// wereldoriëntatie is geen apart onderdeel meer, maar begrijpend-lezen-teksten
// over vulkanen komen vaak voor — daarom veel "waarom"-vragen).

const stepEmojis = ["🌋", "🌍", "🔥", "🌱", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een vulkaan?", emoji: "🌋", from: 0, to: 0 },
  { letter: "B", title: "Waarom barst hij uit?", emoji: "🌍", from: 1, to: 1 },
  { letter: "C", title: "Wat komt eruit?", emoji: "🔥", from: 2, to: 2 },
  { letter: "D", title: "Gevaar én nut", emoji: "🌱", from: 3, to: 3 },
  { letter: "E", title: "Eind-toets", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een vulkaan?",
    explanation:
      "Een **vulkaan** is een berg met een **gat** erin. Door dat gat komt **gesmolten steen** uit de aarde naar buiten.\n\n**Hoe kan steen smelten?** Diep in de aarde is het gloeiend heet: meer dan **1000 graden**. Zo heet dat steen vloeibaar wordt, als dikke stroop. Dat gesmolten steen heet **magma** zolang het nog **onder** de grond zit.\n\n**Zo zit een vulkaan in elkaar:**\n• **Magmakamer** — een 'zak' vol magma, diep onder de berg.\n• **Kraterpijp** — de schoorsteen waardoor het magma omhoog gaat.\n• **Krater** — de opening bovenop, vaak een kom.\n• **Lava** — magma dat **buiten** is. Zelfde spul, andere naam!\n\n**Onthoud-truc:** **M**agma zit **M**ooi verstopt (onder), **L**ava **L**oopt naar buiten.\n\nDe berg zelf is gemaakt van oude, afgekoelde lava en as: elke uitbarsting legt een nieuw laagje op de berg. Daarom worden vulkanen elke keer een stukje groter. Zo'n spitse laagjes-berg (zoals de Mayon op de Filipijnen of de vulkaan in het Leerkwartier-park) heet een **kegelvulkaan**.",
    checks: [
      {
        q: "Wat is het **verschil** tussen magma en lava?",
        options: ["Magma zit onder de grond, lava is naar buiten gekomen", "Magma is koud, lava is heet", "Lava is steen, magma is water", "Er is geen verschil, het zijn twee woorden voor as"],
        answer: 0,
        wrongHints: [null, "Allebei zijn gloeiend heet — kijk naar wáár het spul zit.", "Allebei zijn gesmolten steen.", "As is iets anders (fijne stukjes). Denk aan onder/boven de grond."],
        uitlegPad: {
          stappen: [
            { titel: "Zelfde spul", tekst: "Magma en lava zijn allebei gesmolten steen van meer dan 1000 graden." },
            { titel: "De plek bepaalt de naam", tekst: "Zit het nog ONDER de grond, in de magmakamer of de kraterpijp? Dan heet het **magma**. Is het uit de krater naar BUITEN gestroomd? Dan heet het **lava**." },
            { titel: "Truc", tekst: "Magma = Mooi verstopt. Lava = Loopt naar buiten." },
          ],
          woorden: [
            { woord: "magma", uitleg: "Gesmolten steen dat nog onder de grond zit." },
            { woord: "lava", uitleg: "Gesmolten steen dat uit de vulkaan is gekomen." },
          ],
          theorie: "Vulkaan-woorden gaan bijna altijd over WAAR iets is: magmakamer (diep onder), kraterpijp (in de berg), krater (bovenop), lava (buiten).",
          voorbeelden: [
            { type: "stap", tekst: "Een gloeiende rivier op de helling van de Etna → dat is lava." },
            { type: "stap", tekst: "De hete 'zak' vol gesmolten steen 5 kilometer onder de berg → dat is magma." },
          ],
          basiskennis: [{ onderwerp: "Warmte in de aarde", uitleg: "Hoe dieper je in de aarde gaat, hoe heter het wordt. Diep genoeg smelt zelfs steen." }],
          niveaus: {
            basis: "Magma = gesmolten steen onder de grond. Lava = gesmolten steen buiten.",
            simpeler: "Onder de grond: magma. Buiten: lava.",
            nogSimpeler: "Lava loopt naar buiten.",
          },
        },
      },
      {
        q: "Hoe heet de opening **bovenop** een vulkaan?",
        options: ["De krater", "De magmakamer", "De kraterpijp", "De kom"],
        answer: 0,
        wrongHints: [null, "Die zit juist diep ónder de berg.", "Dat is de 'schoorsteen' ín de berg, niet de opening erbovenop.", null],
      },
      {
        q: "Waarom wordt een vulkaan bij elke uitbarsting een stukje **groter**?",
        options: ["De lava en as koelen af en vormen een nieuw laagje op de berg", "De berg zwelt op door de hitte", "Er komt steeds meer water in", "Dat is niet zo, vulkanen worden kleiner"],
        answer: 0,
        wrongHints: [null, "Steen zwelt niet op als een ballon. Wat gebeurt er met lava als die afkoelt?", "Water hoort er niet bij. Denk aan wat er uit de krater komt.", "Lees de laatste alinea nog eens: elke keer komt er iets bij."],
      },
      {
        q: "Hoe heet zo'n spitse berg die uit laagjes lava en as is opgebouwd?",
        options: ["Kegelvulkaan", "Heuvelvulkaan", "Kratermeer", "Aardbeving"],
        answer: 0,
        wrongHints: [null, "Die naam bestaat niet — welke vorm heeft een spitse berg?", "Dat is een meer ín een oude krater, geen berg.", "Dat is het schudden van de grond, geen berg."],
      },
    ],
  },
  {
    title: "Waarom barst een vulkaan uit?",
    explanation:
      "De buitenkant van de aarde is niet één stuk. Het is een **puzzel van grote stukken**: de **aardplaten** (ook wel schollen). Ze drijven heel langzaam op het hete, zachte gesteente eronder. Een paar centimeter per jaar, ongeveer zo snel als je nagels groeien.\n\n**Waar de platen elkaar raken** gebeurt er van alles:\n• Botsen ze? Dan ontstaan **bergen** (zoals de Alpen) en soms vulkanen.\n• Schuiven ze uit elkaar? Dan komt er magma omhoog in de spleet (zoals op **IJsland**).\n• Schuiven ze langs elkaar? Dan schokt de grond: een **aardbeving**.\n\nDaarom liggen de meeste vulkanen **op de randen van de platen**. Rondom de Grote Oceaan ligt een hele ketting van vulkanen: de **Ring van Vuur** (Japan, Indonesië, Filipijnen, Chili).\n\n**Waarom barst hij uit?** In het magma zitten **gassen**, net als de prik in een flesje cola. Diep onder de grond worden ze samengeperst. Gaat het magma omhoog, dan is er minder druk en willen de gassen eruit: **boem** — zoals een flesje cola dat je eerst hard schudt en dan opendraait.\n\n**Nederland** heeft geen actieve vulkanen: wij liggen midden op een plaat. Maar in het Caribische deel van ons Koninkrijk wel: **Mount Scenery** op **Saba** is een slapende vulkaan én het hoogste punt van Nederland (887 meter).",
    checks: [
      {
        q: "Waarom liggen de meeste vulkanen op de **randen** van aardplaten?",
        options: ["Daar kan magma omhoog komen waar de platen botsen of uit elkaar schuiven", "Daar is de grond het zachtst", "Daar regent het het meest", "Omdat de platen daar het dikst zijn"],
        answer: 0,
        wrongHints: [null, "Bijna goed gedacht, maar het gaat om wat de platen dóén op die randen.", "Regen heeft niets met magma te maken.", "Op een dikke plaat komt magma juist moeilijker omhoog."],
        uitlegPad: {
          stappen: [
            { titel: "De aarde is een puzzel", tekst: "De buitenkant van de aarde bestaat uit grote stukken: aardplaten. Ze bewegen een paar centimeter per jaar." },
            { titel: "Op de randen gebeurt het", tekst: "Waar twee platen botsen, wordt de ene onder de andere geduwd en smelt. Waar ze uit elkaar gaan, ontstaat een spleet. Op allebei de plekken kan magma omhoog." },
            { titel: "Midden op een plaat: rust", tekst: "Nederland ligt midden op een plaat. Daarom hebben wij geen vulkanen en bijna geen aardbevingen." },
          ],
          woorden: [
            { woord: "aardplaat", uitleg: "Een groot stuk van de buitenkant van de aarde dat heel langzaam beweegt." },
            { woord: "Ring van Vuur", uitleg: "De ketting van vulkanen rondom de Grote Oceaan." },
          ],
          theorie: "Toets-vraag 'waarom daar?' → antwoord bijna altijd: omdat daar aardplaten elkaar raken.",
          voorbeelden: [
            { type: "stap", tekst: "Japan ligt waar platen botsen → veel vulkanen én aardbevingen." },
            { type: "stap", tekst: "IJsland ligt op een spleet waar platen uit elkaar gaan → magma komt omhoog." },
          ],
          basiskennis: [{ onderwerp: "Kaartlezen", uitleg: "Op een kaart met vulkanen zie je lijnen van stipjes: dat zijn de randen van de platen." }],
          niveaus: {
            basis: "Op de randen van de platen kan magma omhoog. Daar liggen de vulkanen.",
            simpeler: "Vulkanen liggen waar de aardplaten elkaar raken.",
            nogSimpeler: "Vulkanen zitten op de randen van de platen.",
          },
        },
      },
      {
        q: "Wat zorgt ervoor dat een vulkaan echt **uitbarst** (de 'boem')?",
        options: ["Gassen in het magma die eruit willen als de druk minder wordt", "Regenwater dat de berg vult", "De wind die over de krater waait", "Dieren die in de krater graven"],
        answer: 0,
        wrongHints: [null, "Water komt niet van binnenuit. Denk aan het flesje cola.", "Wind zit buiten, de kracht komt van binnen.", null],
        uitlegPad: {
          stappen: [
            { titel: "Prik in het magma", tekst: "In magma zitten gassen, zoals de prik in cola. Diep onder de grond zijn ze samengeperst." },
            { titel: "Minder druk = gassen eruit", tekst: "Komt het magma omhoog, dan wordt de druk minder. De gassen zetten uit en duwen alles met kracht naar buiten." },
            { titel: "Het cola-flesje", tekst: "Schud een flesje cola en draai de dop open: de prik spuit alles eruit. Precies zo werkt een uitbarsting." },
          ],
          woorden: [{ woord: "druk", uitleg: "Hoe hard iets samengeperst wordt." }],
          theorie: "Uitbarsting = magma + gas + minder druk. Hoe meer gas, hoe harder de knal.",
          voorbeelden: [{ type: "stap", tekst: "Rustige lavastromen (Hawaï) = weinig gas. Grote knal (Vesuvius) = veel gas." }],
          basiskennis: [{ onderwerp: "Gas", uitleg: "Gas wil altijd meer ruimte. Als je het opsluit en dan loslaat, spuit het weg." }],
          niveaus: {
            basis: "Gassen in het magma zetten uit als de druk minder wordt en duwen alles naar buiten.",
            simpeler: "Het gas in het magma wil eruit, net als de prik in geschudde cola.",
            nogSimpeler: "Gas duwt het magma naar buiten.",
          },
        },
      },
      {
        q: "Hoe snel bewegen aardplaten ongeveer?",
        options: ["Een paar centimeter per jaar", "Een paar meter per dag", "Ze bewegen niet", "Honderd kilometer per jaar"],
        answer: 0,
        wrongHints: [null, "Dat zou je voelen! Denk aan hoe snel je nagels groeien.", "Ze bewegen wél, alleen heel langzaam.", "Veel te snel — dan zouden landen elk jaar verhuizen."],
      },
      {
        q: "Waar in het Koninkrijk der Nederlanden staat een (slapende) vulkaan?",
        options: ["Op Saba: Mount Scenery", "In Limburg: de Vaalserberg", "In Friesland", "Op Texel"],
        answer: 0,
        wrongHints: [null, "De Vaalserberg is een gewone heuvel, geen vulkaan.", "Friesland ligt midden op een aardplaat.", "Texel is een zandeiland uit de zee."],
      },
    ],
  },
  {
    title: "Wat komt er uit een vulkaan?",
    explanation:
      "Bij een uitbarsting komt niet alleen lava naar buiten. Er zijn **drie** dingen:\n\n**1. Lava** — gloeiend gesmolten steen. Soms stroomt het langzaam als een rivier (je kunt het lopend voorblijven), soms is het dik en stroperig. Als lava afkoelt wordt het weer **keihard steen**. Zwart, ruw gesteente op IJsland en Lanzarote is oude lava.\n\n**2. As** — geen as van een kampvuur, maar **piepkleine stukjes steen en glas**. Een aswolk kan kilometers hoog komen en dagen blijven hangen. In **2010** barstte een vulkaan op IJsland uit (de Eyjafjallajökull). De aswolk dreef over Europa en bijna alle vliegtuigen bleven een week aan de grond: as is gevaarlijk voor motoren.\n\n**3. Gassen** — onzichtbare dampen, zoals waterdamp en zwavelgas (dat stinkt naar rotte eieren). Ze maken de knal én kunnen giftig zijn.\n\nSoms vliegen er ook **lavabommen**: brokken gloeiend steen die als kanonskogels uit de krater schieten en op de helling neerploffen.\n\n**Twee soorten uitbarstingen:**\n• **Rustig** — dun-vloeibare lava stroomt eruit (Hawaï). Weinig gas.\n• **Explosief** — dikke lava met veel gas: een enorme knal, aswolk, lavabommen (Vesuvius, Krakatau).\n\nHet gevaarlijkst is niet de lava, maar een **gloedwolk**: een lawine van hete as en gas die met honderden kilometers per uur van de berg raast.",
    checks: [
      {
        q: "Wat komt er uit een vulkaan als hij uitbarst?",
        options: ["Lava, as en gassen", "Alleen lava", "Alleen rook en vuur", "Water en modder"],
        answer: 0,
        wrongHints: [null, "Lava is er één van — maar er komen nog twee dingen mee.", "Vuur is het niet echt: het gloeit omdat het gesmolten steen is.", "Water is er meestal niet, al kan gesmolten sneeuw wel modderstromen geven."],
      },
      {
        q: "Waarom bleven in 2010 bijna alle vliegtuigen in Europa aan de grond?",
        options: ["Een aswolk van een IJslandse vulkaan was gevaarlijk voor de motoren", "Er stroomde lava over de startbanen", "Het was te heet om te vliegen", "De piloten konden de vulkaan niet zien"],
        answer: 0,
        wrongHints: [null, "Lava komt niet zo ver: IJsland ligt duizenden kilometers weg. Wat kan wél zo ver drijven?", "De hitte blijft bij de berg. Denk aan wat er in de lucht hing.", "Zien was niet het probleem; iets in de lucht was het probleem."],
        uitlegPad: {
          stappen: [
            { titel: "As is fijn steen", tekst: "Vulkaan-as bestaat uit piepkleine stukjes steen en glas. Het is dus geen zachte kampvuur-as." },
            { titel: "As in een motor", tekst: "In een straalmotor smelt die as en plakt vast. De motor kan uitvallen. Daarom vliegt niemand door een aswolk." },
            { titel: "De wolk dreef over Europa", tekst: "In april 2010 blies de wind de aswolk van IJsland naar Nederland, Duitsland en Engeland. Zes dagen bijna geen vluchten." },
          ],
          woorden: [{ woord: "aswolk", uitleg: "Een reuzenwolk van fijne steen- en glasdeeltjes uit een vulkaan." }],
          theorie: "Oorzaak-gevolg: uitbarsting → aswolk → wind → gevaar voor motoren → vliegverbod. Bij toetsvragen loop je zo'n ketting stap voor stap na.",
          voorbeelden: [{ type: "stap", tekst: "Een vulkaan op IJsland had gevolgen voor vakantiegangers in Nederland — zonder dat hier één druppel lava viel." }],
          basiskennis: [{ onderwerp: "Wind", uitleg: "Wind verplaatst wolken, ook aswolken, over grote afstanden." }],
          niveaus: {
            basis: "De aswolk dreef over Europa; as is gevaarlijk voor vliegtuigmotoren, dus er werd niet gevlogen.",
            simpeler: "De as kan een vliegtuigmotor kapotmaken. Daarom bleven ze aan de grond.",
            nogSimpeler: "As is slecht voor de motor.",
          },
        },
      },
      {
        q: "Wat gebeurt er met lava als het **afkoelt**?",
        options: ["Het wordt weer hard steen", "Het wordt water", "Het verdwijnt", "Het wordt zand"],
        answer: 0,
        wrongHints: [null, "Lava was steen vóórdat het smolt. Wat wordt het dan weer?", "Steen verdwijnt niet zomaar.", "Zand ontstaat pas na heel lang afslijten — eerst is het iets anders."],
      },
      {
        q: "Welke uitbarsting geeft de **grootste knal**?",
        options: ["Dikke, stroperige lava met veel gas", "Dunne lava die rustig stroomt", "Een vulkaan zonder gas", "Een vulkaan onder water"],
        answer: 0,
        wrongHints: [null, "Rustig stromen = weinig gas = weinig knal.", "Zonder gas is er niets dat kan knallen.", null],
      },
    ],
  },
  {
    title: "Gevaar én nut",
    explanation:
      "Vulkanen zijn **gevaarlijk**. In het jaar **79** bedolf de **Vesuvius** de Romeinse stad **Pompeï** onder meters as. De stad bleef eeuwenlang verstopt. Toen mensen haar opgroeven, vonden ze huizen, winkels en zelfs brood in de oven: een momentopname van 2000 jaar geleden.\n\nToch wonen **miljoenen mensen** vlak bij een vulkaan. Waarom?\n\n**1. Vruchtbare grond.** Vulkaan-as zit vol mineralen, een soort natuurlijke mest. Rondom de **Etna** op Sicilië groeien sinaasappels, druiven en olijven beter dan ergens anders. Op Java (Indonesië) worden drie keer per jaar rijst geoogst.\n\n**2. Warmte uit de grond.** Op **IJsland** verwarmen ze bijna alle huizen met heet water uit de aarde. Ze maken er ook stroom mee: **aardwarmte**. Schoon en het raakt nooit op.\n\n**3. Toeristen.** Mensen komen van ver om een vulkaan te zien. Dat levert werk op: gidsen, hotels, restaurants.\n\n**4. Nieuw land.** Hawaï en IJsland bestaan helemaal uit lava. Zonder vulkanen waren die eilanden er niet.\n\n**Hoe houd je het veilig?** Wetenschappers (**vulkanologen**) meten de berg dag en nacht: trilt de grond, zwelt de berg op, komt er meer gas uit? Dan waarschuwen ze op tijd, zodat mensen kunnen vertrekken. Zo werd in 1991 op de Filipijnen bij de Pinatubo een hele stad op tijd ontruimd.",
    checks: [
      {
        q: "Waarom wonen veel mensen **vlak bij** een vulkaan, ondanks het gevaar?",
        options: ["De grond is er heel vruchtbaar en er is warmte uit de aarde", "Ze weten niet dat het een vulkaan is", "Het is er altijd warm weer", "Huizen zijn er gratis"],
        answer: 0,
        wrongHints: [null, "Mensen weten het meestal heel goed. Wat levert de vulkaan hun op?", "Het weer heeft er weinig mee te maken. Denk aan de grond en aan energie.", null],
        uitlegPad: {
          stappen: [
            { titel: "As is mest", tekst: "Vulkaan-as zit vol mineralen. Planten groeien er extra goed op: sinaasappels bij de Etna, rijst op Java." },
            { titel: "Warmte uit de grond", tekst: "Bij een vulkaan zit heet water dicht onder de grond. IJsland verwarmt er huizen mee en maakt er stroom van (aardwarmte)." },
            { titel: "Werk", tekst: "Toeristen willen een vulkaan zien. Gidsen, hotels en restaurants verdienen daaraan." },
          ],
          woorden: [
            { woord: "vruchtbaar", uitleg: "Grond waar planten goed op groeien." },
            { woord: "aardwarmte", uitleg: "Warmte uit de aarde die je gebruikt om te verwarmen of stroom te maken." },
          ],
          theorie: "Toets-truc 'voordelen van vulkanen': grond (mest), warmte (energie), toerisme (werk), nieuw land.",
          voorbeelden: [{ type: "stap", tekst: "Rondom de Vesuvius wonen 3 miljoen mensen — de grond is er goud waard." }],
          basiskennis: [{ onderwerp: "Mineralen", uitleg: "Stofjes in de grond die planten nodig hebben om te groeien." }],
          niveaus: {
            basis: "De as maakt de grond vruchtbaar en de warmte uit de aarde is gratis energie.",
            simpeler: "De grond is er heel goed voor planten, en er is warmte.",
            nogSimpeler: "De grond is er goed.",
          },
        },
      },
      {
        q: "Wat gebeurde er met de stad **Pompeï** in het jaar 79?",
        options: ["Ze werd bedolven onder de as van de Vesuvius", "Ze werd overstroomd door de zee", "Ze werd verwoest door een aardbeving", "Ze werd gebouwd op een vulkaan"],
        answer: 0,
        wrongHints: [null, "Water was het niet. Wat kwam er uit de Vesuvius?", "De grond trilde wel, maar iets anders bedekte de stad meters dik.", "De stad bestond al lang — wat gebeurde ermee?"],
      },
      {
        q: "Wat doet een **vulkanoloog**?",
        options: ["De vulkaan meten en op tijd waarschuwen", "Lava opruimen", "Toeristen rondleiden", "De krater dichtmaken"],
        answer: 0,
        wrongHints: [null, "Lava ruim je niet op — het wordt steen.", "Dat doet een gids. Een vulkanoloog is een wetenschapper.", "Een krater dichtmaken kan niet; de druk zoekt altijd een weg."],
      },
      {
        q: "Waarom is **aardwarmte** een slimme energiebron?",
        options: ["Het is schoon en raakt niet op", "Het is fossiel", "Het maakt lava", "Het werkt alleen in Nederland"],
        answer: 0,
        wrongHints: [null, "Fossiel = olie, gas, kool. Aardwarmte komt niet uit dode planten.", "Andersom: de warmte kómt van het hete gesteente.", "Juist op vulkaan-eilanden als IJsland werkt het het best."],
      },
    ],
  },
  {
    title: "Eind-toets: ben jij een vulkaan-kenner?",
    explanation:
      "Je weet nu:\n• **Magma** zit onder de grond, **lava** komt naar buiten.\n• Vulkanen liggen op de **randen van aardplaten** (Ring van Vuur, IJsland).\n• **Gas** in het magma zorgt voor de knal (het cola-flesje).\n• Uit een vulkaan komen **lava, as en gassen**.\n• Vulkanen zijn gevaarlijk, maar geven **vruchtbare grond, aardwarmte en werk**.\n\nLoop na de toets nog eens door het park: bij de vulkaan aan de kust zie je alles wat je net las — de kegel van laagjes, de krater met het lavameer, de rookpluim en om de paar minuten een uitbarsting met lavabommen. Kijk of je de geulen op de helling herkent: dat zijn oude lavastromen.",
    checks: [
      { q: "Gesmolten steen dat **buiten** de vulkaan stroomt heet…", options: ["Lava", "Magma", "As", "Gas"], answer: 0, wrongHints: [null, "Dat is de naam ónder de grond.", "As is fijn stof, geen vloeibaar steen.", "Gas is onzichtbaar en niet vloeibaar."] },
      { q: "De ketting van vulkanen rondom de Grote Oceaan heet…", options: ["De Ring van Vuur", "De Vuurlinie", "De Lavaketen", "De Aardplaat"], answer: 0, wrongHints: [null, null, "Klinkt logisch, maar zo heet hij niet.", "Een aardplaat is een stuk aardkorst, geen ketting van vulkanen."] },
      { q: "Wat maakt een uitbarsting **explosief**?", options: ["Veel gas in dik magma", "Veel water in de krater", "Een hoge berg", "Weinig lava"], answer: 0, wrongHints: [null, "Denk aan de prik in de cola, niet aan water.", "De hoogte van de berg zegt niets over de knal.", null] },
      { q: "Welk **voordeel** hebben vulkanen voor boeren?", options: ["De as maakt de grond vruchtbaar", "De lava geeft schaduw", "Er valt meer regen", "De grond wordt harder"], answer: 0, wrongHints: [null, "Schaduw is geen voordeel voor gewassen. Denk aan mest.", "Regen komt van wolken, niet van de vulkaan.", "Harde grond is juist slecht voor planten."] },
      { q: "Wat betekent het als een vulkaan **slapend** is?", options: ["Hij is lang niet uitgebarsten, maar kan dat nog wel", "Hij kan nooit meer uitbarsten", "Hij barst elke nacht uit", "Hij is nog nooit uitgebarsten"], answer: 0, wrongHints: [null, "Dat heet een 'dode' of uitgedoofde vulkaan.", null, "Slapend betekent dat hij het vroeger wél deed."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const vulkanenPo = {
  id: "vulkanen-po",
  title: "Vulkanen (groep 6-8)",
  emoji: "🌋",
  level: "groep6-8",
  subject: "aardrijkskunde",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — aardrijkskunde: de aarde, natuurverschijnselen",
  prerequisites: [],
  intro:
    "Vulkanen voor groep 6-8 — wat is een vulkaan (magma, lava, krater), waarom barst hij uit (aardplaten, Ring van Vuur, gas als de prik in cola), wat komt eruit (lava, as, gassen; de aswolk van 2010) en waarom mensen er tóch bij wonen (vruchtbare grond, aardwarmte). Hoort bij de vulkaan in het Leerkwartier-park. ~12 min.",
  triggerKeywords: [
    "vulkaan", "vulkanen", "vulkaanuitbarsting", "uitbarsting",
    "lava", "magma", "krater", "as", "aswolk",
    "aardplaat", "aardplaten", "platentektoniek", "Ring van Vuur",
    "Vesuvius", "Pompeï", "Etna", "IJsland", "Eyjafjallajökull", "Saba", "Mount Scenery",
    "aardwarmte", "vulkanoloog", "gloedwolk", "kegelvulkaan",
  ],
  chapters,
  steps,
};

export default vulkanenPo;
