// Leerpad: Examen-oefenpad Maatschappijkunde VMBO-GL/TL 2024 tijdvak 1
// 2026-05-14: 1e maatschappijkunde-examenpilot. Bron: examenblad.nl GT-1127-a-24-1.
// 5 MC-vragen geselecteerd uit 18 (selectie op zelfstandigheid + leerpadlink).
// Bron-afhankelijke vragen (verwijzing naar tekst 1-17) overgeslagen of
// licht herformuleerd om zelfstandig te zijn.

const chapters = [
  { letter: "A", title: "Politiek & democratie (V3, V8)", emoji: "🗳️", from: 0, to: 1 },
  { letter: "B", title: "Europese Unie (V12)", emoji: "🇪🇺", from: 2, to: 2 },
  { letter: "C", title: "Rechtsstaat & justitie (V17, V19)", emoji: "⚖️", from: 3, to: 4 },
];

const PDF_LINK = "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-1127-a-24-1-o-spr.pdf";
const BRON_LABEL = (v) => `🎓 Echt examen VMBO-GL/TL Maatschappijkunde 2024 tijdvak 1, vraag ${v}`;
const LEERPAD = { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat" };

const steps = [
  // ─── Vraag 3 — Recht van initiatief ────────────────────────
  {
    title: "Vraag 3 — Welk recht van de Tweede Kamer is dit?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2024 tijdvak 1, vraag 3.",
    emoji: "🎓",
    checks: [
      {
        q: "De Partij voor de Dieren roept op tot een nieuwe wet over dierenwelzijn. Dit past bij een recht van de Tweede Kamer. Welk recht is dat?",
        options: [
          "het recht om mondelinge en schriftelijke vragen te stellen",
          "het recht om moties in te dienen",
          "het recht van initiatief",
          "het recht van parlementair onderzoek",
        ],
        answer: 2,
        wrongHints: [
          "Vragenrecht = informeren ('hoe zit het met X?'). Niet het maken van nieuwe wetten.",
          "Moties = uitspraken/verzoeken aan de regering. Geen nieuwe wet maken.",
          null,
          "Onderzoeksrecht = onderzoek doen (enquêterecht), geen wet-voorstellen.",
        ],
        explanation: "Het **recht van initiatief** = het recht van Tweede Kamer-leden om zélf een wetsvoorstel in te dienen. Normaal komen wetten van de regering, maar Kamerleden mogen ook eigen wetten voorstellen (initiatiefwet). Bij oproepen tot een nieuwe wet is dit het juiste recht.",
        examenBron: BRON_LABEL(3),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'initiatief', 'motie', 'parlementair onderzoek', 'wetsvoorstel'" },
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "rechten van de Tweede Kamer — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "4 rechten van de Tweede Kamer", tekst: "1. **Vragenrecht** — Kamerleden mogen ministers vragen stellen.\n2. **Recht van motie** — uitspraak doen, regering om iets verzoeken.\n3. **Recht van initiatief** — zelf een wetsvoorstel indienen.\n4. **Recht van enquête / onderzoek** — diepgaand onderzoek doen naar iets." },
            { titel: "Wat doet de PvdD hier?", tekst: "Roept op tot een NIEUWE WET. Dat is precies wat het recht van initiatief is — niet vragen stellen, niet onderzoek doen, niet alleen een motie indienen, maar daadwerkelijk een wetsvoorstel inbrengen." },
          ],
          woorden: [
            { woord: "recht van initiatief", uitleg: "Kamerleden mogen zelf wetsvoorstellen indienen." },
            { woord: "motie", uitleg: "Uitspraak van de Kamer (geen wet)." },
            { woord: "vragenrecht", uitleg: "Recht om vragen te stellen aan regering." },
          ],
          theorie: "Cito-feit: nieuwe wetten komen meestal van de regering, maar via initiatiefrecht kan élke partij in de Tweede Kamer een eigen wet indienen. Bekend voorbeeld: initiatiefwet pulsvisserij (PvdD).",
          voorbeelden: [{ type: "stap", tekst: "GroenLinks dient initiatiefwet in voor afschaffing eigen risico zorg → recht van initiatief." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Wet maken = initiatief. Vraag stellen = vragenrecht. Onderzoeken = enquête. Verzoek doen = motie." }],
          niveaus: {
            basis: "Recht van initiatief. Antwoord C.",
            simpeler: "Een nieuw wetsvoorstel indienen kan de Kamer doen via het initiatiefrecht. De andere rechten gaan over vragen, moties of onderzoek. Antwoord C.",
            nogSimpeler: "Nieuwe wet = initiatief = C.",
          },
        },
      },
    ],
  },

  // ─── Vraag 8 — Staten-Generaal volksvertegenwoordigers ─────
  {
    title: "Vraag 8 — Hoe heten de leden van de Staten-Generaal?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2024 tijdvak 1, vraag 8.",
    emoji: "🎓",
    checks: [
      {
        q: "Hoe noemen we de groep mensen die in de Staten-Generaal namens de burgers de politieke besluiten neemt?",
        options: [
          "de regering",
          "het kabinet",
          "stemmers",
          "volksvertegenwoordigers",
        ],
        answer: 3,
        wrongHints: [
          "Regering = koning + ministers. Zit niet in de Staten-Generaal, maar regeert wel.",
          "Kabinet = alleen de ministers + staatssecretarissen. Werken vóór de regering, niet ín het parlement.",
          "Stemmers = burgers die stemmen tijdens verkiezingen — niet de gekozenen zelf.",
          null,
        ],
        explanation: "De **Staten-Generaal** = Eerste + Tweede Kamer samen. De leden zijn **volksvertegenwoordigers**: door het volk gekozen om namens hen besluiten te nemen. Daarom heet NL een vertegenwoordigende democratie.",
        examenBron: BRON_LABEL(8),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'Staten-Generaal', 'volksvertegenwoordiger', 'regering', 'kabinet'" },
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "verschil parlement / regering — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wie zit waar?", tekst: "**Staten-Generaal** = parlement = volksvertegenwoordigers (150 Tweede Kamer + 75 Eerste Kamer).\n**Regering** = koning + ministers, voert beleid uit.\n**Kabinet** = alleen de ministers + staatssecretarissen.\nVolksvertegenwoordigers controleren de regering." },
            { titel: "Waarom 'volksvertegenwoordiger'?", tekst: "Burgers (stemmers) kiezen elke 4 jaar wie hen vertegenwoordigt. Die gekozenen nemen namens het volk besluiten in het parlement. Dat is de essentie van een vertegenwoordigende democratie." },
          ],
          woorden: [
            { woord: "Staten-Generaal", uitleg: "Tweede Kamer + Eerste Kamer samen." },
            { woord: "volksvertegenwoordiger", uitleg: "Door volk gekozen lid van Eerste of Tweede Kamer." },
            { woord: "regering", uitleg: "Koning + ministers. Voert besluiten uit." },
          ],
          theorie: "Onthoud: parlement = volksvertegenwoordigers (gekozen). Regering = ministers (benoemd door koning na coalitie-akkoord).",
          voorbeelden: [{ type: "stap", tekst: "Mark Rutte zat als premier in de regering, NIET als volksvertegenwoordiger (zijn ministerschap was zijn rol). Geert Wilders was wel volksvertegenwoordiger in Tweede Kamer." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Parlement = volk-vertegenwoordigt. Regering = besluit + voert uit." }],
          niveaus: {
            basis: "Volksvertegenwoordigers. Antwoord D.",
            simpeler: "Staten-Generaal = parlement. Leden zijn door het volk gekozen = volksvertegenwoordigers. Antwoord D.",
            nogSimpeler: "Gekozen door volk = D.",
          },
        },
      },
    ],
  },

  // ─── Vraag 12 — EU-instelling toezicht ─────────────────────
  {
    title: "Vraag 12 — Welke EU-instelling houdt toezicht?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2024 tijdvak 1, vraag 12.",
    emoji: "🎓",
    checks: [
      {
        q: "Welke instelling van de Europese Unie moet erop toezien dat de lidstaten een EU-maatregel juist uitvoeren?",
        options: [
          "de Europese Commissie",
          "de Europese Raad",
          "de Raad van de Europese Unie",
          "het Europees Parlement",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Europese Raad = regeringsleiders van alle 27 lidstaten samen. Bepaalt grote lijnen, geen uitvoer-toezicht.",
          "Raad van de Europese Unie = ministers van lidstaten. Stemt over wetten samen met Parlement, geen toezicht.",
          "Europees Parlement = gekozen volksvertegenwoordigers. Controleert EU-Commissie, geen direct lidstaat-toezicht.",
        ],
        explanation: "De **Europese Commissie** is het 'dagelijks bestuur' van de EU. Heeft 27 commissarissen (1 per lidstaat). Stelt wetten voor, controleert of lidstaten regels uitvoeren, en kan lidstaten voor het Europees Hof slepen bij overtredingen. Zogenaamde 'hoeder van de verdragen'.",
        examenBron: BRON_LABEL(12),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'EU-Commissie', 'Europese Raad', 'EU-Parlement'" },
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "EU + NL — context van Europese instellingen" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "4 EU-instellingen om te onthouden", tekst: "**Europese Commissie** — dagelijks bestuur (27 commissarissen). Toezicht + wetsvoorstellen.\n**Europese Raad** — 27 regeringsleiders. Grote lijnen.\n**Raad van de EU** — 27 ministers per onderwerp. Stemmen over wetten.\n**Europees Parlement** — 705 gekozen leden. Stemmen samen met Raad over wetten." },
            { titel: "Wie doet toezicht?", tekst: "Europese **Commissie** is de 'hoeder van de verdragen'. Controleert of lidstaten Europese wetten correct uitvoeren. Kan een lidstaat een boete geven of voor het Europees Hof slepen." },
          ],
          woorden: [
            { woord: "Europese Commissie", uitleg: "Dagelijks bestuur EU. Toezicht + wetsinitiatief." },
            { woord: "Europese Raad", uitleg: "Regeringsleiders. Bepaalt strategie." },
            { woord: "Europees Parlement", uitleg: "Direct gekozen volksvertegenwoordigers." },
          ],
          theorie: "Onthoud: Commissie = uitvoer + toezicht. Europese Raad = strategie. Raad van de EU = ministers besluiten. Parlement = gekozenen besluiten.",
          voorbeelden: [
            { type: "stap", tekst: "NL ratificeert EU-wet niet binnen 2 jaar → Commissie stuurt eerst waarschuwing, dan boete." },
            { type: "stap", tekst: "Frans Timmermans was Eurocommissaris (lid van Europese Commissie) voor klimaat 2019-2023." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Commissie heeft 'commissarissen' — die houden TOEZICHT (zoals een commissaris in een bedrijf)." }],
          niveaus: {
            basis: "Europese Commissie. Antwoord A.",
            simpeler: "De Commissie is dagelijks bestuur EU + 'hoeder van verdragen' = doet toezicht op lidstaten. Antwoord A.",
            nogSimpeler: "Commissie = toezicht = A.",
          },
        },
      },
    ],
  },

  // ─── Vraag 17 — Hoger beroep ───────────────────────────────
  {
    title: "Vraag 17 — Hoe vonnis ongedaan maken?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2024 tijdvak 1, vraag 17.",
    emoji: "🎓",
    checks: [
      {
        q: "Stel: iemand is veroordeeld door de rechter maar is het oneens met het vonnis. Met welk recht kan deze persoon proberen het vonnis ongedaan te maken?",
        options: [
          "het recht om in hoger beroep te gaan",
          "het recht om te vragen om een schadevergoeding",
          "het recht om te weten waarvan zij of hij verdacht wordt",
          "het recht op een advocaat",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Schadevergoeding = compensatie voor schade. Maakt het vonnis NIET ongedaan.",
          "Recht om verdenking te kennen = bescherming TIJDENS proces. Niet om vonnis ongedaan te maken.",
          "Recht op advocaat = bijstand tijdens proces. Op zich verandert vonnis niet.",
        ],
        explanation: "Met **hoger beroep** vraag je een HOGERE rechter (gerechtshof) om de zaak opnieuw te bekijken. Dat hof kan het eerdere vonnis bevestigen, wijzigen of vernietigen. Dit is hét recht om een vonnis aan te vechten. De andere rechten zijn voor andere fasen (verhoor, proces).",
        examenBron: BRON_LABEL(17),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'vonnis', 'hoger beroep', 'rechter', 'advocaat'" },
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "rechtsstaat + rechten van verdachten — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Hoger beroep = nog een keer", tekst: "Als je het oneens bent met een vonnis van de rechtbank, kun je naar het **gerechtshof**. Dat hof bekijkt de zaak helemaal opnieuw. Mogelijke uitkomsten: 1) zelfde straf, 2) lichtere straf, 3) zwaardere straf, 4) vrijspraak." },
            { titel: "Andere rechten verwijst naar andere momenten", tekst: "**Schadevergoeding** = na onterechte vervolging.\n**Verdenking kennen** = bij arrestatie/verhoor.\n**Advocaat** = tijdens hele proces.\nAlleen hoger beroep verandert het VONNIS." },
            { titel: "Na hoger beroep → cassatie", tekst: "Nog hoger niveau: **Hoge Raad** (cassatie). Maar daar kijkt men alleen of de wet juist is toegepast, niet of feiten kloppen. Hoger beroep = inhoudelijke nieuwe behandeling." },
          ],
          woorden: [
            { woord: "vonnis", uitleg: "Uitspraak van de rechter." },
            { woord: "hoger beroep", uitleg: "Zaak opnieuw door hogere rechter laten beoordelen." },
            { woord: "gerechtshof", uitleg: "Rechter boven rechtbank — behandelt hoger beroep." },
            { woord: "cassatie", uitleg: "Hoogste niveau (Hoge Raad) — toetst wet-toepassing." },
          ],
          theorie: "**3 niveaus van rechtspraak NL:**\n1. Rechtbank (eerste behandeling)\n2. Gerechtshof (hoger beroep)\n3. Hoge Raad (cassatie)\n\nElk niveau heeft een eigen rol. Hoger beroep = beste manier om vonnis te bestrijden.",
          voorbeelden: [{ type: "stap", tekst: "Iemand wordt veroordeeld tot 3 jaar gevangenis maar vindt dit onterecht. Gaat in hoger beroep → hof oordeelt: vrijspraak. Of: strafverhoging. Of: strafverlaging." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Tegen vonnis? Hoger beroep. Tijdens proces? Advocaat. Bij arrestatie? Verdenking weten." }],
          niveaus: {
            basis: "Hoger beroep. Antwoord A.",
            simpeler: "Alleen hoger beroep (naar gerechtshof) kan een vonnis veranderen. Andere rechten gaan over andere fasen. Antwoord A.",
            nogSimpeler: "Vonnis aanvechten = hoger beroep = A.",
          },
        },
      },
    ],
  },

  // ─── Vraag 19 — Officier van justitie taak ─────────────────
  {
    title: "Vraag 19 — Welke taak heeft een officier van justitie?",
    explanation: "Echte examenvraag uit VMBO-GL/TL maatschappijkunde 2024 tijdvak 1, vraag 19.",
    emoji: "🎓",
    checks: [
      {
        q: "Bij een politieactie zijn officieren van justitie betrokken (via het Openbaar Ministerie). Welke taak van de officier van justitie wordt bij zo'n actie uitgevoerd?",
        options: [
          "het leidinggeven aan het opsporingsonderzoek",
          "het opleggen van strafbeschikkingen",
          "het optreden als openbaar aanklager in de rechtszaal",
          "het vervolgen van strafbare feiten",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Strafbeschikking opleggen = LATERE fase, na het onderzoek (bij lichte zaken).",
          "Optreden in rechtszaal = pas BIJ de zitting, niet tijdens politieactie zelf.",
          "Vervolgen = beslissing om iemand voor de rechter te brengen — gebeurt NA het opsporingsonderzoek.",
        ],
        explanation: "De **officier van justitie** heeft 4 hoofdtaken (uit elkaar te houden in tijd):\n1. **Leiding opsporingsonderzoek** — tijdens politieactie.\n2. **Vervolging beslissen** — wel/niet voor rechter brengen.\n3. **Strafbeschikking** — lichte zaak afdoen zonder rechter.\n4. **Optreden in rechtszaal** als openbaar aanklager.\nBij een **politieactie** zit je in fase 1 → leiding aan opsporing.",
        examenBron: BRON_LABEL(19),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD,
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'officier van justitie', 'Openbaar Ministerie', 'opsporing', 'vervolging'" },
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "rechtsstaat + Openbaar Ministerie — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "4 taken van een officier van justitie", tekst: "1. Leiding geven aan **opsporing** (samen met politie).\n2. Beslissen of iemand wordt **vervolgd**.\n3. Strafbeschikkingen opleggen (boete bij lichte zaken).\n4. Optreden als **openbaar aanklager** in rechtszaal." },
            { titel: "Welke taak past bij een politieactie?", tekst: "Politieactie = het OPSPORINGSDEEL van het strafrecht. De officier van justitie geeft daar leiding aan (zegt: 'doe een inval', 'arresteer', etc.). Andere taken komen LATER." },
            { titel: "Openbaar Ministerie (OM)", tekst: "Alle officieren van justitie samen vormen het **Openbaar Ministerie**. Onderdeel van rechterlijke macht maar uitvoerend. Beslissingen over vervolging hier vandaan." },
          ],
          woorden: [
            { woord: "officier van justitie", uitleg: "Werknemer van het OM — leidt opsporing + treedt op als aanklager." },
            { woord: "Openbaar Ministerie (OM)", uitleg: "Alle officieren samen — vervolgings-orgaan." },
            { woord: "opsporing", uitleg: "Politie + OM zoeken bewijs en daders." },
            { woord: "vervolging", uitleg: "Beslissing om iemand voor de rechter te brengen." },
          ],
          theorie: "Tijdlijn strafrechtelijk proces:\n1. Misdrijf → politie meldt aan OM.\n2. OFFICIER LEIDT opsporing.\n3. OM beslist: vervolgen of niet.\n4. Bij vervolging: officier wordt aanklager bij rechtbank.\n5. Rechter doet uitspraak.",
          voorbeelden: [{ type: "stap", tekst: "Drugsbende-inval: politie doet de inval, maar officier van justitie heeft tevoren de operatie goedgekeurd + leidt het hele opsporingsonderzoek." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Politieactie = opsporing-fase = leiding officier. Rechtszaal = aanklager-rol." }],
          niveaus: {
            basis: "Leiding aan opsporingsonderzoek. Antwoord A.",
            simpeler: "Tijdens een politieactie zit je in de OPSPORINGS-fase. De officier van justitie geeft leiding aan dat onderzoek (samen met politie). Antwoord A.",
            nogSimpeler: "Politieactie = opsporing leiden = A.",
          },
        },
      },
    ],
  },
];

const examenMaatschappijkunde2024T1 = {
  id: "examen-maatschappijkunde-2024-t1",
  title: "Examen oefenen — Maatschappijkunde 2024 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "maatschappijleer",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Maatschappijkunde - eindexamen oefenen 2024-T1",
  intro:
    "5 echte examenvragen uit het VMBO-GL/TL maatschappijkunde-examen 2024 tijdvak 1 (examen-id GT-1127-a-24-1). Per vraag de officiële antwoorden, denkprikkel-hints, inhoudelijke uitleg, en doorklik naar 'De Nederlandse staat'. Bron-tekst-afhankelijke vragen overgeslagen of licht herformuleerd om zelfstandig te zijn.",
  triggerKeywords: [
    "examen maatschappijkunde 2024", "echte examenvragen maatschappij",
    "recht van initiatief", "staten-generaal volksvertegenwoordigers",
    "europese commissie toezicht", "hoger beroep gerechtshof",
    "officier van justitie opsporing",
  ],
  chapters,
  steps,
};

export default examenMaatschappijkunde2024T1;
