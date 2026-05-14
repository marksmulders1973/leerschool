// Leerpad: De Eerste Wereldoorlog — klas 2-3 onderbouw VO.
// Onderdeel geschiedenis Europa. Referentieniveau 2F.
// 6 stappen met uitlegPad. Sluit chronologisch vóór WO2.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  goud: "#ffd54f",
  rood: "#c62828",
  blauw: "#1565c0",
  bruin: "#5d4037",
  highlight: "#ff7043",
};

const stepEmojis = ["⚙️", "💥", "🗡️", "🇳🇱", "🕊️", "🏆"];

const chapters = [
  { letter: "A", title: "Oorzaken", emoji: "⚙️", from: 0, to: 0 },
  { letter: "B", title: "Begin: Sarajevo 1914", emoji: "💥", from: 1, to: 1 },
  { letter: "C", title: "Loopgraven + Westfront", emoji: "🗡️", from: 2, to: 2 },
  { letter: "D", title: "Nederland neutraal", emoji: "🇳🇱", from: 3, to: 3 },
  { letter: "E", title: "Einde + Versailles", emoji: "🕊️", from: 4, to: 4 },
  { letter: "F", title: "Eind-opdracht", emoji: "🏆", from: 5, to: 5 },
];

function tijdslijnSvg() {
  return `<svg viewBox="0 0 320 160">
<rect x="0" y="0" width="320" height="160" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Eerste Wereldoorlog — tijdlijn</text>
<line x1="20" y1="85" x2="300" y2="85" stroke="${COLORS.goud}" stroke-width="2"/>
<circle cx="30" cy="85" r="6" fill="${COLORS.rood}"/>
<text x="30" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">28 jun 1914</text>
<text x="30" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Sarajevo</text>
<circle cx="100" cy="85" r="6" fill="${COLORS.rood}"/>
<text x="100" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">aug 1914</text>
<text x="100" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Oorlog start</text>
<circle cx="180" cy="85" r="6" fill="${COLORS.bruin}"/>
<text x="180" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">1916</text>
<text x="180" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Verdun + Somme</text>
<circle cx="240" cy="85" r="6" fill="${COLORS.blauw}"/>
<text x="240" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">apr 1917</text>
<text x="240" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">VS meedoen</text>
<circle cx="290" cy="85" r="6" fill="${COLORS.curve}"/>
<text x="290" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">11 nov 1918</text>
<text x="290" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Wapenstilstand</text>
<text x="160" y="148" text-anchor="middle" fill="${COLORS.highlight}" font-size="11" font-family="Arial" font-style="italic">~4 jaar oorlog, ~17 miljoen doden</text>
</svg>`;
}

const steps = [
  // STAP 1: Oorzaken
  {
    title: "Oorzaken — waarom werd de hele wereld erbij betrokken?",
    explanation:
      "De Eerste Wereldoorlog *(1914-1918)* brak uit door **veel factoren tegelijk**. Geen 1 oorzaak.\n\n**De 4 hoofdoorzaken** *(onthoud 'MAIN')*:\n\n**1. M = Militarisme**\n• Europese landen hadden enorm grote legers + vloten opgebouwd.\n• **Wapenwedloop** vooral tussen Engeland en Duitsland (oorlogsschepen).\n• Generaals hadden veel macht in politiek.\n\n**2. A = Allianties**\nLanden hadden zich in **bondgenootschappen** verbonden:\n• **Triple Entente**: Frankrijk + Engeland + Rusland.\n• **Triple Alliantie**: Duitsland + Oostenrijk-Hongarije + Italië *(Italië wisselde van kant)*.\n\nProbleem: als 1 land in oorlog kwam, móesten de bondgenoten meevechten. Een klein conflict werd zo een wereldoorlog.\n\n**3. I = Imperialisme**\n• Europese landen hadden **koloniën in Afrika + Azië**.\n• Rivaliteit om grondstoffen, markten, prestige.\n• Duitsland kwam laat — wilde meer koloniën dan het had.\n• Spanningen over Marokko + Balkan.\n\n**4. N = Nationalisme**\n• Volken in Europa hadden sterke trots in eigen land.\n• Sommige minderheden wilden **eigen land** *(bv. Slavische volken in Oostenrijk-Hongarije)*.\n• Servië wilde alle Slaven samenbrengen *(pan-slavisme)*.\n• Oostenrijk-Hongarije zag Servië als bedreiging.\n\n**De Balkan-kruidvat**:\nDe Balkan *(zuidoost-Europa)* was een mengeling van **veel volken + religies** onder **Ottomaanse + Oostenrijkse heerschappij**. Verschillende kleinere oorlogen daar tussen 1912-1913 maakten het gebied explosief.\n\n**Cito-feitje**:\nDe periode rond 1900 heette de **'Belle Époque'** *(mooie tijd)* — Europese welvaart, kunst, wetenschap. Niemand verwachtte dat een grote oorlog mogelijk was. Mensen dachten: 'we zijn te modern voor oorlog'. **Verkeerd gedacht**.",
    svg: tijdslijnSvg(),
    checks: [
      {
        q: "Wat betekent de M in **MAIN-oorzaken** WO1?",
        options: ["Militarisme", "Macht", "Marokko", "Marshall"],
        answer: 0,
        wrongHints: [null, "Wel deels, maar M = militarisme.", "Marokko was 1 incident, niet de hoofdcategorie.", "Marshall plan was na WO2."],
      },
      {
        q: "Welke landen vormden de **Triple Entente**?",
        options: ["Frankrijk + Engeland + Rusland", "Duitsland + Italië + Oostenrijk", "VS + Engeland + Frankrijk", "Engeland + Frankrijk + Spanje"],
        answer: 0,
        wrongHints: [null, "Dat is Triple Alliantie.", "VS deed niet mee vanaf begin.", "Spanje was neutraal."],
      },
      {
        q: "Wat is **nationalisme**?",
        options: ["Sterke trots in eigen volk/land", "Vredesbeweging", "Internationaal samenwerken", "Religie"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Geen religie."],
      },
      {
        q: "Welke regio heette **'Balkan-kruidvat'**?",
        options: ["Zuidoost-Europa (Servië, Bulgarije, etc.)", "Noord-Europa", "Spanje", "Engeland"],
        answer: 0,
        wrongHints: [null, "Geen kruidvat.", "Geen kruidvat.", "Geen kruidvat."],
      },
    ],
  },

  // STAP 2: Begin: Sarajevo
  {
    title: "Begin — moord op Frans Ferdinand (28 juni 1914)",
    explanation:
      "De oorlog begon door **één moordaanslag** in een Servische hoofdstad.\n\n**Wat gebeurde er?**\n• **28 juni 1914**: **Aartshertog Frans Ferdinand** van Oostenrijk-Hongarije bezocht **Sarajevo** *(Bosnië, toen deel van Oostenrijk-Hongarije)*.\n• Werd doodgeschoten door **Gavrilo Princip**, een 19-jarige Servische nationalist *(deel van groep 'Zwarte Hand')*.\n• Princip wilde Slavische volken bevrijden van Oostenrijkse heerschappij.\n• Tegelijk werd Frans Ferdinands vrouw Sophie ook doodgeschoten.\n\n**Wat gebeurde daarna?**\nKlein conflict werd snel groot door allianties:\n\n1. **28 juli 1914**: Oostenrijk-Hongarije verklaart Servië oorlog.\n2. **1 augustus**: Duitsland verklaart Rusland oorlog *(Rusland steunde Servië)*.\n3. **3 augustus**: Duitsland verklaart Frankrijk oorlog.\n4. **4 augustus**: Duitsland valt **België** binnen *(deel van 'Schlieffenplan' — snel via België naar Frankrijk)*. België was **neutraal** — schending! Engeland verklaart Duitsland oorlog.\n\n**In een week** was heel Europa in oorlog.\n\n**Schlieffenplan** *(Duits oorlogsplan)*:\nDuitsland wilde **eerst Frankrijk verslaan** (snel, via België), daarna Rusland aanvallen. Mislukte: Frankrijk + Engeland stopten Duitsland bij de **Marne** *(sep 1914)*. Daarna ging het over in **loopgravenoorlog**.\n\n**Wat dachten mensen?**\n• De meeste politici en burgers dachten: *'tegen Kerst zijn we thuis'*.\n• In plaats van een **paar maanden** duurde de oorlog **ruim 4 jaar**.\n• Met **ongekende verschrikkelijkheid**.\n\n**Belangrijke termen**:\n• **Aartshertog** = troonopvolger van Oostenrijk-Hongarije.\n• **Sarajevo** = hoofdstad Bosnië *(nu Bosnië-Herzegovina)*.\n• **Schlieffenplan** = Duits aanvalsplan via België naar Frankrijk.\n• **Neutraal** = niet in oorlog, geen kant kiezen.",
    checks: [
      {
        q: "Wanneer werd **Frans Ferdinand vermoord**?",
        options: ["28 juni 1914", "1 september 1914", "11 november 1918", "11 augustus 1914"],
        answer: 0,
        wrongHints: [null, "Te laat.", "Einde oorlog.", "Niet bij begin."],
      },
      {
        q: "In welke stad gebeurde de **moord**?",
        options: ["Sarajevo (Bosnië)", "Wenen", "Belgrado", "Berlijn"],
        answer: 0,
        wrongHints: [null, "Hoofdstad Oostenrijk-Hongarije zelf.", "Hoofdstad Servië.", "Hoofdstad Duitsland."],
      },
      {
        q: "Welk **plan** had Duitsland om snel te winnen?",
        options: ["Schlieffenplan (via België naar Frankrijk)", "Marshallplan", "Marshall-plan", "Dawes-plan"],
        answer: 0,
        wrongHints: [null, "Was na WO2.", "Was na WO2.", "Was 1924 — economisch herstel."],
        uitlegPad: {
          stappen: [
            { titel: "Schlieffenplan — eerst Frankrijk", tekst: "Duitsland wilde een 2-fronten-oorlog vermijden. Plan: snel via België naar Parijs (Frankrijk verslaan in 6 weken), dán troepen omgooien naar Rusland." },
            { titel: "Waarom mislukte het", tekst: "België vocht harder dan verwacht; Engeland deed mee (België was neutraal); Frankrijk stopte Duitse opmars bij de rivier de Marne (sep 1914). De oorlog werd statisch — loopgraven." },
          ],
          woorden: [{ woord: "neutraliteit", uitleg: "Een land dat niet in oorlog is met andere landen." }],
          theorie: "Duitsland gokte op snelheid; verloor toen het niet snel ging.",
          voorbeelden: [{ type: "stap", tekst: "België weigerde Duitse troepen door te laten — moest met geweld bezet worden, kostte tijd." }],
          basiskennis: [{ onderwerp: "2-fronten-oorlog", uitleg: "Oorlog aan oostkant + westkant tegelijk — gevreesd door Duitsland." }],
          niveaus: {
            basis: "Schlieffenplan. A.",
            simpeler: "Duitsland wilde eerst Frankrijk uitschakelen via België. Hopen dat het in 6 weken klaar was. Mislukte — Frankrijk + Engeland stopten Duitsers bij de Marne. = A.",
            nogSimpeler: "Schlieffenplan = A.",
          },
        },
      },
      {
        q: "Welk **neutraal land** werd door Duitsland binnengevallen?",
        options: ["België", "Nederland", "Zwitserland", "Zweden"],
        answer: 0,
        wrongHints: [null, "Bleef wel neutraal.", "Bleef neutraal.", "Bleef neutraal."],
      },
    ],
  },

  // STAP 3: Loopgraven
  {
    title: "Loopgravenoorlog — 4 jaar in modder",
    explanation:
      "Na het mislukken van het Schlieffenplan ontstond een **loopgravenoorlog** in het Westen.\n\n**Wat is een loopgraaf?**\n• **Lange smalle sloot** in de grond, ~2 m diep.\n• Soldaten konden er rechtop in staan en schieten.\n• Beschermd tegen kogels.\n• Maar **vol modder + ratten + ziektes**.\n\n**Westfront**:\n• Liep van **Noordzee** *(bij België)* via **Noord-Frankrijk** naar **Zwitserland**.\n• Aan ene kant: Duitsers.\n• Aan andere kant: Frankrijk + Engeland *(later VS)*.\n• Tussen de 2 lijnen: **niemandsland** — dodelijk gebied vol prikkeldraad, granaattrechters, lijken.\n\n**Hoe leefden soldaten?**\n• **Modder** tot je knieën.\n• **Ratten** zo groot als katten.\n• **Lijken** op niemandsland — niet ophaalbaar.\n• **Granaten** alle uren van de dag.\n• **Loopgravenvoet** = voeten rotten van vocht.\n• **Granaatpsychose / shell shock** = trauma van eindeloos bombardement.\n• Eten = blik soep, beschuit, soms een appel.\n\n**Wapens**:\n• **Machinegeweren** *(Maxim, Vickers)* — schoten 600 kogels/min.\n• **Granaten + bommen** uit kanonnen.\n• **Tanks** *(uitgevonden 1916, eerst door Engeland)*.\n• **Vliegtuigen** *(eerst voor verkenning, later luchtgevechten met Manfred von Richthofen 'de Rode Baron')*.\n• **Gifgas** *(eerst Duits Ieper 1915 — chloorgas, daarna mosterdgas)* — verschrikkelijk wapen, blind/verbrandend.\n• **Onderzeeërs (U-boten)** — Duitsers torpedeerden schepen.\n\n**Grote slagen**:\n• **Verdun** (1916) — 10 maanden, ~700.000 doden + gewonden.\n• **Somme** (1916) — eerste dag: 60.000 Britten dood/gewond. Totaal ~1 miljoen slachtoffers.\n• **Passchendaele** (1917) — bekend om verschrikkelijke modder.\n\n**Oostfront**:\nDuitsland tegen Rusland. Meer beweging, minder loopgraven. Rusland werd **uitgeput** + **revolutie 1917** *(zie hieronder)*.\n\n**Russische Revolutie 1917**:\n• Honger + oorlogsleed.\n• **Februari-revolutie**: tsaar Nicolaas II afgezet.\n• **Oktober-revolutie**: bolsjewieken *(communisten onder Lenin)* nemen macht.\n• **Vrede van Brest-Litovsk** (maart 1918): Rusland uit oorlog.\n\n**VS doen mee 1917**:\nDuitse U-boten zonken VS-schepen. Op **6 april 1917** verklaarden VS Duitsland oorlog. Verse Amerikaanse troepen + grondstoffen kantelden balans.\n\n**Belangrijke termen**:\n• **Loopgraaf** = sloot waarin soldaten schuilden.\n• **Niemandsland** = gebied tussen 2 vijandelijke loopgraven.\n• **Gifgas** = chemisch wapen, eerst gebruikt 1915 bij Ieper.\n• **Tank** = gepantserd voertuig op rupsen, eerste keer 1916.\n• **Rode Baron** = Duitse vlieger Manfred von Richthofen — 80 luchtoverwinningen.",
    checks: [
      {
        q: "Wat is een **loopgraaf**?",
        options: ["Sloot in de grond waar soldaten schuilden", "Wapen", "Voertuig", "Vredesplek"],
        answer: 0,
        wrongHints: [null, "Geen wapen.", "Geen voertuig.", "Geen vrede — middenin oorlog."],
      },
      {
        q: "Welk **nieuw wapen** werd in WO1 voor het eerst gebruikt?",
        options: ["Tank (1916)", "Pistool", "Kanon", "Zwaard"],
        answer: 0,
        wrongHints: [null, "Bestond al lang.", "Bestond al lang.", "Bestond al lang."],
      },
      {
        q: "Welk **gif** werd eerst gebruikt **bij Ieper (1915)**?",
        options: ["Chloorgas", "Sarin", "Mosterdgas", "Pepperspray"],
        answer: 0,
        wrongHints: [null, "Sarin was later (Tweede Wereldoorlog).", "Mosterdgas kwam ook in WO1 maar later.", "Niet WO1."],
      },
      {
        q: "Wanneer deden de **VS mee** aan WO1?",
        options: ["April 1917", "Augustus 1914", "December 1916", "November 1918"],
        answer: 0,
        wrongHints: [null, "VS deed nog niet mee.", "VS deed nog niet mee.", "Einde oorlog."],
      },
    ],
  },

  // STAP 4: Nederland neutraal
  {
    title: "Nederland — neutraal maar geraakt",
    explanation:
      "**Nederland was neutraal** in WO1 *(deed niet mee)*. Dat was bewuste politiek.\n\n**Waarom neutraal?**\n• Nederland was klein, geen leger om mee te doen.\n• Koningin **Wilhelmina** wilde neutraliteit handhaven.\n• Beide kanten *(Duitsland en Engeland)* respecteerden NL als 'buffer' + handelspartner.\n• Anders dan **België** dat WEL werd binnengevallen *(door Schlieffenplan)*.\n\n**Maar Nederland werd wél geraakt**:\n\n**1. Vluchtelingen**\n• **~1 miljoen Belgische vluchtelingen** kwamen naar Nederland *(oktober 1914)*.\n• Vooral bij val van Antwerpen.\n• In NL: spontane opvang in alle steden, kampen *(bv. Zeist, Gouda)*.\n• Meeste keerden binnen jaar terug.\n\n**2. Honger en distributie**\n• Britse blokkade van Duitsland → NL kon minder importeren.\n• **Voedselbonnen** ingevoerd voor brood, vlees, suiker, boter.\n• 's Winters 1916-1918: voedseltekorten, vooral in grote steden.\n• **Aardappeloproer Amsterdam** (juli 1917) — vrouwen plunderden boten met aardappels.\n\n**3. Mobilisatie**\n• Nederlandse leger werd **gemobiliseerd** *(opgeroepen)* van 1914-1918.\n• 200.000-400.000 Nederlandse soldaten in de loopgraven aan de Belgische grens.\n• Wachten en wachten — geen aanval kwam.\n• Veel verveling, drinken, ruzie.\n\n**4. Industrie en handel**\n• Sommige Nederlandse bedrijven verdienden veel aan handel met beide kanten.\n• Wapens, voedsel, grondstoffen.\n• Tegelijkertijd: schepen vergaan door Duitse U-boten *(7 NL-vrachtschepen alleen al in 1917)*.\n\n**5. Vlieg-incidenten**\n• Geallieerde + Duitse vliegtuigen kwamen soms 'per ongeluk' Nederland binnen.\n• Sommige stortten neer, piloten werden geïnterneerd.\n\n**Wilhelm II in NL na oorlog**:\nDe **Duitse keizer Wilhelm II** vluchtte naar **Nederland** in november 1918 *(na verlies oorlog)*. Bleef in **Doorn** wonen tot zijn dood in 1941. Nederland weigerde hem uit te leveren aan geallieerden voor berechting.\n\n**Cito-feitje**:\nDe **'Vluchtoord Uden'** + Zeist + Roosendaal + Gouda waren grote Belgische vluchtelingenkampen. Nu nog historische monumenten + musea.",
    checks: [
      {
        q: "Was **Nederland in oorlog** in WO1?",
        options: ["Nee — neutraal", "Ja — met Duitsland", "Ja — met Engeland", "Onbekend"],
        answer: 0,
        wrongHints: [null, "Niet — neutraal.", "Niet — neutraal.", "Wel bekend."],
      },
      {
        q: "Hoeveel **Belgische vluchtelingen** kwamen naar NL?",
        options: ["~1 miljoen", "~10.000", "~100", "~10 miljoen"],
        answer: 0,
        wrongHints: [null, "Veel meer.", "Veel meer.", "Te veel — meer dan totaal België-bevolking."],
      },
      {
        q: "Welk **oproer** brak uit in juli 1917?",
        options: ["Aardappeloproer Amsterdam", "Bietoproer", "Brood oproer Rotterdam", "Kolen oproer Den Haag"],
        answer: 0,
        wrongHints: [null, "Niet zo bekend.", "Niet zo bekend.", "Niet zo bekend."],
      },
      {
        q: "Wie vluchtte na verlies oorlog naar **Doorn (NL)**?",
        options: ["Duitse keizer Wilhelm II", "Lenin", "Frans Ferdinand", "Hitler"],
        answer: 0,
        wrongHints: [null, "Was in Rusland.", "Was al doodgeschoten.", "Veel later — WO2."],
      },
    ],
  },

  // STAP 5: Einde + Versailles
  {
    title: "Einde + Verdrag van Versailles",
    explanation:
      "Op **11 november 1918** om **11 uur 's morgens** stopte de oorlog. **Wapenstilstand** ondertekend in een trein bij **Compiègne** *(Frankrijk)*.\n\n**Waarom verloor Duitsland?**\n• **Russische uitvallen** = troepen omgooien naar Westen verlies.\n• **VS deden mee** vanaf 1917 — verse troepen + middelen.\n• Honger in Duitsland zelf *(Engelse blokkade)*.\n• Muiterij in Duitse marine.\n• **Duitse revolutie** *(november 1918)* — keizer Wilhelm II vluchtte naar NL.\n• Duitse regering wilde wapenstilstand.\n\n**Doden**: ongeveer:\n• **9 miljoen soldaten** gesneuveld.\n• **7 miljoen burgers** doodgegaan *(meest door honger + griep + ziekte)*.\n• Totaal **~17 miljoen doden**.\n• Plus de **Spaanse griep** *(1918-1920)*: 50-100 miljoen doden wereldwijd, deels door verzwakte oorlog-bevolking.\n\n**Verdrag van Versailles (28 juni 1919)**:\nVredesverdrag — uitgaande van de overwinnaars *(Frankrijk + Engeland + VS + Italië)*.\n\n**Wat moest Duitsland?**\n1. **Schuld erkennen** — clausule dat Duitsland alleen schuldig was aan de oorlog.\n2. **Herstelbetalingen** — enorm bedrag aan geallieerden *(132 miljard goudmark)*.\n3. **Verlies grondgebied** — Elzas-Lotharingen terug aan Frankrijk, koloniën weg.\n4. **Beperkt leger** — max 100.000 soldaten, geen tanks, geen vliegtuigen, geen U-boten.\n5. **Rijnland gedemilitariseerd** — geen Duitse troepen vlak bij Frankrijk.\n\n**Duitsland was woedend**:\n• Voelde verdrag als **'diktat'** *(opgelegd, niet onderhandeld)*.\n• Geen Duits gezant bij de eindverdragen.\n• Hyperinflatie + werkloosheid in jaren '20.\n• **Voedingsbodem voor extremisme** → Hitler nazi-partij in jaren '20-30.\n\n**Volkenbond**:\n• Opgericht **1920** — eerste poging tot internationale samenwerking voor vrede.\n• Bedacht door VS-president **Wilson**.\n• Maar: VS zelf deed niet mee *(Senaat weigerde)*.\n• Verzwakt door afwezigheid grote machten.\n• Voorloper van **VN** *(1945)*.\n\n**Nieuwe landen na WO1**:\nGrote rijken vallen uiteen:\n• **Oostenrijk-Hongarije** → Oostenrijk, Hongarije, Tsjechoslowakije, Joegoslavië.\n• **Ottomaanse Rijk** → Turkije + Frans/Brits-bestuurd Midden-Oosten *(latere Israël/Palestina, Syrië, Irak, Libanon)*.\n• **Russische Rijk** → Sovjet-Unie.\n• **Duitse Rijk** → Weimar-republiek.\n\nVeel huidige problemen in Midden-Oosten + Balkan komen voort uit deze grenslijnen.\n\n**Cito-feitje**:\n*'De oorlog die alle oorlogen moest beëindigen'* *(H.G. Wells)*. **Twintig jaar later** brak WO2 uit. Versailles was te streng — voedingsbodem voor wraak.",
    checks: [
      {
        q: "Wanneer eindigde **WO1**?",
        options: ["11 november 1918", "1 september 1939", "8 mei 1945", "28 juni 1919"],
        answer: 0,
        wrongHints: [null, "Begin WO2.", "Einde WO2.", "Verdrag van Versailles — komt later."],
      },
      {
        q: "Hoeveel **doden** ongeveer in WO1?",
        options: ["~17 miljoen", "~1 miljoen", "~50 miljoen", "~100.000"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Dat is WO2-totaal.", "Te weinig."],
      },
      {
        q: "Wat moest Duitsland in **Verdrag van Versailles**?",
        options: ["Schuld erkennen + herstelbetalen + leger inkrimpen", "Helemaal niet veel", "Helft van land afstaan", "Toetreden tot Frankrijk"],
        answer: 0,
        wrongHints: [null, "Wél veel.", "Niet de helft.", "Niet toetreden."],
      },
      {
        q: "Welk **rijk viel uiteen** na WO1?",
        options: ["Oostenrijk-Hongarije én Ottomaanse Rijk én Russisch", "Alleen Russisch", "Alleen Duitsland", "Geen"],
        answer: 0,
        wrongHints: [null, "Niet alleen Rusland.", "Duitsland bleef bestaan (in andere vorm).", "Wel — meerdere."],
      },
    ],
  },

  // STAP 6: Eind-mix
  {
    title: "Eind-opdracht — WO1 mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: oorzaken, Sarajevo, loopgraven, NL neutraal, Versailles.\n\nVeel succes!",
    checks: [
      {
        q: "Welke 4 letters van **MAIN-oorzaken**?",
        options: ["Militarisme + Allianties + Imperialisme + Nationalisme", "Macht + Antisemitisme + Inflatie + Naties", "Marine + Atlas + Industrie + Noord-Europa", "Marshall + Arabieren + Italië + Nederland"],
        answer: 0,
        wrongHints: [null, "Niet MAIN-letters.", "Niet de 4.", "Niet."],
      },
      {
        q: "Wie werd vermoord op **28 juni 1914**?",
        options: ["Aartshertog Frans Ferdinand", "Keizer Wilhelm II", "Tsaar Nicolaas", "Hitler"],
        answer: 0,
        wrongHints: [null, "Vluchtte naar NL na oorlog.", "Werd later vermoord.", "Veel later."],
      },
      {
        q: "Wat is een **loopgraaf**?",
        options: ["Sloot in grond voor soldaten", "Wapen", "Voertuig", "Vredesplek"],
        answer: 0,
        wrongHints: [null, "Geen wapen.", "Geen voertuig.", "Geen vrede."],
      },
      {
        q: "Welk **gas** werd eerst gebruikt in **Ieper 1915**?",
        options: ["Chloorgas", "Mosterdgas", "Sarin", "Lachgas"],
        answer: 0,
        wrongHints: [null, "Wel WO1 maar later.", "Niet WO1.", "Niet wapen."],
      },
      {
        q: "Wanneer eindigde de **wapenstilstand**?",
        options: ["11/11/1918 om 11u", "12/12/1918 om 12u", "1/1/1919", "28/6/1919"],
        answer: 0,
        wrongHints: [null, "Bestaat niet.", "Niet wapenstilstand.", "Verdrag van Versailles — later."],
      },
      {
        q: "Welke **NL koningin** hield Nederland neutraal?",
        options: ["Wilhelmina", "Juliana", "Beatrix", "Máxima"],
        answer: 0,
        wrongHints: [null, "Was na haar.", "Was kleindochter.", "Geen koningin."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const wereldoorlog1Geschiedenis = {
  id: "wereldoorlog1-geschiedenis",
  title: "Eerste Wereldoorlog 1914-1918 (klas 2-3)",
  emoji: "💥",
  level: "klas2-3",
  subject: "geschiedenis",
  referentieNiveau: "2F",
  sloThema: "Geschiedenis Europa — Eerste Wereldoorlog",
  prerequisites: [
    { id: "tijdvakken-geschiedenis", title: "Tijdvakken-overzicht", niveau: "2F" },
    { id: "franse-revolutie-geschiedenis", title: "Franse Revolutie + Napoleon", niveau: "2F" },
  ],
  intro:
    "Eerste Wereldoorlog voor klas 2-3 — MAIN-oorzaken, moord Frans Ferdinand 1914 + Schlieffenplan, loopgravenoorlog Westfront, Nederland neutraal (1M Belgische vluchtelingen, aardappeloproer, keizer Wilhelm II naar Doorn), 11-11-1918 wapenstilstand, Verdrag van Versailles. ~15 min.",
  triggerKeywords: [
    "wereldoorlog 1", "WO1", "Eerste Wereldoorlog",
    "Frans Ferdinand", "Sarajevo", "Schlieffenplan",
    "loopgraven", "Verdun", "Somme", "Ieper", "chloorgas",
    "Nederland neutraal", "Wilhelmina", "aardappeloproer",
    "wapenstilstand", "Verdrag van Versailles",
  ],
  chapters,
  steps,
};

export default wereldoorlog1Geschiedenis;
