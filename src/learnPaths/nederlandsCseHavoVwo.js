// Leerpad: Nederlands CSE — tekstanalyse + samenvatting — HAVO/VWO
// Eindexamen-CSE: argumentatie + samenvatting + leesvaardigheid.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  arg: "#42a5f5",
  drog: "#ef5350",
  structuur: "#66bb6a",
  samenv: "#ffd54f",
};

const stepEmojis = ["📰", "🧩", "❓", "📝", "🏆"];

const chapters = [
  { letter: "A", title: "Examen-format Nederlands", emoji: "📰", from: 0, to: 0 },
  { letter: "B", title: "Tekststructuur + alinea-functies", emoji: "🧩", from: 1, to: 1 },
  { letter: "C", title: "Argumentatie + drogredenen", emoji: "❓", from: 2, to: 2 },
  { letter: "D", title: "Samenvatten", emoji: "📝", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Examen-format ─────────────────────────────────────
  {
    title: "Examen-format Nederlands CSE",
    explanation:
      "**CSE Nederlands** HAVO/VWO test **leesvaardigheid**, inclusief **samenvatten** (havo én vwo). Schrijfvaardigheid + presenteren = SE.\n\n**Tijdsduur**:\n• HAVO: 3 uur.\n• VWO: 3 uur.\n\n**Aantal teksten**:\n• HAVO: 1-2 lange teksten (~1500-2500 woorden totaal).\n• VWO: 1-2 lange teksten (~2000-2500 woorden totaal).\n\n**Tekstsoorten**:\n• Argumentatieve teksten (debat, opinie).\n• Beschouwingen (verkenning thema).\n• Informatieve artikelen.\n• Bron-stukken (kranten: Volkskrant, NRC, Trouw, vakbladen).\n• Onderwerpen: maatschappij, wetenschap-populair, ethiek, cultuur, actualiteit.\n\n**Referentieniveau lezen**:\n• HAVO: 3F.\n• VWO: 4F.\n\n**Vraagtypes**:\n• **Multiple choice** (4 opties): hoofdgedachte, alinea-functie, woordbetekenis-in-context.\n• **Open vraag**: 'wat bedoelt schrijver met X?', 'geef argument voor stelling Y'.\n• **Citaat**: regelnummer + eerste woorden.\n• **Tekststructuur**: 'hoe verhouden alinea's zich?'.\n• **Argumentatie**: 'is dit een drogreden?', 'wat is de logische structuur?'.\n• **Samenvattingsvraag** (havo + vwo): (een deel van) de tekst samenvatten binnen een opgegeven maximum aantal woorden.\n\n**Hulpmiddelen toegestaan**:\n• **Papieren woordenboek Nederlands** (eentalig, bv. Van Dale).\n• Niet digitaal.\n\n**Strategie**:\n• 3 uur ÷ 2 teksten HAVO = ~1,5u/tekst.\n• Eerst tekst grondig lezen + structuur noteren.\n• Daarna vragen.\n• Op het eind alles nakijken.\n• Houd tijd over voor de samenvattingsvragen.\n\n**Score + cijfer**:\n• Eindcijfer = (CSE + SE) / 2.\n• Slagen vergt 5,5+ + maximaal 1 keer onvoldoende in kernvakken (Nederlands KERNVAK voor allen).\n• N-term bepaalt cijfer-conversie achteraf — milde normering bij moeilijk examen.\n\n**Belang CSE Nederlands**:\n• Verplicht eindexamen-vak voor iedereen.\n• Cruciaal voor studie + werk (alle vervolgopleidingen).\n• Leesvaardigheid in NL daalt zorgwekkend (PISA-onderzoek), maatschappelijk debat.",
    checks: [
      {
        q: "Wat test CSE Nederlands?",
        options: ["Leesvaardigheid", "Spreken en presenteren", "Een betoog schrijven", "Luistervaardigheid"],
        answer: 0,
        wrongHints: [null, "Spreken en presenteren toets je in het schoolexamen (SE), niet in het centraal examen.", "Schrijven wordt bij Nederlands in het schoolexamen (SE) getoetst. Wat doe je op het centraal examen met teksten?", "Luisteren hoort bij het schoolexamen (SE). Wat doe je op het centraal examen met teksten?"],
        uitlegPad: {
          stappen: [{ titel: "Lezen + samenvatten", tekst: "**CSE Nederlands** = leesvaardigheid, inclusief **samenvattingsvragen** (HAVO + VWO). Schrijfvaardigheid (essay/betoog), spreken, luisteren, literatuur = SE." }],
          niveaus: { basis: "Lezen + samenvatten.", simpeler: "CSE NL = lezen+samenv", nogSimpeler: "Lezen" },
        },
      },
      {
        q: "Tijdsduur **CSE Nederlands HAVO**?",
        options: ["3 uur","2 uur","2,5 uur","4 uur"],
        answer: 0,
        wrongHints: [null, "Het CSE heeft meerdere lange teksten met veel vragen. Is dat in twee uur te doen?", "Het is iets langer dan dat. Hoeveel uur staat er voor Nederlands op het examenrooster?", "Vier uur is langer dan een gewone examenzitting. Hoeveel uur is het dan?"],
        uitlegPad: {
          stappen: [{ titel: "Drie uur", tekst: "**CSE Nederlands HAVO + VWO: 3 uur**. Met een verklaring (bv. dyslexie) kan de school maximaal 30 min verlenging geven." }],
          niveaus: { basis: "3 uur.", simpeler: "3u", nogSimpeler: "3" },
        },
      },
      {
        q: "Welk **referentieniveau** lezen hoort bij het VWO-examen Nederlands?",
        options: ["4F","1F","2F","3F"],
        answer: 0,
        wrongHints: [null, "Veel te laag — dat is basisschool-niveau.", "Te laag — dat is ongeveer vmbo-niveau.", "Dat is het niveau voor havo."],
        uitlegPad: {
          stappen: [{ titel: "Referentieniveaus", tekst: "Voor Nederlands als schooltaal gebruik je de **referentieniveaus** (1F t/m 4F). **VWO: 4F** — complexe betogende teksten met nuance en abstracte redeneringen. **HAVO: 3F**. 1F/2F horen bij basisschool en vmbo." }],
          niveaus: { basis: "4F.", simpeler: "VWO = 4F", nogSimpeler: "4F" },
        },
      },
      {
        q: "Welk hulpmiddel mag je gebruiken bij het **CSE Nederlands**?",
        options: ["Een papieren woordenboek Nederlands", "Een samenvatting van de lesstof", "Een lijst met signaalwoorden", "Een woordenboek-app op je tablet"],
        answer: 0,
        wrongHints: [null, "Eigen samenvattingen mogen niet mee de examenzaal in.", "Eigen lijsten en aantekeningen mogen niet mee de examenzaal in.", "Digitale apparaten zijn niet toegestaan, ook niet voor een woordenboek."],
        uitlegPad: {
          stappen: [{ titel: "Papieren hulpmiddelen", tekst: "**CSE Nederlands**: een papieren woordenboek Nederlands is toegestaan (leerlingen met een andere moedertaal mogen ook een woordenboek Nederlands–eigen taal gebruiken). **Niet**: digitaal, vertaalapp, telefoon, eigen aantekeningen." }],
          niveaus: { basis: "Papieren woordenboek.", simpeler: "Woordenboek NL = mag", nogSimpeler: "Woordenboek" },
        },
      },
      {
        q: "Is Nederlands **kernvak** voor slagen?",
        options: ["Ja, op havo en vwo","Nee, een gewoon vak","Ja, maar niet op vwo","Nee, het is optioneel"],
        answer: 0,
        wrongHints: [null, "Voor drie vakken geldt een extra slaagregel: maximaal één 5. Hoort Nederlands bij die vakken?", "Is de kernvakregel op havo en vwo verschillend? Lees de regel nog eens na.", "Nederlands moet iedereen op havo en vwo volgen. Is het dan een keuzevak?"],
        uitlegPad: {
          stappen: [{ titel: "Kernvakken-regel", tekst: "**Nederlands** = kernvak (HAVO + VWO). Andere kernvakken: Engels + wiskunde A/B/C/D. Voor **slagen** mag je **maximaal 1 onvoldoende (5)** in deze 3 vakken samen hebben. Verder zoals normaal: gemiddeld 5,5+." }],
          niveaus: { basis: "Ja.", simpeler: "NL = kernvak", nogSimpeler: "Ja" },
        },
      },
    ],
  },

  // ─── B. Tekststructuur + alinea-functies ──────────────────
  {
    title: "Tekststructuur + alinea-functies",
    explanation:
      "**Tekststructuur** = hoe de tekst is opgebouwd. Cruciaal voor begrip + toetsvragen.\n\n**Basis-opbouw**:\n• **Inleiding** (1-2 alinea's): onderwerp + thema introduceren, vaak met casus/vraag/stelling.\n• **Middendeel**: argumenten / informatie / analyse uitgewerkt.\n• **Slot** (1 alinea): conclusie / oproep / opening voor verdere reflectie.\n\n**Alinea-functies** (cruciaal om te herkennen):\n\n**1. Inleidende alinea**:\n• Trekt aandacht.\n• Geeft thema.\n• Vaak met **anekdote, vraag, citaat, opmerkelijk feit**.\n\n**2. Hoofdgedachte / thesis-alinea**:\n• Centrale standpunt auteur.\n• Vaak alinea 2 of laatste van inleiding.\n• Of in slot herhaald.\n\n**3. Argument-alinea**:\n• Geeft één argument voor standpunt.\n• Bevat onderbouwing: voorbeeld, data, autoriteit-citaat.\n\n**4. Tegenargument (concessio)**:\n• 'Sommigen zeggen X, maar...'.\n• Auteur erkent kritiek, weerlegt of nuanceert.\n• Signaalwoorden: *toegegeven, weliswaar, hoewel, men kan stellen dat*.\n\n**5. Weerlegging**:\n• Verwerpt tegenargument.\n• Signaalwoorden: *echter, daarentegen, maar, niettemin*.\n\n**6. Voorbeeld-alinea**:\n• Illustreert eerder argument.\n• Signaalwoorden: *bijvoorbeeld, zo, neem, denk aan*.\n\n**7. Definitie-alinea**:\n• Verklaart begrip.\n• Signaalwoord: *X is...*, *Onder X verstaan we...*, *dat wil zeggen*.\n\n**8. Vergelijking-alinea**:\n• Stelt 2+ zaken naast elkaar.\n• Signaalwoorden: *zoals, evenals, in tegenstelling tot, terwijl*.\n\n**9. Oorzaak-gevolg-alinea**:\n• Verklaart causaliteit.\n• Signaalwoorden: *omdat, doordat, daarom, hierdoor, gevolg*.\n\n**10. Conclusie-alinea**:\n• Vat samen + trekt conclusie.\n• Signaalwoorden: *daarom, dus, kortom, samenvattend, concluderend*.\n\n**Tekststructuur-patronen** (hele tekst-niveau):\n\n**Probleem-oplossing**:\n• Inleiding: probleem.\n• Middendeel: oplossings-opties.\n• Slot: aanbevolen oplossing.\n\n**Voor-en-tegen / dialectisch**:\n• Inleiding: stelling.\n• Pro-argumenten.\n• Contra-argumenten.\n• Conclusie: gewogen oordeel.\n\n**Chronologisch**:\n• Geschiedenis vertellen.\n• Stappen in proces.\n• Tijdsvolgorde.\n\n**Stelling-toelichting-argument** (klassiek betoog):\n• Inleiding: stelling.\n• Argumenten 1-3 uitgewerkt.\n• Tegenargument + weerlegging.\n• Conclusie: stelling bewezen.\n\n**Vergelijkend**:\n• Twee zaken/standpunten naast elkaar.\n• Punt-voor-punt of zaak-na-zaak.\n• Conclusie: welke beter?\n\n**Signaalwoorden** (extreem belangrijk voor het CSE!):\n\n**Tegenstelling**: maar, echter, daarentegen, niettemin, toch, hoewel, terwijl, integendeel.\n\n**Oorzaak**: omdat, doordat, aangezien, vanwege.\n\n**Gevolg**: daarom, dus, vandaar, daardoor, hierdoor, met als gevolg.\n\n**Voorbeeld**: bijvoorbeeld, zo, neem, denk aan, zoals.\n\n**Opsomming**: ten eerste, ten tweede, vervolgens, bovendien, daarnaast.\n\n**Conclusie**: kortom, samenvattend, concluderend, alles bij elkaar.\n\n**Tijd**: eerst, daarna, vervolgens, tot slot.\n\n**Vergelijking**: net als, evenals, zoals.\n\n**Voorwaarde**: als, indien, mits, tenzij.\n\n**Toets-patroon**:\n• 'Welk verband heeft alinea 3 met alinea 2?' → herkenning signaalwoord + functie.\n• 'Welke functie heeft alinea 5?' → 1 van bovenstaande.\n• 'Welk structuurpatroon volgt deze tekst?' → herken patroon.\n\n**Verwijswoorden**:\n• *dit, dat, hij, zij, het, deze, die*: verwijzen meestal **terug** (anafoor) in tekst.\n• Lees zin daarvoor voor referentie.\n• Voorwaarts verwijzen (cataforisch) zeldzamer: *dit kun je niet ontkennen: ...*",
    checks: [
      {
        q: "Wat is de functie van een **concessio-alinea**?",
        options: ["Tegenargument erkennen","Hoofdgedachte stellen","Conclusie trekken","Voorbeeld geven"],
        answer: 0,
        wrongHints: [null, "De hoofdgedachte geeft het standpunt van de schrijver zelf. Wat doet de schrijver in een concessio met de mening van anderen?", "Een conclusie staat in het slot. Wat betekent 'een concessie doen'?", "Een voorbeeld illustreert een argument. Wat betekent 'een concessie doen'?"],
        uitlegPad: {
          stappen: [{ titel: "'Toegegeven, maar...'", tekst: "**Concessio** (concessie / tegenwerping): alinea waarin auteur **kritiek of tegenargument erkent**, vaak gevolgd door **weerlegging** in volgende alinea. Signaalwoorden: *toegegeven, weliswaar, het is waar dat, hoewel, men zou kunnen stellen dat*. Versterkt eigen betoog door tegenstanders serieus te nemen." }],
          theorie: "Toets-favoriet: 'wat is de functie van alinea X?' → vaak concessio + weerlegging-paar.",
          niveaus: { basis: "Tegenarg erkennen.", simpeler: "Concessio = tegenarg", nogSimpeler: "Toegeven" },
        },
      },
      {
        q: "Signaalwoord **daarentegen** wijst op:",
        options: ["Tegenstelling","Voorbeeld","Conclusie","Oorzaak"],
        answer: 0,
        wrongHints: [null, "Een voorbeeld kondig je aan met 'bijvoorbeeld' of 'zoals'. Lijkt 'daarentegen' daarop?", "Een conclusie kondig je aan met 'kortom' of 'dus'. Wat doet 'daarentegen' met wat ervoor staat?", "Een oorzaak kondig je aan met 'omdat' of 'doordat'. Wat doet 'daarentegen' met wat ervoor staat?"],
        uitlegPad: {
          stappen: [{ titel: "Contrast-marker", tekst: "**Daarentegen** = tegenstelling-signaal. Synoniemen: *echter, niettemin, toch, maar, integendeel, anderzijds, aan de andere kant*. Signaleert: 'hier komt iets dat tegenovergesteld is aan wat eerder gezegd is'. Lezer: focus, draaipunt." }],
          niveaus: { basis: "Tegenstelling.", simpeler: "Daarentegen = contrast", nogSimpeler: "Contrast" },
        },
      },
      {
        q: "Een tekst schetst eerst een misstand, bespreekt daarna mogelijke maatregelen en beveelt er één aan. Welk **tekststructuur-patroon**?",
        options: ["Probleem-oplossing-structuur", "Chronologische structuur", "Vergelijkende structuur", "Voor-en-tegen-structuur"],
        answer: 0,
        wrongHints: [null, "Chronologisch = volgorde in de tijd. Gaat deze tekst stap voor stap door de tijd?", "Vergelijkend = twee dingen naast elkaar zetten. Is dat de kern hier?", "Voor-en-tegen weegt argumenten over één standpunt af. Waar begint deze tekst mee, en waar eindigt hij?"],
        uitlegPad: {
          stappen: [{ titel: "P-O-patroon", tekst: "**Probleem-oplossing-structuur**: inleiding (probleem schetsen) → middendeel (mogelijke oplossingen analyseren) → slot (beste oplossing aanbevelen of vooruitblik). Veel gebruikt in beleids-artikelen, opinies. **Toetsvraag-patroon**: 'Welk structuur-type heeft deze tekst?'" }],
          niveaus: { basis: "Probleem-oplossing.", simpeler: "PO-structuur", nogSimpeler: "Probleem → oplossing" },
        },
      },
      {
        q: "Verwijswoord *dit* verwijst meestal:",
        options: ["Terug naar iets eerder genoemd", "Vooruit naar iets wat nog komt", "Naar de titel van de tekst", "Naar de lezer van de tekst"],
        answer: 0,
        wrongHints: [null, "Dat kan, maar het komt weinig voor. Waar staat het woord meestal naar te wijzen?", "De titel staat boven de tekst. Verwijst 'dit' midden in een zin daar meestal naar?", "'Dit' verwijst naar iets in de tekst, niet naar een persoon die leest."],
        uitlegPad: {
          stappen: [{ titel: "Anafoor", tekst: "**Dit / dat / deze / die / hij / zij / het** = anaforische verwijzing: terug naar iets eerder genoemd in tekst. toetsvraag: 'Waar verwijst *dit* in regel 23 naar?' → kijk eerdere zin/concept. Zelden cataforisch (vooruit): *Dit kun je niet ontkennen: feit X.*" }],
          niveaus: { basis: "Terug.", simpeler: "Dit = anafoor", nogSimpeler: "Terug" },
        },
      },
      {
        q: "Welke signaalwoord-groep markeert **opsomming**?",
        options: ["Ten eerste, ten tweede, bovendien", "Maar, echter, daarentegen", "Daarom, dus, kortom", "Omdat, doordat, want"],
        answer: 0,
        wrongHints: [null, "Dat zijn signaalwoorden voor een tegenstelling.", "Dat zijn signaalwoorden voor een gevolg of conclusie.", "Dat zijn signaalwoorden voor een oorzaak of reden."],
        uitlegPad: {
          stappen: [{ titel: "Opsomming-markers", tekst: "**Opsomming**: ten eerste/ten tweede/ten derde, vervolgens, daarnaast, bovendien, ook, eveneens. Markeert: auteur somt argumenten/voorbeelden/feiten op. Stel mentaal lijst op om structuur te volgen." }],
          niveaus: { basis: "Ten eerste etc.", simpeler: "Opsomming-markers", nogSimpeler: "Ten eerste" },
        },
      },
    ],
  },

  // ─── C. Argumentatie + drogredenen ────────────────────────
  {
    title: "Argumentatie + drogredenen",
    explanation:
      "**Argumentatie** = standpunt onderbouwen met argumenten. Centrum van Nederlands CSE.\n\n**Standpunt** (stelling, conclusie):\n• Wat auteur wil dat lezer accepteert.\n• 'Energie moet duurzaam zijn.'\n• 'School-vakanties moeten korter.'\n\n**Argument**:\n• Reden om standpunt te aanvaarden.\n• 'Want fossiele brandstoffen veroorzaken klimaatverandering.'\n\n**Argumentatie-schema's** (logische structuren):\n\n**Toulmin-model** (basis):\n• Standpunt (Claim).\n• Argument (Data) — feiten/redenen.\n• Garantie (Warrant) — logische brug Argument → Standpunt.\n• Onderbouwing (Backing) — waarom is Warrant geldig?\n• Beperking (Qualifier) — zekerheid-graad (vaak, soms, altijd).\n• Tegenwerping (Rebuttal) — uitzondering.\n\n**Argumentatie-soorten**:\n\n**1. Vergelijking** ('Net als bij X geldt voor Y...'):\n• Beroep op overeenkomst.\n• Zwakte: niet alle vergelijkingen zijn geldig.\n\n**2. Voorbeeld** ('Neem X als bewijs...'):\n• Concreet geval.\n• Zwakte: één geval bewijst niet alles.\n\n**3. Autoriteit** ('Volgens prof. Y...'):\n• Beroep op expert.\n• Zwakte: vraag of expertise relevant + onafhankelijk.\n\n**4. Oorzaak-gevolg** ('X leidt tot Y, dus...'):\n• Causaal verband.\n• Zwakte: correlatie ≠ causatie.\n\n**5. Pragmatisch** ('Het werkt in praktijk'):\n• Beroep op gevolgen.\n• Zwakte: korte- vs lange-termijn-effect.\n\n**6. Waarde / principe** ('Het is rechtvaardig dat...'):\n• Beroep op moraal.\n• Zwakte: waarden zijn omstreden.\n\n**7. Statistiek / data**:\n• 'Onderzoek toont aan dat...'\n• Zwakte: selectie + interpretatie.\n\n**Drogredenen** = ongeldige redeneringen die overtuigen door fout. **Cruciaal voor het CSE** — verschillende types kennen:\n\n**1. Persoonlijke aanval (ad hominem)**:\n• Speel op de man, niet de bal.\n• 'Hij is dom, dus argument is fout.'\n\n**2. Stroman**:\n• Vertekenen van het standpunt van de tegenstander → bestrijden van iets dat niemand zei.\n• 'Tegenstander wil iedereen vegan dwingen' (terwijl die alleen vlees-belasting wil).\n\n**3. Vals dilemma**:\n• Slechts 2 opties suggereren waar er meer zijn.\n• 'Of je bent voor ons, of je bent een vijand.'\n\n**4. Hellend vlak (slippery slope)**:\n• 'Als X, dan automatisch ramp Y, en uiteindelijk Z.'\n• Onbewezen causale ketting.\n• 'Als we marihuana legaliseren, gaat iedereen heroïne gebruiken.'\n\n**5. Cirkelredenering**:\n• Conclusie als argument gebruiken.\n• 'De Bijbel is waar omdat de Bijbel zegt dat hij waar is.'\n\n**6. Beroep op meerderheid (ad populum)**:\n• 'Iedereen vindt het, dus klopt het.'\n• Wat veel mensen geloven, is niet automatisch waar.\n\n**7. Beroep op traditie**:\n• 'We doen het altijd zo, dus moeten we zo blijven doen.'\n• Geen geldig argument tegen verandering.\n\n**8. Vals causaal verband (post hoc)**:\n• 'A gebeurde voor B, dus A veroorzaakte B.'\n• Correlatie ≠ causatie.\n• Klassiek: 'IJsverkoop + verdrinking stijgen samen — dus ijs veroorzaakt verdrinking?' Nee, beide door zomer.\n\n**9. Generalisatie**:\n• Een paar gevallen → alle gevallen.\n• 'Twee jongeren stelen → alle jongeren zijn dieven.'\n\n**10. Autoritair beroep ongeldig**:\n• Expert op gebied X als autoriteit op gebied Y.\n• Beroemde acteur over wetenschap-thema = vaak ongeldig.\n\n**11. Beroep op medelijden**:\n• Emotionele manipulatie ipv argument.\n• 'Stem voor X omdat het zielig is.'\n\n**12. Beroep op vrees**:\n• Dreigen met gevolgen ipv onderbouwen.\n• 'Als je nee zegt, dan...'\n\n**13. Onjuiste analogie**:\n• Vergelijking met irrelevante overeenkomst.\n• 'Mens is als auto — beide gaan kapot.'\n\n**14. Iets weerleggen door alleen specifieke aspecten**:\n• Negeren van hoofdpunt.\n\n**Toets-patroon**: 'Welke drogreden gebruikt de auteur in regel X?' OF 'Is dit een geldig argument?'.\n\n**Geldige argumenten beoordelen**:\n• Premissen waar?\n• Logica klopt?\n• Volledig beeld?\n• Tegen-bewijs gewogen?",
    checks: [
      {
        q: "**Ad hominem** is:",
        options: ["Aanval op de persoon, niet het argument", "Vergelijking met een andere situatie", "Voorbeeld uit eigen ervaring", "Beroep op cijfers en statistiek"],
        answer: 0,
        wrongHints: [null, "Een vergelijking is een gewoon redeneermiddel — 'ad hominem' = Latijn voor 'op de mens'. Wat gebeurt er dan?", "Een voorbeeld onderbouwt juist — bij ad hominem speel je niet op de bál maar op de…?", "Cijfers zijn een onderbouwing van een argument. Waar richt 'ad hominem' (= 'op de mens') zich op?"],
        uitlegPad: {
          stappen: [{ titel: "Aanval op persoon", tekst: "**Ad hominem** (Latijn 'aan de persoon'): aanval op tegenstander zelf ipv op zijn argument. **Drogreden**. Voorbeeld: 'Hij is een rechtse zelot, dus argument is fout.' De eigenschappen van de persoon zeggen niets over kracht van argument." }],
          niveaus: { basis: "Persoonlijke aanval.", simpeler: "Ad hominem = persoon", nogSimpeler: "Persoon" },
        },
      },
      {
        q: "Welke is een **hellend-vlak-drogreden**?",
        options: ["Als X, dan onvermijdelijk Y en daarna ramp Z", "Iedereen doet X, dus X is goed", "Jij bent dom, dus jouw idee over X klopt niet", "X lijkt op Y, dus wat voor Y geldt, geldt voor X"],
        answer: 0,
        wrongHints: [null, "Dat is een beroep op de meerderheid (ad populum).", "Dat is een persoonlijke aanval (ad hominem).", "Een vergelijking is geen kettingredenering."],
        uitlegPad: {
          stappen: [{ titel: "Slippery slope", tekst: "**Hellend vlak**: 'A leidt tot B, B tot C, C tot ramp Z'. Vaak onbewezen kettingsequentie. Voorbeeld: 'Marihuana legaliseren → iedereen heroïne → samenleving instort'. Slecht onderbouwd. Drogreden." }],
          niveaus: { basis: "Slippery slope.", simpeler: "Hellend vlak", nogSimpeler: "Kettingramp" },
        },
      },
      {
        q: "**Stroman** is:",
        options: ["Het standpunt van de ander verdraaien", "De persoon van de ander aanvallen", "Doen alsof er maar twee keuzes zijn", "Iets beweren omdat iedereen het vindt"],
        answer: 0,
        wrongHints: [null, "Dat is ad hominem: een aanval op de persoon.", "Dat is een vals dilemma.", "Dat is een beroep op de meerderheid."],
        uitlegPad: {
          stappen: [{ titel: "Strawman fallacy", tekst: "**Stroman**: het standpunt van de tegenstander **vertekenen** tot iets makkelijker te weerleggen. Voorbeeld: 'Tegenstander wil dat we **iedereen** dwingen vegan te zijn' (terwijl die alleen vlees-belasting wil). Bestrijden van die overdreven versie = 'gemakkelijker schieten op stroman ipv echte persoon'." }],
          niveaus: { basis: "Vertekenen.", simpeler: "Stroman = vertekenen", nogSimpeler: "Vertekenen" },
        },
      },
      {
        q: "Correlatie ≠ causatie — met welke drogreden is dit verwant?",
        options: ["Post hoc","Ad hominem","Stroman","Hellend vlak"],
        answer: 0,
        wrongHints: [null, "Ad hominem is een aanval op de persoon. Gaat 'correlatie ≠ causatie' over een persoon?", "Een stroman verdraait wat de ander zegt. Gaat het hier om iemands standpunt?", "Een hellend vlak voorspelt een keten van gevolgen in de toekomst. Gaat het hier om een voorspelling, of om twee dingen die samen gebeurden?"],
        uitlegPad: {
          stappen: [{ titel: "Post hoc ergo propter hoc", tekst: "**Post hoc ergo propter hoc** ('daarna, dus daardoor'): omdat A vóór B kwam, denken dat A oorzaak is van B. Vaak fout. **Klassieker**: ijsverkoop + verdrinking stijgen samen in zomer — niet causaal, beide door warm weer.\n\n**Correlatie ≠ causatie**: twee dingen kunnen samenvallen zonder dat één de ander veroorzaakt. **Confounding** = derde factor verklaart beide." }],
          niveaus: { basis: "Post hoc.", simpeler: "Corr ≠ cause = post hoc", nogSimpeler: "Post hoc" },
        },
      },
      {
        q: "**Cirkelredenering**:",
        options: ["Conclusie als argument gebruiken", "Twee ongelijke situaties vergelijken", "Van één geval naar iedereen redeneren", "Doen alsof er maar twee opties zijn"],
        answer: 0,
        wrongHints: [null, "Een scheve vergelijking is een andere drogreden. Bij een církel eindig je waar je begon — hoe klinkt dat in een redenering?", "Generaliseren = van één geval naar 'iedereen' — hier draait de redenering juist in een rondje.", "Een vals dilemma doet alsof er maar 2 opties zijn. Waar begint en eindigt een cirkel?"],
        uitlegPad: {
          stappen: [{ titel: "Begging the question", tekst: "**Cirkelredenering**: conclusie als argument gebruiken — verwijst naar zichzelf. **Voorbeeld**: 'God bestaat omdat de Bijbel zegt dat God bestaat. De Bijbel is waar omdat God dat zegt.' Geen externe basis — een cirkel. Subtiel: vaak verkapt in lange teksten." }],
          niveaus: { basis: "Conclusie = argument.", simpeler: "Cirkel = circulair", nogSimpeler: "Rondje" },
        },
      },
    ],
  },

  // ─── D. Samenvatten (VWO) ──────────────────────────────────
  {
    title: "Samenvatten (CSE havo + vwo)",
    explanation:
      "**Samenvatten** = een onderdeel van het **CSE Nederlands** op havo én vwo: je krijgt samenvattingsvragen met een **opgegeven maximum aantal woorden** (wat daarboven staat, telt niet mee). Een lange samenvatting van een hele tekst (~250 woorden) oefen je vooral voor het schoolexamen — de techniek is dezelfde.\n\n**Eis (oefen-samenvatting)**:\n• Hoofdtekst (~2000 woorden) → samenvatting **~250 woorden** (±10%).\n• Goede Nederlandse zinnen.\n• Geen citaten, eigen formulering.\n• Hoofdgedachte + hoofdargumenten dekken.\n• Geen voorbeelden / details / uitweidingen.\n\n**Methode** (stap voor stap):\n\n**Stap 1: Tekst grondig lezen** (~15 min):\n• Eerst snel doorlezen voor overzicht.\n• Daarna grondig: streep hoofdzinnen aan.\n\n**Stap 2: Structuur analyseren**:\n• Welk tekstpatroon? (probleem-oplossing / voor-tegen / chronologisch).\n• Hoofdgedachte vinden (vaak inleiding of slot).\n• Argument-lijst (5-7 punten).\n• Tegenargument + weerlegging (als aanwezig).\n• Conclusie.\n\n**Stap 3: Eigen schema**:\n• Op klad: kerngedachten in trefwoorden.\n• Niet zinnen overschrijven — concepten.\n• Bv:\n  ```\n  Inleiding: probleem klimaatverandering\n  Arg 1: CO2 uit fossiel\n  Arg 2: industrie 30% emissies\n  Tegenarg: kerncentrales-gevaar\n  Weerlegging: minder gevaar dan klimaatschade\n  Conclusie: overstap nodig\n  ```\n\n**Stap 4: Schrijven** (~25 min):\n• Eerste zin: kernzin / hoofdgedachte.\n• Logische volgorde behouden.\n• Verbindingswoorden gebruiken (echter, daarom, bovendien).\n• Korte zinnen.\n• Eigen woorden — geen citaten.\n• Voorbeelden + details weg, tenzij essentieel.\n• Mening auteur duidelijk maken (objectief weergeven, niet je eigen mening).\n\n**Stap 5: Checken** (~5 min):\n• Woordenaantal (~225-275 woorden, niet onder/over).\n• Hoofdpunten allemaal?\n• Geen voorbeelden meer?\n• Lopende NL-zinnen?\n• Eigen woorden (geen kopiëren)?\n• Spelling / interpunctie.\n\n**Veel-gemaakte fouten**:\n• **Te veel details** (voorbeelden, anekdotes uit tekst).\n• **Te lang** (>275 woorden).\n• **Citaten gebruiken** ipv eigen woorden.\n• **Eigen mening** toevoegen (samenvatting = weergeven, niet beoordelen).\n• **Hoofdgedachte missen**.\n• **Geen verbinding tussen punten** — losse zinnen.\n• **Slechte zinsbouw** (lange, complexe zinnen).\n\n**Beoordeling op het CSE**:\n• Punten voor de juiste hoofdpunten (volgens het correctievoorschrift).\n• Boven het maximum aantal woorden telt je antwoord niet meer mee.\n• Taalfouten kunnen aftrek opleveren — schrijf verzorgd.\n\n**Tip Toets-gangbaar onderwerp**:\n• Klimaat, gender, AI, migratie, opvoeding, taal-degeneratie, geluk-economie, populisme.\n• Lees recente Nederlandse opiniestukken (Volkskrant, NRC) als oefening.\n\n**Voorbeeld**:\n\nHoofdtekst: 2000-woord-artikel over AI-impact op werk.\nKern: AI maakt sommige beroepen overbodig maar creëert nieuwe; overheid moet omscholing faciliteren.\n\nSamenvatting (~250 w):\n*'Kunstmatige intelligentie verandert werk fundamenteel. Routinematige taken in administratie, klantenservice en zelfs juridisch werk kunnen door AI worden overgenomen. Dit betekent niet automatisch massa-werkloosheid: nieuwe beroepen ontstaan rond AI-onderhoud, ethische supervisie en creatieve toepassingen. Wel ligt een tweedeling op de loer tussen hoogopgeleide profiteurs en laaggeschoolde verliezers. Auteur betoogt dat de overheid actief moet inzetten op omscholing en levenslang leren. Bestaande sociale vangnetten zoals werkloosheidsuitkeringen volstaan niet — nodig is bredere financiering van beroepsonderwijs voor volwassenen. Tegenstanders stellen dat de markt zelf wel oplossingen vindt, maar de auteur wijst op de snelheid van AI-ontwikkeling die individuele aanpassing onmogelijk maakt. Internationale ervaringen, zoals het Deense flexicurity-model, tonen aan dat een combinatie van flexibele arbeidsmarkt en sterke sociale steun werkt. Voor Nederland zou dit betekenen: meer scholingsbudgetten, betere certificaatherkenning en bredere zekerheid voor zzp'ers. Conclusie: zonder actief beleid dreigt AI vooral bestaande ongelijkheden te versterken; met de juiste maatregelen kan het juist tot meer welvaart en interessanter werk leiden.'* (~225 woorden)",
    checks: [
      {
        q: "Wat staat er bij een **samenvattingsvraag** op het CSE altijd vermeld?",
        options: ["Een maximum aantal woorden","Hoeveel alinea's je moet maken","Hoeveel citaten je moet gebruiken","Hoeveel tijd je ervoor mag nemen"],
        answer: 0,
        wrongHints: [null, "Hoe je je samenvatting indeelt, mag je zelf weten. Welke grens wordt wél altijd gegeven?", "Bij samenvatten gebruik je juist je eigen woorden.", "Je tijd verdeel je zelf over het hele examen. Welke grens staat er wél bij de vraag?"],
        uitlegPad: {
          stappen: [{ titel: "Let op de grens", tekst: "Bij samenvattingsvragen op het CSE (havo + vwo) staat altijd een **maximum aantal woorden**. Wat je daarboven schrijft, wordt niet beoordeeld. **Eerst tellen + dan inleveren**." }],
          niveaus: { basis: "Maximum aantal woorden.", simpeler: "Er staat een woordgrens bij", nogSimpeler: "Maximum" },
        },
      },
      {
        q: "Mag je **citaten** gebruiken in samenvatting?",
        options: ["Nee, gebruik je eigen woorden", "Ja, citaten maken het betrouwbaar", "Ja, als je de bron erbij noemt", "Ja, voor de kernzin van de tekst"],
        answer: 0,
        wrongHints: [null, "In een samenvatting laat je zien dat je de tekst snapt. Lukt dat met letterlijke stukken?", "Bronvermelding hoort bij een werkstuk. Wat vraagt een samenvatting van jou?", "Juist bij de kern laat je zien dat je de tekst begrijpt. Lukt dat met een citaat?"],
        uitlegPad: {
          stappen: [{ titel: "Eigen verwoording", tekst: "**Samenvatting**: gebruik **eigen woorden**. Geen citaten of zinnen letterlijk overschrijven. Dit toont begrip + taalvaardigheid. Letterlijk overnemen kost punten." }],
          niveaus: { basis: "Eigen woorden.", simpeler: "Geen citaten", nogSimpeler: "Eigen woorden" },
        },
      },
      {
        q: "Wat hoort **niet** in samenvatting?",
        options: ["Je eigen mening over de tekst", "De hoofdgedachte van de tekst", "De belangrijkste argumenten", "De conclusie van de schrijver"],
        answer: 0,
        wrongHints: [null, "De hoofdgedachte is juist de kérn van elke samenvatting — wat hoort er níét in?", "De hoofdargumenten geef je juist weer — wat voeg je NIET zelf toe?", "De conclusie van de auteur hoort erbij — maar wiens oordeel laat je wég?"],
        uitlegPad: {
          stappen: [{ titel: "Objectief weergeven", tekst: "**Samenvatting** = objectieve weergave standpunt auteur. **Geen eigen mening** ('Ik vind dat...' verboden). Ook geen eigen waardering ('De auteur heeft gelijk omdat...'). Alleen: 'De auteur betoogt dat...'." }],
          niveaus: { basis: "Eigen mening.", simpeler: "Niet je eigen mening", nogSimpeler: "Mening" },
        },
      },
      {
        q: "Welke is **prioriteit** in samenvatting?",
        options: ["Hoofdpunten boven details", "Woordenaantal boven inhoud", "Mooie taal boven inhoud", "Citaten boven eigen woorden"],
        answer: 0,
        wrongHints: [null, "Een woordenmaximum is een grens, geen doel. Waar draait een samenvatting om?", "Goede taal telt, maar wat weegt zwaarder: hoe het klinkt of wat erin staat?", "Een samenvatting laat zien dat jij de tekst snapt. Lukt dat met citaten?"],
        uitlegPad: {
          stappen: [{ titel: "Inhoud > vorm", tekst: "**Inhoud** eerst: de punten krijg je voor de juiste hoofdpunten. Eerst zorgen dat alle hoofdpunten erin staan, daarna verbeteren van zinsbouw + woordkeus. Details + voorbeelden weg, tenzij essentieel voor begrip hoofdpunt." }],
          niveaus: { basis: "Hoofdpunten.", simpeler: "Inhoud > vorm", nogSimpeler: "Hoofdpunten" },
        },
      },
      {
        q: "Je hebt **45 minuten** voor een oefen-samenvatting van een hele tekst. Goede tijdsverdeling?",
        options: ["15 min lezen + schema, 25 min schrijven, 5 min check", "5 min lezen, 30 min schrijven, 10 min check", "30 min lezen + schema, 10 min schrijven, 5 min check", "10 min lezen, 20 min schrijven, 15 min check"],
        answer: 0,
        wrongHints: [null, "Vijf minuten is te kort om de tekst echt te snappen en een schema te maken.", "Tien minuten is te weinig om de samenvatting goed uit te schrijven.", "Een kwartier controleren is veel; die tijd mis je bij het lezen of schrijven."],
        uitlegPad: {
          stappen: [{ titel: "Plan tijd", tekst: "**45 min**:\n• 15 min: grondig lezen + structuur + schema maken.\n• 25 min: schrijven (~250 woorden).\n• 5 min: nakijken + tellen.\n\nVooraf goed denken = beter resultaat dan direct schrijven. Schema voorkomt dat je hoofdpunt mist." }],
          niveaus: { basis: "15/25/5.", simpeler: "Tijdverdeling", nogSimpeler: "15/25/5" },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Nederlands CSE mix",
    explanation:
      "Mix van examen-format + structuur + argumentatie + samenvatting.\n\nVeel succes!",
    checks: [
      {
        q: "Bij **'iedereen vindt het, dus moet het waar zijn'** is dit:",
        options: ["Ad populum","Vals dilemma","Cirkelredenering","Hellend vlak"],
        answer: 0,
        wrongHints: [null, "Bij een vals dilemma krijg je maar twee keuzes. Zie je hier een of-of-keuze?", "Bij een cirkelredenering komt de conclusie terug als argument. Waar beroept deze zin zich op?", "Bij een hellend vlak voorspel je een keten van gevolgen. Waar beroept deze zin zich op?"],
        uitlegPad: {
          stappen: [{ titel: "Argumentum ad populum", tekst: "**Ad populum** = beroep op meerderheid. 'Iedereen denkt zo, dus klopt het.' Drogreden: meerderheid kan zich vergissen (vroeger dachten de meeste mensen dat de zon om de aarde draaide). Geldigheid argument hangt niet af van aantal aanhangers." }],
          niveaus: { basis: "Ad populum.", simpeler: "Iedereen vindt = ad populum", nogSimpeler: "Meerderheid" },
        },
      },
      {
        q: "Welk signaalwoord markeert **conclusie**?",
        options: ["Kortom / samenvattend", "Bijvoorbeeld / zoals", "Echter / daarentegen", "Omdat / doordat"],
        answer: 0,
        wrongHints: [null, "Dat zijn signaalwoorden voor een voorbeeld.", "Dat zijn signaalwoorden voor een tegenstelling.", "Dat zijn signaalwoorden voor een oorzaak."],
        uitlegPad: {
          stappen: [{ titel: "Slotmarkers", tekst: "**Conclusie-signalen**: kortom, samenvattend, concluderend, alles bij elkaar genomen, dus, daarmee, tot slot. Auteur trekt samenvattende conclusie van eerder besproken argumenten." }],
          niveaus: { basis: "Kortom.", simpeler: "Conclusie = kortom", nogSimpeler: "Kortom" },
        },
      },
      {
        q: "**Alinea-functie** 'voorbeeld geven':",
        options: ["Illustratie van een eerder argument", "De hoofdgedachte van de tekst geven", "Een tegenargument noemen en weerleggen", "De tekst samenvatten en afronden"],
        answer: 0,
        wrongHints: [null, "Niet — dat is de kern van de tekst, geen voorbeeld.", "Niet — dat is een weerlegging.", "Niet — dat doet het slot."],
        uitlegPad: {
          stappen: [{ titel: "Concretiseren", tekst: "**Voorbeeld-alinea** geeft **concreet geval** dat eerder gestelde argument illustreert. Signaalwoorden: bijvoorbeeld, zo, neem, denk aan, ter illustratie. Niet hetzelfde als zelfstandig argument — ondersteunt iets dat al gesteld is." }],
          niveaus: { basis: "Illustratie.", simpeler: "Voorbeeld = illustreert", nogSimpeler: "Illustratie" },
        },
      },
      {
        q: "**Hoofdgedachte tekst** vind je vaak in:",
        options: ["Eerste of laatste alinea", "In de middelste alinea's", "In de tussenkopjes", "In de bronvermelding"],
        answer: 0,
        wrongHints: [null, "In het midden staat meestal de uitwerking met argumenten en voorbeelden.", "Tussenkopjes geven het onderwerp van één deel, niet de boodschap van de hele tekst.", "De bronvermelding zegt waar informatie vandaan komt, niet wat de schrijver vindt."],
        uitlegPad: {
          stappen: [{ titel: "Begin of eind", tekst: "**Hoofdgedachte** staat meestal in **inleiding** (thesis-zin, vaak alinea 1-2) of in **slot** (conclusie-alinea als bevestiging). Soms beide (introductie + bevestiging). Middendeel werkt argumenten uit. Toets-patroon: 'Wat is de hoofdgedachte?' — kijk eerst eerste + laatste alinea." }],
          niveaus: { basis: "Begin/eind.", simpeler: "Hoofdgedachte = top/eind", nogSimpeler: "Begin/eind" },
        },
      },
      {
        q: "Je antwoord op een samenvattingsvraag is **langer dan het maximum** aantal woorden. Wat gebeurt er?",
        options: ["Het deel na het maximum telt niet mee", "Je krijgt voor de hele vraag 0 punten", "Er gaat per extra woord een punt af", "De corrector kiest welk deel telt"],
        answer: 0,
        wrongHints: [null, "Zo streng is het niet: een deel van je antwoord telt nog wel mee. Welk deel?", "Er wordt niet per woord afgetrokken. Wat gebeurt er met de tekst boven de grens?", "De corrector kiest niet zelf; er is een vaste regel. Welke regel zou eerlijk en duidelijk zijn?"],
        uitlegPad: {
          stappen: [{ titel: "Boven de grens telt niet", tekst: "Bij samenvattingsvragen staat een **maximum aantal woorden**. Het deel van je antwoord dat daarboven valt, wordt **niet beoordeeld** — ook niet als daar een hoofdpunt in staat. Dus: hoofdpunten eerst, kort formuleren, tellen." }],
          niveaus: { basis: "Telt niet mee.", simpeler: "Boven de grens = niet beoordeeld", nogSimpeler: "Telt niet" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const nederlandsCseHavoVwo = {
  id: "nederlands-cse-havo-vwo",
  title: "Nederlands CSE — tekstanalyse + samenvatten (HAVO/VWO)",
  emoji: "📰",
  level: "havo4-5-vwo",
  subject: "taal",
  referentieNiveau: "havo-B2-vwo-C1",
  sloThema: "Nederlands HAVO/VWO — CSE eindexamen leesvaardigheid + samenvatten",
  prerequisites: [
    { id: "argumentatieleer", title: "Argumentatieleer", niveau: "klas3-4" },
    { id: "tekstanalyse", title: "Tekstanalyse basis", niveau: "klas3-4" },
    { id: "betoog-beschouwing-havo-vwo", title: "Betoog/beschouwing/uiteenzetting", niveau: "havo4-5-vwo" },
  ],
  intro:
    "Nederlands CSE HAVO/VWO leesvaardigheid + samenvatten. Examen-format (3u, 3F/4F, kernvak), tekststructuur + alinea-functies (concessio/weerlegging/conclusie + signaalwoorden), argumentatie + drogredenen (ad hominem/stroman/hellend vlak/cirkel + post hoc), samenvatten (woordgrens). ~15-20 min.",
  triggerKeywords: [
    "Nederlands CSE",
    "leesvaardigheid Nederlands",
    "tekstanalyse",
    "alinea-functie",
    "tekststructuur",
    "signaalwoord", "signaalwoorden",
    "argumentatie",
    "standpunt", "argument",
    "drogreden", "drogredenen",
    "ad hominem", "ad populum",
    "stroman", "strawman",
    "hellend vlak", "slippery slope",
    "cirkelredenering",
    "post hoc",
    "vals dilemma",
    "correlatie causatie",
    "Toulmin",
    "concessio", "weerlegging",
    "verwijswoorden",
    "samenvatten", "samenvatting",
    "hoofdgedachte",
    "kernvak",
    "VWO C1",
  ],
  chapters,
  steps,
};

export default nederlandsCseHavoVwo;
