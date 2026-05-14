// Leerpad: Examen-oefenpad Biologie VMBO-GL/TL 2024 tijdvak 1
// 2026-05-14: pilot biologie-examen (eerste vak buiten economie/Engels/geschiedenis).
// Bron: examenblad.nl examen-id GT-0191-a-24-1.
// Vragen: 5 MC-vragen geselecteerd uit 14 echte MC-vragen (selectie obv koppeling
// naar bestaande leerpaden + geen ontbrekende plaatjes/grafieken). Authentiek
// overgenomen — geen paraphrase. Open vragen + tabellen overgeslagen.

const chapters = [
  { letter: "A", title: "Erfelijkheid (V23, V25)", emoji: "🧬", from: 0, to: 1 },
  { letter: "B", title: "Cellen & voortplanting (V36, V41)", emoji: "🔬", from: 2, to: 3 },
  { letter: "C", title: "Lichaam (V44)", emoji: "🫀", from: 4, to: 4 },
];

const steps = [
  // ─── Vraag 23 — Mutatie door röntgenstraling ────────────────
  {
    title: "Vraag 23 — DNA-verandering noemen",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 1, vraag 23. Doorklik voor de uitleg in **Genetica & erfelijkheid**.",
    emoji: "🎓",
    checks: [
      {
        q: "Thomas bestraalt enkele fruitvliegjes met röntgenstraling. Daardoor verandert het DNA in de geslachtscellen van deze fruitvliegjes. Hoe wordt deze verandering van DNA genoemd?",
        options: [
          "evolutie",
          "mutatie",
          "reductie",
          "selectie",
        ],
        answer: 1,
        wrongHints: [
          "Evolutie is het PROCES over generaties — niet één DNA-verandering.",
          null,
          "Reductie = halvering, hoort bij meiose (chromosomen halveren) — geen DNA-verandering.",
          "Selectie = de natuur kiest welke individuen overleven — niet de DNA-verandering zelf.",
        ],
        explanation: "Een verandering in het DNA heet een MUTATIE. Mutaties kunnen spontaan ontstaan of door externe factoren zoals straling, chemische stoffen of virussen. In de geslachtscellen worden mutaties doorgegeven aan nakomelingen.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 23",
        bronLink: "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-1-o-spr.pdf",
        leerpadLink: { id: "genetica-erfelijkheid-biologie", title: "Genetica & erfelijkheid" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'evolutie', 'mutatie', 'reductie', 'selectie'" },
          { id: "cel-biologie", title: "Cel & DNA", niveau: "vmbo-2", why: "wat is DNA + waar zit het in de cel" },
          { id: "genetica-erfelijkheid-biologie", title: "Genetica & erfelijkheid", niveau: "vmbo-3", why: "mutaties + waarom DNA-verandering relevant is voor evolutie — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is DNA?", tekst: "DNA is het molecuul met de erfelijke code. Zit in de kern van elke cel. Een geslachtscel heeft de helft van het DNA en wordt doorgegeven aan kinderen." },
            { titel: "Wat is een mutatie?", tekst: "Een **mutatie** is een verandering in het DNA. Kan klein (1 letter) of groot (heel stukje weg) zijn. Oorzaken: straling (UV, röntgen), chemische stoffen, virussen, of toeval bij celdeling." },
            { titel: "Waarom belangrijk?", tekst: "Mutaties in geslachtscellen (zoals hier) worden doorgegeven. Soms gunstig (basis voor evolutie), soms schadelijk (ziekte), meestal neutraal." },
          ],
          woorden: [
            { woord: "mutatie", uitleg: "Verandering in DNA. Kan spontaan of door externe oorzaak." },
            { woord: "evolutie", uitleg: "Verandering van soorten over generaties — gebeurt MEDE door mutaties + selectie, maar is niet hetzelfde." },
            { woord: "reductie", uitleg: "Halvering van chromosomen tijdens meiose (geslachtscel-vorming)." },
            { woord: "selectie", uitleg: "Natuurlijke selectie — overleven van de meest aangepaste individuen." },
          ],
          theorie: "**Mutatie versus evolutie:**\n\n• **Mutatie** = de gebeurtenis (DNA verandert)\n• **Evolutie** = het gevolg over vele generaties (soort verandert)\n\nMutatie is dus de bouwsteen, evolutie is het resultaat. Op het examen wordt vaak gevraagd: wat is de DIRECTE term voor de DNA-verandering zelf — dat is altijd 'mutatie'.",
          voorbeelden: [
            { type: "mutatie", tekst: "UV-straling op de huid → mutatie in huidcellen → kan leiden tot huidkanker." },
            { type: "mutatie", tekst: "Spontane mutatie in geslachtscel → kind heeft eigenschap die ouders niet hadden." },
          ],
          basiskennis: [
            { onderwerp: "Geslachtscellen vs lichaamscellen", uitleg: "Mutatie in lichaamscel = blijft in dat individu. Mutatie in geslachtscel = wordt doorgegeven aan nakomelingen." },
          ],
          niveaus: {
            basis: "DNA verandert = mutatie. Antwoord B.",
            simpeler: "Stel je voor: het DNA is een lange code. Röntgenstraling 'knalt' tegen die code en verandert een letter. Die verandering noemen we een mutatie. Antwoord B.",
            nogSimpeler: "DNA-verandering = mutatie = B.",
          },
        },
      },
    ],
  },

  // ─── Vraag 25 — X-chromosoom + oogkleur ────────────────────
  {
    title: "Vraag 25 — DNA voor rode ogen in spermacellen",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 1, vraag 25. Doorklik voor de uitleg in **Genetica & erfelijkheid**.",
    emoji: "🎓",
    checks: [
      {
        q: "Een fruitvlieg heeft XX- of XY-geslachtschromosomen, die op dezelfde manier het geslacht beïnvloeden als bij de mens. De eigenschap 'oogkleur' ligt op het X-chromosoom. Op het Y-chromosoom is de eigenschap 'oogkleur' niet aanwezig. Een mannetje heeft rode ogen. Zit het stukje DNA voor rode ogen in zijn spermacellen?",
        options: [
          "Ja, in alle spermacellen.",
          "Ja, in 50% van de spermacellen.",
          "Nee, in geen van de spermacellen.",
        ],
        answer: 1,
        wrongHints: [
          "Niet ALLE — alleen de X-spermacellen dragen het oogkleur-gen. De Y-versies missen het stukje.",
          null,
          "WEL in een deel — het mannetje HEEFT immers het gen voor rode ogen (anders had-ie geen rode ogen).",
        ],
        explanation: "Het mannetje heeft XY-chromosomen. Bij meiose ontstaan twee soorten spermacellen: X-cellen (helft) en Y-cellen (helft). Het gen voor oogkleur zit op X. Dus alleen X-spermacellen (50%) dragen het rode-ogen-gen mee.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 25",
        bronLink: "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-1-o-spr.pdf",
        leerpadLink: { id: "genetica-erfelijkheid-biologie", title: "Genetica & erfelijkheid" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'chromosoom', 'geslachtscel', 'sperma', 'gen'" },
          { id: "cel-biologie", title: "Cel & DNA", niveau: "vmbo-2", why: "chromosomen zitten in de celkern, DNA bestaat uit genen" },
          { id: "genetica-erfelijkheid-biologie", title: "Genetica & erfelijkheid", niveau: "vmbo-3", why: "geslachtschromosomen + welke ouder geeft wat door — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Mannetje = XY", tekst: "Een mannelijke fruitvlieg (en mens) heeft een X- én een Y-chromosoom. Vrouwtje heeft XX." },
            { titel: "Wat zit op X en Y?", tekst: "Oogkleur-gen zit op X. Y heeft GEEN oogkleur-gen. Dat is een belangrijk feit voor deze vraag." },
            { titel: "Meiose splitst XY in spermacellen", tekst: "Bij vorming van spermacellen worden chromosomen verdeeld. De helft krijgt X (mét oogkleur-gen), de helft krijgt Y (zonder oogkleur-gen). Dus 50/50." },
            { titel: "Conclusie", tekst: "Alleen de X-spermacellen dragen het rode-ogen-DNA. Dat is 50% van zijn spermacellen → antwoord B." },
          ],
          woorden: [
            { woord: "X-chromosoom", uitleg: "Een van de geslachtschromosomen — draagt veel genen. Vrouwen hebben er 2, mannen 1." },
            { woord: "Y-chromosoom", uitleg: "Klein geslachtschromosoom — vooral mannelijke eigenschappen, weinig genen." },
            { woord: "meiose", uitleg: "Reductiedeling waarbij chromosomen-aantal halveert tot geslachtscellen ontstaan." },
            { woord: "geslachtscel", uitleg: "Sperma of eicel — heeft de helft van het normale DNA." },
          ],
          theorie: "**Geslacht bepalen — fruitvliegen en mensen:**\n\n• Vrouwtjes XX → alle eicellen X\n• Mannetjes XY → 50% spermacellen X, 50% Y\n\n**Geslachtsgebonden overerving:**\nAls een gen alleen op X zit (zoals oogkleur hier, of bij mensen kleurenblindheid en hemofilie), gelden speciale regels:\n• Vader geeft X aan dochters, Y aan zonen.\n• Moeder geeft 1 van haar 2 X'en aan elk kind.",
          voorbeelden: [
            { type: "voorbeeld", tekst: "Mens man met rood-groen kleurenblind (X-gebonden recessief): zijn dochters worden draagster (krijgen 1 zieke X van hem, 1 gezonde van moeder). Zijn zonen krijgen zijn Y → niet kleurenblind via hem." },
            { type: "voorbeeld", tekst: "Bij deze examenvraag: mannetje X(rood)Y. Spermacellen: X(rood) of Y. Helft draagt het rode-ogen-gen." },
          ],
          basiskennis: [
            { onderwerp: "Onthouden", uitleg: "Y heeft geen oogkleur-gen → Y-spermacellen NOOIT met rode ogen-DNA. X-spermacellen WEL. Dus 50%." },
          ],
          niveaus: {
            basis: "X-sperma heeft rode-ogen-DNA, Y-sperma niet. 50/50 → antwoord B.",
            simpeler: "Stel je voor 100 spermacellen van dit mannetje. 50 zijn X (met oogkleur-gen), 50 zijn Y (zonder). Dus in 50% zit het stukje DNA voor rode ogen. Antwoord B.",
            nogSimpeler: "50% (alleen de X-helft) = B.",
          },
        },
      },
    ],
  },

  // ─── Vraag 36 — Kweekvlees-cellen ──────────────────────────
  {
    title: "Vraag 36 — Cellen voor kweekvlees",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 1, vraag 36. Doorklik voor de uitleg in **Cel & DNA**.",
    emoji: "🎓",
    checks: [
      {
        q: "Liam en Sophie praten over de cellen die kweekvlees maken. Liam zegt dat de chromosomen van deze cellen los in het cytoplasma liggen. Sophie zegt dat deze cellen een celwand hebben. Wie heeft gelijk?",
        options: [
          "Geen van beiden heeft gelijk.",
          "Liam heeft gelijk.",
          "Sophie heeft gelijk.",
          "Liam heeft gelijk en Sophie heeft gelijk.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kweekvlees komt van dierlijke spiercellen — die hebben een CELKERN waar chromosomen liggen. Liam heeft het mis.",
          "Sophie heeft het mis: dierlijke cellen hebben GEEN celwand (alleen plantencellen + bacteriën wel).",
          "Beiden hebben het mis — los chromosomen + celwand zijn kenmerken van BACTERIËN, niet van dierlijke spiercellen.",
        ],
        explanation: "Kweekvlees wordt gemaakt uit DIERLIJKE spiercellen (eukaryoot). Die hebben (1) chromosomen in een celkern — NIET los in het cytoplasma, en (2) GEEN celwand. Liam beschrijft een prokaryote cel (bacterie), Sophie beschrijft plantencellen of bacteriën. Beiden fout.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 36",
        bronLink: "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-1-o-spr.pdf",
        leerpadLink: { id: "cel-biologie", title: "Cel & DNA" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'cytoplasma', 'celkern', 'celwand', 'chromosomen'" },
          { id: "cel-biologie", title: "Cel & DNA", niveau: "vmbo-2", why: "verschil dierlijke / plantaardige / bacteriële cel — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is kweekvlees?", tekst: "Kweekvlees wordt in een laboratorium gekweekt uit DIERLIJKE spiercellen. Het is dus echt dierlijk weefsel — niet plantaardig, niet bacterieel." },
            { titel: "Dierlijke cellen — kenmerken", tekst: "Dierlijke cellen hebben:\n• een CELKERN met daarin de chromosomen\n• GEEN celwand (alleen een celmembraan)\n• cytoplasma (met organellen zoals mitochondriën)" },
            { titel: "Wat zei Liam fout?", tekst: "Liam zegt: chromosomen LOS in het cytoplasma. Dat is fout voor dierlijke cellen — chromosomen zitten in de CELKERN. Liam beschrijft een bacterie (prokaryoot), niet een dierlijke cel." },
            { titel: "Wat zei Sophie fout?", tekst: "Sophie zegt: deze cellen hebben een celwand. Dat is fout voor dierlijke cellen — alleen plantencellen + bacteriën hebben een celwand. Dierlijke cellen hebben alleen een celmembraan." },
          ],
          woorden: [
            { woord: "cytoplasma", uitleg: "Vloeistof in de cel waarin organellen zweven (buiten de kern)." },
            { woord: "celkern", uitleg: "Compartiment in eukaryote cellen waarin de chromosomen liggen." },
            { woord: "celwand", uitleg: "Stevig buitenste laag van plantencellen en bacteriën — dierlijke cellen hebben dit NIET." },
            { woord: "eukaryoot vs prokaryoot", uitleg: "Eukaryoot = cel met kern (planten, dieren, schimmels). Prokaryoot = cel zonder kern (bacteriën)." },
          ],
          theorie: "**Verschil tussen 3 celtypes:**\n\n| Cel | Kern? | Celwand? |\n|---|---|---|\n| Dierlijk (mens, koe) | ja | nee |\n| Plantaardig | ja | ja (cellulose) |\n| Bacterieel | nee (chromosoom los) | ja (peptidoglycaan) |\n\nKweekvlees = dierlijke spiercellen → kern + GEEN celwand → noch Liam noch Sophie heeft gelijk.",
          voorbeelden: [
            { type: "stap", tekst: "Spiercel van koe = dierlijke cel = kern + geen celwand." },
            { type: "stap", tekst: "Yoghurt-bacterie = prokaryoot = los chromosoom + celwand. Daar passen Liam + Sophie wel bij — maar kweekvlees is geen bacterie." },
          ],
          basiskennis: [
            { onderwerp: "Onthoud", uitleg: "Dierlijke cellen → kern + cytoplasma + celmembraan. Géén losse chromosomen, géén celwand." },
          ],
          niveaus: {
            basis: "Beiden hebben het mis. Antwoord A.",
            simpeler: "Kweekvlees is uit DIERLIJKE spiercellen. Die hebben een celkern (chromosomen liggen daar IN, niet los) én geen celwand. Liam en Sophie hebben dus allebei het mis. Antwoord A.",
            nogSimpeler: "Beiden fout = A.",
          },
        },
      },
    ],
  },

  // ─── Vraag 41 — Sterilisatie + onvruchtbaarheid ────────────
  {
    title: "Vraag 41 — Sterilisatie en testosteron",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 1, vraag 41. Doorklik voor de uitleg in **Voortplanting & hormonen**.",
    emoji: "🎓",
    checks: [
      {
        q: "Hans en Karlijn willen geen kinderen meer. Op de poli stellen ze vragen over sterilisatie. Na het gesprek over de sterilisatie bespreken Hans en Karlijn wat er verandert aan de zaadlozing. Hans zegt dat er na de operatie geen zaadcellen meer gemaakt worden waardoor hij onvruchtbaar is. Karlijn zegt dat er na de operatie geen testosteron meer gemaakt wordt waardoor Hans onvruchtbaar is. Wie heeft gelijk?",
        options: [
          "Geen van beiden heeft gelijk.",
          "Alleen Hans heeft gelijk.",
          "Alleen Karlijn heeft gelijk.",
          "Hans heeft gelijk en Karlijn heeft gelijk.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Hans heeft het mis — bij sterilisatie (vasectomie) worden de zaadleiders DOORGEKNIPT, maar de testikels blijven zaadcellen produceren.",
          "Karlijn heeft het mis — testosteron wordt gewoon door de testikels gemaakt, ook na sterilisatie. Hormoonproductie verandert niet.",
          "Beiden zitten ernaast — bij sterilisatie blijft alles in de testikels werken (zowel zaadcellen als testosteron), alleen de DOORGANG naar buiten is dicht.",
        ],
        explanation: "Bij sterilisatie van de man (vasectomie) worden de zaadleiders doorgeknipt of afgesloten. De testikels blijven gewoon zaadcellen MAKEN én testosteron produceren. De zaadcellen kunnen alleen niet meer naar buiten — ze worden in het lichaam afgebroken. Onvruchtbaarheid ontstaat dus niet door minder productie, maar door blokkade van de doorgang.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 41",
        bronLink: "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-1-o-spr.pdf",
        leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Voortplanting & hormonen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'sterilisatie', 'testosteron', 'zaadcel', 'zaadleider'" },
          { id: "voortplanting-hormonen-biologie", title: "Voortplanting & hormonen", niveau: "vmbo-3", why: "hoe werkt mannelijk voortplantingsstelsel + waar wordt testosteron gemaakt — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat doet sterilisatie bij de man?", tekst: "Bij **vasectomie** worden de twee **zaadleiders** doorgeknipt of afgesloten. Dat zijn de buisjes die zaadcellen van de testikels naar buiten brengen." },
            { titel: "Wat gebeurt er in de testikels?", tekst: "De testikels blijven GEWOON werken:\n• zaadcellen worden nog steeds gemaakt\n• testosteron wordt nog steeds geproduceerd\nAlleen de UITGANG is dicht — zaadcellen komen niet meer naar buiten en worden in het lichaam afgebroken." },
            { titel: "Waarom dan onvruchtbaar?", tekst: "Omdat er bij ejaculatie geen zaadcellen meer in het sperma zitten (alleen vloeistof). De vrouw kan dus niet meer bevrucht raken via deze man. Niet door productie-stop, maar door blokkade." },
            { titel: "Wat zegt dit over Hans en Karlijn?", tekst: "Hans denkt: geen zaadcellen meer gemaakt. FOUT — die worden nog steeds gemaakt. Karlijn denkt: geen testosteron meer. FOUT — testosteron wordt nog steeds gemaakt (dat is een hormoon dat ook nog allerlei andere functies heeft: stem, spieren, etc.). Beide hebben dus het mis." },
          ],
          woorden: [
            { woord: "vasectomie", uitleg: "Sterilisatie van de man — zaadleiders doorgeknipt." },
            { woord: "zaadleider", uitleg: "Buisje dat zaadcellen van testikel naar de penis vervoert." },
            { woord: "testosteron", uitleg: "Mannelijk geslachtshormoon. Gemaakt in testikels. Verantwoordelijk voor mannelijke kenmerken (stem, baard, spieren, libido)." },
            { woord: "testikel", uitleg: "Mannelijke geslachtsklier — maakt zowel zaadcellen ALS testosteron." },
          ],
          theorie: "**Belangrijk om te onthouden:**\n\nSterilisatie raakt NIET de productie van:\n• zaadcellen ✗ (blijven gemaakt)\n• testosteron ✗ (blijft gemaakt)\n• mannelijke kenmerken ✗ (stem, baard etc. blijven)\n• libido ✗ (seksuele drang blijft)\n\nSterilisatie raakt WEL:\n• vruchtbaarheid ✓ (zaadcellen kunnen niet meer naar buiten)\n\n**Gevolgen** voor man na sterilisatie: kan nog gewoon seks hebben, klaarkomen, hetzelfde plezier — alleen kan hij geen kind meer verwekken.",
          voorbeelden: [
            { type: "vergelijk", tekst: "Vrouwelijke sterilisatie: eileiders dichtgemaakt → eicel komt niet bij sperma. Hier ook: geen productie-stop, alleen blokkade." },
            { type: "vergelijk", tekst: "Wel productie-stop = castratie (testikels weghalen) — daar stopt testosteron WEL. Dat is iets ANDERS dan sterilisatie." },
          ],
          basiskennis: [
            { onderwerp: "Vergelijking", uitleg: "Sterilisatie = doorknippen leider. Castratie = orgaan weghalen. Heel verschillend resultaat." },
          ],
          niveaus: {
            basis: "Beide zaadcellen + testosteron worden nog gemaakt. Beiden fout. Antwoord A.",
            simpeler: "Bij sterilisatie wordt alleen de UITGANG van de zaadcellen geblokkeerd. De TESTIKELS werken gewoon door: zaadcellen worden nog steeds gemaakt, en testosteron óók. Hans denkt aan productie-stop (fout), Karlijn ook (fout). Antwoord A.",
            nogSimpeler: "Beiden fout = A.",
          },
        },
      },
    ],
  },

  // ─── Vraag 44 — Ureum ontstaat in de lever ──────────────────
  {
    title: "Vraag 44 — Waar ontstaat ureum?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 1, vraag 44.",
    emoji: "🎓",
    checks: [
      {
        q: "Bij patiënten met ernstig nierfalen is nierdialyse nodig. Nierdialyse wordt gedaan met een machine: de kunstnier. Het bloed wordt door de kunstnier gepompt en daar gefilterd. Tijdens een nierdialyse wordt ureum verwijderd. In welk orgaan ontstaat ureum?",
        options: [
          "darm",
          "lever",
          "maag",
          "nier",
        ],
        answer: 1,
        wrongHints: [
          "In de darm vindt OPNAME van voedingsstoffen plaats, geen vorming van ureum.",
          null,
          "De maag breekt voedsel af met maagsap — geen afvalstof-vorming uit eiwitten.",
          "De nier FILTERT ureum uit het bloed (zoals in de vraag staat). De nier maakt het niet — hij verwijdert het.",
        ],
        explanation: "Ureum is een afvalstof die ontstaat bij de afbraak van eiwitten. Dit gebeurt in de LEVER. Daar worden de aminozuren afgebroken en de stikstof omgezet in ureum. Ureum gaat dan via het bloed naar de nieren, waar het uit het bloed wordt gefilterd en met urine afgevoerd.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 44",
        bronLink: "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-1-o-spr.pdf",
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'ureum', 'nierdialyse', 'afvalstof', 'orgaan'" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is ureum?", tekst: "**Ureum** is een afvalstof in je bloed. Het ontstaat als je lichaam eiwitten afbreekt. Eiwitten bevatten stikstof — die stikstof moet eruit, en wordt omgezet in ureum." },
            { titel: "Waar wordt het gemaakt?", tekst: "In de **lever**. Daar komen aminozuren (de bouwstenen van eiwitten) aan. De lever 'demonteert' aminozuren die je niet nodig hebt en maakt er ureum van." },
            { titel: "Waar wordt het verwijderd?", tekst: "De **nieren** filteren ureum uit het bloed → komt in de urine terecht → naar buiten. Bij nierfalen lukt dit niet meer en stapelt ureum zich op in het bloed → daarom dialyse." },
          ],
          woorden: [
            { woord: "ureum", uitleg: "Afvalstof uit eiwit-afbraak. Bevat stikstof." },
            { woord: "lever", uitleg: "Groot orgaan rechtsboven in de buik. Maakt + breekt veel stoffen af, waaronder ureum-vorming uit aminozuren." },
            { woord: "nier", uitleg: "Filtreert bloed. Maakt urine. Verwijdert afvalstoffen zoals ureum + overtollig water." },
            { woord: "nierdialyse", uitleg: "Machinaal vervangen van de nierfunctie als de nieren niet meer werken." },
          ],
          theorie: "**Eiwit-cyclus:**\n\n1. Je eet eiwitten (vlees, vis, bonen).\n2. Maag + darm breken eiwitten af tot **aminozuren**.\n3. Aminozuren gaan via bloed naar de **lever**.\n4. Lever gebruikt aminozuren voor bouwstenen ÓF breekt overschot af → maakt **ureum**.\n5. Ureum gaat via bloed naar **nieren**.\n6. Nieren filteren ureum → in de urine → naar buiten.\n\n**Onthoud**: lever MAAKT ureum, nier VERWIJDERT ureum.",
          voorbeelden: [
            { type: "stap", tekst: "Veel vlees eten = veel eiwit = lever maakt veel ureum = nieren krijgen meer werk." },
            { type: "stap", tekst: "Bij nierfalen wordt ureum-niveau in bloed te hoog → moeheid, jeuk, misselijkheid → dialyse nodig." },
          ],
          basiskennis: [
            { onderwerp: "Bron versus filter", uitleg: "Lever = bron (maakt). Nier = filter (verwijdert). Bij examen vragen 'waar ontstaat' = bron = lever." },
          ],
          niveaus: {
            basis: "Ureum ontstaat in de lever (bij eiwit-afbraak). Antwoord B.",
            simpeler: "Eiwitten worden afgebroken tot aminozuren. De lever verwerkt aminozuren en maakt daarbij ureum (een afvalstof). De nieren halen het ureum daarna uit het bloed. Antwoord B: lever.",
            nogSimpeler: "Lever maakt ureum = B.",
          },
        },
      },
    ],
  },
];

const examenBiologie2024T1 = {
  id: "examen-biologie-2024-t1",
  title: "Examen oefenen — Biologie 2024 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "biologie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Biologie - eindexamen oefenen 2024-T1",
  intro:
    "5 echte examenvragen uit het VMBO-GL/TL biologie-examen 2024 tijdvak 1 (examen-id GT-0191-a-24-1). Per vraag de officiële antwoorden, didactische denkprikkel-hints, inhoudelijke uitleg, en doorklik naar bestaande biologie-leerpaden voor diepere stof. Open vragen + tabel-vragen overgeslagen.",
  triggerKeywords: [
    "examen biologie 2024", "examen oefenen biologie", "echte examenvragen biologie",
    "mutatie", "x-chromosoom oogkleur", "kweekvlees cel", "sterilisatie testosteron",
    "ureum lever", "vmbo biologie 2024 tijdvak 1",
  ],
  chapters,
  steps,
};

export default examenBiologie2024T1;
