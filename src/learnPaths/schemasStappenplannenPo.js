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
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een schema?",
    explanation: "Een **schema** is een **overzicht** van informatie in vakjes en met pijlen. Het maakt duidelijk **hoe iets werkt** of **wat met wat samenhangt**.\n\n**Soorten schema's**:\n1. **Stappenplan**: stap 1 → stap 2 → stap 3.\n   - Bijv. 'hoe maak je pannenkoeken'.\n2. **Beslisboom**: ja/nee-vragen die je naar een antwoord leiden.\n   - Bijv. 'welk dier ben je?'\n3. **Boomschema**: een hoofdcategorie met subcategorieën.\n   - Bijv. dieren → zoogdieren / vissen / vogels.\n4. **Tijdslijn**: gebeurtenissen op volgorde van tijd.\n   - Bijv. geschiedenis-overzicht.\n5. **Mindmap**: woorden rondom een centraal idee.\n\n**Onderdelen** in elk schema:\n• **Vakjes/cirkels** met informatie.\n• **Pijlen** of lijnen die verbinden.\n• Soms een **legenda** *(wat de symbolen betekenen)*.\n• Een **titel** van het schema.\n\n**Cito-vraag-typen**:\n• 'Wat is de eerste stap?' → kijk naar bovenste/eerste vakje.\n• 'Wat komt na X?' → volg de pijl.\n• 'Welk antwoord krijg je als je deze keuzes maakt?' → loop de beslisboom door.\n\n**Tip**: Lees eerst de **titel** en **legenda** voordat je vragen beantwoordt. Daarna scan het schema globaal — wat is de structuur?",
    checks: [
      {
        q: "Wat zegt een **stappenplan**?",
        options: ["Welke volgorde te doen","Welke kleur","Wie iets doet","Wanneer iets ophoudt"],
        answer: 0,
        wrongHints: [null,"Niet over kleur.","Soms wel maar primair: volgorde.","Niet primair."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een stappenplan?", tekst: "Een **stappenplan** is een lijst van stappen in een BEPAALDE VOLGORDE om iets te doen. Het zegt: doe eerst dit, dan dat, daarna dat." },
            { titel: "Volgorde = belangrijk", tekst: "De volgorde is geen optie — die is VAST. Je kunt niet 'bakken' voordat je 'beslag' hebt. Stappenplan dwingt logische volgorde af." },
            { titel: "Voorbeelden", tekst: "Een **recept** is een stappenplan. Een **routebeschrijving** ook. Bij Cito krijg je vaak stappenplannen waar je moet zien welke stap waar staat." },
          ],
          woorden: [
            { woord: "stappenplan", uitleg: "Lijst stappen in vaste volgorde." },
            { woord: "volgorde", uitleg: "Welke stap eerst, welke daarna." },
          ],
          theorie: "Cito-tip: bij stappenplan-vragen lees je ALLE stappen voordat je antwoord geeft. Vaak gaat de vraag over volgorde, ontbrekende stap, of wissel-mogelijkheid.",
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
        wrongHints: [null,"Niet kleur.","Niet hoeveel.","Wel iets — verband."],
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
          theorie: "Cito-tip pijlen: pijl wijst van het EERSTE naar het LATERE. Of van 'oorzaak' naar 'gevolg'. Lees in de richting van de pijl.",
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
    ],
  },

  {
    title: "Stappenplan volgen",
    explanation: "**Stappenplan** = lijst stappen in **volgorde**.\n\n**Voorbeeld — pannenkoeken**:\n1. Pak een kom.\n2. Doe meel, melk, ei in de kom.\n3. Mix totdat het glad is.\n4. Verhit boter in de pan.\n5. Schenk beslag in de pan.\n6. Bak 2 minuten per kant.\n\n**Stap-volgorde is belangrijk**:\n• Je kunt niet 'bakken' (stap 6) zonder eerst de **kom** te pakken.\n• Stappen dwingen een **logische volgorde** af.\n\n**Cito-vraag-typen**:\n• 'Wat doe je vóór stap X?' → stap (X-1).\n• 'Wat doe je na stap Y?' → stap (Y+1).\n• 'Welke stap mist?' → kijk welke logische stap ontbreekt.\n• 'Mag je stap A en B verwisselen?' → check of de tweede de eerste nodig heeft.\n\n**Voorbeeld — verwisselbaar?**\n• Stap 2 ('meel') en stap 3 ('mix') — kun je niet wisselen, je moet eerst meel hebben voordat je kunt mixen.\n• Stap 1 en stap 4 ('kom' en 'pan') — wel wisselbaar (onafhankelijk).\n\n**Tip — Cito-stappen**:\nLees ALLE stappen voordat je een vraag beantwoordt. Vaak gaat de vraag over volgorde of het MISSEN van een stap.\n\n**Belangrijke woorden in stappen**:\n• 'eerst', 'vervolgens', 'dan', 'daarna', 'tenslotte'.\n• Deze woorden geven volgorde aan.",
    checks: [
      {
        q: "Stap-recept: 1) Kom pakken. 2) Meel + melk doen. 3) Mixen. 4) Bakken.\n\nWat doe je **vóór mixen**?",
        options: ["Meel + melk doen","Bakken","Kom pakken","Niets"],
        answer: 0,
        wrongHints: [null,"Komt na mixen.","Klopt ook (stap 1) — maar de stap DIRECT vóór is anders.","Wel iets — je moet eerst ingrediënten erin doen."],
      },
      {
        q: "Stappen: 1) Spullen pakken. 2) Boterhammen smeren. 3) Inpakken. 4) Naar school.\n\n**Welke stap mist** als je beleg op je boterham wil?",
        options: ["Beleg erop leggen na smeren","Boterham eten","Pak openmaken","Geen, alle stappen kloppen"],
        answer: 0,
        wrongHints: [null,"Geen onderdeel van klaarmaken.","Niet relevant voor klaarmaken.","Wel — beleg ontbreekt."],
      },
      {
        q: "Stappen: 1) Computer aan. 2) Wachtwoord typen. 3) Programma openen. 4) Bestand maken.\n\n**Mag je stap 1 en stap 2 wisselen?**",
        options: ["Nee, computer moet eerst aan","Ja altijd","Maakt niet uit","Soms"],
        answer: 0,
        wrongHints: [null,"Probeer maar — wachtwoord typen op uitstaand toetsenbord werkt niet.","Wel — eerst aan!","Nee, vrij duidelijk."],
      },
    ],
  },

  {
    title: "Beslisboom — keuzes maken",
    explanation: "**Beslisboom** = schema met **ja/nee-vragen** die je naar een antwoord leiden.\n\n**Voorbeeld — Welk dier ben je?**\n```\nLeef je in water?\n  Ja → Heb je veren?\n           Ja → eend\n           Nee → vis\n  Nee → Heb je vleugels?\n           Ja → vogel\n           Nee → zoogdier\n```\n\n**Hoe lezen**:\n1. Begin **bovenaan**.\n2. Beantwoord de eerste vraag.\n3. Volg de **ja-pijl** of de **nee-pijl**.\n4. Beantwoord de volgende vraag.\n5. Eindig bij een **eindvak** (geen vragen meer).\n\n**Cito-vraag-typen**:\n• 'Welk antwoord krijg je als je deze keuzes maakt?' → loop pad door.\n• 'Welke vraag MIST?' → kijk welke logische vraag ontbreekt.\n• 'Wat als je bij ALLE vragen 'nee' antwoordt?' → volg alleen 'nee'-pijlen.\n\n**Voorbeeld — pad volgen**:\n• Leef je in water? **Ja**.\n• Heb je veren? **Nee**.\n• Antwoord = **vis**.\n\n**Tip — beslisboom**:\nMet een potlood het pad markeren helpt om niet te verdwalen. Of je teken een lijntje van vraag naar antwoord.\n\n**Verschil met stappenplan**:\n• Stappenplan = **alle** stappen doen, in volgorde.\n• Beslisboom = je doet alleen de stappen die **bij jouw keuze** horen.",
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
          theorie: "Cito-tip beslisboom: lees ALTIJD de exacte vraag, niet wat erop LIJKT. Vraag is 'honger?', dus antwoord ja of nee daarop. Daarna volg pijl.",
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
    ],
  },

  {
    title: "Schema's interpreteren — informatie eruit halen",
    explanation: "Bij Cito krijg je vaak een **schema/diagram met tekst en pijlen** en moet je een **vraag beantwoorden**.\n\n**Aanpak**:\n1. **Lees titel** — waar gaat het over?\n2. **Lees legenda** — wat betekenen de symbolen/kleuren?\n3. **Scan het schema** globaal.\n4. **Lees pas dan de vraag**.\n5. **Vind het juiste vakje** of pad.\n6. **Antwoord**.\n\n**Voorbeeld — voedselketen**:\n```\nGras → Konijn → Vos\n```\n• Gras wordt door konijn gegeten.\n• Konijn wordt door vos gegeten.\n• Pijl = 'wordt gegeten door'.\n\n**Vragen**:\n• 'Wat eet vos?' → konijn.\n• 'Wat eet konijn?' → gras.\n• 'Wat gebeurt als alle vossen weg zijn?' → konijnen worden niet meer gegeten → kunnen aantal stijgen → grasaantal daalt.\n\n**Soorten schema's bij Cito**:\n• **Stamboom** *(familie)*: opa-oma → vader → kind.\n• **Voedselketen** *(natuur)*: planten → planteneter → vleeseter.\n• **Productie-keten** *(spullen)*: katoen → garen → kleren.\n• **Tijdslijn**: jaartal-overzicht.\n\n**Cito-tip**:\nVeel schema-vragen vereisen logisch nadenken: 'wat als X wegvalt?'. Volg de pijlen na om het effect te bepalen.",
    checks: [
      {
        q: "Voedselketen: gras → konijn → vos.\n\n**Wat eet vos**?",
        options: ["konijn","gras","vlinder","vos"],
        answer: 0,
        wrongHints: [null,"Dat eet konijn.","Niet in dit schema.","Vos eet zichzelf niet."],
      },
      {
        q: "Voedselketen: zaad → muis → uil.\n\n**Wat als muizen verdwijnen**?",
        options: ["Uilen krijgen minder voedsel","Zaden eten meer","Niets","Konijnen komen"],
        answer: 0,
        wrongHints: [null,"Zaden eten niets.","Wel iets — uilen verliezen voedsel.","Konijnen staan niet in deze keten."],
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
        wrongHints: [null,"Vader van Tom.","Tom is het kind.","Wel — Jan."],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — schema's mix",
    explanation: "Mix-toets: stappenplan, beslisboom, schema-interpretatie.",
    checks: [
      {
        q: "Recept-stappen: 1) Boter smelten. 2) Eieren breken in kom. 3) Klutsen. 4) Bakken in pan.\n\n**Wat doe je direct na klutsen**?",
        options: ["Bakken in pan","Boter smelten","Eieren breken","Niets"],
        answer: 0,
        wrongHints: [null,"Stap 1.","Stap 2.","Wel — stap 4."],
      },
      {
        q: "Beslisboom: 'Is het warm? Ja → korte broek. Nee → lange broek.'\n\nHet is **koud**. Wat draag je?",
        options: ["Lange broek","Korte broek","Allebei","Niets"],
        answer: 0,
        wrongHints: [null,"Bij 'warm'.","Eén keuze.","Wel iets aan."],
      },
      {
        q: "Voedselketen: bladluizen → lieveheersbeestjes → vogels.\n\n**Wat eet bladluizen**?",
        options: ["Lieveheersbeestjes","Vogels","Niets","Bladluizen onderling"],
        answer: 0,
        wrongHints: [null,"Vogels eten lieveheersbeestjes, niet rechtstreeks bladluizen.","Niet rechtstreeks.","Niet in dit schema."],
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
        wrongHints: [null,"Klopt — lezen + begrijpen komt vóór rekenen.","Dat is uitrekenen, niet begrijpen.","Controle is na rekenen, niet begrijpen vooraf.","Wel — stap 1 + 2 zijn lezen + markeren."],
        uitlegPad: {
          stappen: [
            { titel: "Stappenplan = volgorde", tekst: "Een stappenplan helpt je iets **systematisch + zonder fout** te doen. Vooral handig bij:\n• Redactiesommen (lange verhaal-vragen)\n• Examen-opgaven\n• Practicum biologie/scheikunde\n• Een recept\n\nEerste stap is bijna ALTIJD: **lees rustig, begrijp wat er gevraagd wordt** — niet meteen aan rekenen!" },
            { titel: "Cito-tip: 5-stappen-rekenen", tekst: "**Officieel stappenplan rekenen** (uit veel rekenboeken):\n1. **Lees + begrijp** vraag\n2. **Onderstreep** getallen + sleutelwoorden\n3. **Schets** (als handig)\n4. **Reken** uit\n5. **Controleer** antwoord (klopt eenheid? Past schatting?)\n\nVeelgemaakte fout: stap 4 meteen doen zonder 1+2. Dan reken je iets anders dan gevraagd." },
            { titel: "Studievaardigheid voor Cito", tekst: "Doorstroomtoets (groep 8) test ook **studievaardigheid** — slim leren + werken. Stappenplannen vallen daaronder:\n• **Lezen** (begrijpend lezen-vragen)\n• **Rekenen** (5-stappen)\n• **Wereldoriëntatie** (informatie zoeken)\n\nKinderen die stappenplan-aanpak gebruiken scoren 10-15% hoger gemiddeld op Cito-toetsen." },
          ],
          woorden: [
            { woord: "stappenplan", uitleg: "Lijst van stappen in vaste volgorde voor een taak." },
            { woord: "studievaardigheid", uitleg: "Vaardigheid om effectief te leren + werken. Cito test dit." },
            { woord: "structureren", uitleg: "Iets ordenen in vaste delen of stappen." },
          ],
          theorie: "Stappenplan-types die Cito test:\n• **Rekenen** — 5-stappen (lees → markeer → schets → reken → check)\n• **Schrijven** — opzet → uitwerken → herlezen → fout-check\n• **Lezen** — globaal lezen → vraag begrijpen → terug naar tekst → antwoord kiezen\n• **Probleem oplossen** — wat weet ik? Wat zoek ik? Welke stappen?",
          voorbeelden: [
            { type: "feit", tekst: "Schaak-grootmeesters gebruiken óók stappenplannen (positie analyseren → opties bedenken → beste zet → uitvoeren). Gestructureerd denken werkt overal." },
          ],
          basiskennis: [{ onderwerp: "Niet 'tijd verspillen'", uitleg: "Stap 1 (lezen) lijkt vertraging maar BESPAART tijd: betere antwoorden, minder fouten, minder herrekenen." }],
          niveaus: { basis: "Stap 1 = lezen. = A.", simpeler: "Stappenplan stap 1 is altijd: lees + begrijp. Pas dan rekenen. Cito-tip: niet meteen tellen, eerst de vraag SNAPPEN. = A.", nogSimpeler: "Stap 1 = A." },
        },
      },
      {
        q: "**Beslisboom voor schooladvies VMBO/HAVO/VWO**:\n• Score Cito 525-535 → VMBO-GL/TL\n• 536-545 → HAVO\n• 546+ → VWO\n\n**Welk advies bij score 540**?",
        options: ["HAVO","VMBO-GL/TL","VWO","Geen"],
        answer: 0,
        wrongHints: [null,"Klopt — 540 valt in 536-545 (HAVO).","Te laag — 540 zit hoger dan VMBO-grens.","Te hoog — VWO begint pas bij 546.","Wel een advies."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een beslisboom?", tekst: "Een **beslisboom** is een schema waarmee je via **JA/NEE-vragen** of **getallen-vergelijkingen** tot een conclusie komt.\n\nVoorbeeld:\n```\nIs score ≥ 546? → JA → VWO\n                  → NEE → Is score ≥ 536? → JA → HAVO\n                                            → NEE → VMBO\n```\n\nVeel gebruikt bij: schooladvies, medische diagnose, kledings-keuze (warm/koud), recept-keuze." },
            { titel: "Stap voor stap: score 540", tekst: "Voor score **540**, ga we door de boom:\n1. Is 540 ≥ 546? **NEE** (540 < 546, geen VWO)\n2. Is 540 ≥ 536? **JA** (540 > 536) → **HAVO** ✓\n\nDe regels:\n• 525-535: **VMBO-GL/TL**\n• 536-545: **HAVO**\n• 546+: **VWO**\n\n540 zit in 536-545 → HAVO." },
            { titel: "Cito-feit: schooladvies in NL", tekst: "**Belangrijk**: dit voorbeeld is GEFICTIONALISEERD. Werkelijk schooladvies hangt af van **veel factoren**:\n• Doorstroomtoets-score (was Cito)\n• Schooladvies van leerkracht (zwaarder dan toets sinds 2014)\n• Motivatie + werkhouding\n• Sociale + emotionele ontwikkeling\n\nSinds **2024** geeft Doorstroomtoets het **belangrijkste advies**. Leerkracht maakt eindvoorstel + bespreekt met ouders. Bij twijfel: hoger advies meestal beter (stapelen mogelijk)." },
          ],
          woorden: [
            { woord: "beslisboom", uitleg: "Schema dat via vragen of getal-vergelijkingen tot een keuze leidt." },
            { woord: "Doorstroomtoets", uitleg: "Officiële naam sinds 2024 voor de vroegere 'Cito-eindtoets' in groep 8." },
            { woord: "schooladvies", uitleg: "Aanbeveling van basisschool voor middelbare school (VMBO/HAVO/VWO)." },
          ],
          theorie: "Beslisboom-stappen (algemeen):\n1. **Start bij wortel** (eerste vraag)\n2. **Beantwoord** met JA/NEE of getal-vergelijking\n3. **Volg de tak** die past\n4. **Herhaal** tot je aan een bladknoop (eind-conclusie) komt\n\nGebruikt in: medische diagnose, computer-algoritmen, recept-keuze, route-planning.",
          voorbeelden: [
            { type: "voorbeeld", tekst: "Beslisboom 'wat trek ik aan?': Regent het? → JA → jas + paraplu. → NEE → Koud? → JA → trui. → NEE → T-shirt." },
            { type: "voorbeeld", tekst: "Beslisboom 'vis-naam': Heeft schubben? → Heeft tentakels? etc. → Maakt biologen mogelijk te onderscheiden." },
          ],
          basiskennis: [{ onderwerp: "Onthoud grenzen", uitleg: "Bij beslisboom-vragen op Cito: kijk goed of grens INCLUSIEF is. '≥ 536' betekent 536 telt mee. '> 536' niet." }],
          niveaus: { basis: "HAVO. = A.", simpeler: "540 valt in 536-545 → HAVO-advies. Beslisboom: te laag voor VWO (≥546), te hoog voor VMBO (525-535). = A.", nogSimpeler: "HAVO = A." },
        },
      },
      {
        q: "Een **diagram**: pijl van 'zon' naar 'plant', pijl van 'plant' naar 'koe', pijl van 'koe' naar 'mens'.\n\n**Wat stelt dit voor**?",
        options: ["Voedselketen (zonne-energie → plant → dier → mens)","Familie-stamboom","Tijdslijn","Recept"],
        answer: 0,
        wrongHints: [null,"Klopt — energie + voedingsstoffen stromen door deze keten.","Niet — geen familieleden.","Niet — geen jaren genoemd.","Niet — geen voedselbereiding."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een voedselketen?", tekst: "Een **voedselketen** toont wie wie eet in de natuur. De **pijl** wijst naar **wie GEGETEN wordt**:\n• Zon → plant (plant gebruikt zonne-energie via fotosynthese)\n• Plant → koe (koe eet plant)\n• Koe → mens (mens eet koe = vlees)\n\nDe energie **stroomt door** de keten — elke stap verliest energie als warmte. Daarom: weinig roofdieren bovenaan, veel planten onderaan." },
            { titel: "Onderdelen voedselketen", tekst: "**Producenten** (bovenkant): planten — maken energie van zon via **fotosynthese**.\n**Consumenten**:\n• **Eerste-orde** (primair) — eten planten: koeien, konijnen, sprinkhanen\n• **Tweede-orde** (secundair) — eten primaire consumenten: vossen, kippen, mensen\n• **Derde-orde** (tertiair) — top-roofdieren: tijger, haai, adelaar\n\n**Afbrekers**: bacteriën + schimmels die dode planten/dieren opruimen → terug naar grond → nieuwe planten." },
            { titel: "Cito-feit: voedselweb vs keten", tekst: "**Voedselketen** = simpel, 1 lijn (zon → A → B → C).\n**Voedselweb** = realistischer, meerdere ketens door elkaar.\n\nBv. een vos eet niet alleen konijnen, maar ook muizen, vogels, bessen. Konijnen worden gegeten door vossen, vogels, mensen. Tekening: ALLE pijlen samen = web.\n\nCito vraagt vaak: 'Wat gebeurt als roofdier verdwijnt?' Antwoord: prooi-populatie stijgt → plant-populatie daalt → systeem uit balans." },
          ],
          woorden: [
            { woord: "voedselketen", uitleg: "Lijn die toont wie wie eet in natuur. Energie stroomt door." },
            { woord: "fotosynthese", uitleg: "Proces waarbij planten zonlicht + CO₂ + water omzetten in suiker (energie) + zuurstof." },
            { woord: "consument", uitleg: "Dier dat ander voedsel eet (geen plant maakt zelf eten)." },
            { woord: "afbreker", uitleg: "Bacterie/schimmel die dood materiaal opruimt." },
          ],
          theorie: "Cito-tip: voedselketen lezen\n• Pijl wijst naar wat gegeten wordt (zie A→B = A wordt door B gegeten? Of: A→B = A eet B?)\n• NL-conventie: **A → B betekent 'A wordt gegeten door B'** OF energie stroomt richting van pijl\n• Bij elke nieuwe schakel: ~90% energie verloren als warmte (ecologische piramide)",
          voorbeelden: [
            { type: "voorbeeld", tekst: "Eenvoudige voedselketen tuin: blad → rups → vogel → kat." },
            { type: "voorbeeld", tekst: "Zee-voedselketen: plankton → kleine vis → tonijn → mens." },
          ],
          basiskennis: [{ onderwerp: "Niet schaal-keten", uitleg: "Voedselketen = wie eet wie. Niet 'wie is groter' (anders zou olifant bovenaan staan). Tijger eet olifant in sommige gevallen." }],
          niveaus: { basis: "Voedselketen. = A.", simpeler: "Dit diagram toont een voedselketen: zonne-energie → plant → koe → mens. Pijl = wat geeft energie aan wat. = A.", nogSimpeler: "Voedselketen = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const schemasStappenplannenPo = {
  id: "schemas-stappenplannen-po",
  title: "Schema's en stappenplannen — Cito groep 5-8",
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
    "Schema's, stappenplannen, beslisbomen en tijdslijnen lezen. Cito-stijl. ~12 min.",
  triggerKeywords: [
    "schema","stappenplan","beslisboom","tijdslijn","voedselketen",
    "diagram","studievaardigheden","informatiebronnen","tabel",
  ],
  chapters,
  steps,
};

export default schemasStappenplannenPo;
