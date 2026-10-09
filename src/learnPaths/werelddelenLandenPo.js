// Leerpad: Werelddelen + landen - groep 6-8 aardrijkskunde.
// toets-relevant topografie. 1F. 4 stappen.

const stepEmojis = ["🌍", "🌏", "🗺️", "🏆"];

const chapters = [
  { letter: "A", title: "7 werelddelen", emoji: "🌍", from: 0, to: 0 },
  { letter: "B", title: "Europa + Azië", emoji: "🌏", from: 1, to: 1 },
  { letter: "C", title: "Andere werelddelen", emoji: "🗺️", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "7 werelddelen + 5 oceanen",
    explanation:
      "**Werelddelen / continenten** = grote landmassa's op aarde.\n\nDe **7 werelddelen** *(in volgorde van groot naar klein)*:\n\n**1. Azië** *(44 mln km², 60% wereldbevolking)*:\n• Grootste werelddeel.\n• ~4,8 miljard mensen.\n• Land: Mount Everest *(hoogste berg)*, woestijnen, regenwouden.\n• Beroemde landen: China, India, Japan, Indonesië.\n\n**2. Afrika** *(30 mln km², 1,4 miljard mensen)*:\n• Wieg van mensheid *(oudste mens-fossielen)*.\n• Sahara *(grootste woestijn)*.\n• Nijl *(langste rivier)*.\n• 54 landen.\n\n**3. Noord-Amerika** *(24 mln km², 580 mln mensen)*:\n• Vooral VS + Canada + Mexico.\n• Grote rotsbergen, Niagara, woestijnen, prairies.\n\n**4. Zuid-Amerika** *(18 mln km², 430 mln mensen)*:\n• Amazone-regenwoud *(grootste ter wereld)*.\n• Andes-bergen *(2e hoogste keten)*.\n• Brazilië, Argentinië, Chili.\n\n**5. Antarctica** *(14 mln km², geen permanente bewoners)*:\n• Bevroren land om Zuidpool.\n• Tot -89°C koud.\n• Geen landen *(wetenschap-stations)*.\n• ~70% van wereld-zoetwater *(in ijs)*.\n\n**6. Europa** *(10 mln km², 750 mln mensen)*:\n• Op één na kleinste continent.\n• 50 landen.\n• Vele talen + culturen.\n• EU *(27 landen)*.\n\n**7. Oceanië / Australië** *(9 mln km², 45 mln mensen)*:\n• Kleinste werelddeel.\n• Australië + Nieuw-Zeeland + eilanden Pacific.\n\n**Geheugensteun** *(volgorde grootte)*:\n*A-A-N-Z-A-E-O* = Azië-Afrika-NoordAmerika-ZuidAmerika-Antarctica-Europa-Oceanië.\n\n**5 oceanen** *(in volgorde van groot)*:\n\n**1. Stille Oceaan / Pacific** *(165 mln km²)*: tussen Azië + Amerika. Grootste!\n**2. Atlantische Oceaan** *(106 mln km²)*: tussen Amerika + Europa/Afrika.\n**3. Indische Oceaan** *(75 mln km²)*: tussen Afrika + Azië + Australië.\n**4. Zuidelijke Oceaan** *(20 mln km²)*: rond Antarctica.\n**5. Noordelijke IJszee / Arctische Oceaan** *(14 mln km²)*: rond Noordpool.\n\n**Vergelijken**:\n• Land: 30% van aardoppervlak.\n• Water: 70%.\n• Stille Oceaan alleen al groter dan alle land samen!\n\n**Verschil tussen continent + land**:\n• **Continent** = grote landmassa.\n• **Land** = politieke eenheid met grenzen + regering.\n• 1 continent kan vele landen hebben.\n• Bv. Europa = 50 landen.\n\n**Wereldbevolking**:\n• **8,1 miljard** mensen *(2024)*.\n• Groeit nog steeds — maar trager.\n• Verwacht piek rond **10 miljard** *(2080)*.\n• Daarna langzame daling *(minder geboorten)*.\n\n**Toets-feitje**:\n**Rusland** = grootste land ter wereld qua oppervlak *(17 mln km²)*. Strekt over **11 tijdzones** — als het 12 uur 's middags is in Moskou, is het al 7 uur 's avonds in Vladivostok.",
    checks: [
      {
        q: "Hoeveel **werelddelen** leer je op een Nederlandse school?",
        options: ["7", "5", "10", "3"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "7 werelddelen (continenten)", tekst: "De wereld wordt verdeeld in **7 werelddelen**: 1) Azië, 2) Afrika, 3) Noord-Amerika, 4) Zuid-Amerika, 5) Antarctica, 6) Europa, 7) Oceanië (Australië)." },
            { titel: "Geheugentruc: A-A-N-Z-A-E-O", tekst: "Onthoud volgorde (groot → klein): **A**zië, **A**frika, **N**oord-Amerika, **Z**uid-Amerika, **A**ntarctica, **E**uropa, **O**ceanië." },
            { titel: "Of variant met 5 of 6", tekst: "Sommige scholen rekenen **Amerika** als 1 (in plaats van Noord+Zuid) of laten Antarctica weg. Op Nederlandse scholen leer je er 7." },
          ],
          woorden: [
            { woord: "werelddeel", uitleg: "Continent — groot landoppervlak (Azië, Afrika, etc.)." },
            { woord: "continent", uitleg: "Synoniem van werelddeel." },
          ],
          theorie: "Toets-feit: 7 werelddelen. Onthoud namen + ongeveer hun ligging op een wereldkaart. Vragen komen vaak over: grootste, kleinste, welke landen erin liggen.",
          voorbeelden: [
            { type: "stap", tekst: "Nederland ligt in **Europa**." },
            { type: "stap", tekst: "Rusland ligt deels in Europa, deels in Azië." },
            { type: "stap", tekst: "Egypte ligt in Afrika (boven, Noord-Afrika)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "7 werelddelen. Antarctica is helemaal aan zuidpool — bijna geen mensen wonen er." }],
          niveaus: {
            basis: "7 werelddelen: Azië, Afrika, NA, ZA, Antarctica, Europa, Oceanië.",
            simpeler: "Azië grootste, Antarctica koudste, Oceanië kleinste.",
            nogSimpeler: "7 werelddelen.",
          },
        },
      },
      {
        q: "**Grootste werelddeel**?",
        options: ["Azië", "Afrika", "Europa", "Antarctica"],
        answer: 0,
        wrongHints: [null, "Tweede.", "Klein.", "Wel groot maar niet grootst."],
      },
      {
        q: "**Grootste oceaan**?",
        options: ["Stille / Pacific", "Atlantisch", "Indisch", "Arctisch"],
        answer: 0,
        wrongHints: [null, "Tweede.", "Derde.", "Vijfde."],
      },
      {
        q: "Hoeveel mensen wonen er op de wereld (2024)?",
        options: ["~8 miljard", "1 miljard", "100 miljard", "500 miljoen"],
        answer: 0,
        wrongHints: [null, "Veel te weinig.", "Onmogelijk.", "Te weinig."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke oceaan ligt **rond Antarctica**?",
        options: ["Zuidelijke Oceaan", "Noordelijke IJszee", "Indische Oceaan", "Atlantische Oceaan"],
        answer: 0,
        wrongHints: [null, "Die ligt juist rond de Noordpool.", null, null],
      },
      {
        q: "Welk deel van het aardoppervlak is **water**?",
        options: ["70%", "30%", "50%", "90%"],
        answer: 0,
        wrongHints: [null, "Dat is het deel dat land is.", null, null],
      },
      {
        q: "Wat is het verschil tussen een **continent** en een **land**?",
        options: [
          "Een land heeft grenzen en een regering",
          "Een continent is kleiner dan een land",
          "Een land ligt altijd op een eiland",
          "Er is helemaal geen verschil",
        ],
        answer: 0,
        wrongHints: [null, "Hoeveel landen liggen er in Europa?", null, null],
      },
      {
        q: "Welk land is qua **oppervlakte** het grootste ter wereld?",
        options: ["Rusland", "China", "Canada", "Brazilië"],
        answer: 0,
        wrongHints: [null, "Dit land heeft heel veel inwoners, maar is kleiner van oppervlakte.", null, null],
      },
    ],
  },
  {
    title: "Europa + Azië",
    explanation:
      "**EUROPA** 🇪🇺:\n\nNL ligt hier. **50 landen** + ~750 miljoen mensen.\n\n**EU (Europese Unie)**:\n• Sinds **1957** *(toen EEG)*.\n• **27 landen** lid *(2024)*.\n• Open grenzen *(Schengen)*.\n• **Euro** *(€)* sinds 2002.\n• Brussel = hoofdkwartier.\n\n**Grote Europese landen + hoofdsteden**:\n• **Frankrijk** *(Parijs)* — 65 mln mensen.\n• **Duitsland** *(Berlijn)* — 84 mln, grootste EU-land.\n• **Italië** *(Rome)* — 59 mln.\n• **Spanje** *(Madrid)* — 47 mln.\n• **Polen** *(Warschau)* — 38 mln.\n• **Verenigd Koninkrijk** *(Londen)* — 67 mln *(geen EU sinds Brexit 2020)*.\n• **Nederland** *(Amsterdam — hoofdstad, Den Haag — regering)* — 18 mln.\n• **België** *(Brussel)* — 11,7 mln.\n• **Rusland** *(Moskou)* — grootste land, deels Europa-deels Azië.\n\n**Skandinavië**:\n• **Noorwegen** *(Oslo)*, **Zweden** *(Stockholm)*, **Denemarken** *(Kopenhagen)*, **Finland** *(Helsinki)*, **IJsland** *(Reykjavik)*.\n• Welvarende landen, koud, sociaal.\n\n**Andere**:\n• Portugal, Griekenland, Ierland, Oostenrijk, Zwitserland *(buiten EU)*, Tsjechië, Hongarije, Roemenië, etc.\n\n**Bekende meren + rivieren**:\n• **Donau** *(2.860 km, door 10 landen)*.\n• **Volga** *(3.530 km, in Rusland, langste Europa)*.\n• **Rijn** *(door NL en 5 landen)*.\n• **Theems** *(Engeland)*.\n• **Seine** *(Frankrijk)*.\n\n**Bekende bergen**:\n• **Alpen** *(o.a. Frankrijk/Italië/Zwitserland)*: **Mont Blanc** 4810 m hoogste.\n• **Pyreneeën** *(Spanje/Frankrijk)*.\n• **Karpaten** *(Oost-Europa)*.\n• **Kaukasus** *(Rusland/Georgië)*: Elbrus 5642 m, Europa's hoogste berg.\n\n**AZIË** 🌏:\n\n**~4,8 miljard** mensen *(60% wereldbevolking!)* + 48 landen.\n\n**Grote Aziatische landen + hoofdsteden**:\n• **China** *(Beijing)* — 1,41 miljard mensen, 2e van wereld.\n• **India** *(New Delhi)* — 1,43 miljard, grootste land qua mensen *(sinds 2023)*.\n• **Indonesië** *(Jakarta)* — 280 mln, oud-NL-kolonie.\n• **Pakistan** *(Islamabad)*, **Bangladesh** *(Dhaka)*.\n• **Japan** *(Tokio)* — 125 mln, eilanden.\n• **Filipijnen** *(Manila)*.\n• **Vietnam, Thailand, Maleisië**.\n• **Rusland** *(deels)*.\n\n**Midden-Oosten** *(Azië)*:\n• **Saoedi-Arabië** *(Riyad)* — Mekka + Medina.\n• **Iran** *(Teheran)*.\n• **Israël** *(Jeruzalem)*, **Palestina**.\n• **Turkije** *(Ankara)* — deels Azië-deels Europa.\n• **Verenigde Arabische Emiraten** *(Abu Dhabi, Dubai)*.\n\n**Beroemde plekken**:\n• **Mount Everest** *(8.849 m, Nepal/Tibet)* — hoogste berg.\n• **Dode Zee** *(Israël)* — laagste punt op land *(-430 m)*.\n• **Gobi-woestijn** *(China/Mongolië)*.\n• **Yangtze** *(China)* — 3e langste rivier wereldwijd.\n• **Taj Mahal** *(India, 17e eeuw)*.\n• **Grote Muur China** *(20.000+ km)*.\n\n**Religies in Azië**:\n• Boeddhisme, hindoeïsme, islam, christendom, jodendom — allemaal **ontstaan** in Azië!\n\n**Toets-feitje**:\nDe **Stille Oceaan** *(Pacific)* is zo groot dat alle continenten samen er in zouden passen — met nog ruimte over. Genoemd '**stille**' door Magellan in 1520 omdat hij rustig water vond — vaak is hij juist niet stil.",
    checks: [
      {
        q: "Hoofdstad van **Frankrijk**?",
        options: ["Parijs", "Lyon", "Marseille", "Bordeaux"],
        answer: 0,
        wrongHints: [null, "Steden niet hoofdstad.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een hoofdstad?", tekst: "De **hoofdstad** is de belangrijkste stad van een land. Vaak zit daar de regering, het parlement en koning/president." },
            { titel: "Parijs van Frankrijk", tekst: "**Parijs** is de hoofdstad van Frankrijk. Beroemde monumenten: **Eiffeltoren** (300 m hoog, gebouwd 1889), **Louvre** (museum), **Notre-Dame** (kathedraal)." },
            { titel: "Lyon, Marseille, Bordeaux", tekst: "Dit zijn andere grote Franse steden, maar geen hoofdstad. Marseille = haven Middellandse Zee. Lyon = grote stad aan de Rhône. Bordeaux = wijn-streek." },
          ],
          woorden: [
            { woord: "hoofdstad", uitleg: "Belangrijkste stad waar regering zit." },
            { woord: "Parijs", uitleg: "Hoofdstad Frankrijk, ~11 mln mensen in regio." },
          ],
          theorie: "Toets-tip Europese hoofdsteden uit hoofd leren: Frankrijk-Parijs. Duitsland-Berlijn. Italië-Rome. Spanje-Madrid. UK-Londen. België-Brussel. Polen-Warschau.",
          voorbeelden: [
            { type: "stap", tekst: "Andere bekende hoofdsteden: Berlijn (Duitsland), Rome (Italië), Madrid (Spanje)." },
            { type: "stap", tekst: "Verwarrend: NL heeft 2 'hoofdsteden' — Amsterdam (officieel) + Den Haag (regering)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Frankrijk → Eiffeltoren → Parijs. Beeldherkenning helpt." }],
          niveaus: {
            basis: "Parijs = hoofdstad Frankrijk.",
            simpeler: "Parijs heeft de Eiffeltoren — Frankrijk.",
            nogSimpeler: "Parijs.",
          },
        },
      },
      {
        q: "**Grootste land** qua bevolking 2024?",
        options: ["India", "China", "VS", "Rusland"],
        answer: 0,
        wrongHints: [null, "Recent niet meer.", "Veel minder.", "Veel minder."],
      },
      {
        q: "**Hoogste berg** ter wereld?",
        options: ["Mount Everest", "Mont Blanc", "Kilimanjaro", "Aconcagua"],
        answer: 0,
        wrongHints: [null, "Europa.", "Afrika.", "Zuid-Amerika."],
        uitlegPad: {
          stappen: [
            { titel: "Mount Everest is hoogste", tekst: "**Mount Everest** in de **Himalaya** (grens Nepal/Tibet) is met **8.849 meter** de hoogste berg van de wereld. Hoger dan de wolken!" },
            { titel: "Hoogste per werelddeel", tekst: "Elk werelddeel heeft zijn eigen 'hoogste berg': Azië = Everest. Europa = Mont Blanc (4.810 m) of Elbrus (5.642 m). Afrika = Kilimanjaro (5.895 m). Zuid-Amerika = Aconcagua (6.961 m)." },
            { titel: "Wie heeft hem beklommen?", tekst: "**Edmund Hillary** + **Tenzing Norgay** in 1953 als eersten op de top. Sindsdien hebben 6.000+ mensen het gedaan, ~300 zijn omgekomen tijdens de poging." },
          ],
          woorden: [
            { woord: "Everest", uitleg: "Hoogste berg ter wereld, 8.849 m, Nepal/Tibet." },
            { woord: "Himalaya", uitleg: "Bergketen tussen India en China." },
          ],
          theorie: "Toets-tip hoogtes: Everest = 8.849 m ≈ '8 km + 849 m'. Mont Blanc = 4.810 m. Mensen op vliegtuig vliegen op ~10 km hoogte = net iets hoger dan Everest!",
          voorbeelden: [
            { type: "stap", tekst: "Mount Everest = circa 9 km hoog. Wolkenkrabber Burj Khalifa = 828 m = 10x kleiner." },
            { type: "stap", tekst: "Bij Everest-top is er weinig zuurstof (~33% van zeeniveau). Klimmers nemen extra zuurstof mee." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Everest = #1 wereld. Mont Blanc = #1 Europa. Per werelddeel een topper." }],
          niveaus: {
            basis: "Mount Everest (Himalaya, Nepal) is hoogste berg: 8.849 m.",
            simpeler: "Everest ≈ 9 km hoog, bijna zo hoog als vliegtuigen vliegen.",
            nogSimpeler: "Everest = hoogste.",
          },
        },
      },
      {
        q: "Hoeveel **landen in EU** (2024)?",
        options: ["27", "50", "10", "100"],
        answer: 0,
        wrongHints: [null, "Heel Europa is meer.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "EU vs Europa", tekst: "Let op het verschil:\n• **Europa** = werelddeel (~50 landen totaal)\n• **EU** = Europese Unie = club van **27 landen** die samenwerken op handel, wetten, geld.\nNiet alle Europese landen zijn EU-lid (bv. Noorwegen, Zwitserland, UK niet)." },
            { titel: "Sinds wanneer 27?", tekst: "EU is gegroeid van **6** stichtingsleden (1957) tot **28** (in 2013). In **2020** verliet **UK (Groot-Brittannië)** de EU door **Brexit**. Daarna 27 landen — dat aantal is sindsdien stabiel." },
            { titel: "Belangrijke EU-feiten", tekst: "• **Euro (€)** = munt sinds **2002** in de meeste EU-landen (niet alle, NL wel)\n• **Schengen** = open grenzen, geen paspoortcontrole tussen bijna 30 landen\n• **Europees Parlement** in Brussel + Straatsburg = gekozen door EU-burgers\n• NL is **stichtingslid** sinds 1957." },
          ],
          woorden: [
            { woord: "EU", uitleg: "Europese Unie, club van 27 landen." },
            { woord: "Brexit", uitleg: "Vertrek van UK uit EU (2020)." },
            { woord: "stichtingslid", uitleg: "Land dat vanaf het begin lid was (NL is dat)." },
          ],
          theorie: "Toets-feit EU-cijfers: **27 landen** (2024). NL = stichtingslid. Euro sinds 2002. EU-burgers mogen vrij wonen + werken in alle 27 landen.",
          voorbeelden: [
            { type: "stap", tekst: "Voorbeelden EU-landen: NL, België, Duitsland, Frankrijk, Spanje, Italië, Polen, Griekenland, Zweden..." },
            { type: "stap", tekst: "Voorbeelden Europa MAAR niet-EU: UK (na Brexit), Noorwegen, Zwitserland, Oekraïne (kandidaat-lid)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "27 = sinds Brexit (2020). Niet 28. Niet 50 (= Europa als werelddeel)." }],
          niveaus: {
            basis: "27 EU-landen.",
            simpeler: "Sinds UK eruit ging (Brexit 2020) heeft de EU 27 landen.",
            nogSimpeler: "27",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke rivier is de **langste van Europa**?",
        options: ["Volga", "Donau", "Rijn", "Seine"],
        answer: 0,
        wrongHints: [null, "Die rivier stroomt door 10 landen, maar is korter.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "De Volga",
              tekst: "De **Volga** is met **3.530 km** de langste rivier van Europa. Hij stroomt door **Rusland**.",
            },
            {
              titel: "De Donau is korter",
              tekst: "De **Donau** stroomt door **10 landen**, maar is met **2.860 km** korter dan de Volga.",
            },
          ],
          woorden: [
            {
              woord: "rivier",
              uitleg: "Stromend water dat uiteindelijk in een zee of meer uitkomt.",
            },
          ],
          theorie: "Toets-tip: door de meeste landen stromen is niet hetzelfde als de langste zijn. Volga = langste van Europa, Donau = door 10 landen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "De Rijn stroomt ook door Nederland. De Seine stroomt door Frankrijk.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Volga = Rusland = groot land, lange rivier.",
            },
          ],
          niveaus: {
            basis: "Volga (3.530 km).",
            simpeler: "De Volga in Rusland is de langste rivier van Europa.",
            nogSimpeler: "Volga.",
          },
        },
      },
      {
        q: "Waar ligt het **laagste punt op land** van de hele wereld?",
        options: ["Bij de Dode Zee", "In de Zuidplaspolder", "In de Gobi-woestijn", "Op de Mont Blanc"],
        answer: 0,
        wrongHints: [null, "Dat is het laagste punt van Nederland, niet van de wereld.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "De Dode Zee",
              tekst: "De **Dode Zee** ligt in het Midden-Oosten, bij **Israël**. Het land daar ligt ongeveer **430 meter onder zeeniveau**: het laagste punt op land ter wereld.",
            },
            {
              titel: "Hoog en laag",
              tekst: "De **Mont Blanc** is juist een hoge berg (4.810 m). De **Gobi** is een woestijn in China en Mongolië.",
            },
          ],
          woorden: [
            {
              woord: "zeeniveau",
              uitleg: "De hoogte van het zeewater; daar meet je hoogtes vanaf.",
            },
          ],
          theorie: "Toets-tip: hoogste punt op aarde = Mount Everest (8.849 m). Laagste punt op land = Dode Zee (-430 m).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "-430 m betekent: 430 meter lager dan het zeewater.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Min-teken = onder zeeniveau. Hoe groter het getal na de min, hoe lager.",
            },
          ],
          niveaus: {
            basis: "Dode Zee (-430 m).",
            simpeler: "Bij de Dode Zee in Israël is het land het laagst van de hele wereld.",
            nogSimpeler: "Dode Zee.",
          },
        },
      },
      {
        q: "Sinds welk jaar betalen we in Nederland met de **euro**?",
        options: ["2002", "1957", "2020", "1975"],
        answer: 0,
        wrongHints: [
          null,
          "In dat jaar begon de samenwerking die later de EU werd.",
          "In dat jaar ging het Verenigd Koninkrijk uit de EU.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Euro sinds 2002",
              tekst: "De **euro (€)** is het geld van de EU. Sinds **2002** betaal je ermee, ook in Nederland.",
            },
            {
              titel: "Andere jaartallen",
              tekst: "**1957** = begin van de samenwerking (toen heette het EEG). **2020** = het Verenigd Koninkrijk ging uit de EU (Brexit).",
            },
          ],
          woorden: [
            {
              woord: "euro",
              uitleg: "Het geld dat je in Nederland en veel andere EU-landen gebruikt.",
            },
            {
              woord: "EU",
              uitleg: "Europese Unie: 27 landen die samenwerken.",
            },
          ],
          theorie: "Toets-tip EU-jaartallen: 1957 = start (EEG). 2002 = euro. 2020 = Brexit.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Vóór de euro had Nederland de gulden.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Euro = 2002. Brexit = 2020. Let op: dezelfde cijfers, maar in een andere volgorde!",
            },
          ],
          niveaus: {
            basis: "2002.",
            simpeler: "Sinds 2002 betalen we met euro's.",
            nogSimpeler: "2002.",
          },
        },
      },
    ],
  },
  {
    title: "Amerika + Afrika + Oceanië",
    explanation:
      "**NOORD-AMERIKA** 🌎:\n\n**Verenigde Staten (VS)** *(Washington D.C.)*:\n• 333 miljoen mensen.\n• 50 staten *(Californië, Texas, Florida, New York, etc.)*.\n• Beroemd: Statue of Liberty, Grand Canyon, Hollywood, NASA, Disney.\n• Vlag = 'Stars and Stripes' *(50 sterren + 13 strepen)*.\n\n**Canada** *(Ottawa)*:\n• 2e grootste land in **oppervlak** *(9,98 mln km²)*.\n• Maar weinig bevolking *(40 mln)* — vooral natuur.\n• Toronto, Vancouver, Montreal.\n• Talen: Engels + Frans.\n\n**Mexico** *(Mexico-Stad)*:\n• 130 mln mensen.\n• Spaans-talig.\n• Maya + Azteken-erfgoed.\n• Cancun, Tulum *(toerisme)*.\n\n**Caribisch gebied**:\n• **Cuba** *(Havana)*, **Jamaica**, **Haïti**, **Dominicaanse Republiek**.\n• **Aruba, Curaçao, Bonaire, St. Maarten, Saba, St. Eustatius** = NL-Caribisch *(deel van Koninkrijk NL)*.\n\n**ZUID-AMERIKA** 🌎:\n\n**Brazilië** *(Brasília)*:\n• Grootste ZA-land.\n• 215 mln mensen.\n• Portugees-talig *(rest van ZA: vooral Spaans)*.\n• Amazone-regenwoud — grootste regenwoud ter wereld.\n• Rio de Janeiro met **Christus de Verlosser**-standbeeld.\n• Beroemd carnaval.\n• Voetbal-grootmacht.\n\n**Argentinië** *(Buenos Aires)*:\n• Tango.\n• Voetbal *(Messi)*.\n• Pampas *(grasvlakten)*.\n• Patagonië *(zuidpunt)*.\n\n**Chili** *(Santiago)*:\n• Lange smalle vorm langs Andes.\n• Atacama-woestijn *(droogste)*.\n\n**Peru** *(Lima)*:\n• Machu Picchu *(Inca-stad)*.\n• Andes.\n\n**Andere**: Colombia, Venezuela, Ecuador, Bolivia, Paraguay, Uruguay, Guyana, Suriname *(NL-kolonie tot 1975, NL-talig)*.\n\n**AFRIKA** 🌍:\n\n**54 landen**! Veel verscheidenheid.\n\n**Noord-Afrika** *(Arabisch + islam vooral)*:\n• **Egypte** *(Caïro)*: piramides, Nijl-rivier, Sphinx.\n• **Marokko** *(Rabat)*: Sahara, Berberse cultuur.\n• **Algerije, Tunesië, Libië**.\n\n**West-Afrika**:\n• **Nigeria** *(Abuja)*: grootste land Afrika qua bevolking *(220 mln)*, Lagos-megastad.\n• **Senegal, Ghana, Ivoorkust, Mali**.\n\n**Oost-Afrika**:\n• **Ethiopië** *(Addis Abeba)*: oudste mens-fossielen.\n• **Kenia** *(Nairobi)*: safari + Masai.\n• **Tanzania** *(Dodoma)*: Kilimanjaro, Serengeti.\n\n**Zuid-Afrika** *(Pretoria/Kaapstad/Bloemfontein — 3 hoofdsteden)*:\n• 60 mln.\n• Nelson Mandela.\n• Apartheid-verleden tot 1994.\n• Afrikaans-taal *(uit Nederlands)*.\n• Tafelberg.\n\n**Sahara**: grootste hete woestijn *(9 mln km²)*.\n**Nijl**: langste rivier ter wereld *(6.650 km)*.\n**Victoria-meer**: groot meer Oost-Afrika.\n**Kilimanjaro** *(Tanzania)*: 5895 m, hoogste Afrika.\n\n**Dieren-erfgoed**:\nGiraffes, olifanten, leeuwen, neushoorns, gorilla's, chimpansees, zebra's, krokodillen.\n\n**OCEANIË / AUSTRALIË** 🇦🇺:\n\n**Australië** *(Canberra)*:\n• 26 mln mensen.\n• Eiland-continent.\n• Bekende plekken: Sydney *(Opera House)*, Great Barrier Reef, Uluru *(Ayers Rock)*.\n• Dieren: kangoeroe, koala, vogelbekdier, krokodil.\n• Bevolking: 80% **aan kust** *(binnenland = woestijn 'outback')*.\n\n**Nieuw-Zeeland** *(Wellington)*:\n• 2 grote eilanden.\n• Lord of the Rings-filmlocaties.\n• Schapen-grootmacht *(meer schapen dan mensen)*.\n• Maori-cultuur.\n\n**Eilanden Pacific**:\n• **Papoea-Nieuw-Guinea, Fiji, Samoa, Tonga, Vanuatu**.\n• Vele kleine eilanden.\n\n**Hawaï** *(VS-staat)*: vulkanische eilanden in Pacific.\n\n**Antarctica** ❄️:\n• Geen vaste bewoners.\n• 70 onderzoeksstations van verschillende landen.\n• Bevroren land.\n• Pinguïns, zeehonden.\n• Miljoenen jaren geleden was er bos!\n• Klimaatverandering = ijs smelt.\n\n**Toets-feitje**:\nIn **Australië** rij je **links** op de weg *(zoals UK, Japan, India, Zuid-Afrika)*. In meeste landen rechts. Zo'n derde van de mensen rijdt links.",
    checks: [
      {
        q: "Hoofdstad van **Brazilië**?",
        options: ["Brasília", "Rio de Janeiro", "São Paulo", "Buenos Aires"],
        answer: 0,
        wrongHints: [null, "Bekend maar niet hoofdstad.", "Bekend maar niet hoofdstad.", "Argentinië."],
      },
      {
        q: "**Langste rivier** ter wereld?",
        options: ["Nijl", "Amazone", "Yangtze", "Mississippi"],
        answer: 0,
        wrongHints: [null, "Tweede — Amazone.", "Derde — China.", "Vierde — VS."],
        uitlegPad: {
          stappen: [
            { titel: "De Nijl: 6.650 km", tekst: "De **Nijl** is de **langste rivier ter wereld**: ongeveer **6.650 km**. Loopt door **11 landen** in Afrika, voornamelijk **Egypte + Sudan + Ethiopië + Uganda**." },
            { titel: "Waarom belangrijk?", tekst: "Egypte is een **woestijnland** — zonder de Nijl zou er bijna geen leven mogelijk zijn. **Piramiden + Sphinx** liggen op de oever. Sinds 5.000 jaar geleden bloeit de Egyptische cultuur **dankzij** de Nijl-overstromingen (vruchtbare modder)." },
            { titel: "Top-5 langste rivieren", tekst: "1. **Nijl** (6.650 km, Afrika)\n2. **Amazone** (6.400 km, Zuid-Amerika)\n3. **Yangtze** (6.300 km, China)\n4. **Mississippi-Missouri** (6.275 km, VS)\n5. **Yenisei** (5.539 km, Rusland)\nNijl + Amazone zijn vrijwel even lang — debat tussen wetenschappers." },
          ],
          woorden: [
            { woord: "Nijl", uitleg: "Langste rivier ter wereld, stroomt door Egypte." },
            { woord: "Amazone", uitleg: "Tweede langste, maar grootste qua water-hoeveelheid." },
            { woord: "monding", uitleg: "Waar rivier in de zee uitkomt." },
          ],
          theorie: "Toets-feit rivieren:\n• Langste = **Nijl** (Afrika)\n• Meeste water = **Amazone** (Zuid-Amerika, ~20% van zoet rivierwater wereld)\n• In NL: **Rijn** = belangrijkste rivier (vanuit Duitsland naar Noordzee).",
          voorbeelden: [
            { type: "stap", tekst: "De Nijl heeft 2 bronnen: Witte Nijl (Uganda) + Blauwe Nijl (Ethiopië). Komen samen in Sudan." },
            { type: "stap", tekst: "Bij de monding (Egypte, Middellandse Zee) ligt een grote **delta** met veel vruchtbare grond." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Nijl = #1 lengte. Amazone = #1 water-volume. Allebei top, maar verschillende rangordes." }],
          niveaus: {
            basis: "De Nijl is langste rivier ter wereld.",
            simpeler: "De Nijl (Egypte/Afrika) is ~6.650 km lang — langste ooit.",
            nogSimpeler: "Nijl",
          },
        },
      },
      {
        q: "Welk land heeft **Tafelberg** + Mandela?",
        options: ["Zuid-Afrika", "Nigeria", "Egypte", "Brazilië"],
        answer: 0,
        wrongHints: [null, "Andere.", "Andere.", "Niet."],
      },
      {
        q: "Welk dier is **typisch Australië**?",
        options: ["Kangoeroe", "Leeuw", "Tijger", "Olifant"],
        answer: 0,
        wrongHints: [null, "Afrika.", "Azië.", "Afrika/Azië."],
        uitlegPad: {
          stappen: [
            { titel: "Australië = uniek dieren", tekst: "Australië is een **eiland-continent** — al miljoenen jaren afgezonderd van rest van wereld. Daarom evolueerden er **unieke dieren** die nergens anders voorkomen." },
            { titel: "Kangoeroe = top-icoon", tekst: "De **kangoeroe** hupt rond in Australische binnenland (outback) + staat op het **wapen** en op **munten**. Bijzondere eigenschap: vrouwtje heeft een **buidel** waarin de baby ('joey') opgroeit. Heet een **buideldier**." },
            { titel: "Andere typische Australische dieren", tekst: "• **Koala** (buideldier, eet alleen eucalyptus-blad)\n• **Vogelbekdier** (eierleggend zoogdier — heel zeldzaam!)\n• **Wombat** (buideldier, lijkt op kleine beer)\n• **Krokodil** + **Tasmaanse duivel** + **emu**\n• Veel **giftige slangen + spinnen**." },
          ],
          woorden: [
            { woord: "buideldier", uitleg: "Zoogdier met buidel waarin baby groeit (kangoeroe, koala, wombat)." },
            { woord: "outback", uitleg: "Onbevolkt droog binnenland Australië." },
            { woord: "endemisch", uitleg: "Komt alleen voor in 1 specifieke regio." },
          ],
          theorie: "Toets-feit Australië:\n• Eiland-continent in Oceanië.\n• Hoofdstad **Canberra** (niet Sydney!).\n• Beroemd: Opera House Sydney, Uluru rots, Great Barrier Reef.\n• Dieren: kangoeroe, koala, vogelbekdier = endemisch.\n• Leeuw, tijger, olifant = NIET Australië (Afrika/Azië).",
          voorbeelden: [
            { type: "stap", tekst: "Wapen-dier Australië: kangoeroe + emu — beide lopen bijna nooit achteruit (vaak uitgelegd als 'altijd vooruit')." },
            { type: "stap", tekst: "Niet Australië: leeuw/giraffe = Afrika. Tijger/panda = Azië. IJsbeer = Noordpool." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Australië-trio: kangoeroe, koala, vogelbekdier. Allemaal uniek voor dit eiland-continent." }],
          niveaus: {
            basis: "Kangoeroe.",
            simpeler: "Kangoeroes huppen rond in Australië en staan op het wapen en munten. Typisch dier.",
            nogSimpeler: "Kangoeroe",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**Ottawa** is de hoofdstad van welk land?",
        options: ["Canada", "Mexico", "Verenigde Staten", "Cuba"],
        answer: 0,
        wrongHints: [null, null, "De hoofdstad van dit land is Washington D.C.", null],
      },
      {
        q: "Welke taal spreken de meeste mensen in **Brazilië**?",
        options: ["Portugees", "Spaans", "Engels", "Frans"],
        answer: 0,
        wrongHints: [null, "Die taal spreken ze vooral in de andere landen van Zuid-Amerika.", null, null],
      },
      {
        q: "Welk land in Zuid-Amerika was tot **1975** een Nederlandse kolonie?",
        options: ["Suriname", "Guyana", "Venezuela", "Colombia"],
        answer: 0,
        wrongHints: [null, null, null, null],
      },
      {
        q: "Wat is de grootste **hete woestijn** ter wereld?",
        options: ["Sahara", "Gobi", "Atacama", "Kalahari"],
        answer: 0,
        wrongHints: [null, null, "Die woestijn is de droogste, niet de grootste.", null],
      },
      {
        q: "Hoeveel **strepen** staan er op de vlag van de VS?",
        options: ["13", "50", "27", "7"],
        answer: 0,
        wrongHints: [null, "Dat is het aantal sterren.", null, null],
      },
      {
        q: "Hoeveel **hoofdsteden** heeft Zuid-Afrika?",
        options: ["3", "1", "2", "5"],
        answer: 0,
        wrongHints: [null, "De meeste landen hebben er één, maar Zuid-Afrika is anders.", null, null],
      },
    ],
  },
  {
    title: "Eind-toets — wereld mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Hoeveel **werelddelen** telt de indeling die je op school leert?", options: ["7", "5", "10", "3"], answer: 0, wrongHints: [null, "Te weinig.", "Te veel.", "Te weinig."] },
      { q: "**Grootste** werelddeel?", options: ["Azië", "Afrika", "Europa", "Australië"], answer: 0, wrongHints: [null, "Tweede.", "Klein.", "Kleinst."] },
      { q: "**Hoogste berg** ter wereld?", options: ["Mount Everest", "Mont Blanc", "Kilimanjaro", "Aconcagua"], answer: 0, wrongHints: [null, "Europa.", "Afrika.", "Zuid-Amerika."] },
      { q: "Hoofdstad **Frankrijk**?", options: ["Parijs", "Lyon", "Berlijn", "Madrid"], answer: 0, wrongHints: [null, "Niet.", "Duitsland.", "Spanje."] },
      { q: "**Hoofdstad** Brazilië?", options: ["Brasília", "Rio", "Buenos Aires", "Lima"], answer: 0, wrongHints: [null, "Stad maar geen hoofdstad.", "Argentinië.", "Peru."] },
      { q: "**Grootste oceaan**?", options: ["Stille / Pacific", "Atlantisch", "Indisch", "Arctisch"], answer: 0, wrongHints: [null, "Tweede.", "Derde.", "Klein."] },
      {
        q: "Welke **rivier** stroomt door **Egypte**?",
        options: ["Nijl", "Amazone", "Rijn", "Donau"],
        answer: 0,
        wrongHints: [null, "Amazone = Zuid-Amerika.", "Rijn = Europa (Duitsland-NL).", "Donau = Europa (Oost)."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de Nijl?", tekst: "De **Nijl** is een **gigantische rivier in Afrika**. ~6.650 km lang — vaak genoemd als langste rivier ter wereld (debat met Amazone). Stroomt door **11 landen**, eindigt in Egypte → Middellandse Zee." },
            { titel: "Waarom belangrijk voor Egypte?", tekst: "Egypte is grotendeels **woestijn** (Sahara). De Nijl is de enige **vaste waterbron**. Daardoor:\n• 95% van de Egyptenaren woont langs de Nijl\n• Oude Egyptenaren bouwden hun beschaving rond de rivier\n• Vruchtbaar slik na overstromingen → landbouw\n• Hoofdstad **Caïro** ligt aan de Nijl\n• **Piramides van Gizeh** vlakbij" },
            { titel: "Toets-feit: top rivieren wereld", tekst: "Onthoud deze beroemde rivieren voor de Doorstroomtoets:\n• **Nijl** — Afrika, Egypte (~6.650 km)\n• **Amazone** — Zuid-Amerika, Brazilië (~6.400 km, meeste water)\n• **Yangtze** — China, langste in Azië\n• **Mississippi** — VS\n• **Rijn** — Duitsland → NL → Noordzee\n• **Donau** — Duitsland → Oost-Europa → Zwarte Zee" },
          ],
          woorden: [
            { woord: "rivier", uitleg: "Lange stroom water die naar zee of meer loopt. Vaak van bron in bergen." },
            { woord: "monding", uitleg: "Waar rivier in zee/meer eindigt." },
            { woord: "delta", uitleg: "Gebied bij monding waar rivier in vele takken splitst (zoals Nijl-delta)." },
          ],
          theorie: "Toets-rivier-vragen vragen vaak: 'door welk LAND stroomt rivier X?' of 'welke rivier door land Y?'. Onthoud minstens:\n• Nijl → Egypte/Soedan\n• Amazone → Brazilië\n• Rijn → Duitsland/NL/CH/FR\n• Donau → 10 landen (van Duitsland tot Zwarte Zee)\n• Maas → Frankrijk/België/NL\n• Schelde → Frankrijk/België/NL",
          voorbeelden: [
            { type: "feit", tekst: "Egypte heet ook wel 'het geschenk van de Nijl' — zonder de rivier geen Egyptische beschaving 5000 jaar terug." },
            { type: "feit", tekst: "De Nijl heeft 2 hoofdtakken: Blauwe Nijl (uit Ethiopië) + Witte Nijl (uit Oeganda)." },
          ],
          basiskennis: [{ onderwerp: "Niet Sahara-rivier", uitleg: "De Nijl loopt DOOR de Sahara maar komt niet uit de Sahara — bron ligt in regenrijk Oost-Afrika." }],
          niveaus: { basis: "Nijl.", simpeler: "De Nijl is een lange rivier in Afrika die door Egypte stroomt. Belangrijk voor landbouw + oude beschaving.", nogSimpeler: "Nijl" },
        },
      },
      {
        q: "Welk **buurland** grenst aan de **noordkant** van Nederland?",
        options: ["Geen enkel land", "België", "Duitsland", "Frankrijk"],
        answer: 0,
        wrongHints: [null, "België ligt ZUIDEN van NL.", "Duitsland ligt OOSTEN.", "Frankrijk ligt veel zuidelijker."],
        uitlegPad: {
          stappen: [
            { titel: "NL buurlanden + windstreken", tekst: "Nederland heeft maar **2 landen-buren**:\n• **België** in het **zuiden**\n• **Duitsland** in het **oosten**\n\nIn het **noorden** + **westen** ligt de **Noordzee**. Aan de overkant van de Noordzee: **Engeland/Schotland** (westen) en **Noorwegen** (noorden)." },
            { titel: "Windstreken in NL", tekst: "De toets vraagt vaak naar **windstreken**:\n• **N** (noord) — boven NL\n• **Z** (zuid) — onder NL\n• **W** (west) — links\n• **O** (oost) — rechts\n\nHandig ezelsbruggetje: 'Nooit Op Zaterdag Werken' = **N**-**O**-**Z**-**W** (klokrond)." },
            { titel: "Toets-feit: NL ligt LAAG", tekst: "Nederland betekent letterlijk **'lage landen'**. Veel onder zeespiegel (Zuid-Holland tot 6 meter onder NAP). Daarom: dijken + dammen + Deltawerken. Hoogste punt = **Vaalserberg** (322 m, hoek Limburg waar NL-BE-DE elkaar raken). Weinig bergen, maar wel veel water + dijken." },
          ],
          woorden: [
            { woord: "windstreek", uitleg: "Richting op kompas: noord, oost, zuid, west." },
            { woord: "NAP", uitleg: "Normaal Amsterdams Peil — referentiepunt voor hoogte in NL." },
            { woord: "Vaalserberg", uitleg: "Hoogste punt vasteland NL: 322 m boven zeespiegel. Drielandenpunt." },
          ],
          theorie: "NL ligging in Europa:\n• Buurland N: **Noordzee** (geen land)\n• Buurland O: **Duitsland** (grens ~570 km)\n• Buurland Z: **België** (grens ~450 km)\n• Buurland W: **Noordzee**\n• NL-eilanden: Waddeneilanden + Caribische delen (Aruba/Curaçao/Bonaire/Sint Maarten)",
          voorbeelden: [
            { type: "feit", tekst: "Vanuit Den Haag is het ~600 km naar Berlijn (DE) maar ~150 km naar Brussel (BE)." },
            { type: "feit", tekst: "Caribische deel: Aruba, Curaçao, Sint Maarten zijn LANDEN binnen het Koninkrijk NL. Bonaire/Saba/Sint Eustatius zijn 'bijzondere gemeentes'." },
          ],
          basiskennis: [{ onderwerp: "Niet vergeten", uitleg: "Frankrijk grenst NIET aan NL — daar zit België tussen. Toets-instinker." }],
          niveaus: { basis: "Noordzee.", simpeler: "Ten noorden van NL ligt de Noordzee (water, geen land). Verder weg over zee: Engeland/Schotland.", nogSimpeler: "Noordzee" },
        },
      },
      {
        q: "Wat is een **continent**?",
        options: ["Een heel groot stuk land", "Een land", "Een berg", "Een zee"],
        answer: 0,
        wrongHints: [null, "Een continent BEVAT landen, IS niet een land.", "Niet — wel staan er bergen OP continenten.", "Niet — tegenovergesteld: continent = land, oceaan = water."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een continent?", tekst: "Een **continent** (of **werelddeel**) is een **gigantisch stuk land** op de aarde. Er zijn **7 continenten** wereldwijd:\n1. **Azië** (grootste, 4,8 miljard mensen)\n2. **Afrika** (snelst groeiend)\n3. **Noord-Amerika**\n4. **Zuid-Amerika**\n5. **Antarctica** (zuidpool — geen permanente bewoners)\n6. **Europa** (waar NL ligt)\n7. **Australië/Oceanië** (kleinste)" },
            { titel: "Wat is verschil land vs continent?", tekst: "• **Continent** = werelddeel, bevat veel landen. Bv. Europa heeft ~50 landen.\n• **Land** = afgebakend gebied met grenzen + eigen overheid. Bv. Nederland, België, Duitsland.\n\nNederland = land **in** continent Europa." },
            { titel: "Toets-feit: 5 vs 6 vs 7 continenten?", tekst: "Verschillende landen tellen anders. In **NL leren we 7 continenten**. Maar in sommige landen telt men:\n• 6 continenten: Eurazië als 1\n• 5 continenten: Amerika als 1 (Olympische ringen: 5 ringen voor 5 bewoonde continenten)\n\nOp de toets in NL: **7 continenten**. Onthoud ze alle 7: Azië, Afrika, Noord-Amerika, Zuid-Amerika, Antarctica, Europa, Oceanië." },
          ],
          woorden: [
            { woord: "continent", uitleg: "Heel groot stuk land. Werelddeel. NL telt er 7." },
            { woord: "werelddeel", uitleg: "Synoniem van continent." },
            { woord: "oceaan", uitleg: "Heel groot stuk water tussen continenten. 5 oceanen wereldwijd." },
          ],
          theorie: "Continenten + oceanen samen:\n• **7 continenten** (land)\n• **5 oceanen** (water): Stille (Pacific), Atlantisch, Indisch, Arctisch (noordpool), Antarctisch (zuidpool)\n\n**Aarde = ~71% water + 29% land**. Meer water dan land!",
          voorbeelden: [
            { type: "feit", tekst: "Antarctica heeft GEEN permanente inwoners — alleen onderzoekers (~1.000-4.000 wisselend). Te koud + grond bevroren." },
            { type: "feit", tekst: "Azië heeft 30% van wereld-landoppervlak maar 60% van wereldbevolking." },
          ],
          basiskennis: [{ onderwerp: "Niet land", uitleg: "De toets test soms: 'Is Frankrijk een continent?' Antwoord: NEE — Frankrijk is een LAND in continent Europa." }],
          niveaus: { basis: "Werelddeel — 7 stuks.", simpeler: "Een continent is een heel groot stuk land. Er zijn 7 continenten op aarde: Azië, Afrika, Europa, Noord-Amerika, Zuid-Amerika, Antarctica, Oceanië.", nogSimpeler: "Werelddeel" },
        },
      },
      { q: "Wat is de **hoofdstad van Frankrijk**?", options: ["Parijs","Berlijn","Madrid","Londen"], answer: 0, wrongHints: [null, "Duitsland.", "Spanje.", "VK."] },
      { q: "Op welk werelddeel ligt **Egypte**?", options: ["Afrika","Azië","Europa","Australië"], answer: 0, wrongHints: [null, "Sinaï-schiereiland is wel deels Azië — maar het grootste deel ligt elders.", "Te ver noord.", "Heel ver weg — andere oceaan."] },
      { q: "Welke oceaan ligt tussen **Europa en Amerika**?", options: ["Atlantische Oceaan","Stille Oceaan","Indische Oceaan","Noordzee"], answer: 0, wrongHints: [null, "Tussen Amerika + Azië.", "Tussen Afrika + Australië.", "Tussen NL + VK."] },
      { q: "Wat is de **hoogste berg ter wereld**?", options: ["Mount Everest","Mont Blanc","Kilimanjaro","Fuji"], answer: 0, wrongHints: [null, "Alpen, lager.", "Afrika, lager.", "Japan, lager."] },
      { q: "Hoofdstad van **Duitsland**?", options: ["Berlijn","Hamburg","München","Frankfurt"], answer: 0, wrongHints: [null, "Wel grote havenstad, maar geen hoofdstad.", "Wel grote zuid-stad, maar geen hoofdstad.", "Wel financieel centrum (ECB), maar geen hoofdstad."] },
      { q: "Hoofdstad van **Spanje**?", options: ["Madrid","Barcelona","Valencia","Sevilla"], answer: 0, wrongHints: [null, "Wel grote stad in Catalonië, maar geen hoofdstad.", "Wel grote oostkust-stad, maar geen hoofdstad.", "Wel grote zuid-stad, maar geen hoofdstad."] },
      { q: "Hoofdstad van **Italië**?", options: ["Rome","Milaan","Napels","Venetië"], answer: 0, wrongHints: [null, "Wel grote stad in noord-Italië, maar geen hoofdstad.", "Wel grote zuid-stad, maar geen hoofdstad.", "Wel beroemd watertoerisme, maar geen hoofdstad."] },
      { q: "Hoofdstad van **Verenigd Koninkrijk**?", options: ["Londen","Manchester","Edinburgh","Liverpool"], answer: 0, wrongHints: [null, "Niet.", "Schotland-hoofdstad.", "Niet."] },
      { q: "Hoofdstad van **VS**?", options: ["Washington D.C.","New York","Los Angeles","Chicago"], answer: 0, wrongHints: [null, "Grootste, geen hoofdstad.", "Niet.", "Niet."] },
      { q: "Hoofdstad van **Rusland**?", options: ["Moskou","Sint-Petersburg","Kiev","Minsk"], answer: 0, wrongHints: [null, "Andere stad.", "Oekraïne.", "Wit-Rusland."] },
      { q: "Hoofdstad van **Japan**?", options: ["Tokio","Kyoto","Osaka","Seoul"], answer: 0, wrongHints: [null, "Vorige.", "Niet.", "Zuid-Korea."] },
      { q: "Hoofdstad van **China**?", options: ["Peking","Shanghai","Hong Kong","Taipei"], answer: 0, wrongHints: [null, "Grootste, geen hoofdstad.", "Andere.", "Taiwan."] },
      { q: "Hoofdstad van **Brazilië**?", options: ["Brasília","Rio de Janeiro","São Paulo","Lima"], answer: 0, wrongHints: [null, "Vroeger.", "Grootste.", "Peru."] },
      { q: "Welke woestijn is in **Afrika**?", options: ["Sahara","Gobi","Mojave","Atacama"], answer: 0, wrongHints: [null, "Azië.", "VS.", "Zuid-Amerika."] },
      { q: "Welke is **grootste** Europese stad?", options: ["Moskou","Londen","Parijs","Madrid"], answer: 0, wrongHints: [null, "Tweede.", "Niet.", "Niet."] },
      { q: "Welk land heeft **Acropolis**?", options: ["Griekenland","Italië","Egypte","Turkije"], answer: 0, wrongHints: [null, "Romeins erfgoed.", "Egyptisch.", "Niet."] },
      { q: "Welke **brug** is bekend in San Francisco?", options: ["Golden Gate","Tower Bridge","Brooklyn","Erasmusbrug"], answer: 0, wrongHints: [null, "Londen.", "New York.", "Rotterdam."] },
      { q: "**Taj Mahal** ligt in?", options: ["India","Egypte","China","Japan"], answer: 0, wrongHints: [null, "Egypte heeft piramides, geen Taj Mahal.", "China heeft de Muur, geen Taj Mahal.", "Japan heeft Fuji, geen Taj Mahal."] },
      { q: "**Christus de Verlosser**-standbeeld ligt in?", options: ["Rio de Janeiro","Madrid","Rome","Buenos Aires"], answer: 0, wrongHints: [null, "Spanje — daar staat hij niet.", "Italië — daar staat hij niet.", "Argentinië — daar staat hij niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const werelddelenLandenPo = {
  id: "werelddelen-landen-po",
  title: "Werelddelen + landen (Doorstroomtoets groep 6-8)",
  emoji: "🌍",
  level: "groep6-8",
  subject: "aardrijkskunde",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — aardrijkskunde / topografie",
  prerequisites: [
    { id: "continenten-wereld-po", title: "Continenten wereld", niveau: "1F" },
    { id: "topografie-nederland", title: "Topografie NL", niveau: "1F" },
  ],
  intro:
    "Werelddelen + landen voor Doorstroomtoets groep 6-8 — 7 continenten + 5 oceanen + grote landen + hoofdsteden (Frankrijk-Parijs, Brazilië-Brasília etc.) + bekende plekken (Everest, Sahara, Nijl, Amazone, Chinese Muur, Christus de Verlosser, Taj Mahal) + Antarctica. ~15 min.",
  triggerKeywords: [
    "werelddeel", "continent",
    "Azië", "Afrika", "Europa",
    "Noord-Amerika", "Zuid-Amerika",
    "Australië", "Oceanië", "Antarctica",
    "oceaan", "Pacific", "Atlantisch",
    "hoofdstad", "land",
    "Everest", "Nijl", "Sahara", "Amazone",
    "Brazilië", "China", "India", "VS",
  ],
  chapters,
  steps,
};

export default werelddelenLandenPo;
