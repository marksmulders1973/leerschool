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
  { letter: "D", title: "Samenvatten (VWO)", emoji: "📝", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Examen-format ─────────────────────────────────────
  {
    title: "Examen-format Nederlands CSE",
    explanation:
      "**CSE Nederlands** HAVO/VWO test **leesvaardigheid** + (VWO) **samenvatten**. Schrijfvaardigheid + presenteren = SE.\n\n**Tijdsduur**:\n• HAVO: 3 uur.\n• VWO: 3 uur.\n\n**Aantal teksten**:\n• HAVO: 1-2 lange teksten (~1500-2500 woorden totaal).\n• VWO: 1 lange tekst (~2000-2500 woorden) + samenvatting-opdracht.\n\n**Tekstsoorten**:\n• Argumentatieve teksten (debat, opinie).\n• Beschouwingen (verkenning thema).\n• Informatieve artikelen.\n• Bron-stukken (kranten: Volkskrant, NRC, Trouw, vakbladen).\n• Onderwerpen: maatschappij, wetenschap-populair, ethiek, cultuur, actualiteit.\n\n**Tekst-niveau**:\n• HAVO: B2.\n• VWO: C1.\n\n**Vraagtypes**:\n• **Multiple choice** (4 opties): hoofdgedachte, alinea-functie, woordbetekenis-in-context.\n• **Open vraag**: 'wat bedoelt schrijver met X?', 'geef argument voor stelling Y'.\n• **Citaat**: regelnummer + eerste woorden.\n• **Tekststructuur**: 'hoe verhouden alinea's zich?'.\n• **Argumentatie**: 'is dit een drogreden?', 'wat is de logische structuur?'.\n• **VWO Samenvatting**: hoofdtekst inkorten tot ~250 woorden.\n\n**Hulpmiddelen toegestaan**:\n• **Nederlands woordenboek** (Van Dale, Prisma).\n• Synoniemenwoordenboek.\n• Niet digitaal.\n\n**Strategie**:\n• 3 uur ÷ 2 teksten HAVO = ~1,5u/tekst.\n• Eerst tekst grondig lezen + structuur noteren.\n• Daarna vragen.\n• Op het eind alles nakijken.\n• Bij VWO: laat tijd voor samenvatting (~45 min).\n\n**Score + cijfer**:\n• Eindcijfer = (CSE + SE) / 2.\n• Slagen vergt 5,5+ + maximaal 1 keer onvoldoende in kernvakken (Nederlands KERNVAK voor allen).\n• N-term bepaalt cijfer-conversie achteraf — milde normering bij moeilijk examen.\n\n**Belang CSE Nederlands**:\n• Verplicht eindexamen-vak voor iedereen.\n• Cruciaal voor studie + werk (alle vervolgopleidingen).\n• Leesvaardigheid in NL daalt zorgwekkend (PISA-onderzoek), maatschappelijk debat.",
    checks: [
      {
        q: "Wat test CSE Nederlands?",
        options: ["Leesvaardigheid (+ samenvatting VWO)","Alleen spreken","Alleen schrijven","Alleen luisteren"],
        answer: 0,
        wrongHints: [null, "Niet — dat is SE.", "Niet — SE.", "Niet — SE."],
        uitlegPad: {
          stappen: [{ titel: "Lezen + samenvatten", tekst: "**CSE Nederlands** = leesvaardigheid (HAVO + VWO) + **samenvatten** (VWO). Schrijfvaardigheid (essay/betoog), spreken, luisteren, literatuur = SE." }],
          niveaus: { basis: "Lezen + samenvatten. A.", simpeler: "CSE NL = lezen+samenv = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Tijdsduur **CSE Nederlands HAVO**?",
        options: ["3 uur","2 uur","2,5 uur","4 uur"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Te kort.", "Te lang."],
        uitlegPad: {
          stappen: [{ titel: "Drie uur", tekst: "**CSE Nederlands HAVO + VWO: 3 uur**. Bij dyslexie/dyscalculie 30 min extra. Plus woordenboeken-tijd." }],
          niveaus: { basis: "3 uur. A.", simpeler: "3u = A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "Welk **tekstniveau** verwacht VWO?",
        options: ["C1","A2","B1","B2"],
        answer: 0,
        wrongHints: [null, "Veel te laag.", "Niet — HAVO 4-5 niveau onder.", "HAVO."],
        uitlegPad: {
          stappen: [{ titel: "CEFR-niveaus", tekst: "**VWO Nederlands: C1** ('competente taalgebruiker'): complexe argumentatieve teksten met implicaties + nuance + abstract denken. **HAVO: B2** (vaardig taalgebruiker). NL als moedertaal bouwt boven die CEFR-niveaus uit." }],
          niveaus: { basis: "C1. A.", simpeler: "VWO = C1 = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Mag je een **synoniemenwoordenboek** gebruiken op CSE Nederlands?",
        options: ["Ja","Nee","Alleen HAVO","Alleen VWO"],
        answer: 0,
        wrongHints: [null, "Wel toegestaan.", "Niet onderscheid.", "Niet onderscheid."],
        uitlegPad: {
          stappen: [{ titel: "Papieren hulpmiddelen", tekst: "**CSE Nederlands**: papieren NL-woordenboek + synoniemenwoordenboek toegestaan. **Niet**: digitaal, vertaalapp, telefoon, eigen aantekeningen. Synoniemen-woordenboek vooral handig voor samenvatting (VWO)." }],
          niveaus: { basis: "Ja. A.", simpeler: "Synoniemenwb = mag = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Is Nederlands **kernvak** voor slagen?",
        options: ["Ja (max 1× onvoldoende in kernvakken)","Nee","Alleen HAVO","Optioneel"],
        answer: 0,
        wrongHints: [null, "Wel kernvak.", "Wel voor beide.", "Verplicht."],
        uitlegPad: {
          stappen: [{ titel: "Kernvakken-regel", tekst: "**Nederlands** = kernvak (HAVO + VWO). Andere kernvakken: Engels + wiskunde A/B/C/D. Voor **slagen** mag je **maximaal 1 onvoldoende (5)** in deze 3 vakken samen hebben. Verder zoals normaal: gemiddeld 5,5+." }],
          niveaus: { basis: "Ja. A.", simpeler: "NL = kernvak = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Tekststructuur + alinea-functies ──────────────────
  {
    title: "Tekststructuur + alinea-functies",
    explanation:
      "**Tekststructuur** = hoe de tekst is opgebouwd. Cruciaal voor begrip + Cito-vragen.\n\n**Basis-opbouw**:\n• **Inleiding** (1-2 alinea's): onderwerp + thema introduceren, vaak met casus/vraag/stelling.\n• **Middendeel**: argumenten / informatie / analyse uitgewerkt.\n• **Slot** (1 alinea): conclusie / oproep / opening voor verdere reflectie.\n\n**Alinea-functies** (cruciaal om te herkennen):\n\n**1. Inleidende alinea**:\n• Trekt aandacht.\n• Geeft thema.\n• Vaak met **anekdote, vraag, citaat, opmerkelijk feit**.\n\n**2. Hoofdgedachte / thesis-alinea**:\n• Centrale standpunt auteur.\n• Vaak alinea 2 of laatste van inleiding.\n• Of in slot herhaald.\n\n**3. Argument-alinea**:\n• Geeft één argument voor standpunt.\n• Bevat onderbouwing: voorbeeld, data, autoriteit-citaat.\n\n**4. Tegenargument (concessio)**:\n• 'Sommigen zeggen X, maar...'.\n• Auteur erkent kritiek, weerlegt of nuanceert.\n• Signaalwoorden: *toegegeven, weliswaar, hoewel, men kan stellen dat*.\n\n**5. Weerlegging**:\n• Verwerpt tegenargument.\n• Signaalwoorden: *echter, daarentegen, maar, niettemin*.\n\n**6. Voorbeeld-alinea**:\n• Illustreert eerder argument.\n• Signaalwoorden: *bijvoorbeeld, zo, neem, denk aan*.\n\n**7. Definitie-alinea**:\n• Verklaart begrip.\n• Signaalwoord: *X is...*, *Onder X verstaan we...*, *dat wil zeggen*.\n\n**8. Vergelijking-alinea**:\n• Stelt 2+ zaken naast elkaar.\n• Signaalwoorden: *zoals, evenals, in tegenstelling tot, terwijl*.\n\n**9. Oorzaak-gevolg-alinea**:\n• Verklaart causaliteit.\n• Signaalwoorden: *omdat, doordat, daarom, hierdoor, gevolg*.\n\n**10. Conclusie-alinea**:\n• Vat samen + trekt conclusie.\n• Signaalwoorden: *daarom, dus, kortom, samenvattend, concluderend*.\n\n**Tekststructuur-patronen** (hele tekst-niveau):\n\n**Probleem-oplossing**:\n• Inleiding: probleem.\n• Middendeel: oplossings-opties.\n• Slot: aanbevolen oplossing.\n\n**Voor-en-tegen / dialectisch**:\n• Inleiding: stelling.\n• Pro-argumenten.\n• Contra-argumenten.\n• Conclusie: gewogen oordeel.\n\n**Chronologisch**:\n• Geschiedenis vertellen.\n• Stappen in proces.\n• Tijdsvolgorde.\n\n**Stelling-toelichting-argument** (klassiek betoog):\n• Inleiding: stelling.\n• Argumenten 1-3 uitgewerkt.\n• Tegenargument + weerlegging.\n• Conclusie: stelling bewezen.\n\n**Vergelijkend**:\n• Twee zaken/standpunten naast elkaar.\n• Punt-voor-punt of zaak-na-zaak.\n• Conclusie: welke beter?\n\n**Signaalwoorden** (extreem belangrijk voor Cito!):\n\n**Tegenstelling**: maar, echter, daarentegen, niettemin, toch, hoewel, terwijl, integendeel.\n\n**Oorzaak**: omdat, doordat, aangezien, vanwege.\n\n**Gevolg**: daarom, dus, vandaar, daardoor, hierdoor, met als gevolg.\n\n**Voorbeeld**: bijvoorbeeld, zo, neem, denk aan, zoals.\n\n**Opsomming**: ten eerste, ten tweede, vervolgens, bovendien, daarnaast.\n\n**Conclusie**: kortom, samenvattend, concluderend, alles bij elkaar.\n\n**Tijd**: eerst, daarna, vervolgens, tot slot.\n\n**Vergelijking**: net als, evenals, zoals.\n\n**Voorwaarde**: als, indien, mits, tenzij.\n\n**Cito-pattern**:\n• 'Welk verband heeft alinea 3 met alinea 2?' → herkenning signaalwoord + functie.\n• 'Welke functie heeft alinea 5?' → 1 van bovenstaande.\n• 'Welk structuurpatroon volgt deze tekst?' → herken patroon.\n\n**Verwijswoorden**:\n• *dit, dat, hij, zij, het, deze, die*: verwijzen meestal **terug** (anafoor) in tekst.\n• Lees zin daarvoor voor referentie.\n• Voorwaarts verwijzen (cataforisch) zeldzamer: *dit kun je niet ontkennen: ...*",
    checks: [
      {
        q: "Wat is de functie van een **concessio-alinea**?",
        options: ["Tegenargument erkennen + voorbereiden op weerlegging","Hoofdgedachte stellen","Conclusie trekken","Voorbeeld geven"],
        answer: 0,
        wrongHints: [null, "Niet — andere functie.", "Niet — komt later.", "Niet — andere functie."],
        uitlegPad: {
          stappen: [{ titel: "'Toegegeven, maar...'", tekst: "**Concessio** (concessie / tegenwerping): alinea waarin auteur **kritiek of tegenargument erkent**, vaak gevolgd door **weerlegging** in volgende alinea. Signaalwoorden: *toegegeven, weliswaar, het is waar dat, hoewel, men zou kunnen stellen dat*. Versterkt eigen betoog door tegenstanders serieus te nemen." }],
          theorie: "Cito-favoriet: 'wat is de functie van alinea X?' → vaak concessio + weerlegging-paar.",
          niveaus: { basis: "Tegenarg erkennen. A.", simpeler: "Concessio = tegenarg = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Signaalwoord **daarentegen** wijst op:",
        options: ["Tegenstelling","Voorbeeld","Conclusie","Oorzaak"],
        answer: 0,
        wrongHints: [null, "Niet — andere woorden.", "Niet — kortom.", "Niet — omdat."],
        uitlegPad: {
          stappen: [{ titel: "Contrast-marker", tekst: "**Daarentegen** = tegenstelling-signaal. Synoniemen: *echter, niettemin, toch, maar, integendeel, anderzijds, aan de andere kant*. Signaleert: 'hier komt iets dat tegenovergesteld is aan wat eerder gezegd'. Lezer: focus, draaipunt." }],
          niveaus: { basis: "Tegenstelling. A.", simpeler: "Daarentegen = contrast = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk **tekststructuur-patroon** past bij 'probleem → oplossing'?",
        options: ["Probleem-oplossing-structuur","Chronologisch","Vergelijkend","Voor-en-tegen"],
        answer: 0,
        wrongHints: [null, "Niet hier.", "Niet primair.", "Anders gericht."],
        uitlegPad: {
          stappen: [{ titel: "P-O-patroon", tekst: "**Probleem-oplossing-structuur**: inleiding (probleem schetsen) → middendeel (mogelijke oplossingen analyseren) → slot (beste oplossing aanbevelen of vooruitblik). Veel gebruikt in beleids-artikelen, opinies. **Cito-vraag-pattern**: 'Welk structuur-type heeft deze tekst?'" }],
          niveaus: { basis: "Probleem-oplossing. A.", simpeler: "PO-structuur = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Verwijswoord *dit* verwijst meestal:",
        options: ["Terug naar iets eerder genoemd","Vooruit","Naar titel","Naar voetnoot"],
        answer: 0,
        wrongHints: [null, "Zelden cataforisch.", "Niet primair.", "Niet primair."],
        uitlegPad: {
          stappen: [{ titel: "Anaphora", tekst: "**Dit / dat / deze / die / hij / zij / het** = anaforische verwijzing: terug naar iets eerder genoemd in tekst. Cito-vraag: 'Waar verwijst *dit* in regel 23 naar?' → kijk eerdere zin/concept. Zelden cataforisch (vooruit): *Dit kun je niet ontkennen: feit X.*" }],
          niveaus: { basis: "Terug. A.", simpeler: "Dit = anaphora = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke signaalwoord-groep markeert **opsomming**?",
        options: ["Ten eerste, ten tweede, bovendien","Maar, echter","Daarom, dus","Omdat, doordat"],
        answer: 0,
        wrongHints: [null, "Tegenstelling.", "Conclusie.", "Oorzaak."],
        uitlegPad: {
          stappen: [{ titel: "Opsomming-markers", tekst: "**Opsomming**: ten eerste/ten tweede/ten derde, vervolgens, daarnaast, bovendien, ook, eveneens. Markeert: auteur somt argumenten/voorbeelden/feiten op. Stel mentaal lijst op om structuur te volgen." }],
          niveaus: { basis: "Ten eerste etc. A.", simpeler: "Opsomming-markers = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Argumentatie + drogredenen ────────────────────────
  {
    title: "Argumentatie + drogredenen",
    explanation:
      "**Argumentatie** = standpunt onderbouwen met argumenten. Centrum van Nederlands CSE.\n\n**Standpunt** (stelling, conclusie):\n• Wat auteur wil dat lezer accepteert.\n• 'Energie moet duurzaam zijn.'\n• 'School-vakanties moeten korter.'\n\n**Argument**:\n• Reden om standpunt te aanvaarden.\n• 'Want fossiele brandstoffen veroorzaken klimaatverandering.'\n\n**Argumentatie-schema's** (logische structuren):\n\n**Toulmin-model** (basis):\n• Standpunt (Claim).\n• Argument (Data) — feiten/redenen.\n• Garantie (Warrant) — logische brug Argument → Standpunt.\n• Onderbouwing (Backing) — waarom is Warrant geldig?\n• Beperking (Qualifier) — zekerheid-graad (vaak, soms, altijd).\n• Tegenwerping (Rebuttal) — uitzondering.\n\n**Argumentatie-soorten**:\n\n**1. Vergelijking** ('Net als bij X geldt voor Y...'):\n• Beroep op overeenkomst.\n• Zwakte: niet alle vergelijkingen zijn geldig.\n\n**2. Voorbeeld** ('Neem X als bewijs...'):\n• Concreet geval.\n• Zwakte: één geval bewijst niet alles.\n\n**3. Autoriteit** ('Volgens prof. Y...'):\n• Beroep op expert.\n• Zwakte: vraag of expertise relevant + onafhankelijk.\n\n**4. Oorzaak-gevolg** ('X leidt tot Y, dus...'):\n• Causaal verband.\n• Zwakte: correlatie ≠ causatie.\n\n**5. Pragmatisch** ('Het werkt in praktijk'):\n• Beroep op gevolgen.\n• Zwakte: korte- vs lange-termijn-effect.\n\n**6. Waarde / principe** ('Het is rechtvaardig dat...'):\n• Beroep op moraal.\n• Zwakte: waarden zijn omstreden.\n\n**7. Statistiek / data**:\n• 'Onderzoek toont aan dat...'\n• Zwakte: selectie + interpretatie.\n\n**Drogredenen** = ongeldige redeneringen die overtuigen door fout. **Cruciaal voor Cito** — verschillende types kennen:\n\n**1. Persoonlijke aanval (ad hominem)**:\n• Speel op de man, niet de bal.\n• 'Hij is dom, dus argument is fout.'\n\n**2. Stroman**:\n• Vertekenen van tegenstander's standpunt → bestrijden van iets dat niemand zei.\n• 'Tegenstander wil iedereen vegan dwingen' (terwijl die alleen vlees-belasting wil).\n\n**3. Vals dilemma**:\n• Slechts 2 opties suggereren waar er meer zijn.\n• 'Of je bent voor ons, of je bent een vijand.'\n\n**4. Hellend vlak (slippery slope)**:\n• 'Als X, dan automatisch ramp Y, en uiteindelijk Z.'\n• Onbewezen causale ketting.\n• 'Als we marihuana legaliseren, gaan iedereen heroïne gebruiken.'\n\n**5. Cirkelredenering**:\n• Conclusie als argument gebruiken.\n• 'De Bijbel is waar omdat de Bijbel zegt dat hij waar is.'\n\n**6. Beroep op meerderheid (ad populum)**:\n• 'Iedereen vindt het, dus klopt het.'\n• Veel mensen geloven niet automatisch waarheid.\n\n**7. Beroep op traditie**:\n• 'We doen het altijd zo, dus moeten we zo blijven doen.'\n• Geen geldig argument tegen verandering.\n\n**8. Vals causaal verband (post hoc)**:\n• 'A gebeurde voor B, dus A veroorzaakte B.'\n• Correlatie ≠ causatie.\n• Klassiek: 'IJsverkoop + verdrinking stijgen samen — dus ijs veroorzaakt verdrinking?' Nee, beide door zomer.\n\n**9. Generalisatie**:\n• Een paar gevallen → alle gevallen.\n• 'Twee jongeren stelen → alle jongeren zijn dieven.'\n\n**10. Autoritair beroep ongeldig**:\n• Expert op gebied X als autoriteit op gebied Y.\n• Beroemde acteur over wetenschap-thema = vaak ongeldig.\n\n**11. Beroep op medelijden**:\n• Emotionele manipulatie ipv argument.\n• 'Stem voor X omdat het zielig is.'\n\n**12. Beroep op vrees**:\n• Dreigen met gevolgen ipv onderbouwen.\n• 'Als je nee zegt, dan...'\n\n**13. Onjuiste analogie**:\n• Vergelijking met irrelevante overeenkomst.\n• 'Mens is als auto — beide gaan kapot.'\n\n**14. Iets weerleggen door alleen specifieke aspecten**:\n• Negeren van hoofdpunt.\n\n**Cito-pattern**: 'Welke drogreden gebruikt de auteur in regel X?' OF 'Is dit een geldig argument?'.\n\n**Geldige argumenten beoordelen**:\n• Premissen waar?\n• Logica klopt?\n• Volledige picture?\n• Tegen-bewijs gewogen?",
    checks: [
      {
        q: "**Ad hominem** is:",
        options: ["Persoonlijke aanval ipv argument","Vergelijking","Voorbeeld","Statistiek"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Aanval op persoon", tekst: "**Ad hominem** (Latijn 'aan de persoon'): aanval op tegenstander zelf ipv op zijn argument. **Drogreden**. Voorbeeld: 'Hij is een rechtse zelot, dus argument is fout.' De persoon's eigenschappen zeggen niets over kracht van argument." }],
          niveaus: { basis: "Persoonlijke aanval. A.", simpeler: "Ad hominem = persoon = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is een **hellend-vlak-drogreden**?",
        options: ["Als X, dan onvermijdelijk Y en daarna ramp Z","Iedereen doet het","Stel persoon ter discussie","Vergelijking"],
        answer: 0,
        wrongHints: [null, "Ad populum.", "Ad hominem.", "Vergelijking is geldig."],
        uitlegPad: {
          stappen: [{ titel: "Slippery slope", tekst: "**Hellend vlak**: 'A leidt tot B, B tot C, C tot ramp Z'. Vaak onbewezen kettingsequentie. Voorbeeld: 'Marihuana legaliseren → iedereen heroïne → samenleving instort'. Slecht onderbouwd. Drogreden." }],
          niveaus: { basis: "Slippery slope. A.", simpeler: "Hellend vlak = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Stroman** is:",
        options: ["Vertekenen van tegenstanders standpunt","Echte persoon","Type argument","Conclusie"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — drogreden.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Strawman fallacy", tekst: "**Stroman**: tegenstander's standpunt **vertekenen** tot iets makkelijker te weerleggen. Voorbeeld: 'Tegenstander wil dat we **iedereen** dwingen vegan te zijn' (terwijl die alleen vlees-belasting wil). Bestrijden van die overdreven versie = 'gemakkelijker schieten op stroman ipv echte persoon'." }],
          niveaus: { basis: "Vertekenen. A.", simpeler: "Stroman = vertekenen = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Correlatie ≠ causatie — welke drogreden is dit verwant?",
        options: ["Post hoc (vals causaal verband)","Ad hominem","Stroman","Hellend vlak"],
        answer: 0,
        wrongHints: [null, "Persoon.", "Vertekening.", "Kettingdrogreden."],
        uitlegPad: {
          stappen: [{ titel: "Post hoc ergo propter hoc", tekst: "**Post hoc ergo propter hoc** ('daarna, dus daardoor'): omdat A vóór B kwam, denken dat A oorzaak is van B. Vaak fout. **Klassieker**: ijsverkoop + verdrinking stijgen samen in zomer — niet causaal, beide door warm weer.\n\n**Correlatie ≠ causatie**: twee dingen kunnen samenvallen zonder dat één de ander veroorzaakt. **Confounding** = derde factor verklaart beide." }],
          niveaus: { basis: "Post hoc. A.", simpeler: "Corr ≠ cause = post hoc = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Cirkelredenering**:",
        options: ["Conclusie als argument gebruiken","Vergelijking","Generalisatie","Vals dilemma"],
        answer: 0,
        wrongHints: [null, "Andere drogreden.", "Andere drogreden.", "Andere drogreden."],
        uitlegPad: {
          stappen: [{ titel: "Begging the question", tekst: "**Cirkelredenering**: conclusie als argument gebruiken — verwijst naar zichzelf. **Voorbeeld**: 'God bestaat omdat de Bijbel zegt dat God bestaat. De Bijbel is waar omdat God dat zegt.' Geen externe basis — circle. Subtiel: vaak verkapt in lange teksten." }],
          niveaus: { basis: "Conclusie = argument. A.", simpeler: "Cirkel = circulair = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Samenvatten (VWO) ──────────────────────────────────
  {
    title: "Samenvatten (VWO-CSE-onderdeel)",
    explanation:
      "**Samenvatting** = belangrijkste onderdeel **VWO-CSE Nederlands**. Niet op HAVO. Vergt eigen geoefende techniek.\n\n**Eis**:\n• Hoofdtekst (~2000 woorden) → samenvatting **~250 woorden** (±10%).\n• Goede Nederlandse zinnen.\n• Geen citaten, eigen formulering.\n• Hoofdgedachte + hoofdargumenten dekken.\n• Geen voorbeelden / details / uitweidingen.\n\n**Methode** (stap voor stap):\n\n**Stap 1: Tekst grondig lezen** (~20 min):\n• Eerst snel doorlezen voor overzicht.\n• Daarna grondig: streep hoofdzinnen aan.\n\n**Stap 2: Structuur analyseren**:\n• Welk tekstpatroon? (probleem-oplossing / voor-tegen / chronologisch).\n• Hoofdgedachte vinden (vaak inleiding of slot).\n• Argument-lijst (5-7 punten).\n• Tegenargument + weerlegging (als aanwezig).\n• Conclusie.\n\n**Stap 3: Eigen schema**:\n• Op klad: kerngedachten in trefwoorden.\n• Niet zinnen overschrijven — concepten.\n• Bv:\n  ```\n  Inleiding: probleem klimaatverandering\n  Arg 1: CO2 uit fossiel\n  Arg 2: industrie 30% emissies\n  Tegenarg: kerncentrales-gevaar\n  Weerlegging: minder gevaar dan klimaatschade\n  Conclusie: overstap nodig\n  ```\n\n**Stap 4: Schrijven** (~25 min):\n• Eerste zin: kernzin / hoofdgedachte.\n• Logische volgorde behouden.\n• Verbindingswoorden gebruiken (echter, daarom, bovendien).\n• Korte zinnen.\n• Eigen woorden — geen citaten.\n• Voorbeelden + details weg, tenzij essentieel.\n• Mening auteur duidelijk maken (objectief weergeven, niet je eigen mening).\n\n**Stap 5: Checken** (~5 min):\n• Woordenaantal (~225-275 woorden, niet onder/over).\n• Hoofdpunten allemaal?\n• Geen voorbeelden meer?\n• Lopende NL-zinnen?\n• Eigen woorden (geen kopiëren)?\n• Spelling / interpunctie.\n\n**Veel-gemaakte fouten**:\n• **Te veel details** (voorbeelden, anekdotes uit tekst).\n• **Te lang** (>275 woorden).\n• **Citaten gebruiken** ipv eigen woorden.\n• **Eigen mening** toevoegen (samenvatting = weergeven, niet beoordelen).\n• **Hoofdgedachte missen**.\n• **Geen verbinding tussen punten** — losse zinnen.\n• **Slechte zinsbouw** (lange complex zinnen).\n\n**Beoordelings-criteria**:\n• Inhoud (hoofdpunten gedekt): 60%.\n• Taalverzorging (zinsbouw + woordgebruik + spelling): 40%.\n• Aantal woorden binnen marge.\n\n**Tip Cito-gangbaar onderwerp**:\n• Klimaat, gender, AI, migratie, opvoeding, taal-degeneratie, geluk-economie, populisme.\n• Lees recente Nederlandse opiniestukken (Volkskrant, NRC) als oefening.\n\n**Voorbeeld**:\n\nHoofdtekst: 2000-woord-artikel over AI-impact op werk.\nKern: AI maakt sommige beroepen overbodig maar creëert nieuwe; overheid moet omscholing faciliteren.\n\nSamenvatting (~250 w):\n*'Kunstmatige intelligentie verandert werk fundamenteel. Routinematige taken in administratie, klantenservice en zelfs juridisch werk kunnen door AI worden overgenomen. Dit betekent niet automatisch massa-werkloosheid: nieuwe beroepen ontstaan rond AI-onderhoud, ethische supervisie en creatieve toepassingen. Wel ligt een tweedeling op de loer tussen hoogopgeleide profiteurs en laaggeschoolde verliezers. Auteur betoogt dat de overheid actief moet inzetten op omscholing en levenslang leren. Bestaande sociale vangnetten zoals werkloosheidsuitkeringen volstaan niet — nodig is bredere financiering van beroepsonderwijs voor volwassenen. Tegenstanders stellen dat de markt zelf wel oplossingen vindt, maar de auteur wijst op de snelheid van AI-ontwikkeling die individuele aanpassing onmogelijk maakt. Internationale ervaringen, zoals het Deense flexicurity-model, tonen aan dat een combinatie van flexibele arbeidsmarkt en sterke sociale steun werkt. Voor Nederland zou dit betekenen: meer scholingsbudgetten, betere certificaatherkenning en bredere zekerheid voor zzp'ers. Conclusie: zonder actief beleid dreigt AI vooral bestaande ongelijkheden te versterken; met de juiste maatregelen kan het juist tot meer welvaart en interessanter werk leiden.'* (~225 woorden)",
    checks: [
      {
        q: "**Aantal woorden** in VWO-samenvatting?",
        options: ["~250 (225-275)","100","500","1000"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Te lang.", "Te lang."],
        uitlegPad: {
          stappen: [{ titel: "10% van origineel", tekst: "**VWO-samenvatting CSE**: ~250 woorden (±10% = 225-275). Originele tekst meestal ~2000-2500 w. Te kort = punten kwijt. Te lang = ook punten kwijt. **Eerst tellen + dan inleveren**." }],
          niveaus: { basis: "250. A.", simpeler: "Samenv = 250 w = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Mag je **citaten** gebruiken in samenvatting?",
        options: ["Nee — eigen woorden","Ja altijd","Alleen titels","Alleen voor één zin"],
        answer: 0,
        wrongHints: [null, "Niet — punten kwijt.", "Niet relevant.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Eigen verwoording", tekst: "**Samenvatting**: gebruik **eigen woorden**. Geen citaten of zinnen letterlijk overschrijven. Dit toont begrip + taalvaardigheid. Examencommissie strafs letterlijk-overnemen met aftrek." }],
          niveaus: { basis: "Eigen woorden. A.", simpeler: "Geen citaten = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat hoort **niet** in samenvatting?",
        options: ["Eigen mening over standpunt auteur","Hoofdgedachte","Hoofdargumenten","Conclusie tekst"],
        answer: 0,
        wrongHints: [null, "Wel.", "Wel.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "Objectief weergeven", tekst: "**Samenvatting** = objectieve weergave standpunt auteur. **Geen eigen mening** ('Ik vind dat...' verboden). Ook geen eigen waardering ('De auteur heeft gelijk omdat...'). Alleen: 'De auteur betoogt dat...'." }],
          niveaus: { basis: "Eigen mening. A.", simpeler: "Niet je eigen mening = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is **prioriteit** in samenvatting?",
        options: ["Hoofdpunten over details","Aantal woorden over inhoud","Mooie taal","Citaten"],
        answer: 0,
        wrongHints: [null, "Niet — inhoud eerst.", "Wel taal maar niet primair.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Inhoud > vorm", tekst: "**Inhoud (60%)** > taalverzorging (40%). Eerst zorgen dat alle hoofdpunten erin staan, daarna verbeteren van zinsbouw + woordkeus. Details + voorbeelden weg, tenzij essentieel voor begrip hoofdpunt." }],
          niveaus: { basis: "Hoofdpunten. A.", simpeler: "Inhoud > vorm = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Strategie samenvatting in **45 minuten**:",
        options: ["20 min lezen+schema, 25 min schrijven, 5 min check","All 45 min schrijven","Direct schrijven","30 min lezen, 15 schrijven"],
        answer: 0,
        wrongHints: [null, "Niet — eerst denken.", "Niet — eerst lezen.", "Niet — te weinig tijd voor schrijven."],
        uitlegPad: {
          stappen: [{ titel: "Plan tijd", tekst: "**45 min**:\n• 15-20 min: grondig lezen + structuur + schema maken.\n• 25 min: schrijven (~250 woorden).\n• 5 min: nakijken + tellen.\n\nVooraf goed denken = beter resultaat dan direct schrijven. Schema voorkomt dat je hoofdpunt mist." }],
          niveaus: { basis: "20/25/5. A.", simpeler: "Tijdverdeling = A.", nogSimpeler: "A." },
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
        options: ["Ad populum (beroep op meerderheid)","Vals dilemma","Cirkelredenering","Hellend vlak"],
        answer: 0,
        wrongHints: [null, "2 valse opties.", "Niet — geen circular.", "Niet — geen ketting."],
        uitlegPad: {
          stappen: [{ titel: "Argumentum ad populum", tekst: "**Ad populum** = beroep op meerderheid. 'Iedereen denkt zo, dus klopt het.' Drogreden: meerderheid kan zich vergissen (vroeger geloofde iedereen dat aarde plat was). Geldigheid argument hangt niet af van aantal aanhangers." }],
          niveaus: { basis: "Ad populum. A.", simpeler: "Iedereen vindt = ad populum = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk signaalwoord markeert **conclusie**?",
        options: ["Kortom / samenvattend","Bijvoorbeeld","Echter","Omdat"],
        answer: 0,
        wrongHints: [null, "Voorbeeld.", "Tegenstelling.", "Oorzaak."],
        uitlegPad: {
          stappen: [{ titel: "Slotmarkers", tekst: "**Conclusie-signalen**: kortom, samenvattend, concluderend, alles bij elkaar genomen, dus, daarmee, tot slot. Auteur trekt samenvattende conclusie van eerder besproken argumenten." }],
          niveaus: { basis: "Kortom. A.", simpeler: "Conclusie = kortom = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Alinea-functie** 'voorbeeld geven':",
        options: ["Illustratie van eerder argument","Hoofdgedachte","Tegenargument","Conclusie"],
        answer: 0,
        wrongHints: [null, "Niet — thesis.", "Niet — concessio.", "Niet — slot."],
        uitlegPad: {
          stappen: [{ titel: "Concretiseren", tekst: "**Voorbeeld-alinea** geeft **concreet geval** dat eerder gestelde argument illustreert. Signaalwoorden: bijvoorbeeld, zo, neem, denk aan, ter illustratie. Niet hetzelfde als zelfstandig argument — ondersteunt iets dat al gesteld is." }],
          niveaus: { basis: "Illustratie. A.", simpeler: "Voorbeeld = illustreert = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Hoofdgedachte tekst** vind je vaak in:",
        options: ["Eerste of laatste alinea","Voetnoot","Bron-vermelding","Titel alleen"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet relevant.", "Soms aanwijzing maar te kort."],
        uitlegPad: {
          stappen: [{ titel: "Begin of eind", tekst: "**Hoofdgedachte** staat meestal in **inleiding** (thesis-zin, vaak alinea 1-2) of in **slot** (conclusie-alinea als bevestiging). Soms beide (introductie + bevestiging). Middendeel werkt argumenten uit. Cito-pattern: 'Wat is de hoofdgedachte?' — kijk eerst eerste + laatste alinea." }],
          niveaus: { basis: "Begin/eind. A.", simpeler: "Hoofdgedachte = top/eind = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Beoordelings-criterium** samenvatting VWO:",
        options: ["Inhoud 60%, taal 40%","Alleen inhoud","Alleen taal","Geen criteria"],
        answer: 0,
        wrongHints: [null, "Beide tellen.", "Beide tellen.", "Wel criteria."],
        uitlegPad: {
          stappen: [{ titel: "Twee componenten", tekst: "**Samenvatting**: inhoud (alle hoofdpunten gedekt) telt **60%**, taalverzorging (zinsbouw + woordkeus + spelling) **40%**. Plus woordenaantal binnen marge. Goede balans: snel zorgen dat hoofdpunten erin, dan finishen taal." }],
          niveaus: { basis: "60/40. A.", simpeler: "Inhoud+taal = 60+40 = A.", nogSimpeler: "A." },
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
    "Nederlands CSE HAVO/VWO leesvaardigheid + samenvatten. Examen-format (3u, B2/C1, kernvak), tekststructuur + alinea-functies (concessio/weerlegging/conclusie + signaalwoorden), argumentatie + drogredenen (ad hominem/stroman/hellend vlak/cirkel + post hoc), samenvatten VWO (~250w in 45 min). ~15-20 min.",
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
