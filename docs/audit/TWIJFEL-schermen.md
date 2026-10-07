# TWIJFEL — Audit deel 6 "Schermen & teksten" (7 okt 2026)

Niet gewijzigd. Per punt: waar, wat er nu staat, waarom twijfel, voorstel. Eerst de eindredactie (Claude, na het nalopen van alle herstellingen en de kliktocht), daarna per nakijkgroep (13 groepen).

## 0. Eindredactie — eigen vondsten en teruggedraaide voorstellen

### Kapotte of lege schermen (ernst 3, geen tekstherstel mogelijk)
- **/leerlijn is leeg op een vers apparaat** — src/App.jsx:1654 toont de pagina alleen als `activeCurriculumId` gezet is. De zoekbalk-snelkoppeling "🧵 Leerlijn — Alles op volgorde, van groep 3 tot examen" (src/features/learn/snelkoppelingen.js:81) stuurt er wél heen → het kind ziet alleen de voettekst (docs/audit/schermen/voor/r06-curriculum.png). Voorstel: zonder gekozen leerlijn terugvallen op het leer-overzicht, of de snelkoppeling weghalen.
- **/upgrade is leeg** — de route staat in src/app/routes.js ("upgrade"), maar App.jsx heeft geen scherm voor die pagina (voor/r65-upgrade.png). Voorstel: doorsturen naar /familie of uit de routetabel halen.
- **/komt-eraan en /leerkracht/toets-preview zijn leeg bij een directe link** (alleen navigatiebalk + voettekst; voor/r07-learn-meebezig.png, voor/r61-quiz-preview.png) — ze verwachten state uit een vorige stap. Ernst 2: alleen via een gedeelde of opgeslagen link. Voorstel: zonder state doorsturen naar /leren resp. /leerkracht.
- **Gegenereerde examenvraag-pagina's lopen achter op de data** — scripts/buildExamenVraagPaginas.mjs en scripts/build-examen-set-indexes.mjs draaien niet in `prebuild`. Opnieuw draaien maakt nieuwe en hernoemde pagina's (o.a. map public/examen/nederlands/; sitemap niet bijgewerkt). Daarom heb ik alleen de 3 tekstherstellingen mechanisch op de bestaande 278 pagina's toegepast. Voorstel: Mark beslist of de generatoren opnieuw moeten draaien (+ sitemap).
- **Knop "Oefen deze vraag interactief"** op elke examenvraag-pagina linkt naar /leerpaden/<id>; die route bestaat niet → startpagina. Zie groep H2.

### Zelf gezien in de kliktocht
- **Mijn pagina (brugklas): "Leerkwartier adviseert nu: Frans, duits, geschiedenis."** — src/features/account/MijnPagina.jsx:1841 maakt vaknamen klein met `.toLowerCase()`; "Duits" hoort met hoofdletter. Logica, niet gewijzigd. Voorstel: de titels niet klein maken.
- **Kop "Testbrugklas’s Leerkwartier"** — Engelse bezits-apostrof (ook bij B1). Nederlands: "Sams Leerkwartier" / "Thomas' Leerkwartier" (logica voor namen op s/x/z), of neutraal "Mijn Leerkwartier".
- **Oefen-Doorstroomtoets: "Mix van rekenen, taal en studievaardigheden"** (src/components/CitoLeerpadToets.jsx) — sinds 2024 bestaat de toets uit lezen, taalverzorging en rekenen (zie Q8). Welke vragen de mix trekt is logica; voorstel: "Mix van rekenen, taal en lezen" zodra de mix dat ook doet.
- **Leren-overzicht: filter "Doorstroomtoets: Taal · Rekenen · Lezen · Wereldoriëntatie"** — wereldoriëntatie zit niet in de Doorstroomtoets. Voorstel: Wereldoriëntatie uit deze rij, of kop "Groep 6-8:".
- **Oefen-Doorstroomtoets: kop "5 vragen uit je leerpaden" en "een korte oefen-toets"** — jargon en spelling ("oefentoets"). Voorstel: "5 vragen uit wat je al oefende".
- **Kaart "Leerling — basisschool · groep 3 t/m 8" toont daarna groepknoppen 1 t/m 8** — kleine inconsistentie. Voorstel: "groep 1 t/m 8" of knoppen 3-8.
- **Startpagina: "500+ bezoekers per maand"** — in sep 2026 waren het 1.066 unieke apparaten (events_mens). Welk getal er staat is Marks keuze.

### Voorstellen van nakijkers die ik bij de eindredactie heb teruggedraaid of aangepast
- **ZookwartierGame.jsx:3581 "de kabouters bouwen een {souvenirNaam}"** — groep F2 wilde "een" weghalen, maar deze namen komen uit src/features/zoo/uitvindersData.js en beginnen NIET met "een" ("Newtons boompje", "Mini-piramide"). Het voorstel zou "bouwen Newtons boompje" geven. "Een Newtons boompje" loopt ook niet lekker. Voorstel: lidwoord in het veld zetten, of "de kabouters bouwen dit souvenir voor je park: …".
- **Drukwerk: "als je kind vastloopt" → "als uw kind vastloopt" (15 flyers) en "van je telefoon" → "van uw telefoon" (flyer-bulk)** — groep I maakte de flyers consequent in de u-vorm, maar de huisregel zegt: ouderteksten in je-vorm. Bijna al het drukwerk staat in u (B1-taal voor hulporganisaties). Mark beslist: drukwerk consequent in u, of alles naar je. (16 voorstellen niet toegepast.)
- **over.html** — voorstel "Kies op de homepage voor 'Doorstroomtoets oefenen'" bestaat ook niet als knop → toegepast als "Tik onderaan op 'Toets'" (de tab in BottomNav).
- **flyer ALKMAAR/KINDERHULP** — voorstel "Er gaat nooit zomaar geld af" vond ik onduidelijk → toegepast als "Daarna betaalt u alleen als u daar zelf voor kiest."
- **DicteePage "Schrijf op het woord dat je hoorde."** — de zin is ook de vertaalsleutel voor nieuwkomers (regel 363); de sleutel is meeveranderd, anders was de vertaling weggevallen.

### Weekrapport-dag
Alle schermen, mails en pagina's die "maandag" noemden voor het weekrapport staan nu op "vrijdag" (sinds 30 sep, workflow ouder-weekrapport.yml volgens de nakijkers). Even bevestigen dat de workflow echt op vrijdag draait.

---

## Groep A — kern-schermen

### Huisregels / prijs
- **src/components/BottomNav.jsx:47-55** — tabs Home 🏠, Leren 📚, Toets maken 📝 (leerkracht), Spelletje 🎮 gebruiken emoticons als navigatie-icoon (alleen "Mijn pagina" heeft het logo, "Toets" het Doorstroomtoets-logo). Botst met de huisregel "geen emoticon als icoon in de navigatie" en Marks eigen citaat in het bestand ("nooit een emoticon gebruiken, zo goedkoop"). Geen tekstherstel: het vraagt nieuwe iconen (SVG). Voorstel: lijn-iconen (huis, boek, potlood, spelcontroller) in dezelfde stijl.
- **src/components/Header.jsx:82** — huisknop toont 🏠 als icoon in de kopbalk. Zelfde huisregel. Voorstel: huis-SVG.
- **src/app/ErrorBoundary.jsx:238** ("🏠 Naar home") en **AdminStats/AdminFeedback/AdminAIReferrers** ("🏠 Home") — emoticon in knop. Valt niet onder de navigatie, wel noemen.
- **src/components/ProPage.jsx:257 + :266** — "Je hebt 30 dagen gratis toegang…" / "30 dagen alle …-extra's — geen creditcard". Huisregel: een proefweek van 7 dagen zonder betaalgegevens. Niet zelf aangepast, want de logica rekent echt met 30 dagen (App.jsx:1005 `30 - …`, en abonnement.html:314 "Je proef-Familie staat aan: 30 dagen."). Het blok staat achter PAYWALL_ACTIVE. Voorstel: logica en tekst samen op 7 dagen zetten, plus "geen creditcard" → "geen betaalgegevens".
- **src/components/ProPage.jsx:236** — "🔐 Kind koppelen via veilige gezinscode" staat bij "Alleen met Familie", maar koppelen is gratis (appGids, Rondleiding). Voorstel: deze regel weghalen of vervangen door "Kwartierplan".
- **src/components/ProPage.jsx:102 + :184** — "Bent u een school?" / "krijgt u gratis op aanvraag". De huisregel zegt "geen u", maar proPlan.js (22 sep) noemt "Bent u een school?" als bewuste keuze. Voorstel: "Ben je leerkracht of werk je op een school?" / "krijg je gratis op aanvraag".
- **src/components/StudentHome.jsx:1259** "Familie-extra's (bèta)" en **AdminStats.jsx:120-122** "✨ Pro-extra's — gebruik / Nog geen Pro-feature gebruikt" (alleen admin) — het woord "Pro" leeft nog. Admin-only, laag risico. Voorstel: "Familie-extra's — gebruik".
- **src/subscription/PaywallGate.jsx:62** — "Werkbladen printen" kan als betaalde extra op slot (FEATURE_GATES), terwijl "Werkbladen printen" voor scholen gratis is t/m 2031. Dat is logica, geen tekst: controleer FEATURE_GATES voordat de paywall aangaat.
- **src/components/PakketUitleg.jsx:213**, **ProPage.jsx:35**, **proPlan.js:136** — "Ouder-overzicht", "Ouder-dashboard", "Ouder-inzicht": de ouder wordt alleen "ouder" genoemd, en er staan drie namen voor hetzelfde ding. Voorstel: één naam, bijvoorbeeld "Thuis-overzicht" (appGids gebruikt al "thuis-overzicht").
- **src/data/appGids.js:50** — "heel 2027 én 2028 lang (codes van de eerste partners)" klopt met partnerCode.js (PARTNER_PRO_TOT 2028-12-31). De dagrapport-SQL in CLAUDE.md zegt echter "t/m 31-12-2027", en voor Ooievaarspas geldt "blijvend". Ter info, de schermtekst lijkt goed.
- **src/data/appGids.js:26** — knop "📊 overzicht" komt in de huidige code nergens als label voor (grep vindt alleen de appGids zelf). Controleer het echte label in OuderInzicht.
- **index.html:208-209 (FAQ "Wat is een goed gratis alternatief voor Squla?")** — concurrent bij naam. Heeft een SEO-functie, dus niet zelf aangepast. Ook: "is in 2026 gratis te gebruiken" → beter "de basis is gratis, gegarandeerd t/m 2031".
- **index.html:153 / 94 / 115 / 451** — "Cito eindtoets", "Cito-stijl oefenvraag", "Hoe kan ik gratis de Cito eindtoets oefenen?". Dit zijn SEO-keywords in verborgen of crawlbare tekst. Bewust laten staan?
- **index.html:451** — "Twee niveaus: 1F (fundamenteel …) en 1S (streven …)". Elders staat 2F/1S (niveauIndicatie.js). Inhoudelijk feit, niet gewijzigd.
- **index.html:419** — "gemaakt door Mark Smulders" (brand-context, verborgen). Huisregel: geen persoonsnaam prominent. Hier is de naam niet prominent en heeft hij een SEO-doel. Ter info.

### Contact / persoonsnaam
- **src/components/ActieVoorwaarden.jsx:137** — "Vragen? Via de tips-pagina in de app." Bij actievoorwaarden hoort een contactadres. Voorstel: "Vragen? Mail naar hallo@leerkwartier.app."
- **src/shared/ui/MeldFout.jsx:48** "✅ Dank je! Mark kijkt ernaar." / **SteunTik.jsx:47** "Thank you! Mark will look at it." / **WishesBoard.jsx:211** "De maker (Mark, die deze app bouwt)". Persoonsnaam in de app. Het is geen contactadres, maar wel prominent. Voorstel: "De maker kijkt ernaar." Op het tipsbord kan de naam passend zijn.
- **src/components/HomeV3.jsx:484** — de zwevende WhatsApp-knop linkt naar `wa.me/31000000000`, een nepnummer. Dat is een dode link op de route home-v3. Voorstel: de knop weghalen of naar hallo@ laten wijzen.

### Getallen die kunnen verouderen
- **src/components/HomePage.jsx:1095-1097** — "500+ bezoekers per maand · 7.000+ oefenvragen · 48 echte examens". In september waren er 1.066 echte apparaten, dus "500+" is te bescheiden. De andere twee getallen niet gecontroleerd.
- **src/features/onboarding/StartKwartier.jsx:193** — "Er zijn 346 leerpaden voor groep 1 tot en met 8 en de brugklas." Telling niet gecontroleerd. Ook "leerpaden" is jargon (komt veel voor, alleen geteld).
- **src/components/StudentHome.jsx:654** — "6 echte VMBO-examens · 38 vragen met uitleg". Niet gecontroleerd.
- **index.html:443 (verborgen)** — "100+ schoolmethodes", FAQ "meer dan 100 Nederlandse schoolmethodes". Claim niet gecontroleerd.
- **src/components/LoadingOverlay.jsx:11/14** — "🔍 Echte toetsvragen zoeken op het internet…", "Vragen samenstellen uit echte bronnen…". Klopt dit bij AI-generatie? Mogelijk een te stellige belofte.

### Taal / zinsbouw (groter dan een kleine swap)
- **src/components/HomePage.jsx:757** (welkomstzin, Mark bekijkt hem al) — de huidige bron zegt al "…tot je kind het écht snapt." Dat klopt grammaticaal. Alternatief dat minder herhaalt ("Snapt je kind… snapt"): "Snapt je kind iets niet? Dan leggen we het uit op drie niveaus, tot het kwartje valt." of "…net zo lang tot het écht duidelijk is."
- **src/components/RondleidingPage.jsx:27** — "begrijpen het concept achteraf bovengemiddeld vaak. Dat is het verschil met snel-doorklikken op een ander oefenplatform." Een ongemeten claim, terwijl de zin ervoor zegt "We meten dat nog". Voorstel: tweede zin schrappen.
- **src/components/RondleidingPage.jsx:207** — "Geen volwassenen die over je schouder hangen." Leest wat negatief richting de ouder of verzorger. Voorstel: "In je eigen tempo."
- **src/features/onboarding/StartKwartier.jsx:237** — "Elke plek stelt één vraag. Dit is Vonk, in 3D." Onduidelijk: Vonk is de bijlesdocent. Is het park "Vonk in 3D"? Voorstel: "Zo oefen je met Vonk, maar dan in 3D."
- **src/features/onboarding/StartKwartier.jsx:257-258** — "in de stijl van Cito, IEP, DIA en AMN". Route 8 ontbreekt, en index.html schrijft "Dia". Aanbiedersnamen zijn feiten, dus niet gewijzigd.
- **src/components/StudentHome.jsx:436/1122** — "Beste streak ooit", "Speel vandaag om je streak van X te bewaren!". Engels woord "streak" en "Speel" in een leercontext. Voorstel: "reeks" en "Oefen vandaag om je reeks van X dagen te bewaren!". Wordt mogelijk app-breed gebruikt.
- **src/components/HomePage.jsx:1207** — WhatsApp-deeltekst "Samen slim worden met leuke vragen! Oefenen voor school was nog nooit zo leuk." Oud en wervend, en noemt de slogan niet. Voorstel: "Ken je Leerkwartier al? Gratis oefenen voor de Doorstroomtoets, met uitleg op 3 niveaus. Een kwartier per dag leren, een leven lang slimmer."
- **src/shared/ui/ExamenBronBanner.jsx:120 / ExamenPadBanner.jsx:72** — "Letterlijk overgenomen uit het Cito-examenboekje." Het gaat om VMBO-examens van het CvTE, gemaakt door Cito. Klopt feitelijk, maar "Cito" naast de Doorstroomtoets kan verwarren. Voorstel: "uit het officiële examenboekje".
- **src/components/GratisLesmateriaal.jsx:139**, **HomePage.jsx:256**, **MetDankAan.jsx:151** — "Kon je … niet …" laat het onderwerp weg. Spreektaal, dus niet aangepast. Eventueel "Dat lukte niet. Probeer het zo nog eens."

### Niet beoordeeld (lesinhoud)
- UspDemo-vraag (¾ van 20) met wrongHints, startKwartier.js-vragen, herhaalNieuwkomers en de uitleg-teksten in niveauIndicatie (1F/2F/1S) zijn lesinhoud of inhoudelijke feiten. Die heb ik niet beoordeeld.
- Turkse, Roemeense, Arabische en Oekraïense vertalingen in SteunTik/KwartierTreden: geen taalcheck gedaan.


---

## Groep B1 — Mijn pagina / ouder

- **src/features/account/MijnPagina.jsx:2184** ("Jouw doel"): "laten zien wat je kunt op de toets, eind januari {jaar}". `DOORSTROOMTOETS_DATUM` = 25 jan ("start afnameperiode"), maar vakkenPerGroep.js:80 zegt "(februari!)". Ouders lezen dus twee verschillende maanden. Wat is de officiële afnameperiode 2027? Voorstel: overal hetzelfde, bv. "eind januari/begin februari".
- **src/features/account/MijnPagina.jsx:1076**: Header `{naam}’s Leerkwartier`. Volgens de Nederlandse spelling hoort er geen apostrof na de meeste namen ("Sams Leerkwartier"), alleen na een klinker of s-klank ("Anna's"). Daarbij botst de kop met het navigatielabel "Mijn pagina". Voorstel: als kop "Mijn pagina" gebruiken (de naam staat al in de kaart), of de kop laten staan maar de apostrof per naam goed zetten.
- **src/features/account/AvatarKiezer.jsx:328/365**: "Maak je eigen avatar" en "Deze avatar zie je overal". Mijn pagina noemt hetzelfde ding "poppetje" ("Maak je eigen poppetje", "je poppetje"). Dat is een Engels woord naast een Nederlands woord voor één ding. Voorstel: overal "poppetje" (of overal "avatar").
- **src/features/account/MijnPagina.jsx:2578**: "Gratis — in 2026 is alles vrij te gebruiken." Dit zien ook kinderen. Het kan lezen alsof oefenen na 2026 niet meer gratis is, terwijl oefenen gegarandeerd gratis blijft t/m 2031. Voorstel: "Gratis — oefenen is gratis, gegarandeerd t/m 2031." Niet zelf aangepast, omdat Familie (betaald vanaf 2027) ook onder "alles" valt.
- **src/features/account/MijnPagina.jsx:2054**: 'Start hieronder bij "Dit staat voor jou klaar"'. Die kaart heeft een flex-`order` (0 of 2, afhankelijk van topBlok) en verschijnt alleen als `klaargezet.length > 0`. Of hij echt hieronder staat, kon ik niet vaststellen. Liefst live checken.
- **src/features/account/MijnPagina.jsx:2735**: "Afgeronde toetsen tellen ook mee in het beeld hieronder." De zin staat ónder de grafiek, en in deze modus tonen de staven alleen minuten. "Hieronder" klopt dus niet, en de bewering zelf is twijfelachtig. Voorstel: de zin schrappen of "Afgeronde toetsen tellen ook mee." gebruiken.
- **src/features/account/MijnPagina.jsx:1747-1748** (dode code, `{false && …}` op 1704): verwijst naar "Je bent hier als…", een knop die niet meer bestaat (de rol-regel op 1142 staat ook uit). Niet zichtbaar, dus niet aangepast. Gaat het blok weer aan, dan wordt het: 'Tik bovenaan op "wissel" en kies je eigen naam.'
- **src/features/account/MijnPagina.jsx:605** (dode code, `rolActies` wordt alleen in het uitgeschakelde rol-menu gebruikt): "Koppel je kind + maandag-weekrapport". Het weekrapport gaat op vrijdag. Aanpassen als het menu terugkomt. Op 711 staat in dezelfde dode code "ouder van {kinderen}": wordt "ouder of verzorger van".
- **src/data/appGids.js:38 en api/_lib/bevestig.js:77** (buiten mijn bestanden, opgevallen bij het grep-werk): daar staat nog "elke maandag … weekrapport", maar het is vrijdag 16:00. Ook DicteePage.jsx:44 en WerkwoordenPage.jsx:60 zeggen "Het eerste weekrapport komt maandag". Doorgeven aan de groep die die bestanden heeft.
- **src/features/ouder/OuderInzicht.jsx:1216**: "📚 300+ onderwerpen op niveau". Het actuele aantal is niet nagegaan.
- **src/features/ouder/OuderInzicht.jsx:1220**: "⏱️ Max 15 min per sessie — daarna pauze of kort spel". Is dat nog waar (harde stop na 15 minuten)? Niet gecontroleerd.
- **src/features/ouder/OuderInzicht.jsx:1224**: "Plus complete leerpaden waar elk onderwerp…" bevat het dev-jargon "leerpad" (TWIJFEL-telling: 1). Ook MijnPagina.jsx:1664 "Leerpaden klaarzetten" (leerkracht-tegel). Voorstel: "complete lessen" of "lessenreeksen".
- **src/features/ouder/OuderInzicht.jsx:762**: "Hier komen het weekrapport en de rekening." Familie is eenmalig €39 en nu nog gratis. Het woord "rekening" kan verontrusten. Voorstel: "Hier komt het weekrapport (en later de betaalbevestiging van Familie)." Of laten staan.
- **src/features/ouder/OuderInzicht.jsx:983**: verwijst naar '"💛 voor jou klaargezet"'. Op Mijn pagina van het kind heet het "💛 Speciaal voor jou klaargezet" (kop: "Van je ouder of leerkracht", met fix → "Van thuis of school"). Het label komt dus niet exact overeen, maar is herkenbaar.
- **src/features/ouder/Gezinsstart.jsx:251**: "Het dagelijkse kwartier haalt er dan minstens twee van de drie onderdelen uit". Dat is lastig te lezen: welke drie onderdelen? Voorstel: "Dan komen minstens twee van de drie blokjes van het dagelijkse kwartier uit wat je hier kiest — tot {datum}."
- **src/features/ouder/ouderadvies/teksten.js:47/64/82** (prototype): "Goed zo" wordt gebruikt als akkoord-knop en als vraag ("Volgende week stel ik dit voor. Goed zo?"). "Goed zo" betekent in het Nederlands vooral "knap gedaan" en niet "akkoord". Voorstel: knop "Prima, zo doen" en de vraag "Is dat goed?". Bewust niet aangepast: het is een prototype dat wacht op het akkoord van de maker.
- **src/features/ouder/ouderadvies/teksten.js:57**: "Na het eerste blokje (rekenen) zie ik: wankel." Het uitslagwoord past grammaticaal niet achter "zie ik:". Voorstel: "...zie ik dat het {uitslag} gaat" met de woorden goed/wankel/nog niet. Daarvoor moet de uitslagWoord-map een andere vorm krijgen.
- **src/features/ouder/ouderadvies/teksten.js:53**: met de standaardnaam "je kind" begint de zin met een kleine letter ("je kind heeft nog niets gedaan."). Waarschijnlijk komt dat niet voor, omdat er altijd een naam is.
- **src/features/ouder/ouderadvies/nulmeting.js:63-69** `VAK_NAAM` (alles in kleine letters) wordt ook als rijlabel gebruikt ("rekenen", "taal (spelling en woordenschat)") in de Nulmeting-kaart (OuderVoorstellen.jsx:129). Een hoofdletter aan het begin van een rij is netter. Daarvoor is codewerk nodig, dus geen tekstswap.
- **src/features/account/WieOefentEr.jsx:24-25**: lege plekken heten "Ouder 1" / "Ouder 2", met de hint "ouder of verzorger" eronder. Dat is acceptabel, maar "Ouder of verzorger 1" is consequenter. Laat ik over aan de maker.


---

## Groep B2 — codes / Familie

- **src/components/CodeBalk.jsx:176** (Ooievaarspas-ere-scherm) — "Onze afspraak met de gemeente Den Haag: heeft uw gezin een Ooievaarspas? …" + de rest van het ere-scherm stond bewust in u-vorm (commentaar r. 23: "Het scherm praatte tegen de ouder ("u")"). In fixes-B2 omgezet naar je/jouw (huisregel). Twijfel: als deze zin letterlijk met bureau Ooievaarspas is afgestemd, Mark laten bevestigen dat je-vorm mag. Ook de rest van de app (stand 2 van de balk, PartnerWelkom) gebruikt al "jouw gezin".
- **src/components/CodeBalk.jsx:145** — Engelse ere-scherm-slogan "Fifteen minutes a day — truly understand what you learn." is geen vertaling van de vaste slogan. Voorstel: "Fifteen minutes of learning a day, a lifetime of being smarter." — of bewust zo laten (Saba).
- **src/components/CodeBalk.jsx:178** — EN: "the Family package is free for your family {label}" → met label "all of 2027 (through …)" leest het "free for your family all of 2027" (mist "for"). Bij label "until …" zou "for" er juist níet moeten. Voorstel: `partnerFamilieTotLabel` EN-varianten "for all of 2027 …" laten teruggeven (logica, dus niet zelf gewijzigd).
- **src/components/CodeBalk.jsx:400** — "🔄 code van dit apparaat halen": "halen" is vaag. Voorstel: "🔄 code van dit apparaat verwijderen".
- **src/components/CodeBalk.jsx:90** — "Bewaard — tot straks!" verschijnt al bij het tikken op WhatsApp/Mail, vóór er echt iets verstuurd is. Voorstel: "Klaar — tot straks!" (kleine twijfel).
- **src/components/PartnerPlekVast.jsx:110/153** — scherm spreekt het kind aan ("vul het e-mailadres van je ouder of verzorger in"), maar knop "Houd me op de hoogte" en "Gelukt — we houden je op de hoogte" suggereren dat het kind mail krijgt. Voorstel: knop "Stuur thuis een berichtje" en "Gelukt — we houden jullie op de hoogte."
- **src/components/PartnerWelkom.jsx:95** — PARTNER_NAMEN bevat "Mark, de maker van Leerkwartier" → toont "Welkom via Mark, de maker van Leerkwartier! 💛". Persoonsnaam prominent; waarschijnlijk alleen Mark's testcode (PRO2027). Als die code ook aan bekenden gaat: "Welkom via de maker van Leerkwartier!" overwegen.
- **src/components/PartnerWelkom.jsx:214** — "Oefenen voor de Doorstroomtoets is gratis — voor groep 6, 7 en 8, en voor de VMBO-examens." App dekt groep 3 t/m 8 + brugklas. Bewuste ICP-focus of verouderd? Voorstel: "voor groep 3 t/m 8 en de brugklas, en voor de VMBO-examens".
- **src/components/PartnerWelkom.jsx:31** — proefvraag "In een doos zitten 6 eierdozen met elk 10 eieren": lesinhoud, niet beoordeeld; wel vreemd beeld (dozen van 10 in een doos). Ter info.
- **src/components/KoppelcodeBanner.jsx:113** — "Gelukt! Je bent gekoppeld met thuis." (fallback als ouder geen label invulde) leest stroef. Voorstel: "Gelukt! Je bent nu gekoppeld." of "… gekoppeld met iemand thuis." (bewuste voogd-veilige keuze, daarom niet gewijzigd).
- **src/features/familie/FamilieHub.jsx:36** — prijsuitleg noemt de proefweek (7 dagen, zonder betaalgegevens) niet; wel "tot 1 januari 2027 is alles gratis". Klopt met FamilieAfsluiten.jsx. Als de proefweek ná 1 jan geldt, hier één zin toevoegen: "Daarna eerst een proefweek van 7 dagen, zonder betaalgegevens."
- **src/features/familie/VonkPagina.jsx:25** + **familieFeatures.js:7** — "Een echte bijles kost al gauw €37 per uur": getal niet te verifiëren, bron/actualiteit laten checken.
- **src/features/familie/VonkPagina.jsx:35** — "klik in een leerpad op de hulp-knop" — dev-woord "leerpad" (TWIJFEL-telling: 1×) en de knop heet in de app waarschijnlijk anders (maatje-kop/"Vraag het …"). Voorstel: "tik tijdens het oefenen op de hulp-knop".
- **src/features/familie/familieFeatures.js:13** — "50 vragen in 60 minuten, zoals de echte Doorstroomtoets" — de echte toets is veel langer (meerdere dagdelen). Voorstel: "50 vragen in 60 minuten, in de stijl van de Doorstroomtoets".
- **src/features/familie/familieFeatures.js:8** — titel "Weekmail 2.0" is dev/versie-taal. Voorstel: "Weekmail met to-do's" / "Slimmere weekmail".
- **src/features/familie/familieFeatures.js:11** — "Koppel tot 3 kinderen op één account" — niet geverifieerd of de limiet 3 nog klopt.
- **src/features/familie/LegUit.jsx:80/94** — `{titel.toLowerCase()}` in "Kun jij … in je eigen woorden uitleggen?": als de titel een toevoeging heeft ("Breuken — deel 1") komt die mee in de zin. TrotsMoment knipt dat af; hier niet. Logica, dus niet gewijzigd.
- **src/features/familie/OuderkaartTrigger.jsx:37-45** — staat op het kind-scherm (zie commentaar), maar spreekt de ouder aan ("Voor thuis — zo help je", "Merk je dat … nog niet vlot gaat?"). Voor een kind leest "zo help je" vreemd. Voorstel: "Voor thuis — laat dit aan je ouder of verzorger zien".
- **src/features/kwartierplan/KwartierplanSectie.jsx:32** — "Doorstroomtoets (eind jan 2027)", default 25-01-2027, terwijl 2028 "begin feb" is en de toets normaal in februari valt. Datum 2027 laten verifiëren.
- **src/features/kwartierplan/Startfoto.jsx:154-158** — eerst "Geef het toestel aan {naam}" (ouder), direct daarna "Zo zien we samen waar je nu staat" (kind). Wisselt van lezer; voorstel: tweede alinea als "{naam}: …" of los blok voor het kind.
- **src/features/kwartierplan/Startfoto.jsx:275** — "Opslaan lukte niet ({saveError})" toont een technische foutmelding aan de ouder. Voorstel: weglaten van de ruwe fout.
- **src/features/oefenboekje/OefenboekjePagina.jsx:341** — "Schrijf er eventueel bij hoe je het uitrekende." ook bij spelling/topografie-boekjes. Voorstel: "hoe je het aanpakte".
- **src/components/NiveauWizardBanner.jsx:179** — "VMBO/HAVO/VWO" in hoofdletters; elders gangbaar vmbo/havo/vwo. Consistentie-kwestie, app-breed beslissen.
- **"leerpad"-telling (TWIJFEL)**: VonkPagina.jsx:35 (1×). Overige dev-jargon "pad" in TrotsMomentPagina is in fixes opgenomen.


---

## Groep C1 — leren

- **src/features/learn/AITutor.jsx:519-520**: `Iets ging mis: {error}. Probeer het zo nog eens.` Hier komt de ruwe fout in te staan, bijvoorbeeld "Iets ging mis: HTTP 500." of een Engelse servermelding. Een kind snapt dat niet. Voorstel: de fout niet tonen, alleen "Er ging iets mis. Probeer het zo nog eens." (vraagt een kleine logica-aanpassing, dus niet zelf gedaan).
- **src/features/mastery/MyMastery.jsx:86**: `Geen leerling-naam in URL. Geef bv. ?leerling=Sara mee.` Dit is een ontwikkelaarsmelding in de ouder-/verzorgerweergave. Voorstel: "We weten niet van welk kind je de voortgang wilt zien. Open deze pagina via de link van je kind."
- **src/features/learn/LearnPath.jsx:1294 / 1311**: `Snelle terughaal`. Dit woord bestaat niet en klinkt vertaald ("retrieval"). Voorstel: "Even terugblikken: herhaal een eerdere vraag" en "🧠 Even terugblikken · deel N".
- **src/features/learn/LearnPath.jsx:2764**: `🏠 Naar mijn hub`. "Hub" is Engels. Elders staat "Terug naar home". Voorstel: "🏠 Naar mijn pagina" of "🏠 Naar home". Wat het beste past hangt af van waar onHome precies naartoe gaat.
- **src/features/learn/LearnPath.jsx:1493**: `Interactieve 3D-check`. "check" is jargon. Voorstel: "Interactieve 3D-vraag". In dezelfde melding staat ook "deze check".
- **src/features/learn/LearnPath.jsx:1983-1987**: `Probeer het nog eens, kijk goed naar de uitleg hierboven.` Dit zijn twee zinnen aan elkaar geplakt met een komma. Staat 3× letterlijk in de code, dus geen unieke zoekstring mogelijk. Voorstel: "Probeer het nog eens en kijk goed naar de uitleg hierboven." Twijfel: staat er bij elke vraag wel uitleg "hierboven"?
- **src/features/learn/LearnPath.jsx:2347**: `Toets morgen? Spring direct naar examenstijl`. Loopt stroef. Voorstel: "Toets morgen? Ga meteen naar vragen in examenstijl".
- **src/features/learn/LearnPathsHub.jsx:1164-1171**: `Ga naar je park 🚧`, met de teksten "jouw dierentuin (in opbouw)" en "nog in opbouw". Is het park nog steeds "in opbouw"? Elders wordt het als volwaardig onderdeel gepromoot ("Mijn Park — bouwen, dieren, leren"). Mogelijk verouderd.
- **src/features/learn/LearnPathsHub.jsx:1555 vs 1581**: `✦ Groep N (jouw groep)` tegenover `✦ Klas 1 (mijn klas)`. Inconsequent (jouw/mijn). Voorstel: "(jouw klas)". Niet als fix opgenomen omdat ik de exacte template-string niet uniek kon maken zonder te veel context.
- **src/features/learn/LearnPathsHub.jsx:1148 vs 1762**: twee verschillende "Mis je iets?"-verwijzingen: hallo@leerkwartier.app en "Tip aan de maker". Allebei correct, maar inconsequent.
- **src/features/learn/LearnPathsHub.jsx:1701**: `middenniveau (eind VMBO/onderbouw HAVO-VWO)`. Afkortingen niet voluit (zie ook snelkoppelingen "tl/havo/vwo"). Voor een ouder of verzorger acceptabel.
- **src/features/learn/Curriculum.jsx:51-56, 90, 165, 204, 224, 360**: `Curriculum`, `Curriculum voltooid!`, `Voortgang in dit curriculum`, `⚠ Leerpad "…" niet gevonden`, `← Terug naar leerpaden`. Dit is dev-jargon dat zichtbaar is. Voorstel: "Leerlijn" (zo heet het in de hub al: "🎓 Volg een complete leerlijn").
- **"leerpad"-jargon (alleen telling)**: Curriculum.jsx 2× ("Leerpad … niet gevonden", "Terug naar leerpaden"); LeerpadBot.jsx 2× (aria "Zoek een leerpad", "Geen direct pad gevonden voor"); MeeBezig.jsx 3× (r.112 "werken we aan de leerpaden", r.150 "bouwen we nog aan het leerpad", r.152 "andere leerpaden klaar", r.154 "bouwen we … de leerpaden"); LearnPath.jsx 1× ("Terug naar paden", al als fix opgenomen). Totaal ongeveer 8 zichtbare plekken.
- **src/features/learn/BronTekstInteractief.jsx:336 / 350**: `💡 Ik heb een idee — check!` en `Slim dat je het even checkte`. Engels leenwoord, maar gangbaar bij kinderen. Voorstel als het strenger moet: "kijk!" / "even nakeek".
- **src/features/learn/RekenOefenRonde.jsx:210**: `Goed geoefend — je hebt er al N van de M in één keer goed.` Loopt net niet ("je hebt er al … goed"). Voorstel: "Goed geoefend — je had er al N van de M in één keer goed." (GeoTopo gebruikt "je kent er al N van de M").
- **src/features/learn/MeeBezig.jsx:236**: `We mailen je zodra het klaarstaat.` Het ingevulde adres is dat van de ouder of verzorger, niet van het kind. Voorstel: "We mailen zodra het klaarstaat."
- **src/features/learn/snelkoppelingen.js:12**: `(t.t., v.t., voltooid deelwoord)`. Afkortingen in een kindertekst. Voorstel: "(tegenwoordige tijd, verleden tijd, voltooid deelwoord)".
- **src/features/learn/snelkoppelingen.js:31/33/35/39**: beschrijvingen beginnen met een kleine letter ("kaartjes voor…", "klassikaal en…"), de andere met een hoofdletter. Kleine consistentie-kwestie.
- **src/components/learn/3d/Question3DRenderer.jsx:31-32**: `⚠️ Onbekende 3D-vraag: … Check questions3d.js`. Ontwikkelaarsmelding. Een gebruiker ziet die alleen bij een datafout. Voorstel: "Deze vraag kan nu niet laden."
- **src/components/learn/3d/Question3DRenderer.jsx:62-65 en RM-S6-Q1.jsx:43**: "Sleep / Klik op". Op een tablet is het "tik". Kleine twijfel.
- **src/components/learn/graph/InteractieveGroeiGrafiek.jsx:128**: `vermenigvuldigen wint het altijd van optellen`. Dit is lesinhoud. "Altijd" klopt alleen op den duur, niet bij elke x. Niet beoordeeld als schermtekst.
- **src/components/learn/geo/Wereldbol.jsx:68-81**: kaartlabels "Ver. Arabische Emiraten", "Centr.-Afrik. Rep.", "Dominic. Rep.", "Ver. Koninkrijk" (elders voluit "Verenigd Koninkrijk"). Waarschijnlijk afgekort vanwege de ruimte op de kaart. Laten staan.
- **src/features/mastery/mastery.js:36**: label `In opbouw`. Context niet volledig nagegaan; ik denk een mastery-niveau-label. Geen fout gevonden.


---

## Groep C2 — oefenen / toetsen

- **src/components/CitoPage.jsx:324 vs :262 vs :716** — Aftellen zegt "Nog N weken tot de Doorstroomtoets · **Eind januari** {jaar}" (doeldatum 25 jan in code), maar de groep-8-hint en het info-blok zeggen "**begin februari**", en CitoLeerpadToets:474 zegt "in februari". Dat spreekt elkaar tegen. Voorstel: de officiële afnameperiode van 2027 opzoeken en daarna één formulering overal gebruiken (bv. "Begin februari {jaar}"); de doeldatum in de code zo nodig aanpassen.
- **src/components/CitoPage.jsx:716** — "Vragen zijn in Cito/IEP/Route 8-stijl: meerkeuze over rekenen, taal, begrijpend lezen en wereldoriëntatie. Vragen komen uit een vaste vragenbank van 450+ items." Twee twijfels: (1) toetst de Doorstroomtoets wereldoriëntatie? De kern is lezen/taalverzorging/rekenen; (2) "450+ items" is waarschijnlijk verouderd (er staan inmiddels veel meer vragen in de app). Voorstel: het aantal laten narekenen of de zin weglaten. Aanbiedersnamen (Cito/IEP/Route 8) mogen hier blijven omdat ze feitelijk zijn.
- **src/components/CitoPage.jsx:119** — Paginatitel "Doorstroomtoets 🎯": huisregel zegt `<DoorstroomtoetsLogo />` in plaats van 🎯. De titel is een string-prop, dus dit vraagt een kleine JSX-aanpassing (hoort niet bij tekstherstel).
- **src/components/CitoPage.jsx:61 vs :356–357** — Twee verschillende knoppen heten allebei "Leer eerst de aanpak": Stap 1 (strategie-pad, "7 korte stappen … ~15 min") en de begrijpend-lezen-knop ("~5 min"). Dat verwart. Voorstel: de begrijpend-lezen-knop "🧠 Aanpak voor lezen" noemen.
- **src/components/CitoLeerpadToets.jsx:322** — "60 minuten (zoals de echte Doorstroomtoets)": de echte toets duurt per aanbieder anders en bestaat uit meerdere sessies. Voorstel: "(zoals bij een echte toets)".
- **src/components/CitoLeerpadToets.jsx:472 / ResultsPage.jsx:287** — "Eén slechte dag kan (zomaar) 20% verschil maken." Dit getal heeft geen bron. Voorstel: "kan flink verschil maken".
- **src/components/CitoLeerpadToets.jsx:300** — Ondertitel "{n} vragen uit je leerpaden": een nieuwe bezoeker heeft nog geen eigen leerpaden, en "leerpad" is dev-jargon. Voorstel: "{n} vragen in Doorstroomtoets-stijl". (Dit hoort bij de jargon-telling: "leerpad" komt in deze schermen ~20× voor, onder meer in CitoLeerpadToets, CitoPage, ExamensPage en DeepVraag.)
- **src/components/CitoLeerpadToets.jsx:852** — "Tip voor na de toets: dit onderdeel staat in het leerpad — je ziet 'm straks bij je uitslag." Onduidelijk welk leerpad wordt bedoeld en waar "'m" naar verwijst. PlayQuiz noemt hier de padtitel. Voorstel: "Tip: je ziet deze vraag straks terug bij je uitslag, mét uitleg."
- **src/features/practice/ResultsPage.jsx:567** — Knop "Probeer {volgend onderdeel} →" roept `onBack` aan en gaat dus terug in plaats van het volgende onderdeel te starten. De knop doet dus iets anders dan hij zegt. Je kunt de logica aanpassen, of de tekst veranderen in "← Terug, kies {next}".
- **src/features/practice/ResultsPage.jsx:491** — "Gratis oefenplatform — help andere ouders het te ontdekken!" Op een resultatenscherm leest meestal het kind mee, en er staat alléén "ouders". Voorstel: "help andere gezinnen het te ontdekken!"
- **src/components/DeelVraagKnop.jsx:44 / DeelTrotsKnop.jsx:55** — "Deel deze vraag met een andere ouder" / "Trots? Tip een andere ouder" / "plak 'm in een oudergroep". De knop staat ook op /vandaag, waar kinderen kijken, en er staat alléén "ouder". Voorstel: "Deel deze vraag met iemand anders" / "Trots? Tip een ander gezin". Ik heb niets gewijzigd, omdat de doelgroep bewust ouders kan zijn.
- **src/components/DeelTrotsKnop.jsx:25** — De deeltekst "… met Leerkwartier 🎯 Gratis, een kwartier per dag leren, een leven lang slimmer:" bevat de slogan, maar niet exact (kleine letter, vast aan "Gratis"). Voorstel: "… met Leerkwartier 🎯 Een kwartier per dag leren, een leven lang slimmer. Oefenen is gratis:".
- **src/components/DeepVraag.jsx:100** — De fallback als een gedeelde vraag niet gevonden wordt: "Deze vraag staat klaar in de app 🎓". Dat klopt niet: de vraag is er juist niet, en de knop gaat naar de oefentoets. Voorstel: "Deze vraag is niet meer beschikbaar — oefen meteen verder met échte Doorstroomtoets-vragen."
- **src/components/DeepVraag.jsx:317** — Na een fout antwoord staat er "Leer het hier stap voor stap:", maar zonder `leerpadLink` verschijnt alleen "Doe de gratis oefentoets". Dan klopt de zin niet. Dit vraagt een logische check.
- **src/components/ExamensPage.jsx:423** — "Doe een echt {vak}-examen — alles door elkaar": het is een mix van alle jaren en dus geen echt examen. Voorstel: "Oefen alle {vak}-examenvragen door elkaar".
- **src/components/SelfStudy.jsx:202 en :309** — De voorbeelden "mijn fabriek: wij verwerken dierlijk vet tot veevoer" en "een fabriek in Vuren die dierlijke bijproducten …" lijken persoonlijk of zakelijk en zijn vreemd voor een kinder-/ouderscherm. Voorstel: "mijn spreekbeurt over haaien".
- **src/features/practice/TextbookQuiz.jsx:962** — "De vragen zijn gebaseerd op echte examen- en toetsvragen die online gevonden worden …". De API gebruikt wel web_search, maar of de vragen écht op examenvragen gebaseerd zijn is niet gegarandeerd. Dit botst mogelijk met de authentiek-eis. Voorstel: "De vragen worden door AI gemaakt voor dit vak en niveau; waar mogelijk staat de bron bij de uitleg."
- **src/features/werkblad/WerkbladPagina.jsx:346** — De instructie op elk werkblad is "Zet een rondje om het goede antwoord. Schrijf op de stippellijn hoe je het uitrekende." Die past niet bij spelling, d/t, verwijswoorden en begrijpend lezen. Voorstel: de tweede zin per onderwerp laten afhangen, of "Schrijf op de stippellijn hoe je het aanpakte."
- **src/features/werkblad/WerkbladPagina.jsx:198** — QR-tekst: "de app legt elke som uit" staat ook op taal-werkbladen. Voorstel: "legt elke vraag uit".
- **src/features/practice/PlayQuiz.jsx:1343** — Breakout: "Stuur de bal met je muisbeweging of pijltjestoetsen." Op een telefoon (aanraken) klopt dit niet; de bal bestuur je bovendien niet, maar het batje. Voorstel: "Beweeg het batje met je vinger, muis of pijltjestoetsen."
- **src/features/practice/PlayQuiz.jsx:909** — "Bekijk de YouTube-knop hieronder": in examen-modus is die knop verborgen. Dit komt waarschijnlijk zelden voor; alleen noteren.


---

## Groep D — printen / dictee

- **src/features/dictee/DicteePage.jsx:125** (lesinhoud, dicteezin voor homofoon "weet/weed"): `Weed is een drug.` — Ik beoordeel geen lesinhoud, maar dit is een zin over drugs die Charley hardop voorleest aan kinderen van groep 3-8. Waarschijnlijk botst dit met de STOPLIST of de rustige schoolse toon. **Voorstel:** Mark laat het paar weet/weed eruit, of vervangt de zin. Hoge prioriteit.
- **DicteePage.jsx:50 + WerkwoordenPage.jsx:66**: "Elke vrijdag dit resultaat in de mail van je ouder of verzorger?" De opgave komt in `upgrade_waitlist` met plan `dictee`/… en `api/send-weekly-lesmateriaal.js` stuurt dat plan de algemene wekelijkse oefenmail. Ik vond geen persoonlijk dictee-/werkwoordenrapport per adres; het vrijdag-ouderrapport geldt alleen voor gekoppelde kinderen. Dan is de belofte "dit resultaat" en "welke woorden goed gingen" mogelijk onwaar. **Voorstel:** nagaan; zo nodig "Elke week gratis oefenstof in de mail van je ouder of verzorger?" (in fixes-D is alleen maandag→vrijdag gelijkgetrokken).
- **DicteePage.jsx:642**: "Schrijf het woord op dat je hoorde." (na fix) verschijnt óók in lees-dictee-modus, waar het kind niets hoort maar leest. **Voorstel:** in lees-modus "Schrijf het woord op dat je net las."
- **RedactiebladenPage.jsx:260 + :272**: "F t/m J volgen 💛" / "Versies F t/m J volgen." `versies.js` heeft alleen B t/m E. Dit is een belofte zonder datum. **Voorstel:** weghalen of "Meer versies volgen."
- **OefenpakketPage.jsx:524**: "(in 2027: 25 januari t/m 12 februari)". Deze afnameperiode kon ik niet controleren. **Voorstel:** nakijken op rijksoverheid.nl.
- **OefenpakketPage.jsx:547-548**: "Cito stelt een gratis voorbeeldopgavenboekje beschikbaar. Zoek op 'Cito Leerling in Beeld voorbeeldopgaven'". *Leerling in Beeld* is Cito's leerlingvolgsysteem, niet de Doorstroomtoets. Mogelijk een verkeerde verwijzing. **Voorstel:** zoekterm "Doorstroomtoets voorbeeldopgaven" en `CITO_VOORBEELD_URL` controleren.
- **"ouder" in samenstellingen** (beschrijft een pagina, spreekt niemand aan): PrintHubPage.jsx:26 "met ouder-uitleg", :50 "ouder-stappenplan"; OefenpakketPage.jsx:305 "ouder-uitlegpagina"; LeesladderPage.jsx:227 "Plus een ouderpagina"; RedactiebladenPage.jsx:208 "een ouderpagina met het stappenplan". **Voorstel:** "uitlegpagina voor thuis" en "stappenplan voor thuis". Ik heb niets gewijzigd: het zijn er meerdere en de formulering vraagt een keuze.
- **"ouder/begeleider(s)"**: OefenpakketPage.jsx:587 "Voor ouders/begeleiders." en LeesladderPage.jsx:485 "voor de ouder/begeleider". Dit valt waarschijnlijk binnen de regel. **Voorstel:** eventueel "Voor thuis:".
- **Dev-jargon "leerpad" (telling: 2)**: TakenlijstMaker.jsx:113 "Kies een paar leerpaden." (leerkracht; het zoekveld zegt al "Zoek een onderwerp") en OefenpakketPage.jsx:542 "een leerpad over het onderliggende concept" (ouder). **Voorstel:** "onderwerpen" en "een korte les".
- **TakenlijstMaker.jsx:98**: "← Terug naar dashboard". Engels woord voor leerkrachten. **Voorstel:** "← Terug naar je overzicht" (eerst nagaan hoe het scherm elders heet).
- **DagkaartGenerator.jsx:189**: de bronregel is vast "Bron: NOS Jeugdjournaal — …". Klopt alleen als `/api/actuele-vraag` altijd uit het Jeugdjournaal komt. Intern hulpmiddel, controleren.
- **DicteePage.jsx:386** (Turkse vertaling): "Neredeyse! {…}. {…}" mist het equivalent van "Het is". Ik kan de taal niet beoordelen.
- **OefenpakketPage.jsx:308 + :515**: "(Cito/IEP)" en "geen officiële Cito/IEP-vragen". Dit zijn namen van aanbieders, geen concurrenten. Gelaten, want de disclaimer heeft juridische functie.
- **BrugklasPage.jsx:144**: "de drie vakken waar in klas 1 het vaakst een toets van komt" loopt wat stroef. **Voorstel:** "de drie vakken waarin klas 1 de meeste toetsen heeft". Stijl, niet gewijzigd.


---

## Groep E — leerkracht / nieuwkomers

- **src/components/NieuwkomersPage.jsx:126** — `tipRollen: ["leerkracht", "ouder", "leerling"]`. Huisregel: nooit alleen "ouder". Maar de waarde gaat ook mee in het wensbericht en `track("nk_tip", { rol })`. Voorstel: label "ouder of verzorger" tonen (los van de opgeslagen waarde), of de waarde ook wijzigen als niemand op "ouder" filtert.
- **src/components/NieuwkomersPage.jsx:103/107/108/109/112/113** — "de gewone Leerkwartier". "Leerkwartier" is een naam op "kwartier" (het-woord); "de" leest vreemd. Voor nieuwkomers is "de gewone app" misschien het duidelijkst. Voorstel: "Klaar voor de gewone app?" / "Start in de gewone app". Grote swap (7 zinnen + uitleg) → aan Mark.
- **src/components/NieuwkomersPage.jsx:80 vs 77** — tegelnamen "Meer woorden" (woorden 2) en "Woorden 3": niet consistent. Voorstel: "Woorden 2" / "Woorden 3", of "Meer woorden" / "Nog meer woorden". De test (TredeTest:25) noemt ook "Meer woorden".
- **src/components/NieuwkomersTredeTest.jsx:173/277** — instap: "Dit is geen toets." terwijl de knop "Instap-testje" heet. Voor een kind dat net Nederlands leert is dat verwarrend. Voorstel: "Dit is geen cijfer-toets." of "Je krijgt geen cijfer." Let op: NL-zin is ook de sleutel voor de vertaling (SteunTekst nl=…), dus samen met de vertalingen aanpassen.
- **src/components/NieuwkomersTredeTest.jsx:178/222** — "Deze plek is groen gemaakt op de pagina." Lijdende vorm, moeilijk voor nieuwkomers. Voorstel: "Op de pagina is deze plek nu groen." Ook een SteunTekst-sleutel → samen met de vertalingen.
- **src/components/NieuwkomersMijnPunten.jsx:15** — "Laat zien aan de juf" (en "Wat zeg je tegen de juf?" op NieuwkomersPage). Er zijn ook meesters. Voor nieuwkomers is "juf" wel het herkenbaarste woord. Voorstel: laten staan of "Laat zien aan je juf of meester".
- **src/components/NieuwkomersMijnPunten.jsx:15** — "Doe het plaatjesdictee of luister en kies!" — "luister en kies" is de naam van een oefening, maar leest als een opdracht. Voorstel: `Doe het plaatjesdictee of „Luister en kies”!` (zoals de Bulgaarse/Oekraïense versie met aanhalingstekens).
- **Vertalingen (uk/bg/ar)** — "Ти заробив", "Закінчив", "готовий" alleen in mannelijke vorm. Geen fout, wel een keuze. Niet zeker → laten staan.
- **src/features/teacher/TeacherHome.jsx:302** — "bij een fout krijgt je leerling geen "fout!" + door, maar uitleg op 3 niveaus om zelf op door te klikken". "+ door" loopt niet. Voorstel: "bij een fout ziet je leerling niet alleen "fout!", maar krijgt uitleg op 3 niveaus om zelf door te klikken". "Plus complete leerpaden" = dev-jargon (tel: 1).
- **src/features/teacher/TeacherHome.jsx:293/297/298** — "300+ onderwerpen", "Hall of Fame + scorebord" (Engels), "Max 15 min per sessie — daarna pauze of kort spel". Zijn het getal en de pauze-regel nog waar? Kon dat niet controleren.
- **src/features/teacher/TeacherHome.jsx:562** — de knop "📋 Kopieer" maakt een kopie van de toets (`onDuplicateQuiz`), maar staat naast "📋 Code" en "💬 Deel". Je kunt denken dat hij de link kopieert. Voorstel: "📋 Kopie maken" of "Dupliceer toets".
- **src/features/teacher/LeraarKlaarzet.jsx:125/205** — "Leerpaden klaarzetten per leerling" / "een leerpad … klaar te zetten": dev-jargon "leerpad" (tel: 2). Elders op dit scherm staat "lessen". Voorstel: "Lessen klaarzetten per leerling".
- **src/features/teacher/LeraarKlaarzet.jsx:349/350 vs 356** — "toestel" en "apparaat" door elkaar. Klein verschil; laten staan of overal "apparaat".
- **src/features/teacher/KlasParkcode.jsx:59** — "Klas-game" en "Elke taak = 3 vragen": Engels en een rekenteken in de zin. Voorstel: "Klasspel" en "Elke taak heeft 3 vragen".
- **src/features/teacher/TeacherComponents.jsx:1432** — "Deel je scherm naar de TV" → misschien "op het digibord of de tv", want elders heet het "digibord".
- **src/features/teacher/TeacherComponents.jsx:1322** — "Leerlingen sturen hun score naar je via WhatsApp na de toets." De woordvolgorde loopt niet goed. Voorstel: "Na de toets sturen leerlingen hun score via WhatsApp naar je." (idem e-mail).
- **src/features/teacher/StudentProgress.jsx:1216** — "Sneller spel · 5 werelden · pittigste highscore-strijd" (OBLITERATOR-uitzondering; laten staan?).
- **src/features/teacher/StudentProgress.jsx** — dit zijn grotendeels leerlingschermen (scorebord, kampioenen), geen leerkrachtschermen. Ik heb ze alleen op duidelijke fouten nagekeken.


---

## Groep F1 — park / maatjes

- **src/features/zoo/buddies.js:335 + src/features/zoo/Buddy.jsx:618** — `Kijk, ${n.titel.toLowerCase()}!` maakt van de titels van leermomenten "Kijk, de eiffeltoren!" en "Kijk, de romeinse arena!" (eigennamen met een kleine letter). In buddies.js volgt daarna ook nog "Zal ik vertellen hoe dat werkt?". Bij de Eiffeltoren, het standbeeld of de Romeinse arena past "hoe dat werkt" niet goed. Dit is een logica-aanpassing en daarom niet als fix opgenomen. Voorstel: alleen de eerste letter klein maken (`t.charAt(0).toLowerCase() + t.slice(1)`) en de vervolgzin neutraal maken: "Zal ik er iets over vertellen?"
- **src/features/zoo/ParkProps.jsx:800** — `Een jong ${dier} geboren!` geeft "Een jong olifant geboren!". Bij de-woorden moet het "een jonge olifant" zijn, bij het-woorden "een jong paard". Voorstel: `Er is een baby${dier} geboren!` (zelfde vorm als de zin ervoor).
- **src/components/ImposterKamer.jsx:414** — `${botsActief.length} bots doen mee` geeft bij 1 bot "1 bots doen mee" en bij 7 gasten "0 bots". Voorstel: enkelvoud/meervoud-conditie ("1 bot doet mee"), en de zin weglaten bij 0.
- **src/features/zoo/game/ImposterGame.jsx:427-428** — De uitleg zegt "Zes spelers: jij en vijf maatjes. Eén is de bedrieger" en "bots vullen aan tot zes" (r. 407). Er is ook een keuze "Bedriegers: 1/2", MAX_SPELERS = 10, en in de bedriegerkamer (ImposterKamer) spelen tot 7 bots mee. De getallen spreken elkaar dus deels tegen. Voorstel: Mark laten checken wat het actuele aantal is. Daarna bv. "Eén (of twee) is de bedrieger".
- **src/features/zoo/ParkErrorBoundary.jsx:34/48** — Ook ParkBezoek (park van een vriend) gebruikt deze foutmelding. Daar gaat de knop "🏠 Terug naar leren" naar het eigen park, niet naar leren. En "je muntjes en je park zijn veilig opgeslagen" past niet goed bij een bezoek. Voorstel: een prop voor de knoptekst ("← Naar mijn eigen park" in ParkBezoek).
- **src/components/SpelletjeKeuze.jsx:36** — "Nog niet klaar, Brian bouwt eraan! 🔧": een persoonsnaam in de UI. In de praktijk is deze tekst onbereikbaar, want App geeft altijd `onImposter` mee. Voorstel: "Nog niet klaar, er wordt aan gebouwd! 🔧" of de tekst laten staan als bewuste knipoog (Brians spel).
- **src/components/SpellenHub.jsx** — Wordt nergens meer geïmporteerd (de spellen-hub is vervangen door het park), dus dit is een dood bestand. Teksten "Ruimte-shooter — versla je highscore!" bevatten Engels. Niet beoordeeld als schermtekst.
- **src/features/zoo/WandelPreview.jsx:388** — Bordje "➡️ nu Groep 4" is onduidelijk ("nu"?). Voorstel: "➡️ verder: Groep 4" of "➡️ Groep 4".
- **src/features/zoo/WandelPreview.jsx:641-647** — Deze bouwbordjes zijn alleen te zien via `?wandel=1` (preview). Ze bevatten dev-taal ("leerpad opent", "blauwdruk van elke grote stop", "route af = kwartier behaald"). Niet aangepast, omdat het een preview is.
- **Leerpad-telling (dev-jargon, kindertekst):** unlocks.js:20 "spaar-leerpad", unlocks.js:34 "verhoudingen-pad", unlocks.js:51 "inhoud-pad", WandelPreview.jsx:646 "leerpad" (preview). Elders in deze schermen staat "lesje(s)", wat consequenter is. Voorstel: "Je hebt alle lesjes over sparen af", enz.
- **src/features/zoo/economieLeermomenten.js:50** — "Btw (belasting toegevoegde waarde)". Officieel heet het "belasting over de toegevoegde waarde". Dit is lesinhoud, dus niet gewijzigd.
- **src/features/zoo/parkLeermomenten.js:498** — "hoe lang wacht je?" Als vraagwoord is het "hoelang". Dit is lesinhoud, dus niet gewijzigd.
- **src/features/zoo/buddies.js:383** — "…dan wie een uur jacht maakt." "Jacht maken" is ongebruikelijk. Voorstel: "…dan wie een uur lang haast heeft" of "…dan wie een uur lang propt".
- **src/features/zoo/buddies.js:390** — "Jij kan dit." In de schoolse norm is dat "Jij kunt dit." Dit is spreektaal van een maatje en mag blijven, maar de keuze is aan Mark.
- **src/components/MaatjePocket.jsx:163** — In de deeltekst staat altijd "Hij groeit als ik leer", ook bij maatjes als Eenhoorn of Elfje. Voorstel: "Mijn maatje groeit als ik leer."


---

## Groep F2 — Obliterator / Zookwartier

### ObliteratorGame.jsx

- **ObliteratorGame.jsx:10960–11649 (dode code)** — het oude menu staat achter `{false && fase === "menu" && …}` en wordt nooit getoond; de custom-editor (`fase === "custom-editor"`, r. 11820–12450) is alleen vanuit dat dode blok bereikbaar (r. 11124) en dus ook onbereikbaar. Daarom geen fixes daar. Mocht het ooit terugkomen, dan staan er fouten in: "Levels die je opslaat worden anoniem opgeslagen" (r. 11031) botst met "Log in om levels op te slaan" (r. 11923/12170); de uitleg zegt "Schild = 10 sec ONKWETSBAAR" (r. 11049) maar ook "Pickup → 5 sec onkwetsbaar" (r. 11839); "5 werelden" (r. 11057) terwijl er 10 biomes zijn; veel Engels in de uitleg ("Hit = af", "Pickup", "dodgen", "safe-zone", "range", "random reward", "Tap hier", "Featured", "custom-editor"); "Wereld scrollt 0.55× langzamer" (bedoeld: op 0,55× snelheid). Voorstel: blok opruimen of bij terugzetten eerst nalopen.
- **ObliteratorGame.jsx:12809** — "Voeg toe aan je high-score-naam." (prijs van het soort "titel"). Er bestaat nergens een manier om een titel aan je naam toe te voegen (`waarde` van titel-prijzen wordt nergens gebruikt). De tekst belooft dus iets dat niet kan (ernst 3). Voorstel: "Een titel voor je verzameling." of de functie bouwen.
- **ObliteratorGame.jsx:11792** — welkomstscherm na een gedeelde link: "🎓 Voor groep 3-8, MAVO, HAVO, VWO en gymnasium". De app richt zich op groep 3 t/m 8 + brugklas; "MAVO/HAVO/VWO" (schrijfwijze: mavo, havo, vwo) is mogelijk te ruim. Voorstel: "🎓 Voor groep 3 t/m 8 en de brugklas".
- **ObliteratorGame.jsx:11794** — "De basis blijft gratis (t/m 2031)". Botst niet met de huisregel, maar die zegt "oefenen gratis, gegarandeerd t/m 2031". Voorstel: "Oefenen gratis, gegarandeerd t/m 2031 · geen advertenties".
- **ObliteratorGame.jsx:9286** — "BACK TO NORMAL IN {n} — NAAR DE GROND!": Engels en Nederlands door elkaar in één zin. Ook "— BOSS NEXT!" (8396), "BOSS DEFEATED!" (8951), "WORLD 2 / 10" (9364), "BONUS LEVEL", "HELL MODE". Dat hoort waarschijnlijk bij de spel-sfeer (uitzondering), daarom niet aangepast. Voorstel alleen voor de gemengde zin: "TERUG NAAR NORMAAL IN {n} — NAAR DE GROND!".
- **ObliteratorGame.jsx:12900** — de kopjes per zeldzaamheid in de Spritevibes-kast tonen de sleutel letterlijk; één daarvan is Engels: "secret" (naast groen/blauw/paars/legendarisch/speciaal/mythisch). Om dat te veranderen moet je een label los van de sleutel maken (dat is logica). Voorstel: tonen als "geheim".
- **ObliteratorGame.jsx:8524** — "Je verdient de Universal-skin + Universal-vibe! 🪐". De beloning wordt op dat moment gegeven, en "Je verdient" kan ook "je hebt het verdiend" betekenen. Elders heet hij "Universele kracht". Voorstel: "Je krijgt de Universal-skin + Universal-vibe! 🪐".
- **ObliteratorGame.jsx:26–50 (wijze quotes, lesinhoud-achtig)** — r. 33 "Het schip is veilig in de haven…" staat op naam van Einstein, maar komt van John A. Shedd; r. 44 (vooroordeel/atoom, Einstein) is ook omstreden; r. 46 "Het beste boek heb je nog niet gelezen — Annie M.G. Schmidt" kon ik niet nagaan; r. 26/27/28/41/47 staan onvertaald in het Engels, terwijl de andere wel vertaald zijn. Niet aangepast (inhoud).
- **ObliteratorGame.jsx:494–503 (Tijdmachine)** — "Appel-boom Cambridge": Newton zat in 1666 in Woolsthorpe, niet in Cambridge. "Patent-bureau Bern" heet in het Nederlands "Octrooibureau Bern". Niet aangepast (feitelijke inhoud).
- **ObliteratorGame.jsx:517–520 / 546–548** — muziektitels in het Engels of Duits ("William Tell — Ouverture" → "Willem Tell-ouverture", "Brandenburg Concerto nr. 3" → "Brandenburgs Concert nr. 3") en "Kolossus Rhodos" (→ "Kolossus van Rodos"). Smaak/inhoud, niet aangepast.

### ZookwartierGame.jsx

- **ZookwartierGame.jsx:2370 vs 2366** — de melding na "Bouwen" zegt "📈 Je park verdient 🪙{inkomstenPerDag} per dag" zonder plafond. De kop van het menu laat wel het plafond zien (max PARK_INKOMST_CAP_PER_DAG = 20). Bij een groot park belooft de melding dus te veel. Herstellen vraagt een `Math.min` (logica). Voorstel: dezelfde begrensde waarde gebruiken als in de kop.
- **ZookwartierGame.jsx:3153** — "leer sparen → speel vrij" (knop bij een dier dat nog op slot zit). Je kunt het lezen als "leer (hoe je moet) sparen". Bedoeld is waarschijnlijk "leren → muntjes sparen → vrijspelen". Wat er precies nodig is om deze dieren vrij te spelen weet ik niet zeker. Voorstel: "leer en spaar → speel vrij".
- **ZookwartierGame.jsx:2510–2517 (kassa-overzicht)** — "Verkocht (sinds je het park opende)": de opbrengst is over de hele periode, maar er gaat maar één dag verkopersloon af. "Nettowinst" klopt daardoor niet als som. Voor een rekenles is dat verwarrend. Logica/didactiek, niet aangepast.
- **ZookwartierGame.jsx:1311** — "Niet genoeg muntjes — morgen verdient je leerkwartier weer muntjes!". Grammaticaal klopt het, maar het leest stroef. Voorstel: "morgen levert je leerkwartier weer muntjes op!".
- **ZookwartierGame.jsx:3844** — "Van jouw 🪙 {n} kan ik dit voor je bouwen — welke zal ik bouwen?": "dit" en "welke" passen niet goed bij elkaar. Voorstel: "…kan ik een van deze voor je bouwen — welke wordt het?".
- **ZookwartierGame.jsx:3671** — "Bezoekers verlangen naar wat jij aanbiedt" is wat plechtig voor kinderen van 7–12. Voorstel: "Bezoekers willen graag wat jij verkoopt".
- **ZookwartierGame.jsx:3666 / 2351 / 3710** — Engelse woorden "streak-bonus", "Game-modus". Die zijn in de app ingeburgerd, daarom niet aangepast.
- **ZookwartierGame.jsx:169–290** — reken- en inhoudsvragen (kraam, kubus, piramide, bol…). Dat is lesinhoud, die heb ik niet beoordeeld.


---

## Groep G — mails (api)

- **api/kwartiercheck-mail.js:~131 (deel-actie-blok)** — "Haal je link op in het ouder-dashboard →". De kaart "Geef Familie gratis weg" is op 29 sep 2026 uit het dashboard gehaald (OuderInzicht.jsx:1303), dus de knop verwijst naar iets dat niet meer bestaat (ernst 3). Voorstel: het hele deel-actie-blok uit deze mail halen, of de link vervangen door de persoonlijke link zelf zoals in send-ouder-rapport.js. Vraagt meer dan een tekstwissel.
- **api/send-ouder-rapport.js:270-283 + kwartiercheck-mail.js** — de deel-actie ("Familie gratis tot augustus 2027") staat nog in de mails, terwijl de dashboardkaart weg is. Is de actie nog geldig? En klopt "augustus 2027"? CLAUDE.md noemt bij partnercodes "t/m 31-12-2027". Voorstel: Mark laten beslissen of de actie blijft. Zo ja: één einddatum kiezen.
- **api/kind-overzicht-mail.js:69 en api/kwartiercheck-mail.js:238** — de standaardafzender is `Leerkwartier <noreply@leerkwartier.app>` (alleen als EMAIL_FROM ontbreekt). De huisregel noemt hallo@ als contactadres, en antwoorden op noreply@ komen nergens aan. Voorstel: `hallo@leerkwartier.app` als standaard, net als in de andere mails. Dit is configuratie, dus niet zelf aangepast.
- **api/kwartiercheck-mail.js:32 + CTA "Start de Doorstroomtoets-voorbereiding →" (→ /cito)** en **api/_lib/send-kwartiercheck-week.js:65** ("Nog ongeveer N weken tot de Doorstroomtoets"): de Kwartiercheck loopt sinds 29 sep voor groep 3-8. Ook een ouder of verzorger van een kind in groep 3 krijgt dan een aftelling naar de Doorstroomtoets en een knop daarvoor. Voorstel: bij groep < 8 (of < 7) de aftelling weglaten en de CTA neutraal maken ("Verder oefenen →").
- **api/send-doorstroom-countdown.js:30** — "Groep 8 is begonnen…": gaat deze reeks alleen naar ouders of verzorgers van groep 8, of naar alle aanmelders voor lesmateriaal? Bij alle aanmelders loopt de zin niet. Niet aangepast.
- **api/send-doorstroom-countdown.js:34** — "Een kwartier per dag oefenen werkt aantoonbaar beter dan af en toe lang." Is "aantoonbaar" te onderbouwen (spaced practice)? Zo niet: "werkt beter dan af en toe lang".
- **api/send-ouder-rapport.js:300 ("📊 Jouw wekelijkse ouder-rapport"), :307 ("ouder-dashboard"), api/kind-overzicht-mail.js:52 ("Aangevraagd via je ouder-pagina"), api/unsubscribe.js:44 ("het wekelijkse ouder-rapport")** — hier wordt de lezer aangesproken met namen waar alleen "ouder" in staat. Het zijn productnamen die door de hele app terugkomen, dus niet los aangepast. Voorstel: in één keer kiezen voor "weekrapport" en "pagina voor thuis", of het zo laten.
- **api/send-ouder-rapport.js:302** — "Dit is je weekrapport van vrijdag". Dat klopt alleen zolang OUDER_RAPPORT_OP_MAANDAG niet aan staat. Prima zo, ter info.
- **Buiten scope (src/)**: src/features/ouder/OuderInzicht.jsx:343 ("het maandag-weekrapport voor dit kind stopt") en src/components/FamilieUitleg.jsx:15 ("Weekmail op maandag") noemen nog maandag. Het rapport gaat sinds 30 sep 2026 op vrijdag. Graag laten oppakken door de groep die src/ doet.
- **api/weekpakket.js:101/92** — de week wordt getoond als ruwe ISO-sleutel ("Week 2026-W41"). Leest technisch. Voorstel: "week 41". Daarvoor moet de opmaak in code veranderen, dus niet aangepast.
- **api/checkout-session.js:158** — "Schrijf je in op de wachtlijst via /abonnement.html." Een kaal pad is als foutmelding niet klikbaar. Voorstel: "via leerkwartier.app/abonnement.html". Ik weet niet zeker of de app deze melding als link toont.
- **api/generate-questions.js:82** — "Ongepaste invoer gedetecteerd." Formeel en "gedetecteerd" is jargon. Als de app dit aan het kind toont: "Over dit onderwerp maken we geen vragen. Kies een ander onderwerp." Niet nagegaan of de client het toont.
- **AI-prompts**: geen prompt laat het model letterlijk "altijd gratis" of een concurrentnaam zeggen. In api/send-ouder-rapport.js:2 staat "Squla", maar alleen in commentaar.


---

## Groep H1 — webpagina's deel 1

Feiten gecontroleerd: afnameperiode Doorstroomtoets 2027 (25 jan t/m 12 feb, papier 26-27 jan, voorlopig advies 10-31 jan) klopt volgens rijksoverheid.nl / VO-raad. De datum van de **uitslag** heb ik niet kunnen bevestigen (zie punt 6).

### Prijs, gratis en Familie

1. **public/abonnement.html:314**: `Je proef-Familie staat aan: 30 dagen.` (bedankkaart na betalen, plan=test1). De huisregel zegt een proefweek van 7 dagen. Als dit alleen Marks testplan is: laten staan. Gaat het om de echte proef, dan wordt het "Je proefweek Familie staat aan: 7 dagen."
2. **public/abonnement.html:326**: knop `Naar je ouderpagina` (bedankkaart). Hier staat alléén "ouder". Voorstel: "Naar je overzicht voor thuis". Ik heb het niet gewijzigd omdat het de naam van een route/pagina kan zijn.
3. **public/abonnement.html:204**: `Ouder-dashboard met de voortgang van je kinderen`. Dezelfde regel over "ouder". Voorstel: "Overzicht voor thuis met de voortgang van je kinderen".
4. **public/abonnement.html:256**: `Je voortgang, scores en streaks`. Hier staat een Engels woord. Ik weet niet welk woord de app zelf gebruikt; voorstel: "reeksen" of "dagen op rij".
5. **Hele oefentoets: gratis of Familie?** In abonnement.html:207 staat "Hele Doorstroomtoets oefenen: 50 vragen, 60 minuten" als iets van **Familie**. Maar gratis-alternatief-squla.html:87/192/201/203, leergeld-flyer.html:107 ("Complete gratis oefen-Doorstroomtoets") en gratis.html noemen een **complete gratis oefentoets**. Mark moet kiezen welke versie klopt.
6. **Weekrapport: gratis of Familie?** dictee-oefenen.html:43/52 spreekt van "Het **gratis** weekrapport voor thuis". In abonnement.html en gratis.html is het weekrapport een Familie-onderdeel. (De dag maandag→vrijdag heb ik wel als fix opgenomen.)
7. **Partnercode-recht**: doorgeven.html, gratis.html:266 en leergeld-flyer.html zeggen "Familie gratis t/m 31 december 2028". Volgens de code-teller-SQL in CLAUDE.md is dat "t/m 31-12-2027". Op de site is 2028 consequent; wat is de juiste datum?

### Verouderd / klopt niet meer

8. **public/aftelweken.html:168 + :264 (js)**: `de eerste Aftelweken-mail komt in september, als groep 8 begint` en `✓ Gelukt! … De eerste Aftelweken-mail komt in september.` Het is nu oktober, dus september is voorbij. Wat krijgt iemand die zich nu aanmeldt? Voorstel: "Je krijgt de eerstvolgende Aftelweken-mail van dit seizoen." Ik heb dit niet gewijzigd omdat ik niet weet hoe de verzending werkt.
9. **public/bedankt.html:76**: `inmiddels bezoeken ruim 700 mensen per maand`. Volgens het hoofdcijfer in CLAUDE.md waren het in september 1.066 mensen. Voorstel: "ruim 1.000 mensen per maand". Graag eerst het cijfer bevestigen.
10. **public/gids:306 + :330** (doorstroomtoets-2027-gids.html): `De toetsuitslag is uiterlijk 15 maart bij de school`. aftelweken.html:145 zegt `de uitslag volgt uiterlijk 24 maart`, en de pagina's over aanbieders zeggen "eind maart". Ik heb de juiste datum niet kunnen vinden.
11. **public/doorstroomtoets-2027-gids.html:121 (FAQ-JSON-LD)**: `Sinds 2024 zijn alle aanbieders volledig digitaal … Sommige scholen die nog over papieren toetsen beschikken … krijgen die niet meer aangeboden.` Dit spreekt de papieren toets van 26-27 jan 2027 tegen. De zichtbare FAQ (regel 452) heb ik gefixt. Voor deze tekst: "Meestal digitaal, op een tablet of laptop op school. Er is ook een papieren versie, op vaste dagen (26 en 27 januari 2027)."
12. **public/doorstroomtoets-cito-leerling-in-beeld.html:126**: `Cito biedt LiB sinds 2024 alleen nog digitaal aan`. Dit botst met punt 11 en met doorstroomtoets-oefenen.html:213 ("Cito … papier mogelijk").
13. **Inhaalafname**, drie verschillende antwoorden: gids:129 "in een ander tijdvak", gids:457 "in maart", cito-eindtoets-oefenen.html:49/118 "meestal binnen 2 weken". Kies er één.
14. **public/doorstroomtoets-2027-gids.html:215**: `Bijgewerkt: 13 mei 2026`. De datum is oud; ophogen als de gids gecontroleerd is.
15. Overal **"Doorstroomtoets in februari"** (cito-toets-oefenen.html:251 "vanaf november", leren-15-minuten.html:234 "afname in februari", doorstroomtoets-oefenen.html:64 JSON-LD, :242, :277 "in de weken voor februari", cito-eindtoets-oefenen.html:102). De toets begint al op 25 januari. Ik heb alleen de duidelijkste plekken gefixt; de rest kan beter "eind januari/februari" worden.

### Feiten op de pagina's over de aanbieders (amn / cito-leerling-in-beeld / dia / iep / route-8)

16. Op deze pagina's staan veel feitelijke beweringen die ik niet kan controleren en die elkaar soms tegenspreken. Ik raad een feitencheck door Mark aan (of de pagina's sterk inkorten):
   - amn:84 `AMN staat voor "Adaptief Multimedia Niveau" … uit Arnhem`. dia:84 `Dia staat voor "Diataal-instituut" … Sinds 2017`. iep:84 `sinds 2015 … Bureau ICE`. route-8:84 `sinds 2014 … A-VISION`. Dit zijn waarschijnlijk deels verzonnen of onjuiste uitleggen van de namen.
   - Afnametijden spreken elkaar tegen. Gids:259 noemt Route 8 "≈3 uur", gids:339 "2,5 uur". Gids:263 noemt Dia "~2,5 uur, één ochtend", maar volgens dia:96 duurt het "~3 uur" met pauzes. dia:79 zegt "2,5 uur tegen 4 uur bij Cito of IEP", terwijl iep:98-101 opgeteld ±3,5 uur geeft.
   - Adaptief: gids:340 noemt Dia "(adaptief)", dia:109 zegt "deels", amn:109 zegt "Net als Dia … hybride".
   - cito-leerling-in-beeld:110 `de bekende "Cito-score" van 501-550 — die werd in 2018 al afgeschaft`. Die score werd volgens mij tot en met 2023 gebruikt.
   - amn:137 `een steeds groter aandeel sinds 2022` naast "sinds 2024 erkend". Verder de aantallen vragen per onderdeel en de "Hart en Handen"-vragenlijst van IEP.
   - route-8:136 `formulier dat in september al ingediend moet worden`, cito-toets-oefenen.html:281 `De school regelt dit via de ICT-coördinator en de Inspectie`, doorstroomtoets-oefenen.html:282 `aanpassingen … via de Inspectie van het Onderwijs` en cito-eindtoets-oefenen.html:116 `vóór september` (tegenover "uiterlijk in oktober" op cito-toets). Dit is waarschijnlijk onjuist; de school regelt dit zelf met de aanbieder.
   - dia:132 `hoge "diagnostic value" (item-response-theory)`. Engels jargon; voorstel: "vragen die veel zeggen over het niveau".
   - amn:84 `een educatieve-loopbaan-toetsbedrijf` en `scholen die overgang naar het VO actief begeleiden`. Dat loopt niet; voorstel: "van origine een bedrijf dat loopbaantoetsen maakt (voor MBO en HBO)" en "scholen die de overgang naar de middelbare school actief begeleiden".
17. **"~50% van de score" voor begrijpend lezen** (begrijpend-lezen-doorstroomtoets.html:6/80/188/246, gids:360, leesladder.html:81/132, leren-15-minuten.html:266). Ik kan dit niet onderbouwen; de toets heeft drie verplichte onderdelen. doorstroomtoets-oefenen.html:224 noemt juist "rekenen en taalverzorging, de twee zwaarste onderdelen". Dat spreekt elkaar tegen.
18. **cito-toets-oefenen.html:227-233** `De 4 niveau-adviezen` met referentieniveaus per advies (bv. "VMBO-(g)t: 2F taal, 1S rekenen"). Er zijn meer adviescategorieën, en de koppeling aan referentieniveaus is grof. Het valt onder lesinhoud/feiten, dus ik heb het niet beoordeeld.
19. **cito-toets-oefenen.html:210 tegenover :225**: groep 7 heeft "alleen de optionele Cito-LVS in juni" tegenover "Drie LVS-momenten in groep 7 — januari rekenen, juni …". Daarnaast :213 "niet pas in november beginnen — 4-6 maanden is ideaal" tegenover :177/:251 "Dagelijks 15 min vanaf november". En :225 "krijgt zelden een lager advies dan havo" is een gewaagde bewering.
20. **cito-toets-oefenen.html:291 / cito-leerling-in-beeld:113**: `"voorbeeldopgavenboekje" met circa 30 oefenvragen … via cito.nl`. Ik heb niet gecontroleerd of dit klopt.
21. **begrijpend-lezen-doorstroomtoets.html:234**: `Per oefenpad krijg je 1 tekst van 200-250 woorden + 4 Cito-stijl vragen`. Ik weet niet of dit klopt; ook "oefenpad" is jargon.
22. **begrijpend-lezen-doorstroomtoets.html:291 (JSON-LD, lesinhoud)**: `Wat doet een signaalwoord zoals 'daarom'? … Andere signaalwoorden: dus, daardoor, daarom, vandaar`. 'daarom' staat bij de "andere" woorden. Voorstel: "daarom" vervangen door "dan ook".
23. **dictee-oefenen.html:36**: het overzicht per groep (bv. "-ng/-nk" in groep 5) wijkt af van de gegenereerde dicteepagina's ("-ng en -nk" in groep 4; hoofdletters in groep 7 en niet in groep 8). Dit is lesinhoud, dus ik heb het alleen genoteerd.
24. **leren-15-minuten.html:276**: `Tafels oefenen … 1 t/m 12`, terwijl elders op de site "1 t/m 10" staat.

### Huisregels: twijfelgevallen

25. **gratis-alternatief-squla.html (hele pagina)**: Squla, Junior Einstein en Duolingo staan er bij naam in, ook in de titel, de h1, de FAQ-JSON-LD en regel 212 ("Uitgebreide vergelijking Squla vs. Leerkwartier"). Volgens de opdracht niet gewijzigd. Voorstel: de pagina houden voor SEO, maar de bezoeker naar een neutrale vergelijking ("betaalde oefen-apps") laten gaan, of Mark laten beslissen. Kleine dingen als de pagina blijft: :210 "informatie voor ouders" wordt "ouders en verzorgers". Verder wordt "de complete oefentoets" gratis genoemd (zie punt 5).
26. **"Brand-context:"** is een zichtbare Engelse kop onderaan begrijpend-lezen-doorstroomtoets.html:276, cito-toets-oefenen.html:298, gids:469, doorstroomtoets-oefenen-groep-7.html:220, doorstroomtoets-oefenen.html:311 en leren-15-minuten.html:290. Twee keer wordt ook een ander bedrijf genoemd ("Leatherbox, voorheen Het Leerkwartier"). Dit staat op meer pagina's dan alleen de mijne, dus ik heb het niet per pagina gefixt. Voorstel: overal "Let op:" en het andere bedrijf niet bij naam noemen.
27. **"Cito" in koppen en titels van de Cito-SEO-pagina's** (cito-eindtoets-oefenen.html h1/title, cito-toets-oefenen.html h1/title, de h3 "Waarom Leerkwartier voor Cito-oefenen?" en de FAQ-vragen "Hoeveel kost Cito-oefenen?"). Ik heb ze bewust laten staan als SEO-trefwoord. Mark beslist of de zichtbare kop "Cito eindtoets oefenen" mag blijven.
28. **public/mail-scholen.html (hele mailsjabloon)**: deze mail is in u-vorm ("Geachte"; formeel, dat is te verdedigen bij scholen). Er staat ook verouderde of onzekere inhoud in: "100+ schoolmethodes ondersteund (MAVO, HAVO, VWO)" in een mail aan basisscholen, "Scorebord — leerlingen zien elkaars scores" (bestaat dit nog?), "Cito Doorstroomtoets voorbereiding" (moet "Doorstroomtoets" zijn), de persoonsnaam prominent als afzender en het onderwerp "gemaakt door een Nederlandse ontwikkelaar". Voorstel: het sjabloon herschrijven of verwijderen. Ik heb het niet gewijzigd omdat het een intern sjabloon is.
29. **"leerpad" in UI-tekst** (telling alleen, niet gewijzigd): doorstroomtoets-oefenen.html :182-183 (stap "Leerpad"), :262; leren-15-minuten.html :189 en FAQ :224 ("leerpad-stap", "mini-leerpad"); cito-toets-oefenen.html:225; fragmenten op gratis.html:171/178/196, abonnement.html:42/248, brugklas:194, leesladder:73. Dat zijn ongeveer 12 plekken. Ook "terugkoppel-leerflow" (doorstroomtoets-oefenen.html:178, leren-15-minuten.html:182 en JSON-LD :91) is jargon.
30. **doorstroomtoets-oefenen.html:292**: `eigen ster-collectie` en `Schakelen tussen kinderen kan via het profiel-icoon rechtsboven`. Bestaat dit zo in de app? (Het aantal van 4 naar 3 kinderen heb ik wél gefixt.)
31. **leerkracht-takenlijst.html:101 tegenover :140 / JSON-LD :54**: "Wil je daarna zien wie wat deed? Dan maak je een takenlijst met een klascode" tegenover "Een leerkracht-overzicht per klas staat op de planning". Bestaat het overzicht nu wel of niet?
32. **doorstroomtoets-oefenen.html:277**: `15 minuten op een vaste tijd (na schoolfruit, vóór avondeten)`. Schoolfruit eet je op school, dus dit lijkt vreemd. Voorstel: "na school".
33. **kwartiercheck.html:112**: de kop "waar sta ik nu?" (vanuit het kind gezien) staat op een pagina die de ouder aanspreekt ("jouw kind"). Voorstel: "waar staat je kind nu?".
34. **leermaatje.html:113 / JSON-LD :49**: de knop heet in de app "Vraag hulp aan {naam maatje}" (LearnPath.jsx), op de pagina "Vraag hulp aan je maatje". Dat is acceptabel als omschrijving; alleen ter info.
35. **begrijpend-lezen-oefenen.html:81**: `hij/zij`. Prima, maar stijlbreuk met de rest van de site.
36. **public/leergeld-flyer.html:84**: `Oefenboeken kosten €27 tot €40. Bijles kost €37 per uur.` Hoe hard zijn deze bedragen? Op gratis-bijles.html staat "€25-50 per uur".


---

## Groep H2 — webpagina's deel 2 + generators

### Ernstig (ernst 3: onwaar, kapot of strijdig, maar niet met een kleine swap op te lossen)

- **scripts/buildExamenVraagPaginas.mjs:44** (alle ~288 pagina's in `public/examen/**/vraag-*.html`). De knop "Oefen deze vraag interactief in Leerkwartier →" linkt naar `https://leerkwartier.app/leerpaden/<id>?step=N`. Die route bestaat niet: `src/app/routes.js` kent alleen `/leren` en `/leren/pad`, dus `pageForPath` stuurt de bezoeker naar home. **Voorstel:** `oefenenUrl = \`${SITE}/leren/pad?id=${pathMeta.id}\`` (zoals in buildPadLandingsPaginas.mjs). Daarna `build-examen-set-indexes.mjs` opnieuw draaien, want de CTA van de set-index neemt deze URL over (regel 76). Dit is een URL in code en geen tekst, dus niet in de fixes gezet.
- **public/vmbo-examens-oefenen.html + public/vmbo-examens-downloaden.html.** Het overzicht "Beschikbare examens" / "Vakken die op Leerkwartier interactief beschikbaar zijn" is verouderd. Er staan alleen economie 2023-2025, Engels 2024/2025 T1 en geschiedenis 2025 T1, en de meta zegt "2023-2025 — economie, Engels, geschiedenis". In `src/learnPaths/` staan er 48: biologie, economie, Engels, geschiedenis, maatschappijkunde en Nederlands, elk 2022-2025 met tijdvak 1 en 2. Ook de FAQ "Welke VMBO-examens kan ik oefenen?" (zichtbaar + JSON-LD) klopt niet meer. **Voorstel:** de lijst herschrijven naar 6 vakken × 2022-2025 × TV1+TV2, en in title, meta en og "2023-2025" vervangen door "2022-2025".
- **Einddatum Familie via partnercode.** De site noemt "tot en met 31 december 2028": voor-organisaties.html:262, studiezalen.html:95, voorbeeld-kinderhulp.html:102 (en ook gratis.html/doorgeven.html van andere groepen). Maar de database-default `partner_codes.familie_tot` = 2027-12-31 (migratie 20260902_f2_partner_recht_server.sql, commentaar in useSubscription.js:14). PartnerWelkom.jsx noemt "t/m 2028" alleen voor enkele losse codes. **Voorstel:** Mark laten beslissen welke datum geldt. Daarna óf de tekst óf de kolom gelijktrekken.
- **Datum Doorstroomtoets is niet overal hetzelfde.** rondleiding.html:20/87/131 + JSON-LD zegt "in januari" / "derde week van januari". studievaardigheden-doorstroomtoets.html:121/289 zegt "begin februari". rekenen-doorstroomtoets.html zegt "februari". voorlopig-schooladvies.html:46 zegt "eerste helft februari (2027: 25 januari t/m 12 februari)", met in dezelfde tabel "voorlopig advies 10 t/m 31 januari", dus de toets begint vóór het advies er uiterlijk moet zijn. over.html en onderwijs-begrippen.html zeggen "25 januari t/m 12 februari 2027". **Voorstel:** de officiële afnameperiode 2027 nakijken en overal één formulering gebruiken, bijvoorbeeld "eind januari – half februari (2027: … t/m …)".
- **public/privacy.html:64-68 en :150.** Hier staat alleen "Bij optioneel inloggen met Google" en "Geen wachtwoorden bij ons — (alleen Google-OAuth als je inlogt)". Maar de app heeft ook inloggen met een e-mailadres via een magic link (`src/auth/EmailLogin.jsx`, signInWithOtp). voorwaarden.html en voor-leerkrachten.html noemen dat ook ("inloggen met je e-mailadres"). Juridische tekst, dus niet aangepast. **Voorstel:** een kopje "Bij optioneel inloggen met je e-mailadres" toevoegen (e-mailadres; geen wachtwoord, inloglink per mail) en de regel "alleen Google-OAuth" aanpassen.
- **public/onderwijs-begrippen.html:112/126/173-176.** "Cito Leerling in Beeld (LiB) … sinds 2024 de officiële naam van de Cito-versie van de Doorstroomtoets." Volgens mij klopt dit niet: *Leerling in Beeld* is het leerlingvolgsysteem van Cito. De toets heet "Doorstroomtoets van Cito". Er zijn meer feitelijke twijfels op deze pagina:
  - (a) "De Doorstroomtoets meet of de centrale kerndoelen daadwerkelijk zijn behaald." De toets meet referentieniveaus, geen kerndoelen.
  - (b) "Anders dan de Doorstroomtoets is het LVS niet wettelijk verplicht." Scholen zijn wél verplicht een leerlingvolgsysteem te hebben.
  - (c) "Inhoudelijk meten ze … studievaardigheden." Verplicht zijn lezen, taalverzorging en rekenen.
  - (d) "een leerling met havo/vwo-advies krijgt het eerste jaar VWO-stof".
  - (e) "kosten worden meestal vergoed via de school of jeugdzorg".

  **Voorstel:** de hele pagina feitelijk laten nakijken. Ik heb hier alleen taalfouten hersteld.
- **public/welkom.html** (na de fix). Het h1 is nu de exacte slogan. Kijk even of de opmaak (accent-spans) nog mooi staat op de video-pagina.

### Prijs / gratis

- **public/voorwaarden.html:53.** "wil je door, dan kies je zelf voor een nieuw jaar (€ 31)". Dit wijkt af van de huisregel (€ 39 per 12 maanden). Misschien is het een bewuste verlengkorting. Juridische tekst. **Voorstel:** Mark laten bevestigen. Is het geen bewuste korting, dan "(€ 39)".
- **public/voorwaarden.html:43.** "Tot 1 januari 2027 is ook het Familie-pakket voor iedereen gratis." De proefweek (7 dagen zonder betaalgegevens) staat nergens in de voorwaarden. **Voorstel:** een regel over de proefweek toevoegen zodra die live is.
- **public/vmbo-examens-oefenen.html:205-211 vs :246.** De pagina presenteert "Examen-modus — authentiek" als gewoon gratis onderdeel. Maar in de FAQ staat "examen-simulatie met klok en eindrapport" onder het betaalde Familie-pakket. Ook "Echte tijdsdruk (60-90 min per examen)" is twijfelachtig: een cse vmbo-gl/tl duurt meestal 120 min. **Voorstel:** verduidelijken wat gratis is en wat Familie.
- **public/squla-alternatief.html (hele pagina).** Huisregel: geen concurrenten bij naam. Niet gewijzigd. De pagina heeft duidelijk een SEO-functie (title, meta, keywords, FAQ "Hoe zeg ik Squla op?", vergelijkingstabel). Verder staat er "Cito eindtoets oefenen (groep 8)" in zichtbare tekst (r.163) en "€10 per maand voor een oefenapp". **Voorstel:** Mark laten kiezen. Óf de pagina noindex/verwijderen + redirect naar /gratis.html, óf herschrijven naar een merkloze "gratis alternatief voor betaalde oefenapps". In de huidige vorm botst hij met de huisregel.

### "u" in plaats van "je" (te groot om als kleine fix te doen)

- **public/voor-organisaties.html (hele pagina), voorwaarden-organisaties.html, vlaanderen.html:83/93/96, voorlezen.html (generator scripts/buildVoorlezen.mjs: "Werkt u bij een bibliotheek…", "Liever een flyer of poster met uw eigen logo?").** Organisaties worden consequent met "u" aangesproken. De huisregel zegt "geen u". Bij organisaties/Vlaanderen is "u" misschien bewust zakelijk. **Let op:** de "Klaar-voor-gebruik nieuwsbrieftekst" in voor-organisaties.html:299-303 is een tekst vóór ouders ("Heeft uw kind groep 6, 7 of 8?…") en hoort volgens de huisregel in je-vorm. **Voorstel:** Mark beslist of organisatieteksten "u" mogen houden. De ouder-nieuwsbrieftekst in elk geval naar "je" ("Heeft je kind groep 6, 7 of 8? … krijgt je kind uitleg …").

### Huisregel "ouder" / jargon (telling, niet massaal vervangen)

- **"voor ouders" als enige benoeming van de lezer:** onderwijs-begrippen.html (title, h1, meta: "helder uitgelegd voor ouders"), uitleg-thuis.html (title, h1-meta, breadcrumb "Zo leg je het uit — voor ouders"; generator scripts/buildUitlegThuis.mjs), oefenpakket.html ("instructiepagina voor ouders", "Ouder-instructiepagina", "uitleg voor ouders"), rekenen/spelling/studievaardigheden/woordenschat-doorstroomtoets.html (link "Zo leg je 't uit (voor ouders)"), tafels-oefenen.html ("Tip voor ouders", "👪 Voor ouders: …"), voor-organisaties.html ("wekelijks rapport voor ouders", "B1-flyer voor ouders"), nieuwkomers-nederlands-leren.html (FAQ "uitleg voor ouders in hun eigen taal"). Dat zijn ongeveer 20 plekken. **Voorstel:** overal "ouders en verzorgers" of "voor thuis".
- **"leerpad/leerpaden" zichtbaar:** park.html ("Leerpad: vulkanen"), over.html, vmbo-examens-*.html (≈8×), voor-organisaties.html ("Meer dan 165 leerpaden"), welkom.html, start-via-ai.html/zomerdip ("een kort leerpad"), en de template in scripts/buildPadLandingsPaginas.mjs (breadcrumb "Leerpaden", knoppen "Start dit leerpad", "Open het volledige leerpad", kop "Wat leer je in dit pad?") → 39 gegenereerde pagina's. Dat zijn in totaal ongeveer 25 plekken in de bronnen.
- **"Brand-context: Leerkwartier (leerkwartier.app) is een leer-app. Niet gerelateerd aan…"** staat zichtbaar onderaan rekenen-, spelling-, studievaardigheden-, woordenschat-doorstroomtoets.html en vmbo-examens-*.html. Het leest als interne SEO-notitie ("Brand-context" is Engels). **Voorstel:** "Over de naam: Leerkwartier (leerkwartier.app) is een leer-app en heeft niets te maken met andere bedrijven met 'Leerkwartier' in de naam."
- **"Cito" zichtbaar met SEO-functie:** link "Cito-toets oefenen voor groep 6, 7 en 8" in de template van buildPadLandingsPaginas.mjs:294, "Cito eindtoets oefenen" (link-tekst over.html:206), keywords/FAQ-namen in JSON-LD (over.html "Hoe kan ik de Cito eindtoets oefenen?" in FAQPage-schema bewust laten staan als zoekvraag), knowsAbout "Cito-eindtoets". **Voorstel:** link-teksten "Doorstroomtoets (Cito) oefenen …".

### Kleinere twijfels

- **scripts/buildPadLandingsPaginas.mjs.** De paginatitel herhaalt het niveau als de padtitel het al bevat: "Cijferend rekenen — Doorstroomtoets groep 6-8 — Rekenen, groep 6-8 · Leerkwartier". Verder pitch "skim+scan voor Doorstroomtoets-pijler" (Engels + intern jargon) en "Taalverzorging voor de Doorstroomtoets groep 8 — woordenschat, begrijpend lezen, spelling, grammatica" (woordenschat en begrijpend lezen vallen niet onder taalverzorging). De stat "~15 min per deel" bij paden van 8 delen botst met de 15-min-belofte.
- **scripts/buildPadLandingsPaginas.mjs, pitch dierenklassen.** "zoogdier vs vogel vs reptiel vs vis": 'vs' is Engels. Voorstel: "zoogdier, vogel, reptiel of vis".
- **public/rondleiding.html:139 + JSON-LD.** "kinderen die 1 fout maken en doorklikken naar de 'simpeler'-uitleg, begrijpen het concept achteraf bovengemiddeld vaak". Een onbewezen claim, direct na "We meten dat nog". In de JSON-LD is het voorbehoud weggevallen. **Voorstel:** schrappen of "we zien de eerste tekenen dat…".
- **public/oefenpakket.html:141.** "Alle vijf de erkende toetsen meten dezelfde vaardigheden uit de referentieniveaus (rekenen, taal, studievaardigheden verschilt per toets)." Het stuk tussen haakjes is onleesbaar. **Voorstel:** "(lezen, taalverzorging en rekenen; studievaardigheden verschilt per toets)".
- **public/studievaardigheden-doorstroomtoets.html (hele pagina).** "derde grote onderdeel", "weegt ongeveer even zwaar mee als taal of rekenen". Sinds 2024 is studievaardigheden geen verplicht onderdeel van de Doorstroomtoets. Feitelijk laten nakijken.
- **public/rekenen-doorstroomtoets.html:190/266.** "60-70% redactiesommen" heeft geen bron. Hetzelfde geldt voor tafels-oefenen.html:109 ("bij 50 rekenvragen op een toets van 75 minuten … 10 vragen niet ingevuld") en :137 ("de zogenoemde 'gehele getallen rekenen'", onduidelijk).
- **public/tafels-oefenen.html.** Tafels "groep 3 t/m 6" (titel/app) vs oefenpakket.html "Tafel-werkbladen + tafeldiploma (groep 4-8)". Ook over.html noemt "groep 3 t/m 6". Kleine inconsistentie.
- **public/over.html:144 + FAQ.** "Oefenstof afgestemd op 100+ Nederlandse schoolmethodes" / "Meer dan 100 … per hoofdstuk en paragraaf". Claim niet geverifieerd.
- **public/over.html:236 en privacy.html.** "De app werkt daarna ook offline" naast "PWA / Android": jargon "PWA". Mag "installeerbare app" worden.
- **public/voor-organisaties.html:246.** "Meer dan 165 leerpaden" is mogelijk verouderd. Ook "1.000 gezinnen in oktober 2026 … goodiebag" (Spark Fest 18 okt) moet na het festival in de verleden tijd.
- **public/voorbeeld-kinderhulp.html:61.** "ruim 700 mensen per maand". Volgens de nulmeting van 25 sep waren dat er in september 1.066 (events_mens). Het getal kan omhoog (pagina is noindex/voorbeeld).
- **public/voor-leerkrachten.html:159.** "Geef je leerlingen je koppelcode mee naar huis: wat jij klaarzet, zien ze thuis ook." Leerkrachten werken met een *klascode*; de "koppelcode" is ouder-kind. Waarschijnlijk is "klascode" bedoeld. Nakijken.
- **public/studiezalen.html:88.** "Rond af met de teller: een kwartier per dag is genoeg." Onduidelijk welke "teller" bedoeld is. Ook :109 "meer exemplaren-tekst" is onduidelijk.
- **public/vlaanderen.html:91.** Tabelrij "juf of meester | juf of meester" laat geen verschil zien. Weghalen of een echt verschil noemen.
- **public/spelling-doorstroomtoets.html:211.** "Hoor-woorden die je uit je hoofd moet kennen: trein/tijd, vrouw/saus". Op school heten dat weetwoorden of onthoudwoorden. Lesinhoud, dus niet aangepast.
- **src/features/familie/ouderkaartContent.js:134** (komt op uitleg-thuis.html). "Dek de trap: loop samen de tafel van 2 op de trap…". "Dek de trap" lijkt een verhaspeling. Lesinhoud, niet aangepast. Voorstel: "Tel op de trap: …".
- **scripts/buildUitlegThuis.mjs:185.** Disambiguatie-regel "gemaakt door Mark Smulders" zet een persoonsnaam zichtbaar onderaan. Het is geen contactadres, maar het wijkt af van de rest van de site ("gemaakt door één vader").
- **public/nieuwkomers-{bg,en,ro,tr,uk}.html** (generator scripts/buildNieuwkomersTalen.mjs). De vertalingen zelf kon ik niet op taalkwaliteit beoordelen (Bulgaars, Oekraïens, Roemeens, Turks). Engels is in orde. De Nederlandse footer en de links kloppen.


---

## Groep I — drukwerk

Legenda: **[S]** = sjabloon (staat in meerdere varianten), **[P]** = eenmalige partnerflyer/-poster.

1. **[S] Deelknoppen doen niets (ernst 3, logica — niet zelf gefixt)** — `flyer-DONGEN2027.html:92-96`, `flyer-DONGEN2027-drukwerk.html:92`, `flyer-ICHTHUS2027.html:67`, `flyer-KINDERZWERFBOEK2027.html:67`, `flyer-LEUDAL2027.html:67`, `flyer-OOIEVAAR2027.html:67`, `flyer-VLUCHTELINGEN2027.html:67`.
   Huidig: balk "📲 Digitaal delen …" met "WhatsApp" (`href="#"`), "🔗 Kopieer link", "📷 Toon QR". Er staat in deze bestanden geen script dat de knoppen koppelt; `.qr-toon` blijft `display:none`. In `public/leergeld-flyer.html:163` staat dat script wél (bij het kopiëren weggevallen).
   Voorstel: het deel-script uit leergeld-flyer.html meekopiëren (met de juiste URL per flyer), of de deel-balk weghalen.

2. **[S] Wie wordt aangesproken? (hulporganisaties-sjabloon, 14 flyers + bulk)** — bv. `flyer-BREDA2027.html:76-90`. De flyer spreekt eerst de organisatie aan ("Voor de gezinnen die u helpt …", "Vragen van uw stichting beantwoord ik persoonlijk") en daarna ineens het gezin ("Scan … uw telefoon … voor uw gezin óók heel 2027 gratis"). De lezer weet niet of hij hulpverlener of ouder is.
   Voorstel: cadeau-blok richten aan het gezin ("Gezinnen scannen de QR-code …"), of twee aparte versies (organisatie / gezin).

3. **[S] "Oefenboeken kosten €27 tot €40. Bijles kost €37 per uur. Onderzoeksjournalistiek liet zien …"** — alle hulp-flyers r.76/82/107, bulk r.49, folder-enschede r.66 ("al snel €30"). Prijzen en de bron-claim kan ik niet verifiëren; geen bron genoemd. Bulk: "Zo vergroot betaalde toetstraining …" volgt niet logisch uit twee prijzen. Voorstel: bron checken of afzwakken ("Oefenboeken en bijles kosten al snel tientallen euro's").

4. **[S] "Ook voor de bovenbouw: echte VMBO-examenvragen"** — hulp-flyers r.103/109/134, bulk r.63, folder-enschede r.94. "Bovenbouw" betekent voor een basisschool-ouder groep 6-8; hier is VMBO-bovenbouw bedoeld. Voorstel: "Ook voor oudere kinderen: echte VMBO-examenvragen met uitleg" (zoals de B1-flyers).

5. **[S] Gratis-periodes lopen uiteen (datums niet zelf gewijzigd)**:
   - `_template-flyer-b1.html:78,94`: "gratis in heel 2027 én 2028" — terwijl andere codes "t/m de Doorstroomtoets 2027" / "t/m 31-12-2027" beloven (CLAUDE.md: recht t/m 31-12-2027).
   - `flyer-ALMELO2027(-logo).html:55/57` [P]: "tot en met 2028".
   - `flyer-OOIEVAAR2027.html` [P]: "óók heel 2027 gratis, tot en met de Doorstroomtoets", terwijl OOIEVAAR-codes volgens CLAUDE.md "blijvend" recht geven.
   - Stickervellen [S] (4×): "Cadeau: scan → gratis t/m de Doorstroomtoets 2027" — leest alsof de hele app daarna betaald is (oefenen blijft gratis t/m 2031).
   Voorstel: Mark laat één regel per code vaststellen; sjabloon-tekst daarop afstemmen.

6. **[S] u- vs je-vorm** — huisregel zegt ouderteksten in "je"-vorm, geen "u". Vrijwel al het drukwerk (B1-flyers, hulp-sjabloon, folder, juf-start, nieuwkomers-brief, begeleidend briefje) gebruikt "u"; Buurtgezinnen-A/B/C, ALMELO, dia en posters gebruiken "je". Bewuste B1-keuze? Niet massaal omgezet. Kleine mengvormen binnen één bestand wél gefixt (fixes-I.json).

7. **[S] `juf-start-A4.html:95`** — "De leerkracht-functies kunt u de komende twee jaar kosteloos testen en gebruiken (tot en met de zomer van 2028)." Botst met huisregel "Scholen betalen niets" en met PrintHubPage ("voor scholen gratis, gegarandeerd t/m 2031"); suggereert betaling na 2028. Voorstel: "Voor scholen is Leerkwartier gratis, gegarandeerd t/m 2031."

8. **[P] `begeleidend-briefje.html:36`** — "maker van Leerkwartier — vader, geen bedrijf". Sinds de eenmanszaak/KvK-inschrijving mogelijk niet meer waar. Voorstel: "maker van Leerkwartier — een vader uit Nederland". (Persoonsnaam staat alleen als ondertekening; contact = hallo@, dat is goed.)
   Ook r.24: "Beste ___ ," — invulveld; bij leeg laten staat er "Beste ," (komma los). Alleen een aandachtspunt bij printen.

9. **[P] Saba (`flyer-SABA2027.html:61`, `poster-SABA2027.html:64`)** — Engelse payoff "Fifteen minutes a day — really understand what you learn." is geen vertaling van de slogan. Voorstel: "Fifteen minutes of learning a day, a lifetime of being smarter." (of de Nederlandse slogan laten staan). Poster opent met "A calm tutor in your pocket." (vertaling payoff — prima).

10. **[S] "Elke dag een gratis vraag van de dag met uitleg"** (hulp-flyers, folder) — dubbelop ("elke dag … van de dag"). Stijl; voorstel: "Elke dag een nieuwe gratis vraag, met uitleg".

11. **[P] `folder-enschede.html:98`** — "Printbare werkboeken … vraag ernaar bij uw bibliotheek" — liggen die werkboeken echt bij de bibliotheek in Enschede? Niet te verifiëren.

12. **[S] "geen proefperiode"** (hulp-sjabloon, bulk, folder, Saba "No trial") — Familie heeft een proefweek van 7 dagen. Voor codehouders klopt "geen proefperiode" wel; laten staan, maar let op bij een generieke druk.

13. **Nieuwkomers-thuisbrief vertalingen (gefixt in JSON: 2028 → 2031)** — de jaartallen in Arabisch/Oekraïens/Turks/Engels zijn aangepast naar de Nederlandse tekst ("gegarandeerd tot en met 2031", ook NieuwkomersPage). Graag even door een moedertaalspreker laten nalezen; als 2028 juist bedoeld was, de NL-regel aanpassen in plaats daarvan.

14. **Dev-jargon**: geen "leerpad/module" in het drukwerk gevonden. "Leermaatje", "Leesladder", "Familie-pakket" zijn productnamen — prima.

