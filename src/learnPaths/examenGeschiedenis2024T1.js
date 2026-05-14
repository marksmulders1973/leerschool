// Leerpad: Examen-oefenpad Geschiedenis & staatsinrichting VMBO-GL/TL 2024 tijdvak 1
// 2026-05-14. Bron: examenblad.nl GT-0125-a-24-1.
// 5 MC-vragen geselecteerd uit 10. Bron-afhankelijke kaart/tekening-vragen geskipt.

const chapters = [
  { letter: "A", title: "1848 + parlement (V1)", emoji: "👑", from: 0, to: 0 },
  { letter: "B", title: "WO2 + dekolonisatie (V25, V33, V34)", emoji: "🌍", from: 1, to: 3 },
  { letter: "C", title: "Koude Oorlog + modern (V38, V41)", emoji: "🧊", from: 4, to: 5 },
];

const PDF_LINK = "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0125-a-24-1-o-spr.pdf";
const BRON = (v) => `🎓 Echt examen VMBO-GL/TL Geschiedenis 2024 tijdvak 1, vraag ${v}`;
const LEERPAD_STAAT = { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat" };
const LEERPAD_KOUDEOORLOG = { id: "koude-oorlog-modern-po", title: "Koude Oorlog + modern" };

const steps = [
  {
    title: "Vraag 1 — Ministeriële verantwoordelijkheid 1848",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2024 tijdvak 1, vraag 1.",
    emoji: "🎓",
    checks: [
      {
        q: "In de nieuwe Grondwet van 1848 werd de ministeriële verantwoordelijkheid opgenomen. Aan wie moeten ministers vanaf dat moment verantwoording afleggen?",
        options: ["de rechters", "de regering", "het parlement", "het staatshoofd"],
        answer: 2,
        wrongHints: [
          "Rechters oordelen over wetten en misdrijven — niet over politieke verantwoording.",
          "Ministers ZIJN onderdeel van de regering — kunnen niet aan zichzelf verantwoording afleggen.",
          null,
          "Vóór 1848 wel: aan koning. NA 1848: koning is 'onschendbaar' en ministers leggen verantwoording af aan het parlement.",
        ],
        explanation: "Vóór 1848 was de koning verantwoordelijk voor het regeren. Met de nieuwe Grondwet (Thorbecke, 1848) werd de KONING onschendbaar verklaard — maar dat betekende dat de MINISTERS verantwoording moesten afleggen, en wel aan het PARLEMENT (Tweede en Eerste Kamer). Dit is het begin van de constitutionele monarchie + parlementaire democratie in NL.",
        examenBron: BRON(1),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD_STAAT,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "constitutionele monarchie + ministeriële verantwoordelijkheid" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is ministeriële verantwoordelijkheid?", tekst: "Ministers moeten in het parlement verantwoording afleggen over alles wat ze doen — én voor wat de koning zegt of doet. De koning zelf is onschendbaar (kan niet ter verantwoording worden geroepen)." },
            { titel: "Waarom 1848 zo belangrijk", tekst: "Thorbecke's Grondwet maakte van NL een **constitutionele monarchie**. Koning kreeg ceremoniële rol, parlement kreeg politieke macht. Mijlpaal voor democratie." },
          ],
          woorden: [
            { woord: "ministeriële verantwoordelijkheid", uitleg: "Ministers leggen verantwoording af aan parlement, niet aan koning." },
            { woord: "onschendbaar", uitleg: "Koning kan niet politiek ter verantwoording worden geroepen." },
          ],
          theorie: "1848 = sleuteljaar: Grondwet Thorbecke → koning onschendbaar + ministers verantwoordelijk aan parlement.",
          voorbeelden: [{ type: "stap", tekst: "Als de koning bv. een omstreden uitspraak doet, moet de premier dat in de Tweede Kamer verdedigen — niet de koning zelf." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "1848 = Thorbecke = parlement boven koning." }],
          niveaus: {
            basis: "Aan het parlement. Antwoord C.",
            simpeler: "Sinds 1848 leggen ministers verantwoording af aan het parlement (Tweede + Eerste Kamer), niet aan de koning. Antwoord C.",
            nogSimpeler: "Parlement = C.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 25 — Gelijkschakeling 1942",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2024 tijdvak 1, vraag 25.",
    emoji: "🎓",
    checks: [
      {
        q: "In 1942 richtte de Duitse bezetter het Nederlandse Arbeidsfront op, een nationaal-socialistische organisatie waarin alle werkende Nederlanders verplicht lid werden. Onafhankelijke vakbonden werden verboden. Welk begrip past hierbij?",
        options: ["censuur", "gelijkschakeling", "militarisme", "neutraliteit"],
        answer: 1,
        wrongHints: [
          "Censuur = controle op pers/media. Wel een onderdeel van nazi-bezetting, maar deze vraag gaat specifiek over een ORGANISATIE.",
          null,
          "Militarisme = nadruk op leger + oorlog. Dit gaat over arbeiders, niet militair.",
          "Neutraliteit = je houden buiten conflicten. Tegenovergesteld van wat hier gebeurt.",
        ],
        explanation: "**Gelijkschakeling** *(Gleichschaltung)* = nazi-strategie om ALLE maatschappelijke organisaties (vakbonden, jeugdgroepen, kranten, scholen) onder één nazi-controle te brengen. Bestaande zelfstandige organisaties werden verboden of vervangen door nazi-versies. Het Nederlandse Arbeidsfront verving alle echte vakbonden.",
        examenBron: BRON(25),
        bronLink: PDF_LINK,
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'gelijkschakeling', 'vakbond', 'nationaal-socialisme'" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Gelijkschakeling = uniformeren onder nazi-controle", tekst: "Nazi's wilden GEEN onafhankelijke organisaties in een land dat ze bezetten. Alle clubs/bonden/kranten/scholen moesten ofwel verboden worden, ofwel onder nazi-leiding komen. Dat noemden ze gelijkschakeling." },
            { titel: "Voorbeelden in bezet NL", tekst: "• Vakbonden → Nederlands Arbeidsfront (verplicht lid).\n• Jeugdverenigingen → Nederlandse Jeugdstorm (NSB-jeugd).\n• Kranten + radio → gecensureerd of vervangen.\n• Joden uitgesloten uit alle organisaties (eerste stap naar deportatie)." },
          ],
          woorden: [
            { woord: "gelijkschakeling", uitleg: "Maatschappelijke organisaties onder één (nazi-)controle brengen." },
            { woord: "Arbeidsfront", uitleg: "Nazi-vervanger van vakbonden." },
            { woord: "vakbond", uitleg: "Organisatie van werknemers, behartigt hun belangen." },
          ],
          theorie: "Onthoud: gelijkschakeling = nazi-strategie tegen onafhankelijke organisaties.",
          voorbeelden: [{ type: "stap", tekst: "Onafhankelijke padvinders (NL) verboden → moesten of stoppen of bij Jeugdstorm." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Alle clubs onder 1 nazi-paraplu = gelijkschakeling." }],
          niveaus: {
            basis: "Gelijkschakeling. Antwoord B.",
            simpeler: "Alle vakbonden vervangen door 1 verplichte nazi-organisatie = gelijkschakeling. Antwoord B.",
            nogSimpeler: "Onder nazi-controle brengen = B.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 33 — Internationale kritiek op politionele actie 1947",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2024 tijdvak 1, vraag 33.",
    emoji: "🎓",
    checks: [
      {
        q: "Op de inzet van het Nederlandse leger in 1947 in Indonesië (Eerste Politionele Actie) kwam veel internationale kritiek. Van welke partijen kwam die kritiek vooral?",
        options: [
          "van de EGKS en van de NAVO",
          "van de EGKS en van de Verenigde Naties",
          "van de Verenigde Naties en van de NAVO",
          "van de Verenigde Naties en van de Verenigde Staten",
        ],
        answer: 3,
        wrongHints: [
          "EGKS = Europese Gemeenschap voor Kolen en Staal — opgericht in 1951, bestond in 1947 nog niet.",
          "Idem — EGKS bestond in 1947 niet.",
          "NAVO opgericht in 1949 — bestond in 1947 nog niet.",
          null,
        ],
        explanation: "In 1947 bestonden alleen de VN (sinds 1945) en de VS als grote internationale actoren. EGKS (1951) en NAVO (1949) kwamen later. De Verenigde Staten dreigden zelfs met het stoppen van Marshallhulp aan Nederland als de strijd niet zou eindigen. Dit dwong NL uiteindelijk tot de soevereiniteitsoverdracht (1949).",
        examenBron: BRON(33),
        bronLink: PDF_LINK,
        voorkennisKeten: [
          { id: "koude-oorlog-modern-po", title: "Koude Oorlog + modern", niveau: "po-1F", why: "context naoorlogse periode + dekolonisatie" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Tijdlijn naoorlogse instituties", tekst: "**1945**: VN opgericht.\n**1949**: NAVO opgericht.\n**1951**: EGKS (voorloper EU) opgericht.\n→ In 1947 bestonden alleen VN en VS als grote spelers." },
            { titel: "Politionele acties Indonesië", tekst: "1947 (1e) + 1948 (2e): NL probeerde militair de controle terug te krijgen na Indonesische onafhankelijkheidsverklaring (1945). Internationaal: zwaar veroordeeld, vooral door VN-veiligheidsraad en VS." },
          ],
          woorden: [
            { woord: "Politionele actie", uitleg: "Eufemisme voor NL-militair ingrijpen in Indonesië 1947-1949." },
            { woord: "VN-veiligheidsraad", uitleg: "Internationaal orgaan voor vrede + veiligheid." },
            { woord: "EGKS", uitleg: "1951 — eerste Europese samenwerking (voorloper EU)." },
          ],
          theorie: "Onthoud jaartallen-volgorde: VN (1945) → NAVO (1949) → EGKS (1951). In 1947 alleen VN + VS relevant.",
          voorbeelden: [{ type: "stap", tekst: "VS dreigde Marshallhulp in te trekken → NL stopte vechten → soevereiniteitsoverdracht 1949." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Pre-NAVO/EGKS = alleen VN + VS." }],
          niveaus: {
            basis: "VN + VS. Antwoord D.",
            simpeler: "In 1947 bestonden NAVO + EGKS nog niet. Alleen de VN en VS waren grote critici van NL-militair ingrijpen in Indonesië. Antwoord D.",
            nogSimpeler: "VN + VS = D.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 34 — Soevereiniteitsoverdracht 1949",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2024 tijdvak 1, vraag 34.",
    emoji: "🎓",
    checks: [
      {
        q: "In 1949 werd Indonesië door Nederland officieel erkend als onafhankelijk land. Hoe heet de officiële handeling waarbij Nederland het bestuur overgaf aan Indonesië?",
        options: ["capitulatie", "democratisering", "politionele actie", "soevereiniteitsoverdracht"],
        answer: 3,
        wrongHints: [
          "Capitulatie = je overgeven na een verloren oorlog. NL gaf niet militair-strikt op.",
          "Democratisering = invoeren democratie. Hier ging het om SOEVEREINITEIT, niet om bestuursvorm.",
          "Politionele actie = militair ingrijpen (1947+1948). Dit is wat NL DEED vóór de overdracht, niet de overdracht zelf.",
          null,
        ],
        explanation: "**Soevereiniteitsoverdracht** = officiële handeling op 27 december 1949: NL gaf het bestuur over Nederlands-Indië over aan de Republiek Indonesië. Indonesië werd vanaf dat moment internationaal erkend als zelfstandige staat. Einde van de koloniale periode.",
        examenBron: BRON(34),
        bronLink: PDF_LINK,
        voorkennisKeten: [
          { id: "koude-oorlog-modern-po", title: "Koude Oorlog + modern", niveau: "po-1F", why: "dekolonisatie + Indonesië" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is soevereiniteit?", tekst: "**Soevereiniteit** = het hoogste gezag over een gebied. Een soevereine staat is onafhankelijk en bestuurt zichzelf, zonder een 'moederland' erboven." },
            { titel: "Tijdlijn Indonesië", tekst: "17 aug 1945: Soekarno + Hatta roepen onafhankelijkheid uit (door NL niet erkend).\n1947 + 1948: politionele acties (NL probeert controle te herwinnen).\n1949: internationale druk dwingt NL → onderhandelingen → 27 dec 1949: soevereiniteitsoverdracht." },
            { titel: "Nieuwe Guinea uitzondering", tekst: "Nederland behield Nieuw-Guinea (West-Papoea) tot 1962 — pas dan ook over. Indonesische staat erkende NL pas in 2005 voor het feit dat de echte onafhankelijkheidsdatum 17 augustus 1945 was." },
          ],
          woorden: [
            { woord: "soevereiniteit", uitleg: "Hoogste gezag over een gebied — onafhankelijk besturen." },
            { woord: "soevereiniteitsoverdracht", uitleg: "Officiële overdracht van bestuur van koloniale macht naar nieuwe staat." },
            { woord: "dekolonisatie", uitleg: "Proces waarbij koloniën onafhankelijk worden." },
          ],
          theorie: "Onthoud: 1949 = NL erkent Indonesië = soevereiniteitsoverdracht.",
          voorbeelden: [{ type: "stap", tekst: "Op 27 december 1949 tekende koningin Juliana het verdrag. Indonesië werd officieel een zelfstandig land." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Soeverein = baas in eigen huis." }],
          niveaus: {
            basis: "Soevereiniteitsoverdracht. Antwoord D.",
            simpeler: "De officiële overdracht van bestuur = soevereiniteitsoverdracht (1949). Antwoord D.",
            nogSimpeler: "Bestuur overdragen = D.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 38 — Hotline 1963 na Cubacrisis",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2024 tijdvak 1, vraag 38.",
    emoji: "🎓",
    checks: [
      {
        q: "In 1963 werd een directe communicatielijn (de 'hotline') aangelegd tussen de leider van de Sovjet-Unie en de leider van de Verenigde Staten. Welke gebeurtenis was de aanleiding?",
        options: ["de Blokkade van Berlijn", "de Cubacrisis", "de Praagse Lente", "de stichting van de DDR"],
        answer: 1,
        wrongHints: [
          "Blokkade van Berlijn = 1948-49. Te vroeg voor de hotline.",
          null,
          "Praagse Lente = 1968. Na de hotline.",
          "Stichting DDR = 1949. Te vroeg.",
        ],
        explanation: "Tijdens de **Cubacrisis** (oktober 1962) waren VS en USSR ongeveer 13 dagen lang op de rand van een kernoorlog. Het gebrek aan directe communicatie maakte misverstanden gevaarlijk. Daarom werd in 1963 de 'hotline' (eerst een teletype-verbinding) opgezet — direct contact tussen Kremlin en Witte Huis.",
        examenBron: BRON(38),
        bronLink: PDF_LINK,
        leerpadLink: LEERPAD_KOUDEOORLOG,
        voorkennisKeten: [
          { id: "koude-oorlog-modern-po", title: "Koude Oorlog + modern", niveau: "po-1F", why: "Cubacrisis + Koude Oorlog spanningen" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Cubacrisis oktober 1962", tekst: "USSR plaatste kernraketten op Cuba — vlak voor de kust van de VS. President Kennedy eiste verwijdering, verklaarde zee-blokkade rond Cuba. 13 dagen lang op rand van kernoorlog. USSR-leider Chroesjtsjov gaf uiteindelijk toe — raketten teruggehaald in ruil voor VS-belofte om Cuba niet aan te vallen + USA-raketten uit Turkije te verwijderen." },
            { titel: "Hotline 1963", tekst: "Na de crisis: beide leiders realiseerden dat een directe lijn nodig was om misverstanden te voorkomen. Eerst telex-verbinding, later telefoon. Tot vandaag in gebruik." },
          ],
          woorden: [
            { woord: "Cubacrisis", uitleg: "Oktober 1962: VS-USSR confrontatie over raketten op Cuba." },
            { woord: "hotline", uitleg: "Directe verbinding tussen wereldleiders om escalatie te voorkomen." },
          ],
          theorie: "Cubacrisis = dichtste moment ooit bij kernoorlog. Hotline = directe gevolg = preventief crisis-management.",
          voorbeelden: [{ type: "stap", tekst: "Tijdens de Cubacrisis duurde 1 boodschap soms 12 uur. Met hotline = direct. Bij toekomstige crises essentieel." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "1962 = Cubacrisis. 1963 = hotline opgericht na schrik." }],
          niveaus: {
            basis: "Cubacrisis. Antwoord B.",
            simpeler: "Na de Cubacrisis (1962, bijna-kernoorlog) wilden VS + USSR directe communicatie. Hotline 1963. Antwoord B.",
            nogSimpeler: "Cubacrisis = B.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 41 — Poldermodel in jaren '90",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2024 tijdvak 1, vraag 41.",
    emoji: "🎓",
    checks: [
      {
        q: "De overheid ging in de jaren '90 regelmatig in overleg met de vakbonden en werkgevers over loonafspraken en hervormingen. Hoe wordt deze manier van samenwerken genoemd?",
        options: ["individualisering", "poldermodel", "secularisatie", "verzorgingsstaat"],
        answer: 1,
        wrongHints: [
          "Individualisering = ieder voor zich, niet samenwerken. Tegenovergesteld.",
          null,
          "Secularisatie = ontkerkelijking (minder religie). Geen verband met overleg.",
          "Verzorgingsstaat = sociale zekerheid + uitkeringen. Wel deel van NL-cultuur, maar dit gaat specifiek over OVERLEG-vorm.",
        ],
        explanation: "**Poldermodel** = Nederlandse traditie van consensus-overleg tussen werkgevers (VNO-NCW), werknemers (FNV/CNV vakbonden) en overheid. Belangrijke beslissingen over loon, pensioenen, sociale zekerheid worden via overleg genomen — niet door eenzijdige besluiten of stakingen. Dateert al van Akkoord van Wassenaar (1982) maar bloeide vooral in jaren '90.",
        examenBron: BRON(41),
        bronLink: PDF_LINK,
        voorkennisKeten: [
          { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "vmbo-3", why: "Nederlandse politieke cultuur + sociale partners" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is het poldermodel?", tekst: "**3 sociale partners** komen regelmatig samen:\n• **Werkgevers** (VNO-NCW, MKB-Nederland)\n• **Werknemers** (FNV, CNV)\n• **Overheid** (kabinet)\n→ Onderhandelen over lonen, pensioenen, werktijd, sociale zekerheid." },
            { titel: "Waarom werkt het in NL?", tekst: "NL is een klein land met traditie van samenwerken (zelfs polders moeten samen onderhouden — vandaar de naam). Geeft stabiliteit. Geen stakingsgolven zoals in Frankrijk/UK. Maar ook tragere veranderingen." },
          ],
          woorden: [
            { woord: "poldermodel", uitleg: "NL-overlegcultuur tussen werkgevers, werknemers, overheid." },
            { woord: "sociale partners", uitleg: "Werkgevers + werknemers samen, als gesprekspartners van overheid." },
            { woord: "Akkoord van Wassenaar", uitleg: "1982 — start van moderne poldermodel-traditie." },
          ],
          theorie: "Onthoud: poldermodel = overleg tussen 3 partners (overheid + werkgevers + werknemers).",
          voorbeelden: [{ type: "stap", tekst: "Pensioenakkoord 2019 = klassiek poldermodel — jarenlang onderhandelen tussen kabinet, FNV en werkgevers." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Polder = samen onderhouden = samen overleggen = poldermodel." }],
          niveaus: {
            basis: "Poldermodel. Antwoord B.",
            simpeler: "Overheid + vakbonden + werkgevers regelmatig samen aan tafel = poldermodel (NL-overlegcultuur). Antwoord B.",
            nogSimpeler: "Drie-overleg = poldermodel = B.",
          },
        },
      },
    ],
  },
];

const examenGeschiedenis2024T1 = {
  id: "examen-geschiedenis-2024-t1",
  title: "Examen oefenen — Geschiedenis 2024 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "geschiedenis",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Geschiedenis - eindexamen oefenen 2024-T1",
  intro:
    "6 echte examenvragen uit het VMBO-GL/TL geschiedenis-examen 2024 tijdvak 1 (examen-id GT-0125-a-24-1). Bron-afhankelijke kaart/tekening-vragen overgeslagen. Per vraag: officiële antwoorden + denkprikkel-hints + uitleg + doorklik naar bestaande geschiedenis-paden.",
  triggerKeywords: [
    "examen geschiedenis 2024", "ministeriele verantwoordelijkheid 1848",
    "gelijkschakeling arbeidsfront", "politionele actie indonesie",
    "soevereiniteitsoverdracht 1949", "cubacrisis hotline", "poldermodel",
  ],
  chapters,
  steps,
};

export default examenGeschiedenis2024T1;
