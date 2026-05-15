// Leerpad: Examen-oefenpad Biologie VMBO-GL/TL 2024 tijdvak 1
// 2026-05-14: pilot biologie-examen (eerste vak buiten economie/Engels/geschiedenis).
// Bron: examenblad.nl examen-id GT-0191-a-24-1.
// Vragen: 5 MC-vragen geselecteerd uit 14 echte MC-vragen (selectie obv koppeling
// naar bestaande leerpaden + geen ontbrekende plaatjes/grafieken). Authentiek
// overgenomen — geen paraphrase. Open vragen + tabellen overgeslagen.

const chapters = [
  { letter: "A", title: "Erfelijkheid", emoji: "🧬", from: 0, to: 1 },
  { letter: "B", title: "Cellen & voortplanting", emoji: "🔬", from: 2, to: 3 },
  { letter: "C", title: "Lichaam & organen", emoji: "🫀", from: 4, to: 10 },
  { letter: "D", title: "Gedrag", emoji: "🐕", from: 11, to: 11 },
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

  // ─── Vraag 2 — Bewustwording in grote hersenen ─────────────
  {
    title: "Vraag 2 — Bewustwording in zenuwstelsel",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 1, vraag 2.",
    emoji: "🎓",
    checks: [
      {
        q: "In welk deel van het centraal zenuwstelsel vindt de bewustwording plaats bij het horen van de click?",
        options: [
          "grote hersenen",
          "kleine hersenen",
          "hersenstam",
          "ruggenmerg",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kleine hersenen sturen vooral evenwicht + coördinatie aan — geen bewustwording.",
          "De hersenstam regelt onbewuste functies (ademen, hartslag) — niet bewust horen.",
          "Het ruggenmerg geleidt signalen door, maar bewust 'horen' gebeurt hogerop.",
        ],
        explanation: "Bewustwording — het bewust ervaren van geluid, beeld, gevoel — gebeurt altijd in de GROTE HERSENEN. De andere delen geleiden signalen of regelen automatische processen, maar bewustzijn zelf zit in de cortex van de grote hersenen.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 2",
        bronLink: "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-1-o-spr.pdf",
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'zenuwstelsel', 'bewustwording', 'grote hersenen', 'ruggenmerg'" },
          { id: "lichaam-gezondheid-po", title: "Lichaam & organen", niveau: "po-1F", why: "basaal overzicht zenuwstelsel + hersenen — opfris voor deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Centraal zenuwstelsel = hersenen + ruggenmerg", tekst: "Het CZS bestaat uit hersenen + ruggenmerg. De hersenen splitsen we in 3 delen: GROTE hersenen, KLEINE hersenen, en HERSENSTAM." },
            { titel: "Wat doet wat?", tekst: "**Grote hersenen** = denken, herinneren, bewust ervaren (zien, horen, voelen).\n**Kleine hersenen** = evenwicht + coördinatie van beweging.\n**Hersenstam** = automatische functies (ademen, hartslag).\n**Ruggenmerg** = transportkabel voor signalen + reflexen." },
            { titel: "Antwoord", tekst: "Bewust HOREN = bewustwording = grote hersenen. Antwoord A." },
          ],
          woorden: [
            { woord: "centraal zenuwstelsel", uitleg: "Hersenen + ruggenmerg — verwerkt en stuurt zenuwsignalen." },
            { woord: "grote hersenen", uitleg: "Grootste deel, bewust denken + waarnemen." },
            { woord: "kleine hersenen", uitleg: "Achteronder, regelt evenwicht en fijne motoriek." },
            { woord: "hersenstam", uitleg: "Verbindt hersenen met ruggenmerg, regelt automatische functies." },
          ],
          theorie: "**Onthoud per functie:**\n• Bewust waarnemen, denken, willekeurige bewegingen → grote hersenen\n• Evenwicht, soepel bewegen → kleine hersenen\n• Ademen, hartslag, slikken, niezen → hersenstam\n• Reflexen + signaaldoorgifte → ruggenmerg",
          voorbeelden: [
            { type: "stap", tekst: "Je hoort een click + denkt 'dat is mijn signaal' → grote hersenen." },
            { type: "stap", tekst: "Je fietst zonder na te denken → kleine hersenen + ruggenmerg (motoriek/reflexen)." },
          ],
          basiskennis: [
            { onderwerp: "Bewust = grote hersenen", uitleg: "Alle 'ik weet dat ik dit zie/hoor/voel' = grote hersenen." },
          ],
          niveaus: {
            basis: "Bewustwording = grote hersenen. Antwoord A.",
            simpeler: "Bewust horen gebeurt in de grote hersenen — de 'denker'. Andere delen sturen onbewuste functies of geleiden signalen. Antwoord A.",
            nogSimpeler: "Bewust = grote hersenen = A.",
          },
        },
      },
    ],
  },

  // ─── Vraag 17 — Zenuwen in de tand ────────────────────────
  {
    title: "Vraag 17 — Waar zitten de tandzenuwen?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 1, vraag 17.",
    emoji: "🎓",
    checks: [
      {
        q: "Bij diepe gaatjes boort de tandarts door het tandbeen en maakt de tandholte leeg. Bij de behandeling worden zenuwen geraakt. Waar bevinden zich de zenuwen?",
        options: [
          "alleen in het tandbeen",
          "alleen in de tandholte",
          "in beide",
          "in geen van beide",
        ],
        answer: 1,
        wrongHints: [
          "Het tandbeen (dentine) is een harde laag zonder zenuwen — anders zou de tandarts elke kleine kies-bewerking direct pijnlijk maken.",
          null,
          "Niet ook in tandbeen — daar zitten geen zenuwen.",
          "Wel — anders zou de tandarts geen verdoving hoeven geven bij diepe gaatjes.",
        ],
        explanation: "De tandzenuwen + bloedvaten zitten samen in de TANDHOLTE (pulpa), het zachte centrum van de tand. Het tandbeen (dentine) eromheen is hard en zelf zonder zenuwen, en het glazuur ook niet. Daarom voelt boren door glazuur weinig, maar zodra de tandarts in de tandholte komt = pijn → verdoving nodig.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 17",
        bronLink: "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-1-o-spr.pdf",
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'tandbeen', 'tandholte', 'zenuwen'" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "3 lagen van een tand", tekst: "Een tand heeft van buiten naar binnen: GLAZUUR (hardste laag, geen zenuwen) → TANDBEEN/dentine (hard, geen zenuwen) → TANDHOLTE/pulpa (zacht, met zenuwen + bloedvaten)." },
            { titel: "Waar zitten zenuwen?", tekst: "Alleen in de **tandholte**. Niet in tandbeen, niet in glazuur. Daarom voelt oppervlakkig boren weinig, maar dieper boren (naar de holte) doet veel pijn." },
            { titel: "Verdoving bij gaatjes", tekst: "Bij diepe gaatjes verdooft de tandarts vooraf, omdat de boor de tandholte raakt. Bij oppervlakkige reiniging is verdoving niet nodig — geen zenuwen aanwezig." },
          ],
          woorden: [
            { woord: "glazuur", uitleg: "Hardste laag van de tand (buitenkant)." },
            { woord: "tandbeen (dentine)", uitleg: "Harde laag onder glazuur — bevat geen zenuwen maar wel tubuli (kanaaltjes)." },
            { woord: "tandholte (pulpa)", uitleg: "Zacht centrum met zenuwen + bloedvaten." },
          ],
          theorie: "Een gaatje begint in glazuur (geen pijn), groeit door tandbeen (kleine pijn bij koud/zoet), en raakt uiteindelijk de tandholte (kies-pijn die niet meer weggaat zonder behandeling).",
          voorbeelden: [
            { type: "stap", tekst: "Tand schuren bij gewone reiniging = oppervlakkig glazuur → geen pijn." },
            { type: "stap", tekst: "Diepe boor + zachtjes raken pulpa = direct fel pijn → verdoving nodig." },
          ],
          basiskennis: [
            { onderwerp: "Onthoud", uitleg: "Zenuwen + bloedvaten zitten samen in de centrale holte. Buitenkant van een tand is 'dood'." },
          ],
          niveaus: {
            basis: "Alleen in de tandholte. Antwoord B.",
            simpeler: "Zenuwen zitten alleen in de zachte kern van de tand (de tandholte). Het tandbeen eromheen is hard en zonder zenuwen. Antwoord B.",
            nogSimpeler: "Alleen tandholte = B.",
          },
        },
      },
    ],
  },

  // ─── Vraag 33 — Lymfevaten stromen door kleppen ────────────
  {
    title: "Vraag 33 — Wat zorgt voor lymfestroom?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 1, vraag 33.",
    emoji: "🎓",
    checks: [
      {
        q: "Witte bloedcellen kunnen vanuit haarvaten in het weefselvloeistof terechtkomen. Dat stroomt via de lymfevaten weer richting het hart. Deze lymfevloeistof kan maar in één richting stromen. Hierover wordt door Julia en Finn een uitspraak gedaan. Julia zegt dat kleppen in de lymfevaten ervoor zorgen dat lymfevloeistof in de goede richting stroomt. Finn zegt dat het pompen van het hart ervoor zorgt dat lymfevloeistof in de goede richting stroomt. Wie heeft gelijk?",
        options: [
          "Geen van beiden heeft gelijk.",
          "Alleen Julia heeft gelijk.",
          "Alleen Finn heeft gelijk.",
          "Julia heeft gelijk en Finn heeft gelijk.",
        ],
        answer: 1,
        wrongHints: [
          "Julia heeft wél gelijk — kleppen voorkomen terugstromen in lymfevaten (net als in aderen).",
          null,
          "Finn heeft het mis — het hart pompt BLOED, niet lymfe. Lymfe stroomt door spier-bewegingen + kleppen.",
          "Finn heeft het mis — de pomp-werking van het hart gaat door BLOEDvaten, niet door lymfevaten.",
        ],
        explanation: "Het hart pompt BLOED door de slag- en aderen. De lymfevaten hebben geen aansluiting op de hart-pomp. Lymfe stroomt door (1) druk uit weefsels + (2) spier-bewegingen (skeletspieren knijpen lymfe vooruit) en wordt door (3) KLEPPEN in de juiste richting gehouden. Alleen Julia heeft dus gelijk: B.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 33",
        bronLink: "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-1-o-spr.pdf",
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'lymfevaten', 'kleppen', 'haarvaten', 'pompen'" },
          { id: "lichaam-gezondheid-po", title: "Lichaam & spieren + bloed", niveau: "po-1F", why: "basis bloedsomloop + hart — opfris voor deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Twee transportsystemen", tekst: "Lichaam heeft 2 vloeistof-systemen:\n• **Bloed** in slagaders + aders + haarvaten → aangedreven door HART.\n• **Lymfe** in lymfevaten → NIET aangedreven door hart." },
            { titel: "Waar komt lymfe vandaan?", tekst: "Uit weefselvocht (vloeistof tussen cellen). Lymfevaten zuigen dat op en transporteren het terug naar grote aders bij hartwerking-gebied. Dus wel uiteindelijk naar bloed, maar niet ÍN bloed." },
            { titel: "Wat duwt lymfe vooruit?", tekst: "1. **Druk** uit weefsel\n2. **Spier-bewegingen** (lopen, ademen) knijpen lymfevaten samen\n3. **Kleppen** in lymfevaten zorgen dat lymfe niet terug stroomt — alleen vooruit\n\nHet hart speelt hier GEEN rol." },
            { titel: "Conclusie", tekst: "Julia (kleppen → goede richting): klopt. Finn (hart pompt): klopt NIET. Antwoord B." },
          ],
          woorden: [
            { woord: "lymfevaten", uitleg: "Buisjes-systeem dat weefselvocht terugbrengt naar de bloedbaan." },
            { woord: "klep", uitleg: "Eénrichtingsdoorgang — stroomt alleen vooruit, niet terug." },
            { woord: "haarvat", uitleg: "Heel klein bloedvat tussen slagader en ader, waar uitwisseling met weefsel plaatsvindt." },
          ],
          theorie: "**Bloed vs lymfe — verschillen:**\n\n| | Bloed | Lymfe |\n|---|---|---|\n| Pomp | hart | spierwerking |\n| Kleur | rood (rode bloedcel) | helder/geel |\n| Inhoud | rode + witte cellen + plaatjes | alleen witte cellen |\n| Richting | rondje | eenrichting (van weefsel naar bloed) |",
          voorbeelden: [
            { type: "stap", tekst: "Veel lopen / sport → spieren knijpen lymfe vooruit. Daarom: bij stilzitten dikke voeten (oedeem) — lymfe stagneert." },
            { type: "stap", tekst: "Aderen hebben OOK kleppen, om dezelfde reden — bloed terug omhoog tegen zwaartekracht in." },
          ],
          basiskennis: [
            { onderwerp: "Onthoud", uitleg: "Hart pompt alleen BLOED. Lymfe gebruikt spierwerking + kleppen." },
          ],
          niveaus: {
            basis: "Alleen Julia. Antwoord B.",
            simpeler: "Het hart pompt alleen BLOED. Lymfe stroomt door spier-bewegingen en kleppen. Julia (kleppen) heeft gelijk, Finn (hartpomp) niet. Antwoord B.",
            nogSimpeler: "Julia ja, Finn nee = B.",
          },
        },
      },
    ],
  },

  // ─── Vraag 34 — Welke bloeddeeltjes in lymfe ────────────
  {
    title: "Vraag 34 — Bloeddeeltjes in lymfe",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 1, vraag 34.",
    emoji: "🎓",
    checks: [
      {
        q: "Welke bloeddeeltjes zijn in de lymfevloeistof aanwezig?",
        options: [
          "alleen de witte bloedcellen",
          "alleen de witte bloedcellen en de rode bloedcellen",
          "de witte bloedcellen, de rode bloedcellen en de bloedplaatjes",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Rode bloedcellen zijn te groot voor lymfevaten en blijven in de bloedbaan.",
          "Bloedplaatjes (voor stolling) zitten ook alleen in bloed — niet in lymfe.",
        ],
        explanation: "Alleen WITTE BLOEDCELLEN kunnen door de wanden van haarvaten heen (ze persen zich er doorheen — diapedese). Zo komen ze in weefselvocht en daarmee in lymfe terecht. Rode bloedcellen en bloedplaatjes blijven in de bloedbaan.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 34",
        bronLink: "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-1-o-spr.pdf",
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'rode bloedcel', 'witte bloedcel', 'bloedplaatje', 'lymfevloeistof'" },
          { id: "lichaam-gezondheid-po", title: "Lichaam & spieren + bloed", niveau: "po-1F", why: "basis bloedcellen-soorten — opfris voor deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "3 soorten bloeddeeltjes", tekst: "**Rode bloedcellen** (zuurstof-transport) — groot + rood door hemoglobine.\n**Witte bloedcellen** (afweer) — minder talrijk, kunnen door celwanden heen kruipen.\n**Bloedplaatjes** (stolling) — celfragmenten." },
            { titel: "Wat past door haarvatwand?", tekst: "Witte bloedcellen kunnen actief door haarvatwand kruipen (diapedese) — dat is nodig om infecties in weefsels aan te pakken. Rode cellen + plaatjes blijven binnen het vat." },
            { titel: "Wat zit in lymfe?", tekst: "Lymfe = weefselvocht dat via lymfevaten teruggevoerd wordt. Bevat dus wat in weefselvocht zit: WITTE bloedcellen (de andere bloed-deeltjes komen niet uit het bloedvat)." },
          ],
          woorden: [
            { woord: "diapedese", uitleg: "Door de vaatwand heen kruipen — alleen witte cellen kunnen dit." },
            { woord: "weefselvocht", uitleg: "Vloeistof tussen cellen — voert voedingsstoffen aan en afval af." },
          ],
          theorie: "Bedenk: lymfe = letterlijk vloeistof TUSSEN cellen die door haarvaatwand is gesijpeld. Wat past door die wand?\n• water + opgeloste stoffen ✓\n• witte bloedcellen (actief kruipend) ✓\n• rode bloedcellen — te groot ✗\n• bloedplaatjes — blijven binnen ✗",
          voorbeelden: [
            { type: "stap", tekst: "Bij infectie: witte cellen gaan uit bloed naar weefsel (etter = veel witte cellen). Roding bloed blijft in vat." },
            { type: "stap", tekst: "Bij sportblessure: bloeding = rode cellen lekken uit kapotte bloedvat. In lymfe gebeurt dit niet zo." },
          ],
          basiskennis: [
            { onderwerp: "Onthoud", uitleg: "Lymfe = witte cellen ✓, rode cellen + plaatjes ✗." },
          ],
          niveaus: {
            basis: "Alleen witte bloedcellen. Antwoord A.",
            simpeler: "Alleen witte bloedcellen kunnen door de wand van haarvaten heen kruipen en zo in lymfe komen. De rest van het bloed blijft binnen het vat. Antwoord A.",
            nogSimpeler: "Alleen wit = A.",
          },
        },
      },
    ],
  },

  // ─── Vraag 38 — Maagsap verteert welke voedingsstof ────────
  {
    title: "Vraag 38 — Wat verteert maagsap?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 1, vraag 38.",
    emoji: "🎓",
    checks: [
      {
        q: "Welke van de voedingsstoffen wordt door maagsap verteerd?",
        options: [
          "eiwitten",
          "koolhydraten",
          "vetten",
          "vezels",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Koolhydraten worden afgebroken in de mond (door speeksel-amylase) en in de dunne darm — niet door maagsap.",
          "Vetten worden in de dunne darm verteerd (door gal + lipase), niet in de maag.",
          "Vezels worden niet verteerd door enzymen — ze passeren grotendeels onverteerd.",
        ],
        explanation: "Maagsap bevat het enzym PEPSINE plus zoutzuur. Pepsine breekt EIWITTEN af tot kleinere stukjes (peptiden). Maagsap doet niets met koolhydraten, vetten of vezels. In de dunne darm worden eiwitten verder afgebroken tot aminozuren.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 38",
        bronLink: "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-1-o-spr.pdf",
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'maagsap', 'eiwitten', 'koolhydraten', 'vetten', 'vezels'" },
          { id: "lichaam-gezondheid-po", title: "Lichaam — Organen + voeding", niveau: "po-1F", why: "basis spijsvertering + voedingsstoffen — opfris voor deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Waar wordt wat verteerd?", tekst: "**Mond** (speeksel): koolhydraten beginnen.\n**Maag** (maagsap = zoutzuur + pepsine): eiwitten.\n**Dunne darm** (galsap + alvleeskliersap): alle 3 (koolhydraten, eiwitten, vetten) volledig afgebroken.\n**Dikke darm**: water-opname + vezels gefermenteerd door bacteriën." },
            { titel: "Maagsap = pepsine + HCl", tekst: "Maagsap bestaat uit:\n• Zoutzuur (HCl) — doodt bacteriën + activeert pepsine\n• **Pepsine** — eiwit-afbrekend enzym\n\nGeen koolhydraat- of vet-enzymen. Daarom alleen eiwit-vertering." },
            { titel: "Antwoord", tekst: "Maagsap verteert eiwitten → antwoord A." },
          ],
          woorden: [
            { woord: "maagsap", uitleg: "Vloeistof gemaakt door maagwand: zoutzuur + pepsine." },
            { woord: "pepsine", uitleg: "Enzym dat eiwitten afbreekt — werkt alleen in zure omgeving (maag)." },
            { woord: "eiwit", uitleg: "Voedingsstof uit vlees/vis/zuivel/peulvruchten — bouwsteen voor lichaam." },
            { woord: "vezel", uitleg: "Onverteerbare plant-stof — goed voor darmwerking, niet voor energie." },
          ],
          theorie: "**Vertering per plek:**\n• Mond → koolhydraten (speeksel-amylase)\n• Maag → **EIWITTEN** (pepsine)\n• Dunne darm → koolhydraten + eiwitten + vetten (galsap + pancreas-enzymen)\n• Vezels → niet verteerd",
          voorbeelden: [
            { type: "stap", tekst: "Hamburger eten: gehakt (eiwit) wordt in maag afgebroken. Brood (koolhydraat) gaat door naar dunne darm." },
            { type: "stap", tekst: "Vet steak: vet blijft intact in maag, verteerd pas in dunne darm met behulp van gal." },
          ],
          basiskennis: [
            { onderwerp: "Onthoud", uitleg: "Maag = zuur = eiwit-vertering. Dunne darm = neutraal = alle drie." },
          ],
          niveaus: {
            basis: "Maagsap verteert eiwitten (pepsine). Antwoord A.",
            simpeler: "Maagsap bevat het enzym pepsine, dat eiwitten afbreekt. Koolhydraten/vetten/vezels worden ELDERS verwerkt. Antwoord A.",
            nogSimpeler: "Eiwitten = A.",
          },
        },
      },
    ],
  },

  // ─── Vraag 42 — Waar filtert de nier? ──────────────────────
  {
    title: "Vraag 42 — Waar filtert de nier?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 1, vraag 42.",
    emoji: "🎓",
    checks: [
      {
        q: "In welke delen van een nier wordt het bloed gefilterd?",
        options: [
          "in het nierbekken en het niermerg",
          "in het nierbekken en de nierschors",
          "in de nierschors en het niermerg",
        ],
        answer: 2,
        wrongHints: [
          "Het nierbekken VERZAMELT alleen urine — daar wordt niet gefilterd.",
          "Het nierbekken filtert niet. Alleen de nierschors + het niermerg samen doen het filterwerk.",
          null,
        ],
        explanation: "Het filteren van bloed gebeurt in de NEFRONEN. Die zitten gedeeltelijk in de NIERSCHORS (waar het bloed binnenkomt + voorfilter) en gedeeltelijk in het NIERMERG (waar water + zouten terug-opgenomen worden). Het NIERBEKKEN is alleen een verzamelpot voor urine voordat die door de urineleider naar de blaas gaat — geen filtering.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 42",
        bronLink: "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-1-o-spr.pdf",
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'nierschors', 'niermerg', 'nierbekken', 'nefron'" },
          { id: "lichaam-gezondheid-po", title: "Lichaam — Organen", niveau: "po-1F", why: "basis nieren + urinewegen — opfris voor deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "3 lagen van een nier", tekst: "Van buiten naar binnen:\n1. **Nierschors** — buitenste laag, hier komen de meeste filter-units (nefronen).\n2. **Niermerg** — middenstuk, waar water + nuttige stoffen terug-opgenomen worden.\n3. **Nierbekken** — holle ruimte binnenin, hier komt klare urine in voordat 'ie naar de urineleider gaat." },
            { titel: "Wat filtert wat?", tekst: "Het **nefron** (microscopisch filter-eenheid) zit half in schors + half in merg. Bloed wordt eerst in schors gefilterd, dan loopt het door het merg waar bruikbare stoffen + water terug naar bloed gaan. Wat overblijft = urine." },
            { titel: "Antwoord", tekst: "Filtering = schors + merg samen. Antwoord C." },
          ],
          woorden: [
            { woord: "nierschors", uitleg: "Buitenste laag van nier — start van filteren." },
            { woord: "niermerg", uitleg: "Middenlaag — terug-opname water + zout." },
            { woord: "nierbekken", uitleg: "Verzamelpot voor urine — niet filterend." },
            { woord: "nefron", uitleg: "Microscopisch filter-eenheid (1 nier = ~1 miljoen nefronen)." },
          ],
          theorie: "**Functie per nier-deel:**\n• Nierschors: filteren (waar nefronen starten)\n• Niermerg: terug-opname water + zouten\n• Nierbekken: opvangen klare urine\n• Urineleider: vervoer naar blaas",
          voorbeelden: [
            { type: "stap", tekst: "Bloed gaat de nier in via nierslagader → gefilterd in nefronen (schors + merg) → urine verzamelt in bekken → blaas via urineleider." },
            { type: "stap", tekst: "Drink je veel water? → minder terug-opname in merg → meer urine. Drink je weinig? → veel terug-opname → geconcentreerde urine." },
          ],
          basiskennis: [
            { onderwerp: "Onthoud", uitleg: "Schors + merg = filteren. Bekken = verzamelen." },
          ],
          niveaus: {
            basis: "Nierschors + niermerg. Antwoord C.",
            simpeler: "Het filteren doet de nefron — die loopt door schors EN merg. Het nierbekken vangt alleen urine op, filtert niet. Antwoord C.",
            nogSimpeler: "Schors + merg = C.",
          },
        },
      },
    ],
  },

  // ─── Vraag 1 — Type leergedrag bij clicker-training ────────
  {
    title: "Vraag 1 — Wat is clicker-training voor leergedrag?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 1, vraag 1.",
    emoji: "🎓",
    checks: [
      {
        q: "Door de training leert de hond. Hoe heet het type leergedrag dat de hond vertoont tijdens de training met een clicker?",
        options: [
          "conditionering",
          "gewenning",
          "inprenten",
          "trial-and-error",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Gewenning = stoppen met reageren op een prikkel — niet wat de hond hier doet.",
          "Inprenten = jonge dieren leren hun moeder/eerste-zien (eend achter mens) — niet hier.",
          "Trial-and-error = uitproberen + zelf ontdekken — hier kríjgt de hond een signaal en beloning.",
        ],
        explanation: "Bij clicker-training koppelt de hond een SIGNAAL (click) aan een GEDRAG (zit) aan een BELONING (snoepje). Dat is klassieke **conditionering**: een aangeleerde reactie op een specifieke prikkel. Pavlov was de eerste die dit beschreef bij honden + bel + voer.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 1",
        bronLink: "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-1-o-spr.pdf",
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'conditionering', 'gewenning', 'inprenten', 'trial-and-error'" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "4 typen leergedrag", tekst: "Biologen onderscheiden:\n• **Conditionering** — prikkel koppelen aan reactie (Pavlov, clicker)\n• **Gewenning** — leren een prikkel NEGEREN (gewone fietsbel-geluid stoort niet meer)\n• **Inprenten** — jong dier herkent eerste-bewegende-ding als 'moeder' (eendje + Lorenz)\n• **Trial-and-error** — uitproberen + onthouden wat werkt" },
            { titel: "Wat doet clicker-training?", tekst: "Hond hoort click → krijgt snoepje. Na herhaling: hond verbindt click = beloning. Dan: click NA gewenst gedrag = hond herhaalt gedrag. Dit is conditionering — net als Pavlov's bel-experiment." },
            { titel: "Verschil met trial-and-error", tekst: "Bij conditionering geeft de TRAINER het signaal + beloning. Bij trial-and-error zoekt het dier ZELF de oplossing (rat in doolhof). Hier komt het signaal van de mens → conditionering." },
          ],
          woorden: [
            { woord: "conditionering", uitleg: "Leren door koppeling van prikkel + gedrag + beloning." },
            { woord: "Pavlov", uitleg: "Russische wetenschapper, ontdekte conditionering bij honden (bel + voer = kwijlen)." },
            { woord: "gewenning", uitleg: "Stoppen met reageren op prikkel die geen gevolg heeft." },
            { woord: "inprenten", uitleg: "Vroegkinderlijk leren van soortgenoten / ouders." },
          ],
          theorie: "**Onthoud per type:**\n• Beloning + signaal = **conditionering**\n• Negeren = **gewenning**\n• Eerste-zien als moeder = **inprenten**\n• Zelf ontdekken = **trial-and-error**",
          voorbeelden: [
            { type: "stap", tekst: "Hondje hoort blikje openen → komt aanrennen. = conditionering (geluid = eten)." },
            { type: "stap", tekst: "Eendjes lopen achter mens aan die ze eerst zagen. = inprenten." },
            { type: "stap", tekst: "Kat leert dat aanraken van hete kachel pijn doet. = trial-and-error." },
          ],
          basiskennis: [
            { onderwerp: "Onthoud", uitleg: "Clicker + beloning = conditionering. Pavlov-experiment is hét standaard-voorbeeld." },
          ],
          niveaus: {
            basis: "Conditionering. Antwoord A.",
            simpeler: "De hond leert: click = snoepje. Een gekoppelde reactie op een prikkel = conditionering (zoals Pavlov's bel-experiment). Antwoord A.",
            nogSimpeler: "Click + snoepje = conditionering = A.",
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
    "12 echte examenvragen uit het VMBO-GL/TL biologie-examen 2024 tijdvak 1. Per vraag de officiële antwoorden, didactische denkprikkel-hints, inhoudelijke uitleg, en (waar relevant) doorklik naar bestaande biologie-leerpaden. Open vragen + tabel-vragen + plaatje-afhankelijke vragen overgeslagen.",
  triggerKeywords: [
    "examen biologie 2024", "examen oefenen biologie", "echte examenvragen biologie",
    "mutatie", "x-chromosoom oogkleur", "kweekvlees cel", "sterilisatie testosteron",
    "ureum lever", "vmbo biologie 2024 tijdvak 1",
    "conditionering", "grote hersenen", "tandzenuwen", "lymfevaten kleppen",
    "witte bloedcellen lymfe", "maagsap eiwitten", "nierschors niermerg",
  ],
  chapters,
  steps,
};

export default examenBiologie2024T1;
