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
      "Een **vulkaan** is een berg met een **gat** erin. Door dat gat komt **gesmolten steen** uit de aarde naar buiten.\n\n**Hoe kan steen smelten?** Diep in de aarde is het gloeiend heet: zo'n **700 tot 1200 graden**. Zo heet dat steen vloeibaar wordt, als dikke stroop. Dat gesmolten steen heet **magma** zolang het nog **onder** de grond zit.\n\n**Zo zit een vulkaan in elkaar:**\n• **Magmakamer** — een 'zak' vol magma, diep onder de berg.\n• **Kraterpijp** — de schoorsteen waardoor het magma omhoog gaat.\n• **Krater** — de opening bovenop, vaak een kom.\n• **Lava** — magma dat **buiten** is. Zelfde spul, andere naam!\n\n**Onthoud-truc:** **M**agma zit **M**ooi verstopt (onder), **L**ava **L**oopt naar buiten.\n\nDe berg zelf is gemaakt van oude, afgekoelde lava en as: elke uitbarsting legt een nieuw laagje op de berg. Daarom worden vulkanen elke keer een stukje groter. Zo'n spitse laagjes-berg (zoals de Mayon op de Filipijnen of de vulkaan in het Leerkwartier-park) heet een **kegelvulkaan**.",
    checks: [
      {
        q: "Wat is het **verschil** tussen magma en lava?",
        options: ["Magma zit onder de grond, lava is naar buiten gekomen", "Magma is gloeiend heet, lava is al bijna afgekoeld", "Magma is dun en vloeibaar, lava is dik en stroperig", "Magma is gesmolten steen, lava is hete as en gas"],
        answer: 0,
        wrongHints: [null, "Ook lava is nog gloeiend heet als het uit de krater stroomt. Wat is dan wél het verschil?", "Lava kan dun én dik zijn. Wat is dan wél het verschil?", "Lava is ook gesmolten steen; as en gas zijn iets anders. Wat is dan wél het verschil?"],
        uitlegPad: {
          stappen: [
            { titel: "Zelfde spul", tekst: "Magma en lava zijn allebei gesmolten steen van zo'n 700 tot 1200 graden." },
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
        options: ["De krater", "De magmakamer", "De kraterpijp", "De lavastroom"],
        answer: 0,
        wrongHints: [null, "Die zit juist diep ónder de berg.", "Dat is de 'schoorsteen' ín de berg, niet de opening erbovenop.", "Dat is lava die over de helling stroomt, geen opening."],
      },
      {
        q: "Waardoor wordt een vulkaan na uitbarstingen vaak een stukje **groter**?",
        options: ["De lava en as koelen af en vormen een nieuw laagje op de berg", "De berg zwelt op door de hitte en blijft daarna zo dik", "Er komt bij elke uitbarsting meer regenwater in de krater", "Botsende aardplaten duwen de berg bij elke uitbarsting hoger"],
        answer: 0,
        wrongHints: [null, "Steen zwelt niet blijvend op als een ballon. Wat valt er bij een uitbarsting op de helling?", "Water hoort er niet bij. Denk aan wat er uit de krater komt.", "Aardplaten duwen een berg niet bij elke uitbarsting omhoog. Wat komt er bij een uitbarsting óp de berg terecht?"],
      },
      {
        q: "Hoe heet een vulkaan die, net als de Mayon, uit laagjes lava en as is opgebouwd?",
        options: ["Kegelvulkaan", "Koepelvulkaan", "Schildvulkaan", "Spleetvulkaan"],
        answer: 0,
        wrongHints: [null, "Een koepelvulkaan is een ronde bult van taaie lava, zonder laagjes. Hoe heet de vulkaan uit de les?", "Een schildvulkaan is juist plat en breed, als een schild dat op de grond ligt.", "Bij een spleetvulkaan komt lava uit een lange scheur in de grond. Hoe heet de vulkaan uit de les?"],
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
        options: ["Daar kan magma omhoog, waar platen botsen of uit elkaar gaan", "Daar is de grond het zachtst en het makkelijkst te doorboren", "Daar staan de hoogste bergen, en elke hoge berg is een vulkaan", "Daar zijn de platen het dikst en houden ze de meeste warmte vast"],
        answer: 0,
        wrongHints: [null, "Zachte grond is het punt niet. Lees nog eens wat er gebeurt waar platen elkaar raken.", "Niet elke hoge berg is een vulkaan: de Alpen bijvoorbeeld niet. Lees nog eens wat er gebeurt waar platen elkaar raken.", "Dikte en warmte zijn het punt niet. Lees nog eens wat er gebeurt waar platen elkaar raken."],
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
        options: ["Gassen in het magma die eruit willen als de druk daalt", "Botsende aardplaten die de berg in elkaar drukken", "Lava die overkookt, zoals melk in een te volle pan", "Heet magma dat de berg van binnenuit laat smelten"],
        answer: 0,
        wrongHints: [null, "Platen bepalen wáár vulkanen liggen, niet waarom ze knallen. Lees het stukje over de boem nog eens.", "Overkoken gaat langzaam en zonder knal. Lees het stukje over de boem nog eens.", "Steen smelt niet met een knal. Wat lees je in de les over het flesje cola?"],
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
        options: ["Een paar centimeter per jaar", "Een paar meter per dag", "Een paar millimeter per eeuw", "Een paar kilometer per jaar"],
        answer: 0,
        wrongHints: [null, "Dat zou je voelen! Denk aan hoe snel je nagels groeien.", "Dat is nog veel langzamer dan je nagels groeien. Kijk naar de vergelijking in de les.", "Veel te snel — dan zouden landen elk jaar verhuizen."],
      },
      {
        q: "Waar in het Koninkrijk der Nederlanden staat een (slapende) vulkaan?",
        options: ["Op Saba: Mount Scenery", "In Limburg: de Vaalserberg", "In Gelderland: de Posbank", "Op Texel: de Hoge Berg"],
        answer: 0,
        wrongHints: [null, "De Vaalserberg is een gewone heuvel, geen vulkaan.", "De Posbank is een heuvel van zand en stenen, opgeduwd door ijs in de ijstijd.", "De Hoge Berg op Texel is een heuvel uit de ijstijd, geen vulkaan."],
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
        options: ["Lava, as en gassen", "Lava, vuur en vlammen", "Lava, zand en water", "As, modder en ijs"],
        answer: 0,
        wrongHints: [null, "Vuur is het niet echt: het gloeit omdat het gesmolten steen is.", "Zand en water komen niet uit de krater. Lees de drie dingen in de les nog eens.", "IJs komt er niet uit, al kan gesmolten sneeuw wel modderstromen geven. Wat komt er uit de krater zelf?"],
      },
      {
        q: "Waarom bleven in 2010 bijna alle vliegtuigen in Europa aan de grond?",
        options: ["As van een IJslandse vulkaan was gevaarlijk voor de motoren", "Giftig zwavelgas van de vulkaan dreef boven heel Europa", "Aardbevingen door de vulkaan beschadigden de vliegvelden", "De piloten konden door de rook de vulkaan zelf niet zien"],
        answer: 0,
        wrongHints: [null, "Zwavelgas stinkt en kan giftig zijn, maar daarom bleven de vliegtuigen niet staan. Wat kan wél dagenlang in de lucht blijven hangen?", "De aardbevingen bleven op IJsland. Wat dreef er over Europa heen?", "Zien was niet het probleem; iets in de lucht was het probleem."],
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
        options: ["Het wordt weer hard steen", "Het wordt weer magma", "Het wordt een hoop fijne as", "Het wordt zacht zand"],
        answer: 0,
        wrongHints: [null, "Magma is gesmolten steen ónder de grond. Is afgekoelde lava nog gesmolten?", "As ontstaat bij de knal, als steen in stukjes de lucht in vliegt. Wat gebeurt er met een lavastroom die stilligt?", "Zand ontstaat pas na heel lang afslijten — eerst is het iets anders."],
      },
      {
        q: "Welke uitbarsting geeft de **grootste knal**?",
        options: ["Dikke, stroperige lava met veel gas", "Dunne, vloeibare lava met weinig gas", "Dikke, stroperige lava met weinig gas", "Dunne, vloeibare lava met veel gas"],
        answer: 0,
        wrongHints: [null, "Dun en weinig gas: zo gaat het op Hawaï. Knalt dat hard?", "Lees in de les nog eens wat er bij een explosieve uitbarsting hoort.", "Kijk in de les naar Hawaï: hoe ziet de lava daar eruit, en knalt het?"],
      },
    ],
  },
  {
    title: "Gevaar én nut",
    explanation:
      "Vulkanen zijn **gevaarlijk**. In het jaar **79** bedolf de **Vesuvius** de Romeinse stad **Pompeï** onder meters as. De stad bleef eeuwenlang verstopt. Toen mensen haar opgroeven, vonden ze huizen, winkels en zelfs brood in de oven: een momentopname van 2000 jaar geleden.\n\nToch wonen **miljoenen mensen** vlak bij een vulkaan. Waarom?\n\n**1. Vruchtbare grond.** Vulkaan-as zit vol mineralen, een soort natuurlijke mest. Rondom de **Etna** op Sicilië groeien sinaasappels, druiven en olijven heel goed. Op Java (Indonesië) wordt soms drie keer per jaar rijst geoogst.\n\n**2. Warmte uit de grond.** Op **IJsland** verwarmen ze bijna alle huizen met heet water uit de aarde. Ze maken er ook stroom mee: **aardwarmte**. Schoon en het raakt nooit op.\n\n**3. Toeristen.** Mensen komen van ver om een vulkaan te zien. Dat levert werk op: gidsen, hotels, restaurants.\n\n**4. Nieuw land.** Hawaï en IJsland bestaan helemaal uit lava. Zonder vulkanen waren die eilanden er niet.\n\n**Hoe houd je het veilig?** Wetenschappers (**vulkanologen**) meten de berg dag en nacht: trilt de grond, zwelt de berg op, komt er meer gas uit? Dan waarschuwen ze op tijd, zodat mensen kunnen vertrekken. Zo werd in 1991 op de Filipijnen bij de Pinatubo een hele stad op tijd ontruimd.",
    checks: [
      {
        q: "Waarom wonen veel mensen **vlak bij** een vulkaan, ondanks het gevaar?",
        options: ["De grond is er heel vruchtbaar voor gewassen", "Ze weten meestal niet dat die berg een vulkaan is", "Rond een vulkaan regent het minder, dus het is er droog", "De as van de vulkaan houdt muggen en ongedierte weg"],
        answer: 0,
        wrongHints: [null, "Mensen weten het meestal heel goed. Wat levert de vulkaan hun op?", "Een vulkaan verandert het weer bijna niet. Lees de redenen in de les nog eens.", "As helpt niet tegen muggen. Wat doet as met de grond?"],
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
          voorbeelden: [{ type: "stap", tekst: "Rondom de Vesuvius wonen heel veel mensen — de grond is er goud waard." }],
          basiskennis: [{ onderwerp: "Mineralen", uitleg: "Stofjes in de grond die planten nodig hebben om te groeien." }],
          niveaus: {
            basis: "De as maakt de grond heel vruchtbaar; daarom wonen er boeren.",
            simpeler: "De grond is er heel goed voor planten, en er is warmte.",
            nogSimpeler: "De grond is er goed.",
          },
        },
      },
      {
        q: "Wat gebeurde er met de stad **Pompeï** in het jaar 79?",
        options: ["Ze werd bedolven onder de as van de Vesuvius", "Ze werd overspoeld door een vloedgolf uit zee", "Ze werd verwoest door een zware aardbeving", "Ze werd verbrand door de lava van de Etna"],
        answer: 0,
        wrongHints: [null, "Water was het niet. Wat vonden mensen later meters dik bovenop de huizen?", "De grond trilde wel, maar iets anders bedekte de stad meters dik.", "De Etna ligt op Sicilië, en Pompeï ligt bij een andere vulkaan. Was het lava of iets anders?"],
      },
      {
        q: "Wat doet een **vulkanoloog**?",
        options: ["De vulkaan meten en op tijd waarschuwen", "De afgekoelde lava opruimen van de wegen", "Toeristen rondleiden en foto's laten maken", "Boeren leren hoe ze de vruchtbare grond gebruiken"],
        answer: 0,
        wrongHints: [null, "Dat doen wegwerkers na een uitbarsting. Een vulkanoloog is een wetenschapper: wat onderzoekt die?", "Dat doet een gids. Een vulkanoloog is een wetenschapper.", "Dat weten de boeren zelf al. Een vulkanoloog is een wetenschapper: wat onderzoekt die?"],
      },
      {
        q: "Waarom is **aardwarmte** een slimme energiebron?",
        options: ["Het is schone energie die nooit opraakt", "Het is een fossiele brandstof, net als gas", "Het werkt het best in landen zonder vulkanen", "Het komt van de zon, net als zonne-energie"],
        answer: 0,
        wrongHints: [null, "Fossiel = olie, gas, kolen. Aardwarmte komt niet uit dode planten.", "Juist op vulkaan-eilanden als IJsland werkt het het best.", "Zonne-energie komt van de zon. Waar komt aardwarmte vandaan?"],
      },
    ],
  },
  {
    title: "Eind-toets: ben jij een vulkaan-kenner?",
    explanation:
      "Je weet nu:\n• **Magma** zit onder de grond, **lava** komt naar buiten.\n• Vulkanen liggen op de **randen van aardplaten** (Ring van Vuur, IJsland).\n• **Gas** in het magma zorgt voor de knal (het cola-flesje).\n• Uit een vulkaan komen **lava, as en gassen**.\n• Vulkanen zijn gevaarlijk, maar geven **vruchtbare grond, aardwarmte en werk**.\n\nLoop na de toets nog eens door het park: bij de vulkaan aan de kust zie je alles wat je net las — de kegel van laagjes, de krater met het lavameer, de rookpluim en om de paar minuten een uitbarsting met lavabommen. Kijk of je de geulen op de helling herkent: dat zijn oude lavastromen.",
    checks: [
      { q: "Gesmolten steen die **buiten** de vulkaan stroomt, heet…", options: ["Lava", "Magma", "As", "Gas"], answer: 0, wrongHints: [null, "Dat is de naam ónder de grond.", "As is fijn stof, geen vloeibaar steen.", "Gas is geen gesmolten steen. Het ontsnapt als damp of rook."] },
      { q: "De ketting van vulkanen rondom de Grote Oceaan heet…", options: ["De Ring van Vuur", "De Vuurlinie", "De Lavaketen", "De Kraterkring"], answer: 0, wrongHints: [null, "Die naam bestaat niet. Lees de alinea over de Grote Oceaan nog eens.", "Klinkt logisch, maar zo heet hij niet.", "Die naam lijkt er wel op, maar bestaat niet. Lees de alinea over de Grote Oceaan nog eens."] },
      { q: "Waarom barst de Vesuvius veel **explosiever** uit dan de vulkanen op Hawaï?", options: ["Veel gas in dik magma", "Een veel grotere magmakamer", "Een bredere krater bovenop", "Hetere lava dan op Hawaï"], answer: 0, wrongHints: [null, "Een grote magmakamer zegt niet hoe hard het knalt. Lees nog eens wat er bij een explosieve uitbarsting hoort.", "De krater is alleen de opening. Lees nog eens wat er bij een explosieve uitbarsting hoort.", "De lava op Hawaï is juist heel heet en dun. Wat is er anders aan het magma van de Vesuvius?"] },
      { q: "Welk **voordeel** hebben vulkanen voor boeren?", options: ["De as maakt de grond vruchtbaar", "De aswolk geeft schaduw op het land", "De gassen zorgen voor meer regen", "De lava maakt de grond extra hard"], answer: 0, wrongHints: [null, "Planten hebben juist zon nodig om te groeien.", "Regen komt van wolken, niet van de vulkaan.", "Harde grond is juist slecht voor planten."] },
      { q: "Wat betekent het als een vulkaan **slapend** is?", options: ["Hij is lang niet uitgebarsten, maar dat kan nog wel", "Hij is uitgedoofd en kan niet meer uitbarsten", "Hij barst nu uit, maar heel rustig en langzaam", "Hij is net uitgebarsten en rust nu een paar dagen"], answer: 0, wrongHints: [null, "Dat heet een 'dode' of uitgedoofde vulkaan.", "Een vulkaan die nu uitbarst, slaapt niet. Hoe lang is het stil bij een slapende vulkaan?", "Een paar dagen is heel kort. Hoe lang moet het stil zijn voordat je zegt dat hij slaapt?"] },
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
