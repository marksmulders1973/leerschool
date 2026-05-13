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
