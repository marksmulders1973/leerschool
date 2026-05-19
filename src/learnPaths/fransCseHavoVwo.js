// Leerpad: Frans CSE leesvaardigheid — HAVO/VWO
// Examen-format, vraagsoorten, strategieën. Eindexamen-CSE-stof.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  hl: "#42a5f5",
  acc: "#ef6c00",
  goed: "#66bb6a",
  fout: "#ef5350",
};

const stepEmojis = ["🇫🇷", "🔍", "📖", "🎯", "🏆"];

const chapters = [
  { letter: "A", title: "Examen-format Frans", emoji: "🇫🇷", from: 0, to: 0 },
  { letter: "B", title: "Vraagsoorten + strategie", emoji: "🔍", from: 1, to: 1 },
  { letter: "C", title: "Lange teksten + register", emoji: "📖", from: 2, to: 2 },
  { letter: "D", title: "Cultuur + actualiteit-context", emoji: "🎯", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Examen-format Frans ───────────────────────────────
  {
    title: "Examen-format Frans CSE",
    explanation:
      "**Centraal Schriftelijk Examen Frans (CSE)** voor HAVO/VWO test alleen **leesvaardigheid**. Geen luistervaardigheid, geen schrijven, geen spreken op CSE — die heten schoolexamens (SE).\n\n**Tijdsduur**:\n• HAVO: 2,5 uur.\n• VWO: 3 uur.\n\n**Aantal teksten**:\n• ~10 teksten van wisselende lengte.\n• Totaal ~3500-4500 woorden Frans.\n• ~40-45 vragen totaal.\n\n**Tekstsoorten**:\n• Nieuws/actualiteit (uit Le Monde, Le Figaro, Le Parisien).\n• Reportage of profiel.\n• Reisverhaal / cultureel artikel.\n• Wetenschap/techniek populair.\n• Maatschappij-debat.\n• Interview.\n• Persoonlijk verhaal/memoire.\n• Soms recensie of advertorial.\n\n**Tekst-niveau**:\n• HAVO: B1-niveau (zelfstandig taalgebruiker).\n• VWO: B2-niveau (vaardig taalgebruiker).\n• Onbekende woorden mogen voorkomen — context-strategie nodig.\n\n**Vraagtypes** (meestal in Nederlands gesteld, soms Frans):\n• **Multiple choice** (4 opties).\n• **Open vraag** (kort antwoord in NL of korte zin Frans).\n• **Citaat geven** uit tekst (specifieke regels).\n• **'Welke alinea bevat...'**.\n• **'Wat bedoelt de auteur met...'** (interpretatie).\n• **'Wat is de hoofdgedachte van alinea X'**.\n• **'Welke uitspraak past bij personage Y'**.\n\n**Hulpmiddelen toegestaan**:\n• **Eentalig Frans woordenboek** (Larousse, Petit Robert, Le Robert).\n• **Tweetalig Frans-Nederlands woordenboek**.\n• Beide tegelijk = handig.\n• Niet toegestaan: digitale hulpmiddelen, vertaal-apps, telefoon.\n\n**Strategie tijdverdeling**:\n• 2,5 uur HAVO ÷ 10 teksten = ~15 min per tekst.\n• Eerste 5 min: tekst doorlezen (globaal).\n• Volgende 8-10 min: vragen + scanning.\n• Laatste 2 min: check antwoorden.\n\n**Examenkalender** (jaarlijks):\n• 1e tijdvak: mei (HAVO + VWO).\n• 2e tijdvak: juni (herkansing + ziek/persoonlijke omstandigheden).\n• 3e tijdvak: juli/aug (uitzonderlijke gevallen).\n\n**Score + cijfer**:\n• Antwoorden gepubliceerd na examen op www.examenblad.nl.\n• Normering (N-term) bepaalt cijfer: lichte normering bij moeilijk examen.\n• Examen-cijfer + SE-cijfer (gemiddeld 50/50) = eindcijfer.\n• Slagen vergt 5,5+ gemiddeld + maximaal 1× onvoldoende in kernvakken (Nederlands/Engels/wiskunde HAVO, ook Frans VWO als gekozen vak).",
    checks: [
      {
        q: "Het **CSE Frans** test:",
        options: ["Alleen leesvaardigheid","Lees + luister + spreek","Alleen luistervaardigheid","Alleen schrijfvaardigheid"],
        answer: 0,
        wrongHints: [null, "Andere staan op SE.", "Niet — leesvaardigheid.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Lezen op CSE, rest op SE", tekst: "**CSE Frans** = alleen leesvaardigheid. Luistervaardigheid, spreekvaardigheid, schrijfvaardigheid worden in **SE (schoolexamen)** getest tijdens jaar." }],
          niveaus: { basis: "Lezen. A.", simpeler: "CSE = lezen = A.", nogSimpeler: "Lezen = A." },
        },
      },
      {
        q: "Welke woordenboeken zijn **toegestaan** bij CSE Frans?",
        options: ["Eentalig FR + tweetalig FR-NL","Alleen tweetalig","Alleen eentalig","Geen"],
        answer: 0,
        wrongHints: [null, "Niet — beide mogen.", "Niet — beide mogen.", "Wel toegestaan."],
        uitlegPad: {
          stappen: [{ titel: "Twee tegelijk = sterk", tekst: "Bij CSE Frans **beide toegestaan**: eentalig Frans (Larousse) + tweetalig Frans-NL. **Beide tegelijk gebruiken** = handig: tweetalig snel voor onbekend woord, eentalig voor nuance + uitleg uit context." }],
          theorie: "Tip: koop ze voor 4e/5e klas. Vraag school of Open Boek-pool ze leent.",
          niveaus: { basis: "Beide. A.", simpeler: "Eentalig + tweetalig = A.", nogSimpeler: "Beide = A." },
        },
      },
      {
        q: "Tijdsduur **CSE Frans HAVO**?",
        options: ["2,5 uur","2 uur","3 uur","4 uur"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Niet — VWO.", "Te lang."],
        uitlegPad: {
          stappen: [{ titel: "HAVO 2,5 / VWO 3", tekst: "**HAVO: 2,5 uur**. VWO: 3 uur. Bij dyslexie-/dyscalculie-verklaring 30 min extra toegestaan." }],
          niveaus: { basis: "2,5 uur. A.", simpeler: "HAVO=2,5 uur = A.", nogSimpeler: "2,5 = A." },
        },
      },
      {
        q: "Welk leesniveau verwacht **HAVO-eindexamen**?",
        options: ["B1","A1","B2","C1"],
        answer: 0,
        wrongHints: [null, "Veel te laag.", "Niet — dat is VWO.", "Te hoog."],
        uitlegPad: {
          stappen: [{ titel: "CEFR-niveaus", tekst: "**HAVO Frans CSE: B1** ('zelfstandig taalgebruiker') — kan hoofdpunten begrijpen in heldere standaard-taal. **VWO Frans CSE: B2** ('vaardig taalgebruiker') — kan complexere teksten met argumentatie + abstracte ideeën." }],
          theorie: "Voor moedertaal-niveau (Frans als 1e taal): C2.",
          niveaus: { basis: "B1. A.", simpeler: "HAVO Frans = B1 = A.", nogSimpeler: "B1 = A." },
        },
      },
      {
        q: "Geschatte tijd per tekst (HAVO 2,5u, 10 teksten)?",
        options: ["~15 min","~5 min","~30 min","~1 uur"],
        answer: 0,
        wrongHints: [null, "Te kort om grondig.", "Veel te lang.", "Belachelijk lang."],
        uitlegPad: {
          stappen: [{ titel: "Tijdverdeling", tekst: "2,5 uur = 150 min ÷ 10 teksten = **~15 min per tekst**. Verdeel: 5 min globaal lezen, 8 min vragen, 2 min controle. Bij twijfel volgende → kom terug." }],
          niveaus: { basis: "~15 min. A.", simpeler: "150/10=15 min = A.", nogSimpeler: "15 = A." },
        },
      },
    ],
  },

  // ─── B. Vraagsoorten + strategie ──────────────────────────
  {
    title: "Vraagsoorten + leesstrategie",
    explanation:
      "**Effectieve leesstrategie** = sneller + nauwkeuriger.\n\n**Stap 1 — Tekstinleiding lezen** (vaak NL, korte intro vóór tekst):\n• Geeft context: schrijver, bron, onderwerp.\n• Belangrijk voor toon + bias.\n\n**Stap 2 — Globaal lezen** (skim):\n• Eerste + laatste alinea: vaak hoofdgedachte.\n• Tussenkopjes: structuur.\n• Niet alle woorden — krijg algemeen beeld.\n\n**Stap 3 — Vraag lezen + zoeken** (scan):\n• Onderstreep wat exact gevraagd wordt.\n• Zoek in tekst gericht naar woorden uit vraag.\n• Lees omliggende zinnen voor antwoord.\n\n**Stap 4 — Antwoord controleren**:\n• Past mijn antwoord echt in zin/alinea?\n• Sluit ik andere opties uit?\n\n**Vraagsoorten + tactiek**:\n\n**1. Hoofdgedachte / titel-keuze**:\n• 'Wat is de centrale boodschap van...?'\n• Tactiek: eerste + laatste alinea bekijken. Soms in een 'thesis-zin' (vaak begin/eind).\n\n**2. Detail-vraag**:\n• 'Wat zegt de auteur over X?'\n• Tactiek: scan op kernwoord (vaak in vraag genoemd). Lees zinnen errond.\n\n**3. Citaat vinden**:\n• 'Welke regel(s) ondersteunen...?'\n• Tactiek: zoek begripsmatch, geef regel-nummer + eerste woorden.\n\n**4. Inferentie / 'wat bedoelt auteur'**:\n• Niet letterlijk genoemd, maar af te leiden.\n• Tactiek: kijk naar toon + context + voorbeelden.\n\n**5. Mening-vraag** (auteur of personage):\n• 'Wat vindt de auteur van...?'\n• Tactiek: zoek signaal-woorden van mening: *à mon avis, je pense que, malheureusement, heureusement, sans doute*.\n\n**6. Functie-vraag**:\n• 'Wat is de functie van alinea X?' (illustratie, tegenargument, voorbeeld, conclusie, samenvatting).\n• Tactiek: relatie met vorige + volgende alinea analyseren.\n\n**7. Verwijswoord**:\n• 'Waar verwijst *cela* (= dit) in regel 23 naar?'\n• Tactiek: lees zin daarvoor — bijna altijd in eerdere zin.\n\n**8. Woord-betekenis uit context**:\n• 'Wat betekent X in deze context?'\n• Tactiek: lees zin + omliggende — kies optie die past.\n\n**Frans-specifieke valkuilen**:\n\n**Faux amis** (woorden die op NL/EN lijken maar anders betekenen):\n• *librairie* = boekwinkel (NIET bibliotheek = *bibliothèque*).\n• *éventuellement* = mogelijk (NIET eventueel = misschien in NL).\n• *actuellement* = momenteel (NIET actually = inderdaad).\n• *demander* = vragen (NIET demanding = eisend).\n• *sympathique* = aardig (NIET sympathiek = pity).\n• *travailler* = werken (NIET 'travel'en).\n• *passer un examen* = examen doen (NIET 'slagen' — dat is *réussir*).\n• *coin* = hoek (NIET coin = munt).\n\n**Ontkenningen + dubbele ontkenning**:\n• *ne...pas* = niet.\n• *ne...jamais* = nooit.\n• *ne...rien* = niets.\n• *ne...personne* = niemand.\n• *ne...que* = alleen maar (positief!).\n• Bij *ne...que* opletten: 'Il ne lit que des romans' = Hij leest alleen romans (NIET 'hij leest geen romans').\n\n**Connectoren** signaleren structuur:\n• *parce que / car* = omdat.\n• *donc / par conséquent* = dus.\n• *mais / cependant / pourtant* = maar.\n• *bien que* = hoewel (subjonctif!).\n• *en revanche* = daarentegen.\n• *en effet* = inderdaad.\n• *néanmoins / toutefois* = niettemin.\n• *d'une part... d'autre part* = enerzijds, anderzijds.\n• *en outre / de plus* = bovendien.\n\nLees connector → snap relatie tussen zinnen!",
    checks: [
      {
        q: "Bij 'Wat is de **hoofdgedachte** van de tekst?' — beste tactiek?",
        options: ["Lees eerste + laatste alinea aandachtig","Scan op kernwoord","Lees alle alinea's woord-voor-woord","Tel woorden"],
        answer: 0,
        wrongHints: [null, "Goed voor detail-vraag.", "Te traag.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Top + bottom = hoofd", tekst: "**Hoofdgedachte** staat meestal in **eerste of laatste alinea** (thesis-zin of conclusie). Daar gericht lezen. Detail-vragen vergen scanning op kernwoord." }],
          niveaus: { basis: "Eerst + laatst. A.", simpeler: "Hoofdgedachte = top+bottom = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "*Librairie* betekent in het Frans:",
        options: ["Boekwinkel","Bibliotheek","Wijnhandel","Apotheek"],
        answer: 0,
        wrongHints: [null, "Klassieke faux ami! Bibliotheek = *bibliothèque*.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Faux ami #1", tekst: "**Librairie** = boekwinkel (waar je boeken **koopt**). Bibliotheek (waar je boeken **leent**) = **bibliothèque**. Cito-klassieker — leerlingen verwarren dit constant." }],
          theorie: "Memo: 'librairie' is een 'librai' (boekverkoper) z'n winkel.",
          niveaus: { basis: "Boekwinkel. A.", simpeler: "Librairie = boekwinkel = A.", nogSimpeler: "Boekwinkel = A." },
        },
      },
      {
        q: "*Il ne lit **que** des romans*. Betekent:",
        options: ["Hij leest alleen romans","Hij leest geen romans","Hij leest soms romans","Hij wil romans lezen"],
        answer: 0,
        wrongHints: [null, "Faux! *ne...que* = alleen maar (positief!).", "Niet correct.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "ne...que ≠ ontkenning", tekst: "**ne...que** = alleen maar = beperking, **niet** ontkenning. *Il ne lit que des romans* = Hij leest **alleen** romans (= Hij leest niets anders dan romans).\n\nVerwarrend omdat *ne* meestal ontkenning is. Cito-favoriete val." }],
          theorie: "Andere ne-constructies: ne...pas (niet), ne...jamais (nooit), ne...rien (niets), ne...personne (niemand) — die zijn wel ontkenning.",
          niveaus: { basis: "Alleen. A.", simpeler: "ne...que = alleen = A.", nogSimpeler: "Alleen = A." },
        },
      },
      {
        q: "Connector *cependant* betekent:",
        options: ["Echter / maar","Dus","Omdat","Daarna"],
        answer: 0,
        wrongHints: [null, "Niet — dat is donc.", "Niet — dat is parce que.", "Niet — dat is ensuite/puis."],
        uitlegPad: {
          stappen: [{ titel: "Cependant = tegenstelling", tekst: "**Cependant** = echter, niettemin, maar. Signaleert tegenargument of nuance. Synoniemen: *toutefois*, *néanmoins*, *pourtant*. Belangrijke marker voor 'auteur draait richting om'." }],
          niveaus: { basis: "Echter. A.", simpeler: "Cependant = echter = A.", nogSimpeler: "Echter = A." },
        },
      },
      {
        q: "Bij 'Waarnaar verwijst *cela* in regel 24?' — kijk je:",
        options: ["Vooraf in zinnen vlak voor","Aan het eind van tekst","In titel","In voetnoot"],
        answer: 0,
        wrongHints: [null, "Niet — referentie meestal terug.", "Niet primair.", "Zelden in CSE."],
        uitlegPad: {
          stappen: [{ titel: "Verwijswoord wijst terug", tekst: "**Cela / ce / ça** verwijst meestal naar iets dat **vóór** is genoemd in de tekst (anaphoor). Lees 1-3 zinnen terug, zoek concept/idee dat past." }],
          theorie: "Idem voor: *il, elle, ils, elles, lui, leur, en, y* — eerst kijken waar verwezen wordt.",
          niveaus: { basis: "Vooraf. A.", simpeler: "Cela = terugverwijzen = A.", nogSimpeler: "Terug = A." },
        },
      },
    ],
  },

  // ─── C. Lange teksten + register ──────────────────────────
  {
    title: "Lange teksten + register",
    explanation:
      "Op CSE 1-2 **lange teksten** (~600-1000 woorden). Vergt structuur-analyse.\n\n**Structuur-analyse**:\n• **Inleiding**: introduceert thema, vaak met casus/voorbeeld.\n• **Hoofddeel**: argumenten, voorbeelden, gegevens.\n• **Conclusie**: samenvatting + uitspraak/oproep.\n\n**Argumentatieve teksten** (mening of debat):\n• Auteur heeft standpunt.\n• Geeft argumenten + voorbeelden.\n• Bespreekt soms tegenargument (concession).\n• Eindigt met conclusie of oproep.\n• Toon = vaak gepassioneerd of analytisch.\n\n**Informatieve teksten** (rapporteren):\n• Neutrale toon (in principe).\n• Feiten + cijfers.\n• Verschillende bronnen geciteerd.\n• Achter neutraliteit kan toch keuze in onderwerp/framing.\n\n**Persoonlijke verhalen / interviews**:\n• Subjectief.\n• Letten op: wie spreekt? Wat is rol/perspectief?\n• Citaten in aanhalingstekens.\n\n**Register** = mate van formaliteit + toon.\n\n**Formele register** (vous-vorm, complex zinsbouw):\n• *Cher Monsieur, je vous prie de bien vouloir...*\n• Officiële brieven, krant-artikelen, academische teksten.\n\n**Standaard register**:\n• Gewone krantenartikelen, magazines.\n• Tu of vous afhankelijk van context.\n\n**Informeel register** (tutoyer, korte zinnen, slang):\n• *Salut! T'as vu ce truc?*\n• Sms's, sociale media, jongerentijdschrift.\n• Argot (Frans slang): *bouquin* (boek), *boulot* (werk), *fric* (geld), *flic* (politieagent), *gosse* (kind).\n\n**Verlan** (woord-omdraaiing, vooral jonge Parijzenaars):\n• *meuf* = femme (vrouw).\n• *keuf* = flic (politie).\n• *zarbi* = bizarre (raar).\n• *chelou* = louche (verdacht).\n\n**Niveaus van twijfel/zekerheid** uitdrukken:\n• Sterk: *certainement, sans aucun doute, évidemment*.\n• Matig: *probablement, vraisemblablement, sans doute* (let op: *sans doute* = waarschijnlijk, niet zeker!).\n• Twijfel: *peut-être, il est possible que, on pourrait*.\n• Ironisch / verzwakkend: *prétendument, soi-disant* (zogenaamd — vaak kritisch).\n\n**Stijlfiguren** (vaak in literair / journalistiek):\n• **Métaphore** (metafoor): 'la vie est un voyage'.\n• **Ironie**: zegt tegenovergestelde voor effect.\n• **Hyperbole** (overdrijving): 'des millions de problèmes' = veel.\n• **Litote**: zegt minder dan bedoeld voor effect. 'Ce n'est pas mal' = is heel goed.\n• **Question rhétorique** (retorische vraag): voor effect, niet voor antwoord.\n\n**Tijden in Franse teksten**:\n• **Présent**: nu / algemeen / dramatisch verleden.\n• **Imparfait**: doorlopend in verleden / achtergrond / gewoonte. *Il pleuvait quand je suis sorti* (het regende toen ik buitenkwam).\n• **Passé composé**: voltooide actie verleden. *J'ai mangé* (ik heb gegeten / ik at).\n• **Passé simple**: literair verleden (alleen in romans/nieuws geschreven, niet gesproken). *Il alla* (hij ging) — VWO moet herkennen.\n• **Futur simple**: zal. *Je viendrai* (ik zal komen).\n• **Conditionnel**: zou. *Je viendrais* (ik zou komen). Of: hoffelijkheids-vorm *Je voudrais* (ik wil graag).\n• **Subjonctif**: gevoel/twijfel/wens, na bepaalde uitdrukkingen. *Il faut que je parte* (ik moet weg).\n\n**Tijden helpen tijdlijn-vragen**:\n'Wat gebeurde vóór wat?' Let op tijden.\n\n**Voorbeelden lange-tekst-vragen**:\n• Structuur: 'Welke functie heeft alinea 3?'\n• Toon: 'Hoe staat de auteur tegenover X?'\n• Verband alinea's: 'Welke alinea geeft tegenargument tegen X?'\n• Conclusie: 'Wat is de boodschap van de tekst?'\n• Personage: 'Welke uitspraak past bij persoon A vs B?'",
    checks: [
      {
        q: "*Sans doute* betekent:",
        options: ["Waarschijnlijk (niet zeker)","Zonder enige twijfel","Misschien","Twijfelend"],
        answer: 0,
        wrongHints: [null, "Faux ami! Niet 100%.", "Te zwak.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "Faux ami val", tekst: "**Sans doute** = waarschijnlijk (~80% kans). Klinkt als 'zonder twijfel' maar betekent juist **niet** absoluut zeker. Voor 'zeker' gebruik je *sans aucun doute*. Cito-favoriete val." }],
          niveaus: { basis: "Waarschijnlijk. A.", simpeler: "Sans doute = wschnl. = A.", nogSimpeler: "Wschnl = A." },
        },
      },
      {
        q: "*Bouquin* is **argot** voor:",
        options: ["Boek","Bouquet (bloemen)","Bouwer","Buurt"],
        answer: 0,
        wrongHints: [null, "Klinkt zo maar nee.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Slang voor livre", tekst: "**Bouquin** = boek (informeel, slang/argot). Komt in moderne teksten + interviews voor. Andere argot: *boulot* (werk), *fric* (geld), *flic* (politie). Verlan: *meuf* (femme), *keuf* (flic)." }],
          niveaus: { basis: "Boek. A.", simpeler: "Bouquin = boek = A.", nogSimpeler: "Boek = A." },
        },
      },
      {
        q: "*Ce n'est pas mal* (litote) betekent:",
        options: ["Het is best goed","Het is slecht","Het is verboden","Het is normaal"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld bedoeld.", "Niet — figuurlijk.", "Niet — emotionele uitspraak."],
        uitlegPad: {
          stappen: [{ titel: "Litote = onderschatting", tekst: "**Litote**: zegt minder dan bedoeld voor effect. 'Ce n'est pas mal' = letterlijk 'het is niet slecht' = bedoeld als **'het is goed/best aardig'** (positieve waardering). Voorbeelden litote: 'Pas bête!' = 'slim!'. 'Pas mauvais' = 'lekker'." }],
          niveaus: { basis: "Best goed. A.", simpeler: "Litote = onderschatten = A.", nogSimpeler: "Goed = A." },
        },
      },
      {
        q: "*Imparfait* (bv. *je mangeais*) gebruik je voor:",
        options: ["Doorlopende of gewoonte-actie in verleden","Voltooide actie","Toekomst","Wens"],
        answer: 0,
        wrongHints: [null, "Niet — passé composé.", "Niet — futur.", "Niet — conditionnel."],
        uitlegPad: {
          stappen: [{ titel: "Imparfait = was-aan-het-eten", tekst: "**Imparfait**: doorlopende of gewoonte-handeling in verleden. *Je mangeais quand il a téléphoné* = Ik was aan het eten toen hij belde. **Passé composé** voor voltooide: *J'ai mangé* = Ik heb gegeten." }],
          theorie: "Cito-pattern: tijdlijn-vragen door tijden interpreteren.",
          niveaus: { basis: "Doorlopend. A.", simpeler: "Imparfait = bezig/gewoonte = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke functie kan **alinea 3** in argumentatieve tekst hebben?",
        options: ["Tegenargument (concession)","Inleiding","Conclusie","Geen functie"],
        answer: 0,
        wrongHints: [null, "Niet — komt alinea 1.", "Niet — komt aan eind.", "Wel functie."],
        uitlegPad: {
          stappen: [{ titel: "Concession-alinea", tekst: "In argumentatieve teksten komt vaak een **tegenargument-alinea** (concession): 'sommigen zeggen X, maar...'. Auteur erkent kritisch geluid, weerlegt het, versterkt eigen positie. Signaal-woorden: *certes, il est vrai que, on pourrait dire que*." }],
          niveaus: { basis: "Tegenargument. A.", simpeler: "Alinea 3 = concession = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Cultuur + actualiteit ─────────────────────────────
  {
    title: "Cultuur + actualiteit-context",
    explanation:
      "CSE Frans-teksten gaan vaak over Franse maatschappij, cultuur, politiek of Europese actualiteit. **Context-kennis** helpt enorm.\n\n**Frankrijk in een notendop**:\n• Bevolking: ~68 mln.\n• Hoofdstad: Paris.\n• President: bestaat sinds Vijfde Republiek (1958, De Gaulle).\n• Huidig: Emmanuel Macron (sinds 2017, herkozen 2022).\n• Parlement: Assemblée Nationale + Sénat.\n• Premier: door president benoemd.\n• EU + euro + Schengen-zone.\n• Lid VN-Veiligheidsraad (vetorecht).\n• Kernmacht.\n\n**Belangrijke Franse media** (vaak bron voor CSE-teksten):\n• Le Monde (kwaliteits-krant, links-liberaal).\n• Le Figaro (rechts-liberaal).\n• Libération (links).\n• Le Parisien (populair).\n• Mediapart (digitaal, onderzoeksjournalistiek).\n• Courrier International (buitenlands nieuws-overzicht).\n\n**Franse politieke partijen** (recente):\n• **Renaissance** (Macron, centrum).\n• **Rassemblement National** (Le Pen, extreem-rechts).\n• **La France Insoumise** (Mélenchon, extreem-links).\n• **Les Républicains** (klassiek rechts).\n• **Parti Socialiste** (PS, traditioneel links).\n• **Europe Écologie Les Verts** (groenen).\n\n**Recente Franse + Europese onderwerpen** (CSE 2024-25):\n• Gele Hesjes (Gilets jaunes 2018-).\n• Pensioenhervorming + protesten 2023.\n• Klimaatbeleid + Europese Green Deal.\n• Russisch-Oekraïense oorlog + EU-respons.\n• Energiecrisis + kernenergie-keuze (FR is grote kernenergie-producent).\n• Immigratie + integratie-debat.\n• Banlieues-spanningen (voorsteden Parijs).\n• Vaccinatie-debat post-COVID.\n• AI-regulering (EU AI Act 2024).\n• Olympische Spelen Paris 2024.\n\n**Frankrijk-specifieke begrippen**:\n• **Laïcité** = staats-secularisme (sinds wet 1905). Belangrijk: openbare ruimte religieus-neutraal. Geen hoofddoek in openbare scholen, geen kruisen in stadhuizen.\n• **Banlieue** = voorstad. Vaak negatief connotation (sociaal kwetsbare wijken rond Parijs).\n• **Brevet** = einde-onderbouw-examen (~3e klas).\n• **Baccalauréat** = einddiploma middelbare school.\n• **Grandes écoles** = elite-hogescholen (Polytechnique, ENA-opvolger, HEC).\n• **Sécurité sociale (sécu)** = sociaal zekerheidssysteem.\n• **SMIC** = minimumloon.\n• **TGV** = hoge-snelheidstrein.\n• **TVA** = BTW.\n• **EHPAD** = verpleeghuis ouderen.\n• **HLM** = sociale-woningbouw (vergelijkbaar met NL-corporatie).\n\n**Franse cultuur-iconen**:\n• Schrijvers: Victor Hugo, Albert Camus, Marcel Proust, Simone de Beauvoir, Annie Ernaux (Nobelprijs 2022).\n• Filosofen: Sartre, Foucault, Beauvoir, Camus.\n• Kunstenaars: Monet, Cézanne, Picasso (geboren in Spanje, woonde FR).\n• Muziek: Edith Piaf, Charles Aznavour, Daft Punk, Stromae (Belgische), Aya Nakamura.\n• Film: Truffaut, Godard, Audiard, recente: Houda Benyamina, Céline Sciamma.\n• Sport: Zinedine Zidane, Kylian Mbappé, Antoine Griezmann.\n\n**Franse + Europese cijfers** (vaak in CSE):\n• EU-leden: 27 sinds Brexit (2020).\n• EU-bevolking: ~448 mln.\n• Euro-zone: 20 landen.\n• Klimaat: EU-doel 55% CO₂-reductie 2030 vs 1990.\n• Frankrijk kernenergie: ~70% elektriciteit.\n\n**Tips voor algemeen actualiteits-bewustzijn**:\n• Lees soms NL-krant over Frans/EU-nieuws.\n• Volg podcast 'Inside Europe' of YouTube-kanaal France 24.\n• Bekijk recente examens (examenblad.nl) — terugkerende thema's herkennen.\n\n**Cito-pattern**: vragen over **achtergrond of cultureel begrip** zonder dat het in tekst zelf staat. Iemand die Macron niet kent of Olympische Spelen Paris niet, mist context-clue.",
    checks: [
      {
        q: "Wat is **laïcité**?",
        options: ["Staats-secularisme (religieuze neutraliteit)","Liefde voor Frankrijk","Onderwijssysteem","Belasting"],
        answer: 0,
        wrongHints: [null, "Dat zou 'amour de la France' zijn.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "1905-wet", tekst: "**Laïcité** = Frans staats-secularisme: openbare ruimte (school, stadhuis, ziekenhuis) is religieus-neutraal. Wet 1905 scheidt kerk en staat. Daarom: geen hoofddoek op openbare scholen, geen religieuze symbolen in ambtenaren-ruimten. Vaak fel debat." }],
          theorie: "Cito-favoriet: hoofddoekenwet 2004, burqa-verbod 2010, debat over politieagenten met religieuze symbolen.",
          niveaus: { basis: "Secularisme. A.", simpeler: "Laïcité = neutrale staat = A.", nogSimpeler: "Neutraal = A." },
        },
      },
      {
        q: "**Le Monde** is welke krant?",
        options: ["Kwaliteits-krant, links-liberaal","Rechts-extreem","Sport-krant","Tabloid"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — algemeen nieuws.", "Niet — kwaliteits-krant."],
        uitlegPad: {
          stappen: [{ titel: "Krant van referentie", tekst: "**Le Monde** = belangrijkste kwaliteits-krant Frankrijk. Centrum-links, oprichting 1944. Internationale invloed. CSE-bron-favoriet. Tegenstellingen: Le Figaro (rechts), Libération (links)." }],
          niveaus: { basis: "Kwaliteits-krant. A.", simpeler: "Le Monde = kwaliteit-link = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel **EU-lidstaten** sinds Brexit?",
        options: ["27","28","26","25"],
        answer: 0,
        wrongHints: [null, "Voor Brexit.", "Te weinig.", "Te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Brexit 2020", tekst: "Voor Brexit: 28 lidstaten. Na Brexit (31 jan 2020 officieel): **27 lidstaten**. Eurozone: 20 (sinds Kroatië 2023)." }],
          niveaus: { basis: "27. A.", simpeler: "28-1=27 = A.", nogSimpeler: "27 = A." },
        },
      },
      {
        q: "*Banlieue* heeft vaak welke connotatie?",
        options: ["Sociaal-kwetsbare voorstad","Luxe-wijk","Centrum","Platteland"],
        answer: 0,
        wrongHints: [null, "Niet — dat zou *quartier chic* zijn.", "Niet — banlieue is rand.", "Niet — buiten stad maar urbaan."],
        uitlegPad: {
          stappen: [{ titel: "Banlieue = sociale kwestie", tekst: "**Banlieue** = letterlijk 'voorstad'. In Franse context vaak **sociaal kwetsbare wijk** rond grote steden (Parijs, Lyon, Marseille). Veel woningbouw uit jaren '60-70, hoge werkloosheid, soms etnische spanning. Onderwerp van politieke debatten + rellen (2005, 2023)." }],
          niveaus: { basis: "Sociaal-kwetsbaar. A.", simpeler: "Banlieue = arme voorstad = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Frankrijk wekt ~70% elektriciteit op uit:",
        options: ["Kernenergie","Olie","Steenkool","Zon"],
        answer: 0,
        wrongHints: [null, "Niet — weinig olie-stroom.", "Niet — uitgefaseerd.", "Wel groeiend maar niet 70%."],
        uitlegPad: {
          stappen: [{ titel: "Kern = Franse keuze", tekst: "**Frankrijk: ~70% elektriciteit uit kernenergie** (56 reactoren). Sinds jaren '70 strategische keuze. Pro: lage CO₂, energie-onafhankelijk. Con: afval, ontmanteling-kosten, Fukushima-zorgen. Macron heeft pro-kern-koers; nieuwe EPR-reactoren in aanbouw." }],
          theorie: "Cito-actueel: klimaat-debat + energie-onafhankelijkheid sinds Oekraïne-oorlog → Europa heroverweegt kern.",
          niveaus: { basis: "Kernenergie. A.", simpeler: "FR 70% = kern = A.", nogSimpeler: "Kern = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Frans CSE-strategie mix",
    explanation:
      "Mix van examen-format + vraagsoorten + register + cultuur.\n\nVeel succes!",
    checks: [
      {
        q: "*Actuellement* betekent:",
        options: ["Momenteel","Daadwerkelijk","Vandaag","Vroeger"],
        answer: 0,
        wrongHints: [null, "Faux ami met EN 'actually'.", "Niet — *aujourd'hui*.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [{ titel: "Faux ami met EN", tekst: "**Actuellement** = momenteel / op dit moment / tegenwoordig. **Niet** 'actually' (daadwerkelijk) = *en fait, vraiment*. Cito-favoriete val voor leerlingen die ook Engels leren." }],
          niveaus: { basis: "Momenteel. A.", simpeler: "Actuellement = nu = A.", nogSimpeler: "Nu = A." },
        },
      },
      {
        q: "Connector *en revanche* betekent:",
        options: ["Daarentegen","Daarna","Dus","Met wraakzucht"],
        answer: 0,
        wrongHints: [null, "Niet — dat is *ensuite*.", "Niet — dat is *donc*.", "Klinkt zo maar nee."],
        uitlegPad: {
          stappen: [{ titel: "Tegenstelling", tekst: "**En revanche** = daarentegen, anderzijds. Markeert contrast tussen 2 ideeën. Synoniemen: *par contre, en revanche, à l'inverse*." }],
          niveaus: { basis: "Daarentegen. A.", simpeler: "En revanche = daarentegen = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Annie Ernaux** is:",
        options: ["Frans schrijfster, Nobelprijs 2022","Politica","Zangeres","Sportster"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Recent Nobel", tekst: "**Annie Ernaux** (geb. 1940) won **Nobelprijs Literatuur 2022**. Autobiografische romans over werkende klasse, vrouwelijke ervaring. Bekendste werken: *La Place*, *Les Années*, *L'Événement*. Vaak in CSE-teksten over hedendaagse Franse literatuur." }],
          niveaus: { basis: "Schrijfster Nobel. A.", simpeler: "Ernaux = schrijver-Nobel = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Tijdens **CSE** mag je:",
        options: ["Beide woordenboeken + papier-aantekeningen niet","Telefoon","Vertaal-app","Internet"],
        answer: 0,
        wrongHints: [null, "Verboden.", "Verboden.", "Verboden."],
        uitlegPad: {
          stappen: [{ titel: "Alleen woordenboeken", tekst: "**Toegestaan**: papieren woordenboeken (eentalig + tweetalig). **Verboden**: telefoon, smartwatch, tablet, internet, vertaal-app, eigen aantekeningen, andere boeken. Bij overtreding: examen ongeldig." }],
          niveaus: { basis: "Beide woordenboeken. A.", simpeler: "Alleen woordenboeken = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Bij **lange tekst** verdeel je tijd voor:",
        options: ["Globaal lezen + vragen + check","Alleen vragen lezen","Alleen tekst lezen","Verkoper toespreken"],
        answer: 0,
        wrongHints: [null, "Onvoldoende.", "Onvoldoende.", "Niet — eenzaam examen."],
        uitlegPad: {
          stappen: [{ titel: "Drie-fasen-strategie", tekst: "**Strategie**: (1) 5 min globaal lezen voor structuur. (2) 8 min vragen + scanning. (3) 2 min antwoorden checken. Bij lange teksten ietsje meer voor stap 1. Bij twijfel-vraag: ga door, kom terug." }],
          niveaus: { basis: "3 fasen. A.", simpeler: "Lezen+vragen+check = A.", nogSimpeler: "3 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const fransCseHavoVwo = {
  id: "frans-cse-havo-vwo",
  title: "Frans CSE leesvaardigheid (HAVO/VWO)",
  emoji: "🇫🇷",
  level: "havo4-5-vwo",
  subject: "frans",
  referentieNiveau: "havo-B1-vwo-B2",
  sloThema: "Frans HAVO/VWO — CSE leesvaardigheid eindexamen",
  prerequisites: [
    { id: "passe-compose-frans", title: "Passé composé", niveau: "klas2-3" },
    { id: "werkwoordsvervoeging-frans", title: "Werkwoordsvervoeging Frans", niveau: "klas2-3" },
  ],
  intro:
    "Frans HAVO/VWO CSE leesvaardigheid-strategie. Examen-format (2,5/3u, ~10 teksten, B1/B2), vraagsoorten + scanning + faux amis (librairie/sans doute/actuellement) + ne...que-val, lange teksten + register (formeel/informeel/argot/verlan) + tijden, Franse cultuur + actualiteit (laïcité/banlieue/Macron/Le Monde). ~15-20 min.",
  triggerKeywords: [
    "Frans CSE", "centraal examen Frans",
    "leesvaardigheid Frans",
    "faux amis",
    "librairie", "bibliothèque",
    "sans doute", "actuellement",
    "ne pas", "ne que", "ne jamais", "ne rien",
    "connecteurs", "cependant", "en revanche", "donc", "parce que",
    "argot", "verlan",
    "bouquin", "boulot", "fric",
    "laïcité", "banlieue",
    "Macron", "France",
    "Le Monde", "Le Figaro",
    "imparfait", "passé composé", "passé simple",
    "subjonctif", "conditionnel",
    "Annie Ernaux",
    "EU Brexit",
    "kernenergie Frankrijk",
    "litote", "métaphore", "ironie",
  ],
  chapters,
  steps,
};

export default fransCseHavoVwo;
