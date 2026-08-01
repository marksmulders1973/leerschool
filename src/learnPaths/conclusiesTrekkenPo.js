// Leerpad: Conclusies trekken — lezen tussen de regels (inferentie) voor groep 7-8.
// De moeilijkste Doorstroomtoets-vraagvorm: "Wat kun je uit de tekst afleiden?",
// "Waarom doet X dat waarschijnlijk?", "Hoe voelt Y zich?".
// Kern: aanwijzingen in de tekst verzamelen + eigen kennis = conclusie die je
// kunt ONDERBOUWEN. Een conclusie die "logisch klinkt" maar nergens op steunt is fout.
//
// 4 stappen, 18 checks totaal (4 + 4 + 5 + 5). Alle teksten zijn eigen werk.

const stepEmojis = ["🔍", "💭", "⚖️", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een conclusie?", emoji: "🔍", from: 0, to: 0 },
  { letter: "B", title: "Gevoelens en bedoelingen afleiden", emoji: "💭", from: 1, to: 1 },
  { letter: "C", title: "Onderbouwd of een gok?", emoji: "⚖️", from: 2, to: 2 },
  { letter: "D", title: "Doorstroomtoets-mix", emoji: "🏆", from: 3, to: 3 },
];

// ── Tekst stap 2: verhalend, kind dat verhuist ─────────────────────
const tekstNoor = `**De lege kamer**

Noor stond in de deuropening van haar slaapkamer. De muren waren kaal, de dozen stonden al in de gang. Alleen de lichte plekken op het behang lieten zien waar haar posters hadden gehangen. Ze slikte een paar keer en streek met haar hand over de vensterbank.

"Kom je?" riep papa vrolijk vanaf de trap. "In het nieuwe huis krijg je een kamer die twee keer zo groot is!" Noor gaf geen antwoord. Ze pakte een kiezelsteentje van de vensterbank — dat had ze ooit samen met haar beste vriendin Sara in de tuin gevonden — en stopte het diep in haar jaszak.

In de auto keek ze net zo lang naar haar oude straat tot die achter de bocht verdween. Papa zette muziek op en zong veel harder mee dan anders.

Bij het nieuwe huis stond een meisje van haar leeftijd over het hek geleund. Ze stak haar hand op. Noor aarzelde even. Toen zwaaide ze terug, en ze merkte dat haar wangen daarbij een klein beetje warm werden.`;

// ── Tekst stap 4: informatief, mussen in de wijk ───────────────────
const tekstMussen = `**Waar zijn de mussen gebleven?**

Vroeger hoorde je ze overal: tsjilpende huismussen op elk dak en in elke heg. Tegenwoordig moet je in veel wijken goed zoeken om er nog één te zien. Tellers van een vogelwerkgroep noteerden dit voorjaar in de nieuwbouwwijk Zonnehof maar drie mussen. In de oude wijk ernaast, met precies evenveel huizen, telden ze er zesenveertig.

Wie door Zonnehof loopt, ziet strakke tuinen met tegels en hoge schuttingen. Heggen en rommelige struiken, waar mussen graag in wegduiken voor katten en sperwers, zijn er nauwelijks. De moderne daken zitten bovendien potdicht: nergens een kier waar een mus haar nest in kan bouwen.

In de oude wijk staan overgroeide heggen en hebben veel daken losse dakpannen. Bewoners strooien er ook vaker oud brood in de tuin.

De vogelwerkgroep deelt daarom gratis nestkasten uit in Zonnehof en geeft tips voor groenere tuinen. "We hopen dat de bewoners meedoen," zegt teller Ruud Blom. "Anders vrees ik dat we hier over vijf jaar helemaal geen mussen meer tellen."`;

const steps = [
  // ── Stap 1 ──────────────────────────────────────────────────────
  {
    title: "Wat is een conclusie?",
    explanation: `Soms staat het belangrijkste **niet letterlijk in de tekst**. De schrijver geeft **aanwijzingen**, en jij plakt ze aan elkaar. Dat aan elkaar plakken heet een **conclusie trekken** — ook wel *lezen tussen de regels*.

Zo werkt het:

**Aanwijzing + aanwijzing = conclusie.**

Voorbeeld: je broer komt binnen met een kletsnatte jas (aanwijzing 1). Door het raam zie je druppels langs het glas lopen (aanwijzing 2). Nergens staat het woord "regen" — maar jij weet het zeker: **het regent**. Dat is een conclusie.

Nog eentje: op tafel ligt een leeg bord met kruimels, en de boterhamzak is open. Conclusie: hier heeft net iemand gegeten.

Bij een conclusie gebruik je twee dingen:
1. **Aanwijzingen uit de tekst** — woorden en zinnen die iets verklappen.
2. **Je eigen kennis** — jij weet dat regen dingen nat maakt.

Belangrijk: een goede conclusie kun je altijd **onderbouwen**. Dat betekent: je kunt aanwijzen wélke zinnen je op het spoor zetten. Kun je dat niet, dan is het geen conclusie maar een gok.

In deze stap oefen je met korte situaties. Vraag jezelf steeds: *welke aanwijzingen zie ik, en waar wijzen ze samen naartoe?*`,
    checks: [
      {
        q: "Bram komt binnen met een kletsnatte jas. Door het raam zie je druppels tegen het glas tikken. Welke conclusie past het best?",
        options: [
          "Het regent buiten",
          "Bram is in de sloot gevallen",
          "Iemand heeft een emmer water over Bram gegooid",
          "Bram heeft met zijn jas aan gedoucht",
        ],
        answer: 0,
        evidence: "Kletsnatte jas + druppels die tegen het glas tikken.",
        wrongHints: [
          null,
          "Zou kunnen — maar verklaart een sloot óók de druppels op het raam? Combineer beide aanwijzingen.",
          "Welke aanwijzing zou dan de natte ruit verklaren?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Verzamel de aanwijzingen", tekst: "Aanwijzing 1: Brams jas is kletsnat. Aanwijzing 2: er tikken druppels tegen het raam. Twee losse feitjes." },
            { titel: "Wat verklaart ALLEBEI?", tekst: "Een goede conclusie verklaart álle aanwijzingen tegelijk. Een sloot verklaart de jas, maar niet het raam. Wat maakt de jas én de ruit nat?" },
            { titel: "Onderbouw je keuze", tekst: "Regen verklaart beide aanwijzingen in één keer. Daarom is dat de sterkste conclusie — je kunt hem onderbouwen met twee zinnen." },
          ],
          woorden: [
            { woord: "conclusie", uitleg: "Iets dat je zelf bedenkt uit aanwijzingen — het staat niet letterlijk in de tekst." },
            { woord: "aanwijzing", uitleg: "Een woord of zin die iets verklapt, zoals een spoor voor een speurneus." },
            { woord: "onderbouwen", uitleg: "Laten zien met wélke aanwijzingen je je conclusie kunt bewijzen." },
          ],
          theorie: "**De speurneus-regel:**\n\n1. Verzamel ALLE aanwijzingen (niet maar één).\n2. Zoek de verklaring die bij ALLE aanwijzingen past.\n3. Check: kan ik elke aanwijzing aanwijzen die mijn conclusie steunt?\n\nEen conclusie die maar bij één aanwijzing past, is zwak. Een conclusie die bij alle aanwijzingen past, is sterk.",
          voorbeelden: [
            { type: "sterk", tekst: "Natte jas + natte ruit → regen verklaart allebei. Sterke conclusie." },
            { type: "zwak", tekst: "Natte jas → 'in de sloot gevallen' verklaart de jas, maar niet het raam. Zwakke conclusie." },
          ],
          basiskennis: [
            { onderwerp: "Meerdere aanwijzingen tellen", uitleg: "Hoe meer aanwijzingen jouw conclusie steunen, hoe zekerder je mag zijn." },
          ],
          niveaus: {
            basis: "Zoek de verklaring die de natte jas én de natte ruit tegelijk verklaart.",
            simpeler: "Er zijn twee aanwijzingen: de jas is nat en het raam is nat. Bedenk per antwoord: verklaart dit allebei de aanwijzingen? Alleen één antwoord doet dat.",
            nogSimpeler: "Wat maakt de jas én het raam allebei nat?",
          },
        },
      },
      {
        q: "Wat is een conclusie bij het lezen?",
        options: [
          "Iets dat niet letterlijk in de tekst staat, maar dat je afleidt uit aanwijzingen",
          "De laatste zin van een tekst",
          "De mening van de schrijver",
          "Een opsomming van alle feiten uit de tekst",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een slot-zin kán een conclusie bevatten, maar dat is niet wat conclusie trekken bij lezen betekent. Wat doe jíj als lezer?",
          "Een mening is wat iemand vindt. Wat doe jij met aanwijzingen in de tekst?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Letterlijk of afleiden?", tekst: "Sommige antwoorden kun je aanwijzen in de tekst (letterlijk). Andere moet je zelf bedenken uit aanwijzingen (afleiden). Conclusie trekken hoort bij de tweede soort." },
            { titel: "Wat doe je precies?", tekst: "Je pakt aanwijzingen uit de tekst, gebruikt je eigen kennis, en plakt dat samen tot iets nieuws dat er niet letterlijk staat." },
            { titel: "Verwar het niet", tekst: "Een samenvatting herhaalt wat er staat. Een mening is wat iemand vindt. Een conclusie is wat jij ontdekt tussen de regels." },
          ],
          woorden: [
            { woord: "afleiden", uitleg: "Zelf bedenken wat de tekst bedoelt, met aanwijzingen als bewijs." },
            { woord: "letterlijk", uitleg: "Precies zo opgeschreven in de tekst — je kunt de zin aanwijzen." },
            { woord: "inferentie", uitleg: "Het moeilijke woord voor afleiden. Op de toets vaak: 'Wat kun je uit de tekst afleiden?'" },
          ],
          theorie: "**Drie soorten leesvragen:**\n\n| Soort | Wat doe je? |\n|---|---|\n| Letterlijk | Zoeken — het staat er woord voor woord |\n| Conclusie (afleiden) | Aanwijzingen combineren tot iets dat er níét staat |\n| Mening | Herkennen wat de schrijver vindt |\n\nOp de Doorstroomtoets herken je conclusie-vragen aan: 'Wat kun je afleiden?', 'Waarom doet ... dat waarschijnlijk?', 'Hoe voelt ... zich?'",
          voorbeelden: [
            { type: "letterlijk", tekst: "'Hoeveel mussen telden ze?' — het getal staat in de tekst. Zoeken dus." },
            { type: "afleiden", tekst: "'Waarom is de hoofdpersoon stil?' — dat staat er niet, maar de aanwijzingen (slikken, wegkijken) vertellen het." },
          ],
          basiskennis: [
            { onderwerp: "Herken het vraagtype eerst", uitleg: "Weet je wat voor vraag het is, dan weet je ook wat je moet doen: zoeken of afleiden." },
          ],
          niveaus: {
            basis: "Conclusie trekken = combineren van aanwijzingen tot iets dat er niet letterlijk staat.",
            simpeler: "Denk aan het regen-voorbeeld: nergens stond het woord 'regen', maar jij wist het door de natte jas en de natte ruit. Welk antwoord beschrijft precies dát?",
            nogSimpeler: "Stond 'het regent' letterlijk in het voorbeeld — of bedacht jij dat zelf?",
          },
        },
      },
      {
        q: "Fatima is gisteravond pas heel laat naar bed gegaan. In de les gaapt ze steeds en wrijft ze in haar ogen. Welke conclusie kun je trekken?",
        options: [
          "Fatima is moe",
          "Fatima vindt de les saai",
          "Fatima is verkouden",
          "Fatima heeft honger",
        ],
        answer: 0,
        evidence: "Gisteravond pas heel laat naar bed + gaapt steeds + wrijft in haar ogen.",
        wrongHints: [
          null,
          "Van gapen alléén zou je dat kunnen denken — maar welke aanwijzing over gisteravond vergeet je dan?",
          "Bij welke aanwijzing zou verkoudheid passen? Niezen of hoesten staat er niet.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Verzamel de aanwijzingen", tekst: "Er zijn er drie: laat naar bed, gapen, in ogen wrijven. Tel ze altijd eerst allemaal." },
            { titel: "Waar wijzen ze samen heen?", tekst: "Elke aanwijzing apart kan meerdere dingen betekenen. Maar alle drie samen wijzen dezelfde kant op: te weinig slaap." },
            { titel: "Toets de verleiders", tekst: "'Saaie les' past misschien bij gapen — maar verklaart niet waarom het laat-naar-bed-detail in de tekst staat. Een schrijver zet zo'n aanwijzing er niet voor niets in." },
          ],
          woorden: [
            { woord: "verleider", uitleg: "Een antwoord dat logisch klínkt, maar niet door de aanwijzingen wordt gesteund." },
          ],
          theorie: "**Waarom noemt de schrijver dat detail?**\n\nSchrijvers kiezen hun aanwijzingen expres. Als er staat dat Fatima laat naar bed ging, wil de schrijver dat jij dat meeneemt in je conclusie.\n\nToets-truc: het juiste antwoord gebruikt de mééste aanwijzingen. Een fout antwoord past vaak maar bij één aanwijzing — of bij nul.",
          voorbeelden: [
            { type: "combineren", tekst: "Laat naar bed (oorzaak) + gapen + ogen wrijven (gevolgen) → alles past bij hetzelfde." },
            { type: "verleider", tekst: "'Saaie les' past alleen bij het gapen. De andere twee aanwijzingen laat je dan liggen. Te zwak." },
          ],
          basiskennis: [
            { onderwerp: "Oorzaak zoeken", uitleg: "Vraag jezelf: wat is er eerder gebeurd waardoor dit nu logisch is? Dat is vaak de sleutel-aanwijzing." },
          ],
          niveaus: {
            basis: "Drie aanwijzingen, één verklaring: laat naar bed + gapen + ogen wrijven.",
            simpeler: "Wat gebeurt er met jou als je veel te laat naar bed gaat? Kijk dan of de aanwijzingen in de les daarbij passen.",
            nogSimpeler: "Wat voel je de dag nadat je veel te laat opbleef?",
          },
        },
      },
      {
        q: "Lisa pakt haar paraplu, trekt haar regenjas aan en kijkt bezorgd naar buiten. Welke conclusie kun je trekken?",
        options: [
          "Het regent of Lisa verwacht regen",
          "Lisa gaat naar het zwembad",
          "Lisa heeft het koud in huis",
          "Lisa oefent met een toneelstuk",
        ],
        answer: 0,
        evidence: "Paraplu + regenjas + bezorgd naar buiten kijken.",
        wrongHints: [
          null,
          "Bij een zwembad heb je geen paraplu nodig — of juist wél? En wat doet een regenjas bij een zwembad?",
          "Welke aanwijzing wijst op kou binnenshuis? Kijk naar wáár ze naartoe kijkt.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Verzamel de aanwijzingen", tekst: "Paraplu = bescherming tegen regen. Regenjas = bescherming tegen regen. Bezorgd naar buiten kijken = ze ziet of verwacht iets buiten. Alle drie gaan over hetzelfde." },
            { titel: "Combineer ze", tekst: "Alle drie de aanwijzingen hebben te maken met beschermen tegen regen. Er is maar één logische conclusie die bij alle drie past." },
            { titel: "Kies voorzichtig", tekst: "Je weet dat ze regen verwacht — maar je weet niet zeker of het al regent. Kies het antwoord dat beide mogelijkheden dekt." },
          ],
          niveaus: {
            basis: "Paraplu + regenjas + naar buiten kijken: voor welk weer beschermen mensen zichzelf zo?",
            simpeler: "Wanneer pak jij een paraplu? En voor welk weer heb je een regenjas nodig?",
            nogSimpeler: "Waarvoor is een paraplu?",
          },
        },
      },
      {
        q: "Aanwijzing 1: de hond staat kwispelend bij de voordeur. Aanwijzing 2: hij heeft zijn riem in zijn bek. Wat is de beste conclusie?",
        options: [
          "De hond wil naar buiten voor een wandeling",
          "De hond heeft honger",
          "De hond is bang voor de deur",
          "De hond wil de riem kapotbijten",
        ],
        answer: 0,
        evidence: "Kwispelend bij de voordeur + riem in zijn bek.",
        wrongHints: [
          null,
          "Waar zou een hongerige hond gaan staan — bij de deur of ergens anders? En waarom dan die riem?",
          "Wat vertelt kwispelen over hoe de hond zich voelt?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent elke aanwijzing?", tekst: "Kwispelen = de hond is blij of heeft ergens zin in. Bij de deur staan = hij wil erdoorheen. Riem in bek = hij denkt aan iets waar de riem bij hoort." },
            { titel: "Eigen kennis erbij", tekst: "Jij weet: een riem gebruik je bij het uitlaten. Die kennis mag je gebruiken — dat hoort bij conclusies trekken." },
            { titel: "Plak samen", tekst: "Blij + bij de deur + riem = de hond wil uitgelaten worden. Alle aanwijzingen passen." },
          ],
          woorden: [
            { woord: "eigen kennis", uitleg: "Wat jij al weet van de wereld. Die gebruik je samen met de aanwijzingen uit de tekst." },
          ],
          theorie: "**Conclusie = tekst + wereld.**\n\nEen conclusie steunt op twee poten:\n1. Aanwijzingen uit de tekst (kwispelen, deur, riem).\n2. Wat jij weet van de wereld (riem hoort bij wandelen).\n\nMist één poot, dan valt de conclusie om. Alleen eigen kennis zonder aanwijzingen = gokken. Alleen aanwijzingen zonder nadenken = niets snappen.",
          voorbeelden: [
            { type: "twee poten", tekst: "Tekst: 'riem in bek'. Wereld: 'riem = wandelen'. Samen: hij wil wandelen." },
          ],
          basiskennis: [
            { onderwerp: "Dieren-signalen", uitleg: "Kwispelen bij honden betekent meestal blijdschap of opwinding — handige wereldkennis bij verhalen met dieren." },
          ],
          niveaus: {
            basis: "Kwispelen + deur + riem: gebruik je eigen kennis over waar een riem voor is.",
            simpeler: "Stel dat jouw hond dit doet. Wat komt hij je duidelijk maken? Denk aan waar je een riem voor gebruikt.",
            nogSimpeler: "Wanneer pak jij de riem van een hond?",
          },
        },
      },
    ],
  },

  // ── Stap 2 ──────────────────────────────────────────────────────
  {
    title: "Gevoelens en bedoelingen afleiden",
    explanation: tekstNoor + "\n\n*In verhalen staat bijna nooit letterlijk hoe iemand zich voelt. De schrijver laat het zíén: slikken, aarzelen, wegkijken. Beantwoord de 4 vragen — zoek steeds de aanwijzingen waaruit het blijkt.*",
    checks: [
      {
        q: "Hoe voelt Noor zich als ze in haar lege kamer staat?",
        options: [
          "Verdrietig, omdat ze afscheid moet nemen",
          "Blij, omdat ze een grotere kamer krijgt",
          "Boos op haar vader",
          "Bang voor het nieuwe huis",
        ],
        answer: 0,
        evidence: "Ze slikte een paar keer en streek met haar hand over de vensterbank.",
        wrongHints: [
          null,
          "Dat zegt papa — maar let op wat Noor dóét. Reageert ze blij op zijn woorden?",
          "Ze geeft geen antwoord, dat klopt. Maar past slikken en over de vensterbank strijken bij boosheid?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Gevoelens zie je aan gedrag", tekst: "De schrijver schrijft niet 'Noor is verdrietig'. Hij laat het zien: ze slikt een paar keer, ze aait bijna over de vensterbank. Dat gedrag is jouw aanwijzing." },
            { titel: "Wat betekent slikken?", tekst: "Een paar keer slikken doe je vaak als je een brok in je keel hebt — als je bijna moet huilen. Eigen kennis over gevoelens mag je gebruiken." },
            { titel: "Check de situatie", tekst: "Ze verlaat haar kamer voorgoed en kijkt naar de plekken van haar posters. Afscheid nemen van iets vertrouwds — past dat bij blij of bij verdrietig?" },
          ],
          woorden: [
            { woord: "gevoelens afleiden", uitleg: "Uit gedrag opmaken hoe iemand zich voelt, ook al staat het er niet." },
            { woord: "een brok in je keel", uitleg: "Het gevoel dat je keel dik wordt als je verdrietig bent en bijna huilt." },
          ],
          theorie: "**Laten zien, niet zeggen.**\n\nGoede schrijvers zeggen zelden 'hij was bang' of 'zij was blij'. Ze laten het lichaam spreken:\n• slikken, brok in keel → verdriet\n• stralende ogen, huppelen → blijdschap\n• trillende handen, wegduiken → angst\n• stampen, rood hoofd → boosheid\n\nOp de Doorstroomtoets: zoek bij 'hoe voelt ...?' altijd eerst wat het personage DOET.",
          voorbeelden: [
            { type: "gedrag", tekst: "'Ze slikte een paar keer' → moeite met afscheid, verdriet." },
            { type: "gedrag", tekst: "'Ze streek over de vensterbank' → een soort afscheid nemen van iets waar ze aan gehecht is." },
          ],
          basiskennis: [
            { onderwerp: "Meerdere gevoelens kunnen tegelijk", uitleg: "Iemand kan verdrietig zijn én stiekem ook nieuwsgierig. Kies het gevoel waar de meeste aanwijzingen op wijzen." },
          ],
          niveaus: {
            basis: "Kijk wat Noor doet in de kamer: slikken en over de vensterbank strijken. Welk gevoel hoort daarbij?",
            simpeler: "Stel je voor dat jij voor het laatst in je eigen kamer staat en alles is leeg. Je slikt een paar keer. Welk gevoel heb jij dan?",
            nogSimpeler: "Waarom moet iemand een paar keer slikken zonder eten in de mond?",
          },
        },
      },
      {
        q: "Waarom stopt Noor het kiezelsteentje waarschijnlijk in haar jaszak?",
        options: [
          "Ze wil een herinnering aan haar oude huis en haar vriendin meenemen",
          "Ze spaart bijzondere stenen",
          "Ze wil het steentje aan het nieuwe meisje geven",
          "Papa had gevraagd of ze de vensterbank leeg wilde maken",
        ],
        answer: 0,
        evidence: "Dat had ze ooit samen met haar beste vriendin Sara in de tuin gevonden — en stopte het diep in haar jaszak.",
        wrongHints: [
          null,
          "Klinkt logisch — maar staat er ergens iets over sparen? Kijk wat de tekst wél over het steentje vertelt.",
          "Het nieuwe meisje komt pas later in het verhaal. Wat wist Noor op dit moment al?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het detail over het steentje", tekst: "Tussen de streepjes staat een extra stukje informatie: ze vond het steentje ooit samen met haar beste vriendin Sara. Dat detail staat er niet voor niets." },
            { titel: "Waarom 'diep' in haar zak?", tekst: "Ze stopt het niet zomaar weg, maar 'diep' in haar jaszak — alsof ze het niet wil verliezen. Dat verklapt dat het steentje kostbaar voor haar is." },
            { titel: "Trek de conclusie", tekst: "Kostbaar steentje + herinnering aan vriendin + ze gaat weg = ze neemt een stukje van haar oude leven mee." },
          ],
          woorden: [
            { woord: "bedoeling afleiden", uitleg: "Bedenken waaróm iemand iets doet, uit aanwijzingen — het staat er nooit letterlijk." },
            { woord: "kostbaar", uitleg: "Heel waardevol voor iemand — niet per se duur, wel belangrijk." },
          ],
          theorie: "**'Waarom doet ... dat waarschijnlijk?' — zo pak je het aan:**\n\n1. Zoek wat de tekst over het voorwerp of de handeling vertelt (hier: gevonden met Sara).\n2. Kijk hóé het gebeurt (diep wegstoppen = zuinig op zijn).\n3. Kijk naar de situatie (ze gaat voorgoed weg).\n4. De bedoeling is wat al die aanwijzingen samen logisch maakt.\n\nLet op het woord 'waarschijnlijk' in zulke vragen: je hoeft het niet zeker te weten, maar je conclusie moet wel op de tekst steunen.",
          voorbeelden: [
            { type: "detail", tekst: "De schrijver had ook 'een steentje' kunnen schrijven. Hij koos ervoor Sara te noemen — dus dat detail is belangrijk voor het waarom." },
          ],
          basiskennis: [
            { onderwerp: "Details tussen streepjes of komma's", uitleg: "Extra informatie tussen streepjes lijkt bijzaak, maar is bij toetsvragen vaak juist de sleutel." },
          ],
          niveaus: {
            basis: "Het steentje hoort bij Sara en het oude huis. Noor gaat weg. Waarom neemt ze het dan mee?",
            simpeler: "Jij gaat voorgoed verhuizen en mag één klein dingetje uit de tuin meenemen dat je aan je beste vriend doet denken. Waarom zou je dat doen?",
            nogSimpeler: "Wat wil je vasthouden als je iets liefs moet achterlaten?",
          },
        },
      },
      {
        q: "Papa zingt in de auto 'veel harder mee dan anders'. Waarom doet hij dat waarschijnlijk?",
        options: [
          "Hij probeert de stemming vrolijk te maken",
          "Het is toevallig zijn lievelingsliedje",
          "Hij is boos op Noor omdat ze niet antwoordde",
          "Hij kan Noor anders niet verstaan",
        ],
        answer: 0,
        evidence: "'Kom je?' riep papa vrolijk vanaf de trap. 'In het nieuwe huis krijg je een kamer die twee keer zo groot is!' — Papa zette muziek op en zong veel harder mee dan anders.",
        wrongHints: [
          null,
          "Zou kunnen — maar staat daar iets over in de tekst? Let op de woorden 'dan anders' en op wat papa eerder al deed.",
          null,
          "Noor zegt juist helemaal niets in de auto. Wat probeert papa met al die vrolijkheid?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het patroon", tekst: "Papa doet twee keer iets vrolijks: eerst roept hij enthousiast over de grote nieuwe kamer, daarna zingt hij extra hard. Twee aanwijzingen die dezelfde kant op wijzen." },
            { titel: "Let op 'dan anders'", tekst: "'Harder dan anders' betekent: dit is niet zijn gewone gedrag. Als iemand zich anders gedraagt dan normaal, heeft dat een reden — en die reden is jouw conclusie." },
            { titel: "Kijk naar de situatie", tekst: "Noor is stil en verdrietig, het is een moeilijke dag. Papa's over-vrolijkheid past bij iemand die de sfeer wil oppeppen." },
          ],
          woorden: [
            { woord: "patroon", uitleg: "Hetzelfde gedrag dat vaker terugkomt. Een patroon is een extra sterke aanwijzing." },
            { woord: "sfeer", uitleg: "De stemming die ergens hangt: gezellig, gespannen, verdrietig." },
          ],
          theorie: "**Gedrag dat afwijkt = aanwijzing.**\n\nWoorden als 'anders dan anders', 'opeens', 'veel harder', 'nog nooit' zijn seinlampjes van de schrijver: hier gebeurt iets bijzonders, denk na over het waarom.\n\nBij volwassenen in verhalen geldt vaak: overdreven vrolijk doen op een verdrietig moment = de ander willen opvrolijken of eigen gevoel verstoppen.",
          voorbeelden: [
            { type: "seinlampje", tekst: "'Ze lachte harder dan nodig was' → de lach is niet echt; ze verbergt iets." },
            { type: "patroon", tekst: "Papa: vrolijk roepen + grote kamer beloven + hard meezingen. Drie keer opbeuren — dat is zijn bedoeling." },
          ],
          basiskennis: [
            { onderwerp: "Toets alle opties aan de tekst", uitleg: "Ook als een optie zou kúnnen (lievelingsliedje), wint de optie waar de tekst aanwijzingen voor geeft." },
          ],
          niveaus: {
            basis: "Papa is al de hele dag extra vrolijk terwijl Noor stil is. Wat wil hij daarmee bereiken?",
            simpeler: "Je vriendin is verdrietig en jij begint extra gekke, vrolijke dingen te doen. Waarom doe je dat? Papa doet hetzelfde.",
            nogSimpeler: "Wat probeer jij als iemand naast je stilletjes verdrietig is?",
          },
        },
      },
      {
        q: "Noor pakt het kiezelsteentje van de vensterbank en stopt het 'diep' in haar jaszak. Waarom benadrukt de schrijver het woord 'diep'?",
        options: [
          "Om te laten zien dat Noor het steentje goed wil bewaren en niet wil verliezen",
          "Omdat haar jaszak bijzonder diep is",
          "Om duidelijk te maken dat het steentje zwaar is",
          "Omdat papa gezegd had dat ze de vensterbank leeg moest maken",
        ],
        answer: 0,
        evidence: "stopte het diep in haar jaszak",
        wrongHints: [
          null,
          "Gaat het om de maat van de zak — of om wat Noor met het steentje wil?",
          "Staat er iets over het gewicht van het steentje? Zoek een aanwijzing over haar gevoel voor het steentje.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar het woord 'diep'", tekst: "Schrijvers kiezen woorden niet zomaar. 'Diep' wegstoppen is anders dan gewoon in je zak doen — het zegt iets over hoe voorzichtig en zuinig Noor ermee omgaat." },
            { titel: "Combineer met de context", tekst: "Het steentje herinnert haar aan Sara en haar oude huis. Ze verlaat alles voor altijd. 'Diep' wegstoppen betekent: ze wil het niet kwijtraken." },
            { titel: "Trek de conclusie", tekst: "Diep wegstoppen = zo veilig mogelijk bewaren = ze hecht er veel waarde aan. De schrijver gebruikt dat ene woordje om een groot gevoel te laten zien." },
          ],
          niveaus: {
            basis: "Waarom stop je iets 'diep' weg in plaats van gewoon in je zak?",
            simpeler: "Stel je hebt iets heel kostbaars bij je. Hoe zorg je dat je het niet verliest?",
            nogSimpeler: "Als je iets niet wilt kwijtraken, hoe stop je het dan weg?",
          },
        },
      },
      {
        q: "Noor geeft geen antwoord als papa vrolijk roept dat ze een grotere kamer krijgt. Wat kun je hieruit afleiden?",
        options: [
          "De grootte van de nieuwe kamer troost Noor nu niet",
          "Noor heeft papa niet gehoord",
          "Noor is boos op papa",
          "Noor vindt de nieuwe kamer te klein",
        ],
        answer: 0,
        evidence: "Noor gaf geen antwoord.",
        wrongHints: [
          null,
          "Ze stond erbij toen papa riep — maar ze zei niets terug. Wat betekent stilzwijgen hier?",
          "Past boosheid bij slikken en over de vensterbank strijken? Kijk naar alle aanwijzingen samen.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat vertelt 'geen antwoord'?", tekst: "Geen antwoord geven is zelf een keuze of een gevoel. Als papa enthousiast is en Noor zegt niets, dan raakt zijn enthousiasme haar niet." },
            { titel: "Waarom niet?", tekst: "Ze is verdrietig om haar oude huis. Een grotere kamer helpt haar op dit moment niet — haar verdriet is nu groter dan het vooruitzicht van iets nieuws." },
            { titel: "Voorzichtige conclusie", tekst: "Ze is niet noodzakelijk boos — ze is eerder verdrietig. De troost werkt nu niet. Dat is het voorzichtigste en best-onderbouwde antwoord." },
          ],
          niveaus: {
            basis: "Papa biedt troost aan door over de nieuwe kamer te praten. Waarom werkt dat nu niet voor Noor?",
            simpeler: "Stel je hebt net afscheid genomen van iets liefs. Je vriendin zegt: 'maar je krijgt iets nieuws!'. Voel jij je dan meteen beter?",
            nogSimpeler: "Helpt een belofte van iets leuks altijd als je verdrietig bent?",
          },
        },
      },
      {
        q: "Noor aarzelt, zwaait dan terug naar het meisje, en haar wangen worden 'een klein beetje warm'. Wat kun je hieruit afleiden over hoe ze zich op dat moment voelt?",
        options: [
          "Ze is verlegen, maar er is ook een sprankje hoop",
          "Ze is woedend dat er iemand bij het hek staat",
          "Het interesseert haar helemaal niets",
          "Ze is nog precies even verdrietig als in haar oude kamer",
        ],
        answer: 0,
        evidence: "Noor aarzelde even. Toen zwaaide ze terug, en ze merkte dat haar wangen daarbij een klein beetje warm werden.",
        wrongHints: [
          null,
          null,
          "Iemand die nergens om geeft, zwaait niet terug. Wat betekent het dat ze het wél doet?",
          "Vergelijk het begin en het einde: is er iets veranderd? Let op het terugzwaaien.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Drie kleine aanwijzingen", tekst: "Aarzelen = het spannend vinden. Toch terugzwaaien = het tóch aandurven. Warme wangen = verlegen zijn, een blos." },
            { titel: "Vergelijk met het begin", tekst: "In haar oude kamer slikte Noor haar tranen weg. Nu doet ze iets kleins richting een nieuw iemand. Het verdriet is er vast nog, maar er komt iets bij." },
            { titel: "Benoem het gevoel", tekst: "Spannend vinden + toch doen + blozen = verlegen, met een voorzichtig beetje hoop op iets nieuws. Zo eindigen veel verhalen: met een klein lichtpuntje." },
          ],
          woorden: [
            { woord: "blozen", uitleg: "Warme, rode wangen krijgen — vaak van verlegenheid." },
            { woord: "sprankje hoop", uitleg: "Een heel klein beetje hoop, als een vonkje." },
          ],
          theorie: "**Het einde van een verhaal is vaak een gevoels-vraag.**\n\nSchrijvers laten een gevoel veranderen: van verdriet naar hoop, van angst naar moed. Toets-tip bij 'hoe voelt ... zich aan het eind?':\n\n1. Wat voelde het personage aan het begin?\n2. Welke kleine handeling doet het personage aan het eind?\n3. Wat zegt die handeling over een nieuw gevoel?\n\nEén klein gebaar (terugzwaaien) kan een grote verandering laten zien.",
          voorbeelden: [
            { type: "verandering", tekst: "Begin: slikken, stil zijn, lang omkijken. Eind: aarzelen maar tóch zwaaien. Er is iets ten goede aan het schuiven." },
          ],
          basiskennis: [
            { onderwerp: "Gemengde gevoelens", uitleg: "Verdriet om het oude en hoop op het nieuwe kunnen tegelijk bestaan. Het beste antwoord vangt allebei of het nieuwste gevoel." },
          ],
          niveaus: {
            basis: "Aarzelen + toch zwaaien + warme wangen — welk gevoel past bij alle drie?",
            simpeler: "Een onbekend kind zwaait naar jou. Je twijfelt even, zwaait dan toch en voelt je wangen gloeien. Ben je dan boos, of iets heel anders?",
            nogSimpeler: "Wat voel je als iets spannend is maar je doet het toch?",
          },
        },
      },
    ],
  },

  // ── Stap 3 ──────────────────────────────────────────────────────
  {
    title: "Onderbouwd of een gok?",
    explanation: `Hier zit het grote gevaar van conclusie-vragen: een antwoord kan **heel logisch klinken** en tóch fout zijn. Hoe kan dat?

Een **onderbouwde conclusie** steunt op aanwijzingen die je kunt áánwijzen in de tekst. Een **gok** (of aanname) steunt alleen op wat jij dénkt dat er waar zou kunnen zijn.

Voorbeeld. In een verhaal heeft Sem een pleister op zijn knie. Jij denkt misschien meteen: *hij is van zijn fiets gevallen!* Klinkt logisch — kinderen vallen vaak van de fiets. Maar staat er iets over een fiets? Nee. Misschien is hij gestruikeld, of tegen een tafel gebotst. Je wéét alleen: hij heeft iets aan zijn knie gehad. Meer mag je niet concluderen.

De toetsmakers weten dit en zetten er expres antwoorden tussen die **aannemelijk klinken maar nergens op steunen**. Zo test je jezelf:

1. **Wijs-test**: kan ik de zin(nen) aanwijzen die mijn conclusie steunen? Nee → gok.
2. **Te-ver-test**: zegt mijn conclusie méér dan de aanwijzingen? Dan ga ik te ver.
3. **Zou-kunnen is niet genoeg**: "het zou kunnen" is geen bewijs.

Kies bij twijfel altijd de **voorzichtigste** conclusie die alle aanwijzingen gebruikt.`,
    checks: [
      {
        q: "Op het schoolplein liggen omgevallen vuilnisbakken en overal takken. De vlag hangt scheef aan de mast. Welke conclusie is ONDERBOUWD?",
        options: [
          "Het heeft flink gestormd",
          "Vandalen hebben het plein vernield",
          "De conciërge heeft zijn werk niet gedaan",
          "Er was gisteren een schoolfeest",
        ],
        answer: 0,
        evidence: "Omgevallen vuilnisbakken + overal takken + scheve vlag.",
        wrongHints: [
          null,
          "Verklaart dat ook de takken die overal liggen? Waar komen takken vandaan?",
          null,
          "Welke aanwijzing wijst op een feest? Zoek bewijs voordat je kiest.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Doe de wijs-test", tekst: "Voor elke optie: welke aanwijzing steunt hem? Storm: bakken om (wind), takken (uit bomen gewaaid), vlag scheef (wind). Drie steunen. Vandalen: bakken misschien... maar takken?" },
            { titel: "Takken zijn de sleutel", tekst: "Vandalen gooien geen takken uit bomen over een heel plein. Wind wel. De aanwijzing die maar bij één verklaring past, beslist." },
            { titel: "Voorzichtig blijven", tekst: "Storm verklaart alles zonder iets te verzinnen. De andere opties hebben extra fantasie nodig — dat is het teken van een gok." },
          ],
          woorden: [
            { woord: "aanname", uitleg: "Iets dat je zomaar aanneemt zonder bewijs. Klinkt vaak logisch, maar steunt nergens op." },
            { woord: "vandalen", uitleg: "Mensen die expres spullen kapotmaken." },
          ],
          theorie: "**De wijs-test in drie stappen:**\n\n1. Lees de conclusie.\n2. Wijs de aanwijzing(en) aan die hem steunen.\n3. Lukt dat voor élke belangrijke aanwijzing? → onderbouwd. Moet je erbij fantaseren? → gok.\n\nToetsmakers-truc: de fout-optie klinkt spannender (vandalen!) dan het juiste antwoord. Spannend is geen bewijs.",
          voorbeelden: [
            { type: "onderbouwd", tekst: "Takken + omgevallen bakken + scheve vlag → alle drie passen bij harde wind." },
            { type: "gok", tekst: "'Vandalen' verklaart hoogstens de bakken. Voor de takken en de vlag moet je erbij verzinnen. Te zwak." },
          ],
          basiskennis: [
            { onderwerp: "De saaie verklaring wint vaak", uitleg: "Het juiste antwoord is meestal de gewoonste verklaring die alles dekt — niet de spannendste." },
          ],
          niveaus: {
            basis: "Welke verklaring dekt de bakken, de takken én de vlag tegelijk?",
            simpeler: "Loop de aanwijzingen langs: wat kan vuilnisbakken omgooien, takken uit bomen halen én een vlag scheef trekken — allemaal in één nacht?",
            nogSimpeler: "Wat krijgt takken uit een boom, zonder mensenhanden?",
          },
        },
      },
      {
        q: "Wanneer is een conclusie ONDERBOUWD?",
        options: [
          "Als je aanwijzingen uit de tekst kunt aanwijzen die de conclusie steunen",
          "Als de conclusie logisch klinkt",
          "Als de meeste mensen het ermee eens zouden zijn",
          "Als de conclusie kort en duidelijk is",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is nou precies de valkuil van de toets. Wat heeft een conclusie nodig behálve logisch klinken?",
          "Ook al denkt iedereen het — waar moet het bewijs vandaan komen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Logisch is niet genoeg", tekst: "'Sem is van zijn fiets gevallen' klinkt logisch bij een pleister. Toch is het een gok, want de tekst noemt geen fiets. Logisch klinken en onderbouwd zijn is niet hetzelfde." },
            { titel: "Bewijs komt uit de tekst", tekst: "Onderbouwen betekent: terugbladeren en de zin(nen) aanwijzen die jouw conclusie dragen. Uit de tekst — niet uit je eigen fantasie of uit wat 'iedereen wel weet'." },
            { titel: "Zo controleer je jezelf", tekst: "Vraag bij elk antwoord dat je wilt kiezen: 'Welke zin bewijst dit?' Kun je geen zin noemen, kies dan iets anders." },
          ],
          woorden: [
            { woord: "onderbouwd", uitleg: "Gesteund door bewijs dat je kunt aanwijzen in de tekst." },
            { woord: "valkuil", uitleg: "Een verstopte val: een antwoord dat aantrekkelijk lijkt maar fout is." },
          ],
          theorie: "**Waarom toetsmakers 'logisch klinkende' fouten maken:**\n\nZe willen weten of jij écht in de tekst kijkt, of alleen op je gevoel kiest. Daarom is er bijna altijd één optie die:\n• waar zou kúnnen zijn,\n• bij je eigen ervaring past,\n• maar nérgens in de tekst steun vindt.\n\nWie de wijs-test doet, trapt er niet in.",
          voorbeelden: [
            { type: "gok", tekst: "Pleister op knie → 'van de fiets gevallen'. Geen fiets in de tekst = geen bewijs = fout, hoe logisch het ook voelt." },
            { type: "onderbouwd", tekst: "Pleister op knie → 'hij heeft iets aan zijn knie gehad'. Voorzichtig en volledig gedekt door de tekst." },
          ],
          basiskennis: [
            { onderwerp: "Bewijs boven gevoel", uitleg: "Je gevoel mag meedenken, maar de tekst beslist. Bij twijfel: terugbladeren en aanwijzen." },
          ],
          niveaus: {
            basis: "Onderbouwd = je kunt de bewijs-zinnen in de tekst aanwijzen.",
            simpeler: "Een detective mag ook niet zeggen 'hij ziet er schuldig uit, dus hij deed het'. Wat heeft een detective nodig? Precies dat heeft jouw conclusie ook nodig.",
            nogSimpeler: "Wat heeft een detective nodig vóór hij iemand mag beschuldigen?",
          },
        },
      },
      {
        q: "Mila kijkt elke pauze naar de voetballers op het plein. Thuis oefent ze op straat, en boven haar bed hangen posters van voetbalsters. Welke conclusie kun je trekken?",
        options: [
          "Mila houdt van voetbal en wil er misschien graag bij horen",
          "Mila is de beste voetbalster van de school",
          "Mila's ouders zijn allebei voetbaltrainer",
          "Mila vindt de pauzes op school saai",
        ],
        answer: 0,
        evidence: "Elke pauze kijken naar de voetballers + thuis oefenen + posters van voetbalsters.",
        wrongHints: [
          null,
          "Dat ze oefent en kijkt zegt iets over wat ze graag wíl — maar staat er ergens hoe goed ze is?",
          null,
          "Ze brengt haar pauze juist door met iets waar ze naar kijkt. Past 'saai vinden' daarbij?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Drie aanwijzingen op een rij", tekst: "Kijken in de pauze, oefenen op straat, posters boven haar bed. Alle drie gaan over hetzelfde onderwerp: voetbal." },
            { titel: "Hoe ver mag je gaan?", tekst: "De aanwijzingen bewijzen: ze is er dol op en ze is er veel mee bezig. Ze bewijzen NIET hoe goed ze is, of iets over haar ouders. Dat zou verder gaan dan de aanwijzingen." },
            { titel: "Kies de conclusie op maat", tekst: "Het juiste antwoord zegt precies zoveel als de aanwijzingen toelaten — niet minder, niet meer." },
          ],
          woorden: [
            { woord: "op maat", uitleg: "Precies passend: de conclusie zegt niet méér dan het bewijs toelaat." },
          ],
          theorie: "**De te-ver-test:**\n\nLeg je conclusie naast de aanwijzingen en vraag: staat hier iets in dat ik nérgens vandaan heb?\n\n• 'Ze houdt van voetbal' → gedekt door alle drie de aanwijzingen. ✓\n• 'Ze is de beste' → over hoe goed ze is zegt geen enkele aanwijzing iets. ✗ Te ver.\n• 'Haar ouders zijn trainer' → ouders komen nergens voor. ✗ Verzonnen.",
          voorbeelden: [
            { type: "op maat", tekst: "Veel met voetbal bezig zijn bewijst liefde voor voetbal — meer niet." },
            { type: "te ver", tekst: "Van 'ze oefent veel' naar 'ze is de beste' is een sprong zonder brug. Oefenen zegt niets over het resultaat." },
          ],
          basiskennis: [
            { onderwerp: "Willen is niet kunnen", uitleg: "Aanwijzingen over wat iemand graag doet of wil, bewijzen nooit hoe goed iemand ergens in is." },
          ],
          niveaus: {
            basis: "Alle aanwijzingen gaan over houden van voetbal — geen enkele over hoe goed ze is of over haar ouders.",
            simpeler: "Vraag bij elk antwoord: welke van de drie aanwijzingen (kijken, oefenen, posters) bewijst dit? Eén antwoord wordt door alle drie gesteund.",
            nogSimpeler: "Wat bewijzen posters boven je bed over jou?",
          },
        },
      },
      {
        q: "In een verhaal staat alleen: 'Sem heeft een pleister op zijn knie.' Welke conclusie gaat TE VER?",
        options: [
          "Sem is gisteren van zijn fiets gevallen",
          "Sem heeft iets aan zijn knie gehad",
          "Er is een pleister op Sems knie geplakt",
          "Sems knie heeft waarschijnlijk een wondje",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Klopt dit juist wél met de tekst? Let op: de vraag zoekt de conclusie die te vér gaat.",
          "Lees de vraag nog eens goed: je zoekt de conclusie die méér beweert dan de tekst.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Let op: een omgekeerde vraag", tekst: "Je zoekt hier niet het beste antwoord, maar juist de conclusie die NIET mag. Drie opties blijven netjes bij de tekst; één verzint erbij." },
            { titel: "Wat weet je zeker?", tekst: "Alleen dit: er zit een pleister op zijn knie. Daaruit mag je voorzichtig afleiden: er was iets met die knie, waarschijnlijk een wondje." },
            { titel: "Waar begint het verzinnen?", tekst: "Een fiets? Gisteren? Gevallen? Geen van die drie dingen staat in de tekst. Wie dat concludeert, vult drie gaten met fantasie." },
          ],
          woorden: [
            { woord: "te ver gaan", uitleg: "Meer beweren dan de aanwijzingen kunnen dragen." },
            { woord: "omgekeerde vraag", uitleg: "Een vraag die naar het foute of het niet-passende zoekt, zoals 'welke gaat te ver' of 'wat staat er niet'." },
          ],
          theorie: "**Hoe ver mag een conclusie gaan?**\n\nDenk aan een trap:\n• Trede 1: wat er letterlijk staat (pleister op knie).\n• Trede 2: één voorzichtig stapje afleiden (er was iets met die knie).\n• Trede 3+: hoe, wanneer, waardoor — dat weet je NIET.\n\nOp de Doorstroomtoets blijft het juiste antwoord op trede 1 of 2. Antwoorden op trede 3 klinken als een compleet verhaal — en zijn juist daarom verdacht.",
          voorbeelden: [
            { type: "trede 2", tekst: "'Waarschijnlijk een wondje' — voorzichtig, met 'waarschijnlijk'. Prima." },
            { type: "trede 3", tekst: "'Gisteren van zijn fiets gevallen' — noemt een dag, een oorzaak en een voorwerp die nergens staan. Drie verzinsels in één zin." },
          ],
          basiskennis: [
            { onderwerp: "Hoe preciezer, hoe verdachter", uitleg: "Een optie vol precieze details (gisteren, fiets) zonder tekst-bewijs gaat bijna altijd te ver." },
          ],
          niveaus: {
            basis: "Drie opties blijven bij 'er was iets met die knie'. Eén optie verzint een oorzaak, een dag én een fiets.",
            simpeler: "Onderstreep in elk antwoord de dingen die je uit de tekst kunt bewijzen. Bij welk antwoord kun je bijna niets onderstrepen?",
            nogSimpeler: "In welke optie staan dingen die nérgens in de zin over Sem staan?",
          },
        },
      },
      {
        q: "In een verhaal staat: 'Ze had hem al drie keer gebeld, maar hij nam niet op.' Wat kun je onderbouwd concluderen?",
        options: [
          "Ze probeert hem te bereiken en hij reageert niet",
          "Ze is boos op hem",
          "Hij heeft zijn telefoon verloren",
          "Er is een storing bij het telefoonbedrijf",
        ],
        answer: 0,
        evidence: "Ze had hem al drie keer gebeld, maar hij nam niet op.",
        wrongHints: [
          null,
          "Zie je ergens het woord 'boos' of een aanwijzing voor boosheid? Kijk wat er letterlijk staat.",
          "Zou dat kloppen met 'maar hij nam niet op'? Welke verklaring ga je te ver voor?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat staat er letterlijk?", tekst: "Ze belde drie keer — dat laat zien dat ze contact wil. Hij nam niet op — hij reageert niet. Dat zijn de enige twee feiten." },
            { titel: "Doe de te-ver-test", tekst: "Boos zijn zou méér informatie nodig hebben. Telefoon kwijt en storing zijn verklaringen die ergens op steunen — maar er staat niets over in de zin." },
            { titel: "Voorzichtigste conclusie", tekst: "Het enige wat je zeker weet: ze probeert hem te bereiken en hij pakt niet op. Meer kun je niet concluderen." },
          ],
          niveaus: {
            basis: "Wat weet je zeker uit deze ene zin — en wat verzin je er bij?",
            simpeler: "Als je drie keer iemand belt en hij neemt niet op, wéét je dan zeker waaróm niet?",
            nogSimpeler: "Wat doe je als je iemand wilt spreken die de telefoon niet opneemt?",
          },
        },
      },
      {
        q: "Jayden kijkt tijdens de uitleg steeds op de klok. Hij trommelt met zijn vingers op tafel en zucht diep. Wat kun je hieruit afleiden?",
        options: [
          "Jayden wil dat de uitleg snel voorbij is",
          "Jayden oefent voor drumles",
          "Jayden vindt klokken interessant",
          "Jayden heeft het koud",
        ],
        answer: 0,
        evidence: "Steeds op de klok kijken + trommelen met zijn vingers + diep zuchten.",
        wrongHints: [
          null,
          "Grappig bedacht — maar past dat ook bij het klok-kijken en het zuchten? Eén aanwijzing is niet genoeg.",
          "Waarom kijk jíj op de klok tijdens iets langdradigs?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Drie aanwijzingen, één richting", tekst: "Op de klok kijken = bezig zijn met hoe lang het nog duurt. Trommelen = onrustig. Zuchten = er genoeg van hebben. Alles wijst naar ongeduld." },
            { titel: "Prik door de verleider heen", tekst: "'Drumles' past alleen bij het trommelen en laat de klok en het zuchten onverklaard. Een conclusie die twee van de drie aanwijzingen negeert, is te zwak." },
            { titel: "Formuleer voorzichtig", tekst: "Je weet niet of Jayden de uitleg stom vindt of gewoon ergens anders heen wil — maar dat hij wil dat het voorbij is, wordt door alle drie de aanwijzingen gedragen." },
          ],
          woorden: [
            { woord: "ongeduldig", uitleg: "Niet goed kunnen wachten; willen dat iets opschiet." },
            { woord: "langdradig", uitleg: "Saai omdat het te lang duurt." },
          ],
          theorie: "**Gedrag-optellen:**\n\nEén gedraging kan van alles betekenen (zuchten = moe? verdrietig? verveeld?). Maar meerdere gedragingen sámen wijzen meestal één kant op.\n\nReken het uit als een som:\nklok-kijken + trommelen + zuchten = wachten valt zwaar.\n\nHet foute antwoord pakt er één uit en bouwt daar een eigen verhaal omheen. Het juiste antwoord gebruikt de hele som.",
          voorbeelden: [
            { type: "som", tekst: "Alle drie de gedragingen gaan over tijd en onrust — samen: hij wil dat het stopt." },
            { type: "verleider", tekst: "'Drumles' gebruikt alleen het trommelen. De andere twee aanwijzingen blijven liggen." },
          ],
          basiskennis: [
            { onderwerp: "De meeste-aanwijzingen-regel", uitleg: "Kies het antwoord dat door de mééste aanwijzingen gesteund wordt — niet het antwoord met het leukste verhaal." },
          ],
          niveaus: {
            basis: "Tel per antwoord hoeveel van de drie aanwijzingen (klok, trommelen, zuchten) het verklaart.",
            simpeler: "Wanneer kijk jij steeds op de klok én zit je te wiebelen én zucht je? Denk aan de laatste keer dat iets veel te lang duurde.",
            nogSimpeler: "Waar hoop jij op als je steeds op de klok kijkt?",
          },
        },
      },
    ],
  },

  // ── Stap 4 ──────────────────────────────────────────────────────
  {
    title: "Doorstroomtoets-mix — de mussentekst",
    explanation: tekstMussen + "\n\n*Dit is een tekst zoals op de Doorstroomtoets. De 5 vragen hieronder zijn allemaal afleid-vragen: het antwoord staat nergens letterlijk. Verzamel aanwijzingen, doe de wijs-test, en kies de conclusie die je kunt onderbouwen.*",
    checks: [
      {
        q: "Waarom zijn er in Zonnehof waarschijnlijk zo weinig mussen?",
        options: [
          "Mussen vinden er nauwelijks schuilplekken, nestplekken en voedsel",
          "In Zonnehof wonen veel minder mensen dan in de oude wijk",
          "De tellers hebben in Zonnehof minder goed gezocht",
          "Mussen houden niet van nieuwe huizen omdat die te fel geverfd zijn",
        ],
        answer: 0,
        evidence: "Heggen en rommelige struiken ... zijn er nauwelijks. De moderne daken zitten potdicht: nergens een kier waar een mus haar nest in kan bouwen. (En: in de oude wijk strooien bewoners vaker oud brood.)",
        wrongHints: [
          null,
          "Lees de eerste alinea nog eens: wat staat daar over het aantal huizen in beide wijken?",
          "Staat er ergens iets over hóé de tellers werkten? Zoek bewijs.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Verzamel uit meerdere alinea's", tekst: "Alinea 2: geen struiken om te schuilen, geen kieren om te nestelen. Alinea 3 (over de oude wijk): daar is wél brood. Draai om: in Zonnehof dus minder voedsel. Drie problemen voor de mus." },
            { titel: "Streep de verleiders weg", tekst: "'Minder mensen' botst met de tekst: de wijken hebben precies evenveel huizen. 'Slecht geteld' en 'felle verf' — daarover staat helemaal niets." },
            { titel: "Kies het complete antwoord", tekst: "Het juiste antwoord bundelt alle aanwijzingen: schuilen, nestelen en eten. Precies wat de tekst samen vertelt." },
          ],
          woorden: [
            { woord: "schuilplek", uitleg: "Een plek om weg te kruipen voor gevaar, zoals een dichte struik." },
            { woord: "nestplek", uitleg: "Een plek waar een vogel haar nest kan bouwen, zoals een kier onder een dakpan." },
          ],
          theorie: "**Conclusies uit meerdere alinea's:**\n\nDe moeilijkste toetsvragen laten je aanwijzingen uit verschillende alinea's combineren. Werkwijze:\n\n1. Zoek per alinea wat er over het onderwerp (Zonnehof) gezegd wordt.\n2. Let op vergelijkingen: wat de oude wijk wél heeft, mist Zonnehof dus.\n3. De conclusie is de optelsom van al die stukjes.",
          voorbeelden: [
            { type: "omdraaien", tekst: "Oude wijk: losse dakpannen, heggen, brood → veel mussen. Draai om voor Zonnehof: dicht dak, geen heg, geen brood → weinig mussen." },
          ],
          basiskennis: [
            { onderwerp: "Vergelijking = dubbele informatie", uitleg: "Als een tekst twee dingen vergelijkt, vertelt elke zin over het ene óók iets over het andere." },
          ],
          niveaus: {
            basis: "Zoek in alinea 2 en 3 wat mussen nodig hebben en wat Zonnehof daarvan mist.",
            simpeler: "Een mus heeft drie dingen nodig: een plek om te schuilen, een plek voor haar nest en eten. Ga per ding na: heeft Zonnehof dat volgens de tekst?",
            nogSimpeler: "Wat heeft een vogel nodig om ergens te blijven wonen?",
          },
        },
      },
      {
        q: "Wat kun je uit de tekst afleiden over katten en sperwers?",
        options: [
          "Het zijn dieren die op mussen jagen",
          "Ze komen alleen in nieuwbouwwijken voor",
          "Ze eten vooral oud brood uit tuinen",
          "Ze bouwen hun nest in heggen",
        ],
        answer: 0,
        evidence: "Heggen en rommelige struiken, waar mussen graag in wegduiken voor katten en sperwers.",
        wrongHints: [
          null,
          "Staat er iets over wáár katten en sperwers wonen? Kijk waarvoor de mussen wegduiken.",
          null,
          "Wie duikt er weg in de heg — de mus, of de sperwer? Lees de zin nog eens precies.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de zin", tekst: "Er is maar één zin over katten en sperwers: mussen duiken ervoor wég in struiken. Alles wat je concludeert, moet uit die zin komen." },
            { titel: "Wat betekent wegduiken vóór iets?", tekst: "Je duikt weg voor iets dat gevaarlijk voor je is. Eigen kennis erbij: katten vangen vogels. Dus: katten en sperwers zijn een gevaar voor mussen." },
            { titel: "Van gevaar naar jagen", tekst: "Waarom zouden die dieren gevaarlijk zijn voor een mus? Omdat ze op mussen jagen. Dat is de voorzichtige, onderbouwde conclusie." },
          ],
          woorden: [
            { woord: "sperwer", uitleg: "Een kleine roofvogel die snel tussen huizen en tuinen door vliegt." },
            { woord: "wegduiken", uitleg: "Je snel verstoppen voor gevaar." },
          ],
          theorie: "**Onbekende woorden + afleiden = samen oplossen.**\n\nMisschien wist je niet wat een sperwer is. Geen probleem: de tekst verklapt het. Als mussen ervoor wégduiken, net als voor katten, dan is het iets gevaarlijks voor mussen — dus een jager.\n\nZo werkt afleiden dubbel: je begrijpt het onbekende woord én je beantwoordt de vraag.",
          voorbeelden: [
            { type: "afleiden", tekst: "'Wegduiken voor X' → X is een bedreiging. Katten + sperwers naast elkaar → allebei jagers op mussen." },
          ],
          basiskennis: [
            { onderwerp: "Roofdieren en prooien", uitleg: "Kleine vogels zoals mussen zijn prooi voor katten en roofvogels. Daarom zitten ze graag in dichte struiken." },
          ],
          niveaus: {
            basis: "Mussen duiken weg vóór katten en sperwers — waarvoor duik je weg?",
            simpeler: "Als jij ergens voor wegduikt, is dat ding dan lief of gevaarlijk voor je? Bedenk daarna wat een kat met een klein vogeltje wil.",
            nogSimpeler: "Waarom verstopt een muis zich voor een kat?",
          },
        },
      },
      {
        q: "De tellers vergeleken twee wijken 'met precies evenveel huizen'. Waarom is dat detail belangrijk?",
        options: [
          "Zo weet je dat het verschil in mussen niet aan het aantal huizen ligt",
          "Zo weet je dat beide wijken even oud zijn",
          "Zo weet je hoeveel mussen er per huis wonen",
          "Zo weet je dat de tellers overal zijn geweest",
        ],
        answer: 0,
        evidence: "In de oude wijk ernaast, met precies evenveel huizen, telden ze er zesenveertig.",
        wrongHints: [
          null,
          "Evenveel huizen zegt niets over de leeftijd — de ene wijk heet juist nieuwbouwwijk. Waarom zou je wijken van gelijke grootte vergelijken?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Waarom eerlijk vergelijken?", tekst: "Stel: de oude wijk had duizend huizen en Zonnehof honderd. Dan zou 'meer mussen in de oude wijk' logisch zijn — gewoon omdat de wijk groter is. Dat wil je uitsluiten." },
            { titel: "Evenveel huizen = eerlijke test", tekst: "Nu de wijken even groot zijn, moet het grote verschil (3 tegenover 46) ergens ánders aan liggen: aan de tuinen, daken en het voedsel." },
            { titel: "Zo denken toetsmakers", tekst: "Vragen over 'waarom staat dit detail er?' testen of je snapt hoe een schrijver zijn bewijs sterk maakt. Het detail maakt de vergelijking eerlijk." },
          ],
          woorden: [
            { woord: "eerlijke vergelijking", uitleg: "Twee dingen vergelijken die op de belangrijke punten gelijk zijn, zodat het verschil één duidelijke oorzaak heeft." },
            { woord: "uitsluiten", uitleg: "Een mogelijke verklaring wegstrepen door te laten zien dat die het niet kan zijn." },
          ],
          theorie: "**Waarom-staat-dit-er-vragen:**\n\nElk detail in een goede tekst heeft een taak. Vraag jezelf: wat zou er misgaan als dit detail wegviel?\n\nZonder 'evenveel huizen' zou je kunnen denken: die oude wijk is vast veel groter. Mét dat detail vervalt die uitleg — en blijft de echte oorzaak over. Zo maakt de schrijver zijn punt sterker.",
          voorbeelden: [
            { type: "wegdenk-truc", tekst: "Denk het detail weg. Verandert er iets aan hoe overtuigend de tekst is? Dan heb je de taak van het detail gevonden." },
          ],
          basiskennis: [
            { onderwerp: "Eerlijk onderzoek", uitleg: "Onderzoekers houden alles gelijk behalve het ding dat ze onderzoeken. Alleen dan weet je waar een verschil vandaan komt." },
          ],
          niveaus: {
            basis: "Even grote wijken, tóch 3 tegenover 46 mussen — dan ligt het niet aan de grootte, maar waaraan wel?",
            simpeler: "Twee even grote vijvers; in de ene zwemmen 3 vissen, in de andere 46. Aan de grootte kan het niet liggen. Waar ga je dan naar kijken? Zo werkt het ook met de wijken.",
            nogSimpeler: "Als twee dingen even groot zijn, waar kan een verschil dan nog vandaan komen?",
          },
        },
      },
      {
        q: "Hoe kijkt teller Ruud Blom naar de toekomst van de mussen in Zonnehof?",
        options: [
          "Bezorgd, maar met hoop als de bewoners meehelpen",
          "Volledig gerust — het komt vanzelf goed",
          "Onverschillig — het maakt hem weinig uit",
          "Woedend op de bouwers van de wijk",
        ],
        answer: 0,
        evidence: "\"We hopen dat de bewoners meedoen. Anders vrees ik dat we hier over vijf jaar helemaal geen mussen meer tellen.\"",
        wrongHints: [
          null,
          "Let op het woord 'vrees' in zijn laatste zin — past dat bij gerust zijn?",
          "Zou iemand die het niets uitmaakt gratis nestkasten uitdelen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de gevoels-woorden", tekst: "In het citaat staan twee sleutelwoorden: 'we hopen' en 'ik vrees'. Hoop én vrees tegelijk — dat is een gemengd gevoel." },
            { titel: "Kijk ook naar wat hij dóét", tekst: "De vogelwerkgroep deelt gratis nestkasten uit en geeft tips. Wie moeite doet, geeft om de afloop. Dat steunt 'bezorgd maar hoopvol' en verslaat 'onverschillig'." },
            { titel: "Weeg de opties", tekst: "Volledig gerust botst met 'ik vrees'. Woedend — daar is geen enkel woord van te vinden. Bezorgd-met-hoop dekt precies beide sleutelwoorden." },
          ],
          woorden: [
            { woord: "vrezen", uitleg: "Bang zijn dat iets naars gaat gebeuren." },
            { woord: "gemengd gevoel", uitleg: "Twee gevoelens tegelijk, zoals hoop en zorgen." },
          ],
          theorie: "**Gevoelens afleiden bij citaten:**\n\nBij een citaat (uitspraak tussen aanhalingstekens) let je op:\n1. Gevoels-werkwoorden: hopen, vrezen, balen, genieten.\n2. Voorwaarden: 'als ... dan' / 'anders ...' — die verraden waar de hoop van afhangt.\n3. Wat de persoon dóét naast wat hij zegt.\n\nHier hangt de hoop af van één ding: doen de bewoners mee? Daarom is het antwoord tweeledig: zorgen én hoop.",
          voorbeelden: [
            { type: "sleutelwoorden", tekst: "'We hopen' = hoop. 'Anders vrees ik' = zorgen. Samen in één citaat = gemengd gevoel." },
          ],
          basiskennis: [
            { onderwerp: "Daden wegen mee", uitleg: "Wat iemand doet (nestkasten uitdelen) is net zo'n sterke aanwijzing als wat iemand zegt." },
          ],
          niveaus: {
            basis: "Twee sleutelwoorden in het citaat: 'hopen' en 'vrees'. Welk antwoord bevat allebei die kanten?",
            simpeler: "Lees zijn citaat hardop. Hoor je een blij iemand, een boos iemand, of iemand die zich zorgen maakt maar nog kansen ziet?",
            nogSimpeler: "Welke twee gevoels-woorden gebruikt Ruud Blom zelf?",
          },
        },
      },
      {
        q: "Waarom deelt de vogelwerkgroep juist in Zonnehof nestkasten uit?",
        options: [
          "Omdat mussen daar zelf nergens een nestplek kunnen vinden",
          "Omdat de bewoners van Zonnehof erom gevraagd hebben",
          "Omdat de oude wijk geen nestkasten wil ophangen",
          "Omdat nestkasten alleen aan nieuwe huizen passen",
        ],
        answer: 0,
        evidence: "De moderne daken zitten bovendien potdicht: nergens een kier waar een mus haar nest in kan bouwen. — De vogelwerkgroep deelt daarom gratis nestkasten uit in Zonnehof.",
        wrongHints: [
          null,
          "Zoek in de tekst: wie nam het initiatief — de bewoners of de vogelwerkgroep?",
          null,
          "Staat er iets over aan welke huizen een nestkast past? Doe de wijs-test.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Let op het woord 'daarom'", tekst: "'De vogelwerkgroep deelt daarom gratis nestkasten uit.' Het woord 'daarom' wijst terug naar de reden — die staat in de zinnen ervoor." },
            { titel: "Wat stond ervoor?", tekst: "De daken in Zonnehof zitten potdicht: nergens een kier voor een nest. De mussen missen daar dus een nestplek." },
            { titel: "Leg de link", tekst: "Een nestkast is een kunstmatige nestplek. Waar de natuur die plek mist, hangt een mens hem op. Daarom juist in Zonnehof, en niet in de oude wijk met haar losse dakpannen." },
          ],
          woorden: [
            { woord: "nestkast", uitleg: "Een houten kastje met een gaatje waarin vogels hun nest kunnen bouwen." },
            { woord: "daarom", uitleg: "Signaalwoord dat een gevolg aankondigt — de reden staat er meestal vlak vóór." },
          ],
          theorie: "**Signaalwoorden helpen bij afleiden.**\n\n'Daarom', 'dus' en 'want' zijn pijlen in de tekst:\n• 'daarom' / 'dus' → de reden staat ervóór.\n• 'want' / 'omdat' → de reden komt erná.\n\nBij een waarom-vraag: zoek eerst zo'n signaalwoord bij het onderwerp van de vraag. Vaak hoef je dan alleen nog de zinnen ervoor of erna te begrijpen — en te combineren met wat je eerder las.",
          voorbeelden: [
            { type: "pijl terug", tekst: "'Daken potdicht, nergens een kier. De vogelwerkgroep deelt dáárom nestkasten uit.' De pijl wijst naar het nest-probleem." },
          ],
          basiskennis: [
            { onderwerp: "Probleem → oplossing", uitleg: "Veel informatieve teksten zijn zo gebouwd: eerst het probleem, dan de oplossing. De oplossing past altijd precies op het probleem." },
          ],
          niveaus: {
            basis: "Zoek het woord 'daarom' in de laatste alinea en lees wat er vlak vóór dat stuk over de daken stond.",
            simpeler: "Wat mist een mus in Zonnehof volgens alinea 2? En wat geeft een nestkast een mus precies? Leg die twee naast elkaar.",
            nogSimpeler: "Wat geef je een vogel die nergens een plekje voor haar nest vindt?",
          },
        },
      },
      {
        q: "Teller Ruud Blom deelt gratis nestkasten uit én geeft tips voor groenere tuinen. Wat kun je hieruit concluderen?",
        options: [
          "Ruud Blom gelooft dat bewoners kunnen helpen de mus te redden",
          "Ruud Blom wil nestkasten verkopen voor zijn werk",
          "Ruud Blom denkt dat de mus al uitgestorven is",
          "Ruud Blom vindt Zonnehof een lelijke wijk",
        ],
        answer: 0,
        evidence: "De vogelwerkgroep deelt daarom gratis nestkasten uit in Zonnehof en geeft tips voor groenere tuinen.",
        wrongHints: [
          null,
          "De nestkasten zijn gratis — wat zegt dat over een handelsmotief? Zoek de aanwijzing voor wát hij hoopt.",
          "Hij zegt 'we hopen dat bewoners meedoen' — hoopvol klinkt dat niet als je denkt dat het te laat is.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar wat hij doet", tekst: "Gratis nestkasten uitdelen en tips geven kost tijd en moeite. Waarom zou iemand dat doen?" },
            { titel: "Combineer met wat hij zegt", tekst: "'We hopen dat de bewoners meedoen.' Hopen = geloven dat het kan helpen. Actie ondernemen = geloven dat die actie zin heeft." },
            { titel: "Trek de conclusie", tekst: "Gratis geven + hopen + tips geven = hij denkt dat bewoners het verschil kunnen maken. Dat is de conclusie die de tekst steunt." },
          ],
          niveaus: {
            basis: "Hij deelt gratis uit en geeft tips. Doe je dat als je denkt dat het toch niet helpt?",
            simpeler: "Wanneer geef jij iemand gratis hulp? Alleen als je denkt dat het nut heeft — of ook als je denkt dat het hopeloos is?",
            nogSimpeler: "Waarom zou iemand tijd en moeite steken in iets waarvan hij denkt dat het toch niet werkt?",
          },
        },
      },
      {
        q: "In de tekst staat dat de tellers 'dit voorjaar' drie mussen telden in Zonnehof. Welke conclusie is ONDERBOUWD?",
        options: [
          "Op het moment van tellen waren er drie mussen in Zonnehof",
          "Er zullen nooit meer mussen in Zonnehof komen",
          "De tellers hebben slecht geteld",
          "Alle mussen zijn vorig jaar gestorven",
        ],
        answer: 0,
        evidence: "Tellers van een vogelwerkgroep noteerden dit voorjaar in de nieuwbouwwijk Zonnehof maar drie mussen.",
        wrongHints: [
          null,
          "De tekst beschrijft één voorjaar — weet je dan wat er ná dat moment gaat gebeuren? Kijk hoe ver je concludeert.",
          "Staat er iets in de tekst over hoe nauwkeurig de tellers werkten? Zoek een aanwijzing.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat staat er letterlijk?", tekst: "Dit voorjaar = op dit ene moment. Drie mussen geteld = drie werden er gezien. Dat zijn de feiten." },
            { titel: "Doe de te-ver-test", tekst: "'Nooit meer mussen' — dat gaat over de toekomst. De tekst gaat over één meting in het heden. Toekomst-claims gaan altijd te ver als je alleen een momentopname hebt." },
            { titel: "Kies de voorzichtige conclusie", tekst: "Op dit moment, op die dag, telden ze er drie. Dat is alles wat je zeker weet. Voorzichtige conclusie wint." },
          ],
          niveaus: {
            basis: "De tellers deden één meting in één voorjaar. Wat weet je zeker — en wat weet je niet?",
            simpeler: "Jij telt op maandag drie kikkers in de vijver. Weet je dan zeker hoeveel er dinsdag zijn?",
            nogSimpeler: "Eén meting op één dag — kan je dan zeggen wat er altijd of nooit is?",
          },
        },
      },
      {
        q: "Ruud Blom zegt: 'Anders vrees ik dat we hier over vijf jaar helemaal geen mussen meer tellen.' Wat kun je hieruit het BESTE afleiden?",
        options: [
          "Ruud Blom maakt zich zorgen over de toekomst van de mus in Zonnehof",
          "Ruud Blom weet zeker dat er over vijf jaar geen mussen meer zijn",
          "Ruud Blom vindt vijf jaar een te korte tijd om iets te veranderen",
          "Ruud Blom wil stoppen met tellen na vijf jaar",
        ],
        answer: 0,
        evidence: "Anders vrees ik dat we hier over vijf jaar helemaal geen mussen meer tellen.",
        wrongHints: [
          null,
          "'Vrees' betekent dat je iets angstig verwacht — niet dat je het zeker weet. Is dat hetzelfde als 'zeker weten'?",
          "Hij geeft juist tips en deelt nestkasten uit — dat is handelen in vijf jaar. Klinkt dat als 'te kort'?",
          "Lees de zin nog eens: hij spreekt over mussen tellen, niet over stoppen met tellen.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Let op het woord 'vrees'", tekst: "'Vrees' betekent: ik ben bang dat het zo gaat. Dat is een gevoel van bezorgdheid — geen zekerheid." },
            { titel: "Combineer met zijn acties", tekst: "Hij deelt nestkasten uit en geeft tips. Doe je dat als je nergens meer om geeft? Nee — hij handelt omdat hij het nog wíl veranderen." },
            { titel: "Trek de juiste conclusie", tekst: "Bezorgd zijn over iets + actie ondernemen = hij maakt zich zorgen en hoopt dat het beter wordt. Dat is de conclusie die de tekst steunt." },
          ],
          niveaus: {
            basis: "'Vrees' en 'weet zeker' zijn niet hetzelfde. Welk gevoel drukt 'vrees' uit?",
            simpeler: "Als je zegt 'ik vrees dat het regent morgen' — weet je het dan zeker of ben je het bang?",
            nogSimpeler: "Wanneer vrees je iets — als je zeker weet dat het gaat gebeuren, of als je bang bent dat het misschien kan?",
          },
        },
      },
      {
        q: "In Zonnehof telden ze 3 mussen; in de oude wijk ernaast 46. Welke conclusie is ONDERBOUWD door de tekst?",
        options: [
          "De omgeving bepaalt mede hoeveel mussen er leven",
          "Mussen leven liever in nieuwe huizen dan in oude",
          "Bewoners van Zonnehof houden minder van dieren",
          "De tellers telden de mussen in Zonnehof niet goed",
        ],
        answer: 0,
        evidence: "In Zonnehof: strakke tuinen met tegels, daken zitten potdicht. In de oude wijk: overgroeide heggen, losse dakpannen, oud brood.",
        wrongHints: [
          null,
          "De tekst zegt dat mussen meer leven in de OUDE wijk. Welke soort huizen staan er in die wijk?",
          "Staat er iets in de tekst over de gevoelens van de bewoners voor dieren? Zoek een aanwijzing.",
          "Er staat niets over hoe nauwkeurig de tellers werkten. Gebruik alleen wat er in de tekst staat.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Vergelijk de twee wijken", tekst: "Zonnehof: tegels, potdichte daken, hoge schuttingen → weinig mussen. Oude wijk: heggen, losse dakpannen, brood → veel mussen. Twee verschillende omgevingen, twee verschillende aantallen." },
            { titel: "Wat wijzen die gegevens samen?", tekst: "Meer groene ruimte en nestplekken = meer mussen. Minder groen = minder mussen. De omgeving maakt het verschil — dat is wat de tekst laat zien." },
            { titel: "Controleer: is de conclusie te ver?", tekst: "De conclusie is: de omgeving telt mee. Dat steunt de tekst volledig. Andere opties gaan over dingen (gevoel van bewoners, slechte telmethode) die nergens in de tekst staan." },
          ],
          niveaus: {
            basis: "Wat is het verschil tussen de twee wijken? En wat is het verschil in het aantal mussen?",
            simpeler: "In de groene wijk leven meer mussen dan in de tegels-wijk. Wat zegt dat over de rol van de omgeving?",
            nogSimpeler: "Zou jij liever wonen in een huis met een tuin of in een beton-straat? Mussen denken daar ook zo over.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const conclusiesTrekkenPo = {
  id: "conclusies-trekken-po",
  title: "Conclusies trekken — lezen tussen de regels",
  emoji: "🕵️",
  level: "groep7-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — afleiden en concluderen (inferentie)",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
  ],
  intro:
    "De moeilijkste vragen op de Doorstroomtoets zijn afleid-vragen: het antwoord staat nérgens letterlijk. In dit deel leer je aanwijzingen verzamelen, ze combineren met wat je al weet, en het verschil zien tussen een onderbouwde conclusie en een gok die alleen maar logisch klínkt.",
  triggerKeywords: [
    "conclusies trekken", "conclusie", "afleiden", "inferentie",
    "tussen de regels lezen", "aanwijzingen", "onderbouwen",
    "gevoelens afleiden", "hoe voelt zich", "waarom waarschijnlijk",
    "begrijpend lezen", "doorstroomtoets begrijpend lezen", "cito begrijpend lezen",
  ],
  chapters,
  steps,
};

export default conclusiesTrekkenPo;
