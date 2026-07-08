// Leerpad: Woordbetekenis — raden uit de tekst (groep 6-8).
// Vaste Doorstroomtoets-vraagvorm: "Wat betekent 'X' in deze tekst?"
// De 4 context-trucs: (1) de zin eromheen legt het uit, (2) zoek een
// voorbeeld of opsomming, (3) let op signaal/tegenstelling ("maar", "juist"),
// (4) haal het woord uit elkaar (samenstelling/voorvoegsel).
// Kern-inzicht: het gaat om de betekenis IN DE TEKST — woorden kunnen
// meerdere betekenissen hebben.
//
// Alle teksten zijn 100% eigen werk. 4 stappen, 18 checks totaal.

const stepEmojis = ["🔎", "🌊", "🎭", "🏆"];

const chapters = [
  { letter: "A", title: "De vier trucs — kijk om het woord heen", emoji: "🔎", from: 0, to: 0 },
  { letter: "B", title: "Oefentekst — leven in de diepzee", emoji: "🌊", from: 1, to: 1 },
  { letter: "C", title: "Eén woord, meerdere betekenissen", emoji: "🎭", from: 2, to: 2 },
  { letter: "D", title: "Doorstroomtoets-mix — vulkanen", emoji: "🏆", from: 3, to: 3 },
];

// ── Tekst stap 2: de diepzee (eigen tekst, ~170 woorden) ────────────
const tekstDiepzee = `**Leven in de diepzee**

Diep in de oceaan, kilometers onder het wateroppervlak, is het aardedonker. Zonlicht komt er nooit. Toch is de diepzee niet leeg: het krioelt er van het leven. Overal zwemmen, kruipen en zweven dieren die je nergens anders op aarde vindt.

Veel diepzeedieren maken hun eigen licht. Dat heet bioluminescentie: het lichaam van het dier geeft zelf een gloed af, zoals een lampje. De hengelvis gebruikt zo'n lichtje als lokaas. Kleine visjes zwemmen nieuwsgierig op het lichtje af — en worden opgegeten.

De diepzee is onherbergzaam: het is er ijskoud, pikdonker en de druk van het water is enorm. Een mens zou er zonder speciale duikboot geen minuut overleven. Toch voelen sommige dieren zich er juist thuis. Hun lichaam is perfect aangepast aan deze omstandigheden.

Onderzoekers ontdekken nog steeds nieuwe soorten. Ze schatten dat we pas een fractie van alle diepzeedieren kennen: misschien maar één op de tien. De diepzee is daarmee een van de laatste onontdekte plekken op aarde.`;

// ── Tekst stap 4: vulkanen (eigen tekst, ~190 woorden) ──────────────
const tekstVulkanen = `**Vulkanen: bergen met een geheim**

Een vulkaan ziet eruit als een gewone berg, maar vanbinnen is hij allesbehalve gewoon. Diep onder de grond is het zo heet dat steen er smelt. Dit gesmolten gesteente heet magma. Het verzamelt zich in een grote ruimte onder de vulkaan: de magmakamer.

Soms wordt de druk in de magmakamer te groot. De vulkaan barst dan uit: hij spuwt as, gassen en gloeiend hete lava de lucht in. Lava is magma dat aan het oppervlak komt — hetzelfde spul dus, maar met een andere naam.

Een uitbarsting kan verwoestend zijn. Dorpen in de buurt kunnen bedolven worden onder een dikke laag as en modder. Toch wonen wereldwijd miljoenen mensen vlak bij een vulkaan. Dat lijkt onverstandig, maar er is een goede reden: vulkaanas maakt de grond juist heel vruchtbaar. Boeren kunnen er uitstekend groente en fruit verbouwen.

Wetenschappers houden gevaarlijke vulkanen dag en nacht in de gaten. Met gevoelige apparaten meten ze kleine trillingen in de grond. Zo zien ze een uitbarsting vaak aankomen en kunnen ze mensen op tijd waarschuwen. Helemaal zeker weten ze het nooit: een vulkaan blijft onvoorspelbaar.`;

const steps = [
  // ── Stap 1: de vier trucs ─────────────────────────────────────────
  {
    title: "De truc: kijk om het woord heen",
    explanation: `Op de Doorstroomtoets kom je gegarandeerd deze vraag tegen: **"Wat betekent 'X' in deze tekst?"** Het goede nieuws: je hoeft het woord NIET uit je hoofd te kennen. Het antwoord staat bijna altijd verstopt in de tekst zelf. Je moet alleen weten wáár je moet kijken.

Er zijn vier trucs:

**Truc 1 — De zin eromheen legt het uit.** Vaak staat er direct na het moeilijke woord een uitleg, bijvoorbeeld na een dubbele punt of een streepje.

**Truc 2 — Zoek een voorbeeld of opsomming.** Woorden als *zoals* en *bijvoorbeeld* kondigen aan wat het woord ongeveer inhoudt.

**Truc 3 — Let op een tegenstelling.** Signaalwoorden als *maar*, *juist* en *toch* vertellen je: hier komt het omgekeerde. Dan weet je wat het woord ongeveer betekent — namelijk het tegenovergestelde.

**Truc 4 — Haal het woord uit elkaar.** Een lang woord bestaat vaak uit stukjes die je wél kent, zoals *on-* (niet) of twee aan elkaar geplakte woorden.

In deze stap oefen je elke truc met één losse zin. Er zit zelfs een verzonnen woord tussen — expres! Zo merk je dat de trucs altijd werken, ook bij woorden die je nog nooit hebt gezien.`,
    checks: [
      {
        // Truc 1 — uitleg na dubbele punt (verzonnen woord)
        q: "Lees: *\"De duiker zag een groep flonkerprikken: piepkleine visjes die lichtjes afgeven in het donkere water.\"* — Wat is een 'flonkerprik' in deze zin?",
        options: [
          "Een piepklein visje dat licht geeft",
          "Een zaklamp die duikers meenemen",
          "Een scherpe rots onder water",
          "Een prik die je bij de dokter krijgt",
        ],
        answer: 0,
        evidence: "piepkleine visjes die lichtjes afgeven in het donkere water",
        wrongHints: [
          null,
          "Lees wat er ná de dubbele punt staat — gaat dat over een lamp of over iets levends?",
          null,
          "Het woord 'prik' zit erin, maar past een dokters-prik bij wat de rest van de zin vertelt?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Ken je dit woord?", tekst: "Nee — en dat kan ook niet, want 'flonkerprik' is verzonnen! Toch kun je de vraag beantwoorden. Dat bewijst dat je het woord zelf niet hoeft te kennen." },
            { titel: "Zoek de dubbele punt", tekst: "Na 'flonkerprikken' staat een dubbele punt (:). Dat leesteken zegt: LET OP, hier komt de uitleg. Alles erna vertelt wat het woord betekent." },
            { titel: "Lees de uitleg", tekst: "Na de dubbele punt staat: 'piepkleine visjes die lichtjes afgeven in het donkere water'. Dat ís de betekenis — de schrijver geeft hem cadeau." },
          ],
          woorden: [
            { woord: "context", uitleg: "De tekst RONDOM een woord. De zinnen ervoor en erna geven vaak de betekenis weg." },
            { woord: "dubbele punt", uitleg: "Het leesteken (:). Kondigt vaak een uitleg, opsomming of citaat aan." },
          ],
          theorie: "**Truc 1: de zin eromheen legt het uit.**\n\nSchrijvers weten dat lezers niet elk woord kennen. Daarom leggen ze moeilijke woorden vaak meteen uit. Let op deze signalen:\n- een dubbele punt (:)\n- een gedachtestreepje (—)\n- haakjes ( )\n- 'dat betekent...', 'oftewel...', 'met andere woorden...'\n\nStaat zo'n signaal bij het woord? Dan is de uitleg al gegeven — je hoeft hem alleen te vinden.",
          voorbeelden: [
            { type: "dubbele punt", tekst: "'De kameleon is een meester in camouflage: hij neemt de kleur van zijn omgeving aan.' → camouflage = je kleur aanpassen zodat je niet opvalt." },
            { type: "streepje", tekst: "'Het was een hachelijke tocht — gevaarlijk en vol risico's.' → hachelijk = gevaarlijk." },
          ],
          basiskennis: [
            { onderwerp: "Verzonnen woorden op een toets?", uitleg: "Op de echte toets zijn de woorden niet verzonnen, maar wél vaak onbekend. De aanpak is precies hetzelfde: niet raden uit je hoofd, maar zoeken in de tekst." },
          ],
          niveaus: {
            basis: "Na de dubbele punt staat de uitleg van het woord. Lees dat stukje nog eens.",
            simpeler: "Een dubbele punt (:) is een pijl die zegt: 'hier komt de uitleg'. Lees wat er direct achter staat en vergelijk dat met de antwoorden.",
            nogSimpeler: "De uitleg staat direct achter de dubbele punt — welk antwoord zegt hetzelfde?",
          },
        },
      },
      {
        // Truc 2 — voorbeeld/opsomming
        q: "Lees: *\"Oma bewaart op zolder allerlei snuisterijen, zoals oude knopen, kralen en kleine beeldjes.\"* — Wat zijn 'snuisterijen'?",
        options: [
          "Kleine spulletjes zonder veel waarde",
          "Dure sieraden van goud en zilver",
          "Kledingstukken van vroeger",
          "Gereedschap voor in de tuin",
        ],
        answer: 0,
        evidence: "zoals oude knopen, kralen en kleine beeldjes",
        wrongHints: [
          null,
          "Kijk naar de voorbeelden na 'zoals' — zijn oude knopen en kraaltjes duur?",
          "Staat er ergens een kledingstuk in het rijtje voorbeelden?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het signaalwoord", tekst: "In de zin staat 'zoals'. Dat woord kondigt VOORBEELDEN aan van het moeilijke woord. De voorbeelden vertellen je wat voor soort ding het is." },
            { titel: "Bekijk de voorbeelden", tekst: "De voorbeelden zijn: oude knopen, kralen en kleine beeldjes. Wat hebben die drie gemeen? Ze zijn klein, niet duur, en je bewaart ze meer voor de leuk dan omdat je ze nodig hebt." },
            { titel: "Kies wat bij álle voorbeelden past", tekst: "Het juiste antwoord moet kloppen voor knopen ÉN kralen ÉN beeldjes tegelijk. Toets elk antwoord daaraan." },
          ],
          woorden: [
            { woord: "opsomming", uitleg: "Een rijtje dingen achter elkaar, vaak met komma's: 'knopen, kralen en beeldjes'." },
            { woord: "signaalwoord", uitleg: "Een woord dat je vertelt wat er komt. 'Zoals' en 'bijvoorbeeld' kondigen voorbeelden aan." },
          ],
          theorie: "**Truc 2: zoek een voorbeeld of opsomming.**\n\nSignaalwoorden voor voorbeelden:\n- zoals\n- bijvoorbeeld\n- denk aan\n- onder andere\n\nDe voorbeelden zijn kleine 'kinderen' van het moeilijke woord. Vraag jezelf af: wat hebben alle voorbeelden gemeen? Dat gemeenschappelijke is de betekenis van het woord.",
          voorbeelden: [
            { type: "zoals", tekst: "'In de vijver leven allerlei amfibieën, zoals kikkers, padden en salamanders.' → amfibieën = dieren zoals kikkers en padden." },
            { type: "bijvoorbeeld", tekst: "'Je kunt op veel manieren communiceren, bijvoorbeeld door te praten, te schrijven of gebaren te maken.' → communiceren = een boodschap overbrengen." },
          ],
          basiskennis: [
            { onderwerp: "Alle voorbeelden moeten passen", uitleg: "Een antwoord dat maar bij één voorbeeld past, is een valstrik. De betekenis moet kloppen voor het hele rijtje." },
          ],
          niveaus: {
            basis: "Het woord 'zoals' geeft voorbeelden. Wat hebben oude knopen, kralen en beeldjes met elkaar gemeen?",
            simpeler: "Stel je de zolder van oma voor: een doos met knopen, kraaltjes en beeldjes. Zijn dat grote, dure dingen — of kleine dingetjes? Kies het antwoord dat daarbij past.",
            nogSimpeler: "Denk aan de drie voorbeelden tegelijk: groot of klein, duur of niet?",
          },
        },
      },
      {
        // Truc 3 — tegenstelling
        q: "Lees: *\"Mijn broer is meestal heel spraakzaam, maar vandaag zei hij juist bijna niets.\"* — Wat betekent 'spraakzaam'?",
        options: [
          "Graag en veel pratend",
          "Zacht en onduidelijk pratend",
          "Verlegen en stil",
          "Altijd vragen stellend",
        ],
        answer: 0,
        evidence: "maar vandaag zei hij juist bijna niets",
        wrongHints: [
          null,
          "Het gaat niet om HOE hij praat, maar om hoevéél. Wat is het omgekeerde van 'bijna niets zeggen'?",
          "Let op het woord 'maar' — dat draait de zin juist om. Als hij vandaag stil is, hoe is hij dan meestal?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het draai-woord", tekst: "In de zin staat 'maar' én 'juist'. Die woorden zeggen: nu komt het TEGENOVERGESTELDE van wat eerst gezegd werd." },
            { titel: "Wat is het tegenovergestelde?", tekst: "Na 'maar' staat: 'vandaag zei hij juist bijna niets'. Dus 'spraakzaam' moet het omgekeerde zijn van 'bijna niets zeggen'." },
            { titel: "Draai het om", tekst: "Het omgekeerde van bijna niets zeggen is: veel zeggen, graag praten. Zoek het antwoord dat dat uitdrukt." },
          ],
          woorden: [
            { woord: "tegenstelling", uitleg: "Twee dingen die elkaars omgekeerde zijn, zoals stil en druk, of licht en donker." },
            { woord: "maar / juist / toch", uitleg: "Signaalwoorden die een tegenstelling aankondigen: wat nu komt, is anders dan wat eerst stond." },
          ],
          theorie: "**Truc 3: let op de tegenstelling.**\n\nSignaalwoorden: *maar, juist, toch, echter, terwijl, in tegenstelling tot*.\n\nZie je zo'n woord bij het moeilijke woord? Dan geldt: het moeilijke woord betekent (ongeveer) het OMGEKEERDE van wat aan de andere kant van het signaalwoord staat.\n\nDenk-stappen:\n1. Vind het signaalwoord.\n2. Lees wat aan de andere kant staat.\n3. Draai dat om — dát is je betekenis.",
          voorbeelden: [
            { type: "maar", tekst: "'Het huisje zag er armoedig uit, maar vanbinnen was het juist prachtig.' → armoedig = niet mooi, versleten (omgekeerde van prachtig)." },
            { type: "terwijl", tekst: "'Lex bleef kalm, terwijl iedereen om hem heen in paniek raakte.' → kalm = rustig (omgekeerde van paniek)." },
          ],
          basiskennis: [
            { onderwerp: "'Juist' als versterker", uitleg: "Het woordje 'juist' maakt een tegenstelling extra sterk: 'hij zei juist bijna niets' benadrukt dat dit anders is dan normaal." },
          ],
          niveaus: {
            basis: "Het woord 'maar' draait de zin om. Vandaag: bijna niets zeggen. Meestal dus: het omgekeerde.",
            simpeler: "De zin vertelt: vandaag is hij stil, en dat is GEK, want normaal is hij anders. Hoe is iemand die het omgekeerde van stil is?",
            nogSimpeler: "Wat is het tegenovergestelde van 'bijna niets zeggen'?",
          },
        },
      },
      {
        // Truc 4 — woord uit elkaar halen
        q: "Lees: *\"Het briefje was zo nat geworden dat het onleesbaar was.\"* — Wat betekent 'onleesbaar'?",
        options: [
          "Niet meer te lezen",
          "Heel kort geschreven",
          "Zonder plaatjes",
          "In een geheimtaal geschreven",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Haal het woord uit elkaar: on + lees + baar. Waar zie je 'kort' in die stukjes?",
          null,
          "Het briefje was gewoon geschreven — het probleem kwam pas door het water. Wat doet water met inkt?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Knip het woord in stukjes", tekst: "onleesbaar = ON + LEES + BAAR. Drie stukjes die je alle drie kent!" },
            { titel: "Wat betekent elk stukje?", tekst: "ON- betekent 'niet' (zoals in oneerlijk = niet eerlijk). LEES komt van lezen. -BAAR betekent 'het kan' (zoals in eetbaar = je kunt het eten)." },
            { titel: "Plak de betekenis weer aan elkaar", tekst: "Niet + lezen + kunnen = het kan niet gelezen worden. Check met de zin: een doorweekt briefje met uitgelopen inkt — klopt precies." },
          ],
          woorden: [
            { woord: "voorvoegsel", uitleg: "Een stukje vóór een woord dat de betekenis verandert. 'On-' betekent 'niet': onhandig, onzichtbaar, oneerlijk." },
            { woord: "achtervoegsel", uitleg: "Een stukje achter een woord. '-baar' betekent 'het kan': draagbaar, drinkbaar, breekbaar." },
            { woord: "samenstelling", uitleg: "Twee woorden aan elkaar geplakt: voetbal, zeepaardje, boekenkast. Elk stukje ken je vaak al." },
          ],
          theorie: "**Truc 4: haal het woord uit elkaar.**\n\nLange woorden zijn vaak bouwpakketten van stukjes die je kent:\n- **Voorvoegsels**: on- (niet), her- (opnieuw), samen- (met elkaar)\n- **Achtervoegsels**: -baar (het kan), -loos (zonder: draadloos), -vol (met veel: waardevol)\n- **Samenstellingen**: twee bekende woorden aan elkaar (regen + jas)\n\nKen je elk stukje? Dan ken je het hele woord. Check daarna altijd even of je betekenis in de zin past.",
          voorbeelden: [
            { type: "voorvoegsel", tekst: "herbouwen = her (opnieuw) + bouwen → opnieuw bouwen." },
            { type: "achtervoegsel", tekst: "waterdicht, roerloos, breekbaar: -loos = zonder, -baar = het kan. Roerloos = zonder te bewegen." },
          ],
          basiskennis: [
            { onderwerp: "Altijd even checken in de zin", uitleg: "Uit elkaar halen geeft een eerste gok. Lees daarna de zin nog een keer met jouw betekenis erin — past het? Dan zit je goed." },
          ],
          niveaus: {
            basis: "on + lees + baar: 'on-' betekent niet, '-baar' betekent 'het kan'. Plak dat aan elkaar.",
            simpeler: "Denk aan woorden die je al kent: oneerlijk = niet eerlijk. Eetbaar = je kunt het eten. Doe nu hetzelfde met on-lees-baar.",
            nogSimpeler: "Wat gebeurt er met de letters van een briefje dat kletsnat wordt?",
          },
        },
      },
    ],
  },

  // ── Stap 2: oefentekst diepzee ────────────────────────────────────
  {
    title: "Oefentekst — leven in de diepzee",
    explanation: tekstDiepzee + "\n\n*In deze tekst staan vijf lastige woorden. Gebruik de vier trucs uit stap 1: kijk om het woord heen, zoek voorbeelden, let op tegenstellingen, of haal het woord uit elkaar. Beantwoord de 5 vragen.*",
    checks: [
      {
        q: "Wat betekent *'het krioelt er van het leven'* in deze tekst?",
        options: [
          "Er is heel veel leven, overal wemelt het van de dieren",
          "Het leven is er gevaarlijk",
          "De dieren maken er veel geluid",
          "Er is bijna geen leven te vinden",
        ],
        answer: 0,
        evidence: "Overal zwemmen, kruipen en zweven dieren die je nergens anders op aarde vindt.",
        wrongHints: [
          null,
          "De zin ervoor zegt 'de diepzee is niet leeg'. Gaat het hier om gevaar, of om hoevéél er leeft?",
          null,
          "Lees de zin ervoor: 'Toch is de diepzee niet leeg.' Past 'bijna geen leven' daarbij?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk vóór en ná het woord", tekst: "Ervoor staat: 'de diepzee is niet leeg'. Erna staat: 'Overal zwemmen, kruipen en zweven dieren'. Beide zinnen wijzen dezelfde kant op." },
            { titel: "Wat vertellen die zinnen samen?", tekst: "Niet leeg + overal dieren = er leeft daar ontzettend veel. 'Krioelen' beschrijft dat wemelende, drukke bewegen van heel veel diertjes bij elkaar." },
          ],
          woorden: [
            { woord: "krioelen", uitleg: "Druk door elkaar bewegen van heel veel dieren of mensen. Denk aan een mierenhoop." },
            { woord: "wemelen", uitleg: "Bijna hetzelfde als krioelen: het is er stampvol met bewegende wezentjes." },
          ],
          theorie: "**Truc 1 in het echt**: de betekenis staat niet in het woord zelf, maar in de zinnen eromheen. Hier helpen zelfs TWEE zinnen: de zin ervoor ('niet leeg') en de zin erna ('overal dieren'). Lees bij een woordbetekenis-vraag dus altijd minstens één zin vóór en één zin ná het woord.",
          voorbeelden: [
            { type: "context", tekst: "'Op het schoolplein krioelde het van de kinderen.' Je ziet het voor je: honderden kinderen door elkaar. Zelfde beeld als de diepzee vol dieren." },
          ],
          basiskennis: [
            { onderwerp: "Toch = let op", uitleg: "De tekst zegt: donker en diep, TOCH niet leeg. Het woord 'toch' waarschuwt: nu komt iets verrassends — juist veel leven." },
          ],
          niveaus: {
            basis: "Lees de zin vóór en de zin ná 'krioelt'. Beide vertellen hoeveel er leeft.",
            simpeler: "De tekst zegt eerst 'niet leeg' en daarna 'overal dieren'. Is dat weinig leven of juist heel veel?",
            nogSimpeler: "Denk aan een mierenhoop: wat doet die?",
          },
        },
      },
      {
        q: "Wat betekent *'bioluminescentie'* in deze tekst?",
        options: [
          "Een dier geeft zelf licht met zijn lichaam",
          "Een dier kan in het donker zien",
          "Een dier verandert van kleur",
          "Een dier leeft zonder zonlicht",
        ],
        answer: 0,
        evidence: "het lichaam van het dier geeft zelf een gloed af, zoals een lampje",
        wrongHints: [
          null,
          "Zien en licht géven is niet hetzelfde. Wat staat er precies na de dubbele punt?",
          "Over kleuren zegt de tekst niets. Zoek de uitleg direct achter het woord.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de dubbele punt", tekst: "'Dat heet bioluminescentie: het lichaam van het dier geeft zelf een gloed af, zoals een lampje.' De schrijver legt het woord meteen uit — na de dubbele punt." },
            { titel: "Vergelijk met de antwoorden", tekst: "'Zelf een gloed afgeven' = zelf licht maken. Zoek het antwoord dat precies dat zegt, en niets anders." },
          ],
          woorden: [
            { woord: "gloed", uitleg: "Een zacht, warm licht. Zoals de laatste oranje streep van een kampvuur." },
            { woord: "hengelvis", uitleg: "Een diepzeevis met een lichtgevend 'hengeltje' op zijn kop om prooi te lokken." },
          ],
          theorie: "**Wetenschappelijke woorden = bijna altijd truc 1.** Schrijvers weten dat lezers woorden als 'bioluminescentie' niet kennen. Daarom volgt er vrijwel altijd direct een uitleg: na een dubbele punt, tussen haakjes, of met 'dat betekent'. Op de Doorstroomtoets is het moeilijkste woord vaak het makkelijkst — omdat de uitleg ernaast staat.",
          voorbeelden: [
            { type: "zelfde patroon", tekst: "'Sommige dieren houden een winterslaap: ze slapen maandenlang om de koude tijd door te komen.' → uitleg direct na de dubbele punt." },
          ],
          basiskennis: [
            { onderwerp: "Precies lezen wint", uitleg: "Meerdere antwoorden klinken logisch bij de diepzee (donker, zonder zonlicht). Maar de vraag is wat DIT woord betekent — en dat staat woordelijk in de tekst." },
          ],
          niveaus: {
            basis: "De uitleg staat direct na de dubbele punt: 'het lichaam geeft zelf een gloed af'.",
            simpeler: "Lees de zin met 'bioluminescentie' hardop tot het einde. De tekst vergelijkt het met een lampje. Wat dóét een lampje?",
            nogSimpeler: "Wat doet een lampje — zien of schijnen?",
          },
        },
      },
      {
        q: "Wat betekent *'lokaas'* in deze tekst?",
        options: [
          "Iets waarmee je een prooi naar je toe lokt",
          "Het voedsel dat de hengelvis zelf eet",
          "Een lamp om de weg te vinden",
          "Een schuilplaats voor kleine visjes",
        ],
        answer: 0,
        evidence: "Kleine visjes zwemmen nieuwsgierig op het lichtje af — en worden opgegeten.",
        wrongHints: [
          null,
          "Wie eet hier wie op? Lees de zin erna nog eens goed.",
          "Waarvoor gebruikt de hengelvis het lichtje volgens de zin erna — om zelf te zien, of om iets ánders te laten komen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Haal het woord uit elkaar", tekst: "lokaas = LOK + AAS. 'Lokken' = iets naar je toe laten komen. 'Aas' = voer om dieren mee te vangen (denk aan een worm aan een vishaak)." },
            { titel: "Check met de zin erna", tekst: "'Kleine visjes zwemmen nieuwsgierig op het lichtje af — en worden opgegeten.' Het lichtje trekt de visjes dus aan, en dan slaat de hengelvis toe. Precies wat lokaas doet." },
          ],
          woorden: [
            { woord: "lokken", uitleg: "Iets of iemand naar je toe laten komen, vaak met een slim trucje." },
            { woord: "aas", uitleg: "Voer waarmee je een dier vangt, zoals een worm aan een vishengel." },
            { woord: "prooi", uitleg: "Het dier dat gevangen en opgegeten wordt." },
          ],
          theorie: "**Twee trucs tegelijk gebruiken maakt je zeker van je zaak.**\n\n1. Truc 4 (uit elkaar halen): lok + aas → iets om mee te lokken.\n2. Truc 1 (zin erna): de visjes komen op het lichtje af en worden opgegeten.\n\nAls twee trucs hetzelfde antwoord geven, weet je het zeker. Gebruik op de toets gerust beide als je twijfelt.",
          voorbeelden: [
            { type: "vergelijking", tekst: "Een visser hangt een worm aan zijn haak; de hengelvis hangt een lichtje boven zijn bek. Allebei lokaas — daarom heet die vis ook hengelvis!" },
          ],
          basiskennis: [
            { onderwerp: "Het streepje (—)", uitleg: "Het gedachtestreepje voor 'en worden opgegeten' geeft de verrassende afloop. Zulke staartjes van een zin verklappen vaak de betekenis." },
          ],
          niveaus: {
            basis: "Knip het woord: lok + aas. En lees wat er met de nieuwsgierige visjes gebeurt.",
            simpeler: "Waarom hangt een visser een worm aan zijn haak? Om vissen te laten bijten. De hengelvis doet hetzelfde, maar dan met een lichtje.",
            nogSimpeler: "Het lichtje laat de visjes dichterbij komen — waarvoor?",
          },
        },
      },
      {
        q: "Wat betekent *'onherbergzaam'* in deze tekst?",
        options: [
          "Een plek waar je nauwelijks kunt leven",
          "Een plek zonder bergen",
          "Een plek waar het altijd nacht is",
          "Een plek die nog niemand heeft ontdekt",
        ],
        answer: 0,
        evidence: "het is er ijskoud, pikdonker en de druk van het water is enorm. Een mens zou er zonder speciale duikboot geen minuut overleven.",
        wrongHints: [
          null,
          "Er zit wel 'berg' in het woord, maar kijk naar de opsomming erna: gaat die over bergen?",
          "Donker is maar één van de drie dingen in de opsomming. Welk antwoord dekt ze alle drie?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de opsomming", tekst: "Na de dubbele punt volgt een rijtje: ijskoud, pikdonker, enorme druk. Drie voorbeelden van hoe het er is (truc 2)." },
            { titel: "Wat hebben ze gemeen?", tekst: "Alle drie maken het er vreselijk om te zijn. En de zin erna bevestigt het: een mens overleeft er geen minuut. Onherbergzaam = een plek waar je bijna niet kunt (over)leven." },
            { titel: "Pas op voor de woord-valstrik", tekst: "Je ziet 'berg' in het woord staan, maar het komt van 'herberg' — een plek waar je kunt slapen en eten. ONherbergzaam = een plek die je juist níét welkom heet." },
          ],
          woorden: [
            { woord: "herberg", uitleg: "Een ouderwets woord voor een hotelletje: een plek waar reizigers eten en slapen." },
            { woord: "druk (van water)", uitleg: "Hoe hard het water van alle kanten duwt. Hoe dieper, hoe harder het duwt." },
          ],
          theorie: "**Als uit elkaar halen misleidt, wint de context.** Truc 4 kan je op het verkeerde been zetten: 'berg' in 'onherbergzaam' heeft niets met bergen te maken. Daarom is de gouden regel: de context (trucs 1-3) heeft altijd het laatste woord. Klopt jouw uit-elkaar-haal-gok niet met de zinnen eromheen? Vertrouw dan de zinnen.",
          voorbeelden: [
            { type: "zelfde soort plek", tekst: "De Sahara en de Zuidpool zijn ook onherbergzaam: veel te heet of veel te koud om zomaar te overleven." },
          ],
          basiskennis: [
            { onderwerp: "Deel-antwoorden zijn valstrikken", uitleg: "'Altijd donker' klopt óók over de diepzee — maar het is maar een stukje van het verhaal. Kies het antwoord dat de héle uitleg dekt, niet één detail." },
          ],
          niveaus: {
            basis: "Kijk naar het rijtje na de dubbele punt: ijskoud, pikdonker, enorme druk. Wat zegt dat over leven daar?",
            simpeler: "De tekst zegt zelf: een mens overleeft er geen minuut. Welk antwoord past bij zo'n plek?",
            nogSimpeler: "IJskoud + pikdonker + enorme druk: fijn om te wonen, of juist bijna niet te doen?",
          },
        },
      },
      {
        q: "Wat betekent *'een fractie'* in deze tekst?",
        options: [
          "Een klein deel van het geheel",
          "Een groep onderzoekers",
          "Een nieuwe diersoort",
          "Een heel nauwkeurige meting",
        ],
        answer: 0,
        evidence: "misschien maar één op de tien",
        wrongHints: [
          null,
          "Onderzoekers komen in de zin voor, maar zij 'kennen een fractie' — kan een fractie dan zelf een groep mensen zijn?",
          null,
          "Lees wat er na de dubbele punt staat: 'misschien maar één op de tien'. Gaat dat over meten, of over hoevéél?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de uitleg na de dubbele punt", tekst: "'...pas een fractie van alle diepzeedieren kennen: misschien maar één op de tien.' De dubbele punt geeft de betekenis: één op de tien." },
            { titel: "Is één op de tien veel of weinig?", tekst: "Stel je tien diepzeedieren voor. We kennen er maar één. Dat is een klein stukje van het geheel — een fractie dus." },
          ],
          woorden: [
            { woord: "fractie", uitleg: "Een klein deel van iets groters. 'Een fractie van een seconde' = een piepklein stukje van een seconde." },
            { woord: "één op de tien", uitleg: "Van elke tien is er maar één. Hetzelfde als een tiende deel, of 10 procent." },
          ],
          theorie: "**Ook getallen kunnen de uitleg zijn.** Na een dubbele punt staat niet altijd een zin — soms staat er een getal of verhouding ('één op de tien'). Dat getal vertelt je dan hoe groot of klein iets is. Vraag jezelf altijd af: is dit veel of weinig vergeleken met het geheel?",
          voorbeelden: [
            { type: "dagelijks", tekst: "'Ik hoorde maar een fractie van het gesprek' = ik ving maar een paar woorden op, niet het hele gesprek." },
          ],
          basiskennis: [
            { onderwerp: "Woordje 'pas' en 'maar'", uitleg: "De tekst zegt 'PAS een fractie' en 'misschien MAAR één op de tien'. Die kleine woordjes benadrukken: het is weinig." },
          ],
          niveaus: {
            basis: "Na de dubbele punt staat 'misschien maar één op de tien'. Dat is de uitleg van 'fractie'.",
            simpeler: "Leg tien snoepjes op tafel en pak er één. Heb je dan veel of weinig van het geheel? Zo veel kennen we van de diepzeedieren.",
            nogSimpeler: "Eén van de tien: is dat bijna alles, of een klein stukje?",
          },
        },
      },
    ],
  },

  // ── Stap 3: meerdere betekenissen ─────────────────────────────────
  {
    title: "Eén woord, meerdere betekenissen",
    explanation: `Nu wordt het spannend: sommige woorden hebben **meerdere betekenissen**. Een *bank* kan een zitmeubel zijn, maar ook een bedrijf waar je geld bewaart. Een *blad* kan aan een boom hangen, maar ook in je schrift zitten. Welke betekenis geldt? Dat bepaalt de tekst!

Daarom vraagt de Doorstroomtoets altijd: *"Wat betekent 'X' **in deze tekst**?"* Die laatste drie woorden zijn geen versiering — ze zijn de kern van de vraag. Je moet niet kiezen wat het woord *kan* betekenen, maar wat het *hier* betekent.

De aanpak:

1. **Bedenk welke betekenissen je kent.** Bank: zitmeubel óf geldbedrijf.
2. **Vul elke betekenis in de zin in.** "Papa zet zijn geld op het zitmeubel"? Dat klinkt raar. "Papa zet zijn geld bij het geldbedrijf"? Dat klopt!
3. **Kies de betekenis die past bij de rest van de zin.** Woorden om het woord heen (geld, betalen, bomen, schrift) wijzen je de weg.

Let op: de toetsenmakers zetten de *andere* betekenis vaak tussen de antwoorden als valstrik. Wie te snel kiest, trapt erin. Wie eerst de zin checkt, niet. Probeer het maar met de vier vragen hieronder.`,
    checks: [
      {
        q: "Lees: *\"Papa zet elke maand een deel van zijn geld op de bank, zodat het veilig bewaard blijft.\"* — Wat betekent 'bank' in deze zin?",
        options: [
          "Een bedrijf waar je geld kunt bewaren",
          "Een meubel waar je op zit",
          "Een ondiepe plek in zee",
          "Een lange tafel in een werkplaats",
        ],
        answer: 0,
        evidence: "zet elke maand een deel van zijn geld op de bank, zodat het veilig bewaard blijft",
        wrongHints: [
          null,
          "Zou geld op een zitmeubel 'veilig bewaard' blijven? Kijk naar de woorden om 'bank' heen.",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welke betekenissen ken je?", tekst: "'Bank' kan zijn: (1) een zitmeubel in de woonkamer, (2) een bedrijf waar je geld bewaart, (3) een zandbank in zee. Allemaal echt bestaande betekenissen!" },
            { titel: "Vul ze in de zin in", tekst: "'Geld op het zitmeubel zetten zodat het veilig blijft'? Iedereen kan het daar pakken — niet veilig. 'Geld bij het geldbedrijf zetten'? Dat is precies waarvoor zo'n bedrijf bestaat." },
            { titel: "Kijk naar de buurwoorden", tekst: "De woorden 'geld', 'elke maand' en 'veilig bewaard' horen bij geldzaken. De zin kiest dus de geld-betekenis." },
          ],
          woorden: [
            { woord: "meerdere betekenissen", uitleg: "Eén woord dat verschillende dingen kan betekenen. Welke geldt, bepaalt de zin eromheen." },
            { woord: "buurwoorden", uitleg: "De woorden vlak om het woord heen. Zij verklappen welke betekenis bedoeld is." },
          ],
          theorie: "**De invul-truc voor woorden met meerdere betekenissen:**\n\n1. Noem voor jezelf de betekenissen die je kent.\n2. Vul ze één voor één in de zin in.\n3. De betekenis waarbij de zin logisch blijft, is de juiste.\n\nDe toetsenmakers zetten de andere betekenis er bijna altijd als valstrik tussen. Wie de zin niet terugleest, kiest die per ongeluk.",
          voorbeelden: [
            { type: "andere zin, andere betekenis", tekst: "'Na het voetballen plofte Jip op de bank voor de televisie.' Hier wijzen 'ploffen' en 'televisie' naar het zitmeubel — zelfde woord, andere tekst, andere betekenis." },
          ],
          basiskennis: [
            { onderwerp: "In deze tekst!", uitleg: "De vraag is nooit 'wat kan bank betekenen' maar 'wat betekent bank HIER'. Lees dus altijd de zin terug voordat je kiest." },
          ],
          niveaus: {
            basis: "Vul beide betekenissen in: bij welke blijft de zin logisch?",
            simpeler: "De zin gaat over geld dat veilig bewaard moet worden. Welke soort 'bank' is daarvoor bedoeld — die in de woonkamer of die met kluizen?",
            nogSimpeler: "Waar breng je geld heen om het veilig te bewaren?",
          },
        },
      },
      {
        q: "Lees: *\"De veertjes van het kuiken zijn zo licht dat je ze nauwelijks in je hand voelt.\"* — Wat betekent 'licht' in deze zin?",
        options: [
          "Bijna niets wegend",
          "Helder, niet donker",
          "Een lamp die schijnt",
          "Gemakkelijk, niet moeilijk",
        ],
        answer: 0,
        evidence: "zo licht dat je ze nauwelijks in je hand voelt",
        wrongHints: [
          null,
          "Gaat de zin over kleur en donker, of over voelen en gewicht? Lees het stuk na 'zo licht dat...'.",
          null,
          "Een 'lichte som' bestaat, maar kun je een veertje 'moeilijk of makkelijk' in je hand voelen? Wat vertelt het woord 'voelt'?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welke betekenissen heeft 'licht'?", tekst: "Minstens drie: (1) weinig wegend (een lichte tas), (2) helder (een lichte kamer), (3) makkelijk (een lichte opgave). En als zelfstandig naamwoord: het licht van een lamp." },
            { titel: "Lees het vervolg van de zin", tekst: "'...dat je ze nauwelijks in je hand VOELT.' Voelen hoort bij gewicht, niet bij helderheid of moeilijkheid." },
            { titel: "Kies de gewicht-betekenis", tekst: "Veertjes die je nauwelijks voelt, wegen bijna niets. 'Licht' betekent hier dus: bijna niets wegend." },
          ],
          woorden: [
            { woord: "nauwelijks", uitleg: "Bijna niet. 'Je voelt ze nauwelijks' = je voelt ze bijna niet." },
            { woord: "gewicht", uitleg: "Hoe zwaar iets is. Licht en zwaar zijn elkaars tegenpolen." },
          ],
          theorie: "**Het vervolg van de zin kiest de betekenis.** Bij 'zo ... dat ...' legt het stuk na 'dat' uit wat er bedoeld wordt: 'zo licht dat je ze nauwelijks voelt' → het gaat om gewicht. Had er gestaan 'zo licht dat je geen lamp nodig had', dan ging het om helderheid. Lees dus altijd de héle zin, niet alleen het woord.",
          voorbeelden: [
            { type: "drie keer 'licht'", tekst: "'Een lichte rugzak' (gewicht) — 'een lichte zomerjurk van lichte stof' (kan allebei!) — 'het werd al licht buiten' (helderheid). De rest van de zin maakt het verschil." },
          ],
          basiskennis: [
            { onderwerp: "'Zo ... dat ...'", uitleg: "Deze zinsbouw geeft altijd een gevolg: zo koud dat het vroor, zo moe dat ze in slaap viel. Het gevolg verraadt de betekenis." },
          ],
          niveaus: {
            basis: "Lees wat er na 'zo licht dat' komt: je voelt ze nauwelijks in je hand. Waar gaat dat over?",
            simpeler: "Leg in gedachten een veertje op je hand. Merk je daar iets van? Dat komt door het gewicht — of eigenlijk: het gebrek eraan.",
            nogSimpeler: "Voelen in je hand — gaat dat over kleur of over gewicht?",
          },
        },
      },
      {
        q: "Lees: *\"Noor pakte een leeg blad uit haar schrift en begon aan haar tekening.\"* — Wat betekent 'blad' in deze zin?",
        options: [
          "Een vel papier",
          "Het groene deel van een plant",
          "Een tijdschrift",
          "Het platte deel van een roeispaan",
        ],
        answer: 0,
        evidence: "een leeg blad uit haar schrift",
        wrongHints: [
          null,
          "Groeit er een plant in een schrift? Kijk waar het blad vandaan komt.",
          "Een tijdschrift is een 'blad' dat je koopt — maar haal je dat uit een schrift?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welke betekenissen heeft 'blad'?", tekst: "(1) Een boomblad of plantenblad, (2) een vel papier, (3) een tijdschrift ('een blad lezen'), (4) het blad van een zaag of roeispaan. Vier heel verschillende dingen!" },
            { titel: "Zoek de buurwoorden", tekst: "'...uit haar SCHRIFT en begon aan haar TEKENING.' Schrift en tekening horen bij papier. Een blad uit een schrift = een vel papier." },
            { titel: "Check het woord 'leeg'", tekst: "Een 'leeg' blad = er staat nog niets op. Dat zeg je van papier, niet van een boomblad. Alles wijst dezelfde kant op." },
          ],
          woorden: [
            { woord: "vel", uitleg: "Eén los stuk papier. 'Pak een vel' en 'pak een blad' betekenen bij papier hetzelfde." },
            { woord: "leeg blad", uitleg: "Papier waar nog niets op geschreven of getekend is." },
          ],
          theorie: "**Meerdere aanwijzingen = extra zeker.** Hier wijzen drie buurwoorden naar papier: 'leeg', 'schrift' en 'tekening'. Op de toets hoef je niet te gokken — tel de aanwijzingen. Wijzen ze allemaal dezelfde kant op? Dan is dat je antwoord. Wijst er ééntje een andere kant op? Lees dan nog een keer.",
          voorbeelden: [
            { type: "zelfde woord, andere tekst", tekst: "'In oktober kleurt het blad van de eik bruin.' Buurwoorden 'oktober' en 'eik' → hier is het opeens een boomblad." },
          ],
          basiskennis: [
            { onderwerp: "Vaste combinaties", uitleg: "Sommige woorden komen vaak samen voor: blad + schrift = papier, blad + boom = plant. Zulke duo's herkennen maakt je razendsnel." },
          ],
          niveaus: {
            basis: "Kijk waar het blad vandaan komt en wat Noor ermee gaat doen.",
            simpeler: "Noor haalt het blad uit haar schrift en gaat erop tekenen. Op welke soort 'blad' kun je tekenen?",
            nogSimpeler: "Wat zit er in een schrift?",
          },
        },
      },
      {
        q: "Lees: *\"Boven het krantenartikel stond in dikke letters de kop: 'Storm op komst!'\"* — Wat betekent 'kop' in deze zin?",
        options: [
          "De titel boven een tekst",
          "Het hoofd van een dier",
          "Een beker om uit te drinken",
          "De voorkant van een trein",
        ],
        answer: 0,
        evidence: "Boven het krantenartikel stond in dikke letters de kop",
        wrongHints: [
          null,
          null,
          "Uit een kop kún je drinken — maar staat er iets over drinken in deze zin? Kijk naar 'krantenartikel' en 'dikke letters'.",
          "Een trein heeft een kop, maar rijdt hier ergens een trein? Wat staat er bóven het artikel?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welke betekenissen heeft 'kop'?", tekst: "(1) Het hoofd van een dier, (2) een drinkbeker, (3) de titel van een krantenbericht, (4) de voorkant van iets ('de kop van de trein'). " },
            { titel: "Zoek de buurwoorden", tekst: "'Krantenartikel', 'in dikke letters', 'boven'. Alles gaat over een krant. De kop van een krantenbericht = de titel in grote letters." },
            { titel: "Onthoud deze voor de toets", tekst: "Deze betekenis komt vaak terug op de Doorstroomtoets, want die gaat over teksten: 'Wat staat er in de kop?' betekent altijd: wat staat er in de titel." },
          ],
          woorden: [
            { woord: "kop (van een tekst)", uitleg: "De titel boven een krantenbericht of hoofdstuk, meestal in grote of dikke letters." },
            { woord: "artikel", uitleg: "Een stuk tekst in een krant of tijdschrift over één onderwerp." },
          ],
          theorie: "**Toets-taal kennen loont.** Woorden over teksten hebben op de Doorstroomtoets vaak hun 'tekst-betekenis': kop = titel, blad = pagina of tijdschrift, regel = één geschreven lijn, stuk = artikel. Zie je zo'n woord in een vraag over een tekst? Denk dan eerst aan de tekst-betekenis — en check hem daarna gewoon in de zin.",
          voorbeelden: [
            { type: "toets-vraag", tekst: "'Waarom past de kop goed bij deze tekst?' = waarom is deze TITEL goed gekozen? Wie aan een drinkbeker denkt, begrijpt de hele vraag verkeerd." },
          ],
          basiskennis: [
            { onderwerp: "Waarom 'kop'?", uitleg: "Net als bij een mens zit de kop van een tekst bovenaan. Zo kun je het onthouden: de titel is het hoofd van het bericht." },
          ],
          niveaus: {
            basis: "De buurwoorden zijn 'krantenartikel', 'dikke letters' en 'boven'. Welke betekenis hoort daarbij?",
            simpeler: "Pak in gedachten een krant. Wat staat er in grote dikke letters bóven elk bericht?",
            nogSimpeler: "Wat staat er altijd bovenaan een krantenbericht?",
          },
        },
      },
    ],
  },

  // ── Stap 4: Doorstroomtoets-mix vulkanen ──────────────────────────
  {
    title: "Doorstroomtoets-mix — vulkanen",
    explanation: tekstVulkanen + "\n\n*Dit is de generale repetitie: vijf vragen precies zoals op de Doorstroomtoets. Gebruik alle vier de trucs door elkaar. Lees eerst de hele tekst, lees dan per vraag de zin met het woord nog één keer terug.*",
    checks: [
      {
        q: "Wat betekent *'magma'* in deze tekst?",
        options: [
          "Gesmolten gesteente diep onder de grond",
          "De rook die uit een vulkaan komt",
          "Een grote ruimte onder de vulkaan",
          "De as die na een uitbarsting neerdaalt",
        ],
        answer: 0,
        evidence: "Diep onder de grond is het zo heet dat steen er smelt. Dit gesmolten gesteente heet magma.",
        wrongHints: [
          null,
          null,
          "Die ruimte heeft een eigen naam in de tekst — de magmaKAMER. Wat zit erín?",
          "As komt pas bij de uitbarsting. Zoek de zin waarin het woord magma wordt uitgelegd.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de zin ervóór", tekst: "'Diep onder de grond is het zo heet dat steen er smelt. DIT gesmolten gesteente heet magma.' Het woordje 'dit' wijst terug naar de zin ervoor — daar staat de uitleg." },
            { titel: "Pas op voor de kamer-valstrik", tekst: "De magmakamer is de RUIMTE waarin het magma zit, niet het magma zelf. Zoals een slaapkamer niet hetzelfde is als de slaper." },
          ],
          woorden: [
            { woord: "gesteente", uitleg: "Steen, rots. 'Gesmolten gesteente' is steen die door hitte vloeibaar is geworden." },
            { woord: "verwijswoord", uitleg: "Een woord als 'dit', 'dat' of 'deze' dat terugwijst naar iets eerder in de tekst." },
          ],
          theorie: "**Uitleg via 'dit heet...'**. Een vast patroon in informatieve teksten: eerst wordt iets beschreven, daarna krijgt het een naam. 'Steen smelt... dit gesmolten gesteente heet magma.' De beschrijving vóór 'dit heet' is de betekenis. Zie je 'heet', 'noemen we' of 'wordt genoemd'? Kijk dan één zin terug.",
          voorbeelden: [
            { type: "zelfde patroon", tekst: "'Sommige vlinders reizen duizenden kilometers naar het zuiden. Deze reis heet de vlindertrek.' → vlindertrek = die lange reis naar het zuiden." },
          ],
          basiskennis: [
            { onderwerp: "Magma vs lava", uitleg: "De tekst legt het zelf uit: onder de grond heet het magma, boven de grond lava. 'Hetzelfde spul, maar met een andere naam.'" },
          ],
          niveaus: {
            basis: "Het woordje 'dit' in 'dit gesmolten gesteente' wijst naar de zin ervoor. Lees die zin.",
            simpeler: "De tekst vertelt eerst wat er diep onder de grond met steen gebeurt door de hitte — en geeft dat daarna een naam. Wat gebeurt er met die steen?",
            nogSimpeler: "Wat gebeurt er met steen als het véél te heet wordt?",
          },
        },
      },
      {
        q: "Wat betekent *'verwoestend'* in deze tekst?",
        options: [
          "Heel veel schade aanrichtend",
          "Luidruchtig en indrukwekkend",
          "Onverwacht en plotseling",
          "Kort maar hevig",
        ],
        answer: 0,
        evidence: "Dorpen in de buurt kunnen bedolven worden onder een dikke laag as en modder.",
        wrongHints: [
          null,
          "Over geluid zegt de tekst niets. Wat gebeurt er volgens de zin erna met de dorpen?",
          null,
          "Over hoe láng een uitbarsting duurt lees je niets. Kijk wat er met de omgeving gebeurt.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Haal het woord uit elkaar", tekst: "ver-WOEST-end. In het midden zie je 'woest' — denk aan een woestenij of iets wat verwoest is: kapot, kaal, vernield." },
            { titel: "Check met de zin erna", tekst: "'Dorpen kunnen bedolven worden onder as en modder.' Hele dorpen die verdwijnen — dat is enorme schade. Beide trucs geven hetzelfde antwoord." },
          ],
          woorden: [
            { woord: "verwoesten", uitleg: "Iets helemaal kapotmaken, vernielen. Een verwoeste stad is een stad in puin." },
            { woord: "schade", uitleg: "Wat er kapot of beschadigd is. Veel schade = veel kapot." },
          ],
          theorie: "**Het voorbeeld ná een bewering is vaak de uitleg.** De tekst zegt eerst iets algemeens ('een uitbarsting kan verwoestend zijn') en geeft daarna een concreet voorbeeld ('dorpen bedolven onder as en modder'). Dat voorbeeld laat zien wat het woord betekent. Bewering + voorbeeld is een vast duo in informatieve teksten — gebruik het voorbeeld als woordenboek.",
          voorbeelden: [
            { type: "bewering + voorbeeld", tekst: "'De reis was afmattend. Na drie dagen lopen konden ze geen stap meer zetten.' → afmattend = heel erg vermoeiend. Het voorbeeld verklapt het." },
          ],
          basiskennis: [
            { onderwerp: "Familie-woorden helpen", uitleg: "Ken je 'verwoesten' of 'woestijn'? Woorden uit dezelfde familie delen vaak een stukje betekenis: leeg, kaal, kapot." },
          ],
          niveaus: {
            basis: "Kijk in het woord: ver-woest-end. En lees wat er met de dorpen kan gebeuren.",
            simpeler: "De zin erna vertelt het gevolg: hele dorpen verdwijnen onder as en modder. Wat zegt dat over hoeveel er kapotgaat?",
            nogSimpeler: "Een heel dorp onder de modder — hoeveel gaat er dan kapot?",
          },
        },
      },
      {
        q: "Wat betekent *'vruchtbaar'* in deze tekst?",
        options: [
          "Grond waarop planten heel goed groeien",
          "Grond waar veel fruitbomen staan",
          "Grond die er donker uitziet",
          "Grond die duur is om te kopen",
        ],
        answer: 0,
        evidence: "Boeren kunnen er uitstekend groente en fruit verbouwen.",
        wrongHints: [
          null,
          "Dichtbij! Maar er groeit meer dan fruit: de zin noemt óók groente. Welk antwoord dekt allebei?",
          null,
          "Over geld of prijzen zegt de tekst niets. Lees de zin over de boeren nog eens.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Let op de tegenstelling", tekst: "'Dat lijkt onverstandig, MAAR er is een goede reden: vulkaanas maakt de grond JUIST heel vruchtbaar.' De woorden 'maar' en 'juist' zeggen: nu komt iets positiefs (truc 3)." },
            { titel: "Lees de zin erna", tekst: "'Boeren kunnen er uitstekend groente en fruit verbouwen.' Dat is het bewijs: op vruchtbare grond groeit van alles uitstekend." },
            { titel: "Pas op voor het te-smalle antwoord", tekst: "'Vrucht' zit in het woord, dus 'fruitbomen' lijkt logisch. Maar de tekst noemt groente ÉN fruit. Vruchtbaar gaat over alles wat groeit, niet alleen fruit." },
          ],
          woorden: [
            { woord: "verbouwen", uitleg: "Planten laten groeien om te oogsten. Een boer verbouwt aardappels, graan of groente." },
            { woord: "vulkaanas", uitleg: "Het fijne grijze poeder dat een vulkaan uitspuwt. Zit vol stofjes waar planten van groeien." },
          ],
          theorie: "**Het te-smalle antwoord is een klassieke valstrik.** Eén antwoord klopt half (fruit groeit er inderdaad), maar het juiste antwoord dekt de héle uitleg (alles groeit er goed). Twijfel je tussen twee antwoorden? Kies degene die bij ALLE informatie uit de tekst past, niet bij een deel.",
          voorbeelden: [
            { type: "tegenstelling", tekst: "'Wonen bij een vulkaan lijkt onverstandig, maar...' — na 'maar' volgt het voordeel. Dat voordeel legt 'vruchtbaar' uit." },
          ],
          basiskennis: [
            { onderwerp: "Waarom is vulkaangrond zo goed?", uitleg: "Vulkaanas zit vol mineralen — voedingsstoffen waar planten dol op zijn. Daarom zijn de hellingen van vulkanen vaak felgroen." },
          ],
          niveaus: {
            basis: "Lees de zin over de boeren: wat kunnen zij op deze grond?",
            simpeler: "De tekst geeft de reden waarom mensen tóch bij een vulkaan wonen: op die grond groeit alles geweldig. Welk antwoord zegt dat?",
            nogSimpeler: "Groente én fruit groeien er uitstekend — wat zegt dat over de grond?",
          },
        },
      },
      {
        q: "Wat betekent *'bedolven worden'* in deze tekst?",
        options: [
          "Helemaal bedekt raken onder een dikke laag",
          "Ontruimd worden door hulpdiensten",
          "Langzaam wegzakken in de grond",
          "Verlaten worden door de bewoners",
        ],
        answer: 0,
        evidence: "bedolven worden onder een dikke laag as en modder",
        wrongHints: [
          null,
          "Hulpdiensten komen in de tekst niet voor. Kijk wat er óp de dorpen terechtkomt.",
          "Zakt het dorp naar beneden, of komt er juist iets bóvenop? Let op het woord 'onder... as en modder'.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Kijk wat er direct achter staat", tekst: "'Bedolven worden ONDER een dikke laag as en modder.' Het woord 'onder' plus 'een dikke laag' tekenen het plaatje: er komt van alles bovenop." },
            { titel: "Stel je het voor", tekst: "As en modder regenen neer op het dorp, laag na laag, tot alles eronder verdwenen is. Bedolven = helemaal bedekt en weggestopt onder die laag." },
          ],
          woorden: [
            { woord: "bedelven", uitleg: "Iets helemaal bedekken zodat het eronder verdwijnt. Ook figuurlijk: 'bedolven onder het huiswerk'." },
            { woord: "laag", uitleg: "Een plak van iets dat ergens overheen ligt, zoals een laag sneeuw op het dak." },
          ],
          theorie: "**Maak een filmpje in je hoofd.** Bij werkwoorden helpt het om de zin vóór je te zien: wat gebeurt er precies, in welke volgorde? De woorden eromheen ('onder', 'een dikke laag') zijn de regie-aanwijzingen. Het antwoord dat past bij jouw filmpje, is bijna altijd het goede — check hem daarna nog even letterlijk in de zin.",
          voorbeelden: [
            { type: "figuurlijk", tekst: "'Na haar verjaardag werd Fien bedolven onder de kaartjes.' Geen modder, wél hetzelfde beeld: een enorme berg die over je heen komt." },
          ],
          basiskennis: [
            { onderwerp: "Delven en bedelven", uitleg: "'Delven' is een oud woord voor graven. Wat bedolven is, lijkt begraven — het ligt onder een laag verstopt." },
          ],
          niveaus: {
            basis: "Let op de woorden 'onder een dikke laag'. Komt het dorp bovenop of eronder?",
            simpeler: "Stel je een zandkasteel voor waar iemand een hele emmer zand overheen gooit. Zie je het kasteel nog? Dat gebeurt hier met het dorp, maar dan met as en modder.",
            nogSimpeler: "Er valt een dikke laag óver het dorp heen — wat zie je dan nog?",
          },
        },
      },
      {
        q: "Wat betekent *'onvoorspelbaar'* in deze tekst?",
        options: [
          "Je weet nooit zeker van tevoren wat er gaat gebeuren",
          "Heel gevaarlijk voor de omgeving",
          "Niet te meten met apparaten",
          "Al heel lang niet meer uitgebarsten",
        ],
        answer: 0,
        evidence: "Helemaal zeker weten ze het nooit: een vulkaan blijft onvoorspelbaar.",
        wrongHints: [
          null,
          "Gevaarlijk is een vulkaan zeker, maar de laatste alinea gaat ergens anders over. Wat weten de wetenschappers wel en niet?",
          "De tekst zegt juist dat wetenschappers van alles kunnen meten. Wat lukt er dan tóch niet helemaal?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Haal het woord uit elkaar", tekst: "on-VOORSPEL-baar. 'Voorspellen' = van tevoren zeggen wat er gaat gebeuren. 'On-' = niet, '-baar' = het kan. Samen: niet van tevoren te zeggen." },
            { titel: "Check met de zin ervoor", tekst: "'Helemaal zeker weten ze het nooit: een vulkaan blijft onvoorspelbaar.' De dubbele punt verbindt de twee: nooit zeker weten = onvoorspelbaar. Twee trucs, één antwoord." },
            { titel: "Waarom niet 'niet te meten'?", tekst: "De tekst zegt juist dat wetenschappers trillingen MÉTEN en uitbarstingen vaak zien aankomen. Meten lukt dus prima — alleen honderd procent zekerheid ontbreekt." },
          ],
          woorden: [
            { woord: "voorspellen", uitleg: "Van tevoren zeggen wat er gaat gebeuren, zoals bij de weersverwachting." },
            { woord: "trillingen", uitleg: "Kleine schudbewegingen in de grond. Vaak een voorteken van een uitbarsting." },
          ],
          theorie: "**De grote afsluiter: combineer je trucs.**\n\n1. Truc 4: on + voorspel + baar = niet vooraf te zeggen.\n2. Truc 1: de zin ervoor ('helemaal zeker weten ze het nooit') zegt hetzelfde met andere woorden.\n\nZo werk je op de Doorstroomtoets: eerste gok via het woord zelf, bevestiging via de tekst. Kloppen ze met elkaar? Dan durf je te kiezen.",
          voorbeelden: [
            { type: "zelfde bouw", tekst: "onbereikbaar = niet te bereiken, onverslaanbaar = niet te verslaan, ononderbroken = zonder onderbreking. Het bouwpakket on+...+baar kom je overal tegen." },
          ],
          basiskennis: [
            { onderwerp: "Vaak ≠ altijd", uitleg: "Wetenschappers zien een uitbarsting 'vaak' aankomen — dus niet altijd. Zulke kleine woordjes maken op de toets het verschil tussen goed en fout." },
          ],
          niveaus: {
            basis: "Knip het woord: on + voorspel + baar. En lees de zin ervoor: wat weten de wetenschappers nooit helemaal?",
            simpeler: "De weerman voorspelt het weer, maar heeft het weleens mis. Bij vulkanen is dat nog sterker: meten kan, maar zeker weten wat er komt...",
            nogSimpeler: "Wat betekent 'on-' aan het begin van een woord ook alweer?",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const woordbetekenisContextPo = {
  id: "woordbetekenis-context-po",
  title: "Woordbetekenis — raden uit de tekst",
  emoji: "🔍",
  level: "groep6-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — woordbetekenis afleiden uit context",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
  ],
  intro:
    "Op de Doorstroomtoets komt hij gegarandeerd: de vraag \"Wat betekent 'X' in deze tekst?\". In dit deel leer je vier trucs om de betekenis uit de tekst zelf te halen — ook bij woorden die je nog nooit hebt gezien. Met twee eigen oefenteksten en vragen precies in toets-stijl.",
  triggerKeywords: [
    "woordbetekenis", "wat betekent", "moeilijke woorden",
    "betekenis raden", "context", "begrijpend lezen",
    "woordenschat", "signaalwoorden", "tegenstelling",
    "samenstelling", "voorvoegsel", "meerdere betekenissen",
    "doorstroomtoets", "cito", "lezen groep 8",
  ],
  chapters,
  steps,
};

export default woordbetekenisContextPo;
