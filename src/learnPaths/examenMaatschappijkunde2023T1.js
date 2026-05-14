// Leerpad: Examen-oefenpad Maatschappijkunde VMBO-GL/TL 2023 tijdvak 1
// 2026-05-14. Bron: examenblad.nl GT-1127-a-23-1.
// 5 MC-vragen geselecteerd uit 15 (zelfstandig + linkt aan staat-pad).

const chapters = [
  { letter: "A", title: "EU + bestuurslagen (V4, V11, V14)", emoji: "🏛️", from: 0, to: 2 },
  { letter: "B", title: "Criminaliteit + recht (V23, V26)", emoji: "⚖️", from: 3, to: 4 },
];

const PDF_LINK = "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-1127-a-23-1-o.pdf";
const BRON_LABEL = (v) => `🎓 Echt examen VMBO-GL/TL Maatschappijkunde 2023 tijdvak 1, vraag ${v}`;
const LEERPAD = { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat" };

const steps = [
  {
    title: "Vraag 4 — Welke EU-instelling bespreekt crises?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2023 tijdvak 1, vraag 4.",
    emoji: "🎓",
    checks: [
      {
        q: "Welke Europese instelling komt bijeen om internationale politieke crises (zoals de situatie in Belarus) te bespreken?",
        options: [
          "de Europese Commissie",
          "de Europese Raad",
          "de Raad van de Europese Unie",
          "het Europees Parlement",
        ],
        answer: 1,
        wrongHints: [
          "Europese Commissie = dagelijks bestuur (uitvoeren wetten, toezicht op lidstaten). Geen crisis-overleg.",
          null,
          "Raad van de EU = ministers stemmen over wetten — specifiek beleidsterrein. Niet voor brede politieke crises.",
          "Europees Parlement = wetgevende rol (samen met Raad). Crises worden niet hier hoofdzakelijk besproken.",
        ],
        explanation: "De **Europese Raad** = 27 regeringsleiders (premiers/presidenten) + vaste voorzitter. Komen ~4x per jaar samen + bij crises. Bepalen de strategische lijn van de EU + bespreken brede politieke onderwerpen (zoals Belarus-situatie, Oekraïne-oorlog, energie).",
        examenBron: BRON_LABEL(4),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "EU-instellingen + hun rollen" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Verwar de drie 'Raden' niet", tekst: "**Europese Raad** = 27 regeringsleiders bij elkaar. Politieke top.\n**Raad van de Europese Unie** = ministers per onderwerp (1 land per minister). Stemmen over wetten.\n**Raad van Europa** = aparte organisatie (47 landen!) over mensenrechten. Heeft NIETS met EU te maken." },
            { titel: "Wat doet Europese Raad?", tekst: "Strategische beslissingen, crisis-overleg, benoemingen van topfuncties. Bij crisis in een naburig land (Belarus, Oekraïne): regeringsleiders bespreken samen wat de EU moet doen." },
          ],
          woorden: [
            { woord: "Europese Raad", uitleg: "27 regeringsleiders — strategie + crisis-overleg." },
            { woord: "Europese Commissie", uitleg: "Dagelijks bestuur — toezicht + wetsvoorstellen." },
          ],
          theorie: "Onthoud:\n• Crisis/politiek topoverleg → Europese Raad\n• Toezicht + uitvoer → Europese Commissie\n• Wetten stemmen → Raad van EU + Parlement",
          voorbeelden: [{ type: "stap", tekst: "Bij Russische invasie Oekraïne (2022) kwam Europese Raad meermaals bijeen voor sancties-besluiten." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Regeringsleiders → Europese Raad. Ministers → Raad van EU." }],
          niveaus: {
            basis: "Europese Raad. Antwoord B.",
            simpeler: "Brede politieke crises worden besproken door de regeringsleiders = Europese Raad. Antwoord B.",
            nogSimpeler: "Regeringsleiders = B.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 11 — Welk kenmerk van Nederland?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2023 tijdvak 1, vraag 11.",
    emoji: "🎓",
    checks: [
      {
        q: "De Amsterdamse gemeente heeft besloten extra jongerencentra te bouwen om jongeren te ondersteunen. Bij welk kenmerk van Nederland past dit besluit het beste?",
        options: [
          "een constitutionele monarchie is",
          "een staat is met drie bestuurslagen",
          "een verzorgingsstaat is",
          "lid is van de Europese Unie",
        ],
        answer: 2,
        wrongHints: [
          "Constitutionele monarchie = koning + grondwet. Heeft niets met sociale voorzieningen te maken.",
          "Drie bestuurslagen = rijk/provincie/gemeente. Verklaart WIE besluit, niet WAAROM.",
          null,
          "EU-lidmaatschap = handel + open grenzen + euro. Geen direct verband met jongerenwerk.",
        ],
        explanation: "**Verzorgingsstaat** = de overheid neemt verantwoordelijkheid voor het welzijn van burgers (onderwijs, zorg, jongerenwerk, uitkeringen). Jongerencentra bouwen om jongeren te ondersteunen past precies in dit kenmerk. NL is sterk uitgebouwde verzorgingsstaat (sinds Drees, jaren '50/60).",
        examenBron: BRON_LABEL(11),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "kenmerken NL + verzorgingsstaat" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "4 kenmerken van NL als staat", tekst: "1. **Constitutionele monarchie** — koning met grondwet (geen absoluut vorst).\n2. **Drie bestuurslagen** — rijk, provincie, gemeente.\n3. **Verzorgingsstaat** — overheid zorgt voor welzijn burgers (onderwijs, zorg, uitkeringen).\n4. **EU-lidstaat** — onderdeel van de EU sinds 1957." },
            { titel: "Verzorgingsstaat-uitingen", tekst: "AOW, kinderbijslag, bijstand, onderwijs gratis tot 18, zorgverzekering, jongerenwerk, ouderenzorg. Alles uit publieke kas + belastingen." },
          ],
          woorden: [
            { woord: "verzorgingsstaat", uitleg: "Staat die voor welzijn burgers zorgt (onderwijs, zorg, uitkeringen)." },
            { woord: "constitutionele monarchie", uitleg: "Koning + grondwet beperken zijn macht." },
          ],
          theorie: "Onthoud: voorzieningen door overheid (zoals jongerencentra) = uiting van VERZORGINGSstaat.",
          voorbeelden: [{ type: "stap", tekst: "Sociale werkplaats voor mensen met beperking = verzorgingsstaat. Koning op Prinsjesdag = constitutionele monarchie." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Overheid zorgt = verzorgingsstaat." }],
          niveaus: {
            basis: "Verzorgingsstaat. Antwoord C.",
            simpeler: "Overheid die actief jongeren ondersteunt met centra = uiting van een verzorgingsstaat. Antwoord C.",
            nogSimpeler: "Overheid zorgt = C.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 14 — Beleidsambtenaren in welke fase?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2023 tijdvak 1, vraag 14.",
    emoji: "🎓",
    checks: [
      {
        q: "Welke uitspraak over beleidsambtenaren in de politieke besluitvorming klopt?",
        options: [
          "Beleidsambtenaren spelen een rol tijdens de beleidsvoorbereiding.",
          "Beleidsambtenaren vertegenwoordigen de burgers van Nederland.",
          "Beleidsambtenaren zijn in dienst van politieke partijen.",
          "Beleidsambtenaren zijn verantwoordelijk voor de uitvoering van het overheidsbeleid.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Burgers worden vertegenwoordigd door GEKOZEN Kamerleden, niet door ambtenaren (die zijn niet gekozen).",
          "Ambtenaren werken voor de OVERHEID, niet voor politieke partijen.",
          "Uitvoering van beleid doen verschillende uitvoeringsorganisaties (politie, Belastingdienst, gemeentes). Beleidsambtenaren BEREIDEN voor.",
        ],
        explanation: "**Beleidsambtenaren** werken op ministeries en bereiden wetten + beleid VOOR (analyse, schrijven, advies aan ministers). Dat is fase 2: beleidsvoorbereiding. Ze besluiten niet zelf — dat doen ministers + parlement (fase 3) — en voeren ook niet uit (fase 4).",
        examenBron: BRON_LABEL(14),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "politieke besluitvormingsfasen + rol ambtenaren" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat doen ambtenaren?", tekst: "**Beleidsambtenaren** (op ministerie):\n• Analyseren problemen.\n• Schrijven wetsvoorstellen.\n• Adviseren ministers.\n• Doen onderzoek.\n→ Fase 2 = beleidsvoorbereiding." },
            { titel: "Wat doen ze NIET?", tekst: "Ze stemmen NIET (geen volksvertegenwoordigers).\nZe besluiten NIET (geen ministers).\nZe voeren NIET zelf uit (zijn niet de politie/Belastingdienst).\nZe zijn NIET in dienst van partijen (= politiek neutraal)." },
          ],
          woorden: [
            { woord: "beleidsambtenaar", uitleg: "Werknemer ministerie — bereidt beleid voor." },
            { woord: "beleidsvoorbereiding", uitleg: "Fase 2 — ambtenaren werken voorstellen uit." },
          ],
          theorie: "**Ambtenaar versus politicus**:\n• Ambtenaar = niet-gekozen, vast in dienst, politiek neutraal, bereidt voor.\n• Politicus (Kamerlid/minister) = gekozen of benoemd, partij-gebonden, besluit + verantwoordt.",
          voorbeelden: [{ type: "stap", tekst: "Klimaatminister wil nieuwe wet → beleidsambtenaren schrijven concept-wet + onderzoeken effecten → minister presenteert in 2e Kamer → Kamer stemt." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Ambtenaren bereiden voor (fase 2). Andere fases zijn voor politici + uitvoerders." }],
          niveaus: {
            basis: "Beleidsvoorbereiding. Antwoord A.",
            simpeler: "Beleidsambtenaren op ministeries werken wetsvoorstellen uit = fase 2 = beleidsvoorbereiding. Antwoord A.",
            nogSimpeler: "Voorbereiden = A.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 23 — Welke politieke stroming bij criminaliteit?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2023 tijdvak 1, vraag 23.",
    emoji: "🎓",
    checks: [
      {
        q: "Een politieke stroming vindt dat de overheid de hoofdoorzaken van criminaliteit (armoede, kansenongelijkheid) moet aanpakken — niet alleen strenger straffen. Bij welke stroming past dit?",
        options: [
          "de ecologische stroming",
          "de liberale stroming",
          "de sociaaldemocratische stroming",
        ],
        answer: 2,
        wrongHints: [
          "Ecologische stroming = focus op milieu + duurzaamheid. Geen specifiek criminaliteit-standpunt over armoede.",
          "Liberale stroming = focus op individuele vrijheid + eigen verantwoordelijkheid + strenger straffen. Tegenovergesteld.",
          null,
        ],
        explanation: "**Sociaaldemocraten** (PvdA, GL-PvdA, etc.) zien sociale oorzaken (armoede, kansenongelijkheid, slechte buurten) als belangrijke verklaring voor criminaliteit. Beleidsadvies: investeer in onderwijs, werk, sociale zekerheid → criminaliteit zakt. **Liberalen** (VVD) leggen meer nadruk op individuele verantwoordelijkheid + harder straffen.",
        examenBron: BRON_LABEL(23),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "politieke stromingen + criminaliteit-aanpak" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Politieke stromingen + criminaliteit", tekst: "**Liberalen** (VVD): individu verantwoordelijk, harder straffen.\n**Sociaaldemocraten** (PvdA, GL-PvdA): sociale oorzaken aanpakken (armoede, kansen, onderwijs).\n**Christendemocraten** (CDA): tussenpositie + naastenliefde + waarden.\n**Ecologisch** (GroenLinks-deel): milieu + sociaal samen — overlap met sociaaldemocraten." },
            { titel: "Achtergrond sociaaldemocratie", tekst: "Sociaaldemocraten geloven dat veel mensen niet uit vrije keuze crimineel worden, maar door omstandigheden (slechte buurt, geen werk, schulden). Daarom: investeer eerst in betere omstandigheden, dan zakt misdaad vanzelf." },
          ],
          woorden: [
            { woord: "sociaaldemocratie", uitleg: "Stroming die overheid een actieve rol geeft in herverdeling + sociale zekerheid." },
            { woord: "liberalisme", uitleg: "Stroming met focus op individuele vrijheid + kleine overheid." },
          ],
          theorie: "Onthoud: criminaliteit door OMSTANDIGHEDEN → sociaaldemocraten. Criminaliteit door INDIVIDU + harder straffen → liberalen.",
          voorbeelden: [{ type: "stap", tekst: "GroenLinks-PvdA pleit voor meer geld naar buurthuizen, schoolzwemmen, etc. om criminaliteit aan te pakken bij de wortel = sociaaldemocratisch denken." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Armoede aanpakken = sociaal = sociaaldemocraten." }],
          niveaus: {
            basis: "Sociaaldemocratische stroming. Antwoord C.",
            simpeler: "Sociale oorzaken van criminaliteit aanpakken = sociaaldemocratisch denken (PvdA-stijl). Antwoord C.",
            nogSimpeler: "Sociale oorzaken = sociaaldemocratie = C.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 26 — Welke criminaliteitstheorie?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2023 tijdvak 1, vraag 26.",
    emoji: "🎓",
    checks: [
      {
        q: "Sommige mensen worden door familie + vrienden + school + werk sterk geremd om criminaliteit te plegen. Anderen missen die sterke banden en plegen vaker misdaden. Welke theorie verklaart hiermee criminaliteit?",
        options: [
          "de anomietheorie",
          "de bindingstheorie",
          "de etikettentheorie",
          "de neutraliseringstheorie",
        ],
        answer: 1,
        wrongHints: [
          "Anomietheorie = criminaliteit door spanning tussen doelen + middelen (Merton). Niet hetzelfde als 'banden'.",
          null,
          "Etikettentheorie = mensen worden crimineel doordat ze 'gestigmatiseerd' worden door samenleving. Andere richting.",
          "Neutraliseringstheorie = daders praten hun gedrag goed ('iedereen doet het'). Niet over banden.",
        ],
        explanation: "**Bindingstheorie** (Hirschi) = mensen plegen MINDER criminaliteit naarmate ze sterkere banden hebben met familie, vrienden, school, werk en samenleving. Wie zulke banden mist = grotere kans op afglijden. Verklaring: 'Iemand met veel te verliezen pleegt minder snel misdaad.'",
        examenBron: BRON_LABEL(26),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "criminaliteitstheorieën" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "4 theorieën over crimineel gedrag", tekst: "**Anomietheorie** (Merton) — spanning tussen wat samenleving WIL (rijkdom) + wat mogelijk is via legale weg → criminaliteit als 'alternatief pad'.\n**Bindingstheorie** (Hirschi) — sterke banden remmen, zwakke banden faciliteren.\n**Etikettentheorie** — door stigma 'crimineel' word je het ook.\n**Neutraliseringstheorie** — daders praten gedrag goed." },
            { titel: "Bindingstheorie in detail", tekst: "Sterke binding aan:\n• Ouders (regels respecteren)\n• School (toekomst zien)\n• Vrienden (positief)\n• Werk (te verliezen)\n• Maatschappij (deel uitmaken)\n→ Minder criminaliteit. Geen bindingen → meer risico." },
          ],
          woorden: [
            { woord: "bindingstheorie", uitleg: "Theorie: zwakke sociale banden → meer criminaliteit." },
            { woord: "anomie", uitleg: "Spanning tussen doelen en middelen — Mertons theorie." },
            { woord: "etikettering", uitleg: "Mensen krijgen label 'crimineel' → identificeren ermee." },
          ],
          theorie: "Onthoud trefwoorden:\n• Anomie → DOELEN-MIDDELEN spanning\n• Binding → SOCIALE BANDEN\n• Etikettering → LABELING\n• Neutralisering → GOEDPRATEN",
          voorbeelden: [{ type: "stap", tekst: "Jongen zonder familie, geen werk, geen vrienden = weinig binding = volgens Hirschi hoger risico. Met goede school + vrienden + sport-club = sterke binding = lager risico." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Sociale BANDEN → BINDINGstheorie." }],
          niveaus: {
            basis: "Bindingstheorie. Antwoord B.",
            simpeler: "Sterke banden (familie/school/werk) remmen criminaliteit = bindingstheorie van Hirschi. Antwoord B.",
            nogSimpeler: "Banden = binding = B.",
          },
        },
      },
    ],
  },
];

const examenMaatschappijkunde2023T1 = {
  id: "examen-maatschappijkunde-2023-t1",
  title: "Examen oefenen — Maatschappijkunde 2023 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "maatschappijleer",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Maatschappijkunde - eindexamen oefenen 2023-T1",
  intro:
    "5 echte examenvragen uit het VMBO-GL/TL maatschappijkunde-examen 2023 tijdvak 1 (examen-id GT-1127-a-23-1). Per vraag officiële antwoorden, denkprikkel-hints en inhoudelijke uitleg. Doorklik naar 'De Nederlandse staat'.",
  triggerKeywords: [
    "examen maatschappijkunde 2023", "echte examenvragen maatschappij",
    "europese raad crisis", "verzorgingsstaat jongerencentra",
    "beleidsambtenaren voorbereiding", "sociaaldemocratie criminaliteit",
    "bindingstheorie hirschi", "anomietheorie etikettentheorie",
  ],
  chapters,
  steps,
};

export default examenMaatschappijkunde2023T1;
