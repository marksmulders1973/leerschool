// Leerpad: Feiten en details opzoeken — zoekend lezen (scannen)
// "Zoek het antwoord letterlijk in de tekst op" — dé Doorstroomtoets-vaardigheid.
// Kinderen leren de vaste strategie: (1) lees de vraag eerst en onderstreep
// het zoekwoord, (2) scan de tekst op dat zoekwoord (of een synoniem),
// (3) lees dán pas de zin eromheen precies, (4) controleer of het écht
// antwoord geeft op de vraag — getallen, namen en tijden exact overnemen!
//
// Alle teksten zijn 100% eigen werk. 4 stappen, 17 checks totaal.

const stepEmojis = ["🔎", "🐝", "🧩", "🏆"];

const chapters = [
  { letter: "A", title: "De zoekstrategie", emoji: "🔎", from: 0, to: 0 },
  { letter: "B", title: "Zoeken in een tekst", emoji: "🐝", from: 1, to: 1 },
  { letter: "C", title: "Lastige gevallen", emoji: "🧩", from: 2, to: 2 },
  { letter: "D", title: "Doorstroomtoets-oefening", emoji: "🏆", from: 3, to: 3 },
];

// ── Tekst voor stap 2: eigen informatieve tekst (~150 woorden) ──────
const tekstBijen = `**De bijen op het dak**

Op het dak van basisschool De Regenboog staan sinds vorig jaar twee bijenkasten. Imker Joost komt elke woensdag langs om te kijken of de bijen gezond zijn. In de zomer wonen er in één kast wel dertigduizend bijen. Ze vliegen naar bloemen in de buurt en komen terug met stuifmeel en nectar.

De kinderen van groep zeven helpen mee. Zij hebben op het schoolplein een bloemenstrook gezaaid, zodat de bijen genoeg eten kunnen vinden. Aan de rand van het plein staat een bord met informatie over het project.

In september wordt de honing geoogst. Vorig jaar leverden de kasten samen veertien potten honing op. Die werden op de herfstmarkt verkocht voor drie euro per pot. Van het geld kocht de school nieuwe planten voor de bloemenstrook.

Imker Joost is trots: "Deze bijen hebben het beter dan veel bijen in het wild."`;

// ── Tekst voor stap 4: eigen museumfolder-tekst (~200 woorden) ──────
const tekstUilenfort = `**Welkom in het Uilenfort — ontdekmuseum voor jonge speurders**

Midden in het stadspark staat het Uilenfort: een oud fort dat is omgebouwd tot ontdekmuseum voor kinderen van zes tot twaalf jaar.

**Openingstijden.** Het Uilenfort is open van dinsdag tot en met zondag, van tien uur 's ochtends tot vijf uur 's middags. Op maandag is het museum gesloten.

**Prijzen.** Een toegangsbewijs kost vijf euro voor kinderen en acht euro voor volwassenen. Kinderen tot vier jaar mogen gratis naar binnen.

**Wat is er te doen?** Op de begane grond ontdek je hoe het fort vroeger werd verdedigd. Op de eerste verdieping vind je de uilenzaal, met opgezette uilen en een echt uilennest achter glas. Op de zolder doe je zelf proefjes in het Ontdeklab: bouw een brug van papier of laat een ei zweven.

**Speurtocht.** Bij de ingang haal je gratis een speurkaart. De speurtocht duurt ongeveer drie kwartier en eindigt bij de schatkist in de kelder.

**Goed om te weten.** Groepen van meer dan tien personen moeten vooraf reserveren via de website. Honden mogen niet mee naar binnen; alleen hulphonden zijn welkom.

Tot snel in het Uilenfort!`;

const steps = [
  // ── Stap 1 ──────────────────────────────────────────────────────
  {
    title: "De zoekstrategie",
    explanation: `Op de Doorstroomtoets krijg je vaak vragen als: *"Hoeveel potten honing leverden de kasten op?"* Het antwoord staat dan **letterlijk in de tekst** — je hoeft het alleen maar te vínden. Dat heet **zoekend lezen**. Goede zoekers lezen niet de hele tekst opnieuw; ze werken als een speurder, met een vaste strategie:

1. **Lees eerst de vraag** — nog vóór de tekst — en onderstreep het belangrijkste woord: het **zoekwoord**. Kies als zoekwoord een woord dat opvalt: een naam, een getal of een bijzonder woord — niet een woordje als 'de' of 'is'.
2. **Scan de tekst.** Scannen = met je ogen snel over de tekst glijden, op zoek naar dat ene woord. Je leest dus níét alles — je zoekt alleen.
3. **Gevonden? Nu pas precies lezen.** Lees de zin met het zoekwoord (en de zin ervoor en erna) heel nauwkeurig.
4. **Controleer.** Geeft die zin écht antwoord op de vraag? Neem getallen, namen en tijden **exact** over — geen bijna-goed!

Kijk hoe dat werkt: *"Een spin heeft acht poten. Een insect heeft er zes."* Vraag: hoeveel poten heeft een spin? Zoekwoord = **spin**. Scan... gevonden! Lees precies: acht. Het getal zes staat er vlak naast, maar hoort bij het insect — daar trapt een speurder niet in.

Oefen de strategie met de vragen hieronder.`,
    checks: [
      {
        q: "Je krijgt de vraag: *\"Hoeveel eieren legt een kip per week?\"* Wat doe je volgens de zoekstrategie als EERSTE?",
        options: [
          "De vraag goed lezen en het zoekwoord onderstrepen",
          "De hele tekst van begin tot eind lezen",
          "Meteen een antwoord gokken",
          "Het eerste getal uit de tekst overnemen",
        ],
        answer: 0,
        evidence: "Lees eerst de vraag — nog vóór de tekst — en onderstreep het belangrijkste woord: het zoekwoord.",
        wrongHints: [
          null,
          "Kost dat niet heel veel tijd? Denk aan een speurder: die weet eerst wát hij zoekt, en gaat dan pas zoeken.",
          null,
          "Staat het eerste getal van een tekst altijd in de zin waar de vraag over gaat? Wat moet je éérst weten voordat een getal je iets zegt?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Eerst de vraag, dan de tekst", tekst: "Zoekend lezen begint niet bij de tekst maar bij de vraag. Als je weet wát je zoekt, hoef je niet alles te lezen." },
            { titel: "Onderstreep het zoekwoord", tekst: "In de vraag 'Hoeveel eieren legt een kip per week?' is 'eieren' een prima zoekwoord. Dat woord ga je straks in de tekst opsporen." },
            { titel: "Waarom dit werkt", tekst: "Een tekst opnieuw helemaal lezen kost minuten; scannen op één woord kost seconden. Op de toets is tijd kostbaar — de strategie bespaart je die tijd." },
          ],
          woorden: [
            { woord: "zoekwoord", uitleg: "Het belangrijkste woord uit de vraag, waarmee je de goede plek in de tekst opspoort." },
            { woord: "strategie", uitleg: "Een vast stappenplan dat je elke keer op dezelfde manier gebruikt." },
          ],
          theorie: "**De speurder-volgorde**\n\n1. Vraag lezen + zoekwoord onderstrepen\n2. Tekst scannen op het zoekwoord\n3. De zin eromheen precies lezen\n4. Controleren: geeft dit écht antwoord?\n\nDe volgorde is belangrijk: wie eerst de hele tekst leest, is trager én vergeet halverwege waar de vraag ook alweer over ging. Wie meteen gokt of het eerste getal pakt, trapt in de valkuilen die de toetsenmakers klaarzetten.",
          voorbeelden: [
            { type: "speurder", tekst: "Vraag: 'In welk jaar werd de brug gebouwd?' → zoekwoord 'brug' (of scan op jaartallen!). Je ogen zoeken alleen dat — de rest van de tekst sla je over." },
          ],
          basiskennis: [
            { onderwerp: "Vraag eerst", uitleg: "Bij opzoekvragen begin je altijd bij de vraag, nooit bij de tekst. De vraag vertelt je wat je moet zoeken." },
          ],
          niveaus: {
            basis: "Denk aan de speurder: wat moet die weten vóórdat het zoeken kan beginnen?",
            simpeler: "Je kunt pas iets zoeken als je weet wát je zoekt. Welke van de vier acties zorgt daarvoor?",
            nogSimpeler: "Welke actie begint bij de vráág in plaats van bij de tekst?",
          },
        },
      },
      {
        q: "Wat betekent 'scannen' bij het lezen van een tekst?",
        options: [
          "Met je ogen snel over de tekst glijden, op zoek naar je zoekwoord",
          "Elke zin hardop en langzaam voorlezen",
          "Een foto van de tekst maken",
          "De tekst samenvatten in je eigen woorden",
        ],
        answer: 0,
        evidence: "Scannen = met je ogen snel over de tekst glijden, op zoek naar dat ene woord.",
        wrongHints: [
          null,
          "Langzaam en precies lezen doe je pas als je de goede plek gevonden hebt. Hoe vínd je die plek snel?",
          null,
          "Samenvatten is een andere leesklus. Bij zoekend lezen zoek je maar één ding — wat doen je ogen dan?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Snel, niet precies", tekst: "Scannen is expres slordig lezen: je ogen vliegen over de regels en letten alleen op je zoekwoord. De betekenis van de andere zinnen sla je over." },
            { titel: "Als een zoekplaatje", tekst: "Vergelijk het met een zoekplaatje: je bekijkt niet elke tekening apart, je ogen speuren naar dat ene figuurtje." },
            { titel: "Daarna schakelen", tekst: "Zodra je het zoekwoord ziet: STOP. Nu schakel je om naar langzaam en precies lezen — alleen die ene zin en de zinnen eromheen." },
          ],
          woorden: [
            { woord: "scannen", uitleg: "Snel over een tekst kijken op zoek naar één woord of getal, zonder alles echt te lezen." },
          ],
          theorie: "**Twee leesstanden**\n\nGoede lezers hebben twee standen en wisselen ertussen:\n\n- **Scan-stand**: razendsnel, alleen op zoek naar het zoekwoord. Voor de héle tekst.\n- **Precies-stand**: langzaam en nauwkeurig. Alleen voor de zin(nen) rond het gevonden zoekwoord.\n\nDe fout die veel kinderen maken: ze blijven de hele tekst in de precies-stand lezen (te traag) óf ze blijven in de scan-stand bij het antwoord (te slordig). Wissel bewust!",
          voorbeelden: [
            { type: "vergelijking", tekst: "Zoek je een naam in een lijst met verjaardagen? Dan lees je ook niet elke regel — je ogen glijden langs de namen tot je de goede ziet. Dat is scannen." },
          ],
          basiskennis: [
            { onderwerp: "Scannen is geen lezen", uitleg: "Bij scannen begrijp je de tekst niet — dat hoeft ook niet. Je zoekt alleen de plek waar je precies moet gaan lezen." },
          ],
          niveaus: {
            basis: "Denk aan het zoekplaatje: wat doen je ogen als je één figuurtje zoekt tussen honderd andere?",
            simpeler: "Scannen moet snél zijn. Streep de antwoorden weg die juist langzaam of helemaal geen lezen zijn.",
            nogSimpeler: "Welk antwoord gaat over snel zoeken naar één woord?",
          },
        },
      },
      {
        q: "*\"Een spin heeft acht poten. Een insect heeft er zes.\"* — Hoeveel poten heeft een spin?",
        options: ["Acht", "Zes", "Veertien", "Twee"],
        answer: 0,
        evidence: "Een spin heeft acht poten.",
        wrongHints: [
          null,
          "Dat getal staat in de zin over het insect. Over welk dier gaat de vráág? Lees de zin met jouw zoekwoord.",
          "Heb je twee getallen bij elkaar opgeteld? De vraag gaat over één dier — welk getal staat in díé zin?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord kiezen", tekst: "De vraag gaat over de spin. Zoekwoord = 'spin'. Scan het stukje tekst op dat woord." },
            { titel: "Precies lezen", tekst: "Het woord 'spin' staat in de eerste zin. Lees die zin nauwkeurig: welk getal staat erin?" },
            { titel: "Controleer de valkuil", tekst: "Er staat nóg een getal in het stukje — maar dat staat in de zin over het insect. Een getal telt alleen als het in de zin over jouw zoekwoord staat." },
          ],
          woorden: [
            { woord: "insect", uitleg: "Klein diertje met zes poten, zoals een mier of een vlieg. Een spin is géén insect." },
          ],
          theorie: "**Het verkeerde-zin-gevaar**\n\nToetsenmakers zetten graag twee getallen dicht bij elkaar: één in de goede zin en één in de zin ernaast. Wie alleen scant en het eerste het beste getal grijpt, pakt vaak het verkeerde.\n\nDaarom is stap 3 van de strategie zo belangrijk: na het scannen ga je **precies lezen**. Vraag jezelf: staat dit getal écht in de zin over mijn zoekwoord? Hoort het bij het goede onderwerp?",
          voorbeelden: [
            { type: "verkeerde-zin", tekst: "'De bus vertrekt om 9 uur. De trein vertrekt om 10 uur.' Vraag: hoe laat vertrekt de trein? Wie te snel graait, pakt 9 uur — uit de bus-zin. Precies lezen redt je." },
          ],
          basiskennis: [
            { onderwerp: "Getal bij het goede onderwerp", uitleg: "Controleer bij elk getal: over wie of wat gaat de zin waar het in staat? Alleen het getal bij jouw zoekwoord telt." },
          ],
          niveaus: {
            basis: "Er staan twee getallen. Welk getal staat in dezelfde zin als het woord 'spin'?",
            simpeler: "Lees alleen de eerste zin — daar staat jouw zoekwoord in. Welk getal noemt die zin?",
            nogSimpeler: "Zoek het woord 'spin' en lees het getal dat in diezelfde zin staat.",
          },
        },
      },
      {
        q: "Je wilt snel een antwoord opzoeken in een lange tekst. Wat is de SLIMSTE eerste actie?",
        options: [
          "De vraag lezen en het zoekwoord bepalen vóórdat je naar de tekst kijkt",
          "De tekst van begin tot eind lezen en daarna de vraag lezen",
          "Gokken op basis van de kop van de tekst",
          "Alle getallen in de tekst opschrijven en daarna de vraag lezen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Als je eerst de tekst leest, vergeet je de vraag soms halverwege. Wat doe je beter vóór het lezen?",
          null,
          "Niet alle vragen gaan over getallen. Wat helpt je écht om gericht te zoeken?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Waarom vraag eerst?", tekst: "Als je het zoekwoord weet vóórdat je de tekst induikt, weet je waar je op let. Zo hoef je niet alles te lezen." },
            { titel: "Vergelijk", tekst: "Eerst tekst, dan vraag = je leest alles en zoekt dan nog een keer. Eerst vraag, dan tekst = je zoekt meteen gericht. De tweede manier bespaart tijd." },
            { titel: "Vaste volgorde", tekst: "1. Vraag lezen + zoekwoord. 2. Scannen. 3. Precies lezen. 4. Controleren. Stap 1 is altijd de eerste." },
          ],
          niveaus: {
            basis: "Als je weet wat je zoekt, kun je dan gericht scannen. Wat doe je daarvoor als eerste?",
            simpeler: "Een speurder weet ééérst wat hij zoekt, dan gaat hij zoeken. Welke actie hoort bij 'weten wat je zoekt'?",
            nogSimpeler: "Zoek de actie die begint bij de vraag, niet bij de tekst.",
          },
        },
      },
      {
        q: "Je hebt je zoekwoord gevonden in de tekst. Wat is de VOLGENDE stap in de zoekstrategie?",
        options: [
          "De zin met het zoekwoord — en de zin ervoor en erna — precies lezen",
          "De rest van de tekst ook helemaal lezen",
          "Meteen het antwoord opschrijven zonder verder te lezen",
          "Een nieuw zoekwoord kiezen en opnieuw beginnen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat kost veel tijd. Je hebt al de goede plek gevonden — wat doe je op die plek?",
          null,
          "Je hebt het zoekwoord al gevonden! Waarom zou je opnieuw beginnen?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Twee standen", tekst: "De zoekstrategie heeft twee standen: eerst snel scannen over de hele tekst, daarna precies lezen op de goede plek." },
            { titel: "Waarom ook de zinnen eromheen?", tekst: "Soms staat het antwoord niet in diezélfde zin als het zoekwoord, maar in de zin ervoor of erna. Lees ze allebei mee om zeker te zijn." },
            { titel: "Controleer altijd", tekst: "Na het precies lezen stel je jezelf de vraag: geeft dit antwoord op de vraag? Neem getallen en namen exact over." },
          ],
          niveaus: {
            basis: "Je hebt het zoekwoord gevonden. Ga je dan snel door, of lees je die plek heel precies?",
            simpeler: "Scannen is de eerste stap. Wat is de volgende stap als je het goede stukje gevonden hebt?",
            nogSimpeler: "Zoek de stap waarbij je langzaam en nauwkeurig leest.",
          },
        },
      },
      {
        q: "*\"Een neushoorn kan 2.300 kilo wegen. Een nijlpaard kan 3.200 kilo wegen.\"* — Hoeveel kilo weegt een nijlpaard?",
        options: ["3.200 kilo", "2.300 kilo", "5.500 kilo", "320 kilo"],
        answer: 0,
        wrongHints: [
          null,
          "Dat getal staat in de zin over het ándere dier. Scan op 'nijlpaard' en lees alleen díé zin.",
          "Je hebt de twee getallen bij elkaar opgeteld. De vraag gaat over één dier — welk getal staat bij de naam 'nijlpaard'?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord", tekst: "De vraag gaat over de nijlpaard. Zoekwoord = 'nijlpaard'. Scan de twee zinnen op dat woord." },
            { titel: "Precies lezen", tekst: "De zin met 'nijlpaard' zegt: 3.200 kilo. Dat is je antwoord." },
            { titel: "Controleer de valkuil", tekst: "Het andere getal (2.300) hoort bij de neushoorn. Neem alleen het getal over uit de zin over het dier dat de vraag noemt." },
          ],
          niveaus: {
            basis: "Welk getal staat in de zin over het nijlpaard? Lees alleen díé zin.",
            simpeler: "Twee dieren, twee getallen. Zoek 'nijlpaard' en neem het getal uit diezelfde zin.",
            nogSimpeler: "Scan op het woord 'nijlpaard' en lees het getal erna.",
          },
        },
      },
      {
        q: "Vraag: *\"Op welke dag is de bibliotheek gesloten?\"* — Welk woord uit de vraag is het beste zoekwoord om mee te scannen?",
        options: ["gesloten", "de", "welke", "is"],
        answer: 0,
        evidence: "Kies als zoekwoord een woord dat opvalt: een naam, een getal of een bijzonder woord — niet een woordje als 'de' of 'is'.",
        wrongHints: [
          null,
          "Hoe vaak komt dat woordje in een tekst voor? Tientallen keren! Zoek een woord dat maar op één plek kan staan.",
          "Staat dat woord straks in de tékst, of alleen in de vraag? Kies een woord dat je in de tekst kunt terugvinden.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat maakt een zoekwoord goed?", tekst: "Een goed zoekwoord is zeldzaam en bijzonder: het staat maar op één of twee plekken in de tekst. Dan brengt het je meteen naar de goede zin." },
            { titel: "Streep de kleine woordjes weg", tekst: "Woordjes als 'de', 'is', 'welke' en 'op' staan overal. Daarmee scannen is als zoeken naar zand op het strand." },
            { titel: "Kies het bijzondere woord", tekst: "In deze vraag is er één woord dat opvalt en precies vertelt waar je naar zoekt. Dat woord (of een synoniem, zoals 'dicht') vind je in de tekst bij het antwoord." },
          ],
          woorden: [
            { woord: "zeldzaam", uitleg: "Komt weinig voor. Een zeldzaam woord staat maar op één plek in de tekst — perfect om op te scannen." },
          ],
          theorie: "**Zo kies je een zoekwoord**\n\nGoede zoekwoorden zijn:\n- **namen** (Joost, De Regenboog, Uilenfort)\n- **getallen en tijden** (veertien, 9 uur, 2024)\n- **bijzondere woorden** (gesloten, geoogst, reserveren)\n\nSlechte zoekwoorden zijn kleine woordjes die overal staan: de, het, een, is, van, welke, hoe.\n\nTip: vraagt de vraag naar een dag of tijd? Dan kun je óók scannen op dagen (maandag, dinsdag...) of op cijfers — die springen vanzelf in het oog.",
          voorbeelden: [
            { type: "keuze", tekst: "Vraag: 'Hoeveel kost een kinderkaartje?' → goede zoekwoorden: 'kost', 'kaartje' of het euroteken. Slecht: 'hoeveel' en 'een'." },
          ],
          basiskennis: [
            { onderwerp: "Bijzonder wint", uitleg: "Hoe bijzonderder het woord, hoe sneller je de goede plek in de tekst vindt." },
          ],
          niveaus: {
            basis: "Welk woord uit de vraag staat straks waarschijnlijk maar op één plek in de tekst?",
            simpeler: "Drie van de vier opties zijn kleine woordjes die in elke zin kunnen staan. Welk woord blijft over?",
            nogSimpeler: "Welk woord vertelt precies waar de vraag over gaat: over open en dicht zijn?",
          },
        },
      },
    ],
  },

  // ── Stap 2 ──────────────────────────────────────────────────────
  {
    title: "Zoeken in een tekst",
    explanation: tekstBijen + `

Nu ga je de zoekstrategie gebruiken in een echte tekst — precies zoals op de Doorstroomtoets. Je hoeft de tekst niet uit je hoofd te leren: **terugkijken in de tekst mag altijd en is juist slim.**

**Zo pak je elke vraag aan:**
1. Lees de vraag en onderstreep (in gedachten) het zoekwoord.
2. Scan de tekst hierboven op dat woord. Getallen en namen springen vanzelf in het oog.
3. Gevonden? Lees die zin — en de zin ervoor en erna — heel precies.
4. Controleer: past dit antwoord écht bij de vraag? Neem getallen en dagen exact over.

Let op: in deze tekst staan meerdere getallen (twee, dertigduizend, veertien, drie) én meerdere onderwerpen (de bijen, de kinderen, de honing). De kunst is het júíste detail te pakken. Succes, speurder!`,
    checks: [
      {
        q: "Hoeveel potten honing leverden de kasten vorig jaar op?",
        options: ["Veertien", "Dertigduizend", "Drie", "Twee"],
        answer: 0,
        evidence: "Vorig jaar leverden de kasten samen veertien potten honing op.",
        wrongHints: [
          null,
          "Dat reuzegetal gaat over de bijen zélf, niet over de honing. Scan op het woord 'potten'.",
          "Dat getal staat wel in de goede alinea, maar het gaat over euro's. Lees de zin met 'potten' nog eens precies.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord", tekst: "De vraag gaat over 'potten honing'. Scan de tekst op het woord 'potten'." },
            { titel: "Precies lezen", tekst: "Je komt uit in de derde alinea, bij de zin over de oogst van vorig jaar. Welk getal staat vlak vóór 'potten honing'?" },
            { titel: "Controleer de buren", tekst: "In dezelfde alinea staan nog meer getallen: eentje over euro's en verderop het aantal kasten. Alleen het getal dat direct bij 'potten' hoort, beantwoordt de vraag." },
          ],
          woorden: [
            { woord: "oogsten", uitleg: "Binnenhalen wat gegroeid of gemaakt is — de boer oogst graan, de imker oogst honing." },
          ],
          theorie: "**Meerdere getallen in één alinea**\n\nDeze tekst is een typische toets-valkuil: vier getallen (twee kasten, dertigduizend bijen, veertien potten, drie euro) verspreid over de tekst. De vraag bepaalt welk getal je nodig hebt.\n\nKoppel elk getal aan zijn onderwerp:\n- getal + 'kasten' → aantal kasten\n- getal + 'bijen' → aantal bijen\n- getal + 'potten' → aantal potten\n- getal + 'euro' → de prijs\n\nDe vraag vraagt naar potten? Dan telt alleen het getal dat aan 'potten' vastzit.",
          voorbeelden: [
            { type: "koppelen", tekst: "'De klas heeft 28 leerlingen en 4 computers.' Vraag: hoeveel computers? Niet het grootste of eerste getal pakken — het getal naast 'computers'." },
          ],
          basiskennis: [
            { onderwerp: "Getal + onderwerp = paar", uitleg: "Een getal hoort altijd bij het woord ernaast. Lees ze samen als een paar, dan pak je nooit het verkeerde." },
          ],
          niveaus: {
            basis: "Scan op het woord 'potten' en lees alleen die zin. Welk getal staat er vlak voor?",
            simpeler: "Ga naar de alinea over september, de honing-oogst. Zoek daar de zin met 'potten honing' en lees het getal ervoor.",
            nogSimpeler: "Zoek in de tekst de woorden 'potten honing' en lees het woord dat er direct vóór staat.",
          },
        },
      },
      {
        q: "Op welke dag komt imker Joost langs bij de bijenkasten?",
        options: ["Woensdag", "Dinsdag", "Donderdag", "Zaterdag"],
        answer: 0,
        evidence: "Imker Joost komt elke woensdag langs om te kijken of de bijen gezond zijn.",
        wrongHints: [
          null,
          "Die dag lijkt qua klank op wat er staat — maar lees de dag in de tekst letter voor letter over.",
          null,
          "Komt die dag überhaupt in de tekst voor? Scan op de naam 'Joost' en lees precies wat er staat.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord: een naam!", tekst: "Namen zijn super-zoekwoorden: ze beginnen met een hoofdletter en springen in het oog. Scan op 'Joost'." },
            { titel: "Precies lezen", tekst: "De naam staat al in de eerste alinea. Lees die zin nauwkeurig: welke dag wordt genoemd?" },
            { titel: "Letter voor letter", tekst: "Dagen lijken op elkaar: dinsdag, woensdag, donderdag. Lees de dag in de tekst letter voor letter en vergelijk met de antwoorden — bijna goed is fout." },
          ],
          woorden: [
            { woord: "imker", uitleg: "Iemand die bijen houdt en verzorgt, en de honing oogst." },
          ],
          theorie: "**Bijna-goed-antwoorden bij dagen en tijden**\n\nBij vragen naar dagen zet de toets er graag een lookalike tussen: dinsdag naast woensdag, of donderdag naast dinsdag. Je hersenen zien 'd...dag' en denken al snel: gevonden!\n\nDe remedie: **wijs de dag in de tekst aan** (met je vinger of je ogen) en lees hem helemaal uit. Vergelijk dan pas met de antwoordopties. Exact overnemen — niet uit je geheugen, maar rechtstreeks uit de tekst.",
          voorbeelden: [
            { type: "lookalike", tekst: "'De markt is op donderdag.' Vraag met opties dinsdag/donderdag: wie te snel leest, kiest de verkeerde d-dag. Letter voor letter lezen voorkomt dat." },
          ],
          basiskennis: [
            { onderwerp: "Hoofdletters helpen", uitleg: "Namen van mensen en plaatsen beginnen met een hoofdletter — daardoor vind je ze extra snel bij het scannen." },
          ],
          niveaus: {
            basis: "Scan op de naam van de imker en lees de zin waarin die naam staat.",
            simpeler: "De dag staat in de eerste alinea, in de zin over de imker. Lees die dag letter voor letter over.",
            nogSimpeler: "Zoek 'Joost' in de tekst. Welke dag staat er in diezelfde zin?",
          },
        },
      },
      {
        q: "Wat kocht de school van het geld van de honingverkoop?",
        options: [
          "Nieuwe planten voor de bloemenstrook",
          "Een derde bijenkast",
          "Nieuwe potten voor de honing",
          "Cadeautjes voor groep zeven",
        ],
        answer: 0,
        evidence: "Van het geld kocht de school nieuwe planten voor de bloemenstrook.",
        wrongHints: [
          null,
          "Klinkt logisch bij een bijenproject — maar staat het er ook écht? Zoek de zin die begint met 'Van het geld'.",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord", tekst: "De vraag gaat over 'het geld'. Scan de tekst op het woord 'geld'." },
            { titel: "Precies lezen", tekst: "Je vindt het in de derde alinea: 'Van het geld kocht de school...' — lees de zin helemaal uit." },
            { titel: "Pas op voor logisch-maar-fout", tekst: "Een derde bijenkast of nieuwe potten zóú logisch zijn. Maar bij zoekend lezen telt alleen wat er letterlijk staat, niet wat er zou kúnnen staan." },
          ],
          woorden: [
            { woord: "bloemenstrook", uitleg: "Een lange smalle strook grond waar bloemen zijn gezaaid." },
          ],
          theorie: "**Logisch-maar-fout: de bedenk-valkuil**\n\nSommige foute antwoorden zijn niet uit de tekst, maar uit je eigen hoofd: ze passen bij het onderwerp en klinken aannemelijk. Bij een bijenproject zou een extra kast heel logisch zijn!\n\nMaar een opzoekvraag test niet wat logisch is — hij test of jij kunt vinden wat er **staat**. Regel: kun je een zin in de tekst aanwijzen die jouw antwoord letterlijk bewijst? Nee? Dan is het antwoord fout, hoe logisch het ook klinkt.",
          voorbeelden: [
            { type: "bewijs-regel", tekst: "Vraag: 'Wat aten de kinderen op het feest?' Jij denkt: vast taart! Maar de tekst zegt 'pannenkoeken'. De tekst wint — altijd." },
          ],
          basiskennis: [
            { onderwerp: "Aanwijzen = bewijzen", uitleg: "Een goed antwoord op een opzoekvraag kun je altijd letterlijk aanwijzen in de tekst. Kan dat niet? Dan is het je eigen bedenksel." },
          ],
          niveaus: {
            basis: "Scan op het woord 'geld' en lees de hele zin waarin het staat.",
            simpeler: "In de derde alinea staat een zin die begint met 'Van het geld kocht de school...'. Wat staat er achter?",
            nogSimpeler: "Zoek de zin over het geld en lees precies wat de school ermee kocht.",
          },
        },
      },
      {
        q: "Welke groep leerlingen zaaide de bloemenstrook op het schoolplein?",
        options: ["Groep zeven", "Groep zes", "Groep acht", "Groep vijf"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Die groep wordt in de tekst niet bij de bloemenstrook genoemd. Scan op het woord 'bloemenstrook' of 'gezaaid'.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord kiezen", tekst: "De vraag gaat over wie de bloemenstrook zaaide. Goede zoekwoorden: 'bloemenstrook', 'gezaaid' of 'groep'." },
            { titel: "Precies lezen", tekst: "Je vindt in de tweede alinea: 'De kinderen van groep zeven helpen mee. Zij hebben op het schoolplein een bloemenstrook gezaaid.' Groep zeven is het antwoord." },
            { titel: "Controleer het getal", tekst: "In de tekst staat ook het getal 'dertigduizend' (bijen) en 'twee' (kasten). Neem alleen het getal over dat bij jouw vraag hoort: het groepsnummer." },
          ],
          niveaus: {
            basis: "Scan op het woord 'bloemenstrook'. In welke alinea en welke zin staat het — en welke groep wordt daar genoemd?",
            simpeler: "In de tweede alinea staat een zin die begint met 'De kinderen van groep...'. Welk groepsnummer staat erin?",
            nogSimpeler: "Zoek het woord 'gezaaid' in de tekst en lees het getal in diezelfde zin.",
          },
        },
      },
      {
        q: "Wat staat er op het bord aan de rand van het schoolplein?",
        options: [
          "Informatie over het bijenproject",
          "De regels van het schoolplein",
          "Een foto van de bijen",
          "De naam van de school",
        ],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Een foto van de bijen stond op de posters bij Joost — maar staat er ook iets op het bord? Scan op 'bord'.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord", tekst: "De vraag gaat over een bord. Scan de tekst op het woord 'bord'." },
            { titel: "Precies lezen", tekst: "Je vindt in de tweede alinea: 'Aan de rand van het plein staat een bord met informatie over het project.' Dat is je antwoord." },
            { titel: "Logisch-maar-fout", tekst: "Schoolregels of de naam van de school klinken logisch bij een schoolplein, maar staan er niet. Alleen wat letterlijk in de tekst staat, is het antwoord." },
          ],
          niveaus: {
            basis: "Scan op het woord 'bord'. Lees de zin met dat woord heel precies.",
            simpeler: "Er staat één zin over het bord aan de rand van het plein. Wat vertelt die zin over de inhoud van het bord?",
            nogSimpeler: "Zoek 'bord' in de tekst en lees wat er achter 'met' staat.",
          },
        },
      },
      {
        q: "Hoeveel kostte één pot honing op de herfstmarkt?",
        options: ["Drie euro", "Veertien euro", "Dertig euro", "Vijf euro"],
        answer: 0,
        evidence: "Die werden op de herfstmarkt verkocht voor drie euro per pot.",
        wrongHints: [
          null,
          "Dat getal gaat over het áántal potten, niet over de prijs. Welke zin noemt euro's?",
          null,
          "Staat dat bedrag ergens in deze tekst? Scan op het woord 'euro' en lees wat er écht staat.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord", tekst: "De vraag gaat over kosten. Scan op 'euro' of op 'herfstmarkt' — allebei bijzondere woorden die maar één keer voorkomen." },
            { titel: "Precies lezen", tekst: "Je vindt: '...op de herfstmarkt verkocht voor ... euro per pot.' Lees het bedrag dat er staat." },
            { titel: "Controleer per pot of totaal?", tekst: "De vraag gaat over ÉÉN pot. In de tekst staat 'per pot' — dat past precies. Vragen over 'alles samen' zouden een rekensom nodig hebben, maar dat vraagt deze vraag niet." },
          ],
          woorden: [
            { woord: "per pot", uitleg: "Voor elke pot apart. 'Drie euro per pot' betekent: elke pot kost dat bedrag." },
          ],
          theorie: "**Twee getallen over hetzelfde onderwerp**\n\nHier staan het aantal potten én de prijs per pot in dezelfde alinea. Beide gaan over de honing — dus alleen 'onderwerp checken' is niet genoeg. Kijk ook naar de **eenheid**:\n\n- staat er 'potten' achter? → een aantal\n- staat er 'euro' achter? → een prijs\n\nDe vraag vraagt 'hoeveel kostte' → je zoekt euro's. Zo kies je zelfs tussen twee getallen over hetzelfde onderwerp altijd het juiste.",
          voorbeelden: [
            { type: "eenheid", tekst: "'Het zwembad is 25 meter lang en het water is 2 meter diep.' Vraag naar de diepte? Zoek het getal bij 'diep', niet het grootste getal." },
          ],
          basiskennis: [
            { onderwerp: "Eenheid checken", uitleg: "Kijk altijd wat er achter een getal staat: euro, meter, uur, potten. De eenheid vertelt of het getal bij jouw vraag past." },
          ],
          niveaus: {
            basis: "De vraag gaat over geld. Scan op het woord 'euro' en lees het getal ervoor.",
            simpeler: "Zoek de zin over de herfstmarkt. Er staan die zin een bedrag mét het woord 'euro' erbij — dat zoek je.",
            nogSimpeler: "Zoek het woord 'euro' in de tekst en lees het getal dat er direct vóór staat.",
          },
        },
      },
    ],
  },

  // ── Stap 3 ──────────────────────────────────────────────────────
  {
    title: "Lastige gevallen",
    explanation: `Je kent de zoekstrategie. Maar de Doorstroomtoets bouwt er graag valkuilen in. Wie deze drie kent, laat zich niet foppen:

**1. Synoniemen — de tekst gebruikt een ánder woord.**
Jouw zoekwoord is 'kaartje', maar in de tekst staat 'toegangsbewijs'. Zelfde ding, ander woord! Vind je je zoekwoord niet? Zoek dan naar een **synoniem**: een ander woord dat hetzelfde betekent. Denk vooraf alvast: hoe kan de schrijver dit óók noemen? (arts = dokter, fiets = rijwiel, dicht = gesloten.)

**2. Bijna-goed-details.**
De toets zet graag een antwoord neer dat *bijna* klopt: dinsdag in plaats van donderdag, 221 in plaats van 212, half vijf in plaats van vijf uur. Je hersenen zeggen te snel "gevonden!". Remedie: wijs het detail in de tekst aan en neem het **letter voor letter en cijfer voor cijfer** over.

**3. Het verkeerde detail uit de buurt.**
Vlak naast het goede antwoord staat vaak een ander getal of andere naam — uit de zin ernaast. Controleer altijd: hoort dit detail écht bij mijn zoekwoord, of bij het onderwerp van een andere zin?

Kortom: scannen mag snel, maar het overnemen van het antwoord doe je traag en precies. Oefen de lastige gevallen hieronder.`,
    checks: [
      {
        q: "*\"Een toegangsbewijs voor het zwembad kost vier euro.\"* — Vraag: 'Hoe duur is een kaartje voor het zwembad?' Wat is het antwoord?",
        options: [
          "Vier euro",
          "Dat staat niet in de tekst",
          "Veertien euro",
          "Niets, het zwembad is gratis",
        ],
        answer: 0,
        evidence: "Een toegangsbewijs voor het zwembad kost vier euro.",
        wrongHints: [
          null,
          "Het woord 'kaartje' staat er inderdaad niet letterlijk — maar welk woord in de tekst betekent hetzelfde?",
          "Lees het bedrag in de tekst nog eens heel precies. Neem het exact over, niet ongeveer.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord niet gevonden?", tekst: "Je scant op 'kaartje'... niets! Maar geef niet op: de schrijver kan hetzelfde ding anders noemen." },
            { titel: "Denk in synoniemen", tekst: "Wat is een kaartje voor het zwembad nog meer? Een entreekaartje, een ticket... of een toegangsbewijs. Scan opnieuw met die woorden in je hoofd." },
            { titel: "Gevonden en controleren", tekst: "'Toegangsbewijs' = kaartje. Lees de zin precies en neem het bedrag exact over." },
          ],
          woorden: [
            { woord: "synoniem", uitleg: "Een ander woord met dezelfde betekenis: kaartje en toegangsbewijs, dokter en arts, blij en vrolijk." },
            { woord: "toegangsbewijs", uitleg: "Een kaartje waarmee je ergens naar binnen mag." },
          ],
          theorie: "**Synoniemen-alarm**\n\nDe toets kiest éxpres een ander woord in de vraag dan in de tekst. Zo test hij of je echt begrijpt wat je zoekt.\n\nVeelvoorkomende paren:\n- kaartje ↔ toegangsbewijs / ticket / entree\n- kost ↔ prijs / betaal je\n- dicht ↔ gesloten\n- begint ↔ start / vangt aan\n- dokter ↔ arts / huisarts\n\nTip: bedenk vóór het scannen al één of twee synoniemen van je zoekwoord. Dan herken je de goede zin meteen, ook als jouw woord er niet letterlijk staat.",
          voorbeelden: [
            { type: "synoniem", tekst: "Vraag: 'Wanneer begint de voorstelling?' Tekst: 'De show start om zeven uur.' Twee synoniemen tegelijk: voorstelling=show, begint=start." },
          ],
          basiskennis: [
            { onderwerp: "Niet gevonden ≠ staat er niet", uitleg: "Als je zoekwoord ontbreekt, staat het antwoord er vaak tóch — met een ander woord. Eerst synoniemen proberen, dan pas concluderen dat iets er niet staat." },
          ],
          niveaus: {
            basis: "Welk woord in de tekst betekent hetzelfde als 'kaartje'? Lees dan wat het kost.",
            simpeler: "Een kaartje om ergens binnen te komen heet ook wel een toegangs-... Zoek dat lange woord in de zin en lees het bedrag.",
            nogSimpeler: "Zoek het woord 'kost' in de zin en lees het bedrag dat erachter staat.",
          },
        },
      },
      {
        q: "*\"De voetbaltraining is op dinsdag om vier uur. De zwemles is op donderdag om vier uur.\"* — Wanneer is de zwemles?",
        options: [
          "Donderdag om vier uur",
          "Dinsdag om vier uur",
          "Donderdag om twee uur",
          "Dinsdag om twee uur",
        ],
        answer: 0,
        evidence: "De zwemles is op donderdag om vier uur.",
        wrongHints: [
          null,
          "Die dag hoort bij een andere les. Scan op het woord 'zwemles' en lees precies díé zin.",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord", tekst: "De vraag gaat over de zwemles — dus 'zwemles' is je zoekwoord, niet 'training'." },
            { titel: "De goede zin pakken", tekst: "Er staan twee bijna gelijke zinnen naast elkaar. Lees alléén de zin waarin 'zwemles' staat." },
            { titel: "Dag én tijd exact overnemen", tekst: "Neem beide details over: de dag én de tijd. Controleer allebei letter voor letter met de antwoordopties." },
          ],
          woorden: [
            { woord: "detail", uitleg: "Een klein maar belangrijk stukje informatie: een dag, een tijd, een naam, een getal." },
          ],
          theorie: "**Tweelingzinnen: de favoriete valkuil**\n\nTwee zinnen met dezelfde bouw ('... is op ... om ... uur') vlak naast elkaar — dat is met opzet. Je ogen springen makkelijk naar de verkeerde zin, zeker onder tijdsdruk.\n\nAanpak:\n1. Bepaal éérst je zoekwoord (zwemles).\n2. Wijs de zin aan waar dat woord in staat.\n3. Haal alle details alleen uit díé zin.\n\nDe antwoordopties mixen dag en tijd door elkaar — dat is een teken dat je beide details apart moet controleren.",
          voorbeelden: [
            { type: "tweeling", tekst: "'Groep 7 gymt op maandag. Groep 8 gymt op vrijdag.' Vraag over groep 8? Alleen de tweede zin telt — hoe verleidelijk dicht de eerste ook staat." },
          ],
          basiskennis: [
            { onderwerp: "Eén zin tegelijk", uitleg: "Staan er twee lijkende zinnen? Dek de andere in gedachten af en lees alleen de zin met jouw zoekwoord." },
          ],
          niveaus: {
            basis: "Welke van de twee zinnen gaat over de zwemles? Haal dag én tijd alleen uit die zin.",
            simpeler: "De eerste zin gaat over voetbal — die mag je negeren. Lees de tweede zin en neem dag en tijd precies over.",
            nogSimpeler: "Zoek het woord 'zwemles' en lees alleen die zin, woord voor woord.",
          },
        },
      },
      {
        q: "Je zoekwoord uit de vraag staat nérgens letterlijk in de tekst. Wat doe je dan?",
        options: [
          "Zoeken naar een synoniem: een ander woord dat hetzelfde betekent",
          "Antwoorden dat het niet in de tekst staat",
          "De vraag overslaan en nooit meer terugkomen",
          "Zelf een antwoord verzinnen dat goed klinkt",
        ],
        answer: 0,
        evidence: "Vind je je zoekwoord niet? Zoek dan naar een synoniem: een ander woord dat hetzelfde betekent.",
        wrongHints: [
          null,
          "Schrijvers gebruiken vaak een ander woord voor hetzelfde ding. Welk trucje helpt je dan tóch verder?",
          null,
          "Bij zoekend lezen moet je antwoord uit de tekst komen. Wat kun je nog proberen voordat je iets bedenkt?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Niet meteen opgeven", tekst: "Dat jouw woord er niet staat, betekent niet dat het antwoord er niet staat. De schrijver heeft waarschijnlijk een ander woord gekozen." },
            { titel: "Bedenk synoniemen", tekst: "Vraag jezelf: hoe kun je dit ook zeggen? 'Fiets' kan 'rijwiel' zijn, 'dicht' kan 'gesloten' zijn, 'kinderen' kunnen 'leerlingen' zijn." },
            { titel: "Scan opnieuw", tekst: "Scan de tekst nog een keer, nu met de synoniemen in je achterhoofd. Meestal vind je de goede zin alsnog binnen een paar seconden." },
          ],
          woorden: [
            { woord: "synoniem", uitleg: "Een ander woord met (bijna) dezelfde betekenis." },
          ],
          theorie: "**Het synoniemen-stappenplan**\n\n1. Zoekwoord niet gevonden? Blijf rustig.\n2. Bedenk 2-3 andere woorden voor hetzelfde ding.\n3. Scan opnieuw op die woorden.\n4. Nog niets? Scan dan op het sóórt antwoord dat je zoekt: een getal, een dag, een naam met hoofdletter, het euroteken.\n\nPas als dat állemaal niets oplevert, mag je concluderen dat het antwoord echt niet in de tekst staat — op de toets is dat maar zelden het goede antwoord bij een opzoekvraag.",
          voorbeelden: [
            { type: "soort-antwoord", tekst: "Vraag naar een prijs, maar 'kost' staat nergens? Scan op het euroteken of op cijfers — prijzen springen er zo uit." },
          ],
          basiskennis: [
            { onderwerp: "Ander woord, zelfde ding", uitleg: "Een tekst herhaalt zelden precies de woorden van de vraag. Verwacht synoniemen — dan schrik je er niet van." },
          ],
          niveaus: {
            basis: "Het antwoord staat er vaak wél, maar met een ander woord. Welke aanpak past daarbij?",
            simpeler: "Denk aan kaartje en toegangsbewijs: twee woorden, één ding. Wat deed je toen om het antwoord toch te vinden?",
            nogSimpeler: "Welke optie laat je vérder zoeken in plaats van opgeven of gokken?",
          },
        },
      },
      {
        q: "*\"De bibliotheek is van maandag tot en met vrijdag open van negen tot zes.\"* — Vraag: 'Op welke dag is de bibliotheek dicht?' Welk antwoord is juist?",
        options: [
          "Zaterdag en zondag",
          "Maandag",
          "Vrijdag",
          "Woensdag",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Maandag staat in het rijtje open dagen. Lees de zin nog eens: van welke dag tot welke dag is de bibliotheek open?",
          "Vrijdag staat ook in het rijtje. Kijk eens welke dagen er niet worden genoemd in 'maandag tot en met vrijdag'.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Lees precies wat er staat", tekst: "'Van maandag tot en met vrijdag' = maandag, dinsdag, woensdag, donderdag en vrijdag zijn open. Welke dagen mist er?" },
            { titel: "Redeneer", tekst: "Een week heeft zeven dagen. Vijf zijn open. Dan zijn er twee over: zaterdag en zondag. Die worden nergens als openingsdag genoemd." },
            { titel: "Betrouwbaarheidscheck", tekst: "Dit is een kleine redeneer-stap bovenop het opzoeken. Op de toets wordt dat ook gevraagd: de tekst geeft de open dagen, jij trekt zelf de conclusie over de dichte." },
          ],
          niveaus: {
            basis: "Welke dagen noemt de zin als open dagen? Welke weekdagen horen daar dan niet bij?",
            simpeler: "Twaalf zeven dagen in een week op: ma, di, wo, do, vr, za, zo. Welke staan niet in het rijtje 'maandag tot en met vrijdag'?",
            nogSimpeler: "Als de bibliotheek van maandag tot vrijdag open is, is ze in het weekend dan open of dicht?",
          },
        },
      },
      {
        q: "*\"De bus vertrekt om 10:15 uur. De trein vertrekt om 10:51 uur.\"* — Hoe laat vertrekt de trein?",
        options: ["10:51 uur", "10:15 uur", "10:05 uur", "11:15 uur"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de vertrektijd van de bus. Scan op 'trein' en lees die zin.",
          "Let op de volgorde van de cijfers: heb je de uren en minuten misschien omgedraaid?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord", tekst: "De vraag gaat over de trein. Zoekwoord = 'trein'. Scan de twee zinnen op dat woord." },
            { titel: "Cijfer voor cijfer", tekst: "De trein-zin noemt: 10:51. Lees het tijdstip cijfer voor cijfer: tien uur eenenvijftig. Let op: 10:15 en 10:51 lijken op elkaar maar zijn heel anders." },
            { titel: "Vergelijk nauwkeurig", tekst: "Leg de tijd uit de tekst naast de opties en vergelijk cijfer voor cijfer. Bijna goed is fout." },
          ],
          niveaus: {
            basis: "Welk tijdstip staat er in de zin over de trein? Lees het getal uur voor uur en minuut voor minuut.",
            simpeler: "Er staan twee tijden. De bus-tijd begint met 10:1... en de trein-tijd met 10:5... Lees de trein-zin precies.",
            nogSimpeler: "Zoek het woord 'trein' en lees het tijdstip in diezélfde zin.",
          },
        },
      },
      {
        q: "*\"De uitkijktoren is 48 meter hoog. De wenteltrap naar boven telt 212 treden.\"* — Hoeveel treden heeft de trap?",
        options: ["212", "48", "221", "2"],
        answer: 0,
        evidence: "De wenteltrap naar boven telt 212 treden.",
        wrongHints: [
          null,
          "Dat getal gaat over meters, niet over treden. Scan op het woord 'treden'.",
          "Heb je de cijfers misschien omgedraaid? Lees het getal in de tekst nog eens cijfer voor cijfer.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord", tekst: "De vraag gaat over treden. Scan op het woord 'treden' — dat staat in de tweede zin." },
            { titel: "Cijfer voor cijfer", tekst: "Lees het getal in die zin cijfer voor cijfer op. Bij getallen van drie cijfers draaien je hersenen graag stiekem twee cijfers om!" },
            { titel: "Vergelijk exact", tekst: "Leg het getal uit de tekst naast de antwoordopties. Alleen de optie die cijfer voor cijfer gelijk is, is goed. Bijna gelijk = fout." },
          ],
          woorden: [
            { woord: "wenteltrap", uitleg: "Een trap die in een spiraal omhoog draait, zoals in een toren." },
            { woord: "trede", uitleg: "Eén opstapje van een trap. Een trap met veel treden is hoog." },
          ],
          theorie: "**Cijfer-verdraai-valkuil**\n\nBij getallen zet de toets graag een verdraaide versie tussen de opties: 212 wordt 221, 148 wordt 184. Op het eerste gezicht 'herken' je het getal — maar het klopt net niet.\n\nZo voorkom je het:\n1. Wijs het getal in de tekst aan.\n2. Lees het cijfer voor cijfer hardop (in je hoofd): twee - één - twee.\n3. Doe hetzelfde met de antwoordoptie en vergelijk.\n\nDit kost drie seconden en voorkomt de sneuste fout die er is: het antwoord gevónden hebben en tóch fout kiezen.",
          voorbeelden: [
            { type: "verdraaid", tekst: "Tekst: 'Er kwamen 1.350 bezoekers.' Optie: 1.530. Wie alleen naar de eerste cijfers kijkt, trapt erin. Cijfer voor cijfer vergelijken redt je." },
          ],
          basiskennis: [
            { onderwerp: "Exact = exact", uitleg: "Bij opzoekvragen over getallen telt alleen het getal dat er precies zo staat. 'In de buurt' bestaat niet." },
          ],
          niveaus: {
            basis: "Scan op het woord 'treden' en lees het getal in díé zin, cijfer voor cijfer.",
            simpeler: "Er staan twee getallen: eentje bij 'meter' en eentje bij 'treden'. Jij zoekt het getal bij 'treden' — lees het heel precies.",
            nogSimpeler: "Zoek het woord 'treden' en lees het getal ervoor cijfer voor cijfer op.",
          },
        },
      },
    ],
  },

  // ── Stap 4 ──────────────────────────────────────────────────────
  {
    title: "Doorstroomtoets-oefening — de museumfolder",
    explanation: tekstUilenfort + `

Dit is 'm: een informatieve folder met vragen zoals je ze écht op de Doorstroomtoets krijgt. Alles wat je geleerd hebt komt langs: scannen op zoekwoorden, synoniemen herkennen, bijna-goed-antwoorden ontwijken en details exact overnemen.

Pak bij elke vraag de vaste strategie erbij: **vraag lezen → zoekwoord kiezen → scannen → precies lezen → controleren**. De kopjes in de folder (Openingstijden, Prijzen...) zijn gratis wegwijzers: die vertellen je in welk stukje je moet zoeken. Terugkijken in de folder mag altijd. Succes, speurder!`,
    checks: [
      {
        q: "Op welke dag is het Uilenfort gesloten?",
        options: ["Maandag", "Zondag", "Dinsdag", "Woensdag"],
        answer: 0,
        evidence: "Op maandag is het museum gesloten.",
        wrongHints: [
          null,
          "Die dag staat in het rijtje 'van dinsdag tot en met...' — zijn dat de open dagen of de dichte dagen?",
          "Op die dag gaat het museum juist ópen na de dichte dag. Scan op het woord 'gesloten'.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kopje kiezen", tekst: "De vraag gaat over open en dicht → kijk onder het kopje 'Openingstijden'. Kopjes zijn wegwijzers!" },
            { titel: "Zoekwoord", tekst: "Scan dat stukje op het woord 'gesloten' — precies het woord uit de vraag." },
            { titel: "Precies lezen", tekst: "Er staat één zin met 'gesloten' erin. De dag in díé zin is het antwoord — niet een dag uit het rijtje open dagen." },
          ],
          woorden: [
            { woord: "openingstijden", uitleg: "De dagen en uren waarop een gebouw open is voor bezoekers." },
          ],
          theorie: "**Kopjes zijn gratis wegwijzers**\n\nFolders en informatieve teksten hebben vaak dikgedrukte kopjes: Openingstijden, Prijzen, Goed om te weten. Gebruik ze!\n\n1. Lees de vraag: waar gaat hij over? (open/dicht → Openingstijden; geld → Prijzen.)\n2. Spring meteen naar dat kopje — de rest van de folder sla je over.\n3. Scan alleen dat stukje op je zoekwoord.\n\nZo zoek je in een lange folder net zo snel als in een korte tekst. Op de Doorstroomtoets staan vaak precies dit soort folders en posters.",
          voorbeelden: [
            { type: "wegwijzer", tekst: "Vraag over de prijs van een kinderkaartje? Spring direct naar het kopje 'Prijzen' — daar staat gegarandeerd het antwoord." },
          ],
          basiskennis: [
            { onderwerp: "Eerst het kopje, dan de zin", uitleg: "In een tekst met kopjes zoek je in twee stappen: eerst het goede kopje, dan binnen dat stukje je zoekwoord." },
          ],
          niveaus: {
            basis: "Kijk onder het kopje 'Openingstijden' en zoek de zin met het woord 'gesloten'.",
            simpeler: "Er is één zin waarin staat wanneer het museum dicht is. Welke dag noemt die zin?",
            nogSimpeler: "Zoek het woord 'gesloten' in de folder en lees de dag die in diezelfde zin staat.",
          },
        },
      },
      {
        q: "Roos is tien jaar. Hoeveel betaalt zij voor een toegangsbewijs?",
        options: ["Vijf euro", "Acht euro", "Niets — zij mag gratis naar binnen", "Tien euro"],
        answer: 0,
        evidence: "Een toegangsbewijs kost vijf euro voor kinderen en acht euro voor volwassenen.",
        wrongHints: [
          null,
          "Dat is de prijs voor grote mensen. Is Roos een volwassene of een kind?",
          "Gratis geldt alleen voor de állerkleinsten. Lees precies tot welke leeftijd dat is — en vergelijk met de leeftijd van Roos.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kopje + zoekwoord", tekst: "Geld → kopje 'Prijzen'. Scan daar op 'euro' of 'toegangsbewijs'." },
            { titel: "Welke groep is Roos?", tekst: "Er staan drie prijzen: voor kinderen, voor volwassenen en gratis tot vier jaar. Roos is tien — in welke groep valt zij?" },
            { titel: "Controleer de leeftijdsgrens", tekst: "Tien is ouder dan vier (dus niet gratis) en Roos is nog geen volwassene. Lees de prijs die bij 'kinderen' staat." },
          ],
          woorden: [
            { woord: "volwassene", uitleg: "Een groot mens, iemand van achttien jaar of ouder." },
          ],
          theorie: "**Opzoeken + even nadenken**\n\nSommige toetsvragen combineren opzoeken met een klein denkstapje. De prijs van Roos staat niet letterlijk als 'Roos betaalt...' in de folder — je moet eerst bepalen bij welke groep zij hoort.\n\nAanpak:\n1. Zoek alle prijzen op (opzoeken).\n2. Bepaal in welke groep de persoon uit de vraag valt (nadenken).\n3. Koppel de juiste prijs aan die groep (controleren).\n\nLet extra op leeftijdsgrenzen: 'tot vier jaar' betekent jonger dan vier. Een kind van tien valt daar ruim buiten.",
          voorbeelden: [
            { type: "groep-kiezen", tekst: "'Leden betalen twee euro, niet-leden vier euro.' Vraag over Bas, die geen lid is? Eerst bepalen: Bas = niet-lid → dan pas de prijs aflezen." },
          ],
          basiskennis: [
            { onderwerp: "Leeftijdsgrenzen precies lezen", uitleg: "'Tot vier jaar' is iets anders dan 'vanaf vier jaar'. Lees grenzen altijd exact — daar zit vaak de valkuil." },
          ],
          niveaus: {
            basis: "Kijk onder het kopje 'Prijzen'. Is Roos van tien een kind, een volwassene, of jonger dan vier?",
            simpeler: "Er staan drie mogelijkheden: kinderprijs, volwassenenprijs en gratis voor onder de vier. Roos is tien — welke prijs hoort bij haar groep?",
            nogSimpeler: "Roos is een kind. Lees in de prijzen-zin wat een kind betaalt.",
          },
        },
      },
      {
        q: "Hoe lang duurt de speurtocht ongeveer?",
        options: ["45 minuten", "30 minuten", "Drie uur", "Een kwartier"],
        answer: 0,
        evidence: "De speurtocht duurt ongeveer drie kwartier en eindigt bij de schatkist in de kelder.",
        wrongHints: [
          null,
          null,
          "In de folder staat het woord 'drie' — maar drie wát? Lees het hele woord dat erachter staat.",
          "Eén kwartier is 15 minuten. Hoeveel kwartieren noemt de folder?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord", tekst: "Scan op 'speurtocht' — dat staat zelfs als kopje in de folder. Lees de zin over hoe lang hij duurt." },
            { titel: "Vertaal de tijd", tekst: "De folder zegt het in kwartieren, de antwoorden staan in minuten. Eén kwartier = 15 minuten. Reken de kwartieren uit de folder om." },
            { titel: "Controleer", tekst: "15 + 15 + 15 — tel het rustig op en vergelijk met de opties. Pas op voor de optie die alleen het woord 'drie' hergebruikt!" },
          ],
          woorden: [
            { woord: "kwartier", uitleg: "Een kwart van een uur = 15 minuten. Drie kwartier is dus drie keer 15 minuten." },
          ],
          theorie: "**Zelfde tijd, andere woorden**\n\nDe folder en de antwoordopties gebruiken verschillende eenheden: de folder praat in kwartieren, de opties in minuten en uren. Dat is een synoniemen-valkuil met getallen.\n\nHandig rijtje:\n- een kwartier = 15 minuten\n- een half uur = 30 minuten\n- drie kwartier = 45 minuten\n- een uur = 60 minuten\n\nDe valkuil 'drie uur' hergebruikt het woordje 'drie' uit de tekst — maar drie kwartíér is heel iets anders dan drie úúr. Lees altijd het hele woord achter het getal.",
          voorbeelden: [
            { type: "omrekenen", tekst: "Tekst: 'De film duurt anderhalf uur.' Opties in minuten? Anderhalf uur = 90 minuten. Zelfde tijd, andere verpakking." },
          ],
          basiskennis: [
            { onderwerp: "Getal + tijdwoord samen lezen", uitleg: "'Drie kwartier', 'drie uur' en 'drie minuten' verschillen enorm. Het woord achter het getal hoort bij het antwoord." },
          ],
          niveaus: {
            basis: "Zoek in de folder hoe lang de speurtocht duurt. Weet je hoeveel minuten één kwartier is?",
            simpeler: "De folder noemt een aantal kwartieren. Eén kwartier is 15 minuten — reken uit hoeveel minuten dat samen is.",
            nogSimpeler: "Lees onder het kopje 'Speurtocht' hoeveel kwartieren de tocht duurt en tel per kwartier 15 minuten.",
          },
        },
      },
      {
        q: "Waar in het Uilenfort doe je zelf proefjes?",
        options: ["Op de zolder", "In de kelder", "Op de eerste verdieping", "Op de begane grond"],
        answer: 0,
        evidence: "Op de zolder doe je zelf proefjes in het Ontdeklab: bouw een brug van papier of laat een ei zweven.",
        wrongHints: [
          null,
          "Daar eindigt iets anders — de speurtocht. Scan op het woord 'proefjes'.",
          "Daar vind je de uilenzaal. Zoek de zin waarin 'proefjes' staat.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord", tekst: "'Proefjes' is een mooi bijzonder zoekwoord. Scan het stukje 'Wat is er te doen?' op dat woord." },
            { titel: "Precies lezen", tekst: "De zin met 'proefjes' begint met een plek in het gebouw. Die plek is je antwoord." },
            { titel: "Controleer de andere verdiepingen", tekst: "De folder noemt vier plekken: begane grond, eerste verdieping, zolder en kelder. Elke plek heeft z'n eigen activiteit — alleen bij één plek staan de proefjes." },
          ],
          woorden: [
            { woord: "proefje", uitleg: "Een klein experiment dat je zelf mag doen, om iets te ontdekken of te testen." },
            { woord: "begane grond", uitleg: "De onderste verdieping van een gebouw, gelijk met de straat." },
          ],
          theorie: "**Plek-vragen: elke zin koppelt een plek aan een activiteit**\n\nIn folders staat vaak een rijtje: op plek A doe je dit, op plek B zie je dat. De vraag pakt er één activiteit uit en jij moet de bijbehorende plek terugvinden.\n\nAanpak: scan op de actíviteit (proefjes), niet op de plekken — er zijn immers meerdere plekken, maar de activiteit staat maar op één plek. De zin waarin je activiteit staat, begint of eindigt met de plek die je zoekt.",
          voorbeelden: [
            { type: "plek-activiteit", tekst: "'In de gymzaal is het springkussen, op het plein staat de limonadekraam.' Vraag: waar is de limonade? Scan op 'limonade' → lees de plek in diezelfde zin." },
          ],
          basiskennis: [
            { onderwerp: "Scan op het unieke woord", uitleg: "Bij een vraag 'waar vind je X?' scan je op X zelf — dat woord staat maar op één plek, de plaatsnamen staan overal." },
          ],
          niveaus: {
            basis: "Scan op het woord 'proefjes' en lees met welke plek die zin begint.",
            simpeler: "Kijk onder 'Wat is er te doen?'. Drie plekken, drie activiteiten. Bij welke plek horen de proefjes en het Ontdeklab?",
            nogSimpeler: "Zoek het woord 'proefjes' in de folder en lees de plek die in diezelfde zin staat.",
          },
        },
      },
      {
        q: "Wat vind je op de begane grond van het Uilenfort?",
        options: [
          "Hoe het fort vroeger werd verdedigd",
          "De uilenzaal met opgezette uilen",
          "Het Ontdeklab op zolder",
          "De schatkist in de kelder",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De uilenzaal is op de eerste verdieping. Scan op 'begane grond'.",
          "Het Ontdeklab is op de zólder. Zoek de zin over de begane grond.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord", tekst: "De vraag gaat over de begane grond. Scan de tekst op 'begane grond' — dat staat onder het kopje 'Wat is er te doen?'." },
            { titel: "Precies lezen", tekst: "De zin luidt: 'Op de begane grond ontdek je hoe het fort vroeger werd verdedigd.' Dat is je antwoord." },
            { titel: "Controleer de andere plekken", tekst: "Elke verdieping heeft een eigen activiteit. Zorg dat je de goede plek koppelt aan de goede activiteit, anders geef je het antwoord van een andere verdieping." },
          ],
          niveaus: {
            basis: "Kijk onder 'Wat is er te doen?' en zoek de zin die begint met 'Op de begane grond'. Wat staat er achter?",
            simpeler: "Er zijn vier plekken: begane grond, eerste verdieping, zolder, kelder. Zoek welke activiteit bij de begane grond hoort.",
            nogSimpeler: "Zoek 'begane grond' in de folder en lees wat je daar kunt ontdekken.",
          },
        },
      },
      {
        q: "Hoe oud moet je minimaal zijn om naar het Uilenfort te gaan zonder gratis toegang?",
        options: [
          "Vier jaar",
          "Zes jaar",
          "Twaalf jaar",
          "Achttien jaar",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de minimumleeftijd voor het museum zelf. Maar de vraag gaat over de grens voor gráátis toegang. Lees de prijzen-zin nog eens.",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoekwoord", tekst: "De vraag gaat over gratis toegang. Scan op 'gratis' onder het kopje 'Prijzen'." },
            { titel: "Precies lezen", tekst: "De zin luidt: 'Kinderen tot vier jaar mogen gratis naar binnen.' De grens voor gratis is dus: jonger dan vier. Wie vier jaar óf ouder is, betaalt." },
            { titel: "Begrijp 'tot'", tekst: "'Tot vier jaar' = jonger dan vier. Op de verjaardag dat je vier wordt, is de gratis-periode voorbij. Dat is de leeftijdsgrens die de vraag bedoelt." },
          ],
          niveaus: {
            basis: "Kijk bij het kopje 'Prijzen'. Lees de zin over gratis. Welke leeftijdsgrens noemt die zin?",
            simpeler: "'Tot vier jaar' — op welke leeftijd begin je dan wel te betalen?",
            nogSimpeler: "Zoek het woord 'gratis' in de folder en lees welk getal ernaast staat.",
          },
        },
      },
      {
        q: "Meester Bram wil met twaalf kinderen naar het Uilenfort. Wat moet hij volgens de folder vooraf doen?",
        options: [
          "Reserveren via de website",
          "Bellen naar het museum",
          "Niets — hij kan zo naar binnen lopen",
          "Een hulphond meenemen",
        ],
        answer: 0,
        evidence: "Groepen van meer dan tien personen moeten vooraf reserveren via de website.",
        wrongHints: [
          null,
          "Zoek de zin over groepen — staat daar iets over bellen, of over een andere manier?",
          "Tel de groep eens: twaalf kinderen plus een meester. Is dat meer of minder dan tien personen? Lees dan de regel over groepen.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kopje + zoekwoord", tekst: "Regels en afspraken staan onder 'Goed om te weten'. Scan daar op het woord 'groepen'." },
            { titel: "Geldt de regel voor Bram?", tekst: "De regel geldt voor groepen van meer dan tien personen. Twaalf kinderen (plus de meester) is meer dan tien — dus ja, de regel geldt." },
            { titel: "Lees precies wat er moet gebeuren", tekst: "De zin vertelt niet alleen dát er iets moet, maar ook hóé. Neem die manier exact over — de opties verschillen juist op dat punt." },
          ],
          woorden: [
            { woord: "reserveren", uitleg: "Van tevoren een plek vastleggen, zodat je zeker weet dat je terechtkunt." },
            { woord: "vooraf", uitleg: "Van tevoren — vóórdat je gaat." },
          ],
          theorie: "**Het hele antwoord overnemen, niet de helft**\n\nSoms kloppen twee opties half: reserveren klopt, maar de máníer verschilt. De folder noemt precies één kanaal — en de toets zet er een ander, net zo geloofwaardig kanaal naast.\n\nRegel: lees de zin tot het einde en neem álle details over. 'Wat' én 'hoe' moeten allebei kloppen met de tekst. Een half goed antwoord is op de toets gewoon fout.\n\nDit is dezelfde exact-regel als bij getallen en dagen: niet ongeveer, maar precies wat er staat.",
          voorbeelden: [
            { type: "half-goed", tekst: "Tekst: 'Aanmelden kan alleen per e-mail.' Optie 'aanmelden per telefoon' klinkt prima — maar het kanaal klopt niet. Lees tot het einde van de zin." },
          ],
          basiskennis: [
            { onderwerp: "Wat + hoe", uitleg: "Bij vragen over regels: controleer niet alleen wát er moet gebeuren, maar ook hóé de tekst zegt dat het moet." },
          ],
          niveaus: {
            basis: "Zoek onder 'Goed om te weten' de zin over groepen en lees hem helemaal uit — tot en met de manier waarop.",
            simpeler: "Bram komt met meer dan tien personen, dus de groepen-regel geldt. Wat moet een groep volgens die zin vooraf doen, en via welk kanaal?",
            nogSimpeler: "Zoek het woord 'groepen' in de folder en lees precies wat er in die zin achter staat.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const feitenDetailsOpzoekenPo = {
  id: "feiten-details-opzoeken-po",
  title: "Feiten en details opzoeken — vind het antwoord in de tekst",
  emoji: "🔎",
  level: "groep6-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — informatie opzoeken in teksten",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
  ],
  intro:
    "\"Zoek het antwoord op in de tekst\" — dé vaardigheid voor de Doorstroomtoets begrijpend lezen. Leer de vaste zoekstrategie: eerst de vraag lezen en het zoekwoord onderstrepen, dan de tekst scannen, de zin eromheen precies lezen en controleren of het écht klopt. Met eigen oefenteksten, synoniemen-trucs en een toets-stijl museumfolder als eindopdracht.",
  triggerKeywords: [
    "feiten en details", "opzoeken", "zoekend lezen", "scannen", "scanned lezen",
    "informatie opzoeken", "zoekwoord", "letterlijk in de tekst", "detailvragen",
    "begrijpend lezen", "doorstroomtoets lezen", "cito begrijpend lezen",
    "studievaardigheden", "informatieve tekst", "folder lezen",
  ],
  chapters,
  steps,
};

export default feitenDetailsOpzoekenPo;
