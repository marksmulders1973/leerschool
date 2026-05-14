// Leerpad: Examen-oefenpad Biologie VMBO-GL/TL 2023 tijdvak 1
// 2026-05-14: 3e biologie-examenpilot. Bron: examenblad.nl GT-0191-a-23-1.
// 5 MC-vragen geselecteerd uit 13 MC's (selectie op zelfstandigheid +
// leerpad-koppeling). Plaatje-afhankelijke vragen + open vragen overgeslagen.
// PDF-corruptions handmatig gefixt.

const chapters = [
  { letter: "A", title: "Gedrag (V11)", emoji: "🐦", from: 0, to: 0 },
  { letter: "B", title: "Hormonen & voortplanting (V22, V38)", emoji: "🧪", from: 1, to: 2 },
  { letter: "C", title: "Erfelijkheid (V34)", emoji: "🧬", from: 3, to: 3 },
  { letter: "D", title: "Lichaam — huid (V42)", emoji: "🫀", from: 4, to: 4 },
];

const PDF_LINK = "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-23-1-o.pdf";
const BRON_LABEL = (v) => `🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag ${v}`;

const steps = [
  // ─── Vraag 11 — Ethogram ───────────────────────────────────
  {
    title: "Vraag 11 — Gedragstabel: ethogram",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2023 tijdvak 1, vraag 11.",
    emoji: "🎓",
    checks: [
      {
        q: "Een bioloog observeert dieren en noteert in een tabel welke gedragingen zij vertonen, met een korte beschrijving van elk gedrag. Wat is de naam van zo'n tabel met beschrijvingen van gedragingen?",
        options: [
          "ethogram",
          "practicum",
          "protocol",
          "veldwaarneming",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Practicum = een proefje doen — niet een tabel met gedragsbeschrijvingen.",
          "Protocol = werkvoorschrift (hoe je iets doet) — niet een gedragslijst.",
          "Veldwaarneming = de OBSERVATIE zelf (in de natuur kijken), niet de tabel waarin je het noteert.",
        ],
        explanation: "Een **ethogram** is een lijst/tabel met beschrijvingen van alle gedragingen die een dier vertoont. Het is een standaardwerktuig in gedragsbiologie: voor elke gedraging een naam + korte beschrijving. Daarna kun je tellen + meten welk gedrag wanneer voorkomt.",
        examenBron: BRON_LABEL(11),
        bronLink: PDF_LINK,
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'ethogram', 'protocol', 'practicum', 'veldwaarneming'" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Ethogram = gedragslijst", tekst: "**Ethogram** komt van Grieks 'ethos' (gewoonte/gedrag) + 'gram' (geschreven). Letterlijk: een geschreven overzicht van gedrag. Biologen gebruiken het om systematisch te observeren." },
            { titel: "Verschil met de andere drie", tekst: "**Protocol** = stappenplan (eerst dit, dan dat). **Practicum** = uitvoeren van een onderzoek/proef. **Veldwaarneming** = het kijken in de natuur (de activiteit, niet de tabel)." },
          ],
          woorden: [
            { woord: "ethogram", uitleg: "Tabel met beschrijvingen van gedragingen van een dier." },
            { woord: "protocol", uitleg: "Werkvoorschrift — stappen om iets uit te voeren." },
          ],
          theorie: "Onthoud: ethogram = gedrags-lijst. Komt op examen vaak voor bij gedragsbiologie-vragen.",
          voorbeelden: [{ type: "stap", tekst: "Ethogram van een wulp kan bv. zijn: 'pikken' (snavel in modder), 'rusten' (geen beweging), 'vliegen', 'roepen'. Per gedrag een korte beschrijving." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Etho-gram = geschreven gedrag." }],
          niveaus: {
            basis: "Ethogram. Antwoord A.",
            simpeler: "Een ethogram is een tabel waarin een bioloog gedragingen van dieren beschrijft. Antwoord A.",
            nogSimpeler: "Ethogram = A.",
          },
        },
      },
    ],
  },

  // ─── Vraag 22 — Adrenaline → bijnieren ─────────────────────
  {
    title: "Vraag 22 — Welke klier maakt adrenaline?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2023 tijdvak 1, vraag 22.",
    emoji: "🎓",
    checks: [
      {
        q: "Adrenaline wordt ook in het lichaam gemaakt. Door welke hormoonklier wordt adrenaline gemaakt?",
        options: [
          "door de alvleesklier",
          "door de bijnieren",
          "door de hypofyse",
          "door de schildklier",
        ],
        answer: 1,
        wrongHints: [
          "Alvleesklier maakt INSULINE + glucagon (bloedsuiker-regulatie), geen adrenaline.",
          null,
          "Hypofyse = 'meester-klier' die andere klieren aanstuurt, maakt geen adrenaline zelf.",
          "Schildklier maakt schildklierhormoon (T3/T4, voor verbranding), geen adrenaline.",
        ],
        explanation: "Adrenaline wordt gemaakt door het **bijniermerg** (binnenste deel van de bijnieren — kleine klieren bovenop de nieren). Bij stress/spanning: bijnieren spuiten adrenaline in het bloed → hart sneller, ademhaling sneller, pupillen wijder. 'Vechten of vluchten'-respons.",
        examenBron: BRON_LABEL(22),
        bronLink: PDF_LINK,
        leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Voortplanting & hormonen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'hormoonklier', 'adrenaline', 'alvleesklier', 'bijnier'" },
          { id: "voortplanting-hormonen-biologie", title: "Voortplanting & hormonen", niveau: "vmbo-2", why: "overzicht hormoonklieren + hun functies — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welke klier maakt wat?", tekst: "**Bijnieren** (boven nieren): adrenaline + cortisol (stress).\n**Alvleesklier**: insuline + glucagon (bloedsuiker).\n**Hypofyse**: stuur-hormonen voor andere klieren.\n**Schildklier**: T3/T4 (verbranding/energie)." },
            { titel: "Wat doet adrenaline?", tekst: "Adrenaline = 'vechten of vluchten'-hormoon. Komt vrij bij stress, gevaar, spanning. Effecten: hartslag omhoog, ademhaling sneller, pupillen wijd, suiker-niveau in bloed omhoog. Lichaam klaar voor actie." },
          ],
          woorden: [
            { woord: "bijnier", uitleg: "Driehoekige klier bovenop elke nier — maakt adrenaline + cortisol." },
            { woord: "adrenaline", uitleg: "Stress-hormoon dat lichaam klaarmaakt voor actie." },
          ],
          theorie: "Onthoud: bijnier = adrenaline. Adrenaline = vechten of vluchten.",
          voorbeelden: [{ type: "stap", tekst: "Plots harde knal → adrenaline-shot → hart bonkt, klaar om te rennen." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "BIJ-nier ligt BIJ de nier. Adrenaline komt vanaf daar." }],
          niveaus: {
            basis: "Bijnieren. Antwoord B.",
            simpeler: "Adrenaline komt uit de bijnieren (boven de nieren). Bij stress: bijnier knijpt → adrenaline in bloed → vechten of vluchten. Antwoord B.",
            nogSimpeler: "Bijnier = B.",
          },
        },
      },
    ],
  },

  // ─── Vraag 38 — Primair/secundair geslachtskenmerken ──────
  {
    title: "Vraag 38 — Vrouwelijke hormonen op primair of secundair?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2023 tijdvak 1, vraag 38.",
    emoji: "🎓",
    checks: [
      {
        q: "Heeft een behandeling met vrouwelijke geslachtshormonen invloed op de primaire of op de secundaire geslachtskenmerken?",
        options: [
          "alleen op de primaire geslachtskenmerken",
          "alleen op de secundaire geslachtskenmerken",
          "op de primaire en op de secundaire geslachtskenmerken",
        ],
        answer: 1,
        wrongHints: [
          "Primaire kenmerken = de geslachtsorganen waarmee je geboren bent — hormonen veranderen die NIET.",
          null,
          "Niet beide — primaire kenmerken zijn aangeboren en veranderen niet door hormonen.",
        ],
        explanation: "**Primaire** geslachtskenmerken = de organen zelf (penis/testikels of vagina/baarmoeder) — aangeboren, veranderen niet. **Secundaire** = uiterlijke kenmerken die in de puberteit ontstaan onder invloed van hormonen (borstgroei, beharing, stem). Een behandeling met vrouwelijke hormonen (oestrogeen) raakt dus alleen de SECUNDAIRE kenmerken (zoals borstvorming, vetverdeling).",
        examenBron: BRON_LABEL(38),
        bronLink: PDF_LINK,
        leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Voortplanting & hormonen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'primair', 'secundair', 'geslachtskenmerk'" },
          { id: "voortplanting-hormonen-biologie", title: "Voortplanting & hormonen", niveau: "vmbo-3", why: "puberteit + hormonen + kenmerken — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Primair vs secundair", tekst: "**Primaire** = aangeboren geslachtsorganen (penis/vagina + inwendige delen). Vast vanaf geboorte.\n**Secundaire** = uiterlijke kenmerken die pas in puberteit komen door hormoon-actie (borstgroei, schaamhaar, baardgroei, lage/hoge stem)." },
            { titel: "Hormonen veranderen alleen secundair", tekst: "Oestrogeen + testosteron beïnvloeden de SECUNDAIRE kenmerken. Operatie kan primaire wel veranderen, maar hormoon-behandeling alleen secundair." },
          ],
          woorden: [
            { woord: "primaire geslachtskenmerken", uitleg: "Aangeboren geslachtsorganen." },
            { woord: "secundaire geslachtskenmerken", uitleg: "Uiterlijke kenmerken die in puberteit verschijnen door hormonen." },
          ],
          theorie: "Onthoud: PRImair = bij geboorte aanwezig (PRImitief = eerst). Secundair = komt later (na puberteit) door hormonen.",
          voorbeelden: [{ type: "stap", tekst: "Trans-vrouw die oestrogeen krijgt: borsten + vetverdeling veranderen (secundair). Penis blijft (primair, alleen operatie verandert dat)." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Hormoon = secundair. Operatie = primair." }],
          niveaus: {
            basis: "Alleen secundaire kenmerken. Antwoord B.",
            simpeler: "Hormonen veranderen uiterlijke (secundaire) kenmerken zoals borsten en vetverdeling. Geboren-mee (primaire) organen veranderen niet door hormonen. Antwoord B.",
            nogSimpeler: "Secundair = B.",
          },
        },
      },
    ],
  },

  // ─── Vraag 34 — Mutaties: Finn + Ilse ──────────────────────
  {
    title: "Vraag 34 — Mutaties: wie heeft gelijk?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2023 tijdvak 1, vraag 34.",
    emoji: "🎓",
    checks: [
      {
        q: "Het foute stukje DNA is ontstaan door een mutatie. Finn en Ilse praten over mutaties. Finn zegt dat een mutatie kan ontstaan door radio-actieve straling. Ilse zegt dat mutaties alleen ontstaan in geslachtscellen. Wie heeft gelijk?",
        options: [
          "Alleen Finn heeft gelijk.",
          "Alleen Ilse heeft gelijk.",
          "Finn heeft gelijk en Ilse heeft gelijk.",
          "Geen van beiden heeft gelijk.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Ilse heeft het mis: mutaties ontstaan in ELKE cel, niet alleen geslachtscellen (UV op huid → huidkanker bv.).",
          "Ilse heeft het mis — mutaties zijn er overal in het lichaam, niet alleen in geslachtscellen.",
          "Finn heeft het wél correct — radio-actieve straling kan zeker DNA beschadigen.",
        ],
        explanation: "Finn: KLOPT. Straling (UV, röntgen, radioactief) is een bekende oorzaak van DNA-mutaties. Ook chemicaliën + virussen + toeval. Ilse: KLOPT NIET. Mutaties ontstaan in ELKE cel waar DNA inzit (lichaamscellen + geslachtscellen). Alleen mutaties in GESLACHTSCELLEN worden doorgegeven aan kinderen. Mutaties in andere cellen blijven in dat individu (bv. huidkanker uit zonneschade).",
        examenBron: BRON_LABEL(34),
        bronLink: PDF_LINK,
        leerpadLink: { id: "genetica-erfelijkheid-biologie", title: "Genetica & erfelijkheid" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'mutatie', 'DNA', 'geslachtscel', 'straling'" },
          { id: "genetica-erfelijkheid-biologie", title: "Genetica & erfelijkheid", niveau: "vmbo-3", why: "mutaties + waar ze voorkomen + gevolgen — kern van deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Oorzaken van mutaties", tekst: "Mutaties (DNA-veranderingen) kunnen ontstaan door:\n• Straling (UV, röntgen, radioactief)\n• Chemicaliën (rook, kanker-verwekkers)\n• Virussen die DNA wijzigen\n• Toeval bij celdeling (kopieer-fouten)\n\nDus Finn klopt: straling is een oorzaak." },
            { titel: "Waar ontstaan mutaties?", tekst: "In ELKE cel met DNA — dus lichaamscellen ÉN geslachtscellen. Voorbeeld: UV-straling op huid → mutatie in huidcellen → kan huidkanker veroorzaken. Ilse zegt 'alleen geslachtscellen' — dat klopt NIET." },
            { titel: "Verschil: doorgeven of niet", tekst: "Mutatie in lichaamscel = blijft in dat individu (kan ziekte/kanker veroorzaken). Mutatie in geslachtscel = wordt doorgegeven aan kinderen (verandert nakomelingen). Beide ontstaan dus, alleen het gevolg verschilt." },
          ],
          woorden: [
            { woord: "mutatie", uitleg: "Verandering in DNA — kan spontaan of door externe oorzaak." },
            { woord: "lichaamscel", uitleg: "Elke cel behalve geslachtscel (sperma/eicel)." },
            { woord: "geslachtscel", uitleg: "Sperma of eicel — heeft de helft DNA." },
          ],
          theorie: "Onthoud: mutaties komen in elke cel voor. Alleen mutaties in geslachtscellen worden doorgegeven.",
          voorbeelden: [{ type: "stap", tekst: "UV-straling → huidmutatie → huidkanker (in lichaamscel, niet doorgegeven). Mutatie in zaadcel vader → kind met die mutatie." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Mutatie kan OVERAL in elke cel. Doorgeven kan ALLEEN via geslachtscel." }],
          niveaus: {
            basis: "Alleen Finn. Antwoord A.",
            simpeler: "Finn (straling kan mutatie veroorzaken): KLOPT. Ilse (alleen in geslachtscellen): KLOPT NIET — mutaties zijn er in elke cel. Antwoord A.",
            nogSimpeler: "Finn ja, Ilse nee = A.",
          },
        },
      },
    ],
  },

  // ─── Vraag 42 — Pigmentcellen in kiemlaag ──────────────────
  {
    title: "Vraag 42 — Waar zitten pigmentcellen?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2023 tijdvak 1, vraag 42.",
    emoji: "🎓",
    checks: [
      {
        q: "Hoe heet het gedeelte van de huid waarin de pigmentcellen worden gemaakt?",
        options: [
          "hoornlaag",
          "kiemlaag",
          "lederhuid",
          "onderhuids bindweefsel",
        ],
        answer: 1,
        wrongHints: [
          "Hoornlaag = buitenste laag van dode cellen — daar worden geen nieuwe cellen gemaakt.",
          null,
          "Lederhuid = de bindweefsel-laag onder de opperhuid — bevat haarwortels + zweetklieren, geen pigmentcellen.",
          "Onderhuids bindweefsel = vetlaag onderin — geen pigment-productie.",
        ],
        explanation: "Pigmentcellen (**melanocyten**) zitten in de **kiemlaag** (de onderste, levende laag van de opperhuid). Daar maken ze melanine (bruin pigment) dat de cellen erboven kleur geeft + tegen UV beschermt. Bij blootstelling aan zon: meer melanine → bruin worden.",
        examenBron: BRON_LABEL(42),
        bronLink: PDF_LINK,
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'pigment', 'huidlaag', 'hoornlaag', 'lederhuid'" },
          { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)", niveau: "vmbo-2", why: "basis lichaam + uitscheiding via huid — opfris voor deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Lagen van de huid", tekst: "Huid heeft 3 hoofdlagen (van buiten naar binnen):\n• **Opperhuid**: hoornlaag (dode cellen) + kiemlaag (levende cellen, deelt zich)\n• **Lederhuid**: bindweefsel + haarwortels + zweetklieren + bloedvaten\n• **Onderhuids bindweefsel**: vetlaag voor isolatie" },
            { titel: "Pigmentcellen = melanocyten", tekst: "In de **kiemlaag** zitten **melanocyten** — pigmentcellen die **melanine** maken. Melanine geeft je huid de bruine kleur en absorbeert UV-straling (bescherming tegen schade)." },
            { titel: "Waarom kiemlaag?", tekst: "Kiemlaag is de levende, delende laag. Hoornlaag erboven = dood. De pigmentcellen moeten levend zijn om melanine te kunnen maken." },
          ],
          woorden: [
            { woord: "kiemlaag", uitleg: "Onderste, levende laag van opperhuid — deelt zich + bevat pigmentcellen." },
            { woord: "hoornlaag", uitleg: "Buitenste, dode laag van opperhuid." },
            { woord: "melanocyt", uitleg: "Pigmentcel die melanine produceert." },
            { woord: "melanine", uitleg: "Bruin pigment dat tegen UV beschermt." },
          ],
          theorie: "Onthoud volgorde huidlagen: hoornlaag (dood) → kiemlaag (pigmentcellen!) → lederhuid → onderhuids bindweefsel.",
          voorbeelden: [{ type: "stap", tekst: "Zon → UV-stralen → kiemlaag maakt meer melanine → huid wordt bruin. Bescherming tegen DNA-schade." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Kiemlaag = waar leven gebeurt (kiemen = nieuwe). Daar zit ook pigment-productie." }],
          niveaus: {
            basis: "Kiemlaag. Antwoord B.",
            simpeler: "Pigmentcellen (melanocyten) zitten in de kiemlaag — de levende onderlaag van de opperhuid. Daar wordt melanine gemaakt die de huid bruin kleurt. Antwoord B.",
            nogSimpeler: "Kiemlaag = B.",
          },
        },
      },
    ],
  },
];

const examenBiologie2023T1 = {
  id: "examen-biologie-2023-t1",
  title: "Examen oefenen — Biologie 2023 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "biologie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Biologie - eindexamen oefenen 2023-T1",
  intro:
    "5 echte examenvragen uit het VMBO-GL/TL biologie-examen 2023 tijdvak 1 (examen-id GT-0191-a-23-1). Per vraag de officiële antwoorden, didactische denkprikkel-hints, inhoudelijke uitleg, en doorklik naar bestaande biologie-leerpaden. Plaatje-afhankelijke + open vragen overgeslagen.",
  triggerKeywords: [
    "examen biologie 2023 tijdvak 1", "echte examenvragen biologie",
    "ethogram gedrag", "adrenaline bijnieren", "mutatie straling",
    "primair secundair geslachtskenmerken", "pigmentcellen kiemlaag melanine",
  ],
  chapters,
  steps,
};

export default examenBiologie2023T1;
