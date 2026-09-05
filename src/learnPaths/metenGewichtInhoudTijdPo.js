// Leerpad: Meten — Gewicht, Inhoud (liters) en Tijd — groep 7-8 PO.
// Doorstroomtoets-onderdeel rekenen/meten. Bewust GEEN overlap met
// matenOmtrekOppervlaktePo (dat doet lengte/oppervlakte/kubieke inhoud).
// Hier: gewicht (g/ons/pond/kg), inhoud in liters (ml/cl/dl/l) en tijd
// (s/min/uur, klokrekenen). Dagelijks-leven-context.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter (opties shufflen) —
// ze leren de methode. 4 hoofdstukken × ~5 checks. Referentieniveau 1F/1S.

const chapters = [
  { letter: "A", title: "Gewicht (gram, ons, pond, kilo)", emoji: "⚖️", from: 0, to: 0 },
  { letter: "B", title: "Inhoud in liters (ml, cl, dl, l)", emoji: "🥤", from: 1, to: 1 },
  { letter: "C", title: "Tijd (seconde, minuut, uur)", emoji: "⏰", from: 2, to: 2 },
  { letter: "D", title: "In het echt: boodschappen, recept & reizen", emoji: "🛒", from: 3, to: 3 },
];

const steps = [
  // ─── A. Gewicht ───────────────────────────────────────────
  {
    title: "Gewicht omrekenen — gram, ons, pond, kilo",
    explanation:
      "**Gewicht-eenheden die je in de winkel tegenkomt:**\n" +
      "• **mg** (milligram) — heel klein, bijv. een medicijn.\n" +
      "• **g** (gram) — basis voor boodschappen.\n" +
      "• **ons** — 1 ons = **100 g**.\n" +
      "• **pond** — 1 pond = **500 g** (een half kilo).\n" +
      "• **kg** (kilogram, 'kilo') — 1 kg = **1000 g**.\n\n" +
      "**Handige omrekentabel:**\n" +
      "• 1 kg = 1000 g = 10 ons = 2 pond.\n" +
      "• 1 pond = 500 g = 5 ons.\n" +
      "• 1 ons = 100 g.\n\n" +
      "**Naar gram toe** ga je naar een kleinere eenheid → je krijgt een **groter getal** (× 1000 bij kg). **Naar kilo toe** → kleiner getal (÷ 1000).\n\n" +
      "**Valkuil:** een 'ons' is in Nederland 100 g (niet hetzelfde als het Engelse ounce). En 1 pond = 500 g, dus 2 pond = 1 kg.",
    checks: [
      {
        q: "**2,5 kg** is hoeveel gram?",
        options: ["2500 g", "250 g", "25 000 g", "25 g"],
        answer: 0,
        wrongHints: [null, "Kijk nog eens: 1 kg is hoeveel gram?", null, "Dat zou minder dan een ons zijn — klopt dat voor 2,5 kilo?"],
        uitlegPad: {
          stappen: [
            { titel: "Ken de omrekening", tekst: "1 kilo (kg) is altijd 1000 gram (g). Dat basisgetal heb je nodig bij elke gewicht-som." },
            { titel: "Komma opschuiven", tekst: "Bij keer 1000 schuift de komma drie plekken naar rechts. Schuif de komma van 2,5 drie plekken op en kijk welk getal je krijgt." },
          ],
          woorden: [{ woord: "kilogram (kg)", uitleg: "De volledige naam voor 'kilo' — een gewicht van 1000 gram." }],
          theorie: "**Gewicht** meet je met gram, ons, pond en kilo. Van een grote naar een kleine eenheid **vermenigvuldig** je (bijvoorbeeld kilo naar gram: × 1000); van klein naar groot **deel** je juist. Een kommagetal zoals 2,5 vertelt je dat er een half méér bij komt dan het hele getal ervoor.",
          voorbeelden: [
            { type: "winkel", tekst: "Een zak aardappelen van 5 kg weegt evenveel als 5000 g." },
            { type: "thuis", tekst: "Een pak boter van 250 g is een kwart kilo." },
          ],
          basiskennis: [{ onderwerp: "Kommagetallen bij gewicht", uitleg: "2,5 kg betekent 2 hele kilo's plus een halve kilo erbij." }],
          niveaus: {
            basis: "1 kilo is 1000 gram. Reken 2,5 × 1000 uit.",
            simpeler: "Keer 1000 betekent: de komma drie plaatsen naar rechts. 2,5 → 2500.",
            nogSimpeler: "Denk: 1 kg = 1000 g, 2 kg = 2000 g. Hoeveel is dan een halve kilo erbij?",
          },
        },
      },
      {
        q: "Hoeveel gram is **1 pond**?",
        options: ["500 g", "1000 g", "100 g", "250 g"],
        answer: 0,
        wrongHints: [null, "Dat is een hele kilo — een pond is de helft daarvan.", "Dat is een ons.", null],
        uitlegPad: {
          stappen: [
            { titel: "Pond is een oude maat", tekst: "Een pond is een gewicht dat je vooral bij groente, fruit en vlees tegenkomt. Het is de helft van een kilo." },
            { titel: "Reken de helft uit", tekst: "1 kg = 1000 g. Een pond is precies de helft daarvan — hoeveel gram is de helft van 1000?" },
          ],
          woorden: [{ woord: "pond", uitleg: "Een ouderwetse gewichtsmaat die je nog vaak op de markt hoort — een pond is de helft van een kilo." }],
          theorie: "**Pond en ons** zijn oudere gewichtsmaten die in Nederland nog veel gebruikt worden naast kilo en gram. Een pond is de helft van een kilo, een ons is een tiende van een kilo. Ze zijn handig omdat je bij de kaas- of groenteboer snel in ronde getallen kunt rekenen.",
          voorbeelden: [
            { type: "markt", tekst: "Bij de groenteboer vraag je vaak om 'een pond tomaten' in plaats van 500 gram." },
            { type: "thuis", tekst: "Twee pond gehakt samen is precies 1 kg, genoeg voor een grote ovenschotel." },
          ],
          basiskennis: [{ onderwerp: "De helft berekenen", uitleg: "De helft van een getal krijg je door het door 2 te delen." }],
          niveaus: {
            basis: "Een pond is een half kilo. Een halve kilo is 500 g.",
            simpeler: "1 kg = 1000 g. De helft daarvan is een pond.",
            nogSimpeler: "2 pond = 1 kilo = 1000 g. Hoeveel is dan 1 pond?",
          },
        },
      },
      {
        q: "**3 ons** kaas is hoeveel gram?",
        options: ["300 g", "30 g", "3000 g", "150 g"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1 ons is al 100 g.", "Dat zou 3 kilo zijn.", null],
        uitlegPad: {
          stappen: [
            { titel: "Ons is honderd gram", tekst: "Een ons is een vaste maat: elke ons weegt 100 gram, hoeveel ons je ook hebt." },
            { titel: "Tel de onsen op", tekst: "Je hebt er 3. Tel drie keer 100 gram bij elkaar op — wat is de uitkomst?" },
          ],
          woorden: [{ woord: "ons", uitleg: "Een Nederlandse gewichtsmaat van 100 gram — vaak gebruikt bij kaas, vleeswaren en snoep." }],
          theorie: "**Ons, pond en kilo** zijn drie handige tussenmaten voor gewicht. Een ons is 100 g, een pond is 500 g en een kilo is 1000 g. Weet je hoeveel keer een eenheid in de andere past, dan kun je makkelijk omrekenen door te vermenigvuldigen of te delen.",
          voorbeelden: [
            { type: "winkel", tekst: "Bij de kaaswinkel vraag je vaak om 'twee ons belegen kaas'." },
            { type: "thuis", tekst: "Een handje chips weegt ongeveer een ons." },
          ],
          basiskennis: [{ onderwerp: "Herhaald optellen", uitleg: "Iets 'keer 3 nemen' kun je ook doen door het getal drie keer bij elkaar op te tellen." }],
          niveaus: {
            basis: "Elke ons is 100 g. Tel 3 keer 100 op.",
            simpeler: "1 ons = 100 g, 2 ons = 200 g … ga zo door tot 3 ons.",
            nogSimpeler: "100 + 100 + 100 = ?",
          },
        },
      },
      {
        q: "**750 g** is hoeveel kilo?",
        options: ["0,75 kg", "7,5 kg", "0,075 kg", "75 kg"],
        answer: 0,
        wrongHints: [null, "Dat zou 7500 g zijn — dat is veel te zwaar.", null, "Onmogelijk: 75 kg is zwaarder dan jij."],
        uitlegPad: {
          stappen: [
            { titel: "Terug naar kilo", tekst: "Van gram naar kilo ga je naar een grotere eenheid, dus je moet delen: deel door 1000." },
            { titel: "Komma naar links", tekst: "Bij delen door 1000 schuift de komma drie plekken naar links. Schuif de komma van 750 drie plekken op — welk getal krijg je?" },
          ],
          woorden: [{ woord: "kommagetal", uitleg: "Een getal met een komma erin, zoals 0,75 — het laat een deel van een geheel zien." }],
          theorie: "**Terugrekenen naar een grotere eenheid** doe je door te delen door hetzelfde getal waarmee je vermenigvuldigde. Gram naar kilo: deel door 1000. Zo'n deling geeft vaak een kommagetal, omdat het gewicht dan minder is dan één hele kilo.",
          voorbeelden: [
            { type: "winkel", tekst: "Een pak spaghetti van 500 g weegt 0,5 kg — minder dan een hele kilo." },
            { type: "sport", tekst: "Een sporthorloge van 45 g weegt 0,045 kg." },
          ],
          basiskennis: [{ onderwerp: "1000 g = 1 kg", uitleg: "Dit basisgetal gebruik je bij elke omrekening tussen gram en kilo, in beide richtingen." }],
          niveaus: {
            basis: "1000 g = 1 kg. 750 g is net iets minder dan een kilo.",
            simpeler: "Deel door 1000: de komma drie plaatsen naar links. 750 → 0,75.",
            nogSimpeler: "750 is driekwart van 1000. Hoe schrijf je driekwart als een kommagetal?",
          },
        },
      },
      {
        q: "Je koopt **1 kg appels** en **3 ons druiven**. Hoeveel gram fruit samen?",
        options: ["1300 g", "1003 g", "4000 g", "1030 g"],
        answer: 0,
        wrongHints: [null, "Let op: 3 ons is niet 3 gram.", "Dat zou 4 kilo zijn.", null],
        uitlegPad: {
          stappen: [
            { titel: "Maak dezelfde eenheid", tekst: "Je kunt kilo's en ons niet zomaar bij elkaar optellen — reken beide eerst om naar gram." },
            { titel: "Los per deel om", tekst: "1 kg = 1000 g en 3 ons = 300 g." },
            { titel: "Tel op", tekst: "Tel de twee bedragen in gram bij elkaar op — hoeveel gram fruit is dat samen?" },
          ],
          woorden: [{ woord: "samen", uitleg: "Als je 'samen' leest bij twee hoeveelheden, moet je ze optellen nadat je ze in dezelfde eenheid hebt gezet." }],
          theorie: "Bij een vraag met **twee verschillende gewicht-eenheden** (zoals kilo én ons) mag je nooit direct optellen. Zet eerst alles om naar dezelfde eenheid — meestal gram, omdat dat de kleinste en meest gebruikte eenheid is — en tel daarna pas.",
          voorbeelden: [
            { type: "boodschappen", tekst: "Je koopt 500 g rijst en 2 ons linzen — samen reken je dat om naar 500 + 200 = 700 g." },
            { type: "school", tekst: "Bij een projectweek weeg je twee knutselwerken: 1 pond en 300 g, samen omgerekend naar gram." },
          ],
          basiskennis: [{ onderwerp: "Eerst gelijk maken, dan rekenen", uitleg: "Bij optellen en aftrekken moeten alle getallen in dezelfde eenheid staan." }],
          niveaus: {
            basis: "Maak beide eerst gram: 1 kg = 1000 g, 3 ons = 300 g. Tel dan op.",
            simpeler: "1000 g appels + 300 g druiven samen optellen.",
            nogSimpeler: "1000 + 300 = ?",
          },
        },
      },
      {
        q: "Hoeveel **ons** is **1 kg**?",
        options: ["10 ons", "100 ons", "2 ons", "1000 ons"],
        answer: 0,
        wrongHints: [null, "100 ons zou 10 kg zijn (100 × 100 g).", "Eén ons is 100 gram. Hoeveel ons passen er dan in 1 kilo?", "Dat is veel te zwaar — reken nog eens hoeveel ons in één kilo gaan."],
        uitlegPad: {
          stappen: [
            { titel: "Zet beide om naar gram", tekst: "1 ons is 100 g. 1 kilo is 1000 g. Nu heb je beide in dezelfde eenheid." },
            { titel: "Hoe vaak past het erin?", tekst: "Reken uit hoe vaak 100 gram in 1000 gram past — dat is het aantal onsen in een kilo." },
          ],
          woorden: [{ woord: "passen in", uitleg: "'Hoe vaak past iets in een ander getal' betekent: hoe vaak kun je het kleinere getal erin delen." }],
          theorie: "Om te weten hoeveel kleine eenheden in een grote eenheid passen, zet je beide om naar dezelfde maat en **deel** je de grote door de kleine. Dat werkt voor gewicht net zo goed als voor inhoud of tijd.",
          voorbeelden: [
            { type: "school", tekst: "Hoeveel keer 100 ml past er in 1 liter? Dat reken je op dezelfde manier uit." },
            { type: "winkel", tekst: "Een winkelier telt hoeveel onsjes kaas hij uit een blok van 1 kg kan snijden." },
          ],
          basiskennis: [{ onderwerp: "Delen om te tellen", uitleg: "Delen vertelt je hoe vaak een klein getal in een groot getal past." }],
          niveaus: {
            basis: "1 kg = 1000 g. 1 ons = 100 g. Hoeveel ons past in 1 kg?",
            simpeler: "1000 ÷ 100 = 10 ons.",
            nogSimpeler: "1 kg = 1000 g en 1 ons = 100 g. Hoeveel keer past 100 in 1000?",
          },
        },
      },
      {
        q: "Een pak rijst weegt **2 pond**. Hoeveel gram is dat?",
        options: ["1000 g", "200 g", "2000 g", "500 g"],
        answer: 0,
        wrongHints: [null, "Dat is 2 ons. Wat weegt een pond?", "Dat zou 4 pond zijn.", "Dat is 1 pond, maar je hebt 2 pond."],
        uitlegPad: {
          stappen: [
            { titel: "Weet wat een pond weegt", tekst: "Een pond is een vaste gewichtsmaat: elk pond weegt 500 gram." },
            { titel: "Verdubbel", tekst: "Je hebt er 2. Tel twee keer 500 gram bij elkaar op — welk getal krijg je?" },
          ],
          woorden: [{ woord: "pond", uitleg: "Een gewichtsmaat van 500 gram, vaak gebruikt bij groente, fruit en vlees." }],
          theorie: "Bij pond-sommen reken je vaak in stappen van 500 gram. Twee pond is samen altijd een hele kilo, omdat 2 × 500 g precies 1000 g is.",
          voorbeelden: [
            { type: "winkel", tekst: "Een pak rijst van 1 kg staat vaak ook aangeduid als 2 pond op de verpakking." },
            { type: "thuis", tekst: "Een brood van ongeveer een pond weegt zo'n 500 gram." },
          ],
          basiskennis: [{ onderwerp: "Verdubbelen", uitleg: "Verdubbelen betekent een getal keer 2 nemen, ofwel het twee keer bij elkaar optellen." }],
          niveaus: {
            basis: "1 pond = 500 g. 2 pond = 2 × 500 = 1000 g.",
            simpeler: "Twee pond is twee keer een half kilo: 500 + 500 = 1000 g.",
            nogSimpeler: "Twee keer 500 gram — hoeveel is dat samen?",
          },
        },
      },
    ],
  },

  // ─── B. Inhoud (liters) ───────────────────────────────────
  {
    title: "Inhoud omrekenen — milliliter, centiliter, deciliter, liter",
    explanation:
      "**Inhoud-eenheden (van klein naar groot):**\n" +
      "• **ml** (milliliter) — een theelepel is ~5 ml.\n" +
      "• **cl** (centiliter) — staat vaak op een glas of blikje.\n" +
      "• **dl** (deciliter) — een maatbeker gebruikt vaak dl.\n" +
      "• **l** (liter) — een pak melk is 1 l.\n\n" +
      "**Omrekentabel:**\n" +
      "• 1 l = **10 dl** = **100 cl** = **1000 ml**.\n" +
      "• 1 dl = 100 ml.\n" +
      "• 1 cl = 10 ml.\n\n" +
      "**Naar ml toe** (kleiner) → × 10 per stap, dus groter getal. **Naar liter toe** (groter) → ÷ 10 per stap, dus kleiner getal.\n\n" +
      "**Geheugensteun:** liter → deciliter → centiliter → milliliter, elke stap een nul erbij. 1 l = 1000 ml (drie nullen, drie stappen).\n\n" +
      "**Valkuil:** 50 cl is een halve liter (niet 50 liter). En 1 dl = 100 ml, niet 10 ml.",
    checks: [
      {
        q: "**2 liter** is hoeveel milliliter?",
        options: ["2000 ml", "200 ml", "20 000 ml", "20 ml"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1 liter is al 1000 ml.", null, "Dat is nog geen borrelglaasje."],
        uitlegPad: {
          stappen: [
            { titel: "Ken de omrekening", tekst: "1 liter is altijd 1000 milliliter. Dat getal gebruik je bij elke inhoud-som met liters." },
            { titel: "Verdubbel", tekst: "Je hebt er 2. Tel twee keer 1000 ml bij elkaar op — wat kom je uit?" },
          ],
          woorden: [{ woord: "milliliter (ml)", uitleg: "Een heel kleine hoeveelheid vocht — een theelepel is ongeveer 5 ml." }],
          theorie: "**Inhoud** meet je in milliliter, centiliter, deciliter en liter. Van liter naar milliliter ga je naar een kleinere eenheid, dus je **vermenigvuldigt**: 1 liter is 1000 ml. Andersom, van ml naar liter, **deel** je.",
          voorbeelden: [
            { type: "thuis", tekst: "Een pak melk van 1 liter bevat 1000 ml melk." },
            { type: "sport", tekst: "Een sportbidon van 750 ml is bijna een liter." },
          ],
          basiskennis: [{ onderwerp: "1 l = 1000 ml", uitleg: "Dit basisgetal gebruik je in beide richtingen: keer 1000 of deel door 1000." }],
          niveaus: {
            basis: "1 liter = 1000 ml. Reken 2 × 1000 uit.",
            simpeler: "Elke liter is 1000 ml, dus twee liter is twee keer zoveel.",
            nogSimpeler: "1000 + 1000 = ?",
          },
        },
      },
      {
        q: "**50 cl** is hoeveel liter?",
        options: ["0,5 l", "5 l", "0,05 l", "50 l"],
        answer: 0,
        wrongHints: [null, "Dat zou 500 cl zijn — een hele emmer.", null, null],
        uitlegPad: {
          stappen: [
            { titel: "Terug naar liter", tekst: "1 liter is 100 centiliter (cl). Van cl naar liter ga je naar een grotere eenheid, dus je deelt." },
            { titel: "Deel door 100", tekst: "Deel 50 door 100 — welk kommagetal krijg je?" },
          ],
          woorden: [{ woord: "centiliter (cl)", uitleg: "Een inhoudsmaat die je vaak op blikjes en glazen ziet — 100 cl is 1 liter." }],
          theorie: "Een deling door 100 verschuift de komma twee plekken naar links. Zo reken je snel van centiliter terug naar liter, net zoals je van centimeter naar meter zou rekenen.",
          voorbeelden: [
            { type: "winkel", tekst: "Een pak sap van 100 cl is precies 1 liter." },
            { type: "thuis", tekst: "Een klein glaasje limonadesiroop is ongeveer 5 cl." },
          ],
          basiskennis: [{ onderwerp: "Komma twee plekken opschuiven", uitleg: "Delen door 100 laat de komma twee plaatsen naar links schuiven." }],
          niveaus: {
            basis: "1 liter = 100 cl. 50 cl is de helft daarvan.",
            simpeler: "Deel door 100: 50 → 0,5.",
            nogSimpeler: "100 cl is een hele liter. Wat is dan de helft, 50 cl?",
          },
        },
      },
      {
        q: "Hoeveel milliliter is **1 deciliter (dl)**?",
        options: ["100 ml", "10 ml", "1000 ml", "1 ml"],
        answer: 0,
        wrongHints: [null, "Dat is 1 cl, een stap te klein.", "Dat is een hele liter.", null],
        uitlegPad: {
          stappen: [
            { titel: "Deciliter zit tussenin", tekst: "Een deciliter (dl) zit tussen een liter en een milliliter in de rij liter → deciliter → centiliter → milliliter." },
            { titel: "Tel de stappen", tekst: "1 liter = 10 dl, en 1 liter = 1000 ml. Deel 1000 door 10 om te weten hoeveel ml in 1 dl gaat." },
          ],
          woorden: [{ woord: "deciliter (dl)", uitleg: "Een inhoudsmaat die vaak in recepten en maatbekers gebruikt wordt — een tiende van een liter." }],
          theorie: "**Deciliter, centiliter en milliliter** zijn allemaal kleinere maten dan een liter, maar niet even klein: 1 dl = 100 ml, 1 cl = 10 ml. Onthoud de volgorde liter → deciliter → centiliter → milliliter, elke stap wordt het getal groter en de hoeveelheid kleiner.",
          voorbeelden: [
            { type: "school", tekst: "In een scheikundeproefje meet je vloeistof af met een maatbeker in dl." },
            { type: "thuis", tekst: "Een kopje koffie is ongeveer 1,5 dl." },
          ],
          basiskennis: [{ onderwerp: "1 liter = 10 dl", uitleg: "Dit getal helpt je om deciliters om te rekenen naar milliliters of liters." }],
          niveaus: {
            basis: "1 liter = 10 dl én 1 liter = 1000 ml. Dus 1 dl is 1000 ÷ 10.",
            simpeler: "Tien deciliter maakt 1000 ml samen. Eén deciliter is daar een tiende van.",
            nogSimpeler: "1000 gedeeld door 10 = ?",
          },
        },
      },
      {
        q: "Een pak melk is **1,5 l**. Je schenkt glazen van **250 ml**. Hoeveel volle glazen?",
        options: ["6", "4", "7", "5"],
        answer: 0,
        wrongHints: [null, "Reken eerst de liters om naar ml voor je deelt.", null, null],
        uitlegPad: {
          stappen: [
            { titel: "Zet om naar dezelfde eenheid", tekst: "Je kunt geen liters delen door milliliters — reken de 1,5 liter eerst om naar milliliter." },
            { titel: "1,5 liter in ml", tekst: "1 liter is 1000 ml, dus een halve liter is 500 ml. Tel die twee bij elkaar op." },
            { titel: "Deel door de glasgrootte", tekst: "Deel het aantal ml melk door 250 ml (de inhoud van één glas) — hoeveel keer past dat erin?" },
          ],
          woorden: [{ woord: "volle glazen", uitleg: "Alleen hele glazen tellen mee — een half glas dat overblijft telt niet als 'vol'." }],
          theorie: "Bij een verdeel-vraag zet je eerst alles om naar **dezelfde eenheid**, en deel je pas daarna de totale hoeveelheid door de portie-grootte. Zo tel je in gedachten steeds op hoeveel porties er in het geheel passen.",
          voorbeelden: [
            { type: "thuis", tekst: "Een fles limonade van 2 liter schenk je in glazen van 200 ml — ook dan reken je eerst alles om naar ml." },
            { type: "sport", tekst: "Een teamfles van 1 liter vul je bij in bekertjes van 200 ml tijdens een wedstrijd." },
          ],
          basiskennis: [{ onderwerp: "Optellen vóór delen", uitleg: "Als een hoeveelheid in twee delen is opgegeven (zoals 1 liter en een half), tel je die eerst samen voor je verder rekent." }],
          niveaus: {
            basis: "Maak van 1,5 liter eerst milliliter: 1500 ml. Deel daarna door 250.",
            simpeler: "Hoe vaak past 250 in 1500? Tel: 250, 500, 750, 1000, 1250, 1500.",
            nogSimpeler: "1500 ÷ 250 = ?",
          },
        },
      },
      {
        q: "In een recept: **3 dl** water + **200 ml** melk. Hoeveel milliliter vocht samen?",
        options: ["500 ml", "320 ml", "230 ml", "3200 ml"],
        answer: 0,
        wrongHints: [null, "Let op: 3 dl is niet 3 ml.", "Reken 3 dl eerst om naar ml.", null],
        uitlegPad: {
          stappen: [
            { titel: "Zet om naar dezelfde eenheid", tekst: "Je kunt deciliter en milliliter niet zomaar optellen — reken de 3 dl eerst om naar ml." },
            { titel: "3 dl in ml", tekst: "1 dl is 100 ml, dus 3 dl is drie keer zoveel." },
            { titel: "Tel op", tekst: "Tel de ml water en de 200 ml melk bij elkaar op — wat is het totaal?" },
          ],
          woorden: [{ woord: "vocht", uitleg: "Alle vloeistof samen, zoals water, melk of sap — bij een recept tel je het totale vocht vaak op." }],
          theorie: "In recepten staan hoeveelheden vaak in verschillende maten door elkaar (dl, ml, el). Zet altijd eerst alles om naar dezelfde eenheid voor je gaat optellen, anders klopt de uitkomst niet.",
          voorbeelden: [
            { type: "thuis", tekst: "Een pannenkoekenrecept vraagt 2 dl melk en 50 ml water — samen reken je dat om naar ml." },
            { type: "school", tekst: "Bij een kooklesje meet je met een maatbeker steeds in dl en zet je alles om naar ml voor de opschrijfsom." },
          ],
          basiskennis: [{ onderwerp: "1 dl = 100 ml", uitleg: "Dit getal gebruik je om deciliters snel om te rekenen naar milliliters." }],
          niveaus: {
            basis: "Maak 3 dl eerst ml: 1 dl = 100 ml, dus 3 dl = 300 ml. Tel dan 200 ml erbij.",
            simpeler: "300 ml water + 200 ml melk samen optellen.",
            nogSimpeler: "300 + 200 = ?",
          },
        },
      },
      {
        q: "Een blikje limonade bevat **33 cl**. Hoeveel milliliter is dat?",
        options: ["330 ml", "33 ml", "3300 ml", "3,3 ml"],
        answer: 0,
        wrongHints: [null, "Dat is de waarde in cl, niet in ml — hoeveel ml is 1 cl?", "Te veel: dat zou meer dan 3 liter zijn.", "Naar ml ga je naar een kleinere eenheid, dus een groter getal."],
        uitlegPad: {
          stappen: [
            { titel: "Ken de omrekening", tekst: "1 centiliter (cl) is altijd 10 milliliter (ml)." },
            { titel: "Vermenigvuldig", tekst: "Reken 33 × 10 uit — welk getal krijg je?" },
          ],
          woorden: [{ woord: "blikje", uitleg: "Een klein drankverpakking, meestal aangegeven in cl op het etiket." }],
          theorie: "Van centiliter naar milliliter vermenigvuldig je met 10 — dat is dezelfde stap als van deciliter naar centiliter. Elke stap in de rij liter → dl → cl → ml is een factor 10 groter of kleiner.",
          voorbeelden: [
            { type: "winkel", tekst: "Een blikje frisdrank van 33 cl staat ook wel bekend als 330 ml op andere verpakkingen." },
            { type: "sport", tekst: "Een bidon van 50 cl bevat 500 ml water." },
          ],
          basiskennis: [{ onderwerp: "× 10 per stap", uitleg: "Van een grotere naar een kleinere inhoudsmaat in de rij l-dl-cl-ml ga je steeds keer 10." }],
          niveaus: {
            basis: "1 cl = 10 ml. 33 cl = 33 × 10 = 330 ml.",
            simpeler: "Keer 10: 33 → 330.",
            nogSimpeler: "33 keer 10 — welk getal krijg je als je een nul achter de 33 zet?",
          },
        },
      },
      {
        q: "Hoeveel liter is **750 ml**?",
        options: ["0,75 l", "7,5 l", "75 l", "0,075 l"],
        answer: 0,
        wrongHints: [null, "Dat zou 7500 ml zijn — veel te veel.", "750 ml is geen 75 liter.", "De komma gaat 3 plaatsen naar links, niet 4."],
        uitlegPad: {
          stappen: [
            { titel: "Terug naar liter", tekst: "Van milliliter naar liter ga je naar een grotere eenheid, dus je deelt door 1000." },
            { titel: "Komma naar links", tekst: "Deel 750 door 1000 door de komma drie plekken naar links te schuiven — welk kommagetal krijg je?" },
          ],
          woorden: [{ woord: "driekwart", uitleg: "Drie van de vier gelijke delen van een geheel — als kommagetal schrijf je dat als 0,75." }],
          theorie: "Terugrekenen van milliliter naar liter doe je door te delen door 1000, het omgekeerde van vermenigvuldigen. De uitkomst is vaak een kommagetal, omdat de hoeveelheid dan minder is dan een hele liter.",
          voorbeelden: [
            { type: "thuis", tekst: "Een fles frisdrank van 500 ml is 0,5 liter — de helft van een hele liter." },
            { type: "sport", tekst: "Een sportdrankje van 330 ml is 0,33 liter." },
          ],
          basiskennis: [{ onderwerp: "1000 ml = 1 l", uitleg: "Dit basisgetal gebruik je om milliliters om te rekenen naar liters en andersom." }],
          niveaus: {
            basis: "Deel door 1000: 750 ÷ 1000 = 0,75 l.",
            simpeler: "1000 ml = 1 l. 750 ml is driekwart liter: 0,75 l.",
            nogSimpeler: "750 is driekwart van 1000. Hoe schrijf je driekwart als kommagetal?",
          },
        },
      },
    ],
  },

  // ─── C. Tijd ──────────────────────────────────────────────
  {
    title: "Tijd omrekenen — seconden, minuten en uren",
    explanation:
      "**Tijd rekent niet met 10 of 100, maar met 60!**\n" +
      "• 1 minuut = **60 seconden**.\n" +
      "• 1 uur = **60 minuten**.\n" +
      "• 1 uur = 60 × 60 = **3600 seconden**.\n\n" +
      "**Omrekenen:**\n" +
      "• Van uur naar minuten: × 60. (2 uur = 120 min)\n" +
      "• Van minuten naar uur: ÷ 60. (90 min = 1,5 uur)\n" +
      "• Van minuten naar seconden: × 60.\n\n" +
      "**Let op de 60-valkuil:** 1,5 uur is **niet** 1 uur en 50 minuten, maar 1 uur en **30** minuten (een half uur = 30 min). En na 59 minuten komt een heel uur, niet '100 minuten'.\n\n" +
      "**Klokrekenen:** tel eerst de hele uren, dan de minuten. Kom je boven de 60 minuten, dan wordt dat een uur erbij. Bijv. 14:50 + 35 min: 50 + 35 = 85 min = 1 uur en 25 min → 15:25.",
    checks: [
      {
        q: "**2 uur** is hoeveel minuten?",
        options: ["120 min", "200 min", "60 min", "240 min"],
        answer: 0,
        wrongHints: [null, "Tijd rekent met 60, niet met 100.", "Dat is maar 1 uur.", null],
        uitlegPad: {
          stappen: [
            { titel: "Tijd rekent met 60", tekst: "Anders dan bij geld of gewicht rekent tijd niet met 10 of 100, maar met 60: 1 uur is altijd 60 minuten." },
            { titel: "Verdubbel", tekst: "Je hebt er 2 uur. Tel twee keer 60 minuten bij elkaar op." },
          ],
          woorden: [{ woord: "minuut", uitleg: "Een tijdseenheid die 60 seconden duurt — een uur bestaat uit 60 minuten." }],
          theorie: "**Tijd** is anders dan gewicht of inhoud: het rekent met **60**, niet met 10 of 100. 1 minuut = 60 seconden, 1 uur = 60 minuten. Onthoud dit vaste getal goed, want het is de basis van alle tijd-sommen.",
          voorbeelden: [
            { type: "school", tekst: "Een gymles van 1 uur duurt evenveel als 60 minuten voetballen." },
            { type: "thuis", tekst: "Een film van 2 uur duurt net zo lang als twee keer een volle klok rond." },
          ],
          basiskennis: [{ onderwerp: "1 uur = 60 minuten", uitleg: "Dit vaste getal gebruik je bij alle omrekeningen tussen uren en minuten." }],
          niveaus: {
            basis: "Eén uur is 60 minuten. Twee uur is twee keer 60.",
            simpeler: "60 + 60 = ?",
            nogSimpeler: "Een uur heeft 60 minuten. Tel er nog een uur van 60 bij.",
          },
        },
      },
      {
        q: "**90 minuten** is hoeveel uur?",
        options: ["1,5 uur", "1,3 uur", "9 uur", "0,9 uur"],
        answer: 0,
        wrongHints: [null, "Hoeveel minuten zitten er in een heel uur? Wat blijft er over, en hoe schrijf je dat deel als kommagetal?", null, null],
        uitlegPad: {
          stappen: [
            { titel: "Haal er een heel uur af", tekst: "Een heel uur is 60 minuten. Hoeveel minuten houd je over als je dat van de 90 minuten afhaalt?" },
            { titel: "Schrijf het restje als kommagetal", tekst: "Wat overblijft is een deel van een uur. Een half uur (30 minuten) schrijf je als kommagetal 0,5. Tel dat op bij het hele uur dat je al had." },
          ],
          woorden: [{ woord: "half uur", uitleg: "30 minuten — de helft van een heel uur, geschreven als 0,5 uur." }],
          theorie: "Bij tijd-sommen met kommagetallen (zoals 1,5 uur) staat het getal na de komma voor een deel van een uur: 0,5 uur is een half uur (30 minuten), 0,25 uur is een kwartier (15 minuten). Reken eerst het aantal hele uren uit, en zet de rest-minuten om in zo'n deel.",
          voorbeelden: [
            { type: "sport", tekst: "Een training van 75 minuten duurt 1 uur en een kwartier, oftewel 1,25 uur." },
            { type: "thuis", tekst: "Een serie-aflevering van 45 minuten duurt 0,75 uur." },
          ],
          basiskennis: [{ onderwerp: "Een half uur = 30 minuten", uitleg: "Dit getal heb je vaak nodig om uren en minuten in elkaar om te rekenen." }],
          niveaus: {
            basis: "90 minuten is een uur (60) plus nog een half uur (30).",
            simpeler: "Haal er eerst 60 minuten af = 1 uur. Wat blijft over? Een half uur.",
            nogSimpeler: "Een half uur schrijf je als 0,5. Wat krijg je als je dat optelt bij het ene hele uur?",
          },
        },
      },
      {
        q: "**180 seconden** is hoeveel minuten?",
        options: ["3 min", "18 min", "30 min", "1,8 min"],
        answer: 0,
        wrongHints: [null, "Deel door 60, niet door 10.", null, null],
        uitlegPad: {
          stappen: [
            { titel: "Terug naar minuten", tekst: "1 minuut bestaat uit 60 seconden. Van seconden naar minuten ga je naar een grotere eenheid, dus je deelt." },
            { titel: "Hoe vaak past 60 erin?", tekst: "Reken uit hoe vaak 60 in 180 past." },
          ],
          woorden: [{ woord: "seconde", uitleg: "De kleinste tijdseenheid die je op school leert — 60 seconden maken samen 1 minuut." }],
          theorie: "Van seconden naar minuten reken je terug door te delen door 60, net zoals je van minuten naar uren deelt door 60. Steeds hetzelfde vaste getal, in beide richtingen van de tijd-ladder.",
          voorbeelden: [
            { type: "sport", tekst: "Een sprint van 120 seconden duurt 2 minuten." },
            { type: "school", tekst: "Een proefwerk-onderdeel van 300 seconden duurt 5 minuten." },
          ],
          basiskennis: [{ onderwerp: "1 minuut = 60 seconden", uitleg: "Dit getal gebruik je om seconden om te rekenen naar minuten en andersom." }],
          niveaus: {
            basis: "Elke 60 seconden is 1 minuut. Hoe vaak past 60 in 180?",
            simpeler: "60, 120, 180 — dat is drie keer 60.",
            nogSimpeler: "180 ÷ 60 = ?",
          },
        },
      },
      {
        q: "Een film duurt **1 uur en 45 minuten**. Hoeveel minuten is dat in totaal?",
        options: ["105 min", "145 min", "175 min", "60 min"],
        answer: 0,
        wrongHints: [null, "Niet de getallen aan elkaar plakken — reken het uur eerst om.", null, "Dat is maar het uur, de 45 min mist nog."],
        uitlegPad: {
          stappen: [
            { titel: "Zet het uur om", tekst: "Reken eerst het hele uur om naar minuten: 1 uur is 60 minuten." },
            { titel: "Tel de rest erbij", tekst: "Tel de 60 minuten en de losse 45 minuten bij elkaar op — wat is de totale duur?" },
          ],
          woorden: [{ woord: "in totaal", uitleg: "Bij 'in totaal' moet je alle losse delen bij elkaar optellen tot één getal." }],
          theorie: "Een tijdsduur die in uren én minuten staat (zoals 1 uur en 45 minuten) moet je eerst helemaal naar dezelfde eenheid omrekenen — meestal minuten — voor je kunt optellen of vergelijken.",
          voorbeelden: [
            { type: "school", tekst: "Een schooldag van 6 uur en 15 minuten reken je om naar minuten om de totale lestijd te weten." },
            { type: "thuis", tekst: "Een treinreis van 2 uur en 20 minuten duurt in totaal 140 minuten." },
          ],
          basiskennis: [{ onderwerp: "Uur eerst omzetten", uitleg: "Voor je kunt optellen, moet elk deel in dezelfde eenheid staan — dus uren eerst omrekenen naar minuten." }],
          niveaus: {
            basis: "Maak het uur eerst minuten: 60. Tel daar de 45 minuten bij op.",
            simpeler: "60 + 45 = ?",
            nogSimpeler: "Eén uur is 60 minuten. Hoeveel is 60 plus 45?",
          },
        },
      },
      {
        q: "De trein vertrekt om **14:50** en rijdt **35 minuten**. Hoe laat komt hij aan?",
        options: ["15:25", "14:85", "15:05", "15:35"],
        answer: 0,
        wrongHints: [null, "Een klok gaat niet tot 85 minuten — na 60 komt een nieuw uur.", null, null],
        uitlegPad: {
          stappen: [
            { titel: "Naar het hele uur", tekst: "Reken eerst hoeveel minuten je nodig hebt om van 14:50 bij het volgende hele uur (15:00) te komen." },
            { titel: "Wat blijft er over?", tekst: "Van de 35 minuten reisduur heb je een deel al gebruikt om bij 15:00 te komen. Hoeveel minuten van de 35 blijven er dan nog over?" },
            { titel: "Tel de rest bij het hele uur", tekst: "Tel de overgebleven minuten bij 15:00 op om de aankomsttijd te vinden." },
          ],
          woorden: [{ woord: "vertrekken", uitleg: "Het moment waarop iets begint te rijden of te reizen — het startpunt van de tijdsduur." }],
          theorie: "Bij het optellen van tijd met de klok kun je niet zomaar de minuten bij elkaar optellen als je over een heel uur heen gaat — na 59 minuten begint namelijk een nieuw uur, niet '60 of meer minuten'. Reken daarom eerst naar het eerstvolgende hele uur, en tel de rest daarna op.",
          voorbeelden: [
            { type: "thuis", tekst: "Een film die om 20:45 begint en 40 minuten duurt, eindigt niet om 20:85 maar om 21:25." },
            { type: "school", tekst: "Een pauze die om 10:50 begint en 20 minuten duurt, loopt door tot 11:10." },
          ],
          basiskennis: [{ onderwerp: "Klokrekenen over het hele uur", uitleg: "Na 60 minuten begint altijd een nieuw uur — een klok telt nooit tot 100 minuten." }],
          niveaus: {
            basis: "Van 14:50 tot 15:00 is 10 minuten. Je hebt dan nog 25 minuten over (35 − 10). Dus 15:25.",
            simpeler: "Eerst naar het hele uur: 14:50 + 10 min = 15:00. Nog 25 min erbij = 15:25.",
            nogSimpeler: "10 minuten brengt je op 15:00. Hoeveel van de 35 minuten blijft er dan nog over?",
          },
        },
      },
      {
        q: "Hoeveel seconden is **3 minuten**?",
        options: ["180 s", "30 s", "300 s", "63 s"],
        answer: 0,
        wrongHints: [null, "Dat is te weinig — 1 minuut is al 60 seconden.", "Dat hoort bij een ander aantal minuten — reken terug met 60 seconden per minuut.", "3 minuten en 3 seconden optellen klopt niet."],
        uitlegPad: {
          stappen: [
            { titel: "Ken de omrekening", tekst: "1 minuut is altijd 60 seconden." },
            { titel: "Vermenigvuldig", tekst: "Je hebt 3 minuten. Reken 3 × 60 uit." },
          ],
          woorden: [{ woord: "seconde", uitleg: "De kleinste tijdseenheid op de klok — 60 seconden vormen samen 1 minuut." }],
          theorie: "Van minuten naar seconden vermenigvuldig je met 60 — hetzelfde vaste getal als van uren naar minuten. Zo bouw je de hele tijd-ladder op: uur → minuut → seconde, elke stap keer 60.",
          voorbeelden: [
            { type: "sport", tekst: "Een rondje zwemmen van 2 minuten duurt 120 seconden." },
            { type: "school", tekst: "Een kort dictee van 5 minuten duurt 300 seconden." },
          ],
          basiskennis: [{ onderwerp: "1 minuut = 60 seconden", uitleg: "Dit getal gebruik je om minuten om te rekenen naar seconden." }],
          niveaus: {
            basis: "Elke minuut is 60 seconden. 3 × 60 = 180.",
            simpeler: "60 + 60 + 60 = 180 s.",
            nogSimpeler: "Drie keer 60 — tel 60 drie keer bij elkaar op.",
          },
        },
      },
      {
        q: "Een wedstrijd duurt **1,5 uur**. Hoeveel minuten is dat?",
        options: ["90 min", "150 min", "60 min", "100 min"],
        answer: 0,
        wrongHints: [null, "Let op: 1,5 is niet hetzelfde als 1 uur en 50 minuten.", "Dat is maar 1 uur — de halve uur telt nog mee.", "Tijd rekent met 60, niet met 100."],
        uitlegPad: {
          stappen: [
            { titel: "Splits het kommagetal", tekst: "1,5 uur bestaat uit 1 heel uur plus een half uur." },
            { titel: "Zet beide delen om", tekst: "1 uur is 60 minuten. Een half uur is 30 minuten. Tel ze bij elkaar op." },
          ],
          woorden: [{ woord: "wedstrijd", uitleg: "Een sportonderdeel met een vaste tijdsduur, zoals een voetbalwedstrijd of een zwemrace." }],
          theorie: "Een kommagetal bij uren, zoals 1,5, geeft aan dat er naast de hele uren ook nog een deel van een uur bij komt. 0,5 staat voor een half uur (30 minuten), 0,25 voor een kwartier (15 minuten). Splits het getal in een heel deel en een rest-deel om het om te rekenen naar minuten.",
          voorbeelden: [
            { type: "sport", tekst: "Een training van 2,5 uur duurt 2 uur plus een half uur extra." },
            { type: "thuis", tekst: "Een filmavond van 3,25 uur duurt 3 uur en een kwartier." },
          ],
          basiskennis: [{ onderwerp: "Kommagetal splitsen", uitleg: "Een kommagetal zoals 1,5 kun je splitsen in het hele getal (1) en het deel erna (0,5)." }],
          niveaus: {
            basis: "1,5 uur = 1 uur en een half uur = 60 + 30 = 90 min.",
            simpeler: "Een half uur is 30 minuten. 60 + 30 = 90.",
            nogSimpeler: "60 minuten voor het hele uur, plus 30 minuten voor het halve uur — tel ze op.",
          },
        },
      },
    ],
  },

  // ─── D. Praktijk-mix ──────────────────────────────────────
  {
    title: "In het echt — boodschappen, recept en reizen",
    explanation:
      "Op de Doorstroomtoets staan meeteenheden bijna altijd in een **verhaaltje**: een recept, een pak drinken, een treinreis. De truc is steeds hetzelfde:\n\n" +
      "1. **Lees** wat er gevraagd wordt en in welke eenheid het antwoord moet.\n" +
      "2. **Maak alles dezelfde eenheid** voordat je optelt, aftrekt of deelt.\n" +
      "3. **Reken** en kijk of het antwoord **logisch** is (een glas water is geen 5 liter).\n\n" +
      "**Onthoud de bruggen:**\n" +
      "• 1 kg = 1000 g = 2 pond = 10 ons.\n" +
      "• 1 l = 1000 ml = 100 cl = 10 dl.\n" +
      "• 1 uur = 60 min = 3600 s.\n\n" +
      "Reken bij tijd over het hele uur heen (na 60 min begint een nieuw uur), en gebruik bij recepten een **verhoudingstabel** als je voor meer of minder personen moet rekenen.",
    checks: [
      {
        q: "Een recept voor **4 personen** vraagt **500 ml** melk. Hoeveel melk voor **6 personen**?",
        options: ["750 ml", "600 ml", "500 ml", "1000 ml"],
        answer: 0,
        wrongHints: [null, "Je voegt 2 personen toe, niet 1 — reken per persoon.", "Voor meer personen heb je niet evenveel nodig.", null],
        uitlegPad: {
          stappen: [
            { titel: "Reken per persoon", tekst: "Om te weten hoeveel 1 persoon nodig heeft, deel je de 500 ml door het aantal personen (4) waarvoor het recept bedoeld is." },
            { titel: "Vermenigvuldig naar het nieuwe aantal", tekst: "Nu je weet hoeveel 1 persoon krijgt, vermenigvuldig je dat met het nieuwe aantal personen (6)." },
          ],
          woorden: [{ woord: "per persoon", uitleg: "De hoeveelheid die voor 1 iemand bedoeld is — de sleutel om een recept groter of kleiner te maken." }],
          theorie: "Bij het aanpassen van een **recept** voor meer of minder personen, reken je eerst de hoeveelheid per persoon uit (delen door het oorspronkelijke aantal), en vermenigvuldig je die daarna met het nieuwe aantal personen. Dit heet ook wel de verhoudingstabel.",
          voorbeelden: [
            { type: "thuis", tekst: "Een taartrecept voor 8 personen pas je aan voor 4 gasten door alle hoeveelheden te halveren." },
            { type: "school", tekst: "Bij een kooklesje bereken je hoeveel bloem 1 leerling nodig heeft, om daarna de hele klas te bedienen." },
          ],
          basiskennis: [{ onderwerp: "Verhoudingen aanpassen", uitleg: "Als een hoeveelheid bedoeld is voor een bepaald aantal mensen, reken je eerst naar 1 persoon om daarna naar elk ander aantal te kunnen rekenen." }],
          niveaus: {
            basis: "Reken eerst hoeveel melk 1 persoon krijgt: 500 ÷ 4 = 125 ml. Daarna × 6 personen.",
            simpeler: "4 personen → 500 ml, dus 2 personen → 250 ml. Zes personen is 4 + 2.",
            nogSimpeler: "500 ml voor 4, plus de helft daarvan (250 ml) voor 2 personen extra.",
          },
        },
      },
      {
        q: "Een pakket weegt **2 kg en 300 g**. Hoeveel gram is dat?",
        options: ["2300 g", "2003 g", "230 g", "2030 g"],
        answer: 0,
        wrongHints: [null, "Let op waar de 300 komt te staan.", "Dat is minder dan het pakket alleen al aan kilo's heeft.", null],
        uitlegPad: {
          stappen: [
            { titel: "Zet de kilo's om", tekst: "Reken eerst de 2 kg om naar gram: 1 kg is 1000 g." },
            { titel: "Tel de rest erbij", tekst: "Tel de omgerekende kilo's en de losse 300 g bij elkaar op." },
          ],
          woorden: [{ woord: "pakket", uitleg: "Een pakje of doos die je bijvoorbeeld met de post verstuurt — het gewicht ervan staat vaak in kilo's en grammen." }],
          theorie: "Een gewicht dat in twee eenheden staat (zoals 2 kg en 300 g) moet je eerst helemaal in dezelfde eenheid zetten voor je kunt optellen. Meestal reken je alles om naar gram, de kleinste van de twee.",
          voorbeelden: [
            { type: "post", tekst: "Een pakketje van 1 kg en 200 g weegt in totaal 1200 g." },
            { type: "school", tekst: "Een rugtas met boeken van 3 kg en 500 g weegt samen 3500 g." },
          ],
          basiskennis: [{ onderwerp: "1 kg = 1000 g", uitleg: "Dit getal gebruik je om kilo's om te rekenen naar grammen voor je gaat optellen." }],
          niveaus: {
            basis: "Maak de 2 kg eerst gram: 2000 g. Tel daar de 300 g bij.",
            simpeler: "2000 + 300 = ?",
            nogSimpeler: "Twee kilo is 2000 gram. Hoeveel is 2000 plus 300?",
          },
        },
      },
      {
        q: "Vier kinderen drinken elk **3 dl** limonade. Hoeveel **liter** samen?",
        options: ["1,2 l", "12 l", "0,12 l", "1,12 l"],
        answer: 0,
        wrongHints: [null, "12 liter is meer dan een emmer — kan dat voor 4 glazen?", null, null],
        uitlegPad: {
          stappen: [
            { titel: "Tel eerst alles bij elkaar in dl", tekst: "Vier kinderen drinken allemaal 3 dl. Vermenigvuldig 4 met 3 om het totaal in deciliters te vinden." },
            { titel: "Zet het totaal om naar liter", tekst: "1 liter is 10 dl. Deel het totale aantal dl door 10 om liters te krijgen." },
          ],
          woorden: [{ woord: "samen", uitleg: "Bij 'samen' tel je de hoeveelheden van alle kinderen bij elkaar op tot één totaal." }],
          theorie: "Als meerdere personen ieder een gelijke hoeveelheid krijgen, reken je eerst het **totaal** uit door te vermenigvuldigen met het aantal personen. Pas daarna zet je dat totaal om naar de eenheid die gevraagd wordt, bijvoorbeeld van deciliter naar liter.",
          voorbeelden: [
            { type: "school", tekst: "Vijf kinderen drinken elk 2 dl ranja tijdens de pauze — samen is dat 10 dl, oftewel 1 liter." },
            { type: "sport", tekst: "Een team van 6 spelers drinkt elk 1,5 dl water tijdens de rust, samen 9 dl." },
          ],
          basiskennis: [{ onderwerp: "Vermenigvuldigen bij gelijke porties", uitleg: "Als iedereen evenveel krijgt, vind je het totaal door de portie te vermenigvuldigen met het aantal personen." }],
          niveaus: {
            basis: "Tel eerst alle deciliters: 4 × 3 = 12 dl. Tien dl is een liter, dus 12 dl = 1,2 l.",
            simpeler: "12 dl. Deel door 10 om liters te krijgen: 12 → 1,2.",
            nogSimpeler: "10 dl = 1 liter. Hoeveel liter is 12 dl dan — iets méér of iets minder dan 1 liter, en hoeveel?",
          },
        },
      },
      {
        q: "Een reis duurt **2 uur 15 min** heen en **1 uur 50 min** terug. Hoeveel tijd in totaal?",
        options: ["4 uur 5 min", "4 uur 25 min", "3 uur 65 min", "4 uur 15 min"],
        answer: 0,
        wrongHints: [null, null, "Bijna — maar 65 minuten bestaat niet, dat is een uur en 5 min.", null],
        uitlegPad: {
          stappen: [
            { titel: "Tel uren en minuten apart", tekst: "Tel eerst de hele uren bij elkaar op (2 + 1), en apart de minuten (15 + 50)." },
            { titel: "Kijk of de minuten over de 60 gaan", tekst: "Is de uitkomst van de minuten meer dan 60? Dan vormt een deel daarvan een extra heel uur — reken uit hoeveel uur en hoeveel minuten dat precies is." },
            { titel: "Tel alles bij elkaar", tekst: "Tel het extra uur uit de minuten bij de eerder opgetelde uren, plus de minuten die overblijven." },
          ],
          woorden: [{ woord: "heen en terug", uitleg: "Twee losse reisdelen — de reis ernaartoe en de reis terug — die je samen optelt voor de totale reistijd." }],
          theorie: "Bij het **optellen van tijdsduren** tel je uren en minuten apart bij elkaar op. Kom je bij de minuten boven de 60 uit, dan bestaat dat aantal uit een heel uur plus een rest — dat hele uur voeg je toe aan je uren-optelling, alleen de rest blijft over als minuten.",
          voorbeelden: [
            { type: "school", tekst: "Twee proefwerken van 1 uur 40 minuten en 1 uur 30 minuten duren samen 3 uur en 10 minuten." },
            { type: "thuis", tekst: "Een fietstocht van 45 minuten heen en 50 minuten terug duurt in totaal 1 uur en 35 minuten." },
          ],
          basiskennis: [{ onderwerp: "Minuten boven de 60", uitleg: "Zodra opgetelde minuten boven de 60 komen, wordt een deel daarvan een extra heel uur." }],
          niveaus: {
            basis: "Tel de uren (2 + 1 = 3) en de minuten (15 + 50 = 65) apart. 65 min is 1 uur en 5 min, dus 3 + 1 = 4 uur en 5 min.",
            simpeler: "Minuten samen: 15 + 50 = 65. Dat is meer dan 60, dus een uur erbij en 5 min over.",
            nogSimpeler: "3 uur, plus 65 minuten. 60 van die minuten maken een extra heel uur — hoeveel uur heb je dan, en hoeveel minuten blijven er over?",
          },
        },
      },
      {
        q: "Een school begint om **8:30** en duurt tot **14:15**. Hoeveel uur en minuten is dat?",
        options: ["5 uur 45 min", "5 uur 15 min", "6 uur 45 min", "5 uur 55 min"],
        answer: 0,
        wrongHints: [null, "Kijk nog eens naar de minuten: 15 − 30 gaat niet zomaar — je moet het uur erbij halen.", "Dat zou tot 15:15 zijn, niet 14:15.", "De minuten komen te kort — leen dan een heel uur (60 minuten) om verder te rekenen."],
        uitlegPad: {
          stappen: [
            { titel: "Ga eerst naar het hele uur", tekst: "Reken hoeveel minuten er zitten tussen 8:30 en het eerstvolgende hele uur, 9:00." },
            { titel: "Tel de rest van de tijd erbij", tekst: "Reken daarna hoeveel tijd er zit tussen 9:00 en 14:15 (5 hele uren plus wat minuten)." },
            { titel: "Tel beide stukken samen", tekst: "Tel het stukje tot 9:00 en het stuk erna bij elkaar op — dat is de totale duur van de schooldag." },
          ],
          woorden: [{ woord: "duurt tot", uitleg: "Het tijdstip waarop iets eindigt — je berekent de duur door het begin- en eindtijdstip met elkaar te vergelijken." }],
          theorie: "Om de **duur** tussen twee kloktijden te berekenen, is het vaak makkelijker om eerst naar het eerstvolgende hele uur te rekenen en van daaruit verder te tellen, in plaats van direct de kloktijden van elkaar af te trekken. Zo voorkom je 'lenen' van minuten wat lastig kan zijn.",
          voorbeelden: [
            { type: "school", tekst: "Een proefwerk dat om 9:40 begint en om 11:10 eindigt, duurt 1 uur en 30 minuten." },
            { type: "thuis", tekst: "Een verjaardagsfeestje van 14:20 tot 17:00 duurt 2 uur en 40 minuten." },
          ],
          basiskennis: [{ onderwerp: "Rekenen via het hele uur", uitleg: "Reken eerst naar het volgende hele uur toe, en daarna vanaf dat hele uur verder — dat is vaak makkelijker dan direct aftrekken." }],
          niveaus: {
            basis: "Van 8:30 tot 9:00 is 30 min. Van 9:00 tot 14:15 is 5 uur 15 min. Samen 5 uur 45 min.",
            simpeler: "Stap naar heel uur: 8:30 → 9:00 (30 min). Dan 9:00 → 14:15 (5 uur 15 min). 30 + 315 = 345 min = 5 uur 45 min.",
            nogSimpeler: "30 minuten tot 9:00, en dan nog 5 uur en 15 minuten verder. Tel die twee stukken bij elkaar op.",
          },
        },
      },
    ],
  },
];

export default {
  id: "meten-gewicht-inhoud-tijd-po",
  title: "Meten: gewicht, inhoud & tijd",
  subject: "rekenen",
  level: "groep7-8",
  sloThema: "rekenen-meten",
  chapters,
  steps,
  prerequisites: [],
};
