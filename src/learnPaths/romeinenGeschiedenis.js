// Leerpad: Het Romeinse Rijk — klas 1-2 onderbouw VO.
// Onderdeel geschiedenis Europa + Nederland. Referentieniveau 2F.
// 6 stappen met uitlegPad. Sluit chronologisch vóór middeleeuwen.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  goud: "#ffd54f",
  marmer: "#e0e0e0",
  rood: "#c62828",
  wolf: "#a1887f",
  highlight: "#ff7043",
};

const stepEmojis = ["🐺", "🏛️", "👑", "🛡️", "⚔️", "🏆"];

const chapters = [
  { letter: "A", title: "Stichting Rome", emoji: "🐺", from: 0, to: 0 },
  { letter: "B", title: "Romeinse Republiek", emoji: "🏛️", from: 1, to: 1 },
  { letter: "C", title: "Keizerrijk + grootste macht", emoji: "👑", from: 2, to: 2 },
  { letter: "D", title: "Romeinen in Nederland", emoji: "🛡️", from: 3, to: 3 },
  { letter: "E", title: "Ondergang Westromeinse Rijk", emoji: "⚔️", from: 4, to: 4 },
  { letter: "F", title: "Erfenis + Cito-mix", emoji: "🏆", from: 5, to: 5 },
];

function tijdslijnSvg() {
  return `<svg viewBox="0 0 320 160">
<rect x="0" y="0" width="320" height="160" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Romeinse Rijk — tijdlijn</text>
<line x1="20" y1="85" x2="300" y2="85" stroke="${COLORS.goud}" stroke-width="2"/>
<circle cx="30" cy="85" r="6" fill="${COLORS.rood}"/>
<text x="30" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">753 v.C.</text>
<text x="30" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Stichting</text>
<circle cx="100" cy="85" r="6" fill="${COLORS.rood}"/>
<text x="100" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">509 v.C.</text>
<text x="100" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Republiek</text>
<circle cx="170" cy="85" r="6" fill="${COLORS.goud}"/>
<text x="170" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">27 v.C.</text>
<text x="170" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Keizerrijk</text>
<circle cx="240" cy="85" r="6" fill="${COLORS.goud}"/>
<text x="240" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">117 n.C.</text>
<text x="240" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Grootste</text>
<circle cx="290" cy="85" r="6" fill="${COLORS.rood}"/>
<text x="290" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">476 n.C.</text>
<text x="290" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Val West-Rome</text>
<text x="160" y="148" text-anchor="middle" fill="${COLORS.highlight}" font-size="11" font-family="Arial" font-style="italic">~1200 jaar Romeinse geschiedenis</text>
</svg>`;
}

const steps = [
  // STAP 1: Stichting Rome
  {
    title: "Stichting van Rome — wolf, Romulus en Remus",
    explanation:
      "**Rome** is volgens de **legende gesticht in 753 v.Chr.** *(voor Christus)* door **Romulus** en zijn tweelingbroer **Remus**.\n\n**De legende**:\n• Romulus en Remus waren tweelingen, kinderen van **god Mars**.\n• Werden te water gelegd in de rivier de **Tiber**.\n• **Gered door een wolvin** die hen zoogde *(beroemd beeld 'Lupa Capitolina')*.\n• Later opgevoed door een herder.\n• Stichten samen een stad op **7 heuvels** bij de Tiber.\n• Maar Romulus doodt Remus in een ruzie → noemt stad **Rome** naar zichzelf.\n\n**Wat is mythe en wat echt?**\n• **Mythe**: de wolvin, broedermoord, god Mars.\n• **Echt**: **rond 8e eeuw v.Chr.** ontstond een nederzetting op de Palatijn-heuvel.\n• Archeologen vinden bewijs van eerste hutten ~750-700 v.Chr.\n\n**Hoe Rome begon — vroege periode**:\n• Klein dorp op heuvels langs Tiber, Italië.\n• Eerst **gezagen door koningen** *(7 koningen, deels mythisch)*.\n• Bevolking was meng van **Latijnen + Etrusken + Sabijnen**.\n\n**Etrusken**:\n• Volk dat **vóór Romeinen** in Italië woonde.\n• Hadden eigen schrift, kunst, godsdienst.\n• **Beïnvloedden** vroege Romeinen *(architectuur, gladiatoren)*.\n• Werden later **opgenomen** in het Romeinse Rijk.\n\n**Belangrijke termen**:\n• **v.Chr.** = vóór Christus *(tijden tellen achteruit)*. 753 v.Chr. = 2.778 jaar geleden.\n• **n.Chr.** = na Christus *(onze huidige jaartelling)*.\n• **De Tiber** = rivier door Rome, mondt uit in Tyrreense Zee.\n• **De 7 heuvels van Rome**: Palatijn, Aventijn, Capitolijn, Quirinaal, Viminaal, Esquilijn, Caelius. *Hoef je niet allemaal te kennen.*\n\n**Cito-feitje**:\nDe **Lupa Capitolina** (wolf met 2 kinderen) is nog steeds het **symbool van Rome**. Te zien op tienduizenden zaken in Italië.",
    svg: tijdslijnSvg(),
    checks: [
      {
        q: "In welk jaar werd Rome volgens de **legende** gesticht?",
        options: ["753 v.Chr.", "27 v.Chr.", "476 n.Chr.", "1000 n.Chr."],
        answer: 0,
        wrongHints: [null, "Klopt — door Romulus.", "Begin keizerrijk.", "Val West-Rome.", "Te laat — middeleeuwen."],
      },
      {
        q: "Wie waren de **twee tweelingen** in de stichtingslegende?",
        options: ["Romulus en Remus", "Caesar en Augustus", "Cicero en Brutus", "Romeo en Julia"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Latere keizers.", "Andere Romeinen.", "Shakespeare-stuk, niet Rome."],
      },
      {
        q: "Wat **redde** de tweelingen volgens de legende?",
        options: ["Een wolvin (die hen zoogde)", "Een adelaar", "Een vissersboot", "Een herder"],
        answer: 0,
        wrongHints: [null, "Klopt — Lupa Capitolina.", "Geen adelaar.", "Niet direct.", "Herder kwam later — eerst de wolvin."],
      },
      {
        q: "Welk volk woonde **vóór Romeinen** in Italië?",
        options: ["Etrusken", "Grieken", "Germanen", "Galliërs"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wonen in Griekenland.", "Wonen in Duitsland.", "Wonen in Frankrijk."],
      },
    ],
  },

  // STAP 2: Romeinse Republiek
  {
    title: "Romeinse Republiek (509 v.Chr. − 27 v.Chr.)",
    explanation:
      "Na de koningen *(verdreven 509 v.Chr.)* werd Rome een **Republiek** — een staat zonder koning.\n\n**Hoe was de Romeinse Republiek georganiseerd?**\n• **Senaat** = bestuurders, vooral oude adellijke families *(patriciërs)*.\n• **2 consuls** = leiders, gekozen voor 1 jaar. Werkten samen om dictatuur te voorkomen.\n• **Volkstribunen** = vertegenwoordigers van het gewone volk *(plebejers)*.\n• **Volk** stemde via volksvergaderingen.\n\n**Geen koning** — dat was belangrijk:\n• Romeinen waren **bang voor 1 sterke leider**.\n• Macht werd verdeeld over meerdere personen + groepen.\n• Vergelijkbaar met **modern democratisch idee**.\n\n**Patriciërs vs plebejers**:\n• **Patriciërs** = oude adellijke families *(rijk, machtig)*.\n• **Plebejers** = gewone burgers *(boeren, ambachtslieden, arbeiders)*.\n• Eeuwenlange strijd om gelijke rechten.\n• Plebejers kregen geleidelijk meer macht *(volkstribunen, eigen wetten)*.\n\n**Verovering van het Middellandse Zee-gebied**:\nDe Republiek breidde zich snel uit:\n• **Italië** (4e-3e eeuw v.Chr.).\n• **Carthago** *(in huidige Tunesië, Afrika)* — 3 Punische Oorlogen (264-146 v.Chr.). Beroemd: **Hannibal** met olifanten over de Alpen *(218 v.Chr.)*. Rome won uiteindelijk.\n• **Griekenland** (2e eeuw v.Chr.) — Romeinen namen Griekse cultuur over.\n• **Spanje, Frankrijk** *(Gallië door Julius Caesar 58-51 v.Chr.)*.\n• **Egypte** (30 v.Chr. door Augustus, na zelfmoord van **Cleopatra**).\n\n**Julius Caesar** (100-44 v.Chr.):\n• Beroemde generaal, veroverde Gallië *(Frankrijk)*.\n• Werd **dictator voor het leven** in 44 v.Chr.\n• **Op 15 maart 44 v.Chr. vermoord** in de Senaat door samenzweerders *(Ides van Maart)*. Beroemde uitspraak: *'Et tu, Brute?'* — *'Ook jij, Brutus?'* (toegeschreven).\n• Wilde de Republiek vervangen door alleenheerschappij. Senaat vreesde dat.\n\n**Na Caesar**:\nBurgeroorlog. **Augustus** *(neef + adoptiezoon Caesar)* wint uiteindelijk en wordt **eerste keizer** in **27 v.Chr.**. Einde Republiek.\n\n**Cito-feitje**:\n*'Gallië in 3 delen'* — Julius Caesar schreef *'Gallia est omnis divisa in partes tres'* *(Gallië is in 3 delen verdeeld)*. Beroemde eerste zin van zijn boek over de Gallische Oorlogen.",
    checks: [
      {
        q: "Wat was de **Romeinse Republiek**?",
        options: ["Staat zonder koning, met senaat + consuls", "Koninkrijk", "Stadstaat met dictator", "Provincie van Egypte"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet meer — verdreven 509 v.Chr.", "Soms dictator (tijdelijk), maar normaal niet.", "Andere richting — Rome veroverde Egypte."],
      },
      {
        q: "Wie waren de **2 consuls** in de Republiek?",
        options: ["Hoogste leiders, gekozen voor 1 jaar", "Lijfwachten", "Slaven", "Boeren"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geen consuls.", "Geen consuls.", "Geen consuls."],
      },
      {
        q: "Wie veroverde **Gallië** *(huidige Frankrijk)*?",
        options: ["Julius Caesar (58-51 v.Chr.)", "Augustus", "Hannibal", "Cleopatra"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Augustus kwam erna.", "Hannibal was tegenstander uit Carthago.", "Cleopatra was Egyptische koningin."],
      },
      {
        q: "Wat gebeurde met **Julius Caesar** in **44 v.Chr.**?",
        options: ["Vermoord in de Senaat op de Ides van Maart", "Werd koning", "Vluchtte naar Egypte", "Stierf in oorlog"],
        answer: 0,
        wrongHints: [null, "Klopt — 15 maart, door samenzweerders.", "Wilde wel, maar werd vermoord.", "Niet gevlucht.", "Niet in oorlog."],
        uitlegPad: {
          stappen: [
            { titel: "Wat gebeurde", tekst: "Op 15 maart 44 v.Chr. (de 'Ides van Maart') werd Julius Caesar in de Senaat doodgestoken door een groep samenzweerders, waaronder zijn vriend Brutus." },
            { titel: "Waarom", tekst: "Caesar werd dictator voor het leven en wilde de Republiek vervangen door alleenheerschappij. Senatoren vreesden voor de Romeinse vrijheid." },
          ],
          woorden: [{ woord: "Ides van Maart", uitleg: "15 maart in de Romeinse kalender." }, { woord: "samenzweerders", uitleg: "Groep mensen die in het geheim plannen iets te doen, vaak iets gewelddadigs." }],
          theorie: "Beroemde quote (toegeschreven door Shakespeare): 'Et tu, Brute?' — 'Ook jij, Brutus?'",
          voorbeelden: [{ type: "stap", tekst: "Brutus was de stiefzoon van Caesar; zijn deelname maakte de moord extra tragisch." }],
          basiskennis: [{ onderwerp: "Eind Republiek", uitleg: "Na deze moord brak burgeroorlog uit; Augustus werd uiteindelijk eerste keizer (27 v.Chr.)." }],
          niveaus: {
            basis: "Vermoord in de Senaat. A.",
            simpeler: "Op 15 maart 44 v.Chr. werd Caesar in de Senaat doodgestoken door samenzweerders die bang waren dat hij koning wilde worden. = A.",
            nogSimpeler: "Vermoord 44 v.Chr. = A.",
          },
        },
      },
    ],
  },

  // STAP 3: Keizerrijk
  {
    title: "Keizerrijk (27 v.Chr. − 476 n.Chr.) — grootste rijk ooit",
    explanation:
      "Vanaf **27 v.Chr.** werd Rome een **Keizerrijk** onder **Augustus** *(eerste keizer)*.\n\n**Augustus** (regeerde 27 v.Chr. − 14 n.Chr.):\n• Echte naam **Octavianus**, nam later titel '**Augustus**' aan *(= 'verhevene')*.\n• Adoptiezoon van Julius Caesar.\n• Versloeg rivalen in burgeroorlog.\n• Maakte Rome stabiel + welvarend.\n• Begin van **Pax Romana** *(= 'Romeinse vrede')* — ~200 jaar relatieve rust.\n\n**Romeinse keizers — bekendste**:\n• **Augustus** (27 v.Chr.-14 n.Chr.) — eerste.\n• **Tiberius** — onder hem kruisigde Pontius Pilatus Jezus *(rond 33 n.Chr.)*.\n• **Nero** (54-68) — beruchte, gaf christenen schuld van brand van Rome *(64)*.\n• **Trajanus** (98-117) — rijk op grootste omvang.\n• **Marcus Aurelius** (161-180) — filosoof-keizer, 'goede keizer'.\n• **Constantijn de Grote** (306-337) — maakte christendom hoofdgodsdienst *(Edict van Milaan 313)*. Verplaatste hoofdstad naar **Constantinopel** (330).\n\n**Grootste omvang** *(rond 117 n.Chr. onder Trajanus)*:\n• Van **Engeland** (Hadrianusmuur) tot **Marokko**.\n• Van **Spanje** tot **Irak/Mesopotamië**.\n• Ongeveer **5 miljoen km²**.\n• **70 miljoen inwoners** *(in totaal)*.\n• Hoofdstad: **Rome** (~1 miljoen inwoners — grootste stad ter wereld destijds).\n\n**Hoe hielden Romeinen zo'n groot rijk samen?**\n• **Wegen** — netwerk van 80.000 km verharde wegen, *'alle wegen leiden naar Rome'*.\n• **Latijn** — gemeenschappelijke taal.\n• **Romeins recht** — wettelijk systeem.\n• **Leger** — sterk + georganiseerd.\n• **Burgerrechten** — gegeven aan vele veroverde volken.\n• **Aquaducten** — water naar steden brengen.\n• **Cultuur** — Romeinse cultuur werd overgenomen.\n\n**Splitsing in 2** *(395 n.Chr.)*:\nKeizer Theodosius splitst rijk:\n• **Westromeinse Rijk** — hoofdstad Rome.\n• **Oostromeinse Rijk** (later Byzantijnse Rijk) — hoofdstad Constantinopel.\n\nHet **oosten** zou 1000 jaar langer overleven (tot 1453!).\n\n**Cito-feitje**:\n*'Brood en spelen'* *(Latijn: panem et circenses)* — keizers gaven volk **gratis brood + gladiatorengevechten** om opstand te voorkomen. Politieke afleiding.",
    checks: [
      {
        q: "Wie was de **eerste Romeinse keizer**?",
        options: ["Augustus (27 v.Chr.)", "Julius Caesar", "Nero", "Constantijn"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Caesar werd vermoord vóór keizerrijk begon.", "Veel later.", "Veel later."],
      },
      {
        q: "Wat was **Pax Romana**?",
        options: ["Romeinse vrede — ~200 jaar relatieve rust", "Een wet", "Een straf", "Een god"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geen wet.", "Geen straf.", "Geen god."],
      },
      {
        q: "Wat is **'brood en spelen'**?",
        options: ["Gratis eten + gladiatoren om volk rustig te houden", "Een gerecht", "Een spel", "Een feest"],
        answer: 0,
        wrongHints: [null, "Klopt — panem et circenses.", "Letterlijk klopt maar het is politiek concept.", "Niet alleen spel.", "Niet alleen feest."],
      },
      {
        q: "Hoe verplaatste Constantijn de hoofdstad?",
        options: ["Naar Constantinopel (330 n.Chr.)", "Naar Athene", "Naar Carthago", "Bleef Rome"],
        answer: 0,
        wrongHints: [null, "Klopt — modern Istanbul.", "Niet Athene.", "Niet Carthago.", "Wel verplaatst."],
      },
    ],
  },

  // STAP 4: Romeinen in Nederland
  {
    title: "Romeinen in Nederland — de Limes",
    explanation:
      "Het **Romeinse Rijk strekte zich uit tot in Nederland** — voor ~400 jaar!\n\n**De Limes**:\n• **Limes** = grens van het Romeinse Rijk.\n• In Nederland liep de Limes langs de **Rijn** *(toen 'Renus')*.\n• Vanaf **Katwijk** *(Romeinse Lugdunum)* in het westen, via **Utrecht** *(Traiectum)*, **Nijmegen** *(Noviomagus)*, tot **Duitsland**.\n• Aan deze kant Romeinse Rijk; aan andere kant 'vrije' Germaanse volkeren *(Friezen, Bataven, etc.)*.\n\n**Romeinen kwamen** *(rond 50 v.Chr.-15 n.Chr.)*:\n• **Julius Caesar** ontmoette al de Eburonen rond 54 v.Chr. — daarna gepacificeerd.\n• Rond 12 v.Chr. begon serieuze militaire bezetting.\n• Rond 47 n.Chr.: Limes-strategie — niet verder naar het noorden, defensief.\n\n**Wat brachten Romeinen naar Nederland?**\n• **Wegen** *(harde, verharde wegen)*.\n• **Stenen huizen** *(in plaats van houten hutten)*.\n• **Centrale verwarming** *(hypocaust — onder vloeren)*.\n• **Aquaducten** + **baden**.\n• **Wijn + olijfolie** *(door handel)*.\n• **Latijn** *(taal, schrift)*.\n• **Romeins recht** + bestuur.\n\n**Castella (Romeinse forten)**:\n• Vooral langs de Limes-rivier.\n• Bekendste: **Nijmegen** *(legioen-vestiging)*, **Vechten** (bij Utrecht), **Valkenburg**.\n• In sommige plaatsen nog **ruïnes + opgravingen** te zien.\n\n**Bataven en Friezen**:\n• **Bataven** = Germaans volk in Nederland *(Betuwe-streek)*. Bondgenoot van Rome, leverden soldaten.\n• **Friezen** = noordelijker, deels onafhankelijk gebleven.\n• **Bataafse Opstand** (69-70 n.Chr.) onder **Julius Civilis** — tegen Romeinen.\n\n**De ondergang van Romeinen in Nederland**:\n• Vanaf **3e eeuw**: Germaanse volken trekken Limes over.\n• **4e eeuw**: chaos — Saksen + Franken vallen binnen.\n• **Rond 406 n.Chr.**: Romeinen verlaten Nederland.\n\n**Nu nog steeds zichtbaar**:\n• Nijmegen heeft nog Romeinse fundamenten.\n• Het **Limes-tracé** is UNESCO werelderfgoed sinds 2021.\n• Vondsten: munten, helmen, scherven, dakpannen.\n\n**Cito-feitje**:\nDe stad **Maastricht** dankt zijn naam aan Romeinen — 'Mosae Trajectum' = 'doorwaadplaats van de Maas'. Andere Nederlandse Romeinse plaatsen: **Heerlen** (Coriovallum), **Voorburg** (Forum Hadriani), **Bunnik** (Fectio).",
    checks: [
      {
        q: "Wat is de **Limes**?",
        options: ["Grens van het Romeinse Rijk (in NL langs de Rijn)", "Een Romeins fort", "Een wapen", "Een god"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Castellum = fort.", "Geen wapen.", "Geen god."],
      },
      {
        q: "Welk volk leefde in **Nederland in Romeinse tijd**?",
        options: ["Bataven en Friezen", "Vikingen", "Spanjaarden", "Mongolen"],
        answer: 0,
        wrongHints: [null, "Klopt — Germaanse volken.", "Vikingen kwamen veel later.", "Niet in Romeinse tijd.", "Verkeerd continent."],
      },
      {
        q: "Welke Nederlandse stad is **gesticht door Romeinen** rond 19 v.Chr.?",
        options: ["Nijmegen (Noviomagus)", "Amsterdam", "Den Haag", "Eindhoven"],
        answer: 0,
        wrongHints: [null, "Klopt — oudste stad NL.", "Amsterdam pas in 13e eeuw.", "Den Haag is later.", "Eindhoven middeleeuws."],
      },
      {
        q: "Wat zijn **aquaducten**?",
        options: ["Stenen bruggen die water naar steden brengen", "Romeinse schepen", "Soort wapens", "Tempels"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Schepen heten anders.", "Geen wapens.", "Tempels zijn aparte gebouwen."],
      },
    ],
  },

  // STAP 5: Ondergang Westromeinse Rijk
  {
    title: "Ondergang van het Westromeinse Rijk",
    explanation:
      "Het machtige Romeinse Rijk **verzwakte vanaf de 3e eeuw n.Chr.** Verschillende oorzaken kwamen samen.\n\n**Oorzaken ondergang**:\n\n**1. Te groot om te verdedigen**\n• Grens (Limes) was duizenden km lang.\n• Soldaten moesten alles bewaken.\n• Niet genoeg legers voor alles.\n\n**2. Volksverhuizingen (Germaanse stammen)**\nVanaf ~4e eeuw n.Chr. trokken **Germaanse volken** West-Europa binnen:\n• **Goten** *(Visigoten + Ostrogoten)*.\n• **Vandalen**.\n• **Hunnen** *(uit Centraal-Azië)*, onder **Attila de Hun** (~450 n.Chr.).\n• **Franken** *(in huidige Frankrijk + Nederland)*.\n• **Saksen** + **Angelen** *(later Engeland)*.\n\n**3. Economische problemen**\n• Slavernij maakte landbouw afhankelijk van veroveringen.\n• Belastingen werden te hoog voor gewone Romeinen.\n• Handel verzwakte.\n• Munten werden **steeds minder zilver** *(devaluatie)*.\n\n**4. Politieke chaos**\n• Vele keizers vermoord — soms 3-5 per jaar.\n• Legioen-generaals lieten zichzelf tot keizer uitroepen.\n• Burgeroorlogen.\n\n**5. Splitsing (395)**\n• Theodosius splitst rijk in West + Oost.\n• West-Romeinse Rijk was zwakker en stond bloot aan invallen.\n\n**Belangrijke gebeurtenissen**:\n• **410 n.Chr.**: **Plundering van Rome** door Goten onder **Alarik** *(eerste maal sinds 800 jaar!)*.\n• **451 n.Chr.**: Hunnen verslagen door Romeinen + Visigoten bij Châlons.\n• **455 n.Chr.**: Rome weer geplunderd, deze keer door Vandalen.\n• **476 n.Chr.**: Laatste keizer **Romulus Augustulus** afgezet door **Odoaker** *(Germaanse leider)*. Officiële einde van het Westromeinse Rijk.\n\n**Oostromeinse Rijk overleeft**:\n• Constantinopel viel pas in **1453** *(door Ottomanen)*.\n• Heet vanaf 5e eeuw vaak **Byzantijnse Rijk**.\n• Hield Romeinse cultuur + Grieks-orthodox christendom in stand.\n\n**Cito-feitje**:\nIn 476 n.Chr. begint **historisch gezien de Middeleeuwen** in West-Europa. Geen exacte breuk maar wel een handig markpunt.\n\n**Belangrijke termen**:\n• **Volksverhuizingen** = grote bewegingen van Germaanse volken naar West-Europa (4e-7e eeuw).\n• **Odoaker** = Germaanse leider die laatste Romeinse keizer afzette.\n• **Romulus Augustulus** = laatste Westromeinse keizer (jong kind, gemakkelijk verdreven).",
    checks: [
      {
        q: "In welk jaar valt het **Westromeinse Rijk**?",
        options: ["476 n.Chr.", "27 v.Chr.", "1453 n.Chr.", "1000 n.Chr."],
        answer: 0,
        wrongHints: [null, "Klopt.", "Begin keizerrijk.", "Val Constantinopel.", "Te laat."],
      },
      {
        q: "Wie waren de **Germaanse volken** die binnenvielen?",
        options: ["Goten, Vandalen, Hunnen, Franken", "Egyptenaren", "Grieken", "Maya's"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Romeinen veroverden Egypte juist eerder.", "Grieken al deel rijk.", "Andere continent."],
      },
      {
        q: "Wie was de leider van de **Hunnen** (~450 n.Chr.)?",
        options: ["Attila", "Alarik", "Odoaker", "Constantijn"],
        answer: 0,
        wrongHints: [null, "Klopt — 'gesel Gods'.", "Was Got, niet Hun.", "Was Germaan in Italië.", "Was Romeinse keizer."],
      },
      {
        q: "Welk **deel van Rome** bleef nog 1000 jaar bestaan?",
        options: ["Oostromeinse / Byzantijnse Rijk", "West-Rome", "Geen", "Egypte"],
        answer: 0,
        wrongHints: [null, "Klopt — tot 1453.", "Viel in 476.", "Wel — Oost bleef.", "Geen Romeinse deelstaat meer."],
      },
    ],
  },

  // STAP 6: Erfenis + Cito-mix
  {
    title: "Erfenis Romeinen + eindopdracht",
    explanation:
      "De Romeinen verdwenen, maar **hun invloed bleef** — tot vandaag aan toe.\n\n**Wat zien we nog van Romeinen?**\n\n**1. Talen (Romaanse talen)**\nUit Latijn ontstonden:\n• **Italiaans**, **Spaans**, **Frans**, **Portugees**, **Roemeens**.\n• Nederlands heeft **veel Latijnse leenwoorden** *(school, kerk, straat, kelder, wijn, kaas...)*.\n• Wetenschappelijke + medische termen zijn nog vaak Latijn *(homo sapiens, h2o, pneumonia)*.\n\n**2. Recht en wetgeving**\n• Romeins recht is basis van veel moderne wetgevingen.\n• 'Wet' = lex (Latijn).\n• Veel juridische termen: alibi, status, veto, in dubio pro reo.\n\n**3. Bouwwerken**\n• **Colosseum** in Rome (50.000 toeschouwers).\n• **Pantheon** met grote koepel (nog steeds gebruikt!).\n• **Aquaducten** in Spanje (Segovia), Frankrijk (Pont du Gard).\n• **Hadrianusmuur** in Engeland.\n• **Limes** in Nederland (UNESCO).\n\n**4. Concepten + ideeën**\n• **Republiek** als bestuursvorm (woord komt van res publica = 'publieke zaak').\n• **Senaat** (huidige Nederlandse 'Eerste Kamer' is een soort senaat).\n• **Burgerschap** + rechten.\n• **Latijns schrift** = ons alfabet (A, B, C, ...).\n• **Kalender** — Julianus → Gregoriaans (basis van onze huidige).\n\n**5. Religie**\n• Christendom werd in 4e eeuw Romeinse staatsgodsdienst.\n• Daarvandaan verspreidde het zich over Europa.\n• Paus = leider Rooms-Katholieke Kerk, ook nu nog in Rome.\n\n**Romeinse cijfers**:\n• I = 1\n• V = 5\n• X = 10\n• L = 50\n• C = 100\n• D = 500\n• M = 1000\n\nVoorbeeld: **MMXXVI** = 2026.\nNog gebruikt in: kloktegels, hoofdstuk-nummers, kopjes, films-credits *(© MMXX = 2020)*.\n\n**Beroemde uitspraken (Latijn)**:\n• *'Veni, vidi, vici'* — 'Ik kwam, zag, overwon' (Caesar).\n• *'Carpe diem'* — 'Pluk de dag'.\n• *'Alea iacta est'* — 'De teerling is geworpen' (Caesar bij de Rubicon).\n\n**Cito-eindopdracht — mix-toets**:\nVeel succes!",
    checks: [
      {
        q: "Wat is een **Romaanse taal**?",
        options: ["Taal afgeleid van Latijn (Frans, Spaans, Italiaans)", "Romaanse architectuur", "Een Roman", "Romeinse stijl"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Stijl, geen taal.", "Boek-soort, niet taal.", "Stijl, niet taal."],
      },
      {
        q: "Welk **gebouw** is een Romeins arena in Rome?",
        options: ["Colosseum", "Pantheon", "Acropolis", "Eiffeltoren"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tempel, geen arena.", "Acropolis in Athene.", "Veel later."],
      },
      {
        q: "Wat is **MMXXVI** in Romeinse cijfers?",
        options: ["2026", "1926", "2126", "2226"],
        answer: 0,
        wrongHints: [null, "Klopt — MM=2000, XX=20, VI=6.", "MMXXVI = 2026, niet 1926.", "Te veel.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Splits in delen", tekst: "MM = 1000 + 1000 = 2000. XX = 10 + 10 = 20. VI = 5 + 1 = 6." },
            { titel: "Tel op", tekst: "2000 + 20 + 6 = 2026." },
          ],
          woorden: [{ woord: "M", uitleg: "Romeins voor 1000." }, { woord: "X", uitleg: "Romeins voor 10." }, { woord: "V", uitleg: "Romeins voor 5." }],
          theorie: "Romeinse cijfers tellen op als groter symbool eerst staat (MM = 2000). Bij kleiner-voor-groter trek je af (IV = 4).",
          voorbeelden: [{ type: "stap", tekst: "MCMXCIX = 1000 + (1000-100) + (100-10) + (10-1) = 1999." }],
          basiskennis: [{ onderwerp: "M, D, C, L, X, V, I", uitleg: "De 7 Romeinse symbolen om uit het hoofd te kennen." }],
          niveaus: {
            basis: "MM + XX + VI = 2000 + 20 + 6 = 2026. A.",
            simpeler: "MM = 2× 1000 = 2000. XX = 2× 10 = 20. VI = 5+1 = 6. Samen: 2000+20+6 = 2026. = A.",
            nogSimpeler: "2026 = A.",
          },
        },
      },
      {
        q: "Wie zei *'Veni, vidi, vici'*?",
        options: ["Julius Caesar", "Augustus", "Nero", "Cicero"],
        answer: 0,
        wrongHints: [null, "Klopt — 'Ik kwam, zag, overwon'.", "Een ander, jongere Caesar.", "Andere keizer.", "Politicus, niet uitspraak."],
      },
      {
        q: "Welk **NL gebouw of stad** is van Romeinse oorsprong?",
        options: ["Nijmegen", "Den Haag", "Almere", "Lelystad"],
        answer: 0,
        wrongHints: [null, "Klopt — Noviomagus.", "Den Haag van middeleeuwen.", "20e eeuw.", "20e eeuw."],
      },
      {
        q: "Wat is **Latijn** vandaag de dag?",
        options: ["Dode taal, nog gebruikt in wetenschap + kerk", "Spaanse spreektaal", "Een dialect", "Niet meer bekend"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Spaans is afgeleide.", "Geen dialect.", "Wel bekend — wetenschappers gebruiken het."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const romeinenGeschiedenis = {
  id: "romeinen-geschiedenis",
  title: "Het Romeinse Rijk (klas 1-2)",
  emoji: "🏛️",
  level: "klas1-2",
  subject: "geschiedenis",
  referentieNiveau: "2F",
  sloThema: "Geschiedenis Europa — Romeinse tijd",
  prerequisites: [
    { id: "tijdvakken-geschiedenis", title: "Tijdvakken-overzicht", niveau: "2F" },
  ],
  intro:
    "Romeinen voor klas 1-2 — stichting (753 v.Chr. Romulus+Remus), Republiek (Caesar), Keizerrijk (Augustus+Pax Romana), Romeinen in Nederland (Limes, Nijmegen), ondergang 476, erfenis (Latijn, recht, Romeinse cijfers). ~15 min.",
  triggerKeywords: [
    "romeinen", "romeinse rijk", "romulus", "remus",
    "caesar", "augustus", "nero", "constantijn",
    "limes", "Nijmegen", "Bataven", "Friezen",
    "colosseum", "latijn", "romeinse cijfers",
    "pax romana", "republiek", "keizerrijk",
  ],
  chapters,
  steps,
};

export default romeinenGeschiedenis;
