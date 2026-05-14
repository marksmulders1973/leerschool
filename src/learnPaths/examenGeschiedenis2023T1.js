// Leerpad: Examen-oefenpad Geschiedenis & staatsinrichting VMBO-GL/TL 2023 tijdvak 1
// 2026-05-14. Bron: examenblad.nl GT-0125-a-23-1.
// 5 MC-vragen geselecteerd uit 9 (bron-afhankelijke vragen geskipt).

const chapters = [
  { letter: "A", title: "1848 + verzuiling (V1, V6, V7)", emoji: "👑", from: 0, to: 2 },
  { letter: "B", title: "20e eeuw (V42, V45)", emoji: "🌍", from: 3, to: 4 },
];

const PDF_LINK = "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0125-a-23-1-o.pdf";
const BRON = (v) => `🎓 Echt examen VMBO-GL/TL Geschiedenis 2023 tijdvak 1, vraag ${v}`;
const LEERPAD_STAAT = { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat" };

const steps = [
  {
    title: "Vraag 1 — Koning Willem II en de Grondwet van 1848",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2023 tijdvak 1, vraag 1.",
    emoji: "🎓",
    checks: [
      {
        q: "Koning Willem II liet in 1848 een levensgroot schilderij van zichzelf in de Eerste Kamer ophangen. Dat was niet toevallig — kort daarna kwam de nieuwe Grondwet. Wat veranderde er voor de koning door deze nieuwe Grondwet?",
        options: [
          "Hij mocht alleen nog maar Tweede Kamerleden benoemen.",
          "Hij verloor veel politieke macht.",
          "Hij was geen voorzitter meer van de Eerste Kamer.",
          "Hij werd lid van het parlement.",
        ],
        answer: 1,
        wrongHints: [
          "Kamerleden worden GEKOZEN, niet door koning benoemd. Vóór 1848 noch erna door koning benoemd.",
          null,
          "Voorzitter Eerste Kamer is een Kamerlid — de koning was dat nooit.",
          "De koning is GEEN Kamerlid en is dat ook niet geworden in 1848 (kreeg juist ceremoniële rol).",
        ],
        explanation: "Vóór 1848 had de koning veel politieke macht: benoemde ministers, kon wetten weigeren. Met **Grondwet 1848 (Thorbecke)** werd de koning onschendbaar én verloor hij politieke macht. Ministers werden verantwoordelijk aan parlement. Koning kreeg ceremoniële + symbolische rol. NL = constitutionele monarchie.",
        examenBron: BRON(1),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD_STAAT,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "constitutionele monarchie + ministeriele verantwoordelijkheid" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Waarom 1848?", tekst: "Revolutiejaar in heel Europa (1848). Willem II — bang voor zelfde lot als de gevallen Franse koning — werd 'in één nacht van conservatief naar liberaal'. Liet Thorbecke een nieuwe Grondwet schrijven." },
            { titel: "Wat veranderde", tekst: "• Koning onschendbaar (geen politiek meer)\n• Ministers verantwoordelijk aan parlement\n• Tweede Kamer rechtstreeks gekozen\n• Vrijheid van vereniging, drukpers, godsdienst (langzaam ingevoerd)\n→ Begin moderne democratie NL." },
          ],
          woorden: [
            { woord: "constitutionele monarchie", uitleg: "Koning + grondwet beperken zijn macht." },
            { woord: "Thorbecke", uitleg: "Liberaal staatsman, schreef Grondwet 1848." },
            { woord: "ministeriële verantwoordelijkheid", uitleg: "Ministers verantwoorden aan parlement, niet aan koning." },
          ],
          theorie: "1848 = scheidslijn: voor → absolute koning. Na → koning ceremonieel + parlement politiek.",
          voorbeelden: [{ type: "stap", tekst: "Willem II's portret in de Eerste Kamer was bijna afscheid — kort daarna verloor hij grootste deel macht. Symbolisch + tragisch tegelijk." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "1848 = koning verliest macht. Onthoud dat jaartal!" }],
          niveaus: {
            basis: "Veel politieke macht verloren. Antwoord B.",
            simpeler: "Vóór 1848 was de koning bijna alleenheerser. Na 1848 = ceremoniële rol + parlement neemt over. Antwoord B.",
            nogSimpeler: "Macht verloren = B.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 6 — Wie stichtte de ARP?",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2023 tijdvak 1, vraag 6.",
    emoji: "🎓",
    checks: [
      {
        q: "In de late 19e eeuw werd een onderwijswet ingevoerd waar protestants-christelijke ouders ongelukkig mee waren. Naar aanleiding daarvan richtte Abraham Kuyper een politieke partij op. Welke partij was dat?",
        options: ["ARP", "Liberale Unie", "RKSP", "SDAP"],
        answer: 0,
        wrongHints: [
          null,
          "Liberale Unie = liberale partij (Thorbecke-richting). Geen confessioneel-protestants.",
          "RKSP = Rooms-Katholieke Staatspartij. Kuyper was juist anti-katholiek (protestants).",
          "SDAP = sociaaldemocraten (arbeiders). Geheel andere richting + later (1894).",
        ],
        explanation: "**ARP** = Anti-Revolutionaire Partij, in 1879 opgericht door **Abraham Kuyper**. 'Anti-revolutionair' = tegen de Franse Revolutie-idealen (zonder God, secularisme). Protestants-christelijke partij. Streed voor gelijke financiering van bijzonder onderwijs. Wordt later (1980) onderdeel van het CDA samen met KVP + CHU.",
        examenBron: BRON(6),
        bronLink: PDF_LINK,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "verzuiling + politieke stromingen NL" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Schoolstrijd", tekst: "**Schoolstrijd** = conflict 1850-1917 over financiering: openbaar onderwijs werd door staat betaald, bijzonder (protestants/katholiek) onderwijs NIET. Confessionelen vonden dat oneerlijk. Strijden zorgde voor verzuiling." },
            { titel: "Wie was Kuyper?", tekst: "**Abraham Kuyper** (1837-1920) = predikant + journalist + politicus. Stichtte ARP (1879), de Vrije Universiteit (1880) + Gereformeerde Kerken (1892). Premier 1901-1905. Centrale figuur van protestantse zuil." },
          ],
          woorden: [
            { woord: "ARP", uitleg: "Anti-Revolutionaire Partij — protestants-christelijk." },
            { woord: "Abraham Kuyper", uitleg: "Stichter ARP + VU + leider protestantse zuil." },
            { woord: "verzuiling", uitleg: "NL-samenleving verdeeld in zuilen (protestants/katholiek/liberaal/socialistisch) tot ~1960." },
          ],
          theorie: "ARP (protestant) + KVP (katholiek) + CHU (protestant, gematigder) → 1980 → CDA. Onthoud die fusie.",
          voorbeelden: [{ type: "stap", tekst: "1917 Pacificatie: tegelijk algemeen kiesrecht (mannen) + gelijke financiering bijzonder onderwijs. Eindpunt schoolstrijd + grote NL-mijlpaal." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Anti-revolutionair = tegen Franse Revolutie-idealen = vóór christelijke waarden." }],
          niveaus: {
            basis: "ARP. Antwoord A.",
            simpeler: "Abraham Kuyper stichtte de Anti-Revolutionaire Partij (ARP, 1879) — protestants-christelijk. Antwoord A.",
            nogSimpeler: "ARP = A.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 7 — Wanneer werd de schoolstrijd opgelost?",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2023 tijdvak 1, vraag 7.",
    emoji: "🎓",
    checks: [
      {
        q: "De ongelijke financiële behandeling tussen het openbaar en bijzonder onderwijs (de 'schoolstrijd') werd uiteindelijk opgelost. Wanneer en hoe gebeurde dat?",
        options: [
          "in 1887, door de invoering van het Caoutchouc-artikel",
          "in 1887, door de Pacificatie",
          "in 1917, door de invoering van het Caoutchouc-artikel",
          "in 1917, door de Pacificatie",
        ],
        answer: 3,
        wrongHints: [
          "1887 + Caoutchouc-artikel = grondwetswijziging die kiesrecht uitbreidde (\"Caoutchouc\" = \"rubber\" = flexibel). NIET de schoolstrijd-oplossing.",
          "1887 = te vroeg en Pacificatie was in 1917 (niet 1887).",
          "1917 jaar klopt, maar Caoutchouc-artikel ging over KIESRECHT (1887), niet schoolstrijd.",
          null,
        ],
        explanation: "**Pacificatie van 1917** = grote nationale compromis tussen liberalen, socialisten en confessionelen. Twee zaken tegelijk geregeld: (1) **algemeen mannenkiesrecht** (liberalen + socialisten kregen wat ze wilden) (2) **gelijke financiering bijzonder onderwijs** (confessionelen kregen hun zin). Vrouwenkiesrecht volgde in 1919.",
        examenBron: BRON(7),
        bronLink: PDF_LINK,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "verzuiling + Pacificatie + onderwijswet" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een 'pacificatie'?", tekst: "Pacificatie = vrede-sluiting tussen partijen. **1917**: liberalen + socialisten + confessionelen sluiten compromis. Beide kanten krijgen wat ze willen — basis van NL-overlegcultuur." },
            { titel: "Twee dingen geregeld", tekst: "1. **Algemeen kiesrecht** (mannen) — liberalen + socialisten kregen wat ze wilden.\n2. **Gelijke financiering bijzonder onderwijs** — confessionelen (ARP, RKSP, CHU) kregen hun zin.\nWin-win-compromis = pacificatie." },
            { titel: "Caoutchouc-artikel = iets anders", tekst: "1887 grondwetswijziging waarbij kiesrecht 'rubber'-achtig flexibel werd — uitbreiding van het censuskiesrecht, maar geen algemeen kiesrecht (dat kwam pas 1917)." },
          ],
          woorden: [
            { woord: "Pacificatie 1917", uitleg: "Compromis: kiesrecht + onderwijsfinanciering geregeld." },
            { woord: "Caoutchouc-artikel", uitleg: "1887 — flexibele uitbreiding van het kiesrecht (geen algemeen)." },
            { woord: "bijzonder onderwijs", uitleg: "Religieus onderwijs (protestants/katholiek) — sinds 1917 gelijk gefinancierd." },
          ],
          theorie: "Onthoud: 1887 = Caoutchouc (kiesrecht-uitbreiding). 1917 = Pacificatie (kiesrecht-MANNEN + schoolstrijd). 1919 = vrouwenkiesrecht.",
          voorbeelden: [{ type: "stap", tekst: "Sinds Pacificatie 1917 bestaan in NL twee soorten gesubsidieerde basisscholen: openbaar + bijzonder (religieus of pedagogische richting). Allebei door overheid betaald." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "1917 = Pacificatie = kiesrecht + onderwijs geregeld." }],
          niveaus: {
            basis: "1917, Pacificatie. Antwoord D.",
            simpeler: "Schoolstrijd opgelost via compromis in 1917 = de Pacificatie. Antwoord D.",
            nogSimpeler: "1917 + Pacificatie = D.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 42 — Welke VS-president?",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2023 tijdvak 1, vraag 42.",
    emoji: "🎓",
    checks: [
      {
        q: "Een Amerikaanse president was sterk anti-communistisch, voerde de wapenwedloop op tegen de Sovjet-Unie en sprak van het 'evil empire'. Onder zijn presidentschap ging de Sovjet-Unie uiteindelijk failliet. Wie was deze president?",
        options: ["Kennedy", "Reagan", "Roosevelt", "Wilson"],
        answer: 1,
        wrongHints: [
          "Kennedy = jaren '60 (Cubacrisis). Was anti-communistisch maar veel eerder + ging om koe dilemma's, niet wapenwedloop.",
          null,
          "Roosevelt = WO2-president (1933-45). Werkte juist SAMEN met USSR tegen nazi-Duitsland.",
          "Wilson = WO1-president (1913-21). Veel te vroeg voor de Sovjet-context.",
        ],
        explanation: "**Ronald Reagan** (1981-1989) = sterk anti-communistisch. Sprak van USSR als 'evil empire' (1983). Voerde wapenwedloop op (SDI 'Star Wars'-raketverdediging) → USSR kon dit economisch niet bijhouden → economische ineenstorting. Onderhandelde later wel met Gorbatsjov (vermindering kernwapens). Onder zijn opvolger Bush sr. viel USSR (1991).",
        examenBron: BRON(42),
        bronLink: PDF_LINK,
        leerpadLink: { id: "koude-oorlog-modern-po", title: "Koude Oorlog + modern" },
        voorkennisKeten: [
          { id: "koude-oorlog-modern-po", title: "Koude Oorlog + modern", niveau: "po-1F", why: "VS-presidenten Koude Oorlog + val USSR" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "4 VS-presidenten kort", tekst: "**Wilson** (1913-21): WO1 + Volkenbond.\n**Roosevelt** (1933-45): New Deal + WO2.\n**Kennedy** (1961-63): Cubacrisis + Vietnam-begin.\n**Reagan** (1981-89): anti-communistisch + wapenwedloop." },
            { titel: "Reagans rol bij val USSR", tekst: "Wapenwedloop opdrijven → USSR economisch onder druk. 'Evil empire'-speech 1983 — geen verzoening. Later wel onderhandeld met Gorbatsjov over kernwapen-reductie. USSR viel in 1991 (na Reagan, onder Bush sr.) maar zijn beleid wordt vaak als trigger gezien." },
          ],
          woorden: [
            { woord: "Reagan", uitleg: "VS-president 1981-89. Anti-communistisch. Wapenwedloop." },
            { woord: "wapenwedloop", uitleg: "Beide kampen bouwen steeds meer wapens." },
            { woord: "evil empire", uitleg: "Reagans benaming voor USSR." },
          ],
          theorie: "Onthoud: Koude Oorlog-eindspel = Reagan + Gorbatsjov. USSR viel 1991.",
          voorbeelden: [{ type: "stap", tekst: "Reagan's beroemde uitspraak in Berlijn (1987): 'Mr. Gorbachev, tear down this wall!' Muur viel 2 jaar later (1989)." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Reagan = jaren '80 + anti-communistisch + 'evil empire'." }],
          niveaus: {
            basis: "Reagan. Antwoord B.",
            simpeler: "VS-president die USSR 'evil empire' noemde + wapenwedloop opdreef = Reagan (jaren '80). Antwoord B.",
            nogSimpeler: "Reagan = B.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 45 — Populisme na 2001",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2023 tijdvak 1, vraag 45.",
    emoji: "🎓",
    checks: [
      {
        q: "Iemand heeft kritiek op een aantal Nederlandse politieke partijen die na 2001 zijn opgericht, zoals de LPF (Pim Fortuyn) en de PVV (Geert Wilders). Tot welke politieke stroming worden deze partijen gerekend?",
        options: [
          "tot het confessionalisme",
          "tot het liberalisme",
          "tot het populisme",
          "tot het socialisme",
        ],
        answer: 2,
        wrongHints: [
          "Confessionalisme = christelijke partijen (CDA, SGP, CU). Geen LPF/PVV-stijl.",
          "Liberalisme = VVD, D66 (klassieke). LPF/PVV onderscheiden zich juist daarvan.",
          null,
          "Socialisme = SP, PvdA. Linksere stroming, niet LPF/PVV.",
        ],
        explanation: "**Populisme** = politieke stroming die zichzelf als 'stem van het volk' presenteert tegen de 'elite' (politici, media, EU). Vaak: simpele oplossingen, sterke leider, focus op 1-2 thema's (vaak immigratie, EU). LPF (2002), PVV (2006), FvD (2016), BBB (2019) — allemaal NL-populistische partijen, elk met eigen accent. Term is descriptief, niet alleen kritisch.",
        examenBron: BRON(45),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD_STAAT,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "politieke stromingen NL" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is populisme?", tekst: "**Populisme** = stelt 'volk' tegenover 'elite'. Vaak met sterke leider die zegt 'iedereen' te begrijpen. Simpele oplossingen voor ingewikkelde problemen. Wij/zij-denken (volk tegen elite, NL tegen buitenland, etc.)." },
            { titel: "NL populistische partijen", tekst: "**LPF** (2002, Pim Fortuyn) — eerste grote NL-populist. Vermoord vóór verkiezingen, partij won 26 zetels.\n**PVV** (2006, Geert Wilders) — focus immigratie + EU. Won grote verkiezingen 2023 (37 zetels).\n**FvD** (2016, Thierry Baudet) — populistisch + complot-affiniteit.\n**BBB** (2019, Caroline van der Plas) — boeren-populisme tegen stikstof-aanpak." },
            { titel: "Niet alleen NL", tekst: "Populisme is wereldwijd: Trump (VS), Le Pen (Frankrijk), Orbán (Hongarije), Milei (Argentinië). Heeft veel verschijningsvormen — links + rechts." },
          ],
          woorden: [
            { woord: "populisme", uitleg: "Politieke stijl: 'volk' tegen 'elite' + simpele boodschap." },
            { woord: "LPF", uitleg: "Lijst Pim Fortuyn — 2002. Eerste grote NL-populist." },
            { woord: "PVV", uitleg: "Partij voor de Vrijheid — Geert Wilders. Opgericht 2006." },
          ],
          theorie: "Onthoud kenmerken populisme:\n• Volk vs elite\n• Simpele oplossingen\n• Sterke leider\n• Focus op enkele kernthema's",
          voorbeelden: [{ type: "stap", tekst: "PVV-thema's: minder immigratie, minder Europa, meer geld voor zorg + lagere belasting. Klassiek populistisch programma." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Populisme = pop(ulair) → ulus → volk-gericht." }],
          niveaus: {
            basis: "Populisme. Antwoord C.",
            simpeler: "LPF, PVV, FvD, BBB = partijen die zich opwerpen als 'stem van het volk' tegenover de 'elite' = populistische stroming. Antwoord C.",
            nogSimpeler: "Volk vs elite = populisme = C.",
          },
        },
      },
    ],
  },
];

const examenGeschiedenis2023T1 = {
  id: "examen-geschiedenis-2023-t1",
  title: "Examen oefenen — Geschiedenis 2023 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "geschiedenis",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Geschiedenis - eindexamen oefenen 2023-T1",
  intro:
    "5 echte examenvragen uit het VMBO-GL/TL geschiedenis-examen 2023 tijdvak 1 (examen-id GT-0125-a-23-1). Bron-afhankelijke kaart/tekening-vragen geskipt. Per vraag: officiële antwoorden + uitleg + doorklik naar bestaande paden.",
  triggerKeywords: [
    "examen geschiedenis 2023", "willem ii grondwet 1848",
    "abraham kuyper arp", "pacificatie 1917 schoolstrijd",
    "reagan koude oorlog", "populisme lpf pvv",
  ],
  chapters,
  steps,
};

export default examenGeschiedenis2023T1;
