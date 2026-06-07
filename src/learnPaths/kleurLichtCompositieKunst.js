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
      "Kleur is een van de sterkste **beeldaspecten**: het bepaalt sfeer, ruimte en aandacht.\n\n**De kleurencirkel:**\n• **Primaire kleuren** — rood, geel, blauw. Hieruit meng je de rest; zelf niet te mengen.\n• **Secundaire kleuren** — oranje (rood+geel), groen (geel+blauw), paars (rood+blauw).\n• **Tertiaire kleuren** — mengsels daartussen.\n\n**Complementaire kleuren** staan **tegenover** elkaar in de cirkel: rood↔groen, blauw↔oranje, geel↔paars. Naast elkaar versterken ze elkaar (fel **contrast**); gemengd geven ze grijs/bruin. Van Gogh gebruikte ze bewust (geel en blauw in *Sterrennacht*).\n\n**Warme vs koude kleuren:**\n• **Warm** (rood, oranje, geel) — komen naar voren, energie, nabijheid.\n• **Koud** (blauw, groen, paars) — wijken naar achteren, rust, afstand.\nMet warm/koud kun je dus **diepte** suggereren.\n\n**Kleureigenschappen:**\n• **Tint** (welke kleur) · **verzadiging** (fel of grauw) · **helderheid/waarde** (licht of donker).\n\n**Symboliek** (cultureel bepaald): rood = liefde/gevaar, wit = zuiverheid (westers) of rouw (deel Azië), groen = natuur/hoop. Kleurbetekenis verschilt per cultuur en tijd.",
    checks: [
      {
        q: "Welke zijn de **primaire kleuren**?",
        options: ["Rood, geel, blauw", "Oranje, groen, paars", "Wit, zwart, grijs", "Roze, bruin, beige"],
        answer: 0,
        wrongHints: [null, "Dat zijn juist de secundaire kleuren.", "Dat zijn geen kleuren maar tonen (grijswaarden).", "Dat zijn mengkleuren."],
        uitlegPad: {
          stappen: [{ titel: "Niet te mengen", tekst: "**Primaire kleuren** (rood, geel, blauw) kun je zelf niet uit andere kleuren mengen — maar je maakt er wél alle andere mee. Rood+geel=oranje, geel+blauw=groen, rood+blauw=paars (de **secundaire** kleuren)." }],
          niveaus: { basis: "Rood, geel, blauw. A.", simpeler: "Primair = rood/geel/blauw", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat zijn **complementaire kleuren**?",
        options: ["Kleuren die tegenover elkaar staan en elkaar versterken", "Kleuren die naast elkaar liggen", "Alleen warme kleuren", "Zwart en wit"],
        answer: 0,
        wrongHints: [null, "Juist tegenover elkaar, niet naast elkaar.", "Het gaat om paren, niet alleen warme tinten.", "Dat is licht-donkercontrast, niet complementair."],
        uitlegPad: {
          stappen: [{ titel: "Tegenover = fel contrast", tekst: "**Complementaire kleuren** staan **tegenover** elkaar in de kleurencirkel (rood↔groen, blauw↔oranje, geel↔paars). Naast elkaar geven ze een fel **contrast** dat opvalt; gemengd worden ze grauw. Kunstenaars gebruiken ze om iets te laten knallen." }],
          niveaus: { basis: "Tegenover elkaar. A.", simpeler: "Complementair = tegenover", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke kleuren lijken naar **voren** te komen (en suggereren nabijheid)?",
        options: ["Warme kleuren (rood, oranje, geel)", "Koude kleuren (blauw, groen)", "Alleen zwart", "Alleen pastelkleuren"],
        answer: 0,
        wrongHints: [null, "Koude kleuren wijken juist naar achteren.", "Zwart heeft hier niet die rol.", "Pastel is een verzadiging, geen warm/koud-effect op zich."],
        uitlegPad: {
          stappen: [{ titel: "Warm komt, koud wijkt", tekst: "**Warme kleuren** (rood/oranje/geel) lijken naar **voren** te komen (nabijheid, energie); **koude kleuren** (blauw/groen/paars) wijken naar **achteren** (afstand, rust). Zo kun je met kleur diepte suggereren in een plat beeld." }],
          niveaus: { basis: "Warme kleuren. A.", simpeler: "Warm = naar voren", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarom kan dezelfde kleur **verschillende betekenissen** hebben?",
        options: ["Kleursymboliek verschilt per cultuur en tijd", "Kleuren betekenen overal precies hetzelfde", "Alleen kunstenaars zien kleur", "Betekenis hangt af van de prijs"],
        answer: 0,
        wrongHints: [null, "Juist niet overal hetzelfde.", "Iedereen ziet kleur (op kleurenblindheid na).", "Prijs heeft er niets mee te maken."],
        uitlegPad: {
          stappen: [{ titel: "Cultureel bepaald", tekst: "**Kleursymboliek is cultureel en tijdgebonden**: wit staat westers voor zuiverheid maar in delen van Azië voor rouw; rood kan liefde óf gevaar zijn. Bij het 'lezen' van een kunstwerk hoort dus altijd de context." }],
          niveaus: { basis: "Cultuur + tijd. A.", simpeler: "Betekenis verschilt per cultuur", nogSimpeler: "A." },
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
        options: ["De mate van licht of donker, los van de kleur", "De prijs van een schilderij", "Hoe duur de verf is", "De grootte van het doek"],
        answer: 0,
        wrongHints: [null, "Het gaat om licht/donker, niet om geld.", "Niet de verfprijs.", "Niet het formaat."],
        uitlegPad: {
          stappen: [{ titel: "Licht-donker, los van kleur", tekst: "**Toonwaarde** is hoe **licht of donker** een partij is — van wit via grijzen naar zwart, los van wélke kleur. Met **toonverloop** (licht naar donker) suggereer je **volume**: een bol lijkt rond door een lichte kant en een schaduwkant." }],
          niveaus: { basis: "Licht/donker. A.", simpeler: "Toonwaarde = licht-donker", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **clair-obscur** (chiaroscuro)?",
        options: ["Sterk contrast tussen licht en donker", "Veel felle kleuren", "Buiten schilderen", "Een soort lijst"],
        answer: 0,
        wrongHints: [null, "Het gaat om licht-donker, niet primair om kleur.", "Buiten schilderen hoort bij impressionisme.", "Geen lijst — een licht-effect."],
        uitlegPad: {
          stappen: [{ titel: "Drama door licht", tekst: "**Clair-obscur / chiaroscuro** is een sterk **licht-donkercontrast**, vaak met één lichtbron, dat **drama** geeft en de aandacht richt op het belangrijkste. Kenmerkend voor de **barok** — denk aan **Caravaggio** en **Rembrandt**." }],
          niveaus: { basis: "Licht-donkercontrast. A.", simpeler: "Clair-obscur = licht/donker", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is het verschil tussen **eigen schaduw** en **slagschaduw**?",
        options: ["Eigen schaduw zit op het voorwerp; slagschaduw werpt het voorwerp", "Ze zijn hetzelfde", "Slagschaduw zit op het voorwerp", "Eigen schaduw is altijd zwart"],
        answer: 0,
        wrongHints: [null, "Er is wel degelijk verschil.", "Andersom: de slagschaduw valt náást/achter het voorwerp.", "Kleur is hier niet het onderscheid."],
        uitlegPad: {
          stappen: [{ titel: "Op het ding vs geworpen", tekst: "De **eigen schaduw** zit op het voorwerp zelf (de van het licht afgewende kant). De **slagschaduw** is de schaduw die het voorwerp **wérpt** op de ondergrond of muur. Samen maken ze het beeld ruimtelijk en geloofwaardig." }],
          niveaus: { basis: "Op vs geworpen. A.", simpeler: "Eigen = op voorwerp", nogSimpeler: "A." },
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
        options: ["Rust en evenwicht", "Chaos en snelheid", "Het maakt het beeld donker", "Het verandert de kleuren"],
        answer: 0,
        wrongHints: [null, "Dat past juist bij asymmetrie/dynamiek.", "Symmetrie zegt niets over licht.", "Het gaat om ordening, niet om kleur."],
        uitlegPad: {
          stappen: [{ titel: "Spiegelen = rust", tekst: "Bij **symmetrie** spiegelen de helften → het voelt **rustig, plechtig, in evenwicht** (denk aan een kerk-interieur). **Asymmetrie** is juist dynamischer en spannender." }],
          niveaus: { basis: "Rust/evenwicht. A.", simpeler: "Symmetrie = rust", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is de **derderegel / gulden snede** in compositie?",
        options: ["Belangrijke elementen op ongeveer ⅓ plaatsen, niet in het midden", "Alles precies in het midden", "Het beeld in drie kleuren maken", "Drie figuren afbeelden"],
        answer: 0,
        wrongHints: [null, "Juist níét in het midden — dat is het hele idee.", "Het gaat over plaatsing, niet over kleuren.", "Niet over het aantal figuren."],
        uitlegPad: {
          stappen: [{ titel: "Niet saai in het midden", tekst: "De **derderegel/gulden snede**: plaats belangrijke elementen op ongeveer **een derde** van het beeld (op de snijpunten van denkbeeldige derde-lijnen). Dat oogt vaak levendiger en prettiger dan alles pal in het midden." }],
          niveaus: { basis: "Op ⅓. A.", simpeler: "Belangrijke ding op ⅓", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoe stuurt een kunstenaar **waar je oog naartoe gaat**?",
        options: ["Met leidende lijnen en blikrichting", "Door het doek groter te maken", "Door duurdere verf te gebruiken", "Dat kan een kunstenaar niet sturen"],
        answer: 0,
        wrongHints: [null, "Formaat stuurt de blik binnen het beeld niet.", "Verfprijs doet er niet toe.", "Juist wél — compositie stuurt de blik bewust."],
        uitlegPad: {
          stappen: [{ titel: "Lijnen en blikken leiden je", tekst: "Met **leidende lijnen** (een weg, een arm, de rand van een tafel) en de **blikrichting** van figuren stuurt de kunstenaar je oog naar het belangrijkste. Compositie is **bewuste ordening** — niets staat er toevallig." }],
          niveaus: { basis: "Leidende lijnen + blik. A.", simpeler: "Lijnen sturen je oog", nogSimpeler: "A." },
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
        options: ["Overlapping (wat ervoor staat lijkt dichterbij)", "Alles even groot maken", "Alleen één kleur gebruiken", "Het doek kantelen"],
        answer: 0,
        wrongHints: [null, "Even groot maakt het juist vlakker.", "Eén kleur helpt diepte niet.", "Het ophangen verandert de diepte-illusie niet."],
        uitlegPad: {
          stappen: [{ titel: "Manieren om diepte te maken", tekst: "**Overlapping** (een voorwerp dat een ander deels bedekt, lijkt dichterbij) suggereert diepte. Andere manieren: **lineair perspectief** (lijnen naar een verdwijnpunt), **afnemende grootte**, en **lucht-/kleurperspectief** (ver weg = vager/blauwer/lichter)." }],
          niveaus: { basis: "Overlapping. A.", simpeler: "Diepte = overlapping", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke vormen/lijnen geven vaak een gevoel van **spanning en beweging**?",
        options: ["Hoekige vormen en diagonale lijnen", "Ronde vormen en horizontale lijnen", "Alleen de kleur wit", "Een vierkante lijst"],
        answer: 0,
        wrongHints: [null, "Rond + horizontaal geeft juist rust.", "Kleur is hier niet het punt.", "De lijst doet niet mee."],
        uitlegPad: {
          stappen: [{ titel: "Diagonaal = dynamiek", tekst: "**Hoekige vormen** en **diagonale lijnen** geven **spanning en beweging**. **Ronde, vloeiende** vormen en **horizontale** lijnen geven juist **rust** en vriendelijkheid. Zo stuurt de kunstenaar het gevoel van de kijker." }],
          niveaus: { basis: "Hoekig + diagonaal. A.", simpeler: "Diagonaal = beweging", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoe analyseer je een kunstwerk met beeldaspecten?",
        options: ["Benoem wat je ziet (kleur/licht/compositie) en koppel het aan het effect", "Alleen zeggen of je het mooi vindt", "Raden wat het kostte", "Tellen hoeveel kleuren er zijn"],
        answer: 0,
        wrongHints: [null, "'Mooi/niet mooi' is een mening, geen analyse.", "De prijs hoort niet bij beeldanalyse.", "Tellen alleen zegt niets over de werking."],
        uitlegPad: {
          stappen: [{ titel: "Wat zie ik → welk effect", tekst: "Analyseren = eerst **benoemen wat je ziet** (kleur, licht/toon, vorm, compositie…) en dat koppelen aan het **effect/de betekenis** (welke sfeer roept het op, waar gaat je oog heen, en waarom). De kunstenaar kiest beeldaspecten **doelbewust** om iets over te brengen." }],
          niveaus: { basis: "Zien → effect benoemen. A.", simpeler: "Analyse = wat + effect", nogSimpeler: "A." },
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
