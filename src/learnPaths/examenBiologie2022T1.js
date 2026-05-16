// Leerpad: Examen-oefenpad Biologie VMBO-GL/TL 2022 tijdvak 1.
// 2026-05-16: 6e biologie-pilot — vult de 2022-T1 slot.
// 5 echte MC-vragen geselecteerd uit 8 (V6/V38 tabel-vragen overgeslagen,
// V23 zeer specifiek experiment). Bron: examenblad.nl, examen 0191 GT 2022-1.

const chapters = [
  { letter: "A", title: "Voortplanting & immuniteit", emoji: "🧬", from: 0, to: 2 },
  { letter: "B", title: "Bloed & spijsvertering", emoji: "🩸", from: 3, to: 4 },
];

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Biologie 2022 tijdvak 1, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2022/vmbo-gl/documenten/cse-1/gt-0191-a-22-1-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc: koppel sleutel-begrip uit vraag aan kern-functie van orgaan/proces.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const steps = [
  {
    title: "Vraag 10 — Geslachtsbepaling bij bevruchting",
    explanation: "Echte examenvraag uit Biologie 2022-T1, vraag 10. Onderwerp: voortplanting + chromosomen.",
    emoji: "🎓",
    checks: [{
      q: "Esmeralda en Ronald zijn blij met de zwangerschap. Ze vragen zich af of hun kind een meisje of een jongen zal zijn. Op welk moment staat het geslacht van hun kind vast?",
      options: [
        "op het moment dat geslachtscellen ontstaan",
        "op het moment van geslachtsgemeenschap",
        "op het moment van bevruchting",
        "op het moment van innesteling",
      ],
      answer: 2,
      wrongHints: ["Geslachtscellen ontstaan continu — losse eicellen + zaadcellen hebben nog geen kind-geslacht.", "Geslachtsgemeenschap = handeling — bepaalt niet welk van de miljoenen zaadcellen wint.", null, "Innesteling = veel later, na bevruchting + reis door eileider."],
      explanation: "**Geslacht wordt bepaald bij BEVRUCHTING** — het moment dat zaadcel + eicel samenkomen. De eicel heeft een X-chromosoom. De zaadcel heeft X of Y. X-zaadcel + X-eicel → XX → meisje. Y-zaadcel + X-eicel → XY → jongen. Alle latere stappen (innesteling, ontwikkeling) zijn dan al voorbestemd.",
      examenBron: BRON_LABEL(10),
      bronLink: BRON_LINK,
      leerpadLink: { id: "genetica-erfelijkheid-biologie", title: "Genetica + erfelijkheid" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'bevruchting', 'innesteling', 'geslachtscel', 'chromosoom'" },
        { id: "genetica-erfelijkheid-biologie", title: "Genetica + erfelijkheid", niveau: "VMBO klas 3-4", why: "X/Y-chromosoom + geslachtsbepaling — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Bij bevruchting (zaadcel + eicel samenkomen) bepaalt de zaadcel-chromosoom (X of Y) of het meisje (XX) of jongen (XY) wordt. Eicel heeft altijd X. Vóór bevruchting = onbepaald. Na bevruchting = vast.",
        { basis: "Bij bevruchting. = C.", simpeler: "Zaadcel X of Y bepaalt geslacht bij bevruchting. = C.", nogSimpeler: "Bevruchting = C." },
        [{ woord: "bevruchting", uitleg: "Zaadcel + eicel samenkomen → nieuwe cel." }, { woord: "chromosoom", uitleg: "DNA-pakketje. X of Y bepaalt geslacht." }],
      ),
    }],
  },
  {
    title: "Vraag 22 — Vaccin: kunstmatige actieve immunisatie",
    explanation: "Echte examenvraag uit Biologie 2022-T1, vraag 22. Onderwerp: immuunsysteem en vaccins.",
    emoji: "🎓",
    checks: [{
      q: "Gabriël en Petra bespreken de testen met het nieuwe vaccin. Gabriël zegt dat de vrijwilligers een **kunstmatige** immunisatie hebben gekregen. Petra zegt dat de vrijwilligers een **passieve** immunisatie hebben gekregen. Wie heeft gelijk?",
      options: [
        "Geen van beiden heeft gelijk.",
        "Alleen Gabriël heeft gelijk.",
        "Alleen Petra heeft gelijk.",
        "Gabriël heeft gelijk en Petra heeft gelijk.",
      ],
      answer: 1,
      wrongHints: ["Gabriël heeft wél gelijk — vaccin = kunstmatige immunisatie (niet natuurlijk via ziek-worden).", null, "Petra heeft niet gelijk — passieve immunisatie = klaargemaakte antistoffen krijgen. Vaccin = ACTIEF, het lichaam maakt zelf antistoffen.", "Niet beiden — Petra's passief klopt niet voor een vaccin."],
      explanation: "4 immunisatie-types: **kunstmatig actief** = vaccin (verzwakte ziekteverwekker → lichaam maakt antistoffen). **kunstmatig passief** = injectie met klaar-antistoffen (bij snake-bite). **natuurlijk actief** = ziek worden + herstel. **natuurlijk passief** = moedermelk-antistoffen baby. Vaccin = kunstmatig + actief. Gabriël zegt 'kunstmatig' = goed. Petra zegt 'passief' = fout (moest actief zijn).",
      examenBron: BRON_LABEL(22),
      bronLink: BRON_LINK,
      leerpadLink: { id: "genetica-erfelijkheid-biologie", title: "Genetica + erfelijkheid" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'vaccin', 'antistof', 'immunisatie', 'actief/passief'" },
        { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid", niveau: "groep 6-8", why: "immuunsysteem basis — antistoffen + witte bloedcellen" },
      ],
      uitlegPad: compact(
        "Vaccin = je krijgt een verzwakte ziekteverwekker → lichaam reageert + maakt eigen antistoffen. Dat is ACTIEF (lichaam doet zelf werk) + KUNSTMATIG (geen natuurlijke besmetting). Gabriël's 'kunstmatig' = juist. Petra's 'passief' = fout (had actief moeten zijn).",
        { basis: "Alleen Gabriël. = B.", simpeler: "Vaccin = kunstmatig (juist) + actief (Petra zei passief = fout). = B.", nogSimpeler: "Alleen G = B." },
        [{ woord: "kunstmatige immunisatie", uitleg: "Vaccin of injectie — niet natuurlijk." }, { woord: "actieve immunisatie", uitleg: "Lichaam maakt zelf antistoffen." }, { woord: "passieve immunisatie", uitleg: "Klaar-antistoffen krijgen (bv. tegen tetanus)." }],
      ),
    }],
  },
  {
    title: "Vraag 24 — Witte bloedcellen hebben chromosomen",
    explanation: "Echte examenvraag uit Biologie 2022-T1, vraag 24. Onderwerp: bloed-celtypen + DNA.",
    emoji: "🎓",
    checks: [{
      q: "In het gedroogde bloed op de zakdoek hebben de wetenschappers DNA gevonden dat afkomstig is van chromosomen van bloeddeeltjes. Welke bloeddeeltjes bevatten chromosomen?",
      options: [
        "bloedplaatjes",
        "rode bloedcellen",
        "witte bloedcellen",
      ],
      answer: 2,
      wrongHints: ["Bloedplaatjes = celfragmenten zonder kern (voor stolling). Geen chromosomen.", "Rode bloedcellen (erytrocyten) zijn 'kernloos' bij mensen — geen DNA, alleen hemoglobine.", null],
      explanation: "Chromosomen zitten in de **celkern**. Van de 3 bloeddeeltjes heeft alleen de **witte bloedcel (leukocyt)** een kern. Rode bloedcellen verliezen hun kern bij rijping (meer ruimte voor hemoglobine = zuurstof). Bloedplaatjes zijn celfragmenten zonder kern.",
      examenBron: BRON_LABEL(24),
      bronLink: BRON_LINK,
      leerpadLink: { id: "cel-biologie", title: "Cellen" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'chromosoom', 'celkern', 'bloedplaatje', 'rode/witte bloedcel'" },
        { id: "cel-biologie", title: "Cellen", niveau: "VMBO klas 1-2", why: "celkern = waar DNA zit — rode bloedcellen zijn uitzondering (geen kern)" },
      ],
      uitlegPad: compact(
        "DNA + chromosomen zitten in de celkern. Bloeddeeltjes: bloedplaatjes (geen kern), rode bloedcellen (kernloos bij mensen — uniek!), witte bloedcellen (wel kern). Antwoord C.",
        { basis: "Witte bloedcellen (hebben kern). = C.", simpeler: "Alleen witte bloedcellen hebben een kern → chromosomen → DNA. = C.", nogSimpeler: "Witte = C." },
        [{ woord: "celkern", uitleg: "Waar het DNA zit." }, { woord: "leukocyt", uitleg: "Witte bloedcel — verdedigt tegen ziekten." }],
      ),
    }],
  },
  {
    title: "Vraag 4 — Darm absorbeert water in bloed",
    explanation: "Echte examenvraag uit Biologie 2022-T1, vraag 4. Onderwerp: spijsvertering + water-opname.",
    emoji: "🎓",
    checks: [{
      q: "Pleuravocht ontstaat door waterverlies uit de bloedvaten. Dit water wordt weer aangevuld, doordat in een bepaald orgaan water in het bloed opgenomen wordt. Welk orgaan heeft als taak water in het bloed op te nemen?",
      options: [
        "de darm",
        "de lever",
        "de maag",
        "de nier",
      ],
      answer: 0,
      wrongHints: [null, "Lever maakt gal, ontgift bloed — neemt geen water op in bloed.", "Maag breekt voedsel af + heeft maagsap — geen water-opname in bloed.", "Nier filtert water uit bloed naar urine — tegengesteld effect."],
      explanation: "**Darm** (vooral dunne + dikke darm) absorbeert water uit voedsel naar het bloed. Dikke darm is gespecialiseerd in waterresorptie — daarom is ontlasting bij gezonde mensen vast (niet vloeibaar). Lever ontgift, nier filtert (= water-VERLIES naar urine), maag verteert.",
      examenBron: BRON_LABEL(4),
      bronLink: BRON_LINK,
      leerpadLink: { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'opname', 'absorptie', 'darm', 'lever', 'nier'" },
        { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid", niveau: "groep 6-8", why: "organen + functies spijsvertering" },
      ],
      uitlegPad: compact(
        "Water wordt opgenomen in het bloed via de darmwand (vooral dikke darm). Lever ontgift, maag verteert, nier filtert (water naar URINE). Antwoord A.",
        { basis: "De darm. = A.", simpeler: "Darm neemt water op uit voedsel naar bloed. = A.", nogSimpeler: "Darm = A." },
      ),
    }],
  },
  {
    title: "Vraag 46 — Dunne darm absorbeert koolhydraten",
    explanation: "Echte examenvraag uit Biologie 2022-T1, vraag 46. Onderwerp: spijsvertering + voedingsstoffen.",
    emoji: "🎓",
    checks: [{
      q: "Na vertering van de ontbijtkoek worden de koolhydraten in het bloed opgenomen. In welk deel van het verteringsstelsel worden de meeste koolhydraten opgenomen?",
      options: [
        "in de maag",
        "in de dunne darm",
        "in de dikke darm",
        "in de endeldarm",
      ],
      answer: 1,
      wrongHints: ["Maag = verteren (afbreken), geen opname in bloed.", null, "Dikke darm absorbeert vooral water + zouten, niet koolhydraten.", "Endeldarm = opslag ontlasting, geen opname-functie."],
      explanation: "Koolhydraten worden afgebroken in maag/dunne darm (door enzymen → glucose) en vervolgens **in de dunne darm opgenomen in het bloed** via de darmvlokken (vlokharen). Dunne darm is dé absorptie-locatie voor koolhydraten + eiwitten + vetten. Dikke darm = water + zouten.",
      examenBron: BRON_LABEL(46),
      bronLink: BRON_LINK,
      leerpadLink: { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'koolhydraten', 'vertering', 'opname', 'dunne/dikke darm'" },
        { id: "gezonde-voeding-po", title: "Gezonde voeding", niveau: "groep 6-8", why: "voedingsstoffen + spijsverteringsstelsel" },
        { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid", niveau: "groep 6-8", why: "organen-functies in spijsvertering" },
      ],
      uitlegPad: compact(
        "Spijsvertering route: mond (kauwen) → maag (verteren) → dunne darm (verteren + ABSORPTIE meeste voedingsstoffen) → dikke darm (water absorptie) → endeldarm (opslag). Koolhydraten worden in dunne darm naar bloed gebracht via vlokharen.",
        { basis: "Dunne darm. = B.", simpeler: "Dunne darm = waar voedingsstoffen (incl. koolhydraten) in bloed komen. = B.", nogSimpeler: "Dunne darm = B." },
        [{ woord: "darmvlokken", uitleg: "Kleine uitsteekseltjes in dunne darm — vergroot oppervlak voor absorptie." }, { woord: "glucose", uitleg: "Eenvoudige suiker uit koolhydraten." }],
      ),
    }],
  },
];

const examenBiologie2022T1 = {
  id: "examen-biologie-2022-t1",
  title: "Examen oefenen — Biologie 2022 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "biologie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Biologie - eindexamen oefenen 2022-T1",
  intro: "5 echte examenvragen uit VMBO-GL/TL Biologie 2022 tijdvak 1. Onderwerpen: geslachtsbepaling bevruchting, vaccin kunstmatig-actief, witte bloedcellen DNA, darm water-opname, dunne darm koolhydraten.",
  triggerKeywords: ["examen biologie 2022 tijdvak 1", "geslacht bevruchting", "vaccin actief passief", "witte bloedcellen kern", "darm water opname", "dunne darm koolhydraten"],
  chapters,
  steps,
};

export default examenBiologie2022T1;
