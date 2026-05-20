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
      "**Charles Darwin** (1809-1882):\n• Reis met HMS Beagle 1831-1836, vooral Galapagos-eilanden (vinken!).\n• 'On the Origin of Species' 1859 — fundament moderne biologie.\n• Onafhankelijk: Alfred Russell Wallace had vergelijkbare ideeën — samen gepubliceerd 1858.\n\n**4 voorwaarden voor natuurlijke selectie**:\n1. **Variatie**: individuen binnen een soort verschillen (kleur, grootte, snelheid).\n2. **Erfelijkheid**: variatie wordt grotendeels doorgegeven (genen).\n3. **Overproductie**: meer nakomelingen dan kunnen overleven.\n4. **Selectiedruk**: omgeving 'kiest' welke variaties beter overleven + reproduceren.\n\nGevolg: gunstige eigenschappen blijven in populatie, ongunstige verdwijnen → evolutie.\n\n**Voorbeeld klassiek**: pepermot (peppered moth) in industrieel Engeland 1850-1950:\n• Bomen bedekt met roet door verbranding kolen → donker schors.\n• Lichte pepermotten goed zichtbaar → opgegeten door vogels.\n• Donkere mutant beter gecamoufleerd → overleeft + plant voort.\n• Binnen 50 jaar: populatie van 99% licht naar 99% donker.\n• Na luchtkwaliteit-verbetering: omgekeerd → terug naar licht.\n\n**Belangrijk**: natuurlijke selectie werkt op **populatie-niveau**, niet individu. Een individu evolueert niet — populatie wel.\n\n**Geen 'doel' in evolutie**:\n• Geen vooropgezet plan, geen 'beter' of 'hoger'.\n• Geen 'streven' naar perfectie.\n• Alleen: 'wie overleeft + reproduceert, krijgt meer nakomelingen'.\n• Dat heet **adaptatie** (aanpassing aan omgeving).\n\n**Fitness** (Darwiniaans):\n• Niet 'sterkste' of 'snelste' maar **reproductief succes**.\n• Mannelijke pauw met overdreven staart = sexueel aantrekkelijk → meer paartjes → hoge fitness (ondanks dat staart vluchten moeilijker maakt).\n• Fitness = relatief in omgeving + tijd.\n\n**Voorbeelden klassiek**:\n• Galapagos-vinken: verschillende snavels per eiland aangepast aan voedsel (zaden klein → grote sterke snavel; insecten → fijne snavel).\n• Antibiotica-resistentie: bacteriën met mutatie overleven → resistent stam ontstaat.\n• Giraffe-nek: niet 'wilden langer rekken', maar populatie waarin lange-nek-individuen meer overleefden.",
    checks: [
      {
        q: "Welke is **GEEN** voorwaarde voor natuurlijke selectie?",
        options: [
          "Vrije keuze van het individu om te evolueren",
          "Variatie binnen populatie",
          "Erfelijkheid van eigenschappen",
          "Selectiedruk uit omgeving"
        ],
        answer: 0,
        wrongHints: [null, "Variatie IS vereist.", "Erfelijkheid IS vereist.", "Selectiedruk IS vereist."],
        uitlegPad: {
          stappen: [{ titel: "Geen keuze", tekst: "Evolutie is geen bewuste keuze. Het individu 'kiest' niets — de combinatie van variatie, erfelijkheid + selectiedruk werkt op populatie-niveau. Veel gemaakt misverstand: 'soorten passen zich aan' wel maar 'jaffes wilden langer worden' niet (Lamarck-fout)." }],
          niveaus: { basis: "Geen vrije keuze. A.", simpeler: "Evolutie is geen bewuste actie. A.", nogSimpeler: "Keuze ≠ A." },
        },
      },
      {
        q: "Pepermot-evolutie in 19e eeuw: licht → donker. Door wat?",
        options: [
          "Roet maakte bomen donker → lichte motten beter zichtbaar → opgegeten → donkere overleven",
          "Motten 'wilden' donker worden",
          "Selectie door vrouwelijke motten",
          "Toeval zonder selectie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — geen bewuste wens.", "Geen seksuele selectie hier.", "Niet — duidelijk selectiedruk."],
        uitlegPad: {
          stappen: [
            { titel: "Industriële melanisme", tekst: "Klassiek experiment + observatie. Voor 1850: <1% donker. Tegen 1900: >95% donker. Vogel-predatie favoriseerde camouflage met roetschors. Na Clean Air Act 1956 + schoner industrie → omgekeerd → terug naar licht. **Bewijs evolutie in mensentijdschalen**." },
          ],
          niveaus: { basis: "Roet + predatie. A.", simpeler: "Donkere camouflage werd voordeel. A.", nogSimpeler: "Roet = A." },
        },
      },
      {
        q: "**Darwiniaanse fitness** betekent:",
        options: [
          "Reproductief succes (aantal levensvatbare nakomelingen)",
          "Fysieke kracht",
          "Snelheid",
          "Intelligentie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — kracht is niet doorslaggevend.", "Idem.", "Idem."],
        uitlegPad: {
          stappen: [{ titel: "Niet 'survival of the fittest' als kracht", tekst: "Fitness = hoeveel je doorgeeft aan volgende generatie. Pauw met verleidelijke staart: minder mobiel → hogere kans gepakt door predator, MAAR meer paartjes → meer nakomelingen → hoge fitness. Wat 'fit' is hangt af van omgeving." }],
          niveaus: { basis: "Nakomelingen. A.", simpeler: "Wie meeste baby's krijgt = fit. A.", nogSimpeler: "Reproductie = A." },
        },
      },
      {
        q: "Galapagos-vinken hebben **verschillende snavels** per eiland. Waarom?",
        options: [
          "Aanpassing aan beschikbaar voedsel per eiland (zaden, insecten, etc.)",
          "Toeval",
          "Vinken kiezen hun snavel-vorm",
          "Eilanden hebben verschillende klimaat"
        ],
        answer: 0,
        wrongHints: [null, "Niet — wel patroon.", "Onmogelijk.", "Klimaat speelt rol maar voedsel is hoofdverklaring."],
        uitlegPad: {
          stappen: [
            { titel: "Adaptieve radiatie", tekst: "Eén voorouder-vink kwam op archipel. Op verschillende eilanden: ander voedsel beschikbaar. Selectie favoriseert snavels per habitat. In ~3 mln jaar: 15+ soorten. Klassiek voorbeeld dat Darwin tot zijn theorie bracht." },
          ],
          theorie: "Een groep verwante soorten ontstaat uit één voorouder → adaptieve radiatie. Ook bekend bij cichliden in Afrikaanse meren (>500 soorten).",
          niveaus: { basis: "Voedsel-aanpassing. A.", simpeler: "Eigen snavel per eiland-eten. A.", nogSimpeler: "Voedsel = A." },
        },
      },
      {
        q: "Een populatie heeft 4 nakomelingen-paren met max 2 overlevers per paar. Wat gebeurt?",
        options: [
          "Selectie: helft sterft, sterkste overleven",
          "Iedereen overleeft",
          "Niemand overleeft",
          "Eigenaar populatie kiest"
        ],
        answer: 0,
        wrongHints: [null, "Niet — overproductie geeft selectie.", "Geen reden voor totaal-verlies.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "Voorwaarde 3: overproductie", tekst: "Darwin's inzicht (geïnspireerd door Malthus): organismen produceren altijd meer nakomelingen dan omgeving aankan. Daardoor: concurrentie + selectie. Niet alle nakomelingen overleven → die met betere variatie hebben hogere kans → evolutie." }],
          niveaus: { basis: "Selectie door overschot. A.", simpeler: "Te veel babys → niet alle overleven. A.", nogSimpeler: "Selectie = A." },
        },
      },
    ],
  },

  // ─── B. Genetische variatie ───────────────────────────────
  {
    title: "Bron van variatie — mutaties + recombinatie",
    explanation:
      "Zonder **variatie** geen evolutie. Drie bronnen:\n\n**1. Mutaties**:\n• Veranderingen in DNA-sequentie.\n• Spontaan tijdens replicatie (~10⁻⁹ per basenpaar per generatie).\n• Of door externe oorzaak: straling, chemicaliën, virussen.\n• Soorten:\n  - **Punt-mutatie**: één base vervangen.\n  - **Insertie/deletie**: base(s) erbij/eraf → frameshift.\n  - **Chromosomale**: hele stukken verschoven/dubbel.\n• **Meeste mutaties zijn neutraal** (in 'junk-DNA' of synoniem) of schadelijk. Slechts klein deel gunstig.\n\n**2. Recombinatie** (seksuele voortplanting):\n• Bij meiose: chromosomen mengen + 'crossing-over' wisselt stukken.\n• Random combinatie van ouder-genen → unieke nakomeling.\n• Belangrijk: recombinatie maakt geen NIEUWE genen, herschikt bestaande.\n\n**3. Gene flow** (migratie):\n• Migranten brengen nieuwe allelen mee.\n• Versterkt diversiteit binnen populatie.\n\n**Allel-frequentie** (Hardy-Weinberg-evenwicht, VWO):\nVoor 2 allelen A + a met frequenties p + q (p+q=1):\n• AA: p².\n• Aa: 2pq.\n• aa: q².\n• Evenwicht houdt aan tenzij: mutatie, selectie, drift, migratie, niet-random paring.\n\n**Voorbeeld**: in NL is 25% van bevolking dragers van CF-allel (cystische fibrose). q² = 1/2500 → q ≈ 0,02 → 2pq ≈ 0,04 → 4% dragers. Patiënten zelf: ~1 op 4000 (q² werkelijk).\n\n**Mutaties zonder reden**:\nMutaties zijn **willekeurig** t.o.v. wat de organisme nodig heeft. Geen 'antwoord' op omgeving. Wel: in slecht-aangepaste populaties stress → soms hogere mutatiesnelheid → 'evolvability'.\n\n**Genetische variatie + populatiegrootte**:\n• Grote populatie: veel variatie, drift klein, evolutie langzaam tenzij sterke selectie.\n• Kleine populatie: weinig variatie (flessenhals), drift sterk, vatbaar voor uitsterving.\n• Daarom: bedreigde soorten kweekprogramma's met genetische diversiteit beschermen.\n\n**Polymorfisme**: aanwezigheid van >1 allel in populatie. Bv. bloedgroep ABO (3 allelen: I_A, I_B, i).",
    checks: [
      {
        q: "De meeste **mutaties** zijn:",
        options: [
          "Neutraal of schadelijk; slechts klein deel gunstig",
          "Allemaal gunstig",
          "Allemaal schadelijk",
          "Bewust gekozen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — meeste niet zo.", "Niet — neutrale wel.", "Onmogelijk."],
        uitlegPad: {
          stappen: [{ titel: "Random + meestal onzichtbaar", tekst: "DNA-replicatie maakt fouten. De meeste vallen in niet-coderend DNA → geen effect. Coderende mutaties: meestal verstoren werking eiwit → schadelijk. Zeldzame: gunstig — daarop werkt selectie." }],
          niveaus: { basis: "Meeste neutraal/schadelijk. A.", simpeler: "Mutaties willekeurig, zelden gunstig. A.", nogSimpeler: "Neut/schad = A." },
        },
      },
      {
        q: "**Recombinatie** bij seksuele voortplanting:",
        options: [
          "Mengt bestaande genen, geen nieuwe genen",
          "Maakt nieuwe genen",
          "Verdwijnt bij meiose",
          "Werkt alleen voor mannetjes"
        ],
        answer: 0,
        wrongHints: [null, "Niet — wisselt, niet creëert.", "Tegenovergesteld.", "Geldt voor alle gameten."],
        uitlegPad: {
          stappen: [
            { titel: "Crossing-over + onafhankelijke segregatie", tekst: "Tijdens meiose: chromosomen koppelen + wisselen stukken. Plus elke chromosoom gaat random naar ene of andere gameet. Combinatie van 2 sets ouders → enorme variatie zonder dat nieuwe genen ontstaan. Mutatie levert nieuwe variatie." },
          ],
          niveaus: { basis: "Mengen bestaande. A.", simpeler: "Schudt genen, geen nieuwe. A.", nogSimpeler: "Mengen = A." },
        },
      },
      {
        q: "Een **kleine populatie** loopt risico op:",
        options: [
          "Verlies van genetische variatie → vatbaarheid uitsterving",
          "Te veel variatie",
          "Mutaties uitgesloten",
          "Geen evolutie mogelijk"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — mutaties gebeuren.", "Drift maakt evolutie juist sneller."],
        uitlegPad: {
          stappen: [
            { titel: "Flessenhals + inteelt", tekst: "Kleine populatie: variatie smal, gevoelig voor verlies door drift + inteelt. Voorbeeld cheetah's: bottleneck ~10 000 jaar geleden → vandaag bijna geen genetische verschillen → vatbaar voor virussen. Beschermingsprogramma's mengen populaties om diversiteit te behouden." },
          ],
          niveaus: { basis: "Verlies variatie. A.", simpeler: "Klein = arm = kwetsbaar. A.", nogSimpeler: "Klein = A." },
        },
      },
      {
        q: "Frequentie van gen-a in populatie is q = 0,2. Frequentie van **homozygoot aa**?",
        options: ["q² = 0,04 (= 4%)", "0,2", "0,4", "2q = 0,4"],
        answer: 0,
        wrongHints: [null, "Niet — dat is allel-frequentie.", "Niet — dat is heterozygoot.", "Niet — geen relatie."],
        uitlegPad: {
          stappen: [
            { titel: "Hardy-Weinberg q²", tekst: "Frequentie aa = q² = 0,2² = **0,04 = 4%**. Heterozygoot 2pq = 2·0,8·0,2 = 0,32 = 32%. AA = p² = 0,64 = 64%. Som: 100%. ✓" },
          ],
          niveaus: { basis: "q²=0,04. A.", simpeler: "0,2 in kwadraat = 0,04. A.", nogSimpeler: "0,04 = A." },
        },
      },
      {
        q: "**Gene flow** is:",
        options: [
          "Migratie van individuen brengt nieuwe allelen naar populatie",
          "Genen die door cel stromen",
          "Mutaties die zich verspreiden",
          "DNA-replicatie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — verkeerde betekenis.", "Specifiek migratie, niet algemene verspreiding.", "Onjuist concept."],
        uitlegPad: {
          stappen: [{ titel: "Populaties met uitwisseling", tekst: "Wanneer individuen migreren naar nieuwe populatie + reproduceren → brengen ze hun allelen mee → genfrequenties verschuiven. Bij hoge gene flow: populaties homogeen blijven. Bij lage gene flow: populaties uitspoelen → mogelijke soortvorming." }],
          niveaus: { basis: "Migratie brengt allelen. A.", simpeler: "Verhuizen voegt nieuwe genen toe. A.", nogSimpeler: "Migratie = A." },
        },
      },
    ],
  },

  // ─── C. Drift + soortvorming ──────────────────────────────
  {
    title: "Genetische drift + soortvorming",
    explanation:
      "**Genetische drift** = veranderingen in allel-frequenties door **toeval**, vooral in kleine populaties.\n\n**Voorbeeld**: in populatie van 10 individuen sterft 1 toevallig (storm). Als die de enige drager van allel-X was: X verdwijnt voor altijd. In populatie van 10 000: 1 sterfte verandert weinig.\n\n**Twee speciale drift-events**:\n\n**1. Flessenhals (bottleneck)**:\n• Populatie krimpt drastisch → klein aantal overlevers → beperkte gene pool.\n• Voorbeeld: cheetah's (~10 000 j geleden), olifant-zeehonden (jacht-bottleneck 1800).\n• Resulterende populatie heeft veel minder diversiteit.\n\n**2. Stichter-effect (founder)**:\n• Klein groep koloniseert nieuw gebied.\n• Hun allelen worden basis voor hele nieuwe populatie.\n• Voorbeeld: Amish in VS — uit ~200 stichters → uniek allel voor Ellis-van-Creveld-syndroom hoge frequentie.\n\n**Soortvorming** (speciatie):\nNieuwe soort ontstaat wanneer populaties zo lang gescheiden zijn dat ze niet meer kunnen kruisen → reproductieve isolatie.\n\n**Twee hoofdmodellen**:\n\n**1. Allopatrische soortvorming** (verschillende plek):\n• Geografische barrière scheidt populatie (gebergte, rivier, oceaan).\n• Verschillende selectiedruk + drift → allelen wijzigen onafhankelijk.\n• Na lange tijd: hereniging onmogelijk vanwege biologische verschillen.\n• Voorbeeld: Galapagos-vinken (eilanden).\n\n**2. Sympatrische soortvorming** (zelfde plek):\n• Geen fysieke scheiding, maar genetische isolatie (polyploïdie, ander voedsel, ander gedragspatroon).\n• Voorbeeld: cichliden in Afrikaanse meren — explosie van soorten in één meer.\n• Bij planten via **polyploïdie** (extra chromosoomsets) → onmiddellijke nieuwe soort.\n\n**Isolatiemechanismen**:\n• **Pre-zygotisch** (voorkomt bevruchting): habitat, tijd (verschillend bloeitijd), gedrag (verschillende paringsrituelen), morfologie, gameten incompatibel.\n• **Post-zygotisch** (na bevruchting): hybriden onvruchtbaar (muildier = paard×ezel) of niet levensvatbaar.\n\n**Soortbegrip** (biologisch — Mayr 1942):\nGroep populaties die in natuur **kruisen + vruchtbare nakomelingen geven**. Werkt voor dieren + planten met seksuele voortplanting; lastig voor bacteriën (asexueel) of fossielen.\n\n**Tempo evolutie**:\n• **Gradualisme**: langzaam + continu verandering over miljoenen jaren.\n• **Punctuated equilibrium** (Eldredge + Gould 1972): lange perioden stilstand + korte sprongen bij grote omgevingsverandering.\n• Beide gebeuren — afhankelijk van situatie.\n\n**Co-evolutie**:\n• Soorten beïnvloeden elkaars evolutie wederzijds.\n• Voorbeelden: bloem + bestuivende insect (orchidee + langtongige nachtvlinder), predator + prooi (snellere kat → snellere antiloop), parasiet + gastheer.",
    checks: [
      {
        q: "**Genetische drift** werkt sterker in:",
        options: [
          "Kleine populaties (toeval-effect groter)",
          "Grote populaties",
          "Bij sterke selectie",
          "Bij hoge mutatie-snelheid"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — drift is naast selectie.", "Mutaties leveren variatie, niet drift."],
        uitlegPad: {
          stappen: [{ titel: "Wet van grote aantallen", tekst: "Statistisch: bij weinig waarnemingen veel ruis. In klein dorp van 50 mensen: 1 ongeluk verandert ratios sterk. In stad van 1 mln: amper effect. Drift = ruis." }],
          niveaus: { basis: "Klein = sterke drift. A.", simpeler: "Toeval domineert in kleine groep. A.", nogSimpeler: "Klein = A." },
        },
      },
      {
        q: "**Allopatrische soortvorming** vereist:",
        options: [
          "Geografische scheiding tussen populaties",
          "Polyploïdie",
          "Sympatrische co-existentie",
          "Hybriden"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is sympatrisch.", "Tegenovergesteld.", "Niet — kruisen wordt onmogelijk juist."],
        uitlegPad: {
          stappen: [{ titel: "Allo = ander, patria = land", tekst: "'Allopatrisch' = letterlijk 'ander vaderland'. Bv. populatie aan beide kanten van Rocky Mountains gescheiden → onafhankelijke evolutie → na honderdduizenden jaren verschillende soorten. Meest voorkomende model." }],
          niveaus: { basis: "Geografische barrière. A.", simpeler: "Gescheiden door berg/rivier. A.", nogSimpeler: "Allo = A." },
        },
      },
      {
        q: "**Cheetah's** hebben weinig genetische variatie. Oorzaak?",
        options: [
          "Bottleneck (drastische populatie-krimp in verleden)",
          "Inteelt door menselijke ingreep",
          "Stichter-effect",
          "Sympatrische soortvorming"
        ],
        answer: 0,
        wrongHints: [null, "Niet primair — gevolg, niet oorzaak.", "Mogelijk maar bottleneck is specifieker.", "Niet relevant."],
        uitlegPad: {
          stappen: [
            { titel: "Klassiek voorbeeld", tekst: "DNA-analyse toont ~10 000 j geleden cheetah-populatie nauw te zijn (mss ~7 individuen). Reden onbekend (mss ijstijd-einde + grote zoogdier-uitsterving). Vandaag: alle cheetah's bijna identiek genetisch → gevoelig voor virussen + lage vruchtbaarheid." },
          ],
          niveaus: { basis: "Bottleneck. A.", simpeler: "Bijna uitgestorven in verleden. A.", nogSimpeler: "Flessenhals = A." },
        },
      },
      {
        q: "Een **muildier** (paard × ezel) is onvruchtbaar. Welk isolatie-mechanisme?",
        options: [
          "Post-zygotisch (na bevruchting)",
          "Pre-zygotisch",
          "Habitat-isolatie",
          "Gedragsisolatie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — bevruchting heeft plaatsgevonden.", "Niet — wel ontmoet + gepaard.", "Niet — wel gepaard."],
        uitlegPad: {
          stappen: [
            { titel: "Hybrid sterility", tekst: "Bevruchting werkt → muildier levensvatbaar. MAAR muildier zelf onvruchtbaar (oneven aantal chromosomen → meiose mislukt). Dus genen worden NIET doorgegeven → reproductieve isolatie achteraf. Bewijst dat paard + ezel verschillende soorten zijn." },
          ],
          niveaus: { basis: "Post-zygotisch. A.", simpeler: "Hybride wel geboren, niet vruchtbaar. A.", nogSimpeler: "Post = A." },
        },
      },
      {
        q: "**Co-evolutie** voorbeeld:",
        options: [
          "Orchidee met lange spoor + nachtvlinder met lange tong, samen geëvolueerd",
          "Eenzaam mos in toendra",
          "Genetische drift in klein dorp",
          "Mutatie in DNA"
        ],
        answer: 0,
        wrongHints: [null, "Geen interactie.", "Geen interactie.", "Geen wisselwerking."],
        uitlegPad: {
          stappen: [
            { titel: "Reciprocale aanpassing", tekst: "Charles Darwin's voorbeeld: Angraecum-orchidee in Madagascar met 28 cm spoor → voorspelde 'er moet een vlinder zijn met 28 cm tong'. Bevestigd 1903: Xanthopan-nachtvlinder. Beide drijven elkaars evolutie." },
          ],
          theorie: "Andere klassiekers: bijen + bloemen, lichaam-microbioom, prooi-predator. Wapens-wedloop.",
          niveaus: { basis: "Orchidee + vlinder. A.", simpeler: "Wederzijds evolueren. A.", nogSimpeler: "Co = A." },
        },
      },
    ],
  },

  // ─── D. Bewijzen voor evolutie ────────────────────────────
  {
    title: "Bewijzen voor evolutie — 5 hoofdpijlers",
    explanation:
      "**Evolutie is bewezen** door convergente bewijslijnen uit verschillende disciplines:\n\n**1. Fossielen**:\n• Sequentie van vormen in geologische lagen — oude vormen onderaan.\n• **Tussenvormen**: archeopteryx (vogel-reptiel), tiktaalik (vis-amfibie), ambulocetus (loop-walvis).\n• Hele dynastieën: 50 mln j evolutie van paarden (van hond-grootte tot moderne).\n• Massa-uitsterving + recovery zichtbaar in fossielenrecord.\n\n**2. Vergelijkende anatomie**:\n• **Homologe organen**: zelfde structuur, verschillende functie — voorpoot mens/walvis/vleermuis/paard hebben zelfde bot-plan (humerus, radius, ulna, hand) → gemeenschappelijke voorouder.\n• **Analoge organen**: zelfde functie, verschillende oorsprong — vleugel vleermuis vs vleugel libel (convergent).\n• **Rudimentaire organen**: niet meer gebruikt — appendix mens, blindedarm-rest bij katten, ooglid bij slangen.\n\n**3. Embryologie**:\n• Embryo's van gewervelden tonen vergelijkbare ontwikkeling vroeg (kieuw-bogen, staart).\n• Maakt gemeenschappelijke afkomst zichtbaar.\n• 'Ontogenese herhaalt fylogenese' (Haeckel — overdreven maar kern klopt).\n\n**4. Biogeografie**:\n• Distributie van soorten over aarde past bij continenten-drift + evolutie.\n• Marsupialen domineren in Australië (geïsoleerd ~50 mln j).\n• Galapagos-soorten lijken op Zuid-Amerikaanse, niet Afrikaanse.\n• Eindemische soorten op eilanden.\n\n**5. Moleculaire biologie** (sterkst bewijs sinds ~1960):\n• DNA + eiwitten van verwante soorten lijken meer op elkaar.\n• Mens + chimp: ~98,8% DNA identiek.\n• Mens + gist: ~50% nog overlappend (gemeenschappelijke voorouder ~1,5 mld j).\n• 'Universeel genetische code' (zelfde DNA-codes voor zelfde amino-zuren) → één oorsprong leven.\n• **Moleculaire klok**: mutaties accumuleren in voorspelbaar tempo → datering van afsplitsingen.\n\n**Direct geobserveerde evolutie** (= geen 'verleden tijd', NU):\n• Antibiotica-resistentie bacteriën.\n• Pepermot industriële melanisme + omkeer.\n• Galapagos-vinken: snavel-veranderingen binnen 30 jaar gevolg dorre + natte jaren.\n• HIV-evolutie binnen één patiënt.\n• Hondenrassen — 200 jaar selectie heeft enorme variatie geproduceerd (puur kunstmatige selectie).\n\n**Wat is GEEN bewijs (misverstanden)**:\n• 'Tweede thermodynamica-wet verbiedt evolutie' — onjuist, geldt voor gesloten systeem, aarde is open (zon-energie).\n• 'Geen tussenvormen' — onjuist, vele bekend.\n• 'Te complex voor toeval' — selectie is NIET toeval, het is gefilterde variatie.",
    checks: [
      {
        q: "**Homologe organen** zijn:",
        options: [
          "Zelfde structuur, andere functie (bv. voorpoot mens/walvis/vleermuis)",
          "Andere structuur, zelfde functie",
          "Identieke functie + structuur",
          "Functieloos"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is analoog.", "Mogelijk maar specifiek.", "Niet — dat is rudimentair."],
        uitlegPad: {
          stappen: [{ titel: "Gemeenschappelijke voorouder bewijs", tekst: "Vleermuis-vleugel + walvis-flipper + paard-poot + mens-hand: zelfde botten in verschillende verhoudingen. Onmogelijk te verklaren zonder gemeenschappelijke voorouder. Klassiek bewijs Darwin." }],
          niveaus: { basis: "Zelfde structuur, anders functie. A.", simpeler: "Zelfde basis-skelet, ander gebruik. A.", nogSimpeler: "Homoloog = A." },
        },
      },
      {
        q: "**Vleugel vleermuis** + **vleugel libel** zijn:",
        options: [
          "Analoog (zelfde functie, andere oorsprong)",
          "Homoloog",
          "Rudimentair",
          "Identiek"
        ],
        answer: 0,
        wrongHints: [null, "Niet — andere afkomst.", "Niet — beide actief gebruikt.", "Onjuist."],
        uitlegPad: {
          stappen: [
            { titel: "Convergente evolutie", tekst: "Vleermuis evolueerde uit zoogdier; libel uit insect. Beide ontwikkelden onafhankelijk vleugels omdat omgeving vliegen 'beloont'. Geen gemeenschappelijke vlieg-voorouder. Voorbeeld convergentie." },
          ],
          niveaus: { basis: "Analoog. A.", simpeler: "Zelfde functie, anders ontstaan. A.", nogSimpeler: "Analoog = A." },
        },
      },
      {
        q: "Mens + chimpansee delen **welk percentage** DNA?",
        options: ["~98,8%", "~80%", "~50%", "~10%"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Veel te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Bijna identiek", tekst: "Mens + chimp delen ~98,8% van DNA. Verschillen vooral in regulatoire sequenties (welke genen waar/wanneer aan staan), niet zozeer in coderende. Bevestigt recente gemeenschappelijke voorouder (~6 mln j geleden)." }],
          theorie: "Mens + muis: ~85%. Mens + banaan: ~60%. Mens + bacterie: ~50% genen vergelijkbaar. Suggereert gradiënt van verwantschap.",
          niveaus: { basis: "98,8%. A.", simpeler: "Bijna 99% gelijk. A.", nogSimpeler: "98,8 = A." },
        },
      },
      {
        q: "**Antibiotica-resistentie** in bacteriën:",
        options: [
          "Directe + lopende evolutie door selectiedruk",
          "Bewijst dat evolutie niet bestaat",
          "Bewijst intelligent ontwerp",
          "Bacteriën besluiten resistent te worden"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Onjuist verbinding.", "Geen 'besluit' bij bacteriën."],
        uitlegPad: {
          stappen: [
            { titel: "Selectie zichtbaar binnen weken", tekst: "Bacterie-populatie heeft variatie (mutaties). Antibiotica doodt gevoelige stammen → resistente overleven + reproduceren. Binnen weken: hele populatie resistent. Eén van DUIDELIJKSTE evolutie-bewijzen — heeft direct medische implicaties (MRSA, etc.)." },
          ],
          theorie: "Volgens WHO mogelijk grootste medische bedreiging 2050 (geen werkende antibiotica meer voor sommige infecties).",
          niveaus: { basis: "Directe evolutie. A.", simpeler: "Selectie voor onze ogen. A.", nogSimpeler: "Direct = A." },
        },
      },
      {
        q: "Een **moleculaire klok** gebruikt:",
        options: [
          "Voorspelbaar tempo van DNA-mutaties om datering tussen soorten te bepalen",
          "Echte uurwerk-mechanisme",
          "Aantal organen",
          "Hartslag"
        ],
        answer: 0,
        wrongHints: [null, "Onzin.", "Niet — DNA.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Mutatie-snelheid ~ constant", tekst: "Bepaalde DNA-sequenties muteren in voorspelbaar tempo (bv. mitochondriaal DNA 1 mutatie per 6500 jaar). Door verschillen tussen soorten te tellen → datering van splitsing. Mens + chimp splits ~6-7 mln j geleden volgens deze methode." },
          ],
          niveaus: { basis: "Mutatie-tempo geeft tijd. A.", simpeler: "Tel verschillen, weet wanneer afsplitsing. A.", nogSimpeler: "DNA-klok = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — recente evolutie + mens",
    explanation:
      "**Recente menselijke evolutie**:\n\n**1. Lactose-tolerantie**:\n• ~10 000 jaar geleden: domesticatie koeien.\n• Volwassenen produceerden van nature geen lactase → konden geen melk verteren.\n• Mutatie 'lactase-persistence' → kunnen melk drinken volwassen.\n• In Noord-Europa (waar koeien-houden ouder): ~90% lactose-tolerant.\n• In Oost-Azië (zelden zuivel): <10%.\n• Klassieke recente menselijke evolutie.\n\n**2. Huidskleur**:\n• Geboorteland van mens (Afrika): donker → bescherming UV.\n• Migratie naar Noord-Europa (lage zonintensiteit): donker = onvoldoende vitamine D-productie.\n• Selectie favoriseerde lichte huid in noorden.\n• Binnen ~30 000 jaar uniforme huidkleuren-gradient ontstaan over Eurazië.\n\n**3. Hoogte-aanpassing**:\n• Tibetanen + Andean: aanpassingen voor lage zuurstof op hoogte.\n• Verschillende genen — convergente evolutie tussen continenten.\n\n**4. Resistentie tegen malaria**:\n• Sikkel-cel-allel (HbS): geeft milde anemie in heterozygote vorm maar bescherming tegen malaria.\n• In malaria-gebieden hoge frequentie (~30% Afrika); in malaria-vrij gebied verdwijnt.\n• Klassieke heterozygote voordeel.\n\n**Kunstmatige selectie** vs natuurlijke:\n• Mens kiest welke planten/dieren reproduceren.\n• Honden: van wolf in ~15 000 jaar naar chihuahua + Duitse herder.\n• Granen: gepiman → maïs (~10 000 jaar).\n• Belangrijk inzicht voor Darwin: 'als wij dit in 1000 jaar kunnen, kan natuur het in miljoenen jaren'.\n\n**Modern: evolutie + technologie**:\n• Antibiotica-resistentie: medisch probleem.\n• Virus-mutaties (COVID-19 variant Alpha/Delta/Omicron): biologische evolutie in real-time.\n• Insecticide-resistentie bij muggen + landbouwplagen.\n• Visserij: 'fishing down' — selectie voor kleinere vissen (grote eerst gevangen).\n\n**Toekomst-vraag**: mens verandert evolutionaire druk via cultuur + technologie. We selecteren voor onszelf via:\n• Medische zorg (mensen die anders niet zouden overleven, kunnen nu reproduceren).\n• Voortplantingstechnieken (IVF, embryo-screening).\n• In de toekomst mogelijk genetisch redigeren (CRISPR).\n\n**Ethische vragen**:\n• Eugenetica (verleden + heden).\n• Designer-babies.\n• Genetische tests + verzekering.\n• Soorten-behoud vs evolutie laten lopen.\n\n**Evolutie als feit + theorie**:\n• **Feit**: evolutie heeft plaatsgevonden + plaatsvindt nu (zoals zwaartekracht = feit).\n• **Theorie**: hoe evolutie werkt = natuurlijke selectie + drift + etc. (zoals zwaartekrachts-theorie).\n• 'Theorie' in wetenschap = best-onderbouwde verklaring, NIET 'gok' (zoals dagelijks taalgebruik).",
    checks: [
      {
        q: "**Lactose-tolerantie** bij Noord-Europeanen is voorbeeld van:",
        options: [
          "Recente menselijke evolutie door selectie (na koeien-domesticatie)",
          "Aangeleerd gedrag",
          "Cultureel verschijnsel zonder genen",
          "Toeval"
        ],
        answer: 0,
        wrongHints: [null, "Niet — gen bepaalt.", "Wel genetisch.", "Wel selectie."],
        uitlegPad: {
          stappen: [{ titel: "Co-evolutie mens + cultuur", tekst: "Eerst koeien houden → wie melk kan verteren → meer voedsel → meer kinderen → mutatie verspreidt zich. Binnen 10 000 jaar van zeldzame mutatie naar 90% in Noord-Europa. Klassiek voorbeeld 'gen-cultuur co-evolutie'." }],
          niveaus: { basis: "Recente evolutie. A.", simpeler: "Genen reageerden op koeien-cultuur. A.", nogSimpeler: "Evolutie = A." },
        },
      },
      {
        q: "**Sikkel-cel-anemie**: HbS-allel beschermt tegen malaria. Wat verklaart hoge frequentie in Afrika?",
        options: [
          "Heterozygote voordeel — drager beschermd, homozygoot ziek",
          "Toeval",
          "Mensen die geen anemie willen",
          "Allel verdwijnt door selectie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — specifieke selectie.", "Onmogelijk.", "Tegenovergesteld — heeft balans."],
        uitlegPad: {
          stappen: [
            { titel: "Balanced polymorphism", tekst: "HbS heterozygoot (HbS/HbA): mild + malaria-beschermd → hoge fitness in malaria-gebied. Homozygoot HbS/HbS: sikkel-cel-anemie → lage fitness. Selectie houdt allel-frequentie in evenwicht ~30% Afrika. Buiten malaria-gebied: allel verdwijnt." },
          ],
          theorie: "Andere balanced polymorphism: cystische fibrose dragers mss beschermd tegen tyfus + cholera (controversieel).",
          niveaus: { basis: "Heterozygoot voordeel. A.", simpeler: "Half-en-half krijgt voordeel. A.", nogSimpeler: "Heterozygoot = A." },
        },
      },
      {
        q: "Een **theorie** in wetenschap (zoals evolutie-theorie) betekent:",
        options: [
          "Best-onderbouwde verklaring uit alle data — NIET een gok",
          "Een gok of speculatie",
          "Iets onbewezen",
          "Tegenovergesteld van feit"
        ],
        answer: 0,
        wrongHints: [null, "Niet — vakjargon vs dagelijks.", "Tegenovergesteld.", "Niet — onderzoeker-theorieen kunnen feiten verklaren."],
        uitlegPad: {
          stappen: [
            { titel: "Wetenschappelijke 'theorie'", tekst: "In wetenschap is theorie de HOOGSTE status: verklaart vele waargenomen feiten + maakt voorspellingen die kloppen + getest door velen. Zoals zwaartekrachts-theorie, atoomtheorie, evolutie-theorie. Dagelijks 'theorie = gok' is verwarrend — 'hypothese' is dichter bij dat in wetenschap." },
          ],
          niveaus: { basis: "Best-onderbouwde verklaring. A.", simpeler: "Geen gok — sterk bewezen verklaring. A.", nogSimpeler: "Onderbouwd = A." },
        },
      },
      {
        q: "**Kunstmatige selectie** door mens (zoals honden-fokken):",
        options: [
          "Vergelijkbaar mechanisme, mens kiest in plaats van omgeving",
          "Werkt niet",
          "Maakt nieuwe genen",
          "Verbiedt evolutie"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — sorteert bestaande.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Sleutel voor Darwin", tekst: "Mens fokt honden, koeien, mais. In 15 000 jaar van wolf naar chihuahua + Duitse herder + Bulldog. Darwin: 'als mens dit in eeuwen kan, kan natuur in miljoenen jaren veel meer'. Crucial inzicht voor publicatie 'Origin of Species'." },
          ],
          niveaus: { basis: "Mens als selectie-druk. A.", simpeler: "Mens kiest wie reproduceert. A.", nogSimpeler: "Mens-selectie = A." },
        },
      },
      {
        q: "Volgens **2e thermodynamica-wet**: entropie neemt toe in gesloten systeem. Argument 'dit verbiedt evolutie' is:",
        options: [
          "Onjuist — aarde is OPEN systeem (zon-energie), 2e wet niet van toepassing op subsystemen",
          "Correct — evolutie verbroken",
          "Niet relevant",
          "Bewijst evolutie"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel relevant om te weerleggen.", "Niet direct bewijs."],
        uitlegPad: {
          stappen: [
            { titel: "Open systeem-clausule", tekst: "2e wet: in **gesloten** systeem (geen energie-uitwisseling) entropie altijd toe. Aarde is NIET gesloten — krijgt ~10¹⁷ J/s zon-energie. Lokale organisatie (leven, sneeuwvlokken, kristallen) kan ontstaan zolang elders entropie toeneemt (warmte naar ruimte). Geen tegenspraak met evolutie." },
          ],
          niveaus: { basis: "Aarde is open. A.", simpeler: "Zon levert energie, dus geen probleem. A.", nogSimpeler: "Open = A." },
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
