// Leerpad: Examen-oefenpad Geschiedenis VMBO-GL/TL 2025 tijdvak 2.
// 2026-05-16: 2e geschiedenis-pilot na 2025-T1 (commit 83762e1). 6 echte
// MC-vragen geverifieerd via parser (geschiedenis-vmbo-gltl-2025-tijdvak2.json).
// Bron: examenblad.nl, examen 0125 GT 2025-2.
// Visuele-bron-vragen (V8 kaart-frontlijn WO1, V22 begrip-bij-bron-prent) zijn
// geskipt — past niet in tekst-MC-format zonder bron-afbeelding-extractie.

const chapters = [
  { letter: "A", title: "Politiek & rechtsstaat", emoji: "🏛️", from: 0, to: 1 },
  { letter: "B", title: "Wereldoorlogen", emoji: "⚔️", from: 2, to: 3 },
  { letter: "C", title: "Modern Nederland & einde Koude Oorlog", emoji: "🌍", from: 4, to: 5 },
];

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2025/vmbo-gl/documenten/cse-2/gt-0125-a-25-2-o";

const steps = [
  // ─── V1 — Grondwet 1848 ─────────────────────────────────────
  {
    title: "Vraag 1 — Grondwet 1848: parlement meer macht",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 2, vraag 1. Doorklik naar het tijdvakken-leerpad voor de bredere context.",
    emoji: "🎓",
    checks: [
      {
        q: "Welke uitspraak over de nieuwe Grondwet van 1848 is juist? De nieuwe Grondwet van 1848:",
        options: [
          "bepaalde dat alle mannen kiesrecht kregen.",
          "gaf het parlement meer macht.",
          "maakte een einde aan de onschendbaarheid van de koning.",
          "maakte van Nederland een republiek.",
        ],
        answer: 1,
        wrongHints: [
          "Niet alle mannen — censuskiesrecht bleef. Volledig mannenkiesrecht kwam pas in 1917.",
          null,
          "De koning bleef juist onschendbaar (artikel 42): 'De koning is onschendbaar, de ministers zijn verantwoordelijk.'",
          "Nederland bleef een constitutionele monarchie — geen republiek.",
        ],
        explanation: "Thorbecke's Grondwet van 1848 maakte ministers verantwoordelijk aan het parlement (in plaats van aan de koning). De Tweede Kamer werd voortaan rechtstreeks gekozen. Dit was het begin van de parlementaire democratie in Nederland. Echte machtsoverdracht van koning naar parlement.",
        examenBron: BRON_LABEL(1),
        bronLink: BRON_LINK,
        leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'Grondwet', 'parlement', 'onschendbaarheid', 'republiek'" },
          { id: "politiek-democratie-po", title: "Politiek + democratie", niveau: "po-1F", why: "wat een parlement is + hoe Nederland een constitutionele monarchie is (geen republiek)" },
          { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "Thorbecke 1848 → start parlementaire democratie NL — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "1848 = Thorbecke's grondwet", tekst: "**Johan Rudolph Thorbecke** schreef in 1848 een nieuwe Grondwet voor koning Willem II. Reden: angst voor revolutie (1848 = revolutiejaar in heel Europa)." },
            { titel: "Wat veranderde concreet?", tekst: "**Ministers werden verantwoordelijk aan het parlement**, niet meer aan de koning. **Tweede Kamer** werd direct gekozen door kiesgerechtigden. Het parlement kreeg dus echt macht." },
            { titel: "Wat bleef hetzelfde?", tekst: "Censuskiesrecht (alleen rijke mannen mochten stemmen) bleef tot 1917. Koning bleef onschendbaar. Geen republiek — koning bleef staatshoofd." },
          ],
          woorden: [
            { woord: "Grondwet", uitleg: "Belangrijkste wet van een land — bepaalt wie welke macht heeft." },
            { woord: "parlement", uitleg: "Volksvertegenwoordiging — Tweede + Eerste Kamer." },
            { woord: "constitutionele monarchie", uitleg: "Koning + parlement + grondwet — geen absolute koning." },
          ],
          theorie: "Cito-truc: 1848 = Thorbecke = parlement meer macht. Drie veranderingen onthouden: 1) ministers verantwoordelijk aan Kamer, 2) Tweede Kamer rechtstreeks gekozen, 3) grondrechten erin (vrijheid van drukpers, vergadering).",
          voorbeelden: [
            { type: "feit", tekst: "In 1848 woedden revoluties in Frankrijk, Duitsland, Italië. Willem II zei: 'Ik ben in 24 uur van conservatief liberaal geworden' — om revolutie in NL te voorkomen." },
          ],
          basiskennis: [{ onderwerp: "Tijdvak", uitleg: "1848 valt in tijdvak 8 (Burgers en stoommachines, 1800-1900) van de canon van Nederland." }],
          niveaus: {
            basis: "Parlement meer macht. = B.",
            simpeler: "Thorbecke 1848 → parlement (Tweede Kamer) gekozen + ministers verantwoordelijk aan Kamer = parlement meer macht. = B.",
            nogSimpeler: "Parlement meer macht = B.",
          },
        },
      },
    ],
  },
  // ─── V30 — Rechtsstaat: eerlijk proces ──────────────────────
  {
    title: "Vraag 30 — Rechtsstaat: eerlijk proces als kenmerk",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 2, vraag 30. Onderwerp: wat onderscheidt een rechtsstaat van een dictatuur?",
    emoji: "🎓",
    checks: [
      {
        q: "Spelen de rechtszaken zich wel of niet af binnen een rechtsstaat? De rechtszaken spelen zich:",
        options: [
          "niet af binnen een rechtsstaat, want de zitting was openbaar.",
          "niet af binnen een rechtsstaat, want er was geen eerlijk proces.",
          "wel af binnen een rechtsstaat, want de zitting was openbaar.",
          "wel af binnen een rechtsstaat, want er was een eerlijk proces.",
        ],
        answer: 1,
        wrongHints: [
          "Een openbare zitting is wél een kenmerk van een rechtsstaat — niet een reden dat het er géén is.",
          null,
          "Een openbare zitting alléén is niet genoeg — in dictaturen waren show-processes ook 'openbaar'.",
          "Onjuist: in dictaturen zoals USSR-Stalin of nazi-Duitsland was er géén eerlijk proces — uitkomst stond vooraf vast.",
        ],
        explanation: "Een **rechtsstaat** wordt gedefinieerd door **eerlijk proces** (verdediging, onschuld-tot-bewezen-anders, onafhankelijke rechter), niet alleen door 'openbare zitting'. In show-processen (USSR-Stalin, nazi-Volksgerichtshof) was de uitkomst van tevoren bepaald — bekentenissen werden afgedwongen, advocaten waren benoemd door de staat, rechters waren politiek loyaal. Dat is geen rechtsstaat.",
        examenBron: BRON_LABEL(30),
        bronLink: BRON_LINK,
        leerpadLink: { id: "mensenrechten-maatschappijleer", title: "Mensenrechten + UVRM" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'rechtsstaat', 'eerlijk proces', 'openbaar', 'zitting'" },
          { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO klas 3-4", why: "trias politica + rechterlijke macht onafhankelijk = grondbeginselen rechtsstaat" },
          { id: "mensenrechten-maatschappijleer", title: "Mensenrechten + UVRM", niveau: "VMBO klas 3-4", why: "UVRM art. 10-11: recht op eerlijk proces — direct geraakt in deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een rechtsstaat?", tekst: "Een **rechtsstaat** is een land waar de **wet boven de macht** staat. Iedereen (ook de regering) moet zich aan de wet houden. Burgers hebben rechten: eerlijk proces, vrijheid van meningsuiting, geen willekeurige arrestatie." },
            { titel: "Wat maakt een proces 'eerlijk'?", tekst: "1) Onafhankelijke rechter (niet politiek gestuurd). 2) Recht op advocaat van eigen keuze. 3) Verdachte mag zich verdedigen. 4) Onschuldig totdat bewijs anders zegt. 5) Beroep mogelijk." },
            { titel: "Show-processen ≠ eerlijk", tekst: "In dictaturen (Stalin's Sovjet-Unie, nazi-Volksgerichtshof, Mao's China) waren processen vaak openbaar — maar de **uitkomst stond vooraf vast**. Bekentenissen werden gemarteld eruit. Advocaten waren staats-loyaal. Dus: openbaar ≠ eerlijk." },
          ],
          woorden: [
            { woord: "rechtsstaat", uitleg: "Land waar wet boven macht staat — burgers beschermd tegen willekeur." },
            { woord: "eerlijk proces", uitleg: "Proces met onafhankelijke rechter, verdediging, onschuld-vermoeden." },
            { woord: "show-proces", uitleg: "Proces met vast-staande uitkomst, vaak openbaar maar niet eerlijk." },
          ],
          theorie: "Cito-truc rechtsstaat-vraag: kijk naar **kern-kenmerken** (eerlijk proces + onafhankelijke rechter + advocaat + beroep), niet naar oppervlakte (openbaar/gesloten zitting). Een dictatuur kan show-processen openbaar houden voor propaganda.",
          voorbeelden: [
            { type: "feit", tekst: "Stalin's Grote Zuiveringen (1936-1938): drie show-processen tegen oude bolsjewieken. Bekentenissen onder marteling, executies binnen 24 uur. Openbaar maar volstrekt oneerlijk." },
            { type: "feit", tekst: "Neurenberg-tribunaal (1945-46): nazi-leiders berecht door geallieerden. Met advocaten, verdediging, bewijslast — wél een eerlijk proces ondanks de zware misdrijven." },
          ],
          basiskennis: [{ onderwerp: "Cito-strikvraag", uitleg: "Het woord 'openbaar' klinkt positief en lijkt op rechtsstaat-kenmerk. Maar dictaturen waren ook openbaar — dat is geen onderscheidend criterium. **Eerlijk proces** is wél onderscheidend." }],
          niveaus: {
            basis: "Geen rechtsstaat want geen eerlijk proces. = B.",
            simpeler: "Rechtsstaat = wet boven macht + eerlijk proces. Show-processen waren openbaar maar uitkomst stond vast → géén eerlijk proces → géén rechtsstaat. = B.",
            nogSimpeler: "Niet eerlijk = niet rechtsstaat. = B.",
          },
        },
      },
    ],
  },
  // ─── V10 — Tekort 1918 door handelsbelemmeringen ───────────
  {
    title: "Vraag 10 — Tekorten in NL 1918: handelsbelemmeringen",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 2, vraag 10. Onderwerp: Eerste Wereldoorlog (1914-1918) en gevolgen voor neutraal Nederland.",
    emoji: "🎓",
    checks: [
      {
        q: "In 1918 was er in Nederland een tekort aan goederen. Wat was een belangrijke oorzaak van het tekort?",
        options: [
          "de Beurskrach op Wallstreet",
          "de handelsbelemmeringen",
          "de invoering van het distributiesysteem",
          "de Russische Revolutie",
        ],
        answer: 1,
        wrongHints: [
          "Beurskrach was in 1929 — 11 jaar later. Past niet bij 1918.",
          null,
          "Het distributiesysteem (rantsoenering) was het GEVOLG van de tekorten, niet de oorzaak. Vraag staat omgekeerd.",
          "De Russische Revolutie (1917) raakte vooral Oost-Europa, niet de aanvoer naar Nederland.",
        ],
        explanation: "Hoewel Nederland tijdens WO1 (1914-1918) neutraal was, raakte het wel verzeild in de **handelsblokkades** tussen Duitsland en de geallieerden. Britse marine blokkeerde Duitse aanvoer; Duitsland gebruikte onbeperkte duikbootoorlog tegen koopvaardij. Nederlandse handel zat tussen beide kampen klem. Resultaat: importen vielen weg → tekort aan kolen, voedsel, grondstoffen. Pas eind 1918 (na het einde van de oorlog) verdwenen de blokkades.",
        examenBron: BRON_LABEL(10),
        bronLink: BRON_LINK,
        leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'handelsbelemmering', 'distributiesysteem', 'beurskrach', 'Russische Revolutie'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "jaartal 1918 koppelen aan juiste gebeurtenis (oorzaak vs gevolg uit elkaar houden)" },
          { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "tijdvak 9 (wereldoorlogen + holocaust 1900-1950) — WO1, neutraliteit NL, handelsblokkades — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Nederland 1914-1918 = neutraal", tekst: "Nederland deed niet mee aan WO1. Maar lag tussen Duitsland (vechtkamp 1) en België/Frankrijk/UK (kamp 2) in. Onze schepen werden door beide kanten lastig gevallen." },
            { titel: "Handelsbelemmeringen = blokkades", tekst: "**Engelse marine** sloot Noordzee af om Duitse aanvoer te stoppen. **Duitsland** vuurde duikboten op alles wat naar Engeland voer (onbeperkte duikbootoorlog vanaf 1917). Nederlandse handel klem → import valt weg." },
            { titel: "Wat kwam erna?", tekst: "Distributiesysteem (= rantsoenering = bonnen voor brood, kolen, suiker) was het GEVOLG van het tekort, niet de oorzaak. Vandaar foute optie C." },
          ],
          woorden: [
            { woord: "handelsbelemmering", uitleg: "Iets wat handel hindert (blokkade, tarief, embargo)." },
            { woord: "blokkade", uitleg: "Afsluiten van een kust of haven met oorlogsschepen." },
            { woord: "neutraliteit", uitleg: "Geen partij kiezen in een oorlog — Nederland 1914-1918." },
            { woord: "distributiesysteem", uitleg: "Rantsoenering — bonnen voor schaarse goederen." },
          ],
          theorie: "Cito-truc oorzaak-vs-gevolg vraag: lees de vraag heel zorgvuldig. 'Oorzaak van' → wat veroorzaakt het. 'Gevolg van' → wat ontstaat erdoor. Distributiesysteem was duidelijk gevolg (= oplossing voor het tekort), niet oorzaak.",
          voorbeelden: [
            { type: "feit", tekst: "1918: in Nederlandse steden 'aardappel-oproer' uitgebroken — vrouwen plunderden distributiekantoren omdat hun bonnen geen eten meer kregen." },
            { type: "feit", tekst: "Engelse blokkade was zo effectief dat Duitsland 800.000 burgers verloor aan hongersnood — 'Steckrübenwinter' 1916-1917 (knollenwinter)." },
          ],
          basiskennis: [{ onderwerp: "Tijdvak", uitleg: "WO1 (1914-1918) zit in tijdvak 9. Neutrale houding NL: Wilhelmina, Cort van der Linden. Hoeveel doden: 0 oorlogsdoden NL (Belgische vluchtelingen wel)." }],
          niveaus: {
            basis: "Handelsbelemmeringen (blokkade door beide kampen). = B.",
            simpeler: "NL was neutraal in WO1 maar lag tussen Engeland en Duitsland in. Beide kampen blokkeerden de scheepvaart → import viel weg → tekort. = B.",
            nogSimpeler: "Blokkade → tekort = B.",
          },
        },
      },
    ],
  },
  // ─── V24 — Bombardement Rotterdam 1940: capitulatie ───────
  {
    title: "Vraag 24 — Mei 1940: Rotterdam bombardement & capitulatie",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 2, vraag 24. Onderwerp: Tweede Wereldoorlog — Nederlandse capitulatie na het bombardement van Rotterdam.",
    emoji: "🎓",
    checks: [
      {
        q: "Op 14 mei 1940 bombardeerden Duitse vliegtuigen de stad Rotterdam. Wat was de reactie van Nederland op het bombardement?",
        options: [
          "Nederland capituleerde.",
          "Nederland mobiliseerde het leger.",
          "Nederland verklaarde Duitsland de oorlog.",
          "Nederland werd neutraal.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Mobiliseren was al gedaan in augustus 1939 — vóór het bombardement, niet erna.",
          "Nederland verklaarde Duitsland nooit zelf de oorlog — Duitsland viel zonder waarschuwing binnen op 10 mei 1940.",
          "Nederland was juist NIET meer neutraal — dat eindigde op 10 mei toen Duitsland binnenviel.",
        ],
        explanation: "Het bombardement van Rotterdam op 14 mei 1940 verwoestte de hele binnenstad — ~25.000 huizen vernield, ~900 doden. Duitsland dreigde ook Utrecht en Amsterdam te bombarderen. **Generaal Winkelman tekende dezelfde avond de capitulatie**. Koningin Wilhelmina en de regering waren al uitgeweken naar Londen (13 mei). Vijf dagen oorlog → 5 jaar bezetting.",
        examenBron: BRON_LABEL(24),
        bronLink: BRON_LINK,
        leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'capituleren', 'mobiliseren', 'oorlog verklaren', 'neutraal'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "tijdvolgorde: wat gebeurde vóór, tijdens, na het bombardement?" },
          { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2", niveau: "VMBO-GT eindexamen", why: "5-dagen-oorlog NL: 10 mei inval, 13 mei vlucht Wilhelmina, 14 mei Rotterdam-bom + capitulatie — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "10 mei 1940 — Duitse inval", tekst: "Zonder oorlogsverklaring viel Duitsland Nederland, België, Luxemburg en Frankrijk tegelijk binnen. Nederland was tot dat moment neutraal." },
            { titel: "11-13 mei — gevechten + vlucht", tekst: "Nederlandse leger vocht 5 dagen tegen oppermachtige Duitsers. **Wilhelmina** vluchtte op 13 mei naar Londen. Regering volgde — vormde regering-in-ballingschap." },
            { titel: "14 mei — Rotterdam + capitulatie", tekst: "Duitse Luftwaffe bombardeerde 14 mei rond 13:30 uur Rotterdam plat — ~900 doden, hele binnenstad weg. Dreiging: Utrecht is volgende. **Generaal Winkelman tekent capitulatie** dezelfde avond. 5 jaar bezetting begint." },
          ],
          woorden: [
            { woord: "capituleren", uitleg: "Overgeven, de strijd opgeven." },
            { woord: "mobiliseren", uitleg: "Leger oproepen en in stelling brengen (al gedaan in 1939)." },
            { woord: "regering in ballingschap", uitleg: "Regering die vanuit het buitenland (Londen) doorregeert." },
            { woord: "Luftwaffe", uitleg: "Duitse luchtmacht in WO2." },
          ],
          theorie: "Cito-truc tijdvolgorde-vraag: schrijf de gebeurtenissen op datum. Inval (10 mei) → vlucht Wilhelmina (13 mei) → Rotterdam-bom (14 mei) → capitulatie (14 mei avond). Reactie OP bombardement = capitulatie. Mobilisatie was al maanden eerder.",
          voorbeelden: [
            { type: "feit", tekst: "In totaal verloor NL ~2000 militaren tijdens de 5-dagen-strijd. Rotterdam-burgerslachtoffers: ~900. Toaal NL slachtoffers WO2 (incl. holocaust): ~250.000." },
            { type: "feit", tekst: "Het bombardement was gepland op 12 mei, maar wegens slecht weer uitgesteld. Een onderhandelingspoging om Rotterdam te sparen werd door communicatiefout onderbroken." },
          ],
          basiskennis: [{ onderwerp: "Tijdvak", uitleg: "Mei 1940 = begin tijdvak 9 (wereldoorlogen + holocaust). NL was neutraal tot 10 mei, daarna bezet 1940-1945." }],
          niveaus: {
            basis: "Nederland capituleerde. = A.",
            simpeler: "Rotterdam plat, Utrecht is volgende → leger geeft zich over (capituleert) op 14 mei avond. = A.",
            nogSimpeler: "Capituleren = A.",
          },
        },
      },
    ],
  },
  // ─── V43 — Verzorgingsstaat: ouderdomsuitkering ────────────
  {
    title: "Vraag 43 — Bedreiging verzorgingsstaat: vergrijzing",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 2, vraag 43. Onderwerp: jaren '90 — vergrijzing en de houdbaarheid van de verzorgingsstaat.",
    emoji: "🎓",
    checks: [
      {
        q: "In de jaren negentig van de vorige eeuw maakten steeds meer mensen zich zorgen over de houdbaarheid van de verzorgingsstaat. Welke ontwikkeling werd gezien als een bedreiging voor de verzorgingsstaat?",
        options: [
          "de ontzuiling van de samenleving",
          "de secularisatie van de samenleving",
          "de toename van het aantal mensen met een ouderdomsuitkering",
          "het ontstaan van de overlegeconomie",
        ],
        answer: 2,
        wrongHints: [
          "Ontzuiling (verdwijnen van de zuilen jaren '60-'70) heeft geen direct effect op uitkeringen-financiering.",
          "Secularisatie (afname van kerk-invloed) raakt waarden, niet de AOW-pot direct.",
          null,
          "Overlegeconomie (poldermodel, jaren '80) was juist een STABILISERENDE factor — geen bedreiging.",
        ],
        explanation: "**Vergrijzing** = de babyboomers (1946-1964 geboren) bereikten in de jaren '90 langzaam pensioen-leeftijd. Meer AOW'ers + langere levensduur + minder werkenden = AOW-pot komt onder druk. Daarom werd de pensioenleeftijd later (van 65 naar 67) verhoogd. De andere opties zijn maatschappelijke veranderingen die de verzorgingsstaat-financiën niet direct raken.",
        examenBron: BRON_LABEL(43),
        bronLink: BRON_LINK,
        leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat + politiek" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'verzorgingsstaat', 'ontzuiling', 'secularisatie', 'overlegeconomie', 'ouderdomsuitkering'" },
          { id: "pincode-overheid", title: "Pincode — overheid", niveau: "VMBO klas 3-4", why: "wie betaalt de AOW (werkenden via premie), wie krijgt (67-plussers) — kern van vergrijzings-probleem" },
          { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO klas 3-4", why: "tijdvak 10 (televisie + computers 1950-nu) — opbouw verzorgingsstaat na WO2 en latere druk door demografie" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een verzorgingsstaat?", tekst: "Een **verzorgingsstaat** zorgt voor burgers van wieg tot graf: kinderbijslag, ziekenfonds, werkloosheidsuitkering, **AOW** (ouderdomsuitkering 67+). Opgebouwd in NL na 1957 (Drees)." },
            { titel: "Wie betaalt? Wie krijgt?", tekst: "**Werkenden betalen premie** via belasting. **Ouderen + zieken + werklozen** krijgen uitkering. Werkt zolang er genoeg werkenden zijn per uitkering-ontvanger." },
            { titel: "Vergrijzing = onbalans", tekst: "Geboortegolf 1946-1964 (babyboomers) wordt in jaren '90+ oud. **Meer AOW'ers + langere levensduur**, terwijl het aantal werkenden niet meegroeit. AOW-pot raakt leeg → in 2012 verhoogde NL pensioenleeftijd van 65 naar 67." },
          ],
          woorden: [
            { woord: "verzorgingsstaat", uitleg: "Staat met uitkeringen voor zieken, werklozen, ouderen — gefinancierd door belastingen." },
            { woord: "AOW", uitleg: "Algemene Ouderdomswet — staatspensioen vanaf 67 jaar." },
            { woord: "vergrijzing", uitleg: "Bevolking wordt gemiddeld ouder — meer ouderen per werker." },
            { woord: "babyboomers", uitleg: "Generatie geboren 1946-1964 — explosieve geboortegolf na WO2." },
          ],
          theorie: "Cito-truc verzorgingsstaat-vraag: zoek de optie die **direct de financiën raakt**. Vergrijzing = meer uitkeringen + minder premie-betalers = direct financieel probleem. Ontzuiling/secularisatie/overlegeconomie zijn maatschappelijke trends zonder direct effect op AOW-pot.",
          voorbeelden: [
            { type: "feit", tekst: "In 1957 (invoering AOW): 7 werkenden per 1 AOW'er. In 2020: 3 werkenden per 1 AOW'er. In 2040: voorspelling 2 werkenden per 1 AOW'er." },
            { type: "feit", tekst: "Daarom verhoogde de regering-Rutte in 2012 de pensioenleeftijd geleidelijk: 65 → 67, daarna gekoppeld aan stijgende levensverwachting." },
          ],
          basiskennis: [{ onderwerp: "Tijdvak", uitleg: "Verzorgingsstaat opgebouwd in tijdvak 10 (televisie + computers, 1950-nu). Jaren '90 = piek-vergrijzing-discussie." }],
          niveaus: {
            basis: "Toename ouderdomsuitkering (vergrijzing). = C.",
            simpeler: "Babyboomers werden oud → meer AOW-betalers vs minder werkenden → financieel probleem. = C.",
            nogSimpeler: "Vergrijzing = C.",
          },
        },
      },
    ],
  },
  // ─── V44 — 1991 Warschaupact einde door verdwijnen communisme ─
  {
    title: "Vraag 44 — 1991: einde Warschaupact door val communisme",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 2, vraag 44 (laatste vraag van het examen). Onderwerp: einde Koude Oorlog 1989-1991.",
    emoji: "🎓",
    checks: [
      {
        q: "In 1991 gaven Tsjechoslowakije, Polen en Hongarije aan dat ze uit het Warschaupact zouden stappen. Welke ontwikkeling was een oorzaak van dit besluit?",
        options: [
          "de uitbreiding van de Europese Unie in Oost-Europa",
          "de uitbreiding van de Russische invloed in Oost-Europa",
          "het verdwijnen van het communisme in Oost-Europa",
          "het verdwijnen van het fascisme in Oost-Europa",
        ],
        answer: 2,
        wrongHints: [
          "EU-uitbreiding naar Oost-Europa kwam later (2004). In 1991 was de EU pas net opgericht (Verdrag van Maastricht).",
          "Russische invloed was juist aan het AFBROKKELEN in 1991, niet uitbreiden. Sovjet-Unie viel uit elkaar.",
          null,
          "Fascisme verdween al in 1945 met de val van Hitler en Mussolini. In 1991 is dit volkomen niet aan de orde.",
        ],
        explanation: "1989 = de revoluties in Oost-Europa: Berlijnse Muur valt, communistische regeringen treden af in Polen (Solidarność), Hongarije, Tsjechoslowakije (Fluwelen Revolutie), Roemenië (Ceaușescu vermoord). 1990 = Duitsland hereniging. 1991 = de drie landen verlaten formeel het Warschaupact (Sovjet-militaire alliantie). Daarna valt de Sovjet-Unie zelf uit elkaar (26 december 1991). De drijvende kracht: het communisme had de bevolking + economie kapot gemaakt — overal opstand tegen.",
        examenBron: BRON_LABEL(44),
        bronLink: BRON_LINK,
        leerpadLink: { id: "koude-oorlog-modern-po", title: "Koude Oorlog + moderne geschiedenis" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'Warschaupact', 'Europese Unie', 'communisme', 'fascisme'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "jaartal 1991 + 'uittreden uit Warschaupact' → koppel aan juiste oorzaak (eliminatie van wat in 1991 niet kan)" },
          { id: "koude-oorlog-modern-po", title: "Koude Oorlog + moderne geschiedenis", niveau: "groep 7-8", why: "1989 val Muur → 1991 USSR uit elkaar → einde Warschaupact — directe kernkennis van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat was het Warschaupact?", tekst: "Het **Warschaupact** (1955-1991) was de Sovjet-militaire alliantie tegenover de NAVO. Leden: USSR + Oost-Duitsland (DDR) + Polen + Tsjechoslowakije + Hongarije + Roemenië + Bulgarije + Albanië. Communistisch blok in Oost-Europa." },
            { titel: "1989 = jaar van revoluties", tekst: "**Solidarność** wint verkiezingen Polen (juni). Hongarije opent grens naar Oostenrijk (september). **Berlijnse Muur valt** (9 november). **Fluwelen Revolutie** Tsjechoslowakije (november). Roemeense dictator Ceaușescu geëxecuteerd (kerst). Allemaal binnen 1 jaar — overal viel het communisme weg." },
            { titel: "1991 = lege wraak-club", tekst: "Zonder communistische regeringen had het Warschaupact (= verdedigingspact voor communisme) geen doel meer. Polen, Hongarije, Tsjechoslowakije stapten formeel uit in 1991. Vervolgens viel de Sovjet-Unie zelf uit elkaar — 26 december 1991. Warschaupact stierf hetzelfde jaar." },
          ],
          woorden: [
            { woord: "Warschaupact", uitleg: "Sovjet-militaire alliantie 1955-1991 (tegenhanger NAVO)." },
            { woord: "Solidarność", uitleg: "Poolse vakbond/anti-communistische beweging, leider Lech Wałęsa." },
            { woord: "Fluwelen Revolutie", uitleg: "Vreedzame omverwerping communisme Tsjechoslowakije 1989." },
            { woord: "Gorbatsjov", uitleg: "Laatste Sovjet-leider 1985-1991, gaf landen vrijheid (Glasnost/Perestrojka)." },
          ],
          theorie: "Cito-truc datum-vraag: 1991 = einde Koude Oorlog. Eliminate optie A (EU-uitbreiding kwam pas 2004). Eliminate B (Russische invloed groeide juist niet, maar kromp). Eliminate D (fascisme al weg in 1945). Blijft over: C — communisme verdween.",
          voorbeelden: [
            { type: "feit", tekst: "Václav Havel — toneelschrijver-dissident — werd na de Fluwelen Revolutie eerste niet-communistische president van Tsjechoslowakije (1989-1992)." },
            { type: "feit", tekst: "Lech Wałęsa — Poolse elektricien + Solidarność-leider — werd president Polen (1990-1995). Nobelprijs voor de Vrede in 1983." },
            { type: "feit", tekst: "Het Warschaupact was destijds zo aangetast dat Polen, Hongarije en Tsjechië in 1999 lid werden van de **NAVO** — hun voormalige vijand." },
          ],
          basiskennis: [{ onderwerp: "Tijdvak", uitleg: "1991 valt in tijdvak 10 (televisie + computers). Einde Koude Oorlog = breekpunt — 'einde van de geschiedenis' (Fukuyama 1992)." }],
          niveaus: {
            basis: "Communisme verdween. = C.",
            simpeler: "1989: alle communistische regeringen Oost-Europa weg → 1991: Warschaupact (= communistisch pact) heeft geen doel meer → landen stappen uit. = C.",
            nogSimpeler: "Communisme weg = C.",
          },
        },
      },
    ],
  },
];

const examenGeschiedenis2025T2 = {
  id: "examen-geschiedenis-2025-t2",
  title: "Examen oefenen — Geschiedenis 2025 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "geschiedenis",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Geschiedenis - eindexamen oefenen 2025-T2",
  intro:
    "6 echte examenvragen uit VMBO-GL/TL geschiedenis 2025 tijdvak 2. Onderwerpen: Grondwet 1848 (Thorbecke), Eerste Wereldoorlog handelsblokkades, bombardement Rotterdam 1940, rechtsstaat-criteria (eerlijk proces), vergrijzing-verzorgingsstaat, einde Warschaupact 1991. Per vraag denkprikkel-hints, didactische uitleg op 3 niveaus, voorkennisKeten + leerpad-doorklik. Visuele-bron-vragen V8 (frontkaart WO1) en V22 (begrip bij prent) zijn weggelaten — vereisen bron-afbeeldingen die we nog niet hebben.",
  triggerKeywords: [
    "examen geschiedenis", "geschiedenis 2025 tijdvak 2", "echte examenvragen geschiedenis",
    "grondwet 1848", "thorbecke", "parlementaire democratie",
    "rechtsstaat", "eerlijk proces", "show-proces", "stalin zuiveringen",
    "wo1 nederland neutraal", "handelsblokkade 1918", "distributiesysteem", "aardappeloproer",
    "bombardement rotterdam", "mei 1940", "capitulatie", "wilhelmina londen",
    "verzorgingsstaat", "vergrijzing", "aow", "babyboomers",
    "warschaupact einde", "1991 koude oorlog", "fluwelen revolutie", "solidarnosc",
  ],
  chapters,
  steps,
};

export default examenGeschiedenis2025T2;
