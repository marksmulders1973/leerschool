// Leerpad: Waterkringloop - groep 6-8 natuur/aardrijkskunde.
// Cito-relevant. 1F. 4 stappen.

const stepEmojis = ["💧", "☁️", "🚿", "🏆"];

const chapters = [
  { letter: "A", title: "De kringloop", emoji: "💧", from: 0, to: 0 },
  { letter: "B", title: "Wolken + neerslag", emoji: "☁️", from: 1, to: 1 },
  { letter: "C", title: "Water in NL + thuis", emoji: "🚿", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Hoe werkt de waterkringloop?",
    explanation:
      "**Waterkringloop** *(water-cyclus)* = water dat **rondgaat** op aarde — verdamping, wolken, regen, terug naar zee.\n\n**Hoeveelheid water op aarde**:\n• **71% van aardoppervlak** = water.\n• Daarvan **97% zout** *(zeeën + oceanen)*.\n• Slechts **3% zoet water**:\n  - 2,5% bevroren *(poolijs + gletsjers)*.\n  - 0,5% vloeibaar *(rivieren, meren, grondwater)*.\n• Totaal blijft **gelijk** — water verdwijnt niet, alleen verplaatst.\n\n**Vier stappen** van de kringloop:\n\n**1. Verdamping (evaporatie)** ☀️\n• Zonnewarmte verandert vloeibaar water in **damp** *(gas)*.\n• Gebeurt vooral op zeeën + oceanen.\n• Ook bij meren, rivieren, planten *(transpiratie)*, jouw zweet.\n• Per dag verdampt **~1200 km³** water wereldwijd.\n\n**2. Condensatie** ☁️\n• Damp stijgt op + koelt af in hogere luchtlagen.\n• Wordt **kleine waterdruppels** *(of ijskristallen)*.\n• Vormt **wolken**.\n• Hoe meer afkoeling, hoe meer condensatie.\n\n**3. Neerslag** 🌧️\n• Wolken te zwaar → druppels vallen.\n• Vormen:\n  - **Regen** *(vloeibaar)*.\n  - **Sneeuw** *(bevroren druppels in vlokken)*.\n  - **Hagel** *(ijsklompjes)*.\n  - **IJzel** *(regen die bevriest bij contact)*.\n  - **Mist** *(wolk op grondniveau)*.\n  - **Dauw** *(condens op koud oppervlak 's nachts)*.\n\n**4. Afstroming + grondwater** 🏞️\n• Water op aarde gaat naar:\n  - **Beken + rivieren** *(stromen naar zee)*.\n  - **Meren** *(blijven liggen)*.\n  - **Grondwater** *(zakt in bodem)*.\n  - **Gletsjers** *(bevriest bovenin bergen)*.\n• Water bereikt uiteindelijk weer **zee**.\n• Cyclus begint opnieuw.\n\n**Versie kort**:\nZee → verdamping → wolken → regen → land → rivier → zee.\n\n**Hoe lang duurt de cyclus?**\n• Een waterdruppel kan **eeuwen** in oceaan, **wereken** in atmosfeer, **dagen** in rivier, **duizenden jaren** in poolijs.\n• Gemiddeld: 1 cyclus = ~8-10 dagen voor wolkenwater.\n\n**Water = altijd zelfde water**:\n• Het water dat een dinosaurus dronk is misschien in jouw glas vandaag.\n• Hele kringloop op aarde = ~4 miljard jaar oud.\n• Geen nieuw water 'gemaakt' — alleen omgezet tussen vormen.\n\n**Cito-feitje**:\nDe **diepste plek in oceaan** *(Marianentrog, Stille Oceaan)* is **11 km diep** — daar zou de **Mount Everest** *(8848 m)* in kunnen + nog 2 km over.",
    checks: [
      {
        q: "Hoeveel **zoet water** op aarde (totaal water)?",
        options: ["~3%", "50%", "97%", "99%"],
        answer: 0,
        wrongHints: [null, "Klopt — meeste is zout.", "Veel meer.", "Zout water.", "Te hoog."],
        uitlegPad: {
          stappen: [
            { titel: "97% zout / 3% zoet", tekst: "Van al het water op aarde is **97% ZOUT** water (zeeën + oceanen). Slechts **3% is ZOET** water — dat is waar we van drinken, koken, douchen." },
            { titel: "Maar nog minder beschikbaar...", tekst: "Van die 3% zoet water:\n• **2,5%** zit in **POLEN + GLETSJERS** als ijs (niet direct te gebruiken)\n• **0,5%** is vloeibaar = rivieren, meren, grondwater.\nDus uiteindelijk is maar **0,5% van al het water op aarde** direct bruikbaar voor mensen!" },
            { titel: "Vergelijking met bad", tekst: "Stel je voor: alle water op aarde = 100 emmers.\n• 97 emmers = zout (zee)\n• 2,5 emmers = ijs (pool)\n• 0,5 emmer = drinkbaar.\nDat halve emmertje moet 8 miljard mensen + dieren + planten voeden!" },
          ],
          woorden: [
            { woord: "zoet water", uitleg: "Water zonder veel zout — drinkbaar voor mens." },
            { woord: "zout water", uitleg: "Zeewater — onbruikbaar voor drinken/planten." },
          ],
          theorie: "Cito-feit waterverdeling:\n• 71% aardoppervlak = water.\n• 97% zout, 3% zoet.\n• 2,5% ijs, 0,5% vloeibaar.\n• Daarom: **waterbesparing** belangrijk.",
          voorbeelden: [
            { type: "stap", tekst: "Klimaatverandering doet poolijs smelten. Wordt zoet water in zee = wordt zout = onbruikbaar." },
            { type: "stap", tekst: "Sommige landen (Saoedi-Arabië, Israël) maken zoet water uit zeewater (ontzilten). Duur." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud: 3% zoet (slechts!). 97% is zout. Wij zijn allemaal afhankelijk van die kleine 3%." }],
          niveaus: {
            basis: "~3% zoet water. = A.",
            simpeler: "97% van aarde-water = zout. Slechts 3% is zoet (drinkbaar). = A.",
            nogSimpeler: "3% = A.",
          },
        },
      },
      {
        q: "Wat is **verdamping**?",
        options: ["Vloeibaar water → damp", "Damp → vloeibaar", "Wolken naar regen", "IJs smelt"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Condensatie.", "Neerslag.", "Smelten."],
        uitlegPad: {
          stappen: [
            { titel: "3 toestanden van water", tekst: "Water kan in 3 vormen voorkomen: VAST (ijs), VLOEIBAAR (water uit kraan) en GAS (damp/stoom)." },
            { titel: "Verdamping = vloeibaar → gas", tekst: "Bij verdamping wordt water UIT vloeibaar UIT gas (damp). Dit gebeurt door warmte: het water krijgt energie en 'vliegt weg' als gas." },
            { titel: "Dagelijks voorbeeld", tekst: "Natte plas die in de zon ligt → na een uur droog. Het water is verdampt — de gas-vorm is in de lucht gegaan." },
          ],
          woorden: [
            { woord: "verdamping", uitleg: "Vloeibaar water wordt damp (gas)." },
            { woord: "condensatie", uitleg: "Andersom: damp wordt weer vloeibaar." },
            { woord: "damp", uitleg: "Water in gas-vorm (onzichtbaar). Stoom = damp + heel kleine druppeltjes." },
          ],
          theorie: "Cito-tip waterkringloop: VERDAMPING (op aarde, door warmte) → CONDENSATIE (in lucht, koud) → NEERSLAG (regen/sneeuw) → terug op aarde. Steeds dezelfde rondje.",
          voorbeelden: [
            { type: "stap", tekst: "Was aan de lijn → wind/zon verdampt het water → droog." },
            { type: "stap", tekst: "Zee verdampt door zon → water gaat omhoog → wolken → regen elders." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Verdamping = naar BOVEN (warm). Condensatie = naar BENEDEN (koud). Omgekeerde processen." }],
          niveaus: {
            basis: "Verdamping = vloeibaar water wordt damp/gas.",
            simpeler: "Natte plas droogt op door zon = verdampt.",
            nogSimpeler: "Water → gas.",
          },
        },
      },
      {
        q: "Wat is **condensatie**?",
        options: ["Damp koelt af → wolken", "Regen valt", "Water bevriest", "Verdampen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Neerslag.", "Niet primair.", "Tegenovergesteld."],
      },
      {
        q: "Hoe lang duurt **gemiddeld cyclus** wolkenwater?",
        options: ["~8-10 dagen", "1 uur", "Eeuwen", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te kort.", "Wel sommige plekken, niet gemiddeld.", "Wel."],
      },
    ],
  },
  {
    title: "Wolken + soorten neerslag",
    explanation:
      "**Wolken** = veel kleine waterdruppels + ijskristallen samen.\n\n**Hoe ontstaan wolken?**\n• Warme lucht stijgt *(want lichter)*.\n• Bij hoogte koelt het af.\n• **Waterdamp** in lucht **condenseert** rond stofdeeltjes.\n• Miljarden druppels samen = wolk.\n\n**Hoeveel weegt een wolk?**\n• Een gemiddelde cumulus-wolk weegt ~500 ton *(zo zwaar als 100 olifanten)*!\n• Druppels heel klein dus blijven zweven.\n\n**Soorten wolken** *(op basis van hoogte + vorm)*:\n\n**Hoge wolken** *(boven 5 km)*:\n• **Cirrus** *(veerwolken)*: dun, wit, sliertvormig.\n• **Cirrocumulus**: kleine schaapjes.\n• Bestaan vaak uit ijskristallen.\n\n**Middelhoge wolken** *(2-5 km)*:\n• **Altocumulus**: grote witte schapen.\n• **Altostratus**: grijze laag, zon zichtbaar maar wazig.\n\n**Lage wolken** *(onder 2 km)*:\n• **Stratus**: lage grijze laag *(soort mist hoger)*.\n• **Cumulus**: grote witte bolwolken *(zomerse stapelwolk)*.\n• **Stratocumulus**: groot stukken bewolking.\n\n**Verticaal-uitgebreid**:\n• **Cumulonimbus**: enorme stapelwolken *(onweerswolk)*. Kan **15 km hoog** worden.\n• Brengt regen, hagel, onweer, soms tornado.\n\n**Voorspellen weer**:\n• Stapelwolken *(cumulonimbus)* → bui komt.\n• Sluierwolken *(cirrus)* → vaak goed weer.\n• Lage grijze laag *(stratus)* → bewolkt + miezerige regen.\n\n**Soorten neerslag** 🌧️:\n\n**1. Regen**:\n• Druppels groter dan 0,5 mm.\n• Bij temperatuur boven 0°C.\n• Per jaar in NL: ~850 mm (= 850 L/m²).\n\n**2. Motregen / miezer**:\n• Hele kleine druppels *(<0,5 mm)*.\n• Hangt in lucht.\n\n**3. Sneeuw**:\n• IJskristallen in wolk groeien tot vlokken.\n• Bij temperatuur onder 0°C.\n• Elke sneeuwvlok uniek *(6-hoekige structuur)*.\n• 10 cm sneeuw = ~1 cm water.\n\n**4. Hagel**:\n• Druppels gaan op + neer in cumulonimbus → vriezen + groeien.\n• Soms zo groot als knikker of ei.\n• Kan schade doen aan auto's + gewassen.\n\n**5. Ijzel**:\n• Druppels bevriezen bij contact met **koude grond/bomen**.\n• Glad ijslaag.\n• Gevaarlijk verkeer.\n\n**6. Mist + dauw**:\n• **Mist** = wolk op grondniveau, zicht <1 km.\n• **Dauw** = condens 's nachts op gras (koudere oppervlak).\n• **Rijp** = bevroren dauw.\n\n**7. Regenboog** 🌈:\n• Bij regen + zon.\n• Zonlicht breekt in druppel → 7 kleuren *(rood-oranje-geel-groen-blauw-indigo-violet)*.\n• 'Boog' want druppels bollen — kleuren in cirkel.\n• Soms **dubbele regenboog** *(2e flauwer, kleuren omgekeerd)*.\n\n**Cito-feitje**:\nEen **regenboog** zie je alleen wanneer de **zon achter** je staat + regen voor. Bij volle zon kan **dauw**-regenboog op gras ontstaan. Aan einde van regenboog ligt geen pot goud (sprookje) — geen einde, het is een **cirkel**.",
    checks: [
      {
        q: "Welke wolk brengt **onweer**?",
        options: ["Cumulonimbus", "Cirrus", "Stratus", "Altostratus"],
        answer: 0,
        wrongHints: [null, "Klopt — enorme stapelwolk.", "Hoog veer.", "Lage laag.", "Middelhoog."],
        uitlegPad: {
          stappen: [
            { titel: "Cumulonimbus = onweerswolk", tekst: "De **cumulonimbus** is de **grootste + krachtigste** wolksoort. 'Cumulo' = stapel, 'nimbus' = regen. Dus letterlijk: 'stapel-regen-wolk'. Kan **tot 15 km hoog** worden — hoger dan de Mount Everest!" },
            { titel: "Wat doet hij?", tekst: "Cumulonimbus brengt:\n• **Hevige regen** + soms HAGEL\n• **Onweer** (bliksem + donder)\n• Soms **tornado** (extreem)\n• Felle wind aan onderkant.\nLetterlijk staat zo'n wolk vol water + ijs + elektriciteit." },
            { titel: "Hoe herken je 'm?", tekst: "Heel kenmerkend: **aambeeld-vorm** bovenin (door wind hoog in atmosfeer). Donker grijs/zwart aan onderkant. Soms ziet hij eruit als een **bloemkool** van wolken. Kom zo'n wolk tegen? **Schuil!**" },
          ],
          woorden: [
            { woord: "cumulonimbus", uitleg: "Grootste wolksoort, brengt onweer + hevige regen." },
            { woord: "aambeeld", uitleg: "Platte top van cumulonimbus (lijkt op smid-aambeeld)." },
          ],
          theorie: "Cito-feit wolksoorten:\n• **Cirrus** (hoog, dun, veer) = mooi weer\n• **Cumulus** (witte bol, zomer) = goed\n• **Stratus** (lage grijze laag) = miezerig\n• **Cumulonimbus** (enorm) = ONWEER\nElk geeft hint over wat voor weer komt.",
          voorbeelden: [
            { type: "stap", tekst: "Zomerse middag: kleine cumulus-wolken op blauwe lucht = mooi weer. Als ze samengroeien + worden hoge cumulonimbus → bui-tje opbouw." },
            { type: "stap", tekst: "Tegen middag: lucht warm → opstijgt → koelt af → wolk groeit groter → cumulonimbus → onweer." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Cumulo-NIMBUS = NIMBUS = regen. Plus stapel-vorm. Onthoud die combinatie." }],
          niveaus: {
            basis: "Cumulonimbus = onweerswolk. = A.",
            simpeler: "De grote stapel-wolk (tot 15 km hoog) brengt onweer + regen + hagel. = A.",
            nogSimpeler: "Cumulonimbus = A.",
          },
        },
      },
      {
        q: "Hoeveel weegt **gemiddelde cumulus-wolk**?",
        options: ["~500 ton", "1 kg", "Geen gewicht", "1 miljoen ton"],
        answer: 0,
        wrongHints: [null, "Klopt — 100 olifanten.", "Te weinig.", "Wel zwaar.", "Te veel."],
      },
      {
        q: "Wat is **ijzel**?",
        options: ["Regen die bevriest bij contact", "Sneeuw", "Hagel", "Mist"],
        answer: 0,
        wrongHints: [null, "Klopt — glad.", "Niet.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is ijzel?", tekst: "IJzel is regen die WEL vloeibaar uit de wolk valt, MAAR meteen bevriest zodra het de grond, bomen of auto's raakt." },
            { titel: "Wanneer?", tekst: "Komt voor als de grond en oppervlakken eerder al onder 0°C waren (bv. na een koude nacht), terwijl de regen-druppel zelf nog vloeibaar is bij het vallen." },
            { titel: "Gevaarlijk!", tekst: "Geeft een **gladde ijslaag** op wegen + stoepen. Heel glad — daarom waarschuwen KNMI en gemeente met code geel/oranje voor ijzel." },
          ],
          woorden: [
            { woord: "ijzel", uitleg: "Regen die bevriest op koude grond → ijslaag." },
            { woord: "hagel", uitleg: "Iets ANDERS: bevroren druppels die uit cumulonimbus-wolken vallen (al bevroren tijdens val)." },
            { woord: "sneeuw", uitleg: "Iets ANDERS: ijskristallen die in wolk al vriezen en samen vlokken vormen." },
          ],
          theorie: "Cito-truc neerslagsoorten: SNEEUW = al bevroren in wolk + valt als vlok. HAGEL = bevroren door op-en-neer in onweerswolk. IJZEL = vloeibaar gevallen + pas op grond bevroren. Heel verschillende processen!",
          voorbeelden: [
            { type: "stap", tekst: "Na een koude nacht (vorst) regent het lichtjes. De druppels bevriezen direct op je auto-ruit = ijzel." },
            { type: "stap", tekst: "Tijdens een zomeronweer vallen erwt-grote bevroren bolletjes = hagel (al bevroren bij vallen)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "IJzel = regen die WORDT ijs. Hagel = al ijs als het valt. Sneeuw = al ijs (zacht en wit) in wolk." }],
          niveaus: {
            basis: "IJzel = regen die bevriest bij contact met koude grond.",
            simpeler: "Vloeibare regen + koude grond = ijslaag.",
            nogSimpeler: "IJzel = glad ijs.",
          },
        },
      },
      {
        q: "Hoeveel **kleuren** in regenboog?",
        options: ["7 (ROYGBIV)", "3", "10", "Oneindig"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Wel onderscheidbaar 7."],
        uitlegPad: {
          stappen: [
            { titel: "7 kleuren in vaste volgorde", tekst: "Een regenboog heeft altijd **7 kleuren** in dezelfde volgorde, van **buitenste** (rood) naar **binnenste** (violet):\n1. **Rood**\n2. **Oranje**\n3. **Geel**\n4. **Groen**\n5. **Blauw**\n6. **Indigo** (donkerblauw)\n7. **Violet** (paars)" },
            { titel: "Ezelsbruggetje: ROYGBIV", tekst: "Engelse afkorting: **R**ed-**O**range-**Y**ellow-**G**reen-**B**lue-**I**ndigo-**V**iolet = ROYGBIV. Spreek je uit als 'roi-bif'. Klinkt raar maar werkt om volgorde te onthouden." },
            { titel: "Hoe ontstaat het?", tekst: "Wit zonlicht IS eigenlijk een MIX van alle kleuren. Als zonlicht een regendruppel raakt, BREEKT het in deze 7 kleuren. Daarom: regenboog = zon + regen tegelijk." },
          ],
          woorden: [
            { woord: "regenboog", uitleg: "7-kleurige boog door zonlicht in regendruppels." },
            { woord: "spectrum", uitleg: "Alle kleuren van wit licht (zoals uit een prisma)." },
          ],
          theorie: "Cito-feit regenboog:\n• 7 kleuren = ROYGBIV.\n• Zon achter jou, regen voor je.\n• Soms **dubbele** regenboog (2e zwakker, kleuren OMGEKEERD).\n• In Engels al sinds 1600s.\n• Newton ontdekte dat wit licht uit kleuren bestaat (prisma-experiment).",
          voorbeelden: [
            { type: "stap", tekst: "Sprookjes: 'aan einde van regenboog ligt pot goud.' Wetenschap: regenboog heeft GEEN einde — het is een cirkel. Vanaf grond zien wij alleen de bovenste helft." },
            { type: "stap", tekst: "Prisma-experiment: wit licht door driehoekig glas-blok → 7 kleuren komen eruit. Newton deed dit in 1666." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "7 kleuren, ROYGBIV. Buiten = rood, binnen = violet. Onthoud volgorde." }],
          niveaus: {
            basis: "7 kleuren (rood-oranje-geel-groen-blauw-indigo-violet). = A.",
            simpeler: "Regenboog heeft altijd 7 kleuren in vaste volgorde. = A.",
            nogSimpeler: "7 = A.",
          },
        },
      },
    ],
  },
  {
    title: "Water in Nederland + thuis",
    explanation:
      "**Water in NL** — speciaal hoofdstuk, want NL is een **waterland**.\n\n**NL kenmerken**:\n• Een **kwart van NL** ligt **onder zeeniveau**.\n• Zonder dijken zou groot deel onder water staan.\n• 18% van NL = water.\n• 7000 km dijken + 14.500 km waterwegen.\n\n**Belangrijke rivieren**:\n• **Rijn** *(uit Zwitserland)* → splitst in **Waal, Lek, IJssel** in NL.\n• **Maas** *(uit Frankrijk)*.\n• **Schelde** *(uit België → Westerschelde)*.\n• **IJssel** + **Vecht** + **Eem** *(kleinere)*.\n\n**Meren + zee**:\n• **IJsselmeer** *(vroeger Zuiderzee — afgesloten 1932 door Afsluitdijk)*.\n• **Markermeer** *(deel van IJsselmeer)*.\n• **Noordzee** *(West NL)*.\n• **Waddenzee** *(boven NL — UNESCO)*.\n\n**Polders** 🌾:\n• Land dat **drooggemaakt** is.\n• Vroeger zee of moeras.\n• Bekend: **Flevoland** *(hele provincie was Zuiderzee)*.\n• **Beemster** *(UNESCO, 17e eeuw)*.\n• Werkt met **gemalen + dijken**.\n\n**Watermanagement**:\n• **Rijkswaterstaat**: rijk-niveau *(grote rivieren, snelwegen-bruggen)*.\n• **Waterschappen** *(21 stuks)*: regionaal *(dijken, water-niveau)*.\n• **Deltawerken** *(1953-1997)*: na Watersnoodramp 1953, beschermen tegen storm + zeespiegelstijging.\n\n**Watersnoodramp 1953**:\n• Februari 1953 → **stormvloed** + springtij.\n• Dijken braken in Zeeland + Zuid-Holland.\n• **1836 doden**.\n• Reactie: **Deltawerken** gebouwd.\n• Bekendste: **Oosterscheldekering** *(stormstuw)*.\n\n**Water thuis**:\n\n**Drinkwater**:\n• In NL: **kraanwater = veiligste ter wereld**.\n• Komt uit **grondwater** + duin-water + rivieren *(gezuiverd)*.\n• 10 grote drinkwaterbedrijven *(Waternet, Vitens, Dunea, etc.)*.\n• Kosten: ~€2 per 1000 L.\n• In flesje: 1000x duurder.\n\n**Hoeveel gebruiken we?**\n• Gemiddelde Nederlander: **~130 L per dag**.\n• Daarvan: douchen (39 L), wc (35 L), kleren-wassen (15 L), drinken+koken (5 L), rest.\n• Vergelijking: VS = 300 L/dag.\n\n**Riolering**:\n• Vies water uit huis → riool → **waterzuivering**.\n• Waterzuiveringinstallaties filteren + maken schoon.\n• Daarna terug in rivier.\n\n**Waterbesparing**:\n• Kort douchen *(5 min ipv 15)*: scheelt 70 L.\n• Wc niet als prullenbak.\n• Tuin sproeien 's avonds *(minder verdamping)*.\n• Regenton voor planten.\n• Vaatwasser ipv handwas *(minder water!)*.\n\n**Hard vs zacht water**:\n• In NL: vooral **hard water** *(veel kalk)*.\n• Goed voor botten, maar kalkaanslag op kraan + apparaten.\n• In sommige regio's *(Limburg, kuststreek)* zacht water.\n\n**Watervervuiling**:\n• Plastic in oceanen — **plastic soup**.\n• Medicijnresten in rivieren *(uit urine + afval)*.\n• Microplastics in vis + kraanwater.\n• Probleem: niet alles te filteren.\n\n**Cito-feitje**:\nIn **NL is drinkwater zo schoon** dat er amper bleekmiddel/chloor in zit. In andere landen *(VS, Frankrijk)* wel veel chloor. Daarom proeft NL-kraanwater 'puur'. **Niet** in flessen drinken — slechter voor milieu + duurder.",
    checks: [
      {
        q: "Hoeveel **NL onder zeeniveau**?",
        options: ["~25%", "100%", "0%", "75%"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te veel.", "Wel.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Nederland is een waterland", tekst: "Een KWART van Nederland (= ~25%) ligt LAGER dan zeeniveau. Dat betekent: zonder dijken zou een groot deel onder water staan!" },
            { titel: "Welke delen?", tekst: "Vooral het westen (Zuid-Holland, Noord-Holland, Flevoland, Zeeland). Het laagste punt is in Nieuwerkerk aan den IJssel = -6,76 m onder zeeniveau." },
            { titel: "Hoe blijft het droog?", tekst: "Met **dijken** (7.000 km in NL) houden we het zeewater buiten. Met **gemalen** pompen we overtollig water weg naar zee of rivieren." },
          ],
          woorden: [
            { woord: "zeeniveau", uitleg: "Hoogte van de zee, gebruikt als nul-punt." },
            { woord: "polder", uitleg: "Land dat drooggemaakt is met dijken en gemalen." },
            { woord: "dijk", uitleg: "Wal van aarde/stenen om water tegen te houden." },
          ],
          theorie: "Cito-feit: NL is bijzonder omdat we leven achter dijken op land dat eigenlijk onder water hoort. Daarom hebben we waterschappen, gemalen en de Deltawerken om veilig te blijven.",
          voorbeelden: [
            { type: "stap", tekst: "Flevoland: hele provincie was vroeger de Zuiderzee. Nu polder met steden (Almere, Lelystad)." },
            { type: "stap", tekst: "Beemster (UNESCO): in 17e eeuw drooggemaakt met windmolens." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Een kwart = 25% = 1/4 van NL. Zonder dijken zou je nog steeds in 75% van NL kunnen wonen." }],
          niveaus: {
            basis: "~25% van NL ligt onder zeeniveau, beschermd door dijken.",
            simpeler: "Een kwart van NL is lager dan de zee. Dijken houden water tegen.",
            nogSimpeler: "1/4 onder zee, dijken redden.",
          },
        },
      },
      {
        q: "Wanneer **Watersnoodramp**?",
        options: ["1953", "1900", "2000", "1850"],
        answer: 0,
        wrongHints: [null, "Klopt — 1836 doden.", "Te vroeg.", "Veel later.", "Te vroeg."],
      },
      {
        q: "Hoeveel **water per dag** Nederlander?",
        options: ["~130 L", "10 L", "500 L", "1 L"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Veel meer.", "VS-niveau.", "Veel meer."],
      },
      {
        q: "Wat is een **polder**?",
        options: ["Drooggemaakt land", "Berg", "Meer", "Stad"],
        answer: 0,
        wrongHints: [null, "Klopt — bv Flevoland.", "Niet.", "Niet primair.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — water mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Verdamping** = ?", options: ["Vloeibaar → damp", "Damp → vloeibaar", "Bevriezen", "Smelten"], answer: 0, wrongHints: [null, "Klopt.", "Condensatie.", "Niet.", "Niet."] },
      { q: "Welke **wolk** = onweer?", options: ["Cumulonimbus", "Cirrus", "Stratus", "Altocumulus"], answer: 0, wrongHints: [null, "Klopt — enorme stapelwolk.", "Geen onweer.", "Geen onweer.", "Geen onweer."] },
      { q: "Hoeveel **zoet water** op aarde?", options: ["~3%", "50%", "100%", "97%"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Wel water maar zout.", "Zout."] },
      { q: "**Polder** = ?", options: ["Drooggemaakt land", "Bergweide", "Meer", "Niet bestaand"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Wel."] },
      { q: "Wanneer **Afsluitdijk**?", options: ["1932 (sloot Zuiderzee af)", "1953", "1900", "Nooit"], answer: 0, wrongHints: [null, "Klopt — werd IJsselmeer.", "Watersnood.", "Te vroeg.", "Wel."] },
      { q: "Hoeveel **kleuren** regenboog?", options: ["7", "3", "10", "1"], answer: 0, wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Niet."] },
      {
        q: "Welke 4 hoofdstappen vormen samen de **waterkringloop**?",
        options: ["Verdamping → wolken → neerslag → afstromen terug naar zee", "Eten → drinken → plassen → slapen", "Zonsopgang → middag → zonsondergang → nacht", "Lente → zomer → herfst → winter"],
        answer: 0,
        wrongHints: [null, "Klopt — eindeloze cyclus van water op aarde.", "Mens-gebonden — waterkringloop is natuur-fenomeen.", "Dagcyclus — andere natuurkunde.", "Seizoenen — ook andere cyclus."],
        uitlegPad: {
          stappen: [
            { titel: "De 4 stappen van de waterkringloop", tekst: "Water op aarde gaat oneindig **rond** via 4 hoofdstappen:\n\n1. **Verdamping** ☀️ — water in zeeën/meren verdampt door zonnewarmte → waterdamp gaat omhoog\n2. **Wolken vormen** ☁️ — hoog in lucht koelt damp af → condenseert tot kleine druppeltjes = wolken\n3. **Neerslag** 🌧️ — druppels worden groter → vallen als regen/sneeuw/hagel\n4. **Afstromen** 💧 — regen valt op land → stroomt via beken/rivieren terug naar zee\n\nDan begint het opnieuw. **Geen begin, geen eind**." },
            { titel: "Cito-feit: water 'gebruikt' is nooit weg", tekst: "Het water dat jij vandaag drinkt is **HETZELFDE water** dat dinosauriërs dronken — alleen heel veel keer rondgegaan. Aarde maakt geen nieuw water. Alleen de 'plek' verandert: nu in oceaan, dan in wolk, dan in plant, dan in dier.\n\nGevolg: vervuiling is permanent. Plastic in zee blijft eeuwen. Daarom water-zuivering belangrijk." },
            { titel: "Cito-tip: planten + dieren in cyclus", tekst: "Planten doen ook mee — **transpiratie**: planten 'zweten' water uit hun bladeren. Een grote boom kan **honderden liters water per dag** afgeven aan de lucht. Daarom is bos belangrijk voor regen.\n\nDieren + mensen: drinken water, plassen het uit, het verdampt weer, etc. Allemaal onderdeel van de cyclus." },
          ],
          woorden: [
            { woord: "waterkringloop", uitleg: "Eindeloos rondgaan van water tussen zee, lucht, land. Verdamping → wolk → regen → terug." },
            { woord: "verdamping", uitleg: "Vloeistof wordt damp (gas). Door zonnewarmte." },
            { woord: "condensatie", uitleg: "Damp wordt weer vloeibaar. Bv. condens op koud raam in winter." },
            { woord: "transpiratie", uitleg: "Planten geven water af aan lucht via hun bladeren." },
          ],
          theorie: "Waterkringloop is **fundamenteel** voor Cito-natuur:\n• Geeft regen + zoet water\n• Houdt klimaat in balans\n• Veroorzaakt weer + wolken\n• Verbindt zee + land\n\nVerstoring (klimaatverandering, ontbossing) → onbalans → meer extreem weer.",
          voorbeelden: [
            { type: "feit", tekst: "Eén regendruppel kan tot **10 jaar** in een wolk blijven voordat hij valt — afhankelijk van temperatuur + wind." },
            { type: "feit", tekst: "Amazone-regenwoud produceert ~20% van wereld-zuurstof DOOR de waterkringloop (verdamping + plant-fotosynthese)." },
          ],
          basiskennis: [{ onderwerp: "Niet gemaakt of weg", uitleg: "Water op aarde is een constante hoeveelheid. Gaat alleen rond." }],
          niveaus: { basis: "Verdamping → wolk → neerslag → afstromen. = A.", simpeler: "Water gaat eindeloos rond: zon verdampt zeewater → omhoog → wolk → regen → terug naar zee via rivieren. = A.", nogSimpeler: "Eindeloze cyclus = A." },
        },
      },
      {
        q: "Een **dijk** is waarvoor?",
        options: ["Houden water tegen — beschermt land tegen overstroming", "Genereert elektriciteit", "Voor schepen om aan te leggen", "Drinkwater filteren"],
        answer: 0,
        wrongHints: [null, "Klopt — kerntaak: water uit land houden.", "Niet — andere techniek (waterkracht­centrale).", "Niet — dat is een haven/pier.", "Niet — dat is waterzuivering."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een dijk?", tekst: "Een **dijk** is een **wal van klei + zand + soms stenen** die water tegen­houdt. Beschermt land achter de dijk tegen overstroming.\n\nNederland heeft **~22.000 km dijken** — meer dan welk land ook. Reden: 26% van NL ligt **onder zeespiegel**. Zonder dijken: helft van NL onder water." },
            { titel: "Soorten dijken in NL", tekst: "• **Zeedijken** — beschermen tegen Noordzee + Waddenzee (bv. Afsluitdijk)\n• **Rivierdijken** — bij Rijn, Maas, Waal, IJssel\n• **Polderdijken** — rond drooggemaakt land (Haarlemmermeer)\n• **Duinen** — natuurlijke 'dijken' van zand langs kust\n\nBeroemde dijken: **Afsluitdijk** (1932, 32 km) + **Deltawerken** (jaren 50-90, beschermen Zuid-Holland/Zeeland)." },
            { titel: "Cito-feit: Watersnood 1953", tekst: "Op **31 januari / 1 februari 1953** brak een ramp uit:\n• Storm + extreme springtij\n• Dijken in Zeeland + Zuid-Holland braken\n• **1.836 mensen verdronken**\n• 200.000 ha land onder water\n• 200.000 dieren dood\n\nGevolg: **Deltawerken** gebouwd om dit nooit meer te laten gebeuren. Officieel klaar in 1997. Beschermt nu tegen 1-in-4.000-jaar-stormen." },
          ],
          woorden: [
            { woord: "dijk", uitleg: "Aarden wal die water tegenhoudt. NL: ~22.000 km totaal." },
            { woord: "Deltawerken", uitleg: "Reeks dammen + stormvloedkeringen in Zuid-Holland/Zeeland (1953-1997)." },
            { woord: "Afsluitdijk", uitleg: "Dijk van 32 km die in 1932 Zuiderzee → IJsselmeer maakte." },
            { woord: "polder", uitleg: "Drooggemaakt land beneden zeespiegel, omringd door dijken." },
          ],
          theorie: "NL waterveiligheid kerntermen:\n• **Dijk** — wal die water tegenhoudt\n• **Polder** — droog land achter dijk\n• **Sluis** — opening voor schepen, kan dicht bij hoog water\n• **Stormvloedkering** — beweegbare dam (Maeslantkering, Oosterscheldekering)\n• **Spaarbekken** — extra waterberging bij overlast\n\nDoor klimaatverandering wordt water-management nóg belangrijker.",
          voorbeelden: [
            { type: "feit", tekst: "De Maeslantkering bij Hoek van Holland is een van de grootste beweegbare bouwwerken ter wereld — twee armen elk zo groot als de Eiffeltoren liggend." },
            { type: "feit", tekst: "Tijdens hoogwater in 1995 moesten 250.000 mensen evacueren in Limburg/Gelderland. Net niet ramp." },
          ],
          basiskennis: [{ onderwerp: "Niet voor elektriciteit", uitleg: "Een dijk is GEEN waterkrachtcentrale. Wel kan op een dijk een windmolen staan." }],
          niveaus: { basis: "Water tegenhouden. = A.", simpeler: "Een dijk is een aarden wal die zeewater of rivierwater tegenhoudt zodat land erachter niet overstroomt. NL heeft 22.000 km dijken. = A.", nogSimpeler: "Water tegen = A." },
        },
      },
      {
        q: "**Waar komt drinkwater in NL** vandaan?",
        options: ["Vooral grondwater + oppervlaktewater (rivier/duinen), gezuiverd", "Direct uit zee zonder zuivering", "Alleen regenwater opvangen", "Geïmporteerd uit het buitenland"],
        answer: 0,
        wrongHints: [null, "Klopt — 60% grondwater + 40% oppervlaktewater, daarna gezuiverd.", "Zout water → onbruikbaar zonder ontzilting (duur, niet in NL).", "Te onbetrouwbaar voor heel land.", "Niet — NL maakt eigen drinkwater."],
        uitlegPad: {
          stappen: [
            { titel: "Bron 1: grondwater (60% in NL)", tekst: "**Grondwater** is water dat onder de grond zit — eeuwen geleden in de bodem gezakt. **Diep, schoon, beschermd** door zandlagen die als natuurlijk filter werken.\n\nWaterbedrijven pompen het op uit **diepe putten** (50-300 meter diep) in heide­gebieden + bossen. Vraag voor extra zuivering meestal klein." },
            { titel: "Bron 2: oppervlaktewater (40% in NL)", tekst: "**Oppervlaktewater** = water uit rivieren, meren, duinen. Bv. **Rijn** + **Maas** + **IJsselmeer**.\n\nDit water is **viezer** dan grondwater (industrie, landbouw, riool). Daarom **veel meer zuivering** nodig. Vooral in west-NL (Den Haag, Rotterdam) gebruikt omdat grondwater daar zout is door zeenabijheid." },
            { titel: "Cito-feit: zuivering-stappen", tekst: "Zuivering van rivierwater tot drinkwater:\n1. **Voorfilter** (zand, grind verwijderen)\n2. **Beluchting** (zuurstof toevoegen)\n3. **Coagulatie** (chemisch — vuil klontert)\n4. **Zandfilter** (microben)\n5. **Actief-kool-filter** (geur/smaak)\n6. **Chloor** of **UV** (desinfectie)\n7. **Drinkwater** naar leiding\n\nKost ~€1 per 1000 liter — Nederlands drinkwater = goedkoopste + schoonste ter wereld (volgens internationale rankings)." },
          ],
          woorden: [
            { woord: "grondwater", uitleg: "Water in de bodem, diep onder grond. Schoonste bron." },
            { woord: "oppervlaktewater", uitleg: "Water in rivieren, meren, sloten. Aan het oppervlak van de aarde." },
            { woord: "drinkwaterbedrijf", uitleg: "Bedrijf dat water zuivert + via leiding aan huizen levert. NL heeft 10 regionale bedrijven." },
          ],
          theorie: "Verschil zoet/zout/brak water:\n• **Zoet** — minder dan 0,5 g zout/L. Drinkbaar zonder ontzilting.\n• **Brak** — 0,5-30 g zout/L. Mengsel zout-zoet (zoals delta's).\n• **Zout** — meer dan 30 g zout/L. Zee. Niet drinkbaar zonder dure ontzilting.\n\nOcean Cleanup-stichting + zuiver-water-organisaties werken aan oceaan-vervuiling.",
          voorbeelden: [
            { type: "feit", tekst: "Nederlanders drinken gemiddeld 120 liter water per dag — uit kraan. Goedkoper dan flessen + minder plastic-afval." },
            { type: "feit", tekst: "Nederland heeft 10 drinkwaterbedrijven (bv. Vitens, PWN, Evides). Alle in overheidshanden (geen winstdoel)." },
          ],
          basiskennis: [{ onderwerp: "Niet zee", uitleg: "Zeewater is in NL niet bruikbaar voor drinkwater — ontzilting te duur. Sommige eilanden (Aruba, Saba) gebruiken wel ontzilte zee." }],
          niveaus: { basis: "Grond + oppervlaktewater. = A.", simpeler: "NL drinkwater = 60% grondwater (diep onder grond) + 40% rivierwater. Beide goed gezuiverd in waterzuiveringsinstallaties. = A.", nogSimpeler: "Grond + rivier, gezuiverd = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const waterkringloopPo = {
  id: "waterkringloop-po",
  title: "Waterkringloop (Cito groep 6-8)",
  emoji: "💧",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / aardrijkskunde",
  prerequisites: [
    { id: "klimaten-aardrijkskunde", title: "Klimaten", niveau: "2F" },
  ],
  intro:
    "Waterkringloop voor Cito groep 6-8 — 4 fasen (verdamping/condensatie/neerslag/afstroming) + soorten wolken (cumulus/cirrus/cumulonimbus) + soorten neerslag (regen/sneeuw/hagel/ijzel/mist/dauw/regenboog) + NL-water (Deltawerken/polders/IJsselmeer) + thuis-gebruik (130 L/dag). ~15 min.",
  triggerKeywords: [
    "waterkringloop", "watercyclus",
    "verdamping", "condensatie", "neerslag",
    "regen", "sneeuw", "hagel", "ijzel", "mist", "regenboog",
    "wolken", "cumulus", "cirrus", "cumulonimbus",
    "polder", "dijk", "Deltawerken",
    "Watersnoodramp 1953", "Afsluitdijk",
    "drinkwater", "kraanwater",
  ],
  chapters,
  steps,
};

export default waterkringloopPo;
