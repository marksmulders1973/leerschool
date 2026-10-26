// Leerpad: Natuur — seizoenen, dieren en planten (groep 4).
// Mark 26 okt 2026 (breedte-plan B5): natuur staat in de vakkenkaart van groep 4 ("seizoenen, dieren
// en planten"), maar er was geen groep-4-pad → de tegel bleef leeg. Dit pad = de eerste 20 vragen,
// in de woorden van een kind van 7-8. Kerndoelen 40-41 (planten en dieren in de omgeving, seizoenen).

const chapters = [
  { letter: "A", title: "De vier seizoenen", emoji: "🍂", from: 0, to: 0 },
  { letter: "B", title: "Dieren om je heen", emoji: "🐄", from: 1, to: 1 },
  { letter: "C", title: "Van zaadje tot plant", emoji: "🌱", from: 2, to: 2 },
  { letter: "D", title: "Het weer", emoji: "🌦️", from: 3, to: 3 },
];

const steps = [
  {
    title: "De vier seizoenen",
    explanation: "Een jaar heeft **vier seizoenen**. Elk seizoen duurt ongeveer drie maanden.\n\n• **Lente** (maart, april, mei): het wordt warmer, bloemen bloeien, lammetjes en kuikens worden geboren.\n• **Zomer** (juni, juli, augustus): warm, lange dagen, zomervakantie.\n• **Herfst** (september, oktober, november): bladeren worden geel en bruin en vallen, er zijn paddenstoelen en kastanjes.\n• **Winter** (december, januari, februari): koud, korte dagen, soms sneeuw en ijs.",
    checks: [
      { q: "In welk seizoen **vallen de bladeren** van de bomen?", options: ["herfst", "lente", "zomer", "winter"], answer: 0, wrongHints: [null, "In de lente komen de blaadjes juist terug.", "In de zomer zitten de bomen vol groene bladeren.", "In de winter zijn de bladeren al gevallen — wanneer vielen ze?"] },
      { q: "Welk seizoen komt **na de winter**?", options: ["lente", "zomer", "herfst", "nog een winter"], answer: 0, wrongHints: [null, "Tussen winter en zomer zit nog een seizoen.", "De herfst komt vóór de winter.", "Elk seizoen komt één keer per jaar."],
        uitlegPad: { stappen: [{ titel: "De volgorde", tekst: "lente → zomer → herfst → winter → en dan weer lente. Na de winter komt dus de **lente**." }], woorden: [{ woord: "seizoen", uitleg: "een deel van het jaar met eigen weer: lente, zomer, herfst, winter" }], theorie: "Vier seizoenen, steeds in dezelfde volgorde. Een jaar heeft 12 maanden, elk seizoen 3.", voorbeelden: [{ type: "stap", tekst: "Kerst is in de winter; daarna wordt het langzaam lente met de eerste bloemen." }], basiskennis: [{ onderwerp: "Ezelsbrug", uitleg: "Het rijtje begint bij de lente, zoals een nieuw leven: lente, zomer, herfst, winter." }], niveaus: { basis: "lente.", simpeler: "Na de winter komt de lente.", nogSimpeler: "lente" } } },
      { q: "Wat hoort bij de **lente**?", options: ["jonge dieren worden geboren", "de bladeren vallen", "het sneeuwt vaak", "de zomervakantie begint"], answer: 0, wrongHints: [null, "Vallende bladeren horen bij de herfst.", "Sneeuw hoort bij de winter.", "De zomervakantie is in de zomer."] },
      { q: "Welke maanden horen bij de **zomer**?", options: ["juni, juli, augustus", "maart, april, mei", "september, oktober, november", "december, januari, februari"], answer: 0, wrongHints: [null, "Maart, april en mei zijn de lente.", "September, oktober en november zijn de herfst.", "December, januari en februari zijn de winter."] },
      { q: "Wanneer zijn de dagen het **kortst** (het is vroeg donker)?", options: ["in de winter", "in de zomer", "in de lente", "elk seizoen even lang"], answer: 0, wrongHints: [null, "In de zomer is het juist lang licht.", "In de lente worden de dagen steeds langer.", "De dagen verschillen echt per seizoen. Denk aan december: hoe laat wordt het donker?"] },
    ],
  },
  {
    title: "Dieren om je heen",
    explanation: "Dieren leven overal: thuis, op de boerderij, in de tuin en in het bos.\n\n**Jonge dieren** hebben vaak een eigen naam:\n• koe → **kalf** · paard → **veulen** · schaap → **lam** · varken → **big** · kip → **kuiken** · hond → **pup** · kat → **kitten**\n\n**Wat eten ze?**\n• Een koe, een konijn en een paard eten **planten** (gras, hooi).\n• Een kat en een uil eten **andere dieren** (muizen).\n• Een egel eet slakken, kevers en wormen.\n\n**Waar wonen ze?**\n• Een vogel bouwt een **nest**. · Een konijn graaft een **hol**. · Een bij woont in een **korf** of bijenkast.",
    checks: [
      { q: "Hoe heet een **jong schaap**?", options: ["lam", "kalf", "veulen", "big"], answer: 0, wrongHints: [null, "Een kalf is een jonge koe.", "Een veulen is een jong paard.", "Een big is een jong varken."] },
      { q: "Wat eet een **koe**?", options: ["gras", "muizen", "vis", "slakken"], answer: 0, wrongHints: [null, "Muizen worden door katten en uilen gegeten.", "Vis eten reigers en otters.", "Slakken eet de egel."] },
      { q: "Welk dier komt uit een **ei**?", options: ["kuiken", "kalf", "pup", "kitten"], answer: 0, wrongHints: [null, "Een kalf wordt door de koe geboren, niet uit een ei.", "Een pup wordt door de hond geboren.", "Een kitten wordt door de kat geboren."],
        uitlegPad: { stappen: [{ titel: "Eieren", tekst: "Vogels leggen eieren. Uit het ei van een kip komt een **kuiken**. Ook kikkers, vissen en slangen komen uit eieren." }], woorden: [{ woord: "kuiken", uitleg: "jonge kip" }], theorie: "Zoogdieren (koe, hond, kat, mens) worden levend geboren en drinken melk; vogels komen uit een ei.", voorbeelden: [{ type: "stap", tekst: "Pasen: kuikens en eieren horen bij elkaar." }], basiskennis: [{ onderwerp: "Zoogdier", uitleg: "Een zoogdier drinkt melk bij zijn moeder — dat doet een kuiken niet." }], niveaus: { basis: "kuiken.", simpeler: "Een kip legt een ei, daar komt een kuiken uit.", nogSimpeler: "kuiken" } } },
      { q: "Waar woont een **vogel** met zijn jongen?", options: ["in een nest", "in een hol onder de grond", "in een bijenkorf", "in het water"], answer: 0, wrongHints: [null, "Een hol graaft een konijn.", "In een korf wonen bijen.", "Vogels kunnen niet onder water wonen — ze ademen lucht."] },
      { q: "Welk dier eet **andere dieren** (bijvoorbeeld muizen)?", options: ["uil", "konijn", "koe", "schaap"], answer: 0, wrongHints: [null, "Een konijn eet gras en groente.", "Een koe eet gras en hooi.", "Een schaap eet gras."] },
    ],
  },
  {
    title: "Van zaadje tot plant",
    explanation: "Een plant begint als een **zaadje**. Als je het in de grond stopt en water geeft, groeit er een plantje uit.\n\n**Wat een plant nodig heeft**: water, licht (zon) en grond.\n\n**De delen van een plant**:\n• **wortel** — zit onder de grond, zuigt water op\n• **stengel** — houdt de plant omhoog\n• **blad** — vangt het zonlicht\n• **bloem** — daar komen later nieuwe zaadjes uit\n\n**Bomen**: een **loofboom** (eik, beuk) verliest in de herfst zijn bladeren; een **naaldboom** (den, spar) houdt zijn naalden, ook in de winter.",
    checks: [
      { q: "Waar begint een plant mee?", options: ["een zaadje", "een bloem", "een blad", "een appel"], answer: 0, wrongHints: [null, "De bloem komt pas als de plant groot is.", "Bladeren groeien later aan de stengel.", "Een appel is een vrucht — kijk eens wat er ín een appel zit."] },
      { q: "Welk deel van de plant zit **onder de grond**?", options: ["de wortel", "de bloem", "het blad", "de stengel"], answer: 0, wrongHints: [null, "De bloem zit bovenaan.", "Bladeren zitten aan de stengel, boven de grond.", "De stengel staat boven de grond en houdt de plant omhoog."] },
      { q: "Wat heeft een plant nodig om te groeien?", options: ["water en licht", "alleen donker", "snoep", "wind"], answer: 0, wrongHints: [null, "In het donker wordt een plant bleek en slap.", "Planten maken hun eigen eten met zonlicht — snoep helpt niet.", "Wind heeft een plant niet nodig; water en zon wel."] },
      { q: "Welke boom verliest in de **herfst** zijn bladeren?", options: ["de eik", "de den", "de spar", "de kerstboom"], answer: 0, wrongHints: [null, "Een den is een naaldboom en houdt zijn naalden.", "Een spar is een naaldboom en houdt zijn naalden.", "De kerstboom is een spar — die blijft groen in de winter."],
        uitlegPad: { stappen: [{ titel: "Loof en naald", tekst: "Een **loofboom** (eik, beuk, berk) laat in de herfst zijn bladeren vallen. Een **naaldboom** (den, spar) heeft naalden en blijft groen." }], woorden: [{ woord: "loofboom", uitleg: "boom met bladeren die in de herfst vallen" }, { woord: "naaldboom", uitleg: "boom met naalden die het hele jaar groen blijft" }], theorie: "Blad = loof. Naald = de dunne groene 'blaadjes' van een den of spar.", voorbeelden: [{ type: "stap", tekst: "In december staat de kerstboom (een spar) nog groen, terwijl de eik in de tuin kaal is." }], basiskennis: [{ onderwerp: "Eikel", uitleg: "Onder een eik vind je in de herfst eikels — de zaadjes van de eik." }], niveaus: { basis: "de eik.", simpeler: "Een eik is een loofboom: bladeren vallen in de herfst.", nogSimpeler: "eik" } } },
      { q: "Waar komen **nieuwe zaadjes** vandaan?", options: ["uit de bloem", "uit de wortel", "uit de stengel", "uit de grond"], answer: 0, wrongHints: [null, "De wortel zuigt water op, daar groeien geen zaadjes.", "De stengel houdt de plant omhoog.", "Zaadjes vallen wel in de grond, maar ze worden ergens anders gemaakt. Kijk naar het mooiste deel van de plant."] },
    ],
  },
  {
    title: "Het weer",
    explanation: "Het **weer** is hoe het buiten is: zon, regen, wind, wolken, sneeuw.\n\n• **Regen** komt uit donkere wolken. Planten hebben regen nodig.\n• **Wind** is lucht die beweegt. Je ziet het aan de bomen en aan een vlieger.\n• **Sneeuw** valt als het kouder is dan 0 graden; dan bevriest water ook tot **ijs**.\n• Een **regenboog** zie je als de zon schijnt terwijl het regent.\n• De **thermometer** meet hoe warm of koud het is (in graden).",
    checks: [
      { q: "Waar komt **regen** uit?", options: ["uit wolken", "uit de zon", "uit de grond", "uit bomen"], answer: 0, wrongHints: [null, "De zon maakt het warm, maar regen komt ergens anders vandaan. Kijk omhoog bij slecht weer.", "Regen valt naar beneden, dus hij komt van boven.", "Bomen worden nat ván de regen."] },
      { q: "Wanneer kun je een **regenboog** zien?", options: ["als de zon schijnt terwijl het regent", "als het 's nachts heel donker is", "als het sneeuwt en alles wit is", "als het heel hard waait zonder regen"], answer: 0, wrongHints: [null, "Voor een regenboog heb je zon nodig — die schijnt 's nachts niet.", "Een regenboog heeft regen én zon nodig, geen sneeuw.", "Wind maakt geen regenboog; je hebt regen én zon nodig."] },
      { q: "Bij welke temperatuur wordt water **ijs**?", options: ["onder 0 graden", "bij 20 graden", "bij 100 graden", "als de zon schijnt"], answer: 0, wrongHints: [null, "Bij 20 graden is het lekker warm — dan smelt ijs.", "Bij 100 graden kookt water juist.", "Door de zon wordt het warmer, dan smelt ijs."],
        uitlegPad: { stappen: [{ titel: "Vriezen", tekst: "Onder **0 graden** bevriest water: plassen worden ijs en regen wordt sneeuw of hagel." }], woorden: [{ woord: "vriezen", uitleg: "het is kouder dan 0 graden" }, { woord: "thermometer", uitleg: "meet de temperatuur" }], theorie: "0 graden = vriespunt. Daaronder ijs en sneeuw, daarboven water.", voorbeelden: [{ type: "stap", tekst: "Als het 's nachts -3 graden is, ligt er 's ochtends ijs op de sloot." }], basiskennis: [{ onderwerp: "Smelten", uitleg: "Wordt het warmer dan 0, dan smelt het ijs weer tot water." }], niveaus: { basis: "onder 0 graden.", simpeler: "Kouder dan 0 graden = vriezen = ijs.", nogSimpeler: "onder 0" } } },
      { q: "Waarmee **meet** je hoe warm het is?", options: ["met een thermometer", "met een liniaal", "met een weegschaal", "met een klok"], answer: 0, wrongHints: [null, "Een liniaal meet hoe lang iets is.", "Een weegschaal meet hoe zwaar iets is.", "Een klok meet de tijd."] },
      { q: "Wat zie je aan de bomen als het **hard waait**?", options: ["de takken bewegen heen en weer", "de bladeren worden geel", "er groeien appels aan", "de bomen worden kleiner"], answer: 0, wrongHints: [null, "Gele bladeren horen bij de herfst, niet bij wind.", "Appels groeien door de zomer heen, niet door wind.", "Wind maakt een boom niet kleiner; kijk wat de wind met de takken doet."] },
    ],
  },
];

const natuurSeizoenenDierenG4 = {
  id: "natuur-seizoenen-dieren-g4",
  title: "Natuur — seizoenen, dieren en planten (groep 4)",
  emoji: "🌱",
  level: "groep4",
  subject: "natuur",
  referentieNiveau: "PO-kerndoel",
  sloKerndoelen: [40, 41, 43],
  sloThema: "Wereldoriëntatie — natuur groep 4: seizoenen, dieren, planten, weer",
  prerequisites: [],
  intro: "Natuur voor groep 4: de vier seizoenen, dieren en hun jongen, hoe een plant groeit en wat het weer doet. Twintig vragen in gewone woorden, met uitleg bij elke stap.",
  triggerKeywords: [
    "natuur groep 4", "seizoenen", "lente zomer herfst winter",
    "jonge dieren", "kalf veulen lam kuiken", "wat eten dieren",
    "zaadje plant", "wortel stengel blad bloem", "loofboom naaldboom",
    "weer", "regen wind sneeuw", "regenboog", "thermometer", "vriezen",
  ],
  chapters,
  steps,
};

export default natuurSeizoenenDierenG4;
