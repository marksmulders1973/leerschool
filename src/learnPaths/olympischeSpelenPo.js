// Leerpad: Olympische Spelen + sport - groep 6-8.
// Toets-cultuur/sport. 1F. 4 stappen.

const stepEmojis = ["🏛️", "🥇", "🇳🇱", "🏆"];

const chapters = [
  { letter: "A", title: "Geschiedenis OS", emoji: "🏛️", from: 0, to: 0 },
  { letter: "B", title: "Sporten + medailles", emoji: "🥇", from: 1, to: 1 },
  { letter: "C", title: "NL op OS", emoji: "🇳🇱", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Geschiedenis van de Olympische Spelen",
    explanation:
      "**Olympische Spelen (OS)** = grootste sportevenement ter wereld.\n\n**Oude OS** *(Griekenland, 776 v.Chr. - 393 n.Chr.)*:\n• Begon in **Olympia** *(Griekenland)*.\n• 1x per **4 jaar** *(Olympiade = 4-jaars-periode)*.\n• Alleen mannen mochten meedoen + kijken.\n• Sporten: hardlopen, worstelen, boksen, paardenrennen, discus, speerwerpen.\n• Tijdens spelen **vrede** in Griekenland *(oorlog stopte)*.\n• Winnaars kregen **olijftakkrans** als prijs.\n• Stopte in **393** door Romeinse keizer Theodosius *(christelijk verbod op heidense feesten)*.\n\n**Moderne OS** *(sinds 1896)*:\n• Heropgericht door **Pierre de Coubertin** *(Frans baron)*.\n• Eerste moderne OS in **Athene 1896**.\n• Sindsdien elke 4 jaar *(behalve WO1 + WO2)*.\n• **Zomerspelen** + **Winterspelen** *(sinds 1924)*.\n• Sinds 1994: zomer + winter wisselend om de 2 jaar.\n\n**Olympische ringen** 🟦🟡⬛🟢🔴:\n• 5 ringen = 5 continenten *(Afrika, Amerika, Azië, Oceanië, Europa)*.\n• Ineengevlochten = vriendschap.\n• Kleuren: blauw, geel, zwart, groen, rood + witte achtergrond → bijna elke nationale vlag bevat 1+ van deze kleuren.\n\n**Olympisch motto**:\n*'Citius, Altius, Fortius'* — Latijn voor 'sneller, hoger, sterker'.\nSinds 2021 toegevoegd: 'Communiter' *('samen')*.\n\n**Olympische vlam**:\n• Aangestoken in **Olympia** *(Griekenland)* met zonnespiegel.\n• Per **fakkelloop** gedragen naar gaststad.\n• Brandt tijdens spelen.\n• Symbool van **continuïteit** met oude OS.\n\n**Olympische Eed**:\nNamens alle atleten belooft een sporter eerlijke sport zonder doping.\n\n**IOC (Internationaal Olympisch Comité)**:\n• Organiseert OS.\n• Voorzitter (sinds 2025): **Kirsty Coventry** (Zimbabwe, eerste vrouw).\n\n**Gastlanden** *(2024-2032)*:\n• 2024 zomer: **Parijs** *(3e keer, na 1900 + 1924)*.\n• 2026 winter: **Milaan/Cortina** *(Italië)*.\n• 2028 zomer: **Los Angeles** *(3e keer)*.\n• 2032 zomer: **Brisbane** *(Australië)*.\n\n**Toets-feitje**:\n**Marathon** = 42,195 km lang. Genoemd naar de **slag bij Marathon** *(490 v.Chr.)* — boodschapper liep van Marathon naar Athene om overwinning te melden, viel daarna dood neer. Eerste moderne OS *(1896)* had marathon ter ere van dit verhaal.",
    checks: [
      {
        q: "In welke stad begonnen de **moderne Olympische Spelen** in 1896?",
        options: ["Athene", "Olympia", "Parijs", "Rome"],
        answer: 0,
        wrongHints: [null, "In Olympia begonnen de óúde Spelen, meer dan 2500 jaar geleden. De vraag gaat over de moderne.", "Parijs kreeg de Spelen pas in 1900, als tweede stad.", "Rome kreeg de Spelen pas in 1960."],
      },
      {
        q: "Hoeveel **ringen** staan er in de olympische vlag?",
        options: ["5", "4", "6", "7"],
        answer: 0,
        wrongHints: [null, "Elke ring staat voor een werelddeel dat meedoet. Tel de werelddelen in de uitleg — kom je op vier?", "Antarctica doet niet mee. Tel alleen de werelddelen die wél meedoen.", "Zeven is het aantal continenten op de kaart, maar niet elk continent doet mee. Welke valt af?"],
      },
      {
        q: "Hoe lang is een **olympische marathon**?",
        options: ["42,195 km", "10 km", "100 km", "5 km"],
        answer: 0,
        wrongHints: [null, "10 km loopt een goede loper in een half uur. Een marathon duurt zelfs voor toplopers ruim twee uur.", "100 km is bijna van Amsterdam naar Zwolle. Zo ver is een marathon niet.", "5 km is een korte hardloopwedstrijd. De boodschapper liep van Marathon helemaal naar Athene."],
      },
      {
        q: "Wat is het **olympische motto**?",
        options: ["Citius, Altius, Fortius", "Veni, vidi, vici", "Carpe diem", "Mens sana in corpore sano"],
        answer: 0,
        wrongHints: [null, "Dat zei Julius Caesar: 'ik kwam, ik zag, ik overwon'. Gaat dat over de Spelen?", "'Carpe diem' betekent 'pluk de dag'. Gaat dat over sport?", "'Een gezonde geest in een gezond lichaam' — mooi, maar het is niet het motto van de Spelen. Kijk in de uitleg."],
      },
    ],
  },
  {
    title: "Olympische sporten + medailles",
    explanation:
      "**Hoeveel sporten op OS?**\n\n**Zomerspelen 2024 Parijs**:\n• **32 sporten** + 329 medaille-events.\n• ~10.500 atleten.\n• Top-6 van de medaillespiegel: VS, China, Japan, Australië, Frankrijk, NL.\n\n**Winterspelen 2022 Beijing**:\n• 7 sporten *(15 onderdelen)* + 109 medaille-events.\n• ~3000 atleten.\n\n**Sport-categorieën zomer**:\n\n**Atletiek** 🏃 *('koningin'-sport):\n• Hardlopen: 100m, 200m, 400m, 800m, 1500m, 5000m, 10.000m, marathon.\n• Hekloop: 110m horden, 400m horden.\n• Springen: hoogspringen, verspringen, hink-stap, polsstokhoog.\n• Werpen: kogel, discus, speer, hamer.\n\n**Watersport** 🏊:\n• Zwemmen *(borst, rug, vlinder, vrije slag)*.\n• Synchroonzwemmen.\n• Schoonspringen *(duiken)*.\n• Waterpolo.\n• Open water-zwemmen.\n\n**Balsport** ⚽:\n• Voetbal (mannen + vrouwen).\n• Basketbal.\n• Volleybal.\n• Handbal.\n• Hockey *(NL is top!)*.\n• Rugby (7's).\n• Tafeltennis.\n• Tennis.\n• Badminton.\n\n**Vechtsport** 🥊:\n• Boksen.\n• Judo.\n• Worstelen *(klassiek + vrij)*.\n• Taekwondo.\n• Karate *(alleen in 2020)*.\n• Schermen.\n\n**Wielersport** 🚴:\n• Wegwielrennen.\n• Baanwielrennen.\n• Mountainbike.\n• BMX.\n\n**Andere** *(zomer)*:\n• Roeien, kanovaren, zeilen.\n• Boogschieten, schieten.\n• Paardensport *(dressuur, springen, eventing)*.\n• Triatlon, moderne vijfkamp.\n• Turnen *(artistiek, ritmisch, trampoline)*.\n• Gewichtheffen.\n• Golf.\n• Skateboarden *(sinds 2020)*.\n• Surfen *(sinds 2020)*.\n• Klimmen *(sinds 2020)*.\n• Breaking *(breakdance, nieuw in 2024)*.\n\n**Wintersport**:\n• Schaatsen *(NL is top!)*.\n• Skiën *(alpine, langlauf, freestyle, schansspringen)*.\n• Snowboarden.\n• Bobslee, slee, skeleton.\n• IJshockey, curling.\n• Biatlon *(skiën + schieten)*.\n\n**Medailles** 🥇🥈🥉:\n• **Goud** voor 1e plaats *(eigenlijk verguld zilver)*.\n• **Zilver** voor 2e plaats *(puur zilver)*.\n• **Brons** voor 3e plaats *(95% koper + tin)*.\n• **Diploma's** 4-8e plaats.\n\n**Doping** *(verboden!)* 🚫:\n• Stoffen om beter te presteren *(steroïden, EPO, etc.)*.\n• **WADA** *(World Anti-Doping Agency)* test atleten.\n• Tests voor + tijdens spelen.\n• Bij betrapping: medaille terug + schorsing.\n\n**Paralympische Spelen** ♿:\n• Voor atleten met handicap.\n• Gehouden direct na OS in zelfde stad.\n• Sinds 1960 *(Rome)*.\n• ~22 sporten.\n• Inspirerend voor inclusie + diversiteit.\n\n**Toets-feitje**:\nDe **meeste medailles ooit** door één atleet: **Michael Phelps** *(VS, zwemmen)* met **28 medailles**, waarvan **23 goud** *(2004-2016)*. Daarna **Larisa Latynina** *(USSR, turnen, 18 medailles, 1956-1964)*.",
    checks: [
      {
        q: "Hoeveel verschillende **sporten** waren er op de Zomerspelen van Parijs 2024?",
        options: ["~32", "~5", "~100", "~10"],
        answer: 0,
        wrongHints: [null, "Vijf? Alleen al atletiek, zwemmen, judo, hockey en wielrennen zijn er vijf — en de lijst gaat nog veel verder.", "Honderd verschillende sporten in twee weken? Zoveel olympische sporten bestaan er niet. Kijk naar het getal in de uitleg.", "Tien? Tel de sporten in de lijst eens na — kom je verder dan tien?"],
      },
      {
        q: "Welke medaille krijg je bij de **1e plaats**?",
        options: ["Goud", "Zilver", "Brons", "Diploma"],
        answer: 0,
        wrongHints: [null, "Zilver hoort bij de middelste trede van het podium. Welke medaille hoort bij de hoogste?", "Brons hoort bij de laagste trede van het podium.", "Een diploma krijg je als je nét naast het podium valt (plaats 4 tot 8)."],
      },
      {
        q: "Wat is **doping**?",
        options: ["Verboden middelen die je sneller of sterker maken", "Een nieuwe sport op de Olympische Spelen", "Een gouden medaille voor de winnaar", "Een soort snelle schoen voor sprinters"],
        answer: 0,
        wrongHints: [null, "Doping is geen sport.", "Een medaille win je. Doping is iets anders.", "Doping draag je niet aan je voeten."],
      },
      {
        q: "Welke sporter won de **meeste olympische medailles ooit**?",
        options: ["Michael Phelps", "Tom Daley", "Larisa Latynina", "Sven Kramer"],
        answer: 0,
        wrongHints: [null, "Tom Daley is een Britse schoonspringer met een handvol medailles, geen recordhouder.", "Larisa Latynina stond lang bovenaan met 18 medailles, maar is later ingehaald.", "Sven Kramer is een Nederlandse topschaatser, maar wereldwijd zijn er sporters met véél meer medailles."],
      },
    ],
  },
  {
    title: "Nederland op de Olympische Spelen",
    explanation:
      "**NL deed mee** aan bijna alle OS sinds 1900.\n\n**NL's beste sporten**:\n\n**1. Schaatsen** *(winter)* ⛸️:\n• **Sven Kramer**: 4 goud, 2 zilver, 3 brons (5000m, 10.000m, ploegenachtervolging).\n• **Ireen Wüst**: 6 goud, 5 zilver, 2 brons — **MEEST GEDECOREERDE NL-atleet ooit**.\n• **Yvonne van Gennip**: 3 goud 1988 *(Calgary)*.\n• **Marianne Timmer, Esmee Visser, Suzanne Schulting** — andere kampioenen.\n• In 2014 *(Sotsji)*: NL won **23 van de 36 schaatsmedailles**.\n\n**2. Hockey** 🏑:\n• Vrouwen-team **'Oranje Hockey'** = vaak goud.\n• Mannen-team ook sterk.\n• Bekende speelsters: **Naomi van As, Maartje Paumen**.\n\n**3. Zwemmen** 🏊:\n• **Inge de Bruijn**: 4 goud, 2 zilver, 2 brons.\n• **Pieter van den Hoogenband**: 3 goud, 2 zilver, 2 brons.\n• **Ranomi Kromowidjojo**: 3 goud.\n\n**4. Wielrennen** 🚴:\n• **Leontien van Moorsel**: 4 goud, 1 zilver.\n• **Anna van der Breggen**.\n• **Mathieu van der Poel** *(veelvoudig wereldkampioen veldrijden)*.\n\n**5. Atletiek** 🏃:\n• **Femke Bol** (huidige): 400m horden, 4x400m estafette — wereldtop.\n• **Sifan Hassan**: marathon-goud 2024 Parijs.\n• **Dafne Schippers**: 200m wereldkampioen.\n• **Nelli Cooman, Ellen van Langen**: vroegere kampioenen.\n\n**6. Roeien** 🚣:\n• Vele goud-medailles.\n• 'Holland Acht' team.\n\n**7. Beachvolleybal** 🏐:\n• **Alexander Brouwer + Robert Meeuwsen**: brons 2016.\n\n**8. Turnen** 🤸:\n• **Epke Zonderland**: rekstok-goud 2012.\n• **Sanne Wevers**: balk-goud 2016.\n\n**9. BMX** 🚴:\n• **Niek Kimmann**: goud 2020.\n• **Laura Smulders**: brons.\n\n**Bij Parijs 2024**:\nNL behaalde **34 medailles** (15 goud, 7 zilver, 12 brons) — recordstand.\nNL **6e** op medaillespiegel.\n\n**Sven Kramer + Ireen Wüst** zijn iconen:\n• Beide **vlaggedragers** in opening of sluiting van OS.\n• Beide **\"Sportman/-vrouw van het Jaar\"** in NL.\n\n**Andere bekende NL-sporters** *(buiten OS)*:\n• **Max Verstappen** *(Formule 1, 4x wereldkampioen 2021-2024)*.\n• **Virgil van Dijk, Frenkie de Jong** *(voetbal)*.\n• **Tom Dumoulin** *(wielrennen, Giro d'Italia 2017)*.\n• **Bas Dost** *(voetbal)*.\n• **Vivianne Miedema** *(voetbal, topscorer aller tijden van de Oranjevrouwen)*.\n\n**Toets-feitje**:\nNederland **Oranje** — kleuren komen van **Oranje-Nassau** *(koninklijke familie)*. Vandaar oranje shirts + 'Hup Holland Hup'. Bij OS draagt NL altijd oranje.",
    checks: [
      {
        q: "Wie heeft van alle Nederlandse sporters de **meeste olympische medailles** gewonnen?",
        options: ["Ireen Wüst", "Sven Kramer", "Inge de Bruijn", "Femke Bol"],
        answer: 0,
        wrongHints: [null, "Sven Kramer won 9 medailles — knap, maar niet het Nederlandse record.", "Inge de Bruijn won 8 zwemmedailles — veel, maar het Nederlandse record ligt hoger.", "Femke Bol is nog jong en heeft nog maar een paar olympische medailles."],
      },
      {
        q: "In welke **wintersport** hoort Nederland bij de wereldtop?",
        options: ["Schaatsen", "IJshockey", "Skeleton", "Curling"],
        answer: 0,
        wrongHints: [null, "Heeft Nederland een ijshockeyteam dat vaak olympisch goud wint?", "Skeleton — op een slee met je hoofd vooruit. Hoeveel Nederlandse kampioenen ken je daarin?", "Curling komt vooral uit Schotland en Canada. Welke wintersport is in Nederland volkssport?"],
      },
      {
        q: "In welke onderdelen is **Femke Bol** sterk?",
        options: ["400m horden / 4x400m", "Zwemmen / schoolslag", "Schaatsen / 1500 meter", "Tennis / dubbelspel"],
        answer: 0,
        wrongHints: [null, "Femke Bol traint niet in het zwembad.", "Femke Bol staat niet op het ijs.", "Femke Bol slaat geen ballen."],
      },
      {
        q: "Waarom draagt het Nederlandse team **oranje**?",
        options: ["De koninklijke familie Oranje-Nassau", "De kleur van rijpe sinaasappels", "De kleuren van de Nederlandse vlag", "Een afspraak met het olympisch comité"],
        answer: 0,
        wrongHints: [null, "Sinaasappels zijn oranje, maar is dat de reden dat ons team oranje draagt?", "Kijk naar de Nederlandse vlag: rood, wit, blauw. Zit daar oranje in?", "Het olympisch comité verdeelt geen kleuren over landen. Waar komt 'Oranje' in Nederland vandaan?"],
      },
    ],
  },
  {
    title: "Eind-toets — Olympische Spelen mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Waar en wanneer waren de **eerste moderne Olympische Spelen**?", options: ["Athene 1896", "Olympia 776 v.Chr.", "Parijs 1900", "Rome 1960"], answer: 0, wrongHints: [null, "776 v.Chr. is de start van de óúde Spelen. De vraag gaat over de moderne.", "Parijs kreeg de tweede moderne Spelen. Waar waren de eerste?", "Rome 1960 was veel later."] },
      { q: "Hoeveel **ringen** staan er in de olympische vlag?", options: ["5", "4", "6", "7"], answer: 0, wrongHints: [null, "Elke ring staat voor een werelddeel dat meedoet. Tel de werelddelen in de uitleg — kom je op vier?", "Bij de ringen tellen Noord- en Zuid-Amerika samen als één werelddeel. Tel de werelddelen in de uitleg nog eens.", "Zeven is het aantal continenten op sommige kaarten, maar bij de ringen tellen ze de werelddelen anders. Kijk in de uitleg welke werelddelen erbij horen."] },
      { q: "Hoe lang is een **marathon** ongeveer?", options: ["42 km", "10 km", "100 km", "5 km"], answer: 0, wrongHints: [null, "Een toploper loopt 10 km in ongeveer een half uur. Over een marathon doet zelfs een toploper ruim twee uur.", "100 km is bijna van Amsterdam naar Zwolle. Zo ver is een marathon niet.", "5 km is een korte hardloopwedstrijd. De boodschapper liep van Marathon helemaal naar Athene."] },
      { q: "Welke Nederlander won de **meeste olympische medailles**?", options: ["Ireen Wüst", "Sven Kramer", "Inge de Bruijn", "Femke Bol"], answer: 0, wrongHints: [null, "Sven Kramer won 9 medailles — knap, maar niet het Nederlandse record.", "Inge de Bruijn won 8 medailles met zwemmen — knap, maar niet het Nederlandse record.", "Femke Bol is nog jong en heeft nog maar een paar olympische medailles."] },
      { q: "Voor welke plaats krijg je de **gouden** medaille?", options: ["1e plaats", "2e plaats", "3e plaats", "4e plaats"], answer: 0, wrongHints: [null, "Voor de tweede plaats is er een andere kleur. Goud is de kostbaarste kleur — voor welke plek is die?", "De derde plaats staat op de laagste trede van het podium. Krijg je daar de kostbaarste medaille?", "Op de vierde plek sta je net naast het podium en krijg je geen medaille."] },
      { q: "Wat is de **WADA**?", options: ["De wereldorganisatie tegen doping", "De bond van alle sportclubs", "Het Nederlandse olympische team", "Het stadion van de openingsshow"], answer: 0, wrongHints: [null, "Een sportbond organiseert wedstrijden. Welke organisatie uit de uitleg test de sporters?", "Het Nederlandse team is maar één land. WADA werkt wereldwijd — waarvoor?", "Een stadion is een gebouw. WADA is een organisatie — wat controleert die?"] },
      { q: "Welke kleuren hebben de **olympische ringen**?", options: ["Blauw, geel, zwart, groen, rood", "Vijf keer dezelfde kleur blauw", "Goud, zilver, brons, wit, zwart", "Alle kleuren van de regenboog"], answer: 0, wrongHints: [null, "Elke ring heeft een eigen kleur.", "Dat zijn de kleuren van de medailles.", "De regenboog heeft zeven kleuren. Hoeveel ringen zijn er?"] },
      { q: "In welk jaar waren de Olympische Spelen in **Amsterdam**?", options: ["1928", "1900", "2000", "2020"], answer: 0, wrongHints: [null, "In 1900 waren de Spelen in Parijs, de tweede moderne Spelen. Amsterdam kwam later.", "In 2000 was Sydney gastheer. Amsterdam was veel eerder.", "De Spelen van 2020 (gehouden in 2021) waren in Tokio."] },
      { q: "Welke Nederlandse sporter won heel vaak op de **schaats**?", options: ["Ireen Wüst", "Femke Bol", "Max Verstappen", "Sifan Hassan"], answer: 0, wrongHints: [null, "Femke Bol — zie je haar op het ijs of op de atletiekbaan?", "Max Verstappen zit in een raceauto. Is dat olympisch schaatsen?", "Sifan Hassan loopt hard. Op welke ondergrond: ijs of asfalt?"] },
      { q: "Voor wie zijn de **Paralympische Spelen**?", options: ["Sporters met een handicap", "Sporters jonger dan 18", "Sporters die al eerder meededen", "Sporters uit Nederland"], answer: 0, wrongHints: [null, "De Paralympics zijn voor volwassen topsporters, niet alleen voor jongeren.", "Het zijn eigen Spelen met eigen sporters, direct na de Olympische Spelen. Voor wie?", "Sporters uit alle landen doen mee — niet alleen Nederland."] },
      { q: "Welke kleur heeft de medaille voor de **2e plaats**?", options: ["Zilver", "Goud", "Brons", "Platina"], answer: 0, wrongHints: [null, "Goud is voor de winnaar, op de hoogste trede. De vraag gaat over de plek eronder.", "Brons is voor de laagste trede van het podium.", "Platina-medailles bestaan niet op de Spelen. Welke drie kleuren zijn er wel?"] },
      { q: "Hoeveel jaar zit er tussen twee **Zomerspelen**?", options: ["4 jaar", "1 jaar", "2 jaar", "10 jaar"], answer: 0, wrongHints: [null, "Elk jaar Spelen? Dan waren er na Parijs 2024 ook Spelen in 2025. Klopt dat?", "Om de 2 jaar zijn er wél Spelen, maar afwisselend zomer en winter. Hoeveel jaar zit er tussen twee Zómerspelen?", "Tien jaar is te lang. Kijk naar de jaartallen in de uitleg: Parijs, Los Angeles, Brisbane."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const olympischeSpelenPo = {
  id: "olympische-spelen-po",
  title: "Olympische Spelen + sport (groep 6-8, Doorstroomtoets-stof)",
  emoji: "🥇",
  level: "groep6-8",
  subject: "geschiedenis",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — cultuur / sport",
  prerequisites: [],
  intro:
    "Olympische Spelen voor groep 6-8, Doorstroomtoets-stof — geschiedenis (Olympia → Athene 1896 → Parijs 2024) + 5 ringen + motto + sport-categorieën (atletiek/water/bal/wintersport) + medailles + Paralympics + NL-helden (Ireen Wüst/Sven Kramer/Femke Bol). ~15 min.",
  triggerKeywords: [
    "Olympische Spelen", "OS", "olympisch",
    "Athene 1896", "Parijs 2024",
    "olympische ringen", "marathon",
    "schaatsen", "Ireen Wust", "Sven Kramer",
    "Femke Bol", "Sifan Hassan",
    "doping", "WADA",
    "Paralympische",
  ],
  chapters,
  steps,
};

export default olympischeSpelenPo;
