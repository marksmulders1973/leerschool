// Leerpad: Kleur, licht & compositie — Kunst HAVO/VWO
// Kleurenleer, licht & toon, compositie/ordening, beeldaspecten samen.
// 4 stappen × ~4 checks.

const stepEmojis = ["🎨", "💡", "🖼️", "🧩"];

const chapters = [
  { letter: "A", title: "Kleur", emoji: "🎨", from: 0, to: 0 },
  { letter: "B", title: "Licht & toon", emoji: "💡", from: 1, to: 1 },
  { letter: "C", title: "Compositie & ordening", emoji: "🖼️", from: 2, to: 2 },
  { letter: "D", title: "Beeldaspecten samen", emoji: "🧩", from: 3, to: 3 },
];

const steps = [
  // ─── A. Kleur ─────────────────────────────────────────────
  {
    title: "Kleur — de kleurenleer",
    explanation:
      "Kleur is een van de sterkste **beeldaspecten**: het bepaalt sfeer, ruimte en aandacht.\n\n**De kleurencirkel:**\n• **Primaire kleuren** — rood, geel, blauw. Hieruit meng je de rest; zelf niet te mengen.\n• **Secundaire kleuren** — oranje (rood+geel), groen (geel+blauw), paars (rood+blauw).\n• **Tertiaire kleuren** — mengsels daartussen.\n\n**Complementaire kleuren** staan **tegenover** elkaar in de cirkel: rood↔groen, blauw↔oranje, geel↔paars. Naast elkaar versterken ze elkaar (fel **contrast**); gemengd geven ze grijs/bruin. Van Gogh gebruikte ze bewust (blauw en oranjegeel in *De sterrennacht*).\n\n**Warme vs koude kleuren:**\n• **Warm** (rood, oranje, geel) — komen naar voren, energie, nabijheid.\n• **Koud** (blauw, groen, paars) — wijken naar achteren, rust, afstand.\nMet warm/koud kun je dus **diepte** suggereren.\n\n**Kleureigenschappen:**\n• **Tint** (welke kleur) · **verzadiging** (fel of grauw) · **helderheid/waarde** (licht of donker).\n\n**Symboliek** (cultureel bepaald): rood = liefde/gevaar, wit = zuiverheid (westers) of rouw (deel Azië), groen = natuur/hoop. Kleurbetekenis verschilt per cultuur en tijd.",
    checks: [
      {
        q: "Welke zijn de **primaire kleuren**?",
        options: ["Rood, geel, blauw", "Oranje, groen, paars", "Wit, zwart, grijs", "Rood, geel, groen"],
        answer: 0,
        wrongHints: [null, "Deze kleuren ontstaan als je twee andere kleuren mengt. Kun je een primaire kleur mengen?", "Wit, zwart en grijs zijn tonen: ze maken iets lichter of donkerder. Zitten ze in de kleurencirkel?", "Groen kun je mengen uit geel en blauw. Is groen dan een primaire kleur?"],
        uitlegPad: {
          stappen: [{ titel: "Niet te mengen", tekst: "**Primaire kleuren** (rood, geel, blauw) kun je zelf niet uit andere kleuren mengen — maar je maakt er wél alle andere mee. Rood+geel=oranje, geel+blauw=groen, rood+blauw=paars (de **secundaire** kleuren)." }],
          niveaus: { basis: "Rood, geel, blauw.", simpeler: "Primair = rood/geel/blauw", nogSimpeler: "Rood, geel, blauw." },
        },
      },
      {
        q: "Wat zijn **complementaire kleuren**?",
        options: ["Kleuren die tegenover elkaar staan en elkaar versterken", "Kleuren die naast elkaar liggen in de kleurencirkel", "Kleuren die samen een warme sfeer geven", "Licht en donker van één kleur naast elkaar"],
        answer: 0,
        wrongHints: [null, "Buren in de kleurencirkel heten verwante kleuren. Versterken die elkaar of vloeien ze in elkaar over?", "Het gaat om paren, niet om warm of koud.", "Dat is licht-donkercontrast, niet complementair."],
        uitlegPad: {
          stappen: [{ titel: "Tegenover = fel contrast", tekst: "**Complementaire kleuren** staan **tegenover** elkaar in de kleurencirkel (rood↔groen, blauw↔oranje, geel↔paars). Naast elkaar geven ze een fel **contrast** dat opvalt; gemengd worden ze grauw. Kunstenaars gebruiken ze om iets te laten knallen." }],
          niveaus: { basis: "Tegenover elkaar.", simpeler: "Complementair = tegenover", nogSimpeler: "Tegenover elkaar." },
        },
      },
      {
        q: "Welke kleuren lijken naar **voren** te komen (en suggereren nabijheid)?",
        options: ["Warme kleuren (rood, oranje, geel)", "Koude kleuren (blauw, groen)", "Donkere kleuren (zwart, bruin)", "Pastelkleuren (lichtroze, lichtblauw)"],
        answer: 0,
        wrongHints: [null, "Koude kleuren wijken juist naar achteren.", "Donker maakt iets zwaar, maar komt het daardoor dichterbij? Denk aan warm tegenover koud.", "Pastel is een verzadiging, geen warm/koud-effect op zich."],
        uitlegPad: {
          stappen: [{ titel: "Warm komt, koud wijkt", tekst: "**Warme kleuren** (rood/oranje/geel) lijken naar **voren** te komen (nabijheid, energie); **koude kleuren** (blauw/groen/paars) wijken naar **achteren** (afstand, rust). Zo kun je met kleur diepte suggereren in een plat beeld." }],
          niveaus: { basis: "Warme kleuren.", simpeler: "Warm = naar voren", nogSimpeler: "Warm komt naar voren." },
        },
      },
      {
        q: "Waarom kan dezelfde kleur **verschillende betekenissen** hebben?",
        options: ["Kleursymboliek verschilt per cultuur en tijd", "Elk mens ziet kleuren net iets anders", "Kleur verandert door het licht in de ruimte", "De betekenis hangt af van de verfsoort"],
        answer: 0,
        wrongHints: [null, "Ook mensen die precies hetzelfde zien, geven wit soms een andere betekenis. Waar komt dat verschil vandaan?", "Licht verandert hoe een kleur eruitziet. Verandert het ook wat rood betekent?", "Olieverf of acryl: maakt dat rood ineens tot liefde of gevaar?"],
        uitlegPad: {
          stappen: [{ titel: "Cultureel bepaald", tekst: "**Kleursymboliek is cultureel en tijdgebonden**: wit staat westers voor zuiverheid maar in delen van Azië voor rouw; rood kan liefde óf gevaar zijn. Bij het 'lezen' van een kunstwerk hoort dus altijd de context." }],
          niveaus: { basis: "Cultuur + tijd.", simpeler: "Betekenis verschilt per cultuur", nogSimpeler: "Hangt af van cultuur." },
        },
      },
    ],
  },

  // ─── B. Licht & toon ──────────────────────────────────────
  {
    title: "Licht & toon",
    explanation:
      "**Licht** maakt vorm, ruimte en sfeer. Zonder licht-donkerverschil is een beeld plat.\n\n**Toonwaarde (valeur):**\nDe mate van licht of donker, los van de kleur — van wit via grijzen naar zwart. Met **toonverloop** (lichte naar donkere partijen) suggereer je **volume**: een bol lijkt rond door een lichte kant en een schaduwkant.\n\n**Clair-obscur / chiaroscuro:**\nSterk **contrast** tussen licht en donker, vaak met één lichtbron. Geeft **drama** en richt de aandacht. Meesters: **Caravaggio** en **Rembrandt** (het licht valt op het belangrijkste, de rest verdwijnt in schaduw).\n\n**Soorten licht in beeld:**\n• **Eigen schaduw** (op het voorwerp zelf, de afgewende kant) vs **slagschaduw** (die het voorwerp wérpt).\n• Lichtrichting (van voren = vlak; van opzij = veel volume; van onderen = griezelig/onnatuurlijk).\n\n**Lokale kleur vs lichtinvloed:**\n• **Lokale kleur** = de 'echte' kleur van een ding (een appel is rood).\n• Maar door **licht** wordt de belichte kant lichter/geler en de schaduwkant donkerder/koeler. Impressionisten schilderden juist die lichtwerking, niet de lokale kleur.\n\n**Sfeer:** veel contrast = spannend/dramatisch; weinig contrast (zacht, diffuus licht) = rustig/teder.",
    checks: [
      {
        q: "Wat is **toonwaarde** (valeur)?",
        options: ["De mate van licht of donker, los van de kleur", "De verzadiging: hoe fel of dof een kleur is", "De kleurtoon zelf: rood, blauw of geel", "De warmte of koelte van een kleur"],
        answer: 0,
        wrongHints: [null, "Fel of dof heet verzadiging. Wat zie je nog als je een foto zwart-wit maakt?", "Dat heet de kleurtoon. Wat blijft er over als je de kleur weghaalt?", "Warm en koud is een ander kleurcontrast. Wat blijft over in een zwart-witfoto?"],
        uitlegPad: {
          stappen: [{ titel: "Licht-donker, los van kleur", tekst: "**Toonwaarde** is hoe **licht of donker** een partij is — van wit via grijzen naar zwart, los van wélke kleur. Met **toonverloop** (licht naar donker) suggereer je **volume**: een bol lijkt rond door een lichte kant en een schaduwkant." }],
          niveaus: { basis: "Licht/donker.", simpeler: "Toonwaarde = licht-donker", nogSimpeler: "Licht of donker." },
        },
      },
      {
        q: "Wat is **clair-obscur** (chiaroscuro)?",
        options: ["Sterk contrast tussen licht en donker", "Sterk contrast tussen warm en koud", "Zacht vervagen van contouren", "Schilderen in grijs, zwart en wit"],
        answer: 0,
        wrongHints: [null, "Warm en koud is een kleurcontrast. Wat valt het meest op in een schilderij van Caravaggio?", "Zacht vervagen van randen heeft een eigen naam. Wat betekenen de Franse woorden clair en obscur?", "Dat heet grisaille. Bij Caravaggio zie je juist volle kleur. Waar zit dan het effect?"],
        uitlegPad: {
          stappen: [{ titel: "Drama door licht", tekst: "**Clair-obscur / chiaroscuro** is een sterk **licht-donkercontrast**, vaak met één lichtbron, dat **drama** geeft en de aandacht richt op het belangrijkste. Kenmerkend voor de **barok** — denk aan **Caravaggio** en **Rembrandt**." }],
          niveaus: { basis: "Licht-donkercontrast.", simpeler: "Clair-obscur = licht/donker", nogSimpeler: "Licht tegen donker." },
        },
      },
      {
        q: "Wat is het verschil tussen **eigen schaduw** en **slagschaduw**?",
        options: ["Eigen schaduw op het voorwerp, slagschaduw ernaast", "Eigen schaduw is donkerder dan slagschaduw", "Slagschaduw op het voorwerp, eigen schaduw ernaast", "Eigen schaduw door daglicht, slagschaduw door lamplicht"],
        answer: 0,
        wrongHints: [null, "Welke schaduw donkerder is, hangt van het licht af. Waar bevindt elke schaduw zich?", "Een bal in de zon werpt een schaduw op de grond. Welke van de twee is dat?", "Beide soorten ontstaan bij elk licht. Waar zie je elke schaduw?"],
        uitlegPad: {
          stappen: [{ titel: "Op het ding vs geworpen", tekst: "De **eigen schaduw** zit op het voorwerp zelf (de van het licht afgewende kant). De **slagschaduw** is de schaduw die het voorwerp **wérpt** op de ondergrond of muur. Samen maken ze het beeld ruimtelijk en geloofwaardig." }],
          niveaus: { basis: "Op vs geworpen.", simpeler: "Eigen = op voorwerp", nogSimpeler: "Op het ding of geworpen." },
        },
      },
    ],
  },

  // ─── C. Compositie ────────────────────────────────────────
  {
    title: "Compositie & ordening",
    explanation:
      "**Compositie** is hoe alles in het beeld is **gerangschikt** — het stuurt waar je oog heen gaat en hoe een werk 'voelt'.\n\n**Ordeningsprincipes:**\n• **Symmetrie** — beide helften spiegelen → rust, plechtigheid, evenwicht.\n• **Asymmetrie** — onevenwichtig verdeeld → dynamiek, spanning.\n• **De gulden snede / derderegel** — belangrijke elementen niet midden, maar op ongeveer ⅓ → vaak prettiger, levendiger.\n• **Herhaling & ritme** — terugkerende vormen/kleuren geven samenhang en beweging.\n• **Contrast** — groot↔klein, licht↔donker, druk↔leeg trekt de aandacht.\n\n**Het oog sturen:**\n• **Leidende lijnen** — lijnen (een weg, een arm, een blik) leiden je blik naar het belangrijkste.\n• **Blikrichting** — kijkt een figuur ergens heen, dan kijk jij mee.\n• **Kader / uitsnede** — wat valt binnen en buiten beeld? (een close-up vs totaal).\n\n**Voor- / midden- / achtergrond + repoussoir:**\nMet lagen suggereer je **diepte**. Een donker element vooraan (**repoussoir**) duwt de rest naar achteren.\n\n**Kern:** compositie is **bewuste ordening** — een kunstenaar plaatst niets toevallig.",
    checks: [
      {
        q: "Wat doet een **symmetrische** compositie meestal met de sfeer?",
        options: ["Rust en evenwicht", "Chaos en snelheid", "Diepte en ruimte", "Verrassing en speelsheid"],
        answer: 0,
        wrongHints: [null, "Snelheid zie je vaak bij schuine lijnen en een scheve verdeling. Is een spiegelbeeld scheef?", "Een spiegelbeeld gaat over links en rechts. Zegt dat iets over wat vóór en wat achter staat?", "Verrassing komt vaak van iets dat uit balans is. Wat gebeurt er als links en rechts gelijk zijn?"],
        uitlegPad: {
          stappen: [{ titel: "Spiegelen = rust", tekst: "Bij **symmetrie** spiegelen de helften → het voelt **rustig, plechtig, in evenwicht** (denk aan een kerk-interieur). **Asymmetrie** is juist dynamischer en spannender." }],
          niveaus: { basis: "Rust/evenwicht.", simpeler: "Symmetrie = rust", nogSimpeler: "Spiegelen = rust." },
        },
      },
      {
        q: "Wat is de **derderegel / gulden snede** in compositie?",
        options: ["Belangrijke dingen op ongeveer ⅓ van het beeld zetten", "Het belangrijkste precies in het midden zetten", "Het beeld opbouwen uit drie hoofdkleuren", "Voorgrond, middengrond en achtergrond tonen"],
        answer: 0,
        wrongHints: [null, "Oogt alles pal in het midden levendig, of juist een beetje saai?", "Drie kleuren gaan over kleurgebruik. Waar op het doek zet je volgens deze regel iets belangrijks?", "Dat gaat over diepte. Zegt de derderegel iets over diepte of over plaatsing?"],
        uitlegPad: {
          stappen: [{ titel: "Niet saai in het midden", tekst: "De **derderegel/gulden snede**: plaats belangrijke elementen op ongeveer **een derde** van het beeld (op de snijpunten van denkbeeldige derde-lijnen). Dat oogt vaak levendiger en prettiger dan alles pal in het midden." }],
          niveaus: { basis: "Op ⅓.", simpeler: "Belangrijkste ding op ⅓", nogSimpeler: "Niet in het midden." },
        },
      },
      {
        q: "Hoe stuurt een kunstenaar **waar je oog naartoe gaat**?",
        options: ["Met leidende lijnen en blikrichting", "Door alles even scherp te schilderen", "Door een titel onder het werk te zetten", "Door het werk in een donkere zaal te hangen"],
        answer: 0,
        wrongHints: [null, "Als alles even scherp is, waar kijk je dan eerst?", "Een titel lees je pas na het kijken. Wat in het beeld zelf trekt je oog mee?", "Dat gaat over de plek in het museum. Wat binnen het beeld leidt je oog?"],
        uitlegPad: {
          stappen: [{ titel: "Lijnen en blikken leiden je", tekst: "Met **leidende lijnen** (een weg, een arm, de rand van een tafel) en de **blikrichting** van figuren stuurt de kunstenaar je oog naar het belangrijkste. Compositie is **bewuste ordening** — niets staat er toevallig." }],
          niveaus: { basis: "Leidende lijnen + blik.", simpeler: "Lijnen sturen je oog", nogSimpeler: "Lijnen wijzen de weg." },
        },
      },
    ],
  },

  // ─── D. Beeldaspecten samen ───────────────────────────────
  {
    title: "Beeldaspecten samen toepassen",
    explanation:
      "Een kunstwerk 'werkt' doordat de **beeldaspecten samenwerken**. De belangrijkste op een rij:\n• **Kleur** (tint, contrast, warm/koud)\n• **Licht/toon** (volume, sfeer, drama)\n• **Vorm** (organisch/rond vs geometrisch/hoekig)\n• **Ruimte** (diepte: perspectief, overlapping, voor-/achtergrond, warm/koud)\n• **Lijn** (rustig horizontaal, actief diagonaal)\n• **Textuur** (glad/ruw, ook 'gesuggereerde' textuur in verf)\n• **Compositie** (ordening van dit alles)\n\n**Ruimte/diepte suggereren** (terugkerend examenonderwerp), o.a.:\n• **Lineair perspectief** (lijnen naar een verdwijnpunt).\n• **Overlapping** (wat vóór staat, lijkt dichterbij).\n• **Afnemende grootte** (verder weg = kleiner).\n• **Kleur-/luchtperspectief** (verre dingen vager, blauwer, lichter).\n\n**Vorm en lijn geven gevoel:**\n• Ronde, vloeiende vormen + horizontale lijnen → rust, vriendelijkheid.\n• Hoekige vormen + diagonale lijnen → spanning, beweging, onrust.\n\n**Hoe lees je een werk?** Benoem eerst de beeldaspecten (wat zie ik: kleur, licht, compositie…), en koppel dat aan het **effect** (welke sfeer/betekenis roept het op). Een kunstenaar kiest beeldaspecten **doelbewust** om iets over te brengen.",
    checks: [
      {
        q: "Welke techniek suggereert **diepte** in een plat schilderij?",
        options: ["Overlapping", "Symmetrie", "Herhaling", "Egale kleurvlakken"],
        answer: 0,
        wrongHints: [null, "Symmetrie gaat over links en rechts. Zie je daardoor wat vóór en wat achter staat?", "Herhaling geeft ritme. Hoe laat je zien dat het ene ding achter het andere staat?", "Een egaal vlak zonder schaduw oogt juist plat. Hoe laat je zien wat vóór en wat achter staat?"],
        uitlegPad: {
          stappen: [{ titel: "Manieren om diepte te maken", tekst: "**Overlapping** (een voorwerp dat een ander deels bedekt, lijkt dichterbij) suggereert diepte. Andere manieren: **lineair perspectief** (lijnen naar een verdwijnpunt), **afnemende grootte**, en **lucht-/kleurperspectief** (ver weg = vager/blauwer/lichter)." }],
          niveaus: { basis: "Overlapping.", simpeler: "Diepte = overlapping", nogSimpeler: "Ervoor = dichterbij." },
        },
      },
      {
        q: "Welke vormen/lijnen geven vaak een gevoel van **spanning en beweging**?",
        options: ["Hoekige vormen en diagonale lijnen", "Ronde vormen en horizontale lijnen", "Ronde vormen en verticale lijnen", "Rechthoekige vlakken en horizontale lijnen"],
        answer: 0,
        wrongHints: [null, "Denk aan een kalme zee met zachte golven en een rechte horizon. Voelt dat gespannen?", "Verticale lijnen staan stevig, zoals een boom of een toren. Voelt dat als beweging?", "Horizontaal ligt stil, zoals een horizon. Geeft dat spanning?"],
        uitlegPad: {
          stappen: [{ titel: "Diagonaal = dynamiek", tekst: "**Hoekige vormen** en **diagonale lijnen** geven **spanning en beweging**. **Ronde, vloeiende** vormen en **horizontale** lijnen geven juist **rust** en vriendelijkheid. Zo stuurt de kunstenaar het gevoel van de kijker." }],
          niveaus: { basis: "Hoekig + diagonaal.", simpeler: "Diagonaal = beweging", nogSimpeler: "Schuin = beweging." },
        },
      },
      {
        q: "Hoe analyseer je een kunstwerk met beeldaspecten?",
        options: ["Benoem wat je ziet en koppel het aan het effect", "Vertellen wat je ervan vindt en waarom", "Uitzoeken wie het maakte en wanneer", "Alle beeldaspecten één voor één opsommen"],
        answer: 0,
        wrongHints: [null, "Dat is je mening of oordeel. Komt een analyse vóór of na het oordeel?", "Dat is achtergrondinformatie. Wat doen de beeldaspecten zelf, zoals lijn, kleur en vorm?", "Opsommen is een begin. Is een lijstje al een analyse?"],
        uitlegPad: {
          stappen: [{ titel: "Wat zie ik → welk effect", tekst: "Analyseren = eerst **benoemen wat je ziet** (kleur, licht/toon, vorm, compositie…) en dat koppelen aan het **effect/de betekenis** (welke sfeer roept het op, waar gaat je oog heen, en waarom). De kunstenaar kiest beeldaspecten **doelbewust** om iets over te brengen." }],
          niveaus: { basis: "Zien → effect benoemen.", simpeler: "Analyse = wat + effect", nogSimpeler: "Zien en uitleggen." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kleurLichtCompositieKunst = {
  id: "kleur-licht-compositie-kunst",
  title: "Kleur, licht & compositie (Kunst)",
  emoji: "🎨",
  level: "havo4-5-vwo",
  subject: "kunst",
  referentieNiveau: "havo-vwo-kunst-beeldaspecten",
  sloThema: "Kunst HAVO/VWO — de beeldende grammatica: kleur, licht/toon, compositie en beeldaspecten analyseren",
  prerequisites: [],
  intro:
    "De 'grammatica' van het beeld — onmisbaar om kunst te maken én te analyseren. Je leert kleurenleer (primair/secundair, complementair, warm/koud, symboliek), licht & toon (clair-obscur, schaduw, lokale kleur), compositie (symmetrie, gulden snede, leidende lijnen) en hoe alle beeldaspecten samen diepte en sfeer maken. ~15 min.",
  triggerKeywords: [
    "kleur", "kleurenleer", "kleurencirkel", "primaire kleuren", "secundaire kleuren",
    "complementaire kleuren", "warm koud", "kleursymboliek", "verzadiging", "tint",
    "licht", "toonwaarde", "valeur", "clair-obscur", "chiaroscuro",
    "eigen schaduw", "slagschaduw", "lokale kleur",
    "compositie", "symmetrie", "asymmetrie", "gulden snede", "derderegel",
    "leidende lijnen", "blikrichting", "kader", "uitsnede", "repoussoir",
    "beeldaspecten", "ruimte diepte", "perspectief", "overlapping",
    "vorm", "lijn", "textuur", "kunst analyseren",
  ],
  chapters,
  steps,
};

export default kleurLichtCompositieKunst;
