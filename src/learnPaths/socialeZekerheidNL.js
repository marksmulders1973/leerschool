// Leerpad: Sociale zekerheid + welvaartsstaat Nederland (1900-nu)
// VMBO-GT eindexamen-syllabus geschiedenis+staatsinrichting (verplicht).
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  oranje: "#ef6c00",
  groen: "#00897b",
  blauw: "#1565c0",
  goud: "#ffd54f",
};

const stepEmojis = ["⛏️", "👴", "🏠", "💸", "🏆"];

const chapters = [
  { letter: "A", title: "Vóór WO2 — armoede + liefdadigheid", emoji: "⛏️", from: 0, to: 0 },
  { letter: "B", title: "Drees + AOW (1947-1957)", emoji: "👴", from: 1, to: 1 },
  { letter: "C", title: "Welvaartsstaat 1957-1973", emoji: "🏠", from: 2, to: 2 },
  { letter: "D", title: "Crisis + bezuinigingen 1980-nu", emoji: "💸", from: 3, to: 3 },
  { letter: "E", title: "Eind-opdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Vóór WO2 ──────────────────────────────────────────
  {
    title: "Vóór 1945 — arm zijn was vooral je eigen schuld",
    explanation:
      "In de **19e eeuw** zat Nederland midden in de **industriële revolutie**. Veel arbeiders werkten 12-14 uur per dag in fabrieken, voor weinig loon, zonder vakantie of pensioen. Als je ziek of werkloos werd, was er **geen overheid die hielp**.\n\n**Wat had je dan?**\n• **Familie** — neefjes/tantes namen je in huis.\n• **Kerk** — diaconie + parochiale armenzorg gaven brood/kleding.\n• **Particuliere liefdadigheid** — rijke burgers stichtten armenhuizen, soep-uitdelingen.\n• **Werkhuizen** — strenge instellingen waar de armste mensen woonden + dwangarbeid deden.\n\n**Eerste sociale wetten (klein begin)**:\n• **1874 Kinderwetje van Van Houten**: kinderen onder 12 mochten niet meer in fabrieken werken (wel nog op het land — handhaving was zwak).\n• **1889 Arbeidswet**: max 11 uur werk/dag voor vrouwen + jongeren tot 16. Nachtarbeid verboden.\n• **1901 Ongevallenwet** (premier **Kuyper**): bij bedrijfsongeval recht op uitkering. **Eerste echte sociale verzekering** in NL.\n• **1913 Invaliditeitswet**: uitkering bij arbeidsongeschiktheid.\n\n**Tussenoorlogse periode (1918-1939)**:\n• **Crisisjaren '30**: massa-werkloosheid (30% NL!) na Wall Street-crash 1929.\n• Geen werkloosheidsuitkering — wel **steun** (zeer karig, met strenge controle).\n• 'Stempelen' op bureau iedere dag = vernederend ritueel.\n• Veel armoede + emigratie.\n\n**Onderscheid van vandaag**:\n• Vóór 1947: sociale hulp = liefdadigheid + voorrechten.\n• Na 1947 (Drees): sociale hulp = **rechten van burgers**, betaald door belasting/premies.",
    checks: [
      {
        q: "Welke wet (1901) was **de eerste echte sociale verzekering** in NL?",
        options: ["Ongevallenwet (Kuyper)","AOW","Bijstandswet","Kinderwetje Van Houten"],
        answer: 0,
        wrongHints: [null, "Veel later (1957).", "Veel later (1965).", "Eerder (1874), wel sociale wet maar geen verzekering."],
        uitlegPad: {
          stappen: [{ titel: "1901 = startpunt sociale verzekering", tekst: "**Ongevallenwet 1901** door premier Abraham Kuyper (ARP). Werknemers in industrie verplicht verzekerd tegen bedrijfsongevallen via werkgeverspremie. **Eerste sociale verzekering** — niet meer afhankelijk van liefdadigheid." }],
          woorden: [{ woord: "sociale verzekering", uitleg: "Wettelijke verzekering tegen risico's als ziekte/werkloosheid/ouderdom, betaald uit premies." }, { woord: "Kuyper", uitleg: "Abraham Kuyper, ARP-leider + premier 1901-1905." }],
          theorie: "Vergelijking: Kinderwetje 1874 was wel sociale wet maar geen verzekering — geen uitkering bij niet-werken.",
          niveaus: { basis: "Ongevallenwet — A.", simpeler: "1901 Ongevallenwet = 1e sociale verzekering = A.", nogSimpeler: "Ongevallenwet = A." },
        },
      },
      {
        q: "Wat regelde het **Kinderwetje van Van Houten** in 1874?",
        options: ["Kinderen onder 12 mogen niet in fabrieken","Recht op schoolonderwijs","Kinderbijslag","Gratis ziekenhuis"],
        answer: 0,
        wrongHints: [null, "Leerplicht kwam pas 1900.", "Veel later (na WO2).", "Niet — geen gezondheidszorg in 1874."],
        uitlegPad: {
          stappen: [{ titel: "1874 = einde kinderarbeid (deels)", tekst: "**Kinderwetje** (officiële naam: 'Wet houdende maatregelen tot het tegengaan van overmatigen arbeid en verwaarloozing van kinderen') van **Samuel van Houten** (liberaal). Verbood loonarbeid voor kinderen onder 12, maar landwerk + huishouden bleven toegestaan. Handhaving was zwak — dwong wel het debat." }],
          woorden: [{ woord: "kinderarbeid", uitleg: "Werken in loondienst onder een bepaalde leeftijd (vroeger soms vanaf 6)." }],
          theorie: "Leerplichtwet kwam pas in **1900** (Goeman Borgesius). Daarvoor was er geen schoolplicht ondanks Kinderwetje.",
          voorbeelden: [{ type: "feit", tekst: "Vóór 1874: kinderen vanaf 6 in textielfabrieken Twente, glasfabrieken, mijnen Limburg." }],
          niveaus: { basis: "Onder 12 niet in fabriek — A.", simpeler: "Kinderwetje = verbod fabriekswerk <12 = A.", nogSimpeler: "Verbod 1874 = A." },
        },
      },
      {
        q: "Wat gebeurde tijdens de **crisisjaren '30** in NL?",
        options: ["Massa-werkloosheid (~30%) na Wall Street-crash","Massa-immigratie","Verplichte vakantie","Algemene vredetijd zonder problemen"],
        answer: 0,
        wrongHints: [null, "Niet — juist veel emigratie naar Canada/Australië.", "Niet relevant.", "Niet — economisch zwaarste decennium 20e eeuw."],
        uitlegPad: {
          stappen: [{ titel: "Grote Depressie", tekst: "**1929 Wall Street-crash** = wereldwijde economische crisis. NL-werkloosheid piekt op ~25-30%. **Geen werkloosheidsuitkering** — alleen vernederende 'steun'. Premier **Colijn** voerde zware **bezuinigingen** door (klassiek-liberale aanpak), wat de crisis verergerde." }],
          woorden: [{ woord: "Grote Depressie", uitleg: "Wereldwijde economische crisis 1929-1939." }, { woord: "Colijn", uitleg: "ARP-premier 1933-1939, koos voor bezuinigingen." }],
          theorie: "Cito-leerpunt: NL-aanpak Colijn werd later bekritiseerd. VS-president Roosevelt koos juist voor uitgaven (New Deal) — bleek effectiever.",
          niveaus: { basis: "Massa-werkloosheid — A.", simpeler: "Jaren '30 = 30% werkloos = A.", nogSimpeler: "Werkloos = A." },
        },
      },
      {
        q: "Vóór 1945 was hulp bij armoede vooral een zaak van:",
        options: ["Familie + kerk + liefdadigheid","De overheid","Werkgevers","Niemand"],
        answer: 0,
        wrongHints: [null, "Niet — overheid bemoeide zich nauwelijks.", "Soms wel, maar geen verplichting.", "Wel hulp, maar via familie/kerk."],
        uitlegPad: {
          stappen: [{ titel: "Particuliere zorg = traditie", tekst: "Vóór WO2 sterk **verzuild**: katholieken hielpen katholieken (parochiale armenzorg), protestanten via **diaconie**, joden via joodse gemeente. Plus rijke filantropen + werkhuizen. Overheid bemoeide zich amper — armoede zag men als 'individueel falen'." }],
          woorden: [{ woord: "verzuiling", uitleg: "NL-systeem waarbij katholieken/protestanten/socialisten/liberalen in aparte 'zuilen' leefden — eigen scholen/kranten/sportclubs/ziekenhuizen." }],
          niveaus: { basis: "Familie + kerk + liefdadigheid — A.", simpeler: "Hulp = familie/kerk, niet staat = A.", nogSimpeler: "Niet staat = A." },
        },
      },
      {
        q: "Welke premier voerde de **Ongevallenwet 1901** in?",
        options: ["Abraham Kuyper","Willem Drees","Hendrik Colijn","Joop den Uyl"],
        answer: 0,
        wrongHints: [null, "AOW 1957, niet 1901.", "Premier 1933-1939, crisistijd.", "Premier 1973-77, na de welvaartsstaat opbouw."],
        uitlegPad: {
          stappen: [{ titel: "Kuyper 1901", tekst: "**Abraham Kuyper** = ARP-leider (anti-revolutionaire partij, christelijk) + premier 1901-1905. Bekend van **soevereiniteit in eigen kring** (politieke filosofie) + Vrije Universiteit Amsterdam stichten." }],
          niveaus: { basis: "Kuyper — A.", simpeler: "1901-premier = Kuyper = A.", nogSimpeler: "Kuyper = A." },
        },
      },
    ],
  },

  // ─── B. Drees + AOW (1947-1957) ───────────────────────────
  {
    title: "Drees + Vadertje Drees — start welvaartsstaat",
    explanation:
      "Na **WO2** lag NL in puin. Maar het was juist deze periode waarin de basis voor de **moderne welvaartsstaat** werd gelegd.\n\n**Willem Drees (1886-1988)** — bijgenaamd **'Vadertje Drees'**:\n• PvdA-leider, **premier 1948-1958** (langste premierschap NL).\n• Sober, betrouwbaar, geliefd bij arbeiders.\n• Symbool van wederopbouw na WO2.\n\n**Belangrijkste wetten onder Drees**:\n\n**1947 Noodwet Ouderdomsvoorziening**:\n• Tijdelijke uitkering voor ouderen (65+).\n• Vrijwillig, lage uitkering.\n• Drees zelf trok eerste uitkering uit — symbolisch gebaar.\n\n**1957 AOW (Algemene Ouderdomswet)**:\n• **Volksverzekering**: iedereen vanaf 15 betaalt premie, iedereen krijgt uitkering vanaf **65 jaar** (later 67).\n• Niet meer afhankelijk van familie of armenzorg.\n• Werd in heel Europa overgenomen als model.\n• Beroemd citaat: *'Van Drees krijgen we het geld!'* (oudere bevolking).\n\n**Andere wetten in deze periode**:\n• **1949 Werkloosheidswet** (eerste versie).\n• **1956 Algemene Weduwen- en Wezenwet** (AWW): uitkering voor overlevenden.\n• **1965 Algemene Bijstandswet** (ABW): wie geen baan + geen recht op andere uitkering had, kreeg laatste-redmiddel-uitkering.\n\n**Beleid principes**:\n• **Volksverzekering**: voor iedereen, ongeacht inkomen of werkstatus.\n• **Werknemersverzekering**: alleen werknemers (WW, WIA, ZW).\n• **Premies + belastingen** = gezamenlijke pot.\n\n**Cito-link**: AOW = **1957** = kantelpunt sociale zekerheid NL. Vóór 1957 = liefdadigheid. Na 1957 = wettelijk recht voor elke 65-plusser.",
    checks: [
      {
        q: "Wie was de premier achter de **AOW (1957)**?",
        options: ["Willem Drees","Abraham Kuyper","Hendrik Colijn","Ruud Lubbers"],
        answer: 0,
        wrongHints: [null, "Ongevallenwet 1901 — 56 jaar eerder.", "Crisisjaren '30 — bezuiniging-koers.", "Premier '80-'94, andere periode."],
        uitlegPad: {
          stappen: [{ titel: "Drees = Vadertje van AOW", tekst: "**Willem Drees** (PvdA) was premier 1948-1958. Onder zijn kabinet werd **AOW** ingevoerd in 1957. Eerste land ter wereld met volledig dekkende ouderdomspensioenwet (volksverzekering)." }],
          woorden: [{ woord: "AOW", uitleg: "Algemene Ouderdomswet — basisuitkering voor iedereen 65+/67+ in NL." }],
          theorie: "Toen Drees in 1988 op 102-jarige leeftijd overleed, droeg NL hem als nationale held — hij belichaamde de welvaartsstaat.",
          voorbeelden: [{ type: "feit", tekst: "Drees ontving zelf op 80-jarige leeftijd 80 gulden AOW, dat hij niet wilde en aan goede doelen schonk." }],
          niveaus: { basis: "Drees — A.", simpeler: "AOW 1957 = Drees = A.", nogSimpeler: "Drees = A." },
        },
      },
      {
        q: "Wat betekent **'volksverzekering'**?",
        options: ["Voor iedereen verplicht (ongeacht werk-status)","Alleen werknemers","Vrijwillig","Alleen rijken"],
        answer: 0,
        wrongHints: [null, "Dat is werknemersverzekering (WW etc.).", "Niet — verplicht.", "Niet — voor iedereen."],
        uitlegPad: {
          stappen: [{ titel: "Volks- vs werknemers-verzekering", tekst: "**Volksverzekering** (AOW, AKW kinderbijslag, AWBZ/Wlz langdurige zorg): iedereen verplicht verzekerd, ook huisvrouwen + zelfstandigen + studenten. **Werknemersverzekering** (WW, WIA, ZW): alleen voor wie loon krijgt." }],
          woorden: [{ woord: "volksverzekering", uitleg: "Verzekering voor heel NL-volk, ongeacht beroep." }, { woord: "werknemersverzekering", uitleg: "Alleen voor mensen met loondienst." }],
          theorie: "Volksverzekeringen worden betaald uit **AOW-premie** (15-jaar+ betalen) + algemene middelen. Werknemersverzekeringen via **werkgevers + werknemers** premies.",
          niveaus: { basis: "Voor iedereen verplicht — A.", simpeler: "Volksverzekering = elk burger = A.", nogSimpeler: "Iedereen = A." },
        },
      },
      {
        q: "Wat regelt de **Algemene Bijstandswet** (1965)?",
        options: ["Uitkering voor wie geen ander inkomen heeft","Pensioen vanaf 65","Werkloosheidsuitkering","Kinderbijslag"],
        answer: 0,
        wrongHints: [null, "Dat is AOW.", "Dat is WW.", "Dat is AKW/Kinderbijslag."],
        uitlegPad: {
          stappen: [{ titel: "Bijstand = laatste vangnet", tekst: "**Algemene Bijstandswet** (ABW, sinds 2004: WWB → 2015: Participatiewet) = uitkering voor mensen die **geen recht op andere uitkering** hebben en **geen inkomen** kunnen verwerven. Voorbeeld: jongeren zonder werkverleden, ZZP'ers zonder klanten." }],
          woorden: [{ woord: "bijstand", uitleg: "Minimumuitkering van gemeente voor mensen zonder ander inkomen." }],
          theorie: "Bijstand wordt door **gemeente** uitgekeerd (sinds 2004 gedecentraliseerd). AOW + WW door **UWV/SVB** centraal.",
          niveaus: { basis: "Uitkering laatste vangnet — A.", simpeler: "ABW = laatste redmiddel = A.", nogSimpeler: "Bijstand = A." },
        },
      },
      {
        q: "Wat was de oorspronkelijke **AOW-leeftijd** in 1957?",
        options: ["65 jaar","60 jaar","67 jaar","70 jaar"],
        answer: 0,
        wrongHints: [null, "Te laag — wel sommige andere landen.", "Pas vanaf ~2024 in NL.", "Niet — wel pensioenleeftijd in sommige Europese landen historisch."],
        uitlegPad: {
          stappen: [{ titel: "65 sinds 1957, nu 67+", tekst: "AOW startte op **65 jaar** in 1957. Door **vergrijzing** + langere levensverwachting werd vanaf 2013 stapsgewijs verhoogd: 65→66 (2018) → 67 (2024) → gekoppeld aan levensverwachting (~67½ in 2027)." }],
          theorie: "Cito-actueel: AOW-leeftijd nu **67 jaar**. Sinds 2024 vast op 67. Daarna gekoppeld aan levensverwachting.",
          niveaus: { basis: "65 jaar — A.", simpeler: "AOW-start = 65 = A.", nogSimpeler: "65 = A." },
        },
      },
      {
        q: "**Wederopbouw** na WO2 was vooral mogelijk door:",
        options: ["Marshall-hulp (VS) + nationale samenwerking","Duitse herstelbetalingen","Belastingverhogingen alleen","Indonesisch geld"],
        answer: 0,
        wrongHints: [null, "Duitsland betaalde wel, maar niet hoofdbron.", "Wel deels — maar niet hoofdbron.", "Niet — Indonesië werd juist onafhankelijk."],
        uitlegPad: {
          stappen: [{ titel: "Marshall + samenwerking", tekst: "**Marshall-hulp** (1948-52, ~1 miljard gulden voor NL) + **harde werkdiscipline** (loonmatiging onder Drees) maakten snelle wederopbouw mogelijk. NL was begin '60 weer op vooroorlogs welvaarts-niveau." }],
          woorden: [{ woord: "Marshall-hulp", uitleg: "US-steun voor wederopbouw Europa 1948-1952." }],
          theorie: "Marshall-plan-doel VS: Europa weer rijk maken → afzetmarkt VS + tegenwicht communisme (Koude Oorlog-context).",
          niveaus: { basis: "Marshall + samenwerking — A.", simpeler: "VS-Marshall + werk = wederopbouw = A.", nogSimpeler: "Marshall = A." },
        },
      },
    ],
  },

  // ─── C. Welvaartsstaat 1957-1973 ──────────────────────────
  {
    title: "Welvaartsstaat — gouden jaren '60",
    explanation:
      "Tussen **1957 (AOW)** en **1973 (oliecrisis)** beleefde NL ongekende welvaart. Sociale zekerheid werd flink uitgebreid.\n\n**Economische context**:\n• **Aardgas Slochteren** ontdekt 1959 → miljarden inkomsten.\n• Massaal werk in industrie + bouw + diensten.\n• Loonmatiging in '50 → ontslag-zekerheid + welvaartstijging in '60.\n• Gemiddeld inkomen verdubbelde 1960-1973.\n• **Provo-beweging + jaren '60 cultuurrevolutie** = symbool veranderende samenleving.\n\n**Belangrijkste nieuwe wetten**:\n\n**1965 Bijstandswet (ABW)** — bovenstaand uitgelegd.\n\n**1967 Wet op de Arbeidsongeschiktheidsverzekering (WAO)**:\n• Uitkering bij langdurige arbeidsongeschiktheid.\n• Heel ruim — uitkering 80% van laatste salaris.\n• Werd zo gebruikt: in '80 zat **bijna 1 miljoen** NL'ers in WAO ('verborgen werkloosheid').\n\n**1968 AKW Kinderbijslag**: per kind ouders krijgen geld van de staat.\n\n**1968 AWBZ Algemene Wet Bijzondere Ziektekosten**: langdurige zorg (verpleeghuis, gehandicapten). Vervangen 2015 door **Wet langdurige zorg (Wlz)**.\n\n**Polderoverleg / Sociaal-Economische Raad (SER)**:\n• Werkgevers + werknemers + onafhankelijke kroonleden adviseren regering.\n• Compromis-cultuur (**poldermodel**) zorgde voor sociale rust.\n\n**Vrouwen in de welvaartsstaat**:\n• Tot 1956: **handelingsonbekwaam** — getrouwde vrouwen mochten zonder toestemming man niet werken, lenen of contract sluiten!\n• Vanaf 1956: gelijke rechten in huwelijk.\n• Vanaf 1971: gelijke loon voor gelijk werk (wettelijk).\n• Maar: in 1970 werkte nog maar **20% van getrouwde vrouwen** buitenshuis (nu ~80%).\n\n**Religie + politiek**:\n• **Verzuiling** brokkelde af in jaren '60 (KVP/ARP/CHU → CDA in 1980).\n• Secularisering (mensen verlaten kerk).\n• PvdA + VVD groeiden.",
    checks: [
      {
        q: "Welke wet (1967) regelde **arbeidsongeschiktheidsuitkering**?",
        options: ["WAO","AOW","ABW","AKW"],
        answer: 0,
        wrongHints: [null, "Ouderdoms-uitkering, niet arbeidsongeschiktheid.", "Bijstand.", "Kinderbijslag."],
        uitlegPad: {
          stappen: [{ titel: "WAO = arbeidsongeschiktheid", tekst: "**Wet op de Arbeidsongeschiktheidsverzekering 1967**. Werknemer die langdurig niet kan werken door ziekte/handicap kreeg 80% van laatste loon. Veel te ruim — gebruikt voor verborgen ontslag in jaren '80. Vervangen door **WIA** (2006) met strenger criterium." }],
          woorden: [{ woord: "WAO", uitleg: "Wet op de Arbeidsongeschiktheidsverzekering 1967-2005." }, { woord: "WIA", uitleg: "Wet werk en inkomen naar arbeidsvermogen, vanaf 2006." }],
          theorie: "Cito-actueel: bij volledige + duurzame arbeidsongeschiktheid (vandaag): **IVA** (75% van loon). Bij gedeeltelijke: **WGA**.",
          niveaus: { basis: "WAO — A.", simpeler: "1967 arbeidsongeschiktheid = WAO = A.", nogSimpeler: "WAO = A." },
        },
      },
      {
        q: "Wanneer mochten **getrouwde vrouwen** zelfstandig werken in NL?",
        options: ["Vanaf 1956","Vanaf 1900","Vanaf 1980","Pas in 2010"],
        answer: 0,
        wrongHints: [null, "Niet — toen waren ze nog handelingsonbekwaam.", "Wel emancipatie-versnelling, maar wet was 1956.", "Veel te laat — al 50 jaar normaal."],
        uitlegPad: {
          stappen: [{ titel: "1956 wet handelingsbekwaamheid", tekst: "Vóór 1956 was een getrouwde vrouw **handelingsonbekwaam** — kon zonder toestemming van haar man geen baan accepteren, lening krijgen of contract tekenen. **Wet 1956** veranderde dit. Voor jonge VMBO-leerlingen verbazend recent — minder dan 70 jaar geleden." }],
          woorden: [{ woord: "handelingsonbekwaam", uitleg: "Geen rechtsbevoegdheid om zelf rechtshandelingen te doen — moet toestemming derde hebben." }],
          theorie: "Vrouwenrechten-tijdlijn NL: 1919 kiesrecht → 1956 handelingsbekwaam → 1971 gelijk loon → 1980 anti-discriminatie → 2013 huwelijk samengelegd (man+vrouw beide ouder).",
          voorbeelden: [{ type: "feit", tekst: "Een 60-jarige oma kan zich nog herinneren dat haar moeder geen bankrekening mocht openen zonder vaders toestemming." }],
          niveaus: { basis: "1956 — A.", simpeler: "Vrouwen werken-vrij sinds 1956 = A.", nogSimpeler: "1956 = A." },
        },
      },
      {
        q: "Wat is **Slochteren** (1959)?",
        options: ["Aardgasveld in Groningen","Stad in Limburg","Politieke partij","Sociale wet"],
        answer: 0,
        wrongHints: [null, "Niet — Slochteren ligt in Groningen.", "Niet — geen partij.", "Niet — geen wet."],
        uitlegPad: {
          stappen: [{ titel: "Slochteren = aardgas-bonanza", tekst: "**1959**: NAM ontdekt **grootste aardgasveld van Europa** bij Slochteren (Groningen). Levert NL ~400 miljard euro op tot 2024. Maar: ook aardbevingen sinds '80 → boringen gestopt 2022. Schadefonds voor Groningers blijft heet politiek thema." }],
          woorden: [{ woord: "Slochteren", uitleg: "Dorp in Groningen, naamgever van het grote aardgasveld." }],
          theorie: "Aardgas-baten financierden welvaartsstaat-uitbreiding jaren '60-'70. Critici noemen dit '**Nederlandse ziekte**': gas-rijkdom maakte industrie onnodig duur → industriële afkalving.",
          niveaus: { basis: "Aardgas Groningen — A.", simpeler: "Slochteren = gas-veld Groningen = A.", nogSimpeler: "Gas = A." },
        },
      },
      {
        q: "Wat is het **poldermodel**?",
        options: ["Compromis tussen werkgevers + werknemers + regering","Type irrigatiesysteem","Politiek systeem zonder oppositie","Belastingsysteem"],
        answer: 0,
        wrongHints: [null, "Wel letterlijk een poldermodel, maar termen gebruikt voor overleg-cultuur.", "Niet — NL heeft wel oppositie.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Polderen = overleggen tot consensus", tekst: "**Poldermodel** = NL-overleg-cultuur waarbij werkgevers (VNO-NCW), vakbonden (FNV/CNV) en regering samen polderen voor compromis. Belangrijke instelling: **SER (Sociaal-Economische Raad)** sinds 1950. Toonbeeld: **Akkoord van Wassenaar 1982** = loonmatiging + werktijdverkorting." }],
          woorden: [{ woord: "poldermodel", uitleg: "NL-overleg- en compromis-cultuur in sociaal-economisch beleid." }, { woord: "SER", uitleg: "Sociaal-Economische Raad, adviesorgaan regering." }],
          theorie: "Stoclaim: NL is wereld-kampioen polderen. Kritiek: kan ook leiden tot trage besluitvorming.",
          niveaus: { basis: "Werkgever-werknemer-overleg — A.", simpeler: "Poldermodel = overlegcultuur = A.", nogSimpeler: "Overleg = A." },
        },
      },
      {
        q: "Wat is **AKW**?",
        options: ["Kinderbijslag voor ouders","Auto-werkgever-belasting","Algemene kerk-wet","Werkloosheidswet"],
        answer: 0,
        wrongHints: [null, "Bestaat niet.", "Bestaat niet als wet.", "Dat is WW."],
        uitlegPad: {
          stappen: [{ titel: "AKW sinds 1962", tekst: "**Algemene Kinderbijslagwet** (AKW). Iedere ouder krijgt **per kind een vast bedrag per kwartaal** van overheid, ongeacht inkomen. Volksverzekering. Bedrag stijgt met leeftijd kind. ~10 miljard euro/jaar totaal." }],
          woorden: [{ woord: "AKW", uitleg: "Algemene Kinderbijslagwet — uitkering per kind aan ouders." }],
          theorie: "Cito-feit: ouders met inkomen onder bepaalde grens kunnen ook **kindgebondenbudget** + **kinderopvangtoeslag** krijgen — extra toeslagen.",
          niveaus: { basis: "Kinderbijslag — A.", simpeler: "AKW = kinderbijslag = A.", nogSimpeler: "Kinderbijslag = A." },
        },
      },
    ],
  },

  // ─── D. Crisis + bezuinigingen 1980-nu ────────────────────
  {
    title: "Vanaf 1973 — crisis en hervorming",
    explanation:
      "De **welvaartsstaat liep in 1973 tegen grenzen aan**. Twee oliecrises + structurele veranderingen dwongen NL tot hervormingen.\n\n**1973 Eerste oliecrisis**:\n• Yom Kippur-oorlog Israël-Arabische landen.\n• Arabische olielanden zetten **olie-embargo** in tegen NL (vanwege pro-Israël-houding).\n• **Autoloze zondagen** — geen verkeer op zondag in NL.\n• Olieprijs verviervoudigd.\n• Werkloosheid steeg → druk op WW + WAO.\n\n**1979 Tweede oliecrisis** (Iraanse revolutie). Recessie.\n\n**1982 Akkoord van Wassenaar**:\n• Werkgevers + vakbonden + regering (Lubbers I): **loonmatiging in ruil voor werktijdverkorting** (40 → 38 uur).\n• Begin van **'no nonsense'-politiek** premier Lubbers (CDA, 1982-1994).\n\n**1980-2000 hervormingen welvaartsstaat**:\n• **1987 stelsel-herziening**: WW + bijstand strenger, WAO-criteria aangescherpt.\n• **2001 WGA/IVA**: ruime WAO vervangen door strenger **WIA** (2006).\n• **2015 grote decentralisatie**: gemeenten verantwoordelijk voor jeugdzorg + Wmo + Participatiewet. Bezuiniging.\n• **AOW-leeftijd verhoogd**: 65 → 66 → 67 (vanaf 2024).\n\n**Belangrijke premiers**:\n• **Lubbers** (CDA, 1982-1994): bezuiniger, hervormer.\n• **Kok** (PvdA, 1994-2002): paars-kabinetten (PvdA + VVD + D66), economische groei.\n• **Balkenende** (CDA, 2002-2010): kredietcrisis 2008.\n• **Rutte** (VVD, 2010-2024): bezuinigingen na crisis 2008 + euro-crisis.\n• **Schoof** (PVV+VVD+NSC+BBB, 2024-): rechts-conservatief.\n\n**Hedendaagse uitdagingen**:\n• **Vergrijzing**: meer ouderen → meer AOW + zorg, minder werkenden.\n• **AOW-leeftijd verhoging** politiek heet.\n• **Toeslagenaffaire 2019-2021**: kabinet trad af na onterecht beschuldigde ouders kinderbijslag.\n• **Wonen-crisis**: starters kunnen geen huis kopen.\n\n**Onthoud voor Cito**:\n• 1973 = oliecrisis → einde 'gouden jaren'.\n• 1982 Wassenaar = loonmatiging + 38-uurs-werkweek.\n• Vergrijzing = belangrijkste lange-termijn-bedreiging welvaartsstaat.",
    checks: [
      {
        q: "Wat gebeurde tijdens de **eerste oliecrisis (1973)** in NL?",
        options: ["Autoloze zondagen","Bouwboom","Nieuwe vakantieparken","Verlaging belasting"],
        answer: 0,
        wrongHints: [null, "Niet — crisis-tijd, juist bezuinigingen.", "Niet — geen verband met crisis.", "Niet — juist belastingen werden niet verlaagd."],
        uitlegPad: {
          stappen: [{ titel: "Autoloze zondagen 1973", tekst: "Arabische olielanden zetten **olie-embargo** in tegen NL na NL-steun aan Israël (Yom Kippur-oorlog). NL-regering reageerde met **autoloze zondagen** (4 november-1 december 1973 + nog 2 in 1974). Geen verkeer behalve hulpdiensten. Mensen reden op **fiets** + **paard-en-wagen** op de A28!" }],
          woorden: [{ woord: "olie-embargo", uitleg: "Beperking olie-export naar bepaalde landen als politiek wapen." }],
          theorie: "Cito-foto-favoriet: lege snelweg + mensen op fiets — symbool van oliecrisis.",
          niveaus: { basis: "Autoloze zondagen — A.", simpeler: "1973 oliecrisis = autoloze zondagen = A.", nogSimpeler: "Autoloos = A." },
        },
      },
      {
        q: "Het **Akkoord van Wassenaar (1982)** regelde:",
        options: ["Loonmatiging + werktijdverkorting","Nieuwe grondwet","Privatisering NS","Eurolancering"],
        answer: 0,
        wrongHints: [null, "Niet — grondwet 1983 was apart.", "Wel onder Lubbers, maar niet Wassenaar.", "Veel later (1999/2002)."],
        uitlegPad: {
          stappen: [{ titel: "Werkgever + vakbond + Lubbers", tekst: "**24 november 1982**: VNO-NCW (werkgevers) + FNV (vakbonden) + regering Lubbers tekenen in Wassenaar. **Werkgevers**: minder loonstijging. **Werknemers**: 40-uurs naar **38-uurs werkweek**. **Regering**: minder werkloosheid + economisch herstel. **Wassenaar** = klassiek voorbeeld poldermodel." }],
          theorie: "Cito-feit: na Wassenaar groeide NL-economie hard in jaren '80 + '90. Internationaal geprezen als 'Polder-wonder'.",
          niveaus: { basis: "Loonmatiging + werktijd — A.", simpeler: "Wassenaar = loon ↓ + uren ↓ = A.", nogSimpeler: "Loonmatiging = A." },
        },
      },
      {
        q: "Wat is de **AOW-leeftijd** vandaag (2025)?",
        options: ["67 jaar","65 jaar","60 jaar","70 jaar"],
        answer: 0,
        wrongHints: [null, "Was zo van 1957 tot 2018.", "Niet — vroege uittreding bestond, maar geen AOW.", "Niet — wel debat over verhoging, maar nog niet."],
        uitlegPad: {
          stappen: [{ titel: "Vergrijzing → 67", tekst: "Door **vergrijzing** (langer leven + minder kinderen) werd AOW-leeftijd vanaf 2013 verhoogd: 65→65y3mnd→...→**67** (sinds 2024). Voor toekomst gekoppeld aan **levensverwachting** (~67½ in 2027)." }],
          woorden: [{ woord: "vergrijzing", uitleg: "Toename oudere bevolking + afname jongere — minder werkenden per gepensioneerde." }],
          theorie: "Cito-feit: 1957 → 65 jaar. 2024 → 67 jaar. Verhoging van 2 jaar in 67 jaar tijd. Toekomst: gekoppeld aan levensverwachting.",
          niveaus: { basis: "67 jaar — A.", simpeler: "AOW vandaag = 67 = A.", nogSimpeler: "67 = A." },
        },
      },
      {
        q: "Wat is de **Toeslagenaffaire** (2019-2021)?",
        options: ["Belastingdienst beschuldigde onterecht ouders van fraude","Schandaal in kabinet Rutte over auto's","Affaire Eurovisie","Bouw-fraude"],
        answer: 0,
        wrongHints: [null, "Niet — auto's geen rol.", "Niet relevant.", "Niet — andere context."],
        uitlegPad: {
          stappen: [{ titel: "Toeslagenaffaire = grote staat-schande", tekst: "Belastingdienst beschuldigde ~26.000 ouders onterecht van **kinderopvangtoeslag-fraude** (vooral mensen met dubbele achternaam / migratie-achtergrond). Moesten tienduizenden euro's terugbetalen. Veel gezinnen geruïneerd — schuldenproblemen, scheidingen, uithuisplaatsingen kinderen. **Kabinet Rutte III** trad af **15 januari 2021** na kritisch onderzoeksrapport." }],
          theorie: "Cito-actueel: toeslagenaffaire = grootste staat-schandaal sinds WO2. Excuses + €30.000 compensatie per ouder. Premier Rutte bleef wel aan.",
          niveaus: { basis: "Onterecht fraude-beschuldiging ouders — A.", simpeler: "Belastingdienst pakte ouders verkeerd aan = A.", nogSimpeler: "Belastingdienst-fout = A." },
        },
      },
      {
        q: "Welke premier zat van **2010-2024** in NL?",
        options: ["Mark Rutte","Wim Kok","Jan-Peter Balkenende","Dries van Agt"],
        answer: 0,
        wrongHints: [null, "1994-2002 PvdA-premier.", "2002-2010 CDA-premier.", "1977-1982 CDA-premier."],
        uitlegPad: {
          stappen: [{ titel: "Rutte I-II-III-IV (14 jaar)", tekst: "**Mark Rutte** (VVD) was **langste premier ooit** in NL — 13 jaar, 7 maanden (14 oktober 2010 - 2 juli 2024). Vier kabinetten: Rutte I (2010-12), II (2012-17), III (2017-21), IV (2022-24). Daarna overgedragen aan Dick Schoof. Rutte werd later **NAVO-secretaris-generaal** (oktober 2024)." }],
          theorie: "Rutte's lange premierschap stond in het teken van: kredietcrisis (2008-13), eurocrisis, COVID (2020-22), oorlog Oekraïne (2022+), Toeslagenaffaire (2021).",
          niveaus: { basis: "Mark Rutte — A.", simpeler: "2010-2024 premier = Rutte = A.", nogSimpeler: "Rutte = A." },
        },
      },
    ],
  },

  // ─── E. Eind-opdracht ─────────────────────────────────────
  {
    title: "Examen-eindopdracht — sociale zekerheid",
    explanation:
      "Mix van vragen over sociale zekerheid 1874-vandaag. VMBO-eindexamen-stijl.\n\nLet bij beantwoorden op **jaartal + premier + wet** — meeste vragen draaien om die combinatie.\n\nVeel succes!",
    checks: [
      {
        q: "Welke wet was **eerste sociale verzekering** (1901)?",
        options: ["Ongevallenwet","AOW","Kinderbijslag","WAO"],
        answer: 0,
        wrongHints: [null, "1957.", "Veel later (1962).", "1967."],
        uitlegPad: {
          stappen: [{ titel: "1901 Kuyper", tekst: "**Ongevallenwet 1901** (Kuyper). Eerste sociale verzekering NL." }],
          niveaus: { basis: "Ongevallenwet — A.", simpeler: "1901 = Ongevallenwet = A.", nogSimpeler: "Ongevallenwet = A." },
        },
      },
      {
        q: "**AOW** is een:",
        options: ["Volksverzekering","Werknemersverzekering","Vrijwillige verzekering","Particuliere verzekering"],
        answer: 0,
        wrongHints: [null, "WW + WAO zijn dat.", "Verplicht voor iedereen.", "Niet — wettelijke verzekering."],
        uitlegPad: {
          stappen: [{ titel: "AOW = volksverzekering", tekst: "Iedereen vanaf 15 in NL betaalt premie. Iedereen krijgt uitkering vanaf 67. Niet afhankelijk van werk-status." }],
          niveaus: { basis: "Volksverzekering — A.", simpeler: "AOW = volksverzekering = A.", nogSimpeler: "Volk = A." },
        },
      },
      {
        q: "*'Vadertje Drees'* was premier van welke partij?",
        options: ["PvdA","CDA","VVD","D66"],
        answer: 0,
        wrongHints: [null, "Niet — Drees was sociaal-democraat.", "Niet — andere partij.", "Niet — D66 niet eens opgericht (1966)."],
        uitlegPad: {
          stappen: [{ titel: "Drees-PvdA", tekst: "**Willem Drees** = oprichter PvdA (1946) na fusie sociaaldemocraten + andere. Premier 1948-1958. Symbool sociaal-democratie + welvaartsstaat." }],
          niveaus: { basis: "PvdA — A.", simpeler: "Drees = PvdA = A.", nogSimpeler: "PvdA = A." },
        },
      },
      {
        q: "Vergrijzing betekent:",
        options: ["Meer ouderen, minder jongeren in bevolking","Meer mensen worden grijs","Klimaatverandering","Inflatie"],
        answer: 0,
        wrongHints: [null, "Letterlijk wel, maar in context van bevolking belangrijker.", "Niet relevant — andere term.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Demografische vergrijzing", tekst: "Vergrijzing = **demografie**: aandeel 65+ groeit, aandeel jongeren krimpt. NL: 1900 ~5% boven 65, 2025 ~20%, 2050 verwacht ~25%. Gevolgen: meer AOW + zorg, minder werkenden per gepensioneerde." }],
          niveaus: { basis: "Meer ouderen — A.", simpeler: "Vergrijzing = meer 65+ = A.", nogSimpeler: "Meer ouderen = A." },
        },
      },
      {
        q: "Wanneer trad **kabinet Rutte III** af door de **Toeslagenaffaire**?",
        options: ["15 januari 2021","2 juli 2024","17 augustus 2010","11 september 2001"],
        answer: 0,
        wrongHints: [null, "Niet — toen trad Rutte IV af.", "Niet — toen vorming Rutte I.", "Niet — VS-aanslagen, geen NL-kabinet."],
        uitlegPad: {
          stappen: [{ titel: "Rutte III viel jan 2021", tekst: "Na rapport parlementaire onderzoekscommissie Toeslagenaffaire ('Ongekend onrecht') in december 2020 trad **kabinet Rutte III** demissionair af op **15 januari 2021**. Rutte zelf bleef premier in IV." }],
          theorie: "Cito-actueel: na demissionair kabinet kwamen verkiezingen maart 2021. Rutte IV gevormd januari 2022.",
          niveaus: { basis: "15 januari 2021 — A.", simpeler: "Rutte III af = jan 2021 = A.", nogSimpeler: "Jan 2021 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const socialeZekerheidNL = {
  id: "sociale-zekerheid-nl",
  title: "Sociale zekerheid + welvaartsstaat NL",
  emoji: "👴",
  level: "vmbo-gt-4",
  subject: "geschiedenis",
  referentieNiveau: "vmbo-gt-CSE",
  sloThema: "Geschiedenis VMBO — sociale zekerheid + welvaartsstaat NL 1900-nu",
  prerequisites: [
    { id: "staatsinrichting-1848", title: "Staatsinrichting NL 1848-nu", niveau: "vmbo-gt-CSE" },
    { id: "tijdvakken-geschiedenis", title: "Tijdvakken", niveau: "po-1F" },
    { id: "pincode-overheid", title: "Pincode — overheid + economie", niveau: "vmbo-gt-CSE" },
  ],
  intro:
    "Van Kinderwetje (1874) via Drees + AOW (1957) tot vergrijzing + Toeslagenaffaire vandaag. Hoe Nederland van armoede-zonder-vangnet naar moderne welvaartsstaat ging — en de hedendaagse uitdagingen. VMBO-GT eindexamen-stof. 5 stappen × ~5 vragen. ~15 min.",
  triggerKeywords: [
    "sociale zekerheid", "welvaartsstaat", "AOW", "WAO", "WIA",
    "Drees", "Vadertje Drees", "PvdA",
    "Ongevallenwet", "Kuyper",
    "bijstand", "ABW", "WW", "kinderbijslag", "AKW",
    "volksverzekering", "werknemersverzekering",
    "vergrijzing", "AOW-leeftijd",
    "oliecrisis", "autoloze zondagen", "1973",
    "Akkoord van Wassenaar", "poldermodel", "SER",
    "Rutte", "Toeslagenaffaire", "Lubbers",
    "Slochteren", "aardgas",
    "Kinderwetje", "Van Houten",
  ],
  chapters,
  steps,
};

export default socialeZekerheidNL;
