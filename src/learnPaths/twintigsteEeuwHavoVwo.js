// Leerpad: 20e eeuw — Interbellum + WO2 + Koude Oorlog — HAVO/VWO Geschiedenis
// Eindexamen-CSE-thema: Tijdvak 9-10. Interbellum → 1945 → 1989.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  fascism: "#8d6e63",
  comm: "#ef5350",
  dem: "#42a5f5",
  koudeoorlog: "#ab47bc",
  hl: "#ffd54f",
};

const stepEmojis = ["📉", "⚔️", "🕊️", "🧱", "🏆"];

const chapters = [
  { letter: "A", title: "Interbellum (1918-1939)", emoji: "📉", from: 0, to: 0 },
  { letter: "B", title: "WO2 (1939-1945)", emoji: "⚔️", from: 1, to: 1 },
  { letter: "C", title: "Koude Oorlog (1945-1991)", emoji: "🕊️", from: 2, to: 2 },
  { letter: "D", title: "Einde Koude Oorlog + nasleep", emoji: "🧱", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Interbellum ───────────────────────────────────────
  {
    title: "Interbellum (1918-1939) — tussen twee oorlogen",
    explanation:
      "**Interbellum** = periode tussen WO1 (1914-18) en WO2 (1939-45). 21 jaar van onrust, economische crisis, opkomst dictaturen.\n\n**Direct na WO1**:\n• **Verdrag van Versailles 1919**: Duitsland zware vrede:\n  - Verlies grondgebied (Elzas-Lotharingen aan FR, deel aan PL).\n  - Schadevergoeding (132 miljard goudmark — onbetaalbaar).\n  - Beperking leger (100.000 man).\n  - 'Oorlogsschuld-clausule' (artikel 231) — DE alleen schuldig.\n• Vernederend voor Duitsers — voedde later wraakgevoelens.\n• Nieuwe staten: Polen, Tsjechoslowakije, Joegoslavië, Oostenrijk, Hongarije.\n• Russische Revolutie 1917: tsaar weg → bolsjewieken (Lenin) → Sovjet-Unie.\n• **Volkenbond** (League of Nations) opgericht 1920 — VS deed niet mee (Senaat weigerde).\n\n**Russische Revolutie + Sovjet-Unie**:\n• Februari 1917: tsaar Nicolaas II afgezet, voorlopige regering.\n• Oktober 1917: bolsjewieken o.l.v. **Lenin** grijpen macht.\n• Burgeroorlog 1918-21: bolsjewieken (rood) vs witten.\n• 1922: Sovjet-Unie (USSR) gevormd.\n• 1924: Lenin sterft.\n• Machtsstrijd → **Stalin** wint van Trotski.\n• Stalin (1928-53): collectivisatie landbouw → miljoenen doden (Holodomor Oekraïne 1932-33). Industrialisatie. **Grote Zuivering** 1936-38: terreur tegen vermeende vijanden. Goelag-systeem.\n\n**Jaren '20 — 'Roaring Twenties'** (VS + West):\n• Economische groei VS.\n• Massacultuur: jazz, dans, auto's, radio.\n• Vrouwenkiesrecht: NL 1919 (Aletta Jacobs), VS 1920, UK 1928 (volledig).\n• Vrouwen-emancipatie: korte rokken, kort haar, drinken in cafés.\n• Crisis 1929 maakte einde aan boom.\n\n**Beurskrach 1929 + Depressie**:\n• **24-29 oktober 1929 'Zwarte Donderdag'**: New York-beurs ineen.\n• **Grote Depressie** wereldwijd 1929-1939:\n  - Bankfaillissementen.\n  - Werkloosheid VS: ~25%. DE: ~30%. NL: ~25%.\n  - Armoede, soeplijnen.\n• **New Deal** (1933) onder president **Franklin D. Roosevelt** (VS): overheidsuitgaven + werkgelegenheid (Tennessee Valley Authority, etc.). Keynesiaans beleid avant-la-lettre.\n• Europa: NL kabinet-Colijn bezuinigt → verlengt depressie.\n\n**Opkomst dictaturen**:\n\n**Fascisme Italië** (1922):\n• **Benito Mussolini** met Zwarthemden-mars op Rome.\n• Koning benoemt hem premier → dictator.\n• 'Fascio' = bundel takken (Romeinse symbool).\n• Anti-democratisch, anti-communistisch, nationalistisch, corporatistisch.\n\n**Nationaal-socialisme Duitsland** (1933):\n• **Adolf Hitler** + NSDAP groeien in jaren '20-'30 door crisis + Versailles-haat.\n• Misglukte putsch München 1923 → gevangenis → *Mein Kampf*.\n• 30 januari 1933: rijkskanselier benoemd door president Hindenburg.\n• Rijksdagbrand februari 1933 → noodtoestand → eind democratie.\n• Concentratiekampen: Dachau 1933 al.\n• 1934 'Nacht van de Lange Messen' — concurrenten geliquideerd.\n• 1935 Neurenberger Rassenwetten — Joden tweederangs burger.\n• 1938 Anschluss Oostenrijk (annexatie).\n• 1938 Reichskristallnacht (november) — pogrom tegen Joden.\n• 1938 Verdrag van München — Tsjechoslowakije moest Sudetenland afstaan ('appeasement' UK/FR).\n• 1939 inval Polen (1 sept) → WO2.\n\n**Spanje 1936-39**:\n• **Spaanse Burgeroorlog**: Franco's fascisten vs republikeinen.\n• Internationale brigaden (waaronder Hemingway).\n• DE + IT steunden Franco met luchtmacht (oefen-grond).\n• Picasso's *Guernica* (bombardement burgerstad).\n• 1939 Franco wint — dictatuur tot 1975.\n\n**Japan**:\n• Militaristische regering jaren '30.\n• 1931 inval Mantsjoerije.\n• 1937 inval China — 'Bloedbad Nanking' (~200.000 doden).\n• Bondgenoot As-mogendheden (Italië + DE + JP) → WO2 in Azië.\n\n**Internationale spanningen**:\n• Volkenbond zwak (geen VS, geen RU eerst).\n• Appeasement-beleid UK + FR onder Neville Chamberlain.\n• Stalin-Hitler-pact (Molotov-Ribbentrop) 23 aug 1939: geheime verdeling Polen + Oost-Europa.\n• 1 sept 1939: DE valt Polen binnen → UK + FR verklaren oorlog → WO2.",
    checks: [
      {
        q: "**Verdrag van Versailles 1919**: wat bepaalde 'oorlogsschuld-clausule' (art 231)?",
        options: ["Duitsland is alleen schuldig aan WO1","Frankrijk schuldig","Geen oorlog meer","Schadevergoeding voor VS"],
        answer: 0,
        wrongHints: [null, "Niet — niet bedoeling.", "Niet relevant.", "Niet primair."],
        uitlegPad: {
          stappen: [{ titel: "Allein-schuld DE", tekst: "**Artikel 231 Versailles**: 'Duitsland is alleen verantwoordelijk voor WO1 + alle schade'. Basis voor schadevergoeding (132 mld). Voor Duitsers vernederend + economisch verlammend. Voedde nationalistische haat + voorbereidende slogan voor Hitler ('Dolkstoot-legende')." }],
          theorie: "Cito-favoriet: leg uit waarom Versailles bijdroeg aan WO2. Antwoord: vernedering + economische ellende → Hitler-aanhang.",
          niveaus: { basis: "DE alleen schuldig. A.", simpeler: "Art 231 = DE schuld = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wanneer **Beurskrach Wall Street**?",
        options: ["Oktober 1929","Juni 1914","September 1939","Oktober 1917"],
        answer: 0,
        wrongHints: [null, "Niet — WO1.", "Niet — WO2.", "Niet — Russ. Revolutie."],
        uitlegPad: {
          stappen: [{ titel: "Zwarte donderdag", tekst: "**24 oktober 1929 'Zwarte Donderdag'** + dagen daarna (29 okt 'Black Tuesday'): New York-beurs ineen. Begin **Grote Depressie** 1929-1939 wereldwijd. Werkloosheid VS naar 25%, DE 30%, NL 25%." }],
          niveaus: { basis: "Okt 1929. A.", simpeler: "1929 krach = A.", nogSimpeler: "1929 = A." },
        },
      },
      {
        q: "Wie was **Stalin's voorganger** in Sovjet-Unie?",
        options: ["Lenin","Trotski","Tsaar Nicolaas","Khrushchev"],
        answer: 0,
        wrongHints: [null, "Niet — Stalin's rivaal.", "Tsaar afgezet 1917.", "Veel later."],
        uitlegPad: {
          stappen: [{ titel: "Lenin 1917-24", tekst: "**Lenin** (Vladimir Iljitsj) leidde bolsjewieken 1917-coup + Sovjet-Unie 1922. Sterft 1924. Machtsstrijd met **Trotski**. **Stalin** wint (1928), Trotski verbannen + later vermoord (Mexico 1940)." }],
          niveaus: { basis: "Lenin. A.", simpeler: "Vóór Stalin = Lenin = A.", nogSimpeler: "Lenin = A." },
        },
      },
      {
        q: "Hitler werd **rijkskanselier** op:",
        options: ["30 januari 1933","9 november 1923","1 september 1939","8 mei 1945"],
        answer: 0,
        wrongHints: [null, "Niet — Mislukte München-putsch.", "Niet — inval Polen (WO2-start).", "Niet — einde WO2."],
        uitlegPad: {
          stappen: [{ titel: "Machtsovername", tekst: "**30 januari 1933**: president **Hindenburg** benoemt Hitler tot **rijkskanselier**. Binnen weken: Rijksdagbrand (feb) → Noodverordening → eind democratie → Dachau-kamp (maart). Snelle Gleichschaltung." }],
          niveaus: { basis: "30 jan 1933. A.", simpeler: "1933 Hitler = A.", nogSimpeler: "1933 = A." },
        },
      },
      {
        q: "**Stalin-Hitler-pact (Molotov-Ribbentrop)** 1939 betekende:",
        options: ["Niet-aanvalsverdrag + geheime verdeling Oost-Europa","Direct verbond","Oorlog tegen elkaar","Vredesakkoord"],
        answer: 0,
        wrongHints: [null, "Niet — beperkter.", "Tegenovergesteld.", "Niet — beperkt."],
        uitlegPad: {
          stappen: [{ titel: "23 augustus 1939", tekst: "**Molotov-Ribbentrop-pact** (23 aug 1939): niet-aanvalsverdrag DE + USSR. **Geheime bijlage**: verdeling Polen + Baltische staten in invloedssferen. 1 sept DE valt PL binnen, RU 17 sept ook → WO2. In 1941 valt Hitler USSR aan ondanks pact." }],
          niveaus: { basis: "Niet-aanval + verdeel. A.", simpeler: "M-R = niet-aanval+verdelen = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. WO2 ────────────────────────────────────────────────
  {
    title: "Tweede Wereldoorlog (1939-1945)",
    explanation:
      "**Tweede Wereldoorlog** = grootste oorlog in geschiedenis. ~60-80 miljoen doden wereldwijd. Twee theaters: Europa + Pacific.\n\n**Europa**:\n\n**Blitzkrieg 1939-41**:\n• Sept 1939: DE valt Polen binnen (snelle overwinning).\n• 1940 'voorjaarsblitzkrieg':\n  - April: Denemarken + Noorwegen.\n  - **10 mei 1940: invasie NL + BE + LU + FR**.\n  - **Bombardement Rotterdam 14 mei**: ~800 doden + binnenstad weg. NL capituleert.\n  - 22 juni: Frankrijk capituleert. Charles de Gaulle leidt 'Vrij Frans' verzet vanuit Londen.\n• 1940-41: Slag om Engeland (Battle of Britain) — RAF wint van Luftwaffe.\n• 1941 inval Joegoslavië + Griekenland.\n\n**Operatie Barbarossa 1941**:\n• 22 juni 1941: DE valt USSR binnen.\n• Snelle vooruitgang eerst, maar Moskou houdt stand winter 1941-42.\n• **Slag bij Stalingrad** (jul 1942-feb 1943): kantelpunt. DE-leger gehavend, Stalingrad heroverd door RU.\n• Vanaf 1943: Rode Leger drijft DE-leger terug.\n• 1944-45 RU bevrijdt Oost-Europa.\n\n**West-Europa 1944-45**:\n• **D-Day 6 juni 1944**: geallieerden landen Normandië (Eisenhower, Montgomery).\n• Bevrijding FR (Parijs aug 1944).\n• Septembre 1944: 'Mad Tuesday' — geallieerden in NL-Z, Eindhoven bevrijd.\n• **Operatie Market Garden** (Arnhem): 'a bridge too far' — mislukt.\n• Winter 1944-45 hongerwinter Noord-NL — ~20.000 doden.\n• Slag in Ardennen dec 1944 — laatste DE-tegenaanval.\n• 5 mei 1945: NL volledig bevrijd.\n• 7-8 mei 1945: DE capituleert.\n\n**Holocaust / Shoah**:\n• Nazi's systematisch ~6 miljoen Joden vermoord.\n• Ook ~5 miljoen anderen: Roma/Sinti (~250.000), Polen, Sovjet-krijgsgevangenen, homosexuelen, mensen met handicap, communisten, getuigen van Jehova.\n• Stappen:\n  - 1933-39: discriminatie + segregatie + Kristallnacht 1938.\n  - 1939-41: ghetto's in Oost-Europa.\n  - 1941: massa-executies door Einsatzgruppen in USSR.\n  - 1942: **Wannsee-Conferentie** (Berlin, jan): 'Endlösung' = vernietigingskampen.\n  - **Auschwitz-Birkenau, Treblinka, Sobibor, Belzec**: gaskamers.\n  - 1945: bevrijding kampen — eerste beelden schokken wereld.\n\n**Nederland onder bezetting**:\n• 1940-45 Duitse bezetting.\n• **Anne Frank** + familie ondergedoken Achterhuis Prinsengracht Amsterdam 1942-1944. Opgepakt aug 1944. Anne sterft Bergen-Belsen feb/maart 1945, kort voor bevrijding.\n• ~104.000 NL-Joden vermoord van ~140.000 (~75%) — hoogste % West-Europa.\n• **Verzet**: pers (Vrij Nederland), spionage, hulp aan onderduikers, sabotage.\n• Februari-staking 1941 Amsterdam tegen Joden-vervolging.\n• Collaboratie: NSB (Anton Mussert), SS-vrijwilligers.\n\n**Pacific**:\n• 7 dec 1941: Japan valt **Pearl Harbor** (Hawaï) aan → VS in oorlog.\n• Japan veroverde Filipijnen, Indonesië (NL-koloniaal), Singapore, deel China.\n• **NL-Indië 1942-45**: Japanse bezetting. NL-burgers in interneringskampen (Jappenkampen). Indonesische beweging gebruikt om koloniale macht uit te dagen.\n• 1942 **Slag bij Midway**: VS keert tij — VS rukt op via 'island hopping'.\n• 1945: bombardementen Tokio + andere Japanse steden.\n• **6 augustus 1945: atoombom Hiroshima** (~140.000 doden).\n• **9 augustus 1945: atoombom Nagasaki** (~70.000 doden).\n• **15 augustus 1945: Japan capituleert**.\n• 2 september 1945: officiële capitulatie op USS Missouri.\n\n**Belangrijke leiders WO2**:\n• **Adolf Hitler** (DE, zelfmoord 30 april 1945 bunker Berlijn).\n• **Benito Mussolini** (IT, geëxecuteerd door partizanen 28 april 1945).\n• **Hideki Tojo** (Japan premier, opgehangen 1948).\n• **Franklin D. Roosevelt** (VS, sterft 12 april 1945, voor einde).\n• **Harry Truman** (VS na FDR — besloot atoombom).\n• **Winston Churchill** (UK premier 1940-45).\n• **Charles de Gaulle** (Vrij FR).\n• **Stalin** (USSR).\n• **Chiang Kai-shek** (China).\n\n**Gevolgen WO2**:\n• ~60-80 miljoen doden (USSR alleen ~26-27 mln, China ~15 mln).\n• Europa kapot — Marshall-Plan VS voor wederopbouw.\n• **VN opgericht 1945** (San Francisco).\n• Universele Verklaring Rechten Mens 1948.\n• Neurenberg-processen 1945-46: Nazi-leiders berecht.\n• Tokyo-processen Japan.\n• Holocaust = unicum, 'nooit meer'.\n• Begin **Koude Oorlog** — verdeeldheid in geallieerden.\n• Indonesië roept onafhankelijkheid uit 17 aug 1945 (door Soekarno) — begin dekolonisatie.\n• Kernwapens-tijdperk.",
    checks: [
      {
        q: "Wanneer **bombardement Rotterdam**?",
        options: ["14 mei 1940","6 juni 1944","Hongerwinter 1944","9 nov 1989"],
        answer: 0,
        wrongHints: [null, "Niet — D-Day.", "Niet — andere periode.", "Niet — val muur."],
        uitlegPad: {
          stappen: [{ titel: "Start NL-bezetting", tekst: "**14 mei 1940**: Duitse Luftwaffe bombardeert Rotterdam centrum. ~800 doden, binnenstad verwoest. Dezelfde dag dreigt DE met bombardement Utrecht → NL capituleert. Begin 5 jaar bezetting." }],
          niveaus: { basis: "14 mei 1940. A.", simpeler: "Bombardement = 14-5-40 = A.", nogSimpeler: "1940 = A." },
        },
      },
      {
        q: "Wanneer **D-Day**?",
        options: ["6 juni 1944","6 augustus 1945","5 mei 1945","1 sept 1939"],
        answer: 0,
        wrongHints: [null, "Niet — Hiroshima.", "Niet — bevrijding NL.", "Niet — begin WO2."],
        uitlegPad: {
          stappen: [{ titel: "Operation Overlord", tekst: "**6 juni 1944 = D-Day**: geallieerden (UK + VS + CAN + Vrij FR) landen Normandië, NW-Frankrijk. ~150.000 mannen eerste dag. Eisenhower leidde. Begin bevrijding West-Europa." }],
          niveaus: { basis: "6 juni 1944. A.", simpeler: "D-Day = 6-6-44 = A.", nogSimpeler: "1944 = A." },
        },
      },
      {
        q: "Welke gebeurtenis bracht **VS in WO2**?",
        options: ["Pearl Harbor 7 dec 1941","Stalingrad","D-Day","Holocaust"],
        answer: 0,
        wrongHints: [null, "Niet — al in oorlog.", "Niet — al in oorlog.", "Niet — bekend later."],
        uitlegPad: {
          stappen: [{ titel: "Japanse verrassingsaanval", tekst: "**7 december 1941**: Japan valt **Pearl Harbor** (VS-marinebasis Hawaï) aan. 2.400 doden. Volgende dag: VS verklaart oorlog aan Japan. Drie dagen later: DE + IT verklaren oorlog aan VS (As-pact). VS officieel in WO2 in beide theaters." }],
          theorie: "FDR-citaat: 'A date which will live in infamy'.",
          niveaus: { basis: "Pearl Harbor. A.", simpeler: "1941 Pearl Harbor = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat besloot de **Wannsee-Conferentie** (jan 1942)?",
        options: ["Systematische uitroeiing Joden (Endlösung)","Inval Sovjet-Unie","Capitulatie","Vrede"],
        answer: 0,
        wrongHints: [null, "Was al 1941.", "Niet relevant.", "Niet — opbouw oorlog."],
        uitlegPad: {
          stappen: [{ titel: "Industrieel moorden", tekst: "**Wannsee-Conferentie** 20 jan 1942 (Berlin-villa): 15 nazi-functionarissen onder Reinhard Heydrich beslissen over **'Endlösung der Judenfrage'** = systematische vernietiging van Joden in heel Europa. Operationeel via vernietigingskampen (Auschwitz-Birkenau, Treblinka, Sobibor). 11 mln Joden in Europa, doel: alle vermoord. ~6 mln daadwerkelijk vermoord." }],
          niveaus: { basis: "Endlösung. A.", simpeler: "Wannsee = uitroeiing = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel % NL-Joden werd vermoord in Holocaust?",
        options: ["~75%","~10%","~25%","~95%"],
        answer: 0,
        wrongHints: [null, "Veel te laag.", "Veel te laag.", "Niet helemaal — nog hoger."],
        uitlegPad: {
          stappen: [{ titel: "Tragisch hoog %", tekst: "Van ~140.000 NL-Joden werden **~104.000 vermoord (~75%)**. **Hoogste percentage West-Europa**. Redenen: efficiënte NL-administratie (registratie 1941), goede coöperatie politie, geografisch geen ontsnap mogelijk, weinig verzet eerst. Anne Frank een van velen." }],
          theorie: "Vergelijking: België 40%, Frankrijk 25%, Denemarken 1% (door succesvolle redding-actie). Cito-favoriet: 'leg uit waarom % NL hoger dan BE/DK'.",
          niveaus: { basis: "75%. A.", simpeler: "104k/140k = 75% = A.", nogSimpeler: "75 = A." },
        },
      },
    ],
  },

  // ─── C. Koude Oorlog ──────────────────────────────────────
  {
    title: "Koude Oorlog (1945-1991)",
    explanation:
      "**Koude Oorlog** = ideologische + politieke + militaire confrontatie tussen **VS (Westen)** en **Sovjet-Unie (Oost)** zonder directe oorlog. 1945-1991. Beïnvloedde hele wereld.\n\n**Oorzaken**:\n• Verschillende ideologie: kapitalisme vs communisme.\n• Stalin annexeerde Oost-Europa na bevrijding (1944-48) → 'IJzeren Gordijn' (Churchill-rede Fulton 1946).\n• VS-vrees 'rode dreiging' verspreidt.\n• Kernwapen-monopolie verdwijnt 1949 (USSR test atoombom).\n\n**Truman-doctrine (1947)**:\n• President Truman: VS helpt landen 'vrij van communisme' te blijven.\n• **Marshall-Plan**: $13 mld economische hulp West-Europa 1948-52. NL ontving ~$1 mld. Tegenwicht tegen communisme.\n\n**Verdeling Duitsland + Berlijn**:\n• 1945: 4 bezettingszones (VS/UK/FR/USSR).\n• 1949: **BRD** (West-DE) + **DDR** (Oost-DE).\n• Berlin in midden Oost — ook in 4 zones verdeeld.\n• **Berlijnse Blokkade 1948-49**: USSR sluit West-Berlin af. **Luchtbrug** VS+UK levert 1 jaar lang per vliegtuig.\n• **Bouw Muur 1961** (13 augustus): DDR bouwt Berlijnse Muur om vlucht naar West te stoppen. Symbool Koude Oorlog. ~140 mensen sterven bij vluchtpogingen.\n\n**Allianties**:\n• **NAVO** (1949): VS + Canada + West-Europese landen. NL lid sinds begin.\n• **Warschau-Pact** (1955): USSR + Oost-Europese satellieten. Reactie op DE-toelating NAVO.\n\n**Wapenwedloop**:\n• Beide blokken bouwen kernwapen-arsenalen.\n• 1952 VS waterstofbom, 1953 USSR.\n• 1957 USSR lanceert **Spoetnik** (1e satelliet) → space race.\n• 1969 VS Apollo 11 mens op Maan.\n• 1960s eind: ~30.000 kernkoppen totaal — genoeg voor 'mutual assured destruction' (MAD).\n\n**Cuba-crisis 1962**:\n• USSR plaatst raketten Cuba (90 mijl van Florida).\n• Kennedy blokkade → wereld dichtst bij kernoorlog ooit.\n• 13 dagen spanning.\n• Compromis: USSR trekt terug, VS belooft geen invasie Cuba + verwijdert raketten Turkije (geheim).\n• Daarna: 'hotline' Washington-Moskou.\n\n**Conflicten / proxy-oorlogen**:\n• **Korea-oorlog (1950-53)**: Noord-K (communistisch) valt Zuid-K binnen. VS + VN (zonder USSR die boycotte) hielpen Zuid. China hielp Noord. Wapenstilstand 1953 — nog steeds geen vrede. Demilitarized Zone (DMZ).\n• **Vietnam-oorlog (1955-75)**: VS steunde Zuid-Vietnam tegen communistische Noord (Ho Chi Minh + Vietcong). Eskalatie 1965. VS-trauma — eerste oorlog die op tv te zien was, anti-oorlogs-bewegingen. VS verloor 58.000 man. **1975 val Saigon** — VS-vluchtelingen ontvluchten per helikopter ambassade. Vietnam communistisch verenigd.\n• **Hongaarse Opstand 1956**: USSR slaat opstand neer.\n• **Praag-lente 1968**: Tsjechoslowakije probeert hervormingen ('communisme met menselijk gezicht'). USSR + Warschau-Pact troepen vallen binnen aug 1968.\n• **Afghanistan-oorlog 1979-89**: USSR steunde communistisch regime → 10 jaar oorlog tegen Mujahideen (gesteund door VS via Pakistan). USSR's 'Vietnam'. Verslagen 1989. Latere gevolgen: Taliban + Al Qaeda.\n• **Latijns-Amerika**: VS steunde rechtse dictaturen tegen linkse bewegingen (Chili 1973 Pinochet-coup, Argentinië, Brazilië, El Salvador, Nicaragua).\n• **Afrika**: dekolonisatie + Koude Oorlog vermengd. Bv. Angola, Mozambique met Cubaanse + Sovjet-Afrikaanse hulp.\n\n**Wapenbeheersing**:\n• 1963 Limited Test Ban Treaty (geen atmosferische tests).\n• 1968 Non-Proliferation Treaty (NPT) — geen verspreiding kernwapens.\n• 1972 SALT-I (Strategic Arms Limitation Talks).\n• 1979 SALT-II.\n• 1987 INF-Treaty (middellangeafstandsraketten).\n• 1991 START-I.\n\n**NL in Koude Oorlog**:\n• Loyaal NAVO-lid.\n• Plaatsing Amerikaanse kruisraketten Soesterberg/Volkel 1985 — grote protesten ('weg met die kruisraketten' demonstratie 550.000 mensen Den Haag 1983).\n• Burgemeester Den Bosch-Atomic Bunker-systeem (1970s, voor bescherming bestuurders).\n• Niet primair betrokken bij gevechten, wel diplomatiek.\n\n**Indonesische onafhankelijkheid (relevant NL)**:\n• Soekarno + Hatta riepen onafhankelijkheid uit 17 aug 1945.\n• NL probeerde koloniaal gezag te herstellen ('politionele acties' 1947 + 1948).\n• Internationale druk (vooral VS) → NL erkende onafhankelijkheid 27 dec 1949.\n• Recent: NL erkende 'spijt' 2022 voor geweld + oorlogsmisdaden in Indonesië 1945-49.",
    checks: [
      {
        q: "Wat is de **'IJzeren Gordijn'** (Churchill 1946)?",
        options: ["Symbolische scheiding tussen West + Oost-Europa","Echte muur Berlijn","Wapen","Beleid"],
        answer: 0,
        wrongHints: [null, "Specifiek — IJG is bredere term.", "Niet relevant.", "Niet term."],
        uitlegPad: {
          stappen: [{ titel: "Fulton-rede 1946", tekst: "**Winston Churchill** in Fulton, Missouri (5 maart 1946): 'From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the continent.' Beschreef ideologische scheiding tussen door USSR gedomineerd Oost-Europa + vrije West-Europa. **Berlijnse Muur 1961** later fysieke manifestatie." }],
          niveaus: { basis: "Symbolische scheiding. A.", simpeler: "IJG = Oost-West scheiding = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wanneer **Bouw Berlijnse Muur**?",
        options: ["13 augustus 1961","9 november 1989","5 mei 1945","1962"],
        answer: 0,
        wrongHints: [null, "Niet — val.", "Niet — WO2-einde.", "Niet — Cuba-crisis."],
        uitlegPad: {
          stappen: [{ titel: "Stop vlucht naar West", tekst: "**13 augustus 1961**: DDR begint Muur te bouwen om vlucht naar West-Berlin te stoppen. Tot dan: ~3 mln mensen vluchten uit DDR via Berlin (1949-61). Muur 155 km lang. **9 november 1989**: Muur valt → einde Koude Oorlog symbolisch." }],
          niveaus: { basis: "13-8-1961. A.", simpeler: "Muur 1961 = A.", nogSimpeler: "1961 = A." },
        },
      },
      {
        q: "**Cuba-crisis** vond plaats in:",
        options: ["1962","1957","1989","1979"],
        answer: 0,
        wrongHints: [null, "Niet — Spoetnik.", "Niet — Muur valt.", "Niet — Afghanistan."],
        uitlegPad: {
          stappen: [{ titel: "13 dagen oktober 1962", tekst: "**Oktober 1962, Cuba-crisis**: USSR plaatst kernraketten Cuba (90 mijl van VS-kust). Kennedy zee-blokkade. **Dichtst dat wereld ooit bij kernoorlog kwam**. Khrushchev trekt terug, VS belooft geen invasie + verwijdert geheim raketten Turkije." }],
          niveaus: { basis: "1962. A.", simpeler: "Cuba = 1962 = A.", nogSimpeler: "1962 = A." },
        },
      },
      {
        q: "**Marshall-Plan** was:",
        options: ["VS economische hulp West-Europa","Sovjet-plan","Oorlogsplan","NAVO-document"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet primair.", "Niet — apart programma."],
        uitlegPad: {
          stappen: [{ titel: "$13 mld 1948-52", tekst: "**Marshall-Plan** (officieel European Recovery Program, naar VS-minister George Marshall): VS gaf $13 mld economische hulp aan West-Europa 1948-52 voor wederopbouw na WO2. Tegelijk: tegenwicht tegen communisme. NL ontving ~$1 mld. Oost-Europa mocht niet meedoen van Stalin." }],
          niveaus: { basis: "VS hulp WEU. A.", simpeler: "Marshall = VS-hulp = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Vietnam-oorlog** eindigde in:",
        options: ["1975 (val Saigon, Noord wint)","1969 (Apollo-11)","1989","1973"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — Muur valt.", "Wapenstilstand maar oorlog ging door."],
        uitlegPad: {
          stappen: [{ titel: "Val Saigon", tekst: "**30 april 1975: val Saigon** — Noord-Vietnamese troepen veroveren Zuid-Vietnam hoofdstad. VS-vluchtelingen ontvluchten per helikopter ambassade (iconisch beeld). Vietnam communistisch verenigd. VS' eerste verloren oorlog. 58.000 VS-doden + ~3 mln Vietnamezen + Cambodja's Khmer Rouge regime gevolg." }],
          niveaus: { basis: "1975. A.", simpeler: "Vietnam = 1975 = A.", nogSimpeler: "1975 = A." },
        },
      },
    ],
  },

  // ─── D. Einde Koude Oorlog + nasleep ──────────────────────
  {
    title: "Einde Koude Oorlog + 21e eeuw-aanloop",
    explanation:
      "**Einde Koude Oorlog 1989-91** kwam relatief snel. Verschillende factoren samen.\n\n**Verzwakking USSR**:\n• **Economie** stagneerde sinds jaren '70 — communistisch systeem inefficiënt.\n• **Wapenwedloop** kostte enorm — vooral Reagan's SDI ('Star Wars') in jaren '80.\n• **Afghanistan-oorlog** (1979-89): 'Sovjet-Vietnam' verzwakte leger + moraal.\n• **Tsjernobyl-ramp 1986** (Oekraïne): toonde dysfuncties Sovjet-systeem.\n\n**Gorbatsjov-hervormingen (1985-91)**:\n• **Mikhail Gorbatsjov** wordt USSR-leider 1985.\n• **Glasnost** = openheid. Pers vrijer, dissidenten vrij, geschiedenis opnieuw bekeken.\n• **Perestrojka** = herstructurering. Beperkte marktelementen.\n• Beide bedoeld om USSR te redden — eindigde in afbraak.\n• 1989: Gorbatsjov besluit niet langer Oost-Europese broederlanden te helpen ('Brezhnev-doctrine' opgegeven).\n\n**1989 — annus mirabilis**:\n• Polen: 'Solidariteit' (Solidarność) onder **Lech Walesa** wint verkiezingen jun 1989.\n• Hongarije: opent grens met Oostenrijk → Oost-Duitsers vluchten via Hongarije naar West.\n• **9 november 1989: Berlijnse Muur valt** — woordvoerder DDR maakt foutje in persconferentie, mensen stormen muur op.\n• Roemenië: dictator Ceaucescu geëxecuteerd kerst 1989.\n• Tsjechoslowakije: 'Fluwelen Revolutie' onder Vaclav Havel — vreedzaam.\n• Bulgarije, Albanië volgen.\n\n**1990-91 — afbraak USSR**:\n• 3 okt 1990: **Duitse hereniging** — DDR sluit zich aan bij BRD onder kanselier Helmut Kohl.\n• 1990-91: Baltische landen (Estland, Letland, Litouwen) verklaren onafhankelijkheid.\n• Aug 1991: communistische coup tegen Gorbatsjov mislukt. Boris Jeltsin als 'redder van democratie'.\n• **25 december 1991**: Gorbatsjov treedt af. USSR officieel ontbonden. Vlag rode hamer-en-sikkel naar beneden, Russische vlag omhoog. 15 nieuwe staten ontstaan.\n\n**Nieuwe wereldorde 1990s**:\n• **Unipolair** moment: VS als enige supermacht (1990s).\n• **EU-uitbreiding**: Tsjechië, Hongarije, Polen, etc. lid 2004; Roemenië + Bulgarije 2007; Kroatië 2013.\n• **Euro** ingevoerd 1999/2002.\n• **Globalisering**: WTO opgericht 1995, China lid 2001.\n• **Internet** + digitale revolutie sinds ~1995.\n\n**Conflicten 1990s**:\n• **Joegoslavië-oorlogen (1991-2001)**: federatie valt uiteen, etnische zuiveringen. **Srebrenica 1995**: 8.372 moslim-mannen vermoord onder ogen Nederlands VN-battalion (Dutchbat). NL-trauma. Generaal Mladić later veroordeeld.\n• **Rwanda 1994**: Hutu-extremisten vermoorden ~800.000 Tutsi's in 100 dagen. VN inactief.\n• **Eerste Golf-Oorlog 1991**: VS leidt coalitie tegen Saddam Hussein (Iraqi-invasie Koeweit).\n\n**11 september 2001**:\n• Al Qaeda kaapt 4 vliegtuigen, vliegt twee in Twin Towers New York + één in Pentagon. ~3000 doden.\n• Begin 'War on Terror' onder president George W. Bush.\n• **Afghanistan-oorlog 2001-2021**: NATO inval om Taliban + Al Qaeda te verdrijven. Eindigde 2021 met Taliban-terugkeer.\n• **Irak-oorlog 2003-2011**: VS-VK invasie, claim van massavernietigingswapens (niet gevonden). Saddam afgezet + terechtgesteld. Destabiliseerde regio.\n\n**Recente ontwikkelingen 2010s-2020s**:\n• Klimaatcrisis als wereldagenda (Parijs-akkoord 2015).\n• Migratie-crisis Europa 2015 (Syrische oorlog).\n• Opkomst populisme: Trump VS 2016, Brexit UK 2016, Orbán Hongarije.\n• COVID-19-pandemie 2020-23.\n• **Rusland-Oekraïne-oorlog** sinds 2014 (Krim) + grootschalige inval feb 2022. EU + NAVO ondersteunen Oekraïne. Spanningen op niveau Koude Oorlog.\n• **China-VS-rivaliteit**: economische macht, technologie (chips), Taiwan-spanningen.\n• AI-revolutie + GenAI sinds 2017-2024.\n\n**Erfenis Koude Oorlog tot vandaag**:\n• **Kernwapens**: ~12.500 in wereld (vooral VS + RU).\n• **NAVO** breidde uit naar oosten (1999 PL/CZ/HU, 2004 Baltische + meer, 2023-24 Finland + Zweden).\n• **EU** als grotendeels vredelievend project. Vooral mogelijk door einde Koude Oorlog.\n• **Cybersecurity** als nieuwe oorlog-arena.\n• **Internationale orde** opnieuw onzeker: rules-based system + VN onder druk door Rusland, China, populisme.",
    checks: [
      {
        q: "Wie was de **laatste leider Sovjet-Unie**?",
        options: ["Mikhail Gorbatsjov","Boris Jeltsin","Vladimir Poetin","Joseph Stalin"],
        answer: 0,
        wrongHints: [null, "Niet — eerste Russische president na 1991.", "Veel later.", "Veel eerder."],
        uitlegPad: {
          stappen: [{ titel: "Gorbatsjov 1985-91", tekst: "**Mikhail Gorbatsjov** (1931-2022) leidde USSR 1985-91. Hervormde via **glasnost** (openheid) + **perestrojka** (herstructurering). Trad af **25 december 1991** — USSR officieel ontbonden. Nobel Vredesprijs 1990." }],
          niveaus: { basis: "Gorbatsjov. A.", simpeler: "Laatste = Gorbatsjov = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wanneer **viel Berlijnse Muur**?",
        options: ["9 november 1989","13 augustus 1961","25 december 1991","3 oktober 1990"],
        answer: 0,
        wrongHints: [null, "Niet — bouw.", "Niet — USSR-einde.", "Niet — Duitse hereniging."],
        uitlegPad: {
          stappen: [{ titel: "9 nov 1989 = Mauerfall", tekst: "**9 november 1989: Berlijnse Muur valt**. DDR-woordvoerder Schabowski maakt foutje in persconferentie ('per direct grenzen open'). Mensen stormen muur — DDR-grenswachters openen poorten. Iconisch beeld einde Koude Oorlog. **3 okt 1990**: Duitse hereniging." }],
          niveaus: { basis: "9 nov 1989. A.", simpeler: "1989 Muur valt = A.", nogSimpeler: "1989 = A." },
        },
      },
      {
        q: "Wat is **Glasnost** (Gorbatsjov)?",
        options: ["Openheid","Herstructurering","Kernwapen","Communisme"],
        answer: 0,
        wrongHints: [null, "Niet — dat is perestrojka.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Russisch 'openheid'", tekst: "**Glasnost** (гла́сность) = openheid in Russisch. Gorbatsjov's beleid 1985+: meer persvrijheid, dissidenten vrij, kritiek toegestaan, geschiedenis-her-onderzoek (Stalin-misdaden). Bedoeld om systeem te herstellen, eindigde in afbraak. Naast **perestrojka** (перестро́йка) = herstructurering (economisch)." }],
          niveaus: { basis: "Openheid. A.", simpeler: "Glasnost = openheid = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Srebrenica 1995** is NL-trauma omdat:",
        options: ["NL Dutchbat-troepen konden 8.372 moslims niet beschermen tegen Servische troepen","NL was schuldig","NL won","Geen NL betrokken"],
        answer: 0,
        wrongHints: [null, "Niet — geen actieve dader.", "Niet relevant.", "Wel — Dutchbat."],
        uitlegPad: {
          stappen: [{ titel: "Falen 'safe area'", tekst: "**Srebrenica juli 1995**: Bosnische enclave was 'VN safe area' onder bescherming van **Nederlands bataljon (Dutchbat)** (~600 lichtbewapend). Servische troepen onder generaal **Mladić** drongen door, Dutchbat kon niet stoppen → **8.372 moslim-mannen + jongens vermoord** in dagen. Grootste massamoord Europa na WO2. NL-rapport 2002 → kabinet-Kok ontslag-nemen. Mladić in 2017 levenslang ICTY. Trauma + schaamte NL." }],
          theorie: "Cito-favoriet: 'leg uit waarom Srebrenica NL-trauma'. Antwoord: NL faalde mensen te beschermen, hoewel mandaat te zwak was.",
          niveaus: { basis: "Dutchbat kon niet beschermen. A.", simpeler: "Srebrenica = NL falen = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**11 september 2001** begon:",
        options: ["War on Terror + Afghanistan-oorlog","Koude Oorlog","WO2","Vietnam-oorlog"],
        answer: 0,
        wrongHints: [null, "Niet — al eind 1991.", "Niet — 1939.", "Niet — 1955."],
        uitlegPad: {
          stappen: [{ titel: "9/11", tekst: "**11 september 2001**: Al Qaeda kaapt 4 vliegtuigen → 2 in Twin Towers New York + 1 in Pentagon + 1 neergestort PA (passagiers-actie). ~3000 doden. President Bush jr. lanceerde **War on Terror**. **Afghanistan-oorlog** start okt 2001 (Taliban + Al Qaeda). **Irak-oorlog** 2003. Beide 2 langste oorlogen VS-geschiedenis." }],
          niveaus: { basis: "War on Terror. A.", simpeler: "9/11 → War on Terror = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — 20e eeuw mix",
    explanation:
      "Mix van Interbellum + WO2 + Koude Oorlog + nasleep.\n\nVeel succes!",
    checks: [
      {
        q: "Welke gebeurtenis wordt **vaakst aangewezen als directe oorzaak WO2**?",
        options: ["Inval Polen door DE (1 sept 1939)","Beurskrach 1929","Verdrag Versailles 1919","Pearl Harbor"],
        answer: 0,
        wrongHints: [null, "Verre oorzaak.", "Verre oorzaak.", "Bracht VS erin, niet oorzaak."],
        uitlegPad: {
          stappen: [{ titel: "1 sept 1939", tekst: "**1 september 1939**: Hitler valt Polen binnen. UK + FR verklaren 3 sept oorlog → **WO2 begint officieel**. Verre oorzaken: Versailles + economische crisis + Hitler's macht. Directe trigger: inval Polen." }],
          niveaus: { basis: "Polen-inval. A.", simpeler: "1939 Polen = A.", nogSimpeler: "1939 = A." },
        },
      },
      {
        q: "Wat is **NATO**?",
        options: ["West-militaire alliantie sinds 1949","Communistisch blok","VN-onderdeel","Kerncentrale-organisatie"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet primair.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "1949 oprichting", tekst: "**NAVO / NATO** (North Atlantic Treaty Organization): militaire alliantie opgericht 1949 door VS, Canada + 10 West-Europese landen (waaronder NL). Doel: **collectieve verdediging tegen USSR-dreiging**. Artikel 5: aanval op één = aanval op allen. Nu 32 leden (Finland 2023, Zweden 2024 toegetreden door Rusland-Oekraïne)." }],
          niveaus: { basis: "Militaire alliantie. A.", simpeler: "NAVO = West-alliantie = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Korea-oorlog** (1950-53) was tussen:",
        options: ["Noord-K (communistisch) + Zuid-K (westers-geleund)","DDR + BRD","VS + Vietnam","NL + Indonesië"],
        answer: 0,
        wrongHints: [null, "Niet — andere conflict.", "Niet — andere.", "Niet — eerder."],
        uitlegPad: {
          stappen: [{ titel: "Eerste Koude-Oorlog-proxy", tekst: "**Korea-oorlog 1950-53**: communistisch **Noord-Korea** (Kim Il-sung, gesteund door China + USSR) viel pro-westers **Zuid-Korea** (gesteund door VS + VN) aan. VS-leider MacArthur. China stuurde miljoen 'vrijwilligers'. Eindigde met **wapenstilstand 1953 — geen vrede**. Demilitarized Zone (DMZ) bestaat nog. NL stuurde ook troepen." }],
          niveaus: { basis: "Noord vs Zuid Korea. A.", simpeler: "Korea = N-Z = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wanneer **NL erkende Indonesische onafhankelijkheid**?",
        options: ["27 december 1949","17 augustus 1945","5 mei 1945","1965"],
        answer: 0,
        wrongHints: [null, "Niet — uitroeping door Soekarno.", "Niet — NL-bevrijding.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Vier-jarig conflict", tekst: "**17 aug 1945**: Soekarno + Hatta riepen Republiek Indonesia uit (twee dagen na Japanse capitulatie). NL probeerde koloniaal gezag te herstellen via **politionele acties** 1947 + 1948 (eufemisme voor oorlog). Internationale druk (VS dreigde Marshall-Plan stop) → **27 dec 1949**: NL erkent Indonesische onafhankelijkheid. NL bood pas in 2005 (Bot) + uitgebreider 2022 (Rutte) excuses aan voor oorlogsmisdaden." }],
          niveaus: { basis: "27-12-1949. A.", simpeler: "1949 = NL erkent = A.", nogSimpeler: "1949 = A." },
        },
      },
      {
        q: "Tussen welke jaren liep de **Koude Oorlog**?",
        options: ["~1945-1991","1939-1945","1914-1918","2001-2021"],
        answer: 0,
        wrongHints: [null, "Niet — WO2.", "Niet — WO1.", "Niet — Afghanistan."],
        uitlegPad: {
          stappen: [{ titel: "46 jaar", tekst: "**Koude Oorlog ~1945-1991**: van einde WO2 tot ontbinding USSR. Begin niet exact bepaald (1945-47 verschillende markers). Eind: 25 december 1991 ontbinding USSR. Sommige historici: einde 1989 (Muurval), anderen 1991." }],
          niveaus: { basis: "1945-1991. A.", simpeler: "KO = 1945-91 = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const twintigsteEeuwHavoVwo = {
  id: "twintigste-eeuw-havo-vwo",
  title: "20e eeuw — Interbellum/WO2/Koude Oorlog (HAVO/VWO geschiedenis)",
  emoji: "🌍",
  level: "havo4-5-vwo",
  subject: "geschiedenis",
  referentieNiveau: "havo-vwo-CSE-geschiedenis",
  sloThema: "Geschiedenis HAVO/VWO — Tijdvakken 9-10 eindexamen",
  prerequisites: [
    { id: "tijdvakken-geschiedenis", title: "Tijdvakken", niveau: "klas1-3" },
    { id: "wereldoorlog2-geschiedenis", title: "WO2", niveau: "klas2-3" },
    { id: "wereldoorlog1-geschiedenis", title: "WO1", niveau: "klas2-3" },
    { id: "koude-oorlog-modern-po", title: "Koude Oorlog (basis)", niveau: "groep7-8" },
  ],
  intro:
    "20e eeuw HAVO/VWO geschiedenis CSE-thema. Interbellum (Versailles → Crisis 1929 → opkomst Hitler/Stalin), WO2 (Blitzkrieg + Holocaust + Pearl Harbor + Hiroshima), Koude Oorlog (IJzeren Gordijn → Cuba 1962 → Vietnam → Praag → Afghanistan), einde (Gorbatsjov + Muurval 1989 + Srebrenica + 9/11). NL-perspectief: Rotterdam 1940, hongerwinter, Anne Frank, Dutchbat 1995. ~15-20 min.",
  triggerKeywords: [
    "20e eeuw", "twintigste eeuw",
    "Interbellum",
    "Verdrag Versailles", "Volkenbond",
    "Russische Revolutie", "Lenin", "Stalin",
    "Beurskrach 1929", "Grote Depressie",
    "Roosevelt", "New Deal",
    "Mussolini", "fascisme",
    "Hitler", "NSDAP", "nazi", "rijkskanselier",
    "Spanje Franco", "Spaanse Burgeroorlog",
    "Molotov-Ribbentrop", "Stalin-Hitler-pact",
    "WO2", "Tweede Wereldoorlog",
    "Blitzkrieg", "bombardement Rotterdam",
    "D-Day", "Normandië",
    "Stalingrad",
    "Holocaust", "Shoah", "Endlösung",
    "Anne Frank", "Wannsee",
    "Auschwitz", "Treblinka",
    "Pearl Harbor", "Hiroshima", "Nagasaki",
    "atoombom",
    "hongerwinter",
    "Indonesische onafhankelijkheid", "Soekarno",
    "Koude Oorlog", "Cold War",
    "IJzeren Gordijn", "Churchill Fulton",
    "Truman-doctrine", "Marshall-Plan",
    "NAVO", "Warschau-Pact",
    "Berlijnse Muur", "Berlin Wall",
    "Cuba-crisis", "Kennedy", "Khrushchev",
    "Vietnam-oorlog", "val Saigon",
    "Korea-oorlog",
    "Praag-lente",
    "Afghanistan",
    "Gorbatsjov", "glasnost", "perestrojka",
    "Solidariteit", "Walesa",
    "Mauerfall",
    "Joegoslavië", "Srebrenica", "Dutchbat",
    "Mladić", "ICTY",
    "11 september 2001", "9/11",
    "War on Terror",
  ],
  chapters,
  steps,
};

export default twintigsteEeuwHavoVwo;
