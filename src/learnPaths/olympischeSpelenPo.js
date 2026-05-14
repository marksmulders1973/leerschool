// Leerpad: Olympische Spelen + sport - groep 6-8.
// Cito-cultuur/sport. 1F. 4 stappen.

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
      "**Olympische Spelen (OS)** = grootste sportevenement ter wereld.\n\n**Oude OS** *(Griekenland, 776 v.Chr. - 393 n.Chr.)*:\n• Begon in **Olympia** *(Griekenland)*.\n• 1x per **4 jaar** *(Olympiade = 4-jaars-periode)*.\n• Alleen mannen mochten meedoen + kijken.\n• Sporten: hardlopen, worstelen, boksen, paardenrennen, discus, speerwerpen.\n• Tijdens spelen **vrede** in Griekenland *(oorlog stopte)*.\n• Winnaars kregen **olijftakkrans** als prijs.\n• Stopte in **393** door Romeinse keizer Theodosius *(christelijk verbod heidense feest)*.\n\n**Moderne OS** *(sinds 1896)*:\n• Heropgericht door **Pierre de Coubertin** *(Frans baron)*.\n• Eerste moderne OS in **Athene 1896**.\n• Sindsdien elke 4 jaar *(behalve WO1 + WO2)*.\n• **Zomerspelen** + **Winterspelen** *(sinds 1924)*.\n• Sinds 1994: zomer + winter wisselend om de 2 jaar.\n\n**Olympische ringen** 🟦🟡⬛🟢🔴:\n• 5 ringen = 5 continenten *(Afrika, Amerika, Azië, Oceanië, Europa)*.\n• Ineengevlochten = vriendschap.\n• Kleuren: blauw, geel, zwart, groen, rood + witte achtergrond → bijna elke nationale vlag bevat 1+ van deze kleuren.\n\n**Olympisch motto**:\n*'Citius, Altius, Fortius'* — Latijn voor 'sneller, hoger, sterker'.\nSinds 2021 toegevoegd: 'Communis' *('samen')*.\n\n**Olympische vlam**:\n• Aangestoken in **Olympia** *(Griekenland)* met zonnespiegel.\n• Per **fakkelloop** gedragen naar gaststad.\n• Brandt tijdens spelen.\n• Symbool van **continuïteit** met oude OS.\n\n**Olympische Eed**:\nAlle atleten beloven eerlijk sport zonder doping.\n\n**IOC (Internationaal Olympisch Comité)**:\n• Organiseert OS.\n• Voorzitter (2024): **Kirsty Coventry** (Zimbabwe, eerste vrouw).\n\n**Gastlanden** *(2024-2032)*:\n• 2024 zomer: **Parijs** *(3e keer, na 1900 + 1924)*.\n• 2026 winter: **Milaan/Cortina** *(Italië)*.\n• 2028 zomer: **Los Angeles** *(3e keer)*.\n• 2032 zomer: **Brisbane** *(Australië)*.\n\n**Cito-feitje**:\n**Marathon** = 42,195 km lang. Genoemd naar de **slag bij Marathon** *(490 v.Chr.)* — boodschapper liep van Marathon naar Athene om overwinning te melden, viel daarna dood neer. Eerste moderne OS *(1896)* had marathon ter ere van dit verhaal.",
    checks: [
      {
        q: "Waar begonnen **moderne OS**?",
        options: ["Athene 1896", "Olympia oudtijds", "Parijs", "Rome"],
        answer: 0,
        wrongHints: [null, "Oude OS.", "Later.", "Later."],
      },
      {
        q: "Hoeveel **olympische ringen**?",
        options: ["5 (continenten)", "4", "6", "7"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Te veel."],
      },
      {
        q: "**Olympische marathon** lengte?",
        options: ["42,195 km", "10 km", "100 km", "5 km"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Veel te lang.", "Veel te kort."],
      },
      {
        q: "Wat is **olympisch motto**?",
        options: ["Citius/Altius/Fortius (sneller/hoger/sterker)", "Veni Vidi Vici", "Niets", "Olympic Glory"],
        answer: 0,
        wrongHints: [null, "Romeins.", "Wel.", "Niet officieel."],
      },
    ],
  },
  {
    title: "Olympische sporten + medailles",
    explanation:
      "**Hoeveel sporten op OS?**\n\n**Zomerspelen 2024 Parijs**:\n• **32 sporten** + 329 medaille-events.\n• ~10.500 atleten.\n• Top-5 grootste deelnemers: VS, Australië, GB, China, NL.\n\n**Winterspelen 2022 Beijing**:\n• 15 sporten + ~109 medaille-events.\n• ~3000 atleten.\n\n**Sport-categorieën zomer**:\n\n**Atletiek** 🏃 *('koningin'-sport):\n• Hardlopen: 100m, 200m, 400m, 800m, 1500m, 5000m, 10.000m, marathon.\n• Hekloop: 110m horden, 400m horden.\n• Springen: hoogspringen, verspringen, hink-stap, polsstokhoog.\n• Werpen: kogel, discus, speer, hamer.\n\n**Watersport** 🏊:\n• Zwemmen *(borst, rug, vlinder, vrije slag)*.\n• Synchroonzwemmen.\n• Schoonspringen *(duiken)*.\n• Waterpolo.\n• Open water-zwemmen.\n\n**Balsport** ⚽:\n• Voetbal (mannen + vrouwen).\n• Basketbal.\n• Volleybal.\n• Handbal.\n• Hockey *(NL is top!)*.\n• Rugby (7's).\n• Tafeltennis.\n• Tennis.\n• Badminton.\n\n**Vechtsport** 🥊:\n• Boksen.\n• Judo.\n• Worstelen *(klassiek + vrij)*.\n• Taekwondo.\n• Karate *(niet meer sinds 2020)*.\n• Schermen.\n\n**Wielersport** 🚴:\n• Wegwielrennen.\n• Baanwielrennen.\n• Mountainbike.\n• BMX.\n\n**Andere** *(zomer)*:\n• Roeien, kanovaren, zeilen.\n• Boogschieten, schieten.\n• Paardensport *(dressuur, springen, eventing)*.\n• Triatlon, moderne vijfkamp.\n• Turnen *(artistiek, ritmisch, trampoline)*.\n• Gewichtheffen.\n• Golf.\n• Skateboarden *(sinds 2020)*.\n• Surfen *(sinds 2020)*.\n• Klimmen *(sinds 2020)*.\n• Breaking *(breakdance, eerst sinds 2024)*.\n\n**Wintersport**:\n• Schaatsen *(NL is top!)*.\n• Skiën *(alpine, langlauf, freestyle, schansspringen)*.\n• Snowboarden.\n• Bobslee, slee, skeleton.\n• IJshockey, curling.\n• Biatlon *(skiën + schieten)*.\n\n**Medailles** 🥇🥈🥉:\n• **Goud** voor 1e plaats *(eigenlijk verguld zilver)*.\n• **Zilver** voor 2e plaats *(pure zilver)*.\n• **Brons** voor 3e plaats *(95% koper + tin)*.\n• **Diploma's** 4-8e plaats.\n\n**Doping** *(verboden!)* 🚫:\n• Stoffen om beter te presteren *(steroïden, EPO, etc.)*.\n• **WADA** *(World Anti-Doping Agency)* test atleten.\n• Tests voor + tijdens spelen.\n• Bij betrapping: medaille terug + schorsing.\n\n**Paralympische Spelen** ♿:\n• Voor atleten met handicap.\n• Gehouden direct na OS in zelfde stad.\n• Sinds 1960 *(Rome)*.\n• ~22 sporten.\n• Inspirerend voor inclusie + diversiteit.\n\n**Cito-feitje**:\nDe **meeste medailles ooit** door één atleet: **Michael Phelps** *(VS, zwemmen)* met **28 medailles**, waarvan **23 goud** *(2004-2016)*. Daarna **Larisa Latynina** *(USSR, turnen, 18 medailles, 1956-1964)*.",
    checks: [
      {
        q: "Hoeveel **sporten** op zomer-OS 2024?",
        options: ["~32 sporten", "5", "100", "10"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Te weinig."],
      },
      {
        q: "Welke medaille bij **1e plaats**?",
        options: ["Goud", "Zilver", "Brons", "Diploma"],
        answer: 0,
        wrongHints: [null, "2e.", "3e.", "4e-8e."],
      },
      {
        q: "Wat is **doping**?",
        options: ["Verboden stoffen voor betere prestatie", "Sport", "Medaille", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet.", "Wel."],
      },
      {
        q: "**Meeste medailles ooit** door?",
        options: ["Michael Phelps (28 medailles)", "Tom Daley", "Latynina", "Sven Kramer"],
        answer: 0,
        wrongHints: [null, "Niet.", "Tweede.", "NL-schaatser, niet meeste."],
      },
    ],
  },
  {
    title: "Nederland op de Olympische Spelen",
    explanation:
      "**NL deed mee** aan meeste OS sinds 1900.\n\n**NL's beste sporten**:\n\n**1. Schaatsen** *(winter)* ⛸️:\n• **Sven Kramer**: 4 goud, 6 zilver (5000m, 10.000m).\n• **Ireen Wüst**: 5 goud, 5 zilver, 3 brons — **MEEST GEDECOREERDE NL-atleet ooit**.\n• **Yvonne van Gennip**: 3 goud 1988 *(Calgary)*.\n• **Marianne Timmer, Esmee Visser, Suzanne Schulting** — andere kampioenen.\n• In 2018 Pyeongchang: NL won **8 schaatsmedailles** op één event.\n\n**2. Hockey** 🏑:\n• Vrouwen-team **'Oranje Hockey'** = vaak goud.\n• Mannen-team ook sterk.\n• Bekende speler: **Naomi van As, Maartje Paumen**.\n\n**3. Zwemmen** 🏊:\n• **Inge de Bruijn**: 4 goud, 2 zilver, 2 brons.\n• **Pieter van den Hoogenband**: 3 goud, 2 zilver, 2 brons.\n• **Ranomi Kromowidjojo**: 3 goud.\n\n**4. Wielrennen** 🚴:\n• **Leontien van Moorsel**: 4 goud, 1 zilver.\n• **Anna van der Breggen**.\n• **Mathieu van der Poel** mountainbike (wint vaak).\n\n**5. Atletiek** 🏃:\n• **Femke Bol** (huidige): 400m horden, 4x400m relay — wereldtop.\n• **Sifan Hassan**: marathon-goud 2024 Parijs.\n• **Dafne Schippers**: 200m wereldkampioen.\n• **Nelli Cooman, Ellen van Langen**: vroegere kampioenen.\n\n**6. Roeien** 🚣:\n• Vele goud-medailles.\n• 'Holland Acht' team.\n\n**7. Beachvolleybal** 🏐:\n• **Alexander Brouwer + Robert Meeuwsen**: brons 2016.\n\n**8. Turnen** 🤸:\n• **Epke Zonderland**: rekstok-goud 2012.\n• **Sanne Wevers**: balk-goud 2016.\n\n**9. BMX** 🚴:\n• **Niek Kimmann**: goud 2020.\n• **Laura Smulders**: brons.\n\n**Voor 2024 Parijs**:\nNL behaalde **34 medailles** (15 goud, 6 zilver, 13 brons) — recordstand.\nNL **6e** op medaillespiegel.\n\n**Sven Kramer + Ireen Wüst** zijn iconen:\n• Beide **vlaggedragers** in opening of sluiting van OS.\n• Beide **\"Sportman/-vrouw van het Jaar\"** in NL.\n\n**Andere bekende NL-sporters** *(buiten OS)*:\n• **Max Verstappen** *(Formule 1, 3x wereldkampioen 2021-2023)*.\n• **Lionel Messi-niveau in NL**: **Virgil van Dijk, Frenkie de Jong** *(voetbal)*.\n• **Tom Dumoulin** *(wielrennen, Giro d'Italia 2017)*.\n• **Bas Dost** *(voetbal)*.\n• **Vivianne Miedema** *(voetbal-vrouwen, recordscorer Arsenal)*.\n\n**Cito-feitje**:\nNederland **Oranje** — kleuren komen van **Oranje-Nassau** *(koninklijke familie)*. Vandaar oranje shirts + 'Hup Holland Hup'. Bij OS draagt NL altijd oranje.",
    checks: [
      {
        q: "Welke is **meest gedecoreerde NL-atleet** ooit?",
        options: ["Ireen Wüst (13 medailles)", "Sven Kramer", "Phelps", "Femke Bol"],
        answer: 0,
        wrongHints: [null, "10 medailles.", "Geen NL.", "Nog meer komen mogelijk."],
      },
      {
        q: "NL is **top** in welke wintersport?",
        options: ["Schaatsen", "IJshockey", "Skeleton", "Curling"],
        answer: 0,
        wrongHints: [null, "Niet sterk.", "Niet.", "Niet."],
      },
      {
        q: "**Femke Bol** is sterk in?",
        options: ["400m horden / 4x400m", "Zwemmen", "Schaatsen", "Tennis"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
      },
      {
        q: "**Oranje** komt van?",
        options: ["Oranje-Nassau koninklijke familie", "Sinaasappel", "Vlag", "Olympisch"],
        answer: 0,
        wrongHints: [null, "Letterlijk niet.", "Niet primair.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — Olympische Spelen mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Eerste moderne OS** in?", options: ["Athene 1896", "Olympia oud", "Parijs 1900", "Rome"], answer: 0, wrongHints: [null, "Oude tijden.", "2e moderne.", "Later."] },
      { q: "Hoeveel **olympische ringen**?", options: ["5", "4", "6", "7"], answer: 0, wrongHints: [null, "Te weinig.", "Te veel.", "Te veel."] },
      { q: "**Marathon** lengte?", options: ["42 km", "10 km", "100 km", "5 km"], answer: 0, wrongHints: [null, "Te kort.", "Te lang.", "Te kort."] },
      { q: "**Meest medailles** NL ooit?", options: ["Ireen Wüst", "Sven Kramer", "Phelps", "Femke Bol"], answer: 0, wrongHints: [null, "Iets minder.", "Geen NL.", "Nog actief."] },
      { q: "**Goud** medaille voor?", options: ["1e plaats", "2e", "3e", "Doping"], answer: 0, wrongHints: [null, "Zilver.", "Brons.", "Niet."] },
      { q: "Wat is **WADA**?", options: ["Anti-Doping-Agency", "Sportbond", "NL-team", "Stadion"], answer: 0, wrongHints: [null, "Niet primair.", "Niet.", "Niet."] },
      { q: "Welke kleuren hebben de **olympische ringen**?", options: ["Blauw, geel, zwart, groen, rood", "Alleen blauw", "Wit en zwart", "Regenboog"], answer: 0, wrongHints: [null, "Te weinig.", "Te weinig.", "Niet primair olympisch."] },
      { q: "Wanneer waren **Olympische Spelen Amsterdam**?", options: ["1928", "1900", "2000", "2020"], answer: 0, wrongHints: [null, "Parijs.", "Sydney.", "Tokio (uitgesteld)."] },
      { q: "Welke **NL-sporter** wint vaak op de **schaats**?", options: ["Ireen Wüst, Sven Kramer", "Lionel Messi", "Usain Bolt", "Michael Phelps"], answer: 0, wrongHints: [null, "Voetbal.", "Atletiek.", "Zwemmen."] },
      { q: "**Paralympische Spelen** zijn voor ___?", options: ["Sporters met een handicap", "Alleen kinderen", "Niet bestaand", "Alleen NL"], answer: 0, wrongHints: [null, "Volwassenen ook.", "Wel bestaand.", "Internationaal."] },
      { q: "Welke kleur heeft de **2e plaats**-medaille?", options: ["Zilver", "Goud", "Brons", "Wit"], answer: 0, wrongHints: [null, "1e plaats.", "3e plaats.", "Niet bestaand."] },
      { q: "Hoeveel jaar tussen **Zomerspelen**?", options: ["4 jaar", "1 jaar", "2 jaar", "10 jaar"], answer: 0, wrongHints: [null, "Te vaak.", "Te vaak.", "Te zelden."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const olympischeSpelenPo = {
  id: "olympische-spelen-po",
  title: "Olympische Spelen + sport (Cito groep 6-8)",
  emoji: "🥇",
  level: "groep6-8",
  subject: "geschiedenis",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — cultuur / sport",
  prerequisites: [],
  intro:
    "Olympische Spelen voor Cito groep 6-8 — geschiedenis (Olympia → Athene 1896 → Parijs 2024) + 5 ringen + motto + sport-categorieën (atletiek/water/bal/wintersport) + medailles + Paralympics + NL-helden (Ireen Wüst/Sven Kramer/Femke Bol). ~15 min.",
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
