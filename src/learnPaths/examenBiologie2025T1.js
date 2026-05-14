// Leerpad: Examen-oefenpad Biologie VMBO-GL/TL 2025 tijdvak 1
// 2026-05-14: 4e biologie-examenpilot. Bron: examenblad.nl GT-0191-a-25-1.
// 6 MC-vragen geselecteerd uit 13 MC's. Plaatje-afhankelijke vragen geskipt.
// PDF-corruptions handmatig gefixt.

const chapters = [
  { letter: "A", title: "Spijsvertering & hersenen (V11, V12)", emoji: "🍽️", from: 0, to: 1 },
  { letter: "B", title: "Huid & bloed (V16, V46)", emoji: "🩸", from: 2, to: 3 },
  { letter: "C", title: "Planten (V30)", emoji: "🌱", from: 4, to: 4 },
  { letter: "D", title: "Ecologie (V50)", emoji: "🦝", from: 5, to: 5 },
];

const PDF_LINK = "https://www.examenblad.nl/system/files/exam-document/2025-05/gt-0191-a-25-1-o.pdf";
const BRON_LABEL = (v) => `🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag ${v}`;

const steps = [
  // ─── Vraag 11 — Spierlaag bij trage maag ────────────────
  {
    title: "Vraag 11 — Welke maaglaag is minder actief?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2025 tijdvak 1, vraag 11.",
    emoji: "🎓",
    checks: [
      {
        q: "Welke laag is bij een trage maag minder actief waardoor er minder peristaltiek plaatsvindt?",
        options: [
          "de slijmvlieslaag",
          "de bindweefsellaag",
          "de spierlaag",
        ],
        answer: 2,
        wrongHints: [
          "Slijmvlieslaag = binnenste laag die maagsap maakt. Doet niet aan beweging.",
          "Bindweefsel = stevigheid + bloedvaten. Geen actieve beweging.",
          null,
        ],
        explanation: "**Peristaltiek** = golfbeweging van spieren in maag/darmwand die voedsel voortduwt. Wordt veroorzaakt door de **spierlaag**. Bij een trage maag is de spierlaag minder actief → minder peristaltiek → voedsel blijft langer in de maag.",
        examenBron: BRON_LABEL(11),
        bronLink: PDF_LINK,
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'peristaltiek', 'spierlaag', 'slijmvlies', 'bindweefsel'" },
          { id: "mens-biologie-vmbo", title: "Mens-biologie — spijsvertering", niveau: "vmbo-2", why: "maag-anatomie + peristaltiek — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "3 lagen van de maagwand", tekst: "Van binnen naar buiten:\n• **Slijmvlieslaag** — maakt maagzuur + pepsine\n• **Bindweefsellaag** — bloedvaten + stevigheid\n• **Spierlaag** — peristaltiek (knijp-golven)" },
            { titel: "Peristaltiek = spierwerking", tekst: "Spierlaag knijpt ritmisch samen → voedsel wordt geknepen + gemengd + naar darm geduwd. Minder actief = trage maag = vol-gevoel." },
          ],
          woorden: [
            { woord: "peristaltiek", uitleg: "Knijp-golf van spieren door spijsverteringsbuis." },
            { woord: "spierlaag", uitleg: "Middenste laag van maagwand — verantwoordelijk voor beweging." },
          ],
          theorie: "Onthoud: beweging = spier. Spierlaag = wat maag voedsel laat verwerken + doorgeven.",
          voorbeelden: [{ type: "stap", tekst: "Vol-gevoel uren na maaltijd? Trage maag → spierlaag werkt minder snel." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Spier = beweging. Slijmvlies = maakt sap. Bindweefsel = stevig." }],
          niveaus: {
            basis: "Spierlaag. Antwoord C.",
            simpeler: "Peristaltiek is de knijp-beweging van spieren. Minder actief = spierlaag werkt minder = trage maag. Antwoord C.",
            nogSimpeler: "Spierlaag = C.",
          },
        },
      },
    ],
  },

  // ─── Vraag 12 — Vol-gevoel in grote hersenen ───────────────
  {
    title: "Vraag 12 — Waar voel je je vol?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2025 tijdvak 1, vraag 12.",
    emoji: "🎓",
    checks: [
      {
        q: "Carola voelt zich door haar trage maag altijd vol. In welk deel van de hersenen vindt bewustwording van haar volle maag plaats?",
        options: [
          "in de grote hersenen",
          "in de kleine hersenen",
          "in de hersenstam",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kleine hersenen = balans + coördinatie, geen bewust voelen.",
          "Hersenstam = onbewuste functies (ademen, hartslag).",
        ],
        explanation: "Alle bewust voelen, zien, horen, ruiken, proeven = grote hersenen (cortex). Een vol gevoel is BEWUST → grote hersenen.",
        examenBron: BRON_LABEL(12),
        bronLink: PDF_LINK,
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'bewustwording', 'grote/kleine hersenen', 'hersenstam'" },
          { id: "mens-biologie-vmbo", title: "Mens-biologie — zenuwstelsel", niveau: "vmbo-2", why: "hersenen-onderdelen + functies — kern van deze vraag" },
        ],
      },
    ],
  },

  // ─── Vraag 16 — Volgorde huidlagen ─────────────────────────
  {
    title: "Vraag 16 — Volgorde huidlagen bij prikken",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2025 tijdvak 1, vraag 16.",
    emoji: "🎓",
    checks: [
      {
        q: "Om een bloedvat te bereiken, prikt de hoofdluis door lagen van de huid. In welke volgorde gebeurt dat?",
        options: [
          "hoornlaag → kiemlaag → lederhuid",
          "hoornlaag → lederhuid → kiemlaag",
          "kiemlaag → hoornlaag → lederhuid",
          "kiemlaag → lederhuid → hoornlaag",
          "lederhuid → hoornlaag → kiemlaag",
          "lederhuid → kiemlaag → hoornlaag",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kiemlaag ligt VÓÓR lederhuid (kiemlaag is onderkant opperhuid, lederhuid komt daarna).",
          "Hoornlaag is buitenste — niet kiemlaag.",
          "Hoornlaag staat buitenste, niet kiemlaag.",
          "Hoornlaag staat buitenste, niet lederhuid (lederhuid ligt dieper).",
          "Hoornlaag staat buitenste, niet lederhuid.",
        ],
        explanation: "De huid heeft van **buiten naar binnen**: **hoornlaag** (dode cellen, bescherming) → **kiemlaag** (levende delende cellen) → **lederhuid** (bloedvaten + haarwortels). Een hoofdluis moet door alle drie om bij een bloedvat te komen.",
        examenBron: BRON_LABEL(16),
        bronLink: PDF_LINK,
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'hoornlaag', 'kiemlaag', 'lederhuid'" },
          { id: "mens-biologie-vmbo", title: "Mens-biologie", niveau: "vmbo-2", why: "huidlagen + uitscheiding — opfris" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Volgorde buiten → binnen", tekst: "1. **Hoornlaag** (dode cellen, top)\n2. **Kiemlaag** (levende cellen, deelt zich + pigmentcellen)\n3. **Lederhuid** (bloedvaten, haarwortels, zweetklieren)\n4. Onderhuids bindweefsel (vet, isolatie)\n\nLaag 1+2 samen = opperhuid. Laag 3+4 = de rest." },
            { titel: "Waarom deze volgorde?", tekst: "Hoornlaag = bovenste barrière. Kiemlaag eronder = waar groei + pigment plaatsvindt. Lederhuid = waar bloedvaten zitten — luis moet door 1 en 2 voordat 'ie bij bloed komt." },
          ],
          woorden: [
            { woord: "hoornlaag", uitleg: "Bovenste dode laag van opperhuid." },
            { woord: "kiemlaag", uitleg: "Onderste levende laag van opperhuid — deelt zich + maakt pigment." },
            { woord: "lederhuid", uitleg: "Diepere laag met bloedvaten + haarwortels + zweetklieren." },
          ],
          theorie: "Onthoud: hoornlaag = TOP. Lederhuid = beneden (waar bloed is). Kiemlaag = ertussen.",
          voorbeelden: [{ type: "stap", tekst: "Schraap je opperhuid kapot → geen bloed (zit nog in opperhuid). Snij door → wel bloed (bereikt lederhuid)." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Volgorde van prikken: door dode laag → levende laag → bloed." }],
          niveaus: {
            basis: "Hoornlaag → kiemlaag → lederhuid. Antwoord A.",
            simpeler: "Buitenste = hoornlaag (dood). Daaronder = kiemlaag (levend). Daaronder = lederhuid (met bloedvaten). Luis prikt door in die volgorde. Antwoord A.",
            nogSimpeler: "Hoorn → kiem → leder = A.",
          },
        },
      },
    ],
  },

  // ─── Vraag 46 — Virus-route door bloedvaten ────────────────
  {
    title: "Vraag 46 — Hoe komt virus van long naar kop?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2025 tijdvak 1, vraag 46.",
    emoji: "🎓",
    checks: [
      {
        q: "Een virus kan na inademing via een longblaasje opgenomen worden in het bloed en gaat daarna via de kortste weg naar de kop van het konijn. In welke volgorde gaat het virus door de bloedvaten?",
        options: [
          "longader → aorta → halsader",
          "longader → aorta → halsslagader",
          "longslagader → aorta → halsader",
          "longslagader → aorta → halsslagader",
        ],
        answer: 1,
        wrongHints: [
          "Bijna goed — maar halsADER brengt bloed TERUG naar het hart, niet naar de kop.",
          null,
          "Longslagader gaat FROM hart naar longen (met arm bloed) — niet vanuit longen.",
          "Longslagader gaat van hart naar longen, niet andersom.",
        ],
        explanation: "Vanuit longblaasje gaat zuurstofrijk bloed via **longader** terug naar het hart (linker harthelft). Hart pompt het via de **aorta** (grote slagader) richting lichaam. Naar de kop gaat het via een **halsslagader** (slagader = van hart weg). Een halsader zou bloed terug naar het hart brengen, niet ernaartoe.",
        examenBron: BRON_LABEL(46),
        bronLink: PDF_LINK,
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'longader', 'aorta', 'halsslagader', 'halsader'" },
          { id: "mens-biologie-vmbo", title: "Mens-biologie — bloed", niveau: "vmbo-2", why: "bloedsomloop + slagader vs ader — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Slagader vs ader", tekst: "**Slagader** = AF van hart (bloed naar lichaam toe).\n**Ader** = TERUG naar hart.\n\nDoor de namen heen kun je dus de richting weten. Halsslagader = van hart naar kop. Halsader = van kop terug naar hart." },
            { titel: "Route na long-opname", tekst: "Longblaasje → **longader** (terug naar hart, met zuurstof) → linker hartkamer → **aorta** (de grote slagader uit hart) → **halsslagader** (afgeleid van aorta, naar de kop)." },
            { titel: "Verschil longader / longslagader", tekst: "**LongSLAGader** = FROM hart NAAR longen (met arm bloed, om O₂ op te pikken).\n**Longader** = van longen TERUG naar hart (met rijk bloed). Deze 2 zijn uitzonderingen op de norm 'slagader heeft zuurstofrijk bloed'." },
          ],
          woorden: [
            { woord: "longader", uitleg: "Brengt zuurstofRIJK bloed van longen terug naar hart." },
            { woord: "longslagader", uitleg: "Brengt zuurstofARM bloed van hart naar longen." },
            { woord: "aorta", uitleg: "Grootste slagader — komt uit linker hartkamer, vertakt zich naar lichaam." },
            { woord: "halsslagader", uitleg: "Slagader vanaf aorta richting hoofd." },
          ],
          theorie: "**Onthoud volgorde**: long → longader → hart → aorta → halsslagader → hoofd.\nKortste weg van longblaasje naar kop = 3 vaten + door hart heen.",
          voorbeelden: [{ type: "stap", tekst: "Voel je hartslag op nek = halsslagader klopt. Aan binnenkant pols = polsslagader." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "SLAGader = AF (van hart). Onthoud die regel — werkt voor 95% van bloedvaten." }],
          niveaus: {
            basis: "Longader → aorta → halsslagader. Antwoord B.",
            simpeler: "Vanuit longblaasje gaat bloed via longader naar hart. Hart pompt door aorta. Aftakking naar kop = halsSLAGader (= weg van hart). Antwoord B.",
            nogSimpeler: "Long → hart → kop via slagader = B.",
          },
        },
      },
    ],
  },

  // ─── Vraag 30 — Wortelcellen zuurstof dag + nacht ──────────
  {
    title: "Vraag 30 — Wanneer hebben wortelcellen zuurstof nodig?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2025 tijdvak 1, vraag 30.",
    emoji: "🎓",
    checks: [
      {
        q: "Op welke momenten van de dag hebben de wortelcellen zuurstof nodig?",
        options: [
          "alleen overdag",
          "alleen 's nachts",
          "overdag en 's nachts",
        ],
        answer: 2,
        wrongHints: [
          "Wortelcellen ademen 24/7, niet alleen overdag.",
          "Cellulaire ademhaling stopt nooit — niet alleen 's nachts.",
          null,
        ],
        explanation: "Alle levende cellen (ook wortelcellen) doen aan **cellulaire ademhaling**: ze verbranden glucose + zuurstof voor energie. Dit gebeurt 24/7, dag én nacht. Fotosynthese gebeurt alleen overdag (vereist licht), maar ademhaling stopt nooit.",
        examenBron: BRON_LABEL(30),
        bronLink: PDF_LINK,
        leerpadLink: { id: "fotosynthese-biologie", title: "Fotosynthese & plantenleven" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'fotosynthese', 'ademhaling', 'wortelcellen'" },
          { id: "fotosynthese-biologie", title: "Fotosynthese", niveau: "vmbo-2", why: "verschil fotosynthese ↔ cellulaire ademhaling — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "2 processen — niet verwarren", tekst: "**Fotosynthese**: alleen overdag (licht nodig). Gebeurt in bladcellen met bladgroenkorrels. CO₂ + H₂O + licht → glucose + O₂.\n**Cellulaire ademhaling**: ALTIJD (24/7). Gebeurt in alle levende cellen. Glucose + O₂ → CO₂ + H₂O + energie." },
            { titel: "Wortels hebben geen bladgroen", tekst: "Wortels doen GEEN fotosynthese (geen licht, geen bladgroenkorrels). Maar wel ademhaling — net als alle cellen. Daarom 24/7 zuurstof nodig." },
            { titel: "Waarom planten 's nachts CO₂ uitstoten", tekst: "Overdag: fotosynthese > ademhaling → plant neemt netto O₂ op, geeft CO₂. 's Nachts: alleen ademhaling → CO₂ uitstoot. Wortels stoten altijd CO₂ uit." },
          ],
          woorden: [
            { woord: "cellulaire ademhaling", uitleg: "Verbranding van glucose + zuurstof voor energie. Gebeurt in elke cel, altijd." },
            { woord: "fotosynthese", uitleg: "Bladcellen maken glucose uit CO₂ + H₂O + licht. Alleen overdag." },
          ],
          theorie: "Onthoud: alle cellen ademen 24/7. Alleen bladcellen doen daarnaast fotosynthese (overdag).",
          voorbeelden: [{ type: "stap", tekst: "Te natte grond → wortels verstikken (geen zuurstof) → plant gaat dood. Toont aan dat wortels constant O₂ nodig hebben." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Foto-synthese = LICHT-maken (alleen overdag). Ademhaling = altijd." }],
          niveaus: {
            basis: "Overdag en 's nachts. Antwoord C.",
            simpeler: "Alle levende cellen ademen 24/7 — ook wortelcellen. Fotosynthese is iets anders (alleen overdag, alleen in bladeren). Antwoord C.",
            nogSimpeler: "Altijd = C.",
          },
        },
      },
    ],
  },

  // ─── Vraag 50 — Vingerdier = consument ─────────────────────
  {
    title: "Vraag 50 — Vingerdier: consument, producent of reducent?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2025 tijdvak 1, vraag 50.",
    emoji: "🎓",
    checks: [
      {
        q: "Is het vingerdier een consument, een producent of een reducent?",
        options: [
          "een consument",
          "een producent",
          "een reducent",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Producent = plant of alg (maakt zelf voedsel via fotosynthese). Vingerdier is een dier, eet larven.",
          "Reducent = afbreker (schimmel, bacterie die dood materiaal afbreekt). Een dier dat eet = consument.",
        ],
        explanation: "Een **vingerdier** is een primaat uit Madagaskar die larven eet. Dieren die andere organismen (planten of dieren) eten = **consumenten**. Producenten = planten/algen (fotosynthese). Reducenten = schimmels/bacteriën (afbraak van dood materiaal).",
        examenBron: BRON_LABEL(50),
        bronLink: PDF_LINK,
        leerpadLink: { id: "ecosystemen-biologie", title: "Ecosystemen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'consument', 'producent', 'reducent'" },
          { id: "ecosystemen-biologie", title: "Ecosystemen", niveau: "vmbo-2", why: "rollen in voedselketen — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "3 rollen in ecosysteem", tekst: "**Producent** = maakt eigen voedsel (plant, alg, sommige bacteriën via fotosynthese).\n**Consument** = eet andere organismen (alle dieren). Onderverdeeld in herbivoor / carnivoor / omnivoor.\n**Reducent** (= afbreker) = breekt dood materiaal af (schimmels, bacteriën). Geeft mineralen terug aan bodem." },
            { titel: "Welke is een vingerdier?", tekst: "Een vingerdier is een DIER (primaat). Eet larven en vruchten = eet andere organismen = CONSUMENT. Specifiek: omnivoor (eet zowel plantaardig als dierlijk)." },
          ],
          woorden: [
            { woord: "consument", uitleg: "Organisme dat andere organismen eet (= alle dieren)." },
            { woord: "producent", uitleg: "Organisme dat zelf voedsel maakt (= planten + algen)." },
            { woord: "reducent", uitleg: "Afbreker van dood materiaal (= schimmels + bacteriën)." },
          ],
          theorie: "**Test**: kan het zelf voedsel maken via fotosynthese? Plant = ja (producent). Dier = nee, moet eten (consument). Schimmel = nee, breekt dood af (reducent).",
          voorbeelden: [
            { type: "stap", tekst: "Boom = producent. Hert eet boom = consument. Wolf eet hert = consument (carnivoor). Schimmel op dode wolf = reducent." },
            { type: "stap", tekst: "Vingerdier op Madagaskar pikt larven uit boomschors → eet andere organismen → consument." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Alle DIEREN zijn consumenten (eten iets). Alle PLANTEN zijn producenten. SCHIMMELS = reducenten." }],
          niveaus: {
            basis: "Consument. Antwoord A.",
            simpeler: "Vingerdier eet larven = eet andere organismen = consument. Antwoord A.",
            nogSimpeler: "Eet andere = consument = A.",
          },
        },
      },
    ],
  },
];

const examenBiologie2025T1 = {
  id: "examen-biologie-2025-t1",
  title: "Examen oefenen — Biologie 2025 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "biologie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Biologie - eindexamen oefenen 2025-T1",
  intro:
    "6 echte examenvragen uit het VMBO-GL/TL biologie-examen 2025 tijdvak 1 (examen-id GT-0191-a-25-1). Per vraag officiële antwoorden, denkprikkel-hints, inhoudelijke uitleg, en doorklik naar bestaande biologie-leerpaden. Plaatje-afhankelijke + open vragen overgeslagen.",
  triggerKeywords: [
    "examen biologie 2025", "echte examenvragen biologie",
    "trage maag peristaltiek spierlaag", "bewustwording grote hersenen",
    "huid hoornlaag kiemlaag lederhuid", "longader aorta halsslagader",
    "wortelcellen zuurstof ademhaling", "consument producent reducent",
  ],
  chapters,
  steps,
};

export default examenBiologie2025T1;
