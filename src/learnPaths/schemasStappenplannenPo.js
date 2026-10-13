// Leerpad: Schema's en stappenplannen lezen — voor groep 5-8
// 5 stappen, studievaardigheden / informatiebronnen.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#ff6e40",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["📋","➡️","🔀","🧭","🏆"];

const chapters = [
  { letter: "A", title: "Wat is een schema?", emoji: "📋", from: 0, to: 0 },
  { letter: "B", title: "Stappenplan volgen", emoji: "➡️", from: 1, to: 1 },
  { letter: "C", title: "Beslisboom — keuzes", emoji: "🔀", from: 2, to: 2 },
  { letter: "D", title: "Schema's interpreteren", emoji: "🧭", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een schema?",
    explanation: "Een **schema** is een **overzicht** van informatie in vakjes en met pijlen. Het maakt duidelijk **hoe iets werkt** of **wat met wat samenhangt**.\n\n**Soorten schema's**:\n1. **Stappenplan**: stap 1 → stap 2 → stap 3.\n   - Bijv. 'hoe maak je pannenkoeken'.\n2. **Beslisboom**: ja/nee-vragen die je naar een antwoord leiden.\n   - Bijv. 'welk dier ben je?'\n3. **Boomschema**: een hoofdcategorie met subcategorieën.\n   - Bijv. dieren → zoogdieren / vissen / vogels.\n4. **Tijdslijn**: gebeurtenissen op volgorde van tijd.\n   - Bijv. geschiedenis-overzicht.\n5. **Mindmap**: woorden rondom een centraal idee.\n\n**Onderdelen** in elk schema:\n• **Vakjes/cirkels** met informatie.\n• **Pijlen** of lijnen die verbinden.\n• Soms een **legenda** *(wat de symbolen betekenen)*.\n• Een **titel** van het schema.\n\n**toetsvraag-typen**:\n• 'Wat is de eerste stap?' → kijk naar bovenste/eerste vakje.\n• 'Wat komt na X?' → volg de pijl.\n• 'Welk antwoord krijg je als je deze keuzes maakt?' → loop de beslisboom door.\n\n**Tip**: Lees eerst de **titel** en **legenda** voordat je vragen beantwoordt. Scan daarna het schema globaal — wat is de structuur?",
    checks: [
      {
        q: "Wat zegt een **stappenplan**?",
        options: ["Welke volgorde te doen","Welke kleur","Wie iets doet","Wanneer iets ophoudt"],
        answer: 0,
        wrongHints: [null,"Niet over kleur.","Dat staat er soms bij, maar waar draait een stappenplan om?","Niet primair."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een stappenplan?", tekst: "Een **stappenplan** is een lijst van stappen in een BEPAALDE VOLGORDE om iets te doen. Het zegt: doe eerst dit, dan dat, daarna dat." },
            { titel: "Volgorde = belangrijk", tekst: "De volgorde is geen optie — die is VAST. Je kunt niet 'bakken' voordat je 'beslag' hebt. Stappenplan dwingt logische volgorde af." },
            { titel: "Voorbeelden", tekst: "Een **recept** is een stappenplan. Een **routebeschrijving** ook. Bij de Doorstroomtoets krijg je vaak stappenplannen waar je moet zien welke stap waar staat." },
          ],
          woorden: [
            { woord: "stappenplan", uitleg: "Lijst stappen in vaste volgorde." },
            { woord: "volgorde", uitleg: "Welke stap eerst, welke daarna." },
          ],
          theorie: "Toets-tip: bij stappenplan-vragen lees je ALLE stappen voordat je antwoord geeft. Vaak gaat de vraag over volgorde, ontbrekende stap, of wissel-mogelijkheid.",
          voorbeelden: [
            { type: "stap", tekst: "Recept pannenkoek: 1) kom pakken, 2) ingrediënten, 3) mixen, 4) bakken. Volgorde vast." },
            { type: "stap", tekst: "Naar school: 1) opstaan, 2) ontbijten, 3) jas aan, 4) deur uit. Volgorde logisch." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Stappenplan = wat eerst, wat daarna. Niet kleur, niet wie." }],
          niveaus: {
            basis: "Stappenplan zegt in welke VOLGORDE je iets doet.",
            simpeler: "Lijstje 'eerst X, dan Y, daarna Z'.",
            nogSimpeler: "Volgorde-lijst.",
          },
        },
      },
      {
        q: "**Pijlen** in een schema laten zien:",
        options: ["Verband of volgorde","De kleur","Hoeveel","Niets"],
        answer: 0,
        wrongHints: [null,"Niet kleur.","Niet hoeveel.","Een pijl wijst ergens naartoe. Wat laat dat zien?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat doen pijlen in schema's?", tekst: "**Pijlen** verbinden twee dingen en geven aan: hier hoort iets bij iets anders. Dat heet een VERBAND of een VOLGORDE." },
            { titel: "Voorbeelden", tekst: "Tijdlijn: '1900 → 1950 → 2000' = pijlen geven volgorde aan. Boomdiagram: 'Dieren → Zoogdieren' = pijl geeft 'is een soort van'-verband aan." },
            { titel: "Lezen: pijl volgen", tekst: "Begin bij vertrek-punt van pijl. Volg pijlrichting. Eindpunt is wat erop volgt. Sommige pijlen lopen TERUG of in CIRKEL — let goed op." },
          ],
          woorden: [
            { woord: "pijl", uitleg: "Symbool dat verband of volgorde aangeeft." },
            { woord: "diagram", uitleg: "Schema met dozen + pijlen om iets uit te leggen." },
          ],
          theorie: "Toets-tip pijlen: pijl wijst van het EERSTE naar het LATERE. Of van 'oorzaak' naar 'gevolg'. Lees in de richting van de pijl.",
          voorbeelden: [
            { type: "stap", tekst: "Stroomdiagram: 'Computer aan → log in → app open → werken'. Pijlen = volgorde stappen." },
            { type: "stap", tekst: "Indeling: 'Voertuigen → Auto's / Fietsen / Boten'. Pijlen = soort-van-relatie." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Pijl = van A naar B = hetzij volgorde, hetzij soort-van-relatie." }],
          niveaus: {
            basis: "Pijlen tonen verband of volgorde tussen elementen.",
            simpeler: "Pijl van A naar B = A leidt naar B (of A is soort van B).",
            nogSimpeler: "Pijl = relatie.",
          },
        },
      },
      {
        q: "Wat doe je **eerst** als je een schema krijgt?",
        options: ["Titel en legenda lezen","Antwoorden gokken","Schema overslaan","Pijlen tellen"],
        answer: 0,
        wrongHints: [null,"Geen goed plan.","Dan mis je info.","Tellen geeft geen begrip."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Sem schrijft het woord 'vakantie' in het midden van een blad. Eromheen schrijft hij 'strand', 'zon' en 'ijsje'.\n\nWat voor **schema** maakt Sem?",
        options: ["Een mindmap", "Een tijdslijn", "Een stappenplan", "Een beslisboom"],
        answer: 0,
        wrongHints: [
          null,
          "Staan er jaartallen of een volgorde van tijd in?",
          null,
          "Zie je ergens een ja/nee-vraag?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kijk naar de vorm",
              tekst: "Sem zet één woord in het **midden**. De andere woorden staan er **rondom**.",
            },
            {
              titel: "Welk schema is dat?",
              tekst: "Woorden rondom één idee in het midden: dat is een **mindmap**.",
            },
            {
              titel: "Waarom niet de andere?",
              tekst: "Een tijdslijn heeft een volgorde van tijd. Een stappenplan heeft stappen na elkaar. Een beslisboom heeft ja/nee-vragen. Dat heeft Sem allemaal niet.",
            },
          ],
          woorden: [
            {
              woord: "mindmap",
              uitleg: "Schema met woorden rondom één idee in het midden.",
            },
            {
              woord: "centraal",
              uitleg: "In het midden, het belangrijkste.",
            },
          ],
          theorie: "Toets-tip: kijk naar de VORM van het schema. Midden + woorden eromheen = mindmap. Stappen op een rij = stappenplan. Ja/nee-vragen = beslisboom.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Midden: 'school'. Eromheen: 'juf', 'pauze', 'tas'. Dat is een mindmap.",
            },
            {
              type: "stap",
              tekst: "Midden: 'sport'. Eromheen: 'voetbal', 'zwemmen', 'judo'. Ook een mindmap.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eén woord in het midden, de rest eromheen = mindmap.",
            },
          ],
          niveaus: {
            basis: "Woorden rondom één idee in het midden = mindmap.",
            simpeler: "Midden één woord, eromheen meer woorden.",
            nogSimpeler: "Midden + eromheen = mindmap.",
          },
        },
      },
      {
        q: "Een schema: **Vervoer** → over land / over water / door de lucht.\n\nWat voor schema is dit?",
        options: ["Een boomschema", "Een tijdslijn", "Een stappenplan", "Een beslisboom"],
        answer: 0,
        wrongHints: [
          null,
          "Gaat dit schema over wat er eerst en later gebeurde?",
          "Moet je hier iets doen in een vaste volgorde?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kijk naar de opbouw",
              tekst: "Bovenaan staat één groot woord: **vervoer**. Daaronder splitst het in kleinere groepen.",
            },
            {
              titel: "Welk schema is dat?",
              tekst: "Een hoofdgroep met kleinere groepen eronder heet een **boomschema**. Het lijkt op een boom met takken.",
            },
            {
              titel: "Waarom geen beslisboom?",
              tekst: "Een beslisboom heeft ja/nee-vragen. In dit schema staat geen enkele vraag.",
            },
          ],
          woorden: [
            {
              woord: "boomschema",
              uitleg: "Schema met een hoofdgroep en kleinere groepen eronder.",
            },
            {
              woord: "hoofdgroep",
              uitleg: "De grote groep bovenaan.",
            },
          ],
          theorie: "Toets-tip: één groot woord dat zich splitst in kleinere groepen = boomschema. Staan er vragen bij? Dan is het een beslisboom.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Fruit → appels / peren / bananen. Een boomschema.",
            },
            {
              type: "stap",
              tekst: "Kleding → jassen / broeken / truien. Ook een boomschema.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Grote groep, splitst in kleine groepen = boomschema.",
            },
          ],
          niveaus: {
            basis: "Hoofdgroep met kleinere groepen eronder = boomschema.",
            simpeler: "Eén groot woord, daaronder takken.",
            nogSimpeler: "Takken = boomschema.",
          },
        },
      },
      {
        q: "Welk onderdeel van een schema vertelt je **waar het schema over gaat**?",
        options: ["De titel", "De legenda", "De pijlen", "De vakjes"],
        answer: 0,
        wrongHints: [
          null,
          "Wat vertelt een legenda je: het onderwerp of de betekenis van de tekentjes?",
          "Pijlen verbinden dingen. Vertellen ze ook het onderwerp?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Onderdelen van een schema",
              tekst: "Een schema heeft vakjes, pijlen, soms een legenda en een titel.",
            },
            {
              titel: "Wat doet elk onderdeel?",
              tekst: "Vakjes = informatie. Pijlen = verband of volgorde. Legenda = wat de tekentjes betekenen. **Titel** = waar het schema over gaat.",
            },
            {
              titel: "Daarom eerst de titel",
              tekst: "Lees altijd eerst de titel. Dan weet je meteen het onderwerp.",
            },
          ],
          woorden: [
            {
              woord: "titel",
              uitleg: "De naam van het schema; zegt waar het over gaat.",
            },
            {
              woord: "legenda",
              uitleg: "Uitleg van wat de tekentjes of kleuren betekenen.",
            },
          ],
          theorie: "Toets-tip: titel = onderwerp. Legenda = betekenis van de tekentjes. Lees ze allebei vóór je de vraag beantwoordt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Titel 'Zo maak je een vlieger': het schema gaat over een vlieger maken.",
            },
            {
              type: "stap",
              tekst: "Titel 'Onze dag in de dierentuin': het schema gaat over een dagje dierentuin.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Waar gaat het over? Kijk naar de titel.",
            },
          ],
          niveaus: {
            basis: "De titel zegt waar het schema over gaat.",
            simpeler: "Titel = onderwerp.",
            nogSimpeler: "Titel = waarover.",
          },
        },
      },
      {
        q: "Waarvoor gebruik je een **schema**?",
        options: [
          "Om snel te zien hoe iets werkt",
          "Om een lang verhaal te vertellen",
          "Om je eigen mening te geven",
          "Om een tekening in te kleuren",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Is een schema lang, of juist kort en overzichtelijk?",
          null,
          "Gaat een schema over mooi maken, of over informatie?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is een schema?",
              tekst: "Een schema is een **overzicht** van informatie in vakjes en met pijlen.",
            },
            {
              titel: "Waarom handig?",
              tekst: "Je ziet in één keer **hoe iets werkt** of wat met wat te maken heeft. Dat gaat sneller dan een lange tekst lezen.",
            },
            {
              titel: "Wat een schema niet is",
              tekst: "Een schema is geen verhaal, geen mening en geen kleurplaat. Het geeft informatie kort en duidelijk.",
            },
          ],
          woorden: [
            {
              woord: "schema",
              uitleg: "Overzicht van informatie in vakjes en met pijlen.",
            },
            {
              woord: "overzicht",
              uitleg: "Alles kort bij elkaar, zodat je het snel ziet.",
            },
          ],
          theorie: "Toets-tip: een schema maakt informatie overzichtelijk. Het laat zien hoe iets werkt of wat bij elkaar hoort.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Stappenplan voor een vlieger: je ziet meteen welke stap eerst komt.",
            },
            {
              type: "stap",
              tekst: "Boomschema van fruit: je ziet meteen welke soorten er zijn.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Schema = kort overzicht, zodat je snel snapt hoe iets werkt.",
            },
          ],
          niveaus: {
            basis: "Met een schema zie je snel hoe iets werkt.",
            simpeler: "Schema = snel overzicht.",
            nogSimpeler: "Snel zien.",
          },
        },
      },
      {
        q: "Welke van deze is **GEEN** soort schema?",
        options: ["Een brief", "Een mindmap", "Een tijdslijn", "Een beslisboom"],
        answer: 0,
        wrongHints: [
          null,
          "Denk aan woorden rondom één idee. Is dat een schema?",
          null,
          "Ja/nee-vragen met pijlen. Is dat een schema?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Soorten schema's",
              tekst: "Stappenplan, beslisboom, boomschema, tijdslijn en mindmap zijn allemaal schema's.",
            },
            {
              titel: "Wat hebben ze gemeen?",
              tekst: "Ze zetten informatie in vakjes, met pijlen of lijnen ertussen.",
            },
            {
              titel: "En een brief?",
              tekst: "Een **brief** is een tekst met zinnen achter elkaar. Er staan geen vakjes en pijlen in. Dus een brief is geen schema.",
            },
          ],
          woorden: [
            {
              woord: "schema",
              uitleg: "Overzicht met vakjes en pijlen of lijnen.",
            },
            {
              woord: "tekst",
              uitleg: "Zinnen achter elkaar, zoals in een brief of verhaal.",
            },
          ],
          theorie: "Toets-tip: vraag jezelf af: zie ik vakjes en pijlen of lijnen? Dan is het een schema. Alleen zinnen achter elkaar? Dan is het een gewone tekst.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Een tijdslijn: gebeurtenissen op volgorde, met een lijn. Wel een schema.",
            },
            {
              type: "stap",
              tekst: "Een verhaal: zinnen achter elkaar. Geen schema.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Vakjes en pijlen = schema. Alleen zinnen = tekst.",
            },
          ],
          niveaus: {
            basis: "Een brief is een tekst, geen schema.",
            simpeler: "Brief = zinnen, geen vakjes.",
            nogSimpeler: "Brief = geen schema.",
          },
        },
      },
      {
        q: "Een **stappenplan** en een **tijdslijn** hebben iets hetzelfde.\n\nWat is dat?",
        options: [
          "Ze hebben allebei een volgorde",
          "Ze hebben allebei ja/nee-vragen",
          "Ze hebben allebei jaartallen",
          "Ze hebben allebei één woord in het midden",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij welk schema horen ja/nee-vragen?",
          "Staan er in een stappenplan jaartallen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stappenplan",
              tekst: "Een stappenplan zegt: eerst stap 1, dan stap 2, dan stap 3. Er is een **volgorde**.",
            },
            {
              titel: "Tijdslijn",
              tekst: "Een tijdslijn zet gebeurtenissen op een rij: eerst wat vroeg was, dan wat later kwam. Ook een **volgorde**.",
            },
            {
              titel: "Wat is anders?",
              tekst: "Ja/nee-vragen horen bij een beslisboom. Eén woord in het midden hoort bij een mindmap. Jaartallen staan wel op een tijdslijn, maar niet in een stappenplan.",
            },
          ],
          woorden: [
            {
              woord: "volgorde",
              uitleg: "Wat eerst komt en wat daarna.",
            },
            {
              woord: "tijdslijn",
              uitleg: "Gebeurtenissen op volgorde van tijd.",
            },
          ],
          theorie: "Toets-tip: vergelijk schema's op hun vorm. Volgorde = stappenplan of tijdslijn. Ja/nee = beslisboom. Midden + eromheen = mindmap.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Stappenplan tanden poetsen: eerst borstel pakken, dan poetsen. Volgorde.",
            },
            {
              type: "stap",
              tekst: "Tijdslijn van jouw leven: eerst geboren, later naar school. Volgorde.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Allebei: eerst dit, dan dat.",
            },
          ],
          niveaus: {
            basis: "Stappenplan en tijdslijn hebben allebei een volgorde.",
            simpeler: "Allebei: eerst, dan, daarna.",
            nogSimpeler: "Volgorde.",
          },
        },
      },
      {
        q: "Lotte wil op een blad laten zien hoe je een tent opzet: eerst dit, dan dat, dan dat.\n\nWelk schema past daar het best bij?",
        options: ["Een stappenplan", "Een mindmap", "Een boomschema", "Een beslisboom"],
        answer: 0,
        wrongHints: [null, "Zet een mindmap dingen in een volgorde?", null, "Moet Lotte ja/nee-vragen stellen?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat wil Lotte?",
              tekst: "Ze wil laten zien wat je **eerst** doet, wat **daarna** en wat **daarna**.",
            },
            {
              titel: "Welk schema hoort bij volgorde?",
              tekst: "Stappen in een vaste volgorde: dat is een **stappenplan**.",
            },
            {
              titel: "Waarom niet de andere?",
              tekst: "Een mindmap zet woorden rond een idee. Een boomschema verdeelt in groepen. Een beslisboom stelt ja/nee-vragen. Geen van die drie draait om 'eerst dit, dan dat'.",
            },
          ],
          woorden: [
            {
              woord: "stappenplan",
              uitleg: "Lijst stappen in vaste volgorde.",
            },
            {
              woord: "volgorde",
              uitleg: "Wat eerst komt en wat daarna.",
            },
          ],
          theorie: "Toets-tip: hoor je 'eerst, dan, daarna'? Denk aan een stappenplan.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Hoe was je je handen: eerst nat maken, dan zeep, dan afspoelen. Stappenplan.",
            },
            {
              type: "stap",
              tekst: "Hoe maak je thee: eerst water koken, dan zakje in de kop, dan water erop. Stappenplan.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eerst dit, dan dat = stappenplan.",
            },
          ],
          niveaus: {
            basis: "Iets doen in een vaste volgorde = stappenplan.",
            simpeler: "Eerst, dan, daarna = stappenplan.",
            nogSimpeler: "Volgorde = stappenplan.",
          },
        },
      },
    ],
  },

  {
    title: "Stappenplan volgen",
    explanation: "**Stappenplan** = lijst stappen in **volgorde**.\n\n**Voorbeeld — pannenkoeken**:\n1. Pak een kom.\n2. Doe meel, melk, ei in de kom.\n3. Mix totdat het glad is.\n4. Verhit boter in de pan.\n5. Schenk beslag in de pan.\n6. Bak 2 minuten per kant.\n\n**Stap-volgorde is belangrijk**:\n• Je kunt niet 'bakken' (stap 6) zonder eerst de **kom** te pakken.\n• Stappen dwingen een **logische volgorde** af.\n\n**toetsvraag-typen**:\n• 'Wat doe je vóór stap X?' → stap (X-1).\n• 'Wat doe je na stap Y?' → stap (Y+1).\n• 'Welke stap mist?' → kijk welke logische stap ontbreekt.\n• 'Mag je stap A en B verwisselen?' → check of de tweede de eerste nodig heeft.\n\n**Voorbeeld — verwisselbaar?**\n• Stap 2 ('meel') en stap 3 ('mix') — kun je niet wisselen, je moet eerst meel hebben voordat je kunt mixen.\n• Stap 1 en stap 4 ('kom' en 'pan') — wel wisselbaar (onafhankelijk).\n\n**Tip — Toets-stappen**:\nLees ALLE stappen voordat je een vraag beantwoordt. Vaak gaat de vraag over volgorde of het MISSEN van een stap.\n\n**Belangrijke woorden in stappen**:\n• 'eerst', 'vervolgens', 'dan', 'daarna', 'ten slotte'.\n• Deze woorden geven volgorde aan.",
    checks: [
      {
        q: "Stap-recept: 1) Kom pakken. 2) Meel + melk doen. 3) Mixen. 4) Bakken.\n\nWat doe je **direct vóór mixen**?",
        options: ["Meel + melk doen","Bakken","Kom pakken","Niets"],
        answer: 0,
        wrongHints: [null,"Komt na mixen.","Dat is stap 1 — maar welke stap staat DIRECT vóór mixen?","Wel iets — kijk welke stap vlak vóór mixen staat."],
      },
      {
        q: "Stappen: 1) Spullen pakken. 2) Boterhammen smeren. 3) Inpakken. 4) Naar school.\n\n**Welke stap mist** als je beleg op je boterham wil?",
        options: ["Beleg erop leggen na smeren","Boterham eten","Pak openmaken","Geen, alle stappen kloppen"],
        answer: 0,
        wrongHints: [null,"Geen onderdeel van klaarmaken.","Niet relevant voor klaarmaken.","Lees de vraag nog eens: wat wil je op je boterham?"],
      },
      {
        q: "Stappen: 1) Computer aan. 2) Wachtwoord typen. 3) Programma openen. 4) Bestand maken.\n\n**Mag je stap 1 en stap 2 wisselen?**",
        options: ["Nee, computer moet eerst aan","Ja, wachtwoord kan eerst","Ja, de volgorde maakt niet uit","Soms, als je snel typt"],
        answer: 0,
        wrongHints: [null,"Probeer maar — wachtwoord typen op uitstaand toetsenbord werkt niet.","Waar typ je het wachtwoord in als de computer nog uit staat?","Snel typen helpt niet als het scherm nog uit is."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Stappen: 1) Pot pakken. 2) Aarde in de pot doen. 3) Zaadje erin stoppen. 4) Water geven.\n\nWat doe je **direct na stap 2**?",
        options: ["Zaadje erin stoppen", "Water geven", "Pot pakken", "Aarde in de pot doen"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is een stap verder. Welke stap komt vlak na stap 2?",
          null,
          "Dat ís stap 2. Wat komt erna?",
        ],
      },
      {
        q: "Stappen: 1) Tandenborstel pakken. 2) ... 3) Tanden poetsen. 4) Mond spoelen.\n\nWelke stap **mist** op plek 2?",
        options: ["Tandpasta op de borstel doen", "Mond spoelen", "Tandenborstel pakken", "Naar bed gaan"],
        answer: 0,
        wrongHints: [null, "Die stap staat er al, op plek 4.", null, "Hoort dat bij het poetsen zelf?"],
      },
      {
        q: "Stappen: 1) Borden op tafel zetten. 2) Glazen op tafel zetten. 3) Eten opscheppen.\n\n**Mag je stap 1 en stap 2 wisselen?**",
        options: [
          "Ja, ze hebben elkaar niet nodig",
          "Nee, borden moeten altijd eerst",
          "Nee, de glazen gaan op de borden",
          "Ja, maar dan sla je stap 3 over",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Heb je de borden nodig om een glas neer te zetten?",
          null,
          "Waarom zou je stap 3 overslaan als je 1 en 2 wisselt?",
        ],
      },
      {
        q: "Lees: 'Eerst was je je handen. Daarna snijd je de appel. Ten slotte eet je hem op.'\n\nWat doe je als **laatste**?",
        options: ["De appel opeten", "Je handen wassen", "De appel snijden", "De appel wassen"],
        answer: 0,
        wrongHints: [
          null,
          "Welk woord staat vóór deze stap: 'eerst' of 'ten slotte'?",
          null,
          "Staat deze stap wel in de tekst?",
        ],
      },
      {
        q: "Stappen: 1) Brief schrijven. 2) Brief in de envelop doen. 3) Postzegel plakken. 4) Brief op de bus doen.\n\nWat doe je **direct vóór** het plakken van de postzegel?",
        options: [
          "De brief in de envelop doen",
          "De brief op de bus doen",
          "De brief schrijven",
          "De envelop openmaken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Komt die stap vóór of na de postzegel?",
          "Dat doe je ook eerder, maar is het de stap vlak ervoor?",
          null,
        ],
      },
      {
        q: "Welk stappenplan staat in de **goede volgorde**?",
        options: [
          "Sok aan → schoen aan → veter strikken",
          "Schoen aan → sok aan → veter strikken",
          "Veter strikken → sok aan → schoen aan",
          "Schoen aan → veter strikken → sok aan",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kun je een sok over een schoen aantrekken?",
          null,
          "Wat trek je het eerst aan je voet?",
        ],
      },
    ],
  },

  {
    title: "Beslisboom — keuzes maken",
    explanation: "**Beslisboom** = schema met **ja/nee-vragen** die je naar een antwoord leiden.\n\n**Voorbeeld — Welk dier ben je?**\n```\nLeef je in water?\n  Ja → Heb je veren?\n           Ja → eend\n           Nee → vis\n  Nee → Heb je vleugels?\n           Ja → vogel\n           Nee → zoogdier\n```\n\n**Hoe lezen**:\n1. Begin **bovenaan**.\n2. Beantwoord de eerste vraag.\n3. Volg de **ja-pijl** of de **nee-pijl**.\n4. Beantwoord de volgende vraag.\n5. Eindig bij een **eindvak** (geen vragen meer).\n\n**toetsvraag-typen**:\n• 'Welk antwoord krijg je als je deze keuzes maakt?' → loop pad door.\n• 'Welke vraag MIST?' → kijk welke logische vraag ontbreekt.\n• 'Wat als je bij ALLE vragen 'nee' antwoordt?' → volg alleen 'nee'-pijlen.\n\n**Voorbeeld — pad volgen**:\n• Leef je in water? **Ja**.\n• Heb je veren? **Nee**.\n• Antwoord = **vis**.\n\n**Tip — beslisboom**:\nMet een potlood het pad markeren helpt om niet te verdwalen. Of teken een lijntje van vraag naar antwoord.\n\n**Verschil met stappenplan**:\n• Stappenplan = **alle** stappen doen, in volgorde.\n• Beslisboom = je doet alleen de stappen die **bij jouw keuze** horen.",
    checks: [
      {
        q: "Beslisboom: 'Heb je honger? Ja → eet. Nee → drink water'.\n\nJe hebt **dorst**, niet honger. Wat doe je?",
        options: ["Drink water","Eet","Iets anders","Niets"],
        answer: 0,
        wrongHints: [null,"Dat hoort bij 'honger'.","Beslisboom geeft maar 2 opties.","Beslisboom zegt iets te doen."],
        uitlegPad: {
          stappen: [
            { titel: "Lees de vraag goed", tekst: "De beslisboom vraagt: 'Heb je HONGER?' (niet dorst). Beantwoord ALLEEN die vraag, niet wat jij EIGENLIJK voelt." },
            { titel: "Volg het pad", tekst: "Dorst, geen honger? → antwoord op de vraag 'heb je honger?' is **NEE**. Volg dus de 'Nee'-pijl → **drink water**." },
            { titel: "Beslisboom werkt logisch", tekst: "Een beslisboom geeft ALLEEN antwoorden op haar eigen vragen. Andere informatie (zoals 'ik heb dorst') gebruik je om je antwoord te geven, maar daarna volg je het pad." },
          ],
          woorden: [
            { woord: "beslisboom", uitleg: "Schema met ja/nee-vragen die naar antwoord leiden." },
            { woord: "pad volgen", uitleg: "Bij elke vraag het juiste antwoord (ja/nee) kiezen en doorlopen." },
          ],
          theorie: "Toets-tip beslisboom: lees ALTIJD de exacte vraag, niet wat erop LIJKT. Vraag is 'honger?', dus antwoord ja of nee daarop. Daarna volg pijl.",
          voorbeelden: [
            { type: "stap", tekst: "Vraag: 'regent het?' Het is bewolkt maar geen regen. → antwoord NEE. Volg nee-pijl." },
            { type: "stap", tekst: "Bij twijfel: kies de letterlijke betekenis van de vraag. 'Honger' is geen 'dorst'." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Beslisboom = stap voor stap. Bij elke vraag: alleen die vraag beantwoorden, dan volg pijl." }],
          niveaus: {
            basis: "Volg het pad: dorst = geen honger → 'Nee' → drink water.",
            simpeler: "Beantwoord 'heb je honger?' met nee → volg nee-pad.",
            nogSimpeler: "Nee = water.",
          },
        },
      },
      {
        q: "Beslisboom: 'Regen? Ja → jas aan. Nee → buiten zonder jas.'\n\nHet **regent niet** maar is wel koud. Volgens de beslisboom:",
        options: ["Buiten zonder jas","Jas aan","Beslisboom werkt niet","Niets"],
        answer: 0,
        wrongHints: [null,"Hoort bij 'regen ja'.","Beslisboom werkt voor regen, niet voor temperatuur.","Wel — geeft pad."],
      },
      {
        q: "Wat is een **kenmerk** van een beslisboom?",
        options: ["Heeft ja/nee-vragen","Heeft alleen plaatjes","Heeft geen pijlen","Heeft geen begin"],
        answer: 0,
        wrongHints: [null,"Wel met tekst.","Wel met pijlen.","Wel een begin."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Beslisboom 'Welke sport?':\nWil je in een team spelen?\n  Ja → Met een bal? Ja → voetbal. Nee → touwtrekken.\n  Nee → In het water? Ja → zwemmen. Nee → hardlopen.\n\nJe wilt **niet** in een team en **wel** in het water. Wat kies je?",
        options: ["zwemmen", "touwtrekken", "hardlopen", "voetbal"],
        answer: 0,
        wrongHints: [
          null,
          "Bij welk antwoord op de eerste vraag hoort deze sport?",
          "Hoe beantwoord je de vraag 'In het water?'",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Begin bovenaan",
              tekst: "Lees de eerste vraag van de beslisboom en beantwoord alleen díe vraag.",
            },
            {
              titel: "Volg de pijlen",
              tekst: "Team? **Nee** → volg de nee-pijl naar 'In het water?'. Water? **Ja** → volg de ja-pijl.",
            },
            {
              titel: "Eindvak",
              tekst: "Je komt uit bij **zwemmen**. Daar staat geen vraag meer, dus je bent klaar.",
            },
          ],
          woorden: [
            {
              woord: "beslisboom",
              uitleg: "Schema met ja/nee-vragen die je naar een antwoord leiden.",
            },
            {
              woord: "eindvak",
              uitleg: "Vak zonder vraag: daar ben je klaar.",
            },
          ],
          theorie: "Toets-tip beslisboom: begin bovenaan, beantwoord één vraag tegelijk en volg de ja- of nee-pijl. Zet met je vinger of potlood een spoor.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Vraag 1 'ja' → volg de ja-pijl naar vraag 2. Vraag 2 'nee' → volg de nee-pijl naar het eindvak.",
            },
            {
              type: "stap",
              tekst: "Bij elke vraag maar één pijl volgen. De andere tak sla je over.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eén vraag tegelijk, één pijl tegelijk, tot je bij een eindvak bent.",
            },
          ],
          niveaus: {
            basis: "Niet in een team → nee-pijl. Wel water → ja-pijl → zwemmen.",
            simpeler: "Nee bij team, ja bij water: zwemmen.",
            nogSimpeler: "Nee, ja = zwemmen.",
          },
        },
      },
      {
        q: "Beslisboom 'Welk boek?':\nHoud je van spanning?\n  Ja → Mag het eng zijn? Ja → spookverhaal. Nee → detective.\n  Nee → Houd je van dieren? Ja → dierenboek. Nee → strip.\n\nJe antwoordt bij **alle** vragen 'nee'. Wat lees je?",
        options: ["strip", "detective", "dierenboek", "spookverhaal"],
        answer: 0,
        wrongHints: [
          null,
          "Om hier te komen moet je bij de eerste vraag 'ja' zeggen. Klopt dat?",
          null,
          "Kom je hier met alleen nee-antwoorden?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Begin bovenaan",
              tekst: "Lees de eerste vraag van de beslisboom en beantwoord alleen díe vraag.",
            },
            {
              titel: "Volg de pijlen",
              tekst: "Spanning? **Nee** → volg de nee-pijl naar 'Houd je van dieren?'. Dieren? **Nee** → volg weer de nee-pijl.",
            },
            {
              titel: "Eindvak",
              tekst: "Je komt uit bij **strip**. Alleen nee-pijlen volgen brengt je daar.",
            },
          ],
          woorden: [
            {
              woord: "beslisboom",
              uitleg: "Schema met ja/nee-vragen die je naar een antwoord leiden.",
            },
            {
              woord: "eindvak",
              uitleg: "Vak zonder vraag: daar ben je klaar.",
            },
          ],
          theorie: "Toets-tip beslisboom: begin bovenaan, beantwoord één vraag tegelijk en volg de ja- of nee-pijl. Zet met je vinger of potlood een spoor.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Vraag 1 'ja' → volg de ja-pijl naar vraag 2. Vraag 2 'nee' → volg de nee-pijl naar het eindvak.",
            },
            {
              type: "stap",
              tekst: "Bij elke vraag maar één pijl volgen. De andere tak sla je over.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eén vraag tegelijk, één pijl tegelijk, tot je bij een eindvak bent.",
            },
          ],
          niveaus: {
            basis: "Twee keer nee → strip.",
            simpeler: "Steeds de nee-pijl volgen: strip.",
            nogSimpeler: "Nee, nee = strip.",
          },
        },
      },
      {
        q: "Beslisboom 'Welk boek?':\nHoud je van spanning?\n  Ja → Mag het eng zijn? Ja → spookverhaal. Nee → detective.\n  Nee → Houd je van dieren? Ja → dierenboek. Nee → strip.\n\nJe houdt **van spanning**, maar het mag **niet eng** zijn. Wat lees je?",
        options: ["detective", "spookverhaal", "dierenboek", "strip"],
        answer: 0,
        wrongHints: [
          null,
          "Wat antwoord je op 'Mag het eng zijn?'",
          null,
          "Om hier te komen zeg je 'nee' bij spanning. Klopt dat?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Begin bovenaan",
              tekst: "Lees de eerste vraag van de beslisboom en beantwoord alleen díe vraag.",
            },
            {
              titel: "Volg de pijlen",
              tekst: "Spanning? **Ja** → volg de ja-pijl naar 'Mag het eng zijn?'. Eng? **Nee** → volg de nee-pijl.",
            },
            {
              titel: "Eindvak",
              tekst: "Je komt uit bij **detective**. Daar staat geen vraag meer.",
            },
          ],
          woorden: [
            {
              woord: "beslisboom",
              uitleg: "Schema met ja/nee-vragen die je naar een antwoord leiden.",
            },
            {
              woord: "eindvak",
              uitleg: "Vak zonder vraag: daar ben je klaar.",
            },
          ],
          theorie: "Toets-tip beslisboom: begin bovenaan, beantwoord één vraag tegelijk en volg de ja- of nee-pijl. Zet met je vinger of potlood een spoor.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Vraag 1 'ja' → volg de ja-pijl naar vraag 2. Vraag 2 'nee' → volg de nee-pijl naar het eindvak.",
            },
            {
              type: "stap",
              tekst: "Bij elke vraag maar één pijl volgen. De andere tak sla je over.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eén vraag tegelijk, één pijl tegelijk, tot je bij een eindvak bent.",
            },
          ],
          niveaus: {
            basis: "Ja bij spanning, nee bij eng → detective.",
            simpeler: "Ja, dan nee = detective.",
            nogSimpeler: "Ja, nee = detective.",
          },
        },
      },
      {
        q: "Beslisboom 'Wat doe je in de pauze?':\nSchijnt de zon?\n  Ja → Heb je een bal? Ja → voetballen. Nee → tikkertje.\n  Nee → Mag je binnen blijven? Ja → lezen. Nee → onder het afdak spelen.\n\nDe zon **schijnt** en je hebt **geen** bal. Wat doe je?",
        options: ["tikkertje", "voetballen", "lezen", "onder het afdak spelen"],
        answer: 0,
        wrongHints: [null, "Wat antwoord je op 'Heb je een bal?'", null, "Kom je hier als de zon schijnt?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Begin bovenaan",
              tekst: "Lees de eerste vraag van de beslisboom en beantwoord alleen díe vraag.",
            },
            {
              titel: "Volg de pijlen",
              tekst: "Zon? **Ja** → volg de ja-pijl naar 'Heb je een bal?'. Bal? **Nee** → volg de nee-pijl.",
            },
            {
              titel: "Eindvak",
              tekst: "Je komt uit bij **tikkertje**.",
            },
          ],
          woorden: [
            {
              woord: "beslisboom",
              uitleg: "Schema met ja/nee-vragen die je naar een antwoord leiden.",
            },
            {
              woord: "eindvak",
              uitleg: "Vak zonder vraag: daar ben je klaar.",
            },
          ],
          theorie: "Toets-tip beslisboom: begin bovenaan, beantwoord één vraag tegelijk en volg de ja- of nee-pijl. Zet met je vinger of potlood een spoor.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Vraag 1 'ja' → volg de ja-pijl naar vraag 2. Vraag 2 'nee' → volg de nee-pijl naar het eindvak.",
            },
            {
              type: "stap",
              tekst: "Bij elke vraag maar één pijl volgen. De andere tak sla je over.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eén vraag tegelijk, één pijl tegelijk, tot je bij een eindvak bent.",
            },
          ],
          niveaus: {
            basis: "Ja bij zon, nee bij bal → tikkertje.",
            simpeler: "Zon ja, bal nee = tikkertje.",
            nogSimpeler: "Ja, nee = tikkertje.",
          },
        },
      },
      {
        q: "Wat is het **verschil** tussen een beslisboom en een stappenplan?",
        options: [
          "Bij een beslisboom volg je alleen jouw eigen pad",
          "Bij een beslisboom doe je altijd alle stappen",
          "Een stappenplan heeft altijd ja/nee-vragen",
          "Een stappenplan heeft nooit een volgorde",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Volg je in een beslisboom zowel de ja-pijl als de nee-pijl?",
          null,
          "Waar draait een stappenplan juist om?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stappenplan",
              tekst: "Bij een stappenplan doe je **alle** stappen, in de goede volgorde.",
            },
            {
              titel: "Beslisboom",
              tekst: "Bij een beslisboom kies je bij elke vraag ja of nee. Je volgt alleen het pad dat **bij jouw keuzes** hoort.",
            },
            {
              titel: "Het verschil",
              tekst: "Stappenplan = alles doen. Beslisboom = een deel doen, de rest sla je over.",
            },
          ],
          woorden: [
            {
              woord: "beslisboom",
              uitleg: "Schema met ja/nee-vragen die je naar een antwoord leiden.",
            },
            {
              woord: "stappenplan",
              uitleg: "Lijst stappen die je allemaal doet, in volgorde.",
            },
          ],
          theorie: "Toets-tip: zie je ja/nee-vragen? Dan doe je niet alles, maar alleen jouw pad.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Stappenplan pannenkoeken: alle zes stappen doen.",
            },
            {
              type: "stap",
              tekst: "Beslisboom 'welke sport?': na twee vragen ben je klaar, de rest sla je over.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Stappenplan = alle stappen. Beslisboom = alleen jouw pad.",
            },
          ],
          niveaus: {
            basis: "Bij een beslisboom volg je alleen het pad van jouw keuzes.",
            simpeler: "Beslisboom: alleen jouw pad. Stappenplan: alles.",
            nogSimpeler: "Eigen pad = beslisboom.",
          },
        },
      },
      {
        q: "Wanneer ben je **klaar** met een beslisboom?",
        options: [
          "Als je bij een vak zonder vraag komt",
          "Als je de eerste vraag hebt gelezen",
          "Als je alle vakjes hebt gelezen",
          "Als je bij een nee-pijl komt",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Na de eerste vraag volg je nog een pijl. Ben je dan al klaar?",
          null,
          "Na een nee-pijl kan er nog een vraag komen. Ben je dan klaar?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Je loopt een pad",
              tekst: "Je begint bovenaan en volgt bij elke vraag de ja- of nee-pijl.",
            },
            {
              titel: "Het einde",
              tekst: "Je bent klaar als je bij een **eindvak** komt: een vak waar geen vraag meer in staat.",
            },
            {
              titel: "Niet alles lezen",
              tekst: "Je hoeft niet alle vakjes te lezen. De takken die niet bij jouw keuze horen, sla je over.",
            },
          ],
          woorden: [
            {
              woord: "eindvak",
              uitleg: "Vak zonder vraag: daar ben je klaar.",
            },
            {
              woord: "pad",
              uitleg: "De weg die je door de beslisboom volgt.",
            },
          ],
          theorie: "Toets-tip: blijf pijlen volgen tot er geen vraag meer staat. Dat vak is je antwoord.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Spanning? Ja → Eng? Nee → detective. In 'detective' staat geen vraag: klaar.",
            },
            {
              type: "stap",
              tekst: "Zon? Nee → Binnen blijven? Ja → lezen. Klaar.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Geen vraag meer = klaar.",
            },
          ],
          niveaus: {
            basis: "Klaar bij een vak zonder vraag: het eindvak.",
            simpeler: "Geen vraag meer? Dan ben je klaar.",
            nogSimpeler: "Eindvak = klaar.",
          },
        },
      },
    ],
  },

  {
    title: "Schema's interpreteren — informatie eruit halen",
    explanation: "Bij de Doorstroomtoets krijg je vaak een **schema/diagram met tekst en pijlen** en moet je een **vraag beantwoorden**.\n\n**Aanpak**:\n1. **Lees titel** — waar gaat het over?\n2. **Lees legenda** — wat betekenen de symbolen/kleuren?\n3. **Scan het schema** globaal.\n4. **Lees pas dan de vraag**.\n5. **Vind het juiste vakje** of pad.\n6. **Antwoord**.\n\n**Voorbeeld — voedselketen**:\n```\nGras → Konijn → Vos\n```\n• Gras wordt door konijn gegeten.\n• Konijn wordt door vos gegeten.\n• Pijl = 'wordt gegeten door'.\n\n**Vragen**:\n• 'Wat eet vos?' → konijn.\n• 'Wat eet konijn?' → gras.\n• 'Wat gebeurt als alle vossen weg zijn?' → konijnen worden niet meer gegeten → meer konijnen → minder gras.\n\n**Soorten schema's bij de Doorstroomtoets**:\n• **Stamboom** *(familie)*: opa-oma → vader → kind.\n• **Voedselketen** *(natuur)*: planten → planteneter → vleeseter.\n• **Productie-keten** *(spullen)*: katoen → garen → kleren.\n• **Tijdslijn**: jaartal-overzicht.\n\n**Toets-tip**:\nVeel schema-vragen vereisen logisch nadenken: 'wat als X wegvalt?'. Volg de pijlen na om het effect te bepalen.",
    checks: [
      {
        q: "Voedselketen: gras → konijn → vos.\n\n**Wat eet vos**?",
        options: ["konijn","gras","vlinder","vos"],
        answer: 0,
        wrongHints: [null,"Kijk welk dier direct vóór de vos in de keten staat.","Niet in dit schema.","Vos eet zichzelf niet."],
      },
      {
        q: "Voedselketen: zaad → muis → uil.\n\n**Wat als muizen verdwijnen**?",
        options: ["Uilen krijgen minder voedsel","Zaden eten meer","Niets","Konijnen komen"],
        answer: 0,
        wrongHints: [null,"Zaden eten niets.","Wel iets — kijk wie er van de muizen afhankelijk is.","Konijnen staan niet in deze keten."],
      },
      {
        q: "Productie-keten: katoen → garen → kleren.\n\n**Wat gebeurt eerst**?",
        options: ["Katoen verbouwen","Kleren maken","Garen spinnen","Verkopen"],
        answer: 0,
        wrongHints: [null,"Komt later.","Komt na katoen.","Komt nog later."],
      },
      {
        q: "Stamboom: Opa Jan → Vader Piet → Kind Tom.\n\n**Wie is opa van Tom**?",
        options: ["Jan","Piet","Tom","Geen"],
        answer: 0,
        wrongHints: [null,"Vader van Tom.","Tom is het kind.","Wel — volg de pijlen terug vanaf Tom."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Voedselketen: blad → rups → koolmees.\n(De pijl betekent 'wordt gegeten door'.)\n\nEr komen veel **meer** koolmezen. Wat gebeurt er dan met de rupsen?",
        options: [
          "Er worden meer rupsen opgegeten",
          "Er komen meer rupsen bij",
          "De rupsen eten de koolmezen op",
          "Er verandert niets aan de rupsen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Wie eet de rupsen? En wat gebeurt er als die er meer zijn?",
          null,
          "Volg de pijl. Wie eet wie?",
        ],
      },
      {
        q: "Stamboom (de pijl betekent 'heeft als kind'):\nKees → Bram en Ilse\nBram → Lars\n\nWat is **Ilse** van Lars?",
        options: ["Zijn tante", "Zijn zus", "Zijn moeder", "Zijn oma"],
        answer: 0,
        wrongHints: [
          null,
          "Heeft Ilse dezelfde vader als Lars?",
          "Van wie is Lars het kind: van Bram of van Ilse?",
          null,
        ],
      },
      {
        q: "Productieketen: graan → meel → brood.\n\nEen jaar lang is er **geen graan**. Wat volgt uit deze keten?",
        options: [
          "Er is ook geen meel en geen brood",
          "Er is wel meel, maar geen brood",
          "Er is juist meer brood",
          "Er verandert niets",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Waar wordt meel van gemaakt in deze keten?",
          null,
          "Volg de pijlen. Wat heeft brood nodig?",
        ],
      },
      {
        q: "Tijdslijn van Noor:\n2016 geboren → 2020 naar school → 2022 zwemdiploma → 2024 verhuisd.\n\nWat gebeurde er **tussen** de start op school en de verhuizing?",
        options: ["Ze haalde haar zwemdiploma", "Ze werd geboren", "Ze verhuisde", "Ze ging naar school"],
        answer: 0,
        wrongHints: [
          null,
          "Was dat vóór of na de start op school?",
          null,
          "Dit is een van de twee grenzen. Wat zit ertussen?",
        ],
      },
    ],
  },

  {
    title: "Eindopdracht — schema's mix",
    explanation: "Mix-toets: stappenplan, beslisboom, schema-interpretatie.",
    checks: [
      {
        q: "Recept-stappen: 1) Boter smelten. 2) Eieren breken in kom. 3) Klutsen. 4) Bakken in pan.\n\n**Wat doe je direct na klutsen**?",
        options: ["Bakken in pan","Boter smelten","Eieren breken","Niets"],
        answer: 0,
        wrongHints: [null,"Stap 1.","Stap 2.","Wel — kijk welke stap na klutsen staat."],
      },
      {
        q: "Beslisboom: 'Is het warm? Ja → korte broek. Nee → lange broek.'\n\nHet is **koud**. Wat draag je?",
        options: ["Lange broek","Korte broek","Allebei","Niets"],
        answer: 0,
        wrongHints: [null,"Bij 'warm'.","Eén keuze.","Wel iets aan."],
      },
      {
        q: "Voedselketen: bladluizen → lieveheersbeestjes → vogels.\n\n**Wie eet de bladluizen**?",
        options: ["Lieveheersbeestjes","Vogels","Niets","Bladluizen onderling"],
        answer: 0,
        wrongHints: [null,"Vogels staan een stap verder in de keten, niet direct ná bladluizen.","Niet rechtstreeks — kijk welke pijl ER NA bladluizen volgt.","Niet in dit schema."],
      },
      {
        q: "Stappen: 1) Computer aan. 2) Browser openen. 3) Site bezoeken. 4) Iets bestellen.\n\n**Welke stap mist** voor het betalen?",
        options: ["Betaalmethode kiezen","Computer uit","Browser sluiten","Geen"],
        answer: 0,
        wrongHints: [null,"Hoort niet hier.","Idem.","Wel — betalen ontbreekt."],
      },
      {
        q: "Tijdslijn: 1900 — auto. 1950 — TV. 1990 — internet. 2007 — smartphone.\n\n**Wat kwam eerst**?",
        options: ["Auto","TV","Internet","Smartphone"],
        answer: 0,
        wrongHints: [null,"Kwam later.","Veel later.","Veel later."],
      },
      {
        q: "Een **stappenplan** is gegeven: 1) Lees de hele opgave. 2) Onderstreep belangrijke woorden. 3) Maak schets. 4) Reken uit. 5) Controleer antwoord.\n\nWelke stap is gericht op **niet rekenen maar BEGRIJPEN**?",
        options: ["Stap 1 (lees de hele opgave)","Stap 4 (reken uit)","Stap 5 (controleer)","Geen — alle gaan over rekenen"],
        answer: 0,
        wrongHints: [null, "Dat is uitrekenen, niet begrijpen.", "Controle is na rekenen, niet begrijpen vooraf.", "Wel — kijk naar wat je doet vóórdat je gaat rekenen."],
        uitlegPad: {
          stappen: [
            { titel: "Stappenplan = volgorde", tekst: "Een stappenplan helpt je iets **systematisch + zonder fout** te doen. Vooral handig bij:\n• Redactiesommen (lange verhaal-vragen)\n• Examen-opgaven\n• Practicum biologie/scheikunde\n• Een recept\n\nEerste stap is bijna ALTIJD: **lees rustig, begrijp wat er gevraagd wordt** — niet meteen aan rekenen!" },
            { titel: "Toets-tip: 5-stappen-rekenen", tekst: "**Bekend stappenplan rekenen** (uit veel rekenboeken):\n1. **Lees + begrijp** vraag\n2. **Onderstreep** getallen + sleutelwoorden\n3. **Schets** (als handig)\n4. **Reken** uit\n5. **Controleer** antwoord (klopt eenheid? Past schatting?)\n\nVeelgemaakte fout: stap 4 meteen doen zonder 1+2. Dan reken je iets anders dan gevraagd." },
            { titel: "Studievaardigheid voor de Doorstroomtoets", tekst: "**Studievaardigheid** (slim leren + werken) helpt bij de Doorstroomtoets. Stappenplannen vallen daaronder:\n• **Lezen** (begrijpend lezen-vragen)\n• **Rekenen** (5-stappen)\n• **Wereldoriëntatie** (informatie zoeken)\n\nEen vaste aanpak helpt je om minder slordige fouten te maken." },
          ],
          woorden: [
            { woord: "stappenplan", uitleg: "Lijst van stappen in vaste volgorde voor een taak." },
            { woord: "studievaardigheid", uitleg: "Vaardigheid om effectief te leren + werken." },
            { woord: "structureren", uitleg: "Iets ordenen in vaste delen of stappen." },
          ],
          theorie: "Handige stappenplan-types:\n• **Rekenen** — 5-stappen (lees → markeer → schets → reken → check)\n• **Schrijven** — opzet → uitwerken → herlezen → fout-check\n• **Lezen** — globaal lezen → vraag begrijpen → terug naar tekst → antwoord kiezen\n• **Probleem oplossen** — wat weet ik? Wat zoek ik? Welke stappen?",
          voorbeelden: [
            { type: "feit", tekst: "Schaak-grootmeesters gebruiken óók stappenplannen (positie analyseren → opties bedenken → beste zet → uitvoeren). Gestructureerd denken werkt overal." },
          ],
          basiskennis: [{ onderwerp: "Niet 'tijd verspillen'", uitleg: "Stap 1 (lezen) lijkt vertraging maar BESPAART tijd: betere antwoorden, minder fouten, minder herrekenen." }],
          niveaus: { basis: "Stap 1 = lezen.", simpeler: "Stappenplan stap 1 is altijd: lees + begrijp. Pas dan rekenen. Toets-tip: niet meteen tellen, eerst de vraag SNAPPEN.", nogSimpeler: "Stap 1" },
        },
      },
      {
        q: "**Beslisboom voor schooladvies VMBO/HAVO/VWO**:\n• Toetsscore 525-535 → VMBO-GL/TL\n• 536-545 → HAVO\n• 546+ → VWO\n\n**Welk advies bij score 540**?",
        options: ["HAVO","VMBO-GL/TL","VWO","Geen"],
        answer: 0,
        wrongHints: [null, "Te laag — 540 zit hoger dan VMBO-grens.", "Te hoog — VWO begint pas bij 546.", "Wel een advies."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een beslisboom?", tekst: "Een **beslisboom** is een schema waarmee je via **JA/NEE-vragen** of **getallen-vergelijkingen** tot een conclusie komt.\n\nVoorbeeld:\n```\nIs score ≥ 546? → JA → VWO\n                  → NEE → Is score ≥ 536? → JA → HAVO\n                                            → NEE → VMBO\n```\n\nVeel gebruikt bij: schooladvies, medische diagnose, kledings-keuze (warm/koud), recept-keuze." },
            { titel: "Stap voor stap: score 540", tekst: "Voor score **540** gaan we door de boom:\n1. Is 540 ≥ 546? **NEE** (540 < 546, geen VWO)\n2. Is 540 ≥ 536? **JA** (540 > 536) → **HAVO** ✓\n\nDe regels:\n• 525-535: **VMBO-GL/TL**\n• 536-545: **HAVO**\n• 546+: **VWO**\n\n540 zit in 536-545 → HAVO." },
            { titel: "Toets-feit: schooladvies in NL", tekst: "**Belangrijk**: dit voorbeeld is VERZONNEN. Echt schooladvies hangt af van **veel factoren**:\n• Oordeel van de leerkracht en school\n• Doorstroomtoets-score\n• Motivatie + werkhouding\n• Sociale + emotionele ontwikkeling\n\nHet **schooladvies van de school** is leidend. Scoort een kind op de Doorstroomtoets hoger, dan moet de school het advies naar boven bijstellen (tenzij dat niet in het belang van het kind is)." },
          ],
          woorden: [
            { woord: "beslisboom", uitleg: "Schema dat via vragen of getal-vergelijkingen tot een keuze leidt." },
            { woord: "Doorstroomtoets", uitleg: "Officiële naam sinds 2024 voor de vroegere 'eindtoets' in groep 8." },
            { woord: "schooladvies", uitleg: "Aanbeveling van basisschool voor middelbare school (VMBO/HAVO/VWO)." },
          ],
          theorie: "Beslisboom-stappen (algemeen):\n1. **Start bij wortel** (eerste vraag)\n2. **Beantwoord** met JA/NEE of getal-vergelijking\n3. **Volg de tak** die past\n4. **Herhaal** tot je aan een bladknoop (eind-conclusie) komt\n\nGebruikt in: medische diagnose, computer-algoritmen, recept-keuze, route-planning.",
          voorbeelden: [
            { type: "voorbeeld", tekst: "Beslisboom 'wat trek ik aan?': Regent het? → JA → jas + paraplu. → NEE → Koud? → JA → trui. → NEE → T-shirt." },
            { type: "voorbeeld", tekst: "Beslisboom 'vis-naam': Heeft schubben? → Heeft tentakels? etc. → Zo kunnen biologen soorten onderscheiden." },
          ],
          basiskennis: [{ onderwerp: "Onthoud grenzen", uitleg: "Bij beslisboom-vragen op de Doorstroomtoets: kijk goed of grens INCLUSIEF is. '≥ 536' betekent 536 telt mee. '> 536' niet." }],
          niveaus: { basis: "HAVO.", simpeler: "540 valt in 536-545 → HAVO-advies. Beslisboom: te laag voor VWO (≥546), te hoog voor VMBO (525-535).", nogSimpeler: "HAVO" },
        },
      },
      {
        q: "Een **diagram**: pijl van 'zon' naar 'plant', pijl van 'plant' naar 'koe', pijl van 'koe' naar 'mens'.\n\n**Wat stelt dit voor**?",
        options: ["Voedselketen","Familie-stamboom","Tijdslijn","Recept"],
        answer: 0,
        wrongHints: [null, "Niet — geen familieleden.", "Niet — geen jaren genoemd.", "Niet — geen voedselbereiding."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een voedselketen?", tekst: "Een **voedselketen** toont wie wie eet in de natuur. De **pijl** wijst naar **wie er EET** (zo stroomt de energie):\n• Zon → plant (plant gebruikt zonne-energie via fotosynthese)\n• Plant → koe (koe eet plant)\n• Koe → mens (mens eet koe = vlees)\n\nDe energie **stroomt door** de keten — elke stap verliest energie als warmte. Daarom: weinig roofdieren bovenaan, veel planten onderaan." },
            { titel: "Onderdelen voedselketen", tekst: "**Producenten** (begin van de keten): planten — maken energie van zon via **fotosynthese**.\n**Consumenten**:\n• **Eerste-orde** (primair) — eten planten: koeien, konijnen, sprinkhanen\n• **Tweede-orde** (secundair) — eten primaire consumenten: vossen, kippen, mensen\n• **Derde-orde** (tertiair) — top-roofdieren: tijger, haai, adelaar\n\n**Afbrekers**: bacteriën + schimmels die dode planten/dieren opruimen → terug naar grond → nieuwe planten." },
            { titel: "Toets-feit: voedselweb vs keten", tekst: "**Voedselketen** = simpel, 1 lijn (zon → A → B → C).\n**Voedselweb** = realistischer, meerdere ketens door elkaar.\n\nBv. een vos eet niet alleen konijnen, maar ook muizen, vogels, bessen. Konijnen worden gegeten door vossen, vogels, mensen. Tekening: ALLE pijlen samen = web.\n\nToetsen vragen vaak: 'Wat gebeurt als roofdier verdwijnt?' Antwoord: prooi-populatie stijgt → plant-populatie daalt → systeem uit balans." },
          ],
          woorden: [
            { woord: "voedselketen", uitleg: "Lijn die toont wie wie eet in natuur. Energie stroomt door." },
            { woord: "fotosynthese", uitleg: "Proces waarbij planten zonlicht + CO₂ + water omzetten in suiker (energie) + zuurstof." },
            { woord: "consument", uitleg: "Dier dat planten of andere dieren eet (maakt zelf geen voedsel)." },
            { woord: "afbreker", uitleg: "Bacterie/schimmel die dood materiaal opruimt." },
          ],
          theorie: "Toets-tip: voedselketen lezen\n• **A → B betekent 'A wordt gegeten door B'**: de energie stroomt in de richting van de pijl\n• Bij elke nieuwe schakel: ~90% energie verloren als warmte (ecologische piramide)",
          voorbeelden: [
            { type: "voorbeeld", tekst: "Eenvoudige voedselketen tuin: blad → rups → vogel → kat." },
            { type: "voorbeeld", tekst: "Zee-voedselketen: plankton → kleine vis → tonijn → mens." },
          ],
          basiskennis: [{ onderwerp: "Niet schaal-keten", uitleg: "Voedselketen = wie eet wie. Niet 'wie is groter' (anders zou olifant bovenaan staan)." }],
          niveaus: { basis: "Voedselketen.", simpeler: "Dit diagram toont een voedselketen: zonne-energie → plant → koe → mens. Pijl = wat geeft energie aan wat.", nogSimpeler: "Voedselketen" },
        },
      },
      { q: "Wat is een **beslisboom**?", options: ["Schema met ja/nee-vragen die leidt naar antwoord","Een boom waar je onder zit om na te denken","Een stappenplan zonder vragen","Een tijdslijn met jaartallen"], answer: 0, wrongHints: [null, "Niet.", "Niet — heeft vragen.", "Niet — geen tijd."] },
      { q: "Wat hoort op een **tijdslijn**?", options: ["Gebeurtenissen in chronologische volgorde","Willekeurige feiten door elkaar","Recepten met ingrediënten","Tekeningen zonder tekst"], answer: 0, wrongHints: [null, "Niet — volgorde maakt uit.", "Niet relevant.", "Niet specifiek."] },
      { q: "Een stappenplan **'pannenkoek bakken'** begint met?", options: ["Beslag mengen","Op tafel zetten","Pan wassen","Eieren scheiden"], answer: 0, wrongHints: [null, "Laatste stap.", "Dat hoort niet bij het bakken zelf.", "Bij sommige recepten, maar niet altijd eerste."] },
      { q: "Bij **'A → B'** in voedselketen?", options: ["A wordt door B gegeten","B leeft naast A","A en B zijn vrienden","Geen betekenis"], answer: 0, wrongHints: [null, "Niet — pijl betekent eten/energie.", "Niet.", "Wel — waar staat de pijl voor in een voedselketen?"] },
      { q: "Wat is een **stroomdiagram**?", options: ["Schema met stappen en beslissingen","Tabel","Tijdslijn","Tekening"], answer: 0, wrongHints: [null, "Geen schema.", "Geen beslissingen.", "Niet schematisch."] },
      { q: "Welk symbool gebruik je voor een **ja/nee-vraag** in beslisboom?", options: ["Ruit","Rechthoek","Cirkel","Driehoek"], answer: 0, wrongHints: [null, "Dat is actie/stap.", "Dat is begin/eind.", "Niet standaard."] },
      { q: "Welk symbool voor **begin/eind** in stroomdiagram?", options: ["Cirkel of ovaal","Ruit","Rechthoek","Pijl"], answer: 0, wrongHints: [null, "Beslissing.", "Actie.", "Verbinding."] },
      { q: "In een **tabel** staan?", options: ["Rijen + kolommen met data","Verhalen","Pijlen","Recepten"], answer: 0, wrongHints: [null, "Geen verhaal.", "Niet alleen pijlen.", "Soms maar niet altijd."] },
      { q: "Wat is de **eerste kolom** in een tabel vaak?", options: ["Categorieën/labels","Willekeurige getallen","De totalen","Reclame"], answer: 0, wrongHints: [null, "Niet willekeurig.", "Vaak rechts.", "Niet."] },
      { q: "Welk schema toont **hiërarchie** (boven-onder)?", options: ["Boomdiagram","Tijdslijn","Tabel","Beslisboom"], answer: 0, wrongHints: [null, "Tijd-volgorde.", "Data-overzicht.", "Wel boom, maar voor keuzes."] },
      { q: "Welke volgorde hoort in **stappenplan 'klaarmaken brood'**?", options: ["Brood pakken → besmeren → eten","Eten → brood pakken → besmeren","Besmeren → brood pakken → eten","Eten → besmeren → brood pakken"], answer: 0, wrongHints: [null, "Niet — eerst pakken.", "Niet — eerst brood.", "Niet — laatste = eten."] },
      { q: "Wat zoek je in een **legenda** bij een schema?", options: ["Wat de symbolen betekenen","De auteur","De datum","De prijs"], answer: 0, wrongHints: [null, "Auteur staat los van de legenda.", "Datum is bij-info, niet legenda-werk.", "Prijs hoort niet in een legenda."] },
      { q: "Bij een **flowchart**: wat doe je bij een ruit?", options: ["Antwoord op ja/nee-vraag kiezen","Stap uitvoeren","Stoppen","Nieuw begin"], answer: 0, wrongHints: [null, "Dat is rechthoek.", "Dat is ovaal-eind.", "Dat is ovaal-begin."] },
      { q: "Wat is een **Venn-diagram**?", options: ["Cirkels die overlappen om gemeenschappelijk te tonen","Een tijdslijn met jaartallen","Een boom met vertakkingen","Een tabel met rijen en kolommen"], answer: 0, wrongHints: [null, "Tijdslijn = volgorde van data, geen cirkels.", "Boom = vertakkingen, geen overlap.", "Tabel = rijen + kolommen, geen cirkels."] },
      { q: "Wat is de zin 'kijk in tabel 2' in een tekst?", options: ["Een verwijzing/referentie","Een mening","Een conclusie","Onzin"], answer: 0, wrongHints: [null, "Niet — feitelijk.", "Niet conclusie.", "Wel zinvol."] },
      { q: "Een **organogram** toont?", options: ["Wie boven/onder wie staat in organisatie","Hoe laat het is in andere landen","Welke stappen een recept heeft","Hoe een verhaal afloopt"], answer: 0, wrongHints: [null, "Tijd toon je in een tijdslijn.", "Recept = stappenplan, geen organisatie.", "Verhaal = tekst, geen schema."] },
      { q: "Wat doet een **pijl** in een stappenplan?", options: ["Wijst naar volgende stap","Verbiedt","Toont fouten","Markeert begin"], answer: 0, wrongHints: [null, "Niet.", "Niet relevant.", "Niet specifiek."] },
      { q: "Bij **chronologisch** schema staan dingen op?", options: ["Volgorde van tijd","Alfabet","Grootte","Willekeurig"], answer: 0, wrongHints: [null, "Alfabetisch sorteer je een namenlijst, niet chronologisch.", "Op grootte is op afmeting, niet op tijd.", "Chronologisch heeft juist WEL een volgorde."] },
      { q: "Wat helpt het meest om **stappenplan** te onthouden?", options: ["Stappen genummerd zien","Willekeurige kleuren","Lange zin per stap","Tekening zonder tekst"], answer: 0, wrongHints: [null, "Niet.", "Te lang om snel te zien.", "Tekst helpt ook."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const schemasStappenplannenPo = {
  id: "schemas-stappenplannen-po",
  title: "Schema's en stappenplannen — Doorstroomtoets groep 5-8",
  emoji: "📋",
  level: "groep5-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Studievaardigheden — informatiebronnen lezen",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
  ],
  intro:
    "Schema's, stappenplannen, beslisbomen en tijdslijnen lezen. Doorstroomtoets-stijl. ~12 min.",
  triggerKeywords: [
    "schema","stappenplan","beslisboom","tijdslijn","voedselketen",
    "diagram","studievaardigheden","informatiebronnen","tabel",
  ],
  chapters,
  steps,
};

export default schemasStappenplannenPo;
