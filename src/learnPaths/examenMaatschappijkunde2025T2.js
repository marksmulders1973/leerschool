// Leerpad: Examen-oefenpad Maatschappijkunde VMBO-GL/TL 2025 tijdvak 2.
// 2026-05-16: 5e maatschappij-pilot. 6 echte MC-vragen geselecteerd uit 17.
// Bron: examenblad.nl, 1127 GT 2025-2.

const tekst1 = {
  titel: "T1 — Inspraak burgers bij park in Maashaven Rotterdam",
  body:
    "Het plan voor de aanleg van een park in de Maashaven in Rotterdam gaat een volgende fase in. Het nieuwe **bestemmingsplan** voor het park ligt ter inzage. Iedereen kan het plan bekijken en zijn mening geven. Je kunt het plan online bekijken of langskomen bij het gemeentehuis. Een maand lang heeft elke inwoner de mogelijkheid om bezwaar in te dienen of suggesties te doen. Daarna stelt het college van B en W het plan vast, met eventueel aanpassingen.",
};

const tekst6 = {
  titel: "T6 — Tweede Kamer wil verzorgingshuis terug",
  body:
    "Ouderen moeten weer naar een soort zorgvoorziening kunnen tussen thuis en het verpleeghuis. Een meerderheid van de Tweede Kamer steunde dinsdag een oproep aan het volgende kabinet om 'werk te maken' van de herintroductie van zogenoemde verzorgingshuizen. Kamerlid Joost Eerdmans diende dit voorstel in als oproep aan de regering. De motie werd door BBB, JA21, FVD, PVV en CDA gesteund — net genoeg voor een meerderheid.",
};

const tekst12 = {
  titel: "T12 — YouTuber 300 km/uur taakstraf + rijontzegging",
  body:
    "De rechtbank in Zwolle heeft YouTuber en auto-ondernemer Rick van S. veroordeeld tot een **taakstraf van 120 uur** en een **voorwaardelijke celstraf van twee weken**. Ook krijgt hij een **rijontzegging van 1,5 jaar**. Hij crashte in maart vorig jaar met meer dan 300 km/uur op een snelweg in Duitsland. Aan het einde van de rechtszitting kreeg hij van de rechter de gelegenheid om als laatste nog iets te zeggen, waarbij hij excuses aanbood aan zijn familie.",
};

const tekst14 = {
  titel: "T14 — Vader+dochter vrijgesproken van bedreiging journalist",
  body:
    "Een ondernemer en zijn dochter uit Groningen zijn vrijgesproken van **bedreiging** en **intimidatie** van journalist Willem Groeneveld in hoger beroep. De zaak gaat om een ondernemer die eigenaar is van verschillende panden. De officier van justitie eiste eerder een geldboete, maar bewijs ontbrak. De rechter oordeelde dat de uitlatingen niet onder bedreiging vielen zoals omschreven in het Wetboek van Strafrecht.",
};

const tekst15 = {
  titel: "T15 — Ambulance-centralist Jeroen Puyman over oudjaarsnacht-geweld",
  body:
    "Op nieuwjaarsdag plaatste ambulance-centralist Jeroen Puyman uit Warfstermolen op zijn Facebookpagina een hartenkreet over het geweld tegen hulpverleners. 'Waar is de ophef?' Puyman werkt na achttien jaar als ambulance-broeder nu als centralist. Hij loodste die nacht zijn collega's door agressieve menigten heen. Hij had verwacht dat na nieuwjaarsdag de hele samenleving zou reageren met morele verontwaardiging over geweld tegen hulpverleners. Die reactie kwam niet, vond hij.",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Maatschappijkunde 2025 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2025/vmbo-gl/documenten/cse-2/gt-1127-a-25-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc maatschappij: zoek SLEUTELBEGRIP + match definitie. Beleidsfasen? 4 fasen (agenda→voorbereiding→bepaling→uitvoering). Rechtszitting-onderdelen? 5 (tenlastelegging→verhoor→requisitoir→pleidooi+laatste woord→vonnis). Kamer-rechten? 5 (amendement/initiatief/budget/interpellatie + motie).",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Politiek & besluitvorming", emoji: "🏛️", from: 0, to: 2 },
  { letter: "B", title: "Strafrecht & rechtszitting", emoji: "⚖️", from: 3, to: 4 },
  { letter: "C", title: "Gevolgen van criminaliteit", emoji: "💔", from: 5, to: 5 },
];

const steps = [
  {
    title: "Vraag 2 — Maashaven-park: welke fase besluitvorming?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2025-T2, vraag 2.",
    emoji: "🎓",
    checks: [{
      q: "In welke fase van de politieke besluitvorming bevindt de Maashaven-park-zaak zich (bestemmingsplan ligt ter inzage voor burgers)?",
      options: [
        "fase 1: agendavorming",
        "fase 2: beleidsvoorbereiding",
        "fase 3: beleidsbepaling",
        "fase 4: beleidsuitvoering",
      ],
      answer: 1,
      wrongHints: ["Agendavorming = onderwerp op politieke kaart krijgen. Hier is het al verder — er is al een plan.", null, "Beleidsbepaling = beslissing nemen (B&W stemt). Hier kunnen burgers nog inspraak hebben — beslissing nog niet.", "Beleidsuitvoering = plan UITVOEREN (graven, bomen planten). Hier is nog GEEN plan in uitvoering."],
      explanation: "**4 fasen politieke besluitvorming**: 1) AGENDA-vorming, 2) BELEIDSvoorbereiding (plan maken + inspraak), 3) BELEIDSbepaling (besluit nemen), 4) BELEIDSuitvoering (doen). Bestemmingsplan ter inzage = plan ligt klaar, burgers reageren = nog volop in voorbereiding. Antwoord B.",
      examenBron: BRON_LABEL(2),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & besluitvorming" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'agenda', 'beleid', 'voorbereiding', 'uitvoering'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "fasen politieke besluitvorming — kern" },
      ],
      uitlegPad: compact(
        "Truc: 'Agenda Voorbereiden Bepalen Uitvoeren' = A-V-B-U. Agenda = onderwerp ontstaat. Voorbereiding = plan maken + inspraak. Bepaling = stemmen, ja/nee. Uitvoering = doen. Hier: plan ligt klaar voor reactie = fase 2.",
        { basis: "Plan klaar + inspraak = fase 2 voorbereiding. = B.", simpeler: "Het plan IS er, mensen mogen er nog wat van vinden voordat beslist wordt. = B.", nogSimpeler: "Fase 2 = B." },
        [{ woord: "bestemmingsplan", uitleg: "Wat de gemeente met een stuk grond wil doen." }, { woord: "beleidsvoorbereiding", uitleg: "Fase 2: plan opstellen + inspraak organiseren." }],
      ),
    }],
  },
  {
    title: "Vraag 12 — Constitutionele monarchie: wat klopt?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2025-T2, vraag 12.",
    emoji: "🎓",
    checks: [{
      q: "Welke uitspraak over een constitutionele monarchie is juist? In een constitutionele monarchie...",
      options: [
        "is de koning als staatshoofd politiek verantwoordelijk voor het dagelijks bestuur.",
        "kan de koning, zonder instemming van de Staten-Generaal, de grondwet veranderen.",
        "mag de koning geen Koninklijke Besluiten ondertekenen.",
        "zijn de bevoegdheden en de macht van de koning beperkt door de grondwet.",
      ],
      answer: 3,
      wrongHints: ["Niet de koning, maar de MINISTERS zijn politiek verantwoordelijk ('de koning is onschendbaar, de minister verantwoordelijk').", "Tegenovergesteld — grondwet veranderen kan ALLEEN met instemming van beide Kamers (zelfs 2x = 'in 2 lezingen').", "Tegenovergesteld — de koning ondertekent WEL Koninklijke Besluiten (samen met minister).", null],
      explanation: "**Constitutionele monarchie** = koning bestaat, maar zijn macht is BEPERKT door de constitutie (grondwet). NL sinds 1848 (Thorbecke). Koning = onschendbaar staatshoofd, ministers = politiek verantwoordelijk. Echte beslissingen worden door kabinet+parlement genomen. Antwoord D.",
      examenBron: BRON_LABEL(12),
      bronLink: BRON_LINK,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & monarchie" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'monarchie', 'constitutie', 'grondwet', 'staatshoofd'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "regeringsvormen — kern" },
      ],
      uitlegPad: compact(
        "CONSTITUTIONELE monarchie = koning is staatshoofd, maar zijn macht is door de GRONDWET beperkt. NL-regel sinds Thorbecke 1848: koning onschendbaar, ministers verantwoordelijk. Andere optie = absolute monarchie (koning heeft alles te zeggen — zoals Saoedi-Arabië).",
        { basis: "Constitutie beperkt koning. = D.", simpeler: "Onze koning mag niets in zijn eentje beslissen — grondwet zegt wat hij wel/niet mag. = D.", nogSimpeler: "Grondwet beperkt = D." },
        [{ woord: "constitutionele monarchie", uitleg: "Koning + grondwet die zijn macht beperkt." }, { woord: "Trias Politica", uitleg: "Scheiding wetgevende + uitvoerende + rechterlijke macht." }],
      ),
    }],
  },
  {
    title: "Vraag 13 — Kamerlid Eerdmans + verzorgingshuis: welk Kamer-recht?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2025-T2, vraag 13.",
    emoji: "🎓",
    checks: [{
      q: "Van welk recht maakt Kamerlid Joost Eerdmans gebruik wanneer hij in de Tweede Kamer een voorstel indient om de regering OP TE ROEPEN tot herintroductie van verzorgingshuizen?",
      options: [
        "het budgetrecht",
        "het recht om moties in te dienen",
        "het recht van amendement",
        "het recht van enquête",
      ],
      answer: 1,
      wrongHints: ["Budget = Rijksbegroting goedkeuren. Niet specifiek een oproep doen.", null, "Amendement = wet WIJZIGEN. Hier is geen wet — alleen een OPROEP aan regering.", "Enquête = onderzoekscommissie instellen om iets uit te pluizen. Geen oproep tot beleid."],
      explanation: "**Motie** = formele oproep van Kamerlid aan de regering om iets WEL of NIET te doen. Eerdmans roept op tot verzorgingshuizen — typische motie. Andere rechten: amendement (wet wijzigen), initiatief (eigen wetsvoorstel), budget (begroting), enquête (parlementair onderzoek), interpellatie (minister verantwoording vragen). Antwoord B.",
      examenBron: BRON_LABEL(13),
      bronLink: BRON_LINK,
      bronTekst: tekst6,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & parlement" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'motie', 'amendement', 'enquête', 'budget'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "Tweede Kamer-rechten — kern" },
      ],
      uitlegPad: compact(
        "MOTIE = oproep aan regering ('doe iets'/'doe iets niet'). AMENDEMENT = bestaande wet wijzigen. INITIATIEF = NIEUWE wet maken. BUDGET = begroting OK. ENQUÊTE = onderzoek. INTERPELLATIE = minister ondervragen. Eerdmans roept regering OP → motie.",
        { basis: "Oproep aan regering = motie. = B.", simpeler: "Motie = formele tekst die zegt 'regering, ga dit doen'. = B.", nogSimpeler: "Motie = B." },
        [{ woord: "motie", uitleg: "Formele oproep aan regering om iets wel/niet te doen." }, { woord: "enquêterecht", uitleg: "Recht van Kamer om onderzoek te doen via parlementaire enquête." }],
      ),
    }],
  },
  {
    title: "Vraag 23 — Rechtszitting laatste onderdeel: welk?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2025-T2, vraag 23.",
    emoji: "🎓",
    checks: [{
      q: "Aan het einde van een rechtszitting krijgt de verdachte (YouTuber Rick van S.) van de rechter de gelegenheid om als laatste nog iets te zeggen, waarbij hij excuses aanbiedt aan zijn familie. Welk onderdeel van de rechtszitting komt hier aan bod?",
      options: [
        "aanklacht",
        "laatste woord",
        "requisitoir",
        "vonnis",
      ],
      answer: 1,
      wrongHints: ["Aanklacht/tenlastelegging = AAN HET BEGIN — wat ben je beschuldigd van. Niet aan het EIND.", null, "Requisitoir = officier eist straf. Hier spreekt de VERDACHTE, niet de OvJ.", "Vonnis = de uitspraak van de RECHTER. Hier spreekt de verdachte."],
      explanation: "**'Laatste woord'** = recht van de verdachte om aan het einde van de zitting (vóór vonnis) als laatste te spreken. Volgorde rechtszitting: tenlastelegging → verhoor → requisitoir (OvJ eist) → pleidooi (advocaat) → laatste woord (verdachte) → vonnis (rechter). Antwoord B.",
      examenBron: BRON_LABEL(23),
      bronLink: BRON_LINK,
      bronTekst: tekst12,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & rechtssysteem" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'laatste woord', 'vonnis', 'requisitoir', 'aanklacht'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "rechtszitting-onderdelen — kern" },
      ],
      uitlegPad: compact(
        "Volgorde rechtszitting (6 stappen): 1) TENLASTELEGGING (aanklacht), 2) VERHOOR, 3) REQUISITOIR (OvJ-eis), 4) PLEIDOOI (advocaat), 5) LAATSTE WOORD (verdachte), 6) VONNIS (rechter beslist). Verdachte krijgt ALTIJD als laatste het woord — fundamenteel recht.",
        { basis: "Verdachte laatste spreker = laatste woord. = B.", simpeler: "Voor vonnis mag verdachte zelf nog wat zeggen. Heet 'laatste woord'. = B.", nogSimpeler: "Laatste woord = B." },
        [{ woord: "laatste woord", uitleg: "Recht verdachte om voor vonnis als laatste te spreken." }, { woord: "vonnis", uitleg: "Uitspraak van de rechter." }],
      ),
    }],
  },
  {
    title: "Vraag 30 — In welk wetboek staan bedreigings-delicten?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2025-T2, vraag 30.",
    emoji: "🎓",
    checks: [{
      q: "Vader en dochter zijn vrijgesproken van bedreiging en intimidatie van een journalist. In welk wetboek of welke wet staan deze delicten omschreven?",
      options: [
        "in de Opiumwet",
        "in de Wegenverkeerswet",
        "in de Wet wapens en munitie",
        "in het Wetboek van Strafrecht",
      ],
      answer: 3,
      wrongHints: ["Opiumwet = drugs (cannabis, hard drugs).", "Wegenverkeerswet = verkeer (snelheid, alcohol achter het stuur).", "Wet wapens en munitie = bezit/dragen van wapens.", null],
      explanation: "**Wetboek van Strafrecht** (Sr) = hoofdboek voor klassieke misdrijven: moord, diefstal, mishandeling, BEDREIGING, oplichting, vernieling. Specifieke wetten dekken aparte gebieden: Opiumwet (drugs), Wegenverkeerswet (verkeer), Wet wapens en munitie (wapens). Bedreiging = klassiek delict = Wetboek van Strafrecht. Antwoord D.",
      examenBron: BRON_LABEL(30),
      bronLink: BRON_LINK,
      bronTekst: tekst14,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & strafrecht" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'wetboek', 'strafrecht', 'delict', 'bedreiging'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "wetboeken NL — kern" },
      ],
      uitlegPad: compact(
        "4 belangrijkste strafwet-bronnen NL: WETBOEK VAN STRAFRECHT (Sr — moord, diefstal, mishandeling, bedreiging — KERN); OPIUMWET (drugs); WEGENVERKEERSWET (verkeer + alcohol); WET WAPENS EN MUNITIE (wapens). Klassieke delicten in Sr.",
        { basis: "Bedreiging = klassiek delict = Wetboek Strafrecht. = D.", simpeler: "Bedreigen is een 'gewoon' misdrijf — staat in het hoofdwetboek. = D.", nogSimpeler: "Sr = D." },
        [{ woord: "Wetboek van Strafrecht", uitleg: "Hoofdwetboek met klassieke misdrijven (Sr)." }, { woord: "delict", uitleg: "Strafbaar feit." }],
      ),
    }],
  },
  {
    title: "Vraag 33 — Geweld tegen ambulance: welk immaterieel gevolg?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2025-T2, vraag 33.",
    emoji: "🎓",
    checks: [{
      q: "Ambulance-centralist Jeroen Puyman uitte op Facebook een hartenkreet: 'Waar is de ophef?' na oudjaarsnacht-geweld tegen hulpverleners. Welk immaterieel gevolg van criminaliteit had hij verwacht?",
      options: [
        "gevaar voor eigenrichting",
        "morele verontwaardiging",
        "normvervaging",
        "verlies aan vertrouwen in politiek en overheid",
      ],
      answer: 1,
      wrongHints: ["Eigenrichting = mensen nemen zelf het recht in handen (wraak). Jeroen wil reactie, geen wraak.", null, "Normvervaging = mensen wennen aan crimineel gedrag. Tegenovergesteld van Jeroens hoop.", "Vertrouwens-verlies = mensen vertrouwen overheid niet meer. Geen direct match met 'waar is de ophef'."],
      explanation: "**Morele verontwaardiging** = maatschappelijke woede/afschuw na een misdrijf — mensen die zeggen 'dit kan niet'. Jeroen verwachtte dat de samenleving collectief boos zou worden over geweld tegen hulpverleners ('waar is de ophef'). 4 immateriële gevolgen van criminaliteit: morele verontwaardiging, normvervaging, verlies vertrouwen, eigenrichting. Antwoord B.",
      examenBron: BRON_LABEL(33),
      bronLink: BRON_LINK,
      bronTekst: tekst15,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & gevolgen criminaliteit" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'immaterieel', 'verontwaardiging', 'normvervaging', 'eigenrichting'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "maatschappelijke gevolgen criminaliteit — kern" },
      ],
      uitlegPad: compact(
        "Immaterieel = niet-stoffelijk (geen geld/spullen, wel gevoelens). 4 immateriële gevolgen criminaliteit: MORELE VERONTWAARDIGING (publiek wordt boos), NORMVERVAGING (mensen wennen aan misdaad), VERLIES VERTROUWEN (in overheid/politie), EIGENRICHTING (mensen nemen zelf wraak). Jeroen miste de morele verontwaardiging.",
        { basis: "Boze publieke reactie = morele verontwaardiging. = B.", simpeler: "'Waar is de ophef?' = waar is de morele woede/het protest? = B.", nogSimpeler: "Verontwaardiging = B." },
        [{ woord: "morele verontwaardiging", uitleg: "Maatschappelijke woede/afschuw na misdrijf." }, { woord: "eigenrichting", uitleg: "Mensen nemen zelf het recht in handen (wraak)." }],
      ),
    }],
  },
];

const examenMaatschappijkunde2025T2 = {
  id: "examen-maatschappijkunde-2025-t2",
  title: "Examen oefenen — Maatschappijkunde 2025 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "maatschappijleer",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Maatschappijkunde - eindexamen oefenen 2025-T2",
  intro: "6 echte examenvragen uit VMBO-GL/TL Maatschappijkunde 2025 tijdvak 2. Onderwerpen: fase 2 beleidsvoorbereiding (park Maashaven), constitutionele monarchie, motie verzorgingshuis, laatste woord rechtszitting, Wetboek van Strafrecht, morele verontwaardiging.",
  triggerKeywords: ["examen maatschappijkunde 2025 tijdvak 2", "beleidsvoorbereiding fase 2", "constitutionele monarchie", "motie verzorgingshuis", "laatste woord rechtszitting", "wetboek strafrecht", "morele verontwaardiging"],
  chapters,
  steps,
};

export default examenMaatschappijkunde2025T2;
