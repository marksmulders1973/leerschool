// Leerpad: Begrijpend lezen — strategieën voor groep 5-8
// 7 stappen in 4 hoofdstukken (A t/m D).
// Doelgroep: groep 5-8 basisschool. Kern-Toets-onderdeel.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  info: "#5d9cec",
  betogend: "#ec407a",
  verhalend: "#69f0ae",
  signaal: "#ffd54f",
};

const stepEmojis = ["📖","📝","🚦","🎯","👀","❓","🏆"];

const chapters = [
  { letter: "A", title: "Wat lees je?", emoji: "📖", from: 0, to: 1 },
  { letter: "B", title: "Signaalwoorden + opbouw", emoji: "🚦", from: 2, to: 3 },
  { letter: "C", title: "Slim lezen + vragen", emoji: "👀", from: 4, to: 5 },
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 6, to: 6 },
];

function tekstsoortenSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">3 tekstsoorten — verschillende doelen</text>

<rect x="20" y="40" width="280" height="50" rx="8" fill="${COLORS.info}" opacity="0.30" stroke="${COLORS.info}" stroke-width="1"/>
<text x="40" y="60" fill="${COLORS.info}" font-size="14" font-family="Arial" font-weight="bold">📰 Informatief</text>
<text x="40" y="78" fill="${COLORS.text}" font-size="11" font-family="Arial">Doel: weten. Bv. krantenartikel, schoolboek, encyclopedie.</text>

<rect x="20" y="100" width="280" height="50" rx="8" fill="${COLORS.betogend}" opacity="0.30" stroke="${COLORS.betogend}" stroke-width="1"/>
<text x="40" y="120" fill="${COLORS.betogend}" font-size="14" font-family="Arial" font-weight="bold">💬 Betogend</text>
<text x="40" y="138" fill="${COLORS.text}" font-size="11" font-family="Arial">Doel: overtuigen. Bv. opiniestuk, reclame, debat.</text>

<rect x="20" y="160" width="280" height="50" rx="8" fill="${COLORS.verhalend}" opacity="0.30" stroke="${COLORS.verhalend}" stroke-width="1"/>
<text x="40" y="180" fill="${COLORS.good}" font-size="14" font-family="Arial" font-weight="bold">📚 Verhalend</text>
<text x="40" y="198" fill="${COLORS.text}" font-size="11" font-family="Arial">Doel: vermaken. Bv. roman, kort verhaal, sprookje.</text>
</svg>`;
}

function signaalwoordenSvg() {
  const groepen = [
    { type: "Tijd", woorden: "eerst, daarna, nu, later, vroeger, intussen", kleur: COLORS.info },
    { type: "Oorzaak/Gevolg", woorden: "omdat, doordat, daardoor, dus, daarom", kleur: COLORS.betogend },
    { type: "Opsomming", woorden: "ten eerste, ook, bovendien, verder, ten slotte", kleur: COLORS.verhalend },
    { type: "Tegenstelling", woorden: "maar, echter, toch, hoewel, desondanks", kleur: COLORS.signaal },
    { type: "Voorbeeld", woorden: "bijvoorbeeld, zoals, als illustratie, namelijk", kleur: COLORS.alt },
    { type: "Conclusie", woorden: "kortom, dus, samenvattend, concluderend", kleur: COLORS.good },
  ];
  return `<svg viewBox="0 0 320 320">
<rect x="0" y="0" width="320" height="320" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">Signaalwoorden — wat ze je vertellen</text>

${groepen.map((g, i) => {
  const y = 40 + i * 45;
  return `
<rect x="20" y="${y}" width="280" height="38" rx="6" fill="${g.kleur}" opacity="0.20" stroke="${g.kleur}" stroke-width="1"/>
<text x="35" y="${y + 16}" fill="${g.kleur}" font-size="12" font-family="Arial" font-weight="bold">${g.type}</text>
<text x="35" y="${y + 31}" fill="${COLORS.text}" font-size="10" font-family="Arial">${g.woorden}</text>`;
}).join('')}
</svg>`;
}

const steps = [
  {
    title: "Wat is begrijpend lezen?",
    explanation: "**Begrijpend lezen** is **niet alleen woorden lezen**, maar **echt snappen** wat de tekst zegt en bedoelt.\n\n**Drie niveaus van lezen**:\n\n**1. Technisch lezen** *(letters → woorden → zinnen)*\nJe leest **wat** er staat. Dit leer je in groep 3-4.\n\n**2. Begrijpend lezen** *(wat betekent het?)*\nJe begrijpt **wat de schrijver bedoelt**. Hoofd-idee, details, oorzaak/gevolg, mening.\n\n**3. Studerend lezen** *(onthouden + toepassen)*\nJe **onthoudt** wat je leest en kunt het later **gebruiken**. Bv. voor een toets.\n\n**Waarom is begrijpend lezen lastig?**\n• Veel **moeilijke woorden**: 'desondanks', 'echter', 'concludeert'.\n• Veel **lange zinnen** met komma's, bijzinnen.\n• De **boodschap** zit niet altijd letterlijk in de tekst — je moet soms 'tussen de regels' lezen.\n• De vragen zijn **slim**: ze testen of je het écht begrepen hebt, niet of je het kunt herlezen.\n\n**Op de Doorstroomtoets** zit altijd begrijpend lezen — meestal **3-5 lange teksten** met telkens 3-5 vragen erover.\n\n**Goed nieuws**: het is een **vaardigheid** — je kunt het leren! Niet door slimmer te zijn, maar door **slim aan te pakken**.\n\nIn dit leerpad leer je:\n• Welke **tekstsoorten** er zijn (informatief, betogend, verhalend)\n• **Signaalwoorden** herkennen (omdat, daarom, maar, ...)\n• **Skim + scan**-techniek (snel overzicht + gericht zoeken)\n• Verschillende **vraagsoorten** + hoe je ze aanpakt\n\nVeel succes!",
    svg: tekstsoortenSvg(),
    checks: [
      {
        q: "Wat is **begrijpend lezen**?",
        options: ["Hardop lezen","Echt snappen wat de tekst zegt en bedoelt","Snel lezen","Spelling oefenen"],
        answer: 1,
        wrongHints: ["Snap je een tekst beter als je 'm hardop leest, of als je nadenkt over de inhoud?",null,"Gaat lezen om hoe snel je bent, of om wat je ervan begrijpt?","Heeft spelling te maken met begrijpen of met goed schrijven?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is het verschil?", tekst: "Hardop lezen, snel lezen, spelling — dat zijn ANDERE vaardigheden. Begrijpend lezen gaat om SNAPPEN." },
            { titel: "Het kernwoord", tekst: "'Begrijpend' = van 'begrijpen' = snappen. Dus: lezen + snappen wat er staat." },
          ],
          woorden: [
            { woord: "begrijpen", uitleg: "Snappen, doorhebben wat iets betekent." },
            { woord: "vaardigheid", uitleg: "Iets dat je kunt door te oefenen." },
          ],
          theorie: "Drie soorten lezen: TECHNISCH (woorden ontcijferen), BEGRIJPEND (snappen wat er staat), STUDEREND (onthouden + toepassen). Bij de Doorstroomtoets wordt vooral begrijpend getoetst.",
          voorbeelden: [{ type: "kern", tekst: "Tekst lezen + er een vraag over kunnen beantwoorden = begrijpend gelezen." }],
          basiskennis: [{ onderwerp: "Lezen ≠ snappen", uitleg: "Je kunt woorden hardop voorlezen zonder te snappen wat er staat." }],
          niveaus: {
            basis: "Begrijpend = snappen.",
            simpeler: "Het woord zegt het al: 'begrijpend' = begrijpen. Lezen + snappen wat er staat.",
            nogSimpeler: "Snappen",
          },
        },
      },
      {
        q: "Op de Doorstroomtoets — hoe wordt begrijpend lezen getest?",
        options: ["Korte zinnen","3-5 lange teksten + vragen erover","Alleen 1 woord per vraag","Liedjes zingen"],
        answer: 1,
        wrongHints: ["Test een toets begrijpend lezen met losse zinnen, of met echte teksten?",null,"Kun je begrijpend lezen testen met maar één woord per vraag?","Hoort zingen bij begrijpend lezen — of bij iets anders?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat zit op de Doorstroomtoets?", tekst: "Bij begrijpend lezen krijg je echte LEESTEKSTEN (200-300 woorden) met vragen erover. Niet losse zinnen." },
            { titel: "Hoeveel?", tekst: "Meestal 3-5 teksten per onderdeel, 3-5 vragen per tekst." },
          ],
          woorden: [
            { woord: "Doorstroomtoets", uitleg: "Landelijke toets in groep 8 (sinds 2024, voorheen de eindtoets) — meet wat je in 8 jaar basisschool hebt geleerd." },
          ],
          theorie: "Doorstroomtoets test of je een ECHTE tekst kunt begrijpen — dus geen losse zinnetjes maar verhalen, krantenartikelen, instructies.",
          voorbeelden: [{ type: "Toets-format", tekst: "Tekst over 'gezond ontbijt' (250 woorden) → 4 vragen: hoofdgedachte, detail, woordbetekenis, conclusie." }],
          basiskennis: [{ onderwerp: "De toets = breed", uitleg: "De toets test lezen, taalverzorging en rekenen — niet alleen lezen." }],
          niveaus: {
            basis: "De toets = lange teksten + vragen.",
            simpeler: "Stel je voor: je krijgt een artikel uit de krant en daarna een paar vragen over wat erin stond. Dat is wat de toets doet bij begrijpend lezen.",
            nogSimpeler: "Lange teksten + vragen",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Bij welk soort lezen maak je van letters woorden, en van woorden zinnen?",
        options: ["Technisch lezen", "Begrijpend lezen", "Studerend lezen", "Snel lezen"],
        answer: 0,
        wrongHints: [
          null,
          "Gaat begrijpend lezen over letters aan elkaar plakken, of over snappen wat er bedoeld wordt?",
          "Gaat studerend lezen over letters, of over onthouden wat je leest?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Drie soorten lezen",
              tekst: "Technisch lezen, begrijpend lezen en studerend lezen. Elk soort heeft een eigen doel.",
            },
            {
              titel: "Letters en woorden",
              tekst: "Van letters woorden maken en van woorden zinnen: dat is TECHNISCH lezen. Dat leer je in groep 3-4.",
            },
          ],
          woorden: [
            {
              woord: "technisch lezen",
              uitleg: "Letters en woorden goed kunnen lezen.",
            },
            {
              woord: "studerend lezen",
              uitleg: "Lezen om iets te onthouden en later te gebruiken.",
            },
          ],
          theorie: "Technisch lezen = wat er staat. Begrijpend lezen = wat de schrijver bedoelt. Studerend lezen = onthouden en toepassen.",
          voorbeelden: [
            {
              type: "technisch",
              tekst: "Een kind in groep 3 leest 'b-oo-m' en zegt 'boom'. Dat is technisch lezen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eerst technisch",
              uitleg: "Je moet eerst de woorden kunnen lezen, daarna kun je pas snappen wat ze samen betekenen.",
            },
          ],
          niveaus: {
            basis: "Letters → woorden → zinnen = technisch lezen.",
            simpeler: "Als je letters aan elkaar plakt tot een woord, ben je technisch aan het lezen. Snappen wat het betekent komt daarna.",
            nogSimpeler: "Letters lezen = technisch",
          },
        },
      },
      {
        q: "Je leest een tekst om hem te onthouden, omdat je er morgen een toets over hebt. Welk soort lezen is dat?",
        options: ["Studerend lezen", "Technisch lezen", "Voorlezen", "Snel lezen"],
        answer: 0,
        wrongHints: [
          null,
          "Gaat technisch lezen over onthouden, of over letters en woorden?",
          null,
          "Onthoud je een tekst beter als je er snel doorheen gaat?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat wil je met de tekst?",
              tekst: "Je wilt hem ONTHOUDEN en later gebruiken, voor een toets.",
            },
            {
              titel: "Welk soort lezen hoort daarbij?",
              tekst: "Onthouden en toepassen = STUDEREND lezen.",
            },
          ],
          woorden: [
            {
              woord: "studerend lezen",
              uitleg: "Lezen om iets te onthouden en later te gebruiken, bijvoorbeeld voor een toets.",
            },
            {
              woord: "toepassen",
              uitleg: "Gebruiken wat je geleerd hebt.",
            },
          ],
          theorie: "Drie niveaus: technisch (wat staat er), begrijpend (wat bedoelt de schrijver), studerend (onthouden en gebruiken).",
          voorbeelden: [
            {
              type: "studerend",
              tekst: "Je leest een tekst over de Romeinen en maakt er aantekeningen bij voor de toets. Dat is studerend lezen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Volgorde",
              uitleg: "Eerst technisch, dan begrijpend, dan studerend. Elk niveau bouwt op het vorige.",
            },
          ],
          niveaus: {
            basis: "Onthouden voor een toets = studerend lezen.",
            simpeler: "Lees je om iets te leren en te onthouden? Dan ben je aan het studeren. Dat heet studerend lezen.",
            nogSimpeler: "Onthouden = studerend",
          },
        },
      },
      {
        q: "Wat betekent **'tussen de regels lezen'**?",
        options: [
          "Snappen wat niet letterlijk in de tekst staat",
          "Alleen de vetgedrukte woorden lezen",
          "Elke tweede regel overslaan",
          "De tekst van onder naar boven lezen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Begrijp je een tekst beter als je alleen een paar woorden leest?",
          null,
          "Gaat het om de volgorde waarin je leest, of om wat je ervan snapt?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Het staat er niet letterlijk",
              tekst: "Soms zegt een schrijver iets niet precies, maar je kunt het wel snappen uit de tekst.",
            },
            {
              titel: "Zelf afleiden",
              tekst: "Dat zelf snappen heet 'tussen de regels lezen'. Er staat niets tussen de regels: het is een uitdrukking.",
            },
          ],
          woorden: [
            {
              woord: "letterlijk",
              uitleg: "Precies zo, woord voor woord.",
            },
            {
              woord: "uitdrukking",
              uitleg: "Een groepje woorden met een andere betekenis dan de losse woorden.",
            },
          ],
          theorie: "De boodschap zit niet altijd letterlijk in de tekst. Dan moet je tussen de regels lezen: zelf bedenken wat de schrijver bedoelt.",
          voorbeelden: [
            {
              type: "afleiden",
              tekst: "Tekst: 'Sem gaapte en wreef in zijn ogen.' Er staat niet dat Sem moe is, maar dat snap je wel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Uitdrukking",
              uitleg: "'Tussen de regels lezen' is een uitdrukking. Je kijkt niet echt naar de witte ruimte tussen de zinnen.",
            },
          ],
          niveaus: {
            basis: "Tussen de regels lezen = snappen wat er niet letterlijk staat.",
            simpeler: "Een vriend zucht en kijkt steeds op de klok. Hij zegt niet dat hij zich verveelt, maar je snapt het wel. Zo werkt tussen de regels lezen ook bij een tekst.",
            nogSimpeler: "Zelf snappen",
          },
        },
      },
      {
        q: "Tekst: *'Tim keek naar buiten. De lucht was donkergrijs. Hij pakte snel zijn paraplu.'*\n\nWat kun je **tussen de regels** lezen?",
        options: [
          "Tim verwacht dat het gaat regenen",
          "Tim heeft het heel erg warm",
          "Tim gaat in de zon liggen",
          "Tim is zijn paraplu kwijt",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Staat er iets in de tekst over warmte?",
          "Past een donkergrijze lucht bij in de zon liggen?",
          "Wat doet Tim aan het eind met zijn paraplu?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek de hints",
              tekst: "Er staat: *'De lucht was donkergrijs.'* en *'Hij pakte snel zijn paraplu.'*",
            },
            {
              titel: "Wat betekenen de hints samen?",
              tekst: "Een donkergrijze lucht en een paraplu pakken: Tim denkt dat er regen komt. Dat staat er niet letterlijk, maar je snapt het wel.",
            },
            {
              titel: "Klopt de rest?",
              tekst: "Warm, in de zon liggen of paraplu kwijt: daar zijn geen hints voor. Hij pakt zijn paraplu juist.",
            },
          ],
          woorden: [
            {
              woord: "hint",
              uitleg: "Een aanwijzing die je helpt iets te snappen.",
            },
            {
              woord: "afleiden",
              uitleg: "Iets snappen uit aanwijzingen, ook al staat het er niet letterlijk.",
            },
          ],
          theorie: "Bij tussen de regels lezen zoek je hints in de tekst en bedenk je wat ze samen betekenen.",
          voorbeelden: [
            {
              type: "hints",
              tekst: "'Noor trok haar muts en wanten aan.' → het is waarschijnlijk koud buiten.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Bewijs uit de tekst",
              uitleg: "Je antwoord moet altijd te verklaren zijn met woorden uit de tekst.",
            },
          ],
          niveaus: {
            basis: "Tim verwacht regen.",
            simpeler: "Grijze lucht + paraplu pakken. Waarom pak je een paraplu? Omdat je denkt dat het gaat regenen.",
            nogSimpeler: "Paraplu = regen",
          },
        },
      },
      {
        q: "Wat maakt begrijpend lezen **vaak lastig**?",
        options: [
          "Moeilijke woorden en lange zinnen",
          "Te weinig plaatjes bij de tekst",
          "Een saaie kleur papier",
          "Een te groot lettertype",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Heb je plaatjes nodig om een tekst te snappen?",
          null,
          "Is grote letters lezen moeilijker dan kleine?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat maakt het lastig?",
              tekst: "Moeilijke woorden zoals 'desondanks' of 'echter', en lange zinnen met veel komma's.",
            },
            {
              titel: "En nog meer",
              tekst: "De boodschap staat niet altijd letterlijk in de tekst, en de vragen testen of je het echt begrepen hebt.",
            },
          ],
          woorden: [
            {
              woord: "desondanks",
              uitleg: "Toch, ondanks dat.",
            },
            {
              woord: "bijzin",
              uitleg: "Een stukje zin dat bij een andere zin hoort, vaak na een komma.",
            },
          ],
          theorie: "Begrijpend lezen is lastig door moeilijke woorden, lange zinnen en boodschappen die je tussen de regels moet lezen. Het goede nieuws: je kunt het leren.",
          voorbeelden: [
            {
              type: "lange zin",
              tekst: "'Hoewel het regende, gingen de kinderen, die allemaal een jas aanhadden, toch naar buiten.' Veel komma's: lees rustig.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Oefenen helpt",
              uitleg: "Begrijpend lezen is een vaardigheid. Hoe vaker je oefent, hoe makkelijker het wordt.",
            },
          ],
          niveaus: {
            basis: "Moeilijke woorden en lange zinnen.",
            simpeler: "Een tekst wordt lastig als er woorden in staan die je niet kent, of zinnen die heel lang zijn. Dan moet je goed opletten.",
            nogSimpeler: "Moeilijke woorden",
          },
        },
      },
      {
        q: "Wat is het **goede nieuws** over begrijpend lezen?",
        options: [
          "Je kunt het leren door slim aan te pakken",
          "Alleen heel slimme kinderen kunnen het",
          "Het lukt pas als je volwassen bent",
          "Oefenen helpt er helemaal niet bij",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Heb je een speciaal soort hersenen nodig, of kan iedereen het oefenen?",
          null,
          "Wat gebeurt er meestal als je iets vaak oefent?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Een vaardigheid",
              tekst: "Begrijpend lezen is een vaardigheid. Dat is iets wat je kunt leren door te oefenen.",
            },
            {
              titel: "Slim aanpakken",
              tekst: "Het gaat niet om slimmer zijn, maar om een slimme aanpak: tekstsoort herkennen, signaalwoorden, skimmen en scannen.",
            },
          ],
          woorden: [
            {
              woord: "vaardigheid",
              uitleg: "Iets wat je kunt door te oefenen.",
            },
            {
              woord: "aanpak",
              uitleg: "De manier waarop je iets doet.",
            },
          ],
          theorie: "Begrijpend lezen leer je door slim aan te pakken: weet welke tekst je leest, let op signaalwoorden en zoek gericht.",
          voorbeelden: [
            {
              type: "oefenen",
              tekst: "Net als fietsen: eerst wiebel je, maar na veel oefenen gaat het vanzelf.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Iedereen kan het",
              uitleg: "Je hoeft niet slimmer te zijn. Met de goede aanpak kan iedereen beter worden in lezen.",
            },
          ],
          niveaus: {
            basis: "Je kunt het leren met een slimme aanpak.",
            simpeler: "Begrijpend lezen is als fietsen: je leert het door te oefenen, niet doordat je extra slim bent.",
            nogSimpeler: "Oefenen helpt",
          },
        },
      },
    ],
  },
  {
    title: "3 tekstsoorten — wat is het doel?",
    explanation: "Een **tekst** kan 3 verschillende doelen hebben. Als je weet welk doel, weet je hoe je 'm moet lezen.\n\n**1. Informatief** *(wil je iets WETEN)*\n• **Doel**: feiten en informatie geven.\n• **Voorbeelden**: krantenartikel, schoolboek, encyclopedie, instructie, recept.\n• **Hoe lees je**: zoek de **feiten** en **kerngegevens**. Wat staat er gewoon LETTERLIJK in?\n• **Signaalwoorden** komen vaak voor in informatieve teksten.\n\n**Voorbeeld**: *\"De Eiffeltoren in Parijs is 330 meter hoog en werd in 1889 gebouwd voor de Wereldtentoonstelling.\"* → feiten gepresenteerd.\n\n**2. Betogend** *(de schrijver wil je OVERTUIGEN)*\n• **Doel**: jouw mening beïnvloeden.\n• **Voorbeelden**: opiniestuk, advertentie, debat, columns.\n• **Hoe lees je**: zoek de **mening** van de schrijver + hun **argumenten**. Maar lees kritisch — accepteer niet alles.\n• **Pas op voor**: emotionele woorden, eenzijdige argumenten, woorden als 'fantastisch', 'verschrikkelijk'.\n\n**Voorbeeld**: *\"Iedereen zou meer fruit moeten eten. Het is gezond, lekker en helpt je beter te leren!\"* → schrijver wil je overtuigen.\n\n**3. Verhalend** *(je wordt VERMAAKT of meegevoerd)*\n• **Doel**: een verhaal vertellen.\n• **Voorbeelden**: roman, kort verhaal, sprookje, dagboek.\n• **Hoe lees je**: zoek de **personages**, het **plot** (wat gebeurt er) en de **boodschap** of moraal.\n\n**Voorbeeld**: *\"Sara was bang. Ze wist niet wat er achter de boom zat. Toen, plotseling, sprong er een konijn tevoorschijn — 'Pff, gelukkig!' dacht ze.\"* → verhaal.\n\n**Trucje om tekstsoort te herkennen**:\n\n| Aanwezig in tekst | Tekstsoort |\n|---|---|\n| Veel feiten + cijfers + namen | Informatief |\n| Mening van schrijver + emotionele woorden | Betogend |\n| Personages + gebeurtenissen + dialoog | Verhalend |\n\nSommige teksten zijn **gemengd**: een verhaal kan ook informatief zijn (bv. historische roman).",
    svg: tekstsoortenSvg(),
    checks: [
      {
        q: "Welke tekstsoort wil je **overtuigen**?",
        options: ["Informatief","Betogend","Verhalend","Beschrijvend"],
        answer: 1,
        wrongHints: ["Wil een tekst met alleen feiten je iets laten geloven, of vooral iets weten?",null,"Probeert een verhaal je te overtuigen, of wil het je vooral meenemen in een gebeurtenis?","Geeft 'beschrijven' een mening, of vooral details?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is overtuigen?", tekst: "Zó praten of schrijven dat iemand JOUW MENING gaat delen." },
            { titel: "Welke tekst doet dat?", tekst: "Een BETOGENDE tekst — geeft een mening en argumenten." },
          ],
          woorden: [
            { woord: "betogend", uitleg: "Een tekst met een mening + argumenten. Wil je overtuigen." },
            { woord: "informatief", uitleg: "Geeft alleen feiten, geen mening." },
            { woord: "verhalend", uitleg: "Vertelt een verhaal, wil je vermaken." },
          ],
          theorie: "3 tekstdoelen: informeren (feiten), betogen (mening), vertellen (verhaal). Alleen betogen wil je overtuigen.",
          voorbeelden: [{ type: "betogen", tekst: "Opiniestuk in de krant 'Iedereen moet meer fruit eten omdat...' = betogend." }],
          basiskennis: [{ onderwerp: "Doel van tekst", uitleg: "Elke tekst heeft een doel — weten, overtuigen of vermaken." }],
          niveaus: {
            basis: "Overtuigen = betogend.",
            simpeler: "Stel je voor: iemand wil je laten geloven dat zonnepanelen goed zijn. Hij schrijft een tekst MET argumenten. Dat heet betogen.",
            nogSimpeler: "Mening + overtuigen = betogend",
          },
        },
      },
      {
        q: "Wat is een typische **informatieve** tekst?",
        options: ["Een sprookje","Een krantenartikel met feiten","Een opiniestuk","Een liedjestekst"],
        answer: 1,
        wrongHints: ["Wat doet een sprookje vooral: feiten geven of een verhaal vertellen?",null,"Geeft een opiniestuk vooral feiten, of probeert het je iets te laten denken?","Wat doet een liedjestekst vaak — informeren, overtuigen of een verhaal vertellen?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is informatief?", tekst: "Een tekst die FEITEN geeft. Geen mening, geen verhaal." },
            { titel: "Welke optie past?", tekst: "Krantenartikel met feiten = pure informatie. Sprookje = verhalend. Opiniestuk = betogend. Liedjestekst = vaak verhalend." },
          ],
          woorden: [
            { woord: "informatief", uitleg: "Geeft feiten + uitleg. Geen mening. Bv. encyclopedie, schoolboek, krantenartikel." },
            { woord: "feit", uitleg: "Iets dat WAAR is, te bewijzen. Bv. 'Brussel is de hoofdstad van België'." },
          ],
          theorie: "Informatieve teksten herken je aan: veel feiten + cijfers + namen, geen 'ik vind', geen verhaal-personages.",
          voorbeelden: [{ type: "informatief", tekst: "'De Eiffeltoren is 330 m hoog en werd in 1889 gebouwd.' = pure feiten = informatief." }],
          basiskennis: [{ onderwerp: "Feit vs mening", uitleg: "Feit = bewijsbaar. Mening = iemands opvatting." }],
          niveaus: {
            basis: "Krantenartikel met feiten = informatief",
            simpeler: "Wat geeft alleen FEITEN? Krantenartikel. Sprookje = verhaal. Opiniestuk = mening. Liedje = vaak verhaal.",
            nogSimpeler: "Feiten = informatief",
          },
        },
      },
      {
        q: "Welk woord helpt herkennen dat een tekst **betogend** is?",
        options: ["'bijvoorbeeld' of 'zoals'","'fantastisch' of 'verschrikkelijk'","'gisteren' of 'daarna'","'de man' of 'het huis'"],
        answer: 1,
        wrongHints: ["Komt 'bijvoorbeeld' alleen voor als iemand je wil overtuigen, of ook bij gewone uitleg?",null,"Wijst 'gisteren' naar een mening, of vooral naar wanneer iets gebeurde?","Vertelt 'de man' iets over de toon van een tekst, of is het neutraal?"],
        uitlegPad: {
          stappen: [
            { titel: "Hoe herken je betogend?", tekst: "Door EMOTIONELE woorden — woorden die een mening uitdrukken." },
            { titel: "Welke optie?", tekst: "'fantastisch' of 'verschrikkelijk' = sterke emotionele kleuring = mening = betogend. Andere opties zijn neutraal." },
          ],
          woorden: [
            { woord: "emotioneel woord", uitleg: "Woord dat een gevoel of mening uitdrukt. Bv. 'fantastisch', 'vreselijk', 'geweldig'." },
            { woord: "neutraal", uitleg: "Zonder mening of gevoel. Bv. 'gisteren', 'de man', 'het huis'." },
          ],
          theorie: "Bij betogende teksten kiest de schrijver bewust kleurrijke, emotionele woorden om JOU emotioneel mee te krijgen. Neutrale woorden geven geen mening.",
          voorbeelden: [{ type: "emotioneel", tekst: "'Het is FANTASTISCH om te helpen' = mening (positief) → betogend." }],
          basiskennis: [{ onderwerp: "Toon = signaal", uitleg: "Hoe een schrijver woorden kiest, vertelt vaak meer dan WAT hij zegt." }],
          niveaus: {
            basis: "Emotioneel woord = mening = betogend.",
            simpeler: "Welk woord laat een GEVOEL zien? 'Fantastisch' (super positief) of 'verschrikkelijk' (super negatief). Die woorden gebruikt iemand alleen als hij een mening heeft. Dus = betogend.",
            nogSimpeler: "Emotie = mening",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Tekst: *'Een giraf is het hoogste dier op het land. Hij eet bladeren uit hoge bomen.'*\n\nWat wil de schrijver met deze tekst?",
        options: [
          "Je informatie geven",
          "Je overtuigen van een mening",
          "Je een verhaal vertellen",
          "Je aan het lachen maken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Zie je ergens 'ik vind' of een woord als 'fantastisch'?",
          "Zijn er personages, en gebeurt er iets spannends?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat staat er?",
              tekst: "Twee feiten over de giraf: hij is het hoogste landdier, en hij eet bladeren uit hoge bomen.",
            },
            {
              titel: "Wat is het doel?",
              tekst: "Feiten geven = informatie geven. Dit is een INFORMATIEVE tekst.",
            },
            {
              titel: "Geen mening, geen verhaal",
              tekst: "Er staan geen emotionele woorden in en er is geen personage dat iets meemaakt.",
            },
          ],
          woorden: [
            {
              woord: "informatief",
              uitleg: "Een tekst die feiten en informatie geeft.",
            },
            {
              woord: "feit",
              uitleg: "Iets wat waar is en wat je kunt nakijken.",
            },
          ],
          theorie: "Veel feiten, cijfers en namen = informatief. Mening en emotionele woorden = betogend. Personages en gebeurtenissen = verhalend.",
          voorbeelden: [
            {
              type: "informatief",
              tekst: "'Amsterdam is de hoofdstad van Nederland.' = een feit = informatief.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Doel van een tekst",
              uitleg: "Elke tekst heeft een doel: informeren, overtuigen of vermaken.",
            },
          ],
          niveaus: {
            basis: "Feiten = informatief = informatie geven.",
            simpeler: "De tekst vertelt alleen hoe het zit met de giraf. Geen mening, geen verhaal. Dus: de schrijver geeft je informatie.",
            nogSimpeler: "Feiten = informatie",
          },
        },
      },
      {
        q: "Tekst: *'Alle scholen moeten een moestuin krijgen! Het is leerzaam, gezond en superleuk.'*\n\nWelke tekstsoort is dit?",
        options: ["Betogend", "Informatief", "Verhalend", "Een gedicht"],
        answer: 0,
        wrongHints: [
          null,
          "Geeft deze tekst alleen feiten, of vindt de schrijver iets?",
          "Is er een personage dat iets meemaakt?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek de mening",
              tekst: "*'Alle scholen moeten een moestuin krijgen!'* Dat vindt de schrijver: het is een mening.",
            },
            {
              titel: "Zoek de argumenten",
              tekst: "Leerzaam, gezond en superleuk: dat zijn argumenten om je te overtuigen. 'Superleuk' is ook een emotioneel woord.",
            },
            {
              titel: "Conclusie",
              tekst: "Mening + argumenten = BETOGEND.",
            },
          ],
          woorden: [
            {
              woord: "betogend",
              uitleg: "Een tekst met een mening en argumenten. De schrijver wil je overtuigen.",
            },
            {
              woord: "argument",
              uitleg: "Een reden die een mening ondersteunt.",
            },
          ],
          theorie: "Betogende teksten herken je aan een mening van de schrijver, argumenten en emotionele woorden zoals 'fantastisch' of 'verschrikkelijk'.",
          voorbeelden: [
            {
              type: "betogend",
              tekst: "'Iedereen zou meer fruit moeten eten. Het is gezond en lekker!' = betogend.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lees kritisch",
              uitleg: "Bij een betogende tekst hoef je niet alles te geloven. Kijk of de argumenten echt kloppen.",
            },
          ],
          niveaus: {
            basis: "Mening + argumenten = betogend.",
            simpeler: "De schrijver vindt dat scholen een moestuin moeten krijgen en geeft redenen. Hij wil jou overtuigen. Dat is betogend.",
            nogSimpeler: "Moeten! = betogend",
          },
        },
      },
      {
        q: "Waaraan herken je een **verhalende** tekst?",
        options: [
          "Er zijn personages en er gebeurt iets",
          "Er staan veel cijfers en jaartallen in",
          "De schrijver geeft vooral zijn mening",
          "Er staan veel argumenten in",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij welke tekstsoort horen veel cijfers en feiten?",
          "Wil een verhaal je overtuigen, of je meenemen in wat er gebeurt?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat doet een verhaal?",
              tekst: "Een verhaal vertelt wat er gebeurt met iemand. Het wil je vermaken of meevoeren.",
            },
            {
              titel: "Waar let je op?",
              tekst: "Personages (wie?), het plot (wat gebeurt er?) en soms een boodschap.",
            },
          ],
          woorden: [
            {
              woord: "personage",
              uitleg: "Iemand die in een verhaal meedoet, zoals Sara of een pratend konijn.",
            },
            {
              woord: "plot",
              uitleg: "Wat er in een verhaal gebeurt.",
            },
          ],
          theorie: "Personages + gebeurtenissen + dialoog = verhalend. Cijfers en feiten = informatief. Mening en argumenten = betogend.",
          voorbeelden: [
            {
              type: "verhalend",
              tekst: "'Sara was bang. Toen sprong er een konijn tevoorschijn.' = personage + gebeurtenis = verhalend.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Gemengde teksten",
              uitleg: "Soms is een verhaal ook een beetje informatief, zoals een verhaal dat zich vroeger afspeelt.",
            },
          ],
          niveaus: {
            basis: "Personages + gebeurtenissen = verhalend.",
            simpeler: "In een verhaal is er iemand (een personage) en er gebeurt iets met die persoon. Zo herken je het.",
            nogSimpeler: "Wie + wat gebeurt",
          },
        },
      },
      {
        q: "Welke tekst is meestal **verhalend**?",
        options: ["Een sprookje", "Een recept", "Een encyclopedie", "Een advertentie"],
        answer: 0,
        wrongHints: [
          null,
          "Wat wil een recept: je vermaken, of uitleggen hoe je iets maakt?",
          null,
          "Wat wil een advertentie dat jij doet?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is verhalend?",
              tekst: "Een tekst die een verhaal vertelt, met personages en gebeurtenissen.",
            },
            {
              titel: "Welke tekst past?",
              tekst: "Een sprookje vertelt een verhaal. Een recept en een encyclopedie geven informatie. Een advertentie wil je overtuigen.",
            },
          ],
          woorden: [
            {
              woord: "encyclopedie",
              uitleg: "Een boek of website vol feiten over allerlei onderwerpen.",
            },
            {
              woord: "advertentie",
              uitleg: "Reclame: een tekst die je iets wil laten kopen of doen.",
            },
          ],
          theorie: "Voorbeelden van verhalende teksten: roman, kort verhaal, sprookje, dagboek.",
          voorbeelden: [
            {
              type: "verhalend",
              tekst: "'Er was eens een prinses die in een hoge toren woonde...' = sprookje = verhalend.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Drie doelen",
              uitleg: "Informatief = weten. Betogend = overtuigen. Verhalend = vermaken.",
            },
          ],
          niveaus: {
            basis: "Sprookje = verhalend.",
            simpeler: "Bij een sprookje hoor je een verhaal: er was eens... Dat is verhalend.",
            nogSimpeler: "Er was eens = verhaal",
          },
        },
      },
      {
        q: "Je leest een **betogende** tekst. Waar let je vooral op?",
        options: [
          "De mening en argumenten van de schrijver",
          "De personages en wat er gebeurt",
          "Alleen de jaartallen in de tekst",
          "Het aantal alinea's",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij welke tekstsoort horen personages?",
          null,
          "Vertelt het aantal alinea's je wat de schrijver wil?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Doel van betogend",
              tekst: "De schrijver wil jou overtuigen van zijn mening.",
            },
            {
              titel: "Waar zoek je dus naar?",
              tekst: "Naar zijn MENING en de ARGUMENTEN die hij geeft. En lees kritisch: geloof niet alles meteen.",
            },
          ],
          woorden: [
            {
              woord: "mening",
              uitleg: "Wat iemand vindt of denkt.",
            },
            {
              woord: "kritisch lezen",
              uitleg: "Goed nadenken of iets wat je leest wel klopt.",
            },
          ],
          theorie: "Per tekstsoort lees je anders: informatief → feiten zoeken; betogend → mening en argumenten; verhalend → personages, plot en boodschap.",
          voorbeelden: [
            {
              type: "argumenten",
              tekst: "'Sport is goed, want je wordt fit en je maakt vrienden.' Mening: sport is goed. Argumenten: fit worden, vrienden maken.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Pas op",
              uitleg: "Emotionele woorden en argumenten van maar één kant zijn trucjes om je over te halen.",
            },
          ],
          niveaus: {
            basis: "Betogend → let op mening + argumenten.",
            simpeler: "Iemand wil je overtuigen. Dan wil je weten: wat vindt hij, en welke redenen geeft hij daarvoor?",
            nogSimpeler: "Mening + redenen",
          },
        },
      },
    ],
  },
  {
    title: "Signaalwoorden — woorden die jou helpen",
    explanation: "**Signaalwoorden** zijn kleine woorden die zeggen **wat er gaat komen** of **hoe iets verbonden is**. Ze zijn cruciaal bij begrijpend lezen.\n\n**6 belangrijke groepen**:\n\n**1. Tijd** *(volgorde)*: eerst, daarna, vervolgens, nu, later, intussen, vroeger, tot slot.\n→ De schrijver vertelt iets in **chronologische volgorde**.\n\n**2. Oorzaak & gevolg** *(waarom)*: omdat, doordat, daardoor, dus, daarom, vandaar.\n→ Iets gebeurt **omdat** iets anders gebeurde. *'Omdat het regende, werd de wedstrijd afgelast.'*\n\n**3. Opsomming** *(meerdere dingen)*: ten eerste, ten tweede, ook, bovendien, verder, daarnaast, ten slotte.\n→ Een **lijstje** wordt opgesomd. *'Ten eerste is fruit gezond. Ten tweede is het lekker. Ten derde is het goedkoop.'*\n\n**4. Tegenstelling** *(maar, niet)*: maar, echter, toch, hoewel, desondanks, in tegenstelling tot, daarentegen.\n→ Iets onverwachts of tegenovergestelds komt. *'Het regent, **maar** we gaan toch buiten spelen.'*\n\n**5. Voorbeeld** *(zoals)*: bijvoorbeeld, zoals, als illustratie, namelijk, bijv.\n→ Er komt een **voorbeeld** of toelichting.\n\n**6. Conclusie / samenvatting**: kortom, dus, samenvattend, concluderend, tot slot.\n→ De schrijver **vat samen** of **trekt een conclusie**.\n\n**Waarom belangrijk?**\nSignaalwoorden vertellen je **hoe alinea's of zinnen verbonden zijn**. Als je een **oorzaak/gevolg-vraag** krijgt, zoek dan signaalwoorden zoals 'omdat', 'daardoor'. Als de vraag is over een **tegenstelling**, zoek 'maar' of 'echter'.\n\n**Voorbeeld**:\n*\"Veel kinderen kijken te veel TV. **Daardoor** lezen ze minder. **Daarentegen** zijn er ook kinderen die juist veel boeken lezen. **Bijvoorbeeld** Sara, die elke dag een boek leest. **Kortom**: het verschilt per kind.\"*\n\n• 'Daardoor' = gevolg → 'minder lezen' is gevolg van 'te veel TV'.\n• 'Daarentegen' = tegenstelling → er bestaan ook andere kinderen.\n• 'Bijvoorbeeld' = voorbeeld → Sara als illustratie.\n• 'Kortom' = conclusie → de schrijver vat samen.\n\n**Pro-tip op de Doorstroomtoets**: als de vraag is *\"Wat is het verband tussen X en Y?\"* — kijk naar de signaalwoorden ertussen. Die geven het antwoord meestal letterlijk.",
    svg: signaalwoordenSvg(),
    checks: [
      {
        q: "Welk signaalwoord laat **oorzaak/gevolg** zien?",
        options: ["maar","daardoor","bijvoorbeeld","ten slotte"],
        answer: 1,
        wrongHints: ["Wat doet 'maar' — laat het zien dat iets veroorzaakt wordt, of zet het iets tegenover elkaar?",null,"Volgt na 'bijvoorbeeld' een gevolg, of een illustratie?","Komt 'ten slotte' aan het begin of aan het eind van een rijtje?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is oorzaak/gevolg?", tekst: "Iets gebeurt OMDAT iets anders gebeurde. Bv: 'Het regende, DAARDOOR werd de wedstrijd afgelast.'" },
            { titel: "Welk woord wijst dat aan?", tekst: "'Daardoor' = 'door dat' = gevolg. 'Maar' = tegenstelling, 'bijvoorbeeld' = illustratie, 'ten slotte' = volgorde-tijd. Alleen B." },
          ],
          woorden: [
            { woord: "oorzaak", uitleg: "Wat ergens VAN komt — de reden." },
            { woord: "gevolg", uitleg: "Wat ERUIT komt — het resultaat." },
            { woord: "signaalwoord", uitleg: "Klein woordje dat aangeeft hoe zinnen verbonden zijn." },
          ],
          theorie: "Oorzaak/gevolg-signaalwoorden: omdat, doordat, daardoor, dus, daarom, vandaar. Allemaal koppelen oorzaak ↔ gevolg.",
          voorbeelden: [{ type: "gevolg", tekst: "'Hij at te veel snoep, DAARDOOR werd hij ziek.' = oorzaak (snoep) → gevolg (ziek)." }],
          basiskennis: [{ onderwerp: "6 signaalgroepen", uitleg: "Tijd / Oorzaak/gevolg / Opsomming / Tegenstelling / Voorbeeld / Conclusie." }],
          niveaus: {
            basis: "'Daardoor' = oorzaak/gevolg.",
            simpeler: "Stel: 'Het regende, DAARDOOR werd het modderig.' → regen = oorzaak, modder = gevolg. 'Daardoor' wijst dat verband aan.",
            nogSimpeler: "Daardoor = gevolg",
          },
        },
      },
      {
        q: "Welk signaalwoord introduceert een **tegenstelling**?",
        options: ["dus","echter","ook","bijvoorbeeld"],
        answer: 1,
        wrongHints: ["Trekt 'dus' een conclusie, of zet het iets tegenover iets anders?",null,"Voegt 'ook' iets toe aan een rij, of laat het een tegenstelling zien?","Geeft 'bijvoorbeeld' een tegenstelling of een illustratie?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een tegenstelling?", tekst: "Iets ONVERWACHTS of TEGENOVERGESTELDS van wat eraan voorafging. 'Het regent. We gaan ECHTER toch buiten spelen.'" },
            { titel: "Welk woord wijst dat aan?", tekst: "'Echter' = klassiek tegenstelling-signaal. 'Dus' = conclusie, 'ook' = opsomming, 'bijvoorbeeld' = illustratie. Alleen B." },
          ],
          woorden: [
            { woord: "tegenstelling", uitleg: "Iets dat TEGENOVERGESTELD is van wat ervoor stond." },
            { woord: "echter", uitleg: "Formele variant van 'maar'. Wijst op een tegenstelling." },
          ],
          theorie: "Tegenstelling-signaalwoorden: maar, echter, toch, hoewel, desondanks, daarentegen, in tegenstelling tot.",
          voorbeelden: [{ type: "tegenstelling", tekst: "'Hij studeerde hard. Hij zakte ECHTER voor de toets.' = onverwacht / tegenovergesteld." }],
          basiskennis: [{ onderwerp: "Synoniemen tegenstelling", uitleg: "'Maar' (informeel) = 'echter' (formeel). Beide signaleren tegenstelling." }],
          niveaus: {
            basis: "'Echter' = tegenstelling.",
            simpeler: "Stel: 'Het is koud. Ik ga ECHTER zwemmen.' Het tweede is ONVERWACHT (je verwacht dat ik niet ga). 'Echter' wijst dat aan.",
            nogSimpeler: "Echter = tegen",
          },
        },
      },
      {
        q: "Welk woord vat samen / sluit af?",
        options: ["kortom","ten eerste","echter","gisteren"],
        answer: 0,
        wrongHints: [null,"Komt 'ten eerste' aan het begin of aan het einde?","Sluit 'echter' iets af, of zet het iets tegenover iets anders?","Geeft 'gisteren' een conclusie, of zegt het iets over wanneer iets gebeurde?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat doet samenvatten?", tekst: "Aan het EINDE van een tekst de belangrijkste punten kort herhalen." },
            { titel: "Welk woord wijst dat aan?", tekst: "'Kortom' = klassiek samenvatting-signaal. 'Ten eerste' = begin, 'echter' = tegenstelling, 'gisteren' = tijd. Alleen A." },
          ],
          woorden: [
            { woord: "kortom", uitleg: "Samenvattend, in het kort. Sluit een tekst of betoog af." },
            { woord: "conclusie", uitleg: "De eindconclusie — wat je uit het hele verhaal kunt opmaken." },
          ],
          theorie: "Samenvatting/conclusie-signaalwoorden: kortom, dus, samenvattend, concluderend, tot slot.",
          voorbeelden: [{ type: "samenvatten", tekst: "'Argument 1, argument 2, argument 3. KORTOM: ik vind dat iedereen meer moet sporten.' = afsluiten + samenvatten." }],
          basiskennis: [{ onderwerp: "Slot van tekst", uitleg: "De laatste alinea heeft vaak 'kortom' of 'tot slot' om af te ronden." }],
          niveaus: {
            basis: "'Kortom' = samenvatten.",
            simpeler: "Stel: je vertelt 3 dingen aan een vriend en wilt ze samenvatten in 1 conclusie. 'KORTOM:...' Dat is samenvatten.",
            nogSimpeler: "Kortom = samenvatten",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk woord past op de puntjes?\n\n*'Het sneeuwde heel hard. ... bleef de school gewoon open.'*",
        options: ["Toch", "Daarom", "Bijvoorbeeld", "Ten eerste"],
        answer: 0,
        wrongHints: [
          null,
          "Blijft een school open OMDAT het hard sneeuwt?",
          null,
          "Begint hier een rijtje met redenen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat verwacht je?",
              tekst: "Als het heel hard sneeuwt, verwacht je misschien dat de school dichtgaat.",
            },
            {
              titel: "Wat gebeurt er?",
              tekst: "De school blijft gewoon open. Dat is ONVERWACHT. Daar past een tegenstelling-woord bij: 'toch'.",
            },
          ],
          woorden: [
            {
              woord: "tegenstelling",
              uitleg: "Iets wat anders is dan je verwacht, of het tegenovergestelde.",
            },
            {
              woord: "toch",
              uitleg: "Ondanks dat; je verwacht iets anders.",
            },
          ],
          theorie: "Tegenstelling-signaalwoorden: maar, echter, toch, hoewel, desondanks, daarentegen.",
          voorbeelden: [
            {
              type: "toch",
              tekst: "'Het regent, maar we gaan toch buiten spelen.' → onverwacht.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lees de zin hardop",
              uitleg: "Probeer elk woord op de puntjes. Welke zin klinkt logisch?",
            },
          ],
          niveaus: {
            basis: "'Toch' = tegenstelling.",
            simpeler: "Hard sneeuwen en dan blijft de school open: dat verwacht je niet. Bij iets onverwachts past 'toch'.",
            nogSimpeler: "Onverwacht = toch",
          },
        },
      },
      {
        q: "Welk signaalwoord betekent ongeveer hetzelfde als **'bijvoorbeeld'**?",
        options: ["zoals", "maar", "daarna", "dus"],
        answer: 0,
        wrongHints: [
          null,
          "Komt er na 'maar' een voorbeeld, of een tegenstelling?",
          null,
          "Trekt 'dus' een conclusie, of geeft het een voorbeeld?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat doet 'bijvoorbeeld'?",
              tekst: "Na 'bijvoorbeeld' komt een voorbeeld of toelichting.",
            },
            {
              titel: "Welk woord doet hetzelfde?",
              tekst: "'Zoals' kondigt ook een voorbeeld aan: 'dieren zoals de egel'.",
            },
          ],
          woorden: [
            {
              woord: "voorbeeld",
              uitleg: "Iets wat laat zien wat je bedoelt.",
            },
            {
              woord: "toelichting",
              uitleg: "Extra uitleg.",
            },
          ],
          theorie: "Voorbeeld-signaalwoorden: bijvoorbeeld, zoals, namelijk, bijv.",
          voorbeelden: [
            {
              type: "zoals",
              tekst: "'Sommige dieren houden een winterslaap, zoals de egel.' = 'bijvoorbeeld de egel'.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Zes groepen",
              uitleg: "Tijd, oorzaak/gevolg, opsomming, tegenstelling, voorbeeld, conclusie.",
            },
          ],
          niveaus: {
            basis: "'Zoals' = 'bijvoorbeeld'.",
            simpeler: "'Fruit, bijvoorbeeld appels' en 'fruit, zoals appels' betekenen hetzelfde.",
            nogSimpeler: "Zoals = bijvoorbeeld",
          },
        },
      },
      {
        q: "Tekst: *'Omdat de bus te laat was, kwam Noor te laat op school.'*\n\nWat is hier de **oorzaak**?",
        options: [
          "De bus was te laat",
          "Noor kwam te laat op school",
          "Noor fietste naar school",
          "De school begon later",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Is dit de reden, of wat eruit volgt?",
          "Staat in de tekst hoe Noor naar school ging?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek het signaalwoord",
              tekst: "Het woord *'Omdat'* zegt: nu komt de reden.",
            },
            {
              titel: "Wat is de reden?",
              tekst: "Na 'omdat' staat: *'de bus te laat was'*. Dat is de oorzaak.",
            },
            {
              titel: "En het gevolg?",
              tekst: "Wat eruit volgt: *'kwam Noor te laat op school'*. Dat is het gevolg.",
            },
          ],
          woorden: [
            {
              woord: "oorzaak",
              uitleg: "De reden waardoor iets gebeurt.",
            },
            {
              woord: "gevolg",
              uitleg: "Wat er gebeurt door de oorzaak.",
            },
          ],
          theorie: "Oorzaak/gevolg-signaalwoorden: omdat, doordat, daardoor, dus, daarom, vandaar. Na 'omdat' en 'doordat' komt de oorzaak.",
          voorbeelden: [
            {
              type: "omdat",
              tekst: "'Omdat het regende, werd de wedstrijd afgelast.' Oorzaak: regen. Gevolg: afgelast.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vraag het jezelf",
              uitleg: "Waardoor gebeurde het? = oorzaak. Wat gebeurde er daardoor? = gevolg.",
            },
          ],
          niveaus: {
            basis: "Oorzaak = de bus was te laat.",
            simpeler: "Waarom kwam Noor te laat? Omdat de bus te laat was. Het antwoord op 'waarom?' is de oorzaak.",
            nogSimpeler: "Waarom? = oorzaak",
          },
        },
      },
    ],
  },
  {
    title: "Tekst-opbouw — alinea's, hoofdgedachte",
    explanation: "Een goede tekst is **niet zomaar een rommeltje van zinnen** — er zit **structuur** in. Als je die structuur kent, lees je veel sneller.\n\n**De alinea**\nEen tekst is opgedeeld in **alinea's** (een blok zinnen die samen één onderwerp behandelen). Elke nieuwe alinea = **nieuw deelonderwerp**.\n\n**De hoofdgedachte**\nDe **hoofdgedachte** is de **kern-boodschap** van de tekst — wat de schrijver echt wil zeggen.\n\nWaar staat de hoofdgedachte vaak?\n• In de **eerste alinea** (introductie).\n• In de **laatste alinea** (samenvatting/conclusie).\n• Soms in de **titel**.\n• Soms in een zin met 'kortom', 'samenvattend' of 'het belangrijkste is...'.\n\n**Voorbeeld**:\n*\"**Te weinig water drinken is slecht voor je lichaam.**\n\nJe lichaam heeft elke dag ongeveer 1,5 liter water nodig. Zonder voldoende water krijg je hoofdpijn, kun je je slechter concentreren, en raak je sneller moe.\n\nVeel kinderen drinken te weinig — vooral op school. Een tip: zet altijd een bidon op je tafel.\n\n**Kortom: drink genoeg water, dat is gezonder.**\"*\n\nDe **hoofdgedachte** staat in de eerste regel én wordt in de laatste regel herhaald: *drink genoeg water*.\n\n**Standaard tekstopbouw — drie delen**:\n\n**1. Inleiding** *(eerste alinea)*\nVertelt **waar de tekst over gaat** + introduceert het onderwerp. Vaak ook de hoofdgedachte.\n\n**2. Kern** *(middelste alinea's)*\nUitleg, voorbeelden, argumenten, details. Hier staan de **antwoorden** op de meeste tekstvragen.\n\n**3. Slot** *(laatste alinea)*\nSamenvatting + conclusie + soms een vraag aan de lezer.\n\n**Trucje voor 'hoofdgedachte'-vragen**:\n• Lees alleen **eerste + laatste zin** van elke alinea.\n• Schrijf in **één zin** op: 'Deze tekst gaat over: ...'\n• Vergelijk met de antwoordopties.\n\n**Veelvoorkomende fout**: kinderen kiezen een **detail** ipv de hoofdgedachte. Bv. 'Sara heeft een bidon' (dat is een detail) ipv 'Drinken is belangrijk' (dat is de hoofdgedachte).\n\n**Pro-tip**: als de vraag is *\"Wat is de boodschap van de tekst?\"* — zoek **iets dat in de hele tekst terugkomt**, niet één detail.",
    svg: tekstsoortenSvg(),
    checks: [
      {
        q: "Wat is de **hoofdgedachte**?",
        options: ["De grote kernboodschap van de tekst","De eerste zin","Een random detail","De titel"],
        answer: 0,
        wrongHints: [null,"Past de boodschap van een hele tekst altijd in alleen die eerste zin?","Is een klein feit hetzelfde als de boodschap van de hele tekst?","Geeft de titel altijd de hele boodschap, of is het meer een hint?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is hoofdgedachte?", tekst: "De ENE belangrijkste boodschap van de hele tekst. Niet 1 zin, niet 1 detail, niet de titel." },
            { titel: "Verschil met andere opties", tekst: "Eerste zin = vaak inleiding-feit, niet altijd boodschap. Detail = klein onderdeel. Titel = hint maar te kort." },
          ],
          woorden: [
            { woord: "kernboodschap", uitleg: "De belangrijkste BOODSCHAP — wat moet je onthouden van de hele tekst." },
            { woord: "detail", uitleg: "Een KLEIN feit, niet het hoofdpunt." },
          ],
          theorie: "Hoofdgedachte = wat in ELKE alinea op een of andere manier terugkomt. De rode draad van het hele stuk.",
          voorbeelden: [{ type: "rode draad", tekst: "Tekst over fiets door 4 alinea's = rode draad VERANDERING. Hoofdgedachte = 'fiets is in 200 jaar veranderd'." }],
          basiskennis: [{ onderwerp: "1 boodschap per tekst", uitleg: "Een tekst heeft 1 hoofdgedachte. Alle alinea's ondersteunen die." }],
          niveaus: {
            basis: "Hoofdgedachte = grote kernboodschap.",
            simpeler: "Stel, een vriend vraagt 'waar gaat dat artikel over?'. Jij antwoordt in 1 zin = de hoofdgedachte.",
            nogSimpeler: "Hele boodschap",
          },
        },
      },
      {
        q: "Waar staat de **hoofdgedachte** vaak?",
        options: ["In de inleiding of conclusie","Helemaal in het midden","In een voetnoot","In de spelling van moeilijke woorden"],
        answer: 0,
        wrongHints: [null,"Waar lees jij meestal eerst en laatst — in het midden of aan begin/eind?","Staat de kern van een verhaal vaak weggestopt in een voetnoot?","Heeft moeilijke spelling iets te maken met de boodschap van een tekst?"],
        uitlegPad: {
          stappen: [
            { titel: "Waar zoek je eerst?", tekst: "Begin (inleiding) of einde (conclusie). Daar zet de schrijver vaak zijn boodschap." },
            { titel: "Waarom?", tekst: "Schrijvers willen je VAST PAKKEN met de boodschap (begin) of HERHALEN zodat je het onthoudt (einde)." },
          ],
          woorden: [
            { woord: "inleiding", uitleg: "Eerste alinea — introduceert het onderwerp." },
            { woord: "conclusie", uitleg: "Laatste alinea — vat samen of trekt slot-beslissing." },
            { woord: "voetnoot", uitleg: "Klein-tekstje onderaan een pagina met extra info. Niet de hoofdboodschap." },
          ],
          theorie: "**Standaard tekstopbouw**: inleiding → kern → slot. Hoofdgedachte vaak in 1e of laatste alinea, soms in titel.",
          voorbeelden: [{ type: "begin+eind", tekst: "Tekst opent: 'Drinken is belangrijk.' Sluit af: 'Kortom: drink genoeg water.' Hoofdgedachte = drinken belangrijk." }],
          basiskennis: [{ onderwerp: "Eerste + laatste tip", uitleg: "Lees eerste én laatste alinea bij hoofdgedachte-vragen. Dat scheelt heel veel tijd." }],
          niveaus: {
            basis: "Begin of eind van tekst.",
            simpeler: "Bij een verhaal of artikel komt het belangrijkste vaak BIJ HET BEGIN of HET EIND. Niet midden in.",
            nogSimpeler: "Begin/eind",
          },
        },
      },
      {
        q: "Hoe vind je snel de hoofdgedachte?",
        options: ["Lees eerste + laatste zin van elke alinea","Lees alleen de moeilijkste woorden","Sla alle alinea's over","Kijk alleen naar de titel"],
        answer: 0,
        wrongHints: [null,"Snap je een tekst als je alleen de moeilijke woorden bekijkt?","Kun je de boodschap vinden zonder de tekst te bekijken?","Is een titel altijd genoeg, of moet je ook in de tekst kijken?"],
        uitlegPad: {
          stappen: [
            { titel: "Strategie", tekst: "Niet de hele tekst woord-voor-woord. Pak de eerste + laatste zin van ELKE alinea — daar staat het belangrijkste." },
            { titel: "Waarom werkt dit?", tekst: "Schrijvers zetten hun KERNBOODSCHAP vaak in de eerste zin van een alinea (= 'topic sentence') en herhalen 'm aan het einde." },
          ],
          woorden: [
            { woord: "skimmen", uitleg: "Snel-overzicht-techniek: lees alleen titels, eerste zinnen, dik-gedrukt." },
            { woord: "topic sentence", uitleg: "Eerste zin van een alinea — geeft vaak het mini-onderwerp aan." },
          ],
          theorie: "Snelle hoofdgedachte-vind-strategie:\n1. Lees titel\n2. Lees eerste zin van elke alinea\n3. Lees laatste zin van laatste alinea\n4. Schrijf in 1 zin: 'Deze tekst gaat over...'",
          voorbeelden: [{ type: "skim", tekst: "4 alinea's? 4 eerste zinnen + 1 laatste = 5 zinnen lezen. In 30 sec heb je de boodschap." }],
          basiskennis: [{ onderwerp: "Tijd is kostbaar", uitleg: "De toets heeft 5-7 min per tekst. Skimmen = sneller, niet minder grondig." }],
          niveaus: {
            basis: "Eerste + laatste zin per alinea.",
            simpeler: "Niet alle 200 woorden lezen. Lees alleen de eerste zin van elke alinea — daar staat meestal het hoofdpunt. Plus de laatste zin (die vat vaak samen).",
            nogSimpeler: "Skim eerste/laatste zinnen",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Uit welke **drie delen** bestaat een tekst meestal?",
        options: [
          "Inleiding, kern en slot",
          "Titel, plaatje en naam",
          "Vraag, antwoord en uitleg",
          "Woord, zin en letter",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Zijn een plaatje en een naam delen van de tekst zelf?",
          null,
          "Gaat dit over de opbouw van een tekst, of over kleine stukjes taal?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Begin",
              tekst: "De INLEIDING vertelt waar de tekst over gaat.",
            },
            {
              titel: "Midden",
              tekst: "De KERN geeft uitleg, voorbeelden en details.",
            },
            {
              titel: "Eind",
              tekst: "Het SLOT vat samen of trekt een conclusie.",
            },
          ],
          woorden: [
            {
              woord: "inleiding",
              uitleg: "Het begin van een tekst.",
            },
            {
              woord: "kern",
              uitleg: "Het middelste, grootste deel van een tekst.",
            },
            {
              woord: "slot",
              uitleg: "Het einde van een tekst.",
            },
          ],
          theorie: "Standaard tekstopbouw: inleiding → kern → slot. De hoofdgedachte staat vaak in de inleiding of in het slot.",
          voorbeelden: [
            {
              type: "opbouw",
              tekst: "Tekst over water drinken: inleiding 'water is belangrijk', kern 'je hebt elke dag water nodig', slot 'kortom: drink genoeg'.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Net als een boterham",
              uitleg: "Brood, beleg, brood: het begin en eind houden het midden bij elkaar.",
            },
          ],
          niveaus: {
            basis: "Inleiding + kern + slot.",
            simpeler: "Een tekst heeft een begin, een midden en een eind. Die heten inleiding, kern en slot.",
            nogSimpeler: "Begin, midden, eind",
          },
        },
      },
      {
        q: "In welk deel van een tekst staan meestal de **uitleg, voorbeelden en details**?",
        options: ["In de kern", "In de titel", "In de inleiding", "In het slot"],
        answer: 0,
        wrongHints: [
          null,
          "Past er veel uitleg in een paar woorden boven de tekst?",
          "Wat doet de inleiding vooral: vertellen waar het over gaat, of alles uitleggen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Drie delen",
              tekst: "Inleiding (waar gaat het over?), kern (uitleg) en slot (samenvatting).",
            },
            {
              titel: "Waar staat de uitleg?",
              tekst: "In de KERN, de middelste alinea's. Daar staan uitleg, voorbeelden, argumenten en details.",
            },
          ],
          woorden: [
            {
              woord: "kern",
              uitleg: "Het middelste deel van een tekst, met de meeste informatie.",
            },
            {
              woord: "detail",
              uitleg: "Een klein feit.",
            },
          ],
          theorie: "In de kern staan de antwoorden op de meeste tekstvragen. De hoofdgedachte vind je vaker in de inleiding of het slot.",
          voorbeelden: [
            {
              type: "kern",
              tekst: "Tekst over water: 'Zonder water krijg je hoofdpijn en word je sneller moe.' Dat is uitleg uit de kern.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Slim zoeken",
              uitleg: "Een detailvraag? Kijk in de kern. Een hoofdgedachte-vraag? Kijk naar begin en eind.",
            },
          ],
          niveaus: {
            basis: "Uitleg en details = kern.",
            simpeler: "Het midden van de tekst is het grootste stuk. Daar legt de schrijver alles uit.",
            nogSimpeler: "Midden = uitleg",
          },
        },
      },
    ],
  },
  {
    title: "Skim + scan — slim lezen",
    explanation: "**Twee technieken** die je veel tijd besparen op de Doorstroomtoets:\n\n**1. SKIMMEN** — *snel overzicht*\nDoel: weten waar de tekst over gaat, zonder hem helemaal te lezen.\n\n**Hoe**:\n• Lees de **titel** + **eerste zin** van elke alinea.\n• Zoek **vetgedrukte woorden** of woorden met aanhalingstekens.\n• Kijk naar **plaatjes** + onderschriften.\n• Tijd: 30 seconden voor een hele tekst.\n\n**Wanneer**:\n• Aan het **begin** — om in 30 sec te weten waar de tekst over gaat.\n• Voordat je vragen leest.\n\n**2. SCANNEN** — *gericht zoeken*\nDoel: een **specifiek antwoord** vinden zonder alle tekst te lezen.\n\n**Hoe**:\n• Je hebt al de vraag gelezen.\n• Kijk in welk deel van de tekst het antwoord ZOU staan.\n• Loop daar **kris-kras doorheen** met je oog tot je een **kernwoord** uit de vraag tegenkomt.\n• Lees alleen **die zin** + de zin ervoor en erna.\n\n**Wanneer**:\n• Bij **specifieke vragen**: 'Hoeveel jaar leeft een hond gemiddeld?'\n• Niet bij hoofd-idee-vragen — daar moet je echt lezen.\n\n**De ideale leesvolgorde voor de Doorstroomtoets**:\n\n**Stap 1**: SKIM de tekst (~30 sec) → wat is het onderwerp?\n**Stap 2**: Lees de **vragen** door (~30 sec) → wat moet je weten?\n**Stap 3**: SCAN voor antwoorden (~1-2 min per vraag) → zoek gericht.\n**Stap 4**: Bij twijfel — lees nogmaals het stukje rond het antwoord.\n\n**Belangrijk: het antwoord staat altijd in de tekst** *(of is logisch af te leiden)*.\n\n**Veelgemaakte fout**: alle teksten woord-voor-woord lezen vanaf de eerste zin tot de laatste. Dat kost veel te veel tijd voor een toets.\n\n**Pro-trucje**: bij de Doorstroomtoets heb je **~5-7 minuten per tekst** met 3-5 vragen. Verdeel: ~1 min skim + 4-6 min vragen. Niet meer dan 2 min op 1 vraag.\n\n**Wat als je geen antwoord vindt?**\n• Lees de zin **eromheen** in de tekst — soms zit het verstopt.\n• Vraag **anders gesteld**: het antwoord staat misschien in andere woorden.\n• Kun je het echt niet vinden? **Skip** + ga door.",
    svg: signaalwoordenSvg(),
    checks: [
      {
        q: "Wat is **skimmen**?",
        options: ["Snel overzicht krijgen door titels en eerste zinnen","Heel langzaam woord-voor-woord","De hele tekst overslaan","Vragen beantwoorden zonder de tekst te lezen"],
        answer: 0,
        wrongHints: [null,"Hoort 'snel overzicht' bij langzaam alles lezen of bij iets anders?","Sla je bij skimmen alles over, of pak je juist de hoofdpunten?","Heeft skimmen te maken met lezen of met kansberekening?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is skimmen?", tekst: "Engels woord voor 'snel overvliegen'. Je leest alleen de KERN — titels, eerste zinnen, vetgedrukt." },
            { titel: "Wat het NIET is", tekst: "Geen langzaam woord-voor-woord. Geen overslaan. Geen gokken. Het is gericht-snel-lezen." },
          ],
          woorden: [
            { woord: "skimmen", uitleg: "Snel overzicht krijgen — 30 sec voor een hele tekst." },
            { woord: "scannen", uitleg: "Gericht zoeken — heel ander iets dan skimmen." },
          ],
          theorie: "Skimmen = water-skiën-vergelijking. Je gaat licht over het water (de tekst) — niet duiken. Pakt alleen het OPPERVLAKKIGE.",
          voorbeelden: [{ type: "skim", tekst: "Krantenartikel met 8 alinea's. Skim: titel + eerste zin elke alinea = je weet het onderwerp in 30 sec." }],
          basiskennis: [{ onderwerp: "Snelle vs grondige", uitleg: "Skimmen = snel oppervlakkig. Diep lezen = grondig. Beide hebben hun moment." }],
          niveaus: {
            basis: "Skimmen = snel overzicht via titels + eerste zinnen.",
            simpeler: "Stel: je hebt geen tijd om een artikel helemaal te lezen. Wat doe je? Titel kijken + eerste zinnen scannen. Dat is skimmen.",
            nogSimpeler: "Skim = snel overzicht",
          },
        },
      },
      {
        q: "Wat is **scannen**?",
        options: ["Gericht zoeken naar een specifiek antwoord","Langzaam herlezen","De tekst kopiëren","Iemand anders laten lezen"],
        answer: 0,
        wrongHints: [null,"Pak je bij scannen alles weer op, of zoek je iets specifieks?","Hoort kopiëren bij scannen, of bij iets heel anders?","Mag iemand anders jouw werk doen tijdens een toets — en is dat scannen?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is scannen?", tekst: "Gericht ZOEKEN naar 1 specifiek antwoord. Net als bij een supermarkt-scanner: zoek de barcode, niet alles." },
            { titel: "Hoe?", tekst: "Je weet de vraag al. Loop met je oog door de tekst, zoek het kernwoord. Lees alleen DIE zin." },
          ],
          woorden: [
            { woord: "scannen", uitleg: "Gericht zoeken naar een specifiek antwoord in een tekst." },
            { woord: "kernwoord", uitleg: "Het belangrijkste woord uit de vraag — wat je in de tekst gaat zoeken." },
          ],
          theorie: "Verschil skim vs scan: Skim = ALLES, oppervlakkig. Scan = ÉÉN ding, gericht. Beide zijn snel.",
          voorbeelden: [{ type: "scannen", tekst: "Vraag: 'Hoeveel mensen wonen in Brussel?' Scan tekst voor 'Brussel' of een aantal-cijfer. Lees die zin. Klaar." }],
          basiskennis: [{ onderwerp: "Wanneer wat?", uitleg: "Skim BIJ START. Scan PER VRAAG. Niet alles tegelijk." }],
          niveaus: {
            basis: "Scannen = gericht zoeken.",
            simpeler: "Stel: je zoekt jouw naam in een ledenlijst van 100 namen. Lees je alle 100? Nee — je SCANT, je oog springt naar 'M' en daar zoek je verder. Dat is scannen.",
            nogSimpeler: "Scan = gericht zoeken",
          },
        },
      },
      {
        q: "Welke is de **ideale** leesvolgorde voor de Doorstroomtoets?",
        options: ["Skim → vragen lezen → scannen voor antwoord","Hele tekst woord-voor-woord, dan vragen","Vragen eerst gokken, dan tekst lezen","Alleen vragen lezen, geen tekst"],
        answer: 0,
        wrongHints: [null,"Lukt het je in de tijd om elke zin woord-voor-woord te lezen?","Kun je vragen goed beantwoorden zónder de tekst te bekijken?","Heb je genoeg aan alleen de vragen, of moet de tekst er ook bij?"],
        uitlegPad: {
          stappen: [
            { titel: "3 stappen voor de Doorstroomtoets", tekst: "1. SKIM tekst (30 sec) — wat is onderwerp? 2. Lees alle vragen — wat moet je weten? 3. SCAN voor elk antwoord." },
            { titel: "Waarom in deze volgorde?", tekst: "Tekst eerst woord-voor-woord = TE TRAAG. Vragen gokken = onbetrouwbaar. Alleen vragen lezen = niet genoeg info." },
          ],
          woorden: [
            { woord: "leesvolgorde", uitleg: "De stappen waarin je een tekst + vragen aanpakt." },
          ],
          theorie: "Tijd op de Doorstroomtoets: ~5-7 min per tekst met 3-5 vragen. Volgorde skim→vragen→scan past in die tijd. Anders loop je achter.",
          voorbeelden: [{ type: "tijd", tekst: "Skim 30 sec + vragen lezen 30 sec + scannen ~3 min = ~4 min. Je hebt 1-3 min over voor twijfelvragen." }],
          basiskennis: [{ onderwerp: "Strategie wint van snelheid", uitleg: "Slim aanpakken > snel lezen. Een goede strategie scheelt minuten." }],
          niveaus: {
            basis: "Skim → vragen → scan.",
            simpeler: "Stappen voor de Doorstroomtoets: (1) snel overzicht tekst (skim), (2) lees wat je moet vinden (vragen), (3) zoek elk antwoord gericht (scan). Dat is de slimste volgorde.",
            nogSimpeler: "Skim → vragen → scan",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Vraag bij een tekst: *'In welk jaar werd de brug gebouwd?'*\n\nWelke techniek gebruik je het best?",
        options: ["Scannen", "Skimmen", "Alles woord voor woord lezen", "Alleen de titel lezen"],
        answer: 0,
        wrongHints: [
          null,
          "Geeft skimmen je één precies antwoord, of vooral een overzicht?",
          "Heb je daar op een toets genoeg tijd voor?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat voor vraag is het?",
              tekst: "Je zoekt één specifiek ding: een jaartal.",
            },
            {
              titel: "Welke techniek past?",
              tekst: "Gericht zoeken naar één ding = SCANNEN. Je oog zoekt naar een jaartal of het woord 'brug'.",
            },
          ],
          woorden: [
            {
              woord: "scannen",
              uitleg: "Gericht zoeken naar één specifiek antwoord.",
            },
            {
              woord: "skimmen",
              uitleg: "Snel een overzicht krijgen van de hele tekst.",
            },
          ],
          theorie: "Skimmen = snel overzicht (aan het begin). Scannen = gericht zoeken (per vraag). Bij specifieke vragen scan je.",
          voorbeelden: [
            {
              type: "scannen",
              tekst: "Vraag: 'Hoeveel jaar leeft een hond gemiddeld?' → scan naar een getal en het woord 'jaar'.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kernwoord",
              uitleg: "Kies een kernwoord uit de vraag en zoek dat in de tekst.",
            },
          ],
          niveaus: {
            basis: "Eén specifiek ding zoeken = scannen.",
            simpeler: "Je wilt alleen een jaartal weten. Dan laat je je ogen snel zoeken naar een getal. Dat is scannen.",
            nogSimpeler: "Scan naar het jaartal",
          },
        },
      },
      {
        q: "Welke aanpak kost op de toets **veel te veel tijd**?",
        options: [
          "Elke tekst woord voor woord lezen",
          "Eerst de tekst skimmen",
          "Gericht scannen naar het antwoord",
          "De vragen vooraf bekijken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kost skimmen veel of weinig tijd?",
          null,
          "Helpt het om te weten wat je moet zoeken?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "De veelgemaakte fout",
              tekst: "Alle teksten woord voor woord lezen, van de eerste tot de laatste zin.",
            },
            {
              titel: "Waarom is dat niet slim?",
              tekst: "Dat kost veel te veel tijd. Skimmen, vragen lezen en gericht scannen gaat veel sneller.",
            },
          ],
          woorden: [
            {
              woord: "woord voor woord",
              uitleg: "Elk woord lezen, niets overslaan.",
            },
            {
              woord: "gericht",
              uitleg: "Met een doel; je weet wat je zoekt.",
            },
          ],
          theorie: "Slimme volgorde: 1) skim de tekst, 2) lees de vragen, 3) scan voor elk antwoord, 4) bij twijfel lees je het stukje eromheen nog eens.",
          voorbeelden: [
            {
              type: "tijd",
              tekst: "Skimmen 30 sec + vragen 30 sec + scannen = een paar minuten. Alles woord voor woord lezen duurt veel langer.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Slim > snel",
              uitleg: "Je hoeft niet sneller te lezen, maar slimmer.",
            },
          ],
          niveaus: {
            basis: "Woord voor woord lezen kost te veel tijd.",
            simpeler: "Op een toets heb je niet genoeg tijd om elk woord te lezen. Daarom eerst skimmen en dan gericht zoeken.",
            nogSimpeler: "Niet alles lezen",
          },
        },
      },
    ],
  },
  {
    title: "Vraagsoorten — verschillende aanpakken",
    explanation: "Er zijn **5 hoofdsoorten** vragen bij begrijpend lezen. Per soort een andere strategie.\n\n**1. Letterlijke vraag** *(staat erin)*\nVoorbeeld: *\"Hoeveel inwoners heeft Brussel?\"*\n• Antwoord staat **letterlijk** in de tekst.\n• Strategie: **scannen** voor het kernwoord, lees die zin.\n\n**2. Inferentie-vraag** *(tussen de regels)*\nVoorbeeld: *\"Waarom denkt de schrijver dat dit slecht is?\"*\n• Antwoord staat **niet letterlijk** — je leidt het af uit context.\n• Strategie: kijk naar emotionele woorden + signaalwoorden.\n\n**3. Hoofdgedachte-vraag**\nVoorbeeld: *\"Wat is de boodschap van de tekst?\"*\n• Strategie: lees inleiding + slotalinea. Zoek wat **in hele tekst** terugkomt.\n• Verwerp opties die alleen één detail beschrijven.\n\n**4. Woordbetekenis-vraag**\nVoorbeeld: *\"Wat betekent het woord 'desondanks'?\"*\n• Strategie: kijk naar de **zin eromheen**. Wat past in die context?\n• Vaak geeft het signaalwoord-type al een hint (tegenstelling, oorzaak, etc.).\n\n**5. Tekstopbouw-vraag**\nVoorbeeld: *\"Hoe is de tekst opgebouwd?\"*\n• Strategie: kijk naar **alinea-onderwerpen**: probleem → oplossing? Vóór → tegen? Tijdslijn? Voorbeelden?\n• Mogelijke patronen:\n  - **Chronologisch**: eerst dit, daarna dat (tijdvolgorde)\n  - **Argumentatief**: standpunt → argumenten → conclusie\n  - **Probleem-oplossing**: probleem beschreven → oplossing voorgesteld\n  - **Voor en tegen**: argumenten pro → argumenten contra\n  - **Algemeen → specifiek**: hoofdregel → voorbeelden\n\n**Pas op voor de strikvragen!**\n\n**Strikvraag 1: NIET-vragen**\n*\"Wat staat er **NIET** in de tekst?\"* — onderstreep 'NIET' om te onthouden! Vergeet je de NIET, kies je het tegenovergestelde antwoord.\n\n**Strikvraag 2: Bijna-identieke opties**\nTwee antwoordopties zien er bijna hetzelfde uit, maar met **één belangrijk verschil**. Lees beide woord-voor-woord.\n\n**Strikvraag 3: Meningvraag**\n*\"Wat zou de schrijver zeggen over...?\"* — gebruik de **toon** en **standpunt** uit de tekst, niet jouw mening.\n\n**Strikvraag 4: Letterlijke woorden in foute optie**\nDe foute optie gebruikt soms **letterlijke woorden uit de tekst** maar in verkeerde context. Lees zorgvuldig.\n\n**Ezelsbruggetje — 'POOL'**:\n• **P**lekken (waar staat het?)\n• **O**mliggende zinnen (lees in context)\n• **O**verkoepelend (hoofdgedachte vs detail)\n• **L**etterlijk vs afleiden (staat het er, of moet ik afleiden?)",
    svg: tekstsoortenSvg(),
    checks: [
      {
        q: "Een vraag met **'NIET'** vereist...",
        options: ["Het antwoord dat ECHT NIET in de tekst staat","Het antwoord dat WEL in de tekst staat","Een random gok","Geen antwoord"],
        answer: 0,
        wrongHints: [null,"Vraagt 'NIET' juist het tegenovergestelde, of het normale antwoord?","Is gokken slim, of kun je beter goed lezen wat er gevraagd wordt?","Wat win je met geen antwoord — punten, of niks?"],
        uitlegPad: {
          stappen: [
            { titel: "NIET-vraag herkennen", tekst: "Het woordje 'NIET' verandert ALLES. Onderstreep het in je hoofd of op papier." },
            { titel: "Wat zoek je?", tekst: "Bij 'wat staat NIET in de tekst': zoek het ENE antwoord dat NIET in de tekst voorkomt." },
          ],
          woorden: [
            { woord: "NIET-vraag", uitleg: "Vraag waarin 'NIET' staat — vraagt het tegenovergestelde van een normale vraag." },
          ],
          theorie: "Bij een NIET-vraag: 3 antwoorden komen WEL in tekst voor (vink af). 1 komt NIET voor. Die ene is het juiste antwoord.",
          voorbeelden: [{ type: "checklist", tekst: "Vraag: 'Welk argument noemt schrijver NIET?' Loop alle 4 opties langs in tekst → 3 staan er, 1 niet → die niet-staande is je antwoord." }],
          basiskennis: [{ onderwerp: "Lees vragen 2x", uitleg: "Vooral bij NIET — anders kies je het tegenovergestelde antwoord." }],
          niveaus: {
            basis: "NIET-vraag = zoek wat NIET in tekst staat.",
            simpeler: "Stel: 'Welk dier zit NIET in deze dierentuin?'. Je kijkt welk dier in de tekst voorkomt en welk niet. Het ENE dier dat niet genoemd is = jouw antwoord.",
            nogSimpeler: "NIET = zoek de 1 die er niet is",
          },
        },
      },
      {
        q: "Hoe vind je antwoord op een **inferentie-vraag** (tussen de regels)?",
        options: ["Letten op emoties en signaalwoorden in tekst","Letterlijk woord opzoeken","Gokken zonder de tekst te bekijken","De vraag overslaan en niets invullen"],
        answer: 0,
        wrongHints: [null,"Staat het antwoord van een 'tussen-de-regels' vraag letterlijk in de tekst?","Werkt gokken zonder de tekst te bekijken bij dit soort vragen?","Levert een leeg antwoord punten op?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is inferentie?", tekst: "Het antwoord staat NIET letterlijk in de tekst. Je moet het AFLEIDEN uit hints." },
            { titel: "Welke hints?", tekst: "Emotionele woorden, signaalwoorden (omdat, daarom), beschrijvingen van personages — die geven samen het antwoord." },
          ],
          woorden: [
            { woord: "inferentie", uitleg: "Iets afleiden uit wat er staat — niet wat letterlijk staat." },
            { woord: "tussen de regels lezen", uitleg: "De boodschap snappen ook al staat ze niet letterlijk." },
          ],
          theorie: "Bij inferentie-vragen ('waarom?' / 'wat denkt schrijver?' / 'hoe voelt personage?'): zoek HINTS in de tekst, niet letterlijke antwoorden. Letterlijk zoeken werkt niet.",
          voorbeelden: [{ type: "afleiden", tekst: "Tekst: 'Sara liet haar hoofd hangen.' = inferentie: Sara is verdrietig. Niet letterlijk gezegd, wel duidelijk." }],
          basiskennis: [{ onderwerp: "Letterlijk vs inferentie", uitleg: "Letterlijk = woord-voor-woord vinden. Inferentie = puzzelstukjes verbinden." }],
          niveaus: {
            basis: "Inferentie = let op emoties + signaalwoorden.",
            simpeler: "Stel: iemand zucht en kijkt op de klok. Zegt hij 'ik verveel me'? Nee — maar je SNAPT het wel. Dat is tussen de regels lezen. Bij inferentie-vragen werkt het zo.",
            nogSimpeler: "Hints zoeken",
          },
        },
      },
      {
        q: "Wat is een **strikvraag**?",
        options: ["Bedoeld om je af te leiden van het juiste antwoord","Een grappige vraag om je aan het lachen te maken","Een heel korte vraag van een paar woorden","Een vraag die in dialect is geschreven"],
        answer: 0,
        wrongHints: [null,"Is een strikvraag bedoeld om je te laten lachen, of om je in de val te lokken?","Heeft een strikvraag iets met de lengte te maken, of met de inhoud?","Hoort dialect bij een strikvraag, of is het iets anders?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een strik?", tekst: "Een val die je vangt. Een strikvraag is bedoeld om je in de VAL te lokken — verleiden om het verkeerde antwoord te kiezen." },
            { titel: "Hoe herken je 'm?", tekst: "Verwarrende formulering, NIET-woord verstopt, twee bijna-gelijke opties, of woorden uit tekst in foute volgorde." },
          ],
          woorden: [
            { woord: "strikvraag", uitleg: "Vraag bedoeld om je te misleiden — je in een val te lokken." },
            { woord: "afleiden", uitleg: "Iemands aandacht ergens anders heen trekken." },
            { woord: "dialect", uitleg: "Streektaal — bv. Limburgs of Brabants." },
          ],
          theorie: "Veel-voorkomende strikken bij de Doorstroomtoets:\n- 'NIET' verstopt in vraag\n- 2 antwoordopties bijna gelijk\n- Foute optie gebruikt LETTERLIJKE woorden uit tekst\n- Vraag draait om jouw mening (gebruik tekst-mening, niet eigen)",
          voorbeelden: [{ type: "strik", tekst: "Vraag: 'Welk argument noemt schrijver NIET?' — als je 'NIET' mist, kies je het verkeerde antwoord." }],
          basiskennis: [{ onderwerp: "Lees zorgvuldig", uitleg: "Bij de Doorstroomtoets: liever 30 sec extra lezen dan strik missen." }],
          niveaus: {
            basis: "Strikvraag = bedoeld om je af te leiden.",
            simpeler: "Stel: een vraag is zo geformuleerd dat je het verkeerde antwoord kiest. Dat heet strikvraag. Niet om je te plagen — om te testen of je goed leest.",
            nogSimpeler: "Misleidend = strik",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Vraag bij een tekst: *'Hoeveel inwoners heeft het dorp?'*\n\nWat voor soort vraag is dit?",
        options: [
          "Een letterlijke vraag",
          "Een hoofdgedachte-vraag",
          "Een woordbetekenis-vraag",
          "Een tekstopbouw-vraag",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vraagt dit naar de boodschap van de hele tekst?",
          null,
          "Gaat dit over hoe de alinea's na elkaar komen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat vraagt de vraag?",
              tekst: "Een getal: het aantal inwoners. Dat staat precies zo in de tekst.",
            },
            {
              titel: "Welke soort?",
              tekst: "Antwoord staat letterlijk in de tekst = LETTERLIJKE vraag. Aanpak: scannen naar het kernwoord 'inwoners'.",
            },
          ],
          woorden: [
            {
              woord: "letterlijk",
              uitleg: "Precies zo, woord voor woord.",
            },
            {
              woord: "inwoner",
              uitleg: "Iemand die ergens woont.",
            },
          ],
          theorie: "5 vraagsoorten: letterlijk, inferentie (tussen de regels), hoofdgedachte, woordbetekenis, tekstopbouw. Elk een eigen aanpak.",
          voorbeelden: [
            {
              type: "letterlijk",
              tekst: "'Hoeveel inwoners heeft Brussel?' → scan naar 'inwoners' of een groot getal.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Aanpak",
              uitleg: "Bij een letterlijke vraag: scan naar het kernwoord en lees die zin.",
            },
          ],
          niveaus: {
            basis: "Letterlijke vraag: het antwoord staat erin.",
            simpeler: "Je zoekt één getal dat gewoon in de tekst staat. Dan is het een letterlijke vraag.",
            nogSimpeler: "Staat erin = letterlijk",
          },
        },
      },
      {
        q: "Alinea 1 vertelt dat er veel zwerfafval in het park ligt. Alinea 2 vertelt hoe de buurt het park samen schoon gaat maken.\n\nHoe is deze tekst opgebouwd?",
        options: [
          "Probleem-oplossing",
          "Voor en tegen",
          "Algemeen → specifiek",
          "Standpunt → argumenten → conclusie",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Staan er argumenten vóór en tegen iets in?",
          null,
          "Geeft de schrijver een mening met redenen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat staat in alinea 1?",
              tekst: "Er ligt veel zwerfafval in het park. Dat is een PROBLEEM.",
            },
            {
              titel: "Wat staat in alinea 2?",
              tekst: "De buurt gaat het park samen schoonmaken. Dat is een OPLOSSING.",
            },
            {
              titel: "Conclusie",
              tekst: "Eerst een probleem, dan een oplossing = probleem-oplossing.",
            },
          ],
          woorden: [
            {
              woord: "zwerfafval",
              uitleg: "Afval dat zomaar op straat of in de natuur ligt.",
            },
            {
              woord: "tekstopbouw",
              uitleg: "In welke volgorde de alinea's iets vertellen.",
            },
          ],
          theorie: "Opbouw-patronen: chronologisch, argumentatief, probleem-oplossing, voor en tegen, algemeen → specifiek. Kijk naar wat elke alinea doet.",
          voorbeelden: [
            {
              type: "probleem-oplossing",
              tekst: "Alinea 1: 'Veel kinderen drinken te weinig.' Alinea 2: 'Zet een bidon op je tafel.'",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Aanpak",
              uitleg: "Schrijf per alinea in een paar woorden waar hij over gaat. Dan zie je het patroon.",
            },
          ],
          niveaus: {
            basis: "Probleem (afval) → oplossing (schoonmaken).",
            simpeler: "Eerst hoor je wat er mis is: afval. Daarna hoor je wat eraan gedaan wordt. Dat is probleem-oplossing.",
            nogSimpeler: "Probleem → oplossing",
          },
        },
      },
      {
        q: "Een tekst noemt eerst alle redenen om een hond te nemen, en daarna alle redenen om het niet te doen. Welke opbouw is dit?",
        options: ["Voor en tegen", "Chronologisch", "Probleem-oplossing", "Algemeen → specifiek"],
        answer: 0,
        wrongHints: [
          null,
          "Gaat deze tekst over dingen die na elkaar gebeurden?",
          "Wordt er een probleem opgelost?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerste deel",
              tekst: "Redenen om een hond te nemen: argumenten VOOR.",
            },
            {
              titel: "Tweede deel",
              tekst: "Redenen om het niet te doen: argumenten TEGEN.",
            },
            {
              titel: "Conclusie",
              tekst: "Argumenten pro, dan argumenten contra = voor en tegen.",
            },
          ],
          woorden: [
            {
              woord: "pro",
              uitleg: "Vóór iets.",
            },
            {
              woord: "contra",
              uitleg: "Tegen iets.",
            },
            {
              woord: "chronologisch",
              uitleg: "In de volgorde waarin het gebeurde.",
            },
          ],
          theorie: "Voor en tegen: argumenten pro → argumenten contra. Je ziet vaak signaalwoorden als 'maar', 'echter' of 'daarentegen' bij de omslag.",
          voorbeelden: [
            {
              type: "voor en tegen",
              tekst: "'Een hond is gezellig en je wandelt meer. Maar hij kost geld en je moet elke dag uit.'",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Let op de omslag",
              uitleg: "Zie je ineens 'maar' of 'aan de andere kant'? Dan begint vaak het tegen-deel.",
            },
          ],
          niveaus: {
            basis: "Redenen voor + redenen tegen = voor en tegen.",
            simpeler: "De tekst vertelt eerst wat goed is aan een hond, en dan wat minder handig is. Zo zet je voor en tegen naast elkaar.",
            nogSimpeler: "Voor + tegen",
          },
        },
      },
      {
        q: "Tekst: *'Lotte smeet haar tas in de hoek en sloeg de deur hard dicht.'*\n\nHoe voelt Lotte zich waarschijnlijk?",
        options: ["Boos", "Blij", "Slaperig", "Trots"],
        answer: 0,
        wrongHints: [
          null,
          "Gooi je je tas in de hoek als je blij bent?",
          "Doe je hard en snel dingen als je slaperig bent?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Dit is een inferentie-vraag",
              tekst: "Er staat niet hoe Lotte zich voelt. Je moet het afleiden uit de hints.",
            },
            {
              titel: "Zoek de hints",
              tekst: "*'smeet haar tas in de hoek'* en *'sloeg de deur hard dicht'*. Dat doe je als je boos bent.",
            },
          ],
          woorden: [
            {
              woord: "inferentie",
              uitleg: "Iets afleiden uit wat er staat.",
            },
            {
              woord: "smijten",
              uitleg: "Hard gooien.",
            },
          ],
          theorie: "Bij een inferentie-vraag zoek je hints: wat doet iemand, welke woorden gebruikt de schrijver? Samen geven ze het antwoord.",
          voorbeelden: [
            {
              type: "afleiden",
              tekst: "'Sara liet haar hoofd hangen.' → Sara is waarschijnlijk verdrietig.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Bewijs",
              uitleg: "Kun je je antwoord aanwijzen met woorden uit de tekst? Dan zit je goed.",
            },
          ],
          niveaus: {
            basis: "Lotte is boos.",
            simpeler: "Hard gooien en een deur dichtslaan: zo doe je als je boos bent. Dat staat er niet, maar je snapt het wel.",
            nogSimpeler: "Deur dicht = boos",
          },
        },
      },
    ],
  },
  {
    title: "Eindopdracht — alles samen",
    explanation: "**Snelle samenvatting**:\n\n**3 tekstsoorten**:\n• Informatief — feiten\n• Betogend — overtuigen\n• Verhalend — vermaken\n\n**6 signaalwoord-groepen**:\n• Tijd, oorzaak/gevolg, opsomming, tegenstelling, voorbeeld, conclusie\n\n**Tekst-opbouw**: inleiding + kern + slot. Hoofdgedachte vaak in 1e of laatste alinea.\n\n**Slim lezen**: skim eerst, scan voor antwoorden.\n\n**Vraagsoorten**: letterlijk, inferentie, hoofdgedachte, woordbetekenis, opbouw — elk een eigen aanpak.\n\n**5 grote tips voor de Doorstroomtoets**:\n1. **Lees de vragen vóór je gaat zoeken** — weet wat je zoekt.\n2. **Skim** de tekst eerst — 30 seconden voor overzicht.\n3. **Scan** gericht voor het antwoord — niet alles herlezen.\n4. **Onderstreep 'NIET'** in NIET-vragen.\n5. **Skip** moeilijke vragen + kom later terug.\n\n**Veel succes!**\n\n*\"Begrijpend lezen is geen ijsschots — je hoeft niet alles te begrijpen, je moet de juiste delen vinden.\"*",
    svg: signaalwoordenSvg(),
    checks: [
      {
        q: "Welk signaalwoord betekent **OMDAT** (oorzaak)?",
        options: ["doordat","echter","bijvoorbeeld","kortom"],
        answer: 0,
        wrongHints: [null,"Drukt 'echter' een oorzaak uit, of zet het iets tegenover iets anders?","Geeft 'bijvoorbeeld' een oorzaak, of een illustratie?","Sluit 'kortom' af, of geeft het een reden?"],
        uitlegPad: {
          stappen: [
            { titel: "Synoniemen van 'omdat'", tekst: "'Doordat' is het meest directe synoniem. Allebei: oorzaak aanwijzen." },
            { titel: "Andere opties", tekst: "Echter = tegenstelling, bijvoorbeeld = illustratie, kortom = samenvatten. Niet hetzelfde als 'omdat'." },
          ],
          woorden: [
            { woord: "doordat", uitleg: "Wijst aan: door wat? = de oorzaak. Synoniem van 'omdat'." },
          ],
          theorie: "Oorzaak-signaalwoorden: omdat, doordat, want, vanwege, aangezien. Allemaal wijzen ze op de REDEN.",
          voorbeelden: [{ type: "synoniem", tekst: "'De wedstrijd werd afgelast OMDAT het regende' = 'De wedstrijd werd afgelast DOORDAT het regende'." }],
          basiskennis: [{ onderwerp: "Synoniemen kennen", uitleg: "Verschillende woorden voor hetzelfde — handig om te herkennen." }],
          niveaus: {
            basis: "'Doordat' = synoniem van 'omdat'.",
            simpeler: "'Omdat' en 'doordat' betekenen praktisch hetzelfde: ze geven de REDEN aan.",
            nogSimpeler: "Doordat = omdat",
          },
        },
      },
      {
        q: "Welke vraag is een **hoofdgedachte-vraag**?",
        options: ["Wat is de boodschap van de tekst?","Hoeveel kinderen zijn er in de klas?","Welk woord betekent X?","Wat staat er in regel 4?"],
        answer: 0,
        wrongHints: [null,"Gaat 'hoeveel kinderen' over de hele tekst, of over één klein feit?","Vraagt 'wat betekent X' naar de hele boodschap, of naar één woord?","Wijst 'regel 4' naar de boodschap van de tekst, of naar één plek?"],
        uitlegPad: {
          stappen: [
            { titel: "Hoofdgedachte = boodschap", tekst: "Hoofdgedachte-vragen vragen naar de HELE tekst, niet één deel." },
            { titel: "Welke optie past?", tekst: "'Boodschap van tekst' = over alles. Andere zijn details: aantal, woord, regel." },
          ],
          woorden: [
            { woord: "boodschap", uitleg: "De grote betekenis van een tekst — wat de schrijver wil overbrengen." },
          ],
          theorie: "Hoofdgedachte-vragen herken je aan: 'boodschap', 'kerngedachte', 'wat is het belangrijkste', 'wat wil schrijver zeggen'. Allemaal gaan ze over de HELE tekst.",
          voorbeelden: [{ type: "boodschap", tekst: "'Wat is de boodschap van het verhaal?' = hoofdgedachte. 'Hoe oud is Sara?' = detail." }],
          basiskennis: [{ onderwerp: "Boodschap vs detail", uitleg: "Boodschap = hele tekst. Detail = klein deel." }],
          niveaus: {
            basis: "'Boodschap' = hoofdgedachte.",
            simpeler: "Welke vraag gaat over de HELE tekst en niet één klein feit? 'Wat is de boodschap?' Andere vragen gaan over kleine details.",
            nogSimpeler: "Boodschap = hoofdgedachte",
          },
        },
      },
      {
        q: "Wat doe je **EERST** bij een tekst met vragen?",
        options: ["Skimmen + vragen doorlezen","Hele tekst woord-voor-woord","Antwoorden gokken","Tekst overslaan"],
        answer: 0,
        wrongHints: [null,"Hoeveel tijd kost het om elke zin uit te pluizen — heb je dat?","Kun je antwoord geven zonder iets gelezen te hebben?","Krijg je punten als je geen antwoord geeft?"],
        uitlegPad: {
          stappen: [
            { titel: "EERST overzicht", tekst: "Niet meteen woord-voor-woord lezen. Eerst SKIM (snel overzicht) + lees de vragen." },
            { titel: "Waarom?", tekst: "Als je weet wat je moet zoeken, lees je gerichter. Tijdsbesparing." },
          ],
          woorden: [
            { woord: "skimmen", uitleg: "Snel overzicht, titels + eerste zinnen." },
          ],
          theorie: "Slimme leesvolgorde: 1) skim tekst, 2) lees vragen, 3) scan voor antwoorden. Zo werk je gericht ipv blind.",
          voorbeelden: [{ type: "tijd", tekst: "Skim 30 sec + vragen 30 sec = 1 min. Daarna scan je per vraag. Totaal sneller dan alles woord-voor-woord." }],
          basiskennis: [{ onderwerp: "Tijd is kostbaar", uitleg: "De toets heeft strakke tijd per onderdeel. Strategie wint." }],
          niveaus: {
            basis: "Skim + vragen lezen = eerste stap.",
            simpeler: "Stel: je krijgt een lange tekst. Begin je woord-voor-woord? Nee — eerst even snel kijken wat erin staat (skim) + bekijk de vragen. Daarna gericht zoeken.",
            nogSimpeler: "Skim eerst",
          },
        },
      },
      {
        q: "Hoeveel tijd heb je ongeveer per tekst (3-5 vragen) op de Doorstroomtoets?",
        options: ["~5-7 minuten","30 seconden","30 minuten","1 uur"],
        answer: 0,
        wrongHints: [null,"Lukt het je in een halve minuut om een tekst én 3-5 vragen te doen?","Krijg je echt 30 minuten voor maar één tekst?","Is een uur per tekst realistisch — of moet er meer mee in dat uur?"],
        uitlegPad: {
          stappen: [
            { titel: "Toets-tijd per tekst", tekst: "Bij begrijpend lezen krijg je ~5-7 minuten per tekst-met-vragen. Niet meer, niet minder." },
            { titel: "Hoe verdeel je dat?", tekst: "~30 sec skim + ~30 sec vragen lezen + ~1 min per vraag voor scannen = past in 5-7 min." },
          ],
          woorden: [
            { woord: "tijdsdruk", uitleg: "Het gevoel dat je moet opschieten om alle vragen op tijd te beantwoorden." },
          ],
          theorie: "De Doorstroomtoets heeft een tijdslimiet. Reken op ongeveer 1 tot 1,5 minuut per vraag — bij 4 à 5 vragen per tekst kom je zo op zo'n 5-7 minuten per tekst.",
          voorbeelden: [{ type: "verdeling", tekst: "Tekst met 4 vragen: 30s skim + 30s vragen + 4×1min scan = 5 min. Past." }],
          basiskennis: [{ onderwerp: "Skip moeilijke vraag", uitleg: "Vraag te lastig? Skip + kom later terug. Niet vastlopen." }],
          niveaus: {
            basis: "5-7 min per tekst.",
            simpeler: "Bij de Doorstroomtoets: ongeveer een minuut of 5-7 voor een tekst plus de vragen erover. Je moet dus strak op tijd werken.",
            nogSimpeler: "5-7 min",
          },
        },
      },
      {
        q: "Wat helpt bij een NIET-vraag?",
        options: ["Onderstreep of markeer 'NIET'","Skip 'm","Antwoord zonder lezen","Vraag toelichting"],
        answer: 0,
        wrongHints: [null,"Verlies je punten als je 'm overslaat? Wat kan je zelf doen om de NIET niet te missen?","Werkt antwoorden zonder de tekst echt?","Mag dat tijdens een toets, en helpt het je verder?"],
        uitlegPad: {
          stappen: [
            { titel: "Het probleem met 'NIET'", tekst: "'NIET' is klein, makkelijk te missen. Mis je 'm = kies je het tegenovergestelde antwoord = fout." },
            { titel: "Oplossing", tekst: "Onderstreep of markeer 'NIET' direct als je het ziet — zo blijf je je bewust dat je het tegenovergestelde zoekt." },
          ],
          woorden: [
            { woord: "markeren", uitleg: "Met potlood/pen omcirkelen of onderstrepen — om aandacht op iets te vestigen." },
          ],
          theorie: "Strategie bij NIET-vragen: (1) markeer 'NIET' (2) loop ALLE 4 opties langs in tekst (3) 3 staan er, 1 niet, die ene = antwoord.",
          voorbeelden: [{ type: "markeren", tekst: "Vraag: 'Welk dier zit __NIET__ in de dierentuin?' Onderstrepen helpt je herinneren: ik zoek het ene dat MIST." }],
          basiskennis: [{ onderwerp: "Tijdens toets schrijven mag", uitleg: "Bij de Doorstroomtoets mag je het examenboekje markeren met potlood." }],
          niveaus: {
            basis: "Onderstreep 'NIET'.",
            simpeler: "'NIET' is een klein woord, makkelijk te missen. Onderstreep 'm — dan vergeet je niet dat je het TEGENOVERGESTELDE zoekt.",
            nogSimpeler: "Markeer NIET",
          },
        },
      },
      {
        q: "Wat doe je bij een vraag met **'volgens de tekst'**?",
        options: ["Antwoord ALLEEN baseren op wat in tekst staat","Eigen mening geven","Algemene kennis gebruiken","Tekst negeren"],
        answer: 0,
        wrongHints: [null, "Vraagt 'volgens de tekst' naar wat jij vindt, of naar wat de schrijver zegt?", "Telt wat je toevallig al wist, als de vraag naar de tekst verwijst?", "Kun je 'volgens de tekst' beantwoorden zonder de tekst te gebruiken?"],
        uitlegPad: {
          stappen: [
            { titel: "'Volgens de tekst'-signaal", tekst: "Bij toetsvragen met **'volgens de tekst'** of **'wat zegt de tekst over X'**: je moet je antwoord BASEREN op precies wat er staat. Niet wat jij denkt of weet uit eigen ervaring." },
            { titel: "Toets-instinker: algemene kennis", tekst: "Stel: tekst zegt 'Sommige honden bijten'. Vraag: 'Volgens de tekst, bijten honden?'\n• A) Ja, alle honden\n• B) Sommige honden\n• C) Nee, honden bijten niet\n• D) Honden zijn lief\n\nAntwoord: **B** — wat tekst zegt. Niet **A** (eigen kennis: niet alle honden), niet **D** (eigen mening). **De tekst is de baas**." },
            { titel: "Toets-truc: terug naar tekst", tekst: "**Stappenplan**:\n1. Lees vraag rustig\n2. Onderstreep 'volgens de tekst'-signaal\n3. **Ga TERUG naar tekst** — zoek waar het over gaat\n4. Lees relevante alinea\n5. Kies optie die het BEST de tekst weergeeft\n6. Negeer opties die alleen kloppen volgens jou — niet volgens tekst" },
          ],
          woorden: [
            { woord: "volgens de tekst", uitleg: "Toets-signaal: gebruik alleen tekst-info, geen eigen kennis/mening." },
            { woord: "interpretatie", uitleg: "Wat je VAN de tekst kunt afleiden — strikt op basis van wat er staat." },
          ],
          theorie: "Verschillende vraagtypen begrijpend lezen:\n• **'Wat staat in de tekst?'** → letterlijk zoeken\n• **'Wat bedoelt schrijver?'** → interpretatie (waar leidt het naar?)\n• **'Wat is hoofdgedachte?'** → samenvatting in 1 zin\n• **'Wat NIET in tekst?'** → uitsluiting (zie eerdere check)\n\nEigen mening is NOOIT antwoord bij begrijpend lezen.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst zegt: 'Plastic vervuilt zeeën.' Vraag: 'Volgens tekst, wat doet plastic?' → 'Vervuilt zeeën' (niet 'beschermt vissen' of jouw eigen mening)." },
          ],
          basiskennis: [{ onderwerp: "Niet je eigen kennis", uitleg: "De toets test of je TEKST kunt lezen, niet of je veel weet. 'Volgens de tekst' is grens." }],
          niveaus: { basis: "Alleen tekst.", simpeler: "'Volgens de tekst' = je antwoord moet uit DE TEKST komen, geen eigen mening. Tekst is de baas.", nogSimpeler: "Tekst-alleen" },
        },
      },
      {
        q: "Hoe lees je een lastige zin écht goed?",
        options: ["Stuk voor stuk + woorden snappen + verband zien","Snel scannen voor sleutelwoorden","Alleen de eerste en laatste woorden lezen","De lange zin gewoon overslaan"],
        answer: 0,
        wrongHints: [null, "Scannen is handig om iets op te zoeken — maar snap je zo de hele zin?", "Weet je wat een zin betekent als je het middenstuk mist?", "Wat mis je als je juist die lastige zin overslaat?"],
        uitlegPad: {
          stappen: [
            { titel: "Goed lezen vs scannen", tekst: "Twee technieken:\n• **Scannen** = ogen snel over tekst voor sleutelwoorden (zoals 'wanneer' / 'jaartal' opzoeken)\n• **Goed lezen** = stuk voor stuk + alle woorden snappen + verband leggen\n\nBij **Toets-detail-vragen** ('wat staat in alinea 2?') = goed lezen. Bij **algemene vragen** ('waar gaat tekst over?') = skimmen + globaal lezen genoeg." },
            { titel: "Goed-lezen stappenplan", tekst: "1. **Lees zin tot komma/punt**\n2. **Snap alle woorden** (onbekend? raad uit context)\n3. **Wat zegt de zin?** Eigen woorden in hoofd herhalen\n4. **Verbind met vorige zin** (en/maar/dus?)\n5. **Volgende zin**\n\nDuurt langer maar je 'krijgt' de tekst echt." },
            { titel: "Toets-tip: gemarkeerd onthouden", tekst: "Tijdens lezen MAG je markeren in Toets-boekje:\n• **Onderstreep** belangrijke zinnen\n• **Cirkel** sleutelwoorden\n• **Schrijf in marge** vraagtekens bij niet-begrip\n\nMaakt later terug-vinden makkelijker. Brein onthoudt ook beter wat je actief markeert dan passief leest." },
          ],
          woorden: [
            { woord: "scannen", uitleg: "Snel kijken voor specifieke info (jaartal, naam, getal). Niet alles lezen." },
            { woord: "globaal lezen", uitleg: "Hele tekst rustig doorlezen voor algemeen begrip. Geen detail." },
            { woord: "goed lezen", uitleg: "Zin voor zin met begrip + verband leggen. Voor detail-vragen." },
          ],
          theorie: "Wanneer welke techniek:\n• **Toets-tijdsdruk + globaal**: 1 keer rustig doorlezen\n• **Detail-vraag** (wat staat in alinea X?): goed lezen of scannen + goed lezen alinea\n• **Hoofdgedachte**: globaal lezen + conclusie zoeken\n• **'Volgens tekst'-vraag**: terug + goed lezen relevante zin\n\nProfs wisselen technieken. Bij de Doorstroomtoets = goed leren wisselen.",
          voorbeelden: [
            { type: "stap", tekst: "Bij vraag 'wat zegt alinea 3?' = lees alinea 3 goed. Niet hele tekst." },
          ],
          basiskennis: [{ onderwerp: "Niet alles even grondig", uitleg: "Goed lezen kost tijd. Bij de Doorstroomtoets: leer WANNEER goed lezen + wanneer scannen. Mix is sleutel." }],
          niveaus: { basis: "Stuk voor stuk + begrip.", simpeler: "Goed lezen: zin voor zin, alle woorden snappen, verband leggen. Nodig bij detail-vragen op de toets.", nogSimpeler: "Grondig" },
        },
      },
      {
        q: "Hoe verbeter je je **leesvaardigheid** op lange termijn?",
        options: ["Veel boeken lezen + woordenschat bouwen","Alleen toets-oefenen","Streaming kijken","Niets doen"],
        answer: 0,
        wrongHints: [null, "Toets oefenen helpt, maar zonder lezen blijft basis te smal.", "Niet — beelden ipv tekst trainen leesvaardigheid niet.", "Tegenovergesteld — leesvaardigheid groeit met inspanning."],
        uitlegPad: {
          stappen: [
            { titel: "Waarom lezen helpt", tekst: "**Leesvaardigheid** is een vaardigheid die je opbouwt door **veel lezen**:\n• **Meer woordenschat** — onbekende woorden vaker zien → kennen\n• **Beter verband zien** — hoe schrijvers zinnen bouwen\n• **Sneller lezen** — automatische herkenning patronen\n• **Beter begrip context** — wereld + onderwerpen-kennis\n\nOnderzoek laat zien: kinderen die **elke dag** lezen, scoren **duidelijk hoger** op begrijpend lezen dan niet-lezers." },
            { titel: "Wat lezen? Top-tips groep 7-8", tekst: "**Fictie** (verhalen):\n• Jip & Janneke / Pluk (Schmidt)\n• Kruistocht in Spijkerbroek (Beckman)\n• Brief voor de koning (Dragt)\n• Harry Potter / Roald Dahl\n\n**Non-fictie** (informatie):\n• Jeugd-encyclopedie\n• National Geographic Junior\n• Nieuws-apps voor kinderen (NOS Jeugdjournaal-tekst)\n• Junior-versies populaire onderwerpen (Beeld + Geluid, NEMO)\n\n**Wat NIET helpt**: alleen Instagram-bijschriften lezen (te kort, te eenvoudig)." },
            { titel: "Toets-feit: bibliotheek + scholen", tekst: "**NL beleid**:\n• Bibliotheek lid <18 jaar = GRATIS\n• Veel scholen hebben leesbeleid (15 min stillezen per dag)\n• **DEAR-tijd** (Drop Everything And Read) op sommige scholen\n• Leestoets-resultaten in PISA-onderzoek: NL daalde — leerlingen lezen minder dan vroeger. Daarom: zelf MEER lezen = direct voordeel." },
          ],
          woorden: [
            { woord: "leesvaardigheid", uitleg: "Vermogen om geschreven tekst te lezen + begrijpen." },
            { woord: "PISA", uitleg: "Internationaal onderzoek dat leesvaardigheid van 15-jarigen meet per land." },
            { woord: "DEAR", uitleg: "Drop Everything And Read — vast lees-moment op school." },
          ],
          theorie: "Lezen-trainingsadvies:\n• **Begin klein**: 10 min/dag, bouw op naar 30 min\n• **Kies wat JIJ leuk vindt** (geen gedwongen literatuur)\n• **Lees voor slapen**: combineert + ontspant\n• **Wissel fictie + non-fictie** voor variatie\n• **Praat over wat je leest** met ouder/vriend (versterkt onthouden)\n\nBijproduct: lezers slapen vaak beter (zonder schermtijd vóór slapen).",
          voorbeelden: [
            { type: "feit", tekst: "Internationaal leesonderzoek (zoals PISA) laat zien: kinderen die vaak voor hun plezier lezen, scoren gemiddeld hoger op begrijpend lezen." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen voor toets", uitleg: "Lezen voor levenslange vaardigheid — niet alleen de toets. Hoogopgeleide volwassenen lezen gemiddeld meer dan laagopgeleide." }],
          niveaus: { basis: "Veel lezen.", simpeler: "Leesvaardigheid groeit door VEEL lezen — boeken + tijdschriften + jeugd-encyclopedie. 30 min/dag = grote sprong.", nogSimpeler: "Lezen" },
        },
      },
      { q: "Welk signaalwoord wijst op een **tegenstelling**?", options: ["maar","want","ook","bovendien"], answer: 0, wrongHints: [null, "Reden-woord.", "Opsomming.", "Opsomming."] },
      { q: "Welk signaalwoord wijst op **oorzaak-gevolg**?", options: ["daarom","ook","maar","echter"], answer: 0, wrongHints: [null, "Opsomming.", "Tegenstelling.", "Tegenstelling."] },
      { q: "Wat doe je bij **scannen**?", options: ["Snel zoeken naar 1 specifiek woord/feit","Letter voor letter lezen","Hele tekst hardop voorlezen","Tekenen erbij"], answer: 0, wrongHints: [null, "Te traag — dat is gewoon lezen.", "Niet relevant.", "Niet."] },
      { q: "Wat doe je bij **skimmen**?", options: ["Tekst snel doorbladeren voor hoofdlijn","Heel langzaam lezen","Tekst overschrijven","Plaatjes bekijken"], answer: 0, wrongHints: [null, "Tegenovergesteld.", "Niet relevant.", "Niet alleen plaatjes."] },
      { q: "Een **informatieve tekst** geeft vooral?", options: ["Feiten + uitleg","Mening","Spanning","Humor"], answer: 0, wrongHints: [null, "Dat is betoog.", "Dat is verhaal.", "Niet hoofddoel."] },
      { q: "Een **betogende tekst** wil de lezer?", options: ["Overtuigen","Informeren","Vermaken","Boos maken"], answer: 0, wrongHints: [null, "Informatieve tekst.", "Verhalende/amuserende.", "Niet de bedoeling."] },
      { q: "Waar vind je het antwoord op een **letterlijke vraag**?", options: ["Direct in de tekst","Door erover na te denken","Door te raden","Buiten de tekst"], answer: 0, wrongHints: [null, "Dat is inferentie.", "Niet — wel zoeken.", "Tekst is bron."] },
      { q: "Een **inferentie-vraag** vraagt om?", options: ["Conclusie trekken uit gegevens","Letterlijk citeren","Tellen","Geen antwoord"], answer: 0, wrongHints: [null, "Dat is letterlijke vraag.", "Niet relevant.", "Wel antwoord — bedenken."] },
      { q: "Bij welk **woord** weet je 'het komt eraan': de schrijver gaat **iets opsommen**?", options: ["ten eerste","echter","daarom","kortom"], answer: 0, wrongHints: [null, "Tegenstelling.", "Reden.", "Conclusie."] },
      { q: "*'Kortom: lezen is belangrijk.'* — welk soort zin?", options: ["Conclusie","Vraag","Opsomming","Tegenstelling"], answer: 0, wrongHints: [null, "Geen vraagteken.", "Geen lijst.", "Geen 'maar'."] },
      { q: "Welke **alinea** bevat meestal de hoofdgedachte van de hele tekst?", options: ["Inleiding of slot","De middelste alinea","Een random alinea","Geen"], answer: 0, wrongHints: [null, "Niet altijd.", "Niet random — er is patroon.", "Wel — vaak duidelijk."] },
      { q: "Welke **tekstsoort** is een dagboek?", options: ["Verhalend","Informatief","Betogend","Schoolboek"], answer: 0, wrongHints: [null, "Geen feiten-uitleg.", "Geen overtuiging.", "Niet schoolboek."] },
      { q: "Wat is een **kernzin**?", options: ["Zin met hoofdpunt van alinea","Eerste zin altijd","Laatste zin altijd","Langste zin"], answer: 0, wrongHints: [null, "Vaak wel, niet altijd.", "Soms wel, niet altijd.", "Niet relevant."] },
      { q: "Welk woord betekent ongeveer hetzelfde als **bovendien**?", options: ["daarnaast","echter","want","kortom"], answer: 0, wrongHints: [null, "Tegenstelling.", "Reden.", "Conclusie."] },
      { q: "Wat is een **alinea**?", options: ["Stukje tekst met 1 onderwerp/idee","Hele bladzijde","1 zin","Titel"], answer: 0, wrongHints: [null, "Te groot.", "Te klein — meerdere zinnen.", "Niet hetzelfde."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const begrijpendLezenStrategie = {
  id: "begrijpend-lezen-strategie",
  title: "Begrijpend lezen — strategieën voor groep 5-8",
  emoji: "📖",
  level: "groep5-8",
  subject: "begrijpend-lezen",
  // SLO-referentieniveau (sprint-4 G4a): 1F + 1S leesvaardigheid.
  // 1F = einde basisschool minimum; 1S = streef voor havo/vwo-bound.
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — zakelijke teksten",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "schemas-stappenplannen-po", title: "Schema's en stappenplannen", niveau: "po-1F" },
  ],
  intro:
    "Hoe je slim leest in plaats van alles woord-voor-woord. Tekstsoorten herkennen (informatief/betogend/verhalend), 6 groepen signaalwoorden, hoofdgedachte vinden, skim+scan-techniek, en 5 vraagsoorten met aparte aanpakken. Toets-relevant.",
  triggerKeywords: [
    "begrijpend lezen","begrijpend","tekst lezen","tekstanalyse",
    "informatieve tekst","betogende tekst","verhalende tekst",
    "signaalwoorden","oorzaak gevolg","tegenstelling","opsomming",
    "hoofdgedachte","tekst opbouw","alinea",
    "skim","scan","slim lezen",
    "letterlijke vraag","inferentie","woordbetekenis",
  ],
  chapters,
  steps,
};

export default begrijpendLezenStrategie;
