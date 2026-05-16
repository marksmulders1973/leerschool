// Leerpad: Examen-oefenpad Engels VMBO-GL/TL 2022 tijdvak 2.
// 2026-05-16: completeert engels-cluster naar 8/8.
// 6 echte MC-vragen geselecteerd uit 30 MC's. Bron: examenblad.nl, 0071 GT 2022-2.

const tekst1 = {
  titel: "T1 — Smuggling-informatiebord (HM Customs, UK)",
  body:
    "Your help can make a difference in the fight against smuggling.\n\nWe want to help protect society against smuggling — whether it's drugs coming in or criminal money going out. We believe the best way to do this is to ask legitimate boat users to help us by reporting any suspicious activity.\n\nPlease make a note of anything you see, but don't get involved. You can pass on information anonymously or you can ask for an intelligence officer to contact you.\n\nIf you see it, report it.\n\nContact Customs Confidential.",
};

const tekst2 = {
  titel: "T2 — Walk a Mile in My Shoes (Empathy Museum)",
  body:
    "A giant shoebox, containing a diverse collection of shoes and stories from all over the world, will appear across Britain. 'Customers' will be invited to temporarily exchange their own shoes for an unfamiliar pair belonging to a stranger. They will put on a pair of headphones and take a walk with the stranger's shoes on their feet and their voice in their ears, via an MP3 player.\n\nThe storytellers include a British boxer fighting to stay in the country, an RNLI lifesaver patrolling the Thames, a Syrian refugee in the UK and an ex-convict saved by art. The pop-up Empathy Museum believes that the act of slipping into someone else's shoes helps people understand the lived experience of others.",
};

const tekst4 = {
  titel: "T4 — Primary school sports day: battle of the sexes (Anna Kessel)",
  body:
    "1 A primary school in Inverness has announced that girls and boys will not compete together on sports days. The news has prompted national debate.\n\n2 First, a quick sense check — we are talking about the egg-and-spoon race here, for kids aged four and upwards. My daughter is out in the playground practising the three-legged race with her classmates as they get ready for their sports day this week. She's excited and determined to win a medal, like last year, and it won't have occurred to her for a millisecond that she shouldn't be racing alongside 50% of her classmates because they happen to be boys. Most children probably aren't even aware of this resistance to mixed competition.",
};

const tekst5 = {
  titel: "T5 — High fashion from old clothes (Sottes, Switzerland)",
  body:
    "1 Sustainability and fashion usually do not go hand in hand. But things might be changing. This month, Switzerland-based fashion brand Sottes created waves when it launched its waste-free collection in Singapore.\n\n2 The label's founders are Jeanne Guenat and Elliot Upton. Their brand, Sottes, focuses on **upcycling**, a process in which unwanted pieces of fabric are transformed through design and creativity into something more valuable. Using **waste fabric collected from a community shop in the neighborhood**, the designers work with a team of 12 local seamstresses on the designs.",
};

const tekst6 = {
  titel: "T6 — Crime and Punishment (Canada Youth Justice, Lori Saunders)",
  body:
    "1 Early last year, Anne McLellan, Minister of Justice and Attorney General of Canada, **introduced the new Youth Criminal Justice Act**. According to McLellan, the unreformed youth justice system didn't seem to be working very well, with increasing numbers of young people in jail for relatively minor offences.\n\n2 'Putting kids in jail, though sometimes necessary, is not an effective response to youth crime,' McLellan says. 'Putting more young people in jail for longer will not make this a safer society.' She feels, 'We need to acknowledge that when serious things happen, there need to be meaningful consequences.'",
};

const tekst7 = {
  titel: "T7 — Siamese twins Chang and Eng Bunker (1811-1874)",
  body:
    "1 The conjoined twins Chang and Eng Bunker were born into poverty in rural Thailand in 1811. They were joined just above the waist by a thick strip of flesh. Until the age of 18, they lived remarkably unremarkable lives in an obscure village in the kingdom Siam. Were it not for an enterprising and unscrupulous Scotsman named Robert Hunter, they would have remained local curiosities. Hunter paid the boys' parents to allow him to display them abroad for five years. They never returned.\n\n2 First stop was America where they were exhibited everywhere: coffee shops, public halls, philosophical societies and museums of curiosities. People gawped as they performed simple tricks; medical professionals studied them with fascination; rich patrons paid to dine with them; and reformers debated the moral implications of human exhibition. The audience for the brothers turned out to be as varied as their hosts.",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Engels 2022 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2022/vmbo-gl/documenten/cse-2/gt-0071-a-22-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Engels-leesvaardigheid: bij doel-van-bord/main-purpose-paragraph — lees inleiding + samenvat in 1 zin. Bij main-idea — herken het sleutel-werkwoord (helpt/voorkomt/laat zien).",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Borden & projecten", emoji: "📋", from: 0, to: 1 },
  { letter: "B", title: "Maatschappij & gender", emoji: "👫", from: 2, to: 2 },
  { letter: "C", title: "Innovatie & recht", emoji: "♻️", from: 3, to: 4 },
  { letter: "D", title: "Historie", emoji: "🎭", from: 5, to: 5 },
];

const steps = [
  {
    title: "Vraag 1 — Smuggling-bord: welke hulp wordt gevraagd?",
    explanation: "Echte examenvraag uit Engels 2022-T2, vraag 1.",
    emoji: "🎓",
    checks: [{
      q: "'Your help can make a difference in the fight against smuggling' (titel). Welke hulp wordt aan mensen met een boot gevraagd?",
      options: [
        "om een foto te maken van onbekende boten",
        "om in te grijpen als ze zien dat er iets illegaals gebeurt",
        "om verdachte activiteiten die ze zien door te geven",
      ],
      answer: 2,
      wrongHints: ["Tekst noemt geen foto's — wel 'note' en 'pass on information'. Verschillend.", "Tekst zegt EXPLICIET 'don't get involved' — dus niet ingrijpen.", null],
      explanation: "Tekst: 'asking legitimate boat users to **help us by reporting any suspicious activity**' + 'don't get involved' + 'pass on information'. Doel = informatie doorgeven (anoniem mag). Antwoord C.",
      examenBron: BRON_LABEL(1),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'smuggling', 'suspicious', 'report', 'anonymously'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "doel-van-bord — kern-truc" },
      ],
      uitlegPad: compact(
        "Bord = 'report it' = melden. Sleutelwoorden: 'reporting any suspicious activity' + 'don't get involved'. Dus alleen melden, niet ingrijpen, niet alleen onbekende boten — verdachte activiteit in het algemeen.",
        { basis: "Suspicious activity doorgeven. = C.", simpeler: "Verdachte dingen die je ziet → mailen/bellen naar Customs. Niet zelf ingrijpen. = C.", nogSimpeler: "Doorgeven = C." },
        [{ woord: "smuggling", uitleg: "Smokkelen — illegale goederen over grens." }, { woord: "suspicious", uitleg: "Verdacht." }],
      ),
    }],
  },
  {
    title: "Vraag 2 — Walk a Mile in My Shoes: doel van project",
    explanation: "Echte examenvraag uit Engels 2022-T2, vraag 2.",
    emoji: "🎓",
    checks: [{
      q: "Wat is het doel van het 'Walk a Mile in My Shoes'-project van het Empathy Museum?",
      options: [
        "dat bezoekers zich bewust worden van hun eigen welvaart",
        "dat deelnemers zich inleven in de situatie van medemensen",
        "dat mensen open staan voor hergebruik van schoenen",
        "dat verhalen van asielzoekers serieus worden genomen",
      ],
      answer: 1,
      wrongHints: ["Welvaart is geen kernthema — tekst gaat over EMPATHIE.", null, "Geen sustainability-focus. Wel inleven via andermans schoenen.", "Asielzoekers is ÉÉN van de storytellers — niet de hele doelgroep."],
      explanation: "Naam 'Empathy Museum' + zinsdeel 'slipping into someone else's shoes helps people understand the lived experience of others' = inleven in anderen. Schoenen zijn middel, empathie is doel. Antwoord B.",
      examenBron: BRON_LABEL(2),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'empathy', 'refugee', 'ex-convict', 'lived experience'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "doel-van-project destilleren — kern-truc" },
      ],
      uitlegPad: compact(
        "Idiom 'walk a mile in someone's shoes' = je inleven. Naam 'Empathy Museum' bevestigt: doel = empathie. Bezoekers luisteren via koptelefoon naar verhaal van eigenaar = perspectief overnemen.",
        { basis: "Inleven in anderen. = B.", simpeler: "Andermans schoenen aan → naar zijn verhaal luisteren → snappen hoe het is. = B.", nogSimpeler: "Inleven = B." },
        [{ woord: "empathy", uitleg: "Inlevingsvermogen." }, { woord: "lived experience", uitleg: "Hoe iemand iets daadwerkelijk meemaakt." }],
      ),
    }],
  },
  {
    title: "Vraag 5 — Primary sports day Inverness: main point alinea 1-2",
    explanation: "Echte examenvraag uit Engels 2022-T2, vraag 5.",
    emoji: "🎓",
    checks: [{
      q: "What is the point made by the writer in paragraphs 1 and 2 of 'Primary school sports day: battle of the sexes'?",
      options: [
        "It is unfair to expect young children to run long distances when training for sports day.",
        "Most children are probably not aware of resistance against mixed competition.",
        "Primary school children need to be given tasks and activities that match their age.",
        "Schools should be more focused on allowing talented children to get enough sleep.",
      ],
      answer: 1,
      wrongHints: ["Tekst gaat over egg-and-spoon en three-legged race — KORT, niet long-distance. Niet de point.", null, "Geen mention van age-appropriate-tasks. Wel iets over kinderen die niet WETEN van debat.", "Geen sleep-onderwerp. Verkeerde tekst-vermenging."],
      explanation: "Schrijver maakt deze point in alinea 2: 'it won't have occurred to her for a millisecond that she shouldn't be racing alongside 50% of her classmates' + 'Most children probably aren't even aware of this resistance to mixed competition.' = kinderen WETEN niet eens van het debat. Antwoord B.",
      examenBron: BRON_LABEL(5),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'compete', 'aware', 'resistance', 'mixed competition'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "main point destilleren — kern-truc" },
      ],
      uitlegPad: compact(
        "Sleutelzin alinea 2: 'won't have occurred to her' + 'most children aren't even aware'. Kinderen denken niet eens aan jongen/meisje-scheiding bij hardlopen. Dat is de point.",
        { basis: "Kinderen weten niet van verzet tegen mixed. = B.", simpeler: "De dochter weet niet eens dat sommigen vinden dat jongens/meisjes apart moeten. = B.", nogSimpeler: "Onaware = B." },
        [{ woord: "mixed competition", uitleg: "Wedstrijd waarin jongens en meisjes samen meedoen." }, { woord: "aware", uitleg: "Bewust van iets." }],
      ),
    }],
  },
  {
    title: "Vraag 11 — Sottes waste-free: hoe?",
    explanation: "Echte examenvraag uit Engels 2022-T2, vraag 11.",
    emoji: "🎓",
    checks: [{
      q: "'Sottes created waves when it launched its waste-free collection' (paragraph 1). How does Sottes produce a waste-free collection?",
      options: [
        "by developing fabrics made from organic litter and plastic",
        "by making new clothes from materials that have been thrown away",
        "by selecting local materials instead of textiles produced abroad",
        "by using fair trade methods throughout the whole production process",
      ],
      answer: 1,
      wrongHints: ["Geen 'organic litter and plastic' in tekst. Wel 'unwanted fabric'.", null, "Local seamstresses YES, maar 'local materials vs foreign textiles' is niet de KERN. Kern = HERGEBRUIK.", "'Fair trade' niet genoemd. Wel 'upcycling'."],
      explanation: "Tekst: 'upcycling, a process in which **unwanted pieces of fabric** are transformed' + 'waste fabric collected from a community shop'. = oude/weggegooide materialen omgevormd. Antwoord B.",
      examenBron: BRON_LABEL(11),
      bronLink: BRON_LINK,
      bronTekst: tekst5,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'sustainability', 'upcycling', 'waste fabric', 'seamstress'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "hoe-vraag matchen met tekst-citaat — kern-truc" },
      ],
      uitlegPad: compact(
        "Upcycling = oude stof tot iets MOOIERS verwerken. Niet recycling (vermalen tot grondstof) maar TRANSFORMEREN. 'Waste fabric collected from community shop' = stof die mensen weggooiden.",
        { basis: "Weggegooide materialen hergebruiken. = B.", simpeler: "Sottes pakt oude stoffen + maakt nieuwe kleding = upcycling. = B.", nogSimpeler: "Hergebruik = B." },
        [{ woord: "upcycling", uitleg: "Oude materialen tot iets WAARDEVOLLERS verwerken." }, { woord: "waste fabric", uitleg: "Weggegooide stof." }],
      ),
    }],
  },
  {
    title: "Vraag 15 — Anne McLellan & Canada Youth Justice Act",
    explanation: "Echte examenvraag uit Engels 2022-T2, vraag 15.",
    emoji: "🎓",
    checks: [{
      q: "What becomes clear about Anne McLellan in paragraph 1 of 'Crime and Punishment'?",
      options: [
        "She has started to change the justice system.",
        "She supports the ideas of the Reform party.",
        "She thinks youth crime is not a serious problem.",
        "She wants to lock up a large number of youngsters.",
      ],
      answer: 0,
      wrongHints: [null, "Geen Reform-party-vermelding in alinea 1.", "Niet 'not serious' — wel 'system doesn't work very well'.", "Tegenovergesteld — alinea 2 zegt zij wil JUIST minder jongeren opsluiten."],
      explanation: "Alinea 1: '**introduced the new Youth Criminal Justice Act**' = nieuwe wet ingevoerd. McLellan VERANDERT actief het systeem. Antwoord A.",
      examenBron: BRON_LABEL(15),
      bronLink: BRON_LINK,
      bronTekst: tekst6,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'Attorney General', 'unreformed', 'minor offences'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "wat blijkt over persoon X — kern-truc" },
      ],
      uitlegPad: compact(
        "'Introduced the new Youth Criminal Justice Act' = nieuwe wet INGEVOERD. Dat IS het systeem veranderen. Andere opties zijn niet in alinea 1 of zeggen het tegenovergestelde.",
        { basis: "Nieuwe wet = systeem veranderen. = A.", simpeler: "Anne voerde nieuwe wet in voor jeugd-criminaliteit = ze verandert het. = A.", nogSimpeler: "Veranderen = A." },
        [{ woord: "Attorney General", uitleg: "Minister van Justitie (in Canada/VS)." }, { woord: "Act", uitleg: "Wet." }],
      ),
    }],
  },
  {
    title: "Vraag 21 — Siamese twins in VS: wat blijkt uit alinea 2?",
    explanation: "Echte examenvraag uit Engels 2022-T2, vraag 21.",
    emoji: "🎓",
    checks: [{
      q: "What becomes clear from paragraph 2 of 'The story of the original Siamese twins'?",
      options: [
        "The show of the twins became popular enough to fill big venues.",
        "The show of the twins sometimes ended in public fights and chaos.",
        "The twins reacted in an identical way to being publicly exhibited.",
        "The twins were interesting to various people for various reasons.",
      ],
      answer: 3,
      wrongHints: ["Tekst zegt 'coffee shops, public halls' — niet alleen big venues. En 'popular enough' is niet de focus.", "Geen fights/chaos in tekst. Wel 'gawped'.", "Tekst zegt niets over hoe twins zelf reageerden (zelfde of anders).", null],
      explanation: "Alinea 2 lijst diverse publiek-groepen + REDENEN: 'people gawped' (curiositeit), 'medical professionals studied' (medisch), 'rich patrons dined' (status), 'reformers debated moral implications' (ethiek). = diverse mensen, diverse redenen. Antwoord D.",
      examenBron: BRON_LABEL(21),
      bronLink: BRON_LINK,
      bronTekst: tekst7,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'conjoined', 'curiosity', 'exhibit', 'patron', 'reformer'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "wat blijkt-uit-alinea destilleren — kern-truc" },
      ],
      uitlegPad: compact(
        "Alinea lijst 4 GROEPEN met 4 verschillende REDENEN: gewone mensen (gawped = staarden), artsen (medisch), rijke mensen (dineren), hervormers (moraal). Slot-zin: 'audience as varied as their hosts'. = divers publiek, diverse redenen.",
        { basis: "Verschillende mensen, verschillende redenen. = D.", simpeler: "Artsen + rijke mensen + nieuwsgierige mensen + hervormers — allemaal anders geïnteresseerd. = D.", nogSimpeler: "Various = D." },
        [{ woord: "gawped", uitleg: "Aanstaarden met open mond." }, { woord: "patron", uitleg: "Rijke beschermheer/sponsor." }, { woord: "reformer", uitleg: "Iemand die maatschappij wil veranderen." }],
      ),
    }],
  },
];

const examenEngels2022T2 = {
  id: "examen-engels-2022-t2",
  title: "Examen oefenen — Engels 2022 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "engels",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Engels - eindexamen oefenen 2022-T2",
  intro: "6 echte examenvragen uit VMBO-GL/TL Engels 2022 tijdvak 2. Teksten: Smuggling-bord UK, Empathy Museum 'Walk a Mile', Primary school sports day Inverness, Sottes upcycling fashion, Canada Youth Justice Act McLellan, Siamese twins Chang & Eng Bunker.",
  triggerKeywords: ["examen engels 2022 tijdvak 2", "smuggling boat customs", "empathy museum walk a mile", "primary sports day inverness", "sottes upcycling fashion", "youth criminal justice canada", "siamese twins chang eng bunker"],
  chapters,
  steps,
};

export default examenEngels2022T2;
