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
      "**Evolutie** = **langzame verandering** van levende wezens over **miljoenen jaren**.\n\n**Charles Darwin** *(1809-1882)* bedacht evolutietheorie *(zie pad 'bekende-wetenschappers')*. Boek: **'Over het ontstaan van soorten'** *(1859)*.\n\n**Hoe werkt evolutie?**\n\n**1. Variatie**:\n• Geen 2 dieren of mensen zijn precies gelijk.\n• Sommige sneller, andere sterker, weer andere slimmer.\n• Komt door **DNA-verschillen** *(genen)*.\n\n**2. Selectie**:\n• Sommige eigenschappen geven betere **overlevingskans**.\n• Bv. dier met betere camouflage = minder gepakt door roofdier.\n• Dat dier wordt ouder + krijgt kinderen.\n\n**3. Erfelijkheid**:\n• Eigenschappen worden **doorgegeven** van ouder op kind via DNA.\n• Kind heeft daarom ook goede eigenschap.\n\n**4. Tijd**:\n• Over **miljoenen jaren** stapelen veranderingen.\n• Soms heel langzaam, soms snel *(extreme omstandigheden)*.\n• Uiteindelijk nieuwe **soort**.\n\n**'Survival of the fittest'** *('Overleving van de geschiktste')*:\n• Het dier dat **best past bij omgeving** overleeft + plant zich voort.\n• Niet altijd 'sterkste' — soms slimste, snelste, mooiste, samenwerkingsbeste.\n\n**Voorbeeld: vinken op Galápagos** 🐦:\n• Darwin zag op deze eilanden vinkjes met **verschillende snavels**.\n• Op eiland met **harde noten**: vinken met **dikke snavels** *(kraken)*.\n• Op eiland met **insecten in gaten**: vinken met **lange dunne snavels** *(pikken)*.\n• Alle uit gemeenschappelijke voorouder.\n• Aanpassing aan voedsel → 'natuurlijke selectie'.\n\n**Voorbeeld: pepermot** 🦋:\n• Pre-industriële revolutie *(voor 1800)*: meeste motten **wit-gekleurd** *(camouflage op witte bomen)*.\n• Industriële revolutie: bomen **zwart** door fabriek-roet.\n• Mottenpopulatie: snel meer **zwart-gekleurd** *(beter gecamoufleerd)*.\n• Na schoner-milieu: weer meer witte.\n• Bewezen evolutie binnen ~150 jaar!\n\n**Snel of langzaam?**\n\n• Bacteriën: **uren** *(nieuwe generatie elke 20 min)*.\n• Vliegen: **dagen**.\n• Muizen: **weken**.\n• Honden *(door fokken)*: jaren.\n• Mensen: **honderdduizenden tot miljoenen jaren**.\n\n**Evolutie nu nog steeds**:\n• **Bacteriën resistent tegen antibiotica** *(superbugs).*\n• Insecten resistent tegen pesticide.\n• Mensen passen ook nog langzaam aan *(grotere hersenen, kleinere kaak)*.\n\n**Massa-uitsterving** *(extinction event)*:\n• Soms grote ramp → veel soorten weg.\n• **5 grote uitstervingen** in geschiedenis:\n  - **Ordovicium** *(444 mln jr geleden)*.\n  - **Devoon** *(372 mln)*.\n  - **Perm** *(252 mln, grootste — 96% weg)*.\n  - **Trias** *(201 mln)*.\n  - **Krijt** *(66 mln geleden — dino's weg door planetoïde)*.\n• Wetenschappers zeggen we zitten in **6e massa-uitsterving** *(door mens)*.\n\n**Cito-feitje**:\nDe **eerste levende cellen** op aarde ontstonden ~**3,5 miljard jaar geleden**. **Meercellige wezens**: ~600 mln. **Vissen**: 525 mln. **Reptielen**: 320 mln. **Zoogdieren**: 200 mln. **Eerste mens** *(Homo)*: 2,5 mln. **Moderne mens** *(Homo sapiens)*: 300.000 jaar!",
    checks: [
      {
        q: "Wie schreef **evolutietheorie** in boek?",
        options: ["Charles Darwin (1859)", "Newton", "Einstein", "Mendel"],
        answer: 0,
        wrongHints: [null, "Klopt — 'Over het ontstaan'.", "Zwaartekracht.", "Relativiteit.", "Erfelijkheid."],
      },
      {
        q: "Wat is **natuurlijke selectie**?",
        options: ["Best aangepast overleeft + plant zich voort", "Toeval", "Snel", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet primair.", "Niet specifiek.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is natuurlijke selectie?", tekst: "Natuurlijke selectie is het belangrijkste motor van evolutie. Het gaat zo: in elke generatie zijn er **kleine verschillen** tussen individuen." },
            { titel: "Best aangepast overleeft", tekst: "Wie het BEST PAST bij zijn omgeving (sterke spieren, betere camouflage, snelheid, etc) heeft de meeste kans om te OVERLEVEN en JONGEN te krijgen." },
            { titel: "Slechte eigenschappen sterven uit", tekst: "Wezens met slechte eigenschappen sterven eerder of krijgen minder jongen. Hun eigenschappen verdwijnen langzaam uit de soort. Zo verandert de soort over generaties." },
          ],
          woorden: [
            { woord: "natuurlijke selectie", uitleg: "Best aangepaste wezens overleven en planten zich voort." },
            { woord: "survival of the fittest", uitleg: "Engelse term: 'overleving van de geschiktste' (door Herbert Spencer)." },
          ],
          theorie: "Cito-tip: natuurlijke selectie is GEEN toeval. Het selecteert systematisch: betere eigenschappen winnen. Over miljoenen jaren ontstaat zo een nieuwe soort.",
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
        q: "Hoe lang **moderne mens** (Homo sapiens) bestaat?",
        options: ["~300.000 jaar", "1000 jaar", "6000 jaar", "Miljarden jaar"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te kort.", "Te kort.", "Te lang."],
        uitlegPad: {
          stappen: [
            { titel: "Homo sapiens = wij", tekst: "**Homo sapiens** ('wijze mens') is de **wetenschappelijke naam** voor ons soort, de moderne mens. Wij bestaan ongeveer **300.000 jaar** als soort." },
            { titel: "Waar kwam de soort vandaan?", tekst: "Onze soort ontstond in **Afrika** (vooral oost-Afrika, omgeving Ethiopië/Kenia). Vandaar trokken Homo sapiens ~70.000 jaar geleden de wereld over: Azië, Europa, Amerika, Australië." },
            { titel: "Voor context: andere tijden", tekst: "• Aarde = **4,5 miljard** jaar oud.\n• Dinosauriërs = ~165 mln jaar geleefd (uitgestorven 66 mln jr terug).\n• Eerste mens-achtigen (hominiden) = ~7 mln jr geleden.\n• Homo sapiens = pas **300.000 jaar**.\nWij zijn dus 'jong' op planeet-tijdschaal." },
          ],
          woorden: [
            { woord: "Homo sapiens", uitleg: "Wetenschappelijke naam moderne mens, 'wijze mens'." },
            { woord: "soort", uitleg: "Wezens die zich met elkaar kunnen voortplanten." },
          ],
          theorie: "Cito-tijdsschalen om te kennen:\n• Aarde: 4,5 mld jr.\n• Dino-tijdperk eindigde: 66 mln jr terug.\n• Mens-aap gemeenschappelijke voorouder: 7 mln jr terug.\n• **Homo sapiens**: **300.000 jr**.\n• Landbouw: 12.000 jr.\n• Schrift: 5.000 jr.",
          voorbeelden: [
            { type: "stap", tekst: "6000 jaar = Bijbelse aanname, niet wetenschap." },
            { type: "stap", tekst: "Miljarden jaar = leeftijd aarde, niet mens." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Homo sapiens = 300.000 jaar. Aarde = 4,5 miljard. Verschil = 15.000x! Wij zijn een klein vlekje in aarde-geschiedenis." }],
          niveaus: {
            basis: "~300.000 jaar. = A.",
            simpeler: "Moderne mens (Homo sapiens) is een vrij jonge soort, ~300.000 jaar. = A.",
            nogSimpeler: "300.000 jaar = A.",
          },
        },
      },
      {
        q: "Wat zijn **dino's** uitgestorven oorzaak?",
        options: ["Planetoïde-inslag 66 mln jr geleden", "Vulkaan alleen", "Mens", "Niet uitgestorven"],
        answer: 0,
        wrongHints: [null, "Klopt — Krijt-uitsterving.", "Hielp wel.", "Mens kwam later.", "Wel uitgestorven."],
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
          theorie: "Cito-feit: kleine dieren overleefden (vogels = afstammelingen van dino's eigenlijk! Plus zoogdieren die later mensen werden). Niet ALLE dino's stierven uit — vogels zijn techn. nog dino's.",
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
      "**Belangrijke nuance**: mens stamt **NIET af van aap** zoals we die nu kennen.\n\n**Mens + chimpansee + gorilla** hebben een **gemeenschappelijke voorouder** ~**7 miljoen jaar geleden** *(een soort dier dat geen aap was zoals nu, en geen mens)*.\n\n**Mensen-stamboom** *(simpel)*:\n\n**Aap-achtige voorouder** *(~7 mln jr)*\n   ↓\n**Splitst** in:\n• → richting moderne aap *(chimpansee 99% DNA overeenkomst met mens)*.\n• → richting mens-achtigen *(hominide)*.\n\n**Hominiden** *(menselijke voorouders)*:\n\n**1. Australopithecus** *(4-2 mln jr geleden)*:\n• Beroemd: **'Lucy'** *(gevonden Ethiopië 1974)*.\n• 1 meter lang.\n• Liep al rechtop *(belangrijk!)*.\n• Maar wel klein brein.\n• 'Aap-mens' achtig.\n\n**2. Homo habilis** *('handige mens', 2,4-1,5 mln jr)*:\n• Maakte **eerste werktuigen** *(stenen schraapsel)*.\n• Brein groter dan Australopithecus.\n\n**3. Homo erectus** *('rechtopgaande mens', 1,9 mln - 110.000 jr)*:\n• Eerste die **vuur** gebruikte.\n• Liep lang.\n• Zwierf van Afrika naar Azië + Europa.\n• Onze directe voorouder.\n\n**4. Neanderthaler** *(400.000 - 40.000 jr geleden)*:\n• Apart soort, dichtbij moderne mens.\n• Vooral in **Europa**.\n• Bouwde tools, kunst, ritueel.\n• Groter brein dan moderne mens!\n• Stierf uit ~40.000 jaar geleden — onbekend precies waarom.\n• ~2% van **Europees DNA** komt van Neanderthaler *(door kruising)*.\n• Recente onderzoek: niet 'primitief' — wel intelligent.\n\n**5. Denisovan** *(in Azië)*:\n• Apart soort.\n• Kruiste ook met moderne mens.\n• 5% DNA in **Aziatische + Pacifische** mensen.\n\n**6. Homo sapiens** *('wijze mens', 300.000+ jr geleden - nu)*:\n• **Onze soort**.\n• Ontstond in **Afrika**.\n• Verspreidde 70.000 jaar geleden over hele wereld.\n• Versloeg Neanderthaler + Denisovan.\n• Bouwde alle beschaving die we kennen.\n\n**Reis van mens** *(uit Afrika)*:\n• **70.000 jr geleden**: vanuit Afrika.\n• **60.000 jr**: Azië.\n• **50.000 jr**: Europa + Australië.\n• **15.000-20.000 jr**: Noord-Amerika via Bering-landbrug.\n• **12.000 jr**: Zuid-Amerika.\n\n**Belangrijke ontwikkelingen mensheid**:\n\n• **Rechtop lopen** *(~4 mln jr)*: handen vrij voor maken gereedschap.\n• **Vuur gebruiken** *(~1 mln jr)*: gekookt eten + warmte + bescherming.\n• **Werktuigen** *(2,5 mln jr)*: stenen messen, speren.\n• **Taal** *(~100.000 jr — schatting)*: samenwerken.\n• **Landbouw** *(~12.000 jr)*: vaste woonplaats + steden + beschaving.\n• **Schrift** *(~5.000 jr)*: kennis bewaren over generaties.\n• **Wetenschap + technologie** *(~500 jr)*: snelle vooruitgang.\n\n**Cito-feitje**:\nWe deelen **~98,8% DNA met chimpansees**. Verschil is klein maar gevolgen enorm. Mensen hebben **veel grotere hersenen** *(3x zwaarder dan chimpansee-brein)*. Daarom kunnen we lezen, schrijven, denken over toekomst, leven in steden van miljoenen.",
    checks: [
      {
        q: "Stamt mens **af van aap** zoals nu?",
        options: ["Nee — gemeenschappelijke voorouder ~7 mln jr", "Ja, van chimpansee", "Mens is helemaal apart", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet — beide afstammelingen.", "Wel verwant.", "Wel."],
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
          theorie: "Cito-nuance: 'Mens stamt af van aap' is fout. 'Mens en aap delen een voorouder' is juist. Wij delen 98,8% DNA met chimpansee — heel verwant, maar geen ouder-kind.",
          voorbeelden: [
            { type: "stap", tekst: "Lijn 1 (na splitsing): Australopithecus → Homo erectus → Homo sapiens (wij)." },
            { type: "stap", tekst: "Lijn 2 (na splitsing): voorouder → chimpansee + bonobo (huidige apen)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Mens + aap = NEEFJES. Niet ouder-kind." }],
          niveaus: {
            basis: "Mens en aap hebben gemeenschappelijke voorouder ~7 mln jr geleden.",
            simpeler: "Mens stamt NIET af van moderne aap, ze zijn neefjes.",
            nogSimpeler: "Mens + aap = neefjes.",
          },
        },
      },
      {
        q: "Wie was **Lucy**?",
        options: ["Australopithecus-skelet uit Ethiopië 1974", "Eerste mens op maan", "Schilderij", "Auto"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Lucy?", tekst: "**Lucy** is de bijnaam van een beroemd **3,2 miljoen jaar oud skelet** van een **Australopithecus afarensis** — een vroege mens-voorouder. Gevonden in **Ethiopië** in **1974**." },
            { titel: "Waarom 'Lucy'?", tekst: "De ontdekkers (onder leiding van Donald Johanson) luisterden naar het Beatles-nummer **'Lucy in the Sky with Diamonds'** terwijl ze graven. Vandaar de bijnaam — niet haar echte naam (die kennen we niet)." },
            { titel: "Waarom belangrijk?", tekst: "Lucy bewees dat **mens-achtigen al rechtop liepen** vóór ze grote hersenen kregen. Hersenen kwamen LATER. Eerste belangrijk bewijs over de mens-evolutie." },
          ],
          woorden: [
            { woord: "Australopithecus", uitleg: "Vroege mens-achtige (4-2 miljoen jaar geleden)." },
            { woord: "hominide", uitleg: "Familie waar mens + voorouders bij horen." },
          ],
          theorie: "Cito-feit Lucy:\n• 3,2 miljoen jaar oud.\n• Ongeveer 1 meter lang.\n• Liep rechtop (bewijs uit bekken + been-botten).\n• Klein brein (~400 cc — vergelijk: moderne mens ~1400 cc).\n• Vrouwelijk skelet, ~25 jaar oud bij overlijden.",
          voorbeelden: [
            { type: "stap", tekst: "Lucy is GEEN onze directe voorouder, maar een neefje. Onze stamlijn ging via Homo habilis → Homo erectus → Homo sapiens." },
            { type: "stap", tekst: "Origineel skelet ligt in het Nationaal Museum van Ethiopië. Replica's wereldwijd." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lucy + Ethiopië + 1974 + Australopithecus = de combinatie. Beroemd skelet, bekendste fossiel mens-voorouder." }],
          niveaus: {
            basis: "Lucy = Australopithecus-skelet uit Ethiopië (1974). = A.",
            simpeler: "3,2 miljoen jaar oud skelet, 1 meter lang, liep al rechtop. Gevonden in 1974, bijnaam uit Beatles-lied. = A.",
            nogSimpeler: "Lucy = oud skelet Ethiopië = A.",
          },
        },
      },
      {
        q: "Wie stierf uit ~40.000 jr geleden?",
        options: ["Neanderthaler", "Homo sapiens", "Lucy", "Apen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wij — bestaan nog.", "Veel eerder.", "Niet."],
      },
      {
        q: "Hoeveel **DNA-overeenkomst** mens-chimpansee?",
        options: ["~98,8%", "10%", "50%", "100%"],
        answer: 0,
        wrongHints: [null, "Klopt — heel dichtbij.", "Te weinig.", "Te weinig.", "Zou zelfde wezen zijn."],
      },
    ],
  },
  {
    title: "Hoe weten we dit? Bewijzen evolutie",
    explanation:
      "Hoe weten wetenschappers over evolutie? **Bewijzen** van vele soorten:\n\n**1. Fossielen** 🦴:\n• Versteende resten van oude wezens.\n• Vinden in bepaalde gesteente-lagen.\n• Diepere laag = ouder.\n• Tonen **soorten van toen** + hoe zij verandert zijn.\n\n**Bekende fossielen**:\n• **Tyrannosaurus rex**: gevonden in VS, 65 mln jr.\n• **Archaeopteryx**: 'tussen-dier' reptiel + vogel *(150 mln jr)*.\n• **Tiktaalik**: tussen vis + landdier *(375 mln jr)*.\n• **Lucy** *(Australopithecus, 3,2 mln jr)*: tussen aap + mens.\n• **Ötzi** *(de IJsman, 5300 jr)*: gevonden in Alpen 1991, intact!\n\n**2. DNA-onderzoek** 🧬:\n• Alle leven heeft **DNA** *(genetische code)*.\n• Soorten met **vergelijkbaar DNA** zijn dichter verwant.\n• Mens + chimpansee: 98,8% DNA gelijk.\n• Mens + muis: ~85%.\n• Mens + bananenplant: ~50%.\n• Mens + bacterie: ~25%.\n\n**3. Vergelijken anatomie**:\n• Hand van mens, vleugel van vogel, vin van walvis: **gelijke botten** *(alleen vorm anders)*.\n• Bewijs dat afkomstig van zelfde voorouder.\n• Heet **'homologe organen'**.\n\n**4. Vergelijken embryo's**:\n• Vroege embryo's van mens, kip, vis, muis: **bijna gelijk**.\n• Allemaal hebben kieuwspleten *(verdwijnen later bij landdieren)*.\n• Bewijs van gemeenschappelijke voorouder.\n\n**5. Restorganen** *(vestigial)*:\n• Organen die **nog bestaan** maar **geen functie** meer hebben.\n• Bv. **blindedarm** mens *(was darm-deel voor planten verteren bij voorouders)*.\n• Bv. **wijsheidskiezen** *(kaak werd kleiner)*.\n• Bv. **kleine pinkje teen** mens *(verdwijnt langzaam)*.\n• Bv. walvis-bot in lichaam *(was achter-poot bij voorouder)*.\n\n**6. Direct waargenomen evolutie**:\n• **Pepermot** in industriële revolutie.\n• **Bacteriën resistent** tegen antibiotica.\n• **Insecten resistent** tegen pesticide.\n• **Galápagos-vinken** snavels nog steeds aanpassend door klimaatverandering.\n• Allemaal in **enkele decennia** gemeten.\n\n**7. Stamboom-vergelijking**:\n• DNA + fossielen combineren = **fylogenetische boom** *(stamboom)* van alle leven.\n• Alle soorten met elkaar verbonden.\n• Geen 'aparte' creaties — alles uit voorouders.\n\n**Hoe oud is aarde?**\n• ~**4,5 miljard jaar**.\n• Gemeten door **radiocarbon-dating** *(verval van isotopen)*.\n• Bevestigd door geologie + astronomie.\n\n**Misvattingen over evolutie**:\n\n**'Mens stamt van aap'**:\n• **NEE** — gemeenschappelijke voorouder.\n\n**'Evolutie heeft doel'**:\n• **NEE** — geen plan, geen 'beter worden'.\n• Alleen aanpassing aan omgeving.\n\n**'Mensen zijn evolutionaire 'eindpunt''**:\n• **NEE** — geen eindpunt, evolutie gaat door.\n\n**'Evolutie is theorie dus niet bewezen'**:\n• **NEE** — 'theorie' in wetenschap betekent **best-onderbouwde verklaring**.\n• Zoals 'zwaartekrachts-theorie' = bewezen.\n• Evolutie is **fact + theorie**: gebeurt + verklaring waarom.\n\n**Religie + evolutie**:\n• Sommige geloven dat **God de wereld schiep** *(creatie)* + evolutie wijst af.\n• Andere combineren: God leidde evolutie *(theistische evolutie)*.\n• **Wetenschappelijk consensus**: evolutie gebeurde + gebeurt.\n• Katholieke kerk accepteert evolutie sinds 1996 *(paus Johannes Paulus II)*.\n\n**Cito-feitje**:\nDe **Vier Vragen van Tinbergen** *(Nederlandse Nobelprijswinnaar 1973)* zijn beroemde manier om gedrag te onderzoeken:\n1. **Hoe** doet het dier dit? *(mechanisme)*\n2. **Wanneer** in leven? *(ontwikkeling)*\n3. **Waarvoor**? *(functie)*\n4. **Waarom** zo geëvolueerd? *(evolutie)*",
    checks: [
      {
        q: "Wat zijn **fossielen**?",
        options: ["Versteende resten oude wezens", "Levende dieren", "Mineralen alleen", "Computers"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenovergesteld.", "Niet primair.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat zijn fossielen?", tekst: "**Fossielen** zijn versteende resten van planten of dieren die heel lang geleden leefden. Botten, schelpen, bladafdrukken — alles wat over de tijd is **versteend** in gesteente." },
            { titel: "Hoe ontstaat een fossiel?", tekst: "1) Dier sterft, valt in modder of slib.\n2) Vlees rot weg, alleen **botten** blijven over.\n3) Modder + zand bedekt langzaam alles.\n4) Over miljoenen jaren **drukt** de aarde dit + **mineralen** vervangen het bot.\n5) Eindresultaat: **steen** in de vorm van het bot." },
            { titel: "Waarom belangrijk?", tekst: "Fossielen zijn **bewijs** van wat er vroeger leefde. Door **leeftijd te meten** (radiocarbon-dating) weten we wanneer een fossiel uit welke periode komt. Diepere gesteente-laag = ouder fossiel." },
          ],
          woorden: [
            { woord: "fossiel", uitleg: "Versteende rest van oud organisme." },
            { woord: "radiocarbon-dating", uitleg: "Methode om leeftijd van organisch materiaal te meten." },
            { woord: "paleontologie", uitleg: "Wetenschap die fossielen bestudeert." },
          ],
          theorie: "Cito-feit beroemde fossielen:\n• **Tyrannosaurus rex** (65 mln jr)\n• **Archaeopteryx** (150 mln jr, tussen reptiel + vogel)\n• **Lucy** (Australopithecus, 3,2 mln jr)\n• **Tiktaalik** (375 mln jr, tussen vis + landdier)\n• **Ötzi** (de IJsman, 5300 jr, intact in Alpen-gletsjer).",
          voorbeelden: [
            { type: "stap", tekst: "Ammonieten (versteende schelpen) zijn populair in geologie-musea." },
            { type: "stap", tekst: "Niet álle wezens worden fossiel. Vereist speciale omstandigheden — vlak terrein + snel bedekt + mineralen-rijk water." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Fossiel = STEEN in vorm van oud dier/plant. Niet levend, niet plastic. Vereist miljoenen jaren om te vormen." }],
          niveaus: {
            basis: "Versteende resten van oude wezens. = A.",
            simpeler: "Botten + schelpen van lang geleden, nu versteend in gesteente. = A.",
            nogSimpeler: "Versteende botten = A.",
          },
        },
      },
      {
        q: "Hoe oud is **aarde**?",
        options: ["~4,5 miljard jaar", "6000 jaar", "1 miljoen", "Eeuwig"],
        answer: 0,
        wrongHints: [null, "Klopt — radiocarbon-dating.", "Niet wetenschap.", "Te weinig.", "Niet."],
      },
      {
        q: "Wat is **restorgaan** voorbeeld?",
        options: ["Blindedarm + wijsheidskiezen", "Hart", "Hersenen", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt — geen functie meer.", "Wel functie.", "Wel.", "Bestaan wel."],
      },
      {
        q: "Hoeveel **DNA-overeenkomst** mens-muis?",
        options: ["~85%", "10%", "100%", "Niet"],
        answer: 0,
        wrongHints: [null, "Klopt — dichtbij.", "Te weinig.", "Onmogelijk.", "Wel overeenkomst."],
      },
    ],
  },
  {
    title: "Eind-toets — evolutie mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wie schreef **evolutietheorie** boek?", options: ["Darwin (1859)", "Newton", "Mendel", "Einstein"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Erfelijkheid.", "Niet."] },
      { q: "Stamt mens **af van moderne aap**?", options: ["Nee — gem. voorouder ~7 mln", "Ja", "Niet bekend", "Geen verband"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Wel.", "Wel verband."] },
      { q: "**'Lucy'** is welke voorouder?", options: ["Australopithecus", "Neanderthaler", "Homo sapiens", "Chimpansee"], answer: 0, wrongHints: [null, "Klopt — Ethiopië 1974.", "Later.", "Wij.", "Andere tak."] },
      { q: "Hoe oud is **aarde**?", options: ["~4,5 miljard jr", "6000", "1 miljoen", "Eeuwig"], answer: 0, wrongHints: [null, "Klopt.", "Religieus.", "Te kort.", "Wel ouderdom."] },
      { q: "**5e massa-uitsterving** = ?", options: ["Krijt 66 mln (dino's weg)", "Mens nu", "Geen ramp", "Vulkaan"], answer: 0, wrongHints: [null, "Klopt.", "6e (huidige).", "Wel ramp.", "Wel bijdrage."] },
      { q: "Hoeveel **mens-chimpansee DNA** overeenkomst?", options: ["~98,8%", "10%", "0%", "50%"], answer: 0, wrongHints: [null, "Klopt.", "Te weinig.", "Wel.", "Te weinig."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const evolutieMensPo = {
  id: "evolutie-mens-po",
  title: "Evolutie + mens (Cito groep 6-8)",
  emoji: "🐒",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / biologie",
  prerequisites: [
    { id: "bekende-wetenschappers-po", title: "Bekende wetenschappers", niveau: "1F" },
  ],
  intro:
    "Evolutie voor Cito groep 6-8 — Darwin/natuurlijke selectie + voorbeelden (Galapagos-vinken + pepermot) + mens stamboom (Australopithecus/Lucy/Neanderthaler/Homo sapiens) + reis uit Afrika + bewijzen (fossielen/DNA/restorganen/Tiktaalik) + 4,5 mld jr aarde + 5 massa-uitstervingen. Sluit op bekende-wetenschappers. ~15 min.",
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
