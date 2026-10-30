// Leerpad: Evolutie + mens - groep 6-8 natuur/biologie.
// Sluit op Darwin (bekende-wetenschappers). 1F. 4 stappen.

const stepEmojis = ["🐒", "🦴", "🧠", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is evolutie?", emoji: "🐒", from: 0, to: 0 },
  { letter: "B", title: "Mens uit aap (gem. voorouder)", emoji: "🦴", from: 1, to: 1 },
  { letter: "C", title: "Hoe weten we dit?", emoji: "🧠", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Wat is evolutie?",
    explanation:
      "**Evolutie** = **langzame verandering** van levende wezens over **miljoenen jaren**.\n\n**Charles Darwin** *(1809-1882)* bedacht evolutietheorie *(zie 'Bekende wetenschappers')*. Boek: **'Over het ontstaan van soorten'** *(1859)*.\n\n**Hoe werkt evolutie?**\n\n**1. Variatie**:\n• Geen 2 dieren of mensen zijn precies gelijk.\n• Sommige sneller, andere sterker, weer andere slimmer.\n• Komt door **DNA-verschillen** *(genen)*.\n\n**2. Selectie**:\n• Sommige eigenschappen geven betere **overlevingskans**.\n• Bv. dier met betere camouflage = minder gepakt door roofdier.\n• Dat dier wordt ouder + krijgt kinderen.\n\n**3. Erfelijkheid**:\n• Eigenschappen worden **doorgegeven** van ouder op kind via DNA.\n• Kind heeft daarom ook goede eigenschap.\n\n**4. Tijd**:\n• Over **miljoenen jaren** stapelen veranderingen.\n• Soms heel langzaam, soms snel *(extreme omstandigheden)*.\n• Uiteindelijk nieuwe **soort**.\n\n**'Survival of the fittest'** *('Overleving van de geschiktste')*:\n• Het dier dat **best past bij omgeving** overleeft + plant zich voort.\n• Niet altijd 'sterkste' — soms slimste, snelste, mooiste, samenwerkingsbeste.\n\n**Voorbeeld: vinken op Galápagos** 🐦:\n• Darwin zag op deze eilanden vinkjes met **verschillende snavels**.\n• Op eiland met **harde zaden**: vinken met **dikke snavels** *(kraken)*.\n• Op eiland met **insecten in gaten**: vinken met **lange dunne snavels** *(pikken)*.\n• Alle uit gemeenschappelijke voorouder.\n• Aanpassing aan voedsel → 'natuurlijke selectie'.\n\n**Voorbeeld: pepermot** 🦋:\n• Vóór de industriële revolutie *(voor 1800)*: meeste motten **wit-gekleurd** *(camouflage op witte bomen)*.\n• Industriële revolutie: bomen **zwart** door fabriek-roet.\n• Mottenpopulatie: snel meer **zwart-gekleurd** *(beter gecamoufleerd)*.\n• Na een schoner milieu: weer meer witte.\n• Bewezen evolutie binnen ~150 jaar!\n\n**Snel of langzaam?**\n\n• Bacteriën: **uren** *(nieuwe generatie elke 20 min)*.\n• Vliegen: **dagen**.\n• Muizen: **weken**.\n• Honden *(door fokken)*: jaren.\n• Mensen: **honderdduizenden tot miljoenen jaren**.\n\n**Evolutie nu nog steeds**:\n• **Bacteriën resistent tegen antibiotica** *(superbugs).*\n• Insecten resistent tegen pesticide.\n• Mensen passen ook nog langzaam aan *(kleinere kaak, vaker geen wijsheidskiezen)*.\n\n**Massa-uitsterving** *(extinction event)*:\n• Soms grote ramp → veel soorten weg.\n• **5 grote uitstervingen** in geschiedenis:\n  - **Ordovicium** *(444 mln jr geleden)*.\n  - **Devoon** *(372 mln)*.\n  - **Perm** *(252 mln, grootste — 96% weg)*.\n  - **Trias** *(201 mln)*.\n  - **Krijt** *(66 mln geleden — dino's weg door planetoïde)*.\n• Wetenschappers zeggen dat we in de **6e massa-uitsterving** zitten *(door mens)*.\n\n**Toets-feitje**:\nDe **eerste levende cellen** op aarde ontstonden ~**3,5 miljard jaar geleden**. **Meercellige wezens**: ~600 mln. **Vissen**: 525 mln. **Reptielen**: 320 mln. **Zoogdieren**: 200 mln. **Eerste mens** *(Homo)*: 2,5 mln. **Moderne mens** *(Homo sapiens)*: 300.000 jaar!",
    checks: [
      {
        q: "Wie schreef het beroemde boek over de **evolutietheorie**?",
        options: ["Charles Darwin", "Newton", "Einstein", "Mendel"],
        answer: 0,
        wrongHints: [null, "Newton is van de zwaartekracht — natuurkunde, geen biologie.", "Einstein is van de relativiteit — natuurkunde, geen biologie.", "Mendel onderzocht erfelijkheid met erwten, maar schreef dit boek niet."],
      },
      {
        q: "Wat is **natuurlijke selectie**?",
        options: ["Wie het best is aangepast, overleeft en krijgt meer jongen", "Dieren kiezen zelf welke eigenschappen ze krijgen", "Mensen kiezen welke dieren jongen mogen krijgen", "Alle dieren veranderen even snel, wat er ook gebeurt"],
        answer: 0,
        wrongHints: [null, "Dieren kunnen hun eigenschappen niet kiezen — ze worden ermee geboren.", "Dat is kunstmatige selectie (fokken). Wie 'kiest' er bij natuurlijke selectie?", "Kijk naar het woord 'selectie': wordt er dan niets uitgekozen?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is natuurlijke selectie?", tekst: "Natuurlijke selectie is de belangrijkste motor van evolutie. Het gaat zo: in elke generatie zijn er **kleine verschillen** tussen individuen." },
            { titel: "Best aangepast overleeft", tekst: "Wie het BEST PAST bij zijn omgeving (sterke spieren, betere camouflage, snelheid, etc) heeft de meeste kans om te OVERLEVEN en JONGEN te krijgen." },
            { titel: "Slechte eigenschappen sterven uit", tekst: "Wezens met slechte eigenschappen sterven eerder of krijgen minder jongen. Hun eigenschappen verdwijnen langzaam uit de soort. Zo verandert de soort over generaties." },
          ],
          woorden: [
            { woord: "natuurlijke selectie", uitleg: "Best aangepaste wezens overleven en planten zich voort." },
            { woord: "survival of the fittest", uitleg: "Engelse term: 'overleving van de geschiktste' (door Herbert Spencer)." },
          ],
          theorie: "Toets-tip: natuurlijke selectie is GEEN toeval. Het selecteert systematisch: betere eigenschappen winnen. Over miljoenen jaren ontstaat zo een nieuwe soort.",
          voorbeelden: [
            { type: "stap", tekst: "Donkere mot in vervuilde stad: minder zichtbaar voor vogels → overleeft → meer jongen → soort wordt donkerder." },
            { type: "stap", tekst: "Cheeta's: snelste overleven het best (vangen prooi). Over generaties: cheeta's worden gemiddeld sneller." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Natuurlijke selectie = NATUUR selecteert wie blijft. Niet de mens, geen toeval — de omgeving." }],
          niveaus: {
            basis: "Natuurlijke selectie = best aangepast overleeft en plant zich voort.",
            simpeler: "Wie past, blijft. Wie niet past, sterft uit.",
            nogSimpeler: "Best passend = overleven.",
          },
        },
      },
      {
        q: "Hoe lang bestaat de **moderne mens** (Homo sapiens)?",
        options: ["~300.000 jaar", "1000 jaar", "6000 jaar", "Miljarden jaar"],
        answer: 0,
        wrongHints: [null, "Veel langer — 1000 jaar geleden stonden er al kastelen en steden.", "Langer — 6000 jaar geleden bestond er al landbouw, en mensen waren er toen allang.", "Korter — miljarden jaren is de leeftijd van de aarde zelf."],
        uitlegPad: {
          stappen: [
            { titel: "Homo sapiens = wij", tekst: "**Homo sapiens** ('wijze mens') is de **wetenschappelijke naam** voor onze soort, de moderne mens. Wij bestaan ongeveer **300.000 jaar** als soort." },
            { titel: "Waar kwam de soort vandaan?", tekst: "Onze soort ontstond in **Afrika**. De oudste fossielen van onze soort komen uit Marokko en Ethiopië. Vandaar trokken Homo sapiens ~70.000 jaar geleden de wereld over: Azië, Europa, Amerika, Australië." },
            { titel: "Voor context: andere tijden", tekst: "• Aarde = **4,5 miljard** jaar oud.\n• Dinosauriërs = ~165 mln jaar geleefd (uitgestorven 66 mln jr terug).\n• Eerste mens-achtigen (hominiden) = ~7 mln jr geleden.\n• Homo sapiens = pas **300.000 jaar**.\nWij zijn dus 'jong' op planeet-tijdschaal." },
          ],
          woorden: [
            { woord: "Homo sapiens", uitleg: "Wetenschappelijke naam moderne mens, 'wijze mens'." },
            { woord: "soort", uitleg: "Wezens die zich met elkaar kunnen voortplanten." },
          ],
          theorie: "Toets-tijdsschalen om te kennen:\n• Aarde: 4,5 mld jr.\n• Dino-tijdperk eindigde: 66 mln jr terug.\n• Mens-aap gemeenschappelijke voorouder: 7 mln jr terug.\n• **Homo sapiens**: **300.000 jr**.\n• Landbouw: 12.000 jr.\n• Schrift: 5.000 jr.",
          voorbeelden: [
            { type: "stap", tekst: "6000 jaar = Bijbelse aanname, niet wetenschap." },
            { type: "stap", tekst: "Miljarden jaar = leeftijd aarde, niet mens." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Homo sapiens = 300.000 jaar. Aarde = 4,5 miljard. Verschil = 15.000x! Wij zijn een klein vlekje in aarde-geschiedenis." }],
          niveaus: {
            basis: "~300.000 jaar.",
            simpeler: "Moderne mens (Homo sapiens) is een vrij jonge soort, ~300.000 jaar.",
            nogSimpeler: "300.000 jaar",
          },
        },
      },
      {
        q: "Wat is de oorzaak dat de **dino's** uitstierven?",
        options: ["Planetoïde-inslag", "Vulkaan alleen", "De mens", "Een ijstijd"],
        answer: 0,
        wrongHints: [null, "Vulkanen speelden misschien mee, maar waren niet de hoofdoorzaak.", "De mens kwam pas tientallen miljoenen jaren later.", "De ijstijden met mammoeten kwamen pas veel later."],
        uitlegPad: {
          stappen: [
            { titel: "Het einde van de dino's", tekst: "Dinosauriërs leefden ongeveer 165 miljoen jaar lang. Ze stierven plotseling uit **66 miljoen jaar geleden**. Geen mens in zicht — die kwam pas miljoenen jaren later." },
            { titel: "Planetoïde-inslag", tekst: "Een enorme rotssteen uit de ruimte (planetoïde van ~10 km doorsnee) sloeg in op aarde, in wat nu Mexico is (krater **Chicxulub**). De inslag zette enorme branden in en gooide stof in atmosfeer." },
            { titel: "Gevolg: geen zonlicht", tekst: "Het stof blokkeerde zonlicht voor maanden/jaren. Planten stierven, dieren die daarvan aten stierven, dieren die díe aten stierven. Hele voedselketens stortten in. ~75% van alle dier-soorten uitgestorven, incl. dino's." },
          ],
          woorden: [
            { woord: "Krijt-uitsterving", uitleg: "Wetenschappelijke naam: einde van Krijt-periode, 66 mln jr geleden." },
            { woord: "Chicxulub", uitleg: "Krater in Mexico, waar planetoïde-inslag plaatsvond." },
          ],
          theorie: "Toets-feit: kleine dieren overleefden (vogels = afstammelingen van dino's eigenlijk! Plus zoogdieren die later mensen werden). Niet ALLE dino's stierven uit — vogels zijn techn. nog dino's.",
          voorbeelden: [
            { type: "stap", tekst: "Stof in atmosfeer = jaren-lange 'winter'. Planten konden niet groeien. Geen voedsel = uitsterven." },
            { type: "stap", tekst: "Vogels (technisch dino-afstammelingen) overleefden omdat ze klein waren en konden vliegen om voedsel te zoeken." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud cijfer: 66 mln jaar geleden = einde dino's. Niet door mens (kwam veel later), niet alleen vulkaan." }],
          niveaus: {
            basis: "Dino's stierven 66 mln jaar geleden uit door planetoïde-inslag.",
            simpeler: "Grote rotssteen uit ruimte stortte neer → stof → geen zon → uitsterving.",
            nogSimpeler: "Meteoriet uit ruimte!",
          },
        },
      },
    ],
  },
  {
    title: "Mens uit aap? Gemeenschappelijke voorouder",
    explanation:
      "**Belangrijke nuance**: mens stamt **NIET af van aap** zoals we die nu kennen.\n\n**Mens + chimpansee** *(en bonobo)* hebben een **gemeenschappelijke voorouder** ~**7 miljoen jaar geleden** *(een soort dier dat geen aap was zoals nu, en geen mens)*.\n\n**Mensen-stamboom** *(simpel)*:\n\n**Aap-achtige voorouder** *(~7 mln jr)*\n   ↓\n**Splitst** in:\n• → richting moderne aap *(chimpansee 99% DNA overeenkomst met mens)*.\n• → richting mens-achtigen *(hominide)*.\n\n**Hominiden** *(menselijke voorouders)*:\n\n**1. Australopithecus** *(4-2 mln jr geleden)*:\n• Beroemd: **'Lucy'** *(gevonden Ethiopië 1974)*.\n• 1 meter lang.\n• Liep al rechtop *(belangrijk!)*.\n• Maar wel klein brein.\n• 'Aap-mens' achtig.\n\n**2. Homo habilis** *('handige mens', 2,4-1,5 mln jr)*:\n• Maakte **eerste werktuigen** *(stenen schrapers)*.\n• Brein groter dan Australopithecus.\n\n**3. Homo erectus** *('rechtopgaande mens', 1,9 mln - 110.000 jr)*:\n• Eerste die **vuur** gebruikte.\n• Liep lang.\n• Zwierf van Afrika naar Azië + Europa.\n• Onze directe voorouder.\n\n**4. Neanderthaler** *(400.000 - 40.000 jr geleden)*:\n• Aparte soort, dichtbij moderne mens.\n• Vooral in **Europa**.\n• Maakte gereedschap, kunst, rituelen.\n• Groter brein dan moderne mens!\n• Stierf uit ~40.000 jaar geleden — onbekend precies waarom.\n• ~2% van **Europees DNA** komt van Neanderthaler *(door kruising)*.\n• Recent onderzoek: niet 'primitief' — wel intelligent.\n\n**5. Denisovan** *(in Azië)*:\n• Aparte soort.\n• Kruiste ook met moderne mens.\n• Tot ~5% DNA bij mensen in **Papoea-Nieuw-Guinea** en omgeving; bij andere Aziaten veel minder.\n\n**6. Homo sapiens** *('wijze mens', 300.000+ jr geleden - nu)*:\n• **Onze soort**.\n• Ontstond in **Afrika**.\n• Verspreidde 70.000 jaar geleden over hele wereld.\n• Leefde een tijd naast Neanderthaler + Denisovan (en kreeg soms kinderen met hen); die soorten stierven later uit.\n• Bouwde alle beschaving die we kennen.\n\n**Reis van mens** *(uit Afrika)*:\n• **70.000 jr geleden**: vanuit Afrika.\n• **60.000 jr**: Azië.\n• **50.000 jr**: Europa + Australië.\n• **15.000-20.000 jr**: Noord-Amerika via Bering-landbrug.\n• **12.000 jr**: Zuid-Amerika.\n\n**Belangrijke ontwikkelingen mensheid**:\n\n• **Rechtop lopen** *(~4 mln jr)*: handen vrij voor maken gereedschap.\n• **Vuur gebruiken** *(~1 mln jr)*: gekookt eten + warmte + bescherming.\n• **Werktuigen** *(2,5 mln jr)*: stenen messen, speren.\n• **Taal** *(~100.000 jr — schatting)*: samenwerken.\n• **Landbouw** *(~12.000 jr)*: vaste woonplaats + steden + beschaving.\n• **Schrift** *(~5.000 jr)*: kennis bewaren over generaties.\n• **Wetenschap + technologie** *(~500 jr)*: snelle vooruitgang.\n\n**Toets-feitje**:\nWe delen **~98,8% DNA met chimpansees**. Verschil is klein maar gevolgen enorm. Mensen hebben **veel grotere hersenen** *(3x zwaarder dan chimpansee-brein)*. Daarom kunnen we lezen, schrijven, denken over toekomst, leven in steden van miljoenen.",
    checks: [
      {
        q: "Stamt mens **af van aap** zoals nu?",
        options: ["Nee, ze delen een voorouder", "Ja, van de chimpansee", "Nee, helemaal niet verwant", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "De chimpansee leeft nu, net als wij. Kan een dier dat nu leeft onze voorouder zijn?", "Mens en chimpansee lijken enorm op elkaar, ook in hun DNA. Dat is juist heel verwant.", "Hier is wel veel over bekend, uit fossielen en DNA-onderzoek."],
        uitlegPad: {
          stappen: [
            { titel: "Veelvoorkomend misverstand", tekst: "Veel mensen denken: 'mens stamt af van aap'. Maar dat klopt NIET. Mens en chimpansee zijn **NEEFJES**, niet **kind-en-ouder**." },
            { titel: "Gemeenschappelijke voorouder", tekst: "Ongeveer **7 miljoen jaar geleden** leefde er een dier (geen mens, geen moderne aap) waar BEIDE soorten uit voortkwamen. Daarna splitste het: 1 lijn werd mens, andere lijn werd chimpansee." },
            { titel: "Vergelijk met familie", tekst: "Het is alsof jij en je neef dezelfde oma hebben, maar verschillende ouders. Jullie zijn verwant, maar jij stamt niet af van je neef." },
          ],
          woorden: [
            { woord: "gemeenschappelijke voorouder", uitleg: "Soort waaruit 2 of meer huidige soorten zijn voortgekomen." },
            { woord: "hominide", uitleg: "Familie van mens-achtigen (Australopithecus, Homo erectus, Neanderthaler, Homo sapiens)." },
          ],
          theorie: "Toets-nuance: 'Mens stamt af van aap' is fout. 'Mens en aap delen een voorouder' is juist. Wij delen 98,8% DNA met chimpansee — heel verwant, maar geen ouder-kind.",
          voorbeelden: [
            { type: "stap", tekst: "Lijn 1 (na splitsing): Australopithecus → Homo erectus → Homo sapiens (wij)." },
            { type: "stap", tekst: "Lijn 2 (na splitsing): voorouder → chimpansee + bonobo (huidige apen)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Mens + aap = NEEFJES. Niet ouder-kind." }],
          niveaus: {
            basis: "De mens stamt niet af van de apen van nu. Mens en chimpansee hebben wel een gemeenschappelijke voorouder, zo'n 7 miljoen jaar geleden.",
            simpeler: "De mens komt niet van de chimpansee. Ze hebben dezelfde over-over-overgrootouder van heel lang geleden, dus ze zijn een soort neefjes.",
            nogSimpeler: "Mens en aap zijn neefjes met dezelfde voorouder.",
          },
        },
      },
      {
        q: "Wie was **Lucy**?",
        options: ["Een oud skelet uit Ethiopië", "Eerste mens op maan", "Een beroemd schilderij", "Een snelle sportauto"],
        answer: 0,
        wrongHints: [null, "De eerste mens op de maan was Neil Armstrong, in 1969. Lucy is iets heel anders en veel ouder.", "Lucy is geen kunstwerk. Lees in de uitleg nog eens waar de naam vandaan komt.", "Lucy is geen auto. Lees in de uitleg nog eens waar de naam vandaan komt."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Lucy?", tekst: "**Lucy** is de bijnaam van een beroemd **3,2 miljoen jaar oud skelet** van een **Australopithecus afarensis** — een vroege mens-voorouder. Gevonden in **Ethiopië** in **1974**." },
            { titel: "Waarom 'Lucy'?", tekst: "De ontdekkers (onder leiding van Donald Johanson) luisterden naar het Beatles-nummer **'Lucy in the Sky with Diamonds'** terwijl ze aan het graven waren. Vandaar de bijnaam — niet haar echte naam (die kennen we niet)." },
            { titel: "Waarom belangrijk?", tekst: "Lucy bewees dat **mens-achtigen al rechtop liepen** vóór ze grote hersenen kregen. Hersenen kwamen LATER. Eerste belangrijk bewijs over de mens-evolutie." },
          ],
          woorden: [
            { woord: "Australopithecus", uitleg: "Vroege mens-achtige (4-2 miljoen jaar geleden)." },
            { woord: "hominide", uitleg: "Familie waar mens + voorouders bij horen." },
          ],
          theorie: "Toets-feit Lucy:\n• 3,2 miljoen jaar oud.\n• Ongeveer 1 meter lang.\n• Liep rechtop (bewijs uit bekken + been-botten).\n• Klein brein (~400 cc — vergelijk: moderne mens ~1400 cc).\n• Vrouwelijk skelet, volwassen bij overlijden.",
          voorbeelden: [
            { type: "stap", tekst: "Of Lucy zelf onze directe voorouder is, weten we niet zeker. Onze stamlijn ging via Homo habilis → Homo erectus → Homo sapiens." },
            { type: "stap", tekst: "Origineel skelet ligt in het Nationaal Museum van Ethiopië. Replica's wereldwijd." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lucy + Ethiopië + 1974 + Australopithecus = de combinatie. Beroemd skelet, bekendste fossiel mens-voorouder." }],
          niveaus: {
            basis: "Lucy is de bijnaam van een 3,2 miljoen jaar oud skelet van een Australopithecus, gevonden in Ethiopië in 1974.",
            simpeler: "In 1974 vonden onderzoekers in Ethiopië een heel oud skelet van een mensachtige die al rechtop liep. Ze noemden haar Lucy, naar een liedje van de Beatles.",
            nogSimpeler: "Lucy is een heel oud skelet uit Ethiopië.",
          },
        },
      },
      {
        q: "Welke mensensoort stierf ongeveer **40.000 jaar geleden** uit?",
        options: ["Neanderthaler", "Homo sapiens", "Australopithecus", "Homo erectus"],
        answer: 0,
        wrongHints: [null, "Dat zijn wij — en wij bestaan nog.", "Australopithecus (zoals Lucy) leefde miljoenen jaren eerder.", "Homo erectus verdween al ruim 100.000 jaar geleden."],
      },
      {
        q: "Hoeveel **DNA** hebben mens en chimpansee ongeveer gemeen?",
        options: ["~98,8%", "10%", "50%", "100%"],
        answer: 0,
        wrongHints: [null, "Veel meer — mens en chimpansee lijken enorm op elkaar.", "Meer — zelfs met een muis delen we meer dan de helft.", "Bij 100% zouden mens en chimpansee precies hetzelfde wezen zijn."],
      },
    ],
  },
  {
    title: "Hoe weten we dit? Bewijzen evolutie",
    explanation:
      "Hoe weten wetenschappers over evolutie? **Bewijzen** van vele soorten:\n\n**1. Fossielen** 🦴:\n• Versteende resten van oude wezens.\n• Vinden in bepaalde gesteente-lagen.\n• Diepere laag = ouder.\n• Tonen **soorten van toen** + hoe zij veranderd zijn.\n\n**Bekende fossielen**:\n• **Tyrannosaurus rex**: gevonden in VS, 65 mln jr.\n• **Archaeopteryx**: 'tussen-dier' reptiel + vogel *(150 mln jr)*.\n• **Tiktaalik**: tussen vis + landdier *(375 mln jr)*.\n• **Lucy** *(Australopithecus, 3,2 mln jr)*: tussen aap + mens.\n• **Ötzi** *(de IJsman, 5300 jr)*: gevonden in Alpen 1991 — geen versteend fossiel maar een ijsmummie, bevroren bewaard!\n\n**2. DNA-onderzoek** 🧬:\n• Alle leven heeft **DNA** *(genetische code)*.\n• Soorten met **vergelijkbaar DNA** zijn dichter verwant.\n• Mens + chimpansee: 98,8% DNA gelijk.\n• Mens + muis: ~85%.\n• Mens + bananenplant: ~50%.\n• Mens + bacterie: ~25%.\n\n**3. Vergelijkende anatomie**:\n• Hand van mens, vleugel van vogel, vin van walvis: **gelijke botten** *(alleen vorm anders)*.\n• Bewijs dat afkomstig van zelfde voorouder.\n• Heet **'homologe organen'**.\n\n**4. Embryo's vergelijken**:\n• Vroege embryo's van mens, kip, vis, muis: **bijna gelijk**.\n• Allemaal hebben kieuwspleten *(verdwijnen later bij landdieren)*.\n• Bewijs van gemeenschappelijke voorouder.\n\n**5. Restorganen** *(vestigial)*:\n• Organen die **nog bestaan** maar hun **oude functie** (bijna) kwijt zijn.\n• Bv. **blindedarm** mens *(was darm-deel voor planten verteren bij voorouders)*.\n• Bv. **wijsheidskiezen** *(kaak werd kleiner)*.\n• Bv. **staartbeen** mens *(rest van een staart bij voorouders)*.\n• Bv. walvis-bot in lichaam *(was achter-poot bij voorouder)*.\n\n**6. Direct waargenomen evolutie**:\n• **Pepermot** in industriële revolutie.\n• **Bacteriën resistent** tegen antibiotica.\n• **Insecten resistent** tegen pesticide.\n• **Galápagos-vinken**: snavels veranderen nog steeds mee met droge en natte jaren.\n• Allemaal in **enkele decennia** gemeten.\n\n**7. Stamboom-vergelijking**:\n• DNA + fossielen combineren = **fylogenetische boom** *(stamboom)* van alle leven.\n• Alle soorten met elkaar verbonden.\n• Geen 'aparte' creaties — alles uit voorouders.\n\n**Hoe oud is aarde?**\n• ~**4,5 miljard jaar**.\n• Gemeten door **radiometrische datering** *(verval van isotopen, bv. uranium → lood)*.\n• Bevestigd door geologie + astronomie.\n\n**Misvattingen over evolutie**:\n\n**'Mens stamt af van aap'**:\n• **NEE** — gemeenschappelijke voorouder.\n\n**'Evolutie heeft doel'**:\n• **NEE** — geen plan, geen 'beter worden'.\n• Alleen aanpassing aan omgeving.\n\n**'Mensen zijn evolutionaire 'eindpunt''**:\n• **NEE** — geen eindpunt, evolutie gaat door.\n\n**'Evolutie is theorie dus niet bewezen'**:\n• **NEE** — 'theorie' in wetenschap betekent **best-onderbouwde verklaring**.\n• Zoals 'zwaartekrachts-theorie' = bewezen.\n• Evolutie is **feit + theorie**: gebeurt + verklaring waarom.\n\n**Religie + evolutie**:\n• Sommigen geloven dat **God de wereld schiep** *(creatie)* + wijzen evolutie af.\n• Anderen combineren: God leidde evolutie *(theistische evolutie)*.\n• **Wetenschappelijke consensus**: evolutie gebeurde + gebeurt.\n• Katholieke kerk accepteert evolutie sinds 1996 *(paus Johannes Paulus II)*.\n\n**Toets-feitje**:\nDe **Vier Vragen van Tinbergen** *(Nederlandse Nobelprijswinnaar 1973)* zijn een beroemde manier om gedrag te onderzoeken:\n1. **Hoe** doet het dier dit? *(mechanisme)*\n2. **Wanneer** in leven? *(ontwikkeling)*\n3. **Waarvoor**? *(functie)*\n4. **Waarom** zo geëvolueerd? *(evolutie)*",
    checks: [
      {
        q: "Wat zijn **fossielen**?",
        options: ["Versteende resten van oude wezens", "Dieren die nu nog in het wild leven", "Stenen die vanzelf zijn ontstaan", "Botten van een dier dat net dood is"],
        answer: 0,
        wrongHints: [null, "Zijn fossielen nu nog in leven?", "Een fossiel lijkt op steen, maar waar komt de vorm vandaan?", "Hoe lang duurt het voordat iets versteent?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat zijn fossielen?", tekst: "**Fossielen** zijn versteende resten van planten of dieren die heel lang geleden leefden. Botten, schelpen, bladafdrukken — alles wat over de tijd is **versteend** in gesteente." },
            { titel: "Hoe ontstaat een fossiel?", tekst: "1) Dier sterft, valt in modder of slib.\n2) Vlees rot weg, alleen **botten** blijven over.\n3) Modder + zand bedekt langzaam alles.\n4) Over miljoenen jaren **drukt** de aarde dit + **mineralen** vervangen het bot.\n5) Eindresultaat: **steen** in de vorm van het bot." },
            { titel: "Waarom belangrijk?", tekst: "Fossielen zijn **bewijs** van wat er vroeger leefde. Door **leeftijd te meten** (radiometrische datering) weten we wanneer een fossiel uit welke periode komt. Diepere gesteente-laag = ouder fossiel." },
          ],
          woorden: [
            { woord: "fossiel", uitleg: "Versteende rest van oud organisme." },
            { woord: "radiocarbon-dating", uitleg: "Methode om leeftijd van organisch materiaal te meten." },
            { woord: "paleontologie", uitleg: "Wetenschap die fossielen bestudeert." },
          ],
          theorie: "Toets-feit beroemde fossielen:\n• **Tyrannosaurus rex** (65 mln jr)\n• **Archaeopteryx** (150 mln jr, tussen reptiel + vogel)\n• **Lucy** (Australopithecus, 3,2 mln jr)\n• **Tiktaalik** (375 mln jr, tussen vis + landdier)\n• **Ötzi** (de IJsman, 5300 jr) — let op: geen fossiel maar een ijsmummie uit een Alpen-gletsjer.",
          voorbeelden: [
            { type: "stap", tekst: "Ammonieten (versteende schelpen) zijn populair in geologie-musea." },
            { type: "stap", tekst: "Niet álle wezens worden fossiel. Vereist speciale omstandigheden — vlak terrein + snel bedekt + mineralen-rijk water." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Fossiel = STEEN in vorm van oud dier/plant. Niet levend, niet plastic. Vereist miljoenen jaren om te vormen." }],
          niveaus: {
            basis: "Versteende resten van oude wezens.",
            simpeler: "Botten + schelpen van lang geleden, nu versteend in gesteente.",
            nogSimpeler: "Versteende botten",
          },
        },
      },
      {
        q: "Hoe oud is de **aarde** ongeveer?",
        options: ["~4,5 miljard jaar", "~6000 jaar", "~1 miljoen jaar", "~100 miljoen jaar"],
        answer: 0,
        wrongHints: [null, "Veel ouder — 6000 jaar geleden bestond er al landbouw.", "Veel ouder — 1 miljoen jaar geleden liepen er al mensachtigen rond.", "Ouder — 100 miljoen jaar geleden leefden de dino's al op een oude aarde."],
      },
      {
        q: "Welke zijn voorbeelden van een **restorgaan**?",
        options: ["Blindedarm + wijsheidskiezen", "Hart + longen + nieren", "Hersenen + ruggenmerg", "Maag + lever + alvleesklier"],
        answer: 0,
        wrongHints: [null, "Heb je deze organen elke dag nodig? Een restorgaan doet bijna niets meer.", "Heb je deze organen elke dag nodig? Een restorgaan doet bijna niets meer.", "Heb je deze organen elke dag nodig? Een restorgaan doet bijna niets meer."],
      },
      {
        q: "Hoeveel **DNA** hebben mens en muis ongeveer gemeen?",
        options: ["~85%", "~10%", "~100%", "~50%"],
        answer: 0,
        wrongHints: [null, "Veel meer — een muis is een zoogdier, net als wij.", "Bij 100% zou een muis een mens zijn.", "Meer. Mens en muis zijn allebei zoogdieren met dezelfde soort botten, hart en longen — dan deel je veel meer dan de helft."],
      },
    ],
  },
  {
    title: "Eind-toets — evolutie mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wie schreef het boek over de **evolutietheorie**?", options: ["Darwin", "Newton", "Mendel", "Einstein"], answer: 0, wrongHints: [null, "Newton is van de zwaartekracht, geen biologie.", "Mendel onderzocht erfelijkheid met erwten, maar schreef dit boek niet.", "Einstein is van de relativiteit, geen biologie."] },
      { q: "Stamt de mens af van de **moderne aap**?", options: ["Nee, ze delen een voorouder", "Ja, van de chimpansee", "Dat weet niemand", "Nee, helemaal niet verwant"], answer: 0, wrongHints: [null, "Mens en chimpansee zijn neefjes, geen ouder en kind.", "Wetenschappers weten dit wel.", "Mens en aap zijn wel verwant."] },
      { q: "Tot welke groep voorouders hoort het beroemde skelet **'Lucy'**?", options: ["Australopithecus", "Neanderthaler", "Homo sapiens", "Chimpansee"], answer: 0, wrongHints: [null, "Neanderthalers leefden veel later, in Europa.", "Dat zijn wij — Lucy is miljoenen jaren ouder.", "Chimpansees zijn een andere tak, geen voorouder."] },
      { q: "Hoe oud is onze **aarde** ongeveer?", options: ["4,5 miljard jaar", "6000 jaar", "1 miljoen jaar", "100 miljoen jaar"], answer: 0, wrongHints: [null, "Veel ouder — 6000 jaar geleden bestond er al landbouw.", "Veel ouder — 1 miljoen jaar geleden liepen er al mensachtigen rond.", "Ouder — 100 miljoen jaar geleden leefden de dino's al op een oude aarde."] },
      { q: "Wat bedoelen wetenschappers met de **vijfde massa-uitsterving**?", options: ["Het einde van de dino's", "De uitsterving door de mens nu", "Het einde van de mammoeten", "Eén vulkaanuitbarsting"], answer: 0, wrongHints: [null, "Die noemen wetenschappers de 6e.", "Mammoeten stierven veel later uit, niet in één wereldramp.", "Eén vulkaan is te klein voor zo'n wereldramp."] },
      { q: "Hoeveel procent van ons **DNA** delen we ongeveer met de chimpansee?", options: ["98,8%", "10%", "70%", "50%"], answer: 0, wrongHints: [null, "Veel meer — de chimpansee is onze dichtste verwant.", "Meer — zelfs met een muis delen we meer dan dat.", "Meer — met de meeste zoogdieren delen we al méér dan de helft."] },
      {
        q: "Wat zijn **fossielen**?",
        options: ["Versteende resten van leven van vroeger", "Stenen die vanzelf langzaam groeien", "Bot-modellen die wetenschappers maken", "Oude foto's en tekeningen van dieren"],
        answer: 0,
        wrongHints: [null, "Nee — stenen groeien niet vanzelf.", "Nee — fossielen zijn échte resten, niet nagemaakt.", "Bestonden er foto's toen de dinosaurussen leefden?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een fossiel?", tekst: "Een **fossiel** is een **versteende rest** van een organisme dat lang geleden leefde. Botten, tanden, schelpen, soms zelfs poot-afdrukken of bladeren — kunnen miljoenen jaren behouden blijven in gesteente." },
            { titel: "Hoe ontstaan ze?", tekst: "1. Dier sterft, wordt **snel begraven** (zand, slik, vulkanische as).\n2. Zachte delen (vlees) verteren weg.\n3. Harde delen (bot, schelp, tand) **verstenen** langzaam — mineralen vervangen het oorspronkelijke materiaal.\n4. Miljoenen jaren later: erosie van aardlagen → fossiel komt aan oppervlakte." },
            { titel: "Waarom belangrijk voor evolutie?", tekst: "Fossielen tonen welke dieren wanneer leefden = **directe bewijslijn evolutie**.\n• Trilobieten 500 mln jaar terug\n• Dinosauriërs 230-66 mln jaar terug\n• Mens-voorouders 7 mln jaar terug\nWetenschappers vergelijken fossielen om afstammingslijnen te reconstrueren." },
          ],
          woorden: [
            { woord: "fossiel", uitleg: "Versteende rest van leven uit het verleden." },
            { woord: "paleontoloog", uitleg: "Wetenschapper die fossielen bestudeert." },
            { woord: "versteend", uitleg: "Bot/schelp dat door mineralen langzaam in steen is veranderd." },
          ],
          theorie: "Toets-feitjes fossielen:\n• **Lucy** (Ethiopië 1974) = fossiel van Australopithecus, ~3,2 mln jaar oud\n• **T. rex-skelet 'Sue'** = beroemd dino-fossiel\n• **Naturalis** in Leiden is een groot museum met veel fossielen\n• Fossielen worden gedateerd met **koolstof-14 methode** (tot 50.000 jaar) en uranium-methode (oudere)",
          voorbeelden: [
            { type: "feit", tekst: "In Limburg vinden mensen fossielen van zeedieren — vroeger lag NL onder zee." },
            { type: "feit", tekst: "Mammoet-fossielen worden in Siberische ijslagen gevonden — soms compleet met huid + haar." },
          ],
          basiskennis: [{ onderwerp: "Niet alle leven fossiliseert", uitleg: "Alleen dieren in juiste condities (begraven in zand/slik) worden fossiel. Veruit het meeste leven verdween spoorloos." }],
          niveaus: { basis: "Een fossiel is een versteende rest van iets dat heel lang geleden leefde.", simpeler: "Fossielen zijn dode dieren of planten die in miljoenen jaren in steen veranderden. Wetenschappers vinden ze in oude aardlagen.", nogSimpeler: "Versteende resten van vroeger." },
        },
      },
      {
        q: "**Natuurlijke selectie** — wat is dat?",
        options: ["Best aangepaste dieren krijgen meer jongen", "Wetenschappers kiezen welke dieren leven", "Mensen kiezen welke dieren jongen krijgen", "Puur toeval bepaalt welke dieren overleven"],
        answer: 0,
        wrongHints: [null, "Nee — hier kiest geen mens; het gebeurt vanzelf in de natuur.", "Dat is fokken: dan kiest de mens, niet de natuur.", "Niet helemaal toeval — selectie heeft een richting."],
        uitlegPad: {
          stappen: [
            { titel: "Darwin's basis-idee", tekst: "**Natuurlijke selectie** is het mechanisme dat **evolutie aandrijft**. Het werkt zo:\n1. In een soort zijn dieren **niet allemaal identiek** (variatie).\n2. Sommige variaties geven **betere overlevingskansen** in hun omgeving.\n3. Die dieren krijgen **meer nakomelingen**.\n4. Die nakomelingen erven de gunstige eigenschappen.\n5. Over generaties verandert de soort." },
            { titel: "Voorbeeld: pepermot", tekst: "**Bekend Toets-voorbeeld** (Engeland 1800):\n• Vóór industriële revolutie: lichte vlinders camoufleerden op witte berkenboomstammen — overleefden.\n• Industriële revolutie: roet maakte boomstammen zwart — donkere vlinders overleefden, lichte werden opgegeten.\n• Donkere variant werd dominant. **Natuurlijke selectie in actie**, binnen 50 jaar." },
            { titel: "Toets-instinker: vs. fokken", tekst: "**Natuurlijke selectie** = natuur zelf doet het, geen menselijke keuze.\n**Artificiële selectie / fokken** = mensen kiezen welke dieren paren (rashonden, koeien voor melk).\nBeide veranderen soorten, maar de drijver is anders." },
          ],
          woorden: [
            { woord: "natuurlijke selectie", uitleg: "Best aangepaste dieren overleven en krijgen meeste nakomelingen." },
            { woord: "variatie", uitleg: "Verschillen binnen een soort (kleur, grootte, gedrag)." },
            { woord: "aanpassing", uitleg: "Eigenschap die overlevingskans verhoogt in een specifieke omgeving." },
          ],
          theorie: "Darwin's 4 voorwaarden voor natuurlijke selectie:\n1. Er moet **variatie** zijn binnen een soort\n2. Variatie moet **erfelijk** zijn (van ouders naar kinderen)\n3. Er moet **strijd om bronnen** zijn (voedsel, partners, ruimte)\n4. Sommige variaties geven **voordeel** in die strijd\n\nAls alle 4 aanwezig: evolutie GEBEURT, automatisch.",
          voorbeelden: [
            { type: "feit", tekst: "Antibiotica-resistente bacteriën = natuurlijke selectie binnen WEKEN — bacteriën die antibioticum overleven planten zich voort." },
            { type: "feit", tekst: "Galápagos-vinken (door Darwin bestudeerd) — verschillende snavels per eiland afhankelijk van wat er te eten was." },
          ],
          basiskennis: [{ onderwerp: "Niet 'sterkste'", uitleg: "Vaak misvatting: 'survival of the fittest' = sterkste. Eigenlijk: best AANGEPASTE — kan kleiner, sneller, slimmer of beter gecamoufleerd zijn." }],
          niveaus: { basis: "Denk aan de pepermot: wie het minst opvalt, wordt niet opgegeten en krijgt jongen.", simpeler: "Natuurlijke selectie: dieren die beter passen bij hun omgeving overleven en krijgen meer nakomelingen. Die nakomelingen erven de voordelen. Zo verandert een soort langzaam.", nogSimpeler: "De best passende dieren winnen." },
        },
      },
      {
        q: "**Wij (Homo sapiens) bestaan ongeveer hoe lang**?",
        options: ["300.000 jaar", "1 miljoen jaar", "10.000 jaar", "100 jaar"],
        answer: 0,
        wrongHints: [null, "Te lang — 1 miljoen jaar geleden leefden er wel andere mensachtigen, maar nog geen Homo sapiens.", "Te kort — zo lang bestaat alleen de landbouw pas.", "Veel te kort — heel de menselijke beschaving past niet in 100 jaar."],
        uitlegPad: {
          stappen: [
            { titel: "Tijdlijn menselijke evolutie", tekst: "• **Australopithecus (Lucy)**: 4-2 mln jr terug — eerste rechtoplopende voorouder\n• **Homo habilis**: 2,3-1,5 mln jr — eerste gereedschap-makers\n• **Homo erectus**: 2 mln-110.000 jr — verspreidde zich van Afrika → Azië/Europa\n• **Homo neanderthalensis**: 400.000-40.000 jr — Europese tak\n• **Homo sapiens (wij)**: **~300.000 jaar tot nu** — Afrikaanse oorsprong" },
            { titel: "Oudste sapiens-fossiel", tekst: "In **2017** werden in **Jebel Irhoud, Marokko** fossielen gevonden van ~300.000 jaar oud. Voor die ontdekking dachten we 200.000 jr. Onze soort is dus iets ouder dan we lang geloofden." },
            { titel: "Toets-perspectief: hoe klein 300.000 jaar is", tekst: "**Aarde**: 4.500.000.000 jaar (4,5 miljard)\n**Leven**: 3.500.000.000 jaar\n**Dinosauriërs**: 230-66 mln jr\n**Homo sapiens**: 300.000 jaar\nVergelijking: als de aarde 1 jaar bestond, zou Homo sapiens er pas in de **laatste 35 minuten** zijn." },
          ],
          woorden: [
            { woord: "Homo sapiens", uitleg: "Onze soort. Wetenschappelijke naam, Latijn voor 'wijze mens'." },
            { woord: "Australopithecus", uitleg: "Vroege mensachtige (4-2 mln jr terug), eerste rechtoplopende voorouder." },
            { woord: "geologische tijd", uitleg: "Aardgeschiedenis verdeeld in tijdperken (Krijt, Jura, etc.). Gebruikt mln en mlrd jaren." },
          ],
          theorie: "Belangrijke fossiel-ontdekkingen om te kennen voor de Doorstroomtoets:\n• **Lucy** (1974, Ethiopië) — Australopithecus, 3,2 mln jr\n• **Turkana Boy** (1984, Kenia) — Homo erectus, 1,6 mln jr\n• **Jebel Irhoud sapiens** (2017, Marokko) — oudste H. sapiens, 300.000 jr\n• **Neanderthal-fossielen** Duitsland 1856 — eerste niet-sapiens-mens ontdekt",
          voorbeelden: [
            { type: "feit", tekst: "Mensen + Neanderthalers paarden tussen 50.000-40.000 jr terug. Niet-Afrikanen hebben ~1-4% Neanderthal-DNA." },
            { type: "feit", tekst: "Beschaving (landbouw, dorpen) = 10.000 jr — slechts 3% van sapiens-bestaan." },
          ],
          basiskennis: [{ onderwerp: "Niet 1 miljoen jr", uitleg: "Verwarring: eerdere Homo-soorten (erectus) bestonden 1+ mln jr, maar Homo SAPIENS specifiek = 300.000 jr." }],
          niveaus: { basis: "In Jebel Irhoud (Marokko) liggen de oudste botten van onze soort; die zijn veel ouder dan de landbouw.", simpeler: "Homo sapiens (onze soort) bestaat ongeveer 300.000 jaar. Eerdere Homo-soorten zijn ouder.", nogSimpeler: "300.000 jaar." },
        },
      },
      { q: "Wie bedacht de **evolutie-theorie**?", options: ["Charles Darwin","Isaac Newton","Albert Einstein","Galileo"], answer: 0, wrongHints: [null, "Newton is van de zwaartekracht, geen biologie.", "Einstein is van de relativiteit, geen biologie.", "Galileo keek door zijn telescoop naar planeten."] },
      { q: "Wat is **natuurlijke selectie**?", options: ["Best aangepast overleeft vaker", "Puur toeval bepaalt wie overleeft", "Wie het hardst werkt, overleeft", "Wie geluk heeft, krijgt jongen"], answer: 0, wrongHints: [null, "Er zit een patroon in, geen puur toeval.", "Dieren overleven niet door hard te werken.", "Geluk speelt soms mee, maar bepaalt de richting niet."] },
      { q: "Op welke eilanden onderzocht Darwin **vinken**?", options: ["Galapagos","Hawaï","IJsland","Cuba"], answer: 0, wrongHints: [null, "Hawaï ligt midden in de Grote Oceaan bij Amerika — maar Darwin voer met de Beagle langs de kust van Zuid-Amerika. Klopt dat?", "IJsland ligt koud in het hoge noorden — passen kleine zangvogeltjes bij zo'n ijzige plek?", "Cuba ligt in de Caraïbische Zee — maar Darwins eilanden liggen vlak bij de evenaar aan de westkant van Zuid-Amerika. Welke groep is dat?"] },
      { q: "Wie was **Lucy**?", options: ["Een heel oud skelet", "Een beroemde onderzoekster", "Een uitgestorven apensoort", "Een plek in Afrika"], answer: 0, wrongHints: [null, "Lucy is zelf onderzocht; ze deed geen onderzoek.", "Lucy was geen aap, maar een vroege mensachtige.", "Lucy is gevonden in Afrika (Ethiopië), maar is zelf geen plek."] },
      { q: "Wat is een **fossiel**?", options: ["Versteende rest van een plant of dier", "Een gewone steen uit de grond", "Een plant of dier dat nog leeft", "Een plastic namaakbot van speelgoed"], answer: 0, wrongHints: [null, "Een fossiel lijkt op steen. Maar wat zit erin?", "Leeft een fossiel nog?", "Fossielen zijn echte resten."] },
      { q: "Wie is onze **dichtste verwant** in het dierenrijk?", options: ["Chimpansees","Honden","Katten","Krokodillen"], answer: 0, wrongHints: [null, "Honden wonen dicht bij ons, maar in de stamboom staan ze ver van ons af.", "Katten zijn zoogdieren, maar hun tak splitste al heel lang geleden van de onze.", "Krokodillen zijn reptielen — heel ver van ons af."] },
      { q: "Wat zijn **Neanderthalers**?", options: ["Een uitgestorven mensensoort", "Mensapen die nu nog leven", "Een uitgestorven soort reptiel", "Een soort vis van vroeger"], answer: 0, wrongHints: [null, "Leven Neanderthalers nu nog?", "Reptielen hebben schubben. Neanderthalers maakten werktuigen.", "Vissen leven in water. Neanderthalers maakten vuur."] },
      { q: "Wat is **uitsterven**?", options: ["De laatste van een soort sterft", "Een dier gaat in winterslaap", "Een soort verhuist naar een ander gebied", "Een soort krijgt steeds meer jongen"], answer: 0, wrongHints: [null, "Na een winterslaap wordt een dier weer wakker — de soort is er nog.", "Dan is de soort nog niet weg.", "Dat is juist het tegenovergestelde."] },
      { q: "Wat was vermoedelijk de oorzaak van het **uitsterven van de dinosaurussen**?", options: ["Een inslag van een meteoriet","De eerste mensen","Alleen een kouder klimaat","Een grote overstroming"], answer: 0, wrongHints: [null, "De mens kwam pas tientallen miljoenen jaren later.", "Het klimaat veranderde wel, maar dat was een gevolg, niet het begin.", "Een overstroming treft niet de hele aarde tegelijk."] },
      { q: "Hoeveel jaar oud is de **aarde** ongeveer?", options: ["4,5 miljard","100 miljoen","10.000","100.000"], answer: 0, wrongHints: [null, "Veel ouder — 100 miljoen jaar geleden leefden de dino's al.", "Veel ouder — 10.000 jaar geleden begon de landbouw pas.", "Veel ouder — 100.000 jaar geleden bestond onze soort al."] },
      { q: "Wat is **DNA**?", options: ["Erfelijk materiaal in cellen", "Een klein diertje in je bloed", "Een ziekte die je kunt krijgen", "Een soort vitamine uit je eten"], answer: 0, wrongHints: [null, "DNA is geen diertje dat leeft en rondzwemt.", "DNA is geen ziekte — ook gezonde mensen hebben het.", "DNA is geen voedingsstof die je eet."] },
      { q: "Wat is een **soort**?", options: ["Dieren die samen jongen kunnen krijgen", "Eén los dier met een eigen naam", "Een gezin: ouders met hun jongen", "Alle dieren die op aarde leven"], answer: 0, wrongHints: [null, "Een soort is een groep. Is één dier een groep?", "Een soort is veel groter dan één gezin.", "Kan een vis jongen krijgen met een kat?"] },
      { q: "Welk werelddeel wordt de **wieg van de mensheid** genoemd?", options: ["Afrika","Europa","Azië","Amerika"], answer: 0, wrongHints: [null, "Naar Europa trok de mens pas zo'n 50.000 jaar geleden.", "Naar Azië trok de mens later, vanuit het werelddeel van oorsprong.", "Amerika werd pas zo'n 15.000 jaar geleden bereikt."] },
      { q: "Wat zijn **restorganen** als bewijs voor evolutie?", options: ["Organen die hun functie verloren", "Organen die alleen baby's hebben", "Organen die nooit bestonden", "Belangrijke organen"], answer: 0, wrongHints: [null, "Baby's hebben dezelfde organen als jij. Waar komt het woord 'rest' vandaan?", "Restorganen bestaan echt — je hebt er zelf een paar.", "Belangrijke organen heb je elke dag nodig. Past dat bij het woord 'rest'?"] },
      { q: "Welke **eigenschappen** geven een dier voordeel bij overleven en voortplanten?", options: ["Eigenschappen die passen bij de omgeving", "Willekeurige eigenschappen", "Eigenschappen die het dier aanleert", "Eigenschappen die het dier zelf kiest"], answer: 0, wrongHints: [null, "Willekeurig is geen selectie — er wordt juist iets uitgekozen.", "Aangeleerde dingen erf je niet; ze gaan niet via het DNA naar de jongen.", "Een dier kiest zijn eigenschappen niet; het krijgt ze mee bij de geboorte."] },
      { q: "Wat zijn **mutaties**?", options: ["Veranderingen in het DNA", "Ziektes die je van je ouders krijgt", "Nieuwe soorten dieren", "Dieren die van kleur veranderen"], answer: 0, wrongHints: [null, "Een mutatie kan een ziekte geven, maar is zelf geen ziekte.", "Mutaties kunnen uiteindelijk tot nieuwe soorten leiden, maar zijn zelf iets kleins in de cel.", "Een kameleon verandert van kleur zonder dat zijn DNA verandert."] },
      { q: "De **pepermot** in Engeland: door fabrieksroet werden de bomen zwart. Wat gebeurde er met de motten?", options: ["Donkere motten overleefden beter", "Witte motten overleefden beter", "Er veranderde niets aan de motten", "Alle motten stierven helemaal uit"], answer: 0, wrongHints: [null, "Welke kleur mot viel op een zwarte stam juist het meest op voor vogels?", "De kleur van de bomen veranderde. Had dat echt geen gevolg voor wie er opviel?", "Er bleven wel motten over. Welke vielen het minst op?"] },
      { q: "Welke groep is de **directe voorouder** van de mens?", options: ["Vroege mensachtigen", "De apen van nu", "Reptielen", "Dinosaurussen"], answer: 0, wrongHints: [null, "Apen van nu zijn neven, geen voorouders.", "Reptielen staan heel ver van ons af in de stamboom.", "Dino's zijn de voorouders van vogels, niet van ons."] },
      { q: "Hoeveel mensen leven er nu ongeveer **op aarde**?", options: ["8 miljard","1 miljard","100 miljoen","30 miljard"], answer: 0, wrongHints: [null, "Meer — alleen al in India wonen ruim 1 miljard mensen.", "Veel meer — zoveel mensen wonen ongeveer in Japan alleen al.", "Minder — zoveel zijn het er nog lang niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const evolutieMensPo = {
  id: "evolutie-mens-po",
  title: "Evolutie + mens (groep 6-8, Doorstroomtoets-stof)",
  emoji: "🐒",
  level: "groep6-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / biologie",
  prerequisites: [
    { id: "bekende-wetenschappers-po", title: "Bekende wetenschappers", niveau: "1F" },
  ],
  intro:
    "Evolutie voor groep 6-8, Doorstroomtoets-stof — Darwin/natuurlijke selectie + voorbeelden (Galapagos-vinken + pepermot) + mens stamboom (Australopithecus/Lucy/Neanderthaler/Homo sapiens) + reis uit Afrika + bewijzen (fossielen/DNA/restorganen/Tiktaalik) + 4,5 mld jr aarde + 5 massa-uitstervingen. Sluit aan op Bekende wetenschappers. ~15 min.",
  triggerKeywords: [
    "evolutie", "Darwin",
    "natuurlijke selectie", "survival fittest",
    "Galapagos", "vinken",
    "pepermot",
    "Lucy", "Australopithecus",
    "Neanderthaler",
    "Homo sapiens", "voorouder",
    "fossielen", "DNA",
    "Tiktaalik", "Archaeopteryx",
    "uitsterving", "dinosaurus",
  ],
  chapters,
  steps,
};

export default evolutieMensPo;
