// Leerpad: Evolutie + Natuurlijke Selectie — HAVO/VWO Biologie
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Darwin, variatie, selectie,
// drift, soortvorming, bewijzen, voorbeelden.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["🌍", "🧬", "🔀", "🦴", "🏆"];

const chapters = [
  { letter: "A", title: "Darwin + selectie-principe", emoji: "🌍", from: 0, to: 0 },
  { letter: "B", title: "Genetische variatie", emoji: "🧬", from: 1, to: 1 },
  { letter: "C", title: "Drift + soortvorming", emoji: "🔀", from: 2, to: 2 },
  { letter: "D", title: "Bewijzen voor evolutie", emoji: "🦴", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — recente evolutie", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Darwin + selectie-principe ────────────────────────
  {
    title: "Darwin + de 4 voorwaarden voor natuurlijke selectie",
    explanation:
      "**Charles Darwin** (1809-1882):\n• Reis met HMS Beagle 1831-1836, vooral Galapagos-eilanden (vinken!).\n• 'On the Origin of Species' 1859 — fundament moderne biologie.\n• Onafhankelijk: Alfred Russel Wallace had vergelijkbare ideeën — samen gepubliceerd 1858.\n\n**4 voorwaarden voor natuurlijke selectie**:\n1. **Variatie**: individuen binnen een soort verschillen (kleur, grootte, snelheid).\n2. **Erfelijkheid**: variatie wordt grotendeels doorgegeven (genen).\n3. **Overproductie**: meer nakomelingen dan kunnen overleven.\n4. **Selectiedruk**: omgeving 'kiest' welke variaties beter overleven + reproduceren.\n\nGevolg: gunstige eigenschappen blijven in populatie, ongunstige verdwijnen → evolutie.\n\n**Voorbeeld klassiek**: pepermot (peppered moth) in industrieel Engeland 1850-1950:\n• Bomen bedekt met roet door verbranding kolen → donkere schors.\n• Lichte pepermotten goed zichtbaar → opgegeten door vogels.\n• Donkere mutant beter gecamoufleerd → overleeft + plant voort.\n• Binnen 50 jaar: populatie van 99% licht naar 99% donker.\n• Na luchtkwaliteit-verbetering: omgekeerd → terug naar licht.\n\n**Belangrijk**: natuurlijke selectie werkt op **populatie-niveau**, niet individu. Een individu evolueert niet — populatie wel.\n\n**Geen 'doel' in evolutie**:\n• Geen vooropgezet plan, geen 'beter' of 'hoger'.\n• Geen 'streven' naar perfectie.\n• Alleen: 'wie overleeft + reproduceert, krijgt meer nakomelingen'.\n• Dat heet **adaptatie** (aanpassing aan omgeving).\n\n**Fitness** (Darwiniaans):\n• Niet 'sterkste' of 'snelste' maar **reproductief succes**.\n• Mannelijke pauw met overdreven staart = seksueel aantrekkelijk → meer paartjes → hoge fitness (ondanks dat staart vluchten moeilijker maakt).\n• Fitness = relatief in omgeving + tijd.\n\n**Voorbeelden klassiek**:\n• Galapagos-vinken: verschillende snavels per eiland aangepast aan voedsel (grote harde zaden → grote sterke snavel; insecten → fijne snavel).\n• Antibiotica-resistentie: bacteriën met mutatie overleven → resistente stam ontstaat.\n• Giraffe-nek: niet 'wilden langer rekken', maar populatie waarin lange-nek-individuen meer overleefden.",
    checks: [
      {
        q: "Welke is **GEEN** voorwaarde voor natuurlijke selectie?",
        options: [
          "Doorgeven van aangeleerde eigenschappen",
          "Variatie binnen een populatie",
          "Erfelijkheid van eigenschappen",
          "Selectiedruk uit de omgeving"
        ],
        answer: 0,
        wrongHints: [null, "Als alle dieren precies gelijk zijn, waartussen kan de natuur dan nog kiezen?", "Als een gunstige eigenschap niet naar de jongen gaat, verandert de populatie dan over generaties?", "Als niets sommige dieren minder kans geeft, wie valt er dan af?"],
        uitlegPad: {
          stappen: [{ titel: "Aangeleerd telt niet", tekst: "Wat een individu tijdens zijn leven aanleert of traint (een gespierde nek, een trucje) gaat niet via het DNA naar de jongen. Dat dacht Lamarck: 'giraffen rekten hun nek en kregen zo langnekkige jongen'. Natuurlijke selectie heeft alleen variatie, erfelijkheid + selectiedruk nodig en werkt op populatie-niveau." }],
          niveaus: { basis: "Aangeleerde eigenschappen worden niet doorgegeven.", simpeler: "Wat je oefent, zit niet in je DNA.", nogSimpeler: "Geleerd is niet geërfd." },
        },
      },
      {
        q: "Pepermot-evolutie in 19e eeuw: licht → donker. Door wat?",
        options: [
          "Selectie door vogels op roetzwarte bomen",
          "Mutaties door roet en luchtvervuiling",
          "Partnerkeuze door vrouwelijke motten",
          "Genetische drift in kleine populaties"
        ],
        answer: 0,
        wrongHints: [null, "Donkere motten bestonden al vóór de industrie, alleen zeldzaam. Was roet dan de oorzaak van de mutatie?", "Waarom zouden vrouwtjes in industriegebieden ineens een andere voorkeur hebben dan op het platteland?", "Waarom werd juist de donkere vorm vaker, en dan vooral in de industriegebieden?"],
        uitlegPad: {
          stappen: [
            { titel: "Industrieel melanisme", tekst: "Klassiek experiment + observatie. Voor 1850: <1% donker. Tegen 1900: >95% donker. Vogel-predatie favoriseerde camouflage met roetschors. Na Clean Air Act 1956 + schonere industrie → omgekeerd → terug naar licht. **Bewijs evolutie in mensentijdschalen**." },
          ],
          niveaus: { basis: "Roet + predatie.", simpeler: "Donkere camouflage werd voordeel.", nogSimpeler: "Roet" },
        },
      },
      {
        q: "**Darwiniaanse fitness** betekent:",
        options: [
          "Reproductief succes",
          "Lichamelijke kracht",
          "Een lange levensduur",
          "Grootte van het lichaam"
        ],
        answer: 0,
        wrongHints: [null, "Een heel sterk dier dat nooit jongen krijgt: geeft dat zijn genen door?", "Een schildpad van 100 jaar zonder nakomelingen: hoeveel genen laat die achter?", "Kleine muizen krijgen vaak veel meer jongen dan grote dieren. Wie geeft dan meer genen door?"],
        uitlegPad: {
          stappen: [{ titel: "Niet 'survival of the fittest' als kracht", tekst: "Fitness = hoeveel je doorgeeft aan volgende generatie. Pauw met verleidelijke staart: minder mobiel → hogere kans gepakt door predator, MAAR meer paartjes → meer nakomelingen → hoge fitness. Wat 'fit' is hangt af van omgeving." }],
          niveaus: { basis: "Nakomelingen.", simpeler: "Wie meeste baby's krijgt = fit.", nogSimpeler: "Reproductie" },
        },
      },
      {
        q: "Galapagos-vinken hebben **verschillende snavels** per eiland. Waarom?",
        options: [
          "Aanpassing aan het voedsel per eiland",
          "Snavels groeien door veel oefenen",
          "Kruising met andere vogelsoorten",
          "Elke eilandvink stamt af van een andere vogelsoort"
        ],
        answer: 0,
        wrongHints: [null, "Stel dat een vink zijn snavel sterker maakt door te oefenen. Krijgen zijn jongen dan ook die snavel?", "Kunnen vinken vruchtbare jongen krijgen met heel andere vogels, zoals meeuwen?", "Nee — de vinken hebben juist één gemeenschappelijke voorouder."],
        uitlegPad: {
          stappen: [
            { titel: "Adaptieve radiatie", tekst: "Eén voorouder-vink kwam op archipel. Op verschillende eilanden: ander voedsel beschikbaar. Selectie favoriseert snavels per habitat. In ~3 mln jaar: 15+ soorten. Klassiek voorbeeld dat Darwin tot zijn theorie bracht." },
          ],
          theorie: "Een groep verwante soorten ontstaat uit één voorouder → adaptieve radiatie. Ook bekend bij cichliden in Afrikaanse meren (>500 soorten).",
          niveaus: { basis: "Voedsel-aanpassing.", simpeler: "Eigen snavel per eiland-eten.", nogSimpeler: "Voedsel" },
        },
      },
      {
        q: "Een vogelpaar krijgt 8 jongen, maar er is maar voedsel voor 2. Wat gebeurt er volgens Darwin?",
        options: [
          "De best aangepaste jongen overleven het vaakst",
          "Willekeurige jongen overleven, eigenschappen tellen niet",
          "De jongen passen zich aan door minder te eten",
          "De ouders kiezen bewust welke jongen overleven"
        ],
        answer: 0,
        wrongHints: [null, "Heeft een jong dat sneller of slimmer voedsel vindt geen betere kans?", "Kan een jong zijn lichaam zomaar aanpassen aan minder eten, en geeft het dat door?", "Is selectie een bewuste keuze?"],
        uitlegPad: {
          stappen: [{ titel: "Voorwaarde 3: overproductie", tekst: "Darwin's inzicht (geïnspireerd door Malthus): organismen produceren altijd meer nakomelingen dan omgeving aankan. Daardoor: concurrentie + selectie. Niet alle nakomelingen overleven → die met betere variatie hebben hogere kans → evolutie." }],
          niveaus: { basis: "Selectie door overschot.", simpeler: "Te veel baby's → niet alle overleven.", nogSimpeler: "Selectie" },
        },
      },
    ],
  },

  // ─── B. Genetische variatie ───────────────────────────────
  {
    title: "Bron van variatie — mutaties + recombinatie",
    explanation:
      "Zonder **variatie** geen evolutie. Drie bronnen:\n\n**1. Mutaties**:\n• Veranderingen in DNA-sequentie.\n• Spontaan tijdens replicatie (~10⁻⁹ per basenpaar per generatie).\n• Of door externe oorzaak: straling, chemicaliën, virussen.\n• Soorten:\n  - **Punt-mutatie**: één base vervangen.\n  - **Insertie/deletie**: base(s) erbij/eraf → frameshift.\n  - **Chromosomale**: hele stukken verschoven/dubbel.\n• **Meeste mutaties zijn neutraal** (in 'junk-DNA' of synoniem) of schadelijk. Slechts klein deel gunstig.\n\n**2. Recombinatie** (seksuele voortplanting):\n• Bij meiose: chromosomen mengen + 'crossing-over' wisselt stukken.\n• Random combinatie van ouder-genen → unieke nakomeling.\n• Belangrijk: recombinatie maakt geen NIEUWE genen, herschikt bestaande.\n\n**3. Gene flow** (migratie):\n• Migranten brengen nieuwe allelen mee.\n• Versterkt diversiteit binnen populatie.\n\n**Allel-frequentie** (Hardy-Weinberg-evenwicht, VWO):\nVoor 2 allelen A + a met frequenties p + q (p+q=1):\n• AA: p².\n• Aa: 2pq.\n• aa: q².\n• Evenwicht houdt aan tenzij: mutatie, selectie, drift, migratie, niet-random paring.\n\n**Voorbeeld**: cystische fibrose (CF). Stel q² = 1/2500 → q ≈ 0,02 → 2pq ≈ 0,04 → ~4% dragers. In NL werkelijk: ~1 op 30 mensen drager, ~1 op 4000-5000 patiënt.\n\n**Mutaties zonder reden**:\nMutaties zijn **willekeurig** t.o.v. wat het organisme nodig heeft. Geen 'antwoord' op omgeving. Wel: in slecht-aangepaste populaties stress → soms hogere mutatiesnelheid → 'evolvability'.\n\n**Genetische variatie + populatiegrootte**:\n• Grote populatie: veel variatie, drift klein, evolutie langzaam tenzij sterke selectie.\n• Kleine populatie: weinig variatie (flessenhals), drift sterk, vatbaar voor uitsterving.\n• Daarom: bedreigde soorten kweekprogramma's met genetische diversiteit beschermen.\n\n**Polymorfisme**: aanwezigheid van >1 allel in populatie. Bv. bloedgroep ABO (3 allelen: I_A, I_B, i).",
    checks: [
      {
        q: "De meeste **mutaties** zijn:",
        options: [
          "Neutraal of schadelijk",
          "Meestal gunstig",
          "Direct zichtbaar",
          "Reactie op de omgeving"
        ],
        answer: 0,
        wrongHints: [null, "Een toevallige verandering in een goed werkend bouwplan: maakt dat het meestal beter?", "Veel mutaties zitten in stukken DNA die je niet terugziet. Zie je ze dan aan de buitenkant?", "Ontstaat een mutatie omdat het dier hem nodig heeft, of door een toevallige kopieerfout?"],
        uitlegPad: {
          stappen: [{ titel: "Random + meestal onzichtbaar", tekst: "DNA-replicatie maakt fouten. De meeste vallen in niet-coderend DNA → geen effect. Coderende mutaties: meestal verstoren werking eiwit → schadelijk. Zeldzame: gunstig — daarop werkt selectie." }],
          niveaus: { basis: "Meeste neutraal/schadelijk.", simpeler: "Mutaties willekeurig, zelden gunstig.", nogSimpeler: "Neut/schad" },
        },
      },
      {
        q: "**Recombinatie** bij seksuele voortplanting:",
        options: [
          "Mengt bestaande genen, geen nieuwe genen",
          "Maakt nieuwe genen die er nog niet waren",
          "Verdwijnt tijdens de meiose helemaal",
          "Werkt alleen bij de gameten van mannetjes"
        ],
        answer: 0,
        wrongHints: [null, "Waar komen echt nieuwe varianten van een gen vandaan: uit mutaties of uit het husselen?", "Juist in de meiose wisselen chromosomen stukken uit. Kan het daar dan verdwijnen?", "Maken vrouwtjes hun eicellen ook via meiose?"],
        uitlegPad: {
          stappen: [
            { titel: "Crossing-over + onafhankelijke segregatie", tekst: "Tijdens meiose: chromosomen koppelen + wisselen stukken. Plus elk chromosoom gaat random naar ene of andere gameet. Combinatie van 2 sets ouders → enorme variatie zonder dat nieuwe genen ontstaan. Mutatie levert nieuwe variatie." },
          ],
          niveaus: { basis: "Mengen bestaande.", simpeler: "Schudt genen, geen nieuwe.", nogSimpeler: "Mengen" },
        },
      },
      {
        q: "Een **kleine populatie** loopt risico op:",
        options: [
          "Verlies van genetische variatie",
          "Een te grote genetische variatie",
          "Mutaties die niet meer kunnen optreden",
          "Evolutie die helemaal stilvalt"
        ],
        answer: 0,
        wrongHints: [null, "Hoeveel verschillende allelen passen er in een handvol dieren?", "Mutaties zijn toevallige kopieerfouten. Stoppen die omdat er minder dieren zijn?", "Drift maakt evolutie juist sneller."],
        uitlegPad: {
          stappen: [
            { titel: "Flessenhals + inteelt", tekst: "Kleine populatie: variatie smal, gevoelig voor verlies door drift + inteelt. Voorbeeld cheetah's: bottleneck ~10 000 jaar geleden → vandaag bijna geen genetische verschillen → vatbaar voor virussen. Beschermingsprogramma's mengen populaties om diversiteit te behouden." },
          ],
          niveaus: { basis: "Verlies variatie.", simpeler: "Klein = arm = kwetsbaar.", nogSimpeler: "Klein" },
        },
      },
      {
        q: "Frequentie van gen-a in populatie is q = 0,2. Frequentie van **homozygoot aa**?",
        options: ["0,04", "0,2", "0,32", "0,4"],
        answer: 0,
        wrongHints: [null, "Dat is de frequentie van allel a zelf. Hoe groot is de kans dat iemand twéé keer a heeft?", "Niet — dat is de frequentie van de heterozygoten (2pq).", "Dat is 2q. Waarom zou je de kansen op twee allelen optellen in plaats van vermenigvuldigen?"],
        uitlegPad: {
          stappen: [
            { titel: "Hardy-Weinberg q²", tekst: "Frequentie aa = q² = 0,2² = **0,04 = 4%**. Heterozygoot 2pq = 2·0,8·0,2 = 0,32 = 32%. AA = p² = 0,64 = 64%. Som: 100%. ✓" },
          ],
          niveaus: { basis: "q²=0,04.", simpeler: "0,2 in kwadraat = 0,04.", nogSimpeler: "0,04" },
        },
      },
      {
        q: "**Gene flow** is:",
        options: [
          "Uitwisseling van allelen door migratie",
          "Overdracht van genen van ouder op kind",
          "Mutaties die zich over de soort verspreiden",
          "Het kopiëren van DNA bij celdeling"
        ],
        answer: 0,
        wrongHints: [null, "Dat is gewone overerving binnen één populatie. Gaat gene flow over één familie of tussen populaties?", "Een mutatie kan zich binnen een populatie verspreiden door selectie of drift. Wat is er nodig om allelen naar een ándere populatie te brengen?", "Dat is DNA-replicatie. Gaat gene flow over één cel of over populaties?"],
        uitlegPad: {
          stappen: [{ titel: "Populaties met uitwisseling", tekst: "Wanneer individuen migreren naar nieuwe populatie + reproduceren → brengen ze hun allelen mee → genfrequenties verschuiven. Bij hoge gene flow: populaties blijven homogeen. Bij lage gene flow: populaties groeien uit elkaar → mogelijke soortvorming." }],
          niveaus: { basis: "Migratie brengt allelen.", simpeler: "Verhuizen voegt nieuwe genen toe.", nogSimpeler: "Migratie" },
        },
      },
    ],
  },

  // ─── C. Drift + soortvorming ──────────────────────────────
  {
    title: "Genetische drift + soortvorming",
    explanation:
      "**Genetische drift** = veranderingen in allel-frequenties door **toeval**, vooral in kleine populaties.\n\n**Voorbeeld**: in populatie van 10 individuen sterft 1 toevallig (storm). Als die de enige drager van allel-X was: X verdwijnt voor altijd. In populatie van 10 000: 1 sterfte verandert weinig.\n\n**Twee speciale drift-events**:\n\n**1. Flessenhals (bottleneck)**:\n• Populatie krimpt drastisch → klein aantal overlevers → beperkte gene pool.\n• Voorbeeld: cheetah's (~10 000 j geleden), zeeolifanten (jacht-bottleneck eind 1800).\n• Resulterende populatie heeft veel minder diversiteit.\n\n**2. Stichter-effect (founder)**:\n• Kleine groep koloniseert nieuw gebied.\n• Hun allelen worden basis voor hele nieuwe populatie.\n• Voorbeeld: Amish in VS — uit ~200 stichters → allel voor Ellis-van-Creveld-syndroom komt er veel vaker voor.\n\n**Soortvorming** (speciatie):\nNieuwe soort ontstaat wanneer populaties zo lang gescheiden zijn dat ze niet meer kunnen kruisen → reproductieve isolatie.\n\n**Twee hoofdmodellen**:\n\n**1. Allopatrische soortvorming** (verschillende plek):\n• Geografische barrière scheidt populatie (gebergte, rivier, oceaan).\n• Verschillende selectiedruk + drift → allelen wijzigen onafhankelijk.\n• Na lange tijd: hereniging onmogelijk vanwege biologische verschillen.\n• Voorbeeld: Galapagos-vinken (eilanden).\n\n**2. Sympatrische soortvorming** (zelfde plek):\n• Geen fysieke scheiding, maar genetische isolatie (polyploïdie, ander voedsel, ander gedragspatroon).\n• Voorbeeld: cichliden in Afrikaanse meren — explosie van soorten in één meer.\n• Bij planten via **polyploïdie** (extra chromosoomsets) → onmiddellijke nieuwe soort.\n\n**Isolatiemechanismen**:\n• **Pre-zygotisch** (voorkomt bevruchting): habitat, tijd (verschillende bloeitijd), gedrag (verschillende paringsrituelen), morfologie, gameten incompatibel.\n• **Post-zygotisch** (na bevruchting): hybriden onvruchtbaar (muildier = paard×ezel) of niet levensvatbaar.\n\n**Soortbegrip** (biologisch — Mayr 1942):\nGroep populaties die in natuur **kruisen + vruchtbare nakomelingen geven**. Werkt voor dieren + planten met seksuele voortplanting; lastig voor bacteriën (aseksueel) of fossielen.\n\n**Tempo evolutie**:\n• **Gradualisme**: langzame + continue verandering over miljoenen jaren.\n• **Punctuated equilibrium** (Eldredge + Gould 1972): lange perioden stilstand + korte sprongen bij grote omgevingsverandering.\n• Beide gebeuren — afhankelijk van situatie.\n\n**Co-evolutie**:\n• Soorten beïnvloeden elkaars evolutie wederzijds.\n• Voorbeelden: bloem + bestuivend insect (orchidee + langtongige nachtvlinder), predator + prooi (snellere kat → snellere antiloop), parasiet + gastheer.",
    checks: [
      {
        q: "**Genetische drift** werkt sterker in:",
        options: [
          "Kleine populaties",
          "Grote populaties",
          "Bij sterke selectie",
          "Bij hoge mutatie-snelheid"
        ],
        answer: 0,
        wrongHints: [null, "Gooi 10 keer een munt of 1000 keer. Waar wijkt de uitkomst het makkelijkst af van half om half?", "Drift is toeval en selectie is juist niet toevallig. Wordt toeval sterker als selectie sterk is?", "Mutaties leveren variatie, niet drift."],
        uitlegPad: {
          stappen: [{ titel: "Wet van grote aantallen", tekst: "Statistisch: bij weinig waarnemingen veel ruis. In klein dorp van 50 mensen: 1 ongeluk verandert ratios sterk. In stad van 1 mln: amper effect. Drift = ruis." }],
          niveaus: { basis: "Klein = sterke drift.", simpeler: "Toeval domineert in kleine groep.", nogSimpeler: "Klein" },
        },
      },
      {
        q: "**Allopatrische soortvorming** vereist:",
        options: [
          "Geografische scheiding tussen populaties",
          "Polyploïdie (verdubbeling van chromosomen)",
          "Samenleven in hetzelfde gebied",
          "Kruising tot vruchtbare hybriden"
        ],
        answer: 0,
        wrongHints: [null, "Polyploïdie kan een nieuwe soort maken zonder dat de groepen uit elkaar gaan. Gaat 'allopatrisch' daarover?", "Samenleven in één gebied heet sympatrisch. Wat betekent 'allo' (anders)?", "Als twee groepen nog vruchtbare jongen samen krijgen, zijn het dan al aparte soorten?"],
        uitlegPad: {
          stappen: [{ titel: "Allo = ander, patria = land", tekst: "'Allopatrisch' = letterlijk 'ander vaderland'. Bv. populatie aan beide kanten van Rocky Mountains gescheiden → onafhankelijke evolutie → na honderdduizenden jaren verschillende soorten. Meest voorkomende model." }],
          niveaus: { basis: "Geografische barrière.", simpeler: "Gescheiden door berg/rivier.", nogSimpeler: "Allo" },
        },
      },
      {
        q: "**Cheetah's** hebben weinig genetische variatie. Oorzaak?",
        options: [
          "Een flessenhals in het verleden",
          "Inteelt door menselijke ingreep",
          "Stichtereffect in een nieuw gebied",
          "Sympatrische soortvorming"
        ],
        answer: 0,
        wrongHints: [null, "De lage variatie is duizenden jaren oud, veel ouder dan menselijke ingrepen. Welke gebeurtenis laat zo'n oud spoor achter?", "Nee — er heeft geen kleine groep een nieuw gebied gekoloniseerd.", "Soortvorming maakt nieuwe soorten. Verklaart dat waarom er binnen één soort zo weinig variatie is?"],
        uitlegPad: {
          stappen: [
            { titel: "Klassiek voorbeeld", tekst: "DNA-analyse toont dat de cheetah-populatie ~10 000 j geleden heel klein was (mss ~7 individuen). Reden onbekend (mss ijstijd-einde + grote zoogdier-uitsterving). Vandaag: alle cheetah's bijna identiek genetisch → gevoelig voor virussen + lage vruchtbaarheid." },
          ],
          niveaus: { basis: "Bottleneck.", simpeler: "Bijna uitgestorven in verleden.", nogSimpeler: "Flessenhals" },
        },
      },
      {
        q: "Een **muildier** (paard × ezel) is onvruchtbaar. Welk isolatie-mechanisme?",
        options: [
          "Post-zygotisch",
          "Pre-zygotisch",
          "Habitat-isolatie",
          "Gedragsisolatie"
        ],
        answer: 0,
        wrongHints: [null, "Pre-zygotisch betekent: vóór de bevruchting. Is de eicel bij een muildier bevrucht of niet?", "Paard en ezel hebben elkaar ontmoet en gepaard. Lag het probleem dan aan hun leefgebied?", "Paard en ezel paren wel met elkaar. Lag het probleem dan aan hun gedrag?"],
        uitlegPad: {
          stappen: [
            { titel: "Hybrid sterility", tekst: "Bevruchting werkt → muildier levensvatbaar. MAAR muildier zelf onvruchtbaar (oneven aantal chromosomen → meiose mislukt). Dus genen worden NIET doorgegeven → reproductieve isolatie achteraf. Bewijst dat paard + ezel verschillende soorten zijn." },
          ],
          niveaus: { basis: "Post-zygotisch.", simpeler: "Hybride wel geboren, niet vruchtbaar.", nogSimpeler: "Post" },
        },
      },
      {
        q: "**Co-evolutie** voorbeeld:",
        options: [
          "Orchidee en nachtvlinder met lange tong",
          "Haaien en dolfijnen met dezelfde vorm",
          "Wolf en hond die uit één voorouder komen",
          "Paard en ezel die samen een muildier krijgen"
        ],
        answer: 0,
        wrongHints: [null, "Haaien en dolfijnen lijken op elkaar door hetzelfde water. Passen ze zich ook aan elkáár aan?", "Dat is gemeenschappelijke afstamming. Beïnvloeden wolf en hond elkaars evolutie over en weer?", "Een kruising is eenmalig en het muildier is onvruchtbaar. Passen de twee soorten zich aan elkaar aan?"],
        uitlegPad: {
          stappen: [
            { titel: "Reciprocale aanpassing", tekst: "Charles Darwin's voorbeeld: Angraecum-orchidee in Madagaskar met 28 cm spoor → voorspelde 'er moet een vlinder zijn met 28 cm tong'. Bevestigd 1903: Xanthopan-nachtvlinder. Beide drijven elkaars evolutie." },
          ],
          theorie: "Andere klassiekers: bijen + bloemen, lichaam-microbioom, prooi-predator. Wapenwedloop.",
          niveaus: { basis: "Orchidee + vlinder.", simpeler: "Wederzijds evolueren.", nogSimpeler: "Co" },
        },
      },
    ],
  },

  // ─── D. Bewijzen voor evolutie ────────────────────────────
  {
    title: "Bewijzen voor evolutie — 5 hoofdpijlers",
    explanation:
      "**Evolutie is bewezen** door convergente bewijslijnen uit verschillende disciplines:\n\n**1. Fossielen**:\n• Sequentie van vormen in geologische lagen — oude vormen onderaan.\n• **Tussenvormen**: archeopteryx (vogel-reptiel), tiktaalik (vis-amfibie), ambulocetus (loop-walvis).\n• Hele dynastieën: 50 mln j evolutie van paarden (van hond-grootte tot moderne).\n• Massa-uitsterving + recovery zichtbaar in fossielenrecord.\n\n**2. Vergelijkende anatomie**:\n• **Homologe organen**: zelfde structuur, verschillende functie — voorpoot mens/walvis/vleermuis/paard hebben zelfde bot-plan (humerus, radius, ulna, hand) → gemeenschappelijke voorouder.\n• **Analoge organen**: zelfde functie, verschillende oorsprong — vleugel vleermuis vs vleugel libel (convergent).\n• **Rudimentaire organen**: niet meer gebruikt — appendix mens, bekkenresten bij walvissen + slangen.\n\n**3. Embryologie**:\n• Embryo's van gewervelden tonen vergelijkbare ontwikkeling vroeg (kieuw-bogen, staart).\n• Maakt gemeenschappelijke afkomst zichtbaar.\n• 'Ontogenese herhaalt fylogenese' (Haeckel — overdreven maar kern klopt).\n\n**4. Biogeografie**:\n• Distributie van soorten over aarde past bij continenten-drift + evolutie.\n• Marsupialen domineren in Australië (geïsoleerd ~50 mln j).\n• Galapagos-soorten lijken op Zuid-Amerikaanse, niet Afrikaanse.\n• Endemische soorten op eilanden.\n\n**5. Moleculaire biologie** (sterkst bewijs sinds ~1960):\n• DNA + eiwitten van verwante soorten lijken meer op elkaar.\n• Mens + chimp: ~98,8% DNA identiek.\n• Mens + gist: ~50% nog overlappend (gemeenschappelijke voorouder ~1,5 mld j).\n• 'Universele genetische code' (zelfde DNA-codes voor zelfde amino-zuren) → één oorsprong leven.\n• **Moleculaire klok**: mutaties accumuleren in voorspelbaar tempo → datering van afsplitsingen.\n\n**Direct geobserveerde evolutie** (= geen 'verleden tijd', NU):\n• Antibiotica-resistentie bacteriën.\n• Pepermot industrieel melanisme + omkeer.\n• Galapagos-vinken: snavel-veranderingen binnen 30 jaar als gevolg van droge + natte jaren.\n• HIV-evolutie binnen één patiënt.\n• Hondenrassen — 200 jaar selectie heeft enorme variatie geproduceerd (puur kunstmatige selectie).\n\n**Wat is GEEN bewijs (misverstanden)**:\n• 'Tweede thermodynamica-wet verbiedt evolutie' — onjuist, geldt voor gesloten systeem, aarde is open (zon-energie).\n• 'Geen tussenvormen' — onjuist, vele bekend.\n• 'Te complex voor toeval' — selectie is NIET toeval, het is gefilterde variatie.",
    checks: [
      {
        q: "**Homologe organen** zijn:",
        options: [
          "Zelfde structuur, andere functie",
          "Andere structuur, zelfde functie",
          "Zelfde structuur én zelfde functie",
          "Organen zonder functie meer"
        ],
        answer: 0,
        wrongHints: [null, "De vleugel van een vlieg en die van een vogel doen hetzelfde, maar zijn heel anders gebouwd. Wijst dat op dezelfde afkomst?", "Nee — het gaat om gemeenschappelijke afkomst, niet om gelijke functie.", "Organen die hun functie kwijt zijn, zoals ons staartbeen, hebben een eigen naam. Is dat homoloog?"],
        uitlegPad: {
          stappen: [{ titel: "Gemeenschappelijke voorouder bewijs", tekst: "Vleermuis-vleugel + walvis-flipper + paard-poot + mens-hand: zelfde botten in verschillende verhoudingen. Onmogelijk te verklaren zonder gemeenschappelijke voorouder. Klassiek bewijs Darwin." }],
          niveaus: { basis: "Zelfde structuur, andere functie.", simpeler: "Zelfde basis-skelet, ander gebruik.", nogSimpeler: "Homoloog" },
        },
      },
      {
        q: "**Vleugel vleermuis** + **vleugel libel** zijn:",
        options: [
          "Analoog",
          "Homoloog",
          "Rudimentair",
          "Identiek"
        ],
        answer: 0,
        wrongHints: [null, "Een vleermuis is een zoogdier, een libel een insect. Hebben hun vleugels dezelfde bouw en oorsprong?", "Gebruiken vleermuis en libel hun vleugels nog gewoon om te vliegen?", "Een libellenvleugel is een dun vlies, een vleermuisvleugel heeft botten en huid. Zijn ze dan gelijk?"],
        uitlegPad: {
          stappen: [
            { titel: "Convergente evolutie", tekst: "Vleermuis evolueerde uit zoogdier; libel uit insect. Beide ontwikkelden onafhankelijk vleugels omdat omgeving vliegen 'beloont'. Geen gemeenschappelijke vlieg-voorouder. Voorbeeld convergentie." },
          ],
          niveaus: { basis: "Analoog.", simpeler: "Zelfde functie, anders ontstaan.", nogSimpeler: "Analoog" },
        },
      },
      {
        q: "Mens + chimpansee delen **welk percentage** DNA?",
        options: ["~98,8%", "~88,5%", "~75,2%", "~51,6%"],
        answer: 0,
        wrongHints: [null, "Nog te laag. De chimpansee is onze naaste nog levende verwant. Hoe klein moet het verschil dan zijn?", "Te laag. Hoe dicht staan mens en chimpansee bij elkaar in de stamboom?", "Veel te laag. Mens en chimpansee splitsten pas zo'n 6 miljoen jaar geleden."],
        uitlegPad: {
          stappen: [{ titel: "Bijna identiek", tekst: "Mens + chimp delen ~98,8% van DNA. Verschillen vooral in regulatoire sequenties (welke genen waar/wanneer aan staan), niet zozeer in coderende. Bevestigt recente gemeenschappelijke voorouder (~6 mln j geleden)." }],
          theorie: "Mens + muis: ~85%. Mens + banaan: ~60%. Mens + bacterie: ~50% genen vergelijkbaar. Suggereert gradiënt van verwantschap.",
          niveaus: { basis: "98,8%.", simpeler: "Bijna 99% gelijk.", nogSimpeler: "98,8" },
        },
      },
      {
        q: "**Antibiotica-resistentie** in bacteriën:",
        options: [
          "Directe en lopende evolutie door selectiedruk",
          "Mensen worden zelf resistent tegen antibiotica",
          "Antibiotica veroorzaken de nodige mutaties zelf",
          "Elke bacterie went langzaam aan het middel"
        ],
        answer: 0,
        wrongHints: [null, "Wie verandert er: jouw lichaam of de bacteriën? Bij wie werkt het middel niet meer?", "Resistente bacteriën waren er vaak al vóór de kuur. Wat doet het antibioticum dan met de rest?", "Kan één bacterie iets 'leren' en dat aan haar nakomelingen doorgeven?"],
        uitlegPad: {
          stappen: [
            { titel: "Selectie zichtbaar binnen weken", tekst: "Bacterie-populatie heeft variatie (mutaties). Antibiotica doodt gevoelige stammen → resistente overleven + reproduceren. Binnen weken: hele populatie resistent. Eén van DUIDELIJKSTE evolutie-bewijzen — heeft direct medische implicaties (MRSA, etc.)." },
          ],
          theorie: "Volgens WHO mogelijk grootste medische bedreiging 2050 (geen werkende antibiotica meer voor sommige infecties).",
          niveaus: { basis: "Directe evolutie.", simpeler: "Selectie voor onze ogen.", nogSimpeler: "Direct" },
        },
      },
      {
        q: "Een **moleculaire klok** gebruikt:",
        options: [
          "Het vaste tempo van DNA-mutaties om te schatten wanneer soorten uit elkaar gingen",
          "Het aantal jaarringen in fossiel hout om aardlagen te dateren",
          "Het verval van radioactieve stoffen om de leeftijd van gesteente te bepalen",
          "Het aantal fossielen in aardlagen om te bepalen wanneer soorten ontstonden"
        ],
        answer: 0,
        wrongHints: [null, "Jaarringen tellen is een andere dateringsmethode. Een moleculaire klok kijkt naar moleculen in cellen.", "Radioactief verval dateert gesteente, niet de verwantschap tussen soorten. Welk molecuul verandert langzaam per generatie?", "Fossielen tellen doe je met stenen, niet met moleculen. Welk molecuul geef je door aan je nakomelingen?"],
        uitlegPad: {
          stappen: [
            { titel: "Mutatie-snelheid ~ constant", tekst: "Bepaalde DNA-sequenties muteren in voorspelbaar tempo (bv. mitochondriaal DNA 1 mutatie per 6500 jaar). Door verschillen tussen soorten te tellen → datering van splitsing. Mens + chimp splitsing ~6-7 mln j geleden volgens deze methode." },
          ],
          niveaus: { basis: "Mutatie-tempo geeft tijd.", simpeler: "Tel verschillen, weet wanneer afsplitsing.", nogSimpeler: "DNA-klok" },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — recente evolutie + mens",
    explanation:
      "**Recente menselijke evolutie**:\n\n**1. Lactose-tolerantie**:\n• ~10 000 jaar geleden: domesticatie koeien.\n• Volwassenen produceerden van nature geen lactase → konden geen melk verteren.\n• Mutatie 'lactase-persistence' → kunnen melk drinken volwassen.\n• In Noord-Europa (waar koeien-houden ouder): ~90% lactose-tolerant.\n• In Oost-Azië (zelden zuivel): <10%.\n• Klassieke recente menselijke evolutie.\n\n**2. Huidskleur**:\n• Geboorteland van mens (Afrika): donker → bescherming UV.\n• Migratie naar Noord-Europa (lage zonintensiteit): donker = onvoldoende vitamine D-productie.\n• Selectie favoriseerde lichte huid in noorden.\n• Binnen ~30 000 jaar uniforme huidkleuren-gradient ontstaan over Eurazië.\n\n**3. Hoogte-aanpassing**:\n• Tibetanen + Andesbewoners: aanpassingen voor lage zuurstof op hoogte.\n• Verschillende genen — convergente evolutie tussen continenten.\n\n**4. Resistentie tegen malaria**:\n• Sikkel-cel-allel (HbS): geeft milde anemie in heterozygote vorm maar bescherming tegen malaria.\n• In malaria-gebieden hoge frequentie (~30% Afrika); in malaria-vrij gebied verdwijnt.\n• Klassiek heterozygoot voordeel.\n\n**Kunstmatige selectie** vs natuurlijke:\n• Mens kiest welke planten/dieren reproduceren.\n• Honden: van wolf in ~15 000 jaar naar chihuahua + Duitse herder.\n• Granen: teosinte → maïs (~10 000 jaar).\n• Belangrijk inzicht voor Darwin: 'als wij dit in 1000 jaar kunnen, kan natuur het in miljoenen jaren'.\n\n**Modern: evolutie + technologie**:\n• Antibiotica-resistentie: medisch probleem.\n• Virus-mutaties (COVID-19 variant Alpha/Delta/Omicron): biologische evolutie in real-time.\n• Insecticide-resistentie bij muggen + landbouwplagen.\n• Visserij: 'fishing down' — selectie voor kleinere vissen (grote eerst gevangen).\n\n**Toekomst-vraag**: mens verandert evolutionaire druk via cultuur + technologie. We selecteren voor onszelf via:\n• Medische zorg (mensen die anders niet zouden overleven, kunnen nu reproduceren).\n• Voortplantingstechnieken (IVF, embryo-screening).\n• In de toekomst mogelijk genetisch redigeren (CRISPR).\n\n**Ethische vragen**:\n• Eugenetica (verleden + heden).\n• Designer-babies.\n• Genetische tests + verzekering.\n• Soorten-behoud vs evolutie laten lopen.\n\n**Evolutie als feit + theorie**:\n• **Feit**: evolutie heeft plaatsgevonden + plaatsvindt nu (zoals zwaartekracht = feit).\n• **Theorie**: hoe evolutie werkt = natuurlijke selectie + drift + etc. (zoals zwaartekrachts-theorie).\n• 'Theorie' in wetenschap = best-onderbouwde verklaring, NIET 'gok' (zoals dagelijks taalgebruik).",
    checks: [
      {
        q: "**Lactose-tolerantie** bij Noord-Europeanen is voorbeeld van:",
        options: [
          "Recente menselijke evolutie door selectie",
          "Aangeleerd gedrag door vaker melk te drinken",
          "Cultureel verschijnsel zonder genen",
          "Toeval zonder voordeel voor overleving"
        ],
        answer: 0,
        wrongHints: [null, "Kan een volwassene een enzym gaan maken door veel te oefenen?", "Het kunnen verteren van melk erf je van je ouders. Wat zegt dat?", "Melkdrinkers hadden in koude streken meer voedsel. Gaf dat geen voordeel?"],
        uitlegPad: {
          stappen: [{ titel: "Co-evolutie mens + cultuur", tekst: "Eerst koeien houden → wie melk kan verteren → meer voedsel → meer kinderen → mutatie verspreidt zich. Binnen 10 000 jaar van zeldzame mutatie naar 90% in Noord-Europa. Klassiek voorbeeld 'gen-cultuur co-evolutie'." }],
          niveaus: { basis: "Recente evolutie.", simpeler: "Genen reageerden op koeien-cultuur.", nogSimpeler: "Evolutie" },
        },
      },
      {
        q: "**Sikkel-cel-anemie**: HbS-allel beschermt tegen malaria. Wat verklaart hoge frequentie in Afrika?",
        options: [
          "Heterozygoot voordeel: dragers zijn beschermd",
          "Genetische drift: puur toeval in kleine groepen",
          "Mensen kozen partners zonder anemie",
          "Selectie die het allel snel laat verdwijnen"
        ],
        answer: 0,
        wrongHints: [null, "Het allel is juist vaak waar malaria heerst. Past dat bij puur toeval?", "Partnerkeuze op een onzichtbaar allel? En zou het allel dan niet juist zeldzamer worden?", "Als het allel verdwijnt, waarom komt het dan juist zo vaak voor?"],
        uitlegPad: {
          stappen: [
            { titel: "Balanced polymorphism", tekst: "HbS heterozygoot (HbS/HbA): mild + malaria-beschermd → hoge fitness in malaria-gebied. Homozygoot HbS/HbS: sikkel-cel-anemie → lage fitness. Selectie houdt de allel-frequentie in evenwicht (in delen van Afrika is tot ~30% van de mensen drager). Buiten malaria-gebied: allel verdwijnt." },
          ],
          theorie: "Andere balanced polymorphism: cystische fibrose dragers mss beschermd tegen tyfus + cholera (controversieel).",
          niveaus: { basis: "Heterozygoot voordeel.", simpeler: "Half-en-half krijgt voordeel.", nogSimpeler: "Heterozygoot" },
        },
      },
      {
        q: "Een **theorie** in wetenschap (zoals evolutie-theorie) betekent:",
        options: [
          "Een goed onderbouwde verklaring",
          "Een slimme gok of speculatie",
          "Een wet die altijd en overal geldt",
          "Het tegenovergestelde van een feit"
        ],
        answer: 0,
        wrongHints: [null, "In het dagelijks leven is een theorie een gok. Betekent het woord in de wetenschap hetzelfde?", "Een wet beschrijft wát er gebeurt, een theorie verklaart waaróm. Zijn dat dezelfde dingen?", "Een theorie verklaart juist feiten. Zijn ze dan elkaars tegendeel?"],
        uitlegPad: {
          stappen: [
            { titel: "Wetenschappelijke 'theorie'", tekst: "In wetenschap is theorie de HOOGSTE status: verklaart vele waargenomen feiten + maakt voorspellingen die kloppen + getest door velen. Zoals zwaartekrachts-theorie, atoomtheorie, evolutie-theorie. Dagelijks 'theorie = gok' is verwarrend — 'hypothese' is dichter bij dat in wetenschap." },
          ],
          niveaus: { basis: "Best-onderbouwde verklaring.", simpeler: "Geen gok — sterk bewezen verklaring.", nogSimpeler: "Onderbouwd" },
        },
      },
      {
        q: "**Kunstmatige selectie** door mens (zoals honden-fokken):",
        options: [
          "Zelfde mechanisme, maar de mens selecteert",
          "Verandert het gedrag, maar niet de genen",
          "Maakt nieuwe genen die de fokker wil",
          "Werkt anders dan natuurlijke selectie"
        ],
        answer: 0,
        wrongHints: [null, "Een chihuahua krijgt chihuahua-pups. Zit dat verschil dan in het gedrag of in de genen?", "Kan een fokker nieuwe genen bestellen, of kiest hij uit wat er al in de honden zit?", "Ook bij fokken krijgen de dieren met de gewenste eigenschap de meeste jongen. Is dat principe anders dan in de natuur?"],
        uitlegPad: {
          stappen: [
            { titel: "Sleutel voor Darwin", tekst: "Mens fokt honden, koeien, maïs. In 15 000 jaar van wolf naar chihuahua + Duitse herder + Bulldog. Darwin: 'als mens dit in eeuwen kan, kan natuur in miljoenen jaren veel meer'. Cruciaal inzicht voor publicatie 'Origin of Species'." },
          ],
          niveaus: { basis: "Mens als selectie-druk.", simpeler: "Mens kiest wie reproduceert.", nogSimpeler: "Mens-selectie" },
        },
      },
      {
        q: "Volgens **2e thermodynamica-wet**: entropie neemt toe in gesloten systeem. Argument 'dit verbiedt evolutie' is:",
        options: [
          "Onjuist — de aarde krijgt energie van de zon",
          "Correct — orde kan nooit vanzelf ontstaan",
          "Niet relevant — de wet geldt alleen in labs",
          "Onjuist — de wet bewijst juist evolutie"
        ],
        answer: 0,
        wrongHints: [null, "Denk aan een sneeuwvlok of een groeiende plant. Ontstaat orde echt nooit vanzelf?", "Natuurwetten gelden overal. Wat is dan de echte fout in het argument?", "Een natuurkundige wet zegt niets over soorten. Waarom klopt het argument dan niet?"],
        uitlegPad: {
          stappen: [
            { titel: "Open systeem-clausule", tekst: "2e wet: in **gesloten** systeem (geen energie-uitwisseling) entropie altijd toe. Aarde is NIET gesloten — krijgt ~10¹⁷ J/s zon-energie. Lokale organisatie (leven, sneeuwvlokken, kristallen) kan ontstaan zolang elders entropie toeneemt (warmte naar ruimte). Geen tegenspraak met evolutie." },
          ],
          niveaus: { basis: "Aarde is open.", simpeler: "Zon levert energie, dus geen probleem.", nogSimpeler: "Open" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const evolutieHavoVwo = {
  id: "evolutie-havo-vwo",
  title: "Evolutie + Natuurlijke Selectie (HAVO/VWO Biologie)",
  emoji: "🦴",
  level: "havo-vwo-4-5",
  subject: "biologie",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Biologie — Evolutie + Natuurlijke Selectie (CSE-onderwerp)",
  prerequisites: [
    { id: "ecosystemen-havo-vwo", title: "Ecosystemen + Biodiversiteit", niveau: "havo-3F" },
    { id: "genetica-havo-vwo", title: "Genetica + Erfelijkheid", niveau: "havo-3F" },
  ],
  intro:
    "Evolutie + Natuurlijke Selectie voor HAVO/VWO eindexamen — Darwin + 4 voorwaarden, variatie/mutaties/recombinatie, drift + soortvorming, bewijzen (fossielen/anatomie/embryo/biogeografie/moleculair), recente menselijke evolutie. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "evolutie", "Darwin", "Wallace",
    "Origin of Species", "1859",
    "natuurlijke selectie", "selectiedruk",
    "variatie", "mutatie", "recombinatie",
    "fitness", "reproductief succes",
    "Galapagos", "vinken", "adaptieve radiatie",
    "pepermot", "industriële melanisme",
    "Hardy-Weinberg", "allel-frequentie",
    "gene flow", "migratie",
    "genetische drift", "bottleneck", "stichter-effect",
    "cheetah",
    "soortvorming", "speciatie",
    "allopatrisch", "sympatrisch",
    "polyploïdie",
    "reproductieve isolatie",
    "pre-zygotisch", "post-zygotisch",
    "muildier", "paard ezel",
    "co-evolutie",
    "fossielen", "tussenvormen",
    "archeopteryx", "tiktaalik",
    "homologe organen", "analoge organen",
    "rudimentaire organen", "appendix",
    "embryologie", "biogeografie",
    "moleculaire klok", "DNA-vergelijking",
    "mens chimp 98,8%",
    "antibiotica-resistentie",
    "lactose-tolerantie",
    "sikkel-cel", "malaria",
    "kunstmatige selectie",
    "feit + theorie",
  ],
  chapters,
  steps,
};

export default evolutieHavoVwo;
