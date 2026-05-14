// Leerpad: Dichten + poëzie + rijmen - groep 5-8 taal/Cito.
// Cito-vraag: rijmschema, beeldspraak, gedicht-soorten. 1F.
// 5 stappen.

const stepEmojis = ["🎭", "🔄", "✨", "📝", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een gedicht?", emoji: "🎭", from: 0, to: 0 },
  { letter: "B", title: "Rijm + ritme", emoji: "🔄", from: 1, to: 1 },
  { letter: "C", title: "Beeldspraak in poëzie", emoji: "✨", from: 2, to: 2 },
  { letter: "D", title: "Soorten gedichten", emoji: "📝", from: 3, to: 3 },
  { letter: "E", title: "Eind-toets", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een gedicht?",
    explanation:
      "**Gedicht / poëzie** = korte, kunstige tekst met **rijm** of **ritme**.\n\n**Hoe herken je een gedicht?**\n\n• Vaak **kort**.\n• Geschreven in **regels** *(niet doorlopende zinnen)*.\n• **Couplet** *(stukje van een paar regels)*.\n• Soms **rijm** *(woorden klinken hetzelfde)*.\n• **Beeldspraak** *(figuurlijk taalgebruik)*.\n• **Emotie** of speciale **gedachte**.\n\n**Voorbeeld**:\n*'Het is zo eenzaam in de nacht / De wind die om mijn vensters klacht / De maan kijkt streng naar mij omlaag / Wat ik wel doe, vraagt hij gestaag.'*\n\nDit is een **gedicht** omdat:\n• Geschreven in regels.\n• Rijm: nacht-klacht, omlaag-gestaag.\n• Beeldspraak: 'maan kijkt streng' *(maan kan niet kijken)*.\n• Emotie: eenzaamheid.\n\n**Verschil gedicht en proza**:\n• **Proza** = gewone tekst *(boek, krant, brief)*. Doorlopend.\n• **Gedicht** = poëzie. In regels.\n\n**Bouwstenen van gedicht**:\n\n**1. Regel** *(versregel)*:\nElke nieuwe zin / nieuwe regel.\n\n**2. Couplet** / **strofe**:\nGroep van regels bij elkaar.\nMeestal 4 regels *(kwatrijn)*, maar kan ook 3 *(terzine)* of 6 *(sextet)*.\n\n**3. Wit**:\nLege ruimte tussen coupletten.\nIs **functioneel** — geeft pauze in gedicht.\n\n**4. Refrein**:\nRegel of couplet dat **terugkomt**. Net als bij liedjes.\n\n**Waarom dichten?**\n• **Gevoel** uitdrukken.\n• **Kort + krachtig** boodschap.\n• **Mooi taalgebruik** waarderen.\n• **Onthouden** *(rijm helpt onthouden — daarom kinderliedjes rijmen)*.\n\n**Bekende NL-dichters**:\n• **Annie M.G. Schmidt** *(1911-1995)* — kindergedichten *('Het Beertje Pippeloentje', 'Sebastiaan')*.\n• **Joost van den Vondel** *(1587-1679)* — Gouden Eeuw, 'Gysbreght van Aemstel'.\n• **Hendrik Marsman** *(1899-1940)* — 'Denkend aan Holland'.\n• **Rutger Kopland** *(1934-2012)* — modern, natuur.\n• **Toon Tellegen** *(1941+)* — dieren-gedichten.\n• **Lévi Weemoedt** *(1948+)* — humoristisch, melancholie.\n\n**Cito-feitje**:\n*'Denkend aan Holland'* van Marsman *(1936)* is het bekendste NL-gedicht: 'Denkend aan Holland zie ik brede rivieren traag door oneindig laagland gaan...'. Begin staat op munt sinds 2014.",
    checks: [
      {
        q: "Wat is een **gedicht**?",
        options: ["Korte tekst in regels met rijm/ritme", "Lang verhaal", "Krantenartikel", "Brief"],
        answer: 0,
        wrongHints: [null, "Proza.", "Proza.", "Proza."],
        uitlegPad: {
          stappen: [
            { titel: "Wat maakt het een gedicht?", tekst: "Een **gedicht** (ook wel **poëzie**) is een tekst waarbij:\n• De **woorden in regels** staan (geen doorlopende zinnen).\n• Er vaak **rijm** of **ritme** is.\n• Veel **beeldspraak** wordt gebruikt.\n• Het meestal **kort** is en een **gevoel** of **gedachte** uitdrukt." },
            { titel: "Verschil met proza", tekst: "**Proza** = gewone doorlopende tekst (boek, krant, brief). **Poëzie** = in versregels, vaak met rijm. Zelfde verhaal kun je in beide vormen vertellen — maar voelt anders." },
            { titel: "Bouwstenen van gedicht", tekst: "• **Versregel** = 1 regel van het gedicht.\n• **Couplet (strofe)** = groep regels samen.\n• **Rijm** = woorden klinken hetzelfde.\n• **Wit** = lege ruimte tussen coupletten (functioneel — geeft pauze)." },
          ],
          woorden: [
            { woord: "gedicht / poëzie", uitleg: "Korte tekst in regels, vaak met rijm." },
            { woord: "proza", uitleg: "Gewone doorlopende tekst." },
            { woord: "couplet / strofe", uitleg: "Groep regels samen." },
          ],
          theorie: "Cito-tip: een gedicht herken je aan de **regels** (in plaats van zinnen), het **rijm/ritme**, en de **emotionele lading**. Beroemde NL-dichter: Annie M.G. Schmidt voor kinderen, Hendrik Marsman voor volwassenen.",
          voorbeelden: [
            { type: "stap", tekst: "'Denkend aan Holland / zie ik brede rivieren / traag door oneindig laagland gaan' — Marsman. Gedicht: in regels, met sfeer." },
            { type: "stap", tekst: "Zelfde inhoud als proza: 'Wanneer ik aan Holland denk, zie ik brede rivieren langzaam door een oneindig laagland stromen.' Veel minder bijzonder." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Regels + rijm + emotie = poëzie. Doorlopend = proza. Allebei kunnen mooi zijn, maar verschillende vorm." }],
          niveaus: {
            basis: "Korte tekst in regels met rijm/ritme. = A.",
            simpeler: "Gedicht = woorden in regels, vaak met rijm + gevoel. = A.",
            nogSimpeler: "Korte tekst in regels = A.",
          },
        },
      },
      {
        q: "Wat is een **couplet**?",
        options: ["Groep regels bij elkaar", "Hele gedicht", "1 regel", "Pauze"],
        answer: 0,
        wrongHints: [null, "Te groot.", "Te klein.", "Wit."],
      },
      {
        q: "**Annie M.G. Schmidt** schreef vooral?",
        options: ["Kindergedichten", "Romans", "Filosofie", "Wiskunde"],
        answer: 0,
        wrongHints: [null, "Ook iets maar primair niet.", "Niet.", "Niet."],
      },
      {
        q: "Wat is **proza**?",
        options: ["Gewone doorlopende tekst", "Gedicht", "Lied", "Toneelstuk"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel gerelateerd.", "Wel maar specifiek."],
      },
    ],
  },
  {
    title: "Rijm + ritme",
    explanation:
      "**Rijm** = woorden die **eindigen hetzelfde**.\n\n**Voorbeelden**:\n• boom – room *(eindigen op -oom)*.\n• vlieg – tijg *(eindigen op -ieg... bijna)*.\n• kat – pad *(eindigen op -at)*.\n• zon – kon *(eindigen op -on)*.\n\n**Soorten rijm**:\n\n**1. Eindrijm** *(meest bekend)*:\n*'De zon scheen mooi / Ik liep door 't strooi.'*\n→ Mooi rijmt op strooi.\n\n**2. Beginrijm** *(alliteratie)*:\nWoorden beginnen met zelfde letter.\n*'Mooie Mette mocht mee.'*\n→ M-M-M-M.\n\n**3. Binnenrijm**:\nRijm midden in regel.\n*'In de boot, met zijn voet'.*\n\n**Rijmschema's** — patroon van rijm in gedicht:\n\n**AABB** = paarrijm *(per twee)*:\nA. Mijn kat is **fijn** (A)\nB. Hij speelt graag in 't **plein** (A)\nC. Hij is wit en **zwart** (B)\nD. En heeft een goed **hart** (B)\n\n**ABAB** = gekruist rijm:\nA. Mijn kat is **fijn** (A)\nB. Hij is wit en **zwart** (B)\nC. Hij speelt graag in 't **plein** (A)\nD. En heeft een goed **hart** (B)\n\n**ABBA** = omarmend rijm:\nA. Mijn kat is **fijn** (A)\nB. Hij is wit en **zwart** (B)\nC. En heeft een goed **hart** (B)\nD. Hij speelt graag in 't **plein** (A)\n\n**Hoe herken je rijmschema?**\n1. Markeer eindwoorden van elke regel.\n2. Eerste eindwoord = **A**.\n3. Nieuw rijmgeluid = nieuwe letter (B, C, ...).\n4. Zelfde rijmgeluid als eerder = zelfde letter.\n\n**Voorbeeld**:\n*'De hond loopt naar de boom* (A)\n*Hij vindt daar zijn lieve ploom* (A)\n*Maar dan rent hij snel weer weg* (B)\n*Want de poes is op zijn pad* (B)\n*De jacht is plotseling klaar* (C)\n*Want ze worden vriendelijk samen* (D)\n\nRijmschema: AABBCD.\n\n**Ritme** = de **klemtoon** van een gedicht.\n• Sommige lettergrepen hebben **klemtoon** *(luid)*, andere niet.\n• Dada-dada-dada *(jambisch — 'da-DA da-DA')*.\n• DAda-DAda-DAda *(trocheïsch — 'DA-da DA-da')*.\n\n**Versmaat** = vast aantal lettergrepen per regel.\nKlassieke poëzie heeft vaak vast ritme + versmaat. Moderne poëzie vaak vrij.\n\n**Cito-feitje**:\n*'Sinterklaasje kom maar binnen met je knecht'* — dit kinderliedje rijmt: binnen / kapoentje. **Rijm helpt onthouden** — daarom rijmen reclames + leuzes.",
    checks: [
      {
        q: "Wat is **eindrijm**?",
        options: ["Woorden eindigen hetzelfde", "Beginnen hetzelfde", "Klemtoon", "Lengte gelijk"],
        answer: 0,
        wrongHints: [null, "Alliteratie.", "Ritme.", "Versmaat."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is eindrijm?", tekst: "Bij eindrijm eindigen 2 (of meer) woorden met dezelfde klank. Het is de bekendste vorm van rijm." },
            { titel: "Voorbeeld", tekst: "'kat – pad' rijmt (beide eindigen op -at klank). 'zon – kon' rijmt (beide op -on). 'boom – room' rijmt (beide op -oom)." },
            { titel: "Niet hetzelfde geschreven, maar gehoord", tekst: "Rijm gaat om de KLANK, niet de spelling. 'kou – jou' rijmen (ou-klank gelijk), ook al spel je ze anders." },
          ],
          woorden: [
            { woord: "eindrijm", uitleg: "Klank-overeenkomst aan einde van regels." },
            { woord: "alliteratie", uitleg: "Anders: woorden BEGINNEN gelijk (mooie Mette mocht)." },
          ],
          theorie: "Cito-tip rijm: spreek de woorden HARDOP uit. Klinken ze hetzelfde aan het eind? Dan rijmt het. Niet kijken naar spelling.",
          voorbeelden: [
            { type: "stap", tekst: "'huis – muis' = eindrijm (-uis)." },
            { type: "stap", tekst: "'spelen – delen' = eindrijm (-elen)." },
            { type: "stap", tekst: "'water – kater' = eindrijm (-ater)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eindrijm = klank aan EIND. Alliteratie = letter aan BEGIN. Verschillende dingen." }],
          niveaus: {
            basis: "Eindrijm = woorden klinken hetzelfde aan eind (kat-pad).",
            simpeler: "Hardop lezen — zelfde klank? = rijm.",
            nogSimpeler: "Eind-klank gelijk = rijm.",
          },
        },
      },
      {
        q: "Wat is **alliteratie**?",
        options: ["Woorden beginnen met zelfde letter", "Woorden rijmen aan eind", "Zelfde betekenis", "Ritme"],
        answer: 0,
        wrongHints: [null, "Eindrijm.", "Synoniem.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is alliteratie?", tekst: "Alliteratie is wanneer meerdere woorden achter elkaar BEGINNEN met dezelfde letter (of klank)." },
            { titel: "Voorbeeld: Mooie Mette mocht mee", tekst: "M - M - M - M. Vier woorden, allemaal beginnend met M. Dat is alliteratie." },
            { titel: "Waarom gebruikt men het?", tekst: "Alliteratie geeft EXTRA ritme of nadruk. Reclames gebruiken het veel: 'Calvé pindakaas perfect'." },
          ],
          woorden: [
            { woord: "alliteratie", uitleg: "Zelfde BEGIN-letter bij meerdere woorden." },
            { woord: "eindrijm", uitleg: "Anders: zelfde EIND-klank." },
          ],
          theorie: "Cito-tip: alliteratie = BEGIN-rijm (begin-letter gelijk). Eindrijm = EIND-rijm (eind-klank gelijk). Twee verschillende vormen van rijm.",
          voorbeelden: [
            { type: "stap", tekst: "'Sappige sinaasappel sap' = S-S-S = alliteratie." },
            { type: "stap", tekst: "'Brullende beer' = B-B = alliteratie (al maar 2 woorden, telt al)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Alliteratie = AAN het begin. Eindrijm = aan het einde. Vergeet dat niet." }],
          niveaus: {
            basis: "Alliteratie = woorden BEGINNEN met zelfde letter.",
            simpeler: "Mooie Mette: M-M-M. Begin-rijm.",
            nogSimpeler: "Begin-letter gelijk = alliteratie.",
          },
        },
      },
      {
        q: "**AABB** is welk rijmschema?",
        options: ["Paarrijm (per 2)", "Gekruist", "Omarmend", "Geen rijm"],
        answer: 0,
        wrongHints: [null, "ABAB.", "ABBA.", "Wel rijm."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een rijmschema?", tekst: "Een rijmschema laat zien welke regels op elkaar rijmen. Je geeft elke rijm-klank een letter (A, B, C)." },
            { titel: "AABB = paarrijm", tekst: "AABB betekent: regel 1 + 2 rijmen samen (A), en regel 3 + 4 ook samen (B). Per 2 regels = PAAR-rijm." },
            { titel: "Verschil met ABAB/ABBA", tekst: "ABAB = GEKRUIST (kruislings). ABBA = OMARMEND (binnenste 2 rijmen, buitenste 2 rijmen). AABB = direct na elkaar = paarrijm." },
          ],
          woorden: [
            { woord: "paarrijm (AABB)", uitleg: "Twee regels achter elkaar rijmen." },
            { woord: "gekruist (ABAB)", uitleg: "Regel 1 met 3, regel 2 met 4." },
            { woord: "omarmend (ABBA)", uitleg: "Regel 1 met 4, regel 2 met 3." },
          ],
          theorie: "Cito-truc: lees gedicht hardop. Markeer welke regels op elkaar rijmen. Eerste rijm = A. Nieuwe klank = B. Daarna kun je het schema zien.",
          voorbeelden: [
            { type: "stap", tekst: "Paarrijm AABB: 'Kat (A) / pad (A) / muur (B) / vuur (B)'." },
            { type: "stap", tekst: "Gekruist ABAB: 'Kat (A) / muur (B) / pad (A) / vuur (B)'." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Zelfde letter = die regels rijmen met elkaar. Verschillende letters = ze rijmen NIET met elkaar." }],
          niveaus: {
            basis: "AABB = paarrijm (regel 1+2 rijmen, regel 3+4 rijmen).",
            simpeler: "Direct na elkaar rijmen = paarrijm = AABB.",
            nogSimpeler: "Paren rijmen = AABB.",
          },
        },
      },
      {
        q: "Wat is **versmaat**?",
        options: ["Vast aantal lettergrepen per regel", "Rijm", "Onderwerp", "Couplet"],
        answer: 0,
        wrongHints: [null, "Wel maar specifiek dit.", "Niet maatvoering.", "Niet specifiek."],
      },
    ],
  },
  {
    title: "Beeldspraak in poëzie",
    explanation:
      "**Beeldspraak** = woorden gebruiken **anders dan letterlijk**.\nMaakt gedicht **levendiger + sterker**.\n\n**Soorten beeldspraak in poëzie**:\n\n**1. Vergelijking** *('als' of 'zo X als Y')*:\n*'De wolken zijn zo wit als sneeuw.'*\n*'Mijn liefde is als een rode roos.'*\n\n**2. Metafoor** *(zonder 'als')*:\n*'Mijn liefde is een rode roos.'*\n*'Tijd is geld.'*\n\n**3. Personificatie** *(dood ding doet als persoon)*:\n*'De wind fluistert.'*\n*'De zon lacht naar mij.'*\n*'De stenen klagen.'*\n\n**4. Hyperbool** *(overdrijving)*:\n*'Ik heb honderd keer gezegd!'*\n*'Het is hier sneller dan licht.'*\n\n**5. Onderdrijving / litote** *(zwakker zeggen)*:\n*'Hij is niet de slimste'* *(= hij is dom)*.\n*'Het was niet onaardig'* *(= het was aardig)*.\n\n**6. Symboliek**:\n• Roos = liefde.\n• Wolk = onzekerheid / verandering.\n• Boom = leven / sterkte.\n• Vogel = vrijheid.\n• Nacht = dood / mysterie.\n• Licht = hoop / kennis.\n\n**Cito-vraag-type 'wat betekent...?'**:\nVraag geeft beeldspraak — leerling moet **betekenis** kiezen.\n\nVoorbeeld:\n*'Mijn hart is een vogel die wegvliegt.'*\n\nWat betekent dit?\nA. De spreker zit te eten. ❌\nB. De spreker is verliefd / opgewonden. ✅\nC. Iemand heeft een hartaanval. ❌\nD. De spreker is gewond. ❌\n\n**Antwoord: B** — hart als vogel = blijheid / verliefdheid.\n\n**Stappenplan**:\n1. Lees beeldspraak.\n2. Wat is **letterlijke** betekenis? *(hart-vogel)*\n3. Wat is **figuurlijke** betekenis? *(emotie)*\n4. Kies antwoord dat figuurlijk past.\n\n**Sfeer + toon**:\nGedichten hebben een **sfeer** *(stemming)*:\n• Vrolijk, droevig, mysterieus, romantisch, woedend.\n\n**Hoe herken je sfeer?**\n• Welke woorden gebruikt dichter? *('zonnig' = vrolijk, 'donker' = droevig)*\n• Welke beeldspraak? *(bloemen = vrolijk, donderwolken = somber)*\n• Welk tempo? *(snel ritme = opwinding, langzaam = rust)*\n\n**Cito-feitje**:\nVeel dichters gebruiken **natuur** als beeldspraak. Wolken voor onzekerheid, lente voor nieuw begin, herfst voor afscheid. Lees gedicht **2x** — eerste keer voor verhaal, tweede voor diepere betekenis.",
    checks: [
      {
        q: "Wat is **personificatie**?",
        options: ["Dood ding doet als mens", "Synoniem", "Rijm", "Tegenovergesteld"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is personificatie?", tekst: "**Personificatie** = je laat een **levenloos ding** of **dier** doen alsof het een MENS is. Het krijgt menselijke eigenschappen (denken, voelen, praten, lachen, huilen)." },
            { titel: "Voorbeelden", tekst: "• 'De **wind fluistert**' (wind kan niet fluisteren — alleen mensen)\n• 'De **zon lacht** naar mij' (zon kan niet lachen)\n• 'De **stenen klagen**' (stenen voelen niets)\n• 'De **bomen dansen** in de wind' (bomen dansen niet)\nEen levenloos ding krijgt een menselijke actie." },
            { titel: "Waarom gebruiken dichters dit?", tekst: "Personificatie maakt poëzie **levendig + visueel**. Een zon die LACHT voel je beter dan 'het was zonnig'. Het geeft sfeer en emotie. Veel sprookjes + gedichten gebruiken het." },
          ],
          woorden: [
            { woord: "personificatie", uitleg: "Levenloos ding krijgt menselijke eigenschappen." },
            { woord: "metafoor", uitleg: "ANDERS: vergelijking zonder 'als' (jouw hart = rode roos)." },
            { woord: "hyperbool", uitleg: "ANDERS: overdrijving (honderd keer gezegd)." },
          ],
          theorie: "Cito-truc beeldspraak-soorten:\n• **Personificatie** = ding doet als mens\n• **Vergelijking** = 'als' / 'zoals' erbij\n• **Metafoor** = vergelijking zonder 'als'\n• **Hyperbool** = overdrijving\nElk een eigen naam — leer het verschil.",
          voorbeelden: [
            { type: "stap", tekst: "'De wolken **huilen**' (= personificatie, wolken kunnen niet huilen — bedoeld: regen)." },
            { type: "stap", tekst: "'De wind is **als** een fluistering' = vergelijking (heeft 'als')." },
            { type: "stap", tekst: "'De wind **is** een fluistering' = metafoor (geen 'als')." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Persoon-ificatie = van iets levenloos een PERSOON maken (in taal). Zoek menselijk werkwoord bij niet-mens." }],
          niveaus: {
            basis: "Personificatie = dood ding doet als mens. = A.",
            simpeler: "Een wind die 'fluistert' of een zon die 'lacht' = personificatie. Het ding krijgt menselijke eigenschappen. = A.",
            nogSimpeler: "Ding doet als mens = A.",
          },
        },
      },
      {
        q: "*'De zon lacht naar mij'* — wat?",
        options: ["Personificatie", "Hyperbool", "Synoniem", "Geen beeldspraak"],
        answer: 0,
        wrongHints: [null, "Geen overdrijving.", "Niet.", "Wel beeldspraak."],
      },
      {
        q: "Wat is **hyperbool**?",
        options: ["Overdrijving", "Onderdrijving", "Synoniem", "Rijm"],
        answer: 0,
        wrongHints: [null, "Litote.", "Niet.", "Niet."],
      },
      {
        q: "*'Mijn hart is een vogel'* — wat?",
        options: ["Metafoor (vergelijking zonder 'als')", "Letterlijk", "Hyperbool", "Geen"],
        answer: 0,
        wrongHints: [null, "Figuurlijk.", "Geen overdrijving.", "Wel."],
      },
    ],
  },
  {
    title: "Soorten gedichten",
    explanation:
      "Er zijn veel **soorten gedichten**.\n\n**1. Limerick** *(5 regels, humoristisch)*:\nRijmschema **AABBA**.\nRegel 1, 2, 5 lang. Regel 3, 4 kort.\n\nVoorbeeld:\n*Er was eens een kat uit Rotterdam* (A)\n*Die vond zichzelf nogal raar* (A)\n*Hij liep in het rond* (B)\n*Met zijn neus naar de grond* (B)\n*En vond er zijn lekkerste pap* (A)\n\n**2. Haiku** *(Japans, 3 regels)*:\n5-7-5 lettergrepen.\nVaak over natuur.\n\nVoorbeeld:\n*Stille vijver-bloei* (5)\n*Een kikker springt erin plons* (7)\n*Geluid van het water* (5)\n\n**3. Sonnet** *(14 regels, deftig)*:\nMeestal:\n• 2 kwatrijnen *(4 regels)* + 2 terzinen *(3 regels)*.\n• Vaste versmaat.\n• Vaste rijmschema.\n• Beroemde dichters: Shakespeare, Petrarca.\n\n**4. Kindergedicht**:\nVaak rijm AABB. Onderwerp dat kinderen aanspreekt.\n• Annie M.G. Schmidt is meester.\n\n**5. Ode** *(eerbetoon)*:\nGedicht ter ere van iemand of iets.\n*'Ode aan de vrijheid', 'Ode aan mijn moeder'.*\n\n**6. Elegie** *(droevig)*:\nGedicht over verlies / dood.\nVaak voor overledene.\n\n**7. Ballade** *(vertellend, verhalend)*:\nLang gedicht dat verhaal vertelt.\nVroeger gezongen door minnezangers.\n\n**8. Vrije vers**:\n**Geen rijm**, **geen vaste versmaat**.\nModerne poëzie sinds 1900.\nNadruk op beeldspraak + ritme van zinnen.\n\n**9. Acrostichon** *(naamgedicht)*:\nDe **eerste letter** van elke regel vormt een woord *(verticaal)*.\n\nVoorbeeld voor MAMA:\n*M*ooie sterke vrouw\n*A*ltijd voor mij daar\n*M*ijn beste vriendin\n*A*ls de zon zo warm\n\n**10. Lied / liedtekst**:\nGedicht op muziek.\nVaak refrein.\nNederlandstalige meesters: Boudewijn de Groot, Marco Borsato, Stromae.\n\n**Speciale vormen**:\n\n**Beeldgedicht / concrete poëzie**:\nDe **vorm** van het gedicht is ook deel van betekenis.\nVoorbeeld: regels in vorm van boom voor gedicht over boom.\n\n**Rap + spoken word**:\nModerne poëzie-vorm. Ritme + rijm + boodschap.\nNL: Doe Maar, Acda en de Munnik, Tantu Beats.\n\n**Cito-feitje**:\nIn NL is **Annie M.G. Schmidt** waarschijnlijk de meest geliefde dichter. Op **scholenkalender** zijn haar gedichten ('Dikkertje Dap', 'Pluk van de Petteflet', 'Jip en Janneke'). Standbeeld in Amsterdam Vondelpark.",
    checks: [
      {
        q: "**Haiku** heeft welke vorm?",
        options: ["5-7-5 lettergrepen, 3 regels", "AABBA", "14 regels", "Geen vorm"],
        answer: 0,
        wrongHints: [null, "Andere dichtvorm.", "Veel langer.", "Wel vaste vorm."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een haiku?", tekst: "Een **haiku** is een **Japanse** gedichtsvorm. Heel kort: maar **3 regels** met een vast **lettergrepen-patroon**: **5-7-5**." },
            { titel: "Het patroon", tekst: "• Regel 1: **5 lettergrepen**\n• Regel 2: **7 lettergrepen**\n• Regel 3: **5 lettergrepen**\nTotaal 17 lettergrepen. Vaak over **natuur**, **seizoenen** of een **klein moment**." },
            { titel: "Voorbeeld", tekst: "**'Stille vijver-bloei** (5 lettergrepen: Stil-le-vij-ver-bloei)\n**Een kikker springt erin plons** (7: Een-kik-ker-springt-er-in-plons)\n**Geluid van het water'** (5: Ge-luid-van-het-wa-ter — eigenlijk 6 maar dichterlijke vrijheid)" },
          ],
          woorden: [
            { woord: "haiku", uitleg: "Japans gedicht met 3 regels: 5-7-5 lettergrepen." },
            { woord: "lettergreep", uitleg: "Stukje van een woord met 1 klemtoon (bv. 'mooi' = 1, 'mooie' = 2, 'lekkerste' = 3)." },
          ],
          theorie: "Cito-feit verschillende gedicht-vormen:\n• **Haiku** = 5-7-5, 3 regels, Japans, natuur.\n• **Limerick** = 5 regels AABBA, humoristisch.\n• **Sonnet** = 14 regels, deftig.\n• **Acrostichon** = eerste letters vormen woord.\n• **Vrij vers** = geen vaste vorm (modern).",
          voorbeelden: [
            { type: "stap", tekst: "Limerick is 5 regels MAAR met rijmschema AABBA. Heel anders dan haiku." },
            { type: "stap", tekst: "Sonnet = 14 regels lang, vaste rijm + ritme. Veel ouder en deftiger dan haiku." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Haiku = 5-7-5. Onthoud die getallen: vijf-zeven-vijf. Drie regels totaal. Japans = denk natuur + moment." }],
          niveaus: {
            basis: "Haiku = 5-7-5 lettergrepen, 3 regels. = A.",
            simpeler: "Japans gedicht: regel 1 = 5 lettergrepen, regel 2 = 7, regel 3 = 5. = A.",
            nogSimpeler: "5-7-5 = A.",
          },
        },
      },
      {
        q: "Wat is een **limerick**?",
        options: ["5-regels grappig gedicht AABBA", "Sonnet", "Haiku", "Lied"],
        answer: 0,
        wrongHints: [null, "14 regels.", "Japans.", "Niet specifiek."],
      },
      {
        q: "Wat is een **acrostichon**?",
        options: ["Eerste letters vormen woord", "Rijmend lied", "Lang verhaal", "Grappig"],
        answer: 0,
        wrongHints: [null, "Ballade.", "Niet.", "Niet specifiek."],
      },
      {
        q: "**Vrije vers** heeft?",
        options: ["Geen vast rijm + versmaat", "Vast rijm", "Vast aantal regels", "Moet 14 regels"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Sonnet."],
      },
    ],
  },
  {
    title: "Eind-toets — poëzie mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wat is **rijm**?", options: ["Woorden eindigen hetzelfde", "Klemtoon", "Lengte", "Letter"], answer: 0, wrongHints: [null, "Ritme.", "Versmaat.", "Niet specifiek."] },
      { q: "**AABB** = ?", options: ["Paarrijm", "Gekruist", "Omarmend", "Niet rijm"], answer: 0, wrongHints: [null, "ABAB.", "ABBA.", "Wel rijm."] },
      { q: "*'De wind fluistert'* = ?", options: ["Personificatie", "Hyperbool", "Niet", "Rijm"], answer: 0, wrongHints: [null, "Geen overdrijving.", "Wel.", "Niet."] },
      { q: "Wat is **alliteratie**?", options: ["Beginrijm zelfde letter", "Eindrijm", "Niet rijm", "Ritme"], answer: 0, wrongHints: [null, "Eindrijm.", "Wel.", "Niet."] },
      { q: "**Haiku** is uit welk land?", options: ["Japan", "NL", "VS", "Frankrijk"], answer: 0, wrongHints: [null, "Niet origineel.", "Niet.", "Niet."] },
      { q: "Beroemde **NL-kindergedicht-dichter**?", options: ["Annie M.G. Schmidt", "Joost Vondel", "Shakespeare", "Marsman"], answer: 0, wrongHints: [null, "Gouden Eeuw, niet kindergedicht.", "Engels.", "Niet kindergedicht."] },
      { q: "Een **strofe** is?", options: ["Een groepje versregels (couplet)","Een woord","Een rijm","Een dichter"], answer: 0, wrongHints: [null, "Niet.", "Rijm = klank, geen groep.", "Persoon."] },
      { q: "*'Zo wit als sneeuw'* = ?", options: ["Vergelijking","Hyperbool","Personificatie","Rijm"], answer: 0, wrongHints: [null, "Niet overdrijven.", "Geen menselijke eigenschap.", "Geen rijm."] },
      { q: "Hoeveel lettergrepen heeft een **haiku** per regel?", options: ["5-7-5","4-4-4","8-8-8","2-3-2"], answer: 0, wrongHints: [null, "Niet — vast Japans patroon.", "Te veel.", "Te weinig."] },
      { q: "Welk woord rijmt op **hond**?", options: ["mond","kat","huis","boom"], answer: 0, wrongHints: [null, "Andere klank.", "Niet.", "Niet."] },
      { q: "Welk **rijmschema** is **gekruist**?", options: ["ABAB","AABB","ABBA","AAAA"], answer: 0, wrongHints: [null, "Paarrijm.", "Omarmend.", "Geen wisseling."] },
      { q: "Welk **rijmschema** is **omarmend**?", options: ["ABBA","AABB","ABAB","AAAA"], answer: 0, wrongHints: [null, "Paarrijm.", "Gekruist.", "Geen wisseling."] },
      { q: "*'De zon lacht naar mij.'* — welke stijlfiguur?", options: ["Personificatie","Vergelijking","Rijm","Hyperbool"], answer: 0, wrongHints: [null, "Niet — geen 'als'.", "Niet rijm.", "Niet overdreven."] },
      { q: "*'Duizend keer gezegd.'* — welke stijlfiguur?", options: ["Hyperbool (overdrijving)","Personificatie","Vergelijking","Rijm"], answer: 0, wrongHints: [null, "Niet menselijke eigenschap.", "Geen 'als'.", "Niet."] },
      { q: "Wat is een **metafoor**?", options: ["Beeldspraak zonder 'als' (X = Y)","Vergelijking met 'als'","Overdrijving","Rijm"], answer: 0, wrongHints: [null, "Dat is vergelijking.", "Hyperbool.", "Niet."] },
      { q: "*'Pim heeft een paard in de tuin.'* — welke alliteratie-letters?", options: ["P","T","H","E"], answer: 0, wrongHints: [null, "Geen reeks.", "Niet beginrijm.", "Niet."] },
      { q: "Wat is een **vers**?", options: ["Een regel in een gedicht","Een liedje","Een verhaal","Een tekening"], answer: 0, wrongHints: [null, "Soms ook, maar primair.", "Niet primair.", "Niet."] },
      { q: "Welk soort gedicht heeft **14 regels**?", options: ["Sonnet","Haiku","Limerick","Vrij vers"], answer: 0, wrongHints: [null, "17 lettergrepen.", "Meestal 5 regels.", "Geen vorm."] },
      { q: "**Limerick** heeft hoeveel regels?", options: ["5","3","14","8"], answer: 0, wrongHints: [null, "Haiku.", "Sonnet.", "Niet."] },
      { q: "Wat rijmt op **regen**?", options: ["zegen","zon","wolk","huis"], answer: 0, wrongHints: [null, "Andere klank.", "Niet.", "Niet."] },
      { q: "**Refrein** in een gedicht/lied is?", options: ["Herhalend stukje tussen coupletten","Eerste regel","Laatste woord","Niet relevant"], answer: 0, wrongHints: [null, "Niet specifiek.", "Niet.", "Wel."] },
      { q: "*'Ik zag, ik zag, wat jij niet zag.'* — welk effect door herhaling?", options: ["Versterkt + ritme","Vermoeit","Onzin","Niet relevant"], answer: 0, wrongHints: [null, "Soms — primair effect ritme.", "Wel zin.", "Wel."] },
      { q: "Wat is een **couplet**?", options: ["Groepje van 2+ versregels samen","Eén woord","Lied","Niet relevant"], answer: 0, wrongHints: [null, "Te klein.", "Te groot.", "Wel."] },
      { q: "Welk **rijmpaar** is acceptabel?", options: ["maan/baan","kat/tafel","huis/koud","stoel/groen"], answer: 0, wrongHints: [null, "Andere klank.", "Andere klank.", "Andere klank."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const dichtenPoezieRijmenPo = {
  id: "dichten-poezie-rijmen-po",
  title: "Dichten + poëzie + rijm (Cito groep 5-8)",
  emoji: "🎭",
  level: "groep5-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taal — poëzie & literatuur",
  prerequisites: [
    { id: "spreekwoorden-uitdrukkingen-po", title: "Spreekwoorden + uitdrukkingen", niveau: "1F" },
  ],
  intro:
    "Dichten + poëzie voor Cito groep 5-8 — wat is gedicht (proza vs gedicht, bekende dichters) + rijm + ritme (eind/begin/binnenrijm, AABB/ABAB/ABBA) + beeldspraak (personificatie/hyperbool/metafoor) + soorten (limerick/haiku/sonnet/acrostichon/vrij vers). Sluit op spreekwoorden. ~15 min.",
  triggerKeywords: [
    "gedicht", "poëzie", "poezie",
    "rijm", "rijmen", "rijmschema",
    "alliteratie", "beginrijm", "eindrijm",
    "metafoor", "personificatie", "hyperbool",
    "limerick", "haiku", "sonnet",
    "Annie M.G. Schmidt", "Marsman",
    "vers", "versregel", "couplet",
  ],
  chapters,
  steps,
};

export default dichtenPoezieRijmenPo;
