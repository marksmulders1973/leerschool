// Leerpad: Samenvatten / hoofdgedachte vinden — voor groep 5-8
// 5 stappen, studievaardigheden / leesvaardigheid.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#ec407a",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["💭","🔍","✏️","📝","🏆"];

const chapters = [
  { letter: "A", title: "Wat is hoofdgedachte?", emoji: "💭", from: 0, to: 0 },
  { letter: "B", title: "Hoofdgedachte vinden", emoji: "🔍", from: 1, to: 1 },
  { letter: "C", title: "Hoofd vs bijzaken", emoji: "✏️", from: 2, to: 2 },
  { letter: "D", title: "Samenvatting maken", emoji: "📝", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een hoofdgedachte?",
    explanation: "**Hoofdgedachte** = waar de tekst **vooral over gaat**. De **kernboodschap** in 1 of 2 zinnen samengevat.\n\n**Voorbeeld** — een tekst over voetbal:\n*'Voetbal is wereldwijd de populairste sport. Miljoenen mensen kijken WK-finales. Er zijn voetbal-clubs in elk land. Kinderen beginnen al jong met voetballen op school.'*\n\n**Hoofdgedachte**: *'Voetbal is een populaire sport over de hele wereld.'*\n\n**Niet de hoofdgedachte**:\n• 'Kinderen beginnen jong met voetballen' — dat is een **detail**, geen hoofdpunt.\n• 'WK-finales worden bekeken door miljoenen' — ook detail.\n\n**Verschil hoofdgedachte vs onderwerp**:\n• **Onderwerp** = waar gaat het over? *(1 woord/zin: 'voetbal')*.\n• **Hoofdgedachte** = wat zegt de tekst over dat onderwerp? *(hele zin)*.\n\n**Hoofdgedachte staat vaak**:\n1. **In de eerste zin** van de alinea.\n2. **In de laatste zin** als samenvatting.\n3. **In de titel** of kop.\n\n**toetsvraag-typen**:\n• 'Wat is de hoofdgedachte van deze tekst?'\n• 'Welke zin geeft het beste de hoofdgedachte weer?'\n• 'Welk antwoord beschrijft het hoofdpunt?'\n\n**Toets-tip**:\nVraag jezelf: *'Wat zou ik vertellen aan iemand die de tekst niet heeft gelezen?'* — dat is de hoofdgedachte.",
    checks: [
      {
        q: "Wat is een **hoofdgedachte**?",
        options: ["De kernboodschap","De titel","Een klein detail","De eerste letter"],
        answer: 0,
        wrongHints: [null,"Soms staat ie in titel, maar 't is meer.","Andersom — geen detail.","Nee, geen letter."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de hoofdgedachte?", tekst: "De **hoofdgedachte** is de **kernboodschap** van een tekst — wat de schrijver vooral wil zeggen. Het is GEEN klein detail, ook niet alleen de titel." },
            { titel: "In 1 zin vatten", tekst: "Stel jezelf de vraag: als ik deze hele tekst in 1 zin aan iemand uitleg, wat is dan die zin? Dat is de hoofdgedachte." },
            { titel: "Niet de titel zelf", tekst: "De TITEL geeft soms een hint, maar is meestal te kort. Hoofdgedachte = volledige boodschap in een zin." },
          ],
          woorden: [
            { woord: "hoofdgedachte", uitleg: "Kernboodschap van een tekst." },
            { woord: "detail", uitleg: "Klein stukje informatie binnen tekst." },
            { woord: "titel", uitleg: "Naam van de tekst — slechts een hint." },
          ],
          theorie: "Toets-tip hoofdgedachte: kijk wat het ONDERWERP is + wat de schrijver ERVAN VINDT/zegt. Onderwerp + boodschap = hoofdgedachte.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over kraanwater: hoofdgedachte = 'NL-kraanwater is veilig en goedkoop'." },
            { type: "stap", tekst: "Tekst over Pluto: hoofdgedachte = 'Pluto is geen planeet meer sinds 2006'." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Stel: 'Wat zou de schrijver in één zin zeggen?' Dat is de hoofdgedachte." }],
          niveaus: {
            basis: "Hoofdgedachte = kernboodschap van de hele tekst.",
            simpeler: "Wat zou je in 1 zin tegen een vriend zeggen = hoofdgedachte.",
            nogSimpeler: "Kern in 1 zin.",
          },
        },
      },
      {
        q: "Verschil **onderwerp** en **hoofdgedachte**?",
        options: ["Onderwerp = waarover, hoofdgedachte = wat ervan gezegd","Onderwerp komt na hoofdgedachte","Geen verschil","Onderwerp altijd 1 woord"],
        answer: 0,
        wrongHints: [null,"Onderwerp komt vaak eerst.","Wel verschil.","Niet altijd."],
        uitlegPad: {
          stappen: [
            { titel: "Twee verschillende dingen", tekst: "**Onderwerp** = waarover gaat de tekst? (1-3 woorden). **Hoofdgedachte** = WAT zegt de tekst erover? (een hele zin)." },
            { titel: "Voorbeeld: voetbal", tekst: "Tekst over voetbal. Onderwerp = 'voetbal'. Hoofdgedachte = 'voetbal is de populairste sport wereldwijd' (volledige boodschap)." },
            { titel: "Toets-truc", tekst: "Vraag eerst: WAARover gaat het = onderwerp. Vraag daarna: WAT zegt de tekst erover = hoofdgedachte. Twee verschillende vragen!" },
          ],
          woorden: [
            { woord: "onderwerp", uitleg: "WAAROVER de tekst gaat (1-3 woorden)." },
            { woord: "hoofdgedachte", uitleg: "Wat de tekst over het onderwerp ZEGT (zin)." },
          ],
          theorie: "Toets-formule: ONDERWERP + WAT WORDT GEZEGD = HOOFDGEDACHTE. Bijvoorbeeld: 'kraanwater' (onderwerp) + 'is veilig' (boodschap) = 'kraanwater is veilig' (hoofdgedachte).",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over honden. Onderwerp = 'honden'. Hoofdgedachte = 'honden zijn trouwe huisdieren'." },
            { type: "stap", tekst: "Tekst over plastic in zee. Onderwerp = 'plastic in zee'. Hoofdgedachte = 'plastic in zee is een groot probleem'." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onderwerp = kort (1-3 woorden). Hoofdgedachte = hele zin (onderwerp + WAT)." }],
          niveaus: {
            basis: "Onderwerp = waarover. Hoofdgedachte = wat erover gezegd.",
            simpeler: "Onderwerp = woord(en). Hoofdgedachte = zin.",
            nogSimpeler: "Onderwerp + boodschap = hoofdgedachte.",
          },
        },
      },
      {
        q: "Tekst: 'Honden zijn loyaal. Ze beschermen je. Ze spelen graag.'\n\n**Hoofdgedachte**?",
        options: ["Honden zijn fijne huisdieren","Honden bijten soms","Katten zijn beter","Honden eten veel"],
        answer: 0,
        wrongHints: [null, "Niet vermeld in tekst.", "Niet vermeld.", "Niet vermeld."],
        uitlegPad: {
          stappen: [
            { titel: "Lees alle 3 zinnen", tekst: "*'Honden zijn loyaal'* + *'Ze beschermen je'* + *'Ze spelen graag'*. Wat hebben deze 3 gemeen? Alle 3 zijn POSITIEVE eigenschappen van honden." },
            { titel: "Vraag jezelf: rode draad?", tekst: "Wat verbindt deze 3 zinnen? Het thema is: **honden zijn goede / fijne huisdieren**. Daar wijzen alle 3 zinnen naar." },
            { titel: "Waarom NIET de andere opties?", tekst: "• **Honden bijten soms** — niet in tekst.\n• **Katten zijn beter** — niet in tekst (en juist tegenovergesteld).\n• **Honden eten veel** — niet in tekst.\n→ Hoofdgedachte moet uit de TEKST komen, niet uit jouw eigen kennis." },
          ],
          woorden: [
            { woord: "rode draad", uitleg: "Wat alle zinnen met elkaar verbindt." },
            { woord: "hoofdgedachte", uitleg: "De kernboodschap die alle zinnen samenvat." },
          ],
          theorie: "Toets-truc hoofdgedachte: lees alle zinnen + vraag 'wat is hier het ONDERWERP?' (honden) + 'wat wordt erover gezegd?' (zijn fijn/loyaal/beschermend/speels). Onderwerp + boodschap = hoofdgedachte.",
          voorbeelden: [
            { type: "stap", tekst: "*'Sneeuw is wit. Het smelt bij 0°C. Kinderen spelen erin.'* → hoofdgedachte: 'Sneeuw is een natuurverschijnsel/leuk om mee te spelen'." },
            { type: "stap", tekst: "Pas op: 'Katten zijn beter' is een MENING die NIET in de tekst staat. De toets wil dat je uit de TEKST haalt, niet eigen mening." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Antwoord MOET uit de tekst komen. Niet vermeld in tekst = niet hoofdgedachte." }],
          niveaus: {
            basis: "Honden zijn fijne huisdieren (rode draad: loyaal + beschermen + spelen).",
            simpeler: "Alle 3 zinnen zeggen iets POSITIEFS over honden. Samen: fijne huisdieren.",
            nogSimpeler: "Fijne huisdieren",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Tekst: 'Regen is belangrijk voor de natuur. Planten hebben water nodig om te groeien. Ook dieren drinken water uit plassen en sloten.'\n\nWat is het **onderwerp** van deze tekst?",
        options: ["Regen", "Regen is belangrijk voor de natuur", "Sloten", "Planten"],
        answer: 0,
        wrongHints: [
          null,
          "Dit is een hele zin die iets zégt over het onderwerp. Hoe heet dat?",
          "Staat dit woord in één zin of in de hele tekst?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Onderwerp = waarover?",
              tekst: "Het **onderwerp** is waar de tekst over gaat, in 1 woord of een paar woorden. Hier gaat de hele tekst over **regen**.",
            },
            {
              titel: "Waarom niet de hele zin?",
              tekst: "'Regen is belangrijk voor de natuur' zegt WAT de tekst over regen vindt. Dat is de **hoofdgedachte**, niet het onderwerp.",
            },
            {
              titel: "Waarom niet sloten of planten?",
              tekst: "**Sloten** en **planten** komen maar in één zin voor. Ze zijn een detail. De hele tekst gaat over regen.",
            },
          ],
          woorden: [
            {
              woord: "onderwerp",
              uitleg: "Waarover de tekst gaat (1 of een paar woorden).",
            },
            {
              woord: "hoofdgedachte",
              uitleg: "Wat de tekst over het onderwerp zegt (een hele zin).",
            },
          ],
          theorie: "Onderwerp + wat erover gezegd wordt = hoofdgedachte. 'Regen' (onderwerp) + 'is belangrijk voor de natuur' = 'Regen is belangrijk voor de natuur' (hoofdgedachte).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tekst over katten: onderwerp = 'katten'. Hoofdgedachte = 'katten zijn slimme dieren'.",
            },
            {
              type: "stap",
              tekst: "Tekst over de zomer: onderwerp = 'de zomer'. Hoofdgedachte = 'in de zomer kun je veel buiten doen'.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Onderwerp = kort. Hoofdgedachte = hele zin.",
            },
          ],
          niveaus: {
            basis: "Onderwerp = regen.",
            simpeler: "Waarover gaat het? Over regen. Dat is het onderwerp.",
            nogSimpeler: "Regen",
          },
        },
      },
      {
        q: "Tekst: 'Een konijn heeft elke dag vers hooi en water nodig. Zijn hok moet je vaak schoonmaken. En hij wil graag buiten zijn hok rondhuppelen.'\n\n**Hoofdgedachte**?",
        options: [
          "Een konijn heeft veel zorg nodig",
          "Een konijn eet hooi",
          "Konijnen zijn bang voor honden",
          "Alle dieren zijn leuk",
        ],
        answer: 0,
        wrongHints: [null, "Gaat de hele tekst over eten, of over meer?", "Staat dit ergens in de tekst?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Lees alle 3 zinnen",
              tekst: "Zin 1: hooi en water. Zin 2: hok schoonmaken. Zin 3: rondhuppelen buiten het hok. Wat hebben ze gemeen?",
            },
            {
              titel: "De rode draad",
              tekst: "Alle zinnen gaan over wat je voor een konijn moet DOEN. Samen: **een konijn heeft veel zorg nodig**.",
            },
            {
              titel: "Waarom NIET de andere opties?",
              tekst: "• **Een konijn eet hooi** — klopt, maar dat is maar één zin: een detail.\n• **Bang voor honden** — staat niet in de tekst.\n• **Alle dieren zijn leuk** — te breed, de tekst gaat alleen over konijnen.",
            },
          ],
          woorden: [
            {
              woord: "rode draad",
              uitleg: "Wat alle zinnen met elkaar verbindt.",
            },
            {
              woord: "detail",
              uitleg: "Klein stukje informatie uit één zin.",
            },
          ],
          theorie: "Toets-truc: een hoofdgedachte past bij ALLE zinnen. Een detail past maar bij één zin. Een te brede zin gaat over veel meer dan de tekst.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Een vis heeft schoon water nodig. Je geeft hem elke dag een beetje voer.' → hoofdgedachte = 'een vis heeft zorg nodig'.",
            },
            {
              type: "stap",
              tekst: "'Een konijn eet hooi' = detail uit zin 1.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Hoofdgedachte moet uit de tekst komen en bij alle zinnen passen.",
            },
          ],
          niveaus: {
            basis: "Een konijn heeft veel zorg nodig.",
            simpeler: "Hooi, water, hok, rondhuppelen: allemaal zorg voor het konijn.",
            nogSimpeler: "Veel zorg",
          },
        },
      },
      {
        q: "Tekst: 'Bomen zijn nuttig. Ze geven schaduw als het warm is. Vogels bouwen er hun nest in. En van hout maken we tafels en stoelen.'\n\n**Hoofdgedachte**?",
        options: [
          "Bomen zijn op veel manieren nuttig",
          "Vogels bouwen nesten in bomen",
          "Hout is heel zwaar",
          "De natuur is groot",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat klopt, maar is het één voorbeeld of de kern?",
          null,
          "Gaat de tekst over de hele natuur?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zin 1 geeft de kern",
              tekst: "*'Bomen zijn nuttig.'* De andere zinnen geven voorbeelden: schaduw, nesten, hout.",
            },
            {
              titel: "Samen = hoofdgedachte",
              tekst: "Drie voorbeelden van nut → **bomen zijn op veel manieren nuttig**.",
            },
            {
              titel: "Waarom NIET de andere opties?",
              tekst: "• **Vogels bouwen nesten** — één voorbeeld, een detail.\n• **Hout is zwaar** — staat niet in de tekst.\n• **De natuur is groot** — te breed, de tekst gaat over bomen.",
            },
          ],
          woorden: [
            {
              woord: "nuttig",
              uitleg: "Ergens goed voor, handig.",
            },
            {
              woord: "voorbeeld",
              uitleg: "Iets wat laat zien wat de schrijver bedoelt.",
            },
          ],
          theorie: "Toets-truc: tel de voorbeelden. Waar wijzen ze samen naar? Dat is de hoofdgedachte.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Water is handig. Je drinkt het. Je wast je ermee.' → hoofdgedachte = 'water is handig'.",
            },
            {
              type: "stap",
              tekst: "'Vogels bouwen nesten' = één voorbeeld = detail.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Te breed (de natuur) en te klein (vogelnest) zijn allebei fout.",
            },
          ],
          niveaus: {
            basis: "Bomen zijn op veel manieren nuttig.",
            simpeler: "Schaduw, nesten, hout: allemaal nut van bomen.",
            nogSimpeler: "Bomen nuttig",
          },
        },
      },
    ],
  },

  {
    title: "Hoofdgedachte vinden — strategieën",
    explanation: "**Hoe vind je de hoofdgedachte?**\n\n**1. Lees de titel** — geeft vaak een hint.\n• Titel 'Voordelen van fietsen' → hoofdgedachte = 'fietsen heeft voordelen'.\n\n**2. Lees de eerste zin van elke alinea** — vaak 'topic-sentence'.\n• Eerste zinnen geven samenvatting van de alinea.\n\n**3. Lees de laatste alinea / conclusie** — geeft samenvatting.\n\n**4. Vraag: 'Wat is het rode draadje?'**\n• Wat komt steeds terug?\n• Wat is het hoofdthema dat alle alinea's verbindt?\n\n**5. Sleutelwoorden tellen**:\n• Welke woorden komen vaak voor?\n• Bijv. tekst over 'vrienden' — hoofdgedachte gaat over vriendschap.\n\n**Toets-fout 1**:\nKiezen voor een **detail** in plaats van het hoofdpunt.\n• Tekst over voetbal: detail = 'Messi is wereldspeler'.\n• Hoofd = 'voetbal is populair wereldwijd'.\n\n**Toets-fout 2**:\nKiezen voor een **te algemene** stelling.\n• Te algemeen: 'sporten zijn leuk'.\n• Beter: 'voetbal is wereldwijd populair'.\n\n**Toets-fout 3**:\nKiezen voor een **mening die NIET in tekst staat**.\n• Tekst zegt nergens dat 'tennis beter is dan voetbal'.\n• Antwoord moet komen uit de tekst.\n\n**Toets-tip**:\nHet juiste antwoord is meestal in **eigen woorden** wat de tekst zegt — niet een letterlijke quote. Maar wel binnen de tekst-info.",
    checks: [
      {
        q: "Waar **vind je vaak** de hoofdgedachte in een tekst?",
        options: ["Titel of eerste zin","Midden van zin 5","Helemaal niet","In de plaatjes"],
        answer: 0,
        wrongHints: [null,"Niet specifiek genoeg.","Wel — in titel/eerste zin.","Plaatjes ondersteunen, niet de hoofdgedachte."],
        uitlegPad: {
          stappen: [
            { titel: "Schrijvers zetten hoofdgedachte vaak vooraan", tekst: "Veel schrijvers beginnen met hun belangrijkste boodschap — dan weet de lezer waar het over gaat. Daarom: vaak in **titel + eerste alinea**." },
            { titel: "Kijk ook naar de laatste alinea", tekst: "Goede schrijvers HERHALEN de hoofdgedachte in de conclusie, soms in andere bewoording. Dus eerste én laatste alinea zijn beide goede zoek-plekken." },
            { titel: "Toets-strategie", tekst: "Bij toets-leesbegrip: lees eerst titel, dan EERSTE ZIN van elke alinea. Dat zijn de 'topic-sentences'. Vat samen → dat is meestal de hoofdgedachte." },
          ],
          woorden: [
            { woord: "topic-sentence", uitleg: "Eerste zin van een alinea — samenvatting van wat erin staat." },
            { woord: "conclusie", uitleg: "Laatste alinea — vaak herhaling van hoofdgedachte." },
          ],
          theorie: "Toets-tip: TITEL + EERSTE + LAATSTE alinea = 3 plekken om hoofdgedachte te vinden. Werkt voor 80%+ van teksten.",
          voorbeelden: [
            { type: "stap", tekst: "Titel: 'Voordelen van fietsen' → hoofdgedachte = 'fietsen heeft veel voordelen'." },
            { type: "stap", tekst: "Eerste zin: 'Plastic is een groot probleem voor de zee.' → hoofdgedachte = dit." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Schrijvers willen lezers helpen. Daarom zetten ze hoofdgedachte vooraan + herhalen achteraan." }],
          niveaus: {
            basis: "Hoofdgedachte vaak in titel of eerste zin (soms laatste alinea).",
            simpeler: "Titel + eerste zin van elke alinea bekijken.",
            nogSimpeler: "Vooraan kijken!",
          },
        },
      },
      {
        q: "Tekst: 'Kinderen leren beter na een goed ontbijt. Wetenschappers vergeleken kinderen mét en zónder ontbijt. Kinderen mét ontbijt scoorden hoger.'\n\n**Hoofdgedachte**?",
        options: ["Ontbijt helpt bij leren","Wetenschappers doen onderzoeken","Kinderen ontbijten thuis","Cornflakes zijn goed"],
        answer: 0,
        wrongHints: [null, "Detail (= methode van bewijs), niet hoofdpunt.", "Niet expliciet besproken.", "Niet vermeld in tekst."],
        uitlegPad: {
          stappen: [
            { titel: "Lees zin 1 — vaak de hoofdgedachte", tekst: "*'Kinderen leren beter na een goed ontbijt.'*\nDit is de **topic-sentence** — vaak staat de hoofdgedachte HIER. Daarna komen zinnen die het bewijzen." },
            { titel: "Check: bewijzen zin 2-3 de hoofdgedachte?", tekst: "Zin 2: wetenschappers deden onderzoek (= bewijs voor zin 1).\nZin 3: kinderen mét ontbijt scoorden hoger (= concreet resultaat = bewijs voor zin 1).\n→ Beide bewijzen 'ontbijt helpt bij leren'. Bevestigd." },
            { titel: "Waarom andere opties detail zijn", tekst: "• **'Wetenschappers doen onderzoeken'** — feit, maar over METHODE, niet over conclusie.\n• **'Kinderen ontbijten thuis'** — niet vermeld!\n• **'Cornflakes zijn goed'** — niet vermeld!\nToets-truc: antwoord MOET in de tekst staan. Niet in jouw eigen kennis." },
          ],
          woorden: [
            { woord: "topic-sentence", uitleg: "Eerste zin van alinea, vaak de hoofdgedachte." },
            { woord: "bewijs", uitleg: "Zinnen die de hoofdgedachte ondersteunen (onderzoek, voorbeelden)." },
          ],
          theorie: "Toets-leesstrategie hoofdgedachte:\n1. Lees zin 1 — kandidaat hoofdgedachte.\n2. Lees de volgende zinnen: bewijzen ze zin 1? Dan is zin 1 = hoofd.\n3. Antwoord MOET uit tekst komen, niet eigen kennis.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst: 'Sporten is gezond. Het versterkt je hart. Het verbetert je humeur.' → hoofdgedachte = 'sporten is gezond'." },
            { type: "stap", tekst: "Tekst: 'Plastic in zee is een probleem. 8 miljoen ton komt erin per jaar. Dieren stikken erin.' → hoofdgedachte = 'plastic in zee is een probleem'." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Zin 1 vaak hoofdgedachte. Andere opties die in tekst staan = details. Opties die NIET in tekst staan = afleiders." }],
          niveaus: {
            basis: "Ontbijt helpt bij leren (zin 1 = hoofdgedachte, zinnen 2-3 = bewijs).",
            simpeler: "Zin 1 zegt het: ontbijt → beter leren. Andere zinnen bewijzen dat met onderzoek.",
            nogSimpeler: "Ontbijt helpt",
          },
        },
      },
      {
        q: "Toets-fout — wat is **GEEN goede hoofdgedachte**?",
        options: ["Een detail uit de tekst","Wat tekst zegt in eigen woorden","Wat tekst herhaalt over alle alinea's","De rode draad"],
        answer: 0,
        wrongHints: [null, "Wel goed — eigen woorden gebruiken is juist sterk.", "Wel goed — wat steeds terugkomt = hoofdgedachte.", "Wel goed — synoniem voor hoofdgedachte."],
        uitlegPad: {
          stappen: [
            { titel: "Toets-instinker: kies geen detail", tekst: "Bij hoofdgedachte-vragen zitten in de opties vaak DETAILS uit de tekst — die zien er bekend uit en lijken juist. Maar een detail is NIET de hoofdgedachte." },
            { titel: "Wat is een detail vs hoofdgedachte?", tekst: "Tekst over voetbal:\n• **DETAIL**: 'Messi heeft 8 Gouden Ballen gewonnen' (specifieke info)\n• **HOOFD**: 'voetbal is wereldwijd populair' (algemene rode draad)\nDe hoofdgedachte staat boven de details — het is wat alle details ONDERSTEUNEN." },
            { titel: "Hoe herken je een detail-val?", tekst: "Optie is een detail als:\n• Het maar over 1 alinea gaat (geen rode draad).\n• Het een specifiek getal / naam / feit is.\n• Andere alinea's zeggen er niets over.\nDe hoofdgedachte dekt ALLE alinea's." },
          ],
          woorden: [
            { woord: "detail", uitleg: "Klein specifiek feit binnen tekst." },
            { woord: "rode draad", uitleg: "Het thema dat door alle alinea's loopt." },
          ],
          theorie: "Toets-truc detail vs hoofdgedachte: lees elke optie + vraag 'klopt dit voor de HELE tekst, of slechts 1 zin?'. Als alleen voor 1 zin → detail. Als voor hele tekst → hoofdgedachte.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over fietsen. Detail: 'Mijn oom fietst 20 km'. Hoofd: 'fietsen is gezond'. De hoofdgedachte dekt de hele tekst, het detail is 1 anekdote." },
            { type: "stap", tekst: "Pas op: 'Wat tekst herhaalt over alle alinea's' KLINKT als de hoofdgedachte want = rode draad. Niet weggooien als afleider!" },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Hoofd = ALLE alinea's. Detail = 1 alinea / 1 zin. Detail-opties zijn val-strikken bij de Doorstroomtoets." }],
          niveaus: {
            basis: "Een detail uit de tekst is GEEN hoofdgedachte.",
            simpeler: "Detail = klein stukje uit 1 zin. Hoofdgedachte = rode draad door HELE tekst.",
            nogSimpeler: "Detail = A (geen hoofdgedachte).",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "De titel van een tekst is: **'Waarom slapen zo belangrijk is'**. Wat zal de hoofdgedachte waarschijnlijk zijn?",
        options: ["Slapen is belangrijk", "Dromen zijn spannend", "Slapen is saai", "Een bed is duur"],
        answer: 0,
        wrongHints: [
          null,
          "Zegt de titel iets over dromen?",
          null,
          "Waar gaat de titel over: slapen of bedden?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Lees de titel",
              tekst: "De titel geeft vaak een hint. Hier: *'Waarom slapen zo belangrijk is'*.",
            },
            {
              titel: "Wat zegt de titel?",
              tekst: "De tekst gaat over **slapen** (onderwerp) en zegt dat het **belangrijk** is. Hoofdgedachte = 'slapen is belangrijk'.",
            },
            {
              titel: "Waarom NIET de andere opties?",
              tekst: "• **Dromen** — niet genoemd in de titel.\n• **Saai** — juist het tegenovergestelde van belangrijk.\n• **Bed is duur** — gaat over iets anders.",
            },
          ],
          woorden: [
            {
              woord: "titel",
              uitleg: "De naam boven de tekst — vaak een hint.",
            },
            {
              woord: "hint",
              uitleg: "Een tip die je op weg helpt.",
            },
          ],
          theorie: "Strategie 1: lees eerst de titel. Titel 'Voordelen van fietsen' → hoofdgedachte 'fietsen heeft voordelen'.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Titel 'Waarom we recyclen' → hoofdgedachte gaat over het nut van recyclen.",
            },
            {
              type: "stap",
              tekst: "Titel 'Gevaren van de zon' → hoofdgedachte = 'de zon kan gevaarlijk zijn'.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Titel = eerste hint. Daarna checken met de tekst.",
            },
          ],
          niveaus: {
            basis: "Slapen is belangrijk.",
            simpeler: "De titel zegt het al: slapen is belangrijk.",
            nogSimpeler: "Titel lezen",
          },
        },
      },
      {
        q: "Tekst: 'Een ijsbeer heeft een dikke vacht. Onder zijn huid zit een laag vet. Zo blijft hij warm in de kou.'\n\n**Hoofdgedachte**?",
        options: [
          "Een ijsbeer is goed beschermd tegen de kou",
          "Dieren zijn bijzonder",
          "Een ijsbeer heeft een dikke vacht",
          "IJsberen zijn gevaarlijk voor mensen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Gaat de tekst over alle dieren?",
          "Dat staat erin, maar is het de hele boodschap?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat komt steeds terug?",
              tekst: "Vacht, vetlaag, warm blijven: alles gaat over hoe de ijsbeer **warm blijft in de kou**.",
            },
            {
              titel: "De rode draad",
              tekst: "Samen: **een ijsbeer is goed beschermd tegen de kou**.",
            },
            {
              titel: "De drie toets-fouten",
              tekst: "• **Dieren zijn bijzonder** — te algemeen.\n• **Dikke vacht** — een detail (maar één zin).\n• **Gevaarlijk voor mensen** — staat niet in de tekst.",
            },
          ],
          woorden: [
            {
              woord: "te algemeen",
              uitleg: "Een zin die over veel meer gaat dan de tekst.",
            },
            {
              woord: "detail",
              uitleg: "Klein stukje uit één zin.",
            },
          ],
          theorie: "Toets-fout 1: detail kiezen. Toets-fout 2: te algemeen kiezen. Toets-fout 3: iets kiezen wat niet in de tekst staat.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Een kameel kan lang zonder water. Hij heeft brede voeten voor het zand.' → hoofdgedachte = 'een kameel past goed bij de woestijn'.",
            },
            {
              type: "stap",
              tekst: "'Dieren zijn bijzonder' is te algemeen voor een tekst over één dier.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Niet te groot, niet te klein: precies wat de hele tekst zegt.",
            },
          ],
          niveaus: {
            basis: "Een ijsbeer is goed beschermd tegen de kou.",
            simpeler: "Vacht + vet = warm blijven. Dat is de kern.",
            nogSimpeler: "Beschermd tegen kou",
          },
        },
      },
      {
        q: "Tekst: 'Fruit is gezond. Er zitten vitamines in die je lichaam nodig heeft.'\n\nWelke hoofdgedachte is **te algemeen**?",
        options: [
          "Eten is belangrijk",
          "Fruit is gezond",
          "Fruit is goed voor je lichaam",
          "Fruit geeft je vitamines",
        ],
        answer: 0,
        wrongHints: [null, "Gaat deze zin over fruit, of over iets groters?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is te algemeen?",
              tekst: "Een **te algemene** zin gaat over veel meer dan de tekst. De tekst gaat over **fruit**, niet over al het eten.",
            },
            {
              titel: "Check elke optie",
              tekst: "• **Eten is belangrijk** — gaat over al het eten → te algemeen.\n• **Fruit is gezond** — precies de tekst.\n• **Goed voor je lichaam** — past bij de tekst.\n• **Geeft vitamines** — staat in de tekst.",
            },
            {
              titel: "Toets-tip",
              tekst: "Bij 'te algemeen': zoek de optie waar het onderwerp van de tekst (fruit) verdwenen is.",
            },
          ],
          woorden: [
            {
              woord: "te algemeen",
              uitleg: "Te breed: gaat over veel meer dan de tekst.",
            },
          ],
          theorie: "Toets-fout 2: een te algemene stelling kiezen. Te algemeen: 'sporten is leuk'. Beter: 'voetbal is wereldwijd populair'.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tekst over honden → 'dieren zijn leuk' = te algemeen.",
            },
            {
              type: "stap",
              tekst: "Tekst over de trein → 'reizen is fijn' = te algemeen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Staat het onderwerp van de tekst nog in de zin? Nee → te algemeen.",
            },
          ],
          niveaus: {
            basis: "Eten is belangrijk = te algemeen.",
            simpeler: "De tekst gaat over fruit. 'Eten' is veel breder.",
            nogSimpeler: "Eten = te breed",
          },
        },
      },
      {
        q: "Tekst: 'In Nederland fietsen veel kinderen naar school. Dat is gezond en goed voor het milieu.'\n\nWelke zin is een **mening die NIET in de tekst staat**?",
        options: [
          "Fietsen is leuker dan lopen",
          "Fietsen is gezond",
          "Fietsen is goed voor het milieu",
          "Veel kinderen fietsen naar school",
        ],
        answer: 0,
        wrongHints: [null, null, "Zoek in de tekst: wordt het milieu genoemd?", "Staat dit in de eerste zin?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Lees wat de tekst zegt",
              tekst: "De tekst zegt: veel kinderen fietsen naar school, het is **gezond** en **goed voor het milieu**.",
            },
            {
              titel: "Zoek wat er NIET staat",
              tekst: "**Lopen** wordt nergens genoemd. 'Fietsen is leuker dan lopen' is een mening die jij of iemand anders kan hebben, maar die staat niet in de tekst.",
            },
            {
              titel: "Toets-fout 3",
              tekst: "Een hoofdgedachte moet uit de tekst komen. Een mening die er niet in staat, is altijd fout.",
            },
          ],
          woorden: [
            {
              woord: "mening",
              uitleg: "Wat iemand ergens van vindt.",
            },
            {
              woord: "milieu",
              uitleg: "De natuur en de lucht om ons heen.",
            },
          ],
          theorie: "Toets-fout 3: kiezen voor een mening die NIET in de tekst staat. Antwoord moet komen uit de tekst.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tekst zegt niets over tennis → 'tennis is beter dan voetbal' is fout.",
            },
            {
              type: "stap",
              tekst: "Tekst over appels → 'peren zijn lekkerder' staat er niet in.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zoek elk woord terug in de tekst. Niet te vinden? Dan staat het er niet.",
            },
          ],
          niveaus: {
            basis: "Fietsen is leuker dan lopen staat niet in de tekst.",
            simpeler: "Lopen wordt niet genoemd. Dus die mening komt niet uit de tekst.",
            nogSimpeler: "Lopen staat er niet",
          },
        },
      },
      {
        q: "Waarom lees je ook de **laatste alinea** als je de hoofdgedachte zoekt?",
        options: [
          "Daar staat vaak een samenvatting",
          "Daar staan de moeilijkste woorden",
          "Daar staat de naam van de schrijver",
          "Daar staan de meeste plaatjes",
        ],
        answer: 0,
        wrongHints: [null, "Wat doet een schrijver vaak aan het eind van een tekst?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Eind = samenvatting",
              tekst: "Veel schrijvers eindigen met een **conclusie**: ze vatten nog één keer samen wat ze willen zeggen.",
            },
            {
              titel: "Dus twee goede plekken",
              tekst: "Begin (titel + eerste zin) en eind (laatste alinea). Daar staat de hoofdgedachte vaak.",
            },
            {
              titel: "Waarom NIET de andere opties?",
              tekst: "Moeilijke woorden, de naam van de schrijver en plaatjes zeggen niets over de hoofdgedachte.",
            },
          ],
          woorden: [
            {
              woord: "alinea",
              uitleg: "Een stukje tekst van een paar zinnen bij elkaar.",
            },
            {
              woord: "conclusie",
              uitleg: "Het slot: wat de schrijver samenvat.",
            },
          ],
          theorie: "Strategie 3: lees de laatste alinea of conclusie. Die geeft vaak een samenvatting.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Laatste zin: 'Kortom, water drinken is gezond.' → hoofdgedachte = water drinken is gezond.",
            },
            {
              type: "stap",
              tekst: "Laatste alinea begint met 'Dus' → daar staat vaak de kern.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Begin + eind lezen = snel de hoofdgedachte vinden.",
            },
          ],
          niveaus: {
            basis: "Laatste alinea = vaak samenvatting.",
            simpeler: "Aan het eind zegt de schrijver nog één keer wat hij bedoelt.",
            nogSimpeler: "Eind = samenvatting",
          },
        },
      },
      {
        q: "Tekst: 'Op het schoolplein speelt Sam met zijn vriend Ali. Vrienden helpen elkaar als het moeilijk is. Met een vriend kun je lachen en praten. Vriendschap maakt je blij.'\n\nWelk **sleutelwoord** komt steeds terug?",
        options: ["Vriend", "Schoolplein", "Lachen", "Moeilijk"],
        answer: 0,
        wrongHints: [null, "Hoe vaak staat dit woord in de tekst?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel de woorden",
              tekst: "**Vriend** (en vrienden, vriendschap) staat in ELKE zin. Schoolplein, lachen en moeilijk staan er maar één keer.",
            },
            {
              titel: "Sleutelwoord = hint",
              tekst: "Een woord dat steeds terugkomt, vertelt waar de tekst over gaat. Hier: **vriendschap**.",
            },
            {
              titel: "Van sleutelwoord naar hoofdgedachte",
              tekst: "Sleutelwoord 'vriend' + wat erover gezegd wordt → hoofdgedachte: 'vrienden zijn fijn en belangrijk'.",
            },
          ],
          woorden: [
            {
              woord: "sleutelwoord",
              uitleg: "Belangrijk woord dat vaak terugkomt in de tekst.",
            },
          ],
          theorie: "Strategie 5: sleutelwoorden tellen. Welke woorden komen vaak voor? Tekst over 'vrienden' → hoofdgedachte gaat over vriendschap.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tekst met 5× 'zee' → de tekst gaat over de zee.",
            },
            {
              type: "stap",
              tekst: "Tekst met 4× 'school' → de tekst gaat over school.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Kijk welk woord in bijna elke zin staat.",
            },
          ],
          niveaus: {
            basis: "Vriend komt in elke zin terug.",
            simpeler: "Vriend, vrienden, vriendschap: steeds hetzelfde woord.",
            nogSimpeler: "Vriend",
          },
        },
      },
      {
        q: "Tekst: 'Elke ochtend smeert Lisa haar boterhammen. Daarna poetst ze haar tanden. Om half acht pakt ze haar tas. Dan fietst ze naar school.'\n\n**Hoofdgedachte**?",
        options: [
          "Lisa maakt zich klaar voor school",
          "Lisa poetst elke ochtend haar tanden",
          "Lisa eet graag brood",
          "Kinderen gaan elke dag naar school",
        ],
        answer: 0,
        wrongHints: [null, "Gaat dit over de hele tekst of over één zin?", "Staat 'graag' in de tekst?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is de rode draad?",
              tekst: "Boterhammen, tanden poetsen, tas pakken, naar school fietsen. Wat verbindt dit? Lisa **maakt zich klaar voor school**.",
            },
            {
              titel: "Check: past het bij alle zinnen?",
              tekst: "Ja: alle vier de dingen doet ze 's ochtends voordat ze naar school gaat.",
            },
            {
              titel: "Waarom NIET de andere opties?",
              tekst: "• **Tanden poetsen** — één zin: een detail.\n• **Graag brood** — staat niet in de tekst.\n• **Kinderen gaan naar school** — te algemeen, het gaat om Lisa.",
            },
          ],
          woorden: [
            {
              woord: "rode draad",
              uitleg: "Wat alle zinnen met elkaar verbindt.",
            },
          ],
          theorie: "Strategie 4: vraag 'wat komt steeds terug?' Hier: dingen die Lisa 's ochtends doet voor school.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Tim pakt zijn zwemtas. Hij doet zijn zwembroek aan. Hij springt in het water.' → hoofdgedachte = 'Tim gaat zwemmen'.",
            },
            {
              type: "stap",
              tekst: "'Lisa poetst haar tanden' = maar één stap.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zoek het woord of idee dat alle zinnen samen maken.",
            },
          ],
          niveaus: {
            basis: "Lisa maakt zich klaar voor school.",
            simpeler: "Alle zinnen = wat Lisa 's ochtends doet voor school.",
            nogSimpeler: "Klaar voor school",
          },
        },
      },
    ],
  },

  {
    title: "Hoofdzaken vs bijzaken",
    explanation: "**Hoofdzaak** = belangrijke informatie. **Bijzaak** = extra detail.\n\n**Hoe verschil zien**:\n• **Hoofdzaak**: ondersteunt direct de hoofdgedachte.\n• **Bijzaak**: leuk detail, maar niet essentieel.\n\n**Voorbeeld** — over hond:\n*'De hond is een trouw huisdier. Hij beschermt zijn baasje en speelt graag. De buurman heeft ook een hond, een witte bouvier van 4 jaar oud. Honden eten meestal brokjes.'*\n\n**Hoofdzaken**:\n• Hond is trouw huisdier.\n• Hij beschermt zijn baasje.\n• Hij speelt graag.\n\n**Bijzaken** *(weglaten kan)*:\n• 'Buurman heeft een witte bouvier van 4 jaar' — leuk detail, maar niet over 'hond als huisdier'.\n• 'Honden eten brokjes' — wel waar, maar gaat naast het hoofdpunt.\n\n**Truc — kun je het schrappen?**\nLees de tekst zonder een zin. Verandert de hoofdboodschap? Nee → bijzaak. Ja → hoofdzaak.\n\n**Soorten bijzaken**:\n1. **Voorbeelden** *(soms hoofdzaak, soms bij)*.\n2. **Anekdotes** — verhaaltjes (bij).\n3. **Cijfers en details** — extra info (bij).\n4. **Zijwegen** — info die het onderwerp ietsje raakt (bij).\n\n**toetsvraag-typen**:\n• 'Welke zin is een **bijzaak**?'\n• 'Welke informatie is **NIET** essentieel?'\n• 'Welk feit kun je **weglaten** zonder de boodschap te verliezen?'",
    checks: [
      {
        q: "Tekst: 'Fietsen is gezond. Het is goed voor je hart en je spieren. Ook je longen worden sterker. Mijn oom Henk fietst elke dag 20 km.'\n\n**Welke zin is een bijzaak**?",
        options: ["Mijn oom Henk fietst elke dag 20 km.","Fietsen is gezond.","Het is goed voor je hart en je spieren.","Ook je longen worden sterker."],
        answer: 0,
        wrongHints: [null, "Hoofdzaak (= de hoofdgedachte).", "Hoofdzaak (= bewijs algemeen).", "Hoofdzaak (= bewijs algemeen)."],
        uitlegPad: {
          stappen: [
            { titel: "Hoofdzaak vs bijzaak — schrap-test", tekst: "**Truc**: lees de tekst zonder die ene zin. Verandert de hoofdboodschap?\n• **Verandert NIET** → bijzaak (kan weg)\n• **Verandert WEL** → hoofdzaak (essentieel)" },
            { titel: "Pas toe op deze tekst", tekst: "Zonder 'Mijn oom Henk fietst elke dag 20 km' lees je nog steeds: 'Fietsen is gezond. Het is goed voor je hart en je spieren. Ook je longen worden sterker.' → boodschap verandert niet → het is een **bijzaak** (anekdote)." },
            { titel: "Waarom de andere zinnen hoofdzaak zijn", tekst: "• 'Fietsen is gezond' = de hoofdgedachte zelf — niet schrapbaar.\n• 'Goed voor hart en spieren' = bewijs dat fietsen gezond is — schrappen verzwakt boodschap.\n• 'Longen worden sterker' = ander bewijs — idem.\nDie 3 dragen samen de boodschap." },
          ],
          woorden: [
            { woord: "hoofdzaak", uitleg: "Zin die direct de hoofdgedachte ondersteunt — essentieel." },
            { woord: "bijzaak", uitleg: "Detail/anekdote — leuk, maar kan weg." },
            { woord: "schrap-test", uitleg: "Truc: lees zonder die zin — verandert de boodschap?" },
          ],
          theorie: "Toets-truc hoofd-bij: bijzaken zijn vaak:\n• **Anekdotes** ('mijn oom...', 'ik herinner me...')\n• **Specifieke voorbeelden** met eigennamen\n• **Cijfers/details** die over 1 geval gaan\nHoofdzaken zijn algemeen + dekken het hoofdthema.",
          voorbeelden: [
            { type: "stap", tekst: "*'Honden zijn loyaal. Ze beschermen je. Mijn buurman heeft een Labrador.'* → 'buurman/Labrador' = bijzaak (anekdote)." },
            { type: "stap", tekst: "*'Lezen is goed. Het ontwikkelt je woordenschat. Ik las gisteren een boek over piraten.'* → 'gisteren piraten-boek' = bijzaak." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eigennaam (Henk, Anna, buurman) + specifieke daad = bijna altijd bijzaak (anekdote)." }],
          niveaus: {
            basis: "'Mijn oom Henk...' = bijzaak (schrap-test bevestigt).",
            simpeler: "Eigennaam + specifieke daad = anekdote = bijzaak.",
            nogSimpeler: "Oom Henk = bijzaak",
          },
        },
      },
      {
        q: "Hoofdzaak of bijzaak: **'Beren slapen 's winters'**? *(in een tekst over winterslaap)*.",
        options: ["Hoofdzaak","Bijzaak","Geen van beide","Dat kun je niet weten"],
        answer: 0,
        wrongHints: [null,"Nee — feit gaat direct over winterslaap = het hoofdonderwerp.","Wel relevant.","Je weet waar de tekst over gaat — dan kun je het wél bepalen."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is het onderwerp van de tekst?", tekst: "De tekst gaat over **winterslaap**. Dat is het hoofdonderwerp. Elke zin die DIRECT over winterslaap gaat = **hoofdzaak**. Elke zin die alleen zijdelings gerelateerd is = **bijzaak**." },
            { titel: "Past 'beren slapen 's winters' bij het onderwerp?", tekst: "Het feit: **beren slapen 's winters** = beren houden een winterslaap. Dit is **letterlijk** het onderwerp van de tekst. → **Hoofdzaak**." },
            { titel: "Vergelijk: wat zou een BIJzaak zijn?", tekst: "Bij dezelfde tekst zouden bijzaken zijn:\n• 'Mijn buurman heeft een teddybeer thuis' → over beren, maar NIET over winterslaap\n• 'In Alaska is het 's winters −30 °C' → wel over winter, maar de tekst gaat over slapen\n• 'Mijn oma haakt graag in de winter' → totaal niet relevant\nDeze zinnen kun je weglaten zonder dat de hoofdgedachte verandert." },
          ],
          woorden: [
            { woord: "hoofdzaak", uitleg: "Zin die direct over het hoofdonderwerp van de tekst gaat." },
            { woord: "bijzaak", uitleg: "Zin die zijdelings, met details of voorbeelden, ergens omheen ligt." },
          ],
          theorie: "Hoofd-of-bijzaak-test in 3 stappen:\n1. Welk onderwerp staat in de TITEL of EERSTE zin?\n2. Gaat deze zin direct over dat onderwerp? → hoofd\n3. Of is het een detail, voorbeeld of zijspoor? → bij\n\nBelangrijk: **hoofd/bijzaak is altijd RELATIEF aan het tekst-onderwerp**. Een feit kan in tekst A hoofdzaak zijn en in tekst B bijzaak. Lees dus eerst goed waar de tekst over gaat.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over 'voordelen fietsen': 'Fietsen is goed voor je gezondheid' → hoofd (gaat over voordeel). 'Mijn fiets is rood' → bij (irrelevant detail)." },
            { type: "stap", tekst: "Tekst over 'recycling': 'Plastic recyclen bespaart olie' → hoofd. 'Onze container staat naast school' → bij." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag jezelf: 'Als ik deze zin weghaal, mist de tekst dan iets belangrijks over het onderwerp?' Ja → hoofd. Nee → bij." }],
          niveaus: {
            basis: "Hoofdzaak — feit gaat direct over winterslaap.",
            simpeler: "De tekst gaat over winterslaap. 'Beren slapen 's winters' = beren houden winterslaap. Direct = hoofdzaak.",
            nogSimpeler: "Hoofdzaak = A. Direct over onderwerp.",
          },
        },
      },
      {
        q: "**Truc** om te checken hoofd vs bij?",
        options: ["Schrap de zin — verandert de boodschap?","Tel de woorden","Kijk naar kleur","Kijk naar plaatje"],
        answer: 0,
        wrongHints: [null, "Aantal woorden zegt niets over belangrijkheid.", "Tekst heeft geen kleuren.", "Plaatjes ondersteunen, maar zijn niet de truc."],
        uitlegPad: {
          stappen: [
            { titel: "De schrap-test", tekst: "Voor elke zin: lees de tekst MET zin → lees de tekst ZONDER die zin → vergelijk.\n• **Hoofdboodschap verandert?** → die zin is een **hoofdzaak** (kan niet weg)\n• **Hoofdboodschap blijft hetzelfde?** → die zin is een **bijzaak** (kan weg)" },
            { titel: "Concreet voorbeeld", tekst: "*'Honden zijn loyaal. Mijn oom heeft een witte hond. Ze beschermen je.'*\n\n**Schrap zin 2** ('Mijn oom...'): *'Honden zijn loyaal. Ze beschermen je.'* → boodschap (honden zijn fijne huisdieren) BLIJFT → **bijzaak**.\n\n**Schrap zin 1** ('Honden zijn loyaal'): *'Mijn oom heeft een witte hond. Ze beschermen je.'* → boodschap is verzwakt, je weet niet meer waarom honden goed zijn → **hoofdzaak**." },
            { titel: "Waarom andere opties niet werken", tekst: "• **Aantal woorden** — een lange zin kan bijzaak zijn, een korte zin kan hoofdzaak.\n• **Kleur** — alleen relevant in opmaak/website, niet in tekst-inhoud.\n• **Plaatjes** — kunnen ondersteunen maar zeggen niet wat hoofd vs bij is." },
          ],
          woorden: [
            { woord: "schrap-test", uitleg: "Truc: lees tekst zonder zin — verandert boodschap?" },
            { woord: "essentieel", uitleg: "Onmisbaar — verwijderen = boodschap valt uit elkaar." },
          ],
          theorie: "Toets-truc voor lange teksten met veel zinnen:\n1. Lees zin\n2. Mentaal schrappen\n3. Verandert kern-boodschap? → hoofd\n4. Geen verandering? → bijzaak\nWerkt voor ALLE tekstsoorten (informatief, betogend, verhalend, instructief).",
          voorbeelden: [
            { type: "stap", tekst: "*'Lezen is goed. Het ontwikkelt woordenschat. Mijn buurjongen leest nooit.'* → zin 3 schrappen verandert boodschap niet → bijzaak (negatieve anekdote)." },
            { type: "stap", tekst: "*'Bewegen is gezond. Het versterkt hart en spieren. Onderzoekers raden 1 uur per dag aan.'* → alle 3 zinnen versterken elkaar → ALLE 3 hoofdzaak." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Schrap-test = de mentale truc. Niet woorden tellen, kleur kijken of plaatje — gewoon zin mentaal weghalen + check boodschap." }],
          niveaus: {
            basis: "Schrap-test: lees zonder zin, verandert boodschap?",
            simpeler: "Doe alsof je de zin weglaat. Kun je de tekst nog snappen? Dan bijzaak. Niet meer snappen? Hoofdzaak.",
            nogSimpeler: "Schrap-test",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Tekst: 'Een bij is een nuttig insect. Bijen brengen stuifmeel van bloem naar bloem. Zo kunnen er vruchten groeien. Mijn zus is een beetje bang voor bijen.'\n\nWelke zin is een **bijzaak**?",
        options: [
          "Mijn zus is een beetje bang voor bijen.",
          "Een bij is een nuttig insect.",
          "Bijen brengen stuifmeel van bloem naar bloem.",
          "Zo kunnen er vruchten groeien.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dit is de eerste zin. Wat zegt die over de hele tekst?",
          null,
          "Legt deze zin uit waarom bijen nuttig zijn?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is de hoofdgedachte?",
              tekst: "Zin 1: *'Een bij is een nuttig insect.'* De zinnen 2 en 3 leggen uit WAAROM: ze brengen stuifmeel rond, zo groeien er vruchten.",
            },
            {
              titel: "Schrap-test",
              tekst: "Lees de tekst zonder *'Mijn zus is een beetje bang voor bijen.'* De boodschap (bijen zijn nuttig) blijft hetzelfde → **bijzaak**.",
            },
            {
              titel: "Signaal",
              tekst: "'Mijn zus' = een persoonlijk verhaaltje (anekdote). Dat is bijna altijd een bijzaak.",
            },
          ],
          woorden: [
            {
              woord: "bijzaak",
              uitleg: "Extra detail dat je kunt weglaten.",
            },
            {
              woord: "stuifmeel",
              uitleg: "Geel poeder in een bloem.",
            },
          ],
          theorie: "Hoofdzaak = ondersteunt direct de hoofdgedachte. Bijzaak = leuk detail, maar niet essentieel.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Katten zijn schoon. Ze wassen zich vaak. Onze kat heet Mimi.' → 'Mimi' = bijzaak.",
            },
            {
              type: "stap",
              tekst: "'Bijen brengen stuifmeel rond' = hoofdzaak: het legt uit waarom bijen nuttig zijn.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "'Mijn …' + iets over één persoon = meestal bijzaak.",
            },
          ],
          niveaus: {
            basis: "De zin over de zus is een bijzaak.",
            simpeler: "Schrap die zin: bijen zijn nog steeds nuttig. Dus bijzaak.",
            nogSimpeler: "Zus = bijzaak",
          },
        },
      },
      {
        q: "Welke soort zin is meestal een **bijzaak**?",
        options: [
          "Een kort verhaaltje over iemand die je kent",
          "De zin met de hoofdgedachte",
          "Een zin die de hoofdgedachte uitlegt",
          "De conclusie aan het eind van de tekst",
        ],
        answer: 0,
        wrongHints: [null, "Kun je de kern van de tekst weglaten?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Soorten bijzaken",
              tekst: "Bijzaken zijn vaak: **anekdotes** (verhaaltjes), cijfers en kleine details, en zijwegen.",
            },
            {
              titel: "Anekdote = verhaaltje",
              tekst: "'Mijn oom fietst elke dag' is een verhaaltje over één persoon. Leuk, maar je kunt het weglaten.",
            },
            {
              titel: "Waarom NIET de andere opties?",
              tekst: "De hoofdgedachte, een zin die die uitlegt, en de conclusie dragen de boodschap. Die zijn **hoofdzaak**.",
            },
          ],
          woorden: [
            {
              woord: "anekdote",
              uitleg: "Een kort persoonlijk verhaaltje.",
            },
            {
              woord: "hoofdzaak",
              uitleg: "Belangrijke informatie die de hoofdgedachte steunt.",
            },
          ],
          theorie: "Soorten bijzaken: 1. voorbeelden (soms), 2. anekdotes, 3. cijfers en details, 4. zijwegen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Mijn buurman heeft een bouvier' in een tekst over honden = anekdote = bijzaak.",
            },
            {
              type: "stap",
              tekst: "'Gisteren las ik een boek' in een tekst over lezen = bijzaak.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Verhaaltje over één persoon? Bijna altijd bijzaak.",
            },
          ],
          niveaus: {
            basis: "Een verhaaltje over iemand = bijzaak.",
            simpeler: "Anekdotes kun je weglaten. De kern blijft dan hetzelfde.",
            nogSimpeler: "Verhaaltje = bij",
          },
        },
      },
      {
        q: "Tekst: 'Handen wassen is belangrijk. Zo spoel je vieze bacteriën weg. Daardoor word je minder snel ziek. Onze zeep thuis ruikt naar citroen.'\n\nWelke zin kun je **weglaten** zonder dat de boodschap verandert?",
        options: [
          "Onze zeep thuis ruikt naar citroen.",
          "Handen wassen is belangrijk.",
          "Zo spoel je vieze bacteriën weg.",
          "Daardoor word je minder snel ziek.",
        ],
        answer: 0,
        wrongHints: [null, null, "Vertelt deze zin waarom handen wassen belangrijk is?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is de boodschap?",
              tekst: "*'Handen wassen is belangrijk'* — want je spoelt bacteriën weg en wordt minder snel ziek.",
            },
            {
              titel: "Schrap-test",
              tekst: "Zonder *'Onze zeep thuis ruikt naar citroen'*: de boodschap blijft precies hetzelfde. → **bijzaak**.",
            },
            {
              titel: "Waarom de rest hoofdzaak is",
              tekst: "Zonder 'bacteriën wegspoelen' of 'minder snel ziek' weet je niet meer WAAROM handen wassen belangrijk is.",
            },
          ],
          woorden: [
            {
              woord: "weglaten",
              uitleg: "Schrappen, eruit halen.",
            },
            {
              woord: "bacteriën",
              uitleg: "Heel kleine beestjes die je ziek kunnen maken.",
            },
          ],
          theorie: "Truc — kun je het schrappen? Lees de tekst zonder een zin. Verandert de hoofdboodschap? Nee → bijzaak. Ja → hoofdzaak.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Groente is gezond. Er zitten vitamines in. Ik heb een groen bord.' → groen bord = weglaten.",
            },
            {
              type: "stap",
              tekst: "'Daardoor word je minder snel ziek' = reden = hoofdzaak.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Geur van de zeep zegt niets over waarom wassen belangrijk is.",
            },
          ],
          niveaus: {
            basis: "De citroen-zin kun je weglaten.",
            simpeler: "Zonder de citroen-zin blijft de boodschap: handen wassen is belangrijk.",
            nogSimpeler: "Citroen weg",
          },
        },
      },
      {
        q: "Tekst: 'Een zebra leeft in een groep. In een groep is hij veiliger voor leeuwen. Samen letten ze goed op gevaar. Elke zebra heeft een eigen strepenpatroon.'\n\nWelke informatie is **NIET essentieel**?",
        options: [
          "Elke zebra heeft een eigen strepenpatroon",
          "Een zebra leeft in een groep",
          "In een groep is hij veiliger voor leeuwen",
          "Samen letten ze goed op gevaar",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dit is de eerste zin. Waar gaat de hele tekst over?",
          null,
          "Gaat deze zin over leven in een groep?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is de hoofdgedachte?",
              tekst: "De tekst gaat over **zebra's die in een groep leven** en waarom dat veilig is.",
            },
            {
              titel: "Welke zin hoort er niet echt bij?",
              tekst: "*'Elke zebra heeft een eigen strepenpatroon'* klopt wel, maar gaat over strepen, niet over de groep. Dat is een **zijweg** → bijzaak.",
            },
            {
              titel: "Schrap-test",
              tekst: "Zonder de strepen-zin blijft de boodschap: in een groep zijn zebra's veiliger. → niet essentieel.",
            },
          ],
          woorden: [
            {
              woord: "essentieel",
              uitleg: "Echt nodig, onmisbaar.",
            },
            {
              woord: "zijweg",
              uitleg: "Info die het onderwerp maar een beetje raakt.",
            },
          ],
          theorie: "Soorten bijzaken: zijwegen = info die het onderwerp ietsje raakt. Klopt wel, maar gaat naast het hoofdpunt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tekst over honden als huisdier: 'Honden eten brokjes' = wel waar, maar gaat naast het hoofdpunt.",
            },
            {
              type: "stap",
              tekst: "'Samen letten ze op gevaar' = hoort bij de groep = hoofdzaak.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Klopt een zin wel, maar hoort hij niet bij de hoofdgedachte? Dan is het een bijzaak.",
            },
          ],
          niveaus: {
            basis: "De strepen-zin is niet essentieel.",
            simpeler: "De tekst gaat over de groep. Strepen = zijweg.",
            nogSimpeler: "Strepen = bij",
          },
        },
      },
      {
        q: "Tekst: 'Een tablet kan handig zijn op school. Je kunt er snel iets op opzoeken. Mijn tablet heeft een blauwe hoes. Gisteren viel hij bijna op de grond.'\n\nWelke zin is een **hoofdzaak**?",
        options: [
          "Je kunt er snel iets op opzoeken.",
          "Mijn tablet heeft een blauwe hoes.",
          "Gisteren viel hij bijna op de grond.",
          "Een tablet kan vallen.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Zegt de kleur van de hoes iets over handig zijn op school?",
          null,
          "Staat dit zo in de tekst, en zegt het iets over school?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is de hoofdgedachte?",
              tekst: "Zin 1: *'Een tablet kan handig zijn op school.'*",
            },
            {
              titel: "Welke zin steunt dat?",
              tekst: "*'Je kunt er snel iets op opzoeken'* legt uit WAAROM een tablet handig is. → **hoofdzaak**.",
            },
            {
              titel: "Waarom NIET de andere opties?",
              tekst: "• **Blauwe hoes** — persoonlijk detail.\n• **Gisteren bijna gevallen** — verhaaltje (anekdote).\n• **Een tablet kan vallen** — zegt niets over handig op school.",
            },
          ],
          woorden: [
            {
              woord: "hoofdzaak",
              uitleg: "Zin die direct de hoofdgedachte steunt.",
            },
          ],
          theorie: "Hoofdzaak: ondersteunt direct de hoofdgedachte. Bijzaak: leuk detail, maar niet essentieel.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Een bril helpt je beter zien. Je kunt weer lezen. Mijn bril is rood.' → 'weer lezen' = hoofdzaak, 'rood' = bijzaak.",
            },
            {
              type: "stap",
              tekst: "'Gisteren …' = vaak een anekdote.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Vraag: helpt deze zin om de hoofdgedachte te bewijzen? Ja → hoofdzaak.",
            },
          ],
          niveaus: {
            basis: "Opzoeken = hoofdzaak.",
            simpeler: "Opzoeken laat zien waarom een tablet handig is op school.",
            nogSimpeler: "Opzoeken",
          },
        },
      },
    ],
  },

  {
    title: "Samenvatting maken",
    explanation: "**Samenvatten** = de tekst korter maken zonder de hoofdboodschap te verliezen.\n\n**Goede samenvatting bevat**:\n1. **Hoofdgedachte** (1 zin).\n2. **Hoofdzaken** *(belangrijke punten)*.\n3. **In eigen woorden** (niet kopiëren).\n4. **Korter dan origineel** *(meestal ~25-30%)*.\n\n**Goede samenvatting bevat NIET**:\n• Bijzaken / details.\n• Voorbeelden (tenzij essentieel).\n• Eigen mening (alleen wat tekst zegt).\n• Letterlijke kopie van zinnen.\n\n**Stappen om samen te vatten**:\n1. **Lees** de hele tekst eerst.\n2. **Onderstreep** hoofdpunten in elke alinea.\n3. **Schrap** bijzaken.\n4. **Schrijf** in 3-5 zinnen wat de tekst zegt.\n5. **Controleer**: klopt jouw samenvatting met origineel?\n\n**Voorbeeld**:\n**Tekst**: *'Vrienden zijn belangrijk. Ze geven je steun in moeilijke tijden. Mijn vriend Jan heeft me geholpen toen ik mijn fiets kwijt was. Vrienden vieren ook leuke momenten met je. Onderzoek toont dat mensen met vrienden langer leven.'*\n\n**Samenvatting**: *'Vrienden zijn belangrijk: ze geven steun, vieren leuke momenten, en mensen met vrienden leven zelfs langer.'*\n\n*(Zit niet in: 'mijn vriend Jan en de fiets' — dat is een bijzaak/anekdote)*.\n\n**Toets-tip**:\nGoede samenvatting kan **opnieuw uitgelegd** worden door iemand die de tekst niet kent. Test: leg de samenvatting voor → snapt iemand het?",
    checks: [
      {
        q: "Wat hoort **NIET** in een goede samenvatting?",
        options: ["Eigen mening","Hoofdgedachte","Hoofdzaken","Eigen woorden"],
        answer: 0,
        wrongHints: [null, "Hoort wel — kern van de samenvatting.", "Hoort wel — belangrijke punten.", "Hoort wel — eigen woorden voorkomen kopiëren."],
        uitlegPad: {
          stappen: [
            { titel: "Samenvatting = wat de tekst zegt", tekst: "Een goede samenvatting bevat:\n✓ **Hoofdgedachte** (kern in 1 zin)\n✓ **Hoofdzaken** (belangrijke punten)\n✓ **Eigen woorden** (niet kopiëren)\n\nWat NIET:\n✗ **Eigen mening** (wat JIJ ervan vindt — hoort er niet in)\n✗ **Bijzaken** (anekdotes)\n✗ **Letterlijke kopie** uit tekst" },
            { titel: "Waarom geen mening?", tekst: "Een samenvatting is **objectief**: het vertelt wat de schrijver zegt. Niet wat jij ervan vindt. Mening hoort thuis in een **recensie** of **mening-stuk**, niet in samenvatting." },
            { titel: "Voorbeeld: WEL vs NIET", tekst: "**Tekst**: 'Klimaatverandering is een probleem. Zeespiegel stijgt 3 mm per jaar.'\n\n**Goede samenvatting**: 'Volgens de tekst is klimaatverandering een probleem: de zeespiegel stijgt jaarlijks 3 mm.'\n\n**Foute samenvatting**: 'Klimaatverandering is een groot probleem en wij moeten dringend iets doen!' (= je eigen mening, niet wat tekst zegt)." },
          ],
          woorden: [
            { woord: "samenvatting", uitleg: "Korte versie van tekst met hoofdgedachte + hoofdzaken." },
            { woord: "objectief", uitleg: "Zonder eigen mening — alleen wat de feiten zeggen." },
            { woord: "recensie", uitleg: "Mening-stuk over een tekst/film/boek (= apart van samenvatting)." },
          ],
          theorie: "Toets-checklist goede samenvatting:\n✓ Korter dan origineel (~25-30%)\n✓ Hoofdgedachte expliciet\n✓ Hoofdzaken (2-3)\n✓ Eigen woorden\n✗ Geen mening\n✗ Geen bijzaken\n✗ Geen letterlijke kopie",
          voorbeelden: [
            { type: "stap", tekst: "WEL: 'Volgens de schrijver is X gezond omdat Y.' (objectief, citeert tekst)" },
            { type: "stap", tekst: "NIET: 'X is super gezond, iedereen zou meer X moeten doen!' (eigen mening, niet uit tekst)" },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag jezelf: 'staat dit IN de tekst, of is het MIJN mening?' Alleen wat in tekst staat → samenvatting." }],
          niveaus: {
            basis: "Eigen mening hoort NIET in samenvatting.",
            simpeler: "Samenvatting = wat tekst zegt. Mening = wat JIJ vindt. Niet mixen.",
            nogSimpeler: "Eigen mening = A (mag niet).",
          },
        },
      },
      {
        q: "Hoe lang is een **goede** samenvatting meestal?",
        options: ["Korter dan origineel","Langer dan origineel","Even lang","Heel lang"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — dat zou een uitbreiding zijn.", "Geen verkorting — geen samenvatting.", "Niet samenvatten."],
        uitlegPad: {
          stappen: [
            { titel: "Samen-vatten = korter maken", tekst: "Het woord **'samenvatten'** zegt het al: vat de tekst SAMEN in een korter geheel. Een samenvatting die even lang of langer is, is geen samenvatting." },
            { titel: "Hoe kort precies?", tekst: "Vuistregel: **~25-30% van origineel**. Een tekst van 400 woorden → samenvatting van 100-120 woorden. Een tekst van 1000 woorden → 250-300 woorden samenvatting.\n\nKan korter (10-20% voor heel beknopt) maar zelden langer dan 30%." },
            { titel: "Waarom dit percentage?", tekst: "Bij 25-30% behoud je:\n✓ Hoofdgedachte (essentieel)\n✓ Hoofdzaken (meestal 3-5 punten)\n✓ Eigen woorden\n\nMaar je verwijdert:\n✗ Bijzaken / anekdotes\n✗ Voorbeelden (tenzij essentieel)\n✗ Herhalingen" },
          ],
          woorden: [
            { woord: "samenvatten", uitleg: "Kort maken zonder hoofdboodschap te verliezen." },
            { woord: "uitbreiden", uitleg: "Langer maken — tegenovergestelde van samenvatten." },
          ],
          theorie: "Toets-vuistregel samenvatting:\n• ~25-30% van originele lengte\n• Hoofdgedachte expliciet\n• Hoofdzaken aanwezig\n• Bijzaken weg\n• Eigen woorden (geen kopie)",
          voorbeelden: [
            { type: "stap", tekst: "Tekst 400 woorden → samenvatting 100-120 woorden." },
            { type: "stap", tekst: "Krantenartikel 600 woorden → samenvatting 150-200 woorden." },
            { type: "stap", tekst: "Boekje 1000 woorden → samenvatting 250-300 woorden." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Mik op een KWART tot DERDE van origineel. Kortere kan, langere zelden." }],
          niveaus: {
            basis: "Korter dan origineel (~25-30%).",
            simpeler: "Een samenvatting is een KORTERE versie van de tekst. Niet even lang, niet langer.",
            nogSimpeler: "Korter",
          },
        },
      },
      {
        q: "Tekst: 'Mensen drinken water voor gezondheid. Water spoelt afvalstoffen weg. Water zorgt voor hydratatie. Mijn opa drinkt 2 liter per dag.'\n\n**Wat staat NIET in een goede samenvatting**?",
        options: ["Mijn opa's 2 liter per dag","Mensen drinken water","Water spoelt afval","Hydratatie"],
        answer: 0,
        wrongHints: [null, "Dit IS de hoofdgedachte — hoort wel.", "Belangrijke reden waarom water nuttig is — hoort wel.", "Belangrijke functie van water — hoort wel."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de hoofdgedachte?", tekst: "De tekst gaat over **water drinken en gezondheid**. De 3 belangrijke punten:\n• Mensen drinken water voor gezondheid\n• Water spoelt afvalstoffen weg\n• Water zorgt voor hydratatie\nDeze 3 horen samen → dit is de **hoofdgedachte**." },
            { titel: "Spot de anekdote", tekst: "De zin **'Mijn opa drinkt 2 liter per dag'** is een **anekdote**:\n• **'Mijn opa'** = een persoonlijk voorbeeld over één bepaald persoon → signaal voor BIJzaak\n• **'2 liter per dag'** = specifiek getal over één persoon → niet algemeen geldig\n\nDeze zin gaat NIET over water-in-het-algemeen, maar over één specifieke opa. → bijzaak → schrappen uit samenvatting." },
            { titel: "Voorbeeld-truc + getal-truc", tekst: "Twee betrouwbare signalen voor bijzaak:\n1. **Persoonlijk voorbeeld of naam** ('mijn opa', 'mijn buurman', 'meester Jan'): de schrijver geeft een persoonlijk voorbeeld. Voorbeelden = bijzaak.\n2. **Specifiek getal** ('2 liter', '5 jaar oud', '3 keer per week'): vaak een detail over één geval, niet algemene regel.\nCombo persoonlijk voorbeeld + specifiek getal = bijna altijd **anekdote → bijzaak**." },
          ],
          woorden: [
            { woord: "anekdote", uitleg: "Klein persoonlijk verhaaltje als illustratie, geen algemene regel." },
            { woord: "samenvatting", uitleg: "Korte versie van een tekst met alleen de hoofdpunten." },
          ],
          theorie: "Schrap-regels voor samenvatting:\n• Eigennamen (mijn opa, juf Linda, mijn neef) → meestal weg\n• Specifieke getallen (2 liter, 7 jaar oud) → vaak weg, behalve als ze de hoofdgedachte zijn\n• Persoonlijke voorbeelden → weg, behoud algemene regel\n• Herhalingen → 1× houden\n• Voorbeelden ('zoals X, Y, Z') → houden of weg afhankelijk van belang",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over slaap: 'Mensen slapen 7-9 uur. Mijn broertje slaapt 12 uur.' → broertje = anekdote = weg." },
            { type: "stap", tekst: "Tekst over sport: 'Sporten is gezond. Mijn meester loopt elke dag.' → meester = anekdote = weg." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Test: vervang 'mijn opa' door 'Pieter' of 'mijn buurman'. Verandert er iets aan de boodschap? Nee → was bijzaak." }],
          niveaus: {
            basis: "Opa-zin = anekdote = niet in samenvatting.",
            simpeler: "'Mijn opa' is een persoonlijk voorbeeld → bijzaak → niet meenemen in samenvatting.",
            nogSimpeler: "Opa-zin weg",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Tekst: 'Een moestuin is leuk en leerzaam. Je ziet hoe een zaadje een plant wordt. Je leert wat een plant nodig heeft, zoals water en zon. Vorige week plukte ik drie tomaten.'\n\nWelke **samenvatting** is het best?",
        options: [
          "Een moestuin is leuk en leerzaam: je ziet planten groeien en leert wat ze nodig hebben.",
          "Een moestuin is leuk, want de schrijver plukte vorige week drie tomaten.",
          "Een moestuin is leuk en leerzaam, dus iedereen moet er een nemen.",
          "Planten hebben water en zon nodig om uit een zaadje te groeien.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Is het plukken van tomaten een hoofdzaak of een verhaaltje?",
          "Staat 'iedereen moet er een nemen' in de tekst?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat moet erin?",
              tekst: "Een goede samenvatting heeft de **hoofdgedachte** (leuk en leerzaam) + de **hoofdzaken** (planten zien groeien, leren wat ze nodig hebben).",
            },
            {
              titel: "Wat moet eruit?",
              tekst: "• De **tomaten** = anekdote → bijzaak.\n• **Eigen mening** ('iedereen moet er een nemen') hoort er niet in.",
            },
            {
              titel: "Check de opties",
              tekst: "• A: hoofdgedachte + hoofdzaken ✓\n• B: gebruikt een bijzaak.\n• C: voegt een mening toe.\n• D: mist de hoofdgedachte.",
            },
          ],
          woorden: [
            {
              woord: "samenvatting",
              uitleg: "Korte versie met hoofdgedachte en hoofdzaken.",
            },
            {
              woord: "anekdote",
              uitleg: "Kort persoonlijk verhaaltje.",
            },
          ],
          theorie: "Goede samenvatting bevat: hoofdgedachte, hoofdzaken, eigen woorden, korter dan origineel. NIET: bijzaken, eigen mening, letterlijke kopie.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Vrienden-tekst: 'mijn vriend Jan en de fiets' zit niet in de samenvatting (anekdote).",
            },
            {
              type: "stap",
              tekst: "'Iedereen moet …' is een mening als de tekst dat niet zegt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zoek de optie met hoofdgedachte + hoofdzaken, zonder anekdote of mening.",
            },
          ],
          niveaus: {
            basis: "A: hoofdgedachte + hoofdzaken, zonder bijzaak.",
            simpeler: "De tomaten zijn een verhaaltje. De mening staat niet in de tekst. A heeft de kern.",
            nogSimpeler: "A",
          },
        },
      },
      {
        q: "Wat doe je **als eerste** als je een tekst gaat samenvatten?",
        options: [
          "De hele tekst lezen",
          "Bijzaken schrappen",
          "Je samenvatting controleren",
          "Je samenvatting opschrijven",
        ],
        answer: 0,
        wrongHints: [null, "Kun je schrappen voordat je weet wat er staat?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "De 5 stappen",
              tekst: "1. **Lees** de hele tekst.\n2. **Onderstreep** de hoofdpunten.\n3. **Schrap** bijzaken.\n4. **Schrijf** in 3-5 zinnen wat de tekst zegt.\n5. **Controleer** of het klopt.",
            },
            {
              titel: "Waarom eerst lezen?",
              tekst: "Je kunt pas weten wat belangrijk is als je de **hele** tekst kent.",
            },
            {
              titel: "De andere opties",
              tekst: "Schrappen, opschrijven en controleren komen pas daarna.",
            },
          ],
          woorden: [
            {
              woord: "onderstrepen",
              uitleg: "Een streep onder belangrijke woorden zetten.",
            },
            {
              woord: "controleren",
              uitleg: "Nakijken of iets klopt.",
            },
          ],
          theorie: "Stappen om samen te vatten: lees → onderstreep → schrap → schrijf → controleer.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Eerst de hele tekst over bijen lezen, dan pas kiezen wat belangrijk is.",
            },
            {
              type: "stap",
              tekst: "Controleren is de laatste stap.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eerst alles lezen, dan pas kiezen.",
            },
          ],
          niveaus: {
            basis: "Eerst de hele tekst lezen.",
            simpeler: "Zonder lezen weet je niet wat belangrijk is.",
            nogSimpeler: "Lezen",
          },
        },
      },
      {
        q: "Je hebt de tekst gelezen en de hoofdpunten onderstreept. Wat doe je **daarna**?",
        options: [
          "Bijzaken schrappen",
          "Alle zinnen overschrijven",
          "Je eigen mening toevoegen",
          "Een nieuwe titel bedenken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Hoort letterlijk overschrijven bij samenvatten?",
          "Hoort jouw mening in een samenvatting?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Waar ben je?",
              tekst: "Stap 1 (lezen) en stap 2 (onderstrepen) zijn klaar.",
            },
            {
              titel: "Stap 3",
              tekst: "Nu **schrap** je de bijzaken: verhaaltjes, kleine details en zijwegen. Dan blijft de kern over.",
            },
            {
              titel: "Waarom NIET de andere opties?",
              tekst: "• **Overschrijven** — een samenvatting is in eigen woorden.\n• **Eigen mening** — hoort er niet in.\n• **Nieuwe titel** — geen stap van samenvatten.",
            },
          ],
          woorden: [
            {
              woord: "schrappen",
              uitleg: "Weglaten, doorstrepen.",
            },
            {
              woord: "bijzaak",
              uitleg: "Detail dat weg kan.",
            },
          ],
          theorie: "Stappen: 1 lees, 2 onderstreep, 3 schrap bijzaken, 4 schrijf in 3-5 zinnen, 5 controleer.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tekst over fietsen: 'Mijn oom Henk fietst 20 km' schrap je.",
            },
            {
              type: "stap",
              tekst: "Daarna schrijf je de kern in eigen woorden.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Na onderstrepen: weg met de bijzaken.",
            },
          ],
          niveaus: {
            basis: "Bijzaken schrappen.",
            simpeler: "Na lezen en onderstrepen haal je de details weg.",
            nogSimpeler: "Schrappen",
          },
        },
      },
      {
        q: "Tekst: 'Een museum laat oude en bijzondere dingen zien. Zo leer je veel over vroeger.'\n\nWelke zin hoort **NIET** in een samenvatting van deze tekst?",
        options: [
          "Ik vind musea saai.",
          "Een museum laat bijzondere dingen zien.",
          "In een museum leer je over vroeger.",
          "Een museum toont oude dingen.",
        ],
        answer: 0,
        wrongHints: [null, "Zegt de tekst dit, of vindt iemand dit?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Samenvatting = wat de tekst zegt",
              tekst: "De tekst zegt: een museum laat oude en bijzondere dingen zien, en je leert over vroeger.",
            },
            {
              titel: "Spot de mening",
              tekst: "*'Ik vind musea saai'* is een **eigen mening**. Die staat niet in de tekst → hoort niet in de samenvatting.",
            },
            {
              titel: "De andere opties",
              tekst: "Die drie zinnen zeggen in eigen woorden wat er in de tekst staat. Die mogen erin.",
            },
          ],
          woorden: [
            {
              woord: "mening",
              uitleg: "Wat iemand ergens van vindt.",
            },
            {
              woord: "samenvatting",
              uitleg: "Korte versie van wat de tekst zegt.",
            },
          ],
          theorie: "Goede samenvatting bevat NIET: eigen mening (alleen wat tekst zegt).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Ik vind dit stom' = mening = eruit.",
            },
            {
              type: "stap",
              tekst: "'Volgens de tekst leer je in een museum over vroeger' = mag erin.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "'Ik vind …' = mening = niet in de samenvatting.",
            },
          ],
          niveaus: {
            basis: "'Ik vind musea saai' hoort er niet in.",
            simpeler: "Dat is een mening. De tekst zegt dat niet.",
            nogSimpeler: "Mening eruit",
          },
        },
      },
      {
        q: "Anna schrijft voor haar samenvatting alle zinnen van de tekst **precies** over. Wat gaat er mis?",
        options: [
          "Ze gebruikt geen eigen woorden",
          "Ze laat de hoofdgedachte weg",
          "Ze voegt haar eigen mening toe",
          "Haar samenvatting is te kort",
        ],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Als ze alles overschrijft, schrijft ze haar mening dan op?",
          "Wordt iets korter als je alles overschrijft?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat doet Anna?",
              tekst: "Ze schrijft ALLE zinnen precies over. Dat is een **letterlijke kopie**.",
            },
            {
              titel: "Wat is het probleem?",
              tekst: "Een samenvatting is **in eigen woorden** en **korter**. Anna gebruikt geen eigen woorden, en haar tekst is net zo lang als het origineel.",
            },
            {
              titel: "Waarom NIET de andere opties?",
              tekst: "• Hoofdgedachte weg? Nee, alles staat er nog.\n• Eigen mening? Nee, ze kopieert alleen.\n• Te kort? Nee, juist te lang.",
            },
          ],
          woorden: [
            {
              woord: "letterlijk",
              uitleg: "Precies hetzelfde, woord voor woord.",
            },
            {
              woord: "eigen woorden",
              uitleg: "Zelf opnieuw zeggen wat er staat.",
            },
          ],
          theorie: "Goede samenvatting: in eigen woorden (niet kopiëren) en korter dan origineel (meestal ~25-30%).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Origineel: 'Plastic is een groot probleem in de oceaan.' → eigen woorden: 'Plastic vervuilt de zee.'",
            },
            {
              type: "stap",
              tekst: "Alles overschrijven = geen samenvatting.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Overschrijven ≠ samenvatten.",
            },
          ],
          niveaus: {
            basis: "Ze gebruikt geen eigen woorden.",
            simpeler: "Alles precies overschrijven is kopiëren, geen samenvatten.",
            nogSimpeler: "Geen eigen woorden",
          },
        },
      },
    ],
  },

  {
    title: "Eindopdracht — samenvatten mix",
    explanation: "Mix-toets: hoofdgedachte vinden, hoofd/bij scheiden, samenvatten.",
    checks: [
      {
        q: "Tekst: 'Apen zijn slim. Ze gebruiken stokken om termieten uit holen te halen. In Afrika is dit gezien bij chimpansees.'\n\n**Hoofdgedachte**?",
        options: ["Apen zijn slim — ze gebruiken gereedschap","Termieten leven in holen","Chimpansees komen uit Afrika","Stokken zijn handig"],
        answer: 0,
        wrongHints: [null, "Termieten zijn detail in voorbeeld, niet hoofd.", "Detail over chimpansees specifiek, niet hoofd.", "Stokken zijn middel in het voorbeeld, niet de hoofdgedachte zelf."],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de rode draad", tekst: "3 zinnen:\n1. *Apen zijn slim*\n2. *Ze gebruiken stokken om termieten te halen*\n3. *In Afrika gezien bij chimpansees*\n→ Wat is hier het thema? **Apen + slim = gereedschap gebruiken**." },
            { titel: "Zin 1 = hoofdgedachte expliciet", tekst: "Vaak doet de schrijver het werk al: **zin 1 IS de hoofdgedachte**. *'Apen zijn slim'* — alle volgende zinnen zijn BEWIJS daarvoor." },
            { titel: "Andere opties zijn details", tekst: "• 'Termieten leven in holen' — feit binnen zin 2, geen rode draad.\n• 'Chimpansees komen uit Afrika' — feit binnen zin 3.\n• 'Stokken zijn handig' — middel in het bewijs.\nGeen van deze dekt 'apen + slim' (de rode draad)." },
          ],
          woorden: [
            { woord: "topic-sentence", uitleg: "Eerste zin van alinea — vaak de hoofdgedachte." },
            { woord: "bewijs / voorbeeld", uitleg: "Concrete details die de hoofdgedachte ondersteunen." },
          ],
          theorie: "Toets-truc lees-strategie: lees ZIN 1 eerst. Vaak is dat al de hoofdgedachte. Daarna check je: ondersteunen de andere zinnen die uitspraak? Zo ja → bevestigd.",
          voorbeelden: [
            { type: "stap", tekst: "*'Honden zijn loyaal. Ze beschermen je. Ze spelen graag.'* → zin 1 = hoofdgedachte. Andere zinnen = bewijs." },
            { type: "stap", tekst: "*'Plastic is een probleem. 8 miljoen ton per jaar in zee. Dieren stikken erin.'* → zin 1 = hoofdgedachte. Cijfers = bewijs." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eerste zin vaak = topic-sentence = hoofdgedachte. Andere zinnen = bewijs/voorbeeld." }],
          niveaus: {
            basis: "Apen zijn slim — ze gebruiken gereedschap.",
            simpeler: "Zin 1 zegt 'apen zijn slim'. Zin 2-3 bewijzen dat (stokken-truc). Dat is de hoofdgedachte.",
            nogSimpeler: "Apen slim",
          },
        },
      },
      {
        q: "Welke zin is een **bijzaak** in een tekst over 'gezond eten'?",
        options: ["Mijn moeder kookt elke maandag pasta","Groenten geven vitaminen","Fruit is gezond","Suiker is ongezond"],
        answer: 0,
        uitlegPad: {
          stappen: [
            { titel: "Algemeen vs persoonlijk", tekst: "In een tekst over **algemene** onderwerpen (gezond eten) zijn:\n• **Hoofdzaken** = algemene feiten ('groenten geven vitaminen', 'fruit is gezond')\n• **Bijzaken** = persoonlijke anekdotes ('mijn moeder', 'gisteren')" },
            { titel: "Pas toe op opties", tekst: "• **'Mijn moeder kookt elke maandag pasta'** → persoonlijke anekdote → **bijzaak** ✓\n• **'Groenten geven vitaminen'** → algemeen feit → hoofdzaak\n• **'Fruit is gezond'** → algemeen feit → hoofdzaak\n• **'Suiker is ongezond'** → algemeen feit → hoofdzaak" },
            { titel: "Signaalwoorden voor bijzaken", tekst: "Bijzaken hebben vaak:\n• **Eigennamen** ('moeder', 'oom Henk', 'Anna')\n• **Specifieke tijden** ('elke maandag', 'gisteren', 'twee weken geleden')\n• **Concrete details** die slechts 1 persoon betreffen\n\nHoofdzaken zijn breed + algemeen + dekken het thema." },
          ],
          woorden: [
            { woord: "anekdote", uitleg: "Persoonlijk verhaaltje binnen tekst — meestal bijzaak." },
            { woord: "algemeen feit", uitleg: "Geldt voor iedereen — meestal hoofdzaak." },
          ],
          theorie: "Toets-truc bijzaak-herkenning in algemene teksten:\n• Eigennaam + actie = bijna altijd anekdote = bijzaak\n• 'Mijn / mijn oom / gisteren' = signaalwoorden bijzaak\n• Algemeen feit zonder personen = hoofdzaak",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over honden: 'Honden zijn loyaal' = hoofd. 'Mijn buurman heeft een Labrador' = bijzaak." },
            { type: "stap", tekst: "Tekst over fietsen: 'Fietsen is gezond' = hoofd. 'Oom Henk fietst 20 km per dag' = bijzaak." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eigennaam + specifieke daad = anekdote = bijzaak. Algemeen feit zonder personen = hoofdzaak." }],
          niveaus: {
            basis: "'Mijn moeder kookt pasta' = anekdote = bijzaak.",
            simpeler: "Algemene feiten = hoofd. Persoonlijke anekdotes met eigennaam = bijzaak.",
            nogSimpeler: "Moeder + pasta = anekdote",
          },
        },
        wrongHints: [null,"Dit gaat over gezond eten in het algemeen — een hoofdzaak.","Een algemeen feit over het onderwerp — dat is een hoofdzaak.","Algemene info over gezond eten — hoofdzaak. Welke zin gaat over één persoon?"],
      },
      {
        q: "Wat is **NIET** een goede samenvattingsstrategie?",
        options: ["Letterlijk kopiëren van zinnen","Eigen woorden","Hoofdpunten kiezen","Kort houden"],
        answer: 0,
        wrongHints: [null, "Wel goed — eigen woorden = begrip.", "Wel goed — hoofdpunten = essentie.", "Wel goed — samenvatting moet korter zijn dan het origineel."],
        uitlegPad: {
          stappen: [
            { titel: "Waarom NIET letterlijk kopiëren?", tekst: "Een **samenvatting** moet laten zien dat je de tekst zelf hebt **begrepen**. Als je zinnen letterlijk overschrijft, laat je alleen zien dat je kunt **kopiëren** — niet dat je weet wat er staat." },
            { titel: "Wat je WEL doet bij goede samenvatting", tekst: "1. **Eigen woorden** — herschrijf in je eigen taal\n2. **Hoofdpunten kiezen** — alleen de belangrijkste zinnen\n3. **Kort houden** — ~25-30% van origineel\n4. **Logische volgorde** — eerst hoofdgedachte, dan steunende info" },
            { titel: "Toets-instinker bij deze vraag", tekst: "De vraag vraagt: 'Wat is **NIET** goed?' Let op het woordje **NIET** — je moet de FOUTE strategie aanvinken. De 3 goede strategieën zijn afleiders. Bij NIET-vragen altijd extra goed lezen wat er staat:\n• 'NIET in samenvatting' → kies wat er NIET in hoort\n• 'WEL in samenvatting' → kies wat er WEL in hoort\nVerwisselen = direct fout, zelfs als je inhoud snapt." },
          ],
          woorden: [
            { woord: "strategie", uitleg: "Aanpak / manier om iets te doen." },
            { woord: "letterlijk kopiëren", uitleg: "Zinnen exact overschrijven uit de tekst, zonder veranderen." },
          ],
          theorie: "Goede samenvattings-strategieën (de 4 stappen):\n1. Lees de tekst 2× — overzicht eerst, details daarna.\n2. Markeer (of noteer) de hoofdpunten — meestal titel + eerste zin elke alinea.\n3. Schrijf in eigen woorden — herwoord, parafraseer.\n4. Lees terug — past het bij hoofdgedachte? Te lang? Korter maken.\n\nFout: kopiëren, hele tekst overschrijven, eigen mening toevoegen, details meenemen.",
          voorbeelden: [
            { type: "stap", tekst: "Origineel: 'Plastic is een groot probleem in de oceaan.' → Goed: 'Plastic vervuilt zeeën.' Fout: 'Plastic is een groot probleem in de oceaan.' (= kopiëren)." },
            { type: "stap", tekst: "Origineel: 'Hond is loyaal, beschermt eigenaar.' → Goed: 'Honden zijn trouw en passen op.' Fout: kopiëren of toevoegen 'ik vind honden leuk' (= mening)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Test: lees je samenvatting voor aan iemand die de originele tekst NIET kent. Snapt diegene de hoofdpunten? Ja = goed. Nee = te kort of te kopiërig." }],
          niveaus: {
            basis: "Letterlijk kopiëren ≠ samenvatten",
            simpeler: "Samenvatting = in EIGEN woorden de hoofdpunten. Kopiëren is geen samenvatten.",
            nogSimpeler: "Kopiëren fout",
          },
        },
      },
      {
        q: "Tekst gaat over voordelen van fietsen. Welke is een **slechte hoofdgedachte**?",
        options: ["Fietsen is gevaarlijk","Fietsen is gezond","Fietsen is milieuvriendelijk","Fietsen is goedkoop"],
        answer: 0,
        wrongHints: [null, "Past wel — gezond = voordeel.", "Past wel — milieu = voordeel.", "Past wel — goedkoop = voordeel."],
        uitlegPad: {
          stappen: [
            { titel: "Lees het tekst-onderwerp goed", tekst: "De tekst gaat over **VOORdelen** van fietsen. Het sleutelwoord is **'voordelen'** = positieve kanten, goede dingen. Een hoofdgedachte moet bij DIT onderwerp passen." },
            { titel: "Match: past de zin bij 'voordelen'?", tekst: "• A: 'Fietsen is **gevaarlijk**' → dat is een NADEEL, NIET een voordeel. → **past NIET** → slechte hoofdgedachte\n• B: 'Fietsen is gezond' → voordeel ✓\n• C: 'Fietsen is milieuvriendelijk' → voordeel ✓\n• D: 'Fietsen is goedkoop' → voordeel ✓\n\nAlleen A wijkt af van het onderwerp." },
            { titel: "Toets-truc: positief vs negatief onderwerp", tekst: "Bij toetsvragen 'kies de slechte hoofdgedachte':\n• Zoek altijd het sleutelwoord in het onderwerp (voordelen / nadelen / gevolgen / oorzaken / oplossingen).\n• Een optie die in TEGEN-richting wijst = slechte hoofdgedachte.\nVoorbeeld:\n• Tekst over 'gevaren van roken' → 'roken is leuk' = slechte hoofdgedachte (gevaar = negatief, leuk = positief)" },
          ],
          woorden: [
            { woord: "voordeel", uitleg: "Iets goeds, positieve kant." },
            { woord: "nadeel", uitleg: "Iets slechts, negatieve kant." },
            { woord: "hoofdgedachte", uitleg: "De belangrijkste boodschap waar de hele tekst om draait." },
          ],
          theorie: "Een goede hoofdgedachte moet:\n1. Bij het ONDERWERP van de tekst passen (voordelen ≠ nadelen)\n2. ALGEMEEN genoeg zijn (niet over 1 detail)\n3. NIET te SMAL zijn ('mijn fiets is rood' = te specifiek)\n4. NIET te BREED zijn ('alles is leuk' = nietszeggend)\n\nGevaar #1: tekst zegt 'voordeel' → optie zegt 'nadeel' → optie sluit niet aan.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over 'nadelen van plastic' → 'plastic is handig' = slechte hoofdgedachte (handig = voordeel, tekst gaat over nadelen)." },
            { type: "stap", tekst: "Tekst over 'oplossingen klimaat' → 'klimaat is een probleem' = slechte hoofdgedachte (tekst gaat over oplossingen, niet problemen)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eerst sleutelwoord onderwerp markeren ('voordelen/nadelen/oorzaak/gevolg'). Dan check welke optie de TEGEN-richting heeft. Die is fout." }],
          niveaus: {
            basis: "'Gevaarlijk' = nadeel, tekst gaat over voordelen → slechte match.",
            simpeler: "Tekst zegt VOORdelen = goede dingen. 'Gevaarlijk' is een slecht ding, dus past niet.",
            nogSimpeler: "Gevaarlijk = nadeel = A (slechte hoofdgedachte).",
          },
        },
      },
      {
        q: "Hoofdgedachte staat vaak in:",
        options: ["Titel of eerste zin","Voetnoten","Plaatjes","Bibliografie"],
        answer: 0,
        wrongHints: [null, "Voetnoten = bronvermelding, niet hoofd.", "Plaatjes ondersteunen wel, maar zijn niet de tekst zelf.", "Bibliografie = bronnenlijst aan het einde, geen inhoud."],
        uitlegPad: {
          stappen: [
            { titel: "Waar plaatst een schrijver de hoofdgedachte?", tekst: "Schrijvers willen dat de lezer **snel begrijpt** waarover de tekst gaat. Daarom zetten ze de hoofdgedachte op een **opvallende plek**:\n• **Titel** — meteen zichtbaar bovenaan\n• **Eerste zin** (van eerste alinea) — opening\n• Soms herhaald in **laatste zin/alinea** als conclusie" },
            { titel: "Waarom NIET in voetnoten/plaatjes/bibliografie?", tekst: "• **Voetnoten** = extra info met bron-vermelding, onderaan pagina. Geen hoofdgedachte.\n• **Plaatjes** = ondersteuning bij tekst, geen tekst zelf. Een grafiek kan illustreren, niet uitleggen wat de tekst zegt.\n• **Bibliografie** = lijst van geraadpleegde boeken/sites. Geen inhoud, alleen bronnen." },
            { titel: "Toets-truc: 3-plekken-check", tekst: "Als je snel de hoofdgedachte zoekt, check in deze volgorde:\n1. **Titel** — bevat vaak het hoofd-onderwerp\n2. **Eerste zin** — vaak meteen de stelling\n3. **Laatste zin** — vaak de conclusie\nBij Toets-tijdsdruk kun je vaak 80% van de hoofdgedachte vinden via deze 3 plekken zonder de hele tekst te lezen." },
          ],
          woorden: [
            { woord: "voetnoot", uitleg: "Aanvullende notitie onderaan pagina, vaak met bron-verwijzing." },
            { woord: "bibliografie", uitleg: "Lijst van boeken/sites die gebruikt zijn als bron." },
            { woord: "alinea", uitleg: "Stukje tekst met meerdere zinnen over één onderwerp." },
          ],
          theorie: "Structuur van een typische tekst:\n• **Titel** = hoofdonderwerp (1 regel)\n• **Eerste alinea** = inleiding + hoofdgedachte\n• **Middenste alinea's** = uitwerking, voorbeelden, bewijzen\n• **Laatste alinea** = conclusie + herhaling hoofdgedachte\n→ Hoofdgedachte = **op de RANDEN** (begin + eind), niet in het midden.",
          voorbeelden: [
            { type: "stap", tekst: "Titel 'Voordelen van fietsen' → hoofdgedachte = 'fietsen heeft voordelen'." },
            { type: "stap", tekst: "Eerste zin 'Plastic vervuilt onze zeeën.' → hoofdgedachte = plastic-zee-vervuiling." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Begin + eind van tekst = waar hoofdgedachte vaak staat. Midden = uitwerking en details." }],
          niveaus: {
            basis: "Titel of eerste zin",
            simpeler: "Schrijvers zetten de hoofdgedachte vooraan, vaak in titel of eerste zin.",
            nogSimpeler: "Titel/eerste zin",
          },
        },
      },
      {
        q: "Tekst: 'Honden helpen blinden. Ze leiden de baas veilig over straat. Hun training duurt 2 jaar.'\n\n**Bijzaak**?",
        options: ["Hun training duurt 2 jaar","Honden helpen blinden","Veilig over straat","Geen, alles hoofd"],
        answer: 0,
        wrongHints: [null, "Hoofdzaak — dit IS de hoofdgedachte.", "Hoofdzaak — direct gevolg en uitleg van hulp.", "Onjuist — er IS een bijzaak."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de hoofdgedachte?", tekst: "De tekst gaat over **hulphonden voor blinden**. Zin 1 ('Honden helpen blinden') = hoofdgedachte. Zin 2 ('leiden veilig over straat') = directe uitleg HOE ze helpen → ondersteunt de hoofdgedachte → hoofdzaak." },
            { titel: "Wat maakt zin 3 een bijzaak?", tekst: "**'Hun training duurt 2 jaar'** geeft een **specifiek getal** over één detail (trainingsduur). Dit:\n• Helpt NIET om te begrijpen WAT honden doen voor blinden\n• Is een leuk weetje, maar geen kern-info\n• Kun je weglaten zonder dat de boodschap verandert\n→ bijzaak" },
            { titel: "Schrap-test toepassen", tekst: "**Met zin 3**: 'Honden helpen blinden. Ze leiden de baas veilig over straat. Hun training duurt 2 jaar.'\n**Zonder zin 3**: 'Honden helpen blinden. Ze leiden de baas veilig over straat.'\n→ De hoofdgedachte (honden = hulpdier voor blinden) blijft duidelijk. Trainingsduur was extra info, niet kern.\n→ Bevestigt: zin 3 = **bijzaak**.\n\nLet op: **specifieke getallen** ('2 jaar', '3 uur', '5 keer') zijn vaak bijzaken — behalve als het getal ZELF de hoofdgedachte is." },
          ],
          woorden: [
            { woord: "specifiek detail", uitleg: "Heel precieze info over één deel — vaak een bijzaak." },
            { woord: "kern-info", uitleg: "Hoofdpunt zonder welke je de boodschap niet begrijpt." },
          ],
          theorie: "Signalen voor bijzaak (herhaling):\n• Eigennamen ('Mijn oom', 'meester Jan')\n• Specifieke getallen ('2 jaar', '20 km', '7 uur')\n• Voorbeeld-zinnen ('Bijvoorbeeld...', 'Zoals...')\n• Anekdote-zinnen ('Eens kwam ik...', 'Mijn buurman zei...')\n• Heel concrete plek/tijd ('In Alaska in 2019')\n\nVuistregel: hoe specifieker hoe vaker bijzaak.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over honden: 'Honden zijn loyaal. Hun staart wiebelt 60× per minuut.' → staart-getal = bijzaak." },
            { type: "stap", tekst: "Tekst over fietsen: 'Fietsen is gezond. De Tour duurt 21 dagen.' → 21 dagen = bijzaak." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Specifiek getal in zin? Hoogstwaarschijnlijk bijzaak (tenzij getal ZELF kern is, bv. '70% van de aarde is bedekt met water' in een tekst over de aarde; chemie-tekst)." }],
          niveaus: {
            basis: "Training 2 jaar = specifiek detail = bijzaak.",
            simpeler: "Schrap zin 3 → boodschap (honden helpen blinden) blijft hetzelfde → zin 3 = bijzaak.",
            nogSimpeler: "2 jaar = bijzaak",
          },
        },
      },
      {
        q: "Welk woord helpt vaak om **hoofdgedachte** te vinden in laatste alinea van betoogtekst?",
        options: ["'Dus' / 'Daarom' / 'Kortom'","'Maar' / 'Hoewel' / 'Echter'","'Bijvoorbeeld' / 'Zoals'","'Een keer' / 'Toen'"],
        answer: 0,
        wrongHints: [null, "Tegenstelling-woorden — wel belangrijk, maar niet voor hoofdgedachte aan einde.", "Voorbeeld-signaal — leidt naar uitwerking, niet conclusie.", "Vertel-woord, geen signaal."],
        uitlegPad: {
          stappen: [
            { titel: "Signaalwoorden voor conclusie", tekst: "Aan het einde van een betogende tekst staat vaak een **conclusie** = de hoofdgedachte samengevat. Signaalwoorden die dit aanduiden:\n• **Dus** ('… dus is recyclen belangrijk')\n• **Daarom** ('… daarom moeten we minder vlees eten')\n• **Kortom** ('… kortom, lezen is goed voor je brein')\n• **Concluderend** ('… concluderend: deze methode werkt')\n• **Tot slot** ('… tot slot blijft de boodschap…')\n• **Samengevat** ('… samengevat:…')" },
            { titel: "Toets-truc: 4 signaalwoord-groepen", tekst: "De toets vraagt vaak naar signaalwoorden:\n• **Conclusie**: dus, daarom, kortom, samengevat\n• **Tegenstelling**: maar, echter, hoewel, daarentegen\n• **Voorbeeld**: bijvoorbeeld, namelijk, zoals\n• **Volgorde**: eerst, daarna, vervolgens, ten slotte\n\nElke groep helpt verschillende vraag-types:\n• Hoofdgedachte? → zoek **conclusie**-signalen\n• Argument-vraag? → kijk **tegenstelling** + **voorbeeld**" },
            { titel: "Voorbeeld in tekst", tekst: "*'Roken is slecht voor longen. Het kost geld. Het stinkt. **Daarom** raden artsen aan om niet te beginnen.'*\n\nLaatste zin met 'daarom' = hoofdgedachte van tekst. Drie redenen (longen/geld/stank) leiden naar conclusie 'niet beginnen met roken'." },
          ],
          woorden: [
            { woord: "signaalwoord", uitleg: "Woord dat aangeeft wat de schrijver gaat doen: concluderen, vergelijken, voorbeelden geven, etc." },
            { woord: "conclusie", uitleg: "Slotzin/-alinea die samenvat wat tekst wil zeggen. Vaak hoofdgedachte." },
            { woord: "betoog", uitleg: "Tekst die mening verdedigt + lezer wil overtuigen." },
          ],
          theorie: "**Toets-aanpak hoofdgedachte vinden** (3 plaatsen):\n1. **Titel** — vaak hoofdthema\n2. **Eerste zin** of eerste alinea — vaak introductie van hoofdgedachte\n3. **Laatste alinea** — vaak conclusie met signaalwoorden\n\nKijk waar signaalwoorden 'dus/daarom/kortom' staan = vaak hoofdgedachte daar.",
          voorbeelden: [
            { type: "stap", tekst: "'Kinderen leren beter na ontbijt. Wetenschappers bewezen dit. Daarom: ALTIJD ontbijten voor school.' → hoofdgedachte = laatste zin met 'daarom'." },
            { type: "stap", tekst: "'Plastic vervuilt zeeën. Dieren eten plastic. Kortom: minder plastic kopen.' → 'kortom' wijst op hoofdgedachte." },
          ],
          basiskennis: [{ onderwerp: "Niet 'maar'", uitleg: "Tegenstelling-signaalwoorden (maar, hoewel) wijzen op nuance — niet conclusie. Toets-instinker." }],
          niveaus: { basis: "Dus / daarom / kortom.", simpeler: "Signaalwoorden voor conclusie aan einde tekst: 'dus', 'daarom', 'kortom', 'samengevat'. Daar staat vaak hoofdgedachte.", nogSimpeler: "Dus/daarom" },
        },
      },
      {
        q: "Tekst: 'Veel scholen verbieden mobieltjes in de klas. Studies tonen dat kinderen zich daardoor beter concentreren. **Dus is dit verbod een goede zaak.**' — Wat is de **hoofdgedachte**?",
        options: ["Mobielverbod op school is positief","Mobieltjes zijn duur","Scholen zijn streng","Kinderen vinden het oneerlijk"],
        answer: 0,
        wrongHints: [null, "Niet vermeld — geen prijs-info.", "Wel deels (over scholen) maar te zwak — gaat over EFFECT verbod, niet streng-zijn.", "Niet vermeld — geen kind-meningen genoemd."],
        uitlegPad: {
          stappen: [
            { titel: "Toepassing signaalwoord-truc", tekst: "Net geleerd: 'dus' wijst op conclusie. In deze tekst:\n• Zin 1: scholen verbieden mobiel\n• Zin 2: kinderen concentreren beter (effect)\n• Zin 3: **'Dus** is dit verbod een goede zaak'\n\nLaatste zin = hoofdgedachte = **mobielverbod is positief**." },
            { titel: "Korte samenvatting maken", tekst: "Hoofdgedachte = de **kern in 1 zin**. Voor deze tekst:\n• **Mobielverbod op scholen is een goede zaak** (= optie A)\n\nAlternatieven afvallen:\n• B 'duur' — niet genoemd\n• C 'streng' — focus op effect, niet streng-zijn\n• D 'oneerlijk' — geen tegenstem in tekst\n\nKies altijd antwoord dat zin-3-conclusie BEST samenvat." },
            { titel: "Toets-tip: betogende tekst", tekst: "**Betogende tekst** = schrijver wil overtuigen. Structuur:\n1. Stelling/probleem\n2. Argumenten + bewijs\n3. Conclusie (= hoofdgedachte)\n\nDeze 3-stappen-structuur komt veel voor in Toets-opgaven. Herkennen helpt om hoofdgedachte snel te vinden — zit meestal **aan einde**." },
          ],
          woorden: [
            { woord: "betogende tekst", uitleg: "Tekst die mening verdedigt + lezer wil overtuigen." },
            { woord: "argument", uitleg: "Reden waarom iets klopt of waarom iemand iets vindt." },
          ],
          theorie: "Bij toetsvraag 'wat is hoofdgedachte?' bij betoogtekst:\n1. **Zoek conclusie-signaal** in laatste alinea\n2. **Vat zin om** in eenvoudige woorden\n3. **Kies optie** die zin-conclusie best raakt\n4. **Negeer** opties over details die niet in tekst staan",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over fietshelm met 'daarom adviseren artsen helm' → hoofdgedachte = 'fietshelm dragen is verstandig'." },
          ],
          basiskennis: [{ onderwerp: "Hoofdgedachte = 1 zin", uitleg: "Hoofdgedachte is altijd kort + duidelijk samen te vatten in 1 zin. Geen ingewikkelde opties." }],
          niveaus: { basis: "Mobielverbod positief.", simpeler: "'Dus' wijst op conclusie. Laatste zin: mobielverbod is goede zaak. Hoofdgedachte = dat.", nogSimpeler: "Verbod is goed" },
        },
      },
      {
        q: "Wanneer is een samenvatting **TE LANG**?",
        options: ["Wanneer hij bijna even lang is als origineel","Wanneer hij 25-30% van origineel is","Wanneer hij 1 zin is","Nooit te lang"],
        answer: 0,
        wrongHints: [null, "Dat is goede lengte — niet te lang.", "Dat is te KORT — mist context.", "Wel — verliest samenvattings-functie als te lang."],
        uitlegPad: {
          stappen: [
            { titel: "Doel van samenvatten", tekst: "Een **samenvatting** vat in **eigen woorden** + **kort** een tekst samen. Hoort:\n• **20-30% van origineel** (vuistregel)\n• Alle **hoofdpunten** bevatten\n• Geen **details / voorbeelden** uitgebreid\n• Geen **eigen mening** toevoegen\n• Lopende tekst (geen lijst)" },
            { titel: "Wat is TE LANG?", tekst: "Te lang = **>40-50% van origineel**. Dan ben je niet meer aan het samenvatten maar **herschrijven**. Veel mensen doen dit fout:\n• Schrijven alle voorbeelden over\n• Citeren te veel\n• Houden alle bijzaken erin\n\n**Doel samenvatting**: lezer KAN tekst overslaan + toch hoofdgedachte begrijpen. Te lang = doel mislukt." },
            { titel: "Toets-tip: aanpak", tekst: "**Samenvatten-stappenplan**:\n1. **Lees** tekst 2× — eerst overzicht, dan details\n2. **Markeer** hoofdgedachte + hoofdpunten\n3. **Negeer** voorbeelden + details + bijzaken\n4. **Herschrijf** in eigen woorden — kort\n5. **Check** lengte: 20-30% van origineel?\n6. **Lees terug**: snapt iemand het zonder het origineel?\n\nLet op bij de toets: vaak een **specifieke woordlimiet** (bv. 'maximaal 50 woorden')." },
          ],
          woorden: [
            { woord: "samenvatting", uitleg: "Korte versie van tekst met alleen hoofdpunten. 20-30% origineel." },
            { woord: "hoofdpunt", uitleg: "Belangrijkste inhoud per alinea/onderdeel." },
          ],
          theorie: "Goede samenvatting kenmerken (Toets-criteria):\n• Compleet — alle hoofdpunten\n• Beknopt — 20-30% lengte\n• Eigen woorden — geen letterlijk citeren\n• Objectief — geen mening\n• Logisch — zelfde volgorde meestal\n• Begrijpelijk — los van origineel\n\nFouten: te lang, mening toevoegen, voorbeelden meenemen, eigen interpretatie.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst 200 woorden → samenvatting ~50-60 woorden = OK." },
            { type: "stap", tekst: "Tekst 200 woorden → samenvatting 180 woorden = veel te lang, niet samengevat." },
          ],
          basiskennis: [{ onderwerp: "Niet alles", uitleg: "Mooi samenvatten = WEGLATEN durven. Niet alles is even belangrijk." }],
          niveaus: { basis: "Bijna even lang.", simpeler: "Samenvatting > 40-50% origineel = TE LANG. Doel: 20-30%.", nogSimpeler: "Bijna even lang" },
        },
      },
      { q: "Wat hoort NIET in een samenvatting?", options: ["Je eigen mening","De hoofdgedachte","De belangrijkste hoofdzaken","Conclusie"], answer: 0, wrongHints: [null, "Wel — kern van tekst.", "Wel — de hoofdzaken zijn de bouwstenen van je samenvatting.", "Wel — vaak laatste zin."] },
      { q: "Welke zin past meestal als hoofdgedachte van een alinea?", options: ["De eerste zin","De laatste zin","Een willekeurige zin","Een citaat"], answer: 0, wrongHints: [null, "Soms wel, maar meestal openingszin.", "Niet — kernzin staat doorgaans voorin.", "Citaten zijn voorbeelden, geen hoofdgedachte."] },
      { q: "Welke lengte is goed voor een samenvatting van 200 woorden?", options: ["~50 woorden","~150 woorden","~10 woorden","~200 woorden"], answer: 0, wrongHints: [null, "Te lang — dat is bijna de tekst zelf.", "Te kort — niet alle hoofdpunten passen.", "Niet samengevat."] },
      { q: "Welke vraag stel je om de **hoofdgedachte** te vinden?", options: ["Waar gaat de tekst PRECIES over?","Welke kleur is het mooist?","Hoeveel woorden zijn er?","Wie schreef het?"], answer: 0, wrongHints: [null, "Mening, niet inhoud.", "Telling, geen inhoud.", "Auteur, niet hoofdgedachte."] },
      { q: "Wat is een **kernzin**?", options: ["De zin die de hoofdgedachte van een alinea bevat","De langste zin","De laatste zin","Een citaat"], answer: 0, wrongHints: [null, "Lengte zegt niets.", "Soms wel maar niet altijd.", "Voorbeeld, geen kernzin."] },
      { q: "Welk verschil zit tussen **hoofdzaak** en **bijzaak**?", options: ["Hoofdzaak = nodig om kern te snappen; bijzaak = extra detail","Hoofdzaak staat altijd achteraan in de tekst","Bijzaak is altijd de langste zin","Er is geen verschil, ze betekenen hetzelfde"], answer: 0, wrongHints: [null, "Niet — vaak juist eerst.", "Niet relevant.", "Wel verschil."] },
      { q: "Welke woorden zijn typisch voor een **samenvattende slot-zin**?", options: ["Kortom / dus / al met al","Echter / maar","Bovendien / ook","Ten eerste / ten tweede"], answer: 0, wrongHints: [null, "Tegenstelling.", "Opsomming.", "Begin opsomming."] },
      { q: "Een goede samenvatting is geschreven in?", options: ["Eigen woorden","Letterlijk overgenomen zinnen","Engels","Steekwoorden zonder zinnen"], answer: 0, wrongHints: [null, "Dat is plagiaat-stijl.", "Niet relevant.", "Te kort — meestal hele zinnen."] },
      { q: "Welke informatie laat je **WEG** in een samenvatting?", options: ["Voorbeelden + details","Hoofdpunten","Conclusie","Onderwerp"], answer: 0, wrongHints: [null, "Hoofdpunten zijn juist de kern — die hou je.", "De conclusie is belangrijk en blijft in een samenvatting.", "Het onderwerp moet er juist in. Wat is minder belangrijk: de kern of losse voorbeelden?"] },
      { q: "Wat is een **tussentitel**?", options: ["Kop boven een alinea/onderdeel","De grote titel","Naam van schrijver","Vraag aan lezer"], answer: 0, wrongHints: [null, "Dat is hoofdtitel.", "Niet inhoud.", "Niet kop."] },
      { q: "Tussentitels helpen je om?", options: ["Snel structuur + thema's te zien","Sneller te schrijven","Mooier te lezen","Tellen"], answer: 0, wrongHints: [null, "Niet de bedoeling.", "Niet hoofddoel.", "Niet inhoud."] },
      { q: "Bij een samenvatting van **5 alinea's** — hoeveel kernzinnen zoek je minimaal?", options: ["5 kernzinnen","1 kernzin","10 kernzinnen","Geen enkele kernzin"], answer: 0, wrongHints: [null, "Elke alinea heeft een eigen hoofdpunt — hoeveel alinea's zijn er?", "Heeft elke alinea twee kernzinnen nodig?", "Kun je samenvatten zonder de hoofdpunten?"] },
      { q: "Een **goede samenvatting** lees je als?", options: ["Compactere versie die je het origineel laat overslaan","Een gewone tekst die even lang is als het origineel","Een rijtje vragen over de tekst","Een lijst losse woorden zonder zinnen"], answer: 0, wrongHints: [null, "Niet — korter.", "Stelt een samenvatting vragen, of geeft hij de inhoud weer?", "Te kort meestal."] },
      { q: "Welke **vraag aan jezelf** helpt bij hoofdgedachte vinden?", options: ["Als ik in 1 zin uitleg waarover de tekst gaat — wat zeg ik?","Hoeveel woorden zijn er?","Wie heeft de tekst gemaakt?","Welke kleur is de letter?"], answer: 0, wrongHints: [null, "Telling.", "Niet inhoud.", "Niet relevant."] },
      { q: "Wat is een **bijzaak** in een nieuwsbericht?", options: ["Detail dat verhaal kleur geeft, maar niet essentieel","Het belangrijkste feit van het bericht","De kop boven het bericht","Wat er gebeurd is en waar"], answer: 0, wrongHints: [null, "Dat is hoofdzaak.", "De kop vat het nieuws samen — is dat een bijzaak?", "Wat, waar en wanneer zijn de kern van nieuws — kun je die weglaten?"] },
      { q: "Bij de Doorstroomtoets vragen ze vaak: 'Wat is de hoofdgedachte?'. Welk type vraag is dat?", options: ["Inferentie","Spelling","Tellen","Mening"], answer: 0, wrongHints: [null, "Gaat het om hoe woorden geschreven worden, of om wat de tekst betekent?", "Niet.", "Geen eigen mening."] },
      { q: "*'De tekst gaat erover dat lezen belangrijk is en wat het oplevert.'* — kan dit de hoofdgedachte zijn?", options: ["Ja","Nee, dat is alleen het onderwerp","Nee, dat is een titel","Nee, dat is een detail"], answer: 0, wrongHints: [null, "Noemt de zin alleen waarover het gaat, of ook wát de tekst erover zegt?", "Is een titel meestal zo'n lange zin?", "Gaat de zin over één klein stukje, of over de hele tekst?"] },
      { q: "Wat doe je als de **eerste zin** géén kernzin is?", options: ["Verder zoeken in de alinea","Stoppen","Zomaar een zin kiezen","Niet samenvatten"], answer: 0, wrongHints: [null, "Niet — blijf zoeken.", "Niet — gericht zoeken.", "Wel — kan altijd."] },
      { q: "Welke vraag past niet bij een **goede samenvatting**?", options: ["Wat vind ik er zelf van?","Wat is de hoofdgedachte?","Welke hoofdpunten staan erin?","Wat is het tekstdoel?"], answer: 0, wrongHints: [null, "Wel — kerntaak.", "Wel — bouwstenen.", "Wel — context."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const samenvattenHoofdgedachtePo = {
  id: "samenvatten-hoofdgedachte-po",
  title: "Samenvatten en hoofdgedachte — Doorstroomtoets groep 5-8",
  emoji: "💭",
  level: "groep5-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F",
  sloThema: "Studievaardigheden — leesvaardigheid",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
  ],
  intro:
    "Hoofdgedachte vinden, hoofd/bijzaken scheiden, samenvatting maken. Doorstroomtoets-stijl. ~12 min.",
  triggerKeywords: [
    "samenvatten","samenvatting","hoofdgedachte","kerngedachte","onderwerp",
    "hoofdzaak","bijzaak","leesvaardigheid","studievaardigheden","tekst",
  ],
  chapters,
  steps,
};

export default samenvattenHoofdgedachtePo;
