// Leerpad: Engelse Literatuur — HAVO/VWO Engels
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Klassiek + modern, genres,
// analyse, beroemde auteurs + werken.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["🇬🇧", "🎭", "📚", "🇺🇸", "🏆"];

const chapters = [
  { letter: "A", title: "Periodes + canon (1500-1900)", emoji: "🇬🇧", from: 0, to: 0 },
  { letter: "B", title: "Shakespeare + drama", emoji: "🎭", from: 1, to: 1 },
  { letter: "C", title: "19e + 20e eeuw — roman", emoji: "📚", from: 2, to: 2 },
  { letter: "D", title: "Amerikaanse literatuur", emoji: "🇺🇸", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — analyse + modern", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Periodes + canon ──────────────────────────────────
  {
    title: "Periodes Engelse literatuur — kort overzicht",
    explanation:
      "**Belangrijkste perioden**:\n\n**1. Old English** (450-1100): Beowulf (epos), Angelsaksische poëzie.\n**2. Middle English** (1100-1500): Chaucer's 'Canterbury Tales' (~1387) — eerste literaire werk in spreektaal-Engels.\n**3. Renaissance/Early Modern** (1500-1660):\n• Shakespeare (1564-1616) — toneel + sonnetten.\n• Christopher Marlowe — 'Doctor Faustus'.\n• John Donne — metafysische poëzie.\n• John Milton — 'Paradise Lost' (1667).\n\n**4. Restoration + 18e eeuw** (1660-1798):\n• Rede + satire.\n• Jonathan Swift — 'Gulliver's Travels' (1726) — politieke satire.\n• Daniel Defoe — 'Robinson Crusoe' (1719) — eerste 'roman' in moderne zin.\n• Jane Austen (1775-1817) — 'Pride and Prejudice', 'Emma'.\n\n**5. Romantic period** (1798-1832):\n• Reactie op rationele Verlichting; nadruk op natuur, gevoel, individu.\n• William Wordsworth + Samuel Taylor Coleridge — 'Lyrical Ballads' 1798.\n• Lord Byron, P.B. Shelley, John Keats — 'Romantic poets'.\n• Mary Shelley — 'Frankenstein' (1818) — eerste science-fiction.\n\n**6. Victorian** (1837-1901):\n• Industrialisatie + sociale ongelijkheid.\n• Charles Dickens — 'Oliver Twist', 'Great Expectations', 'A Tale of Two Cities'.\n• Brontë-zusters — 'Jane Eyre' (Charlotte), 'Wuthering Heights' (Emily).\n• Thomas Hardy — 'Tess of the d'Urbervilles'.\n• Robert Louis Stevenson — 'Jekyll and Hyde'.\n• Lewis Carroll — 'Alice in Wonderland'.\n\n**7. Modernism** (1900-1945):\n• Experimenteel, gebroken vorm, stream-of-consciousness.\n• Virginia Woolf — 'Mrs Dalloway', 'To the Lighthouse'.\n• James Joyce (Ier) — 'Ulysses' (1922).\n• T.S. Eliot — 'The Waste Land' (1922).\n• D.H. Lawrence, Joseph Conrad, E.M. Forster.\n\n**8. Postmodern + Contemporary** (1945-nu):\n• George Orwell — '1984', 'Animal Farm'.\n• Salman Rushdie, Ian McEwan, Zadie Smith, Kazuo Ishiguro (Nobel 2017).\n• Margaret Atwood (Can) — 'Handmaid's Tale'.\n• J.K. Rowling — 'Harry Potter'.\n\n**Belangrijke prijzen**:\n• **Booker Prize** (1969) — beste roman in het Engels.\n• **Pulitzer** (Amerikaans).\n• **Nobel Literature** — wereldwijd.",
    checks: [
      {
        q: "Wie schreef **'Pride and Prejudice'**?",
        options: ["Jane Austen", "Charles Dickens", "George Orwell", "Virginia Woolf"],
        answer: 0,
        wrongHints: [null, "Niet — andere periode.", "Niet — 20e eeuw.", "Niet — modernist."],
        uitlegPad: {
          stappen: [{ titel: "Austen, 1813", tekst: "Jane Austen (1775-1817): meesterwerk over Elizabeth Bennet + Mr Darcy. Onderzoekt sociale klasse, huwelijksmarkt, vrouwelijke autonomie. Subtiele ironie. Boek tot vandaag gelezen + meer dan 10× verfilmd." }],
          niveaus: { basis: "Austen. A.", simpeler: "Pride+Prejudice = Austen. A.", nogSimpeler: "Austen = A." },
        },
      },
      {
        q: "**Beowulf** is uit welke periode?",
        options: ["Old English (~700)", "Middle English", "Renaissance", "Modern"],
        answer: 0,
        wrongHints: [null, "Niet — eerder.", "Veel later.", "Veel later."],
        uitlegPad: {
          stappen: [{ titel: "Angelsaksisch epos", tekst: "Geschreven in Old English (Angelsaksisch) — totaal andere taal dan modern Engels. Held Beowulf verslaat monster Grendel + draak. Mondelinge traditie, opgeschreven ~10e eeuw." }],
          niveaus: { basis: "Old English. A.", simpeler: "Heel oud (~700). A.", nogSimpeler: "OE = A." },
        },
      },
      {
        q: "**'Frankenstein'** wordt vaak gezien als eerste:",
        options: [
          "Science-fiction roman",
          "Detectiveroman",
          "Western",
          "Romantisch poëziebundel"
        ],
        answer: 0,
        wrongHints: [null, "Niet — kwam later.", "Niet — Amerikaans subgenre.", "Niet — proza."],
        uitlegPad: {
          stappen: [
            { titel: "Mary Shelley, 1818", tekst: "Mary Shelley schreef Frankenstein op 18-jarige leeftijd. Wetenschapper Victor Frankenstein creëert monster uit dode lichaamsdelen + reanimeert via elektriciteit. Pionier sci-fi door wetenschap als plot-driver, niet magie." },
          ],
          niveaus: { basis: "SF. A.", simpeler: "Eerste sciencefiction. A.", nogSimpeler: "SF = A." },
        },
      },
      {
        q: "**Booker Prize** wordt uitgereikt voor:",
        options: [
          "Beste roman geschreven in het Engels",
          "Beste Amerikaanse boek",
          "Beste poëzie",
          "Beste filmscript"
        ],
        answer: 0,
        wrongHints: [null, "Niet — niet alleen US.", "Niet — alleen roman.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "Sinds 1969", tekst: "Prestigieuze prijs voor roman in Engels. Sinds 2014 ook van Amerikaanse auteurs. Daarnaast: **Booker International** voor vertaalde werken (Marieke Lucas Rijneveld won die 2020 met 'De avond is ongemak')." }],
          niveaus: { basis: "Roman in Engels. A.", simpeler: "Beste Engelstalige roman. A.", nogSimpeler: "Booker = A." },
        },
      },
      {
        q: "**Modernism** (1900-1945) kenmerken:",
        options: [
          "Experimenteel, gebroken vorm, stream-of-consciousness",
          "Realistisch + chronologisch",
          "Religieus dominant",
          "Korte simpele zinnen"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — wel diverse thema's.", "Niet — Joyce had lange zinnen."],
        uitlegPad: {
          stappen: [
            { titel: "Breken met traditie", tekst: "WO1 schokte vertrouwen in 'vooruitgang' → schrijvers experimenteren. Stream of consciousness = gedachten direct op papier (Joyce 'Ulysses', Woolf 'Mrs Dalloway'). Tijd-sprong, multiple verteller, ambiguïteit. T.S. Eliot 'The Waste Land' (1922) = pinnacle." },
          ],
          niveaus: { basis: "Experiment. A.", simpeler: "Gebroken vorm + stream. A.", nogSimpeler: "Modernism = A." },
        },
      },
    ],
  },

  // ─── B. Shakespeare ───────────────────────────────────────
  {
    title: "Shakespeare — drama-genres + bekende werken",
    explanation:
      "**William Shakespeare** (1564-1616) — meest invloedrijke schrijver in Engels.\n• Geboren Stratford-upon-Avon, werkte in Londen (Globe Theatre).\n• 37+ toneelstukken + 154 sonnetten.\n• Schiep ~1700 nieuwe woorden + uitdrukkingen die nu standaard zijn (eyeball, lonely, gossip, etc.).\n\n**Genres**:\n\n**1. Tragedies**:\n• **Hamlet** (1601): Deense prins twijfelt over wraak op zijn oom-koning. 'To be or not to be'. Bekendste monologie ter wereld.\n• **Othello** (1604): zwarte generaal wordt gemanipuleerd door Iago → vermoordt onschuldige vrouw Desdemona.\n• **Macbeth** (1606): Schotse edelman wordt koning via moord; geweten + heksen-voorspelling.\n• **King Lear** (1605): oud koning verdeelt rijk over dochters → verraad + waanzin.\n• **Romeo and Juliet** (1595): verboden liefde tussen Montague + Capulet.\n\n**2. Comedies**:\n• **A Midsummer Night's Dream** (1595): magische bos, feeën, verwarringen.\n• **Much Ado About Nothing** (1598): scherpe dialogen Beatrice + Benedick.\n• **The Tempest** (1611): magisch eiland, Prospero + Caliban — laatste werk.\n\n**3. Histories**:\n• Henry IV, V, VI; Richard II, III — Engelse koningen.\n• Politieke + morele dilemma's.\n\n**Kenmerken**:\n• **Iambic pentameter**: 5 jamben per regel (10 lettergrepen). 'Shall I compare thee to a summer's day?'\n• **Blank verse**: ongerijmd jambisch.\n• **Wordplay + puns**: bewuste dubbelzinnigheden.\n• **Soliloquies**: hardop denken op podium (Hamlet's 'to be or not to be').\n• **Mengt klassen**: koningen + dwazen samen op podium.\n\n**Sonnetten** (1609):\n• 154 stuks, 14 regels ABAB CDCD EFEF GG.\n• Veel over liefde, schoonheid, tijd, dood.\n• Bekend: sonnet 18 ('Shall I compare thee...'), 116 ('Let me not to the marriage...').\n\n**Globe Theatre**:\n• Open-air, plaats voor 3000.\n• Goedkope plekken staan (groundlings), duurdere zitten.\n• Alle rollen door mannen (vrouwen verboden) — jongens speelden vrouwen.\n\n**Waarom nog steeds gelezen?**\n• Universele thema's: macht, liefde, jaloezie, ambitie.\n• Psychologische diepgang voor 1600 ongekend.\n• Taal-virtuositeit.",
    checks: [
      {
        q: "**'To be or not to be'** komt uit welk werk?",
        options: ["Hamlet", "Macbeth", "Romeo and Juliet", "King Lear"],
        answer: 0,
        wrongHints: [null, "Niet — andere monoloog.", "Niet — andere monoloog.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Beroemdste monoloog", tekst: "Hamlet's soliloquy uit Act 3 Scene 1. Filosofische vraag over leven of dood, zelfmoord, betekenis. Wereldberoemd, eindeloos geïnterpreteerd." }],
          niveaus: { basis: "Hamlet. A.", simpeler: "Hamlet's monoloog. A.", nogSimpeler: "Hamlet = A." },
        },
      },
      {
        q: "Hoeveel **sonnetten** schreef Shakespeare?",
        options: ["154", "14", "37", "200"],
        answer: 0,
        wrongHints: [null, "Niet — dat is regels per sonnet.", "Niet — dat is aantal toneelstukken.", "Niet — minder."],
        uitlegPad: {
          stappen: [{ titel: "154 stuks", tekst: "Uitgegeven 1609 in één bundel. Eerste 126: aan de 'Fair Youth' (een mooie jonge man). 127-154: aan de 'Dark Lady'. Alle 14 regels in ABAB CDCD EFEF GG = 'Shakespearean sonnet'." }],
          niveaus: { basis: "154. A.", simpeler: "154 sonnetten. A.", nogSimpeler: "154 = A." },
        },
      },
      {
        q: "**Macbeth** is een:",
        options: ["Tragedy", "Comedy", "History", "Sonnet"],
        answer: 0,
        wrongHints: [null, "Niet — eindigt slecht.", "Wel historisch maar dramatisch genre = tragedy.", "Niet — toneelstuk."],
        uitlegPad: {
          stappen: [{ titel: "Schots koningschap door moord", tekst: "Macbeth + Lady Macbeth manipuleren elkaar tot moord op koning Duncan. Resultaat: schuldgevoel, waanzin, ondergang beide. Klassieke tragedy: ambitie + hubris → val. Geïnspireerd door echte Schotse historie (deels)." }],
          niveaus: { basis: "Tragedy. A.", simpeler: "Tragedie. A.", nogSimpeler: "Tragedy = A." },
        },
      },
      {
        q: "**Iambic pentameter** is:",
        options: [
          "5 jamben per regel (10 lettergrepen, ta-DAH × 5)",
          "Geen metrum",
          "Rijmend AABB",
          "Vrije vers"
        ],
        answer: 0,
        wrongHints: [null, "Wel metrum.", "Niet — geen vast rijm-vereiste.", "Niet — wel structuur."],
        uitlegPad: {
          stappen: [
            { titel: "Standaard Engelse poëzie", tekst: "Pent = 5, jambe = ta-DAH. Voorbeeld: 'Shall I com-PARE thee TO a SUM-mer's DAY?' (5 maal ta-DAH). Natuurlijk Engels accentpatroon → klinkt vloeiend. Shakespeare's dialogen meestal in blank verse (iambic pentameter zonder rijm)." },
          ],
          niveaus: { basis: "5 jamben. A.", simpeler: "10 lettergrepen ta-DAH. A.", nogSimpeler: "5×ta-DAH = A." },
        },
      },
      {
        q: "**Globe Theatre** in Shakespeare's tijd:",
        options: [
          "Open-air, 3000 toeschouwers, alle rollen door mannen",
          "Modern theater met stoelen",
          "Privé voor koning",
          "Bestond niet"
        ],
        answer: 0,
        wrongHints: [null, "Niet — anachronisme.", "Niet — publiek.", "Bestaat wel + replica vandaag."],
        uitlegPad: {
          stappen: [
            { titel: "Originele was 1599-1644", tekst: "Open-air ronde theater bij Theems. 'Groundlings' (lagere klasse) stonden op vloer voor 1 penny. Galerijen rondom voor rijken. Vrouwenrollen door jonge mannen gespeeld (acteursvak verboden voor vrouwen tot 1660+). Replica gebouwd 1997 in Londen — bezoekbaar." },
          ],
          niveaus: { basis: "Open-air + mannen. A.", simpeler: "Buiten theater met staanplek. A.", nogSimpeler: "Open = A." },
        },
      },
    ],
  },

  // ─── C. 19e + 20e eeuw roman ──────────────────────────────
  {
    title: "Britse roman 19e + 20e eeuw — hoogtepunten",
    explanation:
      "**Britse roman bloeit** in deze periodes.\n\n**Charles Dickens** (1812-1870):\n• Werd verkocht in **wekelijkse afleveringen** (zoals tv-series nu).\n• Sociale kritiek: armoede, kinderarbeid, justitie.\n• Beroemde werken:\n  - **Oliver Twist** (1838): weeskind, criminele wereld Londen.\n  - **A Christmas Carol** (1843): Ebenezer Scrooge, gierigheid, geesten.\n  - **David Copperfield** (1850): semi-autobiografisch.\n  - **Great Expectations** (1861): Pip, sociale klimming, illusie.\n  - **A Tale of Two Cities** (1859): Frans Revolutie.\n• Personages zijn vaak archetypisch (Scrooge = vrek geworden).\n\n**Brontë-zusters**:\n• **Charlotte** — 'Jane Eyre' (1847): wees → gouvernante → liefde met Rochester.\n• **Emily** — 'Wuthering Heights' (1847): gepassioneerde Heathcliff + Catherine, gotisch + wild.\n• **Anne** — 'The Tenant of Wildfell Hall'.\n• Schreven onder pseudoniem (Currer, Ellis, Acton Bell) om vrouwen-vooroordeel te omzeilen.\n\n**Late Victoriaans / Edwardian**:\n• Thomas Hardy — 'Tess of the d'Urbervilles' (1891): tragedy van vrouwelijk slachtoffer.\n• Bram Stoker — 'Dracula' (1897): gotische horror.\n• Joseph Conrad — 'Heart of Darkness' (1899): koloniale kritiek.\n• Arthur Conan Doyle — Sherlock Holmes verhalen.\n\n**Modernist (1900-1945)**:\n\n**Virginia Woolf** (1882-1941):\n• Pionier stream-of-consciousness.\n• **Mrs Dalloway** (1925): één dag in leven Clarissa Dalloway.\n• **To the Lighthouse** (1927): familiedrama, perceptie.\n• 'A Room of One's Own' (1929): feministisch essay.\n\n**James Joyce** (1882-1941, Ier):\n• **Ulysses** (1922): één dag (16 juni 1904) in Dublin, parallel met Homerus' Odyssee.\n• 'Bloomsday' jaarlijks gevierd 16 juni.\n• Notoir moeilijk te lezen — experimenteel.\n\n**George Orwell** (1903-1950):\n• **Animal Farm** (1945): allegorie Russische Revolutie via boerderij-dieren.\n• **1984** (1949): dystopische toekomst (Big Brother, doublethink, Newspeak).\n• Politiek-engagement schrijver.\n\n**Naoorlogs**:\n• William Golding — 'Lord of the Flies' (1954): jongens op eiland devolven.\n• J.R.R. Tolkien — 'Lord of the Rings' (1954): fantasy-epos.\n• C.S. Lewis — 'Narnia'-serie.\n• Ian McEwan — 'Atonement', 'On Chesil Beach'.\n• Kazuo Ishiguro (Nobel 2017) — 'Remains of the Day', 'Never Let Me Go'.\n• Zadie Smith — 'White Teeth' (2000).\n• Salman Rushdie — 'Midnight's Children' (1981).\n\n**Fantasy + populair**:\n• J.K. Rowling — Harry Potter (1997-2007).\n• Philip Pullman — His Dark Materials.\n• Terry Pratchett — Discworld.",
    checks: [
      {
        q: "Wie schreef **'1984'**?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Margaret Atwood"],
        answer: 0,
        wrongHints: [null, "Niet — schreef 'Brave New World'.", "Niet — 'Fahrenheit 451'.", "Niet — Handmaid's Tale."],
        uitlegPad: {
          stappen: [
            { titel: "Dystopie uit 1949", tekst: "Orwell schreef '1984' over totalitaire toekomst-staat: Big Brother kijkt mee, taal wordt vereenvoudigd ('Newspeak') om denken te beperken, geschiedenis wordt herschreven. Begrippen: 'doublethink', 'thoughtcrime', 'Room 101' — alledaags geworden. Sterk politiek-engagement (Orwell was tegen Stalinisme + nazisme)." },
          ],
          niveaus: { basis: "Orwell. A.", simpeler: "Orwell 1984. A.", nogSimpeler: "Orwell = A." },
        },
      },
      {
        q: "**Charles Dickens'** romans verschenen vaak als:",
        options: [
          "Wekelijkse afleveringen (serial publication)",
          "Eén dik boek tegelijk",
          "Korte verhalen alleen",
          "Toneelstukken"
        ],
        answer: 0,
        wrongHints: [null, "Niet — werd zo populair.", "Wel verhalen ook.", "Niet — vooral proza."],
        uitlegPad: {
          stappen: [
            { titel: "Victoriaanse 'tv-series'", tekst: "Dickens publiceerde in tijdschriften, ~30 weken één hoofdstuk. Mensen wachtten in spanning op volgende. Bv. 'The Old Curiosity Shop': Amerikaanse lezers wachtten op haven naar Engelse boten met de laatste aflevering om te weten of Little Nell stierf." },
          ],
          theorie: "Verklaart Dickens' stijl: cliffhangers, dramatische scènes, veel personages om aandacht vast te houden over maanden.",
          niveaus: { basis: "Wekelijks. A.", simpeler: "In afleveringen. A.", nogSimpeler: "Serial = A." },
        },
      },
      {
        q: "**'Jane Eyre'** is geschreven door:",
        options: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "Mary Shelley"],
        answer: 0,
        wrongHints: [null, "Niet — die schreef Wuthering Heights.", "Niet — andere stijl + tijdperk.", "Niet — Frankenstein."],
        uitlegPad: {
          stappen: [
            { titel: "Drie Brontë-zussen", tekst: "**Charlotte**: Jane Eyre (1847).\n**Emily**: Wuthering Heights (1847).\n**Anne**: Tenant of Wildfell Hall.\nAlle drie schreven onder MANNELIJK pseudoniem (Currer, Ellis, Acton Bell) wegens vrouwen-vooroordeel. Alle vroeg gestorven (tuberculose)." },
          ],
          niveaus: { basis: "Charlotte. A.", simpeler: "Charlotte Brontë. A.", nogSimpeler: "Charlotte = A." },
        },
      },
      {
        q: "**Ulysses** (1922) is het hoofdwerk van:",
        options: ["James Joyce", "George Orwell", "Charles Dickens", "Virginia Woolf"],
        answer: 0,
        wrongHints: [null, "Niet — politieke fictie.", "Niet — Victoriaans.", "Niet — wel modernist, ander werk."],
        uitlegPad: {
          stappen: [
            { titel: "Notoir moeilijk maar bewonderd", tekst: "Joyce, Iers schrijver. Ulysses speelt op één dag (16 juni 1904) in Dublin. Volgt Leopold Bloom door 18 hoofdstukken, elk in andere literaire stijl. Parallel met Homerus' Odyssee (Bloom = Odysseus). Stream of consciousness pioneerde hier. Lang gecensureerd in VS + UK door taal." },
          ],
          theorie: "16 juni heet vandaag 'Bloomsday' — wereldwijd door Joyce-fans gevierd met lezingen + verkleed-tochten door Dublin.",
          niveaus: { basis: "Joyce. A.", simpeler: "James Joyce. A.", nogSimpeler: "Joyce = A." },
        },
      },
      {
        q: "**'A Christmas Carol'** introduceert welke figuur?",
        options: [
          "Ebenezer Scrooge (gierigaard)",
          "Sherlock Holmes",
          "Dracula",
          "Frankenstein"
        ],
        answer: 0,
        wrongHints: [null, "Niet — Conan Doyle.", "Niet — Stoker.", "Niet — Shelley."],
        uitlegPad: {
          stappen: [
            { titel: "Bekendste vrek wereld", tekst: "Dickens, 1843. Scrooge wordt bezocht door 3 geesten (verleden, heden, toekomst) → bekeert van gierigaard tot vrijgevig. Naam 'scrooge' is sinds tegen synoniem voor 'vrek'. Bah humbug! Klassiek Kerst-verhaal." },
          ],
          niveaus: { basis: "Scrooge. A.", simpeler: "Scrooge = vrek-figuur. A.", nogSimpeler: "Scrooge = A." },
        },
      },
    ],
  },

  // ─── D. Amerikaanse literatuur ────────────────────────────
  {
    title: "Amerikaanse literatuur — van Twain tot vandaag",
    explanation:
      "**19e-eeuwse pioniers**:\n\n• **Edgar Allan Poe** (1809-1849): horror + detective. 'The Raven' (poëzie), 'The Tell-Tale Heart', 'The Murders in the Rue Morgue' (eerste detective-verhaal).\n• **Nathaniel Hawthorne** (1804-1864): 'The Scarlet Letter' (1850) — Puritanisme + zonde.\n• **Herman Melville** (1819-1891): 'Moby Dick' (1851) — kapitein Ahab obsessief jagend op witte walvis. Symbolische diepgang.\n• **Walt Whitman** (1819-1892): 'Leaves of Grass' (1855) — vrije vers, vier-letten over Amerika + democratie.\n• **Emily Dickinson** (1830-1886): 1800 korte gedichten over leven, dood, natuur. Pas postuum gepubliceerd.\n• **Mark Twain** (1835-1910): 'The Adventures of Huckleberry Finn' (1884) — eerste echt Amerikaanse roman in vernaculair Engels (geen Brits). Sociaal-kritiek slavernij.\n\n**'Lost Generation'** (1920s):\n• Schrijvers gemarkeerd door WO1 + ontworteling.\n• **F. Scott Fitzgerald** — 'The Great Gatsby' (1925): Jazz Age, American Dream + verval.\n• **Ernest Hemingway** — 'The Sun Also Rises', 'A Farewell to Arms', 'The Old Man and the Sea' (Nobel 1954). Korte, krachtige zinnen.\n• Gertrude Stein, John Dos Passos.\n\n**Southern Gothic + 1930-1960**:\n• **William Faulkner** (1897-1962, Nobel 1949): 'The Sound and the Fury', 'As I Lay Dying'. Stream of consciousness over Mississippi.\n• **Flannery O'Connor**: korte verhalen vol grotesk + religieus.\n• **Harper Lee** — 'To Kill a Mockingbird' (1960): racisme in 1930s Alabama door ogen van kind. Pulitzer.\n\n**Beat Generation** (1950s):\n• Reactie op conformisme jaren 50.\n• **Jack Kerouac** — 'On the Road' (1957).\n• **Allen Ginsberg** — 'Howl'.\n• William S. Burroughs — 'Naked Lunch'.\n\n**Postmodern + Contemporary**:\n• **Toni Morrison** (Nobel 1993, Pulitzer): 'Beloved' (1987) — slavernij en trauma.\n• **John Updike**, **Philip Roth** — joods-Amerikaanse stem.\n• **Cormac McCarthy** — 'No Country for Old Men', 'The Road'.\n• **Don DeLillo** — 'White Noise', 'Underworld'.\n• **Donna Tartt** — 'The Secret History', 'The Goldfinch'.\n• **Jonathan Franzen** — 'The Corrections', 'Freedom'.\n\n**Amerikaanse poëzie**:\n• **T.S. Eliot** (Amerikaans-Brits) — 'The Waste Land' (1922), Nobel 1948.\n• **Robert Frost** — 'The Road Not Taken', 'Stopping by Woods on a Snowy Evening'.\n• **Sylvia Plath** — 'Ariel', 'The Bell Jar' (deels autobiografisch).\n• **Maya Angelou** — 'I Know Why the Caged Bird Sings'.\n\n**Drama**:\n• Tennessee Williams — 'A Streetcar Named Desire' (1947).\n• Arthur Miller — 'Death of a Salesman' (1949), 'The Crucible' (1953).\n• Eugene O'Neill (Nobel 1936).\n\n**Sci-fi + populair**:\n• Ray Bradbury — 'Fahrenheit 451' (1953) — boekverbranding.\n• Philip K. Dick — basis 'Blade Runner', 'Minority Report'.\n• Stephen King — horror-fiction.",
    checks: [
      {
        q: "**'The Great Gatsby'** is geschreven door:",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "Mark Twain"],
        answer: 0,
        wrongHints: [null, "Niet — Hemingway andere stijl.", "Niet — Grapes of Wrath etc.", "Niet — 19e eeuw."],
        uitlegPad: {
          stappen: [
            { titel: "Jazz Age, 1925", tekst: "Fitzgerald (1896-1940) schreef over rijkdom + decadentie van jaren 1920. Jay Gatsby probeert oude liefde terug te krijgen via aanzien + geld → tragedy. Klassiek beeld van American Dream + zijn schaduwzijde. Eindigt met 'So we beat on, boats against the current, borne back ceaselessly into the past.'" },
          ],
          niveaus: { basis: "Fitzgerald. A.", simpeler: "Fitzgerald = Gatsby. A.", nogSimpeler: "Fitzgerald = A." },
        },
      },
      {
        q: "Wie schreef **'Moby Dick'**?",
        options: ["Herman Melville", "Nathaniel Hawthorne", "Edgar Allan Poe", "Walt Whitman"],
        answer: 0,
        wrongHints: [null, "Niet — Scarlet Letter.", "Niet — horror + detective.", "Niet — poëzie."],
        uitlegPad: {
          stappen: [
            { titel: "1851, walvis-obsessie", tekst: "Kapitein Ahab jaagt op witte walvis Moby Dick die zijn been afnam. Symbolisch verhaal over obsessie, hubris, mens vs natuur. Verteld door Ishmael ('Call me Ishmael' — beroemde openingszin). Bij verschijning flop; pas in 20e eeuw als meesterwerk erkend." },
          ],
          niveaus: { basis: "Melville. A.", simpeler: "Melville = Moby Dick. A.", nogSimpeler: "Melville = A." },
        },
      },
      {
        q: "**Toni Morrison** won Nobel Literature in:",
        options: ["1993", "1900", "2020", "Heeft nooit gewonnen"],
        answer: 0,
        wrongHints: [null, "Te vroeg.", "Te recent.", "Wel gewonnen."],
        uitlegPad: {
          stappen: [
            { titel: "Eerste zwarte vrouw Nobel", tekst: "Morrison (1931-2019): meest gevierde Afro-Amerikaanse schrijver. 'Beloved' (1987, Pulitzer + basis Nobel-citation) over voormalig-slaaf vrouw wier dode dochter terugkeert als geest. Trauma-roman. Anderen: 'Song of Solomon', 'Sula'." },
          ],
          niveaus: { basis: "1993. A.", simpeler: "Nobel 1993. A.", nogSimpeler: "1993 = A." },
        },
      },
      {
        q: "**Beat Generation** schrijvers (1950s) reageerden op:",
        options: [
          "Conformisme + materialisme van naoorlogs Amerika",
          "Eerste Wereldoorlog",
          "Slavernij",
          "Vietnam-oorlog"
        ],
        answer: 0,
        wrongHints: [null, "Eerder generatie.", "Eerder eeuw.", "Latere generatie."],
        uitlegPad: {
          stappen: [
            { titel: "On the road, jazz, drugs, oosterse filosofie", tekst: "Kerouac, Ginsberg, Burroughs reageerden op '50s-rust met spontane improvisatie, reizen, drugs-experimenten, oosters denken. 'On the Road' (1957): Kerouac's road-trip met Neal Cassady → manifest van vrijheid + zoektocht. Voorloper van hippy-cultuur." },
          ],
          niveaus: { basis: "Anti-conformisme. A.", simpeler: "Reactie op brave jaren 50. A.", nogSimpeler: "Conformisme = A." },
        },
      },
      {
        q: "**Mark Twain's** Huckleberry Finn (1884) is bijzonder door:",
        options: [
          "Eerste Amerikaanse roman in vernaculair Engels + sociaal-kritiek slavernij",
          "Engelse koloniale stijl",
          "Vol Shakespeare-citaten",
          "Geen plot"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — anti-Brits.", "Wel plot."],
        uitlegPad: {
          stappen: [
            { titel: "Echte Amerikaanse stem", tekst: "Voor Twain: Amerikaanse schrijvers imiteerden Brits Engels. Huck Finn (jong meisje van armoede) spreekt + denkt in DIALECT-Engels van Zuid-VS. Plus: hij vriendschap met weglopen-slaaf Jim → ontmaskert hypocrisie van 'fatsoenlijke' samenleving die slavernij steunde. Hemingway: 'All modern American literature comes from one book... Huckleberry Finn.'" },
          ],
          niveaus: { basis: "Eerste Amerikaans + slavernij-kritiek. A.", simpeler: "Echt Amerikaans + over slavernij. A.", nogSimpeler: "Huck = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — analyse + moderne fictie",
    explanation:
      "**Literaire analyse-strategie** (English exam):\n\n**1. Read carefully**: don't skim. Look for stylistic devices.\n\n**2. Identify**: \n• **Narrative voice**: who tells the story? First person / third person?\n• **Setting**: when + where? Why does it matter?\n• **Plot**: rising action → climax → resolution?\n• **Theme**: what is the universal idea?\n• **Style**: simple/complex sentences, formal/informal register, dialect?\n\n**3. Literary devices to spot**:\n• **Metaphor / simile**.\n• **Imagery**: visual, auditory, tactile.\n• **Symbolism**: recurring object representing larger idea.\n• **Irony**: dramatic, situational, verbal.\n• **Foreshadowing**: hints of what's to come.\n• **Allusion**: reference to other text/event.\n\n**4. Common essay-question types**:\n• 'How does the author convey X?' → focus on technique.\n• 'What is the significance of Y?' → interpret.\n• 'Compare two characters/passages' → contrast.\n\n**Moderne authors worth knowing** (CSE+):\n\n• **Kazuo Ishiguro** (UK-Japans, Nobel 2017): 'Remains of the Day' (oude butler kijkt terug), 'Never Let Me Go' (klonen-dystopie).\n• **Margaret Atwood** (Can): 'Handmaid's Tale' (1985) — vrouwen onderdrukt in religieuze toekomst-staat. Tegenwoordig opnieuw relevant.\n• **Ian McEwan** (UK): 'Atonement', 'On Chesil Beach', 'Saturday'.\n• **Zadie Smith** (UK): 'White Teeth' (2000) — multiculturele Londen.\n• **Salman Rushdie** (UK-Indiër): 'Midnight's Children' (1981, Booker) — onafhankelijkheid India.\n• **Hilary Mantel** (UK): 'Wolf Hall'-trilogie over Henry VIII tijdperk.\n• **Donna Tartt** (US): 'The Secret History' (1992), 'The Goldfinch' (2013, Pulitzer).\n• **Colson Whitehead** (US, Pulitzer × 2): 'The Underground Railroad'.\n• **Sally Rooney** (Ier): 'Normal People' (2018) — millennial-relaties.\n\n**Genres + populair**:\n• **Dystopian YA**: Suzanne Collins 'Hunger Games', Veronica Roth 'Divergent'.\n• **Fantasy**: George R.R. Martin 'Game of Thrones', Brandon Sanderson, Neil Gaiman.\n• **Sci-fi**: Andy Weir 'The Martian', Liu Cixin 'Three-Body Problem' (Chinees, vertaald).\n• **Crime/thriller**: Gillian Flynn 'Gone Girl', Tana French.\n\n**Tip voor essays**: gebruik tekst-citaten ALTIJD met paginanummer. Geen vage statements. 'The author shows X through quote ABC (p. 42)' is sterker dan 'I think X'.",
    checks: [
      {
        q: "Wie schreef **'The Handmaid's Tale'**?",
        options: ["Margaret Atwood", "Toni Morrison", "Zadie Smith", "Donna Tartt"],
        answer: 0,
        wrongHints: [null, "Niet — Beloved.", "Niet — White Teeth.", "Niet — Goldfinch."],
        uitlegPad: {
          stappen: [
            { titel: "Atwood, 1985 (TV 2017)", tekst: "Dystopie waarin VS overgenomen door religieus regime; vruchtbare vrouwen ('handmaids') gedwongen tot baren voor elites. Vandaag herontdekt door politieke ontwikkelingen (Trump-tijdperk, anti-abortion-wetten). TV-serie hits 2017. Vervolg 'The Testaments' (2019, Booker)." },
          ],
          niveaus: { basis: "Atwood. A.", simpeler: "Atwood. A.", nogSimpeler: "Atwood = A." },
        },
      },
      {
        q: "**Symbolism** in literatuur betekent:",
        options: [
          "Object/figuur staat voor groter idee",
          "Letterlijke betekenis",
          "Beschrijving zonder doel",
          "Random toeval"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel betekenis.", "Niet bedoeld."],
        uitlegPad: {
          stappen: [
            { titel: "Verhaal binnen verhaal", tekst: "Voorbeeld: in 'Great Gatsby' is 'green light' aan overkant van baai → symbool voor Gatsby's hoop + onbereikbare droom. Veel groter dan letterlijk lichtje. Auteur gebruikt vaak terugkerende objecten/kleuren als anker." },
          ],
          niveaus: { basis: "Groter idee via object. A.", simpeler: "Iets staat voor iets anders. A.", nogSimpeler: "Symbool = A." },
        },
      },
      {
        q: "**Stream of consciousness** is een techniek van:",
        options: [
          "Gedachten zoals ze opkomen, ongefilterd op papier",
          "Plot in chronologische volgorde",
          "Korte simpele zinnen",
          "Geen verteller"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Wel verteller."],
        uitlegPad: {
          stappen: [
            { titel: "Joyce + Woolf + Faulkner", tekst: "Pogen INTERN bewustzijn van personage weer te geven: associatieve sprongen, herinneringen, halverwege zinnen onderbroken, geen interpunctie soms. Voorbeeld Molly Bloom's monoloog (Ulysses): 40 pagina's één lange zin." },
          ],
          niveaus: { basis: "Ongefilterde gedachten. A.", simpeler: "Gedachtenstroom op papier. A.", nogSimpeler: "Stream = A." },
        },
      },
      {
        q: "**'Foreshadowing'** is:",
        options: [
          "Hints geven over wat later in verhaal gaat gebeuren",
          "Terugblik",
          "Plot-twist",
          "Personage-introductie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — flashback.", "Niet — twist verrast juist.", "Niet specifiek."],
        uitlegPad: {
          stappen: [{ titel: "Vooruitwijzen", tekst: "Auteur plaatst kleine signalen — woord, gebeurtenis, beschrijving — die later betekenis krijgen. Bv. een geweer wordt vroeg getoond in scène (Chekhov's gun): moet later afgaan. Beloont aandachtige lezers." }],
          niveaus: { basis: "Hints geven. A.", simpeler: "Vooruit-signaal. A.", nogSimpeler: "Voorspel = A." },
        },
      },
      {
        q: "Welk **citaat** is uit Hamlet?",
        options: [
          "'To be or not to be, that is the question.'",
          "'Call me Ishmael.'",
          "'It was the best of times, it was the worst of times.'",
          "'In the beginning was the Word.'"
        ],
        answer: 0,
        wrongHints: [null, "Niet — Moby Dick.", "Niet — A Tale of Two Cities.", "Niet — Bijbel."],
        uitlegPad: {
          stappen: [{ titel: "Beroemdste openingsregel monoloog", tekst: "Hamlet, Act 3, Scene 1. Filosofische overpeinzing over leven, dood, betekenis. Wordt vaak parodieerd, gebruikt in films + reclame. Onmiddellijk herkenbaar — toets je geletterdheid via dit citaat." }],
          niveaus: { basis: "Hamlet. A.", simpeler: "To be or not to be = Hamlet. A.", nogSimpeler: "Hamlet = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const engelsLiteratuurHavoVwo = {
  id: "engels-literatuur-havo-vwo",
  title: "Engels Literatuur (HAVO/VWO)",
  emoji: "🇬🇧",
  level: "havo-vwo-4-5",
  subject: "engels",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Engels — Literatuur (CSE-onderwerp)",
  prerequisites: [
    { id: "cse-leesvaardigheid-engels", title: "CSE leesvaardigheid", niveau: "havo-3F" },
  ],
  intro:
    "Engelse Literatuur voor HAVO/VWO eindexamen — perioden van Beowulf tot vandaag, Shakespeare-drama, Victoriaans + modernist roman, Amerikaanse canon, moderne fictie + analyse-technieken. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "Engelse literatuur", "English literature",
    "Beowulf", "Old English",
    "Chaucer", "Canterbury Tales", "Middle English",
    "Shakespeare", "Hamlet", "Macbeth", "Othello", "King Lear", "Romeo and Juliet",
    "Globe Theatre",
    "sonnet", "iambic pentameter",
    "Milton", "Paradise Lost",
    "Jane Austen", "Pride and Prejudice",
    "Charles Dickens", "Oliver Twist", "Great Expectations", "Christmas Carol",
    "Brontë", "Jane Eyre", "Wuthering Heights",
    "Romantic poets", "Wordsworth", "Keats", "Byron", "Shelley",
    "Mary Shelley", "Frankenstein",
    "Thomas Hardy", "Tess",
    "Conrad", "Heart of Darkness",
    "Virginia Woolf", "Mrs Dalloway", "To the Lighthouse",
    "James Joyce", "Ulysses", "Bloomsday",
    "T.S. Eliot", "Waste Land",
    "George Orwell", "1984", "Animal Farm",
    "Tolkien", "Lord of the Rings",
    "Golding", "Lord of the Flies",
    "Edgar Allan Poe", "Raven",
    "Mark Twain", "Huckleberry Finn",
    "Hawthorne", "Scarlet Letter",
    "Melville", "Moby Dick",
    "Whitman", "Leaves of Grass",
    "Emily Dickinson",
    "Fitzgerald", "Great Gatsby",
    "Hemingway", "Old Man and the Sea",
    "Faulkner",
    "Harper Lee", "To Kill a Mockingbird",
    "Beat Generation", "Kerouac", "On the Road",
    "Toni Morrison", "Beloved",
    "Kazuo Ishiguro",
    "Margaret Atwood", "Handmaid's Tale",
    "Ian McEwan", "Zadie Smith",
    "Salman Rushdie",
    "Booker Prize", "Pulitzer", "Nobel Literature",
    "narrative voice", "first person", "third person",
    "stream of consciousness",
    "symbolism", "foreshadowing",
    "metaphor", "imagery",
  ],
  chapters,
  steps,
};

export default engelsLiteratuurHavoVwo;
