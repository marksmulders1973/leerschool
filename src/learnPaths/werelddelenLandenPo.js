// Leerpad: Werelddelen + landen - groep 6-8 aardrijkskunde.
// Cito-relevant topografie. 1F. 4 stappen.

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
      "**Werelddelen / continenten** = grote landmassa's op aarde.\n\nDe **7 werelddelen** *(in volgorde van groot naar klein)*:\n\n**1. Azië** *(44 mln km², 60% wereldbevolking)*:\n• Grootste werelddeel.\n• ~4,8 miljard mensen.\n• Land: Mount Everest *(hoogste berg)*, woestijnen, regenwouden.\n• Beroemde landen: China, India, Japan, Indonesië.\n\n**2. Afrika** *(30 mln km², 1,4 miljard mensen)*:\n• Wieg van mensheid *(oudste mens-fossielen)*.\n• Sahara *(grootste woestijn)*.\n• Nijl *(langste rivier)*.\n• 54 landen.\n\n**3. Noord-Amerika** *(24 mln km², 580 mln mensen)*:\n• Vooral VS + Canada + Mexico.\n• Grote rotsbergen, Niagara, woestijnen, prairies.\n\n**4. Zuid-Amerika** *(18 mln km², 430 mln mensen)*:\n• Amazone-regenwoud *(grootste ter wereld)*.\n• Andes-bergen *(2e hoogste keten)*.\n• Brazilië, Argentinië, Chili.\n\n**5. Antarctica** *(14 mln km², geen permanente bewoners)*:\n• Bevroren land om Zuidpool.\n• -89°C koud.\n• Geen landen *(wetenschap-stations)*.\n• 90% van wereld-zoetwater *(in ijs)*.\n\n**6. Europa** *(10 mln km², 750 mln mensen)*:\n• Kleinste continent *(behalve Australië)*.\n• 50 landen.\n• Vele talen + culturen.\n• EU *(27 landen)*.\n\n**7. Oceanië / Australië** *(9 mln km², 45 mln mensen)*:\n• Kleinste werelddeel.\n• Australië + Nieuw-Zeeland + eilanden Pacifc.\n\n**Geheugenezel** *(volgorde grootte)*:\nAap, Aap, Niets, Zwart, Apenhuis, Ezels, Onkruid → A-A-N-Z-A-E-O? Nee, beter:\n*A-A-N-Z-A-E-O* = Azië-Afrika-NoordAmerika-ZuidAmerika-Antarctica-Europa-Oceanië.\n\n**5 oceanen** *(in volgorde van groot)*:\n\n**1. Stille Oceaan / Pacific** *(165 mln km²)*: tussen Azië + Amerika. Grootste!\n**2. Atlantische Oceaan** *(106 mln km²)*: tussen Amerika + Europa/Afrika.\n**3. Indische Oceaan** *(75 mln km²)*: tussen Afrika + Azië + Australië.\n**4. Zuidelijke Oceaan** *(20 mln km²)*: rond Antarctica.\n**5. Noordelijke IJszee / Arctische Oceaan** *(14 mln km²)*: rond Noordpool.\n\n**Vergelijken**:\n• Land: 30% van aardoppervlak.\n• Water: 70%.\n• Stille Oceaan alleen al groter dan alle land samen!\n\n**Verschil tussen continent + land**:\n• **Continent** = grote landmassa.\n• **Land** = politieke eenheid met grenzen + regering.\n• 1 continent kan vele landen hebben.\n• Bv. Europa = 50 landen.\n\n**Wereldbevolking**:\n• **8,1 miljard** mensen *(2024)*.\n• Groeit nog steeds — maar trager.\n• Verwacht piek rond **10 miljard** *(2080)*.\n• Daarna langzame daling *(minder geboorten)*.\n\n**Cito-feitje**:\n**Rusland** = grootste land ter wereld qua oppervlak *(17 mln km²)*. Strekt over **11 tijdzones** — als het 12 uur 's middags is in Moskou, is het al 8 uur 's avonds in Vladivostok.",
    checks: [
      {
        q: "Hoeveel **werelddelen**?",
        options: ["7", "5", "10", "3"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "7 werelddelen (continenten)", tekst: "De wereld wordt verdeeld in **7 werelddelen**: 1) Azië, 2) Afrika, 3) Noord-Amerika, 4) Zuid-Amerika, 5) Antarctica, 6) Europa, 7) Oceanië (Australië)." },
            { titel: "Geheugentruc: AANEZ-OA", tekst: "Onthoud volgorde (groot → klein): **A**zië, **A**frika, **N**oord-Amerika, **E**uropa, **Z**uid-Amerika, **O**ceanië, **A**ntarctica." },
            { titel: "Of variant met 5 of 6", tekst: "Sommige scholen rekenen **Amerika** als 1 (in plaats van Noord+Zuid) of laten Antarctica weg. NL-Cito gebruikt 7." },
          ],
          woorden: [
            { woord: "werelddeel", uitleg: "Continent — groot landoppervlak (Azië, Afrika, etc.)." },
            { woord: "continent", uitleg: "Synoniem van werelddeel." },
          ],
          theorie: "Cito-feit: 7 werelddelen. Onthoud namen + ongeveer hun ligging op een wereldkaart. Vragen komen vaak over: grootste, kleinste, welke landen erin liggen.",
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
        wrongHints: [null, "Klopt.", "Tweede.", "Klein.", "Wel groot maar niet grootst."],
      },
      {
        q: "**Grootste oceaan**?",
        options: ["Stille / Pacific", "Atlantisch", "Indisch", "Arctisch"],
        answer: 0,
        wrongHints: [null, "Klopt — 165 mln km².", "Tweede.", "Derde.", "Vijfde."],
      },
      {
        q: "Hoeveel **wereldbevolking** 2024?",
        options: ["~8 miljard", "1 miljard", "100 miljard", "500 miljoen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Veel minder.", "Onmogelijk.", "Te weinig."],
      },
    ],
  },
  {
    title: "Europa + Azië",
    explanation:
      "**EUROPA** 🇪🇺:\n\nNL ligt hier. **50 landen** + ~750 miljoen mensen.\n\n**EU (Europese Unie)**:\n• Sinds **1957** *(toen EEG)*.\n• **27 landen** lid *(2024)*.\n• Open grenzen *(Schengen)*.\n• **Euro** *(€)* sinds 2002.\n• Brussel = hoofdkwartier.\n\n**Grote Europese landen + hoofdsteden**:\n• **Frankrijk** *(Parijs)* — 65 mln mensen.\n• **Duitsland** *(Berlijn)* — 84 mln, grootste EU-land.\n• **Italië** *(Rome)* — 59 mln.\n• **Spanje** *(Madrid)* — 47 mln.\n• **Polen** *(Warschau)* — 38 mln.\n• **Verenigd Koninkrijk** *(Londen)* — 67 mln *(geen EU sinds Brexit 2020)*.\n• **Nederland** *(Amsterdam — hoofdstad, Den Haag — regering)* — 17,9 mln.\n• **België** *(Brussel)* — 11,7 mln.\n• **Rusland** *(Moskou)* — grootste land, deels Europa-deels Azië.\n\n**Skandinavië**:\n• **Noorwegen** *(Oslo)*, **Zweden** *(Stockholm)*, **Denemarken** *(Kopenhagen)*, **Finland** *(Helsinki)*, **IJsland** *(Reykjavik)*.\n• Welvarende landen, koud, sociaal.\n\n**Andere**:\n• Portugal, Griekenland, Ierland, Oostenrijk, Zwitserland *(buiten EU)*, Tsjechië, Hongarije, Roemenië, etc.\n\n**Bekende meren + rivieren**:\n• **Donau** *(2.860 km, door 10 landen)*.\n• **Volga** *(3.530 km, in Rusland, langste Europa)*.\n• **Rijn** *(door NL en 5 landen)*.\n• **Theems** *(Engeland)*.\n• **Seine** *(Frankrijk)*.\n\n**Bekende bergen**:\n• **Alpen** *(Italië/Zwitserland/Oostenrijk)*: **Mont Blanc** 4810 m hoogste.\n• **Pyreneeën** *(Spanje/Frankrijk)*.\n• **Karpaten** *(Oost-Europa)*.\n• **Kaukasus** *(Rusland/Georgië)*: Elbrus 5642 m, Europa's hoogste berg.\n\n**AZIË** 🌏:\n\n**~4,8 miljard** mensen *(60% wereldbevolking!)* + 48 landen.\n\n**Grote Aziatische landen + hoofdsteden**:\n• **China** *(Beijing)* — 1,41 miljard mensen, 2e van wereld.\n• **India** *(New Delhi)* — 1,43 miljard, grootste land qua mensen *(sinds 2023)*.\n• **Indonesië** *(Jakarta)* — 280 mln, NL-oude kolonie.\n• **Pakistan** *(Islamabad)*, **Bangladesh** *(Dhaka)*.\n• **Japan** *(Tokio)* — 125 mln, eilanden.\n• **Filipijnen** *(Manila)*.\n• **Vietnam, Thailand, Maleisië**.\n• **Rusland** *(deels)*.\n\n**Midden-Oosten** *(Azië)*:\n• **Saoedi-Arabië** *(Riyad)* — Mekka + Medina.\n• **Iran** *(Teheran)*.\n• **Israël** *(Jeruzalem)*, **Palestina**.\n• **Turkije** *(Ankara)* — deels Azië-deels Europa.\n• **Verenigde Arabische Emiraten** *(Abu Dhabi, Dubai)*.\n\n**Beroemde plekken**:\n• **Mount Everest** *(8.849 m, Nepal/Tibet)* — hoogste berg.\n• **Dood Zee** *(Israël)* — laagste punt op aarde *(-430 m)*.\n• **Gobi-woestijn** *(China/Mongolië)*.\n• **Yangtze** *(China)* — 3e langste rivier wereldwijd.\n• **Taj Mahal** *(India, 17e eeuw)*.\n• **Grote Muur China** *(20.000+ km)*.\n\n**Religies in Azië**:\n• Boeddhisme, hindoeïsme, islam, christendom, jodendom — allemaal **ontstaan** in Azië!\n\n**Cito-feitje**:\nDe **Stille Oceaan** *(Pacific)* is zo groot dat alle continenten samen er in zouden passen — met nog ruimte over. Genoemd '**stille**' door Magellan in 1520 omdat hij rustig water vond — vaak is hij juist niet stil.",
    checks: [
      {
        q: "Hoofdstad van **Frankrijk**?",
        options: ["Parijs", "Lyon", "Marseille", "Bordeaux"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Steden niet hoofdstad.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een hoofdstad?", tekst: "De **hoofdstad** is de belangrijkste stad van een land. Vaak zit daar de regering, het parlement en koning/president." },
            { titel: "Parijs van Frankrijk", tekst: "**Parijs** is de hoofdstad van Frankrijk. Beroemde monumenten: **Eiffeltoren** (300 m hoog, gebouwd 1889), **Louvre** (museum), **Notre-Dame** (kathedraal)." },
            { titel: "Lyon, Marseille, Bordeaux", tekst: "Dit zijn andere grote Franse steden, maar geen hoofdstad. Marseille = haven Middellandse Zee. Lyon = 2e stad. Bordeaux = wijn-streek." },
          ],
          woorden: [
            { woord: "hoofdstad", uitleg: "Belangrijkste stad waar regering zit." },
            { woord: "Parijs", uitleg: "Hoofdstad Frankrijk, ~11 mln mensen in regio." },
          ],
          theorie: "Cito-tip Europese hoofdsteden uit hoofd leren: Frankrijk-Parijs. Duitsland-Berlijn. Italië-Rome. Spanje-Madrid. UK-Londen. België-Brussel. Polen-Warschau.",
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
        options: ["India (~1,43 miljard)", "China", "VS", "Rusland"],
        answer: 0,
        wrongHints: [null, "Klopt — passeerde China 2023.", "Recent niet meer.", "Veel minder.", "Veel minder."],
      },
      {
        q: "**Hoogste berg** ter wereld?",
        options: ["Mount Everest (Nepal)", "Mont Blanc", "Kilimanjaro", "Aconcagua"],
        answer: 0,
        wrongHints: [null, "Klopt — 8849 m.", "Europa.", "Afrika.", "Zuid-Amerika."],
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
          theorie: "Cito-tip hoogtes: Everest = 8.849 m ≈ '8 km + 849 m'. Mont Blanc = 4.810 m. Mensen op vliegtuig vliegen op ~10 km hoogte = net iets hoger dan Everest!",
          voorbeelden: [
            { type: "stap", tekst: "Mount Everest = circa 9 km hoog. Wolkenkrabber Burj Khalifa = 828 m = 10x kleiner." },
            { type: "stap", tekst: "Bij Everest-top is er weinig zuurstof (~33% van zeeniveau). Klimmers nemen extra zuurstof mee." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Everest = #1 wereld. Mont Blanc = #1 Europa. Per werelddeel een topper." }],
          niveaus: {
            basis: "Mount Everest (Himalaya, Nepal) is hoogste berg: 8.849 m.",
            simpeler: "Everest ≈ 9 km hoog, hoger dan vliegtuigen vliegen.",
            nogSimpeler: "Everest = hoogste.",
          },
        },
      },
      {
        q: "Hoeveel **landen in EU** (2024)?",
        options: ["27", "50", "10", "100"],
        answer: 0,
        wrongHints: [null, "Klopt — Brexit 2020.", "Heel Europa is meer.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "EU vs Europa", tekst: "Let op het verschil:\n• **Europa** = werelddeel (~50 landen totaal)\n• **EU** = Europese Unie = club van **27 landen** die samenwerken op handel, wetten, geld.\nNiet alle Europese landen zijn EU-lid (bv. Noorwegen, Zwitserland, UK niet)." },
            { titel: "Sinds wanneer 27?", tekst: "EU is gegroeid van **6** stichtingsleden (1957) tot **28** (in 2013). In **2020** verliet **UK (Groot-Brittannië)** de EU door **Brexit**. Daarna 27 landen — dat aantal is sindsdien stabiel." },
            { titel: "Belangrijke EU-feiten", tekst: "• **Euro (€)** = munt sinds **2002** in de meeste EU-landen (niet alle, NL wel)\n• **Schengen** = open grenzen, geen paspoortcontrole tussen 26 landen\n• **Europees Parlement** in Brussel + Straatsburg = gekozen door EU-burgers\n• NL is **stichtingslid** sinds 1957." },
          ],
          woorden: [
            { woord: "EU", uitleg: "Europese Unie, club van 27 landen." },
            { woord: "Brexit", uitleg: "Vertrek van UK uit EU (2020)." },
            { woord: "stichtingslid", uitleg: "Land dat vanaf het begin lid was (NL is dat)." },
          ],
          theorie: "Cito-feit EU-cijfers: **27 landen** (2024). NL = stichtingslid. Euro sinds 2002. EU-burgers mogen vrij wonen + werken in alle 27 landen.",
          voorbeelden: [
            { type: "stap", tekst: "Voorbeelden EU-landen: NL, België, Duitsland, Frankrijk, Spanje, Italië, Polen, Griekenland, Zweden..." },
            { type: "stap", tekst: "Voorbeelden Europa MAAR niet-EU: UK (na Brexit), Noorwegen, Zwitserland, Oekraïne (kandidaat-lid)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "27 = sinds Brexit (2020). Niet 28. Niet 50 (= Europa als werelddeel)." }],
          niveaus: {
            basis: "27 EU-landen. = A.",
            simpeler: "Sinds UK eruit ging (Brexit 2020) heeft de EU 27 landen. = A.",
            nogSimpeler: "27 = A.",
          },
        },
      },
    ],
  },
  {
    title: "Amerika + Afrika + Oceanië",
    explanation:
      "**NOORD-AMERIKA** 🌎:\n\n**Verenigde Staten (VS)** *(Washington D.C.)*:\n• 333 miljoen mensen.\n• 50 staten *(California, Texas, Florida, New York, etc.)*.\n• Beroemd: Statue of Liberty, Grand Canyon, Hollywood, NASA, Disney.\n• Vlag = 'Stars and Stripes' *(50 sterren + 13 strepen)*.\n\n**Canada** *(Ottawa)*:\n• 2e grootste land in **oppervlak** *(9,98 mln km²)*.\n• Maar weinig bevolking *(40 mln)* — vooral natuur.\n• Toronto, Vancouver, Montreal.\n• Talen: Engels + Frans.\n\n**Mexico** *(Mexico-Stad)*:\n• 130 mln mensen.\n• Spaans-talig.\n• Maya + Azteken-erfgoed.\n• Cancun, Tulum *(toerisme)*.\n\n**Caribisch gebied**:\n• **Cuba** *(Havana)*, **Jamaica**, **Haïti**, **Dominicaanse Republiek**.\n• **Aruba, Curaçao, Bonaire, St. Maarten, Saba, St. Eustatius** = NL-Caribisch *(deel van Koninkrijk NL)*.\n\n**ZUID-AMERIKA** 🌎:\n\n**Brazilië** *(Brasília)*:\n• Grootste ZA-land.\n• 215 mln mensen.\n• Portugees-talig *(rest van ZA: Spaans)*.\n• Amazone-regenwoud — grootste regenwoud ter wereld.\n• Rio de Janeiro met **Christus de Verlosser**-standbeeld.\n• Beroemde carnaval.\n• Voetbal-grootmacht.\n\n**Argentinië** *(Buenos Aires)*:\n• Tango + tango.\n• Voetbal *(Messi)*.\n• Pampas *(grasvlakten)*.\n• Patagonië *(zuidpunt)*.\n\n**Chili** *(Santiago)*:\n• Lange smalle vorm langs Andes.\n• Atacama-woestijn *(droogste).*\n\n**Peru** *(Lima)*:\n• Machu Picchu *(Inca-stad)*.\n• Andes.\n\n**Andere**: Colombia, Venezuela, Ecuador, Bolivia, Paraguay, Uruguay, Guyana, Suriname *(NL-kolonie tot 1975, NL-talig)*.\n\n**AFRIKA** 🌍:\n\n**54 landen**! Veel verscheidenheid.\n\n**Noord-Afrika** *(Arabisch + islam vooral)*:\n• **Egypte** *(Cairo)*: piramides, Nijl-rivier, Sphinx.\n• **Marokko** *(Rabat)*: Sahara, Berberse cultuur.\n• **Algerije, Tunesië, Libië**.\n\n**West-Afrika**:\n• **Nigeria** *(Abuja)*: grootste land Afrika qua bevolking *(220 mln)*, Lagos-megastad.\n• **Senegal, Ghana, Ivoorkust, Mali**.\n\n**Oost-Afrika**:\n• **Ethiopië** *(Addis Abeba)*: oudste mens-fossielen.\n• **Kenia** *(Nairobi)*: safari + Masai.\n• **Tanzania** *(Dodoma)*: Kilimanjaro, Serengeti.\n\n**Zuid-Afrika** *(Pretoria/Kaapstad/Bloemfontein — 3 hoofdsteden)*:\n• 60 mln.\n• Nelson Mandela.\n• Apartheid-verleden tot 1994.\n• Afrikaans-taal *(uit Nederlands)*.\n• Tafelberg.\n\n**Sahara**: grootste hete woestijn *(9 mln km²)*.\n**Nijl**: langste rivier ter wereld *(6.650 km)*.\n**Victoria-meer**: groot meer Oost-Afrika.\n**Kilimanjaro** *(Tanzania)*: 5895 m, hoogste Afrika.\n\n**Dieren-erfgoed**:\nGiraffes, olifanten, leeuwen, neushoorns, gorilla's, chimpansees, zebra's, krokodillen.\n\n**OCEANIË / AUSTRALIË** 🇦🇺:\n\n**Australië** *(Canberra)*:\n• 26 mln mensen.\n• Eiland-continent.\n• Bekende plekken: Sydney *(Opera House)*, Great Barrier Reef, Uluru *(Ayers Rock)*.\n• Dieren: kangoeroe, koala, vogelbekdier, krokodil.\n• Bevolking: 80% **aan kust** *(binnenland = woestijn 'outback')*.\n\n**Nieuw-Zeeland** *(Wellington)*:\n• 2 grote eilanden.\n• Lord of the Rings-filmlocaties.\n• Schapen-grootmacht *(meer schapen dan mensen)*.\n• Maori-cultuur.\n\n**Eilanden Pacific**:\n• **Papoea-Nieuw-Guinea, Fiji, Samoa, Tonga, Vanuatu**.\n• Klein vele eilanden.\n\n**Hawaï** *(VS-staat)*: vulkanische eilanden in Pacific.\n\n**Antarctica** ❄️:\n• Geen vaste bewoners.\n• 70 onderzoeksstations van verschillende landen.\n• Bevroren land.\n• Pinguïns, zeehonden.\n• 30 miljoen jaar geleden was er bos!\n• Klimaatverandering = ijs smelt.\n\n**Cito-feitje**:\nIn **Australië** rij je **links** op de weg *(zoals UK, Japan, India, Zuid-Afrika)*. In meeste landen rechts. Historisch *(Romeinen + ridders met zwaard rechts → links rijden)*. Helft van wereld rijdt links, helft rechts.",
    checks: [
      {
        q: "Hoofdstad van **Brazilië**?",
        options: ["Brasília", "Rio de Janeiro", "São Paulo", "Buenos Aires"],
        answer: 0,
        wrongHints: [null, "Klopt — niet Rio!.", "Bekend maar niet hoofdstad.", "Bekend maar niet hoofdstad.", "Argentinië."],
      },
      {
        q: "**Langste rivier** ter wereld?",
        options: ["Nijl (Egypte, 6650 km)", "Amazone", "Yangtze", "Mississippi"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tweede — Amazone.", "Derde — China.", "Vierde — VS."],
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
          theorie: "Cito-feit rivieren:\n• Langste = **Nijl** (Afrika)\n• Meeste water = **Amazone** (Zuid-Amerika, ~20% van zoet rivierwater wereld)\n• In NL: **Rijn** = belangrijkste rivier (vanuit Duitsland naar Noordzee).",
          voorbeelden: [
            { type: "stap", tekst: "De Nijl heeft 2 bronnen: Witte Nijl (Uganda) + Blauwe Nijl (Ethiopië). Komen samen in Sudan." },
            { type: "stap", tekst: "Bij de monding (Egypte, Middellandse Zee) ligt een grote **delta** met veel vruchtbare grond." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Nijl = #1 lengte. Amazone = #1 water-volume. Allebei top, maar verschillende rangordes." }],
          niveaus: {
            basis: "De Nijl is langste rivier ter wereld. = A.",
            simpeler: "De Nijl (Egypte/Afrika) is ~6.650 km lang — langste ooit. = A.",
            nogSimpeler: "Nijl = A.",
          },
        },
      },
      {
        q: "Welk land heeft **Tafelberg** + Mandela?",
        options: ["Zuid-Afrika", "Nigeria", "Egypte", "Brazilie"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Andere.", "Andere.", "Niet."],
      },
      {
        q: "Welk dier is **typisch Australië**?",
        options: ["Kangoeroe", "Leeuw", "Tijger", "Olifant"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Afrika.", "Azië.", "Afrika/Azië."],
        uitlegPad: {
          stappen: [
            { titel: "Australië = uniek dieren", tekst: "Australië is een **eiland-continent** — al miljoenen jaren afgezonderd van rest van wereld. Daarom evolueerden er **unieke dieren** die nergens anders voorkomen." },
            { titel: "Kangoeroe = top-icoon", tekst: "De **kangoeroe** hupt rond in Australische binnenland (outback) + komt op de **vlag/munten** voor. Bijzondere eigenschap: vrouwtje heeft een **buidel** waarin de baby ('joey') opgroeit. Heet een **buideldier**." },
            { titel: "Andere typische Australische dieren", tekst: "• **Koala** (buideldier, eet alleen eucalyptus-blad)\n• **Vogelbekdier** (eierleggend zoogdier — heel zeldzaam!)\n• **Wombat** (buideldier, lijkt op kleine beer)\n• **Krokodil** + **Tasmaanse duivel** + **emu**\n• Veel **giftige slangen + spinnen**." },
          ],
          woorden: [
            { woord: "buideldier", uitleg: "Zoogdier met buidel waarin baby groeit (kangoeroe, koala, wombat)." },
            { woord: "outback", uitleg: "Onbevolkt droog binnenland Australië." },
            { woord: "endemisch", uitleg: "Komt alleen voor in 1 specifieke regio." },
          ],
          theorie: "Cito-feit Australië:\n• Eiland-continent in Oceanië.\n• Hoofdstad **Canberra** (niet Sydney!).\n• Beroemd: Opera House Sydney, Uluru rots, Great Barrier Reef.\n• Dieren: kangoeroe, koala, vogelbekdier = endemisch.\n• Leeuw, tijger, olifant = NIET Australië (Afrika/Azië).",
          voorbeelden: [
            { type: "stap", tekst: "Wapen-dier Australië: kangoeroe + emu — beide kunnen niet achteruit lopen (symbool voor 'altijd voorwaarts')." },
            { type: "stap", tekst: "Niet Australië: leeuw/giraffe = Afrika. Tijger/panda = Azië. IJsbeer = Noordpool." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Australië-trio: kangoeroe, koala, vogelbekdier. Allemaal uniek voor dit eiland-continent." }],
          niveaus: {
            basis: "Kangoeroe. = A.",
            simpeler: "Kangoeroes huppen rond in Australië en zijn op de vlag/munten te zien. Typisch dier. = A.",
            nogSimpeler: "Kangoeroe = A.",
          },
        },
      },
    ],
  },
  {
    title: "Eind-toets — wereld mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Hoeveel **werelddelen**?", options: ["7", "5", "10", "3"], answer: 0, wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Te weinig."] },
      { q: "**Grootste** werelddeel?", options: ["Azië", "Afrika", "Europa", "Australie"], answer: 0, wrongHints: [null, "Klopt.", "Tweede.", "Klein.", "Kleinst."] },
      { q: "**Hoogste berg** ter wereld?", options: ["Mount Everest", "Mont Blanc", "Kilimanjaro", "Aconcagua"], answer: 0, wrongHints: [null, "Klopt — Nepal.", "Europa.", "Afrika.", "Zuid-Amerika."] },
      { q: "Hoofdstad **Frankrijk**?", options: ["Parijs", "Lyon", "Berlijn", "Madrid"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Duitsland.", "Spanje."] },
      { q: "**Hoofdstad** Brazilië?", options: ["Brasília", "Rio", "Buenos Aires", "Lima"], answer: 0, wrongHints: [null, "Klopt.", "Stad maar geen hoofdstad.", "Argentinië.", "Peru."] },
      { q: "**Grootste oceaan**?", options: ["Stille / Pacific", "Atlantisch", "Indisch", "Arctisch"], answer: 0, wrongHints: [null, "Klopt.", "Tweede.", "Derde.", "Klein."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const werelddelenLandenPo = {
  id: "werelddelen-landen-po",
  title: "Werelddelen + landen (Cito groep 6-8)",
  emoji: "🌍",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — aardrijkskunde / topografie",
  prerequisites: [
    { id: "continenten-wereld-po", title: "Continenten wereld", niveau: "1F" },
    { id: "topografie-nederland", title: "Topografie NL", niveau: "1F" },
  ],
  intro:
    "Werelddelen + landen voor Cito groep 6-8 — 7 continenten + 5 oceanen + grote landen + hoofdsteden (Frankrijk-Parijs, Brazilië-Brasília etc.) + bekende plekken (Everest, Sahara, Nijl, Amazone, Great Wall, Christ Verlosser, Taj Mahal) + Antarctica. ~15 min.",
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
