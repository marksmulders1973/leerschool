// Leerpad: Examen-oefenpad Maatschappijkunde VMBO-GL/TL 2024 tijdvak 2
// 2026-05-14. Bron: examenblad.nl GT-1127-a-24-2.
// 5 MC-vragen geselecteerd uit 15 (zelfstandig + linkt aan staat-pad).

const chapters = [
  { letter: "A", title: "Politieke besluitvorming (V5, V10)", emoji: "🗳️", from: 0, to: 1 },
  { letter: "B", title: "Lokaal bestuur (V17)", emoji: "🏛️", from: 2, to: 2 },
  { letter: "C", title: "Strafrecht (V26, V27)", emoji: "⚖️", from: 3, to: 4 },
];

const PDF_LINK = "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-1127-a-24-2-o-spr.pdf";
const BRON_LABEL = (v) => `🎓 Echt examen VMBO-GL/TL Maatschappijkunde 2024 tijdvak 2, vraag ${v}`;
const LEERPAD = { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat" };

const steps = [
  {
    title: "Vraag 5 — Welke fase politieke besluitvorming?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2024 tijdvak 2, vraag 5.",
    emoji: "🎓",
    checks: [
      {
        q: "Bij een nieuwe wet over abortus heeft het parlement gestemd en de wet aangenomen. Welke fase van politieke besluitvorming is net afgerond?",
        options: [
          "fase 1: agendavorming",
          "fase 2: beleidsvoorbereiding",
          "fase 3: beleidsbepaling",
          "fase 4: beleidsuitvoering",
        ],
        answer: 2,
        wrongHints: [
          "Agendavorming = onderwerp KOMT op de politieke agenda (kranten, protesten). Veel eerder.",
          "Beleidsvoorbereiding = ambtenaren + ministers schrijven voorstellen. Voor het stemmen.",
          null,
          "Beleidsuitvoering = na aanname → wet wordt uitgevoerd. Pas hierna.",
        ],
        explanation: "**Beleidsbepaling** = het MOMENT waarop het parlement stemt en de wet officieel besluit. De 4 fasen op rij: agendavorming → voorbereiding → bepaling (stemming) → uitvoering.",
        examenBron: BRON_LABEL(5),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "politieke besluitvormingsfasen — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "4 fasen van politieke besluitvorming", tekst: "1. **Agendavorming** — onderwerp komt op politieke agenda (media, protesten, lobby).\n2. **Beleidsvoorbereiding** — ambtenaren werken voorstellen uit.\n3. **Beleidsbepaling** — parlement stemt → besluit valt.\n4. **Beleidsuitvoering** — wet wordt toegepast door ambtenaren + uitvoerende instanties." },
            { titel: "Wat zegt 'aangenomen'?", tekst: "'Wet aangenomen' = stemming uitgevoerd = fase 3 net afgerond. Daarna volgt fase 4 (uitvoering)." },
          ],
          woorden: [
            { woord: "beleidsbepaling", uitleg: "Fase waarin parlement de wet aanneemt." },
            { woord: "agendavorming", uitleg: "Hoe onderwerp op politieke agenda komt." },
          ],
          theorie: "Onthoud volgorde: agenderen → voorbereiden → bepalen → uitvoeren.",
          voorbeelden: [{ type: "stap", tekst: "Klimaatwet 2019 in NL: protesten (agendavorming 2018-2019) → ministers schrijven wet → 2e Kamer stemt voor (beleidsbepaling) → uitvoering door provincies + bedrijven (beleidsuitvoering)." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Stemming = bepaling = fase 3." }],
          niveaus: {
            basis: "Fase 3 beleidsbepaling. Antwoord C.",
            simpeler: "Parlement heeft gestemd = beslissing genomen = beleidsbepaling = fase 3. Antwoord C.",
            nogSimpeler: "Stemming = bepaling = C.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 10 — Recht van initiatief",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2024 tijdvak 2, vraag 10.",
    emoji: "🎓",
    checks: [
      {
        q: "Twee Tweede Kamerleden dienen een eigen wetsvoorstel in over de huurmarkt. Van welk recht maken zij gebruik?",
        options: [
          "budgetrecht",
          "recht om moties in te dienen",
          "recht van amendement",
          "recht van initiatief",
        ],
        answer: 3,
        wrongHints: [
          "Budgetrecht = recht over begroting (geld vaststellen) — geen nieuwe wet.",
          "Motie = uitspraak/verzoek aan regering, geen nieuw wetsvoorstel.",
          "Amendement = wijziging van een BESTAAND wetsvoorstel, niet een nieuwe wet starten.",
          null,
        ],
        explanation: "Het **recht van initiatief** = Kamerleden mogen zelf een nieuwe wet indienen (initiatiefwet). De andere rechten gaan over begroting, moties (uitspraken) of amendementen (wijzigingen).",
        examenBron: BRON_LABEL(10),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "rechten van de Tweede Kamer" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Onderscheid rechten", tekst: "**Initiatief** = nieuwe wet indienen.\n**Amendement** = wijziging in bestaand wetsvoorstel.\n**Motie** = uitspraak/verzoek (geen wet).\n**Budget** = begroting vaststellen." },
            { titel: "Subtiel verschil amendement ↔ initiatief", tekst: "Amendement = aanpassing van een wet die ÁL bestaat als voorstel. Initiatief = wet helemaal ZELF starten. Hier 'eigen wetsvoorstel' = initiatief." },
          ],
          woorden: [
            { woord: "initiatiefwet", uitleg: "Wet voorgesteld door Kamerlid (niet door regering)." },
            { woord: "amendement", uitleg: "Wijziging in bestaand wetsvoorstel." },
          ],
          theorie: "Onthoud: nieuw = initiatief. Wijzigen = amendement. Verzoek = motie. Geld = budget.",
          voorbeelden: [{ type: "stap", tekst: "Initiatiefwet Pulsvisserij door PvdD (2014) = recht van initiatief gebruikt." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Initiatief = INI = INitieert iets nieuws." }],
          niveaus: {
            basis: "Recht van initiatief. Antwoord D.",
            simpeler: "Een eigen NIEUWE wet voorstellen = recht van initiatief. Antwoord D.",
            nogSimpeler: "Nieuwe wet = initiatief = D.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 17 — Wat zijn coalitiepartijen in gemeente?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2024 tijdvak 2, vraag 17.",
    emoji: "🎓",
    checks: [
      {
        q: "In een gemeenteraad zitten coalitiepartijen. Wat zijn coalitiepartijen in een gemeenteraad?",
        options: [
          "partijen die ook in de Tweede Kamer zitten",
          "partijen die in de Gedeputeerde Staten zitten",
          "partijen die samen in het college van B en W zitten",
          "partijen die tot dezelfde politieke stroming behoren",
        ],
        answer: 2,
        wrongHints: [
          "Lokale partijen (Stadsbelang etc.) zitten vaak NIET in Tweede Kamer maar wél in coalitie. Geen vereiste.",
          "Gedeputeerde Staten = PROVINCIAAL bestuur, niet gemeentelijk. Verkeerd niveau.",
          null,
          "Coalitie = samenwerking om meerderheid te krijgen, niet per se dezelfde ideologie (vaak juist verschillende).",
        ],
        explanation: "**Coalitiepartijen** = partijen die samen genoeg meerderheid hebben gevormd en gezamenlijk in het **college van B en W** (Burgemeester + Wethouders) zitten. Lokale variant van een coalitiekabinet.",
        examenBron: BRON_LABEL(17),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "bestuurslagen + gemeentepolitiek" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "3 bestuurslagen NL", tekst: "**Landelijk**: regering + Tweede/Eerste Kamer. Coalitie in kabinet.\n**Provinciaal**: Gedeputeerde Staten + Provinciale Staten. Coalitie in GS.\n**Gemeente**: college van B en W + gemeenteraad. Coalitie in B en W." },
            { titel: "Wat is college van B en W?", tekst: "Burgemeester + wethouders = dagelijks bestuur van een gemeente. Wethouders komen uit coalitiepartijen. Burgemeester wordt benoemd door de Kroon (geen partij)." },
          ],
          woorden: [
            { woord: "coalitie", uitleg: "Samenwerking van partijen om meerderheid te krijgen." },
            { woord: "college van B en W", uitleg: "Burgemeester + Wethouders = gemeente-dagelijks bestuur." },
            { woord: "Gedeputeerde Staten", uitleg: "Provinciaal dagelijks bestuur." },
          ],
          theorie: "Onthoud bestuurslagen:\n• Landelijk: kabinet (ministers)\n• Provinciaal: Gedeputeerde Staten\n• Gemeente: College B en W",
          voorbeelden: [{ type: "stap", tekst: "Gemeente met PvdA + GroenLinks + D66 in coalitie → 3 wethouders uit deze partijen + 1 burgemeester (apart benoemd)." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Gemeente = B en W. Provincie = Gedeputeerde Staten. Land = kabinet." }],
          niveaus: {
            basis: "Partijen in college B en W. Antwoord C.",
            simpeler: "Coalitiepartijen in gemeente = partijen die samen wethouders leveren in college van B en W. Antwoord C.",
            nogSimpeler: "B en W = C.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 26 — Welk doel van straffen krijgt te weinig aandacht?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2024 tijdvak 2, vraag 26.",
    emoji: "🎓",
    checks: [
      {
        q: "Gevangenismedewerkers klagen dat de focus op straf ligt, maar dat er te weinig aandacht is voor het terugbrengen van gevangenen in de samenleving. Aan welk doel van straffen wordt volgens hen te weinig aandacht besteed?",
        options: [
          "handhaving van de rechtsorde",
          "resocialisatie",
          "vergelding",
          "voorkomen van eigenrichting",
        ],
        answer: 1,
        wrongHints: [
          "Rechtsorde handhaven = regels opleggen + zien dat ze worden nageleefd. Dat IS er al, niet 'te weinig'.",
          null,
          "Vergelding = straf als 'oog om oog'. Dat is juist WEL aanwezig in een streng-straf-systeem.",
          "Eigenrichting voorkomen = mensen mogen niet zelf wraak nemen. Wordt al gedaan via rechtspraak.",
        ],
        explanation: "**Resocialisatie** = ex-gedetineerde voorbereiden op terugkeer in samenleving (werk, opleiding, geestelijke begeleiding). Kritiek van gevangenismedewerkers: te weinig hierop ingezet → hoge recidive (mensen plegen opnieuw misdaad).",
        examenBron: BRON_LABEL(26),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "doelen van straffen" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "4 doelen van straffen", tekst: "1. **Vergelding** — straf als reactie op misdaad ('verdiende loon').\n2. **Afschrikking** — anderen + dader laten zien dat misdaad niet loont.\n3. **Resocialisatie** — ex-dader voorbereiden op normaal leven.\n4. **Beveiliging** — gevaarlijk persoon weghouden van samenleving." },
            { titel: "Resocialisatie = terug-in-maatschappij", tekst: "Soci-aliseren = sociaal maken. RE-socialiseren = OPNIEUW sociaal maken. In gevangenis: opleiding, werk, therapie. Anders: bij uitkomst weer in oude patroon = recidive." },
          ],
          woorden: [
            { woord: "resocialisatie", uitleg: "Ex-gedetineerde voorbereiden op leven in samenleving." },
            { woord: "vergelding", uitleg: "Straf als reactie/wraak op de daad." },
            { woord: "recidive", uitleg: "Opnieuw plegen van misdaad na vrijlating." },
          ],
          theorie: "**Doel-trio**: vergelding (kijk achteruit) + afschrikking (huidig) + resocialisatie (toekomst). Beveiliging soms apart genoemd.",
          voorbeelden: [{ type: "stap", tekst: "Skandinavische gevangenissen leggen meer nadruk op resocialisatie (school, therapie) → lagere recidive." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "RE-socialiseren = OPNIEUW deel maken van samenleving." }],
          niveaus: {
            basis: "Resocialisatie. Antwoord B.",
            simpeler: "'Terug in samenleving brengen' = resocialisatie. Antwoord B.",
            nogSimpeler: "Resocialisatie = B.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 27 — Onderdeel van requisitoir",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2024 tijdvak 2, vraag 27.",
    emoji: "🎓",
    checks: [
      {
        q: "Een officier van justitie houdt tijdens een rechtszaak een requisitoir. Wat is een onderdeel van een requisitoir?",
        options: [
          "de aanklacht",
          "de strafeis",
          "het pleidooi",
          "het vonnis",
        ],
        answer: 1,
        wrongHints: [
          "Aanklacht = WAT iemand wordt beschuldigd. Komt vóór het requisitoir, niet erin.",
          null,
          "Pleidooi = redevoering van de ADVOCAAT, niet de officier.",
          "Vonnis = uitspraak van de RECHTER, niet de officier.",
        ],
        explanation: "**Requisitoir** = redevoering van de officier van justitie in de rechtszaal. Bevat: bewijsvoering + **strafeis** (welke straf zou volgens OM moeten worden opgelegd). De rechter beslist daarna (vonnis). Pleidooi = redevoering van advocaat. Aanklacht = formele beschuldiging vooraf.",
        examenBron: BRON_LABEL(27),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "rechtszaal-rollen + procesgang" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Rolverdeling in rechtszaal", tekst: "**Officier van justitie** = aanklager namens samenleving. Houdt **requisitoir**: bewijs + strafeis.\n**Advocaat** = verdediger van verdachte. Houdt **pleidooi**: bezwaren tegen aanklacht + pleit voor lagere straf/vrijspraak.\n**Rechter** = beslist. Doet **vonnis**." },
            { titel: "Onderdelen van een requisitoir", tekst: "1. Feiten samenvatten (wat is er gebeurd?)\n2. Bewijsvoering (waarom denkt OM dat verdachte schuldig is?)\n3. **Strafeis** (welke straf eist OM?)" },
          ],
          woorden: [
            { woord: "requisitoir", uitleg: "Redevoering officier van justitie in rechtszaal." },
            { woord: "strafeis", uitleg: "Officier eist een specifieke straf bij rechter." },
            { woord: "pleidooi", uitleg: "Redevoering van de advocaat." },
            { woord: "vonnis", uitleg: "Uitspraak van de rechter." },
          ],
          theorie: "Onthoud: requisitoir → strafeis (officier). Pleidooi (advocaat). Vonnis (rechter).",
          voorbeelden: [{ type: "stap", tekst: "Officier eist 6 jaar gevangenisstraf in requisitoir. Advocaat pleit voor 2 jaar. Rechter spreekt vonnis uit: 4 jaar." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Requisitoir = aanklager praat. Eist een straf." }],
          niveaus: {
            basis: "Strafeis. Antwoord B.",
            simpeler: "Requisitoir = redevoering officier met de strafeis erin. Antwoord B.",
            nogSimpeler: "Strafeis = B.",
          },
        },
      },
    ],
  },
];

const examenMaatschappijkunde2024T2 = {
  id: "examen-maatschappijkunde-2024-t2",
  title: "Examen oefenen — Maatschappijkunde 2024 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "maatschappijleer",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Maatschappijkunde - eindexamen oefenen 2024-T2",
  intro:
    "5 echte examenvragen uit het VMBO-GL/TL maatschappijkunde-examen 2024 tijdvak 2 (examen-id GT-1127-a-24-2). Per vraag officiële antwoorden, denkprikkel-hints, inhoudelijke uitleg, en doorklik naar 'De Nederlandse staat'.",
  triggerKeywords: [
    "examen maatschappijkunde 2024 tijdvak 2", "echte examenvragen maatschappij",
    "beleidsbepaling fase", "recht van initiatief amendement",
    "college b en w coalitie", "resocialisatie straffen", "requisitoir strafeis",
  ],
  chapters,
  steps,
};

export default examenMaatschappijkunde2024T2;
