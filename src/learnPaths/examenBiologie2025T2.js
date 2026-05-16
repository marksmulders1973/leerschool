// Leerpad: Examen-oefenpad Biologie VMBO-GL/TL 2025 tijdvak 2.
// 2026-05-16: 5e biologie-pilot (na 2023-T1 + 2024-T1 + 2024-T2 + 2025-T1).
// 6 echte MC-vragen geselecteerd uit 14 herkende MC's. Visuele-afbeelding-
// afhankelijke vragen (V2 pupil, V12-14 tabel sushi, V18 oor-letter, V26
// orgaan Jacobson, V34 hersendeel, V42 olifant-cellen) overgeslagen.
// Bron: examenblad.nl, examen 0191 GT 2025-2.

const chapters = [
  { letter: "A", title: "Voortplanting & genetica", emoji: "🧬", from: 0, to: 1 },
  { letter: "B", title: "Zenuwstelsel & spijsvertering", emoji: "🧠", from: 2, to: 4 },
  { letter: "C", title: "Ecosystemen & voeding", emoji: "🌱", from: 5, to: 5 },
];

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL biologie 2025 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2025/vmbo-gl/documenten/cse-2/gt-0191-a-25-2-o";

const steps = [
  // V15
  {
    title: "Vraag 15 — Kans op meerling-geboorte in Nederland",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2025 tijdvak 2, vraag 15. Onderwerp: genetica, FSH-hormoon, kans-statistiek.",
    emoji: "🎓",
    checks: [
      {
        q: "Wat is de kans op een geboorte van een meerling in Nederland? Er zijn genen die de kans op een meerling vergroten. Zo is er een gen dat ervoor zorgt dat de hypofyse meer van het hormoon FSH produceert. Dit hormoon stimuleert de rijping van eicellen. Ook is er een gen dat ervoor zorgt dat het orgaan waarin de eicellen rijpen, sterker reageert op het hormoon FSH.",
        options: ["1%", "4%", "9%", "11%"],
        answer: 0,
        wrongHints: [null, "Te hoog — 4% zou betekenen ~1 op 25 geboortes, dat is veel meer dan werkelijk.", "Veel te hoog — 9% zou ongeveer 1 op 11 betekenen.", "Veel te hoog — 11% komt nergens in voor."],
        explanation: "Meerlinggeboortes (tweeling, drieling, etc.) zijn in NL ~1% van alle geboortes (oftewel 1 op 100). Genen + IVF-behandelingen verhogen die kans iets, maar globaal blijft het rond de 1%. Twee Nederlandse cijfers: tweelingen ~12 per 1000 geboortes = 1,2%.",
        examenBron: BRON_LABEL(15),
        bronLink: BRON_LINK,
        leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Voortplanting + hormonen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'meerling', 'hypofyse', 'FSH', 'eicellen rijping'" },
          { id: "voortplanting-hormonen-biologie", title: "Voortplanting + hormonen", niveau: "VMBO klas 3-4", why: "FSH (Follikel-Stimulerend Hormoon) regelt eicel-rijping — meer FSH = meer eicellen tegelijk = grotere kans op meerling" },
          { id: "gemiddelden-statistiek-po", title: "Statistiek + percentages", niveau: "groep 6-8", why: "kans als percentage uitdrukken (1% = 1 op 100)" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een meerling?", tekst: "**Meerling** = 2 of meer kinderen tegelijk geboren. Tweeling (2), drieling (3), etc. Komt zeldzaam voor." },
            { titel: "Statistiek NL", tekst: "Ongeveer **1% van alle geboortes** in NL is een meerling. Dat zijn ~12 per 1000 geboortes (= 1,2%). Antwoord A — afgerond 1%." },
            { titel: "Genen + FSH-rol", tekst: "Hoe meer FSH → meer eicellen rijpen tegelijk → groter kans op meerlingen. Vrouwen met FSH-genen krijgen vaker tweelingen. Maar gemiddeld over hele bevolking blijft 1%." },
          ],
          woorden: [{ woord: "FSH", uitleg: "Follikel-Stimulerend Hormoon — uit hypofyse, stimuleert eicel-rijping." }, { woord: "hypofyse", uitleg: "Klier in hersenen die meerdere hormonen produceert." }],
          theorie: "Cito-truc: voor kans-statistiek-vragen — onthoud Nederlandse gemiddelden. Meerling 1%. Tweeling alleen 1,2%. IVF verhoogt naar ~10%.",
          voorbeelden: [{ type: "feit", tekst: "Wereldwijd: meerling-kans verschilt per land. Westerse landen ~1%. Afrika hoogste (Benin ~3%). Door IVF stijgt het in westerse landen langzaam." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij een kans-vraag die je niet zeker weet: 1% is bijna altijd het juiste antwoord voor zeldzame medische gebeurtenissen." }],
          niveaus: { basis: "1%. = A.", simpeler: "Meerling-kans in NL = ~1%. = A.", nogSimpeler: "1% = A." },
        },
      },
    ],
  },
  // V30
  {
    title: "Vraag 30 — Nageboorte: placenta verlaat baarmoeder",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2025 tijdvak 2, vraag 30. Onderwerp: 4 fasen van de bevalling.",
    emoji: "🎓",
    checks: [
      {
        q: "Tijdens welke fase van de bevalling verlaat de placenta de baarmoeder?",
        options: ["tijdens de indaling", "tijdens de ontsluiting", "tijdens de uitdrijving", "tijdens de nageboorte"],
        answer: 3,
        wrongHints: ["Indaling = baby zakt richting bekken, vóór de geboorte zelf. Placenta blijft nog vast.", "Ontsluiting = baarmoederhals opent, weeën beginnen. Placenta blijft nog vast.", "Uitdrijving = baby wordt geboren. Placenta blijft eerst nog vast — komt erna.", null],
        explanation: "Bevalling heeft 4 fases: 1) **Indaling** (baby zakt naar bekken). 2) **Ontsluiting** (baarmoederhals opent tot 10 cm). 3) **Uitdrijving** (persweeën, baby wordt geboren). 4) **Nageboorte** (placenta + navelstreng komen los en worden uitgedreven, ~5-30 min na baby).",
        examenBron: BRON_LABEL(30),
        bronLink: BRON_LINK,
        leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Voortplanting + hormonen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'placenta', 'baarmoeder', 'indaling', 'ontsluiting', 'uitdrijving', 'nageboorte'" },
          { id: "voortplanting-hormonen-biologie", title: "Voortplanting + hormonen", niveau: "VMBO klas 3-4", why: "4 bevallingsfases + welke functie placenta heeft (voeding-zuurstof-doorgeven foetus)" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Volgorde 4 fases", tekst: "1) Indaling. 2) Ontsluiting. 3) Uitdrijving. 4) **Nageboorte** — laatste fase." },
            { titel: "Wat doet de placenta?", tekst: "Placenta = orgaan in baarmoeder dat de baby voedt + zuurstof geeft via navelstreng. Na geboorte baby is placenta niet meer nodig — komt los en wordt eruit geperst." },
            { titel: "Tijd-spanne", tekst: "Nageboorte duurt 5-30 min na geboorte van de baby. Vroedvrouw controleert dat hele placenta eruit is (stukken achterblijvend = risico op bloeding)." },
          ],
          woorden: [{ woord: "nageboorte", uitleg: "Vierde fase bevalling — placenta wordt uitgedreven." }, { woord: "placenta", uitleg: "Tijdelijk orgaan dat foetus voedt." }],
          theorie: "Cito-truc volgorde: I-O-U-N = Indaling-Ontsluiting-Uitdrijving-Nageboorte. Placenta hoort altijd bij de laatste fase.",
          voorbeelden: [{ type: "feit", tekst: "Na natte bevalling = placenta vaak intact eruit. Bij keizersnede = arts haalt placenta er chirurgisch uit." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Naam = letterlijk. 'Na-geboorte' = wat NA de baby komt. Logisch." }],
          niveaus: { basis: "Nageboorte. = D.", simpeler: "I-O-U-N: indaling → ontsluiting → uitdrijving (baby) → nageboorte (placenta). = D.", nogSimpeler: "Nageboorte = D." },
        },
      },
    ],
  },
  // V19
  {
    title: "Vraag 19 — Bewuste waarneming geluid: grote hersenen",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2025 tijdvak 2, vraag 19. Onderwerp: zenuwstelsel en hersendelen.",
    emoji: "🎓",
    checks: [
      {
        q: "In welk deel van het centraal zenuwstelsel vindt bewuste waarneming van geluid plaats?",
        options: ["in de grote hersenen", "in de kleine hersenen", "in de hersenstam"],
        answer: 0,
        wrongHints: [null, "Kleine hersenen regelen beweging + balans, niet bewuste waarneming.", "Hersenstam regelt basis-levensfuncties (ademen, hartslag) — onbewust."],
        explanation: "**Grote hersenen (cerebrum)** = waar je bewust dingen waarneemt, denkt en beslist. **Auditieve cortex** (in de slaapkwabben van de grote hersenen) verwerkt geluid bewust. Kleine hersenen + hersenstam doen onbewuste/automatische functies.",
        examenBron: BRON_LABEL(19),
        bronLink: BRON_LINK,
        leerpadLink: { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'centraal zenuwstelsel', 'bewuste waarneming', 'grote/kleine hersenen', 'hersenstam'" },
          { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid", niveau: "groep 6-8", why: "skelet + organen — basis voor anatomie hersenen" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Drie hersendelen", tekst: "**Grote hersenen** (cerebrum, ~85%): bewust denken, waarnemen, beslissen. **Kleine hersenen** (cerebellum): coördinatie, balans, fijne motoriek. **Hersenstam**: ademhaling, hartslag, slik-reflex." },
            { titel: "Waar verwerken we geluid?", tekst: "Geluid → trommelvlies → gehoorbeentjes → slakkenhuis → gehoorzenuw → **grote hersenen (slaapkwab/auditieve cortex)**. Bewust waarnemen gebeurt altijd in grote hersenen." },
            { titel: "Onbewust vs bewust", tekst: "Schrik-reactie op hard geluid (zonder denken) = hersenstam. Herkennen van een liedje = grote hersenen. Loop-coördinatie = kleine hersenen." },
          ],
          woorden: [
            { woord: "centraal zenuwstelsel", uitleg: "Hersenen + ruggemerg." },
            { woord: "grote hersenen", uitleg: "Cerebrum — bewust denken." },
            { woord: "kleine hersenen", uitleg: "Cerebellum — balans + coördinatie." },
            { woord: "hersenstam", uitleg: "Basis-levensfuncties." },
          ],
          theorie: "Cito-truc hersendelen: B-B-H = **Bewust** (grote hersenen), **Balans** (kleine hersenen), **Hartslag** (hersenstam). Match het werkwoord aan het hersendeel.",
          voorbeelden: [{ type: "stap", tekst: "Bewust luisteren = grote hersenen. Fietsen = kleine hersenen (automatisme). Slapen = hersenstam (regelt ademhaling)." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag-trefwoord 'bewuste waarneming' → altijd grote hersenen. Onbewust → kleine hersenen of hersenstam." }],
          niveaus: { basis: "Grote hersenen. = A.", simpeler: "Bewust waarnemen = grote hersenen (cerebrum). = A.", nogSimpeler: "Grote hersenen = A." },
        },
      },
    ],
  },
  // V36
  {
    title: "Vraag 36 — Gal emulgeert vetten",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2025 tijdvak 2, vraag 36. Onderwerp: spijsvertering en gal-functie.",
    emoji: "🎓",
    checks: [
      {
        q: "Welk van de volgende uitspraken over gal is juist?",
        options: ["Gal bevat verteringsenzymen.", "Gal emulgeert vetten.", "Gal wordt door de galblaas gemaakt."],
        answer: 1,
        wrongHints: ["Gal heeft GEEN verteringsenzymen — wel zouten en zuren. Enzymen zitten in maagsap + alvleessap.", null, "Gal wordt door de LEVER gemaakt. Galblaas slaat het alleen op (bij maaltijden lozing)."],
        explanation: "**Gal emulgeert vetten** = grote vetdruppels worden in kleine druppeltjes verdeeld. Daardoor heeft alvleessap-lipase meer 'oppervlak' om vetten af te breken. Gal zelf bevat geen enzymen, alleen zouten. Lever maakt gal, galblaas slaat op.",
        examenBron: BRON_LABEL(36),
        bronLink: BRON_LINK,
        leerpadLink: { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'gal', 'emulgeren', 'enzymen', 'galblaas', 'lever'" },
          { id: "gezonde-voeding-po", title: "Gezonde voeding", niveau: "groep 6-8", why: "voedingsstoffen + spijsvertering basis" },
          { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid", niveau: "groep 6-8", why: "organen + functies — kern voor anatomie spijsvertering" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is gal?", tekst: "**Gal** is een groen-gele vloeistof die door de **lever** wordt gemaakt en in de **galblaas** wordt opgeslagen. Bij maaltijd met vet → galblaas knijpt → gal stroomt naar darm." },
            { titel: "Wat doet gal?", tekst: "**Emulgeert vetten** = grote vetdruppels splitsen in kleine. Net als afwasmiddel met olie. Kleine druppels = meer oppervlak voor enzymen." },
            { titel: "Geen enzymen", tekst: "Gal heeft galzouten + galzuren, geen enzymen. Vetafbraak gebeurt door **lipase** uit de alvleesklier — pas nadat gal de vet-druppels klein heeft gemaakt." },
          ],
          woorden: [
            { woord: "gal", uitleg: "Vloeistof uit lever — emulgeert vetten." },
            { woord: "emulgeren", uitleg: "Grote druppels in kleine verdelen." },
            { woord: "lipase", uitleg: "Enzym dat vetten afbreekt." },
            { woord: "galblaas", uitleg: "Klein orgaan dat gal opslaat (geen productie)." },
          ],
          theorie: "Cito-truc gal-vraag: 3 feiten onthouden — gal maakt = LEVER. Gal opslag = GALBLAAS. Gal werkt = EMULGEREN vetten (geen enzym).",
          voorbeelden: [
            { type: "stap", tekst: "Vergelijk: olie + water schudden = grote druppels (kort) → samen weer. Olie + water + afwasmiddel schudden = blijft gemengd (kleine druppels stabiel). Gal werkt zo." },
            { type: "feit", tekst: "Mensen zonder galblaas (verwijderd na galstenen) kunnen normaal leven — gal stroomt direct van lever naar darm, alleen iets minder geconcentreerd." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Drie verleidende foute opties bij gal: (1) heeft enzymen (NEE, alvleesklier), (2) gemaakt door galblaas (NEE, lever), (3) verteert eiwitten (NEE, pepsine maag)." }],
          niveaus: { basis: "Emulgeert vetten. = B.", simpeler: "Gal splitst grote vetdruppels in kleintjes (zoals afwasmiddel). = B.", nogSimpeler: "Emulgeert = B." },
        },
      },
    ],
  },
  // V48
  {
    title: "Vraag 48 — Zaadcellen route: zaadleider → urinebuis",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2025 tijdvak 2, vraag 48. Onderwerp: voortplanting-anatomie man.",
    emoji: "🎓",
    checks: [
      {
        q: "Bij een orgasme van een man verlaten zaadcellen de penis. Via welke genoemde organen verlaten de zaadcellen, in de juiste volgorde, het lichaam van de man?",
        options: ["urinebuis → zaadleider", "urineleider → zaadleider", "zaadleider → urinebuis", "zaadleider → urineleider"],
        answer: 2,
        wrongHints: ["Verkeerde volgorde — zaadcellen gaan EERST via zaadleider, dan via urinebuis.", "Urineleider zit tussen nier en blaas — heeft niets met zaad te maken.", null, "Urineleider zit binnen het lichaam (nier→blaas) — niet de uitgang van de penis."],
        explanation: "Route zaadcellen: **bijbal → zaadleider → prostaat (zaadcellen mengen met zaadvocht) → urinebuis (in penis)**. De urinebuis transporteert zowel urine als sperma maar nooit tegelijk (spier sluit blaas af tijdens orgasme).",
        examenBron: BRON_LABEL(48),
        bronLink: BRON_LINK,
        leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Voortplanting + hormonen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'zaadleider', 'urinebuis', 'urineleider', 'prostaat', 'orgasme'" },
          { id: "pubertijd-groei-po", title: "Pubertijd + groei", niveau: "groep 6-8", why: "basis-anatomie voortplantingsorganen man + vrouw" },
          { id: "voortplanting-hormonen-biologie", title: "Voortplanting + hormonen", niveau: "VMBO klas 3-4", why: "complete zaadcel-route + functie elke orgaan — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zaadleider ≠ urineleider", tekst: "Veel kinderen verwarren deze. **Zaadleider** (Latijn: vas deferens) transporteert zaadcellen vanuit bijbal naar urinebuis. **Urineleider** (Latijn: ureter) transporteert urine vanuit nieren naar blaas. Helemaal andere route." },
            { titel: "Route zaadcellen", tekst: "Zaadballen → bijbal → **zaadleider** → prostaat (mengen) → **urinebuis** → uit penis. De urinebuis transporteert zowel urine (vanaf blaas) als sperma (vanaf zaadleider) — maar nooit tegelijk." },
            { titel: "Volgorde antwoord", tekst: "Vraag vraagt 'in de juiste volgorde'. Eerst zaadleider (transporteert), daarna urinebuis (uitgang). Antwoord C." },
          ],
          woorden: [
            { woord: "zaadleider", uitleg: "Buis van bijbal naar urinebuis — transporteert sperma." },
            { woord: "urineleider", uitleg: "Buis van nier naar blaas — transporteert urine. Niets met sperma." },
            { woord: "urinebuis", uitleg: "Buis vanaf blaas door penis — transporteert urine + sperma (nooit tegelijk)." },
            { woord: "prostaat", uitleg: "Klier die zaadvocht maakt voor sperma." },
          ],
          theorie: "Cito-truc anatomie-naam: Latijn = duidelijk. Vas deferens = 'transporterend vat'. Ureter = 'uretha' verschil = 1 letter, totaal andere organen.",
          voorbeelden: [
            { type: "stap", tekst: "Vrouwelijke parallel: eicel-route = eierstok → eileider → baarmoeder → vagina. Mannelijke: zaadbal → bijbal → zaadleider → urinebuis → buiten." },
            { type: "feit", tekst: "Sterilisatie man (vasectomie) = doorknippen van beide zaadleiders. Sperma kan dan niet meer naar urinebuis. Veilig + omkeerbaar in 50% van gevallen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud: Z-U = Zaadleider eerst, Urinebuis als laatste. Volgorde C." }],
          niveaus: { basis: "Zaadleider → urinebuis. = C.", simpeler: "Volgorde: zaadbal → bijbal → ZAADLEIDER → prostaat → URINEBUIS → uit penis. = C.", nogSimpeler: "Z-U = C." },
        },
      },
    ],
  },
  // V27
  {
    title: "Vraag 27 — Giraffe: consument met plooikiezen",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2025 tijdvak 2, vraag 27. Onderwerp: ecosystemen + voedselketen.",
    emoji: "🎓",
    checks: [
      {
        q: "Is de giraffe een consument of een producent? En heeft de giraffe knobbelkiezen of plooikiezen?",
        options: ["een consument met knobbelkiezen", "een consument met plooikiezen", "een producent met knobbelkiezen", "een producent met plooikiezen"],
        answer: 1,
        wrongHints: ["Consument klopt, maar knobbelkiezen zijn voor alleseters (mens, varken). Giraffe is herbivoor.", null, "Geen producent — alleen planten + algen zijn producenten. Giraffe eet planten = consument.", "Geen producent — giraffes eten bladeren, ze maken die niet zelf via fotosynthese."],
        explanation: "**Producent** = maakt eigen voedsel via fotosynthese (alleen planten + algen). **Consument** = eet andere organismen. Giraffe eet bladeren = consument. **Knobbelkiezen** = voor alleseters/vleeseters (varken, mens). **Plooikiezen** = voor grasetters/bladeneters (giraffe, koe, paard). Giraffe = consument met plooikiezen.",
        examenBron: BRON_LABEL(27),
        bronLink: BRON_LINK,
        leerpadLink: { id: "dierenklassen-po", title: "Dierenklassen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'consument', 'producent', 'knobbelkiezen', 'plooikiezen', 'herbivoor'" },
          { id: "dierenklassen-po", title: "Dierenklassen", niveau: "groep 5-7", why: "zoogdier-categorisering + voedingstype" },
          { id: "fotosynthese-biologie", title: "Fotosynthese", niveau: "VMBO klas 1-2", why: "verschil producent (fotosynthese) vs consument (eet andere)" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Producent vs consument", tekst: "**Producent** = plant of alg — maakt eigen voedsel via fotosynthese (zonlicht + CO₂ + water → suiker). **Consument** = eet andere organismen. Alle dieren zijn consumenten." },
            { titel: "Giraffe = consument", tekst: "Giraffe eet bladeren van acacia-bomen. Geen fotosynthese → niet producent. Dier = altijd consument. Twee opties weg." },
            { titel: "Kiezen-type", tekst: "**Knobbelkiezen** = puntige kiezen voor verscheuren — vleeseters (hond, kat) + alleseters (mens, varken). **Plooikiezen** = brede platte kiezen met plooien — voor planten malen — herbivoren (giraffe, koe, paard, schaap)." },
          ],
          woorden: [
            { woord: "consument", uitleg: "Organisme dat andere organismen eet (geen fotosynthese)." },
            { woord: "producent", uitleg: "Organisme dat eigen voedsel maakt via fotosynthese (planten + algen)." },
            { woord: "plooikiezen", uitleg: "Brede kiezen met plooien — voor planten." },
            { woord: "knobbelkiezen", uitleg: "Puntige kiezen — voor vlees / alles." },
          ],
          theorie: "Cito-truc: dier = consument (altijd). Plant/alg = producent. Kiezen volgen dieet: planten → plooi, vlees → knobbel.",
          voorbeelden: [
            { type: "stap", tekst: "Plooi-kiezen-dieren: koe, paard, schaap, giraffe, olifant, neushoorn. Knobbel-kiezen-dieren: mens, varken, beer, hond, kat." },
            { type: "feit", tekst: "Giraffe is de langste landzoogdier (~5,5 m). Eet 30+ kg bladeren per dag. Plooikiezen vermalen bladeren langzaam — herkauwt zelfs." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Voorstel: zoogdier dat planten eet = herbivoor = plooikiezen. Vlees of mix = knobbel. Giraffe is herbivoor → plooi." }],
          niveaus: { basis: "Consument + plooikiezen. = B.", simpeler: "Giraffe eet bladeren (= herbivoor) = consument + plooikiezen. = B.", nogSimpeler: "B = consument plooikiezen." },
        },
      },
    ],
  },
];

const examenBiologie2025T2 = {
  id: "examen-biologie-2025-t2",
  title: "Examen oefenen — Biologie 2025 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "biologie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Biologie - eindexamen oefenen 2025-T2",
  intro:
    "6 echte examenvragen uit VMBO-GL/TL biologie 2025 tijdvak 2. Onderwerpen: meerling-kans (FSH), nageboorte-fase, geluid-waarneming grote hersenen, gal-functie emulgeren, zaadcel-route, giraffe consument+plooikiezen. Per vraag denkprikkel-hints, 3-niveau didactische uitleg + voorkennisKeten + doorklik naar bestaande concept-leerpaden.",
  triggerKeywords: [
    "examen biologie 2025 tijdvak 2", "echte examenvragen biologie",
    "meerling kans nederland", "fsh hormoon", "nageboorte placenta",
    "grote hersenen geluid", "gal emulgeren vetten",
    "zaadleider urinebuis", "giraffe plooikiezen", "consument producent",
  ],
  chapters,
  steps,
};

export default examenBiologie2025T2;
